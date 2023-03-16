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
		//jika angka romawi berikutnya lebih besar, maka dikurangi angka romawi lebih kecil
		if (angkaRomawi[s[i]] < angkaRomawi[s[i + 1]]) {
			result -= angkaRomawi[s[i]];
		}
		//else ditambah
		else {
			result += angkaRomawi[s[i]];
		}
	}
	return result;
}

console.log(romawiToInt("iv"));
console.log(romawiToInt("MMX"));
console.log(romawiToInt("VI"));
console.log(romawiToInt("III"));
console.log(romawiToInt("LVIII"));
console.log(romawiToInt("MCMXCIV"));
