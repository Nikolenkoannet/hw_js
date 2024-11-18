'use strict'

const product = {};

Object.defineProperty(product, 'name', {
    get() {
        return this._name;
    },
    set(value) {
        if (typeof value === 'string' && value.trim() !== '') {
            this._name = value;
        } else {
            console.error('Error: name must be a non-empty string.');
        }
    },
    enumerable: true,
    configurable: true
});


Object.defineProperty(product, 'price', {
    get() {
        return this._price;
    },
    set(value) {
        if (typeof value === 'number' && value > 0) {
            this._price = value;
        } else {
            console.error('Error: Price must be a number greater than 0');
        }
    },
    enumerable: true,
    configurable: true
});


Object.defineProperty(product, 'quantity', {
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(product, 'totalValue', {
    get() {
        return this.price * this.quantity;
    },
    enumerable: true,
    configurable: true
});


product.name = 'iphone';
console.log(product.name);

product.price = 1200;
console.log(product.price);

product.quantity = 1;
console.log(product.quantity);

console.log(product.totalValue);

product.name = '';
product.price = -500;

