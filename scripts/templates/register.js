function registerPageTemplate() {
    return    ` <div class="container register-form">
    <div class="row">
        <form class="col s12" id="reg-form">
          <div class="row">
            <div class="input-field col s6">
              <input id="first_name" class="register-first-name" type="text" class="validate" required>
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" class="register-last-name" type="text" class="validate" required>
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" class="register-email" type="email" class="validate" required>
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
          <div class="input-field col s12">
            <input id="username" class="register-username" type="text" class="validate" required>
            <label for="username">Username</label>
          </div>
        </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="password" class="register-password" type="password" class="validate" minlength="6" required>
              <label for="password">Password</label>
            </div>

          <div class="input-field col s6">
            <input id="second-password" class="register-second-password" type="password" class="validate" minlength="6" required>
            <label for="password">Password</label>
          </div>
        </div>
        <div class="alert-message"></div>
            <div class="input-field col s6">
              <button class="btn btn-large btn-register waves-effect register-submit-button deep-orange accent-2" type="text"> Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    `
}

module.exports = { registerPageTemplate }