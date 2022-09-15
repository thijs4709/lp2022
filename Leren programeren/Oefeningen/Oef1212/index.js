let number1 = Number(prompt("Geef 2 nummers voor grootste gemeenschappelijke deler"));
let number2 = Number(prompt("Geef het 2 nummer"));
let eindnummer = 0;
for (let i = 1; i <= number1 && i <= number2; i++) {//i <= Math.min(number1, number2) neemt dan het kleinste
    if ((number1 % i) === 0 && (number2 % i) === 0) {
        eindnummer = i;
    }
}
console.log(eindnummer);
