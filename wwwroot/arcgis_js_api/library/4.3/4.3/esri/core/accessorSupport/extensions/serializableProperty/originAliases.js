// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,b){b.process=function(a){if(a.json&&a.json.origins){var c=a.json.origins,d={portalItem:["portal-item"],webScene:["web-scene"],webMap:["web-map"],webDocument:["web-scene","web-map"],"web-document":["web-scene","web-map"]};a=function(a){if(c[a]){var b=c[a];d[a].forEach(function(a){c[a]=b});delete c[a]}};for(var b in d)a(b)}}});