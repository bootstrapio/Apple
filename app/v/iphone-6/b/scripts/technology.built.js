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
this.off();this.el=this._eventEmitter=this._bindings=null};c.exports=h},{}],37:[function(b,c,a){var d=b("./ac-element-tracker/ElementTracker");
c.exports=new d();c.exports.ElementTracker=d},{"./ac-element-tracker/ElementTracker":38}],38:[function(c,b,g){var h;
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
}return o};b.exports=a},{"./TrackedElement":39,"ac-base":false,"ac-object":41,"window-delegate":66}],39:[function(b,c,a){var d;
var g=b("ac-dom-emitter").DOMEmitter;function f(h){if(h.nodeType&&h.nodeType>0){this.element=h
}else{throw new TypeError("TrackedElement: "+h+" is not a valid DOM element")}this.inView=false;
this.percentInView=0;this.pixelsInView=0;this.offsetTop=0;this.top=0;this.right=0;
this.bottom=0;this.left=0;this.width=0;this.height=0;g.call(this,h)}d=f.prototype=new g(null);
c.exports=f},{"ac-dom-emitter":35}],40:[function(i,c,x){var s=Object.prototype.toString;
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
}catch(z){return A}}},{}],41:[function(b,c,a){c.exports={clone:b("./ac-object/clone"),create:b("./ac-object/create"),defaults:b("./ac-object/defaults"),extend:b("./ac-object/extend"),getPrototypeOf:b("./ac-object/getPrototypeOf"),isDate:b("./ac-object/isDate"),isEmpty:b("./ac-object/isEmpty"),isRegExp:b("./ac-object/isRegExp"),toQueryParameters:b("./ac-object/toQueryParameters")}
},{"./ac-object/clone":42,"./ac-object/create":43,"./ac-object/defaults":44,"./ac-object/extend":45,"./ac-object/getPrototypeOf":46,"./ac-object/isDate":47,"./ac-object/isEmpty":48,"./ac-object/isRegExp":49,"./ac-object/toQueryParameters":50}],42:[function(b,c,a){var f=b("./extend");
c.exports=function d(g){return f({},g)}},{"./extend":45}],43:[function(b,d,a){var f=function(){};
d.exports=function c(g){if(arguments.length>1){throw new Error("Second argument not supported")
}if(g===null||typeof g!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(g)}else{f.prototype=g;
return new f()}}},{}],44:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"){throw new TypeError("defaults: must provide a defaults object")
}g=g||{};if(typeof g!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return f({},h,g)}},{"./extend":45}],45:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]}else{h=[].slice.call(arguments)
}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{}],46:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(i){if(Object.getPrototypeOf){return Object.getPrototypeOf(i)
}else{if(typeof i!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return i.__proto__}else{var g=i.constructor;
var h;if(a.call(i,"constructor")){h=g;if(!(delete i.constructor)){return null}g=i.constructor;
i.constructor=h}return g?g.prototype:null}}}}},{}],47:[function(b,d,a){d.exports=function c(f){return Object.prototype.toString.call(f)==="[object Date]"
}},{}],48:[function(c,d,b){var a=Object.prototype.hasOwnProperty;d.exports=function f(g){var h;
if(typeof g!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(h in g){if(a.call(g,h)){return false}}return true}},{}],49:[function(c,d,b){d.exports=function a(f){return window.RegExp?f instanceof RegExp:false
}},{}],50:[function(c,f,b){var a=c("qs");f.exports=function d(g){if(typeof g!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return a.stringify(g)}},{qs:40}],51:[function(b,d,a){var c=b("./ac-element-engagement/ElementEngagement");
d.exports=new c();d.exports.ElementEngagement=c},{"./ac-element-engagement/ElementEngagement":52}],52:[function(c,b,f){var g;
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
},this)};b.exports=a},{"ac-base":false,"ac-element-tracker":37,"ac-object":41}],53:[function(b,c,a){c.exports=b(40)
},{}],54:[function(b,c,a){c.exports={clone:b("./ac-object/clone"),defaults:b("./ac-object/defaults"),extend:b("./ac-object/extend"),getPrototypeOf:b("./ac-object/getPrototypeOf"),isEmpty:b("./ac-object/isEmpty"),toQueryParameters:b("./ac-object/toQueryParameters")}
},{"./ac-object/clone":55,"./ac-object/defaults":56,"./ac-object/extend":57,"./ac-object/getPrototypeOf":58,"./ac-object/isEmpty":59,"./ac-object/toQueryParameters":60}],55:[function(b,c,a){c.exports=b(42)
},{"./extend":57}],56:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"||typeof g!=="object"){throw new TypeError("defaults: must provide a defaults and options object")
}return f({},h,g)}},{"./extend":57}],57:[function(b,c,a){c.exports=b(45)},{}],58:[function(b,c,a){c.exports=b(46)
},{}],59:[function(b,c,a){c.exports=b(48)},{}],60:[function(b,c,a){c.exports=b(50)
},{qs:53}],61:[function(b,c,a){c.exports.Smoother=b("./smoother/Smoother")},{"./smoother/Smoother":62}],62:[function(c,d,b){d.exports=a;
function a(f){f=f||this.sampling;this.pool=new Array(f);this.raw=0;this.value=0
}a.prototype.sampling=3;a.prototype.smooth=function(g,k){var j=0;var f=this.pool.length;
if(typeof this.pool[f-this.sampling]!=="undefined"){for(var h=this.sampling;h>0;
h--){j+=this.pool[f-h]}j+=g;j/=(this.sampling+1)}else{j=g}if(!k){this.raw=g;this._track(j,true)
}return j};a.prototype._track=function(g,f){if(f){this.value=g}else{this.raw=this.value=g
}this.pool.push(g);this.pool.shift()}},{}],63:[function(b,c,a){c.exports.ScrollTimeUpdate=b("./scroll-time-update/ScrollTimeUpdate");
c.exports.ElementScrollTimeUpdate=b("./scroll-time-update/ElementScrollTimeUpdate")
},{"./scroll-time-update/ElementScrollTimeUpdate":64,"./scroll-time-update/ScrollTimeUpdate":65}],64:[function(c,g,b){var f=c("./ScrollTimeUpdate"),d=c("window-delegate").WindowDelegate;
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
this._updateOnResize=false};g.exports=a},{"./ScrollTimeUpdate":65,"window-delegate":66}],65:[function(c,b,d){var f,j=c("ac-event-emitter").EventEmitter,a=c("ac-clock"),k=c("window-delegate").WindowDelegate,h=c("smoother").Smoother,i=c("ac-dom-emitter").DOMEmitter;
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
},{"ac-clock":31,"ac-dom-emitter":35,smoother:61,"window-delegate":66}],66:[function(b,c,a){c.exports.WindowDelegate=b("./window-delegate/WindowDelegate");
c.exports.windowEmitter=b("./window-delegate/windowEmitter")},{"./window-delegate/WindowDelegate":67,"./window-delegate/windowEmitter":68}],67:[function(c,f,a){var g;
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
}else{if(j){this.trigger("scrollStop")}}};f.exports=new d()},{"./windowEmitter":68}],68:[function(b,c,a){var d=b("ac-dom-emitter").DOMEmitter;
c.exports=new d(window)},{"ac-dom-emitter":35}],69:[function(b,a,d){var f,i=b("ac-base").Element,c=b("ac-object"),k=b("window-delegate").WindowDelegate,j=b("ac-event-emitter").EventEmitter;
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
},{"ac-base":false,"ac-object":54,"window-delegate":66}],70:[function(b,c,a){var d=b("ac-base").Element;
var f=(function(){return{addToTrackerList:function(i,h){var g=this._calloutEnter.bind(this);
h.forEach(function(k,j){i.push({selectorQuery:k.selector,targets:k.targets,stagger:k.stagger,onEnter:g,delay:k.delay,runOnce:true,options:{inViewThreshold:k.inViewThreshold||0.5}})
}.bind(this))},_calloutEnter:function(i){var g=i.delay;var h=i.stagger||200;if(i.targets){i.targets.forEach(function(k,j){this._addClassWithDelay(k,h*j)
}.bind(this))}else{this._addClassWithDelay(i.el,g)}},_addClassWithDelay:function(h,g){if(g){setTimeout(function(){d.addClassName(h,"animated")
},g)}else{d.addClassName(h,"animated")}}}})();c.exports=f},{"ac-base":false}],71:[function(c,f,b){var i=c("ac-animation-sequencer").ElementClip;
var h={render:g};f.exports=d;function d(j){this.el=j.element;this.el.nodeType=1;
j.renderer=h;i.call(this,j)}d.create=function(j){return new d(j)};d.validate=function(j){return true
};for(var a in i.prototype){d.prototype[a]=i.prototype[a]}function g(k,j){j.forEach(function(l){k[l.prop]=l.value
})}},{"ac-animation-sequencer":4}],72:[function(b,d,a){var i,g=b("ac-base").Element,c=b("ac-element-engagement").ElementEngagement,f=new c();
var h=function(j){this.elementTracker=f;this.trackedElements=this._initializeElementTrackers(j)
};i=h.prototype;i.start=function(){this.elementTracker.start()};i.stop=function(){this.elementTracker.stop()
};i._initializeElementTrackers=function(m){var l,k=m.length,j=[];for(l=0;l<k;l++){j.push(this._initializeElementTracker(m[l]))
}return j};i._initializeElementTracker=function(k){var l=g.select(k.selectorQuery),j=this.elementTracker.addElement(l,k.options),m="on";
if(k.runOnce){m="once"}if(k.onEnter){j[m]("thresholdenter",k.onEnter,this)}if(k.onExit){j[m]("thresholdexit",k.onExit,this)
}if(k.delay){j.delay=k.delay}if(k.stagger){j.stagger=k.stagger}if(k.targets){j.targets=g.selectAll(k.targets.join(","),l)
}return j};d.exports=h},{"ac-base":false,"ac-element-engagement":51}],73:[function(b,c,a){c.exports=function(f){var d=f.getContext("2d");
var g=window.devicePixelRatio||1;if(1!=g){f.style.width=f.width+"px";f.style.height=f.height+"px";
f.width*=g;f.height*=g;d.scale(g,g)}return f}},{}],74:[function(c,d,b){var f=c("ac-base").Element,a=c("../shared/BreakpointsDelegate");
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
}};return{getFunctionByKey:function(i){return h[i]}}}());d.exports=g},{"../shared/BreakpointsDelegate":69,"ac-base":false}],75:[function(c,d,b){var g,f=c("ac-event-emitter").EventEmitter,a=c("scroll-time-update").ElementScrollTimeUpdate;
var h=function(j,k,i){this._scrollHandler=new a(j,i);this._scrollHandler.on("draw",k);
if(!i.preventStart){this._scrollHandler.setCurrentTime()}};g=h.prototype=new f(null);
g.start=function(){this._scrollHandler._clock.start();return this};g.stop=function(){this._scrollHandler._clock.stop();
return this};g.resize=function(){this._scrollHandler.setOffsets()};d.exports=h},{"scroll-time-update":63}],76:[function(b,d,a){var h,f=b("ac-base").Element,g=b("./ParallaxFunctions"),i=b("./ParallaxObject");
var c=function(j){this.parallaxObjects=this._initializeParallaxObjects(j);this.resize=this.resize.bind(this)
};h=c.prototype;h.start=function(){this.parallaxObjects.forEach(function(j){j.start()
})};h.resize=function(){this.parallaxObjects.forEach(function(j){j.resize()})};
h.stop=function(){this.parallaxObjects.forEach(function(j){j.stop()})};h._initializeParallaxObjects=function(l){var k=[],j=l.length,m;
for(m=0;m<j;m++){k.push(this._initializeParallaxObject(l[m]))}return k};h._initializeParallaxObject=function(k){var m=f.select(k.selectorQuery),j=k.targets?f.selectAll(k.targets.join(","),m):null,n=g.getFunctionByKey(k.type),l=new i(m,n.bind(null,m,j),k.options);
return l};d.exports=c},{"./ParallaxFunctions":74,"./ParallaxObject":75,"ac-base":false}],77:[function(c,g,b){var f=c("scroll-time-update").ScrollTimeUpdate;
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
this.scrollTimeUpdate.start()}},{"ac-base":false,"scroll-time-update":63,"window-delegate":66}],78:[function(c,a,f){var d=c("./localnav");
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
return true}}catch(o){}l=false;return false}}}());a.exports=h},{"./BreakpointsDelegate":69,"./RevealNext":77,"./localnav":79,"ac-base":false}],79:[function(b,d,a){var h=b("ac-dom-emitter").DOMEmitter;
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
}}}}());d.exports=i},{"ac-base":false,"ac-dom-emitter":35,"window-delegate":66}],80:[function(b,c,a){c.exports={create:function(){var f=document.createElement("canvas");
var d=f.getContext("2d");var h="rgb(147, 203, 73)";var g="rgb(0, 135, 203)";f.width=662;
f.height=382;var i;d.save();d.save();d.beginPath();d.moveTo(0,381.9);d.lineTo(0,375.9);
d.bezierCurveTo(161.9,375.9,239.1,370.4,284.9,355.7);d.bezierCurveTo(315.2,346,346.5,328,377.9,302);
d.bezierCurveTo(410.4,275.1,441.4,241.1,470,200.9);d.bezierCurveTo(534.8,109.8,583,46.6,658.4,0);
d.lineTo(661.6,5.1);d.bezierCurveTo(587.1,51.1,539.3,113.9,474.9,204.4);d.bezierCurveTo(446,245,414.6,279.4,381.7,306.6);
d.bezierCurveTo(349.7,333.1,317.8,351.5,286.8,361.5);d.bezierCurveTo(247.4,374.1,185.7,381.9,0,381.9);
d.closePath();i=d.createLinearGradient(0,190.9,661.6,190.9);i.addColorStop(0,h);
i.addColorStop(1,g);d.fillStyle=i;d.fill();d.restore();d.restore();return{path:f,colorA:h,colorB:g,width:f.width,height:f.height,data:{iPhone:0.009,"3G":0.013078723404255,"3GS":0.020078723404255,"4":0.059923404255319,"4s":0.200489361702128,"5":0.469425531914894,"5s":0.797234042553192,"iPhone 6":1}}
}}},{}],81:[function(f,c,j){var p=f("./../shared/FitPixelRatioCanvas");var k=f("ac-base").Environment;
var m=f("ac-base").Element;var b=f("./../shared/DummyClip");var g=f("ac-animation-sequencer").BasicPlayer;
var n=f("ac-animation-sequencer").Timeline;var i=k.Feature.threeDTransformsAvailable();
var a=f("./CPUGraph");var h=f("./GPUGraph");c.exports=l;function l(r,q){this.el=this._createElement();
this.canvas=m.select("canvas",this.el);this.labels=m.selectAll(".graph-label",this.el);
this.context=this.canvas.getContext("2d");if("gpu"===r){this.graph=h.create()}else{this.graph=a.create()
}this.scale=1;this._progress=0;this._pointProgress=0;this.linewidth=3;this.dotSize=2;
this.pointSize=this.linewidth*1.2;this.colorA=d(this.graph.colorA);this.colorB=d(this.graph.colorB);
this.padding=5;this.resize(q)}l.create=function(r,q){return new l(r,q)};l.prototype.devices=["iPhone","3G","3GS","4","4s","5","5s","iPhone 6"];
l.prototype.appendTo=function(q){q.style.backgroundImage="none";q.appendChild(this.el);
this.positionDOM()};l.prototype.resize=function(q){if("xsmall"===q.name){this.scale=0.78/2
}else{if("medium"===q.name){this.scale=0.76/2}else{this.scale=1/2}}this.reset();
this.positionDOM();this.render(this.context)};l.prototype.reset=function(){this.paddingBottom=33*this.scale;
this.getDimension();this.rulePadding=this.graphHeight*2*this.scale;this.targetRulePadding=25*this.scale;
this.canvas.width=this.width;this.canvas.height=this.height;p(this.canvas);this.preparePoints()
};l.prototype.positionDOM=function(){for(var u=0,s=this.labels.length;u<s;u++){var t=this.labels[u];
var r=this.points[u];var q=Math.round(r.x-t.offsetWidth/2);var v=Math.round(r.y);
m.setVendorPrefixStyle(t,"transitionDelay",u*100+"ms, 0");if(i){m.setVendorPrefixStyle(t,"transform","translate3d("+q+"px, "+v+"px, 0)")
}else{m.setVendorPrefixStyle(t,"transform","translate("+q+"px, "+v+"px)")}}};l.prototype.preparePoints=function(s){var u=[];
var t=[];var r=[];var q=this.devices.length;this.devices.forEach(function(y,x){var z=x/(q-1);
var v={x:this.graphWidth*z,y:(1-this.graph.data[y])*this.graphHeight,size:this.points?this.points[x].size:0};
var A=this.getColorAt(z);v.color="rgb("+[A.r.toString(),A.g.toString(),A.b.toString()].join(",")+")";
u.push(v);var w={x:v.x,y:this.graphHeight+this.paddingBottom,size:this.dotSize,color:"#D6D6D6"};
t.push(w);r.push({start:w,end:v,padding:this.rules?this.rules[x].padding:this.rulePadding})
}.bind(this));this.points=u;this.dots=t;this.rules=r};l.prototype.getColorAt=function(q){return{r:(this.colorA.r+q*(this.colorB.r-this.colorA.r))&255,g:(this.colorA.g+q*(this.colorB.g-this.colorA.g))&255,b:(this.colorA.b+q*(this.colorB.b-this.colorA.b))&255}
};l.prototype.intro=function(){var q=this.context;var t=0;var s=[{clip:b,element:this,startDelay:0.12,duration:0.9,props:[{property:"_progress",from:0,to:1,easing:[0.35,0,0.03,1]}]}];
for(var u=0;u<this.devices.length;u++){t=0.1+u*0.1;s.push({clip:b,element:this.points[u],startDelay:t,duration:0.75,props:[{property:"size",from:0,to:this.pointSize,easing:"easeOutBack"}]});
s.push({clip:b,element:this.rules[u],startDelay:t-0.3,duration:0.5,props:[{property:"padding",from:this.rulePadding,to:this.targetRulePadding,easing:"easeOutQuint"}]})
}var w=n.create(s);var v=(new g(w));var r=this;v.on("timeupdate",function(x){if(x.time>0.15){m.addClassName(r.el.parentElement,"point-animated")
}if(x.time>0.8){m.addClassName(r.el.parentElement,"animated")}q.clearRect(0,0,q.canvas.width,q.canvas.height);
r.render(q)});v.on("ended",function(){});v.play()};l.prototype.progress=function(q){if(arguments.length){this._progress=q
}else{return this._progress}};l.prototype.render=function(s){var y=s.createLinearGradient(0,0,this.width,0);
var w=this._progress;s.save();s.translate(this.pointSize+this.padding,this.pointSize+this.padding);
y.addColorStop(0,"rgb("+[this.colorA.r,this.colorA.g,this.colorA.b]+")");y.addColorStop(1,"rgb("+[this.colorB.r,this.colorB.g,this.colorB.b]+")");
s.strokeStyle=y;s.drawImage(this.graph.path,0,-1,this.graph.width*this.scale,this.graph.height*this.scale);
s.globalCompositeOperation="source-over";for(var v=0,r=this.dots.length;v<r;v++){var q=this.dots[v];
s.beginPath();s.fillStyle=q.color;s.arc(q.x,q.y,q.size,0,Math.PI*2);s.fill()}s.beginPath();
s.strokeStyle="#D6D6D6";s.lineWidth=1;s.moveTo(this.dots[0].x,this.dots[0].y);s.lineTo(this.dots[this.dots.length-1].x,this.dots[this.dots.length-1].y);
s.stroke();for(var v=0,r=this.points.length;v<r;v++){var q=this.points[v];var u=this.dots[v];
var x=this.rules[v];s.beginPath();s.strokeStyle="#D6D6D6";s.lineWidth=1;s.moveTo(x.start.x,x.start.y);
s.lineTo(x.end.x,Math.min(x.end.y+x.padding,x.start.y));s.stroke();s.beginPath();
s.fillStyle=q.color;s.arc(q.x,q.y,q.size,0,Math.PI*2);s.fill()}s.globalCompositeOperation="destination-in";
s.beginPath();s.fillStyle="white";s.fillRect(-this.padding*2,-10,this.width*w,this.height);
s.restore()};l.prototype.getDimension=function(){this.graphWidth=this.graph.width*this.scale;
this.graphHeight=this.graph.height*this.scale;this.width=this.graphWidth+this.pointSize*2+this.padding*2;
this.height=this.graphHeight+this.pointSize*2+this.padding*2+this.paddingBottom
};l.prototype._createElement=function(){var v=document.createElement("div");var t=document.createElement("canvas");
var r=document.createElement("div");v.className="curve-graph";v.appendChild(t);
r.className="label-container";for(var u=0,q=this.devices.length;u<q;u++){var s=document.createElement("div");
s.className="graph-label graph-label-"+o(this.devices[u]);s.textContent=this.devices[u];
r.appendChild(s)}v.appendChild(r);return v};function d(r){var q=r.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
return{r:q[1]*1,g:q[2]*1,b:q[3]*1}}function o(q){return q.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")
}},{"./../shared/DummyClip":71,"./../shared/FitPixelRatioCanvas":73,"./CPUGraph":80,"./GPUGraph":82,"ac-animation-sequencer":4,"ac-base":false}],82:[function(b,c,a){c.exports={create:function(){var f=document.createElement("canvas");
var d=f.getContext("2d");var h="rgb(251, 237, 32)";var g="rgb(240, 89, 35)";f.width=663;
f.height=382;var i;d.save();d.save();d.beginPath();d.moveTo(28.9,381);d.bezierCurveTo(24.2,381,19.5,381,14.8,381);
d.lineTo(0,381);d.lineTo(0,375);d.lineTo(14.8,375);d.bezierCurveTo(170.6,375.1,283.2,375.1,346.7,340.3);
d.bezierCurveTo(427.6,296,479.6,248.9,532.4,172.2);d.bezierCurveTo(560.3,131.7,590.8,90.6,615.4,57.6);
d.bezierCurveTo(632.6,34.5,647.4,14.6,657.5,0);d.lineTo(662.5,3.4);d.bezierCurveTo(652.3,18.1,637.4,38,620.2,61.1);
d.bezierCurveTo(595.7,94.1,565.1,135.2,537.3,175.6);d.bezierCurveTo(484,253.1,431.4,300.8,349.6,345.6);
d.bezierCurveTo(319.5,362,277.5,371.9,217.3,376.7);d.bezierCurveTo(165.1,380.8,101.8,381,28.9,381);
d.closePath();i=d.createLinearGradient(0,190.5,662.5,190.5);i.addColorStop(0,h);
i.addColorStop(1,g);d.fillStyle=i;d.fill();d.restore();d.restore();return{path:f,colorA:h,colorB:g,width:f.width,height:f.height,data:{iPhone:0+0.021,"3G":0+0.015,"3GS":0.00797872340425532+0.015,"4":0.0319148936170213+0.015,"4s":0.13563829787234+0.015,"5":0.335106382978723+0.015,"5s":0.664893617021277+0.013,"iPhone 6":1+0.01}}
}}},{}],83:[function(b,a,g){var h=b("../shared/Shared");var l=b("ac-browser");var k=b("ac-base").Element;
var i=b("./CurveGraph");var n=b("window-delegate").WindowDelegate;var j=b("../shared/BreakpointsDelegate");
var f=b("../shared/ParallaxObjectsController");var d=b("../shared/ElementTrackersController");
var c=b("../shared/CalloutTrackerFactory");var m=(function(){return{initialize:function(){var o=h.initialize();
if(l.IE&&l.version<=8){return this}if(o.parallax){var p=new f(this._getParallaxObjects());
p.start()}if(o.ambient){var q=new d(this._getElementTrackers());q.start();k.addClassName(document.body,"animatable")
}return this},_getParallaxObjects:function(){return[{selectorQuery:".section-camera .image-camera",type:"largeUpwards",options:{smooth:true,startInView:true,offsetTop:0,offsetBottom:function(){return n.innerHeight*1
}}}]},_createGraphs:function(){var o=i.create("cpu",j.breakpoint);var p=i.create("gpu",j.breakpoint);
o.appendTo(k.select(".chart-cpu-image"));p.appendTo(k.select(".chart-gpu-image"));
j.on("breakpoint",function(q){o.resize(q.incoming);p.resize(q.incoming)});return{gpu:p,cpu:o}
},_getElementTrackers:function(){var p=[];var o=this._createGraphs();p.push({selectorQuery:".section-performance-graph",onEnter:function(q){o.cpu.intro();
setTimeout(function(){o.gpu.intro()},300)},runOnce:true,options:{inViewThreshold:0}});
this._registerCalloutsTracker(p);return p},_registerCalloutsTracker:function(p){var o=[{selector:".section-hero .rounded-callout-container",targets:[".callout"],stagger:150},{selector:".section-transistors",targets:[".line-graph-row"],stagger:150}];
c.addToTrackerList(p,o)}}}());a.exports=m.initialize()},{"../shared/BreakpointsDelegate":69,"../shared/CalloutTrackerFactory":70,"../shared/ElementTrackersController":72,"../shared/ParallaxObjectsController":76,"../shared/Shared":78,"./CurveGraph":81,"ac-base":false,"ac-browser":27,"window-delegate":66}]},{},[83]);