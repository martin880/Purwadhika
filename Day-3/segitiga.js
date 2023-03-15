// let s = "";
// let p = 4;
// let angka = 1;

// for (let i = 0; i <= p; i++) {
// 	for (let j = p; j <= i; j++) {
// 		s += " ";
// 	}
// 	for (let j = 0; j <= i; j++) {
// 		s += angka + " ";
// 		angka++;
// 	}
// 	s += "\n";
// }

// console.log(s);

function staircase(n) {
	let output = "";

	for (let i = 1; i <= n; i++) {
		for (let s = n - 1; s >= i; s--) {
			output += " ";
		}

		for (let h = 1; h <= i; h++) {
			output += "#";
		}

		output += "\n";
	}

	console.log(output);
}
