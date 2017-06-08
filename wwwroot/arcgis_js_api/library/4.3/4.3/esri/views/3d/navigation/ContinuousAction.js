// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../../../core/Accessor","../lib/glMatrix"],function(d,e){var c=e.vec3d;return d.createSubclass({properties:{active:{get:function(){return 0!==this.velocity},dependsOn:["velocity"],readOnly:!0},velocity:{}},constructor:function(){this.direction=c.create();this.status=this.timer=this.velocity=0},stop:function(){this.status=this.velocity=this.timer=0;c.set3(0,0,0,this.direction)},step:function(a){var b;a*=.001;0<this.timer?(a=Math.min(a,this.timer),b=this.velocity*a*(1-a/(2*this.timer)),this.velocity*=
1-a/this.timer,this.timer-=a):b=this.velocity*a;return b}})});