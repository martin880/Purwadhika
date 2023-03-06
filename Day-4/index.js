var arr = ['A', 'B', 'C', 'D', 'E'];
var arr2 = [];

// console.log(arr.toString().replace(/,/g, ''));
// console.log(arr.join());
// console.log(arr.pop()); // menghapus index terakhir dan return value index terakhir
// console.log(arr);
// console.log(arr.push('e')); // menambah index baru diakhir array dan return value lenght terbaru
// console.log(arr);
// console.log(arr.shift()); // menghilangkan index pertama
// console.log(arr);
// console.log(arr.unshift('f')); // menambah index baru diawal array dan return value lenght terbaru
// console.log(arr);

arr = [1, 2, 3];
arr2 = [4, 5, 6, [7, 8, 9, 10,[11, 12, 13, 14]]];

arr = arr.concat(arr2);

console.log(arr);

for(let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
            console.log(arr[i][j][k]); 
        }
    }
}

// console.log(arr[6][4][3]);

let kota = ['Jakarta', 'Bandung', 'Batam', 'Medan'];

for(let i of kota){
    console.log('Kota ' + i);
}

for (let i = 0; i < kota.length; i++) {
    console.log(arr[i]);
}

//console.log(kota);

// loop menggunakan map dengna hasil return sebuah array
let newArr = arr.map((val) => val == 'Jakarta'|| val == 'Bali' ? val : undefined);
console.log(arr);


