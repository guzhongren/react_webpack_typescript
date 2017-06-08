// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","./tsSupport/extendsHelper","./tsSupport/decorateHelper","dojo/string"],function(f,g,h,k,d){return function(){function a(e,b,c){this instanceof a&&(this.name=e,this.message=b&&d.substitute(b,c,function(a){return null==a?"":a})||"",this.details=c)}a.prototype.toString=function(){return"["+this.name+"]: "+this.message};return a}()});