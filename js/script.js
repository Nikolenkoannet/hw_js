'use strict'

function createElements() {
    document.body.innerHTML += `
        <input type="text" id="input">
        <div id="ghost" style="display: none">Ghost</div>
    `;
}
createElements();

let input = document.getElementById('input');
let ghost = document.getElementById('ghost');

input.onfocus = () => {
    ghost.style.display = 'block';
};

input.onblur = () => {
    ghost.style.display = 'none';
};