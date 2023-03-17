class FoodOrderQueue {
	constructor() {
		this.orders = [];
	}

	addOrder(order) {
		this.orders.push(order);
	}

	async processQueue() {
		let queueNumber = 1;
		while (this.orders.length > 0) {
			const order = this.orders.shift();
			const processingTime = Math.floor(Math.random() * 10) + 1;
			console.log(
				`Memproses pesanan untuk ${order} dari antrian ke - ${queueNumber}`
			);
			await timeInMilisecond(processingTime * 1000);
			console.log(
				`Pesanan untuk ${order} dari antrian ke - ${queueNumber} selesai dalam ${processingTime} detik.`
			);
			queueNumber++;
		}
	}
}

function timeInMilisecond(milisecond) {
	return new Promise((resolve) => setTimeout(resolve, milisecond));
}

module.exports = FoodOrderQueue;

// Kelas FoodOrderQueue adalah sebuah kelas JavaScript yang digunakan untuk mengatur antrian dan memproses pesanan makanan. Konstruktor kelas ini menciptakan sebuah array kosong untuk menyimpan pesanan yang akan diantri. Metode addOrder() digunakan untuk menambahkan pesanan baru ke dalam antrian. Metode processQueue() adalah metode asinkron yang memproses pesanan satu per satu dari antrian dengan menggunakan fungsi timeInMilisecond() untuk menunggu sejumlah waktu sebelum pesanan selesai diproses.

// Fungsi timeInMilisecond() adalah sebuah fungsi helper yang digunakan oleh metode processQueue() untuk menunda eksekusi kode selama jangka waktu tertentu dalam milidetik.

// Secara keseluruhan, kelas FoodOrderQueue sangat berguna untuk mengatur antrian pesanan makanan pada sebuah restoran atau tempat makan lainnya. Metode processQueue() akan memproses pesanan secara berurutan, sehingga pesanan akan dikeluarkan dari antrian dalam urutan yang benar dan tidak ada pesanan yang terlewatkan. Proses ini juga memungkinkan pengaturan waktu yang lebih baik sehingga pesanan dapat selesai diproses dalam waktu yang diharapkan dan dapat disajikan kepada pelanggan dengan cepat.
