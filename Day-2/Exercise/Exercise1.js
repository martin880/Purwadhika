//1. Write a code to convert celsius to fahrenheit.
console.log('Konversi 20 Derajat Celcius ke Fahrenheit');
function celsiusToFahrenheit(celcius){
    return celcius * (9/5) + 32;
};

console.log(celsiusToFahrenheit(20));

//2. Write a code to check whether the number is odd or even
console.log('Bilangan Ganjil Genap');
for (let bilangan = 1; bilangan <= 10; bilangan++){
    if((bilangan % 2) == 0){
        console.log(`${bilangan} adalah genap`)
    }else{
        console.log(`${bilangan} adalah ganjil`);
    }
}

//3. Write a code to check whether the number is prime number or not
console.log('Bilangan Prima');

for (let i = 1; i <= 50; i++){
    let a = 0;
    for(let j = 1; j <= i; j++){
        if(i % j == 0){
            a++;
        }
    }
   if(a == 2){
    console.log(i);
   } 
}

//4. Write a code to find the sum of the numbers 1 to N.
//○ Example : 5 → 1 + 2 + 3 + 4 + 5 = 15
console.log("=========================SUM==================================");

// let sum = 0;
// let text = `${number}`

// 5. Write a code to find factorial of a number
console.log("==========================================================");
function factorial(angka) {
    if (angka === 0 || angka === 1)
      return 1;
    for (let i = angka - 1; i >= 1; i--) {
        angka *= i;
    }
    return angka;
  }
  console.log(`Bilangan faktorial dari 5 adalah ${factorial(5)}`);

// 6. Write a code to print the first N fibonacci numbers

console.log("Write a code to print the first N fibonacci numbers");

function cetak_deret_fibonacci(jumlah){
    let angka1 = 0;
    let angka2 = 1;

    let hasil = `${angka2}`;
    for(let i = 0; i < jumlah - 1; i++){
        let output = angka2 + angka1;
        hasil = output;

        angka1 = angka2;
        angka2 = output;
    }
    return hasil;
}
function deret_fibonacci(tingkat){
    for(let i = 1; i < tingkat + 1; i++){
        console.log(cetak_deret_fibonacci(i));
    }
}

console.log(deret_fibonacci(15));



