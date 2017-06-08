// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","./SingleKey"],function(a,e,f,g){a=function(a){function b(b,d,c){c=a.call(this,"esri.views.3d.input.handlers.SingleKeyResetTilt",d,c)||this;c.view=b;c.key=d;return c}f(b,a);b.prototype.activate=function(){this.view.goTo({tilt:0})};return b}(g.SingleKey);e.SingleKeyResetTilt=a});