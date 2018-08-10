function searchPageTemplate() {
   return `
   <div class="home-tutorials search-template">
    <div class="grid">
        <p>Search Results</p>
    </div>
   </div>
`
}



function searchItemTutorial(item){
    return ` <a href="#"><div class="card box z-depth-3">
    <div class="card-image">
      <img class="search-item z-depth-3" src="${item.img}" data-type="${item.type}" data-id="${item.id}" data-user-id="${item.users_id}">
      <span class="card-title">${item.title}</span>
      <a class="btn-floating halfway-fab waves-effect waves-light red add-button"><i class="material-icons">add</i></a>
    </div>
  </div></a>
  `
}



function searchItemUser(item) {

 return ` <a href="#"><div class="card box z-depth-3">
    <div class="card-image z-depth-3">
      <img class="search-item" src="${item.photo_url}" data-type="${item.type}" data-id="${item.id}">
      <span class="card-title">${item.username}</span>
    </div>
  </div></a>
  `
}

module.exports = { searchPageTemplate, searchItemUser, searchItemTutorial }
