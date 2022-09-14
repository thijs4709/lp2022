let aantalEvenLijnen = Number(prompt("Geef een aantal even lijnen in"));
let aantalOnevenLijnen = aantalEvenLijnen / 2;
let ster = "*";
let i = 1

for (i; i <= aantalOnevenLijnen; i++) {
    console.log(ster);
    ster = ster + "*";
}
for (i; i >= 1; i--) {

    console.log(ster);

    ster = ster + "*";
}


//for (let i= aantalOnevenLijnen;i>=1;i--){ // extra manier met repeat
//    console.log("*".repeat(i));
//}