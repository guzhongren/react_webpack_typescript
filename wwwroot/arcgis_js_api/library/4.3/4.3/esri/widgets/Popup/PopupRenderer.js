// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/widgets/Popup/templates/PopupRenderer.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"${_css.container}"\x3e\r\n    \x3cdiv class\x3d"${_css.main}"\x3e\r\n      \x3cdiv class\x3d"${_css.loadingSpinnerContainer}"\x3e\x3cspan class\x3d"${_css.iconLoading} ${_css.spinner}"\x3e\x3c/span\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_contentNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("require ../Widgette ./PopupRendererViewModel ../../core/requireUtils ../../core/watchUtils dojo/_base/lang dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/on dijit/_TemplatedMixin dijit/a11yclick dojo/i18n!./nls/PopupRenderer dojo/text!./templates/PopupRenderer.html".split(" "),function(t,u,v,w,p,q,x,k,d,n,y,r,l,z){var c={iconText:"esri-icon-font-fallback-text",iconLoading:"esri-icon-loading-indicator esri-rotating",iconDownload:"esri-icon-download",iconLeftTriangleArrow:"esri-icon-left-triangle-arrow",
iconRightTriangleArrow:"esri-icon-right-triangle-arrow",iconMedia:"esri-icon-media",iconChart:"esri-icon-chart",base:"esri-popup-renderer",container:"esri-popup-renderer__size-container",main:"esri-popup-renderer__main-container",btn:"esri-popup-renderer__button",icon:"esri-popup-renderer__icon",content:"esri-popup-renderer__content",contentElement:"esri-popup-renderer__content-element",text:"esri-popup-renderer__text",showMediaPagination:"esri-popup-renderer--media-pagination-visible",attachments:"esri-popup-renderer__attachments",
attachmentsTitle:"esri-popup-renderer__attachments-title",attachmentsItem:"esri-popup-renderer__attachments-item",attachmentsItemIcon:"esri-popup-renderer__attachments-item-icon",fields:"esri-popup-renderer__fields",fieldHeader:"esri-popup-renderer__field-header",fieldData:"esri-popup-renderer__field-data",fieldDataDate:"esri-popup-renderer__field-data--date",media:"esri-popup-renderer__media",mediaContainer:"esri-popup-renderer__media-container",mediaItemContainer:"esri-popup-renderer__media-item-container",
mediaItem:"esri-popup-renderer__media-item",mediaItemTitle:"esri-popup-renderer__media-item-title",mediaItemCaption:"esri-popup-renderer__media-item-caption",mediaPrevious:"esri-popup-renderer__media-previous",mediaPreviousIconLTR:"esri-popup-renderer__media-previous-icon",mediaPreviousIconRTL:"esri-popup-renderer__media-previous-icon--rtl",mediaNext:"esri-popup-renderer__media-next",mediaNextIconLTR:"esri-popup-renderer__media-next-icon",mediaNextIconRTL:"esri-popup-renderer__media-next-icon--rtl",
mediaSummary:"esri-popup-renderer__media-summary",mediaCount:"esri-popup-renderer__media-count",mediaImageSummary:"esri-popup-renderer__media-image-summary",mediaImageIcon:"esri-popup-renderer__media-image-icon",mediaChart:"esri-popup-renderer__media-chart",mediaChartSummary:"esri-popup-renderer__media-chart-summary",mediaChartIcon:"esri-popup-renderer__media-chart-icon",loading:"esri-popup-renderer__loading",loadingSpinnerContainer:"esri-popup-renderer__loading-container",spinner:"esri-popup-renderer__loading-spinner"},
A=/^\s*(https?:\/\/[^\s]+)\s*$/i;return u.createSubclass([y],{declaredClass:"esri.widgets.Popup.PopupRenderer",templateString:z,baseClass:c.base,constructor:function(){this._charts=[];this._chartTooltips=[]},postCreate:function(){this.inherited(arguments);var a=this;this.own(p.init(this,"viewModel.waitingForContent",this._loadingSpinner.bind(this)),p.init(this,"viewModel.graphic",this._graphicChanged.bind(this)),p.init(this,"viewModel.content",this._render.bind(this)),n(this._contentNode,n.selector("."+
c.mediaNext,r),function(){a._nextMedia(this)}),n(this._contentNode,n.selector("."+c.mediaPrevious,r),function(){a._previousMedia(this)}))},destroy:function(){this._destroyCharts();this._clearResizeTimer()},properties:{viewModel:{type:v},rendered:{readOnly:!0,value:!1}},_i18n:l,_css:c,resize:function(){this._resizeCharts();this.emit("resize")},_clearResizeTimer:function(){this._mediaResizeTimer&&(clearTimeout(this._mediaResizeTimer),this._mediaResizeTimer=0)},_countMediaInfos:function(a){var c=0,b=
0;a.forEach(function(a){"image"===a.type?c++:-1!==a.type.indexOf("chart")&&b++});return{total:b+c,images:c,charts:b}},_createMediaNodes:function(a){this._destroyCharts();var f=a.mediaIndex,b=a.mediaInfos[f];a=a.node;d.empty(a);var e=d.create("div",{className:c.mediaItem},a),f=this._createMediaType(b,f);d.place(f,e,"only");b.title&&d.create("div",{className:c.mediaItemTitle,innerHTML:b.title},a);b.caption&&d.create("div",{className:c.mediaItemCaption,innerHTML:b.caption},a);this._clearResizeTimer();
this._mediaResizeTimer=setTimeout(function(){this.resize();this._clearResizeTimer()}.bind(this),0)},_createMediaType:function(a,f){f=a.value;var b;if("image"===a.type){var e=d.create("img",{alt:a.title||"",src:f.sourceURL});f.linkURL?(b=d.create("a",{title:a.title||"",href:f.linkURL,target:this._preventNewTab(f.linkURL)?"":"_blank"}),d.place(e,b)):b=e}else-1!==a.type.indexOf("chart")&&(b=d.create("div",{className:c.mediaChart},b),f=["dojox/charting/Chart2D","dojox/charting/action2d/Tooltip"],e=a.value.theme||
this.chartTheme,"string"===typeof e&&(e=e.replace(/\./gi,"/"),-1===e.indexOf("/")&&(e="dojox/charting/themes/"+e)),e||(e="dojox/charting/themes/Claro"),f.push(e),this._cancelChartModules(),this._chartsPromise=w.when(t,f).then(function(c){this._showChart(b,a.type,a.value,c[0],c[1],c[2]);this._chartsPromise=null}.bind(this)));return b},_cancelChartModules:function(){this._chartsPromise&&this._chartsPromise.cancel()},_destroyCharts:function(){this._cancelChartModules();var a;if(this._chartTooltips&&
this._chartTooltips.length)for(a=0;a<this._chartTooltips.length;a++)this._chartTooltips[a].destroy();this._chartTooltips.length=0;if(this._charts&&this._charts.length)for(a=0;a<this._charts.length;a++)this._charts[a].destroy();this._charts.length=0},_graphicChanged:function(){this._set("rendered",!1)},_loadingSpinner:function(a){k.toggle(this.domNode,c.loading,!!a)},_nextMedia:function(a){this._pageMedia(a,"next")},_pageMedia:function(a,c){var b;if(a=x.get(a,"data-element-index"))b=parseInt(a,10),
b=this._elementInfo[b];if(b){a=b.mediaInfos;var d=b.mediaIndex;"previous"===c?d--:d++;a&&a.length&&(d=(d+a.length)%a.length);b.mediaIndex=d;this._createMediaNodes(b)}},_preventNewTab:function(a){return(a=a&&q.trim(a).toLowerCase())&&(0===a.indexOf("mailto:")||0===a.indexOf("tel:"))},_previousMedia:function(a){this._pageMedia(a,"previous")},_render:function(a){this._elementInfo=[];this._destroyCharts();d.empty(this._contentNode);var c=this.viewModel;a&&("string"===typeof a?(a=this._renderText({type:"text",
text:a}))&&d.place(a,this._contentNode,"only"):a.nodeName?d.place(a,this._contentNode,"only"):Array.isArray(a)&&a.forEach(function(a,e){var b;switch(a.type){case c.contentTypes.attachments:b=this._renderAttachments(a,e);break;case c.contentTypes.fields:b=this._renderFields(a,e);break;case c.contentTypes.media:b=this._renderMedia(a,e);break;case c.contentTypes.text:b=this._renderText(a,e)}b&&d.place(b,this._contentNode,0===e?"only":"last")},this));this.resize();setTimeout(function(){this._set("rendered",
!0)}.bind(this),0)},_renderAttachments:function(a,f){var b;if((a=a.attachmentInfos)&&a.length){b=d.create("div");k.add(b,[c.attachments,c.contentElement]);d.create("div",{className:c.attachmentsTitle,textContent:l.attach},b);var e=d.create("ul",{},b);a.forEach(function(a){var b=d.create("li",{},e),b=d.create("a",{href:a.url,target:"_blank"},b);d.create("span",{className:c.iconDownload+" "+c.attachmentsItemIcon},b);d.create("span",{className:c.attachmentsItem,textContent:a.name||l.noTitle},b)},this)}return b},
_renderFields:function(a,f){var b=this.viewModel,e,g=b.graphic.getEffectivePopupTemplate();if(a=a.fieldInfos||g&&g.fieldInfos){var h=b.formattedAttributes.content[f]||b.formattedAttributes.global;e=d.create("div");k.add(e,[c.fields,c.contentElement]);f=d.create("table",{summary:l.fieldsSummary},e);var m=d.create("tbody",{},f);a.forEach(function(a){if(a.hasOwnProperty("visible")?a.visible:1){var b=a.fieldName,e=a.label||b,b=h[b]||"",f;a=a.format&&a.format.dateFormat;b&&"string"===typeof b&&(f=b.replace(A,
'\x3ca target\x3d"_blank" href\x3d"$1" title\x3d"'+e+'"\x3e'+l.view+"\x3c/a\x3e"));var g=d.create("tr",{},m),n=e,p=b;f&&f!==b&&(n=e,p=f);d.create("th",{className:c.fieldHeader,innerHTML:n},g);e=d.create("td",{className:c.fieldData,innerHTML:p},g);a&&k.add(e,c.fieldDataDate)}},this)}return e},_renderMedia:function(a,f){var b,e=a.mediaInfos;if(e&&e.length){var g=this._countMediaInfos(e);a={tabIndex:"0",role:"button"};a["data-element-index"]=f;b=d.create("div");k.add(b,[c.media,c.contentElement]);k.toggle(b,
c.showMediaPagination,1<g.total);var h=d.create("ul",{className:c.mediaSummary},b),m=d.create("li",{className:c.mediaImageSummary},h);d.create("span",{className:c.mediaCount,"aria-label":l.numImages,textContent:"("+g.images+")"},m);d.create("span",{"aria-hidden":!0,className:c.mediaImageIcon+" "+c.iconMedia},m);h=d.create("li",{className:c.mediaImageSummary},h);d.create("span",{className:c.mediaCount,"aria-label":l.numCharts,textContent:"("+g.charts+")"},h);d.create("span",{"aria-hidden":!0,className:c.mediaChartIcon+
" "+c.iconChart},h);g=d.create("div",{className:c.mediaContainer},b);h=d.create("div",q.mixin({title:l.previous},a),g);k.add(h,[c.btn,c.mediaPrevious]);m=d.create("span",{"aria-hidden":!0},h);k.add(m,[c.icon,c.mediaPreviousIconLTR,c.iconLeftTriangleArrow]);m=d.create("span",{"aria-hidden":!0},h);k.add(m,[c.icon,c.mediaPreviousIconRTL,c.iconRightTriangleArrow]);d.create("span",{className:c.iconText,textContent:l.previous},h);e={mediaIndex:0,node:d.create("div",{className:c.mediaItemContainer},g),mediaInfos:e};
this._elementInfo[f]=e;this._createMediaNodes(e);f=d.create("div",q.mixin({title:l.next},a),g);k.add(f,[c.btn,c.mediaNext]);a=d.create("span",{"aria-hidden":!0},f);k.add(a,[c.icon,c.mediaNextIconLTR,c.iconRightTriangleArrow]);a=d.create("span",{"aria-hidden":!0},f);k.add(a,[c.icon,c.mediaNextIconRTL,c.iconLeftTriangleArrow]);d.create("span",{className:c.iconText,textContent:l.next},f)}return b},_renderText:function(a,f){var b;a&&a.text&&(b=d.create("div",{innerHTML:a.text}),k.add(b,[c.text,c.contentElement]));
return b},_resizeCharts:function(){if(this._charts&&this._charts.length)for(var a=0;a<this._charts.length;a++){var c=this._charts[a],b=c.node;b&&b.offsetWidth&&b.offsetHeight&&c.resize()}},_showChart:function(a,c,b,d,g,h){a=new d(a,{margins:{l:4,t:4,r:4,b:4}});h&&a.setTheme(h);switch(c){case "pie-chart":a.addPlot("default",{type:"Pie",labels:!1});a.addSeries("Series A",b.fields);break;case "line-chart":a.addPlot("default",{type:"Markers"});a.addAxis("x",{min:0,majorTicks:!1,minorTicks:!1,majorLabels:!1,
minorLabels:!1});a.addAxis("y",{includeZero:!0,vertical:!0,fixUpper:"minor"});b.fields.forEach(function(a,b){a.x=b+1});a.addSeries("Series A",b.fields);break;case "column-chart":a.addPlot("default",{type:"Columns",gap:3});a.addAxis("y",{includeZero:!0,vertical:!0,fixUpper:"minor"});a.addSeries("Series A",b.fields);break;case "bar-chart":a.addPlot("default",{type:"Bars",gap:3}),a.addAxis("x",{includeZero:!0,fixUpper:"minor",minorLabels:!1}),a.addAxis("y",{vertical:!0,majorTicks:!1,minorTicks:!1,majorLabels:!1,
minorLabels:!1}),a.addSeries("Series A",b.fields)}c=new g(a);a.render();this._charts.push(a);this._chartTooltips.push(c)}})});