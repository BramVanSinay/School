'use strict';

let input = prompt("Geef een palindroom.");
let omgekeerd = "";
let tussenWoord = "";
for(let i =input.length;i>0;i--){
    omgekeerd += input[i-1];
};
console.log(omgekeerd);

if(input === omgekeerd) tussenWoord = "";
else tussenWoord = " not";

console.log(`${input} is${tussenWoord} a palindrome.`);