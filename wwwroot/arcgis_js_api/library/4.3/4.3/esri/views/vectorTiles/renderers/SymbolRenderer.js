// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","./IconRenderer","./SDFRenderer"],function(q,r,c,d){return function(){function b(){this._iconRenderer=new c;this._sdfRenderer=new d}b.prototype.render=function(b,a,e,f,g,h,k,c,d,l,m,p,n){a.hasData()&&(0<a.markerPerPageElementsMap.size&&!a.isSDF&&this._iconRenderer.render(b,a,e,f,g,h,k,c,l,m,n),0<a.textElementCount&&this._sdfRenderer.render(b,a,e,f,g,h,k,d,l,m,p,n))};return b}()});