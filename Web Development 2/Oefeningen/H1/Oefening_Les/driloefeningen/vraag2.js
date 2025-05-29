/**
 * Vraag 2
 * Een string bevat twee getallen die van elkaar gescheiden zijn door een min-teken.
 * Haal het tweede getal uit de string en tel er 10 bij op.
 * Je code moet algemeen bruikbaar zijn. Ze moet bijvoorbeeld ook werken als het min-teken verplaatst wordt.
 * In het onderstaande geval moet er afgeprint worden: Het resultaat is 4869
 */
'use strict';

let orderNumber = '14284-4859';
let verschillendeDelen = orderNumber.split("-");
let resultaat = verschillendeDelen[1];
resultaat = Number(resultaat) + 10;
console.log(resultaat);
