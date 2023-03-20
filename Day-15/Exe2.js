// Write a code to find GCD of two numbers → use while
function gcd_two_numbers(x, y) {
	if (typeof x !== "number" || typeof y !== "number") return false;

	x = Math.abs(x);
	y = Math.abs(y);

	while (y) {
		let t = y;
		y = x % y;
		x = t;
	}
	return x;
}

console.log(gcd_two_numbers(12, 18));
console.log(gcd_two_numbers(9, 3));

// Fungsi gcd_two_numbers ini digunakan untuk mencari Faktor Persekutuan Terbesar (GCD) dari dua bilangan. Pada awal fungsi, akan dilakukan pengecekan apakah kedua bilangan yang dimasukkan bertipe number. Jika salah satu atau kedua bilangan tidak bertipe number, maka fungsi akan mengembalikan nilai false.

// Setelah itu, kedua bilangan akan diubah menjadi nilai absolut menggunakan fungsi Math.abs(). Kemudian, dilakukan perulangan while dengan kondisi y yang artinya selama nilai y tidak sama dengan 0. Di dalam perulangan, kita menyimpan nilai y pada variabel t, lalu mengubah nilai y menjadi sisa hasil bagi x dan y, dan mengubah nilai x menjadi nilai t. Hal ini akan terus dilakukan sampai nilai y sama dengan 0, dan pada akhirnya nilai x akan menjadi hasil dari GCD.

// Hasil output dari fungsi ini akan menampilkan nilai GCD dari dua bilangan yang dimasukkan, pada dua contoh bilangan yang berbeda.
