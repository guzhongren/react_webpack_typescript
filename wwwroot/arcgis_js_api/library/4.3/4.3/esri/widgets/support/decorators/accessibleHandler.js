// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/keys"],function(h,f,d){function g(c){return function(a){for(var e=[],b=1;b<arguments.length;b++)e[b-1]=arguments[b];b=a.type;if(a instanceof KeyboardEvent||"keyup"===b||"keydown"===b||"keypress"===b){if(a.keyCode===d.ENTER||a.keyCode===d.SPACE)a.preventDefault(),a.target.click()}else c.call.apply(c,[this,a].concat(e))}}f.accessibleHandler=function(){return function(c,a){return{value:g(c[a])}}}});