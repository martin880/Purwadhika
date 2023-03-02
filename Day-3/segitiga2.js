let a = '';
for(let i = 1; i <= 4; i++){
    a += ' '.repeat(8 - i )
    a += '*'.repeat(i + i - 1) + "\n";
}
console.log(a);