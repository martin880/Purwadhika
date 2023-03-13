// number

let angka = 10000;
let inf = Infinity; // angka terbesar se JS
let minInf = -Infinity; // angka terkecil se JS

let strNumber = angka.toString(); // cara mengubah angka ke string

console.log(angka.toLocaleString("id-ID")); // currency
console.log(angka.toFixed(2)); // decimal
console.log(angka.toExponential()); // eksponen

let eks = angka.toExponential();

console.log(10000000000000000000000000000000000000000 > inf);

console.log(strNumber);

console.log(angka++); // angka =+ 1 postFix
console.log((angka += 1)); // angka += 1 preFix
