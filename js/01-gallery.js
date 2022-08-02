import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
   gallery: document.querySelector('.gallery'),
}

function createGalleryItemsMarkUp( { description, original, preview } ) {
   return `<div class="gallery__item">
   <a class="gallery__link" href="${original}">
   <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
   </a>
</div>`
}

const makeGalleryMarkUp = galleryItems.map(createGalleryItemsMarkUp).join('');

refs.gallery.innerHTML = makeGalleryMarkUp;

function onClick(event) {
   event.preventDefault();
   const instance = basicLightbox.create(`
		<img src="${event.target.dataset.source}">
	`)
   instance.show();
   function onCloseModal(event) {
   if (event.code === 'Escape') {
      instance.close();
   }
}
   window.addEventListener('keydown', onCloseModal);
}

refs.gallery.addEventListener('click', onClick)



