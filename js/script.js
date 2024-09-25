'use strict'


function SumCounter() {
    let total = 0;

    function addTotal(number) {
        total += number;
        return total;
    }
    return addTotal;
}

const add = SumCounter();

console.log(add(3));  // = 3
console.log(add(5));  // = 8
console.log(add(20)); // = 28