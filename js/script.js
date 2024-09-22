'use strict'


const user = {
    firstName: 'Anna',
    lastName: 'Nikolenko'
};

const getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};


const bind = (func, context) => {

    return function() {
        context.tempFunc = func;
        const result = context.tempFunc();
        delete context.tempFunc;
        return result;
    };
};

const bindedGetFullName = bind(getFullName, user);
console.log(bindedGetFullName());