// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../config","./WebTileLayer"],function(a,b){a.request.corsEnabledServers.push("a.tile.openstreetmap.org","b.tile.openstreetmap.org","c.tile.openstreetmap.org");return b.createSubclass({declaredClass:"esri.layers.OpenStreetMapLayer",properties:{copyright:"Map data \x26copy; OpenStreetMap contributors, CC-BY-SA",subDomains:{value:["a","b","c"]},urlTemplate:"https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",operationalLayerType:"OpenStreetMap",type:{value:"open-street-map",
json:{read:!1}}}})});