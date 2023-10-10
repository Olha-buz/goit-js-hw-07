import { galleryItems } from './gallery-items.js';
// Change code below this line

galleryItems.forEach((element, index) => {
    element.id = index;
})

console.log(galleryItems);

const containerGallery = document.querySelector('.gallery');
containerGallery.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));



function createMarkup(arr) {
     return arr.map(({id, preview, description, original }) =>
           `<li class="gallery__item" data-image-id="${id}">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        alt="${description}"
                        width="300"
                    />
                </a>
            </li>` 
           ).join('')
}

new SimpleLightbox('.gallery a',{
    captions: true,
    captionsData: 'alt', 
    captionDelay: 250,
    fadeSpeed: 250,
    captionSelector: "img",
    enableKeyboard: true,
    })
