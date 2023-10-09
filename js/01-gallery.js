import { galleryItems } from './gallery-items.js';
// Change code below this line

galleryItems.forEach((element, index) => {
    element.id = index;
})

console.log(galleryItems);

const containerGallery = document.querySelector('.gallery');
containerGallery.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));
containerGallery.addEventListener('click', handlerClick);

function createMarkup(arr) {
     return arr.map(({id, preview, description, original }) =>
           `<li class="gallery__item" data-image-id="${id}">
              <a class="gallery__link" href="${original}">
                 <img
                   class="gallery__image"
                   src="${preview}"
                   data-source="${original}"
                   alt="${description}"
                 />
              </a>
            </li>` 
           ).join('')
}
 
function handlerClick(evt) {
    evt.preventDefault();
     if (evt.target === evt.currentTarget) {
         return
     }
     const currentImg = evt.target.closest('.gallery__item');
     const imageId = Number(currentImg.dataset.imageId);
     const image = galleryItems.find(({ id }) => id === imageId);
     const instance = basicLightbox.create(`
                 <img
                   class="gallery__image"
                   src="${image.original}"
                   data-source="${image.original}"
                   alt="${image.description}"
                 />
     `);
    instance.show();
}
