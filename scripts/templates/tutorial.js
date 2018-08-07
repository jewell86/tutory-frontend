function tutorialPageTemplate() {
    `
    <div class="container">
        <h1>${title}</h1>
        <iframe width="800" height="600" src="${url}" frameborder="0" allowfullscreen></iframe>
        <div class="video-description"><h5>${description}</h5></div>
        <div class="instructor-info">
            <img src="${instructorimage}">
            <h6>${instructorbio}</h6>
        </div>
        <div class="comments">
            <h3>COMMENTS</h3>
            <h6>${comments}</h6>
        </div>
    </div>
    `
}

module.exports = { tutorialPageTemplate }