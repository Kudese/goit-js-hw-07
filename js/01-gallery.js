import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const elGellery = document.querySelector(".gallery");

let listGellery = "";
let iteamGallary = ""
galleryItems
  .map(
    (preview, original, description) =>
     listGellery = listGellery +`<li><img src="${preview}" data-src="${original}" alt="${description}"></li>`
     console.log(preview)
  )
  ;

elGellery.innerHTML = `<ul>${listGellery}</ul>`;
