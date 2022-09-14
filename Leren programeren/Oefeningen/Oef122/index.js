

let aantalSterren = Number(prompt("Geef het totaal aantal sterren."));
let ster = "";

for(let i=1;i<=aantalSterren ;i++){
    ster=ster + "*";
    console.log(ster);

}

let aantalSterren = Number(prompt("Geef het totaal aantal sterren."));
let ster = "*";

for(let i=1;i<=aantalSterren ;i++){
    console.log(ster);
    ster=ster + "*";
}

let aantalSterren = Number(prompt("Geef het totaal aantal sterren."));
let Ster = "*";
let totaalSom = " ";
for (let i = 1;i<=aantalSterren;i++){ //geen i = 0 anders start je zonder ster
    totaalSom= Ster.repeat(i);
    console.log(totaalSom);



// 3 mogelijke oplossingen werken nie te samen





