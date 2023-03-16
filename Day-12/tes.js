// Penjelasan Exercise Day 12

// Fungsi majorityElement(number) menerima sebuah array nums sebagai argumen. Fungsi ini akan mengurutkan array nums dari nilai terkecil ke nilai terbesar menggunakan metode pengurutan standar JavaScript sort().

// Setelah array diurutkan, fungsi akan mengembalikan elemen yang terletak di tengah-tengah array. Jika panjang array nums ganjil, maka elemen di tengah-tengah array adalah elemen yang paling sering muncul di dalam array tersebut. Namun, jika panjang array nums genap, maka elemen yang berada di tengah-tengah array adalah elemen kedua yang paling sering muncul di dalam array tersebut.

// Dengan kata lain, fungsi ini mencari elemen yang muncul paling banyak di dalam array nums. Jika elemen tersebut tidak ada, fungsi akan tetap mengembalikan sebuah nilai yang ada di dalam array nums.
console.log("=========================== soal no 1 =====================");

function majorityElement(number) {
	number.sort();
	return number[Math.floor(number.length / 2)];
}
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

console.log("=========================== soal no 2 =====================");

// ● Create a function to convert roman numeral to integer.
// ● Example 1:
// ○ Input: s = "III”
// ○ Output: 3
// ○ Explanation: III = 3.
// ● Example 2:
// ○ Input: s = "LVIII"
// ○ Output: 58
// ○ Explanation: L = 50, V= 5, III = 3.
// ● Example 3:
// ○ Input: s = "MCMXCIV"
// ○ Output: 1994
// ○ Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

function romawiToInt(n) {
	const angkaRomawi = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	let result = 0;
	for (let i = 0; i < n.length; i++) {
		if (i > 0 && angkaRomawi[n[i]] > angkaRomawi[n[i - 1]]) {
			result += angkaRomawi[n[i]] - 2 * angkaRomawi[n[i - 1]];
		} else {
			result += angkaRomawi[n[i]];
		}
	}
	return result;
}

console.log(romawiToInt("III"));
console.log(romawiToInt("LVIII"));
console.log(romawiToInt("MCMXCIV"));

// Fungsi romanToInt adalah sebuah fungsi yang menerima sebuah string yang mewakili angka Romawi sebagai input, dan mengembalikan nilai integer yang sesuai dengan angka Romawi tersebut.

// Fungsi ini menggunakan objek romanNumeralMap yang menyimpan nilai-nilai simbol angka Romawi dalam bentuk pasangan key-value. Kemudian, fungsi ini melakukan iterasi melalui setiap karakter dari string input menggunakan loop for.

// Dalam setiap iterasi, fungsi ini memeriksa apakah karakter saat ini lebih besar dari karakter sebelumnya. Jika ya, itu berarti pasangan karakter saat ini dan sebelumnya mewakili angka yang lebih besar. Oleh karena itu, fungsi akan menambahkan nilai karakter saat ini ke result, dan kemudian mengurangi dua kali nilai karakter sebelumnya dari result.

// Jika karakter saat ini tidak lebih besar dari karakter sebelumnya, fungsi akan menambahkan nilai karakter saat ini ke result. Setelah selesai iterasi, fungsi akan mengembalikan nilai result.

console.log("=========================== soal no 3 ======================");

// ● Given an integer numRows, return the first numRows of
// Pascal's triangle.
// ● In Pascal's triangle, each number is the sum of the two
// numbers directly above it as shown →
// ● Example 1:
// ○ Input: numRows = 5
// ○ Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// ● Example 2:
// ○ Input: numRows = 1
// ○ Output: [[1]]
function pascalTriangel(numRows) {
	let i = 0;
	let j = 0;
	let result = [];

	for (i = 0; i < numRows; i++) {
		result.push(Array(i + 1));
		for (j = 0; j <= i; j++) {
			if (j === 0 || j === i) {
				result[i][j] = 1;
			} else {
				result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
			}
		}
	}
	return result;
}

console.log(pascalTriangel(5));

// 	Fungsi pascalTriangel(numRows) digunakan untuk menghasilkan segitiga Pascal dengan jumlah baris numRows. Segitiga Pascal adalah pola angka yang dibuat dengan menambahkan dua angka di atasnya untuk membuat angka di bawahnya. Baris pertama dari segitiga Pascal berisi angka tunggal 1, sedangkan setiap baris berikutnya dibuat dengan menambahkan dua angka yang berdekatan dari baris di atasnya.

// Fungsi ini menggunakan pendekatan algoritma nested loop untuk menghasilkan segitiga Pascal. Pertama, fungsi membuat variabel i dan j untuk digunakan sebagai iterator untuk loop for. Kemudian, variabel result diinisialisasi sebagai array kosong.

// Selanjutnya, fungsi memulai loop for pertama dengan iterator i yang dimulai dari 0 hingga numRows. Pada setiap iterasi, fungsi menambahkan array baru ke dalam result dengan panjang i + 1. Kemudian, fungsi memulai loop for kedua dengan iterator j yang dimulai dari 0 hingga i.

// Dalam loop for kedua, fungsi menggunakan kondisi if untuk menentukan apakah j sama dengan 0 atau i. Jika ya, maka nilai result[i][j] diset ke 1 karena baris pertama selalu berisi angka 1. Jika tidak, maka nilai result[i][j] dihitung dengan menambahkan dua angka yang berdekatan dari baris di atasnya, yaitu result[i - 1][j - 1] dan result[i - 1][j]. Setelah loop for kedua selesai, fungsi mengembalikan result.

// Pada contoh penggunaan fungsi, kita memanggil pascalTriangel(5) dan mencetak hasilnya menggunakan console.log. Ini akan menghasilkan segitiga Pascal dengan lima baris, yaitu:

// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1

// Setiap angka dalam segitiga Pascal dihitung dengan cara menambahkan dua angka yang berdekatan dari baris di atasnya. Misalnya, angka 3 pada baris keempat dihitung dengan menambahkan 1 dan 2 dari baris di atasnya. Angka-angka dalam segitiga Pascal memiliki banyak aplikasi dalam matematika dan ilmu komputer, seperti dalam kombinatorika dan analisis algoritma.
