const render = require('../render/render');

function registerUserRequest( username, email, password, first_name, last_name ) {
    return axios.post('http://localhost:5000/users/signup', { username, email, password, first_name, last_name })
    .then(token => {
      localStorage.setItem('token', JSON.stringify(token.data.token))
      console.log('token')
    })
    .catch(e => console.log(e))
}

function loginUserRequest( username, password ) {
    return axios.post('http://localhost:5000/users/login', { username, password })
    .then(token => {
        localStorage.setItem('token', JSON.stringify(token.data.token))
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

function myTutorialsRequest(id) {
    return axios.get(`http://localhost:5000/users/${id}/myTutorials`)
}

function myProfileRequest() {

}

module.exports = { registerUserRequest, loginUserRequest, viewProfileRequest, viewTutorialRequest, searchRequest, myTutorialsRequest, myProfileRequest }

