'use strict';

let geheelGetal;
let stringVanFizzBuzz = "20";

while(isNaN(geheelGetal)) geheelGetal = Number(prompt("Geef een geheel getal in."));

if(geheelGetal%3===0)stringVanFizzBuzz+="Fizz";
if(geheelGetal%5===0)stringVanFizzBuzz+="Buzz";
if(geheelGetal%3!==0 && geheelGetal%5!==0)stringVanFizzBuzz+=geheelGetal;

console.log(stringVanFizzBuzz);