function searchPageTemplate() {
   return `        
   <div class="home-tutorials search-template">
   <div class="grid">
   <p>Search Results</p>

   </div>
</div>`
}

function searchItem(item) {
  return `  <img class="box search-item" src="${image}"> `

}

module.exports = { searchPageTemplate, searchItem }