'use strict'

let result = '';
for (let i = 10; i <= 20; i++) {
    result += i + (i < 20 ? ', ' : '');
}
console.log(result);


for (let i = 10; i <= 20; i++) {
    console.log(i * i);
}


for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}


let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(sum);


let product = 1;
for (let i = 15; i <= 35; i++) {
    product *= i;
}
console.log(product);


let sum = 0;
for (let i = 1; i <= 500; i++) {
    sum += i;
}
let average = sum / 500;
console.log(average);


let sum = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(sum);


for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}


let num = 40;
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        console.log(i);
    }
}


let num = 40;
let count = 0;
for (let i = 1; i <= num; i++) {
    if (num % i === 0 && i % 2 === 0) {
        count++;
    }
}
console.log(count);


let num = 40;
let sum = 0;
for (let i = 1; i <= num; i++) {
    if (num % i === 0 && i % 2 === 0) {
        sum += i;
    }
}
console.log(sum);

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}


