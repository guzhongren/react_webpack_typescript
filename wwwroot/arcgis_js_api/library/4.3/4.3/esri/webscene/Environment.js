// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/accessorSupport/decorators ./Lighting".split(" "),function(a,l,h,g,k,e,b){a=f=function(a){function c(d){d=a.call(this,d)||this;d.lighting=new b;return d}h(c,a);c.prototype.clone=function(){return new f({lighting:b.prototype.clone.call(this.lighting)})};c.sanitizeJSON=function(a){return{lighting:a.lighting?b.sanitizeJSON(a.lighting):(new b).toJSON()}};return c}(e.declared(k));
g([e.property({type:b,json:{write:!0}})],a.prototype,"lighting",void 0);a=f=g([e.subclass("esri.webscene.Environment")],a);var f;return a});