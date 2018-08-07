const render = require('../render/render')

function registerUserRequest( username, email, password, first_name, last_name ) {
    return axios.post('https://localhost:5000/users/signup', { username, email, password, first_name, last_name })
    .then(token => {
      localStorage.setItem('token', JSON.stringify(token.data.token))
      console.log('token')
    })
}

function loginUserRequest( username, password ) {
    return axios.post('http://localhost:5000/users/login', { username, password })
    .then(token => {
        localStorage.setItem('token', JSON.stringify(token.data.token))
    })
}

function viewProfileRequest(id) {
    return axios.get(`https://localhost:5000/users/${id}`)
    // .then(response => {
    //     render.renderUsersProfilePage()
    // })
}

function searchRequest(query) {
    return axios.get('https://localhost:5000/search', { query })
    .then(result => {
        render.renderSearchPage(result)
    })
}

module.exports = { registerUserRequest, loginUserRequest, viewProfileRequest, searchRequest }
