'use strict'

let input = document.getElementById('input');
let ghost = document.getElementById('ghost');


input.onfocus = () => {
    ghost.style.display = 'block';
};

input.onblur = () => {
    ghost.style.display = 'none';
};