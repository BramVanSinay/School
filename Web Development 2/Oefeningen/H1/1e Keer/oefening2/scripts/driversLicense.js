'use strict';

const speedLimit = 70;
const kmPerPoint = 5;
let huidigeSnelheid;
while(isNaN(huidigeSnelheid))huidigeSnelheid = Number(prompt("Geef de huidige snelheid van de gebruiker."));

if (huidigeSnelheid<=speedLimit)console.log("OK");
else{
    let aantalPunten = Math.floor((huidigeSnelheid-speedLimit)/5);
    if(aantalPunten<12)console.log(`points: ${aantalPunten}`);
    else console.log("driverslicense is suspended.");
}