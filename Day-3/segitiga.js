let s = '';
let p = 4;
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


