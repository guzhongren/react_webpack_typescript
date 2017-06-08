// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../core/Accessor","../core/Collection"],function(a,b){return a.createSubclass({declaredClass:"esri.views.GroundView",properties:{view:{},layerViews:{type:b},suspended:{get:function(){return this.view?this.view.suspended:!0}}},getDefaults:function(){return{layerViews:[]}},destroy:function(){this.view=null}})});