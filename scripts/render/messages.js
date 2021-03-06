function passwordsMatch() {
  document.querySelector('.alert-message').innerHTML = ''
  document.querySelector('.alert-message').innerHTML = '<p>Passwords must match!</p>'
}

function allFieldsRequired() {
  document.querySelector('.alert-message').innerHTML = ''
  document.querySelector('.alert-message').innerHTML = '<p>Please fill out all fields</p>'
}

function registerSuccess() {
  document.querySelector('.alerts').innerHTML = ``
  document.querySelector('.alerts').innerHTML =`<div class="alert alert-success">
  <strong>You are registered!</strong></div> `
}

function loginSuccess(){
  document.querySelector('.alerts').innerHTML = ``
  document.querySelector('.alerts').innerHTML =`<div class="alert alert-success">
  <strong>You are logged in!</strong></div> `
}

function unsuccessfulLogin() {
  document.querySelector('.alerts').innerHTML = ``
  document.querySelector('.alerts').innerHTML =`<div class="alert alert-success">
  <strong>Please provide a username and password</strong></div> `
}

function logoutSuccess() {
  document.querySelector('.alerts').innerHTML = ``
  document.querySelector('.alerts').innerHTML =`<div class="alert alert-success logout">
  <strong>You are logged out!</strong></div> `
}

module.exports = { passwordsMatch, allFieldsRequired, registerSuccess, loginSuccess, unsuccessfulLogin, logoutSuccess }