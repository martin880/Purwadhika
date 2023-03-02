//   Write a code to format number as currency (IDR)
//   ○ Example : 1000 → “Rp. 1.000,00”
console.log("=======================================================================");
let rupiah = new Intl.NumberFormat('id-ID',{style: 'currency', currency: "IDR"});

console.log(rupiah.format(1000));