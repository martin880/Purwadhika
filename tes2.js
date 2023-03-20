// Product list
let products = [
	{ name: "Kemeja Pria", stock: 10, price: 120000 },
	{ name: "Celana Jeans Pria", stock: 5, price: 200000 },
	{ name: "Sepatu Air Jordan High", stock: 3, price: 2000000 },
	{ name: "Sepatu Yeezy", stock: 5, price: 4000000 },
];

// Cart
let cart = [];

// Belanja
function belanja() {
	console.log("=== Produk List ===");
	for (let i = 0; i < products.length; i++) {
		console.log(
			`${i + 1}. ${products[i].name} Stock ${products[i].stock} Rp.${
				products[i].price
			}`
		);
	}

	let option = prompt("Pilih nomor produk atau 0 untuk kembali ke Home");
	if (option === "0") {
		return;
	}

	let productIndex = parseInt(option) - 1;
	if (productIndex < 0 || productIndex >= products.length) {
		console.log("Produk tidak tersedia");
		return;
	}

	let qty = parseInt(prompt("Masukkan jumlah qty"));
	if (qty < 1 || qty > products[productIndex].stock) {
		console.log("Qty tidak valid");
		return;
	}

	let cartItem = {
		productIndex: productIndex,
		qty: qty,
	};
	cart.push(cartItem);

	console.log("Produk berhasil ditambahkan ke keranjang");
}

// Keranjang
function keranjang() {
	console.log("=== Keranjang ===");
	let total = 0;
	for (let i = 0; i < cart.length; i++) {
		let product = products[cart[i].productIndex];
		let subTotal = product.price * cart[i].qty;
		total += subTotal;
		console.log(
			`${i + 1}. ${product.name} Qty ${cart[i].qty} Rp.${
				product.price
			} Subtotal Rp.${subTotal}`
		);
	}

	console.log(`Total harga: Rp.${total}`);

	let option = prompt(
		"Pilih opsi: 1. checkout, 2. delete, 3. edit qty, 4. back"
	);
	if (option === "1") {
		let payment = parseInt(
			prompt(`Total harga: Rp.${total}\nMasukkan jumlah pembayaran`)
		);
		if (payment < total) {
			console.log("Pembayaran kurang");
			return;
		}

		let date = new Date();
		console.log(`Tanggal beli: ${date.toLocaleDateString()}`);
		console.log("=== Struk Pembelian ===");
		console.log("Produk\tQty\tHarga Satuan\tTotal Harga");
		for (let i = 0; i < cart.length; i++) {
			let product = products[cart[i].productIndex];
			let subTotal = product.price * cart[i].qty;
			console.log(
				`${product.name}\t${cart[i].qty}\tRp.${product.price}\tRp.${subTotal}`
			);
		}
		console.log(`Total harga: Rp.${total}`);
	} else if (option === "2") {
		let index = parseInt(prompt("Pilih nomor barang"));
		if (index < 1 || index > cart.length) {
			console.log("Nomor barang tidak valid");
			return;
		}
		cart.splice(index - 1, 1);
		console.log("Barang berhasil dihapus dari keranjang");
	}
}
