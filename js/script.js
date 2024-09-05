'use strict'



function mainFunction(callback) {

    let numberInput = prompt("Введіть число:");
    let exponentInput = prompt("Введіть ступінь:");

    let number = Number(numberInput);
    let exponent = Number(exponentInput);

    callback(number, exponent);
}
function exponentiation(number, exponent) {

    let result = number ** exponent;
    alert(`Результат: ${result}`);
}
mainFunction(exponentiation);

function multiplay(number, exponent) {
    let result = number * exponent;
    alert(`Результат: ${result}`);
}
mainFunction(multiplay);

function division(number, exponent) {
    let result = number / exponent;
    alert(`Результат: ${result}`);
}
mainFunction(division);

function modulo(number, exponent) {
    let result = number % exponent;
    alert(`Залишок від ділення: ${result}`);
}
mainFunction(modulo);