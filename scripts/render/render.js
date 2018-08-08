const events = require('./event-listeners')
const { create, home, nav, profile, search, register, tutorial, user } = require('../templates')
const users = require('../requests/users')


function renderMainPage() {
    const navbar = document.querySelector('.navigation')
    const token = JSON.parse(localStorage.getItem('token'))
    if (token) {
        navbar.innerHTML = nav.loggedInNavTemplate()
    } else {
        navbar.innerHTML = nav.navTemplate()
    }
    events.navButtonListeners()
    events.tutorialUserLinkListeners()
    const main = document.querySelector('.main')
    main.innerHTML = home.homePageTemplate()
}

function renderRegisterPage() {
    const main = document.querySelector('.main')
    const navbar = document.querySelector('.navigation')
    main.innerHTML = register.registerPageTemplate()
    navbar.innerHTML = nav.navTemplate()
    events.navButtonListeners()
    events.registerSubmitButtonListener()
}

function renderUsersProfilePage(id) {
    users.viewProfileRequest(id)
    .then(user => {
    document.querySelector('.main').innerHTML = profile.viewProfilePageTemplate(user)
    document.querySelector('.navigation').innerHTML = nav.loggedOutNavTemplate()
    })
    events.navButtonListeners()
}

function renderCreateTutorialPage() {
  const main = document.querySelector('.main')
  const navbar = document.querySelector('.navigation')
  const token = JSON.parse(localStorage.getItem('token'))
  if (token) {
    main.innerHTML = create.createTutorialTemplate()
    navbar.innerHTML = nav.loggedInNavTemplate()
    events.navButtonListeners()
    events.newTutorialListeners()
  } else {
    main.innerHTML = home.homePageTemplate()
    navbar.innerHTML = nav.navTemplate()
    events.navButtonListeners()
  }
}

function renderTutorialPage(tutorial){

}

function renderMyTutorialsPage() {

}

function renderMyProfilePage() {

}

function renderSearchPage(response) {
    const main = document.querySelector('.main')
    const navbar = document.querySelector('.navigation')
    main.innerHTML = search.searchPageTemplate()
    navbar.innerHTML = nav.loggedOutNavTemplate()
    response.forEach(item => {
        const image = item.image_url
        document.querySelector('.search-template').innerHTML += searchItem(image)
    })
    events.navButtonListeners()
    events.tutorialUserLinkListeners()
}

// if (item.username) {
//     const image = item.image_url
//     const username = item.username
//     const firstName = item.first_name
//     const lastName = item.last_name
//     const aboutMe = item.about_me
//     const myTutorials = item.user_tutorials
//     searchArray.push({ image, username, firstName, lastName, aboutMe, myTutorials })
// } else {
//     const usersId = item.users_id
//     const title = item.title
//     const image = item.image_url
//     const description = item.description
//     const videoUrl = item.video_url
//     searchArray.push({ usersId, title, description, videoUrl })
// }


module.exports = { renderMainPage, renderRegisterPage, renderUsersProfilePage, renderTutorialPage, renderCreateTutorialPage, renderMyTutorialsPage, renderMyProfilePage, renderSearchPage }
