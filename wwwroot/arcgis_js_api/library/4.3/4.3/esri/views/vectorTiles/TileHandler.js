// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports module dojo/Deferred dojo/promise/all ../../core/workers ../../core/promiseUtils ../../core/requireUtils ../../request ../2d/layers/support/TileKey ./TileIndex ./SpriteMosaic ./SpriteSource ./GlyphMosaic ./GlyphSource ./VectorTileDisplayObject ./GeometryUtils".split(" "),function(q,D,r,t,l,u,h,v,m,k,w,x,y,z,A,B,C){return function(){function c(a,b,d,e){void 0===e&&(e=!1);this.devicePixelRatio=d;this.allowUpdates=e;this._tileIndex=this._connection=this._glyphMosaic=this._spriteMosaic=
null;this._ongoingRequests={};this._vectorTileLayer=a;this._styleRepository=a.styleRepository;this._requestUpdate=b}c.prototype.destroy=function(){this.stop();this._vectorTileLayer=this._requestUpdate=this._styleRepository=null};Object.defineProperty(c.prototype,"spriteMosaic",{get:function(){return this._spriteMosaic},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"glyphMosaic",{get:function(){return this._glyphMosaic},enumerable:!0,configurable:!0});c.prototype.start=function(){var a=
this;this.stop();var b=this._styleRepository,d=new y(b.sprite,this.devicePixelRatio);d.devicePixelRatio=devicePixelRatio;var e=d.load().then(function(){a._spriteMosaic=new x(1024,1024,250);a._spriteMosaic.setSpriteSource(d)}),c=new A(b.glyphs);this._glyphMosaic=new z(1024,1024,c);var f=this._fetchTileMap(this._vectorTileLayer.tileIndexUrl),g=u.open(this,v.getAbsMid("./WorkerTileHandler",q,r)).then(function(b){a._connection=b}),p=new t(function(a){e.isFulfilled()||e.cancel();f.isFulfilled()||f.cancel();
g.isFulfilled()||g.cancel()});l([e,f,g]).then(function(d){l(a._connection.broadcast("setLayers",b.styleJSON)).then(function(){p.resolve()})});return this._broadcastPromise=p.promise};c.prototype.stop=function(){this._broadcastPromise&&!this._broadcastPromise.isFulfilled()&&this._broadcastPromise.cancel();for(var a in this._ongoingRequests)this._ongoingRequests[a].cancel("cancel");this._connection&&(this._connection.close(),this._connection=null)};c.prototype.updateTile=function(a,b){if(this.allowUpdates){if(!this._broadcastPromise.isFulfilled()||
!this._connection)return h.reject(Error("no connection"));b=Math.round(C.degToByte(b.state.rotation));if(a.rotation===b)return null;a.rotation=b;return this._connection.invoke("update",{key:a.id,rotation:b},[],{id:a.workerID}).then(function(b){a.updateSymbolData(b);return a})}};c.prototype.getVectorTileWithLRC=function(a,b,d,c){void 0===c&&(c=0);return this.getVectorTile(k.from(a,b,d,0),{state:{rotation:c}})};c.prototype.getVectorTile=function(a,b){var d=this;if(!this._broadcastPromise.isFulfilled()||
!this._connection)return h.reject(Error("no connection"));var c=this._vectorTileLayer.tileInfo,n=Math.round(b?b.state.rotation:0);if(c.lods.length<=a.level)return h.reject("Cannot create tile for the requested level");var f=this._tileIndex?this._tileIndex.dataKey(a):a;return f?this._getTileData(this._connection,a,f,n).then(function(b){if(!b||!b.tileData)return h.reject("No data");var e=c.size[0]*c.lods[a.level].resolution,g=c.origin,k=g.x+a.col*e+a.world*d._vectorTileLayer.fullExtent.width,l=k+e,
g=g.y-a.row*e,e=g-e;d._requestUpdate();return new B(a,f,[k,g,l,e],d._vectorTileLayer.tileInfo.size[1],4096,n,b.tileData,d._styleRepository,d._glyphMosaic,d.allowUpdates?b.workerId:-1,d._connection)}):h.reject(Error("no data"))};c.prototype.fetchTileData=function(a){a=k.pool.acquire(a);var b=this._vectorTileLayer.getTileUrl(a.level,a.row,a.col);k.pool.release(a);return m(b,{callbackParamName:"callback",responseType:"array-buffer"}).then(function(a){return{data:{protobuff:a.data},buffers:[a.data]}})};
c.prototype.getSprites=function(a){return h.resolve({data:{spriteItems:this._spriteMosaic.getSpriteItems(a.sprites)}})};c.prototype.getGlyphs=function(a){return this._glyphMosaic.getGlyphItems(a.tileID,a.font,a.codePoints).then(function(a){return{data:{glyphItems:a}}})};c.prototype.getStyleRepository=function(){return this._styleRepository};c.prototype.getTileIndex=function(){return this._tileIndex};c.prototype._getTileData=function(a,b,c,e){var d=this,f={id:null};if(a=this._ongoingRequests[b.id])return a;
a=this._connection.invoke("getTile",{key:b.id,refKey:c.id,rotation:e,cacheTile:this.allowUpdates},[],f).then(function(a){delete d._ongoingRequests[b.id];return{tileData:a,workerId:f.id}}).otherwise(function(a){delete d._ongoingRequests[b.id];d.allowUpdates&&d._connection.invoke("destructTileData",{key:b.id},[],f);return h.reject(a)});return this._ongoingRequests[b.id]=a};c.prototype._fetchTileMap=function(a){var b=this;return a?m(a,{callbackParamName:"callback",responseType:"json"}).then(function(a){b._tileIndex=
new w(a.data)}):null};return c}()});