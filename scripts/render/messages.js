function passwordsMatch() {
    document.querySelector('.alert-message').innerHTML = ''
    document.querySelector('.alert-message').innerHTML = '<p>Passwords must match!</p>'
}

function allFieldsRequired() {
    document.querySelector('.alert-message').innerHTML = ''
    document.querySelector('.alert-message').innerHTML = '<p>Please fill out all fields</p>'

}

function registerSuccess() {
    document.querySelector('.alert-success').classList.remove('hide')
}

function loginSuccess(){
    
}

function logoutSuccess() {

}

module.exports = { passwordsMatch, allFieldsRequired, registerSuccess, loginSuccess, logoutSuccess }