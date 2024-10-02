'use strict'

let table = document.getElementById('myTable');
let counter = 1;

for (let i = 0; i < 10; i++) {
    let row = "<tr>";

    for (let b = 0; b < 10; b++) {
        row += "<td>" + counter + "</td>";
        counter++;
    }

    row += "</tr>";
    table.innerHTML += row;
}