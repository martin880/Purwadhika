// Rumus
// AB 26*1+2
// ZZ 26 * 26 + 26
// AAA 26 * 26 + (1 * 26) + 1
// BAA 26 * 26 + (26 * 26) + (1 * 26) + 1

const convertExcel = function (val) {
	let alpaBet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let result = 0;
	for (let i = 0; i < val.length; i = i + 1) {
		for (let j = val.length; (j = j - 1); ) {
			result += Math.pow(alpaBet.length, j) * (alpaBet.indexOf(val[i]) + 1);
		}
		return result;
	}
};
console.log(["AB"].map(convertExcel));

// climb stairs with fibonacci konsep
// function climbStairs(n) {
// 	if (n <= 1) {
// 		return 1;
// 	}

// 	const steps = new Array(n + 1).fill(0);
// 	steps[0] = 1;
// 	steps[1] = 1;

// 	for (let i = 2; i <= n; i++) {
// 		steps[i] = steps[i - 1] + steps[i - 2];
// 	}

// 	console.log(steps[n]);
// }

// const numWays = climbStairs(5);
