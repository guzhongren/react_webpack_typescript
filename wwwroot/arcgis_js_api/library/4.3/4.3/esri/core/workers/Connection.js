// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","./workers"],function(g,h,c){return function(){function a(d,b){this.client=d;this.id=b}a.prototype.invoke=function(d,b,a,f){return c.invoke(d,b,a,f,this.id)};a.prototype.broadcast=function(a,b,e){return c.broadcast(a,b,e,this.id)};a.prototype.close=function(){c.closeConnection(this)};return a}()});