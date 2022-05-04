import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryEl = document.querySelector('.gallery');
const bodyEl = document.querySelector('body');
let modalImage;


// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

const createGalleryMarkup = galleryItems
  .map(({ original, preview, description }) => `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image"src="${preview}" data-source="${original}" alt= "${description}"/>
        </a>
    </div>`)
  .join("");

galleryEl.insertAdjacentHTML('beforeend', createGalleryMarkup);


// Реализация делегирования на div.gallery и получение url большого изображения.

const onGalleryClick = e => {
  // console.log(e.target);

  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return
  };

  onOpenModal(e.target.dataset.source);
};

galleryEl.addEventListener('click', onGalleryClick);


// Подключение скрипта и стилей библиотеки модального окна basicLightbox. 

const onCreateModal = img => basicLightbox.create(`<img src="${img}" width="1280" alt="${img}">`, {
  closable: true,
  onShow: (onCreateModal) => window.addEventListener("keyup", onKeyPress),
  onClose: (onCreateModal) => window.removeEventListener("keyup", onKeyPress)
});
console.log(onCreateModal);



// Открытие модального окна по клику на элементе галереи.

const onOpenModal = img => {
  modalImage = onCreateModal(img);
  modalImage.show();
  console.log("Open modal");
};


// Добавление закрытия модального окна по нажатию клавиши `Escape`.

const onKeyPress = e => {
  if (e.code === "Escape") modalImage.close();
  console.log("Close modal with escape");
};

console.log(galleryItems);