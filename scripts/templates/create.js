function createTutorialTemplate() {
  return `
    <div class="container create-tutorials-form register-form">
      <div class="row">
        <form class="col s12" id="new-tutorial-form">
          <div class="row">
            <div class="input-field col s12">
              <input id="title" class="tutorial-title validate" type="text" required>
              <label for="title">Title</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <textarea id="desc" class="tutorial-desc"></textarea>
              <label for="desc">Description</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="img" class="tutorial-thumbnail validate" type="text" required>
              <label for="img">Thumbnail (URL)</label>
            </div>
          </div>
          <div class="row videos-row">
            <div class="input-field col s12">
              <input id="video1" class="tutorial-video validate" type="text" required>
              <label for="video1">Video #1 (URL)</label>
            </div>
            <div class="input-field col s12">
              <input id="video2" class="tutorial-video" type="text">
              <label for="video2">Video #2</label>
            </div>
            <div class="input-field col s12">
              <input id="video3" class="tutorial-video" type="text">
              <label for="video3">Video #3</label>
            </div>
            <div class="input-field col s12">
              <input id="video4" class="tutorial-video" type="text">
              <label for="video4">Video #4</label>
            </div>
            <div class="input-field col s12">
              <input id="video5" class="tutorial-video" type="text">
              <label for="video5">Video #5</label>
            </div>
          </div>
          <div class="alert-message"></div>
            <div class="input-field col s12 new-tutorial-btn-div">
              <button class="btn btn-large btn-new-tutorial waves-effect create-tutorial-btn deep-orange accent-2" type="text">Create tutorial</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `
}

// function addAnotherVideoToTutorialTemplate() {
//   return `
//     <div class="row videos-row">
//       <div class="input-field col s10">
//         <input id="video" class="tutorial-video validate" type="text" required>
//         <label for="video">Tutorial Video URL(s)</label>
//       </div>
//       <div class="input-field col s2 add-another-tutorial-div">
//         <button class="btn btn-small btn-add-another-video waves-effect add-mult-videos-to-tutorial deep-orange accent-2" type="text">+ Video</button>
//       </div>
//     </div>
//
//   `
// }

function updateTutorialTemplate() {
    ``
}

module.exports = { createTutorialTemplate, updateTutorialTemplate }
