// getal vragen gebruiker
//for loop schrijven
//i=1
//i <= getal
//i++
//consolelog i controlestap
// is i priemgetal?

let getal = Number(prompt("Geef een getal"));
let i = 2;
let x = 1;
for (i; i <= getal; i++) {
    let count = 0;
    for (x; x <= i; x++) { //kan ook hier let x=1 zetten zodat later niet opnieuw x moeten resetten naar 1.

        if ((i % x) === 0) {
            count++; // of count= count +1

        }

    }
    if (count < 3) {
        console.log(i)
    }
    x = 1;

}