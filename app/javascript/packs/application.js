/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log('Hello World from Webpacker')
console.log("Hello from app/javascript/packs/application.js!");

const taxonomies = document.querySelectorAll(".taxonomy-major");
const matching = [0,".MUJER", ".HOMBRE", ".NIÑOS", ".REGALOS", ".NOSOTROS"]
const subtaxons = document.querySelectorAll(".subtaxons");
function findTheClass(event) {
    let categoryIdString = event.target.firstElementChild.firstChild.id;
    let categoryId = parseInt(categoryIdString);
    console.log(categoryId);
    let itemsClass = matching[categoryId];
    let item = document.querySelector(itemsClass).parentNode;
    console.log(item);
    return item;
}

function preventSubtaxons(event){
  subtaxons.forEach((taxonomy)=>{
    taxonomy.addEventListener("mouseenter", (event)=>{
      event.preventDefault();
    });
  })
}
// console.log(mujer);
// console.log(mujerItems);

// mujerItems.classList.remove("hidden");
// console.log(mujerItems.classList);

// mujer.addEventListener("mouseenter", (event)=>{
//   mujerItems.classList.remove("hidden");
// });

// mujer.addEventListener("mouseleave", (event)=>{
//   mujerItems.classList.add("hidden");
// });


taxonomies.forEach((taxonomy)=>{
  taxonomy.addEventListener("mouseenter", (event)=>{
  item = findTheClass(event)
  active = document.querySelector(".active")
  if (active){
    console.log(active)
    active.classList.remove("active")
  } else {
    console.log("nada")
  }

  item.classList.add("active");
});
})



// taxonomies.forEach((taxonomy)=>{
//   taxonomy.addEventListener("mouseleave", (event)=>{
//     preventSubtaxons(event)
//   item = findTheClass(event)
//   item.classList.add("hidden");
// });
// })




