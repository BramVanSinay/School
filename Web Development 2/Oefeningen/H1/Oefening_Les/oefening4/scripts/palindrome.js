'use strict';

let input = prompt("Geef een woord in");
let omgekeerd = "";
let tussenwoord = "";

for (let i = input.length;i>=0;i--){
    omgekeerd += input.charAt(i);
}
if(input !== omgekeerd)tussenwoord = "not ";

console .log(omgekeerd);

console.log(`${input} is ${tussenwoord}a palindrome`)