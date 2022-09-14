let age = Number(prompt("Hoe oud ben je?"))

if (age >= 18) {
    let volledigBulletin = Number(prompt("volledig bulleting? tik 12 in, anders tik 2,4,8,10 in"));
    switch (volledigBulletin) {
        case 12:
            console.log("20 euro aub")
            break;
        case 10:
            console.log("16 euro aub")
            break;

        case 8:
            console.log("12 euro aub")
            break;

        case 6:
            console.log("8 euro aub")
            break;

        case 4:
            console.log("4 euro aub")
            break;
        default:
            console.log("U heeft een foute input gegeven. Probeer opnieuw aub.")

    }
} else {
    console.log("om deel te nemen aan de spelen van de Nationale Lotterij moet je minstens 18 jaar oud zijn");
}
