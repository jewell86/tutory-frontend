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

module.exports = { searchPageTemplate, searchItemUser, searchItemTutorial }