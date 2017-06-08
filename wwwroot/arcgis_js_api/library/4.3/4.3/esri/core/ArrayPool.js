// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","./ObjectPool"],function(c,g,e){var f=Array.prototype.splice;c=function(){function b(a,b){void 0===a&&(a=50);void 0===b&&(b=50);this._pool=new e(Array,!1,function(a){return a.length=0},b,a)}b.prototype.acquire=function(){return this._pool.acquire()};b.prototype.copy=function(a){var b=this.acquire();a.unshift(0,0);f.apply(b,a);a.splice(0,2);return b};b.prototype.release=function(a){this._pool.release(a)};b.acquire=function(){return d.acquire()};b.copy=function(a){return d.copy(a)};
b.release=function(a){return d.release(a)};return b}();var d=new c(100);return c});