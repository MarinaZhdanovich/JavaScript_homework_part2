
const { calculateResult } = require('./calculateResult.js');

const color = require('colors');

const total = calculateResult([12.1, 32.2, 43.1], 0.9);
console.log(`Общая стоимость покупок ${total} рублей`);

console.log(total > 50 ? `${total}`.red : `${total}`.green);
console.log(total > 50 ? color.red(total) : color.green(total));