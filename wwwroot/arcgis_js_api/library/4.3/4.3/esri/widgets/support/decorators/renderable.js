// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","./propUtils"],function(f,e,c){e.renderable=function(b){var d="string"===typeof b?c.splitProps(b):b;return function(a,b){a._renderableProps||(a._renderableProps=[]);a=a._renderableProps;d?a.push.apply(a,c.normalizePropNames(d,b)):a.push(b)}}});