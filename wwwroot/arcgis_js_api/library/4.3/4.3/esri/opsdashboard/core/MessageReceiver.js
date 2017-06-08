// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper ../../core/typescript dojo/_base/lang ../../core/Evented ./messageHandler".split(" "),function(a,k,c,d,e,f,g,h){a=function(a){function b(){return null!==a&&a.apply(this,arguments)||this}c(b,a);b.prototype.dojoConstructor=function(a){var b=this;this._setConfig(a);h.on("message-received",function(a){b.__messageReceived(a)})};b.prototype._setConfig=function(a){a&&f.mixin(this,a)};b.prototype.__messageReceived=
function(a){this._messageReceived(a)};b.prototype._messageReceived=function(a){};return b}(g);return a=d([e.subclass()],a)});