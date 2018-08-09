const render = require('../render/render');


function mainPageRequest(type) {
    return axios.get(`http://localhost:5000/search/?q=`)
    .then(response => {
        const render = require('../render/render')
        render.renderMainPage(response, type)
    })

}
function registerUserRequest(username, email, password, first_name, last_name) {
    return axios.post('http://localhost:5000/users/signup', {
            username,
            email,
            password,
            first_name,
            last_name
        })
        .then(response => {
            localStorage.setItem('token', JSON.stringify(response.data.token))
            localStorage.setItem('userId', response.data.user_id)
        })
        .catch(e => console.log(e))
}

function loginUserRequest(username, password) {
    return axios.post('http://localhost:5000/users/login', {
            username,
            password
        })
        .then(response => {
            localStorage.setItem('token', JSON.stringify(response.data.token))
            localStorage.setItem('userId', response.data.user_id)
        })
}

function viewProfileRequest(id) {
    axios.get(`http://localhost:5000/users/${id}`)
        .then(response => {
            const render = require('../render/render')
            render.renderUsersProfilePage(response)
        })
}

function viewTutorialRequest(id, userId) {
  axios.get(`http://localhost:5000/tutorials/${id}`)
    .then(response => {
      axios.get(`http://localhost:5000/users/${userId}`)
        .then(user => {
          const render = require('../render/render')
          render.renderTutorialPage(response, user)
        })
    })
    .catch(e => console.log(e))
}

function searchRequest(query) {
    return axios.get(`http://localhost:5000/search/?q=${query}`)
        .then(response => {
            const render = require('../render/render')
            render.renderSearchPage(response)
        })
}

function myTutorialsRequest(id, token) {
    return axios.get(`http://localhost:5000/users/${id}/myTutorials`, {
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
    return axios.get(`http://localhost:5000/users/${id}/myProfile`, {
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
    return axios.post(`http://localhost:5000/users-tutorials`, body, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        const token = JSON.parse(localStorage.getItem('token'))
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
