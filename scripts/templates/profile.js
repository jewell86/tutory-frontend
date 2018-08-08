function profilePageTemplate() {
   return `<h1 class="profile">profile page</h1>`
}

function updateProfilePageTemplate() {
   return ``
}

function viewProfilePageTemplate( image, username, firstName, lastName, aboutMe ) {
    return ` <div class="container-profile">
    <div class="row">
        <div class="col s6 profile-column">
            <img class="profile-image" src="${image}">
        </div>

        <div class="col s6 about-me">
            <div class="row">
                <div class="col s12">
                    <div class="card name-card">
                    <h1 class="profile-username">${username}</h1>
                    <h4 class="profile-name">${firstName} ${lastName}</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12">
                    <h4>About Me</h4>
                     <p class="profile-about-me">${aboutMe}</p>
                </div>
            </div>
        </div>

    </div>
    <div class="row grid home-tutorials">
        <h1>My Tutorials</h1>
        <div class="my-tutorials"></div>
    </div>
</div>   `
}

function myTutorials(tutorial) {
    return `
    <img class="box" src="${tutorial}">
    `
}

module.exports = { profilePageTemplate, updateProfilePageTemplate, viewProfilePageTemplate, myTutorials }
