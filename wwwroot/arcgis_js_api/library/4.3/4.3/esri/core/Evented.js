// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["./declare","dojo/Evented"],function(c,d){return c(d,{declaredClass:"esri.core.Evented",hasEventListener:function(a){a="on"+a;return!(!this[a]||!this[a].after)},emit:function(a,b){if(this.hasEventListener(a))return b=b||{},b.target||(b.target=this),this.inherited(arguments,[a,b])}})});