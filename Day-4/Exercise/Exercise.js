console.log("==================================================1=====================================================================");
// Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// ● Parameters : height → triangle height

function trianglePattern(height) {

  // Inisialisasi angka awal
    let num = 1; 

    // looping setiap baris
    for (let i = 1; i <= height; i++) {

      // Inisialisasi string kosong untuk baris tersebut
      let row = "";

      // looping setiap kolom di baris
      for (let j = 0; j < i; j++) {

        // Tambahkan angka saat ini ke baris
        row = row + num.toString().padStart(2, '0') + " ";

        // Angka dinaikan
        num++;
      }

      // Cetak baris
      console.log(row);
    }
}

console.log(trianglePattern(10));

console.log("==================================================2=====================================================================");

// Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz".
// Parameters : n → total looping

const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) { // looping setiap baris
      if (i % 3 === 0 && i % 5 === 0) { // Periksa apakah angka tersebut habis dibagi 3 dan 5
        console.log("FizzBuzz");
      } else if (i % 3 === 0) { // Periksa apakah angkanya habis dibagi 3
        console.log("Fizz");
      } else if (i % 5 === 0) { // Periksa apakah angkanya habis dibagi 5
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
}
console.log(fizzBuzz(15));

console.log("==================================================3=====================================================================");

// Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))²
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”

function calculateBMI(weight, height) {
  // inisialisasi rumus BMI 
  const bmi = weight / (height * height);
  // Gunakan cara switch case untuk menentukan nilai pengembalian yang sesuai berdasarkan BMI
  switch (true) {
    case (bmi < 18.5):
      return "less weight";
    case (bmi < 25):
      return "ideal";
    case (bmi < 30):
      return "overweight";
    case (bmi < 40):
      return "very overweight";
    default:
      return "obesity";
  }
}

const weight = 100; // kg
const height = 1.7; // meter

const bmiResult = calculateBMI(100, 1.7);

console.log(`If your weight about ${weight} kg's and your body height about ${height} meters tall then you are ${bmiResult}`); // "ideal"

console.log("==================================================4=====================================================================");

// ● Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

function removeOddNumbers(arr) { // Buat function berisikan parameter

  // deklarasikan variabel dengan method filter berisikan apakah angka tersebut habis dibagi 2
  const evenArr = arr.filter(num => num % 2 === 0);

  // kembalikan nilai
  return evenArr;
}

// deklarasikan variabel berisi array angka
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// deklarasikan variabel dengan menjalankan fungsi dengan parameter "numbers"
const evenNumbers = removeOddNumbers(numbers);

// cetak hasil
console.log(`Angka genap adalah ${evenNumbers}`);

console.log("==================================================5=====================================================================");

// Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]

function stringToArray(str) { // buat fungsi stringToArray
  const wordsArray = str.split(" "); // pisah kan string ke array dengan spasi menggunakan split
  return wordsArray; // kembalikan nilai
}
const myString = "Hello World"; // deklarasikan string
const myWordsArray = stringToArray(myString); // jalankan fungsi

console.log(myWordsArray);

