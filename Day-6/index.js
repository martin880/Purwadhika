let user = { // deklarasi objek
    nama : "Barak",
    greet() {
        console.log("Hello");
    },
    age : 24
};
user.email = 'baraktamvan@gmail.com';

let user2 = {...user}; // shallow copy

console.log(user);
console.log(user2);

user2.address = 'batam';

console.log(user);
console.log(user2);

user.greet();

delete user.email;

console.log(user);

let rumah = {
    person : {...user}
};

console.log(rumah.person);