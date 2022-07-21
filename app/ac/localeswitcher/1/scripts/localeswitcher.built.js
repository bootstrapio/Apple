(function e(b,g,d){function c(m,j){if(!g[m]){if(!b[m]){var i=typeof require=="function"&&require;
if(!j&&i){return i(m,!0)}if(a){return a(m,!0)}var k=new Error("Cannot find module '"+m+"'");
throw k.code="MODULE_NOT_FOUND",k}var h=g[m]={exports:{}};b[m][0].call(h.exports,function(l){var o=b[m][1][l];
return c(o?o:l)},h,h.exports,e,b,g,d)}return g[m].exports}var a=typeof require=="function"&&require;
for(var f=0;f<d.length;f++){c(d[f])}return c})({1:[function(f,c,g){var m=f("./helpers/disableTabbable");
var n=f("./helpers/enableTabbable");var b=f("./helpers/setAttributes");var i=f("./helpers/isTruthy");
var o=f("@marcom/ac-event-emitter-micro").EventEmitterMicro;var a=o.prototype;var k=f("./maps/ariaMap");
var j=f("./maps/keyMap");var l=[k.BUSY,k.CHECKED,k.DISABLED,k.EXPANDED,k.HIDDEN,k.INVALID,k.PRESSED,k.SELECTED];
var d=function(q,p){o.call(this);this._options=p||{};this._selector=p.selector||".navitem";
this._allowMultiSelection=p.multiSelection||false;var r=(l.indexOf(p.state)>-1)?p.state:k.SELECTED;
this.el=q;this._navItems=q.querySelectorAll(this._selector);this._navItems=Array.prototype.slice.call(this._navItems);
this._state=r;this._navKeys={};this.selectOption=this.selectOption.bind(this);this._handleKeyDown=this._handleKeyDown.bind(this);
this._setup()};d.ONSELECT="onSelect";d.ONFOCUS="onFocus";var h=d.prototype=Object.create(a);
h._setup=function(){var p=[j.ARROW_DOWN,j.ARROW_RIGHT];var q=[j.ARROW_UP,j.ARROW_LEFT];
var s=[j.ENTER,j.SPACEBAR];for(var r=0;r<p.length;r++){this.addNavkey(p[r],this._arrowDown.bind(this,true));
this.addNavkey(q[r],this._arrowDown.bind(this,null));this.addNavkey(s[r],this.selectOption)
}this._setupNavItems()};h._setupNavItems=function(){if(!this._navItems.length){return
}for(var p=0;p<this._navItems.length;p++){this._setTabbingByIndex(p)}if(this.focusedNavItemIndex===undefined||this.selectedNavitemIndex===undefined){this.setSelectedItemByIndex(0,true)
}};h._setTabbingByIndex=function(r){var p=this._navItems[r];var q=i(p.getAttribute(this._state));
if(q){this.focusedNavItemIndex=r;this.selectedNavitemIndex=r}var s=i(p.getAttribute(k.DISABLED));
if(!s){n(p)}else{m(p)}};h.start=function(){if(this._navItems.length<1){return}this.el.addEventListener("keydown",this._handleKeyDown);
this.el.addEventListener("click",this.selectOption)};h.stop=function(){this.el.removeEventListener("keydown",this._handleKeyDown);
this.el.removeEventListener("click",this.selectOption)};h._handleKeyDown=function(p){if(p.ctrlKey||p.altKey||p.metaKey){return true
}if(this._navKeys[p.keyCode]){this._navKeys[p.keyCode](p)}};h._arrowDown=function(q,r,p){r.preventDefault();
this.previousNavItemIndex=this.focusedNavItemIndex;this.focusedNavItemIndex=this._calculateIndex(q,this.focusedNavItemIndex);
this._navItems[this.focusedNavItemIndex].focus();if(!p){this.trigger(d.ONFOCUS,{event:r,index:this.focusedNavItemIndex,el:this._navItems[this.focusedNavItemIndex]})
}};h.selectOption=function(r,p){r.preventDefault();var q=this._navItems.indexOf(document.activeElement);
if(q>-1&&document.activeElement!==this._navItems[this.focusedNavItemIndex]){this.focusedNavItemIndex=q
}if(this._allowMultiSelection){this._toggleState()}else{b(this._navItems[this.selectedNavitemIndex],this._state,"false");
b(this._navItems[this.focusedNavItemIndex],this._state,"true")}this.selectedNavitemIndex=this.focusedNavItemIndex;
if(!p){this.trigger(d.ONSELECT,{event:r,index:this.selectedNavitemIndex,el:this._navItems[this.selectedNavitemIndex]})
}};h._toggleState=function(){var p=this._navItems[this.focusedNavItemIndex].getAttribute(this._state);
if(i(p)){b(this._navItems[this.focusedNavItemIndex],this._state,"false")}else{b(this._navItems[this.focusedNavItemIndex],this._state,"true")
}};h._calculateIndex=function(r,q){var p=q;if(r===true){p++;p=(p>=this._navItems.length)?0:p;
if(!i(this._navItems[p].getAttribute(k.DISABLED))||this._navItems[p].hasAttribute("disabled")){return p
}}else{p--;p=(p<0)?this._navItems.length-1:p;if(!i(this._navItems[p].getAttribute(k.DISABLED))||this._navItems[p].hasAttribute("disabled")){return p
}}return this._calculateIndex(r,p)};h.updateNavItems=function(){var p=this.el.querySelectorAll(this._selector);
this._navItems=Array.prototype.slice.call(p)};h.addNavItem=function(p){if(p&&p.nodeType&&this._navItems.indexOf(p)<0){if(!i(p.getAttribute(k.DISABLED))){n(p)
}this._navItems.push(p)}};h.setSelectedItemByIndex=function(q,p){if(!this._allowMultiSelection&&this.selectedNavitemIndex){b(this._navItems[this.selectedNavitemIndex],this._state,"false")
}this.focusedNavItemIndex=q;this.selectedNavitemIndex=q;b(this._navItems[this.selectedNavitemIndex],this._state,"true");
if(!p){this.trigger(d.ONSELECT,{event:null,index:this.focusedNavItemIndex,el:this._navItems[this.focusedNavItemIndex]})
}};h.getSelectedItem=function(){return this._navItems[this.selectedNavitemIndex]
};h.getFocusedItem=function(p){return this._navItems[this.focusedNavItemIndex]};
h.addNavkey=function(p,q){if(typeof q==="function"&&typeof p==="number"){this._navKeys[p]=q
}else{console.warn("incorrect types arguments were passed")}};h.removeNavkey=function(p){delete this._navKeys[p]
};h.destroy=function(){a.destroy.call(this);this.stop();this.el=null;this._options=null;
this._selector=null;this.focusedNavItemIndex=null;this.selectedNavitemIndex=null;
this._navItems=null;this._state=null;this.selectOption=null;this._handleKeyDown=null;
for(var p in this._navKeys){if(this._navKeys.hasOwnProperty(p)){this.removeNavkey(p)
}}this._navKeys=null};c.exports=d},{"./helpers/disableTabbable":4,"./helpers/enableTabbable":5,"./helpers/isTruthy":6,"./helpers/setAttributes":8,"./maps/ariaMap":9,"./maps/keyMap":11,"@marcom/ac-event-emitter-micro":25}],2:[function(d,f,c){var i=d("./maps/keyMap");
var h=0;var a=["button","checkbox","listbox","option","menuitem","menuitemradio","menuitemcheckbox"];
var b=function(){this._elements={};this._callbacks={};this._bindEvents();this._proxies={};
this._setup()};var g=b.prototype;g._bindEvents=function(){this._handleKeydown=this._handleKeydown.bind(this);
this._handleHover=this._handleHover.bind(this)};g._setup=function(){this._addProxy("click",this._clickProxy);
this._addProxy("hover",this._hoverProxy)};g._addProxy=function(j,k){this._proxies[j]=this._proxies[j]||[];
this._proxies[j].push(k)};g._removeProxy=function(j,l){if(!this._proxies[j]){return
}var k=this._proxies[j].indexOf(l);if(k>-1){this._proxies[j].splice(k,1)}if(this._proxies[j].length===0){delete this._proxies[j]
}};g.addEventListener=function(l,k,j){if(this._proxies[k]){this._proxies[k].forEach(function(m){m.call(this,l,k,j)
}.bind(this));l.addEventListener(k,j)}};g.removeEventListener=function(l,k,j){if(this._proxies[k]){this._proxies[k].forEach(function(m){m.call(this,l,k,j,true)
}.bind(this));l.removeEventListener(k,j)}};g._clickProxy=function(m,l,k,j){var n=m.getAttribute("role");
if(n&&a.indexOf(n)>-1){if(j){m.removeEventListener("keydown",this._handleKeydown);
this._removeCallback(m,l,k)}else{m.addEventListener("keydown",this._handleKeydown);
this._addCallback(m,l,k)}}};g._hoverProxy=function(m,l,k,j){if(j){m.removeEventListener("focus",this._handleHover,true);
m.removeEventListener("blur",this._handleHover,true);if(k){this._removeCallback(m,l,k)
}}else{m.addEventListener("focus",this._handleHover,true);m.addEventListener("blur",this._handleHover,true);
if(k){this._addCallback(m,l,k)}}};g._handleKeydown=function(j){if(j.ctrlKey||j.altKey||j.metaKey){return true
}if(j.keyCode===i.SPACEBAR||j.keyCode===i.ENTER){this._executeCallback(j,"click")
}};g._handleHover=function(j){if(j.type==="focus"){j.currentTarget.classList.add("hover")
}else{j.currentTarget.classList.remove("hover")}this._executeCallback(j,"hover")
};g._executeCallback=function(m,k){var j=this._getCallbacksByElement(m.currentTarget,k);
if(!j){return}for(var l=0;l<j.length;l++){j[l](m)}};g._addCallback=function(l,k,j){var m=this._getIDByElement(l)||this._generateId();
this._elements[m]=l;if(j instanceof Function){this._callbacks[m]=this._callbacks[m]||{};
this._callbacks[m][k]=this._callbacks[m][k]||[];this._callbacks[m][k].push(j)}};
g._removeCallback=function(m,k,j){var o=this._getIDByElement(m);var n=this._callbacks[o];
if(n&&n[k]){var l=n[k].indexOf(j);n[k].splice(l,1);if(n[k].length===0){delete n[k];
if(this._isEmpty(n)){delete this._callbacks[o];delete this._elements[o]}}}};g._getIDByElement=function(j){for(var k in this._elements){if(this._elements.hasOwnProperty(k)&&this._elements[k]===j){return k
}}};g._getCallbacksByElement=function(k,j){var l=this._getIDByElement(k);if(l){return this._callbacks[l][j]
}};g._generateId=function(){return(++h).toString()};g._isEmpty=function(k){for(var j in k){if(k.hasOwnProperty(j)){return false
}}return true};f.exports=new b()},{"./maps/keyMap":11}],3:[function(c,d,b){var g=c("./../maps/focusableElement");
var a=function(){this.focusableSelectors=g.join(",")};var f=a.prototype;f.isFocusableElement=function(k,j,i){if(!j&&!this._isDisplayed(k,j)){return false
}var l=k.nodeName.toLowerCase();var h=g.indexOf(l)>-1;if(l==="a"){return true}if(h){return !k.disabled
}if(!k.contentEditable){return true}i=i||parseFloat(k.getAttribute("tabindex"));
return !isNaN(i)};f.isTabbableElement=function(j,i){if(!i&&!this._isDisplayed(j,i)){return false
}var h=j.getAttribute("tabindex");h=parseFloat(h);if(!isNaN(h)){return(h>=0)}else{return this.isFocusableElement(j,i,h)
}};f._isDisplayed=function(h){var i=h.getBoundingClientRect();return i.top>0&&i.left>0&&i.width>0&&i.height>0
};f.getTabbableElements=function(m,h){var o=m.querySelectorAll(this.focusableSelectors);
var k=o.length;var j=[];for(var n=0;n<k;n++){if(this.isTabbableElement(o[n],h)){j.push(o[n])
}}return j};f.getFocusableElements=function(k,h){var o=k.querySelectorAll(this.focusableSelectors);
var j=o.length;var n=[];for(var m=0;m<j;m++){if(this.isFocusableElement(o[m],h)){n.push(o[m])
}}return n};d.exports=new a()},{"./../maps/focusableElement":10}],4:[function(c,d,b){var a=c("./setAttributes");
d.exports=function f(g){a(g,"tabindex","-1")}},{"./setAttributes":8}],5:[function(d,g,c){var f=d("./removeAttributes");
var b=d("./setAttributes");var a=d("./TabManager");g.exports=function h(i){var j=[].concat(i);
j=j.filter(function(k){return !a.isTabbableElement(k)});if(j.length>0){b(j,"tabindex",0)
}}},{"./TabManager":3,"./removeAttributes":7,"./setAttributes":8}],6:[function(c,d,a){d.exports=function b(f){if(typeof f==="string"){f=f.toLowerCase();
return f==="true"}return f}},{}],7:[function(b,d,a){var f=function(j,h){if(typeof h!=="string"){return
}var k=h.split(/\s+/);for(var g=0;g<k.length;g++){if(j.getAttribute(k[g])){j.removeAttribute(k[g])
}}};var c=function(h,g){if(h.length){for(var j=0;j<h.length;j++){f(h[j],g)}}else{f(h,g)
}};d.exports=c},{}],8:[function(d,f,c){var b=function(h,g,i){if(h&&h.nodeType===1){h.setAttribute(g,i)
}};var a=function(g,j,k){if(typeof k!=="string"){k=k.toString()}if(!g){return}if(g.length){for(var h=0;
h<g.length;h++){b(g[h],j,k)}}else{b(g,j,k)}};f.exports=a},{}],9:[function(b,c,a){c.exports={AUTOCOMPLETE:"aria-autocomplete",CHECKED:"aria-checked",DISABLED:"aria-disabled",EXPANDED:"aria-expanded",HASPOPUP:"aria-haspopup",HIDDEN:"aria-hidden",INVALID:"aria-invalid",LABEL:"aria-label",LEVEL:"aria-level",MULTILINE:"aria-multiline",MULTISELECTABLE:"aria-multiselectable",ORIENTATION:"aria-orientation",PRESSED:"aria-pressed",READONLY:"aria-readonly",REQUIRED:"aria-required",SELECTED:"aria-selected",SORT:"aria-sort",VALUEMAX:"aria-valuemax",VALUEMIN:"aria-valuemin",VALUENOW:"aria-valuenow",VALUETEXT:"aria-valuetext",ATOMIC:"aria-atomic",BUSY:"aria-busy",LIVE:"aria-live",RELEVANT:"aria-relevant",DROPEFFECT:"aria-dropeffect",GRABBED:"aria-grabbed",ACTIVEDESCENDANT:"aria-activedescendant",CONTROLS:"aria-controls",DESCRIBEDBY:"aria-describedby",FLOWTO:"aria-flowto",LABELLEDBY:"aria-labelledby",OWNS:"aria-owns",POSINSET:"aria-posinset",SETSIZE:"aria-setsize"}
},{}],10:[function(b,c,a){c.exports=["input","select","textarea","button","optgroup","option","menuitem","fieldset","object","a[href]","*[tabindex]","*[contenteditable]"]
},{}],11:[function(b,c,a){c.exports=b("@marcom/ac-keyboard/keyMap")},{"@marcom/ac-keyboard/keyMap":32}],12:[function(d,f,c){var b=d("./shared/stylePropertyCache");
var h=d("./getStyleProperty");var g=d("./getStyleValue");f.exports=function a(k,j){var i;
k=h(k);if(!k){return false}i=b[k].css;if(typeof j!=="undefined"){j=g(k,j);if(j===false){return false
}i+=":"+j+";"}return i}},{"./getStyleProperty":13,"./getStyleValue":14,"./shared/stylePropertyCache":17}],13:[function(f,d,h){var a=f("./shared/stylePropertyCache");
var i=f("./shared/getStyleTestElement");var b=f("./utils/toCSS");var k=f("./utils/toDOM");
var j=f("./shared/prefixHelper");var c=function(o,l){var m=b(o);var n=(l===false)?false:b(l);
a[o]=a[l]=a[m]=a[n]={dom:l,css:n};return l};d.exports=function g(p){var n;var l;
var o;var m;p+="";if(p in a){return a[p].dom}o=i();p=k(p);l=p.charAt(0).toUpperCase()+p.substring(1);
if(p==="filter"){n=["WebkitFilter","filter"]}else{n=(p+" "+j.dom.join(l+" ")+l).split(" ")
}for(m=0;m<n.length;m++){if(typeof o.style[n[m]]!=="undefined"){if(m!==0){j.reduce(m-1)
}return c(p,n[m])}}return c(p,false)}},{"./shared/getStyleTestElement":15,"./shared/prefixHelper":16,"./shared/stylePropertyCache":17,"./utils/toCSS":20,"./utils/toDOM":21}],14:[function(d,b,h){var f=d("./getStyleProperty");
var k=d("./shared/styleValueAvailable");var j=d("./shared/prefixHelper");var a=d("./shared/stylePropertyCache");
var i={};var l=/(\([^\)]+\))/gi;var g=/([^ ,;\(]+(\([^\)]+\))?)/gi;b.exports=function c(o,n){var m;
n+="";o=f(o);if(!o){return false}if(k(o,n)){return n}m=a[o].css;n=n.replace(g,function(q){var p;
var t;var s;var r;if(q[0]==="#"||!isNaN(q[0])){return q}t=q.replace(l,"");s=m+":"+t;
if(s in i){if(i[s]===false){return""}return q.replace(t,i[s])}p=j.css.map(function(u){return u+q
});p=[q].concat(p);for(r=0;r<p.length;r++){if(k(o,p[r])){if(r!==0){j.reduce(r-1)
}i[s]=p[r].replace(l,"");return p[r]}}i[s]=false;return""});n=n.trim();return(n==="")?false:n
}},{"./getStyleProperty":13,"./shared/prefixHelper":16,"./shared/stylePropertyCache":17,"./shared/styleValueAvailable":18}],15:[function(c,d,b){var f;
d.exports=function a(){if(!f){f=document.createElement("_")}else{f.style.cssText="";
f.removeAttribute("style")}return f};d.exports.resetElement=function(){f=null}},{}],16:[function(b,d,a){var i=["-webkit-","-moz-","-ms-"];
var f=["Webkit","Moz","ms"];var h=["webkit","moz","ms"];var c=function(){this.initialize()
};var g=c.prototype;g.initialize=function(){this.reduced=false;this.css=i;this.dom=f;
this.evt=h};g.reduce=function(j){if(!this.reduced){this.reduced=true;this.css=[this.css[j]];
this.dom=[this.dom[j]];this.evt=[this.evt[j]]}};d.exports=new c()},{}],17:[function(b,c,a){c.exports={}
},{}],18:[function(c,b,d){var a=c("./stylePropertyCache");var f=c("./getStyleTestElement");
var i=false;var k;var j;var g=function(){var l;if(!i){i=true;k=("CSS" in window&&"supports" in window.CSS);
j=false;l=f();try{l.style.width="invalid"}catch(m){j=true}}};b.exports=function h(o,n){var m;
var l;g();if(k){o=a[o].css;return CSS.supports(o,n)}l=f();m=l.style[o];if(j){try{l.style[o]=n
}catch(p){return false}}else{l.style[o]=n}return(l.style[o]&&l.style[o]!==m)};b.exports.resetFlags=function(){i=false
}},{"./getStyleTestElement":15,"./stylePropertyCache":17}],19:[function(c,d,a){var b=/(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
d.exports=function f(g){g=String.prototype.replace.call(g,b,"");return g.charAt(0).toLowerCase()+g.substring(1)
}},{}],20:[function(c,d,b){var f=/^(webkit|moz|ms)/gi;d.exports=function a(h){var g;
if(h.toLowerCase()==="cssfloat"){return"float"}if(f.test(h)){h="-"+h}return h.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],21:[function(b,c,a){var f=/-([a-z])/g;c.exports=function d(h){var g;if(h.toLowerCase()==="float"){return"cssFloat"
}h=h.replace(f,function(j,i){return i.toUpperCase()});if(h.substr(0,2)==="Ms"){h="ms"+h.substring(2)
}return h}},{}],22:[function(c,d,b){var f=c("@marcom/ac-prefixer/getStyleProperty");
var g=c("@marcom/ac-prefixer/stripPrefixes");d.exports=function a(){var k=Array.prototype.slice.call(arguments);
var p=k.shift(k);var m=window.getComputedStyle(p);var l={};var o;var h;var n;var j;
if(typeof k[0]!=="string"){k=k[0]}for(j=0;j<k.length;j++){o=k[j];h=f(o);if(h){o=g(h);
n=m[h];if(!n||n==="auto"){n=null}if(n){n=g(n)}}else{n=null}l[o]=n}return l}},{"@marcom/ac-prefixer/getStyleProperty":13,"@marcom/ac-prefixer/stripPrefixes":19}],23:[function(c,d,b){d.exports=function a(j){var h;
var g;var f;if(!j&&j!==0){return""}if(Array.isArray(j)){return j+""}if(typeof j==="object"){h="";
g=Object.keys(j);for(f=0;f<g.length;f++){h+=g[f]+"("+j[g[f]]+") "}return h.trim()
}return j}},{}],24:[function(d,f,c){var a=d("@marcom/ac-prefixer/getStyleCSS");
var g=d("@marcom/ac-prefixer/getStyleProperty");var b=d("./internal/normalizeValue");
f.exports=function h(o,l){var k="";var j;var n;var i;var m;var p;if(typeof l!=="object"){throw new TypeError("setStyle: styles must be an Object")
}for(n in l){m=b(l[n]);if(!m&&m!==0){i=g(n);if("removeAttribute" in o.style){o.style.removeAttribute(i)
}else{o.style[i]=""}}else{j=a(n,m);if(j!==false){k+=" "+j}}}if(k.length){p=o.style.cssText;
if(p.charAt(p.length-1)!==";"){p+=";"}p+=k;o.style.cssText=p}return o}},{"./internal/normalizeValue":23,"@marcom/ac-prefixer/getStyleCSS":12,"@marcom/ac-prefixer/getStyleProperty":13}],25:[function(b,c,a){c.exports={EventEmitterMicro:b("./ac-event-emitter-micro/EventEmitterMicro")}
},{"./ac-event-emitter-micro/EventEmitterMicro":26}],26:[function(b,c,a){function f(){this._events={}
}var d=f.prototype;d.on=function(g,h){this._events[g]=this._events[g]||[];this._events[g].unshift(h)
};d.once=function(g,j){var i=this;function h(k){i.off(g,h);if(k!==undefined){j(k)
}else{j()}}this.on(g,h)};d.off=function(g,i){if(!this.has(g)){return}if(arguments.length===1){this._events[g]=null;
delete this._events[g];return}var h=this._events[g].indexOf(i);if(h===-1){return
}this._events[g].splice(h,1)};d.trigger=function(g,j){if(!this.has(g)){return}for(var h=this._events[g].length-1;
h>=0;h--){if(j!==undefined){this._events[g][h](j)}else{this._events[g][h]()}}};
d.has=function(g){if(g in this._events===false||this._events[g].length===0){return false
}return true};d.destroy=function(){for(var g in this._events){this._events[g]=null
}this._events=null};c.exports=f},{}],27:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.addEventListener){i.addEventListener(g,h,!!f)
}else{i.attachEvent("on"+g,h)}return i}},{}],28:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.removeEventListener){i.removeEventListener(g,h,!!f)
}else{i.detachEvent("on"+g,h)}return i}},{}],29:[function(b,d,a){var f=function(){};
d.exports=function c(g){if(arguments.length>1){throw new Error("Second argument not supported")
}if(g===null||typeof g!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(g)}else{f.prototype=g;
return new f()}}},{}],30:[function(d,c,g){var m=d("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var j=d("@marcom/ac-dom-events/utils/addEventListener");var b=d("@marcom/ac-dom-events/utils/removeEventListener");
var i=d("@marcom/ac-object/create");var f=d("./internal/KeyEvent");var k="keydown";
var l="keyup";function a(n){this._keysDown={};this._DOMKeyDown=this._DOMKeyDown.bind(this);
this._DOMKeyUp=this._DOMKeyUp.bind(this);this._context=n||document;j(this._context,k,this._DOMKeyDown,true);
j(this._context,l,this._DOMKeyUp,true);m.call(this)}var h=a.prototype=i(m.prototype);
h.onDown=function(n,o){return this.on(k+":"+n,o)};h.onceDown=function(n,o){return this.once(k+":"+n,o)
};h.offDown=function(n,o){return this.off(k+":"+n,o)};h.onUp=function(n,o){return this.on(l+":"+n,o)
};h.onceUp=function(n,o){return this.once(l+":"+n,o)};h.offUp=function(n,o){return this.off(l+":"+n,o)
};h.isDown=function(n){n+="";return this._keysDown[n]||false};h.isUp=function(n){return !this.isDown(n)
};h.destroy=function(){b(this._context,k,this._DOMKeyDown,true);b(this._context,l,this._DOMKeyUp,true);
this._keysDown=null;this._context=null;m.prototype.destroy.call(this);return this
};h._DOMKeyDown=function(o){var n=this._normalizeKeyboardEvent(o);var p=n.keyCode+="";
this._trackKeyDown(p);this.trigger(k+":"+p,n)};h._DOMKeyUp=function(o){var n=this._normalizeKeyboardEvent(o);
var p=n.keyCode+="";this._trackKeyUp(p);this.trigger(l+":"+p,n)};h._normalizeKeyboardEvent=function(n){return new f(n)
};h._trackKeyUp=function(n){if(this._keysDown[n]){this._keysDown[n]=false}};h._trackKeyDown=function(n){if(!this._keysDown[n]){this._keysDown[n]=true
}};c.exports=a},{"./internal/KeyEvent":31,"@marcom/ac-dom-events/utils/addEventListener":27,"@marcom/ac-dom-events/utils/removeEventListener":28,"@marcom/ac-event-emitter-micro":25,"@marcom/ac-object/create":29}],31:[function(c,d,b){var a=["keyLocation"];
function f(g){this.originalEvent=g;var h;for(h in g){if(a.indexOf(h)===-1&&typeof g[h]!=="function"){this[h]=g[h]
}}this.location=(this.originalEvent.location!==undefined)?this.originalEvent.location:this.originalEvent.keyLocation
}f.prototype={preventDefault:function(){if(typeof this.originalEvent.preventDefault!=="function"){this.originalEvent.returnValue=false;
return}return this.originalEvent.preventDefault()},stopPropagation:function(){return this.originalEvent.stopPropagation()
}};d.exports=f},{}],32:[function(b,c,a){c.exports={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,COMMAND:91,CAPSLOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_ZERO:96,NUMPAD_ONE:97,NUMPAD_TWO:98,NUMPAD_THREE:99,NUMPAD_FOUR:100,NUMPAD_FIVE:101,NUMPAD_SIX:102,NUMPAD_SEVEN:103,NUMPAD_EIGHT:104,NUMPAD_NINE:105,NUMPAD_ASTERISK:106,NUMPAD_PLUS:107,NUMPAD_DASH:109,NUMPAD_DOT:110,NUMPAD_SLASH:111,NUMPAD_EQUALS:187,TICK:192,LEFT_BRACKET:219,RIGHT_BRACKET:221,BACKSLASH:220,SEMICOLON:186,APOSTRAPHE:222,APOSTROPHE:222,SPACEBAR:32,CLEAR:12,COMMA:188,DOT:190,SLASH:191}
},{}],33:[function(b,c,a){var f=b("./localeswitcher/LocaleSwitcher");var d=document.getElementById("ac-localeswitcher");
if(d){new f(d)}},{"./localeswitcher/LocaleSwitcher":34}],34:[function(h,d,j){var g=null;
try{g=h("@marcom/ac-analytics").observer.Event}catch(i){}var p=h("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var f=h("@marcom/ac-accessibility/ArrowNavigation");var b=h("@marcom/ac-keyboard/Keyboard");
var m=h("@marcom/ac-keyboard/keymap");var q=h("@marcom/ac-accessibility/helpers/enableTabbable");
var a=h("@marcom/ac-accessibility/EventProxy");var o=h("@marcom/ac-dom-styles/getStyle");
var l=h("@marcom/ac-dom-styles/setStyle");var c={className:"ac-ls"};function n(t){var r=c;
this.el=t;this._eventEmitterMicro=new p();this._userLangLocale=this._getUserBrowserLanguage()+"-"+this._getCookie("geo");
if(this._userLangLocale!=="es-MX"){return false}if(this._shouldInitializeLocaleSwitcher()){this._selectIsOpen=false;
this._selectors={dropdownOptionsId:r.className+"-dropdown-options",dropdownCollapsedClass:"select-collapsed",dropdownOptionClass:r.className+"-dropdown-option",visibleClass:r.className+"-visible"};
this._dropdownList=document.getElementById(this._selectors.dropdownOptionsId);this._selectTrigger=document.getElementById("ac-ls-dropdown-select");
this._closeDropdown=this._closeDropdown.bind(this);this._handleDropdownSelection=this._handleDropdownSelection.bind(this);
this._handleDropdownClickAway=this._handleDropdownClickAway.bind(this);this._setUpEventListeners();
var u=document.querySelector("[hreflang="+this._userLangLocale+"]").href;var s=document.querySelector("[hreflang=en-US]").href;
this._listItems=Array.prototype.slice.call(this.el.querySelectorAll("."+this._selectors.dropdownOptionClass));
this._listItems[0].setAttribute("data-href",u);this._listItems[1].setAttribute("data-href",s);
this._setContinueButton(this._listItems[0]);document.documentElement.classList.toggle(this._selectors.visibleClass);
this._setLocaleSwitcherId()}}var k=n.prototype;k._setUpEventListeners=function(){document.addEventListener("click",this._handleDropdownClickAway);
var s=document.getElementById("ac-ls-close");s.addEventListener("click",this._handleCloseBarEvent.bind(this));
var r=document.getElementById("ac-ls-continue");r.addEventListener("click",this._handleContinueButtonEvent.bind(this));
this._initializeDropdownToggle()};k._getUserBrowserLanguage=function(){var s="en-US";
var r=navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||s;
return r.substring(0,2)};k._setLocaleSwitcherId=function(){window.sessionStorage.setItem("ac-ls-has-shown",true)
};k._getLocaleSwitcherId=function(){return window.sessionStorage.getItem("ac-ls-has-shown")
};k._localeLanguageInHrefLangDoesNotExist=function(){return !document.querySelector("[hreflang="+this._userLangLocale+"]")
};k._hrefLangUrlMatchesCurrentUrl=function(){var s=document.querySelector("[hreflang="+this._userLangLocale+"]");
if(s){var r=s.href.replace(/^.+\.com/gim,"");if(document.location.pathname===r){return true
}return false}return false};k._hrefLangIsMissingUILinks=function(){var s=document.querySelector("[hreflang="+this._userLangLocale+"]").href;
var r=document.querySelector("[hreflang=en-US]").href;if(s&&r){return false}return true
};k._segmentBarVisible=function(){return document.documentElement.classList.contains("ac-gn-segmentbar-visible")
};k._setPageTrackingData=function(r){var s=document.createElement("meta");s.setAttribute("property","analytics-s-page-tracking-data");
s.content=r;document.getElementsByTagName("head")[0].appendChild(s)};k._shouldInitializeLocaleSwitcher=function(){if(this._getLocaleSwitcherId()){return false
}else{if(this._segmentBarVisible()){return false}else{if(this._localeLanguageInHrefLangDoesNotExist()){return false
}else{if(this._hrefLangUrlMatchesCurrentUrl()){return false}else{if(this._hrefLangIsMissingUILinks()){return false
}else{if(g){var r=new g(this._eventEmitterMicro);r.track({title:"showed localeswitcher",events:"event140",eVar74:this._userLangLocale})
}return true}}}}}};k._initializeDropdownToggle=function(){this._arrowNavigation=new f(this._dropdownList,{selector:"li",state:"aria-selected"});
this._dropdownWrapperKeyboard=new b(this._dropdownList.parentElement);q(this._selectTrigger);
this._arrowNavigation.start();a.addEventListener(this._selectTrigger,"click",this._openDropdown.bind(this));
this._dropdownWrapperKeyboard.onUp(m.ARROW_UP,this._openDropdown.bind(this));this._dropdownWrapperKeyboard.onUp(m.ARROW_DOWN,this._openDropdown.bind(this));
this._dropdownWrapperKeyboard.onUp(m.ESCAPE,this._closeDropdown);this._arrowNavigation.on("onSelect",this._handleDropdownSelection)
};k._handleDropdownSelection=function(r){if(r.el.classList.contains(this._selectors.dropdownOptionClass)){var s=document.getElementById("ac-ls-dropdown-title");
s.innerHTML=r.el.innerHTML}this._setContinueButton(r.el);this._closeDropdown()};
k._setContinueButton=function(s){var t=s.getAttribute("data-href");var r=document.getElementById("ac-ls-continue");
this._selectedLink=t;var u=document.querySelector('[href="'+t+'"][hreflang]');this._selectedCountry="choose your country";
if(u){this._selectedCountry=u.hreflang}r.setAttribute("href",t)};k._onRAFUpdate=function(){this._elHeight=o(this.el,"height").height
};k._onRAFDraw=function(){if(this._elHeight!==this._lastHeight){var r="-"+this._elHeight;
l(document.documentElement,{"margin-top":this._elHeight});l(this.el,{top:r})}this._lastHeight=this._elHeight
};k._determineAnalyticsEvents=function(){var u=0,s=this._listItems.length-1;var r;
for(u;u<=s;u++){var v=this._listItems[u].getAttribute("data-href");if(v===this._selectedLink){r=u
}}var t="event142";if(r===0){t="event141"}else{if(r===(this._listItems.length-1)){t="event143"
}}return t};k._handleContinueButtonEvent=function(t){t.preventDefault();var s="event144,"+this._determineAnalyticsEvents();
if(g){var r=new g(this._eventEmitterMicro);r.track({title:"continued with localeswitcher",events:s,eVar74:this._userLangLocale,eVar75:this._selectedCountry})
}setTimeout(function(){window.location=t.target.getAttribute("href")},300)};k._handleCloseBarEvent=function(){if(g){var r=new g(this._eventEmitterMicro);
r.track({title:"closed localeswitcher",events:"event145",eVar74:this._userLangLocale,eVar75:"no selection"})
}document.documentElement.classList.toggle(this._selectors.visibleClass);l(document.documentElement,{"margin-top":""});
l(this.el,{top:""});document.removeEventListener("click",this._handleDropdownClickAway);
this._arrowNavigation.destroy();this._dropdownWrapperKeyboard.destroy()};k._handleDropdownClickAway=function(s){var r=this._dropdownList.parentElement;
var t=r.contains(s.target);if(!t&&!r.classList.contains(this._selectors.dropdownCollapsedClass)){this._closeDropdown()
}};k._openDropdown=function(){if(!this._selectIsOpen){this._dropdownList.setAttribute("aria-expanded","true");
this._dropdownList.parentElement.classList.remove(this._selectors.dropdownCollapsedClass);
this._dropdownList.querySelector("[aria-selected=true]").focus();this._selectTrigger.removeAttribute("tabindex");
this._selectIsOpen=true}};k._closeDropdown=function(){if(this._selectIsOpen){this._dropdownList.setAttribute("aria-expanded","false");
this._dropdownList.parentElement.classList.add(this._selectors.dropdownCollapsedClass);
q(this._selectTrigger);this._selectTrigger.focus();this._selectIsOpen=false}};k._getCookie=function(r){var s="; "+document.cookie;
var t=s.split("; "+r+"=");if(t.length===2){return t.pop().split(";").shift()}};
d.exports=n},{"@marcom/ac-accessibility/ArrowNavigation":1,"@marcom/ac-accessibility/EventProxy":2,"@marcom/ac-accessibility/helpers/enableTabbable":5,"@marcom/ac-analytics":undefined,"@marcom/ac-dom-styles/getStyle":22,"@marcom/ac-dom-styles/setStyle":24,"@marcom/ac-event-emitter-micro":25,"@marcom/ac-keyboard/Keyboard":30,"@marcom/ac-keyboard/keymap":32}]},{},[33]);