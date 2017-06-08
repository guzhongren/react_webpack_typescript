// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/_base/lang","./property"],function(f,c,g,h){c.writer=function(a,d){var e;void 0===d?(d=a,e=[void 0]):e=Array.isArray(a)?a:[a];return function(a,c,f){var k=a.constructor.prototype;e.forEach(function(b){b=h.propertyJSONMeta(a,b,d);b.write&&"object"!==typeof b.write&&(b.write={});g.setObject("write.writer",k[c],b)})}}});