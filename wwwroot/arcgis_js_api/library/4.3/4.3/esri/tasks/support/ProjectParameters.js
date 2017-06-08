// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["dojo/_base/array","../../core/Accessor","../../core/lang","../../geometry/support/jsonUtils"],function(c,b,d,e){return b.createSubclass({declaredClass:"esri.tasks.support.ProjectParameters",properties:{geometries:null,outSR:null,transformation:null,transformForward:null},toJSON:function(){var b=c.map(this.geometries,function(a){return a.toJSON()}),a={};a.outSR=this.outSR.wkid||JSON.stringify(this.outSR.toJSON());a.inSR=this.geometries[0].spatialReference.wkid||JSON.stringify(this.geometries[0].spatialReference.toJSON());
a.geometries=JSON.stringify({geometryType:e.getJsonType(this.geometries[0]),geometries:b});this.transformation&&(a.transformation=this.transformation.wkid||JSON.stringify(this.transformation));d.isDefined(this.transformForward)&&(a.transformForward=this.transformForward);return a}})});