const events = require('./event-listeners')
const { create, home, nav, profile, search, register, tutorial, user } = require('../templates')
const users = require('../requests/users')


function renderMainPage() {
    // const loginCheck = JSON.parse(localStorage.getItem('token'))
    const navbar = document.querySelector('.navigation')
    // if (loginCheck) {
    //     navbar.innerHTML = nav.loggedInNavTemplate()
    //     events.loggedInNavButtonListeners()
    // } else {
        navbar.innerHTML = nav.loggedOutNavTemplate()  
        events.loggedOutNavButtonListeners()
    // }
    const main = document.querySelector('.main')
    main.innerHTML = home.homePageTemplate()
    location.hash = `/home`
}

function renderRegisterPage() {
    const main = document.querySelector('.main')
    const navbar = document.querySelector('.navigation')
    main.innerHTML = register.registerPageTemplate()
    navbar.innerHTML = nav.loggedOutNavTemplate()
    location.hash = `/register`
    events.loggedOutNavButtonListeners()
    events.registerSubmitButtonListener()
}

function renderUsersProfilePage() {
    const main = document.querySelector('.main')
    const navbar = document.querySelector('.navigation')
    main.innerHTML = profile.viewProfilePageTemplate()
    navbar.innerHTML = nav.loggedOutNavTemplate()
    location.hash = `/${userId}`
    events.loggedOutNavButtonListeners()
}

function renderMyTutorialsPage() {

}

function renderMyProfilePage() {

}


module.exports = { renderMainPage, renderRegisterPage, renderUsersProfilePage, renderMyTutorialsPage, renderMyProfilePage }