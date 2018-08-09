const events = require('./event-listeners')
const { create, home, nav, profile, search, register, tutorial, user, myTutorials } = require('../templates')
const users = require('../requests/users').default


function renderMainPage() {
    const token = JSON.parse(localStorage.getItem('token'))
    const navbar = document.querySelector('.navigation')
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
    main.innerHTML = register.registerPageTemplate()
    const token = JSON.parse(localStorage.getItem('token'))
    const navbar = document.querySelector('.navigation')
    if (token) {
            navbar.innerHTML = nav.loggedInNavTemplate()  
        } else {
            navbar.innerHTML = nav.navTemplate()  
        }
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
    tutorials.forEach(tutorial => {
        document.querySelector('.my-tutorials').innerHTML += profile.myTutorials(tutorial)
    })
    const token = JSON.parse(localStorage.getItem('token'))
    const navbar = document.querySelector('.navigation')
    if (token) {
            navbar.innerHTML = nav.loggedInNavTemplate()  
        } else {
            navbar.innerHTML = nav.navTemplate()  
        }
    events.navButtonListeners()
}


function renderTutorialPage(response, user){
    const id = response.data.response.tutorial.id
    const userId = response.data.response.tutorial.users_id
    const title = response.data.response.tutorial.title
    const description = response.data.response.tutorial.description
    const instructorBio = user.data.response.about_me
    const instructorImage = user.data.response.photo_url
    const comments = response.data.response.comments
    const videos = response.data.response.tutorial.urls
    const avgRating = response.data.response.tutorial.avg_rating

    document.querySelector('.main').innerHTML = tutorial.tutorialPageTemplate(id, userId, title, description, instructorBio, instructorImage)
    const avgRatingPercentRounded = `${Math.round((avgRating / 5) * 100 / 10) * 10}%`
    document.querySelector('.stars-inner').style.width = avgRatingPercentRounded
    // console.log(document.querySelector('.stars-inner'))
    
    comments.forEach(comment => {
        document.querySelector('.comments').innerHTML += tutorial.commentsTemplate(comment.content)
    })
    videos.forEach(video => {
        document.querySelector('.videos').innerHTML += tutorial.videosTemplate(video)
    })
    const token = JSON.parse(localStorage.getItem('token'))
    const navbar = document.querySelector('.navigation')
    if (token) {
            navbar.innerHTML = nav.loggedInNavTemplate()  
        } else {
            navbar.innerHTML = nav.navTemplate()  
        }
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



function renderMyTutorialsPage(response) {
    const main = document.querySelector('.main')
    main.innerHTML = myTutorials.myTutorialsPageTemplate()
    const token = JSON.parse(localStorage.getItem('token'))
    const navbar = document.querySelector('.navigation')
    if (token) {
            navbar.innerHTML = nav.loggedInNavTemplate()  
        } else {
            navbar.innerHTML = nav.navTemplate()  
        }
    events.navButtonListeners()    
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
    const token = JSON.parse(localStorage.getItem('token'))
    const navbar = document.querySelector('.navigation')
    if (token) {
            navbar.innerHTML = nav.loggedInNavTemplate()  
        } else {
            navbar.innerHTML = nav.navTemplate()  
        }
    events.navButtonListeners()    
    tutorials.forEach(tutorial => { 
        document.querySelector('.my-tutorials').innerHTML += profile.myTutorials(tutorial)
    })

}

function renderSearchPage(response) {
    const main = document.querySelector('.main')
    main.innerHTML = search.searchPageTemplate()
    const token = JSON.parse(localStorage.getItem('token'))
    const navbar = document.querySelector('.navigation')
    if (token) {
            navbar.innerHTML = nav.loggedInNavTemplate()  
        } else {
            navbar.innerHTML = nav.navTemplate()  
        }
    events.navButtonListeners()
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


module.exports = { renderMainPage, renderRegisterPage, renderUsersProfilePage, renderTutorialPage, renderCreateTutorialPage, renderMyTutorialsPage, renderMyProfilePage, renderSearchPage }
