'use strict'

function averageOfNumbers(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
            count++;
        }
    }

    return sum / count;
}
const array = [10,'Anna',4, 6,'Hello', 20, 15];
const result = averageOfNumbers(array);
console.log(result);


function doMath(x, znak, y) {
    switch (znak) {
        case '+': return x + y;
        case '-': return x - y;
        case '*': return x * y;
        case '/': return x / y;
        case '%': return x % y;
        case '^': return Math.pow(x, y);
    }
}
const x = +prompt("Введіть перше число:");
const znak = prompt("Оберіть (+, -, *, /, %, ^):");
const y = +prompt("Введіть друге число:");
alert(doMath(x, znak, y));


