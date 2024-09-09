'use strict'


const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

const positiveElements = array.filter(item => item > 0);
const positiveSum = positiveElements.reduce((sum, item) => sum + item, 0);
const positiveCount = positiveElements.length;

console.log(positiveCount);
console.log(positiveSum);


const minElement = Math.min(...array);
const minIndex = array.indexOf(minElement) + 1;

console.log(minIndex);
console.log(minElement);


const maxElement = Math.max(...array);
const maxIndex = array.indexOf(maxElement) + 1;

console.log(maxElement);
console.log(maxIndex);


const negativeElements = array.filter(item => item < 0);
const negativeCount = negativeElements.length;

console.log(negativeElements);
console.log(negativeCount);


const positiveOddElements = array.filter(item => item > 0 && item % 2 !== 0);
const positiveOddCount = positiveOddElements.length;

console.log(positiveOddCount);


const positiveEvenElements = array.filter(item => item > 0 && item % 2 === 0);
const numberOfPositiveEvens = positiveEvenElements.length;

console.log(positiveEvenElements);
console.log(numberOfPositiveEvens);


const sumOfPositiveEvens = positiveEvenElements.reduce((sum, item) => sum + item, 0);
console.log(sumOfPositiveEvens);


const sumOfPositiveOdds = positiveOddElements.reduce((sum, item) => sum + item, 0);
console.log(sumOfPositiveOdds);


const productOfPositiveElements = positiveElements.reduce((product, item) => product * item, 1);
console.log(productOfPositiveElements);


const resultArray = array.map(item => item === maxElement ? item : 0);
console.log(resultArray);




