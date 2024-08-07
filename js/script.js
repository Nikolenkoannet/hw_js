'use strict'

let number1 = prompt("Введіть число 1");
let number2 = prompt("Введіть число 2");
let number3 = prompt("Введіть число 3");

number1 = Number(number1);
number2 = Number(number2);
number3 = Number(number3);

const average = (number1 + number2 + number3) / 3;

alert(`${average}`);

