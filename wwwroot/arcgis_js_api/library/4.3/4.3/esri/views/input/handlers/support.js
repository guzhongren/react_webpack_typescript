// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,b){b.eventMatchesPointerType=function(a,b){switch(b){case "primary":return"touch"===a.pointerType||0===a.button;case "secondary":return"touch"!==a.pointerType&&2===a.button;case "tertiary":return"touch"!==a.pointerType&&1===a.button}}});