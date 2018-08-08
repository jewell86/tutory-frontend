// const events = require('./render/event-listeners')
const render = require('./render/render')

//code to render login or main page upon initial visit

render.renderMainPage()

window.onunload = function(ev) {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
}