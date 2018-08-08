function searchPageTemplate() {
   return `        
   <div class="home-tutorials search-template">
    <div class="grid">
        <p>Search Results</p>
    </div>
   </div>
`
}

function searchItemUser(item) {
  return `  <img src="${item.photo_url}" data-type="${item.type} "data-id="${item.id}" class="box search-item">
            <p>${item.username}</p> 

            `
}

function searchItemTutorial(item){
    return `  <img src="${item.photo_url}" data-type="${item.type} "data-id="${item.id}" class="box search-item">
    <p>${item.title}</p> `
    
}


 ` <div class="card">
    <div class="card-image">
      <img src="${item.photo_url}" data-type="${item.type} "data-id="${item.id}"  >
      <span class="card-title">Card Title</span>
      <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
    </div>
    <div class="card-content">
      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
    </div>
  </div>
  `

module.exports = { searchPageTemplate, searchItemUser, searchItemTutorial }