// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","./Util"],function(d,e,b){return function(){function a(){this.shaders={}}a.prototype.add=function(c,a){b.assert(null==this.shaders[c]);this.shaders[c]=a};a.prototype.get=function(a){b.assert(void 0!==this.shaders[a]);return this.shaders[a]};return a}()});