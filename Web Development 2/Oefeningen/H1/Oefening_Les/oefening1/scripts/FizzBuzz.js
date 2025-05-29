'use strict';

let input = prompt("Geef een geheel getal in");
let number = Number(input);
let output = "";

if (!isNaN(number)){
    if(number%3==0)output += "Fizz";
    if(number%5==0)output += "Buzz";
    if(number%3!=0 && number%5!=0) output+= number;
    console.log(output);
}
else console.log("is not a number");


