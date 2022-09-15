let totaalNummers = Number(prompt("Geef je aantal cijfers dat je wilt optellen en gemiddelde van wilt weten "));
let i = 1;
let totaalSom = 0;
let Gemiddeldevoor = 1;
while (i <= totaalNummers) {
    nieuwNummer = Number(prompt("Geef nummer " + i + " in."));
    i++;
    totaalSom = totaalSom + nieuwNummer;
    Gemiddeldevoor = Gemiddeldevoor * nieuwNummer;
}
GemiddeldeNa = Gemiddeldevoor / totaalNummers
console.log("De totale som van", totaalNummers, "is", totaalSom,);
console.log("De gemiddelde som van", totaalNummers, "is", GemiddeldeNa,);

