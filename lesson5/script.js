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
body.appendChild(div);

const parseData = JSON.parse(data);
console.log(parseData);

parseData.forEach(joke=> {
  div.insertAdjacentHTML('beforebegin', `
    <div class="joke">
    <h2>${joke.setup}</h2>
    <p>${joke.punchline}</p>`)
});