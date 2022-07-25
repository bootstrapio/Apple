(function e(b,g,d){function c(m,j){if(!g[m]){if(!b[m]){var i=typeof require=="function"&&require;
if(!j&&i){return i(m,!0)}if(a){return a(m,!0)}var k=new Error("Cannot find module '"+m+"'");
throw k.code="MODULE_NOT_FOUND",k}var h=g[m]={exports:{}};b[m][0].call(h.exports,function(l){var o=b[m][1][l];
return c(o?o:l)},h,h.exports,e,b,g,d)}return g[m].exports}var a=typeof require=="function"&&require;
for(var f=0;f<d.length;f++){c(d[f])}return c})({1:[function(d,f,b){var g=d("./ac-browser/BrowserData");
var a=/applewebkit/i;var h=d("./ac-browser/IE");var c=g.create();c.isWebKit=function(i){var j=i||window.navigator.userAgent;
return j?!!a.test(j):false};c.lowerCaseUserAgent=navigator.userAgent.toLowerCase();
if(c.name==="IE"){c.IE={documentMode:h.getDocumentMode()}}f.exports=c},{"./ac-browser/BrowserData":2,"./ac-browser/IE":3}],2:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.filter");
b("@marcom/ac-polyfills/Array/prototype.some");var d=b("./data");function f(){}f.prototype={__getBrowserVersion:function(h,i){var g;
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
};c.exports=f},{"./data":4,"@marcom/ac-polyfills/Array/prototype.filter":152,"@marcom/ac-polyfills/Array/prototype.some":156}],3:[function(b,c,a){c.exports={getDocumentMode:function(){var d;
if(document.documentMode){d=parseInt(document.documentMode,10)}else{d=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){d=7
}}}return d}}},{}],4:[function(b,c,a){c.exports={browser:[{string:window.navigator.userAgent,subString:"Edge",identity:"Edge"},{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],5:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.slice");b("@marcom/ac-polyfills/Element/prototype.classList");
var d=b("./className/add");c.exports=function f(){var j=Array.prototype.slice.call(arguments);
var h=j.shift(j);var g;if(h.classList&&h.classList.add){h.classList.add.apply(h.classList,j);
return}for(g=0;g<j.length;g++){d(h,j[g])}}},{"./className/add":7,"@marcom/ac-polyfills/Array/prototype.slice":155,"@marcom/ac-polyfills/Element/prototype.classList":158}],6:[function(b,c,a){c.exports={add:b("./className/add"),contains:b("./className/contains"),remove:b("./className/remove")}
},{"./className/add":7,"./className/contains":8,"./className/remove":10}],7:[function(b,c,a){var d=b("./contains");
c.exports=function f(h,g){if(!d(h,g)){h.className+=" "+g}}},{"./contains":8}],8:[function(b,c,a){var f=b("./getTokenRegExp");
c.exports=function d(h,g){return f(g).test(h.className)}},{"./getTokenRegExp":9}],9:[function(b,c,a){c.exports=function d(f){return new RegExp("(\\s|^)"+f+"(\\s|$)")
}},{}],10:[function(c,d,b){var f=c("./contains");var g=c("./getTokenRegExp");d.exports=function a(i,h){if(f(i,h)){i.className=i.className.replace(g(h),"$1").trim()
}}},{"./contains":8,"./getTokenRegExp":9}],11:[function(b,d,a){b("@marcom/ac-polyfills/Element/prototype.classList");
var f=b("./className/contains");d.exports=function c(h,g){if(h.classList&&h.classList.contains){return h.classList.contains(g)
}return f(h,g)}},{"./className/contains":8,"@marcom/ac-polyfills/Element/prototype.classList":158}],12:[function(b,c,a){c.exports={add:b("./add"),contains:b("./contains"),remove:b("./remove"),toggle:b("./toggle")}
},{"./add":5,"./contains":11,"./remove":13,"./toggle":14}],13:[function(d,f,c){d("@marcom/ac-polyfills/Array/prototype.slice");
d("@marcom/ac-polyfills/Element/prototype.classList");var b=d("./className/remove");
f.exports=function a(){var j=Array.prototype.slice.call(arguments);var h=j.shift(j);
var g;if(h.classList&&h.classList.remove){h.classList.remove.apply(h.classList,j);
return}for(g=0;g<j.length;g++){b(h,j[g])}}},{"./className/remove":10,"@marcom/ac-polyfills/Array/prototype.slice":155,"@marcom/ac-polyfills/Element/prototype.classList":158}],14:[function(c,d,b){c("@marcom/ac-polyfills/Element/prototype.classList");
var f=c("./className");d.exports=function a(j,i,k){var h=(typeof k!=="undefined");
var g;if(j.classList&&j.classList.toggle){if(h){return j.classList.toggle(i,k)}return j.classList.toggle(i)
}if(h){g=!!k}else{g=!f.contains(j,i)}if(g){f.add(j,i)}else{f.remove(j,i)}return g
}},{"./className":6,"@marcom/ac-polyfills/Element/prototype.classList":158}],15:[function(c,d,b){var g=c("./utils/addEventListener");
var a=c("./shared/getEventType");d.exports=function f(k,i,j,h){i=a(k,i);return g(k,i,j,h)
}},{"./shared/getEventType":25,"./utils/addEventListener":29}],16:[function(d,f,c){var a=d("./utils/dispatchEvent");
var b=d("./shared/getEventType");f.exports=function g(j,i,h){i=b(j,i);return a(j,i,h)
}},{"./shared/getEventType":25,"./utils/dispatchEvent":30}],17:[function(b,c,a){c.exports={addEventListener:b("./addEventListener"),dispatchEvent:b("./dispatchEvent"),preventDefault:b("./preventDefault"),removeEventListener:b("./removeEventListener"),stop:b("./stop"),stopPropagation:b("./stopPropagation"),target:b("./target")}
},{"./addEventListener":15,"./dispatchEvent":16,"./preventDefault":23,"./removeEventListener":24,"./stop":26,"./stopPropagation":27,"./target":28}],18:[function(d,b,f){var g=d("./utils/eventTypeAvailable");
var j=d("./shared/camelCasedEventTypes");var c=d("./shared/windowFallbackEventTypes");
var h=d("./shared/prefixHelper");var a={};b.exports=function i(m,l){var n;var o;
var k;l=l||"div";m=m.toLowerCase();if(!(l in a)){a[l]={}}o=a[l];if(m in o){return o[m]
}if(g(m,l)){return o[m]=m}if(m in j){for(k=0;k<j[m].length;k++){n=j[m][k];if(g(n.toLowerCase(),l)){return o[m]=n
}}}for(k=0;k<h.evt.length;k++){n=h.evt[k]+m;if(g(n,l)){h.reduce(k);return o[m]=n
}}if(l!=="window"&&c.indexOf(m)){return o[m]=i(m,"window")}return o[m]=false}},{"./shared/camelCasedEventTypes":19,"./shared/prefixHelper":20,"./shared/windowFallbackEventTypes":21,"./utils/eventTypeAvailable":22}],19:[function(b,c,a){c.exports={transitionend:["webkitTransitionEnd","MSTransitionEnd"],animationstart:["webkitAnimationStart","MSAnimationStart"],animationend:["webkitAnimationEnd","MSAnimationEnd"],animationiteration:["webkitAnimationIteration","MSAnimationIteration"],fullscreenchange:["MSFullscreenChange"],fullscreenerror:["MSFullscreenError"]}
},{}],20:[function(b,d,a){var i=["-webkit-","-moz-","-ms-"];var f=["Webkit","Moz","ms"];
var h=["webkit","moz","ms"];var c=function(){this.initialize()};var g=c.prototype;
g.initialize=function(){this.reduced=false;this.css=i;this.dom=f;this.evt=h};g.reduce=function(j){if(!this.reduced){this.reduced=true;
this.css=[this.css[j]];this.dom=[this.dom[j]];this.evt=[this.evt[j]]}};d.exports=new c()
},{}],21:[function(b,c,a){c.exports=["transitionend","animationstart","animationend","animationiteration",]
},{}],22:[function(c,f,b){var a={window:window,document:document};f.exports=function d(i,g){var h;
i="on"+i;if(!(g in a)){a[g]=document.createElement(g)}h=a[g];if(i in h){return true
}if("setAttribute" in h){h.setAttribute(i,"return;");return(typeof h[i]==="function")
}return false}},{}],23:[function(c,d,a){d.exports=function b(f){f=f||window.event;
if(f.preventDefault){f.preventDefault()}else{f.returnValue=false}}},{}],24:[function(d,f,c){var b=d("./utils/removeEventListener");
var a=d("./shared/getEventType");f.exports=function g(k,i,j,h){i=a(k,i);return b(k,i,j,h)
}},{"./shared/getEventType":25,"./utils/removeEventListener":31}],25:[function(c,f,b){var d=c("@marcom/ac-prefixer/getEventType");
f.exports=function a(j,i){var h;var g;if("tagName" in j){h=j.tagName}else{if(j===window){h="window"
}else{h="document"}}g=d(i,h);if(g){return g}return i}},{"@marcom/ac-prefixer/getEventType":18}],26:[function(d,g,b){var a=d("./stopPropagation");
var c=d("./preventDefault");g.exports=function f(h){h=h||window.event;a(h);c(h);
h.stopped=true;h.returnValue=false}},{"./preventDefault":23,"./stopPropagation":27}],27:[function(c,d,b){d.exports=function a(f){f=f||window.event;
if(f.stopPropagation){f.stopPropagation()}else{f.cancelBubble=true}}},{}],28:[function(b,c,a){c.exports=function d(f){f=f||window.event;
return(typeof f.target!=="undefined")?f.target:f.srcElement}},{}],29:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.addEventListener){i.addEventListener(g,h,!!f)
}else{i.attachEvent("on"+g,h)}return i}},{}],30:[function(b,c,a){b("@marcom/ac-polyfills/CustomEvent");
c.exports=function d(i,h,g){var f;if(i.dispatchEvent){if(g){f=new CustomEvent(h,g)
}else{f=new CustomEvent(h)}i.dispatchEvent(f)}else{f=document.createEventObject();
if(g&&"detail" in g){f.detail=g.detail}i.fireEvent("on"+h,f)}return i}},{"@marcom/ac-polyfills/CustomEvent":157}],31:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.removeEventListener){i.removeEventListener(g,h,!!f)
}else{i.detachEvent("on"+g,h)}return i}},{}],32:[function(d,f,c){var b=d("./utils/getBoundingClientRect");
f.exports=function a(g,i){var h=1;if(i){h=b(g).width/g.offsetWidth}return{width:g.scrollWidth*h,height:g.scrollHeight*h}
}},{"./utils/getBoundingClientRect":43}],33:[function(d,f,c){var b=d("./utils/getBoundingClientRect");
f.exports=function a(g,i){var h;if(i){h=b(g);return{width:h.width,height:h.height}
}return{width:g.offsetWidth,height:g.offsetHeight}}},{"./utils/getBoundingClientRect":43}],34:[function(g,h,f){var c=g("./getDimensions");
var d=g("./utils/getBoundingClientRect");var b=g("./getScrollX");var a=g("./getScrollY");
h.exports=function i(j,p){var l;var o;var m;var k;var n;if(p){l=d(j);o=b();m=a();
return{top:l.top+m,right:l.right+o,bottom:l.bottom+m,left:l.left+o}}k=c(j,p);l={top:j.offsetTop,left:j.offsetLeft,width:k.width,height:k.height};
while(j=j.offsetParent){l.top+=j.offsetTop;l.left+=j.offsetLeft}return{top:l.top,right:l.left+l.width,bottom:l.top+l.height,left:l.left}
}},{"./getDimensions":33,"./getScrollX":38,"./getScrollY":39,"./utils/getBoundingClientRect":43}],35:[function(c,f,b){var a=c("./getDimensions");
var g=c("./getPixelsInViewport");f.exports=function d(j,k){var i=g(j,k);var h=a(j,k).height;
return(i/h)}},{"./getDimensions":33,"./getPixelsInViewport":36}],36:[function(c,d,b){var a=c("./getViewportPosition");
d.exports=function f(h,k){var j=document.documentElement.clientHeight;var g=a(h,k);
var i;if(g.top>=j||g.bottom<=0){return 0}i=(g.bottom-g.top);if(g.top<0){i+=g.top
}if(g.bottom>j){i-=g.bottom-j}return i}},{"./getViewportPosition":40}],37:[function(d,f,c){var a=d("./getDimensions");
var b=d("./utils/getBoundingClientRect");f.exports=function g(i,l){var k;var h;
var j;if(l){k=b(i);if(i.offsetParent){h=b(i.offsetParent);k.top-=h.top;k.left-=h.left
}}else{j=a(i,l);k={top:i.offsetTop,left:i.offsetLeft,width:j.width,height:j.height}
}return{top:k.top,right:k.left+k.width,bottom:k.top+k.height,left:k.left}}},{"./getDimensions":33,"./utils/getBoundingClientRect":43}],38:[function(c,d,b){d.exports=function a(f){var g;
f=f||window;if(f===window){g=window.pageXOffset;if(!g){f=document.documentElement||document.body.parentNode||document.body
}else{return g}}return f.scrollLeft}},{}],39:[function(c,d,b){d.exports=function a(f){var g;
f=f||window;if(f===window){g=window.pageYOffset;if(!g){f=document.documentElement||document.body.parentNode||document.body
}else{return g}}return f.scrollTop}},{}],40:[function(g,h,f){var i=g("./getPagePosition");
var d=g("./utils/getBoundingClientRect");var c=g("./getScrollX");var b=g("./getScrollY");
h.exports=function a(k,n){var j;var m;var l;if(n){j=d(k);return{top:j.top,right:j.right,bottom:j.bottom,left:j.left}
}j=i(k);m=c();l=b();return{top:j.top-l,right:j.right-m,bottom:j.bottom-l,left:j.left-m}
}},{"./getPagePosition":34,"./getScrollX":38,"./getScrollY":39,"./utils/getBoundingClientRect":43}],41:[function(b,c,a){c.exports={getContentDimensions:b("./getContentDimensions"),getDimensions:b("./getDimensions"),getPagePosition:b("./getPagePosition"),getPercentInViewport:b("./getPercentInViewport"),getPixelsInViewport:b("./getPixelsInViewport"),getPosition:b("./getPosition"),getScrollX:b("./getScrollX"),getScrollY:b("./getScrollY"),getViewportPosition:b("./getViewportPosition"),isInViewport:b("./isInViewport")}
},{"./getContentDimensions":32,"./getDimensions":33,"./getPagePosition":34,"./getPercentInViewport":35,"./getPixelsInViewport":36,"./getPosition":37,"./getScrollX":38,"./getScrollY":39,"./getViewportPosition":40,"./isInViewport":42}],42:[function(b,d,a){var g=b("./getPixelsInViewport");
var c=b("./getPercentInViewport");d.exports=function f(j,k,h){var i;h=h||0;if(typeof h==="string"&&h.slice(-2)==="px"){h=parseInt(h,10);
i=g(j,k)}else{i=c(j,k)}return(i>0&&i>=h)}},{"./getPercentInViewport":35,"./getPixelsInViewport":36}],43:[function(c,d,b){d.exports=function a(f){var g=f.getBoundingClientRect();
return{top:g.top,right:g.right,bottom:g.bottom,left:g.left,width:g.width||g.right-g.left,height:g.height||g.bottom-g.top}
}},{}],44:[function(c,d,b){var f=c("@marcom/ac-prefixer/getStyleProperty");var g=c("@marcom/ac-prefixer/stripPrefixes");
d.exports=function a(){var k=Array.prototype.slice.call(arguments);var p=k.shift(k);
var m=window.getComputedStyle(p);var l={};var o;var h;var n;var j;if(typeof k[0]!=="string"){k=k[0]
}for(j=0;j<k.length;j++){o=k[j];h=f(o);if(h){o=g(h);n=m[h];if(!n||n==="auto"){n=null
}if(n){n=g(n)}}else{n=null}l[o]=n}return l}},{"@marcom/ac-prefixer/getStyleProperty":48,"@marcom/ac-prefixer/stripPrefixes":54}],45:[function(b,c,a){c.exports={getStyle:b("./getStyle"),setStyle:b("./setStyle")}
},{"./getStyle":44,"./setStyle":57}],46:[function(c,d,b){d.exports=function a(j){var h;
var g;var f;if(!j&&j!==0){return""}if(Array.isArray(j)){return j+""}if(typeof j==="object"){h="";
g=Object.keys(j);for(f=0;f<g.length;f++){h+=g[f]+"("+j[g[f]]+") "}return h.trim()
}return j}},{}],47:[function(d,f,c){var b=d("./shared/stylePropertyCache");var h=d("./getStyleProperty");
var g=d("./getStyleValue");f.exports=function a(k,j){var i;k=h(k);if(!k){return false
}i=b[k].css;if(typeof j!=="undefined"){j=g(k,j);if(j===false){return false}i+=":"+j+";"
}return i}},{"./getStyleProperty":48,"./getStyleValue":49,"./shared/stylePropertyCache":52}],48:[function(f,d,h){var a=f("./shared/stylePropertyCache");
var i=f("./shared/getStyleTestElement");var b=f("./utils/toCSS");var k=f("./utils/toDOM");
var j=f("./shared/prefixHelper");var c=function(o,l){var m=b(o);var n=(l===false)?false:b(l);
a[o]=a[l]=a[m]=a[n]={dom:l,css:n};return l};d.exports=function g(p){var n;var l;
var o;var m;p+="";if(p in a){return a[p].dom}o=i();p=k(p);l=p.charAt(0).toUpperCase()+p.substring(1);
if(p==="filter"){n=["WebkitFilter","filter"]}else{n=(p+" "+j.dom.join(l+" ")+l).split(" ")
}for(m=0;m<n.length;m++){if(typeof o.style[n[m]]!=="undefined"){if(m!==0){j.reduce(m-1)
}return c(p,n[m])}}return c(p,false)}},{"./shared/getStyleTestElement":50,"./shared/prefixHelper":51,"./shared/stylePropertyCache":52,"./utils/toCSS":55,"./utils/toDOM":56}],49:[function(d,b,h){var f=d("./getStyleProperty");
var k=d("./shared/styleValueAvailable");var j=d("./shared/prefixHelper");var a=d("./shared/stylePropertyCache");
var i={};var l=/(\([^\)]+\))/gi;var g=/([^ ,;\(]+(\([^\)]+\))?)/gi;b.exports=function c(o,n){var m;
n+="";o=f(o);if(!o){return false}if(k(o,n)){return n}m=a[o].css;n=n.replace(g,function(q){var p;
var t;var s;var r;if(q[0]==="#"||!isNaN(q[0])){return q}t=q.replace(l,"");s=m+":"+t;
if(s in i){if(i[s]===false){return""}return q.replace(t,i[s])}p=j.css.map(function(u){return u+q
});p=[q].concat(p);for(r=0;r<p.length;r++){if(k(o,p[r])){if(r!==0){j.reduce(r-1)
}i[s]=p[r].replace(l,"");return p[r]}}i[s]=false;return""});n=n.trim();return(n==="")?false:n
}},{"./getStyleProperty":48,"./shared/prefixHelper":51,"./shared/stylePropertyCache":52,"./shared/styleValueAvailable":53}],50:[function(c,d,b){var f;
d.exports=function a(){if(!f){f=document.createElement("_")}else{f.style.cssText="";
f.removeAttribute("style")}return f};d.exports.resetElement=function(){f=null}},{}],51:[function(b,c,a){arguments[4][20][0].apply(a,arguments)
},{dup:20}],52:[function(b,c,a){c.exports={}},{}],53:[function(c,b,d){var a=c("./stylePropertyCache");
var f=c("./getStyleTestElement");var i=false;var k;var j;var g=function(){var l;
if(!i){i=true;k=("CSS" in window&&"supports" in window.CSS);j=false;l=f();try{l.style.width="invalid"
}catch(m){j=true}}};b.exports=function h(o,n){var m;var l;g();if(k){o=a[o].css;
return CSS.supports(o,n)}l=f();m=l.style[o];if(j){try{l.style[o]=n}catch(p){return false
}}else{l.style[o]=n}return(l.style[o]&&l.style[o]!==m)};b.exports.resetFlags=function(){i=false
}},{"./getStyleTestElement":50,"./stylePropertyCache":52}],54:[function(c,d,a){var b=/(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
d.exports=function f(g){g=String.prototype.replace.call(g,b,"");return g.charAt(0).toLowerCase()+g.substring(1)
}},{}],55:[function(c,d,b){var f=/^(webkit|moz|ms)/gi;d.exports=function a(h){var g;
if(h.toLowerCase()==="cssfloat"){return"float"}if(f.test(h)){h="-"+h}return h.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],56:[function(b,c,a){var f=/-([a-z])/g;c.exports=function d(h){var g;if(h.toLowerCase()==="float"){return"cssFloat"
}h=h.replace(f,function(j,i){return i.toUpperCase()});if(h.substr(0,2)==="Ms"){h="ms"+h.substring(2)
}return h}},{}],57:[function(d,f,c){var a=d("@marcom/ac-prefixer/getStyleCSS");
var g=d("@marcom/ac-prefixer/getStyleProperty");var b=d("./internal/normalizeValue");
f.exports=function h(o,l){var k="";var j;var n;var i;var m;var p;if(typeof l!=="object"){throw new TypeError("setStyle: styles must be an Object")
}for(n in l){m=b(l[n]);if(!m&&m!==0){i=g(n);if("removeAttribute" in o.style){o.style.removeAttribute(i)
}else{o.style[i]=""}}else{j=a(n,m);if(j!==false){k+=" "+j}}}if(k.length){p=o.style.cssText;
if(p.charAt(p.length-1)!==";"){p+=";"}p+=k;o.style.cssText=p}return o}},{"./internal/normalizeValue":46,"@marcom/ac-prefixer/getStyleCSS":47,"@marcom/ac-prefixer/getStyleProperty":48}],58:[function(b,c,a){c.exports=8
},{}],59:[function(b,c,a){c.exports=11},{}],60:[function(b,c,a){c.exports=9},{}],61:[function(b,c,a){c.exports=1
},{}],62:[function(b,c,a){c.exports=3},{}],63:[function(d,f,c){d("@marcom/ac-polyfills/Array/prototype.slice");
d("@marcom/ac-polyfills/Array/prototype.filter");var g=d("./internal/isNodeType");
var a=d("./ELEMENT_NODE");f.exports=function b(i,h){h=h||a;i=Array.prototype.slice.call(i);
return i.filter(function(j){return g(j,h)})}},{"./ELEMENT_NODE":61,"./internal/isNodeType":64,"@marcom/ac-polyfills/Array/prototype.filter":152,"@marcom/ac-polyfills/Array/prototype.slice":155}],64:[function(b,c,a){var d=b("../isNode");
c.exports=function f(h,g){if(!d(h)){return false}if(typeof g==="number"){return(h.nodeType===g)
}return(g.indexOf(h.nodeType)!==-1)}},{"../isNode":68}],65:[function(g,d,j){var b=g("./isNodeType");
var c=g("../COMMENT_NODE");var k=g("../DOCUMENT_FRAGMENT_NODE");var i=g("../ELEMENT_NODE");
var h=g("../TEXT_NODE");var m=[i,h,c,k];var f=" must be an Element, TextNode, Comment, or Document Fragment";
var p=[i,h,c];var l=" must be an Element, TextNode, or Comment";var n=[i,k];var o=" must be an Element, or Document Fragment";
var a=" must have a parentNode";d.exports={parentNode:function(q,t,s,r){r=r||"target";
if((q||t)&&!b(q,n)){throw new TypeError(s+": "+r+o)}},childNode:function(q,t,s,r){r=r||"target";
if(!q&&!t){return}if(!b(q,p)){throw new TypeError(s+": "+r+l)}},insertNode:function(q,t,s,r){r=r||"node";
if(!q&&!t){return}if(!b(q,m)){throw new TypeError(s+": "+r+f)}},hasParentNode:function(q,s,r){r=r||"target";
if(!q.parentNode){throw new TypeError(s+": "+r+a)}}}},{"../COMMENT_NODE":58,"../DOCUMENT_FRAGMENT_NODE":59,"../ELEMENT_NODE":61,"../TEXT_NODE":62,"./isNodeType":64}],66:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./DOCUMENT_FRAGMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_FRAGMENT_NODE":59,"./internal/isNodeType":64}],67:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./ELEMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./ELEMENT_NODE":61,"./internal/isNodeType":64}],68:[function(b,c,a){c.exports=function d(f){return !!(f&&f.nodeType)
}},{}],69:[function(c,d,b){var f=c("./internal/validate");d.exports=function a(g){f.childNode(g,true,"remove");
if(!g.parentNode){return g}return g.parentNode.removeChild(g)}},{"./internal/validate":65}],70:[function(b,c,a){c.exports={ancestor:b("./ancestor"),ancestors:b("./ancestors"),children:b("./children"),filterBySelector:b("./filterBySelector"),firstChild:b("./firstChild"),lastChild:b("./lastChild"),matchesSelector:b("./matchesSelector"),nextSibling:b("./nextSibling"),nextSiblings:b("./nextSiblings"),previousSibling:b("./previousSibling"),previousSiblings:b("./previousSiblings"),querySelector:b("./querySelector"),querySelectorAll:b("./querySelectorAll"),siblings:b("./siblings")}
},{"./ancestor":71,"./ancestors":72,"./children":73,"./filterBySelector":74,"./firstChild":75,"./lastChild":78,"./matchesSelector":79,"./nextSibling":80,"./nextSiblings":81,"./previousSibling":82,"./previousSiblings":83,"./querySelector":84,"./querySelectorAll":85,"./siblings":89}],71:[function(c,f,b){var g=c("@marcom/ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");f.exports=function d(k,j,i){h.childNode(k,true,"ancestors");
h.selector(j,false,"ancestors");if(i&&g(k)&&(!j||a(k,j))){return k}if(k!==document.body){while((k=k.parentNode)&&g(k)){if(!j||a(k,j)){return k
}if(k===document.body){break}}}return null}},{"./internal/validate":77,"./matchesSelector":79,"@marcom/ac-dom-nodes/isElement":67}],72:[function(c,d,b){var g=c("@marcom/ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function f(l,j,i){var k=[];
h.childNode(l,true,"ancestors");h.selector(j,false,"ancestors");if(i&&g(l)&&(!j||a(l,j))){k.push(l)
}if(l!==document.body){while((l=l.parentNode)&&g(l)){if(!j||a(l,j)){k.push(l)}if(l===document.body){break
}}}return k}},{"./internal/validate":77,"./matchesSelector":79,"@marcom/ac-dom-nodes/isElement":67}],73:[function(d,g,c){var b=d("@marcom/ac-dom-nodes/filterByNodeType");
var a=d("./filterBySelector");var h=d("./internal/validate");g.exports=function f(k,i){var j;
h.parentNode(k,true,"children");h.selector(i,false,"children");j=k.children||k.childNodes;
j=b(j);if(i){j=a(j,i)}return j}},{"./filterBySelector":74,"./internal/validate":77,"@marcom/ac-dom-nodes/filterByNodeType":63}],74:[function(d,f,c){d("@marcom/ac-polyfills/Array/prototype.slice");
d("@marcom/ac-polyfills/Array/prototype.filter");var b=d("./matchesSelector");var g=d("./internal/validate");
f.exports=function a(i,h){g.selector(h,true,"filterBySelector");i=Array.prototype.slice.call(i);
return i.filter(function(j){return b(j,h)})}},{"./internal/validate":77,"./matchesSelector":79,"@marcom/ac-polyfills/Array/prototype.filter":152,"@marcom/ac-polyfills/Array/prototype.slice":155}],75:[function(b,d,a){var c=b("./children");
var g=b("./internal/validate");d.exports=function f(j,h){var i;g.parentNode(j,true,"firstChild");
g.selector(h,false,"firstChild");if(j.firstElementChild&&!h){return j.firstElementChild
}i=c(j,h);if(i.length){return i[0]}return null}},{"./children":73,"./internal/validate":77}],76:[function(b,c,a){c.exports=window.Element?(function(d){return d.matches||d.matchesSelector||d.webkitMatchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector
}(Element.prototype)):null},{}],77:[function(g,c,i){g("@marcom/ac-polyfills/Array/prototype.indexOf");
var o=g("@marcom/ac-dom-nodes/isNode");var b=g("@marcom/ac-dom-nodes/COMMENT_NODE");
var k=g("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE");var j=g("@marcom/ac-dom-nodes/DOCUMENT_NODE");
var h=g("@marcom/ac-dom-nodes/ELEMENT_NODE");var f=g("@marcom/ac-dom-nodes/TEXT_NODE");
var a=function(r,q){if(!o(r)){return false}if(typeof q==="number"){return(r.nodeType===q)
}return(q.indexOf(r.nodeType)!==-1)};var m=[h,j,k];var n=" must be an Element, Document, or Document Fragment";
var p=[h,f,b];var l=" must be an Element, TextNode, or Comment";var d=" must be a string";
c.exports={parentNode:function(q,t,s,r){r=r||"node";if((q||t)&&!a(q,m)){throw new TypeError(s+": "+r+n)
}},childNode:function(q,t,s,r){r=r||"node";if(!q&&!t){return}if(!a(q,p)){throw new TypeError(s+": "+r+l)
}},selector:function(q,t,s,r){r=r||"selector";if((q||t)&&typeof q!=="string"){throw new TypeError(s+": "+r+d)
}}}},{"@marcom/ac-dom-nodes/COMMENT_NODE":58,"@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":59,"@marcom/ac-dom-nodes/DOCUMENT_NODE":60,"@marcom/ac-dom-nodes/ELEMENT_NODE":61,"@marcom/ac-dom-nodes/TEXT_NODE":62,"@marcom/ac-dom-nodes/isNode":68,"@marcom/ac-polyfills/Array/prototype.indexOf":154}],78:[function(b,d,a){var c=b("./children");
var g=b("./internal/validate");d.exports=function f(j,h){var i;g.parentNode(j,true,"lastChild");
g.selector(h,false,"lastChild");if(j.lastElementChild&&!h){return j.lastElementChild
}i=c(j,h);if(i.length){return i[i.length-1]}return null}},{"./children":73,"./internal/validate":77}],79:[function(d,f,c){var g=d("@marcom/ac-dom-nodes/isElement");
var i=d("./internal/validate");var a=d("./internal/nativeMatches");var h=d("./shims/matchesSelector");
f.exports=function b(k,j){i.selector(j,true,"matchesSelector");if(!g(k)){return false
}if(!a){return h(k,j)}return a.call(k,j)}},{"./internal/nativeMatches":76,"./internal/validate":77,"./shims/matchesSelector":86,"@marcom/ac-dom-nodes/isElement":67}],80:[function(c,d,b){var f=c("@marcom/ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function g(j,i){h.childNode(j,true,"nextSibling");
h.selector(i,false,"nextSibling");if(j.nextElementSibling&&!i){return j.nextElementSibling
}while(j=j.nextSibling){if(f(j)){if(!i||a(j,i)){return j}}}return null}},{"./internal/validate":77,"./matchesSelector":79,"@marcom/ac-dom-nodes/isElement":67}],81:[function(d,f,b){var g=d("@marcom/ac-dom-nodes/isElement");
var a=d("./matchesSelector");var h=d("./internal/validate");f.exports=function c(k,i){var j=[];
h.childNode(k,true,"nextSiblings");h.selector(i,false,"nextSiblings");while(k=k.nextSibling){if(g(k)){if(!i||a(k,i)){j.push(k)
}}}return j}},{"./internal/validate":77,"./matchesSelector":79,"@marcom/ac-dom-nodes/isElement":67}],82:[function(c,d,b){var g=c("@marcom/ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function f(j,i){h.childNode(j,true,"previousSibling");
h.selector(i,false,"previousSibling");if(j.previousElementSibling&&!i){return j.previousElementSibling
}while(j=j.previousSibling){if(g(j)){if(!i||a(j,i)){return j}}}return null}},{"./internal/validate":77,"./matchesSelector":79,"@marcom/ac-dom-nodes/isElement":67}],83:[function(c,d,b){var f=c("@marcom/ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function g(k,i){var j=[];
h.childNode(k,true,"previousSiblings");h.selector(i,false,"previousSiblings");while(k=k.previousSibling){if(f(k)){if(!i||a(k,i)){j.push(k)
}}}return j.reverse()}},{"./internal/validate":77,"./matchesSelector":79,"@marcom/ac-dom-nodes/isElement":67}],84:[function(c,d,a){var h=c("./internal/validate");
var b=c("./shims/querySelector");var g=("querySelector" in document);d.exports=function f(i,j){j=j||document;
h.parentNode(j,true,"querySelector","context");h.selector(i,true,"querySelector");
if(!g){return b(i,j)}return j.querySelector(i)}},{"./internal/validate":77,"./shims/querySelector":87}],85:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.slice");
var h=b("./internal/validate");var g=b("./shims/querySelectorAll");var f=("querySelectorAll" in document);
c.exports=function d(i,j){j=j||document;h.parentNode(j,true,"querySelectorAll","context");
h.selector(i,true,"querySelectorAll");if(!f){return g(i,j)}return Array.prototype.slice.call(j.querySelectorAll(i))
}},{"./internal/validate":77,"./shims/querySelectorAll":88,"@marcom/ac-polyfills/Array/prototype.slice":155}],86:[function(c,d,b){var f=c("../querySelectorAll");
d.exports=function a(l,g){var k=l.parentNode||document;var h=f(g,k);var j;for(j=0;
j<h.length;j++){if(h[j]===l){return true}}return false}},{"../querySelectorAll":85}],87:[function(b,c,a){var d=b("./querySelectorAll");
c.exports=function f(h,i){var g=d(h,i);return g.length?g[0]:null}},{"./querySelectorAll":88}],88:[function(c,b,f){c("@marcom/ac-polyfills/Array/prototype.indexOf");
var j=c("@marcom/ac-dom-nodes/isElement");var h=c("@marcom/ac-dom-nodes/isDocumentFragment");
var k=c("@marcom/ac-dom-nodes/remove");var d="_ac_qsa_";var i=function(n,l){var m;
if(l===document){return true}m=n;while((m=m.parentNode)&&j(m)){if(m===l){return true
}}return false};var g=function(l){if("recalc" in l){l.recalc(false)}else{document.recalc(false)
}window.scrollBy(0,0)};b.exports=function a(l,n){var p=document.createElement();
var q=d+(Math.random()+"").slice(-6);var m=[];var o;n=n||document;document[q]=[];
p.innerHTML="x<style>*{display:recalc;}"+l+'{ac-qsa:expression(document["'+q+'"] && document["'+q+'"].push(this));}';
p=p.lastChild;if(h(n)){n.appendChild(p)}else{document.documentElement.firstChild.appendChild(p)
}g(n);while(document[q].length){o=document[q].shift();o.style.removeAttribute("ac-qsa");
if(m.indexOf(o)===-1&&i(o,n)){m.push(o)}}document[q]=null;k(p);g(n);return m}},{"@marcom/ac-dom-nodes/isDocumentFragment":66,"@marcom/ac-dom-nodes/isElement":67,"@marcom/ac-dom-nodes/remove":69,"@marcom/ac-polyfills/Array/prototype.indexOf":154}],89:[function(b,d,a){var c=b("./children");
var g=b("./internal/validate");d.exports=function f(j,h){var i=[];g.childNode(j,true,"siblings");
g.selector(h,false,"siblings");if(j.parentNode){i=c(j.parentNode,h);i=i.filter(function(k){return(k!==j)
})}return i}},{"./children":73,"./internal/validate":77}],90:[function(b,c,a){c.exports={EventEmitterMicro:b("./ac-event-emitter-micro/EventEmitterMicro")}
},{"./ac-event-emitter-micro/EventEmitterMicro":91}],91:[function(b,c,a){function f(){this._events={}
}var d=f.prototype;d.on=function(g,h){this._events[g]=this._events[g]||[];this._events[g].unshift(h)
};d.once=function(g,j){var i=this;function h(k){i.off(g,h);if(k!==undefined){j(k)
}else{j()}}this.on(g,h)};d.off=function(g,i){if(!this.has(g)){return}var h=this._events[g].indexOf(i);
if(h===-1){return}this._events[g].splice(h,1)};d.trigger=function(g,j){if(!this.has(g)){return
}for(var h=this._events[g].length-1;h>=0;h--){if(j!==undefined){this._events[g][h](j)
}else{this._events[g][h]()}}};d.has=function(g){if(g in this._events===false||this._events[g].length===0){return false
}return true};d.destroy=function(){for(var g in this._events){this._events[g]=null
}this._events=null};c.exports=f},{}],92:[function(b,c,a){var g=b("./helpers/globals");
var f=b("@marcom/ac-function/once");var d=function(){var h=g.getDocument();var i=h.createElement("canvas");
return !!(typeof i.getContext==="function"&&i.getContext("2d"))};c.exports=f(d);
c.exports.original=d},{"./helpers/globals":100,"@marcom/ac-function/once":131}],93:[function(c,d,b){var h=c("ac-browser");
var a=c("./touchAvailable").original;var f=c("@marcom/ac-function/once");function g(){return(!a()||(h.os==="iOS"&&h.version>=8)||h.name==="Chrome")
}d.exports=f(g);d.exports.original=g},{"./touchAvailable":128,"@marcom/ac-function/once":131,"ac-browser":121}],94:[function(c,d,b){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var k=false;var h=g.getDocument();
var j=g.getNavigator();try{if("cookie" in h&&!!j.cookieEnabled){h.cookie="ac_feature_cookie=1";
k=(h.cookie.indexOf("ac_feature_cookie")!==-1);h.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}}catch(i){}return k}d.exports=f(a);d.exports.original=a},{"./helpers/globals":100,"@marcom/ac-function/once":131}],95:[function(c,d,b){var g=c("@marcom/ac-prefixer/getStyleValue");
var f=c("@marcom/ac-function/once");function a(){var h=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
return h.some(function(i){return !!g("background-image",i)})}d.exports=f(a);d.exports.original=a
},{"@marcom/ac-function/once":131,"@marcom/ac-prefixer/getStyleValue":111}],96:[function(c,d,b){var g=c("@marcom/ac-prefixer/getStyleValue");
var f=c("@marcom/ac-prefixer/getStyleProperty");var h=c("@marcom/ac-function/memoize");
function a(j,i){if(typeof i!=="undefined"){return !!g(j,i)}else{return !!f(j)}}d.exports=h(a);
d.exports.original=a},{"@marcom/ac-function/memoize":130,"@marcom/ac-prefixer/getStyleProperty":110,"@marcom/ac-prefixer/getStyleValue":111}],97:[function(b,c,a){var f=b("@marcom/ac-prefixer/getStyleValue");
var d=b("@marcom/ac-function/once");function g(){return !!f("margin","1vw 1vh")
}c.exports=d(g);c.exports.original=g},{"@marcom/ac-function/once":131,"@marcom/ac-prefixer/getStyleValue":111}],98:[function(b,d,a){var f=b("./helpers/globals");
var g=b("@marcom/ac-function/memoize");function c(h,j){var i=f.getDocument();var k;
j=j||"div";k=i.createElement(j);return(h in k)}d.exports=g(c);d.exports.original=c
},{"./helpers/globals":100,"@marcom/ac-function/memoize":130}],99:[function(c,f,b){var a=c("@marcom/ac-prefixer/getEventType");
var g=c("@marcom/ac-function/memoize");function d(i,h){return !!a(i,h)}f.exports=g(d);
f.exports.original=d},{"@marcom/ac-function/memoize":130,"@marcom/ac-prefixer/getEventType":109}],100:[function(b,c,a){c.exports={getWindow:function(){return window
},getDocument:function(){return document},getNavigator:function(){return navigator
}}},{}],101:[function(b,c,a){c.exports={canvasAvailable:b("./canvasAvailable"),continuousScrollEventsAvailable:b("./continuousScrollEventsAvailable"),cookiesAvailable:b("./cookiesAvailable"),cssLinearGradientAvailable:b("./cssLinearGradientAvailable"),cssPropertyAvailable:b("./cssPropertyAvailable"),cssViewportUnitsAvailable:b("./cssViewportUnitsAvailable"),elementAttributeAvailable:b("./elementAttributeAvailable"),eventTypeAvailable:b("./eventTypeAvailable"),isDesktop:b("./isDesktop"),isHandheld:b("./isHandheld"),isRetina:b("./isRetina"),isTablet:b("./isTablet"),localStorageAvailable:b("./localStorageAvailable"),mediaElementsAvailable:b("./mediaElementsAvailable"),mediaQueriesAvailable:b("./mediaQueriesAvailable"),sessionStorageAvailable:b("./sessionStorageAvailable"),svgAvailable:b("./svgAvailable"),threeDTransformsAvailable:b("./threeDTransformsAvailable"),touchAvailable:b("./touchAvailable"),webGLAvailable:b("./webGLAvailable")}
},{"./canvasAvailable":92,"./continuousScrollEventsAvailable":93,"./cookiesAvailable":94,"./cssLinearGradientAvailable":95,"./cssPropertyAvailable":96,"./cssViewportUnitsAvailable":97,"./elementAttributeAvailable":98,"./eventTypeAvailable":99,"./isDesktop":102,"./isHandheld":103,"./isRetina":104,"./isTablet":105,"./localStorageAvailable":106,"./mediaElementsAvailable":107,"./mediaQueriesAvailable":108,"./sessionStorageAvailable":125,"./svgAvailable":126,"./threeDTransformsAvailable":127,"./touchAvailable":128,"./webGLAvailable":129}],102:[function(d,f,b){var a=d("./touchAvailable").original;
var h=d("./helpers/globals");var g=d("@marcom/ac-function/once");function c(){var i=h.getWindow();
return(!a()&&!i.orientation)}f.exports=g(c);f.exports.original=c},{"./helpers/globals":100,"./touchAvailable":128,"@marcom/ac-function/once":131}],103:[function(f,g,c){var d=f("./isDesktop").original;
var a=f("./isTablet").original;var h=f("@marcom/ac-function/once");function b(){return(!d()&&!a())
}g.exports=h(b);g.exports.original=b},{"./isDesktop":102,"./isTablet":105,"@marcom/ac-function/once":131}],104:[function(b,c,a){var d=b("./helpers/globals");
c.exports=function f(){var g=d.getWindow();return("devicePixelRatio" in g&&g.devicePixelRatio>=1.5)
}},{"./helpers/globals":100}],105:[function(f,g,c){var d=f("./isDesktop").original;
var i=f("./helpers/globals");var h=f("@marcom/ac-function/once");var b=600;function a(){var k=i.getWindow();
var j=k.screen.width;if(k.orientation&&k.screen.height<j){j=k.screen.height}return(!d()&&j>=b)
}g.exports=h(a);g.exports.original=a},{"./helpers/globals":100,"./isDesktop":102,"@marcom/ac-function/once":131}],106:[function(c,d,a){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function b(){var j=g.getWindow();var i=false;
try{i=!!(j.localStorage&&j.localStorage.non_existent!==null)}catch(h){}return i
}d.exports=f(b);d.exports.original=b},{"./helpers/globals":100,"@marcom/ac-function/once":131}],107:[function(b,c,a){var g=b("./helpers/globals");
var d=b("@marcom/ac-function/once");function f(){var h=g.getWindow();return("HTMLMediaElement" in h)
}c.exports=d(f);c.exports.original=f},{"./helpers/globals":100,"@marcom/ac-function/once":131}],108:[function(c,d,b){c("@marcom/ac-polyfills/matchMedia");
var g=c("./helpers/globals");var f=c("@marcom/ac-function/once");function a(){var i=g.getWindow();
var h=i.matchMedia("only all");return !!(h&&h.matches)}d.exports=f(a);d.exports.original=a
},{"./helpers/globals":100,"@marcom/ac-function/once":131,"@marcom/ac-polyfills/matchMedia":160}],109:[function(b,c,a){arguments[4][18][0].apply(a,arguments)
},{"./shared/camelCasedEventTypes":112,"./shared/prefixHelper":114,"./shared/windowFallbackEventTypes":117,"./utils/eventTypeAvailable":118,dup:18}],110:[function(b,c,a){arguments[4][48][0].apply(a,arguments)
},{"./shared/getStyleTestElement":113,"./shared/prefixHelper":114,"./shared/stylePropertyCache":115,"./utils/toCSS":119,"./utils/toDOM":120,dup:48}],111:[function(b,c,a){arguments[4][49][0].apply(a,arguments)
},{"./getStyleProperty":110,"./shared/prefixHelper":114,"./shared/stylePropertyCache":115,"./shared/styleValueAvailable":116,dup:49}],112:[function(b,c,a){arguments[4][19][0].apply(a,arguments)
},{dup:19}],113:[function(b,c,a){arguments[4][50][0].apply(a,arguments)},{dup:50}],114:[function(b,c,a){arguments[4][20][0].apply(a,arguments)
},{dup:20}],115:[function(b,c,a){arguments[4][52][0].apply(a,arguments)},{dup:52}],116:[function(b,c,a){arguments[4][53][0].apply(a,arguments)
},{"./getStyleTestElement":113,"./stylePropertyCache":115,dup:53}],117:[function(b,c,a){arguments[4][21][0].apply(a,arguments)
},{dup:21}],118:[function(b,c,a){arguments[4][22][0].apply(a,arguments)},{dup:22}],119:[function(b,c,a){arguments[4][55][0].apply(a,arguments)
},{dup:55}],120:[function(b,c,a){arguments[4][56][0].apply(a,arguments)},{dup:56}],121:[function(d,f,b){var g=d("./ac-browser/BrowserData");
var a=/applewebkit/i;var h=d("./ac-browser/IE");var c=g.create();c.isWebKit=function(i){var j=i||window.navigator.userAgent;
return j?!!a.test(j):false};c.lowerCaseUserAgent=navigator.userAgent.toLowerCase();
if(c.name==="IE"){c.IE={documentMode:h.getDocumentMode()}}f.exports=c},{"./ac-browser/BrowserData":122,"./ac-browser/IE":123}],122:[function(b,c,a){b("ac-polyfills/Array/prototype.filter");
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
};c.exports=f},{"./data":124,"ac-polyfills/Array/prototype.filter":265,"ac-polyfills/Array/prototype.some":266}],123:[function(b,c,a){c.exports={getDocumentMode:function(){var d;
if(document.documentMode){d=parseInt(document.documentMode,10)}else{d=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){d=7
}}}return d}}},{}],124:[function(b,c,a){c.exports={browser:[{string:window.navigator.userAgent,subString:"Edge",identity:"Edge"},{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],125:[function(c,d,b){var g=c("./helpers/globals");var f=c("@marcom/ac-function/once");
function a(){var j=g.getWindow();var h=false;try{if("sessionStorage" in j&&typeof j.sessionStorage.setItem==="function"){j.sessionStorage.setItem("ac_feature","test");
h=true;j.sessionStorage.removeItem("ac_feature","test")}}catch(i){}return h}d.exports=f(a);
d.exports.original=a},{"./helpers/globals":100,"@marcom/ac-function/once":131}],126:[function(c,d,b){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var h=g.getDocument();return !!h.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":100,"@marcom/ac-function/once":131}],127:[function(b,c,a){var g=b("@marcom/ac-prefixer/getStyleValue");
var d=b("@marcom/ac-function/once");function f(){return !!(g("perspective","1px")&&g("transform","translateZ(0)"))
}c.exports=d(f);c.exports.original=f},{"@marcom/ac-function/once":131,"@marcom/ac-prefixer/getStyleValue":111}],128:[function(c,d,b){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var j=g.getWindow();var h=g.getDocument();
var i=g.getNavigator();return !!(("ontouchstart" in j)||(j.DocumentTouch&&h instanceof j.DocumentTouch)||(i.maxTouchPoints>0)||(i.msMaxTouchPoints>0))
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":100,"@marcom/ac-function/once":131}],129:[function(c,d,b){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var h=g.getDocument();var i=h.createElement("canvas");
if(typeof i.getContext==="function"){return !!(i.getContext("webgl")||i.getContext("experimental-webgl"))
}return false}d.exports=f(a);d.exports.original=a},{"./helpers/globals":100,"@marcom/ac-function/once":131}],130:[function(c,d,b){var a=function(){var h="";
var g;for(g=0;g<arguments.length;g++){if(g>0){h+=","}h+=arguments[g]}return h};
d.exports=function f(i,h){h=h||a;var g=function(){var j=arguments;var k=h.apply(this,j);
if(!(k in g.cache)){g.cache[k]=i.apply(this,j)}return g.cache[k]};g.cache={};return g
}},{}],131:[function(b,c,a){c.exports=function d(g){var f;return function(){if(typeof f==="undefined"){f=g.apply(this,arguments)
}return f}}},{}],132:[function(b,c,a){c.exports=function d(f,h){var g=null;return function(){if(g===null){f.apply(this,arguments);
g=setTimeout(function(){g=null},h)}}}},{}],133:[function(d,c,g){var m=d("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var j=d("@marcom/ac-dom-events/utils/addEventListener");var b=d("@marcom/ac-dom-events/utils/removeEventListener");
var i=d("@marcom/ac-object/create");var f=d("@marcom/ac-keyboard/internal/KeyEvent");
var k="keydown";var l="keyup";function a(){this._keysDown={};this._DOMKeyDown=this._DOMKeyDown.bind(this);
this._DOMKeyUp=this._DOMKeyUp.bind(this);j(document,k,this._DOMKeyDown,true);j(document,l,this._DOMKeyUp,true);
m.call(this)}var h=a.prototype=i(m.prototype);h.onDown=function(n,o){return this.on(k+":"+n,o)
};h.onceDown=function(n,o){return this.once(k+":"+n,o)};h.offDown=function(n,o){return this.off(k+":"+n,o)
};h.onUp=function(n,o){return this.on(l+":"+n,o)};h.onceUp=function(n,o){return this.once(l+":"+n,o)
};h.offUp=function(n,o){return this.off(l+":"+n,o)};h.isDown=function(n){n+="";
return this._keysDown[n]||false};h.isUp=function(n){return !this.isDown(n)};h.destroy=function(){this._keysDown=null;
b(document,k,this._DOMKeyDown);b(document,l,this._DOMKeyUp);m.prototype.destroy.call(this);
return this};h._DOMKeyDown=function(o){var n=this._normalizeKeyboardEvent(o);var p=n.keyCode+="";
this._trackKeyDown(p);this.trigger(k+":"+p,n)};h._DOMKeyUp=function(o){var n=this._normalizeKeyboardEvent(o);
var p=n.keyCode+="";this._trackKeyUp(p);this.trigger(l+":"+p,n)};h._normalizeKeyboardEvent=function(n){return new f(n)
};h._trackKeyUp=function(n){if(this._keysDown[n]){this._keysDown[n]=false}};h._trackKeyDown=function(n){if(!this._keysDown[n]){this._keysDown[n]=true
}};c.exports=a},{"@marcom/ac-dom-events/utils/addEventListener":29,"@marcom/ac-dom-events/utils/removeEventListener":31,"@marcom/ac-event-emitter-micro":90,"@marcom/ac-keyboard/internal/KeyEvent":135,"@marcom/ac-object/create":138}],134:[function(c,d,b){var a=c("./Keyboard");
d.exports=new a()},{"./Keyboard":133}],135:[function(c,d,b){var a=["keyLocation"];
function f(g){this.originalEvent=g;var h;for(h in g){if(a.indexOf(h)===-1&&typeof g[h]!=="function"){this[h]=g[h]
}}this.location=(this.originalEvent.location!==undefined)?this.originalEvent.location:this.originalEvent.keyLocation
}f.prototype={preventDefault:function(){if(typeof this.originalEvent.preventDefault!=="function"){this.originalEvent.returnValue=false;
return}return this.originalEvent.preventDefault()},stopPropagation:function(){return this.originalEvent.stopPropagation()
}};d.exports=f},{}],136:[function(b,c,a){c.exports={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,COMMAND:91,CAPSLOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_ZERO:96,NUMPAD_ONE:97,NUMPAD_TWO:98,NUMPAD_THREE:99,NUMPAD_FOUR:100,NUMPAD_FIVE:101,NUMPAD_SIX:102,NUMPAD_SEVEN:103,NUMPAD_EIGHT:104,NUMPAD_NINE:105,NUMPAD_ASTERISK:106,NUMPAD_PLUS:107,NUMPAD_DASH:109,NUMPAD_DOT:110,NUMPAD_SLASH:111,NUMPAD_EQUALS:187,TICK:192,LEFT_BRACKET:219,RIGHT_BRACKET:221,BACKSLASH:220,SEMICOLON:186,APOSTRAPHE:222,SPACEBAR:32,CLEAR:12,COMMA:188,DOT:190,SLASH:191}
},{}],137:[function(c,d,b){c("@marcom/ac-polyfills/Array/isArray");var h=c("./extend");
var a=Object.prototype.hasOwnProperty;var f=function(i,j){var k;for(k in j){if(a.call(j,k)){if(j[k]===null){i[k]=null
}else{if(typeof j[k]==="object"){i[k]=Array.isArray(j[k])?[]:{};f(i[k],j[k])}else{i[k]=j[k]
}}}}return i};d.exports=function g(j,i){if(i){return f({},j)}return h({},j)}},{"./extend":140,"@marcom/ac-polyfills/Array/isArray":150}],138:[function(b,d,a){var f=function(){};
d.exports=function c(g){if(arguments.length>1){throw new Error("Second argument not supported")
}if(g===null||typeof g!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(g)}else{f.prototype=g;
return new f()}}},{}],139:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"){throw new TypeError("defaults: must provide a defaults object")
}g=g||{};if(typeof g!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return f({},h,g)}},{"./extend":140}],140:[function(c,d,b){c("@marcom/ac-polyfills/Array/prototype.forEach");
var a=Object.prototype.hasOwnProperty;d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]
}else{h=[].slice.call(arguments)}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{"@marcom/ac-polyfills/Array/prototype.forEach":153}],141:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(i){if(Object.getPrototypeOf){return Object.getPrototypeOf(i)
}else{if(typeof i!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return i.__proto__}else{var g=i.constructor;
var h;if(a.call(i,"constructor")){h=g;if(!(delete i.constructor)){return null}g=i.constructor;
i.constructor=h}return g?g.prototype:null}}}}},{}],142:[function(b,c,a){c.exports={clone:b("./clone"),create:b("./create"),defaults:b("./defaults"),extend:b("./extend"),getPrototypeOf:b("./getPrototypeOf"),isDate:b("./isDate"),isEmpty:b("./isEmpty"),isRegExp:b("./isRegExp"),toQueryParameters:b("./toQueryParameters")}
},{"./clone":137,"./create":138,"./defaults":139,"./extend":140,"./getPrototypeOf":141,"./isDate":143,"./isEmpty":144,"./isRegExp":145,"./toQueryParameters":147}],143:[function(b,d,a){d.exports=function c(f){return Object.prototype.toString.call(f)==="[object Date]"
}},{}],144:[function(c,d,b){var a=Object.prototype.hasOwnProperty;d.exports=function f(g){var h;
if(typeof g!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(h in g){if(a.call(g,h)){return false}}return true}},{}],145:[function(c,d,b){d.exports=function a(f){return window.RegExp?f instanceof RegExp:false
}},{}],146:[function(i,c,x){var s=Object.prototype.toString;var l=Object.prototype.hasOwnProperty;
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
}catch(z){return A}}},{}],147:[function(c,f,b){var a=c("qs");f.exports=function d(g){if(typeof g!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return a.stringify(g)}},{qs:146}],148:[function(b,c,a){c.exports={PageVisibilityManager:b("./ac-page-visibility/PageVisibilityManager")}
},{"./ac-page-visibility/PageVisibilityManager":149}],149:[function(c,f,b){var d=c("@marcom/ac-object/create");
var h=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;function a(){if(typeof document.addEventListener==="undefined"){return
}var i;if(typeof document.hidden!=="undefined"){this._hidden="hidden";i="visibilitychange"
}else{if(typeof document.mozHidden!=="undefined"){this._hidden="mozHidden";i="mozvisibilitychange"
}else{if(typeof document.msHidden!=="undefined"){this._hidden="msHidden";i="msvisibilitychange"
}else{if(typeof document.webkitHidden!=="undefined"){this._hidden="webkitHidden";
i="webkitvisibilitychange"}}}}if(typeof document[this._hidden]==="undefined"){this.isHidden=false
}else{this.isHidden=document[this._hidden]}if(i){document.addEventListener(i,this._handleVisibilityChange.bind(this),false)
}h.call(this)}var g=a.prototype=d(h.prototype);g.CHANGED="changed";g._handleVisibilityChange=function(i){this.isHidden=document[this._hidden];
this.trigger(this.CHANGED,{isHidden:this.isHidden})};f.exports=new a()},{"@marcom/ac-event-emitter-micro":90,"@marcom/ac-object/create":138}],150:[function(b,c,a){if(!Array.isArray){Array.isArray=function(d){return Object.prototype.toString.call(d)==="[object Array]"
}}},{}],151:[function(b,c,a){if(!Array.prototype.every){Array.prototype.every=function d(k,j){var h=Object(this);
var f=h.length>>>0;var g;if(typeof k!=="function"){throw new TypeError(k+" is not a function")
}for(g=0;g<f;g+=1){if(g in h&&!k.call(j,h[g],g,h)){return false}}return true}}},{}],152:[function(b,c,a){if(!Array.prototype.filter){Array.prototype.filter=function d(l,k){var j=Object(this);
var f=j.length>>>0;var h;var g=[];if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}for(h=0;h<f;h+=1){if(h in j&&l.call(k,j[h],h,j)){g.push(j[h])}}return g}}},{}],153:[function(b,c,a){if(!Array.prototype.forEach){Array.prototype.forEach=function d(k,j){var h=Object(this);
var f;var g;if(typeof k!=="function"){throw new TypeError("No function object passed to forEach.")
}for(f=0;f<this.length;f+=1){g=h[f];k.call(j,g,f,h)}}}},{}],154:[function(b,c,a){if(!Array.prototype.indexOf){Array.prototype.indexOf=function d(g,h){var i=h||0;
var f=0;if(i<0){i=this.length+h-1;if(i<0){throw"Wrapped past beginning of array while looking up a negative start index."
}}for(f=0;f<this.length;f++){if(this[f]===g){return f}}return(-1)}}},{}],155:[function(b,c,a){(function(){var d=Array.prototype.slice;
try{d.call(document.documentElement)}catch(f){Array.prototype.slice=function(n,j){j=(typeof j!=="undefined")?j:this.length;
if(Object.prototype.toString.call(this)==="[object Array]"){return d.call(this,n,j)
}var l,h=[],k,g=this.length;var o=n||0;o=(o>=0)?o:g+o;var m=(j)?j:g;if(j<0){m=g+j
}k=m-o;if(k>0){h=new Array(k);if(this.charAt){for(l=0;l<k;l++){h[l]=this.charAt(o+l)
}}else{for(l=0;l<k;l++){h[l]=this[o+l]}}}return h}}}())},{}],156:[function(b,c,a){if(!Array.prototype.some){Array.prototype.some=function d(k,j){var g=Object(this);
var f=g.length>>>0;var h;if(typeof k!=="function"){throw new TypeError(k+" is not a function")
}for(h=0;h<f;h+=1){if(h in g&&k.call(j,g[h],h,g)===true){return true}}return false
}}},{}],157:[function(b,c,a){if(document.createEvent){try{new window.CustomEvent("click")
}catch(d){window.CustomEvent=(function(){function f(h,i){i=i||{bubbles:false,cancelable:false,detail:undefined};
var g=document.createEvent("CustomEvent");g.initCustomEvent(h,i.bubbles,i.cancelable,i.detail);
return g}f.prototype=window.Event.prototype;return f}())}}},{}],158:[function(b,c,a){
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
}else{return d.call(this,h)}}}f=null}())}}},{}],159:[function(b,c,a){if(!Function.prototype.bind){Function.prototype.bind=function(d){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
}var i=Array.prototype.slice.call(arguments,1);var h=this;var f=function(){};var g=function(){return h.apply((this instanceof f&&d)?this:d,i.concat(Array.prototype.slice.call(arguments)))
};f.prototype=this.prototype;g.prototype=new f();return g}}},{}],160:[function(b,c,a){window.matchMedia=window.matchMedia||(function(i,j){var g,d=i.documentElement,f=d.firstElementChild||d.firstChild,h=i.createElement("body"),k=i.createElement("div");
k.id="mq-test-1";k.style.cssText="position:absolute;top:-100em";h.style.background="none";
h.appendChild(k);return function(l){k.innerHTML='&shy;<style media="'+l+'"> #mq-test-1 { width:42px; }</style>';
d.insertBefore(h,f);g=k.offsetWidth===42;d.removeChild(h);return{matches:g,media:l}
}}(document))},{}],161:[function(b,c,a){(function(){var f=0;var g=["ms","moz","webkit","o"];
for(var d=0;d<g.length&&!window.requestAnimationFrame;++d){window.requestAnimationFrame=window[g[d]+"RequestAnimationFrame"];
window.cancelAnimationFrame=window[g[d]+"CancelAnimationFrame"]||window[g[d]+"CancelRequestAnimationFrame"]
}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(l,i){var h=Date.now();
var j=Math.max(0,16-(h-f));var k=window.setTimeout(function(){l(h+j)},j);f=h+j;
return k}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(h){clearTimeout(h)
}}}())},{}],162:[function(c,d,b){var g=c("./ac-clock/Clock"),f=c("./ac-clock/ThrottledClock"),a=c("./ac-clock/sharedClockInstance");
a.Clock=g;a.ThrottledClock=f;d.exports=a},{"./ac-clock/Clock":163,"./ac-clock/ThrottledClock":164,"./ac-clock/sharedClockInstance":165}],163:[function(c,d,b){c("@marcom/ac-polyfills/Function/prototype.bind");
c("@marcom/ac-polyfills/requestAnimationFrame");var g;var f=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var a=new Date().getTime();function h(){f.call(this);this.lastFrameTime=null;this._animationFrame=null;
this._active=false;this._startTime=null;this._boundOnAnimationFrame=this._onAnimationFrame.bind(this);
this._getTime=Date.now||function(){return new Date().getTime()}}g=h.prototype=new f(null);
g.start=function(){if(this._active){return}this._tick()};g.stop=function(){if(this._active){window.cancelAnimationFrame(this._animationFrame)
}this._animationFrame=null;this.lastFrameTime=null;this._active=false};g.destroy=function(){this.stop();
this.off();var j;for(j in this){if(this.hasOwnProperty(j)){this[j]=null}}};g.isRunning=function(){return this._active
};g._tick=function(){if(!this._active){this._active=true}this._animationFrame=window.requestAnimationFrame(this._boundOnAnimationFrame)
};g._onAnimationFrame=function(l){var m=0;var i=this._getTime();if(this.lastFrameTime===null){this.lastFrameTime=i-a
}else{m=l-this.lastFrameTime}var k=0,j;if(m!==0){k=1000/m}j={time:l,delta:m,fps:k,naturalFps:k,timeNow:i};
this.trigger("update",j);this.trigger("draw",j);this._animationFrame=null;this.lastFrameTime=l;
if(this._active!==false){this._tick()}else{this.lastFrameTime=null}};d.exports=h
},{"@marcom/ac-event-emitter-micro":90,"@marcom/ac-polyfills/Function/prototype.bind":159,"@marcom/ac-polyfills/requestAnimationFrame":161}],164:[function(c,d,b){c("@marcom/ac-polyfills/requestAnimationFrame");
var g;var a=c("./sharedClockInstance"),f=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
function h(j,i){if(j===null){return}f.call(this);i=i||{};this._fps=j||null;this._clock=i.clock||a;
this._lastThrottledTime=null;this._clockEvent=null;this._boundOnClockDraw=this._onClockDraw.bind(this);
this._boundOnClockUpdate=this._onClockUpdate.bind(this);this._clock.on("update",this._boundOnClockUpdate)
}g=h.prototype=new f(null);g.setFps=function(i){this._fps=i;return this};g.getFps=function(){return this._fps
};g.start=function(){this._clock.start();return this};g.stop=function(){this._clock.stop();
return this};g.isRunning=function(){return this._clock.isRunning()};g.destroy=function(){this._clock.off("update",this._boundOnClockUpdate);
this._clock.destroy.call(this)};g._onClockUpdate=function(i){if(this._lastThrottledTime===null){this._lastThrottledTime=this._clock.lastFrameTime
}var j=i.time-this._lastThrottledTime;if(!this._fps){throw new TypeError("FPS is not defined.")
}if(j<(1000/this._fps)){return}this._clockEvent=i;this._clockEvent.delta=j;this._clockEvent.fps=1000/j;
this._lastThrottledTime=this._clockEvent.time;this._clock.once("draw",this._boundOnClockDraw);
this.trigger("update",this._clockEvent)};g._onClockDraw=function(){this.trigger("draw",this._clockEvent)
};d.exports=h},{"./sharedClockInstance":165,"@marcom/ac-event-emitter-micro":90,"@marcom/ac-polyfills/requestAnimationFrame":161}],165:[function(b,c,a){var d=b("./Clock");
c.exports=new d()},{"./Clock":163}],166:[function(b,c,a){c.exports={Clip:b("./ac-clip/Clip")}
},{"./ac-clip/Clip":167}],167:[function(c,b,d){c("@marcom/ac-polyfills/Array/isArray");
var g=c("@marcom/ac-object/create");var l=c("@marcom/ac-easing").createPredefined;
var a=c("@marcom/ac-clock");var j=c("@marcom/ac-easing").Ease;var k=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var i="ease";function h(o,n,q,m){m=m||{};this._options=m;this._isYoyo=m.yoyo;this._direction=1;
this._timeScale=1;this._loop=m.loop||0;this._loopCount=0;this._target=o;this.duration(n);
this._delay=(m.delay||0)*1000;this._remainingDelay=this._delay;this._progress=0;
this._clock=m.clock||a;this._playing=false;this._getTime=Date.now||function(){return new Date().getTime()
};this._propsTo=q||{};this._propsFrom=m.propsFrom||{};this._onStart=m.onStart||null;
this._onUpdate=m.onUpdate||null;this._onDraw=m.onDraw||null;this._onComplete=m.onComplete||null;
var p=m.ease||i;this._ease=(typeof p==="function")?new j(p):l(p);this._start=this._start.bind(this);
this._update=this._update.bind(this);this._draw=this._draw.bind(this);this._isPrepared=false;
h._add(this);k.call(this)}var f=h.prototype=g(k.prototype);h.COMPLETE="complete";
h.PAUSE="pause";h.PLAY="play";f.play=function(){if(!this._playing){this._playing=true;
if(this._delay===0||this._remainingDelay===0){this._start()}else{if(!this._isPrepared){this._setDiff();
this._updateProps()}this._startTimeout=setTimeout(this._start,this._remainingDelay/this._timeScale);
this._delayStart=this._getTime()}}return this};f.pause=function(){if(this._playing){if(this._startTimeout){this._remainingDelay=this._getTime()-this._delayStart;
clearTimeout(this._startTimeout)}this._stop();this.trigger(h.PAUSE,this)}return this
};f.destroy=function(){this.pause();this._options=null;this._target=null;this._storeTarget=null;
this._ease=null;this._clock=null;this._propsTo=null;this._propsFrom=null;this._storePropsTo=null;
this._storePropsFrom=null;this._propsDiff=null;this._propsEase=null;this._onStart=null;
this._onUpdate=null;this._onDraw=null;this._onComplete=null;h._remove(this);k.prototype.destroy.call(this);
return this};f.reset=function(){if(!this._isPrepared){return}this._stop();this._resetLoop(this._target,this._storeTarget);
this._direction=1;this._loop=this._options.loop||0;this._loopCount=0;this._propsFrom=this._storePropsFrom;
this._propsTo=this._storePropsTo;this._progress=0;this._setStartTime();if(this._onUpdate){this._onUpdate.call(this,this)
}if(this._onDraw){this._onDraw.call(this,this)}return this};f.playing=function(){return this._playing
};f.target=function(){return this._target};f.duration=function(m){if(m!==undefined){this._duration=m;
this._durationMs=(m*1000)/this._timeScale;if(this._playing){this._setStartTime()
}}return this._duration};f.timeScale=function(m){if(m!==undefined){this._timeScale=m;
this.duration(this._duration)}return this._timeScale};f.currentTime=function(m){if(m!==undefined){return this.progress(m/this._duration)*this._duration
}return(this.progress()*this._duration)};f.progress=function(m){if(m!==undefined){this._progress=Math.min(1,Math.max(0,m));
this._setStartTime();if(!this._isPrepared){this._setDiff()}if(this._playing&&m===1){this._completeProps();
if(this._onUpdate){this._onUpdate.call(this,this)}if(this._onDraw){this._onDraw.call(this,this)
}this._complete()}else{this._updateProps();if(this._onUpdate){this._onUpdate.call(this,this)
}if(this._onDraw){this._onDraw.call(this,this)}}}return this._progress};f._resetLoop=function(n,m){var o;
for(o in m){if(m.hasOwnProperty(o)){if(m[o]!==null){if(typeof m[o]==="object"){this._resetLoop(n[o],m[o])
}else{n[o]=m[o]}}}}};f._cloneObjects=function(){var o={};var n={};var m={};this._cloneObjectsLoop(this._target,this._propsTo,this._propsFrom,o,n,m);
return{target:o,propsTo:n,propsFrom:m}};f._cloneObjectsLoop=function(p,t,s,r,n,m){var o;
var q;for(q in s){if(s.hasOwnProperty(q)&&t[q]===undefined&&p[q]!==undefined){r[q]=p[q];
n[q]=p[q];m[q]=s[q]}}for(q in t){if(p.hasOwnProperty(q)){o=typeof p[q];if(p[q]!==null&&o==="object"){if(Array.isArray(p[q])){r[q]=[];
n[q]=[];m[q]=[]}else{r[q]={};n[q]={};m[q]={}}this._cloneObjectsLoop(p[q],t[q]||{},s[q]||{},r[q],n[q],m[q])
}else{if(t[q]!==null&&o==="number"){r[q]=p[q];n[q]=t[q];if(s&&s[q]!==undefined){m[q]=s[q]
}}}}}};f._prepareProperties=function(){if(!this._isPrepared){var m=this._cloneObjects();
this._storeTarget=m.target;this._propsTo=m.propsTo;this._storePropsTo=this._propsTo;
this._propsFrom=m.propsFrom;this._storePropsFrom=this._propsFrom;this._isPrepared=true
}};f._setStartTime=function(){this._startTime=this._getTime()-(this.progress()*this._durationMs)
};f._setDiff=function(){if(!this._isPrepared){this._prepareProperties()}this._propsDiff={};
this._setDiffLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff)};
f._setDiffLoop=function(r,q,o,n){var m;var p;for(p in r){if(r.hasOwnProperty(p)){m=typeof r[p];
if(r[p]!==null&&m==="object"){q[p]=q[p]||{};n[p]=n[p]||{};this._setDiffLoop(r[p],q[p],o[p],n[p])
}else{if(m==="number"&&o[p]!==undefined){if(q[p]!==undefined){o[p]=q[p]}else{q[p]=o[p]
}n[p]=r[p]-o[p]}else{r[p]=null;q[p]=null}}}}};f._start=function(){this._startTimeout=null;
this._remainingDelay=0;this._setStartTime();this._clock.on("update",this._update);
this._clock.on("draw",this._draw);if(!this._clock.isRunning()){this._clock.start()
}this._setDiff();this._playing=true;this._running=true;if(this._onStart){this._onStart.call(this,this)
}this.trigger(h.PLAY,this)};f._stop=function(){this._playing=false;this._running=false;
this._clock.off("update",this._update);this._clock.off("draw",this._draw)};f._updateProps=function(){var m;
if(this._direction===1){m=this._ease.getValue(this._progress)}else{m=1-this._ease.getValue(1-this._progress)
}this._updatePropsLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff,m)
};f._updatePropsLoop=function(r,q,o,n,m){var p;for(p in r){if(r.hasOwnProperty(p)&&r[p]!==null){if(typeof r[p]!=="number"){this._updatePropsLoop(r[p],q[p],o[p],n[p],m)
}else{o[p]=q[p]+(n[p]*m)}}}};f._completeProps=function(){this._completePropsLoop(this._propsTo,this._target)
};f._completePropsLoop=function(o,m){var n;for(n in o){if(o.hasOwnProperty(n)&&o[n]!==null){if(typeof o[n]!=="number"){this._completePropsLoop(o[n],m[n])
}else{m[n]=o[n]}}}};f._complete=function(){if(this._isYoyo&&((this._loop>0&&this._loopCount<=this._loop)||(this._loop===0&&this._loopCount===0))){this._propsFrom=(this._direction===1)?this._storePropsTo:this._storePropsFrom;
this._propsTo=(this._direction===1)?this._storePropsFrom:this._storePropsTo;this._direction*=-1;
if(this._direction===-1){++this._loopCount}this.progress(0);this._start()}else{if(this._loopCount<this._loop){++this._loopCount;
this.progress(0);this._start()}else{this.trigger(h.COMPLETE,this);if(this._onComplete){this._onComplete.call(this,this)
}if(this._options&&this._options.destroyOnComplete){this.destroy()}}}};f._update=function(m){if(this._running){this._progress=(m.timeNow-this._startTime)/this._durationMs;
if(this._progress>=1){this._progress=1;this._running=false;this._completeProps()
}else{this._updateProps()}if(this._onUpdate){this._onUpdate.call(this,this)}}};
f._draw=function(m){if(this._onDraw){this._onDraw.call(this,this)}if(!this._running){this._stop();
if(this._progress===1){this._complete()}}};h._instantiate=function(){this._clips=[];
return this};h._add=function(m){this._clips.push(m)};h._remove=function(n){var m=this._clips.indexOf(n);
if(m>-1){this._clips.splice(m,1)}};h.getAll=function(o){if(o!==undefined){var m=[];
var n=this._clips.length;while(n--){if(this._clips[n].target()===o){m.push(this._clips[n])
}}return m}return Array.prototype.slice.call(this._clips)};h.destroyAll=function(o){var m=this.getAll(o);
if(this._clips.length===m.length){this._clips=[]}var n=m.length;while(n--){m[n].destroy()
}return m};h.to=function(o,n,p,m){m=m||{};if(m.destroyOnComplete===undefined){m.destroyOnComplete=true
}return new h(o,n,p,m).play()};h.from=function(p,o,m,n){n=n||{};n.propsFrom=m;if(n.destroyOnComplete===undefined){n.destroyOnComplete=true
}return new h(p,o,n.propsTo,n).play()};b.exports=h._instantiate()},{"@marcom/ac-clock":162,"@marcom/ac-easing":188,"@marcom/ac-event-emitter-micro":90,"@marcom/ac-object/create":138,"@marcom/ac-polyfills/Array/isArray":150}],168:[function(b,c,a){var d=b("./ac-color/Color");
d.decimalToHex=b("./ac-color/static/decimalToHex");d.hexToDecimal=b("./ac-color/static/hexToDecimal");
d.hexToRgb=b("./ac-color/static/hexToRgb");d.isColor=b("./ac-color/static/isColor");
d.isHex=b("./ac-color/static/isHex");d.isRgb=b("./ac-color/static/isRgb");d.isRgba=b("./ac-color/static/isRgba");
d.mixColors=b("./ac-color/static/mixColors");d.rgbaToArray=b("./ac-color/static/rgbaToArray");
d.rgbToArray=b("./ac-color/static/rgbToArray");d.rgbToDecimal=b("./ac-color/static/rgbToDecimal");
d.rgbToHex=b("./ac-color/static/rgbToHex");d.rgbToHsl=b("./ac-color/static/rgbToHsl");
d.rgbToHsv=b("./ac-color/static/rgbToHsv");d.rgbaToObject=b("./ac-color/static/rgbaToObject");
d.rgbToObject=b("./ac-color/static/rgbToObject");d.shortToLongHex=b("./ac-color/static/shortToLongHex");
c.exports={Color:d}},{"./ac-color/Color":169,"./ac-color/static/decimalToHex":171,"./ac-color/static/hexToDecimal":172,"./ac-color/static/hexToRgb":173,"./ac-color/static/isColor":174,"./ac-color/static/isHex":175,"./ac-color/static/isRgb":176,"./ac-color/static/isRgba":177,"./ac-color/static/mixColors":178,"./ac-color/static/rgbToArray":179,"./ac-color/static/rgbToDecimal":180,"./ac-color/static/rgbToHex":181,"./ac-color/static/rgbToHsl":182,"./ac-color/static/rgbToHsv":183,"./ac-color/static/rgbToObject":184,"./ac-color/static/rgbaToArray":185,"./ac-color/static/rgbaToObject":186,"./ac-color/static/shortToLongHex":187}],169:[function(d,a,q){var h=d("./helpers/cssColorNames");
var m=d("./static/hexToRgb");var l=d("./static/isColor");var f=d("./static/isHex");
var b=d("./static/isRgba");var p=d("./static/mixColors");var k=d("./static/rgbaToArray");
var n=d("./static/rgbToArray");var s=d("./static/rgbToDecimal");var i=d("./static/rgbToHex");
var c=d("./static/rgbaToObject");var j=d("./static/rgbToObject");var o=d("./static/shortToLongHex");
function r(t){if(!l(t)&&!h.nameToRgbObject[t]){throw new Error(t+" is not a supported color.")
}this._setColor(t)}var g=r.prototype;g._setColor=function(t){this._color={};if(f(t)){this._color.hex=o(t);
this._color.rgb={color:m(t)}}else{if(b(t)){this._color.rgba={color:t};var v=this.rgbaObject();
this._color.rgb={color:"rgb("+v.r+", "+v.g+", "+v.b+")"}}else{if(h.nameToRgbObject[t]){var u=h.nameToRgbObject[t];
this._color.rgb={object:u,color:"rgb("+u.r+", "+u.g+", "+u.b+")"}}else{this._color.rgb={color:t}
}}}};g.rgb=function(){return this._color.rgb.color};g.rgba=function(){if(this._color.rgba===undefined){var t=this.rgbObject();
this._color.rgba={color:"rgba("+t.r+", "+t.g+", "+t.b+", 1)"}}return this._color.rgba.color
};g.hex=function(){if(this._color.hex===undefined){this._color.hex=i.apply(this,this.rgbArray())
}return this._color.hex};g.decimal=function(){if(this._color.decimal===undefined){this._color.decimal=s(this.rgb())
}return this._color.decimal};g.cssName=function(){return h.rgbToName[this.rgb()]||null
};g.rgbArray=function(){if(this._color.rgb.array===undefined){this._color.rgb.array=n(this.rgb())
}return this._color.rgb.array};g.rgbaArray=function(){if(this._color.rgba===undefined){this.rgba()
}if(this._color.rgba.array===undefined){this._color.rgba.array=k(this.rgba())}return this._color.rgba.array
};g.rgbObject=function(){if(this._color.rgb.object===undefined){this._color.rgb.object=j(this.rgb())
}return this._color.rgb.object};g.rgbaObject=function(){if(this._color.rgba===undefined){this.rgba()
}if(this._color.rgba.object===undefined){this._color.rgba.object=c(this.rgba())
}return this._color.rgba.object};g.getRed=function(){return this.rgbObject().r};
g.getGreen=function(){return this.rgbObject().g};g.getBlue=function(){return this.rgbObject().b
};g.getAlpha=function(){if(this._color.rgba===undefined){return 1}return this.rgbaObject().a
};g.setRed=function(t){if(t!==this.getRed()){this._setColor("rgba("+t+", "+this.getGreen()+", "+this.getBlue()+", "+this.getAlpha()+")")
}return this.rgbObject().r};g.setGreen=function(t){if(t!==this.getGreen()){this._setColor("rgba("+this.getRed()+", "+t+", "+this.getBlue()+", "+this.getAlpha()+")")
}return this.rgbObject().g};g.setBlue=function(t){if(t!==this.getBlue()){this._setColor("rgba("+this.getRed()+", "+this.getGreen()+", "+t+", "+this.getAlpha()+")")
}return this.rgbObject().b};g.setAlpha=function(t){if(t!==this.getAlpha()){this._setColor("rgba("+this.getRed()+", "+this.getGreen()+", "+this.getBlue()+", "+t+")")
}return this.rgbaObject().a};g.mix=function(t,u){var v=j(p(this.rgb(),t,u));this._setColor("rgba("+v.r+", "+v.g+", "+v.b+", "+this.getAlpha()+")");
return this.rgb()};g.clone=function(){return new r(this.rgb())};a.exports=r},{"./helpers/cssColorNames":170,"./static/hexToRgb":173,"./static/isColor":174,"./static/isHex":175,"./static/isRgba":177,"./static/mixColors":178,"./static/rgbToArray":179,"./static/rgbToDecimal":180,"./static/rgbToHex":181,"./static/rgbToObject":184,"./static/rgbaToArray":185,"./static/rgbaToObject":186,"./static/shortToLongHex":187}],170:[function(b,c,a){var d={"rgb(240, 248, 255)":"aliceblue","rgb(250, 235, 215)":"antiquewhite","rgb(0, 0, 0)":"black","rgb(0, 0, 255)":"blue","rgb(0, 255, 255)":"cyan","rgb(0, 0, 139)":"darkblue","rgb(0, 139, 139)":"darkcyan","rgb(0, 100, 0)":"darkgreen","rgb(0, 206, 209)":"darkturquoise","rgb(0, 191, 255)":"deepskyblue","rgb(0, 128, 0)":"green","rgb(0, 255, 0)":"lime","rgb(0, 0, 205)":"mediumblue","rgb(0, 250, 154)":"mediumspringgreen","rgb(0, 0, 128)":"navy","rgb(0, 255, 127)":"springgreen","rgb(0, 128, 128)":"teal","rgb(25, 25, 112)":"midnightblue","rgb(30, 144, 255)":"dodgerblue","rgb(32, 178, 170)":"lightseagreen","rgb(34, 139, 34)":"forestgreen","rgb(46, 139, 87)":"seagreen","rgb(47, 79, 79)":"darkslategray","rgb(50, 205, 50)":"limegreen","rgb(60, 179, 113)":"mediumseagreen","rgb(64, 224, 208)":"turquoise","rgb(65, 105, 225)":"royalblue","rgb(70, 130, 180)":"steelblue","rgb(72, 61, 139)":"darkslateblue","rgb(72, 209, 204)":"mediumturquoise","rgb(75, 0, 130)":"indigo","rgb(85, 107, 47)":"darkolivegreen","rgb(95, 158, 160)":"cadetblue","rgb(100, 149, 237)":"cornflowerblue","rgb(102, 205, 170)":"mediumaquamarine","rgb(105, 105, 105)":"dimgray","rgb(106, 90, 205)":"slateblue","rgb(107, 142, 35)":"olivedrab","rgb(112, 128, 144)":"slategray","rgb(119, 136, 153)":"lightslategray","rgb(123, 104, 238)":"mediumslateblue","rgb(124, 252, 0)":"lawngreen","rgb(127, 255, 212)":"aquamarine","rgb(127, 255, 0)":"chartreuse","rgb(128, 128, 128)":"gray","rgb(128, 0, 0)":"maroon","rgb(128, 128, 0)":"olive","rgb(128, 0, 128)":"purple","rgb(135, 206, 250)":"lightskyblue","rgb(135, 206, 235)":"skyblue","rgb(138, 43, 226)":"blueviolet","rgb(139, 0, 139)":"darkmagenta","rgb(139, 0, 0)":"darkred","rgb(139, 69, 19)":"saddlebrown","rgb(143, 188, 143)":"darkseagreen","rgb(144, 238, 144)":"lightgreen","rgb(147, 112, 219)":"mediumpurple","rgb(148, 0, 211)":"darkviolet","rgb(152, 251, 152)":"palegreen","rgb(153, 50, 204)":"darkorchid","rgb(154, 205, 50)":"yellowgreen","rgb(160, 82, 45)":"sienna","rgb(165, 42, 42)":"brown","rgb(169, 169, 169)":"darkgray","rgb(173, 255, 47)":"greenyellow","rgb(173, 216, 230)":"lightblue","rgb(175, 238, 238)":"paleturquoise","rgb(176, 196, 222)":"lightsteelblue","rgb(176, 224, 230)":"powderblue","rgb(178, 34, 34)":"firebrick","rgb(184, 134, 11)":"darkgoldenrod","rgb(186, 85, 211)":"mediumorchid","rgb(188, 143, 143)":"rosybrown","rgb(189, 183, 107)":"darkkhaki","rgb(192, 192, 192)":"silver","rgb(199, 21, 133)":"mediumvioletred","rgb(205, 92, 92)":"indianred","rgb(205, 133, 63)":"peru","rgb(210, 105, 30)":"chocolate","rgb(210, 180, 140)":"tan","rgb(211, 211, 211)":"lightgray","rgb(216, 191, 216)":"thistle","rgb(218, 165, 32)":"goldenrod","rgb(218, 112, 214)":"orchid","rgb(219, 112, 147)":"palevioletred","rgb(220, 20, 60)":"crimson","rgb(220, 220, 220)":"gainsboro","rgb(221, 160, 221)":"plum","rgb(222, 184, 135)":"burlywood","rgb(224, 255, 255)":"lightcyan","rgb(230, 230, 250)":"lavender","rgb(233, 150, 122)":"darksalmon","rgb(238, 232, 170)":"palegoldenrod","rgb(238, 130, 238)":"violet","rgb(240, 255, 255)":"azure","rgb(240, 255, 240)":"honeydew","rgb(240, 230, 140)":"khaki","rgb(240, 128, 128)":"lightcoral","rgb(244, 164, 96)":"sandybrown","rgb(245, 245, 220)":"beige","rgb(245, 255, 250)":"mintcream","rgb(245, 222, 179)":"wheat","rgb(245, 245, 245)":"whitesmoke","rgb(248, 248, 255)":"ghostwhite","rgb(250, 250, 210)":"lightgoldenrodyellow","rgb(250, 240, 230)":"linen","rgb(250, 128, 114)":"salmon","rgb(253, 245, 230)":"oldlace","rgb(255, 228, 196)":"bisque","rgb(255, 235, 205)":"blanchedalmond","rgb(255, 127, 80)":"coral","rgb(255, 248, 220)":"cornsilk","rgb(255, 140, 0)":"darkorange","rgb(255, 20, 147)":"deeppink","rgb(255, 250, 240)":"floralwhite","rgb(255, 215, 0)":"gold","rgb(255, 105, 180)":"hotpink","rgb(255, 255, 240)":"ivory","rgb(255, 240, 245)":"lavenderblush","rgb(255, 250, 205)":"lemonchiffon","rgb(255, 182, 193)":"lightpink","rgb(255, 160, 122)":"lightsalmon","rgb(255, 255, 224)":"lightyellow","rgb(255, 0, 255)":"magenta","rgb(255, 228, 225)":"mistyrose","rgb(255, 228, 181)":"moccasin","rgb(255, 222, 173)":"navajowhite","rgb(255, 165, 0)":"orange","rgb(255, 69, 0)":"orangered","rgb(255, 239, 213)":"papayawhip","rgb(255, 218, 185)":"peachpuff","rgb(255, 192, 203)":"pink","rgb(255, 0, 0)":"red","rgb(255, 245, 238)":"seashell","rgb(255, 250, 250)":"snow","rgb(255, 99, 71)":"tomato","rgb(255, 255, 255)":"white","rgb(255, 255, 0)":"yellow","rgb(102, 51, 153)":"rebeccapurple"};
var f={aqua:{r:0,g:255,b:255},aliceblue:{r:240,g:248,b:255},antiquewhite:{r:250,g:235,b:215},black:{r:0,g:0,b:0},blue:{r:0,g:0,b:255},cyan:{r:0,g:255,b:255},darkblue:{r:0,g:0,b:139},darkcyan:{r:0,g:139,b:139},darkgreen:{r:0,g:100,b:0},darkturquoise:{r:0,g:206,b:209},deepskyblue:{r:0,g:191,b:255},green:{r:0,g:128,b:0},lime:{r:0,g:255,b:0},mediumblue:{r:0,g:0,b:205},mediumspringgreen:{r:0,g:250,b:154},navy:{r:0,g:0,b:128},springgreen:{r:0,g:255,b:127},teal:{r:0,g:128,b:128},midnightblue:{r:25,g:25,b:112},dodgerblue:{r:30,g:144,b:255},lightseagreen:{r:32,g:178,b:170},forestgreen:{r:34,g:139,b:34},seagreen:{r:46,g:139,b:87},darkslategray:{r:47,g:79,b:79},darkslategrey:{r:47,g:79,b:79},limegreen:{r:50,g:205,b:50},mediumseagreen:{r:60,g:179,b:113},turquoise:{r:64,g:224,b:208},royalblue:{r:65,g:105,b:225},steelblue:{r:70,g:130,b:180},darkslateblue:{r:72,g:61,b:139},mediumturquoise:{r:72,g:209,b:204},indigo:{r:75,g:0,b:130},darkolivegreen:{r:85,g:107,b:47},cadetblue:{r:95,g:158,b:160},cornflowerblue:{r:100,g:149,b:237},mediumaquamarine:{r:102,g:205,b:170},dimgray:{r:105,g:105,b:105},dimgrey:{r:105,g:105,b:105},slateblue:{r:106,g:90,b:205},olivedrab:{r:107,g:142,b:35},slategray:{r:112,g:128,b:144},slategrey:{r:112,g:128,b:144},lightslategray:{r:119,g:136,b:153},lightslategrey:{r:119,g:136,b:153},mediumslateblue:{r:123,g:104,b:238},lawngreen:{r:124,g:252,b:0},aquamarine:{r:127,g:255,b:212},chartreuse:{r:127,g:255,b:0},gray:{r:128,g:128,b:128},grey:{r:128,g:128,b:128},maroon:{r:128,g:0,b:0},olive:{r:128,g:128,b:0},purple:{r:128,g:0,b:128},lightskyblue:{r:135,g:206,b:250},skyblue:{r:135,g:206,b:235},blueviolet:{r:138,g:43,b:226},darkmagenta:{r:139,g:0,b:139},darkred:{r:139,g:0,b:0},saddlebrown:{r:139,g:69,b:19},darkseagreen:{r:143,g:188,b:143},lightgreen:{r:144,g:238,b:144},mediumpurple:{r:147,g:112,b:219},darkviolet:{r:148,g:0,b:211},palegreen:{r:152,g:251,b:152},darkorchid:{r:153,g:50,b:204},yellowgreen:{r:154,g:205,b:50},sienna:{r:160,g:82,b:45},brown:{r:165,g:42,b:42},darkgray:{r:169,g:169,b:169},darkgrey:{r:169,g:169,b:169},greenyellow:{r:173,g:255,b:47},lightblue:{r:173,g:216,b:230},paleturquoise:{r:175,g:238,b:238},lightsteelblue:{r:176,g:196,b:222},powderblue:{r:176,g:224,b:230},firebrick:{r:178,g:34,b:34},darkgoldenrod:{r:184,g:134,b:11},mediumorchid:{r:186,g:85,b:211},rosybrown:{r:188,g:143,b:143},darkkhaki:{r:189,g:183,b:107},silver:{r:192,g:192,b:192},mediumvioletred:{r:199,g:21,b:133},indianred:{r:205,g:92,b:92},peru:{r:205,g:133,b:63},chocolate:{r:210,g:105,b:30},tan:{r:210,g:180,b:140},lightgray:{r:211,g:211,b:211},lightgrey:{r:211,g:211,b:211},thistle:{r:216,g:191,b:216},goldenrod:{r:218,g:165,b:32},orchid:{r:218,g:112,b:214},palevioletred:{r:219,g:112,b:147},crimson:{r:220,g:20,b:60},gainsboro:{r:220,g:220,b:220},plum:{r:221,g:160,b:221},burlywood:{r:222,g:184,b:135},lightcyan:{r:224,g:255,b:255},lavender:{r:230,g:230,b:250},darksalmon:{r:233,g:150,b:122},palegoldenrod:{r:238,g:232,b:170},violet:{r:238,g:130,b:238},azure:{r:240,g:255,b:255},honeydew:{r:240,g:255,b:240},khaki:{r:240,g:230,b:140},lightcoral:{r:240,g:128,b:128},sandybrown:{r:244,g:164,b:96},beige:{r:245,g:245,b:220},mintcream:{r:245,g:255,b:250},wheat:{r:245,g:222,b:179},whitesmoke:{r:245,g:245,b:245},ghostwhite:{r:248,g:248,b:255},lightgoldenrodyellow:{r:250,g:250,b:210},linen:{r:250,g:240,b:230},salmon:{r:250,g:128,b:114},oldlace:{r:253,g:245,b:230},bisque:{r:255,g:228,b:196},blanchedalmond:{r:255,g:235,b:205},coral:{r:255,g:127,b:80},cornsilk:{r:255,g:248,b:220},darkorange:{r:255,g:140,b:0},deeppink:{r:255,g:20,b:147},floralwhite:{r:255,g:250,b:240},fuchsia:{r:255,g:0,b:255},gold:{r:255,g:215,b:0},hotpink:{r:255,g:105,b:180},ivory:{r:255,g:255,b:240},lavenderblush:{r:255,g:240,b:245},lemonchiffon:{r:255,g:250,b:205},lightpink:{r:255,g:182,b:193},lightsalmon:{r:255,g:160,b:122},lightyellow:{r:255,g:255,b:224},magenta:{r:255,g:0,b:255},mistyrose:{r:255,g:228,b:225},moccasin:{r:255,g:228,b:181},navajowhite:{r:255,g:222,b:173},orange:{r:255,g:165,b:0},orangered:{r:255,g:69,b:0},papayawhip:{r:255,g:239,b:213},peachpuff:{r:255,g:218,b:185},pink:{r:255,g:192,b:203},red:{r:255,g:0,b:0},seashell:{r:255,g:245,b:238},snow:{r:255,g:250,b:250},tomato:{r:255,g:99,b:71},white:{r:255,g:255,b:255},yellow:{r:255,g:255,b:0},rebeccapurple:{r:102,g:51,b:153}};
c.exports={rgbToName:d,nameToRgbObject:f}},{}],171:[function(c,d,b){d.exports=function a(f){return"#"+(f).toString(16)
}},{}],172:[function(c,d,a){d.exports=function b(f){return parseInt(f.substr(1),16)
}},{}],173:[function(d,f,c){var a=d("./shortToLongHex");f.exports=function b(h){h=a(h);
var g=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);return g?"rgb("+parseInt(g[1],16)+", "+parseInt(g[2],16)+", "+parseInt(g[3],16)+")":null
}},{"./shortToLongHex":187}],174:[function(c,f,b){var h=c("./isRgb");var g=c("./isRgba");
var a=c("./isHex");f.exports=function d(i){return a(i)||h(i)||g(i)}},{"./isHex":175,"./isRgb":176,"./isRgba":177}],175:[function(c,d,b){d.exports=function a(g){var f=/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
return f.test(g)}},{}],176:[function(b,c,a){c.exports=function d(g){var f=/^rgb\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*\)$/;
return f.exec(g)!==null}},{}],177:[function(b,c,a){c.exports=function d(g){var f=/^rgba\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*(0(\.\d+)?|1(\.0+)?)\s*\)$/;
return f.exec(g)!==null}},{}],178:[function(d,f,c){var b=d("./isHex");var a=d("./hexToRgb");
var h=d("./rgbToObject");f.exports=function g(n,m,l){n=b(n)?a(n):n;m=b(m)?a(m):m;
n=h(n);m=h(m);var k=n.r+((m.r-n.r)*l);var j=n.g+((m.g-n.g)*l);var i=n.b+((m.b-n.b)*l);
return"rgb("+Math.round(k)+", "+Math.round(j)+", "+Math.round(i)+")"}},{"./hexToRgb":173,"./isHex":175,"./rgbToObject":184}],179:[function(b,c,a){var d=b("./rgbToObject");
c.exports=function f(g){var h=d(g);return[h.r,h.g,h.b]}},{"./rgbToObject":184}],180:[function(d,f,b){var c=d("./hexToDecimal");
var h=d("./rgbToArray");var g=d("./rgbToHex");f.exports=function a(i){var j=g.apply(this,h(i));
return c(j)}},{"./hexToDecimal":172,"./rgbToArray":179,"./rgbToHex":181}],181:[function(b,c,a){c.exports=function d(i,h,f){return"#"+((1<<24)+(i<<16)+(h<<8)+f).toString(16).slice(1)
}},{}],182:[function(c,d,b){d.exports=function a(f,m,o){if(arguments.length!==3){return false
}f/=255;m/=255;o/=255;var p=Math.max(f,m,o);var j=Math.min(f,m,o);var n=p+j;var q=p-j;
var k;var t;var i=(n/2);if(p===j){k=t=0}else{t=i>0.5?q/(2-p-j):q/n;switch(p){case f:k=(m-o)/q;
break;case m:k=2+((o-f)/q);break;case o:k=4+((f-m)/q);break}k*=60;if(k<0){k+=360
}}return([k,Math.round(100*t),Math.round(100*i)])}},{}],183:[function(c,d,a){d.exports=function b(f,m,n){if(arguments.length!==3){return false
}var i=f/255;var j=m/255;var p=n/255;var o=Math.max(i,j,p);var k=Math.min(i,j,p);
var l;var u;var t=o;var q=o-k;u=o===0?0:q/o;if(o===k){l=0}else{switch(o){case i:l=(j-p)/q+(j<p?6:0);
break;case j:l=(p-i)/q+2;break;case p:l=(i-j)/q+4;break}l/=6}return[Math.round(360*l),Math.round(100*u),Math.round(100*t)]
}},{}],184:[function(b,c,a){c.exports=function d(g){var h=/rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/;
var f=h.exec(g);return{r:Number(f[1]),g:Number(f[2]),b:Number(f[3])}}},{}],185:[function(b,c,a){var f=b("./rgbaToObject");
c.exports=function d(g){var h=f(g);return[h.r,h.g,h.b,h.a]}},{"./rgbaToObject":186}],186:[function(b,c,a){c.exports=function d(g){var h=/rgba\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0(\.\d+)?|1(\.0+)?)\s*\)/;
var f=h.exec(g);return{r:Number(f[1]),g:Number(f[2]),b:Number(f[3]),a:Number(f[4])}
}},{}],187:[function(c,d,b){d.exports=function a(g){var f=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;
g=g.replace(f,function(i,k,j,h){return"#"+k+k+j+j+h+h});return g}},{}],188:[function(b,c,a){c.exports={createBezier:b("./ac-easing/createBezier"),createPredefined:b("./ac-easing/createPredefined"),createStep:b("./ac-easing/createStep"),Ease:b("./ac-easing/Ease")}
},{"./ac-easing/Ease":189,"./ac-easing/createBezier":190,"./ac-easing/createPredefined":191,"./ac-easing/createStep":192}],189:[function(b,c,a){var g="Ease expects an easing function.";
function f(i,h){if(typeof i!=="function"){throw new TypeError(g)}this.easingFunction=i;
this.cssString=h||null}var d=f.prototype;d.getValue=function(h){return this.easingFunction(h,0,1,1)
};c.exports=f},{}],190:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.every");
var f=b("./Ease");var h=b("./helpers/KeySpline");var d="Bezier curve expects exactly four (4) numbers. Given: ";
c.exports=function g(j,p,i,o){var q=Array.prototype.slice.call(arguments);var m=q.every(function(r){return(typeof r==="number")
});if(q.length!==4||!m){throw new TypeError(d+q)}var n=new h(j,p,i,o);var k=function(t,r,u,s){return n.get(t/s)*u+r
};var l="cubic-bezier("+q.join(", ")+")";return new f(k,l)}},{"./Ease":189,"./helpers/KeySpline":193,"@marcom/ac-polyfills/Array/prototype.every":151}],191:[function(c,a,d){var i=c("./createStep");
var f=c("./helpers/cssAliases");var b=c("./helpers/easingFunctions");var h=c("./Ease");
var g='Easing function "%TYPE%" not recognized among the following: '+Object.keys(b).join(", ");
a.exports=function j(k){var l;if(k==="step-start"){return i(1,"start")}else{if(k==="step-end"){return i(1,"end")
}else{l=b[k]}}if(!l){throw new Error(g.replace("%TYPE%",k))}return new h(l,f[k])
}},{"./Ease":189,"./createStep":192,"./helpers/cssAliases":194,"./helpers/easingFunctions":195}],192:[function(d,f,c){var g=d("./Ease");
var b="Step function expects a numeric value greater than zero. Given: ";var a='Step function direction must be either "start" or "end" (default). Given: ';
f.exports=function h(i,l){l=l||"end";if(typeof i!=="number"||i<1){throw new TypeError(b+i)
}if(l!=="start"&&l!=="end"){throw new TypeError(a+l)}var k=function(q,m,r,p){var o=r/i;
var n=Math[(l==="start")?"floor":"ceil"](q/p*i);return m+o*n};var j="steps("+i+", "+l+")";
return new g(k,j)}},{"./Ease":189}],193:[function(b,c,a){
/*! MIT License
 *
 * KeySpline - use bezier curve for transition easing function
 * Copyright (c) 2012 Gaetan Renaudeau <renaudeau.gaetan@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
function d(o,l,n,j){this.get=function(p){if(o===l&&n===j){return p
}return g(k(p),l,j)};function i(p,q){return 1-3*q+3*p}function h(p,q){return 3*q-6*p
}function f(p){return 3*p}function g(r,p,q){return((i(p,q)*r+h(p,q))*r+f(p))*r}function m(r,p,q){return 3*i(p,q)*r*r+2*h(p,q)*r+f(p)
}function k(s){var q=s;for(var r=0;r<4;++r){var t=m(q,o,n);if(t===0){return q}var p=g(q,o,n)-s;
q-=p/t}return q}}c.exports=d},{}],194:[function(c,d,b){var a={linear:"cubic-bezier(0, 0, 1, 1)",ease:"cubic-bezier(0.25, 0.1, 0.25, 1)","ease-in":"cubic-bezier(0.42, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.58, 1)","ease-in-out":"cubic-bezier(0.42, 0, 0.58, 1)","ease-in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","ease-out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","ease-in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","ease-in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","ease-out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","ease-in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","ease-in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","ease-out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","ease-in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","ease-in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","ease-out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","ease-in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","ease-in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","ease-out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","ease-in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","ease-in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","ease-out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","ease-in-out-expo":"cubic-bezier(1, 0, 0, 1)","ease-in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","ease-out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","ease-in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","ease-in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","ease-in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};
a.easeIn=a["ease-in"];a.easeOut=a["ease-out"];a.easeInOut=a["ease-in-out"];a.easeInCubic=a["ease-in-cubic"];
a.easeOutCubic=a["ease-out-cubic"];a.easeInOutCubic=a["ease-in-out-cubic"];a.easeInQuad=a["ease-in-quad"];
a.easeOutQuad=a["ease-out-quad"];a.easeInOutQuad=a["ease-in-out-quad"];a.easeInQuart=a["ease-in-quart"];
a.easeOutQuart=a["ease-out-quart"];a.easeInOutQuart=a["ease-in-out-quart"];a.easeInQuint=a["ease-in-quint"];
a.easeOutQuint=a["ease-out-quint"];a.easeInOutQuint=a["ease-in-out-quint"];a.easeInSine=a["ease-in-sine"];
a.easeOutSine=a["ease-out-sine"];a.easeInOutSine=a["ease-in-out-sine"];a.easeInExpo=a["ease-in-expo"];
a.easeOutExpo=a["ease-out-expo"];a.easeInOutExpo=a["ease-in-out-expo"];a.easeInCirc=a["ease-in-circ"];
a.easeOutCirc=a["ease-out-circ"];a.easeInOutCirc=a["ease-in-out-circ"];a.easeInBack=a["ease-in-back"];
a.easeOutBack=a["ease-out-back"];a.easeInOutBack=a["ease-in-out-back"];d.exports=a
},{}],195:[function(d,b,F){var J=d("../createBezier");var w=J(0.25,0.1,0.25,1).easingFunction;
var g=J(0.42,0,1,1).easingFunction;var C=J(0,0,0.58,1).easingFunction;var x=J(0.42,0,0.58,1).easingFunction;
var u=function(Q,O,R,P){return R*Q/P+O};var h=function(Q,O,R,P){return R*(Q/=P)*Q+O
};var N=function(Q,O,R,P){return -R*(Q/=P)*(Q-2)+O};var D=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q+O
}return -R/2*((--Q)*(Q-2)-1)+O};var i=function(Q,O,R,P){return R*(Q/=P)*Q*Q+O};
var a=function(Q,O,R,P){return R*((Q=Q/P-1)*Q*Q+1)+O};var j=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q*Q+O
}return R/2*((Q-=2)*Q*Q+2)+O};var o=function(Q,O,R,P){return R*(Q/=P)*Q*Q*Q+O};
var m=function(Q,O,R,P){return -R*((Q=Q/P-1)*Q*Q*Q-1)+O};var p=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q*Q*Q+O
}return -R/2*((Q-=2)*Q*Q*Q-2)+O};var y=function(Q,O,R,P){return R*(Q/=P)*Q*Q*Q*Q+O
};var v=function(Q,O,R,P){return R*((Q=Q/P-1)*Q*Q*Q*Q+1)+O};var z=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q*Q*Q*Q+O
}return R/2*((Q-=2)*Q*Q*Q*Q+2)+O};var c=function(Q,O,R,P){return -R*Math.cos(Q/P*(Math.PI/2))+R+O
};var L=function(Q,O,R,P){return R*Math.sin(Q/P*(Math.PI/2))+O};var B=function(Q,O,R,P){return -R/2*(Math.cos(Math.PI*Q/P)-1)+O
};var G=function(Q,O,R,P){return(Q===0)?O:R*Math.pow(2,10*(Q/P-1))+O};var A=function(Q,O,R,P){return(Q===P)?O+R:R*(-Math.pow(2,-10*Q/P)+1)+O
};var r=function(Q,O,R,P){if(Q===0){return O}else{if(Q===P){return O+R}else{if((Q/=P/2)<1){return R/2*Math.pow(2,10*(Q-1))+O
}}}return R/2*(-Math.pow(2,-10*--Q)+2)+O};var l=function(Q,O,R,P){return -R*(Math.sqrt(1-(Q/=P)*Q)-1)+O
};var f=function(Q,O,R,P){return R*Math.sqrt(1-(Q=Q/P-1)*Q)+O};var I=function(Q,O,R,P){if((Q/=P/2)<1){return -R/2*(Math.sqrt(1-Q*Q)-1)+O
}return R/2*(Math.sqrt(1-(Q-=2)*Q)+1)+O};var E=function(S,Q,U,R){var O=1.70158;
var T=0;var P=U;if(S===0){return Q}else{if((S/=R)===1){return Q+U}}if(!T){T=R*0.3
}if(P<Math.abs(U)){P=U;O=T/4}else{O=T/(2*Math.PI)*Math.asin(U/P)}return -(P*Math.pow(2,10*(S-=1))*Math.sin((S*R-O)*(2*Math.PI)/T))+Q
};var H=function(S,Q,U,R){var O=1.70158;var T=0;var P=U;if(S===0){return Q}else{if((S/=R)===1){return Q+U
}}if(!T){T=R*0.3}if(P<Math.abs(U)){P=U;O=T/4}else{O=T/(2*Math.PI)*Math.asin(U/P)
}return P*Math.pow(2,-10*S)*Math.sin((S*R-O)*(2*Math.PI)/T)+U+Q};var t=function(S,Q,U,R){var O=1.70158;
var T=0;var P=U;if(S===0){return Q}else{if((S/=R/2)===2){return Q+U}}if(!T){T=R*(0.3*1.5)
}if(P<Math.abs(U)){P=U;O=T/4}else{O=T/(2*Math.PI)*Math.asin(U/P)}if(S<1){return -0.5*(P*Math.pow(2,10*(S-=1))*Math.sin((S*R-O)*(2*Math.PI)/T))+Q
}return P*Math.pow(2,-10*(S-=1))*Math.sin((S*R-O)*(2*Math.PI)/T)*0.5+U+Q};var s=function(R,P,S,Q,O){if(O===undefined){O=1.70158
}return S*(R/=Q)*R*((O+1)*R-O)+P};var q=function(R,P,S,Q,O){if(O===undefined){O=1.70158
}return S*((R=R/Q-1)*R*((O+1)*R+O)+1)+P};var k=function(R,P,S,Q,O){if(O===undefined){O=1.70158
}if((R/=Q/2)<1){return S/2*(R*R*(((O*=(1.525))+1)*R-O))+P}return S/2*((R-=2)*R*(((O*=(1.525))+1)*R+O)+2)+P
};var K=function(Q,O,R,P){if((Q/=P)<(1/2.75)){return R*(7.5625*Q*Q)+O}else{if(Q<(2/2.75)){return R*(7.5625*(Q-=(1.5/2.75))*Q+0.75)+O
}else{if(Q<(2.5/2.75)){return R*(7.5625*(Q-=(2.25/2.75))*Q+0.9375)+O}}}return R*(7.5625*(Q-=(2.625/2.75))*Q+0.984375)+O
};var n=function(Q,O,R,P){return R-K(P-Q,0,R,P)+O};var M=function(Q,O,R,P){if(Q<P/2){return n(Q*2,0,R,P)*0.5+O
}return K(Q*2-P,0,R,P)*0.5+R*0.5+O};b.exports={linear:u,ease:w,easeIn:g,"ease-in":g,easeOut:C,"ease-out":C,easeInOut:x,"ease-in-out":x,easeInCubic:i,"ease-in-cubic":i,easeOutCubic:a,"ease-out-cubic":a,easeInOutCubic:j,"ease-in-out-cubic":j,easeInQuad:h,"ease-in-quad":h,easeOutQuad:N,"ease-out-quad":N,easeInOutQuad:D,"ease-in-out-quad":D,easeInQuart:o,"ease-in-quart":o,easeOutQuart:m,"ease-out-quart":m,easeInOutQuart:p,"ease-in-out-quart":p,easeInQuint:y,"ease-in-quint":y,easeOutQuint:v,"ease-out-quint":v,easeInOutQuint:z,"ease-in-out-quint":z,easeInSine:c,"ease-in-sine":c,easeOutSine:L,"ease-out-sine":L,easeInOutSine:B,"ease-in-out-sine":B,easeInExpo:G,"ease-in-expo":G,easeOutExpo:A,"ease-out-expo":A,easeInOutExpo:r,"ease-in-out-expo":r,easeInCirc:l,"ease-in-circ":l,easeOutCirc:f,"ease-out-circ":f,easeInOutCirc:I,"ease-in-out-circ":I,easeInBack:s,"ease-in-back":s,easeOutBack:q,"ease-out-back":q,easeInOutBack:k,"ease-in-out-back":k,easeInElastic:E,"ease-in-elastic":E,easeOutElastic:H,"ease-out-elastic":H,easeInOutElastic:t,"ease-in-out-elastic":t,easeInBounce:n,"ease-in-bounce":n,easeOutBounce:K,"ease-out-bounce":K,easeInOutBounce:M,"ease-in-out-bounce":M}
},{"../createBezier":190}],196:[function(b,c,a){c.exports=d;function d(f){var g=new Float32Array(16);
g[0]=f[0];g[1]=f[1];g[2]=f[2];g[3]=f[3];g[4]=f[4];g[5]=f[5];g[6]=f[6];g[7]=f[7];
g[8]=f[8];g[9]=f[9];g[10]=f[10];g[11]=f[11];g[12]=f[12];g[13]=f[13];g[14]=f[14];
g[15]=f[15];return g}},{}],197:[function(b,d,a){d.exports=c;function c(){var f=new Float32Array(16);
f[0]=1;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=1;f[6]=0;f[7]=0;f[8]=0;f[9]=0;f[10]=1;f[11]=0;
f[12]=0;f[13]=0;f[14]=0;f[15]=1;return f}},{}],198:[function(b,c,a){c.exports=d;
function d(t,r,o){var l=r[0],k=r[1],j=r[2],m=r[3],u=l+l,f=k+k,n=j+j,i=l*u,h=l*f,g=l*n,s=k*f,p=k*n,C=j*n,D=m*u,B=m*f,A=m*n;
t[0]=1-(s+C);t[1]=h+A;t[2]=g-B;t[3]=0;t[4]=h-A;t[5]=1-(i+C);t[6]=p+D;t[7]=0;t[8]=g+B;
t[9]=p-D;t[10]=1-(i+s);t[11]=0;t[12]=o[0];t[13]=o[1];t[14]=o[2];t[15]=1;return t
}},{}],199:[function(c,d,b){d.exports=a;function a(f){f[0]=1;f[1]=0;f[2]=0;f[3]=0;
f[4]=0;f[5]=1;f[6]=0;f[7]=0;f[8]=0;f[9]=0;f[10]=1;f[11]=0;f[12]=0;f[13]=0;f[14]=0;
f[15]=1;return f}},{}],200:[function(b,c,a){c.exports=d;function d(y,D){var H=D[0],F=D[1],E=D[2],B=D[3],j=D[4],i=D[5],h=D[6],g=D[7],x=D[8],w=D[9],v=D[10],u=D[11],J=D[12],I=D[13],G=D[14],C=D[15],t=H*i-F*j,s=H*h-E*j,r=H*g-B*j,q=F*h-E*i,p=F*g-B*i,o=E*g-B*h,n=x*I-w*J,m=x*G-v*J,l=x*C-u*J,k=w*G-v*I,A=w*C-u*I,z=v*C-u*G,f=t*z-s*A+r*k+q*l-p*m+o*n;
if(!f){return null}f=1/f;y[0]=(i*z-h*A+g*k)*f;y[1]=(E*A-F*z-B*k)*f;y[2]=(I*o-G*p+C*q)*f;
y[3]=(v*p-w*o-u*q)*f;y[4]=(h*l-j*z-g*m)*f;y[5]=(H*z-E*l+B*m)*f;y[6]=(G*r-J*o-C*s)*f;
y[7]=(x*o-v*r+u*s)*f;y[8]=(j*A-i*l+g*n)*f;y[9]=(F*l-H*A-B*n)*f;y[10]=(J*p-I*r+C*t)*f;
y[11]=(w*r-x*p-u*t)*f;y[12]=(i*m-j*k-h*n)*f;y[13]=(H*k-F*m+E*n)*f;y[14]=(I*s-J*q-G*t)*f;
y[15]=(x*q-w*s+v*t)*f;return y}},{}],201:[function(c,d,b){d.exports=a;function a(r,v,s){var z=v[0],y=v[1],w=v[2],t=v[3],l=v[4],j=v[5],h=v[6],f=v[7],q=v[8],p=v[9],o=v[10],n=v[11],B=v[12],A=v[13],x=v[14],u=v[15];
var m=s[0],k=s[1],i=s[2],g=s[3];r[0]=m*z+k*l+i*q+g*B;r[1]=m*y+k*j+i*p+g*A;r[2]=m*w+k*h+i*o+g*x;
r[3]=m*t+k*f+i*n+g*u;m=s[4];k=s[5];i=s[6];g=s[7];r[4]=m*z+k*l+i*q+g*B;r[5]=m*y+k*j+i*p+g*A;
r[6]=m*w+k*h+i*o+g*x;r[7]=m*t+k*f+i*n+g*u;m=s[8];k=s[9];i=s[10];g=s[11];r[8]=m*z+k*l+i*q+g*B;
r[9]=m*y+k*j+i*p+g*A;r[10]=m*w+k*h+i*o+g*x;r[11]=m*t+k*f+i*n+g*u;m=s[12];k=s[13];
i=s[14];g=s[15];r[12]=m*z+k*l+i*q+g*B;r[13]=m*y+k*j+i*p+g*A;r[14]=m*w+k*h+i*o+g*x;
r[15]=m*t+k*f+i*n+g*u;return r}},{}],202:[function(c,d,a){d.exports=b;function b(E,L,N,f){var p=f[0],o=f[1],n=f[2],F=Math.sqrt(p*p+o*o+n*n),w,J,v,P,O,M,K,m,l,k,j,D,C,B,A,u,r,q,I,H,G,i,h,g;
if(Math.abs(F)<0.000001){return null}F=1/F;p*=F;o*=F;n*=F;w=Math.sin(N);J=Math.cos(N);
v=1-J;P=L[0];O=L[1];M=L[2];K=L[3];m=L[4];l=L[5];k=L[6];j=L[7];D=L[8];C=L[9];B=L[10];
A=L[11];u=p*p*v+J;r=o*p*v+n*w;q=n*p*v-o*w;I=p*o*v-n*w;H=o*o*v+J;G=n*o*v+p*w;i=p*n*v+o*w;
h=o*n*v-p*w;g=n*n*v+J;E[0]=P*u+m*r+D*q;E[1]=O*u+l*r+C*q;E[2]=M*u+k*r+B*q;E[3]=K*u+j*r+A*q;
E[4]=P*I+m*H+D*G;E[5]=O*I+l*H+C*G;E[6]=M*I+k*H+B*G;E[7]=K*I+j*H+A*G;E[8]=P*i+m*h+D*g;
E[9]=O*i+l*h+C*g;E[10]=M*i+k*h+B*g;E[11]=K*i+j*h+A*g;if(L!==E){E[12]=L[12];E[13]=L[13];
E[14]=L[14];E[15]=L[15]}return E}},{}],203:[function(c,d,a){d.exports=b;function b(f,m,l){var r=Math.sin(l),k=Math.cos(l),q=m[4],p=m[5],o=m[6],n=m[7],j=m[8],i=m[9],h=m[10],g=m[11];
if(m!==f){f[0]=m[0];f[1]=m[1];f[2]=m[2];f[3]=m[3];f[12]=m[12];f[13]=m[13];f[14]=m[14];
f[15]=m[15]}f[4]=q*k+j*r;f[5]=p*k+i*r;f[6]=o*k+h*r;f[7]=n*k+g*r;f[8]=j*k-q*r;f[9]=i*k-p*r;
f[10]=h*k-o*r;f[11]=g*k-n*r;return f}},{}],204:[function(c,d,b){d.exports=a;function a(j,q,p){var r=Math.sin(p),o=Math.cos(p),i=q[0],h=q[1],g=q[2],f=q[3],n=q[8],m=q[9],l=q[10],k=q[11];
if(q!==j){j[4]=q[4];j[5]=q[5];j[6]=q[6];j[7]=q[7];j[12]=q[12];j[13]=q[13];j[14]=q[14];
j[15]=q[15]}j[0]=i*o-n*r;j[1]=h*o-m*r;j[2]=g*o-l*r;j[3]=f*o-k*r;j[8]=i*r+n*o;j[9]=h*r+m*o;
j[10]=g*r+l*o;j[11]=f*r+k*o;return j}},{}],205:[function(c,d,b){d.exports=a;function a(j,m,l){var r=Math.sin(l),k=Math.cos(l),i=m[0],h=m[1],g=m[2],f=m[3],q=m[4],p=m[5],o=m[6],n=m[7];
if(m!==j){j[8]=m[8];j[9]=m[9];j[10]=m[10];j[11]=m[11];j[12]=m[12];j[13]=m[13];j[14]=m[14];
j[15]=m[15]}j[0]=i*k+q*r;j[1]=h*k+p*r;j[2]=g*k+o*r;j[3]=f*k+n*r;j[4]=q*k-i*r;j[5]=p*k-h*r;
j[6]=o*k-g*r;j[7]=n*k-f*r;return j}},{}],206:[function(b,c,a){c.exports=d;function d(i,g,h){var f=h[0],k=h[1],j=h[2];
i[0]=g[0]*f;i[1]=g[1]*f;i[2]=g[2]*f;i[3]=g[3]*f;i[4]=g[4]*k;i[5]=g[5]*k;i[6]=g[6]*k;
i[7]=g[7]*k;i[8]=g[8]*j;i[9]=g[9]*j;i[10]=g[10]*j;i[11]=g[11]*j;i[12]=g[12];i[13]=g[13];
i[14]=g[14];i[15]=g[15];return i}},{}],207:[function(b,c,a){c.exports=d;function d(r,t,m){var l=m[0],k=m[1],j=m[2],A,w,u,s,i,h,g,f,q,p,o,n;
if(t===r){r[12]=t[0]*l+t[4]*k+t[8]*j+t[12];r[13]=t[1]*l+t[5]*k+t[9]*j+t[13];r[14]=t[2]*l+t[6]*k+t[10]*j+t[14];
r[15]=t[3]*l+t[7]*k+t[11]*j+t[15]}else{A=t[0];w=t[1];u=t[2];s=t[3];i=t[4];h=t[5];
g=t[6];f=t[7];q=t[8];p=t[9];o=t[10];n=t[11];r[0]=A;r[1]=w;r[2]=u;r[3]=s;r[4]=i;
r[5]=h;r[6]=g;r[7]=f;r[8]=q;r[9]=p;r[10]=o;r[11]=n;r[12]=A*l+i*k+q*j+t[12];r[13]=w*l+h*k+p*j+t[13];
r[14]=u*l+g*k+o*j+t[14];r[15]=s*l+f*k+n*j+t[15]}return r}},{}],208:[function(b,c,a){c.exports=d;
function d(i,h){if(i===h){var m=h[1],k=h[2],j=h[3],f=h[6],l=h[7],g=h[11];i[1]=h[4];
i[2]=h[8];i[3]=h[12];i[4]=m;i[6]=h[9];i[7]=h[13];i[8]=k;i[9]=f;i[11]=h[14];i[12]=j;
i[13]=l;i[14]=g}else{i[0]=h[0];i[1]=h[4];i[2]=h[8];i[3]=h[12];i[4]=h[1];i[5]=h[5];
i[6]=h[9];i[7]=h[13];i[8]=h[2];i[9]=h[6];i[10]=h[10];i[11]=h[14];i[12]=h[3];i[13]=h[7];
i[14]=h[11];i[15]=h[15]}return i}},{}],209:[function(b,d,a){d.exports=c;function c(){var f=new Float32Array(3);
f[0]=0;f[1]=0;f[2]=0;return f}},{}],210:[function(b,c,a){c.exports=d;function d(g,l,k){var f=l[0],n=l[1],m=l[2],j=k[0],i=k[1],h=k[2];
g[0]=n*h-m*i;g[1]=m*j-f*h;g[2]=f*i-n*j;return g}},{}],211:[function(c,d,b){d.exports=a;
function a(g,f){return g[0]*f[0]+g[1]*f[1]+g[2]*f[2]}},{}],212:[function(b,c,a){c.exports=d;
function d(f,i,h){var g=new Float32Array(3);g[0]=f;g[1]=i;g[2]=h;return g}},{}],213:[function(b,c,a){c.exports=d;
function d(g){var f=g[0],i=g[1],h=g[2];return Math.sqrt(f*f+i*i+h*h)}},{}],214:[function(c,d,b){d.exports=a;
function a(i,h){var g=h[0],k=h[1],j=h[2];var f=g*g+k*k+j*j;if(f>0){f=1/Math.sqrt(f);
i[0]=h[0]*f;i[1]=h[1]*f;i[2]=h[2]*f}return i}},{}],215:[function(b,d,a){d.exports=c;
function c(){var f=new Float32Array(4);f[0]=0;f[1]=0;f[2]=0;f[3]=0;return f}},{}],216:[function(b,c,a){c.exports=d;
function d(f,j,i,g){var h=new Float32Array(4);h[0]=f;h[1]=j;h[2]=i;h[3]=g;return h
}},{}],217:[function(b,d,a){d.exports=c;function c(j,i,g){var f=i[0],l=i[1],k=i[2],h=i[3];
j[0]=g[0]*f+g[4]*l+g[8]*k+g[12]*h;j[1]=g[1]*f+g[5]*l+g[9]*k+g[13]*h;j[2]=g[2]*f+g[6]*l+g[10]*k+g[14]*h;
j[3]=g[3]*f+g[7]*l+g[11]*k+g[15]*h;return j}},{}],218:[function(b,c,a){c.exports={Transform:b("./ac-transform/Transform")}
},{"./ac-transform/Transform":219}],219:[function(l,d,H){var k=l("./gl-matrix/mat4");
var b=l("./gl-matrix/vec3");var a=l("./gl-matrix/vec4");var f=Math.PI/180;var c=180/Math.PI;
var F=0,y=0,D=1,x=1,B=2,z=3;var j=4,w=4,i=5,v=5,h=6,g=7;var t=8,q=9,o=10,n=11;var G=12,u=12,E=13,s=13,C=14,A=15;
function p(){this.m=k.create()}var r=p.prototype;r.rotateX=function(J){var I=f*J;
k.rotateX(this.m,this.m,I);return this};r.rotateY=function(J){var I=f*J;k.rotateY(this.m,this.m,I);
return this};r.rotateZ=function(J){var I=f*J;k.rotateZ(this.m,this.m,I);return this
};r.rotate=r.rotateZ;r.rotate3d=function(J,M,L,K){if(M===null||M===undefined){M=J
}if(L===null||M===undefined){L=J}var I=f*K;k.rotate(this.m,this.m,I,[J,M,L]);return this
};r.rotateAxisAngle=r.rotate3d;r.scale=function(J,I){I=I||J;k.scale(this.m,this.m,[J,I,1]);
return this};r.scaleX=function(I){k.scale(this.m,this.m,[I,1,1]);return this};r.scaleY=function(I){k.scale(this.m,this.m,[1,I,1]);
return this};r.scaleZ=function(I){k.scale(this.m,this.m,[1,1,I]);return this};r.scale3d=function(K,J,I){k.scale(this.m,this.m,[K,J,I]);
return this};r.skew=function(K,J){if(J===null||J===undefined){return this.skewX(K)
}K=f*K;J=f*J;var I=k.create();I[w]=Math.tan(K);I[x]=Math.tan(J);k.multiply(this.m,this.m,I);
return this};r.skewX=function(J){J=f*J;var I=k.create();I[w]=Math.tan(J);k.multiply(this.m,this.m,I);
return this};r.skewY=function(J){J=f*J;var I=k.create();I[x]=Math.tan(J);k.multiply(this.m,this.m,I);
return this};r.translate=function(J,I){I=I||0;k.translate(this.m,this.m,[J,I,0]);
return this};r.translate3d=function(J,I,K){k.translate(this.m,this.m,[J,I,K]);return this
};r.translateX=function(I){k.translate(this.m,this.m,[I,0,0]);return this};r.translateY=function(I){k.translate(this.m,this.m,[0,I,0]);
return this};r.translateZ=function(I){k.translate(this.m,this.m,[0,0,I]);return this
};r.perspective=function(J){var I=k.create();if(J!==0){I[n]=-1/J}k.multiply(this.m,this.m,I)
};r.inverse=function(){var I=this.clone();I.m=k.invert(I.m,this.m);return I};r.reset=function(){k.identity(this.m);
return this};r.getTranslateXY=function(){var I=this.m;if(this.isAffine()){return[I[u],I[s]]
}return[I[G],I[E]]};r.getTranslateXYZ=function(){var I=this.m;if(this.isAffine()){return[I[u],I[s],0]
}return[I[G],I[E],I[C]]};r.getTranslateX=function(){var I=this.m;if(this.isAffine()){return I[u]
}return I[G]};r.getTranslateY=function(){var I=this.m;if(this.isAffine()){return I[s]
}return I[E]};r.getTranslateZ=function(){var I=this.m;if(this.isAffine()){return 0
}return I[C]};r.clone=function(){var I=new p();I.m=k.clone(this.m);return I};r.toArray=function(){var I=this.m;
if(this.isAffine()){return[I[y],I[x],I[w],I[v],I[u],I[s]]}return[I[F],I[D],I[B],I[z],I[j],I[i],I[h],I[g],I[t],I[q],I[o],I[n],I[G],I[E],I[C],I[A]]
};r.fromArray=function(I){this.m=Array.prototype.slice.call(I);return this};r.setMatrixValue=function(J){J=String(J).trim();
var I=k.create();if(J==="none"){this.m=I;return this}var L=J.slice(0,J.indexOf("(")),M,K;
if(L==="matrix3d"){M=J.slice(9,-1).split(",");for(K=0;K<M.length;K++){I[K]=parseFloat(M[K])
}}else{if(L==="matrix"){M=J.slice(7,-1).split(",");for(K=M.length;K--;){M[K]=parseFloat(M[K])
}I[F]=M[0];I[D]=M[1];I[G]=M[4];I[j]=M[2];I[i]=M[3];I[E]=M[5]}else{throw new TypeError("Invalid Matrix Value")
}}this.m=I;return this};var m=function(I){return Math.abs(I)<0.0001};r.decompose=function(T){T=T||false;
var X=k.clone(this.m);var O=b.create();var ad=b.create();var L=b.create();var Q=a.create();
var J=a.create();var K=b.create();for(var Z=0;Z<16;Z++){X[Z]/=X[A]}var V=k.clone(X);
V[z]=0;V[g]=0;V[n]=0;V[A]=1;var aa=X[3],M=X[7],P=X[11],af=X[12],ae=X[13],ac=X[14],ab=X[15];
var S=a.create();if(!m(X[z])||!m(X[g])||!m(X[n])){S[0]=X[z];S[1]=X[g];S[2]=X[n];
S[3]=X[A];var Y=k.invert(k.create(),V);var R=k.transpose(k.create(),Y);Q=a.transformMat4(Q,S,R)
}else{Q=a.fromValues(0,0,0,1)}O[0]=af;O[1]=ae;O[2]=ac;var N=[b.create(),b.create(),b.create()];
N[0][0]=X[0];N[0][1]=X[1];N[0][2]=X[2];N[1][0]=X[4];N[1][1]=X[5];N[1][2]=X[6];N[2][0]=X[8];
N[2][1]=X[9];N[2][2]=X[10];ad[0]=b.length(N[0]);b.normalize(N[0],N[0]);L[0]=b.dot(N[0],N[1]);
N[1]=this._combine(N[1],N[0],1,-L[0]);ad[1]=b.length(N[1]);b.normalize(N[1],N[1]);
L[0]/=ad[1];L[1]=b.dot(N[0],N[2]);N[2]=this._combine(N[2],N[0],1,-L[1]);L[2]=b.dot(N[1],N[2]);
N[2]=this._combine(N[2],N[1],1,-L[2]);ad[2]=b.length(N[2]);b.normalize(N[2],N[2]);
L[1]/=ad[2];L[2]/=ad[2];var W=b.cross(b.create(),N[1],N[2]);if(b.dot(N[0],W)<0){for(Z=0;
Z<3;Z++){ad[Z]*=-1;N[Z][0]*=-1;N[Z][1]*=-1;N[Z][2]*=-1}}J[0]=0.5*Math.sqrt(Math.max(1+N[0][0]-N[1][1]-N[2][2],0));
J[1]=0.5*Math.sqrt(Math.max(1-N[0][0]+N[1][1]-N[2][2],0));J[2]=0.5*Math.sqrt(Math.max(1-N[0][0]-N[1][1]+N[2][2],0));
J[3]=0.5*Math.sqrt(Math.max(1+N[0][0]+N[1][1]+N[2][2],0));if(N[2][1]>N[1][2]){J[0]=-J[0]
}if(N[0][2]>N[2][0]){J[1]=-J[1]}if(N[1][0]>N[0][1]){J[2]=-J[2]}var I=a.fromValues(J[0],J[1],J[2],2*Math.acos(J[3]));
var U=this._rotationFromQuat(J);if(T){L[0]=Math.round(L[0]*c*100)/100;L[1]=Math.round(L[1]*c*100)/100;
L[2]=Math.round(L[2]*c*100)/100;U[0]=Math.round(U[0]*c*100)/100;U[1]=Math.round(U[1]*c*100)/100;
U[2]=Math.round(U[2]*c*100)/100;I[3]=Math.round(I[3]*c*100)/100}return{translation:O,scale:ad,skew:L,perspective:Q,quaternion:J,eulerRotation:U,axisAngle:I}
};r.recompose=function(O,N,K,L,M){O=O||b.create();N=N||b.create();K=K||b.create();
L=L||a.create();M=M||a.create();var J=k.fromRotationTranslation(k.create(),M,O);
J[z]=L[0];J[g]=L[1];J[n]=L[2];J[A]=L[3];var I=k.create();if(K[2]!==0){I[q]=K[2];
k.multiply(J,J,I)}if(K[1]!==0){I[q]=0;I[t]=K[1];k.multiply(J,J,I)}if(K[0]){I[t]=0;
I[4]=K[0];k.multiply(J,J,I)}k.scale(J,J,N);this.m=J;return this};r.isAffine=function(){return(this.m[B]===0&&this.m[z]===0&&this.m[h]===0&&this.m[g]===0&&this.m[t]===0&&this.m[q]===0&&this.m[o]===1&&this.m[n]===0&&this.m[C]===0&&this.m[A]===1)
};r.toString=function(){var I=this.m;if(this.isAffine()){return"matrix("+I[y]+", "+I[x]+", "+I[w]+", "+I[v]+", "+I[u]+", "+I[s]+")"
}return"matrix3d("+I[F]+", "+I[D]+", "+I[B]+", "+I[z]+", "+I[j]+", "+I[i]+", "+I[h]+", "+I[g]+", "+I[t]+", "+I[q]+", "+I[o]+", "+I[n]+", "+I[G]+", "+I[E]+", "+I[C]+", "+I[A]+")"
};r.toCSSString=r.toString;r._combine=function(J,M,L,K){var I=b.create();I[0]=(L*J[0])+(K*M[0]);
I[1]=(L*J[1])+(K*M[1]);I[2]=(L*J[2])+(K*M[2]);return I};r._matrix2dToMat4=function(I){var K=k.create();
for(var L=0;L<4;L++){for(var J=0;J<4;J++){K[L*4+J]=I[L][J]}}return K};r._mat4ToMatrix2d=function(L){var I=[];
for(var K=0;K<4;K++){I[K]=[];for(var J=0;J<4;J++){I[K][J]=L[K*4+J]}}return I};r._rotationFromQuat=function(I){var M=I[3]*I[3];
var L=I[0]*I[0];var K=I[1]*I[1];var J=I[2]*I[2];var R=L+K+J+M;var N=I[0]*I[1]+I[2]*I[3];
var Q,P,O;if(N>0.499*R){P=2*Math.atan2(I[0],I[3]);O=Math.PI/2;Q=0;return b.fromValues(Q,P,O)
}if(N<-0.499*R){P=-2*Math.atan2(I[0],I[3]);O=-Math.PI/2;Q=0;return b.fromValues(Q,P,O)
}P=Math.atan2(2*I[1]*I[3]-2*I[0]*I[2],L-K-J+M);O=Math.asin(2*N/R);Q=Math.atan2(2*I[0]*I[3]-2*I[1]*I[2],-L+K-J+M);
return b.fromValues(Q,P,O)};d.exports=p},{"./gl-matrix/mat4":220,"./gl-matrix/vec3":221,"./gl-matrix/vec4":222}],220:[function(c,d,a){var b={create:c("gl-mat4/create"),rotate:c("gl-mat4/rotate"),rotateX:c("gl-mat4/rotateX"),rotateY:c("gl-mat4/rotateY"),rotateZ:c("gl-mat4/rotateZ"),scale:c("gl-mat4/scale"),multiply:c("gl-mat4/multiply"),translate:c("gl-mat4/translate"),invert:c("gl-mat4/invert"),clone:c("gl-mat4/clone"),transpose:c("gl-mat4/transpose"),identity:c("gl-mat4/identity"),fromRotationTranslation:c("gl-mat4/fromRotationTranslation")};
d.exports=b},{"gl-mat4/clone":196,"gl-mat4/create":197,"gl-mat4/fromRotationTranslation":198,"gl-mat4/identity":199,"gl-mat4/invert":200,"gl-mat4/multiply":201,"gl-mat4/rotate":202,"gl-mat4/rotateX":203,"gl-mat4/rotateY":204,"gl-mat4/rotateZ":205,"gl-mat4/scale":206,"gl-mat4/translate":207,"gl-mat4/transpose":208}],221:[function(b,d,a){var c={create:b("gl-vec3/create"),dot:b("gl-vec3/dot"),normalize:b("gl-vec3/normalize"),length:b("gl-vec3/length"),cross:b("gl-vec3/cross"),fromValues:b("gl-vec3/fromValues")};
d.exports=c},{"gl-vec3/create":209,"gl-vec3/cross":210,"gl-vec3/dot":211,"gl-vec3/fromValues":212,"gl-vec3/length":213,"gl-vec3/normalize":214}],222:[function(c,d,a){var b={create:c("gl-vec4/create"),transformMat4:c("gl-vec4/transformMat4"),fromValues:c("gl-vec4/fromValues")};
d.exports=b},{"gl-vec4/create":215,"gl-vec4/fromValues":216,"gl-vec4/transformMat4":217}],223:[function(b,c,a){c.exports={Clip:b("./ac-eclipse/ClipFactory"),Timeline:b("./ac-eclipse/Timeline")}
},{"./ac-eclipse/ClipFactory":224,"./ac-eclipse/Timeline":225}],224:[function(g,d,h){g("./helpers/Float32Array");
var c=g("./helpers/transitionEnd");var i=g("@marcom/ac-clip").Clip;var k=g("./clips/ClipEasing");
var f=g("./clips/ClipInlineCss");var j=g("./clips/ClipTransitionCss");function b(n,m,o,l){if(n.nodeType){if(c===undefined||(l&&l.inlineStyles)){return new f(n,m,o,l)
}return new j(n,m,o,l)}return new k(n,m,o,l)}for(var a in i){if(typeof i[a]==="function"&&a.substr(0,1)!=="_"){b[a]=i[a].bind(i)
}}b.to=function(n,m,o,l){l=l||{};if(l.destroyOnComplete===undefined){l.destroyOnComplete=true
}return new b(n,m,o,l).play()};b.from=function(o,n,l,m){m=m||{};m.propsFrom=l;if(m.destroyOnComplete===undefined){m.destroyOnComplete=true
}return new b(o,n,m.propsTo,m).play()};d.exports=b},{"./clips/ClipEasing":226,"./clips/ClipInlineCss":227,"./clips/ClipTransitionCss":228,"./helpers/Float32Array":231,"./helpers/transitionEnd":240,"@marcom/ac-clip":166}],225:[function(c,f,a){var d=c("@marcom/ac-object").create;
var b=c("@marcom/ac-clip").Clip;function h(i){i=i||{}}var g=h.prototype=d(b.prototype);
f.exports=h},{"@marcom/ac-clip":166,"@marcom/ac-object":142}],226:[function(b,a,c){var l=b("@marcom/ac-object").clone;
var g=b("@marcom/ac-object").create;var o=b("@marcom/ac-easing").createPredefined;
var m=b("../helpers/isCssCubicBezierString");var f=b("../helpers/BezierCurveCssManager");
var i=b("@marcom/ac-clip").Clip;var k=b("@marcom/ac-easing").Ease;var j="ease";
function n(r,q,s,p){if(p&&m(p.ease)){p.ease=f.create(p.ease).toEasingFunction()
}p=p||{};this._propsEase=p.propsEase||{};i.call(this,r,q,s,p)}var h=i.prototype;
var d=n.prototype=g(h);d.reset=function(){var q=h.reset.call(this);if(this._clips){var p=this._clips.length;
while(p--){this._clips[p].reset()}}return q};d.destroy=function(){if(this._clips){var p=this._clips.length;
while(p--){this._clips[p].destroy()}this._clips=null}this._eases=null;this._storeOnUpdate=null;
return h.destroy.call(this)};d._prepareProperties=function(){var p=0;var s={};var q={};
var t={};var w,v;if(this._propsEase){for(w in this._propsTo){if(this._propsTo.hasOwnProperty(w)){v=this._propsEase[w];
if(m(v)){v=f.create(v).toEasingFunction()}if(v===undefined){if(s[this._ease]===undefined){s[this._ease]={};
q[this._ease]={};t[this._ease]=this._ease.easingFunction;p++}s[this._ease][w]=this._propsTo[w];
q[this._ease][w]=this._propsFrom[w]}else{if(typeof v==="function"){s[p]={};q[p]={};
s[p][w]=this._propsTo[w];q[p][w]=this._propsFrom[w];t[p]=v;p++}else{if(s[v]===undefined){s[v]={};
q[v]={};t[v]=v;p++}s[v][w]=this._propsTo[w];q[v][w]=this._propsFrom[w]}}}}if(p>1){var r=l(this._options||{},true);
var u=this._duration*0.001;this._storeOnUpdate=this._onUpdate;this._onUpdate=this._onUpdateClips;
r.onStart=null;r.onUpdate=null;r.onDraw=null;r.onComplete=null;this._clips=[];for(v in s){if(s.hasOwnProperty(v)){r.ease=t[v];
r.propsFrom=q[v];this._clips.push(new i(this._target,u,s[v],r))}}v="linear";this._propsTo={};
this._propsFrom={}}else{for(w in t){if(t.hasOwnProperty(w)){v=t[w]}}}if(v!==undefined){this._ease=(typeof v==="function")?new k(v):o(v)
}}return h._prepareProperties.call(this)};d._onUpdateClips=function(r){var p=(this._direction===1)?r.progress():1-r.progress();
var q=this._clips.length;while(q--){this._clips[q].progress(p)}if(typeof this._storeOnUpdate==="function"){this._storeOnUpdate.call(this,this)
}};a.exports=n},{"../helpers/BezierCurveCssManager":230,"../helpers/isCssCubicBezierString":236,"@marcom/ac-clip":166,"@marcom/ac-easing":188,"@marcom/ac-object":142}],227:[function(f,c,g){var b=f("../helpers/convertToStyleObject");
var d=f("../helpers/convertToTransitionableObjects");var m=f("@marcom/ac-object").clone;
var j=f("@marcom/ac-object").create;var k=f("../helpers/removeTransitions");var i=f("../helpers/BezierCurveCssManager");
var o=f("./ClipEasing");var n=f("@marcom/ac-dom-styles");function a(r,q,s,p){p=p||{};
this._el=r;this._storeOnStart=p.onStart||null;this._storeOnDraw=p.onDraw||null;
this._storeOnComplete=p.onComplete||null;p.onStart=this._onStart;p.onDraw=this._onDraw;
p.onComplete=this._onComplete;o.call(this,{},q,s,p)}var l=o.prototype;var h=a.prototype=j(l);
h.play=function(){var p=l.play.call(this);if(this._remainingDelay!==0){n.setStyle(this._el,b(this._target))
}return p};h.reset=function(){var p=l.reset.call(this);n.setStyle(this._el,b(this._target));
return p};h.destroy=function(){this._el=null;this._completeStyles=null;this._storeOnStart=null;
this._storeOnDraw=null;this._storeOnComplete=null;return l.destroy.call(this)};
h.target=function(){return this._el};h._prepareProperties=function(){var s=d(this._el,this._propsTo,this._propsFrom);
this._target=s.target;this._propsFrom=s.propsFrom;this._propsTo=s.propsTo;k(this._el,this._target);
var q=(this._isYoyo)?this._propsFrom:this._propsTo;this._completeStyles=b(q);if(this._options.removeStylesOnComplete!==undefined){var t;
var r=this._options.removeStylesOnComplete;if(typeof r==="boolean"&&r){for(t in this._completeStyles){if(this._completeStyles.hasOwnProperty(t)){this._completeStyles[t]=null
}}}else{if(typeof r==="object"&&r.length){var p=r.length;while(p--){t=r[p];if(this._completeStyles.hasOwnProperty(t)){this._completeStyles[t]=null
}}}}}return l._prepareProperties.call(this)};h._onStart=function(p){if(this.playing()&&this._direction===1&&this._delay===0){n.setStyle(this._el,b(this._propsFrom))
}if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,this)}};
h._onDraw=function(p){n.setStyle(this._el,b(this._target));if(typeof this._storeOnDraw==="function"){this._storeOnDraw.call(this,this)
}};h._onComplete=function(p){n.setStyle(this._el,this._completeStyles);if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,this)
}};c.exports=a},{"../helpers/BezierCurveCssManager":230,"../helpers/convertToStyleObject":233,"../helpers/convertToTransitionableObjects":234,"../helpers/removeTransitions":237,"./ClipEasing":226,"@marcom/ac-dom-styles":45,"@marcom/ac-object":142}],228:[function(j,b,y){var c=j("../helpers/convertToStyleObject");
var o=j("../helpers/convertToTransitionableObjects");var w=j("@marcom/ac-object").clone;
var m=j("@marcom/ac-object").create;var t=j("@marcom/ac-easing").createPredefined;
var l=j("../helpers/isCssCubicBezierString");var u=j("../helpers/removeTransitions");
var g=j("../helpers/splitUnits");var i=j("../helpers/transitionEnd");var n=j("../helpers/waitAnimationFrames");
var v=j("../helpers/BezierCurveCssManager");var a=j("@marcom/ac-clip").Clip;var r=j("./ClipEasing");
var x=j("@marcom/ac-dom-styles");var s=j("@marcom/ac-page-visibility").PageVisibilityManager;
var d="ease";var h="%EASE% is not a supported predefined ease when transitioning with Elements and CSS transition. If you need to use %EASE% then pass the inlineStyle:true option.";
var k="Function eases are not supported when using CSS transitions with Elements. Either use a cubic-bezier string (e.g. 'cubic-bezier(0, 0, 1, 1)' or pass the inlineStyle option as `true` to render styles each frame instead of using CSS transitions.";
function f(B,A,C,z){z=z||{};this._el=B;this._storeEase=z.ease;if(typeof this._storeEase==="function"){throw new Error(k)
}this._storeOnStart=z.onStart||null;this._storeOnComplete=z.onComplete||null;z.onStart=this._onStart.bind(this);
z.onComplete=this._onComplete.bind(this);this._stylesTo=w(C,true);this._stylesFrom=(z.propsFrom)?w(z.propsFrom,true):{};
this._propsEase=(z.propsEase)?w(z.propsEase,true):{};if(l(z.ease)){z.ease=v.create(z.ease).toEasingFunction()
}a.call(this,{},A,{},z);this._propsFrom={}}var p=a.prototype;var q=f.prototype=m(p);
q.play=function(){var z=p.play.call(this);if(this._direction===1&&this.progress()===0&&this._remainingDelay!==0){this._applyStyles(0,c(this._stylesFrom))
}return z};q.reset=function(){var z=p.reset.call(this);this._stylesClip.reset();
this._applyStyles(0,c(this._styles));return z};q.destroy=function(){s.off("changed",this._onVisibilityChanged);
this._removeTransitionListener();this.off("pause",this._onPaused);this._onPaused();
this._stylesClip.destroy();this._stylesClip=null;this._el=null;this._propsArray=null;
this._styles=null;this._stylesFrom=null;this._stylesTo=null;this._completeStyles=null;
this._storeOnStart=null;this._storeOnComplete=null;this._onTransitionEnded=null;
return p.destroy.call(this)};q.target=function(){return this._el};q.duration=function(A){var z=p.duration.call(this,A);
if(A===undefined){return z}if(this.playing()){this.progress(this._progress)}return z
};q.progress=function(z){var A=p.progress.call(this,z);if(z===undefined){return A
}z=(this._direction===1)?z:1-z;this._stylesClip.progress(z);this._applyStyles(0,c(this._styles));
if(this.playing()){this._isWaitingForStylesToBeApplied=true;n(this._setStylesAfterWaiting,2)
}return A};q._prepareProperties=function(){var B=o(this._el,this._stylesTo,this._stylesFrom);
this._styles=B.target;this._stylesTo=B.propsTo;this._stylesFrom=B.propsFrom;var C=this._storeEase||d;
this._eases={};this._propsArray=[];var E;this._styleCompleteTo=c(this._stylesTo);
this._styleCompleteFrom=c(this._stylesFrom);this._propsEaseKeys={};var D;for(D in this._stylesTo){if(this._stylesTo.hasOwnProperty(D)){this._propsArray[this._propsArray.length]=D;
if(this._propsEase[D]===undefined){if(this._eases[C]===undefined){E=this._convertEase(C);
this._eases[C]=E.css}this._propsEaseKeys[D]=C}else{if(this._eases[this._propsEase[D]]===undefined){E=this._convertEase(this._propsEase[D]);
this._eases[this._propsEase[D]]=E.css;this._propsEaseKeys[D]=this._propsEase[D];
this._propsEase[D]=E.js}else{if(l(this._propsEase[D])){this._propsEaseKeys[D]=this._propsEase[D];
this._propsEase[D]=this._eases[this._propsEase[D]]["1"].toEasingFunction()}}}}}this._onPaused=this._onPaused.bind(this);
this.on("pause",this._onPaused);this._setOtherTransitions();this._currentTransitionStyles=this._otherTransitions;
this._completeStyles=c((this._isYoyo)?this._stylesFrom:this._stylesTo);if(this._options.removeStylesOnComplete!==undefined){var A=this._options.removeStylesOnComplete;
if(typeof A==="boolean"&&A){for(D in this._stylesTo){this._completeStyles[D]=null
}}else{if(typeof A==="object"&&A.length){var z=A.length;while(z--){this._completeStyles[A[z]]=null
}}}}this._onTransitionEnded=this._onTransitionEnded.bind(this);this._setStylesAfterWaiting=this._setStylesAfterWaiting.bind(this);
this._onVisibilityChanged=this._onVisibilityChanged.bind(this);s.on(s.CHANGED,this._onVisibilityChanged);
this._stylesClip=new r(this._styles,1,this._stylesTo,{ease:this._options.ease,propsFrom:this._stylesFrom,propsEase:this._options.propsEase});
a._remove(this._stylesClip);return p._prepareProperties.call(this)};q._convertEase=function(B){if(typeof B==="function"){throw new Error(k)
}var z;var A;if(l(B)){z=v.create(B);A=z.toEasingFunction()}else{var C=t(B);if(C.cssString===null){throw new Error(h.replace(/%EASE%/g,B))
}z=v.create(C.cssString);A=B}return{css:{"1":z,"-1":z.reversed()},js:A}};q._complete=function(){if((this._isWaitingForStylesToBeApplied||this._isTransitionEnded||!this._isListeningForTransitionEnd)&&this.progress()===1){this._isWaitingForStylesToBeApplied=false;
p._complete.call(this)}};q._onTransitionEnded=function(){this._isTransitionEnded=true;
this._complete()};q._addTransitionListener=function(){if(!this._isListeningForTransitionEnd&&this._el&&this._onTransitionEnded){this._isListeningForTransitionEnd=true;
this._isTransitionEnded=false;this._el.addEventListener(i,this._onTransitionEnded)
}};q._removeTransitionListener=function(){if(this._isListeningForTransitionEnd&&this._el&&this._onTransitionEnded){this._isListeningForTransitionEnd=false;
this._isTransitionEnded=false;this._el.removeEventListener(i,this._onTransitionEnded)
}};q._applyStyles=function(B,z){if(B>0){var C="";var A={};var D;for(D in this._eases){if(this._eases.hasOwnProperty(D)){A[D]=this._eases[D][this._direction].splitAt(this.progress()).toCSSString()
}}for(D in this._stylesTo){if(this._stylesTo.hasOwnProperty(D)){C+=D+" "+B+"ms "+A[this._propsEaseKeys[D]]+" 0ms, "
}}this._currentTransitionStyles=C.substr(0,C.length-2);if(!this._doStylesMatchCurrentStyles(z)){this._addTransitionListener()
}else{this._removeTransitionListener()}}else{this._currentTransitionStyles="";this._removeTransitionListener()
}z.transition=this._getOtherClipTransitionStyles()+this._currentTransitionStyles;
x.setStyle(this._el,z)};q._doStylesMatchCurrentStyles=function(B){var A=x.getStyle.apply(this,[this._el].concat([this._propsArray]));
var z;for(z in B){if(B.hasOwnProperty(z)&&A.hasOwnProperty(z)&&B[z]!==A[z]){return false
}}return true};q._setStylesAfterWaiting=function(){this._isWaitingForStylesToBeApplied=false;
if(this.playing()){var A=this._durationMs*(1-this.progress());var z=(this._direction>0)?this._styleCompleteTo:this._styleCompleteFrom;
this._applyStyles(A,z)}};q._setOtherTransitions=function(){u(this._el,this._stylesTo);
var z=a.getAll(this._el);var A=z.length;while(A--){if(z[A]!==this&&z[A].playing()&&z[A]._otherTransitions&&z[A]._otherTransitions.length){this._otherTransitions=z[A]._otherTransitions;
return}}this._otherTransitions=x.getStyle(this._el,"transition").transition;if(this._otherTransitions===null||this._otherTransitions==="all 0s ease 0s"){this._otherTransitions=""
}};q._getTransitionStyles=function(){var z=this._getOtherClipTransitionStyles();
if(this._otherTransitions.length){z+=this._otherTransitions}else{if(z.length){z=z.substr(0,z.length-2)
}}return z};q._getOtherClipTransitionStyles=function(){var B="";var z=a.getAll(this._el);
var A=z.length;while(A--){if(z[A]!==this&&z[A].playing()&&z[A]._currentTransitionStyles&&z[A]._currentTransitionStyles.length){B+=z[A]._currentTransitionStyles+", "
}}return B};q._onVisibilityChanged=function(z){if(this.playing()&&!z.isHidden){this._update({timeNow:this._getTime()});
var A=this.progress();if(A<1){this.progress(A)}}};q._onPaused=function(A){var z=x.getStyle.apply(this,[this._el].concat([this._propsArray]));
z.transition=this._getTransitionStyles();this._removeTransitionListener();x.setStyle(this._el,z)
};q._onStart=function(z){var A=(this._direction===1&&this.progress()===0&&this._delay===0)?2:0;
if(A){this._isWaitingForStylesToBeApplied=true;this._applyStyles(0,this._styleCompleteFrom)
}n(this._setStylesAfterWaiting,A);if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,this)
}};q._onComplete=function(z){this._removeTransitionListener();this._completeStyles.transition=this._getTransitionStyles();
x.setStyle(this._el,this._completeStyles);if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,this)
}};b.exports=f},{"../helpers/BezierCurveCssManager":230,"../helpers/convertToStyleObject":233,"../helpers/convertToTransitionableObjects":234,"../helpers/isCssCubicBezierString":236,"../helpers/removeTransitions":237,"../helpers/splitUnits":238,"../helpers/transitionEnd":240,"../helpers/waitAnimationFrames":241,"./ClipEasing":226,"@marcom/ac-clip":166,"@marcom/ac-dom-styles":45,"@marcom/ac-easing":188,"@marcom/ac-object":142,"@marcom/ac-page-visibility":148}],229:[function(c,d,a){var g=c("@marcom/ac-easing").createBezier;
function b(i,h){this.manager=h;this.p1={x:i[0],y:i[1]};this.p2={x:i[2],y:i[3]};
this._isLinear=(this.p1.x===this.p1.y)&&(this.p2.x===this.p2.y);this._cacheSplits={}
}var f=b.prototype;f.splitAt=function(k){if(this._isLinear){return this}k=Math.round(k*40)/40;
if(k===0){return this}else{if(this._cacheSplits[k]!==undefined){return this._cacheSplits[k]
}}var q=[this.p1.x,this.p2.x];var n=[this.p1.y,this.p2.y];var m=0;var o=k;var i=0;
var p=1;var j=this._getStartX(k,q);while(o!==j&&m<1000){if(o<j){p=k}else{i=k}k=i+((p-i)*0.5);
j=this._getStartX(k,q);++m}var l=this._splitBezier(k,q,n);var r=this._normalize(l);
var h=this.manager.create(r);this._cacheSplits[o]=h;return h};f.reversed=function(){var h=this.toArray();
return this.manager.create([0.5-(h[2]-0.5),0.5-(h[3]-0.5),0.5-(h[0]-0.5),0.5-(h[1]-0.5)])
};f.toArray=function(){return[this.p1.x,this.p1.y,this.p2.x,this.p2.y]};f.toCSSString=function(){return"cubic-bezier("+this.p1.x+", "+this.p1.y+", "+this.p2.x+", "+this.p2.y+")"
};f.toEasingFunction=function(){return g.apply(this,this.toArray()).easingFunction
};f._getStartX=function(m,h){var l=m-1;var k=m*m;var j=l*l;var i=k*m;return i-3*k*l*h[1]+3*m*j*h[0]
};f._splitBezier=function(m,h,n){var l=m-1;var k=m*m;var j=l*l;var i=k*m;return[i-3*k*l*h[1]+3*m*j*h[0],i-3*k*l*n[1]+3*m*j*n[0],k-2*m*l*h[1]+j*h[0],k-2*m*l*n[1]+j*n[0],m-l*h[1],m-l*n[1]]
};f._normalize=function(h){return[(h[2]-h[0])/(1-h[0]),(h[3]-h[1])/(1-h[1]),(h[4]-h[0])/(1-h[0]),(h[5]-h[1])/(1-h[1])]
};d.exports=b},{"@marcom/ac-easing":188}],230:[function(c,d,a){var b=c("./BezierCurveCss");
function g(){this._instances={}}var f=g.prototype;f.create=function(k){var j;if(typeof k==="string"){j=k.replace(/ /g,"")
}else{j="cubic-bezier("+k.join(",")+")"}if(this._instances[j]===undefined){if(typeof k==="string"){k=k.match(/\d*\.?\d+/g);
var h=k.length;while(h--){k[h]=Number(k[h])}}this._instances[j]=new b(k,this)}return this._instances[j]
};d.exports=new g()},{"./BezierCurveCss":229}],231:[function(b,c,a){if(typeof window.Float32Array==="undefined"){window.Float32Array=function(){}
}},{}],232:[function(d,f,c){var b=d("./splitUnits");var h=d("@marcom/ac-dom-metrics");
var a={translateX:"width",translateY:"height"};function i(j,l,m){this._transform=j;
var k;var n;var o;for(o in m){if(m.hasOwnProperty(o)&&typeof this._transform[o]==="function"){k=b(m[o]);
if(k.unit==="%"){n=this._convertPercentToPixelValue(o,k.value,l)}else{n=k.value
}this._transform[o].call(this._transform,n)}}}var g=i.prototype;g._convertPercentToPixelValue=function(m,l,k){m=a[m];
var j=h.getDimensions(k);if(j[m]){l*=0.01;return j[m]*l}return l};g.toArray=function(){return this._transform.toArray()
};g.toCSSString=function(){return this._transform.toCSSString()};f.exports=i},{"./splitUnits":238,"@marcom/ac-dom-metrics":41}],233:[function(b,c,a){c.exports=function d(h){var g={};
var f;var i;for(i in h){if(h.hasOwnProperty(i)&&h[i]!==null){if(h[i].isColor){if(h[i].isRgb){g[i]="rgb("+Math.round(h[i].r)+", "+Math.round(h[i].g)+", "+Math.round(h[i].b)+")"
}else{if(h[i].isRgba){g[i]="rgba("+Math.round(h[i].r)+", "+Math.round(h[i].g)+", "+Math.round(h[i].b)+", "+h[i].a+")"
}}}else{if(i==="transform"){f=(h[i].length===6)?"matrix":"matrix3d";g[i]=f+"("+h[i].join(",")+")"
}else{if(!h[i].unit){g[i]=h[i].value}else{g[i]=h[i].value+h[i].unit}}}}}return g
}},{}],234:[function(h,d,j){var n=h("@marcom/ac-object").clone;var f=h("./splitUnits");
var b=h("./toCamCase");var c=h("@marcom/ac-color").Color;var q=h("@marcom/ac-dom-styles");
var m=h("@marcom/ac-feature");var i=h("@marcom/ac-transform").Transform;var a=h("./TransformMatrix");
var l=function(s){if(c.isRgba(s)){s=new c(s).rgbaObject();s.isRgba=true}else{s=new c(s).rgbObject();
s.isRgb=true}s.isColor=true;return s};var r=function(s){if(s.isRgb){s.isRgb=false;
s.isRgba=true;s.a=1}};var p=function(t,s,u){if(t.isRgba||s.isRgba||u.isRgba){r(t);
r(s);r(u)}};var o=function(s){return[s[0],s[1],0,0,s[2],s[3],0,0,0,0,1,0,s[4],s[5],0,1]
};var k=function(t,s,u){if(t.transform.length===16||s.transform.length===16||u.transform.length===16){if(t.transform.length===6){t.transform=o(t.transform)
}if(s.transform.length===6){s.transform=o(s.transform)}if(u.transform.length===6){u.transform=o(u.transform)
}}};d.exports=function g(u,A,z){var w={};A=n(A,true);z=n(z,true);var t;var B,x,y;
var v=m.cssPropertyAvailable("transform");var s;for(s in A){if(A.hasOwnProperty(s)&&A[s]!==null){if(s==="transform"){if(v){B=new i();
t=q.getStyle(u,"transform")["transform"]||"none";B.setMatrixValue(t);x=new a(new i(),u,A[s])
}if(x&&x.toCSSString()!==B.toCSSString()){y=new a(z[s]?new i():B.clone(),u,z[s]);
w[s]=B.toArray();A[s]=x.toArray();z[s]=y.toArray()}else{w[s]=null;A[s]=null}}else{t=q.getStyle(u,s)[b(s)]||z[s];
if(c.isColor(t)){w[s]=l(t);z[s]=(z[s]!==undefined)?l(z[s]):n(w[s],true);A[s]=l(A[s])
}else{w[s]=f(t);z[s]=(z[s]!==undefined)?f(z[s]):n(w[s],true);A[s]=f(A[s])}}}}for(s in z){if(z.hasOwnProperty(s)&&z[s]!==null&&(A[s]===undefined||A[s]===null)){if(s==="transform"){if(v){B=new i();
B.setMatrixValue(getComputedStyle(u).transform||getComputedStyle(u).webkitTransform||"none");
y=new a(new i(),u,z[s])}if(y&&y.toCSSString()!==B.toCSSString()){x=new a(B.clone());
w[s]=B.toArray();A[s]=x.toArray();z[s]=y.toArray()}else{w[s]=null;A[s]=null;z[s]=null
}}else{t=q.getStyle(u,s)[b(s)];if(c.isColor(t)){w[s]=l(t);A[s]=n(w[s],true);z[s]=l(z[s])
}else{w[s]=f(t);z[s]=f(z[s]);A[s]=n(w[s],true)}}}if(w[s]&&w[s].isColor){p(w[s],z[s],A[s])
}}if(w.transform){k(w,z,A)}return{target:w,propsTo:A,propsFrom:z}}},{"./TransformMatrix":232,"./splitUnits":238,"./toCamCase":239,"@marcom/ac-color":168,"@marcom/ac-dom-styles":45,"@marcom/ac-feature":101,"@marcom/ac-object":142,"@marcom/ac-transform":218}],235:[function(b,c,a){c.exports=function d(j){if(j.transitionProperty){var m="";
var h=j.transitionProperty.split(", ");var k=j.transitionDuration.split(", ");var l=j.transitionTimingFunction.replace(/\d+[,]+[\s]/gi,function(i){return i.substr(0,i.length-1)
}).split(", ");var f=j.transitionDelay.split(", ");var g=h.length;while(g--){m+=h[g]+" "+k[g]+" "+l[g]+" "+f[g]+", "
}return m.substr(0,m.length-2)}return false}},{}],236:[function(c,d,b){d.exports=function a(f){return typeof f==="string"&&f.substr(0,13)==="cubic-bezier("
}},{}],237:[function(c,d,b){var g=c("./getShorthandTransition");var f=c("@marcom/ac-dom-styles");
d.exports=function a(k,m){var l=f.getStyle(k,"transition","transition-property","transition-duration","transition-timing-function","transition-delay");
l=l.transition||g(l);if(l&&l.length){l=l.split(",");var j=0;var n;var h=l.length;
while(h--){n=l[h].trim().split(" ")[0];if(m[n]!==undefined){l.splice(h,1);++j}}if(j){if(l.length===0){l=["all"]
}f.setStyle(k,{transition:l.join(",").trim()})}}}},{"./getShorthandTransition":235,"@marcom/ac-dom-styles":45}],238:[function(c,d,b){d.exports=function a(i){i=String(i);
if(i.indexOf(" ")>-1){throw new Error("Shorthand CSS is not supported. Please use longhand CSS only.")
}var h=/(\d*\.?\d*)(.*)/;var f=1;if(i&&i.substr(0,1)==="-"){i=i.substr(1);f=-1}var g=String(i).match(h);
return{value:Number(g[1])*f,unit:g[2]}}},{}],239:[function(c,d,b){d.exports=function a(g){var f=function(i,j,k,h){return(k===0)&&(h.substr(1,3)!=="moz")?j:j.toUpperCase()
};return g.replace(/-(\w)/g,f)}},{}],240:[function(d,f,c){var a;f.exports=(function b(){if(a){return a
}var g;var h=document.createElement("fakeelement");var i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};
for(g in i){if(h.style[g]!==undefined){a=i[g];return a}}})()},{}],241:[function(d,f,b){var a=d("@marcom/ac-page-visibility").PageVisibilityManager;
f.exports=function c(k,i){if(i){var j=function(l){if(a.isHidden){setTimeout(l,16)
}else{window.requestAnimationFrame(l)}};var h=0;var g=function(){if(h===i){k.call(this)
}else{++h;j(g)}};g()}else{k.call(this)}}},{"@marcom/ac-page-visibility":148}],242:[function(d,f,b){var c=d("@marcom/ac-eclipse").Clip;
var a=d("@marcom/ac-feature/cssPropertyAvailable");f.exports=function g(i,l,k,j,h){if(a("opacity")){h=h||{};
if(j){h.propsFrom=h.propsFrom||{};h.propsFrom.opacity=l;return c.to(i,j,{opacity:k},h)
}else{i.style.opacity=k;if(typeof h.onStart==="function"){h.onStart()}if(typeof h.onComplete==="function"){h.onComplete()
}}}else{i.style.visibility=(k)?"visible":"hidden";if(typeof h.onStart==="function"){h.onStart()
}if(typeof h.onComplete==="function"){h.onComplete()}}}},{"@marcom/ac-eclipse":223,"@marcom/ac-feature/cssPropertyAvailable":96}],243:[function(f,g,c){var d=f("@marcom/ac-eclipse").Clip;
var b=f("@marcom/ac-feature/cssPropertyAvailable");g.exports=function a(i,j,h){h=h||{};
if(b("opacity")){if(j){return d.to(i,j,{opacity:1},h)}else{i.style.opacity=1;if(typeof h.onStart==="function"){h.onStart()
}if(typeof h.onComplete==="function"){h.onComplete()}}}else{i.style.visibility="visible";
if(typeof h.onStart==="function"){h.onStart()}if(typeof h.onComplete==="function"){h.onComplete()
}}}},{"@marcom/ac-eclipse":223,"@marcom/ac-feature/cssPropertyAvailable":96}],244:[function(d,f,b){var c=d("@marcom/ac-eclipse").Clip;
var a=d("@marcom/ac-feature/cssPropertyAvailable");f.exports=function g(i,j,h){h=h||{};
if(a("opacity")){if(j){return c.to(i,j,{opacity:0},h)}else{i.style.opacity=0;if(typeof h.onStart==="function"){h.onStart()
}if(typeof h.onComplete==="function"){h.onComplete()}}}else{i.style.visibility="hidden";
if(typeof h.onStart==="function"){h.onStart()}if(typeof h.onComplete==="function"){h.onComplete()
}}}},{"@marcom/ac-eclipse":223,"@marcom/ac-feature/cssPropertyAvailable":96}],245:[function(f,g,c){var d=f("@marcom/ac-eclipse").Clip;
var h=f("@marcom/ac-dom-styles");var b=f("@marcom/ac-feature/cssPropertyAvailable");
g.exports=function a(k,i,n,l,j){j=j||{};var m;if(b("transition")){m={transform:{translateX:i+"px",translateY:n+"px"}}
}else{m={left:i+"px",top:n+"px"}}if(l){return d.to(k,l,m,j)}else{h.setStyle(k,m);
if(typeof j.onStart==="function"){j.onStart()}if(typeof j.onComplete==="function"){j.onComplete()
}}}},{"@marcom/ac-dom-styles":45,"@marcom/ac-eclipse":223,"@marcom/ac-feature/cssPropertyAvailable":96}],246:[function(d,f,c){var b=d("@marcom/ac-feature/cssPropertyAvailable");
var a=d("./move");f.exports=function g(j,h,k,i){return a(j,h,0,k,i)}},{"./move":245,"@marcom/ac-feature/cssPropertyAvailable":96}],247:[function(d,f,b){var c=d("@marcom/ac-eclipse").Clip;
f.exports=function a(g,o,k,i,r){r=r||{};var h=g===window;var q;var n;if(h){q=g.scrollX;
n=g.scrollY}else{q=g.scrollLeft;n=g.scrollTop}var m={x:q,y:n};var p={x:o,y:k};if(typeof r.onDraw==="function"){var l=r.onDraw
}var j=function(s){if(h){g.scrollTo(m.x,m.y)}else{g.scrollLeft=m.x;g.scrollTop=m.y
}if(l){l.call(this,s)}};r.onDraw=j;return c.to(m,i,p,r)}},{"@marcom/ac-eclipse":223}],248:[function(c,d,b){var a=c("./scroll");
d.exports=function f(k,g,l,j){var i=k===window;var h;if(i){h=k.scrollY}else{h=k.scrollTop
}return a(k,g,h,l,j)}},{"./scroll":247}],249:[function(d,a,g){var h=d("./ac-gallery/helpers/extendProto");
var j=d("./ac-gallery/Gallery");var b=d("./ac-gallery/auto/AutoGallery");var i=d("./ac-gallery/fade/FadeGallery");
var c=d("./ac-gallery/slide/SlideGallery");var f=d("./ac-gallery/Item");j.create=d("./ac-gallery/factories/create");
j.autoCreate=d("./ac-gallery/factories/autoCreate");j.extend=h;b.extend=h;i.extend=h;
c.extend=h;f.extend=h;a.exports={Gallery:j,AutoGallery:b,FadeGallery:i,SlideGallery:c,Item:f,ToggleNav:d("./ac-gallery/navigation/ToggleNav")}
},{"./ac-gallery/Gallery":250,"./ac-gallery/Item":251,"./ac-gallery/auto/AutoGallery":253,"./ac-gallery/factories/autoCreate":254,"./ac-gallery/factories/create":255,"./ac-gallery/fade/FadeGallery":256,"./ac-gallery/helpers/extendProto":259,"./ac-gallery/navigation/ToggleNav":262,"./ac-gallery/slide/SlideGallery":263}],250:[function(b,a,f){var h=b("@marcom/ac-object/create");
var d=b("./analytics/AnalyticsManager");var l=b("@marcom/ac-classlist");var k=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var c=b("./Item");function j(m){m=m||{};this._wrapAround=m.wrapAround||false;this._itemType=m.itemType||c;
this._items=[];this._itemsIdLookup={};this.showNext=this.showNext.bind(this);this.showPrevious=this.showPrevious.bind(this);
this._update=this._update.bind(this);this._updateItems=this._updateItems.bind(this);
k.call(this);j._add(this,m.analyticsOptions)}j.FADE="fade";j.FADE_SELECTOR="[data-ac-gallery-fade]";
j.SLIDE="slide";j.SLIDE_SELECTOR="[data-ac-gallery-slide]";j.UPDATE="update";j.UPDATE_COMPLETE="update:complete";
var i=k.prototype;var g=j.prototype=h(i);g.addItem=function(n,m){if(n.nodeType){n=new this._itemType(n)
}else{if(this._items.indexOf(n)>-1){return n}}if(typeof m==="number"){this._items.splice(m,0,n)
}else{this._items.push(n)}if(this._items.length===1){n.show();this._setCurrentItem(n)
}else{n.hide();if(this.getNextItem()===n){this._setNextItem(n)}if(this.getPreviousItem()===n){this._setPreviousItem(n)
}}if(n.getElementId()!==null){this._itemsIdLookup[n.getElementId()]=n}n.on(c.SELECTED,this._update);
return n};g.removeItem=function(q,p){p=p||{};if(typeof q==="number"){q=this._items[q]
}var o=this._items.indexOf(q);if(o>-1){var m=this.getNextItem();var n=this.getPreviousItem();
this._items.splice(o,1);q.off(c.SELECTED,this._update);if(m===q){this._setNextItem(this.getNextItem())
}if(n===q){this._setPreviousItem(this.getPreviousItem())}}if(q===this._currentItem&&this._items.length&&p.setCurrentItem!==false){this._update({item:this._items[0]});
this._setLastItem(null)}if(p.destroyItem&&q.getElement()){q.destroy()}return q};
g.show=function(n,m){if(typeof n==="number"){n=this._items[n]}else{if(typeof n==="string"){n=this._itemsIdLookup[n]
}}if(n){m=m||{};this._update({item:n,interactionEvent:m.interactionEvent})}return n||null
};g.showNext=function(m){var n=this.getNextItem();if(n){this.show(n,m)}return n
};g.showPrevious=function(m){var n=this.getPreviousItem();if(n){this.show(n,m)}return n
};g.isInView=function(){return this._currentItem&&this._currentItem.isInView()};
g.getTotalItems=function(){return this._items.length};g.getItems=function(){return this._items
};g.getItem=function(m){if(typeof m==="number"){return this.getItemAt(m)}else{if(typeof m==="string"){return this.getItemById(m)
}}};g.getItemAt=function(m){return this._items[m]||null};g.getItemById=function(m){return this._itemsIdLookup[m]||null
};g.getItemIndex=function(m){return this._items.indexOf(m)};g.getCurrentItem=function(){return this._currentItem||null
};g.getLastItem=function(){return this._lastItem||null};g.getNextItem=function(){var n;
var m=this._items.indexOf(this._currentItem);if(m<this._items.length-1){n=this._items[m+1]
}else{if(this._wrapAround){n=this._items[0]}}return n||null};g.getPreviousItem=function(){var n;
var m=this._items.indexOf(this._currentItem);if(m>0){n=this._items[m-1]}else{if(this._wrapAround){n=this._items[this._items.length-1]
}}return n||null};g.getId=function(){return this._id};g.destroy=function(m){m=m||{};
if(m.destroyItems===undefined){m.destroyItems=true}this._setCurrentItem(null);if(m.destroyItems){var n;
while(this._items.length){n=this._items[0];n.off(c.SELECTED,this._update);this.removeItem(n,{destroyItem:true,setCurrentItem:false})
}}this._items=null;this._itemsIdLookup=null;j._remove(this);return i.destroy.call(this)
};g._setCurrentItem=function(m){if(this._currentItem&&this._currentItem.getElement()&&this._currentItem!==m){l.remove(this._currentItem.getElement(),c.CSS_CURRENT_ITEM);
this._setLastItem(this._currentItem)}this._currentItem=m;if(this._currentItem&&this._currentItem.getElement()){l.add(this._currentItem.getElement(),c.CSS_CURRENT_ITEM);
this._setNextItem(this.getNextItem());this._setPreviousItem(this.getPreviousItem())
}};g._setLastItem=function(m){if(this._lastItem&&this._lastItem.getElement()&&this._lastItem!==m){l.remove(this._lastItem.getElement(),c.CSS_LAST_ITEM)
}this._lastItem=m;if(this._lastItem&&this._lastItem.getElement()){l.add(this._lastItem.getElement(),c.CSS_LAST_ITEM)
}};g._setNextItem=function(m){if(this._nextItem&&this._nextItem.getElement()&&this._nextItem!==m){l.remove(this._nextItem.getElement(),c.CSS_NEXT_ITEM)
}this._nextItem=m;if(this._nextItem&&this._nextItem.getElement()){l.add(this._nextItem.getElement(),c.CSS_NEXT_ITEM)
}};g._setPreviousItem=function(m){if(this._previousItem&&this._previousItem.getElement()&&this._previousItem!==m){l.remove(this._previousItem.getElement(),c.CSS_PREVIOUS_ITEM)
}this._previousItem=m;if(this._previousItem&&this._previousItem.getElement()){l.add(this._previousItem.getElement(),c.CSS_PREVIOUS_ITEM)
}};g._updateItems=function(n,m){if(n.outgoing[0]){n.outgoing[0].hide()}n.incoming[0].show();
if(!m){this.trigger(j.UPDATE_COMPLETE,n)}};g._update=function(m){var o=this._currentItem!==m.item;
if(o){this._setCurrentItem(m.item)}var n={incoming:[m.item],outgoing:(this._lastItem)?[this._lastItem]:[],interactionEvent:m.interactionEvent||null};
if(o){this.trigger(j.UPDATE,n)}this._updateItems(n,!o)};j._instantiate=function(){this._galleries=[];
this._idCounter=0;return this};j._add=function(n,m){this._galleries.push(n);n._id=++this._idCounter;
d.add(n,m)};j._remove=function(m){var n=this._galleries.indexOf(m);if(n>-1){this._galleries.splice(n,1);
d.remove(m)}};j.getAll=function(){return Array.prototype.slice.call(this._galleries)
};j.getAllInView=function(){var n=[];var m=this._galleries.length;while(m--){if(this._galleries[m].isInView()){n.push(this._galleries[m])
}}return n};j.destroyAll=function(){var m=this._galleries.length;while(m--){this._galleries[m].destroy()
}this._galleries=[]};a.exports=j._instantiate()},{"./Item":251,"./analytics/AnalyticsManager":252,"@marcom/ac-classlist":12,"@marcom/ac-event-emitter-micro":90,"@marcom/ac-object/create":138}],251:[function(c,b,f){var h=c("@marcom/ac-object/create");
var j=c("@marcom/ac-keyboard/keyMap");var n=c("@marcom/ac-classlist");var k=c("@marcom/ac-dom-events");
var l=c("@marcom/ac-dom-metrics");var m=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var a=c("@marcom/ac-keyboard");var i="current";function d(o){this._el=o;this._triggerKeys=[];
this._triggerEls={};this._isShown=false;this._onKeyboardInteraction=this._onKeyboardInteraction.bind(this);
this._onTriggered=this._onTriggered.bind(this);m.call(this)}d.CSS_CURRENT_ITEM="ac-gallery-currentitem";
d.CSS_LAST_ITEM="ac-gallery-lastitem";d.CSS_NEXT_ITEM="ac-gallery-nextitem";d.CSS_PREVIOUS_ITEM="ac-gallery-previousitem";
d.SELECTED="selected";d.SHOW="show";d.HIDE="hide";var g=d.prototype=h(m.prototype);
g.show=function(){this._isShown=true;this._addCurrentClassToTriggers();this.trigger(d.SHOW,this)
};g.hide=function(){this._isShown=false;this._removeCurrentClassFromTriggers();
this.trigger(d.HIDE,this)};g.addElementTrigger=function(q,p){p=p||"click";if(this._triggerEls[p]===undefined){this._triggerEls[p]=[]
}var o=this._triggerEls[p].indexOf(q);if(o<0){k.addEventListener(q,p,this._onTriggered);
this._triggerEls[p].push(q);if(this._isShown){n.add(q,i)}}};g.removeElementTrigger=function(q,p){p=p||"click";
if(this._triggerEls[p]===undefined){return}var o=this._triggerEls[p].indexOf(q);
if(o>-1){k.removeEventListener(q,p,this._onTriggered);if(this._isShown){n.remove(q,i)
}}if(this._triggerEls[p].length===0){this._triggerEls[p]=null}};g.addKeyTrigger=function(p){if(typeof p==="string"){p=j[p.toUpperCase()]
}if(typeof p==="number"){var o=this._triggerKeys.indexOf(p);if(o<0){a.onDown(p,this._onKeyboardInteraction);
this._triggerKeys.push(p)}}};g.removeKeyTrigger=function(p){if(typeof p==="string"){p=j[p.toUpperCase()]
}if(typeof p==="number"){var o=this._triggerKeys.indexOf(p);if(o>-1){a.offDown(p,this._onKeyboardInteraction);
this._triggerKeys.splice(o,1)}}};g.removeAllTriggers=function(){var p;var o=this._triggerKeys.length;
while(o--){p=this._triggerKeys[o];a.offDown(p,this._onKeyboardInteraction)}this._triggerKeys=[];
var q;for(q in this._triggerEls){o=this._triggerEls[q].length;while(o--){k.removeEventListener(this._triggerEls[q][o],q,this._onTriggered)
}}this._triggerEls={}};g.isInView=function(){if(this._el){return l.isInViewport(this._el)
}return false};g.percentageInView=function(){if(this._el){return l.getPercentInViewport(this._el)
}return 0};g.getElement=function(){return this._el};g.getElementId=function(){if(this._elId!==undefined){return this._elId
}this._elId=this._el.getAttribute("id")||null;return this._elId};g.destroy=function(){if(this._isShown){this._isShown=null;
n.remove(this._el,d.CSS_CURRENT_ITEM,d.CSS_LAST_ITEM,d.CSS_NEXT_ITEM,d.CSS_PREVIOUS_ITEM);
this._removeCurrentClassFromTriggers()}this.removeAllTriggers();this._triggerKeys=null;
this._triggerEls=null;this._el=null};g._addCurrentClassToTriggers=function(){var p;
var o;for(p in this._triggerEls){o=this._triggerEls[p].length;while(o--){n.add(this._triggerEls[p][o],i)
}}};g._removeCurrentClassFromTriggers=function(){var p;var o;for(p in this._triggerEls){o=this._triggerEls[p].length;
while(o--){n.remove(this._triggerEls[p][o],i)}}};g._onKeyboardInteraction=function(o){if(this.isInView()){this._onTriggered(o)
}};g._onTriggered=function(o){k.preventDefault(o);this.trigger(d.SELECTED,{item:this,interactionEvent:o})
};b.exports=d},{"@marcom/ac-classlist":12,"@marcom/ac-dom-events":17,"@marcom/ac-dom-metrics":41,"@marcom/ac-event-emitter-micro":90,"@marcom/ac-keyboard":134,"@marcom/ac-keyboard/keyMap":136,"@marcom/ac-object/create":138}],252:[function(b,d,a){var i;
try{i=b("ac-analytics").observer.Gallery}catch(h){}var g="data-analytics-gallery-id";
function c(){this._observers={}}var f=c.prototype;f.add=function(j,l){var m=j.getId();
if(!i||this._observers[m]){return}l=l||{};if(!l.galleryName){l.galleryName=this._getAnalyticsId(j,l.dataAttribute)||m
}if(!l.beforeUpdateEvent){l.beforeUpdateEvent="update"}if(!l.afterUpdateEvent){l.afterUpdateEvent="update:complete"
}var k=new i(j,l);if(k.gallery){this._observers[m]=k}};f.remove=function(j){var k=j.getId();
if(!i||!this._observers[k]){return}if(typeof this._observers[k].destroy==="function"){this._observers[k].destroy()
}this._observers[k]=null};f._getAnalyticsId=function(j,k){if(typeof j.getElement==="function"){k=k||g;
var l=j.getElement();return l.getAttribute(k)||l.getAttribute("id")}return null
};d.exports=new c()},{"ac-analytics":"ac-analytics"}],253:[function(l,b,D){l("@marcom/ac-polyfills/requestAnimationFrame");
var o=l("@marcom/ac-object/create");var j=l("@marcom/ac-dom-metrics/utils/getBoundingClientRect");
var u=l("@marcom/ac-keyboard/keyMap");var A=l("./../helpers/selectElementFromDataAttributeValue");
var m=l("./../helpers/selectElementThatHasDataAttribute");var i=l("@marcom/ac-function/throttle");
var k=l("@marcom/ac-feature/touchAvailable");var a=l("@marcom/ac-classlist");var d=l("@marcom/ac-dom-events");
var B=l("@marcom/ac-dom-styles");var n=l("@marcom/ac-dom-traversal");var c=l("./../Item");
var r=l("./../Gallery");var f=l("@marcom/ac-keyboard");var w=l("@marcom/ac-page-visibility").PageVisibilityManager;
var h=l("./../helpers/PointerTracker");var t=l("./../navigation/ToggleNav");var y="disabled";
var x=3;var g=0.5;var v="[data-ac-gallery-item]";var z=0.12;var C="No element supplied.";
function p(H,G){G=G||{};if(!H||H.nodeType===undefined){throw new Error(C)}this._el=H;
r.call(this,G);this._itemHeights=[];this._itemHeightsLookup={};this._toggleNavDuration=G.toggleNavDuration;
this._isRightToLeft=(G.rightToLeft===undefined)?B.getStyle(H,"direction").direction==="rtl":G.rightToLeft;
this._keyboardThrottleDelay=((G.keyboardThrottleDelay===undefined)?z:G.keyboardThrottleDelay)*1000;
this._resizeContainer=!!G.resizeContainer;this._setUpContainerAutoResize(G.resizeContainerOnUpdate);
this._createToggleNav();this._addItems(G.itemSelector||v);this._addPaddleNav();
if(G.enableArrowKeys!==false){this._enableArrowKeys=true;this._addKeyboardListener()
}if(G.updateOnWindowResize!==false){this._onWindowResize=this._onWindowResize.bind(this);
d.addEventListener(window,"resize",this._onWindowResize)}this.stopAutoPlay=this.stopAutoPlay.bind(this);
if(G.autoPlay){var F=(typeof G.autoPlay==="number")?G.autoPlay:x;this.startAutoPlay(F)
}if(G.deeplink!==false){var I=this._getDeeplinkedItem();if(I&&I!==this._currentItem){this.show(I)
}}if(this._containerResizeDuration!==false){var E=this._itemHeightsLookup[this._currentItem.getElementId()];
if(E){this._setElHeight(E)}}if(this._toggleNav){this._toggleNav.start()}this._setUpSwiping(G.touch&&k(),G.desktopSwipe)
}p.RESIZED="resized";p.UPDATE=r.UPDATE;p.UPDATE_COMPLETE=r.UPDATE_COMPLETE;var q=r.prototype;
var s=p.prototype=o(q);s.addItem=function(F,E){if(F.nodeType){F=new this._itemType(F)
}else{if(this._items.indexOf(F)>-1){return F}}if(this._resizeContainer){this._storeItemHeight(F,this._containerResizeDuration===false)
}this._addItemTriggers(F);return q.addItem.call(this,F,E)};s.removeItem=function(G,F){if(this._resizeContainer){var E=this._itemHeights.length;
while(E--){if(this._itemHeights[E].item===G){this._itemHeights.splice(E,1);if(E===0&&this._itemHeights.length){this._setElHeight(this._itemHeights[0].height)
}}}}return q.removeItem.call(this,G,F)};s.startAutoPlay=function(F,E){E=E||{};this._isAutoPlaying=true;
this._autoPlayDelay=(F||x)*1000;this._cancelAutoPlayOnInteraction=(E.cancelOnInteraction===undefined)?true:E.cancelOnInteraction;
setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay);if(this._cancelAutoPlayOnInteraction){this.on(r.UPDATE,this.stopAutoPlay)
}};s.stopAutoPlay=function(){this._isAutoPlaying=false;if(this._cancelAutoPlayOnInteraction){this.off(r.UPDATE,this.stopAutoPlay)
}};s.getElement=function(){return this._el};s.getToggleNav=function(){return this._toggleNav||null
};s.resize=function(F,E){if(this._resizeContainer){this._itemHeights=[];var G=this._items.length;
while(G--){this._storeItemHeight(this._items[G],false)}this._setElHeight(this._itemHeights[0].height)
}if(this._toggleNav){this._toggleNav.resize()}this.trigger(p.RESIZED,this)};s.destroy=function(F){if(this._isAutoPlaying){this.stopAutoPlay()
}if(this._resizeContainer){B.setStyle(this._el,{height:null,transition:null})}if(this._enableArrowKeys){f.offDown(u.ARROW_RIGHT,this._rightArrowFunc);
f.offDown(u.ARROW_LEFT,this._leftArrowFunc)}var E;if(this._previousButtons){E=this._previousButtons.length;
while(E--){d.removeEventListener(this._previousButtons[E],"click",this._onPaddlePrevious)
}this._setPaddleDisabledState(this._previousButtons,false)}if(this._nextButtons){E=this._nextButtons.length;
while(E--){d.removeEventListener(this._nextButtons[E],"click",this._onPaddleNext)
}this._setPaddleDisabledState(this._nextButtons,false)}if(this._hasPaddleNavStateHandler){this.off(r.UPDATE,this._updatePaddleNavState)
}if(this._touchSwipe){this._touchSwipe.off(h.END,this._onSwipeEnd);this._touchSwipe.destroy();
this._touchSwipe=null}if(this._clickSwipe){this._clickSwipe.off(h.END,this._onSwipeEnd);
this._clickSwipe.destroy();this._clickSwipe=null}if(this._toggleNav){this._toggleNav.destroy();
this._toggleNav=null}d.removeEventListener(window,"resize",this._onWindowResize);
this._el=null;this._itemHeights=null;this._itemHeightsLookup=null;this._resizeContainer=null;
this._isRightToLeft=null;this._enableArrowKeys=null;this._previousButtons=null;
this._onPaddlePrevious=null;this._nextButtons=null;this._onPaddleNext=null;return q.destroy.call(this,F)
};s._getDeeplinkedItem=function(){var G=window.location.hash.substr(1);var F;var E=this._items.length;
while(E--){F=this._items[E];if(G===F.getElementId()){return F}}return null};s._addItems=function(F){var J;
var E;var H=/(^\[).*(\]$)/.test(F);if(H){F=F.replace(/\[|\]/g,"");E=m(F,this._el)
}else{E=n.querySelectorAll(F,this._el)}var G=0;var I=E.length;for(G;G<I;G++){J=new this._itemType(E[G]);
this.addItem(J);this._addItemTriggers(J)}};s._createToggleNav=function(){var E=n.querySelector('[data-ac-gallery-togglenav="'+this._getElementId()+'"]');
if(E){this._toggleNav=new t(E,this,{duration:this._toggleNavDuration})}};s._addItemTriggers=function(H){var F=A("data-ac-gallery-trigger",H.getElementId());
var E=0;var G=F.length;for(E;E<G;E++){H.addElementTrigger(F[E]);if(this._toggleNav){this._toggleNav.addTrigger(F[E],H)
}}};s._addPaddleNav=function(){var E;var F=this._getElementId();this._previousButtons=A("data-ac-gallery-previous-trigger",F);
this._nextButtons=A("data-ac-gallery-next-trigger",F);this._onPaddlePrevious=this._onPaddleInteraction.bind(null,this.showPrevious);
E=this._previousButtons.length;while(E--){d.addEventListener(this._previousButtons[E],"click",this._onPaddlePrevious)
}this._onPaddleNext=this._onPaddleInteraction.bind(null,this.showNext);E=this._nextButtons.length;
while(E--){d.addEventListener(this._nextButtons[E],"click",this._onPaddleNext)}if(!this._wrapAround&&(this._nextButtons.length||this._previousButtons.length)){this._hasPaddleNavStateHandler=true;
this._updatePaddleNavState=this._updatePaddleNavState.bind(this);this._updatePaddleNavState();
this.on(r.UPDATE,this._updatePaddleNavState)}};s._onPaddleInteraction=function(F,E){d.preventDefault(E);
F.call(null,{interactionEvent:E})};s._updatePaddleNavState=function(){var E=this._items.indexOf(this._currentItem);
if(E===0&&this._previousButtons.length){this._setPaddleDisabledState(this._previousButtons,true);
this._setPaddleDisabledState(this._nextButtons,false)}else{if(E===this._items.length-1&&this._nextButtons.length){this._setPaddleDisabledState(this._nextButtons,true);
this._setPaddleDisabledState(this._previousButtons,false)}else{this._setPaddleDisabledState(this._previousButtons,false);
this._setPaddleDisabledState(this._nextButtons,false)}}};s._setPaddleDisabledState=function(G,E){var F=G.length;
while(F--){G[F].disabled=E;if(E){a.add(G[F],y)}else{a.remove(G[F],y)}}};s._addKeyboardListener=function(){if(this._enableArrowKeys){this._onKeyboardInteraction=this._onKeyboardInteraction.bind(this);
var E;var F;if(this._isRightToLeft){E=this.showPrevious;F=this.showNext}else{E=this.showNext;
F=this.showPrevious}this._rightArrowFunc=i(this._onKeyboardInteraction.bind(null,E),this._keyboardThrottleDelay);
this._leftArrowFunc=i(this._onKeyboardInteraction.bind(null,F),this._keyboardThrottleDelay);
f.onDown(u.ARROW_RIGHT,this._rightArrowFunc);f.onDown(u.ARROW_LEFT,this._leftArrowFunc)
}};s._onKeyboardInteraction=function(G,F){if(this.isInView()){var E=r.getAllInView();
if(E.length>1){E.sort(function(I,H){I=(I._enableArrowKeys)?I.getCurrentItem().percentageInView():0;
H=(H._enableArrowKeys)?H.getCurrentItem().percentageInView():0;return H-I});if(this!==E[0]){return
}}G.call(null,{interactionEvent:F})}};s._setUpSwiping=function(F,E){this._onSwipeEnd=this._onSwipeEnd.bind(this);
if(F){this._touchSwipe=new h(this._el);this._touchSwipe.on(h.END,this._onSwipeEnd)
}if(E){this._clickSwipe=new h(this._el,{down:"mousedown",up:"mouseup",out:"mouseout",move:"mousemove"});
this._clickSwipe.on(h.END,this._onSwipeEnd)}};s._onSwipeEnd=function(E){var G;var F={interactionEvent:E.interactionEvent};
if(E.swipe===h.SWIPE_RIGHT){G=(this._isRightToLeft)?this.showPrevious:this.showNext
}else{if(E.swipe===h.SWIPE_LEFT){G=(this._isRightToLeft)?this.showNext:this.showPrevious
}}if(G){return G.call(this,F)}return null};s._getElementId=function(){if(this._elementId===undefined){this._elementId=this._el.getAttribute("id")
}return this._elementId};s._setUpContainerAutoResize=function(E){if(typeof E==="number"){this._containerResizeDuration=E
}else{if(E){this._containerResizeDuration=g}else{this._containerResizeDuration=false
}}if(this._containerResizeDuration!==false){this._resizeContainer=true;this._updateContainerSize=this._updateContainerSize.bind(this);
this.on(r.UPDATE,this._updateContainerSize)}};s._updateContainerSize=function(F){var E=this._itemHeightsLookup[F.incoming[0].getElementId()];
if(E){this._setElHeight(E,this._containerResizeDuration)}};s._storeItemHeight=function(F,G){var E=j(F.getElement());
this._itemHeights.push({item:F,height:E.height});this._itemHeightsLookup[F.getElementId()]=E.height;
this._itemHeights.sort(function(I,H){return H.height-I.height});if(G&&this._itemHeights[0].item===F){this._setElHeight(E.height)
}};s._setElHeight=function(E,G){var F={height:E+"px"};if(G){F.transition="height "+G+"s"
}else{F.transition=null}B.setStyle(this._el,F)};s._onAutoPlayToNextItem=function(){if(this._isAutoPlaying){if(!w.isHidden&&this._currentItem.isInView()){if(this._cancelAutoPlayOnInteraction){this.off(r.UPDATE,this.stopAutoPlay)
}var E=this.showNext();if(E!==null){if(this._cancelAutoPlayOnInteraction){this.on(r.UPDATE,this.stopAutoPlay)
}setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)}}else{setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)
}}};s._onWindowResize=function(E){window.requestAnimationFrame(function(){if(this._el){this.resize()
}}.bind(this))};b.exports=p},{"./../Gallery":250,"./../Item":251,"./../helpers/PointerTracker":258,"./../helpers/selectElementFromDataAttributeValue":260,"./../helpers/selectElementThatHasDataAttribute":261,"./../navigation/ToggleNav":262,"@marcom/ac-classlist":12,"@marcom/ac-dom-events":17,"@marcom/ac-dom-metrics/utils/getBoundingClientRect":43,"@marcom/ac-dom-styles":45,"@marcom/ac-dom-traversal":70,"@marcom/ac-feature/touchAvailable":128,"@marcom/ac-function/throttle":132,"@marcom/ac-keyboard":134,"@marcom/ac-keyboard/keyMap":136,"@marcom/ac-object/create":138,"@marcom/ac-page-visibility":148,"@marcom/ac-polyfills/requestAnimationFrame":161}],254:[function(c,b,d){var h=c("./create");
var j=c("./../helpers/selectElementThatHasDataAttribute");var i=c("./../Gallery");
var a=i.FADE_SELECTOR.replace(/\[|\]/g,"");var g=i.SLIDE_SELECTOR.replace(/\[|\]/g,"");
b.exports=function f(l){l=l||{};var m=l.context||document.body;var n;var k;n=j(g,m);
k=n.length;while(k--){h(n[k],i.SLIDE,l)}n=j(a,m);k=n.length;while(k--){h(n[k],i.FADE,l)
}return i.getAll()}},{"./../Gallery":250,"./../helpers/selectElementThatHasDataAttribute":261,"./create":255}],255:[function(d,b,f){var i=d("./../fade/FadeGallery");
var k=d("./../Gallery");var c=d("./../slide/SlideGallery");var j="%TYPE% is not a supported gallery type and el has no gallery data attribute.";
var a=k.FADE_SELECTOR.replace(/\[|\]/g,"");var h=k.SLIDE_SELECTOR.replace(/\[|\]/g,"");
b.exports=function g(o,n,m){var l;if(typeof n==="string"){if(n===k.SLIDE){l=c}else{if(n===k.FADE){l=i
}}}if(l===undefined){if(o.getAttribute(h)!==null){l=c}else{if(o.getAttribute(a)!==null){l=i
}}}if(l===undefined){throw new Error(j.replace(/%TYPE%/g,n))}return new l(o,m)}
},{"./../Gallery":250,"./../fade/FadeGallery":256,"./../slide/SlideGallery":263}],256:[function(c,a,f){var l=c("@marcom/ac-object/clone");
var h=c("@marcom/ac-object/create");var k=c("@marcom/ac-dom-traversal");var d=c("./FadeItem");
var b=c("./../auto/AutoGallery");var m=0.5;function j(o,n){n=l(n)||{};n.itemType=n.itemType||d;
this._fadeDuration=n.duration||m;n.toggleNavDuration=(n.toggleNavDuration===undefined)?this._fadeDuration:n.toggleNavDuration;
this._crossFade=n.crossFade;this._zIndexCount=n.startZIndex||1;this._ease=n.ease;
if(n.resizeContainerOnUpdate===true){n.resizeContainerOnUpdate=this._fadeDuration
}this._onItemShowComplete=this._onItemShowComplete.bind(this);b.call(this,o,n);
this._currentItem.fadeIn(0)}j.RESIZED=b.RESIZED;j.UPDATE=b.UPDATE;j.UPDATE_COMPLETE=b.UPDATE_COMPLETE;
var i=b.prototype;var g=j.prototype=h(i);g.addItem=function(p,n){if(p.nodeType){p=new this._itemType(p)
}var o=i.addItem.call(this,p,n);if(p!==this._currentItem){p.fadeOut()}return o};
g.destroy=function(n){var o=i.destroy.call(this,n);this._fadeDuration=null;this._crossFade=null;
this._zIndexCount=null;this._ease=null;this._onItemShowComplete=null;return o};
g._onItemShowComplete=function(p){if(p&&p.target()!==this._currentItem.getElement()){if(!this._currentItem.isFading()){this._currentItem.fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,this._onItemShowComplete)
}return}var o;var n=this._items.length;while(n--){o=this._items[n];if(o!==this._currentItem){o.fadeOut()
}}if(this._incomingOutgoingItems){this.trigger(j.UPDATE_COMPLETE,this._incomingOutgoingItems)
}};g._updateItems=function(o,n){if(n){return}if(this._crossFade){var p=(n)?null:this.trigger.bind(this,j.UPDATE_COMPLETE,o);
o.outgoing[0].fadeOut(this._fadeDuration*0.99,this._ease);o.incoming[0].fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,p)
}else{this._incomingOutgoingItems=(n)?false:o;if(!o.outgoing[0].isFading()){o.incoming[0].fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,this._onItemShowComplete)
}}o.outgoing[0].hide();o.incoming[0].show()};a.exports=j},{"./../auto/AutoGallery":253,"./FadeItem":257,"@marcom/ac-dom-traversal":70,"@marcom/ac-object/clone":137,"@marcom/ac-object/create":138}],257:[function(b,a,g){var j=b("@marcom/ac-object/create");
var f=b("@marcom/ac-solar/fade");var l=b("@marcom/ac-solar/fadeIn");var i=b("@marcom/ac-solar/fadeOut");
var m=b("@marcom/ac-dom-styles");var d=b("./../Item");function c(n){d.call(this,n);
m.setStyle(n,{position:"absolute"})}c.SELECTED=d.SELECTED;c.SHOW=d.SHOW;c.HIDE=d.HIDE;
var k=d.prototype;var h=c.prototype=j(k);h.fadeIn=function(n,o,q,p){if(n){m.setStyle(this._el,{zIndex:q||1});
this._destroyCurrentClip();this._clip=f(this._el,0,1,n,{ease:o,onComplete:p})}else{l(this._el,0);
m.setStyle(this._el,{zIndex:q||1})}};h.fadeOut=function(n,o){if(n){this._destroyCurrentClip();
this._clip=i(this._el,n,{ease:o})}else{i(this._el,0)}};h.isFading=function(){return !!(this._clip&&this._clip.playing())
};h.destroy=function(){m.setStyle(this._el,{position:null,opacity:null,zIndex:null});
k.destroy.call(this);this._destroyCurrentClip();this._clip=null};h._destroyCurrentClip=function(){if(this.isFading()){this._clip.destroy()
}};a.exports=c},{"./../Item":251,"@marcom/ac-dom-styles":45,"@marcom/ac-object/create":138,"@marcom/ac-solar/fade":242,"@marcom/ac-solar/fadeIn":243,"@marcom/ac-solar/fadeOut":244}],258:[function(b,a,d){var h=b("@marcom/ac-object/create");
var k=b("@marcom/ac-browser").os==="Android";var f=b("@marcom/ac-browser").name==="IE"&&b("@marcom/ac-browser").version<=8;
var j=b("@marcom/ac-dom-events");var m=b("@marcom/ac-dom-styles");var l=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
function c(n,o){this._el=n;this._pointerEvents=o||{};this._pointerEvents.down=this._pointerEvents.down||"touchstart";
this._pointerEvents.up=this._pointerEvents.up||"touchend";this._pointerEvents.out=this._pointerEvents.out||"mouseout";
this._pointerEvents.move=this._pointerEvents.move||"touchmove";this._onMouseDown=this._onMouseDown.bind(this);
this._onMouseUp=this._onMouseUp.bind(this);this._onMouseOut=this._onMouseOut.bind(this);
this._onMouseMove=this._onMouseMove.bind(this);l.call(this);j.addEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
this._setCursorStyle("grab")}c.START="start";c.END="end";c.UPDATE="update";c.SWIPE_RIGHT="swiperight";
c.SWIPE_LEFT="swipeleft";c.THRESHOLD=(k||f)?2:8;var i=l.prototype;var g=c.prototype=h(i);
g.destroy=function(){if(this._isDragging){this._onMouseUp()}j.removeEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
this._setCursorStyle(null);this._el=null;this._pointerEvents=null;this._lastX=null;
this._velocityX=null;return i.destroy.call(this)};g._onMouseDown=function(n){if(this._isDragging){return
}this._isDragging=true;this._setCursorStyle("grabbing");j.removeEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
j.addEventListener(document.body,this._pointerEvents.up,this._onMouseUp);j.addEventListener(document,this._pointerEvents.out,this._onMouseOut);
j.addEventListener(document.body,this._pointerEvents.move,this._onMouseMove);this._checkForTouchScrollY=!!(n.touches&&n.touches[0]);
if(this._checkForTouchScrollY){this._lastY=this._getTouchY(n)}this._lastX=this._getPointerX(n);
this._velocityX=0;this.trigger(c.START,{diff:0,interactionEvent:n})};g._onMouseUp=function(n){if(!this._isDragging){return
}this._isDragging=false;this._setCursorStyle("grab");j.addEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
j.removeEventListener(document.body,this._pointerEvents.up,this._onMouseUp);j.removeEventListener(document,this._pointerEvents.out,this._onMouseOut);
j.removeEventListener(document.body,this._pointerEvents.move,this._onMouseMove);
var o=null;if(this._velocityX>c.THRESHOLD){o=c.SWIPE_RIGHT}else{if((this._velocityX*-1)>c.THRESHOLD){o=c.SWIPE_LEFT
}}this.trigger(c.END,{diff:this._velocityX,swipe:o,interactionEvent:n})};g._onMouseOut=function(n){n=n?n:window.event;
var o=n.relatedTarget||n.toElement;if(!o||o.nodeName==="HTML"){this._onMouseUp(n)
}};g._onMouseMove=function(n){var o=this._getPointerX(n);if(this._checkForTouchScrollY&&this._isVerticalTouchMove(o,this._getTouchY(n))){this._onMouseUp(n);
return}j.preventDefault(n);this._velocityX=this._lastX-o;this._lastX=o;this.trigger(c.UPDATE,{diff:this._velocityX,interactionEvent:n})
};g._getPointerX=function(n){if(n.pageX){return n.pageX}else{if(n.touches&&n.touches[0]){return n.touches[0].pageX
}else{if(n.clientX){return n.clientX}}}return 0};g._getTouchY=function(n){if(n.touches&&n.touches[0]){return n.touches[0].pageY
}return 0};g._isVerticalTouchMove=function(n,q){var p=Math.abs(n-this._lastX);var o=Math.abs(q-this._lastY);
this._checkForTouchScrollY=(p<o);return this._checkForTouchScrollY};g._setCursorStyle=function(n){m.setStyle(this._el,{cursor:n})
};a.exports=c},{"@marcom/ac-browser":1,"@marcom/ac-dom-events":17,"@marcom/ac-dom-styles":45,"@marcom/ac-event-emitter-micro":90,"@marcom/ac-object/create":138}],259:[function(c,f,b){var d=c("@marcom/ac-object/create");
var g=c("@marcom/ac-object/extend");f.exports=function a(k){var j=this;var i=function(){j.apply(this,arguments)
};var h=d(this.prototype);i.prototype=g(h,k);g(i,this);return i}},{"@marcom/ac-object/create":138,"@marcom/ac-object/extend":140}],260:[function(d,g,b){var c=d("@marcom/ac-dom-traversal");
var a=function(i,n){var j;var m=document.getElementsByTagName("*");var h=0;var k=m.length;
var l=[];for(h;h<k;h++){j=m[h];if(j.getAttribute(i)!==null&&j.getAttribute(i).split(" ").indexOf(n)>-1){l[l.length]=j
}}return l};g.exports=function f(j,m){var l=c.querySelectorAll("["+j+'*="'+m+'"]');
if(l.length===0&&document.documentMode===7){return a(j,m)}var n=[];var i=0;var k=l.length;
var h;for(i;i<k;i++){h=l[i].getAttribute(j);if(h===m){n.push(l[i])}else{if(h&&h.length){h=h.split(" ");
if(h.indexOf(m)>-1){n.push(l[i])}}}}return n}},{"@marcom/ac-dom-traversal":70}],261:[function(d,f,b){var c=d("@marcom/ac-dom-traversal");
var a=function(i,j){var k;var n=document.getElementsByTagName("*");var h=0;var l=n.length;
var m=[];for(h;h<l;h++){k=n[h];if(k.getAttribute(i)!==null&&(!j||c.ancestors(k).indexOf(j)>-1)){m[m.length]=k
}}return m};f.exports=function g(h,i){i=i||document.body;var j=c.querySelectorAll("["+h+"]",i);
if(j.length===0&&document.documentMode===7){return a(h,i)}return j}},{"@marcom/ac-dom-traversal":70}],262:[function(c,a,d){var g=c("@marcom/ac-object/create");
var o=c("@marcom/ac-solar/scrollX");var j=c("@marcom/ac-dom-events");var m=c("@marcom/ac-dom-metrics");
var p=c("@marcom/ac-dom-styles");var i=c("@marcom/ac-dom-traversal");var n=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var l=c("./../Gallery");var k=0.5;function b(s,q,r){r=r||{};this._el=s;this._gallery=q;
this._triggers={};this._ordered=[];this._containerEl=this._el.children[0];this._slideDuration=(r.duration===undefined)?k:r.duration;
n.call(this)}var h=n.prototype;var f=b.prototype=g(h);f.start=function(){this._onWindowLoad=this._onWindowLoad.bind(this);
this._onGalleryUpdated=this._onGalleryUpdated.bind(this);this._gallery.on(l.UPDATE,this._onGalleryUpdated);
this.resize();j.addEventListener(window,"load",this._onWindowLoad)};f.addTrigger=function(r,s){if(this._triggers[s.getElementId()]!==undefined){return
}var q=i.ancestors(r);if(q.indexOf(this._el)>-1){var t={el:r};this._triggers[s.getElementId()]=t;
this._ordered.push(t)}};f.resize=function(){if(!this._ordered.length){return}p.setStyle(this._containerEl,{paddingLeft:null,paddingRight:null});
this._containerWidth=m.getDimensions(this._containerEl).width;this._width=m.getDimensions(this._el).width;
this._viewCenter=Math.round(this._width*0.5);var s=this._ordered.length;while(s--){this._setTriggerData(this._ordered[s])
}this._ordered.sort(function(x,w){return x.left-w.left});if(this._containerWidth>this._width){var u=this._ordered[0];
var t=this._ordered[this._ordered.length-1];var r=(this._width-u.width)*0.5;var v=(this._width-t.width)*0.5;
p.setStyle(this._containerEl,{paddingLeft:r+"px",paddingRight:v+"px"});var q=this._triggers[this._gallery.getCurrentItem().getElementId()];
if(q){this._centerNav(q)}}};f.destroy=function(){this._gallery.off(l.UPDATE,this._onGalleryUpdated);
j.removeEventListener(window,"load",this._onWindowLoad);p.setStyle(this._containerEl,{paddingLeft:null,paddingRight:null});
this._el=null;this._gallery=null;this._triggers=null;this._ordered=null;this._containerEl=null;
this._destroyCurrentClip();this._clip=null;return h.destroy.call(this)};f._onWindowLoad=function(){j.removeEventListener(window,"load",this._onWindowLoad);
this.resize()};f._setTriggerData=function(r){r.width=m.getDimensions(r.el).width;
var q=m.getPosition(r.el);r.left=q.left;r.right=q.right;r.center=r.left+(r.width*0.5)
};f._centerNav=function(q,s){this._setTriggerData(q);this._width=m.getDimensions(this._el).width;
this._viewCenter=Math.round(this._width*0.5);var r=Math.round(q.center-this._viewCenter);
this._destroyCurrentClip();if(s){this._clip=o(this._el,r,s)}else{this._el.scrollLeft=o
}};f._onGalleryUpdated=function(q){var r=this._triggers[q.incoming[0].getElementId()];
if(r){this._centerNav(r,this._slideDuration)}};f._destroyCurrentClip=function(){if(this._clip&&this._clip.playing()){this._clip.destroy()
}};a.exports=b},{"./../Gallery":250,"@marcom/ac-dom-events":17,"@marcom/ac-dom-metrics":41,"@marcom/ac-dom-styles":45,"@marcom/ac-dom-traversal":70,"@marcom/ac-event-emitter-micro":90,"@marcom/ac-object/create":138,"@marcom/ac-solar/scrollX":248}],263:[function(f,b,s){var q=f("@marcom/ac-object/clone");
var h=f("@marcom/ac-object/create");var d=f("@marcom/ac-dom-metrics/utils/getBoundingClientRect");
var l=f("@marcom/ac-solar/moveX");var j=f("./../auto/AutoGallery");var p=f("@marcom/ac-classlist");
var r=f("@marcom/ac-dom-styles");var g=f("@marcom/ac-dom-traversal");var c=f("./../helpers/PointerTracker");
var o=f("./SlideItem");var a=0.5;var i=0.5;function n(v,u){u=q(u)||{};u.itemType=u.itemType||o;
var t=u.deeplink!==false;u.deeplink=false;this._slideDuration=(u.duration!==undefined)?u.duration:i;
u.toggleNavDuration=(u.toggleNavDuration===undefined)?this._slideDuration:u.toggleNavDuration;
this._itemCenterPoint=(u.itemCenterPoint!==undefined)?u.itemCenterPoint:a;this._slideOptions={ease:u.ease};
if(u.resizeContainerOnUpdate===true){u.resizeContainerOnUpdate=this._slideDuration
}u.touch=u.touch!==false;j.call(this,v,u);if(t){var w=this._getDeeplinkedItem();
if(w){if(this._currentItem!==w){this._currentItem.hide();this._setCurrentItem(w);
this._currentItem.show()}}}this._positionItems=this._positionItems.bind(this);this._createContainer();
this._positionItems()}n.RESIZED=j.RESIZED;n.UPDATE=j.UPDATE;n.UPDATE_COMPLETE=j.UPDATE_COMPLETE;
var k=j.prototype;var m=n.prototype=h(k);m.addItem=function(v,t){if(v.nodeType){v=new this._itemType(v)
}var u=k.addItem.call(this,v,t);if(this._containerEl!==undefined){this._addItemToContainer(v);
this._positionItems()}return u};m.removeItem=function(v,t){if(this._containerEl&&v.getElement().parentElement===this._containerEl){v.getOriginalParentElement().appendChild(v.getElement());
var u=k.removeItem.call(this,v,t);if(this._currentItem){this._positionItems(this._currentItem)
}return u}return k.removeItem.call(this,v,t)};m.resize=function(){this._positionItems();
this._snapToPosition(this._currentItem.position());return k.resize.call(this)};
m.destroy=function(u){this._destroyCurrentClip();this._clip=null;var t=this._items.length;
while(t--){this._items[t].off(o.CENTER_POINT_CHANGED,this._positionItems)}if(this._touchSwipe){this._touchSwipe.off(c.START,this._onSwipeStart);
this._touchSwipe.off(c.UPDATE,this._onSwipeUpdate)}if(this._clickSwipe){this._clickSwipe.off(c.START,this._onSwipeStart);
this._clickSwipe.off(c.UPDATE,this._onSwipeUpdate)}var w=this._el;var v=k.destroy.call(this,u);
w.removeChild(this._containerEl);this._containerEl=null;this._slideDuration=null;
this._itemCenterPoint=null;this._positionItems=null;this._slideOptions=null;return v
};m._createContainer=function(){this._containerEl=document.createElement("div");
p.add(this._containerEl,"ac-gallery-slidecontainer");r.setStyle(this._containerEl,{position:"absolute",left:"0",top:"0",width:"100%",height:"100%"});
this._el.appendChild(this._containerEl);var u;var t=this._items.length;while(t--){this._addItemToContainer(this._items[t])
}};m._addItemToContainer=function(t){this._containerEl.appendChild(t.getElement());
t.on(o.CENTER_POINT_CHANGED,this._positionItems)};m._positionItems=function(x){x=x||this._currentItem;
var B=this._items;if(this._wrapAround){B=this._shuffleItems()}var D=(this._getActualPositionX()-x.position())||0;
var C=parseInt(r.getStyle(this._el,"width").width,10);var u=0;var z=0;var w=B.length;
var E;var v;var t;var y;var A;for(z;z<w;z++){E=B[z];v=E.getElement();r.setStyle(v,{left:u+"px"});
t=this._getItemFullWidth(v);y=C-t;A=(E.centerPoint&&E.centerPoint()!==null)?E.centerPoint():this._itemCenterPoint;
E.position((u*-1)+(y*A));if(this._isRightToLeft){u-=t}else{u+=t}}u=x.position()+D;
this._snapToPosition(u)};m._getItemFullWidth=function(t){var u=r.getStyle(t,"margin-right","margin-left");
return Math.round(d(t).width)+parseInt(u.marginRight,10)+parseInt(u.marginLeft,10)
};m._getActualPositionX=function(){var u=r.getStyle(this._containerEl,"transform").transform;
if(!u||u==="none"){var v=r.getStyle(this._containerEl,"left").left;return parseInt(v,10)
}else{if(u===this._transformStyles&&this._actualPositionX!==undefined){return this._actualPositionX
}}this._transformStyles=u;var t=this._transformStyles.split(",");this._actualPositionX=t[4]||this._currentItem.position();
return this._actualPositionX*1};m._snapToPosition=function(t){this._destroyCurrentClip();
this._positionX=t;r.setStyle(this._containerEl,{transition:"transform 0s, left 0s"});
l(this._containerEl,t,0,this._slideOptions)};m._slideToPosition=function(t,u,v){this._positionX=t;
this._clip=l(this._containerEl,t,u,{ease:this._slideOptions.ease,onComplete:v})
};m._setUpSwiping=function(u,t){var v=k._setUpSwiping.call(this,u,t);this._onSwipeStart=this._onSwipeStart.bind(this);
this._onSwipeUpdate=this._onSwipeUpdate.bind(this);if(this._touchSwipe){this._touchSwipe.on(c.START,this._onSwipeStart);
this._touchSwipe.on(c.UPDATE,this._onSwipeUpdate)}if(this._clickSwipe){this._clickSwipe.on(c.START,this._onSwipeStart);
this._clickSwipe.on(c.UPDATE,this._onSwipeUpdate)}return v};m._onSwipeStart=function(t){if(this._clip&&this._clip.playing()){this._destroyCurrentClip();
this._positionX=this._getActualPositionX()}};m._onSwipeUpdate=function(t){this._destroyCurrentClip();
this._snapToPosition(this._positionX-t.diff)};m._onSwipeEnd=function(t){var u=k._onSwipeEnd.call(this,t);
if(u===null){u=this.show(this._currentItem,{interactionEvent:t.interactionEvent})
}return u};m._shuffleItems=function(){var z=this._items.length;var u=this._items.indexOf(this._currentItem);
var y=Math.floor(z*0.5);var w;var t;var v;if(u<y){w=y-u;var x=z-w;t=this._items.slice(x);
v=this._items.slice(0,x);return t.concat(v)}else{if(u>y){w=u-y;t=this._items.slice(0,w);
v=this._items.slice(w);return v.concat(t)}}return this._items};m._updateItems=function(u,t){this._destroyCurrentClip();
if(this._wrapAround){this._positionItems(u.outgoing[0])}if(this.getItemIndex(u.outgoing[0])>-1){var w=(t)?null:this.trigger.bind(this,n.UPDATE_COMPLETE,u);
var v=this._slideDuration;this._slideToPosition(u.incoming[0].position(),v,w);if(u.incoming[0]!==u.outgoing[0]){u.incoming[0].show();
u.outgoing[0].hide()}}else{this._slideToPosition(this._currentItem.position(),this._slideDuration);
u.incoming[0].show();if(!t){this.trigger(n.UPDATE_COMPLETE,u)}}};m._destroyCurrentClip=function(){if(this._clip&&this._clip.playing()){this._clip.destroy()
}};b.exports=n},{"./../auto/AutoGallery":253,"./../helpers/PointerTracker":258,"./SlideItem":264,"@marcom/ac-classlist":12,"@marcom/ac-dom-metrics/utils/getBoundingClientRect":43,"@marcom/ac-dom-styles":45,"@marcom/ac-dom-traversal":70,"@marcom/ac-object/clone":137,"@marcom/ac-object/create":138,"@marcom/ac-solar/moveX":246}],264:[function(b,a,d){var g=b("@marcom/ac-object/create");
var j=b("@marcom/ac-dom-styles");var c=b("./../Item");function i(k){c.call(this,k);
j.setStyle(k,{position:"absolute",transform:{translateZ:0}});this._parentElement=k.parentElement
}i.CENTER_POINT_CHANGED="centerpointchanged";i.SELECTED=c.SELECTED;i.SHOW=c.SHOW;
i.HIDE=c.HIDE;var h=c.prototype;var f=i.prototype=g(h);f.position=function(k){if(k!==undefined){this._position=k
}return this._position||0};f.centerPoint=function(k){if(k!==undefined){this._centerPoint=k;
this.trigger(i.CENTER_POINT_CHANGED)}return(this._centerPoint!==undefined)?this._centerPoint:null
};f.getOriginalParentElement=function(){return this._parentElement};f.destroy=function(){j.setStyle(this._el,{position:null,left:null});
h.destroy.call(this)};a.exports=i},{"./../Item":251,"@marcom/ac-dom-styles":45,"@marcom/ac-object/create":138}],265:[function(b,c,a){if(!Array.prototype.filter){Array.prototype.filter=function d(l,k){var j=Object(this);
var f=j.length>>>0;var h;var g=[];if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}for(h=0;h<f;h+=1){if(h in j&&l.call(k,j[h],h,j)){g.push(j[h])}}return g}}},{}],266:[function(b,c,a){if(!Array.prototype.some){Array.prototype.some=function d(k,j){var g=Object(this);
var f=g.length>>>0;var h;if(typeof k!=="function"){throw new TypeError(k+" is not a function")
}for(h=0;h<f;h+=1){if(h in g&&k.call(j,g[h],h,g)===true){return true}}return false
}}},{}],267:[function(b,c,a){var f=b("@marcom/ac-gallery").Gallery;var d=(function(){return{initialize:function(){this.initializeGallery();
return this},initializeGallery:function(){f.autoCreate({touch:true,resizeContainer:true})
}}}());c.exports=d.initialize()},{"@marcom/ac-gallery":249}]},{},[267]);