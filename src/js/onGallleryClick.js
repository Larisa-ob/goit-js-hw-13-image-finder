import refs from '../js/refs';

function onGalleryClick(event) {
  event.preventDefault();
  getLargeImageSrc();
  let imageRef = '';
  refs.backmodal.addEventListener('click', onBackModalClick);
  refs.backdropRef.addEventListener('click', onBackModalClick);
  window.addEventListener('keydown', onPressEscape);

  if (event.target.nodeName !== 'IMG') {
    return;
  }
  imageRef = event.target.attributes['data-image'].value;
  const largeImageURL = imageRef;
  setLargeImageSrc(largeImageURL);

  /*добавляем класс на div[class=lightbox*/
  const modalOn = refs.modalInput;
  modalOn.classList.add('is-open');
}
/* Функция ссылки на большой рисунок */
function setLargeImageSrc(url) {
  const refmodal = refs.largeImage;
  refmodal.src = url;
}

function onCloseModal() {
  window.removeEventListener('keydown', onPressEscape);
  refs.backmodal.removeEventListener('click', onBackModalClick);
  refs.backdropRef.removeEventListener('click', onBackModalClick);
  refs.modalInput.classList.remove('is-open');
  getLargeImageSrc();
}

function getLargeImageSrc() {
  const refmodal = refs.largeImage;
  refmodal.src = ' ';
}
/* Функция 'клика на кнопку закрытия или оверлей*/
function onBackModalClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}
/* Функция нажатия ESC*/
function onPressEscape(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}
export default onGalleryClick;
