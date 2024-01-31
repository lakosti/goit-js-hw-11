import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

/**
 * 1. дістаємо всі елементи з дому
 * 2. формуємо юрл (ключ + рекваед параметри + це все в об'єкт)
 * 3. перевіряємо через постман
 * 4. пишемо фетч і перевіряємо на помилку і парсимо
 * 5. у місці виклику функції обробляємо зенами і кетчами
 * 6. робимо функцію для розмітки
 * 7. додаємо бібліотеки
 * 8. додаємо стилі
 * 9. робимо лоудер
 */

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42030111-51447223cbabab8b20d1b63f9';

const refs = {
  form: document.querySelector('.form'),
  list: document.querySelector('.gallery-list'),
  loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', handleSearch);

function handleSearch(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const searchWord = form.elements.search.value;
  console.log(searchWord);

  searchPhotoByName(searchWord)
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => form.reset());
}

function searchPhotoByName(searchWord) {
  const urlParams = new URLSearchParams({
    key: API_KEY,
    q: searchWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`${BASE_URL}?${urlParams}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

// function createMarkup({}) {
//   //
// }
