let maxAantalGetallen = Number(prompt("Geef aan hoeveel fibonachi getallen je wilt."))
let n1= 0;
let n2= 1;
let output = ""

for (let i = 1 ;i <= maxAantalGetallen;i++){
    output += n1.toString() +","
    nextnumber = n1 + n2
    n1 = n2
    n2 = nextnumber

}
console.log(output.slice(0,-1))