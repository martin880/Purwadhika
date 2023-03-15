class Stack {
	#maxSize;
	#container = [];
	constructor(maxSize = 10) {
		this.#maxSize = maxSize;
	}
	push(element) {
		if (this.#container.length < this.#maxSize) this.#container.push(element);
	}

	pop() {
		this.#container.pop();
	}
	show() {
		console.log(`Stack`, this.#container);
	}
}

const stack = new Stack(2);
stack.push(1);
stack.push(2);
stack.pop(); // menghapus index terakhir
stack.push(3);
stack.show();

class Queue {
	#maxSize;
	#container = [];

	enqueue(element) {
		this.#container.push(element);
	}

	dequeue() {
		this.#container.shift();
	}
	show() {
		console.log(`Queue`, this.#container);
	}
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue(); // menghapus index 0
queue.show();

// Set
console.log(`=========Set=============`);
const fruits = ["banana", "apple", "jackfruit", "apple"];
const set = new Set(fruits); // merubah array menjadi set (unique values)
set.add("manggo"); // menambahkan element => jika sudah ada tidak dapat ditambahkan

for (const val of set) {
	console.log(val); // mengakses element dalam set
}
console.log(set.size); // banyak element dalam set
console.log(set.has("banana")); // mengecek apakah element ada
console.log(set.entries());
