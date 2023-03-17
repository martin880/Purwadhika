function sum(a, b) {
	return a + b;
}

function multiply(a, b) {
	return a * b;
}

module.exports = { sum, multiply };

console.log(sum(1, 2)); // expected 3
console.log(sum(1, 7)); // expected 8
