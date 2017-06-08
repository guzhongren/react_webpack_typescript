// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../portal/support/geometryServiceUtils","../../../../core/promiseUtils","../../../../tasks/support/ProjectParameters"],function(l,f,g,h,k){f.toView=function(a){var d=a.view.spatialReference,e=a.layer.fullExtent&&a.layer.fullExtent.spatialReference;return!e||e.equals(d)||"local"!==a.view.viewingMode?h.resolve(null):g.create(a.layer.portalItem).then(function(b){var c=new k;c.geometries=[a.layer.fullExtent];c.outSR=d;return b.project(c)}).then(function(b){if(!a.destroyed&&
b&&Array.isArray(b)&&1===b.length)return b[0]}).otherwise(function(){return null})}});