(function e(b,g,d){function c(k,i){if(!g[k]){if(!b[k]){var h=typeof require=="function"&&require;
if(!i&&h){return h(k,!0)}if(a){return a(k,!0)}throw new Error("Cannot find module '"+k+"'")
}var j=g[k]={exports:{}};b[k][0].call(j.exports,function(l){var m=b[k][1][l];return c(m?m:l)
},j,j.exports,e,b,g,d)}return g[k].exports}var a=typeof require=="function"&&require;
for(var f=0;f<d.length;f++){c(d[f])}return c})({1:[function(b,c,a){c.exports={ambient:[{platform:"desktop",browser:"safari",type:"h264"},{platform:"desktop",browser:"chrome",type:"h264"},{platform:"desktop",browser:"firefox",type:"h264"},{platform:"desktop",browser:"ie",browser_version:9,type:"h264"},{platform:"tablet",browser:"safari mobile",type:"flow"},{platform:"handheld",browser:"safari mobile",type:"flow"}],scrollable:[{platform:"desktop",browser:"safari",type:"h264"},{platform:"desktop",browser:"chrome",type:"h264"},{platform:"desktop",browser:"firefox",type:"h264"},{platform:"desktop",browser:"ie",browser_version:9,type:"h264"},{platform:"tablet",browser:"safari mobile",browser_version:8,type:"flow"},{platform:"handheld",browser:"safari mobile",browser_version:8,type:"flow"}],scrubbable:[{platform:"desktop",browser:"safari",type:"h264"},{platform:"desktop",browser:"chrome",type:"h264"},{platform:"desktop",browser:"firefox",type:"h264"},{platform:"desktop",browser:"ie",browser_version:9,type:"h264"},{platform:"tablet",browser:"safari mobile",type:"flow"},{platform:"handheld",browser:"safari mobile",type:"flow"}],sizes:[{retina:true,min_viewport_width:1024,type:"large_2x"},{retina:false,min_viewport_width:1024,type:"large"},{retina:true,min_viewport_width:768,type:"medium_2x"},{retina:false,min_viewport_width:768,type:"medium"},{min_viewport_width:0,type:"xsmall_2x"}]}
},{}],2:[function(c,g,b){var f=c("./Request");var h=c("./XDomain-request");var a=c("./URLParser");
var d=function(){};d._Request=f;d.prototype={_defaults:{method:"get",timeout:5000},_extend:function(){for(var k=1;
k<arguments.length;k++){for(var j in arguments[k]){if(arguments[k].hasOwnProperty(j)){arguments[0][j]=arguments[k][j]
}}}return arguments[0]},_getOptions:function(i,j){return this._extend({},this._defaults,j,i)
},create:function(i){return new f(i)},cors:function(j){var i=(window.XDomainRequest&&document.documentMode<10)?h:f;
return new i(j)},_isCrossDomainRequest:function(l){var k=new a();var j=k.parse(window.location.href).origin;
var i=k.parse(l).origin;k.destroy();return(i!==j)},get:function(j){var i;j=this._getOptions({method:"get"},j);
if(this._isCrossDomainRequest(j.url)){i=this.cors(j)}else{i=this.create(j)}return i.send()
},getJSON:function(i){return this.get(i).then(function(j){return JSON.parse(j.responseText)
})},head:function(i){i=this._getOptions({method:"head"},i);return this.create(i).send()
},post:function(i){i=this._getOptions({method:"post"},i);return this.create(i).send()
}};g.exports=d},{"./Request":3,"./URLParser":4,"./XDomain-request":5}],3:[function(b,d,a){var c=function(f){this._initialize(f)
};c.create=function(){var f=function(){};f.prototype=c.prototype;return new f()
};c.prototype={_addReadyStateChangeHandler:function(){this.xhr.onreadystatechange=function(f){if(this.xhr.readyState===4){clearTimeout(this._timeout);
if(this.xhr.status>=200&&this.xhr.status<300){this.resolve(this.xhr)}else{this.reject(this.xhr)
}}}.bind(this)},_getPromise:function(){this.promise=new Promise(function(g,f){this.resolve=g;
this.reject=f}.bind(this))},_getTransport:function(){return new XMLHttpRequest()
},_initialize:function(h){var g=this._validateConfiguration(h);if(g){throw g}this._configuration=h;
var f=this._configuration.method.toUpperCase();this.xhr=this._getTransport();this._getPromise();
this.xhr.open(f,this._configuration.url);this._setRequestHeaders(h.headers);this._addReadyStateChangeHandler()
},_sendXHR:function(){if(this.xhr){if(this._configuration&&this._configuration.data){this.xhr.send(this._configuration.data)
}else{this.xhr.send()}}},_setRequestHeaders:function(f){if(f){f.forEach(function(g){this.xhr.setRequestHeader(g.name,g.value)
},this)}},_setTimeout:function(f){if(!f){if(this._configuration&&this._configuration.timeout){f=this._configuration.timeout
}else{clearTimeout(this._timeout);this._timeout=null}}if(this._timeout!==null){clearTimeout(this._timeout)
}if(f>0){this._timeout=setTimeout(function(){this.xhr.abort();this.reject()}.bind(this),f)
}},_timeout:null,_validateConfiguration:function(h){if(!h){return"Must provide a configuration object"
}var g=[];var f=h.headers;if(!h.url){g.push("Must provide a url")}if(!h.method){g.push("Must provide a method")
}if(f){if(!Array.isArray(f)){return"Must provide an array of headers"}this._validateHeaders(f,g)
}return g.join(", ")},_validateHeaders:function(h,j){for(var g=0,f=h.length;g<f;
g++){if(!h[g].hasOwnProperty("name")||!h[g].hasOwnProperty("value")){j.push("Must provide a name and value key for all headers");
break}}},promise:null,reject:null,resolve:null,send:function(){this._setTimeout();
this._sendXHR();return this.promise},xhr:null};d.exports=c},{}],4:[function(c,d,b){var a=function(){this.parser=null
};var f=a.prototype;f.parse=function(k){var i;var l;var h;var g;var j;if(typeof k!=="string"){throw new TypeError(k+" must be a string")
}if(!this.parser){this.parser=document.createElement("a")}this._qualifyPath(k);
h=this.parser.hostname;l=this.parser.protocol;g=this._normalizePort(this.parser);
i=this.parser.origin||this._constructOriginString(this.parser,g);j=this.parser.search;
return{originalPath:k,qualifiedPath:this.parser.href,protocol:l,hostname:h,origin:i,port:g,search:j}
};f.destroy=function(){this.parser=null};f._constructOriginString=function(i,g){var h=g?":"+g:"";
return i.protocol+"//"+i.hostname+h};f._normalizePort=function(g){return(g.port==="80"||g.port==="443"||g.port==="0")?"":g.port
};f._qualifyPath=function(g){this.parser.href=g;this.parser.href=this.parser.href
};d.exports=a},{}],5:[function(b,d,a){var c=b("./Request");var f=function(g){c.apply(this,arguments)
};f.prototype=c.create();f.prototype._getTransport=function(){return new XDomainRequest()
};f.prototype._addReadyStateChangeHandler=function(){this.xhr.ontimeout=function(){this.reject(this.xhr)
}.bind(this);this.xhr.onerror=function(){this.reject(this.xhr)}.bind(this);this.xhr.onload=function(){this.resolve(this.xhr)
}.bind(this)};f.prototype._setTimeout=function(g){if(!g){if(this._configuration&&this._configuration.timeout){g=this._configuration.timeout
}}if(g>0){this.xhr.timeout=g}};d.exports=f},{"./Request":3}],6:[function(b,f,a){var d=b("./ac-ajax/Ajax");
var c=b("./ac-ajax/Request");f.exports=new d();f.exports.Ajax=d;f.exports.Request=c
},{"./ac-ajax/Ajax":2,"./ac-ajax/Request":3}],7:[function(c,f,b){var d={cssPropertyAvailable:c("./ac-feature/cssPropertyAvailable"),localStorageAvailable:c("./ac-feature/localStorageAvailable")};
var a=Object.prototype.hasOwnProperty;d.threeDTransformsAvailable=function(){if(typeof this._threeDTransformsAvailable!=="undefined"){return this._threeDTransformsAvailable
}var i,g;try{this._threeDTransformsAvailable=false;if(a.call(window,"styleMedia")){this._threeDTransformsAvailable=window.styleMedia.matchMedium("(-webkit-transform-3d)")
}else{if(a.call(window,"media")){this._threeDTransformsAvailable=window.media.matchMedium("(-webkit-transform-3d)")
}}if(!this._threeDTransformsAvailable){if(!(g=document.getElementById("supportsThreeDStyle"))){g=document.createElement("style");
g.id="supportsThreeDStyle";g.textContent="@media (transform-3d),(-o-transform-3d),(-moz-transform-3d),(-ms-transform-3d),(-webkit-transform-3d) { #supportsThreeD { height:3px } }";
document.querySelector("head").appendChild(g)}if(!(i=document.querySelector("#supportsThreeD"))){i=document.createElement("div");
i.id="supportsThreeD";document.body.appendChild(i)}this._threeDTransformsAvailable=(i.offsetHeight===3)||g.style.MozTransform!==undefined||g.style.WebkitTransform!==undefined
}return this._threeDTransformsAvailable}catch(h){return false}};d.canvasAvailable=function(){if(typeof this._canvasAvailable!=="undefined"){return this._canvasAvailable
}var g=document.createElement("canvas");this._canvasAvailable=!!(typeof g.getContext==="function"&&g.getContext("2d"));
return this._canvasAvailable};d.sessionStorageAvailable=function(){if(typeof this._sessionStorageAvailable!=="undefined"){return this._sessionStorageAvailable
}try{if(typeof window.sessionStorage!=="undefined"&&typeof window.sessionStorage.setItem==="function"){window.sessionStorage.setItem("ac_browser_detect","test");
this._sessionStorageAvailable=true;window.sessionStorage.removeItem("ac_browser_detect","test")
}else{this._sessionStorageAvailable=false}}catch(g){this._sessionStorageAvailable=false
}return this._sessionStorageAvailable};d.cookiesAvailable=function(){if(typeof this._cookiesAvailable!=="undefined"){return this._cookiesAvailable
}this._cookiesAvailable=(a.call(document,"cookie")&&!!navigator.cookieEnabled)?true:false;
return this._cookiesAvailable};d.__normalizedScreenWidth=function(){if(typeof window.orientation==="undefined"){return window.screen.width
}return window.screen.width<window.screen.height?window.screen.width:window.screen.height
};d.touchAvailable=function(){return !!(("ontouchstart" in window)||window.DocumentTouch&&document instanceof window.DocumentTouch)
};d.isDesktop=function(){if(!this.touchAvailable()&&!window.orientation){return true
}return false};d.isHandheld=function(){return !this.isDesktop()&&!this.isTablet()
};d.isTablet=function(){return !this.isDesktop()&&this.__normalizedScreenWidth()>480
};d.isRetina=function(){var g=["min-device-pixel-ratio:1.5","-webkit-min-device-pixel-ratio:1.5","min-resolution:1.5dppx","min-resolution:144dpi","min--moz-device-pixel-ratio:1.5"];
var h;if(window.devicePixelRatio!==undefined){if(window.devicePixelRatio>=1.5){return true
}}else{for(h=0;h<g.length;h+=1){if(window.matchMedia("("+g[h]+")").matches===true){return true
}}}return false};d.svgAvailable=function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
};f.exports=d},{"./ac-feature/cssPropertyAvailable":8,"./ac-feature/localStorageAvailable":9}],8:[function(c,f,b){var g=null;
var h=null;var a=null;var d=null;f.exports=function(s){if(g===null){g=document.createElement("browserdetect").style
}if(h===null){h=["-webkit-","-moz-","-o-","-ms-","-khtml-",""]}if(a===null){a=["Webkit","Moz","O","ms","Khtml",""]
}if(d===null){d={}}s=s.replace(/([A-Z]+)([A-Z][a-z])/g,"$1\\-$2").replace(/([a-z\d])([A-Z])/g,"$1\\-$2").replace(/^(\-*webkit|\-*moz|\-*o|\-*ms|\-*khtml)\-/,"").toLowerCase();
switch(s){case"gradient":if(d.gradient!==undefined){return d.gradient}s="background-image:";
var q="gradient(linear,left top,right bottom,from(#9f9),to(white));";var p="linear-gradient(left top,#9f9, white);";
g.cssText=(s+h.join(q+s)+h.join(p+s)).slice(0,-s.length);d.gradient=(g.backgroundImage.indexOf("gradient")!==-1);
return d.gradient;case"inset-box-shadow":if(d["inset-box-shadow"]!==undefined){return d["inset-box-shadow"]
}s="box-shadow:";var r="#fff 0 1px 1px inset;";g.cssText=h.join(s+r);d["inset-box-shadow"]=(g.cssText.indexOf("inset")!==-1);
return d["inset-box-shadow"];default:var o=s.split("-");var k=o.length;var n;var m;
var l;if(o.length>0){s=o[0];for(m=1;m<k;m+=1){s+=o[m].substr(0,1).toUpperCase()+o[m].substr(1)
}}n=s.substr(0,1).toUpperCase()+s.substr(1);if(d[s]!==undefined){return d[s]}for(l=a.length-1;
l>=0;l-=1){if(g[a[l]+s]!==undefined||g[a[l]+n]!==undefined){d[s]=true;return true
}}return false}}},{}],9:[function(d,f,b){var a=null;f.exports=function c(){if(a===null){a=!!(window.localStorage&&window.localStorage.non_existent!==null)
}return a}},{}],10:[function(i,c,x){var s=Object.prototype.toString;var l=Object.prototype.hasOwnProperty;
var b=typeof Array.prototype.indexOf==="function"?function(z,A){return z.indexOf(A)
}:function(z,B){for(var A=0;A<z.length;A++){if(z[A]===B){return A}}return -1};var k=Array.isArray||function(z){return s.call(z)=="[object Array]"
};var v=Object.keys||function(B){var z=[];for(var A in B){if(B.hasOwnProperty(A)){z.push(A)
}}return z};var u=typeof Array.prototype.forEach==="function"?function(z,A){return z.forEach(A)
}:function(z,B){for(var A=0;A<z.length;A++){B(z[A])}};var m=function(z,D,A){if(typeof z.reduce==="function"){return z.reduce(D,A)
}var C=A;for(var B=0;B<z.length;B++){C=D(C,z[B])}return C};var y=/^[0-9]+$/;function d(C,B){if(C[B].length==0){return C[B]={}
}var A={};for(var z in C[B]){if(l.call(C[B],z)){A[z]=C[B][z]}}C[B]=A;return A}function q(D,B,A,E){var z=D.shift();
if(l.call(Object.prototype,A)){return}if(!z){if(k(B[A])){B[A].push(E)}else{if("object"==typeof B[A]){B[A]=E
}else{if("undefined"==typeof B[A]){B[A]=E}else{B[A]=[B[A],E]}}}}else{var C=B[A]=B[A]||[];
if("]"==z){if(k(C)){if(""!=E){C.push(E)}}else{if("object"==typeof C){C[v(C).length]=E
}else{C=B[A]=[B[A],E]}}}else{if(~b(z,"]")){z=z.substr(0,z.length-1);if(!y.test(z)&&k(C)){C=d(B,A)
}q(D,C,z,E)}else{if(!y.test(z)&&k(C)){C=d(B,A)}q(D,C,z,E)}}}}function f(D,C,G){if(~b(C,"]")){var F=C.split("["),z=F.length,E=z-1;
q(F,D,"base",G)}else{if(!y.test(C)&&k(D.base)){var B={};for(var A in D.base){B[A]=D.base[A]
}D.base=B}n(D.base,C,G)}return D}function o(C){if("object"!=typeof C){return C}if(k(C)){var z=[];
for(var B in C){if(l.call(C,B)){z.push(C[B])}}return z}for(var A in C){C[A]=o(C[A])
}return C}function g(A){var z={base:{}};u(v(A),function(B){f(z,B,A[B])});return o(z.base)
}function h(A){var z=m(String(A).split("&"),function(B,F){var G=b(F,"="),E=t(F),C=F.substr(0,E||G),D=F.substr(E||G,F.length),D=D.substr(b(D,"=")+1,D.length);
if(""==C){C=F,D=""}if(""==C){return B}return f(B,p(C),p(D))},{base:{}}).base;return o(z)
}x.parse=function(z){if(null==z||""==z){return{}}return"object"==typeof z?g(z):h(z)
};var r=x.stringify=function(A,z){if(k(A)){return j(A,z)}else{if("[object Object]"==s.call(A)){return w(A,z)
}else{if("string"==typeof A){return a(A,z)}else{return z+"="+encodeURIComponent(String(A))
}}}};function a(A,z){if(!z){throw new TypeError("stringify expects an object")}return z+"="+encodeURIComponent(A)
}function j(z,C){var A=[];if(!C){throw new TypeError("stringify expects an object")
}for(var B=0;B<z.length;B++){A.push(r(z[B],C+"["+B+"]"))}return A.join("&")}function w(F,E){var A=[],D=v(F),C;
for(var B=0,z=D.length;B<z;++B){C=D[B];if(""==C){continue}if(null==F[C]){A.push(encodeURIComponent(C)+"=")
}else{A.push(r(F[C],E?E+"["+encodeURIComponent(C)+"]":encodeURIComponent(C)))}}return A.join("&")
}function n(B,A,C){var z=B[A];if(l.call(Object.prototype,A)){return}if(undefined===z){B[A]=C
}else{if(k(z)){z.push(C)}else{B[A]=[z,C]}}}function t(C){var z=C.length,B,D;for(var A=0;
A<z;++A){D=C[A];if("]"==D){B=false}if("["==D){B=true}if("="==D&&!B){return A}}}function p(A){try{return decodeURIComponent(A.replace(/\+/g," "))
}catch(z){return A}}},{}],11:[function(b,c,a){c.exports={clone:b("./ac-object/clone"),create:b("./ac-object/create"),defaults:b("./ac-object/defaults"),extend:b("./ac-object/extend"),getPrototypeOf:b("./ac-object/getPrototypeOf"),isDate:b("./ac-object/isDate"),isEmpty:b("./ac-object/isEmpty"),isRegExp:b("./ac-object/isRegExp"),toQueryParameters:b("./ac-object/toQueryParameters")}
},{"./ac-object/clone":12,"./ac-object/create":13,"./ac-object/defaults":14,"./ac-object/extend":15,"./ac-object/getPrototypeOf":16,"./ac-object/isDate":17,"./ac-object/isEmpty":18,"./ac-object/isRegExp":19,"./ac-object/toQueryParameters":20}],12:[function(b,c,a){var f=b("./extend");
c.exports=function d(g){return f({},g)}},{"./extend":15}],13:[function(b,d,a){var f=function(){};
d.exports=function c(g){if(arguments.length>1){throw new Error("Second argument not supported")
}if(g===null||typeof g!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(g)}else{f.prototype=g;
return new f()}}},{}],14:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"){throw new TypeError("defaults: must provide a defaults object")
}g=g||{};if(typeof g!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return f({},h,g)}},{"./extend":15}],15:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]}else{h=[].slice.call(arguments)
}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{}],16:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(i){if(Object.getPrototypeOf){return Object.getPrototypeOf(i)
}else{if(typeof i!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return i.__proto__}else{var g=i.constructor;
var h;if(a.call(i,"constructor")){h=g;if(!(delete i.constructor)){return null}g=i.constructor;
i.constructor=h}return g?g.prototype:null}}}}},{}],17:[function(b,d,a){d.exports=function c(f){return Object.prototype.toString.call(f)==="[object Date]"
}},{}],18:[function(c,d,b){var a=Object.prototype.hasOwnProperty;d.exports=function f(g){var h;
if(typeof g!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(h in g){if(a.call(g,h)){return false}}return true}},{}],19:[function(c,d,b){d.exports=function a(f){return window.RegExp?f instanceof RegExp:false
}},{}],20:[function(c,f,b){var a=c("qs");f.exports=function d(g){if(typeof g!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return a.stringify(g)}},{qs:10}],21:[function(b,c,a){b("ac-polyfills");c.exports.Asset=b("./ac-asset-loader/AssetLoader/Asset");
c.exports.Asset.Ajax=b("./ac-asset-loader/AssetLoader/Asset/Ajax");c.exports.Asset.Ajax.JSON=b("./ac-asset-loader/AssetLoader/Asset/Ajax/JSON");
c.exports.Asset.Img=b("./ac-asset-loader/AssetLoader/Asset/Img");c.exports.Asset.Video=b("./ac-asset-loader/AssetLoader/Asset/Video");
c.exports.Asset.Video.Element=b("./ac-asset-loader/AssetLoader/Asset/Video/Element");
c.exports.Asset.Binary=b("./ac-asset-loader/AssetLoader/Asset/Binary");c.exports.Asset.Binary.Chunk=b("./ac-asset-loader/AssetLoader/Asset/Binary/Chunk");
c.exports.AssetLoader=b("./ac-asset-loader/AssetLoader");c.exports.AssetLoader.Queue=b("./ac-asset-loader/AssetLoader/Queue")
},{"./ac-asset-loader/AssetLoader":22,"./ac-asset-loader/AssetLoader/Asset":23,"./ac-asset-loader/AssetLoader/Asset/Ajax":24,"./ac-asset-loader/AssetLoader/Asset/Ajax/JSON":25,"./ac-asset-loader/AssetLoader/Asset/Binary":26,"./ac-asset-loader/AssetLoader/Asset/Binary/Chunk":27,"./ac-asset-loader/AssetLoader/Asset/Img":28,"./ac-asset-loader/AssetLoader/Asset/Video":29,"./ac-asset-loader/AssetLoader/Asset/Video/Element":30,"./ac-asset-loader/AssetLoader/Queue":31}],22:[function(b,a,h){var j;
var g=b("ac-object");var o=b("ac-event-emitter").EventEmitter;var n=b("./AssetLoader/Asset/Ajax");
var f=b("./AssetLoader/Asset/Ajax/JSON");var i=b("./AssetLoader/Asset/Img");var m=b("./AssetLoader/Asset/Video");
var l=b("../utils/destroy");var c=b("./AssetLoader/Queue");var d={};function k(r,p){this.options=g.defaults(d,p||{});
var q=this._generateAssets(r);this._queue=new c(q,this.options);this._timeoutDuration=this.options.timeout;
this._timeout=null;this._proxyListeners()}j=k.prototype=new o();j.load=function(){if(this._timeoutDuration){this._timeout=window.setTimeout(this._onTimeout.bind(this),this._timeoutDuration)
}return this._queue.start()};j._clearTimeout=function(){window.clearTimeout(this._timeout);
this._timeout=null};j.pause=function(){this._clearTimeout();return this._queue.pause()
};j.destroy=function(){l(this,true)};j._onTimeout=function(){this._queue.abort();
this._queue.destroy();this.trigger("timeout")};j._generateAssets=function(q){if(this._boundGenerateAsset===undefined){this._boundGenerateAsset=this._generateAsset.bind(this)
}q=[].concat(q);var p=q.map(this._boundGenerateAsset);return p};j._generateAsset=function(q,p){if(k.isValidAsset(q)){q.index=p;
return q}if(typeof q!=="string"||q===""){return null}if(!!q.match(/\.json$/)){return new f(q,p)
}if(!!q.match(/\.(xml|txt)$/)){return new n(q,p)}return new i(q,p)};j._proxyListeners=function(){this._boundOnResolved=this._onResolved.bind(this);
this._boundOnRejected=this._onRejected.bind(this);this._boundOnProgress=this._onProgress.bind(this);
this._queue.on("resolved",this._boundOnResolved);this._queue.on("rejected",this._boundOnRejected);
this._queue.on("progress",this._boundOnProgress)};j._onResolved=function(p){this._clearTimeout();
this.trigger("loaded",p)};j._onRejected=function(p){this.trigger("error",p)};j._onProgress=function(p){this.trigger("progress",p)
};k.isValidAsset=function(p){return !!(p&&(typeof p.load==="function")&&(typeof p.destroy==="function"))
};k.isValidAssetLoader=function(p){return !!(p&&(typeof p.load==="function")&&(typeof p.pause==="function")&&(typeof p.destroy==="function"))
};a.exports=k},{"../utils/destroy":32,"./AssetLoader/Asset/Ajax":24,"./AssetLoader/Asset/Ajax/JSON":25,"./AssetLoader/Asset/Img":28,"./AssetLoader/Asset/Video":29,"./AssetLoader/Queue":31,"ac-object":11}],23:[function(d,g,b){var i;
var c=d("ac-deferred").Deferred;var h=d("ac-event-emitter").EventEmitter;var f=d("../../utils/destroy");
function a(k,j){this.src=k;this.index=j;this.data=null;this._boundOnLoad=this._onLoad.bind(this);
this._boundOnError=this._onError.bind(this)}i=a.prototype=new h();i.load=function(){this._load()
};i.destroy=function(){f(this)};i._load=function(){this.data={src:this.src};window.setTimeout(this._onLoad.bind(this),20)
};i._onLoad=function(){this.trigger("loaded",this)};i._onError=function(){this.trigger("error",this.data)
};g.exports=a},{"../../utils/destroy":32}],24:[function(d,g,b){var i;var c=d("ac-ajax");
var a=d("ac-object");var h=d("../Asset");function f(k,j){h.apply(this,arguments)
}i=f.prototype=a.create(h.prototype);i._load=function(){c.get({url:this.src}).then(this._boundOnLoad,this._boundOnError)
};i._onLoad=function(j){this.data=j.response;h.prototype._onLoad.call(this)};g.exports=f
},{"../Asset":23,"ac-ajax":6,"ac-object":11}],25:[function(c,d,b){var g;var a=c("ac-object");
var f=c("../Ajax");function h(i){f.apply(this,arguments)}g=h.prototype=a.create(f.prototype);
g._onLoad=function(j){try{f.prototype._onLoad.call(this,{response:JSON.parse(j.response)})
}catch(i){this._onError(i)}};d.exports=h},{"../Ajax":24,"ac-object":11}],26:[function(b,a,f){var k=b("ac-ajax");
var d=b("ac-object");var j=b("./Binary/Chunk");var i=b("./../Asset");var c={chunkSize:1024*1024};
function g(m,l){i.apply(this,arguments);this.options=d.defaults(c,l||{});this._totalSize=null;
this._rangeObjects={};this._contentType=null;this._request=null;this._numLoaded=0;
this._numRanges=0}var h=g.prototype=d.create(i.prototype);h.pause=function(){var l;
if(this._request!==null){this._request.xhr.abort()}for(l in this._rangeObjects){if(this._rangeObjects[l].isLoaded()===false){this._rangeObjects[l].pause()
}}};h._load=function(){if(this._boundQueueRangeRequests===undefined){this._boundQueueRangeRequests=this._queueRangeRequests.bind(this)
}if(this._totalSize===null){this._getMetaData().then(this._boundQueueRangeRequests)
}else{this._queueRangeRequests()}};h._getOrCreateRangeObject=function(n){var m=this._rangeObjects[n.toString()];
var l;var o;if(m===undefined){l=(this.options.chunkSize-1);o=n+l;if(o>this._totalSize){l=null
}m=this._rangeObjects[n.toString()]=new j(this.src,{start:n,length:l});this._numRanges+=1
}return m};h._onRangeLoad=function(){this._numLoaded+=1;if(this._numLoaded===this._numRanges){this._afterAllChunksLoaded()
}};h._queueRangeRequests=function(){var p;var o=[];var q;var l;var m;for(var n=0;
n<this._totalSize;n+=this.options.chunkSize){m=this._getOrCreateRangeObject(n);
m.on("loaded",this._onRangeLoad,this);m.load()}};h._afterAllChunksLoaded=function(){var l;
var n=[];for(var m in this._rangeObjects){n.push(this._rangeObjects[m].data)}l=new Blob(n,{type:this._contentType});
this.trigger("loaded",l)};h._afterHeadRequest=function(l){this._totalSize=parseInt(l.getResponseHeader(["Content-Length"]));
this._contentType=l.getResponseHeader(["Content-Type"]);this._request=null};h._getMetaData=function(){if(!this._boundAfterHeadRequest){this._boundAfterHeadRequest=this._afterHeadRequest.bind(this)
}this._request=k.create({method:"HEAD",url:this.src,timeout:2*1000});return this._request.send().then(this._boundAfterHeadRequest,this._boundOnError)
};a.exports=g},{"./../Asset":23,"./Binary/Chunk":27,"ac-ajax":6,"ac-object":11}],27:[function(b,a,f){var g;
var j=b("ac-ajax");var d=b("ac-object");var h=b("../../Asset");var c={start:0,length:null};
function i(l,k){h.apply(this,arguments);this.options=d.defaults(c,k||{});this._request=null;
this.data=null}g=i.prototype=d.create(h.prototype);g.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};g.isLoaded=function(){return(this.data!==null)};g._load=function(){this._request=j.create({url:this.src+"?"+this._buildQueryString(),method:"get",timeout:30*1000,headers:[{name:"Range",value:this._buildRangeString()}]});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};g._onLoad=function(k){this.data=k.response;this._request=null;h.prototype._onLoad.call(this,this.data)
};g._buildRangeString=function(){var k="bytes="+this.options.start+"-";if(this.options.length!==null){k+=(this.options.start+this.options.length)
}return k};g._buildQueryString=function(){var k=this.options.start.toString();if(this.options.length!==undefined){k+=(this.options.start+this.options.length)
}return k};a.exports=i},{"../../Asset":23,"ac-ajax":6,"ac-object":11}],28:[function(c,d,b){var g;
var a=c("ac-object");var f=c("../Asset");function h(j,i){f.apply(this,arguments)
}g=h.prototype=a.create(f.prototype);g._load=function(){var i=new Image();this.data=i;
this._boundOnLoad=this._onLoad.bind(this);i.onload=this._boundOnLoad;i.onerror=this._boundOnError;
i.src=this.src};d.exports=h},{"../Asset":23,"ac-object":11}],29:[function(b,a,g){var j;
var f=b("ac-feature");var d=b("ac-object");var h=b("./Binary");var k=b("../Asset");
var i=b("./Video/Element");var c={chunkSize:1024*1024,forceElementLoading:false};
function l(n,m){k.apply(this,arguments);this.options=d.defaults(c,m||{});this._binary=this.options.binary||this._createAssetType()
}j=l.prototype=d.create(k.prototype);j._canUseBlob=function(){return(window.Blob!==undefined&&window.URL!==undefined&&typeof window.URL.createObjectURL==="function"&&f.isDesktop()===true)
};j._createAssetType=function(){if(this._canUseBlob()&&this.options.forceElementLoading!==true){return new h(this.src,this.options)
}return new i(this.src,this.options)};j._load=function(){this._binary.on("loaded",this._boundOnLoad);
this._binary.on("error",this._boundOnError);this._binary.load()};j._onLoad=function(n){var m=n;
if(n instanceof window.Blob){m=this.options.element;if(!m){m=document.createElement("video")
}if(m.getAttribute("type")!==n.type){m.setAttribute("type",n.type)}m.src=window.URL.createObjectURL(n)
}k.prototype._onLoad.call(this,m)};j.pause=function(){this._binary.pause()};j.destroy=function(){this._binary.destroy();
k.prototype.destroy.call(this)};a.exports=l},{"../Asset":23,"./Binary":26,"./Video/Element":30,"ac-feature":7,"ac-object":11}],30:[function(b,a,g){var f=b("ac-feature");
var d=b("ac-object");var k=b("./../../../../utils/round");var j=b("./../../Asset");
var c={};function i(m,l){j.apply(this,arguments);this.options=d.defaults(c,l||{});
this._boundOnVideoProgress=null;this._boundOnTimeUpdate=null;this._boundOnCanPlayThrough=null
}var h=i.prototype=d.create(j.prototype);h._onVideoProgress=function(l){if(this.data&&this.data.buffered.length>0&&k(this.data.buffered.end(0),4)===k(this.data.duration,4)){this._unbindEvent("canplaythrough",this._boundOnCanPlayThrough);
this._unbindEvent("timeupdate",this._boundOnTimeUpdate);this._unbindEvent("progress",this._boundOnVideoProgress);
this._boundOnVideoProgress=null;this.data.muted=false;this._onLoad()}};h._onTimeUpdate=function(l){this.data.pause();
this.data.currentTime=0;this.data.removeEventListener("timeupdate",this._boundOnTimeUpdate);
this._boundOnTimeUpdate=null};h._onCanPlayThrough=function(l){if(this._boundOnTimeUpdate===null){this._boundOnTimeUpdate=this._onTimeUpdate.bind(this)
}if(f.isDesktop()){this.data.addEventListener("timeupdate",this._boundOnTimeUpdate);
this.data.play()}this._unbindEvent("canplaythrough",this._boundOnCanPlayThrough);
this._boundOnCanPlayThrough=null};h._load=function(){this.data=this.options.element;
if(!this.data){this.data=document.createElement("video")}this.data.muted=true;if(this.options.type){this.data.setAttribute("type",this.options.type)
}if(this._boundOnVideoProgress===null){this._boundOnVideoProgress=this._onVideoProgress.bind(this);
this._boundOnCanPlayThrough=this._onCanPlayThrough.bind(this);this.data.addEventListener("progress",this._boundOnVideoProgress);
this.data.addEventListener("canplaythrough",this._boundOnCanPlayThrough)}this.data.setAttribute("preload","auto");
this.data.src=this.src;this.data.load()};h._unbindEvent=function(l,m){if(typeof m==="function"){this.data.removeEventListener(l,m)
}};h.pause=function(){this._unbindEvent("canplaythrough",this._boundOnCanPlayThrough);
this._unbindEvent("timeupdate",this._boundOnTimeUpdate);this._unbindEvent("progress",this._boundOnVideoProgress);
this._boundOnVideoProgress=null;this._boundOnCanPlayThrough=null;this._boundOnTimeUpdate=null;
this.data.removeAttribute("src");this.data=undefined;this.trigger("pause")};a.exports=i
},{"./../../../../utils/round":33,"./../../Asset":23,"ac-feature":7,"ac-object":11}],31:[function(b,a,g){var h;
var f=b("ac-object");var i=b("ac-deferred").Deferred;var k=b("ac-event-emitter").EventEmitter;
var j=b("../../utils/destroy");var d={threads:4};function c(m,l){this.options=f.defaults(d,l||{});
this._queue=m;this._active=[];this._allowedThreads=this.options.threads;this._availableThreads=this._allowedThreads;
this._deferred=new i();this._data=[];this.paused=true;this.loaded=false;this.promise=this._deferred.promise()
}h=c.prototype=new k();h.start=function(){var m=this._availableThreads;var l;this.paused=false;
if(m>this._queue.length){m=this._queue.length}for(l=1;l<=m;l++){this._startNewThread()
}return this.promise};h.pause=function(){this.paused=true;var l=[];this._active.forEach(function(n,m){if(typeof n.pause==="function"){this._queue.unshift(n);
this._releaseThread();n.off("loaded");n.off("error");n.pause();l.push(m)}},this);
l.forEach(function(m){this._active.splice(m,1)},this)};h.destroy=function(){this.pause();
j(this)};h._startNewThread=function(){var m=this._queue.shift();this._occupyThread();
if(m&&typeof m.load==="function"){var l=function(o){this._onProgress(o);this._active.splice(this._active.indexOf(m),1);
m.off("error",n)};var n=function(o){this._onError();m.off("loaded",l)};m.once("loaded",l,this);
m.once("error",n,this);m.load()}else{this._onError()}this._active.push(m)};h._onResolved=function(){if(this._errored){return false
}this._deferred.resolve(this._data);this.trigger("resolved",this._data)};h._onError=function(l){if(this._errored){return false
}this._errored=true;this._deferred.reject(l);this.trigger("rejected",l)};h.abort=function(){this._deferred.reject()
};h._onProgress=function(l){if(this._errored){return false}this._releaseThread();
this._data[l.index]=l.data;this.trigger("progress",l.data);if(this._queue.length<=0){if(this._availableThreads>=this._allowedThreads){this._onResolved()
}}else{if(!this.paused&&!this._errored){this._startNewThread()}}};h._occupyThread=function(){this._availableThreads--;
if(this._availableThreads<0){throw"AssetLoader.Queue: Available thread count cannot be negative."
}};h._releaseThread=function(){this._availableThreads++;if(this._availableThreads>this._allowedThreads){throw"AssetLoader.Queue: Available thread count cannot be more than allowed thread amount."
}};a.exports=c},{"../../utils/destroy":32,"ac-object":11}],32:[function(b,d,a){d.exports=function c(f,g){if(typeof f.off==="function"){f.off()
}window.setTimeout(function(){var h;for(h in f){if(f.hasOwnProperty(h)){if(g&&f[h]&&typeof f[h].destroy==="function"){f[h].destroy()
}f[h]=null}}})}},{}],33:[function(b,c,a){c.exports=function(d,f){return Math.round(d*Math.pow(10,f))/Math.pow(10,f)
}},{}],34:[function(c,d,b){var g=c("./ac-clock/Clock"),f=c("./ac-clock/ThrottledClock"),a=c("./ac-clock/sharedClockInstance");
a.Clock=g;a.ThrottledClock=f;d.exports=a},{"./ac-clock/Clock":35,"./ac-clock/ThrottledClock":36,"./ac-clock/sharedClockInstance":37}],35:[function(c,d,b){var g;
var f=c("ac-event-emitter").EventEmitter;var a=new Date().getTime();function h(){f.call(this);
this.lastFrameTime=null;this._animationFrame=null;this._active=false;this._startTime=null;
this._boundOnAnimationFrame=this._onAnimationFrame.bind(this);this._getTime=Date.now||function(){return new Date().getTime()
}}g=h.prototype=new f(null);g.start=function(){if(this._active){return}this._tick()
};g.stop=function(){if(this._active){window.cancelAnimationFrame(this._animationFrame)
}this._animationFrame=null;this.lastFrameTime=null;this._active=false};g.destroy=function(){this.stop();
this.off();var j;for(j in this){if(this.hasOwnProperty(j)){this[j]=null}}};g.isRunning=function(){return this._active
};g._tick=function(){if(!this._active){this._active=true}this._animationFrame=window.requestAnimationFrame(this._boundOnAnimationFrame)
};g._onAnimationFrame=function(l){var m=0;var i=this._getTime();if(this.lastFrameTime===null){this.lastFrameTime=i-a
}else{m=l-this.lastFrameTime}var k=0,j;if(m!==0){k=1000/m}j={time:l,delta:m,fps:k,naturalFps:k,timeNow:i};
this.trigger("update",j);this.trigger("draw",j);this._animationFrame=null;this.lastFrameTime=l;
if(this._active!==false){this._tick()}else{this.lastFrameTime=null}};d.exports=h
},{}],36:[function(c,d,b){var g;var a=c("./sharedClockInstance"),f=c("ac-event-emitter").EventEmitter;
function h(j,i){if(j===null){return}f.call(this);i=i||{};this._fps=j||null;this._clock=i.clock||a;
this._lastThrottledTime=null;this._clockEvent=null;this._clock.on("update",this._onClockUpdate,this)
}g=h.prototype=new f(null);g.setFps=function(i){this._fps=i;return this};g.getFps=function(){return this._fps
};g.start=function(){this._clock.start();return this};g.stop=function(){this._clock.stop();
return this};g.isRunning=function(){return this._clock.isRunning()};g.destroy=function(){this._clock.off("update",this._onClockUpdate,this);
this._clock.destroy.call(this)};g._onClockUpdate=function(i){if(this._lastThrottledTime===null){this._lastThrottledTime=this._clock.lastFrameTime
}var j=i.time-this._lastThrottledTime;if(!this._fps){throw new TypeError("FPS is not defined.")
}if(j<(1000/this._fps)){return}this._clockEvent=i;this._clockEvent.delta=j;this._clockEvent.fps=1000/j;
this._lastThrottledTime=this._clockEvent.time;this._clock.once("draw",this._onClockDraw,this);
this.trigger("update",this._clockEvent)};g._onClockDraw=function(){this.trigger("draw",this._clockEvent)
};d.exports=h},{"./sharedClockInstance":37}],37:[function(b,c,a){var d=b("./Clock");
c.exports=new d()},{"./Clock":35}],38:[function(b,c,a){c.exports.DOMEmitter=b("./ac-dom-emitter/DOMEmitter")
},{"./ac-dom-emitter/DOMEmitter":39}],39:[function(b,c,a){var g;var f=b("ac-event-emitter").EventEmitter;
var d="dom-emitter";function h(i){if(i===null){return}this.el=i;this._bindings={};
this._eventEmitter=new f()}g=h.prototype;g._parseEventNames=function(i){if(!i){return[i]
}return i.split(" ")};g._onListenerEvent=function(j,i){this.trigger(j,i,false)};
g._setListener=function(i){this._bindings[i]=this._onListenerEvent.bind(this,i);
this._addEventListener(i,this._bindings[i])};g._removeListener=function(i){this._removeEventListener(i,this._bindings[i]);
delete this._bindings[i]};g._addEventListener=function(j,k,i){if(this.el.addEventListener){this.el.addEventListener(j,k,i)
}else{if(this.el.attachEvent){this.el.attachEvent("on"+j,k)}else{target["on"+j]=k
}}return this};g._removeEventListener=function(j,k,i){if(this.el.removeEventListener){this.el.removeEventListener(j,k,i)
}else{this.el.detachEvent("on"+j,k)}return this};g._triggerInternalEvent=function(i,j){this.trigger(d+":"+i,j)
};g.on=function(i,k,j){i=this._parseEventNames(i);i.forEach(function(n,m,l){if(!this.has(l)){this._setListener(l)
}this._triggerInternalEvent("willon",{evt:l,callback:n,context:m});this._eventEmitter.on(l,n,m);
this._triggerInternalEvent("didon",{evt:l,callback:n,context:m})}.bind(this,k,j));
return this};g.off=function(i,l,k){var j=Array.prototype.slice.call(arguments,0);
i=this._parseEventNames(i);i.forEach(function(q,p,n,m){if(n.length===0){this._eventEmitter.off();
var o;for(o in this._bindings){if(this._bindings.hasOwnProperty(o)){this._removeListener(o)
}}return}this._triggerInternalEvent("willoff",{evt:m,callback:q,context:p});this._eventEmitter.off(m,q,p);
this._triggerInternalEvent("didoff",{evt:m,callback:q,context:p});if(!this.has(m)){this._removeListener(m)
}}.bind(this,l,k,j));return this};g.once=function(i,k,j){i=this._parseEventNames(i);
i.forEach(function(n,m,l){if(!this.has(l)){this._setListener(l)}this._triggerInternalEvent("willonce",{evt:l,callback:n,context:m});
this._eventEmitter.once.call(this,l,n,m);this._triggerInternalEvent("didonce",{evt:l,callback:n,context:m})
}.bind(this,k,j));return this};g.has=function(i,k,j){if(this._eventEmitter&&this._eventEmitter.has.apply(this._eventEmitter,arguments)){return true
}return false};g.trigger=function(i,j,k){i=this._parseEventNames(i);i.forEach(function(m,n,l){this._eventEmitter.trigger(l,m,n)
}.bind(this,j,k));return this};g.destroy=function(){this._triggerInternalEvent("willdestroy");
this.off();this.el=this._eventEmitter=this._bindings=null};c.exports=h},{}],40:[function(b,c,a){var d=b("./ac-element-tracker/ElementTracker");
c.exports=new d();c.exports.ElementTracker=d},{"./ac-element-tracker/ElementTracker":41}],41:[function(c,b,g){var h;
var f=c("ac-object");var i=c("ac-base").Element;var k=c("ac-base").Array;var m=c("window-delegate").WindowDelegate;
var j=c("./TrackedElement");var n=c("ac-event-emitter").EventEmitter;var d={autoStart:false};
function a(p,o){this.options=f.clone(d);this.options=typeof o==="object"?f.extend(this.options,o):this.options;
this.windowDelegate=m;this.tracking=false;this.elements=[];if(p&&(Array.isArray(p)||this._isNodeList(p)||i.isElement(p))){this.addElements(p)
}if(this.options.autoStart){this.start()}}h=a.prototype=new n();var l=/^\[object (HTMLCollection|NodeList|Object)\]$/;
h._isNodeList=function(o){if(!o){return false}if(typeof o.length!=="number"){return false
}if(typeof o[0]==="object"&&(!o[0]||!o[0].nodeType)){return false}return l.test(Object.prototype.toString.call(o))
};h._registerElements=function(o){o=[].concat(o);o.forEach(function(q){if(this._elementInDOM(q)){var p=new j(q);
p.offsetTop=p.element.offsetTop;this.elements.push(p)}},this)};h._registerTrackedElements=function(o){var p=[].concat(o);
p.forEach(function(q){if(this._elementInDOM(q.element)){q.offsetTop=q.element.offsetTop;
this.elements.push(q)}},this)};h._elementInDOM=function(q){var p=false;var o=document.getElementsByTagName("body")[0];
if(i.isElement(q)&&o.contains(q)){p=true}return p};h._onVPChange=function(){this.elements.forEach(function(o){this.refreshElementState(o)
},this)};h._elementPercentInView=function(o){return o.pixelsInView/o.height};h._elementPixelsInView=function(p){var s=0;
var r=p.top;var q=p.bottom;var o=this.windowDelegate.innerHeight;if(r<=0&&q>=o){s=o
}else{if(r>=0&&r<o&&q>o){s=o-r}else{if(r<0&&(q<o&&q>=0)){s=p.bottom}else{if(r>=0&&q<=o){s=p.height
}}}}return s};h._ifInView=function(o,p){if(!p){o.trigger("enterview",o)}};h._ifAlreadyInView=function(o){if(!o.inView){o.trigger("exitview",o)
}};h.addElements=function(o){o=this._isNodeList(o)?k.toArray(o):[].concat(o);o.forEach(function(p){this.addElement(p)
},this)};h.addElement=function(p){var o;if(i.isElement(p)){o=new j(p);this._registerTrackedElements(o)
}return o};h.removeElement=function(q){var p=[];var o;this.elements.forEach(function(r,s){if(r===q||r.element===q){p.push(s)
}});o=this.elements.filter(function(s,r){return p.indexOf(r)<0?true:false});this.elements=o
};h.stop=function(){if(this.tracking===true){this.tracking=false;this.windowDelegate.off("scroll resize orientationchange",this._onVPChange)
}};h.start=function(){if(this.tracking===false){this.tracking=true;this.windowDelegate.on("scroll resize orientationchange",this._onVPChange,this);
this.refreshAllElementStates()}};h.refreshAllElementStates=function(){this.elements.forEach(function(o){this.refreshElementState(o)
},this)};h.refreshElementState=function(o){var p=i.getBoundingBox(o.element);var q=o.inView;
o=f.extend(o,p);o.pixelsInView=this._elementPixelsInView(o);o.percentInView=this._elementPercentInView(o);
o.inView=o.pixelsInView>0;if(o.inView){this._ifInView(o,q)}if(q){this._ifAlreadyInView(o)
}return o};b.exports=a},{"./TrackedElement":42,"ac-base":false,"ac-object":44,"window-delegate":245}],42:[function(b,c,a){var d;
var g=b("ac-dom-emitter").DOMEmitter;function f(h){if(h.nodeType&&h.nodeType>0){this.element=h
}else{throw new TypeError("TrackedElement: "+h+" is not a valid DOM element")}this.inView=false;
this.percentInView=0;this.pixelsInView=0;this.offsetTop=0;this.top=0;this.right=0;
this.bottom=0;this.left=0;this.width=0;this.height=0;g.call(this,h)}d=f.prototype=new g(null);
c.exports=f},{"ac-dom-emitter":38}],43:[function(b,c,a){c.exports=b(10)},{}],44:[function(b,c,a){c.exports=b(11)
},{"./ac-object/clone":45,"./ac-object/create":46,"./ac-object/defaults":47,"./ac-object/extend":48,"./ac-object/getPrototypeOf":49,"./ac-object/isDate":50,"./ac-object/isEmpty":51,"./ac-object/isRegExp":52,"./ac-object/toQueryParameters":53}],45:[function(b,c,a){c.exports=b(12)
},{"./extend":48}],46:[function(b,c,a){c.exports=b(13)},{}],47:[function(b,c,a){c.exports=b(14)
},{"./extend":48}],48:[function(b,c,a){c.exports=b(15)},{}],49:[function(b,c,a){c.exports=b(16)
},{}],50:[function(b,c,a){c.exports=b(17)},{}],51:[function(b,c,a){c.exports=b(18)
},{}],52:[function(b,c,a){c.exports=b(19)},{}],53:[function(b,c,a){c.exports=b(20)
},{qs:43}],54:[function(b,d,a){var c=b("./ac-element-engagement/ElementEngagement");
d.exports=new c();d.exports.ElementEngagement=c},{"./ac-element-engagement/ElementEngagement":55}],55:[function(c,b,f){var g;
var d=c("ac-object");var h=c("ac-base").Element;var i=c("ac-element-tracker").ElementTracker;
var k={timeToEngage:500,inViewThreshold:0.75,stopOnEngaged:true};var j={thresholdEnterTime:0,thresholdExitTime:0,inThreshold:false,engaged:false,tracking:true};
var a=function(){i.call(this)};g=a.prototype=new i();g._decorateTrackedElement=function(m,l){var n;
n=d.defaults(k,l||{});d.extend(m,n);d.extend(m,j)};g._attachElementListeners=function(l){l.on("thresholdenter",this._thresholdEnter,this);
l.on("thresholdexit",this._thresholdExit,this);l.on("enterview",this._enterView,this);
l.on("exitview",this._exitView,this)};g._removeElementListeners=function(l){l.off("thresholdenter",this._thresholdEnter);
l.off("thresholdexit",this._thresholdExit);l.off("enterview",this._enterView);l.off("exitview",this._exitView)
};g._attachAllElementListeners=function(){this.elements.forEach(function(l){if(!l.stopOnEngaged){this._attachElementListeners(l)
}else{if(!l.engaged){this._attachElementListeners(l)}}},this)};g._removeAllElementListeners=function(){this.elements.forEach(function(l){this._removeElementListeners(l)
},this)};g._elementInViewPastThreshold=function(n){var l=this.windowDelegate.innerHeight;
var m=false;if(n.pixelsInView===l){m=true}else{m=(n.percentInView>n.inViewThreshold)
}return m};g._ifInView=function(l,n){var m=l.inThreshold;i.prototype._ifInView.apply(this,arguments);
if(!m&&this._elementInViewPastThreshold(l)){l.inThreshold=true;l.trigger("thresholdenter",l);
if(typeof l.timeToEngage==="number"&&l.timeToEngage>=0){l.engagedTimeout=window.setTimeout(this._engaged.bind(this,l),l.timeToEngage)
}}};g._ifAlreadyInView=function(l){var m=l.inThreshold;i.prototype._ifAlreadyInView.apply(this,arguments);
if(m&&!this._elementInViewPastThreshold(l)){l.inThreshold=false;l.trigger("thresholdexit",l);
if(l.engagedTimeout){window.clearTimeout(l.engagedTimeout);l.engagedTimeout=null
}}};g._engaged=function(l){l.engagedTimeout=null;this._elementEngaged(l);l.trigger("engaged",l);
this.trigger("engaged",l)};g._thresholdEnter=function(l){l.thresholdEnterTime=Date.now();
l.thresholdExitTime=0;this.trigger("thresholdenter",l)};g._thresholdExit=function(l){l.thresholdExitTime=Date.now();
this.trigger("thresholdexit",l)};g._enterView=function(l){this.trigger("enterview",l)
};g._exitView=function(l){this.trigger("exitview",l)};g._elementEngaged=function(l){l.engaged=true;
if(l.stopOnEngaged){this.stop(l)}};g.stop=function(l){if(this.tracking&&!l){this._removeAllElementListeners();
i.prototype.stop.call(this)}if(l&&l.tracking){l.tracking=false;this._removeElementListeners(l)
}};g.start=function(l){if(!l){this._attachAllElementListeners();i.prototype.start.call(this)
}if(l&&!l.tracking){if(!l.stopOnEngaged){l.tracking=true;this._attachElementListeners(l)
}else{if(!l.engaged){l.tracking=true;this._attachElementListeners(l)}}}};g.addElement=function(n,l){var m=i.prototype.addElement.call(this,n);
this._decorateTrackedElement(m,l);return m};g.addElements=function(m,l){[].forEach.call(m,function(n){this.addElement(n,l)
},this)};b.exports=a},{"ac-base":false,"ac-element-tracker":40,"ac-object":44}],56:[function(b,c,a){c.exports=b(10)
},{}],57:[function(b,c,a){c.exports=b(11)},{"./ac-object/clone":58,"./ac-object/create":59,"./ac-object/defaults":60,"./ac-object/extend":61,"./ac-object/getPrototypeOf":62,"./ac-object/isDate":63,"./ac-object/isEmpty":64,"./ac-object/isRegExp":65,"./ac-object/toQueryParameters":66}],58:[function(b,c,a){c.exports=b(12)
},{"./extend":61}],59:[function(b,c,a){c.exports=b(13)},{}],60:[function(b,c,a){c.exports=b(14)
},{"./extend":61}],61:[function(b,c,a){c.exports=b(15)},{}],62:[function(b,c,a){c.exports=b(16)
},{}],63:[function(b,c,a){c.exports=b(17)},{}],64:[function(b,c,a){c.exports=b(18)
},{}],65:[function(b,c,a){c.exports=b(19)},{}],66:[function(b,c,a){c.exports=b(20)
},{qs:56}],67:[function(b,c,a){c.exports=b(40)},{"./ac-element-tracker/ElementTracker":68}],68:[function(b,c,a){c.exports=b(41)
},{"./TrackedElement":69,"ac-base":false,"ac-object":57,"window-delegate":245}],69:[function(b,c,a){c.exports=b(42)
},{"ac-dom-emitter":38}],70:[function(d,f,b){var g=d("./ac-browser/BrowserData");
var a=/applewebkit/i;var h=d("./ac-browser/IE");var c=g.create();c.isWebKit=function(i){var j=i||window.navigator.userAgent;
return j?!!a.test(j):false};c.lowerCaseUserAgent=navigator.userAgent.toLowerCase();
if(c.name==="IE"){c.IE={documentMode:h.getDocumentMode()}}f.exports=c},{"./ac-browser/BrowserData":71,"./ac-browser/IE":72}],71:[function(b,c,a){var d=b("./data");
function f(){}f.prototype={__getBrowserVersion:function(h,i){var g;if(!h||!i){return
}var j=d.browser.filter(function(k){return k.identity===i});j.some(function(m){var k=m.versionSearch||i;
var l=h.indexOf(k);if(l>-1){g=parseFloat(h.substring(l+k.length+1));return true
}});return g},__getName:function(g){return this.__getIdentityStringFromArray(g)
},__getIdentity:function(g){if(g.string){return this.__matchSubString(g)}else{if(g.prop){return g.identity
}}},__getIdentityStringFromArray:function(g){for(var k=0,h=g.length,j;k<h;k++){j=this.__getIdentity(g[k]);
if(j){return j}}},__getOS:function(g){return this.__getIdentityStringFromArray(g)
},__getOSVersion:function(i,l){if(!i||!l){return}var k=d.os.filter(function(m){return m.identity===l
})[0];var g=k.versionSearch||l;var j=new RegExp(g+" ([\\d_\\.]+)","i");var h=i.match(j);
if(h!==null){return h[1].replace(/_/g,".")}},__matchSubString:function(h){var g=h.subString;
if(g){var i=g.test?!!g.test(h.string):h.string.indexOf(g)>-1;if(i){return h.identity
}}}};f.create=function(){var g=new f();var h={};h.name=g.__getName(d.browser);h.version=g.__getBrowserVersion(d.versionString,h.name);
h.os=g.__getOS(d.os);h.osVersion=g.__getOSVersion(d.versionString,h.os);return h
};c.exports=f},{"./data":73}],72:[function(b,c,a){c.exports={getDocumentMode:function(){var d;
if(document.documentMode){d=parseInt(document.documentMode,10)}else{d=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){d=7
}}}return d}}},{}],73:[function(b,c,a){c.exports={browser:[{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],74:[function(b,c,a){c.exports=b(7)},{"./ac-feature/cssPropertyAvailable":75,"./ac-feature/localStorageAvailable":76}],75:[function(b,c,a){c.exports=b(8)
},{}],76:[function(b,c,a){c.exports=b(9)},{}],77:[function(b,c,a){var d=b("./ac-experience-reporter/ExperienceReporter");
c.exports=new d();c.exports.ExperienceReporter=d},{"./ac-experience-reporter/ExperienceReporter":79}],78:[function(b,d,a){var c=function(h,g){this._data=h;
this._environment=g;this.experienceObject=this._matchExperienceToEnvironment()||{};
this.experience=this.experienceObject.type||"static";return this};var f=c.prototype;
f._matchExperienceToEnvironment=function(){var g=false;var h=this._filterByEnvironment();
if(h.length>0){g=h.length===1?h[0]:this._filterBySpecificity(h)}return g};f._filterByEnvironment=function(){var g=this._data.filter(function(i){var h=false;
for(var j in i){if(j!=="type"&&i.hasOwnProperty(j)){if(j==="min_viewport_width"||j==="min_viewport_height"){h=this._environment[j]>=i[j]
}else{h=i[j]===this._environment[j]}if(!h){break}}}return h},this);return g};f._filterBySpecificity=function(j){var i=j;
var g=0;var h=[];i.forEach(function(l){var k=Object.keys(l).length;g=k>g?k:g});
i.forEach(function(l){var k=Object.keys(l).length;if(k===g){h.push(l)}});return h[0]
};d.exports=c},{}],79:[function(c,f,b){var d=c("./ExperienceObject");var a=c("ac-feature");
var i=c("ac-browser");function h(){this._environment=this._setEnvironment()}var g=h.prototype;
g.newExperience=function(j){return new d(j,this._environment)};g.getEnvironment=function(){return this._environment
};g._setEnvironment=function(){var j={platform:this._setPlatform(),os:i.os.toLowerCase(),os_version:parseInt(i.osVersion,10).toString(),browser:i.name.toLowerCase(),browser_version:parseInt(i.version,10).toString(),retina:a.isRetina(),min_viewport_width:document.documentElement.clientWidth,min_viewport_height:document.documentElement.clientHeight};
return j};g._setPlatform=function(){var j="desktop";if(a.isTablet()){j="tablet"
}else{if(a.isHandheld()){j="handheld"}}return j};f.exports=h},{"./ExperienceObject":78,"ac-browser":70,"ac-feature":74}],80:[function(b,c,a){arguments[4][6][0].apply(a,arguments)
},{"./ac-ajax/Ajax":81,"./ac-ajax/Request":82}],81:[function(c,g,b){var f=c("./Request");
var h=c("./XDomain-request");var a=c("./URLParser");var d=function(){};d._Request=f;
d.prototype={_defaults:{method:"get",timeout:5000},_extend:function(){for(var k=1;
k<arguments.length;k++){for(var j in arguments[k]){if(arguments[k].hasOwnProperty(j)){arguments[0][j]=arguments[k][j]
}}}return arguments[0]},_getOptions:function(i,j){return this._extend({},this._defaults,j,i)
},_isCrossDomainRequest:function(l){var k=new a();var j=k.parse(window.location.href).origin;
var i=k.parse(l).origin;k.destroy();return(i!==j)},create:function(i){return new f(i)
},cors:function(j){var i=(window.XDomainRequest&&document.documentMode<10)?h:f;
return new i(j)},get:function(j){var i;j=this._getOptions({method:"get"},j);if(this._isCrossDomainRequest(j.url)){i=this.cors(j)
}else{i=this.create(j)}return i.send()},getJSON:function(i){return this.get(i).then(function(j){return JSON.parse(j.responseText)
})},head:function(i){i=this._getOptions({method:"head"},i);return this.create(i).send()
},isCrossDomainRequest:function(i){return this._isCrossDomainRequest(i)},post:function(i){i=this._getOptions({method:"post"},i);
return this.create(i).send()}};g.exports=d},{"./Request":82,"./URLParser":83,"./XDomain-request":84}],82:[function(b,c,a){c.exports=b(3)
},{}],83:[function(b,c,a){c.exports=b(4)},{}],84:[function(b,d,a){var c=b("./Request");
var f=function(g){c.apply(this,arguments)};f.prototype=c.create();f.prototype._getTransport=function(){return new XDomainRequest()
};f.prototype._addReadyStateChangeHandler=function(){this.xhr.ontimeout=function(){this.reject(this.xhr)
}.bind(this);this.xhr.onerror=function(){this.reject(this.xhr)}.bind(this);this.xhr.onload=function(){this.resolve(this.xhr)
}.bind(this)};f.prototype._setTimeout=function(g){if(!g){if(this._configuration&&this._configuration.timeout){g=this._configuration.timeout
}}if(g>0){this.xhr.timeout=g}};f.prototype._sendXHR=function(){setTimeout(function(){c.prototype._sendXHR.call(this)
}.bind(this),0)};d.exports=f},{"./Request":82}],85:[function(b,c,a){arguments[4][38][0].apply(a,arguments)
},{"./ac-dom-emitter/DOMEmitter":86}],86:[function(b,c,a){var f;var d=b("ac-event-emitter").EventEmitter;
function g(h){if(h===null){return}this.el=h;this._bindings={};this._eventEmitter=new d()
}f=g.prototype;f._parseEventNames=function(h){if(!h){return[h]}return h.split(" ")
};f._onListenerEvent=function(i,h){this.trigger(i,h,false)};f._setListener=function(h){this._bindings[h]=this._onListenerEvent.bind(this,h);
this._addEventListener(h,this._bindings[h])};f._removeListener=function(h){this._removeEventListener(h,this._bindings[h]);
delete this._bindings[h]};f._addEventListener=function(i,j,h){if(this.el.addEventListener){this.el.addEventListener(i,j,h)
}else{if(this.el.attachEvent){this.el.attachEvent("on"+i,j)}else{target["on"+i]=j
}}return this};f._removeEventListener=function(i,j,h){if(this.el.removeEventListener){this.el.removeEventListener(i,j,h)
}else{this.el.detachEvent("on"+i,j)}return this};f.on=function(h,j,i){h=this._parseEventNames(h);
h.forEach(function(m,l,k){if(!this.has(k)){this._setListener(k)}this._eventEmitter.on(k,m,l)
}.bind(this,j,i));return this};f.off=function(h,k,j){var i=Array.prototype.slice.call(arguments,0);
h=this._parseEventNames(h);h.forEach(function(p,o,m,l){if(m.length===0){this._eventEmitter.off();
var n;for(n in this._bindings){if(this._bindings.hasOwnProperty(n)){this._removeListener(n)
}}return}this._eventEmitter.off(l,p,o);if(!this.has(l)){this._removeListener(l)
}}.bind(this,k,j,i));return this};f.once=function(h,j,i){h=this._parseEventNames(h);
h.forEach(function(m,l,k){if(!this.has(k)){this._setListener(k)}this._eventEmitter.once.call(this,k,m,l)
}.bind(this,j,i));return this};f.has=function(h){if(this._eventEmitter&&this._eventEmitter.has(h)){return true
}return false};f.trigger=function(h,i,j){h=this._parseEventNames(h);h.forEach(function(l,m,k){this._eventEmitter.trigger(k,l,m)
}.bind(this,i,j));return this};f.destroy=function(){this.off();this.el=this._eventEmitter=this._bindings=null
};c.exports=g},{}],87:[function(b,d,a){var c=b("./ac-ajax/Ajax");d.exports=new c();
d.exports.Ajax=c},{"./ac-ajax/Ajax":88}],88:[function(c,f,a){var b=c("ac-deferred").Deferred;
var d=function(){};d.prototype={_Deferred:b,_defaults:{timeout:5000},_addReadyStateChangeHandler:function(g){g.xhr.onreadystatechange=function(h){if(g.xhr.readyState===4){clearTimeout(g.timeout);
if(g.xhr.status>=200&&g.xhr.status<300){g.deferred.resolve(g.xhr)}else{g.deferred.reject(g.xhr)
}}}},_addTimeout:function(g,h){if(h){g.timeout=setTimeout(function(){g.xhr.abort();
g.deferred.reject()},h)}},_extend:function(){for(var h=1;h<arguments.length;h++){for(var g in arguments[h]){if(arguments[h].hasOwnProperty(g)){arguments[0][g]=arguments[h][g]
}}}return arguments[0]},_getOptions:function(g,h){return this._extend({},this._defaults,h,g)
},_sendRequest:function(i){var h=this._validateConfiguration(i);if(h){throw h}var g={xhr:new XMLHttpRequest()};
g.deferred=new b();g.xhr.open(i.method,i.url);this._setRequestHeaders(g,i.headers);
this._addTimeout(g,i.timeout);this._addReadyStateChangeHandler(g);g.xhr.send(i.data);
return g.deferred.promise()},_setRequestHeaders:function(g,h){if(h){h.forEach(function(i){g.xhr.setRequestHeader(i.name,i.value)
})}},_validateConfiguration:function(i){if(!i){return"Must provide a configuration object"
}var h=[];var g=i.headers;if(!i.url){h.push("Must provide a url")}if(g){if(!Array.isArray(g)){return"Must provide an array of headers"
}this._validateHeaders(g,h)}return h.join(", ")},_validateHeaders:function(j,k){for(var h=0,g=j.length;
h<g;h++){if(!j[h].hasOwnProperty("name")||!j[h].hasOwnProperty("value")){k.push("Must provide a name and value key for all headers");
break}}},checkURL:function(g){g=this._getOptions({method:"head"},g);return this._sendRequest(g)
},get:function(g){g=this._getOptions({method:"get"},g);return this._sendRequest(g)
},post:function(g){g=this._getOptions({method:"post"},g);return this._sendRequest(g)
}};f.exports=d},{}],89:[function(b,c,a){c.exports=b(2)},{"./Request":90,"./URLParser":91,"./XDomain-request":92}],90:[function(b,c,a){c.exports=b(3)
},{}],91:[function(b,c,a){c.exports=b(4)},{}],92:[function(b,c,a){c.exports=b(5)
},{"./Request":90}],93:[function(b,c,a){c.exports=b(6)},{"./ac-ajax/Ajax":89,"./ac-ajax/Request":90}],94:[function(b,c,a){c.exports=b(7)
},{"./ac-feature/cssPropertyAvailable":95,"./ac-feature/localStorageAvailable":96}],95:[function(b,c,a){c.exports=b(8)
},{}],96:[function(b,c,a){c.exports=b(9)},{}],97:[function(b,c,a){arguments[4][21][0].apply(a,arguments)
},{"./ac-asset-loader/AssetLoader":98,"./ac-asset-loader/AssetLoader/Asset":99,"./ac-asset-loader/AssetLoader/Asset/Ajax":100,"./ac-asset-loader/AssetLoader/Asset/Ajax/JSON":101,"./ac-asset-loader/AssetLoader/Asset/Binary":102,"./ac-asset-loader/AssetLoader/Asset/Binary/Chunk":103,"./ac-asset-loader/AssetLoader/Asset/Img":104,"./ac-asset-loader/AssetLoader/Asset/Video":107,"./ac-asset-loader/AssetLoader/Asset/Video/Element":108,"./ac-asset-loader/AssetLoader/Queue":109}],98:[function(b,c,a){arguments[4][22][0].apply(a,arguments)
},{"../utils/destroy":110,"./AssetLoader/Asset/Ajax":100,"./AssetLoader/Asset/Ajax/JSON":101,"./AssetLoader/Asset/Img":104,"./AssetLoader/Asset/Video":107,"./AssetLoader/Queue":109,"ac-object":144}],99:[function(b,c,a){arguments[4][23][0].apply(a,arguments)
},{"../../utils/destroy":110}],100:[function(b,c,a){arguments[4][24][0].apply(a,arguments)
},{"../Asset":99,"ac-ajax":93,"ac-object":144}],101:[function(b,c,a){c.exports=b(25)
},{"../Ajax":100,"ac-object":144}],102:[function(b,c,a){arguments[4][26][0].apply(a,arguments)
},{"./../Asset":99,"./Binary/Chunk":103,"ac-ajax":93,"ac-object":144}],103:[function(b,c,a){arguments[4][27][0].apply(a,arguments)
},{"../../Asset":99,"ac-ajax":93,"ac-object":144}],104:[function(b,c,a){arguments[4][28][0].apply(a,arguments)
},{"../Asset":99,"ac-object":144}],105:[function(d,a,h){var k=d("ac-ajax").Ajax,g=d("ac-object"),j=d("./SplitFile/Chunk"),b=d("../Asset");
var i;var f={splitManifestTimeout:5000,splitChunkTimeout:null};var c=function(m,l){b.apply(this,arguments);
if(m.lastIndexOf("/")!==m.length-1){m=m+"/"}this.options=g.extend(f,l||{});this._manifestPath=m+"manifest.json";
this._ajax=new k();this._request=null;this._chunksLoaded=0;this._chunksLen=null;
this._chunks=[];this._boundOnManifestLoaded=this._onManifestLoaded.bind(this)};
i=c.prototype=g.create(b.prototype);i._load=function(){var l={method:"get",url:this._manifestPath,timeout:this.options.manifestTimeout};
this._request=this._ajax.create(l);this._request.send().then(this._boundOnManifestLoaded)
};i._onManifestLoaded=function(p){this._manifest=JSON.parse(p.responseText);this._chunksLen=this._manifest.files.length;
var n,o=this._manifest.files,m,l=this._chunksLen;for(n=0;n<l;n++){m=this._getOrCreateChunkObject(o[n],n);
m.once("loaded",this._onChunkLoaded,this);m.load()}this._request=null;this._ajax=null
};i._getOrCreateChunkObject=function(n,l){var o=this.options.splitChunkTimeout?{timeout:this.options.splitChunkTimeout}:null;
if(!this._chunks[l]){var q=n.path;if(!q.match(/(^http(s?))/)){q=this.src+"/"+q}else{if(!!this.src.match(/(^http(s?))/)){var p=q.indexOf("/",10);
var m=this.src.indexOf("/",10);q=this.src.substring(0,m)+q.substring(p)}}this._chunks[l]=new j(q,o)
}return this._chunks[l]};i._onChunkLoaded=function(){this._chunksLoaded++;if(this._chunksLoaded===this._chunksLen){var n,l=this._chunks.length,m=[];
for(n=0;n<l;n++){m.push(this._chunks[n].data);this._chunks[n].off()}this.data=new Blob(m,{type:this._manifest.mimeType});
m=this._chunks=null;this.trigger("loaded",this.data)}};i.pause=function(){if(this._request!==null){if(this._request.xhr!==null){this._request.xhr.abort()
}this._request=null}this.data=null;this._chunks=null};a.exports=c},{"../Asset":99,"./SplitFile/Chunk":106,"ac-ajax":93,"ac-object":144}],106:[function(c,a,g){var h;
var j=c("ac-ajax");var f=c("ac-object");var b=c("../../Asset");var d={timeout:30*1000};
function i(l,k){b.apply(this,arguments);this.options=f.extend(d,k||{});this._request=null;
this.data=null}h=i.prototype=f.create(b.prototype);h.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};h.isLoaded=function(){return(this.data!==null)};h._load=function(){this._request=j.create({url:this.src,method:"get",timeout:this.options.timeout});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};h._onLoad=function(k){this.data=k.response;this._request=null;b.prototype._onLoad.call(this,this.data)
};a.exports=i},{"../../Asset":99,"ac-ajax":93,"ac-object":144}],107:[function(c,a,h){var k;
var g=c("ac-feature");var f=c("ac-object");var i=c("./Binary");var l=c("../Asset");
var j=c("./Video/Element");var b=c("./SplitFile");var d={chunkSize:1024*1024,forceElementLoading:false,split:false};
function m(o,n){l.apply(this,arguments);this.options=f.defaults(d,n||{});this._binary=this.options.binary||this._createAssetType()
}k=m.prototype=f.create(l.prototype);k._canUseBlob=function(){return(window.Blob!==undefined&&window.URL!==undefined&&typeof window.URL.createObjectURL==="function"&&g.isDesktop()===true)
};k._createAssetType=function(){if(this._canUseBlob()&&this.options.forceElementLoading!==true){if(this.options.split){return new b(this.src,this.options)
}return new i(this.src,this.options)}return new j(this.src,this.options)};k._load=function(){this._binary.on("loaded",this._boundOnLoad);
this._binary.on("error",this._boundOnError);this._binary.load()};k._onLoad=function(o){var n=o;
if(o instanceof window.Blob){n=this.options.element;if(!n){n=document.createElement("video")
}if(n.getAttribute("type")!==o.type){n.setAttribute("type",o.type)}n.src=window.URL.createObjectURL(o)
}l.prototype._onLoad.call(this,n)};k.pause=function(){this._binary.pause()};k.destroy=function(){this._binary.destroy();
l.prototype.destroy.call(this)};a.exports=m},{"../Asset":99,"./Binary":102,"./SplitFile":105,"./Video/Element":108,"ac-feature":94,"ac-object":144}],108:[function(b,a,g){var f=b("ac-feature");
var d=b("ac-object");var k=b("./../../../../utils/round");var j=b("./../../Asset");
var c={};function i(m,l){j.apply(this,arguments);this.options=d.defaults(c,l||{});
this._boundOnVideoProgress=null;this._boundOnTimeUpdate=null;this._boundOnCanPlayThrough=null;
this._videoDuration=null}var h=i.prototype=d.create(j.prototype);h._onVideoProgress=function(l){if(this.data&&this.data.buffered.length>0&&this._videoDuration&&k(this.data.buffered.end(0),4)===k(this._videoDuration,4)){this._unbindEvent("canplaythrough",this._boundOnCanPlayThrough);
this._unbindEvent("timeupdate",this._boundOnTimeUpdate);this._unbindEvent("progress",this._boundOnVideoProgress);
this._unbindEvent("loadedmetadata",this._boundMetaDataLoaded);this._boundOnVideoProgress=null;
this.data.muted=false;this._onLoad()}};h._onTimeUpdate=function(l){this.data.pause();
this.data.currentTime=0;this.data.removeEventListener("timeupdate",this._boundOnTimeUpdate);
this._boundOnTimeUpdate=null};h._onCanPlayThrough=function(l){if(this._boundOnTimeUpdate===null){this._boundOnTimeUpdate=this._onTimeUpdate.bind(this)
}if(f.isDesktop()){this.data.addEventListener("timeupdate",this._boundOnTimeUpdate);
this.data.play()}this._unbindEvent("canplaythrough",this._boundOnCanPlayThrough);
this._boundOnCanPlayThrough=null};h._onMetaDataLoaded=function(l){this._videoDuration=this.data.duration;
this._onVideoProgress(l)};h._load=function(){this.data=this.options.element;if(!this.data){this.data=document.createElement("video")
}this.data.muted=true;if(this.options.type){this.data.setAttribute("type",this.options.type)
}if(this._boundOnVideoProgress===null){this._boundOnVideoProgress=this._onVideoProgress.bind(this);
this._boundOnCanPlayThrough=this._onCanPlayThrough.bind(this);this._boundMetaDataLoaded=this._onMetaDataLoaded.bind(this);
this.data.addEventListener("progress",this._boundOnVideoProgress);this.data.addEventListener("canplaythrough",this._boundOnCanPlayThrough);
this.data.addEventListener("loadedmetadata",this._boundMetaDataLoaded)}this.data.setAttribute("preload","auto");
this.data.src=this.src;this.data.load()};h._unbindEvent=function(l,m){if(typeof m==="function"){this.data.removeEventListener(l,m)
}};h.pause=function(){this._unbindEvent("canplaythrough",this._boundOnCanPlayThrough);
this._unbindEvent("timeupdate",this._boundOnTimeUpdate);this._unbindEvent("progress",this._boundOnVideoProgress);
this._unbindEvent("loadedmetadata",this._boundMetaDataLoaded);this._boundOnVideoProgress=null;
this._boundOnCanPlayThrough=null;this._boundOnTimeUpdate=null;this._boundMetaDataLoaded=null;
this.data.removeAttribute("src");this.data=undefined;this.trigger("pause")};a.exports=i
},{"./../../../../utils/round":111,"./../../Asset":99,"ac-feature":94,"ac-object":144}],109:[function(b,c,a){arguments[4][31][0].apply(a,arguments)
},{"../../utils/destroy":110,"ac-object":144}],110:[function(b,d,a){d.exports=function c(f,g){if(typeof f.off==="function"){f.off()
}function h(j){var i=true;for(var k in j){if(j.hasOwnProperty(k)){if(j[k]!==null){i=false;
break}}}return i}window.setTimeout(function(){var i;for(i in f){if(f.hasOwnProperty(i)){if(g&&f[i]&&typeof f[i].destroy==="function"&&!h(f[i])){f[i].destroy()
}f[i]=null}}})}},{}],111:[function(b,c,a){c.exports=b(33)},{}],112:[function(b,c,a){c.exports.playerFactory=b("./ac-flow-x/flow/playerFactory");
c.exports.Flow=b("./ac-flow-x/flow/FlowController");c.exports.SyncPlayer=b("./ac-flow-x/flow/SyncPlayer");
c.exports.MaskedFlow=b("./ac-flow-x/flow/MaskedFlow")},{"./ac-flow-x/flow/FlowController":114,"./ac-flow-x/flow/MaskedFlow":116,"./ac-flow-x/flow/SyncPlayer":118,"./ac-flow-x/flow/playerFactory":141}],113:[function(b,a,c){var f,j=false,i=b("ac-deferred").Deferred,l=b("ac-deferred").all,o=b("ac-event-emitter").EventEmitter,k=b("./compositor/decorator/Keyframe"),h=b("./compositor/decorator/Superframe"),g=b("./compositor/decorator/SuperKeyframe"),n=b("./compositor/decorator/Cache"),m=b("./compositor/decorator/Benchmark");
function d(p,q){o.call(this);this._compositor=p;this.options=q||{};this.gotoFrame
}f=d.prototype=new o(null);f._gotoImageFrame=function(p){if(this._rendering){return(new i()).resolve()
}else{if(this._currentFrame===p){return(new i()).resolve()}}this._rendering=true;
if(j){console.groupCollapsed("gotoFrame:"+p+" currentFrame:"+this._currentFrame)
}return this._compositor.compositeFrames(this._currentFrame,p).then(function(){this._rendering=false;
this._currentFrame=p;if(j){console.groupEnd()}}.bind(this))};f._gotoBinaryFrame=function(p){if(this._currentFrame===p){return(new i()).resolve()
}return this._compositor.compositeFrames(this._currentFrame,p).then(function(q){if(q){this._compositor.applyBinaryFrame(q)
}this._currentFrame=p;this.trigger("composite")}.bind(this))};f.init=function(q){var p;
if(q.nodeName==="CANVAS"){p=q}else{p=document.createElement("canvas");q.appendChild(p)
}if(this.options.renderType==="binary"){this.gotoFrame=this._gotoBinaryFrame}else{if(this.options.renderType==="default"){this.gotoFrame=this._gotoImageFrame
}}return this._compositor.init(p).then(function(r){return l([this._compositor.createDiffRender(r).then(this._decorateCompositor.bind(this))])
}.bind(this))};f._decorateCompositor=function(){var p=this._compositor,r=this._compositor._diffRender.flowData,q=this._compositor.canvas;
if(this.options.renderType==="binary"){}else{if(r.superframeFrequency){p=new h(p,r.superframeFrequency)
}if(r.version===3){p=new k(p)}if(r.version===3&&r.superframeFrequency){p=new g(p)
}if(this.options.keyframeCache){p=new n(p,this.options.keyframeCache)}if(this.options.benchmark){p=new m(p)
}}if(p===this._compositor){return(new i()).resolve()}else{this._compositor=p;return this._compositor.init(q)
}};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(f,{_currentFrame:{value:0,enumerable:false,writable:true},frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true}});a.exports=d},{"./compositor/decorator/Benchmark":121,"./compositor/decorator/Cache":122,"./compositor/decorator/Keyframe":123,"./compositor/decorator/SuperKeyframe":124,"./compositor/decorator/Superframe":125}],114:[function(f,b,g){var i,h=f("./Flow"),d=f("./Player"),m=f("./LoadController"),k=f("./compositor/BinaryCompositor"),j=f("./compositor/Sequence");
var c={fileFormat:"jpg",baseName:"flow",imageUrlPattern:"###",startframeFileFormat:null,endframeFileFormat:null,basePath:null,manifestPath:null,manifestFileFormat:"json",diffPath:null,framePath:null};
var a={superframes:false,reversable:false,keyframeCache:8,benchmark:false,preload:true,multithread:false,preventDraw:false,renderType:"default"};
var l=function(n,o){n=n||{};o=o||{};this._flow=null;this._compositor=null;this._oader=null;
this.options=this._setDefaults(n,a);this._dataOptions=this._setDefaults(o,c);if(!this.options.element){this.options.element=document.createElement("canvas")
}this._flow=this._createFlow(this._compositor,this.options,this._dataOptions);d.call(this,this.options.element,this._flow);
if(this.options.preload){this.load()}};i=l.prototype=new d(null);i.destroy=function(){this.pause();
this.off();this._flow.off();this._flow=this._nullProperties(this._flow);this._nullProperties(this)
};i._nullProperties=function(o){var n;for(n in o){if(o.hasOwnProperty(n)){o[n]=null
}}return o};i._createFlow=function(o,p,r){var n=this._assembleAssetPaths(r);var q=[n.startframe,n.endframe];
this.loader=new m(this,n.manifest,q,n.imageUrlPattern);if(p.renderType==="binary"){this._compositor=new k(q,n.imageUrlPattern,this.loader,p.multithread,p.preventDraw)
}else{this._compositor=new j(q,n.imageUrlPattern,this.loader)}return new h(this._compositor,p)
};i._assembleAssetPaths=function(t){var s=t.basePath?this._forceTrailingSlash(t.basePath):null;
var p=t.framePath?this._forceTrailingSlash(t.framePath):null;var o=t.diffPath?this._forceTrailingSlash(t.diffPath):null;
var r=t.manifestPath?this._forceTrailingSlash(t.manifestPath):null;var n=t.baseName+"_";
var q={};q.startframe=(p||s)+n+"startframe."+(t.startframeFileFormat||t.fileFormat);
q.endframe=(p||s)+n+"endframe."+(t.endframeFileFormat||t.fileFormat);q.imageUrlPattern=(o||s)+n+t.imageUrlPattern+"."+t.fileFormat;
q.manifest=(r||s)+n+"manifest."+t.manifestFileFormat;return q};i._forceTrailingSlash=function(n){if(n.lastIndexOf("/")!==n.length-1){n=n+"/"
}return n};i._setDefaults=function(o,p){var n;for(n in p){if(p.hasOwnProperty(n)){if(typeof o[n]==="undefined"){o[n]=p[n]
}}}return o};b.exports=l},{"./Flow":113,"./LoadController":115,"./Player":117,"./compositor/BinaryCompositor":119,"./compositor/Sequence":120}],115:[function(b,a,c){var d,h=b("ac-asset-loader").AssetLoader,l=b("ac-event-emitter").EventEmitter,f=b("./data/provider/Async"),g=b("ac-deferred").Deferred,i=b("ac-deferred").all;
var k={start:"start",pause:"pause",error:"error",complete:"loaded",destroy:"destroy"};
var j=function(o,m,n,p){this._flow=o;this._manifestUrl=m;this._keyframeUrls=n;this._imageUrlPattern=p;
this.state={manifestLoaded:false,keyframesLoaded:false,diffsLoaded:false,diffCountLoaded:0,totalDiffs:null};
this.assets={keyframes:null,manifest:null,diffs:null};this._promises={};this._loaders={};
this._activeLoaders=[];this._resumeQueue=[];this._paused=true;this._shouldPause=false;
this._boundOnManifestLoaded=this._onManifestLoaded.bind(this);this._boundOnKeyframesLoaded=this._onKeyframesLoaded.bind(this);
this._boundOnDiffsLoaded=this._onDiffsLoaded.bind(this);this._boundOnManifestAndKeyframesLoaded=this._onManifestAndKeyframesLoaded.bind(this);
this._boundOnComplete=this._onComplete.bind(this)};d=j.prototype=new l(null);d.setManifestUrl=function(m){this._manifestUrl=m;
return this};d.setKeyframeUrls=function(m){this._keyframeUrls=m;return this};d.setImageUrlPattern=function(m){this._imageUrlPattern=m;
return this};d.load=function(){if(this._paused&&(this._activeLoaders.length>0||this._resumeQueue.length>0)){this._resume();
return}this._flow.load().then(this._boundOnComplete);return};d.pause=function(){this._shouldPause=true;
var n,m=this._activeLoaders.length;for(n=0;n<m;n++){this._activeLoaders[n].pause()
}this._paused=true};d.destroy=function(){var n,m,o;this.trigger(k.destroy);this.off();
for(n in this._loaders){if(this._loaders.hasOwnProperty(n)){}}for(m in this._promises){if(this._promises.hasOwnProperty(m)){this._promises[m].reject()
}}for(o in this){if(this.hasOwnProperty(o)){this[o]=null}}};d._resume=function(){this._shouldPause=false;
var p,m=this._activeLoaders.length;for(p=0;p<m;p++){this._activeLoaders[p].load()
}var o,n=this._resumeQueue.length;for(o=0;o<n;o++){this._resumeQueue[o].call(this)
}this._resumeQueue=[];this._paused=false};d.loadManifest=function(){this._promises.manifest=this._promises.manifest||new g();
var m=this._promises.manifest.promise();if(this._shouldPause){this._resumeQueue.push(this.loadManifest);
return m}if(this.assets.manifest){return this._promises.manifest.resolve(this.assets.manifest)
}this._paused=false;this._loaders.manifest=new f({url:this._getManifestAssetsData()});
this._activeLoaders.push(this._loaders.manifest);this._loaders.manifest.load().then(this._boundOnManifestLoaded);
return m};d.loadKeyframes=function(){this._promises.keyframes=this._promises.keyframes||new g();
var m=this._promises.keyframes.promise();if(this._shouldPause){this._resumeQueue.push(this.loadKeyframes);
return m}if(this.assets.keyframes){return this._promises.keyframes.resolve(this.assets.keyframes)
}this._paused=false;this._loaders.keyframes=new h(this._getKeyframesAssetsData());
this._activeLoaders.push(this._loaders.keyframes);this._loaders.keyframes.load().then(this._boundOnKeyframesLoaded);
return m};d.loadDiffs=function(){this._promises.diffs=this._promises.diffs||new g();
var m=this._promises.diffs.promise();if(this._shouldPause){this._resumeQueue.push(this.loadDiffs);
return m}if(this.assets.diffs){return this._promises.diffs.resolve(this.assets.diffs)
}this._paused=false;this._activeLoader=this._loaders.diffs=new h(this._getDiffsAssetsData());
this._activeLoaders.push(this._loaders.diffs);this._loaders.diffs.load().then(this._boundOnDiffsLoaded);
return m};d._getManifestAssetsData=function(){return this._manifestUrl};d._getKeyframesAssetsData=function(){return this._keyframeUrls
};d._getDiffsAssetsData=function(){var o=this.assets.manifest.imagesRequired,m=[],p,n,q=this._imageUrlPattern.match(/#/g).length;
for(p=1;p<=o;p++){n="0000"+p;n=n.substring(n.length-q);m.push(this._imageUrlPattern.replace(/#{2,}/g,n))
}return m};d._onManifestLoaded=function(m){this.assets.manifest=m;this.state.manifestLoaded=true;
this._paused=true;this._removeFromActiveLoaders(this._loaders.manifest);this._promises.manifest.resolve(this.assets.manifest)
};d._onKeyframesLoaded=function(m){this.assets.keyframes=m;this.state.keyframeLoaded=true;
this._paused=true;this._removeFromActiveLoaders(this._loaders.keyframes);this._promises.keyframes.resolve(this.assets.keyframes)
};d._onDiffsLoaded=function(m){this.assets.diffs=m;this.state.diffsLoaded=true;
this._paused=true;this._removeFromActiveLoaders(this._loaders.diffs);this._promises.diffs.resolve(this.assets.diffs)
};d._onManifestAndKeyframesLoaded=function(){if(!this.state.diffsLoaded){this.loadDiffs()
}return this._promises.diffs};d._removeFromActiveLoaders=function(o){var n,m=this._activeLoaders.length;
for(n=0;n<m;n++){if(this._activeLoaders[n]===o){this._activeLoaders.splice(n,1);
return}}};d._onComplete=function(){this.trigger(k.complete)};a.exports=j},{"./data/provider/Async":133,"ac-asset-loader":97}],116:[function(b,a,f){var h,g=b("./FlowController"),d=b("./SyncPlayer"),i=b("ac-deferred").Deferred,k=b("ac-deferred").all;
var c={preventDraw:true,renderType:"binary"};function j(p,q,m,o,l,n){m=this._setDefaultOptions(m);
o=this._setDefaultOptions(o);this.flow=new g(p,m,l);this.mask=new g(q,o,n);d.apply(this,[this.flow,this.mask]);
this._flowDefer=null;this._maskDefer=null;this._boundOnSyncRender=this._onSyncRender.bind(this);
this._boundOnFlowTimeUpdate=this._onFlowTimeUpdate.bind(this);this._boundOnMaskTimeUpdate=this._onMaskTimeUpdate.bind(this);
this.flow._flow.on("composite",this._boundOnFlowTimeUpdate);this.mask._flow.on("composite",this._boundOnMaskTimeUpdate);
this._bindSyncRender()}h=j.prototype=new d(null);h._setDefaultOptions=function(l){l=l||{};
var m;for(m in c){if(c.hasOwnProperty(m)){if(typeof l[m]==="undefined"){l[m]=c[m]
}}}return l};h._bindSyncRender=function(){this._flowDefer=new i();this._maskDefer=new i();
k([this._flowDefer,this._maskDefer]).then(this._boundOnSyncRender)};h._onFlowTimeUpdate=function(){if(this._flowDefer){this._flowDefer.resolve()
}};h._onMaskTimeUpdate=function(){if(this._maskDefer){this._maskDefer.resolve()
}};h._onSyncRender=function(){this._flowDefer=this._maskDefer=null;this._applyMask();
this._bindSyncRender()};h._applyMask=function(){if(!this.flow._compositor.imageData){return
}var n=this.flow._compositor.imageData.data,o=this.mask._compositor.imageData.data,m,l=n.length;
for(m=0;m<l;m+=4){n[m+3]=o[m]}this.flow._compositor.applyBinaryFrame({buf8:n},true)
};a.exports=j},{"./FlowController":114,"./SyncPlayer":118}],117:[function(d,f,b){var h,a=false,c=d("ac-deferred").Deferred,i=d("ac-dom-emitter").DOMEmitter;
function g(k,j){this._flow=j;this._domEmitter=new i(k);this._frameRate=30;this.element=k;
this.paused=true;this.loop=false;this._boundAdvanceTimeToGlobal=this._advanceToTimeGlobal.bind(this);
this._onBoundGlobalTimeUpdate=this._onGlobalTimeUpdate.bind(this);this._onBoundLocalTimeUpdate=this._onLocalTimeUpdate.bind(this)
}h=g.prototype;h._timeToFrame=function(j){var k;k=Math.round(j/this.duration*this._flow.frameCount);
k=k%(this._flow.frameCount+1);return(k<0)?this._flow.frameCount+k:k};h._advanceToTimeGlobal=function(j){this._prevTime=this._prevTime||j;
this._currentTime+=((j-this._prevTime)/1000)*this.playbackRate;this._prevTime=j;
this._pauseAfterRender=false;var k=this._timeToFrame(this._currentTime);if(!this.loop){if(this.playbackRate>0&&this._currentTime>this.duration){k=this._flow.frameCount;
this._currentTime=this.duration;this._pauseAfterRender=true}else{if(this.playbackRate<0&&this._currentTime<0){k=0;
this._currentTime=0;this._pauseAfterRender=true}}}else{this._currentTime=(this.duration+this._currentTime)%this.duration
}if(!this.paused&&!this.seeking){return this._flow.gotoFrame(k).then(this._onBoundGlobalTimeUpdate)
}else{return(new c()).reject()}};h._onGlobalTimeUpdate=function(){this.trigger("timeupdate");
if(this._pauseAfterRender){this.paused=true;this.trigger("ended")}else{this._requestAnimationFrame=window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
}};h._onLocalTimeUpdate=function(){this.seeking=false;this.trigger("timeupdate");
this.trigger("seeked");this._requestAnimationFrame=window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
};h._advanceToTimeLocal=function(j){if(!this.seeking){this.seeking=true;this.trigger("seeking");
this._currentTime=1*j;this._prevTime=null;window.cancelAnimationFrame(this._requestAnimationFrame);
this._flow.gotoFrame(this._timeToFrame(j)).then(this._onBoundLocalTimeUpdate)}if(a){console.log("advance to time "+j+" from "+this._currentTime)
}};h.load=function(){this.trigger("loadstart");return this._flow.init(this.element).then(this.trigger.bind(this,"canplaythrough"))
};h.play=function(){if(this.paused){this.paused=false;this.trigger("play");this._prevTime=null;
this._requestAnimationFrame=window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
}return this};h.pause=function(){if(!this.paused){this.paused=true;window.cancelAnimationFrame(this._requestAnimationFrame);
this.trigger("pause")}return this};h.on=function(){this._domEmitter.on.apply(this._domEmitter,arguments)
};h.once=function(){this._domEmitter.once.apply(this._domEmitter,arguments)};h.trigger=function(){this._domEmitter.trigger.apply(this._domEmitter,arguments)
};h.off=function(){this._domEmitter.off.apply(this._domEmitter,arguments)};h.setRenderOperation=function(j){if(this._flow&&this._flow._compositor&&this._flow._compositor._diffRender){this._flow._compositor._diffRender.renderOperation=j
}return this};h.setBeforeRenderOperation=function(j){if(this._flow&&this._flow._compositor&&this._flow._compositor._diffRender){this._flow._compositor._diffRender.beforeRenderOperation=j
}};h.setBeforeDrawOperation=function(j){if(this._flow&&this._flow._compositor){this._flow._compositor.beforeDrawOperation=j
}};h.setAfterDrawOperation=function(j){if(this._flow&&this._flow._compositor){this._flow._compositor.afterDrawOperation=j
}};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(h,{_currentTime:{value:0,enumerable:false,writable:true},_playbackRate:{value:1,enumerable:false,writable:true},currentTime:{get:function(){return this._currentTime*1
},set:h._advanceToTimeLocal,enumerable:true},frameRate:{get:function(){return this._frameRate
},set:function(j){if(isFinite(j)){this._frameRate=j;this.trigger("durationchange")
}},enumerable:true},playbackRate:{get:function(){return this._playbackRate*1},set:function(j){if(isFinite(j)){this._playbackRate=1*j;
this.trigger("ratechange")}},enumerable:true},duration:{get:function(){return this._flow.frameCount/this.frameRate
},enumerable:true}});f.exports=g},{"ac-dom-emitter":85}],118:[function(d,f,b){var h,c=d("ac-deferred").Deferred,a=d("ac-deferred").all;
function g(){this.flows=Array.prototype.slice.call(arguments,0)}h=g.prototype;h.on=function(){return this._each("on",arguments)
};h.off=function(){return this._each("off",arguments)};h.load=function(){var n=new c(),m=[],l,j=this.flows.length,k;
for(l=0;l<j;l++){k=this.flows[l];m.push(k.load())}a(m).then(n.resolve.bind(n));
return n.promise()};h.play=function(){return this._each("play",arguments)};h.pause=function(){return this._each("pause",arguments)
};h.destroy=function(){this._each("destroy",arguments);var j;for(j in this){if(this.hasOwnProperty(j)){if(this[j] instanceof c){this[j].reject()
}this[j]=null}}};h.setRenderOperation=function(){return this._each("setRenderOperation",arguments)
};h.setBeforeRenderOperation=function(){return this._each("setBeforeRenderOperation",arguments)
};h.setBeforeDrawOperation=function(){return this._each("setBeforeDrawOperation",arguments)
};h.setAfterDrawOperation=function(){return this._each("setAfterDrawOperation",arguments)
};h._dispatchEvent=function(i){return this._each("_dispatchEvent",arguments)};h._advanceToTimeGlobal=function(){return this._each("_advanceToTimeGlobal",arguments)
};h._advanceToTimeLocal=function(){return this._each("_advanceToTimeLocal",arguments)
};h._each=function(n,l){l=Array.prototype.slice.call(l,0);var m,j=this.flows.length,k;
for(m=0;m<j;m++){k=this.flows[m];k[n].apply(k,l)}return this};Object.defineProperties(h,{_currentTime:{value:0,enumerable:false,writable:true},_playbackRate:{value:1,enumerable:false,writable:true},_loop:{value:false,enumerable:false,writable:true},currentTime:{get:function(){return this._currentTime*1
},set:h._advanceToTimeLocal,enumerable:true},frameRate:{get:function(){return this._frameRate
},set:function(i){if(isFinite(i)){this._frameRate=i;this._dispatchEvent("durationchange")
}},enumerable:true},playbackRate:{get:function(){return this._playbackRate*1},set:function(i){if(isFinite(i)){this._playbackRate=1*i;
this.flows.forEach(function(k,j){j.playbackRate=k}.bind(this,this._playbackRate))
}},enumerable:true},duration:{get:function(){return this._flow[0].frameCount/this.frameRate
},enumerable:true},loop:{get:function(){return this._loop},set:function(i){if(typeof i==="boolean"){this._loop=i;
this.flows.forEach(function(j,k){k.loop=j}.bind(this,this._loop))}},enumerable:true}});
f.exports=g},{}],119:[function(c,b,d){var f,j=false,a=c("../diff/BinaryRender"),g=c("../diff/BinaryMultithreadRender"),i=c("ac-deferred").Deferred;
var h=function(o,m,n,l,k){this._keyframes=o;this._imageUrlPattern=m;this._loadController=n;
this._useMultithreading=l;this._preventDraw=k};f=h.prototype;f._getURLObject=function(){return window.URL||window.webkitURL||null
};f._supportsMultithread=function(){if(this._getURLObject()&&window.Worker&&window.Blob){return true
}return false};f._initDiffRender=function(k){this._images=k;this.canvas.height=k[0].height;
this.canvas.width=k[0].width;this.applyFrame(k[0])};f.init=function(k){this.canvas=k||document.createElement("canvas");
this.context=k.getContext("2d");return this._loadController.loadKeyframes().then(this._initDiffRender.bind(this)).then(this._loadController.loadManifest.bind(this._loadController))
};f.createDiffRender=function(k){if(this._useMultithreading&&this._supportsMultithread()){this._diffRender=new g(k,this._imageUrlPattern)
}else{this._diffRender=new a(k,this._imageUrlPattern,this._loadController)}return this._diffRender.init()
};f.applyFrame=function(m){var l=this.context,k;l.drawImage(m,0,0);if(this._diffRender){this._diffRender.forceBinaryComposite();
k=this._diffRender.forceKeyframeRender(this.canvas,this.context);if(!this.imageData){this.imageData=this.context.createImageData(k.width,k.height)
}this.imageData.data.set(k.buf8)}};f.applyBinaryFrame=function(k,l){if(!this.imageData){this.imageData=this.context.createImageData(k.width,k.height)
}if(this._beforeDrawOperation){k=this._beforeDrawOperation(k)}this.imageData.data.set(k.buf8);
if(!this._preventDraw||l){this.context.putImageData(this.imageData,0,0)}if(this._afterDrawOperation){k=this._afterDrawOperation(k)
}};f.calculateRenderCount=function(k,l){var m=0;if(Math.abs(l-k)>=l){k=1;m=1}else{if(Math.abs(l-k)>=(this.frameCount-l)&&this._images[1]){k=this.frameCount-2;
m=1}}if(l>0&&l<this.frameCount-1){return Math.abs(k-l)+m}else{return m}};f.compositeFrames=function(l,o){var n=new i(),m;
o=(this.frameCount<o)?this.frameCount-1:(o<0)?0:o;l=(this.frameCount-2<l)?this.frameCount-2:(l<0)?0:l;
var p,k,m;if(Math.abs(o-l)>=o){l=1;if(j){console.log("applying start keyframe")
}this.applyFrame(this._images[0]);return n.resolve()}else{if(Math.abs(o-l)>=(this.frameCount-o)&&this._images[1]){l=this.frameCount-2;
if(j){console.log("applying end keyframe")}this.applyFrame(this._images[1]);return n.resolve()
}}p=(l>o)?-1:(l<o)?1:0;if(o>0&&o<this.frameCount-1){while(l!==o){k=this._diffRender.renderDiff(this.canvas,l,this.context);
l+=p}}if(k){k.then(n.resolve.bind(n))}else{n.resolve()}return n.promise()};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(f,{frameCount:{get:function(){return this._diffRender.frames.length+2
},enumerable:true},canvas:{get:function(){return this._canvas},set:function(k){return this._canvas=k
},enumerable:true},mainCompositor:{get:function(){var k=this;while(k._compositor){k=k._compositor
}return k},enumerable:true},_beforeDrawOperation:{value:undefined,enumerable:false,writable:true},_afterDrawOperation:{value:undefined,enumerable:false,writable:true},beforeDrawOperation:{get:function(){return this._beforeDrawOperation
},set:function(k){if(typeof k==="function"){this._beforeDrawOperation=k;return}this._beforeDrawOperation=undefined
},enumerable:true},afterDrawOperation:{get:function(){return this._afterDrawOperation
},set:function(k){if(typeof k==="function"){this._afterDrawOperation=k;return}this._afterDrawOperation=undefined
},enumerable:true}});b.exports=h},{"../diff/BinaryMultithreadRender":135,"../diff/BinaryRender":136}],120:[function(d,c,f){var i=0,b;
function k(){if(!b){b=document.getElementById("counter")}i++;b.textContent=i}var g,l=false,h=d("../diff/Render"),j=d("ac-deferred").Deferred;
function a(p,m,o,n){this._keyframes=p;this._imageUrlPattern=m;this._loadController=o;
this._renderType=n||"default"}g=a.prototype;g._initDiffRender=function(m){this._images=m;
this.canvas.height=m[0].height;this.canvas.width=m[0].width;this.applyFrame(m[0]);
return new j().resolve()};g.init=function(m){this.canvas=m||document.createElement("canvas");
this.context=m.getContext("2d");return this._loadController.loadKeyframes().then(this._initDiffRender.bind(this)).then(this._loadController.loadManifest.bind(this._loadController))
};g.createDiffRender=function(m){this._diffRender=new h(m,this._imageUrlPattern,this._loadController);
return this._diffRender.init()};g.applyFrame=function(n){var m=this.context;m.drawImage(n,0,0)
};g.calculateRenderCount=function(m,n){var o=0;if(Math.abs(n-m)>=n){m=1;o=1}else{if(Math.abs(n-m)>=(this.frameCount-n)&&this._images[1]){m=this.frameCount-2;
o=1}}if(n>0&&n<this.frameCount-1){return Math.abs(m-n)+o}else{return o}};g.compositeFrames=function(m,o){var n=new j();
o=(this.frameCount<o)?this.frameCount-1:(o<0)?0:o;m=(this.frameCount-2<m)?this.frameCount-2:(m<0)?0:m;
var p;if(l){console.groupCollapsed("Rendering diff frames: "+m+"..."+o)}if(Math.abs(o-m)>=o){m=1;
if(l){console.log("applying start keyframe")}this.applyFrame(this._images[0])}else{if(Math.abs(o-m)>=(this.frameCount-o)&&this._images[1]){m=this.frameCount-2;
if(l){console.log("applying end keyframe")}this.applyFrame(this._images[1])}}p=(m>o)?-1:(m<o)?1:0;
if(o>0&&o<this.frameCount-1){while(m!==o){this._diffRender.renderDiff(this.canvas,m);
m+=p}}if(l){console.groupEnd()}n.resolve(m);return n.promise()};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(g,{frameCount:{get:function(){return this._diffRender.frames.length+2
},enumerable:true},canvas:{get:function(){return this._canvas},set:function(m){return this._canvas=m
},enumerable:true},mainCompositor:{get:function(){var m=this;while(m._compositor){m=m._compositor
}return m},enumerable:true}});c.exports=a},{"../diff/Render":138}],121:[function(b,c,a){var d,g=b("../../../stats/Benchmark");
function f(h){this._compositor=h}d=f.prototype;d.init=function(h){var i=new g("init");
i.start();return this._compositor.init.apply(this._compositor,arguments).then(i.end.bind(i))
};d.applyFrame=function(){var h=new g("applyFrame");h.start();this._compositor.applyFrame.apply(this._compositor,arguments);
h.end.bind(h)};d.calculateRenderCount=function(){return this._compositor.calculateRenderCount.apply(this._compositor,arguments)
};d.compositeFrames=function(){var h=new g("renderFrames");h.start();return this._compositor.compositeFrames.apply(this._compositor,arguments).then(h.end.bind(h))
};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(d,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(h){return this._compositor.canvas=h
},enumerable:true}});f.prototype=d;c.exports=f},{"../../../stats/Benchmark":142}],122:[function(d,f,c){var g,b=false;
function a(i,h){this._compositor=i;this._keyframeInterval=h||8;this._keyframes=[]
}g=a.prototype;g._getClosestKeyframe=function(h){var i=h%this._keyframeInterval,j=Math.floor(h/this._keyframeInterval)+((i>(this._keyframeInterval/2))?1:0);
return j};g._getFrameFromKeyframe=function(h){return h*this._keyframeInterval};
g._saveKeyframe=function(j){var h,i=Math.floor(j/this._keyframeInterval);if(j%this._keyframeInterval===0&&!this._keyframes[i]){if(b){console.log("saving keyframe "+j)
}h=document.createElement("canvas");h.width=this._compositor.canvas.width;h.height=this._compositor.canvas.height;
h.getContext("2d").drawImage(this._compositor.canvas,0,0);this._keyframes[i]=h}};
g.init=function(h){return this._compositor.init.apply(this._compositor,arguments)
};g.applyFrame=function(){this._compositor.applyFrame.apply(this._compositor,arguments)
};g.calculateRenderCount=function(h,i){h=this._getFrameFromKeyframe(this._getClosestKeyframe(i));
return this._compositor.calculateRenderCount(h,i)+1};g.compositeFrames=function(h,j){var k=this._getClosestKeyframe(j);
if(b){console.groupCollapsed("Rendering frames: "+h+"..."+j)}if(this._keyframes[k]&&(this._compositor.calculateRenderCount(h,j)>this.calculateRenderCount(h,j))){h=this._getFrameFromKeyframe(k);
if(b){console.log("applying prerendered keyframe: "+h)}this.applyFrame(this._keyframes[k]);
return this._compositor.compositeFrames(h,j).then(function i(){if(b){console.groupEnd()
}})}else{return this._compositor.compositeFrames(h,j).then(function i(){if(b){console.groupEnd()
}},null,this._saveKeyframe.bind(this))}};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(g,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(h){return this._compositor.canvas=h
},enumerable:true}});f.exports=a},{}],123:[function(f,g,b){var h,a=false,d=f("../../keyframe/Render"),c=f("ac-deferred").Deferred;
function i(j){this._compositor=j;this._flowDataProvider=this.mainCompositor._loadController._loaders.manifest
}h=i.prototype;h.init=function(j){this._keyframeDiffRender=new d(this._flowDataProvider._data,this.mainCompositor._imageUrlPattern);
return this._keyframeDiffRender.init()};h.applyFrame=function(j){return this._compositor.applyFrame.apply(this._compositor,arguments)
};h.applyKeyframe=function(j,k){this._keyframeDiffRender.renderKeyframe(this.canvas,j,k)
};h.compositeFrames=function(j,l){if(!this._isKeyframeDiff(l-1)){return this._compositor.compositeFrames.apply(this._compositor,arguments)
}var k=new c();if(a){console.groupCollapsed("Rendering keyframe diff image: "+(j-1))
}this.applyKeyframe(l-1);if(a){console.groupEnd()}k.resolve(j-1);return k.promise()
};h._isKeyframeDiff=function(j){return j in this._keyframeDiffRender._loader._keyframes
};h.calculateRenderCount=function(j,k){return this._compositor.calculateRenderCount.apply(this._compositor,arguments)
};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(h,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(j){return this._compositor.canvas=j
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});g.exports=i},{"../../keyframe/Render":140}],124:[function(d,f,b){var g,a=false,c=d("ac-deferred").Deferred;
function h(i){this._compositor=i;this._frames=this.mainCompositor._loadController._loaders.manifest._data.frames;
this._superframeInterval=this.mainCompositor._diffRender.flowData.superframeFrequency
}g=h.prototype;g.init=function(i){return this._compositor.init.apply(this._compositor,arguments)
};g.applyFrame=function(i){return this._compositor.applyFrame.apply(this._compositor,arguments)
};g.applyKeyframe=function(i,j){this._compositor.applyKeyframe.apply(this._compositor,arguments)
};g.compositeFrames=function(i,l){var m,k,j=new c();if(l<1||l>this.frameCount-2){return this._compositor.compositeFrames.apply(this._compositor,arguments)
}if(this._isKeyframeDiff(l-1)){m=Math.abs(i-l)===1?true:false;if(a){console.groupCollapsed("Drawing superKeyframe image: "+(l-1))
}this.applyKeyframe(l-1,m);if(a){console.groupEnd()}j.resolve(i-1);return j.promise()
}if(Math.abs(l-i)>this._superframeInterval){k=this._getShortestRender(i,l);if(this._isKeyframeDiff(k-1)||k<=0||k>=this.frameCount-2){return this._compositeFromSuperKeyframe(k,l)
}}if(a){console.log("SuperKeyframe compositor handing off to slave compositor: fromFrame:"+i+" toFrame:"+l)
}return this._compositor.compositeFrames.apply(this._compositor,[i,l])};g._getShortestRender=function(i,k){var m=this._compositor.calculateRenderCount,l=this._getClosestSuperKeyframe(k-1),j=m.apply(this._compositor,[l,k])+1,n=m.apply(this._compositor,[i,k]);
if(j<=n){return l}else{return i}};g._compositeFromSuperKeyframe=function(m,k){var i=this.canvas.getContext("2d"),j=(m<=0)?this.mainCompositor._images[0]:(m>=this.frameCount-2?this.mainCompositor._images[1]:this._frames[m-1].image),l;
if(a){console.log("Drawing superKeyframe for composite base: superKeyframe "+(m-1))
}i.drawImage(j,0,0);return this._compositor.compositeFrames.call(this._compositor,m,k)
};g._getClosestSuperFrame=function(i){return Math.round(i/this._superframeInterval)*this._superframeInterval
};g._getClosestSuperKeyframe=function(k){var n,o,m,l,j=this._frames.length;if(k<j+1&&k>0){l=k-1;
while(l>=0){if(this._frames[l].type==="keyframe"){n=l+1;break}l-=1}l=k+1;while(l<=j-1){if(this._frames[l].type==="keyframe"){o=l+1;
break}l+=1}}n=n?n:0;o=o?o:this.frameCount;m=(k-n)<(o-k)?n:o;return m};g._isKeyframeDiff=function(i){return this._compositor._isKeyframeDiff.apply(this._compositor,arguments)
};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(g,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(i){return this._compositor.canvas=i
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});f.exports=h},{}],125:[function(c,d,b){var f,a=false;function g(i,h){this._compositor=i;
this._superframeInterval=h||4}f=g.prototype;f._getClosestSuperframe=function(h){return Math.round(h/this._superframeInterval)*this._superframeInterval
};f.init=function(h){this._screenCanvas=h};f.applyFrame=function(){this._compositor.applyFrame.apply(this._compositor,arguments)
};f.calculateRenderCount=function(h,j){var i=this._getClosestSuperframe(h);if(Math.abs(i-j)>this._superframeInterval/2){h=i+((h>j)?-1:1)*this._superframeInterval;
return this.calculateRenderCount(h,j)+1}else{return Math.abs(i-j)+1}};f.compositeFrames=function(h,k){var l,i;
if(k<=0||k>=this.frameCount-2){this._compositor.compositeFrames(h,k)}if(h>this.frameCount-2){h=this.frameCount-2
}else{if(h<=0){h=1}}i=this._getClosestSuperframe(h);if(a){console.groupCollapsed("Rendering : "+h+"..."+k)
}if(this._compositor.calculateRenderCount(h,k)>this.calculateRenderCount(h,k)){if(a){console.groupCollapsed("Rendering (superframe) : "+i)
}l=this._compositor.compositeFrames(i,i).then(function j(){if(a){console.groupEnd()
}var m=i+((h>k)?-1:1)*this._superframeInterval;this._compositor.compositeFrames(i,m).then(function(){return this.compositeFrames(m,k)
}.bind(this))}.bind(this))}else{if(a){console.groupCollapsed("Rendering (final frames) : "+h+"..."+k)
}l=this._compositor.compositeFrames(h,k).then(function j(){if(a){console.groupEnd()
}}.bind(this))}l.then(function j(){if(a){console.groupEnd()}}.bind(this));return l
};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(f,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(h){return this._compositor.canvas=h
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});d.exports=g},{}],126:[function(d,f,c){var h,g=d("ac-event-emitter").EventEmitter,a=d("./MultithreadProcess"),i=d("./MultithreadProcessInterface");
var b=function(j){g.call(this);this._function=j};h=b.prototype=new g(null);h.exec=function(l,k){k=k||{};
if(!this._processURL){this._processURL=this._createThreadProcessURL(this._function)
}if(this._process){this.terminateProcess()}if(!this._process){this._process=new window.Worker(this._processURL);
this._process.onmessage=this._onMessage.bind(this)}var j;if(k.transfer){j=[l]}this._process.postMessage(l,j);
return this};h.run=function(n,m,k){k=k||{};var l={name:n,data:m||{}};var j;if(k.transfer){j=[l]
}this._process.postMessage(l,j);this.trigger(n,m)};h.destroy=function(){this.terminateProcess();
this._function=null;this._processURL=null;return this};h.terminateProcess=function(){if(this._process){this._process.terminate();
this._process=null}return this};h._createThreadProcessURL=function(l){var k=this._compileProcess(l),j=new window.Blob([k],{type:"text/javascript"});
return this._getURLObject().createObjectURL(j)};h._getURLObject=function(){return window.URL||window.webkitURL||null
};h._compileProcess=function(l){var o=a.toString();var j=/(['|"]){{INTERFACE}}\1/,k=/(['|"]){{PROCESS}}\1/;
o=o.replace(j,"("+i.toString()+")();");o=o.replace(k,l.toString());var m="(",n=")();";
return m+o+n};h._handleTrigger=function(j,k){this.trigger(j,k)};h._onMessage=function(l){if(!l.data){return
}var j=l.data.evt,k=l.data.data;if(j==="__trigger__"){this._handleTrigger(k.trigger,k.data)
}return this};f.exports=b},{"./MultithreadProcess":127,"./MultithreadProcessInterface":128}],127:[function(c,d,b){var a=function(){var g="{{PROCESS}}",f="{{INTERFACE}}";
this.processInstance;this.onmessage=function(j,h,i){i=i||{};if(!h.processInstance){h.processInstance=new j(this)
}else{h.processInstance._onMessage(i.data.name,i.data.data)}}.bind(f,g,this)};d.exports=a
},{}],128:[function(b,c,a){var d=function(){return{trigger:function(i,h,f){var g={trigger:i,data:h};
this._post("__trigger__",g,f)},_post:function(f,j,h){h=h||{};var g,i={evt:f,data:j};
if(h.transfer){g=[j]}postMessage(i,g)}}};c.exports=d},{}],129:[function(b,c,a){var d;
var f=function(g){this._interface=g;this.trigger=function(j,i,h){this._interface.trigger(j,i,h);
return this};this.renderFrameDiffs=function(m){var j=m.binaryFrame,o=m.compositingData,n=m.frameData,l=m.sourceImagesData,h=n.length,k;
for(k=0;k<h;k++){j=this._applyBlocksToBinaryFrame(j,n[k],l,o)}this.trigger("frameReady",j)
};this._applyBlocksToBinaryFrame=function(i,t,z,A){var l=t.block,G=Math.floor(l/A.blocksPerFullDiff),p=A.imageWidth,F=t.length,D=A.columnsInCanvas,C=A.canvasWidth,E=l%A.blocksPerFullDiff,h=p/A.blockSize;
var w=(E%h)*A.blockSize,v=Math.floor(E/(h||1))*A.blockSize,o=(t.location%D)*A.blockSize,n=Math.floor(t.location/D)*A.blockSize;
var r,q,u,k,j,B,s,m;while(F>0){s=Math.min((F*A.blockSize),C-o,p-w);m=s/A.blockSize;
k=z[G];for(q=0;q<A.blockSize;q++){for(r=0;r<s;r++){j=(v+q)*p+(w+r);B=(n+q)*C+(o+r);
i.buf32[B]=k[j]}}F-=m;if(F>0){if((w+=s)>=p){w=0;v+=A.blockSize}if((E+=m)>=A.blocksPerFullDiff){E=0;
w=0;v=0;G+=1;if(G===A.imagesRequired-1){p=A.imageWidth}}if((o+=s)>=C){o=0;n+=A.blockSize
}l+=m}}return i};this._onMessage=function(i,h){if(typeof this[i]==="function"){this[i](h)
}}};c.exports=f},{}],130:[function(b,c,a){function d(f,g){this.location=f;this.length=g
}c.exports=d},{}],131:[function(c,d,b){function a(){}d.exports=a},{}],132:[function(c,d,b){var h=c("./Manifest"),a=c("./Block"),g;
var f={parseData:function(i){g=0;var j=i.frames.map(this._parseFrame,this);return Object.create(h.prototype,{version:{value:i.version},framecount:{value:i.frameCount},blockSize:{value:i.blockSize},imagesRequired:{value:i.imagesRequired},reversible:{value:i.reversible},superframeFrequency:{value:i.superframeFrequency},frames:{value:j}})
},_valueForCharAt:function(k,i){var j=k.charCodeAt(i);if(j>64&&j<91){return j-65
}if(j>96&&j<123){return j-71}if(j>47&&j<58){return j+4}if(j===43){return 62}if(j===47){return 63
}throw"Invalid Bas64 character: "+k.charAt(i)},_createNumberFromBase64Range:function(m,i,l){var k=0,j;
while(l--){j=this._valueForCharAt(m,i++);k+=(j<<l*6)}return k},_parseFrame:function(k){var l,n=[],k=k.value||k,m,j;
for(l=0;l<k.length;l+=5){j=this._createNumberFromBase64Range(k,l,3);m=this._createNumberFromBase64Range(k,l+3,2);
n.push(Object.create(a.prototype,{location:{value:j,enumerable:true},length:{value:m,enumerable:true},block:{value:(g+=m)-m,enumerable:true}}))
}return n}};d.exports=f},{"./Block":130,"./Manifest":131}],133:[function(c,d,b){var g,a=c("ac-ajax").Ajax,h=c("../processor");
function f(i,j){this._url=i;this._ajaxAdaptor=j||new a()}g=f.prototype;g.load=function(){return this._ajaxAdaptor.get(this._url).then(function(j){try{var i=j.response||j.responseText;
return JSON.parse(i)}catch(k){if(DEBUG){console.log("Failed to parse manifest data")
}}}).then(function(i){this._data=i;return h.parseData(i)}.bind(this))};d.exports=f
},{"../processor":132,"ac-ajax":87}],134:[function(c,d,a){var g,b=c("ac-deferred").Deferred;
var f=function(h){if(typeof h==="string"){h=[h]}this.srcArr=h};g=f.prototype;g._request=function(j){var h=new b();
var i=new XMLHttpRequest();i.addEventListener("load",function(){var k=i.response;
h.resolve(k)});i.responseType="arrayBuffer";i.open("get",j,true);i.send();return h.promise()
};g.load=function(){this._deferred=new b();var l=[];var k,j=this.srcArr,h=j.length;
for(k=0;k<h;k++){l.push(this._request(j[k]))}b.all(l).then(function(i){this._deferred.resolve(i)
}.bind(this));return this._deferred.promise()};d.exports=f},{}],135:[function(c,b,d){var i=false;
var g,k=c("./Loader"),h=c("ac-deferred").Deferred,a=c("../compositor/multithread/MultithreadController"),f=c("../compositor/multithread/MultithreadRenderer");
function j(m,l){this.flowData=m;this.flowData.imageUrlPattern=l;this.ArrayBufferCompositor=document.createElement("canvas");
this.ArrayBufferCompositorContext=this.ArrayBufferCompositor.getContext("2d");this.sourceImagesData={};
this._processor=new a(f);this._processor.exec();window.processor=this._processor
}g=j.prototype;g._storeImages=function(l){if(i){console.log("loaded images")}this.images=l;
this._blocksPerFullDiff=(l[0].width/this.flowData.blockSize)*(l[0].height/this.flowData.blockSize);
return(new h()).resolve()};g._getImageDataAsArrayBuffer=function(n,o,m){m=m||o;
this.ArrayBufferCompositor.width=o;this.ArrayBufferCompositor.height=m;this.ArrayBufferCompositorContext.drawImage(n,0,0);
var l=new Uint32Array(this.ArrayBufferCompositorContext.getImageData(0,0,o,m).data.buffer);
return l};g._processDataConstants=function(){this._compositingConstants={images:[]};
var m,l=this.images.length;for(m=0;m<l;m++){this._compositingConstants.images[m]={};
this._compositingConstants.images[m].width=this.images[m].width}return(new h()).resolve()
};g._setFrameRequirements=function(q){var p=q[0],n=q[q.length-1];var o=this._getImageIndexOfBlock(p.block),l=this._getImageIndexOfBlock(n.block+n.length);
var m,r={};for(m=o;m<l+1;m++){if(this.sourceImagesData[m]){r[m]=this.sourceImagesData[m]
}else{r[m]=this._getImageDataAsArrayBuffer(this.images[m],this.images[m].width)
}}this.sourceImagesData=r;return r};g._getImageIndexOfBlock=function(l){return Math.floor(l/this._blocksPerFullDiff)
};g._setCompositingData=function(l,m){this._compositingData={imageWidth:this._compositingConstants.images[0].width,canvasWidth:m.canvas.width,canvasHeight:m.canvas.height,blocksPerFullDiff:this._blocksPerFullDiff,blockSize:this.flowData.blockSize,imagesRequired:this.flowData.imagesRequired};
var n=m.getImageData(0,0,this._compositingData.canvasWidth,this._compositingData.canvasHeight).data;
this._compositingData.columnsInCanvas=this._compositingData.canvasWidth/this.flowData.blockSize,this._compositingData.imageData=new Uint8ClampedArray(n)
};g._createBinaryFrame=function(n,m,l){return{buf8:n,buf32:new Uint32Array(n.buffer),width:m,height:l}
};g._getBinaryImageArrayLength=function(l){return l.canvasWidth};g._compositeBinaryFrame=function(r,q){var o,l=r.length,n=new h();
var p=this._setFrameRequirements(r);var m;if(this._lastBinaryFrame){m=this._lastBinaryFrame
}else{m=this._createBinaryFrame(q.imageData,q.canvasWidth,q.canvasHeight)}this._processor.run("renderFrameDiffs",{binaryFrame:m,frameData:r,compositingData:q,sourceImagesData:p});
this._processor.once("frameReady",n.resolve.bind(n));return n.promise()};g._getSourceImageAs32Bit=function(l){return new Uint32Array(this.sourceImagesData[l].data.buffer)
};g._applyBlocksToBinaryFrame=function(m,z,D){var p=z.block,J=Math.floor(p/this._blocksPerFullDiff),t=this._compositingConstants.images[J].width,I=z.length,G=D.columnsInCanvas,F=D.canvasWidth,H=p%this._blocksPerFullDiff,l=t/this.flowData.blockSize;
var C=(H%l)*this.flowData.blockSize,B=Math.floor(H/(l||1))*this.flowData.blockSize,s=(z.location%G)*this.flowData.blockSize,r=Math.floor(z.location/G)*this.flowData.blockSize;
var v,u,A,o,n,E,w,q;while(I>0){w=Math.min((I*this.flowData.blockSize),F-s,t-C);
q=w/this.flowData.blockSize;o=this.sourceImagesData[J];for(u=0;u<this.flowData.blockSize;
u++){for(v=0;v<w;v++){n=(B+u)*t+(C+v);E=(r+u)*F+(s+v);m.buf32[E]=o[n]}}I-=q;if(I>0){if((C+=w)>=t){C=0;
B+=this.flowData.blockSize}if((H+=q)>=this._blocksPerFullDiff){H=0;C=0;B=0;J+=1;
if(J===this.flowData.imagesRequired-1){t=this._compositingConstants.images[J].width
}}if((s+=w)>=F){s=0;r+=this.flowData.blockSize}p+=q}}return m};g.init=function(){console.log("LOADED BINARY");
if(i){console.log("load images")}return new k(this.flowData.imageUrlPattern,this.flowData.imagesRequired).load({binary:true}).then(this._storeImages.bind(this)).then(this._processDataConstants.bind(this))
};g.renderDiff=function(n,p){var o=n.getContext("2d"),m=new h();if(!this._compositingData){this._setCompositingData(n,o)
}p-=1;if(i){this._frameToRender=p}var l=this._compositeBinaryFrame(this.frames[p],this._compositingData);
l.then(function(r,q){this._lastBinaryFrame=q;r.resolve(q)}.bind(this,m));return m.promise()
};g.getBinaryDataFromFlowDataBlock=function(l){};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(g,{frames:{get:function(){return this.flowData.frames},set:function(l){this.flowData.frames=l
},enumerable:true}});b.exports=j},{"../compositor/multithread/MultithreadController":126,"../compositor/multithread/MultithreadRenderer":129,"./Loader":137}],136:[function(f,g,c){var h,b=false,d=f("ac-deferred").Deferred;
function a(k,i,j){this.flowData=k;this.flowData.imageUrlPattern=i;this._loadController=j;
this.ArrayBufferCompositor=document.createElement("canvas");this.ArrayBufferCompositorContext=this.ArrayBufferCompositor.getContext("2d");
this.sourceImagesData={};this._forceBinaryComposite=true}h=a.prototype;h._storeImages=function(i){if(b){console.log("loaded images")
}this.images=i;this._blocksPerFullDiff=(i[0].width/this.flowData.blockSize)*(i[0].height/this.flowData.blockSize);
return(new d()).resolve()};h._getImageDataAsArrayBuffer=function(k,l,j){j=j||l;
if(this.ArrayBufferCompositor.width!==l){this.ArrayBufferCompositor.width=l}if(this.ArrayBufferCompositor.height!==j){this.ArrayBufferCompositor.height=j
}this.ArrayBufferCompositorContext.drawImage(k,0,0);var i={buf8:this.ArrayBufferCompositorContext.getImageData(0,0,l,j).data};
i.buf32=new Uint32Array(i.buf8.buffer);return i};h._processDataConstants=function(){this._compositingConstants={images:[]};
var k,j=this.images.length;for(k=0;k<j;k++){this._compositingConstants.images[k]={};
this._compositingConstants.images[k].width=this.images[k].width}return(new d()).resolve()
};h._setFrameRequirements=function(p){var o=p[0],l=p[p.length-1];var n=this._getImageIndexOfBlock(o.block),j=this._getImageIndexOfBlock(l.block+l.length),m=j+1;
var k,q={};for(k=n;k<m;k++){if(this.sourceImagesData[k]){q[k]=this.sourceImagesData[k]
}else{q[k]=this._getImageDataAsArrayBuffer(this.images[k],this.images[k].width)
}}this.sourceImagesData=q};h._getImageIndexOfBlock=function(i){return Math.floor(i/this._blocksPerFullDiff)
};h._setCompositingData=function(i,j){this._compositingData={imageWidth:this._compositingConstants.images[0].width,canvasWidth:j.canvas.width,canvasHeight:j.canvas.height};
var k=j.getImageData(0,0,this._compositingData.canvasWidth,this._compositingData.canvasHeight).data;
this._compositingData.columnsInCanvas=this._compositingData.canvasWidth/this.flowData.blockSize,this._compositingData.imageData=new Uint8ClampedArray(k)
};h._createBinaryFrame=function(k,j,i){return{buf8:k,buf32:new Uint32Array(k.buffer),width:j,height:i}
};h._getBinaryImageArrayLength=function(i){return i.canvasWidth};h._compositeBinaryFrame=function(n,m){var l,j=n.length;
this._setFrameRequirements(n);var k;if(this._lastBinaryFrame&&!this._forceBinaryComposite){k=this._lastBinaryFrame
}else{k=this._createBinaryFrame(m.imageData,m.canvasWidth,m.canvasHeight);if(this._renderOperation){this._cleanBinaryFrame=this._cloneBinaryFrame(k);
k=this.forceApplyFilter(k,m)}else{if(this._cleanBinaryFrame){this._cleanBinaryFrame=null
}}this._forceBinaryComposite=false}if(this._beforeRenderOperation){k=this._beforeRenderOperation(k)
}for(l=0;l<j;l++){k=this._applyBlocksToBinaryFrame(k,n[l],m)}return k};h._applyBlocksToBinaryFrame=function(j,A,F){var s=this.flowData.blockSize,C=this._blocksPerFullDiff,H=this.flowData.imagesRequired,n=A.block,M=Math.floor(n/C),r=this._compositingConstants.images[M].width,L=A.length,J=F.columnsInCanvas,I=F.canvasWidth,m=F.canvasHeight,K=n%C,i=r/s;
var E=(K%i)*s,D=Math.floor(K/(i||1))*s,q=(A.location%J)*s,p=Math.floor(A.location/J)*s;
var w,v,u,t,B,l,k,G,z,o;while(L>0){z=Math.min((L*s),I-q,r-E);o=z/s;l=this.sourceImagesData[M];
for(v=0;v<s;v++){for(w=0;w<z;w++){u=q+w;t=p+v;k=(D+v)*r+(E+w);G=t*I+u;if(this._renderOperation){this._cleanBinaryFrame.buf32[G]=l.buf32[k];
l=this._renderOperation(l,(k*4),u,t,I,m)}j.buf32[G]=l.buf32[k]}}L-=o;if(L>0){if((E+=z)>=r){E=0;
D+=s}if((K+=o)>=C){K=0;E=0;D=0;M+=1;if(M===H-1){r=this._compositingConstants.images[M].width
}}if((q+=z)>=I){q=0;p+=s}n+=o}}return j};h._cloneBinaryFrame=function(i){var j=i.buf8.buffer.slice(0);
return{buf8:new Uint8ClampedArray(j),buf32:new Uint32Array(j),width:i.width,height:i.height}
};h.init=function(){if(b){console.log("load images")}return this._loadController.loadDiffs().then(this._storeImages.bind(this)).then(this._processDataConstants.bind(this))
};h.renderDiff=function(j,l,k){var k=k||j.getContext("2d");if(!this._compositingData||this._forceBinaryComposite){this._setCompositingData(j,k)
}l-=1;if(b){this._frameToRender=l}var i=this._compositeBinaryFrame(this.frames[l],this._compositingData);
this._lastBinaryFrame=i;return new d().resolve(i)};h.forceBinaryComposite=function(){this._forceBinaryComposite=true;
return this};h.forceApplyFilter=function(q,j){if(this._renderOperation){var n,s,r,l,k,m=j.canvasWidth,o=j.canvasHeight,p=q.buf32.length;
for(n=0;n<p;n++){s=n%m;if(n>0){r=Math.floor(n/m)}else{r=0}q=this._renderOperation(q,(n*4),s,r,m,o)
}}return q};h.forceKeyframeRender=function(j,k){this._setCompositingData(j,k);var l=this._compositingData,i=this._createBinaryFrame(l.imageData,l.canvasWidth,l.canvasHeight);
if(this._renderOperation){this._cleanBinaryFrame=this._cloneBinaryFrame(i);i=this.forceApplyFilter(i,l)
}return i};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(h,{frames:{get:function(){return this.flowData.frames
},set:function(i){this.flowData.frames=i},enumerable:true},_beforeRenderOperation:{value:undefined,enumerable:false,writable:true},_renderOperation:{value:undefined,enumerable:false,writable:true},beforeRenderOperation:{get:function(){return this._beforeRenderOperation
},set:function(i){if(typeof i==="function"){this._beforeRenderOperation=i;return
}this._beforeRenderOperation=undefined},enumerable:true},renderOperation:{get:function(){return this._renderOperation
},set:function(i){if(typeof i==="function"){this.forceBinaryComposite();this._renderOperation=i;
return}this._renderOperation=undefined;this.forceBinaryComposite()},enumerable:true}});
g.exports=a},{}],137:[function(c,d,b){var g,a=c("ac-asset-loader").AssetLoader,f=c("./BinaryLoader");
function h(l,j){var k,n,m=l.match(/#/g).length;this.imagesUrls=[];if(!j){throw new Error("0 images provided")
}for(k=1;k<=j;k++){n="0000"+k;n=n.substring(n.length-m);this.imagesUrls.push(l.replace(/#{2,}/g,n))
}}g=h.prototype;g.load=function(i){i=i||{};return new a(this.imagesUrls).load()
};d.exports=h},{"./BinaryLoader":134,"ac-asset-loader":97}],138:[function(f,g,c){var h,b=false,d=f("ac-deferred").Deferred;
function a(k,i,j){this.flowData=k;this.flowData.imageUrlPattern=i;this._loadController=j
}h=a.prototype;h._storeImages=function(i){if(b){console.log("loaded images")}this.images=i;
this._blocksPerFullDiff=(i[0].width/this.flowData.blockSize)*(i[0].height/this.flowData.blockSize);
return(new d()).resolve()};h._applyDiffRange=function(k,r){var p=r.block,l=r.length,j=k.canvas.width/this.flowData.blockSize,n=Math.floor(p/this._blocksPerFullDiff),w=this.images[n].width,i=p%this._blocksPerFullDiff,v=w/this.flowData.blockSize,u=(i%v)*this.flowData.blockSize,t=Math.floor(i/(v||1))*this.flowData.blockSize,q=(r.location%j)*this.flowData.blockSize,o=Math.floor(r.location/j)*this.flowData.blockSize,m,s;
while(l){m=Math.min((l*this.flowData.blockSize),k.canvas.width-q,w-u);s=m/this.flowData.blockSize;
if(b){if(typeof this.renderDebugger!=="undefined"&&this._frameToRender>0){this.renderDebugger.registerComparison(this._frameToRender,{image:n,block:p,x:u,y:t})
}}k.drawImage(this.images[n],u,t,m,this.flowData.blockSize,q,o,m,this.flowData.blockSize);
l-=s;if(l){if((u+=m)>=w){u=0;t+=this.flowData.blockSize}if((i+=s)>=this._blocksPerFullDiff){i=0;
u=0;t=0;n+=1;if(n===this.flowData.imagesRequired-1){w=this.images[n].width}}if((q+=m)>=k.canvas.width){q=0;
o+=this.flowData.blockSize}p+=s}}};h.init=function(){if(b){console.log("load images")
}return this._loadController.loadDiffs().then(this._storeImages.bind(this))};h.renderDiff=function(i,l){var j=i.getContext("2d");
l-=1;if(b){this._frameToRender=l;console.log("applying diff frame : "+(l+1))}this.frames[l].forEach(function k(m){this._applyDiffRange(j,m)
}.bind(this))};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(h,{frames:{get:function(){return this.flowData.frames},set:function(i){this.flowData.frames=i
},enumerable:true}});g.exports=a},{}],139:[function(f,g,c){var h,a=f("ac-asset-loader").AssetLoader,d=f("ac-deferred").Deferred;
function b(i,l){var k,j=i.match(/#/g).length;this._keyframes={};i=i.replace(/([^#]+)(#+)(\..*)/,"$1key_$2$3");
this._imageUrls=[];if(l.frames){l.frames.forEach(function(n,m){if(n.type==="keyframe"){k="0000"+m;
k=k.substring(k.length-j);this._imageUrls.push(i.replace(/#+/g,k));this._keyframes[m]=n
}}.bind(this))}}h=b.prototype;h.load=function(){if(this._imageUrls.length>0){return new a(this._imageUrls).load()
}return(new d()).resolve()};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(h,{keyframes:{get:function(){return this._keyframes},enumerable:true}});
g.exports=b},{"ac-asset-loader":97}],140:[function(c,d,b){var f,a=false,h=c("./Loader");
function g(j,i){this.flowData=j;this.flowData.imageUrlPattern=i}f=g.prototype;f._storeImages=function(j){var l=0,m;
if(j&&j.length>0){if(a){console.log("loaded keyframe diff images")}for(var k in this._loader._keyframes){if(this._loader._keyframes.hasOwnProperty(k)){m=j[l];
this._loader._keyframes[k].image=m;l+=1}}}if(a){if(!j||j.length===0){console.log("no keyframe diff images to load")
}}};f.init=function(){if(a){console.log("loading keyframe diff images")}this._loader=new h(this.flowData.imageUrlPattern,this.flowData);
return this._loader.load().then(this._storeImages.bind(this))};f.renderKeyframe=function(k,j,r){var i=k.getContext("2d"),l=this._loader.keyframes[j],m=l.image,p=l.x,o=l.y,q=l.width,n=l.height;
if(a){console.log("applying keyframe diff image: "+j);console.log("x:"+p+" y:"+o+" w:"+q+" h:"+n)
}if(r===true){if(a){console.log("drawing superKeyframe sub-rectangle")}i.drawImage(m,p,o,q,n,p,o,q,n)
}else{if(this.flowData.reversible){if(a){console.log("drawing superKeyframe full image")
}i.drawImage(m,0,0)}else{if(a){console.log("drawing keyframe full image")}i.drawImage(m,p,o,q,n)
}}};d.exports=g},{"./Loader":139}],141:[function(b,c,a){function d(i,j,m,k,n){var g,h,l,f;
n=n||{};n={keyframeCache:(typeof n.keyframeCache==="undefined")?8:n.keyframeCache,benchmark:(typeof n.benchmark==="undefined")?false:n.benchmark,preload:(typeof n.preload==="undefined")?true:n.preload,renderType:n.renderType||"default",multithread:n.multithread||false};
j=j||[i.getAttribute("data-start-frame")];if(i.getAttribute("data-end-frame")){j.push(i.getAttribute("data-end-frame"))
}m=m||i.getAttribute("data-image-url-pattern");l=(typeof k==="string")?new FlowDataProviderAsync(k):new FlowDataProviderSync(k);
if(n.renderType==="binary"){g=new AC_BinaryCompositor(j,m,l,n.multithread)}else{if(n.renderType==="default"){g=new AC_FlowCompositorSequence(j,m,l)
}}h=new AC_FlowPlayer(i,new AC_Flow(g,n));if(n.preload){h.load()}return h}c.exports=d
},{}],142:[function(b,c,a){var f;function d(g){this.name=g}f=d.prototype;f.start=function(){if(DEBUG){console.log("▼▼▼ start "+this.name+" benchmark");
this.startTime=new Date().getTime();console.time(this.name)}};f.end=function(){if(DEBUG){this.endTime=new Date().getTime();
console.log("▲▲▲ end "+this.name+" benchmark "+(this.endTime-this.startTime)/1000+" sec");
console.time(this.timeEnd)}};c.exports=d},{}],143:[function(b,c,a){c.exports=b(10)
},{}],144:[function(b,c,a){c.exports=b(11)},{"./ac-object/clone":145,"./ac-object/create":146,"./ac-object/defaults":147,"./ac-object/extend":148,"./ac-object/getPrototypeOf":149,"./ac-object/isDate":150,"./ac-object/isEmpty":151,"./ac-object/isRegExp":152,"./ac-object/toQueryParameters":153}],145:[function(b,c,a){c.exports=b(12)
},{"./extend":148}],146:[function(b,c,a){c.exports=b(13)},{}],147:[function(b,c,a){c.exports=b(14)
},{"./extend":148}],148:[function(b,c,a){c.exports=b(15)},{}],149:[function(b,c,a){c.exports=b(16)
},{}],150:[function(b,c,a){c.exports=b(17)},{}],151:[function(b,c,a){c.exports=b(18)
},{}],152:[function(b,c,a){c.exports=b(19)},{}],153:[function(b,c,a){c.exports=b(20)
},{qs:143}],154:[function(c,f,a){var d=c("./ac-media-object/create");var b=c("./ac-media-object/cname");
f.exports={create:d,cname:b}},{"./ac-media-object/cname":164,"./ac-media-object/create":165}],155:[function(c,b,f){var i=c("ac-event-emitter").EventEmitter;
var a=c("../eventNames");var h=2;function j(){this._items=[];this._loadingItem=null;
this._active=false}var g=j.prototype=new i();g.load=function(){this._active=true;
return this._loadNext()};g._loadNext=function(){if(this._items.length===0){return
}this._loadingItem=this._items.shift();this._loadItem(this._loadingItem)};g._loadItem=function(k){var l;
this._loadingItem=k;l=k.asset.load();l.then(this._itemLoaded.bind(this,k));return l
};g._itemLoaded=function(l,k){this.trigger(a.progress,{asset:l.asset,binaries:k});
if(this._active===true){this._loadNext()}};g.pause=function(){if(this._loadingItem){this._loadingItem.asset.pause();
this._items.unshift(this._loadingItem);this._loadingItem=null}this._active=false
};g.getItems=function(){return this._items};g.remove=function(n){var m=this._active;
var l;var o;var k=null;if(this._loadingItem&&this._loadingItem.asset===n){o=this._loadingItem;
this.pause()}for(l=0;l<this._items.length;l+=1){if(this._items[l].asset===n){o=this._items[l];
k=l;break}}o.asset.destroy();if(k!==null){this._items.splice(k,1)}if(m&&this._active===false){this.load()
}};g.add=function(m,k){var l=this._active;var n=true;k=(typeof k==="number")?k:h;
if(this._loadingItem&&this._loadingItem.priority<=k){n=false}if(n===true){this.pause()
}this._items.push({asset:m,priority:k});this._sort();if(l&&this._active===false){this.load()
}};g._sort=function(){this._items.sort(function(l,k){if(l.priority<k.priority){return -1
}return 1})};var d=new j();d.load();d.LoadingQueue=j;b.exports=d},{"../eventNames":166}],156:[function(h,d,k){var m=h("ac-base").Element;
var j=h("ac-object");var p=h("ac-ajax");var n=h("../utils/destroy");var q=h("ac-event-emitter").EventEmitter;
var c=h("../eventNames");var b=h("./MediaObject/Loader");var g=h("./MediaObject/Loader/QueuedLoader");
var a=h("./MediaObject/View");var l;var i={preload:false,autoplay:false,fadeToEndframe:false,transitionDuration:0.4,frameRate:24,queueLoading:false,loadPriority:null};
var f={posterframeSrc:".posterframe",endstateSrc:".endstate"};var o=function(r,t,s){this.container=m.getElementById(r);
if(!this.container){throw"MediaObject: requires valid DOM Node for ‘container’"
}this.options=j.defaults(i,s||{});this.mediaSrc=j.defaults(f,t||{});if(this.mediaSrc.basePath){this.mediaSrc.basePath=this._forceTrailingSlash(this.mediaSrc.basePath)
}this._media=null;this._mediaElement=null;this._mediaEmitter=null;this._loadObject=null;
this._totalFrames=null;this.duration=null;this.ended=false;this.loader=null;this.dataOptionsAttribute="mediaObject";
this.dataAssetOptionsAttribute="mediaObject-asset";this.ready=false;this._updateOptionsFromDataAttribute();
this._mediaExistsSrc=this._constructMediaExistsSrc();this.view=new a(this);if(this.options.preload===true||this.options.autoplay===true){this.load()
}};l=o.prototype=new q();l.enhance=function(){if(!this.view.enhanced){this._generate();
this.view.enhance().then(function(){this.trigger(c.enhance,this)}.bind(this))}};
l.degrade=function(){this.view.degrade();this.trigger(c.degrade,this)};l._generate=function(){if(this.loader===null){if(this.options.queueLoading){this.loader=new g(this._loadObject,this.options.loadPriority);
this.prioritize=this.loader.prioritize.bind(this.loader)}else{this.loader=new b(this._loadObject)
}this._addEventListeners()}};l._forceTrailingSlash=function(r){if(r&&r.lastIndexOf("/")!==r.length-1){r=r+"/"
}return r};l._updateOptionsFromDataAttribute=function(){var r=this._parseDataAttributeOptions(this.container,this.dataOptionsAttribute);
var s=this._parseDataAttributeOptions(this.container,this.dataAssetOptionsAttribute);
j.defaults(this.options,r||{});j.defaults(this.mediaSrc,s||{})};l._parseDataAttributeOptions=function(u,s){u=m.getElementById(u);
var v=u.getAttribute("data-"+s);var r;var t={};var w;if(v&&v.length>0){r=v.split(",");
if(r&&r.length>0){r.forEach(function(x){w=x.split(":");t[w[0]]=w[1]})}}return t
};l._constructMediaExistsSrc=function(){var r="";var s=this.mediaSrc.basePath?this._forceTrailingSlash(this.mediaSrc.basePath):"";
r=s+this.mediaSrc.filename+"."+this.mediaSrc.fileFormat;return r};l.load=function(){if(this.loader===null||this.loader.loaded!==true){this._generate();
this.trigger(c.loadstart,this);this._load();return this.loader.load()}};l._load=function(){this.once(c.loaded,this._onReady,this)
};l.play=function(r){if(!this.ready){this.load();this.options.autoplay=true;return
}if(!this._media.paused){return false}this._play(r);this.trigger(c.play,this)};
l._play=function(r){if(this.ready&&this._media!==null){if(typeof r==="number"){this.setPlaybackRate(r)
}this._media.play()}};l.pause=function(){if(this._media.paused){return false}this._pause();
this.trigger(c.pause,this)};l._pause=function(){this._media.pause()};l.reset=function(){this._reset()
};l._reset=function(){if(this.ready){this.setTime(0)}};l.stop=function(){this.options.autoplay=false;
this._stop();this.trigger(c.stop,this)};l._stop=function(){this._pause();this.reset()
};l.setTime=function(r){if(r<0){r=0}if(r>this.duration){r=this.duration}return this._media.currentTime=r
};l.goToFrame=function(s){var r=s/this.options.frameRate;return this.setTime(r)
};l.goToDurationPercent=function(r){var s=r*this.duration;return this.setTime(s)
};l.currentFrame=function(){return Math.floor(this.currentTime()*this.options.frameRate)
};l.currentTime=function(){return this._media.currentTime};l.getCurrentTime=function(){return this._media.currentTime
};l.getPlaybackRate=function(){return this._media.playbackRate};l.setPlaybackRate=function(r){return this._media.playbackRate=r
};l._addEventListeners=function(){this._mediaEmitter.on(c.ended,this._onEnded,this);
this.loader.once(c.loaded,this._onLoad,this);this.loader.once(c.errored,this._onError,this)
};l.destroy=function(){this.trigger(c.destroy,this);this._mediaEmitter.off();n(this,true)
};l._getTotalFrames=function(){return this.duration*this.options.frameRate};l.mediaExists=function(){this._request=p.create({method:"HEAD",url:this._mediaExistsSrc,timeout:2000});
return this._request.send()};l._onReady=function(){this.ready=true;this.duration=this._media.duration;
this._totalFrames=this._getTotalFrames();this._mediaEmitter.on("durationchange",function(){this.duration=this._media.duration;
this._totalFrames=this._getTotalFrames()},this);this.trigger(c.ready,this);if(this.options.autoplay===true){this.options.autoplay=false;
if(this.view.enhanced===false){this.enhance()}this.play()}};l._onEnded=function(){this.ended=true;
this.trigger(c.ended,this)};l._onLoad=function(){this.loaded=true;this.trigger(c.loaded,this)
};l._onError=function(){this.degrade()};d.exports=o},{"../eventNames":166,"../utils/destroy":167,"./MediaObject/Loader":158,"./MediaObject/Loader/QueuedLoader":159,"./MediaObject/View":161,"ac-ajax":80,"ac-base":false,"ac-object":144}],157:[function(f,c,j){try{var b=f("ac-flow-x").Flow
}catch(h){}var i=f("ac-object");var a=f("../../eventNames");var m=f("../MediaObject");
var l;var g={};var d={};var k=function(n,p,o){p=i.defaults(d,p||{});o=i.defaults(g,o||{});
this.canvas=null;m.apply(this,arguments)};l=k.prototype=i.create(m.prototype);l._generate=function(){if(this._media!==null||b===undefined){return
}var o;var p=document.createElement("canvas");var n={element:p,preload:false,superFrames:this.options.superFrames||false,reversable:this.options.reversable||false,keyframeCache:this.options.keyframeCache||8,benchmark:this.options.benchmark||false,multithread:this.options.multithread||false,preventDraw:this.options.preventDraw||false,renderType:this.options.renderType||"default"};
var q={basePath:this.mediaSrc.basePath||null,baseName:this.mediaSrc.filename||"flow",imageUrlPattern:this.mediaSrc.imageUrlPattern||"###",fileFormat:this.mediaSrc.fileFormat||"jpg",startframeFileFormat:this.mediaSrc.startframeFileFormat||null,endframeFileFormat:this.mediaSrc.endframeFileFormat||null,manifestPath:this.mediaSrc.manifestPath||null,manifestFileFormat:this.mediaSrc.manifestFileFormat||"json",diffPath:this.mediaSrc.diffPath||null,framePath:this.mediaSrc.framePath||null};
o=new b(n,q);o.frameRate=this.options.frameRate;this._media=o;this._mediaElement=o.element;
this._mediaEmitter=o;this._loadObject=o.loader;m.prototype._generate.call(this);
return this.mediaObject};l._constructMediaExistsSrc=function(){var o="";var q=this.mediaSrc.basePath?this._forceTrailingSlash(this.mediaSrc.basePath):null;
var n=this.mediaSrc.filename?this.mediaSrc.filename+"_":"_";var p=this.mediaSrc.manifestPath?this._forceTrailingSlash(this.mediaSrc.manifestPath):null;
o=(p||q)+n+"manifest."+(this.mediaSrc.manifestFileFormat||"json");return o};l._load=function(){this._mediaEmitter.once("canplaythrough",this._onReady,this)
};c.exports=k},{"../../eventNames":166,"../MediaObject":156,"ac-flow-x":112,"ac-object":144}],158:[function(b,d,a){var c=b("../../utils/destroy");
var g=b("ac-event-emitter").EventEmitter;var i=b("../../eventNames");var f;var h=function(j){this.loadObject=j;
this.loaded=false;this.loadObject.once(i.loaded,this._onLoad,this);this.loadObject.once(i.errored,this._onError,this)
};f=h.prototype=new g();f.load=function(){if(!this.loaded){return this._load()}};
f.pause=function(){if(!this.loaded){this.loadObject.pause()}};f._load=function(){return this.loadObject.load()
};f._onLoad=function(){this.loaded=true;this.trigger(i.loaded)};f._onError=function(){this.trigger(i.errored)
};f.destroy=function(){this.pause();c(this,true)};d.exports=h},{"../../eventNames":166,"../../utils/destroy":167}],159:[function(d,b,h){var f=d("ac-object");
var a=d("../../../eventNames");var g=d("../../LoadingQueue");var j=d("../Loader");
var i;var c=function(l,k){this.priority=k;j.apply(this,[l])};i=c.prototype=f.create(j.prototype);
i.prioritize=function(k){this.priority=k;this.loadObject.pause();g.remove(this.loadObject);
this.load()};i._load=function(){if(this.promise){g.add(this.loadObject,this.priority)
}else{this.promise=new Promise(function(l,k){this.loadObject.once(a.loaded,l);this.loadObject.once(a.errored,k);
g.add(this.loadObject,this.priority)}.bind(this))}return this.promise};b.exports=c
},{"../../../eventNames":166,"../../LoadingQueue":155,"../Loader":158,"ac-object":144}],160:[function(d,b,h){var o=d("ac-base").Environment;
var g=d("ac-object");var n=d("ac-asset-loader").AssetLoader;var l=d("ac-deferred").Deferred;
var j=d("ac-deferred").all;var m=d("ac-dom-emitter").DOMEmitter;var a=d("../../eventNames");
var k=d("../MediaObject");var q=d("ac-asset-loader").Asset.Video;var i;var f={loop:false};
var c={filename:"h264",fileFormat:"mp4"};var p=function(r,t,s){t=g.defaults(c,t||{});
s=g.defaults(f,s||{});k.call(this,r,t,s)};i=p.prototype=g.create(k.prototype);i._generate=function(){if(this._media!==null){return
}var r=document.createElement("video");var s=this._mediaExistsSrc;var u=new q(s,{element:r,forceElementLoading:this.options.forceElementLoading});
var t=new n(u);if(this.options.loop===true){r.setAttribute("loop","true")}this._media=r;
this._mediaElement=r;this._mediaEmitter=new m(r);this._loadObject=t;k.prototype._generate.call(this)
};i._triggerEndedWhilePlayingInReverse=function(){if(this._media.currentTime===0){this._media.pause();
this.trigger(a.ended,this);this._mediaEmitter.off("timeupdate",this._triggerEndedWhilePlayingInReverse)
}};i._hidePosterOnTimeupdate=function(){if(this._media.currentTime>0){this.view.hideCoverElement(this.view.posterframe);
this._mediaEmitter.off("timeupdate",this._hidePosterOnTimeupdate)}};i._load=function(){var s;
var t=new l();var r=new l();if(typeof this._boundOnReady!=="function"){this._boundOnReady=this._onReady.bind(this)
}this._mediaEmitter.once("loadedmetadata",function(){if(s){window.clearInterval(s)
}t.resolve()},this);this.once(a.loaded,function(){r.resolve();if(o.Browser.name==="Safari"&&!!this._media.src.match(/^blob/)&&t.promise().status()==="pending"){s=window.setInterval(function(){if(!this._media||!this._media.duration){return true
}return isNaN(this._media.duration)}.bind(this),20);window.setTimeout(function(){window.clearInterval(s)
},7000)}},this);return j([t.promise(),r.promise()]).then(this._boundOnReady)};i._play=function(r){this._mediaEmitter.on("timeupdate",this._hidePosterOnTimeupdate,this);
k.prototype._play.apply(this,arguments);if(this.getPlaybackRate()<0){this._mediaEmitter.on("timeupdate",this._triggerEndedWhilePlayingInReverse,this)
}};i._stop=function(){this._mediaEmitter.off("timeupdate",this._hidePosterOnTimeupdate);
this._mediaEmitter.off("timeupdate",this._triggerEndedWhilePlayingInReverse);k.prototype._stop.call(this)
};i._onReady=function(){k.prototype._onReady.call(this);this._boundOnReady=null
};b.exports=p},{"../../eventNames":166,"../MediaObject":156,"ac-asset-loader":21,"ac-base":false,"ac-dom-emitter":85,"ac-object":144}],161:[function(f,d,g){var i=f("ac-base").Element;
var c=f("../../eventNames");var m=f("ac-asset-loader").AssetLoader;var j=f("ac-deferred").Deferred;
var l=f("ac-deferred").all;var k=/\w+\.(?:jpg|png)$/;var a={posterframe:"mediaObject-posterframe",endstate:"mediaObject-endstate"};
function b(n){this.container=n.container;this.mediaObject=n;this.enhanced=false;
this.posterframe=null;this.endstate=null;this.mediaObject.on(c.play,this._onPlay,this);
this.mediaObject.on(c.pause,this._onPause,this);this.mediaObject.on(c.ended,this._onEnded,this)
}var h=b.prototype;h.enhance=function(){var r=new j();var q;var s;var p=function(t){this.posterframe=t||null
}.bind(this);var o=function(t){this.endstate=t||null}.bind(this);var n=function(){i.addClassName(this.container,"mediaObject-enhanced");
i.addClassName(this.mediaObject._mediaElement,"mediaObject-element");this.enhanced=true;
window.requestAnimationFrame(function(){this.hideCoverElement(this.endstate);this._inject();
i.setStyle(this.mediaObject._mediaElement,{visibility:"hidden"});window.requestAnimationFrame(function(){i.getBoundingBox(this.mediaObject._mediaElement);
i.setStyle(this.mediaObject._mediaElement,{visibility:"visible"});r.resolve()}.bind(this))
}.bind(this))}.bind(this);if(!this.enhanced){s=this._createCoverElement(this.mediaObject.mediaSrc.posterframeSrc,a.posterframe);
q=this._createCoverElement(this.mediaObject.mediaSrc.endstateSrc,a.endstate);s.then(p);
q.then(o);l([s,q]).then(n)}else{r.reject()}return r};h.degrade=function(){this.showCoverElement(this.endstate,false);
window.requestAnimationFrame(function(){this._remove();this.posterframe=null;this.endstate=null;
this.enhanced=false;i.addClassName(this.container,"mediaObject-degraded");this.mediaObject.destroy()
}.bind(this))};h._createCoverElement=function(q,n){var o;var p;if(k.test(q)){p=this._loadImage(q,n)
}else{o=i.select(q,this.container);p=new j().resolve(o)}return p};h._loadImage=function(q,o){var n=new m([q]);
function p(s){var r=s[0];r.width=r.width;r.height=r.height;r.alt="";r.className=o;
return r}return n.load().then(p)};h._inject=function(){i.insert(this.mediaObject._mediaElement,this.container);
[this.posterframe,this.endstate].forEach(function(n){if(n&&!this.container.contains(n)){i.insert(n,this.container)
}},this)};h._remove=function(){var n=[this.mediaObject._mediaElement];if(!k.test(this.mediaObject.posterframeSrc)){n.push(this.posterframe)
}n.forEach(function(o){if(i.isElement(o)&&this.container.contains(o)){this.container.removeChild(o)
}},this)};h.hideCoverElements=function(){this.hideCoverElement(this.posterframe);
this.hideCoverElement(this.endstate)};h.hideCoverElement=function(o,n){if(o){if(n){this._addOpacityTransition(o)
}else{this._removeTransition(o)}window.requestAnimationFrame(function(){i.setStyle(o,{opacity:0,zIndex:1})
}.bind(this))}};h.showCoverElement=function(p,o){var n=function(){this._removeTransition.bind(this,p);
i.removeVendorPrefixEventListener(p,"transitionEnd",n)}.bind(this);if(p){if(o){this._addOpacityTransition(p);
i.addVendorPrefixEventListener(p,"transitionEnd",n)}else{this._removeTransition(p)
}window.requestAnimationFrame(function(){i.setStyle(p,{opacity:1,zIndex:1001})}.bind(this))
}};h._removeTransition=function(n){i.setVendorPrefixStyle(n,"transition","none")
};h._addOpacityTransition=function(n){i.setVendorPrefixStyle(n,"transition","opacity "+this.mediaObject.options.transitionDuration+"s ease-out")
};h._onPlay=function(){i.removeClassName(this.container,"mediaObject-ended");i.addClassName(this.container,"mediaObject-playing");
this.hideCoverElements()};h._onPause=function(){i.removeClassName(this.container,"mediaObject-playing")
};h._onEnded=function(){i.removeClassName(this.container,"mediaObject-playing");
i.addClassName(this.container,"mediaObject-ended");if(this.endstateElement){this.showCoverElement(this.endstate,false)
}};d.exports=b},{"../../eventNames":166,"ac-asset-loader":21,"ac-base":false}],162:[function(c,b,g){var i=c("./KeyframeOnPause/ImageOverlayController");
var h,d=c("ac-object"),a=c("ac-clock");var f={overlayLoadDelay:250,overlayClassName:"image-overlay",overlayDirPath:"./overlay",overlayPrefix:"image_",overlayPattern:"####",overlayFileType:"png",clock:a};
var j=function(){};h=j.prototype;h.decorate=function(m,k){var l=d.defaults(f,k);
m.keyframeOnPauseController=new i(m,l);m.container.appendChild(m.keyframeOnPauseController.el);
return m};b.exports=new j()},{"./KeyframeOnPause/ImageOverlayController":163,"ac-clock":34,"ac-object":144}],163:[function(b,c,a){var g,f=b("ac-event-emitter").EventEmitter,h=b("ac-dom-emitter").DOMEmitter;
var d=function(j,i){this.mediaObject=j;this.options=i;this.active=false;this.el=this._createOverlay();
this._overlaySetTime=null;this._setEventTarget();this._bindEvents()};g=d.prototype;
g.applyOverlay=function(k){k=k||this.mediaObject.currentFrame();var i=this._getImagePath(k),j=this._getContainerDimensions(this.mediaObject.container);
this.el.style.backgroundImage="url("+i+")";this.el.style.backgroundSize=j.width+"px "+j.height+"px";
this.active=true;this.mediaObject.trigger("overlay-applied")};g.removeOverlay=function(){this.el.style.backgroundImage="inherit";
this.active=false;this.mediaObject.trigger("overlay-removed")};g._createOverlay=function(){var i=document.createElement("div");
i.className=this.options.overlayClassName;return i};g._onMetadataLoaded=function(){var j=this.mediaObject.width,i=this.mediaObject.height;
this.el.style.width=j;this.el.style.height=i};g._getContainerDimensions=function(j){j=j||this.mediaObject.container;
var i={width:j.offsetWidth,height:j.offsetHeight},k;if(!i.width||!i.height){k=j.getBoundingClientRect();
i.width=k.width;i.height=k.height}return i};g._getImagePath=function(m){var p=this.options.overlayDirPath,j=this.options.overlayFileType,l=this.options.overlayPrefix,k=this.options.overlayPattern,o=k.length,n=m+"",i=n.length;
while(i<o){n="0"+n;i++}return p+"/"+l+n+"."+j};g._bindEvents=function(){this._eventsTarget.on("timeupdate pause",this._onMediaObjectScrub,this);
this._eventsTarget.on("play",this._onMediaObjectPlay,this);this.options.clock.on("draw",this._clockApplyImageOverlay,this)
};g._setEventTarget=function(){this._eventsTarget=this.mediaObject._mediaEmitter
};g._onMediaObjectPlay=function(){this.removeOverlay()};g._onMediaObjectScrub=function(){this._debounceImageOverlay()
};g._debounceImageOverlay=function(){this._overlaySetTime=Date.now()+this.options.overlayLoadDelay
};g._clockApplyImageOverlay=function(){if(!this.mediaObject._media.paused||!this._overlaySetTime||this._overlaySetTime>Date.now()){return
}this._overlaySetTime=null;this.applyOverlay()};c.exports=d},{"ac-dom-emitter":85}],164:[function(c,d,a){var f=(function(){var g="/global/elements/blank.gif";
return g.replace(/global\/.*/,"")}());d.exports=function b(g){if(!!g.match(/(^http(s?))/)){return g
}if(g.match(/^\/(?!\/)/)){g=f+g.replace(/^\//,"");g=g.replace(/(^.+)(\/105\/)/,"$1/")
}return g}},{}],165:[function(c,f,b){var h=c("./MediaObject/Flow");var a=c("./MediaObject/Video");
var g=c("./MediaObject/decorators/KeyframeOnPause");f.exports=function d(i,l,k){k=k||{};
var j=null;if(k.type==="h264"){j=new a(i,l,k)}if(k.type==="flow"){j=new h(i,l,k)
}if(k.keyframeOverlay){j=g.decorate(j,k.keyframeOverlay)}return j}},{"./MediaObject/Flow":157,"./MediaObject/Video":160,"./MediaObject/decorators/KeyframeOnPause":162}],166:[function(b,c,a){c.exports={degrade:"degrade",destroy:"destroy",ended:"ended",enhance:"enhance",errored:"error",loaded:"loaded",loadstart:"loadstart",pause:"pause",play:"play",progress:"progress",ready:"ready",stop:"stop"}
},{}],167:[function(b,c,a){c.exports=b(32)},{}],168:[function(b,c,a){c.exports=b(10)
},{}],169:[function(b,c,a){c.exports={clone:b("./ac-object/clone"),defaults:b("./ac-object/defaults"),extend:b("./ac-object/extend"),getPrototypeOf:b("./ac-object/getPrototypeOf"),isEmpty:b("./ac-object/isEmpty"),toQueryParameters:b("./ac-object/toQueryParameters")}
},{"./ac-object/clone":170,"./ac-object/defaults":171,"./ac-object/extend":172,"./ac-object/getPrototypeOf":173,"./ac-object/isEmpty":174,"./ac-object/toQueryParameters":175}],170:[function(b,c,a){c.exports=b(12)
},{"./extend":172}],171:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"||typeof g!=="object"){throw new TypeError("defaults: must provide a defaults and options object")
}return f({},h,g)}},{"./extend":172}],172:[function(b,c,a){c.exports=b(15)},{}],173:[function(b,c,a){c.exports=b(16)
},{}],174:[function(b,c,a){c.exports=b(18)},{}],175:[function(b,c,a){c.exports=b(20)
},{qs:168}],176:[function(b,c,a){c.exports={DeferredQueue:b("./ac-deferredqueue/DeferredQueue"),Action:b("./ac-deferredqueue/Action")}
},{"./ac-deferredqueue/Action":177,"./ac-deferredqueue/DeferredQueue":178}],177:[function(b,d,a){function c(h,g){if(typeof h!=="function"){throw new TypeError("Deferred Queue func must be a function.")
}this._options=g||{};this._options.delay=this._options.delay||0;this.__func=h}var f=c.prototype;
f.run=function(){var g=this.__func;if(typeof this._options.delay==="number"&&this._options.delay>0){window.setTimeout(function(){g()
},this._options.delay*1000)}else{g()}};d.exports=c},{}],178:[function(c,f,a){var d=c("./Action");
function b(h){this._options=h||{};this._options.autoplay=this._options.autoplay||false;
this._options.asynchronous=this._options.asynchronous||false;this._isPlaying=false;
this._isRunningAction=false;this._queue=[];this.didFinish=this.__didFinish.bind(this)
}var g=b.prototype;g.add=function(j,i){var h={};var k;if(i>0){h.delay=i}k=new d(j,h);
this._queue.push(k);if(!this._isPlaying&&this._options.autoplay===true){this.start()
}else{if(this._isPlaying){this.__runNextAction()}}};g.remove=function(h){this._queue=this._queue.filter(function(i){return i!==h
})};g.start=function(){if(this._isPlaying){return false}this._isPlaying=true;this.__runNextAction()
};g.stop=function(){if(!this._isPlaying){return false}this._isPlaying=false};g.clear=function(){this._queue=[];
this.stop()};g.__didFinish=function(){this._isRunningAction=false;this.__runNextAction()
};g.__runNextAction=function(){if(!this._isPlaying){return false}if(this._queue.length&&!this._isRunningAction){var h=this._queue.shift();
h.run();if(this._options.asynchronous===true){this._isRunningAction=true;return
}this.__runNextAction()}};f.exports=b},{"./Action":177}],179:[function(b,c,a){c.exports=b(10)
},{}],180:[function(b,c,a){c.exports=b(11)},{"./ac-object/clone":181,"./ac-object/create":182,"./ac-object/defaults":183,"./ac-object/extend":184,"./ac-object/getPrototypeOf":185,"./ac-object/isDate":186,"./ac-object/isEmpty":187,"./ac-object/isRegExp":188,"./ac-object/toQueryParameters":189}],181:[function(b,c,a){c.exports=b(12)
},{"./extend":184}],182:[function(b,c,a){c.exports=b(13)},{}],183:[function(b,c,a){c.exports=b(14)
},{"./extend":184}],184:[function(b,c,a){c.exports=b(15)},{}],185:[function(b,c,a){c.exports=b(16)
},{}],186:[function(b,c,a){c.exports=b(17)},{}],187:[function(b,c,a){c.exports=b(18)
},{}],188:[function(b,c,a){c.exports=b(19)},{}],189:[function(b,c,a){c.exports=b(20)
},{qs:179}],190:[function(b,c,a){arguments[4][38][0].apply(a,arguments)},{"./ac-dom-emitter/DOMEmitter":191}],191:[function(b,c,a){c.exports=b(86)
},{}],192:[function(b,c,a){a.ScrollView=b("./ac-scrollview/ScrollView")},{"./ac-scrollview/ScrollView":199}],193:[function(c,d,a){function b(){}b.prototype={on:function(){return this._parent.on.apply(this._parent,arguments)
},off:function(){return this._parent.off.apply(this._parent,arguments)},trigger:function(){return this._parent.trigger.apply(this._parent,arguments)
},once:function(){return this._parent.once.apply(this._parent,arguments)},setEnabled:function(f){this._parent.setEnabled.apply(this._parent,arguments)
},isEnabled:function(){return this._parent.isEnabled.apply(this._parent,arguments)
}};d.exports=b},{}],194:[function(f,g,d){var a=function(j,i){return Math.max(0,Math.min(j,i))
};var h=function(i,j){var k={x:0,y:0};if(i.x<0){k.x=-i.x}else{if(i.x>j.x){k.x=j.x-i.x
}}if(i.y<0){k.y=-i.y}else{if(i.y>j.y){k.y=j.y-i.y}}return k};var c=function(i,j){i.x=a(i.x,j.x);
i.y=a(i.y,j.y);return i};var b=function(j,i,k){var l=h(i,k);if(l.x!==0){i.x=j.x+((i.x-j.x)*0.5)
}if(l.y!==0){i.y=j.y+((i.y-j.y)*0.5)}return i};g.exports={calculateOverscrollAmount:h,constrainValue:a,constrainToScrollBounds:c,halfInputIfOutsideOfScrollBounds:b}
},{}],195:[function(b,c,a){var h=b("./BaseInputDecorator");var f=4;function g(i){this._parent=i;
this._currentAxis=undefined}var d=g.prototype=new h();d.inputStart=function(i,l,j,k){this._currentAxis=false;
this._firstTouch={x:i,y:l};this._parent.inputStart.apply(this._parent,arguments)
};d.inputMove=function(i,l,j,k){if(!this._currentAxis){if(Math.abs(i-this._firstTouch.x)>f){this._currentAxis="x"
}else{if(Math.abs(l-this._firstTouch.y)>f){this._currentAxis="y"}}}if(this._currentAxis==="x"){l=this._firstTouch.y
}else{if(this._currentAxis==="y"){i=this._firstTouch.x}}this._parent.inputMove.apply(this._parent,arguments)
};d.inputEnd=function(i,j){this._parent.inputEnd.apply(this._parent,arguments)};
c.exports=g},{"./BaseInputDecorator":193}],196:[function(c,b,f){var k=c("./utilities").assign;
var j=c("./Constraints");var i=c("./utilities").fastFivePointPrecision;var h=(1000/60);
var d={friction:{x:0.95,y:0.95},outOfBounds:{deceleration:0.05,acceleration:0.1}};
function a(l){this.options=k({},d,l||{});if(l&&l.friction){var m=l.friction;if(typeof m!=="object"||!("x" in m)||!("y" in m)){throw new TypeError("InertiaCalculator expects custom friction to be an object with numeric x/y properties.")
}}if(l&&l.outOfBounds){var n=l.outOfBounds;if(typeof n!=="object"||!("acceleration" in n)||!("deceleration" in n)){throw new TypeError("InertiaCalculator expects custom outOfBounds coefficients to be an object with numeric acceleration/deceleration properties.")
}}}var g=a.prototype;g.calculateInertiaPositions=function(l,o,m,q,p){var s=[];if(!p){p=this.options.friction
}o={x:o.x*h,y:o.y*h};if(m.x===0){o.x=0}if(m.y===0){o.y=0}while(Math.abs(o.x)>0.01||Math.abs(o.y)>0.01){if(s.length>5000){console.warn("potential loop detected.");
return s}l.x=l.x+o.x;l.y=l.y+o.y;o.x=o.x*p.x;o.y=o.y*p.y;l.x=i(l.x);l.y=i(l.y);
var r=j.calculateOverscrollAmount(l,m);if(r.x!==0){if(r.x*o.x<=0){o.x+=r.x*this.options.outOfBounds.deceleration
}else{o.x=r.x*this.options.outOfBounds.acceleration}}if(r.y!==0){if(r.y*o.y<=0){o.y+=r.y*this.options.outOfBounds.deceleration
}else{o.y=r.y*this.options.outOfBounds.acceleration}}if(q){j.constrainToScrollBounds(l,m)
}s.push({x:l.x,y:l.y,velocity:{x:i(o.x/h),y:i(o.y/h)}})}if(s.length>1){var n=s[s.length-1];
n.x=Math.round(n.x);n.y=Math.round(n.y);j.constrainToScrollBounds(n,m)}return s
};g.calculateInitialVelocity=function(o,q){var p={};var m=1-this.options.friction.x;
var r=1-this.options.friction.y;var n=q.x-o.x;p.x=i((m*n)/h);var l=q.y-o.y;p.y=i((r*l)/h);
return p};g.calculateFrictionToStopAtPoint=function(p,n,o){var q={};var m=Math.abs(o.x-p.x);
q.x=i(1-((Math.abs(n.x)*h)/m));var l=Math.abs(o.y-p.y);q.y=i(1-((Math.abs(n.y)*h)/l));
q.y=Math.min(1,q.y);q.x=Math.min(1,Math.max(0,q.x));q.y=Math.min(1,Math.max(0,q.y));
if(isNaN(q.x)){q.x=0}if(isNaN(q.y)){q.y=0}return q};b.exports=a},{"./Constraints":194,"./utilities":206}],197:[function(c,d,b){var g=c("ac-event-emitter").EventEmitter;
var h=c("ac-clock").Clock;function a(i){this._clock=new h();this._isPlaying=false;
this._scroll=i;this._currentFrameCnt=0;this._accumulatedTime=0;this._currentAnimationDuration=0;
this._clock.on("draw",this._draw,this)}var f=a.prototype=new g();f.stop=function(){if(this._isPlaying){this._clock.stop();
this._isPlaying=false;this.trigger("end")}this._frames=[]};f.isPlaying=function(){return this._isPlaying
};f.getCurrentFrame=function(){return this._currentFrame};f.getNextFrame=function(j){this._accumulatedTime+=j.delta;
var i=Math.round(this._accumulatedTime/(1000/60));this._currentFrame=this._frames[i];
return this._currentFrame};f._draw=function(j){var i=this.getNextFrame(j);if(!this._isPlaying||(this._accumulatedTime>this._currentAnimationDuration)){this._isPlaying=false;
this.trigger("end");this._clock.stop();return}this._scroll.setPosition(i)};f.play=function(i){if(this._isPlaying){return
}this._frames=i;this._isPlaying=true;this._accumulatedTime=0;this._currentFrameCnt=this._frames.length-1;
this._currentFrame=this._frames[0];this._currentAnimationDuration=(this._currentFrameCnt/60)*1000;
this._clock.start()};d.exports=a},{"ac-clock":34}],198:[function(b,c,a){var i=b("./BaseInputDecorator");
var h=45;var g=-h;function d(j,k){this._parent=j;this._axis=k;this._inputs=[];this._startTouchMove=null;
this._shouldPreventDefault=null}var f=d.prototype=new i();f._calculateTouchAngles=function(){var q={x:0,y:0};
var l=this._inputs[this._inputs.length-1];var n=this._inputs[0];var j=l.x-n.x;var p=l.y-n.y;
var o=Math.sqrt(j*j+p*p);if(o===0){return false}var m=Math.asin(p/o);var k=Math.acos(j/o);
q.x=m*(180/Math.PI);q.y=k*(180/Math.PI);q.y-=90;return q};f.inputStart=function(j,m,k,l){this._inputs=[{x:j,y:m}];
this._startTouchMove={x:j,y:m,timeStamp:k,e:l};this._checkToPreventDefault=true;
this._parent.inputStart.apply(this._parent,arguments)};f._angleTest=function(j){return(j<=h&&j>=g)?true:false
};f._preventDefault=function(j,m,k,l){l.preventDefault();this._shouldPreventDefault=true;
this._parent.inputMove.apply(this._parent,arguments)};f.inputMove=function(j,n,k,l){this._inputs[1]={x:j,y:n};
var m=this._calculateTouchAngles();if((this._axis==="y"&&this._angleTest(m.y))||(this._axis==="x"&&this._angleTest(m.x))||(this._axis===true&&(this._angleTest(m.x)||this._angleTest(m.y)))){if(this._shouldPreventDefault!==false){this._preventDefault.apply(this,arguments)
}}else{if(this._shouldPreventDefault===true){this._preventDefault.apply(this,arguments)
}else{this._shouldPreventDefault=false}}};f.inputEnd=function(j,k){this._shouldPreventDefault=true;
this._parent.inputEnd.apply(this._parent,arguments)};c.exports=d},{"./BaseInputDecorator":193}],199:[function(h,a,s){var l=h("./utilities").assign;
var d=h("ac-event-emitter").EventEmitter;var p=h("./InertiaCalculator");var b=h("./input/MouseWheel");
var g=h("./input/MouseDrag");var m=h("./input/Touch");var n=h("./input/Input");
var q=h("./InputPreventDefault");var o=h("./DirectionalLock");var t=h("./model/Scroll");
var c=h("./Transition");var f=h("./Constraints");var j=h("./InertiaPlayer");var i={alwaysBounceHorizontal:false,alwaysBounceVertical:false,bounces:true,directionalLockEnabled:false,mouseDrag:true,mouseWheel:true,preventDefault:true,scrollingEnabled:true,touch:true};
function r(v,u){if(!v||!v instanceof Element){throw new Error("Element required as first argument for constructor.")
}if(!u||u===null||!u.width||!u.height||!u.contentSize){throw new Error("Scroll View requires a second argument, an object, specifying width, height, and contentSize.")
}this.options=l({},i,u);l(this,{_element:v,_width:this.options.width,_height:this.options.height,_contentSize:this.options.contentSize,_isDecelerating:false});
this._scroll=new t();this._inputNormalize=new n(this._scroll);this._inputNormalize.setEnabled(this.options.scrollingEnabled);
if(this.options.preventDefault){this._inputNormalize=new q(this._inputNormalize,this.options.preventDefault)
}if(this.options.directionalLockEnabled){this._inputNormalize=new o(this._inputNormalize)
}this._inputNormalize.on("input_start",this.inputStart,this);this._inputNormalize.on("input_move",this.inputMove,this);
this._inputNormalize.on("input_end",this.inputEnd,this);if(this.options.touch===true){this._touch=new m(this._inputNormalize,v)
}if(this.options.mouseWheel===true){this._mouseWheel=new b(this._inputNormalize,v)
}if(this.options.mouseDrag===true){this._mouseDrag=new g(this._inputNormalize,v)
}this._inertiaCalculator=new p(this.options);this._inertiaPlayer=new j(this._scroll);
this._inertiaPlayer.on("end",function(){this._isDecelerating=false;this.trigger("didEndDecelerating")
},this);this._scroll.propagateTo(this)}var k=r.prototype=new d();k.isDecelerating=function(){return this._isDecelerating
};k._animateToPosition=function(u){var v=this;var w=this.getPosition();this._transition=new c({draw:function(x){v.setPosition({y:w.y+(u.y-w.y)*x,x:w.x+(u.x-w.x)*x})
}});this._transition.play()};k._handleConstraints=function(v){var y=this.getContentSize();
var u=this.getHeight();var x=this.getWidth();var w=this.getScrollDistance();v=f.halfInputIfOutsideOfScrollBounds(this.getPosition(),v,w);
if(!this.options.alwaysBounceHorizontal&&y.height>u&&y.width<=x){v.x=0}if(!this.options.alwaysBounceVertical&&y.width>x&&y.height<=u){v.y=0
}if(this.options.bounces===false){return f.constrainToScrollBounds(v,w)}return v
};k.setScrollingEnabled=function(u){this._inputNormalize.setEnabled(u)};k.isScrollingEnabled=function(){return this._inputNormalize.isEnabled()
};k.getPosition=function(){return this._scroll.getPosition()};k.setPosition=function(u,v){if(v===undefined){this._scroll.setPosition(u);
if(this._inertiaPlayer.isPlaying()){var x=this.getPosition();var w=this._inertiaPlayer.getCurrentFrame();
var y=this._inertiaCalculator.calculateInertiaPositions(x,w.velocity,this.getScrollDistance(),!this.options.bounces);
this._inertiaPlayer.stop();this._inertiaPlayer.play(y)}}else{if(v===false){this._inertiaPlayer.stop();
this._scroll.setPosition(u)}else{this._inertiaPlayer.stop();this._animateToPosition(u)
}}};k.inertialScrollTo=function(u,v){if(this._inertiaPlayer.isPlaying()){this._inertiaPlayer.stop()
}var x=this.getPosition();var z=f.calculateOverscrollAmount(x,this.getScrollDistance());
if(z.x!==0){v.x=0.1}if(z.y!==0){v.y=0.1}var w=this._inertiaCalculator.calculateFrictionToStopAtPoint(this.getPosition(),v,u);
var y=this._inertiaCalculator.calculateInertiaPositions(x,v,this.getScrollDistance(),!this.options.bounces,w);
this._inertiaPlayer.play(y)};k.setHeight=function(u){this._height=u};k.setWidth=function(u){this._width=u
};k.getHeight=function(){return this._height};k.getWidth=function(){return this._width
};k.setContentSize=function(u){this._contentSize.height=u.height;this._contentSize.width=u.width;
return this};k.getContentSize=function(){return this._contentSize};k.getScrollYDistance=function(){var u=this._contentSize.height-this._height;
if(u<0){u=0}return u};k.getScrollXDistance=function(){var u=this._contentSize.width-this._width;
if(u<0){u=0}return u};k.getScrollDistance=function(){return{x:this.getScrollXDistance(),y:this.getScrollYDistance()}
};k.inputStart=function(u){this._tracking=false;this._isDecelerating=false;this._inertiaPlayer.stop();
this.trigger("inputStart",u)};k.inputMove=function(u){if(!this._tracking){this._tracking=true;
this.trigger("willBeginTracking")}if(u&&u.originalEvent&&u.originalEvent.type==="mousewheel"){u=f.constrainToScrollBounds(u,this.getScrollDistance())
}u=this._handleConstraints(u);this._scroll.setPosition({x:u.x,y:u.y,timeStamp:u.timeStamp,originalEvent:u.originalEvent})
};k.inputEnd=function(w){var z=w.velocity;var A=this.getPosition();var v=this.getScrollDistance();
var B=f.calculateOverscrollAmount(A,v);var x=this._inertiaCalculator.calculateInitialVelocity(B,{x:0,y:0});
if(this._contentSize.width===this._width&&!this.options.alwaysBounceHorizontal){z.x=0
}else{if(this._contentSize.height===this._height&&!this.options.alwaysBounceVertical){z.y=0
}}if(z.x===0&&B.x!==0){z.x=x.x}if(z.y===0&&B.y!==0){z.y=x.y}if(z.x===0&&z.y===0){this.trigger("didEndTracking",false);
this.trigger("willEndTracking",{velocity:z,targetPosition:A,originalEvent:w.originalEvent})
}else{var u=this._inertiaCalculator.calculateInertiaPositions(A,z,this.getScrollDistance(),!this.options.bounces);
var y=u[u.length-1];this.trigger("willEndTracking",{velocity:z,targetPosition:y,originalEvent:w.originalEvent});
this.trigger("didEndTracking",true);this._isDecelerating=true;this.trigger("willBeginDecelerating");
this._inertiaPlayer.play(u)}};a.exports=r},{"./Constraints":194,"./DirectionalLock":195,"./InertiaCalculator":196,"./InertiaPlayer":197,"./InputPreventDefault":198,"./Transition":200,"./input/Input":201,"./input/MouseDrag":202,"./input/MouseWheel":203,"./input/Touch":204,"./model/Scroll":205,"./utilities":206}],200:[function(c,b,f){var j=c("./utilities").assign;
var d={duration:350};var i=function(l,k,n,m){l/=m/2;if(l<1){return n/2*l*l+k}l--;
return -n/2*(l*(l-2)-1)+k};var a=function(l,k,n,m){l/=m;return -n*l*(l-2)+k};function h(k){j(this,d,k);
if(!k.draw){throw new Error("no draw function specified")}}var g=h.prototype;g.update=function(m){if(!this.startTime){this.startTime=m
}var l=(m-this.startTime)/this.duration;var k=i(l,0,1,1);if(l<1){this.draw(k);this._raf=window.requestAnimationFrame(this.update.bind(this))
}else{this.draw(1)}};g.play=function(){window.requestAnimationFrame(this.update.bind(this))
};g.stop=function(){window.cancelAnimationFrame(this._raf)};b.exports=h},{"./utilities":206}],201:[function(b,c,a){var f=b("ac-event-emitter").EventEmitter;
var h=b("../utilities").fastFivePointPrecision;function g(i){this._startingInputPosition=null;
this._lastInputPosition=null;this._inputPositions=[];this._scroll=i;this._enabled=true
}var d=g.prototype=new f();d._addPosition=function(i){this._inputPositions.push(i);
var j=Date.now();if(this._inputPositions.length>=3&&(j-this._inputPositions[0].timeStamp>100)){this._inputPositions.shift()
}};d._pruneOldPositions=function(){var i=Date.now();this._inputPositions=this._inputPositions.filter(function(j){if(i-j.timeStamp<100){return j
}})};d._calculateVelocity=function(){var k={x:0,y:0};this._pruneOldPositions();
if(this._inputPositions.length<2){return k}var l=this._inputPositions[0];var i=this._inputPositions[this._inputPositions.length-1];
var j=(i.timeStamp-l.timeStamp);k.x=-(i.x-l.x)/j;k.y=-(i.y-l.y)/j;k.x=h(k.x);k.y=h(k.y);
return k};d.setEnabled=function(i){this._enabled=i};d.isEnabled=function(){return this._enabled
};d.inputStart=function(i,m,k,j){if(!this._enabled){return}var l={x:i,y:m,timeStamp:k};
this._addPosition(l);this._startingInputPosition=l;this.trigger("input_start",{timeStamp:k,originalEvent:j})
};d.inputMove=function(i,n,l,j){if(!this._enabled){return}var m={x:i,y:n,timeStamp:l};
this._addPosition(m);this._lastInputPosition=m;var k=this.getScrollValues();this.trigger("input_move",{x:k.x,y:k.y,timeStamp:l,originalEvent:j})
};d.inputEnd=function(j,i){if(!this._enabled){return}this.trigger("input_end",{lastInputPosition:this._lastInputPosition,timeStamp:j,originalEvent:i,velocity:this._calculateVelocity()});
this._positions=[];this._lastInputPosition=null;this._startingInputPosition=null
};d.getScrollValues=function(){var j=this._inputPositions[this._inputPositions.length-2];
var i=this._scroll.getPosition();return{x:(j.x-this._lastInputPosition.x)+i.x,y:(j.y-this._lastInputPosition.y)+i.y}
};c.exports=g},{"../utilities":206}],202:[function(b,c,a){var f=b("ac-dom-emitter").DOMEmitter;
function d(g,h){this._input=g;this._element=h;this._domEmitter=new f(h);h.style.webkitUserSelect="none";
this.bindDOMEvents()}d.prototype={bindDOMEvents:function(){var h=this._input;var j=this._element;
var i=this;var k=function(l){h.inputMove(l.pageX,l.pageY,l.timeStamp,l)};var g=function(l){if(l.type==="mouseout"&&j.contains(l.relatedTarget)){return
}i._domEmitter.off("mousemove",k);i._domEmitter.off("mouseup",g);i._domEmitter.off("mouseout",g);
h.inputEnd(l.timeStamp,l)};i._domEmitter.on("mousedown",function(l){if(l.target.tagName.match(/input|textarea|select/i)){return
}h.inputStart(l.pageX,l.pageY,l.timeStamp,l);i._domEmitter.on("mousemove",k);i._domEmitter.on("mouseup",g);
i._domEmitter.on("mouseout",g)})}};c.exports=d},{"ac-dom-emitter":190}],203:[function(d,f,c){var g=d("ac-dom-emitter").DOMEmitter;
var b=d("../utilities").assign;function a(h,i){this._inputController=h;this._element=i;
this._domEmitter=new g(i);this._scrollTop=0;this._scrollLeft=0;this._timeout=null;
this._hasStarted=false;this._boundMouseWheelComplete=this.mouseWheelComplete.bind(this);
this._lastEvent=null;this._velocities=[];this.bindDOMEvents()}a.prototype={mouseWheelComplete:function(){this._scrollTop=0;
this._scrollLeft=0;this._hasStarted=false;this._inputController.inputEnd(new Date().getTime(),this._lastEvent);
this._lastEvent=null},onMouseWheel:function(k){var i;var h;var j;if(this._hasStarted===false){this._inputController.inputStart(this._scrollLeft,this._scrollTop,k.timeStamp,k);
this._hasStarted=true}i=this._scrollTop+k.wheelDeltaY;h=this._scrollLeft+k.wheelDeltaX;
this._lastEvent=b({},k);this._scrollTop=i;this._scrollLeft=h;this._inputController.inputMove(this._scrollLeft,this._scrollTop,k.timeStamp,k);
window.clearTimeout(this._timeout);this._timeout=window.setTimeout(this._boundMouseWheelComplete,100)
},bindDOMEvents:function(){this._domEmitter.on("mousewheel",this.onMouseWheel.bind(this))
}};f.exports=a},{"../utilities":206,"ac-dom-emitter":190}],204:[function(c,d,a){var f=c("ac-dom-emitter").DOMEmitter;
function b(g,h){this._input=g;this._element=h;this._domEmitter=new f(h);this.bindDOMEvents()
}b.prototype={bindDOMEvents:function(){var g=this._input;var h=this._element;this._domEmitter.on("touchstart",function(i){if(i.touches&&i.touches[0]&&i.touches[0].target&&i.touches[0].target.tagName.match(/input|textarea|select/i)){return
}g.inputStart(i.pageX,i.pageY,i.timeStamp,i)});this._domEmitter.on("touchmove",function(i){g.inputMove(i.pageX,i.pageY,i.timeStamp,i)
});this._domEmitter.on("touchend touchcancel",function(i){g.inputEnd(i.timeStamp,i)
})}};d.exports=b},{"ac-dom-emitter":190}],205:[function(b,c,a){var f=b("ac-event-emitter").EventEmitter;
function g(){this.x=0;this.y=0}var d=g.prototype=new f();d.setPosition=function(h){if(h.x===this.x&&h.y===this.y){return
}this.x=h.x;this.y=h.y;this.trigger("scroll",{x:this.x,y:this.y,originalEvent:h.originalEvent})
};d.getPosition=function(){return{x:this.x,y:this.y}};c.exports=g},{}],206:[function(d,f,c){var b=function(i,h){var j=Math.pow(10,h);
return ~~(i*j)/j};var g=function(h){return b(h,5)};var a=function(n,m){var h=function(i){if(typeof i!=="object"||i===null||i===undefined){throw new TypeError("assign: target and sources must be objects")
}return i};var o=function(i){n[i]=k[i]};n=h(n);var k;for(var j=1,l=arguments.length;
j<l;j++){k=h(arguments[j]);Object.keys(k).forEach(o)}return n};f.exports={assign:a,fastFivePointPrecision:g,fastPrecision:b}
},{}],207:[function(b,c,a){c.exports.Smoother=b("./smoother/Smoother")},{"./smoother/Smoother":208}],208:[function(c,d,b){d.exports=a;
function a(f){f=f||this.sampling;this.pool=new Array(f);this.raw=0;this.value=0
}a.prototype.sampling=3;a.prototype.smooth=function(g,k){var j=0;var f=this.pool.length;
if(typeof this.pool[f-this.sampling]!=="undefined"){for(var h=this.sampling;h>0;
h--){j+=this.pool[f-h]}j+=g;j/=(this.sampling+1)}else{j=g}if(!k){this.raw=g;this._track(j,true)
}return j};a.prototype._track=function(g,f){if(f){this.value=g}else{this.raw=this.value=g
}this.pool.push(g);this.pool.shift()}},{}],209:[function(b,c,a){c.exports.ScrollTimeUpdate=b("./scroll-time-update/ScrollTimeUpdate");
c.exports.ElementScrollTimeUpdate=b("./scroll-time-update/ElementScrollTimeUpdate")
},{"./scroll-time-update/ElementScrollTimeUpdate":210,"./scroll-time-update/ScrollTimeUpdate":211}],210:[function(c,g,b){var f=c("./ScrollTimeUpdate"),d=c("window-delegate").WindowDelegate;
var h;var a=function(j,i){i=i||{};this.el=j;this._updateOnResize=false;f.call(this,0,0,i);
this.setOffsets();this._clock.on("update",this._onResizeClockUpdate,this);this._clock.on("draw",this._onResizeClockDraw,this);
d.on("resize orientationchange",this._onResize,this)};h=a.prototype=new f(null);
h.setOffsets=function(){var k=this.el.getBoundingClientRect(),j=d.scrollY,l=k.top+j,i=k.bottom+j;
if(this.options.startInView){l=l-d.innerHeight}if(typeof this.options.offsetTop==="function"){l=l+this.options.offsetTop()
}else{if(typeof this.options.offsetTop==="number"){l=l+this.options.offsetTop}}if(typeof this.options.offsetBottom==="function"){i=i-this.options.offsetBottom()
}else{if(typeof this.options.offsetBottom==="number"){i=i-this.options.offsetBottom
}}this.min=l;this.max=i;this._distance=this.max-this.min;return this};h._onResize=function(){this._updateOnResize=true
};h._onResizeClockUpdate=function(){if(!this._updateOnResize){return}this.setOffsets()
};h._onResizeClockDraw=function(){if(!this._updateOnResize){return}this.setCurrentTime();
this._updateOnResize=false};g.exports=a},{"./ScrollTimeUpdate":211,"window-delegate":212}],211:[function(c,b,d){var f,j=c("ac-event-emitter").EventEmitter,a=c("ac-clock"),k=c("window-delegate").WindowDelegate,h=c("smoother").Smoother,i=c("ac-dom-emitter").DOMEmitter;
var g=function(n,l,m){if(n===null){return}j.call(this);this.options=m||{};this.min=n;
this.max=l;this._distance=l-n;this._clock=this.options.clock||a;this._emitter=k;
this._lastTime=null;this._timeObj=null;if(this.options.el){this._target=this.options.el;
this._emitter=new i(this.options.el)}this._shouldUpdate=false;this._shouldDraw=false;
this._didInitializeSmoothing=false;this._emitter.on("scroll",this._debounceTimeUpdate,this);
this._clock.on("update",this._onClockUpdate,this);this._clock.on("draw",this._onClockDraw,this);
if(this.options.smooth){this._enableSmoothing(true)}};f=g.prototype=new j(null);
f.setCurrentTime=function(l,m){l=l||this._getCalculatedCurrentTime();if(l===this._lastTime){return
}this._timeObj={time:l,lastTime:this._lastTime};this._triggerUpdate();if(m){this._triggerDraw()
}else{this._shouldDraw=true}this._lastTime=l};f.start=function(){this._clock.start()
};f.stop=function(){this._clock.stop()};f.setSmoothing=function(l){if(typeof l!=="boolean"){return
}if(l){this._enableSmoothing();return}this._disableSmoothing()};f._getCalculatedCurrentTime=function(){var n=k.scrollY,m=this.min,l=this.max,o=this._distance;
if(this._target){n=this._target.scrollTop}if(n<m){n=m}if(n>l){n=l}return(n-m)/(o)
};f._debounceTimeUpdate=function(){this._shouldUpdate=true};f._triggerUpdate=function(){this.trigger("_update",this._timeObj);
if(!this.options.smooth){this.trigger("update",this._timeObj)}};f._triggerDraw=function(){this.trigger("_draw",this._timeObj);
if(!this.options.smooth){this.trigger("draw",this._timeObj)}};f._onClockUpdate=function(){if(!this._shouldUpdate){return
}this.setCurrentTime();this._shouldUpdate=false};f._onClockDraw=function(){if(!this._shouldDraw){return
}this._triggerDraw();this._shouldDraw=false};f._initializeSmoothing=function(){this.options.smoothingPrecision=this.options.smoothingPrecision||4;
this.options.smoothingPoolSize=this.options.smoothingPoolSize||h.prototype.sampling;
this._smoother=new h(this.options.smoothingPoolSize);this._smoothedValues=this._lastSmoothedValues=this._lastUpdateEvent={time:null,lastTime:null};
this._didUpdateSmootherTrack=false;this._shouldUpdateAndDraw=false;this._didInitializeSmoothing=true
};f._enableSmoothing=function(l){if(!this._didInitializeSmoothing){this._initializeSmoothing()
}if(!this.options.smooth||l){this.on("_update",this._updateSmoothing,this);this._clock.on("update",this._smoothOnUpdate,this);
this._clock.on("draw",this._smoothOnDraw,this);this.options.smooth=true}};f._disableSmoothing=function(){this.off("_update",this._updateSmoothing,this);
this._clock.off("update",this._smoothOnUpdate,this);this._clock.off("draw",this._smoothOnDraw,this);
this.options.smooth=false};f._updateSmoothing=function(l){l.lastTime=l.lastTime||0;
this._lastUpdateEvent=l;this._didUpdateSmootherTrack=true};f._smoothOnUpdate=function(){var l=(this._didUpdateSmootherTrack||this._lastSmoothedValues.time!==this._smoothedValues.time||this._lastSmoothedValues.lastTime!==this._smoothedValues.lastTime);
if(!l){this._shouldUpdateAndDraw=false;return}this._didUpdateSmootherTrack=false;
var n=this._lastUpdateEvent.lastTime,m={};m.lastTime=this._smoothedValues.time;
m.time=this._smoother.smooth(this._lastUpdateEvent.time);if(m.lastTime===null){m.lastTime=parseFloat(n.toFixed(this.options.smoothingPrecision))
}m.time=parseFloat(m.time.toFixed(this.options.smoothingPrecision));m.lastTime=m.lastTime;
this._lastSmoothedValues=this._smoothedValues;this._smoothedValues=m;this._shouldUpdateAndDraw=true;
this.trigger("update",this._smoothedValues)};f._smoothOnDraw=function(l){if(!this._shouldUpdateAndDraw){return
}this.trigger("draw",this._smoothedValues);this._shouldUpdateAndDraw=false};b.exports=g
},{"ac-clock":34,"ac-dom-emitter":38,smoother:207,"window-delegate":212}],212:[function(b,c,a){c.exports.WindowDelegate=b("./window-delegate/WindowDelegate");
c.exports.windowEmitter=b("./window-delegate/windowEmitter")},{"./window-delegate/WindowDelegate":213,"./window-delegate/windowEmitter":214}],213:[function(c,f,a){var g;
var b=c("./windowEmitter");function d(){this._emitter=b;this._setWindowDimensionValues();
this._setScrollValues();this.on("resize",this._setWindowDimensionValues.bind(this));
this.on("scroll",this._setScrollValues.bind(this));this.on("touchstart",this._touchScrollStart.bind(this));
this.on("touchend",this._setZoomValues.bind(this))}g=d.prototype;g.on=function(){this._emitter.on.apply(this._emitter,arguments);
return this};g.once=function(){this._emitter.once.apply(this._emitter,arguments);
return this};g.off=function(){this._emitter.off.apply(this._emitter,arguments);
return this};g.has=function(){return this._emitter.has.apply(this._emitter,arguments)
};g.trigger=function(){this._emitter.trigger.apply(this._emitter,arguments);return this
};g.propagateTo=function(){this._emitter.propagateTo.apply(this._emitter,arguments);
return this};g.stopPropagatingTo=function(){this._emitter.stopPropagatingTo.apply(this._emitter,arguments);
return this};g.isZoomed=function(){return this.clientWidth>this.innerWidth};g._setWindowDimensionValues=function(){this.clientWidth=document.documentElement.clientWidth;
this.clientHeight=document.documentElement.clientHeight;this.innerWidth=window.innerWidth||this.clientWidth;
this.innerHeight=window.innerHeight||this.clientHeight};g._setZoomValues=function(){var h=this.innerWidth;
this.innerWidth=window.innerWidth;if(h!==this.innerWidth){this.innerHeight=window.innerHeight;
this.trigger("zoom");if(h<this.innerWidth){this.trigger("zoomIn")}else{this.trigger("zoomOut")
}}else{setTimeout(this._setZoomValues.bind(this),500)}};g._updateScrollX=function(){this.scrollX=(window.pageXOffset!==undefined)?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft;
this.maxScrollX=document.body.scrollWidth-this.innerWidth;return this.scrollX};
g._updateScrollY=function(){this.scrollY=(window.pageYOffset!==undefined)?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;
this.maxScrollY=document.body.scrollHeight-this.innerHeight;return this.scrollY
};g._setScrollValues=function(){var i=this.scrollX,h=this.scrollY;this._updateScrollX();
this._updateScrollY();if(this.scrollX!==i){this.trigger("scrollX")}if(this.scrollY!==h){this.trigger("scrollY")
}this._scrollStop()};g._scrollStop=function(){if(typeof window.ontouchstart==="undefined"){if(this._scrollStopTimer){clearTimeout(this._scrollStopTimer)
}this._scrollStopTimer=setTimeout(function(){clearTimeout(this._scrollStopTimer);
this.trigger("scrollStop")}.bind(this),300)}};g._touchScrollStart=function(){this._updateScrollX();
this._updateScrollY();this.once("touchend",this._touchScrollStop.bind(this,this.scrollX,this.scrollY))
};g._touchScrollStop=function(i,h,j){this._updateScrollX();this._updateScrollY();
if(i!==this.scrollX||h!==this.scrollY){setTimeout(this._touchScrollStop.bind(this,this.scrollX,this.scrollY,true),300)
}else{if(j){this.trigger("scrollStop")}}};f.exports=new d()},{"./windowEmitter":214}],214:[function(b,c,a){var d=b("ac-dom-emitter").DOMEmitter;
c.exports=new d(window)},{"ac-dom-emitter":38}],215:[function(b,c,a){c.exports.createAmbient=b("./factories/createAmbient");
c.exports.createBasicPlayer=b("./factories/createBasicPlayer");c.exports.createClickToPlay=b("./factories/createClickToPlay");
c.exports.createGrabber=b("./factories/createGrabber");c.exports.createScrubOnScroll=b("./factories/createScrubOnScroll")
},{"./factories/createAmbient":233,"./factories/createBasicPlayer":234,"./factories/createClickToPlay":235,"./factories/createGrabber":236,"./factories/createScrubOnScroll":237}],216:[function(c,f,b){var a=c("ac-object");
var d=c("../utils/destroy");var g;var i={};function h(l,k,j){this.options=a.defaults(i,j||{});
this.mediaObject=l;if(k&&this.View){this.view=new this.View(k,this.options)}this._setupMediaObjectListeners()
}g=h.prototype={};g.View=c("./Controller/View");g.destroy=function(){d(this,false)
};g._setupMediaObjectListeners=function(){this.mediaObject.on("play",this._onPlay,this);
this.mediaObject.on("ended",this._onEnded,this);this.mediaObject.on("pause",this._onPause,this);
this.mediaObject.on("stop",this._onStop,this);this.mediaObject.on("timeupdate",this._onTimeupdate,this);
this.mediaObject.once("loadstart",this._onLoadstart,this);this.mediaObject.once("loaded",this._onLoad,this);
this.mediaObject.once("ready",this._onReady,this)};g._onPlay=function(){};g._onEnded=function(){};
g._onPause=function(){};g._onStop=function(){};g._onTimeupdate=function(){};g._onLoadstart=function(){};
g._onLoad=function(){};g._onReady=function(){};f.exports=h},{"../utils/destroy":238,"./Controller/View":221,"ac-object":180}],217:[function(c,f,b){var a=c("ac-object");
var h=c("../Controller");var g;var i={behavior:"play",stopableWhilePlaying:true,disableWhilePlaying:false};
function d(l,k,j){h.call(this,l,k,a.defaults(i,j||{}));this.view.on("click",this._onTriggerClicked,this);
if(this.options.behavior==="stop"||this.options.behavior==="pause"){this.view.disable()
}}g=d.prototype=a.create(h.prototype);g.View=c("./View/Trigger");g._onTriggerClicked=function(j){if(this.options.behavior==="play"){if(this.view.active&&this.options.stopableWhilePlaying){this.mediaObject.stop()
}else{this.mediaObject.play()}}else{if(this.options.behavior==="stop"){this.mediaObject.stop()
}else{if(this.options.behavior==="pause"){this.mediaObject.pause()}}}};g._reset=function(){this.view.deactivate();
this.view.enable()};g._setupMediaObjectListeners=function(){this.mediaObject.on("play",this._onPlay,this);
this.mediaObject.on("pause",this._onPause,this);this.mediaObject.on("ended",this._onEnded,this);
this.mediaObject.on("stop",this._onStop,this)};g._onPlay=function(){if(this.options.behavior==="play"){this.view.activate()
}else{if(this.options.behavior==="pause"){this.view.deactivate()}}if(this.options.disableWhilePlaying){this.view.disable()
}else{if(this.options.behavior==="stop"||this.options.behavior==="pause"){this.view.enable()
}}};g._onPause=function(){if(this.options.behavior==="play"){this.view.removeReplayState();
this.view.deactivate();this.view.enable()}else{if(this.options.behavior==="pause"){this.view.activate()
}}};g._onStop=function(){this._onEnded()};g._onEnded=function(){if(this.options.behavior==="play"){this.view.addReplayState();
this.view.enable()}else{if(this.options.behavior==="stop"||this.options.behavior==="pause"){this.view.disable()
}else{this.view.enable()}}this.view.deactivate()};f.exports=d},{"../Controller":216,"./View/Trigger":223,"ac-object":180}],218:[function(c,a,h){var f=c("ac-object");
var j=c("ac-base").Element;var g=c("ac-scrollview").ScrollView;var k=c("../Controller");
var b=c("ac-clock");var i;var d={continuous:true,speed:0.25,direction:1,mouseWheel:false,mouseDrag:true,friction:0.88,bounces:false,clock:b};
function l(o,n,m){k.call(this,o,n,f.defaults(d,m||{}));this._value=null;this._setupScrollView();
this._trackScrollView();this._setupClock()}i=l.prototype=f.create(k.prototype);
i.View=c("./View/Grabbable");i._setupMediaObjectListeners=function(){};i._setupScrollView=function(){var m=j.getBoundingBox(this.view.element);
this._totalDistance=m.width*(1/this.options.speed);this._scrollview=new g(this.view.element,{contentSize:{width:this._totalDistance*2,height:m.height},friction:{x:this.options.friction,y:0.95},width:this._totalDistance,height:this._totalDistance,mouseWheel:this.options.mouseWheel,mouseDrag:this.options.mouseDrag,preventDefault:true,bounces:!this.options.continuous&&this.options.bounces});
this._scrollview.setPosition({x:this._totalDistance,y:0})};i._trackScrollView=function(){this._scrollview.on("willBeginTracking",function(m){this.view.setGrabbing(true)
},this);this._scrollview.on("didEndTracking",function(m){this.view.setGrabbing(false)
},this);this._scrollview.on("scroll",this._onScroll,this)};i._setupClock=function(){if(!this.options.clock.isRunning()){this.options.clock.start()
}this.options.clock.on("draw",this._draw,this)};i._onScroll=function(m){if(m.x>=this._totalDistance||m.x<=0){if(this.options.continuous){this._scrollview.setPosition({x:(this._totalDistance/2),y:0})
}else{}}this._value=(m.x%(this._totalDistance/2))/(this._totalDistance/2);this._value=(this.options.direction<0)?1-this._value:this._value
};i._draw=function(m){if(this._value!==null){this.mediaObject.goToDurationPercent(this._value)
}this._value=null};a.exports=l},{"../Controller":216,"./View/Grabbable":222,"ac-base":false,"ac-clock":34,"ac-object":180,"ac-scrollview":192}],219:[function(c,b,h){var j=c("ac-base").Element;
var f=c("ac-object");var a=c("scroll-time-update").ElementScrollTimeUpdate;var k=c("../Controller");
var l=c("window-delegate").WindowDelegate;var i;var d={reversed:false,smooth:true,startInView:false,offsetTop:false,offsetBottom:false};
function g(n,m){this.tracker=null;k.call(this,n,null,f.defaults(d,m||{}))}i=g.prototype=f.create(k.prototype);
i.View=null;i.start=function(){this.tracker.on("draw",this._draw,this);this.tracker.start()
};i.stop=function(){this.tracker.off("draw",this._draw);this.tracker.stop()};i.setSmoothing=function(m){this.options.smooth=!!m;
if(this.tracker){this.tracker.setSmoothing(this.options.smooth)}};i.setOffsets=function(n,m){if(this.tracker){n=this._parseOffset(n);
m=this._parseOffset(m);if(n){this.tracker.options.offsetTop=n}if(m){this.tracker.options.offsetBottom=m
}this.tracker.setOffsets();this.tracker.setCurrentTime(null,true)}};i._parseOffset=function(o){var n;
var m;if(typeof o==="number"||typeof o==="function"){return o}else{if(typeof o==="string"){if(/\%$/.test(o)){o=(parseFloat(o,10)/100);
m=function(){n=j.getBoundingBox(this).height;return n}.bind(this.mediaObject.view.container);
l.on("resize orientationchange",m);m();return function(){return o*n}}else{if(/vh$/.test(o)){o=(parseFloat(o,10)/100);
return function(){return o*l.innerHeight}}}}}return false};i._setupMediaObjectListeners=function(){if(this.mediaObject.ready){this._onReady()
}else{this.mediaObject.once("ready",this._onReady,this)}};i._onReady=function(){var m=f.clone(this.options);
m.startInView=!m.startInView;m.offsetTop=this._parseOffset(m.offsetTop);m.offsetBottom=this._parseOffset(m.offsetBottom);
this.tracker=new a(this.mediaObject.container,m);this.start()};i._draw=function(m){if(this.options.reversed){this.mediaObject.goToDurationPercent(1-m.time)
}else{this.mediaObject.goToDurationPercent(m.time)}};b.exports=g},{"../Controller":216,"ac-base":false,"ac-object":180,"scroll-time-update":209,"window-delegate":212}],220:[function(c,b,g){var f=c("ac-object");
var a=c("ac-element-engagement");var i=c("../Controller");var h;var d={reversed:false,timeToEngage:500};
function j(l,k){i.call(this,l,null,f.defaults(d,k||{}))}h=j.prototype={};h.destroy=function(){this.tracker.off();
i.prototype.destroy.call(this)};h._setupMediaObjectListeners=function(){if(this.mediaObject.ready){this._onReady()
}else{this.mediaObject.once("ready",this._onReady,this)}};h._onReady=function(){this.tracker=a.addElement(this.mediaObject.container);
if(!a.tracking){a.start()}this.tracker.once("engaged",this._onEngaged,this)};h._onEngaged=function(){if(this.options.reversed){this.mediaObject.setTime(this.mediaObject.duration);
this.mediaObject.setPlaybackRate(-1)}this.mediaObject.play();this.tracker.once("exitview",this._onExitView,this)
};h._onExitView=function(){this.mediaObject.stop()};b.exports=j},{"../Controller":216,"ac-element-engagement":54,"ac-object":180}],221:[function(c,b,g){var i=c("ac-base").Element;
var f=c("ac-object");var j=c("../../utils/destroy");var k=c("ac-event-emitter").EventEmitter;
var h;var d={stateNameActive:"renderplayer-active",stateNameDisabled:"renderplayer-disabled",stateNameReplay:"renderplayer-replay"};
function a(m,l){this.options=f.defaults(d,l||{});this.element=i.getElementById(m);
if(this.element===null){throw"RenderPlayer.Controller.View: Incorrect view element reference."
}}h=a.prototype=new k();h.addReplayState=function(){i.addClassName(this.element,this.options.stateNameReplay)
};h.removeReplayState=function(){i.removeClassName(this.element,this.options.stateNameReplay)
};h.activate=function(){this.active=true;i.addClassName(this.element,this.options.stateNameActive)
};h.deactivate=function(){this.active=false;i.removeClassName(this.element,this.options.stateNameActive)
};h.disable=function(){this.disabled=true;i.addClassName(this.element,this.options.stateNameDisabled)
};h.enable=function(){this.disabled=false;i.removeClassName(this.element,this.options.stateNameDisabled)
};h.destroy=function(){j(this)};b.exports=a},{"../../utils/destroy":238,"ac-base":false,"ac-object":180}],222:[function(b,a,f){var h=b("ac-base").Element;
var d=b("ac-object");var i=b("../View");var c={};function j(l,k){i.call(this,l,d.defaults(c,k||{}));
h.addClassName(this.element,"renderplayer-grabbable")}var g=j.prototype=d.create(i.prototype);
g.setGrabbing=function(k){if(k){h.addClassName(document.body,"renderplayer-grabbing")
}else{h.removeClassName(document.body,"renderplayer-grabbing")}};a.exports=j},{"../View":221,"ac-base":false,"ac-object":180}],223:[function(c,b,g){var i=c("ac-base").Element;
var k=c("ac-base").Function;var a=c("ac-base").Event;var f=c("ac-object");var j=c("../View");
var d={};function l(n,m){j.call(this,n,f.defaults(d,m||{}));this._boundOnClick=k.bindAsEventListener(this._onClick,this);
i.addEventListener(this.element,"click",this._boundOnClick)}var h=l.prototype=f.create(j.prototype);
h._onClick=function(m){a.stop(m);if(!this._disabled){this.trigger("click",m)}};
b.exports=l},{"../View":221,"ac-base":false,"ac-object":180}],224:[function(b,f,a){var d=b("../utils/destroy");
var g;function c(h,j,i){this.mediaObject=h;this.enhanceFunc=j;this.options=i||{};
this.mediaObject.once("enhance",this._onEnhance,this);this._loadedCheck()}g=c.prototype={};
g._enhance=function(){if(this.options.autoEnhance===false){return}if(!this.mediaObject.view.enhanced){this.mediaObject.enhance()
}};g.destroy=function(){d(this,false)};g._loadedCheck=function(){if(this.mediaObject.ready){this._onReady()
}else{this.mediaObject.load();this.mediaObject.once("ready",this._onReady,this)
}};g._onEnhance=function(){this.mediaObject.off("ready",this._onReady,this);this.enhanceFunc();
this.mediaObject.trigger("enhanced");this.destroy()};g._onReady=function(){this._enhance()
};f.exports=c},{"../utils/destroy":238}],225:[function(d,c,g){var f=d("ac-object");
var j=d("../../utils/destroy");var a=d("ac-element-engagement");var i=d("../Enhancer");
var h;function b(k,m,l){i.apply(this,arguments)}h=b.prototype=f.create(i.prototype);
h._inViewCheck=function(){if(this.mediaObject&&!this.mediaObject.view.enhanced){this.tracker=a.addElement(this.mediaObject.container);
if(!a.tracking){a.start()}a.refreshElementState(this.tracker);if(!this.tracker.inView){this._enhance()
}else{this.tracker.once("exitview",this._enhance,this)}}};h._onReady=function(){this._inViewCheck()
};c.exports=b},{"../../utils/destroy":238,"../Enhancer":224,"ac-element-engagement":54,"ac-object":180}],226:[function(c,d,a){var f;
function b(){this._active=null}f=b.prototype;f.add=function(h){h._originalPlayMethod=h.play;
h.play=this.play.bind(this,h)};f.play=function(h){if(h){this._play(h)}};f._play=function(h){if(this._active!==h){this.stop()
}this._active=h;if(!this._active._originalPlayMethod){this.add(this._active)}this._active._originalPlayMethod.call(this._active);
this._active.once("pause",this.stop,this);this._active.once("stop",this.stop,this);
this._active.once("ended",this.stop,this)};f.stop=function(h){if(this._active){this._active.off("pause",this.stop);
this._active.off("stop",this.stop);this._active.off("ended",this.stop);if(h===undefined){this._active.stop()
}}this._active=null};var g=new b();g.PlayController=b;d.exports=g},{}],227:[function(b,a,d){var c=b("ac-object");
var j=b("ac-deferredqueue").DeferredQueue;var i=b("../PlayController").PlayController;
var g;function h(){i.call(this);this.deferredQueue=new j({autoplay:true,asynchronous:true})
}g=h.prototype=c.create(i.prototype);g._play=function(k){k.once("play",this._onPlay,this);
this.deferredQueue.add(k._originalPlayMethod.bind(k))};g._onPlay=function(k){this._active=k;
this._active.once("pause",this.stop,this);this._active.once("stop",this.stop,this);
this._active.once("ended",this.stop,this)};g.stop=function(k){i.prototype.stop.call(this,k);
this.deferredQueue.didFinish()};var f=new h();f.QueuedPlayController=h;a.exports=f
},{"../PlayController":226,"ac-deferredqueue":176,"ac-object":180}],228:[function(c,d,a){d.exports=function b(f){if(f!==null){f.container.classList.add("renderplayer-canplay");
return true}return false}},{}],229:[function(b,c,a){var d=b("ac-clock").ThrottledClock;
c.exports=new d(30)},{"ac-clock":34}],230:[function(b,d,a){d.exports=function c(h,f){var g=document.createElement("a");
if(h){g.innerHTML=h}g.setAttribute("href","#");if(f&&f.parentNode){f.parentNode.replaceChild(g,f);
g.appendChild(f)}return g}},{}],231:[function(d,f,c){var b=d("ac-object");var g;
var h={pause:true,stop:true,ended:true};f.exports=function a(m,l,j){j=b.defaults(h,j||{});
var k=function(){l();l=function(){}};for(var i in j){if(j[i]){m.once(i,k)}}}},{"ac-object":180}],232:[function(b,c,a){c.exports=function d(f){f.once("loadstart",function(){f.container.classList.add("loading")
});f.once("loaded",function(){f.container.classList.remove("loading")})}},{}],233:[function(c,b,h){var k=c("ac-base").Element;
var f=c("ac-object");var l=c("./behaviors/canPlay");var i=c("./../ac-renderplayer/Controller/UserEngaged");
var o=c("./createScrubOnScroll");var n=c("./behaviors/doAfterPlay");var g=c("../ac-renderplayer/Enhancer");
var a=c("../ac-renderplayer/Enhancer/OutOfViewEnhancer");var j=c("../ac-renderplayer/PlayController/QueuedPlayController");
var d={reversed:false,startInView:false,tiedToScrollAfterPlayed:false,degradeAfterPlayed:true};
b.exports=function m(s,q,t){var r={};var p;q=f.defaults(d,q||{});if(!l(s)){return null
}j.add(s);if(q.startInView){new g(s,function(){p=new i(s,{reversed:q.reversed})
},t)}else{new a(s,function(){p=new i(s,{reversed:q.reversed})},t)}r.controllers=[p];
if(q.tiedToScrollAfterPlayed){n(s,function(){var u;var w=k.cumulativeOffset(s.container);
var v={};if(q.startInView){v.startInView=true;v.reversed=!q.reversed;v.offsetTop=w.top*-1
}u=o(s,v);r.controllers.push(u)},{ended:q.startInView})}else{if(q.degradeAfterPlayed){n(s,s.degrade.bind(s))
}}return r}},{"../ac-renderplayer/Enhancer":224,"../ac-renderplayer/Enhancer/OutOfViewEnhancer":225,"../ac-renderplayer/PlayController/QueuedPlayController":227,"./../ac-renderplayer/Controller/UserEngaged":220,"./behaviors/canPlay":228,"./behaviors/doAfterPlay":231,"./createScrubOnScroll":237,"ac-base":false,"ac-object":180}],234:[function(c,a,h){var i=c("ac-base").Element;
var j=c("./behaviors/canPlay");var f=c("../ac-renderplayer/Controller");var g=c("../ac-renderplayer/Enhancer");
var b=c("../ac-renderplayer/Enhancer/OutOfViewEnhancer");a.exports=function d(n,o){o=o||{};
var m={};var k;if(!j(n)){return null}var l=function(){var p=new f(n);m.controllers=[p]
};if(o.preventEnhanceInView){new b(n,l,o)}else{new g(n,l,o)}return m}},{"../ac-renderplayer/Controller":216,"../ac-renderplayer/Enhancer":224,"../ac-renderplayer/Enhancer/OutOfViewEnhancer":225,"./behaviors/canPlay":228,"ac-base":false}],235:[function(f,d,j){var l=f("ac-base").Element;
var h=f("ac-object");var m=f("./behaviors/canPlay");var k=f("../ac-renderplayer/Controller/ClickToPlay");
var c=f("./behaviors/createTrigger");var b=f("../ac-renderplayer/PlayController");
var o=f("./behaviors/spinner");var g={trigger:null};var i=function(q,t){var p={};
var r=l.isElement(q)?q:c("",t.container);var s=r.href.replace(/.*#/,"");if(s==="play"||s==="stop"||s==="pause"){p.behavior=s
}else{if(s==="replay"){p.behavior="play";p.stopableWhilePlaying=false;p.disableWhilePlaying=true
}}return new k(t,r,p)};var a=function(r,p){if(typeof r==="string"){r=l.selectAll(r)
}r=[].concat(r);var q=r.map(function(s){return i(s,p)});return q};d.exports=function n(r,p){var q={};
p=h.defaults(g,p||{});if(!m(r)){return null}b.add(r);o(r);q.controllers=a(p.trigger,r);
r.enhance();return q}},{"../ac-renderplayer/Controller/ClickToPlay":217,"../ac-renderplayer/PlayController":226,"./behaviors/canPlay":228,"./behaviors/createTrigger":230,"./behaviors/spinner":232,"ac-base":false,"ac-object":180}],236:[function(b,a,h){var f=b("ac-object");
var i=b("./behaviors/canPlay");var c=b("./behaviors/clock30fps");var j=b("../ac-renderplayer/Controller/Grabber");
var g=b("../ac-renderplayer/Enhancer");var k=b("./behaviors/spinner");var d={clock:c};
a.exports=function l(o,m){var n={};m=f.defaults(d,m||{});if(!i(o)){return null}k(o);
new g(o,function(){var p=new j(o,o.container,m);n.controllers=[p]});return n}},{"../ac-renderplayer/Controller/Grabber":218,"../ac-renderplayer/Enhancer":224,"./behaviors/canPlay":228,"./behaviors/clock30fps":229,"./behaviors/spinner":232,"ac-object":180}],237:[function(c,b,i){var g=c("ac-object");
var j=c("./behaviors/canPlay");var d=c("./behaviors/clock30fps");var m=c("./../ac-renderplayer/Controller/ScrubOnScroll");
var h=c("../ac-renderplayer/Enhancer");var k=c("../utils/getAttribute");var a=c("../ac-renderplayer/Enhancer/OutOfViewEnhancer");
var f={clock:d,enhanceInView:false};b.exports=function l(q,o,r){var p={};o=g.defaults(f,o||{});
o.offsetTop=o.offsetTop||k(q.container,"data-offsetTop",true);o.offsetBottom=o.offsetBottom||k(q.container,"data-offsetBottom",true);
if(!j(q)){return null}var n=function(){var s=new m(q,o);p.setOffsets=function(u,t){s.setOffsets(u,t)
};p.setSmoothing=function(t){s.setSmoothing(t)};p.controllers=[s]};if(o.startInView||o.enhanceInView){new h(q,n,r)
}else{new a(q,n,r)}return p}},{"../ac-renderplayer/Enhancer":224,"../ac-renderplayer/Enhancer/OutOfViewEnhancer":225,"../utils/getAttribute":239,"./../ac-renderplayer/Controller/ScrubOnScroll":219,"./behaviors/canPlay":228,"./behaviors/clock30fps":229,"ac-object":180}],238:[function(b,c,a){c.exports=b(32)
},{}],239:[function(c,d,a){d.exports=function b(h,g,f){var i=h.getAttribute(g)||null;
if(i){if(i==="true"){i=true}else{if(i==="false"){i=false}else{if(f){i=parseFloat(i,10)
}}}}return i}},{}],240:[function(b,c,a){c.exports=b(207)},{"./smoother/Smoother":241}],241:[function(b,c,a){c.exports=b(208)
},{}],242:[function(b,c,a){c.exports=b(209)},{"./scroll-time-update/ElementScrollTimeUpdate":243,"./scroll-time-update/ScrollTimeUpdate":244}],243:[function(b,c,a){c.exports=b(210)
},{"./ScrollTimeUpdate":244,"window-delegate":245}],244:[function(b,c,a){c.exports=b(211)
},{"ac-clock":34,"ac-dom-emitter":38,smoother:240,"window-delegate":245}],245:[function(b,c,a){c.exports=b(212)
},{"./window-delegate/WindowDelegate":246,"./window-delegate/windowEmitter":247}],246:[function(b,c,a){c.exports=b(213)
},{"./windowEmitter":247}],247:[function(b,c,a){c.exports=b(214)},{"ac-dom-emitter":38}],248:[function(d,c,i){var j=d("../shared/Shared");
var k=d("ac-base").Element;var m=d("window-delegate").WindowDelegate;var h=d("../shared/ParallaxObjectsController");
var g=d("../shared/ElementTrackersController");var b=d("../shared/RenderPlayerController");
var a=d("ac-clock");var f=d("../shared/CalloutTrackerFactory");var l=(function(){var n=new a.ThrottledClock(30);
return{initialize:function(){this.use2x=false;if(window.devicePixelRatio&&window.devicePixelRatio>1.5){this.use2x=true
}var o=j.initialize();if(o.parallax){var p=new h(this._getParallaxObjects());p.start()
}if(o.ambient){var r=new g(this._getElementTrackers());r.start();k.addClassName(document.body,"animatable")
}if(o.media){var q=new b(this._getRenderPlayerEnhancements())}return this},_getParallaxObjects:function(){return[{selectorQuery:".section-seamless .seamless-image",type:"mediumDownwards",options:{smooth:true,startInView:true,offsetTop:0,offsetBottom:function(){return m.innerHeight*0.9
}}},{selectorQuery:".section-materials .materials-image",type:"mediumUpwards",options:{smooth:true,startInView:true,offsetTop:0,offsetBottom:function(){return m.innerHeight*0.9
}}},]},_getElementTrackers:function(){var o=[];this._registerCalloutsTracker(o);
this._registerFadeInTracker(o);return o},_registerCalloutsTracker:function(p){var o=[{selector:".section-thin",targets:[".callout"],stagger:150},];
f.addToTrackerList(p,o)},_registerFadeInTracker:function(u){var t=[{selector:".section-fade-in",delay:0},];
var q=function(v){k.addClassName(v.el,"animated")};for(var r=0,p=t.length;r<p;r++){var s=t[r];
var o=s.selector;u.push({selectorQuery:o,onEnter:q,runOnce:true,options:{timeToEngage:10,inViewThreshold:0.1}})
}},_getRenderPlayerEnhancements:function(){return[{name:"thin",selectorQuery:".thin-image",interaction:"scrollable",subPath:"design",loadPriority:1,size:"xlarge",retina:this.use2x,playerOptions:{clock:n,offsetTop:this._handleThinOffsetTop,offsetBottom:this._handleThinOffsetBottom}}]
},_handleThinOffsetTop:function(){var o=0;return o},_handleThinOffsetBottom:function(){var p=k.select(".thin-image"),o=k.getBoundingBox(p),q=o.height+100;
return q}}}());c.exports=l.initialize()},{"../shared/CalloutTrackerFactory":250,"../shared/ElementTrackersController":251,"../shared/ParallaxObjectsController":254,"../shared/RenderPlayerController":255,"../shared/Shared":258,"ac-base":false,"ac-clock":34,"window-delegate":245}],249:[function(b,a,d){var f,i=b("ac-base").Element,c=b("ac-object"),k=b("window-delegate").WindowDelegate,j=b("ac-event-emitter").EventEmitter;
var g={xsmall:{width:0,content:288,touch:true},medium:{width:768,content:724},large:{width:1024,content:980,oldIE:true},xlarge:{width:1440,content:980}};
var h=function(){this.breakpoint=null;this._lastBreakpoint=null;this._handleOldIE();
this._handleTouchDevices();this._breakpointOrder=this._setBreakpointOrder();if(!this._isOldIE){k.on("resize orientationchange",this._handleResize,this);
this._handleResize()}};f=h.prototype=new j(null);f._handleResize=function(){var p=k.innerWidth,q;
var o,n,m,l=this._breakpointOrder.length;for(o=0;o<l;o++){n=this._breakpointOrder[o];
m=g[n];if(m.width>p){break}}if(o>0){o=o-1}q=g[this._breakpointOrder[o]];if(!this.breakpoint){this.breakpoint=q;
return}if(q.name===this.breakpoint.name){return}this._lastBreakpoint=this.breakpoint;
this.breakpoint=q;this.trigger("breakpoint",{incoming:this.breakpoint,outgoing:this._lastBreakpoint})
};f._setBreakpointOrder=function(){var m=[],l=[],n;for(n in g){if(g.hasOwnProperty(n)){g[n].name=n;
m.push(g[n].width)}}m.sort(function(p,o){return p-o});m.forEach(function(p){var o;
for(o in g){if(g.hasOwnProperty(o)){if(g[o].width===p){l.push(o)}}}});return l};
f._handleOldIE=function(){if(!i.hasClassName(document.documentElement,"oldie")){return
}this.breakpoint=g.large;this._isOldIE=true;this._replaceBreakpoints(function(l){return l.oldIE===true
})};f._handleTouchDevices=function(){if(i.hasClassName(document.documentElement,"touch")){return
}this._replaceBreakpoints(function(l){return !l.touch})};f._replaceBreakpoints=function(o){var m,n={},l;
for(m in g){if(g.hasOwnProperty(m)){l=g[m];if(o(l)){n[m]=c.clone(g[m])}}}g=n};a.exports=new h()
},{"ac-base":false,"ac-object":169,"window-delegate":245}],250:[function(b,c,a){var d=b("ac-base").Element;
var f=(function(){return{addToTrackerList:function(i,h){var g=this._calloutEnter.bind(this);
h.forEach(function(k,j){i.push({selectorQuery:k.selector,targets:k.targets,stagger:k.stagger,onEnter:g,delay:k.delay,runOnce:true,options:{inViewThreshold:k.inViewThreshold||0.5}})
}.bind(this))},_calloutEnter:function(i){var g=i.delay;var h=i.stagger||200;if(i.targets){i.targets.forEach(function(k,j){this._addClassWithDelay(k,h*j)
}.bind(this))}else{this._addClassWithDelay(i.el,g)}},_addClassWithDelay:function(h,g){if(g){setTimeout(function(){d.addClassName(h,"animated")
},g)}else{d.addClassName(h,"animated")}}}})();c.exports=f},{"ac-base":false}],251:[function(b,d,a){var i,g=b("ac-base").Element,c=b("ac-element-engagement").ElementEngagement,f=new c();
var h=function(j){this.elementTracker=f;this.trackedElements=this._initializeElementTrackers(j)
};i=h.prototype;i.start=function(){this.elementTracker.start()};i.stop=function(){this.elementTracker.stop()
};i._initializeElementTrackers=function(m){var l,k=m.length,j=[];for(l=0;l<k;l++){j.push(this._initializeElementTracker(m[l]))
}return j};i._initializeElementTracker=function(k){var l=g.select(k.selectorQuery),j=this.elementTracker.addElement(l,k.options),m="on";
if(k.runOnce){m="once"}if(k.onEnter){j[m]("thresholdenter",k.onEnter,this)}if(k.onExit){j[m]("thresholdexit",k.onExit,this)
}if(k.delay){j.delay=k.delay}if(k.stagger){j.stagger=k.stagger}if(k.targets){j.targets=g.selectAll(k.targets.join(","),l)
}return j};d.exports=h},{"ac-base":false,"ac-element-engagement":54}],252:[function(c,d,b){var f=c("ac-base").Element,a=c("../shared/BreakpointsDelegate");
var g=(function(){var h={medium:function(j,i,k){var l=100;if(a.breakpoint.name==="medium"){l=50
}l=k.time*l;f.setVendorPrefixStyle(j,"transform","translate3d(0,"+l+"px,0)")},videoLinks:function(l,i,m){var k=document.body.className;
var j=45;if(!/intro\-ended/.test(k)){return}l.style.transitionDuration="0, 0";l.style.transitionDelay="0, 0";
l.style.opacity=1-m.time;if(/scrollable-hero/.test(k)){f.setVendorPrefixStyle(l,"transform","translate3d(0,"+(-m.time*j)+"px,0)")
}},introCopy:function(j,i,k){var l=75;l=(1-k.time)*l;f.setVendorPrefixStyle(j,"transform","translate3d(0,"+l+"px,0)")
},comparison:function(k,i,m){var l=125;var j=200;f.setVendorPrefixStyle(i[0],"transform","translate3d(0,"+l*(1-m.time)+"px,0)");
f.setVendorPrefixStyle(i[1],"transform","translate3d(0,"+j*(1-m.time)+"px,0)")},imagePowerful:function(j,i,k){var l=70;
l=(1-k.time)*l;f.setVendorPrefixStyle(j,"transform","translate3d(0,"+l+"px,0)")
},biggestRight:function(k,i,m){var j=220*0.4;var l=150*0.4;i.forEach(function(p,n){var o=(1-m.time)*(n?j:l);
f.setVendorPrefixStyle(p,"transform","translate3d(0,"+o+"px,0)")})},biggestLeft:function(j,i,k){offset=(1-k.time)*offset;
f.setVendorPrefixStyle(j,"transform","translate3d(0,"+offset+"px,0)")},largeUpwards:function(j,i,k){var l=150;
l=(1-k.time)*l;if(i){i.forEach(function(m){f.setVendorPrefixStyle(m,"transform","translate3d(0,"+l+"px,0)")
})}else{f.setVendorPrefixStyle(j,"transform","translate3d(0,"+l+"px,0)")}},largeDownwards:function(j,i,k){var l=100;
l=-(1-k.time)*l;f.setVendorPrefixStyle(j,"transform","translate3d(0,"+l+"px,0)")
},extraLargeDownwards:function(j,i,k){var l=220;l=-(1-k.time)*l;i.forEach(function(m){f.setVendorPrefixStyle(m,"transform","translate3d(0,"+l+"px,0)")
})},mediumUpwards:function(j,i,k){var l=50;l=(1-k.time)*l;f.setVendorPrefixStyle(j,"transform","translate3d(0,"+l+"px,0)")
},mediumTwoUpwards:function(k,i,m){var j=50;var l=100;i.forEach(function(r,o){var p=o?j:l;
var q=(1-m.time)*p;var n=(1-m.time)*10;f.setVendorPrefixStyle(r,"transform","translate3d( "+n+"px, "+q+"px,0)")
})},mediumDownwards:function(j,i,k){var l=50;l=-(1-k.time)*l;f.setVendorPrefixStyle(j,"transform","translate3d(0,"+l+"px,0)")
}};return{getFunctionByKey:function(i){return h[i]}}}());d.exports=g},{"../shared/BreakpointsDelegate":249,"ac-base":false}],253:[function(c,d,b){var g,f=c("ac-event-emitter").EventEmitter,a=c("scroll-time-update").ElementScrollTimeUpdate;
var h=function(j,k,i){this._scrollHandler=new a(j,i);this._scrollHandler.on("draw",k);
if(!i.preventStart){this._scrollHandler.setCurrentTime()}};g=h.prototype=new f(null);
g.start=function(){this._scrollHandler._clock.start();return this};g.stop=function(){this._scrollHandler._clock.stop();
return this};g.resize=function(){this._scrollHandler.setOffsets()};d.exports=h},{"scroll-time-update":242}],254:[function(b,d,a){var h,f=b("ac-base").Element,g=b("./ParallaxFunctions"),i=b("./ParallaxObject");
var c=function(j){this.parallaxObjects=this._initializeParallaxObjects(j);this.resize=this.resize.bind(this)
};h=c.prototype;h.start=function(){this.parallaxObjects.forEach(function(j){j.start()
})};h.resize=function(){this.parallaxObjects.forEach(function(j){j.resize()})};
h.stop=function(){this.parallaxObjects.forEach(function(j){j.stop()})};h._initializeParallaxObjects=function(l){var k=[],j=l.length,m;
for(m=0;m<j;m++){k.push(this._initializeParallaxObject(l[m]))}return k};h._initializeParallaxObject=function(k){var m=f.select(k.selectorQuery),j=k.targets?f.selectAll(k.targets.join(","),m):null,n=g.getFunctionByKey(k.type),l=new i(m,n.bind(null,m,j),k.options);
return l};d.exports=c},{"./ParallaxFunctions":252,"./ParallaxObject":253,"ac-base":false}],255:[function(j,f,s){var o,k=window.mediaConfig,b=j("./experienceReport"),a=j("ac-deferred").Deferred,l=j("ac-deferred").all,t=j("ac-object"),r=j("ac-base").Element,m=j("ac-base").Environment,i=j("ac-event-emitter").EventEmitter,d=j("ac-media-object"),n=j("ac-renderplayer"),g=j("ac-element-tracker"),h=j("./BreakpointsDelegate"),q=j("./RenderPlayerEnvironment");
var p={subPath:"",loadPriority:2,interaction:"scroll",filename:"asset",retina:false,playerOptions:{},controllerOptions:{hideOutOfView:true}};
var c=function(u){i.call(this);this.promises=[];this.elementTrackers=[];this.enhancements={};
this.mediaObjects={};this.renderPlayers={};this._initialize(u)};o=c.prototype=new i(null);
o._initialize=function(F){var y,D,w,v,E,C,x,A,u,B,z=F.length;for(y=0;y<z;y++){if(k&&k.videos&&k.videos.indexOf(F[y].name)===-1){continue
}C=t.defaults(p,F[y]);C=this._mixinExperienceReportOptions(C);w=r.select(C.selectorQuery);
D=C.key||C.name;u=C.filename;if(typeof C.size==="undefined"){C=this._setEnhancementSize(C);
u=C.filename}else{if(C.size&&C.size.length>0){u=C.filename+"_"+C.size}}if(C.retina){u=u+"_2x"
}B=false||C.forceElementLoading;E=d.cname(q.getBasePath()+"/"+C.subPath+"/"+C.name+"/");
x=d.create(w,{basePath:E,filename:u,fileFormat:C.fileFormat},{preload:false,type:C.type,forceElementLoading:B});
if(C.interaction==="ambient"){A=n.createAmbient(x,C.playerOptions)}else{if(C.interaction==="scrollable"){A=n.createScrubOnScroll(x,C.playerOptions)
}else{if(C.interaction==="basic"){A=n.createBasicPlayer(x,C.playerOptions)}else{throw new TypeError("Interaction not defined for RenderPlayer asset");
return}}}v=new a();this.promises.push(v.promise());this.enhancements[D]=C;this.mediaObjects[D]=x;
this.renderPlayers[D]=A;this._bindEvents(D,x,A,v,C,w)}l(this.promises).then(this._handleAssetsReady.bind(this))
};o._mixinExperienceReportOptions=function(u){if(!u.type){var v=u.interaction;if(v==="basic"){v="ambient"
}u.type=b[v].experience;u.fileFormat=q.getEnhancementFileFormats()[u.type]}return u
};o._bindEvents=function(w,z,u,A,v,x){z.once("ready",this._handleMediaObjectReady.bind(this,w,A));
z.once("enhance",this._handleMediaObjectEnhanced.bind(this,w,z));var y;if(v.controllerOptions.hideOutOfView){this._addTracker(z,x,y,w)
}};o._addTracker=function(y,v,x,u){var w=g.addElement(v);w.on("enterview",this._onElementEnter.bind(this,y,v,x,u));
w.on("exitview",this._onElementExit.bind(this,y,v,x,u));this.elementTrackers.push(w)
};o._onElementEnter=function(x,v,w,u){w=w||x._mediaElement;r.removeClassName(w,"hidden")
};o._onElementExit=function(x,v,w,u){if(u==="hero-intro"){x.destroy();v.parentNode.removeChild(v);
return}w=w||x._mediaElement;r.addClassName(w,"hidden")};o._handleMediaObjectReady=function(u,w,v){this.trigger("assetReady",{key:u,asset:v});
w.resolve()};o._handleMediaObjectEnhanced=function(u,v){this.trigger("enhanced",{key:u,asset:v})
};o._setEnhancementSize=function(v){var u=h.breakpoint.name;if(u==="xsmall"){u="medium"
}v.size=u;v.filename=v.filename+"_"+v.size;return v};o._handleAssetsReady=function(){this.trigger("complete",this.renderPlayers)
};f.exports=c},{"./BreakpointsDelegate":249,"./RenderPlayerEnvironment":256,"./experienceReport":259,"ac-base":false,"ac-element-tracker":67,"ac-media-object":154,"ac-object":169,"ac-renderplayer":215}],256:[function(c,d,a){var f=window.mediaConfig;
var b=(function(){var h="us",g={basePath:"/105/media",hash:"cb62df28-5fd5-4ca9-a9be-78f836f209b0",baseSubdirectory:"iphone-6/2014"};
var i={h264:"mp4"};return{getBasePath:function(){var j=h,k=g.hash;if(f&&f.locale){j=f.locale
}if(f&&f.hash){k=f.hash}return g.basePath+"/"+j+"/"+g.baseSubdirectory+"/"+k},getEnhancementFileFormats:function(){return i
}}}());d.exports=b},{}],257:[function(c,g,b){var f=c("scroll-time-update").ScrollTimeUpdate;
var i=c("ac-event-emitter").EventEmitter;var h=c("ac-base").Element;var d=c("window-delegate").WindowDelegate;
g.exports=a;function a(k){this.el=k?h.select(this.selector,k):h.select(this.selector);
if(!this.el){return}this.scrollTimeUpdate=new f(0,1,{startInView:true,smooth:true});
this.prev=this.el.previousElementSibling;this.isFixed=false;this.onscroll=this.onscroll.bind(this);
this.readPosition=this.readPosition.bind(this);this.start=this.start.bind(this);
this.figure=h.select("figure",this.el);d.on("scroll",this.onscroll);d.on("resize",this.readPosition);
var m=100;var j=this;var l=h.select(".section-copy",this.el);this.scrollTimeUpdate.on("update",function(n){h.setVendorPrefixStyle(j.figure,"transform","translate3d(0,"+(1-n.time)*m+"px,0)");
j.el.style.opacity=n.time})}a.isSupported=(function(){var j=document.createElement("div");
return !!(j.getBoundingClientRect)})();a.prototype.selector=".section-next";a.prototype.onscroll=function(){var n=d.scrollY;
var k=this.prevOffsetBottom;var j=d.innerHeight;var m=0;var l;if(!k||k>=n+j){l=false
}else{l=k>n+this.delta;m=1-(k-(n+this.delta))/this.height}if(l===this.isFixed){return
}if(l){this.el.style.position="fixed";this.el.style.bottom="0";this.prev.style.marginBottom=this.height+"px"
}else{this.el.style.position="";this.el.style.bottom="";this.prev.style.marginBottom=""
}this.isFixed=l};a.prototype.readPosition=function(){var l=this.prev.getBoundingClientRect();
this.height=this.el.clientHeight;this.delta=d.innerHeight-this.height;this.prevOffsetBottom=d.scrollY+l.top+l.height;
var k=this.scrollTimeUpdate.min=this.prevOffsetBottom-d.innerHeight;var j=this.scrollTimeUpdate.max=this.prevOffsetBottom-d.innerHeight+this.height;
this.scrollTimeUpdate._distance=j-k};a.prototype.start=function(){this.readPosition();
this.scrollTimeUpdate.start()}},{"ac-base":false,"scroll-time-update":242,"window-delegate":245}],258:[function(c,a,f){var d=c("./localnav");
var b=c("./RevealNext");var j=c("./BreakpointsDelegate");var g=c("ac-base").Environment;
var i=c("ac-base").Element;var h=(function(){var m=false,l=null,k=false;return{initialize:function(){if(m){return
}d.initialize();if(k){this.appRouter=new AppRouter();this.ajaxPageLoader=new AjaxPageLoader();
this.pageTransitionDelegate=new PageTransitionDelegate(this.appRouter,this.ajaxPageLoader)
}m=true;var n={ambient:true,parallax:true,media:false,heroIntro:false};if(j.breakpoint.name==="xsmall"||g.Feature.touchAvailable()){n.parallax=false;
n.media=false;n.ambient=false}if(i.hasClassName(document.documentElement,"media")&&(!g.Feature.touchAvailable())&&this.canUseMP4Video()){n.media=true
}else{if(i.hasClassName(document.documentElement,"hero-intro")){n.heroIntro=true
}}return n},getInitialized:function(){return m},getRoutingEnabled:function(){return k
},setRoutingEnabled:function(n){if(typeof n!=="boolean"){return}k=n},canUseMP4Video:function(){if(l!==null){return l
}try{var n=document.createElement("VIDEO");if(n.canPlayType&&n.canPlayType("video/mp4").replace(/no/," ")){l=true;
return true}}catch(o){}l=false;return false}}}());a.exports=h},{"./BreakpointsDelegate":249,"./RevealNext":257,"./localnav":260,"ac-base":false}],259:[function(c,f,b){var d=c("ac-experience-reporter");
var a=c("../../../build/asset-type-matrix.json");function g(){var h={};Object.keys(a).forEach(function(i){h[i]=d.newExperience(a[i])
});return h}f.exports=g()},{"../../../build/asset-type-matrix.json":1,"ac-experience-reporter":77}],260:[function(b,d,a){var h=b("ac-dom-emitter").DOMEmitter;
var f=b("ac-base").Element;var c=b("window-delegate").WindowDelegate;var g=b("ac-analytics");
var i=(function(){return{opened:false,closeThreshold:0,initialize:function(){var k=f.getElementById("globalheader");
this.globalheaderHeight=k?k.offsetHeight:46;this.localNav=f.getElementById("localnav");
this.menu=f.getElementById("menu");this.curtain=f.getElementById("curtain");this.main=f.getElementById("main");
this.footer=f.select(".footer-wrapper");var j=f.getElementById("explore-btn");this.menuEmitter=new h(this.menu);
c.on("scroll",this.navTrackPosition.bind(this));f.addEventListener(j,"click",this.toggle.bind(this));
f.addEventListener(this.curtain,"click",this.onCurtainTouch.bind(this));this.menuEmitter.on("transitionend webkitTransitionEnd oTransitionEnd",this.onTransitionEnd.bind(this));
if(typeof g==="object"){new g.observer.Event(this.menuEmitter,{interactionEvents:["localnav-open"]})
}return this},onTransitionEnd:function(){f.removeClassName(this.menu,"translating");
f.addClassName(this.menu,"translate-ended")},translate:function(){f.removeClassName(this.menu,"translate-ended");
f.addClassName(this.menu,"translating")},open:function(){f.addClassName(this.localNav,"open");
f.addClassName(this.curtain,"open");this.translate();this.opened=true;this.openedAt=c.scrollY;
var j=f.hasClassName(this.localNav,"lock")?"locked":"unlocked";this.menuEmitter.trigger("localnav-open",{prop3:"{PAGE_NAME_NO_LOCALE} - explore - "+j,title:"{PAGE_NAME_NO_LOCALE} - explore - "+j})
},close:function(){f.removeClassName(this.localNav,"open");f.removeClassName(this.curtain,"open");
this.translate();this.opened=false},toggle:function(){if(this.opened){this.close()
}else{this.open()}},onCurtainTouch:function(j){if(this.opened){this.close()}},withinThreshold:function(j){return(j>this.openedAt+this.closeThreshold)||(j<this.openedAt-this.closeThreshold)
},navTrackPosition:function(j){var k=c.scrollY;if(k>=this.globalheaderHeight){f.addClassName(this.localNav,"lock")
}else{f.removeClassName(this.localNav,"lock")}if(this.opened&&this.withinThreshold(k)){this.close()
}}}}());d.exports=i},{"ac-base":false,"ac-dom-emitter":38,"window-delegate":245}]},{},[248]);