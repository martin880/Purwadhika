//  Exercise : Anagram
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

// checkDuplicate
function checkDuplicate(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) return true;
		}
	}
	return false;
}

console.log(checkDuplicate([1, 2, 3, 1]));

// Linear Search

function linearSearch(arr, x) {
	for (i = 0; i < arr.length; i++) {
		if (arr[i] == x) {
			return i;
		}
	}
	return -1;
}
// mencari angka 8 di array index
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));

// bubble sort
