class Keranjang {
	constructor(produk, qty, harga) {
		this.produk = produk;
		this.qty = qty;
		this.harga = harga;
	}
}
let belanja = [
	{ produk: "Kemeja Pria", stock: 10, harga: 120000 },
	{ produk: "Celana Jeans Pria", stock: 5, harga: 200000 },
	{ produk: "Sepatu Air Jordan High", stock: 3, harga: 2000000 },
	{ produk: "Yeezy Stock", stock: 5, harga: 4000000 },
];
let tampilanBelanja = "";

belanja.forEach((val, index) => {
	tampilanBelanja +=
		index +
		1 +
		". " +
		val.produk +
		" Stock " +
		val.stock +
		" Rp.@" +
		val.harga.toLocaleString("id-ID") +
		"\n";
});

let keranjang = [];
let menu = 0;
while (menu != 3) {
	menu = prompt(`
1. menu
2. keranjang
3. exit`);

	function cart() {
		console.log("=== Keranjang ===");
		let total = 0;
		for (let i = 0; i < keranjang.length; i++) {
			let totalHarga = keranjang[i].harga * keranjang[i].qty;
			total += totalHarga;
			prompt(
				i +
					1 +
					"." +
					" " +
					keranjang[i].produk +
					" Rp. " +
					keranjang[i].harga +
					" Qty : " +
					keranjang[i].qty +
					"\n" +
					" Total harga : " +
					totalHarga
			);
		}

		prompt(`Total harga: Rp.${total}`);

		let menu2 = prompt(
			"Pilih opsi: 1. checkout, 2. delete, 3. edit qty, 4. back"
		);
		if (menu2 === "1") {
			let payment = parseInt(
				prompt(`Total harga: Rp.${total}\nMasukkan jumlah pembayaran`)
			);
			if (payment < total) {
				prompt("Pembayaran kurang");
				return;
			}

			let date = new Date();
			console.log(`Tanggal beli: ${date.toLocaleDateString()}`);
			console.log("=== Struk Pembelian ===");
			console.log("Produk\tQty\tHarga Satuan\tTotal Harga");
			for (let i = 0; i < keranjang.length; i++) {
				let product = products[keranjang[i].productIndex];
				let subTotal = product.price * keranjang[i].qty;
				console.log(
					`${product.name}\t${keranjang[i].qty}\tRp.${product.price}\tRp.${subTotal}`
				);
			}
			console.log(`Total harga: Rp.${total}`);
		} else if (menu2 === "2") {
			let index = parseInt(prompt("Pilih nomor barang"));
			if (index < 1 || index > keranjang.length) {
				console.log("Nomor barang tidak valid");
				return;
			}
			keranjang.splice(index - 1, 1);
			console.log("Barang berhasil dihapus dari keranjang");
		}
	}
}
