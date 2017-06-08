// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(f,e){function b(a){"boolean"===typeof a.read?a.read={enabled:a.read}:"function"===typeof a.read?a.read={enabled:!0,reader:a.read}:a.read&&"object"===typeof a.read&&void 0===a.read.enabled&&(a.read.enabled=!0)}function c(a){"boolean"===typeof a.write?a.write={enabled:a.write}:"function"===typeof a.write?a.write={enabled:!0,writer:a.write}:a.write&&"object"===typeof a.write&&void 0===a.write.enabled&&(a.write.enabled=!0)}e.process=function(a){a.json||(a.json={});
b(a.json);c(a.json);if(a.json.origins)for(var d in a.json.origins)b(a.json.origins[d]),c(a.json.origins[d]);return!0}});