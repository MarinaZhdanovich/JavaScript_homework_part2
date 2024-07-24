// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
const input = document.querySelector('#from');
const span = document.querySelector('span');

input.addEventListener('input', () => {
  span.textContent = input.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.
const button = document.querySelector('.messageBtn');
const elementDiv =document.querySelector('.message');

button.addEventListener('click', () => {
  elementDiv.classList.add('animate_animated', 'animate_fadeInLeftBig' );
  elementDiv.style.visibility = 'visible';
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
const form = document.querySelector('form');
const input2 = document.querySelector('.form-control');
const select = document.querySelector('select');

form.addEventListener('submit', (e) => {
  let valid = true;

  if (input2.value.trim() === '') {
    input2.classList.add('error');
    valid = false;
  } else {
    input2.classList.remove('error');
    input2.classList.add('valid');
  }

  if (select.value.trim() === '') {
    select.classList.add('error');
    valid = false;
  } else {
    select.classList.remove('error');
    select.classList.add('valid');
  }

  if (!valid) {
    e.preventDefault();
  }
});

// в режиме реального времени валидация input
input2.addEventListener('input', () => {
  if (input2.value.trim() === '') {
    input2.classList.add('error');
  } else {
    input2.classList.remove('error');
    input2.classList.add('valid');
  }
});

// в режиме реального времени валидация select
select.addEventListener('change', () => {
  if (select.value.trim() === '') {
    select.classList.add('error');
  } else {
    select.classList.remove('error');
    select.classList.add('valid');
  }
});