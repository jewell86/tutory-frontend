
function myTutorialsPageTemplate() {
    return ` <div class="home-tutorials my-tutorial-template">
    <h3 class="my-tutz">My Watchlist</h3>
    <div class="grid">
    <p class="my-tutorials"></p>
    </div>
 </div>
 `
 }

function tutorial(item) {

return ` <a href="#"><div class="card box z-depth-3">
             <div class="card-image z-depth-3">
               <img class="search-item" src="${item.img}" data-type="tutorial" data-id="${item.id}" data-user-id="${item.users_id}">
               <span class="card-title">${item.title}</span>
             </div>
           </div></a>
           `
 }

 module.exports = { myTutorialsPageTemplate, tutorial }
