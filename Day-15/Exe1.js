// Write a code to check whether the date is a weekend

function is_weekend(date1) {
	let dateTime = new Date(date1);

	if (dateTime.getDay() == 6 || dateTime.getDay() == 0) {
		return "weekend";
	} else {
		return "not weekend";
	}
}

console.log(is_weekend("Mar 17, 2023"));
console.log(is_weekend("Mar 18, 2023"));
console.log(is_weekend("Mar 19, 2023"));

// Fungsi "is_weekend" ini digunakan untuk mengecek apakah sebuah tanggal yang dimasukkan merupakan akhir pekan atau bukan.
// Fungsi ini akan mengubah tanggal yang dimasukkan menjadi objek Date menggunakan konstruktor Date() dan memeriksa apakah hari dalam minggu pada tanggal tersebut adalah Sabtu atau Minggu.
// Jika hari dalam minggu pada tanggal tersebut adalah Sabtu atau Minggu, maka fungsi akan mengembalikan nilai "weekend".
// Namun jika bukan Sabtu atau Minggu, maka fungsi akan mengembalikan nilai "not weekend". Hasil output dari fungsi ini akan menampilkan apakah tanggal yang dimasukkan merupakan akhir pekan atau bukan, pada tiga tanggal yang berbeda.
