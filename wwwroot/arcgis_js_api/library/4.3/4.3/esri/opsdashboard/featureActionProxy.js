// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/extendsHelper ../core/tsSupport/decorateHelper ../core/typescript ./core/ExtensionBase ../tasks/support/FeatureSet".split(" "),function(a,k,d,e,f,g,h){a=function(a){function b(){return a.call(this)||this}d(b,a);b.prototype._messageReceived=function(a){var b=this;"execute"===a.functionName.toLowerCase()&&this.getDataSourceProxy(a.args.dataSourceId).then(function(c){b._execute(c,new h(a.args.featureSet),a.args.configuration||a.args.config)})};b.prototype._execute=
function(a,b,c){this.emit("execute",{dataSourceProxy:a,features:b,config:c})};return b}(g);a=e([f.subclass()],a);return new a});