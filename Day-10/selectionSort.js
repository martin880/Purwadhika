function selectionSort(arr) {
	const n = arr.length;

	for (let i = 0; i < n; i++) {
		let minIndex = i;

		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}

		if (minIndex !== i) {
			const temp = arr[i];
			arr[i] = arr[minIndex];
			arr[minIndex] = temp;
		}
	}

	return arr;
}

const arr = [29, 72, 98, 13, 87, 66, 52, 51, 36];
console.log(selectionSort(arr));
