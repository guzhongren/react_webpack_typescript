// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","../InputHandler"],function(b,a,c,d){b=function(b){function a(){var a=b.call(this,"PreventContextMenu",!0)||this;a.registerIncoming("context-menu",function(a){a.data.native.preventDefault()});return a}c(a,b);return a}(d.InputHandler);a.PreventContextMenu=b;Object.defineProperty(a,"__esModule",{value:!0});a.default=b});