const moment = require('moment')

function tutorialPageTemplate(id, userId, title, description, instructorBio, instructorImage ) {
    return `
    <div data-id="${id}" data-userid="${userId}"class="container">
    <h1>${title}</h1>
        <div class="star-rating-div">
            <div class="stars-outer">
                <div class="stars-inner"></div>
            </div>
        </div>
        <h5>${description}</h5>
        <a class="btn-floating waves-effect waves-light red add-button"><i class="material-icons">add</i></a>
        <div class="videos"></div>
        <div class="instructor-info">
            <h2>Instructor</h2>
            <img height="300" width="200" src="${instructorImage}">
            <h3>About me</h3>
            <h6>${instructorBio}</h6>
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
    <iframe width="420" height="315" src="${video}" frameborder="0" allowfullscreen></iframe>
  `
}

function commentsTemplate (comment, user) {
  return `
    <h6>${comment}</h6>
    <p>${user.username} | Created ${moment(user.created_at).format('MMMM Do YYYY (h:mm:ss a)')}</p>
  `
}
module.exports = { tutorialPageTemplate, videosTemplate, commentsTemplate }
