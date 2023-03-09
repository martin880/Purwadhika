
    // Create a program to calculate total gaji based on employee jabatan
    // There are two jabatans of employee : full-time & part-time
    // gaji for full-time employee :
    // IDR 100.000 / hour
    // IDR 75.000 / hour, if the number of working jam per day is more than 6 jam
    // gaji for part-time employee :
    // IDR 50.000 / hour
    // IDR 30.000 / hour, if the number of working jam per day is more than 6 jam

    
    // Create an Employee as a parent class
    // Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
    // Create a method in that class to add working hour per day
    // Create a method in that class to calculate total gaji
    // Use inheritance concept

// Parent Employee class
class Employee {
    constructor(nama, jabatan, ratarataJamKerja) {
      this.nama = nama;
      this.jabatan = jabatan;
      this.ratarataJamKerja = ratarataJamKerja;
      this.jamKerja = 0;
    }
  
    // Method to add working hour per day
    tambahJamKerja(jam) {
      this.jamKerja += jam;
    }
  
    // Method to calculate total gaji
    hitungGaji() {
      // This method will be overridden by the child classes
      return 0;
    }
  }
  
  // Child FullTimeEmployee class inheriting from Employee
  class FullTimeEmployee extends Employee {
    constructor(nama, ratarataJamKerja) {
      super(nama, "Full-Time", ratarataJamKerja);
    }
  
    // Method to calculate total gaji
    hitungGaji() {
      let gaji = 0;
      if (this.jamKerja > 6) {
        gaji += (this.ratarataJamKerja * 75) * (this.jamKerja - 6);
        this.jamKerja = 6;
      }
      gaji += this.ratarataJamKerja * this.jamKerja;
      return gaji;
    }
  }
  
  // Child PartTimeEmployee class inheriting from Employee
  class PartTimeEmployee extends Employee {
    constructor(nama, ratarataJamKerja) {
      super(nama, "Part-Time", ratarataJamKerja);
    }
  
    // Method to calculate total gaji
    hitungGaji() {
      let gaji = 0;
      if (this.jamKerja > 6) {
        gaji += (this.ratarataJamKerja * 30) * (this.jamKerja - 6);
        this.jamKerja = 6;
      }
      gaji += this.ratarataJamKerja * this.jamKerja;
      return gaji;
    }
  }
  
  // Create some employee objects and calculate their salaries
  let barak = new FullTimeEmployee("barak", 100000);
  barak.tambahJamKerja(8);
  console.log("gaji " + barak.nama + " Rp " + barak.hitungGaji());
  
  let jessica = new PartTimeEmployee("jessica", 50000);
  jessica.tambahJamKerja(4);
  console.log("gaji " + jessica.nama + " Rp " + jessica.hitungGaji());
  
  let leo = new PartTimeEmployee("leo", 50000);
  leo.tambahJamKerja(9);
  console.log("gaji " + leo.nama + " Rp " + leo.hitungGaji());
  