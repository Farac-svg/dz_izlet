let ime = prompt("ime");
let cijena = Number(prompt("cijena ulaznice:"));
let broj = Number(prompt("broj ulaznica:"));
let budzet = Number(prompt("budžet:"));

let trosak = cijena * broj;
let preostalo = budzet - trosak;
let dovoljan_budzet = budzet >= trosak;
let tocan_broj = budzet == trosak;
let nastavak = confirm("Želiš li nastaviti dalje?");

console.log("ime :" + ime);
console.log("Ukupni trošak:" + trosak + "€");
console.log("Preostali iznos: " + preostalo + "€");
console.log("Dovoljno novca: " + dovoljan_budzet);
console.log("Točan iznos: " + tocan_broj);
console.log("Nastavak: " + nastavak); 

alert(
    "Ime: " + ime + "\n" +
    "Ukupni trosak: " + trosak + " €\n" +
    "Preostali iznos: " + preostalo + " €\n" +
    "Dovoljno novca: " + dovoljan_budzet + "\n" +
    "Tocan iznos: " + tocan_broj + "\n" +
    "Nastavak planiranja: " + nastavak
);