/**
 * Vraag 5
 * Waarom wordt in onderstaand programma  console.log() niet uitgevoerd?
 */
'use strict';
const a = '5';
const b = 5;
if (a != b) {
  console.log(`De string '5' is verschillend van het getal 5.`);
}

// omdat er maar 1 = gebruikt wordt dus dit betekent dat het losjes gecontroleerd wordt indien je er 2 zet wordt dit strenger gecontrolleerd