'use strict';

let palindrome = prompt("Geef een woord");
let reversed = "";

for(let i = palindrome.length;i>=0;i--){
    reversed += palindrome.charAt(i);
}
console.log(reversed);
if (palindrome == reversed) console.log(`${palindrome} is a palindrome.`);
else console.log(`${palindrome} is not a palindrome.`);