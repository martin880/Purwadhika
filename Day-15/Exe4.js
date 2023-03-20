// Write a code to find most common character from a string

function mostCommonChar(str) {
	if (str.length === 0) return null;

	let charMap = {};
	let maxCount = 0;
	let maxChar = "";

	// Menyimpan jumlah kemunculan setiap karakter dalam objek charMap
	for (let char of str) {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}

	// Mencari karakter dengan jumlah kemunculan terbanyak
	for (let char in charMap) {
		if (charMap[char] > maxCount) {
			maxCount = charMap[char];
			maxChar = char;
		}
	}

	return maxChar;
}

console.log(mostCommonChar("purwadhika digital school"));
console.log(mostCommonChar("martin are awesome"));

// Pada fungsi mostCommonChar(), kita menginisialisasi tiga variabel, yaitu charMap sebagai objek yang akan menyimpan jumlah kemunculan setiap karakter, maxCount sebagai nilai awal untuk jumlah kemunculan terbanyak, dan maxChar sebagai karakter dengan jumlah kemunculan terbanyak.

// Kemudian, kita melakukan loop pada setiap karakter di dalam string dan menyimpan jumlah kemunculannya dalam objek charMap. Setelah itu, kita melakukan loop pada setiap properti di dalam objek charMap dan mencari karakter dengan jumlah kemunculan terbanyak.

// Akhirnya, fungsi akan mengembalikan karakter dengan jumlah kemunculan terbanyak. Jika string kosong, maka fungsi akan mengembalikan nilai null.
