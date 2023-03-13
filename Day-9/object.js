let object1 = {
	// method dan properti merupakan keys dari Object
	nama: "sule",
	alamat: () => "Batam",
	usia() {
		return "28";
	},
};
console.log(object1);

console.log(object1.alamat()); // jalankan method alamat dari object 1
console.log(object1.usia());
console.log(object1.nama); // memanggil properti nama object 1
object1.email = "sule@gmail.com"; // menambahkan 1 key kedalam object
console.log(object1.email); // memanggil prop email dari object 1 dengan dot(.)

// class Object memiliki built-in method
let entries = Object.entries(object1); // return array [keys, value], [keys, value],...
console.log(entries);
let result = [];
for (let i = 0; i < entries.length; i++) {
	result.push([entries[i][1], entries[i][0]]); // ngpush array [value, keys]
}
console.log(result);

let keys = Object.keys(object1); // array kumpulan keys
console.log(keys);
