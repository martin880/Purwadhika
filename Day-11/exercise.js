// Rumus
// AB 26*1+2
// ZZ 26 * 26 + 26
// AAA 26 * 26 + (1 * 26) + 1
// BAA 26 * 26 + (26 * 26) + (1 * 26) + 1

const convertExcel = function (val) {
	let alpaBet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
		i,
		j,
		result = 0;
	for (i = 0, j = val.length - 1; i < val.length; i += 1, j -= 1) {
		result += Math.pow(alpaBet.length, j) * (alpaBet.indexOf(val[i]) + 1);
	}
	return result;
};

console.log(["ZZ"].map(convertExcel));

console.log("===========================================================");
// find single number
function singleNumber(nums) {
	let result = 0;
	for (let i = 0; i < nums.length; i++) {
		result = result ^ nums[i];
	}
	return result;
}

// const nums = [2, 2, 1]; // Output 1
const nums = [4, 1, 2, 1, 2]; // Output 4
// const nums = [1]; // Output 1
const single = singleNumber(nums);
console.log(single);

//  Exercise : Anagram
console.log("===========================================================");
function anagram(s = "", t = "") {
	if (s.length != t.length) {
		return console.log(``, false);
	} else {
		for (const letter of t) {
			if (!s.includes(letter)) {
				console.log(``, false);
			}
			s.replace(letter, "");
		}
		return console.log(``, true);
	}
}

anagram("makan", "nakam");

// climb the top

// climb stairs with fibonacci konsep
const climbStairs = function (n) {
	let steps = [1, 1];
	for (let i = 2; i < n + 1; i++) {
		steps.push(steps[i - 1] + steps[i - 2]);
	}
	return steps[n];
};

console.log(climbStairs(5));
