function calculateRatio(arr) {
	let len = arr.length;
	let pos = 0,
		neg = 0,
		zero = 0;

	for (let i = 0; i < len; i++) {
		if (arr[i] > 0) {
			pos++;
		} else if (arr[i] < 0) {
			neg++;
		} else {
			zero++;
		}
	}

	let ratio_pos = pos / len;
	let ratio_neg = neg / len;
	let ratio_zero = zero / len;

	console.log(ratio_pos.toFixed(6));
	console.log(ratio_neg.toFixed(6));
	console.log(ratio_zero.toFixed(6));
}

let arr = [1, -2, 0, 3, -4, 0];
calculateRatio(arr);
