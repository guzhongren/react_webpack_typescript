// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/ArrayPool"],function(l,m,d){var c=new d;return function(){function b(a){this._readySignals=null;this.coords=[0,0];this._width=this.rotation=this.resolution=this._height=0;this._loadHandler=this._loadHandler.bind(this);this.data=a}Object.defineProperty(b.prototype,"data",{get:function(){return this._data},set:function(a){this._data&&this._data.removeEventListener("load",this._loadHandler);this._data=a;this._width=this._height=0;if(a instanceof HTMLImageElement)a.naturalWidth?
(this._width=a.naturalWidth,this._height=a.naturalHeight,this._emitReady()):a.addEventListener("load",this._loadHandler);else if(0<a.width&&0<a.height)this._width=a.width,this._height=a.height,this._emitReady();else throw this._data=null,Error("[BitmapSource] data cannot have size 0");},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"ready",{get:function(){return 0<this._width},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0});b.prototype.draw=function(a,b,c,d,e,f,g,h,k){this.ready&&a.drawImage(this._data,b,c,d,e,f,g,h,k)};b.prototype.onReady=function(a){this.ready?a(this):(this._readySignals||(this._readySignals=c.acquire()),this._readySignals.push(a))};b.prototype._emitReady=function(){if(this._readySignals){for(var a=0,b=this._readySignals;a<b.length;a++)(0,b[a])(this);c.release(this._readySignals);
this._readySignals=null}};b.prototype._loadHandler=function(a){a=a.target;a.removeEventListener("load",this._loadHandler);this._width=a.naturalWidth;this._height=a.naturalHeight;this._emitReady()};return b}()});