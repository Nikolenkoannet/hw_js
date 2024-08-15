'use strict'

const yearOfBirth = prompt('Введіть ваш рік народження');
const currentYear = new Date().getFullYear();
const  currentAge = currentYear - yearOfBirth;
console.log(currentAge);

let ageMessage = yearOfBirth ? `Ваш вік: ${currentAge}` : 'Шкода, що Ви не захотіли ввести свій рік народження.';


const countryCityMap = {
    kyiv: 'Ukraine',
    washington: 'USA',
    london: 'Great Britain',
};
const city = prompt('Введіть ваше місто');
const cityMessage = city ? (countryCityMap[city.toLowerCase()] ? `Ти живеш у столиці ${countryCityMap[city.toLowerCase()]}.` : `Ти живеш у місті ${city}.`) : 'Шкода, що Ви не захотіли ввести ваше місто.';


const sportChampionMap = {
    football: 'Lionel Messi',
    basketball: 'Michael Jordan',
    boxing: 'Oleksandr Usyk'
};
const sport = prompt('Введіть ваш вид спорту');
const sportMessage = sport ? (sportChampionMap[sport.toLowerCase()] ? `Круто! Хочеш стати як ${sportChampionMap[sport.toLowerCase()]}?` : `Цікаво! Твій улюблений вид спорту: ${sport}.`) : 'Шкода, що Ви не захотіли ввести свій улюблений вид спорту.';

alert(`${ageMessage}\n${cityMessage}\n${sportMessage}`);