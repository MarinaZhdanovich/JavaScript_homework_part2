/* Задание 1
1. Поиск в интернете (бесплатные api примеры).
2. Найти любые данные, на произвольную тему.
3. Создать файл data.js.
4. Создать переменную которая будет хранить данные из публичных api.

Задание 2
1. Создать файл index.html.
2. Подключить data.js.
3. Сформировать контент из данных (картинка заголовок и параграф).
4. Добавить данный контент в вёрстку.
5. * Добавить стили при необходимости (по желанию). */

const body = document.querySelector('body');
const div = document.createElement('div');
div.classList.add('main');

body.appendChild(div);

const parseData = JSON.parse(data);
console.log(parseData);

parseData.forEach(joke => {
  div.insertAdjacentHTML('beforeend', `
    <div class="joke">
    <h2>${joke.setup}</h2>
    <p>${joke.punchline}</p>
    </div>`)
});


const url = "http://universities.hipolabs.com/search?name=middle";
async function getData(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

try {
  const myData = await getData(url);
  console.log(myData);
  myData.forEach(university => {
    div.insertAdjacentHTML("beforeend", `
    <div class="university">
    <h2>${university.country}</h2>
    <p>${university.name}</p>
    </div>`)
  })
} catch (error) {
  console.log(`Ошибка ${error.message}`);
}