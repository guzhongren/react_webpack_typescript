// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(g,h){return function(b){var c={},d;for(d in b)c[b[d]]=d;var e=function(a){return c.hasOwnProperty(a)?c[a]:a},f=function(a){return b.hasOwnProperty(a)?b[a]:a};return{toJSON:e,fromJSON:f,read:function(a){return f(a)},write:function(a,b,c){b[c]=e(a)}}}});