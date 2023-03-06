// function square(a){
//     return a * a;
// }

// console.log(square(5));

function loop(n) {
    for (let index = 0; index < n; index++) {
        console.log(index);
        if(index == 2){
           return;
        }
    }
    console.log('masih masuk');
}
loop(5);

// function expression
const func = (a) => {
    return a * a;
}
console.log(func(3));

const func2 = (b) => b * b;
console.log(func2(3));