'use strict'

function insertWordInto(str) {
    const words = str.split(' ');
    let position = 0;

    return function(word) {
        if (word === '') {
            return "Помилка: Вставка повинна бути не порожньою";
        }

        const newWords = [];
        for (let i = 0; i <= words.length; i++) {
            if (i === position) {
                newWords[newWords.length] = word;
            }
            if (i < words.length) {
                newWords[newWords.length] = words[i];
            }
        }

        let result = '';
        for (let i = 0; i < newWords.length; i++) {
            if (i > 0) {
                result += ' ';
            }
            result += newWords[i];
        }

        position = (position + 1) % (words.length + 1);

        return result;
    }
}

const insert = insertWordInto('hello world');
console.log(insert('Odesa')); // -> 'hello Odesa world'
console.log(insert('Odesa')); // -> 'Odesa hello world'
console.log(insert('Odesa')); // -> 'hello world Odesa'
console.log(insert('Odesa')); // -> 'Odesa hello world'
console.log(insert('')); // -> 'Помилка: Вставка повинна бути не порожньою'