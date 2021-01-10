import refs from './refs';
import markupImages from '../tamplate/upImages.hbs';

export default {
  searchQuery: '',
  page: 1,
  fetchApiSearch() {
    const API_KEY = '19754585-5ce23e59215fa1e22c6ea29d4';
    const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

    return fetch(URL)
      .then(response => response.json())
      .then(({ hits }) => {
        const markup = markupImages(hits);
        refs.galleryList.insertAdjacentHTML('beforeend', markup);
        this.page += 1;
        return hits;
      })
      .catch(error => console.log(error));
  },
  resertPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
