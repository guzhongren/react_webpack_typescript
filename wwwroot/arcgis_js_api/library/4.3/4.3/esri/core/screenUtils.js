// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,b){function c(a){return 72*a/b.DPI}var d=/^(\d+(\.\d+)?)\s*((px)|(pt))?$/i;b.DPI=96;b.pt2px=function(a){return a/72*b.DPI};b.px2pt=c;b.toPt=function(a){if("string"===typeof a){if(d.test(a)){a=a.match(d);var b=Number(a[1]);return"px"===(a[3]&&a[3].toLowerCase())?c(b):b}console.warn("screenUtils.toPt: input not recognized!");return null}return a}});