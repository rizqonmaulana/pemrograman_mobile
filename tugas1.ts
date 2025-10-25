// SOAL 1 - Pola Segitiga dari NIM
console.log('SOAL 1 - Pola Segitiga dari NIM')
let nim = "9329032329";
let tinggi = parseInt(nim[nim.length - 1]);

console.log("Tinggi segitiga:", tinggi);
console.log("Pola segitiga angka:");

for (let i = 1; i <= tinggi; i++) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += j + " ";
  }
  console.log(baris.trim());
}

// SOAL 2 - Deret Aritmatika dari NIM
console.log('\nSOAL 2 - Deret Aritmatika dari NIM')
let duaDigitAkhir = parseInt(nim.slice(-2));
let digitKetigaBelakang = parseInt(nim[nim.length - 3]);
let beda = digitKetigaBelakang + 1;

console.log("Deret aritmatika (10 angka pertama):");

let deret = [];
for (let i = 0; i < 10; i++) {
  deret.push(duaDigitAkhir + i * beda);
}

console.log(deret.join(", "));


// SOAL 3 - Bilangan Prima dari NIM
console.log('\nSOAL 3 - Bilangan Prima dari NIM')
let batas = duaDigitAkhir + 10;

console.log(`Bilangan prima dari 1 sampai ${batas}:`);

function cekPrima(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

let prima: number[] = [];
for (let i = 2; i <= batas; i++) {
  if (cekPrima(i)) prima.push(i);
}

console.log(prima.join(", "));

