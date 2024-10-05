'use strict';

function getRandomNumber() {
    return Math.floor(Math.random() * 9) + 1;
}

function createImageElement() {
    let randomNumber = getRandomNumber();
    let imagePath = "images/" + randomNumber + ".jpg";
    return `<img src="${imagePath}" alt="Random Image" width="300">`;
}

function insertElementToPage() {
    let imageElement = createImageElement();
    document.body.innerHTML += imageElement;
}

insertElementToPage();