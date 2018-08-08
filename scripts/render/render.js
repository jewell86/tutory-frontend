const events = require('./event-listeners')
const { create, home, nav, profile, search, register, tutorial, user, myTutorials } = require('../templates')
const users = require('../requests/users').default


function renderMainPage() {
    const navbar = document.querySelector('.navigation')
    const token = JSON.parse(localStorage.getItem('token'))
    if (token) {
        navbar.innerHTML = nav.loggedInNavTemplate()
    } else {
        navbar.innerHTML = nav.navTemplate()
    }
    events.navButtonListeners()
    const main = document.querySelector('.main')
    main.innerHTML = home.homePageTemplate()
    events.itemListeners()
}

function renderRegisterPage() {
    const main = document.querySelector('.main')
    const navbar = document.querySelector('.navigation')
    main.innerHTML = register.registerPageTemplate()
    navbar.innerHTML = nav.navTemplate()
    events.navButtonListeners()
    events.registerSubmitButtonListener()
}

function renderUsersProfilePage(response) {
    const image = response.data.response.photo_url
    const username = response.data.response.username
    const firstName = response.data.response.first_name
    const lastName = response.data.response.last_name
    const aboutMe = response.data.response.about_me
    const tutorials = response.data.response.myTutorials
    document.querySelector('.main').innerHTML = profile.viewProfilePageTemplate(image, username, firstName, lastName, aboutMe)
    document.querySelector('.navigation').innerHTML = nav.navTemplate()
    tutorials.forEach(tutorial => {
        document.querySelector('.my-tutorials').innerHTML += profile.myTutorials(tutorial)
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

function renderMyTutorialsPage(response) {
    const main = document.querySelector('.main')
    const navbar = document.querySelector('.navigation')
    main.innerHTML = myTutorials.myTutorialsPageTemplate()
    navbar.innerHTML = nav.loggedInNavTemplate()
    const data = response.data.response
    console.log(data)
    document.querySelector('.my-tutorials').innerHTML += myTutorials.tutorial(data)
    events.navButtonListeners()
    events.itemListeners()
}

function renderMyProfilePage(response) {
    console.log(response)
    const image = response.data.response.photo_url
    const username = response.data.response.username
    const firstName = response.data.response.first_name
    const lastName = response.data.response.last_name
    const aboutMe = response.data.response.about_me
    const tutorials = response.data.response.myTutorials
    document.querySelector('.main').innerHTML = profile.viewProfilePageTemplate(image, username, firstName, lastName, aboutMe)
    document.querySelector('.navigation').innerHTML = nav.navTemplate()
    tutorials.forEach(tutorial => { 
        document.querySelector('.my-tutorials').innerHTML += profile.myTutorials(tutorial)
    })
    events.navButtonListeners()

}

function renderSearchPage(response) {
    const main = document.querySelector('.main')
    const navbar = document.querySelector('.navigation')
    main.innerHTML = search.searchPageTemplate()
    navbar.innerHTML = nav.navTemplate()
    const data = Array.from(response.data.response)
    data.forEach(item => {
        if (item.type === 'user'){
            document.querySelector('.search-template').innerHTML += search.searchItemUser(item)
        } else if (item.type === 'tutorial') {
            document.querySelector('.search-template').innerHTML += search.searchItemTutorial(item)
        }
    })
    events.navButtonListeners()
    events.itemListeners()
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
