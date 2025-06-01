'use strict';

let input;
while(isNaN(input)) input = Number(prompt("Geef een geheel getal in."));

for(let i = 2;i<input;i++){
    let isPriem = true;
    for(let j = 2;j<i;j++){
        if (i%j == 0) isPriem = false;
    }
    if(isPriem == true) console.log(i);
}