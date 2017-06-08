// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../core/Accessor","../core/Collection"],function(b,c){return b.createSubclass({declaredClass:"esri.processors.Filter",_changeHandler:null,properties:{input:{value:null,set:function(a,b){Array.isArray(a)&&(a=new c(a));this._changeHandler&&(this._changeHandler.remove(),this._changeHandler=null);a&&a.isInstanceOf(c)?(this._changeHandler=a.on("change",this.run.bind(this)),this._set("input",a)):a||this._set("input",null)}},output:null},run:function(a){this.output&&(a.added.length&&this.output.addMany(a.added.slice()),
a.removed.length&&this.output.removeMany(a.removed.slice()))}})});