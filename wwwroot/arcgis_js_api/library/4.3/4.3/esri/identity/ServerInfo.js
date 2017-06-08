// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/lang","../core/lang"],function(a,b,c){return a(null,{declaredClass:"esri.identity.ServerInfo",constructor:function(a){b.mixin(this,a)},toJSON:function(){return c.fixJson({server:this.server,tokenServiceUrl:this.tokenServiceUrl,adminTokenServiceUrl:this.adminTokenServiceUrl,shortLivedTokenValidity:this.shortLivedTokenValidity,owningSystemUrl:this.owningSystemUrl,owningTenant:this.owningTenant,currentVersion:this.currentVersion,hasPortal:this.hasPortal,hasServer:this.hasServer,
webTierAuth:this.webTierAuth})}})});