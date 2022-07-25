(function e(h,j,l){function m(a,c){if(!j[a]){if(!h[a]){var d=typeof require=="function"&&require;
if(!c&&d){return d(a,!0)}if(i){return i(a,!0)}var b=new Error("Cannot find module '"+a+"'");
throw b.code="MODULE_NOT_FOUND",b}var f=j[a]={exports:{}};h[a][0].call(f.exports,function(g){var n=h[a][1][g];
return m(n?n:g)},f,f.exports,e,h,j,l)}return j[a].exports}var i=typeof require=="function"&&require;
for(var k=0;k<l.length;k++){m(l[k])}return m})({1:[function(p,r,o){var n=p("./utils/eventTypeAvailable");
var k=p("./shared/camelCasedEventTypes");var q=p("./shared/windowFallbackEventTypes");
var m=p("./shared/prefixHelper");var s={};r.exports=function l(a,b){var f;var d;
var c;b=b||"div";a=a.toLowerCase();if(!(b in s)){s[b]={}}d=s[b];if(a in d){return d[a]
}if(n(a,b)){return d[a]=a}if(a in k){for(c=0;c<k[a].length;c++){f=k[a][c];if(n(f.toLowerCase(),b)){return d[a]=f
}}}for(c=0;c<m.evt.length;c++){f=m.evt[c]+a;if(n(f,b)){m.reduce(c);return d[a]=f
}}if(b!=="window"&&q.indexOf(a)){return d[a]=l(a,"window")}return d[a]=false}},{"./shared/camelCasedEventTypes":2,"./shared/prefixHelper":3,"./shared/windowFallbackEventTypes":4,"./utils/eventTypeAvailable":5}],2:[function(d,g,f){g.exports={transitionend:["webkitTransitionEnd","MSTransitionEnd"],animationstart:["webkitAnimationStart","MSAnimationStart"],animationend:["webkitAnimationEnd","MSAnimationEnd"],animationiteration:["webkitAnimationIteration","MSAnimationIteration"],fullscreenchange:["MSFullscreenChange"],fullscreenerror:["MSFullscreenError"]}
},{}],3:[function(j,p,k){var l=["-webkit-","-moz-","-ms-"];var o=["Webkit","Moz","ms"];
var m=["webkit","moz","ms"];var q=function(){this.initialize()};var n=q.prototype;
n.initialize=function(){this.reduced=false;this.css=l;this.dom=o;this.evt=m};n.reduce=function(a){if(!this.reduced){this.reduced=true;
this.css=[this.css[a]];this.dom=[this.dom[a]];this.evt=[this.evt[a]]}};p.exports=new q()
},{}],4:[function(d,g,f){g.exports=["transitionend","animationstart","animationend","animationiteration",]
},{}],5:[function(k,i,g){var h={window:window,document:document};i.exports=function j(a,c){var b;
a="on"+a;if(!(c in h)){h[c]=document.createElement(c)}b=h[c];if(a in b){return true
}if("setAttribute" in b){b.setAttribute(a,"return;");return(typeof b[a]==="function")
}return false}},{}],6:[function(k,j,g){var h=k("./shared/getEventType");j.exports=function i(a,c,b,d){c=h(a,c);
d=d||false;a.addEventListener(c,b,d)}},{"./shared/getEventType":7}],7:[function(k,i,g){var j=k("@marcom/ac-prefixer/getEventType");
i.exports=function h(a,b){var c;var d;if("tagName" in a){c=a.tagName}else{if(a===window){c="window"
}else{c="document"}}d=j(b,c);return d||b}},{"@marcom/ac-prefixer/getEventType":1}],8:[function(k,j,g){var h=function(){var a="";
var b;for(b=0;b<arguments.length;b++){if(b>0){a+=","}a+=arguments[b]}return a};
j.exports=function i(a,b){b=b||h;var c=function(){var f=arguments;var d=b.apply(this,f);
if(!(d in c.cache)){c.cache[d]=a.apply(this,f)}return c.cache[d]};c.cache={};return c
}},{}],9:[function(f,i,g){i.exports=function h(a){var b;return function(){if(typeof b==="undefined"){b=a.apply(this,arguments)
}return b}}},{}],10:[function(d,g,f){
/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
(function(){if(window.matchMedia&&window.matchMedia("all").addListener){return false
}var b=window.matchMedia,m=b("only all").matches,c=false,a=0,k=[],l=function(h){clearTimeout(a);
a=setTimeout(function(){for(var u=0,i=k.length;u<i;u++){var j=k[u].mql,t=k[u].listeners||[],s=b(j.media).matches;
if(s!==j.matches){j.matches=s;for(var w=0,v=t.length;w<v;w++){t[w].call(window,j)
}}}},30)};window.matchMedia=function(o){var j=b(o),h=[],i=0;j.addListener=function(n){if(!m){return
}if(!c){c=true;window.addEventListener("resize",l,true)}if(i===0){i=k.push({mql:j,listeners:h})
}h.push(n)};j.removeListener=function(n){for(var r=0,s=h.length;r<s;r++){if(h[r]===n){h.splice(r,1)
}}};return j}}())},{}],11:[function(d,g,f){
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
window.matchMedia||(window.matchMedia=function(){var c=(window.styleMedia||window.media);
if(!c){var b=document.createElement("style"),i=document.getElementsByTagName("script")[0],a=null;
b.type="text/css";b.id="matchmediajs-test";i.parentNode.insertBefore(b,i);a=("getComputedStyle" in window)&&window.getComputedStyle(b,null)||b.currentStyle;
c={matchMedium:function(k){var h="@media "+k+"{ #matchmediajs-test { width: 1px; } }";
if(b.styleSheet){b.styleSheet.cssText=h}else{b.textContent=h}return a.width==="1px"
}}}return function(h){return{matches:c.matchMedium(h||"all"),media:h||"all"}}}())
},{}],12:[function(d,g,f){d("matchmedia-polyfill");d("matchmedia-polyfill/matchMedia.addListener")
},{"matchmedia-polyfill":11,"matchmedia-polyfill/matchMedia.addListener":10}],13:[function(d,g,f){arguments[4][1][0].apply(f,arguments)
},{"./shared/camelCasedEventTypes":16,"./shared/prefixHelper":18,"./shared/windowFallbackEventTypes":21,"./utils/eventTypeAvailable":22,dup:1}],14:[function(q,r,o){var u=q("./shared/stylePropertyCache");
var n=q("./shared/getStyleTestElement");var t=q("./utils/toCSS");var l=q("./utils/toDOM");
var m=q("./shared/prefixHelper");var s=function(c,b){var a=t(c);var d=(b===false)?false:t(b);
u[c]=u[b]=u[a]=u[d]={dom:b,css:d};return b};r.exports=function p(c){var f;var b;
var d;var a;c+="";if(c in u){return u[c].dom}d=n();c=l(c);b=c.charAt(0).toUpperCase()+c.substring(1);
if(c==="filter"){f=["WebkitFilter","filter"]}else{f=(c+" "+m.dom.join(b+" ")+b).split(" ")
}for(a=0;a<f.length;a++){if(typeof d.style[f[a]]!=="undefined"){if(a!==0){m.reduce(a-1)
}return s(c,f[a])}}return s(c,false)}},{"./shared/getStyleTestElement":17,"./shared/prefixHelper":18,"./shared/stylePropertyCache":19,"./utils/toCSS":23,"./utils/toDOM":24}],15:[function(t,v,q){var s=t("./getStyleProperty");
var n=t("./shared/styleValueAvailable");var o=t("./shared/prefixHelper");var w=t("./shared/stylePropertyCache");
var p={};var m=/(\([^\)]+\))/gi;var r=/([^ ,;\(]+(\([^\)]+\))?)/gi;v.exports=function u(b,c){var a;
c+="";b=s(b);if(!b){return false}if(n(b,c)){return c}a=w[b].css;c=c.replace(r,function(h){var i;
var d;var f;var g;if(h[0]==="#"||!isNaN(h[0])){return h}d=h.replace(m,"");f=a+":"+d;
if(f in p){if(p[f]===false){return""}return h.replace(d,p[f])}i=o.css.map(function(j){return j+h
});i=[h].concat(i);for(g=0;g<i.length;g++){if(n(b,i[g])){if(g!==0){o.reduce(g-1)
}p[f]=i[g].replace(m,"");return i[g]}}p[f]=false;return""});c=c.trim();return(c==="")?false:c
}},{"./getStyleProperty":14,"./shared/prefixHelper":18,"./shared/stylePropertyCache":19,"./shared/styleValueAvailable":20}],16:[function(d,g,f){arguments[4][2][0].apply(f,arguments)
},{dup:2}],17:[function(k,j,g){var i;j.exports=function h(){if(!i){i=document.createElement("_")
}else{i.style.cssText="";i.removeAttribute("style")}return i};j.exports.resetElement=function(){i=null
}},{}],18:[function(d,g,f){arguments[4][3][0].apply(f,arguments)},{dup:3}],19:[function(d,g,f){g.exports={}
},{}],20:[function(s,t,r){var u=s("./stylePropertyCache");var q=s("./getStyleTestElement");
var n=false;var l;var m;var p=function(){var b;if(!n){n=true;l=("CSS" in window&&"supports" in window.CSS);
m=false;b=q();try{b.style.width="invalid"}catch(a){m=true}}};t.exports=function o(d,f){var a;
var b;p();if(l){d=u[d].css;return CSS.supports(d,f)}b=q();a=b.style[d];if(m){try{b.style[d]=f
}catch(c){return false}}else{b.style[d]=f}return(b.style[d]&&b.style[d]!==a)};t.exports.resetFlags=function(){n=false
}},{"./getStyleTestElement":17,"./stylePropertyCache":19}],21:[function(d,g,f){arguments[4][4][0].apply(f,arguments)
},{dup:4}],22:[function(d,g,f){arguments[4][5][0].apply(f,arguments)},{dup:5}],23:[function(k,j,g){var i=/^(webkit|moz|ms)/gi;
j.exports=function h(a){var b;if(a.toLowerCase()==="cssfloat"){return"float"}if(i.test(a)){a="-"+a
}return a.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],24:[function(g,k,h){var i=/-([a-z])/g;k.exports=function j(a){var b;if(a.toLowerCase()==="float"){return"cssFloat"
}a=a.replace(i,function(c,d){return d.toUpperCase()});if(a.substr(0,2)==="Ms"){a="ms"+a.substring(2)
}return a}},{}],25:[function(d,g,f){g.exports={canvasAvailable:d("./canvasAvailable"),continuousScrollEventsAvailable:d("./continuousScrollEventsAvailable"),cookiesAvailable:d("./cookiesAvailable"),cssLinearGradientAvailable:d("./cssLinearGradientAvailable"),cssPropertyAvailable:d("./cssPropertyAvailable"),cssViewportUnitsAvailable:d("./cssViewportUnitsAvailable"),elementAttributeAvailable:d("./elementAttributeAvailable"),eventTypeAvailable:d("./eventTypeAvailable"),isDesktop:d("./isDesktop"),isHandheld:d("./isHandheld"),isRetina:d("./isRetina"),isTablet:d("./isTablet"),localStorageAvailable:d("./localStorageAvailable"),mediaElementsAvailable:d("./mediaElementsAvailable"),mediaQueriesAvailable:d("./mediaQueriesAvailable"),prefersReducedMotion:d("./prefersReducedMotion"),sessionStorageAvailable:d("./sessionStorageAvailable"),svgAvailable:d("./svgAvailable"),threeDTransformsAvailable:d("./threeDTransformsAvailable"),touchAvailable:d("./touchAvailable"),webGLAvailable:d("./webGLAvailable")}
},{"./canvasAvailable":26,"./continuousScrollEventsAvailable":27,"./cookiesAvailable":28,"./cssLinearGradientAvailable":29,"./cssPropertyAvailable":30,"./cssViewportUnitsAvailable":31,"./elementAttributeAvailable":32,"./eventTypeAvailable":33,"./isDesktop":35,"./isHandheld":36,"./isRetina":37,"./isTablet":38,"./localStorageAvailable":39,"./mediaElementsAvailable":40,"./mediaQueriesAvailable":41,"./prefersReducedMotion":42,"./sessionStorageAvailable":43,"./svgAvailable":44,"./threeDTransformsAvailable":45,"./touchAvailable":46,"./webGLAvailable":47}],26:[function(h,m,i){var j=h("./helpers/globals");
var k=h("@marcom/ac-function/once");var l=function(){var b=j.getDocument();var a=b.createElement("canvas");
return !!(typeof a.getContext==="function"&&a.getContext("2d"))};m.exports=k(l);
m.exports.original=l},{"./helpers/globals":34,"@marcom/ac-function/once":9}],27:[function(o,m,i){var n=o("@marcom/ac-useragent");
var j=o("./touchAvailable").original;var l=o("@marcom/ac-function/once");function k(){return(!j()||(n.os.ios&&n.os.version.major>=8)||n.browser.chrome)
}m.exports=l(k);m.exports.original=k},{"./touchAvailable":46,"@marcom/ac-function/once":9,"@marcom/ac-useragent":663}],28:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var a=false;var d=j.getDocument();
var b=j.getNavigator();try{if("cookie" in d&&!!b.cookieEnabled){d.cookie="ac_feature_cookie=1";
a=(d.cookie.indexOf("ac_feature_cookie")!==-1);d.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}}catch(c){}return a}l.exports=k(i);l.exports.original=i},{"./helpers/globals":34,"@marcom/ac-function/once":9}],29:[function(m,l,h){var j=m("@marcom/ac-prefixer/getStyleValue");
var k=m("@marcom/ac-function/once");function i(){var a=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
return a.some(function(b){return !!j("background-image",b)})}l.exports=k(i);l.exports.original=i
},{"@marcom/ac-function/once":9,"@marcom/ac-prefixer/getStyleValue":15}],30:[function(o,n,i){var l=o("@marcom/ac-prefixer/getStyleValue");
var m=o("@marcom/ac-prefixer/getStyleProperty");var k=o("@marcom/ac-function/memoize");
function j(a,b){if(typeof b!=="undefined"){return !!l(a,b)}else{return !!m(a)}}n.exports=k(j);
n.exports.original=j},{"@marcom/ac-function/memoize":8,"@marcom/ac-prefixer/getStyleProperty":14,"@marcom/ac-prefixer/getStyleValue":15}],31:[function(h,m,i){var k=h("@marcom/ac-prefixer/getStyleValue");
var l=h("@marcom/ac-function/once");function j(){return !!k("margin","1vw 1vh")
}m.exports=l(j);m.exports.original=j},{"@marcom/ac-function/once":9,"@marcom/ac-prefixer/getStyleValue":15}],32:[function(h,l,i){var k=h("./helpers/globals");
var j=h("@marcom/ac-function/memoize");function m(d,b){var c=k.getDocument();var a;
b=b||"div";a=c.createElement(b);return(d in a)}l.exports=j(m);l.exports.original=m
},{"./helpers/globals":34,"@marcom/ac-function/memoize":8}],33:[function(m,k,h){var i=m("@marcom/ac-prefixer/getEventType");
var j=m("@marcom/ac-function/memoize");function l(a,b){return !!i(a,b)}k.exports=j(l);
k.exports.original=l},{"@marcom/ac-function/memoize":8,"@marcom/ac-prefixer/getEventType":13}],34:[function(d,g,f){g.exports={getWindow:function(){return window
},getDocument:function(){return document},getNavigator:function(){return navigator
}}},{}],35:[function(n,m,i){var j=n("./touchAvailable").original;var k=n("./helpers/globals");
var l=n("@marcom/ac-function/once");function o(){var a=k.getWindow();return(!j()&&!a.orientation)
}m.exports=l(o);m.exports.original=o},{"./helpers/globals":34,"./touchAvailable":46,"@marcom/ac-function/once":9}],36:[function(m,l,o){var n=m("./isDesktop").original;
var j=m("./isTablet").original;var k=m("@marcom/ac-function/once");function i(){return(!n()&&!j())
}l.exports=k(i);l.exports.original=i},{"./isDesktop":35,"./isTablet":38,"@marcom/ac-function/once":9}],37:[function(g,k,h){var j=g("./helpers/globals");
k.exports=function i(){var a=j.getWindow();return("devicePixelRatio" in a&&a.devicePixelRatio>=1.5)
}},{"./helpers/globals":34}],38:[function(o,n,q){var p=o("./isDesktop").original;
var l=o("./helpers/globals");var m=o("@marcom/ac-function/once");var j=600;function k(){var a=l.getWindow();
var b=a.screen.width;if(a.orientation&&a.screen.height<b){b=a.screen.height}return(!p()&&b>=j)
}n.exports=m(k);n.exports.original=k},{"./helpers/globals":34,"./isDesktop":35,"@marcom/ac-function/once":9}],39:[function(m,l,i){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function h(){var a=j.getWindow();var b=false;
try{b=!!(a.localStorage&&a.localStorage.non_existent!==null)}catch(c){}return b
}l.exports=k(h);l.exports.original=h},{"./helpers/globals":34,"@marcom/ac-function/once":9}],40:[function(h,m,i){var j=h("./helpers/globals");
var l=h("@marcom/ac-function/once");function k(){var a=j.getWindow();return("HTMLMediaElement" in a)
}m.exports=l(k);m.exports.original=k},{"./helpers/globals":34,"@marcom/ac-function/once":9}],41:[function(m,l,h){m("@marcom/ac-polyfills/matchMedia");
var j=m("./helpers/globals");var k=m("@marcom/ac-function/once");function i(){var a=j.getWindow();
var b=a.matchMedia("only all");return !!(b&&b.matches)}l.exports=k(i);l.exports.original=i
},{"./helpers/globals":34,"@marcom/ac-function/once":9,"@marcom/ac-polyfills/matchMedia":12}],42:[function(g,k,h){var i=g("./helpers/globals");
function j(){var a=i.getWindow();var b=a.matchMedia("(prefers-reduced-motion)");
return !!(b&&b.matches)}k.exports=j},{"./helpers/globals":34}],43:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var a=j.getWindow();var c=false;
try{if("sessionStorage" in a&&typeof a.sessionStorage.setItem==="function"){a.sessionStorage.setItem("ac_feature","test");
c=true;a.sessionStorage.removeItem("ac_feature","test")}}catch(b){}return c}l.exports=k(i);
l.exports.original=i},{"./helpers/globals":34,"@marcom/ac-function/once":9}],44:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var a=j.getDocument();return !!a.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}l.exports=k(i);l.exports.original=i},{"./helpers/globals":34,"@marcom/ac-function/once":9}],45:[function(h,m,i){var j=h("@marcom/ac-prefixer/getStyleValue");
var l=h("@marcom/ac-function/once");function k(){return !!(j("perspective","1px")&&j("transform","translateZ(0)"))
}m.exports=l(k);m.exports.original=k},{"@marcom/ac-function/once":9,"@marcom/ac-prefixer/getStyleValue":15}],46:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var a=j.getWindow();var c=j.getDocument();
var b=j.getNavigator();return !!(("ontouchstart" in a)||(a.DocumentTouch&&c instanceof a.DocumentTouch)||(b.maxTouchPoints>0)||(b.msMaxTouchPoints>0))
}l.exports=k(i);l.exports.original=i},{"./helpers/globals":34,"@marcom/ac-function/once":9}],47:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var b=j.getDocument();var a=b.createElement("canvas");
if(typeof a.getContext==="function"){return !!(a.getContext("webgl")||a.getContext("experimental-webgl"))
}return false}l.exports=k(i);l.exports.original=i},{"./helpers/globals":34,"@marcom/ac-function/once":9}],48:[function(g,k,h){g("@marcom/ac-polyfills/Array/prototype.slice");
g("@marcom/ac-polyfills/Element/prototype.classList");var j=g("./className/add");
k.exports=function i(){var a=Array.prototype.slice.call(arguments);var b=a.shift(a);
var c;if(b.classList&&b.classList.add){b.classList.add.apply(b.classList,a);return
}for(c=0;c<a.length;c++){j(b,a[c])}}},{"./className/add":50,"@marcom/ac-polyfills/Array/prototype.slice":143,"@marcom/ac-polyfills/Element/prototype.classList":146}],49:[function(d,g,f){g.exports={add:d("./className/add"),contains:d("./className/contains"),remove:d("./className/remove")}
},{"./className/add":50,"./className/contains":51,"./className/remove":53}],50:[function(g,k,h){var j=g("./contains");
k.exports=function i(a,b){if(!j(a,b)){a.className+=" "+b}}},{"./contains":51}],51:[function(g,k,h){var i=g("./getTokenRegExp");
k.exports=function j(a,b){return i(b).test(a.className)}},{"./getTokenRegExp":52}],52:[function(f,i,g){i.exports=function h(a){return new RegExp("(\\s|^)"+a+"(\\s|$)")
}},{}],53:[function(m,l,h){var k=m("./contains");var j=m("./getTokenRegExp");l.exports=function i(a,b){if(k(a,b)){a.className=a.className.replace(j(b),"$1").trim()
}}},{"./contains":51,"./getTokenRegExp":52}],54:[function(g,j,h){g("@marcom/ac-polyfills/Element/prototype.classList");
var i=g("./className/contains");j.exports=function k(a,b){if(a.classList&&a.classList.contains){return a.classList.contains(b)
}return i(a,b)}},{"./className/contains":51,"@marcom/ac-polyfills/Element/prototype.classList":146}],55:[function(d,g,f){g.exports={add:d("./add"),contains:d("./contains"),remove:d("./remove"),toggle:d("./toggle")}
},{"./add":48,"./contains":54,"./remove":56,"./toggle":57}],56:[function(j,i,k){j("@marcom/ac-polyfills/Array/prototype.slice");
j("@marcom/ac-polyfills/Element/prototype.classList");var g=j("./className/remove");
i.exports=function h(){var a=Array.prototype.slice.call(arguments);var b=a.shift(a);
var c;if(b.classList&&b.classList.remove){b.classList.remove.apply(b.classList,a);
return}for(c=0;c<a.length;c++){g(b,a[c])}}},{"./className/remove":53,"@marcom/ac-polyfills/Array/prototype.slice":143,"@marcom/ac-polyfills/Element/prototype.classList":146}],57:[function(k,j,g){k("@marcom/ac-polyfills/Element/prototype.classList");
var i=k("./className");j.exports=function h(b,c,a){var d=(typeof a!=="undefined");
var f;if(b.classList&&b.classList.toggle){if(d){return b.classList.toggle(c,a)}return b.classList.toggle(c)
}if(d){f=!!a}else{f=!i.contains(b,c)}if(f){i.add(b,c)}else{i.remove(b,c)}return f
}},{"./className":49,"@marcom/ac-polyfills/Element/prototype.classList":146}],58:[function(m,l,h){var j=m("./utils/addEventListener");
var i=m("./shared/getEventType");l.exports=function k(a,c,b,d){c=i(a,c);return j(a,c,b,d)
}},{"./shared/getEventType":68,"./utils/addEventListener":72}],59:[function(l,k,m){var i=l("./utils/dispatchEvent");
var h=l("./shared/getEventType");k.exports=function j(a,b,c){b=h(a,b);return i(a,b,c)
}},{"./shared/getEventType":68,"./utils/dispatchEvent":73}],60:[function(d,g,f){g.exports={addEventListener:d("./addEventListener"),dispatchEvent:d("./dispatchEvent"),preventDefault:d("./preventDefault"),removeEventListener:d("./removeEventListener"),stop:d("./stop"),stopPropagation:d("./stopPropagation"),target:d("./target")}
},{"./addEventListener":58,"./dispatchEvent":59,"./preventDefault":66,"./removeEventListener":67,"./stop":69,"./stopPropagation":70,"./target":71}],61:[function(d,g,f){arguments[4][1][0].apply(f,arguments)
},{"./shared/camelCasedEventTypes":62,"./shared/prefixHelper":63,"./shared/windowFallbackEventTypes":64,"./utils/eventTypeAvailable":65,dup:1}],62:[function(d,g,f){arguments[4][2][0].apply(f,arguments)
},{dup:2}],63:[function(d,g,f){arguments[4][3][0].apply(f,arguments)},{dup:3}],64:[function(d,g,f){arguments[4][4][0].apply(f,arguments)
},{dup:4}],65:[function(d,g,f){arguments[4][5][0].apply(f,arguments)},{dup:5}],66:[function(i,h,g){h.exports=function f(a){a=a||window.event;
if(a.preventDefault){a.preventDefault()}else{a.returnValue=false}}},{}],67:[function(l,k,m){var h=l("./utils/removeEventListener");
var i=l("./shared/getEventType");k.exports=function j(a,c,b,d){c=i(a,c);return h(a,c,b,d)
}},{"./shared/getEventType":68,"./utils/removeEventListener":74}],68:[function(k,i,g){var j=k("@marcom/ac-prefixer/getEventType");
i.exports=function h(a,b){var c;var d;if("tagName" in a){c=a.tagName}else{if(a===window){c="window"
}else{c="document"}}d=j(b,c);if(d){return d}return b}},{"@marcom/ac-prefixer/getEventType":61}],69:[function(l,j,h){var i=l("./stopPropagation");
var m=l("./preventDefault");j.exports=function k(a){a=a||window.event;i(a);m(a);
a.stopped=true;a.returnValue=false}},{"./preventDefault":66,"./stopPropagation":70}],70:[function(i,h,f){h.exports=function g(a){a=a||window.event;
if(a.stopPropagation){a.stopPropagation()}else{a.cancelBubble=true}}},{}],71:[function(f,i,g){i.exports=function h(a){a=a||window.event;
return(typeof a.target!=="undefined")?a.target:a.srcElement}},{}],72:[function(f,i,g){i.exports=function h(a,c,b,d){if(a.addEventListener){a.addEventListener(c,b,!!d)
}else{a.attachEvent("on"+c,b)}return a}},{}],73:[function(f,i,g){f("@marcom/ac-polyfills/CustomEvent");
i.exports=function h(a,b,c){var d;if(a.dispatchEvent){if(c){d=new CustomEvent(b,c)
}else{d=new CustomEvent(b)}a.dispatchEvent(d)}else{d=document.createEventObject();
if(c&&"detail" in c){d.detail=c.detail}a.fireEvent("on"+b,d)}return a}},{"@marcom/ac-polyfills/CustomEvent":145}],74:[function(f,i,g){i.exports=function h(a,c,b,d){if(a.removeEventListener){a.removeEventListener(c,b,!!d)
}else{a.detachEvent("on"+c,b)}return a}},{}],75:[function(j,i,k){var g=j("./utils/getBoundingClientRect");
i.exports=function h(c,a){var b=1;if(a){b=g(c).width/c.offsetWidth}return{width:c.scrollWidth*b,height:c.scrollHeight*b}
}},{"./utils/getBoundingClientRect":85}],76:[function(j,i,k){var g=j("./utils/getBoundingClientRect");
i.exports=function h(c,a){var b;if(a){b=g(c);return{width:b.width,height:b.height}
}return{width:c.offsetWidth,height:c.offsetHeight}}},{"./utils/getBoundingClientRect":85}],77:[function(n,m,o){var q=n("./getDimensions");
var p=n("./utils/getBoundingClientRect");var j=n("./getScrollX");var k=n("./getScrollY");
m.exports=function l(d,f){var b;var g;var a;var c;if(f){b=p(d);g=j();a=k();return{top:b.top+a,right:b.right+g,bottom:b.bottom+a,left:b.left+g}
}c=q(d,f);b={top:d.offsetTop,left:d.offsetLeft,width:c.width,height:c.height};while((d=d.offsetParent)){b.top+=d.offsetTop;
b.left+=d.offsetLeft}return{top:b.top,right:b.left+b.width,bottom:b.top+b.height,left:b.left}
}},{"./getDimensions":76,"./getScrollX":81,"./getScrollY":82,"./utils/getBoundingClientRect":85}],78:[function(m,k,h){var i=m("./getDimensions");
var j=m("./getPixelsInViewport");k.exports=function l(b,a){var c=j(b,a);var d=i(b,a).height;
return(c/d)}},{"./getDimensions":76,"./getPixelsInViewport":79}],79:[function(k,j,g){var h=k("./getViewportPosition");
j.exports=function i(d,a){var b=document.documentElement.clientHeight;var f=h(d,a);
var c;if(f.top>=b||f.bottom<=0){return 0}c=(f.bottom-f.top);if(f.top<0){c+=f.top
}if(f.bottom>b){c-=f.bottom-b}return c}},{"./getViewportPosition":83}],80:[function(l,k,m){var i=l("./getDimensions");
var h=l("./utils/getBoundingClientRect");k.exports=function j(d,a){var b;var f;
var c;if(a){b=h(d);if(d.offsetParent){f=h(d.offsetParent);b.top-=f.top;b.left-=f.left
}}else{c=i(d,a);b={top:d.offsetTop,left:d.offsetLeft,width:c.width,height:c.height}
}return{top:b.top,right:b.left+b.width,bottom:b.top+b.height,left:b.left}}},{"./getDimensions":76,"./utils/getBoundingClientRect":85}],81:[function(i,h,f){h.exports=function g(b){var a;
b=b||window;if(b===window){a=window.pageXOffset;if(!a){b=document.documentElement||document.body.parentNode||document.body
}else{return a}}return b.scrollLeft}},{}],82:[function(i,h,f){h.exports=function g(b){var a;
b=b||window;if(b===window){a=window.pageYOffset;if(!a){b=document.documentElement||document.body.parentNode||document.body
}else{return a}}return b.scrollTop}},{}],83:[function(n,m,o){var l=n("./getPagePosition");
var p=n("./utils/getBoundingClientRect");var q=n("./getScrollX");var j=n("./getScrollY");
m.exports=function k(c,f){var d;var a;var b;if(f){d=p(c);return{top:d.top,right:d.right,bottom:d.bottom,left:d.left}
}d=l(c);a=q();b=j();return{top:d.top-b,right:d.right-a,bottom:d.bottom-b,left:d.left-a}
}},{"./getPagePosition":77,"./getScrollX":81,"./getScrollY":82,"./utils/getBoundingClientRect":85}],84:[function(h,l,i){var j=h("./getPixelsInViewport");
var m=h("./getPercentInViewport");l.exports=function k(b,a,d){var c;d=d||0;if(typeof d==="string"&&d.slice(-2)==="px"){d=parseInt(d,10);
c=j(b,a)}else{c=m(b,a)}return(c>0&&c>=d)}},{"./getPercentInViewport":78,"./getPixelsInViewport":79}],85:[function(i,h,f){h.exports=function g(b){var a=b.getBoundingClientRect();
return{top:a.top,right:a.right,bottom:a.bottom,left:a.left,width:a.width||a.right-a.left,height:a.height||a.bottom-a.top}
}},{}],86:[function(n,m,o){var i=n("./shared/stylePropertyCache");var k=n("./getStyleProperty");
var l=n("./getStyleValue");m.exports=function j(a,b){var c;a=k(a);if(!a){return false
}c=i[a].css;if(typeof b!=="undefined"){b=l(a,b);if(b===false){return false}c+=":"+b+";"
}return c}},{"./getStyleProperty":87,"./getStyleValue":88,"./shared/stylePropertyCache":91}],87:[function(d,g,f){arguments[4][14][0].apply(f,arguments)
},{"./shared/getStyleTestElement":89,"./shared/prefixHelper":90,"./shared/stylePropertyCache":91,"./utils/toCSS":94,"./utils/toDOM":95,dup:14}],88:[function(d,g,f){arguments[4][15][0].apply(f,arguments)
},{"./getStyleProperty":87,"./shared/prefixHelper":90,"./shared/stylePropertyCache":91,"./shared/styleValueAvailable":92,dup:15}],89:[function(d,g,f){arguments[4][17][0].apply(f,arguments)
},{dup:17}],90:[function(d,g,f){arguments[4][3][0].apply(f,arguments)},{dup:3}],91:[function(d,g,f){arguments[4][19][0].apply(f,arguments)
},{dup:19}],92:[function(d,g,f){arguments[4][20][0].apply(f,arguments)},{"./getStyleTestElement":89,"./stylePropertyCache":91,dup:20}],93:[function(k,j,h){var g=/(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
j.exports=function i(a){a=String.prototype.replace.call(a,g,"");return a.charAt(0).toLowerCase()+a.substring(1)
}},{}],94:[function(d,g,f){arguments[4][23][0].apply(f,arguments)},{dup:23}],95:[function(d,g,f){arguments[4][24][0].apply(f,arguments)
},{dup:24}],96:[function(d,g,f){g.exports={getStyle:d("./getStyle"),setStyle:d("./setStyle")}
},{"./getStyle":97,"./setStyle":99}],97:[function(m,l,h){var k=m("@marcom/ac-prefixer/getStyleProperty");
var j=m("@marcom/ac-prefixer/stripPrefixes");l.exports=function i(){var c=Array.prototype.slice.call(arguments);
var g=c.shift(c);var a=window.getComputedStyle(g);var b={};var q;var f;var r;var d;
if(typeof c[0]!=="string"){c=c[0]}for(d=0;d<c.length;d++){q=c[d];f=k(q);if(f){q=j(f);
r=a[f];if(!r||r==="auto"){r=null}if(r){r=j(r)}}else{r=null}b[q]=r}return b}},{"@marcom/ac-prefixer/getStyleProperty":87,"@marcom/ac-prefixer/stripPrefixes":93}],98:[function(i,h,f){h.exports=function g(a){var b;
var c;var d;if(!a&&a!==0){return""}if(Array.isArray(a)){return a+""}if(typeof a==="object"){b="";
c=Object.keys(a);for(d=0;d<c.length;d++){b+=c[d]+"("+a[c[d]]+") "}return b.trim()
}return a}},{}],99:[function(n,m,o){var j=n("@marcom/ac-prefixer/getStyleCSS");
var l=n("@marcom/ac-prefixer/getStyleProperty");var i=n("./internal/normalizeValue");
m.exports=function k(h,b){var c="";var d;var q;var f;var a;var g;if(typeof b!=="object"){throw new TypeError("setStyle: styles must be an Object")
}for(q in b){a=i(b[q]);if(!a&&a!==0){f=l(q);if("removeAttribute" in h.style){h.style.removeAttribute(f)
}else{h.style[f]=""}}else{d=j(q,a);if(d!==false){c+=" "+d}}}if(c.length){g=h.style.cssText;
if(g.charAt(g.length-1)!==";"){g+=";"}g+=c;h.style.cssText=g}return h}},{"./internal/normalizeValue":98,"@marcom/ac-prefixer/getStyleCSS":86,"@marcom/ac-prefixer/getStyleProperty":87}],100:[function(d,g,f){g.exports=8
},{}],101:[function(d,g,f){g.exports=11},{}],102:[function(d,g,f){g.exports=9},{}],103:[function(d,g,f){g.exports=1
},{}],104:[function(d,g,f){g.exports=3},{}],105:[function(g,k,h){var j=g("../isNode");
k.exports=function i(a,b){if(!j(a)){return false}if(typeof b==="number"){return(a.nodeType===b)
}return(b.indexOf(a.nodeType)!==-1)}},{"../isNode":109}],106:[function(z,B,w){var D=z("./isNodeType");
var C=z("../COMMENT_NODE");var v=z("../DOCUMENT_FRAGMENT_NODE");var x=z("../ELEMENT_NODE");
var y=z("../TEXT_NODE");var t=[x,y,C,v];var A=" must be an Element, TextNode, Comment, or Document Fragment";
var q=[x,y,C];var u=" must be an Element, TextNode, or Comment";var s=[x,v];var r=" must be an Element, or Document Fragment";
var E=" must have a parentNode";B.exports={parentNode:function(d,a,b,c){c=c||"target";
if((d||a)&&!D(d,s)){throw new TypeError(b+": "+c+r)}},childNode:function(d,a,b,c){c=c||"target";
if(!d&&!a){return}if(!D(d,q)){throw new TypeError(b+": "+c+u)}},insertNode:function(d,a,b,c){c=c||"node";
if(!d&&!a){return}if(!D(d,t)){throw new TypeError(b+": "+c+A)}},hasParentNode:function(c,a,b){b=b||"target";
if(!c.parentNode){throw new TypeError(a+": "+b+E)}}}},{"../COMMENT_NODE":100,"../DOCUMENT_FRAGMENT_NODE":101,"../ELEMENT_NODE":103,"../TEXT_NODE":104,"./isNodeType":105}],107:[function(m,l,h){var j=m("./internal/isNodeType");
var i=m("./DOCUMENT_FRAGMENT_NODE");l.exports=function k(a){return j(a,i)}},{"./DOCUMENT_FRAGMENT_NODE":101,"./internal/isNodeType":105}],108:[function(m,l,h){var j=m("./internal/isNodeType");
var i=m("./ELEMENT_NODE");l.exports=function k(a){return j(a,i)}},{"./ELEMENT_NODE":103,"./internal/isNodeType":105}],109:[function(f,i,g){i.exports=function h(a){return !!(a&&a.nodeType)
}},{}],110:[function(k,j,g){var i=k("./internal/validate");j.exports=function h(a){i.childNode(a,true,"remove");
if(!a.parentNode){return a}return a.parentNode.removeChild(a)}},{"./internal/validate":106}],111:[function(o,n,i){var l=o("@marcom/ac-dom-nodes/isElement");
var j=o("./matchesSelector");var k=o("./internal/validate");n.exports=function m(a,d,f,b){var c=[];
k.childNode(a,true,"ancestors");k.selector(d,false,"ancestors");if(f&&l(a)&&(!d||j(a,d))){c.push(a)
}b=b||document.body;if(a!==b){while((a=a.parentNode)&&l(a)){if(!d||j(a,d)){c.push(a)
}if(a===b){break}}}return c}},{"./internal/validate":113,"./matchesSelector":114,"@marcom/ac-dom-nodes/isElement":108}],112:[function(d,g,f){g.exports=window.Element?(function(a){return a.matches||a.matchesSelector||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector
}(Element.prototype)):null},{}],113:[function(z,C,x){z("@marcom/ac-polyfills/Array/prototype.indexOf");
var r=z("@marcom/ac-dom-nodes/isNode");var D=z("@marcom/ac-dom-nodes/COMMENT_NODE");
var v=z("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE");var w=z("@marcom/ac-dom-nodes/DOCUMENT_NODE");
var y=z("@marcom/ac-dom-nodes/ELEMENT_NODE");var A=z("@marcom/ac-dom-nodes/TEXT_NODE");
var E=function(a,b){if(!r(a)){return false}if(typeof b==="number"){return(a.nodeType===b)
}return(b.indexOf(a.nodeType)!==-1)};var t=[y,w,v];var s=" must be an Element, Document, or Document Fragment";
var q=[y,A,D];var u=" must be an Element, TextNode, or Comment";var B=" must be a string";
C.exports={parentNode:function(d,a,b,c){c=c||"node";if((d||a)&&!E(d,t)){throw new TypeError(b+": "+c+s)
}},childNode:function(d,a,b,c){c=c||"node";if(!d&&!a){return}if(!E(d,q)){throw new TypeError(b+": "+c+u)
}},selector:function(d,a,b,c){c=c||"selector";if((d||a)&&typeof d!=="string"){throw new TypeError(b+": "+c+B)
}}}},{"@marcom/ac-dom-nodes/COMMENT_NODE":100,"@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":101,"@marcom/ac-dom-nodes/DOCUMENT_NODE":102,"@marcom/ac-dom-nodes/ELEMENT_NODE":103,"@marcom/ac-dom-nodes/TEXT_NODE":104,"@marcom/ac-dom-nodes/isNode":109,"@marcom/ac-polyfills/Array/prototype.indexOf":142}],114:[function(p,o,q){var n=p("@marcom/ac-dom-nodes/isElement");
var l=p("./internal/validate");var k=p("./internal/nativeMatches");var m=p("./shims/matchesSelector");
o.exports=function j(a,b){l.selector(b,true,"matchesSelector");if(!n(a)){return false
}if(!k){return m(a,b)}return k.call(a,b)}},{"./internal/nativeMatches":112,"./internal/validate":113,"./shims/matchesSelector":117,"@marcom/ac-dom-nodes/isElement":108}],115:[function(o,n,j){var k=o("./internal/validate");
var i=o("./shims/querySelector");var l=("querySelector" in document);n.exports=function m(b,a){a=a||document;
k.parentNode(a,true,"querySelector","context");k.selector(b,true,"querySelector");
if(!l){return i(b,a)}return a.querySelector(b)}},{"./internal/validate":113,"./shims/querySelector":118}],116:[function(i,o,j){i("@marcom/ac-polyfills/Array/prototype.slice");
var k=i("./internal/validate");var l=i("./shims/querySelectorAll");var m=("querySelectorAll" in document);
o.exports=function n(b,a){a=a||document;k.parentNode(a,true,"querySelectorAll","context");
k.selector(b,true,"querySelectorAll");if(!m){return l(b,a)}return Array.prototype.slice.call(a.querySelectorAll(b))
}},{"./internal/validate":113,"./shims/querySelectorAll":119,"@marcom/ac-polyfills/Array/prototype.slice":143}],117:[function(k,j,g){var i=k("../querySelectorAll");
j.exports=function h(a,f){var b=a.parentNode||document;var d=i(f,b);var c;for(c=0;
c<d.length;c++){if(d[c]===a){return true}}return false}},{"../querySelectorAll":116}],118:[function(g,k,h){var j=g("./querySelectorAll");
k.exports=function i(b,a){var c=j(b,a);return c.length?c[0]:null}},{"./querySelectorAll":119}],119:[function(s,t,q){s("@marcom/ac-polyfills/Array/prototype.indexOf");
var m=s("@marcom/ac-dom-nodes/isElement");var o=s("@marcom/ac-dom-nodes/isDocumentFragment");
var l=s("@marcom/ac-dom-nodes/remove");var r="_ac_qsa_";var n=function(c,b){var a;
if(b===document){return true}a=c;while((a=a.parentNode)&&m(a)){if(a===b){return true
}}return false};var p=function(a){if("recalc" in a){a.recalc(false)}else{document.recalc(false)
}window.scrollBy(0,0)};t.exports=function u(b,g){var d=document.createElement("style");
var c=r+(Math.random()+"").slice(-6);var a=[];var f;g=g||document;document[c]=[];
if(o(g)){g.appendChild(d)}else{document.documentElement.firstChild.appendChild(d)
}d.styleSheet.cssText="*{display:recalc;}"+b+'{ac-qsa:expression(document["'+c+'"] && document["'+c+'"].push(this));}';
p(g);while(document[c].length){f=document[c].shift();f.style.removeAttribute("ac-qsa");
if(a.indexOf(f)===-1&&n(f,g)){a.push(f)}}document[c]=null;l(d);p(g);return a}},{"@marcom/ac-dom-nodes/isDocumentFragment":107,"@marcom/ac-dom-nodes/isElement":108,"@marcom/ac-dom-nodes/remove":110,"@marcom/ac-polyfills/Array/prototype.indexOf":142}],120:[function(d,g,f){g.exports={EventEmitterMicro:d("./ac-event-emitter-micro/EventEmitterMicro")}
},{"./ac-event-emitter-micro/EventEmitterMicro":121}],121:[function(g,k,h){function i(){this._events={}
}var j=i.prototype;j.on=function(b,a){this._events[b]=this._events[b]||[];this._events[b].unshift(a)
};j.once=function(d,a){var b=this;function c(f){b.off(d,c);if(f!==undefined){a(f)
}else{a()}}this.on(d,c)};j.off=function(c,a){if(!this.has(c)){return}if(arguments.length===1){this._events[c]=null;
delete this._events[c];return}var b=this._events[c].indexOf(a);if(b===-1){return
}this._events[c].splice(b,1)};j.trigger=function(c,a){if(!this.has(c)){return}for(var b=this._events[c].length-1;
b>=0;b--){if(a!==undefined){this._events[c][b](a)}else{this._events[c][b]()}}};
j.has=function(a){if(a in this._events===false||this._events[a].length===0){return false
}return true};j.destroy=function(){for(var a in this._events){this._events[a]=null
}this._events=null};k.exports=i},{}],122:[function(f,i,g){i.exports=function h(c,a){var b=null;
return function(){if(b===null){c.apply(this,arguments);b=setTimeout(function(){b=null
},a)}}}},{}],123:[function(v,w,t){var n=v("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var q=v("@marcom/ac-dom-events/utils/addEventListener");var x=v("@marcom/ac-dom-events/utils/removeEventListener");
var r=v("@marcom/ac-object/create");var u=v("./internal/KeyEvent");var p="keydown";
var o="keyup";function y(a){this._keysDown={};this._DOMKeyDown=this._DOMKeyDown.bind(this);
this._DOMKeyUp=this._DOMKeyUp.bind(this);this._context=a||document;q(this._context,p,this._DOMKeyDown,true);
q(this._context,o,this._DOMKeyUp,true);n.call(this)}var s=y.prototype=r(n.prototype);
s.onDown=function(b,a){return this.on(p+":"+b,a)};s.onceDown=function(b,a){return this.once(p+":"+b,a)
};s.offDown=function(b,a){return this.off(p+":"+b,a)};s.onUp=function(b,a){return this.on(o+":"+b,a)
};s.onceUp=function(b,a){return this.once(o+":"+b,a)};s.offUp=function(b,a){return this.off(o+":"+b,a)
};s.isDown=function(a){a+="";return this._keysDown[a]||false};s.isUp=function(a){return !this.isDown(a)
};s.destroy=function(){x(this._context,p,this._DOMKeyDown,true);x(this._context,o,this._DOMKeyUp,true);
this._keysDown=null;this._context=null;n.prototype.destroy.call(this);return this
};s._DOMKeyDown=function(b){var c=this._normalizeKeyboardEvent(b);var a=c.keyCode+="";
this._trackKeyDown(a);this.trigger(p+":"+a,c)};s._DOMKeyUp=function(b){var c=this._normalizeKeyboardEvent(b);
var a=c.keyCode+="";this._trackKeyUp(a);this.trigger(o+":"+a,c)};s._normalizeKeyboardEvent=function(a){return new u(a)
};s._trackKeyUp=function(a){if(this._keysDown[a]){this._keysDown[a]=false}};s._trackKeyDown=function(a){if(!this._keysDown[a]){this._keysDown[a]=true
}};w.exports=y},{"./internal/KeyEvent":125,"@marcom/ac-dom-events/utils/addEventListener":72,"@marcom/ac-dom-events/utils/removeEventListener":74,"@marcom/ac-event-emitter-micro":120,"@marcom/ac-object/create":128}],124:[function(i,h,f){var g=i("./Keyboard");
h.exports=new g()},{"./Keyboard":123}],125:[function(k,j,g){var h=["keyLocation"];
function i(b){this.originalEvent=b;var a;for(a in b){if(h.indexOf(a)===-1&&typeof b[a]!=="function"){this[a]=b[a]
}}this.location=(this.originalEvent.location!==undefined)?this.originalEvent.location:this.originalEvent.keyLocation
}i.prototype={preventDefault:function(){if(typeof this.originalEvent.preventDefault!=="function"){this.originalEvent.returnValue=false;
return}return this.originalEvent.preventDefault()},stopPropagation:function(){return this.originalEvent.stopPropagation()
}};j.exports=i},{}],126:[function(d,g,f){g.exports={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,COMMAND:91,CAPSLOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_ZERO:96,NUMPAD_ONE:97,NUMPAD_TWO:98,NUMPAD_THREE:99,NUMPAD_FOUR:100,NUMPAD_FIVE:101,NUMPAD_SIX:102,NUMPAD_SEVEN:103,NUMPAD_EIGHT:104,NUMPAD_NINE:105,NUMPAD_ASTERISK:106,NUMPAD_PLUS:107,NUMPAD_DASH:109,NUMPAD_DOT:110,NUMPAD_SLASH:111,NUMPAD_EQUALS:187,TICK:192,LEFT_BRACKET:219,RIGHT_BRACKET:221,BACKSLASH:220,SEMICOLON:186,APOSTRAPHE:222,APOSTROPHE:222,SPACEBAR:32,CLEAR:12,COMMA:188,DOT:190,SLASH:191}
},{}],127:[function(o,n,i){o("@marcom/ac-polyfills/Array/isArray");var k=o("./extend");
var j=Object.prototype.hasOwnProperty;var m=function(c,b){var a;for(a in b){if(j.call(b,a)){if(b[a]===null){c[a]=null
}else{if(typeof b[a]==="object"){c[a]=Array.isArray(b[a])?[]:{};m(c[a],b[a])}else{c[a]=b[a]
}}}}return c};n.exports=function l(a,b){if(b){return m({},a)}return k({},a)}},{"./extend":129,"@marcom/ac-polyfills/Array/isArray":138}],128:[function(g,j,h){var i=function(){};
j.exports=function k(a){if(arguments.length>1){throw new Error("Second argument not supported")
}if(a===null||typeof a!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(a)}else{i.prototype=a;
return new i()}}},{}],129:[function(k,j,g){k("@marcom/ac-polyfills/Array/prototype.forEach");
var h=Object.prototype.hasOwnProperty;j.exports=function i(){var a;var b;if(arguments.length<2){a=[{},arguments[0]]
}else{a=[].slice.call(arguments)}b=a.shift();a.forEach(function(c){if(c!=null){for(var d in c){if(h.call(c,d)){b[d]=c[d]
}}}});return b}},{"@marcom/ac-polyfills/Array/prototype.forEach":141}],130:[function(d,g,f){g.exports={PageVisibilityManager:d("./ac-page-visibility/PageVisibilityManager")}
},{"./ac-page-visibility/PageVisibilityManager":131}],131:[function(o,m,i){var n=o("@marcom/ac-object/create");
var k=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;function j(){if(typeof document.addEventListener==="undefined"){return
}var a;if(typeof document.hidden!=="undefined"){this._hidden="hidden";a="visibilitychange"
}else{if(typeof document.mozHidden!=="undefined"){this._hidden="mozHidden";a="mozvisibilitychange"
}else{if(typeof document.msHidden!=="undefined"){this._hidden="msHidden";a="msvisibilitychange"
}else{if(typeof document.webkitHidden!=="undefined"){this._hidden="webkitHidden";
a="webkitvisibilitychange"}}}}if(typeof document[this._hidden]==="undefined"){this.isHidden=false
}else{this.isHidden=document[this._hidden]}if(a){document.addEventListener(a,this._handleVisibilityChange.bind(this),false)
}k.call(this)}var l=j.prototype=n(k.prototype);l.CHANGED="changed";l._handleVisibilityChange=function(a){this.isHidden=document[this._hidden];
this.trigger(this.CHANGED,{isHidden:this.isHidden})};m.exports=new j()},{"@marcom/ac-event-emitter-micro":120,"@marcom/ac-object/create":128}],132:[function(n,m,i){var l=n("./ac-browser/BrowserData");
var j=/applewebkit/i;var k=n("./ac-browser/IE");var o=l.create();o.isWebKit=function(b){var a=b||window.navigator.userAgent;
return a?!!j.test(a):false};o.lowerCaseUserAgent=navigator.userAgent.toLowerCase();
if(o.name==="IE"){o.IE={documentMode:k.getDocumentMode()}}m.exports=o},{"./ac-browser/BrowserData":133,"./ac-browser/IE":134}],133:[function(g,k,h){g("@marcom/ac-polyfills/Array/prototype.filter");
g("@marcom/ac-polyfills/Array/prototype.some");var j=g("./data");function i(){}i.prototype={__getBrowserVersion:function(c,b){var d;
if(!c||!b){return}var a=j.browser.filter(function(f){return f.identity===b});a.some(function(f){var o=f.versionSearch||b;
var n=c.indexOf(o);if(n>-1){d=parseFloat(c.substring(n+o.length+1));return true
}});return d},__getName:function(a){return this.__getIdentityStringFromArray(a)
},__getIdentity:function(a){if(a.string){return this.__matchSubString(a)}else{if(a.prop){return a.identity
}}},__getIdentityStringFromArray:function(d){for(var a=0,c=d.length,b;a<c;a++){b=this.__getIdentity(d[a]);
if(b){return b}}},__getOS:function(a){return this.__getIdentityStringFromArray(a)
},__getOSVersion:function(d,a){if(!d||!a){return}var b=j.os.filter(function(l){return l.identity===a
})[0];var m=b.versionSearch||a;var c=new RegExp(m+" ([\\d_\\.]+)","i");var f=d.match(c);
if(f!==null){return f[1].replace(/_/g,".")}},__matchSubString:function(b){var c=b.subString;
if(c){var a=c.test?!!c.test(b.string):b.string.indexOf(c)>-1;if(a){return b.identity
}}}};i.create=function(){var b=new i();var a={};a.name=b.__getName(j.browser);a.version=b.__getBrowserVersion(j.versionString,a.name);
a.os=b.__getOS(j.os);a.osVersion=b.__getOSVersion(j.versionString,a.os);return a
};k.exports=i},{"./data":135,"@marcom/ac-polyfills/Array/prototype.filter":140,"@marcom/ac-polyfills/Array/prototype.some":144}],134:[function(d,g,f){g.exports={getDocumentMode:function(){var a;
if(document.documentMode){a=parseInt(document.documentMode,10)}else{a=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){a=7
}}}return a}}},{}],135:[function(d,g,f){g.exports={browser:[{string:window.navigator.userAgent,subString:"Edge",identity:"Edge"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:/(android).*(version\/[0-9+].[0-9+])/i,identity:"Android"},{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],136:[function(d,g,f){g.exports={PointerTracker:d("./ac-pointer-tracker/PointerTracker")}
},{"./ac-pointer-tracker/PointerTracker":137}],137:[function(z,A,w){var o=z("@marcom/ac-browser");
var q=z("@marcom/ac-dom-events");var r=z("@marcom/ac-dom-styles");var u=z("@marcom/ac-object/create");
var y=o.os==="Android"||(o.name==="IE"&&o.version<=8);var s=z("@marcom/ac-feature/touchAvailable")();
var p=z("@marcom/ac-event-emitter-micro").EventEmitterMicro;function x(b,a,c){this._el=b;
c=c||{};this._lockVertical=c.lockVertical!==false;this._swipeThreshold=c.swipeThreshold||x.DEFAULT_SWIPE_THRESHOLD;
this._pointerEvents=a||{};this._trackHover=c.trackHover;if(!this._trackHover){this._pointerEvents.down=this._pointerEvents.down||((s)?x.TOUCH_EVENTS.down:x.MOUSE_EVENTS.down);
this._pointerEvents.up=this._pointerEvents.up||((s)?x.TOUCH_EVENTS.up:x.MOUSE_EVENTS.up)
}else{this._pointerEvents.down=this._pointerEvents.down||x.MOUSE_EVENTS.over;this._pointerEvents.up=this._pointerEvents.up||x.MOUSE_EVENTS.out
}this._pointerEvents.out=this._pointerEvents.out||((s)?x.TOUCH_EVENTS.out:x.MOUSE_EVENTS.out);
this._pointerEvents.move=this._pointerEvents.move||((s)?x.TOUCH_EVENTS.move:x.MOUSE_EVENTS.move);
this._onMouseDown=this._onMouseDown.bind(this);this._onMouseUp=this._onMouseUp.bind(this);
this._onMouseOut=this._onMouseOut.bind(this);this._onMouseMove=this._onMouseMove.bind(this);
p.call(this);q.addEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
this._setCursorStyle("grab")}x.START="start";x.END="end";x.UPDATE="update";x.SWIPE_RIGHT="swiperight";
x.SWIPE_LEFT="swipeleft";x.DEFAULT_SWIPE_THRESHOLD=(y)?2:8;x.TOUCH_EVENTS={down:"touchstart",up:"touchend",out:"mouseout",move:"touchmove"};
x.MOUSE_EVENTS={down:"mousedown",up:"mouseup",out:"mouseout",move:"mousemove",over:"mouseover"};
var t=p.prototype;var v=x.prototype=u(t);v.destroy=function(){if(this._isDragging){this._onMouseUp()
}q.removeEventListener(this._el,this._pointerEvents.down,this._onMouseDown);this._setCursorStyle(null);
this._el=null;this._pointerEvents=null;this._lockVertical=null;this._swipeThreshold=null;
this._checkForTouchScrollY=null;this._isDragging=null;this._currentX=null;this._currentY=null;
this._velocityX=null;this._velocityY=null;this._lastX=null;this._lastY=null;return t.destroy.call(this)
};v._onMouseDown=function(b){if(this._isDragging){return}this._isDragging=true;
this._setCursorStyle("grabbing");q.removeEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
q.addEventListener(document.body,this._pointerEvents.up,this._onMouseUp);q.addEventListener(document,this._pointerEvents.out,this._onMouseOut);
q.addEventListener(document.body,this._pointerEvents.move,this._onMouseMove);this._checkForTouchScrollY=this._lockVertical&&!!(b.touches&&b.touches[0]);
if(this._checkForTouchScrollY){this._lastY=this._getTouchY(b)}var a=this._storeAndGetValues(b);
this._velocityX=a.diffX=0;this._velocityY=a.diffY=0;this.trigger(x.START,a)};v._onMouseUp=function(c){if(!this._isDragging){return
}this._isDragging=false;this._setCursorStyle("grab");q.addEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
q.removeEventListener(document.body,this._pointerEvents.up,this._onMouseUp);q.removeEventListener(document,this._pointerEvents.out,this._onMouseOut);
q.removeEventListener(document.body,this._pointerEvents.move,this._onMouseMove);
var a;if(this._checkForTouchScrollY||this._trackHover){a=null}else{if(this._velocityX>this._swipeThreshold){a=x.SWIPE_LEFT
}else{if((this._velocityX*-1)>this._swipeThreshold){a=x.SWIPE_RIGHT}}}var b=this._storeAndGetValues(c);
b.swipe=a;this.trigger(x.END,b);if(a&&!this._trackHover){this.trigger(a,b)}};v._onMouseOut=function(b){b=(b)?b:window.event;
var a=b.relatedTarget||b.toElement;if(!a||a.nodeName==="HTML"){this._onMouseUp(b)
}};v._onMouseMove=function(a){if(this._checkForTouchScrollY&&this._isVerticalTouchMove(a)){this._onMouseUp(a);
return}q.preventDefault(a);this.trigger(x.UPDATE,this._storeAndGetValues(a))};v._storeAndGetValues=function(b){if(b===undefined){return{}
}this._currentX=this._getPointerX(b);this._currentY=this._getPointerY(b);this._velocityX=this._lastX-this._currentX;
this._velocityY=this._lastY-this._currentY;var a={x:this._currentX,y:this._currentY,lastX:this._lastX,lastY:this._lastY,diffX:this._velocityX,diffY:this._velocityY,interactionEvent:b};
this._lastX=this._currentX;this._lastY=this._currentY;return a};v._getPointerX=function(a){if(a.pageX){return a.pageX
}else{if(a.touches&&a.touches[0]){return a.touches[0].pageX}else{if(a.clientX){return a.clientX
}}}return 0};v._getPointerY=function(a){if(a.pageY){return a.pageY}else{if(a.touches&&a.touches[0]){return a.touches[0].pageY
}else{if(a.clientY){return a.clientY}}}return 0};v._getTouchX=function(a){if(a.touches&&a.touches[0]){return a.touches[0].pageX
}return 0};v._getTouchY=function(a){if(a.touches&&a.touches[0]){return a.touches[0].pageY
}return 0};v._isVerticalTouchMove=function(d){var f=this._getTouchX(d);var a=this._getTouchY(d);
var b=Math.abs(f-this._lastX);var c=Math.abs(a-this._lastY);this._checkForTouchScrollY=(b<c);
return this._checkForTouchScrollY};v._setCursorStyle=function(a){r.setStyle(this._el,{cursor:a})
};A.exports=x},{"@marcom/ac-browser":132,"@marcom/ac-dom-events":60,"@marcom/ac-dom-styles":96,"@marcom/ac-event-emitter-micro":120,"@marcom/ac-feature/touchAvailable":46,"@marcom/ac-object/create":128}],138:[function(d,g,f){if(!Array.isArray){Array.isArray=function(a){return Object.prototype.toString.call(a)==="[object Array]"
}}},{}],139:[function(f,i,g){if(!Array.prototype.every){Array.prototype.every=function h(a,b){var c=Object(this);
var l=c.length>>>0;var d;if(typeof a!=="function"){throw new TypeError(a+" is not a function")
}for(d=0;d<l;d+=1){if(d in c&&!a.call(b,c[d],d,c)){return false}}return true}}},{}],140:[function(f,i,g){if(!Array.prototype.filter){Array.prototype.filter=function h(a,b){var c=Object(this);
var n=c.length>>>0;var d;var m=[];if(typeof a!=="function"){throw new TypeError(a+" is not a function")
}for(d=0;d<n;d+=1){if(d in c&&a.call(b,c[d],d,c)){m.push(c[d])}}return m}}},{}],141:[function(f,i,g){if(!Array.prototype.forEach){Array.prototype.forEach=function h(a,b){var c=Object(this);
var n;var m;if(typeof a!=="function"){throw new TypeError("No function object passed to forEach.")
}var d=this.length;for(n=0;n<d;n+=1){m=c[n];a.call(b,m,n,c)}}}},{}],142:[function(f,i,g){if(!Array.prototype.indexOf){Array.prototype.indexOf=function h(c,b){var a=b||0;
var d=0;if(a<0){a=this.length+b-1;if(a<0){throw"Wrapped past beginning of array while looking up a negative start index."
}}for(d=0;d<this.length;d++){if(this[d]===c){return d}}return(-1)}}},{}],143:[function(d,g,f){(function(){var b=Array.prototype.slice;
try{b.call(document.documentElement)}catch(a){Array.prototype.slice=function(u,q){q=(typeof q!=="undefined")?q:this.length;
if(Object.prototype.toString.call(this)==="[object Array]"){return b.call(this,u,q)
}var i,r=[],p,s=this.length;var t=u||0;t=(t>=0)?t:s+t;var c=(q)?q:s;if(q<0){c=s+q
}p=c-t;if(p>0){r=new Array(p);if(this.charAt){for(i=0;i<p;i++){r[i]=this.charAt(t+i)
}}else{for(i=0;i<p;i++){r[i]=this[t+i]}}}return r}}}())},{}],144:[function(f,i,g){if(!Array.prototype.some){Array.prototype.some=function h(a,b){var d=Object(this);
var l=d.length>>>0;var c;if(typeof a!=="function"){throw new TypeError(a+" is not a function")
}for(c=0;c<l;c+=1){if(c in d&&a.call(b,d[c],c,d)===true){return true}}return false
}}},{}],145:[function(f,i,g){if(document.createEvent){try{new window.CustomEvent("click")
}catch(h){window.CustomEvent=(function(){function a(c,b){b=b||{bubbles:false,cancelable:false,detail:undefined};
var d=document.createEvent("CustomEvent");d.initCustomEvent(c,b.bubbles,b.cancelable,b.detail);
return d}a.prototype=window.Event.prototype;return a}())}}},{}],146:[function(d,g,f){
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
if("document" in self){if(!("classList" in document.createElement("_"))){(function(t){if(!("Element" in t)){return
}var C="classList",x="prototype",b=t.Element[x],B=Object,s=String[x].trim||function(){return this.replace(/^\s+|\s+$/g,"")
},A=Array[x].indexOf||function(h){var i=0,j=this.length;for(;i<j;i++){if(i in this&&this[i]===h){return i
}}return -1},a=function(i,h){this.name=i;this.code=DOMException[i];this.message=h
},w=function(h,i){if(i===""){throw new a("SYNTAX_ERR","An invalid or illegal string was specified")
}if(/\s/.test(i)){throw new a("INVALID_CHARACTER_ERR","String contains an invalid character")
}return A.call(h,i)},z=function(h){var i=s.call(h.getAttribute("class")||""),j=i?i.split(/\s+/):[],k=0,l=j.length;
for(;k<l;k++){this.push(j[k])}this._updateClassName=function(){h.setAttribute("class",this.toString())
}},y=z[x]=[],u=function(){return new z(this)};a[x]=Error[x];y.item=function(h){return this[h]||null
};y.contains=function(h){h+="";return w(this,h)!==-1};y.add=function(){var h=arguments,i=0,k=h.length,j,l=false;
do{j=h[i]+"";if(w(this,j)===-1){this.push(j);l=true}}while(++i<k);if(l){this._updateClassName()
}};y.remove=function(){var h=arguments,i=0,l=h.length,j,m=false,k;do{j=h[i]+"";
k=w(this,j);while(k!==-1){this.splice(k,1);m=true;k=w(this,j)}}while(++i<l);if(m){this._updateClassName()
}};y.toggle=function(j,i){j+="";var k=this.contains(j),h=k?i!==true&&"remove":i!==false&&"add";
if(h){this[h](j)}if(i===true||i===false){return i}else{return !k}};y.toString=function(){return this.join(" ")
};if(B.defineProperty){var c={get:u,enumerable:true,configurable:true};try{B.defineProperty(b,C,c)
}catch(v){if(v.number===-2146823252){c.enumerable=false;B.defineProperty(b,C,c)
}}}else{if(B[x].__defineGetter__){b.__defineGetter__(C,u)}}}(self))}else{(function(){var b=document.createElement("_");
b.classList.add("c1","c2");if(!b.classList.contains("c2")){var a=function(j){var k=DOMTokenList.prototype[j];
DOMTokenList.prototype[j]=function(h){var i,m=arguments.length;for(i=0;i<m;i++){h=arguments[i];
k.call(this,h)}}};a("add");a("remove")}b.classList.toggle("c3",false);if(b.classList.contains("c3")){var c=DOMTokenList.prototype.toggle;
DOMTokenList.prototype.toggle=function(k,j){if(1 in arguments&&!this.contains(k)===!j){return j
}else{return c.call(this,k)}}}b=null}())}}},{}],147:[function(d,g,f){if(!Function.prototype.bind){Function.prototype.bind=function(k){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
}var a=Array.prototype.slice.call(arguments,1);var b=this;var j=function(){};var c=function(){return b.apply((this instanceof j&&k)?this:k,a.concat(Array.prototype.slice.call(arguments)))
};j.prototype=this.prototype;c.prototype=new j();return c}}},{}],148:[function(d,g,f){(function(){var b=0;
var a=["ms","moz","webkit","o"];for(var c=0;c<a.length&&!window.requestAnimationFrame;
++c){window.requestAnimationFrame=window[a[c]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[a[c]+"CancelAnimationFrame"]||window[a[c]+"CancelRequestAnimationFrame"]
}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(m,p){var q=Date.now();
var o=Math.max(0,16-(q-b));var n=window.setTimeout(function(){m(q+o)},o);b=q+o;
return n}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(i){clearTimeout(i)
}}}())},{}],149:[function(i,h,g){var f=(function(){var s=["","-webkit-","-moz-","-o-","-ms-"];
var u={"animation-delay":"transitionend","-o-animation-delay":"oTransitionEnd","-moz-animation-delay":"transitionend","-webkit-animation-delay":"webkitTransitionEnd","-ms-animation-delay":"transitionend"};
var d={"animation-delay":"animationstart","-o-animation-delay":"oanimationstart","-moz-animation-delay":"animationstart","-webkit-animation-delay":"webkitAnimationStart","-ms-animation-delay":"MSAnimationStart"};
var r={"animation-delay":"animationiteration","-o-animation-delay":"oanimationiteration","-moz-animation-delay":"animationiteration","-webkit-animation-delay":"webkitAnimationIteration","-ms-animation-delay":"MSAnimationIteration"};
var a={"animation-delay":"animationend","-o-animation-delay":"oanimationend","-moz-animation-delay":"animationend","-webkit-animation-delay":"webkitAnimationEnd","-ms-animation-delay":"MSAnimationEnd"};
var t=document.createElement("_");var q=["","-webkit-","-moz-","-o-","-ms-"];function b(j){for(var l=0;
l<q.length;l++){var k=s[l]+j;if(t.style[k]!==undefined){return k}}return undefined
}var c=["-webkit-","","-moz-","-o-","-ms-"];function p(j){for(var l=0;l<c.length;
l++){var k=c[l]+j;if(t.style[k]!==undefined){return k}}return undefined}return{filter:p("filter"),transform:b("transform"),transformOrigin:b("transform-origin"),transition:b("transition"),transitionDelay:b("transition-delay"),transitionDuration:b("transition-duration"),transitionProperty:b("transition-property"),transitionTimingFunction:b("transition-timing-function"),transitionEnd:u[b("animation-delay")],animation:b("animation"),animationDelay:b("animation-delay"),animationDirection:b("animation-direction"),animationDuration:b("animation-duration"),animationFillMode:b("animation-fill-mode"),animationIterationCount:b("animation-iteration-count"),animationName:b("animation-name"),animationTimingFunction:b("animation-timing-function"),animationPlayState:b("animation-play-state"),animationStart:d[b("animation-delay")],animationIteration:r[b("animation-delay")],animationEnd:a[b("animation-delay")]}
}());h.exports=f},{}],150:[function(m,l,h){var j=m("./ac-clock/Clock"),k=m("./ac-clock/ThrottledClock"),i=m("./ac-clock/sharedClockInstance");
i.Clock=j;i.ThrottledClock=k;l.exports=i},{"./ac-clock/Clock":151,"./ac-clock/ThrottledClock":152,"./ac-clock/sharedClockInstance":153}],151:[function(o,n,i){o("@marcom/ac-polyfills/Function/prototype.bind");
o("@marcom/ac-polyfills/requestAnimationFrame");var l;var m=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var j=new Date().getTime();function k(){m.call(this);this.lastFrameTime=null;this._animationFrame=null;
this._active=false;this._startTime=null;this._boundOnAnimationFrame=this._onAnimationFrame.bind(this);
this._getTime=Date.now||function(){return new Date().getTime()}}l=k.prototype=new m(null);
l.start=function(){if(this._active){return}this._tick()};l.stop=function(){if(this._active){window.cancelAnimationFrame(this._animationFrame)
}this._animationFrame=null;this.lastFrameTime=null;this._active=false};l.destroy=function(){this.stop();
this.off();var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null}}};l.isRunning=function(){return this._active
};l._tick=function(){if(!this._active){this._active=true}this._animationFrame=window.requestAnimationFrame(this._boundOnAnimationFrame)
};l._onAnimationFrame=function(b){if(this.lastFrameTime===null){this.lastFrameTime=b
}var a=b-this.lastFrameTime;var c=0;if(a>=1000){a=0}if(a!==0){c=1000/a}if(this._firstFrame===true){a=0;
this._firstFrame=false}if(c===0){this._firstFrame=true}else{var d={time:b,delta:a,fps:c,naturalFps:c,timeNow:this._getTime()};
this.trigger("update",d);this.trigger("draw",d)}this._animationFrame=null;this.lastFrameTime=b;
if(this._active!==false){this._tick()}else{this.lastFrameTime=null}};n.exports=k
},{"@marcom/ac-event-emitter-micro":184,"@marcom/ac-polyfills/Function/prototype.bind":147,"@marcom/ac-polyfills/requestAnimationFrame":148}],152:[function(o,n,i){o("@marcom/ac-polyfills/requestAnimationFrame");
var l;var j=o("./sharedClockInstance"),m=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;
function k(a,b){if(a===null){return}m.call(this);b=b||{};this._fps=a||null;this._clock=b.clock||j;
this._lastThrottledTime=null;this._clockEvent=null;this._boundOnClockDraw=this._onClockDraw.bind(this);
this._boundOnClockUpdate=this._onClockUpdate.bind(this);this._clock.on("update",this._boundOnClockUpdate)
}l=k.prototype=new m(null);l.setFps=function(a){this._fps=a;return this};l.getFps=function(){return this._fps
};l.start=function(){this._clock.start();return this};l.stop=function(){this._clock.stop();
return this};l.isRunning=function(){return this._clock.isRunning()};l.destroy=function(){this._clock.off("update",this._boundOnClockUpdate);
this._clock.destroy.call(this)};l._onClockUpdate=function(b){if(this._lastThrottledTime===null){this._lastThrottledTime=this._clock.lastFrameTime
}var a=b.time-this._lastThrottledTime;if(!this._fps){throw new TypeError("FPS is not defined.")
}if(Math.ceil(1000/a)>=this._fps+2){return}this._clockEvent=b;this._clockEvent.delta=a;
this._clockEvent.fps=1000/a;this._lastThrottledTime=this._clockEvent.time;this._clock.once("draw",this._boundOnClockDraw);
this.trigger("update",this._clockEvent)};l._onClockDraw=function(){this.trigger("draw",this._clockEvent)
};n.exports=k},{"./sharedClockInstance":153,"@marcom/ac-event-emitter-micro":184,"@marcom/ac-polyfills/requestAnimationFrame":148}],153:[function(f,i,g){var h=f("./Clock");
i.exports=new h()},{"./Clock":151}],154:[function(d,g,f){g.exports={Clip:d("./ac-clip/Clip")}
},{"./ac-clip/Clip":155}],155:[function(u,v,t){u("@marcom/ac-polyfills/Array/isArray");
var r=u("@marcom/ac-object/create");var m=u("@marcom/ac-easing").createPredefined;
var w=u("@marcom/ac-clock");var o=u("@marcom/ac-easing").Ease;var n=u("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var p="ease";function q(d,f,b,a){a=a||{};this._options=a;this._isYoyo=a.yoyo;this._direction=1;
this._timeScale=1;this._loop=a.loop||0;this._loopCount=0;this._target=d;this.duration(f);
this._delay=(a.delay||0)*1000;this._remainingDelay=this._delay;this._progress=0;
this._clock=a.clock||w;this._playing=false;this._getTime=Date.now||function(){return new Date().getTime()
};this._propsTo=b||{};this._propsFrom=a.propsFrom||{};this._onStart=a.onStart||null;
this._onUpdate=a.onUpdate||null;this._onDraw=a.onDraw||null;this._onComplete=a.onComplete||null;
var c=a.ease||p;this._ease=(typeof c==="function")?new o(c):m(c);this._start=this._start.bind(this);
this._update=this._update.bind(this);this._draw=this._draw.bind(this);this._isPrepared=false;
q._add(this);n.call(this)}var s=q.prototype=r(n.prototype);q.COMPLETE="complete";
q.PAUSE="pause";q.PLAY="play";s.play=function(){if(!this._playing){this._playing=true;
if(this._delay===0||this._remainingDelay===0){this._start()}else{if(!this._isPrepared){this._setDiff();
this._updateProps()}this._startTimeout=setTimeout(this._start,this._remainingDelay/this._timeScale);
this._delayStart=this._getTime()}}return this};s.pause=function(){if(this._playing){if(this._startTimeout){this._remainingDelay=this._getTime()-this._delayStart;
clearTimeout(this._startTimeout)}this._stop();this.trigger(q.PAUSE,this)}return this
};s.destroy=function(){this.pause();this._options=null;this._target=null;this._storeTarget=null;
this._ease=null;this._clock=null;this._propsTo=null;this._propsFrom=null;this._storePropsTo=null;
this._storePropsFrom=null;this._propsDiff=null;this._propsEase=null;this._onStart=null;
this._onUpdate=null;this._onDraw=null;this._onComplete=null;q._remove(this);n.prototype.destroy.call(this);
return this};s.reset=function(){if(!this._isPrepared){return}this._stop();this._resetLoop(this._target,this._storeTarget);
this._direction=1;this._loop=this._options.loop||0;this._loopCount=0;this._propsFrom=this._storePropsFrom;
this._propsTo=this._storePropsTo;this._progress=0;this._setStartTime();if(this._onUpdate){this._onUpdate.call(this,this)
}if(this._onDraw){this._onDraw.call(this,this)}return this};s.playing=function(){return this._playing
};s.target=function(){return this._target};s.duration=function(a){if(a!==undefined){this._duration=a;
this._durationMs=(a*1000)/this._timeScale;if(this._playing){this._setStartTime()
}}return this._duration};s.timeScale=function(a){if(a!==undefined){this._timeScale=a;
this.duration(this._duration)}return this._timeScale};s.currentTime=function(a){if(a!==undefined){return this.progress(a/this._duration)*this._duration
}return(this.progress()*this._duration)};s.progress=function(a){if(a!==undefined){this._progress=Math.min(1,Math.max(0,a));
this._setStartTime();if(!this._isPrepared){this._setDiff()}if(this._playing&&a===1){this._completeProps();
if(this._onUpdate){this._onUpdate.call(this,this)}if(this._onDraw){this._onDraw.call(this,this)
}this._complete()}else{this._updateProps();if(this._onUpdate){this._onUpdate.call(this,this)
}if(this._onDraw){this._onDraw.call(this,this)}}}return this._progress};s._resetLoop=function(c,a){var b;
for(b in a){if(a.hasOwnProperty(b)){if(a[b]!==null){if(typeof a[b]==="object"){this._resetLoop(c[b],a[b])
}else{c[b]=a[b]}}}}};s._cloneObjects=function(){var b={};var c={};var a={};this._cloneObjectsLoop(this._target,this._propsTo,this._propsFrom,b,c,a);
return{target:b,propsTo:c,propsFrom:a}};s._cloneObjectsLoop=function(g,b,c,d,i,a){var h;
var f;for(f in c){if(c.hasOwnProperty(f)&&b[f]===undefined&&g[f]!==undefined){d[f]=g[f];
i[f]=g[f];a[f]=c[f]}}for(f in b){if(g.hasOwnProperty(f)){h=typeof g[f];if(g[f]!==null&&h==="object"){if(Array.isArray(g[f])){d[f]=[];
i[f]=[];a[f]=[]}else{d[f]={};i[f]={};a[f]={}}this._cloneObjectsLoop(g[f],b[f]||{},c[f]||{},d[f],i[f],a[f])
}else{if(b[f]!==null&&h==="number"){d[f]=g[f];i[f]=b[f];if(c&&c[f]!==undefined){a[f]=c[f]
}}}}}};s._prepareProperties=function(){if(!this._isPrepared){var a=this._cloneObjects();
this._storeTarget=a.target;this._propsTo=a.propsTo;this._storePropsTo=this._propsTo;
this._propsFrom=a.propsFrom;this._storePropsFrom=this._propsFrom;this._isPrepared=true
}};s._setStartTime=function(){this._startTime=this._getTime()-(this.progress()*this._durationMs)
};s._setDiff=function(){if(!this._isPrepared){this._prepareProperties()}this._propsDiff={};
this._setDiffLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff)};
s._setDiffLoop=function(b,c,f,g){var a;var d;for(d in b){if(b.hasOwnProperty(d)){a=typeof b[d];
if(b[d]!==null&&a==="object"){c[d]=c[d]||{};g[d]=g[d]||{};this._setDiffLoop(b[d],c[d],f[d],g[d])
}else{if(a==="number"&&f[d]!==undefined){if(c[d]!==undefined){f[d]=c[d]}else{c[d]=f[d]
}g[d]=b[d]-f[d]}else{b[d]=null;c[d]=null}}}}};s._start=function(){this._startTimeout=null;
this._remainingDelay=0;this._setStartTime();this._clock.on("update",this._update);
this._clock.on("draw",this._draw);if(!this._clock.isRunning()){this._clock.start()
}this._setDiff();this._playing=true;this._running=true;if(this._onStart){this._onStart.call(this,this)
}this.trigger(q.PLAY,this)};s._stop=function(){this._playing=false;this._running=false;
this._clock.off("update",this._update);this._clock.off("draw",this._draw)};s._updateProps=function(){var a;
if(this._direction===1){a=this._ease.getValue(this._progress)}else{a=1-this._ease.getValue(1-this._progress)
}this._updatePropsLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff,a)
};s._updatePropsLoop=function(b,c,f,g,a){var d;for(d in b){if(b.hasOwnProperty(d)&&b[d]!==null){if(typeof b[d]!=="number"){this._updatePropsLoop(b[d],c[d],f[d],g[d],a)
}else{f[d]=c[d]+(g[d]*a)}}}};s._completeProps=function(){this._completePropsLoop(this._propsTo,this._target)
};s._completePropsLoop=function(b,a){var c;for(c in b){if(b.hasOwnProperty(c)&&b[c]!==null){if(typeof b[c]!=="number"){this._completePropsLoop(b[c],a[c])
}else{a[c]=b[c]}}}};s._complete=function(){if(this._isYoyo&&((this._loop>0&&this._loopCount<=this._loop)||(this._loop===0&&this._loopCount===0))){this._propsFrom=(this._direction===1)?this._storePropsTo:this._storePropsFrom;
this._propsTo=(this._direction===1)?this._storePropsFrom:this._storePropsTo;this._direction*=-1;
if(this._direction===-1){++this._loopCount}this.progress(0);this._start()}else{if(this._loopCount<this._loop){++this._loopCount;
this.progress(0);this._start()}else{this.trigger(q.COMPLETE,this);if(this._onComplete){this._onComplete.call(this,this)
}if(this._options&&this._options.destroyOnComplete){this.destroy()}}}};s._update=function(a){if(this._running){this._progress=(a.timeNow-this._startTime)/this._durationMs;
if(this._progress>=1){this._progress=1;this._running=false;this._completeProps()
}else{this._updateProps()}if(this._onUpdate){this._onUpdate.call(this,this)}}};
s._draw=function(a){if(this._onDraw){this._onDraw.call(this,this)}if(!this._running){this._stop();
if(this._progress===1){this._complete()}}};q._instantiate=function(){this._clips=[];
return this};q._add=function(a){this._clips.push(a)};q._remove=function(b){var a=this._clips.indexOf(b);
if(a>-1){this._clips.splice(a,1)}};q.getAll=function(b){if(b!==undefined){var a=[];
var c=this._clips.length;while(c--){if(this._clips[c].target()===b){a.push(this._clips[c])
}}return a}return Array.prototype.slice.call(this._clips)};q.destroyAll=function(b){var a=this.getAll(b);
if(this._clips.length===a.length){this._clips=[]}var c=a.length;while(c--){a[c].destroy()
}return a};q.to=function(c,d,b,a){a=a||{};if(a.destroyOnComplete===undefined){a.destroyOnComplete=true
}return new q(c,d,b,a).play()};q.from=function(b,c,a,d){d=d||{};d.propsFrom=a;if(d.destroyOnComplete===undefined){d.destroyOnComplete=true
}return new q(b,c,d.propsTo,d).play()};v.exports=q._instantiate()},{"@marcom/ac-clock":150,"@marcom/ac-easing":176,"@marcom/ac-event-emitter-micro":184,"@marcom/ac-object/create":128,"@marcom/ac-polyfills/Array/isArray":138}],156:[function(f,i,g){var h=f("./ac-color/Color");
h.decimalToHex=f("./ac-color/static/decimalToHex");h.hexToDecimal=f("./ac-color/static/hexToDecimal");
h.hexToRgb=f("./ac-color/static/hexToRgb");h.isColor=f("./ac-color/static/isColor");
h.isHex=f("./ac-color/static/isHex");h.isRgb=f("./ac-color/static/isRgb");h.isRgba=f("./ac-color/static/isRgba");
h.mixColors=f("./ac-color/static/mixColors");h.rgbaToArray=f("./ac-color/static/rgbaToArray");
h.rgbToArray=f("./ac-color/static/rgbToArray");h.rgbToDecimal=f("./ac-color/static/rgbToDecimal");
h.rgbToHex=f("./ac-color/static/rgbToHex");h.rgbToHsl=f("./ac-color/static/rgbToHsl");
h.rgbToHsv=f("./ac-color/static/rgbToHsv");h.rgbaToObject=f("./ac-color/static/rgbaToObject");
h.rgbToObject=f("./ac-color/static/rgbToObject");h.shortToLongHex=f("./ac-color/static/shortToLongHex");
i.exports={Color:h}},{"./ac-color/Color":157,"./ac-color/static/decimalToHex":159,"./ac-color/static/hexToDecimal":160,"./ac-color/static/hexToRgb":161,"./ac-color/static/isColor":162,"./ac-color/static/isHex":163,"./ac-color/static/isRgb":164,"./ac-color/static/isRgba":165,"./ac-color/static/mixColors":166,"./ac-color/static/rgbToArray":167,"./ac-color/static/rgbToDecimal":168,"./ac-color/static/rgbToHex":169,"./ac-color/static/rgbToHsl":170,"./ac-color/static/rgbToHsv":171,"./ac-color/static/rgbToObject":172,"./ac-color/static/rgbaToArray":173,"./ac-color/static/rgbaToObject":174,"./ac-color/static/shortToLongHex":175}],157:[function(H,K,v){var E=H("./helpers/cssColorNames");
var z=H("./static/hexToRgb");var A=H("./static/isColor");var G=H("./static/isHex");
var J=H("./static/isRgba");var w=H("./static/mixColors");var B=H("./static/rgbaToArray");
var y=H("./static/rgbToArray");var t=H("./static/rgbToDecimal");var D=H("./static/rgbToHex");
var I=H("./static/rgbaToObject");var C=H("./static/rgbToObject");var x=H("./static/shortToLongHex");
function u(a){if(!A(a)&&!E.nameToRgbObject[a]){throw new Error(a+" is not a supported color.")
}this._setColor(a)}var F=u.prototype;F._setColor=function(c){this._color={};if(G(c)){this._color.hex=x(c);
this._color.rgb={color:z(c)}}else{if(J(c)){this._color.rgba={color:c};var a=this.rgbaObject();
this._color.rgb={color:"rgb("+a.r+", "+a.g+", "+a.b+")"}}else{if(E.nameToRgbObject[c]){var b=E.nameToRgbObject[c];
this._color.rgb={object:b,color:"rgb("+b.r+", "+b.g+", "+b.b+")"}}else{this._color.rgb={color:c}
}}}};F.rgb=function(){return this._color.rgb.color};F.rgba=function(){if(this._color.rgba===undefined){var a=this.rgbObject();
this._color.rgba={color:"rgba("+a.r+", "+a.g+", "+a.b+", 1)"}}return this._color.rgba.color
};F.hex=function(){if(this._color.hex===undefined){this._color.hex=D.apply(this,this.rgbArray())
}return this._color.hex};F.decimal=function(){if(this._color.decimal===undefined){this._color.decimal=t(this.rgb())
}return this._color.decimal};F.cssName=function(){return E.rgbToName[this.rgb()]||null
};F.rgbArray=function(){if(this._color.rgb.array===undefined){this._color.rgb.array=y(this.rgb())
}return this._color.rgb.array};F.rgbaArray=function(){if(this._color.rgba===undefined){this.rgba()
}if(this._color.rgba.array===undefined){this._color.rgba.array=B(this.rgba())}return this._color.rgba.array
};F.rgbObject=function(){if(this._color.rgb.object===undefined){this._color.rgb.object=C(this.rgb())
}return this._color.rgb.object};F.rgbaObject=function(){if(this._color.rgba===undefined){this.rgba()
}if(this._color.rgba.object===undefined){this._color.rgba.object=I(this.rgba())
}return this._color.rgba.object};F.getRed=function(){return this.rgbObject().r};
F.getGreen=function(){return this.rgbObject().g};F.getBlue=function(){return this.rgbObject().b
};F.getAlpha=function(){if(this._color.rgba===undefined){return 1}return this.rgbaObject().a
};F.setRed=function(a){if(a!==this.getRed()){this._setColor("rgba("+a+", "+this.getGreen()+", "+this.getBlue()+", "+this.getAlpha()+")")
}return this.rgbObject().r};F.setGreen=function(a){if(a!==this.getGreen()){this._setColor("rgba("+this.getRed()+", "+a+", "+this.getBlue()+", "+this.getAlpha()+")")
}return this.rgbObject().g};F.setBlue=function(a){if(a!==this.getBlue()){this._setColor("rgba("+this.getRed()+", "+this.getGreen()+", "+a+", "+this.getAlpha()+")")
}return this.rgbObject().b};F.setAlpha=function(a){if(a!==this.getAlpha()){this._setColor("rgba("+this.getRed()+", "+this.getGreen()+", "+this.getBlue()+", "+a+")")
}return this.rgbaObject().a};F.mix=function(c,b){var a=C(w(this.rgb(),c,b));this._setColor("rgba("+a.r+", "+a.g+", "+a.b+", "+this.getAlpha()+")");
return this.rgb()};F.clone=function(){return new u(this.rgb())};K.exports=u},{"./helpers/cssColorNames":158,"./static/hexToRgb":161,"./static/isColor":162,"./static/isHex":163,"./static/isRgba":165,"./static/mixColors":166,"./static/rgbToArray":167,"./static/rgbToDecimal":168,"./static/rgbToHex":169,"./static/rgbToObject":172,"./static/rgbaToArray":173,"./static/rgbaToObject":174,"./static/shortToLongHex":175}],158:[function(g,k,h){var j={"rgb(240, 248, 255)":"aliceblue","rgb(250, 235, 215)":"antiquewhite","rgb(0, 0, 0)":"black","rgb(0, 0, 255)":"blue","rgb(0, 255, 255)":"cyan","rgb(0, 0, 139)":"darkblue","rgb(0, 139, 139)":"darkcyan","rgb(0, 100, 0)":"darkgreen","rgb(0, 206, 209)":"darkturquoise","rgb(0, 191, 255)":"deepskyblue","rgb(0, 128, 0)":"green","rgb(0, 255, 0)":"lime","rgb(0, 0, 205)":"mediumblue","rgb(0, 250, 154)":"mediumspringgreen","rgb(0, 0, 128)":"navy","rgb(0, 255, 127)":"springgreen","rgb(0, 128, 128)":"teal","rgb(25, 25, 112)":"midnightblue","rgb(30, 144, 255)":"dodgerblue","rgb(32, 178, 170)":"lightseagreen","rgb(34, 139, 34)":"forestgreen","rgb(46, 139, 87)":"seagreen","rgb(47, 79, 79)":"darkslategray","rgb(50, 205, 50)":"limegreen","rgb(60, 179, 113)":"mediumseagreen","rgb(64, 224, 208)":"turquoise","rgb(65, 105, 225)":"royalblue","rgb(70, 130, 180)":"steelblue","rgb(72, 61, 139)":"darkslateblue","rgb(72, 209, 204)":"mediumturquoise","rgb(75, 0, 130)":"indigo","rgb(85, 107, 47)":"darkolivegreen","rgb(95, 158, 160)":"cadetblue","rgb(100, 149, 237)":"cornflowerblue","rgb(102, 205, 170)":"mediumaquamarine","rgb(105, 105, 105)":"dimgray","rgb(106, 90, 205)":"slateblue","rgb(107, 142, 35)":"olivedrab","rgb(112, 128, 144)":"slategray","rgb(119, 136, 153)":"lightslategray","rgb(123, 104, 238)":"mediumslateblue","rgb(124, 252, 0)":"lawngreen","rgb(127, 255, 212)":"aquamarine","rgb(127, 255, 0)":"chartreuse","rgb(128, 128, 128)":"gray","rgb(128, 0, 0)":"maroon","rgb(128, 128, 0)":"olive","rgb(128, 0, 128)":"purple","rgb(135, 206, 250)":"lightskyblue","rgb(135, 206, 235)":"skyblue","rgb(138, 43, 226)":"blueviolet","rgb(139, 0, 139)":"darkmagenta","rgb(139, 0, 0)":"darkred","rgb(139, 69, 19)":"saddlebrown","rgb(143, 188, 143)":"darkseagreen","rgb(144, 238, 144)":"lightgreen","rgb(147, 112, 219)":"mediumpurple","rgb(148, 0, 211)":"darkviolet","rgb(152, 251, 152)":"palegreen","rgb(153, 50, 204)":"darkorchid","rgb(154, 205, 50)":"yellowgreen","rgb(160, 82, 45)":"sienna","rgb(165, 42, 42)":"brown","rgb(169, 169, 169)":"darkgray","rgb(173, 255, 47)":"greenyellow","rgb(173, 216, 230)":"lightblue","rgb(175, 238, 238)":"paleturquoise","rgb(176, 196, 222)":"lightsteelblue","rgb(176, 224, 230)":"powderblue","rgb(178, 34, 34)":"firebrick","rgb(184, 134, 11)":"darkgoldenrod","rgb(186, 85, 211)":"mediumorchid","rgb(188, 143, 143)":"rosybrown","rgb(189, 183, 107)":"darkkhaki","rgb(192, 192, 192)":"silver","rgb(199, 21, 133)":"mediumvioletred","rgb(205, 92, 92)":"indianred","rgb(205, 133, 63)":"peru","rgb(210, 105, 30)":"chocolate","rgb(210, 180, 140)":"tan","rgb(211, 211, 211)":"lightgray","rgb(216, 191, 216)":"thistle","rgb(218, 165, 32)":"goldenrod","rgb(218, 112, 214)":"orchid","rgb(219, 112, 147)":"palevioletred","rgb(220, 20, 60)":"crimson","rgb(220, 220, 220)":"gainsboro","rgb(221, 160, 221)":"plum","rgb(222, 184, 135)":"burlywood","rgb(224, 255, 255)":"lightcyan","rgb(230, 230, 250)":"lavender","rgb(233, 150, 122)":"darksalmon","rgb(238, 232, 170)":"palegoldenrod","rgb(238, 130, 238)":"violet","rgb(240, 255, 255)":"azure","rgb(240, 255, 240)":"honeydew","rgb(240, 230, 140)":"khaki","rgb(240, 128, 128)":"lightcoral","rgb(244, 164, 96)":"sandybrown","rgb(245, 245, 220)":"beige","rgb(245, 255, 250)":"mintcream","rgb(245, 222, 179)":"wheat","rgb(245, 245, 245)":"whitesmoke","rgb(248, 248, 255)":"ghostwhite","rgb(250, 250, 210)":"lightgoldenrodyellow","rgb(250, 240, 230)":"linen","rgb(250, 128, 114)":"salmon","rgb(253, 245, 230)":"oldlace","rgb(255, 228, 196)":"bisque","rgb(255, 235, 205)":"blanchedalmond","rgb(255, 127, 80)":"coral","rgb(255, 248, 220)":"cornsilk","rgb(255, 140, 0)":"darkorange","rgb(255, 20, 147)":"deeppink","rgb(255, 250, 240)":"floralwhite","rgb(255, 215, 0)":"gold","rgb(255, 105, 180)":"hotpink","rgb(255, 255, 240)":"ivory","rgb(255, 240, 245)":"lavenderblush","rgb(255, 250, 205)":"lemonchiffon","rgb(255, 182, 193)":"lightpink","rgb(255, 160, 122)":"lightsalmon","rgb(255, 255, 224)":"lightyellow","rgb(255, 0, 255)":"magenta","rgb(255, 228, 225)":"mistyrose","rgb(255, 228, 181)":"moccasin","rgb(255, 222, 173)":"navajowhite","rgb(255, 165, 0)":"orange","rgb(255, 69, 0)":"orangered","rgb(255, 239, 213)":"papayawhip","rgb(255, 218, 185)":"peachpuff","rgb(255, 192, 203)":"pink","rgb(255, 0, 0)":"red","rgb(255, 245, 238)":"seashell","rgb(255, 250, 250)":"snow","rgb(255, 99, 71)":"tomato","rgb(255, 255, 255)":"white","rgb(255, 255, 0)":"yellow","rgb(102, 51, 153)":"rebeccapurple"};
var i={aqua:{r:0,g:255,b:255},aliceblue:{r:240,g:248,b:255},antiquewhite:{r:250,g:235,b:215},black:{r:0,g:0,b:0},blue:{r:0,g:0,b:255},cyan:{r:0,g:255,b:255},darkblue:{r:0,g:0,b:139},darkcyan:{r:0,g:139,b:139},darkgreen:{r:0,g:100,b:0},darkturquoise:{r:0,g:206,b:209},deepskyblue:{r:0,g:191,b:255},green:{r:0,g:128,b:0},lime:{r:0,g:255,b:0},mediumblue:{r:0,g:0,b:205},mediumspringgreen:{r:0,g:250,b:154},navy:{r:0,g:0,b:128},springgreen:{r:0,g:255,b:127},teal:{r:0,g:128,b:128},midnightblue:{r:25,g:25,b:112},dodgerblue:{r:30,g:144,b:255},lightseagreen:{r:32,g:178,b:170},forestgreen:{r:34,g:139,b:34},seagreen:{r:46,g:139,b:87},darkslategray:{r:47,g:79,b:79},darkslategrey:{r:47,g:79,b:79},limegreen:{r:50,g:205,b:50},mediumseagreen:{r:60,g:179,b:113},turquoise:{r:64,g:224,b:208},royalblue:{r:65,g:105,b:225},steelblue:{r:70,g:130,b:180},darkslateblue:{r:72,g:61,b:139},mediumturquoise:{r:72,g:209,b:204},indigo:{r:75,g:0,b:130},darkolivegreen:{r:85,g:107,b:47},cadetblue:{r:95,g:158,b:160},cornflowerblue:{r:100,g:149,b:237},mediumaquamarine:{r:102,g:205,b:170},dimgray:{r:105,g:105,b:105},dimgrey:{r:105,g:105,b:105},slateblue:{r:106,g:90,b:205},olivedrab:{r:107,g:142,b:35},slategray:{r:112,g:128,b:144},slategrey:{r:112,g:128,b:144},lightslategray:{r:119,g:136,b:153},lightslategrey:{r:119,g:136,b:153},mediumslateblue:{r:123,g:104,b:238},lawngreen:{r:124,g:252,b:0},aquamarine:{r:127,g:255,b:212},chartreuse:{r:127,g:255,b:0},gray:{r:128,g:128,b:128},grey:{r:128,g:128,b:128},maroon:{r:128,g:0,b:0},olive:{r:128,g:128,b:0},purple:{r:128,g:0,b:128},lightskyblue:{r:135,g:206,b:250},skyblue:{r:135,g:206,b:235},blueviolet:{r:138,g:43,b:226},darkmagenta:{r:139,g:0,b:139},darkred:{r:139,g:0,b:0},saddlebrown:{r:139,g:69,b:19},darkseagreen:{r:143,g:188,b:143},lightgreen:{r:144,g:238,b:144},mediumpurple:{r:147,g:112,b:219},darkviolet:{r:148,g:0,b:211},palegreen:{r:152,g:251,b:152},darkorchid:{r:153,g:50,b:204},yellowgreen:{r:154,g:205,b:50},sienna:{r:160,g:82,b:45},brown:{r:165,g:42,b:42},darkgray:{r:169,g:169,b:169},darkgrey:{r:169,g:169,b:169},greenyellow:{r:173,g:255,b:47},lightblue:{r:173,g:216,b:230},paleturquoise:{r:175,g:238,b:238},lightsteelblue:{r:176,g:196,b:222},powderblue:{r:176,g:224,b:230},firebrick:{r:178,g:34,b:34},darkgoldenrod:{r:184,g:134,b:11},mediumorchid:{r:186,g:85,b:211},rosybrown:{r:188,g:143,b:143},darkkhaki:{r:189,g:183,b:107},silver:{r:192,g:192,b:192},mediumvioletred:{r:199,g:21,b:133},indianred:{r:205,g:92,b:92},peru:{r:205,g:133,b:63},chocolate:{r:210,g:105,b:30},tan:{r:210,g:180,b:140},lightgray:{r:211,g:211,b:211},lightgrey:{r:211,g:211,b:211},thistle:{r:216,g:191,b:216},goldenrod:{r:218,g:165,b:32},orchid:{r:218,g:112,b:214},palevioletred:{r:219,g:112,b:147},crimson:{r:220,g:20,b:60},gainsboro:{r:220,g:220,b:220},plum:{r:221,g:160,b:221},burlywood:{r:222,g:184,b:135},lightcyan:{r:224,g:255,b:255},lavender:{r:230,g:230,b:250},darksalmon:{r:233,g:150,b:122},palegoldenrod:{r:238,g:232,b:170},violet:{r:238,g:130,b:238},azure:{r:240,g:255,b:255},honeydew:{r:240,g:255,b:240},khaki:{r:240,g:230,b:140},lightcoral:{r:240,g:128,b:128},sandybrown:{r:244,g:164,b:96},beige:{r:245,g:245,b:220},mintcream:{r:245,g:255,b:250},wheat:{r:245,g:222,b:179},whitesmoke:{r:245,g:245,b:245},ghostwhite:{r:248,g:248,b:255},lightgoldenrodyellow:{r:250,g:250,b:210},linen:{r:250,g:240,b:230},salmon:{r:250,g:128,b:114},oldlace:{r:253,g:245,b:230},bisque:{r:255,g:228,b:196},blanchedalmond:{r:255,g:235,b:205},coral:{r:255,g:127,b:80},cornsilk:{r:255,g:248,b:220},darkorange:{r:255,g:140,b:0},deeppink:{r:255,g:20,b:147},floralwhite:{r:255,g:250,b:240},fuchsia:{r:255,g:0,b:255},gold:{r:255,g:215,b:0},hotpink:{r:255,g:105,b:180},ivory:{r:255,g:255,b:240},lavenderblush:{r:255,g:240,b:245},lemonchiffon:{r:255,g:250,b:205},lightpink:{r:255,g:182,b:193},lightsalmon:{r:255,g:160,b:122},lightyellow:{r:255,g:255,b:224},magenta:{r:255,g:0,b:255},mistyrose:{r:255,g:228,b:225},moccasin:{r:255,g:228,b:181},navajowhite:{r:255,g:222,b:173},orange:{r:255,g:165,b:0},orangered:{r:255,g:69,b:0},papayawhip:{r:255,g:239,b:213},peachpuff:{r:255,g:218,b:185},pink:{r:255,g:192,b:203},red:{r:255,g:0,b:0},seashell:{r:255,g:245,b:238},snow:{r:255,g:250,b:250},tomato:{r:255,g:99,b:71},white:{r:255,g:255,b:255},yellow:{r:255,g:255,b:0},rebeccapurple:{r:102,g:51,b:153}};
k.exports={rgbToName:j,nameToRgbObject:i}},{}],159:[function(i,h,f){h.exports=function g(a){return"#"+(a).toString(16)
}},{}],160:[function(i,h,g){h.exports=function f(a){return parseInt(a.substr(1),16)
}},{}],161:[function(j,i,k){var h=j("./shortToLongHex");i.exports=function g(a){a=h(a);
var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return b?"rgb("+parseInt(b[1],16)+", "+parseInt(b[2],16)+", "+parseInt(b[3],16)+")":null
}},{"./shortToLongHex":175}],162:[function(o,m,i){var k=o("./isRgb");var l=o("./isRgba");
var j=o("./isHex");m.exports=function n(a){return j(a)||k(a)||l(a)}},{"./isHex":163,"./isRgb":164,"./isRgba":165}],163:[function(i,h,f){h.exports=function g(a){var b=/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
return b.test(a)}},{}],164:[function(f,i,g){i.exports=function h(a){var b=/^rgb\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*\)$/;
return b.exec(a)!==null}},{}],165:[function(f,i,g){i.exports=function h(a){var b=/^rgba\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*(0(\.\d+)?|1(\.0+)?)\s*\)$/;
return b.exec(a)!==null}},{}],166:[function(n,m,o){var i=n("./isHex");var j=n("./hexToRgb");
var k=n("./rgbToObject");m.exports=function l(g,a,b){g=i(g)?j(g):g;a=i(a)?j(a):a;
g=k(g);a=k(a);var c=g.r+((a.r-g.r)*b);var d=g.g+((a.g-g.g)*b);var f=g.b+((a.b-g.b)*b);
return"rgb("+Math.round(c)+", "+Math.round(d)+", "+Math.round(f)+")"}},{"./hexToRgb":161,"./isHex":163,"./rgbToObject":172}],167:[function(g,k,h){var j=g("./rgbToObject");
k.exports=function i(b){var a=j(b);return[a.r,a.g,a.b]}},{"./rgbToObject":172}],168:[function(n,m,i){var o=n("./hexToDecimal");
var k=n("./rgbToArray");var l=n("./rgbToHex");m.exports=function j(b){var a=l.apply(this,k(b));
return o(a)}},{"./hexToDecimal":160,"./rgbToArray":167,"./rgbToHex":169}],169:[function(f,i,g){i.exports=function h(a,b,c){return"#"+((1<<24)+(a<<16)+(b<<8)+c).toString(16).slice(1)
}},{}],170:[function(i,h,f){h.exports=function g(v,l,c){if(arguments.length!==3){return false
}v/=255;l/=255;c/=255;var b=Math.max(v,l,c);var s=Math.min(v,l,c);var d=b+s;var a=b-s;
var r;var w;var u=(d/2);if(b===s){r=w=0}else{w=u>0.5?a/(2-b-s):a/d;switch(b){case v:r=(l-c)/a;
break;case l:r=2+((c-v)/a);break;case c:r=4+((v-l)/a);break}r*=60;if(r<0){r+=360
}}return([r,Math.round(100*w),Math.round(100*u)])}},{}],171:[function(i,h,g){h.exports=function f(y,r,d){if(arguments.length!==3){return false
}var x=y/255;var w=r/255;var b=d/255;var c=Math.max(x,w,b);var v=Math.min(x,w,b);
var s;var z;var A=c;var a=c-v;z=c===0?0:a/c;if(c===v){s=0}else{switch(c){case x:s=(w-b)/a+(w<b?6:0);
break;case w:s=(b-x)/a+2;break;case b:s=(x-w)/a+4;break}s/=6}return[Math.round(360*s),Math.round(100*z),Math.round(100*A)]
}},{}],172:[function(f,i,g){i.exports=function h(b){var a=/rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/;
var c=a.exec(b);return{r:Number(c[1]),g:Number(c[2]),b:Number(c[3])}}},{}],173:[function(g,k,h){var i=g("./rgbaToObject");
k.exports=function j(b){var a=i(b);return[a.r,a.g,a.b,a.a]}},{"./rgbaToObject":174}],174:[function(f,i,g){i.exports=function h(b){var a=/rgba\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0(\.\d+)?|1(\.0+)?)\s*\)/;
var c=a.exec(b);return{r:Number(c[1]),g:Number(c[2]),b:Number(c[3]),a:Number(c[4])}
}},{}],175:[function(i,h,f){h.exports=function g(a){var b=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;
a=a.replace(b,function(l,c,d,m){return"#"+c+c+d+d+m+m});return a}},{}],176:[function(d,g,f){g.exports={createBezier:d("./ac-easing/createBezier"),createPredefined:d("./ac-easing/createPredefined"),createStep:d("./ac-easing/createStep"),Ease:d("./ac-easing/Ease")}
},{"./ac-easing/Ease":177,"./ac-easing/createBezier":178,"./ac-easing/createPredefined":179,"./ac-easing/createStep":180}],177:[function(h,m,i){var j="Ease expects an easing function.";
function k(a,b){if(typeof a!=="function"){throw new TypeError(j)}this.easingFunction=a;
this.cssString=b||null}var l=k.prototype;l.getValue=function(a){return this.easingFunction(a,0,1,1)
};m.exports=k},{}],178:[function(i,o,j){i("@marcom/ac-polyfills/Array/prototype.every");
var m=i("./Ease");var k=i("./helpers/KeySpline");var n="Bezier curve expects exactly four (4) numbers. Given: ";
o.exports=function l(r,b,s,c){var a=Array.prototype.slice.call(arguments);var f=a.every(function(p){return(typeof p==="number")
});if(a.length!==4||!f){throw new TypeError(n+a)}var d=new k(r,b,s,c);var h=function(q,w,p,v){return d.get(q/v)*p+w
};var g="cubic-bezier("+a.join(", ")+")";return new m(h,g)}},{"./Ease":177,"./helpers/KeySpline":181,"@marcom/ac-polyfills/Array/prototype.every":139}],179:[function(q,s,p){var l=q("./createStep");
var o=q("./helpers/cssAliases");var r=q("./helpers/easingFunctions");var m=q("./Ease");
var n='Easing function "%TYPE%" not recognized among the following: '+Object.keys(r).join(", ");
s.exports=function k(b){var a;if(b==="step-start"){return l(1,"start")}else{if(b==="step-end"){return l(1,"end")
}else{a=r[b]}}if(!a){throw new Error(n.replace("%TYPE%",b))}return new m(a,o[b])
}},{"./Ease":177,"./createStep":180,"./helpers/cssAliases":182,"./helpers/easingFunctions":183}],180:[function(n,m,o){var l=n("./Ease");
var i="Step function expects a numeric value greater than zero. Given: ";var j='Step function direction must be either "start" or "end" (default). Given: ';
m.exports=function k(d,a){a=a||"end";if(typeof d!=="number"||d<1){throw new TypeError(i+d)
}if(a!=="start"&&a!=="end"){throw new TypeError(j+a)}var b=function(h,f,g,s){var t=g/d;
var u=Math[(a==="start")?"floor":"ceil"](h/s*d);return f+t*u};var c="steps("+d+", "+a+")";
return new l(b,c)}},{"./Ease":177}],181:[function(f,i,g){
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
function h(a,d,b,q){this.get=function(j){if(a===d&&b===q){return j
}return t(p(j),d,q)};function r(k,j){return 1-3*j+3*k}function s(k,j){return 3*j-6*k
}function u(j){return 3*j}function t(j,l,k){return((r(l,k)*j+s(l,k))*j+u(l))*j}function c(j,l,k){return 3*r(l,k)*j*j+2*s(l,k)*j+u(l)
}function p(k){var m=k;for(var l=0;l<4;++l){var j=c(m,a,b);if(j===0){return m}var n=t(m,a,b)-k;
m-=n/j}return m}}i.exports=h},{}],182:[function(i,h,f){var g={linear:"cubic-bezier(0, 0, 1, 1)",ease:"cubic-bezier(0.25, 0.1, 0.25, 1)","ease-in":"cubic-bezier(0.42, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.58, 1)","ease-in-out":"cubic-bezier(0.42, 0, 0.58, 1)","ease-in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","ease-out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","ease-in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","ease-in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","ease-out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","ease-in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","ease-in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","ease-out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","ease-in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","ease-in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","ease-out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","ease-in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","ease-in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","ease-out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","ease-in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","ease-in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","ease-out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","ease-in-out-expo":"cubic-bezier(1, 0, 0, 1)","ease-in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","ease-out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","ease-in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","ease-in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","ease-in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};
g.easeIn=g["ease-in"];g.easeOut=g["ease-out"];g.easeInOut=g["ease-in-out"];g.easeInCubic=g["ease-in-cubic"];
g.easeOutCubic=g["ease-out-cubic"];g.easeInOutCubic=g["ease-in-out-cubic"];g.easeInQuad=g["ease-in-quad"];
g.easeOutQuad=g["ease-out-quad"];g.easeInOutQuad=g["ease-in-out-quad"];g.easeInQuart=g["ease-in-quart"];
g.easeOutQuart=g["ease-out-quart"];g.easeInOutQuart=g["ease-in-out-quart"];g.easeInQuint=g["ease-in-quint"];
g.easeOutQuint=g["ease-out-quint"];g.easeInOutQuint=g["ease-in-out-quint"];g.easeInSine=g["ease-in-sine"];
g.easeOutSine=g["ease-out-sine"];g.easeInOutSine=g["ease-in-out-sine"];g.easeInExpo=g["ease-in-expo"];
g.easeOutExpo=g["ease-out-expo"];g.easeInOutExpo=g["ease-in-out-expo"];g.easeInCirc=g["ease-in-circ"];
g.easeOutCirc=g["ease-out-circ"];g.easeInOutCirc=g["ease-in-out-circ"];g.easeInBack=g["ease-in-back"];
g.easeOutBack=g["ease-out-back"];g.easeInOutBack=g["ease-in-out-back"];h.exports=g
},{}],183:[function(ay,aA,W){var S=ay("../createBezier");var af=S(0.25,0.1,0.25,1).easingFunction;
var aw=S(0.42,0,1,1).easingFunction;var Z=S(0,0,0.58,1).easingFunction;var ae=S(0.42,0,0.58,1).easingFunction;
var ah=function(b,d,a,c){return a*b/c+d};var av=function(b,d,a,c){return a*(b/=c)*b+d
};var O=function(b,d,a,c){return -a*(b/=c)*(b-2)+d};var Y=function(b,d,a,c){if((b/=c/2)<1){return a/2*b*b+d
}return -a/2*((--b)*(b-2)-1)+d};var au=function(b,d,a,c){return a*(b/=c)*b*b+d};
var aB=function(b,d,a,c){return a*((b=b/c-1)*b*b+1)+d};var at=function(b,d,a,c){if((b/=c/2)<1){return a/2*b*b*b+d
}return a/2*((b-=2)*b*b+2)+d};var an=function(b,d,a,c){return a*(b/=c)*b*b*b+d};
var ap=function(b,d,a,c){return -a*((b=b/c-1)*b*b*b-1)+d};var am=function(b,d,a,c){if((b/=c/2)<1){return a/2*b*b*b*b+d
}return -a/2*((b-=2)*b*b*b-2)+d};var ad=function(b,d,a,c){return a*(b/=c)*b*b*b*b+d
};var ag=function(b,d,a,c){return a*((b=b/c-1)*b*b*b*b+1)+d};var ac=function(b,d,a,c){if((b/=c/2)<1){return a/2*b*b*b*b*b+d
}return a/2*((b-=2)*b*b*b*b+2)+d};var az=function(b,d,a,c){return -a*Math.cos(b/c*(Math.PI/2))+a+d
};var Q=function(b,d,a,c){return a*Math.sin(b/c*(Math.PI/2))+d};var aa=function(b,d,a,c){return -a/2*(Math.cos(Math.PI*b/c)-1)+d
};var V=function(b,d,a,c){return(b===0)?d:a*Math.pow(2,10*(b/c-1))+d};var ab=function(b,d,a,c){return(b===c)?d+a:a*(-Math.pow(2,-10*b/c)+1)+d
};var ak=function(b,d,a,c){if(b===0){return d}else{if(b===c){return d+a}else{if((b/=c/2)<1){return a/2*Math.pow(2,10*(b-1))+d
}}}return a/2*(-Math.pow(2,-10*--b)+2)+d};var aq=function(b,d,a,c){return -a*(Math.sqrt(1-(b/=c)*b)-1)+d
};var ax=function(b,d,a,c){return a*Math.sqrt(1-(b=b/c-1)*b)+d};var T=function(b,d,a,c){if((b/=c/2)<1){return -a/2*(Math.sqrt(1-b*b)-1)+d
}return a/2*(Math.sqrt(1-(b-=2)*b)+1)+d};var X=function(c,f,a,d){var h=1.70158;
var b=0;var g=a;if(c===0){return f}else{if((c/=d)===1){return f+a}}if(!b){b=d*0.3
}if(g<Math.abs(a)){g=a;h=b/4}else{h=b/(2*Math.PI)*Math.asin(a/g)}return -(g*Math.pow(2,10*(c-=1))*Math.sin((c*d-h)*(2*Math.PI)/b))+f
};var U=function(c,f,a,d){var h=1.70158;var b=0;var g=a;if(c===0){return f}else{if((c/=d)===1){return f+a
}}if(!b){b=d*0.3}if(g<Math.abs(a)){g=a;h=b/4}else{h=b/(2*Math.PI)*Math.asin(a/g)
}return g*Math.pow(2,-10*c)*Math.sin((c*d-h)*(2*Math.PI)/b)+a+f};var ai=function(c,f,a,d){var h=1.70158;
var b=0;var g=a;if(c===0){return f}else{if((c/=d/2)===2){return f+a}}if(!b){b=d*(0.3*1.5)
}if(g<Math.abs(a)){g=a;h=b/4}else{h=b/(2*Math.PI)*Math.asin(a/g)}if(c<1){return -0.5*(g*Math.pow(2,10*(c-=1))*Math.sin((c*d-h)*(2*Math.PI)/b))+f
}return g*Math.pow(2,-10*(c-=1))*Math.sin((c*d-h)*(2*Math.PI)/b)*0.5+a+f};var aj=function(b,d,a,c,f){if(f===undefined){f=1.70158
}return a*(b/=c)*b*((f+1)*b-f)+d};var al=function(b,d,a,c,f){if(f===undefined){f=1.70158
}return a*((b=b/c-1)*b*((f+1)*b+f)+1)+d};var ar=function(b,d,a,c,f){if(f===undefined){f=1.70158
}if((b/=c/2)<1){return a/2*(b*b*(((f*=(1.525))+1)*b-f))+d}return a/2*((b-=2)*b*(((f*=(1.525))+1)*b+f)+2)+d
};var R=function(b,d,a,c){if((b/=c)<(1/2.75)){return a*(7.5625*b*b)+d}else{if(b<(2/2.75)){return a*(7.5625*(b-=(1.5/2.75))*b+0.75)+d
}else{if(b<(2.5/2.75)){return a*(7.5625*(b-=(2.25/2.75))*b+0.9375)+d}}}return a*(7.5625*(b-=(2.625/2.75))*b+0.984375)+d
};var ao=function(b,d,a,c){return a-R(c-b,0,a,c)+d};var P=function(b,d,a,c){if(b<c/2){return ao(b*2,0,a,c)*0.5+d
}return R(b*2-c,0,a,c)*0.5+a*0.5+d};aA.exports={linear:ah,ease:af,easeIn:aw,"ease-in":aw,easeOut:Z,"ease-out":Z,easeInOut:ae,"ease-in-out":ae,easeInCubic:au,"ease-in-cubic":au,easeOutCubic:aB,"ease-out-cubic":aB,easeInOutCubic:at,"ease-in-out-cubic":at,easeInQuad:av,"ease-in-quad":av,easeOutQuad:O,"ease-out-quad":O,easeInOutQuad:Y,"ease-in-out-quad":Y,easeInQuart:an,"ease-in-quart":an,easeOutQuart:ap,"ease-out-quart":ap,easeInOutQuart:am,"ease-in-out-quart":am,easeInQuint:ad,"ease-in-quint":ad,easeOutQuint:ag,"ease-out-quint":ag,easeInOutQuint:ac,"ease-in-out-quint":ac,easeInSine:az,"ease-in-sine":az,easeOutSine:Q,"ease-out-sine":Q,easeInOutSine:aa,"ease-in-out-sine":aa,easeInExpo:V,"ease-in-expo":V,easeOutExpo:ab,"ease-out-expo":ab,easeInOutExpo:ak,"ease-in-out-expo":ak,easeInCirc:aq,"ease-in-circ":aq,easeOutCirc:ax,"ease-out-circ":ax,easeInOutCirc:T,"ease-in-out-circ":T,easeInBack:aj,"ease-in-back":aj,easeOutBack:al,"ease-out-back":al,easeInOutBack:ar,"ease-in-out-back":ar,easeInElastic:X,"ease-in-elastic":X,easeOutElastic:U,"ease-out-elastic":U,easeInOutElastic:ai,"ease-in-out-elastic":ai,easeInBounce:ao,"ease-in-bounce":ao,easeOutBounce:R,"ease-out-bounce":R,easeInOutBounce:P,"ease-in-out-bounce":P}
},{"../createBezier":178}],184:[function(d,g,f){g.exports={EventEmitterMicro:d("./ac-event-emitter-micro/EventEmitterMicro")}
},{"./ac-event-emitter-micro/EventEmitterMicro":185}],185:[function(g,k,h){function i(){this._events={}
}var j=i.prototype;j.on=function(b,a){this._events[b]=this._events[b]||[];this._events[b].unshift(a)
};j.once=function(d,a){var b=this;function c(f){b.off(d,c);if(f!==undefined){a(f)
}else{a()}}this.on(d,c)};j.off=function(c,a){if(!this.has(c)){return}var b=this._events[c].indexOf(a);
if(b===-1){return}this._events[c].splice(b,1)};j.trigger=function(c,a){if(!this.has(c)){return
}for(var b=this._events[c].length-1;b>=0;b--){if(a!==undefined){this._events[c][b](a)
}else{this._events[c][b]()}}};j.has=function(a){if(a in this._events===false||this._events[a].length===0){return false
}return true};j.destroy=function(){for(var a in this._events){this._events[a]=null
}this._events=null};k.exports=i},{}],186:[function(p,r,o){p("./helpers/Float32Array");
var s=p("./helpers/transitionEnd");var n=p("@marcom/ac-clip").Clip;var l=p("./clips/ClipEasing");
var q=p("./clips/ClipInlineCss");var m=p("./clips/ClipTransitionCss");function t(d,a,c,b){if(d.nodeType){if(s===undefined||(b&&b.inlineStyles)){return new q(d,a,c,b)
}return new m(d,a,c,b)}return new l(d,a,c,b)}for(var u in n){if(typeof n[u]==="function"&&u.substr(0,1)!=="_"){t[u]=n[u].bind(n)
}}t.to=function(d,a,c,b){b=b||{};if(b.destroyOnComplete===undefined){b.destroyOnComplete=true
}return new t(d,a,c,b).play()};t.from=function(c,d,b,a){a=a||{};a.propsFrom=b;if(a.destroyOnComplete===undefined){a.destroyOnComplete=true
}return new t(c,d,a.propsTo,a).play()};r.exports=t},{"./clips/ClipEasing":189,"./clips/ClipInlineCss":190,"./clips/ClipTransitionCss":191,"./helpers/Float32Array":194,"./helpers/transitionEnd":203,"@marcom/ac-clip":154}],187:[function(d,g,f){g.exports=d("./timeline/Timeline")
},{"./timeline/Timeline":205}],188:[function(d,g,f){g.exports={Clip:d("./Clip"),Timeline:d("./Timeline")}
},{"./Clip":186,"./Timeline":187}],189:[function(z,A,y){var r=z("@marcom/ac-object/clone");
var v=z("@marcom/ac-object/create");var o=z("@marcom/ac-easing").createPredefined;
var q=z("../helpers/isCssCubicBezierString");var w=z("../helpers/BezierCurveCssManager");
var t=z("@marcom/ac-clip").Clip;var s=z("@marcom/ac-easing").Ease;function p(b,c,a,d){if(d&&q(d.ease)){d.ease=w.create(d.ease).toEasingFunction()
}d=d||{};this._propsEase=d.propsEase||{};t.call(this,b,c,a,d)}var u=t.prototype;
var x=p.prototype=v(u);x.reset=function(){var a=u.reset.call(this);if(this._clips){var b=this._clips.length;
while(b--){this._clips[b].reset()}}return a};x.destroy=function(){if(this._clips){var a=this._clips.length;
while(a--){this._clips[a].destroy()}this._clips=null}this._eases=null;this._storeOnUpdate=null;
return u.destroy.call(this)};x._prepareProperties=function(){var i=0;var f={};var h={};
var d={};var a;var b;if(this._propsEase){for(a in this._propsTo){if(this._propsTo.hasOwnProperty(a)){b=this._propsEase[a];
if(q(b)){b=w.create(b).toEasingFunction()}if(b===undefined){if(f[this._ease]===undefined){f[this._ease]={};
h[this._ease]={};d[this._ease]=this._ease.easingFunction;i++}f[this._ease][a]=this._propsTo[a];
h[this._ease][a]=this._propsFrom[a]}else{if(typeof b==="function"){f[i]={};h[i]={};
f[i][a]=this._propsTo[a];h[i][a]=this._propsFrom[a];d[i]=b;i++}else{if(f[b]===undefined){f[b]={};
h[b]={};d[b]=b;i++}f[b][a]=this._propsTo[a];h[b][a]=this._propsFrom[a]}}}}if(i>1){var g=r(this._options||{},true);
var c=this._duration*0.001;this._storeOnUpdate=this._onUpdate;this._onUpdate=this._onUpdateClips;
g.onStart=null;g.onUpdate=null;g.onDraw=null;g.onComplete=null;this._clips=[];for(b in f){if(f.hasOwnProperty(b)){g.ease=d[b];
g.propsFrom=h[b];this._clips.push(new t(this._target,c,f[b],g))}}b="linear";this._propsTo={};
this._propsFrom={}}else{for(a in d){if(d.hasOwnProperty(a)){b=d[a]}}}if(b!==undefined){this._ease=(typeof b==="function")?new s(b):o(b)
}}return u._prepareProperties.call(this)};x._onUpdateClips=function(a){var c=(this._direction===1)?a.progress():1-a.progress();
var b=this._clips.length;while(b--){this._clips[b].progress(c)}if(typeof this._storeOnUpdate==="function"){this._storeOnUpdate.call(this,this)
}};A.exports=p},{"../helpers/BezierCurveCssManager":193,"../helpers/isCssCubicBezierString":199,"@marcom/ac-clip":154,"@marcom/ac-easing":176,"@marcom/ac-object/clone":127,"@marcom/ac-object/create":128}],190:[function(u,w,t){var o=u("@marcom/ac-dom-styles/setStyle");
var x=u("../helpers/convertToStyleObject");var v=u("../helpers/convertToTransitionableObjects");
var r=u("@marcom/ac-object/create");var q=u("../helpers/removeTransitions");var n=u("./ClipEasing");
function y(b,c,a,d){d=d||{};this._el=b;this._storeOnStart=d.onStart||null;this._storeOnDraw=d.onDraw||null;
this._storeOnComplete=d.onComplete||null;d.onStart=this._onStart;d.onDraw=this._onDraw;
d.onComplete=this._onComplete;n.call(this,{},c,a,d)}var p=n.prototype;var s=y.prototype=r(p);
s.play=function(){var a=p.play.call(this);if(this._remainingDelay!==0){o(this._el,x(this._target))
}return a};s.reset=function(){var a=p.reset.call(this);o(this._el,x(this._target));
return a};s.destroy=function(){this._el=null;this._completeStyles=null;this._storeOnStart=null;
this._storeOnDraw=null;this._storeOnComplete=null;return p.destroy.call(this)};
s.target=function(){return this._el};s._prepareProperties=function(){var b=v(this._el,this._propsTo,this._propsFrom);
this._target=b.target;this._propsFrom=b.propsFrom;this._propsTo=b.propsTo;q(this._el,this._target);
var d=(this._isYoyo)?this._propsFrom:this._propsTo;this._completeStyles=x(d);if(this._options.removeStylesOnComplete!==undefined){var a;
var c=this._options.removeStylesOnComplete;if(typeof c==="boolean"&&c){for(a in this._completeStyles){if(this._completeStyles.hasOwnProperty(a)){this._completeStyles[a]=null
}}}else{if(typeof c==="object"&&c.length){var f=c.length;while(f--){a=c[f];if(this._completeStyles.hasOwnProperty(a)){this._completeStyles[a]=null
}}}}}return p._prepareProperties.call(this)};s._onStart=function(a){if(this.playing()&&this._direction===1&&this._delay===0){o(this._el,x(this._propsFrom))
}if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,this)}};
s._onDraw=function(a){o(this._el,x(this._target));if(typeof this._storeOnDraw==="function"){this._storeOnDraw.call(this,this)
}};s._onComplete=function(a){o(this._el,this._completeStyles);if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,this)
}};w.exports=y},{"../helpers/convertToStyleObject":196,"../helpers/convertToTransitionableObjects":197,"../helpers/removeTransitions":200,"./ClipEasing":189,"@marcom/ac-dom-styles/setStyle":99,"@marcom/ac-object/create":128}],191:[function(N,V,z){var T=N("@marcom/ac-dom-styles/setStyle");
var S=N("@marcom/ac-dom-styles/getStyle");var U=N("../helpers/convertToStyleObject");
var I=N("../helpers/convertToTransitionableObjects");var A=N("@marcom/ac-object/clone");
var K=N("@marcom/ac-object/create");var D=N("@marcom/ac-easing").createPredefined;
var L=N("../helpers/isCssCubicBezierString");var C=N("../helpers/removeTransitions");
var O=N("../helpers/transitionEnd");var J=N("../helpers/waitAnimationFrames");var B=N("../helpers/BezierCurveCssManager");
var W=N("@marcom/ac-clip").Clip;var F=N("./ClipEasing");var E=N("@marcom/ac-page-visibility").PageVisibilityManager;
var R="ease";var P="%EASE% is not a supported predefined ease when transitioning with Elements and CSS transition. If you need to use %EASE% then pass the inlineStyle:true option.";
var M="Function eases are not supported when using CSS transitions with Elements. Either use a cubic-bezier string (e.g. 'cubic-bezier(0, 0, 1, 1)' or pass the inlineStyle option as `true` to render styles each frame instead of using CSS transitions.";
function Q(d,a,c,b){b=b||{};this._el=d;this._storeEase=b.ease;if(typeof this._storeEase==="function"){throw new Error(M)
}this._storeOnStart=b.onStart||null;this._storeOnComplete=b.onComplete||null;b.onStart=this._onStart.bind(this);
b.onComplete=this._onComplete.bind(this);this._stylesTo=A(c,true);this._stylesFrom=(b.propsFrom)?A(b.propsFrom,true):{};
this._propsEase=(b.propsEase)?A(b.propsEase,true):{};if(L(b.ease)){b.ease=B.create(b.ease).toEasingFunction()
}W.call(this,{},a,{},b);this._propsFrom={}}var H=W.prototype;var G=Q.prototype=K(H);
G.play=function(){var a=H.play.call(this);if(this._direction===1&&this.progress()===0&&this._remainingDelay!==0){this._applyStyles(0,U(this._stylesFrom))
}return a};G.reset=function(){var a=H.reset.call(this);this._stylesClip.reset();
this._applyStyles(0,U(this._styles));return a};G.destroy=function(){E.off("changed",this._onVisibilityChanged);
this._removeTransitionListener();this.off("pause",this._onPaused);this._onPaused();
this._stylesClip.destroy();this._stylesClip=null;this._el=null;this._propsArray=null;
this._styles=null;this._stylesFrom=null;this._stylesTo=null;this._completeStyles=null;
this._storeOnStart=null;this._storeOnComplete=null;this._onTransitionEnded=null;
return H.destroy.call(this)};G.target=function(){return this._el};G.duration=function(a){var b=H.duration.call(this,a);
if(a===undefined){return b}if(this.playing()){this.progress(this._progress)}return b
};G.progress=function(b){var a=H.progress.call(this,b);if(b===undefined){return a
}b=(this._direction===1)?b:1-b;this._stylesClip.progress(b);this._applyStyles(0,U(this._styles));
if(this.playing()){this._isWaitingForStylesToBeApplied=true;J(this._setStylesAfterWaiting,2)
}return a};G._prepareProperties=function(){var g=I(this._el,this._stylesTo,this._stylesFrom);
this._styles=g.target;this._stylesTo=g.propsTo;this._stylesFrom=g.propsFrom;var f=this._storeEase||R;
this._eases={};this._propsArray=[];var b;this._styleCompleteTo=U(this._stylesTo);
this._styleCompleteFrom=U(this._stylesFrom);this._propsEaseKeys={};var c;for(c in this._stylesTo){if(this._stylesTo.hasOwnProperty(c)){this._propsArray[this._propsArray.length]=c;
if(this._propsEase[c]===undefined){if(this._eases[f]===undefined){b=this._convertEase(f);
this._eases[f]=b.css}this._propsEaseKeys[c]=f}else{if(this._eases[this._propsEase[c]]===undefined){b=this._convertEase(this._propsEase[c]);
this._eases[this._propsEase[c]]=b.css;this._propsEaseKeys[c]=this._propsEase[c];
this._propsEase[c]=b.js}else{if(L(this._propsEase[c])){this._propsEaseKeys[c]=this._propsEase[c];
this._propsEase[c]=this._eases[this._propsEase[c]]["1"].toEasingFunction()}}}}}this._onPaused=this._onPaused.bind(this);
this.on("pause",this._onPaused);this._setOtherTransitions();this._currentTransitionStyles=this._otherTransitions;
this._completeStyles=U((this._isYoyo)?this._stylesFrom:this._stylesTo);if(this._options.removeStylesOnComplete!==undefined){var a=this._options.removeStylesOnComplete;
if(typeof a==="boolean"&&a){for(c in this._stylesTo){this._completeStyles[c]=null
}}else{if(typeof a==="object"&&a.length){var d=a.length;while(d--){this._completeStyles[a[d]]=null
}}}}this._onTransitionEnded=this._onTransitionEnded.bind(this);this._setStylesAfterWaiting=this._setStylesAfterWaiting.bind(this);
this._onVisibilityChanged=this._onVisibilityChanged.bind(this);E.on(E.CHANGED,this._onVisibilityChanged);
this._stylesClip=new F(this._styles,1,this._stylesTo,{ease:this._options.ease,propsFrom:this._stylesFrom,propsEase:this._options.propsEase});
W._remove(this._stylesClip);return H._prepareProperties.call(this)};G._convertEase=function(d){if(typeof d==="function"){throw new Error(M)
}var c;var a;if(L(d)){c=B.create(d);a=c.toEasingFunction()}else{var b=D(d);if(b.cssString===null){throw new Error(P.replace(/%EASE%/g,d))
}c=B.create(b.cssString);a=d}return{css:{"1":c,"-1":c.reversed()},js:a}};G._complete=function(){if((this._isWaitingForStylesToBeApplied||this._isTransitionEnded||!this._isListeningForTransitionEnd)&&this.progress()===1){this._isWaitingForStylesToBeApplied=false;
H._complete.call(this)}};G._onTransitionEnded=function(){this._isTransitionEnded=true;
this._complete()};G._addTransitionListener=function(){if(!this._isListeningForTransitionEnd&&this._el&&this._onTransitionEnded){this._isListeningForTransitionEnd=true;
this._isTransitionEnded=false;this._el.addEventListener(O,this._onTransitionEnded)
}};G._removeTransitionListener=function(){if(this._isListeningForTransitionEnd&&this._el&&this._onTransitionEnded){this._isListeningForTransitionEnd=false;
this._isTransitionEnded=false;this._el.removeEventListener(O,this._onTransitionEnded)
}};G._applyStyles=function(f,d){if(f>0){var c="";var a={};var b;for(b in this._eases){if(this._eases.hasOwnProperty(b)){a[b]=this._eases[b][this._direction].splitAt(this.progress()).toCSSString()
}}for(b in this._stylesTo){if(this._stylesTo.hasOwnProperty(b)){c+=b+" "+f+"ms "+a[this._propsEaseKeys[b]]+" 0ms, "
}}this._currentTransitionStyles=c.substr(0,c.length-2);if(!this._doStylesMatchCurrentStyles(d)){this._addTransitionListener()
}else{this._removeTransitionListener()}}else{this._currentTransitionStyles="";this._removeTransitionListener()
}d.transition=this._getOtherClipTransitionStyles()+this._currentTransitionStyles;
T(this._el,d)};G._doStylesMatchCurrentStyles=function(c){var a=S.apply(this,[this._el].concat([this._propsArray]));
var b;for(b in c){if(c.hasOwnProperty(b)&&a.hasOwnProperty(b)&&c[b]!==a[b]){return false
}}return true};G._setStylesAfterWaiting=function(){this._isWaitingForStylesToBeApplied=false;
if(this.playing()){var a=this._durationMs*(1-this.progress());var b=(this._direction>0)?this._styleCompleteTo:this._styleCompleteFrom;
this._applyStyles(a,b)}};G._setOtherTransitions=function(){C(this._el,this._stylesTo);
var b=W.getAll(this._el);var a=b.length;while(a--){if(b[a]!==this&&b[a].playing()&&b[a]._otherTransitions&&b[a]._otherTransitions.length){this._otherTransitions=b[a]._otherTransitions;
return}}this._otherTransitions=S(this._el,"transition").transition;if(this._otherTransitions===null||this._otherTransitions==="all 0s ease 0s"){this._otherTransitions=""
}};G._getTransitionStyles=function(){var a=this._getOtherClipTransitionStyles();
if(this._otherTransitions.length){a+=this._otherTransitions}else{if(a.length){a=a.substr(0,a.length-2)
}}return a};G._getOtherClipTransitionStyles=function(){var c="";var b=W.getAll(this._el);
var a=b.length;while(a--){if(b[a]!==this&&b[a].playing()&&b[a]._currentTransitionStyles&&b[a]._currentTransitionStyles.length){c+=b[a]._currentTransitionStyles+", "
}}return c};G._onVisibilityChanged=function(b){if(this.playing()&&!b.isHidden){this._update({timeNow:this._getTime()});
var a=this.progress();if(a<1){this.progress(a)}}};G._onPaused=function(a){var b=S.apply(this,[this._el].concat([this._propsArray]));
b.transition=this._getTransitionStyles();this._removeTransitionListener();T(this._el,b)
};G._onStart=function(b){var a=(this._direction===1&&this.progress()===0&&this._delay===0)?2:0;
if(a){this._isWaitingForStylesToBeApplied=true;this._applyStyles(0,this._styleCompleteFrom)
}J(this._setStylesAfterWaiting,a);if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,this)
}};G._onComplete=function(a){this._removeTransitionListener();this._completeStyles.transition=this._getTransitionStyles();
T(this._el,this._completeStyles);if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,this)
}};V.exports=Q},{"../helpers/BezierCurveCssManager":193,"../helpers/convertToStyleObject":196,"../helpers/convertToTransitionableObjects":197,"../helpers/isCssCubicBezierString":199,"../helpers/removeTransitions":200,"../helpers/transitionEnd":203,"../helpers/waitAnimationFrames":204,"./ClipEasing":189,"@marcom/ac-clip":154,"@marcom/ac-dom-styles/getStyle":97,"@marcom/ac-dom-styles/setStyle":99,"@marcom/ac-easing":176,"@marcom/ac-object/clone":127,"@marcom/ac-object/create":128,"@marcom/ac-page-visibility":130}],192:[function(m,l,i){var j=m("@marcom/ac-easing").createBezier;
function h(a,b){this.manager=b;this.p1={x:a[0],y:a[1]};this.p2={x:a[2],y:a[3]};
this._isLinear=(this.p1.x===this.p1.y)&&(this.p2.x===this.p2.y);this._cacheSplits={}
}var k=h.prototype;k.splitAt=function(t){if(this._isLinear){return this}t=Math.round(t*40)/40;
if(t===0){return this}else{if(this._cacheSplits[t]!==undefined){return this._cacheSplits[t]
}}var b=[this.p1.x,this.p2.x];var f=[this.p1.y,this.p2.y];var g=0;var d=t;var v=0;
var c=1;var u=this._getStartX(t,b);while(d!==u&&g<1000){if(d<u){c=t}else{v=t}t=v+((c-v)*0.5);
u=this._getStartX(t,b);++g}var s=this._splitBezier(t,b,f);var a=this._normalize(s);
var w=this.manager.create(a);this._cacheSplits[d]=w;return w};k.reversed=function(){var a=this.toArray();
return this.manager.create([0.5-(a[2]-0.5),0.5-(a[3]-0.5),0.5-(a[0]-0.5),0.5-(a[1]-0.5)])
};k.toArray=function(){return[this.p1.x,this.p1.y,this.p2.x,this.p2.y]};k.toCSSString=function(){return"cubic-bezier("+this.p1.x+", "+this.p1.y+", "+this.p2.x+", "+this.p2.y+")"
};k.toEasingFunction=function(){return j.apply(this,this.toArray()).easingFunction
};k._getStartX=function(a,g){var b=a-1;var c=a*a;var d=b*b;var f=c*a;return f-3*c*b*g[1]+3*a*d*g[0]
};k._splitBezier=function(a,g,o){var b=a-1;var c=a*a;var d=b*b;var f=c*a;return[f-3*c*b*g[1]+3*a*d*g[0],f-3*c*b*o[1]+3*a*d*o[0],c-2*a*b*g[1]+d*g[0],c-2*a*b*o[1]+d*o[0],a-b*g[1],a-b*o[1]]
};k._normalize=function(a){return[(a[2]-a[0])/(1-a[0]),(a[3]-a[1])/(1-a[1]),(a[4]-a[0])/(1-a[0]),(a[5]-a[1])/(1-a[1])]
};l.exports=h},{"@marcom/ac-easing":176}],193:[function(m,l,i){var h=m("./BezierCurveCss");
function j(){this._instances={}}var k=j.prototype;k.create=function(a){var b;if(typeof a==="string"){b=a.replace(/ /g,"")
}else{b="cubic-bezier("+a.join(",")+")"}if(this._instances[b]===undefined){if(typeof a==="string"){a=a.match(/\d*\.?\d+/g);
var c=a.length;while(c--){a[c]=Number(a[c])}}this._instances[b]=new h(a,this)}return this._instances[b]
};l.exports=new j()},{"./BezierCurveCss":192}],194:[function(d,g,f){if(typeof window.Float32Array==="undefined"){window.Float32Array=function(){}
}},{}],195:[function(o,n,p){var k=o("@marcom/ac-dom-metrics/getDimensions");var q=o("./splitUnits");
var j={translateX:"width",translateY:"height"};function l(d,b,a){this._transform=d;
var c;var g;var f;for(f in a){if(a.hasOwnProperty(f)&&typeof this._transform[f]==="function"){c=q(a[f]);
if(c.unit==="%"){g=this._convertPercentToPixelValue(f,c.value,b)}else{g=c.value
}this._transform[f].call(this._transform,g)}}}var m=l.prototype;m._convertPercentToPixelValue=function(a,b,c){a=j[a];
var d=k(c);if(d[a]){b*=0.01;return d[a]*b}return b};m.toArray=function(){return this._transform.toArray()
};m.toCSSString=function(){return this._transform.toCSSString()};n.exports=l},{"./splitUnits":201,"@marcom/ac-dom-metrics/getDimensions":76}],196:[function(f,i,g){i.exports=function h(b){var c={};
var d;var a;for(a in b){if(b.hasOwnProperty(a)&&b[a]!==null){if(b[a].isColor){if(b[a].isRgb){c[a]="rgb("+Math.round(b[a].r)+", "+Math.round(b[a].g)+", "+Math.round(b[a].b)+")"
}else{if(b[a].isRgba){c[a]="rgba("+Math.round(b[a].r)+", "+Math.round(b[a].g)+", "+Math.round(b[a].b)+", "+b[a].a+")"
}}}else{if(a==="transform"){d=(b[a].length===6)?"matrix":"matrix3d";c[a]=d+"("+b[a].join(",")+")"
}else{if(!b[a].unit){c[a]=b[a].value}else{c[a]=b[a].value+b[a].unit}}}}}return c
}},{}],197:[function(C,F,A){var x=C("@marcom/ac-dom-styles/getStyle");var v=C("@marcom/ac-object/clone");
var E=C("./splitUnits");var H=C("./toCamCase");var G=C("@marcom/ac-color").Color;
var y=C("@marcom/ac-feature/cssPropertyAvailable");var B=C("@marcom/ac-transform").Transform;
var I=C("./TransformMatrix");var w=function(a){if(G.isRgba(a)){a=new G(a).rgbaObject();
a.isRgba=true}else{a=new G(a).rgbObject();a.isRgb=true}a.isColor=true;return a};
var s=function(a){if(a.isRgb){a.isRgb=false;a.isRgba=true;a.a=1}};var t=function(b,c,a){if(b.isRgba||c.isRgba||a.isRgba){s(b);
s(c);s(a)}};var u=function(a){return[a[0],a[1],0,0,a[2],a[3],0,0,0,0,1,0,a[4],a[5],0,1]
};var z=function(b,c,a){if(b.transform.length===16||c.transform.length===16||a.transform.length===16){if(b.transform.length===6){b.transform=u(b.transform)
}if(c.transform.length===6){c.transform=u(c.transform)}if(a.transform.length===6){a.transform=u(a.transform)
}}};F.exports=function D(i,b,c){var g={};b=v(b,true);c=v(c,true);var j;var a;var f;
var d;var h=y("transform");var k;for(k in b){if(b.hasOwnProperty(k)&&b[k]!==null){if(k==="transform"){if(h){a=new B();
j=x(i,"transform")["transform"]||"none";a.setMatrixValue(j);f=new I(new B(),i,b[k])
}if(f&&f.toCSSString()!==a.toCSSString()){d=new I(c[k]?new B():a.clone(),i,c[k]);
g[k]=a.toArray();b[k]=f.toArray();c[k]=d.toArray()}else{g[k]=null;b[k]=null}}else{j=x(i,k)[H(k)]||c[k];
if(G.isColor(j)){g[k]=w(j);c[k]=(c[k]!==undefined)?w(c[k]):v(g[k],true);b[k]=w(b[k])
}else{g[k]=E(j);c[k]=(c[k]!==undefined)?E(c[k]):v(g[k],true);b[k]=E(b[k])}}}}for(k in c){if(c.hasOwnProperty(k)&&c[k]!==null&&(b[k]===undefined||b[k]===null)){if(k==="transform"){if(h){a=new B();
a.setMatrixValue(getComputedStyle(i).transform||getComputedStyle(i).webkitTransform||"none");
d=new I(new B(),i,c[k])}if(d&&d.toCSSString()!==a.toCSSString()){f=new I(a.clone());
g[k]=a.toArray();b[k]=f.toArray();c[k]=d.toArray()}else{g[k]=null;b[k]=null;c[k]=null
}}else{j=x(i,k)[H(k)];if(G.isColor(j)){g[k]=w(j);b[k]=v(g[k],true);c[k]=w(c[k])
}else{g[k]=E(j);c[k]=E(c[k]);b[k]=v(g[k],true)}}}if(g[k]&&g[k].isColor){t(g[k],c[k],b[k])
}}if(g.transform){z(g,c,b)}return{target:g,propsTo:b,propsFrom:c}}},{"./TransformMatrix":195,"./splitUnits":201,"./toCamCase":202,"@marcom/ac-color":156,"@marcom/ac-dom-styles/getStyle":97,"@marcom/ac-feature/cssPropertyAvailable":30,"@marcom/ac-object/clone":127,"@marcom/ac-transform":231}],198:[function(f,i,g){i.exports=function h(d){if(d.transitionProperty){var a="";
var n=d.transitionProperty.split(", ");var c=d.transitionDuration.split(", ");var b=d.transitionTimingFunction.replace(/\d+[,]+[\s]/gi,function(j){return j.substr(0,j.length-1)
}).split(", ");var p=d.transitionDelay.split(", ");var o=n.length;while(o--){a+=n[o]+" "+c[o]+" "+b[o]+" "+p[o]+", "
}return a.substr(0,a.length-2)}return false}},{}],199:[function(i,h,f){h.exports=function g(a){return typeof a==="string"&&a.substr(0,13)==="cubic-bezier("
}},{}],200:[function(n,m,o){var k=n("@marcom/ac-dom-styles/setStyle");var j=n("@marcom/ac-dom-styles/getStyle");
var l=n("./getShorthandTransition");m.exports=function i(b,g){var a=j(b,"transition","transition-property","transition-duration","transition-timing-function","transition-delay");
a=a.transition||l(a);if(a&&a.length){a=a.split(",");var c=0;var f;var d=a.length;
while(d--){f=a[d].trim().split(" ")[0];if(g[f]!==undefined){a.splice(d,1);++c}}if(c){if(a.length===0){a=["all"]
}k(b,{transition:a.join(",").trim()})}}}},{"./getShorthandTransition":198,"@marcom/ac-dom-styles/getStyle":97,"@marcom/ac-dom-styles/setStyle":99}],201:[function(i,h,f){h.exports=function g(a){a=String(a);
if(a.indexOf(" ")>-1){throw new Error("Shorthand CSS is not supported. Please use longhand CSS only.")
}var b=/(\d*\.?\d*)(.*)/;var d=1;if(a&&a.substr(0,1)==="-"){a=a.substr(1);d=-1}var c=String(a).match(b);
return{value:Number(c[1])*d,unit:c[2]}}},{}],202:[function(i,h,f){h.exports=function g(a){var b=function(l,d,c,m){return(c===0)&&(m.substr(1,3)!=="moz")?d:d.toUpperCase()
};return a.replace(/-(\w)/g,b)}},{}],203:[function(j,i,k){var h;i.exports=(function g(){if(h){return h
}var c;var b=document.createElement("fakeelement");var a={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};
for(c in a){if(b.style[c]!==undefined){h=a[c];return h}}})()},{}],204:[function(j,i,g){var h=j("@marcom/ac-page-visibility").PageVisibilityManager;
i.exports=function k(a,c){if(c){var b=function(m){if(h.isHidden){setTimeout(m,16)
}else{window.requestAnimationFrame(m)}};var d=0;var f=function(){if(d===c){a.call(this)
}else{++d;b(f)}};f()}else{a.call(this)}}},{"@marcom/ac-page-visibility":130}],205:[function(u,w,t){var q=u("@marcom/ac-object/create");
var p=u("@marcom/ac-clip").Clip;var s=u("./TimelineClip");var v=u("./TimelineCallback");
var m=u("./TimelineItemList");var n=p.prototype;function o(a){a=a||{};a.ease=a.ease||"linear";
a.destroyOnComplete=false;this.options=a;p.call(this,{t:0},0,{t:1},a);this._itemList=new m()
}var r=o.prototype=q(n);o.prototype.constructor=o;r._update=function(a){n._update.call(this,a);
this._render()};r.progress=function(a){n.progress.call(this,a);if(a!==undefined){this._render()
}return this._progress};r._render=function(){if(this._itemList.length===0){return
}var b=this._target.t*this._duration;var a=this._itemList.head;var d=a;while(d){d=a.next;
var c=(b-a.position);a.currentTime(c);a=d}};r.addClip=function(b,c){c=(c===undefined)?this.duration():c;
var a=b._delay/1000;this._itemList.append(new s(b,c+a));this._updateDuration()};
r.addCallback=function(b,a){a=(a===undefined)?this.duration():a;this._itemList.append(new v(b,a));
this._updateDuration()};r.remove=function(a){var b=this._itemList.getItem(a);if(b){this._itemList.remove(b);
this._updateDuration()}};r._updateDuration=function(){var a=this._itemList.head;
var b=a.position+a.duration();this._itemList.forEach(function(c){var d=c.position+c.duration();
if(d>=b){a=c;b=d}});this.duration(b)};r.destroy=function(){var a=this._itemList.head;
while(a){var b=a;a=b.next;this._itemList.remove(b)}this._duration=0;return n.destroy.call(this)
};w.exports=o},{"./TimelineCallback":206,"./TimelineClip":207,"./TimelineItemList":208,"@marcom/ac-clip":154,"@marcom/ac-object/create":128}],206:[function(g,k,h){function i(a,b){this.callback=a;
this._delay=0;this.position=b;this._hasTriggered=false;this.prev=null;this.next=null
}var j=i.prototype;j.duration=function(){return 0};j.currentTime=function(a){if(a>=0&&!this._hasTriggered){this.callback();
this._hasTriggered=true}if(a<0&&this._hasTriggered){this.callback();this._hasTriggered=false
}return 0};k.exports=i},{}],207:[function(g,k,h){function i(a,b){this.clip=a;this.position=b;
this.duration=this.clip.duration.bind(this.clip);this.lastProgress=-1;this.prev=null;
this.next=null}var j=i.prototype;j.currentTime=function(a){var b=Math.min(1,Math.max(0,a/this.clip._duration));
if(b!==b){b=1}if(this.lastProgress===b){return this.lastProgress}if(this.lastProgress===0||b===0||this.lastProgress===-1){if(this.clip._storeOnStart){this.clip._storeOnStart(this.clip)
}}this.clip._playing=(b*this.clip._duration===this.clip._duration);this.lastProgress=this.clip.progress(b);
return this.lastProgress};j.destroy=function(){this.clip.destroy();this.prev=null;
this.next=null;this.duration=null};k.exports=i},{}],208:[function(i,o,j){var k=i("./TimelineClip");
var m=i("./TimelineCallback");var l=function(){this.head=null;this.tail=null;this.length=0
};var n=l.prototype;n.append=function(a){a.prev=null;a.next=null;if(this.tail){this.tail.next=a;
a.prev=this.tail}else{this.head=a}this.tail=a;this.length++};n.remove=function(a){if(a===this.head){this.head=this.head.next
}else{if(a===this.tail){this.tail=this.tail.prev}}if(a.prev){a.prev.next=a.next
}if(a.next){a.next.prev=a.prev}a.next=a.prev=null;if(this.head===null){this.tail=null
}this.length--};n.getItem=function(c){var b=this.head;while(b){var a=b;if((a instanceof k&&a.clip===c)||(a instanceof m&&a.callback===c)){return a
}b=a.next}return null};n.forEach=function(a){var d=0;var c=this.head;while(c){var b=c;
a(b,d,this.length);c=b.next}};n.destroy=function(){while(this.head){var a=this.head;
this.remove(a);a.destroy()}};o.exports=l},{"./TimelineCallback":206,"./TimelineClip":207}],209:[function(f,i,g){i.exports=h;
function h(b){var a=new Float32Array(16);a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];
a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];a[9]=b[9];a[10]=b[10];a[11]=b[11];
a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a}},{}],210:[function(f,h,g){h.exports=i;
function i(){var a=new Float32Array(16);a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;
a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a
}},{}],211:[function(f,i,g){i.exports=h;function h(b,v,z){var G=v[0],H=v[1],I=v[2],F=v[3],a=G+G,M=H+H,E=I+I,J=G*a,K=G*M,L=G*E,c=H*M,y=H*E,q=I*E,d=F*a,w=F*M,x=F*E;
b[0]=1-(c+q);b[1]=K+x;b[2]=L-w;b[3]=0;b[4]=K-x;b[5]=1-(J+q);b[6]=y+d;b[7]=0;b[8]=L+w;
b[9]=y-d;b[10]=1-(J+c);b[11]=0;b[12]=z[0];b[13]=z[1];b[14]=z[2];b[15]=1;return b
}},{}],212:[function(i,h,f){h.exports=g;function g(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;
a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;
a[15]=1;return a}},{}],213:[function(f,i,g){i.exports=h;function h(c,U){var L=U[0],P=U[1],S=U[2],Y=U[3],ag=U[4],ah=U[5],ai=U[6],aj=U[7],K=U[8],M=U[9],O=U[10],Q=U[11],b=U[12],d=U[13],N=U[14],W=U[15],R=L*ah-P*ag,T=L*ai-S*ag,V=L*aj-Y*ag,X=P*ai-S*ah,aa=P*aj-Y*ah,ab=S*aj-Y*ai,ac=K*d-M*b,ad=K*N-O*b,ae=K*W-Q*b,af=M*N-O*d,Z=M*W-Q*d,a=O*W-Q*N,ak=R*a-T*Z+V*af+X*ae-aa*ad+ab*ac;
if(!ak){return null}ak=1/ak;c[0]=(ah*a-ai*Z+aj*af)*ak;c[1]=(S*Z-P*a-Y*af)*ak;c[2]=(d*ab-N*aa+W*X)*ak;
c[3]=(O*aa-M*ab-Q*X)*ak;c[4]=(ai*ae-ag*a-aj*ad)*ak;c[5]=(L*a-S*ae+Y*ad)*ak;c[6]=(N*V-b*ab-W*T)*ak;
c[7]=(K*ab-O*V+Q*T)*ak;c[8]=(ag*Z-ah*ae+aj*ac)*ak;c[9]=(P*ae-L*Z-Y*ac)*ak;c[10]=(b*aa-d*V+W*R)*ak;
c[11]=(M*V-K*aa-Q*R)*ak;c[12]=(ah*ad-ag*af-ai*ac)*ak;c[13]=(L*af-P*ad+S*ac)*ak;
c[14]=(d*T-b*X-N*R)*ak;c[15]=(K*X-M*T+O*R)*ak;return c}},{}],214:[function(i,h,f){h.exports=g;
function g(G,C,F){var a=C[0],b=C[1],d=C[2],E=C[3],O=C[4],Q=C[5],S=C[6],U=C[7],I=C[8],K=C[9],L=C[10],M=C[11],H=C[12],J=C[13],c=C[14],D=C[15];
var N=F[0],P=F[1],R=F[2],T=F[3];G[0]=N*a+P*O+R*I+T*H;G[1]=N*b+P*Q+R*K+T*J;G[2]=N*d+P*S+R*L+T*c;
G[3]=N*E+P*U+R*M+T*D;N=F[4];P=F[5];R=F[6];T=F[7];G[4]=N*a+P*O+R*I+T*H;G[5]=N*b+P*Q+R*K+T*J;
G[6]=N*d+P*S+R*L+T*c;G[7]=N*E+P*U+R*M+T*D;N=F[8];P=F[9];R=F[10];T=F[11];G[8]=N*a+P*O+R*I+T*H;
G[9]=N*b+P*Q+R*K+T*J;G[10]=N*d+P*S+R*L+T*c;G[11]=N*E+P*U+R*M+T*D;N=F[12];P=F[13];
R=F[14];T=F[15];G[12]=N*a+P*O+R*I+T*H;G[13]=N*b+P*Q+R*K+T*J;G[14]=N*d+P*S+R*L+T*c;
G[15]=N*E+P*U+R*M+T*D;return G}},{}],215:[function(i,h,g){h.exports=f;function f(V,s,c,am){var ac=am[0],ad=am[1],ae=am[2],U=Math.sqrt(ac*ac+ad*ad+ae*ae),Q,x,S,a,b,d,t,af,ag,ah,ai,W,Y,aa,ab,T,X,Z,y,z,R,aj,ak,al;
if(Math.abs(U)<0.000001){return null}U=1/U;ac*=U;ad*=U;ae*=U;Q=Math.sin(c);x=Math.cos(c);
S=1-x;a=s[0];b=s[1];d=s[2];t=s[3];af=s[4];ag=s[5];ah=s[6];ai=s[7];W=s[8];Y=s[9];
aa=s[10];ab=s[11];T=ac*ac*S+x;X=ad*ac*S+ae*Q;Z=ae*ac*S-ad*Q;y=ac*ad*S-ae*Q;z=ad*ad*S+x;
R=ae*ad*S+ac*Q;aj=ac*ae*S+ad*Q;ak=ad*ae*S-ac*Q;al=ae*ae*S+x;V[0]=a*T+af*X+W*Z;V[1]=b*T+ag*X+Y*Z;
V[2]=d*T+ah*X+aa*Z;V[3]=t*T+ai*X+ab*Z;V[4]=a*y+af*z+W*R;V[5]=b*y+ag*z+Y*R;V[6]=d*y+ah*z+aa*R;
V[7]=t*y+ai*z+ab*R;V[8]=a*aj+af*ak+W*al;V[9]=b*aj+ag*ak+Y*al;V[10]=d*aj+ah*ak+aa*al;
V[11]=t*aj+ai*ak+ab*al;if(s!==V){V[12]=s[12];V[13]=s[13];V[14]=s[14];V[15]=s[15]
}return V}},{}],216:[function(i,h,g){h.exports=f;function f(A,t,u){var a=Math.sin(u),v=Math.cos(u),b=t[4],c=t[5],d=t[6],s=t[7],w=t[8],x=t[9],y=t[10],z=t[11];
if(t!==A){A[0]=t[0];A[1]=t[1];A[2]=t[2];A[3]=t[3];A[12]=t[12];A[13]=t[13];A[14]=t[14];
A[15]=t[15]}A[4]=b*v+w*a;A[5]=c*v+x*a;A[6]=d*v+y*a;A[7]=s*v+z*a;A[8]=w*v-b*a;A[9]=x*v-c*a;
A[10]=y*v-d*a;A[11]=z*v-s*a;return A}},{}],217:[function(i,h,f){h.exports=g;function g(w,b,c){var a=Math.sin(c),d=Math.cos(c),x=b[0],y=b[1],z=b[2],A=b[3],s=b[8],t=b[9],u=b[10],v=b[11];
if(b!==w){w[4]=b[4];w[5]=b[5];w[6]=b[6];w[7]=b[7];w[12]=b[12];w[13]=b[13];w[14]=b[14];
w[15]=b[15]}w[0]=x*d-s*a;w[1]=y*d-t*a;w[2]=z*d-u*a;w[3]=A*d-v*a;w[8]=x*a+s*d;w[9]=y*a+t*d;
w[10]=z*a+u*d;w[11]=A*a+v*d;return w}},{}],218:[function(i,h,f){h.exports=g;function g(w,t,u){var a=Math.sin(u),v=Math.cos(u),x=t[0],y=t[1],z=t[2],A=t[3],b=t[4],c=t[5],d=t[6],s=t[7];
if(t!==w){w[8]=t[8];w[9]=t[9];w[10]=t[10];w[11]=t[11];w[12]=t[12];w[13]=t[13];w[14]=t[14];
w[15]=t[15]}w[0]=x*v+b*a;w[1]=y*v+c*a;w[2]=z*v+d*a;w[3]=A*v+s*a;w[4]=b*v-x*a;w[5]=c*v-y*a;
w[6]=d*v-z*a;w[7]=s*v-A*a;return w}},{}],219:[function(f,i,g){i.exports=h;function h(c,l,d){var m=d[0],a=d[1],b=d[2];
c[0]=l[0]*m;c[1]=l[1]*m;c[2]=l[2]*m;c[3]=l[3]*m;c[4]=l[4]*a;c[5]=l[5]*a;c[6]=l[6]*a;
c[7]=l[7]*a;c[8]=l[8]*b;c[9]=l[9]*b;c[10]=l[10]*b;c[11]=l[11]*b;c[12]=l[12];c[13]=l[13];
c[14]=l[14];c[15]=l[15];return c}},{}],220:[function(f,i,g){i.exports=h;function h(v,c,D){var E=D[0],F=D[1],G=D[2],y,a,b,d,H,I,J,K,x,z,B,C;
if(c===v){v[12]=c[0]*E+c[4]*F+c[8]*G+c[12];v[13]=c[1]*E+c[5]*F+c[9]*G+c[13];v[14]=c[2]*E+c[6]*F+c[10]*G+c[14];
v[15]=c[3]*E+c[7]*F+c[11]*G+c[15]}else{y=c[0];a=c[1];b=c[2];d=c[3];H=c[4];I=c[5];
J=c[6];K=c[7];x=c[8];z=c[9];B=c[10];C=c[11];v[0]=y;v[1]=a;v[2]=b;v[3]=d;v[4]=H;
v[5]=I;v[6]=J;v[7]=K;v[8]=x;v[9]=z;v[10]=B;v[11]=C;v[12]=y*E+H*F+x*G+c[12];v[13]=a*E+I*F+z*G+c[13];
v[14]=b*E+J*F+B*G+c[14];v[15]=d*E+K*F+C*G+c[15]}return v}},{}],221:[function(f,i,g){i.exports=h;
function h(n,o){if(n===o){var a=o[1],c=o[2],d=o[3],q=o[6],b=o[7],p=o[11];n[1]=o[4];
n[2]=o[8];n[3]=o[12];n[4]=a;n[6]=o[9];n[7]=o[13];n[8]=c;n[9]=q;n[11]=o[14];n[12]=d;
n[13]=b;n[14]=p}else{n[0]=o[0];n[1]=o[4];n[2]=o[8];n[3]=o[12];n[4]=o[1];n[5]=o[5];
n[6]=o[9];n[7]=o[13];n[8]=o[2];n[9]=o[6];n[10]=o[10];n[11]=o[14];n[12]=o[3];n[13]=o[7];
n[14]=o[11];n[15]=o[15]}return n}},{}],222:[function(f,h,g){h.exports=i;function i(){var a=new Float32Array(3);
a[0]=0;a[1]=0;a[2]=0;return a}},{}],223:[function(f,i,g){i.exports=h;function h(r,c,d){var s=c[0],a=c[1],b=c[2],o=d[0],p=d[1],q=d[2];
r[0]=a*q-b*p;r[1]=b*o-s*q;r[2]=s*p-a*o;return r}},{}],224:[function(i,h,f){h.exports=g;
function g(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]}},{}],225:[function(f,i,g){i.exports=h;
function h(d,a,b){var c=new Float32Array(3);c[0]=d;c[1]=a;c[2]=b;return c}},{}],226:[function(f,i,g){i.exports=h;
function h(c){var d=c[0],a=c[1],b=c[2];return Math.sqrt(d*d+a*a+b*b)}},{}],227:[function(i,h,f){h.exports=g;
function g(c,d){var l=d[0],a=d[1],b=d[2];var m=l*l+a*a+b*b;if(m>0){m=1/Math.sqrt(m);
c[0]=d[0]*m;c[1]=d[1]*m;c[2]=d[2]*m}return c}},{}],228:[function(f,h,g){h.exports=i;
function i(){var a=new Float32Array(4);a[0]=0;a[1]=0;a[2]=0;a[3]=0;return a}},{}],229:[function(f,i,g){i.exports=h;
function h(k,a,b,d){var c=new Float32Array(4);c[0]=k;c[1]=a;c[2]=b;c[3]=d;return c
}},{}],230:[function(f,h,g){h.exports=i;function i(c,d,n){var o=d[0],a=d[1],b=d[2],m=d[3];
c[0]=n[0]*o+n[4]*a+n[8]*b+n[12]*m;c[1]=n[1]*o+n[5]*a+n[9]*b+n[13]*m;c[2]=n[2]*o+n[6]*a+n[10]*b+n[14]*m;
c[3]=n[3]*o+n[7]*a+n[11]*b+n[15]*m;return c}},{}],231:[function(d,g,f){g.exports={Transform:d("./ac-transform/Transform")}
},{"./ac-transform/Transform":232}],232:[function(ae,al,L){var af=ae("./gl-matrix/mat4");
var an=ae("./gl-matrix/vec3");var ao=ae("./gl-matrix/vec4");var ak=Math.PI/180;
var am=180/Math.PI;var Q=0,J=0,U=1,K=1,Y=2,I=3;var ag=4,M=4,ah=5,O=5,ai=6,aj=7;
var S=8,X=9,ab=10,ac=11;var N=12,P=12,R=13,T=13,W=14,aa=15;function Z(){this.m=af.create()
}var V=Z.prototype;V.rotateX=function(a){var b=ak*a;af.rotateX(this.m,this.m,b);
return this};V.rotateY=function(a){var b=ak*a;af.rotateY(this.m,this.m,b);return this
};V.rotateZ=function(a){var b=ak*a;af.rotateZ(this.m,this.m,b);return this};V.rotate=V.rotateZ;
V.rotate3d=function(c,f,a,b){if(f===null||f===undefined){f=c}if(a===null||f===undefined){a=c
}var d=ak*b;af.rotate(this.m,this.m,d,[c,f,a]);return this};V.rotateAxisAngle=V.rotate3d;
V.scale=function(a,b){b=b||a;af.scale(this.m,this.m,[a,b,1]);return this};V.scaleX=function(a){af.scale(this.m,this.m,[a,1,1]);
return this};V.scaleY=function(a){af.scale(this.m,this.m,[1,a,1]);return this};
V.scaleZ=function(a){af.scale(this.m,this.m,[1,1,a]);return this};V.scale3d=function(a,b,c){af.scale(this.m,this.m,[a,b,c]);
return this};V.skew=function(a,b){if(b===null||b===undefined){return this.skewX(a)
}a=ak*a;b=ak*b;var c=af.create();c[M]=Math.tan(a);c[K]=Math.tan(b);af.multiply(this.m,this.m,c);
return this};V.skewX=function(a){a=ak*a;var b=af.create();b[M]=Math.tan(a);af.multiply(this.m,this.m,b);
return this};V.skewY=function(a){a=ak*a;var b=af.create();b[K]=Math.tan(a);af.multiply(this.m,this.m,b);
return this};V.translate=function(a,b){b=b||0;af.translate(this.m,this.m,[a,b,0]);
return this};V.translate3d=function(b,c,a){af.translate(this.m,this.m,[b,c,a]);
return this};V.translateX=function(a){af.translate(this.m,this.m,[a,0,0]);return this
};V.translateY=function(a){af.translate(this.m,this.m,[0,a,0]);return this};V.translateZ=function(a){af.translate(this.m,this.m,[0,0,a]);
return this};V.perspective=function(a){var b=af.create();if(a!==0){b[ac]=-1/a}af.multiply(this.m,this.m,b)
};V.inverse=function(){var a=this.clone();a.m=af.invert(a.m,this.m);return a};V.reset=function(){af.identity(this.m);
return this};V.getTranslateXY=function(){var a=this.m;if(this.isAffine()){return[a[P],a[T]]
}return[a[N],a[R]]};V.getTranslateXYZ=function(){var a=this.m;if(this.isAffine()){return[a[P],a[T],0]
}return[a[N],a[R],a[W]]};V.getTranslateX=function(){var a=this.m;if(this.isAffine()){return a[P]
}return a[N]};V.getTranslateY=function(){var a=this.m;if(this.isAffine()){return a[T]
}return a[R]};V.getTranslateZ=function(){var a=this.m;if(this.isAffine()){return 0
}return a[W]};V.clone=function(){var a=new Z();a.m=af.clone(this.m);return a};V.toArray=function(){var a=this.m;
if(this.isAffine()){return[a[J],a[K],a[M],a[O],a[P],a[T]]}return[a[Q],a[U],a[Y],a[I],a[ag],a[ah],a[ai],a[aj],a[S],a[X],a[ab],a[ac],a[N],a[R],a[W],a[aa]]
};V.fromArray=function(a){this.m=Array.prototype.slice.call(a);return this};V.setMatrixValue=function(c){c=String(c).trim();
var d=af.create();if(c==="none"){this.m=d;return this}var a=c.slice(0,c.indexOf("(")),f,b;
if(a==="matrix3d"){f=c.slice(9,-1).split(",");for(b=0;b<f.length;b++){d[b]=parseFloat(f[b])
}}else{if(a==="matrix"){f=c.slice(7,-1).split(",");for(b=f.length;b--;){f[b]=parseFloat(f[b])
}d[Q]=f[0];d[U]=f[1];d[N]=f[4];d[ag]=f[2];d[ah]=f[3];d[R]=f[5]}else{throw new TypeError("Invalid Matrix Value")
}}this.m=d;return this};var ad=function(a){return Math.abs(a)<0.0001};V.decompose=function(h){h=h||false;
var c=af.clone(this.m);var m=an.create();var v=an.create();var p=an.create();var k=ao.create();
var r=ao.create();var q=an.create();for(var a=0;a<16;a++){c[a]/=c[aa]}var f=af.clone(c);
f[I]=0;f[aj]=0;f[ac]=0;f[aa]=1;var y=c[3],o=c[7],l=c[11],t=c[12],u=c[13],w=c[14],x=c[15];
var i=ao.create();if(!ad(c[I])||!ad(c[aj])||!ad(c[ac])){i[0]=c[I];i[1]=c[aj];i[2]=c[ac];
i[3]=c[aa];var b=af.invert(af.create(),f);var j=af.transpose(af.create(),b);k=ao.transformMat4(k,i,j)
}else{k=ao.fromValues(0,0,0,1)}m[0]=t;m[1]=u;m[2]=w;var n=[an.create(),an.create(),an.create()];
n[0][0]=c[0];n[0][1]=c[1];n[0][2]=c[2];n[1][0]=c[4];n[1][1]=c[5];n[1][2]=c[6];n[2][0]=c[8];
n[2][1]=c[9];n[2][2]=c[10];v[0]=an.length(n[0]);an.normalize(n[0],n[0]);p[0]=an.dot(n[0],n[1]);
n[1]=this._combine(n[1],n[0],1,-p[0]);v[1]=an.length(n[1]);an.normalize(n[1],n[1]);
p[0]/=v[1];p[1]=an.dot(n[0],n[2]);n[2]=this._combine(n[2],n[0],1,-p[1]);p[2]=an.dot(n[1],n[2]);
n[2]=this._combine(n[2],n[1],1,-p[2]);v[2]=an.length(n[2]);an.normalize(n[2],n[2]);
p[1]/=v[2];p[2]/=v[2];var d=an.cross(an.create(),n[1],n[2]);if(an.dot(n[0],d)<0){for(a=0;
a<3;a++){v[a]*=-1;n[a][0]*=-1;n[a][1]*=-1;n[a][2]*=-1}}r[0]=0.5*Math.sqrt(Math.max(1+n[0][0]-n[1][1]-n[2][2],0));
r[1]=0.5*Math.sqrt(Math.max(1-n[0][0]+n[1][1]-n[2][2],0));r[2]=0.5*Math.sqrt(Math.max(1-n[0][0]-n[1][1]+n[2][2],0));
r[3]=0.5*Math.sqrt(Math.max(1+n[0][0]+n[1][1]+n[2][2],0));if(n[2][1]>n[1][2]){r[0]=-r[0]
}if(n[0][2]>n[2][0]){r[1]=-r[1]}if(n[1][0]>n[0][1]){r[2]=-r[2]}var s=ao.fromValues(r[0],r[1],r[2],2*Math.acos(r[3]));
var g=this._rotationFromQuat(r);if(h){p[0]=Math.round(p[0]*am*100)/100;p[1]=Math.round(p[1]*am*100)/100;
p[2]=Math.round(p[2]*am*100)/100;g[0]=Math.round(g[0]*am*100)/100;g[1]=Math.round(g[1]*am*100)/100;
g[2]=Math.round(g[2]*am*100)/100;s[3]=Math.round(s[3]*am*100)/100}return{translation:m,scale:v,skew:p,perspective:k,quaternion:r,eulerRotation:g,axisAngle:s}
};V.recompose=function(f,g,b,a,h){f=f||an.create();g=g||an.create();b=b||an.create();
a=a||ao.create();h=h||ao.create();var c=af.fromRotationTranslation(af.create(),h,f);
c[I]=a[0];c[aj]=a[1];c[ac]=a[2];c[aa]=a[3];var d=af.create();if(b[2]!==0){d[X]=b[2];
af.multiply(c,c,d)}if(b[1]!==0){d[X]=0;d[S]=b[1];af.multiply(c,c,d)}if(b[0]){d[S]=0;
d[4]=b[0];af.multiply(c,c,d)}af.scale(c,c,g);this.m=c;return this};V.isAffine=function(){return(this.m[Y]===0&&this.m[I]===0&&this.m[ai]===0&&this.m[aj]===0&&this.m[S]===0&&this.m[X]===0&&this.m[ab]===1&&this.m[ac]===0&&this.m[W]===0&&this.m[aa]===1)
};V.toString=function(){var a=this.m;if(this.isAffine()){return"matrix("+a[J]+", "+a[K]+", "+a[M]+", "+a[O]+", "+a[P]+", "+a[T]+")"
}return"matrix3d("+a[Q]+", "+a[U]+", "+a[Y]+", "+a[I]+", "+a[ag]+", "+a[ah]+", "+a[ai]+", "+a[aj]+", "+a[S]+", "+a[X]+", "+a[ab]+", "+a[ac]+", "+a[N]+", "+a[R]+", "+a[W]+", "+a[aa]+")"
};V.toCSSString=V.toString;V._combine=function(c,f,a,b){var d=an.create();d[0]=(a*c[0])+(b*f[0]);
d[1]=(a*c[1])+(b*f[1]);d[2]=(a*c[2])+(b*f[2]);return d};V._matrix2dToMat4=function(d){var b=af.create();
for(var a=0;a<4;a++){for(var c=0;c<4;c++){b[a*4+c]=d[a][c]}}return b};V._mat4ToMatrix2d=function(a){var d=[];
for(var b=0;b<4;b++){d[b]=[];for(var c=0;c<4;c++){d[b][c]=a[b*4+c]}}return d};V._rotationFromQuat=function(k){var g=k[3]*k[3];
var h=k[0]*k[0];var i=k[1]*k[1];var j=k[2]*k[2];var a=h+i+j+g;var f=k[0]*k[1]+k[2]*k[3];
var b,c,d;if(f>0.499*a){c=2*Math.atan2(k[0],k[3]);d=Math.PI/2;b=0;return an.fromValues(b,c,d)
}if(f<-0.499*a){c=-2*Math.atan2(k[0],k[3]);d=-Math.PI/2;b=0;return an.fromValues(b,c,d)
}c=Math.atan2(2*k[1]*k[3]-2*k[0]*k[2],h-i-j+g);d=Math.asin(2*f/a);b=Math.atan2(2*k[0]*k[3]-2*k[1]*k[2],-h+i-j+g);
return an.fromValues(b,c,d)};al.exports=Z},{"./gl-matrix/mat4":233,"./gl-matrix/vec3":234,"./gl-matrix/vec4":235}],233:[function(i,h,g){var f={create:i("gl-mat4/create"),rotate:i("gl-mat4/rotate"),rotateX:i("gl-mat4/rotateX"),rotateY:i("gl-mat4/rotateY"),rotateZ:i("gl-mat4/rotateZ"),scale:i("gl-mat4/scale"),multiply:i("gl-mat4/multiply"),translate:i("gl-mat4/translate"),invert:i("gl-mat4/invert"),clone:i("gl-mat4/clone"),transpose:i("gl-mat4/transpose"),identity:i("gl-mat4/identity"),fromRotationTranslation:i("gl-mat4/fromRotationTranslation")};
h.exports=f},{"gl-mat4/clone":209,"gl-mat4/create":210,"gl-mat4/fromRotationTranslation":211,"gl-mat4/identity":212,"gl-mat4/invert":213,"gl-mat4/multiply":214,"gl-mat4/rotate":215,"gl-mat4/rotateX":216,"gl-mat4/rotateY":217,"gl-mat4/rotateZ":218,"gl-mat4/scale":219,"gl-mat4/translate":220,"gl-mat4/transpose":221}],234:[function(f,h,g){var i={create:f("gl-vec3/create"),dot:f("gl-vec3/dot"),normalize:f("gl-vec3/normalize"),length:f("gl-vec3/length"),cross:f("gl-vec3/cross"),fromValues:f("gl-vec3/fromValues")};
h.exports=i},{"gl-vec3/create":222,"gl-vec3/cross":223,"gl-vec3/dot":224,"gl-vec3/fromValues":225,"gl-vec3/length":226,"gl-vec3/normalize":227}],235:[function(i,h,g){var f={create:i("gl-vec4/create"),transformMat4:i("gl-vec4/transformMat4"),fromValues:i("gl-vec4/fromValues")};
h.exports=f},{"gl-vec4/create":228,"gl-vec4/fromValues":229,"gl-vec4/transformMat4":230}],236:[function(l,k,h){var m=l("@marcom/ac-eclipse").Clip;
var i=l("@marcom/ac-feature/cssPropertyAvailable");k.exports=function j(d,a,b,c,f){if(i("opacity")){f=f||{};
if(c){f.autoplay=(f.autoplay===false)?f.autoplay:true;f.propsFrom=f.propsFrom||{};
f.propsFrom.opacity=a;if(f.autoplay){return m.to(d,c,{opacity:b},f)}return new m(d,c,{opacity:b},f)
}d.style.opacity=b;if(typeof f.onStart==="function"){f.onStart()}if(typeof f.onComplete==="function"){f.onComplete()
}}else{d.style.visibility=(b)?"visible":"hidden";if(typeof f.onStart==="function"){f.onStart()
}if(typeof f.onComplete==="function"){f.onComplete()}}}},{"@marcom/ac-eclipse":188,"@marcom/ac-feature/cssPropertyAvailable":30}],237:[function(k,j,m){var l=k("@marcom/ac-eclipse").Clip;
var h=k("@marcom/ac-feature/cssPropertyAvailable");j.exports=function i(c,b,d){var a=1;
d=d||{};if(h("opacity")){if(b){d.autoplay=(d.autoplay===false)?d.autoplay:true;
if(d.autoplay){return l.to(c,b,{opacity:a},d)}return new l(c,b,{opacity:a},d)}c.style.opacity=a;
if(typeof d.onStart==="function"){d.onStart()}if(typeof d.onComplete==="function"){d.onComplete()
}}else{c.style.visibility="visible";if(typeof d.onStart==="function"){d.onStart()
}if(typeof d.onComplete==="function"){d.onComplete()}}}},{"@marcom/ac-eclipse":188,"@marcom/ac-feature/cssPropertyAvailable":30}],238:[function(l,k,h){var m=l("@marcom/ac-eclipse").Clip;
var i=l("@marcom/ac-feature/cssPropertyAvailable");k.exports=function j(c,b,d){var a=0;
d=d||{};if(i("opacity")){if(b){d.autoplay=(d.autoplay===false)?d.autoplay:true;
if(d.autoplay){return m.to(c,b,{opacity:a},d)}return new m(c,b,{opacity:a},d)}c.style.opacity=a;
if(typeof d.onStart==="function"){d.onStart()}if(typeof d.onComplete==="function"){d.onComplete()
}}else{c.style.visibility="hidden";if(typeof d.onStart==="function"){d.onStart()
}if(typeof d.onComplete==="function"){d.onComplete()}}}},{"@marcom/ac-eclipse":188,"@marcom/ac-feature/cssPropertyAvailable":30}],239:[function(l,k,h){var m=l("@marcom/ac-eclipse").Clip;
var j=l("@marcom/ac-dom-styles");k.exports=function i(c,g,p,b,d){d=d||{};d.autoplay=(d.autoplay===false)?d.autoplay:true;
var f=d.onStart||null;var q=d.onComplete||null;var a;a={transform:{translateX:g+"px",translateY:p+"px"}};
if(b){d.onStart=function(){c.style.willChange="transform";if(f!==null){f.call(this)
}};d.onComplete=function(){c.style.willChange="";if(q!==null){q.call(this)}};if(d.autoplay){return m.to(c,b,a,d)
}return new m(c,b,a,d)}j.setStyle(c,a);if(typeof d.onStart==="function"){d.onStart()
}if(typeof d.onComplete==="function"){d.onComplete()}}},{"@marcom/ac-dom-styles":96,"@marcom/ac-eclipse":188}],240:[function(m,l,i){var n=m("@marcom/ac-browser-prefixed");
var o=m("@marcom/ac-transform").Transform;var j=m("./move");l.exports=function k(b,f,a,c){var d=new o();
d.setMatrixValue(getComputedStyle(b)[n.transform]);return j(b,f,d.getTranslateY(),a,c)
}},{"./move":239,"@marcom/ac-browser-prefixed":149,"@marcom/ac-transform":231}],241:[function(j,i,g){var k=j("@marcom/ac-eclipse").Clip;
i.exports=function h(y,d,u,w,a){a=a||{};a.autoplay=(a.autoplay===false)?a.autoplay:true;
var x=y===window;var b;var f;if(x){b=y.pageXOffset;f=y.pageYOffset}else{b=y.scrollLeft;
f=y.scrollTop}var s={x:b,y:f};var c={x:d,y:u};if(typeof a.onDraw==="function"){var t=a.onDraw
}var v=function(l){if(x){y.scrollTo(s.x,s.y)}else{y.scrollLeft=s.x;y.scrollTop=s.y
}if(t){t.call(this,l)}};a.onDraw=v;if(a.autoplay){return k.to(s,w,c,a)}return new k(s,w,c,a)
}},{"@marcom/ac-eclipse":188}],242:[function(k,j,g){var h=k("./scroll");j.exports=function i(b,m,a,c){var d=b===window;
var f;if(d){f=b.pageYOffset}else{f=b.scrollTop}return h(b,m,f,a,c)}},{"./scroll":241}],243:[function(v,w,s){var t=v("@marcom/ac-classlist");
var o=v("./singletons/analyticsManager");var q=v("@marcom/ac-object/create");var m=v("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var u=v("./Item");function p(a){a=a||{};this._wrapAround=a.wrapAround||false;this._itemType=a.itemType||u;
this._items=[];this._itemsIdLookup={};this.showNext=this.showNext.bind(this);this.showPrevious=this.showPrevious.bind(this);
this._update=this._update.bind(this);this._updateItems=this._updateItems.bind(this);
m.call(this);if(a.startAt){this._startAt(a.startAt)}p._add(this,a.analyticsOptions)
}p.FADE="fade";p.FADE_SELECTOR="[data-ac-gallery-fade]";p.SLIDE="slide";p.SLIDE_SELECTOR="[data-ac-gallery-slide]";
p.UPDATE="update";p.UPDATE_COMPLETE="update:complete";var n=m.prototype;var r=p.prototype=q(n);
r.addItem=function(b,a){if(b.nodeType){b=new this._itemType(b)}else{if(this._items.indexOf(b)>-1){return b
}}if(typeof a==="number"){this._items.splice(a,0,b)}else{this._items.push(b)}if(this._items.length===1){b.show();
this._setCurrentItem(b)}else{b.hide();if(this.getNextItem()===b){this._setNextItem(b)
}if(this.getPreviousItem()===b){this._setPreviousItem(b)}}if(b.getElementId()!==null){this._itemsIdLookup[b.getElementId()]=b
}b.on(u.SELECTED,this._update);return b};r.removeItem=function(b,c){c=c||{};if(typeof b==="number"){b=this._items[b]
}var d=this._items.indexOf(b);if(d>-1){var a=this.getNextItem();var f=this.getPreviousItem();
this._items.splice(d,1);b.off(u.SELECTED,this._update);if(a===b){this._setNextItem(this.getNextItem())
}if(f===b){this._setPreviousItem(this.getPreviousItem())}}if(b===this._currentItem&&this._items.length&&c.setCurrentItem!==false){this._update({item:this._items[0]});
this._setLastItem(null)}if(c.destroyItem&&b.getElement()){b.destroy()}return b};
r.show=function(b,a){if(typeof b==="number"){b=this._items[b]}else{if(typeof b==="string"){b=this._itemsIdLookup[b]
}}if(b){a=a||{};this._update({item:b,interactionEvent:a.interactionEvent})}return b||null
};r.showNext=function(a){var b=this.getNextItem();if(b){this.show(b,a)}return b
};r.showPrevious=function(a){var b=this.getPreviousItem();if(b){this.show(b,a)}return b
};r.isInView=function(){return this._currentItem&&this._currentItem.isInView()};
r.getTotalItems=function(){return this._items.length};r.getItems=function(){return this._items
};r.getItem=function(a){if(typeof a==="number"){return this.getItemAt(a)}else{if(typeof a==="string"){return this.getItemById(a)
}}};r.getItemAt=function(a){return this._items[a]||null};r.getItemById=function(a){return this._itemsIdLookup[a]||null
};r.getItemIndex=function(a){return this._items.indexOf(a)};r.getCurrentItem=function(){return this._currentItem||null
};r.getLastItem=function(){return this._lastItem||null};r.getNextItem=function(){var b;
var a=this._items.indexOf(this._currentItem);if(a<this._items.length-1){b=this._items[a+1]
}else{if(this._wrapAround){b=this._items[0]}}return b||null};r.getPreviousItem=function(){var b;
var a=this._items.indexOf(this._currentItem);if(a>0){b=this._items[a-1]}else{if(this._wrapAround){b=this._items[this._items.length-1]
}}return b||null};r.getId=function(){return this._id};r.destroy=function(a){a=a||{};
if(a.destroyItems===undefined){a.destroyItems=true}this._setCurrentItem(null);if(a.destroyItems){var b;
while(this._items.length){b=this._items[0];b.off(u.SELECTED,this._update);this.removeItem(b,{destroyItem:true,setCurrentItem:false})
}}this._items=null;this._itemsIdLookup=null;p._remove(this);return n.destroy.call(this)
};r._startAt=function(a){var b=this._items[a];if(b&&(this._currentItem!==b)){this._currentItem.hide();
this._setCurrentItem(b);this._currentItem.show();this.trigger(p.UPDATE,this._items)
}};r._setCurrentItem=function(a){if(this._currentItem&&this._currentItem.getElement()&&this._currentItem!==a){t.remove(this._currentItem.getElement(),u.CSS_CURRENT_ITEM);
this._setLastItem(this._currentItem)}this._currentItem=a;if(this._currentItem&&this._currentItem.getElement()){t.add(this._currentItem.getElement(),u.CSS_CURRENT_ITEM);
this._setNextItem(this.getNextItem());this._setPreviousItem(this.getPreviousItem())
}};r._setLastItem=function(a){if(this._lastItem&&this._lastItem.getElement()&&this._lastItem!==a){t.remove(this._lastItem.getElement(),u.CSS_LAST_ITEM)
}this._lastItem=a;if(this._lastItem&&this._lastItem.getElement()){t.add(this._lastItem.getElement(),u.CSS_LAST_ITEM)
}};r._setNextItem=function(a){if(this._nextItem&&this._nextItem.getElement()&&this._nextItem!==a){t.remove(this._nextItem.getElement(),u.CSS_NEXT_ITEM)
}this._nextItem=a;if(this._nextItem&&this._nextItem.getElement()){t.add(this._nextItem.getElement(),u.CSS_NEXT_ITEM)
}};r._setPreviousItem=function(a){if(this._previousItem&&this._previousItem.getElement()&&this._previousItem!==a){t.remove(this._previousItem.getElement(),u.CSS_PREVIOUS_ITEM)
}this._previousItem=a;if(this._previousItem&&this._previousItem.getElement()){t.add(this._previousItem.getElement(),u.CSS_PREVIOUS_ITEM)
}};r._updateItems=function(b,a){if(b.outgoing[0]){b.outgoing[0].hide()}b.incoming[0].show();
if(!a){this.trigger(p.UPDATE_COMPLETE,b)}};r._update=function(a){var b=this._currentItem!==a.item;
if(b){this._setCurrentItem(a.item)}var c={incoming:[a.item],outgoing:(this._lastItem)?[this._lastItem]:[],interactionEvent:a.interactionEvent||null};
if(b){this.trigger(p.UPDATE,c)}this._updateItems(c,!b)};p._instantiate=function(){this._galleries=[];
this._idCounter=0;return this};p._add=function(b,a){this._galleries.push(b);b._id=++this._idCounter;
o.add(b,a)};p._remove=function(a){var b=this._galleries.indexOf(a);if(b>-1){this._galleries.splice(b,1);
o.remove(a)}};p.getAll=function(){return Array.prototype.slice.call(this._galleries)
};p.getAllInView=function(){var b=[];var a=this._galleries.length;while(a--){if(this._galleries[a].isInView()){b.push(this._galleries[a])
}}return b};p.destroyAll=function(){var a=this._galleries.length;while(a--){this._galleries[a].destroy()
}this._galleries=[]};w.exports=p._instantiate()},{"./Item":244,"./singletons/analyticsManager":258,"@marcom/ac-classlist":55,"@marcom/ac-event-emitter-micro":120,"@marcom/ac-object/create":128}],244:[function(z,J,t){var I=z("@marcom/ac-classlist");
var D=z("@marcom/ac-dom-events/addEventListener");var B=z("@marcom/ac-dom-events/removeEventListener");
var A=z("@marcom/ac-dom-events/preventDefault");var E=z("@marcom/ac-dom-metrics/isInViewport");
var K=z("@marcom/ac-dom-metrics/getPercentInViewport");var u=z("@marcom/ac-dom-traversal/querySelectorAll");
var y=z("@marcom/ac-object/create");var F=z("./singletons/tabManager");var v=z("@marcom/ac-keyboard/keyMap");
var x=z("@marcom/ac-event-emitter-micro").EventEmitterMicro;var G=z("@marcom/ac-keyboard");
var C="current";function H(a,b){this._el=a;b=b||{};this._triggerKeys=[];this._triggerEls={};
this._isShown=false;this._isACaption=(b.isACaption===undefined)?false:b.isACaption;
this._onKeyboardInteraction=this._onKeyboardInteraction.bind(this);this._onTriggered=this._onTriggered.bind(this);
if(!this._isACaption){this._el.setAttribute("role","tabpanel")}this._focusableEls=u(F.focusableSelectors,a);
x.call(this)}H.CSS_CURRENT_ITEM="ac-gallery-currentitem";H.CSS_LAST_ITEM="ac-gallery-lastitem";
H.CSS_NEXT_ITEM="ac-gallery-nextitem";H.CSS_PREVIOUS_ITEM="ac-gallery-previousitem";
H.SELECTED="selected";H.SHOW="show";H.HIDE="hide";var w=H.prototype=y(x.prototype);
w.show=function(){this._isShown=true;this._addCurrentClassToTriggers();this._setTabIndexOnFocusableItems(null);
this._el.removeAttribute("aria-hidden");this.trigger(H.SHOW,this)};w.hide=function(){this._isShown=false;
this._removeCurrentClassFromTriggers();this._setTabIndexOnFocusableItems("-1");
this._el.setAttribute("aria-hidden","true");this.trigger(H.HIDE,this)};w.addElementTrigger=function(b,c){c=c||"click";
if(this._triggerEls[c]===undefined){this._triggerEls[c]=[]}var d=this._triggerEls[c].indexOf(b);
if(d<0){b.setAttribute("role","tab");b.setAttribute("tabindex","0");var a=this.getElementId();
if(a){b.setAttribute("aria-controls",a)}a=b.getAttribute("id");if(a&&this._el.getAttribute("aria-labelledby")===null){this._el.setAttribute("aria-labelledby",a)
}D(b,c,this._onTriggered);this._triggerEls[c].push(b);if(this._isShown){b.setAttribute("aria-selected","true");
I.add(b,C)}else{b.setAttribute("aria-selected","false")}}};w.removeElementTrigger=function(a,b){b=b||"click";
if(this._triggerEls[b]===undefined){return}var c=this._triggerEls[b].indexOf(a);
if(c>-1){this._cleanElementTrigger(a,b)}if(this._triggerEls[b].length===0){this._triggerEls[b]=undefined
}};w.addKeyTrigger=function(a){if(typeof a==="string"){a=v[a.toUpperCase()]}if(typeof a==="number"){var b=this._triggerKeys.indexOf(a);
if(b<0){G.onDown(a,this._onKeyboardInteraction);this._triggerKeys.push(a)}}};w.removeKeyTrigger=function(a){if(typeof a==="string"){a=v[a.toUpperCase()]
}if(typeof a==="number"){var b=this._triggerKeys.indexOf(a);if(b>-1){G.offDown(a,this._onKeyboardInteraction);
this._triggerKeys.splice(b,1)}}};w.removeAllTriggers=function(){var c;var d=this._triggerKeys.length;
while(d--){c=this._triggerKeys[d];G.offDown(c,this._onKeyboardInteraction)}this._triggerKeys=[];
var a;var b;for(b in this._triggerEls){d=this._triggerEls[b].length;while(d--){a=this._triggerEls[b][d];
this._cleanElementTrigger(a,b)}}this._triggerEls={}};w.isInView=function(){if(this._el){return E(this._el)
}return false};w.percentageInView=function(){if(this._el){return K(this._el)}return 0
};w.getElement=function(){return this._el};w.getElementId=function(){if(this._elId!==undefined){return this._elId
}this._elId=this._el.getAttribute("id")||null;return this._elId};w.destroy=function(){if(this._isShown){this._isShown=null;
I.remove(this._el,H.CSS_CURRENT_ITEM,H.CSS_LAST_ITEM,H.CSS_NEXT_ITEM,H.CSS_PREVIOUS_ITEM);
this._removeCurrentClassFromTriggers()}this.removeAllTriggers();this._setTabIndexOnFocusableItems(null);
this._el.removeAttribute("aria-hidden");this._el.removeAttribute("role");this._el.removeAttribute("aria-labelledby");
this._isACaption=null;this._triggerKeys=null;this._triggerEls=null;this._el=null
};w._addCurrentClassToTriggers=function(){var a;var b;var c;for(b in this._triggerEls){c=this._triggerEls[b].length;
while(c--){a=this._triggerEls[b][c];a.setAttribute("aria-selected","true");I.add(a,C)
}}};w._removeCurrentClassFromTriggers=function(){var a;var b;var c;for(b in this._triggerEls){c=this._triggerEls[b].length;
while(c--){a=this._triggerEls[b][c];a.setAttribute("aria-selected","false");I.remove(a,C)
}}};w._cleanElementTrigger=function(a,b){a.removeAttribute("aria-selected");a.removeAttribute("role");
a.removeAttribute("tabindex");a.removeAttribute("aria-controls");B(a,b,this._onTriggered);
if(this._isShown){I.remove(a,C)}};w._onKeyboardInteraction=function(a){if(this.isInView()){this._onTriggered(a)
}};w._setTabIndexOnFocusableItems=function(c){var d=c===null;var a=[];this._currentTabbableEls=this._currentTabbableEls||F.getTabbable(this._focusableEls);
if(!d){a=F.getTabbable(this._focusableEls);this._currentTabbableEls=a}var b=this._currentTabbableEls.length;
while(b--){if(d){this._currentTabbableEls[b].removeAttribute("tabindex")}else{this._currentTabbableEls[b].setAttribute("tabindex",c)
}}};w._onTriggered=function(a){A(a);this.trigger(H.SELECTED,{item:this,interactionEvent:a})
};J.exports=H},{"./singletons/tabManager":259,"@marcom/ac-classlist":55,"@marcom/ac-dom-events/addEventListener":58,"@marcom/ac-dom-events/preventDefault":66,"@marcom/ac-dom-events/removeEventListener":67,"@marcom/ac-dom-metrics/getPercentInViewport":78,"@marcom/ac-dom-metrics/isInViewport":84,"@marcom/ac-dom-traversal/querySelectorAll":116,"@marcom/ac-event-emitter-micro":120,"@marcom/ac-keyboard":124,"@marcom/ac-keyboard/keyMap":126,"@marcom/ac-object/create":128}],245:[function(t,w,r){var q=t("./helpers/extendProto");
var o=t("./Gallery");var v=t("./auto/AutoGallery");var p=t("./fade/FadeGallery");
var m=t("./fade/FadeItem");var u=t("./slide/SlideGallery");var n=t("./slide/SlideItem");
var s=t("./Item");o.create=t("./factories/create");o.autoCreate=t("./factories/autoCreate");
o.extend=q;v.extend=q;p.extend=q;m.extend=q;u.extend=q;n.extend=q;s.extend=q;w.exports={Gallery:o,AutoGallery:v,FadeGallery:p,FadeGalleryItem:m,SlideGallery:u,SlideGalleryItem:n,Item:s,ToggleNav:t("./navigation/ToggleNav")}
},{"./Gallery":243,"./Item":244,"./auto/AutoGallery":247,"./factories/autoCreate":248,"./factories/create":249,"./fade/FadeGallery":250,"./fade/FadeItem":251,"./helpers/extendProto":252,"./navigation/ToggleNav":257,"./slide/SlideGallery":260,"./slide/SlideItem":261}],246:[function(j,p,k){var l;
try{l=j("ac-analytics").observer.Gallery}catch(m){}var n="data-analytics-gallery-id";
function q(){this._observers={}}var o=q.prototype;o.add=function(d,b){var a=d.getId();
if(!l||this._observers[a]){return}b=b||{};if(!b.galleryName){b.galleryName=this._getAnalyticsId(d,b.dataAttribute)||a
}if(!b.beforeUpdateEvent){b.beforeUpdateEvent="update"}if(!b.afterUpdateEvent){b.afterUpdateEvent="update:complete"
}var c=new l(d,b);if(c.gallery){this._observers[a]=c}};o.remove=function(b){var a=b.getId();
if(!l||!this._observers[a]){return}if(typeof this._observers[a].destroy==="function"){this._observers[a].destroy()
}this._observers[a]=null};o._getAnalyticsId=function(c,b){if(typeof c.getElement==="function"){b=b||n;
var a=c.getElement();return a.getAttribute(b)||a.getAttribute("id")}return null
};p.exports=q},{"ac-analytics":"ac-analytics"}],247:[function(ae,ar,N){ae("@marcom/ac-polyfills/requestAnimationFrame");
var aq=ae("@marcom/ac-classlist");var aj=ae("@marcom/ac-dom-events/addEventListener");
var ag=ae("@marcom/ac-dom-events/removeEventListener");var af=ae("@marcom/ac-dom-events/preventDefault");
var Q=ae("@marcom/ac-dom-styles");var an=ae("@marcom/ac-dom-traversal/querySelector");
var U=ae("@marcom/ac-dom-traversal/querySelectorAll");var aa=ae("@marcom/ac-object/create");
var S=ae("@marcom/ac-dom-metrics/getContentDimensions");var O=ae("@marcom/ac-keyboard/keyMap");
var W=ae("./../helpers/selectElementFromDataAttributeValue");var ac=ae("./../helpers/selectElementThatHasDataAttribute");
var ah=ae("./../helpers/inputHasFocus");var ak=ae("@marcom/ac-function/throttle");
var ai=ae("@marcom/ac-feature/touchAvailable");var V=ae("./../Gallery");var ap=ae("@marcom/ac-keyboard");
var K=ae("@marcom/ac-page-visibility").PageVisibilityManager;var al=ae("@marcom/ac-pointer-tracker").PointerTracker;
var R=ae("./../navigation/ToggleNav");var ab="disabled";var ad=3;var ao=0.5;var M="[data-ac-gallery-item]";
var Y=0.12;var Z=ae("../templates/paddlenav.js");var P="No element supplied.";var L='Container element needed when autoPlay is on. Use the "container" option when you instantiate your gallery.';
var am='Captions datatag needed when enableCaptions is on. Use the "data-related-gallery" tag (with an ID of the related captions container) on your gallery container to automatically use captions.';
function X(d,g){g=g||{};if(!d||d.nodeType===undefined){throw new Error(P)}this._el=d;
V.call(this,g);this._itemHeights=[];this._itemHeightsLookup={};this._toggleNavDuration=g.toggleNavDuration;
this._isRightToLeft=(g.rightToLeft===undefined)?Q.getStyle(d,"direction").direction==="rtl":g.rightToLeft;
this._keyboardThrottleDelay=((g.keyboardThrottleDelay===undefined)?Y:g.keyboardThrottleDelay)*1000;
this._resizeContainer=!!g.resizeContainer;this._setUpContainerAutoResize(g.resizeContainerOnUpdate);
this._createToggleNav();this._addPaddleNav(g.addPaddleNav);this._isACaptionsGallery=d.getAttribute("data-ac-gallery-captions")==="";
this._addItems(g.itemSelector||M);if(!this._wrapAround){this._updatePaddleNavState()
}if(g.enableArrowKeys!==false){this._enableArrowKeys=true;this._addKeyboardListener()
}if(g.updateOnWindowResize!==false){this._onWindowResize=this._onWindowResize.bind(this);
aj(window,"resize",this._onWindowResize)}this._componentsContainer=document.getElementById(g.container);
if(g.startAt){this._startAt(g.startAt)}this.stopAutoPlay=this.stopAutoPlay.bind(this);
if(g.autoPlay){if(!this._componentsContainer){throw new Error(L)}var a=(typeof g.autoPlay==="number")?g.autoPlay:ad;
this.startAutoPlay(a)}if(g.deeplink!==false){var c=this._getDeeplinkedItem();if(c&&c!==this._currentItem){this.show(c)
}}if(this._containerResizeDuration!==false){var b=this._itemHeightsLookup[this._currentItem.getElementId()];
if(b){this._setElHeight(b)}}if(this._toggleNav){this._toggleNav.start()}this._setUpSwiping(g.touch&&ai(),g.desktopSwipe);
if(this._componentsContainer){this._componentsContainer.setAttribute("tabIndex",-1)
}var f=d.getAttribute("data-related-gallery");if(f){this._captionsContainer=document.querySelector(f)
}if(g.enableCaptions){if(!this._captionsContainer){throw new Error(am)}this._captionsOptions=g.captionsOptions?g.captionsOptions:false;
this.enableCaptions()}}X.RESIZED="resized";X.UPDATE=V.UPDATE;X.UPDATE_COMPLETE=V.UPDATE_COMPLETE;
var at=V.prototype;var T=X.prototype=aa(at);T.addItem=function(c,b){if(c.nodeType){var a=this._isACaptionsGallery;
c=new this._itemType(c,{isACaption:a})}else{if(this._items.indexOf(c)>-1){return c
}}if(this._resizeContainer){this._storeItemHeight(c,this._containerResizeDuration===false)
}this._addItemTriggers(c);return at.addItem.call(this,c,b)};T.removeItem=function(c,a){if(this._resizeContainer){var b=this._itemHeights.length;
while(b--){if(this._itemHeights[b].item===c){this._itemHeights.splice(b,1);if(b===0&&this._itemHeights.length){this._setElHeight(this._itemHeights[0].height)
}}}}return at.removeItem.call(this,c,a)};T.startAutoPlay=function(a,b){b=b||{};
this._isAutoPlaying=true;this._autoPlayDelay=(a||ad)*1000;this._cancelAutoPlayOnInteraction=(b.cancelOnInteraction===undefined)?true:b.cancelOnInteraction;
setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay);if(this._cancelAutoPlayOnInteraction){this.on(V.UPDATE,this.stopAutoPlay)
}if(this._componentsContainer){aj(this._componentsContainer,"focus",this.stopAutoPlay,true);
aj(this._componentsContainer,"touchend",this.stopAutoPlay,true);aj(this._componentsContainer,"click",this.stopAutoPlay,true)
}else{throw new Error(L)}};T.stopAutoPlay=function(){this._isAutoPlaying=false;
if(this._cancelAutoPlayOnInteraction){this.off(V.UPDATE,this.stopAutoPlay)}if(this._componentsContainer){ag(this._componentsContainer,"focus",this.stopAutoPlay,true);
ag(this._componentsContainer,"touchend",this.stopAutoPlay,true);ag(this._componentsContainer,"click",this.stopAutoPlay,true)
}};T.getElement=function(){return this._el};T.getToggleNav=function(){return this._toggleNav||null
};T.resize=function(a,b){if(this._resizeContainer){this._itemHeights=[];var c=this._items.length;
while(c--){this._storeItemHeight(this._items[c],false)}if(this._containerResizeDuration!==false){this._setElHeight(this._itemHeightsLookup[this._currentItem.getElementId()])
}else{this._setElHeight(this._itemHeights[0].height)}}if(this._toggleNav){this._toggleNav.resize()
}this.trigger(X.RESIZED,this)};T.enableKeyboard=function(){if(!this._enableArrowKeys){this._enableArrowKeys=true;
this._addKeyboardListener()}};T.disableKeyboard=function(){if(this._enableArrowKeys){this._enableArrowKeys=false;
ap.offDown(O.ARROW_RIGHT,this._rightArrowFunc);ap.offDown(O.ARROW_LEFT,this._leftArrowFunc)
}};T.enableTouch=function(){if(!this._touchSwipe){this._setUpSwiping(true,false)
}};T.disableTouch=function(){if(this._touchSwipe){this._touchSwipe.off(al.END,this._onSwipeEnd);
this._touchSwipe.destroy();this._touchSwipe=null}};T.enableDesktopSwipe=function(){if(!this._clickSwipe){this._setUpSwiping(false,true)
}};T.disableDesktopSwipe=function(){if(this._clickSwipe){this._clickSwipe.off(al.END,this._onSwipeEnd);
this._clickSwipe.destroy();this._clickSwipe=null}};T.enableCaptions=function(){if(!this._galleryWithCaptions){this._initCaptionsGallery(this._captionsContainer,this._captionsOptions)
}};T.disableCaptions=function(){if(this._galleryWithCaptions){this._galleryWithCaptions.destroy()
}};T.destroy=function(a){if(this._isAutoPlaying){this.stopAutoPlay()}if(this._componentsContainer){ag(this._componentsContainer,"focus",this.stopAutoPlay,true);
ag(this._componentsContainer,"touchend",this.stopAutoPlay,true);ag(this._componentsContainer,"click",this.stopAutoPlay,true)
}if(this._resizeContainer){Q.setStyle(this._el,{height:null,transition:null})}if(this._enableArrowKeys){ap.offDown(O.ARROW_RIGHT,this._rightArrowFunc);
ap.offDown(O.ARROW_LEFT,this._leftArrowFunc)}var b;if(this._previousButtons){b=this._previousButtons.length;
while(b--){ag(this._previousButtons[b],"click",this._onPaddlePrevious)}this._setPaddleDisabledState(this._previousButtons,false)
}if(this._nextButtons){b=this._nextButtons.length;while(b--){ag(this._nextButtons[b],"click",this._onPaddleNext)
}this._setPaddleDisabledState(this._nextButtons,false)}if(this._dynamicPaddleNav){this._el.removeChild(this._dynamicPaddleNav)
}if(this._hasPaddleNavStateHandler){this.off(V.UPDATE,this._updatePaddleNavState)
}this.disableTouch();this.disableDesktopSwipe();this.disableCaptions();if(this._toggleNav){this._toggleNav.destroy();
this._toggleNav=null}ag(window,"resize",this._onWindowResize);this._el=null;this._itemHeights=null;
this._itemHeightsLookup=null;this._resizeContainer=null;this._isRightToLeft=null;
this._enableArrowKeys=null;this._previousButtons=null;this._onPaddlePrevious=null;
this._nextButtons=null;this._onPaddleNext=null;this._isACaptionsGallery=null;this._componentsContainer=null;
this._galleryWithCaptions=null;this._captionsContainer=null;this._captionsOptions=null;
return at.destroy.call(this,a)};T._getDeeplinkedItem=function(){var c=window.location.hash.substr(1);
var a;var b=this._items.length;while(b--){a=this._items[b];if(c===a.getElementId()){return a
}}return null};T._addItems=function(a){var c;var b;var f=/(^\[).*(\]$)/.test(a);
if(f){a=a.replace(/\[|\]/g,"");b=ac(a,this._el)}else{b=U(a,this._el)}var h=0;var d=b.length;
var g=this._isACaptionsGallery;for(h;h<d;h++){c=new this._itemType(b[h],{isACaption:g});
this.addItem(c);this._addItemTriggers(c)}};T._createToggleNav=function(){var c=this._getElementId();
var b='[data-ac-gallery-togglenav="'+c+'"], [data-ac-gallery-tabnav="'+c+'"]';var a=an(b);
if(a){this._toggleNav=new R(a,this,{duration:this._toggleNavDuration})}};T._addItemTriggers=function(c,b){var f=W("data-ac-gallery-trigger",c.getElementId());
if(b&&b.length){f=f.concat(b)}var a=0;var d=f.length;for(a;a<d;a++){c.addElementTrigger(f[a]);
if(this._toggleNav){this._toggleNav.addTrigger(f[a],c)}}};T._addPaddleNav=function(f){var h;
var c=this._getElementId();if(f){var g=(typeof f==="string")?f:Z;g=g.replace(/%ID%/g,this._getElementId());
this._dynamicPaddleNav=document.createElement("div");this._dynamicPaddleNav.innerHTML=g;
this._el.insertBefore(this._dynamicPaddleNav,this._el.firstChild)}this._previousButtons=W("data-ac-gallery-previous-trigger",c);
this._nextButtons=W("data-ac-gallery-next-trigger",c);var b=this._el.getAttribute("aria-label")||"";
if(b.length){b="("+b+")"}this._onPaddlePrevious=this._onPaddleInteraction.bind(null,this.showPrevious);
h=this._previousButtons.length;if(h){var d=this._el.getAttribute("data-ac-gallery-previouslabel");
if(d&&b.length){if(this._isRightToLeft){d=b+" "+d}else{d+=" "+b}}while(h--){if(d&&this._previousButtons[h].getAttribute("aria-label")===null){this._previousButtons[h].setAttribute("aria-label",d)
}aj(this._previousButtons[h],"click",this._onPaddlePrevious)}}this._onPaddleNext=this._onPaddleInteraction.bind(null,this.showNext);
h=this._nextButtons.length;if(h){var a=this._el.getAttribute("data-ac-gallery-nextlabel");
if(a&&b.length){if(this._isRightToLeft){a=b+" "+a}else{a+=" "+b}}while(h--){if(a&&this._nextButtons[h].getAttribute("aria-label")===null){this._nextButtons[h].setAttribute("aria-label",a)
}aj(this._nextButtons[h],"click",this._onPaddleNext)}}if(this._nextButtons.length||this._previousButtons.length){this._hasPaddleNavStateHandler=true;
this._updatePaddleNavState=this._updatePaddleNavState.bind(this);this.on(V.UPDATE,this._updatePaddleNavState)
}};T._onPaddleInteraction=function(a,b){af(b);a.call(null,{interactionEvent:b})
};T._updatePaddleNavState=function(){if(!this._wrapAround){var a=this._items.indexOf(this._currentItem);
if(a===0&&this._previousButtons.length){this._setPaddleDisabledState(this._previousButtons,true);
this._setPaddleDisabledState(this._nextButtons,false)}else{if(a===this._items.length-1&&this._nextButtons.length){this._setPaddleDisabledState(this._nextButtons,true);
this._setPaddleDisabledState(this._previousButtons,false)}else{this._setPaddleDisabledState(this._previousButtons,false);
this._setPaddleDisabledState(this._nextButtons,false)}}}else{this._setPaddleDisabledState(this._previousButtons,false);
this._setPaddleDisabledState(this._nextButtons,false)}};T._setPaddleDisabledState=function(c,b){var a=c.length;
while(a--){c[a].disabled=b;if(b){aq.add(c[a],ab)}else{aq.remove(c[a],ab)}}};T._addKeyboardListener=function(){if(this._enableArrowKeys){this._onKeyboardInteraction=this._onKeyboardInteraction.bind(this);
var b;var a;if(this._isRightToLeft){b=this.showPrevious;a=this.showNext}else{b=this.showNext;
a=this.showPrevious}this._rightArrowFunc=ak(this._onKeyboardInteraction.bind(null,b),this._keyboardThrottleDelay);
this._leftArrowFunc=ak(this._onKeyboardInteraction.bind(null,a),this._keyboardThrottleDelay);
ap.onDown(O.ARROW_RIGHT,this._rightArrowFunc);ap.onDown(O.ARROW_LEFT,this._leftArrowFunc)
}};T._onKeyboardInteraction=function(c,a){if(this.isInView()&&!ah()){var b=V.getAllInView();
if(b.length>1){b.sort(function(d,f){d=(d._enableArrowKeys)?d.getCurrentItem().percentageInView():0;
f=(f._enableArrowKeys)?f.getCurrentItem().percentageInView():0;return f-d});if(this!==b[0]){return
}}c.call(null,{interactionEvent:a})}};T._setUpSwiping=function(a,b){this._onSwipeEnd=this._onSwipeEnd.bind(this);
if(a){this._touchSwipe=new al(this._el,al.TOUCH_EVENTS);this._touchSwipe.on(al.END,this._onSwipeEnd)
}if(b){this._clickSwipe=new al(this._el,al.MOUSE_EVENTS);this._clickSwipe.on(al.END,this._onSwipeEnd)
}};T._onSwipeEnd=function(a){var c;var b=a.interactionEvent;var f=b.type!=="touchend"||b.type!=="touchstart"||b.type!=="touchmove";
if(f){var d={type:"touchmove",target:b.target,srcElement:b.srcElement}}var g={interactionEvent:d||b};
if(a.swipe===al.SWIPE_RIGHT){c=(this._isRightToLeft)?this.showNext:this.showPrevious
}else{if(a.swipe===al.SWIPE_LEFT){c=(this._isRightToLeft)?this.showPrevious:this.showNext
}}if(c){return c.call(this,g)}b=null;return null};T._getElementId=function(){if(this._elementId===undefined){this._elementId=this._el.getAttribute("id")
}return this._elementId};T._setUpContainerAutoResize=function(a){if(typeof a==="number"){this._containerResizeDuration=a
}else{if(a){this._containerResizeDuration=ao}else{this._containerResizeDuration=false
}}if(this._containerResizeDuration!==false){this._resizeContainer=true;this._updateContainerSize=this._updateContainerSize.bind(this);
this.on(V.UPDATE,this._updateContainerSize)}};T._updateContainerSize=function(a){var b=this._itemHeightsLookup[a.incoming[0].getElementId()];
if(b){this._setElHeight(b,this._containerResizeDuration)}};T._storeItemHeight=function(a,c){var b=S(a.getElement());
this._itemHeights.push({item:a,height:b.height});this._itemHeightsLookup[a.getElementId()]=b.height;
this._itemHeights.sort(function(d,f){return f.height-d.height});if(c&&this._itemHeights[0].item===a){this._setElHeight(b.height)
}};T._setElHeight=function(b,c){var a={height:b+"px"};if(c){a.transition="height "+c+"s"
}else{a.transition=null}Q.setStyle(this._el,a)};T._initCaptionsGallery=function(b,a){if(!b){return
}this._galleryWithCaptions=V.create(b,"fade",a?a:{crossFade:true});if(this._enableArrowKeys){this._galleryWithCaptions._enableArrowKeys=false
}this.on(V.UPDATE,function(d){var c=this.getItemIndex(d.incoming[0]);this._galleryWithCaptions.show(c)
}.bind(this))};T._onAutoPlayToNextItem=function(){if(this._isAutoPlaying){if(!K.isHidden&&this._currentItem.isInView()){if(this._cancelAutoPlayOnInteraction){this.off(V.UPDATE,this.stopAutoPlay)
}var a=this.showNext();if(a!==null){if(this._cancelAutoPlayOnInteraction){this.on(V.UPDATE,this.stopAutoPlay)
}setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)}}else{setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)
}}};T._onWindowResize=function(a){window.requestAnimationFrame(function(){if(this._el){this.resize()
}}.bind(this))};ar.exports=X},{"../templates/paddlenav.js":263,"./../Gallery":243,"./../helpers/inputHasFocus":254,"./../helpers/selectElementFromDataAttributeValue":255,"./../helpers/selectElementThatHasDataAttribute":256,"./../navigation/ToggleNav":257,"@marcom/ac-classlist":55,"@marcom/ac-dom-events/addEventListener":58,"@marcom/ac-dom-events/preventDefault":66,"@marcom/ac-dom-events/removeEventListener":67,"@marcom/ac-dom-metrics/getContentDimensions":75,"@marcom/ac-dom-styles":96,"@marcom/ac-dom-traversal/querySelector":115,"@marcom/ac-dom-traversal/querySelectorAll":116,"@marcom/ac-feature/touchAvailable":46,"@marcom/ac-function/throttle":122,"@marcom/ac-keyboard":124,"@marcom/ac-keyboard/keyMap":126,"@marcom/ac-object/create":128,"@marcom/ac-page-visibility":130,"@marcom/ac-pointer-tracker":136,"@marcom/ac-polyfills/requestAnimationFrame":148}],248:[function(q,r,p){var m=q("./create");
var k=q("./../helpers/selectElementThatHasDataAttribute");var l=q("./../Gallery");
var s=l.FADE_SELECTOR.replace(/\[|\]/g,"");var n=l.SLIDE_SELECTOR.replace(/\[|\]/g,"");
r.exports=function o(b){b=b||{};var a=b.context||document.body;var d;var c;d=k(n,a);
c=d.length;while(c--){m(d[c],l.SLIDE,b)}d=k(s,a);c=d.length;while(c--){m(d[c],l.FADE,b)
}return l.getAll()}},{"./../Gallery":243,"./../helpers/selectElementThatHasDataAttribute":256,"./create":249}],249:[function(r,t,q){var n=r("./../fade/FadeGallery");
var l=r("./../Gallery");var s=r("./../slide/SlideGallery");var m="%TYPE% is not a supported gallery type and el has no gallery data attribute.";
var u=l.FADE_SELECTOR.replace(/\[|\]/g,"");var o=l.SLIDE_SELECTOR.replace(/\[|\]/g,"");
t.exports=function p(c,d,a){var b;if(typeof d==="string"){if(d===l.SLIDE){b=s}else{if(d===l.FADE){b=n
}}}if(b===undefined){if(c.getAttribute(o)!==null){b=s}else{if(c.getAttribute(u)!==null){b=n
}}}if(b===undefined){throw new Error(m.replace(/%TYPE%/g,d))}return new b(c,a)}
},{"./../Gallery":243,"./../fade/FadeGallery":250,"./../slide/SlideGallery":260}],250:[function(u,w,s){var o=u("@marcom/ac-object/clone");
var q=u("@marcom/ac-object/create");var t=u("./FadeItem");var v=u("./../auto/AutoGallery");
var n=0.5;function p(b,a){a=o(a)||{};a.itemType=a.itemType||t;this._fadeDuration=a.duration||n;
a.toggleNavDuration=(a.toggleNavDuration===undefined)?this._fadeDuration:a.toggleNavDuration;
this._crossFade=a.crossFade;this._zIndexCount=a.startZIndex||1;this._ease=a.ease;
if(a.resizeContainerOnUpdate===true){a.resizeContainerOnUpdate=this._fadeDuration
}this._onItemShowComplete=this._onItemShowComplete.bind(this);v.call(this,b,a);
if(this._currentItem){this._currentItem.fadeIn(0)}}p.RESIZED=v.RESIZED;p.UPDATE=v.UPDATE;
p.UPDATE_COMPLETE=v.UPDATE_COMPLETE;var m=v.prototype;var r=p.prototype=q(m);r.addItem=function(b,a){if(b.nodeType){b=new this._itemType(b)
}var c=m.addItem.call(this,b,a);if(b!==this._currentItem){b.fadeOut()}else{b.fadeIn(0)
}return c};r.destroy=function(a){var b=m.destroy.call(this,a);this._fadeDuration=null;
this._crossFade=null;this._zIndexCount=null;this._ease=null;this._onItemShowComplete=null;
return b};r._startAt=function(a){var b=this._items[a];if(b&&(this._currentItem!==b)){this._currentItem.fadeOut(0);
this._currentItem.hide();this._setCurrentItem(b);this._currentItem.show();this._currentItem.fadeIn(0);
this.trigger(p.UPDATE,this._items)}};r._onItemShowComplete=function(b){if(b&&b.target()!==this._currentItem.getElement()){if(!this._currentItem.isFading()){this._currentItem.fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,this._onItemShowComplete)
}return}var c;var a=this._items.length;while(a--){c=this._items[a];if(c!==this._currentItem){c.fadeOut()
}}if(this._incomingOutgoingItems){this.trigger(p.UPDATE_COMPLETE,this._incomingOutgoingItems)
}};r._updateItems=function(c,a){if(a){return}if(this._crossFade){var b=(a)?null:this.trigger.bind(this,p.UPDATE_COMPLETE,c);
c.outgoing[0].fadeOut(this._fadeDuration*0.99,this._ease);c.incoming[0].fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,b)
}else{this._incomingOutgoingItems=(a)?false:c;if(!c.outgoing[0].isFading()){c.incoming[0].fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,this._onItemShowComplete)
}}c.outgoing[0].hide();c.incoming[0].show()};w.exports=p},{"./../auto/AutoGallery":247,"./FadeItem":251,"@marcom/ac-object/clone":127,"@marcom/ac-object/create":128}],251:[function(x,y,t){var p=x("@marcom/ac-dom-styles/setStyle");
var q=x("@marcom/ac-object/create");var u=x("@marcom/ac-solar/fade");var o=x("@marcom/ac-solar/fadeIn");
var r=x("@marcom/ac-solar/fadeOut");var v=x("./../Item");function w(a,b){v.call(this,a,b);
p(a,{position:"absolute"})}w.SELECTED=v.SELECTED;w.SHOW=v.SHOW;w.HIDE=v.HIDE;var n=v.prototype;
var s=w.prototype=q(n);s.fadeIn=function(d,c,a,b){if(d){p(this._el,{zIndex:a||1});
this._destroyCurrentClip();this._clip=u(this._el,0,1,d,{ease:c,onComplete:b})}else{o(this._el,0);
p(this._el,{zIndex:a||1})}};s.fadeOut=function(b,a){if(b){this._destroyCurrentClip();
this._clip=r(this._el,b,{ease:a})}else{r(this._el,0)}};s.isFading=function(){return !!(this._clip&&this._clip.playing())
};s.destroy=function(){p(this._el,{position:null,opacity:null,zIndex:null});n.destroy.call(this);
this._destroyCurrentClip();this._clip=null};s._destroyCurrentClip=function(){if(this.isFading()){this._clip.destroy()
}};y.exports=w},{"./../Item":244,"@marcom/ac-dom-styles/setStyle":99,"@marcom/ac-object/create":128,"@marcom/ac-solar/fade":236,"@marcom/ac-solar/fadeIn":237,"@marcom/ac-solar/fadeOut":238}],252:[function(m,k,h){var l=m("@marcom/ac-object/create");
var j=m("@marcom/ac-object/extend");k.exports=function i(a){var c=this;var b=function(){c.apply(this,arguments)
};var d=l(this.prototype);b.prototype=j(d,a);j(b,this);return b}},{"@marcom/ac-object/create":128,"@marcom/ac-object/extend":129}],253:[function(l,k,m){var h=l("@marcom/ac-dom-styles/getStyle");
var i=l("@marcom/ac-dom-metrics/getContentDimensions");k.exports=function j(b){var a=h(b,"margin-right","margin-left");
return Math.round(i(b).width)+parseInt(a.marginRight,10)+parseInt(a.marginLeft,10)
}},{"@marcom/ac-dom-metrics/getContentDimensions":75,"@marcom/ac-dom-styles/getStyle":97}],254:[function(f,i,g){i.exports=function h(){var a=["input","select","textarea"];
return a.indexOf(document.activeElement.nodeName.toLowerCase())>-1}},{}],255:[function(m,k,h){var j=m("@marcom/ac-dom-traversal/querySelectorAll");
var i=function(f,o){var d;var a=document.getElementsByTagName("*");var g=0;var c=a.length;
var b=[];for(g;g<c;g++){d=a[g];if(d.getAttribute(f)!==null&&d.getAttribute(f).split(" ").indexOf(o)>-1){b[b.length]=d
}}return b};k.exports=function l(d,a){var b=j("["+d+'*="'+a+'"]');if(b.length===0&&document.documentMode===7){return i(d,a)
}var o=[];var f=0;var c=b.length;var g;for(f;f<c;f++){g=b[f].getAttribute(d);if(g===a){o.push(b[f])
}else{if(g&&g.length){g=g.split(" ");if(g.indexOf(a)>-1){o.push(b[f])}}}}return o
}},{"@marcom/ac-dom-traversal/querySelectorAll":116}],256:[function(o,n,i){var k=o("@marcom/ac-dom-traversal/querySelectorAll");
var m=o("@marcom/ac-dom-traversal/ancestors");var j=function(d,c){var b;var g=document.getElementsByTagName("*");
var f=0;var a=g.length;var h=[];for(f;f<a;f++){b=g[f];if(b.getAttribute(d)!==null&&(!c||m(b).indexOf(c)>-1)){h[h.length]=b
}}return h};n.exports=function l(c,b){b=b||document.body;var a=k("["+c+"]",b);if(a.length===0&&document.documentMode===7){return j(c,b)
}return a}},{"@marcom/ac-dom-traversal/ancestors":111,"@marcom/ac-dom-traversal/querySelectorAll":116}],257:[function(D,I,t){var F=D("@marcom/ac-dom-events/addEventListener");
var E=D("@marcom/ac-dom-events/removeEventListener");var z=D("@marcom/ac-dom-metrics/getDimensions");
var u=D("@marcom/ac-dom-metrics/getPosition");var G=D("@marcom/ac-dom-styles/getStyle");
var H=D("@marcom/ac-dom-styles/setStyle");var K=D("@marcom/ac-dom-traversal/ancestors");
var C=D("@marcom/ac-object/create");var v=D("@marcom/ac-solar/scrollX");var B=D("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var y=D("./../Gallery");var A=0.5;function w(a,c,b){b=b||{};this._el=a;this._isRightToLeft=(b.rightToLeft===undefined)?G(a,"direction").direction==="rtl":b.rightToLeft;
this._scrollType=this._scrollDirection();this._gallery=c;this._triggers={};this._ordered=[];
this._containerEl=this._el.children[0];this._slideDuration=(b.duration===undefined)?A:b.duration;
B.call(this)}var J=B.prototype;var x=w.prototype=C(J);x.start=function(){this._onWindowLoad=this._onWindowLoad.bind(this);
this._onGalleryUpdated=this._onGalleryUpdated.bind(this);this._gallery.on(y.UPDATE,this._onGalleryUpdated);
this.resize();F(window,"load",this._onWindowLoad)};x.addTrigger=function(c,b){if(this._triggers[b.getElementId()]!==undefined){return
}var d=K(c);if(d.indexOf(this._el)>-1){var a={el:c};this._triggers[b.getElementId()]=a;
this._ordered.push(a)}};x.resize=function(){if(!this._ordered.length){return}H(this._containerEl,{paddingLeft:null,paddingRight:null});
this._containerWidth=z(this._containerEl).width;this._width=z(this._el).width;this._viewCenter=Math.round(this._width*0.5);
var c=this._ordered.length;while(c--){this._setTriggerData(this._ordered[c])}this._ordered.sort(function(h,i){return h.left-i.left
});if(this._containerWidth>this._width){var a=this._ordered[0];var b=this._ordered[this._ordered.length-1];
var d=(this._width-a.width)*0.5;var g=(this._width-b.width)*0.5;H(this._containerEl,{paddingLeft:d+"px",paddingRight:g+"px"});
var f=this._triggers[this._gallery.getCurrentItem().getElementId()];if(f){this._centerNav(f)
}}};x.destroy=function(){this._gallery.off(y.UPDATE,this._onGalleryUpdated);E(window,"load",this._onWindowLoad);
H(this._containerEl,{paddingLeft:null,paddingRight:null});this._el=null;this._gallery=null;
this._triggers=null;this._ordered=null;this._containerEl=null;this._destroyCurrentClip();
this._clip=null;return J.destroy.call(this)};x._onWindowLoad=function(){E(window,"load",this._onWindowLoad);
this.resize()};x._setTriggerData=function(a){a.width=z(a.el).width;var b=u(a.el);
a.left=b.left;a.right=b.right;a.center=a.left+(a.width*0.5)};x._centerNav=function(c,a){this._setTriggerData(c);
this._width=z(this._el).width;this._viewCenter=Math.round(this._width*0.5);var b=Math.round(c.center-this._viewCenter);
if(this._isRightToLeft){if(this._scrollType!=="negative"){b=Math.abs(b)}if(this._scrollType==="default"){b=this._el.scrollWidth-this._el.clientWidth-b
}}this._destroyCurrentClip();if(a){this._clip=v(this._el,b,a)}else{this._el.scrollLeft=b
}};x._onGalleryUpdated=function(b){var a=this._triggers[b.incoming[0].getElementId()];
if(a){this._centerNav(a,this._slideDuration)}};x._destroyCurrentClip=function(){if(this._clip&&this._clip.playing()){this._clip.destroy()
}};x._scrollDirection=function(){var a="reverse";var b=document.createElement("div");
b.style.cssText="width:2px; height:1px; position:absolute; top:-1000px; overflow:scroll; font-size: 14px;";
b.style.direction="rtl";b.innerHTML="test";document.body.appendChild(b);if(b.scrollLeft>0){a="default"
}else{b.scrollLeft=1;if(b.scrollLeft===0){a="negative"}}document.body.removeChild(b);
return a};I.exports=w},{"./../Gallery":243,"@marcom/ac-dom-events/addEventListener":58,"@marcom/ac-dom-events/removeEventListener":67,"@marcom/ac-dom-metrics/getDimensions":76,"@marcom/ac-dom-metrics/getPosition":80,"@marcom/ac-dom-styles/getStyle":97,"@marcom/ac-dom-styles/setStyle":99,"@marcom/ac-dom-traversal/ancestors":111,"@marcom/ac-event-emitter-micro":120,"@marcom/ac-object/create":128,"@marcom/ac-solar/scrollX":242}],258:[function(f,h,g){var i=f("./../analytics/AnalyticsManager");
h.exports=new i()},{"./../analytics/AnalyticsManager":246}],259:[function(o,n,i){var l=["input","select","textarea","button","object"];
var k=["href","tabindex","contenteditable"];var j=function(){this.focusableSelectors=l.concat(k.map(function(a){return(a==="href")?"a["+a+"]":"*["+a+"]"
})).join(",")};var m=j.prototype;m.isFocusable=function(b,d){var a=b.nodeName.toLowerCase();
var c=l.indexOf(a)>-1;if(a==="a"){return true}if(c){return !b.disabled}if(!b.contentEditable){return true
}d=d||b.tabIndex;return isNaN(d)};m.isTabbable=function(a){var b=a.getAttribute("tabindex");
if(!isNaN(b)){return(b>=0)}else{return this.isFocusable(a,b)}};m.getTabbable=function(d){var b=d.length;
var c=[];for(var a=0;a<b;a++){if(this.isTabbable(d[a])){c.push(d[a])}}return c};
n.exports=new j()},{}],260:[function(N,Q,x){var P=N("@marcom/ac-classlist");var F=N("@marcom/ac-dom-styles");
var z=N("@marcom/ac-dom-traversal/querySelectorAll");var B=N("@marcom/ac-object/clone");
var L=N("@marcom/ac-object/create");var y=N("./../helpers/getElementFullWidth");
var H=N("@marcom/ac-solar/moveX");var A=N("./../helpers/selectElementFromDataAttributeValue");
var M=N("./../helpers/selectElementThatHasDataAttribute");var I=N("./../auto/AutoGallery");
var O=N("@marcom/ac-pointer-tracker").PointerTracker;var D=N("./SlideItem");var K=N("./SlideItemWrapper");
var S=0.5;var J=0.5;var C=true;function E(c,d){d=B(d)||{};d.itemType=d.itemType||D;
this._itemsPerSlide=d.itemsPerSlide||1;var b=d.deeplink!==false;d.deeplink=false;
this._slideDuration=(d.duration!==undefined)?d.duration:J;d.toggleNavDuration=(d.toggleNavDuration===undefined)?this._slideDuration:d.toggleNavDuration;
this._itemCenterPoint=(d.itemCenterPoint!==undefined)?d.itemCenterPoint:S;this._edgePullResistance=(d.edgePullResistance?d.edgePullResistance:C);
this._slideOptions={ease:d.ease};if(d.resizeContainerOnUpdate===true){d.resizeContainerOnUpdate=this._slideDuration
}d.touch=d.touch!==false;this._originalWrapAround=d.wrapAround||false;I.call(this,c,d);
if(b){var a=this._getDeeplinkedItem();if(a){if(this._currentItem!==a){this._currentItem.hide();
this._setCurrentItem(a);this._currentItem.show()}}}this._positionItems=this._positionItems.bind(this);
this._createContainer();if(this._items.length!==0){this._positionItems()}this._isInstantiated=true
}E.RESIZED=I.RESIZED;E.UPDATE=I.UPDATE;E.UPDATE_COMPLETE=I.UPDATE_COMPLETE;var R=I.prototype;
var G=E.prototype=L(R);G.addItem=function(b,a){if(b.nodeType){b=new this._itemType(b)
}var c=R.addItem.call(this,b,a);if(this._containerEl!==undefined){this._addItemToContainer(b);
this._positionItems()}this._updateWrapAround();return c};G.removeItem=function(b,d){if(this._containerEl&&b.getElement().parentElement===this._containerEl){var a=b.getOriginalParentElement();
if(a){a.appendChild(b.getElement())}else{if(typeof b.removeItems==="function"){b.removeItems();
d.destroyItem=true}}var c=R.removeItem.call(this,b,d);if(this._currentItem){this._positionItems(this._currentItem)
}this._updateWrapAround();return c}return R.removeItem.call(this,b,d)};G.resize=function(){this._positionItems();
this._snapToPosition(this._currentItem.position());return R.resize.call(this)};
G.destroy=function(d){this._destroyCurrentClip();this._clip=null;var b=this._items.length;
while(b--){this._items[b].off(D.CENTER_POINT_CHANGED,this._positionItems)}if(this._touchSwipe){this._touchSwipe.off(O.START,this._onSwipeStart);
this._touchSwipe.off(O.UPDATE,this._onSwipeUpdate)}if(this._clickSwipe){this._clickSwipe.off(O.START,this._onSwipeStart);
this._clickSwipe.off(O.UPDATE,this._onSwipeUpdate)}var a=this._el;var c=R.destroy.call(this,d);
a.removeChild(this._containerEl);this._containerEl=null;this._slideDuration=null;
this._itemCenterPoint=null;this._positionItems=null;this._slideOptions=null;return c
};G._addItems=function(d){if(this._itemsPerSlide>1){var i;var f=/(^\[).*(\]$)/.test(d);
if(f){i=M(d.replace(/\[|\]/g,""),this._el)}else{i=z(d,this._el)}var h;var j;var c;
var b=0;var a=0;var g=i.length;for(a;a<g;a++){if(b===0){h=new K()}h.addItem(i[a]);
c=i[a].getAttribute("id");if(c){j=A("data-ac-gallery-trigger",c);this._addItemTriggers(h,j)
}if(++b===this._itemsPerSlide||a===g-1){b=0;h.resize();this.addItem(h)}}}else{R._addItems.call(this,d)
}};G._createContainer=function(){this._containerEl=document.createElement("div");
P.add(this._containerEl,"ac-gallery-slidecontainer");F.setStyle(this._containerEl,{position:"absolute",left:"0",top:"0",width:"100%",height:"100%"});
this._el.appendChild(this._containerEl);var a=0;var b=this._items.length;for(a;
a<b;a++){this._addItemToContainer(this._items[a])}};G._addItemToContainer=function(a){this._containerEl.appendChild(a.getElement());
a.on(D.CENTER_POINT_CHANGED,this._positionItems)};G._positionItems=function(c){c=c||this._currentItem;
var l=this._items;if(this._wrapAround){l=this._shuffleItems()}var j=(this._getActualPositionX()-c.position())||0;
var k=parseInt(F.getStyle(this._el,"width").width,10);var g=0;var a=0;var d=l.length;
var i;var f;var h;var b;var m;for(a;a<d;a++){i=l[a];i.resize();f=i.getElement();
F.setStyle(f,{left:g+"px"});h=y(f);b=k-h;m=(i.centerPoint&&i.centerPoint()!==null)?i.centerPoint():this._itemCenterPoint;
i.position((g*-1)+(b*m));if(this._isRightToLeft){g-=h}else{g+=h}}g=c.position()+j;
this._snapToPosition(g)};G._getActualPositionX=function(){var c=F.getStyle(this._containerEl,"transform").transform;
if(!c||c==="none"){var b=F.getStyle(this._containerEl,"left").left;return parseInt(b,10)
}else{if(c===this._transformStyles&&this._actualPositionX!==undefined){return this._actualPositionX
}}this._transformStyles=c;var a=this._transformStyles.split(",");this._actualPositionX=a[4]||this._currentItem.position();
return this._actualPositionX*1};G._snapToPosition=function(a){this._destroyCurrentClip();
this._positionX=a;F.setStyle(this._containerEl,{transition:"transform 0s, left 0s"});
H(this._containerEl,a,0,this._slideOptions)};G._slideToPosition=function(a,c,b){this._positionX=a;
this._clip=H(this._containerEl,a,c,{ease:this._slideOptions.ease,onComplete:b})
};G._setUpSwiping=function(c,a){var b=R._setUpSwiping.call(this,c,a);this._onSwipeStart=this._onSwipeStart.bind(this);
this._onSwipeUpdate=this._onSwipeUpdate.bind(this);if(this._touchSwipe){this._touchSwipe.on(O.START,this._onSwipeStart);
this._touchSwipe.on(O.UPDATE,this._onSwipeUpdate)}if(this._clickSwipe){this._clickSwipe.on(O.START,this._onSwipeStart);
this._clickSwipe.on(O.UPDATE,this._onSwipeUpdate)}return b};G._onSwipeStart=function(a){if(this._clip&&this._clip.playing()){this._destroyCurrentClip();
this._positionX=this._getActualPositionX()}};G._onSwipeUpdate=function(b){this._destroyCurrentClip();
var c=this.getItems().slice(-1)[0].position();var a=this._positionX>0||this._positionX<c;
var d=b.diffX;if(this._edgePullResistance&&!this._wrapAround&&a){d*=0.5}this._snapToPosition(this._positionX-d)
};G._onSwipeEnd=function(a){var b=R._onSwipeEnd.call(this,a);if(b===null){b=this.show(this._currentItem,{interactionEvent:a.interactionEvent})
}return b};G._shuffleItems=function(){var i=this._items.length===2&&!this._isAutoPlaying;
if(i){return this._items.slice()}var c=this._items.length;var h=this._items.indexOf(this._currentItem);
var d=Math.floor(c*0.5);var b;var a;var g;if(h<d){b=d-h;var f=c-b;a=this._items.slice(f);
g=this._items.slice(0,f);return a.concat(g)}else{if(h>d){b=h-d;a=this._items.slice(0,b);
g=this._items.slice(b);return g.concat(a)}}return this._items};G._updateItems=function(d,b){this._destroyCurrentClip();
if(this._wrapAround){this._positionItems(d.outgoing[0])}if(this.getItemIndex(d.outgoing[0])>-1){var a=(b)?null:this.trigger.bind(this,E.UPDATE_COMPLETE,d);
var c=this._slideDuration;this._slideToPosition(d.incoming[0].position(),c,a);if(d.incoming[0]!==d.outgoing[0]){d.incoming[0].show();
d.outgoing[0].hide()}}else{this._slideToPosition(this._currentItem.position(),this._slideDuration);
d.incoming[0].show();if(!b){this.trigger(E.UPDATE_COMPLETE,d)}}};G._updateWrapAround=function(){if(this._items.length<=2){this._wrapAround=false
}else{if(this._originalWrapAround){this._wrapAround=this._originalWrapAround}}if(this._isInstantiated&&(this._previousButtons||this._nextButtons)){this._updatePaddleNavState()
}};G._destroyCurrentClip=function(){if(this._clip&&this._clip.playing()){this._clip.destroy()
}};Q.exports=E},{"./../auto/AutoGallery":247,"./../helpers/getElementFullWidth":253,"./../helpers/selectElementFromDataAttributeValue":255,"./../helpers/selectElementThatHasDataAttribute":256,"./SlideItem":261,"./SlideItemWrapper":262,"@marcom/ac-classlist":55,"@marcom/ac-dom-styles":96,"@marcom/ac-dom-traversal/querySelectorAll":116,"@marcom/ac-object/clone":127,"@marcom/ac-object/create":128,"@marcom/ac-pointer-tracker":136,"@marcom/ac-solar/moveX":240}],261:[function(r,s,p){var m=r("@marcom/ac-dom-styles/setStyle");
var n=r("@marcom/ac-object/create");var q=r("./../Item");function l(a,b){q.call(this,a,b);
m(a,{position:"absolute",transform:{translateZ:0}});this._parentElement=a.parentElement
}l.CENTER_POINT_CHANGED="centerpointchanged";l.SELECTED=q.SELECTED;l.SHOW=q.SHOW;
l.HIDE=q.HIDE;var k=q.prototype;var o=l.prototype=n(k);o.position=function(a){if(a!==undefined){this._position=a
}return this._position||0};o.centerPoint=function(a){if(a!==undefined){this._centerPoint=a;
this.trigger(l.CENTER_POINT_CHANGED)}return(this._centerPoint!==undefined)?this._centerPoint:null
};o.getOriginalParentElement=function(){return this._parentElement};o.resize=function(){};
o.destroy=function(){m(this._el,{position:null,left:null,transform:null});k.destroy.call(this)
};s.exports=l},{"./../Item":244,"@marcom/ac-dom-styles/setStyle":99,"@marcom/ac-object/create":128}],262:[function(x,z,w){var q=x("@marcom/ac-classlist");
var t=x("@marcom/ac-dom-styles/setStyle");var A=x("@marcom/ac-dom-traversal/querySelectorAll");
var u=x("@marcom/ac-object/create");var p=x("./../singletons/tabManager");var C=x("./../helpers/getElementFullWidth");
var s=x("./SlideItem");var B="ac-gallery-slideitemwrapper";function y(){s.call(this,document.createElement("div"));
this._items=[];this._currentWidth=0;q.add(this._el,B)}var r=s.prototype;var v=y.prototype=u(r);
v.addItem=function(b){this._items.push({el:b,parentElement:b.parentElement});this._el.appendChild(b);
var d=b.getAttribute("id");if(d){var a=this._el.getAttribute("id")||"";var c=(a.length)?"-":"";
a+=c+d;this._el.setAttribute("id",a)}this._focusableEls=this._focusableEls.concat(A(p.focusableSelectors,b))
};v.removeItems=function(){var b;var d;var c=0;var a=this._items.length;for(c;c<a;
c++){b=this._items[c].el;t(b,{position:null,left:null});d=this._items[c].parentElement;
if(d){d.appendChild(b)}}};v.resize=function(){this._currentWidth=0;var b;var c=0;
var a=this._items.length;for(c;c<a;c++){b=this._items[c].el;t(b,{position:"absolute",left:this._currentWidth+"px"});
this._currentWidth+=C(b)}t(this._el,{width:this._currentWidth+"px"})};v.destroy=function(){this.removeItems();
this._items=null;this._currentWidth=null;var a=this._el.parentElement;if(a){a.removeChild(this._el)
}r.destroy.call(this)};z.exports=y},{"./../helpers/getElementFullWidth":253,"./../singletons/tabManager":259,"./SlideItem":261,"@marcom/ac-classlist":55,"@marcom/ac-dom-styles/setStyle":99,"@marcom/ac-dom-traversal/querySelectorAll":116,"@marcom/ac-object/create":128}],263:[function(f,i,g){var h="";
h+='<nav class="paddlenav">';h+="<ul>";h+='<li><button class="paddlenav-arrow paddlenav-arrow-previous" data-ac-gallery-previous-trigger="%ID%"></button></li>';
h+='<li><button class="paddlenav-arrow paddlenav-arrow-next" data-ac-gallery-next-trigger="%ID%"></button></li>';
h+="</ul>";h+="</nav>";i.exports=h},{}],264:[function(F,K,t){var C=K.exports={};
var B;var z;function E(){throw new Error("setTimeout has not been defined")}function v(){throw new Error("clearTimeout has not been defined")
}(function(){try{if(typeof setTimeout==="function"){B=setTimeout}else{B=E}}catch(a){B=E
}try{if(typeof clearTimeout==="function"){z=clearTimeout}else{z=v}}catch(a){z=v
}}());function G(b){if(B===setTimeout){return setTimeout(b,0)}if((B===E||!B)&&setTimeout){B=setTimeout;
return setTimeout(b,0)}try{return B(b,0)}catch(a){try{return B.call(null,b,0)}catch(a){return B.call(this,b,0)
}}}function H(b){if(z===clearTimeout){return clearTimeout(b)}if((z===v||!z)&&clearTimeout){z=clearTimeout;
return clearTimeout(b)}try{return z(b)}catch(a){try{return z.call(null,b)}catch(a){return z.call(this,b)
}}}var y=[];var u=false;var D;var x=-1;function A(){if(!u||!D){return}u=false;if(D.length){y=D.concat(y)
}else{x=-1}if(y.length){w()}}function w(){if(u){return}var a=G(A);u=true;var b=y.length;
while(b){D=y;y=[];while(++x<b){if(D){D[x].run()}}x=-1;b=y.length}D=null;u=false;
H(a)}C.nextTick=function(c){var b=new Array(arguments.length-1);if(arguments.length>1){for(var a=1;
a<arguments.length;a++){b[a-1]=arguments[a]}}y.push(new J(c,b));if(y.length===1&&!u){G(w)
}};function J(b,a){this.fun=b;this.array=a}J.prototype.run=function(){this.fun.apply(null,this.array)
};C.title="browser";C.browser=true;C.env={};C.argv=[];C.version="";C.versions={};
function I(){}C.on=I;C.addListener=I;C.once=I;C.off=I;C.removeListener=I;C.removeAllListeners=I;
C.emit=I;C.prependListener=I;C.prependOnceListener=I;C.listeners=function(a){return[]
};C.binding=function(a){throw new Error("process.binding is not supported")};C.cwd=function(){return"/"
};C.chdir=function(a){throw new Error("process.chdir is not supported")};C.umask=function(){return 0
}},{}],265:[function(i,h,f){h.exports=function g(c,a){var b;if(a){b=c.getBoundingClientRect();
return{width:b.width,height:b.height}}return{width:c.offsetWidth,height:c.offsetHeight}
}},{}],266:[function(m,l,n){var o=m("./getDimensions");var i=m("./getScrollX");
var j=m("./getScrollY");l.exports=function k(f,g){var c;var a;var b;var d;if(g){c=f.getBoundingClientRect();
a=i();b=j();return{top:c.top+b,right:c.right+a,bottom:c.bottom+b,left:c.left+a}
}d=o(f,g);c={top:f.offsetTop,left:f.offsetLeft,width:d.width,height:d.height};while((f=f.offsetParent)){c.top+=f.offsetTop;
c.left+=f.offsetLeft}return{top:c.top,right:c.left+c.width,bottom:c.top+c.height,left:c.left}
}},{"./getDimensions":265,"./getScrollX":267,"./getScrollY":268}],267:[function(i,h,f){h.exports=function g(a){a=a||window;
if(a===window){return window.scrollX||window.pageXOffset}return a.scrollLeft}},{}],268:[function(i,h,f){h.exports=function g(a){a=a||window;
if(a===window){return window.scrollY||window.pageYOffset}return a.scrollTop}},{}],269:[function(g,k,h){var i=g("./extend");
k.exports=function j(a,b){if(typeof a!=="object"){throw new TypeError("defaults: must provide a defaults object")
}b=b||{};if(typeof b!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return i({},a,b)}},{"./extend":270}],270:[function(d,g,f){arguments[4][129][0].apply(f,arguments)
},{"@marcom/ac-polyfills/Array/prototype.forEach":287,dup:129}],271:[function(f,h,g){var i=f("./ac-element-engagement/ElementEngagement");
h.exports=new i();h.exports.ElementEngagement=i},{"./ac-element-engagement/ElementEngagement":272}],272:[function(s,t,q){var p;
var l=s("@marcom/ac-event-emitter-micro").EventEmitterMicro;var r={defaults:s("@marcom/ac-object/defaults"),extend:s("@marcom/ac-object/extend")};
var o=s("@marcom/ac-element-tracker").ElementTracker;var m={timeToEngage:500,inViewThreshold:0.75,stopOnEngaged:true};
var n={thresholdEnterTime:0,thresholdExitTime:0,inThreshold:false,engaged:false,tracking:true};
var u=function(a){o.call(this,null,a);l.call(this);this._thresholdEnter=this._thresholdEnter.bind(this);
this._thresholdExit=this._thresholdExit.bind(this);this._enterView=this._enterView.bind(this);
this._exitView=this._exitView.bind(this)};p=u.prototype=Object.create(o.prototype);
p=r.extend(p,l.prototype);p._decorateTrackedElement=function(a,b){var c;c=r.defaults(m,b||{});
r.extend(a,c);r.extend(a,n)};p._attachElementListeners=function(a){a.on("thresholdenter",this._thresholdEnter,this);
a.on("thresholdexit",this._thresholdExit,this);a.on("enterview",this._enterView,this);
a.on("exitview",this._exitView,this)};p._removeElementListeners=function(a){a.off("thresholdenter",this._thresholdEnter);
a.off("thresholdexit",this._thresholdExit);a.off("enterview",this._enterView);a.off("exitview",this._exitView)
};p._attachAllElementListeners=function(){this.elements.forEach(function(a){if(!a.stopOnEngaged){this._attachElementListeners(a)
}else{if(!a.engaged){this._attachElementListeners(a)}}},this)};p._removeAllElementListeners=function(){this.elements.forEach(function(a){this._removeElementListeners(a)
},this)};p._elementInViewPastThreshold=function(a){var b=false;if(a.pixelsInView===this._windowHeight){b=true
}else{b=(a.percentInView>a.inViewThreshold)}return b};p._ifInView=function(b,c){var a=b.inThreshold;
o.prototype._ifInView.apply(this,arguments);if(!a&&this._elementInViewPastThreshold(b)){b.inThreshold=true;
b.trigger("thresholdenter",b);if(typeof b.timeToEngage==="number"&&b.timeToEngage>=0){b.engagedTimeout=window.setTimeout(this._engaged.bind(this,b),b.timeToEngage)
}}};p._ifAlreadyInView=function(b){var a=b.inThreshold;o.prototype._ifAlreadyInView.apply(this,arguments);
if(a&&!this._elementInViewPastThreshold(b)){b.inThreshold=false;b.trigger("thresholdexit",b);
if(b.engagedTimeout){window.clearTimeout(b.engagedTimeout);b.engagedTimeout=null
}}};p._engaged=function(a){a.engagedTimeout=null;this._elementEngaged(a);a.trigger("engaged",a);
this.trigger("engaged",a)};p._thresholdEnter=function(a){a.thresholdEnterTime=Date.now();
a.thresholdExitTime=0;this.trigger("thresholdenter",a)};p._thresholdExit=function(a){a.thresholdExitTime=Date.now();
this.trigger("thresholdexit",a)};p._enterView=function(a){this.trigger("enterview",a)
};p._exitView=function(a){this.trigger("exitview",a)};p._elementEngaged=function(a){a.engaged=true;
if(a.stopOnEngaged){this.stop(a)}};p.stop=function(a){if(this.tracking&&!a){this._removeAllElementListeners();
o.prototype.stop.call(this)}if(a&&a.tracking){a.tracking=false;this._removeElementListeners(a);
this.removeElement(a)}};p.start=function(a){if(!a){this._attachAllElementListeners()
}if(a&&!a.tracking){if(!a.stopOnEngaged){a.tracking=true;this._attachElementListeners(a)
}else{if(!a.engaged){a.tracking=true;this._attachElementListeners(a)}}}if(!this.tracking){o.prototype.start.call(this)
}else{this.refreshAllElementMetrics();this.refreshAllElementStates()}};p.addElement=function(c,b){b=b||{};
var a=o.prototype.addElement.call(this,c,b.useRenderedPosition);this._decorateTrackedElement(a,b);
return a};p.addElements=function(a,b){[].forEach.call(a,function(c){this.addElement(c,b)
},this)};t.exports=u},{"@marcom/ac-element-tracker":280,"@marcom/ac-event-emitter-micro":283,"@marcom/ac-object/defaults":269,"@marcom/ac-object/extend":270}],273:[function(d,g,f){arguments[4][103][0].apply(f,arguments)
},{dup:103}],274:[function(d,g,f){arguments[4][105][0].apply(f,arguments)},{"../isNode":276,dup:105}],275:[function(d,g,f){arguments[4][108][0].apply(f,arguments)
},{"./ELEMENT_NODE":273,"./internal/isNodeType":274,dup:108}],276:[function(d,g,f){arguments[4][109][0].apply(f,arguments)
},{dup:109}],277:[function(k,j,g){var i=/^\[object (HTMLCollection|NodeList|Object)\]$/;
j.exports=function h(a){if(!a){return false}if(typeof a.length!=="number"){return false
}if(typeof a[0]==="object"&&(!a[0]||!a[0].nodeType)){return false}return i.test(Object.prototype.toString.call(a))
}},{}],278:[function(d,g,f){arguments[4][127][0].apply(f,arguments)},{"./extend":279,"@marcom/ac-polyfills/Array/isArray":286,dup:127}],279:[function(d,g,f){arguments[4][129][0].apply(f,arguments)
},{"@marcom/ac-polyfills/Array/prototype.forEach":287,dup:129}],280:[function(g,k,h){var i=g("./ac-element-tracker/ElementTracker");
var j=g("./ac-element-tracker/TrackedElement");k.exports=new i();k.exports.ElementTracker=i;
k.exports.TrackedElement=j},{"./ac-element-tracker/ElementTracker":281,"./ac-element-tracker/TrackedElement":282}],281:[function(r,s,o){var l={isNodeList:r("@marcom/ac-dom-nodes/isNodeList"),isElement:r("@marcom/ac-dom-nodes/isElement")};
var u={getDimensions:r("@marcom/ac-dom-metrics/getDimensions"),getPagePosition:r("@marcom/ac-dom-metrics/getPagePosition"),getScrollY:r("@marcom/ac-dom-metrics/getScrollY")};
var q={clone:r("@marcom/ac-object/clone"),extend:r("@marcom/ac-object/extend")};
var m=r("./TrackedElement");var p={autoStart:false,useRenderedPosition:false};function t(a,b){this.options=q.clone(p);
this.options=typeof b==="object"?q.extend(this.options,b):this.options;this._scrollY=this._getScrollY();
this._windowHeight=this._getWindowHeight();this.tracking=false;this.elements=[];
if(a&&(Array.isArray(a)||l.isNodeList(a)||l.isElement(a))){this.addElements(a)}this.refreshAllElementStates=this.refreshAllElementStates.bind(this);
this.refreshAllElementMetrics=this.refreshAllElementMetrics.bind(this);if(this.options.autoStart){this.start()
}}var n=t.prototype;n.destroy=function(){var a,b;this.stop();for(a=0,b=this.elements.length;
a<b;a++){this.elements[a].destroy()}this.elements=null;this.options=null};n._registerTrackedElements=function(b){var a=[].concat(b);
a.forEach(function(c){if(this._elementInDOM(c.element)){c.offsetTop=c.element.offsetTop;
this.elements.push(c)}},this)};n._elementInDOM=function(c){var a=false;var b=document.getElementsByTagName("body")[0];
if(l.isElement(c)&&b.contains(c)){a=true}return a};n._elementPercentInView=function(a){return a.pixelsInView/a.height
};n._elementPixelsInView=function(a){var b=a.top-this._scrollY;var c=a.bottom-this._scrollY;
if(b>this._windowHeight||c<0){return 0}return Math.min(c,this._windowHeight)-Math.max(b,0)
};n._ifInView=function(b,a){if(!a){b.trigger("enterview",b)}};n._ifAlreadyInView=function(a){if(!a.inView){a.trigger("exitview",a)
}};n.addElements=function(c,d){if(typeof d==="undefined"){d=this.options.useRenderedPosition
}c=l.isNodeList(c)?Array.prototype.slice.call(c):[].concat(c);for(var a=0,b=c.length;
a<b;a++){this.addElement(c[a],d)}};n.addElement=function(a,c){var b=null;if(typeof c==="undefined"){c=this.options.useRenderedPosition
}if(l.isElement(a)){b=new m(a,c);this._registerTrackedElements(b);this.refreshElementMetrics(b);
this.refreshElementState(b)}else{throw new TypeError("ElementTracker: "+a+" is not a valid DOM element")
}return b};n.removeElement=function(c){var a=[];var b;this.elements.forEach(function(d,f){if(d===c||d.element===c){a.push(f)
}});b=this.elements.filter(function(d,f){return a.indexOf(f)<0});this.elements=b
};n.start=function(){if(this.tracking===false){this.tracking=true;window.addEventListener("resize",this.refreshAllElementMetrics);
window.addEventListener("orientationchange",this.refreshAllElementMetrics);window.addEventListener("scroll",this.refreshAllElementStates);
this.refreshAllElementMetrics()}};n.stop=function(){if(this.tracking===true){this.tracking=false;
window.removeEventListener("resize",this.refreshAllElementMetrics);window.removeEventListener("orientationchange",this.refreshAllElementMetrics);
window.removeEventListener("scroll",this.refreshAllElementStates)}};n.refreshAllElementMetrics=function(b,a){if(typeof b!=="number"){b=this._getScrollY()
}if(typeof a!=="number"){a=this._getWindowHeight()}this._scrollY=b;this._windowHeight=a;
this.elements.forEach(this.refreshElementMetrics,this)};n.refreshElementMetrics=function(a){if(!a.isActive){return a
}var c=u.getDimensions(a.element,a.useRenderedPosition);var b=u.getPagePosition(a.element,a.useRenderedPosition);
a=q.extend(a,c,b);return this.refreshElementState(a)};n.refreshAllElementStates=function(a){if(typeof a!=="number"){a=this._getScrollY()
}this._scrollY=a;this.elements.forEach(this.refreshElementState,this)};n.refreshElementState=function(b){if(!b.isActive){return b
}var a=b.inView;b.pixelsInView=this._elementPixelsInView(b);b.percentInView=this._elementPercentInView(b);
b.inView=b.pixelsInView>0;if(b.inView){this._ifInView(b,a)}if(a){this._ifAlreadyInView(b)
}return b};n.pauseElementTracking=function(a){if(a){a.isActive=false}};n.resumeElementTracking=function(a){if(a){a.isActive=true
}};n._getWindowHeight=function(){return window.innerHeight};n._getScrollY=function(){return u.getScrollY()
};s.exports=t},{"./TrackedElement":282,"@marcom/ac-dom-metrics/getDimensions":265,"@marcom/ac-dom-metrics/getPagePosition":266,"@marcom/ac-dom-metrics/getScrollY":268,"@marcom/ac-dom-nodes/isElement":275,"@marcom/ac-dom-nodes/isNodeList":277,"@marcom/ac-object/clone":278,"@marcom/ac-object/extend":279}],282:[function(q,p,j){var k={isElement:q("@marcom/ac-dom-nodes/isElement")};
var n=q("@marcom/ac-event-emitter-micro").EventEmitterMicro;var l=n.prototype;function m(b,a){if(!k.isElement(b)){throw new TypeError("TrackedElement: "+b+" is not a valid DOM element")
}n.call(this);this.element=b;this.inView=false;this.isActive=true;this.percentInView=0;
this.pixelsInView=0;this.offsetTop=0;this.top=0;this.right=0;this.bottom=0;this.left=0;
this.width=0;this.height=0;this.useRenderedPosition=a||false}var o=m.prototype=Object.create(l);
o.destroy=function(){this.element=null;l.destroy.call(this)};p.exports=m},{"@marcom/ac-dom-nodes/isElement":275,"@marcom/ac-event-emitter-micro":283}],283:[function(d,g,f){arguments[4][120][0].apply(f,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":284,dup:120}],284:[function(d,g,f){arguments[4][121][0].apply(f,arguments)
},{dup:121}],285:[function(d,g,f){(function(l){if(!l.console){l.console={}}var o=l.console;
var a,b;var c=function(){};var m=["memory"];var n=("assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn").split(",");
while(a=m.pop()){if(!o[a]){o[a]={}}}while(b=n.pop()){if(typeof o[b]!=="function"){o[b]=c
}}})(typeof window==="undefined"?this:window)},{}],286:[function(d,g,f){arguments[4][138][0].apply(f,arguments)
},{dup:138}],287:[function(d,g,f){arguments[4][141][0].apply(f,arguments)},{dup:141}],288:[function(i,h,g){if(!Date.now){Date.now=function f(){return new Date().getTime()
}}},{}],289:[function(f,i,g){if(!Object.create){var h=function(){};Object.create=function(a){if(arguments.length>1){throw new Error("Second argument not supported")
}if(a===null||typeof a!=="object"){throw new TypeError("Object prototype may only be an Object.")
}h.prototype=a;return new h()}}},{}],290:[function(d,g,f){d("console-polyfill")
},{"console-polyfill":285}],291:[function(d,g,f){
/*! MIT License
 *
 * performance.now polyfill
 * copyright Paul Irish 2015
 *
 */
d("../Date/now");
(function(){if("performance" in window==false){window.performance={}}if("now" in window.performance==false){var a=Date.now();
if(performance.timing&&performance.timing.navigationStart){a=performance.timing.navigationStart
}window.performance.now=function b(){return Date.now()-a}}})()},{"../Date/now":288}],292:[function(d,g,f){g.exports={SharedInstance:d("./ac-shared-instance/SharedInstance")}
},{"./ac-shared-instance/SharedInstance":293}],293:[function(p,m,q){var l=window,n="AC",k="SharedInstance",o=l[n];
var j=(function(){var a={};return{get:function(c,d){var b=null;if(a[c]&&a[c][d]){b=a[c][d]
}return b},set:function(b,d,c){if(!a[b]){a[b]={}}if(typeof c==="function"){a[b][d]=new c()
}else{a[b][d]=c}return a[b][d]},share:function(b,d,c){var f=this.get(b,d);if(!f){f=this.set(b,d,c)
}return f},remove:function(c,d){var b=typeof d;if(b==="string"||b==="number"){if(!a[c]||!a[c][d]){return
}a[c][d]=null;return}if(a[c]){a[c]=null}}}}());if(!o){o=l[n]={}}if(!o[k]){o[k]=j
}m.exports=o[k]},{}],294:[function(o,m,i){var j=o("@marcom/ac-shared-instance").SharedInstance;
var l="ac-raf-emitter-id-generator:sharedRAFEmitterIDGeneratorInstance",n="1.0.3";
var k=function(){this._currentID=0};k.prototype.getNewID=function(){this._currentID++;
return"raf:"+this._currentID};m.exports=j.share(l,n,k)},{"@marcom/ac-shared-instance":292}],295:[function(d,g,f){arguments[4][292][0].apply(f,arguments)
},{"./ac-shared-instance/SharedInstance":296,dup:292}],296:[function(d,g,f){arguments[4][293][0].apply(f,arguments)
},{dup:293}],297:[function(g,j,h){g("@marcom/ac-polyfills/performance/now");var i;
function k(a){a=a||{};this._reset();this._willRun=false;this._totalSubscribeCount=-1;
this._requestAnimationFrame=window.requestAnimationFrame;this._cancelAnimationFrame=window.cancelAnimationFrame;
this._boundOnAnimationFrame=this._onAnimationFrame.bind(this);this._boundOnExternalAnimationFrame=this._onExternalAnimationFrame.bind(this)
}i=k.prototype;i.subscribe=function(b,a){this._totalSubscribeCount++;if(!this._nextFrameSubscribers[b.id]){if(a){this._nextFrameSubscribersOrder.unshift(b.id)
}else{this._nextFrameSubscribersOrder.push(b.id)}this._nextFrameSubscribers[b.id]=b;
this._nextFrameSubscriberArrayLength++;this._nextFrameSubscriberCount++;this._run()
}return this._totalSubscribeCount};i.unsubscribe=function(a){if(!this._nextFrameSubscribers[a.id]){return false
}this._nextFrameSubscribers[a.id]=null;this._nextFrameSubscriberCount--;if(this._nextFrameSubscriberCount===0){this._cancel()
}return true};i.trigger=function(a,b){var c;for(c=0;c<this._subscriberArrayLength;
c++){if(this._subscribers[this._subscribersOrder[c]]!==null&&this._subscribers[this._subscribersOrder[c]]._didDestroy===false){this._subscribers[this._subscribersOrder[c]].trigger(a,b)
}}};i.destroy=function(){var a=this._cancel();this._subscribers=null;this._subscribersOrder=null;
this._nextFrameSubscribers=null;this._nextFrameSubscribersOrder=null;this._rafData=null;
this._boundOnAnimationFrame=null;this._onExternalAnimationFrame=null;return a};
i.useExternalAnimationFrame=function(b){if(typeof b!=="boolean"){return}var a=this._isUsingExternalAnimationFrame;
if(b&&this._animationFrame){this._cancelAnimationFrame.call(window,this._animationFrame);
this._animationFrame=null}if(this._willRun&&!b&&!this._animationFrame){this._animationFrame=this._requestAnimationFrame.call(window,this._boundOnAnimationFrame)
}this._isUsingExternalAnimationFrame=b;if(b){return this._boundOnExternalAnimationFrame
}return a||false};i._run=function(){if(!this._willRun){this._willRun=true;if(this.lastFrameTime===0){this.lastFrameTime=performance.now()
}this._animationFrameActive=true;if(!this._isUsingExternalAnimationFrame){this._animationFrame=this._requestAnimationFrame.call(window,this._boundOnAnimationFrame)
}return true}};i._cancel=function(){var a=false;if(this._animationFrameActive){if(this._animationFrame){this._cancelAnimationFrame.call(window,this._animationFrame);
this._animationFrame=null}this._animationFrameActive=false;this._willRun=false;
a=true}if(!this._isRunning){this._reset()}return a};i._onSubscribersAnimationFrameStart=function(a){var b;
for(b=0;b<this._subscriberArrayLength;b++){if(this._subscribers[this._subscribersOrder[b]]!==null&&this._subscribers[this._subscribersOrder[b]]._didDestroy===false){this._subscribers[this._subscribersOrder[b]]._onAnimationFrameStart(a)
}}};i._onSubscribersAnimationFrameEnd=function(a){var b;for(b=0;b<this._subscriberArrayLength;
b++){if(this._subscribers[this._subscribersOrder[b]]!==null&&this._subscribers[this._subscribersOrder[b]]._didDestroy===false){this._subscribers[this._subscribersOrder[b]]._onAnimationFrameEnd(a)
}}};i._onAnimationFrame=function(a){this._subscribers=this._nextFrameSubscribers;
this._subscribersOrder=this._nextFrameSubscribersOrder;this._subscriberArrayLength=this._nextFrameSubscriberArrayLength;
this._subscriberCount=this._nextFrameSubscriberCount;this._nextFrameSubscribers={};
this._nextFrameSubscribersOrder=[];this._nextFrameSubscriberArrayLength=0;this._nextFrameSubscriberCount=0;
this._isRunning=true;this._willRun=false;this._didRequestNextRAF=false;this._rafData.delta=a-this.lastFrameTime;
this.lastFrameTime=a;this._rafData.fps=0;if(this._rafData.delta>=1000){this._rafData.delta=0
}if(this._rafData.delta!==0){this._rafData.fps=1000/this._rafData.delta}this._rafData.time=a;
this._rafData.naturalFps=this._rafData.fps;this._rafData.timeNow=Date.now();this._onSubscribersAnimationFrameStart(this._rafData);
this.trigger("update",this._rafData);this.trigger("external",this._rafData);this.trigger("draw",this._rafData);
this._onSubscribersAnimationFrameEnd(this._rafData);if(!this._willRun){this._reset()
}};i._onExternalAnimationFrame=function(a){if(!this._isUsingExternalAnimationFrame){return
}this._onAnimationFrame(a)};i._reset=function(){this._rafData={time:0,delta:0,fps:0,naturalFps:0,timeNow:0};
this._subscribers={};this._subscribersOrder=[];this._subscriberArrayLength=0;this._subscriberCount=0;
this._nextFrameSubscribers={};this._nextFrameSubscribersOrder=[];this._nextFrameSubscriberArrayLength=0;
this._nextFrameSubscriberCount=0;this._didEmitFrameData=false;this._animationFrame=null;
this._animationFrameActive=false;this._isRunning=false;this._shouldReset=false;
this.lastFrameTime=0};j.exports=k},{"@marcom/ac-polyfills/performance/now":291}],298:[function(o,l,i){var j=o("@marcom/ac-shared-instance").SharedInstance;
var k="ac-raf-executor:sharedRAFExecutorInstance",m="2.0.1";var n=o("./RAFExecutor");
l.exports=j.share(k,m,n)},{"./RAFExecutor":297,"@marcom/ac-shared-instance":295}],299:[function(o,n,p){var l;
var m=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;var q=o("@marcom/ac-raf-executor/sharedRAFExecutorInstance");
var j=o("@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance");
function k(a){a=a||{};m.call(this);this.id=j.getNewID();this.executor=a.executor||q;
this._reset();this._willRun=false;this._didDestroy=false}l=k.prototype=Object.create(m.prototype);
l.run=function(){if(!this._willRun){this._willRun=true}return this._subscribe()
};l.cancel=function(){this._unsubscribe();if(this._willRun){this._willRun=false
}this._reset()};l.destroy=function(){var a=this.willRun();this.cancel();this.executor=null;
m.prototype.destroy.call(this);this._didDestroy=true;return a};l.willRun=function(){return this._willRun
};l.isRunning=function(){return this._isRunning};l._subscribe=function(){return this.executor.subscribe(this)
};l._unsubscribe=function(){return this.executor.unsubscribe(this)};l._onAnimationFrameStart=function(a){this._isRunning=true;
this._willRun=false;if(!this._didEmitFrameData){this._didEmitFrameData=true;this.trigger("start",a)
}};l._onAnimationFrameEnd=function(a){if(!this._willRun){this.trigger("stop",a);
this._reset()}};l._reset=function(){this._didEmitFrameData=false;this._isRunning=false
};n.exports=k},{"@marcom/ac-event-emitter-micro":283,"@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance":294,"@marcom/ac-raf-executor/sharedRAFExecutorInstance":298}],300:[function(p,o,q){p("@marcom/ac-polyfills/Object/create");
var k=p("@marcom/ac-raf-emitter/RAFEmitter");var m=p("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var l=m.prototype;function j(h,f,d,a,c,g,b){if(arguments.length!==7){throw new Error("Incorrect number of arguments passed to BaseComponent check the constructor or BaseComponent.call method - argument's should be (section, componentElement, componentName, currentBreakpoint, scrollPosition, windowHeight, index)")
}m.call(this);this.section=h;this.element=f;this.componentName=d;this.index=b;this.isEnabled=true
}var n=j.prototype=Object.create(m.prototype);j.prototype.constructor=j;n.destroy=function(){this.teardownEvents();
this.teardownRAFEmitter();this.section=null;l.destroy.call(this)};n.setupEvents=function(){};
n.teardownEvents=function(){};n.setupRAFEmitter=function(){if(this._rafEmitter){return
}this._rafEmitter=new k();this.onDOMRead=this.onDOMRead.bind(this);this.onDOMWrite=this.onDOMWrite.bind(this);
this._rafEmitter.on("update",this.onDOMRead);this._rafEmitter.on("draw",this.onDOMWrite)
};n.teardownRAFEmitter=function(){if(!this._rafEmitter){return}this._rafEmitter.destroy();
this._rafEmitter=null};n.parsePropsFromDataAttribute=function(d,g,b){b=b||this.element;
g=g||{};d="data-"+d;var f=b.getAttribute(d)||"{}";var i=null;try{i=JSON.parse(f)
}catch(h){throw new Error(this.componentName+"::parsePropsFromDataAttribute bad JSON in `"+d+"`",h)
}var a={};for(var c in g){a[c]=i[c];if(!i.hasOwnProperty(c)){if(g[c]===null){throw new Error(this.componentName+"::parsePropsFromDataAttribute `"+c+"` is required in `"+d+"`")
}else{a[c]=g[c]}}}return a};n.onSectionWillAppearWithPadding=function(b,a){};n.onSectionWillAppear=function(b,a){};
n.activate=function(){};n.animateIn=function(){};n.requestDOMChange=function(){if(!this.isEnabled||!this.section.isVisible){return false
}if(!this._rafEmitter){this.setupRAFEmitter()}return this._rafEmitter.run()};n.onDOMRead=function(a){};
n.onDOMWrite=function(a){};n.deactivate=function(){};n.onScroll=function(b,c,a){};
n.onSectionWillDisappearWithPadding=function(b,a){};n.onSectionWillDisappear=function(b,a){};
n.onResizeDebounced=function(b,c,a){};n.onResizeImmediate=function(b,c,a){};n.onOrientationChange=function(b,c,d,a){};
n.onBreakpoint=function(c,a,d,b){};n.onRetinaChange=function(a,c,d,b){};o.exports=j
},{"@marcom/ac-event-emitter-micro":283,"@marcom/ac-polyfills/Object/create":289,"@marcom/ac-raf-emitter/RAFEmitter":299}],301:[function(s,u,p){s("@marcom/ac-polyfills/console.log");
var v=s("@marcom/ac-element-tracker").ElementTracker;var m=s("@marcom/ac-viewport-emitter");
if(!m.viewport){console.log("Jetpack Error: Required module `ac-viewport-emitter` not initialized properly (missing required css styles). Please see `ac-viewport-emitter` documentation.\n\tBreakpoint will always be 'large' and no `onBreakPoint` events will be fired");
m=s("../utils/ViewportEmitterStub")()}var n=s("../utils/Page");var w=s("../model/SectionMap");
var q=s("../model/DataAttributes");var t=s("../model/EnabledFeatures");function r(a){t.init();
n.setPage(this);this.name=this.name||"[NOT SET]";this._mainEl=document.querySelector("main,.main");
this._sections=[];this._visibleSections=[];this._visibleSectionsWithPadding=[];
this._elementTracker=new v(null,{autoStart:true});this._currentSection=null;this._sectionUnderLocalNav=null;
this._currentBreakpoint=m.viewport;this.isRetina=m.retina;this._cachedScrollY=this._getScrollY(true);
this._cachedWindowHeight=this.getWindowHeight(true);this._resizeTimeout=-1;this._resizeTimeoutDelay=this._resizeTimeoutDelay||250;
this.setupSections();this.setupEvents();this._updateSectionVisibility()}var o=r.prototype;
o.destroy=function(){for(var b=0,a=this._sections.length;b<a;b++){this._sections[b].destroy()
}this.teardownEvents();this._elementTracker.destroy();this._elementTracker=null;
this._sections=null;this._currentSection=null;this._sectionUnderLocalNav=null;this._visibleSections=null;
this._mainEl=null;n.removePage(this)};o.setupEvents=function(){this._onScroll=this._onScroll.bind(this);
this._onBreakpoint=this._onBreakpoint.bind(this);this._onRetinaChange=this._onRetinaChange.bind(this);
this._onPageDidAppear=this._onPageDidAppear.bind(this);this._onResizeImmediate=this._onResizeImmediate.bind(this);
this._onOrientationChange=this._onOrientationChange.bind(this);this._onPageWillDisappear=this._onPageWillDisappear.bind(this);
this.performDeepMetricsRefresh=this.performDeepMetricsRefresh.bind(this);window.addEventListener("scroll",this._onScroll);
window.addEventListener("resize",this._onResizeImmediate);window.addEventListener("orientationchange",this._onOrientationChange);
m.on("change",this._onBreakpoint);m.on("retinachange",this._onRetinaChange);n.on(n.DEEP_REFRESH_ALL_METRICS,this.performDeepMetricsRefresh)
};o.teardownEvents=function(){window.removeEventListener("scroll",this._onScroll);
window.removeEventListener("resize",this._onResizeImmediate);window.removeEventListener("orientationchange",this._onOrientationChange);
m.off("change",this._onBreakpoint);m.off("retinachange",this._onRetinaChange);n.off(n.DEEP_REFRESH_ALL_METRICS,this.performDeepMetricsRefresh);
this._elementTracker.stop();clearTimeout(this._resizeTimeout)};o.setupSections=function(){var d=this._mainEl.querySelectorAll("section,.section,[data-section-type]");
for(var b=0,a=d.length;b<a;b++){if(d[b].parentElement!==this._mainEl){console.warn("BasePage::addSection - Jetpack does not support nested BaseSections, consider using a component instead.",d[b]);
continue}var c=d[b];this._addSectionImp(c)}};o.addSection=function(a){var b=this.getBaseSectionForElement(a);
if(b){return b}b=this._addSectionImp(a);this._updateSectionVisibility();return b
};o.removeSection=function(a){var b=(a instanceof w.BaseSection);var c=b?a:this.getBaseSectionForElement(a);
if(c){this._sections.splice(this._sections.indexOf(c),1)}this._updateSectionVisibility();
return c};o._addSectionImp=function(d){if(d.parentNode!==this._mainEl&&this._isNestedSection(d)){console.warn("BasePage::addSection - Jetpack does not support nested BaseSections, consider using a component instead.",d);
return null}var f=this._elementTracker.addElement(d);this._elementTracker.refreshElementState(f);
var c=(d.hasAttribute(q.SECTION_TYPE))?d.getAttribute(q.SECTION_TYPE):"BaseSection";
if(c===""){c="BaseSection"}if(!w.hasOwnProperty(c)){throw"BasePage::setupSections parsing '#"+d.id+" ."+d.className+"' no section type '"+c+"'found!"
}var a=w[c];var b=new a(d,f,this._getCurrentBreakpoint(),this._getScrollY(),this.getWindowHeight(),this._sections.length);
b.setupEvents();this._sections.push(b);return b};o.getWindowHeight=function(a){if(a){this._cachedWindowHeight=window.innerHeight
}return this._cachedWindowHeight};o._activateSection=function(a){if(this._currentSection===a){return
}if(this._currentSection){this._currentSection.deactivate()}this._currentSection=a;
this._currentSection.activate()};o._updateSectionVisibility=function(){var h=this._getScrollY();
var j=this.getWindowHeight();var c=n.getViewportPadding();var a=[];var H=this._sections[0];
var f=[];var l=0;var E=[];var b=h-c;var g=h+j+c;for(var I=0,F=this._sections.length;
I<F;I++){var d=this._sections[I];var k=d.trackedElement;var D=k.pixelsInView;if(d.isFixedHero){D=j-h
}if(D>l){H=d;l=D}if(D>0.000001){a.push(d);f.push(d);E.push(d)}else{if(g>k.top&&b<k.bottom){a.push(d);
E.push(d)}}}var i={};var G={};for(I=0,F=Math.max(this._visibleSections.length,a.length);
I<F;I++){if(this._visibleSectionsWithPadding[I]){if(typeof i[I]==="undefined"){i[I]=E.indexOf(this._visibleSectionsWithPadding[I])===-1
}if(i[I]){this._visibleSectionsWithPadding[I].onSectionWillDisappearWithPadding(h,j)
}}if(this._visibleSections[I]&&f.indexOf(this._visibleSections[I])===-1){this._visibleSections[I].onSectionWillDisappear(h,j)
}if(E[I]){if(typeof G[I]==="undefined"){G[I]=this._visibleSectionsWithPadding.indexOf(E[I])===-1
}if(G[I]){E[I].onSectionWillAppearWithPadding(h,j)}}if(f[I]&&this._visibleSections.indexOf(f[I])===-1){f[I].onSectionWillAppear(h,j)
}}this._visibleSections=f;this._visibleSectionsWithPadding=E;this._activateSection(H)
};o._onPageDidAppear=function(a){};o._onPageWillDisappear=function(a){this.destroy()
};o._onBreakpoint=function(c){var h=c.to;var f=c.from;this._currentBreakpoint=h;
var g=this._getScrollY();var b=this.getWindowHeight();this._elementTracker.refreshAllElementMetrics(g,b);
for(var d=0,a=this._sections.length;d<a;d++){this._sections[d].onBreakpoint(h,f,g,b)
}this.performDeepMetricsRefresh()};o._onRetinaChange=function(c){var g=this._getScrollY(true);
var b=this.getWindowHeight(true);this.isRetina=m.retina;var d=this._currentBreakpoint;
this._elementTracker.refreshAllElementMetrics(g,b);for(var f=0,a=this._sections.length;
f<a;f++){this._sections[f].onRetinaChange(this.isRetina,d,g,b)}};o._onScroll=function(c){var f=this._getScrollY(true);
var b=this.getWindowHeight();this._updateSectionVisibility();for(var d=0,a=this._visibleSections.length;
d<a;d++){this._visibleSections[d].onScroll(c,f,b)}};o._onResizeDebounced=function(c){var g=this._getScrollY();
var b=this.getWindowHeight();var d=false;for(var f=0,a=this._sections.length;f<a;
f++){if(!d&&this._sections[f]["onResize"]){console.warn("Jetpack: onResize has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
d=true}this._sections[f].onResizeDebounced(c,g,b)}this._updateSectionVisibility()
};o.performDeepMetricsRefresh=function(){var d=this._getScrollY();var b=this.getWindowHeight();
this._elementTracker.refreshAllElementMetrics(d,b);for(var c=0,a=this._sections.length;
c<a;c++){this._sections[c].elementEngagement.refreshAllElementMetrics(d,b);this._sections[c].updateScrollToPosition()
}this._updateSectionVisibility()};o._onOrientationChange=function(c){var f=this._getScrollY(true);
var b=this.getWindowHeight(true);var g=c.orientation;for(var d=0,a=this._sections.length;
d<a;d++){this._sections[d].onOrientationChange(c,g,f,b)}};o._onResizeImmediate=function(c){var g=this._getScrollY();
var b=this.getWindowHeight(true);var d=false;for(var f=0,a=this._sections.length;
f<a;f++){if(!d&&this._sections[f]["onResizeWillBeCalledAfterDelay"]){console.warn("Jetpack: onResizeWillBeCalledAfterDelay has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
d=true}this._sections[f].onResizeImmediate(c,g,b)}window.clearTimeout(this._resizeTimeout);
this._resizeTimeout=window.setTimeout(this._onResizeDebounced.bind(this,c),this._resizeTimeoutDelay)
};o._getScrollY=function(a){if(a){this._cachedScrollY=window.pageYOffset||(document.documentElement||document.body).scrollTop
}return this._cachedScrollY};o._getVisibleBottomOfPage=function(){return this._getScrollY()+this.getWindowHeight()
};o._getCurrentBreakpoint=function(){return this._currentBreakpoint};o._isNestedSection=function(c){var b=c;
var a=this._sections.length;while(b=b.parentElement){for(var d=0;d<a;d++){if(this._sections[d].element===b){return true
}}}return false};o.getBaseSectionForElement=function(b){for(var c=0,a=this._sections.length;
c<a;c++){if(this._sections[c].element===b){return this._sections[c]}}return null
};u.exports=r},{"../model/DataAttributes":304,"../model/EnabledFeatures":305,"../model/SectionMap":306,"../utils/Page":307,"../utils/ViewportEmitterStub":308,"@marcom/ac-element-tracker":280,"@marcom/ac-polyfills/console.log":290,"@marcom/ac-viewport-emitter":674}],302:[function(y,z,v){y("@marcom/ac-polyfills/Object/create");
y("@marcom/ac-polyfills/console.log");var o={};var r={getPagePosition:y("@marcom/ac-dom-metrics/getPagePosition")};
var A=y("@marcom/ac-element-engagement").ElementEngagement;var w=y("./../model/DataAttributes");
var u=y("./../model/ComponentMap");var x=y("./BaseComponent");var q=y("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var p=q.prototype;function s(b,c,d,g,a,f){if(arguments.length!==6){throw new Error("Incorrect number of arguments passed to BaseSection")
}q.call(this);this.element=b;this.trackedElement=c;this.elementEngagement=new A(null,{autoStart:false});
this.index=f;this.isVisible=this.trackedElement.pixelsInView>0;this.isVisibleWithPadding=false;
this.hasAnimatedIn=false;this.isActive=false;this.isFixedHero=false;this.cachedBreakpoint=d;
this.cachedScrollPosition=g;this.cachedWindowHeight=a;this.name=this.name||this.element.className;
this.scrollToPosition=0;this.updateScrollToPosition();this._components=[];this.setupComponents(d,g,a);
this.setIsFixedHero();this.performDeprecatedMethodCheck()}var t=s.prototype=Object.create(q.prototype);
s.prototype.constructor=s;t.performDeprecatedMethodCheck=function(){if(this["onViewWillAppear"]){throw new Error("Section.onViewWillAppear is now `onSectionWillAppear`, please update your BaseSection subclass")
}if(this["onViewWillDisappear"]){throw new Error("Section.onViewWillDisappear is now `onSectionWillDisappear`, please update your BaseSection subclass")
}return true};t.destroy=function(){this.teardownEvents();this.elementEngagement.stop();
this.elementEngagement=null;for(var a=0,b=this._components.length;a<b;a++){this._components[a].destroy()
}this._components=null;this.trackedElement=null;this.element=null;p.destroy.call(this)
};t.setupEvents=function(){for(var a=0,b=this._components.length;a<b;a++){this._components[a].setupEvents()
}};t.teardownEvents=function(){for(var a=0,b=this._components.length;a<b;a++){this._components[a].teardownEvents()
}};t.setupComponents=function(){var c=Array.prototype.slice.call(this.element.querySelectorAll("["+w.COMPONENT_LIST+"]"));
if(this.element.hasAttribute(w.COMPONENT_LIST)){c.push(this.element)}for(var f=0;
f<c.length;f++){var a=c[f];var b=a.getAttribute(w.COMPONENT_LIST);if(b.indexOf("|")!==-1){throw"BaseSection::setupComponents component list should be space delimited, pipe character is no longer supported. Error at: '"+b+"'"
}var d=b.split(" ");for(var g=0,i=d.length;g<i;g++){var h=d[g];if(h===""||h===" "){continue
}this.addComponentOfType(h,a)}setTimeout(this.elementEngagement.refreshAllElementStates.bind(this.elementEngagement),100)
}};t.addComponentOfType=function(c,a){if(!u.hasOwnProperty(c)){throw"BaseSection::setupComponents parsing '#"+a.id+" ."+a.className+"' no component type '"+c+"'found!"
}var b=u[c];if(!this.componentIsSupported(b,c)&&o[c]===undefined){console.log("BaseSection::setupComponents unsupported component '"+c+"'. Reason: '"+c+".IS_SUPPORTED' returned false");
o[c]=true;return}var d=new b(this,a,c,this.cachedBreakpoint,this.cachedScrollPosition,this.cachedWindowHeight,this._components.length);
this._components.push(d);return d};t.removeComponentOfType=function(b){var a=this.getComponentOfType(b);
if(a===null){return}this.removeComponent(a)};t.removeComponent=function(a){var b=this._components.indexOf(a);
if(b===-1){return}this._components.splice(b,1);a.destroy()};t.activate=function(){for(var a=0,b=this._components.length;
a<b;a++){if(!this._components[a].isEnabled){continue}this._components[a].activate()
}this.isActive=true;if(!this.hasAnimatedIn){this.animateIn();this.hasAnimatedIn=true
}};t.deactivate=function(){this.isActive=false;for(var a=0,b=this._components.length;
a<b;a++){if(!this._components[a].isEnabled){continue}this._components[a].deactivate()
}};t.animateIn=function(){for(var a=0,b=this._components.length;a<b;a++){if(!this._components[a].isEnabled){continue
}this._components[a].animateIn()}};t.onResizeImmediate=function(b,f,a){this.cachedScrollPosition=f;
this.cachedWindowHeight=a;var c=false;for(var d=0,g=this._components.length;d<g;
d++){if(!this._components[d].isEnabled){continue}if(!c&&this._components[d]["onResizeWillBeCalledAfterDelay"]){console.warn("Jetpack: onResizeWillBeCalledAfterDelay has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
c=true}this._components[d].onResizeImmediate(b,f,a)}};t.onResizeDebounced=function(b,f,a){this.updateScrollToPosition();
var c=false;for(var d=0,g=this._components.length;d<g;d++){if(!this._components[d].isEnabled){continue
}if(!c&&this._components[d]["onResize"]){console.warn("Jetpack: onResize has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
c=true}this._components[d].onResizeDebounced(b,f,a)}this.elementEngagement.refreshAllElementMetrics(f,a)
};t.onBreakpoint=function(d,a,f,b){this.cachedBreakpoint=d;for(var c=0,g=this._components.length;
c<g;c++){if(!this._components[c].isEnabled){continue}this._components[c].onBreakpoint(d,a,f,b)
}};t.onRetinaChange=function(a,c,f,b){for(var d=0,g=this._components.length;d<g;
d++){if(!this._components[d].isEnabled){continue}this._components[d].onRetinaChange(a,c,f,b)
}this.elementEngagement.refreshAllElementMetrics(f,b)};t.onOrientationChange=function(b,d,f,a){this.cachedScrollPosition=f;
this.cachedWindowHeight=a;for(var c=0,g=this._components.length;c<g;c++){if(!this._components[c].isEnabled){continue
}this._components[c].onOrientationChange(b,d,f,a)}};t.onScroll=function(b,d,a){this.cachedScrollPosition=d;
this.elementEngagement.refreshAllElementStates(d);for(var c=0,f=this._components.length;
c<f;c++){if(!this._components[c].isEnabled){continue}this._components[c].onScroll(b,d,a)
}};t.onSectionWillAppearWithPadding=function(c,a){this.cachedScrollPosition=c;this.isVisibleWithPadding=true;
this.elementEngagement.refreshAllElementStates(c);for(var b=0,d=this._components.length;
b<d;b++){this._components[b].onSectionWillAppearWithPadding(c,a)}};t.onSectionWillAppear=function(c,a){this.cachedScrollPosition=c;
this.isVisible=true;this.elementEngagement.refreshAllElementStates(c);for(var b=0,d=this._components.length;
b<d;b++){this._components[b].onSectionWillAppear(c,a)}};t.onSectionWillDisappearWithPadding=function(c,a){this.cachedScrollPosition=c;
this.isVisibleWithPadding=false;for(var b=0,d=this._components.length;b<d;b++){this._components[b].onSectionWillDisappearWithPadding(c,a)
}};t.onSectionWillDisappear=function(c,a){this.cachedScrollPosition=c;this.isVisible=false;
for(var b=0,d=this._components.length;b<d;b++){this._components[b].onSectionWillDisappear(c,a)
}};t.getComponentOfType=function(b){if(!u.hasOwnProperty(b)){throw"BaseSection::getComponentOfType no component type '"+b+"' exist in ComponentMap!"
}for(var a=0,c=this._components.length;a<c;a++){if(this._components[a].componentName===b){return this._components[a]
}}return null};t.getAllComponentsOfType=function(c){if(!u.hasOwnProperty(c)){throw"BaseSection::getAllComponentsOfType no component type '"+c+"' exist in ComponentMap!"
}var a=[];for(var b=0,d=this._components.length;b<d;b++){if(this._components[b].componentName===c){a.push(this._components[b])
}}return a};t.updateScrollToPosition=function(){return this.scrollToPosition=r.getPagePosition(this.element).top
};t.setIsFixedHero=function(){if(this.index!==0){this.isFixedHero=false}else{var a=window.getComputedStyle(this.element);
this.isFixedHero=a.position==="fixed"}};s.prototype.componentIsSupported=function(a,c){var d=a.IS_SUPPORTED;
if(d===undefined){return true}if(typeof d!=="function"){console.error('BaseSection::setupComponents error in "'+c+'".IS_SUPPORTED - it should be a function which returns true/false');
return true}var b=a.IS_SUPPORTED();if(b===undefined){console.error('BaseSection::setupComponents error in "'+c+'".IS_SUPPORTED - it should be a function which returns true/false');
return true}return b};z.exports=s},{"./../model/ComponentMap":303,"./../model/DataAttributes":304,"./BaseComponent":300,"@marcom/ac-dom-metrics/getPagePosition":266,"@marcom/ac-element-engagement":271,"@marcom/ac-event-emitter-micro":283,"@marcom/ac-polyfills/Object/create":289,"@marcom/ac-polyfills/console.log":290}],303:[function(d,g,f){g.exports={BaseComponent:d("../core/BaseComponent")}
},{"../core/BaseComponent":300}],304:[function(d,g,f){g.exports={PAGE_TYPE:"data-page-type",SECTION_TYPE:"data-section-type",JUMP_SECTION_NAME:"data-page-jump-name",COMPONENT_LIST:"data-component-list"}
},{}],305:[function(i,h,f){var g={isDesktop:i("@marcom/ac-feature/isDesktop"),isRetina:i("@marcom/ac-feature/isRetina"),threeDTransformsAvailable:i("@marcom/ac-feature/threeDTransformsAvailable"),prefersReducedMotion:i("@marcom/ac-feature/prefersReducedMotion")};
h.exports={TOUCH:undefined,SVG:undefined,PAGE_JUMP:undefined,IS_DESKTOP:undefined,IS_RETINA:undefined,THREE_D_TRANSFORMS:undefined,REDUCED_MOTION:undefined,IS_AOW:undefined,init:function(){var a=document.getElementsByTagName("html")[0];
this.TOUCH=a.classList.contains("touch");this.SVG=a.classList.contains("svg");this.PAGE_JUMP=a.classList.contains("pageJump");
this.IS_DESKTOP=g.isDesktop();this.IS_RETINA=g.isRetina();this.THREE_D_TRANSFORMS=g.threeDTransformsAvailable();
this.REDUCED_MOTION=g.prefersReducedMotion();this.IS_AOW=a.classList.contains("aow")
},extend:function(b){if(!b.hasOwnProperty("init")||(typeof b.init!=="function")){throw new TypeError("The object extended Jetpack.model.EnabledFeatures must contain an init function")
}var a=this.init;var c=b.init;var d=Object.assign(this,b);d.init=function(){if(this.HAS_INITIALIZED){return
}this.HAS_INITIALIZED=true;a.call(d);c.call(d)};return d},HAS_INITIALIZED:false}
},{"@marcom/ac-feature/isDesktop":35,"@marcom/ac-feature/isRetina":37,"@marcom/ac-feature/prefersReducedMotion":42,"@marcom/ac-feature/threeDTransformsAvailable":45}],306:[function(d,g,f){g.exports={BaseSection:d("../core/BaseSection")}
},{"../core/BaseSection":302}],307:[function(h,l,i){var j=h("@marcom/ac-event-emitter-micro").EventEmitterMicro;
function m(){j.call(this);this._page=null;this.viewportPaddingRatio=1}var k=m.prototype=Object.create(j.prototype);
m.prototype.constructor=m;k.getPage=function(){return this._page};k.setPage=function(a){this._page=a
};k.removePage=function(a){if(a===this._page){this._page=null}};k.getViewportPadding=function(){return this.getPage().getWindowHeight()*this.viewportPaddingRatio
};k.deepRefreshAllElementMetrics=function(){this.trigger(m.prototype.DEEP_REFRESH_ALL_METRICS)
};k.onPageHeightSettled=function(a,f){var d=document.documentElement.scrollHeight;
var c=0;var f=f||30;window.requestAnimationFrame(function b(){var g=document.documentElement.scrollHeight;
if(d!==g){c=0}else{c++;if(c>=f){a();return}}d=g;window.requestAnimationFrame(b)
})};k.DEEP_REFRESH_ALL_METRICS="page.deep_refresh_all_metrics";l.exports=new m()
},{"@marcom/ac-event-emitter-micro":283}],308:[function(d,g,f){g.exports=function(){var a;
if(window.ViewportEmitterTestProxy){a=window.ViewportEmitterTestProxy}else{a={};
a.viewport="large";a.on=a.off=function(){}}return a}},{}],309:[function(g,i,h){var j=g("./ac-ajax/Ajax");
var k=g("./ac-ajax/Request");i.exports=new j();i.exports.Ajax=j;i.exports.Request=k
},{"./ac-ajax/Ajax":310,"./ac-ajax/Request":311}],310:[function(o,l,i){var m=o("./Request");
var k=o("./XDomain-request");var j=o("./URLParser");var n=function(){};n._Request=m;
n.prototype={_defaults:{method:"get",timeout:5000},_extend:function(){for(var a=1;
a<arguments.length;a++){for(var b in arguments[a]){if(arguments[a].hasOwnProperty(b)){arguments[0][b]=arguments[a][b]
}}}return arguments[0]},_getOptions:function(b,a){return this._extend({},this._defaults,a,b)
},_isCrossDomainRequest:function(a){var b=new j();var c=b.parse(window.location.href).origin;
var d=b.parse(a).origin;b.destroy();return(d!==c)},create:function(a){return new m(a)
},cors:function(a){var b=(window.XDomainRequest&&document.documentMode<10)?k:m;
return new b(a)},get:function(a){var b;a=this._getOptions({method:"get"},a);if(this._isCrossDomainRequest(a.url)){b=this.cors(a)
}else{b=this.create(a)}return b.send()},getJSON:function(a){return this.get(a).then(function(b){return JSON.parse(b.responseText)
})},head:function(a){a=this._getOptions({method:"head"},a);return this.create(a).send()
},isCrossDomainRequest:function(a){return this._isCrossDomainRequest(a)},post:function(a){a=this._getOptions({method:"post"},a);
return this.create(a).send()}};l.exports=n},{"./Request":311,"./URLParser":312,"./XDomain-request":313}],311:[function(f,h,g){var i=function(a){this._initialize(a)
};i.create=function(){var a=function(){};a.prototype=i.prototype;return new a()
};i.prototype={_addReadyStateChangeHandler:function(){this.xhr.onreadystatechange=function(a){if(this.xhr.readyState===4){clearTimeout(this._timeout);
if(this.xhr.status>=200&&this.xhr.status<300){this.resolve(this.xhr)}else{this.reject(this.xhr)
}}}.bind(this)},_getPromise:function(){this.promise=new Promise(function(a,b){this.resolve=a;
this.reject=b}.bind(this))},_getTransport:function(){return new XMLHttpRequest()
},_initialize:function(a){var b=this._validateConfiguration(a);if(b){throw b}this._configuration=a;
var c=this._configuration.method.toUpperCase();this.xhr=this._getTransport();this._getPromise();
this.xhr.open(c,this._configuration.url);this._setRequestHeaders(a.headers);this._addReadyStateChangeHandler()
},_sendXHR:function(){if(this.xhr){if(this._configuration&&this._configuration.data){this.xhr.send(this._configuration.data)
}else{this.xhr.send()}}},_setRequestHeaders:function(a){if(a){a.forEach(function(b){this.xhr.setRequestHeader(b.name,b.value)
},this)}},_setTimeout:function(a){if(!a){if(this._configuration&&this._configuration.timeout){a=this._configuration.timeout
}else{clearTimeout(this._timeout);this._timeout=null}}if(this._timeout!==null){clearTimeout(this._timeout)
}if(a>0){this._timeout=setTimeout(function(){this.xhr.abort();this.reject()}.bind(this),a)
}},_timeout:null,_validateConfiguration:function(a){if(!a){return"Must provide a configuration object"
}var b=[];var c=a.headers;if(!a.url){b.push("Must provide a url")}if(!a.method){b.push("Must provide a method")
}if(c){if(!Array.isArray(c)){return"Must provide an array of headers"}this._validateHeaders(c,b)
}return b.join(", ")},_validateHeaders:function(b,a){for(var c=0,d=b.length;c<d;
c++){if(!b[c].hasOwnProperty("name")||!b[c].hasOwnProperty("value")){a.push("Must provide a name and value key for all headers");
break}}},promise:null,reject:null,resolve:null,send:function(){this._setTimeout();
this._sendXHR();return this.promise},xhr:null};h.exports=i},{}],312:[function(k,j,g){var h=function(){this.parser=null
};var i=h.prototype;i.parse=function(b){var d;var a;var f;var m;var c;if(typeof b!=="string"){throw new TypeError(b+" must be a string")
}if(!this.parser){this.parser=document.createElement("a")}this._qualifyPath(b);
f=this.parser.hostname;a=this.parser.protocol;m=this._normalizePort(this.parser);
d=this.parser.origin||this._constructOriginString(this.parser,m);c=this.parser.search;
return{originalPath:b,qualifiedPath:this.parser.href,protocol:a,hostname:f,origin:d,port:m,search:c}
};i.destroy=function(){this.parser=null};i._constructOriginString=function(a,c){var b=c?":"+c:"";
return a.protocol+"//"+a.hostname+b};i._normalizePort=function(a){return(a.port==="80"||a.port==="443"||a.port==="0")?"":a.port
};i._qualifyPath=function(a){this.parser.href=a;this.parser.href=this.parser.href
};j.exports=h},{}],313:[function(g,j,h){var k=g("./Request");var i=function(a){k.apply(this,arguments)
};i.prototype=k.create();i.prototype._getTransport=function(){return new XDomainRequest()
};i.prototype._addReadyStateChangeHandler=function(){this.xhr.ontimeout=function(){this.reject(this.xhr)
}.bind(this);this.xhr.onerror=function(){this.reject(this.xhr)}.bind(this);this.xhr.onload=function(){this.resolve(this.xhr)
}.bind(this)};i.prototype._setTimeout=function(a){if(!a){if(this._configuration&&this._configuration.timeout){a=this._configuration.timeout
}}if(a>0){this.xhr.timeout=a}};i.prototype._sendXHR=function(){setTimeout(function(){k.prototype._sendXHR.call(this)
}.bind(this),0)};j.exports=i},{"./Request":311}],314:[function(d,g,f){g.exports.EventEmitter=d("./ac-event-emitter/EventEmitter")
},{"./ac-event-emitter/EventEmitter":315}],315:[function(r,s,q){var o="EventEmitter:propagation";
var l=function(a){if(a){this.context=a}};var p=l.prototype;var n=function(){if(!this.hasOwnProperty("_events")&&typeof this._events!=="object"){this._events={}
}return this._events};var u=function(a,f){var d=a[0];var c=a[1];var g=a[2];if((typeof d!=="string"&&typeof d!=="object")||d===null||Array.isArray(d)){throw new TypeError("Expecting event name to be a string or object.")
}if((typeof d==="string")&&!c){throw new Error("Expecting a callback function to be provided.")
}if(c&&(typeof c!=="function")){if(typeof d==="object"&&typeof c==="object"){g=c
}else{throw new TypeError("Expecting callback to be a function.")}}if(typeof d==="object"){for(var b in d){f.call(this,b,d[b],g)
}}if(typeof d==="string"){d=d.split(" ");d.forEach(function(h){f.call(this,h,c,g)
},this)}};var m=function(d,c){var b;var a;var f;b=n.call(this)[d];if(!b||b.length===0){return
}b=b.slice();this._stoppedImmediatePropagation=false;for(a=0,f=b.length;a<f;a++){if(this._stoppedImmediatePropagation||c(b[a],a)){break
}}};var t=function(a,d,c){var b=-1;m.call(this,d,function(f,g){if(f.callback===c){b=g;
return true}});if(b===-1){return}a[d].splice(b,1)};p.on=function(){var a=n.call(this);
u.call(this,arguments,function(d,c,b){a[d]=a[d]||(a[d]=[]);a[d].push({callback:c,context:b})
});return this};p.once=function(){u.call(this,arguments,function(a,c,b){var d=function(f){c.call(b||this,f);
this.off(a,d)};this.on(a,d,this)});return this};p.off=function(f,c){var a=n.call(this);
if(arguments.length===0){this._events={}}else{if(!f||(typeof f!=="string"&&typeof f!=="object")||Array.isArray(f)){throw new TypeError("Expecting event name to be a string or object.")
}}if(typeof f==="object"){for(var d in f){t.call(this,a,d,f[d])}}if(typeof f==="string"){var b=f.split(" ");
if(b.length===1){if(c){t.call(this,a,f,c)}else{a[f]=[]}}else{b.forEach(function(g){a[g]=[]
})}}return this};p.trigger=function(a,c,b){if(!a){throw new Error("trigger method requires an event name")
}if(typeof a!=="string"){throw new TypeError("Expecting event names to be a string.")
}if(b&&typeof b!=="boolean"){throw new TypeError("Expecting doNotPropagate to be a boolean.")
}a=a.split(" ");a.forEach(function(d){m.call(this,d,function(f){f.callback.call(f.context||this.context||this,c)
}.bind(this));if(!b){m.call(this,o,function(f){var g=d;if(f.prefix){g=f.prefix+g
}f.emitter.trigger(g,c)})}},this);return this};p.propagateTo=function(a,c){var b=n.call(this);
if(!b[o]){this._events[o]=[]}b[o].push({emitter:a,prefix:c})};p.stopPropagatingTo=function(d){var a=n.call(this);
if(!d){a[o]=[];return}var c=a[o];var f=c.length;var b;for(b=0;b<f;b++){if(c[b].emitter===d){c.splice(b,1);
break}}};p.stopImmediatePropagation=function(){this._stoppedImmediatePropagation=true
};p.has=function(b,c,g){var h=n.call(this);var a=h[b];if(arguments.length===0){return Object.keys(h)
}if(!a){return false}if(!c){return(a.length>0)?true:false}for(var i=0,f=a.length;
i<f;i++){var d=a[i];if(g&&c&&d.context===g&&d.callback===c){return true}else{if(c&&!g&&d.callback===c){return true
}}}return false};s.exports=l},{}],316:[function(d,g,f){arguments[4][285][0].apply(f,arguments)
},{dup:285}],317:[function(g,k,h){var j=g("./promise/promise").Promise;var i=g("./promise/polyfill").polyfill;
h.Promise=j;h.polyfill=i},{"./promise/polyfill":321,"./promise/promise":322}],318:[function(m,l,h){var i=m("./utils").isArray;
var j=m("./utils").isFunction;function k(b){var a=this;if(!i(b)){throw new TypeError("You must pass an array to all.")
}return new a(function(t,u){var d=[],c=b.length,r;if(c===0){t([])}function s(n){return function(o){g(n,o)
}}function g(o,n){d[o]=n;if(--c===0){t(d)}}for(var f=0;f<b.length;f++){r=b[f];if(r&&j(r.then)){r.then(s(f),u)
}else{g(f,r)}}})}h.all=k},{"./utils":326}],319:[function(d,g,f){(function(x,w){var b=(typeof window!=="undefined")?window:{};
var r=b.MutationObserver||b.WebKitMutationObserver;var c=(typeof w!=="undefined")?w:(this===undefined?window:this);
function q(){return function(){x.nextTick(a)}}function u(){var h=0;var j=new r(a);
var i=document.createTextNode("");j.observe(i,{characterData:true});return function(){i.data=(h=++h%2)
}}function s(){return function(){c.setTimeout(a,1)}}var t=[];function a(){for(var i=0;
i<t.length;i++){var j=t[i];var h=j[0],k=j[1];h(k)}t=[]}var v;if(typeof x!=="undefined"&&{}.toString.call(x)==="[object process]"){v=q()
}else{if(r){v=u()}else{v=s()}}function y(h,j){var i=t.push([h,j]);if(i===1){v()
}}f.asap=y}).call(this,d("_process"),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{_process:264}],320:[function(j,i,h){var k={instrument:false};function g(b,a){if(arguments.length===2){k[b]=a
}else{return k[b]}}h.config=k;h.configure=g},{}],321:[function(d,g,f){(function(c){var i=d("./promise").Promise;
var a=d("./utils").isFunction;function b(){var h;if(typeof c!=="undefined"){h=c
}else{if(typeof window!=="undefined"&&window.document){h=window}else{h=self}}var k="Promise" in h&&"resolve" in h.Promise&&"reject" in h.Promise&&"all" in h.Promise&&"race" in h.Promise&&(function(){var j;
new h.Promise(function(m){j=m});return a(j)}());if(!k){h.Promise=i}}f.polyfill=b
}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"./promise":322,"./utils":326}],322:[function(Q,ad,M){var P=Q("./config").config;
var S=Q("./config").configure;var L=Q("./utils").objectOrFunction;var ag=Q("./utils").isFunction;
var ac=Q("./utils").now;var ab=Q("./all").all;var Y=Q("./race").race;var W=Q("./resolve").resolve;
var ae=Q("./reject").reject;var J=Q("./asap").asap;var O=0;P.async=J;function aa(a){if(!ag(a)){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
}if(!(this instanceof aa)){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
}this._subscribers=[];E(a,this)}function E(a,b){function f(g){I(b,g)}function c(g){X(b,g)
}try{a(f,c)}catch(d){c(d)}}function G(c,a,d,i){var k=ag(d),f,g,b,j;if(k){try{f=d(i);
b=true}catch(h){j=true;g=h}}else{f=i;b=true}if(K(a,f)){return}else{if(k&&b){I(a,f)
}else{if(j){X(a,g)}else{if(c===af){I(a,f)}else{if(c===N){X(a,f)}}}}}}var V=void 0;
var R=0;var af=1;var N=2;function T(g,a,b,c){var d=g._subscribers;var f=d.length;
d[f]=a;d[f+af]=b;d[f+N]=c}function H(c,h){var a,b,d=c._subscribers,f=c._detail;
for(var g=0;g<d.length;g+=3){a=d[g];b=d[g+h];G(h,a,b,f)}c._subscribers=null}aa.prototype={constructor:aa,_state:undefined,_detail:undefined,_subscribers:undefined,then:function(a,c){var b=this;
var f=new this.constructor(function(){});if(this._state){var d=arguments;P.async(function g(){G(b._state,f,d[b._state-1],b._detail)
})}else{T(this,f,a,c)}return f},"catch":function(a){return this.then(null,a)}};
aa.all=ab;aa.race=Y;aa.resolve=W;aa.reject=ae;function K(a,c){var b=null,f;try{if(a===c){throw new TypeError("A promises callback cannot return that same promise.")
}if(L(c)){b=c.then;if(ag(b)){b.call(c,function(g){if(f){return true}f=true;if(c!==g){I(a,g)
}else{Z(a,g)}},function(g){if(f){return true}f=true;X(a,g)});return true}}}catch(d){if(f){return true
}X(a,d);return true}return false}function I(a,b){if(a===b){Z(a,b)}else{if(!K(a,b)){Z(a,b)
}}}function Z(a,b){if(a._state!==V){return}a._state=R;a._detail=b;P.async(F,a)}function X(a,b){if(a._state!==V){return
}a._state=R;a._detail=b;P.async(U,a)}function F(a){H(a,a._state=af)}function U(a){H(a,a._state=N)
}M.Promise=aa},{"./all":318,"./asap":319,"./config":320,"./race":323,"./reject":324,"./resolve":325,"./utils":326}],323:[function(k,i,g){var h=k("./utils").isArray;
function j(b){var a=this;if(!h(b)){throw new TypeError("You must pass an array to race.")
}return new a(function(c,d){var f=[],p;for(var o=0;o<b.length;o++){p=b[o];if(p&&typeof p.then==="function"){p.then(c,d)
}else{c(p)}}})}g.race=j},{"./utils":326}],324:[function(f,i,g){function h(a){var b=this;
return new b(function(c,d){d(a)})}g.reject=h},{}],325:[function(f,i,g){function h(a){if(a&&typeof a==="object"&&a.constructor===this){return a
}var b=this;return new b(function(c){c(a)})}g.resolve=h},{}],326:[function(n,m,i){function l(a){return k(a)||(typeof a==="object"&&a!==null)
}function k(a){return typeof a==="function"}function j(a){return Object.prototype.toString.call(a)==="[object Array]"
}var o=Date.now||function(){return new Date().getTime()};i.objectOrFunction=l;i.isFunction=k;
i.isArray=j;i.now=o},{}],327:[function(d,g,f){(function(E,C){var I="3.7.3-pre";
var L=E.html5||{};var H=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
var M=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
var c;var G="_html5shiv";var O=0;var A={};var K;(function(){try{var i=C.createElement("a");
i.innerHTML="<xyz></xyz>";c=("hidden" in i);K=i.childNodes.length==1||(function(){(C.createElement)("a");
var j=C.createDocumentFragment();return(typeof j.cloneNode=="undefined"||typeof j.createDocumentFragment=="undefined"||typeof j.createElement=="undefined")
}())}catch(h){c=true;K=true}}());function J(k,h){var j=k.createElement("p"),i=k.getElementsByTagName("head")[0]||k.documentElement;
j.innerHTML="x<style>"+h+"</style>";return i.insertBefore(j.lastChild,i.firstChild)
}function D(){var h=F.elements;return typeof h=="string"?h.split(" "):h}function z(j,i){var h=F.elements;
if(typeof h!="string"){h=h.join(" ")}if(typeof j!="string"){j=j.join(" ")}F.elements=h+" "+j;
N(i)}function y(i){var h=A[i[G]];if(!h){h={};O++;i[G]=O;A[O]=h}return h}function B(k,j,h){if(!j){j=C
}if(K){return j.createElement(k)}if(!h){h=y(j)}var i;if(h.cache[k]){i=h.cache[k].cloneNode()
}else{if(M.test(k)){i=(h.cache[k]=h.createElem(k)).cloneNode()}else{i=h.createElem(k)
}}return i.canHaveChildren&&!H.test(k)&&!i.tagUrn?h.frag.appendChild(i):i}function b(h,k){if(!h){h=C
}if(K){return h.createDocumentFragment()}k=k||y(h);var i=k.frag.cloneNode(),m=0,j=D(),l=j.length;
for(;m<l;m++){i.createElement(j[m])}return i}function a(i,h){if(!h.cache){h.cache={};
h.createElem=i.createElement;h.createFrag=i.createDocumentFragment;h.frag=h.createFrag()
}i.createElement=function(j){if(!F.shivMethods){return h.createElem(j)}return B(j,i,h)
};i.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+D().join().replace(/[\w\-:]+/g,function(j){h.createElem(j);
h.frag.createElement(j);return'c("'+j+'")'})+");return n}")(F,h.frag)}function N(i){if(!i){i=C
}var h=y(i);if(F.shivCSS&&!c&&!h.hasCSS){h.hasCSS=!!J(i,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")
}if(!K){a(i,h)}return i}var F={elements:L.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:I,shivCSS:(L.shivCSS!==false),supportsUnknownElements:K,shivMethods:(L.shivMethods!==false),type:"default",shivDocument:N,createElement:B,createDocumentFragment:b,addElements:z};
E.html5=F;N(C);if(typeof g=="object"&&g.exports){g.exports=F}}(typeof window!=="undefined"?window:this,document))
},{}],328:[function(d,g,f){arguments[4][10][0].apply(f,arguments)},{dup:10}],329:[function(d,g,f){arguments[4][11][0].apply(f,arguments)
},{dup:11}],330:[function(d,g,f){d("./Array/from");d("./Array/isArray");d("./Array/prototype.every");
d("./Array/prototype.filter");d("./Array/prototype.find");d("./Array/prototype.forEach");
d("./Array/prototype.indexOf");d("./Array/prototype.lastIndexOf");d("./Array/prototype.map");
d("./Array/prototype.reduce");d("./Array/prototype.reduceRight");d("./Array/prototype.slice");
d("./Array/prototype.some")},{"./Array/from":331,"./Array/isArray":332,"./Array/prototype.every":333,"./Array/prototype.filter":334,"./Array/prototype.find":335,"./Array/prototype.forEach":336,"./Array/prototype.indexOf":337,"./Array/prototype.lastIndexOf":338,"./Array/prototype.map":339,"./Array/prototype.reduce":340,"./Array/prototype.reduceRight":341,"./Array/prototype.slice":342,"./Array/prototype.some":343}],331:[function(d,g,f){if(!Array.from){Array.from=(function(){var c=Object.prototype.toString;
var b=function(h){return typeof h==="function"||c.call(h)==="[object Function]"
};var k=function(h){var i=Number(h);if(isNaN(i)){return 0}if(i===0||!isFinite(i)){return i
}return(i>0?1:-1)*Math.floor(Math.abs(i))};var l=Math.pow(2,53)-1;var m=function(h){var i=k(h);
return Math.min(Math.max(i,0),l)};return function a(y){var x=this;var z=Object(y);
if(y==null){throw new TypeError("Array.from requires an array-like object - not null or undefined")
}var i=arguments.length>1?arguments[1]:void undefined;var v;if(typeof i!=="undefined"){if(!b(i)){throw new TypeError("Array.from: when provided, the second argument must be a function")
}if(arguments.length>2){v=arguments[2]}}var h=m(z.length);var w=b(x)?Object(new x(h)):new Array(h);
var u=0;var j;while(u<h){j=z[u];if(i){w[u]=typeof v==="undefined"?i(j,u):i.call(v,j,u)
}else{w[u]=j}u+=1}w.length=h;return w}}())}},{}],332:[function(d,g,f){arguments[4][138][0].apply(f,arguments)
},{dup:138}],333:[function(d,g,f){arguments[4][139][0].apply(f,arguments)},{dup:139}],334:[function(d,g,f){arguments[4][140][0].apply(f,arguments)
},{dup:140}],335:[function(d,g,f){if(!Array.prototype.find){Object.defineProperty(Array.prototype,"find",{value:function(l){if(this==null){throw new TypeError('"this" is null or not defined')
}var a=Object(this);var m=a.length>>>0;if(typeof l!=="function"){throw new TypeError("predicate must be a function")
}var k=arguments[1];var c=0;while(c<m){var b=a[c];if(l.call(k,b,c,a)){return b}c++
}return undefined}})}},{}],336:[function(d,g,f){arguments[4][141][0].apply(f,arguments)
},{dup:141}],337:[function(d,g,f){arguments[4][142][0].apply(f,arguments)},{dup:142}],338:[function(i,h,f){if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function g(a,b){var d=Object(this);
var l=d.length>>>0;var c;b=parseInt(b,10);if(l<=0){return -1}c=(typeof b==="number")?Math.min(l-1,b):l-1;
c=c>=0?c:l-Math.abs(c);for(;c>=0;c-=1){if(c in d&&a===d[c]){return c}}return -1
}}},{}],339:[function(f,i,g){if(!Array.prototype.map){Array.prototype.map=function h(a,b){var d=Object(this);
var m=d.length>>>0;var c;var n=new Array(m);if(typeof a!=="function"){throw new TypeError(a+" is not a function")
}for(c=0;c<m;c+=1){if(c in d){n[c]=a.call(b,d[c],c,d)}}return n}}},{}],340:[function(f,i,g){if(!Array.prototype.reduce){Array.prototype.reduce=function h(a,d){var c=Object(this);
var m=c.length>>>0;var b=0;var n;if(typeof a!=="function"){throw new TypeError(a+" is not a function")
}if(typeof d==="undefined"){if(!m){throw new TypeError("Reduce of empty array with no initial value")
}n=c[0];b=1}else{n=d}while(b<m){if(b in c){n=a.call(undefined,n,c[b],b,c);b+=1}}return n
}}},{}],341:[function(i,h,f){if(!Array.prototype.reduceRight){Array.prototype.reduceRight=function g(a,d){var c=Object(this);
var m=c.length>>>0;var b=m-1;var n;if(typeof a!=="function"){throw new TypeError(a+" is not a function")
}if(d===undefined){if(!m){throw new TypeError("Reduce of empty array with no initial value")
}n=c[m-1];b=m-2}else{n=d}while(b>=0){if(b in c){n=a.call(undefined,n,c[b],b,c);
b-=1}}return n}}},{}],342:[function(d,g,f){arguments[4][143][0].apply(f,arguments)
},{dup:143}],343:[function(d,g,f){arguments[4][144][0].apply(f,arguments)},{dup:144}],344:[function(d,g,f){arguments[4][145][0].apply(f,arguments)
},{dup:145}],345:[function(d,g,f){d("./Date/now");d("./Date/prototype.toISOString");
d("./Date/prototype.toJSON")},{"./Date/now":346,"./Date/prototype.toISOString":347,"./Date/prototype.toJSON":348}],346:[function(d,g,f){arguments[4][288][0].apply(f,arguments)
},{dup:288}],347:[function(f,h,g){if(!Date.prototype.toISOString){Date.prototype.toISOString=function i(){if(!isFinite(this)){throw new RangeError("Date.prototype.toISOString called on non-finite value.")
}var b={year:this.getUTCFullYear(),month:this.getUTCMonth()+1,day:this.getUTCDate(),hours:this.getUTCHours(),minutes:this.getUTCMinutes(),seconds:this.getUTCSeconds(),mseconds:(this.getUTCMilliseconds()/1000).toFixed(3).substr(2,3)};
var a;var c;for(a in b){if(b.hasOwnProperty(a)&&a!=="year"&&a!=="mseconds"){b[a]=String(b[a]).length===1?"0"+String(b[a]):String(b[a])
}}if(b.year<0||b.year>9999){c=b.year<0?"-":"+";b.year=c+String(Math.abs(b.year/1000000)).substr(2,6)
}return b.year+"-"+b.month+"-"+b.day+"T"+b.hours+":"+b.minutes+":"+b.seconds+"."+b.mseconds+"Z"
}}},{}],348:[function(d,g,f){if(!Date.prototype.toJSON){Date.prototype.toJSON=function(b){var a=Object(this);
var k;var c=function(m){var h=typeof m;var i=[null,"undefined","boolean","string","number"].some(function(l){return l===h
});if(i){return true}return false};var j=function(i){var h;if(c(i)){return i}h=(typeof i.valueOf==="function")?i.valueOf():(typeof i.toString==="function")?i.toString():null;
if(h&&c(h)){return h}throw new TypeError(i+" cannot be converted to a primitive")
};k=j(a);if(typeof k==="number"&&!isFinite(k)){return null}if(typeof a.toISOString!=="function"){throw new TypeError("toISOString is not callable")
}return a.toISOString.call(a)}}},{}],349:[function(d,g,f){d("./Element/prototype.classList");
d("./Element/prototype.matches");d("./Element/prototype.remove")},{"./Element/prototype.classList":350,"./Element/prototype.matches":351,"./Element/prototype.remove":352}],350:[function(d,g,f){arguments[4][146][0].apply(f,arguments)
},{dup:146}],351:[function(d,g,f){if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(b){var a=(this.document||this.ownerDocument).querySelectorAll(b),c=a.length;
while(--c>=0&&a.item(c)!==this){}return c>-1}}},{}],352:[function(d,g,f){g.exports=(function(){if(!("remove" in Element.prototype)){Element.prototype.remove=function(){if(this.parentNode){this.parentNode.removeChild(this)
}}}})},{}],353:[function(d,g,f){d("./Function/prototype.bind")},{"./Function/prototype.bind":354}],354:[function(d,g,f){arguments[4][147][0].apply(f,arguments)
},{dup:147}],355:[function(require,module,exports){if(typeof JSON!=="object"){JSON={}
}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null
};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()
}}var cx,escapable,gap,indent,meta,rep;function quote(string){escapable.lastIndex=0;
return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);
case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;
i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;return v}}if(typeof JSON.stringify!=="function"){escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;
i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;
if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})}}if(typeof JSON.parse!=="function"){cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];
if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)
}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")
}}}())},{}],356:[function(d,g,f){d("./Object/assign");d("./Object/create");d("./Object/is");
d("./Object/keys")},{"./Object/assign":357,"./Object/create":358,"./Object/is":359,"./Object/keys":360}],357:[function(d,g,f){if(typeof Object.assign!="function"){Object.assign=function(a){if(a==null){throw new TypeError("Cannot convert undefined or null to object")
}a=Object(a);for(var i=1;i<arguments.length;i++){var b=arguments[i];if(b!=null){for(var c in b){if(Object.prototype.hasOwnProperty.call(b,c)){a[c]=b[c]
}}}}return a}}},{}],358:[function(d,g,f){arguments[4][289][0].apply(f,arguments)
},{dup:289}],359:[function(d,g,f){if(!Object.is){Object.is=function(a,b){if(a===0&&b===0){return 1/a===1/b
}if(a!==a){return b!==b}return a===b}}},{}],360:[function(f,i,g){if(!Object.keys){Object.keys=function h(b){var c=[];
var a;if((!b)||(typeof b.hasOwnProperty!=="function")){throw"Object.keys called on non-object."
}for(a in b){if(b.hasOwnProperty(a)){c.push(a)}}return c}}},{}],361:[function(d,g,f){g.exports=d("es6-promise").polyfill()
},{"es6-promise":317}],362:[function(d,g,f){d("./String/prototype.trim")},{"./String/prototype.trim":363}],363:[function(i,h,f){if(!String.prototype.trim){String.prototype.trim=function g(){return this.replace(/^\s+|\s+$/g,"")
}}},{}],364:[function(d,g,f){window.XMLHttpRequest=window.XMLHttpRequest||function(){var a;
try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(b){try{a=new ActiveXObject("Microsoft.XMLHTTP")
}catch(b){a=false}}return a}},{}],365:[function(d,g,f){d("./Array");d("./console.log");
d("./CustomEvent");d("./Date");d("./Element");d("./Function");d("./getComputedStyle");
d("./html5shiv");d("./JSON");d("./matchMedia");d("./Object");d("./performance");
d("./Promise");d("./requestAnimationFrame");d("./String");d("./XMLHttpRequest")
},{"./Array":330,"./CustomEvent":344,"./Date":345,"./Element":349,"./Function":353,"./JSON":355,"./Object":356,"./Promise":361,"./String":362,"./XMLHttpRequest":364,"./console.log":366,"./getComputedStyle":367,"./html5shiv":368,"./matchMedia":369,"./performance":370,"./requestAnimationFrame":372}],366:[function(d,g,f){arguments[4][290][0].apply(f,arguments)
},{"console-polyfill":316,dup:290}],367:[function(l,k,m){if(!window.getComputedStyle){function j(d,a,b){d.document;
var c=d.currentStyle[a].match(/(-?[\d\.]+)(%|cm|em|in|mm|pc|pt|)/)||[0,0,""],f=c[1],o=c[2],g;
b=!b?b:/%|em/.test(o)&&d.parentElement?j(d.parentElement,"fontSize",null):16;g=a=="fontSize"?b:/width/i.test(a)?d.clientWidth:d.clientHeight;
return o=="%"?f/100*g:o=="cm"?f*0.3937*96:o=="em"?f*b:o=="in"?f*96:o=="mm"?f*0.3937*96/10:o=="pc"?f*12*96/72:o=="pt"?f*96/72:f
}function h(b,p){var g=p=="border"?"Width":"",c=p+"Top"+g,a=p+"Right"+g,f=p+"Bottom"+g,d=p+"Left"+g;
b[p]=(b[c]==b[a]&&b[c]==b[f]&&b[c]==b[d]?[b[c]]:b[c]==b[f]&&b[d]==b[a]?[b[c],b[a]]:b[d]==b[a]?[b[c],b[a],b[f]]:[b[c],b[a],b[f],b[d]]).join(" ")
}function i(c){var b=this,d=c.currentStyle,o=j(c,"fontSize"),g=function(n){return"-"+n.toLowerCase()
},a;for(a in d){Array.prototype.push.call(b,a=="styleFloat"?"float":a.replace(/[A-Z]/,g));
if(a=="width"){b[a]=c.offsetWidth+"px"}else{if(a=="height"){b[a]=c.offsetHeight+"px"
}else{if(a=="styleFloat"){b["float"]=d[a];b.cssFloat=d[a]}else{if(/margin.|padding.|border.+W/.test(a)&&b[a]!="auto"){b[a]=Math.round(j(c,a,o))+"px"
}else{if(/^outline/.test(a)){try{b[a]=d[a]}catch(f){b.outlineColor=d.color;b.outlineStyle=b.outlineStyle||"none";
b.outlineWidth=b.outlineWidth||"0px";b.outline=[b.outlineColor,b.outlineWidth,b.outlineStyle].join(" ")
}}else{b[a]=d[a]}}}}}}h(b,"margin");h(b,"padding");h(b,"border");b.fontSize=Math.round(o)+"px"
}i.prototype={constructor:i,getPropertyPriority:function(){throw new Error("NotSupportedError: DOM Exception 9")
},getPropertyValue:function(a){return this[a.replace(/-\w/g,function(b){return b[1].toUpperCase()
})]},item:function(a){return this[a]},removeProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")
},setProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")
},getPropertyCSSValue:function(){throw new Error("NotSupportedError: DOM Exception 9")
}};window.getComputedStyle=function(a){return new i(a)}}},{}],368:[function(d,g,f){d("html5shiv/src/html5shiv")
},{"html5shiv/src/html5shiv":327}],369:[function(d,g,f){arguments[4][12][0].apply(f,arguments)
},{dup:12,"matchmedia-polyfill":329,"matchmedia-polyfill/matchMedia.addListener":328}],370:[function(d,g,f){d("./performance/now")
},{"./performance/now":371}],371:[function(d,g,f){arguments[4][291][0].apply(f,arguments)
},{"../Date/now":346,dup:291}],372:[function(d,g,f){arguments[4][148][0].apply(f,arguments)
},{dup:148}],373:[function(d,g,f){(function(b,a){if(typeof f==="object"&&f){g.exports=a
}else{if(typeof define==="function"&&define.amd){define(a)}else{b.Deferred=a}}}(this,(function(){var s={};
var t,c,a,u,o,p,b,r;t={0:"pending",1:"resolved",2:"rejected"};c=function(k,i){var l,h,j,m,n;
if(this._status!==0){if(console&&console.warn){console.warn("Trying to fulfill more than once.")
}return false}this.data=i;h=this.pending;j=h.length;for(l=0;l<j;l++){m=h[l];if(m[k]){n=m[k](i)
}if(typeof n==="object"&&n.hasOwnProperty("then")&&n.hasOwnProperty("status")){n.then(function(w){m.deferred.resolve(w)
},function(w){m.deferred.reject(w)},function(w){m.deferred.progress(w)})}else{m.deferred[k](n||undefined)
}}if(k!=="progress"){h=[]}return true};p=function(h,i){this.then=h;this.status=i
};b=p.prototype;r=function(h){return h};b.success=function(h,i){return this.then(h.bind(i),r,r)
};b.fail=function(h,i){return this.then(r,h.bind(i),r)};b.progress=function(h,i){return this.then(r,r,h.bind(i))
};u=function(h){if(typeof h!=="function"){return function(){}}return h};a=function(h,i,j){this.resolve=u(h);
this.reject=u(i);this.progress=u(j);this.deferred=new o()};o=function(){this.pending=[];
this._status=0;this._promise=new p(this.then.bind(this),this.status.bind(this))
};o.prototype={status:function(){return t[this._status]},promise:function(){return this._promise
},progress:function(h){c.call(this,"progress",h);return this._promise},resolve:function(h){c.call(this,"resolve",h);
if(this._status===0){this._status=1}return this._promise},reject:function(h){c.call(this,"reject",h);
if(this._status===0){this._status=2}return this._promise},then:function(h,j,k){var l,i;
i=new a(h,j,k);if(this._status===0){this.pending.push(i)}else{if(this._status===1&&typeof h==="function"){l=h(this.data);
if(typeof l==="object"&&l.hasOwnProperty("then")&&l.hasOwnProperty("status")){l.then(function(m){i.deferred.resolve(m)
},function(m){i.deferred.reject(m)},function(m){i.deferred.progress(m)})}else{i.deferred.resolve(l)
}}else{if(this._status===2&&typeof j==="function"){l=j(this.data);i.deferred.reject(l)
}}}return i.deferred.promise()}};var q=function(){var j,k,h,i,l;j=[].slice.call(arguments);
k=new o();h=0;i=function(m){h--;var n=j.indexOf(this);j[n]=m;if(h===0){k.resolve(j)
}};l=function(m){k.reject(m)};j.forEach(function(m){if(m.then){h++}});j.forEach(function(m){if(m.then){m.then(i.bind(m),l)
}});return k.promise()};o.when=q;s.Deferred=o;return s}())))},{}],374:[function(q,r,p){function n(){}n.prototype={resolve:function m(){this._defer.resolve.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},reject:function k(){this._defer.reject.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},progress:function s(){var a="ac-defer.progress is deprecated since it is not part of the A+ spec. Recommend using ac-event-emitter for progress signaling";
console.warn(a);this._defer.progress.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},then:function o(){this._defer.then.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},promise:function l(){return this._defer.promise.apply(this._defer,Array.prototype.slice.call(arguments))
}};r.exports=n},{}],375:[function(q,p,k){var m=new (q("./ac-deferred/Deferred"))(),n=q("smartsign-deferred").Deferred;
function j(){this._defer=new n()}j.prototype=m;p.exports.join=function l(){return n.when.apply(null,[].slice.call(arguments))
};p.exports.all=function o(a){return n.when.apply(null,a)};p.exports.Deferred=j
},{"./ac-deferred/Deferred":374,"smartsign-deferred":373}],376:[function(d,g,f){d("@marcom/ac-polyfills");
g.exports.Asset=d("./ac-asset-loader/AssetLoader/Asset");g.exports.Asset.Ajax=d("./ac-asset-loader/AssetLoader/Asset/Ajax");
g.exports.Asset.Ajax.JSON=d("./ac-asset-loader/AssetLoader/Asset/Ajax/JSON");g.exports.Asset.Img=d("./ac-asset-loader/AssetLoader/Asset/Img");
g.exports.Asset.Video=d("./ac-asset-loader/AssetLoader/Asset/Video");g.exports.Asset.Binary=d("./ac-asset-loader/AssetLoader/Asset/Binary");
g.exports.Asset.Binary.Chunk=d("./ac-asset-loader/AssetLoader/Asset/Binary/Chunk");
g.exports.AssetLoader=d("./ac-asset-loader/AssetLoader");g.exports.AssetLoader.Queue=d("./ac-asset-loader/AssetLoader/Queue")
},{"./ac-asset-loader/AssetLoader":377,"./ac-asset-loader/AssetLoader/Asset":378,"./ac-asset-loader/AssetLoader/Asset/Ajax":379,"./ac-asset-loader/AssetLoader/Asset/Ajax/JSON":380,"./ac-asset-loader/AssetLoader/Asset/Binary":381,"./ac-asset-loader/AssetLoader/Asset/Binary/Chunk":382,"./ac-asset-loader/AssetLoader/Asset/Img":383,"./ac-asset-loader/AssetLoader/Asset/Video":386,"./ac-asset-loader/AssetLoader/Queue":387,"@marcom/ac-polyfills":365}],377:[function(B,C,w){var u;
var x=B("@marcom/ac-object");var p=B("@marcom/ac-event-emitter").EventEmitter;var q=B("./AssetLoader/Asset/Ajax");
var y=B("./AssetLoader/Asset/Ajax/JSON");var v=B("./AssetLoader/Asset/Img");var r=B("./AssetLoader/Asset/Video");
var s=B("../utils/destroy");var A=B("./AssetLoader/Queue");var z={};function t(a,c){this.options=x.defaults(z,c||{});
var b=this._generateAssets(a);this._timeoutDuration=this.options.timeout;this._timeout=null;
this._proxyListeners();this.add(b,this.options)}u=t.prototype=new p();u.load=function(){if(this._timeoutDuration){this._timeout=window.setTimeout(this._onTimeout.bind(this),this._timeoutDuration)
}return this._queue.start()};u._clearTimeout=function(){window.clearTimeout(this._timeout);
this._timeout=null};u.pause=function(){this._clearTimeout();return this._queue.pause()
};u.destroy=function(){s(this,true)};u.add=function(a){if(!Array.isArray(a)){a=[a]
}a=this._generateAssets(a);if(!this._queue||this._queue.loaded){if(this._queue){this._queue.destroy()
}this._queue=new A(a,this.options);this._bindQueueListeners();return}this._queue.add(a)
};u._onTimeout=function(){this._queue.abort();this._queue.destroy();this.trigger("timeout")
};u._generateAssets=function(a){if(this._boundGenerateAsset===undefined){this._boundGenerateAsset=this._generateAsset.bind(this)
}a=[].concat(a);var b=a.map(this._boundGenerateAsset);return b};u._generateAsset=function(a,b){if(t.isValidAsset(a)){a.index=b;
return a}if(typeof a!=="string"||a===""){return null}if(!!a.match(/\.json$/)){return new y(a,b)
}if(!!a.match(/\.(xml|txt)$/)){return new q(a,b)}return new v(a,b)};u._proxyListeners=function(){this._boundOnResolved=this._onResolved.bind(this);
this._boundOnRejected=this._onRejected.bind(this);this._boundOnProgress=this._onProgress.bind(this)
};u._bindQueueListeners=function(){this._queue.on("resolved",this._boundOnResolved);
this._queue.on("rejected",this._boundOnRejected);this._queue.on("progress",this._boundOnProgress)
};u._onResolved=function(a){this._clearTimeout();this.trigger("loaded",a)};u._onRejected=function(a){this.trigger("error",a)
};u._onProgress=function(a){this.trigger("progress",a)};t.isValidAsset=function(a){return !!(a&&(typeof a.load==="function")&&(typeof a.destroy==="function"))
};t.isValidAssetLoader=function(a){return !!(a&&(typeof a.load==="function")&&(typeof a.pause==="function")&&(typeof a.destroy==="function"))
};C.exports=t},{"../utils/destroy":388,"./AssetLoader/Asset/Ajax":379,"./AssetLoader/Asset/Ajax/JSON":380,"./AssetLoader/Asset/Img":383,"./AssetLoader/Asset/Video":386,"./AssetLoader/Queue":387,"@marcom/ac-event-emitter":314,"@marcom/ac-object":590}],378:[function(p,n,j){var l;
var q=p("ac-deferred").Deferred;var m=p("@marcom/ac-event-emitter").EventEmitter;
var o=p("../../utils/destroy");function k(a,b){this.src=a;this.index=b;this.data=null;
this._boundOnLoad=this._onLoad.bind(this);this._boundOnError=this._onError.bind(this)
}l=k.prototype=new m();l.load=function(){this._load()};l.destroy=function(){o(this)
};l._load=function(){this.data={src:this.src};window.setTimeout(this._onLoad.bind(this),20)
};l._onLoad=function(){this.trigger("loaded",this)};l._onError=function(){this.trigger("error",this.data)
};n.exports=k},{"../../utils/destroy":388,"@marcom/ac-event-emitter":314,"ac-deferred":375}],379:[function(p,n,j){var l;
var q=p("@marcom/ac-ajax");var k=p("@marcom/ac-object");var m=p("../Asset");function o(a,b){m.apply(this,arguments)
}l=o.prototype=k.create(m.prototype);l._load=function(){q.get({url:this.src}).then(this._boundOnLoad,this._boundOnError)
};l._onLoad=function(a){this.data=a.response;m.prototype._onLoad.call(this)};n.exports=o
},{"../Asset":378,"@marcom/ac-ajax":309,"@marcom/ac-object":590}],380:[function(o,n,i){var l;
var j=o("@marcom/ac-object");var m=o("../Ajax");function k(a){m.apply(this,arguments)
}l=k.prototype=j.create(m.prototype);l._onLoad=function(a){try{m.prototype._onLoad.call(this,{response:JSON.parse(a.response||a.responseText)})
}catch(b){this._onError(b)}};n.exports=k},{"../Ajax":379,"@marcom/ac-object":590}],381:[function(t,u,q){var l=t("@marcom/ac-ajax");
var r=t("@marcom/ac-object");var m=t("./Binary/Chunk");var n=t("./../Asset");var s={chunkSize:1024*1024};
function p(a,b){n.apply(this,arguments);this.options=r.defaults(s,b||{});this._totalSize=null;
this._rangeObjects={};this._contentType=null;this._request=null;this._numLoaded=0;
this._numRanges=0}var o=p.prototype=r.create(n.prototype);o.pause=function(){var a;
if(this._request!==null){this._request.xhr.abort()}for(a in this._rangeObjects){if(this._rangeObjects[a].isLoaded()===false){this._rangeObjects[a].pause()
}}};o._load=function(){if(this._boundQueueRangeRequests===undefined){this._boundQueueRangeRequests=this._queueRangeRequests.bind(this)
}if(this._totalSize===null){this._getMetaData().then(this._boundQueueRangeRequests)
}else{this._queueRangeRequests()}};o._getOrCreateRangeObject=function(d){var a=this._rangeObjects[d.toString()];
var b;var c;if(a===undefined){b=(this.options.chunkSize-1);c=d+b;if(c>this._totalSize){b=null
}a=this._rangeObjects[d.toString()]=new m(this.src,{start:d,length:b});this._numRanges+=1
}return a};o._onRangeLoad=function(){this._numLoaded+=1;if(this._numLoaded===this._numRanges){this._afterAllChunksLoaded()
}};o._queueRangeRequests=function(){var d;var f=[];var c;var b;var a;for(var g=0;
g<this._totalSize;g+=this.options.chunkSize){a=this._getOrCreateRangeObject(g);
a.on("loaded",this._onRangeLoad,this);a.load()}};o._afterAllChunksLoaded=function(){var b;
var c=[];for(var a in this._rangeObjects){c.push(this._rangeObjects[a].data)}b=new Blob(c,{type:this._contentType});
this.trigger("loaded",b)};o._afterHeadRequest=function(a){this._totalSize=parseInt(a.getResponseHeader(["Content-Length"]));
this._contentType=a.getResponseHeader(["Content-Type"]);this._request=null};o._getMetaData=function(){if(!this._boundAfterHeadRequest){this._boundAfterHeadRequest=this._afterHeadRequest.bind(this)
}this._request=l.create({method:"HEAD",url:this.src,timeout:2*1000});return this._request.send().then(this._boundAfterHeadRequest,this._boundOnError)
};u.exports=p},{"./../Asset":378,"./Binary/Chunk":382,"@marcom/ac-ajax":309,"@marcom/ac-object":590}],382:[function(r,s,o){var n;
var k=r("@marcom/ac-ajax");var p=r("@marcom/ac-object");var m=r("../../Asset");
var q={start:0,length:null};function l(a,b){m.apply(this,arguments);this.options=p.defaults(q,b||{});
this._request=null;this.data=null}n=l.prototype=p.create(m.prototype);n.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};n.isLoaded=function(){return(this.data!==null)};n._load=function(){this._request=k.create({url:this.src+"?"+this._buildQueryString(),method:"get",timeout:30*1000,headers:[{name:"Range",value:this._buildRangeString()}]});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};n._onLoad=function(a){this.data=a.response;this._request=null;m.prototype._onLoad.call(this,this.data)
};n._buildRangeString=function(){var a="bytes="+this.options.start+"-";if(this.options.length!==null){a+=(this.options.start+this.options.length)
}return a};n._buildQueryString=function(){var a=this.options.start.toString();if(this.options.length!==undefined){a+=(this.options.start+this.options.length)
}return a};s.exports=l},{"../../Asset":378,"@marcom/ac-ajax":309,"@marcom/ac-object":590}],383:[function(o,n,i){var l;
var j=o("@marcom/ac-object");var m=o("../Asset");function k(a,b){m.apply(this,arguments)
}l=k.prototype=j.create(m.prototype);l._load=function(){var a=new Image();this.data=a;
this._boundOnLoad=this._onLoad.bind(this);a.onload=this._boundOnLoad;a.onerror=this._boundOnError;
a.src=this.src};n.exports=k},{"../Asset":378,"@marcom/ac-object":590}],384:[function(r,u,o){var l=r("@marcom/ac-ajax").Ajax,p=r("@marcom/ac-object"),m=r("./SplitFile/Chunk"),t=r("../Asset");
var n;var q={splitManifestTimeout:5000,splitChunkTimeout:null};var s=function(a,b){t.apply(this,arguments);
if(a.lastIndexOf("/")!==a.length-1){a=a+"/"}this.options=p.extend(q,b||{});this._manifestPath=a+"manifest.json";
this._ajax=new l();this._request=null;this._chunksLoaded=0;this._chunksLen=null;
this._chunks=[];this._boundOnManifestLoaded=this._onManifestLoaded.bind(this)};
n=s.prototype=p.create(t.prototype);n._load=function(){var a={method:"get",url:this._manifestPath,timeout:this.options.manifestTimeout};
this._request=this._ajax.create(a);this._request.send().then(this._boundOnManifestLoaded)
};n._onManifestLoaded=function(c){this._manifest=JSON.parse(c.responseText);this._chunksLen=this._manifest.files.length;
var f,d=this._manifest.files,a,b=this._chunksLen;for(f=0;f<b;f++){a=this._getOrCreateChunkObject(d[f],f);
a.once("loaded",this._onChunkLoaded,this);a.load()}this._request=null;this._ajax=null
};n._getOrCreateChunkObject=function(g,b){var f=this.options.splitChunkTimeout?{timeout:this.options.splitChunkTimeout}:null;
if(!this._chunks[b]){var c=g.path;if(!c.match(/(^http(s?))/)){c=this.src+"/"+c}else{if(!!this.src.match(/(^http(s?))/)){var d=c.indexOf("/",10);
var a=this.src.indexOf("/",10);c=this.src.substring(0,a)+c.substring(d)}}this._chunks[b]=new m(c,f)
}return this._chunks[b]};n._onChunkLoaded=function(){this._chunksLoaded++;if(this._chunksLoaded===this._chunksLen){var c,b=this._chunks.length,a=[];
for(c=0;c<b;c++){a.push(this._chunks[c].data);this._chunks[c].off()}this.data=new Blob(a,{type:this._manifest.mimeType});
a=this._chunks=null;this.trigger("loaded",this.data)}};n.pause=function(){if(this._request!==null){if(this._request.xhr!==null){this._request.xhr.abort()
}this._request=null}this.data=null;this._chunks=null};u.exports=s},{"../Asset":378,"./SplitFile/Chunk":385,"@marcom/ac-ajax":309,"@marcom/ac-object":590}],385:[function(q,s,n){var m;
var k=q("@marcom/ac-ajax");var o=q("@marcom/ac-object");var r=q("../../Asset");
var p={timeout:30*1000};function l(a,b){r.apply(this,arguments);this.options=o.extend(p,b||{});
this._request=null;this.data=null}m=l.prototype=o.create(r.prototype);m.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};m.isLoaded=function(){return(this.data!==null)};m._load=function(){this._request=k.create({url:this.src,method:"get",timeout:this.options.timeout});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};m._onLoad=function(a){this.data=a.response;this._request=null;r.prototype._onLoad.call(this,this.data)
};s.exports=l},{"../../Asset":378,"@marcom/ac-ajax":309,"@marcom/ac-object":590}],386:[function(u,w,q){var o;
var r=u("@marcom/ac-feature");var s=u("@marcom/ac-object");var p=u("./Binary");
var n=u("../Asset");var v=u("./SplitFile");var t={chunkSize:1024*1024,split:false};
function m(b,a){n.apply(this,arguments);this.options=s.defaults(t,a||{});this._binary=this.options.binary||this._createAssetType()
}o=m.prototype=s.create(n.prototype);o._canUseBlob=function(){return(window.Blob!==undefined&&window.URL!==undefined&&typeof window.URL.createObjectURL==="function")
};o._createAssetType=function(){if(this._canUseBlob()){if(this.options.split){return new v(this.src,this.options)
}return new p(this.src,this.options)}};o._load=function(){this._binary.on("loaded",this._boundOnLoad);
this._binary.on("error",this._boundOnError);this._binary.load()};o._onLoad=function(b){var a=b;
if(b instanceof window.Blob){a=this.options.element;if(!a){a=document.createElement("video")
}if(a.getAttribute("type")!==b.type){a.setAttribute("type",b.type)}a.src=window.URL.createObjectURL(b)
}n.prototype._onLoad.call(this,a)};o.pause=function(){this._binary.pause()};o.destroy=function(){this._binary.destroy();
n.prototype.destroy.call(this)};w.exports=m},{"../Asset":378,"./Binary":381,"./SplitFile":384,"@marcom/ac-feature":25,"@marcom/ac-object":590}],387:[function(t,u,p){var o;
var q=t("@marcom/ac-object");var n=t("ac-deferred").Deferred;var l=t("@marcom/ac-event-emitter").EventEmitter;
var m=t("../../utils/destroy");var r={threads:4};function s(a,b){this.options=q.defaults(r,b||{});
this._queue=a;this._active=[];this._allowedThreads=this.options.threads;this._availableThreads=this._allowedThreads;
this._deferred=new n();this._data=[];this.paused=true;this.loaded=false;this.promise=this._deferred.promise()
}o=s.prototype=new l();o.start=function(){var a=this._availableThreads;var b;this.paused=false;
if(a>this._queue.length){a=this._queue.length}for(b=1;b<=a;b++){this._startNewThread()
}return this.promise};o.pause=function(){this.paused=true;var a=[];this._active.forEach(function(c,b){if(typeof c.pause==="function"){this._queue.unshift(c);
this._releaseThread();c.off("loaded");c.off("error");c.pause();a.push(b)}},this);
a.forEach(function(b){this._active.splice(b,1)},this)};o.add=function(a){this._queue=this._queue.concat(a)
};o.destroy=function(){this.pause();m(this)};o._startNewThread=function(){var a=this._queue.shift();
this._occupyThread();if(a&&typeof a.load==="function"){var b=function(d){this._onProgress(d);
this._active.splice(this._active.indexOf(a),1);a.off("error",c)};var c=function(d){this._onError();
a.off("loaded",b)};a.once("loaded",b,this);a.once("error",c,this);a.load()}else{this._onError()
}this._active.push(a)};o._onResolved=function(){if(this._errored){return false}this._deferred.resolve(this._data);
this.trigger("resolved",this._data)};o._onError=function(a){if(this._errored){return false
}this._errored=true;this._deferred.reject(a);this.trigger("rejected",a)};o.abort=function(){this._deferred.reject()
};o._onProgress=function(a){if(this._errored){return false}this._releaseThread();
this._data[a.index]=a.data;this.trigger("progress",a.data);if(this._queue.length<=0){if(this._availableThreads>=this._allowedThreads){this._onResolved()
}}else{if(!this.paused&&!this._errored){this._startNewThread()}}};o._occupyThread=function(){this._availableThreads--;
if(this._availableThreads<0){throw"AssetLoader.Queue: Available thread count cannot be negative."
}};o._releaseThread=function(){this._availableThreads++;if(this._availableThreads>this._allowedThreads){throw"AssetLoader.Queue: Available thread count cannot be more than allowed thread amount."
}};u.exports=s},{"../../utils/destroy":388,"@marcom/ac-event-emitter":314,"@marcom/ac-object":590,"ac-deferred":375}],388:[function(f,h,g){h.exports=function i(c,b){if(typeof c.off==="function"){c.off()
}function a(l){var m=true;for(var d in l){if(l.hasOwnProperty(d)){if(l[d]!==null){m=false;
break}}}return m}window.setTimeout(function(){var d;for(d in c){if(c.hasOwnProperty(d)){if(b&&c[d]&&typeof c[d].destroy==="function"&&!a(c[d])){c[d].destroy()
}c[d]=null}}})}},{}],389:[function(d,g,f){arguments[4][58][0].apply(f,arguments)
},{"./shared/getEventType":399,"./utils/addEventListener":402,dup:58}],390:[function(d,g,f){arguments[4][59][0].apply(f,arguments)
},{"./shared/getEventType":399,"./utils/dispatchEvent":403,dup:59}],391:[function(d,g,f){arguments[4][145][0].apply(f,arguments)
},{dup:145}],392:[function(d,g,f){arguments[4][1][0].apply(f,arguments)},{"./shared/camelCasedEventTypes":393,"./shared/prefixHelper":394,"./shared/windowFallbackEventTypes":395,"./utils/eventTypeAvailable":396,dup:1}],393:[function(d,g,f){arguments[4][2][0].apply(f,arguments)
},{dup:2}],394:[function(d,g,f){arguments[4][3][0].apply(f,arguments)},{dup:3}],395:[function(d,g,f){arguments[4][4][0].apply(f,arguments)
},{dup:4}],396:[function(d,g,f){arguments[4][5][0].apply(f,arguments)},{dup:5}],397:[function(d,g,f){arguments[4][66][0].apply(f,arguments)
},{dup:66}],398:[function(d,g,f){arguments[4][67][0].apply(f,arguments)},{"./shared/getEventType":399,"./utils/removeEventListener":404,dup:67}],399:[function(d,g,f){arguments[4][68][0].apply(f,arguments)
},{"@marcom/ac-prefixer/getEventType":392,dup:68}],400:[function(d,g,f){arguments[4][70][0].apply(f,arguments)
},{dup:70}],401:[function(d,g,f){arguments[4][71][0].apply(f,arguments)},{dup:71}],402:[function(d,g,f){arguments[4][72][0].apply(f,arguments)
},{dup:72}],403:[function(d,g,f){arguments[4][73][0].apply(f,arguments)},{"@marcom/ac-polyfills/CustomEvent":391,dup:73}],404:[function(d,g,f){arguments[4][74][0].apply(f,arguments)
},{dup:74}],405:[function(d,g,f){arguments[4][142][0].apply(f,arguments)},{dup:142}],406:[function(d,g,f){arguments[4][143][0].apply(f,arguments)
},{dup:143}],407:[function(d,g,f){arguments[4][112][0].apply(f,arguments)},{dup:112}],408:[function(d,g,f){arguments[4][113][0].apply(f,arguments)
},{"@marcom/ac-dom-nodes/COMMENT_NODE":421,"@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":422,"@marcom/ac-dom-nodes/DOCUMENT_NODE":423,"@marcom/ac-dom-nodes/ELEMENT_NODE":425,"@marcom/ac-dom-nodes/TEXT_NODE":426,"@marcom/ac-dom-nodes/isNode":443,"@marcom/ac-polyfills/Array/prototype.indexOf":405,dup:113}],409:[function(d,g,f){arguments[4][114][0].apply(f,arguments)
},{"./internal/nativeMatches":407,"./internal/validate":408,"./shims/matchesSelector":411,"@marcom/ac-dom-nodes/isElement":442,dup:114}],410:[function(d,g,f){arguments[4][116][0].apply(f,arguments)
},{"./internal/validate":408,"./shims/querySelectorAll":412,"@marcom/ac-polyfills/Array/prototype.slice":406,dup:116}],411:[function(d,g,f){arguments[4][117][0].apply(f,arguments)
},{"../querySelectorAll":410,dup:117}],412:[function(d,g,f){arguments[4][119][0].apply(f,arguments)
},{"@marcom/ac-dom-nodes/isDocumentFragment":440,"@marcom/ac-dom-nodes/isElement":442,"@marcom/ac-dom-nodes/remove":446,"@marcom/ac-polyfills/Array/prototype.indexOf":405,dup:119}],413:[function(d,g,f){arguments[4][314][0].apply(f,arguments)
},{"./ac-event-emitter/EventEmitter":414,dup:314}],414:[function(d,g,f){arguments[4][315][0].apply(f,arguments)
},{dup:315}],415:[function(d,g,f){g.exports={DOMEmitter:d("./ac-dom-emitter/DOMEmitter")}
},{"./ac-dom-emitter/DOMEmitter":416}],416:[function(s,t,r){var q;var l=s("ac-event-emitter").EventEmitter,m=s("./DOMEmitterEvent"),p={addEventListener:s("@marcom/ac-dom-events/addEventListener"),removeEventListener:s("@marcom/ac-dom-events/removeEventListener"),dispatchEvent:s("@marcom/ac-dom-events/dispatchEvent")},u={querySelectorAll:s("@marcom/ac-dom-traversal/querySelectorAll"),matchesSelector:s("@marcom/ac-dom-traversal/matchesSelector")};
var n="dom-emitter";function o(a){if(a===null){return}this.el=a;this._bindings={};
this._delegateFuncs={};this._eventEmitter=new l()}q=o.prototype;q.on=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._on);
return this};q.once=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._once);
return this};q.off=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._off);
return this};q.has=function(b,d,f,h){var g,c;if(typeof d==="string"){g=d;c=f}else{c=d;
h=f}if(g){var a=this._getDelegateFuncBindingIdx(b,g,c,h,true);if(a>-1){return true
}return false}if(this._eventEmitter&&this._eventEmitter.has.apply(this._eventEmitter,arguments)){return true
}return false};q.trigger=function(i,a,h,c){i=this._parseEventNames(i);i=this._cleanStringData(i);
var f,d,g,b=i.length;if(typeof a==="string"){f=this._cleanStringData(a);d=h}else{d=a;
c=h}for(g=0;g<b;g++){this._triggerDOMEvents(i[g],d,f)}return this};q.emitterTrigger=function(a,d,c){if(!this._eventEmitter){return this
}a=this._parseEventNames(a);a=this._cleanStringData(a);d=new m(d,this);var f,b=a.length;
for(f=0;f<b;f++){this._eventEmitter.trigger(a[f],d,c)}return this};q.propagateTo=function(b,a){this._eventEmitter.propagateTo(b,a);
return this};q.stopPropagatingTo=function(a){this._eventEmitter.stopPropagatingTo(a);
return this};q.stopImmediatePropagation=function(){this._eventEmitter.stopImmediatePropagation();
return this};q.destroy=function(){this._triggerInternalEvent("willdestroy");this.off();
var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null}}};q._parseEventNames=function(a){if(!a){return[a]
}return a.split(" ")};q._onListenerEvent=function(c,a){var b=new m(a,this);this._eventEmitter.trigger(c,b,false)
};q._setListener=function(a){this._bindings[a]=this._onListenerEvent.bind(this,a);
p.addEventListener(this.el,a,this._bindings[a])};q._removeListener=function(a){p.removeEventListener(this.el,a,this._bindings[a]);
this._bindings[a]=null};q._triggerInternalEvent=function(b,a){this.emitterTrigger(n+":"+b,a)
};q._normalizeArgumentsAndCall=function(b,h){var c={};if(b.length===0){h.call(this,c);
return}if(typeof b[0]==="string"||b[0]===null){b=this._cleanStringData(b);c.events=b[0];
if(typeof b[1]==="string"){c.delegateQuery=b[1];c.callback=b[2];c.context=b[3]}else{c.callback=b[1];
c.context=b[2]}h.call(this,c);return}var a,f,d=":",g=b[0];for(a in g){if(g.hasOwnProperty(a)){c={};
f=this._cleanStringData(a.split(d));c.events=f[0];c.delegateQuery=f[1];c.callback=g[a];
c.context=b[1];h.call(this,c)}}};q._registerDelegateFunc=function(g,d,c,b,f){var a=this._delegateFunc.bind(this,g,d,c,f);
this._delegateFuncs[d]=this._delegateFuncs[d]||{};this._delegateFuncs[d][g]=this._delegateFuncs[d][g]||[];
this._delegateFuncs[d][g].push({func:b,context:f,delegateFunc:a});return a};q._cleanStringData=function(h){var i=false;
if(typeof h==="string"){h=[h];i=true}var a=[],f,c,d,g,b=h.length;for(f=0;f<b;f++){c=h[f];
if(typeof c==="string"){if(c===""||c===" "){continue}d=c.length;while(c[0]===" "){c=c.slice(1,d);
d--}while(c[d-1]===" "){c=c.slice(0,d-1);d--}}a.push(c)}if(i){return a[0]}return a
};q._unregisterDelegateFunc=function(g,c,b,d){if(!this._delegateFuncs[c]||!this._delegateFuncs[c][g]){return
}var f=this._getDelegateFuncBindingIdx(g,c,b,d),a;if(f>-1){a=this._delegateFuncs[c][g][f].delegateFunc;
this._delegateFuncs[c][g].splice(f,1);if(this._delegateFuncs[c][g].length===0){this._delegateFuncs[c][g]=null
}}return a};q._unregisterDelegateFuncs=function(b,c){if(!this._delegateFuncs[c]){return
}if(b!==null&&!this._delegateFuncs[c][b]){return}if(b===null){var a;for(a in this._delegateFuncs[c]){if(this._delegateFuncs[c].hasOwnProperty(a)){this._unbindDelegateFunc(a,c)
}}return}this._unbindDelegateFunc(b,c)};q._unbindDelegateFunc=function(b,f){var d,c,a=0;
while(this._delegateFuncs[f][b]&&this._delegateFuncs[f][b][a]){d=this._delegateFuncs[f][b][a];
c=this._delegateFuncs[f][b][a].length;this._off({events:b,delegateQuery:f,callback:d.func,context:d.context});
if(this._delegateFuncs[f][b]&&c===this._delegateFuncs[f][b].length){a++}}d=c=null
};q._unregisterDelegateFuncsByEvent=function(b){var a;for(a in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(a)){this._unregisterDelegateFuncs(b,a)
}}};q._delegateFunc=function(b,f,c,h,d){if(this._targetHasDelegateAncestor(d.target,f)){var a=Array.prototype.slice.call(arguments,0),g=a.slice(4,a.length);
h=h||window;if(typeof d.detail==="object"){g[0]=d.detail}c.apply(h,g)}};q._targetHasDelegateAncestor=function(c,a){var b=c;
while(b&&b!==this.el&&b!==document.documentElement){if(u.matchesSelector(b,a)){return true
}b=b.parentNode}return false};q._on=function(d){var a=d.events,c=d.callback,f=d.delegateQuery,g=d.context,b=d.unboundCallback||c;
a=this._parseEventNames(a);a.forEach(function(h,w,j,i,k){if(!this.has(k)){this._setListener(k)
}if(typeof i==="string"){h=this._registerDelegateFunc(k,i,h,w,j)}this._triggerInternalEvent("willon",{evt:k,callback:h,context:j,delegateQuery:i});
this._eventEmitter.on(k,h,j);this._triggerInternalEvent("didon",{evt:k,callback:h,context:j,delegateQuery:i})
}.bind(this,c,b,g,f));a=c=b=f=g=null};q._off=function(d){var a=d.events,c=d.callback,f=d.delegateQuery,g=d.context,b=d.unboundCallback||c;
if(typeof a==="undefined"){this._eventEmitter.off();var h;for(h in this._bindings){if(this._bindings.hasOwnProperty(h)){this._removeListener(h)
}}for(h in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(h)){this._delegateFuncs[h]=null
}}return}a=this._parseEventNames(a);a.forEach(function(i,y,k,j,x){if(typeof j==="string"&&typeof y==="function"){i=this._unregisterDelegateFunc(x,j,y,k);
if(!i){return}}if(typeof j==="string"&&typeof i==="undefined"){this._unregisterDelegateFuncs(x,j);
return}if(typeof x==="string"&&typeof i==="undefined"){this._unregisterDelegateFuncsByEvent(x);
if(typeof j==="string"){return}}this._triggerInternalEvent("willoff",{evt:x,callback:i,context:k,delegateQuery:j});
this._eventEmitter.off(x,i,k);this._triggerInternalEvent("didoff",{evt:x,callback:i,context:k,delegateQuery:j});
if(!this.has(x)){this._removeListener(x)}}.bind(this,c,b,g,f));a=c=b=f=g=null};
q._once=function(d){var b=d.events,c=d.callback,f=d.delegateQuery,a=d.context;b=this._parseEventNames(b);
b.forEach(function(g,i,h,j){if(typeof h==="string"){return this._handleDelegateOnce(j,g,i,h)
}if(!this.has(j)){this._setListener(j)}this._triggerInternalEvent("willonce",{evt:j,callback:g,context:i,delegateQuery:h});
this._eventEmitter.once.call(this,j,g,i);this._triggerInternalEvent("didonce",{evt:j,callback:g,context:i,delegateQuery:h})
}.bind(this,c,a,f));b=c=f=a=null};q._handleDelegateOnce=function(b,c,a,d){this._triggerInternalEvent("willonce",{evt:b,callback:c,context:a,delegateQuery:d});
this._on({events:b,context:a,delegateQuery:d,callback:this._getDelegateOnceCallback.bind(this,b,c,a,d),unboundCallback:c});
this._triggerInternalEvent("didonce",{evt:b,callback:c,context:a,delegateQuery:d});
return this};q._getDelegateOnceCallback=function(b,c,g,d){var a=Array.prototype.slice.call(arguments,0),f=a.slice(4,a.length);
c.apply(g,f);this._off({events:b,delegateQuery:d,callback:c,context:g})};q._getDelegateFuncBindingIdx=function(j,c,f,h,i){var a=-1;
if(this._delegateFuncs[c]&&this._delegateFuncs[c][j]){var d,g,b=this._delegateFuncs[c][j].length;
for(d=0;d<b;d++){g=this._delegateFuncs[c][j][d];if(i&&typeof f==="undefined"){f=g.func
}if(g.func===f&&g.context===h){a=d;break}}}return a};q._triggerDOMEvents=function(h,d,f){var a=[this.el];
if(f){a=u.querySelectorAll(f,this.el)}var g,c,b=a.length;for(g=0;g<b;g++){p.dispatchEvent(a[g],h,{bubbles:true,cancelable:true,detail:d})
}};t.exports=o},{"./DOMEmitterEvent":417,"@marcom/ac-dom-events/addEventListener":389,"@marcom/ac-dom-events/dispatchEvent":390,"@marcom/ac-dom-events/removeEventListener":398,"@marcom/ac-dom-traversal/matchesSelector":409,"@marcom/ac-dom-traversal/querySelectorAll":410,"ac-event-emitter":413}],417:[function(h,m,i){var k={preventDefault:h("@marcom/ac-dom-events/preventDefault"),stopPropagation:h("@marcom/ac-dom-events/stopPropagation"),target:h("@marcom/ac-dom-events/target")};
var l;var j=function(a,b){this._domEmitter=b;this.originalEvent=a||{};this._originalTarget=k.target(this.originalEvent);
this.target=this._originalTarget||this._domEmitter.el;this.currentTarget=this._domEmitter.el;
this.timeStamp=this.originalEvent.timeStamp||Date.now();if(this._isDOMEvent(this.originalEvent)){if(typeof this.originalEvent.detail==="object"){this.data=this.originalEvent.detail
}}else{if(a){this.data=this.originalEvent;this.originalEvent={}}}};l=j.prototype;
l.preventDefault=function(){k.preventDefault(this.originalEvent)};l.stopPropagation=function(){k.stopPropagation(this.originalEvent)
};l.stopImmediatePropagation=function(){if(this.originalEvent.stopImmediatePropagation){this.originalEvent.stopImmediatePropagation()
}this._domEmitter.stopImmediatePropagation()};l._isDOMEvent=function(a){if(this._originalTarget||(document.createEvent!=="undefined"&&typeof CustomEvent!=="undefined"&&a instanceof CustomEvent)){return true
}return false};m.exports=j},{"@marcom/ac-dom-events/preventDefault":397,"@marcom/ac-dom-events/stopPropagation":400,"@marcom/ac-dom-events/target":401}],418:[function(d,g,f){arguments[4][140][0].apply(f,arguments)
},{dup:140}],419:[function(d,g,f){arguments[4][142][0].apply(f,arguments)},{dup:142}],420:[function(d,g,f){arguments[4][143][0].apply(f,arguments)
},{dup:143}],421:[function(d,g,f){arguments[4][100][0].apply(f,arguments)},{dup:100}],422:[function(d,g,f){arguments[4][101][0].apply(f,arguments)
},{dup:101}],423:[function(d,g,f){arguments[4][102][0].apply(f,arguments)},{dup:102}],424:[function(d,g,f){g.exports=10
},{}],425:[function(d,g,f){arguments[4][103][0].apply(f,arguments)},{dup:103}],426:[function(d,g,f){arguments[4][104][0].apply(f,arguments)
},{dup:104}],427:[function(d,g,f){g.exports={createDocumentFragment:d("./createDocumentFragment"),filterByNodeType:d("./filterByNodeType"),hasAttribute:d("./hasAttribute"),indexOf:d("./indexOf"),insertAfter:d("./insertAfter"),insertBefore:d("./insertBefore"),insertFirstChild:d("./insertFirstChild"),insertLastChild:d("./insertLastChild"),isComment:d("./isComment"),isDocument:d("./isDocument"),isDocumentFragment:d("./isDocumentFragment"),isDocumentType:d("./isDocumentType"),isElement:d("./isElement"),isNode:d("./isNode"),isNodeList:d("./isNodeList"),isTextNode:d("./isTextNode"),remove:d("./remove"),replace:d("./replace"),COMMENT_NODE:d("./COMMENT_NODE"),DOCUMENT_FRAGMENT_NODE:d("./DOCUMENT_FRAGMENT_NODE"),DOCUMENT_NODE:d("./DOCUMENT_NODE"),DOCUMENT_TYPE_NODE:d("./DOCUMENT_TYPE_NODE"),ELEMENT_NODE:d("./ELEMENT_NODE"),TEXT_NODE:d("./TEXT_NODE")}
},{"./COMMENT_NODE":421,"./DOCUMENT_FRAGMENT_NODE":422,"./DOCUMENT_NODE":423,"./DOCUMENT_TYPE_NODE":424,"./ELEMENT_NODE":425,"./TEXT_NODE":426,"./createDocumentFragment":428,"./filterByNodeType":429,"./hasAttribute":430,"./indexOf":431,"./insertAfter":432,"./insertBefore":433,"./insertFirstChild":434,"./insertLastChild":435,"./isComment":438,"./isDocument":439,"./isDocumentFragment":440,"./isDocumentType":441,"./isElement":442,"./isNode":443,"./isNodeList":444,"./isTextNode":445,"./remove":446,"./replace":447}],428:[function(i,h,f){h.exports=function g(b){var c=document.createDocumentFragment();
var a;if(b){a=document.createElement("div");a.innerHTML=b;while(a.firstChild){c.appendChild(a.firstChild)
}}return c}},{}],429:[function(l,k,m){l("@marcom/ac-polyfills/Array/prototype.slice");
l("@marcom/ac-polyfills/Array/prototype.filter");var j=l("./internal/isNodeType");
var i=l("./ELEMENT_NODE");k.exports=function h(a,b){b=b||i;a=Array.prototype.slice.call(a);
return a.filter(function(c){return j(c,b)})}},{"./ELEMENT_NODE":425,"./internal/isNodeType":436,"@marcom/ac-polyfills/Array/prototype.filter":418,"@marcom/ac-polyfills/Array/prototype.slice":420}],430:[function(i,h,g){h.exports=function f(a,b){if("hasAttribute" in a){return a.hasAttribute(b)
}return(a.attributes.getNamedItem(b)!==null)}},{}],431:[function(m,l,h){m("@marcom/ac-polyfills/Array/prototype.indexOf");
m("@marcom/ac-polyfills/Array/prototype.slice");var j=m("./internal/validate");
var i=m("./filterByNodeType");l.exports=function k(a,c){var d=a.parentNode;var b;
if(!d){return 0}b=d.childNodes;if(c!==false){b=i(b,c)}else{b=Array.prototype.slice.call(b)
}return b.indexOf(a)}},{"./filterByNodeType":429,"./internal/validate":437,"@marcom/ac-polyfills/Array/prototype.indexOf":419,"@marcom/ac-polyfills/Array/prototype.slice":420}],432:[function(g,k,h){var i=g("./internal/validate");
k.exports=function j(b,a){i.insertNode(b,true,"insertAfter");i.childNode(a,true,"insertAfter");
i.hasParentNode(a,"insertAfter");if(!a.nextSibling){return a.parentNode.appendChild(b)
}return a.parentNode.insertBefore(b,a.nextSibling)}},{"./internal/validate":437}],433:[function(k,j,h){var i=k("./internal/validate");
j.exports=function g(b,a){i.insertNode(b,true,"insertBefore");i.childNode(a,true,"insertBefore");
i.hasParentNode(a,"insertBefore");return a.parentNode.insertBefore(b,a)}},{"./internal/validate":437}],434:[function(k,j,g){var i=k("./internal/validate");
j.exports=function h(b,a){i.insertNode(b,true,"insertFirstChild");i.parentNode(a,true,"insertFirstChild");
if(!a.firstChild){return a.appendChild(b)}return a.insertBefore(b,a.firstChild)
}},{"./internal/validate":437}],435:[function(g,k,h){var j=g("./internal/validate");
k.exports=function i(b,a){j.insertNode(b,true,"insertLastChild");j.parentNode(a,true,"insertLastChild");
return a.appendChild(b)}},{"./internal/validate":437}],436:[function(d,g,f){arguments[4][105][0].apply(f,arguments)
},{"../isNode":443,dup:105}],437:[function(d,g,f){arguments[4][106][0].apply(f,arguments)
},{"../COMMENT_NODE":421,"../DOCUMENT_FRAGMENT_NODE":422,"../ELEMENT_NODE":425,"../TEXT_NODE":426,"./isNodeType":436,dup:106}],438:[function(m,l,i){var j=m("./internal/isNodeType");
var k=m("./COMMENT_NODE");l.exports=function h(a){return j(a,k)}},{"./COMMENT_NODE":421,"./internal/isNodeType":436}],439:[function(m,l,h){var j=m("./internal/isNodeType");
var i=m("./DOCUMENT_NODE");l.exports=function k(a){return j(a,i)}},{"./DOCUMENT_NODE":423,"./internal/isNodeType":436}],440:[function(d,g,f){arguments[4][107][0].apply(f,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":422,"./internal/isNodeType":436,dup:107}],441:[function(h,m,i){var j=h("./internal/isNodeType");
var k=h("./DOCUMENT_TYPE_NODE");m.exports=function l(a){return j(a,k)}},{"./DOCUMENT_TYPE_NODE":424,"./internal/isNodeType":436}],442:[function(d,g,f){arguments[4][108][0].apply(f,arguments)
},{"./ELEMENT_NODE":425,"./internal/isNodeType":436,dup:108}],443:[function(d,g,f){arguments[4][109][0].apply(f,arguments)
},{dup:109}],444:[function(d,g,f){arguments[4][277][0].apply(f,arguments)},{dup:277}],445:[function(m,l,i){var j=m("./internal/isNodeType");
var h=m("./TEXT_NODE");l.exports=function k(a){return j(a,h)}},{"./TEXT_NODE":426,"./internal/isNodeType":436}],446:[function(d,g,f){arguments[4][110][0].apply(f,arguments)
},{"./internal/validate":437,dup:110}],447:[function(g,j,h){var i=g("./internal/validate");
j.exports=function k(b,a){i.insertNode(b,true,"insertFirstChild","newNode");i.childNode(a,true,"insertFirstChild","oldNode");
i.hasParentNode(a,"insertFirstChild","oldNode");return a.parentNode.replaceChild(b,a)
}},{"./internal/validate":437}],448:[function(d,g,f){arguments[4][86][0].apply(f,arguments)
},{"./getStyleProperty":449,"./getStyleValue":450,"./shared/stylePropertyCache":453,dup:86}],449:[function(d,g,f){arguments[4][14][0].apply(f,arguments)
},{"./shared/getStyleTestElement":451,"./shared/prefixHelper":452,"./shared/stylePropertyCache":453,"./utils/toCSS":456,"./utils/toDOM":457,dup:14}],450:[function(d,g,f){arguments[4][15][0].apply(f,arguments)
},{"./getStyleProperty":449,"./shared/prefixHelper":452,"./shared/stylePropertyCache":453,"./shared/styleValueAvailable":454,dup:15}],451:[function(d,g,f){arguments[4][17][0].apply(f,arguments)
},{dup:17}],452:[function(d,g,f){arguments[4][3][0].apply(f,arguments)},{dup:3}],453:[function(d,g,f){arguments[4][19][0].apply(f,arguments)
},{dup:19}],454:[function(d,g,f){arguments[4][20][0].apply(f,arguments)},{"./getStyleTestElement":451,"./stylePropertyCache":453,dup:20}],455:[function(d,g,f){arguments[4][93][0].apply(f,arguments)
},{dup:93}],456:[function(d,g,f){arguments[4][23][0].apply(f,arguments)},{dup:23}],457:[function(d,g,f){arguments[4][24][0].apply(f,arguments)
},{dup:24}],458:[function(d,g,f){arguments[4][96][0].apply(f,arguments)},{"./getStyle":459,"./setStyle":461,dup:96}],459:[function(d,g,f){arguments[4][97][0].apply(f,arguments)
},{"@marcom/ac-prefixer/getStyleProperty":449,"@marcom/ac-prefixer/stripPrefixes":455,dup:97}],460:[function(d,g,f){arguments[4][98][0].apply(f,arguments)
},{dup:98}],461:[function(d,g,f){arguments[4][99][0].apply(f,arguments)},{"./internal/normalizeValue":460,"@marcom/ac-prefixer/getStyleCSS":448,"@marcom/ac-prefixer/getStyleProperty":449,dup:99}],462:[function(d,g,f){arguments[4][309][0].apply(f,arguments)
},{"./ac-ajax/Ajax":463,"./ac-ajax/Request":464,dup:309}],463:[function(d,g,f){arguments[4][310][0].apply(f,arguments)
},{"./Request":464,"./URLParser":465,"./XDomain-request":466,dup:310}],464:[function(d,g,f){arguments[4][311][0].apply(f,arguments)
},{dup:311}],465:[function(d,g,f){arguments[4][312][0].apply(f,arguments)},{dup:312}],466:[function(d,g,f){arguments[4][313][0].apply(f,arguments)
},{"./Request":464,dup:313}],467:[function(d,g,f){arguments[4][314][0].apply(f,arguments)
},{"./ac-event-emitter/EventEmitter":468,dup:314}],468:[function(d,g,f){arguments[4][315][0].apply(f,arguments)
},{dup:315}],469:[function(d,g,f){arguments[4][373][0].apply(f,arguments)},{dup:373}],470:[function(d,g,f){arguments[4][374][0].apply(f,arguments)
},{dup:374}],471:[function(d,g,f){arguments[4][375][0].apply(f,arguments)},{"./ac-deferred/Deferred":470,dup:375,"smartsign-deferred":469}],472:[function(d,g,f){d("@marcom/ac-polyfills");
g.exports.Asset=d("./ac-asset-loader/AssetLoader/Asset");g.exports.Asset.Ajax=d("./ac-asset-loader/AssetLoader/Asset/Ajax");
g.exports.Asset.Ajax.JSON=d("./ac-asset-loader/AssetLoader/Asset/Ajax/JSON");g.exports.Asset.Img=d("./ac-asset-loader/AssetLoader/Asset/Img");
g.exports.Asset.Video=d("./ac-asset-loader/AssetLoader/Asset/Video");g.exports.Asset.Binary=d("./ac-asset-loader/AssetLoader/Asset/Binary");
g.exports.Asset.Binary.Chunk=d("./ac-asset-loader/AssetLoader/Asset/Binary/Chunk");
g.exports.AssetLoader=d("./ac-asset-loader/AssetLoader");g.exports.AssetLoader.Queue=d("./ac-asset-loader/AssetLoader/Queue")
},{"./ac-asset-loader/AssetLoader":473,"./ac-asset-loader/AssetLoader/Asset":474,"./ac-asset-loader/AssetLoader/Asset/Ajax":475,"./ac-asset-loader/AssetLoader/Asset/Ajax/JSON":476,"./ac-asset-loader/AssetLoader/Asset/Binary":477,"./ac-asset-loader/AssetLoader/Asset/Binary/Chunk":478,"./ac-asset-loader/AssetLoader/Asset/Img":479,"./ac-asset-loader/AssetLoader/Asset/Video":482,"./ac-asset-loader/AssetLoader/Queue":483,"@marcom/ac-polyfills":536}],473:[function(B,C,w){var u;
var x=B("@marcom/ac-object");var p=B("@marcom/ac-event-emitter").EventEmitter;var q=B("./AssetLoader/Asset/Ajax");
var y=B("./AssetLoader/Asset/Ajax/JSON");var v=B("./AssetLoader/Asset/Img");var r=B("./AssetLoader/Asset/Video");
var s=B("../utils/destroy");var A=B("./AssetLoader/Queue");var z={};function t(a,c){this.options=x.defaults(z,c||{});
var b=this._generateAssets(a);this._timeoutDuration=this.options.timeout;this._timeout=null;
this._proxyListeners();this.add(b,this.options)}u=t.prototype=new p();u.load=function(){if(this._timeoutDuration){this._timeout=window.setTimeout(this._onTimeout.bind(this),this._timeoutDuration)
}return this._queue.start()};u._clearTimeout=function(){window.clearTimeout(this._timeout);
this._timeout=null};u.pause=function(){this._clearTimeout();return this._queue.pause()
};u.destroy=function(){s(this,true)};u.add=function(a){if(!Array.isArray(a)){a=[a]
}a=this._generateAssets(a);if(!this._queue||this._queue.loaded){if(this._queue){this._queue.destroy()
}this._queue=new A(a,this.options);this._bindQueueListeners();return}this._queue.add(a)
};u._onTimeout=function(){this._queue.abort();this._queue.destroy();this.trigger("timeout")
};u._generateAssets=function(a){if(this._boundGenerateAsset===undefined){this._boundGenerateAsset=this._generateAsset.bind(this)
}a=[].concat(a);var b=a.map(this._boundGenerateAsset);return b};u._generateAsset=function(a,b){if(t.isValidAsset(a)){a.index=b;
return a}if(typeof a!=="string"||a===""){return null}if(!!a.match(/\.json$/)){return new y(a,b)
}if(!!a.match(/\.(xml|txt)$/)){return new q(a,b)}return new v(a,b)};u._proxyListeners=function(){this._boundOnResolved=this._onResolved.bind(this);
this._boundOnRejected=this._onRejected.bind(this);this._boundOnProgress=this._onProgress.bind(this)
};u._bindQueueListeners=function(){this._queue.on("resolved",this._boundOnResolved);
this._queue.on("rejected",this._boundOnRejected);this._queue.on("progress",this._boundOnProgress)
};u._onResolved=function(a){this._clearTimeout();this.trigger("loaded",a)};u._onRejected=function(a){this.trigger("error",a)
};u._onProgress=function(a){this.trigger("progress",a)};t.isValidAsset=function(a){return !!(a&&(typeof a.load==="function")&&(typeof a.destroy==="function"))
};t.isValidAssetLoader=function(a){return !!(a&&(typeof a.load==="function")&&(typeof a.pause==="function")&&(typeof a.destroy==="function"))
};C.exports=t},{"../utils/destroy":484,"./AssetLoader/Asset/Ajax":475,"./AssetLoader/Asset/Ajax/JSON":476,"./AssetLoader/Asset/Img":479,"./AssetLoader/Asset/Video":482,"./AssetLoader/Queue":483,"@marcom/ac-event-emitter":467,"@marcom/ac-object":590}],474:[function(p,n,j){var l;
var q=p("ac-deferred").Deferred;var m=p("@marcom/ac-event-emitter").EventEmitter;
var o=p("../../utils/destroy");function k(a,b){this.src=a;this.index=b;this.data=null;
this._boundOnLoad=this._onLoad.bind(this);this._boundOnError=this._onError.bind(this)
}l=k.prototype=new m();l.load=function(){this._load()};l.destroy=function(){o(this)
};l._load=function(){this.data={src:this.src};window.setTimeout(this._onLoad.bind(this),20)
};l._onLoad=function(){this.trigger("loaded",this)};l._onError=function(){this.trigger("error",this.data)
};n.exports=k},{"../../utils/destroy":484,"@marcom/ac-event-emitter":467,"ac-deferred":471}],475:[function(p,n,j){var l;
var q=p("@marcom/ac-ajax");var k=p("@marcom/ac-object");var m=p("../Asset");function o(a,b){m.apply(this,arguments)
}l=o.prototype=k.create(m.prototype);l._load=function(){q.get({url:this.src}).then(this._boundOnLoad,this._boundOnError)
};l._onLoad=function(a){this.data=a.response;m.prototype._onLoad.call(this)};n.exports=o
},{"../Asset":474,"@marcom/ac-ajax":462,"@marcom/ac-object":590}],476:[function(o,n,i){var l;
var j=o("@marcom/ac-object");var m=o("../Ajax");function k(a){m.apply(this,arguments)
}l=k.prototype=j.create(m.prototype);l._onLoad=function(a){try{m.prototype._onLoad.call(this,{response:JSON.parse(a.response||a.responseText)})
}catch(b){this._onError(b)}};n.exports=k},{"../Ajax":475,"@marcom/ac-object":590}],477:[function(t,u,q){var l=t("@marcom/ac-ajax");
var r=t("@marcom/ac-object");var m=t("./Binary/Chunk");var n=t("./../Asset");var s={chunkSize:1024*1024};
function p(a,b){n.apply(this,arguments);this.options=r.defaults(s,b||{});this._totalSize=null;
this._rangeObjects={};this._contentType=null;this._request=null;this._numLoaded=0;
this._numRanges=0}var o=p.prototype=r.create(n.prototype);o.pause=function(){var a;
if(this._request!==null){this._request.xhr.abort()}for(a in this._rangeObjects){if(this._rangeObjects[a].isLoaded()===false){this._rangeObjects[a].pause()
}}};o._load=function(){if(this._boundQueueRangeRequests===undefined){this._boundQueueRangeRequests=this._queueRangeRequests.bind(this)
}if(this._totalSize===null){this._getMetaData().then(this._boundQueueRangeRequests)
}else{this._queueRangeRequests()}};o._getOrCreateRangeObject=function(d){var a=this._rangeObjects[d.toString()];
var b;var c;if(a===undefined){b=(this.options.chunkSize-1);c=d+b;if(c>this._totalSize){b=null
}a=this._rangeObjects[d.toString()]=new m(this.src,{start:d,length:b});this._numRanges+=1
}return a};o._onRangeLoad=function(){this._numLoaded+=1;if(this._numLoaded===this._numRanges){this._afterAllChunksLoaded()
}};o._queueRangeRequests=function(){var d;var f=[];var c;var b;var a;for(var g=0;
g<this._totalSize;g+=this.options.chunkSize){a=this._getOrCreateRangeObject(g);
a.on("loaded",this._onRangeLoad,this);a.load()}};o._afterAllChunksLoaded=function(){var b;
var c=[];for(var a in this._rangeObjects){c.push(this._rangeObjects[a].data)}b=new Blob(c,{type:this._contentType});
this.trigger("loaded",b)};o._afterHeadRequest=function(a){this._totalSize=parseInt(a.getResponseHeader(["Content-Length"]));
this._contentType=a.getResponseHeader(["Content-Type"]);this._request=null};o._getMetaData=function(){if(!this._boundAfterHeadRequest){this._boundAfterHeadRequest=this._afterHeadRequest.bind(this)
}this._request=l.create({method:"HEAD",url:this.src,timeout:2*1000});return this._request.send().then(this._boundAfterHeadRequest,this._boundOnError)
};u.exports=p},{"./../Asset":474,"./Binary/Chunk":478,"@marcom/ac-ajax":462,"@marcom/ac-object":590}],478:[function(r,s,o){var n;
var k=r("@marcom/ac-ajax");var p=r("@marcom/ac-object");var m=r("../../Asset");
var q={start:0,length:null};function l(a,b){m.apply(this,arguments);this.options=p.defaults(q,b||{});
this._request=null;this.data=null}n=l.prototype=p.create(m.prototype);n.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};n.isLoaded=function(){return(this.data!==null)};n._load=function(){this._request=k.create({url:this.src+"?"+this._buildQueryString(),method:"get",timeout:30*1000,headers:[{name:"Range",value:this._buildRangeString()}]});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};n._onLoad=function(a){this.data=a.response;this._request=null;m.prototype._onLoad.call(this,this.data)
};n._buildRangeString=function(){var a="bytes="+this.options.start+"-";if(this.options.length!==null){a+=(this.options.start+this.options.length)
}return a};n._buildQueryString=function(){var a=this.options.start.toString();if(this.options.length!==undefined){a+=(this.options.start+this.options.length)
}return a};s.exports=l},{"../../Asset":474,"@marcom/ac-ajax":462,"@marcom/ac-object":590}],479:[function(o,n,i){var l;
var j=o("@marcom/ac-object");var m=o("../Asset");function k(a,b){m.apply(this,arguments)
}l=k.prototype=j.create(m.prototype);l._load=function(){var a=new Image();this.data=a;
this._boundOnLoad=this._onLoad.bind(this);a.onload=this._boundOnLoad;a.onerror=this._boundOnError;
a.src=this.src};n.exports=k},{"../Asset":474,"@marcom/ac-object":590}],480:[function(r,u,o){var l=r("@marcom/ac-ajax").Ajax,p=r("@marcom/ac-object"),m=r("./SplitFile/Chunk"),t=r("../Asset");
var n;var q={splitManifestTimeout:5000,splitChunkTimeout:null};var s=function(a,b){t.apply(this,arguments);
if(a.lastIndexOf("/")!==a.length-1){a=a+"/"}this.options=p.extend(q,b||{});this._manifestPath=a+"manifest.json";
this._ajax=new l();this._request=null;this._chunksLoaded=0;this._chunksLen=null;
this._chunks=[];this._boundOnManifestLoaded=this._onManifestLoaded.bind(this)};
n=s.prototype=p.create(t.prototype);n._load=function(){var a={method:"get",url:this._manifestPath,timeout:this.options.manifestTimeout};
this._request=this._ajax.create(a);this._request.send().then(this._boundOnManifestLoaded)
};n._onManifestLoaded=function(c){this._manifest=JSON.parse(c.responseText);this._chunksLen=this._manifest.files.length;
var f,d=this._manifest.files,a,b=this._chunksLen;for(f=0;f<b;f++){a=this._getOrCreateChunkObject(d[f],f);
a.once("loaded",this._onChunkLoaded,this);a.load()}this._request=null;this._ajax=null
};n._getOrCreateChunkObject=function(g,b){var f=this.options.splitChunkTimeout?{timeout:this.options.splitChunkTimeout}:null;
if(!this._chunks[b]){var c=g.path;if(!c.match(/(^http(s?))/)){c=this.src+"/"+c}else{if(!!this.src.match(/(^http(s?))/)){var d=c.indexOf("/",10);
var a=this.src.indexOf("/",10);c=this.src.substring(0,a)+c.substring(d)}}this._chunks[b]=new m(c,f)
}return this._chunks[b]};n._onChunkLoaded=function(){this._chunksLoaded++;if(this._chunksLoaded===this._chunksLen){var c,b=this._chunks.length,a=[];
for(c=0;c<b;c++){a.push(this._chunks[c].data);this._chunks[c].off()}this.data=new Blob(a,{type:this._manifest.mimeType});
a=this._chunks=null;this.trigger("loaded",this.data)}};n.pause=function(){if(this._request!==null){if(this._request.xhr!==null){this._request.xhr.abort()
}this._request=null}this.data=null;this._chunks=null};u.exports=s},{"../Asset":474,"./SplitFile/Chunk":481,"@marcom/ac-ajax":462,"@marcom/ac-object":590}],481:[function(q,s,n){var m;
var k=q("@marcom/ac-ajax");var o=q("@marcom/ac-object");var r=q("../../Asset");
var p={timeout:30*1000};function l(a,b){r.apply(this,arguments);this.options=o.extend(p,b||{});
this._request=null;this.data=null}m=l.prototype=o.create(r.prototype);m.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};m.isLoaded=function(){return(this.data!==null)};m._load=function(){this._request=k.create({url:this.src,method:"get",timeout:this.options.timeout});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};m._onLoad=function(a){this.data=a.response;this._request=null;r.prototype._onLoad.call(this,this.data)
};s.exports=l},{"../../Asset":474,"@marcom/ac-ajax":462,"@marcom/ac-object":590}],482:[function(u,w,q){var o;
var r=u("@marcom/ac-feature");var s=u("@marcom/ac-object");var p=u("./Binary");
var n=u("../Asset");var v=u("./SplitFile");var t={chunkSize:1024*1024,split:false};
function m(b,a){n.apply(this,arguments);this.options=s.defaults(t,a||{});this._binary=this.options.binary||this._createAssetType()
}o=m.prototype=s.create(n.prototype);o._canUseBlob=function(){return(window.Blob!==undefined&&window.URL!==undefined&&typeof window.URL.createObjectURL==="function"&&r.isDesktop()===true)
};o._createAssetType=function(){if(this._canUseBlob()){if(this.options.split){return new v(this.src,this.options)
}return new p(this.src,this.options)}};o._load=function(){this._binary.on("loaded",this._boundOnLoad);
this._binary.on("error",this._boundOnError);this._binary.load()};o._onLoad=function(b){var a=b;
if(b instanceof window.Blob){a=this.options.element;if(!a){a=document.createElement("video")
}if(a.getAttribute("type")!==b.type){a.setAttribute("type",b.type)}a.src=window.URL.createObjectURL(b)
}n.prototype._onLoad.call(this,a)};o.pause=function(){this._binary.pause()};o.destroy=function(){this._binary.destroy();
n.prototype.destroy.call(this)};w.exports=m},{"../Asset":474,"./Binary":477,"./SplitFile":480,"@marcom/ac-feature":25,"@marcom/ac-object":590}],483:[function(t,u,p){var o;
var q=t("@marcom/ac-object");var n=t("ac-deferred").Deferred;var l=t("@marcom/ac-event-emitter").EventEmitter;
var m=t("../../utils/destroy");var r={threads:4};function s(a,b){this.options=q.defaults(r,b||{});
this._queue=a;this._active=[];this._allowedThreads=this.options.threads;this._availableThreads=this._allowedThreads;
this._deferred=new n();this._data=[];this.paused=true;this.loaded=false;this.promise=this._deferred.promise()
}o=s.prototype=new l();o.start=function(){var a=this._availableThreads;var b;this.paused=false;
if(a>this._queue.length){a=this._queue.length}for(b=1;b<=a;b++){this._startNewThread()
}return this.promise};o.pause=function(){this.paused=true;var a=[];this._active.forEach(function(c,b){if(typeof c.pause==="function"){this._queue.unshift(c);
this._releaseThread();c.off("loaded");c.off("error");c.pause();a.push(b)}},this);
a.forEach(function(b){this._active.splice(b,1)},this)};o.add=function(a){this._queue=this._queue.concat(a)
};o.destroy=function(){this.pause();m(this)};o._startNewThread=function(){var a=this._queue.shift();
this._occupyThread();if(a&&typeof a.load==="function"){var b=function(d){this._onProgress(d);
this._active.splice(this._active.indexOf(a),1);a.off("error",c)};var c=function(d){this._onError();
a.off("loaded",b)};a.once("loaded",b,this);a.once("error",c,this);a.load()}else{this._onError()
}this._active.push(a)};o._onResolved=function(){if(this._errored){return false}this._deferred.resolve(this._data);
this.trigger("resolved",this._data)};o._onError=function(a){if(this._errored){return false
}this._errored=true;this._deferred.reject(a);this.trigger("rejected",a)};o.abort=function(){this._deferred.reject()
};o._onProgress=function(a){if(this._errored){return false}this._releaseThread();
this._data[a.index]=a.data;this.trigger("progress",a.data);if(this._queue.length<=0){if(this._availableThreads>=this._allowedThreads){this._onResolved()
}}else{if(!this.paused&&!this._errored){this._startNewThread()}}};o._occupyThread=function(){this._availableThreads--;
if(this._availableThreads<0){throw"AssetLoader.Queue: Available thread count cannot be negative."
}};o._releaseThread=function(){this._availableThreads++;if(this._availableThreads>this._allowedThreads){throw"AssetLoader.Queue: Available thread count cannot be more than allowed thread amount."
}};u.exports=s},{"../../utils/destroy":484,"@marcom/ac-event-emitter":467,"@marcom/ac-object":590,"ac-deferred":471}],484:[function(f,h,g){h.exports=function i(c,b){if(typeof c.off==="function"){c.off()
}function a(l){var m=true;for(var d in l){if(l.hasOwnProperty(d)){if(l[d]!==null){m=false;
break}}}return m}window.setTimeout(function(){var d;for(d in c){if(c.hasOwnProperty(d)){if(b&&c[d]&&typeof c[d].destroy==="function"&&!a(c[d])){c[d].destroy()
}c[d]=null}}})}},{}],485:[function(d,g,f){arguments[4][120][0].apply(f,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":486,dup:120}],486:[function(d,g,f){arguments[4][121][0].apply(f,arguments)
},{dup:121}],487:[function(d,g,f){arguments[4][285][0].apply(f,arguments)},{dup:285}],488:[function(d,g,f){arguments[4][317][0].apply(f,arguments)
},{"./promise/polyfill":492,"./promise/promise":493,dup:317}],489:[function(d,g,f){arguments[4][318][0].apply(f,arguments)
},{"./utils":497,dup:318}],490:[function(d,g,f){arguments[4][319][0].apply(f,arguments)
},{_process:264,dup:319}],491:[function(d,g,f){arguments[4][320][0].apply(f,arguments)
},{dup:320}],492:[function(d,g,f){arguments[4][321][0].apply(f,arguments)},{"./promise":493,"./utils":497,dup:321}],493:[function(d,g,f){arguments[4][322][0].apply(f,arguments)
},{"./all":489,"./asap":490,"./config":491,"./race":494,"./reject":495,"./resolve":496,"./utils":497,dup:322}],494:[function(d,g,f){arguments[4][323][0].apply(f,arguments)
},{"./utils":497,dup:323}],495:[function(d,g,f){arguments[4][324][0].apply(f,arguments)
},{dup:324}],496:[function(d,g,f){arguments[4][325][0].apply(f,arguments)},{dup:325}],497:[function(d,g,f){arguments[4][326][0].apply(f,arguments)
},{dup:326}],498:[function(d,g,f){arguments[4][327][0].apply(f,arguments)},{dup:327}],499:[function(d,g,f){arguments[4][10][0].apply(f,arguments)
},{dup:10}],500:[function(d,g,f){arguments[4][11][0].apply(f,arguments)},{dup:11}],501:[function(d,g,f){arguments[4][330][0].apply(f,arguments)
},{"./Array/from":502,"./Array/isArray":503,"./Array/prototype.every":504,"./Array/prototype.filter":505,"./Array/prototype.find":506,"./Array/prototype.forEach":507,"./Array/prototype.indexOf":508,"./Array/prototype.lastIndexOf":509,"./Array/prototype.map":510,"./Array/prototype.reduce":511,"./Array/prototype.reduceRight":512,"./Array/prototype.slice":513,"./Array/prototype.some":514,dup:330}],502:[function(d,g,f){arguments[4][331][0].apply(f,arguments)
},{dup:331}],503:[function(d,g,f){arguments[4][138][0].apply(f,arguments)},{dup:138}],504:[function(d,g,f){arguments[4][139][0].apply(f,arguments)
},{dup:139}],505:[function(d,g,f){arguments[4][140][0].apply(f,arguments)},{dup:140}],506:[function(d,g,f){arguments[4][335][0].apply(f,arguments)
},{dup:335}],507:[function(d,g,f){arguments[4][141][0].apply(f,arguments)},{dup:141}],508:[function(d,g,f){arguments[4][142][0].apply(f,arguments)
},{dup:142}],509:[function(d,g,f){arguments[4][338][0].apply(f,arguments)},{dup:338}],510:[function(d,g,f){arguments[4][339][0].apply(f,arguments)
},{dup:339}],511:[function(d,g,f){arguments[4][340][0].apply(f,arguments)},{dup:340}],512:[function(d,g,f){arguments[4][341][0].apply(f,arguments)
},{dup:341}],513:[function(d,g,f){arguments[4][143][0].apply(f,arguments)},{dup:143}],514:[function(d,g,f){arguments[4][144][0].apply(f,arguments)
},{dup:144}],515:[function(d,g,f){arguments[4][145][0].apply(f,arguments)},{dup:145}],516:[function(d,g,f){arguments[4][345][0].apply(f,arguments)
},{"./Date/now":517,"./Date/prototype.toISOString":518,"./Date/prototype.toJSON":519,dup:345}],517:[function(d,g,f){arguments[4][288][0].apply(f,arguments)
},{dup:288}],518:[function(d,g,f){arguments[4][347][0].apply(f,arguments)},{dup:347}],519:[function(d,g,f){arguments[4][348][0].apply(f,arguments)
},{dup:348}],520:[function(d,g,f){arguments[4][349][0].apply(f,arguments)},{"./Element/prototype.classList":521,"./Element/prototype.matches":522,"./Element/prototype.remove":523,dup:349}],521:[function(d,g,f){arguments[4][146][0].apply(f,arguments)
},{dup:146}],522:[function(d,g,f){arguments[4][351][0].apply(f,arguments)},{dup:351}],523:[function(d,g,f){arguments[4][352][0].apply(f,arguments)
},{dup:352}],524:[function(d,g,f){arguments[4][353][0].apply(f,arguments)},{"./Function/prototype.bind":525,dup:353}],525:[function(d,g,f){arguments[4][147][0].apply(f,arguments)
},{dup:147}],526:[function(d,g,f){arguments[4][355][0].apply(f,arguments)},{dup:355}],527:[function(d,g,f){arguments[4][356][0].apply(f,arguments)
},{"./Object/assign":528,"./Object/create":529,"./Object/is":530,"./Object/keys":531,dup:356}],528:[function(d,g,f){arguments[4][357][0].apply(f,arguments)
},{dup:357}],529:[function(d,g,f){arguments[4][289][0].apply(f,arguments)},{dup:289}],530:[function(d,g,f){arguments[4][359][0].apply(f,arguments)
},{dup:359}],531:[function(d,g,f){arguments[4][360][0].apply(f,arguments)},{dup:360}],532:[function(d,g,f){arguments[4][361][0].apply(f,arguments)
},{dup:361,"es6-promise":488}],533:[function(d,g,f){arguments[4][362][0].apply(f,arguments)
},{"./String/prototype.trim":534,dup:362}],534:[function(d,g,f){arguments[4][363][0].apply(f,arguments)
},{dup:363}],535:[function(d,g,f){arguments[4][364][0].apply(f,arguments)},{dup:364}],536:[function(d,g,f){arguments[4][365][0].apply(f,arguments)
},{"./Array":501,"./CustomEvent":515,"./Date":516,"./Element":520,"./Function":524,"./JSON":526,"./Object":527,"./Promise":532,"./String":533,"./XMLHttpRequest":535,"./console.log":537,"./getComputedStyle":538,"./html5shiv":539,"./matchMedia":540,"./performance":541,"./requestAnimationFrame":543,dup:365}],537:[function(d,g,f){arguments[4][290][0].apply(f,arguments)
},{"console-polyfill":487,dup:290}],538:[function(d,g,f){arguments[4][367][0].apply(f,arguments)
},{dup:367}],539:[function(d,g,f){arguments[4][368][0].apply(f,arguments)},{dup:368,"html5shiv/src/html5shiv":498}],540:[function(d,g,f){arguments[4][12][0].apply(f,arguments)
},{dup:12,"matchmedia-polyfill":500,"matchmedia-polyfill/matchMedia.addListener":499}],541:[function(d,g,f){arguments[4][370][0].apply(f,arguments)
},{"./performance/now":542,dup:370}],542:[function(d,g,f){arguments[4][291][0].apply(f,arguments)
},{"../Date/now":517,dup:291}],543:[function(d,g,f){arguments[4][148][0].apply(f,arguments)
},{dup:148}],544:[function(d,g,f){d("@marcom/ac-polyfills/Promise");d("@marcom/ac-polyfills/JSON");
g.exports={createFlow:d("./ac-flow/flow/factory"),Player:d("./ac-flow/flow/Player")}
},{"./ac-flow/flow/Player":547,"./ac-flow/flow/factory":558,"@marcom/ac-polyfills/JSON":526,"@marcom/ac-polyfills/Promise":532}],545:[function(v,w,u){var o=v("@marcom/ac-event-emitter-micro").EventEmitterMicro,p=v("./compositor/decorator/Keyframe"),q=v("./compositor/decorator/Superframe"),r=v("./compositor/decorator/SuperKeyframe"),m=v("./compositor/decorator/Cache");
var n=v("./compositor/Sequence");function t(a,c,b,d){o.call(this);this._compositor=new n(c,b,d);
this.options=a||{}}var s=t.prototype=new o(null);s._gotoImageFrame=function(a){if(this._rendering){return Promise.resolve()
}else{if(this._currentFrame===a){return Promise.resolve()}}this._rendering=true;
return this._compositor.compositeFrames(this._currentFrame,a).then(function(){this._rendering=false;
this._currentFrame=a}.bind(this))};s.init=function(){var a;if(this.options.element.nodeName==="CANVAS"){a=this.options.element
}else{a=document.createElement("canvas");this.options.element.appendChild(a)}this.gotoFrame=this._gotoImageFrame;
return this._compositor.init(a).then(this._decorateCompositor.bind(this))};s.resumeLoading=function(){return this._compositor.resumeLoading()
};s.pauseLoading=function(){this._compositor.pauseLoading()};s._decorateCompositor=function(){var a=this._compositor;
var b;var c;if(a){b=this._compositor._diffRender.flowData;c=this._compositor.canvas;
if(b.superframeFrequency){a=new q(a,b.superframeFrequency)}if(b.version>=4){a=new p(a)
}if(b.version>=4&&b.superframeFrequency){a=new r(a)}if(this.options.keyframeCache){a=new m(a,this.options.keyframeCache)
}if(a===this._compositor){return Promise.resolve()}else{this._compositor=a;return this._compositor.init(c)
}}else{return Promise.reject()}};s._destroy=function(){this.off();this._compositor.destroy()
};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(s,{_currentFrame:{value:0,enumerable:false,writable:true},frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true}});w.exports=t},{"./compositor/Sequence":548,"./compositor/decorator/Cache":549,"./compositor/decorator/Keyframe":550,"./compositor/decorator/SuperKeyframe":551,"./compositor/decorator/Superframe":552,"@marcom/ac-event-emitter-micro":485}],546:[function(o,n,j){var i=o("@marcom/ac-asset-loader").AssetLoader,l=o("./data/provider/Async");
var k=function(c,b,a){this._manifestUrl=c;this._keyframeUrls=b;this._imageUrlPattern=a;
this.state={manifestLoaded:false,keyframesLoaded:false,diffsLoaded:false,diffCountLoaded:0,totalDiffs:null};
this.assets={keyframes:null,manifest:null,diffs:null};this._promises={};this._loaders={};
this._activeLoaders=[];this._resumeQueue=[];this._paused=true;this._shouldPause=false;
this._boundOnManifestLoaded=this._onManifestLoaded.bind(this);this._boundOnKeyframesLoaded=this._onKeyframesLoaded.bind(this);
this._boundOnDiffsLoaded=this._onDiffsLoaded.bind(this)};var m=k.prototype;m.setManifestUrl=function(a){this._manifestUrl=a;
return this};m.setKeyframeUrls=function(a){this._keyframeUrls=a;return this};m.setImageUrlPattern=function(a){this._imageUrlPattern=a;
return this};m.pause=function(){this._shouldPause=true;var a,b=this._activeLoaders.length;
for(a=0;a<b;a++){this._activeLoaders[a].pause()}this._paused=true};m.destroy=function(){var b,c,a;
this.pause();for(b in this._loaders){if(this._loaders.hasOwnProperty(b)){this._loaders[b].destroy()
}}for(c in this._promises){if(this._promises.hasOwnProperty(c)){if(this._promises[c].status()==="pending"){this._promises[c].reject()
}}}for(a in this){if(this.hasOwnProperty(a)){this[a]=null}}};m.load=function(){if(this._paused&&(this._activeLoaders.length>0||this._resumeQueue.length>0)){this._resume();
return true}};m._resume=function(){this._shouldPause=false;var d,c=this._activeLoaders.length;
for(d=0;d<c;d++){this._activeLoaders[d].load()}var a,b=this._resumeQueue.length;
for(a=0;a<b;a++){this._resumeQueue[a].call(this)}this._resumeQueue=[];this._paused=false
};m.loadManifest=function(){if(this._shouldPause){this._resumeQueue.push(this.loadManifest);
return}if(this.assets.manifest){return this.assets.manifest}else{this._paused=false;
this._loaders.manifest=new l(this._getManifestAssetsData());this._activeLoaders.push(this._loaders.manifest);
return this._loaders.manifest.load().then(this._boundOnManifestLoaded)}};m.loadKeyframes=function(){var a;
if(this._shouldPause){this._resumeQueue.push(this.loadKeyframes)}if(this.assets.keyframes){a=Promise.resolve(this.assets.keyframes)
}else{this._paused=false;this._loaders.keyframes=new i(this._getKeyframesAssetsData());
this._activeLoaders.push(this._loaders.keyframes);a=this._loaders.keyframes.load().then(this._boundOnKeyframesLoaded)
}this._promises.keyframes=a;return this._promises.keyframes};m.loadDiffs=function(){var a;
if(this._shouldPause){this._resumeQueue.push(this.loadDiffs)}if(this.assets.diffs){a=this._promises.diffs.resolve(this.assets.diffs)
}else{this._paused=false;this._loaders.diffs=new i(this._getDiffsAssetsData());
this._activeLoaders.push(this._loaders.diffs);a=this._loaders.diffs.load().then(this._boundOnDiffsLoaded)
}this._promises.diffs=a;return this._promises.diffs};m._getManifestAssetsData=function(){return this._manifestUrl
};m._getKeyframesAssetsData=function(){return this._keyframeUrls};m._getDiffsAssetsData=function(){var b=this.assets.manifest.imagesRequired,d=[],a,c,f=this._imageUrlPattern.match(/#/g).length;
for(a=1;a<=b;a++){c="0000"+a;c=c.substring(c.length-f);d.push(this._imageUrlPattern.replace(/#{2,}/g,c))
}return d};m._onManifestLoaded=function(a){if(this.assets){this.assets.manifest=a;
this.state.manifestLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.manifest);
return this.assets.manifest}};m._onKeyframesLoaded=function(a){if(this.assets){this.assets.keyframes=a;
this.state.keyframeLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.keyframes);
return Promise.resolve(this.assets.keyframes)}};m._onDiffsLoaded=function(a){if(this.assets){this.assets.diffs=a;
this.state.diffsLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.diffs);
return Promise.resolve(this.assets.diffs)}};m._removeFromActiveLoaders=function(a){var b,c=this._activeLoaders.length;
for(b=0;b<c;b++){if(this._activeLoaders[b]===a){this._activeLoaders.splice(b,1);
return}}};n.exports=k},{"./data/provider/Async":556,"@marcom/ac-asset-loader":472}],547:[function(o,n,i){var k=o("@marcom/ac-dom-emitter").DOMEmitter;
var j=o("@marcom/ac-raf-emitter/RAFEmitter");function l(b,a){this.element=a;this._domEmitter=new k(a);
this._frameRate=30;this.paused=true;this.loop=false;this._destroyed=false;this._flow=b;
this._rafEmitter=new j();this._rafDrawSet=false;this._shouldAdvanceToTimeGlobal=false;
this._shouldGlobalTimeUpdate=false;this._shouldLocalTimeUpdate=false;this._boundAdvanceTimeToGlobal=this._advanceToTimeGlobal.bind(this);
this._onBoundGlobalTimeUpdate=this._onGlobalTimeUpdate.bind(this);this._onBoundLocalTimeUpdate=this._onLocalTimeUpdate.bind(this);
this._rafEmitter.on("draw",this._onDraw.bind(this))}var m=l.prototype;m._timeToFrame=function(b){var a;
a=Math.round(b/this.duration*this._flow.frameCount);a=a%(this._flow.frameCount+1);
return(a<0)?this._flow.frameCount+a:a};m._advanceToTimeGlobal=function(a){if(this._rafDrawSet){this._prevTime=this._prevTime||a.time;
this._currentTime+=((a.time-this._prevTime)/1000)*this.playbackRate;this._prevTime=a.time;
this._pauseAfterRender=false;var b=this._timeToFrame(this._currentTime);if(!this.loop){if(this.playbackRate>0&&this._currentTime>this.duration){b=this._flow.frameCount;
this._currentTime=this.duration;this._pauseAfterRender=true}else{if(this.playbackRate<0&&this._currentTime<0){b=0;
this._currentTime=0;this._pauseAfterRender=true}}}else{this._currentTime=(this.duration+this._currentTime)%this.duration
}if(!this.paused&&!this.seeking){return this._flow.gotoFrame(b).then(this._onBoundGlobalTimeUpdate)
}}};m._onGlobalTimeUpdate=function(){this.trigger("timeupdate");if(this._pauseAfterRender){this.paused=true;
this.trigger("ended")}else{this._bindAdvanceToTimeGlobal()}};m._onLocalTimeUpdate=function(){this.seeking=false;
this.trigger("timeupdate");this.trigger("seeked");this._bindAdvanceToTimeGlobal()
};m._advanceToTimeLocal=function(a){if(!this.seeking){this.seeking=true;this.trigger("seeking");
this._currentTime=1*a;this._prevTime=null;this._cancelFrame();this._flow.gotoFrame(this._timeToFrame(a)).then(this._onBoundLocalTimeUpdate)
}};m._onLoaded=function(){this.trigger("loaded");this.trigger("canplaythrough")
};m._nullProperties=function(a){var b;for(b in a){if(a.hasOwnProperty(b)){a[b]=null
}}return a};m.destroy=function(){this._rafEmitter.destroy();this.trigger("destroy");
this.pause();this.off();this._flow.destroy();this._flow=this._nullProperties(this._flow);
this._nullProperties(this)};m.load=function(){if(this._flow.resumeLoading()){return
}this.trigger("loadstart");return this._flow.init().then(function(a){var b=function(){this._onLoaded()
}.bind(this);var c=function(){if(this._destroyed===false){this.trigger("error")
}}.bind(this);if(a){return a.then(b,c)}else{b()}}.bind(this))};m.pauseLoading=function(){this._flow.pauseLoading()
};m.play=function(){if(this.paused){this.paused=false;this.trigger("play");this._prevTime=null;
this._bindAdvanceToTimeGlobal()}return this};m.pause=function(){if(!this.paused){this.paused=true;
this._cancelFrame();this.trigger("pause")}return this};m.on=function(){this._domEmitter.on.apply(this._domEmitter,arguments)
};m.once=function(){this._domEmitter.once.apply(this._domEmitter,arguments)};m.trigger=function(){this._domEmitter.trigger.apply(this._domEmitter,arguments)
};m.off=function(){this._domEmitter.off.apply(this._domEmitter,arguments)};m._cancelFrame=function(){this._rafEmitter.cancel();
this._rafDrawSet=false};m._onDraw=function(a){if(this._shouldAdvanceToTimeGlobal){this._advanceToTimeGlobal(a)
}else{if(this._shouldGlobalTimeUpdate){this._onGlobalTimeUpdate(a)}else{if(this._shouldLocalTimeUpdate){this._onLocalTimeUpdate(a)
}}}this._shouldLocalTimeUpdate=false;this._shouldGlobalTimeUpdate=false;this._shouldLocalTimeUpdate=false
};m._bindAdvanceToTimeGlobal=function(){this._rafDrawSet=true;this._shouldAdvanceToTimeGlobal=true;
this._rafEmitter.run()};m._bindGlobalTimeUpdate=function(){this._rafDrawSet=true;
this._shouldGlobalTimeUpdate=true;this._rafEmitter.run()};m._bindLocalTimeUpdate=function(){this._rafDrawSet=true;
this._shouldLocalTimeUpdate=true;this._rafEmitter.run()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(m,{_currentTime:{value:0,enumerable:false,writable:true},_playbackRate:{value:1,enumerable:false,writable:true},currentTime:{get:function(){return this._currentTime*1
},set:m._advanceToTimeLocal,enumerable:true},frameRate:{get:function(){return this._frameRate
},set:function(a){if(isFinite(a)){this._frameRate=a;this.trigger("durationchange")
}},enumerable:true},playbackRate:{get:function(){return this._playbackRate*1},set:function(a){if(isFinite(a)){this._playbackRate=1*a;
this.trigger("ratechange")}},enumerable:true},duration:{get:function(){return this._flow.frameCount/this.frameRate
},enumerable:true}});n.exports=l},{"@marcom/ac-dom-emitter":415,"@marcom/ac-raf-emitter/RAFEmitter":611}],548:[function(i,n,j){var k=i("../diff/Render");
var l=i("../LoadController");function o(b,a,c){this._keyframes=a;this._imageUrlPattern=c;
this._loadController=new l(b,a,c)}var m=o.prototype;m._initDiffRender=function(a){a.then(function(b){this._images=b;
this.canvas.height=b[0].height;this.canvas.width=b[0].width;this.applyFrame(b[0])
}.bind(this))};m.init=function(a){this.canvas=a||document.createElement("canvas");
this.context=a.getContext("2d");return this._loadController.loadKeyframes().then(this._initDiffRender.bind(this)).then(this._loadController.loadManifest.bind(this._loadController)).then(this.createDiffRender.bind(this))
};m.resumeLoading=function(){return this._loadController.load()};m.pauseLoading=function(){this._loadController.pause()
};m.createDiffRender=function(a){this._diffRender=new k(a,this._imageUrlPattern,this._loadController);
return this._diffRender.init()};m.applyFrame=function(a){var b=this.context;b.drawImage(a,0,0)
};m.calculateRenderCount=function(c,b){var a=0;if(Math.abs(b-c)>=b){c=1;a=1}else{if(Math.abs(b-c)>=(this.frameCount-b)&&this._images[1]){c=this.frameCount-2;
a=1}}if(b>0&&b<this.frameCount-1){return Math.abs(c-b)+a}else{return a}};m.compositeFrames=function(c,b){b=(this.frameCount<b)?this.frameCount-1:(b<0)?0:b;
c=(this.frameCount-2<c)?this.frameCount-2:(c<0)?0:c;var a;if(Math.abs(b-c)>=b){c=1;
this.applyFrame(this._images[0])}else{if(Math.abs(b-c)>=(this.frameCount-b)&&this._images[1]){c=this.frameCount-2;
this.applyFrame(this._images[1])}}a=(c>b)?-1:(c<b)?1:0;if(b>0&&b<this.frameCount-1){while(c!==b){this._diffRender.renderDiff(this.canvas,c);
c+=a}}return Promise.resolve(c)};m.destroy=function(){this._loadController.destroy()
};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(m,{frameCount:{get:function(){return this._diffRender.frames.length+2
},enumerable:true},canvas:{get:function(){return this._canvas},set:function(a){return this._canvas=a
},enumerable:true},mainCompositor:{get:function(){var a=this;while(a._compositor){a=a._compositor
}return a},enumerable:true}});n.exports=o},{"../LoadController":546,"../diff/Render":557}],549:[function(k,j,g){function h(a,b){this._compositor=a;
this._keyframeInterval=b||8;this._keyframes=[]}var i=h.prototype;i._getClosestKeyframe=function(c){var b=c%this._keyframeInterval,a=Math.floor(c/this._keyframeInterval)+((b>(this._keyframeInterval/2))?1:0);
return a};i._getFrameFromKeyframe=function(a){return a*this._keyframeInterval};
i._saveKeyframe=function(a){var c,b=Math.floor(a/this._keyframeInterval);if(a%this._keyframeInterval===0&&!this._keyframes[b]){c=document.createElement("canvas");
c.width=this._compositor.canvas.width;c.height=this._compositor.canvas.height;c.getContext("2d").drawImage(this._compositor.canvas,0,0);
this._keyframes[b]=c}};i.init=function(a){return this._compositor.init.apply(this._compositor,arguments)
};i.resumeLoading=function(){return this._compositor.resumeLoading()};i.pauseLoading=function(){return this._compositor.pauseLoading()
};i.applyFrame=function(){this._compositor.applyFrame.apply(this._compositor,arguments)
};i.calculateRenderCount=function(b,a){b=this._getFrameFromKeyframe(this._getClosestKeyframe(a));
return this._compositor.calculateRenderCount(b,a)+1};i.compositeFrames=function(d,b){var a=this._getClosestKeyframe(b);
if(this._keyframes[a]&&(this._compositor.calculateRenderCount(d,b)>this.calculateRenderCount(d,b))){d=this._getFrameFromKeyframe(a);
this.applyFrame(this._keyframes[a]);return this._compositor.compositeFrames(d,b).then(function c(){})
}else{return this._compositor.compositeFrames(d,b).then(function c(){},null,this._saveKeyframe.bind(this))
}};i.destroy=function(){return this._compositor.destroy()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(i,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(a){return this._compositor.canvas=a
},enumerable:true}});j.exports=h},{}],550:[function(m,l,i){var h=m("../../keyframe/Render");
function j(a){this._compositor=a;this._flowDataProvider=this.mainCompositor._loadController._loaders.manifest
}var k=j.prototype;k.init=function(a){this._keyframeDiffRender=new h(this._flowDataProvider._data,this.mainCompositor._imageUrlPattern);
return this._keyframeDiffRender.init()};k.resumeLoading=function(){return this._compositor.resumeLoading()
};k.pauseLoading=function(){return this._compositor.pauseLoading()};k.applyFrame=function(a){return this._compositor.applyFrame.apply(this._compositor,arguments)
};k.applyKeyframe=function(b,a){this._keyframeDiffRender.renderKeyframe(this.canvas,b,a)
};k.compositeFrames=function(b,a){if(!this._isKeyframeDiff(a-1)){return this._compositor.compositeFrames.apply(this._compositor,arguments)
}this.applyKeyframe(a-1);return Promise.resolve(b-1)};k._isKeyframeDiff=function(a){return a in this._keyframeDiffRender._loader._keyframes
};k.calculateRenderCount=function(b,a){return this._compositor.calculateRenderCount.apply(this._compositor,arguments)
};k.destroy=function(){return this._compositor.destroy()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(k,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(a){return this._compositor.canvas=a
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});l.exports=j},{"../../keyframe/Render":560}],551:[function(g,k,h){function i(a){this._compositor=a;
this._frames=this.mainCompositor._loadController._loaders.manifest._data.frames;
this._superframeInterval=this.mainCompositor._diffRender.flowData.superframeFrequency
}var j=i.prototype;j.init=function(a){return this._compositor.init.apply(this._compositor,arguments)
};j.resumeLoading=function(){return this._compositor.resumeLoading()};j.pauseLoading=function(){return this._compositor.pauseLoading()
};j.applyFrame=function(a){return this._compositor.applyFrame.apply(this._compositor,arguments)
};j.applyKeyframe=function(b,a){this._compositor.applyKeyframe.apply(this._compositor,arguments)
};j.compositeFrames=function(d,b){var a,c;if(b<1||b>this.frameCount-2){return this._compositor.compositeFrames.apply(this._compositor,arguments)
}if(this._isKeyframeDiff(b-1)){a=Math.abs(d-b)===1?true:false;this.applyKeyframe(b-1,a);
return Promise.resolve(d-1)}if(Math.abs(b-d)>this._superframeInterval){c=this._getShortestRender(d,b);
if(this._isKeyframeDiff(c-1)||c<=0||c>=this.frameCount-2){return this._compositeFromSuperKeyframe(c,b)
}}return this._compositor.compositeFrames.apply(this._compositor,[d,b])};j._getShortestRender=function(m,d){var b=this._compositor.calculateRenderCount,c=this._getClosestSuperKeyframe(d-1),f=b.apply(this._compositor,[c,d])+1,a=b.apply(this._compositor,[m,d]);
if(f<=a){return c}else{return m}};j._compositeFromSuperKeyframe=function(a,c){var f=this.canvas.getContext("2d"),d=(a<=0)?this.mainCompositor._images[0]:(a>=this.frameCount-2?this.mainCompositor._images[1]:this._frames[a-1].image),b;
f.drawImage(d,0,0);return this._compositor.compositeFrames.call(this._compositor,a,c)
};j._getClosestSuperFrame=function(a){return Math.round(a/this._superframeInterval)*this._superframeInterval
};j._getClosestSuperKeyframe=function(f){var b,a,c,d,n=this._frames.length;if(f<n+1&&f>0){d=f-1;
while(d>=0){if(this._frames[d].type==="keyframe"){b=d+1;break}d-=1}d=f+1;while(d<=n-1){if(this._frames[d].type==="keyframe"){a=d+1;
break}d+=1}}b=b?b:0;a=a?a:this.frameCount;c=(f-b)<(a-f)?b:a;return c};j._isKeyframeDiff=function(a){return this._compositor._isKeyframeDiff.apply(this._compositor,arguments)
};j.destroy=function(){return this._compositor.destroy()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(j,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(a){return this._compositor.canvas=a
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});k.exports=i},{}],552:[function(g,k,h){function i(a,b){this._compositor=a;
this._superframeInterval=b||4}var j=i.prototype;j._getClosestSuperframe=function(a){return Math.round(a/this._superframeInterval)*this._superframeInterval
};j.init=function(a){this._screenCanvas=a};j.resumeLoading=function(){return this._compositor.resumeLoading()
};j.pauseLoading=function(){return this._compositor.pauseLoading()};j.applyFrame=function(){this._compositor.applyFrame.apply(this._compositor,arguments)
};j.calculateRenderCount=function(c,a){var b=this._getClosestSuperframe(c);if(Math.abs(b-a)>this._superframeInterval/2){c=b+((c>a)?-1:1)*this._superframeInterval;
return this.calculateRenderCount(c,a)+1}else{return Math.abs(b-a)+1}};j.compositeFrames=function(f,b){var a,d;
if(b<=0||b>=this.frameCount-2){this._compositor.compositeFrames(f,b)}if(f>this.frameCount-2){f=this.frameCount-2
}else{if(f<=0){f=1}}d=this._getClosestSuperframe(f);if(this._compositor.calculateRenderCount(f,b)>this.calculateRenderCount(f,b)){a=this._compositor.compositeFrames(d,d).then(function c(){var m=d+((f>b)?-1:1)*this._superframeInterval;
this._compositor.compositeFrames(d,m).then(function(){return this.compositeFrames(m,b)
}.bind(this))}.bind(this))}else{a=this._compositor.compositeFrames(f,b).then(function c(){}.bind(this))
}a.then(function c(){}.bind(this));return a};j.destroy=function(){return this._compositor.destroy()
};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(j,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(a){return this._compositor.canvas=a
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});k.exports=i},{}],553:[function(f,i,g){function h(b,a){this.location=b;
this.length=a}i.exports=h},{}],554:[function(i,h,f){function g(){}h.exports=g},{}],555:[function(o,n,i){var k=o("./Manifest"),j=o("./Block"),l;
var m={parseData:function(b){l=0;var a=b.frames.map(this._parseFrame,this);return Object.create(k.prototype,{version:{value:b.version},framecount:{value:b.frameCount},blockSize:{value:b.blockSize},imagesRequired:{value:b.imagesRequired},reversible:{value:b.reversible},superframeFrequency:{value:b.superframeFrequency},frames:{value:a}})
},_valueForCharAt:function(a,c){var b=a.charCodeAt(c);if(b>64&&b<91){return b-65
}if(b>96&&b<123){return b-71}if(b>47&&b<58){return b+4}if(b===43){return 62}if(b===47){return 63
}},_createNumberFromBase64Range:function(a,f,b){var c=0,d;while(b--){d=this._valueForCharAt(a,f++);
c+=(d<<b*6)}return c},_parseFrame:function(r){var a,f=[],b=r.value,c=r.startImageIndex,g=r.startBlockIndex,h,d;
if(r.type==="keyframe"){f.type="keyframe";f.width=r.width;f.height=r.height;f.x=r.x;
f.y=r.y;return f}for(a=0;a<b.length;a+=5){d=this._createNumberFromBase64Range(b,a,3);
h=this._createNumberFromBase64Range(b,a+3,2);f.push(Object.create(j.prototype,{location:{value:d,enumerable:true},length:{value:h,enumerable:true},block:{value:(g+=h)-h,enumerable:true},startImageIndex:{value:c,enumerable:true}}))
}return f}};n.exports=m},{"./Block":553,"./Manifest":554}],556:[function(o,n,j){var i=o("@marcom/ac-asset-loader").AssetLoader,k=o("../processor");
function l(a){this._assetLoader=new i([a])}var m=l.prototype;m.load=function(){return this._assetLoader.load().then(function(a){var b;
if(a&&a.length){b=k.parseData(a[0]);this._data=b}return b}.bind(this))};n.exports=l
},{"../processor":555,"@marcom/ac-asset-loader":472}],557:[function(k,j,g){function h(a,c,b){this.flowData=a;
this.flowData.imageUrlPattern=c;this._loadController=b}var i=h.prototype;i._storeImages=function(a){a.then(function(d){var f=d.length;
this.images=d;this._blocksPerFullDiff=[];this._blockCountUpToIndex=[];var b=0;for(var c=0;
c<f;c++){this._blocksPerFullDiff[c]=(d[c].width/this.flowData.blockSize)*(d[c].height/this.flowData.blockSize);
b+=this._blocksPerFullDiff[c];this._blockCountUpToIndex[c]=b}}.bind(this))};i._applyDiffRange=function(z,d){var E=d.block,y=d.length,A=z.canvas.width/this.flowData.blockSize,w=d.startImageIndex,C=this.images[w].width,B=E%this._blockCountUpToIndex[w],D=C/this.flowData.blockSize,a=(B%D)*this.flowData.blockSize,b=Math.floor(B/(D||1))*this.flowData.blockSize,f=(d.location%A)*this.flowData.blockSize,v=Math.floor(d.location/A)*this.flowData.blockSize,x,c;
while(y){x=Math.min((y*this.flowData.blockSize),z.canvas.width-f,C-a);c=x/this.flowData.blockSize;
z.drawImage(this.images[w],a,b,x,this.flowData.blockSize,f,v,x,this.flowData.blockSize);
y-=c;if(y){if((a+=x)>=C){a=0;b+=this.flowData.blockSize}if((f+=x)>=z.canvas.width){f=0;
v+=this.flowData.blockSize}E+=c}}};i.init=function(){return this._loadController.loadDiffs().then(this._storeImages.bind(this))
};i.renderDiff=function(d,a){var b=d.getContext("2d");a-=1;for(var c=0,f=this.frames[a].length;
c<f;c++){this._applyDiffRange(b,this.frames[a][c])}};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(i,{frames:{get:function(){return this.flowData.frames},set:function(a){this.flowData.frames=a
},enumerable:true}});j.exports=h},{}],558:[function(u,w,s){var p=u("@marcom/ac-object/defaults");
var q=u("./Flow");var v=u("./Player");var x={keyframeCache:8,preload:true};var t={fileFormat:"jpg",baseName:"flow",imageUrlPattern:"###",startframeFileFormat:null,endframeFileFormat:null,basePath:null,manifestPath:null,manifestFileFormat:"json",diffPath:null,framePath:null};
var y=function(a){if(a.lastIndexOf("/")!==a.length-1){a=a+"/"}return a};var o=function(d){var a=d.basePath?y(d.basePath):null;
var f=d.framePath?y(d.framePath):null;var g=d.diffPath?y(d.diffPath):null;var b=d.manifestPath?y(d.manifestPath):null;
var h=d.baseName+"_";var c={};c.startframe=(f||a)+h+"startframe."+(d.startframeFileFormat||d.fileFormat);
c.endframe=(f||a)+h+"endframe."+(d.endframeFileFormat||d.fileFormat);c.imageUrlPattern=(g||a)+h+d.imageUrlPattern+"."+d.fileFormat;
c.manifest=(b||a)+h+"manifest."+d.manifestFileFormat;return c};var n=function(c,b){var d=o(b);
var a=[d.startframe,d.endframe];return new q(c,d.manifest,a,d.imageUrlPattern)};
var r=function(c,b){var g=c||{};var d=b||{};g=p(x,c);d=p(t,b);if(!g.element){c.element=document.createElement("canvas")
}var f=n(g,d);var a=new v(f,g.element);if(g.preload){a.load()}return a};w.exports=r
},{"./Flow":545,"./Player":547,"@marcom/ac-object/defaults":593}],559:[function(l,k,m){var i=l("@marcom/ac-asset-loader").AssetLoader;
function h(d,a){var b,c=d.match(/#/g).length;this._keyframes={};d=d.replace(/([^#]+)(#+)(\..*)/,"$1key_$2$3");
this._imageUrls=[];if(a.frames){a.frames.forEach(function(f,g){if(f.type==="keyframe"){b="0000"+g;
b=b.substring(b.length-c);this._imageUrls.push(d.replace(/#+/g,b));this._keyframes[g]=f
}}.bind(this))}}var j=h.prototype;j.load=function(){if(this._imageUrls.length>0){return new i(this._imageUrls).load()
}return Promise.resolve()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(j,{keyframes:{get:function(){return this._keyframes},enumerable:true}});
k.exports=h},{"@marcom/ac-asset-loader":472}],560:[function(h,m,i){var j=h("./Loader");
function k(a,b){this.flowData=a;this.flowData.imageUrlPattern=b}var l=k.prototype;
l._storeImages=function(d){var b=0,a;if(d&&d.length>0){for(var c in this._loader._keyframes){if(this._loader._keyframes.hasOwnProperty(c)){a=d[b];
this._loader._keyframes[c].image=a;b+=1}}}};l.init=function(){this._loader=new j(this.flowData.imageUrlPattern,this.flowData);
return this._loader.load().then(this._storeImages.bind(this))};l.renderKeyframe=function(t,u,a){var v=t.getContext("2d"),s=this._loader.keyframes[u],g=s.image,c=s.x,d=s.y,b=s.width,f=s.height;
if(a===true){v.drawImage(g,c,d,b,f,c,d,b,f)}else{if(this.flowData.reversible){v.drawImage(g,0,0)
}else{v.drawImage(g,c,d,b,f)}}};m.exports=k},{"./Loader":559}],561:[function(d,g,f){arguments[4][120][0].apply(f,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":562,dup:120}],562:[function(d,g,f){arguments[4][121][0].apply(f,arguments)
},{dup:121}],563:[function(d,g,f){arguments[4][292][0].apply(f,arguments)},{"./ac-shared-instance/SharedInstance":564,dup:292}],564:[function(d,g,f){arguments[4][293][0].apply(f,arguments)
},{dup:293}],565:[function(d,g,f){g.exports={CID:d("./ac-mvc-cid/CID")}},{"./ac-mvc-cid/CID":566}],566:[function(q,o,j){var k=q("@marcom/ac-shared-instance").SharedInstance;
var n="ac-mvc-cid:CID",p="1.0.0";function l(){this._idCount=0}var m=l.prototype;
m._cidPrefix="cid";m.getNewCID=function(){var a=this._cidPrefix+"-"+this._idCount;
this._idCount++;return a};o.exports=k.share(n,p,l)},{"@marcom/ac-shared-instance":563}],567:[function(d,g,f){g.exports={Model:d("./ac-mvc-model/Model")}
},{"./ac-mvc-model/Model":568}],568:[function(q,u,p){var l=q("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var t=q("@marcom/ac-object/defaults");var n=q("@marcom/ac-object/create");var s=q("@marcom/ac-mvc-cid").CID;
function r(a){l.call(this);this.attributes=t(this.defaultAttributes,a||{});this.cid=s.getNewCID();
if(this.attributes[this.idAttribute]){this.id=this.attributes[this.idAttribute]
}}var m=l.prototype;var o=r.prototype=n(m);o.defaultAttributes={};o.idAttribute="id";
o.get=function(a){if(!this.attributes){return}return this.attributes[a]};o.set=function(a,b){if(!this.attributes){return
}var d;var f;var g;var h={};var c=false;for(d in a){if(a.hasOwnProperty(d)){g=this.get(d);
if((g===a[d])||(typeof g==="object"&&typeof a[d]==="object"&&JSON.stringify(g)===JSON.stringify(a[d]))){continue
}c=true;this.attributes[d]=a[d];f={value:a[d],previous:g};h[d]=f;this._triggerChange(d,f,b)
}}if(c){this._trigger("change",h,b)}};o.hasAttribute=function(a){if(!this.attributes){return false
}return(this.attributes[a]!==undefined)};o.eachAttribute=function(a,b){if(!this.attributes){return
}var c;for(c in this.attributes){if(this.attributes.hasOwnProperty(c)){a.call(b,{attribute:c,value:this.attributes[c]})
}}};o.destroy=function(){this.trigger("destroy");m.destroy.call(this);var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null
}}};o._trigger=function(c,a,b){b=b||{};if(b.silent!==true){this.trigger(c,a)}};
o._triggerChange=function(c,a,b){return this._trigger("change:"+c,a,b)};u.exports=r
},{"@marcom/ac-event-emitter-micro":561,"@marcom/ac-mvc-cid":565,"@marcom/ac-object/create":592,"@marcom/ac-object/defaults":593}],569:[function(d,g,f){arguments[4][48][0].apply(f,arguments)
},{"./className/add":570,"@marcom/ac-polyfills/Array/prototype.slice":574,"@marcom/ac-polyfills/Element/prototype.classList":575,dup:48}],570:[function(d,g,f){arguments[4][50][0].apply(f,arguments)
},{"./contains":571,dup:50}],571:[function(d,g,f){arguments[4][51][0].apply(f,arguments)
},{"./getTokenRegExp":572,dup:51}],572:[function(d,g,f){arguments[4][52][0].apply(f,arguments)
},{dup:52}],573:[function(d,g,f){arguments[4][53][0].apply(f,arguments)},{"./contains":571,"./getTokenRegExp":572,dup:53}],574:[function(d,g,f){arguments[4][143][0].apply(f,arguments)
},{dup:143}],575:[function(d,g,f){arguments[4][146][0].apply(f,arguments)},{dup:146}],576:[function(d,g,f){arguments[4][56][0].apply(f,arguments)
},{"./className/remove":573,"@marcom/ac-polyfills/Array/prototype.slice":574,"@marcom/ac-polyfills/Element/prototype.classList":575,dup:56}],577:[function(d,g,f){arguments[4][292][0].apply(f,arguments)
},{"./ac-shared-instance/SharedInstance":578,dup:292}],578:[function(d,g,f){arguments[4][293][0].apply(f,arguments)
},{dup:293}],579:[function(d,g,f){arguments[4][565][0].apply(f,arguments)},{"./ac-mvc-cid/CID":580,dup:565}],580:[function(d,g,f){arguments[4][566][0].apply(f,arguments)
},{"@marcom/ac-shared-instance":577,dup:566}],581:[function(d,g,f){g.exports={View:d("./ac-mvc-view/View")}
},{"./ac-mvc-view/View":582}],582:[function(t,v,r){var n=t("@marcom/ac-dom-emitter").DOMEmitter;
var u=t("@marcom/ac-mvc-cid").CID;var s={create:t("@marcom/ac-object/create"),defaults:t("@marcom/ac-object/defaults")};
var o={insertLastChild:t("@marcom/ac-dom-nodes/insertLastChild"),remove:t("@marcom/ac-dom-nodes/remove")};
var p=t("@marcom/ac-classlist/add");var m=t("@marcom/ac-classlist/remove");function w(a){var c;
var d;var b;this.options=s.defaults(this.defaultOptions,a||{});this.cid=u.getNewCID();
this.model=this.options.model;if(this.options.template){this.template=this.options.template
}c=this.options.tagName||this.tagName;d=this.options.element;b=this.options.className||this.className;
if(!d){d=document.createElement(c)}n.call(this,d);if(b){this.addClassName(b)}if(this.options.events){this.delegateEvents(this.options.events)
}}var q=w.prototype=s.create(n.prototype);q.tagName="div";q.defaultOptions={};q.getTagName=function(){return this.el.tagName.toLowerCase()
};q.appendTo=function(a){o.insertLastChild(this.el,a);return this};q.render=function(){};
q.addClassName=function(a){return this._manipulateClassName(a,p)};q.removeClassName=function(a){return this._manipulateClassName(a,m)
};q.destroy=function(){this.emitterTrigger("destroy");this.off();o.remove(this.el);
var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null}}};q.delegateEvents=function(d,c){c=c||this;
var a,b;for(a in d){if(d.hasOwnProperty(a)){b=d[a];if(typeof b==="string"){d[a]=this[d[a]]
}}}this.on(d,c);return this};q._manipulateClassName=function(c,b){var a;if(typeof c==="string"){a=c.split(" ")
}else{if(typeof c==="object"&&Array.isArray(c)){a=c.slice()}else{return this}}a.unshift(this.el);
b.apply(this.el,a);return this};v.exports=w},{"@marcom/ac-classlist/add":569,"@marcom/ac-classlist/remove":576,"@marcom/ac-dom-emitter":415,"@marcom/ac-dom-nodes/insertLastChild":435,"@marcom/ac-dom-nodes/remove":446,"@marcom/ac-mvc-cid":579,"@marcom/ac-object/create":592,"@marcom/ac-object/defaults":593}],583:[function(d,g,f){arguments[4][138][0].apply(f,arguments)
},{dup:138}],584:[function(d,g,f){arguments[4][141][0].apply(f,arguments)},{dup:141}],585:[function(j,i,k){var h=j("qs");
i.exports=function g(b,c){var a=h.stringify(b,{strictNullHandling:true});if(a&&c!==false){a="?"+a
}return a}},{qs:586}],586:[function(h,l,i){var j=h("./stringify");var m=h("./parse");
var k={};l.exports={stringify:j,parse:m}},{"./parse":587,"./stringify":588}],587:[function(g,k,h){var i=g("./utils");
var j={delimiter:"&",depth:5,arrayLimit:20,parameterLimit:1000,strictNullHandling:false,plainObjects:false,allowPrototypes:false};
j.parseValues=function(f,a){var s={};var t=f.split(a.delimiter,a.parameterLimit===Infinity?undefined:a.parameterLimit);
for(var r=0,c=t.length;r<c;++r){var v=t[r];var d=v.indexOf("]=")===-1?v.indexOf("="):v.indexOf("]=")+1;
if(d===-1){s[i.decode(v)]="";if(a.strictNullHandling){s[i.decode(v)]=null}}else{var b=i.decode(v.slice(0,d));
var u=i.decode(v.slice(d+1));if(!Object.prototype.hasOwnProperty.call(s,b)){s[b]=u
}else{s[b]=[].concat(s[b]).concat(u)}}}return s};j.parseObject=function(b,q,c){if(!b.length){return q
}var p=b.shift();var a;if(p==="[]"){a=[];a=a.concat(j.parseObject(b,q,c))}else{a=c.plainObjects?Object.create(null):{};
var d=p[0]==="["&&p[p.length-1]==="]"?p.slice(1,p.length-1):p;var f=parseInt(d,10);
var o=""+f;if(!isNaN(f)&&p!==d&&o===d&&f>=0&&(c.parseArrays&&f<=c.arrayLimit)){a=[];
a[f]=j.parseObject(b,q,c)}else{a[d]=j.parseObject(b,q,c)}}return a};j.parseKeys=function(d,r,p){if(!d){return
}if(p.allowDots){d=d.replace(/\.([^\.\[]+)/g,"[$1]")}var c=/^([^\[\]]*)/;var q=/(\[[^\[\]]*\])/g;
var a=c.exec(d);var b=[];if(a[1]){if(!p.plainObjects&&Object.prototype.hasOwnProperty(a[1])){if(!p.allowPrototypes){return
}}b.push(a[1])}var f=0;while((a=q.exec(d))!==null&&f<p.depth){++f;if(!p.plainObjects&&Object.prototype.hasOwnProperty(a[1].replace(/\[|\]/g,""))){if(!p.allowPrototypes){continue
}}b.push(a[1])}if(a){b.push("["+d.slice(a.index)+"]")}return j.parseObject(b,r,p)
};k.exports=function(q,a){a=a||{};a.delimiter=typeof a.delimiter==="string"||i.isRegExp(a.delimiter)?a.delimiter:j.delimiter;
a.depth=typeof a.depth==="number"?a.depth:j.depth;a.arrayLimit=typeof a.arrayLimit==="number"?a.arrayLimit:j.arrayLimit;
a.parseArrays=a.parseArrays!==false;a.allowDots=a.allowDots!==false;a.plainObjects=typeof a.plainObjects==="boolean"?a.plainObjects:j.plainObjects;
a.allowPrototypes=typeof a.allowPrototypes==="boolean"?a.allowPrototypes:j.allowPrototypes;
a.parameterLimit=typeof a.parameterLimit==="number"?a.parameterLimit:j.parameterLimit;
a.strictNullHandling=typeof a.strictNullHandling==="boolean"?a.strictNullHandling:j.strictNullHandling;
if(q===""||q===null||typeof q==="undefined"){return a.plainObjects?Object.create(null):{}
}var f=typeof q==="string"?j.parseValues(q,a):q;var s=a.plainObjects?Object.create(null):{};
var b=Object.keys(f);for(var r=0,d=b.length;r<d;++r){var c=b[r];var t=j.parseKeys(c,f[c],a);
s=i.merge(s,t,a)}return i.compact(s)}},{"./utils":589}],588:[function(g,k,h){var i=g("./utils");
var j={delimiter:"&",arrayPrefixGenerators:{brackets:function(a,b){return a+"[]"
},indices:function(a,b){return a+"["+b+"]"},repeat:function(a,b){return a}},strictNullHandling:false};
j.stringify=function(r,d,v,t,u){if(typeof u==="function"){r=u(d,r)}else{if(i.isBuffer(r)){r=r.toString()
}else{if(r instanceof Date){r=r.toISOString()}else{if(r===null){if(t){return i.encode(d)
}r=""}}}}if(typeof r==="string"||typeof r==="number"||typeof r==="boolean"){return[i.encode(d)+"="+i.encode(r)]
}var a=[];if(typeof r==="undefined"){return a}var s=Array.isArray(u)?u:Object.keys(r);
for(var f=0,c=s.length;f<c;++f){var b=s[f];if(Array.isArray(r)){a=a.concat(j.stringify(r[b],v(d,b),v,t,u))
}else{a=a.concat(j.stringify(r[b],d+"["+b+"]",v,t,u))}}return a};k.exports=function(d,z){z=z||{};
var w=typeof z.delimiter==="undefined"?j.delimiter:z.delimiter;var u=typeof z.strictNullHandling==="boolean"?z.strictNullHandling:j.strictNullHandling;
var f;var v;if(typeof z.filter==="function"){v=z.filter;d=v("",d)}else{if(Array.isArray(z.filter)){f=v=z.filter
}}var a=[];if(typeof d!=="object"||d===null){return""}var y;if(z.arrayFormat in j.arrayPrefixGenerators){y=z.arrayFormat
}else{if("indices" in z){y=z.indices?"indices":"repeat"}else{y="indices"}}var x=j.arrayPrefixGenerators[y];
if(!f){f=Object.keys(d)}for(var t=0,c=f.length;t<c;++t){var b=f[t];a=a.concat(j.stringify(d[b],b,x,u,v))
}return a.join(w)}},{"./utils":589}],589:[function(g,k,h){var i={};i.hexTable=new Array(256);
for(var j=0;j<256;++j){i.hexTable[j]="%"+((j<16?"0":"")+j.toString(16)).toUpperCase()
}h.arrayToObject=function(b,d){var a=d.plainObjects?Object.create(null):{};for(var c=0,f=b.length;
c<f;++c){if(typeof b[c]!=="undefined"){a[c]=b[c]}}return a};h.merge=function(q,r,f){if(!r){return q
}if(typeof r!=="object"){if(Array.isArray(q)){q.push(r)}else{if(typeof q==="object"){q[r]=true
}else{q=[q,r]}}return q}if(typeof q!=="object"){q=[q].concat(r);return q}if(Array.isArray(q)&&!Array.isArray(r)){q=h.arrayToObject(q,f)
}var b=Object.keys(r);for(var p=0,c=b.length;p<c;++p){var d=b[p];var a=r[d];if(!Object.prototype.hasOwnProperty.call(q,d)){q[d]=a
}else{q[d]=h.merge(q[d],a,f)}}return q};h.decode=function(a){try{return decodeURIComponent(a.replace(/\+/g," "))
}catch(b){return a}};h.encode=function(b){if(b.length===0){return b}if(typeof b!=="string"){b=""+b
}var d="";for(var c=0,f=b.length;c<f;++c){var a=b.charCodeAt(c);if(a===45||a===46||a===95||a===126||(a>=48&&a<=57)||(a>=65&&a<=90)||(a>=97&&a<=122)){d+=b[c];
continue}if(a<128){d+=i.hexTable[a];continue}if(a<2048){d+=i.hexTable[192|(a>>6)]+i.hexTable[128|(a&63)];
continue}if(a<55296||a>=57344){d+=i.hexTable[224|(a>>12)]+i.hexTable[128|((a>>6)&63)]+i.hexTable[128|(a&63)];
continue}++c;a=65536+(((a&1023)<<10)|(b.charCodeAt(c)&1023));d+=i.hexTable[240|(a>>18)]+i.hexTable[128|((a>>12)&63)]+i.hexTable[128|((a>>6)&63)]+i.hexTable[128|(a&63)]
}return d};h.compact=function(q,d){if(typeof q!=="object"||q===null){return q}d=d||[];
var r=d.indexOf(q);if(r!==-1){return d[r]}d.push(q);if(Array.isArray(q)){var p=[];
for(var b=0,f=q.length;b<f;++b){if(typeof q[b]!=="undefined"){p.push(q[b])}}return p
}var a=Object.keys(q);for(b=0,f=a.length;b<f;++b){var c=a[b];q[c]=h.compact(q[c],d)
}return q};h.isRegExp=function(a){return Object.prototype.toString.call(a)==="[object RegExp]"
};h.isBuffer=function(a){if(a===null||typeof a==="undefined"){return false}return !!(a.constructor&&a.constructor.isBuffer&&a.constructor.isBuffer(a))
}},{}],590:[function(d,g,f){g.exports={clone:d("./clone"),create:d("./create"),defaults:d("./defaults"),extend:d("./extend"),getPrototypeOf:d("./getPrototypeOf"),isDate:d("./isDate"),isEmpty:d("./isEmpty"),isRegExp:d("./isRegExp"),toQueryParameters:d("./toQueryParameters")}
},{"./clone":591,"./create":592,"./defaults":593,"./extend":594,"./getPrototypeOf":595,"./isDate":596,"./isEmpty":597,"./isRegExp":598,"./toQueryParameters":599}],591:[function(d,g,f){arguments[4][127][0].apply(f,arguments)
},{"./extend":594,"@marcom/ac-polyfills/Array/isArray":583,dup:127}],592:[function(d,g,f){arguments[4][128][0].apply(f,arguments)
},{dup:128}],593:[function(d,g,f){arguments[4][269][0].apply(f,arguments)},{"./extend":594,dup:269}],594:[function(d,g,f){arguments[4][129][0].apply(f,arguments)
},{"@marcom/ac-polyfills/Array/prototype.forEach":584,dup:129}],595:[function(k,j,g){var h=Object.prototype.hasOwnProperty;
j.exports=function i(a){if(Object.getPrototypeOf){return Object.getPrototypeOf(a)
}else{if(typeof a!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return a.__proto__}else{var c=a.constructor;
var b;if(h.call(a,"constructor")){b=c;if(!(delete a.constructor)){return null}c=a.constructor;
a.constructor=b}return c?c.prototype:null}}}}},{}],596:[function(f,h,g){h.exports=function i(a){return Object.prototype.toString.call(a)==="[object Date]"
}},{}],597:[function(k,j,g){var h=Object.prototype.hasOwnProperty;j.exports=function i(b){var a;
if(typeof b!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(a in b){if(h.call(b,a)){return false}}return true}},{}],598:[function(i,h,f){h.exports=function g(a){return window.RegExp?a instanceof RegExp:false
}},{}],599:[function(k,i,g){var h=k("@marcom/ac-url/joinSearchParams");i.exports=function j(a){if(typeof a!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return h(a,false)}},{"@marcom/ac-url/joinSearchParams":585}],600:[function(d,g,f){arguments[4][120][0].apply(f,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":601,dup:120}],601:[function(d,g,f){arguments[4][121][0].apply(f,arguments)
},{dup:121}],602:[function(d,g,f){arguments[4][292][0].apply(f,arguments)},{"./ac-shared-instance/SharedInstance":603,dup:292}],603:[function(d,g,f){arguments[4][293][0].apply(f,arguments)
},{dup:293}],604:[function(d,g,f){arguments[4][294][0].apply(f,arguments)},{"@marcom/ac-shared-instance":602,dup:294}],605:[function(d,g,f){arguments[4][288][0].apply(f,arguments)
},{dup:288}],606:[function(d,g,f){arguments[4][291][0].apply(f,arguments)},{"../Date/now":605,dup:291}],607:[function(d,g,f){arguments[4][292][0].apply(f,arguments)
},{"./ac-shared-instance/SharedInstance":608,dup:292}],608:[function(d,g,f){arguments[4][293][0].apply(f,arguments)
},{dup:293}],609:[function(d,g,f){arguments[4][297][0].apply(f,arguments)},{"@marcom/ac-polyfills/performance/now":606,dup:297}],610:[function(d,g,f){arguments[4][298][0].apply(f,arguments)
},{"./RAFExecutor":609,"@marcom/ac-shared-instance":607,dup:298}],611:[function(d,g,f){arguments[4][299][0].apply(f,arguments)
},{"@marcom/ac-event-emitter-micro":600,"@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance":604,"@marcom/ac-raf-executor/sharedRAFExecutorInstance":610,dup:299}],612:[function(h,m,i){var l=h("./SingleCallRAFEmitter");
var j=function(a){this.rafEmitter=new l();this.rafEmitter.on(a,this._onRAFExecuted.bind(this));
this.requestAnimationFrame=this.requestAnimationFrame.bind(this);this.cancelAnimationFrame=this.cancelAnimationFrame.bind(this);
this._frameCallbacks=[];this._nextFrameCallbacks=[];this._currentFrameID=-1;this._cancelFrameIdx=-1;
this._frameCallbackLength=0;this._nextFrameCallbacksLength=0;this._frameCallbackIteration=0
};var k=j.prototype;k.requestAnimationFrame=function(a){this._currentFrameID=this.rafEmitter.run();
this._nextFrameCallbacks.push(this._currentFrameID,a);this._nextFrameCallbacksLength+=2;
return this._currentFrameID};k.cancelAnimationFrame=function(a){this._cancelFrameIdx=this._nextFrameCallbacks.indexOf(a);
if(this._cancelFrameIdx===-1){return}this._nextFrameCallbacks.splice(this._cancelFrameIdx,2);
this._nextFrameCallbacksLength-=2;if(this._nextFrameCallbacksLength===0){this.rafEmitter.cancel()
}};k._onRAFExecuted=function(a){this._frameCallbacks=this._nextFrameCallbacks;this._frameCallbackLength=this._nextFrameCallbacksLength;
this._nextFrameCallbacks=[];this._nextFrameCallbacksLength=0;for(this._frameCallbackIteration=0;
this._frameCallbackIteration<this._frameCallbackLength;this._frameCallbackIteration+=2){this._frameCallbacks[this._frameCallbackIteration+1](a.time,a)
}};m.exports=j},{"./SingleCallRAFEmitter":614}],613:[function(h,m,i){var j=h("./RAFInterface");
var k=function(){this.events={}};var l=k.prototype;l.requestAnimationFrame=function(a){if(!this.events[a]){this.events[a]=new j(a)
}return this.events[a].requestAnimationFrame};l.cancelAnimationFrame=function(a){if(!this.events[a]){this.events[a]=new j(a)
}return this.events[a].cancelAnimationFrame};m.exports=new k()},{"./RAFInterface":612}],614:[function(m,l,h){var i=m("./RAFEmitter");
var k=function(a){i.call(this,a)};var j=k.prototype=Object.create(i.prototype);
j._subscribe=function(){return this.executor.subscribe(this,true)};l.exports=k},{"./RAFEmitter":611}],615:[function(f,i,g){var h=f("./RAFInterfaceController");
i.exports=h.requestAnimationFrame("draw")},{"./RAFInterfaceController":613}],616:[function(g,j,h){var i=g("./ac-media-object/factories/createVideo");
var k=g("./ac-media-object/factories/createFlow");j.exports={createFlow:k,createVideo:i}
},{"./ac-media-object/factories/createFlow":617,"./ac-media-object/factories/createVideo":618}],617:[function(k,j,g){var h=k("./../views/FlowView");
var i=k("@marcom/ac-object/clone");j.exports=function(c,a,d){var b=i(d||{},true);
var m;b.type="flow";function f(l){throw new Error(l)}if(!a){f("Please provide both a valid container element and a valid mediaSrc object as arguments.")
}else{if(!a.basePath){f("Please provide a valid mediaSrc object with a basePath property.")
}}if(!b.mediaObjectView){m=new h(c,a,b);m.options.mediaObjectView=m}else{m=b.mediaObjectView
}return m}},{"./../views/FlowView":621,"@marcom/ac-object/clone":591}],618:[function(o,n,p){var j=o("./../views/VideoView");
var m=o("./../views/InlinePolyfillVideoView");var q=o("@marcom/ac-feature").isHandheld;
var k=o("@marcom/ac-feature").isTablet;var l=o("@marcom/ac-object/clone");n.exports=function(a,f,b){var g=l(b||{},true);
var d;g.type="video";function c(h){throw new Error(h)}if(!f){c("Please provide both a valid container element and a valid mediaSrc object as arguments.")
}else{if(!f.basePath){c("Please provide a valid mediaSrc object with a basePath property.")
}}if(!g.mediaObjectView){if(g.iosInline&&!window.matchMedia("(-webkit-video-playable-inline)").matches&&(q()||k())){d=new m(a,f,g)
}else{d=new j(a,f,g)}d.options.mediaObjectView=d}else{d=g.mediaObjectView}return d
}},{"./../views/InlinePolyfillVideoView":622,"./../views/VideoView":623,"@marcom/ac-feature":25,"@marcom/ac-object/clone":591}],619:[function(n,m,o){var k=n("@marcom/ac-mvc-model").Model;
var i=n("@marcom/ac-object");function j(a){k.apply(this,arguments)}var l=j.prototype=i.create(k.prototype);
l.defaultAttributes={type:"video",paused:true,ended:false,ready:false,loadStart:false,loaded:false,error:false,destroyed:false,currentTime:0,playbackRate:1,duration:0,preload:false,autoplay:false,frameRate:24,enhanced:false,looping:false};
l.getType=function(){return this.get("type")};l.getPaused=function(){return this.get("paused")
};l.getEnded=function(){return this.get("ended")};l.getReady=function(){return this.get("ready")
};l.getDestroyed=function(){return this.get("destroyed")};l.getLoadStart=function(){return this.get("loadedStart")
};l.getLoaded=function(){return this.get("loaded")};l.getError=function(){return this.get("error")
};l.getCurrentTime=function(){return this.get("currentTime")};l.getPlaybackRate=function(){return this.get("playbackRate")
};l.getDuration=function(){return this.get("duration")};l.getPreload=function(){return this.get("preload")
};l.getAutoplay=function(){return this.get("autoplay")};l.getFrameRate=function(){return this.get("frameRate")
};l.getEnhanced=function(){return this.get("enhanced")};l.getLooping=function(){return this.get("looping")
};l.setPaused=function(a){this.set({paused:a})};l.setEnded=function(a){this.set({ended:a})
};l.setReady=function(a){this.set({ready:a})};l.setDestroyed=function(a){this.set({destroyed:a})
};l.setDuration=function(a){this.set({duration:a})};l.setLoadStart=function(a){this.set({loadStart:a})
};l.setLoaded=function(a){this.set({loaded:a})};l.setError=function(a){this.set({error:a})
};l.setCurrentTime=function(a){this.set({currentTime:a})};l.setPlaybackRate=function(a){this.set({playbackRate:a})
};l.setPreload=function(a){this.set({preload:a})};l.setAutoplay=function(a){this.set({autoplay:a})
};l.setFrameRate=function(a){this.set({frameRate:a})};l.setEnhanced=function(a){this.set({enhanced:a})
};l.setLooping=function(a){this.set({looping:a})};m.exports=j},{"@marcom/ac-mvc-model":567,"@marcom/ac-object":590}],620:[function(p,n,q){var k=p("./../models/MediaModel");
var l=p("@marcom/ac-mvc-view").View;var j=p("@marcom/ac-object");var o=function(b,a,c){l.call(this,{element:b});
this.options=j.clone(c||{},true);this.mediaSrc=a||"";this.model=this.options.model||new k(this.options);
this._onLoadStartChange=this._onLoadStartChange.bind(this);this._onLoadedChange=this._onLoadedChange.bind(this);
this._onPausedChange=this._onPausedChange.bind(this);this._onReadyChange=this._onReadyChange.bind(this);
this._onErrorChange=this._onErrorChange.bind(this);this._onEnhancedChange=this._onEnhancedChange.bind(this);
this._onCurrentTimeChange=this._onCurrentTimeChange.bind(this);this._onPlaybackRateChange=this._onPlaybackRateChange.bind(this);
this._onDestroyedChange=this._onDestroyedChange.bind(this);this._onEndedChange=this._onEndedChange.bind(this);
this._respondToPlay=this._respondToPlay.bind(this);this._respondToPause=this._respondToPause.bind(this);
this._respondToTimeUpdate=this._respondToTimeUpdate.bind(this);this._respondToEnded=this._respondToEnded.bind(this);
this._respondToDurationChange=this._respondToDurationChange.bind(this);this._respondToRateChange=this._respondToRateChange.bind(this);
this._init()};var m=o.prototype=j.create(l.prototype);m._init=function(){this._createMediaElement();
this._createMediaEmitter();this._createMediaLoader();this._bindEvents();this._config()
};m._createMediaElement=function(){};m._createMediaEmitter=function(){};m._createMediaLoader=function(){};
m._config=function(){if(this.options.preload===true){this._setPreload(true);this.load()
}if(this.options.autoplay===true){this._setAutoplay(true)}if(this.options.looping===true){this._setLooping(true)
}if(this.options.frameRate){this._setFrameRate(this.options.frameRate)}};m._bindEvents=function(){this._bindViewEvents();
this._bindModelEvents()};m.destroy=function(){if(!this.getDestroyed()){this._destroy();
this._setDestroyed(true);this.model.off();this.off();for(var a in this){if(this.hasOwnProperty(a)&&typeof this[a]!=="function"){this[a]=null
}}}};m._bindModelEvents=function(){this.model.on("change:loadStart",this._onLoadStartChange);
this.model.on("change:loaded",this._onLoadedChange);this.model.on("change:paused",this._onPausedChange);
this.model.on("change:ready",this._onReadyChange);this.model.on("change:error",this._onErrorChange);
this.model.on("change:enhanced",this._onEnhancedChange);this.model.on("change:currentTime",this._onCurrentTimeChange);
this.model.on("change:playbackRate",this._onPlaybackRateChange);this.model.on("change:destroyed",this._onDestroyedChange);
this.model.on("change:ended",this._onEndedChange)};m._onLoadStartChange=function(){this.trigger("loadstart")
};m._onLoadedChange=function(){this.trigger("loaded")};m._onPausedChange=function(a){if(a.value===true){this.trigger("pause");
this.el.classList.remove("mediaobject-playing")}else{this.trigger("play");this.el.classList.remove("mediaobject-ended");
this.el.classList.add("mediaobject-playing")}};m._onReadyChange=function(){this.trigger("ready")
};m._onErrorChange=function(){this.trigger("error")};m._onEnhancedChange=function(){this.el.classList.add("mediaobject-enhanced");
this.mediaElement.classList.add("mediaobject-element");this.trigger("enhanced")
};m._onCurrentTimeChange=function(){this.trigger("timeupdate")};m._onPlaybackRateChange=function(){this.trigger("ratechange")
};m._onDestroyedChange=function(){this.el.classList.remove("mediaobject-playing");
this.el.classList.remove("mediaobject-ended");this.el.classList.remove("mediaobject-enhanced");
this.el.classList.add("mediaobject-destroyed");this.trigger("destroyed")};m._onEndedChange=function(a){if(a.value===true){this.trigger("ended")
}};m._bindViewEvents=function(){if(!this.mediaEmitter){return}this.mediaEmitter.on("play",this._respondToPlay);
this.mediaEmitter.on("pause",this._respondToPause);this.mediaEmitter.on("timeupdate",this._respondToTimeUpdate);
this.mediaEmitter.on("ended",this._respondToEnded);this.mediaEmitter.on("durationchange",this._respondToDurationChange);
this.mediaEmitter.on("ratechange",this._respondToRateChange)};m._respondToPlay=function(){this.model.set({ended:false,paused:false})
};m._respondToPause=function(){this.model.setPaused(true)};m._respondToTimeUpdate=function(){var a=0;
if(this.mediaElement.currentTime){a=this.mediaElement.currentTime}else{if(this.mediaEmitter.currentTime){a=this.mediaEmitter.currentTime
}else{return}}if(this.getCurrentTime()!==a){this.model.set({currentTime:a})}};m._respondToEnded=function(){this.model.set({ended:true,paused:true});
this.el.classList.remove("mediaobject-playing");this.el.classList.add("mediaobject-ended")
};m._respondToDurationChange=function(){var a=0;if(this.mediaElement.duration){a=this.mediaElement.duration
}else{if(this.mediaEmitter.duration){a=this.mediaEmitter.duration}else{return}}this.model.set({duration:a})
};m._respondToRateChange=function(){var a=0;if(this.mediaElement.playbackRate){a=this.mediaElement.playbackRate
}else{if(this.mediaEmitter.playbackRate){a=this.mediaEmitter.playbackRate}else{return
}}this.model.set({playbackRate:a})};m.enhance=function(){};m.play=function(){};
m.pause=function(){};m.reset=function(){};m.setCurrentTime=function(a){};m.setPlaybackRate=function(a){};
m.goToFrame=function(a){var b=a/this.model.frameRate;return this.setCurrentTime(b)
};m.goToPercent=function(b){var a=b*this.getDuration();return this.setCurrentTime(a)
};m._setReady=function(a){this.model.setReady(a)};m._setLoadStart=function(a){this.model.setLoadStart(a)
};m._setLoaded=function(a){this.model.setLoaded(a)};m._setError=function(a){this.model.setError(a)
};m._setDuration=function(a){this.model.setDuration(a)};m._setPreload=function(a){this.model.setPreload(a)
};m._setAutoplay=function(a){this.model.setAutoplay(a)};m._setFrameRate=function(a){this.model.setFrameRate(a)
};m._setEnhanced=function(a){this.model.setEnhanced(a)};m._setDestroyed=function(a){this.model.setDestroyed(a)
};m._setLooping=function(a){};m._destroy=function(){};m.getType=function(){return this.model.getType()
};m.getPaused=function(){return this.model.getPaused()};m.getEnded=function(){return this.model.getEnded()
};m.getReady=function(){return this.model.getReady()};m.getLoadStart=function(){return this.model.getLoadStart()
};m.getLoaded=function(){return this.model.getLoaded()};m.getError=function(){return this.model.getError()
};m.getDuration=function(){return this.model.getDuration()};m.getEnhanced=function(){return this.model.getEnhanced()
};m.getCurrentTime=function(){return this.model.getCurrentTime()};m.getCurrentFrame=function(){return Math.floor(this.getCurrentTime()*this.options.frameRate)
};m.getCurrentPercent=function(){return(this.model.getCurrentTime()/this.getDuration())||0
};m.getPlaybackRate=function(){return this.model.getPlaybackRate()};m.getFrameRate=function(){return this.model.getFrameRate()
};m.getPreload=function(){return this.model.getPreload()};m.getAutoplay=function(){return this.model.getAutoplay()
};m.getLooping=function(){return this.model.getLooping()};m.getDestroyed=function(){if(this.model){return this.model.getDestroyed()
}else{return true}};n.exports=o},{"./../models/MediaModel":619,"@marcom/ac-mvc-view":581,"@marcom/ac-object":590}],621:[function(r,s,q){var p=r("./BaseView");
var l=r("@marcom/ac-dom-nodes");var n=r("@marcom/ac-flow").createFlow;var k=r("@marcom/ac-raf-emitter/draw");
var m=function(b,a,c){p.call(this,b,a,c);this._onLoad=this._onLoad.bind(this);this._onError=this._onError.bind(this);
this._onReady=this._onReady.bind(this)};var o=m.prototype=Object.create(p.prototype);
o._createMediaElement=function(){this.mediaElement=document.createElement("canvas")
};o._createMediaEmitter=function(){this.flowOptions={element:this.mediaElement,preload:false,keyframeCache:this.options.keyframeCache||false};
this.mediaEmitter=n(this.flowOptions,this.mediaSrc)};o._createMediaLoader=function(){this.mediaLoader=this.mediaEmitter
};o.load=function(){this._setLoadStart(true);this.mediaLoader.once("loaded",this._onLoad);
this.mediaLoader.once("error",this._onError);this.mediaEmitter.once("canplaythrough",this._onReady);
if(!this.loaded){return this._load()}};o._load=function(){return this.mediaLoader.load()
};o._onLoad=function(){this._setLoaded(true)};o._onError=function(){this._setError(true)
};o._onReady=function(){this._setReady(true);this._setDuration(this.mediaEmitter.duration);
this.setPlaybackRate(this.getPlaybackRate());this._totalFrames=this._getTotalFrames();
if(this.getAutoplay()){if(this.getEnhanced===false){this.enhance()}this.play()}};
o._getTotalFrames=function(){return this.getDuration()*this.getFrameRate()};o.enhance=function(){this._setEnhanced(true);
k(function(){if(this.mediaElement){this._inject()}}.bind(this))};o._inject=function(){l.insertFirstChild(this.mediaElement,this.el)
};o._destroy=function(){this._remove();if(this.mediaEmitter){this.mediaEmitter.destroy()
}};o._remove=function(){l.remove(this.mediaElement)};o.play=function(){if(this.model.getPaused()===false){return
}if(this.mediaEmitter.currentTime>=this.getDuration()){this.setCurrentTime(0)}if(this.getReady()&&this.mediaEmitter!==null){this.mediaEmitter.play()
}};o.pause=function(){if(this.model.getPaused()===true){return}this.mediaEmitter.pause()
};o.reset=function(){if(this.model.getCurrentTime()===0){return}this.setCurrentTime(0);
this.pause()};o.setCurrentTime=function(a){if(a<0){a=0}if(a>this.getDuration()){a=this.getDuration()
}this.mediaEmitter.currentTime=a};o.setPlaybackRate=function(a){this.mediaEmitter.playbackRate=a
};o._setLooping=function(a){this.mediaEmitter.loop=a;this.model.setLooping(a)};
s.exports=m},{"./BaseView":620,"@marcom/ac-dom-nodes":427,"@marcom/ac-flow":544,"@marcom/ac-raf-emitter/draw":615}],622:[function(p,o,q){var j=p("./VideoView");
var l=j.prototype;var k=p("@marcom/ac-raf-emitter/RAFEmitter");var n=function(b,a,c){j.call(this,b,a,c);
this._polyfillRAFEmitter=c.polyfillRAFEmitter||new k();this._boundHandlePolyfillRAFEmitterDraw=this._handlePolyfillRAFEmitterDraw.bind(this);
this._polyfillRAFEmitter.on("draw",this._boundHandlePolyfillRAFEmitterDraw)};var m=n.prototype=Object.create(j.prototype);
m._initInlineVideo=function(){l._initInlineVideo.apply(this,arguments);this._shouldLoop=false
};m._destroy=function(){l._destroy.apply(this,arguments);if(this._polyfillRAFEmitter){this._polyfillRAFEmitter.destroy();
this._polyfillRAFEmitter=null}};m.play=function(){if(this.model.getPaused()===false){return
}this.model.setPaused(false);this._polyfillRAFEmitter.run()};m.pause=function(){if(this.model.getPaused()===true){return
}this.model.setPaused(true);this._polyfillRAFEmitter.cancel()};m.setCurrentTime=function(a){l.setCurrentTime.apply(this,arguments);
this._polyfillRAFEmitter.run()};m._handlePolyfillRAFEmitterDraw=function(c){var g=this.model.getCurrentTime();
var h=this.model.getPlaybackRate();var d=this.mediaElement.duration;var b=(c.delta/1000)*h;
if(this.model.getPaused()){return}g+=b;var s=(g<=0);var a=(g>=d);var f=(h>=0);var i=(h<0);
if(s){g=0}if(a){g=d}if(this._shouldLoop){this._shouldLoop=false;if(f){this.setCurrentTime(b)
}else{this.setCurrentTime(d-b)}return}this.setCurrentTime(g);if((s&&i)||(a&&f)){if(this.model.getLooping()){this._shouldLoop=true
}else{this.pause();this.model.setEnded(true)}}};o.exports=n},{"./VideoView":623,"@marcom/ac-raf-emitter/RAFEmitter":611}],623:[function(E,F,D){var C=E("./BaseView");
var s=C.prototype;var w=E("@marcom/ac-raf-emitter/draw");var y=E("@marcom/ac-dom-nodes");
var u=E("@marcom/ac-dom-emitter").DOMEmitter;var x=E("@marcom/ac-dom-styles");var v=E("@marcom/ac-asset-loader").AssetLoader;
var t=E("@marcom/ac-asset-loader").Asset.Video;var G=E("@marcom/ac-useragent");
var z=E("@marcom/ac-feature").isHandheld;var A=E("@marcom/ac-feature").isTablet;
var r=function(b,a,c){this.srcForVideoEl=null;this._cannotPlayInlineVideo=null;
this._onLoaded=this._onLoaded.bind(this);this._onReady=this._onReady.bind(this);
C.call(this,b,a,c);if(c.iosInline){this._initInlineVideo()}};var B=r.prototype=Object.create(C.prototype);
B.inlineClassName="mediaobject-ios-inline-video";B.inlineAttribute="playsinline";
B._cannotPlayInlineVideo=null;B._initInlineVideo=function(){if(this.mediaElement.hasAttribute("controls")){this.mediaElement.removeAttribute("controls")
}this.mediaElement.setAttribute(this.inlineAttribute,"");this.mediaElement.classList.add(this.inlineClassName)
};B._createMediaElement=function(){this.mediaElement=document.createElement("video")
};B._createMediaEmitter=function(){this.mediaEmitter=new u(this.mediaElement)};
B._createMediaLoader=function(){var b,a;this.mediaSrc.basePath=this._forceTrailingSlash(this.mediaSrc.basePath);
if(this.mediaSrc.splitFileLoading){b=this.mediaSrc.basePath;a=new t(b,{element:this.mediaElement,forceElementLoading:false,split:true});
this.mediaLoader=new v(a)}else{this.mediaSrc.fileFormat=this._checkFileFormat(this.mediaSrc.fileFormat);
b=this.mediaSrc.basePath+this.mediaSrc.filename+this.mediaSrc.fileFormat;this.srcForVideoEl=b
}};B._forceTrailingSlash=function(a){if(a&&a.lastIndexOf("/")!==a.length-1){a=a+"/"
}return a};B._checkFileFormat=function(a){if(a&&a.lastIndexOf(".")!==0){a="."+a
}return a};B.load=function(){this._setLoadStart(true);if(this.mediaSrc.splitFileLoading){var a=function(){if(this.mediaEmitter){this.mediaEmitter.once("loadeddata",this._onLoaded);
this.mediaEmitter.once("canplaythrough",this._onReady)}}.bind(this);var b=function(){this._setError(true);
throw new Error("Video failed to load.")}.bind(this);this.mediaLoader.load().then(a,b)
}else{if(!this.cannotPlayInlineVideo()){this.mediaEmitter.once("loadeddata",this._onLoaded);
this.mediaEmitter.once("canplaythrough",this._onReady)}this.mediaElement.src=this.srcForVideoEl;
if(this.cannotPlayInlineVideo()){this._onLoaded()}else{this.mediaElement.load()
}}};B._onLoaded=function(){this._setLoaded(true)};B.cannotPlayInlineVideo=function(){if(this._cannotPlayInlineVideo!==null){return this._cannotPlayInlineVideo
}var b=G.os==="iOS"&&z();var a=G.os==="iOS"&&A()&&G.version<8;this._cannotPlayInlineVideo=b||a;
return this._cannotPlayInlineVideo};B._onReady=function(){this._setReady(true);
if(this.getAutoplay()){if(!this.getEnhanced()){this.enhance()}this.play()}};B.enhance=function(){this._setEnhanced(true);
w(function(){if(this.mediaElement.tagName==="VIDEO"){y.insertLastChild(this.mediaElement,this.el);
x.setStyle(this.mediaElement,{visibility:"hidden"});w(function(){if(this.mediaElement){this.setPlaybackRate(this.getPlaybackRate());
x.setStyle(this.mediaElement,{visibility:"visible"})}}.bind(this))}}.bind(this))
};B._destroy=function(){this._remove();if(this.mediaEmitter){this.mediaEmitter.off()
}if(this.mediaLoader&&typeof this.mediaLoader.off==="function"){this.mediaLoader.off()
}};B._remove=function(){y.remove(this.mediaElement)};B._onEndedChange=function(a){s._onEndedChange.call(this,a);
if(G.os==="iOS"&&z()&&a.value===true){this.mediaElement.webkitExitFullScreen()}};
B.play=function(){if(this.model.getPaused()===false){return}var a=this.mediaElement.play();
if(a&&typeof Promise!=="undefined"&&a instanceof Promise){a.then(function(){})["catch"](function(){})
}};B.pause=function(){if(this.model.getPaused()===true){return}this.mediaElement.pause()
};B.reset=function(){if(this.model.getCurrentTime()===0){return}this.setCurrentTime(0);
this.pause()};B.setCurrentTime=function(a){if(!this.mediaElement.duration){return
}this.model.setCurrentTime(a);this.mediaElement.currentTime=a};B.setPlaybackRate=function(a){this.mediaElement.playbackRate=a
};B._setLooping=function(a){this.mediaElement.loop=a;this.model.setLooping(a)};
F.exports=r},{"./BaseView":620,"@marcom/ac-asset-loader":376,"@marcom/ac-dom-emitter":415,"@marcom/ac-dom-nodes":427,"@marcom/ac-dom-styles":458,"@marcom/ac-feature":25,"@marcom/ac-raf-emitter/draw":615,"@marcom/ac-useragent":663}],624:[function(d,g,f){arguments[4][120][0].apply(f,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":625,dup:120}],625:[function(d,g,f){arguments[4][121][0].apply(f,arguments)
},{dup:121}],626:[function(d,g,f){arguments[4][141][0].apply(f,arguments)},{dup:141}],627:[function(d,g,f){arguments[4][269][0].apply(f,arguments)
},{"./extend":628,dup:269}],628:[function(d,g,f){arguments[4][129][0].apply(f,arguments)
},{"@marcom/ac-polyfills/Array/prototype.forEach":626,dup:129}],629:[function(d,g,f){arguments[4][317][0].apply(f,arguments)
},{"./promise/polyfill":633,"./promise/promise":634,dup:317}],630:[function(d,g,f){arguments[4][318][0].apply(f,arguments)
},{"./utils":638,dup:318}],631:[function(d,g,f){arguments[4][319][0].apply(f,arguments)
},{_process:264,dup:319}],632:[function(d,g,f){arguments[4][320][0].apply(f,arguments)
},{dup:320}],633:[function(d,g,f){arguments[4][321][0].apply(f,arguments)},{"./promise":634,"./utils":638,dup:321}],634:[function(d,g,f){arguments[4][322][0].apply(f,arguments)
},{"./all":630,"./asap":631,"./config":632,"./race":635,"./reject":636,"./resolve":637,"./utils":638,dup:322}],635:[function(d,g,f){arguments[4][323][0].apply(f,arguments)
},{"./utils":638,dup:323}],636:[function(d,g,f){arguments[4][324][0].apply(f,arguments)
},{dup:324}],637:[function(d,g,f){arguments[4][325][0].apply(f,arguments)},{dup:325}],638:[function(d,g,f){arguments[4][326][0].apply(f,arguments)
},{dup:326}],639:[function(d,g,f){arguments[4][147][0].apply(f,arguments)},{dup:147}],640:[function(d,g,f){arguments[4][361][0].apply(f,arguments)
},{dup:361,"es6-promise":629}],641:[function(d,g,f){arguments[4][148][0].apply(f,arguments)
},{dup:148}],642:[function(d,g,f){g.exports={Queue:d("./ac-queue/Queue"),QueueItem:d("./ac-queue/QueueItem"),LiveQueue:d("./ac-queue/LiveQueue")}
},{"./ac-queue/LiveQueue":643,"./ac-queue/Queue":644,"./ac-queue/QueueItem":645}],643:[function(i,o,j){i("@marcom/ac-polyfills/Promise");
i("@marcom/ac-polyfills/requestAnimationFrame");i("@marcom/ac-polyfills/Function/prototype.bind");
var l=i("./Queue");var k=i("./QueueItem");function m(a){this._queue=new l();this._maxProcesses=a||1;
this._availableSlots=this._maxProcesses;this._rafId=0;this._isRunning=false;this._boundFunctions={_run:this._run.bind(this),_releaseSlot:this._releaseSlot.bind(this)}
}var n=m.prototype;n.start=function(){if(this._isRunning){cancelAnimationFrame(this._rafId)
}this._rafId=requestAnimationFrame(this._boundFunctions._run);this._isRunning=true
};n.pause=function(){if(this._isRunning){cancelAnimationFrame(this._rafId);this._rafId=0
}this._isRunning=false};n.stop=function(){this.pause();this.clear()};n.enqueue=function(c,b){if(typeof c!=="function"){throw new Error("LiveQueue can only enqueue functions")
}if(b===undefined){b=l.PRIORITY_DEFAULT}var a=new k(c,b);return this.enqueueQueueItem(a)
};n.enqueueQueueItem=function(a){this._queue.enqueueQueueItem(a);if(this._isRunning&&this._rafId===0){this.start()
}return a};n.dequeueQueueItem=function(a){return this._queue.dequeueQueueItem(a)
};n.clear=function(){this._queue=new l()};n.destroy=function(){this.pause();this._isRunning=false;
this._queue=null;this._boundFunctions=null};n.count=function(){return this._queue.count()+this.pending()
};n.pending=function(){return this._maxProcesses-this._availableSlots};n.isEmpty=function(){return this.count()===0
};n._run=function(){if(!this._isRunning){return}this._rafId=requestAnimationFrame(this._boundFunctions._run);
if(this._queue.isEmpty()||this._availableSlots===0){return}var a=this._queue.dequeue();
var b=a.data();if(this._isPromise(b)){this._retainSlot();b.then(this._boundFunctions._releaseSlot,this._boundFunctions._releaseSlot)
}this._stopRunningIfDone()};n._retainSlot=function(){this._availableSlots--};n._releaseSlot=function(){this._availableSlots++;
this._stopRunningIfDone()};n._stopRunningIfDone=function(){if(this._rafId!=0&&this._queue.count()===0&&this._availableSlots==this._maxProcesses){cancelAnimationFrame(this._rafId);
this._rafId=0}};n._isPromise=function(a){return !!(a&&typeof a.then==="function")
};o.exports=m},{"./Queue":644,"./QueueItem":645,"@marcom/ac-polyfills/Function/prototype.bind":639,"@marcom/ac-polyfills/Promise":640,"@marcom/ac-polyfills/requestAnimationFrame":641}],644:[function(h,m,i){var j=h("./QueueItem");
function k(){this._items=[]}var l=k.prototype;l.enqueue=function(a,c){if(c===undefined){c=k.PRIORITY_DEFAULT
}var b=new j(a,c);return this.enqueueQueueItem(b)};l.enqueueQueueItem=function(a){if(this._items.indexOf(a)===-1){this._items.push(a)
}return a};l.dequeue=function(){this._heapSort();var a=this._items.length-1;var b=this._items[0];
this._items[0]=this._items[a];this._items.pop();return b};l.dequeueQueueItem=function(a){var b=this._items.indexOf(a);
if(b>-1){this._items.splice(b,1)}return a};l.peek=function(){if(this.count()==0){return null
}this._heapSort();return this._items[0]};l.isEmpty=function(){return this._items.length===0
};l.count=function(){return this._items.length};l.toString=function(){var a=["Queue total items: "+this.count()+"\n"];
for(var b=0;b<this.count();++b){a.push(this._items[b].toString()+"\n")}return a.join("")
};l._heapSort=function(){var d=0;for(var a=this._items.length-1;a>=0;a--){var f=a;
while(f>0){d++;var c=Math.floor((f-1)/2);if(this._items[f].compareTo(this._items[c])>=0){break
}var b=this._items[f];this._items[f]=this._items[c];this._items[c]=b;f=c}}};k.PRIORITY_LOW=10;
k.PRIORITY_DEFAULT=5;k.PRIORITY_HIGH=1;m.exports=k},{"./QueueItem":645}],645:[function(h,m,i){var j=0;
function k(a,b){this.priority=b;this.data=a;this.insertionOrder=j++}var l=k.prototype;
l.compareTo=function(a){if(this.priority<a.priority){return -1}else{if(this.priority>a.priority){return 1
}else{return(this.insertionOrder<a.insertionOrder)?-1:1}}};l.toString=function(){return"QueueItem {priority:"+this.priority+",\tdata:"+this.data+"\tinsertionOrder:"+this.insertionOrder+"}"
};m.exports=k},{}],646:[function(d,g,f){arguments[4][292][0].apply(f,arguments)
},{"./ac-shared-instance/SharedInstance":647,dup:292}],647:[function(d,g,f){arguments[4][293][0].apply(f,arguments)
},{dup:293}],648:[function(d,g,f){arguments[4][294][0].apply(f,arguments)},{"@marcom/ac-shared-instance":646,dup:294}],649:[function(d,g,f){arguments[4][288][0].apply(f,arguments)
},{dup:288}],650:[function(d,g,f){arguments[4][291][0].apply(f,arguments)},{"../Date/now":649,dup:291}],651:[function(d,g,f){arguments[4][292][0].apply(f,arguments)
},{"./ac-shared-instance/SharedInstance":652,dup:292}],652:[function(d,g,f){arguments[4][293][0].apply(f,arguments)
},{dup:293}],653:[function(d,g,f){arguments[4][297][0].apply(f,arguments)},{"@marcom/ac-polyfills/performance/now":650,dup:297}],654:[function(d,g,f){arguments[4][298][0].apply(f,arguments)
},{"./RAFExecutor":653,"@marcom/ac-shared-instance":651,dup:298}],655:[function(d,g,f){arguments[4][299][0].apply(f,arguments)
},{"@marcom/ac-event-emitter-micro":624,"@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance":648,"@marcom/ac-raf-executor/sharedRAFExecutorInstance":654,dup:299}],656:[function(d,g,f){arguments[4][612][0].apply(f,arguments)
},{"./SingleCallRAFEmitter":658,dup:612}],657:[function(d,g,f){arguments[4][613][0].apply(f,arguments)
},{"./RAFInterface":656,dup:613}],658:[function(d,g,f){arguments[4][614][0].apply(f,arguments)
},{"./RAFEmitter":655,dup:614}],659:[function(d,g,f){arguments[4][615][0].apply(f,arguments)
},{"./RAFInterfaceController":657,dup:615}],660:[function(f,i,g){var h=f("./RAFInterfaceController");
i.exports=h.requestAnimationFrame("update")},{"./RAFInterfaceController":657}],661:[function(s,t,p){var q=s("@marcom/ac-object/defaults");
var r=s("@marcom/ac-jetpack-lib/core/BaseComponent");var l=s("./ProgressiveImageLoader");
var n={};u.Events={ImageLoad:"progressive-image-load",Complete:"progressive-image-complete"};
function u(f,c,b,g,a,d,h){this.name=b+"_"+h;r.apply(this,arguments);if(this.section.getComponentOfType(this.componentName)){throw new Error("Each Jetpack Section can only contain one ProgressiveImageComponent. Mark progressive images with the [data-progressive-image] attribute, or use [data-progressive-image-group] to distinctly load multiple groups of images in a section")
}try{this._loadOptions=JSON.parse(this.element.getAttribute("data-progressive-image-options"))
}catch(i){this._loadOptions=null}this.imageLoader=new l({container:this.element,includeContainer:true})
}var o=u.prototype=Object.create(r.prototype);var m=r.prototype;u.IS_SUPPORTED=function(){var a=document.getElementsByTagName("html")[0];
return a.classList.contains("progressive-image")};o.setupEvents=function(){m.setupEvents.apply(this,arguments);
this._onImageLoad=this._onImageLoad.bind(this);this._onComplete=this._onComplete.bind(this);
this.imageLoader.on(l.Events.ImageLoad,this._onImageLoad);this.imageLoader.on(l.Events.Complete,this._onComplete)
};o.onSectionWillAppearWithPadding=function(){m.onSectionWillAppearWithPadding.apply(this,arguments);
this.imageLoader.load(this._loadOptions)};o.destroy=function(){this.imageLoader.destroy();
this.imageLoader=null;m.destroy.apply(this,arguments)};o._onImageLoad=function(a){this.section.trigger(u.Events.ImageLoad,a)
};o._onComplete=function(){this.section.trigger(u.Events.Complete)};t.exports=u
},{"./ProgressiveImageLoader":662,"@marcom/ac-jetpack-lib/core/BaseComponent":300,"@marcom/ac-object/defaults":627}],662:[function(x,y,s){var v=x("@marcom/ac-object/defaults");
var u=x("@marcom/ac-queue").LiveQueue;var o=x("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var t=x("@marcom/ac-raf-emitter/update");var q=x("@marcom/ac-raf-emitter/draw");
var w={container:document.body,includeContainer:false};var p={loadingPoolSize:8,timeout:null,imageDataAttribute:"data-progressive-image",imageAnimate:true,imageAnimateClass:"progressive-image-animated"};
n.Events={ImageLoad:"image-load",Complete:"complete"};function n(a){o.call(this);
this.options=v(w,a);this.loadingOptions=null;this.els=[];this.loadingQueue=null;
this._queueItems=[];this._queueItemsObj={};this._loadOrder=[];this._timeout=null;
this._didCallLoad=false}var r=n.prototype=Object.create(o.prototype);r.load=function(a){if(this._didCallLoad){return
}this._didCallLoad=true;this.loadingOptions=v(p,a);this.loadingQueue=new u(this.loadingOptions.loadingPoolSize);
this.els=Array.from(this._getProgressiveImageElements());if(this.options.includeContainer&&this.options.container.hasAttribute(this._getProgressiveImageDataAttribute())){this.els.unshift(this.options.container)
}q(function(){var c,d=this.els.length,b;for(c=0;c<d;c++){b={queueItem:this.loadingQueue.enqueue(this._loadNextItem.bind(this,c),c),el:this.els[c],id:c};
this._queueItems.push(b);this._queueItemsObj[c]=b;if(this.loadingOptions.imageAnimate){this.els[c].classList.add(this.loadingOptions.imageAnimateClass)
}}t(function(){this.loadingQueue.start();if(typeof this.loadingOptions.timeout==="number"){this._timeout=setTimeout(this.cancel.bind(this),this.loadingOptions.timeout)
}}.bind(this))}.bind(this))};r.setVisible=function(a){return new Promise(function(b,c){q(function(){a.removeAttribute(this._getProgressiveImageDataAttribute());
b();a=null}.bind(this))}.bind(this))};r.cancel=function(){if(this.els){var a,b=this.els.length;
for(a=0;a<b;a++){this.setVisible(this.els[a]);if(this.loadingOptions.imageAnimate){q(function(){this.els[a].setAttribute("data-progressive-image-loaded","")
}.bind(this,a))}}}this._handleLoadingComplete()};r.destroy=function(){this.cancel();
this.off();o.prototype.destroy.call(this)};r._loadNextItem=function(a){return new Promise(function(f,c,d){var b=this._queueItemsObj[f];
this._loadAndSetVisible(b.el).then(function(){var g=this._queueItems.indexOf(b);
this._queueItems.splice(g,1);this._queueItemsObj[b.id]=null;c();this._handleImageLoad(b.el);
b=c=null;if(this.loadingQueue.count()===1){this._handleLoadingComplete()}}.bind(this))
}.bind(this,a))};r._loadAndSetVisible=function(a){return new Promise(function(b,c){this.setVisible(a).then(function(){this._getBackgroundImageSrc(a).then(function(d){this._loadImage(d).then(b);
a=null}.bind(this))}.bind(this))}.bind(this))};r._getBackgroundImageSrc=function(a){return new Promise(function(b,c){t(function(){var d=a.currentStyle;
if(!d){d=window.getComputedStyle(a,false)}a=null;if(d.backgroundImage.indexOf("url(")===0){b(d.backgroundImage.slice(4,-1).replace(/"/g,""));
return}b(null)}.bind(this))}.bind(this))};r._getProgressiveImageDataAttribute=function(){return this.loadingOptions.imageDataAttribute
};r._getProgressiveImageCSSQuery=function(){return"["+this._getProgressiveImageDataAttribute()+"]"
};r._getProgressiveImageElements=function(){return this.options.container.querySelectorAll(this._getProgressiveImageCSSQuery())||[]
};r._loadImage=function(a){return new Promise(this._loadImagePromiseFunc.bind(this,a))
};r._loadImagePromiseFunc=function(a,b,c){function d(){this.removeEventListener("load",d);
b(this);b=null}if(!a){b(null);return}var f=new Image();f.addEventListener("load",d);
f.src=a};r._clearTimeout=function(){if(this._timeout){window.clearTimeout(this._timeout);
this._timeout=null}};r._handleImageLoad=function(a){q(function(){this.trigger(n.Events.ImageLoad,a);
if(this.loadingOptions.imageAnimate){a.setAttribute("data-progressive-image-loaded","")
}a=null}.bind(this))};r._handleLoadingComplete=function(){this.loadingQueue.stop();
this._clearTimeout();this.trigger(n.Events.Complete)};y.exports=n},{"@marcom/ac-event-emitter-micro":624,"@marcom/ac-object/defaults":627,"@marcom/ac-queue":642,"@marcom/ac-raf-emitter/draw":659,"@marcom/ac-raf-emitter/update":660}],663:[function(f,i,g){var h={ua:window.navigator.userAgent,platform:window.navigator.platform,vendor:window.navigator.vendor};
i.exports=f("./parseUserAgent")(h)},{"./parseUserAgent":666}],664:[function(d,g,f){g.exports={browser:{safari:false,chrome:false,firefox:false,ie:false,opera:false,android:false,edge:false,version:{name:"",major:0,minor:0,patch:0,documentMode:false}},os:{osx:false,ios:false,android:false,windows:false,linux:false,fireos:false,chromeos:false,version:{name:"",major:0,minor:0,patch:0}}}
},{}],665:[function(d,g,f){g.exports={browser:[{name:"edge",userAgent:"Edge",version:["rv","Edge"],test:function(a){return(a.ua.indexOf("Edge")>-1||a.ua==="Mozilla/5.0 (Windows NT 10.0; Win64; x64)")
}},{name:"chrome",userAgent:"Chrome"},{name:"firefox",test:function(a){return(a.ua.indexOf("Firefox")>-1&&a.ua.indexOf("Opera")===-1)
},version:"Firefox"},{name:"android",userAgent:"Android"},{name:"safari",test:function(a){return(a.ua.indexOf("Safari")>-1&&a.vendor.indexOf("Apple")>-1)
},version:"Version"},{name:"ie",test:function(a){return(a.ua.indexOf("IE")>-1||a.ua.indexOf("Trident")>-1)
},version:["MSIE","rv"],parseDocumentMode:function(){var a=false;if(document.documentMode){a=parseInt(document.documentMode,10)
}return a}},{name:"opera",userAgent:"Opera",version:["Version","Opera"]}],os:[{name:"windows",test:function(a){return(a.platform.indexOf("Win")>-1)
},version:"Windows NT"},{name:"osx",userAgent:"Mac",test:function(a){return(a.platform.indexOf("Mac")>-1)
}},{name:"ios",test:function(a){return(a.ua.indexOf("iPhone")>-1||a.ua.indexOf("iPad")>-1)
},version:["iPhone OS","CPU OS"]},{name:"linux",userAgent:"Linux",test:function(a){return(a.platform.indexOf("Linux")>-1&&a.ua.indexOf("Android")===-1)
}},{name:"fireos",test:function(a){return(a.ua.indexOf("Firefox")>-1&&a.ua.indexOf("Mobile")>-1)
},version:"rv"},{name:"android",userAgent:"Android"},{name:"chromeos",userAgent:"CrOS"}]}
},{}],666:[function(r,s,p){var q=r("./defaults");var m=r("./dictionary");function n(a){return new RegExp(a+"[a-zA-Z\\s/:]+([0-9_.]+)","i")
}function o(g,a){if(typeof g.parseVersion==="function"){return g.parseVersion(a)
}else{var d=g.version||g.userAgent;if(typeof d==="string"){d=[d]}var f=d.length;
var c;for(var b=0;b<f;b++){c=a.match(n(d[b]));if(c&&c.length>1){return c[1].replace(/_/g,".")
}}}}function k(a,d,g){var h=a.length;var f;var c;for(var i=0;i<h;i++){if(typeof a[i].test==="function"){if(a[i].test(g)===true){f=a[i].name
}}else{if(g.ua.indexOf(a[i].userAgent)>-1){f=a[i].name}}if(f){d[f]=true;c=o(a[i],g.ua);
if(typeof c==="string"){var b=c.split(".");d.version.name=c;if(b&&b.length>0){d.version.major=parseInt(b[0]||0);
d.version.minor=parseInt(b[1]||0);d.version.patch=parseInt(b[2]||0)}}else{if(f==="edge"){d.version.name="12.0.0";
d.version.major="12";d.version.minor="0";d.version.patch="0"}}if(typeof a[i].parseDocumentMode==="function"){d.version.documentMode=a[i].parseDocumentMode()
}return d}}return d}function l(a){var b={};b.browser=k(m.browser,q.browser,a);b.os=k(m.os,q.os,a);
return b}s.exports=l},{"./defaults":664,"./dictionary":665}],667:[function(d,g,f){arguments[4][72][0].apply(f,arguments)
},{dup:72}],668:[function(d,g,f){arguments[4][120][0].apply(f,arguments)},{"./ac-event-emitter-micro/EventEmitterMicro":669,dup:120}],669:[function(d,g,f){arguments[4][121][0].apply(f,arguments)
},{dup:121}],670:[function(d,g,f){arguments[4][147][0].apply(f,arguments)},{dup:147}],671:[function(d,g,f){arguments[4][289][0].apply(f,arguments)
},{dup:289}],672:[function(d,g,f){arguments[4][360][0].apply(f,arguments)},{dup:360}],673:[function(v,w,s){v("@marcom/ac-polyfills/Function/prototype.bind");
v("@marcom/ac-polyfills/Object/keys");v("@marcom/ac-polyfills/Object/create");var m=v("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var p=v("@marcom/ac-dom-events/utils/addEventListener");var q=v("@marcom/ac-feature/mediaQueriesAvailable");
var u="viewport-emitter";var o="::before";var t="only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)";
function n(a){m.call(this);this._initializeElement(a);if(q()){this._updateViewport=this._updateViewport.bind(this);
p(window,"resize",this._updateViewport);p(window,"orientationchange",this._updateViewport);
this._retinaQuery=window.matchMedia(t);this._updateRetina();if(this._retinaQuery.addListener){this._updateRetina=this._updateRetina.bind(this);
this._retinaQuery.addListener(this._updateRetina)}}this._updateViewport()}var r=n.prototype=Object.create(m.prototype);
r.viewport=false;r.retina=false;r._initializeElement=function(b){var a;b=b||u;a=document.getElementById(b);
if(!a){a=document.createElement("div");a.id=b;a=document.body.appendChild(a)}this._el=a
};r._getElementContent=function(){var a;if("currentStyle" in this._el){a=this._el.currentStyle["x-content"]
}else{this._invalidateStyles();a=window.getComputedStyle(this._el,o).content}if(a){a=a.replace(/["']/g,"")
}if(a){return a}return false};r._updateViewport=function(){var a=this.viewport;
var c;var b;this.viewport=this._getElementContent();if(this.viewport){this.viewport=this.viewport.split(":").pop()
}if(a&&this.viewport!==a){b={from:a,to:this.viewport};this.trigger("change",b);
this.trigger("from:"+a,b);this.trigger("to:"+this.viewport,b)}};r._updateRetina=function(a){var b=this.retina;
this.retina=this._retinaQuery.matches;if(b!==this.retina){this.trigger("retinachange",{from:b,to:this.retina})
}};r._invalidateStyles=function(){document.documentElement.clientWidth;this._el.innerHTML=(this._el.innerHTML===" ")?" ":" ";
document.documentElement.clientWidth};w.exports=n},{"@marcom/ac-dom-events/utils/addEventListener":667,"@marcom/ac-event-emitter-micro":668,"@marcom/ac-feature/mediaQueriesAvailable":41,"@marcom/ac-polyfills/Function/prototype.bind":670,"@marcom/ac-polyfills/Object/create":671,"@marcom/ac-polyfills/Object/keys":672}],674:[function(i,h,f){var g=i("./ViewportEmitter");
h.exports=new g()},{"./ViewportEmitter":673}],675:[function(D,F,A){var C=D("@marcom/ac-jetpack-lib/core/BaseComponent");
var z=D("@marcom/ac-media-object");var E=D("@marcom/ac-viewport-emitter");var B=D("@marcom/ac-dom-events/addEventListener");
var u="/105/media{{locale}}/ios/photos/2017/b3ae9426_deac_47c3_a2b1_626661fd1546/";
var x="mp4";var G=500;var t=0.4;var s=document.documentElement.classList.contains("oldIos10");
var w=document.documentElement.classList.contains("ie11");var r=3000;var v=function v(){C.apply(this,arguments);
if(!document.documentElement.classList.contains("inlineVideo")){return}this._videoContainer=this.element.querySelector(".video-container");
this._replayButton=this.element.querySelector(".replay-btn");this._filename=this._videoContainer.dataset.videoFilename;
this._options={iosInline:true};this._locale=this.element.getAttribute("data-locale")||"us";
this._analyticsTriggered=false;this._hasAutoplayed=false;this._hasEngaged=false;
this._loadedViewport=null;this._createMedia();if(this._replayButton){B(this._replayButton,"click",this.replayClicked.bind(this))
}this.trackedElement=this.section.elementEngagement.addElement(this.element,{timeToEngage:G,inViewThreshold:t});
this.trackedElement.on("engaged",this.onEngaged.bind(this))};var y=v.prototype=Object.create(C.prototype);
v.prototype.constructor=v;y.onLoadStart=function(){var a=this;this._loadTimeout=setTimeout(function(){if(!a._mediaObject.getLoaded()){a._destroyMedia();
a._disableReplay()}},r)};y.onLoad=function(){clearTimeout(this._loadTimeout);this._mediaObject.enhance();
this._replayButton.classList.add("enhanced")};y.onEngaged=function(){this._hasEngaged=true;
if(this._mediaObject&&this._mediaObject.getEnhanced()&&!this._hasAutoplayed){if(this._mediaObject.el.parentNode.parentNode.getAttribute("aria-hidden")){return
}this._mediaObject.play();this._hasAutoplayed=true;this._hasEngaged=false}};y.onEnhanced=function(){if(this._hasEngaged){this.onEngaged()
}};y.onPlay=function(){this._disableReplay()};y.onPause=function(){this._enableReplay()
};y.onEnd=function(){this._enableReplay()};y.onTimeUpdate=function(){if(w){if(this._mediaObject.getCurrentTime()<0.26){this._mediaObject.trigger("play")
}if(this._mediaObject.getCurrentTime()===this._mediaObject.getDuration()){this._mediaObject.trigger("ended")
}}};y.replayClicked=function(){if(w){this._resetMedia()}this._mediaObject.setCurrentTime(0);
this._mediaObject.play()};y.onSectionWillAppear=function(b,a){};y.onSectionWillDisappear=function(b,a){};
y.onBreakpoint=function(d,a,f,b){C.prototype.onSectionWillDisappear.call(this,d,a,f,b);
if(!this._mediaObject||(a==="large"&&d==="xlarge")||(a==="xlarge"&&d==="large")){return
}var c=(this._loadedViewport==="large")||(this._loadedViewport==="medium"&&d==="small")||(d===this._loadedViewport);
if(c){return}this._hasAutoplayed=false;this._disableReplay();this._destroyMedia();
this._createMedia()};y.onRetinaChange=function(a,c,d,b){C.prototype.onSectionWillDisappear.call(this,a,c,d,b);
if(this._mediaObject){this._destroyMedia();this._createMedia()}};y._disableReplay=function(){this._replayButton.disabled=true
};y._enableReplay=function(){this._replayButton.disabled=false};y._createMedia=function(){this._setMediaSrc(u,this._filename,x);
this._mediaObject=z.createVideo(this._videoContainer,this._getMediaSrc(),this._options);
this._mediaObject.on("loadstart",this.onLoadStart.bind(this));this._mediaObject.on("loaded",this.onLoad.bind(this));
this._mediaObject.on("play",this.onPlay.bind(this));this._mediaObject.on("ended",this.onEnd.bind(this));
this._mediaObject.on("enhanced",this.onEnhanced.bind(this));if(s||w){this._mediaObject.on("pause",this.onPause.bind(this))
}if(w){this._mediaObject.on("timeupdate",this.onTimeUpdate.bind(this))}this._mediaObject.load()
};y._destroyMedia=function(){this._mediaObject.pause();this._mediaObject.destroy();
this._mediaSrc=null;this._mediaObject=null;clearTimeout(this._loadTimeout);this._disableReplay();
this._hasAutoplayed=false;this._hasEngaged=false};y._resetMedia=function(){this._mediaObject.reset();
this._mediaObject.el.classList.remove("mediaobject-ended")};y._getMediaSrc=function(){if(!this._mediaSrc){this._createMedia()
}return this._mediaSrc};y._setMediaSrc=function(a,c,b){var d=E.viewport;if(d==="xlarge"){d="large"
}this._loadedViewport=d;this._mediaSrc={basePath:a.replace("{{locale}}",this._locale),filename:c+"/"+d+(E.retina?"_2x":""),fileFormat:b}
};F.exports=v},{"@marcom/ac-dom-events/addEventListener":6,"@marcom/ac-jetpack-lib/core/BaseComponent":300,"@marcom/ac-media-object":616,"@marcom/ac-viewport-emitter":674}],676:[function(q,p,j){var l=q("@marcom/ac-gallery").Gallery;
var m=q("@marcom/ac-jetpack-lib/core/BasePage");var n=q("@marcom/ac-jetpack-lib/model/ComponentMap");
var k=q("./components/InlineVideo");var o=(function(){return{initialize:function(){var a=this;
this.initJetPack();window.onload=function(){a.initGalleries();new m()};return this
},initGalleries:function(){var b=Array.prototype.slice.call(document.getElementsByClassName("screen-gallery"));
var c={resizeContainer:false,enableArrowKeys:false};var d=Array.prototype.slice.call(document.getElementsByClassName("caption-gallery"));
var a={resizeContainer:true,crossFade:true};d.forEach(function(i,f){var g=l.create(i,"fade",a);
var h=l.create(b[f],"fade",c);g.on("update",function(v){var w=g.getItemIndex(v.incoming[0]);
h.show(w);w=g.getItemIndex(v.outgoing[0]);var x=h.getItemAt(w)._el.querySelector(".replay-btn");
if(x){x.disabled=true}w=g.getItemIndex(v.incoming[0]);var y=h.getItemAt(w)._el.querySelector(".replay-btn");
if(y){y.disabled=true}});h.on("update:complete",function(v){var w=v.incoming[0]._el.querySelector(".mediaobject-element");
if(w){w.play()}var x=v.outgoing[0]._el.querySelector(".mediaobject-element");if(x){var y=x.parentNode;
x.load();y.classList.remove("mediaobject-ended")}})})},initJetPack:function(){n.ProgressiveImageComponent=q("@marcom/ac-progressive-image-loader/ProgressiveImageComponent");
n.InlineVideo=k}}}());p.exports=o.initialize()},{"./components/InlineVideo":675,"@marcom/ac-gallery":245,"@marcom/ac-jetpack-lib/core/BasePage":301,"@marcom/ac-jetpack-lib/model/ComponentMap":303,"@marcom/ac-progressive-image-loader/ProgressiveImageComponent":661}]},{},[676]);