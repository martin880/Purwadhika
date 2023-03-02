// Write a code to convert days to years, months and days.
// ○ Example : 400 days → 1 year, 1 month, 5 days
// ○ 1 year : 365 days, 1 month : 30 days

let days = 400;

const years = Math.floor(days / 365);
const months = Math.floor((days % 365) / 30);
const day = Math.floor((days % 365) % 30);

console.log(`${years} years, ${months} months, ${day} days.`)