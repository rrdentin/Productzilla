//Task 1.1
//Buatlah 25 Variable dalam Typescript beserta tipe variable nya dan 
//harus mencakup semua tipe data primitif pada typescript

// Answer
// In TypeScript, there are six main primitive types:
// ● Boolean: Represents true or false values.
let isRelax: boolean = true;
let isLazy: boolean = false;
let isHungry: boolean = false;
let isTired: boolean = true;
let isMSIB: boolean = true;
let isWorking: boolean = false;

// ● Number: Represents numeric values, including integers and floating-point numbers.
let semester: number = 7;
let age: number = 21;
let sks: number = 20;
let classNum: number = 4;
let device: number = 2;
let closeFriends: number = 6;
let organization: number = 3;

// ● String: Represents a sequence of characters.
let greeting: string ="Hi There";
let className: string = "E";
let nameSI: string = "Productzilla";
let mentor: string = "Kak Krisna";
let liveSessions: string = "Senin, Rabu, Jumat";
let polytechnic: string = "Politeknik Negeri Malang";
let faculty: string = "Information Technology";
let major: string = "Informatics Engineering";
let gender: string = "Female";

// ● Symbol: Represents a unique, non-numeric value. (Introduced in ECMAScript 2015)
let nik = Symbol("2141720***");

// ● Null: Represents the absence of any value.
let empty: null = null;

// ● Undefined: Represents a variable that has not been assigned a value.
let notAssigned: undefined = undefined;

////////////////////////////////////////////////////////////////
console.log("******************************");
console.log("===== Task 1.1 =====");
console.log("******************************");
console.log(greeting);
console.log("Am I relax? " + isRelax);
console.log("Am I hungry? " + isHungry);
console.log("Am I tired? " + isTired);
console.log("Am I working? " + isWorking);
console.log("Am I MSIB? " + isMSIB);
console.log("\n");

console.log("I'm on " + semester + "th semester");
console.log("I'm " + age + "y.o");
console.log("I have " + sks + " sks");
console.log("I'm on class " + classNum+className);
console.log("My student ID is " + isMSIB);
console.log("I have " + device + " devices");
console.log("My gender is " + gender);
console.log("I have " + closeFriends + " close friends");
console.log("I've joined " + organization + " organization in campus");
console.log("\n");

console.log("I'm joining " + nameSI + " this semester");
console.log("Our mentor is " + mentor);
console.log("Our live sessions are on every " + liveSessions);
console.log("My University name is " + polytechnic);
console.log("My faculty is " + faculty);
console.log("I'm majoring in " + major);
console.log(empty);
console.log(notAssigned);
console.log("******************************");

////////////////////////////////////////////////////////////////
//Task 1.2
// Buatlah method untuk melakukan:
// ● Penjumlahan (menggunakan minimal 2 parameter)
// ● Pengurangan (menggunakan minimal 2 parameter)
// ● Perkalian (menggunakan minimal 2 parameter)
// ● Pembagian (menggunakan minimal 2 parameter)

class Kalkulator {
  // Penjumlahan
  jumlahkan(angka1: number, angka2: number): number {
      return angka1 + angka2;
  }

  // Pengurangan
  kurangkan(angka1: number, angka2: number): number {
      return angka1 - angka2;
  }

  // Perkalian
  kalikan(angka1: number, angka2: number): number {
      return angka1 * angka2;
  }

  // Pembagian
  bagi(angka1: number, angka2: number): number {
      if (angka2 === 0) {
          throw new Error("Tidak dapat membagi dengan nol");
      }
      return angka1 / angka2;
  }
}

// Contoh penggunaan
const kalkulator = new Kalkulator();
const hasilPenjumlahan = kalkulator.jumlahkan(5, 3);
const hasilPengurangan = kalkulator.kurangkan(7, 3);
const hasilPerkalian = kalkulator.kalikan(5, 5);
const hasilPembagian = kalkulator.bagi(10, 2);
console.log("******************************");
console.log("===== Task 1.2 =====");
console.log("******************************");
console.log("Hasil penjumlahan:", hasilPenjumlahan);
console.log("Hasil pengurangan:", hasilPengurangan);
console.log("Hasil perkalian:", hasilPerkalian);
console.log("Hasil pembagian:", hasilPembagian);
console.log("******************************");

////////////////////////////////////////////////////////////////
//Task 2
console.log("******************************");
console.log("===== Task 2 =====");
console.log("kerajaan Fantasia");
console.log("******************************");

// Karakter Utama
let namaPahlawan: string = "Arion";
let umur: number = 30;
let statusBertarungPahlawan: boolean = true;
console.log("Nama Pahlawan: " + namaPahlawan);
console.log("Umur: " + umur);
console.log("Status apakah pahlawan siap bertarung: " + (statusBertarungPahlawan ? 'Ya' : 'Tidak'));

//Sumber Daya Kerajaan
let emas: number = 5000;
let persediaanMakanan: number = 120;
let prajurit: number = 200;
console.log("Emas Kerajaan: " + emas + " keping emas");
console.log("Persediaan Makanan: " + persediaanMakanan + " unit");
console.log("Prajurit: " + prajurit + " kerajaan");

//Petualangan Pahlawan
let emasTambahan: number = 1500;
let pengalamanBertarung: number = 75

let emasTotal: number = emas + emasTambahan;
console.log("Emas setelah petualangan: " + emasTotal + " keping");
console.log("Pengalaman bertarung Arion: " + pengalamanBertarung + "poin pengalaman (XP)");

console.log("----------------------");
//Misi Penyembuhan
function kurangiKesehatan(jumlahPrajurit: number, poinKehilangan: number[]): void {
  let kesehatan: number = 100;
  let prajuritKesehatan: number[] = [];

  // Inisialisasi kesehatan prajurit
  for (let i = 0; i < jumlahPrajurit; i++) {
      prajuritKesehatan[i] = kesehatan;
  }

  // Kurangi kesehatan berdasarkan input poin kehilangan masing-masing prajurit
  for (let i = 0; i < prajuritKesehatan.length; i++) {
      prajuritKesehatan[i] -= poinKehilangan[i];
      if (prajuritKesehatan[i] < 0) {
          prajuritKesehatan[i] = 0; // Pastikan kesehatan tidak kurang dari 0
      }
  }

  console.log("Status prajurit setelah pertempuran:");
  for (let i = 0; i < prajuritKesehatan.length; i++) {
      if (prajuritKesehatan[i] === 0) {
          console.log(`Prajurit ${i + 1}: Kesehatan ${prajuritKesehatan[i]} poin - Tidak bisa bertarung`);
      } else {
          console.log(`Prajurit ${i + 1}: Kesehatan ${prajuritKesehatan[i]} poin`);
      }
  }
}

const jumlahPrajurit: number = 5; 
const poinKehilangan: number[] = [5, 20, 30, 100, 80]; // Poin kehilangan masing-masing prajurit

kurangiKesehatan(jumlahPrajurit, poinKehilangan);

console.log("----------------------");

function rangkumanMisi(): void {
  console.log("======= Rangkuman Misi Arion =======");
  console.log("● Nama Pahlawan: " + namaPahlawan);
  console.log("● Emas yang dikumpulkan: " + emasTotal + " keping" );
  console.log("● Poin pengalaman yang didapat: "+ pengalamanBertarung + " poin pengalamn(XP)" );
  console.log("====================================");
}
rangkumanMisi();