// Exercise - Employee Salary

//parent class
class Employee{
    constructor(nama, jabatan, ratarataJamKerja){
        this.nama = nama;
        this.jabatan = jabatan;
        this.ratarataJamKerja = ratarataJamKerja;
        this.jamKerja = 0;
    }

    // buat method menambah jam kerja perhari
    tambahJamKerja(jam){
        this.ratarataJamKerja += jam;
    }

    // method menghitung gaji
    hitungGaji(){
        // akan diganti oleh child class
        return 0;
    }
}

// Create a FulltimeEmployee as a child of Employee class
class FulltimeEmployee extends Employee{
    constructor(nama, ratarataJamKerja){
        super(nama, "Full-time", ratarataJamKerja);
    }

    // method untuk menghitung total gaji
    hitungGaji(){
        let gaji = 0;
        if(this.jamKerja > 6){
            gaji += (this.ratarataJamKerja * 75) * (this.jamKerja - 6);
            this.jamKerja = 6;
        }

        gaji += this.ratarataJamKerja * this.jamKerja;
        return gaji;
    }
}

// Create a ParttimeEmployee as a child of Employee class
class ParttimeEmployee extends Employee{
    constructor(nama, ratarataJamKerja){
        super(nama, "Part-time", ratarataJamKerja);
    }

    // method untuk menghitung total gaji
    hitungGaji(){
        let gaji = 0;
        if(this.jamKerja > 6){
            gaji += (this.ratarataJamKerja * 30) * (this.jamKerja - 6);
            this.jamKerja = 6;
        }

        gaji += this.ratarataJamKerja * this.jamKerja;
        return gaji;
    }
}

let badang = new FulltimeEmployee("Badang", 100000);
badang.tambahJamKerja(9);
console.log("Gaji " + badang.nama + " " + badang.hitungGaji());

