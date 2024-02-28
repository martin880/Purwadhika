function convert(arr) {
	// Write your code here
	const letter = {
		0: " ",
		1: "a",
		2: "b",
		3: "c",
		4: "d",
		5: "e",
		6: "f",
		7: "g",
		8: "h",
		9: "i",
		10: "j",
		11: "k",
		12: "l",
		13: "m",
		14: "n",
		15: "o",
		16: "p",
		17: "q",
		18: "r",
		19: "s",
		20: "t",
		21: "u",
		22: "v",
		23: "w",
		24: "x",
		25: "y",
		26: "z",
	};
	return arr.map((num) => letter[num]).join("");
}

const nArray = [16, 21, 18, 23, 1, 4, 8, 9, 11, 1];
const str = convert(nArray);
console.log(str);

console.log(
	"=================================================================="
);
function aVeryBigSum(ar) {
	// Write your code here
	let sum = 0;
	for (let i = 0; i < ar.length; i++) {
		sum += ar[i];
	}
	return sum;
}

const arNum = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
const sum = aVeryBigSum(arNum);
console.log(sum);

console.log("=============================================================");

function primeChecker(number) {
	// Write your code here
	if (number === 1) {
		return false;
	}
	if (number === 2 || number === 3) {
		return true;
	}

	if (number % 2 === 0 || number % 3 === 0) {
		return false;
	}

	for (let i = 5; i * i <= number; i += 6) {
		if (number % i === 0 || number % (i + 2) === 0) {
			return false;
		}
	}

	return true;
}

console.log(primeChecker(10));

console.log("===========================================================");

// you are given an array of numbers, with 2 indexs. The first index is the current hour, the other indexes are increments of the current hour. For example, you get an array [14, 20] which means that the current hour is 14 o'clock, so the next 20 hours are ? the answer is 10 o'clock.

// and your task is to return a value of 10
function setHour(arr) {
	// Write your code here
	const currHours = arr[0];
	const inc = arr[1];
	let nextHours = currHours + inc;
	while (nextHours >= 24) {
		nextHours -= 24;
	}
	return nextHours;
}

const arr = [14, 20];
const nextHours = setHour(arr);
