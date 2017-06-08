// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["./webgl-debug"],function(d){return{checkError:function(b,a){var c=a.getError();c!=a.NO_ERROR&&alert(b+": gl error "+c)},checkFramebufferStatus:function(b,a){b=a.checkFramebufferStatus(b);b!=a.FRAMEBUFFER_COMPLETE&&console.log("Framebuffer error 0x"+b)},handleError:function(b,a,c){alert(d.glEnumToString(b)+" was caused by call to: "+a+"("+d.glFunctionArgsToString(a,c)+")")},validateNoneOfTheArgsAreUndefined:function(b,a){for(var c=0;c<a.length;++c)void 0===a[c]&&console.error("undefined passed to gl."+
b+"("+d.glFunctionArgsToString(b,a)+")")}}});