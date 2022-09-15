let tafel = Number(prompt("Geef de tafel"));
let eindgetal = Number(prompt("Geef het eindgetal"));
let totaalProduct = "";

let count = 0;

for (let i = 1; i <= eindgetal; i++) {
    count++
    if (count < 3) {
        totaalProduct = "• " + totaalProduct + tafel + " x " + i + " = " + tafel * i + "," + " ";

        } else {
        totaalProduct = "• " + totaalProduct + tafel + " x " + i + " = " + tafel * i + "," + " ";
        console.log(totaalProduct.slice(4, -2));
        totaalProduct = "";
        count = 0
    }


}
console.log(totaalProduct.slice(2, -2));

// ik ga er uit da ik er minstens 3 heb als ik ze nie heb neemt hij ze niet