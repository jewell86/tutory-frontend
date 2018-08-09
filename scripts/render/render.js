const events = require('./event-listeners')
const { comment, create, home, nav, profile, search, register, tutorial, user, myTutorials } = require('../templates')
const users = require('../requests/users').default
const message = require('./messages')

function renderMainPage(response, type) {
    if (window.scrollY) window.scroll(0, 0)

    const main = document.querySelector('.main')
    main.innerHTML = home.homePageTemplate()
    const token = localStorage.getItem('token')
    const navbar = document.querySelector('.navigation')

    if (token) {
      navbar.innerHTML = nav.loggedInNavTemplate()
    } else {
      navbar.innerHTML = nav.navTemplate()
    }

    if (type === 'register') {
      message.registerSuccess()
    } else if (type === 'login') {
      message.loginSuccess()
    } else if (type === 'logout') {
      message.logoutSuccess()
    }

    const data = Array.from(response.data.response)
    data.forEach(item => {
      if (item.type === 'user') {
        document.querySelector('.search-template').innerHTML += home.homeItemUser(item)
      } else if (item.type === 'tutorial') {
        document.querySelector('.search-template').innerHTML += home.homeItemTutorial(item)
      }
    })

    events.navButtonListeners()
    events.itemListeners()
    events.addButtonListener()
}



function renderRegisterPage() {
  if (window.scrollY) window.scroll(0, 0)

  const main = document.querySelector('.main')
  main.innerHTML = register.registerPageTemplate()
  const token = localStorage.getItem('token')
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
    if (window.scrollY) window.scroll(0, 0)

    const image = response.data.response.photo_url
    const username = response.data.response.username
    const firstName = response.data.response.first_name
    const lastName = response.data.response.last_name
    const aboutMe = response.data.response.about_me
    const tutorials = response.data.response.myTutorials
    const userId = response.data.response.id
    document.querySelector('.main').innerHTML = profile.viewProfilePageTemplate(image, username, firstName, lastName, aboutMe)
    tutorials.forEach(tutorial => {
        document.querySelector('.my-tutorials').innerHTML += profile.myTutorials(tutorial, userId)
    })
    const token = JSON.parse(localStorage.getItem('token'))
    const navbar = document.querySelector('.navigation')
    if (token) {
            navbar.innerHTML = nav.loggedInNavTemplate()
        } else {
            navbar.innerHTML = nav.navTemplate()
        }
    events.navButtonListeners()
    events.addButtonListener()
    events.itemListeners()

}


function renderTutorialPage (response, user) {
  if (window.scrollY) window.scroll(0, 0)

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

  addCommentsToCommentsDiv(comments)
  events.addComment(comment, id)

  videos.forEach(video => { document.querySelector('.videos').innerHTML += tutorial.videosTemplate(video)})

  const token = localStorage.getItem('token')
  const navbar = document.querySelector('.navigation')

  if (token) navbar.innerHTML = nav.loggedInNavTemplate()
  else navbar.innerHTML = nav.navTemplate()

  events.navButtonListeners()
  events.addButtonListener()
}

function addCommentsToCommentsDiv (comments, hideForm=false) {
  comments.forEach(async (userComment) => {
    try {
      axios.get(`http://localhost:5000/users/${userComment.users_id}`)
        .then(response => {
            console.log(response)
          document.querySelector('.comments').innerHTML += tutorial.commentsTemplate(userComment.content, response.data.response)
          if (hideForm) document.getElementById('new-tutorial-form').style.display = 'none'
        })
    } catch (e) {
      throw new Error(e)
    }
  })
}

function renderCreateTutorialPage() {
  if (window.scrollY) window.scroll(0, 0)

  const main = document.querySelector('.main')
  const navbar = document.querySelector('.navigation')
  const token = localStorage.getItem('token')
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
    if (window.scrollY) window.scroll(0, 0)

    const main = document.querySelector('.main')
    main.innerHTML = myTutorials.myTutorialsPageTemplate()
    const token = localStorage.getItem('token')
    const navbar = document.querySelector('.navigation')
    if (token) {
            navbar.innerHTML = nav.loggedInNavTemplate()
        } else {
            navbar.innerHTML = nav.navTemplate()
        }
    events.navButtonListeners()
    const data = response.data.response
    console.log(data.response.data)
    data.forEach(item => {
        document.querySelector('.my-tutorials').innerHTML += myTutorials.tutorial(item)
    })
    events.navButtonListeners()
    events.itemListeners()
    events.addButtonListener()
}

function renderMyProfilePage(response) {
    if (window.scrollY) window.scroll(0, 0)

    const image = response.data.response.photo_url
    const username = response.data.response.username
    const firstName = response.data.response.first_name
    const lastName = response.data.response.last_name
    const aboutMe = response.data.response.about_me
    const tutorials = response.data.response.myTutorials

    document.querySelector('.main').innerHTML = profile.viewProfilePageTemplate(image, username, firstName, lastName, aboutMe)

    const token = localStorage.getItem('token')
    const navbar = document.querySelector('.navigation')
    const userId = JSON.parse(localStorage.getItem('userId'))

    if (token) {
      navbar.innerHTML = nav.loggedInNavTemplate()
    } else {
      navbar.innerHTML = nav.navTemplate()
    }

    tutorials.forEach(tutorial => {
      
      document.querySelector('.my-tutorials').innerHTML += profile.myTutorials(userId, tutorial)
    })

    events.navButtonListeners()
    events.itemListeners()
    events.addButtonListener()
}

function renderSearchPage(response) {
    if (window.scrollY) window.scroll(0, 0)

    const main = document.querySelector('.main')
    main.innerHTML = search.searchPageTemplate()
    const token = localStorage.getItem('token')
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
    events.addButtonListener()

}


module.exports = { renderMainPage, renderRegisterPage, renderUsersProfilePage, renderTutorialPage, renderCreateTutorialPage, renderMyTutorialsPage, renderMyProfilePage, renderSearchPage, addCommentsToCommentsDiv }
