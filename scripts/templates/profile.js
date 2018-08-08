function profilePageTemplate() {
   return `<h1 class="profile">profile page</h1>`
}

function updateProfilePageTemplate() {
   return ``
}

function viewProfilePageTemplate(user) {
    return ` <div class="container-profile">
    <div class="row">
        <div class="col s6 profile-column">
            <img class="profile-image" src="https://it.wisc.edu/wp-content/uploads/headshot-ray-spiess-1-300x300.jpg">
        </div>

        <div class="col s6 about-me">
            <div class="row">
                <div class="col s12">
                    <div class="card name-card">
                    <h1 class="profile-username">John87</h1>
                    <h4 class="profile-name">John Smith</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12">
                    <h4>About Me</h4>
                     <p class="profile-about-me">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
            </div>
        </div>

    </div>
    <div class="row grid home-tutorials">
        <h1>My Tutorials</h1>
        <img class="box" src="https://wiki.godvillegame.com/images/5/53/Business_cat.jpeg">
        <img class="box" src="https://wiki.godvillegame.com/images/5/53/Business_cat.jpeg">
        <img class="box" src="https://wiki.godvillegame.com/images/5/53/Business_cat.jpeg">
        <img class="box" src="https://wiki.godvillegame.com/images/5/53/Business_cat.jpeg">
    </div>
</div>   `
}

module.exports = { profilePageTemplate, updateProfilePageTemplate, viewProfilePageTemplate }
