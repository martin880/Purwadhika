let student = [{
    name : "Barak",
    email : "barakobama@gmail.com",
    age : new Date('December 31, 1995'),
    score : 80,
},
{
    name : "Obama",
    email : "barakobama08@gmail.com",
    age : new Date('January 31, 1995'),
    score : 70,
},
{
    name : "Trump",
    email : "trumph09@gmail.com",
    age : new Date('January 31, 1985'),
    score : 70,
}
];

function calculateScore(students){
    let totalScore = 0;
    let highest = 0;
    let lowest = 0;

    for(let student of students){
        const {name , score} = student;
        totalScore += score

        highest = Math.max(highest, score);
        lowest = Math.min(lowest, score);
    
    }

    const average = students.reduce((prev, current,idx) => {
    return idx == 1 ? prev.score + current.score : prev + current.score}) / student.length
    
    return `Total score : ${totalScore}, Highest score : ${highest}, Lowest Score : ${lowest}, Average : ${average}`;
} 

console.log(calculateScore(student));

function calculateAge(students){
    let totalAge = Date.now();
    let highestAge = Date.now();
    let lowestAge = Date.now();

    for(let student of students){
        const {age} = student;
        totalAge += age

        highestAge = Math.max(highestAge, age);
        lowestAge = Math.min(lowestAge, age);
    
    }

    const averageAge = students.reduce((prev, current,idx) => {
    return idx == 1 ? prev.age + current.age : prev + current.age}) / student.length
    
    return `Total Age : ${totalAge}, Highest Age : ${highestAge}, Lowest Age : ${lowestAge}, Average : ${averageAge}`;
} 

// console.log(calculateAge(student));