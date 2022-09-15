let number = (Number(prompt("Geef een eindgetal.")));
let i =  Math.floor(Math.random() * number);
let x = -1
let count = 0
while (x != i) {
    x = Number(prompt("Geef een nummer van 0 tot" + number))
    if (x > i) {
        alert("het getal is kleiner")
    } else if(x < i)  {
        alert("het getal is groter")
    }else{

    }
    count = count + 1
}
alert("Proficiat u hebt het getal in " + count +  " aantal keer geraden.")