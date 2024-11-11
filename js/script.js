'use strict'

const user = {
    _name: 'Anna',
    _age: 27,

    get name() {
        return this._name;
    },

    set name(newName) {
        this._name = newName;
    },

    get age() {
        return this._age;
    },

    set age(newAge) {
        if (newAge >= 0 && newAge <= 120) {
            this._age = newAge;
        } else {
            console.error('error: age must be greater than or equal to 120');
        }
    }
};
console.log(user.name);
console.log(user.age)
