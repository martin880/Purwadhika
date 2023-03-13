// string
let str = new String("abc");
let str2 = "Samsung Buatan Korea";

console.log(str);
console.log(str2);

console.log(str2.charAt(1)); // karakter index ke 1
console.log(str2.length); // hitung semua karakter di dalam string termasuk spasi
console.log(str2.includes(" ")); // cari kata di dalam string. Return true / false

// contoh
if (str2.includes("Samsung")) console.log("ada Samsung di dalam variabel ini");
console.log(str2.indexOf("sung"));
// mencari index per awal karakter dari searchString
// tetapi apabila searchString tidak terdapat di string maka return -1

if (str2.indexOf("ayam") == -1) console.log("tidak ada didalam variable");
else console.log("isi searchString terdapat didalam variable");

console.log(str2.lastIndexOf("S")); // kebalikan indexOf

console.log(str2.slice(0, 4));
// Start dari 0 dan banyak karakter
console.log(str2.toLocaleUpperCase("id-ID"));
console.log(str2.toLowerCase());
console.log(str2.toUpperCase());

console.log(str2.replace(/Samsung/g, "Infinix")); // replace kata

let number = 100000;
// -> Rp. 100000
console.log("Rp. " + number.toLocaleString("id-ID"));
console.log(`Rp. ${number.toLocaleString("id-ID")}`);
