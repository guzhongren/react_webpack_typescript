// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../../../core/Accessor","./SceneViewAltitudeConstraint","./SceneViewClipDistanceConstraint","./SceneViewTiltConstraint","./SceneViewCollisionConstraint"],function(c,d,e,f,g){return c.createSubclass([],{declaredClass:"esri.views.3d.constraints.SceneViewConstraints",properties:{tilt:f,altitude:d,clipDistance:e,collision:g},getDefaults:function(a){var b={};a.tilt||(b.tilt={});a.altitude||(b.altitude={});a.clipDistance||(b.clipDistance={});a.collision||(b.collision={});return b},scale:function(a){this.tilt.scale(a);
this.altitude.scale(a);this.clipDistance.scale(a)}})});