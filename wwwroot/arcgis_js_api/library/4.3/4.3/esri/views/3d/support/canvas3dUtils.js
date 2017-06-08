// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define([],function(){return{dataURItoBlob:function(a){var c=atob(a.split(",")[1]);a=a.split(",")[0].split(":")[1].split(";")[0];for(var d=new ArrayBuffer(c.length),e=new Uint8Array(d),b=0;b<c.length;b++)e[b]=c.charCodeAt(b);return new Blob([d],{type:a})}}});