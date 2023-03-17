class Queue {
	constructor() {
		this.queue = [];
		this.isProcessing = false;
	}

	addOrder(order) {
		this.queue.push(order);
		if (!this.isProcessing) {
			this.processOrders();
		}
	}

	async processOrders() {
		this.isProcessing = true;
		while (this.queue.length > 0) {
			const order = this.queue.shift();
			console.log(`Memproses orderan ${order.id}...`);
			await this.processOrder(order);
		}
		console.log("Pesanan selesai diproses.");
		this.isProcessing = false;
	}

	processOrder(order) {
		return new Promise((resolve) => {
			const randomInterval = Math.floor(Math.random() * 10) + 1;
			setTimeout(() => {
				console.log(
					`Pesanan ${order.id} untuk ${order.name} selesai setelah ${randomInterval} detik.`
				);
				resolve();
			}, randomInterval * 1000);
		});
	}
}

module.exports = Queue;
