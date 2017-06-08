// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../Point","../Polyline","../Polygon","../Multipoint","../Extent"],function(b,c,d,e,f){return{cast:function(a){return!a||a.declaredClass?a||null:void 0!==a.x&&void 0!==a.y?new b(a):void 0!==a.paths?new c(a):void 0!==a.rings?new d(a):void 0!==a.points?new e(a):void 0!==a.xmin&&void 0!==a.ymin&&void 0!==a.xmax&&void 0!==a.ymax?new f(a):null}}});