// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../../../../core/declare"],function(b){return b([],{declaredClass:"esri.views.3d.navigation.mixins.PanMixin",type:"pan",begin:function(a){this.navigation.begin(this);this.active=!0;this.emit("begin")},update:function(a){this.emit("update")},end:function(a){this.active=!1;this.emit("end");this.navigation.end(this)},beginContinuous:function(a){},updateContinuous:function(a){},endContinuous:function(a){}})});