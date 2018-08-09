// const events = require('./render/event-listeners')
const render = require('./render/render')
const users = require('./requests/users')

//code to render login or main page upon initial visit

users.mainPageRequest()

window.onunload = function(ev) {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
}