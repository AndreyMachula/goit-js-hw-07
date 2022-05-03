import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryEl = document.querySelector('.gallery');


// Создание и рендер разметки по массиву данных galleryItems

const createGalleryMarkup = galleryItems
  .map(({ original, preview, description }) => `
   <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
   </a>`)
  .join("");

galleryEl.insertAdjacentHTML("beforeend", createGalleryMarkup);

// console.log(galleryEl);


// Инициализация библиотеки после того, как элементы галереи созданы и добавлены в `div.gallery`.
// Добавь отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.

const lightboxOptions = {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
};

const lightboxGallery = new SimpleLightbox(".gallery a", lightboxOptions);

// console.log(galleryItems);
