/**
 * Genereer een willekeurig geheel getal tussen 20 en 50 (grenzen inbegrepen)
 * en schrijf één van de volgende boodschappen naar de Console:
 *  Het willekeurig getal ligt in het interval [20,30[
 *  Het willekeurig getal ligt in het interval [30,40[
 *  Het willekeurig getal ligt in het interval [40,50]
 */

let willekeurigGetal = Math.floor(Math.random()*31) + 20;

console.log(willekeurigGetal);

if(willekeurigGetal<30)console.log("het willekeurig getal ligt in het interval [20,30[");
else if(willekeurigGetal<40)console.log("het willekeurig getal ligt in het interval [30,40[");
else console.log("het willekeurig getal ligt in het interval [40,50[");