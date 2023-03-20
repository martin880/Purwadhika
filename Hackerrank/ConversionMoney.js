// You are given a number, from that number you must convert it into Indonesian banknotes in the form of an array.

// The fractions used are 100000, 75000, 50000, 20000, 10000, 5000, 2000, 1000. Find the fraction from the largest or closest, so the number of fractions is very small.

// in the example you get the number 190000, the closest fraction to the smallest number of digits is as follows

// 100000, 75000, 10000, 5000

// Your job is to return values in the form of an array

function conversionMoney(number) {
	// Write your code here
	const fractions = [100000, 75000, 50000, 20000, 10000, 5000, 2000, 1000];
	const result = [];

	for (let i = 0; i < fractions.length; i++) {
		const fraction = fractions[i];

		if (number >= fraction) {
			const count = Math.floor(number / fraction);
			result.push(...Array(count).fill(fraction));
			number -= fraction * count;
		}
	}
	if (number > 0) {
		if (number >= 2000) {
			result.push(2000, 2000);
		} else if (number >= 1000) {
			result.push(1000);
		}
	}
	return result;
}

console.log(conversionMoney(74000));
