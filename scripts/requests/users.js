const render = require('../render/render');
const messages = require('../render/messages')

function mainPageRequest(type) {
  return axios.get(`https://vast-journey-84519.herokuapp.com/search/?q=`)
    .then(response => {
      const render = require('../render/render')
      render.renderMainPage(response, type)
    })

}
function registerUserRequest(username, email, password, first_name, last_name) {
  return axios.post('https://vast-journey-84519.herokuapp.com/users/signup', {
    username,
    email,
    password,
    first_name,
    last_name
  })
    .then(response => {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('userId', response.data.user_id)
    })
    .catch(e => console.log(e))
}

function loginUserRequest(username, password) {
  return axios.post('https://vast-journey-84519.herokuapp.com/users/login', {
    username,
    password
  })
    .then(response => {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('userId', response.data.user_id)
    })
}

function viewProfileRequest(id) {
  axios.get(`https://vast-journey-84519.herokuapp.com/users/${id}`)
    .then(response => {
      const render = require('../render/render')
      render.renderUsersProfilePage(response)
    })
}

function viewTutorialRequest(id, userId) {
  axios.get(`https://vast-journey-84519.herokuapp.com/tutorials/${id}`)
    .then(response => {
      axios.get(`https://vast-journey-84519.herokuapp.com/users/${userId}`)
        .then(user => {
          const render = require('../render/render')
          render.renderTutorialPage(response, user)
        })
    })
    .catch(e => console.log(e))
}

function searchRequest(query) {
  return axios.get(`https://vast-journey-84519.herokuapp.com/search/?q=${query}`)
    .then(response => {
      const render = require('../render/render')
      render.renderSearchPage(response)
    })
}

function myTutorialsRequest(id, token) {
  return axios.get(`https://vast-journey-84519.herokuapp.com/users/${id}/myTutorials`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      const render = require('../render/render')
      render.renderMyTutorialsPage(response)
    })
}

function myProfileRequest(id, token) {
  return axios.get(`https://vast-journey-84519.herokuapp.com/users/${id}/myProfile`, {
    headers: {
      authorization: `Bearer ${token}`
    }
    })
      .then(response => {
        const render = require('../render/render')
        render.renderMyProfilePage(response)
      })
}

function addToWatchListRequest(users_id, tutorials_id, token) {
  const body = { users_id, tutorials_id }
  return axios.post(`https://vast-journey-84519.herokuapp.com/users-tutorials`, body, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  .then(response => {
    const token = localStorage.getItem('token')
    let userId = response.data.response.users_id
    myTutorialsRequest(userId, token)
  })
}


module.exports = {
    mainPageRequest,
    registerUserRequest,
    loginUserRequest,
    viewProfileRequest,
    viewTutorialRequest,
    searchRequest,
    myTutorialsRequest,
    myProfileRequest,
    addToWatchListRequest,
}
