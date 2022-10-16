import { galleryItems } from "./gallery-items.js";
// Change code below this line

const elGellery = document.querySelector(".gallery");

// Create DOM element

let listGellery = "";
for (let i = 0; i < galleryItems.length; i++) {
  const { preview, original, description } = galleryItems[i];
  listGellery += `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" alt="${description}" src="${preview}" data-source="${original}"/> 
  </a>
  </div>`;
}
elGellery.innerHTML = listGellery;
//Event Delegation

elGellery.addEventListener("click", onClickImeg);

function onClickImeg(event) {
  event.preventDefault();
  //Chekc click
  if (event.target.nodeName !== "IMG") {
    return;
  }
  // Open modal windiw
  const instance = basicLightbox.create(`
    <img src='${event.target.dataset.source}' width="800" height="600">
`);
  instance.show();
  //Close modal press "Escape"
  elGellery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
