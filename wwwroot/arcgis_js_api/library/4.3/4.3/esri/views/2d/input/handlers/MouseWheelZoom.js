// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(a,e,f,g){a=function(a){function d(h,b){var c=a.call(this,"esri.views.2d.input.handlers.MouseWheelZoom",!0)||this;c.view=h;c.registerIncoming("mouse-wheel",b,function(a){return c._handleMouseWheel(a)});return c}f(d,a);d.prototype._handleMouseWheel=function(a){var b=this;this._timerId&&clearTimeout(this._timerId);this._timerId=setTimeout(function(){b.view.navigation.interacting&&b.view.navigation.end()},
250);this.view.navigation.zoom.scroll(this.view,a);a.stopPropagation()};return d}(g.InputHandler);e.MouseWheelZoom=a});