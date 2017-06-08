// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../../input/handlers/support"],function(a,e,f,g,h){a=function(a){function d(k,b){var c=a.call(this,"esri.views.3d.input.handlers.DoubleClickZoom",!0)||this;c.view=k;c.registerIncoming("double-click",b,function(a){return c._handleDoubleClick(a)});return c}f(d,a);d.prototype._handleDoubleClick=function(a){var b=a.data;h.eventMatchesPointerType(b.native,"primary")&&(this.view.navigation.zoom.stepScreen(Math.log(.5)/
Math.log(.6),[b.x,this.view.height-b.y]),a.stopPropagation())};return d}(g.InputHandler);e.DoubleClickZoom=a});