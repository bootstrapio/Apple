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
;
function d(o,l,n,j){this.get=function(p){if(o===l&&n===j){return p}return g(k(p),l,j)
};function i(p,q){return 1-3*q+3*p}function h(p,q){return 3*q-6*p}function f(p){return 3*p
}function g(r,p,q){return((i(p,q)*r+h(p,q))*r+f(p))*r}function m(r,p,q){return 3*i(p,q)*r*r+2*h(p,q)*r+f(p)
}function k(s){var q=s;for(var r=0;r<4;++r){var t=m(q,o,n);if(t===0){return q}var p=g(q,o,n)-s;
q-=p/t}return q}}c.exports=d},{}],24:[function(b,c,a){c.exports={isNum:function(d){return typeof d==="number"
},isArray:function(f){var d=Object.prototype.toString;return d.call(f)==="[object Array]"
},addClass:function(d,f){d.classList.add(f)},removeClass:function(d,f){d.classList.remove(f)
},hasClass:function(d,f){return d.contains(f)},defaults:function(g,f){var d={};
f=f||{};for(var h in g){if(g.hasOwnProperty(h)){d[h]=(f[h]!=null)?f[h]:g[h]}}return d
},defaultProps:function(h,g,d){var f=this.defaults(g,d);for(var i in f){if(f.hasOwnProperty(i)){h[i]=f[i]
}}},invoke:function(g,d){var f=[].slice.call(arguments,2);if(!Array.isArray(g)){throw new Error("List is not an array")
}g.forEach(function(h){var i=h[d];if(i&&typeof i==="function"){i.apply(h,f)}})}}
},{}],25:[function(c,d,b){var g=c("./ac-clock/Clock"),f=c("./ac-clock/ThrottledClock"),a=c("./ac-clock/sharedClockInstance");
a.Clock=g;a.ThrottledClock=f;d.exports=a},{"./ac-clock/Clock":26,"./ac-clock/ThrottledClock":27,"./ac-clock/sharedClockInstance":28}],26:[function(c,d,b){var g;
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
},{}],27:[function(c,d,b){var g;var a=c("./sharedClockInstance"),f=c("ac-event-emitter").EventEmitter;
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
};d.exports=h},{"./sharedClockInstance":28}],28:[function(b,c,a){var d=b("./Clock");
c.exports=new d()},{"./Clock":26}],29:[function(b,c,a){c.exports.DOMEmitter=b("./ac-dom-emitter/DOMEmitter")
},{"./ac-dom-emitter/DOMEmitter":30}],30:[function(b,c,a){var g;var f=b("ac-event-emitter").EventEmitter;
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
this.off();this.el=this._eventEmitter=this._bindings=null};c.exports=h},{}],31:[function(b,c,a){c.exports.WindowDelegate=b("./window-delegate/WindowDelegate");
c.exports.windowEmitter=b("./window-delegate/windowEmitter")},{"./window-delegate/WindowDelegate":32,"./window-delegate/windowEmitter":33}],32:[function(c,f,a){var g;
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
}else{if(j){this.trigger("scrollStop")}}};f.exports=new d()},{"./windowEmitter":33}],33:[function(b,c,a){var d=b("ac-dom-emitter").DOMEmitter;
c.exports=new d(window)},{"ac-dom-emitter":29}],34:[function(b,c,a){var d=b("./ac-element-tracker/ElementTracker");
c.exports=new d();c.exports.ElementTracker=d},{"./ac-element-tracker/ElementTracker":35}],35:[function(c,b,g){var h;
var f=c("ac-object");var i=c("ac-base").Element;var k=c("ac-base").Array;var m=c("window-delegate").WindowDelegate;
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
}if(q){this._ifAlreadyInView(n,o)}return n};b.exports=a},{"./TrackedElement":36,"ac-base":false,"ac-object":129,"window-delegate":31}],36:[function(b,c,a){var d;
var h=b("ac-dom-emitter").DOMEmitter;var g={inViewThreshold:0.75};function f(j){var i={};
var k;if(j.nodeType&&j.nodeType>0){i.element=j}else{i=j}for(k in g){this[k]=g[k]
}for(k in i){this[k]=i[k]}this.inView=false;this.inThreshold=false;this.percentInView=0;
this.pixelsInView=0;this.offsetTop=0;this.top=0;this.right=0;this.bottom=0;this.left=0;
this.width=0;this.height=0;h.call(this,i.element)}d=f.prototype=new h(null);c.exports=f
},{"ac-dom-emitter":29}],37:[function(c,d,b){var a=c("./ac-keyboard/Keyboard");
d.exports=new a();d.exports.Keyboard=a;d.exports.keys=c("./ac-keyboard/keymap")
},{"./ac-keyboard/Keyboard":39,"./ac-keyboard/keymap":40}],38:[function(d,f,b){var c=d("ac-base").Object;
var a=["keyLocation"];function g(h){this.originalEvent=h;for(var i in h){if(typeof h[i]!=="function"&&a.indexOf(i)===-1){this[i]=h[i]
}}this.location=(this.originalEvent.keyLocation===undefined)?this.originalEvent.location:this.originalEvent.keyLocation
}g.prototype={preventDefault:function(){if(typeof this.originalEvent.preventDefault!=="function"){this.originalEvent.returnValue=false;
return}return this.originalEvent.preventDefault()},stopPropagation:function(){return this.originalEvent.stopPropagation()
}};f.exports=g},{"ac-base":false}],39:[function(f,c,h){var j=f("ac-base").Element;
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
}};i._normalizeKeyboardEvent=function(o){return new g(o)};c.exports=b},{"./KeyEvent":38,"./keymap":40,"ac-base":false}],40:[function(b,c,a){c.exports={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,COMMAND:91,CAPSLOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_ZERO:96,NUMPAD_ONE:97,NUMPAD_TWO:98,NUMPAD_THREE:99,NUMPAD_FOUR:100,NUMPAD_FIVE:101,NUMPAD_SIX:102,NUMPAD_SEVEN:103,NUMPAD_EIGHT:104,NUMPAD_NINE:105,NUMPAD_ASTERISK:106,NUMPAD_PLUS:107,NUMPAD_DASH:109,NUMPAD_DOT:110,NUMPAD_SLASH:111,NUMPAD_EQUALS:187,TICK:192,LEFT_BRACKET:219,RIGHT_BRACKET:221,BACKSLASH:220,SEMICOLON:186,APOSTRAPHE:222,SPACEBAR:32,CLEAR:12,COMMA:188,DOT:190,SLASH:191}
},{}],41:[function(c,d,b){var g=c("./utils/addEventListener");var a=c("./shared/getEventType");
d.exports=function f(k,i,j,h){i=a(k,i);return g(k,i,j,h)}},{"./shared/getEventType":52,"./utils/addEventListener":56}],42:[function(d,f,c){var a=d("./utils/dispatchEvent");
var b=d("./shared/getEventType");f.exports=function g(j,i,h){i=b(j,i);return a(j,i,h)
}},{"./shared/getEventType":52,"./utils/dispatchEvent":57}],43:[function(b,c,a){c.exports={addEventListener:b("./addEventListener"),dispatchEvent:b("./dispatchEvent"),preventDefault:b("./preventDefault"),removeEventListener:b("./removeEventListener"),stop:b("./stop"),stopPropagation:b("./stopPropagation"),target:b("./target")}
},{"./addEventListener":41,"./dispatchEvent":42,"./preventDefault":50,"./removeEventListener":51,"./stop":53,"./stopPropagation":54,"./target":55}],44:[function(b,c,a){if(document.createEvent){try{new window.CustomEvent("click")
}catch(d){window.CustomEvent=(function(){function f(h,i){i=i||{bubbles:false,cancelable:false,detail:undefined};
var g=document.createEvent("CustomEvent");g.initCustomEvent(h,i.bubbles,i.cancelable,i.detail);
return g}f.prototype=window.Event.prototype;return f}())}}},{}],45:[function(d,b,f){var g=d("./utils/eventTypeAvailable");
var j=d("./shared/camelCasedEventTypes");var c=d("./shared/windowFallbackEventTypes");
var h=d("./shared/prefixHelper");var a={};b.exports=function i(m,l){var n;var o;
var k;l=l||"div";m=m.toLowerCase();if(!(l in a)){a[l]={}}o=a[l];if(m in o){return o[m]
}if(g(m,l)){return o[m]=m}if(m in j){for(k=0;k<j[m].length;k++){n=j[m][k];if(g(n.toLowerCase(),l)){return o[m]=n
}}}for(k=0;k<h.evt.length;k++){n=h.evt[k]+m;if(g(n,l)){h.reduce(k);return o[m]=n
}}if(l!=="window"&&c.indexOf(m)){return o[m]=i(m,"window")}return o[m]=false}},{"./shared/camelCasedEventTypes":46,"./shared/prefixHelper":47,"./shared/windowFallbackEventTypes":48,"./utils/eventTypeAvailable":49}],46:[function(b,c,a){c.exports={transitionend:["webkitTransitionEnd","MSTransitionEnd"],animationstart:["webkitAnimationStart","MSAnimationStart"],animationend:["webkitAnimationEnd","MSAnimationEnd"],animationiteration:["webkitAnimationIteration","MSAnimationIteration"],fullscreenchange:["MSFullscreenChange"],fullscreenerror:["MSFullscreenError"]}
},{}],47:[function(b,d,a){var i=["-webkit-","-moz-","-ms-"];var f=["Webkit","Moz","ms"];
var h=["webkit","moz","ms"];var c=function(){this.initialize()};var g=c.prototype;
g.initialize=function(){this.reduced=false;this.css=i;this.dom=f;this.evt=h};g.reduce=function(j){if(!this.reduced){this.reduced=true;
this.css=[this.css[j]];this.dom=[this.dom[j]];this.evt=[this.evt[j]]}};d.exports=new c()
},{}],48:[function(b,c,a){c.exports=["transitionend","animationstart","animationend","animationiteration"]
},{}],49:[function(c,f,b){var a={window:window,document:document};f.exports=function d(i,g){var h;
i="on"+i;if(!(g in a)){a[g]=document.createElement(g)}h=a[g];if(i in h){return true
}if("setAttribute" in h){h.setAttribute(i,"return;");return(typeof h[i]==="function")
}return false}},{}],50:[function(c,d,a){d.exports=function b(f){f=f||window.event;
if(f.preventDefault){f.preventDefault()}else{f.returnValue=false}}},{}],51:[function(d,f,c){var b=d("./utils/removeEventListener");
var a=d("./shared/getEventType");f.exports=function g(k,i,j,h){i=a(k,i);return b(k,i,j,h)
}},{"./shared/getEventType":52,"./utils/removeEventListener":58}],52:[function(c,f,b){var d=c("ac-prefixer/getEventType");
f.exports=function a(j,i){var h;var g;if("tagName" in j){h=j.tagName}else{if(j===window){h="window"
}else{h="document"}}g=d(i,h);if(g){return g}return i}},{"ac-prefixer/getEventType":45}],53:[function(d,g,b){var a=d("./stopPropagation");
var c=d("./preventDefault");g.exports=function f(h){h=h||window.event;a(h);c(h);
h.stopped=true;h.returnValue=false}},{"./preventDefault":50,"./stopPropagation":54}],54:[function(c,d,b){d.exports=function a(f){f=f||window.event;
if(f.stopPropagation){f.stopPropagation()}else{f.cancelBubble=true}}},{}],55:[function(b,c,a){c.exports=function d(f){f=f||window.event;
return(typeof f.target!=="undefined")?f.target:f.srcElement}},{}],56:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.addEventListener){i.addEventListener(g,h,!!f)
}else{i.attachEvent("on"+g,h)}return i}},{}],57:[function(b,c,a){b("ac-polyfills/CustomEvent");
c.exports=function d(i,h,g){var f;if(i.dispatchEvent){if(g){f=new CustomEvent(h,g)
}else{f=new CustomEvent(h)}i.dispatchEvent(f)}else{f=document.createEventObject();
if(g&&"detail" in g){f.detail=g.detail}i.fireEvent("on"+h,f)}return i}},{"ac-polyfills/CustomEvent":44}],58:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.removeEventListener){i.removeEventListener(g,h,!!f)
}else{i.detachEvent("on"+g,h)}return i}},{}],59:[function(c,d,b){c("ac-polyfills/Array/isArray");
var h=c("./extend");var a=Object.prototype.hasOwnProperty;var f=function(i,j){var k;
for(k in j){if(a.call(j,k)){if(j[k]===null){i[k]=null}else{if(typeof j[k]==="object"){i[k]=Array.isArray(j[k])?[]:{};
f(i[k],j[k])}else{i[k]=j[k]}}}}return i};d.exports=function g(j,i){if(i){return f({},j)
}return h({},j)}},{"./extend":62,"ac-polyfills/Array/isArray":68}],60:[function(b,d,a){var f=function(){};
d.exports=function c(g){if(arguments.length>1){throw new Error("Second argument not supported")
}if(g===null||typeof g!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(g)}else{f.prototype=g;
return new f()}}},{}],61:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"){throw new TypeError("defaults: must provide a defaults object")
}g=g||{};if(typeof g!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return f({},h,g)}},{"./extend":62}],62:[function(c,d,b){c("ac-polyfills/Array/prototype.forEach");
var a=Object.prototype.hasOwnProperty;d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]
}else{h=[].slice.call(arguments)}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{"ac-polyfills/Array/prototype.forEach":69}],63:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(i){if(Object.getPrototypeOf){return Object.getPrototypeOf(i)
}else{if(typeof i!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return i.__proto__}else{var g=i.constructor;
var h;if(a.call(i,"constructor")){h=g;if(!(delete i.constructor)){return null}g=i.constructor;
i.constructor=h}return g?g.prototype:null}}}}},{}],64:[function(b,c,a){c.exports={clone:b("./clone"),create:b("./create"),defaults:b("./defaults"),extend:b("./extend"),getPrototypeOf:b("./getPrototypeOf"),isDate:b("./isDate"),isEmpty:b("./isEmpty"),isRegExp:b("./isRegExp"),toQueryParameters:b("./toQueryParameters")}
},{"./clone":59,"./create":60,"./defaults":61,"./extend":62,"./getPrototypeOf":63,"./isDate":65,"./isEmpty":66,"./isRegExp":67,"./toQueryParameters":71}],65:[function(b,d,a){d.exports=function c(f){return Object.prototype.toString.call(f)==="[object Date]"
}},{}],66:[function(c,d,b){var a=Object.prototype.hasOwnProperty;d.exports=function f(g){var h;
if(typeof g!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(h in g){if(a.call(g,h)){return false}}return true}},{}],67:[function(c,d,b){d.exports=function a(f){return window.RegExp?f instanceof RegExp:false
}},{}],68:[function(b,c,a){if(!Array.isArray){Array.isArray=function(d){return Object.prototype.toString.call(d)==="[object Array]"
}}},{}],69:[function(b,c,a){if(!Array.prototype.forEach){Array.prototype.forEach=function d(k,j){var h=Object(this);
var f;var g;if(typeof k!=="function"){throw new TypeError("No function object passed to forEach.")
}for(f=0;f<this.length;f+=1){g=h[f];k.call(j,g,f,h)}}}},{}],70:[function(i,c,x){var s=Object.prototype.toString;
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
}catch(z){return A}}},{}],71:[function(c,f,b){var a=c("qs");f.exports=function d(g){if(typeof g!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return a.stringify(g)}},{qs:70}],72:[function(b,c,a){a.ScrollView=b("./ac-scrollview/ScrollView");
a.MouseWheel=b("./ac-scrollview/input/MouseWheel");a.ScrollBounds=b("./ac-scrollview/ScrollBounds");
a.Y_AXIS="y";a.X_AXIS="x"},{"./ac-scrollview/ScrollBounds":74,"./ac-scrollview/ScrollView":75,"./ac-scrollview/input/MouseWheel":78}],73:[function(c,d,a){var b=c("ac-object");
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
},{"ac-object":64}],74:[function(d,f,b){var c=d("ac-object");function a(k,j,h,g){var i={maxPerSwipe:1,axis:"x"};
this.options=c.extend(i,g||{});this._grid=h;this._scrollInertia=k;this._scrollView=this._scrollInertia.getScrollView();
this._runningIndex=j;this._axisString=(this.options.axis==="x")?"left":"top"}a.prototype={calculateTargetIndex:function(){var g=(this._axisString==="left")?this._scrollView.getTouchContainerWidth():this._scrollView.getTouchContainerHeight();
var i=Math.round(this._scrollInertia.calculateFinalInertiaPosition()[this._axisString]/g);
var h=this._runningIndex;var j=(i-h);if(j>0&&i>h+this.options.maxPerSwipe){i=h+this.options.maxPerSwipe
}else{if(j<0&&i<h-this.options.maxPerSwipe){i=h-this.options.maxPerSwipe}}if(j>0&&i>this._grid[this._axisString].length-1){i=this._grid[this._axisString].length-1
}else{if(j<0&&i<0){i=0}}return i},calculateFuturePositions:function(){var g=this.calculateTargetIndex();
return{left:g*this._scrollView.getTouchContainerWidth(),top:g*this._scrollView.getTouchContainerHeight()}
}};f.exports=a},{"ac-object":64}],75:[function(c,b,h){var d=c("ac-object");var n=c("ac-event-emitter").EventEmitter;
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
},{"./InputPreventDefault":73,"./TouchInertia":76,"./input/Input":77,"./input/MouseWheel":78,"./input/Touch":79,"./model/Scroll":80,"ac-object":64}],76:[function(d,f,b){var c=d("ac-object");
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
}};f.exports=a},{"ac-object":64}],77:[function(b,c,a){var f=b("ac-event-emitter").EventEmitter;
function g(h){this._startingInputPosition=null;this._lastInputPosition=null;this._inputPositions=[];
this._scroll=h}var d=g.prototype=new f();d.inputStart=function(h,l,j,i){var k={x:h,y:l,timeStamp:j};
this._inputPositions.push(k);this._startingInputPosition=k;this.trigger("input_start",{timeStamp:j,originalEvent:i})
};d.inputMove=function(h,m,k,i){var l={x:h,y:m,timeStamp:k};this._inputPositions.push(l);
this._lastInputPosition=l;var j=this.getScrollValues();this.trigger("input_move",{scrollLeft:j.x,scrollTop:j.y,timeStamp:k,originalEvent:i})
};d.inputEnd=function(i,h){this.trigger("input_end",{lastInputPosition:this._lastInputPosition,inputPositions:this._inputPositions.slice(),timeStamp:i,originalEvent:h});
this._inputPositions=[];this._lastInputPosition=null};d.getScrollValues=function(){var j=this._inputPositions[this._inputPositions.length-2];
var i=(j.x-this._lastInputPosition.x)+this._scroll.scrollLeft;var h=(j.y-this._lastInputPosition.y)+this._scroll.scrollTop;
return{x:i,y:h}};c.exports=g},{}],78:[function(d,f,b){var g=d("ac-dom-events");
var c=d("ac-object");function a(h,i){this._inputController=h;this._element=i;this._scrollTop=0;
this._scrollLeft=0;this._timeout=null;this._hasStarted=false;this._boundMouseWheelComplete=this.mouseWheelComplete.bind(this);
this._lastEvent=null;this._velocities=[]}a.prototype={mouseWheelComplete:function(){this._scrollTop=0;
this._scrollLeft=0;this._hasStarted=false;this._inputController.inputEnd(new Date().getTime(),this._lastEvent);
this._lastEvent=null},onMouseWheel:function(k){var i;var h;var j;if(this._hasStarted===false){this._inputController.inputStart(this._scrollLeft,this._scrollTop,k.timeStamp,k);
this._hasStarted=true}i=this._scrollTop+k.wheelDeltaY;h=this._scrollLeft+k.wheelDeltaX;
this._lastEvent=c.clone(k);this._scrollTop=i;this._scrollLeft=h;this._inputController.inputMove(this._scrollLeft,this._scrollTop,k.timeStamp,k);
window.clearTimeout(this._timeout);this._timeout=window.setTimeout(this._boundMouseWheelComplete,100)
},bindDOMEvents:function(){g.addEventListener(this._element,"mousewheel",this.onMouseWheel.bind(this))
}};f.exports=a},{"ac-dom-events":43,"ac-object":64}],79:[function(c,d,a){var f=c("ac-dom-events");
function b(g,h){this._input=g;this._element=h}b.prototype={bindDOMEvents:function(){var g=this._input;
var h=this._element;f.addEventListener(h,"touchstart",function(i){if(i.touches&&i.touches[0]&&i.touches[0].target&&i.touches[0].target.tagName.match(/input|textarea|select/i)){return
}g.inputStart(i.touches[0].pageX,i.touches[0].pageY,i.timeStamp,i)},false);f.addEventListener(h,"touchmove",function(i){g.inputMove(i.touches[0].pageX,i.touches[0].pageY,i.timeStamp,i)
},false);f.addEventListener(h,"touchend",function(i){g.inputEnd(i.timeStamp,i)},false);
f.addEventListener(h,"touchcancel",function(i){g.inputEnd(i.timeStamp,i)},false)
}};d.exports=b},{"ac-dom-events":43}],80:[function(b,c,a){var f=b("ac-event-emitter").EventEmitter;
function g(){this.scrollLeft=0;this.scrollTop=0}var d=g.prototype=new f();d.scrollTo=function(i,h){if(i===this.scrollLeft&&h===this.scrollTop){return
}this.scrollLeft=i;this.scrollTop=h;this.trigger("scroll",{scrollTop:h,scrollLeft:i})
};c.exports=g},{}],81:[function(b,c,a){c.exports=b(1)},{"./ac-style-renderer/InlineStyleRenderer":82,"./ac-style-renderer/LogRenderer":83}],82:[function(b,c,a){c.exports=b(2)
},{}],83:[function(b,c,a){c.exports=b(3)},{}],84:[function(b,c,a){a.Gallery=b("./ac-gallery/Gallery");
a.builder=b("./ac-gallery/builder");a.Trigger=b("./ac-gallery/controller/Trigger");
a.MediaSegue=b("./ac-gallery/segue/MediaSegue");a.MediaRenderer=b("./ac-gallery/segue/media/MediaRenderer");
a.AnimationSequenceSegue=b("./ac-gallery/segue/AnimationSequence");a.CSSTransitionSegue=b("./ac-gallery/segue/CSSTransition");
a.FadeInCSSTransition=b("./ac-gallery/segue/FadeInCSSTransition");a.fadeInKeyframesGenerator=b("./ac-gallery/keyframe/fadeInKeyframesGenerator");
a.crossFadeKeyframesGenerator=b("./ac-gallery/keyframe/crossFadeKeyframesGenerator");
a.showHideKeyframesGenerator=b("./ac-gallery/keyframe/showHideKeyframesGenerator");
a.horizontalSliderKeyframesGenerator=b("./ac-gallery/keyframe/horizontalSliderKeyframesGenerator");
a.Touch=b("./ac-gallery/controller/Touch")},{"./ac-gallery/Gallery":85,"./ac-gallery/builder":86,"./ac-gallery/controller/Touch":87,"./ac-gallery/controller/Trigger":88,"./ac-gallery/keyframe/crossFadeKeyframesGenerator":96,"./ac-gallery/keyframe/fadeInKeyframesGenerator":97,"./ac-gallery/keyframe/horizontalSliderKeyframesGenerator":98,"./ac-gallery/keyframe/showHideKeyframesGenerator":99,"./ac-gallery/segue/AnimationSequence":103,"./ac-gallery/segue/CSSTransition":104,"./ac-gallery/segue/FadeInCSSTransition":105,"./ac-gallery/segue/MediaSegue":106,"./ac-gallery/segue/media/MediaRenderer":109}],85:[function(b,a,g){var j=b("ac-deferred").Deferred;
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
this._locked=false;return this._trigger("didShow",p,n)};a.exports=i},{"./generator/Timeline":89,"./segue/Segue":107,"ac-base":false}],86:[function(j,b,y){var z=j("ac-base").Object;
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
return E}},{"./Gallery":85,"./controller/Trigger":88,"./keyboard/defaultMap":95,"./keyframe/crossFadeKeyframesGenerator":96,"./keyframe/showHideKeyframesGenerator":99,"./observer/ElementTracker":100,"./observer/PreviousNextTriggerPainter":101,"./observer/TriggerPainter":102,"./touch/builder":112,"ac-base":false,"ac-keyboard":37,"ac-keyframe":124}],87:[function(f,c,i){var g=f("ac-base").Object;
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
this._runningIndex=r;this._enRoute=true}};c.exports=d},{"./../touch/GalleryGrid":110,"./../touch/TimelineRenderer":111,"ac-animation-sequencer":4,"ac-base":false,"ac-scrollview":72}],88:[function(c,d,b){var f=c("ac-base").Element;
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
}}else{throw new Error("Trigger has no ID or method")}}};d.exports=a},{"ac-base":false}],89:[function(c,b,g){var i=c("ac-animation-sequencer").Timeline;
var h=c("ac-keyframe").Interpolation;var j=c("./../segue/media/MediaClip");var f=c("ac-animation-sequencer").TimedClip;
var a=c("ac-animation-sequencer").CompositeClip;i.clipTypes.Media=j;function d(k,m,l){this._gallery=k;
this._bounceOutKeyframe=m;this._bounceInKeyframe=l}d.prototype={getGallery:function(){return this._gallery
},getTimeline:function(){var m;var k=[];var o=this._gallery.getKeyframes().slice(0);
if(this._bounceInKeyframe){o.unshift(this._bounceInKeyframe)}if(this._bounceOutKeyframe){o.push(this._bounceOutKeyframe)
}var n=new h();n.setDuration(this._gallery.getTransitionDuration());for(var l=1;
l<o.length;l+=1){n.setStartKeyframe(o[l-1]).setEndKeyframe(o[l]);m=n.getClip();
m=new f(m,{startDelay:(l-1)*this._gallery.getTransitionDuration(),fill:"none"});
k.push(m)}return new a(k)}};b.exports=d},{"./../segue/media/MediaClip":108,"ac-animation-sequencer":4,"ac-keyframe":124}],90:[function(f,g,c){var h=f("./../helper/isTransformProperty");
var b=f("./../helper/camelCaseToHyphen");var a=f("./../helper/canTransitionStyle");
var d={zIndex:true,display:true,visibility:true,position:true};g.exports=function(q,l,n,m){var p=[];
var i=false;var k=n;var o=l;m=(typeof m==="number")?" "+m+"s":"";var j=m;q.forEach(function(r){var s=r.property;
if(d[s]===true){return}var u=(typeof r.easing==="string")?r.easing:n;var v=(typeof r.duration==="number")?r.duration:l;
var t=(typeof r.delay==="number")?" "+r.delay+"s":m;if(!a(s)){return}if(!h(s)){p.push(b(s)+" "+v+"s "+u+t)
}else{o=v;k=u;j=t;i=true}});if(i===true){p.push("-webkit-transform "+l+"s "+k+j)
}return p.join(",")}},{"./../helper/camelCaseToHyphen":91,"./../helper/canTransitionStyle":92,"./../helper/isTransformProperty":93}],91:[function(b,c,a){c.exports=function(d){return d.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],92:[function(b,c,a){var d=["display"];c.exports=function(f){return(d.indexOf(f)===-1)
}},{}],93:[function(b,d,a){var c=["matrix","translate","translateX","translateY","scale","scaleX","scaleY","rotate","skewX","skewY","matrix3d","translate3d","translateZ","scale3d","scaleZ","rotate3d","rotateX","rotateY","rotateZ","perspective"];
d.exports=function(f){return(c.indexOf(f)!==-1)}},{}],94:[function(f,g,a){var d=f("ac-deferred").Deferred;
var c=f("./buildTransitionString");var i=f("ac-style-renderer").InlineStyleRenderer;
var h=f("ac-base").Element;var b=f("ac-base").Object;g.exports=function(n,s,m,p,o){var j=new d();
var k=c(s,m,p,o);var q=[];var l;var r=function(t){if(t.target===n){h.removeVendorPrefixEventListener(n,"transitionEnd",r);
h.setVendorPrefixStyle(n,"transition","none");window.requestAnimationFrame(j.resolve.bind(j))
}};if(k!==""&&m!==0){h.addVendorPrefixEventListener(n,"transitionEnd",r);l=h.getVendorPrefixStyle(n,"transition")+",";
if(!/none/.test(l)&&l!==","){k=l+k}h.setVendorPrefixStyle(n,"transition",k)}else{window.requestAnimationFrame(j.resolve.bind(j))
}s.forEach(function(t){var u=b.clone(t);u.prop=u.property;if(u.units){u.value+=u.units
}q.push(u)});i.render(n,q);return j.promise()}},{"./buildTransitionString":90,"ac-base":false,"ac-style-renderer":81}],95:[function(b,c,a){var d=b("ac-keyboard").keys;
var f={};f[d.ARROW_LEFT]=function(g){g.preventDefault();if(this.getEngaged()){this.showPrevious({interactionEvent:g})
}};f[d.ARROW_RIGHT]=function(g){g.preventDefault();if(this.getEngaged()){this.showNext({interactionEvent:g})
}};c.exports=f},{"ac-keyboard":37}],96:[function(c,d,a){var f=c("ac-keyframe").Keyframe;
var b=c("ac-base").Object;var g={zIndex:1};d.exports=function(j,h){var i=[];h=b.extend(b.clone(g),h||{});
j.forEach(function(k,m){var l=[];j.forEach(function(n,o){l.push({element:n,props:[{property:"opacity",value:(o===m)?1:0},{property:"z-index",value:(o===m)?(h.zIndex+1):h.zIndex}]})
});i.push(new f(k.id,l))});return i}},{"ac-base":false,"ac-keyframe":124}],97:[function(c,d,a){var g=c("ac-keyframe").Keyframe;
var f=c("./../segue/FadeInCSSTransition");var h=c("./../segue/CSSTransition");var b=c("ac-base").Object;
var i={zIndex:1};d.exports=function(l,j){var k=[];j=b.extend(b.clone(i),j||{});
l.forEach(function(m,o){var n=[];l.forEach(function(p,q){n.push({SegueType:f,element:p,props:[{property:"opacity",value:(q===o)?"1":"0"},{property:"zIndex",value:(q===o)?(j.zIndex+1):j.zIndex}]})
});k.push(new g(m.id,n))});return k}},{"./../segue/CSSTransition":104,"./../segue/FadeInCSSTransition":105,"ac-base":false,"ac-keyframe":124}],98:[function(c,d,b){var h=c("ac-base").Environment.Feature;
var f=c("ac-keyframe").Keyframe;var g=c("./../segue/CSSTransition");var a=c("./../segue/AnimationSequence");
d.exports=function(o){var l=(h.cssPropertyAvailable("transform"))?"translateX":"left";
var m=(h.cssPropertyAvailable("transition"))?g:a;var j={keyframes:[],bounceInKeyframe:null,bounceOutKeyframe:null};
var n=o[0].offsetWidth;o.forEach(function(p,r){var q=[];o.forEach(function(s,t){q.push({element:s,SegueType:m,props:[{property:l,value:-(n*r),units:"px"}]})
});j.keyframes.push(new f(p.id,q))});var i=[];o.forEach(function(p,q){i.push({element:p,props:[{property:l,value:n,units:"px"}]})
});j.bounceInKeyframe=new f("bounceIn",i);var k=[];o.forEach(function(p,q){k.push({element:p,props:[{property:l,value:-(n*(o.length)),units:"px"}]})
});j.bounceOutKeyframe=new f("bounceOut",k);return j}},{"./../segue/AnimationSequence":103,"./../segue/CSSTransition":104,"ac-base":false,"ac-keyframe":124}],99:[function(b,a,d){var h=b("ac-keyframe").Keyframe;
var f=b("ac-animation-sequencer").ElementClip;var j=b("ac-animation-sequencer").BaseClip;
var g=b("ac-animation-sequencer").Timeline;var c=b("ac-base").Object;var i=function(){f.apply(this,arguments)
};i.prototype=new j();c.extend(i.prototype,f.prototype);i.prototype.update=function(l){if(this.props.length<1){return
}var k=this.props.map(function(o){var m=o.units;var n=o.to;n=(m?(n+m):n);return{prop:o.property,value:n}
});this._renderer.render(this.el,k)};i.create=function(k){return new i(k)};g.clipTypes.Gallery_ShowHide=i;
a.exports=function(l){var k=[];l.forEach(function(m,o){var n=[];l.forEach(function(p,q){n.push({element:p,clipType:"Gallery_ShowHide",props:[{property:"display",value:(q===o)?"block":"none"}]})
});k.push(new h(m.id,n))});return k}},{"ac-animation-sequencer":4,"ac-base":false,"ac-keyframe":124}],100:[function(b,c,a){var d=b("ac-base").Element;
var f=b("ac-element-tracker");function g(h,i){if(!d.isElement(i)){return}this._gallery=h;
this._elementTracker=f;var j=this._elementTracker.addElement({element:i,inViewThreshold:0.33});
this._gallery.setEngaged(false);j.on("thresholdenter",this._onEnterWithinThreshold,this);
j.on("thresholdexit",this._onExitWithinThreshold,this);this._elementTracker.start();
return this}g.prototype._onEnterWithinThreshold=function(h){this._gallery.setEngaged(true)
};g.prototype._onExitWithinThreshold=function(h){this._gallery.setEngaged(false)
};c.exports=g},{"ac-base":false,"ac-element-tracker":34}],101:[function(c,d,b){var f=c("ac-base").Element;
function a(h){if(h.getGallery()&&h.getGallery().isEndless()){return}this.triggerPainter=h;
var i={incoming:h.getGallery().getSelected()};this._paint(i)}var g=a.prototype;
g._paint=function(j){var m=j.incoming.id;var n=this.triggerPainter;var i=n.getGallery();
var o=n.getTriggerSelector();var l=f.selectAll(o+"[data-method]");var k=f.selectAll(o+'[data-method="showPrevious"]');
var h=f.selectAll(o+'[data-method="showNext"]');if(l){n._unpaintTriggers(l,"disabled");
if(m===i.getFirst().id){n._paintTriggers(k,"disabled")}else{if(m===i.getLast().id){n._paintTriggers(h,"disabled")
}}}};d.exports=a},{"ac-base":false}],102:[function(c,d,b){var f=c("ac-base").Element;
function a(i,j,k){this.setGallery(i);this.setTriggerSelector(j);k=k||"current";
this.setActiveTriggerClassname(k);var h={incoming:this._gallery.getSelected()};
this._paint(h)}var g=a.prototype;g.setGallery=function(h){this._gallery=h};g.getGallery=function(){return this._gallery
};g.setTriggerSelector=function(h){this._triggerSelector=h};g.getTriggerSelector=function(){return this._triggerSelector
};g.setActiveTriggerClassname=function(h){this._activeTriggerClassname=h};g.getActiveTriggerClassname=function(){return this._activeTriggerClassname
};g._paint=function(i){var k=i.incoming.id;var m=this.getTriggerSelector();var h=this.getActiveTriggerClassname();
var j=f.selectAll(m+"."+h);var l=f.selectAll(m+'[href="#'+k+'"]');this._unpaintTriggers(j,h);
this._paintTriggers(l,h)};g._paintTriggers=function(m,l){var k,h,j;for(k=0,h=m.length;
k<h;k+=1){j=m[k];f.addClassName(j,l)}};g._unpaintTriggers=function(m,l){var k,h,j;
for(k=0,h=m.length;k<h;k+=1){j=m[k];f.removeClassName(j,l)}};d.exports=a},{"ac-base":false}],103:[function(d,f,b){var h=d("ac-animation-sequencer").Timeline;
var a=d("ac-animation-sequencer").BasicPlayer;var c=d("ac-deferred").Deferred;var g=d("ac-keyframe").Interpolation;
function i(k,j,l,m){this._from=k;this._to=j;this._duration=l;this._easing=m}i.prototype={animate:function(){var m=new c();
var n=this._easing;var j=new g();j.setDuration(this._duration).setStartKeyframe(this._from).setEndKeyframe(this._to);
var l=j.getClip();var k=new a(l);k.once("ended",m.resolve,m);k.play();return m.promise()
}};i.create=function(j){return new i(j.from,j.to,j.duration,j.easing)};f.exports=i
},{"ac-animation-sequencer":4,"ac-keyframe":124}],104:[function(c,d,b){var g=c("./../helper/playCSSTransition");
var a=c("ac-deferred");function f(h,i,j,k){this._toKeyframe=h;this._fromKeyframe=i;
this._duration=j;this._easing=k}f.prototype={animate:function(){var i=this._duration;
var j=this._easing;var h=this._toKeyframe.getStyles().map(function(k){return g(k.element,k.props,i,j)
});return a.all(h)}};f.create=function(h){return new f(h.to,h.from,h.duration,h.easing)
};d.exports=f},{"./../helper/playCSSTransition":94}],105:[function(c,b,d){var h=c("./../helper/playCSSTransition");
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
};b.exports=j},{"./../helper/playCSSTransition":94,"ac-keyframe":124,"ac-style-renderer":81}],106:[function(c,d,b){var a=c("ac-deferred");
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
};d.exports=g},{"ac-animation-sequencer":4}],107:[function(c,b,d){var a=c("./CSSTransition");
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
};b.exports=i},{"./../helper/playCSSTransition":94,"./AnimationSequence":103,"./CSSTransition":104,"ac-keyframe":124}],108:[function(f,g,c){var a=f("ac-animation-sequencer").TweenClip;
var i=f("./MediaRenderer");var d=f("ac-base").Object;function b(){a.apply(this,arguments)
}var h=b.prototype=new a();b.create=function(j){j=j||{};if(!j.element){throw new TypeError("MediaClip could not be created: "+j.element+" is not a valid element")
}j.renderer=new i(j.element);return new b(j)};g.exports=b},{"./MediaRenderer":109,"ac-animation-sequencer":4,"ac-base":false}],109:[function(b,c,a){function f(g){this._element=g
}var d=f.prototype;d.render=function(h,g){g.forEach(function(i){if(i.prop==="time"){if(h.currentTime!==i.value){h.currentTime=i.value
}}})};c.exports=f},{}],110:[function(c,d,b){function a(f,g){this._gallery=f;this._scrollView=g
}a.prototype={getGrid:function(){var g={left:[],top:[]};for(var f=0;f<this._gallery.numKeyframes();
f+=1){g.left.push(this._scrollView.getTouchContainerWidth()*f);g.top.push(this._scrollView.getTouchContainerHeight()*f)
}return g}};d.exports=a},{}],111:[function(c,f,a){var b=c("ac-base").Object;var g={axis:"x",bounceDuration:0};
function d(i,j,h){this.options=b.extend(g,h||{});this._player=i;this._touchScrollBounds=j
}d.prototype={_calculateScrollPercentage:function(i,h){return{left:i/this._touchScrollBounds.getScrollXDistance(),top:h/this._touchScrollBounds.getScrollYDistance()}
},calculateCurrentTime:function(k,j){var h=this._calculateScrollPercentage(k,j);
var l=(this.options.axis==="x")?"left":"top";var i=(this._player.getDuration()-(this.options.bounceDuration*2))*h[l];
return this.options.bounceDuration+i},render:function(i,h){this._player.setCurrentTime(this.calculateCurrentTime(i,h));
return this}};f.exports=d},{"ac-base":false}],112:[function(b,c,a){var d=b("ac-base").Element;
var f=b("./../controller/Touch");c.exports=function g(k,i,j){j=j||{};var h=new f(k,i,j);
return h}},{"./../controller/Touch":87,"ac-base":false}],113:[function(b,c,a){c.exports=b(70)
},{}],114:[function(b,c,a){c.exports={clone:b("./ac-object/clone"),create:b("./ac-object/create"),defaults:b("./ac-object/defaults"),extend:b("./ac-object/extend"),getPrototypeOf:b("./ac-object/getPrototypeOf"),isDate:b("./ac-object/isDate"),isEmpty:b("./ac-object/isEmpty"),isRegExp:b("./ac-object/isRegExp"),toQueryParameters:b("./ac-object/toQueryParameters")}
},{"./ac-object/clone":115,"./ac-object/create":116,"./ac-object/defaults":117,"./ac-object/extend":118,"./ac-object/getPrototypeOf":119,"./ac-object/isDate":120,"./ac-object/isEmpty":121,"./ac-object/isRegExp":122,"./ac-object/toQueryParameters":123}],115:[function(b,c,a){var f=b("./extend");
c.exports=function d(g){return f({},g)}},{"./extend":118}],116:[function(b,c,a){c.exports=b(60)
},{}],117:[function(b,c,a){arguments[4][61][0].apply(a,arguments)},{"./extend":118}],118:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]}else{h=[].slice.call(arguments)
}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{}],119:[function(b,c,a){c.exports=b(63)},{}],120:[function(b,c,a){c.exports=b(65)
},{}],121:[function(b,c,a){c.exports=b(66)},{}],122:[function(b,c,a){c.exports=b(67)
},{}],123:[function(b,c,a){c.exports=b(71)},{qs:113}],124:[function(b,c,a){c.exports={Keyframe:b("./ac-keyframe/Keyframe"),Interpolation:b("./ac-keyframe/Interpolation")}
},{"./ac-keyframe/Interpolation":125,"./ac-keyframe/Keyframe":126}],125:[function(b,c,a){var f=b("ac-animation-sequencer").Timeline;
function d(){this._start=null;this._end=null;this._duration=null}d.prototype={_mergeToClip:function(){var i=this._start;
var j=this._end;var g=this._duration;var h=function(l){var k={element:l.element,clip:l.clipType||"Element",duration:g,props:[]};
l.props.forEach(function(o){var n={property:o.property,from:o.value,to:o.value,easing:o.easing||"linear"};
if(o.units){n.units=o.units}var m=i.findStyle(l.element,o.property);if(m){n.from=m.value
}k.props.push(n)});return k};return j.getStyles().map(h)},setStartKeyframe:function(g){this._start=g;
return this},setEndKeyframe:function(g){this._end=g;return this},setDuration:function(g){this._duration=g;
return this},getClip:function(){return f.create(this._mergeToClip())}};c.exports=d
},{"ac-animation-sequencer":4}],126:[function(c,d,a){var h=c("./helper/isTransformProperty");
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
},{"./helper/isTransformProperty":127,"ac-animation-sequencer":4,"ac-object":114}],127:[function(b,d,a){var c=["skew","scale","rotate","translateX","translateY","translateZ"];
d.exports=function(f){return(c.indexOf(f)!==-1)}},{}],128:[function(b,c,a){c.exports=b(70)
},{}],129:[function(b,c,a){c.exports={clone:b("./ac-object/clone"),defaults:b("./ac-object/defaults"),extend:b("./ac-object/extend"),getPrototypeOf:b("./ac-object/getPrototypeOf"),isEmpty:b("./ac-object/isEmpty"),toQueryParameters:b("./ac-object/toQueryParameters")}
},{"./ac-object/clone":130,"./ac-object/defaults":131,"./ac-object/extend":132,"./ac-object/getPrototypeOf":133,"./ac-object/isEmpty":134,"./ac-object/toQueryParameters":135}],130:[function(b,c,a){c.exports=b(115)
},{"./extend":132}],131:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"||typeof g!=="object"){throw new TypeError("defaults: must provide a defaults and options object")
}return f({},h,g)}},{"./extend":132}],132:[function(b,c,a){c.exports=b(118)},{}],133:[function(b,c,a){c.exports=b(63)
},{}],134:[function(b,c,a){c.exports=b(66)},{}],135:[function(b,c,a){c.exports=b(71)
},{qs:128}],136:[function(b,c,a){c.exports.Smoother=b("./smoother/Smoother")},{"./smoother/Smoother":137}],137:[function(c,d,b){d.exports=a;
function a(f){f=f||this.sampling;this.pool=new Array(f);this.raw=0;this.value=0
}a.prototype.sampling=3;a.prototype.smooth=function(g,k){var j=0;var f=this.pool.length;
if(typeof this.pool[f-this.sampling]!=="undefined"){for(var h=this.sampling;h>0;
h--){j+=this.pool[f-h]}j+=g;j/=(this.sampling+1)}else{j=g}if(!k){this.raw=g;this._track(j,true)
}return j};a.prototype._track=function(g,f){if(f){this.value=g}else{this.raw=this.value=g
}this.pool.push(g);this.pool.shift()}},{}],138:[function(b,c,a){c.exports.ScrollTimeUpdate=b("./scroll-time-update/ScrollTimeUpdate");
c.exports.ElementScrollTimeUpdate=b("./scroll-time-update/ElementScrollTimeUpdate")
},{"./scroll-time-update/ElementScrollTimeUpdate":139,"./scroll-time-update/ScrollTimeUpdate":140}],139:[function(c,g,b){var f=c("./ScrollTimeUpdate"),d=c("window-delegate").WindowDelegate;
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
this._updateOnResize=false};g.exports=a},{"./ScrollTimeUpdate":140,"window-delegate":141}],140:[function(c,b,d){var f,j=c("ac-event-emitter").EventEmitter,a=c("ac-clock"),k=c("window-delegate").WindowDelegate,h=c("smoother").Smoother,i=c("ac-dom-emitter").DOMEmitter;
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
},{"ac-clock":25,"ac-dom-emitter":29,smoother:136,"window-delegate":141}],141:[function(b,c,a){c.exports=b(31)
},{"./window-delegate/WindowDelegate":142,"./window-delegate/windowEmitter":143}],142:[function(b,c,a){c.exports=b(32)
},{"./windowEmitter":143}],143:[function(b,c,a){c.exports=b(33)},{"ac-dom-emitter":29}],144:[function(b,a,d){var f,i=b("ac-base").Element,c=b("ac-object"),k=b("window-delegate").WindowDelegate,j=b("ac-event-emitter").EventEmitter;
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
},{"ac-base":false,"ac-object":129,"window-delegate":141}],145:[function(f,d,i){var l=f("ac-base").Element;
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
},{"ac-base":false,"ac-gallery":84,"window-delegate":141}],146:[function(c,g,b){var f=c("scroll-time-update").ScrollTimeUpdate;
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
this.scrollTimeUpdate.start()}},{"ac-base":false,"scroll-time-update":138,"window-delegate":141}],147:[function(c,a,f){var d=c("./localnav");
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
return true}}catch(o){}l=false;return false}}}());a.exports=h},{"./BreakpointsDelegate":144,"./RevealNext":146,"./localnav":148,"ac-base":false}],148:[function(b,d,a){var h=b("ac-dom-emitter").DOMEmitter;
var f=b("ac-base").Element;var c=b("window-delegate").WindowDelegate;var g=b("ac-analytics");
var i=(function(){return{opened:false,closeThreshold:0,initialize:function(){var k=f.getElementById("globalheader");
this.globalheaderHeight=k?k.offsetHeight:46;this.localNav=f.getElementById("localnav");
this.menu=f.getElementById("menu");this.curtain=f.getElementById("curtain");this.main=f.getElementById("main");
this.footer=f.select(".footer-wrapper");if(!this.localNav){return}var j=f.getElementById("explore-btn");
this.menuEmitter=new h(this.menu);c.on("scroll",this.navTrackPosition.bind(this));
f.addEventListener(j,"click",this.toggle.bind(this));f.addEventListener(this.curtain,"click",this.onCurtainTouch.bind(this));
this.menuEmitter.on("transitionend webkitTransitionEnd oTransitionEnd",this.onTransitionEnd.bind(this));
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
}}}}());d.exports=i},{"ac-base":false,"ac-dom-emitter":29,"window-delegate":141}],149:[function(c,d,b){var f=c("ac-base").Element;
var h=c("../shared/Shared");var g=c("../shared/GalleryFactory");var a=c("ac-gallery").builder;
var i=(function(){return{initialize:function(){var l=h.initialize();var k=g.create("specs-dimensions-gallery");
var m=["#gallery-iphone-6-plus","#gallery-iphone-6"],j;m.forEach(function(n){a({keyframeElements:f.selectAll(n+" .gallery-content"),triggerSelector:n+" .gallery-trigger"})
});return this}}}());d.exports=i.initialize()},{"../shared/GalleryFactory":145,"../shared/Shared":147,"ac-base":false,"ac-gallery":84}]},{},[149]);