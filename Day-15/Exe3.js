// Write a code to find LCM of two numbers → use do ... while.
function lcm_two_numbers(x, y) {
	if (typeof x !== "number" || typeof y !== "number") return false;

	let a = Math.abs(x);
	let b = Math.abs(y);
	let res = a;

	do {
		if (res % b === 0) {
			return res;
		}
		res += a;
	} while (true);
}

console.log(lcm_two_numbers(3, 15));
console.log(lcm_two_numbers(10, 15));

// Pada fungsi lcm(), kita pertama-tama menginisialisasi dua variabel a dan b dengan bilangan yang dimasukkan, dan juga menginisialisasi variabel result dengan nilai a. Kemudian, kita melakukan perulangan do...while dengan kondisi true, yang artinya perulangan akan terus dilakukan selama kondisi tersebut terpenuhi.

// Di dalam perulangan, kita pertama-tama memeriksa apakah nilai result habis dibagi oleh b menggunakan operator modulus %. Jika iya, maka nilai result merupakan LCM dari kedua bilangan dan akan di-return. Namun jika belum, maka nilai result akan ditambah dengan a pada setiap iterasi hingga ditemukan LCM-nya.

// Perlu diperhatikan bahwa jika salah satu atau kedua bilangan tidak bertipe number, maka fungsi akan mengembalikan nilai false.
