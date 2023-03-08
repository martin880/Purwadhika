// Create a function to check if two objects are equal

function equal(obj1, obj2){
    return Object.is(obj1, obj2);
}

const obj1 = {a: 1, b: 2};
const obj2 = {a: 1, b: 2};
const obj3 = {a: 1, b: 3};

console.log(equal(obj1, obj2));
console.log(equal(obj1, obj3));
