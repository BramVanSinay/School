/**
 * Genereer een willekeurig geheel getal tussen 20 en 50 (grenzen inbegrepen)
 * en schrijf één van de volgende boodschappen naar de Console:
 *  Het willekeurig getal ligt in het interval [20,30[
 *  Het willekeurig getal ligt in het interval [30,40[
 *  Het willekeurig getal ligt in het interval [40,50]
 */

let willekeurigNummer = Math.floor(Math.random()*31)+20;
console.log(willekeurigNummer);

if(willekeurigNummer<30){
    console.log("Het willekeurig getal ligt in het interval [20,30[");
}
else if (willekeurigNummer<40){
    console.log("Het willekeurig getal ligt in het interval [30,40[");
}
else console.log("Het willekeurig getal ligt in het interval [40,50]");