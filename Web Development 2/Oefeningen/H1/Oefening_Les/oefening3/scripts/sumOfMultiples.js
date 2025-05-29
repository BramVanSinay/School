'use strict';

let number
while (isNaN(number)) number = Number(prompt("Geef een geheel getal in")) 
let som = 0;
let multiplier3 = 1;
let multiplier5 = 1;

for(let i = 1;i<=number;i++){
    if(i%3==0){
        som+=(3*multiplier3);
        multiplier3+=1
    }
    if(i%5==0){
        som+=(5*multiplier5);
        multiplier5+=1;
    }
}
console.log(`De som van deze veelvouden is ${som}`);