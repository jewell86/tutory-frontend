const render = require('../render/render');

function registerUserRequest( username, email, password, first_name, last_name ) {
    return axios.post('http://localhost:5000/users/signup', { username, email, password, first_name, last_name })
    .then(response => {
      localStorage.setItem('token', JSON.stringify(response.data.token))
      localStorage.setItem('userId', response.data.user_id)
    })
    .catch(e => console.log(e))
}

function loginUserRequest( username, password ) {
    return axios.post('http://localhost:5000/users/login', { username, password })
    .then(response => {
      localStorage.setItem('token', JSON.stringify(response.data.token))
      localStorage.setItem('userId', response.data.user_id)
    })
}

function viewProfileRequest(id) {
    return axios.get(`http://localhost:5000/users/${id}`)
    .then(response => {
        const render = require('../render/render')
        render.renderUsersProfilePage(response)
    })
}

function viewTutorialRequest(id, userId) {
    return axios.get(`http://localhost:5000/tutorials/${id}`)
    .then(response => {
        return axios.get(`http://localhost:5000/users/${userId}`)
        .then(user => {
            const render = require('../render/render')
            render.renderTutorialPage(response, user)
        })
        })

}

function searchRequest(query) {
    return axios.get(`http://localhost:5000/search/?q=${query}`)
    .then(response => {
        const render = require('../render/render')
        render.renderSearchPage(response)
    })
}

function myTutorialsRequest(id, token) {
    return axios.get(`http://localhost:5000/users/${id}/myTutorials`, { headers: { authorization: `Bearer ${token}`}})
    .then(response => {
        const render = require('../render/render')
        render.renderMyTutorialsPage(response)
    })
}

function myProfileRequest(id, token) {
    return axios.get(`http://localhost:5000/users/${id}/myProfile`, { headers: { authorization: `Bearer ${token}`}})
    .then(response => {
        const render = require('../render/render')
        render.renderMyProfilePage(response)
    })
}

module.exports = { registerUserRequest, loginUserRequest, viewProfileRequest, viewTutorialRequest, searchRequest, myTutorialsRequest, myProfileRequest }
