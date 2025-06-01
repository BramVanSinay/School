'use strict';
let input = prompt("Geef een zin in.");

let woorden = input.split(" ").reverse();

for(let i = 0;i<woorden.length;i++){
    console.log(woorden[i]);
}