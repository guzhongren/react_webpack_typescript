// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../../core/JSONSupport","./ClassificationDefinition"],function(a,b){return a.createSubclass({declaredClass:"esri.tasks.support.GenerateRendererParameters",properties:{classificationDefinition:{value:null,type:b,json:{read:{source:"classificationDef"},write:{target:"classificationDef"}}},where:{value:null,type:String,json:{write:!0}}}})});