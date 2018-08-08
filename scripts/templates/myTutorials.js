function myTutorialsPageTemplate() {
    return ` <div class="home-tutorials my-tutorial-template">
    <div class="grid">
    <p>My Tutoraisl</p>
 
    </div>
 </div>
 `
 }
 
 function tutorial (item) {
   return `  <img src="${item.image}" data-type="${item.type}" data-id="${item.id}" class="box search-item">
             <p>${item.title}</p> 
             
             `
 }

 module.exports = { myTutorialsPageTemplate, tutorial }