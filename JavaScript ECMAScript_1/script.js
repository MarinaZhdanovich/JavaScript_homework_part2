// Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count += 1;
      return count;
    },
    decrement: function () {
      count -= 1;
      return count;
    }
  }
}

// или
// function createCounter() {
//   let count = 0;

//   return {
//     increment() {
//       count += 1;
//       return count;
//     },
//     decrement() {
//       count -= 1;
//       return count;
//     }
//   }
// }

const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());


// Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);


function findElementByClass(rootElement, className) {
  if (!rootElement || !rootElement.classList) {
    return null;
  }

  if (rootElement.classList.contains(className)) {
    return rootElement;
  }

  for (let child of rootElement.children) {
    const result = findElementByClass(child, className);
    if (result) {
      return result;
    }
  }

  return null;
}

const rootElement = document.querySelector('#root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);