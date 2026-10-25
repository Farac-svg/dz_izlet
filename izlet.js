let ime = prompt("ime");
let cijena = Number(prompt("cijena ulaznice:"));
let broj = Number(prompt("broj ulaznica:"));
let budzet = Number(prompt("budžet:"));

let trosak = cijena * broj;
let preostalo= budzet-trosak;
let dovoljan_budzet= budzet>=trosak;