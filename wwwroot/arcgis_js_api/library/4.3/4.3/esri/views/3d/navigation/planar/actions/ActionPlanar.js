// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../../Action","../../../lib/glMatrix"],function(d,a){var e=a.vec3d,c=a.vec4d;return d.createSubclass({declaredClass:"esri.views.3d.navigation.planar.actions.ActionPlanar",constructor:function(){this._plane=c.create()},updatePlane:function(a,b){c.set4(b[0],b[1],b[2],-e.dot(b,a),this._plane)}})});