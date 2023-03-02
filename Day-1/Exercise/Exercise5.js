// Write a code to get difference between dates in days.

// Kode untuk menghitung perbedaan antara dua tanggal
let date1 = new Date('Maret 1,2023');
let date2 = new Date('April 1,2023');

// konversi dalam milisecond
let hariMsecond = date2 - date1;

// konversi ke hari
// rumusnya hari dalam milidetik dibagi (milidetik kali detik kali menit kali jam)
let hari = hariMsecond / (1000 * 60 * 60 * 24);

console.log(`${hari} hari`);


