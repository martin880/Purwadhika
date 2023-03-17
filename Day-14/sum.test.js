const func = require("./index"); // import
test("testing function sum", () => {
	expect(func.sum(3, 3)).toBe(6);
	expect(func.sum(4, 3)).toBe(7);
});
test("testing function multiply", () => {
	expect(func.multiply(3, 3)).toBe(9);
	expect(func.multiply(4, 3)).toBe(4 * 3);
});
