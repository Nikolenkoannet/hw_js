'use strict'


const inputString = prompt('Введіть довжину');
const length = Number(inputString);

const array = [];

for (let i = 0; i < length; i++) {
    const element = prompt(`Введіть елемент ${i+1}:`);
    array.push(element);
}

console.log(array);

array.sort();
console.log(array)

array.splice(2, 3,);
console.log(array)



