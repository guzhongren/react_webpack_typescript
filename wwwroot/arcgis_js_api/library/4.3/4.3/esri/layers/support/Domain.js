// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../../core/kebabDictionary","../../core/JSONSupport","../../core/lang"],function(b,c,d){var a=b({codedValue:"coded-value"});return c.createSubclass({declaredClass:"esri.layers.support.Domain",properties:{name:{value:null},type:{json:{read:a.fromJSON},value:null}},toJSON:function(){return d.fixJson({name:this.name,type:a.toJSON(this.type)})}})});