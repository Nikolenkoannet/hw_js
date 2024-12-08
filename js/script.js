'use strict'

const items = document.querySelectorAll('ul > li');
items.forEach(item => console.log(item.textContent));

const ulElement = document.querySelector('ul');
const attributesValues = [];
for (let attr of ulElement.attributes) {
    attributesValues.push(attr.value);
}
console.log(attributesValues);

const attributesNames = [];
for (let attr of ulElement.attributes) {
    attributesNames.push(attr.name);
}
console.log(attributesNames);

const lastItem = ulElement.lastElementChild;
lastItem.textContent = 'Hello, my name is Ann'

const firstItem = ulElement.firstElementChild;
firstItem.setAttribute('data-my-name', 'Ann');

ulElement.removeAttribute('data-dog-tail');

