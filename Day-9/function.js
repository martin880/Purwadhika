// function

let f1 = (parameter) => {
	// expression
};

function f2(parameter) {
	return [];
}

// console.log(typeof f2());

// function recursive(param) {
// 	return recursive(param);
// }

function rekursiv(n, sum = 0) {
	sum += n;
	if (n == 1) {
		return sum;
	}

	return rekursiv(n - 1, sum);
}

console.log(rekursiv(5));

function sum(n) {
	if (n <= 1) {
		return n;
	}
	return n + sum(n - 1);
}
console.log(sum(5));
