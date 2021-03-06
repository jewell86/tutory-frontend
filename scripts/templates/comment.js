
function newCommentFormTemplate () {
  return `
    <form class="col s12" id="new-tutorial-comment-form">
      <div class="row">
        <div class="input-field col s12">
          <textarea id="content" class="comment-content"></textarea>
          <label for="content">Comment</label>
        </div>
      </div>
      <div class="alert-message"></div>
      <div class="input-field col s12 new-comment-btn-div">
        <button class="btn btn-small btn-new-comment waves-effect create-comment-btn deep-orange accent-2" type="text">Publish Comment</button>
      </div>
      </div>
    </form>
  `
}

module.exports = { newCommentFormTemplate }
