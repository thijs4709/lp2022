let aantalGetallen = Number(prompt("Geef aantal getallen"));
let i = 1;
let totalSom = 0;
for(i;i<=aantalGetallen;i++){
    let ingaveGetal = Number(prompt("Geef een getal "+i+" in"));
    totalSom = totalSom + ingaveGetal;
}
console.log("De totale som ",aantalGetallen,"is", totalSom);