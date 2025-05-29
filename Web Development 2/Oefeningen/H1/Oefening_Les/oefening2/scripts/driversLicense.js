'use strict';

const speedLimit = 70;
const kmPerPoint = 5;

let input = prompt("Wat is de huidige sneleheid");
let huidigeSnelheid = Number(input);

if(huidigeSnelheid<=speedLimit)console.log("OK");
else{
let aantalStrafPunten = Math.floor((huidigeSnelheid - 70) / 5);
if(aantalStrafPunten<12)console.log("points : " + aantalStrafPunten);
else console.log("drivers license is suspended");
};
