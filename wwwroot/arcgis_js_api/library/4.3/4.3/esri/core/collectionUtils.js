// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","./Collection"],function(f,d,e){d.referenceSetter=function(a,b,c){void 0===c&&(c=e);b||(b=new c);b.removeAll();a&&(Array.isArray(a)||a.isInstanceOf&&a.isInstanceOf(e))?b.addMany(a):b.add(a);return b};d.castForReferenceSetter=function(a){return a}});