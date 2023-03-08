// let user = { // deklarasi objek
//     nama : "Barak",
//     greet() {
//         console.log("Hello");
//     },
//     age : 24
// };
// user.email = 'baraktamvan@gmail.com';

// let user2 = {...user}; // shallow copy

// console.log(user);
// console.log(user2);

// user2.address = 'batam';

// console.log(user);
// console.log(user2);

// user.greet();

// delete user.email;

// console.log(user);

// let rumah = {
//     person : {...user}
// };

// console.log(rumah.person);

// let mobil = {brand : "Honda", color : "Merah", seat : 2};
// console.log(mobil);
// mobil.startEngine = () => console.log(startEngine('Nyala'));

// const keys = Object.keys(mobil);
// console.log(keys);

// keys.map((val) => console.log(mobil[val])); // mengakses nama dari key

// let person = {
//     nama : 'Barak',
//     location : 'Scootland',
//     continent : 'Europe',
//     get greet() {
//         return `${this.nama} ${this.location} ${this.continent}.`;
//     },

//     get benua() {
//         return `${this.continent}`;
//     },

//     set greet(value) {
//         let arr = value.split(' ');
//         this.name = arr[0];
//         this.location = arr[1];
//     }
// };

// person.greet;

// console.log(person.greet);

// // destructuring

// let cars = ['bmw', 'ferrari', 'mikrolet'];
// let [barack, tamvan, pemberani] = [...cars];
// console.log(barack);

// let data1 = [1, 2, 3];
// let data2 = [4, 5, 6];
// let data3 = [...data1, ...data2];
// console.log(data3);

// //============================================
// const obj1 = {name : "Obama", hello : () => 'hello'};
// const obj2 = {email : "Obama@gmail.com", name: "Barak2", hello:'hello'};

// const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// let orang = {
//     firstName: "Jacky",
//     lastName : "Chan",
//     greetings(){
//         console.log(`Hello ${this.firstName} ${this.lastName}`);
//     }
// };

// orang.greetings();

// const person2 = {
//     isHuman: false,
//     printIntroduction: function() {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
//   };
  
//   const me = Object.create(person2);
  
//   me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
//   me.isHuman = true; // Inherited properties can be overwritten
  
//   me.printIntroduction();
//   // Expected output: "My name is Matthew. Am I human? true"

//   Object.is(25,25);
//   console.log(Boolean(Object));

// Constructor

// let Baju = class {
//     constructor(kerah, warna, size, bahan){
//         this.kerah = kerah;
//         this.warna = warna;
//         this.size = size;
//         this.bahan = bahan;
//     }
// }

// let baju = new Baju("Oval", "Pink", "L", "Cotton");
// console.log(baju); 


// class DB {
//     static #connection = "";

//     static #initializeConnection(){
//         const randomNUm = Math.ceil(Math.random() * 100);
//         DB.#connection = `New Database Connection ${randomNUm}`;
//     }

//     static getConnection() {
//         if(!DB.#connection){
//             DB.#initializeConnection();
//         }

//         return DB.#connection;
//     }
// }

// console.log(DB.getConnection());
// console.log(DB.getConnection());