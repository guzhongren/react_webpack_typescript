// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(a,h){a=function(){function a(a){this._gridSize=a;this._origins={}}a.prototype.getOrigin=function(d){var c=this._gridSize,f=Math.round(d[0]/c),g=Math.round(d[1]/c);d=Math.round(d[2]/c);var c=""+a.ORIGIN_PREFIX+f+"/"+g+"/"+d,b=this._origins[c];if(!b){var b=this._gridSize,e=a.OFFSET,b={id:c,vec3:[f*b+e,g*b+e,d*b+e]};this._origins[c]=b}return b};return a}();a.ORIGIN_PREFIX="rg_";a.OFFSET=1.11;return a});