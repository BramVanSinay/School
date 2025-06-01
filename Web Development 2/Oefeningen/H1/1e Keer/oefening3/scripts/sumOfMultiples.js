'use strict';

let getal;
while(isNaN(getal)) getal = Number(prompt("Geef een geheel getal in."));
let multipliervan3 = 0;
let multipliervan5 = 0;
let totaal = 0;

for(let i = 1;i<=getal;i++){
    if (i%3===0){
        multipliervan3++;
        totaal += 3*multipliervan3;
    }
    if (i%5===0){
        multipliervan5++;
        totaal += 5*multipliervan5;
    }
}

console.log(`De som van deze veelvouden is ${totaal}`);