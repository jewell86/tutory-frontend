// function homePageTemplate() {
//     return  ` <div class="home-tutorials">
//             <div class="grid">
//                 <a href="#"><img data-id="1" data-type="user" class="box wide tall search-item" src="../../style/learnanewtrick.png">
//                 <a href="#"><img data-userid="1" data-id="1" data-type="tutorial" class="box search-item" src="https://wiki.godvillegame.com/images/5/53/Business_cat.jpeg"></a>
//                 <a href="#"><img data-id="2" data-type="user"  class="box search-item" src="https://wiki.godvillegame.com/images/5/53/Business_cat.jpeg"></a>
//                 <a href="#"><img data-id="3" data-type="user"  class="box search-item" src="https://wiki.godvillegame.com/images/5/53/Business_cat.jpeg"></a>
//                 <a href="#"><img data-id="4" data-type="user"  class="box search-item" src="https://wiki.godvillegame.com/images/5/53/Business_cat.jpeg"></a>
//                 <a href="#"><img data-id="4" data-type="user"  class="box search-item" src="https://wiki.godvillegame.com/images/5/53/Business_cat.jpeg"></a>
//                 <a href="#"><img data-userid="1" data-id="2" data-type="tutorial"  class="box search-item" src="https://wiki.godvillegame.com/images/5/53/Business_cat.jpeg"></a>
//                 <a href="#"><img data-userid="1" data-id="3" data-type="tutorial"  class="box search-item" src="https://wiki.godvillegame.com/images/5/53/Business_cat.jpeg"></a>
//                 <a href="#"><img data-userid="2" data-id="4" data-type="tutorial"  class="box search-item" src="https://wiki.godvillegame.com/images/5/53/Business_cat.jpeg"></a>
//                 <a href="#"><img data-userid="4" data-id="5" data-type="tutorial"  class="box search-item" src="https://wiki.godvillegame.com/images/5/53/Business_cat.jpeg"></a>
//                 <a href="#"><img data-id="3" data-type="user"  class="box search-item" src="https://wiki.godvillegame.com/images/5/53/Business_cat.jpeg"></a>
//                 <a href="#"><img data-userid="4" data-id="6" data-type="tutorial"  class="box search-item" src="https://wiki.godvillegame.com/images/5/53/Business_cat.jpeg"></a>
//                 <a href="#"><img data-id="1" data-type="user"  class="box search-item" src="https://wiki.godvillegame.com/images/5/53/Business_cat.jpeg"></a>
//                 <a href="#"><img data-id="1" data-type="tutorial"  class="box search-item" src="https://wiki.godvillegame.com/images/5/53/Business_cat.jpeg"></a>
//                 <a href="#"><img data-id="1" data-type="user"  class="box search-item" src="https://wiki.godvillegame.com/images/5/53/Business_cat.jpeg"></a>
//                 <a href="#"><img data-id="1" data-type="user"  class="box wide tall search-item" src="https://wiki.godvillegame.com/images/5/53/Business_cat.jpeg"></a>

//             </div>
//         </div>
       
//     ` 
// }

function homePageTemplate() {
    return `        
    <div class="home-tutorials search-template">
     <div class="grid">
         <p>Search Results</p>
     </div>
    </div>
 `
 }

function homeItemTutorial(item){
    return ` <a href="#"><div class="card box search-item">
    <div class="card-image">
      <img class="search-item" src="${item.img}" data-type="${item.type}" data-id="${item.id}" data-user-id="${item.users_id}">
      <span class="card-title">${item.title}</span>
      <a class="btn-floating halfway-fab waves-effect waves-light red add-button"><i class="material-icons">add</i></a>
    </div>
  </div></a>
  `
}

function homeItemUser(item) {
    
 return ` <a href="#"><div class="card box search-item">
    <div class="card-image">
      <img class="search-item" src="${item.photo_url}" data-type="${item.type}" data-id="${item.id}">
      <span class="card-title">${item.username}</span>
    </div>
  </div></a>
  `
}  

module.exports = { homePageTemplate, homeItemTutorial, homeItemUser }
