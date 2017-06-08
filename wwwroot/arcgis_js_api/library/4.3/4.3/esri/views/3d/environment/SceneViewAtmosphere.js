// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../../../core/Accessor"],function(b){return b.createSubclass({properties:{quality:{}},quality:"low",_qualitySetter:function(a){-1!==["low","high"].indexOf(a)&&this._set("quality",a)},clone:function(){return new this.constructor({quality:this.quality})}})});