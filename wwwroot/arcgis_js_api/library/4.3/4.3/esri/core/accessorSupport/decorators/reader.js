// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/_base/lang","./property"],function(m,g,h,k){g.reader=function(b,c,d){var e,f;void 0===c||Array.isArray(c)?(f=b,d=c,e=[void 0]):(f=c,e=Array.isArray(b)?b:[b]);return function(b,c,g){var l=b.constructor.prototype;e.forEach(function(a){a=k.propertyJSONMeta(b,a,f);a.read&&"object"!==typeof a.read&&(a.read={});h.setObject("read.reader",l[c],a);d&&(a.read.source=(a.read.source||[]).concat(d))})}}});