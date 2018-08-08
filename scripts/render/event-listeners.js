const users = require('../requests/users')
const tutorials = require('../requests/tutorials')
const profile = require('../templates/profile')
const contents = require('../requests/contents')
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
            const token = JSON.parse(localStorage.getItem('token'))
            const id = JSON.parse(localStorage.getItem('userId'))
            users.myTutorialsRequest(id, token)
        })
        document.querySelector('.nav-my-profile').addEventListener('click', (ev) => {
            ev.preventDefault()
            const token = JSON.parse(localStorage.getItem('token'))
            const id = JSON.parse(localStorage.getItem('userId'))
            users.myProfileRequest(id, token)
        })
        document.querySelector('.nav-logout').addEventListener('click', (ev) => {
            ev.preventDefault()
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            render.renderMainPage()
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

function itemListeners() {
    document.querySelectorAll('.search-item').forEach(item => {
        item.addEventListener('click', (ev) => {
            ev.preventDefault()
            const type = event.target.dataset.type
            const id = event.target.dataset.id
            if (type === 'user') {
                const users = require('../requests/users')
                users.viewProfileRequest(id)
            } else if (type === 'tutorial') {
                const userId = event.target.dataset.userid
                const users = require('../requests/users')
            users.viewTutorialRequest(id, userId)
            }
         })
    })
}

function newTutorialListeners () {
  document.querySelector('.create-tutorial-btn').addEventListener('click', async (ev) => {
    ev.preventDefault()

    try {
      const users_id = localStorage.getItem('userId')
      const title = document.getElementById('title').value
      const description = document.getElementById('desc') ? document.getElementById('desc').value : null
      const thumbnail = document.getElementById('img').value
      const newTutorial = await tutorials.createTutorial(title, description, thumbnail, parseInt(users_id))

      console.log(newTutorial)

      let i = 1
      while (i < 6) {
        const video = document.getElementById(`video${i}`)
        if (video.value != '') {
          let videoURL = video.value
          const newVideo = await contents.createTutorialContent(parseInt(newTutorial.id), videoURL)
          console.log(newVideo)
        }
        i++
      }

      let main = document.querySelector('.main')
      main.innerHTML = profile.profilePageTemplate()
    } catch (e) {
      throw new Error('Failed to create tutorial')
    }
  })
}








module.exports = { navButtonListeners, registerSubmitButtonListener, itemListeners, newTutorialListeners }
