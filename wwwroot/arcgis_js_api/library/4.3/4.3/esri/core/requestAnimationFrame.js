// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["dojo/_base/window","dojo/sniff","./now"],function(c,a,d){var e=c.global;c=a("ff");var f=a("ie"),h=a("webkit");a=a("opera");var g=d(),b=e.requestAnimationFrame;b||(b=e[(h&&"webkit"||c&&"moz"||a&&"o"||f&&"ms")+"RequestAnimationFrame"])||(b=function(a){var b=d(),c=Math.max(0,16-(b-g)),f=e.setTimeout(function(){a(d())},c);g=b+c;return f});return b});