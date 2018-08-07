const users = require('../requests/users')
const render = require('./render')
const message = require('./messages')

function loggedInNavButtonListeners () {
    const render = require('./render')
    document.querySelector('.nav-home').addEventListener('click', (ev) => {
        ev.preventDefault()
        render.renderMainPage()
    })
    document.querySelector('.nav-my-tutorials').addEventListener('click', (ev) => {
        ev.preventDefault()
        render.renderMyTutorialsPage()
    })
    document.querySelector('.nav-my-profile').addEventListener('click', (ev) => {
        ev.preventDefault()
        render.renderMyProfilePage()
    })
}

function loggedOutNavButtonListeners() {
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
                    messages.loginSuccess()
                })
            }
        })
    })
    document.querySelector('.nav-register').addEventListener('click', (ev) => {
        ev.preventDefault()
        console.log('helo')
        render.renderRegisterPage()
    })
}


function registerSubmitButtonListener() {
    document.querySelector('.register-submit-button').addEventListener('click', (ev) => {
        const render = require('./render')
        const firstName = document.querySelector('.register-first-name').value
        const lastName = document.querySelector('.register-last-name').value
        const username = document.querySelector('.register-username').value
        const email = document.querySelector('.register-email').value
        const password = document.querySelector('.register-password').value
        const secondPassword = document.querySelector('.register-second-password').value
        if ( password !== secondPassword ) {
            message.passwordsMatch()
            registerSubmitButtonListener()
        } else if ( firstName && lastName && username && email && password ) {
            users.registerUserRequest( firstName, lastName, username, email, password )
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

function searchButtonSubmitListener() {

}

window.onhashchange = render.renderUsersProfile






module.exports = { loggedInNavButtonListeners, loggedOutNavButtonListeners, searchButtonSubmitListener, registerSubmitButtonListener }
