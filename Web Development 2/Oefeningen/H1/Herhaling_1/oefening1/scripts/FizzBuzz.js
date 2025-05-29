'use strict';
let getal;
while(isNaN(getal)) getal = Number(prompt("Geef een getal."));
let inputString = "";

if(getal%3==0)inputString+= "Fizz";
if(getal%5==0)inputString+= "Buzz";
if(getal%3!=0&&getal%5!=0)inputString+=getal;

console.log(inputString);