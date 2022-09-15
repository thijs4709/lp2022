let getal = Number(prompt("Geef een getal in."));
let i = 1;
let afvalbak = "";
for (i; i <= getal; i *= 2) {//i = i * 2
    afvalbak = afvalbak + i + ",";
}

console.log(afvalbak.slice(0, -1)); // slice is voor de bepaalde tekens weg te
// doen de eerste staat voor waar hij start met nemen de tweed voor de laatste weg te nemen
// bij toevoeging van een 3 komma neemt hij de eerste 2