'use strict';

let nummer;
while(isNaN(nummer)) nummer = Number(prompt("Geef een geheel getal in."));

for (let i =2;i<nummer;i++){
    let isPriem = true;
    for(let j = 2;j<i;j++){
        if(i%j==0)isPriem = false;
    }
    if(isPriem === true)console.log(i);
}