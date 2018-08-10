const moment = require('moment')

function tutorialPageTemplate(id, userId, title, description, instructorBio, instructorImage ) {
  return `
  <div data-userid="${userId}" class="container">
    <div class="tutorial-container">
      <a class="btn-floating waves-effect waves-light red add-button add-tutorial-to-watchlist"><i class="material-icons" data-id="${id}">add</i></a>
      <div class="tutorial-basic-info">
        <h1 class="tutorial-header">${title}</h1>
        <div class="star-rating-div">
          <div class="stars-outer">
            <div class="stars-inner"></div>
          </div>
        </div>
        <h5 class="tutorial-desc">${description}</h5>

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

    <h3>COMMENTS</h3>
    <div class="comments-div">
      <div class="comments"></div>
      <div class="add-comment-btn-div">
        <button class="add-comment">Add Comment</button>
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
    <h6>${comment}</h6>
    <p>${user.username} | Created ${moment(user.created_at).format('MMMM Do YYYY (h:mm:ss a)')}</p>
  `
}
module.exports = { tutorialPageTemplate, videosTemplate, commentsTemplate }
