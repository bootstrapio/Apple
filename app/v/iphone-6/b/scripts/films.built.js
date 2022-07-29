(function e(b,g,d){function c(k,i){if(!g[k]){if(!b[k]){var h=typeof require=="function"&&require;
if(!i&&h){return h(k,!0)}if(a){return a(k,!0)}throw new Error("Cannot find module '"+k+"'")
}var j=g[k]={exports:{}};b[k][0].call(j.exports,function(l){var m=b[k][1][l];return c(m?m:l)
},j,j.exports,e,b,g,d)}return g[k].exports}var a=typeof require=="function"&&require;
for(var f=0;f<d.length;f++){c(d[f])}return c})({1:[function(b,c,a){if(!Array.prototype.filter){Array.prototype.filter=function d(l,k){var j=Object(this);
var f=j.length>>>0;var h;var g=[];if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}for(h=0;h<f;h+=1){if(h in j&&l.call(k,j[h],h,j)){g.push(j[h])}}return g}}},{}],2:[function(b,c,a){if(!Array.prototype.some){Array.prototype.some=function d(k,j){var g=Object(this);
var f=g.length>>>0;var h;if(typeof k!=="function"){throw new TypeError(k+" is not a function")
}for(h=0;h<f;h+=1){if(h in g&&k.call(j,g[h],h,g)===true){return true}}return false
}}},{}],3:[function(d,f,b){var g=d("./ac-browser/BrowserData");var a=/applewebkit/i;
var h=d("./ac-browser/IE");var c=g.create();c.isWebKit=function(i){var j=i||window.navigator.userAgent;
return j?!!a.test(j):false};c.lowerCaseUserAgent=navigator.userAgent.toLowerCase();
if(c.name==="IE"){c.IE={documentMode:h.getDocumentMode()}}f.exports=c},{"./ac-browser/BrowserData":4,"./ac-browser/IE":5}],4:[function(b,c,a){b("ac-polyfills/Array/prototype.filter");
b("ac-polyfills/Array/prototype.some");var d=b("./data");function f(){}f.prototype={__getBrowserVersion:function(h,i){var g;
if(!h||!i){return}var j=d.browser.filter(function(k){return k.identity===i});j.some(function(m){var k=m.versionSearch||i;
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
};c.exports=f},{"./data":6,"ac-polyfills/Array/prototype.filter":1,"ac-polyfills/Array/prototype.some":2}],5:[function(b,c,a){c.exports={getDocumentMode:function(){var d;
if(document.documentMode){d=parseInt(document.documentMode,10)}else{d=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){d=7
}}}return d}}},{}],6:[function(b,c,a){c.exports={browser:[{string:window.navigator.userAgent,subString:"Edge",identity:"Edge"},{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],7:[function(c,d,b){var g=c("./ac-clock/Clock"),f=c("./ac-clock/ThrottledClock"),a=c("./ac-clock/sharedClockInstance");
a.Clock=g;a.ThrottledClock=f;d.exports=a},{"./ac-clock/Clock":8,"./ac-clock/ThrottledClock":9,"./ac-clock/sharedClockInstance":10}],8:[function(c,d,b){var g;
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
},{}],9:[function(c,d,b){var g;var a=c("./sharedClockInstance"),f=c("ac-event-emitter").EventEmitter;
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
};d.exports=h},{"./sharedClockInstance":10}],10:[function(b,c,a){var d=b("./Clock");
c.exports=new d()},{"./Clock":8}],11:[function(b,c,a){c.exports.DOMEmitter=b("./ac-dom-emitter/DOMEmitter")
},{"./ac-dom-emitter/DOMEmitter":12}],12:[function(b,c,a){var g;var f=b("ac-event-emitter").EventEmitter;
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
this.off();this.el=this._eventEmitter=this._bindings=null};c.exports=h},{}],13:[function(c,f,b){var g=c("ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");f.exports=function d(k,j,i){h.childNode(k,true,"ancestors");
h.selector(j,false,"ancestors");if(i&&g(k)&&(!j||a(k,j))){return k}if(k!==document.body){while((k=k.parentNode)&&g(k)){if(!j||a(k,j)){return k
}if(k===document.body){break}}}return null}},{"./internal/validate":20,"./matchesSelector":22,"ac-dom-nodes/isElement":33}],14:[function(c,d,b){var g=c("ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function f(l,j,i){var k=[];
h.childNode(l,true,"ancestors");h.selector(j,false,"ancestors");if(i&&g(l)&&(!j||a(l,j))){k.push(l)
}if(l!==document.body){while((l=l.parentNode)&&g(l)){if(!j||a(l,j)){k.push(l)}if(l===document.body){break
}}}return k}},{"./internal/validate":20,"./matchesSelector":22,"ac-dom-nodes/isElement":33}],15:[function(d,g,c){var b=d("ac-dom-nodes/filterByNodeType");
var a=d("./filterBySelector");var h=d("./internal/validate");g.exports=function f(k,i){var j;
h.parentNode(k,true,"children");h.selector(i,false,"children");j=k.children||k.childNodes;
j=b(j);if(i){j=a(j,i)}return j}},{"./filterBySelector":16,"./internal/validate":20,"ac-dom-nodes/filterByNodeType":30}],16:[function(d,f,c){d("ac-polyfills/Array/prototype.slice");
d("ac-polyfills/Array/prototype.filter");var b=d("./matchesSelector");var g=d("./internal/validate");
f.exports=function a(i,h){g.selector(h,true,"filterBySelector");i=Array.prototype.slice.call(i);
return i.filter(function(j){return b(j,h)})}},{"./internal/validate":20,"./matchesSelector":22,"ac-polyfills/Array/prototype.filter":35,"ac-polyfills/Array/prototype.slice":38}],17:[function(b,d,a){var c=b("./children");
var g=b("./internal/validate");d.exports=function f(j,h){var i;g.parentNode(j,true,"firstChild");
g.selector(h,false,"firstChild");if(j.firstElementChild&&!h){return j.firstElementChild
}i=c(j,h);if(i.length){return i[0]}return null}},{"./children":15,"./internal/validate":20}],18:[function(b,c,a){c.exports={ancestor:b("./ancestor"),ancestors:b("./ancestors"),children:b("./children"),filterBySelector:b("./filterBySelector"),firstChild:b("./firstChild"),lastChild:b("./lastChild"),matchesSelector:b("./matchesSelector"),nextSibling:b("./nextSibling"),nextSiblings:b("./nextSiblings"),previousSibling:b("./previousSibling"),previousSiblings:b("./previousSiblings"),querySelector:b("./querySelector"),querySelectorAll:b("./querySelectorAll"),siblings:b("./siblings")}
},{"./ancestor":13,"./ancestors":14,"./children":15,"./filterBySelector":16,"./firstChild":17,"./lastChild":21,"./matchesSelector":22,"./nextSibling":23,"./nextSiblings":24,"./previousSibling":39,"./previousSiblings":40,"./querySelector":41,"./querySelectorAll":42,"./siblings":45}],19:[function(b,c,a){c.exports=window.Element?(function(d){return d.matches||d.matchesSelector||d.webkitMatchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector
}(Element.prototype)):null},{}],20:[function(g,c,i){g("ac-polyfills/Array/prototype.indexOf");
var o=g("ac-dom-nodes/isNode");var b=g("ac-dom-nodes/COMMENT_NODE");var k=g("ac-dom-nodes/DOCUMENT_FRAGMENT_NODE");
var j=g("ac-dom-nodes/DOCUMENT_NODE");var h=g("ac-dom-nodes/ELEMENT_NODE");var f=g("ac-dom-nodes/TEXT_NODE");
var a=function(r,q){if(!o(r)){return false}if(typeof q==="number"){return(r.nodeType===q)
}return(q.indexOf(r.nodeType)!==-1)};var m=[h,j,k];var n=" must be an Element, Document, or Document Fragment";
var p=[h,f,b];var l=" must be an Element, TextNode, or Comment";var d=" must be a string";
c.exports={parentNode:function(q,t,s,r){r=r||"node";if((q||t)&&!a(q,m)){throw new TypeError(s+": "+r+n)
}},childNode:function(q,t,s,r){r=r||"node";if(!q&&!t){return}if(!a(q,p)){throw new TypeError(s+": "+r+l)
}},selector:function(q,t,s,r){r=r||"selector";if((q||t)&&typeof q!=="string"){throw new TypeError(s+": "+r+d)
}}}},{"ac-dom-nodes/COMMENT_NODE":25,"ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":26,"ac-dom-nodes/DOCUMENT_NODE":27,"ac-dom-nodes/ELEMENT_NODE":28,"ac-dom-nodes/TEXT_NODE":29,"ac-dom-nodes/isNode":34,"ac-polyfills/Array/prototype.indexOf":37}],21:[function(b,d,a){var c=b("./children");
var g=b("./internal/validate");d.exports=function f(j,h){var i;g.parentNode(j,true,"lastChild");
g.selector(h,false,"lastChild");if(j.lastElementChild&&!h){return j.lastElementChild
}i=c(j,h);if(i.length){return i[i.length-1]}return null}},{"./children":15,"./internal/validate":20}],22:[function(d,f,c){var g=d("ac-dom-nodes/isElement");
var a=d("./internal/nativeMatches");var i=d("./internal/validate");var h=d("./vendor/sizzle/sizzle");
f.exports=function b(k,j){i.selector(j,true,"matchesSelector");if(!g(k)){return false
}if(!a){return h.matchesSelector(k,j)}return a.call(k,j)}},{"./internal/nativeMatches":19,"./internal/validate":20,"./vendor/sizzle/sizzle":46,"ac-dom-nodes/isElement":33}],23:[function(c,d,b){var f=c("ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function g(j,i){h.childNode(j,true,"nextSibling");
h.selector(i,false,"nextSibling");if(j.nextElementSibling&&!i){return j.nextElementSibling
}while(j=j.nextSibling){if(f(j)){if(!i||a(j,i)){return j}}}return null}},{"./internal/validate":20,"./matchesSelector":22,"ac-dom-nodes/isElement":33}],24:[function(d,f,b){var g=d("ac-dom-nodes/isElement");
var a=d("./matchesSelector");var h=d("./internal/validate");f.exports=function c(k,i){var j=[];
h.childNode(k,true,"nextSiblings");h.selector(i,false,"nextSiblings");while(k=k.nextSibling){if(g(k)){if(!i||a(k,i)){j.push(k)
}}}return j}},{"./internal/validate":20,"./matchesSelector":22,"ac-dom-nodes/isElement":33}],25:[function(b,c,a){c.exports=8
},{}],26:[function(b,c,a){c.exports=11},{}],27:[function(b,c,a){c.exports=9},{}],28:[function(b,c,a){c.exports=1
},{}],29:[function(b,c,a){c.exports=3},{}],30:[function(d,f,c){d("ac-polyfills/Array/prototype.slice");
d("ac-polyfills/Array/prototype.filter");var g=d("./internal/isNodeType");var a=d("./ELEMENT_NODE");
f.exports=function b(i,h){h=h||a;i=Array.prototype.slice.call(i);return i.filter(function(j){return g(j,h)
})}},{"./ELEMENT_NODE":28,"./internal/isNodeType":31,"ac-polyfills/Array/prototype.filter":35,"ac-polyfills/Array/prototype.slice":38}],31:[function(b,c,a){var d=b("../isNode");
c.exports=function f(h,g){if(!d(h)){return false}if(typeof g==="number"){return(h.nodeType===g)
}return(g.indexOf(h.nodeType)!==-1)}},{"../isNode":34}],32:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./DOCUMENT_FRAGMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_FRAGMENT_NODE":26,"./internal/isNodeType":31}],33:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./ELEMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./ELEMENT_NODE":28,"./internal/isNodeType":31}],34:[function(b,c,a){c.exports=function d(f){return !!(f&&f.nodeType)
}},{}],35:[function(b,c,a){c.exports=b(1)},{}],36:[function(b,c,a){if(!Array.prototype.forEach){Array.prototype.forEach=function d(k,j){var h=Object(this);
var f;var g;if(typeof k!=="function"){throw new TypeError("No function object passed to forEach.")
}for(f=0;f<this.length;f+=1){g=h[f];k.call(j,g,f,h)}}}},{}],37:[function(b,c,a){if(!Array.prototype.indexOf){Array.prototype.indexOf=function d(g,h){var i=h||0;
var f=0;if(i<0){i=this.length+h-1;if(i<0){throw"Wrapped past beginning of array while looking up a negative start index."
}}for(f=0;f<this.length;f++){if(this[f]===g){return f}}return(-1)}}},{}],38:[function(b,c,a){(function(){var d=Array.prototype.slice;
try{d.call(document.documentElement)}catch(f){Array.prototype.slice=function(n,j){j=(typeof j!=="undefined")?j:this.length;
if(Object.prototype.toString.call(this)==="[object Array]"){return d.call(this,n,j)
}var l,h=[],k,g=this.length;var o=n||0;o=(o>=0)?o:g+o;var m=(j)?j:g;if(j<0){m=g+j
}k=m-o;if(k>0){h=new Array(k);if(this.charAt){for(l=0;l<k;l++){h[l]=this.charAt(o+l)
}}else{for(l=0;l<k;l++){h[l]=this[o+l]}}}return h}}}())},{}],39:[function(c,d,b){var g=c("ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function f(j,i){h.childNode(j,true,"previousSibling");
h.selector(i,false,"previousSibling");if(j.previousElementSibling&&!i){return j.previousElementSibling
}while(j=j.previousSibling){if(g(j)){if(!i||a(j,i)){return j}}}return null}},{"./internal/validate":20,"./matchesSelector":22,"ac-dom-nodes/isElement":33}],40:[function(c,d,b){var f=c("ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function g(k,i){var j=[];
h.childNode(k,true,"previousSiblings");h.selector(i,false,"previousSiblings");while(k=k.previousSibling){if(f(k)){if(!i||a(k,i)){j.push(k)
}}}return j.reverse()}},{"./internal/validate":20,"./matchesSelector":22,"ac-dom-nodes/isElement":33}],41:[function(c,d,a){var g=c("./internal/validate");
var b=c("./shims/querySelector");d.exports=function f(h,i){i=i||document;g.parentNode(i,true,"querySelector","context");
g.selector(h,true,"querySelector");if(!i.querySelector){return b(h,i)}return i.querySelector(h)
}},{"./internal/validate":20,"./shims/querySelector":43}],42:[function(b,c,a){b("ac-polyfills/Array/prototype.slice");
var g=b("./internal/validate");var f=b("./shims/querySelectorAll");c.exports=function d(h,i){i=i||document;
g.parentNode(i,true,"querySelectorAll","context");g.selector(h,true,"querySelectorAll");
if(!i.querySelectorAll){return f(h,i)}return Array.prototype.slice.call(i.querySelectorAll(h))
}},{"./internal/validate":20,"./shims/querySelectorAll":44,"ac-polyfills/Array/prototype.slice":38}],43:[function(b,c,a){var d=b("./querySelectorAll");
c.exports=function f(h,i){var g=d(h,i);return g.length?g[0]:null}},{"./querySelectorAll":44}],44:[function(b,c,a){b("ac-polyfills/Array/prototype.forEach");
var g=b("../vendor/sizzle/sizzle");var h=b("../children");var f=b("ac-dom-nodes/isDocumentFragment");
c.exports=function d(i,k){var j;var l;if(f(k)){j=h(k);l=[];j.forEach(function(n){var m;
if(g.matchesSelector(n,i)){l.push(n)}m=g(i,n);if(m.length){l=l.concat(m)}});return l
}return g(i,k)}},{"../children":15,"../vendor/sizzle/sizzle":46,"ac-dom-nodes/isDocumentFragment":32,"ac-polyfills/Array/prototype.forEach":36}],45:[function(b,d,a){var c=b("./children");
var g=b("./internal/validate");d.exports=function f(j,h){var i=[];g.childNode(j,true,"siblings");
g.selector(h,false,"siblings");if(j.parentNode){i=c(j.parentNode,h);i=i.filter(function(k){return(k!==j)
})}return i}},{"./children":15,"./internal/validate":20}],46:[function(b,c,a){
/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2012, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(ad,v){var ai,D,u,h,n,l=ad.document,o=l.documentElement,L="undefined",p=false,m=true,t=0,y=[].slice,ah=[].push,al=("sizcache"+Math.random()).replace(".",""),O="[\\x20\\t\\r\\n\\f]",x="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])",w="(?:[\\w#_-]|[^\\x00-\\xa0]|\\\\.)",aq="([*^$|!~]?=)",aa="\\["+O+"*("+x+"+)"+O+"*(?:"+aq+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+w+"+)|)|)"+O+"*\\]",ar=":("+x+"+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|(.*))\\)|)",Q=":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",s=O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*",r="(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|"+aa+"|"+ar.replace(2,7)+"|[^\\\\(),])+",aj=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),U=new RegExp("^"+s),I=new RegExp(r+"?(?="+O+"*,|$)","g"),Y=new RegExp("^(?:(?!,)(?:(?:^|,)"+O+"*"+r+")*?|"+O+"*(.*?))(\\)|$)"),ao=new RegExp(r.slice(19,-6)+"\\x20\\t\\r\\n\\f>+~])+|"+s,"g"),Z=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,ae=/[\x20\t\r\n\f]*[+~]/,am=/:not\($/,E=/h\d/i,ab=/input|select|textarea|button/i,H=/\\(?!\\)/g,T={ID:new RegExp("^#("+x+"+)"),CLASS:new RegExp("^\\.("+x+"+)"),NAME:new RegExp("^\\[name=['\"]?("+x+"+)['\"]?\\]"),TAG:new RegExp("^("+x.replace("[-","[-\\*")+"+)"),ATTR:new RegExp("^"+aa),PSEUDO:new RegExp("^"+ar),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),POS:new RegExp(Q,"ig"),needsContext:new RegExp("^"+O+"*[>+~]|"+Q,"i")},ag={},F=[],A={},J=[],an=function(at){at.sizzleFilter=true;
return at},i=function(at){return function(au){return au.nodeName.toLowerCase()==="input"&&au.type===at
}},G=function(at){return function(av){var au=av.nodeName.toLowerCase();return(au==="input"||au==="button")&&av.type===at
}},W=function(at){var au=false,aw=l.createElement("div");try{au=at(aw)}catch(av){}aw=null;
return au},C=W(function(au){au.innerHTML="<select></select>";var at=typeof au.lastChild.getAttribute("multiple");
return at!=="boolean"&&at!=="string"}),f=W(function(au){au.id=al+0;au.innerHTML="<a name='"+al+"'></a><div name='"+al+"'></div>";
o.insertBefore(au,o.firstChild);var at=l.getElementsByName&&l.getElementsByName(al).length===2+l.getElementsByName(al+0).length;
n=!l.getElementById(al);o.removeChild(au);return at}),k=W(function(at){at.appendChild(l.createComment(""));
return at.getElementsByTagName("*").length===0}),S=W(function(at){at.innerHTML="<a href='#'></a>";
return at.firstChild&&typeof at.firstChild.getAttribute!==L&&at.firstChild.getAttribute("href")==="#"
}),R=W(function(at){at.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";
if(!at.getElementsByClassName||at.getElementsByClassName("e").length===0){return false
}at.lastChild.className="e";return at.getElementsByClassName("e").length!==1});
var ac=function(aw,at,ay,aB){ay=ay||[];at=at||l;var az,au,aA,av,ax=at.nodeType;
if(ax!==1&&ax!==9){return[]}if(!aw||typeof aw!=="string"){return ay}aA=z(at);if(!aA&&!aB){if((az=Z.exec(aw))){if((av=az[1])){if(ax===9){au=at.getElementById(av);
if(au&&au.parentNode){if(au.id===av){ay.push(au);return ay}}else{return ay}}else{if(at.ownerDocument&&(au=at.ownerDocument.getElementById(av))&&P(at,au)&&au.id===av){ay.push(au);
return ay}}}else{if(az[2]){ah.apply(ay,y.call(at.getElementsByTagName(aw),0));return ay
}else{if((av=az[3])&&R&&at.getElementsByClassName){ah.apply(ay,y.call(at.getElementsByClassName(av),0));
return ay}}}}}return ak(aw,at,ay,aB,aA)};var V=ac.selectors={cacheLength:50,match:T,order:["ID","TAG"],attrHandle:{},createPseudo:an,find:{ID:n?function(aw,av,au){if(typeof av.getElementById!==L&&!au){var at=av.getElementById(aw);
return at&&at.parentNode?[at]:[]}}:function(aw,av,au){if(typeof av.getElementById!==L&&!au){var at=av.getElementById(aw);
return at?at.id===aw||typeof at.getAttributeNode!==L&&at.getAttributeNode("id").value===aw?[at]:v:[]
}},TAG:k?function(at,au){if(typeof au.getElementsByTagName!==L){return au.getElementsByTagName(at)
}}:function(at,ax){var aw=ax.getElementsByTagName(at);if(at==="*"){var ay,av=[],au=0;
for(;(ay=aw[au]);au++){if(ay.nodeType===1){av.push(ay)}}return av}return aw}},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(at){at[1]=at[1].replace(H,"");
at[3]=(at[4]||at[5]||"").replace(H,"");if(at[2]==="~="){at[3]=" "+at[3]+" "}return at.slice(0,4)
},CHILD:function(at){at[1]=at[1].toLowerCase();if(at[1]==="nth"){if(!at[2]){ac.error(at[0])
}at[3]=+(at[3]?at[4]+(at[5]||1):2*(at[2]==="even"||at[2]==="odd"));at[4]=+((at[6]+at[7])||at[2]==="odd")
}else{if(at[2]){ac.error(at[0])}}return at},PSEUDO:function(at){var au,av=at[4];
if(T.CHILD.test(at[0])){return null}if(av&&(au=Y.exec(av))&&au.pop()){at[0]=at[0].slice(0,au[0].length-av.length-1);
av=au[0].slice(0,-1)}at.splice(2,3,av||at[3]);return at}},filter:{ID:n?function(at){at=at.replace(H,"");
return function(au){return au.getAttribute("id")===at}}:function(at){at=at.replace(H,"");
return function(av){var au=typeof av.getAttributeNode!==L&&av.getAttributeNode("id");
return au&&au.value===at}},TAG:function(at){if(at==="*"){return function(){return true
}}at=at.replace(H,"").toLowerCase();return function(au){return au.nodeName&&au.nodeName.toLowerCase()===at
}},CLASS:function(at){var au=ag[at];if(!au){au=ag[at]=new RegExp("(^|"+O+")"+at+"("+O+"|$)");
F.push(at);if(F.length>V.cacheLength){delete ag[F.shift()]}}return function(av){return au.test(av.className||(typeof av.getAttribute!==L&&av.getAttribute("class"))||"")
}},ATTR:function(av,au,at){if(!au){return function(aw){return ac.attr(aw,av)!=null
}}return function(ax){var aw=ac.attr(ax,av),ay=aw+"";if(aw==null){return au==="!="
}switch(au){case"=":return ay===at;case"!=":return ay!==at;case"^=":return at&&ay.indexOf(at)===0;
case"*=":return at&&ay.indexOf(at)>-1;case"$=":return at&&ay.substr(ay.length-at.length)===at;
case"~=":return(" "+ay+" ").indexOf(at)>-1;case"|=":return ay===at||ay.substr(0,at.length+1)===at+"-"
}}},CHILD:function(au,aw,ax,av){if(au==="nth"){var at=t++;return function(aB){var ay,aC,aA=0,az=aB;
if(ax===1&&av===0){return true}ay=aB.parentNode;if(ay&&(ay[al]!==at||!aB.sizset)){for(az=ay.firstChild;
az;az=az.nextSibling){if(az.nodeType===1){az.sizset=++aA;if(az===aB){break}}}ay[al]=at
}aC=aB.sizset-av;if(ax===0){return aC===0}else{return(aC%ax===0&&aC/ax>=0)}}}return function(az){var ay=az;
switch(au){case"only":case"first":while((ay=ay.previousSibling)){if(ay.nodeType===1){return false
}}if(au==="first"){return true}ay=az;case"last":while((ay=ay.nextSibling)){if(ay.nodeType===1){return false
}}return true}}},PSEUDO:function(ax,aw,au,at){var av=V.pseudos[ax]||V.pseudos[ax.toLowerCase()];
if(!av){ac.error("unsupported pseudo: "+ax)}if(!av.sizzleFilter){return av}return av(aw,au,at)
}},pseudos:{not:an(function(at,av,au){var aw=q(at.replace(aj,"$1"),av,au);return function(ax){return !aw(ax)
}}),enabled:function(at){return at.disabled===false},disabled:function(at){return at.disabled===true
},checked:function(at){var au=at.nodeName.toLowerCase();return(au==="input"&&!!at.checked)||(au==="option"&&!!at.selected)
},selected:function(at){if(at.parentNode){at.parentNode.selectedIndex}return at.selected===true
},parent:function(at){return !!at.firstChild},empty:function(at){return !at.firstChild
},contains:an(function(at){return function(au){return(au.textContent||au.innerText||d(au)).indexOf(at)>-1
}}),has:an(function(at){return function(au){return ac(at,au).length>0}}),header:function(at){return E.test(at.nodeName)
},text:function(av){var au,at;return av.nodeName.toLowerCase()==="input"&&(au=av.type)==="text"&&((at=av.getAttribute("type"))==null||at.toLowerCase()===au)
},radio:i("radio"),checkbox:i("checkbox"),file:i("file"),password:i("password"),image:i("image"),submit:G("submit"),reset:G("reset"),button:function(au){var at=au.nodeName.toLowerCase();
return at==="input"&&au.type==="button"||at==="button"},input:function(at){return ab.test(at.nodeName)
},focus:function(at){var au=at.ownerDocument;return at===au.activeElement&&(!au.hasFocus||au.hasFocus())&&!!(at.type||at.href)
},active:function(at){return at===at.ownerDocument.activeElement}},setFilters:{first:function(av,au,at){return at?av.slice(1):[av[0]]
},last:function(aw,av,au){var at=aw.pop();return au?aw:[at]},even:function(ay,ax,aw){var av=[],au=aw?1:0,at=ay.length;
for(;au<at;au=au+2){av.push(ay[au])}return av},odd:function(ay,ax,aw){var av=[],au=aw?0:1,at=ay.length;
for(;au<at;au=au+2){av.push(ay[au])}return av},lt:function(av,au,at){return at?av.slice(+au):av.slice(0,+au)
},gt:function(av,au,at){return at?av.slice(0,+au+1):av.slice(+au+1)},eq:function(aw,av,au){var at=aw.splice(+av,1);
return au?aw:at}}};V.setFilters.nth=V.setFilters.eq;V.filters=V.pseudos;if(!S){V.attrHandle={href:function(at){return at.getAttribute("href",2)
},type:function(at){return at.getAttribute("type")}}}if(f){V.order.push("NAME");
V.find.NAME=function(at,au){if(typeof au.getElementsByName!==L){return au.getElementsByName(at)
}}}if(R){V.order.splice(1,0,"CLASS");V.find.CLASS=function(av,au,at){if(typeof au.getElementsByClassName!==L&&!at){return au.getElementsByClassName(av)
}}}try{y.call(o.childNodes,0)[0].nodeType}catch(ap){y=function(au){var av,at=[];
for(;(av=this[au]);au++){at.push(av)}return at}}var z=ac.isXML=function(at){var au=at&&(at.ownerDocument||at).documentElement;
return au?au.nodeName!=="HTML":false};var P=ac.contains=o.compareDocumentPosition?function(au,at){return !!(au.compareDocumentPosition(at)&16)
}:o.contains?function(au,at){var aw=au.nodeType===9?au.documentElement:au,av=at.parentNode;
return au===av||!!(av&&av.nodeType===1&&aw.contains&&aw.contains(av))}:function(au,at){while((at=at.parentNode)){if(at===au){return true
}}return false};var d=ac.getText=function(ax){var aw,au="",av=0,at=ax.nodeType;
if(at){if(at===1||at===9||at===11){if(typeof ax.textContent==="string"){return ax.textContent
}else{for(ax=ax.firstChild;ax;ax=ax.nextSibling){au+=d(ax)}}}else{if(at===3||at===4){return ax.nodeValue
}}}else{for(;(aw=ax[av]);av++){au+=d(aw)}}return au};ac.attr=function(aw,av){var at,au=z(aw);
if(!au){av=av.toLowerCase()}if(V.attrHandle[av]){return V.attrHandle[av](aw)}if(C||au){return aw.getAttribute(av)
}at=aw.getAttributeNode(av);return at?typeof aw[av]==="boolean"?aw[av]?av:null:at.specified?at.value:null:null
};ac.error=function(at){throw new Error("Syntax error, unrecognized expression: "+at)
};[0,0].sort(function(){return(m=0)});if(o.compareDocumentPosition){u=function(au,at){if(au===at){p=true;
return 0}return(!au.compareDocumentPosition||!at.compareDocumentPosition?au.compareDocumentPosition:au.compareDocumentPosition(at)&4)?-1:1
}}else{u=function(aB,aA){if(aB===aA){p=true;return 0}else{if(aB.sourceIndex&&aA.sourceIndex){return aB.sourceIndex-aA.sourceIndex
}}var ay,au,av=[],at=[],ax=aB.parentNode,az=aA.parentNode,aC=ax;if(ax===az){return h(aB,aA)
}else{if(!ax){return -1}else{if(!az){return 1}}}while(aC){av.unshift(aC);aC=aC.parentNode
}aC=az;while(aC){at.unshift(aC);aC=aC.parentNode}ay=av.length;au=at.length;for(var aw=0;
aw<ay&&aw<au;aw++){if(av[aw]!==at[aw]){return h(av[aw],at[aw])}}return aw===ay?h(aB,at[aw],-1):h(av[aw],aA,1)
};h=function(au,at,av){if(au===at){return av}var aw=au.nextSibling;while(aw){if(aw===at){return -1
}aw=aw.nextSibling}return 1}}ac.uniqueSort=function(au){var av,at=1;if(u){p=m;au.sort(u);
if(p){for(;(av=au[at]);at++){if(av===au[at-1]){au.splice(at--,1)}}}}return au};
function B(au,ay,ax,av){var aw=0,at=ay.length;for(;aw<at;aw++){ac(au,ay[aw],ax,av)
}}function X(at,av,az,aA,au,ay){var aw,ax=V.setFilters[av.toLowerCase()];if(!ax){ac.error(av)
}if(at||!(aw=au)){B(at||"*",aA,(aw=[]),au)}return aw.length>0?ax(aw,az,ay):[]}function af(aD,at,aB,av,aH){var ay,au,ax,aJ,aA,aI,aC,aG,aE=0,aF=aH.length,aw=T.POS,az=new RegExp("^"+aw.source+"(?!"+O+")","i"),aK=function(){var aM=1,aL=arguments.length-2;
for(;aM<aL;aM++){if(arguments[aM]===v){ay[aM]=v}}};for(;aE<aF;aE++){aw.exec("");
aD=aH[aE];aJ=[];ax=0;aA=av;while((ay=aw.exec(aD))){aG=aw.lastIndex=ay.index+ay[0].length;
if(aG>ax){aC=aD.slice(ax,ay.index);ax=aG;aI=[at];if(U.test(aC)){if(aA){aI=aA}aA=av
}if((au=am.test(aC))){aC=aC.slice(0,-5).replace(U,"$&*")}if(ay.length>1){ay[0].replace(az,aK)
}aA=X(aC,ay[1],ay[2],aI,aA,au)}}if(aA){aJ=aJ.concat(aA);if((aC=aD.slice(ax))&&aC!==")"){B(aC,aJ,aB,av)
}else{ah.apply(aB,aJ)}}else{ac(aD,at,aB,av)}}return aF===1?aB:ac.uniqueSort(aB)
}function g(az,av,aC){var aE,aD,aF,ax=[],aA=0,aB=Y.exec(az),au=!aB.pop()&&!aB.pop(),aG=au&&az.match(I)||[""],at=V.preFilter,aw=V.filter,ay=!aC&&av!==l;
for(;(aD=aG[aA])!=null&&au;aA++){ax.push(aE=[]);if(ay){aD=" "+aD}while(aD){au=false;
if((aB=U.exec(aD))){aD=aD.slice(aB[0].length);au=aE.push({part:aB.pop().replace(aj," "),captures:aB})
}for(aF in aw){if((aB=T[aF].exec(aD))&&(!at[aF]||(aB=at[aF](aB,av,aC)))){aD=aD.slice(aB.shift().length);
au=aE.push({part:aF,captures:aB})}}if(!au){break}}}if(!au){ac.error(az)}return ax
}function M(ax,aw,av){var at=aw.dir,au=t++;if(!ax){ax=function(ay){return ay===av
}}return aw.first?function(az,ay){while((az=az[at])){if(az.nodeType===1){return ax(az,ay)&&az
}}}:function(aA,az){var ay,aB=au+"."+D,aC=aB+"."+ai;while((aA=aA[at])){if(aA.nodeType===1){if((ay=aA[al])===aC){return false
}else{if(typeof ay==="string"&&ay.indexOf(aB)===0){if(aA.sizset){return aA}}else{aA[al]=aC;
if(ax(aA,az)){aA.sizset=true;return aA}aA.sizset=false}}}}}}function K(at,au){return at?function(ax,aw){var av=au(ax,aw);
return av&&at(av===true?ax:av,aw)}:au}function N(ay,aw,at){var av,ax,au=0;for(;
(av=ay[au]);au++){if(V.relative[av.part]){ax=M(ax,V.relative[av.part],aw)}else{av.captures.push(aw,at);
ax=K(ax,V.filter[av.part].apply(null,av.captures))}}return ax}function j(at){return function(aw,av){var ax,au=0;
for(;(ax=at[au]);au++){if(ax(aw,av)){return true}}return false}}var q=ac.compile=function(at,aw,au){var az,ay,av,ax=A[at];
if(ax&&ax.context===aw){ax.dirruns++;return ax}ay=g(at,aw,au);for(av=0;(az=ay[av]);
av++){ay[av]=N(az,aw,au)}ax=A[at]=j(ay);ax.context=aw;ax.runs=ax.dirruns=0;J.push(at);
if(J.length>V.cacheLength){delete A[J.shift()]}return ax};ac.matches=function(au,at){return ac(au,null,null,at)
};ac.matchesSelector=function(at,au){return ac(au,null,null,[at]).length>0};var ak=function(ax,au,az,aD,aC){ax=ax.replace(aj,"$1");
var at,aE,aA,aF,av,aw,aH,aI,ay,aB=ax.match(I),aG=ax.match(ao),aJ=au.nodeType;if(T.POS.test(ax)){return af(ax,au,az,aD,aB)
}if(aD){at=y.call(aD,0)}else{if(aB&&aB.length===1){if(aG.length>1&&aJ===9&&!aC&&(aB=T.ID.exec(aG[0]))){au=V.find.ID(aB[1],au,aC)[0];
if(!au){return az}ax=ax.slice(aG.shift().length)}aI=((aB=ae.exec(aG[0]))&&!aB.index&&au.parentNode)||au;
ay=aG.pop();aw=ay.split(":not")[0];for(aA=0,aF=V.order.length;aA<aF;aA++){aH=V.order[aA];
if((aB=T[aH].exec(aw))){at=V.find[aH]((aB[1]||"").replace(H,""),aI,aC);if(at==null){continue
}if(aw===ay){ax=ax.slice(0,ax.length-ay.length)+aw.replace(T[aH],"");if(!ax){ah.apply(az,y.call(at,0))
}}break}}}}if(ax){aE=q(ax,au,aC);D=aE.dirruns;if(at==null){at=V.find.TAG("*",(ae.test(ax)&&au.parentNode)||au)
}for(aA=0;(av=at[aA]);aA++){ai=aE.runs++;if(aE(av,au)){az.push(av)}}}return az};
if(l.querySelectorAll){(function(){var ay,az=ak,ax=/'|\\/g,av=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,au=[],at=[":active"],aw=o.matchesSelector||o.mozMatchesSelector||o.webkitMatchesSelector||o.oMatchesSelector||o.msMatchesSelector;
W(function(aA){aA.innerHTML="<select><option selected></option></select>";if(!aA.querySelectorAll("[selected]").length){au.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
}if(!aA.querySelectorAll(":checked").length){au.push(":checked")}});W(function(aA){aA.innerHTML="<p test=''></p>";
if(aA.querySelectorAll("[test^='']").length){au.push("[*^$]="+O+"*(?:\"\"|'')")
}aA.innerHTML="<input type='hidden'>";if(!aA.querySelectorAll(":enabled").length){au.push(":enabled",":disabled")
}});au=au.length&&new RegExp(au.join("|"));ak=function(aF,aB,aG,aI,aH){if(!aI&&!aH&&(!au||!au.test(aF))){if(aB.nodeType===9){try{ah.apply(aG,y.call(aB.querySelectorAll(aF),0));
return aG}catch(aE){}}else{if(aB.nodeType===1&&aB.nodeName.toLowerCase()!=="object"){var aD=aB.getAttribute("id"),aA=aD||al,aC=ae.test(aF)&&aB.parentNode||aB;
if(aD){aA=aA.replace(ax,"\\$&")}else{aB.setAttribute("id",aA)}try{ah.apply(aG,y.call(aC.querySelectorAll(aF.replace(I,"[id='"+aA+"'] $&")),0));
return aG}catch(aE){}finally{if(!aD){aB.removeAttribute("id")}}}}}return az(aF,aB,aG,aI,aH)
};if(aw){W(function(aB){ay=aw.call(aB,"div");try{aw.call(aB,"[test!='']:sizzle");
at.push(V.match.PSEUDO)}catch(aA){}});at=new RegExp(at.join("|"));ac.matchesSelector=function(aB,aD){aD=aD.replace(av,"='$1']");
if(!z(aB)&&!at.test(aD)&&(!au||!au.test(aD))){try{var aA=aw.call(aB,aD);if(aA||ay||aB.document&&aB.document.nodeType!==11){return aA
}}catch(aC){}}return ac(aD,null,null,[aB]).length>0}}})()}if(typeof c==="object"&&c.exports){c.exports=ac
}else{ad.Sizzle=ac}})(window)},{}],47:[function(b,c,a){b("ac-polyfills/Array/prototype.slice");
b("ac-polyfills/Element/prototype.classList");var d=b("./className/add");c.exports=function f(){var j=Array.prototype.slice.call(arguments);
var h=j.shift(j);var g;if(h.classList&&h.classList.add){h.classList.add.apply(h.classList,j);
return}for(g=0;g<j.length;g++){d(h,j[g])}}},{"./className/add":49,"ac-polyfills/Array/prototype.slice":55,"ac-polyfills/Element/prototype.classList":56}],48:[function(b,c,a){c.exports={add:b("./className/add"),contains:b("./className/contains"),remove:b("./className/remove")}
},{"./className/add":49,"./className/contains":50,"./className/remove":52}],49:[function(b,c,a){var d=b("./contains");
c.exports=function f(h,g){if(!d(h,g)){h.className+=" "+g}}},{"./contains":50}],50:[function(b,c,a){var f=b("./getTokenRegExp");
c.exports=function d(h,g){return f(g).test(h.className)}},{"./getTokenRegExp":51}],51:[function(b,c,a){c.exports=function d(f){return new RegExp("(\\s|^)"+f+"(\\s|$)")
}},{}],52:[function(c,d,b){var f=c("./contains");var g=c("./getTokenRegExp");d.exports=function a(i,h){if(f(i,h)){i.className=i.className.replace(g(h),"$1").trim()
}}},{"./contains":50,"./getTokenRegExp":51}],53:[function(b,d,a){b("ac-polyfills/Element/prototype.classList");
var f=b("./className/contains");d.exports=function c(h,g){if(h.classList&&h.classList.contains){return h.classList.contains(g)
}return f(h,g)}},{"./className/contains":50,"ac-polyfills/Element/prototype.classList":56}],54:[function(b,c,a){c.exports={add:b("./add"),contains:b("./contains"),remove:b("./remove"),toggle:b("./toggle")}
},{"./add":47,"./contains":53,"./remove":57,"./toggle":58}],55:[function(b,c,a){c.exports=b(38)
},{}],56:[function(b,c,a){
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
if("document" in self){if(!("classList" in document.createElement("_"))){(function(n){if(!("Element" in n)){return
}var d="classList",j="prototype",q=n.Element[j],f=Object,o=String[j].trim||function(){return this.replace(/^\s+|\s+$/g,"")
},g=Array[j].indexOf||function(u){var t=0,s=this.length;for(;t<s;t++){if(t in this&&this[t]===u){return t
}}return -1},r=function(s,t){this.name=s;this.code=DOMException[s];this.message=t
},k=function(t,s){if(s===""){throw new r("SYNTAX_ERR","An invalid or illegal string was specified")
}if(/\s/.test(s)){throw new r("INVALID_CHARACTER_ERR","String contains an invalid character")
}return g.call(t,s)},h=function(w){var v=o.call(w.getAttribute("class")||""),u=v?v.split(/\s+/):[],t=0,s=u.length;
for(;t<s;t++){this.push(u[t])}this._updateClassName=function(){w.setAttribute("class",this.toString())
}},i=h[j]=[],m=function(){return new h(this)};r[j]=Error[j];i.item=function(s){return this[s]||null
};i.contains=function(s){s+="";return k(this,s)!==-1};i.add=function(){var w=arguments,v=0,t=w.length,u,s=false;
do{u=w[v]+"";if(k(this,u)===-1){this.push(u);s=true}}while(++v<t);if(s){this._updateClassName()
}};i.remove=function(){var x=arguments,w=0,t=x.length,v,s=false,u;do{v=x[w]+"";
u=k(this,v);while(u!==-1){this.splice(u,1);s=true;u=k(this,v)}}while(++w<t);if(s){this._updateClassName()
}};i.toggle=function(t,u){t+="";var s=this.contains(t),v=s?u!==true&&"remove":u!==false&&"add";
if(v){this[v](t)}if(u===true||u===false){return u}else{return !s}};i.toString=function(){return this.join(" ")
};if(f.defineProperty){var p={get:m,enumerable:true,configurable:true};try{f.defineProperty(q,d,p)
}catch(l){if(l.number===-2146823252){p.enumerable=false;f.defineProperty(q,d,p)
}}}else{if(f[j].__defineGetter__){q.__defineGetter__(d,m)}}}(self))}else{(function(){var f=document.createElement("_");
f.classList.add("c1","c2");if(!f.classList.contains("c2")){var g=function(i){var h=DOMTokenList.prototype[i];
DOMTokenList.prototype[i]=function(l){var k,j=arguments.length;for(k=0;k<j;k++){l=arguments[k];
h.call(this,l)}}};g("add");g("remove")}f.classList.toggle("c3",false);if(f.classList.contains("c3")){var d=DOMTokenList.prototype.toggle;
DOMTokenList.prototype.toggle=function(h,i){if(1 in arguments&&!this.contains(h)===!i){return i
}else{return d.call(this,h)}}}f=null}())}}},{}],57:[function(d,f,c){d("ac-polyfills/Array/prototype.slice");
d("ac-polyfills/Element/prototype.classList");var b=d("./className/remove");f.exports=function a(){var j=Array.prototype.slice.call(arguments);
var h=j.shift(j);var g;if(h.classList&&h.classList.remove){h.classList.remove.apply(h.classList,j);
return}for(g=0;g<j.length;g++){b(h,j[g])}}},{"./className/remove":52,"ac-polyfills/Array/prototype.slice":55,"ac-polyfills/Element/prototype.classList":56}],58:[function(c,d,b){c("ac-polyfills/Element/prototype.classList");
var f=c("./className");d.exports=function a(j,i,k){var h=(typeof k!=="undefined");
var g;if(j.classList&&j.classList.toggle){if(h){return j.classList.toggle(i,k)}return j.classList.toggle(i)
}if(h){g=!!k}else{g=!f.contains(j,i)}if(g){f.add(j,i)}else{f.remove(j,i)}return g
}},{"./className":48,"ac-polyfills/Element/prototype.classList":56}],59:[function(c,d,b){var g=c("./utils/addEventListener");
var a=c("./shared/getEventType");d.exports=function f(k,i,j,h){i=a(k,i);return g(k,i,j,h)
}},{"./shared/getEventType":69,"./utils/addEventListener":73}],60:[function(d,f,c){var a=d("./utils/dispatchEvent");
var b=d("./shared/getEventType");f.exports=function g(j,i,h){i=b(j,i);return a(j,i,h)
}},{"./shared/getEventType":69,"./utils/dispatchEvent":74}],61:[function(b,c,a){c.exports={addEventListener:b("./addEventListener"),dispatchEvent:b("./dispatchEvent"),preventDefault:b("./preventDefault"),removeEventListener:b("./removeEventListener"),stop:b("./stop"),stopPropagation:b("./stopPropagation"),target:b("./target")}
},{"./addEventListener":59,"./dispatchEvent":60,"./preventDefault":67,"./removeEventListener":68,"./stop":70,"./stopPropagation":71,"./target":72}],62:[function(b,c,a){if(document.createEvent){try{new window.CustomEvent("click")
}catch(d){window.CustomEvent=(function(){function f(h,i){i=i||{bubbles:false,cancelable:false,detail:undefined};
var g=document.createEvent("CustomEvent");g.initCustomEvent(h,i.bubbles,i.cancelable,i.detail);
return g}f.prototype=window.Event.prototype;return f}())}}},{}],63:[function(g,i,d){var h=g("./utils/eventTypeAvailable");
var b=g("./shared/camelCasedEventTypes");var f=g("./shared/prefixHelper");var c={};
i.exports=function a(l,k){var m;var n;var j;k=k||"div";l=l.toLowerCase();if(!(k in c)){c[k]={}
}n=c[k];if(l in n){return n[l]}if(h(l,k)){return n[l]=l}if(l in b){for(j=0;j<b[l].length;
j++){m=b[l][j];if(h(m.toLowerCase(),k)){return n[l]=m}}}for(j=0;j<f.evt.length;
j++){m=f.evt[j]+l;if(h(m,k)){f.reduce(j);return n[l]=m}}return n[l]=false}},{"./shared/camelCasedEventTypes":64,"./shared/prefixHelper":65,"./utils/eventTypeAvailable":66}],64:[function(b,c,a){c.exports={transitionend:["webkitTransitionEnd","MSTransitionEnd"],animationstart:["webkitAnimationStart","MSAnimationStart"],animationend:["webkitAnimationEnd","MSAnimationEnd"],animationiteration:["webkitAnimationIteration","MSAnimationIteration"],fullscreenchange:["MSFullscreenChange"],fullscreenerror:["MSFullscreenError"]}
},{}],65:[function(b,d,a){var i=["-webkit-","-moz-","-ms-"];var f=["Webkit","Moz","ms"];
var h=["webkit","moz","ms"];var c=function(){this.initialize()};var g=c.prototype;
g.initialize=function(){this.reduced=false;this.css=i;this.dom=f;this.evt=h};g.reduce=function(j){if(!this.reduced){this.reduced=true;
this.css=[this.css[j]];this.dom=[this.dom[j]];this.evt=[this.evt[j]]}};d.exports=new c()
},{}],66:[function(c,f,b){var a={window:window,document:document};f.exports=function d(i,g){var h;
i="on"+i;if(!(g in a)){a[g]=document.createElement(g)}h=a[g];if(i in h){return true
}if("setAttribute" in h){h.setAttribute(i,"return;");return(typeof h[i]==="function")
}return false}},{}],67:[function(c,d,a){d.exports=function b(f){f=f||window.event;
if(f.preventDefault){f.preventDefault()}else{f.returnValue=false}}},{}],68:[function(d,f,c){var b=d("./utils/removeEventListener");
var a=d("./shared/getEventType");f.exports=function g(k,i,j,h){i=a(k,i);return b(k,i,j,h)
}},{"./shared/getEventType":69,"./utils/removeEventListener":75}],69:[function(c,f,b){var d=c("ac-prefixer/getEventType");
f.exports=function a(j,i){var h;var g;if("tagName" in j){h=j.tagName}else{if(j===window){h="window"
}else{h="document"}}g=d(i,h);if(g){return g}return i}},{"ac-prefixer/getEventType":63}],70:[function(d,g,b){var a=d("./stopPropagation");
var c=d("./preventDefault");g.exports=function f(h){h=h||window.event;a(h);c(h);
h.stopped=true;h.returnValue=false}},{"./preventDefault":67,"./stopPropagation":71}],71:[function(c,d,b){d.exports=function a(f){f=f||window.event;
if(f.stopPropagation){f.stopPropagation()}else{f.cancelBubble=true}}},{}],72:[function(b,c,a){c.exports=function d(f){f=f||window.event;
return(typeof f.target!=="undefined")?f.target:f.srcElement}},{}],73:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.addEventListener){i.addEventListener(g,h,!!f)
}else{i.attachEvent("on"+g,h)}return i}},{}],74:[function(b,c,a){b("ac-polyfills/CustomEvent");
c.exports=function d(i,h,g){var f;if(i.dispatchEvent){if(g){f=new CustomEvent(h,g)
}else{f=new CustomEvent(h)}i.dispatchEvent(f)}else{f=document.createEventObject();
if(g&&"detail" in g){f.detail=g.detail}i.fireEvent("on"+h,f)}return i}},{"ac-polyfills/CustomEvent":62}],75:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.removeEventListener){i.removeEventListener(g,h,!!f)
}else{i.detachEvent("on"+g,h)}return i}},{}],76:[function(b,c,a){arguments[4][3][0].apply(a,arguments)
},{"./ac-browser/BrowserData":77,"./ac-browser/IE":78}],77:[function(b,c,a){var d=b("./data");
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
};c.exports=f},{"./data":79}],78:[function(b,c,a){c.exports=b(5)},{}],79:[function(b,c,a){c.exports={browser:[{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],80:[function(b,c,a){var d=b("./ac-prefixer/Prefixer");c.exports=new d();c.exports.Prefixer=d
},{"./ac-prefixer/Prefixer":81}],81:[function(d,b,g){var k=d("./Prefixer/camelCasedEvents");
var n=/(\([^\)]+\))/gi;var h=/([^ ,;\(]+(\([^\)]+\))?)/gi;var j=/(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
var a=/^(webkit|moz|ms)/gi;var f=["-webkit-","-moz-","-ms-"];var l=["Webkit","Moz","ms"];
var m=["webkit","moz","ms"];function c(){this._supportsAvailable=("CSS" in window&&"supports" in window.CSS);
this._cssPrefixes=f;this._domPrefixes=l;this._evtPrefixes=m;this._styleProperties={};
this._styleValues={};this._eventTypes={}}var i=c.prototype;i.getEventType=function(p){var q;
var o;p=p.toLowerCase();if(p in this._eventTypes){return this._eventTypes[p]}if(this._checkEventType("on"+p)){return this._eventTypes[p]=p
}if(k[p]){for(q in k[p]){if(this._checkEventType(q)){return this._eventTypes[p]=k[p][q]
}}}for(o=0;o<this._evtPrefixes.length;o++){if(this._checkEventType("on"+this._evtPrefixes[o]+p)){this._eventTypes[p]=this._evtPrefixes[o]+p;
this._reduceAvailablePrefixes(o);return this._eventTypes[p]}}return this._eventTypes[p]=p
};i._checkEventType=function(o){return(o in window||o in document)};i.getStyleProperty=function(r){var q;
var o;var p;r+="";if(r in this._styleProperties){return this._styleProperties[r].dom
}r=this._toDOM(r);this._prepareTestElement();o=r.charAt(0).toUpperCase()+r.substr(1);
if(r==="filter"){q=["WebkitFilter","filter"]}else{q=(r+" "+this._domPrefixes.join(o+" ")+o).split(" ")
}for(p=0;p<q.length;p++){if(this._el.style[q[p]]!==undefined){if(p!==0){this._reduceAvailablePrefixes(p-1)
}this._memoizeStyleProperty(r,q[p]);return q[p]}}this._memoizeStyleProperty(r,false);
return false};i._memoizeStyleProperty=function(r,o){var p=this._toCSS(r);var q=(o===false)?false:this._toCSS(o);
this._styleProperties[r]=this._styleProperties[o]=this._styleProperties[p]=this._styleProperties[q]={dom:o,css:q}
};i.getStyleCSS=function(q,p){var o;q=this.getStyleProperty(q);if(!q){return false
}o=this._styleProperties[q].css;if(typeof p!=="undefined"){p=this.getStyleValue(q,p);
if(p===false){return false}o+=":"+p+";"}return o};i.getStyleValue=function(q,p){var o;
p+="";q=this.getStyleProperty(q);if(!q){return false}if(this._testStyleValue(q,p)){return p
}o=this._styleProperties[q].css;p=p.replace(h,function(s){var r;var v;var u;var t;
if(s[0]==="#"||!isNaN(s[0])){return s}v=s.replace(n,"");u=o+":"+v;if(u in this._styleValues){if(this._styleValues[u]===false){return""
}return s.replace(v,this._styleValues[u])}r=this._cssPrefixes.map(function(w){return w+s
});r=[s].concat(r);for(t=0;t<r.length;t++){if(this._testStyleValue(q,r[t])){if(t!==0){this._reduceAvailablePrefixes(t-1)
}this._styleValues[u]=r[t].replace(n,"");return r[t]}}this._styleValues[u]=false;
return""}.bind(this));p=p.trim();return(p==="")?false:p};i._testStyleValue=function(q,p){var o;
if(this._supportsAvailable){q=this._styleProperties[q].css;return CSS.supports(q,p)
}this._prepareTestElement();o=this._el.style[q];try{this._el.style[q]=p}catch(r){return false
}return(this._el.style[q]&&this._el.style[q]!==o)};i.stripPrefixes=function(o){o=String.prototype.replace.call(o,j,"");
return o.charAt(0).toLowerCase()+o.slice(1)};i._reduceAvailablePrefixes=function(o){if(this._cssPrefixes.length!==1){this._cssPrefixes=[this._cssPrefixes[o]];
this._domPrefixes=[this._domPrefixes[o]];this._evtPrefixes=[this._evtPrefixes[o]]
}};i._toDOM=function(p){var o;if(p.toLowerCase()==="float"){return"cssFloat"}p=p.replace(/-([a-z])/g,function(r,q){return q.toUpperCase()
});if(p.substr(0,2)==="Ms"){p="ms"+p.substr(2)}return p};i._toCSS=function(p){var o;
if(p.toLowerCase()==="cssfloat"){return"float"}if(a.test(p)){p="-"+p}return p.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
};i._prepareTestElement=function(){if(!this._el){this._el=document.createElement("_")
}else{this._el.style.cssText="";this._el.removeAttribute("style")}};b.exports=c
},{"./Prefixer/camelCasedEvents":82}],82:[function(b,c,a){c.exports={transitionend:{onwebkittransitionend:"webkitTransitionEnd",onmstransitionend:"MSTransitionEnd"},animationstart:{onwebkitanimationstart:"webkitAnimationStart",onmsanimationstart:"MSAnimationStart"},animationend:{onwebkitanimationend:"webkitAnimationEnd",onmsanimationend:"MSAnimationEnd"},animationiteration:{onwebkitanimationiteration:"webkitAnimationIteration",onmsanimationiteration:"MSAnimationIteration"},fullscreenchange:{onmsfullscreenchange:"MSFullscreenChange"},fullscreenerror:{onmsfullscreenerror:"MSFullscreenError"}}
},{}],83:[function(c,d,b){var h=c("./ac-feature/helpers/memoize");var f=["cssPropertyAvailable","isRetina"];
var g;var a={canvasAvailable:c("./ac-feature/canvasAvailable"),continuousScrollEventsAvailable:c("./ac-feature/continuousScrollEventsAvailable"),cookiesAvailable:c("./ac-feature/cookiesAvailable"),cssLinearGradientAvailable:c("./ac-feature/cssLinearGradientAvailable"),cssPropertyAvailable:c("./ac-feature/cssPropertyAvailable"),isDesktop:c("./ac-feature/isDesktop"),isHandheld:c("./ac-feature/isHandheld"),isRetina:c("./ac-feature/isRetina"),isTablet:c("./ac-feature/isTablet"),localStorageAvailable:c("./ac-feature/localStorageAvailable"),mediaElementsAvailable:c("./ac-feature/mediaElementsAvailable"),sessionStorageAvailable:c("./ac-feature/sessionStorageAvailable"),svgAvailable:c("./ac-feature/svgAvailable"),threeDTransformsAvailable:c("./ac-feature/threeDTransformsAvailable"),touchAvailable:c("./ac-feature/touchAvailable"),webGLAvailable:c("./ac-feature/webGLAvailable")};
for(g in a){if(f.indexOf(g)===-1){a[g]=h(a[g])}}d.exports=a},{"./ac-feature/canvasAvailable":84,"./ac-feature/continuousScrollEventsAvailable":85,"./ac-feature/cookiesAvailable":86,"./ac-feature/cssLinearGradientAvailable":87,"./ac-feature/cssPropertyAvailable":88,"./ac-feature/helpers/memoize":90,"./ac-feature/isDesktop":91,"./ac-feature/isHandheld":92,"./ac-feature/isRetina":93,"./ac-feature/isTablet":94,"./ac-feature/localStorageAvailable":95,"./ac-feature/mediaElementsAvailable":96,"./ac-feature/sessionStorageAvailable":97,"./ac-feature/svgAvailable":98,"./ac-feature/threeDTransformsAvailable":99,"./ac-feature/touchAvailable":100,"./ac-feature/webGLAvailable":101}],84:[function(b,c,a){var f=b("./helpers/globals");
c.exports=function d(){var g=f.getDocument();var h=g.createElement("canvas");return !!(typeof h.getContext==="function"&&h.getContext("2d"))
}},{"./helpers/globals":89}],85:[function(c,d,b){var g=c("ac-browser");var a=c("./touchAvailable");
d.exports=function f(){return(!a()||(g.os==="iOS"&&g.version>=8)||g.name==="Chrome")
}},{"./touchAvailable":100,"ac-browser":76}],86:[function(c,d,b){var f=c("./helpers/globals");
d.exports=function a(){var j=false;var g=f.getDocument();var i=f.getNavigator();
try{if("cookie" in g&&!!i.cookieEnabled){g.cookie="ac_feature_cookie=1";j=(g.cookie.indexOf("ac_feature_cookie")!==-1);
g.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}catch(h){}return j
}},{"./helpers/globals":89}],87:[function(d,f,c){var a=d("./cssPropertyAvailable");
f.exports=function b(){var g=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
return g.some(function(h){return a("background-image",h)})}},{"./cssPropertyAvailable":88}],88:[function(c,d,b){var f=c("ac-prefixer");
d.exports=function a(h,g){if(typeof g!=="undefined"){return !!f.getStyleValue(h,g)
}else{return !!f.getStyleProperty(h)}}},{"ac-prefixer":80}],89:[function(b,c,a){c.exports={getWindow:function(){return window
},getDocument:function(){return document},getNavigator:function(){return navigator
}}},{}],90:[function(b,c,a){c.exports=function d(g){var f;return function(){if(typeof f!=="undefined"){return f
}else{return f=g()}}}},{}],91:[function(d,f,b){var a=d("./touchAvailable");var g=d("./helpers/globals");
f.exports=function c(){var h=g.getWindow();return(!a()&&!h.orientation)}},{"./helpers/globals":89,"./touchAvailable":100}],92:[function(f,g,c){var d=f("./isDesktop");
var a=f("./isTablet");g.exports=function b(){return(!d()&&!a())}},{"./isDesktop":91,"./isTablet":94}],93:[function(b,c,a){var d=b("./helpers/globals");
c.exports=function f(){var g=d.getWindow();return("devicePixelRatio" in g&&g.devicePixelRatio>=1.5)
}},{"./helpers/globals":89}],94:[function(d,f,b){var c=d("./isDesktop");var g=d("./helpers/globals");
f.exports=function a(){var i=g.getWindow();var h=i.screen.width;if(i.orientation&&i.screen.height<h){h=i.screen.height
}return(!c()&&h>=600)}},{"./helpers/globals":89,"./isDesktop":91}],95:[function(c,d,a){var f=c("./helpers/globals");
d.exports=function b(){var i=f.getWindow();var h=false;try{h=!!(i.localStorage&&i.localStorage.non_existent!==null)
}catch(g){}return h}},{"./helpers/globals":89}],96:[function(b,c,a){var f=b("./helpers/globals");
c.exports=function d(){var g=f.getWindow();return("HTMLMediaElement" in g)}},{"./helpers/globals":89}],97:[function(c,d,b){var f=c("./helpers/globals");
d.exports=function a(){var i=f.getWindow();var g=false;try{if("sessionStorage" in i&&typeof i.sessionStorage.setItem==="function"){i.sessionStorage.setItem("ac_feature","test");
g=true;i.sessionStorage.removeItem("ac_feature","test")}}catch(h){}return g}},{"./helpers/globals":89}],98:[function(c,d,b){var f=c("./helpers/globals");
d.exports=function a(){var g=f.getDocument();return g.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}},{"./helpers/globals":89}],99:[function(c,d,b){var a=c("./cssPropertyAvailable");
d.exports=function f(){return(a("perspective","1px")&&a("transform","translateZ(0)"))
}},{"./cssPropertyAvailable":88}],100:[function(c,d,b){var f=c("./helpers/globals");
d.exports=function a(){var h=f.getWindow();var g=f.getDocument();return !!(("ontouchstart" in h)||h.DocumentTouch&&g instanceof h.DocumentTouch)
}},{"./helpers/globals":89}],101:[function(c,d,b){var f=c("./helpers/globals");
d.exports=function a(){var g=f.getDocument();var h=g.createElement("canvas");return !!(typeof h.getContext==="function"&&h.getContext("webgl"))
}},{"./helpers/globals":89}],102:[function(b,c,a){c.exports={TouchClick:b("./ac-gesture-touchclick/TouchClick")}
},{"./ac-gesture-touchclick/TouchClick":103}],103:[function(c,b,d){var g=c("ac-dom-events");
var j=c("ac-event-emitter").EventEmitter;var a=c("ac-object");var h=c("ac-feature");
function i(k){k=k||{};this.el=k.el;this._onTouchStart=this._onTouchStart.bind(this);
this._onTouchMove=this._onTouchMove.bind(this);this._onTouchEnd=this._onTouchEnd.bind(this);
this._onClick=this._onClick.bind(this);this._touchStart=false;this.activate()}var f=i.prototype=a.create(j.prototype);
f._broadcastClick=function(k){this.trigger("click",{originalEvent:k})};f._onClick=function(k){g.stop(k);
if(!this._touchAvailable()){this._broadcastClick(k)}};f._onTouchStart=function(){this._touchStart=true
};f._onTouchEnd=function(k){if(this._touchStart===true){g.stop(k);this._broadcastClick(k)
}this._touchStart=false};f._onTouchMove=function(){this._touchStart=false};f._touchAvailable=function(){return h.touchAvailable()
};f.activate=function(){if(this._touchAvailable()){g.addEventListener(this.el,"touchstart",this._onTouchStart);
g.addEventListener(this.el,"touchmove",this._onTouchMove);g.addEventListener(this.el,"touchend",this._onTouchEnd)
}g.addEventListener(this.el,"click",this._onClick)};f.deactivate=function(){g.removeEventListener(this.el,"touchstart",this._onTouchStart);
g.removeEventListener(this.el,"touchmove",this._onTouchMove);g.removeEventListener(this.el,"touchend",this._onTouchEnd);
g.removeEventListener(this.el,"click",this._onClick)};i.create=function(l,k){k=k||{};
return new i({el:l})};b.exports=i},{"ac-dom-events":61,"ac-feature":83,"ac-object":178}],104:[function(b,c,a){c.exports=b(80)
},{"./ac-prefixer/Prefixer":105}],105:[function(b,c,a){c.exports=b(81)},{"./Prefixer/camelCasedEvents":106}],106:[function(b,c,a){c.exports=b(82)
},{}],107:[function(b,c,a){c.exports={addEventListener:b("./ac-dom-events/addEventListener"),dispatchEvent:b("./ac-dom-events/dispatchEvent"),removeEventListener:b("./ac-dom-events/removeEventListener"),stop:b("./ac-dom-events/stop"),target:b("./ac-dom-events/target")}
},{"./ac-dom-events/addEventListener":108,"./ac-dom-events/dispatchEvent":109,"./ac-dom-events/removeEventListener":110,"./ac-dom-events/stop":111,"./ac-dom-events/target":112}],108:[function(b,c,a){var f=b("ac-prefixer");
c.exports=function d(j,h,i,g){h=f.getEventType(h);if(j.addEventListener){j.addEventListener(h,i,g)
}else{h="on"+h.toLowerCase();j.attachEvent(h,i)}return j}},{"ac-prefixer":104}],109:[function(b,c,a){c.exports=function d(i,h,g){var f;
h=h.toLowerCase();if(window.CustomEvent){if(g){f=new CustomEvent(h,g)}else{f=new CustomEvent(h)
}i.dispatchEvent(f)}else{f=document.createEventObject();if(g&&"detail" in g){f.detail=g.detail
}i.fireEvent("on"+h,f)}return i}},{}],110:[function(b,c,a){var f=b("ac-prefixer");
c.exports=function d(j,h,i,g){h=f.getEventType(h);if(j.removeEventListener){j.removeEventListener(h,i,g)
}else{h="on"+h.toLowerCase();j.detachEvent(h,i)}return j}},{"ac-prefixer":104}],111:[function(b,d,a){d.exports=function c(f){if(!f){f=window.event
}if(f.stopPropagation){f.stopPropagation()}else{f.cancelBubble=true}if(f.preventDefault){f.preventDefault()
}f.stopped=true;f.returnValue=false}},{}],112:[function(b,c,a){c.exports=function d(f){return(typeof f.target!=="undefined")?f.target:f.srcElement
}},{}],113:[function(c,d,b){var a=c("./ac-keyboard/Keyboard");d.exports=new a();
d.exports.Keyboard=a;d.exports.keys=c("./ac-keyboard/keymap")},{"./ac-keyboard/Keyboard":115,"./ac-keyboard/keymap":116}],114:[function(c,d,b){var a=["keyLocation"];
function f(g){this.originalEvent=g;var h;for(h in g){if(typeof g[h]!=="function"&&a.indexOf(h)===-1){this[h]=g[h]
}}this.location=(this.originalEvent.keyLocation===undefined)?this.originalEvent.location:this.originalEvent.keyLocation
}f.prototype={preventDefault:function(){if(typeof this.originalEvent.preventDefault!=="function"){this.originalEvent.returnValue=false;
return}return this.originalEvent.preventDefault()},stopPropagation:function(){return this.originalEvent.stopPropagation()
}};d.exports=f},{}],115:[function(f,c,h){var j=f("ac-dom-events");var n=f("ac-event-emitter").EventEmitter;
var g=f("./KeyEvent");var k=f("./keymap");var l=0;var d=1;var a=2;var m=3;var i;
function b(){this._keysDown=[];this._keyDownEmitter=new n();this._keyUpEmitter=new n();
j.addEventListener(document,"keydown",this._DOMKeyDown.bind(this),true);j.addEventListener(document,"keyup",this._DOMKeyUp.bind(this),true);
this._listening=[]}i=b.prototype;i._castEventNameNumberToString=function(o){if(typeof o==="number"){return o.toString()
}return o};i._DOMKeyDown=function(p){var o=this._normalizeKeyboardEvent(p);var q=o.keyCode;
this._trackKeyDown(q);this._keyDownEmitter.trigger(q.toString(),o)};i._DOMKeyUp=function(p){var o=this._normalizeKeyboardEvent(p);
var q=o.keyCode;this._trackKeyUp(q);this._keyUpEmitter.trigger(q.toString(),o)};
i.addKeyDown=function(){var o=Array.prototype.slice.call(arguments);var p=o.shift();
if(p===undefined){throw new TypeError('Could not listen for keyup event on "'+p+'"')
}p=this._castEventNameNumberToString(p);return this._keyDownEmitter.on.apply(this._keyDownEmitter,[p].concat(o))
};i.addKeyUp=function(){var o=Array.prototype.slice.call(arguments);var p=o.shift();
if(p===undefined){throw new TypeError('Could not listen for keyup event on "'+p+'"')
}p=this._castEventNameNumberToString(p);return this._keyUpEmitter.on.apply(this._keyUpEmitter,[p].concat(o))
};i.removeKeyDown=function(){var o=Array.prototype.slice.call(arguments);var p=o.shift();
p=this._castEventNameNumberToString(p);return this._keyDownEmitter.off.apply(this._keyDownEmitter,[p].concat(o))
};i.removeKeyUp=function(){var o=Array.prototype.slice.call(arguments);var p=o.shift();
p=this._castEventNameNumberToString(p);return this._keyUpEmitter.off.apply(this._keyUpEmitter,[p].concat(o))
};i.isDown=function(o){return(this._keysDown.indexOf(o)!==-1)};i.isUp=function(o){return !this.isDown(o)
};i._trackKeyUp=function(p){var o=this._keysDown.indexOf(p);if(o!==-1){this._keysDown.splice(o,1)
}};i._trackKeyDown=function(o){if(this._keysDown.indexOf(o)===-1){this._keysDown.push(o)
}};i._normalizeKeyboardEvent=function(o){return new g(o)};c.exports=b},{"./KeyEvent":114,"./keymap":116,"ac-dom-events":107}],116:[function(b,c,a){c.exports={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,COMMAND:91,CAPSLOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_ZERO:96,NUMPAD_ONE:97,NUMPAD_TWO:98,NUMPAD_THREE:99,NUMPAD_FOUR:100,NUMPAD_FIVE:101,NUMPAD_SIX:102,NUMPAD_SEVEN:103,NUMPAD_EIGHT:104,NUMPAD_NINE:105,NUMPAD_ASTERISK:106,NUMPAD_PLUS:107,NUMPAD_DASH:109,NUMPAD_DOT:110,NUMPAD_SLASH:111,NUMPAD_EQUALS:187,TICK:192,LEFT_BRACKET:219,RIGHT_BRACKET:221,BACKSLASH:220,SEMICOLON:186,APOSTRAPHE:222,SPACEBAR:32,CLEAR:12,COMMA:188,DOT:190,SLASH:191}
},{}],117:[function(b,c,a){c.exports={add:b("./ac-classlist/add"),contains:b("./ac-classlist/contains"),remove:b("./ac-classlist/remove"),toggle:b("./ac-classlist/toggle")}
},{"./ac-classlist/add":118,"./ac-classlist/contains":119,"./ac-classlist/remove":121,"./ac-classlist/toggle":122}],118:[function(b,c,a){var d=b("./helpers/className");
c.exports=function f(){var h=Array.prototype.slice.call(arguments);var g=h.shift(h);
if(g.classList&&g.classList.add){g.classList.add.apply(g.classList,h)}else{h.forEach(d.add.bind(this,g))
}}},{"./helpers/className":120}],119:[function(b,d,a){var f=b("./helpers/className");
d.exports=function c(h,g){if(h.classList&&h.classList.contains){return h.classList.contains(g)
}return f.contains(h,g)}},{"./helpers/className":120}],120:[function(c,d,a){var h=function(i){return new RegExp("(\\s|^)"+i+"(\\s|$)")
};var g=function(j,i){return h(i).test(j.className)};var f=function(j,i){if(!g(j,i)){j.className+=" "+i
}};var b=function(j,i){if(g(j,i)){j.className=j.className.replace(h(i),"$1").trim()
}};d.exports={contains:g,add:f,remove:b}},{}],121:[function(c,d,b){var f=c("./helpers/className");
d.exports=function a(){var h=Array.prototype.slice.call(arguments);var g=h.shift(h);
if(g.classList&&g.classList.remove){g.classList.remove.apply(g.classList,h)}else{h.forEach(f.remove.bind(this,g))
}}},{"./helpers/className":120}],122:[function(c,d,b){var f=c("./helpers/className");
d.exports=function a(j,i,k){var h=(typeof k!=="undefined");var g;if(j.classList&&j.classList.toggle){if(h){return j.classList.toggle(i,k)
}return j.classList.toggle(i)}if(h){g=!!k}else{g=!f.contains(j,i)}if(g){f.add(j,i)
}else{f.remove(j,i)}return g}},{"./helpers/className":120}],123:[function(b,c,a){c.exports=b(80)
},{"./ac-prefixer/Prefixer":124}],124:[function(b,c,a){c.exports=b(81)},{"./Prefixer/camelCasedEvents":125}],125:[function(b,c,a){c.exports=b(82)
},{}],126:[function(b,c,a){c.exports=b(107)},{"./ac-dom-events/addEventListener":127,"./ac-dom-events/dispatchEvent":128,"./ac-dom-events/removeEventListener":129,"./ac-dom-events/stop":130,"./ac-dom-events/target":131}],127:[function(b,c,a){c.exports=b(108)
},{"ac-prefixer":123}],128:[function(b,c,a){c.exports=b(109)},{}],129:[function(b,c,a){c.exports=b(110)
},{"ac-prefixer":123}],130:[function(b,c,a){c.exports=b(111)},{}],131:[function(b,c,a){c.exports=b(112)
},{}],132:[function(b,c,a){c.exports=b(25)},{}],133:[function(b,c,a){c.exports=b(26)
},{}],134:[function(b,c,a){c.exports=b(27)},{}],135:[function(b,c,a){c.exports=10
},{}],136:[function(b,c,a){c.exports=b(28)},{}],137:[function(b,c,a){c.exports=b(29)
},{}],138:[function(c,d,b){d.exports=function a(g){var f=document.createDocumentFragment();
var h;if(g){h=document.createElement("div");h.innerHTML=g;while(h.firstChild){f.appendChild(h.firstChild)
}}return f}},{}],139:[function(b,c,a){c.exports=b(30)},{"./ELEMENT_NODE":136,"./internal/isNodeType":147,"ac-polyfills/Array/prototype.filter":157,"ac-polyfills/Array/prototype.slice":159}],140:[function(c,d,a){d.exports=function b(g,f){if("hasAttribute" in g){return g.hasAttribute(f)
}return(g.attributes.getNamedItem(f)!==null)}},{}],141:[function(b,c,a){c.exports={createDocumentFragment:b("./createDocumentFragment"),filterByNodeType:b("./filterByNodeType"),hasAttribute:b("./hasAttribute"),indexOf:b("./indexOf"),insertAfter:b("./insertAfter"),insertBefore:b("./insertBefore"),insertFirstChild:b("./insertFirstChild"),insertLastChild:b("./insertLastChild"),isComment:b("./isComment"),isDocument:b("./isDocument"),isDocumentFragment:b("./isDocumentFragment"),isDocumentType:b("./isDocumentType"),isElement:b("./isElement"),isNode:b("./isNode"),isNodeList:b("./isNodeList"),isTextNode:b("./isTextNode"),remove:b("./remove"),replace:b("./replace"),COMMENT_NODE:b("./COMMENT_NODE"),DOCUMENT_FRAGMENT_NODE:b("./DOCUMENT_FRAGMENT_NODE"),DOCUMENT_NODE:b("./DOCUMENT_NODE"),DOCUMENT_TYPE_NODE:b("./DOCUMENT_TYPE_NODE"),ELEMENT_NODE:b("./ELEMENT_NODE"),TEXT_NODE:b("./TEXT_NODE")}
},{"./COMMENT_NODE":132,"./DOCUMENT_FRAGMENT_NODE":133,"./DOCUMENT_NODE":134,"./DOCUMENT_TYPE_NODE":135,"./ELEMENT_NODE":136,"./TEXT_NODE":137,"./createDocumentFragment":138,"./filterByNodeType":139,"./hasAttribute":140,"./indexOf":142,"./insertAfter":143,"./insertBefore":144,"./insertFirstChild":145,"./insertLastChild":146,"./isComment":149,"./isDocument":150,"./isDocumentFragment":151,"./isDocumentType":152,"./isElement":153,"./isNode":154,"./isNodeList":155,"./isTextNode":156,"./remove":160,"./replace":161}],142:[function(c,d,b){c("ac-polyfills/Array/prototype.indexOf");
c("ac-polyfills/Array/prototype.slice");var g=c("./internal/validate");var a=c("./filterByNodeType");
d.exports=function f(k,i){var h=k.parentNode;var j;if(!h){return 0}j=h.childNodes;
if(i!==false){j=a(j,i)}else{j=Array.prototype.slice.call(j)}return j.indexOf(k)
}},{"./filterByNodeType":139,"./internal/validate":148,"ac-polyfills/Array/prototype.indexOf":158,"ac-polyfills/Array/prototype.slice":159}],143:[function(b,c,a){var f=b("./internal/validate");
c.exports=function d(g,h){f.insertNode(g,true,"insertAfter");f.childNode(h,true,"insertAfter");
f.hasParentNode(h,"insertAfter");if(!h.nextSibling){return h.parentNode.appendChild(g)
}return h.parentNode.insertBefore(g,h.nextSibling)}},{"./internal/validate":148}],144:[function(c,d,a){var f=c("./internal/validate");
d.exports=function b(g,h){f.insertNode(g,true,"insertBefore");f.childNode(h,true,"insertBefore");
f.hasParentNode(h,"insertBefore");return h.parentNode.insertBefore(g,h)}},{"./internal/validate":148}],145:[function(c,d,b){var f=c("./internal/validate");
d.exports=function a(g,h){f.insertNode(g,true,"insertFirstChild");f.parentNode(h,true,"insertFirstChild");
if(!h.firstChild){return h.appendChild(g)}return h.insertBefore(g,h.firstChild)
}},{"./internal/validate":148}],146:[function(b,c,a){var d=b("./internal/validate");
c.exports=function f(g,h){d.insertNode(g,true,"insertLastChild");d.parentNode(h,true,"insertLastChild");
return h.appendChild(g)}},{"./internal/validate":148}],147:[function(b,c,a){c.exports=b(31)
},{"../isNode":154}],148:[function(g,d,j){var b=g("./isNodeType");var c=g("../COMMENT_NODE");
var k=g("../DOCUMENT_FRAGMENT_NODE");var i=g("../ELEMENT_NODE");var h=g("../TEXT_NODE");
var m=[i,h,c,k];var f=" must be an Element, TextNode, Comment, or Document Fragment";
var p=[i,h,c];var l=" must be an Element, TextNode, or Comment";var n=[i,k];var o=" must be an Element, or Document Fragment";
var a=" must have a parentNode";d.exports={parentNode:function(q,t,s,r){r=r||"target";
if((q||t)&&!b(q,n)){throw new TypeError(s+": "+r+o)}},childNode:function(q,t,s,r){r=r||"target";
if(!q&&!t){return}if(!b(q,p)){throw new TypeError(s+": "+r+l)}},insertNode:function(q,t,s,r){r=r||"node";
if(!q&&!t){return}if(!b(q,m)){throw new TypeError(s+": "+r+f)}},hasParentNode:function(q,s,r){r=r||"target";
if(!q.parentNode){throw new TypeError(s+": "+r+a)}}}},{"../COMMENT_NODE":132,"../DOCUMENT_FRAGMENT_NODE":133,"../ELEMENT_NODE":136,"../TEXT_NODE":137,"./isNodeType":147}],149:[function(c,d,a){var g=c("./internal/isNodeType");
var f=c("./COMMENT_NODE");d.exports=function b(h){return g(h,f)}},{"./COMMENT_NODE":132,"./internal/isNodeType":147}],150:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./DOCUMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_NODE":134,"./internal/isNodeType":147}],151:[function(b,c,a){c.exports=b(32)
},{"./DOCUMENT_FRAGMENT_NODE":133,"./internal/isNodeType":147}],152:[function(b,c,a){var g=b("./internal/isNodeType");
var f=b("./DOCUMENT_TYPE_NODE");c.exports=function d(h){return g(h,f)}},{"./DOCUMENT_TYPE_NODE":135,"./internal/isNodeType":147}],153:[function(b,c,a){c.exports=b(33)
},{"./ELEMENT_NODE":136,"./internal/isNodeType":147}],154:[function(b,c,a){c.exports=b(34)
},{}],155:[function(c,d,b){var f=/^\[object (HTMLCollection|NodeList|Object)\]$/;
d.exports=function a(g){if(!g){return false}if(typeof g.length!=="number"){return false
}if(typeof g[0]==="object"&&(!g[0]||!g[0].nodeType)){return false}return f.test(Object.prototype.toString.call(g))
}},{}],156:[function(c,d,a){var g=c("./internal/isNodeType");var b=c("./TEXT_NODE");
d.exports=function f(h){return g(h,b)}},{"./TEXT_NODE":137,"./internal/isNodeType":147}],157:[function(b,c,a){c.exports=b(1)
},{}],158:[function(b,c,a){c.exports=b(37)},{}],159:[function(b,c,a){c.exports=b(38)
},{}],160:[function(c,d,b){var f=c("./internal/validate");d.exports=function a(g){f.childNode(g,true,"remove");
if(!g.parentNode){return g}return g.parentNode.removeChild(g)}},{"./internal/validate":148}],161:[function(b,d,a){var f=b("./internal/validate");
d.exports=function c(g,h){f.insertNode(g,true,"insertFirstChild","newNode");f.childNode(h,true,"insertFirstChild","oldNode");
f.hasParentNode(h,"insertFirstChild","oldNode");return h.parentNode.replaceChild(g,h)
}},{"./internal/validate":148}],162:[function(b,c,a){c.exports=b(80)},{"./ac-prefixer/Prefixer":163}],163:[function(b,c,a){c.exports=b(81)
},{"./Prefixer/camelCasedEvents":164}],164:[function(b,c,a){c.exports=b(82)},{}],165:[function(b,c,a){c.exports={getStyle:b("./ac-dom-styles/getStyle"),setStyle:b("./ac-dom-styles/setStyle")}
},{"./ac-dom-styles/getStyle":166,"./ac-dom-styles/setStyle":169}],166:[function(d,f,c){var g=d("ac-prefixer");
var b=d("./shim/getComputedStyle");f.exports=function a(){var k=Array.prototype.slice.call(arguments);
var p=k.shift(k);var m=b(p);var l={};var o;var h;var n;var j;if(typeof k[0]!=="string"){k=k[0]
}for(j=0;j<k.length;j++){o=k[j];h=g.getStyleProperty(o);if(h){o=g.stripPrefixes(h);
n=m[h];if(!n||n==="auto"){n=null}if(n){n=g.stripPrefixes(n)}}else{n=null}l[o]=n
}return l}},{"./shim/getComputedStyle":170,"ac-prefixer":162}],167:[function(d,f,c){var b={transform:["matrix","translate","translateX","translateY","scale","scaleX","scaleY","rotate","skewX","skewY","matrix3d","translate3d","translateZ","scale3d","scaleZ","rotate3d","rotateX","rotateY","rotateZ","perspective"],filter:["blur","brightness","contrast","drop-shadow","grayscale","hue-rotate","invert","saturate","sepia"]};
f.exports=function a(j){var l;var k;var h;var g;for(l in b){k=j[l]?j[l]:"";for(g=0;
g<b[l].length;g++){h=b[l][g];if(h in j){k+=" "+h+"("+j[h]+")";delete j[h]}}k=k.trim();
if(k){j[l]=k}}return j}},{}],168:[function(c,d,b){d.exports=function a(h){var k;
var l;var j;var f;var g;if(typeof h==="string"){k={};l=h.split(";");f=l.length;
for(g=0;g<f;g+=1){j=l[g].indexOf(":");if(j>0){k[l[g].substr(0,j).trim()]=l[g].substr(j+1).trim()
}}}else{k=h}return k}},{}],169:[function(d,f,c){var h=d("ac-prefixer");var b=d("./helpers/cssToObject");
var a=d("./helpers/combinePartialProperties");f.exports=function g(o,l){var k;var j;
var n;var i;var m;if((typeof l!=="string"&&typeof l!=="object")||Array.isArray(l)){throw new TypeError("setStyle: styles must be an Object or String")
}l=b(l);l=a(l);k="";for(n in l){m=l[n];if(!m&&m!==0){i=h.getStyleProperty(n);if("removeAttribute" in o.style){o.style.removeAttribute(i)
}else{o.style[i]=""}}else{j=h.getStyleCSS(n,m);if(j!==false){k+=" "+j}}}if(k.length){o.style.cssText+=k
}return o}},{"./helpers/combinePartialProperties":167,"./helpers/cssToObject":168,"ac-prefixer":162}],170:[function(b,c,a){c.exports=(function(){if("getComputedStyle" in window){return window.getComputedStyle
}return function(g){var d;var h;var f;d=g.currentStyle;for(h in d){if(h==="styleFloat"){f["float"]=f.cssFloat=d[h]
}else{f[h]=d[h]}}return f}}())},{}],171:[function(b,c,a){c.exports={Modal:b("./ac-modal/Modal")}
},{"./ac-modal/Modal":172}],172:[function(d,c,g){var b=d("ac-classlist");var l=d("ac-dom-styles");
var n=d("ac-dom-events");var m=d("ac-dom-nodes");var k=d("ac-dom-traversal");var f=d("ac-object");
var i=d("ac-keyboard");var o=i.keys;var p=d("ac-event-emitter").EventEmitter;var a=document.documentElement;
var h;function j(q){this.opened=false;this.closeButton=null;this.modalEl=null;this.contentEl=null;
this._keysToClose=[o.ESCAPE];this._keysToOpen=[];this._boundClose=this.close.bind(this);
this._generateElements();if(q){this.appendContent(q)}}var h=j.prototype=f.create(p.prototype);
h._getScrollX=function(){var r=window.pageXOffset;if(!r){var q=document.documentElement||document.body.parentNode||document.body;
r=q.scrollLeft}return r};h._getScrollY=function(){var r=window.pageYOffset;if(!r){var q=document.documentElement||document.body.parentNode||document.body;
r=q.scrollTop}return r};h.open=function(){this._scrollX=this._getScrollX();this._scrollY=this._getScrollY();
if(!this.opened){this._attachEvents();this.trigger("willopen");b.add(a,"modal-open");
this.opened=true;this.trigger("open")}};h.close=function(){this.trigger("willclose");
this._removeEvents();b.remove(a,"modal-open");this._returnToScrollPosition();this.opened=false;
this.trigger("close")};h.appendContent=function(q){if(q&&m.isElement(q)){this.contentEl.appendChild(q)
}else{throw new TypeError(q+" is not an Element")}};h.removeContent=function(q){if(this.contentEl.contains(q)){m.remove(q)
}};h.emptyContent=function(){var q=k.children(this.contentEl);q.forEach(m.remove)
};h.destroy=function(){};h.addKeyToClose=function(q){this._keysToClose.push(q);
i.addKeyUp(q,this.close,this)};h.removeKeyToClose=function(r){var q=this._keysToClose.indexOf(r);
if(q!==-1){this._keysToClose.splice(q,1)}i.removeKeyUp(r,this.close,this)};h._removeEvents=function(){n.removeEventListener(this.closeButton,"click",this._boundClose);
this._keysToClose.forEach(this.removeKeyToClose,this)};h._attachEvents=function(){n.addEventListener(this.closeButton,"click",this._boundClose);
this._keysToClose.forEach(this.addKeyToClose,this)};h._generateCloseButton=function(){var q=document.createElement("button");
b.add(q,"modal-close","icon","icon-closealt");return q};h._generateModalEl=function(){var q=document.createElement("div");
b.add(q,"modal");return q};h._createContentElement=function(){var q=document.createElement("div");
b.add(q,"modal-content");return q};h._generateElements=function(){this.closeButton=this._closeButton||this._generateCloseButton();
this.contentEl=this._createContentElement();this.modalEl=this._modalEl||this._generateModalEl();
this.modalEl.appendChild(this.closeButton);this.modalEl.appendChild(this.contentEl);
document.body.appendChild(this.modalEl);b.add(a,"has-modal")};h._returnToScrollPosition=function(){window.scrollTo(this._scrollX||0,this._scrollY||0)
};c.exports=j},{"ac-classlist":117,"ac-dom-events":126,"ac-dom-nodes":141,"ac-dom-styles":165,"ac-dom-traversal":18,"ac-keyboard":113,"ac-object":178}],173:[function(c,d,b){c("ac-polyfills/Array/isArray");
var h=c("./extend");var a=Object.prototype.hasOwnProperty;var f=function(i,j){var k;
for(k in j){if(a.call(j,k)){if(j[k]===null){i[k]=null}else{if(typeof j[k]==="object"){i[k]=Array.isArray(j[k])?[]:{};
f(i[k],j[k])}else{i[k]=j[k]}}}}return i};d.exports=function g(j,i){if(i){return f({},j)
}return h({},j)}},{"./extend":176,"ac-polyfills/Array/isArray":182}],174:[function(b,d,a){var f=function(){};
d.exports=function c(g){if(arguments.length>1){throw new Error("Second argument not supported")
}if(g===null||typeof g!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(g)}else{f.prototype=g;
return new f()}}},{}],175:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"){throw new TypeError("defaults: must provide a defaults object")
}g=g||{};if(typeof g!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return f({},h,g)}},{"./extend":176}],176:[function(c,d,b){c("ac-polyfills/Array/prototype.forEach");
var a=Object.prototype.hasOwnProperty;d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]
}else{h=[].slice.call(arguments)}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{"ac-polyfills/Array/prototype.forEach":183}],177:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(i){if(Object.getPrototypeOf){return Object.getPrototypeOf(i)
}else{if(typeof i!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return i.__proto__}else{var g=i.constructor;
var h;if(a.call(i,"constructor")){h=g;if(!(delete i.constructor)){return null}g=i.constructor;
i.constructor=h}return g?g.prototype:null}}}}},{}],178:[function(b,c,a){c.exports={clone:b("./clone"),create:b("./create"),defaults:b("./defaults"),extend:b("./extend"),getPrototypeOf:b("./getPrototypeOf"),isDate:b("./isDate"),isEmpty:b("./isEmpty"),isRegExp:b("./isRegExp"),toQueryParameters:b("./toQueryParameters")}
},{"./clone":173,"./create":174,"./defaults":175,"./extend":176,"./getPrototypeOf":177,"./isDate":179,"./isEmpty":180,"./isRegExp":181,"./toQueryParameters":185}],179:[function(b,d,a){d.exports=function c(f){return Object.prototype.toString.call(f)==="[object Date]"
}},{}],180:[function(c,d,b){var a=Object.prototype.hasOwnProperty;d.exports=function f(g){var h;
if(typeof g!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(h in g){if(a.call(g,h)){return false}}return true}},{}],181:[function(c,d,b){d.exports=function a(f){return window.RegExp?f instanceof RegExp:false
}},{}],182:[function(b,c,a){if(!Array.isArray){Array.isArray=function(d){return Object.prototype.toString.call(d)==="[object Array]"
}}},{}],183:[function(b,c,a){c.exports=b(36)},{}],184:[function(i,c,x){var s=Object.prototype.toString;
var l=Object.prototype.hasOwnProperty;var b=typeof Array.prototype.indexOf==="function"?function(z,A){return z.indexOf(A)
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
}catch(z){return A}}},{}],185:[function(c,f,b){var a=c("qs");f.exports=function d(g){if(typeof g!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return a.stringify(g)}},{qs:184}],186:[function(b,c,a){c.exports={SharedInstance:b("./ac-shared-instance/SharedInstance")}
},{"./ac-shared-instance/SharedInstance":187}],187:[function(d,h,c){var i=window,g="AC",a="SharedInstance",f=i[g];
var b=(function(){var j={};return{get:function(l,k){var m=null;if(j[l]&&j[l][k]){m=j[l][k]
}return m},set:function(m,k,l){if(!j[m]){j[m]={}}if(typeof l==="function"){j[m][k]=new l()
}else{j[m][k]=l}return j[m][k]},share:function(m,k,l){var n=this.get(m,k);if(!n){n=this.set(m,k,l)
}return n},remove:function(l,k){var m=typeof k;if(m==="string"||m==="number"){if(!j[l]||!j[l][k]){return
}j[l][k]=null;return}if(j[l]){j[l]=null}}}}());if(!f){f=i[g]={}}if(!f[a]){f[a]=b
}h.exports=f[a]},{}],188:[function(b,c,a){c.exports={CID:b("./ac-mvc-cid/CID")}
},{"./ac-mvc-cid/CID":189}],189:[function(c,f,b){var a=c("ac-shared-instance").SharedInstance;
var g="ac-mvc-cid:CID",d="1.0.0";function i(){this._idCount=0}var h=i.prototype;
h._cidPrefix="cid";h.getNewCID=function(){var j=this._cidPrefix+"-"+this._idCount;
this._idCount++;return j};f.exports=a.share(g,d,i)},{"ac-shared-instance":186}],190:[function(b,c,a){c.exports=b(184)
},{}],191:[function(b,c,a){c.exports={clone:b("./ac-object/clone"),create:b("./ac-object/create"),defaults:b("./ac-object/defaults"),extend:b("./ac-object/extend"),getPrototypeOf:b("./ac-object/getPrototypeOf"),isDate:b("./ac-object/isDate"),isEmpty:b("./ac-object/isEmpty"),isRegExp:b("./ac-object/isRegExp"),toQueryParameters:b("./ac-object/toQueryParameters")}
},{"./ac-object/clone":192,"./ac-object/create":193,"./ac-object/defaults":194,"./ac-object/extend":195,"./ac-object/getPrototypeOf":196,"./ac-object/isDate":197,"./ac-object/isEmpty":198,"./ac-object/isRegExp":199,"./ac-object/toQueryParameters":200}],192:[function(b,c,a){var f=b("./extend");
c.exports=function d(g){return f({},g)}},{"./extend":195}],193:[function(b,c,a){c.exports=b(174)
},{}],194:[function(b,c,a){arguments[4][175][0].apply(a,arguments)},{"./extend":195}],195:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]}else{h=[].slice.call(arguments)
}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{}],196:[function(b,c,a){c.exports=b(177)},{}],197:[function(b,c,a){c.exports=b(179)
},{}],198:[function(b,c,a){c.exports=b(180)},{}],199:[function(b,c,a){c.exports=b(181)
},{}],200:[function(b,c,a){c.exports=b(185)},{qs:190}],201:[function(b,c,a){c.exports={Model:b("./ac-mvc-model/Model")}
},{"./ac-mvc-model/Model":202}],202:[function(c,d,b){var g=c("ac-event-emitter").EventEmitter;
var a=c("ac-object");var h=c("ac-mvc-cid").CID;var i=function(j){this.attributes=a.defaults(this.defaultAttributes,j||{});
this.cid=h.getNewCID();if(this.attributes[this.idAttribute]){this.id=this.attributes[this.idAttribute]
}};var f=i.prototype=a.create(g.prototype);f.defaultAttributes={};f.idAttribute="id";
f._trigger=function(l,k,j){j=j||{};if(j.silent!==true){this.trigger(l,k)}};f._triggerChange=function(l,k,j){return this._trigger("change:"+l,k,j)
};f.get=function(j){if(!this.attributes){return}return this.attributes[j]};f.set=function(k,j){if(!this.attributes){return
}var o;var n;var m;var l={};var p=false;for(o in k){if(k.hasOwnProperty(o)){m=this.get(o);
if((typeof m==="object"&&typeof k[o]==="object"&&JSON.stringify(m)===JSON.stringify(k[o]))||(m===k[o])){continue
}p=true;this.attributes[o]=k[o];n={value:k[o],previous:m};l[o]=n;this._triggerChange(o,n,j)
}}if(p){this._trigger("change",l,j)}};f.has=function(j){if(!this.attributes){return false
}return(this.attributes[j]!==undefined)};f.eachAttribute=function(k,j){if(!this.attributes){return
}var l;for(l in this.attributes){if(this.attributes.hasOwnProperty(l)){k.call(j,{attribute:l,value:this.attributes[l]})
}}};f.destroy=function(){this.trigger("destroy");this.off();var j;for(j in this){if(this.hasOwnProperty(j)){this[j]=null
}}};d.exports=i},{"ac-mvc-cid":188,"ac-object":191}],203:[function(b,c,a){c.exports={localization:b("./ac-video-localization/localization")}
},{"./ac-video-localization/localization":204}],204:[function(b,c,a){var h=b("./translations");
var g="/global/ac_media_player/scripts/ac_media_languages/";var f=document.getElementsByTagName("html")[0];
var d=b("ac-mvc-model").Model;var i={create:function(k){k=k||this.getLang();var j=this.getRequestPath(k);
return this.sendRequest(j)},getRequestPath:function(j){return g+this.getTranslationFileName(j)
},getLang:function(){var j=f.getAttribute("lang");var k;if(!j){k="en-us"}else{switch(j.toLowerCase()){case"es-418":k="es-LA";
break;case"pt":k="pt-BR";break;default:k=j;break}}return k},getTranslationFileName:function(j){var l=j.toLowerCase().split("-")[0];
var k=h[j]||false;if(!k){k=h[l]||h.en}return k},sendRequest:function(j){return new Promise(function(m,l){var k=new XMLHttpRequest();
k.onreadystatechange=function(){if(k.readyState===4){if(k.status>=200&&k.status<300){try{var n=JSON.parse(k.responseText);
for(var p in n){n[p].replace(/<br\s{0,}\/>/g,"")}m(new d(n))}catch(o){l(o)}}else{l(k)
}}};k.open("GET",j);k.send()})}};c.exports=i},{"./translations":205,"ac-mvc-model":201}],205:[function(b,c,a){c.exports={"bg-BG":"bg-BG.json","cs-CZ":"cs-CZ.json","el-GR":"el-GR.json","de-AT":"de-AT.json","de-CH":"de-CH.json","de-DE":"de-DE.json","de-LI":"de-LI.json","da-DK":"da-DK.json",en:"en.json","en-US":"en-US.json","en-AP":"en-AP.json","en-CA":"en-CA.json","en-GB":"en-GB.json","en-HK":"en-HK.json","en-IE":"en-IE.json","en-IN":"en-IN.json","en-KR":"en-KR.json","en-AU":"en-AU.json","en-NZ":"en-NZ.json","en-SG":"en-SG.json","en-ZA":"en-ZA.json",es:"es.json","es-LA":"es-LA.json","es-MX":"es-MX.json","es-ES":"es-ES.json","et-EE":"et-EE.json","fi-FI":"fi-FI.json",fr:"fr.json","fr-BE":"fr-BE.json","fr-CA":"fr-CA.json","fr-CH":"fr-CH.json","fr-FR":"fr-FR.json","hr-HR":"hr-HR.json","hu-HU":"hu-HU.json","it-IT":"it-IT.json",ja:"ja.json","ja-JP":"ja-JP.json","ko-KR":"ko-KR.json","lt-LT":"lt-LT.json","lv-LV":"lv-LV.json","nl-BE":"nl-BE.json","nl-NL":"nl-NL.json","no-NO":"no-NO.json","pl-PL":"pl-PL.json",pt:"pt.json","pt-BR":"pt-BR.json","pt-PT":"pt-PT.json","ro-RO":"ro-RO.json","ru-RU":"ru-RU.json","sk-SK":"sk-SK.json","sv-SE":"sv-SE.json","tr-TR":"tr-TR.json",zh:"zh.json","zh-CN":"zh-CN.json","zh-HK":"zh-HK.json","zh-TW":"zh-TW.json"}
},{}],206:[function(b,c,a){c.exports=b(117)},{"./ac-classlist/add":207,"./ac-classlist/contains":208,"./ac-classlist/remove":210,"./ac-classlist/toggle":211}],207:[function(b,c,a){c.exports=b(118)
},{"./helpers/className":209}],208:[function(b,c,a){c.exports=b(119)},{"./helpers/className":209}],209:[function(b,c,a){c.exports=b(120)
},{}],210:[function(b,c,a){c.exports=b(121)},{"./helpers/className":209}],211:[function(b,c,a){c.exports=b(122)
},{"./helpers/className":209}],212:[function(b,c,a){c.exports=b(80)},{"./ac-prefixer/Prefixer":213}],213:[function(b,c,a){c.exports=b(81)
},{"./Prefixer/camelCasedEvents":214}],214:[function(b,c,a){c.exports=b(82)},{}],215:[function(b,c,a){c.exports={addEventListener:b("./ac-dom-events/addEventListener"),dispatchEvent:b("./ac-dom-events/dispatchEvent"),preventDefault:b("./ac-dom-events/preventDefault"),removeEventListener:b("./ac-dom-events/removeEventListener"),stop:b("./ac-dom-events/stop"),stopPropagation:b("./ac-dom-events/stopPropagation"),target:b("./ac-dom-events/target")}
},{"./ac-dom-events/addEventListener":216,"./ac-dom-events/dispatchEvent":217,"./ac-dom-events/preventDefault":218,"./ac-dom-events/removeEventListener":219,"./ac-dom-events/stop":220,"./ac-dom-events/stopPropagation":221,"./ac-dom-events/target":222}],216:[function(b,c,a){c.exports=b(108)
},{"ac-prefixer":212}],217:[function(b,c,a){c.exports=b(109)},{}],218:[function(b,c,a){c.exports=b(67)
},{}],219:[function(b,c,a){c.exports=b(110)},{"ac-prefixer":212}],220:[function(b,c,a){c.exports=b(70)
},{"./preventDefault":218,"./stopPropagation":221}],221:[function(b,c,a){c.exports=b(71)
},{}],222:[function(b,c,a){c.exports=function d(f){f=f||window.event;return(typeof f.target!=="undefined")?f.target:f.srcElement
}},{}],223:[function(b,c,a){var d={querySelector:b("./ac-dom-traversal/querySelector"),querySelectorAll:b("./ac-dom-traversal/querySelectorAll"),ancestor:b("./ac-dom-traversal/ancestor"),ancestors:b("./ac-dom-traversal/ancestors"),children:b("./ac-dom-traversal/children"),firstChild:b("./ac-dom-traversal/firstChild"),lastChild:b("./ac-dom-traversal/lastChild"),siblings:b("./ac-dom-traversal/siblings"),nextSibling:b("./ac-dom-traversal/nextSibling"),nextSiblings:b("./ac-dom-traversal/nextSiblings"),previousSibling:b("./ac-dom-traversal/previousSibling"),previousSiblings:b("./ac-dom-traversal/previousSiblings"),filterBySelector:b("./ac-dom-traversal/filterBySelector"),matchesSelector:b("./ac-dom-traversal/matchesSelector")};
b("./ac-dom-traversal/shims/ie")(d);c.exports=d},{"./ac-dom-traversal/ancestor":224,"./ac-dom-traversal/ancestors":225,"./ac-dom-traversal/children":226,"./ac-dom-traversal/filterBySelector":227,"./ac-dom-traversal/firstChild":228,"./ac-dom-traversal/lastChild":231,"./ac-dom-traversal/matchesSelector":232,"./ac-dom-traversal/nextSibling":233,"./ac-dom-traversal/nextSiblings":234,"./ac-dom-traversal/previousSibling":235,"./ac-dom-traversal/previousSiblings":236,"./ac-dom-traversal/querySelector":237,"./ac-dom-traversal/querySelectorAll":238,"./ac-dom-traversal/shims/ie":239,"./ac-dom-traversal/siblings":240}],224:[function(d,g,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");g.exports=function f(j,i){h.childNode(j,true,"ancestors");
h.selector(i,false,"ancestors");if(j!==document.body){while((j=j.parentNode)&&a.isElement(j)){if(!i||b(j,i)){return j
}if(j===document.body){break}}}return null}},{"./helpers/validate":230,"./matchesSelector":232,"ac-dom-nodes":245}],225:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(k,i){var j=[];
h.childNode(k,true,"ancestors");h.selector(i,false,"ancestors");if(k!==document.body){while((k=k.parentNode)&&a.isElement(k)){if(!i||b(k,i)){j.push(k)
}if(k===document.body){break}}}return j}},{"./helpers/validate":230,"./matchesSelector":232,"ac-dom-nodes":245}],226:[function(d,g,c){var a=d("ac-dom-nodes");
var b=d("./filterBySelector");var h=d("./helpers/validate");g.exports=function f(k,i){var j;
h.parentNode(k,true,"children");h.selector(i,false,"children");j=k.children||k.childNodes;
j=a.filterByNodeType(j);if(i){j=b(j,i)}return j}},{"./filterBySelector":227,"./helpers/validate":230,"ac-dom-nodes":245}],227:[function(d,f,c){var b=d("./matchesSelector");
var g=d("./helpers/validate");f.exports=function a(i,h){g.selector(h,true,"filterBySelector");
i=Array.prototype.slice.call(i);return i.filter(function(j){return b(j,h)})}},{"./helpers/validate":230,"./matchesSelector":232}],228:[function(b,d,a){var c=b("./children");
var g=b("./helpers/validate");d.exports=function f(j,h){var i;g.parentNode(j,true,"firstChild");
g.selector(h,false,"firstChild");if(j.firstElementChild&&!h){return j.firstElementChild
}i=c(j,h);if(i.length){return i[0]}return null}},{"./children":226,"./helpers/validate":230}],229:[function(b,c,a){c.exports=window.Element?(function(d){return d.matches||d.matchesSelector||d.webkitMatchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector
}(Element.prototype)):null},{}],230:[function(d,b,f){var j=d("ac-dom-nodes");var a=function(m,l){if(!j.isNode(m)){return false
}if(typeof l==="number"){return(m.nodeType===l)}return(l.indexOf(m.nodeType)!==-1)
};var h=[j.ELEMENT_NODE,j.DOCUMENT_NODE,j.DOCUMENT_FRAGMENT_NODE];var i=" must be an Element, Document, or Document Fragment";
var k=[j.ELEMENT_NODE,j.TEXT_NODE,j.COMMENT_NODE];var g=" must be an Element, TextNode, or Comment";
var c=" must be a string";b.exports={parentNode:function(l,o,n,m){m=m||"node";if((l||o)&&!a(l,h)){throw new TypeError(n+": "+m+i)
}},childNode:function(l,o,n,m){m=m||"node";if(!l&&!o){return}if(!a(l,k)){throw new TypeError(n+": "+m+g)
}},selector:function(l,o,n,m){m=m||"selector";if((l||o)&&typeof l!=="string"){throw new TypeError(n+": "+m+c)
}}}},{"ac-dom-nodes":245}],231:[function(b,d,a){var c=b("./children");var g=b("./helpers/validate");
d.exports=function f(j,h){var i;g.parentNode(j,true,"lastChild");g.selector(h,false,"lastChild");
if(j.lastElementChild&&!h){return j.lastElementChild}i=c(j,h);if(i.length){return i[i.length-1]
}return null}},{"./children":226,"./helpers/validate":230}],232:[function(f,g,d){var b=f("ac-dom-nodes");
var a=f("./helpers/nativeMatches");var h=f("./helpers/validate");g.exports=function c(j,i){h.selector(i,true,"matchesSelector");
return b.isElement(j)?a.call(j,i):false}},{"./helpers/nativeMatches":229,"./helpers/validate":230,"ac-dom-nodes":245}],233:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(j,i){h.childNode(j,true,"nextSibling");
h.selector(i,false,"nextSibling");if(j.nextElementSibling&&!i){return j.nextElementSibling
}while(j=j.nextSibling){if(a.isElement(j)){if(!i||b(j,i)){return j}}}return null
}},{"./helpers/validate":230,"./matchesSelector":232,"ac-dom-nodes":245}],234:[function(f,g,c){var a=f("ac-dom-nodes");
var b=f("./matchesSelector");var h=f("./helpers/validate");g.exports=function d(k,i){var j=[];
h.childNode(k,true,"nextSiblings");h.selector(i,false,"nextSiblings");while(k=k.nextSibling){if(a.isElement(k)){if(!i||b(k,i)){j.push(k)
}}}return j}},{"./helpers/validate":230,"./matchesSelector":232,"ac-dom-nodes":245}],235:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(j,i){h.childNode(j,true,"previousSibling");
h.selector(i,false,"previousSibling");if(j.previousElementSibling&&!i){return j.previousElementSibling
}while(j=j.previousSibling){if(a.isElement(j)){if(!i||b(j,i)){return j}}}return null
}},{"./helpers/validate":230,"./matchesSelector":232,"ac-dom-nodes":245}],236:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(k,i){var j=[];
h.childNode(k,true,"previousSiblings");h.selector(i,false,"previousSiblings");while(k=k.previousSibling){if(a.isElement(k)){if(!i||b(k,i)){j.push(k)
}}}return j.reverse()}},{"./helpers/validate":230,"./matchesSelector":232,"ac-dom-nodes":245}],237:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){h=h||document;f.parentNode(h,true,"querySelector","context");
f.selector(g,true,"querySelector");return h.querySelector(g)}},{"./helpers/validate":230}],238:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){h=h||document;f.parentNode(h,true,"querySelectorAll","context");
f.selector(g,true,"querySelectorAll");return Array.prototype.slice.call(h.querySelectorAll(g))
}},{"./helpers/validate":230}],239:[function(d,f,c){var g=d("../vendor/sizzle/sizzle");
var b=d("ac-dom-nodes");var a=d("../helpers/nativeMatches");var h=d("../helpers/validate");
f.exports=function(j,i){if(i||!("querySelectorAll" in document)){j.querySelectorAll=function(k,m){var l;
var n;m=m||document;h.parentNode(m,true,"querySelectorAll","context");h.selector(k,true,"querySelectorAll");
if(b.isDocumentFragment(m)){l=j.children(m);n=[];l.forEach(function(p){var o;if(g.matchesSelector(p,k)){n.push(p)
}o=g(k,p);if(o.length){n=n.concat(o)}});return n}return g(k,m)};j.querySelector=function(l,m){var k;
m=m||document;h.parentNode(m,true,"querySelector","context");h.selector(l,true,"querySelector");
k=j.querySelectorAll(l,m);return k.length?k[0]:null}}if(i||!a){j.matchesSelector=function(l,k){return g.matchesSelector(l,k)
}}}},{"../helpers/nativeMatches":229,"../helpers/validate":230,"../vendor/sizzle/sizzle":241,"ac-dom-nodes":245}],240:[function(b,d,a){var c=b("./children");
var g=b("./helpers/validate");d.exports=function f(j,h){var i=[];g.childNode(j,true,"siblings");
g.selector(h,false,"siblings");if(j.parentNode){i=c(j.parentNode,h);i=i.filter(function(k){return(k!==j)
})}return i}},{"./children":226,"./helpers/validate":230}],241:[function(b,c,a){c.exports=b(46)
},{}],242:[function(b,c,a){c.exports={DOMEmitter:b("./ac-dom-emitter/DOMEmitter")}
},{"./ac-dom-emitter/DOMEmitter":243}],243:[function(c,b,d){var f;var k=c("ac-event-emitter").EventEmitter,j=c("./DOMEmitterEvent"),g=c("ac-dom-events"),a=c("ac-dom-traversal");
var i="dom-emitter";function h(l){if(l===null){return}this.el=l;this._bindings={};
this._delegateFuncs={};this._eventEmitter=new k()}f=h.prototype;f.on=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._on);
return this};f.once=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._once);
return this};f.off=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._off);
return this};f.has=function(l,q,p,n){var o,r;if(typeof q==="string"){o=q;r=p}else{r=q;
n=p}if(o){var m=this._getDelegateFuncBindingIdx(l,o,r,n,true);if(m>-1){return true
}return false}if(this._eventEmitter&&this._eventEmitter.has.apply(this._eventEmitter,arguments)){return true
}return false};f.trigger=function(n,m,o,s){n=this._parseEventNames(n);n=this._cleanStringData(n);
var q,r,p,l=n.length;if(typeof m==="string"){q=this._cleanStringData(m);r=o}else{r=m;
s=o}for(p=0;p<l;p++){this._triggerDOMEvents(n[p],r,q)}return this};f.emitterTrigger=function(m,o,p){if(!this._eventEmitter){return this
}m=this._parseEventNames(m);m=this._cleanStringData(m);o=new j(o,this);var n,l=m.length;
for(n=0;n<l;n++){this._eventEmitter.trigger(m[n],o,p)}return this};f.propagateTo=function(l,m){this._eventEmitter.propagateTo(l,m);
return this};f.stopPropagatingTo=function(l){this._eventEmitter.stopPropagatingTo(l);
return this};f.stopImmediatePropagation=function(){this._eventEmitter.stopImmediatePropagation();
return this};f.destroy=function(){this._triggerInternalEvent("willdestroy");this.off();
var l;for(l in this){if(this.hasOwnProperty(l)){this[l]=null}}};f._parseEventNames=function(l){if(!l){return[l]
}return l.split(" ")};f._onListenerEvent=function(n,m){var l=new j(m,this);this._eventEmitter.trigger(n,l,false)
};f._setListener=function(l){this._bindings[l]=this._onListenerEvent.bind(this,l);
g.addEventListener(this.el,l,this._bindings[l])};f._removeListener=function(l){g.removeEventListener(this.el,l,this._bindings[l]);
this._bindings[l]=null};f._triggerInternalEvent=function(l,m){this.emitterTrigger(i+":"+l,m)
};f._normalizeArgumentsAndCall=function(l,n){var r={};if(l.length===0){n.call(this,r);
return}if(typeof l[0]==="string"||l[0]===null){l=this._cleanStringData(l);r.events=l[0];
if(typeof l[1]==="string"){r.delegateQuery=l[1];r.callback=l[2];r.context=l[3]}else{r.callback=l[1];
r.context=l[2]}n.call(this,r);return}var m,p,q=":",o=l[0];for(m in o){if(o.hasOwnProperty(m)){r={};
p=this._cleanStringData(m.split(q));r.events=p[0];r.delegateQuery=p[1];r.callback=o[m];
r.context=l[1];n.call(this,r)}}};f._registerDelegateFunc=function(n,p,q,l,o){var m=this._delegateFunc.bind(this,n,p,q,o);
this._delegateFuncs[p]=this._delegateFuncs[p]||{};this._delegateFuncs[p][n]=this._delegateFuncs[p][n]||[];
this._delegateFuncs[p][n].push({func:l,context:o,delegateFunc:m});return m};f._cleanStringData=function(o){var n=false;
if(typeof o==="string"){o=[o];n=true}var m=[],q,s,r,p,l=o.length;for(q=0;q<l;q++){s=o[q];
if(typeof s==="string"){if(s===""||s===" "){continue}r=s.length;while(s[0]===" "){s=s.slice(1,r);
r--}while(s[r-1]===" "){s=s.slice(0,r-1);r--}}m.push(s)}if(n){return m[0]}return m
};f._unregisterDelegateFunc=function(n,q,l,p){if(!this._delegateFuncs[q]||!this._delegateFuncs[q][n]){return
}var o=this._getDelegateFuncBindingIdx(n,q,l,p),m;if(o>-1){m=this._delegateFuncs[q][n][o].delegateFunc;
this._delegateFuncs[q][n].splice(o,1);if(this._delegateFuncs[q][n].length===0){this._delegateFuncs[q][n]=null
}}return m};f._unregisterDelegateFuncs=function(l,n){if(!this._delegateFuncs[n]){return
}if(l!==null&&!this._delegateFuncs[n][l]){return}if(l===null){var m;for(m in this._delegateFuncs[n]){if(this._delegateFuncs[n].hasOwnProperty(m)){this._unbindDelegateFunc(m,n)
}}return}this._unbindDelegateFunc(l,n)};f._unbindDelegateFunc=function(l,n){var o,p,m=0;
while(this._delegateFuncs[n][l]&&this._delegateFuncs[n][l][m]){o=this._delegateFuncs[n][l][m];
p=this._delegateFuncs[n][l][m].length;this._off({events:l,delegateQuery:n,callback:o.func,context:o.context});
if(this._delegateFuncs[n][l]&&p===this._delegateFuncs[n][l].length){m++}}o=p=null
};f._unregisterDelegateFuncsByEvent=function(l){var m;for(m in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(m)){this._unregisterDelegateFuncs(l,m)
}}};f._delegateFunc=function(l,p,r,n,q){if(this._targetHasDelegateAncestor(q.target,p)){var m=Array.prototype.slice.call(arguments,0),o=m.slice(4,m.length);
n=n||window;if(typeof q.detail==="object"){o[0]=q.detail}r.apply(n,o)}};f._targetHasDelegateAncestor=function(n,m){var l=n;
while(l&&l!==this.el&&l!==document.documentElement){if(a.matchesSelector(l,m)){return true
}l=l.parentNode}return false};f._on=function(p){var m=p.events,q=p.callback,o=p.delegateQuery,n=p.context,l=p.unboundCallback||q;
m=this._parseEventNames(m);m.forEach(function(v,r,t,u,s){if(!this.has(s)){this._setListener(s)
}if(typeof u==="string"){v=this._registerDelegateFunc(s,u,v,r,t)}this._triggerInternalEvent("willon",{evt:s,callback:v,context:t,delegateQuery:u});
this._eventEmitter.on(s,v,t);this._triggerInternalEvent("didon",{evt:s,callback:v,context:t,delegateQuery:u})
}.bind(this,q,l,n,o));m=q=l=o=n=null};f._off=function(q){var m=q.events,r=q.callback,p=q.delegateQuery,o=q.context,l=q.unboundCallback||r;
if(typeof m==="undefined"){this._eventEmitter.off();var n;for(n in this._bindings){if(this._bindings.hasOwnProperty(n)){this._removeListener(n)
}}for(n in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(n)){this._delegateFuncs[n]=null
}}return}m=this._parseEventNames(m);m.forEach(function(w,s,u,v,t){if(typeof v==="string"&&typeof s==="function"){w=this._unregisterDelegateFunc(t,v,s,u);
if(!w){return}}if(typeof v==="string"&&typeof w==="undefined"){this._unregisterDelegateFuncs(t,v);
return}if(typeof t==="string"&&typeof w==="undefined"){this._unregisterDelegateFuncsByEvent(t);
if(typeof v==="string"){return}}this._triggerInternalEvent("willoff",{evt:t,callback:w,context:u,delegateQuery:v});
this._eventEmitter.off(t,w,u);this._triggerInternalEvent("didoff",{evt:t,callback:w,context:u,delegateQuery:v});
if(!this.has(t)){this._removeListener(t)}}.bind(this,r,l,o,p));m=r=l=p=o=null};
f._once=function(o){var l=o.events,p=o.callback,n=o.delegateQuery,m=o.context;l=this._parseEventNames(l);
l.forEach(function(t,r,s,q){if(typeof s==="string"){return this._handleDelegateOnce(q,t,r,s)
}if(!this.has(q)){this._setListener(q)}this._triggerInternalEvent("willonce",{evt:q,callback:t,context:r,delegateQuery:s});
this._eventEmitter.once.call(this,q,t,r);this._triggerInternalEvent("didonce",{evt:q,callback:t,context:r,delegateQuery:s})
}.bind(this,p,m,n));l=p=n=m=null};f._handleDelegateOnce=function(l,o,m,n){this._triggerInternalEvent("willonce",{evt:l,callback:o,context:m,delegateQuery:n});
this._on({events:l,context:m,delegateQuery:n,callback:this._getDelegateOnceCallback.bind(this,l,o,m,n),unboundCallback:o});
this._triggerInternalEvent("didonce",{evt:l,callback:o,context:m,delegateQuery:n});
return this};f._getDelegateOnceCallback=function(l,q,n,p){var m=Array.prototype.slice.call(arguments,0),o=m.slice(4,m.length);
q.apply(n,o);this._off({events:l,delegateQuery:p,callback:q,context:n})};f._getDelegateFuncBindingIdx=function(s,p,n,l,t){var r=-1;
if(this._delegateFuncs[p]&&this._delegateFuncs[p][s]){var o,m,q=this._delegateFuncs[p][s].length;
for(o=0;o<q;o++){m=this._delegateFuncs[p][s][o];if(t&&typeof n==="undefined"){n=m.func
}if(m.func===n&&m.context===l){r=o;break}}}return r};f._triggerDOMEvents=function(n,q,p){var m=[this.el];
if(p){m=a.querySelectorAll(p,this.el)}var o,r,l=m.length;for(o=0;o<l;o++){g.dispatchEvent(m[o],n,{bubbles:true,cancelable:true,detail:q})
}};b.exports=h},{"./DOMEmitterEvent":244,"ac-dom-events":215,"ac-dom-traversal":223}],244:[function(b,c,a){var f=b("ac-dom-events");
var d;var g=function(i,h){this._domEmitter=h;this.originalEvent=i||{};this._originalTarget=f.target(this.originalEvent);
this.target=this._originalTarget||this._domEmitter.el;this.currentTarget=this._domEmitter.el;
this.timeStamp=this.originalEvent.timeStamp||Date.now();if(this._isDOMEvent(this.originalEvent)){if(typeof this.originalEvent.detail==="object"){this.data=this.originalEvent.detail
}}else{if(i){this.data=this.originalEvent;this.originalEvent={}}}};d=g.prototype;
d.preventDefault=function(){f.preventDefault(this.originalEvent)};d.stopPropagation=function(){f.stopPropagation(this.originalEvent)
};d.stopImmediatePropagation=function(){if(this.originalEvent.stopImmediatePropagation){this.originalEvent.stopImmediatePropagation()
}this._domEmitter.stopImmediatePropagation()};d._isDOMEvent=function(h){if(this._originalTarget||(document.createEvent!=="undefined"&&typeof CustomEvent!=="undefined"&&h instanceof CustomEvent)){return true
}return false};c.exports=g},{"ac-dom-events":215}],245:[function(d,f,c){var b=d("./ac-dom-nodes/helpers/nodeTypes");
var g;var a={createDocumentFragment:d("./ac-dom-nodes/createDocumentFragment"),filterByNodeType:d("./ac-dom-nodes/filterByNodeType"),insertAfter:d("./ac-dom-nodes/insertAfter"),insertBefore:d("./ac-dom-nodes/insertBefore"),insertFirstChild:d("./ac-dom-nodes/insertFirstChild"),insertLastChild:d("./ac-dom-nodes/insertLastChild"),isComment:d("./ac-dom-nodes/isComment"),isDocument:d("./ac-dom-nodes/isDocument"),isDocumentFragment:d("./ac-dom-nodes/isDocumentFragment"),isDocumentType:d("./ac-dom-nodes/isDocumentType"),isElement:d("./ac-dom-nodes/isElement"),isNode:d("./ac-dom-nodes/isNode"),isTextNode:d("./ac-dom-nodes/isTextNode"),remove:d("./ac-dom-nodes/remove"),replace:d("./ac-dom-nodes/replace")};
for(g in b){a[g]=b[g]}f.exports=a},{"./ac-dom-nodes/createDocumentFragment":246,"./ac-dom-nodes/filterByNodeType":247,"./ac-dom-nodes/helpers/nodeTypes":249,"./ac-dom-nodes/insertAfter":251,"./ac-dom-nodes/insertBefore":252,"./ac-dom-nodes/insertFirstChild":253,"./ac-dom-nodes/insertLastChild":254,"./ac-dom-nodes/isComment":255,"./ac-dom-nodes/isDocument":256,"./ac-dom-nodes/isDocumentFragment":257,"./ac-dom-nodes/isDocumentType":258,"./ac-dom-nodes/isElement":259,"./ac-dom-nodes/isNode":260,"./ac-dom-nodes/isTextNode":261,"./ac-dom-nodes/remove":262,"./ac-dom-nodes/replace":263}],246:[function(c,d,b){d.exports=function a(g){var f=document.createDocumentFragment();
var h;if(g){h=document.createElement("div");h.innerHTML=g;while(h.firstChild){f.appendChild(h.firstChild)
}}return f}},{}],247:[function(d,f,c){var g=d("./helpers/isNodeType");var a=d("./helpers/nodeTypes").ELEMENT_NODE;
f.exports=function b(i,h){h=h||a;i=Array.prototype.slice.call(i);return i.filter(function(j){return g(j,h)
})}},{"./helpers/isNodeType":248,"./helpers/nodeTypes":249}],248:[function(b,c,a){var d=b("../isNode");
c.exports=function f(h,g){if(!d(h)){return false}if(typeof g==="number"){return(h.nodeType===g)
}return(g.indexOf(h.nodeType)!==-1)}},{"../isNode":260}],249:[function(b,c,a){c.exports={ELEMENT_NODE:1,TEXT_NODE:3,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11}
},{}],250:[function(f,c,h){var g=f("./nodeTypes");var b=f("./isNodeType");var j=[g.ELEMENT_NODE,g.TEXT_NODE,g.COMMENT_NODE,g.DOCUMENT_FRAGMENT_NODE];
var d=" must be an Element, TextNode, Comment, or Document Fragment";var m=[g.ELEMENT_NODE,g.TEXT_NODE,g.COMMENT_NODE];
var i=" must be an Element, TextNode, or Comment";var k=[g.ELEMENT_NODE,g.DOCUMENT_FRAGMENT_NODE];
var l=" must be an Element, or Document Fragment";var a=" must have a parentNode";
c.exports={parentNode:function(n,q,p,o){o=o||"target";if((n||q)&&!b(n,k)){throw new TypeError(p+": "+o+l)
}},childNode:function(n,q,p,o){o=o||"target";if(!n&&!q){return}if(!b(n,m)){throw new TypeError(p+": "+o+i)
}},insertNode:function(n,q,p,o){o=o||"node";if(!n&&!q){return}if(!b(n,j)){throw new TypeError(p+": "+o+d)
}},hasParentNode:function(n,p,o){o=o||"target";if(!n.parentNode){throw new TypeError(p+": "+o+a)
}}}},{"./isNodeType":248,"./nodeTypes":249}],251:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){f.insertNode(g,true,"insertAfter");f.childNode(h,true,"insertAfter");
f.hasParentNode(h,"insertAfter");if(!h.nextSibling){return h.parentNode.appendChild(g)
}return h.parentNode.insertBefore(g,h.nextSibling)}},{"./helpers/validate":250}],252:[function(c,d,a){var f=c("./helpers/validate");
d.exports=function b(g,h){f.insertNode(g,true,"insertBefore");f.childNode(h,true,"insertBefore");
f.hasParentNode(h,"insertBefore");return h.parentNode.insertBefore(g,h)}},{"./helpers/validate":250}],253:[function(c,d,b){var f=c("./helpers/validate");
d.exports=function a(g,h){f.insertNode(g,true,"insertFirstChild");f.parentNode(h,true,"insertFirstChild");
if(!h.firstChild){return h.appendChild(g)}return h.insertBefore(g,h.firstChild)
}},{"./helpers/validate":250}],254:[function(b,c,a){var d=b("./helpers/validate");
c.exports=function f(g,h){d.insertNode(g,true,"insertLastChild");d.parentNode(h,true,"insertLastChild");
return h.appendChild(g)}},{"./helpers/validate":250}],255:[function(c,d,a){var g=c("./helpers/isNodeType");
var f=c("./helpers/nodeTypes").COMMENT_NODE;d.exports=function b(h){return g(h,f)
}},{"./helpers/isNodeType":248,"./helpers/nodeTypes":249}],256:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").DOCUMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":248,"./helpers/nodeTypes":249}],257:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").DOCUMENT_FRAGMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":248,"./helpers/nodeTypes":249}],258:[function(b,c,a){var g=b("./helpers/isNodeType");
var f=b("./helpers/nodeTypes").DOCUMENT_TYPE_NODE;c.exports=function d(h){return g(h,f)
}},{"./helpers/isNodeType":248,"./helpers/nodeTypes":249}],259:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").ELEMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":248,"./helpers/nodeTypes":249}],260:[function(b,c,a){c.exports=function d(f){return !!(f&&f.nodeType)
}},{}],261:[function(c,d,a){var g=c("./helpers/isNodeType");var b=c("./helpers/nodeTypes").TEXT_NODE;
d.exports=function f(h){return g(h,b)}},{"./helpers/isNodeType":248,"./helpers/nodeTypes":249}],262:[function(c,d,b){var f=c("./helpers/validate");
d.exports=function a(g){f.childNode(g,true,"remove");if(!g.parentNode){return g
}return g.parentNode.removeChild(g)}},{"./helpers/validate":250}],263:[function(b,d,a){var f=b("./helpers/validate");
d.exports=function c(g,h){f.insertNode(g,true,"insertFirstChild","newNode");f.childNode(h,true,"insertFirstChild","oldNode");
f.hasParentNode(h,"insertFirstChild","oldNode");return h.parentNode.replaceChild(g,h)
}},{"./helpers/validate":250}],264:[function(b,c,a){c.exports=b(186)},{"./ac-shared-instance/SharedInstance":265}],265:[function(b,c,a){c.exports=b(187)
},{}],266:[function(b,c,a){c.exports=b(188)},{"./ac-mvc-cid/CID":267}],267:[function(b,c,a){c.exports=b(189)
},{"ac-shared-instance":264}],268:[function(b,c,a){c.exports=b(184)},{}],269:[function(b,c,a){c.exports=b(191)
},{"./ac-object/clone":270,"./ac-object/create":271,"./ac-object/defaults":272,"./ac-object/extend":273,"./ac-object/getPrototypeOf":274,"./ac-object/isDate":275,"./ac-object/isEmpty":276,"./ac-object/isRegExp":277,"./ac-object/toQueryParameters":278}],270:[function(b,c,a){c.exports=b(192)
},{"./extend":273}],271:[function(b,c,a){c.exports=b(174)},{}],272:[function(b,c,a){arguments[4][175][0].apply(a,arguments)
},{"./extend":273}],273:[function(b,c,a){c.exports=b(195)},{}],274:[function(b,c,a){c.exports=b(177)
},{}],275:[function(b,c,a){c.exports=b(179)},{}],276:[function(b,c,a){c.exports=b(180)
},{}],277:[function(b,c,a){c.exports=b(181)},{}],278:[function(b,c,a){c.exports=b(185)
},{qs:268}],279:[function(b,c,a){c.exports={View:b("./ac-mvc-view/View")}},{"./ac-mvc-view/View":280}],280:[function(d,b,g){var j=d("ac-dom-emitter").DOMEmitter;
var c=d("ac-mvc-cid").CID;var f=d("ac-object");var i=d("ac-dom-nodes");var k=d("ac-classlist");
function a(l){var n;var m;var o;this.options=f.defaults(this.defaultOptions,l||{});
this.cid=c.getNewCID();this.model=this.options.model;if(this.options.template){this.template=this.options.template
}n=this.options.tagName||this.tagName;m=this.options.element;o=this.options.className||this.className;
if(!m){m=document.createElement(n)}j.call(this,m);if(o){this.addClassName(o)}if(this.options.events){this.delegateEvents(this.options.events)
}}var h=a.prototype=f.create(j.prototype);h.tagName="div";h.defaultOptions={};h.getTagName=function(){return this.el.tagName.toLowerCase()
};h.appendTo=function(l){i.insertLastChild(this.el,l);return this};h.render=function(){};
h.addClassName=function(l){return this._manipulateClassName(l,"add")};h.removeClassName=function(l){return this._manipulateClassName(l,"remove")
};h._manipulateClassName=function(m,n){var l;if(typeof m==="string"){l=m.split(" ")
}else{if(typeof m==="object"&&Array.isArray(m)){l=m.slice()}else{return this}}l.unshift(this.el);
k[n].apply(this.el,l);return this};h.destroy=function(){this.emitterTrigger("destroy");
this.off();i.remove(this.el);var l;for(l in this){if(this.hasOwnProperty(l)){this[l]=null
}}};h.delegateEvents=function(m,n){n=n||this;var l,o;for(l in m){if(m.hasOwnProperty(l)){o=m[l];
if(typeof o==="string"){m[l]=this[m[l]]}}}this.on(m,n);return this};b.exports=a
},{"ac-classlist":206,"ac-dom-emitter":242,"ac-dom-nodes":245,"ac-mvc-cid":266,"ac-object":269}],281:[function(b,c,a){c.exports={View:b("./ac-video-nosupportview/NoSupportView")}
},{"./ac-video-nosupportview/NoSupportView":282}],282:[function(d,f,a){var i=d("ac-mvc-view").View;
var c=d("ac-object");var b=d("ac-string");function h(){i.apply(this,arguments)}var g=h.prototype=c.create(i.prototype);
g.className=["ac-video-nosupport"];g.defaultOptions={template:'<a onclick="s_objectID=&quot;https://www.apple.com/quicktime/download/_1&quot;;return this.s_oc?this.s_oc(e):true" href="{downloadquicktimeurl}" class="ac-video-quicktime-download"><span class="ac-video-quicktime-download-title">{downloadquicktimetitle}</span><span class="ac-video-quicktime-download-text">{downloadquicktimetext}</span><span class="ac-video-quicktime-download-button">{downloadquicktimebutton}</span></a>'};
g.render=function(){this.el.innerHTML=b.supplant(this.options.template,this.model.attributes)
};f.exports=h},{"ac-mvc-view":279,"ac-object":178,"ac-string":572}],283:[function(b,c,a){c.exports={create:b("./ac-films/factory/films")}
},{"./ac-films/factory/films":289}],284:[function(i,b,l){var p=i("ac-video-localization").localization;
var d=i("ac-video-nosupportview").View;var k=i("ac-feature");var j=i("./LegacyAnalyticsTranslator");
var h=i("ac-classlist");var q=i("ac-event-emitter").EventEmitter;var g=i("ac-object");
var n=i("./VideoSourceCollection");var c=i("./factory/player");var o=i("ac-fullscreen");
var a=i("./featureDetect/featureDetect");function f(r){q.call(this);this._currentVideo=null;
this.videoSrcCollection=new n();this.analyticsTranslator=null;this.player=null;
this.localization=null;this.noSupportView=null;this.options=g.defaults(f.defaults,r)
}var m=f.prototype=g.create(q.prototype);f.defaults={analytics:true,playerOptions:{crossorigin:"anonymous",preload:"none"}};
m.play=function(s){var r=null;if(!this.player){this.createPlayer()}if(s){r=this.videoSrcCollection.getSource(s);
if(r===this.getCurrentVideo()){this.player.addClassName("player-fullscreen");this.player.play();
return}}else{if(!this.player.getCurrentSrc()){r=this.videoSrcCollection.getSourceByIndex(0)
}else{r=this.getCurrentVideo()}}if(r){if(r.poster){this.setPoster(r.poster)}if(this.localization===null){this.ensureLocalization().then(this.play.bind(this,s))
}else{this._playVideoBySrcObj(r)}}};m.bindPlayerEvents=function(){this.player.on("enterfullscreen",this._onEnterFullscreen,this);
this.player.on("exitfullscreen",this._onExitFullscreen,this);this.player.on("durationchange",this._onPlayerSrcChange,this)
};m._onPlayerSrcChange=function(r){this.handleTextTracks(r)};m._onEnterFullscreen=function(){h.add(this.player.el,"player-fullscreen")
};m._onExitFullscreen=function(){h.remove(this.player.el,"player-fullscreen")};
m.handleTextTracks=function(u){var s;var r;var t;if(!this.player||!u.value||isNaN(u.value)||!this._currentVideo.vatResource.vatVTTSource||this._currentVideo.vatResource.vatVTTSource.length===0){return
}t={src:this._currentVideo.vatResource.vatVTTSource.pop()};s=this.player.getTextTracks();
r=this.player.findTextTrack(t);if(s&&s.models&&s.models.length>0&&r){s.models.forEach(function(v){if(r.cid===v.cid){v.hide()
}else{if(a.shouldAllowSingleTextTrack()){this.player.removeTextTrack(v)}else{v.disable()
}}}.bind(this))}};m.pause=function(){this.player.pause()};m.setSrc=function(r){return this._setNewPlayerSrc(r)
};m.getCurrentSrc=function(){return this.player.getCurrentSrc().attributes.src};
m.getCurrentVideo=function(){return this._currentVideo};m.createVideoResource=function(s,r){return this.videoSrcCollection.addSource(s,r)
};m.createPlayer=function(){this.on("novideosupport",this._onNoVideoSupport,this);
if(this.options.poster){this.options.playerOptions.poster=this.options.poster}this.player=c(this.options.playerOptions);
if(this.player){this.bindPlayerEvents();this.defaultPosterFrame=this.player.getPoster();
if(!this.analyticsTranslator&&this.options.analytics===true){this.analyticsTranslator=new j(this.player);
this.analyticsTranslator.activate()}this._applyDocumentClassnames()}return this.player
};m.loadLocalization=function(){return p.create().then(function(r){this.localization=r
}.bind(this))};m.ensureLocalization=function(){var r;if(this.localization===null){r=this.loadLocalization()
}else{r=Promise.resolve()}return r};m.createNoSupportView=function(){this.ensureLocalization().then(function(){var r=new d({model:this.localization});
r.render();this.noSupportView=r;this.trigger("novideosupport");this._onNoVideoSupport()
}.bind(this))};m.setPoster=function(r){if(r!==this.player.getPoster()){this.player.setPoster(r)
}};m._playVideoBySrcObj=function(s){var r=this.player.getCurrentSrc();if(!r||(r.attributes.src&&r.attributes.src!==s.src)){if(k.isDesktop()){this.player.once("canplaythrough",this.player.play,this.player);
this._setNewPlayerSrc(s)}else{this.player.addClassName("player-fullscreen");this._setNewPlayerSrc(s);
this.player.play()}}else{this.player.play()}};m._setNewPlayerSrc=function(s){var r=this._setPlayerSrcFromSourceObject(s,this.player);
if(r){this._currentVideo=s;if(this.options.analytics===true){this.analyticsTranslator.addSourceObject(s.id,s.cid)
}if(s.poster){this.setPoster(s.poster)}}return r};m._setPlayerSrcFromSourceObject=function(r,s){var u=null;
var t;if(s&&r.vatResource&&typeof r.vatResource.setPlayerSrc==="function"){t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
r.vatResource.setPlayerSrc(this.player,t);this.player.once("readystatechange",function(){var x=this.player.el;
var w=this.player.getMediaWidth();var v=this.player.getMediaHeight();if(w&&w!==848&&v&&v!==480){x.style.paddingBottom=(v/w*100)+"%"
}},this);r.cid=s.getCurrentSrc().cid;u=s.getCurrentSrc().attributes.src}return u
};m._applyDocumentClassnames=function(){var r;if(a.shouldPlayNativePlayer()){r="ac-player-handheld"
}if(k.isTablet()){r="ac-player-tablet"}if(k.isDesktop()){r="ac-player-desktop"}h.add(document.documentElement,r)
};m._onNoVideoSupport=function(){};b.exports=f},{"./LegacyAnalyticsTranslator":285,"./VideoSourceCollection":287,"./factory/player":290,"./featureDetect/featureDetect":292,"ac-classlist":54,"ac-feature":83,"ac-fullscreen":302,"ac-object":178,"ac-video-localization":203,"ac-video-nosupportview":281}],285:[function(b,c,a){var h=b("ac-analytics");
var g=b("ac-event-emitter").EventEmitter;var d=b("ac-dom-traversal");function i(j){this.player=j;
this.sources={};this.currentStubPlayer=null}var f=i.prototype;f.activate=function(){this.player.on("play",function(){this.setCurrentStubPlayer();
this._proxyEvent("play")},this);this.player.on("ended",function(){this._proxyEvent("ended")
},this);this.player.on("timeupdate",function(){this._proxyEvent("timeupdate")},this,this);
this.player.on("texttrackshow",function(){this._proxyEvent("captions-enabled")},this);
this.player.on("durationchange",this.setCurrentStubPlayer,this)};f.getEventData=function(){var k=false;
var j=this.player.getVisibleTextTracks();if(j&&j.models&&j.models.length>0){k=true
}return{closeCaptionsEnabled:k,currentTime:this.player.getCurrentTime(),duration:this.player.getDuration(),playerType:null,videoType:null}
};f._createObserver=function(k){var j;if(h&&h.observer&&h.observer.Video){j=new h.observer.Video(k,{mediaEventPrefix:""})
}return j};f._proxyEvent=function(j){if(this.currentStubPlayer){this.currentStubPlayer.trigger(j,this.getEventData())
}};f.setCurrentStubPlayer=function(){var j=this.getCurrentSourceObject();if(j&&j.stubPlayer){this.currentStubPlayer=j.stubPlayer
}};f.getSourceObjectByCID=function(l){var j;for(var k in this.sources){if(this.sources.hasOwnProperty(k)){if(this.sources[k].cid===l){j=this.sources[k];
break}}}return j};f.getCurrentSourceObject=function(){var j=this.player.getCurrentSrc();
var k;if(j){k=this.getSourceObjectByCID(j.cid)}return k};f.addSourceObject=function(o,q){var k;
var n;var m="data-analytics-id";var j="";var l="";var p;if(!this.sources[o]){k=d.querySelector("#"+o);
if(k){if(k.getAttribute(m)){n=k;j=k.getAttribute(m);l=o}else{n=d.querySelector("["+m+"]",k);
if(n){j=n.getAttribute(m);l=n.getAttribute("id")||""}}if(n){p=this._createStubPlayer(n,j,l);
this.sources[o]={stubPlayer:p,observer:this._createObserver(p),cid:q}}}}};f._createStubPlayer=function(l,j,k){var m=new g();
m.element=l;m.targetId=j||k||"";return m};c.exports=i},{"ac-dom-traversal":18}],286:[function(d,b,h){var m=d("ac-modal").Modal;
var i=d("ac-modal-video").ModalVideo;var f=d("ac-object");var k=d("./FilmsController");
var g=d("ac-feature");var n=d("ac-fullscreen");var l=d("ac-browser");var c=d("ac-classlist");
var o=d("ac-keyboard");var p=o.keys;function a(q){k.apply(this,arguments);this.options=f.extend(a.defaults,this.options);
this.modalVideo=null}var j=a.prototype=f.create(k.prototype);a.defaults=f.extend(k.defaults,{modalOptions:{playOnOpen:true,closeOnEnded:true}});
j.play=function(q){k.prototype.play.call(this,q);if(!this.modalVideo.modal.opened){this.openModal()
}};j.openModal=function(){this.modalVideo.open()};j.createPlayer=function(){k.prototype.createPlayer.call(this);
this._createModalVideo()};j._handleFullscreen=function(){var r=false;var s=this.modalVideo.modal;
s.removeKeyToClose(p.ESCAPE);var q=function(u){r=true};var t=function(u){if(r===true){s.close()
}r=false};o.addKeyDown(p.ESCAPE,q);o.addKeyUp(p.ESCAPE,t)};j._createModalVideo=function(){var q={playOnOpen:false,closeOnEnded:false};
if(this.player){this.modalVideo=i.create(this.player,q);this._handleFullscreen();
this._bindModalEvents()}else{this.modalVideo=new m()}this.trigger("modalready",{modal:this.modalVideo})
};j._onEnded=function(){if(this.options.modalOptions.closeOnEnded===true){this.modalVideo.close()
}};j._guaranteeVolume=function(){if(this.player&&this.player.getReadyState()>0){this.player.setVolume(1)
}else{if(this.player){this.player.once("readystatechange",function(){this.player.setVolume(1)
},this)}}};j._bindModalEvents=function(){this.modalVideo.on("close",this._onModalClose,this);
this.modalVideo.on("open",this._onModalOpen,this)};j.bindPlayerEvents=function(){k.prototype.bindPlayerEvents.call(this);
if(this.player){this.player.on("ended",this._onEnded,this)}};j._onModalClose=function(){if(!this.player){return
}this.player.setCurrentTime(0);this.pause();if(g.isTablet()){n.exitFullscreen(this.player.getMediaElement())
}};j._onModalOpen=function(){this._guaranteeVolume();if(this.options.modalOptions.playOnOpen===true){if(g.isTablet()){this.player.play()
}}};j._onEnded=function(){if(this.options.modalOptions.closeOnEnded===true){this.modalVideo.close()
}};j._onNoVideoSupport=function(){if(this.noSupportView&&this.modalVideo){this.modalVideo.appendContent(this.noSupportView.el)
}};b.exports=a},{"./FilmsController":284,"ac-browser":3,"ac-classlist":54,"ac-feature":83,"ac-fullscreen":302,"ac-keyboard":113,"ac-modal":171,"ac-modal-video":457,"ac-object":178}],287:[function(c,d,b){var a=c("./VideoSourceObject").create;
function g(){this.sources=[]}var f=g.prototype;f.addSource=function(j,i){var h=a(j,i);
if(h){this.sources.push(h);h.index=this.sources.length-1}return h};f.getSource=function(h){var i=null;
if(typeof h==="number"){i=this.getSourceByIndex(h)}else{if(typeof h==="string"){if(/^cid/.test(h)){i=this.getSourceByCid(h)
}else{i=this.getSourceById(h)}}}return i};f.getSourceByIndex=function(h){return this.sources[h]
};f.getSourceById=function(h){return this.getSourceByPropertyValue("id",h)};f.getSourceByCid=function(h){return this.getSourceByPropertyValue("cid",h)
};f.getSourceByPropertyValue=function(j,h){var i=null;this.sources.some(function(l){var k=false;
if(l[j]===h){i=l;k=true}return k});return i};d.exports=g},{"./VideoSourceObject":288}],288:[function(b,d,a){var g=b("ac-vatman");
var h=g.vatResource;var f="data-acv-poster";function c(l,i){if(typeof l!=="string"){throw new TypeError(l+" must be a string")
}var j=i.element||null;var n=null;var m=null;var k=i.posterAttribute||f;if(j){m=j.getAttribute(k);
n=j.id}return{vatResource:h.create(l),element:j,src:l,poster:m,id:n,cid:null}}d.exports={create:c}
},{"ac-vatman":584}],289:[function(d,c,i){var g=d("../FilmsController");var a=d("../ModalFilmsController");
var f=d("ac-object");var m=d("./sources");var l=d("../posters");var k=d("ac-dom-events");
var b=d("../featureDetect/featureDetect");var h={poster:null,modal:false,deepLink:true,playOnClick:true};
function j(p,n){n=f.defaults(h,n||{});var o;if(n.modal===true&&!b.shouldPlayNativePlayer()){o=new a(n)
}else{o=new g(n)}o.loadLocalization();o.createPlayer();if(o.player){m(p,o,n)}else{o.createNoSupportView();
p.forEach(function(q){k.addEventListener(q,"click",function(r){k.preventDefault(r);
o.modalVideo.open()})})}return o}c.exports=j},{"../FilmsController":284,"../ModalFilmsController":286,"../featureDetect/featureDetect":292,"../posters":293,"./sources":291,"ac-dom-events":61,"ac-object":178}],290:[function(g,f,i){var k=g("ac-vatman");
var c=g("ac-video").Player;var l=g("ac-fullscreen");var h=g("ac-dom-events");var d=g("../featureDetect/featureDetect");
function b(m){m.on("ended",function(){l.exitFullscreen(m.getMediaElement())});m.on("exitfullscreen",function(){m.setCurrentTime(0)
})}function a(m){m.on("enterfullscreen",function(){var n=m.getMediaElement();var o;
if(n.tagName.toLowerCase()!=="video"){o=m.getMediaHeight()/m.getMediaWidth();n.style.height=n.offsetWidth*o+"px"
}});m.on("exitfullscreen",function(){var n=m.getMediaElement();if(n.tagName.toLowerCase()!=="video"){n.style.height=null
}})}function j(m){m=m||{};var n=k.createPlayer(c,m);if(n){if(d.shouldPlayNativePlayer()){b(n);
n.appendTo(document.body)}else{a(n)}}return n}f.exports=j},{"../featureDetect/featureDetect":292,"ac-dom-events":61,"ac-fullscreen":302,"ac-vatman":584,"ac-video":956}],291:[function(d,c,g){var n=d("ac-router");
var p=d("ac-gesture-touchclick").TouchClick;var k=d("../windowLoad");var m=d("../posters");
var f=d("ac-vatman");var h=d("ac-dom-traversal").querySelector;var o=d("ac-browser");
var j=d("ac-feature");var l=o.name.toLowerCase();var a=(l==="safari"||l==="safari mobile");
var b=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
function i(t,s,r){var u;var q;if(r.deepLink===true){q=new n.Router({hashChange:true,pushState:false})
}t.forEach(function(y){var v;var B=y.getAttribute("href");var A=y.getAttribute("data-film-id")||y.getAttribute("id");
var z={element:y};var x;var w=B;if(!a){w=f.vatClient.getSource(B,b)}if(w!==B){y.setAttribute("href",w)
}if(!s.player){s.createPlayer()}if(B){x=s.createVideoResource(B,z);if(!x.poster){x.poster=s.defaultPosterFrame
}if(x.poster){m.loadPoster(x.poster)}if(r.deepLink===true&&x.id){q.createRoute(x.id,function(){k(function(){if(j.isTablet()){var D=s.player;
var F=D.poster;var E=D.getPoster();var C=D.getMediaElement();if(F){C.setAttribute("poster",E);
F._hide()}}s.player.setPreload("auto");s.play(x.id)})})}if(r.playOnClick===true){v=p.create(y);
v.on("click",function(){if(s.player&&s.player.getPreload()==="none"){s.player.setPreload("auto")
}s.play(A)})}}});if(r.deepLink===true){if(j.isTablet()){k(function(){window.requestAnimationFrame(function(){q.start()
})})}else{q.start()}}}c.exports=i},{"../posters":293,"../windowLoad":294,"ac-browser":3,"ac-dom-traversal":18,"ac-feature":83,"ac-gesture-touchclick":102,"ac-router":568,"ac-vatman":584}],292:[function(c,f,b){var h=c("ac-browser");
var a=c("ac-feature");var g=h.name.toLowerCase();var d=h.os.toLowerCase();f.exports={shouldPlayNativePlayer:function(){return(a.isHandheld()&&d==="ios")
},shouldAllowSingleTextTrack:function(){return(g==="safari mobile")}}},{"ac-browser":3,"ac-feature":83}],293:[function(c,d,b){function a(f){new Image().src=f
}d.exports={loadPoster:a}},{}],294:[function(c,d,b){var a=false;var g=c("ac-dom-events");
g.addEventListener(window,"load",function(){a=true});function f(h){if(a){h()}else{g.addEventListener(window,"load",h)
}}d.exports=f},{"ac-dom-events":61}],295:[function(b,c,a){c.exports=b(59)},{"./shared/getEventType":300,"./utils/addEventListener":301}],296:[function(b,c,a){c.exports=b(63)
},{"./shared/camelCasedEventTypes":297,"./shared/prefixHelper":298,"./utils/eventTypeAvailable":299}],297:[function(b,c,a){c.exports=b(64)
},{}],298:[function(b,c,a){c.exports=b(65)},{}],299:[function(b,c,a){c.exports=b(66)
},{}],300:[function(b,c,a){c.exports=b(69)},{"ac-prefixer/getEventType":296}],301:[function(b,c,a){c.exports=b(73)
},{}],302:[function(b,c,a){c.exports=b("./ac-fullscreen/fullscreen")},{"./ac-fullscreen/fullscreen":308}],303:[function(b,c,a){c.exports={STANDARD:"standard",IOS:"ios"}
},{}],304:[function(f,c,i){var h=f("ac-dom-events/addEventListener");var m=f("ac-event-emitter").EventEmitter;
var a=f("./../events/types");var b=f("./../consts/modes");var d=new m();function k(n){d.trigger(a.ENTERFULLSCREEN,n)
}function l(n){d.trigger(a.EXITFULLSCREEN,n)}function g(n){if(d.fullscreenElement()){k(n)
}else{l(n)}}function j(){h(document,"fullscreenchange",g)}j();d.fullscreenEnabled=function(n){var o=document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||("webkitCancelFullScreen" in document);
return !!(o)};d.fullscreenElement=function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.webkitCurrentFullScreenElement
};d.exitFullscreen=function(n){var o;if(typeof document.exitFullscreen==="function"){o="exitFullscreen"
}else{if(typeof document.webkitExitFullscreen==="function"){o="webkitExitFullscreen"
}else{if(typeof document.webkitCancelFullScreen==="function"){o="webkitCancelFullScreen"
}else{if(typeof document.mozCancelFullScreen==="function"){o="mozCancelFullScreen"
}}}}if(typeof document[o]==="function"){document[o].call(document)}};d.requestFullscreen=function(n){var o;
if(typeof n.requestFullscreen==="function"){o="requestFullscreen"}else{if(typeof n.webkitRequestFullscreen==="function"){o="webkitRequestFullscreen"
}else{if(typeof n.webkitRequestFullScreen==="function"){o="webkitRequestFullScreen"
}else{if(typeof n.mozRequestFullScreen==="function"){o="mozRequestFullScreen"}}}}if(typeof n[o]==="function"){n[o].call(n)
}};d.mode=b.STANDARD;c.exports=d},{"./../consts/modes":303,"./../events/types":307,"ac-dom-events/addEventListener":295}],305:[function(c,d,a){var b=c("./ios");
var f=c("./desktop");d.exports={create:function(){var g=f;if("webkitEnterFullscreen" in document.createElement("video")&&!("webkitRequestFullScreen" in document.createElement("div"))){g=b
}return g}}},{"./desktop":304,"./ios":306}],306:[function(f,d,h){var g=f("ac-dom-events/addEventListener");
var m=f("ac-event-emitter").EventEmitter;var a=f("./../events/types");var c=f("./../consts/modes");
var l;b();function b(){g(document,"webkitbeginfullscreen",k,true);g(document,"webkitendfullscreen",j,true)
}function k(n){i.trigger(a.ENTERFULLSCREEN,n)}function j(n){l=undefined;i.trigger(a.EXITFULLSCREEN,n)
}var i=new m();i.fullscreenEnabled=function(n){return !!(n.webkitSupportsFullscreen)
};i.fullscreenElement=function(){return l};i.exitFullscreen=function(n){if(n&&typeof n.webkitExitFullscreen==="function"){n.webkitExitFullscreen()
}};i.requestFullscreen=function(n){if(typeof n.webkitEnterFullscreen==="function"){n.webkitEnterFullscreen()
}};i.mode=c.IOS;d.exports=i},{"./../consts/modes":303,"./../events/types":307,"ac-dom-events/addEventListener":295}],307:[function(b,c,a){c.exports={ENTERFULLSCREEN:"enterfullscreen",EXITFULLSCREEN:"exitfullscreen"}
},{}],308:[function(c,b,d){var j=c("ac-event-emitter").EventEmitter;var h=c("./delegate/factory");
var a="Error: Element missing. ac-fullscreen requires an element to be specified";
var g=new j();var f=h.create();f.propagateTo(g);function i(){throw new Error(a)
}g.requestFullscreen=function(k){if(!k){i()}return f.requestFullscreen(k)};g.fullscreenEnabled=function(k){if(!k){i()
}return f.fullscreenEnabled(k)};g.fullscreenElement=function(){return f.fullscreenElement()
};g.exitFullscreen=function(k){if(!k){i()}return f.exitFullscreen(k)};g.getMode=function(){return f.mode
};b.exports=g},{"./delegate/factory":305}],309:[function(b,c,a){arguments[4][3][0].apply(a,arguments)
},{"./ac-browser/BrowserData":310,"./ac-browser/IE":311}],310:[function(b,c,a){c.exports=b(77)
},{"./data":312}],311:[function(b,c,a){c.exports=b(5)},{}],312:[function(b,c,a){c.exports=b(79)
},{}],313:[function(b,c,a){c.exports=b(117)},{"./ac-classlist/add":314,"./ac-classlist/contains":315,"./ac-classlist/remove":317,"./ac-classlist/toggle":318}],314:[function(b,c,a){c.exports=b(118)
},{"./helpers/className":316}],315:[function(b,c,a){c.exports=b(119)},{"./helpers/className":316}],316:[function(b,c,a){c.exports=b(120)
},{}],317:[function(b,c,a){c.exports=b(121)},{"./helpers/className":316}],318:[function(b,c,a){c.exports=b(122)
},{"./helpers/className":316}],319:[function(b,c,a){c.exports=b(80)},{"./ac-prefixer/Prefixer":320}],320:[function(b,c,a){c.exports=b(81)
},{"./Prefixer/camelCasedEvents":321}],321:[function(b,c,a){c.exports=b(82)},{}],322:[function(b,c,a){c.exports=b(215)
},{"./ac-dom-events/addEventListener":323,"./ac-dom-events/dispatchEvent":324,"./ac-dom-events/preventDefault":325,"./ac-dom-events/removeEventListener":326,"./ac-dom-events/stop":327,"./ac-dom-events/stopPropagation":328,"./ac-dom-events/target":329}],323:[function(b,c,a){c.exports=b(108)
},{"ac-prefixer":319}],324:[function(b,c,a){c.exports=b(109)},{}],325:[function(b,c,a){c.exports=b(67)
},{}],326:[function(b,c,a){c.exports=b(110)},{"ac-prefixer":319}],327:[function(b,c,a){c.exports=b(70)
},{"./preventDefault":325,"./stopPropagation":328}],328:[function(b,c,a){c.exports=b(71)
},{}],329:[function(b,c,a){c.exports=b(222)},{}],330:[function(b,c,a){arguments[4][223][0].apply(a,arguments)
},{"./ac-dom-traversal/ancestor":331,"./ac-dom-traversal/ancestors":332,"./ac-dom-traversal/children":333,"./ac-dom-traversal/filterBySelector":334,"./ac-dom-traversal/firstChild":335,"./ac-dom-traversal/lastChild":338,"./ac-dom-traversal/matchesSelector":339,"./ac-dom-traversal/nextSibling":340,"./ac-dom-traversal/nextSiblings":341,"./ac-dom-traversal/previousSibling":342,"./ac-dom-traversal/previousSiblings":343,"./ac-dom-traversal/querySelector":344,"./ac-dom-traversal/querySelectorAll":345,"./ac-dom-traversal/shims/ie":346,"./ac-dom-traversal/siblings":347}],331:[function(b,c,a){arguments[4][224][0].apply(a,arguments)
},{"./helpers/validate":337,"./matchesSelector":339,"ac-dom-nodes":352}],332:[function(b,c,a){arguments[4][225][0].apply(a,arguments)
},{"./helpers/validate":337,"./matchesSelector":339,"ac-dom-nodes":352}],333:[function(b,c,a){arguments[4][226][0].apply(a,arguments)
},{"./filterBySelector":334,"./helpers/validate":337,"ac-dom-nodes":352}],334:[function(b,c,a){arguments[4][227][0].apply(a,arguments)
},{"./helpers/validate":337,"./matchesSelector":339}],335:[function(b,c,a){arguments[4][228][0].apply(a,arguments)
},{"./children":333,"./helpers/validate":337}],336:[function(b,c,a){c.exports=b(229)
},{}],337:[function(b,c,a){arguments[4][230][0].apply(a,arguments)},{"ac-dom-nodes":352}],338:[function(b,c,a){arguments[4][231][0].apply(a,arguments)
},{"./children":333,"./helpers/validate":337}],339:[function(b,c,a){arguments[4][232][0].apply(a,arguments)
},{"./helpers/nativeMatches":336,"./helpers/validate":337,"ac-dom-nodes":352}],340:[function(b,c,a){arguments[4][233][0].apply(a,arguments)
},{"./helpers/validate":337,"./matchesSelector":339,"ac-dom-nodes":352}],341:[function(b,c,a){arguments[4][234][0].apply(a,arguments)
},{"./helpers/validate":337,"./matchesSelector":339,"ac-dom-nodes":352}],342:[function(b,c,a){arguments[4][235][0].apply(a,arguments)
},{"./helpers/validate":337,"./matchesSelector":339,"ac-dom-nodes":352}],343:[function(b,c,a){arguments[4][236][0].apply(a,arguments)
},{"./helpers/validate":337,"./matchesSelector":339,"ac-dom-nodes":352}],344:[function(b,c,a){arguments[4][237][0].apply(a,arguments)
},{"./helpers/validate":337}],345:[function(b,c,a){arguments[4][238][0].apply(a,arguments)
},{"./helpers/validate":337}],346:[function(b,c,a){arguments[4][239][0].apply(a,arguments)
},{"../helpers/nativeMatches":336,"../helpers/validate":337,"../vendor/sizzle/sizzle":348,"ac-dom-nodes":352}],347:[function(b,c,a){arguments[4][240][0].apply(a,arguments)
},{"./children":333,"./helpers/validate":337}],348:[function(b,c,a){c.exports=b(46)
},{}],349:[function(b,c,a){arguments[4][242][0].apply(a,arguments)},{"./ac-dom-emitter/DOMEmitter":350}],350:[function(c,b,d){var f;
var k=c("ac-event-emitter").EventEmitter,j=c("./DOMEmitterEvent"),g=c("ac-dom-events"),a=c("ac-dom-traversal");
var i="dom-emitter";function h(l){if(l===null){return}this.el=l;this._bindings={};
this._delegateFuncs={};this._eventEmitter=new k()}f=h.prototype;f.on=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._on);
return this};f.once=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._once);
return this};f.off=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._off);
return this};f.has=function(l,q,p,n){var o,r;if(typeof q==="string"){o=q;r=p}else{r=q;
n=p}if(o){var m=this._getDelegateFuncBindingIdx(l,o,r,n,true);if(m>-1){return true
}return false}if(this._eventEmitter&&this._eventEmitter.has.apply(this._eventEmitter,arguments)){return true
}return false};f.trigger=function(n,m,o,s){n=this._parseEventNames(n);n=this._cleanStringData(n);
var q,r,p,l=n.length;if(typeof m==="string"){q=this._cleanStringData(m);r=o}else{r=m;
s=o}for(p=0;p<l;p++){this._triggerDOMEvents(n[p],r,q)}return this};f.emitterTrigger=function(m,o,p){m=this._parseEventNames(m);
m=this._cleanStringData(m);o=new j(o,this);var n,l=m.length;for(n=0;n<l;n++){this._eventEmitter.trigger(m[n],o,p)
}return this};f.propagateTo=function(l,m){this._eventEmitter.propagateTo(l,m);return this
};f.stopPropagatingTo=function(l){this._eventEmitter.stopPropagatingTo(l);return this
};f.stopImmediatePropagation=function(){this._eventEmitter.stopImmediatePropagation();
return this};f.destroy=function(){this._triggerInternalEvent("willdestroy");this.off();
this.el=this._eventEmitter=this._bindings=this._delegateFuncs=null};f._parseEventNames=function(l){if(!l){return[l]
}return l.split(" ")};f._onListenerEvent=function(m,l){this.emitterTrigger(m,l,false)
};f._setListener=function(l){this._bindings[l]=this._onListenerEvent.bind(this,l);
g.addEventListener(this.el,l,this._bindings[l])};f._removeListener=function(l){g.removeEventListener(this.el,l,this._bindings[l]);
this._bindings[l]=null};f._triggerInternalEvent=function(l,m){this.emitterTrigger(i+":"+l,m)
};f._normalizeArgumentsAndCall=function(l,n){var r={};if(l.length===0){n.call(this,r);
return}if(typeof l[0]==="string"||l[0]===null){l=this._cleanStringData(l);r.events=l[0];
if(typeof l[1]==="string"){r.delegateQuery=l[1];r.callback=l[2];r.context=l[3]}else{r.callback=l[1];
r.context=l[2]}n.call(this,r);return}var m,p,q=":",o=l[0];for(m in o){if(o.hasOwnProperty(m)){r={};
p=this._cleanStringData(m.split(q));r.events=p[0];r.delegateQuery=p[1];r.callback=o[m];
r.context=l[1];n.call(this,r)}}};f._registerDelegateFunc=function(n,p,q,l,o){var m=this._delegateFunc.bind(this,n,p,q,o);
this._delegateFuncs[p]=this._delegateFuncs[p]||{};this._delegateFuncs[p][n]=this._delegateFuncs[p][n]||[];
this._delegateFuncs[p][n].push({func:l,context:o,delegateFunc:m});return m};f._cleanStringData=function(o){var n=false;
if(typeof o==="string"){o=[o];n=true}var m=[],q,s,r,p,l=o.length;for(q=0;q<l;q++){s=o[q];
if(typeof s==="string"){if(s===""||s===" "){continue}r=s.length;while(s[0]===" "){s=s.slice(1,r);
r--}while(s[r-1]===" "){s=s.slice(0,r-1);r--}}m.push(s)}if(n){return m[0]}return m
};f._unregisterDelegateFunc=function(n,q,l,p){if(!this._delegateFuncs[q]||!this._delegateFuncs[q][n]){return
}var o=this._getDelegateFuncBindingIdx(n,q,l,p),m;if(o>-1){m=this._delegateFuncs[q][n][o].delegateFunc;
this._delegateFuncs[q][n].splice(o,1);if(this._delegateFuncs[q][n].length===0){this._delegateFuncs[q][n]=null
}}return m};f._unregisterDelegateFuncs=function(l,n){if(!this._delegateFuncs[n]){return
}if(l!==null&&!this._delegateFuncs[n][l]){return}if(l===null){var m;for(m in this._delegateFuncs[n]){if(this._delegateFuncs[n].hasOwnProperty(m)){this._unbindDelegateFunc(m,n)
}}return}this._unbindDelegateFunc(l,n)};f._unbindDelegateFunc=function(l,n){var o,p,m=0;
while(this._delegateFuncs[n][l]&&this._delegateFuncs[n][l][m]){o=this._delegateFuncs[n][l][m];
p=this._delegateFuncs[n][l][m].length;this._off({events:l,delegateQuery:n,callback:o.func,context:o.context});
if(this._delegateFuncs[n][l]&&p===this._delegateFuncs[n][l].length){m++}}o=p=null
};f._unregisterDelegateFuncsByEvent=function(l){var m;for(m in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(m)){this._unregisterDelegateFuncs(l,m)
}}};f._delegateFunc=function(l,p,r,n,q){if(this._targetHasDelegateAncestor(q.target,p)){var m=Array.prototype.slice.call(arguments,0),o=m.slice(4,m.length);
n=n||window;if(typeof q.detail==="object"){o[0]=q.detail}r.apply(n,o)}};f._targetHasDelegateAncestor=function(n,m){var l=n;
while(l&&l!==this.el&&l!==document.documentElement){if(a.matchesSelector(l,m)){return true
}l=l.parentNode}return false};f._on=function(p){var m=p.events,q=p.callback,o=p.delegateQuery,n=p.context,l=p.unboundCallback||q;
m=this._parseEventNames(m);m.forEach(function(v,r,t,u,s){if(!this.has(s)){this._setListener(s)
}if(typeof u==="string"){v=this._registerDelegateFunc(s,u,v,r,t)}this._triggerInternalEvent("willon",{evt:s,callback:v,context:t,delegateQuery:u});
this._eventEmitter.on(s,v,t);this._triggerInternalEvent("didon",{evt:s,callback:v,context:t,delegateQuery:u})
}.bind(this,q,l,n,o));m=q=l=o=n=null};f._off=function(q){var m=q.events,r=q.callback,p=q.delegateQuery,o=q.context,l=q.unboundCallback||r;
if(typeof m==="undefined"){this._eventEmitter.off();var n;for(n in this._bindings){if(this._bindings.hasOwnProperty(n)){this._removeListener(n)
}}for(n in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(n)){this._delegateFuncs[n]=null
}}return}m=this._parseEventNames(m);m.forEach(function(w,s,u,v,t){if(typeof v==="string"&&typeof s==="function"){w=this._unregisterDelegateFunc(t,v,s,u);
if(!w){return}}if(typeof v==="string"&&typeof w==="undefined"){this._unregisterDelegateFuncs(t,v);
return}if(typeof t==="string"&&typeof w==="undefined"){this._unregisterDelegateFuncsByEvent(t);
if(typeof v==="string"){return}}this._triggerInternalEvent("willoff",{evt:t,callback:w,context:u,delegateQuery:v});
this._eventEmitter.off(t,w,u);this._triggerInternalEvent("didoff",{evt:t,callback:w,context:u,delegateQuery:v});
if(!this.has(t)){this._removeListener(t)}}.bind(this,r,l,o,p));m=r=l=p=o=null};
f._once=function(o){var l=o.events,p=o.callback,n=o.delegateQuery,m=o.context;l=this._parseEventNames(l);
l.forEach(function(t,r,s,q){if(typeof s==="string"){return this._handleDelegateOnce(q,t,r,s)
}if(!this.has(q)){this._setListener(q)}this._triggerInternalEvent("willonce",{evt:q,callback:t,context:r,delegateQuery:s});
this._eventEmitter.once.call(this,q,t,r);this._triggerInternalEvent("didonce",{evt:q,callback:t,context:r,delegateQuery:s})
}.bind(this,p,m,n));l=p=n=m=null};f._handleDelegateOnce=function(l,o,m,n){this._triggerInternalEvent("willonce",{evt:l,callback:o,context:m,delegateQuery:n});
this._on({events:l,context:m,delegateQuery:n,callback:this._getDelegateOnceCallback.bind(this,l,o,m,n),unboundCallback:o});
this._triggerInternalEvent("didonce",{evt:l,callback:o,context:m,delegateQuery:n});
return this};f._getDelegateOnceCallback=function(l,q,n,p){var m=Array.prototype.slice.call(arguments,0),o=m.slice(4,m.length);
q.apply(n,o);this._off({events:l,delegateQuery:p,callback:q,context:n})};f._getDelegateFuncBindingIdx=function(s,p,n,l,t){var r=-1;
if(this._delegateFuncs[p]&&this._delegateFuncs[p][s]){var o,m,q=this._delegateFuncs[p][s].length;
for(o=0;o<q;o++){m=this._delegateFuncs[p][s][o];if(t&&typeof n==="undefined"){n=m.func
}if(m.func===n&&m.context===l){r=o;break}}}return r};f._triggerDOMEvents=function(n,q,p){var m=[this.el];
if(p){m=a.querySelectorAll(p,this.el)}var o,r,l=m.length;for(o=0;o<l;o++){g.dispatchEvent(m[o],n,{bubbles:true,cancelable:true,detail:q})
}};b.exports=h},{"./DOMEmitterEvent":351,"ac-dom-events":322,"ac-dom-traversal":330}],351:[function(b,c,a){var f=b("ac-dom-events");
var d;var g=function(i,h){this._domEmitter=h;this._originalTarget=f.target(i);this.originalEvent=i||{};
this.target=this._originalTarget||this._domEmitter.el;this.currentTarget=this._domEmitter.el;
this.timeStamp=this.originalEvent.timeStamp||Date.now();if(this._isDOMEvent(this.originalEvent)){if(typeof this.originalEvent.detail==="object"){this.data=this.originalEvent.detail
}}else{if(i){this.data=this.originalEvent;this.originalEvent={}}}};d=g.prototype;
d.preventDefault=function(){f.preventDefault(this.originalEvent)};d.stopPropagation=function(){f.stopPropagation(this.originalEvent)
};d.stopImmediatePropagation=function(){if(this.originalEvent.stopImmediatePropagation){this.originalEvent.stopImmediatePropagation()
}this._domEmitter.stopImmediatePropagation()};d._isDOMEvent=function(h){if(this._originalTarget||(document.createEvent!=="undefined"&&typeof CustomEvent!=="undefined"&&h instanceof CustomEvent)){return true
}return false};c.exports=g},{"ac-dom-events":322}],352:[function(d,f,c){var b=d("./ac-dom-nodes/helpers/nodeTypes");
var g;var a={createDocumentFragment:d("./ac-dom-nodes/createDocumentFragment"),filterByNodeType:d("./ac-dom-nodes/filterByNodeType"),insertAfter:d("./ac-dom-nodes/insertAfter"),insertBefore:d("./ac-dom-nodes/insertBefore"),insertFirstChild:d("./ac-dom-nodes/insertFirstChild"),insertLastChild:d("./ac-dom-nodes/insertLastChild"),isComment:d("./ac-dom-nodes/isComment"),isDocument:d("./ac-dom-nodes/isDocument"),isDocumentFragment:d("./ac-dom-nodes/isDocumentFragment"),isDocumentType:d("./ac-dom-nodes/isDocumentType"),isElement:d("./ac-dom-nodes/isElement"),isNode:d("./ac-dom-nodes/isNode"),isNodeList:d("./ac-dom-nodes/isNodeList"),isTextNode:d("./ac-dom-nodes/isTextNode"),remove:d("./ac-dom-nodes/remove"),replace:d("./ac-dom-nodes/replace")};
for(g in b){a[g]=b[g]}f.exports=a},{"./ac-dom-nodes/createDocumentFragment":353,"./ac-dom-nodes/filterByNodeType":354,"./ac-dom-nodes/helpers/nodeTypes":356,"./ac-dom-nodes/insertAfter":358,"./ac-dom-nodes/insertBefore":359,"./ac-dom-nodes/insertFirstChild":360,"./ac-dom-nodes/insertLastChild":361,"./ac-dom-nodes/isComment":362,"./ac-dom-nodes/isDocument":363,"./ac-dom-nodes/isDocumentFragment":364,"./ac-dom-nodes/isDocumentType":365,"./ac-dom-nodes/isElement":366,"./ac-dom-nodes/isNode":367,"./ac-dom-nodes/isNodeList":368,"./ac-dom-nodes/isTextNode":369,"./ac-dom-nodes/remove":370,"./ac-dom-nodes/replace":371}],353:[function(b,c,a){c.exports=b(246)
},{}],354:[function(b,c,a){arguments[4][247][0].apply(a,arguments)},{"./helpers/isNodeType":355,"./helpers/nodeTypes":356}],355:[function(b,c,a){arguments[4][248][0].apply(a,arguments)
},{"../isNode":367}],356:[function(b,c,a){c.exports=b(249)},{}],357:[function(b,c,a){arguments[4][250][0].apply(a,arguments)
},{"./isNodeType":355,"./nodeTypes":356}],358:[function(b,c,a){c.exports=b(251)
},{"./helpers/validate":357}],359:[function(b,c,a){c.exports=b(252)},{"./helpers/validate":357}],360:[function(b,c,a){c.exports=b(253)
},{"./helpers/validate":357}],361:[function(b,c,a){c.exports=b(254)},{"./helpers/validate":357}],362:[function(c,d,a){var g=c("./helpers/isNodeType");
var f=c("./helpers/nodeTypes").COMMENT_NODE;d.exports=function b(h){return g(h,f)
}},{"./helpers/isNodeType":355,"./helpers/nodeTypes":356}],363:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").DOCUMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":355,"./helpers/nodeTypes":356}],364:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").DOCUMENT_FRAGMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":355,"./helpers/nodeTypes":356}],365:[function(b,c,a){var g=b("./helpers/isNodeType");
var f=b("./helpers/nodeTypes").DOCUMENT_TYPE_NODE;c.exports=function d(h){return g(h,f)
}},{"./helpers/isNodeType":355,"./helpers/nodeTypes":356}],366:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").ELEMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":355,"./helpers/nodeTypes":356}],367:[function(b,c,a){c.exports=b(34)
},{}],368:[function(b,c,a){c.exports=b(155)},{}],369:[function(c,d,a){var g=c("./helpers/isNodeType");
var b=c("./helpers/nodeTypes").TEXT_NODE;d.exports=function f(h){return g(h,b)}
},{"./helpers/isNodeType":355,"./helpers/nodeTypes":356}],370:[function(b,c,a){c.exports=b(262)
},{"./helpers/validate":357}],371:[function(b,c,a){c.exports=b(263)},{"./helpers/validate":357}],372:[function(b,c,a){c.exports=b(80)
},{"./ac-prefixer/Prefixer":373}],373:[function(b,c,a){c.exports=b(81)},{"./Prefixer/camelCasedEvents":374}],374:[function(b,c,a){c.exports=b(82)
},{}],375:[function(b,c,a){c.exports=b(165)},{"./ac-dom-styles/getStyle":376,"./ac-dom-styles/setStyle":379}],376:[function(b,c,a){c.exports=b(166)
},{"./shim/getComputedStyle":380,"ac-prefixer":372}],377:[function(b,c,a){c.exports=b(167)
},{}],378:[function(b,c,a){c.exports=b(168)},{}],379:[function(b,c,a){c.exports=b(169)
},{"./helpers/combinePartialProperties":377,"./helpers/cssToObject":378,"ac-prefixer":372}],380:[function(b,c,a){c.exports=b(170)
},{}],381:[function(b,c,a){arguments[4][223][0].apply(a,arguments)},{"./ac-dom-traversal/ancestor":382,"./ac-dom-traversal/ancestors":383,"./ac-dom-traversal/children":384,"./ac-dom-traversal/filterBySelector":385,"./ac-dom-traversal/firstChild":386,"./ac-dom-traversal/lastChild":389,"./ac-dom-traversal/matchesSelector":390,"./ac-dom-traversal/nextSibling":391,"./ac-dom-traversal/nextSiblings":392,"./ac-dom-traversal/previousSibling":393,"./ac-dom-traversal/previousSiblings":394,"./ac-dom-traversal/querySelector":395,"./ac-dom-traversal/querySelectorAll":396,"./ac-dom-traversal/shims/ie":397,"./ac-dom-traversal/siblings":398}],382:[function(d,g,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");g.exports=function f(k,j,i){h.childNode(k,true,"ancestors");
h.selector(j,false,"ancestors");if(i&&a.isElement(k)&&(!j||b(k,j))){return k}if(k!==document.body){while((k=k.parentNode)&&a.isElement(k)){if(!j||b(k,j)){return k
}if(k===document.body){break}}}return null}},{"./helpers/validate":388,"./matchesSelector":390,"ac-dom-nodes":352}],383:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(l,j,i){var k=[];
h.childNode(l,true,"ancestors");h.selector(j,false,"ancestors");if(i&&a.isElement(l)&&(!j||b(l,j))){k.push(l)
}if(l!==document.body){while((l=l.parentNode)&&a.isElement(l)){if(!j||b(l,j)){k.push(l)
}if(l===document.body){break}}}return k}},{"./helpers/validate":388,"./matchesSelector":390,"ac-dom-nodes":352}],384:[function(b,c,a){arguments[4][226][0].apply(a,arguments)
},{"./filterBySelector":385,"./helpers/validate":388,"ac-dom-nodes":352}],385:[function(b,c,a){arguments[4][227][0].apply(a,arguments)
},{"./helpers/validate":388,"./matchesSelector":390}],386:[function(b,c,a){arguments[4][228][0].apply(a,arguments)
},{"./children":384,"./helpers/validate":388}],387:[function(b,c,a){c.exports=b(229)
},{}],388:[function(b,c,a){arguments[4][230][0].apply(a,arguments)},{"ac-dom-nodes":352}],389:[function(b,c,a){arguments[4][231][0].apply(a,arguments)
},{"./children":384,"./helpers/validate":388}],390:[function(f,g,d){var b=f("ac-dom-nodes");
var a=f("./helpers/nativeMatches");var i=f("./helpers/validate");var h=f("./vendor/sizzle/sizzle");
g.exports=function c(k,j){i.selector(j,true,"matchesSelector");if(!b.isElement(k)){return false
}if(!a){return h.matchesSelector(k,j)}return a.call(k,j)}},{"./helpers/nativeMatches":387,"./helpers/validate":388,"./vendor/sizzle/sizzle":399,"ac-dom-nodes":352}],391:[function(b,c,a){arguments[4][233][0].apply(a,arguments)
},{"./helpers/validate":388,"./matchesSelector":390,"ac-dom-nodes":352}],392:[function(b,c,a){arguments[4][234][0].apply(a,arguments)
},{"./helpers/validate":388,"./matchesSelector":390,"ac-dom-nodes":352}],393:[function(b,c,a){arguments[4][235][0].apply(a,arguments)
},{"./helpers/validate":388,"./matchesSelector":390,"ac-dom-nodes":352}],394:[function(b,c,a){arguments[4][236][0].apply(a,arguments)
},{"./helpers/validate":388,"./matchesSelector":390,"ac-dom-nodes":352}],395:[function(b,c,a){arguments[4][237][0].apply(a,arguments)
},{"./helpers/validate":388}],396:[function(b,c,a){arguments[4][238][0].apply(a,arguments)
},{"./helpers/validate":388}],397:[function(c,d,b){var f=c("../vendor/sizzle/sizzle");
var a=c("ac-dom-nodes");var g=c("../helpers/validate");d.exports=function(i,h){if(h||!("querySelectorAll" in document)){i.querySelectorAll=function(j,l){var k;
var m;l=l||document;g.parentNode(l,true,"querySelectorAll","context");g.selector(j,true,"querySelectorAll");
if(a.isDocumentFragment(l)){k=i.children(l);m=[];k.forEach(function(o){var n;if(f.matchesSelector(o,j)){m.push(o)
}n=f(j,o);if(n.length){m=m.concat(n)}});return m}return f(j,l)};i.querySelector=function(k,l){var j;
l=l||document;g.parentNode(l,true,"querySelector","context");g.selector(k,true,"querySelector");
j=i.querySelectorAll(k,l);return j.length?j[0]:null}}}},{"../helpers/validate":388,"../vendor/sizzle/sizzle":399,"ac-dom-nodes":352}],398:[function(b,c,a){arguments[4][240][0].apply(a,arguments)
},{"./children":384,"./helpers/validate":388}],399:[function(b,c,a){c.exports=b(46)
},{}],400:[function(b,c,a){c.exports=b(80)},{"./ac-prefixer/Prefixer":401}],401:[function(b,c,a){c.exports=b(81)
},{"./Prefixer/camelCasedEvents":402}],402:[function(b,c,a){c.exports=b(82)},{}],403:[function(b,c,a){c.exports={canvasAvailable:b("./ac-feature/canvasAvailable"),continuousScrollEventsAvailable:b("./ac-feature/continuousScrollEventsAvailable"),cookiesAvailable:b("./ac-feature/cookiesAvailable"),cssLinearGradientAvailable:b("./ac-feature/cssLinearGradientAvailable"),cssPropertyAvailable:b("./ac-feature/cssPropertyAvailable"),isDesktop:b("./ac-feature/isDesktop"),isHandheld:b("./ac-feature/isHandheld"),isRetina:b("./ac-feature/isRetina"),isTablet:b("./ac-feature/isTablet"),localStorageAvailable:b("./ac-feature/localStorageAvailable"),sessionStorageAvailable:b("./ac-feature/sessionStorageAvailable"),svgAvailable:b("./ac-feature/svgAvailable"),threeDTransformsAvailable:b("./ac-feature/threeDTransformsAvailable"),touchAvailable:b("./ac-feature/touchAvailable")}
},{"./ac-feature/canvasAvailable":404,"./ac-feature/continuousScrollEventsAvailable":405,"./ac-feature/cookiesAvailable":406,"./ac-feature/cssLinearGradientAvailable":407,"./ac-feature/cssPropertyAvailable":408,"./ac-feature/isDesktop":409,"./ac-feature/isHandheld":410,"./ac-feature/isRetina":411,"./ac-feature/isTablet":412,"./ac-feature/localStorageAvailable":413,"./ac-feature/sessionStorageAvailable":414,"./ac-feature/svgAvailable":415,"./ac-feature/threeDTransformsAvailable":416,"./ac-feature/touchAvailable":417}],404:[function(b,c,a){var f=null;
c.exports=function d(){var g;if(f===null){g=document.createElement("canvas");f=!!(typeof g.getContext==="function"&&g.getContext("2d"))
}return f}},{}],405:[function(c,d,b){var h=c("ac-browser");var a=c("./touchAvailable");
var f=null;d.exports=function g(){if(f===null){f=(!a()||(h.os==="iOS"&&h.version>=8)||h.name==="Chrome")
}return f}},{"./touchAvailable":417,"ac-browser":309}],406:[function(d,f,c){var a=Object.prototype.hasOwnProperty;
var g=null;f.exports=function b(){if(g===null){g=false;try{if("cookie" in document&&!!navigator.cookieEnabled){document.cookie="ac_feature_cookie=1";
g=(document.cookie.indexOf("ac_feature_cookie")!==-1);document.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}}catch(h){}}return g}},{}],407:[function(d,f,c){var a=d("./cssPropertyAvailable");
var g=null;f.exports=function b(){var h;if(g===null){h=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
g=h.some(function(i){return a("background-image",i)})}return g}},{"./cssPropertyAvailable":408}],408:[function(c,d,b){var f=c("ac-prefixer");
d.exports=function a(h,g){if(g){return !!f.getStyleValue(h,g)}else{return !!f.getStyleProperty(h)
}}},{"ac-prefixer":400}],409:[function(f,g,c){var b=f("./touchAvailable");var a=null;
g.exports=function d(){if(a===null){a=(!b()&&!window.orientation)}return a}},{"./touchAvailable":417}],410:[function(g,h,d){var f=g("./isDesktop");
var b=g("./isTablet");var a=null;h.exports=function c(){if(a===null){a=(!f()&&!b())
}return a}},{"./isDesktop":409,"./isTablet":412}],411:[function(b,c,a){c.exports=function d(){var f=["min-device-pixel-ratio:1.5","-webkit-min-device-pixel-ratio:1.5","min-resolution:1.5dppx","min-resolution:144dpi","min--moz-device-pixel-ratio:1.5"];
var g;if(window.devicePixelRatio!==undefined){if(window.devicePixelRatio>=1.5){return true
}}else{for(g=0;g<f.length;g+=1){if(window.matchMedia("("+f[g]+")").matches===true){return true
}}}return false}},{}],412:[function(f,g,c){var d=f("./isDesktop");var b=null;var h=function(){if(typeof window.orientation==="undefined"){return window.screen.width
}return window.screen.width<window.screen.height?window.screen.width:window.screen.height
};g.exports=function a(){if(b===null){b=(!d()&&h()>=600)}return b}},{"./isDesktop":409}],413:[function(c,d,a){var f=null;
d.exports=function b(){if(f===null){f=false;try{f=!!(window.localStorage&&window.localStorage.non_existent!==null)
}catch(g){}}return f}},{}],414:[function(c,d,b){var f=null;d.exports=function a(){if(f===null){try{if(typeof window.sessionStorage!=="undefined"&&typeof window.sessionStorage.setItem==="function"){window.sessionStorage.setItem("ac_browser_detect","test");
f=true;window.sessionStorage.removeItem("ac_browser_detect","test")}else{f=false
}}catch(g){f=false}}return f}},{}],415:[function(c,d,b){var f=null;d.exports=function a(){if(f===null){f=document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}return f}},{}],416:[function(c,d,b){var a=c("./cssPropertyAvailable");var g=null;
d.exports=function f(){if(g===null){g=(a("perspective","1px")&&a("transform","translateZ(0)"))
}return g}},{"./cssPropertyAvailable":408}],417:[function(c,d,b){var f=null;d.exports=function a(){if(f===null){f=!!(("ontouchstart" in window)||window.DocumentTouch&&document instanceof window.DocumentTouch)
}return f}},{}],418:[function(b,c,a){c.exports=b(80)},{"./ac-prefixer/Prefixer":419}],419:[function(b,c,a){c.exports=b(81)
},{"./Prefixer/camelCasedEvents":420}],420:[function(b,c,a){c.exports=b(82)},{}],421:[function(b,c,a){c.exports=b(107)
},{"./ac-dom-events/addEventListener":422,"./ac-dom-events/dispatchEvent":423,"./ac-dom-events/removeEventListener":424,"./ac-dom-events/stop":425,"./ac-dom-events/target":426}],422:[function(b,c,a){c.exports=b(108)
},{"ac-prefixer":418}],423:[function(b,c,a){c.exports=b(109)},{}],424:[function(b,c,a){c.exports=b(110)
},{"ac-prefixer":418}],425:[function(b,c,a){c.exports=b(111)},{}],426:[function(b,c,a){c.exports=b(112)
},{}],427:[function(b,c,a){c.exports=b(113)},{"./ac-keyboard/Keyboard":429,"./ac-keyboard/keymap":430}],428:[function(b,c,a){c.exports=b(114)
},{}],429:[function(b,c,a){c.exports=b(115)},{"./KeyEvent":428,"./keymap":430,"ac-dom-events":421}],430:[function(b,c,a){c.exports=b(116)
},{}],431:[function(b,c,a){c.exports=b(173)},{"./extend":434,"ac-polyfills/Array/isArray":440}],432:[function(b,c,a){c.exports=b(174)
},{}],433:[function(b,c,a){c.exports=b(175)},{"./extend":434}],434:[function(b,c,a){c.exports=b(176)
},{"ac-polyfills/Array/prototype.forEach":441}],435:[function(b,c,a){c.exports=b(177)
},{}],436:[function(b,c,a){c.exports=b(178)},{"./clone":431,"./create":432,"./defaults":433,"./extend":434,"./getPrototypeOf":435,"./isDate":437,"./isEmpty":438,"./isRegExp":439,"./toQueryParameters":443}],437:[function(b,c,a){c.exports=b(179)
},{}],438:[function(b,c,a){c.exports=b(180)},{}],439:[function(b,c,a){c.exports=b(181)
},{}],440:[function(b,c,a){c.exports=b(182)},{}],441:[function(b,c,a){c.exports=b(36)
},{}],442:[function(b,c,a){c.exports=b(184)},{}],443:[function(b,c,a){c.exports=b(185)
},{qs:442}],444:[function(b,c,a){arguments[4][171][0].apply(a,arguments)},{"./ac-modal/Modal":445}],445:[function(b,c,a){arguments[4][172][0].apply(a,arguments)
},{"ac-classlist":313,"ac-dom-events":421,"ac-dom-nodes":352,"ac-dom-styles":375,"ac-dom-traversal":381,"ac-keyboard":427,"ac-object":436}],446:[function(b,c,a){c.exports=b(184)
},{}],447:[function(b,c,a){c.exports=b(191)},{"./ac-object/clone":448,"./ac-object/create":449,"./ac-object/defaults":450,"./ac-object/extend":451,"./ac-object/getPrototypeOf":452,"./ac-object/isDate":453,"./ac-object/isEmpty":454,"./ac-object/isRegExp":455,"./ac-object/toQueryParameters":456}],448:[function(b,c,a){c.exports=b(192)
},{"./extend":451}],449:[function(b,c,a){c.exports=b(174)},{}],450:[function(b,c,a){arguments[4][175][0].apply(a,arguments)
},{"./extend":451}],451:[function(b,c,a){c.exports=b(195)},{}],452:[function(b,c,a){c.exports=b(177)
},{}],453:[function(b,c,a){c.exports=b(179)},{}],454:[function(b,c,a){c.exports=b(180)
},{}],455:[function(b,c,a){c.exports=b(181)},{}],456:[function(b,c,a){c.exports=b(185)
},{qs:446}],457:[function(b,c,a){var d=b("./ac-modal-video/ModalVideo");d.create=b("./ac-modal-video/factory/create");
c.exports={ModalVideo:d}},{"./ac-modal-video/ModalVideo":458,"./ac-modal-video/factory/create":461}],458:[function(f,c,i){var d=f("ac-modal");
var a=f("ac-object");var n=f("ac-classlist");var o=f("ac-event-emitter").EventEmitter;
var b=f("./featureDetect/featureDetect");var h=f("./delegate/Default");var m=f("./delegate/Mobile");
var k=h;var l;var g={deepLink:false,playOnOpen:false,closeOnEnded:false,autoAppend:true};
var j=function(q,p){this.options=a.defaults(g,p||{});this.modal=this.options.modal||new d.Modal();
this._delegate=this._createDelegate();this.setPlayer(q);if(this.options.autoAppend){this.appendPlayer(q)
}n.add(this.modal.modalEl,"ac-modal-video");this.modal.propagateTo(this);this.modal.on("willclose",this._willClose,this)
};l=j.prototype=a.create(o.prototype);l._createDelegate=function(){var q;var p=h;
if(b.shouldPlayInModal()===false){p=m}return new p(this.player,this.modal,this.options)
};l.appendPlayer=function(p){var q=document.createElement("div");p.appendTo(q);
this.modal.appendContent(q)};l.getPlayer=function(){return this._delegate.getPlayer()
};l.setPlayer=function(p){return this._delegate.setPlayer(p)};l.open=function(){this._delegate.open()
};l.close=function(){this._delegate.close()};l._willClose=function(){this._delegate.willClose()
};l._pause=function(){this._delegate.pause()};c.exports=j},{"./delegate/Default":459,"./delegate/Mobile":460,"./featureDetect/featureDetect":463,"ac-classlist":313,"ac-modal":444,"ac-object":447}],459:[function(c,d,a){function b(h,i,g){this.player=h;
this.modal=i;this.options=g}var f=b.prototype;f.pause=function(){if(this.player&&this.player.getReadyState()>0){this.player.pause()
}};f.play=function(){if(this.player&&this.player.getReadyState()>0){this.player.play()
}else{this.player.once("loadedmetadata",this.player.play,this.player)}};f._bindPlayerEvents=function(){this.player.on("ended",this._onEnded,this)
};f._unbindPlayerEvents=function(){this.player.off("ended",this._onEnded,this);
this.player.off("loadedmetadata",this.player.play,this.player);this.player.off("timeupdate",this.pause,this);
this.player.off("play",this.pause,this)};f.open=function(){if(this.player&&this.player.has("timeupdate",this._onTimeUpdateOnce)){this.player.off("timeupdate",this._onTimeUpdateOnce)
}this.modal.open();if(this.player&&this.player.getPaused()){this.player.off("play",this.pause);
if(this.options.playOnOpen){this.play()}}};f.getPlayer=function(){return this.player
};f.setPlayer=function(g){if(this.player){this._unbindPlayerEvents()}this.player=g;
this._bindPlayerEvents()};f.close=function(){this.modal.close()};f.willClose=function(){if(this.player&&this.player.isFullscreen()){this.player.exitFullscreen()
}if(this.player&&this.player.getReadyState()>0){if(this.player.getEnded()===false){this.pause()
}}else{if(this.player){this.player.on("play",this.pause,this)}}if(this.player&&this.player.getEnded()===false){this.player.on("timeupdate",this._onTimeUpdateOnce,this)
}};f._onEnded=function(){if(this.options.closeOnEnded){this.close()}};f._onTimeUpdateOnce=function(){this.pause();
this.player.off("timeupdate",this._onTimeUpdateOnce)};d.exports=b},{}],460:[function(c,f,a){var b=c("ac-object");
var h=c("./Default");function d(){h.apply(this,arguments)}var g=d.prototype=b.create(h.prototype);
g.open=function(){this.player.play()};f.exports=d},{"./Default":459,"ac-object":447}],461:[function(d,f,b){var h=d("./../ModalVideo");
var g=d("ac-dom-emitter").DOMEmitter;var a=d("./router");f.exports=function c(l,k){k=k||{};
var j=new h(l,k);var i;if(k.deepLink){i=a.createOrGet();i.createRoute(k.deepLink,j.open,j);
i.start()}if(k.triggerSelector){var m=new g(document);m.on("click",k.triggerSelector,function(n){n.preventDefault();
j.open()},j)}return j}},{"./../ModalVideo":458,"./router":462,"ac-dom-emitter":349}],462:[function(d,f,c){var b=d("ac-router");
var a=null;f.exports={create:function(){a=new b.Router({hashChange:true,pushState:false})
},get:function(){return a},destroy:function(){a=null},createOrGet:function(){if(a===null){this.create()
}return this.get()}}},{"ac-router":568}],463:[function(c,d,b){var f=c("ac-browser");
var a=c("ac-feature");d.exports={shouldPlayInModal:function(){return !(a.isHandheld()&&f.os.toLowerCase()==="ios")
}}},{"ac-browser":309,"ac-feature":403}],464:[function(b,c,a){c.exports=b(184)},{}],465:[function(b,c,a){c.exports={clone:b("./ac-object/clone"),defaults:b("./ac-object/defaults"),extend:b("./ac-object/extend"),getPrototypeOf:b("./ac-object/getPrototypeOf"),isEmpty:b("./ac-object/isEmpty"),toQueryParameters:b("./ac-object/toQueryParameters")}
},{"./ac-object/clone":466,"./ac-object/defaults":467,"./ac-object/extend":468,"./ac-object/getPrototypeOf":469,"./ac-object/isEmpty":470,"./ac-object/toQueryParameters":471}],466:[function(b,c,a){c.exports=b(192)
},{"./extend":468}],467:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"||typeof g!=="object"){throw new TypeError("defaults: must provide a defaults and options object")
}return f({},h,g)}},{"./extend":468}],468:[function(b,c,a){c.exports=b(195)},{}],469:[function(b,c,a){c.exports=b(177)
},{}],470:[function(b,c,a){c.exports=b(180)},{}],471:[function(b,c,a){c.exports=b(185)
},{qs:464}],472:[function(b,c,a){c.exports=b(80)},{"./ac-prefixer/Prefixer":473}],473:[function(b,c,a){c.exports=b(81)
},{"./Prefixer/camelCasedEvents":474}],474:[function(b,c,a){c.exports=b(82)},{}],475:[function(b,c,a){c.exports=b(215)
},{"./ac-dom-events/addEventListener":476,"./ac-dom-events/dispatchEvent":477,"./ac-dom-events/preventDefault":478,"./ac-dom-events/removeEventListener":479,"./ac-dom-events/stop":480,"./ac-dom-events/stopPropagation":481,"./ac-dom-events/target":482}],476:[function(b,c,a){c.exports=b(108)
},{"ac-prefixer":472}],477:[function(b,c,a){c.exports=b(109)},{}],478:[function(b,c,a){c.exports=b(67)
},{}],479:[function(b,c,a){c.exports=b(110)},{"ac-prefixer":472}],480:[function(b,c,a){c.exports=b(70)
},{"./preventDefault":478,"./stopPropagation":481}],481:[function(b,c,a){c.exports=b(71)
},{}],482:[function(b,c,a){c.exports=b(222)},{}],483:[function(b,c,a){c.exports=b(25)
},{}],484:[function(b,c,a){c.exports=b(26)},{}],485:[function(b,c,a){c.exports=b(27)
},{}],486:[function(b,c,a){c.exports=b(135)},{}],487:[function(b,c,a){c.exports=b(28)
},{}],488:[function(b,c,a){c.exports=b(29)},{}],489:[function(b,c,a){c.exports=b(138)
},{}],490:[function(b,c,a){c.exports=b(30)},{"./ELEMENT_NODE":487,"./internal/isNodeType":498,"ac-polyfills/Array/prototype.filter":508,"ac-polyfills/Array/prototype.slice":510}],491:[function(b,c,a){c.exports=b(140)
},{}],492:[function(b,c,a){c.exports=b(141)},{"./COMMENT_NODE":483,"./DOCUMENT_FRAGMENT_NODE":484,"./DOCUMENT_NODE":485,"./DOCUMENT_TYPE_NODE":486,"./ELEMENT_NODE":487,"./TEXT_NODE":488,"./createDocumentFragment":489,"./filterByNodeType":490,"./hasAttribute":491,"./indexOf":493,"./insertAfter":494,"./insertBefore":495,"./insertFirstChild":496,"./insertLastChild":497,"./isComment":500,"./isDocument":501,"./isDocumentFragment":502,"./isDocumentType":503,"./isElement":504,"./isNode":505,"./isNodeList":506,"./isTextNode":507,"./remove":511,"./replace":512}],493:[function(b,c,a){c.exports=b(142)
},{"./filterByNodeType":490,"./internal/validate":499,"ac-polyfills/Array/prototype.indexOf":509,"ac-polyfills/Array/prototype.slice":510}],494:[function(b,c,a){c.exports=b(143)
},{"./internal/validate":499}],495:[function(b,c,a){c.exports=b(144)},{"./internal/validate":499}],496:[function(b,c,a){c.exports=b(145)
},{"./internal/validate":499}],497:[function(b,c,a){c.exports=b(146)},{"./internal/validate":499}],498:[function(b,c,a){c.exports=b(31)
},{"../isNode":505}],499:[function(b,c,a){c.exports=b(148)},{"../COMMENT_NODE":483,"../DOCUMENT_FRAGMENT_NODE":484,"../ELEMENT_NODE":487,"../TEXT_NODE":488,"./isNodeType":498}],500:[function(b,c,a){c.exports=b(149)
},{"./COMMENT_NODE":483,"./internal/isNodeType":498}],501:[function(b,c,a){c.exports=b(150)
},{"./DOCUMENT_NODE":485,"./internal/isNodeType":498}],502:[function(b,c,a){c.exports=b(32)
},{"./DOCUMENT_FRAGMENT_NODE":484,"./internal/isNodeType":498}],503:[function(b,c,a){c.exports=b(152)
},{"./DOCUMENT_TYPE_NODE":486,"./internal/isNodeType":498}],504:[function(b,c,a){c.exports=b(33)
},{"./ELEMENT_NODE":487,"./internal/isNodeType":498}],505:[function(b,c,a){c.exports=b(34)
},{}],506:[function(b,c,a){c.exports=b(155)},{}],507:[function(b,c,a){c.exports=b(156)
},{"./TEXT_NODE":488,"./internal/isNodeType":498}],508:[function(b,c,a){c.exports=b(1)
},{}],509:[function(b,c,a){c.exports=b(37)},{}],510:[function(b,c,a){c.exports=b(38)
},{}],511:[function(b,c,a){c.exports=b(160)},{"./internal/validate":499}],512:[function(b,c,a){c.exports=b(161)
},{"./internal/validate":499}],513:[function(b,c,a){arguments[4][223][0].apply(a,arguments)
},{"./ac-dom-traversal/ancestor":514,"./ac-dom-traversal/ancestors":515,"./ac-dom-traversal/children":516,"./ac-dom-traversal/filterBySelector":517,"./ac-dom-traversal/firstChild":518,"./ac-dom-traversal/lastChild":521,"./ac-dom-traversal/matchesSelector":522,"./ac-dom-traversal/nextSibling":523,"./ac-dom-traversal/nextSiblings":524,"./ac-dom-traversal/previousSibling":525,"./ac-dom-traversal/previousSiblings":526,"./ac-dom-traversal/querySelector":527,"./ac-dom-traversal/querySelectorAll":528,"./ac-dom-traversal/shims/ie":529,"./ac-dom-traversal/siblings":530}],514:[function(b,c,a){arguments[4][224][0].apply(a,arguments)
},{"./helpers/validate":520,"./matchesSelector":522,"ac-dom-nodes":492}],515:[function(b,c,a){arguments[4][225][0].apply(a,arguments)
},{"./helpers/validate":520,"./matchesSelector":522,"ac-dom-nodes":492}],516:[function(b,c,a){arguments[4][226][0].apply(a,arguments)
},{"./filterBySelector":517,"./helpers/validate":520,"ac-dom-nodes":492}],517:[function(b,c,a){arguments[4][227][0].apply(a,arguments)
},{"./helpers/validate":520,"./matchesSelector":522}],518:[function(b,c,a){arguments[4][228][0].apply(a,arguments)
},{"./children":516,"./helpers/validate":520}],519:[function(b,c,a){c.exports=b(229)
},{}],520:[function(b,c,a){arguments[4][230][0].apply(a,arguments)},{"ac-dom-nodes":492}],521:[function(b,c,a){arguments[4][231][0].apply(a,arguments)
},{"./children":516,"./helpers/validate":520}],522:[function(b,c,a){arguments[4][232][0].apply(a,arguments)
},{"./helpers/nativeMatches":519,"./helpers/validate":520,"ac-dom-nodes":492}],523:[function(b,c,a){arguments[4][233][0].apply(a,arguments)
},{"./helpers/validate":520,"./matchesSelector":522,"ac-dom-nodes":492}],524:[function(b,c,a){arguments[4][234][0].apply(a,arguments)
},{"./helpers/validate":520,"./matchesSelector":522,"ac-dom-nodes":492}],525:[function(b,c,a){arguments[4][235][0].apply(a,arguments)
},{"./helpers/validate":520,"./matchesSelector":522,"ac-dom-nodes":492}],526:[function(b,c,a){arguments[4][236][0].apply(a,arguments)
},{"./helpers/validate":520,"./matchesSelector":522,"ac-dom-nodes":492}],527:[function(b,c,a){arguments[4][237][0].apply(a,arguments)
},{"./helpers/validate":520}],528:[function(b,c,a){arguments[4][238][0].apply(a,arguments)
},{"./helpers/validate":520}],529:[function(b,c,a){arguments[4][239][0].apply(a,arguments)
},{"../helpers/nativeMatches":519,"../helpers/validate":520,"../vendor/sizzle/sizzle":531,"ac-dom-nodes":492}],530:[function(b,c,a){arguments[4][240][0].apply(a,arguments)
},{"./children":516,"./helpers/validate":520}],531:[function(b,c,a){c.exports=b(46)
},{}],532:[function(b,c,a){c.exports=b(242)},{"./ac-dom-emitter/DOMEmitter":533}],533:[function(b,c,a){c.exports=b(243)
},{"./DOMEmitterEvent":534,"ac-dom-events":475,"ac-dom-traversal":513}],534:[function(b,c,a){c.exports=b(244)
},{"ac-dom-events":475}],535:[function(b,c,a){c.exports=b(59)},{"./shared/getEventType":545,"./utils/addEventListener":549}],536:[function(b,c,a){c.exports=b(60)
},{"./shared/getEventType":545,"./utils/dispatchEvent":550}],537:[function(b,c,a){c.exports=b(61)
},{"./addEventListener":535,"./dispatchEvent":536,"./preventDefault":543,"./removeEventListener":544,"./stop":546,"./stopPropagation":547,"./target":548}],538:[function(b,c,a){c.exports=b(62)
},{}],539:[function(b,c,a){c.exports=b(63)},{"./shared/camelCasedEventTypes":540,"./shared/prefixHelper":541,"./utils/eventTypeAvailable":542}],540:[function(b,c,a){c.exports=b(64)
},{}],541:[function(b,c,a){c.exports=b(65)},{}],542:[function(b,c,a){c.exports=b(66)
},{}],543:[function(b,c,a){c.exports=b(67)},{}],544:[function(b,c,a){c.exports=b(68)
},{"./shared/getEventType":545,"./utils/removeEventListener":551}],545:[function(b,c,a){c.exports=b(69)
},{"ac-prefixer/getEventType":539}],546:[function(b,c,a){c.exports=b(70)},{"./preventDefault":543,"./stopPropagation":547}],547:[function(b,c,a){c.exports=b(71)
},{}],548:[function(b,c,a){c.exports=b(72)},{}],549:[function(b,c,a){c.exports=b(73)
},{}],550:[function(b,c,a){c.exports=b(74)},{"ac-polyfills/CustomEvent":538}],551:[function(b,c,a){c.exports=b(75)
},{}],552:[function(b,c,a){c.exports=b(173)},{"./extend":555,"ac-polyfills/Array/isArray":561}],553:[function(b,c,a){c.exports=b(174)
},{}],554:[function(b,c,a){c.exports=b(175)},{"./extend":555}],555:[function(b,c,a){c.exports=b(176)
},{"ac-polyfills/Array/prototype.forEach":562}],556:[function(b,c,a){c.exports=b(177)
},{}],557:[function(b,c,a){c.exports=b(178)},{"./clone":552,"./create":553,"./defaults":554,"./extend":555,"./getPrototypeOf":556,"./isDate":558,"./isEmpty":559,"./isRegExp":560,"./toQueryParameters":564}],558:[function(b,c,a){c.exports=b(179)
},{}],559:[function(b,c,a){c.exports=b(180)},{}],560:[function(b,c,a){c.exports=b(181)
},{}],561:[function(b,c,a){c.exports=b(182)},{}],562:[function(b,c,a){c.exports=b(36)
},{}],563:[function(b,c,a){c.exports=b(184)},{}],564:[function(b,c,a){c.exports=b(185)
},{qs:563}],565:[function(b,c,a){c.exports={Routes:b("./ac-routes/Routes"),Route:b("./ac-routes/Route")}
},{"./ac-routes/Route":566,"./ac-routes/Routes":567}],566:[function(b,c,a){function f(i,k,h,j,g){this.path=i;
this.callback=k;this.context=h;this.greedy=j||false;this.priority=g||0;if(typeof this.priority!=="number"){throw new Error("Priority must be a Number.")
}this.identifierPattern="([a-zA-Z0-9\\-\\_]+)";this.tokensRe=new RegExp(":"+this.identifierPattern,"g");
this.matcher=this._createRouteMatcher(i)}var d=f.prototype;d._createRouteMatcher=function(h){if(h&&h.exec){return{pattern:h}
}else{if(h==="/"){return{pattern:/^\/$/}}else{if(typeof h!=="string"){throw new Error("path must be either a string or regex")
}}}var g=this._extractRouteTokens(h);var j=h.replace(this.tokensRe,this.identifierPattern);
var i=new RegExp(j,"g");return{pattern:i,routeTokens:g}};d._extractRouteTokens=function(j){var g=j.replace(this.tokensRe,":"+this.identifierPattern);
var i=new RegExp(g,"g");var h=i.exec(j);if(h&&h.length>1){h=h.slice(1)}else{h=null
}return h};d.match=function(h){this.matcher.pattern.lastIndex=0;var g=this.matcher.pattern.exec(h);
if(g){var i=(g.length)?g.slice(1):[];var j=this.callback;if(j&&typeof j==="function"){j.apply(this.context||this,i);
return true}}return false};c.exports=f},{}],567:[function(c,d,b){var g=c("./Route");
function a(h){this._routes={};if(h){this.addRoutes(h)}}var f=a.prototype;f._getIndex=function(k,l,j){if(this._routes[k]!==undefined){var h=this._routes[k].length;
while(--h>-1){if(this._routes[k][h].callback===l&&this._routes[k][h].context===j){return h
}}}return -1};f.match=function(k){var j,h;for(j in this._routes){h=this._routes[j].length;
while(--h>-1){if(this._routes[j][h].match(k)&&this._routes[j][h].greedy){break}}}};
f.add=function(j){if(this._routes[j.path]===undefined){this._routes[j.path]=[j]
}else{if(!this.get(j.path,j.callback,j.context)){var k,h=this._routes[j.path].length;
if(h>0){for(k=0;k<h;++k){if(this._routes[j.path][k].priority>j.priority){this._routes[j.path].splice(k,0,j);
return j}}}this._routes[j.path].push(j)}}return j};f.remove=function(h){var j=this._getIndex(h.path,h.callback,h.context);
if(j>-1){this._routes[h.path].splice(j,1);return h}return false};f.get=function(k,l,j){var h=this._getIndex(k,l,j);
if(h>-1){return this._routes[k][h]}return false};f.createRoute=function(k,m,j,l,i){var h=new g(k,m,j,l,i);
this.add(h);return h};f.addRoutes=function(j){if(j instanceof Array){var l,k,h=j.length;
for(l=0;l<h;++l){k=j[l];if(k&&typeof k==="object"){this.add(k)}}}else{throw new Error("routes must be an Array.")
}};f.removeRoutes=function(j){if(j instanceof Array){var l,k,h=j.length;for(l=0;
l<h;++l){k=j[l];if(k&&typeof k==="object"){this.remove(k)}}}else{throw new Error("routes must be an Array.")
}};f.getRoutes=function(h){if(this._routes[h]===undefined){return[]}return this._routes[h]
};d.exports=a},{"./Route":566}],568:[function(b,c,a){c.exports={Router:b("./ac-router/Router"),History:b("./ac-router/History"),Routes:b("ac-routes").Routes,Route:b("ac-routes").Route}
},{"./ac-router/History":569,"./ac-router/Router":570,"ac-routes":565}],569:[function(c,f,b){var d=c("ac-object").create;
var a=c("ac-dom-events");var i=c("ac-event-emitter").EventEmitter;function h(k){k=k||{};
this.history=window.history;this.rootStripper=/^\/+|\/+$/g;this.root=k.root||"/";
this.root=("/"+this.root+"/").replace(this.rootStripper,"/");var j=typeof k.resolveInitialHash!=="boolean"?true:k.resolveInitialHash;
this._pushState=typeof k.pushState!=="boolean"?true:k.pushState;this._hashChange=k.hashChange||false;
this._setUpdateVars(j);if(k.autoStart){this.start()}}var g=h.prototype=d(i.prototype);
g._isRoot=function(j){return("/"+j+"/").replace(this.rootStripper,"/")===this.root
};g._isPushStateSupported=function(){return(this.history&&this.history.pushState)
};g._isHashChangeSupported=function(){return("onhashchange" in window)};g._setUpdateVars=function(k){if(this._pushState&&this._isPushStateSupported()){if(k&&this._hashChange&&window.location.href.indexOf("#")!==-1){this.history.pushState({},document.title,window.location.href.replace("#",""))
}this._hashChange=false}else{if(k&&this._pushState&&this._hashChange&&window.location.href.indexOf("#")<0){if(!window.location.origin){window.location.origin=window.location.protocol+"//"+window.location.hostname;
window.location.origin+=(window.location.port?":"+window.location.port:"")}var j=window.location.href.substr(window.location.origin.length+this.root.length);
if(j.length){window.location=window.location.origin+this.root+"#"+j;return}}if(this._hashChange&&!this._isHashChangeSupported()){this._interval=50;
this._iframe=document.createElement('<iframe src="javascript:0" tabindex="-1" style="display:none;">');
this._iframe=document.body.appendChild(this._iframe).contentWindow;this._iframe.document.open().close()
}this._pushState=false}};g._checkUrl=function(){var j=this._iframe.location.hash.substr(1);
if(j.length===0){j="/"}if(this.fragment()!==j){window.location.hash="#"+j;this._ignoreHashChange=false;
this._handleHashChange()}};g._handlePopState=function(j){this.trigger("popstate",{fragment:this.fragment()})
};g._handleHashChange=function(j){if(this._ignoreHashChange){this._ignoreHashChange=false;
return}this.trigger("popstate",{fragment:this.fragment()})};g.canUpdate=function(){return this._pushState||this._hashChange
};g.start=function(){if(!this.started&&(this._pushState||this._hashChange)){this.started=true;
if(this._pushState){this._handlePopState=this._handlePopState.bind(this);a.addEventListener(window,"popstate",this._handlePopState)
}else{if(this._hashChange){if(this._isHashChangeSupported()){this._handleHashChange=this._handleHashChange.bind(this);
a.addEventListener(window,"hashchange",this._handleHashChange)}else{this._iframe.location.hash=this.fragment();
this._checkUrl=this._checkUrl.bind(this);this._checkUrlInterval=setInterval(this._checkUrl,this._interval)
}}}}return this.started||false};g.stop=function(){if(this.started){this.started=false;
if(this._pushState){a.removeEventListener(window,"popstate",this._handlePopState)
}else{if(this._hashChange){if(this._isHashChangeSupported()){a.removeEventListener(window,"hashchange",this._handleHashChange)
}else{if(this._checkUrlInterval){clearInterval(this._checkUrlInterval);this._checkUrlInterval=null
}}}}}};g.navigate=function(l,k){if(!this.started||!this.canUpdate()){return false
}k=k||{};var j=((this._isRoot(l)?"":this.root)+l).replace(/([^:])(\/\/)/g,"$1/");
if(this._pushState){this.history.pushState(k,document.title,j)}else{if(this._hashChange){this._ignoreHashChange=true;
window.location.hash="#"+l;if(!this._isHashChangeSupported()){this._iframe.document.open().close();
this._iframe.location.hash="#"+l}}}return true};g.fragment=function(){var j="";
if(this._pushState){j=(window.location.pathname).substr(this.root.length)}else{if(this._hashChange){j=window.location.hash.substr(1)
}}return j===""?"/":j};f.exports=h},{"ac-dom-events":537,"ac-object":557}],570:[function(d,c,g){var i=d("ac-object").create;
var k=d("ac-dom-emitter").DOMEmitter;var f=d("./History");var j=d("ac-routes").Route;
var a=d("ac-routes").Routes;function b(l){l=l||{};this._intercept=l.intercept||"[data-route]";
this._interceptAttribute=l.attribute||"href";this._handleTrigger=this._handleTrigger.bind(this);
this.intercept(this._intercept);this.history=l.history||new f({root:l.root,autoStart:l.autoStart,pushState:l.pushState,hashChange:l.hashChange,resolveInitialHash:l.resolveInitialHash});
a.call(this,l.routes);if(l.autoStart){if(!this.history.started){this.history.start()
}this.start()}}var h=b.prototype=i(a.prototype);h._handleTrigger=function(m){if(!this.started){return
}var l=m.target.getAttribute(this._interceptAttribute);if(l){if(/^(http|https):\/\/+/.exec(l)&&this._interceptAttribute==="href"){l=l.substr(l.indexOf(this.history.root)+this.history.root.length)||"/"
}if(this.navigate(l)){m.preventDefault()}}};h._handlePopstate=function(l){this.navigate(l.fragment,true)
};h.start=function(){if(!this.started){this.started=true;this.history.start();this._handlePopstate=this._handlePopstate.bind(this);
this.history.on("popstate",this._handlePopstate);this.navigate(this.history.fragment(),true)
}};h.stop=function(){if(this.started){this.started=false;this.history.stop();this.history.off("popstate",this._handlePopstate)
}};h.navigate=function(m,l){if(this.history.fragment()===m&&!l){return this.history.canUpdate()
}if(m&&!l){if(!this.history.navigate(m)){return false}}this.match(m);return true
};h.intercept=function(m,n){var l=new k(n||document.body);l.on("click",m,this._handleTrigger)
};c.exports=b},{"./History":569,"ac-dom-emitter":532,"ac-object":557,"ac-routes":565}],571:[function(b,c,a){c.exports=b(184)
},{}],572:[function(b,c,a){c.exports={isString:b("./ac-string/isString"),toCamelCase:b("./ac-string/toCamelCase"),queryStringToObject:b("./ac-string/queryStringToObject"),toQueryPair:b("./ac-string/toQueryPair"),queryParameters:b("./ac-string/queryParameters"),supplant:b("./ac-string/supplant")}
},{"./ac-string/isString":573,"./ac-string/queryParameters":574,"./ac-string/queryStringToObject":575,"./ac-string/supplant":576,"./ac-string/toCamelCase":577,"./ac-string/toQueryPair":578}],573:[function(c,d,b){d.exports=function a(f){return(typeof f==="string")
}},{}],574:[function(d,f,c){var a=d("./queryStringToObject");f.exports=function b(){var g={};
var h=window.location.toString().split("?")[1];if(typeof h==="string"){g=a(h)}return g
}},{"./queryStringToObject":575}],575:[function(d,f,c){var a=d("qs");f.exports=function b(g){if(typeof g!=="string"){throw new TypeError("QueryStringToObject error: argument must be a string")
}return a.parse(g)}},{qs:571}],576:[function(b,c,a){c.exports=function d(h,g,f){if(!g){return h
}f=f||/{([^{}]*)}/g;return h.replace(f,function(j,i){var k=g[i];return typeof k==="string"||typeof k==="number"?k:j
})}},{}],577:[function(b,c,a){c.exports=function d(f){if(typeof f!=="string"){throw new TypeError("Argument must be of type String.")
}return f.replace(/-+(.)?/g,function(g,h){return h?h.toUpperCase():""})}},{}],578:[function(b,c,a){c.exports=function d(f,g){if(typeof f!=="string"||typeof g!=="string"){throw new TypeError("toQueryPair error: argument must be a string")
}return encodeURIComponent(f)+"="+encodeURIComponent(g)}},{}],579:[function(b,f,a){var d=b("./ac-ajax/Ajax");
var c=b("./ac-ajax/Request");f.exports=new d();f.exports.Ajax=d;f.exports.Request=c
},{"./ac-ajax/Ajax":580,"./ac-ajax/Request":581}],580:[function(c,g,b){var f=c("./Request");
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
return this.create(i).send()}};g.exports=d},{"./Request":581,"./URLParser":582,"./XDomain-request":583}],581:[function(b,d,a){var c=function(f){this._initialize(f)
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
this._sendXHR();return this.promise},xhr:null};d.exports=c},{}],582:[function(c,d,b){var a=function(){this.parser=null
};var f=a.prototype;f.parse=function(k){var i;var l;var h;var g;var j;if(typeof k!=="string"){throw new TypeError(k+" must be a string")
}if(!this.parser){this.parser=document.createElement("a")}this._qualifyPath(k);
h=this.parser.hostname;l=this.parser.protocol;g=this._normalizePort(this.parser);
i=this.parser.origin||this._constructOriginString(this.parser,g);j=this.parser.search;
return{originalPath:k,qualifiedPath:this.parser.href,protocol:l,hostname:h,origin:i,port:g,search:j}
};f.destroy=function(){this.parser=null};f._constructOriginString=function(i,g){var h=g?":"+g:"";
return i.protocol+"//"+i.hostname+h};f._normalizePort=function(g){return(g.port==="80"||g.port==="443"||g.port==="0")?"":g.port
};f._qualifyPath=function(g){this.parser.href=g;this.parser.href=this.parser.href
};d.exports=a},{}],583:[function(b,d,a){var c=b("./Request");var f=function(g){c.apply(this,arguments)
};f.prototype=c.create();f.prototype._getTransport=function(){return new XDomainRequest()
};f.prototype._addReadyStateChangeHandler=function(){this.xhr.ontimeout=function(){this.reject(this.xhr)
}.bind(this);this.xhr.onerror=function(){this.reject(this.xhr)}.bind(this);this.xhr.onload=function(){this.resolve(this.xhr)
}.bind(this)};f.prototype._setTimeout=function(g){if(!g){if(this._configuration&&this._configuration.timeout){g=this._configuration.timeout
}}if(g>0){this.xhr.timeout=g}};f.prototype._sendXHR=function(){setTimeout(function(){c.prototype._sendXHR.call(this)
}.bind(this),0)};d.exports=f},{"./Request":581}],584:[function(c,d,b){var a=c("./ac-vatman/vat-client");
var f=c("./ac-vatman/vat-resource");var g={createPlayer:c("./ac-vatman/factory/createPlayer"),vatClient:a,vatResource:f};
d.exports=g},{"./ac-vatman/factory/createPlayer":585,"./ac-vatman/vat-client":592,"./ac-vatman/vat-resource":593}],585:[function(c,a,g){var m=c("./../featureDetection/canPlayType");
var d=c("./../featureDetection/canPlayTypeNatively");var l=c("./../featureDetection/canPlayTypeQuicktime");
var k=c("./../featureDetection/featureDetect").shouldPlayQuicktime;var i=c("./../featureDetection/featureDetect").textTrackDisablingNotAvailable;
function h(o,n){n.type="quicktime";return o.create(n)}function j(o,n){return o.create(n)
}function f(n){var p=this.findTextTrackModelFromNativeTrack(n);var o=this.getEnabledTextTracks();
o.forEach(function(q){if(p.cid!==q.cid){q.disable()}});if(p.get("mode")==="disabled"){p.hide()
}}function b(q,p){p=p||{};var o="video/quicktime";var n="video/mp4";var r;if(d(o)||d(n)&&(!k())){r=j(q,p)
}else{if(l(o)){p.type="quicktime";r=h(q,p)}}if(r&&!i()){r.on("addtrack",f,r)}return r
}a.exports=b},{"./../featureDetection/canPlayType":586,"./../featureDetection/canPlayTypeNatively":587,"./../featureDetection/canPlayTypeQuicktime":588,"./../featureDetection/featureDetect":589}],586:[function(b,d,a){var f=b("./canPlayTypeNatively");
var c=b("./canPlayTypeQuicktime");function g(i){var h=f(i);if(!h){h=c(i)}return h
}d.exports=g},{"./canPlayTypeNatively":587,"./canPlayTypeQuicktime":588}],587:[function(c,d,b){var f;
function a(){return document.createElement("video")}d.exports=function g(i){var j="";
var h=a();if(typeof h.canPlayType==="function"){j=h.canPlayType(i)}return j}},{}],588:[function(c,f,b){var a=c("./quicktime");
f.exports=function d(g){var h="";if(g==="video/quicktime"&&a.getPluginVersion()!==undefined){h="maybe"
}return h}},{"./quicktime":590}],589:[function(b,c,a){var f=b("ac-browser");var d=f.name.toLowerCase();
c.exports={shouldPlayMOV:function(){return(d==="safari"||d==="safari mobile")},shouldPlayQuicktime:function(){return(d==="ie"&&f.version<9)
},textTrackDisablingNotAvailable:function(){return(d==="safari mobile"&&f.version===7)
}}},{"ac-browser":3}],590:[function(b,c,a){c.exports={getPlugins:function(){return navigator.plugins
},getPluginVersion:function(){var j;var k=/(\d+\.){2}(\d+){1}$/;var d=this.getPlugins();
if(d&&d[0]){for(var h=0;h<d.length;h++){var f=(/QuickTime/i.test(d[h].name)&&typeof j==="undefined");
if(f){if(d[h].version){j=d[h].version}else{if(k.test(d[h].name)){j=d[h].name.match(k);
j=j[0]||undefined}}}}}else{var g=["QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1"];
g.forEach(function(l){var m;var i;try{m=new ActiveXObject(l);i=(typeof m==="object"&&typeof m.QuickTimeVersion!=="undefined"&&typeof j==="undefined");
if(i){j=m.QuickTimeVersion}}catch(n){}})}return j}}},{}],591:[function(b,c,a){c.exports={bg:"български език",cs:"Czech",el:"Greek",de:"German",da:"Danish",en:"English",es:"Spanish",et:"Estonian",fi:"Finnish",fr:"Français",hr:"Croatian",hu:"Hungarian",it:"Italian",ja:"Japanese",ko:"Korean",lt:"Lithuanian",lv:"Latvian",nl:"Dutch",no:"Norsk",pl:"Polish",pt:"Portuguese",ro:"Romanian",ru:"Russian",sk:"Slovak",sv:"Swedish",tr:"Turkish",zh:"Chinese"}
},{}],592:[function(d,b,g){var j=d("ac-ajax");var h=d("ac-string");var k=/(-[a-z]{2}-([a-z]{2}-){0,})[0-9]{8}_r[0-9].+\.mov$/;
var a=/_r[0-9].+\.mov$/;var i=/((-([a-z]{2}))*)-[0-9]+/;var n=/((-([a-z]{2}))*)-/;
var c="m";var f="_{width}x{height}{suffix}."+c+"p4";var l=[{width:416,height:234,type:"baseline-high",suffix:"h"},{width:416,height:234,type:"small",suffix:"h"},{width:416,height:234,type:"baseline-low",suffix:"l"},{width:416,height:234,type:"baseline-medium",suffix:"m"},{width:640,height:360,type:"medium",suffix:"h"},{width:848,height:480,type:"large",suffix:""}];
var o={create:function(){var m=function(){};m.prototype=this;return new m()},getSource:function(m,q,p){var s=l;
if(!m){throw"Must provide a vatRefMovie"}if(!q){throw"Must provide a width"}if(p){s=s.filter(function(t){return t.type===p
})}var r=s.reduce(function(t,u){return Math.abs(u.width-q)<Math.abs(t.width-q)?u:t
});return m.replace(a,h.supplant(f,r))},getConfigPath:function(m){return m.replace(k,"-current.json")
},getConfig:function(m){return j.getJSON({url:this.getConfigPath(m)})},getVTTSource:function(m){return m.replace(a,"_cc.vtt")
}};b.exports=o},{"ac-ajax":579,"ac-string":572}],593:[function(c,d,b){var a=c("./vat-client");
var h=c("./localization/language");var g=c("./featureDetection/featureDetect").shouldPlayMOV;
var f={create:function(j){if(!j){throw"Must provide a vatRefMovie."}var k=function(){};
k.prototype=this;var i=new k();i.vatRefMovie=j;i.vatVTTSource=[];return i},getSource:function(j,i){return a.getSource(this.vatRefMovie,j,i)
},getConfig:function(){return a.getConfig(this.vatRefMovie)},getVTTSource:function(){return a.getVTTSource(this.vatRefMovie)
},_getCaptionsSrcLang:function(j){var i="";if(typeof j==="string"&&j.indexOf("-")!==-1){i=j.split("-")[0]
}return i},_isNewVTTSrc:function(i){return(this.vatVTTSource.indexOf(i)===-1)},_handleCaptions:function(k){var l;
var i="";var j={};this.getConfig().then(function(m){if(!m.metadata.captions){return
}l=this.getVTTSource();if(l&&(this._isNewVTTSrc(l)===true)){if(m.metadata.lang){i=this._getCaptionsSrcLang(m.metadata.lang)
}j.kind="caption";j.src=l;j.mode="hidden";if(i){j.srclang=i;j.label=h[i]||null}k.addTextTrackFromRemoteVTT(j);
this.vatVTTSource.push(l)}}.bind(this))},setPlayerSrc:function(i,k){var j=this.vatRefMovie;
if(!g()){j=this.getSource(k)}i.setSrc(j);this._handleCaptions(i)}};d.exports=f},{"./featureDetection/featureDetect":589,"./localization/language":591,"./vat-client":592}],594:[function(b,c,a){c.exports=b(184)
},{}],595:[function(b,c,a){c.exports=b(185)},{qs:594}],596:[function(b,f,a){var g=b("./request/factory");
var d={complete:function(j,i){},error:function(j,i){},method:"GET",headers:{},success:function(j,i,k){},timeout:5000};
var h=function(){for(var k=1;k<arguments.length;k++){for(var j in arguments[k]){if(arguments[k].hasOwnProperty(j)){arguments[0][j]=arguments[k][j]
}}}return arguments[0]};var c={ajax:function(i,j){j=h({},d,j);if(i.substr(0,2)==="//"){i=window.location.protocol+i
}var k=g(i);k.open(j.method,i);k.setTransportHeaders(j.headers);k.setReadyStateChangeHandlers(j.complete,j.error,j.success);
k.setTimeout(j.timeout,j.error,j.complete);k.send(j.data);return k},get:function(i,j){j.method="GET";
return c.ajax(i,j)},head:function(i,j){j.method="HEAD";return c.ajax(i,j)},post:function(i,j){j.method="POST";
return c.ajax(i,j)}};f.exports=c},{"./request/factory":597}],597:[function(c,b,f){var j=c("./xmlhttprequest");
var i=c("./xdomainrequest");var h=/.*(?=:\/\/)/;var a=/^.*:\/\/|\/.+$/g;var d=window.XDomainRequest&&document.documentMode<10;
var g=function(l){if(!l.match(h)){return false}var k=l.replace(a,"");return k!==window.location.hostname
};b.exports=function(k,l){var m=d&&g(k)?i:j;return new m()}},{"./xdomainrequest":599,"./xmlhttprequest":600}],598:[function(b,d,a){var c=function(){};
c.create=function(){var f=function(){};f.prototype=c.prototype;return new f()};
c.prototype.open=function(g,f){g=g.toUpperCase();this.xhr.open(g,f)};c.prototype.send=function(f){this.xhr.send(f)
};c.prototype.setTimeout=function(h,g,f){this.xhr.ontimeout=function(){g(this.xhr,this.status);
f(this.xhr,this.status)}.bind(this)};c.prototype.setTransportHeaders=function(f){for(var g in f){this.xhr.setRequestHeader(g,f[g])
}};d.exports=c},{}],599:[function(b,f,a){var d=b("./request");var c=b("ac-object/toQueryParameters");
var g=function(){this.xhr=new XDomainRequest()};g.prototype=d.create();g.prototype.setReadyStateChangeHandlers=function(h,i,j){this.xhr.onerror=function(){i(this.xhr,this.status);
h(this.xhr,this.status)}.bind(this);this.xhr.onload=function(){j(this.xhr.responseText,this.xhr.status,this.xhr);
h(this.xhr,this.status)}.bind(this)};g.prototype.send=function(h){if(h&&typeof h==="object"){h=c(h)
}this.xhr.send(h)};g.prototype.setTransportHeaders=function(h){};f.exports=g},{"./request":598,"ac-object/toQueryParameters":595}],600:[function(b,d,a){var c=b("./request");
var f=function(){this.xhr=new XMLHttpRequest()};f.prototype=c.create();f.prototype.setReadyStateChangeHandlers=function(g,h,i){this.xhr.onreadystatechange=function(j){if(this.xhr.readyState===4){clearTimeout(this.timeout);
if(this.xhr.status>=200&&this.xhr.status<300){i(this.xhr.responseText,this.xhr.status,this.xhr);
g(this.xhr,this.status)}else{h(this.xhr,this.status);g(this.xhr,this.status)}}}.bind(this)
};d.exports=f},{"./request":598}],601:[function(b,c,a){c.exports=b(47)},{"./className/add":603,"ac-polyfills/Array/prototype.slice":609,"ac-polyfills/Element/prototype.classList":610}],602:[function(b,c,a){c.exports=b(48)
},{"./className/add":603,"./className/contains":604,"./className/remove":606}],603:[function(b,c,a){c.exports=b(49)
},{"./contains":604}],604:[function(b,c,a){c.exports=b(50)},{"./getTokenRegExp":605}],605:[function(b,c,a){c.exports=b(51)
},{}],606:[function(b,c,a){c.exports=b(52)},{"./contains":604,"./getTokenRegExp":605}],607:[function(b,c,a){c.exports=b(53)
},{"./className/contains":604,"ac-polyfills/Element/prototype.classList":610}],608:[function(b,c,a){c.exports=b(54)
},{"./add":601,"./contains":607,"./remove":611,"./toggle":612}],609:[function(b,c,a){c.exports=b(38)
},{}],610:[function(b,c,a){c.exports=b(56)},{}],611:[function(b,c,a){c.exports=b(57)
},{"./className/remove":606,"ac-polyfills/Array/prototype.slice":609,"ac-polyfills/Element/prototype.classList":610}],612:[function(b,c,a){c.exports=b(58)
},{"./className":602,"ac-polyfills/Element/prototype.classList":610}],613:[function(b,c,a){c.exports={log:b("./ac-console/log")}
},{"./ac-console/log":614}],614:[function(d,f,b){var a="f7c9180f-5c45-47b4-8de4-428015f096c0";
var c=!!(function(){try{return window.localStorage.getItem(a)}catch(h){}}());f.exports=function g(){if(window.console&&typeof console.log!=="undefined"&&c){console.log.apply(console,Array.prototype.slice.call(arguments,0))
}}},{}],615:[function(b,c,a){c.exports=b(80)},{"./ac-prefixer/Prefixer":616}],616:[function(b,c,a){c.exports=b(81)
},{"./Prefixer/camelCasedEvents":617}],617:[function(b,c,a){c.exports=b(82)},{}],618:[function(b,c,a){c.exports=b(215)
},{"./ac-dom-events/addEventListener":619,"./ac-dom-events/dispatchEvent":620,"./ac-dom-events/preventDefault":621,"./ac-dom-events/removeEventListener":622,"./ac-dom-events/stop":623,"./ac-dom-events/stopPropagation":624,"./ac-dom-events/target":625}],619:[function(b,c,a){c.exports=b(108)
},{"ac-prefixer":615}],620:[function(b,c,a){c.exports=b(109)},{}],621:[function(b,c,a){c.exports=b(67)
},{}],622:[function(b,c,a){c.exports=b(110)},{"ac-prefixer":615}],623:[function(b,c,a){c.exports=b(70)
},{"./preventDefault":621,"./stopPropagation":624}],624:[function(b,c,a){c.exports=b(71)
},{}],625:[function(b,c,a){c.exports=b(222)},{}],626:[function(b,c,a){arguments[4][223][0].apply(a,arguments)
},{"./ac-dom-traversal/ancestor":627,"./ac-dom-traversal/ancestors":628,"./ac-dom-traversal/children":629,"./ac-dom-traversal/filterBySelector":630,"./ac-dom-traversal/firstChild":631,"./ac-dom-traversal/lastChild":634,"./ac-dom-traversal/matchesSelector":635,"./ac-dom-traversal/nextSibling":636,"./ac-dom-traversal/nextSiblings":637,"./ac-dom-traversal/previousSibling":638,"./ac-dom-traversal/previousSiblings":639,"./ac-dom-traversal/querySelector":640,"./ac-dom-traversal/querySelectorAll":641,"./ac-dom-traversal/shims/ie":642,"./ac-dom-traversal/siblings":643}],627:[function(b,c,a){arguments[4][224][0].apply(a,arguments)
},{"./helpers/validate":633,"./matchesSelector":635,"ac-dom-nodes":674}],628:[function(b,c,a){arguments[4][225][0].apply(a,arguments)
},{"./helpers/validate":633,"./matchesSelector":635,"ac-dom-nodes":674}],629:[function(b,c,a){arguments[4][226][0].apply(a,arguments)
},{"./filterBySelector":630,"./helpers/validate":633,"ac-dom-nodes":674}],630:[function(b,c,a){arguments[4][227][0].apply(a,arguments)
},{"./helpers/validate":633,"./matchesSelector":635}],631:[function(b,c,a){arguments[4][228][0].apply(a,arguments)
},{"./children":629,"./helpers/validate":633}],632:[function(b,c,a){c.exports=b(229)
},{}],633:[function(b,c,a){arguments[4][230][0].apply(a,arguments)},{"ac-dom-nodes":674}],634:[function(b,c,a){arguments[4][231][0].apply(a,arguments)
},{"./children":629,"./helpers/validate":633}],635:[function(b,c,a){arguments[4][232][0].apply(a,arguments)
},{"./helpers/nativeMatches":632,"./helpers/validate":633,"ac-dom-nodes":674}],636:[function(b,c,a){arguments[4][233][0].apply(a,arguments)
},{"./helpers/validate":633,"./matchesSelector":635,"ac-dom-nodes":674}],637:[function(b,c,a){arguments[4][234][0].apply(a,arguments)
},{"./helpers/validate":633,"./matchesSelector":635,"ac-dom-nodes":674}],638:[function(b,c,a){arguments[4][235][0].apply(a,arguments)
},{"./helpers/validate":633,"./matchesSelector":635,"ac-dom-nodes":674}],639:[function(b,c,a){arguments[4][236][0].apply(a,arguments)
},{"./helpers/validate":633,"./matchesSelector":635,"ac-dom-nodes":674}],640:[function(b,c,a){arguments[4][237][0].apply(a,arguments)
},{"./helpers/validate":633}],641:[function(b,c,a){arguments[4][238][0].apply(a,arguments)
},{"./helpers/validate":633}],642:[function(b,c,a){arguments[4][239][0].apply(a,arguments)
},{"../helpers/nativeMatches":632,"../helpers/validate":633,"../vendor/sizzle/sizzle":644,"ac-dom-nodes":674}],643:[function(b,c,a){arguments[4][240][0].apply(a,arguments)
},{"./children":629,"./helpers/validate":633}],644:[function(b,c,a){c.exports=b(46)
},{}],645:[function(b,c,a){arguments[4][242][0].apply(a,arguments)},{"./ac-dom-emitter/DOMEmitter":646}],646:[function(b,c,a){c.exports=b(350)
},{"./DOMEmitterEvent":647,"ac-dom-events":618,"ac-dom-traversal":626}],647:[function(b,c,a){c.exports=b(351)
},{"ac-dom-events":618}],648:[function(b,c,a){c.exports=b(59)},{"./shared/getEventType":658,"./utils/addEventListener":662}],649:[function(b,c,a){c.exports=b(60)
},{"./shared/getEventType":658,"./utils/dispatchEvent":663}],650:[function(b,c,a){c.exports=b(61)
},{"./addEventListener":648,"./dispatchEvent":649,"./preventDefault":656,"./removeEventListener":657,"./stop":659,"./stopPropagation":660,"./target":661}],651:[function(b,c,a){c.exports=b(62)
},{}],652:[function(b,c,a){c.exports=b(63)},{"./shared/camelCasedEventTypes":653,"./shared/prefixHelper":654,"./utils/eventTypeAvailable":655}],653:[function(b,c,a){c.exports=b(64)
},{}],654:[function(b,c,a){c.exports=b(65)},{}],655:[function(b,c,a){c.exports=b(66)
},{}],656:[function(b,c,a){c.exports=b(67)},{}],657:[function(b,c,a){c.exports=b(68)
},{"./shared/getEventType":658,"./utils/removeEventListener":664}],658:[function(b,c,a){c.exports=b(69)
},{"ac-prefixer/getEventType":652}],659:[function(b,c,a){c.exports=b(70)},{"./preventDefault":656,"./stopPropagation":660}],660:[function(b,c,a){c.exports=b(71)
},{}],661:[function(b,c,a){c.exports=b(72)},{}],662:[function(b,c,a){c.exports=b(73)
},{}],663:[function(b,c,a){c.exports=b(74)},{"ac-polyfills/CustomEvent":651}],664:[function(b,c,a){c.exports=b(75)
},{}],665:[function(b,c,a){c.exports=b(25)},{}],666:[function(b,c,a){c.exports=b(26)
},{}],667:[function(b,c,a){c.exports=b(27)},{}],668:[function(b,c,a){c.exports=b(135)
},{}],669:[function(b,c,a){c.exports=b(28)},{}],670:[function(b,c,a){c.exports=b(29)
},{}],671:[function(b,c,a){c.exports=b(138)},{}],672:[function(b,c,a){c.exports=b(30)
},{"./ELEMENT_NODE":669,"./internal/isNodeType":680,"ac-polyfills/Array/prototype.filter":690,"ac-polyfills/Array/prototype.slice":692}],673:[function(b,c,a){c.exports=b(140)
},{}],674:[function(b,c,a){c.exports=b(141)},{"./COMMENT_NODE":665,"./DOCUMENT_FRAGMENT_NODE":666,"./DOCUMENT_NODE":667,"./DOCUMENT_TYPE_NODE":668,"./ELEMENT_NODE":669,"./TEXT_NODE":670,"./createDocumentFragment":671,"./filterByNodeType":672,"./hasAttribute":673,"./indexOf":675,"./insertAfter":676,"./insertBefore":677,"./insertFirstChild":678,"./insertLastChild":679,"./isComment":682,"./isDocument":683,"./isDocumentFragment":684,"./isDocumentType":685,"./isElement":686,"./isNode":687,"./isNodeList":688,"./isTextNode":689,"./remove":693,"./replace":694}],675:[function(b,c,a){c.exports=b(142)
},{"./filterByNodeType":672,"./internal/validate":681,"ac-polyfills/Array/prototype.indexOf":691,"ac-polyfills/Array/prototype.slice":692}],676:[function(b,c,a){c.exports=b(143)
},{"./internal/validate":681}],677:[function(b,c,a){c.exports=b(144)},{"./internal/validate":681}],678:[function(b,c,a){c.exports=b(145)
},{"./internal/validate":681}],679:[function(b,c,a){c.exports=b(146)},{"./internal/validate":681}],680:[function(b,c,a){c.exports=b(31)
},{"../isNode":687}],681:[function(b,c,a){c.exports=b(148)},{"../COMMENT_NODE":665,"../DOCUMENT_FRAGMENT_NODE":666,"../ELEMENT_NODE":669,"../TEXT_NODE":670,"./isNodeType":680}],682:[function(b,c,a){c.exports=b(149)
},{"./COMMENT_NODE":665,"./internal/isNodeType":680}],683:[function(b,c,a){c.exports=b(150)
},{"./DOCUMENT_NODE":667,"./internal/isNodeType":680}],684:[function(b,c,a){c.exports=b(32)
},{"./DOCUMENT_FRAGMENT_NODE":666,"./internal/isNodeType":680}],685:[function(b,c,a){c.exports=b(152)
},{"./DOCUMENT_TYPE_NODE":668,"./internal/isNodeType":680}],686:[function(b,c,a){c.exports=b(33)
},{"./ELEMENT_NODE":669,"./internal/isNodeType":680}],687:[function(b,c,a){c.exports=b(34)
},{}],688:[function(b,c,a){c.exports=b(155)},{}],689:[function(b,c,a){c.exports=b(156)
},{"./TEXT_NODE":670,"./internal/isNodeType":680}],690:[function(b,c,a){c.exports=b(1)
},{}],691:[function(b,c,a){c.exports=b(37)},{}],692:[function(b,c,a){c.exports=b(38)
},{}],693:[function(b,c,a){c.exports=b(160)},{"./internal/validate":681}],694:[function(b,c,a){c.exports=b(161)
},{"./internal/validate":681}],695:[function(c,d,b){var a=c("./ac-dom-styles/vendorTransformHelper");
var f={};f.setStyle=function(h,i){var g;var j;var k;if((typeof i!=="string"&&typeof i!=="object")||Array.isArray(i)){throw new TypeError("styles argument must be either an object or a string")
}g=f.setStyle.__explodeStyleStringToObject(i);for(k in g){if(g.hasOwnProperty(k)){j=k.replace(/-(\w)/g,f.setStyle.__camelCaseReplace);
f.setStyle.__setStyle(h,j,g,g[k])}}return h};f.setStyle.__explodeStyleStringToObject=function(l){var j=(typeof l==="object")?l:{};
var m;var k;var g;var h;if(typeof l==="string"){m=l.split(";");g=m.length;for(h=0;
h<g;h+=1){k=m[h].indexOf(":");if(k>0){j[m[h].substr(0,k).trim()]=m[h].substr(k+1).trim()
}}}return j};f.setStyle.__setStyle=function(i,j,h,g){if(typeof i.style[j]!=="undefined"){i.style[j]=g
}};f.setStyle.__camelCaseReplace=function(h,i,j,g){return(j===0)&&(g.substr(1,3)!=="moz")?i:i.toUpperCase()
};f.getStyle=function(h,j,g){var i;j=j.replace(/-(\w)/g,f.setStyle.__camelCaseReplace);
j=(j==="float")?"cssFloat":j;g=g||window.getComputedStyle(h,null);i=g?g[j]:null;
if(j==="opacity"){return i?parseFloat(i):1}return i==="auto"?null:i};f.setVendorPrefixStyle=function(g,j,i){if(typeof j!=="string"){throw new TypeError("ac-dom-styles.setVendorPrefixStyle: property must be a string")
}if(typeof i!=="string"&&typeof i!=="number"){throw new TypeError("ac-dom-styles.setVendorPrefixStyle: value must be a string or a number")
}var h=["","webkit","Moz","ms","O"];var l;var k;i+="";j=j.replace(/-(webkit|moz|ms|o)-/i,"");
j=j.replace(/^(webkit|Moz|ms|O)/,"");j=j.charAt(0).toLowerCase()+j.slice(1);j=j.replace(/-(\w)/,function(m,n){return n.toUpperCase()
});i=i.replace(/-(webkit|moz|ms|o)-/,"-vendor-");h.forEach(function(m){l=(m==="")?j:m+j.charAt(0).toUpperCase()+j.slice(1);
k=(m==="")?i.replace("-vendor-",""):i.replace("-vendor-","-"+m.charAt(0).toLowerCase()+m.slice(1)+"-");
if(l in g.style){f.setStyle(g,l+":"+k)}})};f.getVendorPrefixStyle=function(h,j){if(typeof j!=="string"){throw new TypeError("ac-dom-styles.getVendorPrefixStyle: property must be a string")
}var i=["","webkit","Moz","ms","O"];var g;j=j.replace(/-(webkit|moz|ms|o)-/i,"");
j=j.replace(/^(webkit|Moz|ms|O)/,"").charAt(0).toLowerCase()+j.slice(1);j=j.replace(/-(\w)/,function(k,l){return l.toUpperCase()
});i.some(function(l,k){var m=(l==="")?j:l+j.charAt(0).toUpperCase()+j.slice(1);
if(m in h.style){g=f.getStyle(h,m);return true}});return g};f.setVendorPrefixTransform=function(g,h){if((typeof h!=="string"&&typeof h!=="object")||Array.isArray(h)||h===null){throw new TypeError("ac-dom-styles.setVendorPrefixTransform: transformFunctions argument must be either an object or a string")
}f.setVendorPrefixStyle(g,"transform",a.convert2dFunctions(h))};c("./ac-dom-styles/ie")(f);
d.exports=f},{"./ac-dom-styles/ie":696,"./ac-dom-styles/vendorTransformHelper":697}],696:[function(b,c,a){c.exports=function(d){if(typeof window.getComputedStyle!=="function"){d.getStyle=function(i,h,g){var f;
var j;g=g||i.currentStyle;if(g){h=h.replace(/-(\w)/g,d.setStyle.__camelCaseReplace);
h=h==="float"?"styleFloat":h;j=g[h]||null;return j==="auto"?null:j}}}}},{}],697:[function(c,d,b){var a={__objectifiedFunctions:{},__paramMaps:{translate:"p1, p2, 0",translateX:"p1, 0, 0",translateY:"0, p1, 0",scale:"p1, p2, 1",scaleX:"p1, 1, 1",scaleY:"1, p1, 1",rotate:"0, 0, 1, p1",matrix:"p1, p2, 0, 0, p3, p4, 0, 0, 0, 0, 1, 0, p5, p6, 0, 1"},convert2dFunctions:function(g){var f;
this.__init(g);for(var h in this.__objectifiedFunctions){if(this.__objectifiedFunctions.hasOwnProperty(h)){f=this.__objectifiedFunctions[h].replace(" ","").split(",");
if(h in this.__paramMaps){for(var i in this.__paramMaps){if(h===i){this.valuesToSet.push(this.__stripFunctionAxis(h)+"3d("+this.__map2DTransformParams(f,this.__paramMaps[h])+")")
}}}else{this.valuesToSet.push(h+"("+this.__objectifiedFunctions[h]+")")}}}return this.valuesToSet.join(" ")
},__init:function(f){this.valuesToSet=[];this.__objectifiedFunctions=(typeof f==="object")?f:{};
if(typeof f==="string"){this.__objectifiedFunctions=this.__objectifyFunctionString(f)
}},__map2DTransformParams:function(f,g){f.forEach(function(j,h){g=g.replace("p"+(h+1),j)
});return g},__splitFunctionStringToArray:function(f){return f.match(/[\w]+\(.+?\)/g)
},__splitFunctionNameAndParams:function(f){return f.match(/(.*)\((.*)\)/)},__stripFunctionAxis:function(f){return f.match(/([a-z]+)(|X|Y)$/)[1]
},__objectifyFunctionString:function(f){var g=this;var h;this.__splitFunctionStringToArray(f).forEach(function(i){h=g.__splitFunctionNameAndParams(i);
g.__objectifiedFunctions[h[1]]=h[2]});return this.__objectifiedFunctions}};d.exports=a
},{}],698:[function(c,f,b){var d={cssPropertyAvailable:c("./ac-feature/cssPropertyAvailable"),localStorageAvailable:c("./ac-feature/localStorageAvailable")};
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
};f.exports=d},{"./ac-feature/cssPropertyAvailable":699,"./ac-feature/localStorageAvailable":700}],699:[function(c,f,b){var g=null;
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
}}return false}}},{}],700:[function(d,f,b){var a=null;f.exports=function c(){if(a===null){a=!!(window.localStorage&&window.localStorage.non_existent!==null)
}return a}},{}],701:[function(b,c,a){c.exports={flatten:b("./ac-array/flatten"),intersection:b("./ac-array/intersection"),toArray:b("./ac-array/toArray"),union:b("./ac-array/union"),unique:b("./ac-array/unique"),without:b("./ac-array/without")}
},{"./ac-array/flatten":702,"./ac-array/intersection":703,"./ac-array/toArray":704,"./ac-array/union":705,"./ac-array/unique":706,"./ac-array/without":707}],702:[function(b,c,a){c.exports=function d(h){var f=[];
var g=function(i){if(Array.isArray(i)){i.forEach(g)}else{f.push(i)}};h.forEach(g);
return f}},{}],703:[function(b,c,a){c.exports=function d(n){if(!n){return[]}var m=arguments.length;
var k=0;var g=n.length;var f=[];var l;for(k;k<g;k++){l=n[k];if(f.indexOf(l)>-1){continue
}for(var h=1;h<m;h++){if(arguments[h].indexOf(l)<0){break}}if(h===m){f.push(l)}}return f
}},{}],704:[function(b,d,a){d.exports=function c(f){return Array.prototype.slice.call(f)
}},{}],705:[function(b,c,a){var g=b("./flatten");var f=b("./unique");c.exports=function d(h){return f(g(Array.prototype.slice.call(arguments)))
}},{"./flatten":702,"./unique":706}],706:[function(b,c,a){c.exports=function d(g){var f=function(h,i){if(h.indexOf(i)<0){h.push(i)
}return h};return g.reduce(f,[])}},{}],707:[function(b,d,a){d.exports=function c(f,n,m){var k;
var h=f.indexOf(n);var l=f.length;if(h>=0){if(m){k=f.slice(0,l);var j,g=0;for(j=h;
j<l;j++){if(f[j]===n){k.splice(j-g,1);g++}}}else{if(h===(l-1)){k=f.slice(0,(l-1))
}else{if(h===0){k=f.slice(1)}else{k=f.slice(0,h);k=k.concat(f.slice(h+1))}}}}else{return f
}return k}},{}],708:[function(b,c,a){c.exports=b(186)},{"./ac-shared-instance/SharedInstance":709}],709:[function(b,c,a){c.exports=b(187)
},{}],710:[function(b,c,a){c.exports=b(188)},{"./ac-mvc-cid/CID":711}],711:[function(b,c,a){c.exports=b(189)
},{"ac-shared-instance":708}],712:[function(b,c,a){c.exports={Collection:b("./ac-mvc-collection/Collection")}
},{"./ac-mvc-collection/Collection":713}],713:[function(d,b,j){var g=d("ac-object"),m=d("ac-array"),c=d("ac-mvc-cid").CID,n=d("ac-event-emitter").EventEmitter;
var i=["every","filter","forEach","map","reduce","reduceRight","some","slice","sort","reverse","indexOf","lastIndexOf"];
var l=["intersection","union","unique","without"];var a={add:"add",remove:"remove",set:"set",reset:"reset",empty:"empty",destroy:"destroy"};
function f(r,o,p,q){if(typeof r[o]!=="undefined"){return}r[o]=(function(s,t){return function(){var v=m.toArray(arguments),u=t.concat(v);
return s.apply(this,u)}}(p,q))}function h(o){n.call(this);this.options=g.defaults(this.defaultOptions,o||{});
this.models=[];this.cid=c.getNewCID();if(this.options.ModelType){this.ModelType=this.options.ModelType
}if(this.ModelType){this._modelsObject={}}this.on(a.add,this._addToModelsObject,this);
this.on(a.remove,this._removeFromModelsObject,this);if(this.options.models){this.add(this.options.models)
}}var k=h.prototype=g.create(n.prototype);k.defaultOptions={};k.count=function(){if(!this.models){return null
}return this.models.length};k.add=function(p,o){o=o||{};if(typeof p==="undefined"){p=[]
}p=this._returnAsArray(p);p=this._createModels(p);if(this.models.length===0){this.models=p
}else{this.models=this.models.concat(p)}this._trigger(a.add,{models:p},o);return this
};k.remove=function(t,r){r=r||{};if(!t){return[]}t=this._returnAsArray(t);var q=[],s,p,o=t.length;
for(s=0;s<o;s++){p=this.indexOf(t[s]);if(p>-1){q.push(t[s]);this.spliceWithOptions([p,1],{silent:true})
}}if(q.length>0){this._trigger(a.remove,{models:q},r)}return q};k.reset=function(p,o){o=o||{};
this.empty(o);this.add(p,o);this._trigger(a.reset,{models:this.models},o);return this
};k.empty=function(p){p=p||{};var o=this.slice(0);this.models=[];if(this._modelsObject){this._modelsObject={}
}if(o.length>0){this._trigger(a.remove,{models:o},p);this._trigger(a.empty,{models:o},p)
}return o};k.destroy=function(o){o=o||{};var q=this.empty(o);this._trigger(a.destroy,{models:q},o);
this.off();var p;for(p in this){if(this.hasOwnProperty(p)){this[p]=null}}};k.get=function(r){var p=this._getModelByID(r);
if(p){return p}var q,o=this.models.length;for(q=0;q<o;q++){if((typeof this.models[q].id!=="undefined"&&this.models[q].id===r)||(typeof this.models[q].cid!=="undefined"&&this.models[q].cid===r)){p=this.models[q];
break}}return p};k.set=function(s,A){A=A||{};if(typeof s==="undefined"){s=[]}s=this._returnAsArray(s);
var t,o="id",x=s.length,y=[],B=[],r={},z;if(this.ModelType&&this.ModelType.prototype.idAttribute){o=this.ModelType.prototype.idAttribute
}if(A.matchParameter){o=A.matchParameter}for(t=0;t<x;t++){z=null;if(typeof s[t]==="object"){z=this.get(s[t][o])
}if(z){if(this.ModelType){z.set(s[t]);r[z.cid]=true}else{z=s[t]}B.push(z);continue
}if(this.ModelType){s[t]=this._createModel(s[t])}if(this.ModelType||this.indexOf(s[t])===-1){y.push(s[t])
}B.push(s[t])}var q,v=B.length,w=[],p,u;x=this.models.length;for(t=0;t<x;t++){u=this.models[t];
if(this.ModelType){p=true;if(r[u.cid]){p=false}}else{p=true;for(q=0;q<v;q++){if(u===B[q]){p=false;
break}}}if(p){w.push(u)}}this.models=B;if(y.length>0){this._trigger(a.add,{models:y},A)
}if(w.length>0){this._trigger(a.remove,{models:w},A)}this._trigger(a.set,{models:B},A);
return w};k.at=function(o){if(!this.models){return}return this.models[o]};k.find=function(v,x){if(typeof v!=="object"){console.warn("Collection.protoype.find query needs to be an object");
return[]}x=x||{};var y=[],u=false,s=0,r,q,o=null,w=0,t=this.models.length,p=t;if(x.reverse){w=t-1;
p=-1;u=true}if(x.limit){o=x.limit}for(q=w;(u?q>p:q<p);(u?q--:q++)){r=this.models[q];
if(this._modelMatchesProperties(r,v)){if(u){y.unshift(r)}else{y.push(r)}s++;if(o&&s>=o){break
}}}return y};k.push=function(){return this.pushWithOptions(m.toArray(arguments))
};k.pop=function(){return this.popWithOptions(m.toArray(arguments))};k.shift=function(){return this.shiftWithOptions(m.toArray(arguments))
};k.unshift=function(){return this.unshiftWithOptions(m.toArray(arguments))};k.splice=function(){return this.spliceWithOptions(m.toArray(arguments))
};k.pushWithOptions=function(q,p){p=p||{};var r=this._createModels(q),o=Array.prototype.push.apply(this.models,r);
if(r.length>0){this._trigger(a.add,{models:r},p)}return o};k.popWithOptions=function(p,o){o=o||{};
var q=Array.prototype.pop.call(this.models);if(q){this._trigger(a.remove,{models:[q]},o)
}return q};k.shiftWithOptions=function(p,o){o=o||{};var q=Array.prototype.shift.call(this.models);
if(q){this._trigger(a.remove,{models:[q]},o)}return q};k.unshiftWithOptions=function(q,p){p=p||{};
var r=this._createModels(q),o=Array.prototype.unshift.apply(this.models,r);if(r.length>0){this._trigger(a.add,{models:r},p)
}return o};k.spliceWithOptions=function(q,p){p=p||{};var r=[q[0],q[1]],o,t,s;if(q.length>2){o=q.slice(2,q.length);
t=this._createModels(o);r=r.concat(t)}s=Array.prototype.splice.apply(this.models,r);
if(s.length>0){this._trigger(a.remove,{models:s},p)}if(t){this._trigger(a.add,{models:t},p)
}return s};k._trigger=function(o,q,p){p=p||{};if(!p.silent){this.trigger(o,q)}};
k._getModelByID=function(o){if(this.ModelType&&this._modelsObject&&this._modelsObject[o]){return this._modelsObject[o]
}return null};k._createModel=function(o){if(o instanceof this.ModelType||o instanceof h){return o
}return new this.ModelType(o)};k._createModels=function(q){if(!this.ModelType){return Array.prototype.slice.call(q,0)
}var p=[],r,s,o=q.length;for(s=0;s<o;s++){r=q[s];if(!(r instanceof this.ModelType)){r=this._createModel(r)
}p.push(r)}return p};k._modelMatchesProperties=function(o,q){var p;for(p in q){if(q.hasOwnProperty(p)){if(this._getPropFromModel(o,p)!==q[p]){return false
}}}return true};k._getPropFromModel=function(o,p){if(this.ModelType){return o.get(p)
}return o[p]};k._addToModelsObject=function(o){if(!this._modelsObject||!o.models){this._modelsObject={}
}o.models.forEach(function(p){this._modelsObject[p.id]=p;this._modelsObject[p.cid]=p
},this)};k._removeFromModelsObject=function(o){if(!this._modelsObject||!o.models){this._modelsObject={}
}o.models.forEach(function(p){this._modelsObject[p.id]=null;this._modelsObject[p.cid]=null
},this)};k._returnAsArray=function(o){if(!Array.isArray(o)){o=[o]}return o};k._acArrayProxy=function(p){var o=m.toArray(arguments);
o[0]=this.models;return m[p].apply(m,o)};k._arrayPrototypeProxy=function(p){var o=m.toArray(arguments);
o.shift();return Array.prototype[p].apply(this.models,o)};i.forEach(function(o){if(typeof Array.prototype[o]==="function"){f(this,o,this._arrayPrototypeProxy,[o])
}},k);l.forEach(function(o){if(typeof m[o]==="function"){f(this,o,this._acArrayProxy,[o])
}},k);b.exports=h},{"ac-array":701,"ac-mvc-cid":710,"ac-object":752}],714:[function(b,c,a){c.exports=b(186)
},{"./ac-shared-instance/SharedInstance":715}],715:[function(b,c,a){c.exports=b(187)
},{}],716:[function(b,c,a){c.exports=b(188)},{"./ac-mvc-cid/CID":717}],717:[function(b,c,a){c.exports=b(189)
},{"ac-shared-instance":714}],718:[function(b,c,a){c.exports=b(201)},{"./ac-mvc-model/Model":719}],719:[function(b,c,a){c.exports=b(202)
},{"ac-mvc-cid":716,"ac-object":752}],720:[function(b,c,a){c.exports=b(117)},{"./ac-classlist/add":721,"./ac-classlist/contains":722,"./ac-classlist/remove":724,"./ac-classlist/toggle":725}],721:[function(b,c,a){c.exports=b(118)
},{"./helpers/className":723}],722:[function(b,c,a){c.exports=b(119)},{"./helpers/className":723}],723:[function(b,c,a){c.exports=b(120)
},{}],724:[function(b,c,a){c.exports=b(121)},{"./helpers/className":723}],725:[function(b,c,a){c.exports=b(122)
},{"./helpers/className":723}],726:[function(b,c,a){c.exports=b(245)},{"./ac-dom-nodes/createDocumentFragment":727,"./ac-dom-nodes/filterByNodeType":728,"./ac-dom-nodes/helpers/nodeTypes":730,"./ac-dom-nodes/insertAfter":732,"./ac-dom-nodes/insertBefore":733,"./ac-dom-nodes/insertFirstChild":734,"./ac-dom-nodes/insertLastChild":735,"./ac-dom-nodes/isComment":736,"./ac-dom-nodes/isDocument":737,"./ac-dom-nodes/isDocumentFragment":738,"./ac-dom-nodes/isDocumentType":739,"./ac-dom-nodes/isElement":740,"./ac-dom-nodes/isNode":741,"./ac-dom-nodes/isTextNode":742,"./ac-dom-nodes/remove":743,"./ac-dom-nodes/replace":744}],727:[function(b,c,a){c.exports=b(246)
},{}],728:[function(b,c,a){c.exports=b(247)},{"./helpers/isNodeType":729,"./helpers/nodeTypes":730}],729:[function(b,c,a){c.exports=b(248)
},{"../isNode":741}],730:[function(b,c,a){c.exports=b(249)},{}],731:[function(b,c,a){c.exports=b(250)
},{"./isNodeType":729,"./nodeTypes":730}],732:[function(b,c,a){c.exports=b(251)
},{"./helpers/validate":731}],733:[function(b,c,a){c.exports=b(252)},{"./helpers/validate":731}],734:[function(b,c,a){c.exports=b(253)
},{"./helpers/validate":731}],735:[function(b,c,a){c.exports=b(254)},{"./helpers/validate":731}],736:[function(b,c,a){c.exports=b(255)
},{"./helpers/isNodeType":729,"./helpers/nodeTypes":730}],737:[function(b,c,a){c.exports=b(256)
},{"./helpers/isNodeType":729,"./helpers/nodeTypes":730}],738:[function(b,c,a){c.exports=b(257)
},{"./helpers/isNodeType":729,"./helpers/nodeTypes":730}],739:[function(b,c,a){c.exports=b(258)
},{"./helpers/isNodeType":729,"./helpers/nodeTypes":730}],740:[function(b,c,a){c.exports=b(259)
},{"./helpers/isNodeType":729,"./helpers/nodeTypes":730}],741:[function(b,c,a){c.exports=b(260)
},{}],742:[function(b,c,a){c.exports=b(261)},{"./helpers/isNodeType":729,"./helpers/nodeTypes":730}],743:[function(b,c,a){c.exports=b(262)
},{"./helpers/validate":731}],744:[function(b,c,a){c.exports=b(263)},{"./helpers/validate":731}],745:[function(b,c,a){c.exports=b(186)
},{"./ac-shared-instance/SharedInstance":746}],746:[function(b,c,a){c.exports=b(187)
},{}],747:[function(b,c,a){c.exports=b(188)},{"./ac-mvc-cid/CID":748}],748:[function(b,c,a){c.exports=b(189)
},{"ac-shared-instance":745}],749:[function(b,c,a){c.exports=b(279)},{"./ac-mvc-view/View":750}],750:[function(b,c,a){arguments[4][280][0].apply(a,arguments)
},{"ac-classlist":720,"ac-dom-emitter":645,"ac-dom-nodes":726,"ac-mvc-cid":747,"ac-object":752}],751:[function(b,c,a){c.exports=b(184)
},{}],752:[function(b,c,a){c.exports=b(191)},{"./ac-object/clone":753,"./ac-object/create":754,"./ac-object/defaults":755,"./ac-object/extend":756,"./ac-object/getPrototypeOf":757,"./ac-object/isDate":758,"./ac-object/isEmpty":759,"./ac-object/isRegExp":760,"./ac-object/toQueryParameters":761}],753:[function(b,c,a){c.exports=b(192)
},{"./extend":756}],754:[function(b,c,a){c.exports=b(174)},{}],755:[function(b,c,a){arguments[4][175][0].apply(a,arguments)
},{"./extend":756}],756:[function(b,c,a){c.exports=b(195)},{}],757:[function(b,c,a){c.exports=b(177)
},{}],758:[function(b,c,a){c.exports=b(179)},{}],759:[function(b,c,a){c.exports=b(180)
},{}],760:[function(b,c,a){c.exports=b(181)},{}],761:[function(b,c,a){c.exports=b(185)
},{qs:751}],762:[function(b,c,a){arguments[4][3][0].apply(a,arguments)},{"./ac-browser/BrowserData":763,"./ac-browser/IE":764}],763:[function(b,c,a){c.exports=b(77)
},{"./data":765}],764:[function(b,c,a){c.exports=b(5)},{}],765:[function(b,c,a){c.exports=b(79)
},{}],766:[function(b,c,a){c.exports=b(80)},{"./ac-prefixer/Prefixer":767}],767:[function(b,c,a){c.exports=b(81)
},{"./Prefixer/camelCasedEvents":768}],768:[function(b,c,a){c.exports=b(82)},{}],769:[function(b,c,a){c.exports=b(83)
},{"./ac-feature/canvasAvailable":770,"./ac-feature/continuousScrollEventsAvailable":771,"./ac-feature/cookiesAvailable":772,"./ac-feature/cssLinearGradientAvailable":773,"./ac-feature/cssPropertyAvailable":774,"./ac-feature/helpers/memoize":776,"./ac-feature/isDesktop":777,"./ac-feature/isHandheld":778,"./ac-feature/isRetina":779,"./ac-feature/isTablet":780,"./ac-feature/localStorageAvailable":781,"./ac-feature/mediaElementsAvailable":782,"./ac-feature/sessionStorageAvailable":783,"./ac-feature/svgAvailable":784,"./ac-feature/threeDTransformsAvailable":785,"./ac-feature/touchAvailable":786,"./ac-feature/webGLAvailable":787}],770:[function(b,c,a){c.exports=b(84)
},{"./helpers/globals":775}],771:[function(b,c,a){c.exports=b(85)},{"./touchAvailable":786,"ac-browser":762}],772:[function(b,c,a){c.exports=b(86)
},{"./helpers/globals":775}],773:[function(b,c,a){c.exports=b(87)},{"./cssPropertyAvailable":774}],774:[function(b,c,a){c.exports=b(88)
},{"ac-prefixer":766}],775:[function(b,c,a){c.exports=b(89)},{}],776:[function(b,c,a){c.exports=b(90)
},{}],777:[function(b,c,a){c.exports=b(91)},{"./helpers/globals":775,"./touchAvailable":786}],778:[function(b,c,a){c.exports=b(92)
},{"./isDesktop":777,"./isTablet":780}],779:[function(b,c,a){c.exports=b(93)},{"./helpers/globals":775}],780:[function(b,c,a){c.exports=b(94)
},{"./helpers/globals":775,"./isDesktop":777}],781:[function(b,c,a){c.exports=b(95)
},{"./helpers/globals":775}],782:[function(b,c,a){c.exports=b(96)},{"./helpers/globals":775}],783:[function(b,c,a){c.exports=b(97)
},{"./helpers/globals":775}],784:[function(b,c,a){c.exports=b(98)},{"./helpers/globals":775}],785:[function(b,c,a){c.exports=b(99)
},{"./cssPropertyAvailable":774}],786:[function(b,c,a){c.exports=b(100)},{"./helpers/globals":775}],787:[function(b,c,a){c.exports=b(101)
},{"./helpers/globals":775}],788:[function(b,d,a){var c={};c.addEventListener=function(j,h,i,g){if(j.addEventListener){j.addEventListener(h,i,g)
}else{if(j.attachEvent){j.attachEvent("on"+h,i)}else{j["on"+h]=i}}return j};c.dispatchEvent=function(h,g){if(document.createEvent){h.dispatchEvent(new CustomEvent(g))
}else{h.fireEvent("on"+g,document.createEventObject())}return h};c.removeEventListener=function(j,h,i,g){if(j.removeEventListener){j.removeEventListener(h,i,g)
}else{j.detachEvent("on"+h,i)}return j};var f=/^(webkit|moz|ms|o)/i;c.addVendorPrefixEventListener=function(j,h,i,g){if(f.test(h)){h=h.replace(f,"")
}else{h=h.charAt(0).toUpperCase()+h.slice(1)}if(/WebKit/i.test(window.navigator.userAgent)){return c.addEventListener(j,"webkit"+h,i,g)
}else{if(/Opera/i.test(window.navigator.userAgent)){return c.addEventListener(j,"O"+h,i,g)
}else{if(/Gecko/i.test(window.navigator.userAgent)){return c.addEventListener(j,h.toLowerCase(),i,g)
}else{h=h.charAt(0).toLowerCase()+h.slice(1);return c.addEventListener(j,h,i,g)
}}}};c.removeVendorPrefixEventListener=function(j,h,i,g){if(f.test(h)){h=h.replace(f,"")
}else{h=h.charAt(0).toUpperCase()+h.slice(1)}c.removeEventListener(j,"webkit"+h,i,g);
c.removeEventListener(j,"O"+h,i,g);c.removeEventListener(j,h.toLowerCase(),i,g);
h=h.charAt(0).toLowerCase()+h.slice(1);return c.removeEventListener(j,h,i,g)};c.stop=function(g){if(!g){g=window.event
}if(g.stopPropagation){g.stopPropagation()}else{g.cancelBubble=true}if(g.preventDefault){g.preventDefault()
}g.stopped=true;g.returnValue=false};c.target=function(g){return(typeof g.target!=="undefined")?g.target:g.srcElement
};d.exports=c},{}],789:[function(d,f,c){var b=d("./utils/getBoundingClientRect");
f.exports=function a(g,i){var h=1;if(i){h=b(g).width/g.offsetWidth}return{width:g.scrollWidth*h,height:g.scrollHeight*h}
}},{"./utils/getBoundingClientRect":800}],790:[function(d,f,c){var b=d("./utils/getBoundingClientRect");
f.exports=function a(g,i){var h;if(i){h=b(g);return{width:h.width,height:h.height}
}return{width:g.offsetWidth,height:g.offsetHeight}}},{"./utils/getBoundingClientRect":800}],791:[function(g,h,f){var c=g("./getDimensions");
var d=g("./utils/getBoundingClientRect");var b=g("./getScrollX");var a=g("./getScrollY");
h.exports=function i(j,p){var l;var o;var m;var k;var n;if(p){l=d(j);o=b();m=a();
return{top:l.top+m,right:l.right+o,bottom:l.bottom+m,left:l.left+o}}k=c(j,p);l={top:j.offsetTop,left:j.offsetLeft,width:k.width,height:k.height};
while(j=j.offsetParent){l.top+=j.offsetTop;l.left+=j.offsetLeft}return{top:l.top,right:l.left+l.width,bottom:l.top+l.height,left:l.left}
}},{"./getDimensions":790,"./getScrollX":795,"./getScrollY":796,"./utils/getBoundingClientRect":800}],792:[function(c,f,b){var a=c("./getDimensions");
var g=c("./getPixelsInViewport");f.exports=function d(j,k){var i=g(j,k);var h=a(j,k).height;
return(i/h)}},{"./getDimensions":790,"./getPixelsInViewport":793}],793:[function(c,d,b){var a=c("./getViewportPosition");
d.exports=function f(h,k){var j=document.documentElement.clientHeight;var g=a(h,k);
var i;if(g.top>=j||g.bottom<=0){return 0}i=(g.bottom-g.top);if(g.top<0){i+=g.top
}if(g.bottom>j){i-=g.bottom-j}return i}},{"./getViewportPosition":797}],794:[function(d,f,c){var a=d("./getDimensions");
var b=d("./utils/getBoundingClientRect");f.exports=function g(i,l){var k;var h;
var j;if(l){k=b(i);if(i.offsetParent){h=b(i.offsetParent);k.top-=h.top;k.left-=h.left
}}else{j=a(i,l);k={top:i.offsetTop,left:i.offsetLeft,width:j.width,height:j.height}
}return{top:k.top,right:k.left+k.width,bottom:k.top+k.height,left:k.left}}},{"./getDimensions":790,"./utils/getBoundingClientRect":800}],795:[function(c,d,b){d.exports=function a(f){var g;
f=f||window;if(f===window){g=window.pageXOffset;if(!g){f=document.documentElement||document.body.parentNode||document.body
}else{return g}}return f.scrollLeft}},{}],796:[function(c,d,b){d.exports=function a(f){var g;
f=f||window;if(f===window){g=window.pageYOffset;if(!g){f=document.documentElement||document.body.parentNode||document.body
}else{return g}}return f.scrollTop}},{}],797:[function(g,h,f){var i=g("./getPagePosition");
var d=g("./utils/getBoundingClientRect");var c=g("./getScrollX");var b=g("./getScrollY");
h.exports=function a(k,n){var j;var m;var l;if(n){j=d(k);return{top:j.top,right:j.right,bottom:j.bottom,left:j.left}
}j=i(k);m=c();l=b();return{top:j.top-l,right:j.right-m,bottom:j.bottom-l,left:j.left-m}
}},{"./getPagePosition":791,"./getScrollX":795,"./getScrollY":796,"./utils/getBoundingClientRect":800}],798:[function(b,c,a){c.exports={getContentDimensions:b("./getContentDimensions"),getDimensions:b("./getDimensions"),getPagePosition:b("./getPagePosition"),getPercentInViewport:b("./getPercentInViewport"),getPixelsInViewport:b("./getPixelsInViewport"),getPosition:b("./getPosition"),getScrollX:b("./getScrollX"),getScrollY:b("./getScrollY"),getViewportPosition:b("./getViewportPosition"),isInViewport:b("./isInViewport")}
},{"./getContentDimensions":789,"./getDimensions":790,"./getPagePosition":791,"./getPercentInViewport":792,"./getPixelsInViewport":793,"./getPosition":794,"./getScrollX":795,"./getScrollY":796,"./getViewportPosition":797,"./isInViewport":799}],799:[function(b,d,a){var g=b("./getPixelsInViewport");
var c=b("./getPercentInViewport");d.exports=function f(j,k,h){var i;h=h||0;if(typeof h==="string"&&h.slice(-2)==="px"){h=parseInt(h,10);
i=g(j,k)}else{i=c(j,k)}return(i>0&&i>=h)}},{"./getPercentInViewport":792,"./getPixelsInViewport":793}],800:[function(c,d,b){d.exports=function a(f){var g=f.getBoundingClientRect();
return{top:g.top,right:g.right,bottom:g.bottom,left:g.left,width:g.width||g.right-g.left,height:g.height||g.bottom-g.top}
}},{}],801:[function(b,c,a){arguments[4][223][0].apply(a,arguments)},{"./ac-dom-traversal/ancestor":802,"./ac-dom-traversal/ancestors":803,"./ac-dom-traversal/children":804,"./ac-dom-traversal/filterBySelector":805,"./ac-dom-traversal/firstChild":806,"./ac-dom-traversal/lastChild":809,"./ac-dom-traversal/matchesSelector":810,"./ac-dom-traversal/nextSibling":811,"./ac-dom-traversal/nextSiblings":812,"./ac-dom-traversal/previousSibling":813,"./ac-dom-traversal/previousSiblings":814,"./ac-dom-traversal/querySelector":815,"./ac-dom-traversal/querySelectorAll":816,"./ac-dom-traversal/shims/ie":817,"./ac-dom-traversal/siblings":818}],802:[function(b,c,a){arguments[4][382][0].apply(a,arguments)
},{"./helpers/validate":808,"./matchesSelector":810,"ac-dom-nodes":674}],803:[function(b,c,a){arguments[4][383][0].apply(a,arguments)
},{"./helpers/validate":808,"./matchesSelector":810,"ac-dom-nodes":674}],804:[function(b,c,a){arguments[4][226][0].apply(a,arguments)
},{"./filterBySelector":805,"./helpers/validate":808,"ac-dom-nodes":674}],805:[function(b,c,a){arguments[4][227][0].apply(a,arguments)
},{"./helpers/validate":808,"./matchesSelector":810}],806:[function(b,c,a){arguments[4][228][0].apply(a,arguments)
},{"./children":804,"./helpers/validate":808}],807:[function(b,c,a){c.exports=b(229)
},{}],808:[function(b,c,a){arguments[4][230][0].apply(a,arguments)},{"ac-dom-nodes":674}],809:[function(b,c,a){arguments[4][231][0].apply(a,arguments)
},{"./children":804,"./helpers/validate":808}],810:[function(b,c,a){arguments[4][390][0].apply(a,arguments)
},{"./helpers/nativeMatches":807,"./helpers/validate":808,"./vendor/sizzle/sizzle":819,"ac-dom-nodes":674}],811:[function(b,c,a){arguments[4][233][0].apply(a,arguments)
},{"./helpers/validate":808,"./matchesSelector":810,"ac-dom-nodes":674}],812:[function(b,c,a){arguments[4][234][0].apply(a,arguments)
},{"./helpers/validate":808,"./matchesSelector":810,"ac-dom-nodes":674}],813:[function(b,c,a){arguments[4][235][0].apply(a,arguments)
},{"./helpers/validate":808,"./matchesSelector":810,"ac-dom-nodes":674}],814:[function(b,c,a){arguments[4][236][0].apply(a,arguments)
},{"./helpers/validate":808,"./matchesSelector":810,"ac-dom-nodes":674}],815:[function(b,c,a){arguments[4][237][0].apply(a,arguments)
},{"./helpers/validate":808}],816:[function(b,c,a){arguments[4][238][0].apply(a,arguments)
},{"./helpers/validate":808}],817:[function(b,c,a){arguments[4][397][0].apply(a,arguments)
},{"../helpers/validate":808,"../vendor/sizzle/sizzle":819,"ac-dom-nodes":674}],818:[function(b,c,a){arguments[4][240][0].apply(a,arguments)
},{"./children":804,"./helpers/validate":808}],819:[function(b,c,a){c.exports=b(46)
},{}],820:[function(b,c,a){c.exports.Slider=b("./ac-slider/Slider")},{"./ac-slider/Slider":821}],821:[function(f,d,h){var a=f("ac-dom-traversal");
var k=f("ac-dom-events");var j=f("ac-event-emitter");var b=f("ac-dom-metrics");
var c={min:0,max:1,step:1,value:0,orientation:"horizontal",template:'<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-thumb"></div>\n</div>'};
var l=Object.keys(c);var g=function(n,m){this.options=Object.assign({},c,m);this.model=Object.create(this.options);
this.el=n;n.className+=" ac-slider-container";n.innerHTML=this.model.template;this.initialize()
};g.prototype=Object.create(j.EventEmitter.prototype);var i=g.prototype;i.addEventListeners=function(){this.addEventListener(this.el,"mousedown",this.onMouseDown);
this.addEventListener(this.el,"touchstart",this.onTouchStart);this.addEventListener(this.el,"mouseover",this.onMouseOver);
this.addEventListener(this.el,"mouseleave",this.onMouseLeave);this.addEventListener(this.el,"touchend",this.onTouchEnd);
this.addEventListener(document,"touchend",this.onMouseUp)};i.addEventListener=k.addEventListener;
i.bindMethods=function(){this.onMouseDown=this.bindMethod(this.onMouseDown,this);
this.onTouchStart=this.bindMethod(this.onTouchStart,this);this.onMouseOver=this.bindMethod(this.onMouseOver,this);
this.onMouseLeave=this.bindMethod(this.onMouseLeave,this);this.onTouchEnd=this.bindMethod(this.onTouchEnd,this);
this.onMouseUp=this.bindMethod(this.onMouseUp,this);this.onMouseMove=this.bindMethod(this.onMouseMove,this);
this.onTouchMove=this.bindMethod(this.onTouchMove,this)};i.bindMethod=function(n,m){return n.bind(m)
};i.correctValueMinMax=function(o,n,m){if(o>m){o=m}if(o<n){o=n}return o};i.calculateStepsToValue=function(n,m){return Math.abs(n-m)
};i.calculateMaxSteps=function(n,m){return Math.abs(m-n)};i.calculateStepsEqualToPercentage=function(n,m){return(n/100)*m
};i.calculateNextStepInRange=function(s,n,m,r){var p=this.calculateMaxSteps(n,m);
var q=this.calculateStepsToValue(s,n);var o=n+(Math.floor(p/r)*r);s=Math.min(o,n+Math.round(q/r)*r);
return s};i.dispatchEvent=k.dispatchEvent;i.disableUserControls=function(){this.removeEventListeners()
};i.enableUserControls=function(){this.addEventListeners()};i.getNextValue=function(p,n,m,o){p=this.correctValueMinMax(p,n,m);
if(o!=="auto"){p=this.calculateNextStepInRange(p,n,m,o)}return p};i.getOrientation=function(){return this.model.orientation
};i.getValue=function(){return this.model.value};i.getMin=function(){return this.model.min
};i.getMax=function(){return this.model.max};i.getStep=function(){return this.model.step
};i.getClientXValue=function(u){var n=this.getClientXFromEvent(u);var v=b.getDimensions(this.thumbElement,true);
var o=b.getViewportPosition(this.thumbElement);var w=b.getDimensions(this.runnableTrackElement,true);
var m=b.getViewportPosition(this.runnableTrackElement);var q=n-this.runnableTrackElement.getBoundingClientRect().left-(v.width/2);
var t=w.width-v.width;var p=q/(t)*100;var r=this.calculateMaxSteps(this.getMin(),this.getMax());
var s=this.calculateStepsEqualToPercentage(p,r);return this.getMin()+s};i.getClientYValue=function(t){var m=this.getClientYFromEvent(t);
var v=b.getDimensions(this.thumbElement,true);var o=b.getViewportPosition(this.thumbElement);
var w=b.getDimensions(this.runnableTrackElement,true);var n=b.getViewportPosition(this.runnableTrackElement);
var s=w.height-v.height;var u=s-(m-this.runnableTrackElement.getBoundingClientRect().top-(v.height/2));
var p=u/(w.height-v.height)*100;var q=this.calculateMaxSteps(this.model.min,this.model.max);
var r=this.calculateStepsEqualToPercentage(p,q);return this.model.min+r};i.getClientValue=function(n){n=n.originalEvent||n;
var m;if(this.model.orientation==="horizontal"){m=this.getClientXValue(n)}else{m=this.getClientYValue(n)
}return m};i.getClientXFromEvent=function(m){return m.touches?m.touches[0].clientX:m.clientX
};i.getClientYFromEvent=function(m){return m.touches?m.touches[0].clientY:m.clientY
};i.initialize=function(){this.setNodeReferences();this.setValue(this.model.value);
this.bindMethods();this.addEventListeners()};i.onMouseLeave=function(){this.preventDocumentMouseUpDispatch=false
};i.onMouseDown=function(n){var m=this.getClientValue(n);this.addEventListener(document,"mouseup",this.onMouseUp);
this.addEventListener(document,"mousemove",this.onMouseMove);this.trigger("grab",this.getValue());
this.setValue(m)};i.onMouseUp=function(){this.removeEventListener(document,"mouseup",this.onMouseUp);
this.removeEventListener(document,"mousemove",this.onMouseMove);this.trigger("release",this.getValue());
if(!this.preventDocumentMouseUpDispatch){this.dispatchEvent(this.el,"mouseup")}};
i.onMouseOver=function(){this.preventDocumentMouseUpDispatch=true};i.onTouchEnd=function(){this.removeEventListener(document,"touchend",this.onTouchEnd);
this.removeEventListener(document,"touchmove",this.onTouchMove);this.trigger("release",this.getValue());
if(!this.preventDocumentMouseUpDispatch){this.dispatchEvent(this.el,"touchend")
}};i.onTouchStart=function(n){var m=this.getClientValue(n);this.addEventListener(document,"touchend",this.onMouseUp);
this.addEventListener(document,"touchmove",this.onTouchMove);this.trigger("grab",this.getValue());
this.setValue(m)};i.onMouseMove=function(n){var m=this.getClientValue(n);this.setValue(m)
};i.onTouchMove=function(n){if(n.preventDefault){n.preventDefault()}var m=this.getClientValue(n);
this.setValue(m)};i.getElementOrientationOffsetValue=function(n,m){if(m==="horizontal"){return b.getDimensions(n).width
}return b.getDimensions(n).height};i.getAvailableRunnableTrack=function(o,m){var n=this.getElementOrientationOffsetValue(this.thumbElement,m);
return o-n};i.getPercentageByValue=function(n,m){n=this.calculateStepsToValue(n,this.getMin());
m=this.calculateMaxSteps(this.getMin(),this.getMax());return(n/m)*100};i.getPercentageOfRunnableTrack=function(q){var n=this.getOrientation();
var r=this.getElementOrientationOffsetValue(this.runnableTrackElement,n);var m=this.getAvailableRunnableTrack(r,n);
var p=this.getPercentageByValue(q,this.getMax());var o=(p/100)*m;return(o/r)*100
};i.onChange=function(n){var m=this.getPercentageOfRunnableTrack(n);if(this.getOrientation()==="horizontal"){if(!isNaN(m)){this.thumbElement.style.left=m+"%"
}}else{if(!isNaN(m)){this.thumbElement.style.bottom=m+"%"}}this.trigger("change",this.getValue())
};i.removeEventListeners=function(){this.removeEventListener(this.el,"mousedown",this.onMouseDown);
this.removeEventListener(this.el,"touchstart",this.onTouchStart);this.removeEventListener(this.el,"mouseover",this.onMouseOver);
this.removeEventListener(this.el,"mouseleave",this.onMouseLeave);this.removeEventListener(this.el,"touchend",this.onTouchEnd);
this.removeEventListener(document,"touchend",this.onMouseUp)};i.removeEventListener=k.removeEventListener;
i.setNodeReferences=function(){this.runnableTrackElement=a.querySelector(".ac-slider-runnable-track",this.el);
this.thumbElement=a.querySelector(".ac-slider-thumb",this.el)};i.setOrientation=function(m){this.set("orientation",m)
};i.setValue=function(m){m=this.getNextValue(m,this.getMin(),this.getMax(),this.getStep());
this.set("value",m);this.onChange(m)};i.setMin=function(m){this.set("min",m)};i.setMax=function(m){this.set("max",m)
};i.setStep=function(m){this.set("step",m)};i.set=function(m,o){if(l.indexOf(m)>-1&&this.model[m]!==o){var n=this.model[m];
this.model[m]=o;this.trigger("change:model:"+m,{previous:n,current:o})}};d.exports=g
},{"ac-dom-events":788,"ac-dom-metrics":798,"ac-dom-traversal":801}],822:[function(b,c,a){c.exports=b(203)
},{"./ac-video-localization/localization":823}],823:[function(b,c,a){c.exports=b(204)
},{"./translations":824,"ac-mvc-model":718}],824:[function(b,c,a){c.exports=b(205)
},{}],825:[function(c,f,b){var h=c("./view");var g=c("./model");var d=c("./elements/element");
var a={create:function(j,l){j=j||{};l=l||{};j.elementClassPrefix=j.elementClassPrefix||"controls";
l.elementClassPrefix=j.elementClassPrefix;var k=this.Model(l);var i=this.View(Object.assign({},j,{model:k}));
i.initialize();return i},Model:g,View:h,element:d};f.exports=a},{"./elements/element":828,"./model":846,"./view":848}],826:[function(d,g,b){var c=d("ac-classlist");
var f=d("./element");var a=f.newType({className:"thirty-seconds-back-button",events:[{type:"click",callback:"thirySecondsBack"}],thirySecondsBack:function(){var i=this.player.getCurrentTime();
var h=i-30;this.player.setCurrentTime((h<0)?0:h)}});g.exports=a},{"./element":828,"ac-classlist":608}],827:[function(c,f,b){var d=c("./element");
var a=d.newType({className:"elapsed-time",_initialize:function(){this.options.model.on("change:elapsedTime",this._setElapsedTime,this)
},_setElapsedTime:function(g){this.el.innerHTML=g.value||g}});f.exports=a},{"./element":828}],828:[function(b,d,a){var c={className:"",create:function(h,g){var f=Object.create(this);
f.el=h;f.options=g;f.player=g.player;f._initialize();return f},events:[],newType:function(f){var g=Object.assign({},this,f);
return g},setElementAttributes:function(){this.elementAttributeString.forEach(function(f){var g;
if(typeof f==="string"){g=this._getLocalizationAttribute(f);this._setAttributeText(g)
}else{if(this[f.condition]()){g=this._getLocalizationAttribute(f.string);this._setAttributeText(g)
}}},this)},_getLocalizationAttribute:function(f){return this.options.model.get(f)
},_initialize:function(){this.elementAttributeString=this.elementAttributeString||[];
this.setElementAttributes()},_setAttributeText:function(f){["value","aria-label"].forEach(function(g){this.el.setAttribute(g,f)
},this)}};d.exports=c},{}],829:[function(b,a,d){var c=b("ac-classlist");var g=b("ac-fullscreen");
var i=b("ac-feature");var f=b("./element");var j=!i.isDesktop();var h=f.newType({className:"full-screen-button",events:[{type:"click",callback:"_toggleFullscreen"}],_exitFullscreen:function(k){g.exitFullscreen(k)
},_getFullScreenElement:function(){var k=false;if(this._isNotDesktop()){k=this.options.player.getMediaElement()
}return k||this.options.fullScreenElement||this.options.player.getMediaElement()
},_isFullScreen:function(k){return this._supportsFullscreen(k)},_initialize:function(){this.isFullScreen=false;
if(this._supportsFullscreen(this._getFullScreenElement())){this._removeFullscreenUnsupportedClass();
this._listenForFullscreenChange()}},_isNotDesktop:function(){return j},_listenForFullscreenChange:function(){g.on("enterfullscreen",this._onEnterFullScreen,this);
g.on("exitfullscreen",this._onExitFullScreen,this)},_onEnterFullScreen:function(){this.isFullScreen=true;
c.add(this.el,"is-fullscreen")},_onExitFullScreen:function(){this.isFullScreen=false;
c.remove(this.el,"is-fullscreen")},_requestFullscreen:function(k){g.requestFullscreen(k)
},_removeFullscreenUnsupportedClass:function(){c.remove(this.el,"fullscreen-unsupported")
},_supportsFullscreen:function(k){return g.fullscreenEnabled(k)},_toggleFullscreen:function(){var k=this._getFullScreenElement();
if(this.isFullScreen){this._exitFullscreen(k)}else{this._requestFullscreen(k)}}});
a.exports=h},{"./element":828,"ac-classlist":608,"ac-feature":769,"ac-fullscreen":302}],830:[function(b,d,a){var c=b("./element");
var f=c.newType({className:"max-volume-button",events:[{type:"click",callback:"maxVolume"}],maxVolume:function(){this.options.player.setMuted(false);
this.options.player.setVolume(1)}});d.exports=f},{"./element":828}],831:[function(c,f,b){var d=c("./element");
var a=d.newType({className:"min-volume-button",events:[{type:"click",callback:"minVolume"}],minVolume:function(){this.options.player.setMuted(false);
this.options.player.setVolume(0)}});f.exports=a},{"./element":828}],832:[function(c,f,b){var d=c("./element");
var a=d.newType({className:"mute-volume-button",events:[{type:"click",callback:"mute"}],mute:function(){this.options.player.setMuted(true)
}});f.exports=a},{"./element":828}],833:[function(b,d,a){var c=b("./element");var f=c.newType({className:"toggle-mute-volume-button",events:[{type:"click",callback:"toggleMutedVolume"}],toggleMutedVolume:function(){var g=this.options.player.getMuted()?false:true;
this.options.player.setMuted(g)}});d.exports=f},{"./element":828}],834:[function(b,d,a){var c=b("./element");
var f=c.newType({className:"pause-button",events:[{type:"click",callback:"pause"}],pause:function(){this.options.player.pause()
}});d.exports=f},{"./element":828}],835:[function(b,d,a){var c=b("./element");var f=c.newType({className:"play-button",events:[{type:"click",callback:"play"}],play:function(){this.options.player.play()
}});d.exports=f},{"./element":828}],836:[function(c,f,a){var b=c("ac-classlist");
var d=c("./element");var g=d.newType({className:"play-pause-button",events:[{type:"click",callback:"playPauseToggle"}],elementAttributeString:[{condition:"playerIsPlaying",string:"pause"},{condition:"playerIsPaused",string:"play"}],playerIsPlaying:function(){return !this.player.getPaused()
},playerIsPaused:function(){return this.player.getPaused()},playPauseToggle:function(){if(this.player.getPaused()){this.player.play()
}else{this.player.pause()}},_addEventListeners:function(){this.player.on("play pause",this._handleStateChange,this)
},_handleStateChange:function(){this._toggleIsPlayingClass();this.setElementAttributes()
},_initialize:function(){d._initialize.call(this);this._addEventListeners();this._handleStateChange()
},_toggleIsPlayingClass:function(){var h=this.player.getPaused()?"remove":"add";
b[h](this.el,"is-playing")}});f.exports=g},{"./element":828,"ac-classlist":608}],837:[function(f,d,i){var j=f("./element");
var h=f("ac-classlist");var a=f("ac-dom-traversal");var k=f("ac-dom-events");var l=f("ac-slider");
var b=f("../mixins/get-model-attribute");var c=f("../mixins/cursor-pointer");var g=j.newType(Object.assign({className:"progress-indicator",_bindSetupElement:function(){return this._setupElement.bind(this)
},_getCurrentTime:function(m){return(m&&m.value)?m.value:this.polyfilledEl.getValue()
},_getSliderInstance:function(){return new l.Slider(this.el,{template:'<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-inner-track">\n\t\t<div class="ac-slider-thumb">\n\t\t\t<div class="ac-slider-thumb-background"></div>\n\t\t\t<div class="ac-slider-scrubbed"></div>\n\t\t</div>\n\t</div>\n</div>\n<input class="ac-slider-input-type-range" type="range" value="0" step="1" min="0" max="1"  />',min:0,max:+this.options.model.get("duration"),step:isNaN(+this.el.getAttribute("step"))?this.el.getAttribute("step"):+this.el.getAttribute("step"),value:+this.el.getAttribute("value")})
},_handleProgressIndicatorChange:function(m){this.options.model.set({timeupdate:this._getCurrentTime(m)})
},_initialize:function(){j._initialize.call(this);this._setupElement=this._bindSetupElement();
this.getModelAttribute("duration").then(this._setupElement)},_onGrab:function(){this.options.model.set({ignoreTimeupdate:true});
this.options.player.off("timeupdate",this._setIndicatorValue);this.polyfilledEl.on("change",this._setModelValue,this);
this.forceCursorPointer()},_onRelease:function(){this._setPlayerValue();this.options.model.set({ignoreTimeupdate:false});
this.options.player.on("timeupdate",this._setIndicatorValue,this);this.polyfilledEl.off("change",this._setModelValue);
this.disableForcedCursorPointer()},_onPlayerDurationChange:function(){if(!isNaN(this.options.player.getDuration())){this.polyfilledEl.setMax(this.options.player.getDuration())
}},_polyfillRangeInput:function(){this.polyfilledEl=this._getSliderInstance();this.thumbEl=a.querySelector(".ac-slider-thumb",this.el);
this.scrubbedEl=a.querySelector(".ac-slider-scrubbed",this.el)},_setIndicatorValue:function(){var m=this.options.player.getCurrentTime();
this.polyfilledEl.setValue(m)},_setPlayerValue:function(){var m=this.polyfilledEl.getValue();
this.options.player.setCurrentTime(m)},_setModelValue:function(){var m=this.polyfilledEl.getValue();
this.options.model.set({timeupdate:m})},_setupElement:function(m){this.el.setAttribute("max",m);
this._polyfillRangeInput();this.el.setAttribute("aria-valuemax",this.polyfilledEl.getMax());
this.polyfilledEl.on("change:model:max",function(){this.el.setAttribute("aria-valuemax",this.polyfilledEl.getMax())
},this);this.polyfilledEl.on("change:model:value",function(){this.el.setAttribute("aria-valuenow",this.polyfilledEl.getValue())
},this);this.el.setAttribute("aria-valuemin",this.polyfilledEl.getMin());this.polyfilledEl.on("change:model:min",function(){this.el.setAttribute("aria-valuemin",this.polyfilledEl.getMin())
},this);this.options.player.on("timeupdate",this._setIndicatorValue,this);this.polyfilledEl.on("grab",this._onGrab,this);
this.polyfilledEl.on("release",this._onRelease,this);this.options.player.on("durationchange",this._onPlayerDurationChange,this)
}},b,c));d.exports=g},{"../mixins/cursor-pointer":844,"../mixins/get-model-attribute":845,"./element":828,"ac-classlist":608,"ac-dom-events":650,"ac-dom-traversal":18,"ac-slider":820}],838:[function(c,g,a){var f=c("./element");
var b=c("../mixins/get-model-attribute");var d=f.newType(Object.assign({},{className:"remaining-time",_bindUpdateRemainingTimeIndicator:function(){return this._updateRemainingTimeIndicator.bind(this)
},_initialize:function(){this._updateRemainingTimeIndicator=this._bindUpdateRemainingTimeIndicator();
this.options.model.on("change:remainingTime",this._updateRemainingTimeIndicator,this);
this.getModelAttribute("remainingTime").then(this._updateRemainingTimeIndicator)
},_updateRemainingTimeIndicator:function(h){this.el.innerHTML=h.value||h}},b));
g.exports=d},{"../mixins/get-model-attribute":845,"./element":828}],839:[function(c,d,b){var a=c("./text-tracks");
var f=a.newType({className:"text-tracks-off-button",events:[{type:"click",callback:"textTracksOff"}],elementAttributeString:["captionsturnedoff"]});
d.exports=f},{"./text-tracks":842}],840:[function(d,f,b){var a=d("./text-tracks");
var c=a.newType({className:"text-tracks-on-button",events:[{type:"click",callback:"textTracksOn"}],elementAttributeString:["captionsturnedon"]});
f.exports=c},{"./text-tracks":842}],841:[function(d,f,b){var c=d("ac-classlist");
var a=d("./text-tracks");var g=a.newType({className:"text-tracks-toggle-button",events:[{type:"click",callback:"textTracksToggle"}],textTracksToggle:function(){var h=this._getTextTrackModeAndIndex();
var i=h.get("mode");if(i==="showing"){this.textTracksOff()}else{this.textTracksOn()
}},elementAttributeString:[{condition:"textTracksAreShowing",string:"captionsturnedoff"},{condition:"textTracksAreDisabled",string:"captionsturnedon"}],textTracksAreShowing:function(){return this.player.getVisibleTextTracks().models.length>0
},textTracksAreDisabled:function(){return this.player.getVisibleTextTracks().models.length===0
},_addEventListeners:function(){a._addEventListeners.call(this);this.player.on("texttrackshow texttrackhide",this.setElementAttributes,this)
}});f.exports=g},{"./text-tracks":842,"ac-classlist":608}],842:[function(f,h,c){var d=f("ac-classlist");
var g=f("./element");var a={on:"showing",off:"disabled"};var i={visible:"text-tracks-visible",none:"no-text-tracks"};
var b=g.newType({onTextTracksVisible:function(){d.add(this.el,i.visible)},onTextTracksHidden:function(){d.remove(this.el,i.visible)
},textTracksOn:function(){var j=this._getTextTrackModeAndIndex();j.show()},textTracksOff:function(){var j=this._getTextTrackModeAndIndex();
j.hide()},_addEventListeners:function(){var j=this._getTextTrackModeAndIndex();
this.player.on("texttrackshow",this.onTextTracksVisible,this);this.player.on("texttrackhide",this.onTextTracksHidden,this);
this.options.model.on("change:localization",this.setElementAttributes,this)},_addTextTrackClass:function(){var j=this.player.getEnabledTextTracks().models;
if(j.length){this._removeNoTextTracksClass();if(this.player.getVisibleTextTracks().models.length){this.onTextTracksVisible()
}else{this.onTextTracksHidden()}}else{this._addNoTextTracksClass()}},_addNoTextTracksClass:function(){d.add(this.el,i.none)
},_getTextTrackModeAndIndex:function(){var j=this.player.getVisibleTextTracks().at(0);
if(!j){j=this.player.getEnabledTextTracks().at(0)}return j},_initialize:function(){g._initialize.call(this);
this._addTextTrackClass();this._addEventListeners()},_removeNoTextTracksClass:function(){d.remove(this.el,i.none)
},_toggleTextTracksVisibleClass:function(j){var k=j?"onTextTracksHidden":"onTextTracksVisible";
this[k]()},_toggleNoTextTracksClass:function(j){var k=j?"_removeNoTextTracksClass":"_addNoTextTracksClass";
this[k]()}});h.exports=b},{"./element":828,"ac-classlist":608}],843:[function(f,d,h){var i=f("./element");
var g=f("ac-classlist");var j=f("ac-dom-events");var k=f("ac-slider");var a=f("ac-dom-traversal");
var b=f("../mixins/get-model-attribute");var c=f("../mixins/cursor-pointer");var l=i.newType(Object.assign({className:"volume-level-indicator",events:[{type:"change",callback:"handleVolumeIndicatorChange"}],handleVolumeIndicatorChange:function(n){this._unmute();
var m=this._getVolume(n);this._setVolume(m)},ignoreVolumechange:function(m){this.options.model.set({ignoreVolumechange:true});
this._stopListeningForVolumechange();this.forceCursorPointer()},setVolumeOnMove:function(){this._setVolume(this._getVolume())
},_bindResumeVolumechange:function(){return this._resumeVolumechange.bind(this)
},_bindSetupElement:function(){return this._setupElement.bind(this)},_bindHandleVolumeIndicatorChange:function(){return this.handleVolumeIndicatorChange.bind(this)
},_getVolume:function(m){return(m&&m.value)?m.value:this.polyfilledEl.getValue()
},_getSliderInstance:function(){var m=this.options.player.getVolume();if(this.options.player.getMuted()===true){m=0
}return new k.Slider(this.el,{template:'<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-thumb">\n\t\t<div class="ac-slider-thumb-background"></div>\n\t</div>\n\t<div class="ac-slider-inner-track">\n\t\t<div class="ac-slider-scrubbed"></div>\n\t</div>\n</div>\n<input class="ac-slider-input-type-range" type="range" value="0" step="1" min="0" max="1"  />',min:0,max:1,step:+this.el.getAttribute("step"),value:m})
},_initialize:function(){i._initialize.call(this);this.handleVolumeIndicatorChange=this._bindHandleVolumeIndicatorChange();
this._resumeVolumechange=this._bindResumeVolumechange();this._setupElement=this._bindSetupElement();
this.getModelAttribute("volume").then(this._setupElement)},_listenForVolumechange:function(m){this.options.model.on("change:volume",this._updateVolumeIndicator,this);
this.polyfilledEl.off("release",this._resumeVolumechange);this.polyfilledEl.off("change",this.handleVolumeIndicatorChange);
this.polyfilledEl.on("grab",this.ignoreVolumechange,this)},_polyfillRangeInput:function(){this.polyfilledEl=this._getSliderInstance();
this.scrubbed=a.querySelector(".ac-slider-scrubbed",this.el);this.thumb=a.querySelector(".ac-slider-thumb",this.el);
this.polyfilledEl.on("change",function(){this.scrubbed.style.marginLeft=parseInt(this.thumb.style.left,10)+(((this.thumb.offsetWidth/2)/this.el.offsetWidth)*100)+"%"
},this);this.polyfilledEl.trigger("change",this.polyfilledEl.getValue())},_resumeVolumechange:function(m){this.options.model.set({ignoreVolumechange:false});
this._listenForVolumechange();this._setVolume(this._getVolume());this.disableForcedCursorPointer()
},_setVolume:function(m){this._unmute();this.options.player.setVolume(m)},_setupElement:function(m){this.el.setAttribute("value",m);
this._polyfillRangeInput();this._listenForVolumechange()},_stopListeningForVolumechange:function(){this.options.model.off("change:volume",this._updateVolumeIndicator,this);
this.polyfilledEl.on("release",this._resumeVolumechange,this);this.polyfilledEl.on("change",this.handleVolumeIndicatorChange,this);
this.polyfilledEl.off("grab",this.ignoreVolumechange)},_toggleVolumeLevelIndicator:function(m){g.toggle(this.el,"is-visible")
},_updateVolumeIndicator:function(n){var m=(n&&n.value!==null)?n.value:this.options.player.getVolume();
this.polyfilledEl.setValue(m)},_unmute:function(){if(this.options.player.getMuted()){this.options.player.setMuted(false)
}}},b,c));d.exports=l},{"../mixins/cursor-pointer":844,"../mixins/get-model-attribute":845,"./element":828,"ac-classlist":608,"ac-dom-events":650,"ac-dom-traversal":18,"ac-slider":820}],844:[function(c,d,a){var b=c("ac-classlist");
var f=c("ac-dom-events");var g="cursor-pointer";d.exports={disableForcedCursorPointer:function(){b.remove(document.body,g);
this.onSelectStartResumeDefault()},forceCursorPointer:function(){b.add(document.body,g);
this.onSelectStartPreventDefault()},onSelectStartResumeDefault:function(){f.removeEventListener(document,"selectstart",this.preventDefault)
},onSelectStartPreventDefault:function(){f.addEventListener(document,"selectstart",this.preventDefault)
},preventDefault:function(h){f.preventDefault(h)}}},{"ac-classlist":608,"ac-dom-events":650}],845:[function(b,c,a){c.exports={getModelAttribute:function(d){return new Promise(function(g,f){if(this.options.model.has(d)){g(this.options.model.get(d))
}else{this.options.model.once("change:"+d,function(h){g(h.value)},this)}}.bind(this))
}}},{}],846:[function(c,d,a){var b=c("ac-mvc-model").Model;var h=c("ac-video-localization").localization;
var g=function(i){if(!(this instanceof g)){return new g(i)}b.apply(this,arguments);
this.initialize()};g.prototype=Object.create(b.prototype);var f=g.prototype;Object.assign(f,{defaultAttributes:{backthirtyseconds:"Back 30 Seconds",playpause:"Play/Pause",play:"Play",pause:"Pause",togglemutevolume:"Toggle Mute Volume",mutevolume:"Mute Volume",minvolume:"Min Volume",adjustvolume:"Adjust Volume",fastreverse:"Fast Reverse",fastforward:"Fast Forward",fullvolume:"Full Volume",fullscreen:"Full Screen",captionscontrol:"Closed Captions",captionsturnedon:"Closed Captions On",captionsturnedoff:"Closed Captions Off",subtitlescontrol:"Subtitles",subtitlesturnedon:"Subtitles On",subtitlesturnedoff:"Subtitles Off",sizescontrol:"Video Size",downloadcontrol:"Download Video",small:"Small",medium:"Medium",large:"Large",hd:"HD",ipod:"iPod/iPhone",mb:"MB",gb:"GB",tb:"TB",downloadquicktimetitle:"Get QuickTime.",downloadquicktimetext:"Download QuickTime to view this video. QuickTime is free for Mac + PC.",downloadquicktimebutton:"Download",downloadquicktimeurl:"https://www.apple.com/quicktime/download/",elapsed:"elapsed",remaining:"remaining"},getLocalizationPromise:function(){return h.create()
},initialize:function(){this.localize=this._bindLocalize();this.getLocalizationPromise().then(this.localize)
},localize:function(i){this.set(i.attributes);this.trigger("change:localization")
},_bindLocalize:function(){return this.localize.bind(this)}});d.exports=g},{"ac-mvc-model":718,"ac-video-localization":822}],847:[function(c,d,a){var b=c("ac-string");
var f={addLeadingZero:function(h,g){g=g||2;if(h<10||g>2){h=String(h);while(h.length<g){h="0"+h
}}return h},formatTime:function(j,g){if(isNaN(j)){return"00:00"}j=this.splitTime(Math.floor(j),function(k){return this.addLeadingZero(k,g)
}.bind(this));var h="{PN}{minutes}:{seconds}";var i=b.supplant(h,{PN:j.negativeModifier,minutes:j.minutes,seconds:j.seconds});
return i},splitTime:function(j,g){g=g||function(k){return k};var i={negativeModifier:"",minutes:0,seconds:0};
if(isNaN(j)){return i}i.negativeModifier=(j<0)?"-":"";j=Math.abs(j);i.minutes=Math.floor(j/60);
i.seconds=(j%60);for(var h in i){if(typeof i[h]!=="number"){continue}i[h]=g(i[h])
}return i}};d.exports=f},{"ac-string":572}],848:[function(g,d,j){var b=g("ac-dom-traversal");
var h=g("ac-string");var i=g("ac-classlist");var l=g("ac-mvc-view").View;var f=g("./time");
var a={"back-30-seconds-button":g("./elements/back-30-seconds-button"),"elapsed-time-indicator":g("./elements/elapsed-time-indicator"),element:g("./elements/element"),"full-screen-button":g("./elements/full-screen-button"),"max-volume-button":g("./elements/max-volume-button"),"min-volume-button":g("./elements/min-volume-button"),"mute-button":g("./elements/mute-button"),"mute-toggle-button":g("./elements/mute-toggle-button"),"pause-button":g("./elements/pause-button"),"play-button":g("./elements/play-button"),"play-pause-button":g("./elements/play-pause-button"),"progress-indicator":g("./elements/progress-indicator"),"remaining-time-indicator":g("./elements/remaining-time-indicator"),"text-tracks-off-button":g("./elements/text-tracks-off-button"),"text-tracks-on-button":g("./elements/text-tracks-on-button"),"text-tracks-toggle-button":g("./elements/text-tracks-toggle-button"),"text-tracks":g("./elements/text-tracks"),"volume-level-indicator":g("./elements/volume-level-indicator")};
var c=function(m){if(!(this instanceof c)){return new c(m)}l.apply(this,arguments);
this.elements=[]};c.prototype=Object.create(l.prototype);var k=c.prototype;Object.assign(k,{className:"ac-video-controls",initialize:function(){this._addInactiveClasses();
if(this.options.player){this._onPlayerReady=this._bindOnPlayerReady();this.playerIsReady(this.options.player).then(this._onPlayerReady)
}this.options.model.once("change:localization",this.render,this);this.options.model.on("change:timeupdate",this._onModelTimeUpdate,this)
},playerIsReady:function(o){var m=o.getReadyState();var n=o.getPreload();return new Promise(function(q,p){if(m===4){q()
}else{if(n==="metadata"){if(m===3){q()}else{o.on("loadedmetadata",q)}}else{o.on("canplay",q)
}}})},render:function(){this.el.innerHTML=this._getParsedTemplate(this.model.attributes);
i.add(this.el,this.className);i.add(this.el,this._getSkin());if(this._getSkin()===this._defaultSkin){this.el.setAttribute("data-hires","false")
}this._onRender().resolve()},_addInactiveClasses:function(){i.add(this.el,"inactive")
},_bindSetupElements:function(){return this._setupElements.bind(this)},_bindOnPlayerReady:function(){return this._onPlayerReady.bind(this)
},_currentTimeIsWholeNumber:function(m){m=Math.floor(m);if(m===0){return true}if(m!==this._previousCurrentTime){this._previousCurrentTime=m;
return true}},_defaultTemplate:'<div class="left row-1">\n\t<input type="button" class="{elementClassPrefix}-min-volume-button {elementClassPrefix}-button" value="{minvolume}" aria-label="{minvolume}" role="button" tabindex="0">\n\t<div class="{elementClassPrefix}-volume-level-indicator" max="1" step="0.09090909090909091"></div>\n\t<input type="button" class="{elementClassPrefix}-max-volume-button {elementClassPrefix}-button" value="{fullvolume}" aria-label="{fullvolume}" role="button" tabindex="0">\n</div>\n\n<div class="center row-1">\n\t<input type="button" class="{elementClassPrefix}-play-pause-button {elementClassPrefix}-button" value="{playpause}" aria-label="{playpause}" role="button" tabindex="0">\n</div>\n\n<div class="right row-1">\n\t<input type="button" class="{elementClassPrefix}-text-tracks-toggle-button {elementClassPrefix}-button no-text-tracks" value="{textTrackscontrol}" aria-label="{textTrackscontrol}" role="button" tabindex="0">\n\t<input type="button" class="{elementClassPrefix}-full-screen-button {elementClassPrefix}-button fullscreen-unsupported" value="{fullscreen}" aria-label="{fullscreen}" role="button" tabindex="0">\n</div>\n\n<div class="left row-2">\n\t<div class="{elementClassPrefix}-elapsed-time-indicator">\n\t\t<span class="label">{elapsed}</span>\n\t\t<span class="{elementClassPrefix}-elapsed-time" aria-label="{elapsed}" tabindex="0" role="timer" aria-value="00:00">00:00</span>\n\t</div>\n</div>\n\n<div class="center row-2">\n\t<div class="{elementClassPrefix}-buffered-indicator"></div>\n\t<div class="{elementClassPrefix}-progress-indicator" aria-label="progress-indicator" role="progressbar" precision="float" min="0" max="{max}" step="auto" value="0" tabindex="0" aria-valuemax="{max}" aria-valuemin="{min}" aria-valuenow="{value}"></div>\n</div>\n\n<div class="right row-2">\n\t<div class="{elementClassPrefix}-remaining-time-indicator">\n\t<span class="label">{remaining}</span>\n\t<span class="{elementClassPrefix}-remaining-time" aria-label="{remaining}" tabindex="0" role="timer" aria-value="-00:00">-00:00</span>\n</div>\n</div>\n\n<div class="{elementClassPrefix}-inactive-container"></div>',_defaultSkin:"control-bar-skin-default",_getPromise:function(){var n;
var m;var o;o=new Promise(function(q,p){n=q;m=p});o.resolve=n;o.reject=m;return o
},_getSkin:function(){return this.options.skin||this._defaultSkin},_getCurrentTime:function(m){return(m&&m.value)?m.value:this.options.player.getCurrentTime()
},_getParsedTemplate:function(n){var m=this.options.template||this._defaultTemplate;
return h.supplant(m,n)},_listenToModelVolumechange:function(){this.options.player.off("volumechange",this._onVolumeChange);
this.options.model.on("change:volume",this._onVolumeChange,this)},_listenToPlayerForVolumechange:function(){this.options.player.on("volumechange",this._onVolumeChange,this);
this.options.model.off("change:volume",this._onVolumeChange);this.options.player.setVolume(this.options.model.get("volume"))
},_onRender:function(){if(!this._onRenderPromise){this._onRenderPromise=this._getPromise()
}return this._onRenderPromise},_onModelTimeUpdate:function(m){if(this._currentTimeIsWholeNumber(m.value)){this._setModelRemainingAndElapsedTime(m.value)
}},_onPlayerTimeUpdate:function(){if(!this.options.model.get("ignoreTimeupdate")){var m=this.options.player.getCurrentTime();
this.options.model.set({timeupdate:m})}},_onPlayerReady:function(){this._setupElements=this._bindSetupElements();
this._onRender().then(this._setupElements);this.options.player.on("durationchange",this._onPlayerDurationChange,this);
this._onVolumeChange();this._onTimeupdate();this._removeInactiveClasses();this._onPlayerDurationChange();
this.options.player.on("timeupdate",this._onPlayerTimeUpdate,this);this._onVolumeChangeEvents()
},_onVolumeChangeEvents:function(){this.options.model.on("change:ignoreVolumechange",this._onModelIgnoreVolumechange,this);
this.options.player.on("volumechange loadedmetadata",this._onVolumeChange,this)
},_onVolumeChange:function(n){n=n||{};var m=n.value||this.options.player.getVolume();
this.options.model.set({volume:m})},_onTimeupdate:function(n){var m=this._getCurrentTime(n);
if(this._currentTimeIsWholeNumber(m)){this._setModelRemainingAndElapsedTime(m)}},_onModelIgnoreVolumechange:function(m){if(m.value){this._listenToModelVolumechange()
}else{this._listenToPlayerForVolumechange()}},_onPlayerDurationChange:function(){this.options.model.set({duration:this.options.player.getDuration()});
this._onTimeupdate()},_removeInactiveClasses:function(){i.remove(this.el,"inactive")
},_setupElements:function(){var m;for(var o in a){try{if(o.match(/^element$|^time$|^text-tracks$/)){continue
}m=b.querySelector("."+this.options.elementClassPrefix+"-"+a[o].className,this.el);
if(m){m=a[o].create(m,this.options);this.elements.push(m);if(m.events){this._setupElementEvents(m)
}}}catch(n){console.log("ERROR: ",o,n)}}},_setModelRemainingAndElapsedTime:function(o){var p=this.options.player.getDuration();
var n=f.formatTime(o-Math.floor(p));var m=f.formatTime(o);this.options.model.set({remainingTime:n,elapsedTime:m})
},_setupElementEvents:function(p){for(var o=0,m=p.events.length,n,r,q;o<m;o++){n=p.events[o];
r=p[n.callback];q=n.delegate||"."+this.options.elementClassPrefix+"-"+p.className;
this.on(n.type,q,r,p)}}});d.exports=c},{"./elements/back-30-seconds-button":826,"./elements/elapsed-time-indicator":827,"./elements/element":828,"./elements/full-screen-button":829,"./elements/max-volume-button":830,"./elements/min-volume-button":831,"./elements/mute-button":832,"./elements/mute-toggle-button":833,"./elements/pause-button":834,"./elements/play-button":835,"./elements/play-pause-button":836,"./elements/progress-indicator":837,"./elements/remaining-time-indicator":838,"./elements/text-tracks":842,"./elements/text-tracks-off-button":839,"./elements/text-tracks-on-button":840,"./elements/text-tracks-toggle-button":841,"./elements/volume-level-indicator":843,"./time":847,"ac-classlist":608,"ac-dom-traversal":18,"ac-mvc-view":749,"ac-string":572}],849:[function(b,c,a){c.exports={path:b("./ac-path/path")}
},{"./ac-path/path":850}],850:[function(b,c,a){function d(f){return d.parse(f)}d.basename=function(g,f){d._assertStr(g);
var i;var h=g.match(/[^/]*$/)[0];if(f){i=h.match(new RegExp("(.*)"+f+"$"));if(i){h=i[1]
}}return h};d.dirname=function(g){d._assertStr(g);var f=g.match(/^(.*)\b\/|.*/);
return f[1]||g};d.extname=function(f){d._assertStr(f);var g=f.match(/\.[^.]*$/);
return g?g[0]:""};d.filename=function(f){d._assertStr(f);return d.basename(f,d.extname(f))
};d.format=function(g,h){d._assertObj(g);var f=(g.dirname)?g.dirname+"/":"";if(g.basename){f+=g.basename
}else{if(g.filename){f+=g.filename;if(g.extname){f+=g.extname}}}if(h){if(typeof h==="string"){f+="?"+h
}else{if(Object.prototype.toString.call(h)===Object.prototype.toString.call([])){f+="?"+h.join("&")
}}}return f};d.isAbsolute=function(f){d._assertStr(f);return(!!f.match(/(^http(s?))/))
};d.isRootRelative=function(f){d._assertStr(f);return !!f.match(/^\/(?!\/)/)};d.parse=function(f){d._assertStr(f);
return{dirname:d.dirname(f),basename:d.basename(f),filename:d.filename(f),extname:d.extname(f)}
};d._assertStr=function(f){d._assertType(f,"string")};d._assertObj=function(f){d._assertType(f,"object")
};d._assertType=function(h,f){var g=typeof h;if(g==="undefined"||g!==f){throw new TypeError("path param must be of type "+f)
}};c.exports=d},{}],851:[function(b,c,a){c.exports={cname:b("./ac-cname/cname")}
},{"./ac-cname/cname":852}],852:[function(c,d,a){var f=c("ac-path").path;function b(g){return b.addPrefix(g)
}b._prefix=(function(){var g="/global/elements/blank.gif";return g.replace(/global\/.*/,"")
}());b.addPrefix=function(g){if(f.isAbsolute(g)){return g}b._assertRootRelative(g);
g=b._prefix+g.replace(/^\//,"");g=g.replace(/(^.+)(\/105\/)/,"$1/");return g};b.formatUrl=function(j,g,l,k){var i=f.format({dirname:j,filename:g,extname:l},k);
if(f.isAbsolute(i)){return i}b._assertRootRelative(j);var h=b.addPrefix(i);return h
};b._assertRootRelative=function(g){if(!f.isRootRelative(g)){throw new URIError("Only root-relative paths are currently supported")
}};d.exports=b},{"ac-path":849}],853:[function(b,c,a){var g=b("./helpers/globals");
var f=b("ac-function/once");var d=function(){var h=g.getDocument();var i=h.createElement("canvas");
return !!(typeof i.getContext==="function"&&i.getContext("2d"))};c.exports=f(d);
c.exports.original=d},{"./helpers/globals":861,"ac-function/once":875}],854:[function(c,d,b){var h=c("ac-browser");
var a=c("./touchAvailable").original;var f=c("ac-function/once");function g(){return(!a()||(h.os==="iOS"&&h.version>=8)||h.name==="Chrome")
}d.exports=f(g);d.exports.original=g},{"./touchAvailable":891,"ac-browser":870,"ac-function/once":875}],855:[function(c,d,b){var g=c("./helpers/globals");
var f=c("ac-function/once");function a(){var k=false;var h=g.getDocument();var j=g.getNavigator();
try{if("cookie" in h&&!!j.cookieEnabled){h.cookie="ac_feature_cookie=1";k=(h.cookie.indexOf("ac_feature_cookie")!==-1);
h.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}catch(i){}return k
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":861,"ac-function/once":875}],856:[function(c,d,b){var g=c("ac-prefixer/getStyleValue");
var f=c("ac-function/once");function a(){var h=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
return h.some(function(i){return !!g("background-image",i)})}d.exports=f(a);d.exports.original=a
},{"ac-function/once":875,"ac-prefixer/getStyleValue":879}],857:[function(c,d,b){var g=c("ac-prefixer/getStyleValue");
var f=c("ac-prefixer/getStyleProperty");var h=c("ac-function/memoize");function a(j,i){if(typeof i!=="undefined"){return !!g(j,i)
}else{return !!f(j)}}d.exports=h(a);d.exports.original=a},{"ac-function/memoize":874,"ac-prefixer/getStyleProperty":878,"ac-prefixer/getStyleValue":879}],858:[function(b,c,a){var f=b("ac-prefixer/getStyleValue");
var d=b("ac-function/once");function g(){return !!f("margin","1vw 1vh")}c.exports=d(g);
c.exports.original=g},{"ac-function/once":875,"ac-prefixer/getStyleValue":879}],859:[function(b,d,a){var f=b("./helpers/globals");
var g=b("ac-function/memoize");function c(h,j){var i=f.getDocument();var k;j=j||"div";
k=i.createElement(j);return(h in k)}d.exports=g(c);d.exports.original=c},{"./helpers/globals":861,"ac-function/memoize":874}],860:[function(c,f,b){var a=c("ac-prefixer/getEventType");
var g=c("ac-function/memoize");function d(i,h){return !!a(i,h)}f.exports=g(d);f.exports.original=d
},{"ac-function/memoize":874,"ac-prefixer/getEventType":877}],861:[function(b,c,a){c.exports=b(89)
},{}],862:[function(b,c,a){c.exports={canvasAvailable:b("./canvasAvailable"),continuousScrollEventsAvailable:b("./continuousScrollEventsAvailable"),cookiesAvailable:b("./cookiesAvailable"),cssLinearGradientAvailable:b("./cssLinearGradientAvailable"),cssPropertyAvailable:b("./cssPropertyAvailable"),cssViewportUnitsAvailable:b("./cssViewportUnitsAvailable"),elementAttributeAvailable:b("./elementAttributeAvailable"),eventTypeAvailable:b("./eventTypeAvailable"),isDesktop:b("./isDesktop"),isHandheld:b("./isHandheld"),isRetina:b("./isRetina"),isTablet:b("./isTablet"),localStorageAvailable:b("./localStorageAvailable"),mediaElementsAvailable:b("./mediaElementsAvailable"),mediaQueriesAvailable:b("./mediaQueriesAvailable"),sessionStorageAvailable:b("./sessionStorageAvailable"),svgAvailable:b("./svgAvailable"),threeDTransformsAvailable:b("./threeDTransformsAvailable"),touchAvailable:b("./touchAvailable"),webGLAvailable:b("./webGLAvailable")}
},{"./canvasAvailable":853,"./continuousScrollEventsAvailable":854,"./cookiesAvailable":855,"./cssLinearGradientAvailable":856,"./cssPropertyAvailable":857,"./cssViewportUnitsAvailable":858,"./elementAttributeAvailable":859,"./eventTypeAvailable":860,"./isDesktop":863,"./isHandheld":864,"./isRetina":865,"./isTablet":866,"./localStorageAvailable":867,"./mediaElementsAvailable":868,"./mediaQueriesAvailable":869,"./sessionStorageAvailable":888,"./svgAvailable":889,"./threeDTransformsAvailable":890,"./touchAvailable":891,"./webGLAvailable":892}],863:[function(d,f,b){var a=d("./touchAvailable").original;
var h=d("./helpers/globals");var g=d("ac-function/once");function c(){var i=h.getWindow();
return(!a()&&!i.orientation)}f.exports=g(c);f.exports.original=c},{"./helpers/globals":861,"./touchAvailable":891,"ac-function/once":875}],864:[function(f,g,c){var d=f("./isDesktop").original;
var a=f("./isTablet").original;var h=f("ac-function/once");function b(){return(!d()&&!a())
}g.exports=h(b);g.exports.original=b},{"./isDesktop":863,"./isTablet":866,"ac-function/once":875}],865:[function(b,c,a){var d=b("./helpers/globals");
c.exports=function f(){var g=d.getWindow();return("devicePixelRatio" in g&&g.devicePixelRatio>=1.5)
}},{"./helpers/globals":861}],866:[function(f,g,c){var d=f("./isDesktop").original;
var i=f("./helpers/globals");var h=f("ac-function/once");var b=600;function a(){var k=i.getWindow();
var j=k.screen.width;if(k.orientation&&k.screen.height<j){j=k.screen.height}return(!d()&&j>=b)
}g.exports=h(a);g.exports.original=a},{"./helpers/globals":861,"./isDesktop":863,"ac-function/once":875}],867:[function(c,d,a){var g=c("./helpers/globals");
var f=c("ac-function/once");function b(){var j=g.getWindow();var i=false;try{i=!!(j.localStorage&&j.localStorage.non_existent!==null)
}catch(h){}return i}d.exports=f(b);d.exports.original=b},{"./helpers/globals":861,"ac-function/once":875}],868:[function(b,c,a){var g=b("./helpers/globals");
var d=b("ac-function/once");function f(){var h=g.getWindow();return("HTMLMediaElement" in h)
}c.exports=d(f);c.exports.original=f},{"./helpers/globals":861,"ac-function/once":875}],869:[function(c,d,b){c("ac-polyfills/matchMedia");
var g=c("./helpers/globals");var f=c("ac-function/once");function a(){var i=g.getWindow();
var h=i.matchMedia("only all");return !!(h&&h.matches)}d.exports=f(a);d.exports.original=a
},{"./helpers/globals":861,"ac-function/once":875,"ac-polyfills/matchMedia":876}],870:[function(b,c,a){arguments[4][3][0].apply(a,arguments)
},{"./ac-browser/BrowserData":871,"./ac-browser/IE":872}],871:[function(b,c,a){c.exports=b(77)
},{"./data":873}],872:[function(b,c,a){c.exports=b(5)},{}],873:[function(b,c,a){c.exports=b(79)
},{}],874:[function(c,d,b){var a=function(){var h="";var g;for(g=0;g<arguments.length;
g++){if(g>0){h+=","}h+=arguments[g]}return h};d.exports=function f(i,h){h=h||a;
var g=function(){var j=arguments;var k=h.apply(this,j);if(!(k in g.cache)){g.cache[k]=i.apply(this,j)
}return g.cache[k]};g.cache={};return g}},{}],875:[function(b,c,a){c.exports=function d(g){var f;
return function(){if(typeof f==="undefined"){f=g.apply(this,arguments)}return f
}}},{}],876:[function(b,c,a){window.matchMedia=window.matchMedia||(function(i,j){var g,d=i.documentElement,f=d.firstElementChild||d.firstChild,h=i.createElement("body"),k=i.createElement("div");
k.id="mq-test-1";k.style.cssText="position:absolute;top:-100em";h.style.background="none";
h.appendChild(k);return function(l){k.innerHTML='&shy;<style media="'+l+'"> #mq-test-1 { width:42px; }</style>';
d.insertBefore(h,f);g=k.offsetWidth===42;d.removeChild(h);return{matches:g,media:l}
}}(document))},{}],877:[function(b,c,a){c.exports=b(63)},{"./shared/camelCasedEventTypes":880,"./shared/prefixHelper":882,"./utils/eventTypeAvailable":885}],878:[function(f,d,h){var a=f("./shared/stylePropertyCache");
var i=f("./shared/getStyleTestElement");var b=f("./utils/toCSS");var k=f("./utils/toDOM");
var j=f("./shared/prefixHelper");var c=function(o,l){var m=b(o);var n=(l===false)?false:b(l);
a[o]=a[l]=a[m]=a[n]={dom:l,css:n};return l};d.exports=function g(p){var n;var l;
var o;var m;p+="";if(p in a){return a[p].dom}o=i();p=k(p);l=p.charAt(0).toUpperCase()+p.substring(1);
if(p==="filter"){n=["WebkitFilter","filter"]}else{n=(p+" "+j.dom.join(l+" ")+l).split(" ")
}for(m=0;m<n.length;m++){if(typeof o.style[n[m]]!=="undefined"){if(m!==0){j.reduce(m-1)
}return c(p,n[m])}}return c(p,false)}},{"./shared/getStyleTestElement":881,"./shared/prefixHelper":882,"./shared/stylePropertyCache":883,"./utils/toCSS":886,"./utils/toDOM":887}],879:[function(d,b,h){var f=d("./getStyleProperty");
var k=d("./shared/styleValueAvailable");var j=d("./shared/prefixHelper");var a=d("./shared/stylePropertyCache");
var i={};var l=/(\([^\)]+\))/gi;var g=/([^ ,;\(]+(\([^\)]+\))?)/gi;b.exports=function c(o,n){var m;
n+="";o=f(o);if(!o){return false}if(k(o,n)){return n}m=a[o].css;n=n.replace(g,function(q){var p;
var t;var s;var r;if(q[0]==="#"||!isNaN(q[0])){return q}t=q.replace(l,"");s=m+":"+t;
if(s in i){if(i[s]===false){return""}return q.replace(t,i[s])}p=j.css.map(function(u){return u+q
});p=[q].concat(p);for(r=0;r<p.length;r++){if(k(o,p[r])){if(r!==0){j.reduce(r-1)
}i[s]=p[r].replace(l,"");return p[r]}}i[s]=false;return""});n=n.trim();return(n==="")?false:n
}},{"./getStyleProperty":878,"./shared/prefixHelper":882,"./shared/stylePropertyCache":883,"./shared/styleValueAvailable":884}],880:[function(b,c,a){c.exports=b(64)
},{}],881:[function(c,d,b){var f;d.exports=function a(){if(!f){f=document.createElement("_")
}else{f.style.cssText="";f.removeAttribute("style")}return f};d.exports.resetElement=function(){f=null
}},{}],882:[function(b,c,a){c.exports=b(65)},{}],883:[function(b,c,a){c.exports={}
},{}],884:[function(c,b,d){var a=c("./stylePropertyCache");var f=c("./getStyleTestElement");
var i=false;var k;var j;var g=function(){var l;if(!i){i=true;k=("CSS" in window&&"supports" in window.CSS);
j=false;l=f();try{l.style.width="invalid"}catch(m){j=true}}};b.exports=function h(o,n){var m;
var l;g();if(k){o=a[o].css;return CSS.supports(o,n)}l=f();m=l.style[o];if(j){try{l.style[o]=n
}catch(p){return false}}else{l.style[o]=n}return(l.style[o]&&l.style[o]!==m)};b.exports.resetFlags=function(){i=false
}},{"./getStyleTestElement":881,"./stylePropertyCache":883}],885:[function(b,c,a){c.exports=b(66)
},{}],886:[function(c,d,b){var f=/^(webkit|moz|ms)/gi;d.exports=function a(h){var g;
if(h.toLowerCase()==="cssfloat"){return"float"}if(f.test(h)){h="-"+h}return h.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],887:[function(b,c,a){var f=/-([a-z])/g;c.exports=function d(h){var g;if(h.toLowerCase()==="float"){return"cssFloat"
}h=h.replace(f,function(j,i){return i.toUpperCase()});if(h.substr(0,2)==="Ms"){h="ms"+h.substring(2)
}return h}},{}],888:[function(c,d,b){var g=c("./helpers/globals");var f=c("ac-function/once");
function a(){var j=g.getWindow();var h=false;try{if("sessionStorage" in j&&typeof j.sessionStorage.setItem==="function"){j.sessionStorage.setItem("ac_feature","test");
h=true;j.sessionStorage.removeItem("ac_feature","test")}}catch(i){}return h}d.exports=f(a);
d.exports.original=a},{"./helpers/globals":861,"ac-function/once":875}],889:[function(c,d,b){var g=c("./helpers/globals");
var f=c("ac-function/once");function a(){var h=g.getDocument();return !!h.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":861,"ac-function/once":875}],890:[function(b,c,a){var g=b("ac-prefixer/getStyleValue");
var d=b("ac-function/once");function f(){return !!(g("perspective","1px")&&g("transform","translateZ(0)"))
}c.exports=d(f);c.exports.original=f},{"ac-function/once":875,"ac-prefixer/getStyleValue":879}],891:[function(c,d,b){var g=c("./helpers/globals");
var f=c("ac-function/once");function a(){var j=g.getWindow();var h=g.getDocument();
var i=g.getNavigator();return !!(("ontouchstart" in j)||(j.DocumentTouch&&h instanceof j.DocumentTouch)||(i.maxTouchPoints>0)||(i.msMaxTouchPoints>0))
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":861,"ac-function/once":875}],892:[function(c,d,b){var g=c("./helpers/globals");
var f=c("ac-function/once");function a(){var h=g.getDocument();var i=h.createElement("canvas");
if(typeof i.getContext==="function"){return !!(i.getContext("webgl")||i.getContext("experimental-webgl"))
}return false}d.exports=f(a);d.exports.original=a},{"./helpers/globals":861,"ac-function/once":875}],893:[function(b,c,a){c.exports=b(173)
},{"./extend":896,"ac-polyfills/Array/isArray":902}],894:[function(b,c,a){c.exports=b(174)
},{}],895:[function(b,c,a){c.exports=b(175)},{"./extend":896}],896:[function(b,c,a){c.exports=b(176)
},{"ac-polyfills/Array/prototype.forEach":903}],897:[function(b,c,a){c.exports=b(177)
},{}],898:[function(b,c,a){c.exports=b(178)},{"./clone":893,"./create":894,"./defaults":895,"./extend":896,"./getPrototypeOf":897,"./isDate":899,"./isEmpty":900,"./isRegExp":901,"./toQueryParameters":905}],899:[function(b,c,a){c.exports=b(179)
},{}],900:[function(b,c,a){c.exports=b(180)},{}],901:[function(b,c,a){c.exports=b(181)
},{}],902:[function(b,c,a){c.exports=b(182)},{}],903:[function(b,c,a){c.exports=b(36)
},{}],904:[function(b,c,a){c.exports=b(184)},{}],905:[function(b,c,a){c.exports=b(185)
},{qs:904}],906:[function(c,d,b){var a=c("./ac-video-posterframe/factory");d.exports={create:a.create,AttributePoster:c("./ac-video-posterframe/PosterAttribute"),ImageTagPoster:c("./ac-video-posterframe/PosterImageTag"),defaultPosterPath:c("./ac-video-posterframe/defaultPosterPath")}
},{"./ac-video-posterframe/PosterAttribute":907,"./ac-video-posterframe/PosterImageTag":908,"./ac-video-posterframe/defaultPosterPath":909,"./ac-video-posterframe/factory":910}],907:[function(d,f,b){var h=d("ac-mvc-view").View;
var c=d("ac-object");var i="ac-video-poster-hide";function a(){h.apply(this,arguments)
}var g=a.prototype=c.create(h.prototype);g._renderPoster=function(){if(this.model.hasPoster()){this.el.setAttribute("poster",this.model.getPoster())
}else{this.el.removeAttribute("poster")}};g.render=function(){this._renderPoster();
this.model.on("posterchange",this._renderPoster,this)};f.exports=a},{"ac-mvc-view":749,"ac-object":898}],908:[function(c,f,a){var h=c("ac-mvc-view").View;
var b=c("ac-object");var i="ac-video-poster-hide";function d(){h.apply(this,arguments);
this._img=null}var g=d.prototype=b.create(h.prototype);g.tagName="div";g.className=["ac-video-poster"];
g._renderSrc=function(){if(this.model.hasPoster()){if(!this._img){this._img=document.createElement("img");
this.el.appendChild(this._img)}this._img.setAttribute("src",this.model.getPoster())
}else{if(this._img&&this._img.parentNode===this.el){this.el.removeChild(this._img);
this._img=null}}};g._hide=function(){this.addClassName(i)};g._show=function(){this.removeClassName(i)
};g._onPlay=function(){var j=this.model.getCurrentTime();if(j===0){this._show();
this.model.once("timeupdate",this._hide,this)}else{this._hide()}};g._onReadyStateChange=function(j){if(j.readyState===0){this._show()
}};g.render=function(){this._renderSrc();this.model.on("readystatechange",this._onReadyStateChange,this);
this.model.on("posterchange",this._renderSrc,this);this.model.on("play",this._onPlay,this);
this.model.on("ended",this._show,this)};f.exports=d},{"ac-mvc-view":749,"ac-object":898}],909:[function(f,g,c){var b=f("ac-feature");
var d=f("ac-cname").cname;function a(){return b.isRetina()}g.exports=function h(){if(a()){return d.formatUrl("/ac/ac-video-posterframe/1.0/images","ac-video-poster_848x480_2x",".jpg")
}return d.formatUrl("/ac/ac-video-posterframe/1.0/images","ac-video-poster_848x480",".jpg")
}},{"ac-cname":851,"ac-feature":862}],910:[function(g,i,d){var h=g("./PosterAttribute");
var c=g("./PosterImageTag");var b=g("ac-feature");function a(){return b.isHandheld()
}i.exports={create:function f(j){var k=null;if(a()){k=new h({model:j,element:j.getMediaElement()})
}else{k=new c({model:j})}return k}}},{"./PosterAttribute":907,"./PosterImageTag":908,"ac-feature":862}],911:[function(d,f,b){var c=d("./ac-video/player/Player");
c.create=d("./ac-video/player/factory/create");c.createFromElement=d("./ac-video/player/factory/createFromElement");
c.createFromAnchorTag=d("./ac-video/player/factory/createFromAnchorTag");var a=d("./ac-video/models/Video");
a.createFromVideoTag=d("./ac-video/models/video/factory/createFromVideoTag");f.exports={Player:c,Video:a}
},{"./ac-video/models/Video":934,"./ac-video/models/video/factory/createFromVideoTag":936,"./ac-video/player/Player":937,"./ac-video/player/factory/create":938,"./ac-video/player/factory/createFromAnchorTag":939,"./ac-video/player/factory/createFromElement":940}],912:[function(b,c,a){function f(g){this.el=g
}var d=f.prototype;d.setEl=function(g){this.el=g};d.play=function(){this.el.play()
};d.pause=function(){this.el.pause()};d.setCurrentTime=function(g){this.el.currentTime=g
};d.getCurrentTime=function(){return this.el.currentTime};d.setPreload=function(g){this.el.preload=g
};d.getWidth=function(){return this.el.videoWidth};d.getHeight=function(){return this.el.videoHeight
};d.setControls=function(g){this.el.controls=g};d.setSrc=function(g){this.el.src=g
};d.getSrc=function(){return this.el.src};d.getControls=function(){return this.el.controls
};d.setMuted=function(g){this.el.muted=g};d.setVolume=function(g){this.el.volume=g
};d.getVolume=function(){return this.el.volume};d.getDuration=function(){return this.el.duration
};d.setPlaybackRate=function(g){this.el.playbackRate=g};d.getPlaybackRate=function(){return this.el.playbackRate
};d.getDefaultPlaybackRate=function(){return this.el.defaultPlaybackRate};d.setLoop=function(g){this.el.loop=g
};d.getLoop=function(){return this.el.loop};d.getCurrentSrc=function(){return this.el.currentSrc
};d.getPlayed=function(){return this.el.played};d.addTextTrack=function(h,g,i){return this.el.addTextTrack(h,g,i)
};d.getTextTracks=function(){var g=this.el.textTracks||[];return Array.prototype.map.call(g,function(i,h){i.index=h;
return i})};d.getBuffered=function(){return this.el.buffered};c.exports=f},{}],913:[function(b,c,a){function f(g){this.el=g;
this._boundChangeSrc=this._changeSrc.bind(this);this._incomingSrc=null}var d=f.prototype;
d.setEl=function(g){this.el=g};d.play=function(){this.el.Play()};d.pause=function(){this.el.Stop()
};d.setCurrentTime=function(g){this.el.SetTime(g*this.el.GetTimeScale())};d.setPreload=function(g){};
d.getCurrentTime=function(){var h=0;if(this._incomingSrc){return h}try{h=this.el.GetTime()/this.el.GetTimeScale()
}catch(g){}return h};d.getWidth=function(){var i;try{var j=this.el.GetRectangle();
var h=this.el.GetMatrix();var g=parseFloat(h.split(",")[0]);i=+j.split(",")[2];
i=Math.round(i/g)}catch(k){}return i};d.getHeight=function(){var g;try{var j=this.el.GetRectangle();
var i=this.el.GetMatrix();var h=parseFloat(i.split(",")[3]);g=+j.split(",")[3];
g=Math.round(g/h)}catch(k){}return g};d.setMuted=function(g){this.el.SetMute(g)
};d.setVolume=function(g){this.el.SetVolume(g*256)};d.getVolume=function(){return this.el.GetVolume()/256
};d.getDuration=function(){var h=NaN;if(this._incomingSrc){return NaN}try{h=this.el.GetDuration()/this.el.GetTimeScale()
}catch(g){}return h};d.setLoop=function(g){this.el.SetIsLooping(g)};d.getLoop=function(){return this.el.GetIsLooping()
};d.setPlaybackRate=function(g){this.el.SetRate(g)};d.getPlaybackRate=function(){var g=1;
try{g=this.el.GetRate()}catch(h){}return g};d._changeSrc=function(){try{this.el.SetResetPropertiesOnReload(false);
this.el.SetURL(this._incomingSrc)}catch(g){}this._incomingSrc=null};d.setSrc=function(g){this._incomingSrc=g;
window.requestAnimationFrame(this._boundChangeSrc)};d.getSrc=function(){return this.el.GetURL()
};d.getCurrentSrc=function(){return this.el.GetURL()};d.getDefaultPlaybackRate=function(){return 1
};d.getPlayed=function(){};d.getBuffered=function(){return[[0,this.element.GetMaxTimeLoaded()/this.element.GetTimeScale()]]
};d.showTextTrack=function(g){this.el.SetTrackEnabled(g,true)};d.hideTextTrack=function(g){this.el.SetTrackEnabled(g,false)
};d.setControls=function(g){this.el.SetControllerVisible(g)};d.getControls=function(){return this.el.GetControllerVisible()
};d.getTextTracks=function(){var h=[];var g=this.el.GetTrackCount();for(var j=1;
j<=g;j++){var k=this.el.GetTrackType(j);if(k==="Subtitle"||k==="Closed Caption"){h.push({kind:k,label:this.el.GetTrackName(j),mode:(this.el.GetTrackEnabled(j))?"showing":"hidden",index:j})
}}return h};c.exports=f},{}],914:[function(f,g,d){var c=f("./HTML5VideoAPI");var b=f("./QuickTimeAPI");
var a={create:function(h,i){if(i==="video"){return new c(h)}else{return new b(h)
}}};g.exports=a},{"./HTML5VideoAPI":912,"./QuickTimeAPI":913}],915:[function(c,g,b){var h=c("ac-mvc-collection").Collection;
var f=c("./../models/MediaSource");var a=c("ac-object");var d=function(){h.apply(this,arguments)
};var i=d.prototype=a.create(h.prototype);i.ModelType=f;g.exports=d},{"./../models/MediaSource":931,"ac-mvc-collection":712,"ac-object":752}],916:[function(d,f,c){var i=d("./TextTrackCollection");
var h=d("./../models/PolyfillTextTrackModel");var b=d("ac-object");var a=function(){i.apply(this,arguments)
};var g=a.prototype=b.create(i.prototype);g.ModelType=h;g.createTextTrackFromNativeTrack=function(k,j,m){var l=new h();
l.setNativeTextTrack(m);l.setTextTrackEl(k);l.setTextTrackInnerEl(j);this.add(l);
return l};g.removeTextTrackFromNativeTrack=function(k){var j=this.findTextTrackModelFromNativeTrack(k);
this.remove(j)};g.findTextTrackModelFromNativeTrack=function(k){if(!k||k.length===0){return null
}var j=this.filter(function(l){if(l.getNativeTextTrack()===k[0].text){return l}return false
})[0];return j||null};g.getEnabledTextTracks=function(){var j=this.filter(function(k){if(k.get("mode")!=="disabled"){return k
}return false});return new a({models:j})};g.getVisibleTextTracks=function(){var j=this.find({mode:"showing"});
return new a({models:j})};f.exports=a},{"./../models/PolyfillTextTrackModel":932,"./TextTrackCollection":917,"ac-object":752}],917:[function(c,d,b){var f=c("ac-mvc-collection").Collection;
var i=c("./../models/TextTrackModel");var a=c("ac-object");var h=function(){f.apply(this,arguments)
};var g=h.prototype=a.create(f.prototype);g.ModelType=i;g.createTextTrackFromNativeTrack=function(k){var j=new i(k);
j.setNativeTextTrack(k);this.add(j);return j};g.removeTextTrackFromNativeTrack=function(k){var j=this.findTextTrackModelFromNativeTrack(k);
this.remove(j)};g.count=function(){return this.models.length};g.findTextTrackModelFromNativeTrack=function(k){var j=this.filter(function(l){if(l.getNativeTextTrack()===k){return l
}return false})[0];return j||null};g.getEnabledTextTracks=function(){var j=this.filter(function(k){if(k.get("mode")!=="disabled"){return k
}return false});return new h({models:j})};g._findTextTrack=function(k){var j;if(this.indexOf(k)>-1){j=k
}else{if(typeof k==="number"){j=this.at(k)}else{if(typeof k==="string"){j=this.get(k)
}else{j=this.find(k,{limit:1})[0]}}}return j};g.getVisibleTextTracks=function(){var j=this.find({mode:"showing"});
return new h({models:j})};g.findTextTrack=function(j){return this._findTextTrack(j)
};d.exports=h},{"./../models/TextTrackModel":933,"ac-mvc-collection":712,"ac-object":752}],918:[function(b,c,a){function f(){this._boundEventListeners=[];
this._collection=[]}var d=f.prototype;d.add=function(j){j=Array.prototype.slice.call(arguments,0);
var g=j.length;var k;var h;for(h=0;h<g;h++){if(this._collection.indexOf(j[h])<0){k=j[h];
this._setup(k);this._collection.push(k)}}};d.remove=function(j){j=Array.prototype.slice.call(arguments,0);
var g=j.length;var h;var k;for(h=0;h<g;h++){k=this._collection.indexOf(j[h]);if(k>-1){this._teardown(j[h]);
this._collection.splice(k,1)}}};d._setup=function(i){var g=this._pauseOtherVideos.bind(this,i);
var j=this.remove.bind(this,i);var h={video:i,eventListeners:{playListener:g,destroyListener:j}};
this._boundEventListeners.push(h);i.on("play",g);i.on("acv-destroy",j)};d._teardown=function(i){var h=this._boundEventListeners.filter(function(j){return j.video===i
},this);if(h.length){h=h.pop();i.off("play",h.eventListeners.playListener);i.off("acv-destroy",h.eventListeners.destroyListener);
var g=this._boundEventListeners.indexOf(h);this._boundEventListeners.splice(g,1)
}};d._getOtherVideos=function(g){return this._collection.filter(function(h){return h!==g
},this)};d._pauseOtherVideos=function(g){var h=this._getOtherVideos(g);h.forEach(function(i){i.pause()
})};c.exports=new f()},{}],919:[function(d,c,h){var f=d("ac-object");var j=d("ac-dom-traversal/querySelector");
var l=d("ac-browser");var m=d("ac-deferred").Deferred;var n="v";var b=function(o,p){var q=o.getAttribute(p);
if(q===null){return false}else{if(q===""){return false}}return true};var a=(function(){function o(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)
}return function(){return o()+o()+"-"+o()+"-"+o()+"-"+o()+"-"+o()+o()+o()}}());
function g(){return/^(iOS|Android)$/.test(l.os)}function i(){this._possibleTemplateKeys=["autoplay","buffered","endframe","controls","height","loop","muted","poster","preload","suffix","width","controlbar","controlbarwidth","controlbarskinning","disablecaptionscontrol"];
this._defaultTemplateValues={autoplay:false,muted:false,loop:false,controls:false,preload:"metadata",controlbarwidth:"450",controlbarskinning:"ac-video-controlbar",disablecaptionscontrol:false}
}var k=i.prototype;k.getSource=function(q){var r=/[^/]*.[^\.]*$/;var p=null;var s={};
if(b(q,"data-src")){p=q.getAttribute("data-src")}else{if(b(q,"href")){p=q.getAttribute("href")
}else{if(b(q,"src")){p=q.getAttribute("src")}else{var o=j("source",q);if(o&&b(o,"src")){p=o.getAttribute("src")
}}}}if(p){s.defaultSource=p;s.videoSource=p.match(r)[0];s.directory=p.replace(s.videoSource,"");
s.videoFileName=s.videoSource.split(".")[0]}return s};k.getConfig=function(r,q,t){var s=new m();
var p={};var o=this.getSource(r);this.isAppleMobileDevice=(l.os==="iOS");p=this._getValues(r,t);
this._videoRecommendation=q;p.videoTemplate=q.videoTemplate;s.resolve();return s.promise().then(function(){p.usesFullScreen=(p.usesFullScreen&&p.videoTemplate==="elementVideo");
p.source=o.defaultSource;return p})};k._buildFileSuffix=function(p){var r="";if(p.suffix){r="_"+p.suffix
}else{if(p.height&&p.width){var o=p.height.replace("px","").replace("em","").replace("rem","");
var q=p.width.replace("px","").replace("em","").replace("rem","");r="_"+q+"x"+o
}}return r};k._getRecommendedCaptionsPaths=function(p,o){var q=[];q.push(p+o+"-captions."+n+"tt");
return q};k._generateRecommendedVideoPaths=function(p,o){var r=this._buildFileSuffix(o);
var q=[];this._videoRecommendation.supportedProfiles.forEach(function(s){if(s.sizeRelevant){p=p+r
}q.push(p+"."+s.fileExtension)});return q};k._getValues=function(p,r){var q="ac-video-"+a();
var o=this._defaultTemplateValues;f.extend(o,this._getMarkupValues(p));if(r){f.extend(o,r)
}if(g()){o["native"]=true;o.controls="true"}o.targetId=p.id;o.domId=q;o.eventId=q+"-quicktime-event";
o.wrapperId=q+"-wrapper";return o};k._getMarkupValues=function(o){var p={};this._possibleTemplateKeys.forEach(function(q){if(b(o,q)){p[q]=o.getAttribute(q)
}else{if(b(o,"data-acv-"+q)){p[q]=o.getAttribute("data-acv-"+q)}}if((q==="autoplay"||q==="controls"||q==="muted"||q==="loop")&&p[q]&&p[q].length>0){p[q]=true
}if(typeof(p[q])==="string"&&/^(true|false)$/.test(p[q])){p[q]=(p[q]==="true")?true:false
}});return p};k.addPossibleTemplateKeys=function(o){o.forEach(function(p){if(!this._possibleTemplateKeys.indexOf(p)){this._possibleTemplateKeys.push(p)
}},this)};c.exports=i},{"ac-browser":3,"ac-dom-traversal/querySelector":41,"ac-object":752}],920:[function(b,c,a){c.exports={LOADEDMETADATA:1,LOADEDDATA:2,CANPLAY:3,CANPLAYTHROUGH:4}
},{}],921:[function(c,b,d){var h=c("./TextTracksController");var i=c("./../../views/textTracks/TextTracksCollectionView");
var g=c("./../../models/TextTrackModel");var a=c("ac-object");function j(){h.apply(this,arguments);
this.view=this.options.view||new i({element:this.mediaElement.el});this._addViewEvents()
}var f=j.prototype=a.create(h.prototype);f._holdingTextTrackModels={};f._addViewEvents=function(){this.view.on("addtrack",this._respondToAddTrackEvent,this);
this.view.on("change",this._respondToChangeTrackEvent,this);this.view.on("removetrack",this._respondToRemoveTrackEvent,this)
};f._removeViewEvents=function(){this.view.off("addtrack",this._respondToAddTrackEvent,this);
this.view.off("change",this._respondToChangeTrackEvent,this);this.view.off("removetrack",this._respondToRemoveTrackEvent,this)
};f._respondToAddTrackEvent=function(k){var l=k.data.track;var n=this.model.findTextTrackModelFromNativeTrack(l);
if(!n&&l&&l.id&&this._holdingTextTrackModels[l.id]){n=this._holdingTextTrackModels[l.id];
n.setNativeTextTrack(l);this.model.add(n);this._holdingTextTrackModels[l.id]=undefined;
var m=this.createTextTrackRenderView(l,n);m.renderMode()}if(n===null){this._createTextTrackFromNativeTrack(l)
}else{n.set({mode:l.mode})}if(n){n.on("change:mode",function(){if("webkitClosedCaptionsVisible" in this.mediaElement.el&&n.get("mode")==="showing"){if(this.mediaElement.el.webkitClosedCaptionsVisible===false){this.mediaElement.el.webkitClosedCaptionsVisible=true
}}},this)}this._resetModel();this.trigger("addtrack",k)};f._createTextTrackFromNativeTrack=function(l){var k=this.model.createTextTrackFromNativeTrack(l);
this.createTextTrackRenderView(l,k);return k};f._removeTextTrackFromNativeTrack=function(l){var k=this.model.findTextTrackModelFromNativeTrack(l);
this.removeTextTrackRenderView(k);this.model.removeTextTrackFromNativeTrack(l);
this._resetModel()};f._resetModel=function(){var k=this.mediaElement.el.textTracks;
var n=[];var l;if(k){for(var m=0;m<k.length;m+=1){l=this.model.findTextTrackModelFromNativeTrack(k[m]);
if(l){l.set({mode:k[m].mode});n.push(l)}}this.model.reset(n)}};f._respondToChangeTrackEvent=function(k){this.trigger("changetrack",k)
};f._respondToRemoveTrackEvent=function(k){var l=k.data.track;this._removeTextTrackFromNativeTrack(l);
this.trigger("removetrack",k)};f.addTextTrackFromRemoteVTT=function(l){var m={src:l.src};
var k=this.model.findTextTrack(m);if(k&&typeof k==="object"){return k.cid}k=new g(l);
this._holdingTextTrackModels[k.cid]=k;this.view.addTextTrackTag(k);return k.cid
};f.addTextTrack=function(m,k,n){var l=this.mediaElement.addTextTrack(m,k,n);return this._createTextTrackFromNativeTrack(l)
};f.removeTextTrack=function(k){if(!k){return}if(this._holdingTextTrackModels[k.cid]){this._holdingTextTrackModels[k.cid]=undefined
}this.view.removeTextTrackTag(k)};f.populateTextTracks=function(){var k=this.mediaElement.getTextTracks();
if(k){k.forEach(function(l){if(this.model.findTextTrackModelFromNativeTrack(l)===null){this._createTextTrackFromNativeTrack(l)
}},this)}};b.exports=j},{"./../../models/TextTrackModel":933,"./../../views/textTracks/TextTracksCollectionView":954,"./TextTracksController":923,"ac-object":752}],922:[function(g,f,h){var j=g("./TextTracksController");
var a=g("./../../views/textTracks/PolyfillTextTrackCollectionView");var k=g("./../../models/PolyfillTextTrackModel");
var d=g("./../../collection/PolyfillTextTrackCollection");var b=g("ac-object");
function c(l){var m={model:new d()};j.apply(this,[l,m]);this.view=this.options.view||new a({element:this.mediaElement.el});
this._addViewEvents()}var i=c.prototype=b.create(j.prototype);i._holdingTextTrackModels={};
i._addViewEvents=function(){this.view.on("addtrack",this._respondToAddTrackEvent,this);
this.view.on("change",this._respondToChangeTrackEvent,this);this.view.on("removetrack",this._respondToRemoveTrackEvent,this);
this.view.on("timeupdate",this._onTimeUpdate,this)};i._removeViewEvents=function(){this.view.off("addtrack",this._respondToAddTrackEvent,this);
this.view.off("change",this._respondToChangeTrackEvent,this);this.view.off("removetrack",this._respondToRemoveTrackEvent,this);
this.view.off("timeupdate",this._onTimeUpdate,this)};i._respondToAddTrackEvent=function(m){if(!(m&&m.data)){return
}var l=(m.data&&m.data.track)?m.data.track:[];var o=this.model.findTextTrackModelFromNativeTrack(l);
if(!o&&l&&m.data.textTrackEl&&m.data.textTrackEl.id&&this._holdingTextTrackModels[m.data.textTrackEl.id]){o=this._holdingTextTrackModels[m.data.textTrackEl.id];
o.setNativeTextTrack(l);o.setTextTrackEl(m.data.textTrackEl);o.setTextTrackInnerEl(m.data.textTrackInnerEl);
this.model.add(o);this._holdingTextTrackModels[m.data.textTrackEl.id]=undefined;
var n=this.createTextTrackRenderView(m.data.textTrackEl,o);n.renderMode()}if(o===null){this._createTextTrackFromTextTrackData(m.data.textTrackEl,m.data.textTrackInnerEl,l)
}this.trigger("addtrack",m)};i._createTextTrackFromTextTrackData=function(n,m,l){var o=this.model.createTextTrackFromNativeTrack(n,m,l);
this.createTextTrackRenderView(n,o);return o};i._removeTextTrackFromTextTrackData=function(l){var m=this.model.findTextTrackModelFromNativeTrack(l);
this.removeTextTrackRenderView(m);this.model.removeTextTrackFromNativeTrack(l)};
i._respondToChangeTrackEvent=function(l){this.trigger("changetrack",l)};i._respondToRemoveTrackEvent=function(l){var m=l.data.track;
this._removeTextTrackFromTextTrackData(m);this.trigger("removetrack",l)};i._onTimeUpdate=function(n){if(!this.view.textTracks||this.view.textTracks.length===0){return
}var m=this.view.textTracks.filter(this._filterCaptions.bind(this));var l=m.length;
var p=this.model.findTextTrackModelFromNativeTrack(this.view.textTracks);var o=p.get("mode");
if(o==="showing"&&l>0){p.addVTTCue(m[0].text);this.view.show()}else{this.view.hide()
}};i.addTextTrackFromRemoteVTT=function(m){var n={src:m.src};var l=this.model.findTextTrack(n);
if(l&&typeof l==="object"){this.view.textTracks=l.getCues();this.view.textTrackEl=l.gettextTrackEl();
this.view.textTrackInnerEl=l.gettextTrackInnerEl();return l.cid}l=new k(m);this._holdingTextTrackModels[l.cid]=l;
if(m.src){this.view.loadVTTFile(m.src,l)}return l.cid};i.removeTextTrack=function(l){if(!l){return
}if(this._holdingTextTrackModels[l.cid]){this._holdingTextTrackModels[l.cid]=undefined
}this.view.removeTextTrackDiv(l)};i.populateTextTracks=function(){};i._filterCaptions=function(o,l,p){var n=this.mediaElement.getCurrentTime();
var m=this._toMMSSS(n);return this._compareTime(m,o.startTime,"gt")&&this._compareTime(m,o.endTime,"lt")
};i._toMMSSS=function(n){var l=Math.floor(n/3600);var m=Math.floor((n-(l*3600))/60);
var o=Math.round((n-(l*3600)-(m*60)));if(l<10){l="0"+l}if(m<10){m="0"+m}if(o<10){o="0"+o
}return l+":"+m+":"+o};i._compareTime=function(n,m,l){n=new Date("January 1, 1975 "+n);
m=new Date("January 1, 1975 "+m);return l==="gt"?n>=m:n<=m};f.exports=c},{"./../../collection/PolyfillTextTrackCollection":916,"./../../models/PolyfillTextTrackModel":932,"./../../views/textTracks/PolyfillTextTrackCollectionView":950,"./TextTracksController":923,"ac-object":752}],923:[function(c,b,d){var j=c("ac-event-emitter").EventEmitter;
var h=c("./../../collection/TextTrackCollection");var i=c("./../../views/textTracks/TextTrackRender");
var a=c("ac-object");function g(k,l){this.options=l||{};this.mediaElement=k;this.model=this.options.model||new h();
this._textTrackRenderViews=[]}var f=g.prototype=a.create(j.prototype);f.findTextTrackModelFromNativeTrack=function(k){return this.model.findTextTrackModelFromNativeTrack(k)
};f.addTextTrackFromRemoteVTT=function(k){};f.addTextTrack=function(){};f.removeTextTrack=function(k){};
f.getEnabledTextTracks=function(){return this.model.getEnabledTextTracks.apply(this.model,arguments)
};f.getTextTracks=function(){return this.model};f.getTextTracksCount=function(){return this.model.count()
};f.getVisibleTextTracks=function(){return this.model.getVisibleTextTracks()};f.findTextTrack=function(k){return this.model.findTextTrack(k)
};f.addTextTrack=function(l,k,m){return this.mediaElement.addTextTrack(l,k,m)};
f.populateTextTracks=function(){};f.createTextTrackRenderView=function(m,k){var l=new i({element:m,model:k});
k.on("change:mode",this._onTextTrackModeChange,this);l.render();this._textTrackRenderViews.push(l);
return l};f.removeTextTrackRenderView=function(m){var l=this._textTrackRenderViews.length;
var n={};for(var k=0;k<l;k++){if(this._textTrackRenderViews[k].model.cid===m.cid){n.view=this._textTrackRenderViews[k];
n.idx=k;break}}if(n.view){this._destroyRenderView(n.view);this._textTrackRenderViews.splice(n.idx,1)
}};f._destroyRenderView=function(k){k.emitterTrigger("destroy");k.off();var l;for(l in k){if(k.hasOwnProperty(l)){k[l]=null
}}};f._onTextTrackModeChange=function(k){var l=k.value;if(l==="showing"){this.trigger("texttrackshow")
}else{this.trigger("texttrackhide")}};b.exports=g},{"./../../collection/TextTrackCollection":917,"./../../views/textTracks/TextTrackRender":952,"ac-object":752}],924:[function(c,b,d){var h=c("./TextTracksController");
var g=c("./../../models/TextTrackModel");var i=c("./../../views/textTracks/WebkitClosedCaptionsView");
var a=c("ac-object");var k=c("ac-browser");function j(){h.apply(this,arguments)
}var f=j.prototype=a.create(h.prototype);f._onTextTrackModeChange=function(l){if(l.value==="showing"){this.trigger("texttrackshow")
}else{this.trigger("texttrackhide")}};f.populateTextTracks=function(){var m=this.mediaElement.el;
var l;var n=m.webkitHasClosedCaptions;if(n===true){if(!this.view){this.view=new i({element:m})
}l=new g({mode:"hidden"});this.view.setModel(l);l.on("change:mode",this._onTextTrackModeChange,this);
this.model.reset([l]);this.trigger("addtrack",{textTrack:l});if(k.name==="Safari Mobile"&&k.version<7){l.once("change:mode",this.view.render,this.view)
}else{this.view.render()}}};b.exports=j},{"./../../models/TextTrackModel":933,"./../../views/textTracks/WebkitClosedCaptionsView":955,"./TextTracksController":923,"ac-browser":3,"ac-object":752}],925:[function(c,d,b){function a(f){this.options=f||{};
this.player=this.options.player;this.player.setControls(true)}a.create=function(f){return new a(f)
};d.exports=a},{}],926:[function(d,c,h){var m=d("./../models/Video");var n=d("ac-event-emitter").EventEmitter;
var b=d("./../views/mediaView/MediaView");var g=d("ac-object");var l=d("./../controller/textTracks/NativeTextTracksController");
var j=d("ac-fullscreen");var k=d("ac-feature");var a=d("./../const/readyState");
function f(p,o){this.playableObject=p;this.options=o||{};this.model=this._getOrCreateVideo();
this.view=this._getOrCreateView();this.textTracks=this._getOrCreateTextTracksController();
this._sourceReadyBinding=false;n.call(this);this._bindTextTrackEvents();this._bindModelEvents();
this._checkToRenderView()}var i=f.prototype=g.create(n.prototype);i._bindTextTrackEvents=function(){this.textTracks.on("addtrack",this._onAddTrack,this);
this.textTracks.on("change",this._onTrackChange,this);this.textTracks.on("removetrack",this._onRemoveTrack,this);
this.textTracks.on("texttrackshow",this._onTextTrackShow,this);this.textTracks.on("texttrackhide",this._onTextTrackHide,this)
};i._onTextTrackHide=function(){this.trigger("texttrackhide")};i._onTextTrackShow=function(){this.trigger("texttrackshow")
};i._onAddTrack=function(o){this.trigger("addtrack",o.data.track)};i._onTrackChange=function(o){this.trigger("change",o)
};i._onRemoveTrack=function(o){this.trigger("removetrack",o.data.track)};i._checkToRenderView=function(){if(this.model.getCurrentSrc()){this._onSourceReady()
}else{if(!this._sourceReadyBinding){this.model.once("change:currentSrc",this._onSourceReady,this);
this._sourceReadyBinding=true}}};i._onSourceReady=function(){if(this.model.getPreload()!=="none"){this.view.render();
this.playableObject.setEl(this.view.getMediaElement());this._bindViewEvents()}this._sourceReadyBinding=false
};i._getOrCreateView=function(){var o=this.options.view;if(!o){o=new b({model:this.model})
}o.on("mediaelementchange",this._onMediaElementChange,this);return o};i._onMediaElementChange=function(){this.playableObject.setEl(this.view.getMediaElement())
};i._getOrCreateTextTracksController=function(){var o=this.options.textTracks;if(o===undefined){o=new l(this.playableObject)
}return o};i._getOrCreateVideo=function(){var o=this.options.model;if(o===undefined){o=new m()
}else{if(!(o instanceof m)){o=new m(o)}}return o};i._bindModelEvents=function(){this.model.on("change:muted",this._onMutedChange,this);
this.model.on("change:seeking",this._onModelSeekingChange,this);this.model.on("change:paused",this._onPausedChange,this);
this.model.on("change:playbackRate",this._onPlaybackRateChange,this);this.model.on("change:duration",this._onDurationChange,this);
this.model.on("change:volume",this._onVolumeChange,this);this.model.on("change:readyState",this._onReadyStateChange,this);
this.model.on("change:poster",this._onPosterChange,this)};i._bindViewEvents=function(){this.view.on("play",this._respondToPlay,this);
this.view.on("pause",this._respondToPause,this);this.view.on("timeupdate",this._respondToTimeUpdate,this);
this.view.on("ended",this._respondToEnded,this);this.view.on("ratechange",this._respondToRateChange,this);
this.view.on("durationchange",this._respondToDurationChange,this);this.view.on("loadedmetadata",this._respondToLoadedMetaData,this);
this.view.on("loadeddata",this._respondToLoadedData,this);this.view.on("canplay",this._respondToCanPlay,this);
this.view.on("canplaythrough",this._respondToCanPlayThrough,this)};i._populateTextTracks=function(){this.textTracks.populateTextTracks()
};i._respondToLoadedMetaData=function(){this._populateTextTracks();this._setReadyState(1)
};i._onPosterChange=function(){this.trigger("posterchange")};i._respondToLoadedData=function(){this._setReadyState(2)
};i._respondToCanPlay=function(){this._setReadyState(3)};i._respondToCanPlayThrough=function(){this._setReadyState(4)
};i._respondToDurationChange=function(){this.model.set({duration:this.playableObject.getDuration()})
};i._respondToRateChange=function(){if(this.playableObject.getPlaybackRate){this.model.set({playbackRate:this.playableObject.getPlaybackRate()})
}};i._respondToEnded=function(){this.model.set({ended:true});this.trigger("ended")
};i._respondToPlay=function(){var o=this.getMediaElement();if(j.fullscreenElement()!==o&&j.getMode()==="ios"&&k.isHandheld()){try{j.requestFullscreen(this.getMediaElement())
}catch(p){}}this.model.set({paused:false,ended:false})};i._respondToPause=function(){this.model.set({paused:true})
};i._triggerTimeUpdate=function(){this.trigger("timeupdate",{currentTime:this.getCurrentTime()})
};i._respondToTimeUpdate=function(){if(this.model.getCurrentTime()!==this.playableObject.getCurrentTime()){this.model.setCurrentTime(this.playableObject.getCurrentTime());
this._triggerTimeUpdate()}if(this.model.getSeeking()===true){this.model.set({seeking:false})
}};i._onReadyStateChange=function(o){if(o.value===a.LOADEDMETADATA){this.trigger("loadedmetadata")
}else{if(o.value===a.LOADEDDATA){this.trigger("loadeddata")}else{if(o.value===a.CANPLAY){this.trigger("canplay")
}else{if(o.value===a.CANPLAYTHROUGH){this.trigger("canplaythrough")}}}}this.trigger("readystatechange",{readyState:o.value})
};i._setReadyState=function(o){this.model.set({readyState:o})};i._onMutedChange=function(){this.trigger("volumechange");
if(this.model.getMuted()===false){this._setElementVolume(this.model.getVolume())
}};i._onVolumeChange=function(){this.trigger("volumechange")};i._onDurationChange=function(o){if(isNaN(o.previous)&&isNaN(o.value)){return
}this.trigger("durationchange",o)};i._onPlaybackRateChange=function(){this.trigger("ratechange")
};i._onPausedChange=function(o){if(o.value===true){this.trigger("pause")}else{this.trigger("play")
}};i._onModelSeekingChange=function(o){if(o.value===true){this.trigger("seeking")
}else{this.trigger("seeked")}};i.findTextTrackModelFromNativeTrack=function(o){return this.textTracks.findTextTrackModelFromNativeTrack(o)
};i.findTextTrack=function(o){return this.textTracks.findTextTrack(o)};i.getTextTracks=function(){return this.textTracks.getTextTracks()
};i.getTextTracksCount=function(){return this.textTracks.getTextTracksCount()};
i.addTextTrackFromRemoteVTT=function(){return this.textTracks.addTextTrackFromRemoteVTT.apply(this.textTracks,arguments)
};i.addTextTrack=function(p,o,q){return this.textTracks.addTextTrack(p,o,q)};i.removeTextTrack=function(){return this.textTracks.removeTextTrack.apply(this.textTracks,arguments)
};i.getEnabledTextTracks=function(){return this.textTracks.getEnabledTextTracks.apply(this.textTracks,arguments)
};i.getVisibleTextTracks=function(){return this.textTracks.getVisibleTextTracks()
};i.play=function(){if(this.getPaused()===false){return}this.playableObject.play()
};i.pause=function(){if(this.getPaused()===true){return}this.playableObject.pause()
};i.getVideo=function(){return this.model};i.getPaused=function(){return this.model.getPaused()
};i.setMuted=function(o){this.model.setMuted(o);this.playableObject.setMuted(o)
};i.getMuted=function(){return this.model.getMuted()};i.getEnded=function(){return this.model.getEnded()
};i._setElementVolume=function(o){this.playableObject.setVolume(o)};i.setVolume=function(o){this.model.setVolume(o,{silent:true});
if(this.getMuted()===false){this._setElementVolume(o)}};i.getVolume=function(){return this.model.getVolume()
};i.setCurrentTime=function(p){var o=this.getCurrentTime();this.model.set({seeking:true});
this.playableObject.setCurrentTime(p);if(o===p){this.model.set({seeking:false})
}};i.getWidth=function(){return this.playableObject.getWidth()};i.getHeight=function(){return this.playableObject.getHeight()
};i.getCurrentTime=function(){return this.model.getCurrentTime()};i.setPlaybackRate=function(p){var o=this.model.getPlaybackRate();
if(o!==p){this.playableObject.setPlaybackRate(p)}};i.getPlaybackRate=function(){return this.model.getPlaybackRate()
};i.getDuration=function(){return this.model.getDuration()};i.setAutoplay=function(o){this.playableObject.SetAutoPlay(o)
};i.getAutoplay=function(){return this.playableObject.GetAutoPlay()};i.getCaptionsTracks=function(){return this.playableObject.getCaptionsTracks()
};i.setLoop=function(o){this.model.setLoop(o);this.playableObject.setLoop(o)};i.getLoop=function(){return this.model.getLoop()
};i.getError=function(){};i.getVideoWidth=function(){};i.getVideoHeight=function(){};
i.getPoster=function(){return this.model.getPoster()};i.setPoster=function(o){this.model.setPoster(o)
};i.hasPoster=function(){return !!(this.model.getPoster())};i._resetModelPlaybackAttributes=function(){this.model.set({duration:this.playableObject.getDuration(),currentTime:this.playableObject.getCurrentTime(),playbackRate:this.playableObject.getPlaybackRate(),readyState:0,paused:true,ended:false,seeking:false});
this._triggerTimeUpdate()};i.setSrc=function(p){var q=this.model.findSources(p)[0];
var o=this.model.getCurrentSrc();if(o){o=o.get("src")}if(q===undefined){q=this.model.addSource(p)
}if(o!==q.get("src")){this.model.setCurrentSrc(q);this.playableObject.setSrc(q.get("src"));
this._resetModelPlaybackAttributes()}return q};i.getPreload=function(){return this.model.getPreload()
};i.setPreload=function(o){this.model.setPreload(o);this.playableObject.setPreload(o);
this._checkToRenderView()};i.getCurrentSrc=function(){return this.model.getCurrentSrc()
};i.getSources=function(){return this.model.getSources()};i.getNetworkState=function(){return this.model.get("networkState")
};i.getReadyState=function(){return this.model.get("readyState")};i.getControls=function(){return this.model.get("controls")
};i.setControls=function(o){this.model.set({controls:o});this.playableObject.setControls(o)
};i.getDefaultPlaybackRate=function(){return this.model.getDefaultPlaybackRate()
};i.getSeekable=function(){return this.getBuffered()};i.getDefaultMuted=function(){return this.model.get("defaultMuted")
};i.getSeeking=function(){return this.model.get("seeking")};i.getPlayed=function(){return this.playableObject.getPlayed()
};i.getBuffered=function(){return this.playableObject.getBuffered()};i.getMediaElement=function(){return this.view.getMediaElement()
};i.appendTo=function(){return this.view.appendTo.apply(this.view,arguments)};i.getViewElement=function(){return this.view.el
};c.exports=f},{"./../const/readyState":920,"./../controller/textTracks/NativeTextTracksController":921,"./../models/Video":934,"./../views/mediaView/MediaView":944,"ac-feature":698,"ac-fullscreen":302,"ac-object":752}],927:[function(b,f,a){var g=b("./../../recommendation/vat");
var d=b("./createQuickTime");var h=b("./createHTML5Video");function c(l,i){i=i||{};
var j=i.type||g.get();var k;if(j==="quicktime"){k=d(l,i)}else{k=h(l,i)}return k
}f.exports=c},{"./../../recommendation/vat":941,"./createHTML5Video":929,"./createQuickTime":930}],928:[function(c,d,b){var h=c("./create");
var a=c("./../../models/video/factory/createFromVideoTag");var f=c("./../../recommendation/vat");
function g(m,k){k=k||{};k.element=m;var l=k.type=f.get();var o=a(m,k);var j=o.getSources();
var n;var i=j.find({src:m.currentSrc})[0];if(l==="quicktime"){i=j.find({type:"video/quicktime"})[0];
if(!i&&j.models.length===1){i=j.at(0)}}if(i){o.setSrc(i)}n=h(o,k);if(n.getViewElement()!==m){m.parentNode.replaceChild(n.getViewElement(),m)
}return n}d.exports=g},{"./../../models/video/factory/createFromVideoTag":936,"./../../recommendation/vat":941,"./create":927}],929:[function(h,c,j){var k=h("ac-browser");
var f=h("./../../views/mediaView/HTML5Video");var i=h("./../MediaController");var a=h("./../../adapter/element-adapter");
var d=h("./../../controller/textTracks/NativeTextTracksController");var b=h("./../../controller/textTracks/PolyfillTextTracksController");
var g=h("./../../controller/textTracks/WebkitClosedCaptions");var l=h("./../../models/Video");
var m=function(o,v){v=v||{};if(!(o instanceof l)){o=new l(o)}var n=v.view||new f({model:o,element:v.element,template:"elementVideo"});
var q=n.getMediaElement();var s=a.create(q,"video");var t=k.name.toLowerCase();
var p=(t==="ie"||t==="edge");var r;if(!("textTracks" in q)&&"webkitClosedCaptionsVisible" in q){r=new g(s)
}else{if(p){r=new b(s)}else{r=new d(s)}}if(v.textTracks){v.textTracks.forEach(function(w){var x=w;
if(typeof w==="string"){x={src:w}}r.addTextTrackFromRemoteVTT(x)})}var u=new i(s,{model:o,view:n,textTracks:r});
return u};c.exports=m},{"./../../adapter/element-adapter":914,"./../../controller/textTracks/NativeTextTracksController":921,"./../../controller/textTracks/PolyfillTextTracksController":922,"./../../controller/textTracks/WebkitClosedCaptions":924,"./../../models/Video":934,"./../../views/mediaView/HTML5Video":943,"./../MediaController":926,"ac-browser":3}],930:[function(d,c,g){var h=d("./../../views/mediaView/QuickTime");
var a=d("./../../adapter/element-adapter");var f=d("./../MediaController");var b=d("./../../controller/textTracks/PolyfillTextTracksController");
var j=d("./../../models/Video");var i=function(p,n){var q;var o;var l;var m;var k;
n=n||{};if(!(p instanceof j)){p=new j(p)}m=new h({model:p});l=m.getMediaElement();
q=a.create(l,"quicktime");k=new b(q);if(n.textTracks){n.textTracks.forEach(function(r){var s=r;
if(typeof r==="string"){s={src:r}}k.addTextTrackFromRemoteVTT(s)})}o=new f(q,{model:p,view:m,textTracks:k});
return o};c.exports=i},{"./../../adapter/element-adapter":914,"./../../controller/textTracks/PolyfillTextTracksController":922,"./../../models/Video":934,"./../../views/mediaView/QuickTime":945,"./../MediaController":926}],931:[function(c,f,b){var h=c("ac-mvc-model").Model;
var a=c("ac-object");function d(){h.apply(this,arguments)}var g=d.prototype=a.create(h.prototype);
g.defaultAttributes={};g.getFullyQualifiedURL=function(){var k=this.get("src");
var j;var i=window.location.origin||window.location.protocol+"//"+window.location.hostname;
if(/http(s)?/.test(k)){return k}else{if(k.slice(0,2)==="//"){return window.location.protocol+k
}else{if(k[0]!=="/"){j=window.location.pathname;j=j.substring(0,j.lastIndexOf("/")+1);
return i+j+k}}}return i+k};f.exports=d},{"ac-mvc-model":718,"ac-object":752}],932:[function(c,d,b){var h=c("ac-mvc-model").Model;
var a=c("ac-object");function g(i){h.apply(this,arguments)}var f=g.prototype=a.create(h.prototype);
f.defaultAttributes={mode:"disabled"};f.setNativeTextTrack=function(i){this._textTrackData=i||[]
};f.getNativeTextTrack=function(){if(!this._textTrackData||this._textTrackData.length===0){return false
}return this._textTrackData[0].text};f.setTextTrackEl=function(i){this._textTrackEl=i
};f.getTextTrackEl=function(){return this._textTrackEl};f.getTextTrackInnerEl=function(){return this._textTrackInnerEl
};f.setTextTrackInnerEl=function(i){this._textTrackInnerEl=i};f.getCues=function(){return this._textTrackData
};f.removeCue=function(i){if(typeof i!=="number"){return}if(!this._textTrackData[i]){return
}this._textTrackData.splice(i,1)};f.addCue=function(l,j,k){var i={startTime:l,endTime:j,text:k};
this._textTrackData.push(i)};f.addVTTCue=function(i){if(this._currentVTTCue!==i){this._currentVTTCue=i;
if(this._textTrackInnerEl){this._textTrackInnerEl.innerHTML=i}}};f.removeVTTCue=function(i){if(this._currentVTTCue===i){if(this._textTrackInnerEl){this._textTrackInnerEl.innerHTML=""
}}};f.show=function(){this.set({mode:"showing"})};f.hide=function(){this.set({mode:"hidden"})
};f.disable=function(){this.set({mode:"disabled"})};d.exports=g},{"ac-mvc-model":718,"ac-object":752}],933:[function(c,d,b){var h=c("ac-mvc-model").Model;
var a=c("ac-object");function g(i){h.apply(this,arguments)}var f=g.prototype=a.create(h.prototype);
f.defaultAttributes={mode:"disabled"};f.setNativeTextTrack=function(i){this._nativeTextTrack=i
};f.getNativeTextTrack=function(){return this._nativeTextTrack};f.getCues=function(){return this._nativeTextTrack.cues
};f.removeCue=function(i){this._nativeTextTrack.removeCue(i)};f.addCue=function(l,j,k){var i=new VTTCue(l,j,k);
this.addVTTCue(i)};f.addVTTCue=function(i){this._nativeTextTrack.addCue(i)};f.show=function(){this.set({mode:"showing"})
};f.hide=function(){this.set({mode:"hidden"})};f.disable=function(){this.set({mode:"disabled"})
};d.exports=g},{"ac-mvc-model":718,"ac-object":752}],934:[function(f,c,h){var d=f("ac-mvc-model").Model;
var g=f("ac-object");var l=f("./../collection/MediaSourceCollection");var j=f("./MediaSource");
var b=f("ac-video-posterframe");var a=b.defaultPosterPath();function k(){d.apply(this,arguments);
this._sources=new l();if(this.has("src")){this._addInitSources()}}var i=k.prototype=g.create(d.prototype);
i.defaultAttributes={duration:"NaN",readyState:0,currentTime:0,paused:true,playbackRate:1,ended:false,seeking:false,controls:false,muted:false,volume:1,looping:false,poster:a,defaultPlaybackRate:1,defaultMuted:false,currentSrc:null,preload:"auto"};
i._addInitSources=function(){var m=this.get("src");if(!Array.isArray(m)){m=[m]}m.forEach(this.addSource,this)
};i.findSourcesByFullyQualifiedURL=function(m){return this._sources.filter(function(n){return(n.getFullyQualifiedURL()===m)
})};i.getPoster=function(){return this.get("poster")};i.setAutoplay=function(m){this.set({autoplay:m})
};i.setPoster=function(m){this.set({poster:m})};i.setPreload=function(m){this.set({preload:m})
};i.addSource=function(n){var m=this.createSource(n);this._sources.add(m);this.trigger("source:add",{source:m});
if(this._sources.models.length===1){this.setCurrentSrc(m)}return m};i._coerceMediaSourceData=function(m){if(typeof m==="string"){return{src:m}
}return m};i.createSource=function(m){if((m instanceof j)){return m}return new j(this._coerceMediaSourceData(m))
};i.findSources=function(n,m){if(typeof n==="string"){n={src:n}}return this._sources.find(n,m)
};i.getSources=function(){return this._sources};i.getAutoplay=function(){return this.get("autoplay")
};i.setCurrentTime=function(m){this.set({currentTime:m})};i.getPreload=function(){return this.get("preload")
};i.setSrc=function(m){this.set({currentSrc:m.cid})};i.setCurrentSrc=function(m){this.set({currentSrc:m.cid})
};i.getCurrentSrc=function(){return this._sources.get(this.get("currentSrc"))};
i.setReadyState=function(m){this.set({readyState:m})};i.getDefaultMuted=function(){return this.get("defaultMuted")
};i.getDefaultPlaybackRate=function(){return this.get("defaultPlaybackRate")};i.setLoop=function(m){this.set({loop:m})
};i.getLoop=function(){return this.get("loop")};i.getSeeking=function(){return this.get("seeking")
};i.getReadyState=function(){return this.get("readyState")};i.getDuration=function(){return this.get("duration")
};i.getCurrentTime=function(){return this.get("currentTime")};i.setVolume=function(m){this.set({volume:m})
};i.getVolume=function(){return this.get("volume")};i.getPaused=function(){return this.get("paused")
};i.getPlaybackRate=function(){return this.get("playbackRate")};i.setEnded=function(m){this.set({ended:m})
};i.getEnded=function(){return this.get("ended")};i.getMuted=function(){return this.get("muted")
};i.setPlaybackRate=function(m){this.set({playbackRate:m})};i.setMuted=function(n,m){this.set({muted:n},m)
};c.exports=k},{"./../collection/MediaSourceCollection":915,"./MediaSource":931,"ac-mvc-model":718,"ac-object":752,"ac-video-posterframe":906}],935:[function(b,d,a){var c=b("./../../MediaSource");
function f(g){var i=g.getAttribute("src");var h={src:i};if(g.getAttribute("type")){h.type=g.getAttribute("type")
}return new c(h)}d.exports=f},{"./../../MediaSource":931}],936:[function(c,b,g){var j=c("./../../Video");
var a=c("ac-dom-traversal/querySelectorAll");var d=c("ac-object");var i=c("./../../mediaSource/factory/createFromSourceTag");
function h(k,l){if(l.getAttribute("preload")){k.preload=l.getAttribute("preload")
}}function f(l,m){var k;l.src=[];if(m.getAttribute("src")){l.src.push(i(m))}k=a("source",m);
if(k.length){k=k.map(function(n){return i(n)});l.src=l.src.concat(k)}}b.exports=function(m,o){o=o||{};
var n;var l;var k={paused:m.paused,currentTime:m.currentTime,duration:m.duration,muted:m.muted,volume:m.volume,playbackRate:m.playbackRate,ended:m.ended,readyState:m.readyState,seeking:m.seeking,poster:m.poster,defaultPlaybackRate:m.defaultPlaybackRate,defaultMuted:m.defaultMuted,currentSrc:m.currentSrc,autoplay:m.autoplay};
h(k,m);f(k,m);k=d.extend(k,o);n=new j(k);if(m.currentSrc){l=n.findSourcesByFullyQualifiedURL(m.currentSrc);
if(l&&l[0]){n.setCurrentSrc(l[0])}}return n}},{"./../../Video":934,"./../../mediaSource/factory/createFromSourceTag":935,"ac-dom-traversal/querySelectorAll":42,"ac-object":752}],937:[function(i,a,q){var o=i("ac-mvc-view").View;
var c=i("ac-video-controls");var p=i("./../controls/Native");var r=i("ac-object");
var d=i("ac-fullscreen");var k=i("ac-feature");var f=i("./../const/readyState");
var j=i("ac-video-posterframe");var h=i("ac-dom-events/addEventListener");var b=i("ac-classlist/add");
var g=i("ac-classlist/remove");var n=i("ac-classlist/contains");var s="user-hover";
function m(){o.apply(this,arguments);if(this.options.mediaController){this.setMediaController(this.options.mediaController)
}this.poster=null;this._initPoster();this._initControls();this._listenForFullscreenEvents();
if(k.isDesktop()){this._appendBlockade()}}m.LOADEDMETADATA=f.LOADEDMETADATA;m.LOADEDDATA=f.LOADEDDATA;
m.CANPLAY=f.CANPLAY;m.CANPLAYTHROUGH=f.CANPLAYTHROUGH;var l=m.prototype=r.create(o.prototype);
l.defaultOptions={controlsTimeoutDuration:5000};l.className="ac-video-player";l._appendBlockade=function(){var t=new o({className:"ac-video-blockade"});
t.appendTo(this.el);this._blockade=t};l._onEnterFullscreen=function(t){if(t.target===this.getFullscreenTargetElement()){this.trigger("enterfullscreen",t)
}};l._onExitFullscreen=function(t){if(t.target===this.getFullscreenTargetElement()){this.trigger("exitfullscreen",t)
}};l._listenForFullscreenEvents=function(){d.on("enterfullscreen",this._onEnterFullscreen,this);
d.on("exitfullscreen",this._onExitFullscreen,this)};l._unbindFullscreenEvents=function(){d.off("enterfullscreen",this._onEnterFullscreen,this);
d.off("exitfullscreen",this._onExitFullscreen,this)};l.destroy=function(){o.prototype.destroy.call(this);
this._unbindFullscreenEvents()};l._initPoster=function(){var t=null;if(this.mediaController.hasPoster()&&this.poster===null){t=j.create(this.mediaController);
t.render();if(t.el.parentNode!==this.el){t.appendTo(this.el)}this.poster=t}};l._destroyPoster=function(){if(this.poster&&this.poster.el.parentNode===this.el){this.el.removeChild(this.poster.el)
}this.poster=null};l.getFullscreenTargetElement=function(){return(d.getMode()==="ios"?this.getMediaElement():this.el)
};l.toggleFullscreen=function(){if(this.isFullscreen()){this.exitFullscreen()}else{this.requestFullscreen()
}};l.isFullscreen=function(){return(d.fullscreenElement()===this.getFullscreenTargetElement())
};l.requestFullscreen=function(){var t=this.getFullscreenTargetElement();if(d.fullscreenEnabled(t)){d.requestFullscreen(t)
}};l.exitFullscreen=function(){d.exitFullscreen(this.getFullscreenTargetElement())
};l._instantiateDefaultCustomUIControls=function(){var v=this._instantiateControls(c);
if(v.el.parentNode!==this.el&&typeof v.appendTo==="function"){v.appendTo(this.el)
}var x;var w={};var t=function(y){if(y.pageX!==undefined&&(w.x===y.pageX&&w.y===y.pageY)){return
}if(!n(this.el,s)){b(this.el,s)}window.clearTimeout(x);x=window.setTimeout(function(){g(this.el,s)
}.bind(this),this.options.controlsTimeoutDuration);w={x:y.pageX,y:y.pageY}}.bind(this);
h(this.el,"mouseenter",t);h(this.el,"mousemove",t);var u=function(){window.clearTimeout(x);
g(this.el,s);w={}};if("onmouseleave" in this.el){h(this.el,"mouseleave",u.bind(this))
}else{h(this.el,"mouseout",function(y){if(!v.el.contains(y.target)&&y.target!==v.el){u.call(this)
}}.bind(this),true)}return v};l._instantiateControls=function(t){if(typeof t.create!=="function"){return t
}return t.create({player:this.mediaController,fullScreenElement:this.getFullscreenTargetElement()})
};l._instantiateNonHandheldControls=function(){var u=this.options.controls;var t;
if(u===false||u===null){t=null}else{if(u!==undefined){t=this._instantiateControls(u)
}else{if(k.isDesktop()){t=this._instantiateDefaultCustomUIControls()}else{t=this._instantiateControls(p)
}}}return t};l._instantiateHandheldControls=function(){return this._instantiateControls(p)
};l._initControls=function(){var t;if(!k.isHandheld()){t=this._instantiateNonHandheldControls()
}else{t=this._instantiateHandheldControls()}this.controls=t};l.setMediaController=function(t){if(this.mediaController){this.mediaController.stopPropagatingTo(this)
}this.mediaController=t;this.mediaController.propagateTo(this._eventEmitter)};l.getVideo=function(){return this.mediaController.getVideo()
};l.play=function(){return this.mediaController.play()};l.pause=function(){return this.mediaController.pause()
};l.getPaused=function(){return this.mediaController.getPaused()};l.setMuted=function(t){return this.mediaController.setMuted(t)
};l.getMuted=function(){return this.mediaController.getMuted()};l.getEnded=function(){return this.mediaController.getEnded()
};l.setVolume=function(t){return this.mediaController.setVolume(t)};l.getVolume=function(){return this.mediaController.getVolume()
};l.setCurrentTime=function(t){return this.mediaController.setCurrentTime(t)};l.getCurrentTime=function(){return this.mediaController.getCurrentTime()
};l.getPreload=function(){return this.mediaController.getPreload()};l.setPreload=function(t){return this.mediaController.setPreload(t)
};l.setPlaybackRate=function(t){return this.mediaController.setPlaybackRate(t)};
l.getPlaybackRate=function(){return this.mediaController.getPlaybackRate()};l.getDuration=function(){return this.mediaController.getDuration()
};l.setLoop=function(t){return this.mediaController.setLoop(t)};l.getLoop=function(){return this.mediaController.getLoop()
};l.getError=function(){return this.mediaController.getError()};l.getPoster=function(){return this.mediaController.getPoster()
};l.getMediaWidth=function(){return this.mediaController.getWidth()};l.getMediaHeight=function(){return this.mediaController.getHeight()
};l.setPoster=function(){this.mediaController.setPoster.apply(this.mediaController,arguments);
if(this.mediaController.hasPoster()){this._initPoster()}else{this._destroyPoster()
}};l.setSrc=function(){return this.mediaController.setSrc.apply(this.mediaController,arguments)
};l.getCurrentSrc=function(){return this.mediaController.getCurrentSrc()};l.getSources=function(){return this.mediaController.getSources()
};l.getNetworkState=function(){return this.mediaController.getNetworkState()};l.getReadyState=function(){return this.mediaController.getReadyState()
};l.getDefaultPlaybackRate=function(){return this.mediaController.getDefaultPlaybackRate()
};l.getSeekable=function(){return this.mediaController.getSeekable()};l.getDefaultMuted=function(){return this.mediaController.getDefaultMuted()
};l.getSeeking=function(){return this.mediaController.getSeeking()};l.getStartDate=function(){return this.mediaController.getStartDate()
};l.getPlayed=function(){return this.mediaController.getPlayed()};l.getBuffered=function(){return this.mediaController.getBuffered()
};l.getTextTracks=function(){return this.mediaController.getTextTracks()};l.getTextTracksCount=function(){return this.mediaController.getTextTracksCount()
};l.addTextTrackFromRemoteVTT=function(){return this.mediaController.addTextTrackFromRemoteVTT.apply(this.mediaController,arguments)
};l.addTextTrack=function(){return this.mediaController.addTextTrack.apply(this.mediaController,arguments)
};l.removeTextTrack=function(){return this.mediaController.removeTextTrack.apply(this.mediaController,arguments)
};l.getEnabledTextTracks=function(){return this.mediaController.getEnabledTextTracks.apply(this.mediaController,arguments)
};l.getVisibleTextTracks=function(){return this.mediaController.getVisibleTextTracks.apply(this.mediaController,arguments)
};l.findTextTrack=function(t){return this.mediaController.findTextTrack(t)};l.findTextTrackModelFromNativeTrack=function(t){return this.mediaController.findTextTrackModelFromNativeTrack(t)
};l.getMediaElement=function(){return this.mediaController.getMediaElement()};a.exports=m
},{"./../const/readyState":920,"./../controls/Native":925,"ac-classlist/add":601,"ac-classlist/contains":607,"ac-classlist/remove":611,"ac-dom-events/addEventListener":648,"ac-feature":698,"ac-fullscreen":302,"ac-mvc-view":749,"ac-object":752,"ac-video-controls":825,"ac-video-posterframe":906}],938:[function(f,g,c){var d=f("./../Player");
var h=f("./../../mediaController/factory/create");var a=f("ac-dom-nodes");var b=f("./../../collection/playerCollection");
g.exports=function(k,i){i=i||{};var j;if(!i.mediaController){i.mediaController=h(k,i)
}j=new d(i);if(i.mediaController.getViewElement().parentNode!==j.el){a.insertFirstChild(i.mediaController.getViewElement(),j.el)
}if(!i.preventCollection){b.add(j)}return j}},{"./../../collection/playerCollection":918,"./../../mediaController/factory/create":927,"./../Player":937,"ac-dom-nodes":674}],939:[function(d,g,c){var h=d("./../../config/VideoConfig");
var a=d("./../../models/Video");var b=d("./create");var f=function(i){var j=new h();
var l;var m;j.getConfig(i,{},{}).then(function(n){n.id=i.id;l=n;m=n.source});var k=new a({src:m});
return b(k)};g.exports=f},{"./../../config/VideoConfig":919,"./../../models/Video":934,"./create":938}],940:[function(c,b,g){var d=c("./create");
var i=c("./../../mediaController/factory/createFromVideoTag");var a=c("ac-dom-traversal/querySelectorAll");
var h=c("ac-dom-traversal/querySelector");function f(m){var k=a("source",m);var l=0;
for(l;l<k.length;l+=1){k[l].parentNode.removeChild(k[l])}}var j=function(l,k){k=k||{};
var m=h("video",l);if(m===null){m=document.createElement("video");l.appendChild(m)
}if(typeof k.src!=="undefined"&&k.src!==null){f(m)}k.mediaController=i(m,k);k.element=l;
return d(null,k)};b.exports=j},{"./../../mediaController/factory/createFromVideoTag":928,"./create":938,"ac-dom-traversal/querySelector":41,"ac-dom-traversal/querySelectorAll":42}],941:[function(b,d,a){var c=b("ac-browser");
d.exports={get:function(){var f="html5";if(c.name==="IE"&&c.version<9){f="quicktime"
}return f}}},{"ac-browser":3}],942:[function(b,c,a){var f=b("ac-mvc-view").View;
function g(){f.apply(this,arguments)}var d=g.prototype=new f();d.tagName="source";
d.render=function(){this.el.setAttribute("src",this.model.get("src"));if(this.model.has("type")){this.el.setAttribute("type",this.model.get("type"))
}};c.exports=g},{"ac-mvc-view":749}],943:[function(c,b,f){var a=c("./MediaView");
var j=c("./../MediaSourceTag");var d=c("ac-object");var g=c("ac-dom-traversal/querySelector");
function i(){a.apply(this,arguments)}var h=i.prototype=d.create(a.prototype);h.tagName="video";
h._renderBooleanAttribute=function(k,m){var l=this.getMediaElement();if(m===true){l.setAttribute(k,"")
}else{l.removeAttribute(k)}};h._findExistingSourceOrTrackElement=function(m){var k;
var l;if(m.has("src")){l='[src="'+m.get("src")+'"]';k=g(l,this.el)}return k};h._appendSource=function(n){var l=this.getMediaElement();
var m=this._findExistingSourceOrTrackElement(n);var k=new j({model:n,element:m});
k.render();if(!m){k.appendTo(l)}};h._onSourceAdd=function(k){this._appendSource(k.source)
};h._renderPreload=function(){var k=this.getMediaElement();k.setAttribute("preload",this.model.getPreload())
};h._renderAutoplay=function(){this._renderBooleanAttribute("autoplay",this.model.getAutoplay())
};h._renderMuted=function(){this._renderBooleanAttribute("muted",this.model.getMuted())
};h._renderAirplay=function(){this._renderBooleanAttribute("x-webkit-airplay",true)
};h._renderCrossOrigin=function(){var k=this.getMediaElement();if(this.model.has("crossorigin")){k.setAttribute("crossorigin",this.model.get("crossorigin"))
}};h._renderCurrentSrc=function(){var k=this.model.getCurrentSrc();if(k){this.el.setAttribute("src",k.get("src"))
}};h._renderLoop=function(){var k=this.model.getLoop();this._renderBooleanAttribute("loop",k)
};h._respondToAddTrackEvent=function(k){this.emitterTrigger("addtrack",k.data)};
h.getSourceAttribute=function(){return this.getMediaElement().getAttribute("src")
};h.render=function(){var k=this.getMediaElement();this.model.on("source:add",this._onSourceAdd,this);
this.model.on("change:autoplay",this._renderAutoplay,this);this.model.on("change:muted",this._renderMuted,this);
this.model.on("change:preload",this._renderPreload,this);this.model.on("change:currentSrc",this._renderCurrentSrc,this);
this.model.on("change:crossorigin",this._renderCrossOrigin,this);this.model.getSources().forEach(this._appendSource,this);
this._renderAutoplay();this._renderPreload();this._renderMuted();this._renderAirplay();
this._renderCrossOrigin();this._renderCurrentSrc();this._renderLoop();if(this.model.id){k.setAttribute("id",this.model.id)
}};b.exports=i},{"./../MediaSourceTag":942,"./MediaView":944,"ac-dom-traversal/querySelector":41,"ac-object":752}],944:[function(c,b,f){var g=c("ac-dom-traversal/querySelector");
var i=c("ac-browser");var j=c("ac-mvc-view").View;var d=c("ac-object");function a(){this._mediaElement=null;
j.apply(this,arguments)}var h=a.prototype=d.create(j.prototype);h.className="ac-video-media-controller";
h._findMediaElementByTagName=function(k){if(this.getTagName()===k){return this.el
}return g(k,this.el)};h.renderTextTrack=function(){};h._findMediaElement=function(){if(this._findMediaElementByTagName("video")){return this._findMediaElementByTagName("video")
}else{if(i.name!=="IE"){return this._findMediaElementByTagName("embed")}}return this._findMediaElementByTagName("object")
};h.getMediaElement=function(){return this._findMediaElement()};b.exports=a},{"ac-browser":3,"ac-dom-traversal/querySelector":41,"ac-mvc-view":749,"ac-object":752}],945:[function(f,c,i){var b=f("./MediaView");
var d=f("./eventAdapters/QuickTime");var m=f("./eventAdapters/quicktimeEventsElement");
var h=f("ac-object");var l=f("ac-browser");var g=(l.os.toLowerCase()==="windows");
var a=f("ac-dom-traversal");function k(){b.apply(this,arguments);this._hasRendered=false;
this.model.on("change:currentSrc",this._renderString,this)}var j=k.prototype=h.create(b.prototype);
j._renderID=function(){this._objectStr+=' id="quicktime-movie-'+Date.now()+'"'};
j._renderClsidAttr=function(){this._objectStr+=' classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B"'
};j._renderCodebaseAttr=function(){this._objectStr+=' codebase="https://www.apple.com/qtactivex/qtplugin.cab#version=7,2,1,0"'
};j._renderWModeAttr=function(){this._renderParamAttr("wmode","transparent");this._renderEmbedAttr("wmode","transparent")
};j._renderPostDomEventsAttr=function(){this._objectStr+=' postdomevents="true"'
};j._renderBehaviorAttr=function(){var n=m.getID();if(n){this._objectStyles.push("behavior:url('#"+n+"')")
}};j._renderAutoplay=function(){var n=(this.model.getAutoplay()===true)?"True":"False";
this._renderAttr("autoplay",n)};j._renderVolume=function(){var n=this.model.getMuted();
var o=this.model.getVolume()*256;if(n){o=0}this._renderAttr("volume",o)};j._renderLoop=function(){var n=(this.model.getLoop()===true)?"True":"False";
this._renderAttr("loop",n)};j._renderAttr=function(o,n){this._renderParamAttr(o,n);
this._renderEmbedAttr(o,n)};j._closeOpeningObjectTag=function(){this._objectStr+=">"
};j._renderParamAttr=function(o,n){this._objectStr+='<param name="'+o+'" value="'+n+'" />'
};j._renderEmbedAttr=function(o,n){this._embedStr+=" "+o+'="'+n+'"'};j._closeEmbedTag=function(){this._embedStr+=" />"
};j._closeObjectTag=function(){this._objectStr+="</object>"};j._renderSrc=function(){var n=this.model.getCurrentSrc();
if(n){this._renderAttr("src",n.get("src"))}};j._renderStyleAttr=function(){this._objectStr+=' style="'+this._objectStyles.join(";")+';"';
this._embedStr+=' style="'+this._embedStyles.join(";")+';"'};j.getSourceAttribute=function(){return this.getMediaElement().getAttribute("src")
};j._renderOffscreen=function(){var s=window.screen.width+10;var n=window.screen.height+10;
var q=Math.max(s,n);var p="width:"+q+"px";var r="height:"+q+"px";var t="position:fixed";
var o="left:"+s+"px";this._embedStyles.push(p);this._embedStyles.push(r);this._embedStyles.push(t);
this._embedStyles.push(o);this._objectStyles.push(p);this._objectStyles.push(r);
this._objectStyles.push(t);this._objectStyles.push(o);this._renderStyleAttr()};
j._doneRenderOffscreen=function(){var p=a.querySelector("embed",this.el);var n=a.querySelector("object",this.el);
var o=n.style.cssText.toLowerCase().match(/behavior\((.)+\)/);if(o){n.setAttribute("style",o)
}else{n.removeAttribute("style")}if(p){p.removeAttribute("style")}};j._renderString=function(){var n=(l.name.toLowerCase()==="ie"&&l.version<9);
this._objectStr="<object";this._embedStr="<embed";this._objectStyles=[];this._embedStyles=[];
this._renderClsidAttr();this._renderCodebaseAttr();this._renderID();this._renderPostDomEventsAttr();
this._renderBehaviorAttr();if(g){if(!n){this._renderOffscreen()}else{this._renderStyleAttr()
}}this._closeOpeningObjectTag();this._renderWModeAttr();this._renderAutoplay();
this._renderSrc();this._renderVolume();this._renderLoop();this._renderAttr("enablejavascript","true");
this._renderAttr("postdomevents","true");this._renderAttr("scale","tofit");this._renderAttr("controller","false");
this._renderEmbedAttr("pluginspage","www.apple.com/quicktime/download");this._renderParamAttr("kioskmode","true");
this._renderParamAttr("pluginspace","https://www.apple.com/qtactivex/qtplugin.cab");
this._closeEmbedTag();this._objectStr+=this._embedStr;this._closeObjectTag();this.el.innerHTML=this._objectStr;
this._quickTimeEvents=new d(this.getMediaElement(),this);this.emitterTrigger("mediaelementchange",{});
if(g&&!n){window.requestAnimationFrame(function(){this._doneRenderOffscreen()}.bind(this))
}};j.render=function(){if(this._hasRendered===true){return}this._hasRendered=true;
this._renderString()};c.exports=k},{"./MediaView":944,"./eventAdapters/QuickTime":946,"./eventAdapters/quicktimeEventsElement":949,"ac-browser":3,"ac-dom-traversal":18,"ac-object":752}],946:[function(b,a,f){var j=b("ac-dom-emitter").DOMEmitter;
var h=b("./QuickTimeTimeUpdate");var i=b("./QuickTimePluginReady");var c=b("ac-object");
function d(k,l){j.call(this,k);if(this._isObjectTag()===false){this._aliasEvents()
}else{this._plugin=new i(k);this._plugin.once("ready",function(){this._plugin=undefined;
this._aliasEvents()},this);this._plugin.poll()}this._propagationTarget=l}var g=d.prototype=c.create(j.prototype);
g._bubble=function(k){this._propagationTarget.emitterTrigger(k,{target:this.el})
};g._onTimeupdateObserverTimeUpdate=function(){this._bubble("timeupdate")};g._onQTPlay=function(){this._timeupdateObserver.listenForTimeUpdate();
this._bubble("play")};g._onQTPause=function(){this._timeupdateObserver.stopListenForTimeUpdate();
this._bubble("pause")};g._onQTEnded=function(){this._timeupdateObserver.stopListenForTimeUpdate();
this._bubble("ended")};g._onQTBegin=function(){this._bubble("loadstart")};g._onQTVolumeChange=function(){this._bubble("volumechange")
};g._onQTProgressChange=function(){this._bubble("progress")};g._onQTError=function(){this._bubble("error")
};g._onQTStalled=function(){this._bubble("stalled")};g._onQTCanPlay=function(){this._bubble("canplay")
};g._onQTCanPlayThrough=function(){this._bubble("canplaythrough")};g._onQTDurationChange=function(){this._bubble("durationchange")
};g._onQTLoadedMetaData=function(){this._bubble("loadedmetadata")};g._onQTloadedFirstFrame=function(){this._bubble("loadeddata")
};g._onQTWaiting=function(){this._bubble("waiting")};g._onQTTimeChanged=function(){this._bubbleTimeUpdate()
};g._bubbleTimeUpdate=function(){this._bubble("timeupdate")};g._isObjectTag=function(){return(this.el.tagName.toLowerCase()==="object")
};g._getEventName=function(k){if(this._isObjectTag()){return"on"+k}return k};g._bindEvents=function(n,m,l){var k=this._getEventName(n);
if(typeof this.el.attachEvent==="function"){this.el.attachEvent(k,function(o){m.call(l,o)
})}else{this.on(n,m,l)}};g._aliasEvents=function(){this._bindEvents("qt_play",this._onQTPlay,this);
this._bindEvents("qt_pause",this._onQTPause,this);this._bindEvents("qt_begin",this._onQTBegin,this);
this._bindEvents("qt_volumechange",this._onQTVolumeChange,this);this._bindEvents("qt_progress",this._onQTProgressChange,this);
this._bindEvents("qt_error",this._onQTError,this);this._bindEvents("qt_stalled",this._onQTStalled,this);
this._bindEvents("qt_canplay",this._onQTCanPlay,this);this._bindEvents("qt_canplaythrough",this._onQTCanPlayThrough,this);
this._bindEvents("qt_durationchange",this._onQTDurationChange,this);this._bindEvents("qt_ended",this._onQTEnded,this);
this._bindEvents("qt_loadedmetadata",this._onQTLoadedMetaData,this);this._bindEvents("qt_loadedfirstframe",this._onQTloadedFirstFrame,this);
this._bindEvents("qt_waiting",this._onQTWaiting,this);this._bindEvents("qt_timechanged",this._onQTTimeChanged,this);
this._timeupdateObserver=new h(this.el);this._timeupdateObserver.on("timeupdate",this._onTimeupdateObserverTimeUpdate,this)
};a.exports=d},{"./QuickTimePluginReady":947,"./QuickTimeTimeUpdate":948,"ac-dom-emitter":645,"ac-object":752}],947:[function(c,d,b){var g=c("ac-event-emitter").EventEmitter;
var a=c("ac-object");function h(i){g.call(this);this._movie=i;this._pollInterval=5;
this._boundPoll=this.poll.bind(this)}var f=h.prototype=a.create(g.prototype);f._resetMovieUrl=function(){var i=this._movie;
var j;i.SetResetPropertiesOnReload(false);j=i.GetURL();i.autoplay=true;j+=(j.indexOf("?")!==-1)?"&rnd="+Math.random():"?rnd="+Math.random();
i.SetURL(j)};f.getPluginStatus=function(){var i="";try{i=this._movie.GetPluginStatus()
}catch(j){}return i};f.isAPIAvailable=function(){var i;try{this._movie.GetVolume();
i=true}catch(j){i=false}return i};f.isReady=function(){return/(Complete)/i.test(this.getPluginStatus())
};f._triggerReady=function(){this.trigger("ready")};f.poll=function(){if(this.isReady()){this._resetMovieUrl();
this._triggerReady()}else{setTimeout(this._boundPoll,this._pollInterval)}};d.exports=h
},{"ac-object":752}],948:[function(c,f,b){var h=c("ac-event-emitter").EventEmitter;
var a=c("ac-object");var d=300;function i(j){this.mediaElement=j;this._isListeningForTimeUpdate=false;
this._boundTick=null;this._lastTimeCheck=0;this._timeout=null}var g=i.prototype=a.create(h.prototype);
g.listenForTimeUpdate=function(){this._isListeningForTimeUpdate=true;this._boundTick=this._tick.bind(this);
window.setTimeout(this._boundTick,d)};g.stopListenForTimeUpdate=function(){window.clearTimeout(this._timeout);
this._isListeningForTimeUpdate=false;this._boundTick=null;this._timeout=null};g.getCurrentTime=function(){return this.mediaElement.GetTime()/this.mediaElement.GetTimeScale()
};g._tick=function(){var j=this.getCurrentTime();if(j!==this._lastTimeCheck){this.trigger("timeupdate")
}this._lastTimeCheck=j;if(this._isListeningForTimeUpdate&&this._boundTick){this._timeout=window.setTimeout(this._boundTick,d)
}};f.exports=i},{"ac-object":752}],949:[function(b,d,a){var c=b("ac-browser");var g=function(k,i){var j=(k.toUpperCase()==="IE"&&i<9);
if(!j){return}this.id="quicktime-events-element-"+Date.now();this.el=document.createElement("object");
this._setAttributes({id:this.getID(),wmode:"transparent",classid:"clsid:CB927D12-4FF7-4a9e-A169-56E4B8A75598",codebase:"https://www.apple.com/qtactivex/qtplugin.cab#version=7,2,1,0"});
this.appendToBody()};var f=g.prototype;f.appendToBody=function(){document.write(this.el.outerHTML)
};f.getID=function(){return this.id};f._setAttributes=function(j){for(var i in j){this.el.setAttribute(i,j[i])
}};var h=new g(c.name,c.version);d.exports=h;d.exports.C=g},{"ac-browser":3}],950:[function(d,c,f){var l=d("ac-mvc-view").View;
var h=d("./TextTrackDiv");var b=d("ac-object");var i=d("ac-dom-styles");var j=d("ac-dom-traversal/firstChild");
var m=d("ac-ajax-xhr");var a=d("ac-console");function k(){l.apply(this,arguments);
this.textTracks=[];this.textTrackEl=null;this.textTrackInnerEl=null;this.isVisible=false;
this._textTrackDivs=[];this.loadExistingTextTracksSrc()}var g=k.prototype=b.create(l.prototype);
g.loadExistingTextTracksSrc=function(){var o=(this.el&&this.el.children)?this.el.children:[];
var n=o.length;var p;while(n--){if(o[n]&&o[n].nodeName==="TRACK"){p=o[n].getAttribute("src");
break}}if(p){this.loadVTTFile(p)}};g.loadVTTFile=function(p,o){var n=p;var q={complete:function(s,r){},data:{},error:function(s,r){a.log(JSON.stringify(s))
},headers:{},success:function(s,r,t){this._vttFileLoadSuccess(s,o)}.bind(this),timeout:5000};
m.get(n,q)};g._vttFileLoadSuccess=function(p,n){var o=this.addTextTrackTag(n);this.textTrackEl=o.el;
this.textTrackInnerEl=j(this.textTrackEl);this.textTracks=this._formatVTTToModel(p);
this._publishAddTrack(this.textTracks)};g._publishAddTrack=function(n){this.emitterTrigger("addtrack",{track:n,textTrackEl:this.textTrackEl,textTrackInnerEl:this.textTrackInnerEl})
};g._publishRemoveTrack=function(n){this.emitterTrigger("removetrack",{track:n})
};g.show=function(){if(!this.textTrackEl||this.isVisible){return}i.setStyle(this.textTrackEl,{display:"inline-block"});
if(this.textTrackInnerEl){i.setStyle(this.textTrackInnerEl,{display:"inline-block"})
}this.isVisible=true};g.hide=function(){if(!this.textTrackEl||!this.isVisible){return
}i.setStyle(this.textTrackEl,{display:"none"});if(this.textTrackInnerEl){i.setStyle(this.textTrackInnerEl,{display:"none"})
}this.isVisible=false};g._createTextTrackDiv=function(n){var o=new h({model:n});
o.render();this.on("canplay",function(){o.appendTo(this.el.parentNode);this._textTrackDivs.push(o)
}.bind(this));return o};g.addTextTrackTag=function(n){return this._createTextTrackDiv(n)
};g._findTextTrackTagFromModel=function(p){var o=this._textTrackDivs.length;var q={};
for(var n=0;n<o;n++){if(this._textTrackDivs[n].model.cid===p.cid){q.div=this._textTrackDivs[n];
q.idx=n;break}}return q};g.removeTextTrackDiv=function(n){var o=this._findTextTrackTagFromModel(n);
if(o.div){o.div.destroy();this._textTrackDivs.splice(o.idx,1)}this._publishRemoveTrack(n.getCues())
};g._formatVTTToModel=function(t){var r=t.split(/\n/);var s=/([\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3}( \-\-> ){1}([\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3}/;
var q=[];var o;var u;var p=0;var n=r.length;for(p;p<n;p++){u="";if(s.test(r[p])){o=r[p].split(" --> ");
o[0]=o[0].split(":").length<3?"00:"+o[0]:o[0];o[1]=o[1].split(":").length<3?"00:"+o[1]:o[1];
while(++p&&p<n&&!s.test(r[p])){if(r[p]!==""){u+=r[p]+"<br />"}}u=u.substr(0,u.length-6);
if(p<n){p--}q.push({startTime:o[0].split(".")[0],endTime:o[1].split(".")[0],text:u})
}}return q};c.exports=k},{"./TextTrackDiv":951,"ac-ajax-xhr":596,"ac-console":613,"ac-dom-styles":695,"ac-dom-traversal/firstChild":17,"ac-mvc-view":749,"ac-object":752}],951:[function(c,d,a){var i=c("ac-mvc-view").View;
var b=c("ac-object");var h=c("ac-dom-styles");function g(){i.apply(this,arguments)
}var f=g.prototype=b.create(i.prototype);f.tagName="div";f.render=function(){var j=document.createElement("div");
h.setStyle(this.el,{display:"none",position:"absolute","z-index":"9",bottom:"20%",left:"0",right:"0","text-align":"center"});
h.setStyle(j,{display:"none",padding:"2px 4px","font-family":"Arial","font-weight":"700","font-size":"24px",color:"white","text-align":"center","background-color":"black"});
this.el.setAttribute("id",this.model.cid);this.el.appendChild(j)};d.exports=g},{"ac-dom-styles":695,"ac-mvc-view":749,"ac-object":752}],952:[function(c,f,a){var h=c("ac-mvc-view").View;
var b=c("ac-object");function d(){h.apply(this,arguments)}var g=d.prototype=b.create(h.prototype);
g._onModeChange=function(i){this.renderMode()};g.renderMode=function(){var i=this.model.get("mode");
this.el.mode=i};g.render=function(){this.model.on("change:mode",this._onModeChange,this)
};f.exports=d},{"ac-mvc-view":749,"ac-object":752}],953:[function(d,f,b){var h=d("ac-mvc-view").View;
var c=d("ac-object");function a(){h.apply(this,arguments)}var g=a.prototype=c.create(h.prototype);
g.tagName="track";g.render=function(){["src","type","label","kind","srclang"].forEach(function(i){if(this.model.has(i)){this.el.setAttribute(i,this.model.get(i))
}},this);this.el.setAttribute("id",this.model.cid)};f.exports=a},{"ac-mvc-view":749,"ac-object":752}],954:[function(d,f,b){var h=d("ac-mvc-view").View;
var i=d("./TextTrackTag");var c=d("ac-object");function a(){h.apply(this,arguments);
this._textTracks=this.el.textTracks;this._textTrackTags=[];this.addTextTrackEvents()
}var g=a.prototype=c.create(h.prototype);g.addTextTrackEvents=function(){if(this._textTracks){this._boundRespondToAddTrackEvent=this._respondToAddTrackEvent.bind(this);
this._boundRespondToChangeEvent=this._respondToChangeEvent.bind(this);this._boundRespondToRemoveTrackEvent=this._respondToRemoveTrackEvent.bind(this);
this._textTracks.addEventListener("addtrack",this._boundRespondToAddTrackEvent);
this._textTracks.addEventListener("change",this._boundRespondToChangeEvent);this._textTracks.addEventListener("removetrack",this._boundRespondToRemoveTrackEvent)
}};g.removeTextTrackEvents=function(){this._boundRespondToAddTrackEvent=null;this._boundRespondToChangeEvent=null;
this._boundRespondToRemoveTrackEvent=null;this._textTracks.removeEventListener("addtrack",this._boundRespondToAddTrackEvent);
this._textTracks.removeEventListener("change",this._boundRespondToChangeEvent);
this._textTracks.removeEventListener("removetrack",this._boundRespondToRemoveTrackEvent)
};g._respondToAddTrackEvent=function(j){this._addIdToTextTrackEventData(j);this.emitterTrigger("addtrack",{track:j.track})
};g._respondToChangeEvent=function(j){this.emitterTrigger("change",j)};g._respondToRemoveTrackEvent=function(j){this._addIdToTextTrackEventData(j);
this.emitterTrigger("removetrack",{track:j.track})};g._addIdToTextTrackEventData=function(j){if(j&&j.track&&this._textTrackId&&!j.track.id){j.track.id=this._textTrackId;
this._textTrackId=null}return j};g._createTextTrackTag=function(j){var k=new i({model:j});
k.render();this._textTrackId=k.el.id;k.appendTo(this.el);this._textTrackTags.push(k)
};g.addTextTrackTag=function(j){this._createTextTrackTag(j)};g._findTextTrackTagFromModel=function(k){var m=this._textTrackTags.length;
var l={};for(var j=0;j<m;j++){if(this._textTrackTags[j].model.cid===k.cid){l.tag=this._textTrackTags[j];
l.idx=j;break}}return l};g.removeTextTrackTag=function(j){var k=this._findTextTrackTagFromModel(j);
if(k.tag){k.tag.destroy();this._textTrackTags.splice(k.idx,1)}};f.exports=a},{"./TextTrackTag":953,"ac-mvc-view":749,"ac-object":752}],955:[function(c,d,a){var h=c("ac-mvc-view").View;
var b=c("ac-object");function f(){h.apply(this,arguments)}var g=f.prototype=b.create(h.prototype);
g._onModeChange=function(i){this._renderMode()};g._renderMode=function(){var i=this.model.get("mode");
if(i==="showing"){this.el.webkitClosedCaptionsVisible=true}else{this.el.webkitClosedCaptionsVisible=false
}};g.setModel=function(i){if(this.model){this.model.off("change:mode",this._onModeChange,this)
}this.model=i;this.listen()};g.listen=function(){this.model.on("change:mode",this._onModeChange,this)
};g.render=function(){this._renderMode();this.listen()};d.exports=f},{"ac-mvc-view":749,"ac-object":752}],956:[function(b,c,a){c.exports=b("ac-video-player")
},{"ac-video-player":911}],957:[function(b,c,a){c.exports.Smoother=b("./smoother/Smoother")
},{"./smoother/Smoother":958}],958:[function(c,d,b){d.exports=a;function a(f){f=f||this.sampling;
this.pool=new Array(f);this.raw=0;this.value=0}a.prototype.sampling=3;a.prototype.smooth=function(g,k){var j=0;
var f=this.pool.length;if(typeof this.pool[f-this.sampling]!=="undefined"){for(var h=this.sampling;
h>0;h--){j+=this.pool[f-h]}j+=g;j/=(this.sampling+1)}else{j=g}if(!k){this.raw=g;
this._track(j,true)}return j};a.prototype._track=function(g,f){if(f){this.value=g
}else{this.raw=this.value=g}this.pool.push(g);this.pool.shift()}},{}],959:[function(b,c,a){c.exports.ScrollTimeUpdate=b("./scroll-time-update/ScrollTimeUpdate");
c.exports.ElementScrollTimeUpdate=b("./scroll-time-update/ElementScrollTimeUpdate")
},{"./scroll-time-update/ElementScrollTimeUpdate":960,"./scroll-time-update/ScrollTimeUpdate":961}],960:[function(c,g,b){var f=c("./ScrollTimeUpdate"),d=c("window-delegate").WindowDelegate;
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
this._updateOnResize=false};g.exports=a},{"./ScrollTimeUpdate":961,"window-delegate":962}],961:[function(c,b,d){var f,j=c("ac-event-emitter").EventEmitter,a=c("ac-clock"),k=c("window-delegate").WindowDelegate,h=c("smoother").Smoother,i=c("ac-dom-emitter").DOMEmitter;
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
},{"ac-clock":7,"ac-dom-emitter":11,smoother:957,"window-delegate":962}],962:[function(b,c,a){c.exports.WindowDelegate=b("./window-delegate/WindowDelegate");
c.exports.windowEmitter=b("./window-delegate/windowEmitter")},{"./window-delegate/WindowDelegate":963,"./window-delegate/windowEmitter":964}],963:[function(c,f,a){var g;
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
}else{if(j){this.trigger("scrollStop")}}};f.exports=new d()},{"./windowEmitter":964}],964:[function(b,c,a){var d=b("ac-dom-emitter").DOMEmitter;
c.exports=new d(window)},{"ac-dom-emitter":11}],965:[function(b,a,c){b("../shared/objectcreate_polyfill");
b("../shared/objectassign_polyfill");var f=b("../shared/Shared"),d=b("ac-base").Environment,g=b("ac-base").Element,i=b("ac-base").Event,j=b("ac-router"),l=b("ac-base"),h=b("ac-films");
var k=(function(){return{initialize:function(){f.initialize();var t={};this.videos=g.selectAll(".section-film");
var p=["video-product-trigger","voice-text-trigger","reservations-trigger","gamers-trigger","huge-trigger","camera-trigger","health-trigger","duo-trigger"];
var s=true,o=(d.Browser.name==="IE"),r=(d.Browser.version<9),q=(d.Browser.name==="Chrome"),m=(d.Browser.os==="Windows");
if(!q){document.body.className+=" no-chrome"}if(o&&r){s=false}var n=this.videos.map(function(w){var u=g.select("a",w);
var x=w.id;var v=u.getAttribute("id");w.setAttribute("id",w.id+"-container");u.setAttribute("id",x);
if(!u.getAttribute("data-analytics-id")){u.setAttribute("data-analytics-id",v)}return u
});h.create(n,{modal:true});return this}}}());a.exports=k.initialize()},{"../shared/Shared":968,"../shared/objectassign_polyfill":970,"../shared/objectcreate_polyfill":971,"ac-base":false,"ac-films":283,"ac-router":568}],966:[function(b,a,d){var f,i=b("ac-base").Element,c=b("ac-object"),k=b("window-delegate").WindowDelegate,j=b("ac-event-emitter").EventEmitter;
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
},{"ac-base":false,"ac-object":465,"window-delegate":962}],967:[function(c,g,b){var f=c("scroll-time-update").ScrollTimeUpdate;
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
this.scrollTimeUpdate.start()}},{"ac-base":false,"scroll-time-update":959,"window-delegate":962}],968:[function(c,a,f){var d=c("./localnav");
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
return true}}catch(o){}l=false;return false}}}());a.exports=h},{"./BreakpointsDelegate":966,"./RevealNext":967,"./localnav":969,"ac-base":false}],969:[function(b,d,a){var h=b("ac-dom-emitter").DOMEmitter;
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
}}}}());d.exports=i},{"ac-base":false,"ac-dom-emitter":11,"window-delegate":962}],970:[function(b,c,a){if(!Object.assign){if(!Object.keys){Object.keys=function d(g){var f=[];
var h;if((!g)||(typeof g.hasOwnProperty!=="function")){throw"Object.keys called on non-object."
}for(h in g){if(g.hasOwnProperty(h)){f.push(h)}}return f}}if(Object.defineProperty){if(!Object.assign){Object.defineProperty(Object,"assign",{enumerable:false,configurable:true,writable:true,value:function(q,f){if(q===undefined||q===null){throw new TypeError("Cannot convert first argument to object")
}var s=Object(q);var o=false;var g;for(var h=1;h<arguments.length;h++){var l=arguments[h];
if(l===undefined||l===null){continue}var k=Object.keys(Object(l));for(var j=0,n=k.length;
j<n;j++){var r=k[j];try{var m=Object.getOwnPropertyDescriptor(l,r);if(m!==undefined&&m.enumerable){s[r]=l[r]
}}catch(p){if(!o){o=true;g=p}}}if(o){throw g}}return s}})}}else{Object.assign=function(){for(var g=1;
g<arguments.length;g++){for(var f in arguments[g]){if(arguments[g].hasOwnProperty(f)){arguments[0][f]=arguments[g][f]
}}}return arguments[0]}}}},{}],971:[function(b,c,a){if(!Object.create){var d=function(){};
Object.create=function(f){if(arguments.length>1){throw new Error("Second argument not supported")
}if(f===null||typeof f!=="object"){throw new TypeError("Object prototype may only be an Object.")
}d.prototype=f;return new d()}}},{}]},{},[965]);