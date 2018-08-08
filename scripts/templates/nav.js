function loggedInNavTemplate() {
    return `
    <div class="navbar-fixed">
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo nav-home">Tutory</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li class="search">
      <form>
      <div class="input-field">
          <input id="search" type="search" required>
          <label class="label-icon" for="search"><i class="material-icons glass">search</i></label>
          <i class="material-icons close">close</i>
        </div>
        </form>
        </li>
        <li><a href="#" class="nav-create-tutorial">New Tutorial</a></li>
        <li><a href="#" class="nav-my-tutorials">Watchlist</a></li>
        <li><a href="#" class="nav-my-profile">My Profile</a></li>
      </ul>
    </div>
    </nav>
    </div>
`
}

function navTemplate() {
    return `
    <div class="navbar-fixed">
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo nav-home">Tutory</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li class="search">
      <form>
      <div class="input-field">
          <input id="search" type="search" required>
          <label class="label-icon" for="search"><i class="material-icons glass">search</i></label>
          <i class="material-icons close">close</i>
        </div>
        </form>
        </li>
      <li class="dropdown">
      <a href="#" class="dropdown-toggle nav-login" data-toggle="dropdown"><b class="nav-login">Login</b> <span class="caret"></span></a>
        <ul id="login-dp" class="dropdown-menu">
            <li>
                 <div class="row">
                        <div class="col-md-12">
                             <form class="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
                                    <div class="form-group">
                                         <input type="text" class="form-control login-username" id="exampleInputEmail2" placeholder="Username" required>
                                    </div>
                                    <div class="form-group">
                                         <input type="password" class="form-control login-password" id="exampleInputPassword2" placeholder="Password" required>
                                         <div class="help-block text-right"><a href="">Forget password?</a></div>
                                    </div>
                                    <div class="form-group">
                                         <button class="dropdown-toggle btn btn-primary btn-block login-submit" data-toggle="dropdown">Login</button>
                                    </div>

                             </form>
                        </div>

                 </div>
            </li>
        </ul>
    </li>

      <li><a href="#"class="nav-register">Register</a></li>
      </ul>
    </div>
    </nav>
    <div class="alert alert-success hide">
        <strong>Success!</strong>
    </div>
    </div>

`
}

module.exports = { loggedInNavTemplate, navTemplate }
