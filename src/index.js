import './styles.css';
import refs from './js/refs';
import markupImages from './tamplate/upImages.hbs';
import apiService from './js/apiService';
import onGalleryClick from './js/onGallleryClick';
import 'handlebars';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  //чтение ввода пользователя из форм-окна
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  // очистка значений галереи
  refs.galleryList.innerHTML = '';
  //чтение номера страницы
  apiService.resertPage();
  refs.loadMoreBtn.classList.add('is-hidden');
  //вывод 12 элементов галереи
  apiService.fetchApiSearch().then(hits => {
    markupImages(hits);

    refs.loadMoreBtn.classList.remove('is-hidden');
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });

  form.reset();
});
//при нажатии на вох запускаем промисс вызова
refs.loadMoreBtn.addEventListener('click', () => {
  apiService.fetchApiSearch().then(markupImages);
});
/* кликаем на галлерею и переходим в модальное окно*/
refs.galleryList.addEventListener('click', onGalleryClick);
