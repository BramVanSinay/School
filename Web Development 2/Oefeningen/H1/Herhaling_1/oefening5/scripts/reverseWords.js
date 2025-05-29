'use strict';

let zin = prompt("Geef een zin in.");
let zinArray = zin.split(" ").reverse();

for(let i =0;i<zinArray.length;i++){
    console.log(zinArray[i]);
}