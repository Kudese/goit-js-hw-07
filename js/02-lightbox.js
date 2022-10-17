import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const elGallery = document.querySelector(".gallery");

//Create gallary in DOM
let gallaryList = "";
for (let i = 0; i < galleryItems.length; i++) {
  const { preview, original, description } = galleryItems[i];
  gallaryList += `<li><a classs='gallery__item' href='${original}' >
    <img class="gallery__image"  src="${preview}" alt="${description}">
    </a></li>`;
}
elGallery.innerHTML = gallaryList; 
//Install simplelightbox
let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
