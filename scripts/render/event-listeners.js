const users = require('../requests/users')
const tutorials = require('../requests/tutorials')
const profile = require('../templates/profile')
const tutorial = require('../templates/tutorial')
const contents = require('../requests/contents')
const render = require('./render')
const message = require('./messages')

window.onclick = function(ev) {
    document.querySelector('.alerts').innerHTML = ``
}

function navButtonListeners() {
    const token = localStorage.getItem('token')
    if (token) {
        const render = require('./render')
        document.querySelector('.nav-home').addEventListener('click', (ev) => {
            ev.preventDefault()
            users.mainPageRequest()
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
            const token = localStorage.getItem('token')
            const id = JSON.parse(localStorage.getItem('userId'))
            users.myTutorialsRequest(id, token)
        })
        document.querySelector('.nav-my-profile').addEventListener('click', (ev) => {
            ev.preventDefault()
            const token = localStorage.getItem('token')
            const id = JSON.parse(localStorage.getItem('userId'))
            users.myProfileRequest(id, token)
        })
        document.querySelector('.nav-logout').addEventListener('click', (ev) => {
            ev.preventDefault()
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            users.mainPageRequest('logout')
        })
        document.querySelector('.search-button').addEventListener('click', (ev) => {
            ev.preventDefault()
            const query = document.querySelector('#search').value
            users.searchRequest( query )
        })
    } else {
        const render = require('./render')
        document.querySelector('.nav-home').addEventListener('click', (ev) => {
            ev.preventDefault()
            users.mainPageRequest()
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
                        users.mainPageRequest('login')
                    })
                } else {
                    message.unsuccessfulLogin()
                }
            })
        })
        document.querySelector('.nav-register').addEventListener('click', (ev) => {
            ev.preventDefault()
            render.renderRegisterPage()
        })
        document.querySelector('.search-button').addEventListener('click', (ev) => {
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
                users.mainPageRequest('register')
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
        const userId = event.target.dataset.userId
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

      let i = 1
      while (i < 6) {
        const video = document.getElementById(`video${i}`)
        if (video.value != '') {
          let videoURL = video.value
          const newVideo = await contents.createTutorialContent(parseInt(newTutorial.id), videoURL)
        }
        i++
      }

      const creator = await axios.get(`http://localhost:5000/users/${users_id}`).then(response => { return response.data.response })
      document.querySelector('.main').innerHTML = tutorial.tutorialPageTemplate(newTutorial.id, users_id, title, description, creator.about_me, thumbnail)
      navButtonListeners()
      tutorialAddButtonListener()
    } catch (e) {
      throw new Error(e)
    }
  })
}

function addButtonListener() {
    document.querySelectorAll('.add-button').forEach(button => {
        button.addEventListener('click', (ev) => {
            ev.preventDefault()
            
            const token = localStorage.getItem('token')
            if (!token) {
                const render = require('./render')
                render.renderRegisterPage()
            }
            const users_id = localStorage.getItem('userId')
            let tutorials_id 
            if (event.target.innerText === 'add') {
                console.log('hi')
                let tutorials_id = event.target.parentNode.parentNode.children[0].children[0].dataset.id
                const users = require('../requests/users')
                users.addToWatchListRequest(users_id, tutorials_id, token)
            } else {
                let tutorials_id = event.target.dataset.id
                const users = require('../requests/users')
                users.addToWatchListRequest(users_id, tutorials_id, token)
            }     

        })
    })
}

function tutorialAddButtonListener() {
    document.querySelector('.tut-add-btn').addEventListener('click', (ev) => {
            ev.preventDefault()
            
            const token = localStorage.getItem('token')
            if (!token) {
                const render = require('./render')
                render.renderRegisterPage()
             } else {
                let tutorials_id = event.target.dataset.id
                const users_id = localStorage.getItem('userId')
                const users = require('../requests/users')
                users.addToWatchListRequest(users_id, tutorials_id, token)
             }
            })    
}


function addComment (comment, id) {
  document.querySelector('.add-comment').addEventListener('click', (ev) => {
    ev.preventDefault()
    document.querySelector('.container').innerHTML += comment.newCommentFormTemplate()
    if (document.querySelector('#new-tutorial-form').getAttribute('display') === 'none') document.getElementById('new-tutorial-form').removeAttribute('display')

    document.querySelector('.create-comment-btn').addEventListener('click', async (ev) => {
      ev.preventDefault()

      const users_id = localStorage.getItem('userId')
      const tutorials_id = id
      try {
        const content = document.querySelector('.comment-content').value
        const newComment = await tutorials.createTutorialComment(parseInt(users_id), parseInt(tutorials_id), content)
        
        await axios.get(`http://localhost:5000/users/${newComment[0].users_id}`)
          .then(response => { return response.data.response })

        document.querySelector('.comments').innerHTML = ''

        const updatedComments = await axios.get(`http://localhost:5000/tutorials/${id}`).then(response => { return response.data.response })
        const render = require('./render')
        render.addCommentsToCommentsDiv(updatedComments.comments, true)
      } catch (e) { throw new Error(e) }
      users.viewTutorialRequest(tutorials_id, uses_id)
    })
  })
}

module.exports = { navButtonListeners, registerSubmitButtonListener, itemListeners, newTutorialListeners, addButtonListener, tutorialAddButtonListener, addComment }
