// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","./propUtils"],function(e,b,d){b.vmEvent=function(c){return function(a){a._delegatedEventNames||(a._delegatedEventNames=[]);var b=Array.isArray(c)?c:d.splitProps(c);a._delegatedEventNames=a._delegatedEventNames.concat(b)}}});