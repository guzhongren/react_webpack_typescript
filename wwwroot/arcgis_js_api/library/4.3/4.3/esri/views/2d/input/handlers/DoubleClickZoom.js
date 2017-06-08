// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../../input/handlers/support"],function(a,e,f,g,h){a=function(a){function d(k,b){var c=a.call(this,"esri.views.2d.input.handlers.DoubleClickZoom",!0)||this;c.view=k;c.registerIncoming("double-click",b,function(a){return c._handleDoubleClick(a,b)});return c}f(d,a);d.prototype._handleDoubleClick=function(a,b){h.eventMatchesPointerType(a.data.native,"primary")&&(this.view.navigation.zoom.stepScreen(this.view,
a,b?.5:2),a.stopPropagation())};return d}(g.InputHandler);e.DoubleClickZoom=a});