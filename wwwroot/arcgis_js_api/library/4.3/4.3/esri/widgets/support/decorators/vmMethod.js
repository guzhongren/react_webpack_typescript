// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/accessorSupport/get"],function(h,b,d){b.vmMethod=function(){console.warn("@vmMethod is deprecated, use @aliasOf instead");return function(b,f,g){var e="viewModel."+f,c;g.value=function(){for(var b=[],a=0;a<arguments.length;a++)b[a]=arguments[a];if(a=d.default(this,e))return c||(c=e.split(".").slice(0,-1).join(".")),a=a.bind(d.default(this,c)),a.call.apply(a,[this].concat(b))}}}});