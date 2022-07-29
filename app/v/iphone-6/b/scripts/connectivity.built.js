(function e(b,g,d){function c(k,i){if(!g[k]){if(!b[k]){var h=typeof require=="function"&&require;
if(!i&&h){return h(k,!0)}if(a){return a(k,!0)}throw new Error("Cannot find module '"+k+"'")
}var j=g[k]={exports:{}};b[k][0].call(j.exports,function(l){var m=b[k][1][l];return c(m?m:l)
},j,j.exports,e,b,g,d)}return g[k].exports}var a=typeof require=="function"&&require;
for(var f=0;f<d.length;f++){c(d[f])}return c})({1:[function(c,d,b){var g=c("./ac-clock/Clock"),f=c("./ac-clock/ThrottledClock"),a=c("./ac-clock/sharedClockInstance");
a.Clock=g;a.ThrottledClock=f;d.exports=a},{"./ac-clock/Clock":2,"./ac-clock/ThrottledClock":3,"./ac-clock/sharedClockInstance":4}],2:[function(c,d,b){var g;
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
},{}],3:[function(c,d,b){var g;var a=c("./sharedClockInstance"),f=c("ac-event-emitter").EventEmitter;
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
};d.exports=h},{"./sharedClockInstance":4}],4:[function(b,c,a){var d=b("./Clock");
c.exports=new d()},{"./Clock":2}],5:[function(b,c,a){c.exports.DOMEmitter=b("./ac-dom-emitter/DOMEmitter")
},{"./ac-dom-emitter/DOMEmitter":6}],6:[function(b,c,a){var g;var f=b("ac-event-emitter").EventEmitter;
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
this.off();this.el=this._eventEmitter=this._bindings=null};c.exports=h},{}],7:[function(b,c,a){var d=b("./ac-element-tracker/ElementTracker");
c.exports=new d();c.exports.ElementTracker=d},{"./ac-element-tracker/ElementTracker":8}],8:[function(c,b,g){var h;
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
}return o};b.exports=a},{"./TrackedElement":9,"ac-base":false,"ac-object":11,"window-delegate":36}],9:[function(b,c,a){var d;
var g=b("ac-dom-emitter").DOMEmitter;function f(h){if(h.nodeType&&h.nodeType>0){this.element=h
}else{throw new TypeError("TrackedElement: "+h+" is not a valid DOM element")}this.inView=false;
this.percentInView=0;this.pixelsInView=0;this.offsetTop=0;this.top=0;this.right=0;
this.bottom=0;this.left=0;this.width=0;this.height=0;g.call(this,h)}d=f.prototype=new g(null);
c.exports=f},{"ac-dom-emitter":5}],10:[function(i,c,x){var s=Object.prototype.toString;
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
}return a.stringify(g)}},{qs:10}],21:[function(b,d,a){var c=b("./ac-element-engagement/ElementEngagement");
d.exports=new c();d.exports.ElementEngagement=c},{"./ac-element-engagement/ElementEngagement":22}],22:[function(c,b,f){var g;
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
},this)};b.exports=a},{"ac-base":false,"ac-element-tracker":7,"ac-object":11}],23:[function(b,c,a){c.exports=b(10)
},{}],24:[function(b,c,a){c.exports={clone:b("./ac-object/clone"),defaults:b("./ac-object/defaults"),extend:b("./ac-object/extend"),getPrototypeOf:b("./ac-object/getPrototypeOf"),isEmpty:b("./ac-object/isEmpty"),toQueryParameters:b("./ac-object/toQueryParameters")}
},{"./ac-object/clone":25,"./ac-object/defaults":26,"./ac-object/extend":27,"./ac-object/getPrototypeOf":28,"./ac-object/isEmpty":29,"./ac-object/toQueryParameters":30}],25:[function(b,c,a){c.exports=b(12)
},{"./extend":27}],26:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"||typeof g!=="object"){throw new TypeError("defaults: must provide a defaults and options object")
}return f({},h,g)}},{"./extend":27}],27:[function(b,c,a){c.exports=b(15)},{}],28:[function(b,c,a){c.exports=b(16)
},{}],29:[function(b,c,a){c.exports=b(18)},{}],30:[function(b,c,a){c.exports=b(20)
},{qs:23}],31:[function(b,c,a){c.exports.Smoother=b("./smoother/Smoother")},{"./smoother/Smoother":32}],32:[function(c,d,b){d.exports=a;
function a(f){f=f||this.sampling;this.pool=new Array(f);this.raw=0;this.value=0
}a.prototype.sampling=3;a.prototype.smooth=function(g,k){var j=0;var f=this.pool.length;
if(typeof this.pool[f-this.sampling]!=="undefined"){for(var h=this.sampling;h>0;
h--){j+=this.pool[f-h]}j+=g;j/=(this.sampling+1)}else{j=g}if(!k){this.raw=g;this._track(j,true)
}return j};a.prototype._track=function(g,f){if(f){this.value=g}else{this.raw=this.value=g
}this.pool.push(g);this.pool.shift()}},{}],33:[function(b,c,a){c.exports.ScrollTimeUpdate=b("./scroll-time-update/ScrollTimeUpdate");
c.exports.ElementScrollTimeUpdate=b("./scroll-time-update/ElementScrollTimeUpdate")
},{"./scroll-time-update/ElementScrollTimeUpdate":34,"./scroll-time-update/ScrollTimeUpdate":35}],34:[function(c,g,b){var f=c("./ScrollTimeUpdate"),d=c("window-delegate").WindowDelegate;
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
this._updateOnResize=false};g.exports=a},{"./ScrollTimeUpdate":35,"window-delegate":36}],35:[function(c,b,d){var f,j=c("ac-event-emitter").EventEmitter,a=c("ac-clock"),k=c("window-delegate").WindowDelegate,h=c("smoother").Smoother,i=c("ac-dom-emitter").DOMEmitter;
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
},{"ac-clock":1,"ac-dom-emitter":5,smoother:31,"window-delegate":36}],36:[function(b,c,a){c.exports.WindowDelegate=b("./window-delegate/WindowDelegate");
c.exports.windowEmitter=b("./window-delegate/windowEmitter")},{"./window-delegate/WindowDelegate":37,"./window-delegate/windowEmitter":38}],37:[function(c,f,a){var g;
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
}else{if(j){this.trigger("scrollStop")}}};f.exports=new d()},{"./windowEmitter":38}],38:[function(b,c,a){var d=b("ac-dom-emitter").DOMEmitter;
c.exports=new d(window)},{"ac-dom-emitter":5}],39:[function(b,a,g){var h=b("../shared/Shared");
var i=b("ac-base").Element;var k=b("window-delegate").WindowDelegate;var d=b("../shared/ElementTrackersController");
var f=b("../shared/ParallaxObjectsController");var c=b("../shared/CalloutTrackerFactory");
var j=(function(){return{initialize:function(){var l=h.initialize();if(l.parallax){var m=new f(this._getParallaxObjects());
m.start()}if(l.ambient){var n=new d(this._getElementTrackers());n.start();i.addClassName(document.body,"animatable")
}return this},_getParallaxObjects:function(){return[{selectorQuery:".section-lte",targets:[".image-lte"],type:"largeUpwards",options:{smooth:true,startInView:true,offsetTop:function(){return 200*k.innerHeight/986
},offsetBottom:function(){return k.innerHeight*1}}}]},_getElementTrackers:function(){var l=[];
this._registerCalloutsTracker(l);return l},_registerCalloutsTracker:function(m){var l=[{selector:".section-copy-connections",targets:[".callout"],inViewThreshold:0.75},{selector:".section-copy-bands",targets:[".callout"],inViewThreshold:0.75}];
c.addToTrackerList(m,l)}}}());a.exports=j.initialize()},{"../shared/CalloutTrackerFactory":41,"../shared/ElementTrackersController":42,"../shared/ParallaxObjectsController":45,"../shared/Shared":47,"ac-base":false,"window-delegate":36}],40:[function(b,a,d){var f,i=b("ac-base").Element,c=b("ac-object"),k=b("window-delegate").WindowDelegate,j=b("ac-event-emitter").EventEmitter;
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
},{"ac-base":false,"ac-object":24,"window-delegate":36}],41:[function(b,c,a){var d=b("ac-base").Element;
var f=(function(){return{addToTrackerList:function(i,h){var g=this._calloutEnter.bind(this);
h.forEach(function(k,j){i.push({selectorQuery:k.selector,targets:k.targets,stagger:k.stagger,onEnter:g,delay:k.delay,runOnce:true,options:{inViewThreshold:k.inViewThreshold||0.5}})
}.bind(this))},_calloutEnter:function(i){var g=i.delay;var h=i.stagger||200;if(i.targets){i.targets.forEach(function(k,j){this._addClassWithDelay(k,h*j)
}.bind(this))}else{this._addClassWithDelay(i.el,g)}},_addClassWithDelay:function(h,g){if(g){setTimeout(function(){d.addClassName(h,"animated")
},g)}else{d.addClassName(h,"animated")}}}})();c.exports=f},{"ac-base":false}],42:[function(b,d,a){var i,g=b("ac-base").Element,c=b("ac-element-engagement").ElementEngagement,f=new c();
var h=function(j){this.elementTracker=f;this.trackedElements=this._initializeElementTrackers(j)
};i=h.prototype;i.start=function(){this.elementTracker.start()};i.stop=function(){this.elementTracker.stop()
};i._initializeElementTrackers=function(m){var l,k=m.length,j=[];for(l=0;l<k;l++){j.push(this._initializeElementTracker(m[l]))
}return j};i._initializeElementTracker=function(k){var l=g.select(k.selectorQuery),j=this.elementTracker.addElement(l,k.options),m="on";
if(k.runOnce){m="once"}if(k.onEnter){j[m]("thresholdenter",k.onEnter,this)}if(k.onExit){j[m]("thresholdexit",k.onExit,this)
}if(k.delay){j.delay=k.delay}if(k.stagger){j.stagger=k.stagger}if(k.targets){j.targets=g.selectAll(k.targets.join(","),l)
}return j};d.exports=h},{"ac-base":false,"ac-element-engagement":21}],43:[function(c,d,b){var f=c("ac-base").Element,a=c("../shared/BreakpointsDelegate");
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
}};return{getFunctionByKey:function(i){return h[i]}}}());d.exports=g},{"../shared/BreakpointsDelegate":40,"ac-base":false}],44:[function(c,d,b){var g,f=c("ac-event-emitter").EventEmitter,a=c("scroll-time-update").ElementScrollTimeUpdate;
var h=function(j,k,i){this._scrollHandler=new a(j,i);this._scrollHandler.on("draw",k);
if(!i.preventStart){this._scrollHandler.setCurrentTime()}};g=h.prototype=new f(null);
g.start=function(){this._scrollHandler._clock.start();return this};g.stop=function(){this._scrollHandler._clock.stop();
return this};g.resize=function(){this._scrollHandler.setOffsets()};d.exports=h},{"scroll-time-update":33}],45:[function(b,d,a){var h,f=b("ac-base").Element,g=b("./ParallaxFunctions"),i=b("./ParallaxObject");
var c=function(j){this.parallaxObjects=this._initializeParallaxObjects(j);this.resize=this.resize.bind(this)
};h=c.prototype;h.start=function(){this.parallaxObjects.forEach(function(j){j.start()
})};h.resize=function(){this.parallaxObjects.forEach(function(j){j.resize()})};
h.stop=function(){this.parallaxObjects.forEach(function(j){j.stop()})};h._initializeParallaxObjects=function(l){var k=[],j=l.length,m;
for(m=0;m<j;m++){k.push(this._initializeParallaxObject(l[m]))}return k};h._initializeParallaxObject=function(k){var m=f.select(k.selectorQuery),j=k.targets?f.selectAll(k.targets.join(","),m):null,n=g.getFunctionByKey(k.type),l=new i(m,n.bind(null,m,j),k.options);
return l};d.exports=c},{"./ParallaxFunctions":43,"./ParallaxObject":44,"ac-base":false}],46:[function(c,g,b){var f=c("scroll-time-update").ScrollTimeUpdate;
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
this.scrollTimeUpdate.start()}},{"ac-base":false,"scroll-time-update":33,"window-delegate":36}],47:[function(c,a,f){var d=c("./localnav");
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
return true}}catch(o){}l=false;return false}}}());a.exports=h},{"./BreakpointsDelegate":40,"./RevealNext":46,"./localnav":48,"ac-base":false}],48:[function(b,d,a){var h=b("ac-dom-emitter").DOMEmitter;
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
}}}}());d.exports=i},{"ac-base":false,"ac-dom-emitter":5,"window-delegate":36}]},{},[39]);