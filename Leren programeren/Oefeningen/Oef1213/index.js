let number1= Number(prompt("Geef 2 nummers voor kleinste gemeenschappelijke veelvoud"));
let number2= Number(prompt("Geef het 2 nummer"));
let GGV = 0;
for (let i = 1; i <= number1 && i <= number2; i++) {//i <= Math.min(number1, number2) neemt dan het kleinste
    if ((number1 % i) === 0 && (number2 % i) === 0) {
        GGV = i;
    }


}

console.log(kgv= (number1 * number2)/ GGV);
