'use strict'

function padString(str, length, padding = ' ', left = false) {

    if (typeof str !== 'string') return 'Error: Invalid string';
    if (typeof length !== 'number') return 'Error: Invalid length';
    if (typeof padding !== 'string' || padding.length !== 1) return 'Error: Invalid padding character';

    if (str.length > length) {
        return str.substring(0, length);
    }

    let paddingString = padding.repeat(length - str.length);

    if (left) {
        return paddingString + str;
    } else {
        return str + paddingString;
    }
}

console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 6, '*', true));
console.log(padString('hello', 2));

