function profilePageTemplate() {
   return `<h1 class="profile">profile page</h1>`
}

function updateProfilePageTemplate() {
   return ``
}

function viewProfilePageTemplate( image, username, firstName, lastName, aboutMe ) {
  return `
  <div class="container-profile">
    <div class="row">
      <div class="about-container">
        <div class="profile-column">
          <img class="profile-image" src="${image}">
        </div>
        <div class="about-me">
          <div class="user-info-div">
            <div class="card name-card">
              <h1 class="profile-username">${username}</h1>
              <hr>
              <h4 class="profile-name">${firstName} ${lastName}</h4>
            </div>
            <div class="about-div">
              <p class="profile-about-me">${aboutMe}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row grid users-tutorials">
      <h1 class="tutorials-header">My Tutorials</h1>
      <div class="my-tutorials"></div>
    </div>
  </div>
  `
}


function myTutorials(id, item) {
    return ` <a href="#"><div class="card box z-depth-3 search-item">
    <div class="card-image z-depth-3">
      <img class="search-item" src="${item.img}" data-type="tutorial" data-id="${item.id}" data-user-id="${id}">
      <span class="card-title">${item.title}</span>
      <a class="btn-floating halfway-fab waves-effect waves-light red add-button"><i class="material-icons">add</i></a>
    </div>
  </div></a>
  `
}

module.exports = { profilePageTemplate, updateProfilePageTemplate, viewProfilePageTemplate, myTutorials }
