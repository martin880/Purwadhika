// Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email
// ● Example :
// Array1 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 2’, email : ‘student2@mail.com’ }
// ]
// Array2 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 3’, email : ‘student3@mail.com’ }
// ]
// ● Result :
// ArrayResult → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 2’, email : ‘student2@mail.com’ },
// { name: ‘Student 3’, email : ‘student3@mail.com’ }

function mergeArray(arr1, arr2){
    let arr5 = [...arr1,...arr2];

    let uniqueArr = [...new Set(arr5)];

    if(!arr1.includes(arr2)) {
        arr1.push(arr2);
    }

    console.log(uniqueArr);
}

let arr1 = [
    { name: 'Student 1', email : 'student1@mail.com' },
    { name: 'Student 2', email : 'student2@mail.com' }
];
let arr2 = [
    { name: 'Student 1', email : 'student1@mail.com' },
    { name: 'Student 3', email : 'student3@mail.com' }
];

mergeArray(arr1, arr2);
