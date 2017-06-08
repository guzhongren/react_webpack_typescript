// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/extendsHelper ../core/tsSupport/decorateHelper ../core/typescript ./core/ExtensionConfigurationBase".split(" "),function(a,g,e,c,d,f){a=function(a){function b(){return null!==a&&a.apply(this,arguments)||this}e(b,a);b.prototype._initializeResponseReceived=function(a){var b=this;this.inherited(arguments).then(function(){return b.getMapWidgetProxy(b.config.mapWidgetId).then(function(a){this.mapWidgetProxy=a})})};return b}(f);c([d.shared("esri.opsdashboard.MapToolConfigurationProxy")],
a.prototype,"declaredClass",void 0);return a=c([d.subclass()],a)});