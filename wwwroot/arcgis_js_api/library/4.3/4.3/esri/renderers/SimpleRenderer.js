// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../core/declare","../core/lang","../symbols/support/jsonUtils","./Renderer"],function(d,a,e,c){var b=d(c,{declaredClass:"esri.renderers.SimpleRenderer",properties:{description:{value:null,json:{write:!0}},label:{value:null,json:{write:!0}},symbol:{value:null,json:{read:e.read,write:function(a,b,d,c){b.symbol=e.write(a,{},c)}}},type:"simple"},getSymbol:function(a,b){return this.symbol},clone:function(){return new b({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),
visualVariables:a.clone(this.visualVariables),authoringInfo:a.clone(this.authoringInfo)})}});return b});