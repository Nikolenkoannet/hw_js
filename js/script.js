'use strict'

const yearOfBirth = prompt('Введіть ваш рік народження');
const currentYear = new Date().getFullYear();
const  currentAge = currentYear - yearOfBirth;
console.log(currentAge);


const countryCityMap = {
    kyiv: 'Ukraine',
    washington: 'USA',
    london: 'Great Britain',
};
const city = prompt('Введіть ваше місто');
countryCityMap[city.toLowerCase()] ? console.log(countryCityMap[city.toLowerCase()]) : null;


const sportChampionMap = {
    football: 'Lionel Messi',
    basketball: 'Michael Jordan',
    boxing: 'Oleksandr Usyk'
};
const sport = prompt('Введіть ваш вид спорту');
sportChampionMap[sport.toLowerCase()] ? console.log(sportChampionMap[sport.toLowerCase()]) : null;
