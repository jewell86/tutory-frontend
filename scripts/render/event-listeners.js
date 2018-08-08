const users = require('../requests/users')
const tutorials = require('../requests/tutorials')
const render = require('./render')
const message = require('./messages')


function navButtonListeners() {
    const token = JSON.parse(localStorage.getItem('token'))
    if (token) {
        const render = require('./render')
        document.querySelector('.nav-home').addEventListener('click', (ev) => {
            ev.preventDefault()
            render.renderMainPage()
        })
        document.querySelector('.nav-create-tutorial').addEventListener('click', (ev) => {
            ev.preventDefault()
            render.renderCreateTutorialPage()
        })
        // document.querySelector('.add-mult-videos-to-tutorial').addEventListener('click', (ev) => {
        //     ev.preventDefault()
        //     render.addAnotherVideoToTutorialTemplate()
        //     do something here to dynamically generate new video inputs in the form
        //     re-add button to form
        // })
        document.querySelector('.nav-my-tutorials').addEventListener('click', (ev) => {
            ev.preventDefault()
            render.renderMyTutorialsPage()
        })
        document.querySelector('.nav-my-profile').addEventListener('click', (ev) => {
            ev.preventDefault()
            render.renderMyProfilePage()
        })
        document.querySelector('.search').addEventListener('submit', (ev) => {
            ev.preventDefault()
            const query = document.querySelector('#search').value
            users.searchRequest( query )
        })
    } else {
        const render = require('./render')
        document.querySelector('.nav-home').addEventListener('click', (ev) => {
            ev.preventDefault()
            render.renderMainPage()
        })
        document.querySelector('.nav-login').addEventListener('click', (ev) => {
            ev.preventDefault()
            document.querySelector('.login-submit').addEventListener('click', (event) => {
                event.preventDefault()
                const username = document.querySelector('.login-username').value
                const password = document.querySelector('.login-password').value
                if ( username && password ) {
                    users.loginUserRequest( username, password )
                    .then(response => {
                        render.renderMainPage()
                        message.loginSuccess()
                    })
                }
            })
        })
        document.querySelector('.nav-register').addEventListener('click', (ev) => {
            ev.preventDefault()
            console.log('helo')
            render.renderRegisterPage()
        })
        document.querySelector('.search').addEventListener('submit', (ev) => {
            ev.preventDefault()
            const query = document.querySelector('#search').value
            users.searchRequest( query )
        })
    }
}

function registerSubmitButtonListener() {
    document.querySelector('.register-submit-button').addEventListener('click', (ev) => {
        ev.preventDefault()
        const render = require('./render')
        const first_name = document.querySelector('.register-first-name').value
        const last_name = document.querySelector('.register-last-name').value
        const username = document.querySelector('.register-username').value
        const email = document.querySelector('.register-email').value
        const password = document.querySelector('.register-password').value
        const secondPassword = document.querySelector('.register-second-password').value
        if ( password !== secondPassword ) {
            message.passwordsMatch()
            registerSubmitButtonListener()
        } else if ( first_name && last_name && username && email && password ) {
            users.registerUserRequest(  username, email, password, first_name, last_name )
            .then(response => {
                render.renderMainPage()
            })
            .then(response => {
                message.registerSuccess()
            })
        } else {
            message.allFieldsRequired()
            registerSubmitButtonListener()
        }
    })
}

function tutorialUserLinkListeners() {
    //event listener on click
    //const id = event.id
    //render.renderTutorialPage(id)
    //or renderUserProfilePage(id)
}

function newTutorialListeners () {
  document.querySelector('.create-tutorial-btn').addEventListener('click', async (ev) => {
    ev.preventDefault()

    try {
      const users_id = localStorage.getItem('user_id')
      const title = document.getElementById('title').value
      const description = document.getElementById('desc') ? document.getElementById('desc').value : null
      const thumbnail = document.getElementById('img').value
      const newTutorial = await tutorials.createTutorial(title, description, thumbnail, users_id)

      console.log(newTutorial)

      // const video1 = document.getElementById('video1') ? document.getElementById('video1').value
      // const video2 = document.getElementById('video2') ? document.getElementById('video2').value
      // const video3 = document.getElementById('video3') ? document.getElementById('video3').value
      // const video4 = document.getElementById('video4') ? document.getElementById('video4').value
      // const video5 = document.getElementById('video5') ? document.getElementById('video5').value
      // axios to create content
    } catch (e) {
      throw new Error(e)
    }
  })
}








module.exports = { navButtonListeners, registerSubmitButtonListener, tutorialUserLinkListeners, newTutorialListeners }
