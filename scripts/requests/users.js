const render = require('../render/render')

function registerUserRequest( firstName, lastName, username, email, password ) {
    return axios.post('https://localhost:5000/users/signup', { firstName, lastName, username, email, password })
    .then(token => {
      localStorage.setItem('token', JSON.stringify(token.data.token))
    })
}

function loginUserRequest( username, password ) {
    return axios.post('https://localhost:5000/users/login', { username, password })
    .then(token => {
        localStorage.setItem('token', JSON.stringify(token.data.token))
    })
}

function viewProfileRequest(token) {
    return axios.get('https://localhost:5000/users/:userId', { headers: { authorization: `Bearer ${token}`}})
    .then(response => {
        response
    })
}

module.exports = { registerUserRequest, loginUserRequest, viewProfileRequest } 