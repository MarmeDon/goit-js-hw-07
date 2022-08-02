import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
   gallery: document.querySelector('.gallery'),
}

function createGalleryItemsMarkUp( { description, original, preview } ) {
   return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}

const makeGalleryMarkUp = galleryItems.map(createGalleryItemsMarkUp).join('');

refs.gallery.innerHTML = makeGalleryMarkUp;

let gallery = new SimpleLightbox('.gallery a', {
   captionsData: 'alt',
   captionDelay: 250
});
gallery.on('show.simplelightbox');