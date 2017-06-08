// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","./tsSupport/generatorHelper","./tsSupport/awaiterHelper","./promiseUtils"],function(l,b,f,g,h){b.forEach=function(c,d,e){return g(this,void 0,void 0,function(){return f(this,function(a){switch(a.label){case 0:return[4,h.eachAlways(c.map(function(a,k){return d.apply(e,[a,k])}))];case 1:return a.sent(),[2]}})})};b.map=function(c,d,e){return g(this,void 0,void 0,function(){var a;return f(this,function(b){switch(b.label){case 0:return[4,h.eachAlways(c.map(function(a,b){return d.apply(e,
[a,b])}))];case 1:return a=b.sent(),[2,a.map(function(a){return a.value})]}})})}});