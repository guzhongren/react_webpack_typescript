// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../../core/kebabDictionary","../../core/JSONSupport"],function(a,b){var c=a({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});return b.createSubclass({declaredClass:"esri.tasks.support.GPMessage",properties:{description:{value:null,
type:String,json:{write:!0}},type:{value:null,json:{read:c.fromJSON,write:function(a,b){b.type=c.toJSON(a)}}}}})});