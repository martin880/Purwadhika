//   Write a code to format number as currency (IDR)
//   ○ Example : 1000 → “Rp. 1.000,00”
console.log("=======================================================================");
let rupiah = new Intl.NumberFormat('id-ID',{style: 'currency', currency: "IDR"});

console.log(rupiah.format(1000));

let str = "martin";

let reverse = str.split('').reverse().join('');
console.log(reverse);
if(str === reverse){
    console.log(`${str} adalah palindrom`); // true
}else{
    console.log(`${str} bukan palindrom`); // false
}