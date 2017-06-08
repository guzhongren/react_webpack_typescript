// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,d){d.splitProps=function(c){return c.split(",").map(function(b){return b.trim()})};d.normalizePropNames=function(c,b){return c.map(function(a){a=0===a.indexOf(b)?a:b+"."+a;return a})}});