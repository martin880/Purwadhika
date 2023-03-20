let mhs = {
	nama: "Martin",
	umur: 31,
	ips: [3.0, 2.0, 3.2],
	alamat: {
		jalan: "Jln. ABC No. 123",
		kota: "Batam",
		provinsi: "Kepri",
	},
};

console.log(mhs.alamat["kota"]);
console.log(mhs.alamat.jalan);
console.log(mhs["alamat"]["provinsi"]);
