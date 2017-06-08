// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../../../../core/Accessor"],function(a){return a.createSubclass([],{properties:{updating:{readOnly:!0},updatingPercentageValue:{value:100,readOnly:!0},updatingPercentage:{dependsOn:["updating","updatingPercentageValue"],readOnly:!0,value:0,get:function(){return this.updating?this.updatingPercentageValue:0}}},constructor:function(){}})});