'use strict'


const name = prompt("введіть ваше імя");
const age = prompt("введіть ваш вік");
const likesProgramming = confirm("Чи подобається вам програмувати?");

console.log("Ім'я:", name);
console.log("Вік:", age);
console.log("Чи подобається програмувати:", likesProgramming);

console.log("Ім'я:",typeof name);
console.log("Вік:",typeof age);
console.log("Чи подобається програмувати:",typeof likesProgramming);




const name = prompt("Введіть своє ім'я:");
const greeting = `Привіт, ${name}!`;

alert(greeting);



const name = prompt("Введіть ім'я:");
const age = prompt("Введіть вік:");
const numericAge = Number(age) ;
const nextAge = numericAge + 1;
console.log(nextAge);


const name = prompt("Введіть ім'я:");
const age = prompt("Введіть вік:");
const numericAge = Number(age);
const nextAge = numericAge + 1;
console.log(nextAge);
const isAdult = numericAge >= 18;
console.log(isAdult);
