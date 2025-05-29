'use strict';

let number;
while(isNaN(number)) number = Number(prompt("Geef een geheel getal in."));
let multiplier3 = 0;
let multiplier5 = 0;
let somVanVeelvouden = 0;

for(let i=1;i<=number;i++){
    if(i%3==0){
        multiplier3++;
        somVanVeelvouden+=3*multiplier3;
    }
    if(i%5==0){
        multiplier5++;
        somVanVeelvouden+=5*multiplier5;
    }
}
console.log(`De som van de veelvouden van 3 en 5 is ${somVanVeelvouden}`);