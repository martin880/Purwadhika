// Write a code to display the multiplication table of a given integer.
// ○ Example : Number → 9
// ○ Output :
// ■ 9 x 1
// ■ 9 x 2
// ■ ...
// ■ 9 x 10

for(let i = 1; i <= 10; i++){
    let number = 9;
    for( let j = 1; j <= i; j++){
        multiply = `${number} x ${j}`;
    }
    console.log(multiply);
}

// Write a code to check whether a string is a palindrome or not
//Create a function to check if a string is a palindrome
console.log("=======================================================================");

let str = "madam";

let reverse = str.split('').reverse().join('');
if(str === reverse){
    console.log(`${str} adalah palindrom`); // true
}else{
    console.log(`${str} bukan palindrom`); // false
}
  
  // Write a code to convert centimeter to kilometer
  // multiply the value of km by 100000.
  // Cara function
console.log("=======================================================================");

  function convert(kilometer){
    return kilometer * 100000;
  }

  console.log(`10 cm sama dengan ${convert(10)} kilometer`);
  console.log("=======================================================================");
  // cara biasa
  let centimeter = 10;
  let cmToKm = 100000

  let konversi = centimeter * cmToKm;
  console.log(`${centimeter} cm sama dengan ${konversi} km`);


//   ● Write a code to remove the first occurrence of a given “search string” from a string
//   ○ Example : string = “Hello world”, search string = “ell” → “Ho world  
console.log("=======================================================================");
let word = 'Hello World';

let remove = word.replace('ell', '')

console.log(remove);

//   Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”
console.log("=======================================================================");
let word2 = "hello world";

let up = word2.replace('h','H').replace('w','W')

console.log(up);

console.log("=======================================================================");
//Write a code to reverse a string.
let str2 = "laptop";

let reverse2 = str2.split('').reverse().join('');

console.log(`${str2} dibalik menjadi ${reverse2}`);

function reverse3(apa){
  return apa.split('').reverse().join('');
}
console.log(`${reverse3(`laptop`)}`);

//   Write a code to format number as currency (IDR)
//   ○ Example : 1000 → “Rp. 1.000,00”
console.log("=======================================================================");
let rupiah = new Intl.NumberFormat('id-ID',{style: 'currency', currency: "IDR"});

console.log(rupiah.format(1000));
