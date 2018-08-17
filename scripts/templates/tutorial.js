const moment = require('moment')

function tutorialPageTemplate(id, userId, title, description, instructorBio, instructorImage ) {
  return `
  <div data-userid="${userId}" class="container">
    <div class="tutorial-container">
      <div class="tutorial-basic-info">
        <h1 class="tutorial-header">${title}</h1>
        <div class="star-rating-div">
          <div class="stars-outer">
            <div class="stars-inner"></div>
          </div>
        </div>
        <h5>${description}</h5>
        <a class="tut-add-btn btn-floating waves-effect waves-light red"><i class="material-icons" data-id="${id}">add</i></a>
      </div>
      <div class="videos"></div>
    </div>

    <div class="instructor-info">
      <img class="usr-img" src="${instructorImage}">
      <div class="instructor-bio">
        <h4>Tutorial Creator</h4>
        <hr>
        <h6>${instructorBio}</h6>
      </div>
    </div>

    <div class="comments-div">
      <h3 class="comments-header">COMMENTS</h3>
      <div class="tutorial-comments">
        <div class="comments"></div>
        <div class="add-comment-btn-div">
          <button class="btn btn-small btn-register waves-effect register-submit-button deep-orange accent-2 add-comment">Add Comment</button>
        </div>
      </div>
    </div>
  </div>
  `
}

function videosTemplate(video) {
  return `
    <iframe width="840" height="630" style="margin-bottom: 20px;" src="${video}" frameborder="0" allowfullscreen></iframe>
  `
}

function commentsTemplate (comment, user) {
  return `
    <div class="tutorial-user-comment">
      <h6>${comment}</h6>
      <p class="commentor-username">${user.username} | Created ${moment(user.created_at).format('MMMM Do YYYY (h:mm:ss a)')}</p>
    </div>
  `
}

module.exports = { tutorialPageTemplate, videosTemplate, commentsTemplate }
