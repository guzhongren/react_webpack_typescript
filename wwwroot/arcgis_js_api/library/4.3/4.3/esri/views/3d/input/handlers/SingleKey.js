// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(a,d,e,f){a=function(a){function b(g,b,d){var c=a.call(this,g,!0)||this;c.key=b;c.registerIncoming("key-down",d,function(a){return c._handleKeyDown(a)});return c}e(b,a);b.prototype._handleKeyDown=function(a){a.data.key===this.key&&(this.activate(),a.stopPropagation())};return b}(f.InputHandler);d.SingleKey=a});