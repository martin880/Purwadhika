// you are given a string, then you count the number of sequences of each letter in the string.

// if "A" is the 1st order, "B" is the 2nd order, "C" is the 3rd order and "Z" is the 26th order,

// in an example the word "Purwadhika" has the following letter order: "p" = 16 "u" = 21 "r" = 18 "w" = 23 "a" = 1 "d" = 4 "h" = 8 "i" = 9 "k" = 11 "a" = 1

// the total of all when added is 112, then your task will return the integer 112.

// note: for spaces worth 5, and other characters 10

function countSequences(s) {
	let counts = new Array(27).fill(0);
	for (let i = 0; i < s.length; i++) {
		let c = s[i].toLowerCase();
		if (c >= "a" && c <= "z") {
			counts[c.charCodeAt(0) - "a".charCodeAt(0)]++;
		} else if (c === " ") {
			counts[26] += 5;
		} else {
			counts[26] += 10;
		}
	}
	let total = 0;
	for (let i = 0; i < 26; i++) {
		total += (i + 1) * counts[i];
	}
	total += counts[26];
	return total;
}

console.log(countSequences("purwadhika"));

function sumLetterSequences(s) {
	const letterOrders = {
		a: 1,
		b: 2,
		c: 3,
		d: 4,
		e: 5,
		f: 6,
		g: 7,
		h: 8,
		i: 9,
		j: 10,
		k: 11,
		l: 12,
		m: 13,
		n: 14,
		o: 15,
		p: 16,
		q: 17,
		r: 18,
		s: 19,
		t: 20,
		u: 21,
		v: 22,
		w: 23,
		x: 24,
		y: 25,
		z: 26,
	};

	let sum = 0;
	for (let i = 0; i < s.length; i++) {
		const char = s[i].toLowerCase();
		if (char === " ") {
			sum += 5;
		} else if (letterOrders[char]) {
			sum += letterOrders[char];
		} else {
			sum += 10;
		}
	}

	return sum;
}

console.log(sumLetterSequences("purwadhika"));
