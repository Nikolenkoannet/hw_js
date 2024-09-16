'use strict'

function differenceVariables () {

    for (var i = 0; i < 3; i++) {
        var varInside = 'var';
        let letInside = 'let';
        const constInside = 'const';

        console.log(varInside);
        console.log(letInside);
        console.log(constInside);
    }

    console.log(varInside);

    if (typeof letInside !== 'undefined') {
        console.log(letInside);
    }
    else {
        console.log('letInside is not defined');
    }

    if (typeof constInside !== 'undefined') {
        console.log(constInside);
    }
    else {
        console.log('constInside is not defined');
    }
}
differenceVariables();

// даний код показує, що let та const  не можна викликати поза циклом,тому спроба вивести їх у консоль за межами циклу призведе до повідомлень про те, що вони не знайдені. (блочна область видимості)
// var працює в циклі та поза циклом. (функціональна область видимості)