// let a = '';
// for(let i = 1; i <= 4; i++){
//     a += ' '.repeat(8 - i )
//     a += '*'.repeat(i + i - 1) + "\n";
// }
// console.log(a);

let s = '';
let p = 5;
let angka = 1;

for(let i = 0; i < p; i++){
    for(let j = p; j >= i; j--){
        s += ' ';
    }
    for (let j = 0; j <= i; j++){
            s += angka + ' ';
            angka++;
    }
    s += '\n';
}

console.log(s);