// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/Deferred","../core/Accessor","../core/Promise","../core/Scheduler"],function(a,d,e,f,c){var b={RUNNING:"running",FINISHED:"finished",STOPPED:"stopped"};a=a([e,f],{declaredClass:"esri.views.ViewAnimation",properties:{state:{value:null},target:{value:null}},constructor:function(){this._dfd=new d;this.addResolvingPromise(this._dfd.promise)},initialize:function(){this.state=b.RUNNING},stop:function(){this.state=b.STOPPED;c.schedule(this._dfd.resolve)},finish:function(){this.state=
b.FINISHED;c.schedule(this._dfd.resolve)}});a.State=b;return a});