// Write a function to get the lowest, highest and average value in the array (with and without sort function).
function getLowest(arr){ // Buat function berisikan parameter
    const lowest = Math.min(...arr);
    return lowest;
}

function getHighest(arr){ // Buat function berisikan parameter
    const highest = Math.max(...arr);
    return highest;
}

function averageArr(arr){
    const sum = arr.reduce((highest, lowest) => highest + lowest);
    const average = sum / arr.length;
    return average;
}
  
// deklarasikan variabel berisi array angka
const numbers = [1, 2, 3, 3, 5, 5, 5, 8, 9, 10];
  
// deklarasikan variabel dengan menjalankan fungsi dengan parameter "numbers"
const lowestNumbers = getLowest(numbers);
const highestNumbers = getHighest(numbers);
const averageNumbers = averageArr(numbers);
  
// cetak hasil
console.log(`The lowest number is ${lowestNumbers}`);
console.log(`The highest number is ${highestNumbers}`);
console.log(`The average number is ${averageNumbers}`);

console.log(`=============================================2=============================================`);
// Write a function that takes an array of words and returns a string by concatenating the words in
// the array, separated by commas and - the last word - by an 'and'.

function joinKata(n){
    if (n.length === 0) {
        return '';
    }

    let kata1 = '';
    for (let i = 0; i < n.length - 1; i++) {
        kata1 += n[i] + ', ';
        
    }
    const kata2 = `and ${n[n.length - 1]}`;

    return kata1 + kata2;
}

console.log(joinKata("Valentino Rossi"));

console.log(`=============================================3=============================================`);
// Write a function to calculate each element in the same position from two arrays of integer.
// Assume both arrays are of the same length.
// ○ Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
function calculateNumber(x, y){
    let resultNUmber = x.map((value, index) => value + y[index]);
    console.log(`${x} tambah ${y}`);
    console.log(resultNUmber); 
}

calculateNumber([1, 2, 3],[3, 2, 1]);

console.log(`=============================================4=============================================`);

// Write a function that adds an element to the end of an array. However, the element should only
// be added if it is not already in the array.
function pushWord(a, e){
    if(!a.includes(e)) {
        a.push(e);
    }
    return pushWord;
}

let studentPurwadhika = ["Barak", "Tamvan", "dan"];
pushWord(studentPurwadhika,"Pemberani");
console.log(studentPurwadhika);