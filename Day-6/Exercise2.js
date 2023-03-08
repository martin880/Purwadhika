// Exercise 1
// ● Create a function to calculate array of student data
// ● The object has this following properties :
//      ○ Name → String
//      ○ Email → String
//      ○ Age → Date
//       Score → Number
// ● Parameters : array of student
// ● Return values :
// ○ Object with this following properties :
//     ■ Score
//      ● Highest
//      ● Lowest
//      ● Average
//     ■ Age
//      ● Highest
//      ● Lowest
//      ● Average


const Student = class {
    constructor(nama, email, birthDate, score){
        this.nama = nama;
        this.email = email;
        this.birthDate = new Date(birthDate);
        this.score = score;

        this.age = Math.floor(
        (new Date() - new Date(birthDate)) / (1000 * 60 * 60 * 24));
    }
};

const HLA = class {
    constructor(Highest, Lowest, Average) {
        this.Highest = Highest;
        this.Lowest = Lowest;
        this.Average = Average;
    }
};

let Martin = new Student("Martin", "martin@gmail.com", '1991/03/27', 80);
let Barak = new Student("Barak", "barak@gmail.com", '1995/05/12', 70);
let Tomas = new Student("Tomas", "tomas@gmail.com", '1997/08/15', 90);

const students = [Martin, Barak, Tomas];
console.log(students);

const calculate = (students = []) => {
    const findMin = (arr = [], type = 'age') => 
    arr.reduce((min, value) => {
        return value[type] < min[type] ? value : min;
    })[type];

    const findMax = (arr = [], type = '') =>
    arr.reduce((min, value) => {
        return value[type] > min[type] ? value : min;
    })[type];

    const findAvg = (arr = [], type = '') =>
    (
     arr.reduce((avg, value, idx) => {
      return idx == 1 ? avg[type] + value[type] : avg + value[type];
     }) / arr.length
    ).toFixed(2);

    let Score = new HLA(
        findMax(students, 'score'),
        findMin(students, 'score'),
        findAvg(students, 'score')
       );
      
       let Age = new HLA(
        findMax(students, 'age'),
        findMin(students, 'age'),
        findAvg(students, 'age')
       );
       return { Score: { ...Score }, Age: { ...Age } };
};

console.log(calculate(students));