// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","./Util","dojox/xml/parser"],function(m,n,c,l){return function(){function d(){var a=c.VertexAttrConstants,b;for(b in a)this[a[b]]=c.VertexAttrConstants[b]}d.prototype._parse=function(a){a=l.parse(a).getElementsByTagName("snippet");for(var b=/\$[a-zA-Z0-9]+[ \t]*/,d=/[\$\s]+/g,e=0;e<a.length;e++){var h=a[e].getAttribute("name");c.assert(null==this[h]);for(var f=a[e].textContent,g=void 0;null!==(g=f.match(b));){var k=this[g[0].replace(d,"")];c.assert(void 0!==k);f=f.replace(g[0],
k)}this[h]=f}};return d}()});