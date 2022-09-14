let geboortejaar = Number(prompt("Geef je geboortejaar in."));
let huidigJaar = Number(prompt("Geeg het huidige jaar in."));
let verschil = (huidigJaar-geboortejaar)

if(verschil < 0){
    console.log("Totaal mag niet negatief zijn")
} else if (verschil >= 18){

    console.log("vanaf nu mag, kan en beslis ik alles, binnen de wettelijke grenzen.");
}else{
    console.log("Gelukkig heb ik mijn ouders die alles voor me regegelen.");
}



