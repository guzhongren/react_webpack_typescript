// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["dojo/_base/array","./ColorRamp"],function(a,b){return b.createSubclass({declaredClass:"esri.tasks.support.MultipartColorRamp",properties:{colorRamps:[],type:"multipart"},toJSON:function(){return{type:"multipart",colorRamps:a.map(this.colorRamps,function(a){return a.toJSON()})}}})});