// ● Given an array nums of size n, return the majority element. The majority element is the element
// that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists
// in the array.
// ● Example 1:
// ○ Input: nums = [3,2,3]
// ○ Output: 3
// ● Example 2:
// ○ Input: nums = [2,2,1,1,1,2,2]
// ○ Output: 2

function majorityElement(number) {
	number.sort();
	return number[Math.floor(number.length / 2)];
}
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

// ● Create a function to convert romawi numeral to integer.
// ● Example 1:
// ○ Input: s = "III”
// ○ Output: 3
// ○ Explanation: III = 3.
// ● Example 2:
// ○ Input: s = "LVIII"
// ○ Output: 58
// ○ Explanation: L = 50, V= 5, III = 3.
// ● Example 3:
// ○ Input: s = "MCMXCIV"
// ○ Output: 1994
// ○ Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

function romawiToInt(s) {
	const angkaRomawi = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	let result = 0;
	for (let i = 0; i < s.length; i++) {
		if (i > 0 && angkaRomawi[s[i]] > angkaRomawi[s[i - 1]]) {
			result += angkaRomawi[s[i]] - 2 * angkaRomawi[s[i - 1]];
		} else {
			result += angkaRomawi[s[i]];
		}
	}
	return result;
}

console.log(romawiToInt("III"));
console.log(romawiToInt("LVIII"));
console.log(romawiToInt("MCMXCIV"));
