//forstatement//
for (let i = 0; i < 5; i++) {
    console.log("aku sudah belajar yang ke-" + (i + 1));
  }

  //function//
function tambah(a, b) {
  return a + b;
}

let hasil = tambah(10, 4);
console.log("Hasil penambahan: " + hasil);

//if//
let nilai = 70;

if (nilai >= 80) {
    console.log("Selamat! anda lulus Dari Infinite Learning Web Deveploment");
} else {
    console.log("Anda tidak lulus Dari Infinite Learning Web Deveploment, Jangan menyerah, coba lagi di kesempatan lain!");
}

// Nested if
let nilai2 = 70;

if (nilai2 >= 80) {
    console.log("Anda mendapat nilai A.");
} else if (nilai2 >= 75) {
    console.log("Anda mendapat nilai B.");
} else {
    console.log("Anda mendapat nilai C.");
}

//switchcase//
let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari belajar technical, Mengikuti kelas via zoom di Infinite Learning.");
    break;
  case "Selasa":
    console.log("Hari Diskusi, diskusi dengan kelompok macro masing-masing.");
    break;
  case "Rabu":
    console.log("Hari Presentasi, presentasi proyek kelompok bersama kelompok macro.");
    break;
  default:
    console.log("Hari libur!");
}

//while//
let angka = 0;

while (angka <= 5) {
  console.log("Angka: " + angka);
  angka++;
}

let angka2 = 0;

do {
  console.log("Angka: " + angka2);
  angka2++;
} while (angka2 <= 5);