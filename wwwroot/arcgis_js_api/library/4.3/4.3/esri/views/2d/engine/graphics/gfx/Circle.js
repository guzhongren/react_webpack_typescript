// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/tsSupport/extendsHelper","./Shape","dojox/gfx/_base"],function(c,d,e,f,g){c=function(c){function b(a){var b=c.call(this)||this;b.shape=g.getDefault("Circle");b.rawNode=a;return b}e(b,c);b.prototype.getBoundingBox=function(){if(!this.bbox){var a=this.shape;this.bbox={x:a.cx-a.r,y:a.cy-a.r,width:2*a.r,height:2*a.r}}return this.bbox};return b}(f.default);c.nodeType="circle";Object.defineProperty(d,"__esModule",{value:!0});d.default=c});