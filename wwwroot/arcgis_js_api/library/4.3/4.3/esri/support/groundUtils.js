// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../core/accessorSupport/ensureType ../core/Logger ../Ground ../layers/ElevationLayer".split(" "),function(k,b,e,f,d,g){var h=f.getLogger("esri.support.groundUtils");b.groundElevationLayers={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer"}};b.ensureType=function(a){var c;"string"===typeof a?a in b.groundElevationLayers?(a=b.groundElevationLayers[a],a=new g({id:a.id,url:a.url}),c=new d({layers:[a]})):
h.warn("Unable to find ground definition for: "+a+'. Try "world-elevation"'):c=e.default(d,a);return c}});