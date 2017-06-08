// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["dojo/_base/array","../../Graphic","../../core/JSONSupport","./DirectionsFeatureSet"],function(f,d,b,g){return b.createSubclass({declaredClass:"esri.tasks.support.RouteResult",properties:{directions:{value:null,type:g},route:{value:null,json:{read:function(a,c){a.geometry&&(a.geometry.spatialReference=c.spatialReference);return d.fromJSON(a)}}},routeName:null,stops:{value:null,json:{read:function(a,c){var e=[],b=c.spatialReference;f.forEach(a,function(a){a.geometry&&(a.geometry.spatialReference=
b);e[a.attributes.Sequence-1]=d.fromJSON(a)});return e}}}}})});