// hoger lager met vast getal in for loop maken

let nummer = 10
let vraag = Number(prompt("Raad het nummer"))
count = 1
for (count; count <= 10e100; count++) {
    if (vraag < nummer) {
        vraag = Number(prompt("Het nummer is hoger"))
    } else if (vraag > nummer) {
        vraag = Number(prompt("Het nummer is lager"))
    } else  {
        alert("u heeft het getal: " + nummer +  " in " + count + " geraden")
        break
    }

}
