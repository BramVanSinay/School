'use strict';

const speedLimit = 70;
const kmPerPoint = 5;
let huidigeSnelheid;
while(isNaN(huidigeSnelheid)) huidigeSnelheid = Number(prompt("Geef de huidige sneleheid"));

if(huidigeSnelheid<=speedLimit)console.log("OK");
else{
    let aantalPunten = Math.floor((huidigeSnelheid-speedLimit)/5);
    if(aantalPunten<12)console.log(`Points: ${aantalPunten}`);
    else console.log("Drivers license is suspended");
}