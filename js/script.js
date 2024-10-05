'use strict'


function generateContent(counter) {
    return counter;
}

function generateTable(rows, columns) {
    let table = "<table>";
    let counter = 1;

    for (let i = 0; i < rows; i++) {
        let row = "<tr>";

        for (let b = 0; b < columns; b++) {
            row += "<td>" + generateContent(counter) + "</td>";
            counter++;
        }

        row += "</tr>";
        table += row;
    }

    table += "</table>";
    return table;
}

function insertTableToPage(table) {
    document.body.innerHTML += table;
}

let table = generateTable(10, 10);
insertTableToPage(table);