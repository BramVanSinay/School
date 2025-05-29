'use strict';

let input = prompt("Geef een zin.");
let zinOpgesplitst = input.split(" ").reverse();

for (let i = 0; i<zinOpgesplitst.length;i++){
    console.log(zinOpgesplitst[i]);
}
