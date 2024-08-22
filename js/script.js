'use strict'

for (let i = 20; i <= 30; i = i + 0.5) {
    console.log(i);
}


const exchangeRate = 27;

for (let usd = 10; usd <= 100; usd += 10) {
    console.log(`${usd}  = ${usd * exchangeRate}`);
}


const N = 1000;

for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
        console.log(i);
    }
}


const n = 20;
let isSimple = true;

if (n <= 1) {
    isSimple = false;
} else {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isSimple = false;
        }
    }
}
if (isSimple) {
    console.log(`${n} є простим числом.`);
} else {
    console.log(`${n} не є простим числом.`);
}


const n = 81;
let current = 1;

while (current < n) {
    current *= 3;
}

if (current === n) {
    console.log(`${n} є степенем 3.`);
} else {
    console.log(`${n} не є степенем 3.`);
}
