let arr = [10, 11, 12, 13];
console.log(arr);

// arr.push(1); // menambah ke index terakhir
// arr.pop(); // hapus index terakhir dari array
// arr.shift(); // hapus element index paling depan
// arr.unshift(2); // menambah index paling depan

// console.log(arr);

// let join = arr.join(" ");
// console.log(join);
// console.log(arr.indexOf(11));
// console.log(arr.lastIndexOf(12));
// console.log(arr.findIndex((val, index) => val == 11)); // if true return index
// console.log(arr.find((val) => val == 11 || val == 12)); // if true return value
// console.log(arr.filter((val) => val == 11 || val == 12)); // inf true return array

arr.length; // panjang array
// console.log(arr.map((val, index) => (val == 11 ? "siap" : "salah"))); // looping array arr

console.log(arr.reduce((prev, current, index) => prev + current));
//prev = value dari index 0
//current = value dari index 1 sampai seterusnya

let arrNum = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < arrNum.length; i++) {
	sum += arrNum[i];
	// sum menggunakan for loop
}
console.log(sum);

sum = 0;
let i = 0;
while (i < arrNum.length) {
	sum += arrNum[i];
	i++;
} // sum menggunakan while loop
console.log(sum);

sum = 0;
arrNum.map((val) => (sum += val));
console.log(sum);

console.log(arrNum.reduce((prev, curr) => prev + curr)); // sum menggunakan reduce
