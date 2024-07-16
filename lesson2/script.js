// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const dropdownItem = document.querySelectorAll('.dropdown-item');
dropdownItem.forEach(element => {
  element.classList.add('super-dropdown')
});
console.log(dropdownItem);

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
const btn = document.querySelector('.btn');
btn.classList.toggle('btn-secondary');
console.log(btn);

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const menu = document.querySelector('.menu');
menu.classList.remove('dropdown-menu');
console.log(menu);

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
const dropdown = document.querySelector('div.dropdown');
dropdown.insertAdjacentHTML('afterend', `<a href="#">link</a>`);  //backticks
console.log(dropdown);

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const dropdownMenuButton = document.querySelector('#dropdownMenuButton');
dropdownMenuButton.setAttribute('id', 'superDropdown')
console.log(dropdownMenuButton);

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const ariaLabelledby = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
ariaLabelledby.dataset.dd = '3';
console.log(ariaLabelledby);

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const dropdownToggle = document.querySelector('.dropdown-toggle');
dropdownToggle.removeAttribute('type');
console.log(dropdownToggle);