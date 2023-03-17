const FoodOrderQueue = require("./classFood");

const queue = new FoodOrderQueue();

queue.addOrder("Martin");
queue.addOrder("Barak");
queue.addOrder("Samsul");
queue.addOrder("Rey");

console.log("Antrian pemesan:", queue.orders);

queue
	.processQueue()
	.then(() => console.log("Pesanan selesai."))
	.catch((err) => console.error("Error : Pesanan tidak dapat diproses.", err));

//impor kelas FoodOrderQueue dari file "classFood.js". Setelah itu, kita menciptakan sebuah instance baru dari kelas tersebut dengan menyimpannya dalam variabel queue.

// Kemudian, kita menambahkan beberapa pesanan ke dalam antrian dengan menggunakan metode addOrder(). Setiap pesanan ditambahkan ke akhir array orders yang ada dalam instance queue.

// Setelah itu, kita mencetak semua pesanan dalam antrian dengan memanggil queue.orders.

// Terakhir, kita memanggil metode processQueue() untuk memproses semua pesanan dalam antrian secara berurutan. Setelah semua pesanan selesai diproses, kita mencetak pesan "Pesanan selesai". Jika ada kesalahan dalam proses, kita akan menangkap dan mencetak pesan error di konsol.
