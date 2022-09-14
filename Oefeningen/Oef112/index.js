let age = Number(prompt("Hoe oud ben je?"))

if (age >= 18) {
    let volledigBulletin = Number(prompt("volledig bulleting? tik 12 in, anders tik 2,4,8,10 in"));
    if (volledigBulletin === 12) {
        console.log("20 euro aub");
    } else if (volledigBulletin === 10) {
        console.log("18 euro aub");
    } else if (volledigBulletin === 8) {
        console.log("16 euro aub");
    } else if (volledigBulletin === 6) {
        console.log("12 euro aub");
    } else if (volledigBulletin === 4) {
        console.log("8 euro aub");
    } else if (volledigBulletin != 12,10,8,6,4); //zelf geprobeerd om geen andere mogelijke input te geven
        console.log("verkeerde input")
} else {
    console.log("om deel te nemen aan de spelen van de Nationale Lotterij moet je minstens 18 jaar oud zijn");
}
