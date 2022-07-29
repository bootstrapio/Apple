(function e(b,g,d){function c(k,i){if(!g[k]){if(!b[k]){var h=typeof require=="function"&&require;
if(!i&&h){return h(k,!0)}if(a){return a(k,!0)}throw new Error("Cannot find module '"+k+"'")
}var j=g[k]={exports:{}};b[k][0].call(j.exports,function(l){var m=b[k][1][l];return c(m?m:l)
},j,j.exports,e,b,g,d)}return g[k].exports}var a=typeof require=="function"&&require;
for(var f=0;f<d.length;f++){c(d[f])}return c})({1:[function(b,c,a){c.exports.InlineStyleRenderer=b("./ac-style-renderer/InlineStyleRenderer");
c.exports.LogRenderer=b("./ac-style-renderer/LogRenderer")},{"./ac-style-renderer/InlineStyleRenderer":2,"./ac-style-renderer/LogRenderer":3}],2:[function(d,f,c){var a=(function(){var h,g;
if(a){return}g=document.createElement("div");h=["transform","webkitTransform","MozTransform","msTransform","oTransform"];
h.some(function(i){if(i in g.style){a=i;return true}});return a})();var b={transformFunctions:["none","matrix","translate","translateX","translateY","scale","scaleX","scaleY","rotate","skewX","skewY","matrix3d","translate3d","translateZ","scale3d","scaleZ","rotate3d","rotateX","rotateY","rotateZ","perspective"],render:function(i,g){var h=this._parseProps(g);
h.forEach(function(j){i.style[j.prop]=j.value})},_mergeTransformProps:function(g){var h=g.reduce(this._partialPropValue.bind(this),"");
return{prop:a,value:h}},_partialPropValue:function(h,i){var j=this._parseTransformFunction(i.prop);
var g=[h," ",j,"(",i.value,")"].join("");return g},_parseTransformFunction:function(g){return g.replace("transform-","")
},_isTransformFunction:function(g){return this.transformFunctions.indexOf(g)!==-1
},_parseProps:function(l){var k=[];var j=[];var n;var m;var o;for(var h=0,g=l.length;
h<g;h++){o=l[h];n=this._isTransformFunction(o.prop);[].push.call(n?j:k,o)}if(j.length){m=this._mergeTransformProps(j);
k.push(m)}return k}};f.exports=b},{}],3:[function(b,c,a){c.exports={render:function(g,f){var d=(arguments.length<2)?g:f;
console.log(d)}}},{}],4:[function(b,c,a){a.Clock=b("./ac-animation-sequencer/Clock");
a.PlayerMonitor=b("./ac-animation-sequencer/PlayerMonitor");a.Timeline=b("./ac-animation-sequencer/Timeline");
a.Tween=b("./ac-animation-sequencer/Tween");a.BasicPlayer=b("./ac-animation-sequencer/player/BasicPlayer");
a.MediaPlayer=b("./ac-animation-sequencer/player/MediaPlayer");a.Pause=b("./ac-animation-sequencer/controllers/Pause");
a.MediaGroup=b("./ac-animation-sequencer/controllers/MediaGroup");a.BaseClip=b("./ac-animation-sequencer/clip/BaseClip");
a.CompositeClip=b("./ac-animation-sequencer/clip/CompositeClip");a.TimedClip=b("./ac-animation-sequencer/clip/TimedClip");
a.TweenClip=b("./ac-animation-sequencer/clip/TweenClip");a.ElementClip=b("./ac-animation-sequencer/clip/ElementClip");
a.VideoClip=b("./ac-animation-sequencer/clip/VideoClip");a.ReversibleVideo=b("./ac-animation-sequencer/adapters/ReversibleVideo")
},{"./ac-animation-sequencer/Clock":5,"./ac-animation-sequencer/PlayerMonitor":6,"./ac-animation-sequencer/Timeline":7,"./ac-animation-sequencer/Tween":8,"./ac-animation-sequencer/adapters/ReversibleVideo":11,"./ac-animation-sequencer/clip/BaseClip":12,"./ac-animation-sequencer/clip/CompositeClip":13,"./ac-animation-sequencer/clip/ElementClip":14,"./ac-animation-sequencer/clip/TimedClip":15,"./ac-animation-sequencer/clip/TweenClip":16,"./ac-animation-sequencer/clip/VideoClip":17,"./ac-animation-sequencer/controllers/MediaGroup":18,"./ac-animation-sequencer/controllers/Pause":19,"./ac-animation-sequencer/player/BasicPlayer":20,"./ac-animation-sequencer/player/MediaPlayer":21}],5:[function(b,c,a){function f(){this._currentTimeMS=0;
this._playbackRate=1;this._paused=true;this._resetStartTime()}var d=f.prototype;
d._updateCurrentTime=function(){var h,g=Date.now();if(this._paused){h=0}else{h=(g-this._startTime)
}this._currentTimeMS+=(h*this._playbackRate);this._startTime=g};d._resetStartTime=function(){this._startTime=Date.now()
};d.play=function(){this._resetStartTime();this._paused=false;return this};d.pause=function(){this._updateCurrentTime();
this._paused=true;return this};d.isPaused=function(){return this._paused};d.getCurrentTime=function(){this._updateCurrentTime();
return this._currentTimeMS/1000};d.setCurrentTime=function(g){if(isNaN(g)){return
}this._resetStartTime();this._currentTimeMS=g*1000};d.getPlaybackRate=function(){return this._playbackRate
};d.setPlaybackRate=function(g){if(isNaN(g)){return}this._playbackRate=g};c.exports=f
},{}],6:[function(c,f,a){var h=c("ac-event-emitter").EventEmitter;var b=c("./vendor/utils");
function d(j,k,i){i=(Array.isArray(k)?i:k)||{};k=(Array.isArray(k)?k:[]);this._player=j;
this._isMonitoring=true;this._times=[0];this._previous=0;this._currentTimeIndex=0;
this._options=b.defaults({active:true,readyEvent:"canplaythrough",autoInit:false},i);
if(this._options.autoInit){this.addPlayerListener(this._options.readyEvent,this._init.bind(this,k))
}}var g=d.prototype=new h();g.addPlayerListener=function(j,i){if(typeof this._player.addEventListener==="function"){this._player.addEventListener(j,i)
}else{if(typeof this._player.on==="function"){this._player.on(j,i)}}};g._init=function(i){if(this._initialized){return
}this.addTime(this._player.duration);if(i&&i.length){i.forEach(this.addTime.bind(this))
}this._resetNextTimes();this._attachEvents();if(this._options.active){this._listen()
}this.trigger("ready");this._initialized=true};g._attachEvents=function(){this.addPlayerListener("play",this._handlePlay.bind(this));
if(!this._options.active){this.addPlayerListener("timeupdate",this._listen.bind(this))
}this.addPlayerListener("seeking",this._handleSeek.bind(this));this.addPlayerListener("ratechange",this._handleRateChange.bind(this))
};g.addTime=function(i,j){i=parseFloat(i);if(isNaN(i)){throw new TypeError('Invalid time "'+i+'", expected Number"')
}if(this._times.indexOf(i)===-1){this._times.push(i);this._times.sort(function(l,k){return l-k
})}if(typeof j==="function"){this.on("time:"+i,j)}this._resetNextTimes()};g._handleSeek=function(){var j=this._player.currentTime;
var i=this._times.indexOf(j);this._currentTimeIndex=(i!==-1)?i:this._calcCurrentTimeIndex(j);
this._resetNextTimes()};g._handlePlay=function(){this._resetNextTimes();this._listen()
};g._handleRateChange=function(){var j=this._player.currentTime;var k=j===this._player.duration;
var i=this._times.indexOf(j)!==-1;this._currentTimeIndex=(k||i)?this._currentTimeIndex:this._calcCurrentTimeIndex(j);
this._resetNextTimes()};g._resetNextTimes=function(){var i=this._calcNextTimeIndex(this._currentTimeIndex);
if(b.isNum(i)){this._nextTimeIndex=i;this._nextTimePoint=this._times[i]}};g._calcCurrentTimeIndex=function(m){var j,l,k,i;
k=this._calcTimeIndices(m);l=k[0];j=k[1];i=(this._forwards())?l:j;return(this._validTimeIndex(i))?i:null
};g._validTimeIndex=function(i){return(0<=i&&i<=this._times.length-1)};g._calcNextTimeIndex=function(i){var j=i+((this._forwards())?1:-1);
return(this._validTimeIndex(j))?j:null};g._calcTimeIndices=function(j){var i=this._times.reduce(function(l,m,k){return(j>=this._times[l+1])?k:l
}.bind(this),0);return[i,i+1]};g._reachedNextTime=function(m){var l=this._forwards();
var j=this._nextTimePoint;var k=!this._player.paused||m===0||m===this._player.duration;
var n=l&&m>=j;var i=!l&&m<=j;return k&&(n||i)};g._forwards=function(){return this._player.playbackRate>0
};g._listen=function(){var j=this._player.currentTime;var i=this._previous;var k=this._reachedNextTime(j);
if(k){this._enterTimePoint(i)}this._previous=j;if(this._options.active&&!this._player.paused){window.requestAnimationFrame(this._listen.bind(this))
}};g._enterTimePoint=function(j){var i=this._calcNextTimeIndex(this._currentTimeIndex);
if(!b.isNum(i)){return}var k=this._times[i];this.trigger("time:"+k,{previous:j,next:this._player.currentTime,requested:k});
this._currentTimeIndex=i;this._resetNextTimes()};f.exports=d},{"./vendor/utils":24}],7:[function(b,c,a){var i=b("./clip/CompositeClip");
var h=b("./clip/TimedClip");var g="Invalid duration for the following clip; must be number greater than or equal to zero (0)";
var f='Invalid clip type: "';var d={clipTypes:{Tween:b("./clip/TweenClip"),Element:b("./clip/ElementClip")},create:function(j){if(this.validTimeline(j)){return this._buildTimeline(j)
}if(this.debug&&console&&typeof console.warn==="function"){console.warn("Timeline: invalid timeline data:",j)
}return null},validTimeline:function(j){return Array.isArray(j)&&j.every(this._validClip.bind(this))
},_getClipType:function(j){if(typeof j==="string"&&this.clipTypes[j]){j=this.clipTypes[j]
}if(this._isValidClipType(j)){return j}return false},_isValidClipType:function(j){return(j&&j.create)
},_validate:function(){return true},_buildTimeline:function(k){var j=k.map(this._createTimedClip.bind(this));
return new i(j)},_createTimedClip:function(k){var j=this._getClipType(k.clip);return new h(j.create(k),k)
},_validClip:function(m){var l;var j=this._getClipType(m.clip);var k=this._validDuration(m);
if(!j){throw new TypeError(f+m.clip+'"\n\n'+JSON.stringify(m))}l=j.validate||this._validate;
return k&&l(m)},_validDuration:function(k){var l=k.duration;var j=typeof l==="number"&&l>0;
if(!j){throw new TypeError(g+"\n\n"+JSON.stringify(k))}return j}};c.exports=d},{"./clip/CompositeClip":13,"./clip/ElementClip":14,"./clip/TimedClip":15,"./clip/TweenClip":16}],8:[function(b,a,d){var i=b("./vendor/KeySpline");
var g=b("./vendor/EasingFunctions");var k="Easing option must be one of: String, Array[Number:4], or Function. Given: ";
var c="KeySpline easing expected an array of exactly four (4) numbers, given: ";
var j=b("./vendor/utils");function h(l){l=l||{};j.defaultProps(this,h.defaults,l);
this._easingFunction=this._createEasing(this.easing)}h.defaults={from:0,to:1,duration:1,easing:"linear"};
var f=h.prototype;f._createEasing=function(l){var m;if(typeof l==="string"){m=this._createPredefinedEasing(l)
}else{if(Array.isArray(l)){m=this._createBezierEasing(l)}else{if(typeof l==="function"){m=l
}else{throw new TypeError(k+l)}}}return m};f._createBezierEasing=function(l){var n;
var o=l;var m=l.every(function(p){return(typeof p==="number")});if(l.length!==4||!m){throw new TypeError(c+l)
}n=new i(o[0],o[1],o[2],o[3]);return function(p,s,r,q){return s+n.get(p/q)*r}};
f._createPredefinedEasing=function(n){var m=g[n];var l="";if(!m){l+='Easing function "'+m;
l+='" not recognized among the following: ';l+=Object.keys(g).join(", ");throw new Error(l)
}return m};f._getInterpolatedValue=function(l,o,n,m){return this._easingFunction(l,o,n,m)
};f.valueAtLocation=function(m){if(m<0||m>1){return null}var l=this.duration*m;
return this.valueAtTime(l)};f.valueAtPercent=function(l){if(l<0||l>100){return null
}return this.valueAtLocation(l/100)};f.valueAtTime=function(l){if(l<0||l>this.duration){return null
}return this._getInterpolatedValue(l,this.from,this.to-this.from,this.duration)
};a.exports=h},{"./vendor/EasingFunctions":22,"./vendor/KeySpline":23,"./vendor/utils":24}],9:[function(c,d,b){function a(g){this._media=g
}var f=a.prototype;f.on=function(){this._media.addEventListener.apply(this._media,arguments)
};f.off=function(){this._media.removeEventListener.apply(this._media,arguments)
};f.getCurrentTime=function(){return this._media.currentTime};f.setCurrentTime=function(g){this._media.currentTime=g
};f.getDuration=function(){return this._media.duration};f.getPlaybackRate=function(){return this._media.playbackRate
};f.setPlaybackRate=function(g){this._media.playbackRate=g};d.exports=a},{}],10:[function(c,d,a){if(typeof Object.defineProperties!=="function"){return
}var g=c("ac-event-emitter").EventEmitter;function b(h){this._player=h}var f=b.prototype=new g();
f.addEventListener=function(){this._player.on.apply(this._player,arguments)};f.removeEventListener=function(){this._player.on.apply(this._player,arguments)
};f.play=function(){this._player.play.apply(this._player,arguments)};f.pause=function(){this._player.pause.apply(this._player,arguments)
};Object.defineProperties(b.prototype,{paused:{get:function(){return this._player.isPaused()
},set:function(h){this._player.setPaused(h)}},currentTime:{get:function(){return this._player.getCurrentTime()
},set:function(h){this._player.setCurrentTime(h)}},duration:{get:function(){return this._player.getDuration()
}},playbackRate:{get:function(){return this._player.getPlaybackRate()},set:function(h){this.trigger("ratechange",{rate:h});
this._player.setPlaybackRate(h)}}});d.exports=b},{}],11:[function(b,c,a){if(typeof Object.defineProperties!=="function"){return
}var f=b("ac-event-emitter").EventEmitter;function g(h){this._media=h;this._lastTime=null;
g.passThroughEvents.forEach(this.passThroughEvent.bind(this));g.interceptedEvents.forEach(this.interceptEvent.bind(this))
}g.interceptedEvents=["seeking","play"];g.passThroughEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","playing","progress","ratechange","seeked","suspend","timeupdate","volumechange","waiting"];
var d=g.prototype=new f();d.addEventListener=function(h){var i=g.passThroughEvents;
if(i.indexOf(h)>-1){this._media.addEventListener.apply(this._media,arguments)}else{this.on.apply(this,arguments)
}};d.removeEventListener=function(h){var i=g.passThroughEvents;if(i.indexOf(h)>-1){this._media.removeEventListener.apply(this._media,arguments)
}else{this.off.apply(this,arguments)}};d.passThroughEvent=function(h){this._media.addEventListener(h,this._passThrough.bind(this))
};d.interceptEvent=function(h){var i=this["_on"+h];if(typeof i!=="undefined"){this._media.addEventListener(h,i.bind(this))
}};d._passThrough=function(h){this.trigger(h.type,h)};d._onseeking=function(){if(!this._playing){this.trigger("seeking")
}};d._onplay=function(){this.trigger("play")};d.play=function(){if(this.playbackRate<0){this._playing=true;
this._lastTime=null;window.requestAnimationFrame(this._update.bind(this));this.trigger("play")
}else{this._media.play()}};d.load=function(){this._media.load()};d._stop=function(h){h.preventDefault();
h.stopPropagation()};d._update=function(i){var j=i-(this._lastTime||i);var h=this._media.currentTime+((j*this.playbackRate)/1000);
if(h<=0){this._media.currentTime=0;this._playing=false;this.trigger("returned",{type:"returned"})
}else{this._media.currentTime=h;this.trigger("timeupdate",{type:"timeupdate"})}this._lastTime=i;
if(this._playing){window.requestAnimationFrame(this._update.bind(this))}};d.pause=function(){this._playing=false;
this._media.pause()};Object.defineProperties(g.prototype,{currentTime:{get:function(){return this._media.currentTime
},set:function(h){this._media.currentTime=h}},duration:{get:function(){return this._media.duration
}},buffered:{get:function(){return this._media.buffered}},playbackRate:{get:function(){return this._media.playbackRate
},set:function(h){this._media.playbackRate=h}},paused:{get:function(){return !this._playing&&this._media.paused
},set:function(h){this._media.paused=h}}});c.exports=g},{}],12:[function(b,a,d){var h=b("../vendor/KeySpline");
var i=b("ac-style-renderer").LogRenderer;var g=b("../vendor/EasingFunctions");var l="Easing option must be one of: String, Array[Number:4], or Function. Given: ";
var c="KeySpline easing expected an array of exactly four (4) numbers, given: ";
var k=b("ac-event-emitter").EventEmitter;function j(n,m){this.options=m||{};this._renderer=this.options.renderer||i;
this._duration=n;this._currentTime=0;this._easingFunction=this._createEasing(this.options.easing||j.DEFAULT_EASING)
}j.DEFAULT_EASING="linear";var f=j.prototype=new k();f._createEasing=function(m){var n;
if(typeof m==="string"){n=this._createPredefinedEasing(m)}else{if(Array.isArray(m)){n=this._createBezierEasing(m)
}else{if(typeof m==="function"){n=m}else{throw new TypeError(l+m)}}}return n};f._createBezierEasing=function(m){var o;
var p=m;var n=m.every(function(q){return(typeof q==="number")});if(m.length!==4||!n){throw new TypeError(c+m)
}o=new h(p[0],p[1],p[2],p[3]);return function(q,t,s,r){return o.get(q/r)*s}};f._createPredefinedEasing=function(o){var n=g[o];
var m="";if(!n){m+='Easing function "'+n;m+='" not recognized among the following: ';
m+=Object.keys(g).join(", ");throw new Error(m)}return n};f._getInterpolatedValue=function(m,p,o,n){return this._easingFunction(m,p,o,n)
};f.getDuration=function(){return this._duration};f.getCurrentTime=function(){return this._currentTime
};f.setCurrentTime=function(m){this._currentTime=m;this.update()};f.getPlaybackRate=function(){return this._playbackRate
};f.setPlaybackRate=function(m){this._playbackRate=m};f.update=function(){};a.exports=j
},{"../vendor/EasingFunctions":22,"../vendor/KeySpline":23,"ac-style-renderer":1}],13:[function(b,c,a){var g=b("./TimedClip");
function f(h){if(h&&h.length){this._clips=h.map(this._ensureTimedClip);this._duration=this._calcDuration()
}}var d=f.prototype;d._calcDuration=function(h){h=h||this._clips;var i=h.reduce(function(k,l){var j=l.getStartDelay()+l.getDuration();
return(j>k)?j:k},0);return i};d._ensureTimedClip=function(h){if(!(h instanceof g)){h=new g(h)
}return h};d._getLocalTime=function(h,i){return i-h.getStartDelay()};d._getEligibleClips=function(){return this._clips
};d.addClip=function(h){h=this._ensureTimedClip(h);this._clips.push(h);this._duration=this._calcDuration()
};d.on=function(){var h=arguments;this._clips.forEach(function(i){i.on.apply(i,h)
})};d.off=function(){var h=arguments;this._clips.forEach(function(i){i.off.apply(i,h)
})};d.trigger=function(){var h=arguments;this._clips.forEach(function(i){i.trigger.apply(i,h)
})};d.setEasingDirection=function(h){this._clips.forEach(function(i){i.setEasingDirection(h)
})};d.getDuration=function(){return this._duration};d.getCurrentTime=function(){return this._currentTime
};d.setCurrentTime=function(j,i){var h=this._getEligibleClips();if(!h||!h.length){return
}h.forEach(function(k){var l=this._getLocalTime(k,j);k.setCurrentTime(l,i)}.bind(this))
};d.getPlaybackRate=function(){return this._playbackRate};d.setPlaybackRate=function(h){if(isNaN(h)){return
}this._playbackRate=h};c.exports=f},{"./TimedClip":15}],14:[function(c,a,d){var j=c("../vendor/utils");
var h=c("../Tween");var k=c("./BaseClip");var i=c("ac-style-renderer").InlineStyleRenderer;
var b="Invalid element or selector: ";function g(l){l=j.defaults(g.DEFAULTS,l);
this.props=l.props||[];if(l.selector||typeof l.element==="string"){this.el=document.querySelector(l.selector||l.element)
}else{this.el=l.element}if(!this.el||!this.el.nodeType||this.el.nodeType!==1){throw new TypeError(b+l.element)
}if(!l.renderer){this.renderer=i}k.call(this,l.duration,l);this._initProps()}g.DEFAULTS={props:[],selector:null,element:".default_selector",renderer:i,duration:1};
g.create=function(l){return new g(l)};g.validate=function(m){var l="selector" in m||"element" in m;
return l};var f=g.prototype=new k();f._initProps=function(){this.props.forEach(function(l){l.tween=this._createTween({easing:l.easing||k.DEFAULT_EASING,from:l.from,to:l.to,duration:this.getDuration()})
}.bind(this))};f._createTween=function(l){return new h(l)};f.update=function(m){if(this.props.length<1){return
}var l=this.props.map(function(q){var o=q.tween;var n=q.units;var p=o.valueAtTime(m);
p=(n?(p+n):p);return{prop:q.property,value:p}});this._renderer.render(this.el,l);
this.trigger("tween_update",{el:this.el,context:l})};f.getCurrentTime=function(){return this._currentTime
};f.setCurrentTime=function(l){if(l<0||l>this.getDuration()){return}this._currentTime=l;
this.update(this._currentTime)};a.exports=g},{"../Tween":8,"../vendor/utils":24,"./BaseClip":12,"ac-style-renderer":1}],15:[function(c,d,a){var b=c("../vendor/utils");
function g(i,h){h=b.defaults(g.DEFAULTS,(h||{}));this._clip=i;this._startDelay=h.startDelay||0;
this._loop=h.loop||false;this._fill=h.fill||"none"}g.DEFAULTS={fill:"none",loop:false,startDelay:0};
g.FILL_MODES=["none","forwards","backwards","both"];var f=g.prototype;f._show=function(){if(this._isHidden){this._isHidden=false;
this._clip.show()}};f._applyFill=function(n){if(this.getFill()==="none"){return
}var m=this.getDuration();var k=n>m;var j=this.getFill();var i=k&&j==="forwards";
var h=!k&&j==="backwards";var l=j==="both"||i||h;if(l){this._clip.setCurrentTime((k)?m:0)
}};f._hide=function(){if(!this._isHidden){this._isHidden=true;this._clip.hide()
}};f.setEasingDirection=function(h){return this._clip.setEasingDirection(h)};f.on=function(){this._clip.on.apply(this._clip,arguments)
};f.off=function(){this._clip.off.apply(this._clip,arguments)};f.trigger=function(){this._clip.trigger.apply(this._clip,arguments)
};f.getCurrentTime=function(){return this._currentTime};f.setCurrentTime=function(i,h){if(i<0||i>this.getDuration()){this._clip.inEffect=false;
this._applyFill(i)}else{this._clip.inEffect=true;this._clip.setCurrentTime(i,h)
}};f.getDuration=function(){return this._clip.getDuration()};f.getStartDelay=function(){return this._startDelay
};f.setStartDelay=function(h){if(b.isNum(h)){this._startDelay=h}};f.getLoop=function(){return this._loop
};f.setLoop=function(h){this._loop=!!h};f.getFill=function(){return this._fill};
f.setFill=function(i){var h=g.FILL_MODES;if(h.indexOf(i.toLowerCase())!==-1){this._fill=i
}};d.exports=g},{"../vendor/utils":24}],16:[function(c,d,b){var g=c("./BaseClip");
function a(j,i,h){if(typeof j==="object"){h=j;j=h.duration;i=h.props}g.call(this,j,h);
this.props=i||[];this._initializePropEasing();this._lastComputedTime=0;this._easingDirection=1
}a.create=function(h){return new a(h.duration,h.props)};a.validate=function(h){return(Array.isArray(h.props)&&h.props.length>0)
};a.DEFAULT_EASING="linear";var f=a.prototype=new g();f._initializePropEasing=function(){this.props.forEach(function(h){h.easing=this._createEasing(h.easing||g.DEFAULT_EASING)
}.bind(this))};f.setEasingDirection=function(h){this._easingDirection=h};f.update=function(k){var i=(this._easingDirection===-1);
if(this.options.reverseEase!==true){i=false}var j=this.getDuration(),h={};if(this.props.length<1){return
}this.props.forEach(function(n){var m;var l=n.property;if(i){m=n.easing(this.getDuration()-k,n.to,-(n.to-n.from),j)
}else{m=n.easing(k,n.from,(n.to-n.from),j)}h[l]=m}.bind(this));this.trigger("tween_update",h)
};f.getCurrentTime=function(){return this._currentTime};f.setCurrentTime=function(h){if(h<0){h=0
}if(h>this.getDuration()){h=this.getDuration()}if(h<0||h>this.getDuration()){return
}this._currentTime=h;this.update(this._currentTime)};d.exports=a},{"./BaseClip":12}],17:[function(c,d,b){var a=c("../adapters/MediaAsClip");
function f(h,g){if(console){console.warn("VideoClip deprecated, please use adapters/MediaAsClip.")
}return new a(h,g)}d.exports=f},{"../adapters/MediaAsClip":9}],18:[function(c,d,a){if(typeof Object.defineProperties!=="function"){return
}var h=c("ac-event-emitter").EventEmitter;var i=c("../Clock");var b=c("../vendor/utils");
function g(){var j=[].slice.call(arguments);this._mediaElements=j.filter(this._validateMediaElements);
this._clock=new i()}var f=g.prototype=new h();f.addEventListener=f.on;f.removeEventListener=f.off;
f._validateMediaElements=function(j){return(typeof j.play==="function")&&(typeof j.pause==="function")
};f._updateCurrentTime=function(j){this._lastTime=this._clock.currentTime;this._mediaElements.forEach(function(k){k.currentTime=j
})};f._isValidTime=function(j){return(0<=j)&&(j<=this.duration)};f.play=function(){this.paused=false;
this._clock.play();b.invoke(this._mediaElements,"play");this.trigger("play")};f.pause=function(){this.paused=true;
this._clock.pause();b.invoke(this._mediaElements,"pause");this.trigger("pause")
};Object.defineProperties(g.prototype,{paused:{get:function(){return this._paused
},set:function(j){this._paused=!!j}},currentTime:{get:function(){return this._clock.getCurrentTime()
},set:function(j){if(this._isValidTime(j)){this.trigger("seeking",{time:j});this._updateCurrentTime(j);
this.trigger("seeked",{time:j})}}},playbackRate:{get:function(){return this._clock.getPlaybackRate()
},set:function(j){if(!b.isNum(j)){return}this._clock.setPlaybackRate(j);this._mediaElements.forEach(function(k){k.playbackRate=j
});this.trigger("ratechange",{rate:j})}},duration:{get:function(){return this._duration
},set:function(j){this._duration=j}}});d.exports=g},{"../Clock":5,"../vendor/utils":24}],19:[function(b,d,a){var h=b("ac-event-emitter").EventEmitter;
var c=b("../PlayerMonitor");function f(k,i,j){j=j||{};this._player=k;this._monitor=new c(this._player,j);
this._monitor.on("ready",this._initPauses.bind(this,i));this._previousPauseIndex=0;
this._player.addEventListener("play",this._exitPause.bind(this),false)}var g=f.prototype=new h();
g._initPauses=function(i){this._pauses=this._processPauses(i);this._attachPauses(this._pauses)
};g._processPauses=function(i){i=i.filter(function(j){return(0<j)&&(j<this._player.duration)
}.bind(this));i=i.sort(function(k,j){return k-j});if(i[0]!==0){i.unshift(0)}if(i[i.length-1]!==this._player.duration){i.push(this._player.duration)
}return i};g._attachPauses=function(i){i.forEach(function(j){this._monitor.addTime(j,this._enterPause.bind(this))
}.bind(this))};g._enterPause=function(l){var j=l.requested;var i=this._previousPauseIndex;
var k=this._pauses.indexOf(j);if(i===k){return}this._atPausePoint=true;this._player.pause();
this._player.currentTime=j;this.trigger("pauseenter",{from:i,to:k});this._previousPauseIndex=k
};g._exitPause=function(){var k=this._player.currentTime;var j=this._forwards();
var l=j&&k===this._player.duration;var i=!j&&k===0;if(this._atPausePoint&&!(l||i)){this._atPausePoint=false;
this.trigger("pauseexit",{from:this._previousPauseIndex,to:this._calcNextPauseIndex()})
}};g._forwards=function(){return this._player.playbackRate>0};g._calcNextPauseIndex=function(){var i=this._previousPauseIndex;
var j=this._forwards();return i+((j)?1:-1)};d.exports=f},{"../PlayerMonitor":6}],20:[function(d,f,b){var h=d("ac-event-emitter").EventEmitter;
var i=d("../Clock");var c=d("../adapters/PlayerAsMedia");function a(k,j){j=j||{};
if(!k){throw new TypeError("BasicPlayer: Invalid clip provided",k)}this._clip=k;
this._paused=true;this.setClock(j.clock||new i());window.setTimeout(this._triggerStart.bind(this),0)
}var g=a.prototype=new h();g.addEventListener=g.on;g.removeEventListener=g.off;
g.play=function(){this._paused=false;this._clock.play();this._update();this.trigger("play")
};g.pause=function(){this.setPaused(true);this._clock.pause();this.trigger("pause")
};g._triggerStart=function(){this.trigger("canplay");this.trigger("canplaythrough")
};g._updateCurrentTime=function(j){this._clock.setCurrentTime(j);this._lastTime=this._clip.setCurrentTime(j)
};g._update=function(){var m=this._clock.getCurrentTime();var n=this.getDuration();
var l=this._clock.getPlaybackRate();var k=l>0;var o=k&&m>=n;var j=!k&&m<=0;if(o||j){m=(o)?n:0;
this.pause();this._updateCurrentTime(m)}this.trigger("timeupdate",{previous:this._lastTime,time:m});
if(o){this.trigger("ended")}if(j){this.trigger("returned")}if(!this.isPaused()){this._updateCurrentTime(m);
window.requestAnimationFrame(this._update.bind(this))}};g._isValidTime=function(j){return(0<=j)&&(j<=this.getDuration())
};g.asMedia=function(){return new c(this)};g.isPaused=function(){return this._paused
};g.setPaused=function(j){this._paused=!!j};g.getCurrentTime=function(){return this._clock.getCurrentTime()
};g.setCurrentTime=function(j){if(this._isValidTime(j)){this.trigger("seeking",{time:j});
this._updateCurrentTime(j);this.trigger("seeked",{time:j})}};g.getPlaybackRate=function(){return this._clock.getPlaybackRate()
};g.setPlaybackRate=function(j){this._clock.setPlaybackRate(j);this.trigger("ratechange",{rate:j})
};g.getDuration=function(){return this._clip.getDuration()};g.setClock=function(j){this._clock=j
};g.getClock=function(){return this._clock};f.exports=a},{"../Clock":5,"../adapters/PlayerAsMedia":10}],21:[function(d,f,c){var b=d("./BasicPlayer");
function a(h,g){var i=new b(h,g);if(console){console.warn("MediaPlayer module deprecated, please use adapters/PlayerAsMedia or #toMedia method on instances of BasicPlayer")
}return i.asMedia()}f.exports=a},{"./BasicPlayer":20}],22:[function(q,d,J){var w={linear:function E(N,L,M,K){return M*N/K+L
},easeInQuad:function n(N,L,M,K){return M*(N/=K)*N+L},easeOutQuad:function b(N,L,M,K){return -M*(N/=K)*(N-2)+L
},easeInOutQuad:function x(N,L,M,K){if((N/=K/2)<1){return M/2*N*N+L}return -M/2*((--N)*(N-2)-1)+L
},easeInCubic:function t(N,L,M,K){return M*(N/=K)*N*N+L},easeOutCubic:function i(N,L,M,K){return M*((N=N/K-1)*N*N+1)+L
},easeInOutCubic:function h(N,L,M,K){if((N/=K/2)<1){return M/2*N*N*N+L}return M/2*((N-=2)*N*N+2)+L
},easeInQuart:function j(N,L,M,K){return M*(N/=K)*N*N*N+L},easeOutQuart:function I(N,L,M,K){return -M*((N=N/K-1)*N*N*N-1)+L
},easeInOutQuart:function G(N,L,M,K){if((N/=K/2)<1){return M/2*N*N*N*N+L}return -M/2*((N-=2)*N*N*N-2)+L
},easeInQuint:function m(N,L,M,K){return M*(N/=K)*N*N*N*N+L},easeOutQuint:function a(N,L,M,K){return M*((N=N/K-1)*N*N*N*N+1)+L
},easeInOutQuint:function H(N,L,M,K){if((N/=K/2)<1){return M/2*N*N*N*N*N+L}return M/2*((N-=2)*N*N*N*N+2)+L
},easeInSine:function r(N,L,M,K){return -M*Math.cos(N/K*(Math.PI/2))+M+L},easeOutSine:function f(N,L,M,K){return M*Math.sin(N/K*(Math.PI/2))+L
},easeInOutSine:function A(N,L,M,K){return -M/2*(Math.cos(Math.PI*N/K)-1)+L},easeInExpo:function c(N,L,M,K){return(N===0)?L:M*Math.pow(2,10*(N/K-1))+L
},easeOutExpo:function D(N,L,M,K){return(N===K)?L+M:M*(-Math.pow(2,-10*N/K)+1)+L
},easeInOutExpo:function p(N,L,M,K){if(N===0){return L}if(N===K){return L+M}if((N/=K/2)<1){return M/2*Math.pow(2,10*(N-1))+L
}return M/2*(-Math.pow(2,-10*--N)+2)+L},easeInCirc:function s(N,L,M,K){return -M*(Math.sqrt(1-(N/=K)*N)-1)+L
},easeOutCirc:function g(N,L,M,K){return M*Math.sqrt(1-(N=N/K-1)*N)+L},easeInOutCirc:function B(N,L,M,K){if((N/=K/2)<1){return -M/2*(Math.sqrt(1-N*N)-1)+L
}return M/2*(Math.sqrt(1-(N-=2)*N)+1)+L},easeInElastic:function z(O,Q,M,P){var L=1.70158;
var N=0;var K=M;if(O===0){return Q}if((O/=P)===1){return Q+M}if(!N){N=P*0.3}if(K<Math.abs(M)){K=M;
L=N/4}else{L=N/(2*Math.PI)*Math.asin(M/K)}return -(K*Math.pow(2,10*(O-=1))*Math.sin((O*P-L)*(2*Math.PI)/N))+Q
},easeOutElastic:function y(O,Q,M,P){var L=1.70158;var N=0;var K=M;if(O===0){return Q
}if((O/=P)===1){return Q+M}if(!N){N=P*0.3}if(K<Math.abs(M)){K=M;L=N/4}else{L=N/(2*Math.PI)*Math.asin(M/K)
}return K*Math.pow(2,-10*O)*Math.sin((O*P-L)*(2*Math.PI)/N)+M+Q},easeInOutElastic:function C(O,Q,M,P){var L=1.70158;
var N=0;var K=M;if(O===0){return Q}if((O/=P/2)===2){return Q+M}if(!N){N=P*(0.3*1.5)
}if(K<Math.abs(M)){K=M;L=N/4}else{L=N/(2*Math.PI)*Math.asin(M/K)}if(O<1){return -0.5*(K*Math.pow(2,10*(O-=1))*Math.sin((O*P-L)*(2*Math.PI)/N))+Q
}return K*Math.pow(2,-10*(O-=1))*Math.sin((O*P-L)*(2*Math.PI)/N)*0.5+M+Q},easeInBack:function v(N,K,M,O,L){if(L===undefined){L=1.70158
}return M*(N/=O)*N*((L+1)*N-L)+K},easeOutBack:function l(N,K,M,O,L){if(L===undefined){L=1.70158
}return M*((N=N/O-1)*N*((L+1)*N+L)+1)+K},easeInOutBack:function F(N,K,M,O,L){if(L===undefined){L=1.70158
}if((N/=O/2)<1){return M/2*(N*N*(((L*=(1.525))+1)*N-L))+K}return M/2*((N-=2)*N*(((L*=(1.525))+1)*N+L)+2)+K
},easeInBounce:function u(N,L,M,K){return M-w.easeOutBounce(K-N,0,M,K)+L},easeOutBounce:function k(N,L,M,K){if((N/=K)<(1/2.75)){return M*(7.5625*N*N)+L
}else{if(N<(2/2.75)){return M*(7.5625*(N-=(1.5/2.75))*N+0.75)+L}else{if(N<(2.5/2.75)){return M*(7.5625*(N-=(2.25/2.75))*N+0.9375)+L
}else{return M*(7.5625*(N-=(2.625/2.75))*N+0.984375)+L}}}},easeInOutBounce:function o(N,L,M,K){if(N<K/2){return w.easeInBounce(N*2,0,M,K)*0.5+L
}return w.easeOutBounce(N*2-K,0,M,K)*0.5+M*0.5+L}};d.exports=w},{}],23:[function(b,c,a){
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
q-=p/t}return q}}c.exports=d},{}],24:[function(b,c,a){c.exports={isNum:function(d){return typeof d==="number"
},isArray:function(f){var d=Object.prototype.toString;return d.call(f)==="[object Array]"
},addClass:function(d,f){d.classList.add(f)},removeClass:function(d,f){d.classList.remove(f)
},hasClass:function(d,f){return d.contains(f)},defaults:function(g,f){var d={};
f=f||{};for(var h in g){if(g.hasOwnProperty(h)){d[h]=(f[h]!=null)?f[h]:g[h]}}return d
},defaultProps:function(h,g,d){var f=this.defaults(g,d);for(var i in f){if(f.hasOwnProperty(i)){h[i]=f[i]
}}},invoke:function(g,d){var f=[].slice.call(arguments,2);if(!Array.isArray(g)){throw new Error("List is not an array")
}g.forEach(function(h){var i=h[d];if(i&&typeof i==="function"){i.apply(h,f)}})}}
},{}],25:[function(b,c,a){if(!Array.prototype.filter){Array.prototype.filter=function d(l,k){var j=Object(this);
var f=j.length>>>0;var h;var g=[];if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}for(h=0;h<f;h+=1){if(h in j&&l.call(k,j[h],h,j)){g.push(j[h])}}return g}}},{}],26:[function(b,c,a){if(!Array.prototype.some){Array.prototype.some=function d(k,j){var g=Object(this);
var f=g.length>>>0;var h;if(typeof k!=="function"){throw new TypeError(k+" is not a function")
}for(h=0;h<f;h+=1){if(h in g&&k.call(j,g[h],h,g)===true){return true}}return false
}}},{}],27:[function(d,f,b){var g=d("./ac-browser/BrowserData");var a=/applewebkit/i;
var h=d("./ac-browser/IE");var c=g.create();c.isWebKit=function(i){var j=i||window.navigator.userAgent;
return j?!!a.test(j):false};c.lowerCaseUserAgent=navigator.userAgent.toLowerCase();
if(c.name==="IE"){c.IE={documentMode:h.getDocumentMode()}}f.exports=c},{"./ac-browser/BrowserData":28,"./ac-browser/IE":29}],28:[function(b,c,a){b("ac-polyfills/Array/prototype.filter");
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
};c.exports=f},{"./data":30,"ac-polyfills/Array/prototype.filter":25,"ac-polyfills/Array/prototype.some":26}],29:[function(b,c,a){c.exports={getDocumentMode:function(){var d;
if(document.documentMode){d=parseInt(document.documentMode,10)}else{d=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){d=7
}}}return d}}},{}],30:[function(b,c,a){c.exports={browser:[{string:window.navigator.userAgent,subString:"Edge",identity:"Edge"},{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],31:[function(c,d,b){var g=c("./ac-clock/Clock"),f=c("./ac-clock/ThrottledClock"),a=c("./ac-clock/sharedClockInstance");
a.Clock=g;a.ThrottledClock=f;d.exports=a},{"./ac-clock/Clock":32,"./ac-clock/ThrottledClock":33,"./ac-clock/sharedClockInstance":34}],32:[function(c,d,b){var g;
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
},{}],33:[function(c,d,b){var g;var a=c("./sharedClockInstance"),f=c("ac-event-emitter").EventEmitter;
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
};d.exports=h},{"./sharedClockInstance":34}],34:[function(b,c,a){var d=b("./Clock");
c.exports=new d()},{"./Clock":32}],35:[function(b,c,a){c.exports.DOMEmitter=b("./ac-dom-emitter/DOMEmitter")
},{"./ac-dom-emitter/DOMEmitter":36}],36:[function(b,c,a){var g;var f=b("ac-event-emitter").EventEmitter;
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
this.off();this.el=this._eventEmitter=this._bindings=null};c.exports=h},{}],37:[function(c,f,b){var g=c("ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");f.exports=function d(k,j,i){h.childNode(k,true,"ancestors");
h.selector(j,false,"ancestors");if(i&&g(k)&&(!j||a(k,j))){return k}if(k!==document.body){while((k=k.parentNode)&&g(k)){if(!j||a(k,j)){return k
}if(k===document.body){break}}}return null}},{"./internal/validate":44,"./matchesSelector":46,"ac-dom-nodes/isElement":57}],38:[function(c,d,b){var g=c("ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function f(l,j,i){var k=[];
h.childNode(l,true,"ancestors");h.selector(j,false,"ancestors");if(i&&g(l)&&(!j||a(l,j))){k.push(l)
}if(l!==document.body){while((l=l.parentNode)&&g(l)){if(!j||a(l,j)){k.push(l)}if(l===document.body){break
}}}return k}},{"./internal/validate":44,"./matchesSelector":46,"ac-dom-nodes/isElement":57}],39:[function(d,g,c){var b=d("ac-dom-nodes/filterByNodeType");
var a=d("./filterBySelector");var h=d("./internal/validate");g.exports=function f(k,i){var j;
h.parentNode(k,true,"children");h.selector(i,false,"children");j=k.children||k.childNodes;
j=b(j);if(i){j=a(j,i)}return j}},{"./filterBySelector":40,"./internal/validate":44,"ac-dom-nodes/filterByNodeType":54}],40:[function(d,f,c){d("ac-polyfills/Array/prototype.slice");
d("ac-polyfills/Array/prototype.filter");var b=d("./matchesSelector");var g=d("./internal/validate");
f.exports=function a(i,h){g.selector(h,true,"filterBySelector");i=Array.prototype.slice.call(i);
return i.filter(function(j){return b(j,h)})}},{"./internal/validate":44,"./matchesSelector":46,"ac-polyfills/Array/prototype.filter":59,"ac-polyfills/Array/prototype.slice":62}],41:[function(b,d,a){var c=b("./children");
var g=b("./internal/validate");d.exports=function f(j,h){var i;g.parentNode(j,true,"firstChild");
g.selector(h,false,"firstChild");if(j.firstElementChild&&!h){return j.firstElementChild
}i=c(j,h);if(i.length){return i[0]}return null}},{"./children":39,"./internal/validate":44}],42:[function(b,c,a){c.exports={ancestor:b("./ancestor"),ancestors:b("./ancestors"),children:b("./children"),filterBySelector:b("./filterBySelector"),firstChild:b("./firstChild"),lastChild:b("./lastChild"),matchesSelector:b("./matchesSelector"),nextSibling:b("./nextSibling"),nextSiblings:b("./nextSiblings"),previousSibling:b("./previousSibling"),previousSiblings:b("./previousSiblings"),querySelector:b("./querySelector"),querySelectorAll:b("./querySelectorAll"),siblings:b("./siblings")}
},{"./ancestor":37,"./ancestors":38,"./children":39,"./filterBySelector":40,"./firstChild":41,"./lastChild":45,"./matchesSelector":46,"./nextSibling":47,"./nextSiblings":48,"./previousSibling":63,"./previousSiblings":64,"./querySelector":65,"./querySelectorAll":66,"./siblings":69}],43:[function(b,c,a){c.exports=window.Element?(function(d){return d.matches||d.matchesSelector||d.webkitMatchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector
}(Element.prototype)):null},{}],44:[function(g,c,i){g("ac-polyfills/Array/prototype.indexOf");
var o=g("ac-dom-nodes/isNode");var b=g("ac-dom-nodes/COMMENT_NODE");var k=g("ac-dom-nodes/DOCUMENT_FRAGMENT_NODE");
var j=g("ac-dom-nodes/DOCUMENT_NODE");var h=g("ac-dom-nodes/ELEMENT_NODE");var f=g("ac-dom-nodes/TEXT_NODE");
var a=function(r,q){if(!o(r)){return false}if(typeof q==="number"){return(r.nodeType===q)
}return(q.indexOf(r.nodeType)!==-1)};var m=[h,j,k];var n=" must be an Element, Document, or Document Fragment";
var p=[h,f,b];var l=" must be an Element, TextNode, or Comment";var d=" must be a string";
c.exports={parentNode:function(q,t,s,r){r=r||"node";if((q||t)&&!a(q,m)){throw new TypeError(s+": "+r+n)
}},childNode:function(q,t,s,r){r=r||"node";if(!q&&!t){return}if(!a(q,p)){throw new TypeError(s+": "+r+l)
}},selector:function(q,t,s,r){r=r||"selector";if((q||t)&&typeof q!=="string"){throw new TypeError(s+": "+r+d)
}}}},{"ac-dom-nodes/COMMENT_NODE":49,"ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":50,"ac-dom-nodes/DOCUMENT_NODE":51,"ac-dom-nodes/ELEMENT_NODE":52,"ac-dom-nodes/TEXT_NODE":53,"ac-dom-nodes/isNode":58,"ac-polyfills/Array/prototype.indexOf":61}],45:[function(b,d,a){var c=b("./children");
var g=b("./internal/validate");d.exports=function f(j,h){var i;g.parentNode(j,true,"lastChild");
g.selector(h,false,"lastChild");if(j.lastElementChild&&!h){return j.lastElementChild
}i=c(j,h);if(i.length){return i[i.length-1]}return null}},{"./children":39,"./internal/validate":44}],46:[function(d,f,c){var g=d("ac-dom-nodes/isElement");
var a=d("./internal/nativeMatches");var i=d("./internal/validate");var h=d("./vendor/sizzle/sizzle");
f.exports=function b(k,j){i.selector(j,true,"matchesSelector");if(!g(k)){return false
}if(!a){return h.matchesSelector(k,j)}return a.call(k,j)}},{"./internal/nativeMatches":43,"./internal/validate":44,"./vendor/sizzle/sizzle":70,"ac-dom-nodes/isElement":57}],47:[function(c,d,b){var f=c("ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function g(j,i){h.childNode(j,true,"nextSibling");
h.selector(i,false,"nextSibling");if(j.nextElementSibling&&!i){return j.nextElementSibling
}while(j=j.nextSibling){if(f(j)){if(!i||a(j,i)){return j}}}return null}},{"./internal/validate":44,"./matchesSelector":46,"ac-dom-nodes/isElement":57}],48:[function(d,f,b){var g=d("ac-dom-nodes/isElement");
var a=d("./matchesSelector");var h=d("./internal/validate");f.exports=function c(k,i){var j=[];
h.childNode(k,true,"nextSiblings");h.selector(i,false,"nextSiblings");while(k=k.nextSibling){if(g(k)){if(!i||a(k,i)){j.push(k)
}}}return j}},{"./internal/validate":44,"./matchesSelector":46,"ac-dom-nodes/isElement":57}],49:[function(b,c,a){c.exports=8
},{}],50:[function(b,c,a){c.exports=11},{}],51:[function(b,c,a){c.exports=9},{}],52:[function(b,c,a){c.exports=1
},{}],53:[function(b,c,a){c.exports=3},{}],54:[function(d,f,c){d("ac-polyfills/Array/prototype.slice");
d("ac-polyfills/Array/prototype.filter");var g=d("./internal/isNodeType");var a=d("./ELEMENT_NODE");
f.exports=function b(i,h){h=h||a;i=Array.prototype.slice.call(i);return i.filter(function(j){return g(j,h)
})}},{"./ELEMENT_NODE":52,"./internal/isNodeType":55,"ac-polyfills/Array/prototype.filter":59,"ac-polyfills/Array/prototype.slice":62}],55:[function(b,c,a){var d=b("../isNode");
c.exports=function f(h,g){if(!d(h)){return false}if(typeof g==="number"){return(h.nodeType===g)
}return(g.indexOf(h.nodeType)!==-1)}},{"../isNode":58}],56:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./DOCUMENT_FRAGMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_FRAGMENT_NODE":50,"./internal/isNodeType":55}],57:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./ELEMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./ELEMENT_NODE":52,"./internal/isNodeType":55}],58:[function(b,c,a){c.exports=function d(f){return !!(f&&f.nodeType)
}},{}],59:[function(b,c,a){c.exports=b(25)},{}],60:[function(b,c,a){if(!Array.prototype.forEach){Array.prototype.forEach=function d(k,j){var h=Object(this);
var f;var g;if(typeof k!=="function"){throw new TypeError("No function object passed to forEach.")
}for(f=0;f<this.length;f+=1){g=h[f];k.call(j,g,f,h)}}}},{}],61:[function(b,c,a){if(!Array.prototype.indexOf){Array.prototype.indexOf=function d(g,h){var i=h||0;
var f=0;if(i<0){i=this.length+h-1;if(i<0){throw"Wrapped past beginning of array while looking up a negative start index."
}}for(f=0;f<this.length;f++){if(this[f]===g){return f}}return(-1)}}},{}],62:[function(b,c,a){(function(){var d=Array.prototype.slice;
try{d.call(document.documentElement)}catch(f){Array.prototype.slice=function(n,j){j=(typeof j!=="undefined")?j:this.length;
if(Object.prototype.toString.call(this)==="[object Array]"){return d.call(this,n,j)
}var l,h=[],k,g=this.length;var o=n||0;o=(o>=0)?o:g+o;var m=(j)?j:g;if(j<0){m=g+j
}k=m-o;if(k>0){h=new Array(k);if(this.charAt){for(l=0;l<k;l++){h[l]=this.charAt(o+l)
}}else{for(l=0;l<k;l++){h[l]=this[o+l]}}}return h}}}())},{}],63:[function(c,d,b){var g=c("ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function f(j,i){h.childNode(j,true,"previousSibling");
h.selector(i,false,"previousSibling");if(j.previousElementSibling&&!i){return j.previousElementSibling
}while(j=j.previousSibling){if(g(j)){if(!i||a(j,i)){return j}}}return null}},{"./internal/validate":44,"./matchesSelector":46,"ac-dom-nodes/isElement":57}],64:[function(c,d,b){var f=c("ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function g(k,i){var j=[];
h.childNode(k,true,"previousSiblings");h.selector(i,false,"previousSiblings");while(k=k.previousSibling){if(f(k)){if(!i||a(k,i)){j.push(k)
}}}return j.reverse()}},{"./internal/validate":44,"./matchesSelector":46,"ac-dom-nodes/isElement":57}],65:[function(c,d,a){var g=c("./internal/validate");
var b=c("./shims/querySelector");d.exports=function f(h,i){i=i||document;g.parentNode(i,true,"querySelector","context");
g.selector(h,true,"querySelector");if(!i.querySelector){return b(h,i)}return i.querySelector(h)
}},{"./internal/validate":44,"./shims/querySelector":67}],66:[function(b,c,a){b("ac-polyfills/Array/prototype.slice");
var g=b("./internal/validate");var f=b("./shims/querySelectorAll");c.exports=function d(h,i){i=i||document;
g.parentNode(i,true,"querySelectorAll","context");g.selector(h,true,"querySelectorAll");
if(!i.querySelectorAll){return f(h,i)}return Array.prototype.slice.call(i.querySelectorAll(h))
}},{"./internal/validate":44,"./shims/querySelectorAll":68,"ac-polyfills/Array/prototype.slice":62}],67:[function(b,c,a){var d=b("./querySelectorAll");
c.exports=function f(h,i){var g=d(h,i);return g.length?g[0]:null}},{"./querySelectorAll":68}],68:[function(b,c,a){b("ac-polyfills/Array/prototype.forEach");
var g=b("../vendor/sizzle/sizzle");var h=b("../children");var f=b("ac-dom-nodes/isDocumentFragment");
c.exports=function d(i,k){var j;var l;if(f(k)){j=h(k);l=[];j.forEach(function(n){var m;
if(g.matchesSelector(n,i)){l.push(n)}m=g(i,n);if(m.length){l=l.concat(m)}});return l
}return g(i,k)}},{"../children":39,"../vendor/sizzle/sizzle":70,"ac-dom-nodes/isDocumentFragment":56,"ac-polyfills/Array/prototype.forEach":60}],69:[function(b,d,a){var c=b("./children");
var g=b("./internal/validate");d.exports=function f(j,h){var i=[];g.childNode(j,true,"siblings");
g.selector(h,false,"siblings");if(j.parentNode){i=c(j.parentNode,h);i=i.filter(function(k){return(k!==j)
})}return i}},{"./children":39,"./internal/validate":44}],70:[function(b,c,a){
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
}else{ad.Sizzle=ac}})(window)},{}],71:[function(b,c,a){c.exports.Easing=b("./ac-easing/Easing");
c.exports.Tween=b("./ac-easing/Tween")},{"./ac-easing/Easing":72,"./ac-easing/Tween":73}],72:[function(b,a,c){var i=b("./vendor/KeySpline");
var h=b("./vendor/EasingFunctions");var f='Easing function "%TYPE%" not recognized among the following: '+Object.keys(h).join(", ");
var k="Bezier curve expects exactly four (4) numbers. Given: ";var j="Step function expects a numeric value greater than zero. Given: ";
var d='Step function direction must be either "start" or "end" (default). Given: ';
var g={createPredefined:function(l){var m;if(l==="step-start"){m=g.createStep(1,"start")
}else{if(l==="step-end"){m=g.createStep(1,"end")}else{m=h[l]}}if(!m){throw new Error(f.replace("%TYPE%",l))
}return m},createBezier:function(m,o,l,n){var r=Array.prototype.slice.call(arguments);
var q;var p;p=r.every(function(s){return(typeof s==="number")});if(r.length!==4||!p){throw new TypeError(k+r)
}q=new i(m,o,l,n);return function(u,s,v,t){return q.get(u/t)*v+s}},createStep:function(l,m){m=m||"end";
if(typeof l!=="number"||l<1){throw new TypeError(j+l)}if(m!=="start"&&m!=="end"){throw new TypeError(d+m)
}return function(r,n,s,q){var p=s/l;var o=Math[(m==="start")?"floor":"ceil"](r/q*l);
return n+p*o}}};a.exports=g},{"./vendor/EasingFunctions":74,"./vendor/KeySpline":75}],73:[function(c,d,b){var g=c("./Easing");
var a="Easing option must be one of: String, Array[Number:4], { steps: Number }, or Function. Given: ";
var h=function(i){this._defaultProps(i);this.setEasing(this.easing)};h.defaults={from:0,to:1,duration:1,easing:"linear"};
var f=h.prototype;f._defaultProps=function(i){var j=h.defaults;i=i||{};for(var k in j){this[k]=(i[k]!=null)?i[k]:j[k]
}};f.setEasing=function(){var i=Array.prototype.slice.call(arguments);var j=typeof i[0];
var k;if(j==="string"){k=g.createPredefined(i[0])}else{if(Array.isArray(i[0])){k=g.createBezier(i[0])
}else{if(i.length===4){k=g.createBezier.apply(g,i)}else{if(j==="object"&&i[0].steps){k=g.createStep(i[0].steps,i[0].direction)
}else{if(j==="number"&&i.length<=2){k=g.createStep.apply(g,i)}else{if(j==="function"){k=i[0]
}else{throw new TypeError(a+i)}}}}}}return this._easingFunction=k};f.valueAtLocation=function(j){if(j<0||j>1){return null
}var i=this.duration*j;return this.valueAtTime(i)};f.valueAtPercent=function(i){if(i<0||i>100){return null
}return this.valueAtLocation(i/100)};f.valueAtTime=function(i){if(i<0||i>this.duration){return null
}return this._easingFunction(i,this.from,this.to-this.from,this.duration)};d.exports=h
},{"./Easing":72}],74:[function(c,f,b){var g={linear:function(j,h,k,i){return k*j/i+h
},easeInQuad:function(j,h,k,i){return k*(j/=i)*j+h},easeOutQuad:function(j,h,k,i){return -k*(j/=i)*(j-2)+h
},easeInOutQuad:function(j,h,k,i){if((j/=i/2)<1){return k/2*j*j+h}return -k/2*((--j)*(j-2)-1)+h
},easeInCubic:function(j,h,k,i){return k*(j/=i)*j*j+h},easeOutCubic:function(j,h,k,i){return k*((j=j/i-1)*j*j+1)+h
},easeInOutCubic:function(j,h,k,i){if((j/=i/2)<1){return k/2*j*j*j+h}return k/2*((j-=2)*j*j+2)+h
},easeInQuart:function(j,h,k,i){return k*(j/=i)*j*j*j+h},easeOutQuart:function(j,h,k,i){return -k*((j=j/i-1)*j*j*j-1)+h
},easeInOutQuart:function(j,h,k,i){if((j/=i/2)<1){return k/2*j*j*j*j+h}return -k/2*((j-=2)*j*j*j-2)+h
},easeInQuint:function(j,h,k,i){return k*(j/=i)*j*j*j*j+h},easeOutQuint:function(j,h,k,i){return k*((j=j/i-1)*j*j*j*j+1)+h
},easeInOutQuint:function(j,h,k,i){if((j/=i/2)<1){return k/2*j*j*j*j*j+h}return k/2*((j-=2)*j*j*j*j+2)+h
},easeInSine:function(j,h,k,i){return -k*Math.cos(j/i*(Math.PI/2))+k+h},easeOutSine:function(j,h,k,i){return k*Math.sin(j/i*(Math.PI/2))+h
},easeInOutSine:function(j,h,k,i){return -k/2*(Math.cos(Math.PI*j/i)-1)+h},easeInExpo:function(j,h,k,i){return(j==0)?h:k*Math.pow(2,10*(j/i-1))+h
},easeOutExpo:function(j,h,k,i){return(j==i)?h+k:k*(-Math.pow(2,-10*j/i)+1)+h},easeInOutExpo:function(j,h,k,i){if(j==0){return h
}if(j==i){return h+k}if((j/=i/2)<1){return k/2*Math.pow(2,10*(j-1))+h}return k/2*(-Math.pow(2,-10*--j)+2)+h
},easeInCirc:function(j,h,k,i){return -k*(Math.sqrt(1-(j/=i)*j)-1)+h},easeOutCirc:function(j,h,k,i){return k*Math.sqrt(1-(j=j/i-1)*j)+h
},easeInOutCirc:function(j,h,k,i){if((j/=i/2)<1){return -k/2*(Math.sqrt(1-j*j)-1)+h
}return k/2*(Math.sqrt(1-(j-=2)*j)+1)+h},easeInElastic:function(l,j,n,k){var h=1.70158;
var m=0;var i=n;if(l==0){return j}if((l/=k)==1){return j+n}if(!m){m=k*0.3}if(i<Math.abs(n)){i=n;
h=m/4}else{h=m/(2*Math.PI)*Math.asin(n/i)}return -(i*Math.pow(2,10*(l-=1))*Math.sin((l*k-h)*(2*Math.PI)/m))+j
},easeOutElastic:function(l,j,n,k){var h=1.70158;var m=0;var i=n;if(l==0){return j
}if((l/=k)==1){return j+n}if(!m){m=k*0.3}if(i<Math.abs(n)){i=n;h=m/4}else{h=m/(2*Math.PI)*Math.asin(n/i)
}return i*Math.pow(2,-10*l)*Math.sin((l*k-h)*(2*Math.PI)/m)+n+j},easeInOutElastic:function(l,j,n,k){var h=1.70158;
var m=0;var i=n;if(l==0){return j}if((l/=k/2)==2){return j+n}if(!m){m=k*(0.3*1.5)
}if(i<Math.abs(n)){i=n;h=m/4}else{h=m/(2*Math.PI)*Math.asin(n/i)}if(l<1){return -0.5*(i*Math.pow(2,10*(l-=1))*Math.sin((l*k-h)*(2*Math.PI)/m))+j
}return i*Math.pow(2,-10*(l-=1))*Math.sin((l*k-h)*(2*Math.PI)/m)*0.5+n+j},easeInBack:function(k,i,l,j,h){if(h==undefined){h=1.70158
}return l*(k/=j)*k*((h+1)*k-h)+i},easeOutBack:function(k,i,l,j,h){if(h==undefined){h=1.70158
}return l*((k=k/j-1)*k*((h+1)*k+h)+1)+i},easeInOutBack:function(k,i,l,j,h){if(h==undefined){h=1.70158
}if((k/=j/2)<1){return l/2*(k*k*(((h*=(1.525))+1)*k-h))+i}return l/2*((k-=2)*k*(((h*=(1.525))+1)*k+h)+2)+i
},easeInBounce:function(j,h,k,i){return k-g.easeOutBounce(i-j,0,k,i)+h},easeOutBounce:function(j,h,k,i){if((j/=i)<(1/2.75)){return k*(7.5625*j*j)+h
}else{if(j<(2/2.75)){return k*(7.5625*(j-=(1.5/2.75))*j+0.75)+h}else{if(j<(2.5/2.75)){return k*(7.5625*(j-=(2.25/2.75))*j+0.9375)+h
}else{return k*(7.5625*(j-=(2.625/2.75))*j+0.984375)+h}}}},easeInOutBounce:function(j,h,k,i){if(j<i/2){return g.easeInBounce(j*2,0,k,i)*0.5+h
}return g.easeOutBounce(j*2-i,0,k,i)*0.5+k*0.5+h}};var d;var a={ease:"easeInOutSine","ease-in":"easeInCubic","ease-out":"easeOutCubic","ease-in-out":"easeInOutCubic"};
for(d in a){g[d]=g[a[d]]}f.exports=g},{}],75:[function(b,c,a){c.exports=b(23)},{}],76:[function(b,c,a){var d=b("./ac-element-tracker/ElementTracker");
c.exports=new d();c.exports.ElementTracker=d},{"./ac-element-tracker/ElementTracker":77}],77:[function(c,b,g){var h;
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
}return o};b.exports=a},{"./TrackedElement":78,"ac-base":false,"ac-object":80,"window-delegate":601}],78:[function(b,c,a){var d;
var g=b("ac-dom-emitter").DOMEmitter;function f(h){if(h.nodeType&&h.nodeType>0){this.element=h
}else{throw new TypeError("TrackedElement: "+h+" is not a valid DOM element")}this.inView=false;
this.percentInView=0;this.pixelsInView=0;this.offsetTop=0;this.top=0;this.right=0;
this.bottom=0;this.left=0;this.width=0;this.height=0;g.call(this,h)}d=f.prototype=new g(null);
c.exports=f},{"ac-dom-emitter":35}],79:[function(i,c,x){var s=Object.prototype.toString;
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
}catch(z){return A}}},{}],80:[function(b,c,a){c.exports={clone:b("./ac-object/clone"),create:b("./ac-object/create"),defaults:b("./ac-object/defaults"),extend:b("./ac-object/extend"),getPrototypeOf:b("./ac-object/getPrototypeOf"),isDate:b("./ac-object/isDate"),isEmpty:b("./ac-object/isEmpty"),isRegExp:b("./ac-object/isRegExp"),toQueryParameters:b("./ac-object/toQueryParameters")}
},{"./ac-object/clone":81,"./ac-object/create":82,"./ac-object/defaults":83,"./ac-object/extend":84,"./ac-object/getPrototypeOf":85,"./ac-object/isDate":86,"./ac-object/isEmpty":87,"./ac-object/isRegExp":88,"./ac-object/toQueryParameters":89}],81:[function(b,c,a){var f=b("./extend");
c.exports=function d(g){return f({},g)}},{"./extend":84}],82:[function(b,d,a){var f=function(){};
d.exports=function c(g){if(arguments.length>1){throw new Error("Second argument not supported")
}if(g===null||typeof g!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(g)}else{f.prototype=g;
return new f()}}},{}],83:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"){throw new TypeError("defaults: must provide a defaults object")
}g=g||{};if(typeof g!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return f({},h,g)}},{"./extend":84}],84:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]}else{h=[].slice.call(arguments)
}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{}],85:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(i){if(Object.getPrototypeOf){return Object.getPrototypeOf(i)
}else{if(typeof i!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return i.__proto__}else{var g=i.constructor;
var h;if(a.call(i,"constructor")){h=g;if(!(delete i.constructor)){return null}g=i.constructor;
i.constructor=h}return g?g.prototype:null}}}}},{}],86:[function(b,d,a){d.exports=function c(f){return Object.prototype.toString.call(f)==="[object Date]"
}},{}],87:[function(c,d,b){var a=Object.prototype.hasOwnProperty;d.exports=function f(g){var h;
if(typeof g!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(h in g){if(a.call(g,h)){return false}}return true}},{}],88:[function(c,d,b){d.exports=function a(f){return window.RegExp?f instanceof RegExp:false
}},{}],89:[function(c,f,b){var a=c("qs");f.exports=function d(g){if(typeof g!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return a.stringify(g)}},{qs:79}],90:[function(b,d,a){var c=b("./ac-element-engagement/ElementEngagement");
d.exports=new c();d.exports.ElementEngagement=c},{"./ac-element-engagement/ElementEngagement":91}],91:[function(c,b,f){var g;
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
},this)};b.exports=a},{"ac-base":false,"ac-element-tracker":76,"ac-object":80}],92:[function(c,d,b){var g=c("./utils/addEventListener");
var a=c("./shared/getEventType");d.exports=function f(k,i,j,h){i=a(k,i);return g(k,i,j,h)
}},{"./shared/getEventType":97,"./utils/addEventListener":98}],93:[function(g,i,d){var h=g("./utils/eventTypeAvailable");
var b=g("./shared/camelCasedEventTypes");var f=g("./shared/prefixHelper");var c={};
i.exports=function a(l,k){var m;var n;var j;k=k||"div";l=l.toLowerCase();if(!(k in c)){c[k]={}
}n=c[k];if(l in n){return n[l]}if(h(l,k)){return n[l]=l}if(l in b){for(j=0;j<b[l].length;
j++){m=b[l][j];if(h(m.toLowerCase(),k)){return n[l]=m}}}for(j=0;j<f.evt.length;
j++){m=f.evt[j]+l;if(h(m,k)){f.reduce(j);return n[l]=m}}return n[l]=false}},{"./shared/camelCasedEventTypes":94,"./shared/prefixHelper":95,"./utils/eventTypeAvailable":96}],94:[function(b,c,a){c.exports={transitionend:["webkitTransitionEnd","MSTransitionEnd"],animationstart:["webkitAnimationStart","MSAnimationStart"],animationend:["webkitAnimationEnd","MSAnimationEnd"],animationiteration:["webkitAnimationIteration","MSAnimationIteration"],fullscreenchange:["MSFullscreenChange"],fullscreenerror:["MSFullscreenError"]}
},{}],95:[function(b,d,a){var i=["-webkit-","-moz-","-ms-"];var f=["Webkit","Moz","ms"];
var h=["webkit","moz","ms"];var c=function(){this.initialize()};var g=c.prototype;
g.initialize=function(){this.reduced=false;this.css=i;this.dom=f;this.evt=h};g.reduce=function(j){if(!this.reduced){this.reduced=true;
this.css=[this.css[j]];this.dom=[this.dom[j]];this.evt=[this.evt[j]]}};d.exports=new c()
},{}],96:[function(c,f,b){var a={window:window,document:document};f.exports=function d(i,g){var h;
i="on"+i;if(!(g in a)){a[g]=document.createElement(g)}h=a[g];if(i in h){return true
}if("setAttribute" in h){h.setAttribute(i,"return;");return(typeof h[i]==="function")
}return false}},{}],97:[function(c,f,b){var d=c("ac-prefixer/getEventType");f.exports=function a(j,i){var h;
var g;if("tagName" in j){h=j.tagName}else{if(j===window){h="window"}else{h="document"
}}g=d(i,h);if(g){return g}return i}},{"ac-prefixer/getEventType":93}],98:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.addEventListener){i.addEventListener(g,h,!!f)
}else{i.attachEvent("on"+g,h)}return i}},{}],99:[function(b,c,a){c.exports=b("./ac-fullscreen/fullscreen")
},{"./ac-fullscreen/fullscreen":105}],100:[function(b,c,a){c.exports={STANDARD:"standard",IOS:"ios"}
},{}],101:[function(f,c,i){var h=f("ac-dom-events/addEventListener");var m=f("ac-event-emitter").EventEmitter;
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
}};d.mode=b.STANDARD;c.exports=d},{"./../consts/modes":100,"./../events/types":104,"ac-dom-events/addEventListener":92}],102:[function(c,d,a){var b=c("./ios");
var f=c("./desktop");d.exports={create:function(){var g=f;if("webkitEnterFullscreen" in document.createElement("video")&&!("webkitRequestFullScreen" in document.createElement("div"))){g=b
}return g}}},{"./desktop":101,"./ios":103}],103:[function(f,d,h){var g=f("ac-dom-events/addEventListener");
var m=f("ac-event-emitter").EventEmitter;var a=f("./../events/types");var c=f("./../consts/modes");
var l;b();function b(){g(document,"webkitbeginfullscreen",k,true);g(document,"webkitendfullscreen",j,true)
}function k(n){i.trigger(a.ENTERFULLSCREEN,n)}function j(n){l=undefined;i.trigger(a.EXITFULLSCREEN,n)
}var i=new m();i.fullscreenEnabled=function(n){return !!(n.webkitSupportsFullscreen)
};i.fullscreenElement=function(){return l};i.exitFullscreen=function(n){if(n&&typeof n.webkitExitFullscreen==="function"){n.webkitExitFullscreen()
}};i.requestFullscreen=function(n){if(typeof n.webkitEnterFullscreen==="function"){n.webkitEnterFullscreen()
}};i.mode=c.IOS;d.exports=i},{"./../consts/modes":100,"./../events/types":104,"ac-dom-events/addEventListener":92}],104:[function(b,c,a){c.exports={ENTERFULLSCREEN:"enterfullscreen",EXITFULLSCREEN:"exitfullscreen"}
},{}],105:[function(c,b,d){var j=c("ac-event-emitter").EventEmitter;var h=c("./delegate/factory");
var a="Error: Element missing. ac-fullscreen requires an element to be specified";
var g=new j();var f=h.create();f.propagateTo(g);function i(){throw new Error(a)
}g.requestFullscreen=function(k){if(!k){i()}return f.requestFullscreen(k)};g.fullscreenEnabled=function(k){if(!k){i()
}return f.fullscreenEnabled(k)};g.fullscreenElement=function(){return f.fullscreenElement()
};g.exitFullscreen=function(k){if(!k){i()}return f.exitFullscreen(k)};g.getMode=function(){return f.mode
};b.exports=g},{"./delegate/factory":102}],106:[function(b,c,a){c.exports.WindowDelegate=b("./window-delegate/WindowDelegate");
c.exports.windowEmitter=b("./window-delegate/windowEmitter")},{"./window-delegate/WindowDelegate":107,"./window-delegate/windowEmitter":108}],107:[function(c,f,a){var g;
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
}else{if(j){this.trigger("scrollStop")}}};f.exports=new d()},{"./windowEmitter":108}],108:[function(b,c,a){var d=b("ac-dom-emitter").DOMEmitter;
c.exports=new d(window)},{"ac-dom-emitter":35}],109:[function(b,c,a){arguments[4][76][0].apply(a,arguments)
},{"./ac-element-tracker/ElementTracker":110}],110:[function(c,b,g){var h;var f=c("ac-object");
var i=c("ac-base").Element;var k=c("ac-base").Array;var m=c("window-delegate").WindowDelegate;
var j=c("./TrackedElement");var d={autoStart:false};function a(o,n){this.options=f.clone(d);
this.options=typeof n==="object"?f.extend(this.options,n):this.options;this.windowDelegate=m;
this.tracking=false;this.elements=[];if(o&&(Array.isArray(o)||this._isNodeList(o)||i.isElement(o))){this.addElements(o)
}if(this.options.autoStart===true){this.start()}}h=a.prototype;var l=/^\[object (HTMLCollection|NodeList|Object)\]$/;
h._isNodeList=function(n){if(!n){return false}if(typeof n.length!=="number"){return false
}if(typeof n[0]==="object"&&(!n[0]||!n[0].nodeType)){return false}return l.test(Object.prototype.toString.call(n))
};h._registerElements=function(n){n=[].concat(n);n.forEach(function(p){if(this._elementInDOM(p)){var o=new j(p);
o.offsetTop=o.element.offsetTop;this.elements.push(o)}},this)};h._registerTrackedElementObjects=function(o){var n=[].concat(o);
n.forEach(function(p){if(this._elementInDOM(p.element)){p.offsetTop=p.element.offsetTop;
this.elements.push(p)}},this)};h._elementInDOM=function(p){var o=false;var n=document.getElementsByTagName("body")[0];
if(i.isElement(p)&&n.contains(p)){o=true}return o};h._onScroll=function(){this.elements.forEach(function(n){this.refreshElementState(n)
},this)};h._onResize=function(){this.elements.forEach(function(n){this.refreshElementState(n)
},this)};h._elementPercentInView=function(n){return n.pixelsInView/n.height};h._elementPixelsInView=function(o){var r=0;
var q=o.top;var p=o.bottom;var n=this.windowDelegate.innerHeight;if(q<=0&&p>=n){r=n
}else{if(q>=0&&q<n&&p>n){r=n-q}else{if(q<0&&(p<n&&p>=0)){r=o.bottom}else{if(q>=0&&p<=n){r=o.height
}}}}return r};h._isElementOrObject=function(n){return n&&(i.isElement(n)||(typeof n==="object"&&!Array.isArray(n)&&!this._isNodeList(n)))
};h._ifInView=function(n,p,o){if(!p){n.trigger("enterview",n)}if(!o&&n.percentInView>n.inViewThreshold){n.inThreshold=true;
n.trigger("thresholdenter",n)}};h._ifAlreadyInView=function(n,o){if(!n.inView){n.trigger("exitview",n)
}if(o&&n.percentInView<n.inViewThreshold){n.inThreshold=false;n.trigger("thresholdexit",n)
}};h.addElements=function(n){n=this._isNodeList(n)?k.toArray(n):[].concat(n);n.forEach(function(o){this.addElement(o)
},this)};h.addElement=function(o){var n;if(this._isElementOrObject(o)){n=new j(o);
this._registerTrackedElementObjects(n)}else{throw new TypeError("ElementTracker.addElement: "+o+"must be a valid Element or Object")
}return n};h.removeElement=function(p){var o=[];var n;this.elements.forEach(function(q,r){if(q===p||q.element===p){o.push(r)
}});n=this.elements.filter(function(r,q){return o.indexOf(q)<0?true:false});this.elements=n
};h.stop=function(){if(this.tracking===true){this.tracking=false;this.windowDelegate.off("scroll",this._onScroll);
this.windowDelegate.off("resize",this._onResize)}};h.start=function(){if(this.tracking===false){this.tracking=true;
this.windowDelegate.on("scroll",this._onScroll,this);this.windowDelegate.on("resize",this._onResize,this);
this.refreshAllElementStates()}};h.refreshAllElementStates=function(){this.elements.forEach(function(n){this.refreshElementState(n)
},this)};h.refreshElementState=function(n){var p=i.getBoundingBox(n.element);var q=n.inView;
var o=n.inThreshold;n=f.extend(n,p);n.pixelsInView=this._elementPixelsInView(n);
n.percentInView=this._elementPercentInView(n);n.inView=n.pixelsInView>0;if(n.inView){this._ifInView(n,q,o)
}if(q){this._ifAlreadyInView(n,o)}return n};b.exports=a},{"./TrackedElement":111,"ac-base":false,"ac-object":203,"window-delegate":106}],111:[function(b,c,a){var d;
var h=b("ac-dom-emitter").DOMEmitter;var g={inViewThreshold:0.75};function f(j){var i={};
var k;if(j.nodeType&&j.nodeType>0){i.element=j}else{i=j}for(k in g){this[k]=g[k]
}for(k in i){this[k]=i[k]}this.inView=false;this.inThreshold=false;this.percentInView=0;
this.pixelsInView=0;this.offsetTop=0;this.top=0;this.right=0;this.bottom=0;this.left=0;
this.width=0;this.height=0;h.call(this,i.element)}d=f.prototype=new h(null);c.exports=f
},{"ac-dom-emitter":35}],112:[function(c,d,b){var a=c("./ac-keyboard/Keyboard");
d.exports=new a();d.exports.Keyboard=a;d.exports.keys=c("./ac-keyboard/keymap")
},{"./ac-keyboard/Keyboard":114,"./ac-keyboard/keymap":115}],113:[function(d,f,b){var c=d("ac-base").Object;
var a=["keyLocation"];function g(h){this.originalEvent=h;for(var i in h){if(typeof h[i]!=="function"&&a.indexOf(i)===-1){this[i]=h[i]
}}this.location=(this.originalEvent.keyLocation===undefined)?this.originalEvent.location:this.originalEvent.keyLocation
}g.prototype={preventDefault:function(){if(typeof this.originalEvent.preventDefault!=="function"){this.originalEvent.returnValue=false;
return}return this.originalEvent.preventDefault()},stopPropagation:function(){return this.originalEvent.stopPropagation()
}};f.exports=g},{"ac-base":false}],114:[function(f,c,h){var j=f("ac-base").Element;
var g=f("./KeyEvent");var n=f("ac-event-emitter").EventEmitter;var k=f("./keymap");
var l=0;var d=1;var a=2;var m=3;var i;function b(){this._keysDown=[];this._keyDownEmitter=new n();
this._keyUpEmitter=new n();j.addEventListener(document,"keydown",this._DOMKeyDown.bind(this),true);
j.addEventListener(document,"keyup",this._DOMKeyUp.bind(this),true);this._listening=[]
}i=b.prototype;i._castEventNameNumberToString=function(o){if(typeof o==="number"){return o.toString()
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
}};i._normalizeKeyboardEvent=function(o){return new g(o)};c.exports=b},{"./KeyEvent":113,"./keymap":115,"ac-base":false}],115:[function(b,c,a){c.exports={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,COMMAND:91,CAPSLOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_ZERO:96,NUMPAD_ONE:97,NUMPAD_TWO:98,NUMPAD_THREE:99,NUMPAD_FOUR:100,NUMPAD_FIVE:101,NUMPAD_SIX:102,NUMPAD_SEVEN:103,NUMPAD_EIGHT:104,NUMPAD_NINE:105,NUMPAD_ASTERISK:106,NUMPAD_PLUS:107,NUMPAD_DASH:109,NUMPAD_DOT:110,NUMPAD_SLASH:111,NUMPAD_EQUALS:187,TICK:192,LEFT_BRACKET:219,RIGHT_BRACKET:221,BACKSLASH:220,SEMICOLON:186,APOSTRAPHE:222,SPACEBAR:32,CLEAR:12,COMMA:188,DOT:190,SLASH:191}
},{}],116:[function(b,c,a){c.exports=b(92)},{"./shared/getEventType":126,"./utils/addEventListener":130}],117:[function(d,f,c){var a=d("./utils/dispatchEvent");
var b=d("./shared/getEventType");f.exports=function g(j,i,h){i=b(j,i);return a(j,i,h)
}},{"./shared/getEventType":126,"./utils/dispatchEvent":131}],118:[function(b,c,a){c.exports={addEventListener:b("./addEventListener"),dispatchEvent:b("./dispatchEvent"),preventDefault:b("./preventDefault"),removeEventListener:b("./removeEventListener"),stop:b("./stop"),stopPropagation:b("./stopPropagation"),target:b("./target")}
},{"./addEventListener":116,"./dispatchEvent":117,"./preventDefault":124,"./removeEventListener":125,"./stop":127,"./stopPropagation":128,"./target":129}],119:[function(b,c,a){if(document.createEvent){try{new window.CustomEvent("click")
}catch(d){window.CustomEvent=(function(){function f(h,i){i=i||{bubbles:false,cancelable:false,detail:undefined};
var g=document.createEvent("CustomEvent");g.initCustomEvent(h,i.bubbles,i.cancelable,i.detail);
return g}f.prototype=window.Event.prototype;return f}())}}},{}],120:[function(b,c,a){c.exports=b(93)
},{"./shared/camelCasedEventTypes":121,"./shared/prefixHelper":122,"./utils/eventTypeAvailable":123}],121:[function(b,c,a){c.exports=b(94)
},{}],122:[function(b,c,a){c.exports=b(95)},{}],123:[function(b,c,a){c.exports=b(96)
},{}],124:[function(c,d,a){d.exports=function b(f){f=f||window.event;if(f.preventDefault){f.preventDefault()
}else{f.returnValue=false}}},{}],125:[function(d,f,c){var b=d("./utils/removeEventListener");
var a=d("./shared/getEventType");f.exports=function g(k,i,j,h){i=a(k,i);return b(k,i,j,h)
}},{"./shared/getEventType":126,"./utils/removeEventListener":132}],126:[function(b,c,a){c.exports=b(97)
},{"ac-prefixer/getEventType":120}],127:[function(d,g,b){var a=d("./stopPropagation");
var c=d("./preventDefault");g.exports=function f(h){h=h||window.event;a(h);c(h);
h.stopped=true;h.returnValue=false}},{"./preventDefault":124,"./stopPropagation":128}],128:[function(c,d,b){d.exports=function a(f){f=f||window.event;
if(f.stopPropagation){f.stopPropagation()}else{f.cancelBubble=true}}},{}],129:[function(b,c,a){c.exports=function d(f){f=f||window.event;
return(typeof f.target!=="undefined")?f.target:f.srcElement}},{}],130:[function(b,c,a){c.exports=b(98)
},{}],131:[function(b,c,a){b("ac-polyfills/CustomEvent");c.exports=function d(i,h,g){var f;
if(i.dispatchEvent){if(g){f=new CustomEvent(h,g)}else{f=new CustomEvent(h)}i.dispatchEvent(f)
}else{f=document.createEventObject();if(g&&"detail" in g){f.detail=g.detail}i.fireEvent("on"+h,f)
}return i}},{"ac-polyfills/CustomEvent":119}],132:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.removeEventListener){i.removeEventListener(g,h,!!f)
}else{i.detachEvent("on"+g,h)}return i}},{}],133:[function(c,d,b){c("ac-polyfills/Array/isArray");
var h=c("./extend");var a=Object.prototype.hasOwnProperty;var f=function(i,j){var k;
for(k in j){if(a.call(j,k)){if(j[k]===null){i[k]=null}else{if(typeof j[k]==="object"){i[k]=Array.isArray(j[k])?[]:{};
f(i[k],j[k])}else{i[k]=j[k]}}}}return i};d.exports=function g(j,i){if(i){return f({},j)
}return h({},j)}},{"./extend":136,"ac-polyfills/Array/isArray":142}],134:[function(b,c,a){c.exports=b(82)
},{}],135:[function(b,c,a){arguments[4][83][0].apply(a,arguments)},{"./extend":136}],136:[function(c,d,b){c("ac-polyfills/Array/prototype.forEach");
var a=Object.prototype.hasOwnProperty;d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]
}else{h=[].slice.call(arguments)}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{"ac-polyfills/Array/prototype.forEach":143}],137:[function(b,c,a){c.exports=b(85)
},{}],138:[function(b,c,a){c.exports={clone:b("./clone"),create:b("./create"),defaults:b("./defaults"),extend:b("./extend"),getPrototypeOf:b("./getPrototypeOf"),isDate:b("./isDate"),isEmpty:b("./isEmpty"),isRegExp:b("./isRegExp"),toQueryParameters:b("./toQueryParameters")}
},{"./clone":133,"./create":134,"./defaults":135,"./extend":136,"./getPrototypeOf":137,"./isDate":139,"./isEmpty":140,"./isRegExp":141,"./toQueryParameters":145}],139:[function(b,c,a){c.exports=b(86)
},{}],140:[function(b,c,a){c.exports=b(87)},{}],141:[function(b,c,a){c.exports=b(88)
},{}],142:[function(b,c,a){if(!Array.isArray){Array.isArray=function(d){return Object.prototype.toString.call(d)==="[object Array]"
}}},{}],143:[function(b,c,a){c.exports=b(60)},{}],144:[function(b,c,a){c.exports=b(79)
},{}],145:[function(b,c,a){c.exports=b(89)},{qs:144}],146:[function(b,c,a){a.ScrollView=b("./ac-scrollview/ScrollView");
a.MouseWheel=b("./ac-scrollview/input/MouseWheel");a.ScrollBounds=b("./ac-scrollview/ScrollBounds");
a.Y_AXIS="y";a.X_AXIS="x"},{"./ac-scrollview/ScrollBounds":148,"./ac-scrollview/ScrollView":149,"./ac-scrollview/input/MouseWheel":152}],147:[function(c,d,a){var b=c("ac-object");
function f(g,h){this._parent=g;this._axis=h;this._inputs=[];this._startTouchMove=null;
this._shouldTouchEnd=false;this._checkToPreventDefault=false}f.prototype={_calculateTouchAngles:function(){var n={x:0,y:0};
var i=this._inputs[this._inputs.length-1];var k=this._inputs[0];var g=i.x-k.x;var m=i.y-k.y;
var l=Math.sqrt(g*g+m*m);if(l===0){return false}var j=Math.asin(m/l);var h=Math.acos(g/l);
n.x=j*(180/Math.PI);n.y=h*(180/Math.PI);n.y-=90;return n},inputStart:function(g,j,h,i){this._inputs=[{x:g,y:j}];
this._startTouchMove={x:g,y:j,timeStamp:h,e:i};this._shouldTouchEnd=false;this._checkToPreventDefault=true
},inputMove:function(g,n,j,k){this._inputs[1]={x:g,y:n};var h=45;var i=-h;var m=this._calculateTouchAngles();
var l=m[this._axis];if(l<=h&&l>=i||this._checkToPreventDefault===false){this._shouldTouchEnd=true;
this._checkToPreventDefault=false;if(this._startTouchMove!==null){this._parent.inputStart(this._startTouchMove.x,this._startTouchMove.y,this._startTouchMove.timeStamp,this._startTouchMove.e);
this._startTouchMove=null}k.preventDefault();this._parent.inputMove.apply(this._parent,arguments)
}},inputEnd:function(g,h){if(this._shouldTouchEnd===true){this._checkToPreventDefault=true;
this._parent.inputEnd.apply(this._parent,arguments)}},on:function(){return this._parent.on.apply(this._parent,arguments)
},off:function(){return this._parent.off.apply(this._parent,arguments)},trigger:function(){return this._parent.trigger.apply(this._parent,arguments)
},once:function(){return this._parent.once.apply(this._parent,arguments)}};d.exports=f
},{"ac-object":138}],148:[function(d,f,b){var c=d("ac-object");function a(k,j,h,g){var i={maxPerSwipe:1,axis:"x"};
this.options=c.extend(i,g||{});this._grid=h;this._scrollInertia=k;this._scrollView=this._scrollInertia.getScrollView();
this._runningIndex=j;this._axisString=(this.options.axis==="x")?"left":"top"}a.prototype={calculateTargetIndex:function(){var g=(this._axisString==="left")?this._scrollView.getTouchContainerWidth():this._scrollView.getTouchContainerHeight();
var i=Math.round(this._scrollInertia.calculateFinalInertiaPosition()[this._axisString]/g);
var h=this._runningIndex;var j=(i-h);if(j>0&&i>h+this.options.maxPerSwipe){i=h+this.options.maxPerSwipe
}else{if(j<0&&i<h-this.options.maxPerSwipe){i=h-this.options.maxPerSwipe}}if(j>0&&i>this._grid[this._axisString].length-1){i=this._grid[this._axisString].length-1
}else{if(j<0&&i<0){i=0}}return i},calculateFuturePositions:function(){var g=this.calculateTargetIndex();
return{left:g*this._scrollView.getTouchContainerWidth(),top:g*this._scrollView.getTouchContainerHeight()}
}};f.exports=a},{"ac-object":138}],149:[function(c,b,h){var d=c("ac-object");var n=c("ac-event-emitter").EventEmitter;
var m=c("./TouchInertia");var l=c("./input/MouseWheel");var k=c("./input/Touch");
var j=c("./input/Input");var i=c("./InputPreventDefault");var a=c("./model/Scroll");
var f={startBounceDistance:0,endBounceDistance:0,axis:"y",touch:true,mouseWheel:false,mouse:false,preventDefault:true};
function g(p,o){this.options=d.extend(d.clone(f),o||{});this._element=p;this._touchContainerWidth=(typeof this.options.containerWidth==="number")?this.options.containerWidth:p.offsetWidth;
this._touchContainerHeight=(this.options.containerHeight||p.offsetHeight);this._innerScrollWidth=(this.options.innerWidth||p.offsetWidth)+this.options.startBounceDistance+this.options.endBounceDistance;
this._innerScrollHeight=(this.options.innerHeight||p.offsetHeight)+this.options.startBounceDistance+this.options.endBounceDistance;
this._scroll=new a();this._scrollPositions=[];this._inputNormalize=new j(this._scroll);
this._inputNormalize=new i(this._inputNormalize,this.options.axis);this._inputNormalize.on("input_start",this.inputStart,this);
this._inputNormalize.on("input_move",this.inputMove,this);this._inputNormalize.on("input_end",this.inputEnd,this);
if(this.options.touch===true){this._touch=new k(this._inputNormalize,p);this._touch.bindDOMEvents()
}if(this.options.mouseWheel===true){this._mouseWheel=new l(this._inputNormalize,p);
this._mouseWheel.bindDOMEvents()}}g.prototype={};g.prototype.__playInertia=function(p){var o=p.calculateInertiaPositions();
var q=function(s){var r=o[s];if(r===undefined||this._down===true){return}this._scroll.scrollTo(r.left,r.top);
window.requestAnimationFrame(function(){q(s+1)})}.bind(this);q(0)};g.prototype.getTouchContainerHeight=function(){return this._touchContainerHeight
};g.prototype.getTouchContainerWidth=function(){return this._touchContainerWidth
};g.prototype.setInnerWidth=function(o){this._innerScrollWidth=o;return this};g.prototype.setInnerHeight=function(o){this._innerScrollHeight=o;
return this};g.prototype.getInnerScrollWidth=function(){return this._innerScrollWidth
};g.prototype.getInnerScrollHeight=function(){return this._innerScrollHeight};g.prototype.getScrollYDistance=function(){var o=this.getInnerScrollHeight()-this.getTouchContainerHeight()-(this.options.startBounceDistance+this.options.endBounceDistance);
if(o<0){o=0}return o};g.prototype.getScrollXDistance=function(){var o=this.getInnerScrollWidth()-this.getTouchContainerWidth()-(this.options.startBounceDistance+this.options.endBounceDistance);
if(o<0){o=0}return o};g.prototype.inputStart=function(o,r,q,p){this._down=true;
this.trigger("scrollStart",{originalEvent:p,timeStamp:q})};g.prototype.inputMove=function(p){var o=p.scrollLeft;
var q=p.scrollTop;if(p.originalEvent.type==="mousewheel"){if(q>this.getScrollYDistance()){q=this.getScrollYDistance()
}else{if(q<0){q=0}}if(o>this.getScrollXDistance()){o=this.getScrollXDistance()}else{if(o<0){o=0
}}}this._scrollPositions.push({left:o,top:q,timeStamp:p.timeStamp});this._scroll.scrollTo(o,q)
};g.prototype.inputEnd=function(q){var u=true;var p=this._scrollPositions;var v=[];
var s=this._scrollPositions[this._scrollPositions.length-1];var r=q.timeStamp;if(!s){return
}for(var t=0;t<p.length;t+=1){v[v.length]=p[t].left;v[v.length]=p[t].top;v[v.length]=p[t].timeStamp
}var o=new m(this,{left:this._scroll.scrollLeft,top:this._scroll.scrollTop},v,s.timeStamp,r);
this._down=false;this.trigger("inertiaStart",{originalEvent:q,originalEventName:"touchend",inertia:o,position:{left:this._scroll.scrollLeft,top:this._scroll.scrollTop},velocity:o.calculateVelocity(),preventDefault:function(){u=false
}});if(u===true){this.__playInertia(o)}this._scrollPositions=[]};g.prototype.once=function(){return this._scroll.once.apply(this._scroll,arguments)
};g.prototype.on=function(){return this._scroll.on.apply(this._scroll,arguments)
};g.prototype.off=function(){return this._scroll.off.apply(this._scroll,arguments)
};g.prototype.trigger=function(){return this._scroll.trigger.apply(this._scroll,arguments)
};g.prototype.scrollTo=function(p,o){return this._scroll.scrollTo(p,o)};b.exports=g
},{"./InputPreventDefault":147,"./TouchInertia":150,"./input/Input":151,"./input/MouseWheel":152,"./input/Touch":153,"./model/Scroll":154,"ac-object":138}],150:[function(d,f,b){var c=d("ac-object");
function a(i,l,g,k,h,j){var m={frictionCoefficient:0.95,minFrictionVelocity:0.1};
this.options=c.extend(m,j||{});this._scrollView=i;this._currentPosition=l;this.__scrollLeft=this._currentPosition.left;
this.__scrollTop=this._currentPosition.top;this._positions=g;this._lastTouchMove=k;
this._timeStamp=h;this._frameRate=(1000/60)}a.prototype={__stepThroughFriction:function(m,l){var n=m+this._frictionVelocityX;
var k=l+this._frictionVelocityY;if(Math.abs(this._frictionVelocityX)<=this.options.minFrictionVelocity){n=m
}if(Math.abs(this._frictionVelocityY)<=this.options.minFrictionVelocity){k=l}this._frictionVelocityX*=this.options.frictionCoefficient;
this._frictionVelocityY*=this.options.frictionCoefficient;var h=0;var g=0;var j=0.03;
var i=0.08;if(n<this._minScrollLeft){h=this._minScrollLeft-n}else{if(n>this._maxScrollLeft){h=this._maxScrollLeft-n
}}if(k<this._minScrollTop){g=this._minScrollTop-k}else{if(k>this._maxScrollTop){g=this._maxScrollTop-k
}}if(h!==0){if(h*this._frictionVelocityX<=0){this._frictionVelocityX+=h*j}else{this._frictionVelocityX=h*i
}}if(g!==0){if(g*this._frictionVelocityY<=0){this._frictionVelocityY+=g*j}else{this._frictionVelocityY=g*i
}}return{left:n,top:k}},getScrollView:function(){return this._scrollView},calculateInertiaDuration:function(){var g=this.calculateInertiaPositions();
return g.length*this._frameRate},calculateVelocity:function(){var m=this._positions;
var h=m.length-1;var n=h;for(var l=h;l>0&&m[l]>(this._lastTouchMove-100);l-=3){n=l
}var p=m[h]-m[n];var g=this.__scrollLeft-(m[n-2]);var o=this.__scrollTop-(m[n-1]);
var j=g/p*this._frameRate;var k=o/p*this._frameRate;if((this._timeStamp-this._lastTouchMove)>=100){j=0;
k=0}if(isNaN(j)){j=0}if(isNaN(k)){k=0}return{left:j,top:k}},calculateInertiaPositions:function(){this._minScrollLeft=0;
this._minScrollTop=0;this._maxScrollLeft=this._scrollView.getScrollXDistance();
this._maxScrollTop=this._scrollView.getScrollYDistance();var g=this._positions;
var m=[];var j=this.calculateVelocity();this._frictionVelocityX=j.left;this._frictionVelocityY=j.top;
var l=this.__scrollLeft;var k=this.__scrollTop;var h;var i=0;if(Math.abs(this._frictionVelocityX)<this.options.minFrictionVelocity&&Math.abs(this._frictionVelocityY)<this.options.minFrictionVelocity){h=this.__stepThroughFriction(l,k)
}while((Math.abs(this._frictionVelocityX)>=this.options.minFrictionVelocity||Math.abs(this._frictionVelocityY)>=this.options.minFrictionVelocity)){h=this.__stepThroughFriction(l,k);
l=h.left;k=h.top;m.push(h)}if(l<this._minScrollLeft){l=this._minScrollLeft}else{if(l>this._maxScrollLeft){l=this._maxScrollLeft
}}if(k<this._minScrollTop){k=this._minScrollTop}else{if(k>this._maxScrollTop){k=this._maxScrollTop
}}m[m.length-1]={left:l,top:k};return m},calculateFinalInertiaPosition:function(){var g=this.calculateInertiaPositions();
if(g.length===0){return{left:this.__scrollLeft,top:this.__scrollTop}}return g[g.length-1]
}};f.exports=a},{"ac-object":138}],151:[function(b,c,a){var f=b("ac-event-emitter").EventEmitter;
function g(h){this._startingInputPosition=null;this._lastInputPosition=null;this._inputPositions=[];
this._scroll=h}var d=g.prototype=new f();d.inputStart=function(h,l,j,i){var k={x:h,y:l,timeStamp:j};
this._inputPositions.push(k);this._startingInputPosition=k;this.trigger("input_start",{timeStamp:j,originalEvent:i})
};d.inputMove=function(h,m,k,i){var l={x:h,y:m,timeStamp:k};this._inputPositions.push(l);
this._lastInputPosition=l;var j=this.getScrollValues();this.trigger("input_move",{scrollLeft:j.x,scrollTop:j.y,timeStamp:k,originalEvent:i})
};d.inputEnd=function(i,h){this.trigger("input_end",{lastInputPosition:this._lastInputPosition,inputPositions:this._inputPositions.slice(),timeStamp:i,originalEvent:h});
this._inputPositions=[];this._lastInputPosition=null};d.getScrollValues=function(){var j=this._inputPositions[this._inputPositions.length-2];
var i=(j.x-this._lastInputPosition.x)+this._scroll.scrollLeft;var h=(j.y-this._lastInputPosition.y)+this._scroll.scrollTop;
return{x:i,y:h}};c.exports=g},{}],152:[function(d,f,b){var g=d("ac-dom-events");
var c=d("ac-object");function a(h,i){this._inputController=h;this._element=i;this._scrollTop=0;
this._scrollLeft=0;this._timeout=null;this._hasStarted=false;this._boundMouseWheelComplete=this.mouseWheelComplete.bind(this);
this._lastEvent=null;this._velocities=[]}a.prototype={mouseWheelComplete:function(){this._scrollTop=0;
this._scrollLeft=0;this._hasStarted=false;this._inputController.inputEnd(new Date().getTime(),this._lastEvent);
this._lastEvent=null},onMouseWheel:function(k){var i;var h;var j;if(this._hasStarted===false){this._inputController.inputStart(this._scrollLeft,this._scrollTop,k.timeStamp,k);
this._hasStarted=true}i=this._scrollTop+k.wheelDeltaY;h=this._scrollLeft+k.wheelDeltaX;
this._lastEvent=c.clone(k);this._scrollTop=i;this._scrollLeft=h;this._inputController.inputMove(this._scrollLeft,this._scrollTop,k.timeStamp,k);
window.clearTimeout(this._timeout);this._timeout=window.setTimeout(this._boundMouseWheelComplete,100)
},bindDOMEvents:function(){g.addEventListener(this._element,"mousewheel",this.onMouseWheel.bind(this))
}};f.exports=a},{"ac-dom-events":118,"ac-object":138}],153:[function(c,d,a){var f=c("ac-dom-events");
function b(g,h){this._input=g;this._element=h}b.prototype={bindDOMEvents:function(){var g=this._input;
var h=this._element;f.addEventListener(h,"touchstart",function(i){if(i.touches&&i.touches[0]&&i.touches[0].target&&i.touches[0].target.tagName.match(/input|textarea|select/i)){return
}g.inputStart(i.touches[0].pageX,i.touches[0].pageY,i.timeStamp,i)},false);f.addEventListener(h,"touchmove",function(i){g.inputMove(i.touches[0].pageX,i.touches[0].pageY,i.timeStamp,i)
},false);f.addEventListener(h,"touchend",function(i){g.inputEnd(i.timeStamp,i)},false);
f.addEventListener(h,"touchcancel",function(i){g.inputEnd(i.timeStamp,i)},false)
}};d.exports=b},{"ac-dom-events":118}],154:[function(b,c,a){var f=b("ac-event-emitter").EventEmitter;
function g(){this.scrollLeft=0;this.scrollTop=0}var d=g.prototype=new f();d.scrollTo=function(i,h){if(i===this.scrollLeft&&h===this.scrollTop){return
}this.scrollLeft=i;this.scrollTop=h;this.trigger("scroll",{scrollTop:h,scrollLeft:i})
};c.exports=g},{}],155:[function(b,c,a){c.exports=b(1)},{"./ac-style-renderer/InlineStyleRenderer":156,"./ac-style-renderer/LogRenderer":157}],156:[function(b,c,a){c.exports=b(2)
},{}],157:[function(b,c,a){c.exports=b(3)},{}],158:[function(b,c,a){a.Gallery=b("./ac-gallery/Gallery");
a.builder=b("./ac-gallery/builder");a.Trigger=b("./ac-gallery/controller/Trigger");
a.MediaSegue=b("./ac-gallery/segue/MediaSegue");a.MediaRenderer=b("./ac-gallery/segue/media/MediaRenderer");
a.AnimationSequenceSegue=b("./ac-gallery/segue/AnimationSequence");a.CSSTransitionSegue=b("./ac-gallery/segue/CSSTransition");
a.FadeInCSSTransition=b("./ac-gallery/segue/FadeInCSSTransition");a.fadeInKeyframesGenerator=b("./ac-gallery/keyframe/fadeInKeyframesGenerator");
a.crossFadeKeyframesGenerator=b("./ac-gallery/keyframe/crossFadeKeyframesGenerator");
a.showHideKeyframesGenerator=b("./ac-gallery/keyframe/showHideKeyframesGenerator");
a.horizontalSliderKeyframesGenerator=b("./ac-gallery/keyframe/horizontalSliderKeyframesGenerator");
a.Touch=b("./ac-gallery/controller/Touch")},{"./ac-gallery/Gallery":159,"./ac-gallery/builder":160,"./ac-gallery/controller/Touch":161,"./ac-gallery/controller/Trigger":162,"./ac-gallery/keyframe/crossFadeKeyframesGenerator":170,"./ac-gallery/keyframe/fadeInKeyframesGenerator":171,"./ac-gallery/keyframe/horizontalSliderKeyframesGenerator":172,"./ac-gallery/keyframe/showHideKeyframesGenerator":173,"./ac-gallery/segue/AnimationSequence":177,"./ac-gallery/segue/CSSTransition":178,"./ac-gallery/segue/FadeInCSSTransition":179,"./ac-gallery/segue/MediaSegue":180,"./ac-gallery/segue/media/MediaRenderer":183}],159:[function(b,a,g){var j=b("ac-deferred").Deferred;
var l=b("ac-event-emitter").EventEmitter;var c=b("ac-base").Object;var f=b("./generator/Timeline");
var k=b("./segue/Segue");var d={transitionDuration:0.4,transitionEasing:"linear",locks:true,endless:false};
function i(q,m){var p;m=m||{};if(!q){throw new TypeError("Could not create gallery, no keyframes were specified")
}this._keyboard=null;p=c.clone(d);this.setOptions(c.extend(p,m),{replace:true});
if(this.options.keyboard){this.setKeyboard(this.options.keyboard)}this._keyframes=q;
this._selected=0;this._locked=false;var o=this.getTransitionDuration();var n=k.create({duration:0});
this._keyframes[0].draw()}var h=i.prototype=new l();h.setOptions=function(n,m){m=m||{};
if(m.replace===true){this.options=n}else{this.options=c.extend(this.options,n)}return this
};h.getSelectedKeyframe=function(){return this._keyframes[this._selected]};h.getSelected=function(){return this.getSelectedKeyframe.apply(this,arguments)
};h.getKeyframes=function(){return this._keyframes};h.getKeyframeIndex=function(m){return this._keyframes.indexOf(m)
};h.addKeyframe=function(n,m){m=m||{};if(typeof m.index!=="number"){this._keyframes.push(n)
}else{this._keyframes.splice(m.index,0,n)}this._trigger("keyframeAdd",{keyframe:n,index:this.getKeyframeIndex(n)},m);
return this};h.removeKeyframe=function(n,m){var o;m=m||{};if(this.getSelected()===n){throw new Error("Could not remove keyframe, it is the current selected Keyframe instance.")
}o=this.getKeyframeIndex(n);this._keyframes.splice(o,1);this._trigger("keyframeRemove",{keyframe:n,index:o},m);
return this};h.containsKeyframe=function(m){return(this._keyframes.indexOf(m)!==-1)
};h.numKeyframes=function(){return this._keyframes.length};h.eachKeyframe=function(n,m){this._keyframes.forEach(function(){n.apply(m,arguments)
});return this};h.getNext=function(){var m=this.getSelectedIndex()+1;var n;if(this.isEndless()===true&&m===this.numKeyframes()){m=0
}n=this._keyframes[m];if(n===undefined){n=null}return n};h.getPrevious=function(){var m=this.getSelectedIndex()-1;
var n;if(this.isEndless()===true&&m<0){m=this.numKeyframes()-1}n=this._keyframes[m];
if(n===undefined){n=null}return n};h.getSelectedIndex=function(){return this._selected
};h.showNext=function(m){var p=new j();var o=this.getNext();var n=p.promise();if(o!==null){n=this.show(o,m)
}else{p.reject()}return n};h.showPrevious=function(m){var p=new j();var n=this.getPrevious();
var o=p.promise();if(n!==null){o=this.show(n,m)}else{p.reject()}return o};h.showFirst=function(m){var n=this.getFirst();
return this.show(n,m)};h.showLast=function(m){return this.show(this.getLast(),m)
};h.getLastIndex=function(){return this._keyframes.length-1};h.getLast=function(){return this._keyframes[this.getLastIndex()]
};h._trigger=function(m,o,n){if(n.silent===true){return}o.target=this;this.trigger(m,o)
};h.getTransitionDuration=function(){return this.options.transitionDuration};h.setTransitionDuration=function(o,n){var m=this.options.transitionDuration;
this.options.transitionDuration=o;this._trigger("transition-duration-change",{previous:m,duration:o},n||{})
};h.setTransitionEasing=function(o,m){var n=this.options.transitionEasing;this.options.transitionEasing=o;
this._trigger("transition-easing-change",{previous:n,easing:o},m||{})};h.toTimeline=function(o,n){var m=new f(this,o,n);
return m.getTimeline()};h.getFirst=function(){return this._keyframes[0]};h.getLocked=function(){return this._locked
};h.isLocked=function(){return this.getLocked()};h.setLocked=function(m){this._locked=m;
return this._locked};h.getEngaged=function(){return this._engaged};h.setEngaged=function(m){this._engaged=m;
return this._engaged};h.isEndless=function(){return this.options.endless};h.show=function(q,o){var t=new j();
var n;var m;var p;var r=k.create({duration:this.options.transitionDuration,easing:this.options.transitionEasing});
var s=t.promise();o=o||{};if(this.options.locks===true&&this.isLocked()===true){t.reject();
return s}this._locked=true;n=this._keyframes[this._selected];if(typeof q==="number"){m=this._keyframes[q]
}else{if(typeof q==="string"){m=this._keyframes.filter(function(u){return(u.id===q)
})[0]}else{m=q}}if(m===null){throw new TypeError('Could not show Keyframe with supplied query. Query "'+q+'" returned no items.')
}else{if(m===n){t.resolve();this._locked=false;return s}}p=c.extend({outgoing:n,incoming:m},o);
this._trigger("willShow",p,o);if(o.useTransition===false){s=s.then(this._afterShow.bind(this,n,m,p,o));
t.resolve();return s}return r.play(n,m).then(this._afterShow.bind(this,n,m,p,o))
};h.hasKeyboard=function(){return this._keyboard!==null};h.getKeyboard=function(){return this._keyboard
};h.setKeyboard=function(m){if(this._keyboard!==null){this._keyboard.removeKeyDown();
this._keyboard.removeKeyUp()}this._keyboard=m;return this};h.keyboardAddKeyDown=function(){this._keyboard.addKeyDown.apply(this._keyboard,arguments);
return this};h.keyboardAddKeyUp=function(){this._keyboard.addKeyUp.apply(this._keyboard,arguments);
return this};h.keyboardRemoveKeyDown=function(){this._keyboard.removeKeyDown.apply(this._keyboard,arguments);
return this};h.keyboardRemoveKeyUp=function(){this._keyboard.removeKeyUp.apply(this._keyboard,arguments);
return this};h.showPrevious=function(m){var p=new j();var n=this.getPrevious();
var o=p.promise();if(n!==null){o=this.show(n,m)}else{p.reject()}return o};h._afterShow=function(o,m,p,n){this._selected=this._keyframes.indexOf(m);
this._locked=false;return this._trigger("didShow",p,n)};a.exports=i},{"./generator/Timeline":163,"./segue/Segue":181,"ac-base":false}],160:[function(j,b,y){var z=j("ac-base").Object;
var x=j("ac-base").Element;var l=j("ac-base").Environment;var s=j("ac-keyboard");
var g=j("ac-keyframe").Keyframe;var k;try{k=j("ac-analytics").observer.Gallery}catch(t){}var p=j("./Gallery");
var d=j("./controller/Trigger");var h=j("./observer/TriggerPainter");var i=j("./observer/PreviousNextTriggerPainter");
var a=j("./observer/ElementTracker");var w=j("./keyboard/defaultMap");var r=j("./keyframe/crossFadeKeyframesGenerator");
var m=j("./keyframe/showHideKeyframesGenerator");var f=j("./touch/builder");var c="Could not create gallery: there are both custom keyframes and keyframe elements specified";
var q="Could not create gallery: there are no keyframes or elements to generate keyframes from";
var o="Could not create gallery: there is no touch element, but requested touches to be turned on";
var v="Could not create gallery: triggerSelector should be a string";var u={locks:true,shouldUseKeyboard:true,keyboardMap:w};
b.exports=function n(J){J=J||{};J=z.extend(z.clone(u),J);var D=J.keyframes||[];
var G=J.keyframeElements||[];var L=J.shouldUseKeyboard||true;var E,K,C,A,H,B,I,F;
if(J.keyframes&&J.keyframeElements){throw new Error(c)}if(!D||D.length===0){if(G.length===0){throw new Error(q)
}else{G=Array.prototype.slice.call(G);if(l.Feature.cssPropertyAvailable("opacity")&&l.Feature.cssPropertyAvailable("transition")){D=r(G)
}else{D=m(G)}}}J.keyboard=J.keyboard||new s.Keyboard();if(J.shouldUseKeyboard!==true){J.keyboard=undefined
}K=new p(D,J);if(K.hasKeyboard()){K.keyboardAddKeyDown(J.keyboardMap,K)}if(x.isElement(J.engagementElement)){B=new a(K,J.engagementElement)
}if(J.triggerSelector){if(typeof J.triggerSelector!=="string"){throw new Error(v)
}else{C=new d({gallery:K,el:J.triggerSelector});A=(J.activeTriggerClassname)?new h(K,J.triggerSelector,J.activeTriggerClassname):new h(K,J.triggerSelector);
K.on("willShow",A._paint,A);if(!K.isEndless()){H=new i(A);K.on("willShow",H._paint,H)
}}}if(J.touch){if(l.Feature.touchAvailable()&&J.touch!==false){if(!x.isElement(J.touchElement)){throw new Error(o)
}else{I=f(J.touchElement,K,J)}}}if(typeof k==="function"){F=new k(K,((typeof J.analytics==="object")?J.analytics:{}))
}E={gallery:K,elementTracker:B,trigger:C,triggerPainter:A,touchController:I,analytics:F};
return E}},{"./Gallery":159,"./controller/Trigger":162,"./keyboard/defaultMap":169,"./keyframe/crossFadeKeyframesGenerator":170,"./keyframe/showHideKeyframesGenerator":173,"./observer/ElementTracker":174,"./observer/PreviousNextTriggerPainter":175,"./observer/TriggerPainter":176,"./touch/builder":186,"ac-base":false,"ac-keyboard":112,"ac-keyframe":198}],161:[function(f,c,i){var g=f("ac-base").Object;
var h=f("ac-scrollview").ScrollView;var l=f("./../touch/TimelineRenderer");var a=f("ac-animation-sequencer").BasicPlayer;
var m=f("ac-animation-sequencer").TweenClip;var j=f("ac-base").EasingFunctions;
var k=f("ac-scrollview").ScrollBounds;var b=f("./../touch/GalleryGrid");function d(p,n,o){var q={axis:"x",scrollVelocity:1};
this._element=p;this.options=g.extend(q,o||{});this._gallery=n;this._axisString=(this.options.axis==="x")?"left":"top";
if(!this._gallery){throw new TypeError('Could not instantiate Touch Controller. "'+this._gallery+'" is not a valid gallery')
}this._player=this.options.player||new a(n.toTimeline(this.options.bounceOutKeyframe,this.options.bounceInKeyframe));
this._player.setCurrentTime(this._gallery.getTransitionDuration());this._inertiaPlayer=null;
this._enRoute=false;this._runningIndex=this._gallery.getSelectedIndex();this._scrollView=this.options.scrollView||this.__buildScrollView();
this._scrollRenderer=this.options.scrollRenderer||this.__buildScrollRenderer();
this._scrollRenderer.render(this._scrollView.scrollLeft);this._gallery.on("didShow",this.onDidShow,this);
this._scrollView.on("scrollStart",this.onScrollStart,this);this._scrollView.on("inertiaStart",this.onInertiaStart,this);
this._scrollView.on("scroll",this.onScroll,this)}d.prototype={__generateEasingFunction:function(n){return function(q,o,p,r){return j.easeOutBack(q,o,p,r,n)
}},__buildScrollView:function(){var p=this._element.offsetWidth/this.options.scrollVelocity;
var n=this._element.offsetHeight/this.options.scrollVelocity;var o=g.extend(g.clone(this.options),{innerWidth:p*this._gallery.numKeyframes(),innerHeight:n*this._gallery.numKeyframes(),startBounceDistance:p,endBounceDistance:p,touchContainerWidth:p,touchContainerHeight:n});
return new h(this._element,o)},__buildScrollRenderer:function(){var n=g.extend(g.clone(this.options),{bounceDuration:this._gallery.getTransitionDuration()});
return new l(this._player,this._scrollView,n)},getAxis:function(){return this.options.axis||"x"
},getScrollView:function(){return this._scrollView},onDidShow:function(){var n=this._gallery.getSelectedIndex();
this._runningIndex=n;this._scrollView.scrollTo(n*this._scrollView.getTouchContainerWidth(),n*this._scrollView.getTouchContainerHeight())
},onScrollStart:function(){if(this._inertiaPlayer&&typeof this._inertiaPlayer.pause==="function"){this._inertiaPlayer.pause()
}this._scrollStartTimeout=window.setTimeout(function(){this._gallery.trigger("touchStart")
}.bind(this),100)},onScroll:function(p){var o=p.scrollLeft;var n=p.scrollTop;this._scrollRenderer.render(o,n);
this._gallery.trigger("scroll",{scrollLeft:o,scrollTop:n})},onInertiaStart:function(v){v.preventDefault();
this._gallery.trigger("touchEnd");var u=v.inertia;var o=new b(this._gallery,this._scrollView);
var p=new k(u,this._runningIndex,o.getGrid(),this.options);var t=u.calculateFinalInertiaPosition();
var r=p.calculateTargetIndex();var x=0.4;var s=p.calculateFuturePositions().left;
var A=3;var n=Math.abs(p.calculateFuturePositions().left-v.position.left);if(n!==0){x*=(Math.abs(n)/this._scrollView.getTouchContainerWidth())
}if((r-this._runningIndex)!==0){x=x/Math.abs(r-this._runningIndex)}var z=(Math.abs(n)/this._scrollView.getTouchContainerWidth());
var q=0;if(x<0.32&&x>0.15){x+=0.2;q=1.4}else{if(x<=0.15){x+=0.3;q=1.7}}if(q<0){q=0
}else{if(q>A){q=A}}var w=Math.abs(v.velocity.top)-3;if(w<0){w=0}else{if(w>A){w=A
}}var y=new m(x,[{property:"scrollLeft",from:v.position.left,to:p.calculateFuturePositions().left,easing:this.__generateEasingFunction(q)},{property:"scrollTop",from:v.position.top,to:p.calculateFuturePositions().top,easing:this.__generateEasingFunction(w)}]);
if(this._inertiaPlayer){this._inertiaPlayer.off("ended")}this._inertiaPlayer=new a(y);
y.on("tween_update",function(B){this._scrollView.scrollTo(B.scrollLeft,B.scrollTop)
},this);this._inertiaPlayer.play();this._inertiaPlayer.on("ended",function(){this._enRoute=false;
this._gallery.show(r,{useTransition:false,interactionEvent:v.originalEvent})},this);
this._runningIndex=r;this._enRoute=true}};c.exports=d},{"./../touch/GalleryGrid":184,"./../touch/TimelineRenderer":185,"ac-animation-sequencer":4,"ac-base":false,"ac-scrollview":146}],162:[function(c,d,b){var f=c("ac-base").Element;
var h=c("ac-base").Event;function a(i){i=i||{};this._el=i.el||"";this._id=i.id||"href";
this._method=i.method||"data-method";this.setGallery(i.gallery)}var g=a.prototype;
g.setGallery=function(i){this._gallery=i;if(this._gallery!==undefined){this._addListener()
}};g.getGallery=function(){return this._gallery};g.setEl=function(i){this._el=i;
this._removeListener();if(this._gallery!==undefined){this._addListener()}};g.getEl=function(){return this._el
};g.destroy=function(){this._removeListener();this.func=function(){}};g._addListener=function(){if(this._el!==""){this.func=this._onClickTrigger.bind(this);
f.addEventDelegate(document,"click",this._el,this.func)}};g._removeListener=function(){if(this.func){f.removeEventDelegate(document,"click",this._el,this.func);
this.func=null}};g._onClickTrigger=function(i){h.stop(i.originalEvent);this._click(i.currentTarget,i.originalEvent)
};g._click=function(j,i){var l={interactionEvent:i};if(j.getAttribute(this._method)){var m=j.getAttribute(this._method);
if(typeof this._gallery[m]==="function"){this._gallery[m].call(this._gallery,l)
}else{throw new Error(m+" is not a valid method to call")}}else{if(j.getAttribute(this._id)){var k=j.getAttribute(this._id).split("#")[1];
if(k!==""){this._gallery.show(k,l)}else{throw new Error("Trigger has no ID or method")
}}else{throw new Error("Trigger has no ID or method")}}};d.exports=a},{"ac-base":false}],163:[function(c,b,g){var i=c("ac-animation-sequencer").Timeline;
var h=c("ac-keyframe").Interpolation;var j=c("./../segue/media/MediaClip");var f=c("ac-animation-sequencer").TimedClip;
var a=c("ac-animation-sequencer").CompositeClip;i.clipTypes.Media=j;function d(k,m,l){this._gallery=k;
this._bounceOutKeyframe=m;this._bounceInKeyframe=l}d.prototype={getGallery:function(){return this._gallery
},getTimeline:function(){var m;var k=[];var o=this._gallery.getKeyframes().slice(0);
if(this._bounceInKeyframe){o.unshift(this._bounceInKeyframe)}if(this._bounceOutKeyframe){o.push(this._bounceOutKeyframe)
}var n=new h();n.setDuration(this._gallery.getTransitionDuration());for(var l=1;
l<o.length;l+=1){n.setStartKeyframe(o[l-1]).setEndKeyframe(o[l]);m=n.getClip();
m=new f(m,{startDelay:(l-1)*this._gallery.getTransitionDuration(),fill:"none"});
k.push(m)}return new a(k)}};b.exports=d},{"./../segue/media/MediaClip":182,"ac-animation-sequencer":4,"ac-keyframe":198}],164:[function(f,g,c){var h=f("./../helper/isTransformProperty");
var b=f("./../helper/camelCaseToHyphen");var a=f("./../helper/canTransitionStyle");
var d={zIndex:true,display:true,visibility:true,position:true};g.exports=function(q,l,n,m){var p=[];
var i=false;var k=n;var o=l;m=(typeof m==="number")?" "+m+"s":"";var j=m;q.forEach(function(r){var s=r.property;
if(d[s]===true){return}var u=(typeof r.easing==="string")?r.easing:n;var v=(typeof r.duration==="number")?r.duration:l;
var t=(typeof r.delay==="number")?" "+r.delay+"s":m;if(!a(s)){return}if(!h(s)){p.push(b(s)+" "+v+"s "+u+t)
}else{o=v;k=u;j=t;i=true}});if(i===true){p.push("-webkit-transform "+l+"s "+k+j)
}return p.join(",")}},{"./../helper/camelCaseToHyphen":165,"./../helper/canTransitionStyle":166,"./../helper/isTransformProperty":167}],165:[function(b,c,a){c.exports=function(d){return d.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],166:[function(b,c,a){var d=["display"];c.exports=function(f){return(d.indexOf(f)===-1)
}},{}],167:[function(b,d,a){var c=["matrix","translate","translateX","translateY","scale","scaleX","scaleY","rotate","skewX","skewY","matrix3d","translate3d","translateZ","scale3d","scaleZ","rotate3d","rotateX","rotateY","rotateZ","perspective"];
d.exports=function(f){return(c.indexOf(f)!==-1)}},{}],168:[function(f,g,a){var d=f("ac-deferred").Deferred;
var c=f("./buildTransitionString");var i=f("ac-style-renderer").InlineStyleRenderer;
var h=f("ac-base").Element;var b=f("ac-base").Object;g.exports=function(n,s,m,p,o){var j=new d();
var k=c(s,m,p,o);var q=[];var l;var r=function(t){if(t.target===n){h.removeVendorPrefixEventListener(n,"transitionEnd",r);
h.setVendorPrefixStyle(n,"transition","none");window.requestAnimationFrame(j.resolve.bind(j))
}};if(k!==""&&m!==0){h.addVendorPrefixEventListener(n,"transitionEnd",r);l=h.getVendorPrefixStyle(n,"transition")+",";
if(!/none/.test(l)&&l!==","){k=l+k}h.setVendorPrefixStyle(n,"transition",k)}else{window.requestAnimationFrame(j.resolve.bind(j))
}s.forEach(function(t){var u=b.clone(t);u.prop=u.property;if(u.units){u.value+=u.units
}q.push(u)});i.render(n,q);return j.promise()}},{"./buildTransitionString":164,"ac-base":false,"ac-style-renderer":155}],169:[function(b,c,a){var d=b("ac-keyboard").keys;
var f={};f[d.ARROW_LEFT]=function(g){g.preventDefault();if(this.getEngaged()){this.showPrevious({interactionEvent:g})
}};f[d.ARROW_RIGHT]=function(g){g.preventDefault();if(this.getEngaged()){this.showNext({interactionEvent:g})
}};c.exports=f},{"ac-keyboard":112}],170:[function(c,d,a){var f=c("ac-keyframe").Keyframe;
var b=c("ac-base").Object;var g={zIndex:1};d.exports=function(j,h){var i=[];h=b.extend(b.clone(g),h||{});
j.forEach(function(k,m){var l=[];j.forEach(function(n,o){l.push({element:n,props:[{property:"opacity",value:(o===m)?1:0},{property:"z-index",value:(o===m)?(h.zIndex+1):h.zIndex}]})
});i.push(new f(k.id,l))});return i}},{"ac-base":false,"ac-keyframe":198}],171:[function(c,d,a){var g=c("ac-keyframe").Keyframe;
var f=c("./../segue/FadeInCSSTransition");var h=c("./../segue/CSSTransition");var b=c("ac-base").Object;
var i={zIndex:1};d.exports=function(l,j){var k=[];j=b.extend(b.clone(i),j||{});
l.forEach(function(m,o){var n=[];l.forEach(function(p,q){n.push({SegueType:f,element:p,props:[{property:"opacity",value:(q===o)?"1":"0"},{property:"zIndex",value:(q===o)?(j.zIndex+1):j.zIndex}]})
});k.push(new g(m.id,n))});return k}},{"./../segue/CSSTransition":178,"./../segue/FadeInCSSTransition":179,"ac-base":false,"ac-keyframe":198}],172:[function(c,d,b){var h=c("ac-base").Environment.Feature;
var f=c("ac-keyframe").Keyframe;var g=c("./../segue/CSSTransition");var a=c("./../segue/AnimationSequence");
d.exports=function(o){var l=(h.cssPropertyAvailable("transform"))?"translateX":"left";
var m=(h.cssPropertyAvailable("transition"))?g:a;var j={keyframes:[],bounceInKeyframe:null,bounceOutKeyframe:null};
var n=o[0].offsetWidth;o.forEach(function(p,r){var q=[];o.forEach(function(s,t){q.push({element:s,SegueType:m,props:[{property:l,value:-(n*r),units:"px"}]})
});j.keyframes.push(new f(p.id,q))});var i=[];o.forEach(function(p,q){i.push({element:p,props:[{property:l,value:n,units:"px"}]})
});j.bounceInKeyframe=new f("bounceIn",i);var k=[];o.forEach(function(p,q){k.push({element:p,props:[{property:l,value:-(n*(o.length)),units:"px"}]})
});j.bounceOutKeyframe=new f("bounceOut",k);return j}},{"./../segue/AnimationSequence":177,"./../segue/CSSTransition":178,"ac-base":false,"ac-keyframe":198}],173:[function(b,a,d){var h=b("ac-keyframe").Keyframe;
var f=b("ac-animation-sequencer").ElementClip;var j=b("ac-animation-sequencer").BaseClip;
var g=b("ac-animation-sequencer").Timeline;var c=b("ac-base").Object;var i=function(){f.apply(this,arguments)
};i.prototype=new j();c.extend(i.prototype,f.prototype);i.prototype.update=function(l){if(this.props.length<1){return
}var k=this.props.map(function(o){var m=o.units;var n=o.to;n=(m?(n+m):n);return{prop:o.property,value:n}
});this._renderer.render(this.el,k)};i.create=function(k){return new i(k)};g.clipTypes.Gallery_ShowHide=i;
a.exports=function(l){var k=[];l.forEach(function(m,o){var n=[];l.forEach(function(p,q){n.push({element:p,clipType:"Gallery_ShowHide",props:[{property:"display",value:(q===o)?"block":"none"}]})
});k.push(new h(m.id,n))});return k}},{"ac-animation-sequencer":4,"ac-base":false,"ac-keyframe":198}],174:[function(b,c,a){var d=b("ac-base").Element;
var f=b("ac-element-tracker");function g(h,i){if(!d.isElement(i)){return}this._gallery=h;
this._elementTracker=f;var j=this._elementTracker.addElement({element:i,inViewThreshold:0.33});
this._gallery.setEngaged(false);j.on("thresholdenter",this._onEnterWithinThreshold,this);
j.on("thresholdexit",this._onExitWithinThreshold,this);this._elementTracker.start();
return this}g.prototype._onEnterWithinThreshold=function(h){this._gallery.setEngaged(true)
};g.prototype._onExitWithinThreshold=function(h){this._gallery.setEngaged(false)
};c.exports=g},{"ac-base":false,"ac-element-tracker":109}],175:[function(c,d,b){var f=c("ac-base").Element;
function a(h){if(h.getGallery()&&h.getGallery().isEndless()){return}this.triggerPainter=h;
var i={incoming:h.getGallery().getSelected()};this._paint(i)}var g=a.prototype;
g._paint=function(j){var m=j.incoming.id;var n=this.triggerPainter;var i=n.getGallery();
var o=n.getTriggerSelector();var l=f.selectAll(o+"[data-method]");var k=f.selectAll(o+'[data-method="showPrevious"]');
var h=f.selectAll(o+'[data-method="showNext"]');if(l){n._unpaintTriggers(l,"disabled");
if(m===i.getFirst().id){n._paintTriggers(k,"disabled")}else{if(m===i.getLast().id){n._paintTriggers(h,"disabled")
}}}};d.exports=a},{"ac-base":false}],176:[function(c,d,b){var f=c("ac-base").Element;
function a(i,j,k){this.setGallery(i);this.setTriggerSelector(j);k=k||"current";
this.setActiveTriggerClassname(k);var h={incoming:this._gallery.getSelected()};
this._paint(h)}var g=a.prototype;g.setGallery=function(h){this._gallery=h};g.getGallery=function(){return this._gallery
};g.setTriggerSelector=function(h){this._triggerSelector=h};g.getTriggerSelector=function(){return this._triggerSelector
};g.setActiveTriggerClassname=function(h){this._activeTriggerClassname=h};g.getActiveTriggerClassname=function(){return this._activeTriggerClassname
};g._paint=function(i){var k=i.incoming.id;var m=this.getTriggerSelector();var h=this.getActiveTriggerClassname();
var j=f.selectAll(m+"."+h);var l=f.selectAll(m+'[href="#'+k+'"]');this._unpaintTriggers(j,h);
this._paintTriggers(l,h)};g._paintTriggers=function(m,l){var k,h,j;for(k=0,h=m.length;
k<h;k+=1){j=m[k];f.addClassName(j,l)}};g._unpaintTriggers=function(m,l){var k,h,j;
for(k=0,h=m.length;k<h;k+=1){j=m[k];f.removeClassName(j,l)}};d.exports=a},{"ac-base":false}],177:[function(d,f,b){var h=d("ac-animation-sequencer").Timeline;
var a=d("ac-animation-sequencer").BasicPlayer;var c=d("ac-deferred").Deferred;var g=d("ac-keyframe").Interpolation;
function i(k,j,l,m){this._from=k;this._to=j;this._duration=l;this._easing=m}i.prototype={animate:function(){var m=new c();
var n=this._easing;var j=new g();j.setDuration(this._duration).setStartKeyframe(this._from).setEndKeyframe(this._to);
var l=j.getClip();var k=new a(l);k.once("ended",m.resolve,m);k.play();return m.promise()
}};i.create=function(j){return new i(j.from,j.to,j.duration,j.easing)};f.exports=i
},{"ac-animation-sequencer":4,"ac-keyframe":198}],178:[function(c,d,b){var g=c("./../helper/playCSSTransition");
var a=c("ac-deferred");function f(h,i,j,k){this._toKeyframe=h;this._fromKeyframe=i;
this._duration=j;this._easing=k}f.prototype={animate:function(){var i=this._duration;
var j=this._easing;var h=this._toKeyframe.getStyles().map(function(k){return g(k.element,k.props,i,j)
});return a.all(h)}};f.create=function(h){return new f(h.to,h.from,h.duration,h.easing)
};d.exports=f},{"./../helper/playCSSTransition":168}],179:[function(c,b,d){var h=c("./../helper/playCSSTransition");
var f=c("ac-deferred");var g=c("ac-keyframe").Keyframe;var a=c("ac-style-renderer").InlineStyleRenderer;
function i(l){var k={prop:l.property,value:l.value,units:l.units};return k}function j(k,l,m,n){this._toKeyframe=k;
this._fromKeyframe=l;this._duration=m;this._easing=n;this._beforeStyles=[];this._afterStyles=[]
}j.prototype={_renderBeforeStyles:function(){this._beforeStyles.forEach(function(k){a.render(k.element,k.props.map(i))
})},_renderAfterStyles:function(){this._afterStyles.forEach(function(k){a.render(k.element,k.props.map(i))
})},_processIncomingStyle:function(o){var m;var q=this._toKeyframe.findStyle(o.element,"zIndex");
var p=this._fromKeyframe;var n=this._beforeStyles;var k=this._afterStyles;var l={element:o.element,props:[]};
o.props.forEach(function(r){if(r.property==="opacity"){m=p.findStyle(o.element,r.property).value;
if(parseFloat(m)<parseFloat(r.value)){l.props.push(r);if(q){n.push({element:o.element,props:[q]})
}}else{k.push({element:o.element,props:[r]});if(q){k[k.length-1].props.push(q)}}}else{l.props.push(r)
}});return l},animate:function(){var m=this._duration;var p=this._easing;var o=this._fromKeyframe;
var n=this._toKeyframe;var l=this._toKeyframe.getStyles().map(this._processIncomingStyle.bind(this));
this._renderBeforeStyles();var k=l.map(function(q){return h(q.element,q.props,m,p)
});return f.all(k).then(this._renderAfterStyles.bind(this))}};j.create=function(k){return new j(k.to,k.from,k.duration,k.easing)
};b.exports=j},{"./../helper/playCSSTransition":168,"ac-keyframe":198,"ac-style-renderer":155}],180:[function(c,d,b){var a=c("ac-deferred");
var f=c("ac-animation-sequencer").Pause;var h=c("ac-animation-sequencer").ReversibleVideo;
function g(k,j,i){this._from=k;this._to=j;this._duration=i}g.prototype={animate:function(){var i=[];
var j=this._duration;var k=this._from;this._to.getStyles().forEach(function(l){l.props.forEach(function(s){var n;
var r;var m;var p;var o;var q;if(s.property==="time"){r=new a.Deferred();p=k.findStyle(l.element,s.property);
o=(p.value<s.value)?1:-1;n=new h(l.element);if(s.value!==0){m=new f(n,[0,s.value]);
m._monitor._init();m.once("pauseenter",function(){m=undefined;r.resolve()})}else{if(s.value===0){q=function(){if(l.element.currentTime===0){r.resolve()
}l.element.removeEventListener("timeupdate",q)};l.element.addEventListener("timeupdate",q)
}else{if(s.value===this.element.duration){q=function(){if(l.element.currentTime===this.element.duration){r.resolve()
}l.element.removeEventListener("timeupdate",q)};l.element.addEventListener("timeupdate",q)
}}}n.playbackRate=(Math.abs(p.value-s.value)/j)*o;n.play();i.push(r.promise())}})
});return a.all(i)}};g.create=function(i){return new g(i.from,i.to,i.duration,i.easing)
};d.exports=g},{"ac-animation-sequencer":4}],181:[function(c,b,d){var a=c("./CSSTransition");
var k=c("./AnimationSequence");var j=c("./../helper/playCSSTransition");var f=c("ac-deferred");
var h=f.Deferred;var g=c("ac-keyframe").Keyframe;function i(l,m){this._duration=l;
this._easing=m||"linear"}i.prototype={_determineSegueType:function(m){var l;if(m.SegueType!==undefined){l=m.SegueType
}else{if(typeof m.clipType!=="undefined"&&m.clipType!=="Element"){l=k}else{l=a}}return l
},_sortPropertiesBySegueType:function(m){var n=[];function l(o){for(var p=0;p<n.length;
p+=1){if(n[p].Type===o){return n[p]}}}m.getStyles().forEach(function(p){var q=this._determineSegueType(p);
var o=l(p.SegueType);if(!o){o={Type:q,properties:[]};n.push(o)}o.properties.push({clipType:p.clipType,element:p.element,props:p.props})
}.bind(this));return n},_transition:function(s,n){var p=[];var l;var m=this._duration;
var o=this._easing;if(this._duration===0){return n.draw()}var q=(m===0)?n.clone():s.diff(n);
var r=this._sortPropertiesBySegueType(q);var t=this._sortPropertiesBySegueType(n.diff(s));
r.forEach(function(w,u){var y=new g("to",w.properties);var x=new g("from",t[u].properties);
var v=w.Type.create({duration:m,easing:o,to:y,from:x});p.push(v.animate())});return f.all(p)
},getDuration:function(){return this._duration},setDuration:function(l){this._duration=l;
return this},getEasing:function(){return this._easing},setEasing:function(l){this._easing=l;
return this},play:function(m,l){return this._transition(m,l)}};i.create=function(l){return new i(l.duration,l.easing,l)
};b.exports=i},{"./../helper/playCSSTransition":168,"./AnimationSequence":177,"./CSSTransition":178,"ac-keyframe":198}],182:[function(f,g,c){var a=f("ac-animation-sequencer").TweenClip;
var i=f("./MediaRenderer");var d=f("ac-base").Object;function b(){a.apply(this,arguments)
}var h=b.prototype=new a();b.create=function(j){j=j||{};if(!j.element){throw new TypeError("MediaClip could not be created: "+j.element+" is not a valid element")
}j.renderer=new i(j.element);return new b(j)};g.exports=b},{"./MediaRenderer":183,"ac-animation-sequencer":4,"ac-base":false}],183:[function(b,c,a){function f(g){this._element=g
}var d=f.prototype;d.render=function(h,g){g.forEach(function(i){if(i.prop==="time"){if(h.currentTime!==i.value){h.currentTime=i.value
}}})};c.exports=f},{}],184:[function(c,d,b){function a(f,g){this._gallery=f;this._scrollView=g
}a.prototype={getGrid:function(){var g={left:[],top:[]};for(var f=0;f<this._gallery.numKeyframes();
f+=1){g.left.push(this._scrollView.getTouchContainerWidth()*f);g.top.push(this._scrollView.getTouchContainerHeight()*f)
}return g}};d.exports=a},{}],185:[function(c,f,a){var b=c("ac-base").Object;var g={axis:"x",bounceDuration:0};
function d(i,j,h){this.options=b.extend(g,h||{});this._player=i;this._touchScrollBounds=j
}d.prototype={_calculateScrollPercentage:function(i,h){return{left:i/this._touchScrollBounds.getScrollXDistance(),top:h/this._touchScrollBounds.getScrollYDistance()}
},calculateCurrentTime:function(k,j){var h=this._calculateScrollPercentage(k,j);
var l=(this.options.axis==="x")?"left":"top";var i=(this._player.getDuration()-(this.options.bounceDuration*2))*h[l];
return this.options.bounceDuration+i},render:function(i,h){this._player.setCurrentTime(this.calculateCurrentTime(i,h));
return this}};f.exports=d},{"ac-base":false}],186:[function(b,c,a){var d=b("ac-base").Element;
var f=b("./../controller/Touch");c.exports=function g(k,i,j){j=j||{};var h=new f(k,i,j);
return h}},{"./../controller/Touch":161,"ac-base":false}],187:[function(b,c,a){c.exports=b(79)
},{}],188:[function(b,c,a){c.exports=b(80)},{"./ac-object/clone":189,"./ac-object/create":190,"./ac-object/defaults":191,"./ac-object/extend":192,"./ac-object/getPrototypeOf":193,"./ac-object/isDate":194,"./ac-object/isEmpty":195,"./ac-object/isRegExp":196,"./ac-object/toQueryParameters":197}],189:[function(b,c,a){c.exports=b(81)
},{"./extend":192}],190:[function(b,c,a){c.exports=b(82)},{}],191:[function(b,c,a){c.exports=b(83)
},{"./extend":192}],192:[function(b,c,a){c.exports=b(84)},{}],193:[function(b,c,a){c.exports=b(85)
},{}],194:[function(b,c,a){c.exports=b(86)},{}],195:[function(b,c,a){c.exports=b(87)
},{}],196:[function(b,c,a){c.exports=b(88)},{}],197:[function(b,c,a){c.exports=b(89)
},{qs:187}],198:[function(b,c,a){c.exports={Keyframe:b("./ac-keyframe/Keyframe"),Interpolation:b("./ac-keyframe/Interpolation")}
},{"./ac-keyframe/Interpolation":199,"./ac-keyframe/Keyframe":200}],199:[function(b,c,a){var f=b("ac-animation-sequencer").Timeline;
function d(){this._start=null;this._end=null;this._duration=null}d.prototype={_mergeToClip:function(){var i=this._start;
var j=this._end;var g=this._duration;var h=function(l){var k={element:l.element,clip:l.clipType||"Element",duration:g,props:[]};
l.props.forEach(function(o){var n={property:o.property,from:o.value,to:o.value,easing:o.easing||"linear"};
if(o.units){n.units=o.units}var m=i.findStyle(l.element,o.property);if(m){n.from=m.value
}k.props.push(n)});return k};return j.getStyles().map(h)},setStartKeyframe:function(g){this._start=g;
return this},setEndKeyframe:function(g){this._end=g;return this},setDuration:function(g){this._duration=g;
return this},getClip:function(){return f.create(this._mergeToClip())}};c.exports=d
},{"ac-animation-sequencer":4}],200:[function(c,d,a){var h=c("./helper/isTransformProperty");
var i=c("ac-deferred");var b=c("ac-object");var g=c("ac-animation-sequencer").Timeline;
function f(l,k,j){this.id=l;this._styles=k;this.options=j||{}}f.prototype={clone:function(){return new f(this.id,this._styles,this.options)
},findStyle:function(k,l){var j=null;this._styles.forEach(function(m){if(m.element===k){m.props.forEach(function(n){if(n.property===l){j=n
}})}});return j},getStyles:function(){return this._styles},__rafDraw:function(j,k){window.requestAnimationFrame(function(){j.update(j.getDuration());
k.resolve()})},draw:function(){var j=[];this.getStyles().forEach(function(m){var l=m.clipType||"Element";
var k=g.clipTypes[l];var o=[];var p=new i.Deferred();m.props.forEach(function(r){var q=b.clone(r);
q.from=q.to=q.value;q.easing="linear";o.push(q)});var n=k.create({element:m.element,props:o});
this.__rafDraw(n,p);j.push(p.promise())}.bind(this));return i.all(j)},diff:function(k){var j=[];
var o;var m=this.getStyles();var l=k.getStyles();var n;m.forEach(function(u,q){var r=u.element;
var s=u.props;var v={};var t=false;for(var p in l[q]){if(l[q].hasOwnProperty(p)){v[p]=l[q][p]
}}v.props=[];s.forEach(function(y){var w=y.property;var x=k.findStyle(r,w);if(x===null){v.props.push(y)
}else{if(x.value!==y.value||(h(w)&&t===true)){v.props.push(x);if(h(w)){t=true}}}});
if(v.props.length>0){j.push(v)}});return new f("diff",j,this.options)}};d.exports=f
},{"./helper/isTransformProperty":201,"ac-animation-sequencer":4,"ac-object":188}],201:[function(b,d,a){var c=["skew","scale","rotate","translateX","translateY","translateZ"];
d.exports=function(f){return(c.indexOf(f)!==-1)}},{}],202:[function(b,c,a){c.exports=b(79)
},{}],203:[function(b,c,a){c.exports={clone:b("./ac-object/clone"),defaults:b("./ac-object/defaults"),extend:b("./ac-object/extend"),getPrototypeOf:b("./ac-object/getPrototypeOf"),isEmpty:b("./ac-object/isEmpty"),toQueryParameters:b("./ac-object/toQueryParameters")}
},{"./ac-object/clone":204,"./ac-object/defaults":205,"./ac-object/extend":206,"./ac-object/getPrototypeOf":207,"./ac-object/isEmpty":208,"./ac-object/toQueryParameters":209}],204:[function(b,c,a){c.exports=b(81)
},{"./extend":206}],205:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"||typeof g!=="object"){throw new TypeError("defaults: must provide a defaults and options object")
}return f({},h,g)}},{"./extend":206}],206:[function(b,c,a){c.exports=b(84)},{}],207:[function(b,c,a){c.exports=b(85)
},{}],208:[function(b,c,a){c.exports=b(87)},{}],209:[function(b,c,a){c.exports=b(89)
},{qs:202}],210:[function(b,c,a){c.exports=b(79)},{}],211:[function(b,c,a){c.exports={isString:b("./ac-string/isString"),toCamelCase:b("./ac-string/toCamelCase"),queryStringToObject:b("./ac-string/queryStringToObject"),toQueryPair:b("./ac-string/toQueryPair"),queryParameters:b("./ac-string/queryParameters"),supplant:b("./ac-string/supplant")}
},{"./ac-string/isString":212,"./ac-string/queryParameters":213,"./ac-string/queryStringToObject":214,"./ac-string/supplant":215,"./ac-string/toCamelCase":216,"./ac-string/toQueryPair":217}],212:[function(c,d,b){d.exports=function a(f){return(typeof f==="string")
}},{}],213:[function(d,f,c){var a=d("./queryStringToObject");f.exports=function b(){var g={};
var h=window.location.toString().split("?")[1];if(typeof h==="string"){g=a(h)}return g
}},{"./queryStringToObject":214}],214:[function(d,f,c){var a=d("qs");f.exports=function b(g){if(typeof g!=="string"){throw new TypeError("QueryStringToObject error: argument must be a string")
}return a.parse(g)}},{qs:210}],215:[function(b,c,a){c.exports=function d(h,g,f){if(!g){return h
}f=f||/{([^{}]*)}/g;return h.replace(f,function(j,i){var k=g[i];return typeof k==="string"||typeof k==="number"?k:j
})}},{}],216:[function(b,c,a){c.exports=function d(f){if(typeof f!=="string"){throw new TypeError("Argument must be of type String.")
}return f.replace(/-+(.)?/g,function(g,h){return h?h.toUpperCase():""})}},{}],217:[function(b,c,a){c.exports=function d(f,g){if(typeof f!=="string"||typeof g!=="string"){throw new TypeError("toQueryPair error: argument must be a string")
}return encodeURIComponent(f)+"="+encodeURIComponent(g)}},{}],218:[function(b,f,a){var d=b("./ac-ajax/Ajax");
var c=b("./ac-ajax/Request");f.exports=new d();f.exports.Ajax=d;f.exports.Request=c
},{"./ac-ajax/Ajax":219,"./ac-ajax/Request":220}],219:[function(c,g,b){var f=c("./Request");
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
return this.create(i).send()}};g.exports=d},{"./Request":220,"./URLParser":221,"./XDomain-request":222}],220:[function(b,d,a){var c=function(f){this._initialize(f)
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
this._sendXHR();return this.promise},xhr:null};d.exports=c},{}],221:[function(c,d,b){var a=function(){this.parser=null
};var f=a.prototype;f.parse=function(k){var i;var l;var h;var g;var j;if(typeof k!=="string"){throw new TypeError(k+" must be a string")
}if(!this.parser){this.parser=document.createElement("a")}this._qualifyPath(k);
h=this.parser.hostname;l=this.parser.protocol;g=this._normalizePort(this.parser);
i=this.parser.origin||this._constructOriginString(this.parser,g);j=this.parser.search;
return{originalPath:k,qualifiedPath:this.parser.href,protocol:l,hostname:h,origin:i,port:g,search:j}
};f.destroy=function(){this.parser=null};f._constructOriginString=function(i,g){var h=g?":"+g:"";
return i.protocol+"//"+i.hostname+h};f._normalizePort=function(g){return(g.port==="80"||g.port==="443"||g.port==="0")?"":g.port
};f._qualifyPath=function(g){this.parser.href=g;this.parser.href=this.parser.href
};d.exports=a},{}],222:[function(b,d,a){var c=b("./Request");var f=function(g){c.apply(this,arguments)
};f.prototype=c.create();f.prototype._getTransport=function(){return new XDomainRequest()
};f.prototype._addReadyStateChangeHandler=function(){this.xhr.ontimeout=function(){this.reject(this.xhr)
}.bind(this);this.xhr.onerror=function(){this.reject(this.xhr)}.bind(this);this.xhr.onload=function(){this.resolve(this.xhr)
}.bind(this)};f.prototype._setTimeout=function(g){if(!g){if(this._configuration&&this._configuration.timeout){g=this._configuration.timeout
}}if(g>0){this.xhr.timeout=g}};f.prototype._sendXHR=function(){setTimeout(function(){c.prototype._sendXHR.call(this)
}.bind(this),0)};d.exports=f},{"./Request":220}],223:[function(c,d,b){var a=c("./ac-vatman/vat-client");
var f=c("./ac-vatman/vat-resource");var g={createPlayer:c("./ac-vatman/factory/createPlayer"),vatClient:a,vatResource:f};
d.exports=g},{"./ac-vatman/factory/createPlayer":224,"./ac-vatman/vat-client":231,"./ac-vatman/vat-resource":232}],224:[function(c,a,g){var m=c("./../featureDetection/canPlayType");
var d=c("./../featureDetection/canPlayTypeNatively");var l=c("./../featureDetection/canPlayTypeQuicktime");
var k=c("./../featureDetection/featureDetect").shouldPlayQuicktime;var i=c("./../featureDetection/featureDetect").textTrackDisablingNotAvailable;
function h(o,n){n.type="quicktime";return o.create(n)}function j(o,n){return o.create(n)
}function f(n){var p=this.findTextTrackModelFromNativeTrack(n);var o=this.getEnabledTextTracks();
o.forEach(function(q){if(p.cid!==q.cid){q.disable()}});if(p.get("mode")==="disabled"){p.hide()
}}function b(q,p){p=p||{};var o="video/quicktime";var n="video/mp4";var r;if(d(o)||d(n)&&(!k())){r=j(q,p)
}else{if(l(o)){p.type="quicktime";r=h(q,p)}}if(r&&!i()){r.on("addtrack",f,r)}return r
}a.exports=b},{"./../featureDetection/canPlayType":225,"./../featureDetection/canPlayTypeNatively":226,"./../featureDetection/canPlayTypeQuicktime":227,"./../featureDetection/featureDetect":228}],225:[function(b,d,a){var f=b("./canPlayTypeNatively");
var c=b("./canPlayTypeQuicktime");function g(i){var h=f(i);if(!h){h=c(i)}return h
}d.exports=g},{"./canPlayTypeNatively":226,"./canPlayTypeQuicktime":227}],226:[function(c,d,b){var f;
function a(){return document.createElement("video")}d.exports=function g(i){var j="";
var h=a();if(typeof h.canPlayType==="function"){j=h.canPlayType(i)}return j}},{}],227:[function(c,f,b){var a=c("./quicktime");
f.exports=function d(g){var h="";if(g==="video/quicktime"&&a.getPluginVersion()!==undefined){h="maybe"
}return h}},{"./quicktime":229}],228:[function(b,c,a){var f=b("ac-browser");var d=f.name.toLowerCase();
c.exports={shouldPlayMOV:function(){return(d==="safari"||d==="safari mobile")},shouldPlayQuicktime:function(){return(d==="ie"&&f.version<9)
},textTrackDisablingNotAvailable:function(){return(d==="safari mobile"&&f.version===7)
}}},{"ac-browser":27}],229:[function(b,c,a){c.exports={getPlugins:function(){return navigator.plugins
},getPluginVersion:function(){var j;var k=/(\d+\.){2}(\d+){1}$/;var d=this.getPlugins();
if(d&&d[0]){for(var h=0;h<d.length;h++){var f=(/QuickTime/i.test(d[h].name)&&typeof j==="undefined");
if(f){if(d[h].version){j=d[h].version}else{if(k.test(d[h].name)){j=d[h].name.match(k);
j=j[0]||undefined}}}}}else{var g=["QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1"];
g.forEach(function(l){var m;var i;try{m=new ActiveXObject(l);i=(typeof m==="object"&&typeof m.QuickTimeVersion!=="undefined"&&typeof j==="undefined");
if(i){j=m.QuickTimeVersion}}catch(n){}})}return j}}},{}],230:[function(b,c,a){c.exports={bg:"български език",cs:"Czech",el:"Greek",de:"German",da:"Danish",en:"English",es:"Spanish",et:"Estonian",fi:"Finnish",fr:"Français",hr:"Croatian",hu:"Hungarian",it:"Italian",ja:"Japanese",ko:"Korean",lt:"Lithuanian",lv:"Latvian",nl:"Dutch",no:"Norsk",pl:"Polish",pt:"Portuguese",ro:"Romanian",ru:"Russian",sk:"Slovak",sv:"Swedish",tr:"Turkish",zh:"Chinese"}
},{}],231:[function(d,b,g){var j=d("ac-ajax");var h=d("ac-string");var k=/(-[a-z]{2}-([a-z]{2}-){0,})[0-9]{8}_r[0-9].+\.mov$/;
var a=/_r[0-9].+\.mov$/;var i=/((-([a-z]{2}))*)-[0-9]+/;var n=/((-([a-z]{2}))*)-/;
var c="m";var f="_{width}x{height}{suffix}."+c+"p4";var l=[{width:416,height:234,type:"baseline-high",suffix:"h"},{width:416,height:234,type:"small",suffix:"h"},{width:416,height:234,type:"baseline-low",suffix:"l"},{width:416,height:234,type:"baseline-medium",suffix:"m"},{width:640,height:360,type:"medium",suffix:"h"},{width:848,height:480,type:"large",suffix:""}];
var o={create:function(){var m=function(){};m.prototype=this;return new m()},getSource:function(m,q,p){var s=l;
if(!m){throw"Must provide a vatRefMovie"}if(!q){throw"Must provide a width"}if(p){s=s.filter(function(t){return t.type===p
})}var r=s.reduce(function(t,u){return Math.abs(u.width-q)<Math.abs(t.width-q)?u:t
});return m.replace(a,h.supplant(f,r))},getConfigPath:function(m){return m.replace(k,"-current.json")
},getConfig:function(m){return j.getJSON({url:this.getConfigPath(m)})},getVTTSource:function(m){return m.replace(a,"_cc.vtt")
}};b.exports=o},{"ac-ajax":218,"ac-string":211}],232:[function(c,d,b){var a=c("./vat-client");
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
if(!g()){j=this.getSource(k)}i.setSrc(j);this._handleCaptions(i)}};d.exports=f},{"./featureDetection/featureDetect":228,"./localization/language":230,"./vat-client":231}],233:[function(b,c,a){c.exports=b(79)
},{}],234:[function(b,c,a){c.exports=b(89)},{qs:233}],235:[function(b,f,a){var g=b("./request/factory");
var d={complete:function(j,i){},error:function(j,i){},method:"GET",headers:{},success:function(j,i,k){},timeout:5000};
var h=function(){for(var k=1;k<arguments.length;k++){for(var j in arguments[k]){if(arguments[k].hasOwnProperty(j)){arguments[0][j]=arguments[k][j]
}}}return arguments[0]};var c={ajax:function(i,j){j=h({},d,j);if(i.substr(0,2)==="//"){i=window.location.protocol+i
}var k=g(i);k.open(j.method,i);k.setTransportHeaders(j.headers);k.setReadyStateChangeHandlers(j.complete,j.error,j.success);
k.setTimeout(j.timeout,j.error,j.complete);k.send(j.data);return k},get:function(i,j){j.method="GET";
return c.ajax(i,j)},head:function(i,j){j.method="HEAD";return c.ajax(i,j)},post:function(i,j){j.method="POST";
return c.ajax(i,j)}};f.exports=c},{"./request/factory":236}],236:[function(c,b,f){var j=c("./xmlhttprequest");
var i=c("./xdomainrequest");var h=/.*(?=:\/\/)/;var a=/^.*:\/\/|\/.+$/g;var d=window.XDomainRequest&&document.documentMode<10;
var g=function(l){if(!l.match(h)){return false}var k=l.replace(a,"");return k!==window.location.hostname
};b.exports=function(k,l){var m=d&&g(k)?i:j;return new m()}},{"./xdomainrequest":238,"./xmlhttprequest":239}],237:[function(b,d,a){var c=function(){};
c.create=function(){var f=function(){};f.prototype=c.prototype;return new f()};
c.prototype.open=function(g,f){g=g.toUpperCase();this.xhr.open(g,f)};c.prototype.send=function(f){this.xhr.send(f)
};c.prototype.setTimeout=function(h,g,f){this.xhr.ontimeout=function(){g(this.xhr,this.status);
f(this.xhr,this.status)}.bind(this)};c.prototype.setTransportHeaders=function(f){for(var g in f){this.xhr.setRequestHeader(g,f[g])
}};d.exports=c},{}],238:[function(b,f,a){var d=b("./request");var c=b("ac-object/toQueryParameters");
var g=function(){this.xhr=new XDomainRequest()};g.prototype=d.create();g.prototype.setReadyStateChangeHandlers=function(h,i,j){this.xhr.onerror=function(){i(this.xhr,this.status);
h(this.xhr,this.status)}.bind(this);this.xhr.onload=function(){j(this.xhr.responseText,this.xhr.status,this.xhr);
h(this.xhr,this.status)}.bind(this)};g.prototype.send=function(h){if(h&&typeof h==="object"){h=c(h)
}this.xhr.send(h)};g.prototype.setTransportHeaders=function(h){};f.exports=g},{"./request":237,"ac-object/toQueryParameters":234}],239:[function(b,d,a){var c=b("./request");
var f=function(){this.xhr=new XMLHttpRequest()};f.prototype=c.create();f.prototype.setReadyStateChangeHandlers=function(g,h,i){this.xhr.onreadystatechange=function(j){if(this.xhr.readyState===4){clearTimeout(this.timeout);
if(this.xhr.status>=200&&this.xhr.status<300){i(this.xhr.responseText,this.xhr.status,this.xhr);
g(this.xhr,this.status)}else{h(this.xhr,this.status);g(this.xhr,this.status)}}}.bind(this)
};d.exports=f},{"./request":237}],240:[function(b,c,a){b("ac-polyfills/Array/prototype.slice");
b("ac-polyfills/Element/prototype.classList");var d=b("./className/add");c.exports=function f(){var j=Array.prototype.slice.call(arguments);
var h=j.shift(j);var g;if(h.classList&&h.classList.add){h.classList.add.apply(h.classList,j);
return}for(g=0;g<j.length;g++){d(h,j[g])}}},{"./className/add":242,"ac-polyfills/Array/prototype.slice":248,"ac-polyfills/Element/prototype.classList":249}],241:[function(b,c,a){c.exports={add:b("./className/add"),contains:b("./className/contains"),remove:b("./className/remove")}
},{"./className/add":242,"./className/contains":243,"./className/remove":245}],242:[function(b,c,a){var d=b("./contains");
c.exports=function f(h,g){if(!d(h,g)){h.className+=" "+g}}},{"./contains":243}],243:[function(b,c,a){var f=b("./getTokenRegExp");
c.exports=function d(h,g){return f(g).test(h.className)}},{"./getTokenRegExp":244}],244:[function(b,c,a){c.exports=function d(f){return new RegExp("(\\s|^)"+f+"(\\s|$)")
}},{}],245:[function(c,d,b){var f=c("./contains");var g=c("./getTokenRegExp");d.exports=function a(i,h){if(f(i,h)){i.className=i.className.replace(g(h),"$1").trim()
}}},{"./contains":243,"./getTokenRegExp":244}],246:[function(b,d,a){b("ac-polyfills/Element/prototype.classList");
var f=b("./className/contains");d.exports=function c(h,g){if(h.classList&&h.classList.contains){return h.classList.contains(g)
}return f(h,g)}},{"./className/contains":243,"ac-polyfills/Element/prototype.classList":249}],247:[function(b,c,a){c.exports={add:b("./add"),contains:b("./contains"),remove:b("./remove"),toggle:b("./toggle")}
},{"./add":240,"./contains":246,"./remove":250,"./toggle":251}],248:[function(b,c,a){c.exports=b(62)
},{}],249:[function(b,c,a){
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
}else{return d.call(this,h)}}}f=null}())}}},{}],250:[function(d,f,c){d("ac-polyfills/Array/prototype.slice");
d("ac-polyfills/Element/prototype.classList");var b=d("./className/remove");f.exports=function a(){var j=Array.prototype.slice.call(arguments);
var h=j.shift(j);var g;if(h.classList&&h.classList.remove){h.classList.remove.apply(h.classList,j);
return}for(g=0;g<j.length;g++){b(h,j[g])}}},{"./className/remove":245,"ac-polyfills/Array/prototype.slice":248,"ac-polyfills/Element/prototype.classList":249}],251:[function(c,d,b){c("ac-polyfills/Element/prototype.classList");
var f=c("./className");d.exports=function a(j,i,k){var h=(typeof k!=="undefined");
var g;if(j.classList&&j.classList.toggle){if(h){return j.classList.toggle(i,k)}return j.classList.toggle(i)
}if(h){g=!!k}else{g=!f.contains(j,i)}if(g){f.add(j,i)}else{f.remove(j,i)}return g
}},{"./className":241,"ac-polyfills/Element/prototype.classList":249}],252:[function(b,c,a){c.exports={log:b("./ac-console/log")}
},{"./ac-console/log":253}],253:[function(d,f,b){var a="f7c9180f-5c45-47b4-8de4-428015f096c0";
var c=!!(function(){try{return window.localStorage.getItem(a)}catch(h){}}());f.exports=function g(){if(window.console&&typeof console.log!=="undefined"&&c){console.log.apply(console,Array.prototype.slice.call(arguments,0))
}}},{}],254:[function(b,c,a){var d=b("./ac-prefixer/Prefixer");c.exports=new d();
c.exports.Prefixer=d},{"./ac-prefixer/Prefixer":255}],255:[function(d,b,g){var k=d("./Prefixer/camelCasedEvents");
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
},{"./Prefixer/camelCasedEvents":256}],256:[function(b,c,a){c.exports={transitionend:{onwebkittransitionend:"webkitTransitionEnd",onmstransitionend:"MSTransitionEnd"},animationstart:{onwebkitanimationstart:"webkitAnimationStart",onmsanimationstart:"MSAnimationStart"},animationend:{onwebkitanimationend:"webkitAnimationEnd",onmsanimationend:"MSAnimationEnd"},animationiteration:{onwebkitanimationiteration:"webkitAnimationIteration",onmsanimationiteration:"MSAnimationIteration"},fullscreenchange:{onmsfullscreenchange:"MSFullscreenChange"},fullscreenerror:{onmsfullscreenerror:"MSFullscreenError"}}
},{}],257:[function(b,c,a){c.exports={addEventListener:b("./ac-dom-events/addEventListener"),dispatchEvent:b("./ac-dom-events/dispatchEvent"),preventDefault:b("./ac-dom-events/preventDefault"),removeEventListener:b("./ac-dom-events/removeEventListener"),stop:b("./ac-dom-events/stop"),stopPropagation:b("./ac-dom-events/stopPropagation"),target:b("./ac-dom-events/target")}
},{"./ac-dom-events/addEventListener":258,"./ac-dom-events/dispatchEvent":259,"./ac-dom-events/preventDefault":260,"./ac-dom-events/removeEventListener":261,"./ac-dom-events/stop":262,"./ac-dom-events/stopPropagation":263,"./ac-dom-events/target":264}],258:[function(b,c,a){var f=b("ac-prefixer");
c.exports=function d(j,h,i,g){h=f.getEventType(h);if(j.addEventListener){j.addEventListener(h,i,g)
}else{h="on"+h.toLowerCase();j.attachEvent(h,i)}return j}},{"ac-prefixer":254}],259:[function(b,c,a){c.exports=function d(i,h,g){var f;
h=h.toLowerCase();if(window.CustomEvent){if(g){f=new CustomEvent(h,g)}else{f=new CustomEvent(h)
}i.dispatchEvent(f)}else{f=document.createEventObject();if(g&&"detail" in g){f.detail=g.detail
}i.fireEvent("on"+h,f)}return i}},{}],260:[function(b,c,a){c.exports=b(124)},{}],261:[function(b,c,a){var f=b("ac-prefixer");
c.exports=function d(j,h,i,g){h=f.getEventType(h);if(j.removeEventListener){j.removeEventListener(h,i,g)
}else{h="on"+h.toLowerCase();j.detachEvent(h,i)}return j}},{"ac-prefixer":254}],262:[function(b,c,a){c.exports=b(127)
},{"./preventDefault":260,"./stopPropagation":263}],263:[function(b,c,a){c.exports=b(128)
},{}],264:[function(b,c,a){c.exports=function d(f){f=f||window.event;return(typeof f.target!=="undefined")?f.target:f.srcElement
}},{}],265:[function(b,c,a){var d={querySelector:b("./ac-dom-traversal/querySelector"),querySelectorAll:b("./ac-dom-traversal/querySelectorAll"),ancestor:b("./ac-dom-traversal/ancestor"),ancestors:b("./ac-dom-traversal/ancestors"),children:b("./ac-dom-traversal/children"),firstChild:b("./ac-dom-traversal/firstChild"),lastChild:b("./ac-dom-traversal/lastChild"),siblings:b("./ac-dom-traversal/siblings"),nextSibling:b("./ac-dom-traversal/nextSibling"),nextSiblings:b("./ac-dom-traversal/nextSiblings"),previousSibling:b("./ac-dom-traversal/previousSibling"),previousSiblings:b("./ac-dom-traversal/previousSiblings"),filterBySelector:b("./ac-dom-traversal/filterBySelector"),matchesSelector:b("./ac-dom-traversal/matchesSelector")};
b("./ac-dom-traversal/shims/ie")(d);c.exports=d},{"./ac-dom-traversal/ancestor":266,"./ac-dom-traversal/ancestors":267,"./ac-dom-traversal/children":268,"./ac-dom-traversal/filterBySelector":269,"./ac-dom-traversal/firstChild":270,"./ac-dom-traversal/lastChild":273,"./ac-dom-traversal/matchesSelector":274,"./ac-dom-traversal/nextSibling":275,"./ac-dom-traversal/nextSiblings":276,"./ac-dom-traversal/previousSibling":277,"./ac-dom-traversal/previousSiblings":278,"./ac-dom-traversal/querySelector":279,"./ac-dom-traversal/querySelectorAll":280,"./ac-dom-traversal/shims/ie":281,"./ac-dom-traversal/siblings":282}],266:[function(d,g,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");g.exports=function f(j,i){h.childNode(j,true,"ancestors");
h.selector(i,false,"ancestors");if(j!==document.body){while((j=j.parentNode)&&a.isElement(j)){if(!i||b(j,i)){return j
}if(j===document.body){break}}}return null}},{"./helpers/validate":272,"./matchesSelector":274,"ac-dom-nodes":313}],267:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(k,i){var j=[];
h.childNode(k,true,"ancestors");h.selector(i,false,"ancestors");if(k!==document.body){while((k=k.parentNode)&&a.isElement(k)){if(!i||b(k,i)){j.push(k)
}if(k===document.body){break}}}return j}},{"./helpers/validate":272,"./matchesSelector":274,"ac-dom-nodes":313}],268:[function(d,g,c){var a=d("ac-dom-nodes");
var b=d("./filterBySelector");var h=d("./helpers/validate");g.exports=function f(k,i){var j;
h.parentNode(k,true,"children");h.selector(i,false,"children");j=k.children||k.childNodes;
j=a.filterByNodeType(j);if(i){j=b(j,i)}return j}},{"./filterBySelector":269,"./helpers/validate":272,"ac-dom-nodes":313}],269:[function(d,f,c){var b=d("./matchesSelector");
var g=d("./helpers/validate");f.exports=function a(i,h){g.selector(h,true,"filterBySelector");
i=Array.prototype.slice.call(i);return i.filter(function(j){return b(j,h)})}},{"./helpers/validate":272,"./matchesSelector":274}],270:[function(b,d,a){var c=b("./children");
var g=b("./helpers/validate");d.exports=function f(j,h){var i;g.parentNode(j,true,"firstChild");
g.selector(h,false,"firstChild");if(j.firstElementChild&&!h){return j.firstElementChild
}i=c(j,h);if(i.length){return i[0]}return null}},{"./children":268,"./helpers/validate":272}],271:[function(b,c,a){c.exports=window.Element?(function(d){return d.matches||d.matchesSelector||d.webkitMatchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector
}(Element.prototype)):null},{}],272:[function(d,b,f){var j=d("ac-dom-nodes");var a=function(m,l){if(!j.isNode(m)){return false
}if(typeof l==="number"){return(m.nodeType===l)}return(l.indexOf(m.nodeType)!==-1)
};var h=[j.ELEMENT_NODE,j.DOCUMENT_NODE,j.DOCUMENT_FRAGMENT_NODE];var i=" must be an Element, Document, or Document Fragment";
var k=[j.ELEMENT_NODE,j.TEXT_NODE,j.COMMENT_NODE];var g=" must be an Element, TextNode, or Comment";
var c=" must be a string";b.exports={parentNode:function(l,o,n,m){m=m||"node";if((l||o)&&!a(l,h)){throw new TypeError(n+": "+m+i)
}},childNode:function(l,o,n,m){m=m||"node";if(!l&&!o){return}if(!a(l,k)){throw new TypeError(n+": "+m+g)
}},selector:function(l,o,n,m){m=m||"selector";if((l||o)&&typeof l!=="string"){throw new TypeError(n+": "+m+c)
}}}},{"ac-dom-nodes":313}],273:[function(b,d,a){var c=b("./children");var g=b("./helpers/validate");
d.exports=function f(j,h){var i;g.parentNode(j,true,"lastChild");g.selector(h,false,"lastChild");
if(j.lastElementChild&&!h){return j.lastElementChild}i=c(j,h);if(i.length){return i[i.length-1]
}return null}},{"./children":268,"./helpers/validate":272}],274:[function(f,g,d){var b=f("ac-dom-nodes");
var a=f("./helpers/nativeMatches");var h=f("./helpers/validate");g.exports=function c(j,i){h.selector(i,true,"matchesSelector");
return b.isElement(j)?a.call(j,i):false}},{"./helpers/nativeMatches":271,"./helpers/validate":272,"ac-dom-nodes":313}],275:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(j,i){h.childNode(j,true,"nextSibling");
h.selector(i,false,"nextSibling");if(j.nextElementSibling&&!i){return j.nextElementSibling
}while(j=j.nextSibling){if(a.isElement(j)){if(!i||b(j,i)){return j}}}return null
}},{"./helpers/validate":272,"./matchesSelector":274,"ac-dom-nodes":313}],276:[function(f,g,c){var a=f("ac-dom-nodes");
var b=f("./matchesSelector");var h=f("./helpers/validate");g.exports=function d(k,i){var j=[];
h.childNode(k,true,"nextSiblings");h.selector(i,false,"nextSiblings");while(k=k.nextSibling){if(a.isElement(k)){if(!i||b(k,i)){j.push(k)
}}}return j}},{"./helpers/validate":272,"./matchesSelector":274,"ac-dom-nodes":313}],277:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(j,i){h.childNode(j,true,"previousSibling");
h.selector(i,false,"previousSibling");if(j.previousElementSibling&&!i){return j.previousElementSibling
}while(j=j.previousSibling){if(a.isElement(j)){if(!i||b(j,i)){return j}}}return null
}},{"./helpers/validate":272,"./matchesSelector":274,"ac-dom-nodes":313}],278:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(k,i){var j=[];
h.childNode(k,true,"previousSiblings");h.selector(i,false,"previousSiblings");while(k=k.previousSibling){if(a.isElement(k)){if(!i||b(k,i)){j.push(k)
}}}return j.reverse()}},{"./helpers/validate":272,"./matchesSelector":274,"ac-dom-nodes":313}],279:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){h=h||document;f.parentNode(h,true,"querySelector","context");
f.selector(g,true,"querySelector");return h.querySelector(g)}},{"./helpers/validate":272}],280:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){h=h||document;f.parentNode(h,true,"querySelectorAll","context");
f.selector(g,true,"querySelectorAll");return Array.prototype.slice.call(h.querySelectorAll(g))
}},{"./helpers/validate":272}],281:[function(d,f,c){var g=d("../vendor/sizzle/sizzle");
var b=d("ac-dom-nodes");var a=d("../helpers/nativeMatches");var h=d("../helpers/validate");
f.exports=function(j,i){if(i||!("querySelectorAll" in document)){j.querySelectorAll=function(k,m){var l;
var n;m=m||document;h.parentNode(m,true,"querySelectorAll","context");h.selector(k,true,"querySelectorAll");
if(b.isDocumentFragment(m)){l=j.children(m);n=[];l.forEach(function(p){var o;if(g.matchesSelector(p,k)){n.push(p)
}o=g(k,p);if(o.length){n=n.concat(o)}});return n}return g(k,m)};j.querySelector=function(l,m){var k;
m=m||document;h.parentNode(m,true,"querySelector","context");h.selector(l,true,"querySelector");
k=j.querySelectorAll(l,m);return k.length?k[0]:null}}if(i||!a){j.matchesSelector=function(l,k){return g.matchesSelector(l,k)
}}}},{"../helpers/nativeMatches":271,"../helpers/validate":272,"../vendor/sizzle/sizzle":283,"ac-dom-nodes":313}],282:[function(b,d,a){var c=b("./children");
var g=b("./helpers/validate");d.exports=function f(j,h){var i=[];g.childNode(j,true,"siblings");
g.selector(h,false,"siblings");if(j.parentNode){i=c(j.parentNode,h);i=i.filter(function(k){return(k!==j)
})}return i}},{"./children":268,"./helpers/validate":272}],283:[function(b,c,a){c.exports=b(70)
},{}],284:[function(b,c,a){c.exports={DOMEmitter:b("./ac-dom-emitter/DOMEmitter")}
},{"./ac-dom-emitter/DOMEmitter":285}],285:[function(c,b,d){var f;var k=c("ac-event-emitter").EventEmitter,j=c("./DOMEmitterEvent"),g=c("ac-dom-events"),a=c("ac-dom-traversal");
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
}};b.exports=h},{"./DOMEmitterEvent":286,"ac-dom-events":257,"ac-dom-traversal":265}],286:[function(b,c,a){var f=b("ac-dom-events");
var d;var g=function(i,h){this._domEmitter=h;this._originalTarget=f.target(i);this.originalEvent=i||{};
this.target=this._originalTarget||this._domEmitter.el;this.currentTarget=this._domEmitter.el;
this.timeStamp=this.originalEvent.timeStamp||Date.now();if(this._isDOMEvent(this.originalEvent)){if(typeof this.originalEvent.detail==="object"){this.data=this.originalEvent.detail
}}else{if(i){this.data=this.originalEvent;this.originalEvent={}}}};d=g.prototype;
d.preventDefault=function(){f.preventDefault(this.originalEvent)};d.stopPropagation=function(){f.stopPropagation(this.originalEvent)
};d.stopImmediatePropagation=function(){if(this.originalEvent.stopImmediatePropagation){this.originalEvent.stopImmediatePropagation()
}this._domEmitter.stopImmediatePropagation()};d._isDOMEvent=function(h){if(this._originalTarget||(document.createEvent!=="undefined"&&typeof CustomEvent!=="undefined"&&h instanceof CustomEvent)){return true
}return false};c.exports=g},{"ac-dom-events":257}],287:[function(b,c,a){c.exports=b(92)
},{"./shared/getEventType":297,"./utils/addEventListener":301}],288:[function(b,c,a){c.exports=b(117)
},{"./shared/getEventType":297,"./utils/dispatchEvent":302}],289:[function(b,c,a){c.exports=b(118)
},{"./addEventListener":287,"./dispatchEvent":288,"./preventDefault":295,"./removeEventListener":296,"./stop":298,"./stopPropagation":299,"./target":300}],290:[function(b,c,a){c.exports=b(119)
},{}],291:[function(b,c,a){c.exports=b(93)},{"./shared/camelCasedEventTypes":292,"./shared/prefixHelper":293,"./utils/eventTypeAvailable":294}],292:[function(b,c,a){c.exports=b(94)
},{}],293:[function(b,c,a){c.exports=b(95)},{}],294:[function(b,c,a){c.exports=b(96)
},{}],295:[function(b,c,a){c.exports=b(124)},{}],296:[function(b,c,a){c.exports=b(125)
},{"./shared/getEventType":297,"./utils/removeEventListener":303}],297:[function(b,c,a){c.exports=b(97)
},{"ac-prefixer/getEventType":291}],298:[function(b,c,a){c.exports=b(127)},{"./preventDefault":295,"./stopPropagation":299}],299:[function(b,c,a){c.exports=b(128)
},{}],300:[function(b,c,a){c.exports=b(129)},{}],301:[function(b,c,a){c.exports=b(98)
},{}],302:[function(b,c,a){c.exports=b(131)},{"ac-polyfills/CustomEvent":290}],303:[function(b,c,a){c.exports=b(132)
},{}],304:[function(b,c,a){c.exports=b(49)},{}],305:[function(b,c,a){c.exports=b(50)
},{}],306:[function(b,c,a){c.exports=b(51)},{}],307:[function(b,c,a){c.exports=10
},{}],308:[function(b,c,a){c.exports=b(52)},{}],309:[function(b,c,a){c.exports=b(53)
},{}],310:[function(c,d,b){d.exports=function a(g){var f=document.createDocumentFragment();
var h;if(g){h=document.createElement("div");h.innerHTML=g;while(h.firstChild){f.appendChild(h.firstChild)
}}return f}},{}],311:[function(b,c,a){c.exports=b(54)},{"./ELEMENT_NODE":308,"./internal/isNodeType":319,"ac-polyfills/Array/prototype.filter":329,"ac-polyfills/Array/prototype.slice":331}],312:[function(c,d,a){d.exports=function b(g,f){if("hasAttribute" in g){return g.hasAttribute(f)
}return(g.attributes.getNamedItem(f)!==null)}},{}],313:[function(b,c,a){c.exports={createDocumentFragment:b("./createDocumentFragment"),filterByNodeType:b("./filterByNodeType"),hasAttribute:b("./hasAttribute"),indexOf:b("./indexOf"),insertAfter:b("./insertAfter"),insertBefore:b("./insertBefore"),insertFirstChild:b("./insertFirstChild"),insertLastChild:b("./insertLastChild"),isComment:b("./isComment"),isDocument:b("./isDocument"),isDocumentFragment:b("./isDocumentFragment"),isDocumentType:b("./isDocumentType"),isElement:b("./isElement"),isNode:b("./isNode"),isNodeList:b("./isNodeList"),isTextNode:b("./isTextNode"),remove:b("./remove"),replace:b("./replace"),COMMENT_NODE:b("./COMMENT_NODE"),DOCUMENT_FRAGMENT_NODE:b("./DOCUMENT_FRAGMENT_NODE"),DOCUMENT_NODE:b("./DOCUMENT_NODE"),DOCUMENT_TYPE_NODE:b("./DOCUMENT_TYPE_NODE"),ELEMENT_NODE:b("./ELEMENT_NODE"),TEXT_NODE:b("./TEXT_NODE")}
},{"./COMMENT_NODE":304,"./DOCUMENT_FRAGMENT_NODE":305,"./DOCUMENT_NODE":306,"./DOCUMENT_TYPE_NODE":307,"./ELEMENT_NODE":308,"./TEXT_NODE":309,"./createDocumentFragment":310,"./filterByNodeType":311,"./hasAttribute":312,"./indexOf":314,"./insertAfter":315,"./insertBefore":316,"./insertFirstChild":317,"./insertLastChild":318,"./isComment":321,"./isDocument":322,"./isDocumentFragment":323,"./isDocumentType":324,"./isElement":325,"./isNode":326,"./isNodeList":327,"./isTextNode":328,"./remove":332,"./replace":333}],314:[function(c,d,b){c("ac-polyfills/Array/prototype.indexOf");
c("ac-polyfills/Array/prototype.slice");var g=c("./internal/validate");var a=c("./filterByNodeType");
d.exports=function f(k,i){var h=k.parentNode;var j;if(!h){return 0}j=h.childNodes;
if(i!==false){j=a(j,i)}else{j=Array.prototype.slice.call(j)}return j.indexOf(k)
}},{"./filterByNodeType":311,"./internal/validate":320,"ac-polyfills/Array/prototype.indexOf":330,"ac-polyfills/Array/prototype.slice":331}],315:[function(b,c,a){var f=b("./internal/validate");
c.exports=function d(g,h){f.insertNode(g,true,"insertAfter");f.childNode(h,true,"insertAfter");
f.hasParentNode(h,"insertAfter");if(!h.nextSibling){return h.parentNode.appendChild(g)
}return h.parentNode.insertBefore(g,h.nextSibling)}},{"./internal/validate":320}],316:[function(c,d,a){var f=c("./internal/validate");
d.exports=function b(g,h){f.insertNode(g,true,"insertBefore");f.childNode(h,true,"insertBefore");
f.hasParentNode(h,"insertBefore");return h.parentNode.insertBefore(g,h)}},{"./internal/validate":320}],317:[function(c,d,b){var f=c("./internal/validate");
d.exports=function a(g,h){f.insertNode(g,true,"insertFirstChild");f.parentNode(h,true,"insertFirstChild");
if(!h.firstChild){return h.appendChild(g)}return h.insertBefore(g,h.firstChild)
}},{"./internal/validate":320}],318:[function(b,c,a){var d=b("./internal/validate");
c.exports=function f(g,h){d.insertNode(g,true,"insertLastChild");d.parentNode(h,true,"insertLastChild");
return h.appendChild(g)}},{"./internal/validate":320}],319:[function(b,c,a){c.exports=b(55)
},{"../isNode":326}],320:[function(g,d,j){var b=g("./isNodeType");var c=g("../COMMENT_NODE");
var k=g("../DOCUMENT_FRAGMENT_NODE");var i=g("../ELEMENT_NODE");var h=g("../TEXT_NODE");
var m=[i,h,c,k];var f=" must be an Element, TextNode, Comment, or Document Fragment";
var p=[i,h,c];var l=" must be an Element, TextNode, or Comment";var n=[i,k];var o=" must be an Element, or Document Fragment";
var a=" must have a parentNode";d.exports={parentNode:function(q,t,s,r){r=r||"target";
if((q||t)&&!b(q,n)){throw new TypeError(s+": "+r+o)}},childNode:function(q,t,s,r){r=r||"target";
if(!q&&!t){return}if(!b(q,p)){throw new TypeError(s+": "+r+l)}},insertNode:function(q,t,s,r){r=r||"node";
if(!q&&!t){return}if(!b(q,m)){throw new TypeError(s+": "+r+f)}},hasParentNode:function(q,s,r){r=r||"target";
if(!q.parentNode){throw new TypeError(s+": "+r+a)}}}},{"../COMMENT_NODE":304,"../DOCUMENT_FRAGMENT_NODE":305,"../ELEMENT_NODE":308,"../TEXT_NODE":309,"./isNodeType":319}],321:[function(c,d,a){var g=c("./internal/isNodeType");
var f=c("./COMMENT_NODE");d.exports=function b(h){return g(h,f)}},{"./COMMENT_NODE":304,"./internal/isNodeType":319}],322:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./DOCUMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_NODE":306,"./internal/isNodeType":319}],323:[function(b,c,a){c.exports=b(56)
},{"./DOCUMENT_FRAGMENT_NODE":305,"./internal/isNodeType":319}],324:[function(b,c,a){var g=b("./internal/isNodeType");
var f=b("./DOCUMENT_TYPE_NODE");c.exports=function d(h){return g(h,f)}},{"./DOCUMENT_TYPE_NODE":307,"./internal/isNodeType":319}],325:[function(b,c,a){c.exports=b(57)
},{"./ELEMENT_NODE":308,"./internal/isNodeType":319}],326:[function(b,c,a){c.exports=b(58)
},{}],327:[function(c,d,b){var f=/^\[object (HTMLCollection|NodeList|Object)\]$/;
d.exports=function a(g){if(!g){return false}if(typeof g.length!=="number"){return false
}if(typeof g[0]==="object"&&(!g[0]||!g[0].nodeType)){return false}return f.test(Object.prototype.toString.call(g))
}},{}],328:[function(c,d,a){var g=c("./internal/isNodeType");var b=c("./TEXT_NODE");
d.exports=function f(h){return g(h,b)}},{"./TEXT_NODE":309,"./internal/isNodeType":319}],329:[function(b,c,a){c.exports=b(25)
},{}],330:[function(b,c,a){c.exports=b(61)},{}],331:[function(b,c,a){c.exports=b(62)
},{}],332:[function(c,d,b){var f=c("./internal/validate");d.exports=function a(g){f.childNode(g,true,"remove");
if(!g.parentNode){return g}return g.parentNode.removeChild(g)}},{"./internal/validate":320}],333:[function(b,d,a){var f=b("./internal/validate");
d.exports=function c(g,h){f.insertNode(g,true,"insertFirstChild","newNode");f.childNode(h,true,"insertFirstChild","oldNode");
f.hasParentNode(h,"insertFirstChild","oldNode");return h.parentNode.replaceChild(g,h)
}},{"./internal/validate":320}],334:[function(c,d,b){var a=c("./ac-dom-styles/vendorTransformHelper");
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
d.exports=f},{"./ac-dom-styles/ie":335,"./ac-dom-styles/vendorTransformHelper":336}],335:[function(b,c,a){c.exports=function(d){if(typeof window.getComputedStyle!=="function"){d.getStyle=function(i,h,g){var f;
var j;g=g||i.currentStyle;if(g){h=h.replace(/-(\w)/g,d.setStyle.__camelCaseReplace);
h=h==="float"?"styleFloat":h;j=g[h]||null;return j==="auto"?null:j}}}}},{}],336:[function(c,d,b){var a={__objectifiedFunctions:{},__paramMaps:{translate:"p1, p2, 0",translateX:"p1, 0, 0",translateY:"0, p1, 0",scale:"p1, p2, 1",scaleX:"p1, 1, 1",scaleY:"1, p1, 1",rotate:"0, 0, 1, p1",matrix:"p1, p2, 0, 0, p3, p4, 0, 0, 0, 0, 1, 0, p5, p6, 0, 1"},convert2dFunctions:function(g){var f;
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
},{}],337:[function(c,f,b){var d={cssPropertyAvailable:c("./ac-feature/cssPropertyAvailable"),localStorageAvailable:c("./ac-feature/localStorageAvailable")};
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
};f.exports=d},{"./ac-feature/cssPropertyAvailable":338,"./ac-feature/localStorageAvailable":339}],338:[function(c,f,b){var g=null;
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
}}return false}}},{}],339:[function(d,f,b){var a=null;f.exports=function c(){if(a===null){a=!!(window.localStorage&&window.localStorage.non_existent!==null)
}return a}},{}],340:[function(b,c,a){c.exports={flatten:b("./ac-array/flatten"),intersection:b("./ac-array/intersection"),toArray:b("./ac-array/toArray"),union:b("./ac-array/union"),unique:b("./ac-array/unique"),without:b("./ac-array/without")}
},{"./ac-array/flatten":341,"./ac-array/intersection":342,"./ac-array/toArray":343,"./ac-array/union":344,"./ac-array/unique":345,"./ac-array/without":346}],341:[function(b,c,a){c.exports=function d(h){var f=[];
var g=function(i){if(Array.isArray(i)){i.forEach(g)}else{f.push(i)}};h.forEach(g);
return f}},{}],342:[function(b,c,a){c.exports=function d(n){if(!n){return[]}var m=arguments.length;
var k=0;var g=n.length;var f=[];var l;for(k;k<g;k++){l=n[k];if(f.indexOf(l)>-1){continue
}for(var h=1;h<m;h++){if(arguments[h].indexOf(l)<0){break}}if(h===m){f.push(l)}}return f
}},{}],343:[function(b,d,a){d.exports=function c(f){return Array.prototype.slice.call(f)
}},{}],344:[function(b,c,a){var g=b("./flatten");var f=b("./unique");c.exports=function d(h){return f(g(Array.prototype.slice.call(arguments)))
}},{"./flatten":341,"./unique":345}],345:[function(b,c,a){c.exports=function d(g){var f=function(h,i){if(h.indexOf(i)<0){h.push(i)
}return h};return g.reduce(f,[])}},{}],346:[function(b,d,a){d.exports=function c(f,n,m){var k;
var h=f.indexOf(n);var l=f.length;if(h>=0){if(m){k=f.slice(0,l);var j,g=0;for(j=h;
j<l;j++){if(f[j]===n){k.splice(j-g,1);g++}}}else{if(h===(l-1)){k=f.slice(0,(l-1))
}else{if(h===0){k=f.slice(1)}else{k=f.slice(0,h);k=k.concat(f.slice(h+1))}}}}else{return f
}return k}},{}],347:[function(b,c,a){c.exports={SharedInstance:b("./ac-shared-instance/SharedInstance")}
},{"./ac-shared-instance/SharedInstance":348}],348:[function(d,h,c){var i=window,g="AC",a="SharedInstance",f=i[g];
var b=(function(){var j={};return{get:function(l,k){var m=null;if(j[l]&&j[l][k]){m=j[l][k]
}return m},set:function(m,k,l){if(!j[m]){j[m]={}}if(typeof l==="function"){j[m][k]=new l()
}else{j[m][k]=l}return j[m][k]},share:function(m,k,l){var n=this.get(m,k);if(!n){n=this.set(m,k,l)
}return n},remove:function(l,k){var m=typeof k;if(m==="string"||m==="number"){if(!j[l]||!j[l][k]){return
}j[l][k]=null;return}if(j[l]){j[l]=null}}}}());if(!f){f=i[g]={}}if(!f[a]){f[a]=b
}h.exports=f[a]},{}],349:[function(b,c,a){c.exports={CID:b("./ac-mvc-cid/CID")}
},{"./ac-mvc-cid/CID":350}],350:[function(c,f,b){var a=c("ac-shared-instance").SharedInstance;
var g="ac-mvc-cid:CID",d="1.0.0";function i(){this._idCount=0}var h=i.prototype;
h._cidPrefix="cid";h.getNewCID=function(){var j=this._cidPrefix+"-"+this._idCount;
this._idCount++;return j};f.exports=a.share(g,d,i)},{"ac-shared-instance":347}],351:[function(b,c,a){c.exports={Collection:b("./ac-mvc-collection/Collection")}
},{"./ac-mvc-collection/Collection":352}],352:[function(d,b,j){var g=d("ac-object"),m=d("ac-array"),c=d("ac-mvc-cid").CID,n=d("ac-event-emitter").EventEmitter;
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
}},k);b.exports=h},{"ac-array":340,"ac-mvc-cid":349,"ac-object":391}],353:[function(b,c,a){c.exports=b(347)
},{"./ac-shared-instance/SharedInstance":354}],354:[function(b,c,a){c.exports=b(348)
},{}],355:[function(b,c,a){c.exports=b(349)},{"./ac-mvc-cid/CID":356}],356:[function(b,c,a){c.exports=b(350)
},{"ac-shared-instance":353}],357:[function(b,c,a){c.exports={Model:b("./ac-mvc-model/Model")}
},{"./ac-mvc-model/Model":358}],358:[function(c,d,b){var g=c("ac-event-emitter").EventEmitter;
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
}}};d.exports=i},{"ac-mvc-cid":355,"ac-object":391}],359:[function(b,c,a){c.exports={add:b("./ac-classlist/add"),contains:b("./ac-classlist/contains"),remove:b("./ac-classlist/remove"),toggle:b("./ac-classlist/toggle")}
},{"./ac-classlist/add":360,"./ac-classlist/contains":361,"./ac-classlist/remove":363,"./ac-classlist/toggle":364}],360:[function(b,c,a){var d=b("./helpers/className");
c.exports=function f(){var h=Array.prototype.slice.call(arguments);var g=h.shift(h);
if(g.classList&&g.classList.add){g.classList.add.apply(g.classList,h)}else{h.forEach(d.add.bind(this,g))
}}},{"./helpers/className":362}],361:[function(b,d,a){var f=b("./helpers/className");
d.exports=function c(h,g){if(h.classList&&h.classList.contains){return h.classList.contains(g)
}return f.contains(h,g)}},{"./helpers/className":362}],362:[function(c,d,a){var h=function(i){return new RegExp("(\\s|^)"+i+"(\\s|$)")
};var g=function(j,i){return h(i).test(j.className)};var f=function(j,i){if(!g(j,i)){j.className+=" "+i
}};var b=function(j,i){if(g(j,i)){j.className=j.className.replace(h(i),"$1").trim()
}};d.exports={contains:g,add:f,remove:b}},{}],363:[function(c,d,b){var f=c("./helpers/className");
d.exports=function a(){var h=Array.prototype.slice.call(arguments);var g=h.shift(h);
if(g.classList&&g.classList.remove){g.classList.remove.apply(g.classList,h)}else{h.forEach(f.remove.bind(this,g))
}}},{"./helpers/className":362}],364:[function(c,d,b){var f=c("./helpers/className");
d.exports=function a(j,i,k){var h=(typeof k!=="undefined");var g;if(j.classList&&j.classList.toggle){if(h){return j.classList.toggle(i,k)
}return j.classList.toggle(i)}if(h){g=!!k}else{g=!f.contains(j,i)}if(g){f.add(j,i)
}else{f.remove(j,i)}return g}},{"./helpers/className":362}],365:[function(d,f,c){var b=d("./ac-dom-nodes/helpers/nodeTypes");
var g;var a={createDocumentFragment:d("./ac-dom-nodes/createDocumentFragment"),filterByNodeType:d("./ac-dom-nodes/filterByNodeType"),insertAfter:d("./ac-dom-nodes/insertAfter"),insertBefore:d("./ac-dom-nodes/insertBefore"),insertFirstChild:d("./ac-dom-nodes/insertFirstChild"),insertLastChild:d("./ac-dom-nodes/insertLastChild"),isComment:d("./ac-dom-nodes/isComment"),isDocument:d("./ac-dom-nodes/isDocument"),isDocumentFragment:d("./ac-dom-nodes/isDocumentFragment"),isDocumentType:d("./ac-dom-nodes/isDocumentType"),isElement:d("./ac-dom-nodes/isElement"),isNode:d("./ac-dom-nodes/isNode"),isTextNode:d("./ac-dom-nodes/isTextNode"),remove:d("./ac-dom-nodes/remove"),replace:d("./ac-dom-nodes/replace")};
for(g in b){a[g]=b[g]}f.exports=a},{"./ac-dom-nodes/createDocumentFragment":366,"./ac-dom-nodes/filterByNodeType":367,"./ac-dom-nodes/helpers/nodeTypes":369,"./ac-dom-nodes/insertAfter":371,"./ac-dom-nodes/insertBefore":372,"./ac-dom-nodes/insertFirstChild":373,"./ac-dom-nodes/insertLastChild":374,"./ac-dom-nodes/isComment":375,"./ac-dom-nodes/isDocument":376,"./ac-dom-nodes/isDocumentFragment":377,"./ac-dom-nodes/isDocumentType":378,"./ac-dom-nodes/isElement":379,"./ac-dom-nodes/isNode":380,"./ac-dom-nodes/isTextNode":381,"./ac-dom-nodes/remove":382,"./ac-dom-nodes/replace":383}],366:[function(c,d,b){d.exports=function a(g){var f=document.createDocumentFragment();
var h;if(g){h=document.createElement("div");h.innerHTML=g;while(h.firstChild){f.appendChild(h.firstChild)
}}return f}},{}],367:[function(d,f,c){var g=d("./helpers/isNodeType");var a=d("./helpers/nodeTypes").ELEMENT_NODE;
f.exports=function b(i,h){h=h||a;i=Array.prototype.slice.call(i);return i.filter(function(j){return g(j,h)
})}},{"./helpers/isNodeType":368,"./helpers/nodeTypes":369}],368:[function(b,c,a){var d=b("../isNode");
c.exports=function f(h,g){if(!d(h)){return false}if(typeof g==="number"){return(h.nodeType===g)
}return(g.indexOf(h.nodeType)!==-1)}},{"../isNode":380}],369:[function(b,c,a){c.exports={ELEMENT_NODE:1,TEXT_NODE:3,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11}
},{}],370:[function(f,c,h){var g=f("./nodeTypes");var b=f("./isNodeType");var j=[g.ELEMENT_NODE,g.TEXT_NODE,g.COMMENT_NODE,g.DOCUMENT_FRAGMENT_NODE];
var d=" must be an Element, TextNode, Comment, or Document Fragment";var m=[g.ELEMENT_NODE,g.TEXT_NODE,g.COMMENT_NODE];
var i=" must be an Element, TextNode, or Comment";var k=[g.ELEMENT_NODE,g.DOCUMENT_FRAGMENT_NODE];
var l=" must be an Element, or Document Fragment";var a=" must have a parentNode";
c.exports={parentNode:function(n,q,p,o){o=o||"target";if((n||q)&&!b(n,k)){throw new TypeError(p+": "+o+l)
}},childNode:function(n,q,p,o){o=o||"target";if(!n&&!q){return}if(!b(n,m)){throw new TypeError(p+": "+o+i)
}},insertNode:function(n,q,p,o){o=o||"node";if(!n&&!q){return}if(!b(n,j)){throw new TypeError(p+": "+o+d)
}},hasParentNode:function(n,p,o){o=o||"target";if(!n.parentNode){throw new TypeError(p+": "+o+a)
}}}},{"./isNodeType":368,"./nodeTypes":369}],371:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){f.insertNode(g,true,"insertAfter");f.childNode(h,true,"insertAfter");
f.hasParentNode(h,"insertAfter");if(!h.nextSibling){return h.parentNode.appendChild(g)
}return h.parentNode.insertBefore(g,h.nextSibling)}},{"./helpers/validate":370}],372:[function(c,d,a){var f=c("./helpers/validate");
d.exports=function b(g,h){f.insertNode(g,true,"insertBefore");f.childNode(h,true,"insertBefore");
f.hasParentNode(h,"insertBefore");return h.parentNode.insertBefore(g,h)}},{"./helpers/validate":370}],373:[function(c,d,b){var f=c("./helpers/validate");
d.exports=function a(g,h){f.insertNode(g,true,"insertFirstChild");f.parentNode(h,true,"insertFirstChild");
if(!h.firstChild){return h.appendChild(g)}return h.insertBefore(g,h.firstChild)
}},{"./helpers/validate":370}],374:[function(b,c,a){var d=b("./helpers/validate");
c.exports=function f(g,h){d.insertNode(g,true,"insertLastChild");d.parentNode(h,true,"insertLastChild");
return h.appendChild(g)}},{"./helpers/validate":370}],375:[function(c,d,a){var g=c("./helpers/isNodeType");
var f=c("./helpers/nodeTypes").COMMENT_NODE;d.exports=function b(h){return g(h,f)
}},{"./helpers/isNodeType":368,"./helpers/nodeTypes":369}],376:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").DOCUMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":368,"./helpers/nodeTypes":369}],377:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").DOCUMENT_FRAGMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":368,"./helpers/nodeTypes":369}],378:[function(b,c,a){var g=b("./helpers/isNodeType");
var f=b("./helpers/nodeTypes").DOCUMENT_TYPE_NODE;c.exports=function d(h){return g(h,f)
}},{"./helpers/isNodeType":368,"./helpers/nodeTypes":369}],379:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").ELEMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":368,"./helpers/nodeTypes":369}],380:[function(b,c,a){c.exports=function d(f){return !!(f&&f.nodeType)
}},{}],381:[function(c,d,a){var g=c("./helpers/isNodeType");var b=c("./helpers/nodeTypes").TEXT_NODE;
d.exports=function f(h){return g(h,b)}},{"./helpers/isNodeType":368,"./helpers/nodeTypes":369}],382:[function(c,d,b){var f=c("./helpers/validate");
d.exports=function a(g){f.childNode(g,true,"remove");if(!g.parentNode){return g
}return g.parentNode.removeChild(g)}},{"./helpers/validate":370}],383:[function(b,d,a){var f=b("./helpers/validate");
d.exports=function c(g,h){f.insertNode(g,true,"insertFirstChild","newNode");f.childNode(h,true,"insertFirstChild","oldNode");
f.hasParentNode(h,"insertFirstChild","oldNode");return h.parentNode.replaceChild(g,h)
}},{"./helpers/validate":370}],384:[function(b,c,a){c.exports=b(347)},{"./ac-shared-instance/SharedInstance":385}],385:[function(b,c,a){c.exports=b(348)
},{}],386:[function(b,c,a){c.exports=b(349)},{"./ac-mvc-cid/CID":387}],387:[function(b,c,a){c.exports=b(350)
},{"ac-shared-instance":384}],388:[function(b,c,a){c.exports={View:b("./ac-mvc-view/View")}
},{"./ac-mvc-view/View":389}],389:[function(d,b,g){var j=d("ac-dom-emitter").DOMEmitter;
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
},{"ac-classlist":359,"ac-dom-emitter":284,"ac-dom-nodes":365,"ac-mvc-cid":386,"ac-object":391}],390:[function(b,c,a){c.exports=b(79)
},{}],391:[function(b,c,a){c.exports=b(80)},{"./ac-object/clone":392,"./ac-object/create":393,"./ac-object/defaults":394,"./ac-object/extend":395,"./ac-object/getPrototypeOf":396,"./ac-object/isDate":397,"./ac-object/isEmpty":398,"./ac-object/isRegExp":399,"./ac-object/toQueryParameters":400}],392:[function(b,c,a){c.exports=b(81)
},{"./extend":395}],393:[function(b,c,a){c.exports=b(82)},{}],394:[function(b,c,a){c.exports=b(83)
},{"./extend":395}],395:[function(b,c,a){c.exports=b(84)},{}],396:[function(b,c,a){c.exports=b(85)
},{}],397:[function(b,c,a){c.exports=b(86)},{}],398:[function(b,c,a){c.exports=b(87)
},{}],399:[function(b,c,a){c.exports=b(88)},{}],400:[function(b,c,a){c.exports=b(89)
},{qs:390}],401:[function(b,c,a){arguments[4][27][0].apply(a,arguments)},{"./ac-browser/BrowserData":402,"./ac-browser/IE":403}],402:[function(b,c,a){var d=b("./data");
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
};c.exports=f},{"./data":404}],403:[function(b,c,a){c.exports=b(29)},{}],404:[function(b,c,a){c.exports={browser:[{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],405:[function(b,c,a){c.exports=b(254)},{"./ac-prefixer/Prefixer":406}],406:[function(b,c,a){c.exports=b(255)
},{"./Prefixer/camelCasedEvents":407}],407:[function(b,c,a){c.exports=b(256)},{}],408:[function(c,d,b){var h=c("./ac-feature/helpers/memoize");
var f=["cssPropertyAvailable","isRetina"];var g;var a={canvasAvailable:c("./ac-feature/canvasAvailable"),continuousScrollEventsAvailable:c("./ac-feature/continuousScrollEventsAvailable"),cookiesAvailable:c("./ac-feature/cookiesAvailable"),cssLinearGradientAvailable:c("./ac-feature/cssLinearGradientAvailable"),cssPropertyAvailable:c("./ac-feature/cssPropertyAvailable"),isDesktop:c("./ac-feature/isDesktop"),isHandheld:c("./ac-feature/isHandheld"),isRetina:c("./ac-feature/isRetina"),isTablet:c("./ac-feature/isTablet"),localStorageAvailable:c("./ac-feature/localStorageAvailable"),mediaElementsAvailable:c("./ac-feature/mediaElementsAvailable"),sessionStorageAvailable:c("./ac-feature/sessionStorageAvailable"),svgAvailable:c("./ac-feature/svgAvailable"),threeDTransformsAvailable:c("./ac-feature/threeDTransformsAvailable"),touchAvailable:c("./ac-feature/touchAvailable"),webGLAvailable:c("./ac-feature/webGLAvailable")};
for(g in a){if(f.indexOf(g)===-1){a[g]=h(a[g])}}d.exports=a},{"./ac-feature/canvasAvailable":409,"./ac-feature/continuousScrollEventsAvailable":410,"./ac-feature/cookiesAvailable":411,"./ac-feature/cssLinearGradientAvailable":412,"./ac-feature/cssPropertyAvailable":413,"./ac-feature/helpers/memoize":415,"./ac-feature/isDesktop":416,"./ac-feature/isHandheld":417,"./ac-feature/isRetina":418,"./ac-feature/isTablet":419,"./ac-feature/localStorageAvailable":420,"./ac-feature/mediaElementsAvailable":421,"./ac-feature/sessionStorageAvailable":422,"./ac-feature/svgAvailable":423,"./ac-feature/threeDTransformsAvailable":424,"./ac-feature/touchAvailable":425,"./ac-feature/webGLAvailable":426}],409:[function(b,c,a){var f=b("./helpers/globals");
c.exports=function d(){var g=f.getDocument();var h=g.createElement("canvas");return !!(typeof h.getContext==="function"&&h.getContext("2d"))
}},{"./helpers/globals":414}],410:[function(c,d,b){var g=c("ac-browser");var a=c("./touchAvailable");
d.exports=function f(){return(!a()||(g.os==="iOS"&&g.version>=8)||g.name==="Chrome")
}},{"./touchAvailable":425,"ac-browser":401}],411:[function(c,d,b){var f=c("./helpers/globals");
d.exports=function a(){var j=false;var g=f.getDocument();var i=f.getNavigator();
try{if("cookie" in g&&!!i.cookieEnabled){g.cookie="ac_feature_cookie=1";j=(g.cookie.indexOf("ac_feature_cookie")!==-1);
g.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}catch(h){}return j
}},{"./helpers/globals":414}],412:[function(d,f,c){var a=d("./cssPropertyAvailable");
f.exports=function b(){var g=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
return g.some(function(h){return a("background-image",h)})}},{"./cssPropertyAvailable":413}],413:[function(c,d,b){var f=c("ac-prefixer");
d.exports=function a(h,g){if(typeof g!=="undefined"){return !!f.getStyleValue(h,g)
}else{return !!f.getStyleProperty(h)}}},{"ac-prefixer":405}],414:[function(b,c,a){c.exports={getWindow:function(){return window
},getDocument:function(){return document},getNavigator:function(){return navigator
}}},{}],415:[function(b,c,a){c.exports=function d(g){var f;return function(){if(typeof f!=="undefined"){return f
}else{return f=g()}}}},{}],416:[function(d,f,b){var a=d("./touchAvailable");var g=d("./helpers/globals");
f.exports=function c(){var h=g.getWindow();return(!a()&&!h.orientation)}},{"./helpers/globals":414,"./touchAvailable":425}],417:[function(f,g,c){var d=f("./isDesktop");
var a=f("./isTablet");g.exports=function b(){return(!d()&&!a())}},{"./isDesktop":416,"./isTablet":419}],418:[function(b,c,a){var d=b("./helpers/globals");
c.exports=function f(){var g=d.getWindow();return("devicePixelRatio" in g&&g.devicePixelRatio>=1.5)
}},{"./helpers/globals":414}],419:[function(d,f,b){var c=d("./isDesktop");var g=d("./helpers/globals");
f.exports=function a(){var i=g.getWindow();var h=i.screen.width;if(i.orientation&&i.screen.height<h){h=i.screen.height
}return(!c()&&h>=600)}},{"./helpers/globals":414,"./isDesktop":416}],420:[function(c,d,a){var f=c("./helpers/globals");
d.exports=function b(){var i=f.getWindow();var h=false;try{h=!!(i.localStorage&&i.localStorage.non_existent!==null)
}catch(g){}return h}},{"./helpers/globals":414}],421:[function(b,c,a){var f=b("./helpers/globals");
c.exports=function d(){var g=f.getWindow();return("HTMLMediaElement" in g)}},{"./helpers/globals":414}],422:[function(c,d,b){var f=c("./helpers/globals");
d.exports=function a(){var i=f.getWindow();var g=false;try{if("sessionStorage" in i&&typeof i.sessionStorage.setItem==="function"){i.sessionStorage.setItem("ac_feature","test");
g=true;i.sessionStorage.removeItem("ac_feature","test")}}catch(h){}return g}},{"./helpers/globals":414}],423:[function(c,d,b){var f=c("./helpers/globals");
d.exports=function a(){var g=f.getDocument();return g.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}},{"./helpers/globals":414}],424:[function(c,d,b){var a=c("./cssPropertyAvailable");
d.exports=function f(){return(a("perspective","1px")&&a("transform","translateZ(0)"))
}},{"./cssPropertyAvailable":413}],425:[function(c,d,b){var f=c("./helpers/globals");
d.exports=function a(){var h=f.getWindow();var g=f.getDocument();return !!(("ontouchstart" in h)||h.DocumentTouch&&g instanceof h.DocumentTouch)
}},{"./helpers/globals":414}],426:[function(c,d,b){var f=c("./helpers/globals");
d.exports=function a(){var g=f.getDocument();var h=g.createElement("canvas");return !!(typeof h.getContext==="function"&&h.getContext("webgl"))
}},{"./helpers/globals":414}],427:[function(b,d,a){var c={};c.addEventListener=function(j,h,i,g){if(j.addEventListener){j.addEventListener(h,i,g)
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
};d.exports=c},{}],428:[function(d,f,c){var b=d("./utils/getBoundingClientRect");
f.exports=function a(g,i){var h=1;if(i){h=b(g).width/g.offsetWidth}return{width:g.scrollWidth*h,height:g.scrollHeight*h}
}},{"./utils/getBoundingClientRect":439}],429:[function(d,f,c){var b=d("./utils/getBoundingClientRect");
f.exports=function a(g,i){var h;if(i){h=b(g);return{width:h.width,height:h.height}
}return{width:g.offsetWidth,height:g.offsetHeight}}},{"./utils/getBoundingClientRect":439}],430:[function(g,h,f){var c=g("./getDimensions");
var d=g("./utils/getBoundingClientRect");var b=g("./getScrollX");var a=g("./getScrollY");
h.exports=function i(j,p){var l;var o;var m;var k;var n;if(p){l=d(j);o=b();m=a();
return{top:l.top+m,right:l.right+o,bottom:l.bottom+m,left:l.left+o}}k=c(j,p);l={top:j.offsetTop,left:j.offsetLeft,width:k.width,height:k.height};
while(j=j.offsetParent){l.top+=j.offsetTop;l.left+=j.offsetLeft}return{top:l.top,right:l.left+l.width,bottom:l.top+l.height,left:l.left}
}},{"./getDimensions":429,"./getScrollX":434,"./getScrollY":435,"./utils/getBoundingClientRect":439}],431:[function(c,f,b){var a=c("./getDimensions");
var g=c("./getPixelsInViewport");f.exports=function d(j,k){var i=g(j,k);var h=a(j,k).height;
return(i/h)}},{"./getDimensions":429,"./getPixelsInViewport":432}],432:[function(c,d,b){var a=c("./getViewportPosition");
d.exports=function f(h,k){var j=document.documentElement.clientHeight;var g=a(h,k);
var i;if(g.top>=j||g.bottom<=0){return 0}i=(g.bottom-g.top);if(g.top<0){i+=g.top
}if(g.bottom>j){i-=g.bottom-j}return i}},{"./getViewportPosition":436}],433:[function(d,f,c){var a=d("./getDimensions");
var b=d("./utils/getBoundingClientRect");f.exports=function g(i,l){var k;var h;
var j;if(l){k=b(i);if(i.offsetParent){h=b(i.offsetParent);k.top-=h.top;k.left-=h.left
}}else{j=a(i,l);k={top:i.offsetTop,left:i.offsetLeft,width:j.width,height:j.height}
}return{top:k.top,right:k.left+k.width,bottom:k.top+k.height,left:k.left}}},{"./getDimensions":429,"./utils/getBoundingClientRect":439}],434:[function(c,d,b){d.exports=function a(f){var g;
f=f||window;if(f===window){g=window.pageXOffset;if(!g){f=document.documentElement||document.body.parentNode||document.body
}else{return g}}return f.scrollLeft}},{}],435:[function(c,d,b){d.exports=function a(f){var g;
f=f||window;if(f===window){g=window.pageYOffset;if(!g){f=document.documentElement||document.body.parentNode||document.body
}else{return g}}return f.scrollTop}},{}],436:[function(g,h,f){var i=g("./getPagePosition");
var d=g("./utils/getBoundingClientRect");var c=g("./getScrollX");var b=g("./getScrollY");
h.exports=function a(k,n){var j;var m;var l;if(n){j=d(k);return{top:j.top,right:j.right,bottom:j.bottom,left:j.left}
}j=i(k);m=c();l=b();return{top:j.top-l,right:j.right-m,bottom:j.bottom-l,left:j.left-m}
}},{"./getPagePosition":430,"./getScrollX":434,"./getScrollY":435,"./utils/getBoundingClientRect":439}],437:[function(b,c,a){c.exports={getContentDimensions:b("./getContentDimensions"),getDimensions:b("./getDimensions"),getPagePosition:b("./getPagePosition"),getPercentInViewport:b("./getPercentInViewport"),getPixelsInViewport:b("./getPixelsInViewport"),getPosition:b("./getPosition"),getScrollX:b("./getScrollX"),getScrollY:b("./getScrollY"),getViewportPosition:b("./getViewportPosition"),isInViewport:b("./isInViewport")}
},{"./getContentDimensions":428,"./getDimensions":429,"./getPagePosition":430,"./getPercentInViewport":431,"./getPixelsInViewport":432,"./getPosition":433,"./getScrollX":434,"./getScrollY":435,"./getViewportPosition":436,"./isInViewport":438}],438:[function(b,d,a){var g=b("./getPixelsInViewport");
var c=b("./getPercentInViewport");d.exports=function f(j,k,h){var i;h=h||0;if(typeof h==="string"&&h.slice(-2)==="px"){h=parseInt(h,10);
i=g(j,k)}else{i=c(j,k)}return(i>0&&i>=h)}},{"./getPercentInViewport":431,"./getPixelsInViewport":432}],439:[function(c,d,b){d.exports=function a(f){var g=f.getBoundingClientRect();
return{top:g.top,right:g.right,bottom:g.bottom,left:g.left,width:g.width||g.right-g.left,height:g.height||g.bottom-g.top}
}},{}],440:[function(b,c,a){arguments[4][265][0].apply(a,arguments)},{"./ac-dom-traversal/ancestor":441,"./ac-dom-traversal/ancestors":442,"./ac-dom-traversal/children":443,"./ac-dom-traversal/filterBySelector":444,"./ac-dom-traversal/firstChild":445,"./ac-dom-traversal/lastChild":448,"./ac-dom-traversal/matchesSelector":449,"./ac-dom-traversal/nextSibling":450,"./ac-dom-traversal/nextSiblings":451,"./ac-dom-traversal/previousSibling":452,"./ac-dom-traversal/previousSiblings":453,"./ac-dom-traversal/querySelector":454,"./ac-dom-traversal/querySelectorAll":455,"./ac-dom-traversal/shims/ie":456,"./ac-dom-traversal/siblings":457}],441:[function(d,g,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");g.exports=function f(k,j,i){h.childNode(k,true,"ancestors");
h.selector(j,false,"ancestors");if(i&&a.isElement(k)&&(!j||b(k,j))){return k}if(k!==document.body){while((k=k.parentNode)&&a.isElement(k)){if(!j||b(k,j)){return k
}if(k===document.body){break}}}return null}},{"./helpers/validate":447,"./matchesSelector":449,"ac-dom-nodes":313}],442:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(l,j,i){var k=[];
h.childNode(l,true,"ancestors");h.selector(j,false,"ancestors");if(i&&a.isElement(l)&&(!j||b(l,j))){k.push(l)
}if(l!==document.body){while((l=l.parentNode)&&a.isElement(l)){if(!j||b(l,j)){k.push(l)
}if(l===document.body){break}}}return k}},{"./helpers/validate":447,"./matchesSelector":449,"ac-dom-nodes":313}],443:[function(b,c,a){arguments[4][268][0].apply(a,arguments)
},{"./filterBySelector":444,"./helpers/validate":447,"ac-dom-nodes":313}],444:[function(b,c,a){arguments[4][269][0].apply(a,arguments)
},{"./helpers/validate":447,"./matchesSelector":449}],445:[function(b,c,a){c.exports=b(270)
},{"./children":443,"./helpers/validate":447}],446:[function(b,c,a){c.exports=b(271)
},{}],447:[function(b,c,a){c.exports=b(272)},{"ac-dom-nodes":313}],448:[function(b,c,a){c.exports=b(273)
},{"./children":443,"./helpers/validate":447}],449:[function(f,g,d){var b=f("ac-dom-nodes");
var a=f("./helpers/nativeMatches");var i=f("./helpers/validate");var h=f("./vendor/sizzle/sizzle");
g.exports=function c(k,j){i.selector(j,true,"matchesSelector");if(!b.isElement(k)){return false
}if(!a){return h.matchesSelector(k,j)}return a.call(k,j)}},{"./helpers/nativeMatches":446,"./helpers/validate":447,"./vendor/sizzle/sizzle":458,"ac-dom-nodes":313}],450:[function(b,c,a){arguments[4][275][0].apply(a,arguments)
},{"./helpers/validate":447,"./matchesSelector":449,"ac-dom-nodes":313}],451:[function(b,c,a){arguments[4][276][0].apply(a,arguments)
},{"./helpers/validate":447,"./matchesSelector":449,"ac-dom-nodes":313}],452:[function(b,c,a){arguments[4][277][0].apply(a,arguments)
},{"./helpers/validate":447,"./matchesSelector":449,"ac-dom-nodes":313}],453:[function(b,c,a){arguments[4][278][0].apply(a,arguments)
},{"./helpers/validate":447,"./matchesSelector":449,"ac-dom-nodes":313}],454:[function(b,c,a){c.exports=b(279)
},{"./helpers/validate":447}],455:[function(b,c,a){c.exports=b(280)},{"./helpers/validate":447}],456:[function(c,d,b){var f=c("../vendor/sizzle/sizzle");
var a=c("ac-dom-nodes");var g=c("../helpers/validate");d.exports=function(i,h){if(h||!("querySelectorAll" in document)){i.querySelectorAll=function(j,l){var k;
var m;l=l||document;g.parentNode(l,true,"querySelectorAll","context");g.selector(j,true,"querySelectorAll");
if(a.isDocumentFragment(l)){k=i.children(l);m=[];k.forEach(function(o){var n;if(f.matchesSelector(o,j)){m.push(o)
}n=f(j,o);if(n.length){m=m.concat(n)}});return m}return f(j,l)};i.querySelector=function(k,l){var j;
l=l||document;g.parentNode(l,true,"querySelector","context");g.selector(k,true,"querySelector");
j=i.querySelectorAll(k,l);return j.length?j[0]:null}}}},{"../helpers/validate":447,"../vendor/sizzle/sizzle":458,"ac-dom-nodes":313}],457:[function(b,c,a){c.exports=b(282)
},{"./children":443,"./helpers/validate":447}],458:[function(b,c,a){c.exports=b(70)
},{}],459:[function(b,c,a){c.exports.Slider=b("./ac-slider/Slider")},{"./ac-slider/Slider":460}],460:[function(f,d,h){var a=f("ac-dom-traversal");
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
},{"ac-dom-events":427,"ac-dom-metrics":437,"ac-dom-traversal":440}],461:[function(b,c,a){c.exports={localization:b("./ac-video-localization/localization")}
},{"./ac-video-localization/localization":462}],462:[function(b,c,a){var h=b("./translations");
var g="/global/ac_media_player/scripts/ac_media_languages/";var f=document.getElementsByTagName("html")[0];
var d=b("ac-mvc-model").Model;var i={create:function(k){k=k||this.getLang();var j=this.getRequestPath(k);
return this.sendRequest(j)},getRequestPath:function(j){return g+this.getTranslationFileName(j)
},getLang:function(){var j=f.getAttribute("lang");var k;if(!j){k="en-us"}else{switch(j.toLowerCase()){case"es-418":k="es-LA";
break;case"pt":k="pt-BR";break;default:k=j;break}}return k},getTranslationFileName:function(j){var l=j.toLowerCase().split("-")[0];
var k=h[j]||false;if(!k){k=h[l]||h.en}return k},sendRequest:function(j){return new Promise(function(m,l){var k=new XMLHttpRequest();
k.onreadystatechange=function(){if(k.readyState===4){if(k.status>=200&&k.status<300){try{var n=JSON.parse(k.responseText);
for(var p in n){n[p].replace(/<br\s{0,}\/>/g,"")}m(new d(n))}catch(o){l(o)}}else{l(k)
}}};k.open("GET",j);k.send()})}};c.exports=i},{"./translations":463,"ac-mvc-model":357}],463:[function(b,c,a){c.exports={"bg-BG":"bg-BG.json","cs-CZ":"cs-CZ.json","el-GR":"el-GR.json","de-AT":"de-AT.json","de-CH":"de-CH.json","de-DE":"de-DE.json","de-LI":"de-LI.json","da-DK":"da-DK.json",en:"en.json","en-US":"en-US.json","en-AP":"en-AP.json","en-CA":"en-CA.json","en-GB":"en-GB.json","en-HK":"en-HK.json","en-IE":"en-IE.json","en-IN":"en-IN.json","en-KR":"en-KR.json","en-AU":"en-AU.json","en-NZ":"en-NZ.json","en-SG":"en-SG.json","en-ZA":"en-ZA.json",es:"es.json","es-LA":"es-LA.json","es-MX":"es-MX.json","es-ES":"es-ES.json","et-EE":"et-EE.json","fi-FI":"fi-FI.json",fr:"fr.json","fr-BE":"fr-BE.json","fr-CA":"fr-CA.json","fr-CH":"fr-CH.json","fr-FR":"fr-FR.json","hr-HR":"hr-HR.json","hu-HU":"hu-HU.json","it-IT":"it-IT.json",ja:"ja.json","ja-JP":"ja-JP.json","ko-KR":"ko-KR.json","lt-LT":"lt-LT.json","lv-LV":"lv-LV.json","nl-BE":"nl-BE.json","nl-NL":"nl-NL.json","no-NO":"no-NO.json","pl-PL":"pl-PL.json",pt:"pt.json","pt-BR":"pt-BR.json","pt-PT":"pt-PT.json","ro-RO":"ro-RO.json","ru-RU":"ru-RU.json","sk-SK":"sk-SK.json","sv-SE":"sv-SE.json","tr-TR":"tr-TR.json",zh:"zh.json","zh-CN":"zh-CN.json","zh-HK":"zh-HK.json","zh-TW":"zh-TW.json"}
},{}],464:[function(c,f,b){var h=c("./view");var g=c("./model");var d=c("./elements/element");
var a={create:function(j,l){j=j||{};l=l||{};j.elementClassPrefix=j.elementClassPrefix||"controls";
l.elementClassPrefix=j.elementClassPrefix;var k=this.Model(l);var i=this.View(Object.assign({},j,{model:k}));
i.initialize();return i},Model:g,View:h,element:d};f.exports=a},{"./elements/element":467,"./model":485,"./view":487}],465:[function(d,g,b){var c=d("ac-classlist");
var f=d("./element");var a=f.newType({className:"thirty-seconds-back-button",events:[{type:"click",callback:"thirySecondsBack"}],thirySecondsBack:function(){var i=this.player.getCurrentTime();
var h=i-30;this.player.setCurrentTime((h<0)?0:h)}});g.exports=a},{"./element":467,"ac-classlist":247}],466:[function(c,f,b){var d=c("./element");
var a=d.newType({className:"elapsed-time",_initialize:function(){this.options.model.on("change:elapsedTime",this._setElapsedTime,this)
},_setElapsedTime:function(g){this.el.innerHTML=g.value||g}});f.exports=a},{"./element":467}],467:[function(b,d,a){var c={className:"",create:function(h,g){var f=Object.create(this);
f.el=h;f.options=g;f.player=g.player;f._initialize();return f},events:[],newType:function(f){var g=Object.assign({},this,f);
return g},setElementAttributes:function(){this.elementAttributeString.forEach(function(f){var g;
if(typeof f==="string"){g=this._getLocalizationAttribute(f);this._setAttributeText(g)
}else{if(this[f.condition]()){g=this._getLocalizationAttribute(f.string);this._setAttributeText(g)
}}},this)},_getLocalizationAttribute:function(f){return this.options.model.get(f)
},_initialize:function(){this.elementAttributeString=this.elementAttributeString||[];
this.setElementAttributes()},_setAttributeText:function(f){["value","aria-label"].forEach(function(g){this.el.setAttribute(g,f)
},this)}};d.exports=c},{}],468:[function(b,a,d){var c=b("ac-classlist");var g=b("ac-fullscreen");
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
a.exports=h},{"./element":467,"ac-classlist":247,"ac-feature":408,"ac-fullscreen":99}],469:[function(b,d,a){var c=b("./element");
var f=c.newType({className:"max-volume-button",events:[{type:"click",callback:"maxVolume"}],maxVolume:function(){this.options.player.setMuted(false);
this.options.player.setVolume(1)}});d.exports=f},{"./element":467}],470:[function(c,f,b){var d=c("./element");
var a=d.newType({className:"min-volume-button",events:[{type:"click",callback:"minVolume"}],minVolume:function(){this.options.player.setMuted(false);
this.options.player.setVolume(0)}});f.exports=a},{"./element":467}],471:[function(c,f,b){var d=c("./element");
var a=d.newType({className:"mute-volume-button",events:[{type:"click",callback:"mute"}],mute:function(){this.options.player.setMuted(true)
}});f.exports=a},{"./element":467}],472:[function(b,d,a){var c=b("./element");var f=c.newType({className:"toggle-mute-volume-button",events:[{type:"click",callback:"toggleMutedVolume"}],toggleMutedVolume:function(){var g=this.options.player.getMuted()?false:true;
this.options.player.setMuted(g)}});d.exports=f},{"./element":467}],473:[function(b,d,a){var c=b("./element");
var f=c.newType({className:"pause-button",events:[{type:"click",callback:"pause"}],pause:function(){this.options.player.pause()
}});d.exports=f},{"./element":467}],474:[function(b,d,a){var c=b("./element");var f=c.newType({className:"play-button",events:[{type:"click",callback:"play"}],play:function(){this.options.player.play()
}});d.exports=f},{"./element":467}],475:[function(c,f,a){var b=c("ac-classlist");
var d=c("./element");var g=d.newType({className:"play-pause-button",events:[{type:"click",callback:"playPauseToggle"}],elementAttributeString:[{condition:"playerIsPlaying",string:"pause"},{condition:"playerIsPaused",string:"play"}],playerIsPlaying:function(){return !this.player.getPaused()
},playerIsPaused:function(){return this.player.getPaused()},playPauseToggle:function(){if(this.player.getPaused()){this.player.play()
}else{this.player.pause()}},_addEventListeners:function(){this.player.on("play pause",this._handleStateChange,this)
},_handleStateChange:function(){this._toggleIsPlayingClass();this.setElementAttributes()
},_initialize:function(){d._initialize.call(this);this._addEventListeners();this._handleStateChange()
},_toggleIsPlayingClass:function(){var h=this.player.getPaused()?"remove":"add";
b[h](this.el,"is-playing")}});f.exports=g},{"./element":467,"ac-classlist":247}],476:[function(f,d,i){var j=f("./element");
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
}},b,c));d.exports=g},{"../mixins/cursor-pointer":483,"../mixins/get-model-attribute":484,"./element":467,"ac-classlist":247,"ac-dom-events":289,"ac-dom-traversal":42,"ac-slider":459}],477:[function(c,g,a){var f=c("./element");
var b=c("../mixins/get-model-attribute");var d=f.newType(Object.assign({},{className:"remaining-time",_bindUpdateRemainingTimeIndicator:function(){return this._updateRemainingTimeIndicator.bind(this)
},_initialize:function(){this._updateRemainingTimeIndicator=this._bindUpdateRemainingTimeIndicator();
this.options.model.on("change:remainingTime",this._updateRemainingTimeIndicator,this);
this.getModelAttribute("remainingTime").then(this._updateRemainingTimeIndicator)
},_updateRemainingTimeIndicator:function(h){this.el.innerHTML=h.value||h}},b));
g.exports=d},{"../mixins/get-model-attribute":484,"./element":467}],478:[function(c,d,b){var a=c("./text-tracks");
var f=a.newType({className:"text-tracks-off-button",events:[{type:"click",callback:"textTracksOff"}],elementAttributeString:["captionsturnedoff"]});
d.exports=f},{"./text-tracks":481}],479:[function(d,f,b){var a=d("./text-tracks");
var c=a.newType({className:"text-tracks-on-button",events:[{type:"click",callback:"textTracksOn"}],elementAttributeString:["captionsturnedon"]});
f.exports=c},{"./text-tracks":481}],480:[function(d,f,b){var c=d("ac-classlist");
var a=d("./text-tracks");var g=a.newType({className:"text-tracks-toggle-button",events:[{type:"click",callback:"textTracksToggle"}],textTracksToggle:function(){var h=this._getTextTrackModeAndIndex();
var i=h.get("mode");if(i==="showing"){this.textTracksOff()}else{this.textTracksOn()
}},elementAttributeString:[{condition:"textTracksAreShowing",string:"captionsturnedoff"},{condition:"textTracksAreDisabled",string:"captionsturnedon"}],textTracksAreShowing:function(){return this.player.getVisibleTextTracks().models.length>0
},textTracksAreDisabled:function(){return this.player.getVisibleTextTracks().models.length===0
},_addEventListeners:function(){a._addEventListeners.call(this);this.player.on("texttrackshow texttrackhide",this.setElementAttributes,this)
}});f.exports=g},{"./text-tracks":481,"ac-classlist":247}],481:[function(f,h,c){var d=f("ac-classlist");
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
this[k]()}});h.exports=b},{"./element":467,"ac-classlist":247}],482:[function(f,d,h){var i=f("./element");
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
}}},b,c));d.exports=l},{"../mixins/cursor-pointer":483,"../mixins/get-model-attribute":484,"./element":467,"ac-classlist":247,"ac-dom-events":289,"ac-dom-traversal":42,"ac-slider":459}],483:[function(c,d,a){var b=c("ac-classlist");
var f=c("ac-dom-events");var g="cursor-pointer";d.exports={disableForcedCursorPointer:function(){b.remove(document.body,g);
this.onSelectStartResumeDefault()},forceCursorPointer:function(){b.add(document.body,g);
this.onSelectStartPreventDefault()},onSelectStartResumeDefault:function(){f.removeEventListener(document,"selectstart",this.preventDefault)
},onSelectStartPreventDefault:function(){f.addEventListener(document,"selectstart",this.preventDefault)
},preventDefault:function(h){f.preventDefault(h)}}},{"ac-classlist":247,"ac-dom-events":289}],484:[function(b,c,a){c.exports={getModelAttribute:function(d){return new Promise(function(g,f){if(this.options.model.has(d)){g(this.options.model.get(d))
}else{this.options.model.once("change:"+d,function(h){g(h.value)},this)}}.bind(this))
}}},{}],485:[function(c,d,a){var b=c("ac-mvc-model").Model;var h=c("ac-video-localization").localization;
var g=function(i){if(!(this instanceof g)){return new g(i)}b.apply(this,arguments);
this.initialize()};g.prototype=Object.create(b.prototype);var f=g.prototype;Object.assign(f,{defaultAttributes:{backthirtyseconds:"Back 30 Seconds",playpause:"Play/Pause",play:"Play",pause:"Pause",togglemutevolume:"Toggle Mute Volume",mutevolume:"Mute Volume",minvolume:"Min Volume",adjustvolume:"Adjust Volume",fastreverse:"Fast Reverse",fastforward:"Fast Forward",fullvolume:"Full Volume",fullscreen:"Full Screen",captionscontrol:"Closed Captions",captionsturnedon:"Closed Captions On",captionsturnedoff:"Closed Captions Off",subtitlescontrol:"Subtitles",subtitlesturnedon:"Subtitles On",subtitlesturnedoff:"Subtitles Off",sizescontrol:"Video Size",downloadcontrol:"Download Video",small:"Small",medium:"Medium",large:"Large",hd:"HD",ipod:"iPod/iPhone",mb:"MB",gb:"GB",tb:"TB",downloadquicktimetitle:"Get QuickTime.",downloadquicktimetext:"Download QuickTime to view this video. QuickTime is free for Mac + PC.",downloadquicktimebutton:"Download",downloadquicktimeurl:"https://www.apple.com/quicktime/download/",elapsed:"elapsed",remaining:"remaining"},getLocalizationPromise:function(){return h.create()
},initialize:function(){this.localize=this._bindLocalize();this.getLocalizationPromise().then(this.localize)
},localize:function(i){this.set(i.attributes);this.trigger("change:localization")
},_bindLocalize:function(){return this.localize.bind(this)}});d.exports=g},{"ac-mvc-model":357,"ac-video-localization":461}],486:[function(c,d,a){var b=c("ac-string");
var f={addLeadingZero:function(h,g){g=g||2;if(h<10||g>2){h=String(h);while(h.length<g){h="0"+h
}}return h},formatTime:function(j,g){if(isNaN(j)){return"00:00"}j=this.splitTime(Math.floor(j),function(k){return this.addLeadingZero(k,g)
}.bind(this));var h="{PN}{minutes}:{seconds}";var i=b.supplant(h,{PN:j.negativeModifier,minutes:j.minutes,seconds:j.seconds});
return i},splitTime:function(j,g){g=g||function(k){return k};var i={negativeModifier:"",minutes:0,seconds:0};
if(isNaN(j)){return i}i.negativeModifier=(j<0)?"-":"";j=Math.abs(j);i.minutes=Math.floor(j/60);
i.seconds=(j%60);for(var h in i){if(typeof i[h]!=="number"){continue}i[h]=g(i[h])
}return i}};d.exports=f},{"ac-string":211}],487:[function(g,d,j){var b=g("ac-dom-traversal");
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
this.on(n.type,q,r,p)}}});d.exports=c},{"./elements/back-30-seconds-button":465,"./elements/elapsed-time-indicator":466,"./elements/element":467,"./elements/full-screen-button":468,"./elements/max-volume-button":469,"./elements/min-volume-button":470,"./elements/mute-button":471,"./elements/mute-toggle-button":472,"./elements/pause-button":473,"./elements/play-button":474,"./elements/play-pause-button":475,"./elements/progress-indicator":476,"./elements/remaining-time-indicator":477,"./elements/text-tracks":481,"./elements/text-tracks-off-button":478,"./elements/text-tracks-on-button":479,"./elements/text-tracks-toggle-button":480,"./elements/volume-level-indicator":482,"./time":486,"ac-classlist":247,"ac-dom-traversal":42,"ac-mvc-view":388,"ac-string":211}],488:[function(b,c,a){c.exports={path:b("./ac-path/path")}
},{"./ac-path/path":489}],489:[function(b,c,a){function d(f){return d.parse(f)}d.basename=function(g,f){d._assertStr(g);
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
}};c.exports=d},{}],490:[function(b,c,a){c.exports={cname:b("./ac-cname/cname")}
},{"./ac-cname/cname":491}],491:[function(c,d,a){var f=c("ac-path").path;function b(g){return b.addPrefix(g)
}b._prefix=(function(){var g="/global/elements/blank.gif";return g.replace(/global\/.*/,"")
}());b.addPrefix=function(g){if(f.isAbsolute(g)){return g}b._assertRootRelative(g);
g=b._prefix+g.replace(/^\//,"");g=g.replace(/(^.+)(\/105\/)/,"$1/");return g};b.formatUrl=function(j,g,l,k){var i=f.format({dirname:j,filename:g,extname:l},k);
if(f.isAbsolute(i)){return i}b._assertRootRelative(j);var h=b.addPrefix(i);return h
};b._assertRootRelative=function(g){if(!f.isRootRelative(g)){throw new URIError("Only root-relative paths are currently supported")
}};d.exports=b},{"ac-path":488}],492:[function(b,c,a){var g=b("./helpers/globals");
var f=b("ac-function/once");var d=function(){var h=g.getDocument();var i=h.createElement("canvas");
return !!(typeof i.getContext==="function"&&i.getContext("2d"))};c.exports=f(d);
c.exports.original=d},{"./helpers/globals":500,"ac-function/once":514}],493:[function(c,d,b){var h=c("ac-browser");
var a=c("./touchAvailable").original;var f=c("ac-function/once");function g(){return(!a()||(h.os==="iOS"&&h.version>=8)||h.name==="Chrome")
}d.exports=f(g);d.exports.original=g},{"./touchAvailable":530,"ac-browser":509,"ac-function/once":514}],494:[function(c,d,b){var g=c("./helpers/globals");
var f=c("ac-function/once");function a(){var k=false;var h=g.getDocument();var j=g.getNavigator();
try{if("cookie" in h&&!!j.cookieEnabled){h.cookie="ac_feature_cookie=1";k=(h.cookie.indexOf("ac_feature_cookie")!==-1);
h.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}catch(i){}return k
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":500,"ac-function/once":514}],495:[function(c,d,b){var g=c("ac-prefixer/getStyleValue");
var f=c("ac-function/once");function a(){var h=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
return h.some(function(i){return !!g("background-image",i)})}d.exports=f(a);d.exports.original=a
},{"ac-function/once":514,"ac-prefixer/getStyleValue":518}],496:[function(c,d,b){var g=c("ac-prefixer/getStyleValue");
var f=c("ac-prefixer/getStyleProperty");var h=c("ac-function/memoize");function a(j,i){if(typeof i!=="undefined"){return !!g(j,i)
}else{return !!f(j)}}d.exports=h(a);d.exports.original=a},{"ac-function/memoize":513,"ac-prefixer/getStyleProperty":517,"ac-prefixer/getStyleValue":518}],497:[function(b,c,a){var f=b("ac-prefixer/getStyleValue");
var d=b("ac-function/once");function g(){return !!f("margin","1vw 1vh")}c.exports=d(g);
c.exports.original=g},{"ac-function/once":514,"ac-prefixer/getStyleValue":518}],498:[function(b,d,a){var f=b("./helpers/globals");
var g=b("ac-function/memoize");function c(h,j){var i=f.getDocument();var k;j=j||"div";
k=i.createElement(j);return(h in k)}d.exports=g(c);d.exports.original=c},{"./helpers/globals":500,"ac-function/memoize":513}],499:[function(c,f,b){var a=c("ac-prefixer/getEventType");
var g=c("ac-function/memoize");function d(i,h){return !!a(i,h)}f.exports=g(d);f.exports.original=d
},{"ac-function/memoize":513,"ac-prefixer/getEventType":516}],500:[function(b,c,a){c.exports=b(414)
},{}],501:[function(b,c,a){c.exports={canvasAvailable:b("./canvasAvailable"),continuousScrollEventsAvailable:b("./continuousScrollEventsAvailable"),cookiesAvailable:b("./cookiesAvailable"),cssLinearGradientAvailable:b("./cssLinearGradientAvailable"),cssPropertyAvailable:b("./cssPropertyAvailable"),cssViewportUnitsAvailable:b("./cssViewportUnitsAvailable"),elementAttributeAvailable:b("./elementAttributeAvailable"),eventTypeAvailable:b("./eventTypeAvailable"),isDesktop:b("./isDesktop"),isHandheld:b("./isHandheld"),isRetina:b("./isRetina"),isTablet:b("./isTablet"),localStorageAvailable:b("./localStorageAvailable"),mediaElementsAvailable:b("./mediaElementsAvailable"),mediaQueriesAvailable:b("./mediaQueriesAvailable"),sessionStorageAvailable:b("./sessionStorageAvailable"),svgAvailable:b("./svgAvailable"),threeDTransformsAvailable:b("./threeDTransformsAvailable"),touchAvailable:b("./touchAvailable"),webGLAvailable:b("./webGLAvailable")}
},{"./canvasAvailable":492,"./continuousScrollEventsAvailable":493,"./cookiesAvailable":494,"./cssLinearGradientAvailable":495,"./cssPropertyAvailable":496,"./cssViewportUnitsAvailable":497,"./elementAttributeAvailable":498,"./eventTypeAvailable":499,"./isDesktop":502,"./isHandheld":503,"./isRetina":504,"./isTablet":505,"./localStorageAvailable":506,"./mediaElementsAvailable":507,"./mediaQueriesAvailable":508,"./sessionStorageAvailable":527,"./svgAvailable":528,"./threeDTransformsAvailable":529,"./touchAvailable":530,"./webGLAvailable":531}],502:[function(d,f,b){var a=d("./touchAvailable").original;
var h=d("./helpers/globals");var g=d("ac-function/once");function c(){var i=h.getWindow();
return(!a()&&!i.orientation)}f.exports=g(c);f.exports.original=c},{"./helpers/globals":500,"./touchAvailable":530,"ac-function/once":514}],503:[function(f,g,c){var d=f("./isDesktop").original;
var a=f("./isTablet").original;var h=f("ac-function/once");function b(){return(!d()&&!a())
}g.exports=h(b);g.exports.original=b},{"./isDesktop":502,"./isTablet":505,"ac-function/once":514}],504:[function(b,c,a){var d=b("./helpers/globals");
c.exports=function f(){var g=d.getWindow();return("devicePixelRatio" in g&&g.devicePixelRatio>=1.5)
}},{"./helpers/globals":500}],505:[function(f,g,c){var d=f("./isDesktop").original;
var i=f("./helpers/globals");var h=f("ac-function/once");var b=600;function a(){var k=i.getWindow();
var j=k.screen.width;if(k.orientation&&k.screen.height<j){j=k.screen.height}return(!d()&&j>=b)
}g.exports=h(a);g.exports.original=a},{"./helpers/globals":500,"./isDesktop":502,"ac-function/once":514}],506:[function(c,d,a){var g=c("./helpers/globals");
var f=c("ac-function/once");function b(){var j=g.getWindow();var i=false;try{i=!!(j.localStorage&&j.localStorage.non_existent!==null)
}catch(h){}return i}d.exports=f(b);d.exports.original=b},{"./helpers/globals":500,"ac-function/once":514}],507:[function(b,c,a){var g=b("./helpers/globals");
var d=b("ac-function/once");function f(){var h=g.getWindow();return("HTMLMediaElement" in h)
}c.exports=d(f);c.exports.original=f},{"./helpers/globals":500,"ac-function/once":514}],508:[function(c,d,b){c("ac-polyfills/matchMedia");
var g=c("./helpers/globals");var f=c("ac-function/once");function a(){var i=g.getWindow();
var h=i.matchMedia("only all");return !!(h&&h.matches)}d.exports=f(a);d.exports.original=a
},{"./helpers/globals":500,"ac-function/once":514,"ac-polyfills/matchMedia":515}],509:[function(b,c,a){arguments[4][27][0].apply(a,arguments)
},{"./ac-browser/BrowserData":510,"./ac-browser/IE":511}],510:[function(b,c,a){c.exports=b(402)
},{"./data":512}],511:[function(b,c,a){c.exports=b(29)},{}],512:[function(b,c,a){c.exports=b(404)
},{}],513:[function(c,d,b){var a=function(){var h="";var g;for(g=0;g<arguments.length;
g++){if(g>0){h+=","}h+=arguments[g]}return h};d.exports=function f(i,h){h=h||a;
var g=function(){var j=arguments;var k=h.apply(this,j);if(!(k in g.cache)){g.cache[k]=i.apply(this,j)
}return g.cache[k]};g.cache={};return g}},{}],514:[function(b,c,a){c.exports=function d(g){var f;
return function(){if(typeof f==="undefined"){f=g.apply(this,arguments)}return f
}}},{}],515:[function(b,c,a){window.matchMedia=window.matchMedia||(function(i,j){var g,d=i.documentElement,f=d.firstElementChild||d.firstChild,h=i.createElement("body"),k=i.createElement("div");
k.id="mq-test-1";k.style.cssText="position:absolute;top:-100em";h.style.background="none";
h.appendChild(k);return function(l){k.innerHTML='&shy;<style media="'+l+'"> #mq-test-1 { width:42px; }</style>';
d.insertBefore(h,f);g=k.offsetWidth===42;d.removeChild(h);return{matches:g,media:l}
}}(document))},{}],516:[function(b,c,a){c.exports=b(93)},{"./shared/camelCasedEventTypes":519,"./shared/prefixHelper":521,"./utils/eventTypeAvailable":524}],517:[function(f,d,h){var a=f("./shared/stylePropertyCache");
var i=f("./shared/getStyleTestElement");var b=f("./utils/toCSS");var k=f("./utils/toDOM");
var j=f("./shared/prefixHelper");var c=function(o,l){var m=b(o);var n=(l===false)?false:b(l);
a[o]=a[l]=a[m]=a[n]={dom:l,css:n};return l};d.exports=function g(p){var n;var l;
var o;var m;p+="";if(p in a){return a[p].dom}o=i();p=k(p);l=p.charAt(0).toUpperCase()+p.substring(1);
if(p==="filter"){n=["WebkitFilter","filter"]}else{n=(p+" "+j.dom.join(l+" ")+l).split(" ")
}for(m=0;m<n.length;m++){if(typeof o.style[n[m]]!=="undefined"){if(m!==0){j.reduce(m-1)
}return c(p,n[m])}}return c(p,false)}},{"./shared/getStyleTestElement":520,"./shared/prefixHelper":521,"./shared/stylePropertyCache":522,"./utils/toCSS":525,"./utils/toDOM":526}],518:[function(d,b,h){var f=d("./getStyleProperty");
var k=d("./shared/styleValueAvailable");var j=d("./shared/prefixHelper");var a=d("./shared/stylePropertyCache");
var i={};var l=/(\([^\)]+\))/gi;var g=/([^ ,;\(]+(\([^\)]+\))?)/gi;b.exports=function c(o,n){var m;
n+="";o=f(o);if(!o){return false}if(k(o,n)){return n}m=a[o].css;n=n.replace(g,function(q){var p;
var t;var s;var r;if(q[0]==="#"||!isNaN(q[0])){return q}t=q.replace(l,"");s=m+":"+t;
if(s in i){if(i[s]===false){return""}return q.replace(t,i[s])}p=j.css.map(function(u){return u+q
});p=[q].concat(p);for(r=0;r<p.length;r++){if(k(o,p[r])){if(r!==0){j.reduce(r-1)
}i[s]=p[r].replace(l,"");return p[r]}}i[s]=false;return""});n=n.trim();return(n==="")?false:n
}},{"./getStyleProperty":517,"./shared/prefixHelper":521,"./shared/stylePropertyCache":522,"./shared/styleValueAvailable":523}],519:[function(b,c,a){c.exports=b(94)
},{}],520:[function(c,d,b){var f;d.exports=function a(){if(!f){f=document.createElement("_")
}else{f.style.cssText="";f.removeAttribute("style")}return f};d.exports.resetElement=function(){f=null
}},{}],521:[function(b,c,a){c.exports=b(95)},{}],522:[function(b,c,a){c.exports={}
},{}],523:[function(c,b,d){var a=c("./stylePropertyCache");var f=c("./getStyleTestElement");
var i=false;var k;var j;var g=function(){var l;if(!i){i=true;k=("CSS" in window&&"supports" in window.CSS);
j=false;l=f();try{l.style.width="invalid"}catch(m){j=true}}};b.exports=function h(o,n){var m;
var l;g();if(k){o=a[o].css;return CSS.supports(o,n)}l=f();m=l.style[o];if(j){try{l.style[o]=n
}catch(p){return false}}else{l.style[o]=n}return(l.style[o]&&l.style[o]!==m)};b.exports.resetFlags=function(){i=false
}},{"./getStyleTestElement":520,"./stylePropertyCache":522}],524:[function(b,c,a){c.exports=b(96)
},{}],525:[function(c,d,b){var f=/^(webkit|moz|ms)/gi;d.exports=function a(h){var g;
if(h.toLowerCase()==="cssfloat"){return"float"}if(f.test(h)){h="-"+h}return h.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],526:[function(b,c,a){var f=/-([a-z])/g;c.exports=function d(h){var g;if(h.toLowerCase()==="float"){return"cssFloat"
}h=h.replace(f,function(j,i){return i.toUpperCase()});if(h.substr(0,2)==="Ms"){h="ms"+h.substring(2)
}return h}},{}],527:[function(c,d,b){var g=c("./helpers/globals");var f=c("ac-function/once");
function a(){var j=g.getWindow();var h=false;try{if("sessionStorage" in j&&typeof j.sessionStorage.setItem==="function"){j.sessionStorage.setItem("ac_feature","test");
h=true;j.sessionStorage.removeItem("ac_feature","test")}}catch(i){}return h}d.exports=f(a);
d.exports.original=a},{"./helpers/globals":500,"ac-function/once":514}],528:[function(c,d,b){var g=c("./helpers/globals");
var f=c("ac-function/once");function a(){var h=g.getDocument();return !!h.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":500,"ac-function/once":514}],529:[function(b,c,a){var g=b("ac-prefixer/getStyleValue");
var d=b("ac-function/once");function f(){return !!(g("perspective","1px")&&g("transform","translateZ(0)"))
}c.exports=d(f);c.exports.original=f},{"ac-function/once":514,"ac-prefixer/getStyleValue":518}],530:[function(c,d,b){var g=c("./helpers/globals");
var f=c("ac-function/once");function a(){var j=g.getWindow();var h=g.getDocument();
var i=g.getNavigator();return !!(("ontouchstart" in j)||(j.DocumentTouch&&h instanceof j.DocumentTouch)||(i.maxTouchPoints>0)||(i.msMaxTouchPoints>0))
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":500,"ac-function/once":514}],531:[function(c,d,b){var g=c("./helpers/globals");
var f=c("ac-function/once");function a(){var h=g.getDocument();var i=h.createElement("canvas");
if(typeof i.getContext==="function"){return !!(i.getContext("webgl")||i.getContext("experimental-webgl"))
}return false}d.exports=f(a);d.exports.original=a},{"./helpers/globals":500,"ac-function/once":514}],532:[function(b,c,a){c.exports=b(133)
},{"./extend":535,"ac-polyfills/Array/isArray":541}],533:[function(b,c,a){c.exports=b(82)
},{}],534:[function(b,c,a){arguments[4][83][0].apply(a,arguments)},{"./extend":535}],535:[function(b,c,a){c.exports=b(136)
},{"ac-polyfills/Array/prototype.forEach":542}],536:[function(b,c,a){c.exports=b(85)
},{}],537:[function(b,c,a){c.exports=b(138)},{"./clone":532,"./create":533,"./defaults":534,"./extend":535,"./getPrototypeOf":536,"./isDate":538,"./isEmpty":539,"./isRegExp":540,"./toQueryParameters":544}],538:[function(b,c,a){c.exports=b(86)
},{}],539:[function(b,c,a){c.exports=b(87)},{}],540:[function(b,c,a){c.exports=b(88)
},{}],541:[function(b,c,a){c.exports=b(142)},{}],542:[function(b,c,a){c.exports=b(60)
},{}],543:[function(b,c,a){c.exports=b(79)},{}],544:[function(b,c,a){c.exports=b(89)
},{qs:543}],545:[function(c,d,b){var a=c("./ac-video-posterframe/factory");d.exports={create:a.create,AttributePoster:c("./ac-video-posterframe/PosterAttribute"),ImageTagPoster:c("./ac-video-posterframe/PosterImageTag"),defaultPosterPath:c("./ac-video-posterframe/defaultPosterPath")}
},{"./ac-video-posterframe/PosterAttribute":546,"./ac-video-posterframe/PosterImageTag":547,"./ac-video-posterframe/defaultPosterPath":548,"./ac-video-posterframe/factory":549}],546:[function(d,f,b){var h=d("ac-mvc-view").View;
var c=d("ac-object");var i="ac-video-poster-hide";function a(){h.apply(this,arguments)
}var g=a.prototype=c.create(h.prototype);g._renderPoster=function(){if(this.model.hasPoster()){this.el.setAttribute("poster",this.model.getPoster())
}else{this.el.removeAttribute("poster")}};g.render=function(){this._renderPoster();
this.model.on("posterchange",this._renderPoster,this)};f.exports=a},{"ac-mvc-view":388,"ac-object":537}],547:[function(c,f,a){var h=c("ac-mvc-view").View;
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
this.model.on("ended",this._show,this)};f.exports=d},{"ac-mvc-view":388,"ac-object":537}],548:[function(f,g,c){var b=f("ac-feature");
var d=f("ac-cname").cname;function a(){return b.isRetina()}g.exports=function h(){if(a()){return d.formatUrl("/ac/ac-video-posterframe/1.0/images","ac-video-poster_848x480_2x",".jpg")
}return d.formatUrl("/ac/ac-video-posterframe/1.0/images","ac-video-poster_848x480",".jpg")
}},{"ac-cname":490,"ac-feature":501}],549:[function(g,i,d){var h=g("./PosterAttribute");
var c=g("./PosterImageTag");var b=g("ac-feature");function a(){return b.isHandheld()
}i.exports={create:function f(j){var k=null;if(a()){k=new h({model:j,element:j.getMediaElement()})
}else{k=new c({model:j})}return k}}},{"./PosterAttribute":546,"./PosterImageTag":547,"ac-feature":501}],550:[function(d,f,b){var c=d("./ac-video/player/Player");
c.create=d("./ac-video/player/factory/create");c.createFromElement=d("./ac-video/player/factory/createFromElement");
c.createFromAnchorTag=d("./ac-video/player/factory/createFromAnchorTag");var a=d("./ac-video/models/Video");
a.createFromVideoTag=d("./ac-video/models/video/factory/createFromVideoTag");f.exports={Player:c,Video:a}
},{"./ac-video/models/Video":573,"./ac-video/models/video/factory/createFromVideoTag":575,"./ac-video/player/Player":576,"./ac-video/player/factory/create":577,"./ac-video/player/factory/createFromAnchorTag":578,"./ac-video/player/factory/createFromElement":579}],551:[function(b,c,a){function f(g){this.el=g
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
return i})};d.getBuffered=function(){return this.el.buffered};c.exports=f},{}],552:[function(b,c,a){function f(g){this.el=g;
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
}}return h};c.exports=f},{}],553:[function(f,g,d){var c=f("./HTML5VideoAPI");var b=f("./QuickTimeAPI");
var a={create:function(h,i){if(i==="video"){return new c(h)}else{return new b(h)
}}};g.exports=a},{"./HTML5VideoAPI":551,"./QuickTimeAPI":552}],554:[function(c,g,b){var h=c("ac-mvc-collection").Collection;
var f=c("./../models/MediaSource");var a=c("ac-object");var d=function(){h.apply(this,arguments)
};var i=d.prototype=a.create(h.prototype);i.ModelType=f;g.exports=d},{"./../models/MediaSource":570,"ac-mvc-collection":351,"ac-object":391}],555:[function(d,f,c){var i=d("./TextTrackCollection");
var h=d("./../models/PolyfillTextTrackModel");var b=d("ac-object");var a=function(){i.apply(this,arguments)
};var g=a.prototype=b.create(i.prototype);g.ModelType=h;g.createTextTrackFromNativeTrack=function(k,j,m){var l=new h();
l.setNativeTextTrack(m);l.setTextTrackEl(k);l.setTextTrackInnerEl(j);this.add(l);
return l};g.removeTextTrackFromNativeTrack=function(k){var j=this.findTextTrackModelFromNativeTrack(k);
this.remove(j)};g.findTextTrackModelFromNativeTrack=function(k){if(!k||k.length===0){return null
}var j=this.filter(function(l){if(l.getNativeTextTrack()===k[0].text){return l}return false
})[0];return j||null};g.getEnabledTextTracks=function(){var j=this.filter(function(k){if(k.get("mode")!=="disabled"){return k
}return false});return new a({models:j})};g.getVisibleTextTracks=function(){var j=this.find({mode:"showing"});
return new a({models:j})};f.exports=a},{"./../models/PolyfillTextTrackModel":571,"./TextTrackCollection":556,"ac-object":391}],556:[function(c,d,b){var f=c("ac-mvc-collection").Collection;
var i=c("./../models/TextTrackModel");var a=c("ac-object");var h=function(){f.apply(this,arguments)
};var g=h.prototype=a.create(f.prototype);g.ModelType=i;g.createTextTrackFromNativeTrack=function(k){var j=new i(k);
j.setNativeTextTrack(k);this.add(j);return j};g.removeTextTrackFromNativeTrack=function(k){var j=this.findTextTrackModelFromNativeTrack(k);
this.remove(j)};g.count=function(){return this.models.length};g.findTextTrackModelFromNativeTrack=function(k){var j=this.filter(function(l){if(l.getNativeTextTrack()===k){return l
}return false})[0];return j||null};g.getEnabledTextTracks=function(){var j=this.filter(function(k){if(k.get("mode")!=="disabled"){return k
}return false});return new h({models:j})};g._findTextTrack=function(k){var j;if(this.indexOf(k)>-1){j=k
}else{if(typeof k==="number"){j=this.at(k)}else{if(typeof k==="string"){j=this.get(k)
}else{j=this.find(k,{limit:1})[0]}}}return j};g.getVisibleTextTracks=function(){var j=this.find({mode:"showing"});
return new h({models:j})};g.findTextTrack=function(j){return this._findTextTrack(j)
};d.exports=h},{"./../models/TextTrackModel":572,"ac-mvc-collection":351,"ac-object":391}],557:[function(b,c,a){function f(){this._boundEventListeners=[];
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
})};c.exports=new f()},{}],558:[function(d,c,h){var f=d("ac-object");var j=d("ac-dom-traversal/querySelector");
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
}},this)};c.exports=i},{"ac-browser":27,"ac-dom-traversal/querySelector":65,"ac-object":391}],559:[function(b,c,a){c.exports={LOADEDMETADATA:1,LOADEDDATA:2,CANPLAY:3,CANPLAYTHROUGH:4}
},{}],560:[function(c,b,d){var h=c("./TextTracksController");var i=c("./../../views/textTracks/TextTracksCollectionView");
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
}},this)}};b.exports=j},{"./../../models/TextTrackModel":572,"./../../views/textTracks/TextTracksCollectionView":593,"./TextTracksController":562,"ac-object":391}],561:[function(g,f,h){var j=g("./TextTracksController");
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
m=new Date("January 1, 1975 "+m);return l==="gt"?n>=m:n<=m};f.exports=c},{"./../../collection/PolyfillTextTrackCollection":555,"./../../models/PolyfillTextTrackModel":571,"./../../views/textTracks/PolyfillTextTrackCollectionView":589,"./TextTracksController":562,"ac-object":391}],562:[function(c,b,d){var j=c("ac-event-emitter").EventEmitter;
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
}else{this.trigger("texttrackhide")}};b.exports=g},{"./../../collection/TextTrackCollection":556,"./../../views/textTracks/TextTrackRender":591,"ac-object":391}],563:[function(c,b,d){var h=c("./TextTracksController");
var g=c("./../../models/TextTrackModel");var i=c("./../../views/textTracks/WebkitClosedCaptionsView");
var a=c("ac-object");var k=c("ac-browser");function j(){h.apply(this,arguments)
}var f=j.prototype=a.create(h.prototype);f._onTextTrackModeChange=function(l){if(l.value==="showing"){this.trigger("texttrackshow")
}else{this.trigger("texttrackhide")}};f.populateTextTracks=function(){var m=this.mediaElement.el;
var l;var n=m.webkitHasClosedCaptions;if(n===true){if(!this.view){this.view=new i({element:m})
}l=new g({mode:"hidden"});this.view.setModel(l);l.on("change:mode",this._onTextTrackModeChange,this);
this.model.reset([l]);this.trigger("addtrack",{textTrack:l});if(k.name==="Safari Mobile"&&k.version<7){l.once("change:mode",this.view.render,this.view)
}else{this.view.render()}}};b.exports=j},{"./../../models/TextTrackModel":572,"./../../views/textTracks/WebkitClosedCaptionsView":594,"./TextTracksController":562,"ac-browser":27,"ac-object":391}],564:[function(c,d,b){function a(f){this.options=f||{};
this.player=this.options.player;this.player.setControls(true)}a.create=function(f){return new a(f)
};d.exports=a},{}],565:[function(d,c,h){var m=d("./../models/Video");var n=d("ac-event-emitter").EventEmitter;
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
};c.exports=f},{"./../const/readyState":559,"./../controller/textTracks/NativeTextTracksController":560,"./../models/Video":573,"./../views/mediaView/MediaView":583,"ac-feature":337,"ac-fullscreen":99,"ac-object":391}],566:[function(b,f,a){var g=b("./../../recommendation/vat");
var d=b("./createQuickTime");var h=b("./createHTML5Video");function c(l,i){i=i||{};
var j=i.type||g.get();var k;if(j==="quicktime"){k=d(l,i)}else{k=h(l,i)}return k
}f.exports=c},{"./../../recommendation/vat":580,"./createHTML5Video":568,"./createQuickTime":569}],567:[function(c,d,b){var h=c("./create");
var a=c("./../../models/video/factory/createFromVideoTag");var f=c("./../../recommendation/vat");
function g(m,k){k=k||{};k.element=m;var l=k.type=f.get();var o=a(m,k);var j=o.getSources();
var n;var i=j.find({src:m.currentSrc})[0];if(l==="quicktime"){i=j.find({type:"video/quicktime"})[0];
if(!i&&j.models.length===1){i=j.at(0)}}if(i){o.setSrc(i)}n=h(o,k);if(n.getViewElement()!==m){m.parentNode.replaceChild(n.getViewElement(),m)
}return n}d.exports=g},{"./../../models/video/factory/createFromVideoTag":575,"./../../recommendation/vat":580,"./create":566}],568:[function(h,c,j){var k=h("ac-browser");
var f=h("./../../views/mediaView/HTML5Video");var i=h("./../MediaController");var a=h("./../../adapter/element-adapter");
var d=h("./../../controller/textTracks/NativeTextTracksController");var b=h("./../../controller/textTracks/PolyfillTextTracksController");
var g=h("./../../controller/textTracks/WebkitClosedCaptions");var l=h("./../../models/Video");
var m=function(o,v){v=v||{};if(!(o instanceof l)){o=new l(o)}var n=v.view||new f({model:o,element:v.element,template:"elementVideo"});
var q=n.getMediaElement();var s=a.create(q,"video");var t=k.name.toLowerCase();
var p=(t==="ie"||t==="edge");var r;if(!("textTracks" in q)&&"webkitClosedCaptionsVisible" in q){r=new g(s)
}else{if(p){r=new b(s)}else{r=new d(s)}}if(v.textTracks){v.textTracks.forEach(function(w){var x=w;
if(typeof w==="string"){x={src:w}}r.addTextTrackFromRemoteVTT(x)})}var u=new i(s,{model:o,view:n,textTracks:r});
return u};c.exports=m},{"./../../adapter/element-adapter":553,"./../../controller/textTracks/NativeTextTracksController":560,"./../../controller/textTracks/PolyfillTextTracksController":561,"./../../controller/textTracks/WebkitClosedCaptions":563,"./../../models/Video":573,"./../../views/mediaView/HTML5Video":582,"./../MediaController":565,"ac-browser":27}],569:[function(d,c,g){var h=d("./../../views/mediaView/QuickTime");
var a=d("./../../adapter/element-adapter");var f=d("./../MediaController");var b=d("./../../controller/textTracks/PolyfillTextTracksController");
var j=d("./../../models/Video");var i=function(p,n){var q;var o;var l;var m;var k;
n=n||{};if(!(p instanceof j)){p=new j(p)}m=new h({model:p});l=m.getMediaElement();
q=a.create(l,"quicktime");k=new b(q);if(n.textTracks){n.textTracks.forEach(function(r){var s=r;
if(typeof r==="string"){s={src:r}}k.addTextTrackFromRemoteVTT(s)})}o=new f(q,{model:p,view:m,textTracks:k});
return o};c.exports=i},{"./../../adapter/element-adapter":553,"./../../controller/textTracks/PolyfillTextTracksController":561,"./../../models/Video":573,"./../../views/mediaView/QuickTime":584,"./../MediaController":565}],570:[function(c,f,b){var h=c("ac-mvc-model").Model;
var a=c("ac-object");function d(){h.apply(this,arguments)}var g=d.prototype=a.create(h.prototype);
g.defaultAttributes={};g.getFullyQualifiedURL=function(){var k=this.get("src");
var j;var i=window.location.origin||window.location.protocol+"//"+window.location.hostname;
if(/http(s)?/.test(k)){return k}else{if(k.slice(0,2)==="//"){return window.location.protocol+k
}else{if(k[0]!=="/"){j=window.location.pathname;j=j.substring(0,j.lastIndexOf("/")+1);
return i+j+k}}}return i+k};f.exports=d},{"ac-mvc-model":357,"ac-object":391}],571:[function(c,d,b){var h=c("ac-mvc-model").Model;
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
};f.disable=function(){this.set({mode:"disabled"})};d.exports=g},{"ac-mvc-model":357,"ac-object":391}],572:[function(c,d,b){var h=c("ac-mvc-model").Model;
var a=c("ac-object");function g(i){h.apply(this,arguments)}var f=g.prototype=a.create(h.prototype);
f.defaultAttributes={mode:"disabled"};f.setNativeTextTrack=function(i){this._nativeTextTrack=i
};f.getNativeTextTrack=function(){return this._nativeTextTrack};f.getCues=function(){return this._nativeTextTrack.cues
};f.removeCue=function(i){this._nativeTextTrack.removeCue(i)};f.addCue=function(l,j,k){var i=new VTTCue(l,j,k);
this.addVTTCue(i)};f.addVTTCue=function(i){this._nativeTextTrack.addCue(i)};f.show=function(){this.set({mode:"showing"})
};f.hide=function(){this.set({mode:"hidden"})};f.disable=function(){this.set({mode:"disabled"})
};d.exports=g},{"ac-mvc-model":357,"ac-object":391}],573:[function(f,c,h){var d=f("ac-mvc-model").Model;
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
};c.exports=k},{"./../collection/MediaSourceCollection":554,"./MediaSource":570,"ac-mvc-model":357,"ac-object":391,"ac-video-posterframe":545}],574:[function(b,d,a){var c=b("./../../MediaSource");
function f(g){var i=g.getAttribute("src");var h={src:i};if(g.getAttribute("type")){h.type=g.getAttribute("type")
}return new c(h)}d.exports=f},{"./../../MediaSource":570}],575:[function(c,b,g){var j=c("./../../Video");
var a=c("ac-dom-traversal/querySelectorAll");var d=c("ac-object");var i=c("./../../mediaSource/factory/createFromSourceTag");
function h(k,l){if(l.getAttribute("preload")){k.preload=l.getAttribute("preload")
}}function f(l,m){var k;l.src=[];if(m.getAttribute("src")){l.src.push(i(m))}k=a("source",m);
if(k.length){k=k.map(function(n){return i(n)});l.src=l.src.concat(k)}}b.exports=function(m,o){o=o||{};
var n;var l;var k={paused:m.paused,currentTime:m.currentTime,duration:m.duration,muted:m.muted,volume:m.volume,playbackRate:m.playbackRate,ended:m.ended,readyState:m.readyState,seeking:m.seeking,poster:m.poster,defaultPlaybackRate:m.defaultPlaybackRate,defaultMuted:m.defaultMuted,currentSrc:m.currentSrc,autoplay:m.autoplay};
h(k,m);f(k,m);k=d.extend(k,o);n=new j(k);if(m.currentSrc){l=n.findSourcesByFullyQualifiedURL(m.currentSrc);
if(l&&l[0]){n.setCurrentSrc(l[0])}}return n}},{"./../../Video":573,"./../../mediaSource/factory/createFromSourceTag":574,"ac-dom-traversal/querySelectorAll":66,"ac-object":391}],576:[function(i,a,q){var o=i("ac-mvc-view").View;
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
},{"./../const/readyState":559,"./../controls/Native":564,"ac-classlist/add":240,"ac-classlist/contains":246,"ac-classlist/remove":250,"ac-dom-events/addEventListener":287,"ac-feature":337,"ac-fullscreen":99,"ac-mvc-view":388,"ac-object":391,"ac-video-controls":464,"ac-video-posterframe":545}],577:[function(f,g,c){var d=f("./../Player");
var h=f("./../../mediaController/factory/create");var a=f("ac-dom-nodes");var b=f("./../../collection/playerCollection");
g.exports=function(k,i){i=i||{};var j;if(!i.mediaController){i.mediaController=h(k,i)
}j=new d(i);if(i.mediaController.getViewElement().parentNode!==j.el){a.insertFirstChild(i.mediaController.getViewElement(),j.el)
}if(!i.preventCollection){b.add(j)}return j}},{"./../../collection/playerCollection":557,"./../../mediaController/factory/create":566,"./../Player":576,"ac-dom-nodes":313}],578:[function(d,g,c){var h=d("./../../config/VideoConfig");
var a=d("./../../models/Video");var b=d("./create");var f=function(i){var j=new h();
var l;var m;j.getConfig(i,{},{}).then(function(n){n.id=i.id;l=n;m=n.source});var k=new a({src:m});
return b(k)};g.exports=f},{"./../../config/VideoConfig":558,"./../../models/Video":573,"./create":577}],579:[function(c,b,g){var d=c("./create");
var i=c("./../../mediaController/factory/createFromVideoTag");var a=c("ac-dom-traversal/querySelectorAll");
var h=c("ac-dom-traversal/querySelector");function f(m){var k=a("source",m);var l=0;
for(l;l<k.length;l+=1){k[l].parentNode.removeChild(k[l])}}var j=function(l,k){k=k||{};
var m=h("video",l);if(m===null){m=document.createElement("video");l.appendChild(m)
}if(typeof k.src!=="undefined"&&k.src!==null){f(m)}k.mediaController=i(m,k);k.element=l;
return d(null,k)};b.exports=j},{"./../../mediaController/factory/createFromVideoTag":567,"./create":577,"ac-dom-traversal/querySelector":65,"ac-dom-traversal/querySelectorAll":66}],580:[function(b,d,a){var c=b("ac-browser");
d.exports={get:function(){var f="html5";if(c.name==="IE"&&c.version<9){f="quicktime"
}return f}}},{"ac-browser":27}],581:[function(b,c,a){var f=b("ac-mvc-view").View;
function g(){f.apply(this,arguments)}var d=g.prototype=new f();d.tagName="source";
d.render=function(){this.el.setAttribute("src",this.model.get("src"));if(this.model.has("type")){this.el.setAttribute("type",this.model.get("type"))
}};c.exports=g},{"ac-mvc-view":388}],582:[function(c,b,f){var a=c("./MediaView");
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
}};b.exports=i},{"./../MediaSourceTag":581,"./MediaView":583,"ac-dom-traversal/querySelector":65,"ac-object":391}],583:[function(c,b,f){var g=c("ac-dom-traversal/querySelector");
var i=c("ac-browser");var j=c("ac-mvc-view").View;var d=c("ac-object");function a(){this._mediaElement=null;
j.apply(this,arguments)}var h=a.prototype=d.create(j.prototype);h.className="ac-video-media-controller";
h._findMediaElementByTagName=function(k){if(this.getTagName()===k){return this.el
}return g(k,this.el)};h.renderTextTrack=function(){};h._findMediaElement=function(){if(this._findMediaElementByTagName("video")){return this._findMediaElementByTagName("video")
}else{if(i.name!=="IE"){return this._findMediaElementByTagName("embed")}}return this._findMediaElementByTagName("object")
};h.getMediaElement=function(){return this._findMediaElement()};b.exports=a},{"ac-browser":27,"ac-dom-traversal/querySelector":65,"ac-mvc-view":388,"ac-object":391}],584:[function(f,c,i){var b=f("./MediaView");
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
this._renderString()};c.exports=k},{"./MediaView":583,"./eventAdapters/QuickTime":585,"./eventAdapters/quicktimeEventsElement":588,"ac-browser":27,"ac-dom-traversal":42,"ac-object":391}],585:[function(b,a,f){var j=b("ac-dom-emitter").DOMEmitter;
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
};a.exports=d},{"./QuickTimePluginReady":586,"./QuickTimeTimeUpdate":587,"ac-dom-emitter":284,"ac-object":391}],586:[function(c,d,b){var g=c("ac-event-emitter").EventEmitter;
var a=c("ac-object");function h(i){g.call(this);this._movie=i;this._pollInterval=5;
this._boundPoll=this.poll.bind(this)}var f=h.prototype=a.create(g.prototype);f._resetMovieUrl=function(){var i=this._movie;
var j;i.SetResetPropertiesOnReload(false);j=i.GetURL();i.autoplay=true;j+=(j.indexOf("?")!==-1)?"&rnd="+Math.random():"?rnd="+Math.random();
i.SetURL(j)};f.getPluginStatus=function(){var i="";try{i=this._movie.GetPluginStatus()
}catch(j){}return i};f.isAPIAvailable=function(){var i;try{this._movie.GetVolume();
i=true}catch(j){i=false}return i};f.isReady=function(){return/(Complete)/i.test(this.getPluginStatus())
};f._triggerReady=function(){this.trigger("ready")};f.poll=function(){if(this.isReady()){this._resetMovieUrl();
this._triggerReady()}else{setTimeout(this._boundPoll,this._pollInterval)}};d.exports=h
},{"ac-object":391}],587:[function(c,f,b){var h=c("ac-event-emitter").EventEmitter;
var a=c("ac-object");var d=300;function i(j){this.mediaElement=j;this._isListeningForTimeUpdate=false;
this._boundTick=null;this._lastTimeCheck=0;this._timeout=null}var g=i.prototype=a.create(h.prototype);
g.listenForTimeUpdate=function(){this._isListeningForTimeUpdate=true;this._boundTick=this._tick.bind(this);
window.setTimeout(this._boundTick,d)};g.stopListenForTimeUpdate=function(){window.clearTimeout(this._timeout);
this._isListeningForTimeUpdate=false;this._boundTick=null;this._timeout=null};g.getCurrentTime=function(){return this.mediaElement.GetTime()/this.mediaElement.GetTimeScale()
};g._tick=function(){var j=this.getCurrentTime();if(j!==this._lastTimeCheck){this.trigger("timeupdate")
}this._lastTimeCheck=j;if(this._isListeningForTimeUpdate&&this._boundTick){this._timeout=window.setTimeout(this._boundTick,d)
}};f.exports=i},{"ac-object":391}],588:[function(b,d,a){var c=b("ac-browser");var g=function(k,i){var j=(k.toUpperCase()==="IE"&&i<9);
if(!j){return}this.id="quicktime-events-element-"+Date.now();this.el=document.createElement("object");
this._setAttributes({id:this.getID(),wmode:"transparent",classid:"clsid:CB927D12-4FF7-4a9e-A169-56E4B8A75598",codebase:"https://www.apple.com/qtactivex/qtplugin.cab#version=7,2,1,0"});
this.appendToBody()};var f=g.prototype;f.appendToBody=function(){document.write(this.el.outerHTML)
};f.getID=function(){return this.id};f._setAttributes=function(j){for(var i in j){this.el.setAttribute(i,j[i])
}};var h=new g(c.name,c.version);d.exports=h;d.exports.C=g},{"ac-browser":27}],589:[function(d,c,f){var l=d("ac-mvc-view").View;
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
}}return q};c.exports=k},{"./TextTrackDiv":590,"ac-ajax-xhr":235,"ac-console":252,"ac-dom-styles":334,"ac-dom-traversal/firstChild":41,"ac-mvc-view":388,"ac-object":391}],590:[function(c,d,a){var i=c("ac-mvc-view").View;
var b=c("ac-object");var h=c("ac-dom-styles");function g(){i.apply(this,arguments)
}var f=g.prototype=b.create(i.prototype);f.tagName="div";f.render=function(){var j=document.createElement("div");
h.setStyle(this.el,{display:"none",position:"absolute","z-index":"9",bottom:"20%",left:"0",right:"0","text-align":"center"});
h.setStyle(j,{display:"none",padding:"2px 4px","font-family":"Arial","font-weight":"700","font-size":"24px",color:"white","text-align":"center","background-color":"black"});
this.el.setAttribute("id",this.model.cid);this.el.appendChild(j)};d.exports=g},{"ac-dom-styles":334,"ac-mvc-view":388,"ac-object":391}],591:[function(c,f,a){var h=c("ac-mvc-view").View;
var b=c("ac-object");function d(){h.apply(this,arguments)}var g=d.prototype=b.create(h.prototype);
g._onModeChange=function(i){this.renderMode()};g.renderMode=function(){var i=this.model.get("mode");
this.el.mode=i};g.render=function(){this.model.on("change:mode",this._onModeChange,this)
};f.exports=d},{"ac-mvc-view":388,"ac-object":391}],592:[function(d,f,b){var h=d("ac-mvc-view").View;
var c=d("ac-object");function a(){h.apply(this,arguments)}var g=a.prototype=c.create(h.prototype);
g.tagName="track";g.render=function(){["src","type","label","kind","srclang"].forEach(function(i){if(this.model.has(i)){this.el.setAttribute(i,this.model.get(i))
}},this);this.el.setAttribute("id",this.model.cid)};f.exports=a},{"ac-mvc-view":388,"ac-object":391}],593:[function(d,f,b){var h=d("ac-mvc-view").View;
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
if(k.tag){k.tag.destroy();this._textTrackTags.splice(k.idx,1)}};f.exports=a},{"./TextTrackTag":592,"ac-mvc-view":388,"ac-object":391}],594:[function(c,d,a){var h=c("ac-mvc-view").View;
var b=c("ac-object");function f(){h.apply(this,arguments)}var g=f.prototype=b.create(h.prototype);
g._onModeChange=function(i){this._renderMode()};g._renderMode=function(){var i=this.model.get("mode");
if(i==="showing"){this.el.webkitClosedCaptionsVisible=true}else{this.el.webkitClosedCaptionsVisible=false
}};g.setModel=function(i){if(this.model){this.model.off("change:mode",this._onModeChange,this)
}this.model=i;this.listen()};g.listen=function(){this.model.on("change:mode",this._onModeChange,this)
};g.render=function(){this._renderMode();this.listen()};d.exports=f},{"ac-mvc-view":388,"ac-object":391}],595:[function(b,c,a){c.exports=b("ac-video-player")
},{"ac-video-player":550}],596:[function(b,c,a){c.exports.Smoother=b("./smoother/Smoother")
},{"./smoother/Smoother":597}],597:[function(c,d,b){d.exports=a;function a(f){f=f||this.sampling;
this.pool=new Array(f);this.raw=0;this.value=0}a.prototype.sampling=3;a.prototype.smooth=function(g,k){var j=0;
var f=this.pool.length;if(typeof this.pool[f-this.sampling]!=="undefined"){for(var h=this.sampling;
h>0;h--){j+=this.pool[f-h]}j+=g;j/=(this.sampling+1)}else{j=g}if(!k){this.raw=g;
this._track(j,true)}return j};a.prototype._track=function(g,f){if(f){this.value=g
}else{this.raw=this.value=g}this.pool.push(g);this.pool.shift()}},{}],598:[function(b,c,a){c.exports.ScrollTimeUpdate=b("./scroll-time-update/ScrollTimeUpdate");
c.exports.ElementScrollTimeUpdate=b("./scroll-time-update/ElementScrollTimeUpdate")
},{"./scroll-time-update/ElementScrollTimeUpdate":599,"./scroll-time-update/ScrollTimeUpdate":600}],599:[function(c,g,b){var f=c("./ScrollTimeUpdate"),d=c("window-delegate").WindowDelegate;
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
this._updateOnResize=false};g.exports=a},{"./ScrollTimeUpdate":600,"window-delegate":601}],600:[function(c,b,d){var f,j=c("ac-event-emitter").EventEmitter,a=c("ac-clock"),k=c("window-delegate").WindowDelegate,h=c("smoother").Smoother,i=c("ac-dom-emitter").DOMEmitter;
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
},{"ac-clock":31,"ac-dom-emitter":35,smoother:596,"window-delegate":601}],601:[function(b,c,a){c.exports=b(106)
},{"./window-delegate/WindowDelegate":602,"./window-delegate/windowEmitter":603}],602:[function(b,c,a){c.exports=b(107)
},{"./windowEmitter":603}],603:[function(b,c,a){c.exports=b(108)},{"ac-dom-emitter":35}],604:[function(i,b,s){var r=i("../shared/Shared");
var m=i("ac-gallery").Gallery;var f=i("ac-gallery").Keyframe;var q=i("ac-base").Element;
var j=i("ac-base").Environment;var p=i("window-delegate").WindowDelegate;var g=i("../shared/BreakpointsDelegate");
var a=i("../shared/GalleryFactory");var h=i("../shared/CarouselGallery");var o=i("../shared/VideoGalleryFactory");
var c=i("../shared/ParallaxObjectsController");var n=i("../shared/ElementTrackersController");
var d=i("./../shared/HeightAdjuster");var l=i("../shared/CalloutTrackerFactory");
var k=(function(){return{initialize:function(){var H=q.select(".gallery-carousel-content-1");
var F=q.select(".gallery-carousel-content-2");var x=[];var G=a.create("isight-gallery","fade");
var t=q.select(".section-isight-gallery");var w=q.selectAll(".gallery-content",G.gallery.options.engagementElement);
var y=new d(G.gallery,t,w);y.basePadding(function(){var I=250;switch(g.breakpoint.name){case"medium":I-=14;
break;case"xsmall":I-=140;break}return I},true);y.minHeight(function(){var I=500;
switch(g.breakpoint.name){case"xsmall":I=200;break}return I});G.gallery.on("willShow",function(I){q.addClassName(q.select("#"+I.incoming.id),"didShow");
q.removeClassName(q.select("#"+I.outgoing.id),"didShow")});x.push(y);this._centerGalleryTriggers(G);
var u=new h({container:q.select(".gallery-carousel-wrapper",F),wrapper:q.select("#facetime-gallery"),slides:q.selectAll(".gallery-content",F),triggerSelector:".facetime-gallery-trigger",descriptionElements:q.selectAll(".gallery-description",F),engagementElement:q.select(".gallery-carousel-wrapper",F),analytics:{galleryName:"facetime-gallery"}});
var E=q.select(".gallery-description-wrapper",q.ancestor(u.container));var v=q.selectAll(".gallery-description",E);
var z=new d(u.gallery.gallery,E,v);z.basePadding(function(){var I=20;switch(g.breakpoint.name){case"medium":I+=64;
break;case"xsmall":I+=20;break}return I},true);z.minHeight(200);x.push(z);g.on("breakpoint",function(I){x.forEach(function(J){J.resize()
})});setTimeout(function(){x.forEach(function(I){I.resize()})},300);this._centerGalleryTriggers(u,"carousel");
var D=o.create("video-gallery","fade");var C=r.initialize();if(C.parallax){var B=new c(this._getParallaxObjects());
B.start();p.on("adjuster:resize",B.resize)}if(C.ambient){var A=new n(this._getElementTrackers());
A.start();q.addClassName(document.body,"animatable")}this._centerGalleryTriggers(D);
return this},_getParallaxObjects:function(){return[{selectorQuery:".section-highlight .image-video-highlights",type:"largeDownwards",options:{smooth:true,startInView:true,offsetTop:0,offsetBottom:function(){return p.innerHeight*0.5
}}},{selectorQuery:".section-facetime-hd-camera .image-facetime-hd-camera",type:"mediumUpwards",options:{smooth:true,startInView:true,offsetTop:0,offsetBottom:function(){return p.innerHeight*0.3
}}}]},_getElementTrackers:function(){var t=[];this._registerCalloutsTracker(t);
return t},_registerCalloutsTracker:function(u){var t=[{selector:".section-isight",targets:[".callout"],stagger:150,inViewThreshold:0.5},{selector:".section-highlight",targets:[".callout"],stagger:150,inViewThreshold:0.5},{selector:".section-facetime-hd-camera",targets:[".callout"],stagger:150,inViewThreshold:0.5}];
l.addToTrackerList(u,t)},_centerGalleryTriggers:function(C,A){if(j.Feature.isHandheld()){var B,y,I,D,w,v,u,z,F,x,t,E;
if(A==="carousel"){y=C.gallery.gallery;I=C.wrapper.id;D=C.triggerSelector}else{y=C.gallery;
I=C.gallery.options.engagementElement.id;D=C.trigger._el}B=Math.round(window.innerWidth/2);
w=q.select(".section-"+I);v=q.select(".togglenav-alt",w);z=q.selectAll(D,v);F=z[0];
x=z[z.length-1];t=F.parentNode;E=x.parentNode;H();y.on("willShow",function(J){G()
});window.addEventListener("orientationchange",function(J){v.scrollLeft=0;B=Math.round(window.innerWidth/2);
H();G()})}function H(){var P=q.getBoundingBox(v).width/2,M=B-P,N=q.getBoundingBox(F),J=N.left,L=q.getBoundingBox(x),K,O;
if(M>0){O=Math.round(B-M-N.width/2);K=Math.round(B-M-L.width/2)}else{O=Math.round(B-N.width/2);
K=Math.round(B-L.width/2)}q.setStyle(t,"padding-left:"+O+"px");q.setStyle(E,"padding-right:"+K+"px")
}function G(){var M=q.select(".current",v),L=q.getBoundingBox(M),K=Math.round(L.left+L.width/2),J=Math.round(K-B);
if(K!==B){window.requestAnimationFrame(function(){if(A==="carousel"){setTimeout(function(){v.scrollLeft+=J
},250)}else{v.scrollLeft+=J}})}}}}}());b.exports=k.initialize()},{"../shared/BreakpointsDelegate":605,"../shared/CalloutTrackerFactory":606,"../shared/CarouselGallery":607,"../shared/ElementTrackersController":608,"../shared/GalleryFactory":609,"../shared/ParallaxObjectsController":614,"../shared/Shared":616,"../shared/VideoGalleryFactory":617,"./../shared/HeightAdjuster":610,"ac-base":false,"ac-gallery":158,"window-delegate":601}],605:[function(b,a,d){var f,i=b("ac-base").Element,c=b("ac-object"),k=b("window-delegate").WindowDelegate,j=b("ac-event-emitter").EventEmitter;
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
},{"ac-base":false,"ac-object":203,"window-delegate":601}],606:[function(b,c,a){var d=b("ac-base").Element;
var f=(function(){return{addToTrackerList:function(i,h){var g=this._calloutEnter.bind(this);
h.forEach(function(k,j){i.push({selectorQuery:k.selector,targets:k.targets,stagger:k.stagger,onEnter:g,delay:k.delay,runOnce:true,options:{inViewThreshold:k.inViewThreshold||0.5}})
}.bind(this))},_calloutEnter:function(i){var g=i.delay;var h=i.stagger||200;if(i.targets){i.targets.forEach(function(k,j){this._addClassWithDelay(k,h*j)
}.bind(this))}else{this._addClassWithDelay(i.el,g)}},_addClassWithDelay:function(h,g){if(g){setTimeout(function(){d.addClassName(h,"animated")
},g)}else{d.addClassName(h,"animated")}}}})();c.exports=f},{"ac-base":false}],607:[function(k,a,w){var q,j=k("ac-dom-emitter").DOMEmitter,u=k("ac-base").Element,s=k("window-delegate").WindowDelegate,f=k("ac-keyframe").Keyframe,b=k("ac-easing").Easing,p=k("ac-gallery").Gallery,n=k("ac-gallery").builder,g=k("./BreakpointsDelegate"),l=k("ac-base").Environment,d=k("ac-gallery").horizontalSliderKeyframesGenerator,r=k("ac-gallery").CSSTransitionSegue,m=k("ac-gallery").AnimationSequenceSegue,c=l.Feature.cssPropertyAvailable("transform"),t=l.Feature.cssPropertyAvailable("transition");
var v={galleryImage:"image-gallery-device-wrapper",galleryImageZoomed:"image-gallery-device-wrapper-zoomed",willShow:"willShow",didShow:"didShow",active:"active"};
var h={linear:undefined,eased:"ease-in-out"};var o={path:"./images",zoomedSuffix:"_zoomed",fileType:"jpg"};
var i=function(x){this.container=x.container;this.wrapper=x.wrapper;this.slides=x.slides;
this.triggerSelector=x.triggerSelector;this.engagementElement=x.engagementElement;
this.descriptionElements=x.descriptionElements;this.analyticsOptions=x.analytics||{};
this.triggers=null;this._currentBreakpoint=g.breakpoint.name;this.emitters=[];this.scaleVals={};
this.easing=b.createBezier.apply(b,[0.25,0.25,0.75,0.75]);this.property=(c)?"translateX":"left";
this.segueType=(t)?r:m;this._boundCreateKeyframe=this._createKeyframe.bind(this);
this._setBreakpointOnResize();this._setScaleValues();this._initializeSlidesObj();
this._setZIndexes();this.initializeGallery();this._bindEvents()};q=i.prototype;
q.calculateTranslateDistance=function(){return u.getBoundingBox(this.wrapper).width
};q.initializeGallery=function(){var z=this._createKeyframes();if(!this.gallery){var x=h.eased;
this.gallery=n({keyframes:z.keyframes,bounceInKeyframe:z.bounceInKeyframe,bounceOutKeyframe:z.bounceOutKeyframe,triggerSelector:this.triggerSelector,touchElement:this.wrapper,touch:true,shouldUseKeyboard:true,engagementElement:this.engagementElement,analytics:this.analyticsOptions,transitionEasing:x})
}else{var y=this._getCurrentSlideIdx();if(y===-1){return}this.gallery.gallery._keyframes[0].draw(0);
this.gallery.gallery._keyframes=z.keyframes;z.keyframes[y].draw();this.gallery.triggerPainter._paint({incoming:z.keyframes[y]});
this.gallery.gallery.show(y,{useTransition:false})}};q._getCurrentSlideIdx=function(){return this.gallery.gallery.getSelectedIndex()
};q._setScaleValues=function(){var A=u.select(".image-gallery-device-wrapper .image-gallery-device-image",this.wrapper),B=u.select(".image-gallery-device-wrapper-zoomed .image-gallery-device-image",this.wrapper),z=u.getStyle(A,"width"),x=u.getStyle(A,"height"),y=u.getStyle(B,"width"),C=u.getStyle(B,"height");
z=z.slice(0,-2);x=x.slice(0,-2);y=y.slice(0,-2);C=C.slice(0,-2);this.scaleVals={scale:(z/y),width:z,height:x,zoomedWidth:y,zoomedHeight:C}
};q._initializeSlidesObj=function(){this.slideObj={};this.slides.forEach(function(x){this.slideObj[x.id]=x
}.bind(this));this.descriptionsObj={};this.descriptionElements.forEach(function(x){this.descriptionsObj[x.getAttribute("data-id")]=x
}.bind(this))};q._createKeyframes=function(){var A=d(this.slides),B=A.bounceInKeyframe,C=A.bounceOutKeyframe,y=this.calculateTranslateDistance();
var D=[];var z,x=this.slides.length;for(z=0;z<x;z++){D.push(this._createKeyframe(this.slides[z],z,y))
}return{keyframes:D,bounceInKeyframe:B,bounceOutKeyframe:C}};q._createKeyframe=function(A,z,y){var B=[],x=this.slides.length;
this.slides.forEach(function(J,O){var D=O-z,M=1,E=100,C=0,G=Math.abs(D),H=180,I=1/(1-this.scaleVals.scale);
if(D-0){M=-1}if(G>1){G=1}var F=this.easing(G,1,-1,I);if(this._currentBreakpoint==="xlarge"){H=-24
}if(this._currentBreakpoint==="medium"||this._currentBreakpoint==="large"){H=0}if(this._currentBreakpoint==="xsmall"){E=20
}if(G===0){H=0}else{if(O-z<0){H=-H}}H=H*Math.abs(D);if(this._currentBreakpoint==="xlarge"){E=120
}if(this._currentBreakpoint==="medium"||this._currentBreakpoint==="large"){E=100
}if(this._currentBreakpoint==="xsmall"){E=230}if(D>0){H-=E}if(D<0){H+=E}var L=0,N=22,K=130;
if(D>1){if(this._currentBreakpoint==="xlarge"){C=L}if(this._currentBreakpoint==="medium"||this._currentBreakpoint==="large"){C=N
}if(this._currentBreakpoint==="xsmall"){C=K}C=C*Math.abs(D)*F}if(D<-1){if(this._currentBreakpoint==="xlarge"){C=-L
}if(this._currentBreakpoint==="medium"||this._currentBreakpoint==="large"){C=-N
}if(this._currentBreakpoint==="xsmall"){C=-K}C=C*Math.abs(D)*F}B.push({element:J,SegueType:this.segueType,duration:1,props:[{property:this.property,value:-((y*z)+H-C),units:"px"}]});
if(c){B.push({element:u.select("."+v.galleryImageZoomed,J),SegueType:this.segueType,duration:1,props:[{property:"scale",value:F}]})
}}.bind(this));return new f(A.getAttribute("id"),B)};q._modifyBounceOutKeyframe=function(z){var x,y;
for(x in z._styles){if(z._styles.hasOwnProperty(x)){y=z._styles[x];y.props[0].value=0;
z._styles[x]=y}}return z};q._handleWillShow=function(x){u.addClassName(this.wrapper,v.active);
if(x){this._setTextContentClass(null,v.didShow);this._setTextContentClass(x.incoming.id,v.willShow);
this._setContentClass([x.incoming.id],v.willShow)}};q._handleDidShow=function(x){this._removeClassNameFromContent(v.willShow);
this._setTextContentClass(null,v.willShow);this._setTextContentClass(x.incoming.id,v.didShow);
this._setContentClass([x.incoming.id],v.didShow);u.removeClassName(this.wrapper,v.active)
};q._handleSlideClick=function(x,z,y){this.gallery.gallery.show(z,{interactionEvent:y})
};q._setContentClass=function(z,x){var y=this.slideObj[z];this._removeClassNameFromContent(x);
u.addClassName(y,x)};q._removeClassNameFromContent=function(x){this.slides.forEach(function(y){u.removeClassName(y,x)
})};q._setTextContentClass=function(y,x){this.descriptionElements.forEach(function(z){u.removeClassName(z,x)
});if(y){u.addClassName(this.descriptionsObj[y],x)}};q._clearTextContentClass=function(y,x){};
q._setZIndexes=function(){var x=this.slides.length;this.slides.forEach(function(z,y){u.setStyle(z,{zIndex:-y})
},this)};q._bindEvents=function(){this.gallery.gallery.on("willShow touchStart",this._handleWillShow,this);
this.gallery.gallery.on("didShow",this._handleDidShow,this);s.on("resize orientationchange",function(){this._setScaleValues();
this.initializeGallery()},this);g.on("breakpoint",function(x){this._currentBreakpoint=x.incoming.name
}.bind(this));this.slides.forEach(function(y,x){var z=new j(y);z.on("click",this._handleSlideClick.bind(this,y,x));
this.emitters.push(z)}.bind(this));s.on("resize orientationchange",this._setBreakpointOnResize.bind(this))
};q._setBreakpointOnResize=function(){var z=s.innerWidth,x=s.innerHeight,y=this._currentBreakpoint
};a.exports=i},{"./BreakpointsDelegate":605,"ac-base":false,"ac-dom-emitter":35,"ac-easing":71,"ac-gallery":158,"ac-keyframe":198,"window-delegate":601}],608:[function(b,d,a){var i,g=b("ac-base").Element,c=b("ac-element-engagement").ElementEngagement,f=new c();
var h=function(j){this.elementTracker=f;this.trackedElements=this._initializeElementTrackers(j)
};i=h.prototype;i.start=function(){this.elementTracker.start()};i.stop=function(){this.elementTracker.stop()
};i._initializeElementTrackers=function(m){var l,k=m.length,j=[];for(l=0;l<k;l++){j.push(this._initializeElementTracker(m[l]))
}return j};i._initializeElementTracker=function(k){var l=g.select(k.selectorQuery),j=this.elementTracker.addElement(l,k.options),m="on";
if(k.runOnce){m="once"}if(k.onEnter){j[m]("thresholdenter",k.onEnter,this)}if(k.onExit){j[m]("thresholdexit",k.onExit,this)
}if(k.delay){j.delay=k.delay}if(k.stagger){j.stagger=k.stagger}if(k.targets){j.targets=g.selectAll(k.targets.join(","),l)
}return j};d.exports=h},{"ac-base":false,"ac-element-engagement":90}],609:[function(f,d,i){var l=f("ac-base").Element;
var h=f("ac-gallery");var p=f("window-delegate").WindowDelegate;var m=h.builder;
var c=h.horizontalSliderKeyframesGenerator;var a={};function j(q,B,E,s,A,z,x){var v,r,D,w=b(q),C=a[w];
if(C){return C}D={};r="#"+w;s=g(s);v=r+" "+s;D.galleryType=B||"slide";D.triggerClass=k(E,w);
D.transition=A||"ease-out";D.touch=z||true;D.keyboard=("undefined"===typeof x)?true:x;
D.galleryElement=l.select(r);D.keyframeEls=l.selectAll(v);D.sliderFrames=c(D.keyframeEls);
a[w]=n(D);function u(K){var H=a[w];var G=H.gallery.getSelectedIndex();H.gallery._keyframes[0].draw(0);
var L=h.horizontalSliderKeyframesGenerator(D.keyframeEls);H.gallery._keyframes=L.keyframes;
L.keyframes[G].draw();H.triggerPainter._paint({incoming:L.keyframes[G]});if(H.touchController){var J=H.gallery.toTimeline(L.bounceOutKeyframe,L.bounceInKeyframe);
var I=D.galleryElement.offsetWidth/H.touchController.options.scrollVelocity;var F=D.galleryElement.offsetHeight/H.touchController.options.scrollVelocity;
H.touchController._scrollView._touchContainerWidth=I;H.touchController._scrollView._touchContainerHeight=F;
H.touchController._scrollView._innerScrollWidth=(I*H.gallery.numKeyframes())+(H.touchController._scrollView.options.startBounceDistance+H.touchController._scrollView.options.endBounceDistance);
H.touchController._scrollView._innerScrollHeight=(F*H.gallery.numKeyframes())+(H.touchController._scrollView.options.startBounceDistance+H.touchController._scrollView.options.endBounceDistance);
H.touchController._player=J;H.touchController._scrollRenderer._player=J;H.touchController.onDidShow()
}H.gallery.show(G,{useTransition:false})}var y=a[w].touchController?100:1500;var t=o(u,y);
if(D.galleryType==="slide"){p.on(a[w].touchController?"orientationchange":"resize",t)
}return a[w]}function o(q,s){var r;return function(){var u=this;var t=arguments;
clearTimeout(r);r=setTimeout(function(){q.apply(u,t);r=u=t=null},s)}}function n(q){var r;
switch(q.galleryType){case"fade":r={engagementElement:q.galleryElement,touchElement:q.galleryElement,triggerSelector:q.triggerClass,keyframeElements:q.keyframeEls};
break;default:r={engagementElement:q.galleryElement,touchElement:q.galleryElement,triggerSelector:q.triggerClass,keyframes:q.sliderFrames.keyframes,bounceInKeyframe:q.sliderFrames.bounceInKeyframe,bounceOutKeyframe:q.sliderFrames.bounceOutKeyframe,transitionEasing:q.transition,touch:q.touch,shouldUseKeyboard:q.keyboard};
break}return m(r)}function b(q){if(q){q=q.match(/^(#)?(\S+)$/);if(q&&q.length===3){q=q[2]
}}return q}function g(q){if(q){q=q.match(/^(\.)?(\S+)$/);if(q&&q.length===3){q="."+q[2]
}}else{q=".gallery-content"}return q}function k(r,q){if(r){r=r.match(/^(\.)?(\S+)$/);
if(r&&r.length===3){return"."+r[2]}}else{r="."+q+"-trigger"}return r}d.exports={create:j}
},{"ac-base":false,"ac-gallery":158,"window-delegate":601}],610:[function(c,a,d){var b=c("./value");
var h=c("../shared/BreakpointsDelegate");var g=c("ac-base").Element;var i=c("ac-dom-emitter").DOMEmitter;
var k=c("ac-event-emitter").EventEmitter;var j=c("window-delegate").WindowDelegate;
a.exports=f;function f(l,n,m){k.call(this,null);this.gallery=l;this.el=n;this._domEmitter=new i(this.el);
this.children=m;this._minHeight=200;this._basePadding=0;this.heightMap={};this.current=this._getId(this.children[0]);
this._boundOnTransitionEndEvent=this._onTransitionEndEvent.bind(this);this._domEmitter.on("transitionend webkitTransitionEnd oTransitionEnd",this._boundOnTransitionEndEvent);
this.resize();g.setVendorPrefixStyle(this.el,"transition","height 0.3s 0.1s");this.gallery.on("willShow",this.onshow.bind(this))
}f.prototype=new k(null);f.prototype.adjustByTallest=false;f.prototype.resize=function(m){var n=30;
var l=0;switch(h.breakpoint.name){case"xsmall":n=0;break;case"medium":n=20;break;
case"large":n=30;break}n+=b(this._basePadding);this.children.forEach(function(q){var p=this._getId(q);
var o;if("none"===g.getStyle(q,"display")){g.setStyle(q,{display:"block"});o=parseInt(q.clientHeight+n,10);
g.setStyle(q,{display:"none"})}else{o=q.clientHeight+n}this.heightMap[p]=o;if(o>l){l=o
}}.bind(this));this.tallest=l;if(this.adjustByTallest){this.setHeightByValue(l,m)
}else{this.setHeight(this.current,m)}};f.prototype._getId=function(l){return l.getAttribute("data-id")||l.id
};f.prototype.onshow=function(m){var l=m.incoming;this.current=l.id;if(!this.adjustByTallest){this.setHeight(this.current)
}};f.prototype.setHeight=function(l){this.setHeightByValue(this.heightMap[l])};
f.prototype.setHeightByValue=function(l){g.setStyle(this.el,{height:Math.max(l,b(this._minHeight))+"px"})
};f.prototype.basePadding=function(l,m){if(arguments.length){this._basePadding=l;
if(!m){this.resize()}}else{return this._basePadding}};f.prototype._onTransitionEndEvent=function(){j.trigger("adjuster:resize")
};f.prototype.minHeight=function(l,m){if(arguments.length){this._minHeight=l;if(!m){this.resize()
}}else{return this._minHeight}}},{"../shared/BreakpointsDelegate":605,"./value":622,"ac-base":false,"ac-dom-emitter":35,"window-delegate":601}],611:[function(b,c,a){var h=b("ac-analytics");
var g=b("ac-event-emitter").EventEmitter;var d=b("ac-base").Element;function i(j){this.player=j;
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
var n;var m="data-analytics-id";var j="";var l="";var p;if(!this.sources[o]){k=d.select("#"+o);
if(k){if(k.getAttribute(m)){n=k;j=k.getAttribute(m);l=o}else{n=d.select("["+m+"]",k);
if(n){j=n.getAttribute(m);l=n.getAttribute("id")||""}}if(n){p=this._createStubPlayer(n,j,l);
this.sources[o]={stubPlayer:p,observer:this._createObserver(p),cid:q}}}}};f._createStubPlayer=function(l,j,k){var m=new g();
m.element=l;m.targetId=j||k||"";return m};c.exports=i},{"ac-base":false}],612:[function(c,d,b){var f=c("ac-base").Element,a=c("../shared/BreakpointsDelegate");
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
}};return{getFunctionByKey:function(i){return h[i]}}}());d.exports=g},{"../shared/BreakpointsDelegate":605,"ac-base":false}],613:[function(c,d,b){var g,f=c("ac-event-emitter").EventEmitter,a=c("scroll-time-update").ElementScrollTimeUpdate;
var h=function(j,k,i){this._scrollHandler=new a(j,i);this._scrollHandler.on("draw",k);
if(!i.preventStart){this._scrollHandler.setCurrentTime()}};g=h.prototype=new f(null);
g.start=function(){this._scrollHandler._clock.start();return this};g.stop=function(){this._scrollHandler._clock.stop();
return this};g.resize=function(){this._scrollHandler.setOffsets()};d.exports=h},{"scroll-time-update":598}],614:[function(b,d,a){var h,f=b("ac-base").Element,g=b("./ParallaxFunctions"),i=b("./ParallaxObject");
var c=function(j){this.parallaxObjects=this._initializeParallaxObjects(j);this.resize=this.resize.bind(this)
};h=c.prototype;h.start=function(){this.parallaxObjects.forEach(function(j){j.start()
})};h.resize=function(){this.parallaxObjects.forEach(function(j){j.resize()})};
h.stop=function(){this.parallaxObjects.forEach(function(j){j.stop()})};h._initializeParallaxObjects=function(l){var k=[],j=l.length,m;
for(m=0;m<j;m++){k.push(this._initializeParallaxObject(l[m]))}return k};h._initializeParallaxObject=function(k){var m=f.select(k.selectorQuery),j=k.targets?f.selectAll(k.targets.join(","),m):null,n=g.getFunctionByKey(k.type),l=new i(m,n.bind(null,m,j),k.options);
return l};d.exports=c},{"./ParallaxFunctions":612,"./ParallaxObject":613,"ac-base":false}],615:[function(c,g,b){var f=c("scroll-time-update").ScrollTimeUpdate;
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
this.scrollTimeUpdate.start()}},{"ac-base":false,"scroll-time-update":598,"window-delegate":601}],616:[function(c,a,f){var d=c("./localnav");
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
return true}}catch(o){}l=false;return false}}}());a.exports=h},{"./BreakpointsDelegate":605,"./RevealNext":615,"./localnav":619,"ac-base":false}],617:[function(c,b,f){c("./objectassign_polyfill");
c("../shared/objectcreate_polyfill");var a=c("ac-video").Player;var k=c("./VideoGalleryItem");
var j=c("./GalleryFactory");var i=c("ac-base").Element;var l=c("ac-base").Environment;
var h=c("./BreakpointsDelegate");function g(){var m=j.create.apply(null,arguments);
d(m.gallery,m.trigger);return m}function d(B,o){var n=B.options.engagementElement;
var v=i.selectAll(o._el);var q={itemHeight:0};for(var t=0,r=v.length;t<r;t++){var z=B._keyframes[t];
var p=v[t];var s=p.hash;var y=new k(i.select(s),p);if(q.itemHeight<y.itemHeight){q=y
}B._keyframes[t].item=y;if(t===0){y.el.style.zIndex=2}}n.style.minHeight="0";B.wrap=i.select(".gallery-view",B.options.engagementElement);
q.on("resize",A.bind(B));q.onresize();B.on("willShow",function(C){if(!l.Feature.touchAvailable()){i.addClassName(n,"video-triggered");
C.incoming.item.button.style.display="none"}});B.on("didShow",w.bind(B));requestAnimationFrame(function(){for(var C=0;
C<B._keyframes.length;C++){var D=B._keyframes[C].item;if("xsmall"===h.breakpoint.name){if(C===0){x(D)
}}D.onresize()}});function x(C){n.style.minHeight="0";n.style.height=C.itemHeight+0+"px"
}function w(E){var D=E.incoming.item;var C=E.outgoing.item;D.el.style.zIndex=2;
C.el.style.zIndex=0;if(!(l.Feature.isHandheld())){D.play()}C.pause();if("xsmall"===h.breakpoint.name){x(D)
}}function A(C){if("xsmall"!==h.breakpoint.name){n.style.minHeight="0";n.style.height=C.itemHeight+"px"
}else{}}function u(E){if("xsmall"===E.incoming.name){B.wrap.style.height="";for(var C=0;
C<B._keyframes.length;C++){var D=B._keyframes[C].item;D.reset()}}else{q.onresize()
}}h.on("breakpoint",u);if("xsmall"===h.breakpoint.name){u({incoming:{name:"xsmall"}})
}var m=o._click;o._click=function(E,D){var G;for(var F=0,C=B._keyframes.length;
F<C;F++){if(B._keyframes[F].item.el.id===E.hash.replace("#","")){G=B._keyframes[F].item;
break}}if(!(l.Feature.isHandheld())){G.play()}m.apply(this,arguments)}}b.exports={create:g}
},{"../shared/objectcreate_polyfill":621,"./BreakpointsDelegate":605,"./GalleryFactory":609,"./VideoGalleryItem":618,"./objectassign_polyfill":620,"ac-base":false,"ac-video":595}],618:[function(d,c,h){var b=d("ac-video").Player;
var p=d("ac-event-emitter").EventEmitter;var m=d("ac-dom-emitter").DOMEmitter;var i=d("ac-base").Element;
var a=d("window-delegate").windowEmitter;var o=d("window-delegate").WindowDelegate;
var l=d("ac-base").Environment;var f=d("./LegacyAnalyticsTranslator");var g=d("ac-vatman");
c.exports=j;var n=/object|embed/i;function j(s,r){p.call(this,null);this.el=s;this.triggerElement=r;
this.isReady=false;this.isDimensionMeasured=false;this.video=k(s);var q;if(this.video){this.analyticsTranslator=new f(this.video);
this.analyticsTranslator.activate();r.id=q=r.hash.replace("#","");r.setAttribute("data-analytics-id",q);
this.analyticsTranslator.addSourceObject(q,this.video.getCurrentSrc().cid)}this.container=i.select("figure",this.el);
this.sectionCopy=i.select(".section-copy",this.el);this.button=i.select(".icon-play",this.el);
this.isReady=false;this.onresize=this.onresize.bind(this);this.bind();this.onresize()
}j.prototype=new p(null);j.prototype.aspectRatio=1920/1080;j.prototype.ieLimit=3000;
j.prototype.videoHeightRatio=0.75;j.prototype.bind=function(){var q=i.select("a",this.el);
this.events=new m(this.el);if(!(l.Feature.isTablet()||l.Feature.isHandheld())){if(l.Browser.name.toLowerCase()==="ie"){i.addEventListener(q,"click",function(r){r.preventDefault();
this.onCalloutClicked();this.onclick()}.bind(this))}}this.onViewReady();this.video.on("canplay",this.onCanPlay.bind(this));
this.video.on("acv-no-support",this.onNoSupport.bind(this));this.video.on("play",this.onplay.bind(this));
this.video.on("pause",this.onpause.bind(this));this.video.on("loadedmetadata",this.onmetadata.bind(this));
a.on("resize orientationchange",this.onresize)};j.prototype.onCanPlay=function(){this.isReady=true
};j.prototype.onViewReady=function(){var r=i.getStyle(this.container,"backgroundImage"),t=r.replace("url(","").replace(")",""),q,s;
if(l.Feature.isHandheld()||l.Feature.isTablet()){q=this.container.clientHeight;
i.addClassName(this.el,"acv-view-ready");this.video.getMediaElement().id="video-"+this.el.id
}if(l.Browser.os.toLowerCase()==="android"){i.addClassName(this.el,"acv-android")
}if(l.Feature.isHandheld()||l.Feature.isTablet()){i.addClassName(this.el,"acv-native");
this.video.setPoster(t)}if(l.Feature.isTablet()){i.addClassName(this.el,"acv-inline-playback")
}this.triggerElement.removeAttribute("style");s=this.onclick.bind(this);i.removeEventListener(this.video.el,"click",s);
i.addEventListener(this.video.el,"click",s)};j.prototype.onclick=function(q){if(this.video.getPaused()){this.play()
}else{this.pause()}};j.prototype.onCalloutClicked=function(){var q=this.onclick.bind(this);
this.isReady=true;this.onresize();i.removeEventListener(this.triggerElement,"click",q);
i.addEventListener(this.triggerElement,"click",q)};j.prototype.onpause=function(){if(l.Feature.isTablet()&&!this.isReady){return
}if(!l.Feature.isTablet()){this.button.style.display="";i.removeClassName(this.el,"video-playing");
i.addClassName(this.el,"video-paused")}};j.prototype.onplay=function(){if(!this.isDimensionMeasured){this.onmetadata()
}i.addClassName(this.el,"video-playing");i.removeClassName(this.el,"video-paused")
};j.prototype.unbind=function(){i.removeClassName(this.el,"video-playing");i.removeClassName(this.el,"video-paused");
a.off("resize orientationchange",this.onresize);this.off()};j.prototype.onresize=function(){var w=Math.max(o.innerHeight,700),v=o.innerWidth,r=v/this.aspectRatio,s=Math.min(v,1920),q=s/this.aspectRatio,u=Math.min(r,this.videoHeightRatio*w),t;
this.itemHeight=this.sectionCopy.clientHeight+u;t=(l.Browser.name.toLowerCase()==="ie"&&l.Browser.version<9);
if(!t){this.video.getMediaElement().style.width=v+"px";this.video.getMediaElement().style.height=r+"px";
this.video.el.style.marginTop=(u-r)/2+"px";if(l.Feature.isHandheld()||l.Feature.isTablet()){this.video.getMediaElement().style.width=v+"px";
this.video.el.style.marginTop=(u-r)+"px"}}else{if(this.video.getMediaElement()){this.video.getMediaElement().style.width=s+"px";
this.video.getMediaElement().style.height=q+"px";this.video.getMediaElement().style.pointerEvents="none";
this.video.getMediaElement().style.margin=(u-q)/2+"px auto 0";i.addEventListener(this.video.getMediaElement(),"click",function(x){x.preventDefault()
})}}this.container.style.height=u+"px";this.trigger("resize",{itemHeight:this.itemHeight,videoHeight:u,isRatioMaintained:r===u})
};j.prototype.onmetadata=function(){this.aspectRatio=this.video.getMediaWidth()/this.video.getMediaHeight();
this.onDimensionMeasured=true;this.onresize()};j.prototype.reset=function(){this.container.style.height=""
};j.prototype.play=function(){if(this.video){if(this.video.getPreload()==="none"){this.video.setPreload("auto")
}if(this.video.getReadyState()!==4&&!l.Feature.isTablet()){this.video.on("readystatechange",function(){if(this.video.getReadyState()===4){this.play()
}},this)}else{this.video.play();if(l.Feature.isHandheld()||l.Feature.isTablet()){this.onplay()
}}}};j.prototype.pause=function(){if(this.video){if(this.video.getReadyState()!==4){}else{this.video.pause()
}this.onpause()}};j.prototype.onNoSupport=function(){i.addClassName(this.el,"acv-no-support")
};function k(w){var z="target-"+w.id.replace("#","");var u=i.select(".icon-play",w);
var x=i.select(".ac-video",w);var B=i.select("figure",w);var t=i.getStyle(B,"backgroundImage");
var C=t.replace("url(","").replace(")","").replace('"',"").replace('"',"");var D;
var r=x.getAttribute("href");var q=(l.Browser.name.toLowerCase()==="chrome");var s=(l.Browser.name.toLowerCase()==="firefox");
var A=(l.Browser.name.toLowerCase()==="ie"&&l.Browser.version>=9);u.setAttribute("data-acv-target",z);
if(l.Browser.os.toLowerCase()==="android"){x.href=x.href.replace("/v/iphone-6/b/scripts/_r848-9dwc.mov","/v/iphone-6/b/scripts/_416x234h.mp4")
}if(q||s||A){r=g.vatClient.getSource(r,window.innerWidth)}var y={};if(!l.Feature.isTablet()){y.controls=false
}if(l.Browser.name.toLowerCase()==="ie"){r+="?"+new Date().getTime()}var v={autoplay:false,src:r,loop:true,poster:C};
if(l.Browser.name.toLowerCase()==="ie"){v.preload="none"}D=b.create(v,y);D.appendTo(x.parentNode);
return D}},{"./LegacyAnalyticsTranslator":611,"ac-base":false,"ac-dom-emitter":35,"ac-vatman":223,"ac-video":595,"window-delegate":601}],619:[function(b,d,a){var h=b("ac-dom-emitter").DOMEmitter;
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
}}}}());d.exports=i},{"ac-base":false,"ac-dom-emitter":35,"window-delegate":601}],620:[function(b,c,a){if(!Object.assign){if(!Object.keys){Object.keys=function d(g){var f=[];
var h;if((!g)||(typeof g.hasOwnProperty!=="function")){throw"Object.keys called on non-object."
}for(h in g){if(g.hasOwnProperty(h)){f.push(h)}}return f}}if(Object.defineProperty){if(!Object.assign){Object.defineProperty(Object,"assign",{enumerable:false,configurable:true,writable:true,value:function(q,f){if(q===undefined||q===null){throw new TypeError("Cannot convert first argument to object")
}var s=Object(q);var o=false;var g;for(var h=1;h<arguments.length;h++){var l=arguments[h];
if(l===undefined||l===null){continue}var k=Object.keys(Object(l));for(var j=0,n=k.length;
j<n;j++){var r=k[j];try{var m=Object.getOwnPropertyDescriptor(l,r);if(m!==undefined&&m.enumerable){s[r]=l[r]
}}catch(p){if(!o){o=true;g=p}}}if(o){throw g}}return s}})}}else{Object.assign=function(){for(var g=1;
g<arguments.length;g++){for(var f in arguments[g]){if(arguments[g].hasOwnProperty(f)){arguments[0][f]=arguments[g][f]
}}}return arguments[0]}}}},{}],621:[function(b,c,a){if(!Object.create){var d=function(){};
Object.create=function(f){if(arguments.length>1){throw new Error("Second argument not supported")
}if(f===null||typeof f!=="object"){throw new TypeError("Object prototype may only be an Object.")
}d.prototype=f;return new d()}}},{}],622:[function(b,c,a){c.exports=function(d){if("function"===typeof d){return d()
}else{return d}}},{}]},{},[604]);