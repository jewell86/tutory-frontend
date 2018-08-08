function myTutorialsPageTemplate() {
    return ` <div class="home-tutorials my-tutorial-template">
    <div class="grid">
    <p class="my-tutorials">My Tutorials</p>
    </div>
 </div>
 `
 }
 
 function tutorial(item) {

   return `  <div><img src="${item.img}" data-id="${item.id}" class="box search-item">
             <p>${item.title}</p> 
             </div>
             `
 }

 module.exports = { myTutorialsPageTemplate, tutorial }