// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const superLink = document.querySelector('#super_link');
console.log(superLink);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const cardLink = document.querySelectorAll('.card-link');
cardLink.forEach((element) => element.textContent = 'ссылка'); 


// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const CardLinkInBody = document.querySelectorAll('.card-body .card-link');
console.log(CardLinkInBody);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const dataNumber50 = document.querySelector('[data-number="50"]');
console.log(dataNumber50);
// 5. Выведите содержимое тега title в консоль.
const title = document.querySelector('title');
console.log(title.textContent);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const parentCardTitle = document.querySelector('.card-title');
console.log(parentCardTitle.parentNode);

// 7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const card =  document.querySelector('.card');
const existingNode = document.querySelector('.card-body');
const newParagraf = document.createElement('p');
newParagraf.textContent = 'Привет';
card.insertBefore(newParagraf, existingNode);


// 8. Удалите тег h6 на странице.
const deleteH6 = document.querySelector('h6');
deleteH6.remove();