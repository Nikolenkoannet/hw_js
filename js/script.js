'use strict'


let name = prompt("введіть ваше імя");
let age = prompt("введіть ваш вік");
let likesProgramming = confirm("Чи подобається вам програмувати?");

console.log("Ім'я:", name);
console.log("Вік:", age);
console.log("Чи подобається програмувати:", likesProgramming);

console.log("Ім'я:",typeof name);
console.log("Вік:",typeof age);
console.log("Чи подобається програмувати:",typeof likesProgramming);




let name = prompt("Введіть своє ім'я:");
let greeting = `Привіт, ${name}!`;

alert(greeting);



let name = prompt("Введіть ім'я:");
let age = prompt("Введіть вік:");
let numericAge = Number(age) ;
let nextAge = numericAge + 1;
console.log(nextAge);


let name = prompt("Введіть ім'я:");
let age = prompt("Введіть вік:");
let numericAge = Number(age);
let nextAge = numericAge + 1;
console.log(nextAge);
let isAdult = numericAge >= 18;
console.log(isAdult);
