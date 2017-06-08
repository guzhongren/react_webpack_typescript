// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../lang","../metadata"],function(k,f,h,g){f.property=function(a){void 0===a&&(a={});return function(b,c){var d=b.constructor.prototype;(b=Object.getOwnPropertyDescriptor(b,c))&&(b.get||b.set)&&(a=h.clone(a),b.set&&(a.set=b.set),b.get&&(a.get=b.get));c=g.getPropertyMetadata(d,c);for(var e in a)d=a[e],Array.isArray(d)?c[e]=(c[e]||[]).concat(d):c[e]=d}};f.propertyJSONMeta=function(a,b,c){a=g.getPropertyMetadata(a.constructor.prototype,c);a.json||(a.json={});a=a.json;void 0!==
b&&(a.origins||(a.origins={}),a.origins[b]||(a.origins[b]={}),a=a.origins[b]);return a}});