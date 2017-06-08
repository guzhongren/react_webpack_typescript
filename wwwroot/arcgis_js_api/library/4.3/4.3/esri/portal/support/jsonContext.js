// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../Portal","../../core/urlUtils"],function(e,b,c,d){b.createForItem=function(a){return{origin:"portal-item",url:d.urlToObject(a.itemUrl),portal:a.portal||c.getDefault()}}});