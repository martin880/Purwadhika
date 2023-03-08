// Create a function to check if two objects are equal
// Fungsi pertama-tama memeriksa apakah jumlah key dalam obj1 sama dengan jumlah key dalam obj2. Jika tidak sama, maka fungsi mengembalikan nilai false.
function equal(obj1, obj2){
    if (Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
// Selanjutnya, fungsi melakukan perulangan untuk setiap property dari obj1 dan memeriksa apakah nilai property yang sama pada obj2 juga sama. Jika ada property pada obj1 yang memiliki nilai yang berbeda dengan property yang sesuai pada obj2, maka fungsi akan mengembalikan nilai false. Jika semua property memiliki nilai yang sama pada kedua objek, maka fungsi akan mengembalikan nilai true.
    for(let prop in obj1){
        if(obj1[prop] !== obj2[prop]) {
            return false;
    }
}
return true;
}
// Kode juga mendefinisikan tiga objek: obj1, obj2, dan obj3, dan memanggil fungsi equal dengan obj1 dan obj2, dan kemudian dengan obj1 dan obj3.
const obj1 = {a: 1, b: 2};
const obj2 = {a: 1, b: 2};
const obj3 = {a: 1, b: 3};

// console.log(equal(obj1, obj2));
// console.log(equal(obj1, obj3));

// Kode di atas mendefinisikan sebuah fungsi bernama equal yang menerima dua objek sebagai argumen dan mengembalikan nilai true jika kedua objek memiliki pasangan key-value yang sama dan false jika tidak.


// Create a function to get the intersection of two objects
// ● Example
// ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// ○ Output: { a: 1 }



function equal(ob1, ob2){
    if (Object.keys(ob1).length !== Object.keys(ob2).length){
        return false;
    }
}

const ob1 = {a : 1, b : 2}
const ob2 = {a : 1, c : 3}

// console.log(equal(ob2));


// Create a function to find a factorial number using recursion

function faktorial(n) {
    // if(n > 1) faktorial(n - 1, (sum *= n));
    // console.log(sum);
    // return sum;

    if (n === 0){
        return 1;
    }

    return n * faktorial(n-1)
}

console.log(faktorial(5));
