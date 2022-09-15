let nummer = Number(prompt("Geef een nummer in."));
let i = 1;
let afvalbak = "";
while (i <= nummer) {
    if (i % 10 === 0) {
        afvalbak = afvalbak + ", ";
    } else if (i % 3 === 0) {
        afvalbak = afvalbak + "," + i + "," + i;
    } else {
        afvalbak = afvalbak + "," + i;
    }


    i++;
}
console.log(afvalbak.slice(1));