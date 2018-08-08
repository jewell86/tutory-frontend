const users = require('../requests/users').default
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
        document.querySelector('.nav-my-tutorials').addEventListener('click', (ev) => {
            ev.preventDefault()
            users.myTutorialsRequest(id)
        })
        document.querySelector('.nav-my-profile').addEventListener('click', (ev) => {
            ev.preventDefault()
            users.myProfileRequest()
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
                console.log('user')
                return users.viewProfileRequest(id)
            } else if (type === 'tutorial') {
                const userId = event.target.dataset.userid
                return users.viewTutorialRequest(id, userId)
            }
         })    
    })
}










module.exports = { navButtonListeners, registerSubmitButtonListener, itemListeners }
