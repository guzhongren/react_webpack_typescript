// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/Logger"],function(e,a,d){function c(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];return a.join(" ")}a.classes=function(){d.getLogger("esri.widgets.support.widgetUtils").warn("classes is deprecated, use join instead.");return c.apply(this,arguments)};a.join=c;a.isRtl=function(){return"rtl"===document.head.dir}});