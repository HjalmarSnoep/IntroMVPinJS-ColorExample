/* 

vul de Class Color zo, dat
 -deze wordt geïnitialiseerd met 3 waarden.
 -deze waarden worden opgeslagen in properties r,g,b

 -er een method toString is, die een string maakt, zoals:
  "rgb(255,255,255)" of  "rgb(0,0,0)", afhankelijk van de waarden van r,g,b
 alle methods en properties moeten gekoppeld aan de context van het object:
 
 dus: this.r= ... ;
 
 en 
 
 this.toString = function () { ... };
 
*/

"use strict";

function Color(red,green,blue)
{
	console.log("instantiatie van een Color object");
}