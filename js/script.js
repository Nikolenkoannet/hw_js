'use strict'

let randomNumber = Math.floor(Math.random() * 9) + 1;
let imagePath = "images/" + randomNumber + ".jpg";

console.log(imagePath);

document.body.innerHTML = `<img src="${imagePath}" alt="Random Image" width="300">`;