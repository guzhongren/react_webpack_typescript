// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,b){b.opacityToTransparency=function(a){return Math.max(0,Math.min(Math.round(100*(1-a)),100))};b.transparencyToOpacity=function(a){return Math.max(0,Math.min(1-a/100,1))}});