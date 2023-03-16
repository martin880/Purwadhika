function pascalTriangel(n) {
	// Membuat objek kosong arr
	let arr = [];
	// Melakukan looping melalui setiap baris baris hingga n (inklusif).
	for (let baris = 0; baris < n; baris++) {
		// Untuk setiap baris baris, membuat array kosong arr[baris].
		arr[baris] = [];
		// Melakukan looping melalui setiap kolom kolom hingga baris (inklusif).
		for (let kolom = 0; kolom <= baris; kolom++) {
			// Untuk setiap kolom kolom, memeriksa apakah itu kolom pertama atau terakhir (kolom === 0 || kolom === baris).
			if (kolom === 0 || kolom === baris) {
				// Jika itu kolom pertama atau terakhir, mengatur nilainya menjadi 1.
				arr[baris][kolom] = 1;
			} else {
				// Jika tidak, mengatur nilainya menjadi jumlah dua nilai di atasnya (arr[baris - 1][kolom - 1] + arr[baris - 1][kolom]).
				arr[baris][kolom] = arr[baris - 1][kolom - 1] + arr[baris - 1][kolom];
			}
		}
	}
	return arr;
	// Setelah semua nilai telah diatur untuk baris saat ini, beralih ke baris berikutnya.
	// Akhirnya, mengembalikan objek arr yang berisi nilai-nilai segitiga Pascal hingga baris ke-n.
}
console.log(pascalTriangel(5));

// Fungsi di atas merupakan implementasi segitiga Pascal. Fungsi ini mengambil input n dan mengembalikan sebuah objek (arr) yang berisi nilai-nilai segitiga Pascal hingga baris ke-n.
