// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["dojo/_base/lang","../../core/Accessor"],function(a,c){return c.createSubclass({declaredClass:"esri.tasks.support.ClassificationDefinition",properties:{baseSymbol:null,colorRamp:null,type:null},toJSON:function(){var b={};this.baseSymbol&&a.mixin(b,{baseSymbol:this.baseSymbol.toJSON()});this.colorRamp&&!a.isString(this.colorRamp)&&a.mixin(b,{colorRamp:this.colorRamp.toJSON()});return b}})});