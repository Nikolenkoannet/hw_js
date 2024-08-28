'use strict'

function generateKey(length, characters) {
    let result = '';
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.random() * characters.length;
        randomIndex = Math.floor(randomIndex);
        result += characters[randomIndex];
    }
    return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(30, characters);
console.log(key);