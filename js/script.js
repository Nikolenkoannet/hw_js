'use strict'

const recursiveFactorial = (n) => {
    return (n === 0 || n === 1) ? 1 : n * recursiveFactorial(n - 1);
};
console.log(recursiveFactorial(3));



const calculatePower = (value, power) => {
    if (power === 0) {
        return 1;
    }
    return value * calculatePower(value, power - 1);
};
console.log(calculatePower(2, 2));



const sumRecursive  = (a, b) => {

    if (b === 0) {
        return a;
    }
    return sumRecursive (a + 1, b - 1);
};
console.log(sumRecursive (2, 2));