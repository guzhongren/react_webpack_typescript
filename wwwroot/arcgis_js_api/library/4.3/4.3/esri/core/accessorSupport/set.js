// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","./get"],function(h,b,g){function d(e,a,c){if(e&&a)if("object"===typeof a){c=0;for(var b=Object.getOwnPropertyNames(a);c<b.length;c++){var f=b[c];d(e,f,a[f])}}else"_"!==a[0]&&(-1!==a.indexOf(".")?(a=a.split("."),f=a.splice(a.length-1,1)[0],d(g.default(e,a),f,c)):e[a]=c)}b.set=d;Object.defineProperty(b,"__esModule",{value:!0});b.default=d});