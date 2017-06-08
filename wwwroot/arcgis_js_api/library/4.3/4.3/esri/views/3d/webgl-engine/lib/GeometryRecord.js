// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","./IdGen"],function(a,h,c){a=function(){function b(a,c,d,e,f,g){this.id=b._idGen.gen(a.getId());this.geometry=a;this.materials=c;this.transformation=d;this.instanceParameters=e;this.origin=f;this.customTransformation=g}b.prototype.getId=function(){return this.id};b.prototype.getStaticTransformation=function(){return this.transformation};b.prototype.getShaderTransformation=function(){return this.customTransformation?this.customTransformation(this.transformation):this.transformation};
return b}();a._idGen=new c;return a});