// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","./previewSymbol2D","./previewSymbol3D"],function(f,c,d,e){c.renderPreviewHTML=function(a,b){return-1===a.type.indexOf("3d")?d.previewSymbol2D(a,b):e.previewSymbol3D(a,b)}});