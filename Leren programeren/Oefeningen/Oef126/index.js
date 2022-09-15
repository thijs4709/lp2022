let tekenReeks = prompt("geef een woord of zin");
let karakter = prompt("Geef een letter (karakter) in");

let aantalKaraktersTellen = 0;

for (let plaats = 0; plaats <= tekenReeks.length; plaats++) {
    if (tekenReeks.charAt(plaats) === karakter) {
        aantalKaraktersTellen++ //+=1 langere manier of aantalKaraktersTellen= aantalKaraktersTellen +1 langste manier
    }
}
console.log(aantalKaraktersTellen)