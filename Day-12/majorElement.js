function majorityElement(number) {
	number.sort();
	return number[Math.floor(number.length / 2)];
}
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
