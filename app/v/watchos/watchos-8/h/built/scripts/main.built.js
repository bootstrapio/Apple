! function(t) {
  var e = {};

  function i(s) {
    if (e[s]) return e[s].exports;
    var r = e[s] = {
      i: s,
      l: !1,
      exports: {}
    };
    return t[s].call(r.exports, r, r.exports, i), r.l = !0, r.exports
  }
  i.m = t, i.c = e, i.d = function(t, e, s) {
    i.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: s
    })
  }, i.r = function(t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, i.t = function(t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var s = Object.create(null);
    if (i.r(s), Object.defineProperty(s, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var r in t) i.d(s, r, function(e) {
        return t[e]
      }.bind(null, r));
    return s
  }, i.n = function(t) {
    var e = t && t.__esModule ? function() {
      return t.default
    } : function() {
      return t
    };
    return i.d(e, "a", e), e
  }, i.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, i.p = "/", i(i.s = 66)
}([function(t, e) {
  t.exports = function(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
}, function(t, e, i) {
  "use strict";
  t.exports = {
    PICTURE_DATA_DOWNLOAD_AREA_KEYFRAME: "data-download-area-keyframe",
    PICTURE_DATA_LAZY: "data-lazy",
    PICTURE_DATA_EMPTY_SOURCE: "data-empty",
    PICTURE_DATA_LOADED: "data-picture-loaded",
    PICTURE_CLASS_LOADED: "loaded"
  }
}, function(t, e, i) {
  "use strict";
  const s = {
    GUI_INSTANCE: null,
    ANIM_INSTANCE: null,
    VIEWPORT_EMITTER_ELEMENT: void 0,
    LOCAL_STORAGE_KEYS: {
      GuiPosition: "anim-ui.position",
      GroupCollapsedStates: "anim-ui.group-collapsed-states",
      scrollY: "anim-ui.scrollY-position",
      path: "anim-ui.path"
    },
    RESIZE_TIMEOUT: -1,
    BREAKPOINTS: [{
      name: "S",
      mediaQuery: "only screen and (max-width: 734px)"
    }, {
      name: "M",
      mediaQuery: "only screen and (max-width: 1068px)"
    }, {
      name: "L",
      mediaQuery: "only screen and (min-width: 1069px)"
    }],
    getBreakpoint: function() {
      for (let t = 0; t < s.BREAKPOINTS.length; t++) {
        let e = s.BREAKPOINTS[t];
        if (window.matchMedia(e.mediaQuery).matches) return e.name
      }
    },
    KeyframeDefaults: {
      ease: 1,
      epsilon: .05,
      preserveState: !1,
      easeFunctionString: "linear",
      easeFunction: "linear",
      hold: !1,
      snapAtCreation: !1,
      toggle: !1,
      breakpointMask: "SMLX",
      event: "",
      disabledWhen: [],
      cssClass: ""
    },
    KeyframeTypes: {
      Interpolation: 0,
      InterpolationForward: 1,
      CSSClass: 2,
      Event: 3
    },
    EVENTS: {
      ON_DOM_KEYFRAMES_CREATED: "ON_DOM_KEYFRAMES_CREATED",
      ON_DOM_GROUPS_CREATED: "ON_DOM_GROUPS_CREATED",
      ON_GROUP_CREATED: "ON_GROUP_CREATED",
      ON_KEYFRAME_UPDATED: "ON_KEYFRAME_UPDATED",
      ON_TIMELINE_START: "ON_TIMELINE_START",
      ON_TIMELINE_UPDATE: "ON_TIMELINE_UPDATE",
      ON_TIMELINE_COMPLETE: "ON_TIMELINE_COMPLETE",
      ON_CHAPTER_INITIATED: "ON_CHAPTER_INITIATED",
      ON_CHAPTER_OCCURRED: "ON_CHAPTER_OCCURRED",
      ON_CHAPTER_COMPLETED: "ON_CHAPTER_COMPLETED"
    },
    PageEvents: {
      ON_SCROLL: "ON_SCROLL",
      ON_RESIZE_IMMEDIATE: "ON_RESIZE_IMMEDIATE",
      ON_RESIZE_DEBOUNCED: "ON_RESIZE_DEBOUNCED",
      ON_BREAKPOINT_CHANGE: "ON_BREAKPOINT_CHANGE"
    },
    KeyframeJSONReservedWords: ["event", "cssClass", "style", "anchors", "start", "end", "epsilon", "easeFunction", "ease", "breakpointMask", "disabledWhen"],
    TweenProps: i(38),
    TargetValue: i(9),
    CSSTargetValue: i(31),
    pageMetrics: new function() {
      this.scrollX = 0, this.scrollY = 0, this.windowWidth = 0, this.windowHeight = 0, this.documentOffsetX = 0, this.documentOffsetY = 0, this.previousBreakpoint = "", this.breakpoint = ""
    },
    KeyframeComparison: function(t, e) {
      return t.start < e.start ? -1 : t.start > e.start ? 1 : 0
    }
  };
  t.exports = s
}, function(t, e, i) {
  "use strict";
  var s = i(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = s(i(4));
  var a = class {
    constructor(t) {
      this.options = t, this.media = t.media, this.mounted = this.mounted.bind(this), this.media.on(r.default.MOUNTED, this.mounted)
    }
    mounted() {}
    static get isSupported() {
      return !0
    }
    destroy() {}
  };
  e.default = a
}, function(t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  e.default = {
    MOUNTED: "MOUNTED",
    MEDIA_LOAD_START: "MEDIA_LOAD_START",
    MEDIA_LOAD_COMPLETE: "MEDIA_LOAD_COMPLETE",
    MEDIA_LOAD_ERROR: "MEDIA_LOAD_ERROR",
    PLAYBACK_STATE_CHANGE: "PLAYBACK_STATE_CHANGE",
    LOADING_STATE_CHANGE: "LOADING_STATE_CHANGE"
  }
}, function(t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.isSmallOnDesktop = e.shouldFallbackHeight = e.defaultBaseExperienceMediaQueries = e.willChangeOptions = e.carnivalEngageKeyframe = e.disabledWhen = void 0;
  const s = i(20),
    r = ["no-enhanced"];
  e.disabledWhen = r;
  const a = {
    large: {
      start: "t + 90h - 100vh",
      end: "t + 50h",
      event: "carnival-item-engage-large",
      breakpointMask: "L",
      disabledWhen: r
    },
    medium: {
      start: "t + 90h - 100vh",
      end: "t + 50h",
      event: "carnival-item-engage-medium",
      breakpointMask: "M",
      disabledWhen: r
    },
    small: {
      start: "t + 15h - 50vh",
      end: "t + 50h",
      event: "carnival-item-engage-small",
      breakpointMask: "S",
      disabledWhen: r
    }
  };
  e.carnivalEngageKeyframe = a;
  e.willChangeOptions = {
    start: "t - 150vh",
    end: "b + 50vh",
    cssClass: "will-change"
  };
  const n = {};
  e.defaultBaseExperienceMediaQueries = n;
  e.shouldFallbackHeight = () => {
    let t = !1;
    for (let e in n) window.matchMedia(n[e]).matches && (t = !0);
    return t
  };
  e.isSmallOnDesktop = () => {
    let t = !1;
    return !s() && window.matchMedia("(max-width: 734px)").matches && (t = !0), t
  }
}, function(t, e, i) {
  "use strict";
  t.exports = {
    EventEmitterMicro: i(30)
  }
}, function(t, e, i) {
  "use strict";
  const s = i(6).EventEmitterMicro,
    r = i(2),
    a = {
      create: i(13),
      update: i(12),
      draw: i(14)
    },
    n = () => {};
  let o = 0;
  t.exports = class extends s {
    constructor(t) {
      super(), this.el = t.el, this.gum = t.gum, this.componentName = t.componentName, this._keyframeController = null
    }
    destroy() {
      this.el = null, this.gum = null, this._keyframeController = null, super.destroy()
    }
    addKeyframe(t) {
      const e = t.el || this.el;
      return (t.group || this.anim).addKeyframe(e, t)
    }
    addDiscreteEvent(t) {
      t.event = t.event || "Generic-Event-Name-" + o++;
      let e = void 0 !== t.end && t.end !== t.start;
      const i = this.addKeyframe(t);
      return e ? (t.onEnterOnce && i.controller.once(t.event + ":enter", t.onEnterOnce), t.onExitOnce && i.controller.once(t.event + ":exit", t.onExitOnce), t.onEnter && i.controller.on(t.event + ":enter", t.onEnter), t.onExit && i.controller.on(t.event + ":exit", t.onExit)) : (t.onEventOnce && i.controller.once(t.event, t.onEventOnce), t.onEventReverseOnce && i.controller.once(t.event + ":reverse", t.onEventReverseOnce), t.onEvent && i.controller.on(t.event, t.onEvent), t.onEventReverse && i.controller.on(t.event + ":reverse", t.onEventReverse)), i
    }
    addRAFLoop(t) {
      let e = ["start", "end"];
      if (!e.every((e => t.hasOwnProperty(e)))) return void console.log("BubbleGum.BaseComponent::addRAFLoop required options are missing: " + e.join(" "));
      const i = new a.create;
      i.on("update", t.onUpdate || n), i.on("draw", t.onDraw || n), i.on("draw", (() => i.run()));
      const {
        onEnter: s,
        onExit: r
      } = t;
      return t.onEnter = () => {
        i.run(), s && s()
      }, t.onExit = () => {
        i.cancel(), r && r()
      }, this.addDiscreteEvent(t)
    }
    addContinuousEvent(t) {
      t.onDraw || console.log("BubbleGum.BaseComponent::addContinuousEvent required option `onDraw` is missing. Consider using a regular keyframe if you do not need a callback"), t.event = t.event || "Generic-Event-Name-" + o++;
      let e = this.addKeyframe(t);
      return e.controller.on(t.event, t.onDraw), e
    }
    mounted() {}
    onResizeImmediate(t) {}
    onResizeDebounced(t) {}
    onBreakpointChange(t) {}
    get anim() {
      return this.gum.anim
    }
    get keyframeController() {
      return this._keyframeController || (this._keyframeController = this.anim.getControllerForTarget(this.el))
    }
    get pageMetrics() {
      return r.pageMetrics
    }
  }
}, function(t, e, i) {
  "use strict";
  const s = i(18),
    r = i(103);
  t.exports = class extends s {
    constructor(t) {
      super(t);
      this.lottie = null, this.lottieContainer = this.el.querySelector(".lottie-animation"), this.duration = null, this.delay = this.lottieContainer.dataset.animationBuffer ? parseInt(this.lottieContainer.dataset.animationBuffer) : 0, this.lottiePath = this.lottieContainer.dataset.lottieFile, this.lastFrame = null, this.lazyLoad = this.lottieContainer.hasAttribute("data-lottie-lazy-load"), this.play = this.play.bind(this), this.reset = this.reset.bind(this), this.destroy = this.destroy.bind(this), this.isEnhanced = document.documentElement.classList.contains("enhanced"), this.isNotEnhanced = document.documentElement.classList.contains("no-enhanced")
    }
    mounted() {
      this.setupEvents(), this.setupLottie(), this.lottie.addEventListener("data_ready", (() => {
        this.setupEngageKeyframes(this.play, this.reset, this.duration, this.lottie.currentFrame)
      }))
    }
    setupEvents() {
      this.anim.once("enhanced-destroy", this.destroy)
    }
    setupLottie(t = this.lottieContainer, e = this.lottiePath, i = !1, s = "svg") {
      this.lottie = r.loadAnimation({
        container: t,
        renderer: s,
        loop: i,
        autoplay: !1,
        path: e,
        rendererSettings: {
          progressiveLoad: this.lazyLoad
        }
      }), this.lottie.addEventListener("data_ready", (() => {
        this.duration = this.lottie.totalFrames / this.lottie.frameRate + this.delay, this.lastFrame = this.lottie.totalFrames, this.isNotEnhanced && this.destroy()
      }))
    }
    play() {
      this.isEnhanced && this.lottie.play()
    }
    reset() {
      this.lottie.stop()
    }
    destroy() {
      this.lottie.goToAndStop(this.lastFrame - 1, !0)
    }
    static IS_SUPPORTED() {
      return !0
    }
  }
}, function(t, e, i) {
  "use strict";
  t.exports = class {
    constructor(t, e, i, s, r = !1, a) {
      this.epsilon = parseFloat(e), this.snapAtCreation = i, this.initialValue = t, this.target = t, this.current = t, this.previousValue = t, this.isActive = !1, this.key = s, this.round = r, this.suffix = a
    }
    update(t, e, i) {
      this.target = t[0] + e * (t[1] - t[0]), this.previousValue = this.current, this.current += (this.target - this.current) * i;
      let s = this.delta(this.current, this.target);
      return s < this.epsilon && (this.current = this.target, s = 0), s > this.epsilon || 0 === s && this.previousValue !== this.current
    }
    reconcile(t, e) {
      return this.initialValue = t[0], this.update(t, e, 1)
    }
    needsUpdate() {
      return this.delta(this.current, this.target) > this.epsilon
    }
    delta(t, e) {
      return Math.abs(t - e)
    }
    calculateEpsilon(t, e) {
      if (t.epsilon) return void(this.epsilon = t.epsilon);
      let i = this.delta(e[0], e[1]),
        s = Math.min(.001 * i, this.epsilon, .05);
      this.epsilon = Math.max(s, .001)
    }
    set(t) {
      let e = this.current;
      this.round && (e = Math.round(e)), this.suffix && (e += this.suffix), t[this.key] = e
    }
  }
}, function(t, e, i) {
  "use strict";
  t.exports = {
    lerp: function(t, e, i) {
      return e + (i - e) * t
    },
    map: function(t, e, i, s, r) {
      return s + (r - s) * (t - e) / (i - e)
    },
    mapClamp: function(t, e, i, s, r) {
      var a = s + (r - s) * (t - e) / (i - e);
      return Math.max(s, Math.min(r, a))
    },
    norm: function(t, e, i) {
      return (t - e) / (i - e)
    },
    clamp: function(t, e, i) {
      return Math.max(e, Math.min(i, t))
    },
    randFloat: function(t, e) {
      return Math.random() * (e - t) + t
    },
    randInt: function(t, e) {
      return Math.floor(Math.random() * (e - t) + t)
    }
  }
}, function(t, e, i) {
  "use strict";
  const s = i(2),
    r = i(9),
    a = i(31),
    n = i(10),
    o = i(71),
    h = i(72),
    l = i(73),
    p = i(32),
    c = i(74),
    u = i(39),
    d = i(40),
    {
      cssAttributes: m
    } = i(41);
  class f {
    constructor(t, e) {
      this.controller = t, this.anchors = [], this.jsonProps = e, this.ease = t.group.defaultEase, this.easeFunction = o.linear, this.start = 0, this.end = 0, this.localT = 0, this.curvedT = 0, this.id = 0, this.event = "", this.needsEventDispatch = !1, this.snapAtCreation = !1, this.isEnabled = !1, this.animValues = {}, this.breakpointMask = s.KeyframeDefaults.breakpointMask, this.disabledWhen = [], this.keyframeType = s.KeyframeTypes.Interpolation, this.hold = !1, this.preserveState = !1, this.markedForRemoval = !1;
      let i = !1;
      Object.defineProperty(this, "hidden", {
        get: () => i,
        set(e) {
          i = e, t.group.keyframesDirty = !0
        }
      }), this.uuid = d(), this.destroyed = !1
    }
    destroy() {
      this.destroyed = !0, this.controller = null, this.disabledWhen = null, this.anchors = null, this.jsonProps = null, this.easeFunction = null, this.animValues = null
    }
    remove() {
      return this.controller.removeKeyframe(this)
    }
    parseOptions(t) {
      this.jsonProps = t, t.relativeTo && console.error(`KeyframeError: relativeTo has been removed. Use 'anchors' property instead. Found 'relativeTo':"${t.relativeTo}"`), void 0 === t.end && void 0 === t.duration && (t.end = t.start), "" !== t.anchors && t.anchors ? (this.anchors = [], t.anchors = Array.isArray(t.anchors) ? t.anchors : [t.anchors], t.anchors.forEach(((e, i) => {
        let s = c(e, this.controller.group.element);
        if (!s) {
          let s = "";
          return "string" == typeof e && (s = " Provided value was a string, so a failed attempt was made to find anchor with the provided querystring in group.element, or in the document."), void console.warn("Keyframe on", this.controller.element, ` failed to find anchor at index ${i} in array`, t.anchors, `. Anchors must be JS Object references, Elements references, or valid query selector strings. ${s}`)
        }
        this.anchors.push(s), this.controller.group.metrics.add(s)
      }))) : (this.anchors = [], t.anchors = []), t.ease ? this.ease = parseFloat(t.ease) : t.ease = this.ease, t.hasOwnProperty("snapAtCreation") ? this.snapAtCreation = t.snapAtCreation : t.snapAtCreation = this.snapAtCreation, t.easeFunction || (t.easeFunction = s.KeyframeDefaults.easeFunctionString), t.breakpointMask ? this.breakpointMask = t.breakpointMask : t.breakpointMask = this.breakpointMask, t.disabledWhen ? this.disabledWhen = Array.isArray(t.disabledWhen) ? t.disabledWhen : [t.disabledWhen] : t.disabledWhen = this.disabledWhen, t.hasOwnProperty("hold") ? this.hold = t.hold : t.hold = this.hold, t.hasOwnProperty("preserveState") ? this.preserveState = t.preserveState : t.preserveState = s.KeyframeDefaults.preserveState, this.easeFunction = o[t.easeFunction], o.hasOwnProperty(t.easeFunction) || (t.easeFunction.includes("bezier") ? this.easeFunction = h.fromCSSString(t.easeFunction) : t.easeFunction.includes("spring") ? this.easeFunction = l.fromCSSString(t.easeFunction) : console.error("Keyframe parseOptions cannot find 'easeFunction' named '" + t.easeFunction + "'"));
      for (let e in t) {
        if (-1 !== s.KeyframeJSONReservedWords.indexOf(e)) continue;
        let i = t[e];
        if (Array.isArray(i)) {
          if (1 === i.length && (i[1] = i[0], i[0] = null), void 0 === this.controller.tweenProps[e] || !this.controller._ownerIsElement) {
            let n = 0;
            this.controller._ownerIsElement || (n = this.controller.element[e] || 0);
            const o = e.startsWith("--");
            let h = i[2] || (o || ["opacity", "z-index", "font-weight", "zIndex", "fontWeight"].includes(e) ? void 0 : "px"),
              l = this.controller.group.anim.plugins.keyframe.reduce(((i, s) => i || s.parseProp.call(this, t, e)), null);
            if (!l && this.controller._ownerIsElement && (o || m.includes(e))) {
              let i = u(e),
                r = t.round || ["zIndex"].includes(i);
              n = parseFloat(this.controller.getTargetComputedStyle().getPropertyValue(i)), isNaN(n) && (n = 0), l = new a(n, s.KeyframeDefaults.epsilon, this.snapAtCreation, e, r, h), this.controller.cssAttributes.push(l)
            }
            l || (l = new r(n, s.KeyframeDefaults.epsilon, this.snapAtCreation, e, t.round, h)), this.controller.tweenProps[e] = l
          }
          this.animValues[e] = this.controller.group.expressionParser.parseArray(this, i), this.controller.tweenProps[e].calculateEpsilon(t, this.animValues[e])
        }
      }
      this.keyframeType = this.hold ? s.KeyframeTypes.InterpolationForward : s.KeyframeTypes.Interpolation, t.event && (this.event = t.event)
    }
    overwriteProps(t) {
      this.animValues = {};
      let e = Object.assign({}, this.jsonProps, t);
      this.controller.updateKeyframe(this, e)
    }
    updateLocalProgress(t) {
      if (this.start === this.end || t < this.start || t > this.end) return this.localT = t < this.start ? this.hold ? this.localT : 0 : t > this.end ? 1 : 0, void(this.curvedT = this.easeFunction(this.localT));
      const e = (t - this.start) / (this.end - this.start),
        i = this.hold ? this.localT : 0;
      this.localT = n.clamp(e, i, 1), this.curvedT = this.easeFunction(this.localT)
    }
    reconcile(t) {
      this.controller.tweenProps[t].reconcile(this.animValues[t], this.curvedT) && (this.needsEventDispatch || (this.needsEventDispatch = !0, this.controller.keyframesRequiringDispatch.push(this)))
    }
    reset(t) {
      this.localT = t || 0;
      let e = this.ease;
      this.ease = 1;
      for (let t in this.animValues) this.reconcile(t);
      this.ease = e
    }
    onDOMRead(t) {
      let e = this.controller.tweenProps[t].update(this.animValues[t], this.curvedT, this.ease);
      return "" === this.event || this.needsEventDispatch || e && (this.needsEventDispatch = !0, this.controller.keyframesRequiringDispatch.push(this)), e
    }
    isInRange(t) {
      return t >= this.start && t <= this.end
    }
    setEnabled(t) {
      t = t || p(Array.from(document.documentElement.classList));
      let e = -1 !== this.breakpointMask.indexOf(s.pageMetrics.breakpoint),
        i = !1;
      return this.disabledWhen.length > 0 && (i = this.disabledWhen.some((e => void 0 !== t[e]))), this.isEnabled = e && !i, this.isEnabled
    }
    evaluateConstraints() {
      this.start = this.controller.group.expressionParser.parseTimeValue(this, this.jsonProps.start), this.end = this.controller.group.expressionParser.parseTimeValue(this, this.jsonProps.end), this.evaluateInterpolationConstraints()
    }
    evaluateInterpolationConstraints() {
      for (let t in this.animValues) {
        let e = this.jsonProps[t];
        this.animValues[t] = this.controller.group.expressionParser.parseArray(this, e)
      }
    }
  }
  f.DATA_ATTRIBUTE = "data-anim-tween", t.exports = f
}, function(t, e, i) {
  "use strict";
  var s = i(17);
  t.exports = s.requestAnimationFrame("update")
}, function(t, e, i) {
  "use strict";
  var s, r = i(6).EventEmitterMicro,
    a = i(85),
    n = i(88);

  function o(t) {
    t = t || {}, r.call(this), this.id = n.getNewID(), this.executor = t.executor || a, this._reset(), this._willRun = !1, this._didDestroy = !1
  }(s = o.prototype = Object.create(r.prototype)).run = function() {
    return this._willRun || (this._willRun = !0), this._subscribe()
  }, s.cancel = function() {
    this._unsubscribe(), this._willRun && (this._willRun = !1), this._reset()
  }, s.destroy = function() {
    var t = this.willRun();
    return this.cancel(), this.executor = null, r.prototype.destroy.call(this), this._didDestroy = !0, t
  }, s.willRun = function() {
    return this._willRun
  }, s.isRunning = function() {
    return this._isRunning
  }, s._subscribe = function() {
    return this.executor.subscribe(this)
  }, s._unsubscribe = function() {
    return this.executor.unsubscribe(this)
  }, s._onAnimationFrameStart = function(t) {
    this._isRunning = !0, this._willRun = !1, this._didEmitFrameData || (this._didEmitFrameData = !0, this.trigger("start", t))
  }, s._onAnimationFrameEnd = function(t) {
    this._willRun || (this.trigger("stop", t), this._reset())
  }, s._reset = function() {
    this._didEmitFrameData = !1, this._isRunning = !1
  }, t.exports = o
}, function(t, e, i) {
  "use strict";
  var s = i(17);
  t.exports = s.requestAnimationFrame("draw")
}, function(t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  e.default = {
    IDLE: "idle",
    PLAYING: "playing",
    PAUSED: "paused",
    ENDED: "ended"
  }
}, function(t, e, i) {
  "use strict";
  t.exports = {
    getWindow: function() {
      return window
    },
    getDocument: function() {
      return document
    },
    getNavigator: function() {
      return navigator
    }
  }
}, function(t, e, i) {
  "use strict";
  var s = i(83),
    r = function() {
      this.events = {}
    },
    a = r.prototype;
  a.requestAnimationFrame = function(t) {
    return this.events[t] || (this.events[t] = new s(t)), this.events[t].requestAnimationFrame
  }, a.cancelAnimationFrame = function(t) {
    return this.events[t] || (this.events[t] = new s(t)), this.events[t].cancelAnimationFrame
  }, t.exports = new r
}, function(t, e, i) {
  "use strict";
  var s = i(99),
    r = i(5),
    a = i(100);
  const n = i(7),
    o = "carnival-item-in-view";
  t.exports = class extends n {
    constructor(t) {
      super(t), this.scrollGroup = this.anim.getGroupForTarget(this.el), this.cancelAnimationRequest = null, this.engageKeyframeOptions = r.carnivalEngageKeyframe, this.tileClass = `.grid-item-${this.el.dataset.tileName}`, this.aniCurrentTime = null, this.inViewEventKeyframeOptions = {
        start: "t - 100vh",
        end: "b",
        event: o,
        disabledWhen: r.disabledWhen
      }, this.inViewClassKeyframeOptions = {
        start: "t - 100vh",
        end: "b",
        cssClass: "carnival-item-in-view",
        toggle: !0,
        disabledWhen: r.disabledWhen
      }
    }
    setupEngageKeyframes(t, e, i, s) {
      const r = this.scrollGroup.addKeyframe(this.el, this.engageKeyframeOptions.large);
      this._carnivalPlay(r, this.engageKeyframeOptions.large.event, t, i), this._carnivalCancel(r, this.engageKeyframeOptions.large.event);
      const a = this.scrollGroup.addKeyframe(this.el, this.engageKeyframeOptions.medium);
      this._carnivalPlay(a, this.engageKeyframeOptions.medium.event, t, i), this._carnivalCancel(a, this.engageKeyframeOptions.medium.event);
      const n = this.scrollGroup.addKeyframe(this.el, this.engageKeyframeOptions.small);
      this._carnivalPlay(n, this.engageKeyframeOptions.small.event, t, i), this._carnivalCancel(n, this.engageKeyframeOptions.small.event);
      const h = this.scrollGroup.addEvent(this.el, this.inViewEventKeyframeOptions);
      this._carnivalReset(h, o, e), this.scrollGroup.addKeyframe(this.el, this.inViewClassKeyframeOptions), this.aniCurrentTime = s
    }
    _carnivalPlay(t, e, i, r) {
      t.controller.on(`${e}:enter`, (() => {
        let t;
        t = s.director.requestAnimationStart({
          element: this.el,
          duration: r
        }), this.cancelAnimationRequest = t.cancel, t.then((() => {
          i()
        }))
      }))
    }
    _carnivalCancel(t, e) {
      t.controller.on(`${e}:exit`, (() => {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null)
      }))
    }
    _carnivalReset(t, e, i) {
      t.controller.on(`${e}:exit`, (() => {
        0 === this.aniCurrentTime && (0, a.trackAnimationStart)(this.tileClass), i()
      }))
    }
    static IS_SUPPORTED() {
      return !0
    }
  }
}, function(t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  e.default = {
    EMPTY: "loading-empty",
    LOADING: "loading",
    LOADED: "loaded",
    ERROR: "loading-error",
    DISABLED: "loading-disabled"
  }
}, function(t, e, i) {
  "use strict";
  var s = i(16),
    r = i(21);

  function a() {
    var t = s.getWindow(),
      e = s.getDocument(),
      i = s.getNavigator();
    return !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch || i.maxTouchPoints > 0 || i.msMaxTouchPoints > 0)
  }
  t.exports = r(a), t.exports.original = a
}, function(t, e, i) {
  "use strict";
  t.exports = function(t) {
    var e;
    return function() {
      return void 0 === e && (e = t.apply(this, arguments)), e
    }
  }
}, function(t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.baseExperienceMediaQueries = void 0;
  e.baseExperienceMediaQueries = {
    tallAspectRatio: "(max-aspect-ratio: 4/9)",
    smallShort: "(max-width: 734px) and (max-height: 500px)",
    mediumShort: "(min-width: 735px) and (max-width: 1068px) and (max-height: 600px)",
    largeShort: "(min-width: 1069px) and (max-height: 700px)"
  }
}, function(t, e, i) {
  "use strict";
  const s = i(24),
    r = i(25);
  t.exports = {
    PictureLazyLoading: s,
    PictureHead: r
  }
}, function(t, e, i) {
  "use strict";
  const s = i(1).PICTURE_DATA_LAZY,
    r = i(1).PICTURE_DATA_EMPTY_SOURCE,
    a = i(1).PICTURE_DATA_DOWNLOAD_AREA_KEYFRAME;
  t.exports = class {
    constructor(t = {}) {
      this.options = t, this._init()
    }
    _init() {
      this._pictures = Array.from(document.querySelectorAll(`*[${s}]`)), this.AnimSystem = this._findAnim(), null !== this.AnimSystem && (this._injectSources(), this._addKeyframesToImages(), this._addMethodsToPictures())
    }
    _addMethodsToPictures() {
      this._pictures.forEach((t => {
        t.forceLoad = () => {
          this._downloadImage(t)
        }
      }))
    }
    _injectSources() {
      this._pictures.forEach((t => {
        const e = t.nextElementSibling;
        if (e && "NOSCRIPT" === e.nodeName) {
          const i = t.querySelector("img"),
            s = e.textContent.match(/<source .+ \/>/g);
          s && i.insertAdjacentHTML("beforebegin", s.join(""))
        }
      }))
    }
    _defineKeyframeOptions(t) {
      const e = t.getAttribute(a) || "{}";
      return Object.assign({}, {
        start: "t - 200vh",
        end: "b + 100vh",
        event: "PictureLazyLoading"
      }, JSON.parse(e))
    }
    _addKeyframesToImages() {
      this._pictures.forEach((t => {
        t.__scrollGroup = this.AnimSystem.getGroupForTarget(document.body), this.AnimSystem.getGroupForTarget(t) && (t.__scrollGroup = this.AnimSystem.getGroupForTarget(t));
        let e = this._defineKeyframeOptions(t);
        t.__scrollGroup.addKeyframe(t, e).controller.once("PictureLazyLoading:enter", (() => {
          this._imageIsInLoadRange(t)
        }))
      }))
    }
    _imageIsInLoadRange(t) {
      t.querySelector("img") && this._downloadImage(t)
    }
    _downloadImage(t) {
      const e = t.querySelector(`[${r}]`);
      e && t.removeChild(e)
    }
    _findAnim() {
      var t = Array.from(document.querySelectorAll("[data-anim-group],[data-anim-scroll-group],[data-anim-time-group]"));
      return t.map((t => t._animInfo ? t._animInfo.group : null)).filter((t => null !== t)), t[0] && t[0]._animInfo ? t[0]._animInfo.group.anim : (console.error("PictureLazyLoading: AnimSystem not found, please initialize anim before instantiating"), null)
    }
  }
}, function(t, e, i) {
  "use strict";
  const s = i(1).PICTURE_CLASS_LOADED,
    r = i(1).PICTURE_DATA_LOADED,
    a = i(1).PICTURE_DATA_EMPTY_SOURCE;
  t.exports = (window.__pictureElementInstancesLoaded = new Map, void(window.__lp = function(t) {
    const e = t.target.parentElement;
    e.querySelector(`[${a}]`) ? t.stopImmediatePropagation() : (e.classList.add(`${s}`), e.setAttribute(`${r}`, ""), window.__pictureElementInstancesLoaded.set(e.id, e), t.target.onload = null)
  }))
}, function(t, e, i) {
  "use strict";
  var s = {
    ua: window.navigator.userAgent,
    platform: window.navigator.platform,
    vendor: window.navigator.vendor
  };
  t.exports = i(27)(s)
}, function(t, e, i) {
  "use strict";
  var s = i(28),
    r = i(29);

  function a(t, e) {
    if ("function" == typeof t.parseVersion) return t.parseVersion(e);
    var i, s = t.version || t.userAgent;
    "string" == typeof s && (s = [s]);
    for (var r, a = s.length, n = 0; n < a; n++)
      if ((r = e.match((i = s[n], new RegExp(i + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")))) && r.length > 1) return r[1].replace(/_/g, ".");
    return !1
  }

  function n(t, e, i) {
    for (var s, r, n = t.length, o = 0; o < n; o++)
      if ("function" == typeof t[o].test ? !0 === t[o].test(i) && (s = t[o].name) : i.ua.indexOf(t[o].userAgent) > -1 && (s = t[o].name), s) {
        if (e[s] = !0, "string" == typeof(r = a(t[o], i.ua))) {
          var h = r.split(".");
          e.version.string = r, h && h.length > 0 && (e.version.major = parseInt(h[0] || 0), e.version.minor = parseInt(h[1] || 0), e.version.patch = parseInt(h[2] || 0))
        } else "edge" === s && (e.version.string = "12.0.0", e.version.major = "12", e.version.minor = "0", e.version.patch = "0");
        return "function" == typeof t[o].parseDocumentMode && (e.version.documentMode = t[o].parseDocumentMode()), e
      } return e
  }
  t.exports = function(t) {
    var e = {};
    return e.browser = n(r.browser, s.browser, t), e.os = n(r.os, s.os, t), e
  }
}, function(t, e, i) {
  "use strict";
  t.exports = {
    browser: {
      safari: !1,
      chrome: !1,
      firefox: !1,
      ie: !1,
      opera: !1,
      android: !1,
      edge: !1,
      edgeChromium: !1,
      version: {
        string: "",
        major: 0,
        minor: 0,
        patch: 0,
        documentMode: !1
      }
    },
    os: {
      osx: !1,
      ios: !1,
      android: !1,
      windows: !1,
      linux: !1,
      fireos: !1,
      chromeos: !1,
      version: {
        string: "",
        major: 0,
        minor: 0,
        patch: 0
      }
    }
  }
}, function(t, e, i) {
  "use strict";
  t.exports = {
    browser: [{
      name: "edge",
      userAgent: "Edge",
      version: ["rv", "Edge"],
      test: function(t) {
        return t.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === t.ua
      }
    }, {
      name: "edgeChromium",
      userAgent: "Edge",
      version: ["rv", "Edg"],
      test: function(t) {
        return t.ua.indexOf("Edg") > -1 && -1 === t.ua.indexOf("Edge")
      }
    }, {
      name: "chrome",
      userAgent: "Chrome"
    }, {
      name: "firefox",
      test: function(t) {
        return t.ua.indexOf("Firefox") > -1 && -1 === t.ua.indexOf("Opera")
      },
      version: "Firefox"
    }, {
      name: "android",
      userAgent: "Android"
    }, {
      name: "safari",
      test: function(t) {
        return t.ua.indexOf("Safari") > -1 && t.vendor.indexOf("Apple") > -1
      },
      version: "Version"
    }, {
      name: "ie",
      test: function(t) {
        return t.ua.indexOf("IE") > -1 || t.ua.indexOf("Trident") > -1
      },
      version: ["MSIE", "rv"],
      parseDocumentMode: function() {
        var t = !1;
        return document.documentMode && (t = parseInt(document.documentMode, 10)), t
      }
    }, {
      name: "opera",
      userAgent: "Opera",
      version: ["Version", "Opera"]
    }],
    os: [{
      name: "windows",
      test: function(t) {
        return t.ua.indexOf("Windows") > -1
      },
      version: "Windows NT"
    }, {
      name: "osx",
      userAgent: "Mac",
      test: function(t) {
        return t.ua.indexOf("Macintosh") > -1
      }
    }, {
      name: "ios",
      test: function(t) {
        return t.ua.indexOf("iPhone") > -1 || t.ua.indexOf("iPad") > -1
      },
      version: ["iPhone OS", "CPU OS"]
    }, {
      name: "linux",
      userAgent: "Linux",
      test: function(t) {
        return (t.ua.indexOf("Linux") > -1 || t.platform.indexOf("Linux") > -1) && -1 === t.ua.indexOf("Android")
      }
    }, {
      name: "fireos",
      test: function(t) {
        return t.ua.indexOf("Firefox") > -1 && t.ua.indexOf("Mobile") > -1
      },
      version: "rv"
    }, {
      name: "android",
      userAgent: "Android",
      test: function(t) {
        return t.ua.indexOf("Android") > -1
      }
    }, {
      name: "chromeos",
      userAgent: "CrOS"
    }]
  }
}, function(t, e, i) {
  "use strict";

  function s() {
    this._events = {}
  }
  var r = s.prototype;
  r.on = function(t, e) {
    this._events[t] = this._events[t] || [], this._events[t].unshift(e)
  }, r.once = function(t, e) {
    var i = this;
    this.on(t, (function s(r) {
      i.off(t, s), void 0 !== r ? e(r) : e()
    }))
  }, r.off = function(t, e) {
    if (this.has(t)) {
      if (1 === arguments.length) return this._events[t] = null, void delete this._events[t];
      var i = this._events[t].indexOf(e); - 1 !== i && this._events[t].splice(i, 1)
    }
  }, r.trigger = function(t, e) {
    if (this.has(t))
      for (var i = this._events[t].length - 1; i >= 0; i--) void 0 !== e ? this._events[t][i](e) : this._events[t][i]()
  }, r.has = function(t) {
    return t in this._events != !1 && 0 !== this._events[t].length
  }, r.destroy = function() {
    for (var t in this._events) this._events[t] = null;
    this._events = null
  }, t.exports = s
}, function(t, e, i) {
  "use strict";
  const s = i(9),
    r = i(39);
  t.exports = class extends s {
    constructor(t, e, i, s, a = !1, n) {
      super(t, e, i, s = r(s), a, n)
    }
    set(t) {
      let e = this.current;
      this.round && (e = Math.round(e)), this.suffix && (e += this.suffix), t.setProperty(this.key, e)
    }
  }
}, function(t, e, i) {
  "use strict";
  t.exports = function(t) {
    return t.reduce(((t, e) => (t[e] = e, t)), {})
  }
}, function(t, e, i) {
  "use strict";
  const s = i(11),
    r = i(2),
    a = i(9);
  class n extends s {
    constructor(t, e) {
      super(t, e), this.keyframeType = r.KeyframeTypes.CSSClass, this._triggerType = n.TRIGGER_TYPE_CSS_CLASS, this.cssClass = "", this.friendlyName = "", this.style = {
        on: null,
        off: null
      }, this.toggle = r.KeyframeDefaults.toggle, this.isApplied = !1
    }
    parseOptions(t) {
      if (!this.controller._ownerIsElement) throw new TypeError("CSS Keyframes cannot be applied to JS Objects");
      if (t.x = void 0, t.y = void 0, t.z = void 0, t.scale = void 0, t.scaleX = void 0, t.scaleY = void 0, t.rotationX = void 0, t.rotationY = void 0, t.rotationZ = void 0, t.rotation = void 0, t.opacity = void 0, t.hold = void 0, void 0 !== t.toggle && (this.toggle = t.toggle), void 0 !== t.cssClass) this._triggerType = n.TRIGGER_TYPE_CSS_CLASS, this.cssClass = t.cssClass, this.friendlyName = "." + this.cssClass, void 0 === this.controller.tweenProps.targetClasses && (this.controller.tweenProps.targetClasses = {
        add: [],
        remove: []
      });
      else {
        if (void 0 === t.style || !this.isValidStyleProperty(t.style)) throw new TypeError("KeyframeCSSClass no 'cssClass` property found. If using `style` property its also missing or invalid");
        if (this._triggerType = n.TRIGGER_TYPE_STYLE_PROPERTY, this.style = t.style, this.friendlyName = "style", this.toggle = void 0 !== this.style.off || this.toggle, this.toggle && void 0 === this.style.off) {
          this.style.off = {};
          for (let t in this.style.on) this.style.off[t] = ""
        }
        void 0 === this.controller.tweenProps.targetStyles && (this.controller.tweenProps.targetStyles = {})
      }
      if (void 0 === t.end && (t.end = t.start), t.toggle = this.toggle, this._triggerType === n.TRIGGER_TYPE_CSS_CLASS) this.isApplied = this.controller.element.classList.contains(this.cssClass);
      else {
        let t = getComputedStyle(this.controller.element);
        this.isApplied = !0;
        for (let e in this.style.on)
          if (t[e] !== this.style.on[e]) {
            this.isApplied = !1;
            break
          }
      }
      s.prototype.parseOptions.call(this, t), this.animValues[this.friendlyName] = [0, 0], void 0 === this.controller.tweenProps[this.friendlyName] && (this.controller.tweenProps[this.friendlyName] = new a(0, 1, !1, this.friendlyName)), this.keyframeType = r.KeyframeTypes.CSSClass
    }
    updateLocalProgress(t) {
      this.isApplied && !this.toggle || (this.start !== this.end ? !this.isApplied && t >= this.start && t <= this.end ? this._apply() : this.isApplied && this.toggle && (t < this.start || t > this.end) && this._unapply() : !this.isApplied && t >= this.start ? this._apply() : this.isApplied && this.toggle && t < this.start && this._unapply())
    }
    _apply() {
      if (this._triggerType === n.TRIGGER_TYPE_CSS_CLASS) this.controller.tweenProps.targetClasses.add.push(this.cssClass), this.controller.needsClassUpdate = !0;
      else {
        for (let t in this.style.on) this.controller.tweenProps.targetStyles[t] = this.style.on[t];
        this.controller.needsStyleUpdate = !0
      }
      this.isApplied = !0
    }
    _unapply() {
      if (this._triggerType === n.TRIGGER_TYPE_CSS_CLASS) this.controller.tweenProps.targetClasses.remove.push(this.cssClass), this.controller.needsClassUpdate = !0;
      else {
        for (let t in this.style.off) this.controller.tweenProps.targetStyles[t] = this.style.off[t];
        this.controller.needsStyleUpdate = !0
      }
      this.isApplied = !1
    }
    isValidStyleProperty(t) {
      if (!t.hasOwnProperty("on")) return !1;
      if ("object" != typeof t.on) throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:'hidden', otherProperty: 'value'}}");
      if (this.toggle && t.hasOwnProperty("off") && "object" != typeof t.off) throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:'hidden', otherProperty: 'value'}}");
      return !0
    }
    reconcile(t) {}
    onDOMRead(t) {}
    evaluateInterpolationConstraints() {}
  }
  n.TRIGGER_TYPE_CSS_CLASS = 0, n.TRIGGER_TYPE_STYLE_PROPERTY = 1, n.DATA_ATTRIBUTE = "data-anim-classname", t.exports = n
}, function(t, e, i) {
  "use strict";
  const s = i(6).EventEmitterMicro,
    r = i(10),
    a = i(32),
    n = i(2),
    o = i(43),
    h = i(75),
    l = i(76),
    p = i(44),
    c = i(77),
    u = i(79),
    d = {};
  "undefined" != typeof window && (d.create = i(13), d.update = i(12), d.draw = i(14));
  let m = 0;
  t.exports = class extends s {
    constructor(t, e) {
      super(), this.anim = e, this.element = t, this.name = this.name || t.getAttribute("data-anim-scroll-group"), this.isEnabled = !0, this.position = new h, this.metrics = new p, this.metrics.add(this.element), this.expressionParser = new c(this), this.boundsMin = 0, this.boundsMax = 0, this.timelineUpdateRequired = !1, this._keyframesDirty = !1, this.viewableRange = this.createViewableRange(), this.defaultEase = n.KeyframeDefaults.ease, this.keyframeControllers = [], this.updateProgress(this.getPosition()), this.onDOMRead = this.onDOMRead.bind(this), this.onDOMWrite = this.onDOMWrite.bind(this), this.gui = null, this.computedStyleCache = {}, this.finalizeInit()
    }
    finalizeInit() {
      this.element._animInfo = new o(this, null, !0), this.setupRAFEmitter()
    }
    destroy() {
      this.destroyed = !0, this.expressionParser.destroy(), this.expressionParser = null;
      for (let t = 0, e = this.keyframeControllers.length; t < e; t++) this.keyframeControllers[t].destroy();
      this.keyframeControllers = null, this.position = null, this.viewableRange = null, this.gui && (this.gui.destroy(), this.gui = null), this.metrics.destroy(), this.metrics = null, this.rafEmitter.destroy(), this.rafEmitter = null, this.anim = null, this.element._animInfo && this.element._animInfo.group === this && (this.element._animInfo.group = null, this.element._animInfo = null), this.element = null, this.isEnabled = !1, super.destroy()
    }
    removeKeyframeController(t) {
      return this.keyframeControllers.includes(t) ? (t._allKeyframes.forEach((t => t.markedForRemoval = !0)), this.keyframesDirty = !0, new Promise((e => {
        d.draw((() => {
          const i = this.keyframeControllers.indexOf(t); - 1 !== i ? (this.keyframeControllers.splice(i, 1), t.onDOMWrite(), t.destroy(), this.gui && this.gui.create(), e()) : e()
        }))
      }))) : Promise.resolve()
    }
    remove() {
      return this.anim.removeGroup(this)
    }
    clear() {
      return Promise.all(this.keyframeControllers.map((t => this.removeKeyframeController(t))))
    }
    setupRAFEmitter(t) {
      this.rafEmitter && this.rafEmitter.destroy(), this.rafEmitter = t || new d.create, this.rafEmitter.on("update", this.onDOMRead), this.rafEmitter.on("draw", this.onDOMWrite), this.rafEmitter.once("external", (() => this.reconcile()))
    }
    requestDOMChange() {
      return !!this.isEnabled && this.rafEmitter.run()
    }
    onDOMRead() {
      this.keyframesDirty && this.onKeyframesDirty();
      for (let t = 0, e = this.keyframeControllers.length; t < e; t++) this.keyframeControllers[t].onDOMRead(this.position.local)
    }
    onDOMWrite() {
      for (let t = 0, e = this.keyframeControllers.length; t < e; t++) this.keyframeControllers[t].onDOMWrite();
      this.needsUpdate() && this.requestDOMChange(), this.computedStyleCache = {}
    }
    needsUpdate() {
      if (this._keyframesDirty) return !0;
      for (let t = 0, e = this.keyframeControllers.length; t < e; t++)
        if (this.keyframeControllers[t].needsUpdate()) return !0;
      return !1
    }
    addKeyframe(t, e) {
      let i = this.getControllerForTarget(t);
      return null === i && (i = new u(this, t), this.keyframeControllers.push(i)), this.keyframesDirty = !0, i.addKeyframe(e)
    }
    addEvent(t, e) {
      e.event = e.event || "Generic-Event-Name-" + m++;
      let i = void 0 !== e.end && e.end !== e.start;
      const s = this.addKeyframe(t, e);
      return i ? (e.onEnterOnce && s.controller.once(e.event + ":enter", e.onEnterOnce), e.onExitOnce && s.controller.once(e.event + ":exit", e.onExitOnce), e.onEnter && s.controller.on(e.event + ":enter", e.onEnter), e.onExit && s.controller.on(e.event + ":exit", e.onExit)) : (e.onEventOnce && s.controller.once(e.event, e.onEventOnce), e.onEventReverseOnce && s.controller.once(e.event + ":reverse", e.onEventReverseOnce), e.onEvent && s.controller.on(e.event, e.onEvent), e.onEventReverse && s.controller.on(e.event + ":reverse", e.onEventReverse)), s
    }
    forceUpdate({
      waitForNextUpdate: t = !0,
      silent: e = !1
    } = {}) {
      this.isEnabled && (this.refreshMetrics(), this.timelineUpdateRequired = !0, t ? this.keyframesDirty = !0 : this.onKeyframesDirty({
        silent: e
      }))
    }
    onKeyframesDirty({
      silent: t = !1
    } = {}) {
      this.determineActiveKeyframes(), this.keyframesDirty = !1, this.metrics.refreshMetrics(this.element), this.viewableRange = this.createViewableRange();
      for (let t = 0, e = this.keyframeControllers.length; t < e; t++) this.keyframeControllers[t].updateAnimationConstraints();
      this.updateBounds(), this.updateProgress(this.getPosition()), t || this.updateTimeline(), this.gui && this.gui.create()
    }
    refreshMetrics() {
      let t = new Set([this.element]);
      this.keyframeControllers.forEach((e => {
        t.add(e.element), e._allKeyframes.forEach((e => e.anchors.forEach((e => t.add(e)))))
      })), this.metrics.refreshCollection(t), this.viewableRange = this.createViewableRange()
    }
    reconcile() {
      for (let t = 0, e = this.keyframeControllers.length; t < e; t++) this.keyframeControllers[t].reconcile()
    }
    determineActiveKeyframes(t) {
      t = t || a(Array.from(document.documentElement.classList));
      for (let e = 0, i = this.keyframeControllers.length; e < i; e++) this.keyframeControllers[e].determineActiveKeyframes(t)
    }
    updateBounds() {
      if (0 === this.keyframeControllers.length) return this.boundsMin = 0, void(this.boundsMax = 0);
      let t = {
        min: Number.POSITIVE_INFINITY,
        max: Number.NEGATIVE_INFINITY
      };
      for (let e = 0, i = this.keyframeControllers.length; e < i; e++) this.keyframeControllers[e].getBounds(t);
      let e = this.convertTValueToScrollPosition(t.min),
        i = this.convertTValueToScrollPosition(t.max);
      i - e < n.pageMetrics.windowHeight ? (t.min = this.convertScrollPositionToTValue(e - .5 * n.pageMetrics.windowHeight), t.max = this.convertScrollPositionToTValue(i + .5 * n.pageMetrics.windowHeight)) : (t.min -= .001, t.max += .001), this.boundsMin = t.min, this.boundsMax = t.max, this.timelineUpdateRequired = !0
    }
    createViewableRange() {
      return new l(this.metrics.get(this.element), n.pageMetrics.windowHeight)
    }
    _onBreakpointChange(t, e) {
      this.keyframesDirty = !0, this.determineActiveKeyframes()
    }
    updateProgress(t) {
      this.hasDuration() ? (this.position.localUnclamped = (t - this.viewableRange.a) / (this.viewableRange.d - this.viewableRange.a), this.position.local = r.clamp(this.position.localUnclamped, this.boundsMin, this.boundsMax)) : this.position.local = this.position.localUnclamped = 0
    }
    performTimelineDispatch() {
      for (let t = 0, e = this.keyframeControllers.length; t < e; t++) this.keyframeControllers[t].updateLocalProgress(this.position.local);
      this.trigger(n.EVENTS.ON_TIMELINE_UPDATE, this.position.local), this.trigger("update", this.position.local), this.timelineUpdateRequired = !1, this.position.lastPosition !== this.position.local && (this.position.lastPosition <= this.boundsMin && this.position.localUnclamped > this.boundsMin ? (this.trigger(n.EVENTS.ON_TIMELINE_START, this), this.trigger("start", this)) : this.position.lastPosition >= this.boundsMin && this.position.localUnclamped < this.boundsMin ? (this.trigger(n.EVENTS.ON_TIMELINE_START + ":reverse", this), this.trigger("start:reverse", this)) : this.position.lastPosition <= this.boundsMax && this.position.localUnclamped >= this.boundsMax ? (this.trigger(n.EVENTS.ON_TIMELINE_COMPLETE, this), this.trigger("complete", this)) : this.position.lastPosition >= this.boundsMax && this.position.localUnclamped < this.boundsMax && (this.trigger(n.EVENTS.ON_TIMELINE_COMPLETE + ":reverse", this), this.trigger("complete:reverse", this))), null !== this.gui && this.gui.onScrollUpdate(this.position)
    }
    updateTimeline(t) {
      if (!this.isEnabled) return !1;
      void 0 === t && (t = this.getPosition()), this.updateProgress(t);
      let e = this.position.lastPosition === this.boundsMin || this.position.lastPosition === this.boundsMax,
        i = this.position.localUnclamped === this.boundsMin || this.position.localUnclamped === this.boundsMax;
      if (!this.timelineUpdateRequired && e && i && this.position.lastPosition === t) return void(this.position.local = this.position.localUnclamped);
      if (this.timelineUpdateRequired || this.position.localUnclamped > this.boundsMin && this.position.localUnclamped < this.boundsMax) return this.performTimelineDispatch(), this.requestDOMChange(), void(this.position.lastPosition = this.position.localUnclamped);
      let s = this.position.lastPosition > this.boundsMin && this.position.lastPosition < this.boundsMax,
        r = this.position.localUnclamped <= this.boundsMin || this.position.localUnclamped >= this.boundsMax;
      if (s && r) return this.performTimelineDispatch(), this.requestDOMChange(), void(this.position.lastPosition = this.position.localUnclamped);
      const a = this.position.lastPosition < this.boundsMin && this.position.localUnclamped > this.boundsMax,
        n = this.position.lastPosition > this.boundsMax && this.position.localUnclamped < this.boundsMax;
      (a || n) && (this.performTimelineDispatch(), this.requestDOMChange(), this.position.lastPosition = this.position.localUnclamped), null !== this.gui && this.gui.onScrollUpdate(this.position)
    }
    _onScroll(t) {
      this.updateTimeline(t)
    }
    convertScrollPositionToTValue(t) {
      return this.hasDuration() ? r.map(t, this.viewableRange.a, this.viewableRange.d, 0, 1) : 0
    }
    convertTValueToScrollPosition(t) {
      return this.hasDuration() ? r.map(t, 0, 1, this.viewableRange.a, this.viewableRange.d) : 0
    }
    hasDuration() {
      return this.viewableRange.a !== this.viewableRange.d
    }
    getPosition() {
      return n.pageMetrics.scrollY
    }
    getControllerForTarget(t) {
      if (!t._animInfo || !t._animInfo.controllers) return null;
      if (t._animInfo.controller && t._animInfo.controller.group === this) return t._animInfo.controller;
      const e = t._animInfo.controllers;
      for (let t = 0, i = e.length; t < i; t++)
        if (e[t].group === this) return e[t];
      return null
    }
    trigger(t, e) {
      if (void 0 !== this._events[t])
        for (let i = this._events[t].length - 1; i >= 0; i--) void 0 !== e ? this._events[t][i](e) : this._events[t][i]()
    }
    set keyframesDirty(t) {
      this._keyframesDirty = t, this._keyframesDirty && this.requestDOMChange()
    }
    get keyframesDirty() {
      return this._keyframesDirty
    }
  }
}, function(t, i, s) {
  "use strict";
  const r = s(3).default,
    a = s(4).default,
    n = s(15).default;
  t.exports = class extends r {
    constructor(t) {
      super(t), this._replayButton = this.options.playPauseButton, this.onPlayBackStateChange = this.onPlayBackStateChange.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.setupEvents()
    }
    setupEvents() {
      this._replayButton && (this.media.on(a.PLAYBACK_STATE_CHANGE, this.onPlayBackStateChange), this._replayButton.addEventListener("keydown", this.onKeyDown))
    }
    onPlayBackStateChange() {
      const t = this.media.playbackState === n.ENDED;
      this.setDisabled(!t)
    }
    setDisabled(t) {
      t ? (this._replayButton.setAttribute("aria-disabled", !0), this._replayButton.classList.add("disabled")) : (this._replayButton.removeAttribute("aria-disabled"), this._replayButton.classList.remove("disabled"))
    }
    onKeyDown(t) {
      13 !== e.keyCode && 32 !== e.keyCode || this.media.playbackState === n.PLAYING && t.preventDefault()
    }
  }
}, function(t, e, i) {
  "use strict";
  var s = i(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "Media", {
    enumerable: !0,
    get: function() {
      return r.default
    }
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r.default
    }
  }), Object.defineProperty(e, "Plugin", {
    enumerable: !0,
    get: function() {
      return a.default
    }
  }), e.autoInit = void 0;
  var r = s(i(50)),
    a = s(i(3));
  const n = r.default.autoInitialize;
  e.autoInit = n
}, function(t, e, i) {
  "use strict";
  t.exports = i(52)("warn")
}, function(t, e, i) {
  "use strict";
  t.exports = class {}
}, function(t, e, i) {
  "use strict";
  t.exports = function(t) {
    return t.startsWith("--") ? t : t.replace(/[A-Z]/g, (t => "-" + t.toLowerCase()))
  }
}, function(t, e, i) {
  "use strict";
  t.exports = () => Math.random().toString(16).slice(-4)
}, function(t, e, i) {
  "use strict";
  let s = ["borderRadius", "bottom", "fontSize", "fontWeight", "height", "left", "lineHeight", "marginBottom", "marginLeft", "marginRight", "marginTop", "maxHeight", "maxWidth", "opacity", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "right", "top", "width", "zIndex", "color", "backgroundColor", "fill", "stroke", "strokeDashoffset"];
  s.push(...s.map((t => t.replace(/[A-Z]/g, (t => "-" + t.toLowerCase())))));
  t.exports = {
    transformAttributes: ["x", "y", "z", "scale", "scaleX", "scaleY", "rotation", "rotationX", "rotationY", "rotationZ"],
    cssAttributes: s,
    domAttributes: ["currentTime", "scrollLeft", "scrollTop"]
  }
}, function(t, e, i) {
  "use strict";
  const s = i(11),
    r = i(2),
    a = i(9);
  class n extends s {
    constructor(t, e) {
      super(t, e), this.keyframeType = r.KeyframeTypes.Event, this.isApplied = !1, this.hasDuration = !1, this.isCurrentlyInRange = !1
    }
    parseOptions(t) {
      t.x = void 0, t.y = void 0, t.scale = void 0, t.scaleX = void 0, t.scaleY = void 0, t.rotation = void 0, t.style = void 0, t.cssClass = void 0, t.rotation = void 0, t.opacity = void 0, t.hold = void 0, this.event = t.event, this.animValues[this.event] = [0, 0], void 0 === this.controller.tweenProps[this.event] && (this.controller.tweenProps[this.event] = new a(0, 1, !1, this.event)), super.parseOptions(t), this.keyframeType = r.KeyframeTypes.Event
    }
    updateLocalProgress(t) {
      if (this.hasDuration) {
        let e = this.isCurrentlyInRange,
          i = t >= this.start && t <= this.end;
        if (e === i) return;
        return this.isCurrentlyInRange = i, void(i && !e ? this._trigger(this.event + ":enter") : e && !i && this._trigger(this.event + ":exit"))
      }!this.isApplied && t >= this.start ? (this.isApplied = !0, this._trigger(this.event)) : this.isApplied && t < this.start && (this.isApplied = !1, this._trigger(this.event + ":reverse"))
    }
    _trigger(t) {
      this.controller.eventObject.event = t, this.controller.eventObject.keyframe = this, this.controller.trigger(t, this.controller.eventObject)
    }
    evaluateConstraints() {
      super.evaluateConstraints(), this.hasDuration = this.start !== this.end
    }
    reset(t) {
      this.isApplied = !1, this.isCurrentlyInRange = !1, super.reset(t)
    }
    onDOMRead(t) {}
    reconcile(t) {}
    evaluateInterpolationConstraints() {}
  }
  n.DATA_ATTRIBUTE = "data-anim-event", t.exports = n
}, function(t, e, i) {
  "use strict";
  const s = i(38);
  t.exports = class {
    constructor(t, e, i = !1) {
      this.isGroup = i, this.group = t, this.controller = e, this.controllers = [], this.tweenProps = new s
    }
  }
}, function(t, e, i) {
  "use strict";
  const s = i(2),
    r = (t, e) => null == t ? e : t;
  class a {
    constructor(t) {
      this.top = 0, this.bottom = 0, this.left = 0, this.right = 0, this.height = 0, this.width = 0
    }
    toString() {
      return `top:${this.top}, bottom:${this.bottom}, left:${this.left}, right:${this.right}, height:${this.height}, width:${this.width}`
    }
    toObject() {
      return {
        top: this.top,
        bottom: this.bottom,
        left: this.left,
        right: this.right,
        height: this.height,
        width: this.width
      }
    }
  }
  t.exports = class {
    constructor() {
      this.clear()
    }
    clear() {
      this._metrics = new WeakMap
    }
    destroy() {
      this._metrics = null
    }
    add(t) {
      let e = this._metrics.get(t);
      if (e) return e;
      let i = new a(t);
      return this._metrics.set(t, i), this._refreshMetrics(t, i)
    }
    get(t) {
      return this._metrics.get(t)
    }
    refreshCollection(t) {
      t.forEach((t => this._refreshMetrics(t, null)))
    }
    refreshMetrics(t) {
      return this._refreshMetrics(t)
    }
    _refreshMetrics(t, e) {
      if (e = e || this._metrics.get(t), !(t instanceof Element)) return e.width = r(t.width, 0), e.height = r(t.height, 0), e.top = r(t.top, r(t.y, 0)), e.left = r(t.left, r(t.x, 0)), e.right = e.left + e.width, e.bottom = e.top + e.height, e;
      if (void 0 === t.offsetWidth) {
        let i = t.getBoundingClientRect();
        return e.width = i.width, e.height = i.height, e.top = s.pageMetrics.scrollY + i.top, e.left = s.pageMetrics.scrollX + i.left, e.right = e.left + e.width, e.bottom = e.top + e.height, e
      }
      e.width = t.offsetWidth, e.height = t.offsetHeight, e.top = s.pageMetrics.documentOffsetY, e.left = s.pageMetrics.documentOffsetX;
      let i = t;
      for (; i;) e.top += i.offsetTop, e.left += i.offsetLeft, i = i.offsetParent;
      return e.right = e.left + e.width, e.bottom = e.top + e.height, e
    }
  }
}, function(t, e, i) {
  "use strict";
  t.exports = {
    SharedInstance: i(86)
  }
}, function(t, e, i) {
  "use strict";
  t.exports = {
    majorVersionNumber: "3.x"
  }
}, function(t, e, i) {
  "use strict";
  var s = i(17);
  t.exports = s.requestAnimationFrame("external")
}, function(t, e, i) {
  "use strict";
  const s = i(2);
  class r {
    constructor(t, e) {
      this._index = 0, this.keyframe = t, e && (this.name = e)
    }
    get start() {
      return this.keyframe.jsonProps.start
    }
    set index(t) {
      this._index = t
    }
    get index() {
      return this._index
    }
  }
  t.exports = class {
    constructor(t) {
      this.timeGroup = t, this.chapters = [], this.chapterNames = {}, this.currentChapter = null, this.tween = null
    }
    addChapter(t) {
      const {
        position: e,
        name: i
      } = t;
      if (void 0 === e) throw ReferenceError("Cannot add chapter without target position.");
      t._impIsFirst || 0 !== this.chapters.length || this.addChapter({
        position: 0,
        _impIsFirst: !0
      });
      let s = this.timeGroup.addKeyframe(this, {
        start: e,
        end: e,
        event: "Chapter"
      });
      this.timeGroup.forceUpdate({
        waitForNextFrame: !1,
        silent: !0
      });
      const a = new r(s, i);
      if (this.chapters.push(a), i) {
        if (this.chapterNames.hasOwnProperty(i)) throw ReferenceError(`Duplicate chapter name assigned - "${i}" is already in use`);
        this.chapterNames[i] = a
      }
      return this.chapters.sort(((t, e) => t.start - e.start)).forEach(((t, e) => t.index = e)), this.currentChapter = this.currentChapter || this.chapters[0], a
    }
    playToChapter(t) {
      let e;
      if (t.hasOwnProperty("index")) e = this.chapters[t.index];
      else {
        if (!t.hasOwnProperty("name")) throw ReferenceError("Cannot play to chapter without target index or name");
        e = this.chapterNames[t.name]
      }
      if (!e || this.currentChapter === e && !0 !== t.force) return;
      let i = t.ease || "easeInOutCubic";
      this.tween && this.tween.controller && (this.tween.remove(), i = "easeOutQuint"), this.timeGroup.timeScale(t.timeScale || 1);
      const r = void 0 !== t.duration ? t.duration : this.getDurationToChapter(e),
        a = this.timeGroup.time(),
        n = e.start;
      let o = !1;
      this.tween = this.timeGroup.anim.addTween({
        time: a
      }, {
        easeFunction: i,
        duration: r,
        time: [a, n],
        onStart: () => this.timeGroup.trigger(s.EVENTS.ON_CHAPTER_INITIATED, {
          player: this,
          next: e
        }),
        onDraw: t => {
          let i = t.tweenProps.time.current;
          this.timeGroup.time(i), t.keyframe.curvedT > .5 && !o && (o = !0, this.currentIndex = e.index, this.currentChapter = e, this.timeGroup.trigger(s.EVENTS.ON_CHAPTER_OCCURRED, {
            player: this,
            current: e
          }))
        },
        onComplete: () => {
          this.timeGroup.trigger(s.EVENTS.ON_CHAPTER_COMPLETED, {
            player: this,
            current: e
          }), this.timeGroup.paused(!0), this.tween = null
        }
      })
    }
    getDurationToChapter(t) {
      const e = this.chapters[t.index - 1] || this.chapters[t.index + 1];
      return Math.abs(e.start - t.start)
    }
  }
}, function(t, e, i) {
  "use strict";
  t.exports = {
    BaseComponent: i(7)
  }
}, function(t, e, i) {
  "use strict";
  var s = i(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = e.pluginCache = void 0;
  var r = s(i(30)),
    a = s(i(105)),
    n = s(i(111)),
    o = s(i(4));
  const h = {};
  e.pluginCache = h;
  const l = [];
  let p = 1;
  class c extends r.default {
    constructor(t = {}) {
      super(), this.el = t.el || document.createElement("video"), this.id = t.id || this.el.id || this.el.dataset.inlineMediaId || "inlineMedia-" + p++;
      const e = (t.plugins || []).concat(a.default);
      this._initPlugins(e, t), l.push(this)
    }
    async load(t) {
      for (const e of this.plugins)
        if ("function" == typeof e.load) return e.load(t)
    }
    abortLoad() {
      for (const t of this.plugins)
        if ("function" == typeof t.abortLoad) {
          t.abortLoad();
          break
        }
    }
    async play() {
      for (const t of this.plugins)
        if ("function" == typeof t.play) return t.play()
    }
    get src() {
      for (const t of this.plugins)
        if (t.src) return t.src;
      return ""
    }
    get playbackState() {
      for (const t of this.plugins) {
        const e = t.playbackState;
        if (void 0 !== e) return e
      }
    }
    get loadingState() {
      for (const t of this.plugins) {
        const e = t.loadingState;
        if (void 0 !== e) return e
      }
    }
    _initPlugins(t, e) {
      this.plugins = [], this.pluginMap = new Map;
      for (let i of t) {
        if ("string" == typeof i) {
          if (!h[i]) throw new Error(`Trying to use undefined Plugin named: ${i} . Ensure you call Media.addPlugin() first!`);
          i = h[i]
        }
        if (!1 !== i.isSupported) {
          const t = new i(Object.assign({
            media: this
          }, e));
          this.plugins.push(t), this.pluginMap.set(i, t)
        }
      }
      this.trigger(o.default.MOUNTED)
    }
    destroy() {
      if (!this._destroyed) {
        for (const t of this.plugins) "function" == typeof t.destroy && t.destroy();
        super.destroy(), l.splice(l.indexOf(this), 1), this._destroyed = !0
      }
    }
    static get medias() {
      return l
    }
    static addPlugin(t, e) {
      h[t] = e
    }
    static async autoInitialize(t = document, e = {}) {
      return (0, n.default)(t, e)
    }
  }
  var u = c;
  e.default = u
}, function(t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  e.default = {
    LOAD_START: "loadstart",
    LOADED_DATA: "loadeddata",
    LOADED_METADATA: "loadedmetadata",
    CAN_PLAY: "canplay",
    CAN_PLAY_THROUGH: "canplaythrough",
    PLAY: "play",
    PLAYING: "playing",
    PAUSE: "pause",
    WAITING: "waiting",
    SEEKING: "seeking",
    SEEKED: "seeked",
    ERROR: "error",
    ENDED: "ended",
    ABORT: "abort"
  }
}, function(t, e, i) {
  "use strict";
  var s = i(108);
  t.exports = function(t) {
    return function() {
      if (s && "object" == typeof window.console && "function" == typeof console[t]) return console[t].apply(console, Array.prototype.slice.call(arguments, 0))
    }
  }
}, function(t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = function(t, e, i, s) {
    const r = i[0].toUpperCase() + i.slice(1),
      a = t["inlineMedia" + r];
    if (void 0 !== a) switch (typeof s) {
      case "boolean":
        return "false" !== a;
      case "object":
        return JSON.parse(a);
      case "number":
        return Number(a);
      default:
        return a
    } else if (void 0 !== e[i]) {
      const t = e[i];
      return "boolean" != typeof s || "false" !== t && "true" !== t ? t : "false" !== t
    } return s
  }
}, function(t, e, i) {
  "use strict";
  var s = i(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = s(i(121));
  e.default = class {
    constructor(t) {
      this._breakpoints = t.breakpoints || r.default, this.options = t, this._initialize()
    }
    _initialize() {
      this._updateBreakpoint = this._updateBreakpoint.bind(this), this._callback = this.options.callback, this._mediaQueries = Object.keys(this._breakpoints).map((t => window.matchMedia(`(min-width: ${this._breakpoints[t]}px)`))), this._addEventListeners(), this._updateBreakpoint()
    }
    _addEventListeners() {
      for (const t of this._mediaQueries) t.addListener(this._updateBreakpoint)
    }
    _removeEventListeners() {
      for (const t of this._mediaQueries) t.removeListener(this._updateBreakpoint)
    }
    _updateBreakpoint() {
      const t = Object.keys(this._breakpoints);
      let e = t[0];
      for (let i = 1; i < t.length; i++) {
        if (!this._mediaQueries[i].matches) break;
        e = t[i]
      }
      let i = !1;
      this._currentBreakpoint && this._currentBreakpoint !== e && (i = !0), this._currentBreakpoint = e, i && this._callback()
    }
    get breakpoint() {
      return this._currentBreakpoint
    }
    destroy() {
      this._removeEventListeners()
    }
  }
}, , , , , , , , , , , , function(t, e, i) {
  t.exports = i(67)
}, function(t, e, i) {
  "use strict";
  var s = i(5),
    r = i(22);
  const a = i(68),
    n = i(49),
    o = i(98),
    h = i(2),
    l = i(141),
    p = i(23).PictureLazyLoading,
    c = i(144);
  ({
    initialize() {
      Object.assign(n, o), Object.assign(s.defaultBaseExperienceMediaQueries, r.baseExperienceMediaQueries);
      let t = document.querySelector("body");
      new a(t).anim.on(h.EVENTS.ON_DOM_GROUPS_CREATED, (() => {
        new l, new p
      })), c.detect()
    }
  }).initialize()
}, function(t, e, i) {
  "use strict";
  const s = i(6).EventEmitterMicro,
    r = i(69),
    a = i(70),
    n = i(2),
    o = i(49),
    h = {};
  class l extends s {
    constructor(t, e = {}) {
      super(), this.el = t, this.anim = a, this.componentAttribute = e.attribute || "data-component-list", this.components = [], this.componentsInitialized = !1, this.el.getAttribute("data-anim-scroll-group") || this.el.setAttribute("data-anim-scroll-group", "bubble-gum-group"), r.add((() => {
        a.initialize().then((() => {
          this.initComponents(), this.setupEvents(), this.components.forEach((t => t.mounted())), this.trigger(l.EVENTS.DOM_COMPONENTS_MOUNTED)
        }))
      }))
    }
    initComponents() {
      const t = Array.prototype.slice.call(this.el.querySelectorAll(`[${this.componentAttribute}]`));
      this.el.hasAttribute(this.componentAttribute) && t.push(this.el);
      for (let e = 0; e < t.length; e++) {
        let i = t[e],
          s = i.getAttribute(this.componentAttribute).split(" ");
        for (let t = 0, e = s.length; t < e; t++) {
          let e = s[t];
          "" !== e && " " !== e && this.addComponent({
            el: i,
            componentName: e
          })
        }
      }
      this.componentsInitialized = !0
    }
    setupEvents() {
      this.onResizeDebounced = this.onResizeDebounced.bind(this), this.onResizeImmediate = this.onResizeImmediate.bind(this), this.onBreakpointChange = this.onBreakpointChange.bind(this), a.on(n.PageEvents.ON_RESIZE_IMMEDIATE, this.onResizeImmediate), a.on(n.PageEvents.ON_RESIZE_DEBOUNCED, this.onResizeDebounced), a.on(n.PageEvents.ON_BREAKPOINT_CHANGE, this.onBreakpointChange)
    }
    addComponent(t) {
      const {
        el: e,
        componentName: i,
        data: s
      } = t;
      if (!o.hasOwnProperty(i)) throw "BubbleGum::addComponent could not add component to '" + e.className + "'. No component type '" + i + "' found!";
      const r = o[i];
      if (!l.componentIsSupported(r, i)) return void 0 === h[i] && (console.log("BubbleGum::addComponent unsupported component '" + i + "'. Reason: '" + i + ".IS_SUPPORTED' returned false"), h[i] = !0), null;
      let a = e.dataset.componentList || "";
      a.includes(i) || (e.dataset.componentList = a.split(" ").concat(i).join(" "));
      let p = new r({
        el: e,
        data: s,
        componentName: t.componentName,
        gum: this,
        pageMetrics: n.pageMetrics
      });
      return this.components.push(p), this.componentsInitialized && p.mounted(), p
    }
    removeComponent(t) {
      const e = this.components.indexOf(t); - 1 !== e && (this.components.splice(e, 1), t.el.dataset.componentList = t.el.dataset.componentList.split(" ").filter((e => e !== t.componentName)).join(" "), t.destroy())
    }
    getComponentOfType(t, e = document.documentElement) {
      const i = `[${this.componentAttribute}*=${t}]`,
        s = e.matches(i) ? e : e.querySelector(i);
      return s ? this.components.find((e => e instanceof o[t] && e.el === s)) : null
    }
    getComponentsOfType(t, e = document.documentElement) {
      const i = `[${this.componentAttribute}*=${t}]`,
        s = e.matches(i) ? [e] : Array.from(e.querySelectorAll(i));
      return this.components.filter((e => e instanceof o[t] && s.includes(e.el)))
    }
    getComponentsForElement(t) {
      return this.components.filter((e => e.el === t))
    }
    onResizeImmediate() {
      this.components.forEach((t => t.onResizeImmediate(n.pageMetrics)))
    }
    onResizeDebounced() {
      this.components.forEach((t => t.onResizeDebounced(n.pageMetrics)))
    }
    onBreakpointChange() {
      this.components.forEach((t => t.onBreakpointChange(n.pageMetrics)))
    }
    static componentIsSupported(t, e) {
      const i = t.IS_SUPPORTED;
      if (void 0 === i) return !0;
      if ("function" != typeof i) return console.error('BubbleGum::addComponent error in "' + e + '".IS_SUPPORTED - it should be a function which returns true/false'), !0;
      const s = t.IS_SUPPORTED();
      return void 0 === s ? (console.error('BubbleGum::addComponent error in "' + e + '".IS_SUPPORTED - it should be a function which returns true/false'), !0) : s
    }
  }
  l.EVENTS = {
    DOM_COMPONENTS_MOUNTED: "DOM_COMPONENTS_MOUNTED"
  }, t.exports = l
}, function(t, e, i) {
  "use strict";
  let s = !1,
    r = !1,
    a = [],
    n = -1;
  t.exports = {
    NUMBER_OF_FRAMES_TO_WAIT: 30,
    add: function(t) {
      if (r && t(), a.push(t), s) return;
      s = !0;
      let e = document.documentElement.scrollHeight,
        i = 0;
      const o = () => {
        let t = document.documentElement.scrollHeight;
        if (e !== t) i = 0;
        else if (i++, i >= this.NUMBER_OF_FRAMES_TO_WAIT) return void a.forEach((t => t()));
        e = t, n = requestAnimationFrame(o)
      };
      n = requestAnimationFrame(o)
    },
    reset() {
      cancelAnimationFrame(n), s = !1, r = !1, a = []
    }
  }
}, function(t, e, i) {
  "use strict";
  const s = i(6).EventEmitterMicro,
    r = i(2),
    a = i(11),
    n = i(33),
    o = i(42),
    h = i(34),
    l = i(94),
    p = i(95),
    c = i(96),
    u = {};
  "undefined" != typeof window && (u.update = i(12), u.cancelUpdate = i(97), u.external = i(47), u.draw = i(14));
  let d = null;
  class m extends s {
    constructor() {
      if (super(), d) throw "You cannot create multiple AnimSystems. You probably want to create multiple groups instead. You can have unlimited groups on a page";
      d = this, this.groups = [], this.scrollSystems = [], this.timeSystems = [], this.tweenGroup = null, this._forceUpdateRAFId = -1, this.initialized = !1, this.model = r, this.plugins = {
        keyframe: [],
        parser: []
      }, this.version = c.version, this._resolveReady = () => {}, this.ready = new Promise((t => this._resolveReady = t)), this.onScroll = this.onScroll.bind(this), this.onResizedDebounced = this.onResizedDebounced.bind(this), this.onResizeImmediate = this.onResizeImmediate.bind(this)
    }
    initialize() {
      return this.initialized || "undefined" == typeof window || (this.initialized = !0, this.timeSystems = [], this.scrollSystems = [], this.groups = [], this.setupEvents(), this.initializeResizeFilter(), this.initializeModel(), this.createDOMGroups(), this.createDOMKeyframes(), this.tweenGroup = new p(null, this), this.groups.unshift(this.tweenGroup), this._resolveReady()), this.ready
    }
    use(t, e) {
      t.install(this, e)
    }
    remove() {
      return this.initialized ? Promise.all(this.groups.map((t => t.remove()))).then((() => {
        this.groups = null, this.scrollSystems = null, this.timeSystems = null, window.clearTimeout(r.RESIZE_TIMEOUT), window.removeEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onResizeImmediate), this._events = {}, this.initialized = !1, this.ready = new Promise((t => this._resolveReady = t))
      })) : (this.ready = new Promise((t => this._resolveReady = t)), Promise.resolve())
    }
    destroy() {
      return this.remove()
    }
    createTimeGroup(t, e) {
      t instanceof HTMLElement || (t = (e = t || {}).el);
      let i = new l(t, this);
      return e && e.name && (i.name = e.name), this.groups.push(i), this.timeSystems.push(i), this.trigger(r.EVENTS.ON_GROUP_CREATED, i), i
    }
    createScrollGroup(t, e) {
      if (!t) throw "AnimSystem scroll based groups must supply an HTMLElement";
      let i = new h(t, this);
      return (e = e || {}).name && (i.name = e.name), e.getPosition && e.getMaxPosition && (i.getPosition = e.getPosition, i.createViewableRange = () => ({
        a: 0,
        d: e.getMaxPosition()
      })), i.getPosition = e.getPosition || i.getPosition, i.getPosition = e.getPosition || i.getPosition, this.groups.push(i), this.scrollSystems.push(i), this.trigger(r.EVENTS.ON_GROUP_CREATED, i), i
    }
    removeGroup(t) {
      return Promise.all(t.keyframeControllers.map((e => t.removeKeyframeController(e)))).then((() => {
        let e = this.groups.indexOf(t); - 1 !== e && this.groups.splice(e, 1), e = this.scrollSystems.indexOf(t), -1 !== e && this.scrollSystems.splice(e, 1), e = this.timeSystems.indexOf(t), -1 !== e && this.timeSystems.splice(e, 1), t.destroy()
      }))
    }
    createDOMGroups() {
      document.body.setAttribute("data-anim-scroll-group", "body"), document.querySelectorAll("[data-anim-scroll-group]").forEach((t => this.createScrollGroup(t))), document.querySelectorAll("[data-anim-time-group]").forEach((t => this.createTimeGroup(t))), this.trigger(r.EVENTS.ON_DOM_GROUPS_CREATED, this.groups)
    }
    createDOMKeyframes() {
      let t = [];
      ["data-anim-keyframe", a.DATA_ATTRIBUTE, n.DATA_ATTRIBUTE, o.DATA_ATTRIBUTE].forEach((function(e) {
        for (let i = 0; i < 12; i++) t.push(e + (0 === i ? "" : "-" + (i - 1)))
      }));
      for (let e = 0; e < t.length; e++) {
        let i = t[e],
          s = document.querySelectorAll("[" + i + "]");
        for (let t = 0; t < s.length; t++) {
          const e = s[t],
            r = JSON.parse(e.getAttribute(i));
          this.addKeyframe(e, r)
        }
      }
      u.update((() => {
        null !== this.groups && (this.groups.forEach((t => t.onKeyframesDirty({
          silent: !0
        }))), this.groups.forEach((t => t.trigger(r.EVENTS.ON_DOM_KEYFRAMES_CREATED, t))), this.trigger(r.EVENTS.ON_DOM_KEYFRAMES_CREATED, this), this.groups.forEach((t => {
          t.forceUpdate({
            waitForNextUpdate: !1,
            silent: !0
          }), t.reconcile()
        })), this.onScroll())
      }), !0)
    }
    initializeResizeFilter() {
      if (r.cssDimensionsTracker) return;
      const t = document.querySelector(".cssDimensionsTracker") || document.createElement("div");
      t.setAttribute("cssDimensionsTracker", "true"), t.style.position = "fixed", t.style.top = "0", t.style.width = "100%", t.style.height = "100vh", t.style.pointerEvents = "none", t.style.visibility = "hidden", t.style.zIndex = "-1", document.documentElement.appendChild(t), r.cssDimensionsTracker = t
    }
    initializeModel() {
      r.pageMetrics.windowHeight = r.cssDimensionsTracker.clientHeight, r.pageMetrics.windowWidth = r.cssDimensionsTracker.clientWidth, r.pageMetrics.scrollY = window.scrollY || window.pageYOffset, r.pageMetrics.scrollX = window.scrollX || window.pageXOffset, r.pageMetrics.breakpoint = r.getBreakpoint();
      let t = document.documentElement.getBoundingClientRect();
      r.pageMetrics.documentOffsetX = t.left + r.pageMetrics.scrollX, r.pageMetrics.documentOffsetY = t.top + r.pageMetrics.scrollY
    }
    setupEvents() {
      window.removeEventListener("scroll", this.onScroll), window.addEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onResizeImmediate), window.addEventListener("resize", this.onResizeImmediate)
    }
    onScroll() {
      r.pageMetrics.scrollY = window.scrollY || window.pageYOffset, r.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
      for (let t = 0, e = this.scrollSystems.length; t < e; t++) this.scrollSystems[t].updateTimeline();
      this.trigger(r.PageEvents.ON_SCROLL, r.pageMetrics)
    }
    onResizeImmediate() {
      let t = r.cssDimensionsTracker.clientWidth,
        e = r.cssDimensionsTracker.clientHeight;
      if (t === r.pageMetrics.windowWidth && e === r.pageMetrics.windowHeight) return;
      r.pageMetrics.windowWidth = t, r.pageMetrics.windowHeight = e, r.pageMetrics.scrollY = window.scrollY || window.pageYOffset, r.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
      let i = document.documentElement.getBoundingClientRect();
      r.pageMetrics.documentOffsetX = i.left + r.pageMetrics.scrollX, r.pageMetrics.documentOffsetY = i.top + r.pageMetrics.scrollY, window.clearTimeout(r.RESIZE_TIMEOUT), r.RESIZE_TIMEOUT = window.setTimeout(this.onResizedDebounced, 250), this.trigger(r.PageEvents.ON_RESIZE_IMMEDIATE, r.pageMetrics)
    }
    onResizedDebounced() {
      u.update((() => {
        let t = r.pageMetrics.breakpoint,
          e = r.getBreakpoint();
        if (e !== t) {
          r.pageMetrics.previousBreakpoint = t, r.pageMetrics.breakpoint = e;
          for (let t = 0, e = this.groups.length; t < e; t++) this.groups[t]._onBreakpointChange();
          this.trigger(r.PageEvents.ON_BREAKPOINT_CHANGE, r.pageMetrics)
        }
        for (let t = 0, e = this.groups.length; t < e; t++) this.groups[t].forceUpdate({
          waitForNextUpdate: !1
        });
        this.trigger(r.PageEvents.ON_RESIZE_DEBOUNCED, r.pageMetrics)
      }), !0)
    }
    forceUpdate({
      waitForNextUpdate: t = !0,
      silent: e = !1
    } = {}) {
      -1 !== this._forceUpdateRAFId && u.cancelUpdate(this._forceUpdateRAFId);
      let i = () => {
        for (let t = 0, i = this.groups.length; t < i; t++) {
          this.groups[t].forceUpdate({
            waitForNextUpdate: !1,
            silent: e
          })
        }
        return -1
      };
      this._forceUpdateRAFId = t ? u.update(i, !0) : i()
    }
    addKeyframe(t, e) {
      let i = this.getGroupForTarget(t);
      return i = i || this.getGroupForTarget(document.body), i.addKeyframe(t, e)
    }
    addEvent(t, e) {
      let i = this.getGroupForTarget(t);
      return i = i || this.getGroupForTarget(document.body), i.addEvent(t, e)
    }
    getTimeGroupForTarget(t) {
      return this._getGroupForTarget(t, (t => t instanceof l))
    }
    getScrollGroupForTarget(t) {
      return this._getGroupForTarget(t, (t => !(t instanceof l)))
    }
    getGroupForTarget(t) {
      return this._getGroupForTarget(t, (() => !0))
    }
    getGroupByName(t) {
      return this.groups.find((e => e.name === t))
    }
    _getGroupForTarget(t, e) {
      if (t._animInfo && t._animInfo.group && e(t._animInfo.group)) return t._animInfo.group;
      let i = t;
      for (; i;) {
        if (i._animInfo && i._animInfo.isGroup && e(i._animInfo.group)) return i._animInfo.group;
        i = i.parentElement
      }
    }
    getControllerForTarget(t) {
      return t._animInfo && t._animInfo.controller ? t._animInfo.controller : null
    }
    addTween(t, e) {
      return this.tweenGroup.addKeyframe(t, e)
    }
  }
  t.exports = "undefined" == typeof window ? new m : window.AC.SharedInstance.share("AnimSystem", c.major, m), t.exports.default = t.exports
}, function(t, e, i) {
  "use strict";
  t.exports = new class {
    constructor() {
      this.linear = function(t) {
        return t
      }, this.easeInQuad = function(t) {
        return t * t
      }, this.easeOutQuad = function(t) {
        return t * (2 - t)
      }, this.easeInOutQuad = function(t) {
        return t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1
      }, this.easeInSin = function(t) {
        return 1 + Math.sin(Math.PI / 2 * t - Math.PI / 2)
      }, this.easeOutSin = function(t) {
        return Math.sin(Math.PI / 2 * t)
      }, this.easeInOutSin = function(t) {
        return (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2
      }, this.easeInElastic = function(t) {
        return 0 === t ? t : (.04 - .04 / t) * Math.sin(25 * t) + 1
      }, this.easeOutElastic = function(t) {
        return .04 * t / --t * Math.sin(25 * t)
      }, this.easeInOutElastic = function(t) {
        return (t -= .5) < 0 ? (.02 + .01 / t) * Math.sin(50 * t) : (.02 - .01 / t) * Math.sin(50 * t) + 1
      }, this.easeOutBack = function(t) {
        return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
      }, this.easeInCubic = function(t) {
        return t * t * t
      }, this.easeOutCubic = function(t) {
        return --t * t * t + 1
      }, this.easeInOutCubic = function(t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
      }, this.easeInQuart = function(t) {
        return t * t * t * t
      }, this.easeOutQuart = function(t) {
        return 1 - --t * t * t * t
      }, this.easeInOutQuart = function(t) {
        return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
      }, this.easeInQuint = function(t) {
        return t * t * t * t * t
      }, this.easeOutQuint = function(t) {
        return 1 + --t * t * t * t * t
      }, this.easeInOutQuint = function(t) {
        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
      }
    }
  }
}, function(t, e, i) {
  "use strict";
  const s = 1e-5,
    r = Math.abs;
  class a {
    constructor(t, e, i, s) {
      this.cp = new Float32Array(6), this.cp[0] = 3 * t, this.cp[1] = 3 * (i - t) - this.cp[0], this.cp[2] = 1 - this.cp[0] - this.cp[1], this.cp[3] = 3 * e, this.cp[4] = 3 * (s - e) - this.cp[3], this.cp[5] = 1 - this.cp[3] - this.cp[4]
    }
    sampleCurveX(t) {
      return ((this.cp[2] * t + this.cp[1]) * t + this.cp[0]) * t
    }
    sampleCurveY(t) {
      return ((this.cp[5] * t + this.cp[4]) * t + this.cp[3]) * t
    }
    sampleCurveDerivativeX(t) {
      return (3 * this.cp[2] * t + 2 * this.cp[1]) * t + this.cp[0]
    }
    solveCurveX(t) {
      var e, i, a, n, o, h;
      for (a = t, h = 0; h < 5; h++) {
        if (n = this.sampleCurveX(a) - t, r(n) < s) return a;
        if (o = this.sampleCurveDerivativeX(a), r(o) < s) break;
        a -= n / o
      }
      if ((a = t) < (e = 0)) return e;
      if (a > (i = 1)) return i;
      for (; e < i;) {
        if (n = this.sampleCurveX(a), r(n - t) < s) return a;
        t > n ? e = a : i = a, a = .5 * (i - e) + e
      }
      return a
    }
    solve(t) {
      return this.sampleCurveY(this.solveCurveX(t))
    }
  }
  const n = /\d*\.?\d+/g;
  a.fromCSSString = function(t) {
    let e = t.match(n);
    if (4 !== e.length) throw `UnitBezier could not convert ${t} to cubic-bezier`;
    let i = e.map(Number),
      s = new a(i[0], i[1], i[2], i[3]);
    return s.solve.bind(s)
  }, t.exports = a
}, function(t, e, i) {
  "use strict";
  const {
    map: s
  } = i(10), r = {};
  class a {
    constructor(t, e, i, s) {
      this.mass = t, this.stiffness = e, this.damping = i, this.initialVelocity = s, this.m_w0 = Math.sqrt(this.stiffness / this.mass), this.m_zeta = this.damping / (2 * Math.sqrt(this.stiffness * this.mass)), this.m_zeta < 1 ? (this.m_wd = this.m_w0 * Math.sqrt(1 - this.m_zeta * this.m_zeta), this.m_A = 1, this.m_B = (this.m_zeta * this.m_w0 - this.initialVelocity) / this.m_wd) : (this.m_wd = 0, this.m_A = 1, this.m_B = -this.initialVelocity + this.m_w0)
    }
    solve(t) {
      return 1 - (t = this.m_zeta < 1 ? Math.exp(-t * this.m_zeta * this.m_w0) * (this.m_A * Math.cos(this.m_wd * t) + this.m_B * Math.sin(this.m_wd * t)) : (this.m_A + this.m_B * t) * Math.exp(-t * this.m_w0))
    }
  }
  const n = /\d*\.?\d+/g;
  a.fromCSSString = function(t) {
    let e = t.match(n);
    if (4 !== e.length) throw `SpringEasing could not convert ${cssString} to spring params`;
    let i = e.map(Number),
      o = new a(...i);
    const h = o.solve.bind(o);
    let l = 0;
    let p = function() {
      if (r[t]) return r[t];
      const e = 1 / 6;
      let i, s = 0;
      for (;;) {
        l += e;
        if (1 === h(l)) {
          if (s++, s >= 16) {
            i = l * e;
            break
          }
        } else s = 0
      }
      return r[t] = i, r[t]
    }();
    return function(t) {
      return 0 === t || 1 === t ? t : h(s(t, 0, 1, 0, p))
    }
  }, t.exports = a
}, function(t, e, i) {
  "use strict";
  t.exports = function(t, e) {
    if ("string" != typeof t) return t;
    try {
      return (e || document).querySelector(t) || document.querySelector(t)
    } catch (t) {
      return !1
    }
  }
}, function(t, e, i) {
  "use strict";
  t.exports = class {
    constructor() {
      this.local = 0, this.localUnclamped = 0, this.lastPosition = 0
    }
  }
}, function(t, e, i) {
  "use strict";
  t.exports = class {
    constructor(t, e) {
      this.a = t.top - e, this.a < 0 && (this.a = t.top), this.b = t.top, this.d = t.bottom, this.c = Math.max(this.d - e, this.b)
    }
  }
}, function(t, e, i) {
  "use strict";
  const s = i(78),
    r = new(i(44));
  class a {
    constructor(t) {
      this.group = t, this.data = {
        target: null,
        anchors: null,
        metrics: this.group.metrics
      }
    }
    parseArray(t, e) {
      return [this.parseExpression(t, e[0]), this.parseExpression(t, e[1])]
    }
    parseExpression(t, e) {
      if (!e) return null;
      if ("number" == typeof e) return e;
      if ("string" != typeof e) throw `Expression must be a string, received ${typeof e}: ${e}`;
      return this.data.target = t.controller.element, this.data.anchors = t.anchors, this.data.keyframe = t.keyframe, this.group.anim.plugins.parser.reduce(((i, s) => i || s.parseExpression.call(this, t, e)), null) || a._parse(e, this.data)
    }
    parseTimeValue(t, e) {
      if ("number" == typeof e) return e;
      let i = this.group.expressionParser.parseExpression(t, e);
      return this.group.convertScrollPositionToTValue(i)
    }
    destroy() {
      this.group = null
    }
    static parse(t, e) {
      return (e = e || {}) && (r.clear(), e.target && r.add(e.target), e.anchors && e.anchors.forEach((t => r.add(t)))), e.metrics = r, a._parse(t, e)
    }
    static _parse(t, e) {
      return s.Parse(t).execute(e)
    }
  }
  a.programs = s.programs, "undefined" != typeof window && (window.ExpressionParser = a), t.exports = a
}, function(t, e, i) {
  "use strict";
  const s = i(2),
    r = i(10),
    a = {},
    n = {
      smoothstep: (t, e, i) => (i = n.clamp((i - t) / (e - t), 0, 1)) * i * (3 - 2 * i),
      deg: t => 180 * t / Math.PI,
      rad: t => t * Math.PI / 180,
      random: (t, e) => Math.random() * (e - t) + t,
      atan: Math.atan2
    };
  Object.getOwnPropertyNames(Math).forEach((t => n[t] ? null : n[t.toLowerCase()] = Math[t])), Object.getOwnPropertyNames(r).forEach((t => n[t] ? null : n[t.toLowerCase()] = r[t]));
  let o = null;
  const h = "a",
    l = "ALPHA",
    p = "(",
    c = ")",
    u = "PLUS",
    d = "MINUS",
    m = "MUL",
    f = "DIV",
    y = "INTEGER_CONST",
    g = "FLOAT_CONST",
    v = ",",
    _ = "EOF",
    b = {
      NUMBERS: /\d|\d\.\d/,
      DIGIT: /\d/,
      OPERATOR: /[-+*/]/,
      PAREN: /[()]/,
      WHITE_SPACE: /\s/,
      ALPHA: /[a-zA-Z]|%/,
      ALPHANUMERIC: /[a-zA-Z0-9]/,
      OBJECT_UNIT: /^(t|l|b|r|%w|%h|%|h|w)$/,
      GLOBAL_METRICS_UNIT: /^(px|vh|vw)$/,
      ANY_UNIT: /^(t|l|b|r|%w|%h|%|h|w|px|vh|vw)$/,
      MATH_FUNCTION: new RegExp(`\\b(${Object.keys(n).join("|")})\\b`, "i")
    },
    E = function(t, e, i, s = "") {
      let r = e.slice(Math.max(i, 0), Math.min(e.length, i + 3)),
        a = new Error(`Expression Error. ${t} in expression "${e}", near "${r}"`);
      throw console.error(a.message, o ? o.keyframe || o.target : ""), a
    },
    P = {
      round: 1,
      clamp: 3,
      lerp: 3,
      random: 2,
      atan: 2,
      floor: 1,
      ceil: 1,
      abs: 1,
      cos: 1,
      sin: 1,
      smoothstep: 3,
      rad: 1,
      deg: 1,
      pow: 2,
      calc: 1
    };
  class A {
    constructor(t, e) {
      this.type = t, this.value = e
    }
  }
  A.ONE = new A("100", 100), A.EOF = new A(_, null);
  class x {
    constructor(t) {
      this.type = t
    }
  }
  class S extends x {
    constructor(t, e) {
      super("UnaryOp"), this.token = this.op = t, this.expr = e
    }
  }
  class T extends x {
    constructor(t, e, i) {
      super("BinOp"), this.left = t, this.op = e, this.right = i
    }
  }
  class C extends x {
    constructor(t, e) {
      if (super("MathOp"), this.op = t, this.list = e, P[t.value] && e.length !== P[t.value]) throw new Error(`Incorrect number of arguments for '${t.value}'. Received ${e.length}, expected ${P[t.value]}`)
    }
  }
  class w extends x {
    constructor(t) {
      super("Num"), this.token = t, this.value = t.value
    }
  }
  class k extends x {
    constructor(t, e, i) {
      super("RefValue"), this.num = t, this.ref = e, this.unit = i
    }
  }
  class M extends x {
    constructor(t, e) {
      super("CSSValue"), this.ref = t, this.propertyName = e
    }
  }
  class D extends x {
    constructor(t, e) {
      super("PropValue"), this.ref = t, this.propertyName = e
    }
  }
  class I {
    constructor(t) {
      let e;
      for (this.text = t, this.pos = 0, this.char = this.text[this.pos], this.tokens = [];
        (e = this.getNextToken()) && e !== A.EOF;) this.tokens.push(e);
      this.tokens.push(e)
    }
    advance() {
      this.char = this.text[++this.pos]
    }
    skipWhiteSpace() {
      for (; null != this.char && b.WHITE_SPACE.test(this.char);) this.advance()
    }
    name() {
      let t = "";
      for (; null != this.char && b.ALPHA.test(this.char);) t += this.char, this.advance();
      return new A(l, t)
    }
    number() {
      let t = "";
      for ("." === this.char && (t += this.char, this.advance()); null != this.char && b.DIGIT.test(this.char);) t += this.char, this.advance();
      if (null != this.char && "." === this.char)
        for (t.includes(".") && E("Number appears to contain 2 decimal points", this.text, this.pos), t += this.char, this.advance(); null != this.char && b.DIGIT.test(this.char);) t += this.char, this.advance();
      return "." === t && E("Attempted to parse a number, but found only a decimal point", this.text, this.pos), t.includes(".") ? new A(g, parseFloat(t)) : new A(y, parseInt(t))
    }
    getNextToken() {
      for (; null != this.char;)
        if (b.WHITE_SPACE.test(this.char)) this.skipWhiteSpace();
        else {
          if ("." === this.char || b.DIGIT.test(this.char)) return this.number();
          if ("," === this.char) return this.advance(), new A(v, ",");
          if (b.OPERATOR.test(this.char)) {
            let t = "",
              e = this.char;
            switch (e) {
              case "+":
                t = u;
                break;
              case "-":
                t = d;
                break;
              case "*":
                t = m;
                break;
              case "/":
                t = f
            }
            return this.advance(), new A(t, e)
          }
          if (b.PAREN.test(this.char)) {
            let t = "",
              e = this.char;
            switch (e) {
              case "(":
                t = p;
                break;
              case ")":
                t = c
            }
            return this.advance(), new A(t, e)
          }
          if (b.ALPHA.test(this.char)) return this.name();
          E(`Unexpected character "${this.char}"`, this.text, this.pos)
        } return A.EOF
    }
  }
  class F {
    constructor(t) {
      this.lexer = t, this.pos = 0
    }
    get currentToken() {
      return this.lexer.tokens[this.pos]
    }
    error(t, e = "") {
      E(t, e, this.lexer.text, this.pos)
    }
    consume(t) {
      let e = this.currentToken;
      return e.type === t ? this.pos += 1 : this.error(`Invalid token ${this.currentToken.value}, expected ${t}`), e
    }
    consumeList(t) {
      t.includes(this.currentToken) ? this.pos += 1 : this.error(`Invalid token ${this.currentToken.value}, expected ${tokenType}`)
    }
    expr() {
      let t = this.term();
      for (; this.currentToken.type === u || this.currentToken.type === d;) {
        const e = this.currentToken;
        switch (e.value) {
          case "+":
            this.consume(u);
            break;
          case "-":
            this.consume(d)
        }
        t = new T(t, e, this.term())
      }
      return t
    }
    term() {
      let t = this.factor();
      for (; this.currentToken.type === m || this.currentToken.type === f;) {
        const e = this.currentToken;
        switch (e.value) {
          case "*":
            this.consume(m);
            break;
          case "/":
            this.consume(f)
        }
        t = new T(t, e, this.factor())
      }
      return t
    }
    factor() {
      if (this.currentToken.type === u) return new S(this.consume(u), this.factor());
      if (this.currentToken.type === d) return new S(this.consume(d), this.factor());
      if (this.currentToken.type === y || this.currentToken.type === g) {
        let t = new w(this.currentToken);
        if (this.pos += 1, b.OPERATOR.test(this.currentToken.value) || this.currentToken.type === c || this.currentToken.type === v || this.currentToken.type === _) return t;
        if (this.currentToken.type === l && this.currentToken.value === h) return this.consume(l), new k(t, this.anchorIndex(), this.unit(b.ANY_UNIT));
        if (this.currentToken.type === l) return "%a" === this.currentToken.value && this.error("%a is invalid, try removing the %"), new k(t, null, this.unit());
        this.error("Expected a scaling unit type", "Such as 'h' / 'w'")
      } else {
        if (b.OBJECT_UNIT.test(this.currentToken.value)) return new k(new w(A.ONE), null, this.unit());
        if (this.currentToken.value === h) {
          this.consume(l);
          const t = this.anchorIndex();
          if (b.OBJECT_UNIT.test(this.currentToken.value)) return new k(new w(A.ONE), t, this.unit())
        } else if (this.currentToken.type === l) {
          if ("calc" === this.currentToken.value) return this.consume(l), this.expr();
          if ("css" === this.currentToken.value || "var" === this.currentToken.value || "prop" === this.currentToken.value) {
            const t = "prop" !== this.currentToken.value ? M : D;
            this.consume(l), this.consume(p);
            const e = this.propertyName();
            let i = null;
            return this.currentToken.type === v && (this.consume(v), this.consume(l), i = this.anchorIndex()), this.consume(c), new t(i, e)
          }
          if (b.MATH_FUNCTION.test(this.currentToken.value)) {
            const t = this.currentToken.value.toLowerCase();
            if ("number" == typeof n[t]) return this.consume(l), new w(new A(l, n[t]));
            const e = A[t] || new A(t, t),
              i = [];
            this.consume(l), this.consume(p);
            let s = null;
            do {
              this.currentToken.value === v && this.consume(v), s = this.expr(), i.push(s)
            } while (this.currentToken.value === v);
            return this.consume(c), new C(e, i)
          }
        } else if (this.currentToken.type === p) {
          this.consume(p);
          let t = this.expr();
          return this.consume(c), t
        }
      }
      this.error(`Unexpected token ${this.currentToken.value}`)
    }
    propertyName() {
      let t = "";
      for (; this.currentToken.type === l || this.currentToken.type === d;) t += this.currentToken.value, this.pos += 1;
      return t
    }
    unit(t = b.ANY_UNIT) {
      const e = this.currentToken;
      if (e.type === l && t.test(e.value)) return this.consume(l), new A(l, e.value = e.value.replace(/%(h|w)/, "$1").replace("%", "h"));
      this.error("Expected unit type")
    }
    anchorIndex() {
      const t = this.currentToken;
      if (t.type === y) return this.consume(y), new w(t);
      this.error("Invalid anchor reference", ". Should be something like a0, a1, a2")
    }
    parse() {
      const t = this.expr();
      return this.currentToken !== A.EOF && this.error(`Unexpected token ${this.currentToken.value}`), t
    }
  }
  class R {
    constructor(t) {
      this.parser = t, this.root = t.parse()
    }
    visit(t) {
      let e = this[t.type];
      if (!e) throw new Error(`No visit method named, ${e}`);
      return e.call(this, t)
    }
    BinOp(t) {
      switch (t.op.type) {
        case u:
          return this.visit(t.left) + this.visit(t.right);
        case d:
          return this.visit(t.left) - this.visit(t.right);
        case m:
          return this.visit(t.left) * this.visit(t.right);
        case f:
          return this.visit(t.left) / this.visit(t.right)
      }
    }
    RefValue(t) {
      let e = this.unwrapReference(t),
        i = t.unit.value,
        r = t.num.value;
      const a = o.metrics.get(e);
      switch (i) {
        case "h":
          return .01 * r * a.height;
        case "t":
          return .01 * r * a.top;
        case "vh":
          return .01 * r * s.pageMetrics.windowHeight;
        case "vw":
          return .01 * r * s.pageMetrics.windowWidth;
        case "px":
          return r;
        case "w":
          return .01 * r * a.width;
        case "b":
          return .01 * r * a.bottom;
        case "l":
          return .01 * r * a.left;
        case "r":
          return .01 * r * a.right
      }
    }
    PropValue(t) {
      return (null === t.ref ? o.target : o.anchors[t.ref.value])[t.propertyName]
    }
    CSSValue(t) {
      let e = this.unwrapReference(t);
      const i = getComputedStyle(e).getPropertyValue(t.propertyName);
      return "" === i ? 0 : R.Parse(i).execute(o)
    }
    Num(t) {
      return t.value
    }
    UnaryOp(t) {
      return t.op.type === u ? +this.visit(t.expr) : t.op.type === d ? -this.visit(t.expr) : void 0
    }
    MathOp(t) {
      let e = t.list.map((t => this.visit(t)));
      return n[t.op.value].apply(null, e)
    }
    unwrapReference(t) {
      return null === t.ref ? o.target : (t.ref.value >= o.anchors.length && console.error(`Not enough anchors supplied for expression ${this.parser.lexer.text}`, o.target), o.anchors[t.ref.value])
    }
    execute(t) {
      return o = t, this.visit(this.root)
    }
    static Parse(t) {
      return a[t] || (a[t] = new R(new F(new I(t))))
    }
  }
  R.programs = a, t.exports = R
}, function(t, e, i) {
  "use strict";
  const s = i(2),
    r = i(9),
    a = (i(31), i(80)),
    n = i(43),
    o = (i(11), i(33)),
    h = i(81),
    l = i(32),
    p = i(40),
    c = i(6).EventEmitterMicro,
    u = i(82),
    d = {};
  "undefined" != typeof window && (d.update = i(12), d.external = i(47), d.draw = i(14));
  const {
    transformAttributes: m,
    cssAttributes: f,
    domAttributes: y
  } = i(41), g = Math.PI / 180, v = {
    create: i(89),
    rotateX: i(90),
    rotateY: i(91),
    rotateZ: i(92),
    scale: i(93)
  };
  t.exports = class extends c {
    constructor(t, e) {
      super(), this._events.draw = [], this.uuid = p(), this.group = t, this.element = e, this._ownerIsElement = this.element instanceof Element, this._ownerIsElement ? this.friendlyName = this.element.tagName + "." + Array.from(this.element.classList).join(".") : this.friendlyName = this.element.friendlyName || this.uuid, this.element._animInfo = this.element._animInfo || new n(t, this), this.element._animInfo.controller = this, this.element._animInfo.group = this.group, this.element._animInfo.controllers.push(this), this.tweenProps = this.element._animInfo.tweenProps, this.eventObject = new a(this), this.needsStyleUpdate = !1, this.needsClassUpdate = !1, this.elementMetrics = this.group.metrics.add(this.element), this.attributes = [], this.cssAttributes = [], this.domAttributes = [], this.keyframes = {}, this._allKeyframes = [], this._activeKeyframes = [], this.keyframesRequiringDispatch = [], this.updateCachedValuesFromElement(), this.boundsMin = 0, this.boundsMax = 0, this.mat2d = new Float32Array(6), this.mat4 = v.create(), this.needsWrite = !0, this.onDOMWriteImp = this._ownerIsElement ? this.onDOMWriteForElement : this.onDOMWriteForObject
    }
    destroy() {
      if (this.element._animInfo) {
        this.element._animInfo.controller === this && (this.element._animInfo.controller = null);
        let t = this.element._animInfo.controllers.indexOf(this);
        if (-1 !== t && this.element._animInfo.controllers.splice(t, 1), 0 === this.element._animInfo.controllers.length) this.element._animInfo = null;
        else {
          let t = this.element._animInfo.controllers.find((t => t.group !== t.group.anim.tweenGroup));
          t && (this.element._animInfo.controller = t, this.element._animInfo.group = t.group)
        }
      }
      this.eventObject.controller = null, this.eventObject.element = null, this.eventObject.keyframe = null, this.eventObject.tweenProps = null, this.eventObject = null, this.elementMetrics = null, this.group = null, this.keyframesRequiringDispatch = null;
      for (let t = 0; t < this._allKeyframes.length; t++) this._allKeyframes[t].destroy();
      this._allKeyframes = null, this._activeKeyframes = null, this.attributes = null, this.keyframes = null, this.element = null, this.tweenProps = null, this.destroyed = !0, super.destroy()
    }
    remove() {
      return this.group.removeKeyframeController(this)
    }
    updateCachedValuesFromElement() {
      if (!this._ownerIsElement) return;
      const t = this.getTargetComputedStyle(!0);
      let e = new DOMMatrix(t.getPropertyValue("transform")),
        i = u(e),
        a = s.KeyframeDefaults.epsilon,
        n = !1;
      ["x", "y", "z"].forEach(((t, e) => {
        this.tweenProps[t] = new r(i.translation[e], a, n, t)
      })), this.tweenProps.rotation = new r(i.rotation[2], a, n, "rotation"), ["rotationX", "rotationY", "rotationZ"].forEach(((t, e) => {
        this.tweenProps[t] = new r(i.rotation[e], a, n, t)
      })), this.tweenProps.scale = new r(i.scale[0], a, n, "scale"), ["scaleX", "scaleY", "scaleZ"].forEach(((t, e) => {
        this.tweenProps[t] = new r(i.scale[e], a, n, t)
      })), y.forEach((t => {
        let e = isNaN(this.element[t]) ? 0 : this.element[t];
        this.tweenProps[t] = new r(e, a, n, t, !1)
      }))
    }
    addKeyframe(t) {
      let e = h(t);
      if (!e) throw new Error("AnimSystem Cannot create keyframe for from options `" + t + "`");
      let i = new e(this, t);
      return i.parseOptions(t), i.id = this._allKeyframes.length, this._allKeyframes.push(i), i
    }
    needsUpdate() {
      for (let t = 0, e = this.attributes.length; t < e; t++) {
        let e = this.attributes[t];
        if (this.tweenProps[e].needsUpdate()) return !0
      }
      return !1
    }
    updateLocalProgress(t) {
      for (let e = 0, i = this.attributes.length; e < i; e++) {
        let i = this.attributes[e],
          s = this.keyframes[this.attributes[e]];
        if (1 === s.length) {
          s[0].updateLocalProgress(t);
          continue
        }
        let r = this.getNearestKeyframeForAttribute(i, t);
        r && r.updateLocalProgress(t)
      }
    }
    reconcile() {
      for (let t = 0, e = this.attributes.length; t < e; t++) {
        let e = this.attributes[t],
          i = this.getNearestKeyframeForAttribute(e, this.group.position.local);
        i.updateLocalProgress(this.group.position.local), i.snapAtCreation && i.reconcile(e)
      }
    }
    determineActiveKeyframes(t) {
      t = t || l(Array.from(document.documentElement.classList));
      let e = this._activeKeyframes,
        i = this.attributes,
        s = {};
      this._activeKeyframes = [], this.attributes = [], this.keyframes = {};
      for (let e = 0; e < this._allKeyframes.length; e++) {
        let i = this._allKeyframes[e];
        if (i.markedForRemoval || i.hidden || !i.setEnabled(t))
          for (let t in i.animValues) this.tweenProps[t].isActive = i.preserveState, i.preserveState && (s[t] = !0);
        else {
          this._activeKeyframes.push(i);
          for (let t in i.animValues) this.keyframes[t] = this.keyframes[t] || [], this.keyframes[t].push(i), -1 === this.attributes.indexOf(t) && (s[t] = !0, this.attributes.push(t), this.tweenProps[t].isActive = !0)
        }
      }
      this.attributes.forEach((t => this.tweenProps[t].isActive = !0)), this.cssAttributes = this.attributes.filter((t => f.includes(t) || t.startsWith("--"))).map((t => this.tweenProps[t])), this.domAttributes = this.attributes.filter((t => y.includes(t))).map((t => this.tweenProps[t]));
      let r = e.filter((t => -1 === this._activeKeyframes.indexOf(t)));
      if (0 === r.length) return;
      let a = i.filter((t => -1 === this.attributes.indexOf(t) && !s.hasOwnProperty(t)));
      if (0 !== a.length)
        if (this.needsWrite = !0, this._ownerIsElement) d.external((() => {
          let t = a.some((t => m.includes(t))),
            e = t && Object.keys(s).some((t => m.includes(t)));
          t && !e && this.element.style.removeProperty("transform");
          for (let t = 0, e = a.length; t < e; ++t) {
            let e = a[t],
              i = this.tweenProps[e],
              s = i.isActive ? i.target : i.initialValue;
            i.current = i.target = s, !i.isActive && f.includes(e) && (this.element.style[e] = null)
          }
          for (let t = 0, e = r.length; t < e; ++t) {
            let e = r[t];
            e instanceof o && !e.preserveState && e._unapply()
          }
        }), !0);
        else
          for (let t = 0, e = a.length; t < e; ++t) {
            let e = this.tweenProps[a[t]];
            e.current = e.target, e.isActive = !1
          }
    }
    onDOMRead(t) {
      for (let e = 0, i = this.attributes.length; e < i; e++) {
        let i = this.attributes[e],
          s = this.getNearestKeyframeForAttribute(i, t);
        s && s.onDOMRead(i) && (this.needsWrite = !0)
      }
    }
    onDOMWrite() {
      (this.needsWrite || this.needsClassUpdate || this.needsStyleUpdate) && (this.needsWrite = !1, this.onDOMWriteImp(), this.handleEventDispatch())
    }
    onDOMWriteForObject() {
      for (let t = 0, e = this.attributes.length; t < e; t++) {
        let e = this.attributes[t];
        this.element[e] = this.tweenProps[e].current
      }
    }
    onDOMWriteForElement(t = this.element.style) {
      this.handleStyleTransform(t);
      for (let e = 0, i = this.cssAttributes.length; e < i; e++) this.cssAttributes[e].set(t);
      for (let t = 0, e = this.domAttributes.length; t < e; t++) this.domAttributes[t].set(this.element);
      if (this.needsStyleUpdate) {
        for (let t in this.tweenProps.targetStyles) null !== this.tweenProps.targetStyles[t] && (this.element.style[t] = this.tweenProps.targetStyles[t]), this.tweenProps.targetStyles[t] = null;
        this.needsStyleUpdate = !1
      }
      this.needsClassUpdate && (this.tweenProps.targetClasses.add.length > 0 && this.element.classList.add.apply(this.element.classList, this.tweenProps.targetClasses.add), this.tweenProps.targetClasses.remove.length > 0 && this.element.classList.remove.apply(this.element.classList, this.tweenProps.targetClasses.remove), this.tweenProps.targetClasses.add.length = 0, this.tweenProps.targetClasses.remove.length = 0, this.needsClassUpdate = !1)
    }
    handleStyleTransform(t = this.element.style) {
      let e = this.tweenProps;
      if (e.z.isActive || e.rotationX.isActive || e.rotationY.isActive) {
        const i = this.mat4;
        i[0] = 1, i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = 1, i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[10] = 1, i[11] = 0, i[12] = 0, i[13] = 0, i[14] = 0, i[15] = 1;
        const s = e.x.current,
          r = e.y.current,
          a = e.z.current;
        if (i[12] = i[0] * s + i[4] * r + i[8] * a + i[12], i[13] = i[1] * s + i[5] * r + i[9] * a + i[13], i[14] = i[2] * s + i[6] * r + i[10] * a + i[14], i[15] = i[3] * s + i[7] * r + i[11] * a + i[15], 0 !== e.rotation.current || 0 !== e.rotationZ.current) {
          const t = (e.rotation.current || e.rotationZ.current) * g;
          v.rotateZ(i, i, t)
        }
        if (0 !== e.rotationX.current) {
          const t = e.rotationX.current * g;
          v.rotateX(i, i, t)
        }
        if (0 !== e.rotationY.current) {
          const t = e.rotationY.current * g;
          v.rotateY(i, i, t)
        }
        1 === e.scale.current && 1 === e.scaleX.current && 1 === e.scaleY.current || v.scale(i, i, [e.scale.current, e.scale.current, 1]), t.transform = "matrix3d(" + i[0] + "," + i[1] + "," + i[2] + "," + i[3] + "," + i[4] + "," + i[5] + "," + i[6] + "," + i[7] + "," + i[8] + "," + i[9] + "," + i[10] + "," + i[11] + "," + i[12] + "," + i[13] + "," + i[14] + "," + i[15] + ")"
      } else if (e.x.isActive || e.y.isActive || e.rotation.isActive || e.rotationZ.isActive || e.scale.isActive || e.scaleX.isActive || e.scaleY.isActive) {
        const i = this.mat2d;
        i[0] = 1, i[1] = 0, i[2] = 0, i[3] = 1, i[4] = 0, i[5] = 0;
        const s = e.x.current,
          r = e.y.current,
          a = i[0],
          n = i[1],
          o = i[2],
          h = i[3],
          l = i[4],
          p = i[5];
        if (i[0] = a, i[1] = n, i[2] = o, i[3] = h, i[4] = a * s + o * r + l, i[5] = n * s + h * r + p, 0 !== e.rotation.current || 0 !== e.rotationZ.current) {
          const t = (e.rotation.current || e.rotationZ.current) * g,
            s = i[0],
            r = i[1],
            a = i[2],
            n = i[3],
            o = i[4],
            h = i[5],
            l = Math.sin(t),
            p = Math.cos(t);
          i[0] = s * p + a * l, i[1] = r * p + n * l, i[2] = s * -l + a * p, i[3] = r * -l + n * p, i[4] = o, i[5] = h
        }
        e.scaleX.isActive || e.scaleY.isActive ? (i[0] = i[0] * e.scaleX.current, i[1] = i[1] * e.scaleX.current, i[2] = i[2] * e.scaleY.current, i[3] = i[3] * e.scaleY.current) : (i[0] = i[0] * e.scale.current, i[1] = i[1] * e.scale.current, i[2] = i[2] * e.scale.current, i[3] = i[3] * e.scale.current), t.transform = "matrix(" + i[0] + ", " + i[1] + ", " + i[2] + ", " + i[3] + ", " + i[4] + ", " + i[5] + ")"
      }
    }
    handleEventDispatch() {
      if (0 !== this.keyframesRequiringDispatch.length) {
        for (let t = 0, e = this.keyframesRequiringDispatch.length; t < e; t++) {
          let e = this.keyframesRequiringDispatch[t];
          e.needsEventDispatch = !1, this.eventObject.keyframe = e, this.eventObject.pageMetrics = s.pageMetrics, this.eventObject.event = e.event, this.trigger(e.event, this.eventObject)
        }
        this.keyframesRequiringDispatch.length = 0
      }
      if (0 !== this._events.draw.length) {
        this.eventObject.keyframe = null, this.eventObject.event = "draw";
        for (let t = this._events.draw.length - 1; t >= 0; t--) this._events.draw[t](this.eventObject)
      }
    }
    updateAnimationConstraints() {
      for (let t = 0, e = this._activeKeyframes.length; t < e; t++) this._activeKeyframes[t].evaluateConstraints();
      this.attributes.forEach((t => {
        1 !== this.keyframes[t].length && this.keyframes[t].sort(s.KeyframeComparison)
      })), this.updateDeferredPropertyValues()
    }
    refreshMetrics() {
      let t = new Set([this.element]);
      this._allKeyframes.forEach((e => e.anchors.forEach((e => t.add(e))))), this.group.metrics.refreshCollection(t), this.group.keyframesDirty = !0
    }
    getTargetComputedStyle(t = !1) {
      return this._ownerIsElement ? ((t || void 0 === this.group.computedStyleCache[this.uuid]) && (this.group.computedStyleCache[this.uuid] = getComputedStyle(this.element)), this.group.computedStyleCache[this.uuid]) : null
    }
    updateDeferredPropertyValues() {
      for (let t = 0, e = this.attributes.length; t < e; t++) {
        let e = this.attributes[t],
          i = this.keyframes[e];
        if (!(i[0].keyframeType > s.KeyframeTypes.InterpolationForward))
          for (let t = 0, s = i.length; t < s; t++) {
            let r = i[t];
            null === r.jsonProps[e][0] && (0 === t ? r.jsonProps[e][0] = r.animValues[e][0] = this.tweenProps[e].current : r.animValues[e][0] = i[t - 1].animValues[e][1]), null === r.jsonProps[e][1] && (r.animValues[e][1] = t === s - 1 ? this.tweenProps[e].current : i[t + 1].animValues[e][0]), r.snapAtCreation && (r.jsonProps[e][0] = r.animValues[e][0], r.jsonProps[e][1] = r.animValues[e][1])
          }
      }
    }
    getBounds(t) {
      this.boundsMin = Number.MAX_VALUE, this.boundsMax = -Number.MAX_VALUE;
      for (let e = 0, i = this.attributes.length; e < i; e++) {
        let i = this.keyframes[this.attributes[e]];
        for (let e = 0; e < i.length; e++) {
          let s = i[e];
          this.boundsMin = Math.min(s.start, this.boundsMin), this.boundsMax = Math.max(s.end, this.boundsMax), t.min = Math.min(s.start, t.min), t.max = Math.max(s.end, t.max)
        }
      }
    }
    getNearestKeyframeForAttribute(t, e) {
      e = void 0 !== e ? e : this.group.position.local;
      let i = null,
        s = Number.POSITIVE_INFINITY,
        r = this.keyframes[t];
      if (void 0 === r) return null;
      let a = r.length;
      if (0 === a) return null;
      if (1 === a) return r[0];
      for (let t = 0; t < a; t++) {
        let a = r[t];
        if (a.isInRange(e)) {
          i = a;
          break
        }
        let n = Math.min(Math.abs(e - a.start), Math.abs(e - a.end));
        n < s && (s = n, i = a)
      }
      return i
    }
    getAllKeyframesForAttribute(t) {
      return this.keyframes[t]
    }
    updateKeyframe(t, e) {
      t.parseOptions(e), t.evaluateConstraints(), this.group.keyframesDirty = !0, d.update((() => {
        this.trigger(s.EVENTS.ON_KEYFRAME_UPDATED, t), this.group.trigger(s.EVENTS.ON_KEYFRAME_UPDATED, t)
      }), !0)
    }
    removeKeyframe(t) {
      return t.controller !== this ? Promise.resolve(null) : (t.markedForRemoval = !0, this.group.keyframesDirty = !0, new Promise((e => {
        this.group.rafEmitter.executor.eventEmitter.once("before:draw", (() => {
          e(t), t.destroy();
          let i = this._allKeyframes.indexOf(t); - 1 !== i && this._allKeyframes.splice(i, 1)
        }))
      })))
    }
    updateAnimation(t, e) {
      return this.group.gui && console.warn("KeyframeController.updateAnimation(keyframe,props) has been deprecated. Please use updateKeyframe(keyframe,props)"), this.updateKeyframe(t, e)
    }
  }
}, function(t, e, i) {
  "use strict";
  t.exports = class {
    constructor(t) {
      this.controller = t, this.element = this.controller.element, this.keyframe = null, this.event = "", this.tweenProps = this.controller.tweenProps
    }
  }
}, function(t, e, i) {
  "use strict";
  const s = i(2),
    r = i(11),
    a = i(42),
    n = i(33),
    o = function(t) {
      for (let e in t) {
        let i = t[e];
        if (-1 === s.KeyframeJSONReservedWords.indexOf(e) && Array.isArray(i)) return !0
      }
      return !1
    };
  t.exports = function(t) {
    if (void 0 !== t.cssClass || void 0 !== t.style) {
      if (o(t)) throw "CSS Keyframes cannot tween values, please use multiple keyframes instead";
      return n
    }
    if (o(t)) return r;
    if (t.event) return a;
    throw delete t.anchors, `Could not determine tween type based on ${JSON.stringify(t)}`
  }
}, function(t, e, i) {
  "use strict";
  "undefined" != typeof window && (window.DOMMatrix = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix);
  const s = 180 / Math.PI,
    r = t => Math.round(1e6 * t) / 1e6;

  function a(t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2])
  }

  function n(t, e) {
    return 0 === e ? Array.from(t) : [t[0] / e, t[1] / e, t[2] / e]
  }

  function o(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
  }

  function h(t, e, i, s) {
    return [t[0] * i + e[0] * s, t[1] * i + e[1] * s, t[2] * i + e[2] * s]
  }

  function l(t) {
    const e = new Float32Array(4),
      i = new Float32Array(3),
      l = new Float32Array(3),
      p = new Float32Array(3);
    p[0] = t[3][0], p[1] = t[3][1], p[2] = t[3][2];
    const c = new Array(3);
    for (let e = 0; e < 3; e++) c[e] = t[e].slice(0, 3);
    i[0] = a(c[0]), c[0] = n(c[0], i[0]), l[0] = o(c[0], c[1]), c[1] = h(c[1], c[0], 1, -l[0]), i[1] = a(c[1]), c[1] = n(c[1], i[1]), l[0] /= i[1], l[1] = o(c[0], c[2]), c[2] = h(c[2], c[0], 1, -l[1]), l[2] = o(c[1], c[2]), c[2] = h(c[2], c[1], 1, -l[2]), i[2] = a(c[2]), c[2] = n(c[2], i[2]), l[1] /= i[2], l[2] /= i[2];
    const u = (d = c[1], m = c[2], [d[1] * m[2] - d[2] * m[1], d[2] * m[0] - d[0] * m[2], d[0] * m[1] - d[1] * m[0]]);
    var d, m;
    if (o(c[0], u) < 0)
      for (let t = 0; t < 3; t++) i[t] *= -1, c[t][0] *= -1, c[t][1] *= -1, c[t][2] *= -1;
    let f;
    return e[0] = .5 * Math.sqrt(Math.max(1 + c[0][0] - c[1][1] - c[2][2], 0)), e[1] = .5 * Math.sqrt(Math.max(1 - c[0][0] + c[1][1] - c[2][2], 0)), e[2] = .5 * Math.sqrt(Math.max(1 - c[0][0] - c[1][1] + c[2][2], 0)), e[3] = .5 * Math.sqrt(Math.max(1 + c[0][0] + c[1][1] + c[2][2], 0)), c[2][1] > c[1][2] && (e[0] = -e[0]), c[0][2] > c[2][0] && (e[1] = -e[1]), c[1][0] > c[0][1] && (e[2] = -e[2]), f = e[0] < .001 && e[0] >= 0 && e[1] < .001 && e[1] >= 0 ? [0, 0, r(180 * Math.atan2(c[0][1], c[0][0]) / Math.PI)] : function(t) {
      const [e, i, a, n] = t, o = e * e, h = i * i, l = a * a, p = e * i + a * n, c = n * n + o + h + l;
      return p > .49999 * c ? [0, 2 * Math.atan2(e, n) * s, 90] : p < -.49999 * c ? [0, -2 * Math.atan2(e, n) * s, -90] : [r(Math.atan2(2 * e * n - 2 * i * a, 1 - 2 * o - 2 * l) * s), r(Math.atan2(2 * i * n - 2 * e * a, 1 - 2 * h - 2 * l) * s), r(Math.asin(2 * e * i + 2 * a * n) * s)]
    }(e), {
      translation: p,
      rotation: f,
      eulerRotation: f,
      scale: [r(i[0]), r(i[1]), r(i[2])]
    }
  }
  t.exports = function(t) {
    t instanceof Element && (t = String(getComputedStyle(t).transform).trim());
    let e = new DOMMatrix(t);
    const i = new Array(4);
    for (let t = 1; t < 5; t++) {
      const s = i[t - 1] = new Float32Array(4);
      for (let i = 1; i < 5; i++) s[i - 1] = e[`m${t}${i}`]
    }
    return l(i)
  }
}, function(t, e, i) {
  "use strict";
  var s = i(84),
    r = function(t) {
      this.phase = t, this.rafEmitter = new s, this._cachePhaseIndex(), this.requestAnimationFrame = this.requestAnimationFrame.bind(this), this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this), this._onBeforeRAFExecutorStart = this._onBeforeRAFExecutorStart.bind(this), this._onBeforeRAFExecutorPhase = this._onBeforeRAFExecutorPhase.bind(this), this._onAfterRAFExecutorPhase = this._onAfterRAFExecutorPhase.bind(this), this.rafEmitter.on(this.phase, this._onRAFExecuted.bind(this)), this.rafEmitter.executor.eventEmitter.on("before:start", this._onBeforeRAFExecutorStart), this.rafEmitter.executor.eventEmitter.on("before:" + this.phase, this._onBeforeRAFExecutorPhase), this.rafEmitter.executor.eventEmitter.on("after:" + this.phase, this._onAfterRAFExecutorPhase), this._frameCallbacks = [], this._currentFrameCallbacks = [], this._nextFrameCallbacks = [], this._phaseActive = !1, this._currentFrameID = -1, this._cancelFrameIdx = -1, this._frameCallbackLength = 0, this._currentFrameCallbacksLength = 0, this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0
    },
    a = r.prototype;
  a.requestAnimationFrame = function(t, e) {
    return !0 === e && this.rafEmitter.executor.phaseIndex > 0 && this.rafEmitter.executor.phaseIndex <= this.phaseIndex ? this._phaseActive ? (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !0), this._frameCallbacks.push(this._currentFrameID, t), this._frameCallbackLength += 2) : (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !1), this._currentFrameCallbacks.push(this._currentFrameID, t), this._currentFrameCallbacksLength += 2) : (this._currentFrameID = this.rafEmitter.run(), this._nextFrameCallbacks.push(this._currentFrameID, t), this._nextFrameCallbacksLength += 2), this._currentFrameID
  }, a.cancelAnimationFrame = function(t) {
    this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(t), this._cancelFrameIdx > -1 ? this._cancelNextAnimationFrame() : (this._cancelFrameIdx = this._currentFrameCallbacks.indexOf(t), this._cancelFrameIdx > -1 ? this._cancelCurrentAnimationFrame() : (this._cancelFrameIdx = this._frameCallbacks.indexOf(t), this._cancelFrameIdx > -1 && this._cancelRunningAnimationFrame()))
  }, a._onRAFExecuted = function(t) {
    for (this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) this._frameCallbacks[this._frameCallbackIteration + 1](t.time, t);
    this._frameCallbacks.length = 0, this._frameCallbackLength = 0
  }, a._onBeforeRAFExecutorStart = function() {
    Array.prototype.push.apply(this._currentFrameCallbacks, this._nextFrameCallbacks.splice(0, this._nextFrameCallbacksLength)), this._currentFrameCallbacksLength = this._nextFrameCallbacksLength, this._nextFrameCallbacks.length = 0, this._nextFrameCallbacksLength = 0
  }, a._onBeforeRAFExecutorPhase = function() {
    this._phaseActive = !0, Array.prototype.push.apply(this._frameCallbacks, this._currentFrameCallbacks.splice(0, this._currentFrameCallbacksLength)), this._frameCallbackLength = this._currentFrameCallbacksLength, this._currentFrameCallbacks.length = 0, this._currentFrameCallbacksLength = 0
  }, a._onAfterRAFExecutorPhase = function() {
    this._phaseActive = !1
  }, a._cachePhaseIndex = function() {
    this.phaseIndex = this.rafEmitter.executor.phases.indexOf(this.phase)
  }, a._cancelRunningAnimationFrame = function() {
    this._frameCallbacks.splice(this._cancelFrameIdx, 2), this._frameCallbackLength -= 2
  }, a._cancelCurrentAnimationFrame = function() {
    this._currentFrameCallbacks.splice(this._cancelFrameIdx, 2), this._currentFrameCallbacksLength -= 2
  }, a._cancelNextAnimationFrame = function() {
    this._nextFrameCallbacks.splice(this._cancelFrameIdx, 2), this._nextFrameCallbacksLength -= 2, 0 === this._nextFrameCallbacksLength && this.rafEmitter.cancel()
  }, t.exports = r
}, function(t, e, i) {
  "use strict";
  var s = i(13),
    r = function(t) {
      s.call(this, t)
    };
  (r.prototype = Object.create(s.prototype))._subscribe = function() {
    return this.executor.subscribe(this, !0)
  }, t.exports = r
}, function(t, e, i) {
  "use strict";
  var s = i(45).SharedInstance,
    r = i(46).majorVersionNumber,
    a = i(87);
  t.exports = s.share("@marcom/ac-raf-emitter/sharedRAFExecutorInstance", r, a)
}, function(t, e, i) {
  "use strict";
  var s, r = window,
    a = r.AC,
    n = (s = {}, {
      get: function(t, e) {
        var i = null;
        return s[t] && s[t][e] && (i = s[t][e]), i
      },
      set: function(t, e, i) {
        return s[t] || (s[t] = {}), s[t][e] = "function" == typeof i ? new i : i, s[t][e]
      },
      share: function(t, e, i) {
        var s = this.get(t, e);
        return s || (s = this.set(t, e, i)), s
      },
      remove: function(t, e) {
        var i = typeof e;
        if ("string" !== i && "number" !== i) s[t] && (s[t] = null);
        else {
          if (!s[t] || !s[t][e]) return;
          s[t][e] = null
        }
      }
    });
  a || (a = r.AC = {}), a.SharedInstance || (a.SharedInstance = n), t.exports = a.SharedInstance
}, function(t, e, i) {
  "use strict";
  var s, r = i(30);

  function a(t) {
    t = t || {}, this._reset(), this.updatePhases(), this.eventEmitter = new r, this._willRun = !1, this._totalSubscribeCount = -1, this._requestAnimationFrame = window.requestAnimationFrame, this._cancelAnimationFrame = window.cancelAnimationFrame, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
  }(s = a.prototype).frameRequestedPhase = "requested", s.startPhase = "start", s.runPhases = ["update", "external", "draw"], s.endPhase = "end", s.disabledPhase = "disabled", s.beforePhaseEventPrefix = "before:", s.afterPhaseEventPrefix = "after:", s.subscribe = function(t, e) {
    return this._totalSubscribeCount++, this._nextFrameSubscribers[t.id] || (e ? this._nextFrameSubscribersOrder.unshift(t.id) : this._nextFrameSubscribersOrder.push(t.id), this._nextFrameSubscribers[t.id] = t, this._nextFrameSubscriberArrayLength++, this._nextFrameSubscriberCount++, this._run()), this._totalSubscribeCount
  }, s.subscribeImmediate = function(t, e) {
    return this._totalSubscribeCount++, this._subscribers[t.id] || (e ? this._subscribersOrder.splice(this._currentSubscriberIndex + 1, 0, t.id) : this._subscribersOrder.unshift(t.id), this._subscribers[t.id] = t, this._subscriberArrayLength++, this._subscriberCount++), this._totalSubscribeCount
  }, s.unsubscribe = function(t) {
    return !!this._nextFrameSubscribers[t.id] && (this._nextFrameSubscribers[t.id] = null, this._nextFrameSubscriberCount--, 0 === this._nextFrameSubscriberCount && this._cancel(), !0)
  }, s.getSubscribeID = function() {
    return this._totalSubscribeCount += 1
  }, s.destroy = function() {
    var t = this._cancel();
    return this.eventEmitter.destroy(), this.eventEmitter = null, this.phases = null, this._subscribers = null, this._subscribersOrder = null, this._nextFrameSubscribers = null, this._nextFrameSubscribersOrder = null, this._rafData = null, this._boundOnAnimationFrame = null, this._onExternalAnimationFrame = null, t
  }, s.useExternalAnimationFrame = function(t) {
    if ("boolean" == typeof t) {
      var e = this._isUsingExternalAnimationFrame;
      return t && this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), !this._willRun || t || this._animationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this._isUsingExternalAnimationFrame = t, t ? this._boundOnExternalAnimationFrame : e || !1
    }
  }, s.updatePhases = function() {
    this.phases || (this.phases = []), this.phases.length = 0, this.phases.push(this.frameRequestedPhase), this.phases.push(this.startPhase), Array.prototype.push.apply(this.phases, this.runPhases), this.phases.push(this.endPhase), this._runPhasesLength = this.runPhases.length, this._phasesLength = this.phases.length
  }, s._run = function() {
    if (!this._willRun) return this._willRun = !0, 0 === this.lastFrameTime && (this.lastFrameTime = performance.now()), this._animationFrameActive = !0, this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this.phase === this.disabledPhase && (this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex]), !0
  }, s._cancel = function() {
    var t = !1;
    return this._animationFrameActive && (this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), this._animationFrameActive = !1, this._willRun = !1, t = !0), this._isRunning || this._reset(), t
  }, s._onAnimationFrame = function(t) {
    for (this._subscribers = this._nextFrameSubscribers, this._subscribersOrder = this._nextFrameSubscribersOrder, this._subscriberArrayLength = this._nextFrameSubscriberArrayLength, this._subscriberCount = this._nextFrameSubscriberCount, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex], this._isRunning = !0, this._willRun = !1, this._didRequestNextRAF = !1, this._rafData.delta = t - this.lastFrameTime, this.lastFrameTime = t, this._rafData.fps = 0, this._rafData.delta >= 1e3 && (this._rafData.delta = 0), 0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta), this._rafData.time = t, this._rafData.naturalFps = this._rafData.fps, this._rafData.timeNow = Date.now(), this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameStart(this._rafData);
    for (this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._runPhaseIndex = 0; this._runPhaseIndex < this._runPhasesLength; this._runPhaseIndex++) {
      for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]].trigger(this.phase, this._rafData);
      this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase)
    }
    for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameEnd(this._rafData);
    this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._willRun ? (this.phaseIndex = 0, this.phaseIndex = this.phases[this.phaseIndex]) : this._reset()
  }, s._onExternalAnimationFrame = function(t) {
    this._isUsingExternalAnimationFrame && this._onAnimationFrame(t)
  }, s._reset = function() {
    this._rafData || (this._rafData = {}), this._rafData.time = 0, this._rafData.delta = 0, this._rafData.fps = 0, this._rafData.naturalFps = 0, this._rafData.timeNow = 0, this._subscribers = {}, this._subscribersOrder = [], this._currentSubscriberIndex = -1, this._subscriberArrayLength = 0, this._subscriberCount = 0, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._didEmitFrameData = !1, this._animationFrame = null, this._animationFrameActive = !1, this._isRunning = !1, this._shouldReset = !1, this.lastFrameTime = 0, this._runPhaseIndex = -1, this.phaseIndex = -1, this.phase = this.disabledPhase
  }, t.exports = a
}, function(t, e, i) {
  "use strict";
  var s = i(45).SharedInstance,
    r = i(46).majorVersionNumber,
    a = function() {
      this._currentID = 0
    };
  a.prototype.getNewID = function() {
    return this._currentID++, "raf:" + this._currentID
  }, t.exports = s.share("@marcom/ac-raf-emitter/sharedRAFEmitterIDGeneratorInstance", r, a)
}, function(t, e) {
  t.exports = function() {
    var t = new Float32Array(16);
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
  }
}, function(t, e) {
  t.exports = function(t, e, i) {
    var s = Math.sin(i),
      r = Math.cos(i),
      a = e[4],
      n = e[5],
      o = e[6],
      h = e[7],
      l = e[8],
      p = e[9],
      c = e[10],
      u = e[11];
    e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
    return t[4] = a * r + l * s, t[5] = n * r + p * s, t[6] = o * r + c * s, t[7] = h * r + u * s, t[8] = l * r - a * s, t[9] = p * r - n * s, t[10] = c * r - o * s, t[11] = u * r - h * s, t
  }
}, function(t, e) {
  t.exports = function(t, e, i) {
    var s = Math.sin(i),
      r = Math.cos(i),
      a = e[0],
      n = e[1],
      o = e[2],
      h = e[3],
      l = e[8],
      p = e[9],
      c = e[10],
      u = e[11];
    e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
    return t[0] = a * r - l * s, t[1] = n * r - p * s, t[2] = o * r - c * s, t[3] = h * r - u * s, t[8] = a * s + l * r, t[9] = n * s + p * r, t[10] = o * s + c * r, t[11] = h * s + u * r, t
  }
}, function(t, e) {
  t.exports = function(t, e, i) {
    var s = Math.sin(i),
      r = Math.cos(i),
      a = e[0],
      n = e[1],
      o = e[2],
      h = e[3],
      l = e[4],
      p = e[5],
      c = e[6],
      u = e[7];
    e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
    return t[0] = a * r + l * s, t[1] = n * r + p * s, t[2] = o * r + c * s, t[3] = h * r + u * s, t[4] = l * r - a * s, t[5] = p * r - n * s, t[6] = c * r - o * s, t[7] = u * r - h * s, t
  }
}, function(t, e) {
  t.exports = function(t, e, i) {
    var s = i[0],
      r = i[1],
      a = i[2];
    return t[0] = e[0] * s, t[1] = e[1] * s, t[2] = e[2] * s, t[3] = e[3] * s, t[4] = e[4] * r, t[5] = e[5] * r, t[6] = e[6] * r, t[7] = e[7] * r, t[8] = e[8] * a, t[9] = e[9] * a, t[10] = e[10] * a, t[11] = e[11] * a, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
  }
}, function(t, e, i) {
  "use strict";
  const s = i(34),
    r = i(48),
    a = i(10);
  let n = 0;
  const o = {};
  "undefined" != typeof window && (o.create = i(13));
  class h extends s {
    constructor(t, e) {
      t || ((t = document.createElement("div")).className = "TimeGroup-" + n++), super(t, e), this.name = this.name || t.getAttribute("data-anim-time-group"), this._isPaused = !0, this._repeats = 0, this._isReversed = !1, this._timeScale = 1, this._chapterPlayer = new r(this), this.now = performance.now()
    }
    finalizeInit() {
      if (!this.anim) throw "TimeGroup not instantiated correctly. Please use `AnimSystem.createTimeGroup(el)`";
      this.onPlayTimeUpdate = this.onPlayTimeUpdate.bind(this), super.finalizeInit()
    }
    progress(t) {
      if (void 0 === t) return 0 === this.boundsMax ? 0 : this.position.local / this.boundsMax;
      let e = t * this.boundsMax;
      this.timelineUpdateRequired = !0, this.updateTimeline(e)
    }
    time(t) {
      if (void 0 === t) return this.position.local;
      t = a.clamp(t, this.boundsMin, this.duration), this.timelineUpdateRequired = !0, this.updateTimeline(t)
    }
    play(t) {
      this.reversed(!1), this.isEnabled = !0, this._isPaused = !1, this.time(t), this.now = performance.now(), this._playheadEmitter.run()
    }
    reverse(t) {
      this.reversed(!0), this.isEnabled = !0, this._isPaused = !1, this.time(t), this.now = performance.now(), this._playheadEmitter.run()
    }
    reversed(t) {
      if (void 0 === t) return this._isReversed;
      this._isReversed = t
    }
    restart() {
      this._isReversed ? (this.progress(1), this.reverse(this.time())) : (this.progress(0), this.play(this.time()))
    }
    pause(t) {
      this.time(t), this._isPaused = !0
    }
    paused(t) {
      return void 0 === t ? this._isPaused : (this._isPaused = t, this._isPaused || this.play(), this)
    }
    onPlayTimeUpdate() {
      if (this._isPaused) return;
      let t = performance.now(),
        e = (t - this.now) / 1e3;
      this.now = t, this._isReversed && (e = -e);
      let i = this.time() + e * this._timeScale;
      if (this._repeats === h.REPEAT_FOREVER || this._repeats > 0) {
        let t = !1;
        !this._isReversed && i > this.boundsMax ? (i -= this.boundsMax, t = !0) : this._isReversed && i < 0 && (i = this.boundsMax + i, t = !0), t && (this._repeats = this._repeats === h.REPEAT_FOREVER ? h.REPEAT_FOREVER : this._repeats - 1)
      }
      this.time(i);
      let s = !this._isReversed && this.position.local !== this.duration,
        r = this._isReversed && 0 !== this.position.local;
      s || r ? this._playheadEmitter.run() : this.paused(!0)
    }
    updateProgress(t) {
      this.hasDuration() ? (this.position.localUnclamped = t, this.position.local = a.clamp(this.position.localUnclamped, this.boundsMin, this.boundsMax)) : this.position.local = this.position.localUnclamped = 0
    }
    updateBounds() {
      if (0 === this.keyframeControllers.length) return this.boundsMin = 0, void(this.boundsMax = 0);
      let t = {
        min: Number.POSITIVE_INFINITY,
        max: Number.NEGATIVE_INFINITY
      };
      for (let e = 0, i = this.keyframeControllers.length; e < i; e++) this.keyframeControllers[e].getBounds(t);
      this.boundsMin = 0, this.boundsMax = t.max, this.viewableRange.a = this.viewableRange.b = 0, this.viewableRange.c = this.viewableRange.d = this.boundsMax, this.timelineUpdateRequired = !0
    }
    setupRAFEmitter(t) {
      this._playheadEmitter = new o.create, this._playheadEmitter.on("update", this.onPlayTimeUpdate), super.setupRAFEmitter(t)
    }
    get duration() {
      return this.keyframesDirty && this.onKeyframesDirty({
        silent: !0
      }), this.boundsMax
    }
    timeScale(t) {
      return void 0 === t ? this._timeScale : (this._timeScale = t, this)
    }
    repeats(t) {
      if (void 0 === t) return this._repeats;
      this._repeats = t
    }
    getPosition() {
      return this.position.local
    }
    addChapter(t) {
      return this._chapterPlayer.addChapter(t)
    }
    playToChapter(t) {
      this._chapterPlayer.playToChapter(t)
    }
    convertScrollPositionToTValue(t) {
      return t
    }
    convertTValueToScrollPosition(t) {
      return t
    }
    hasDuration() {
      return this.duration > 0
    }
    destroy() {
      this._playheadEmitter.destroy(), this._playheadEmitter = null, super.destroy()
    }
    get timelineProgress() {
      return this.progress()
    }
    set timelineProgress(t) {
      this.progress(t)
    }
    get progressValue() {
      return this.progress()
    }
    set progressValue(t) {
      this.progress(t)
    }
    get timeValue() {
      return this.time()
    }
    set timeValue(t) {
      this.time(t)
    }
  }
  h.REPEAT_FOREVER = -1, t.exports = h
}, function(t, e, i) {
  "use strict";
  const s = i(34),
    r = (i(48), i(10));
  let a = 0;
  const n = {};
  "undefined" != typeof window && (n.create = i(13));
  t.exports = class extends s {
    constructor(t, e) {
      t || ((t = document.createElement("div")).className = "TweenGroup-" + a++), super(t, e), this.name = "Tweens", this.keyframes = [], this._isPaused = !1, this.now = performance.now()
    }
    finalizeInit() {
      this.onTimeEmitterUpdate = this.onTimeEmitterUpdate.bind(this), this.removeExpiredKeyframeControllers = this.removeExpiredKeyframeControllers.bind(this), super.finalizeInit()
    }
    destroy() {
      this._timeEmitter.destroy(), this._timeEmitter = null, this._keyframes = [], super.destroy()
    }
    setupRAFEmitter(t) {
      this.now = performance.now(), this._timeEmitter = new n.create, this._timeEmitter.on("update", this.onTimeEmitterUpdate), this._timeEmitter.run(), super.setupRAFEmitter(t)
    }
    addKeyframe(t, e) {
      if (void 0 !== e.start || void 0 !== e.end) throw Error("Tweens do not have a start or end, they can only have a duration. Consider using a TimeGroup instead");
      if ("number" != typeof e.duration) throw Error("Tween options.duration is undefined, or is not a number");
      let i, s;
      e.start = (e.delay || 0) + this.position.localUnclamped, e.end = e.start + e.duration, e.preserveState = !0, e.snapAtCreation = !0, t._animInfo && (i = t._animInfo.group, s = t._animInfo.controller);
      let r = super.addKeyframe(t, e);
      return t._animInfo.group = i, t._animInfo.controller = s, e.onStart && r.controller.once("draw", (t => {
        t.keyframe = r, e.onStart(t), t.keyframe = null
      })), e.onDraw && r.controller.on("draw", (t => {
        t.keyframe = r, e.onDraw(t), t.keyframe = null
      })), this.removeOverlappingProps(r), this.keyframes.push(r), this._timeEmitter.willRun() || (this.now = performance.now(), this._timeEmitter.run()), r
    }
    removeOverlappingProps(t) {
      if (t.controller._allKeyframes.length <= 1) return;
      let e = Object.keys(t.animValues),
        i = t.controller;
      for (let s = 0, r = i._allKeyframes.length; s < r; s++) {
        const r = i._allKeyframes[s];
        if (r === t) continue;
        if (r.markedForRemoval) continue;
        let a = Object.keys(r.animValues),
          n = a.filter((t => e.includes(t)));
        n.length !== a.length ? n.forEach((t => delete r.animValues[t])) : r.markedForRemoval = !0
      }
    }
    onTimeEmitterUpdate(t) {
      if (this._isPaused || 0 === this.keyframeControllers.length) return;
      let e = performance.now(),
        i = (e - this.now) / 1e3;
      this.now = e;
      let s = this.position.local + i;
      this.position.local = this.position.localUnclamped = s, this.onTimeUpdate()
    }
    onTimeUpdate() {
      for (let t = 0, e = this.keyframes.length; t < e; t++) this.keyframes[t].updateLocalProgress(this.position.localUnclamped);
      this.requestDOMChange(), this._timeEmitter.run(), null !== this.gui && this.gui.onScrollUpdate(this.position)
    }
    onDOMRead() {
      if (this.keyframesDirty && this.onKeyframesDirty(), 0 !== this.keyframes.length)
        for (let t = 0, e = this.keyframes.length; t < e; t++) {
          this.keyframes[t].controller.needsWrite = !0;
          for (let e in this.keyframes[t].animValues) this.keyframes[t].onDOMRead(e)
        }
    }
    onDOMWrite() {
      super.onDOMWrite(), this.removeExpiredKeyframes()
    }
    removeExpiredKeyframes() {
      let t = this.keyframes.length,
        e = t;
      for (; t--;) {
        let e = this.keyframes[t];
        e.destroyed ? this.keyframes.splice(t, 1) : (e.markedForRemoval && (e.jsonProps.onComplete && 1 === e.localT && (e.controller.eventObject.keyframe = e, e.jsonProps.onComplete(e.controller.eventObject), e.jsonProps.onComplete = null), null !== this.gui && this.gui.isDraggingPlayhead || (e.remove(), this.keyframes.splice(t, 1))), 1 === e.localT && (e.markedForRemoval = !0))
      }
      this.keyframes.length === e && 0 !== this.keyframes.length || this._timeEmitter.executor.eventEmitter.once("after:draw", this.removeExpiredKeyframeControllers)
    }
    removeExpiredKeyframeControllers() {
      for (let t = 0, e = this.keyframeControllers.length; t < e; t++) {
        let e = !0,
          i = this.keyframeControllers[t];
        for (let t = 0, s = i._allKeyframes.length; t < s; t++)
          if (!i._allKeyframes[t].destroyed) {
            e = !1;
            break
          } e && i.remove()
      }
    }
    updateBounds() {
      this.boundsMin = Math.min(...this.keyframes.map((t => t.start))), this.boundsMax = Math.max(...this.keyframes.map((t => t.end)))
    }
    play() {
      this.isEnabled = !0, this._isPaused = !1, this.now = performance.now(), this._timeEmitter.run()
    }
    pause() {
      this._isPaused = !0
    }
    paused() {
      return this._isPaused
    }
    time(t) {
      if (void 0 === t) return this.position.local;
      this.position.local = this.position.localUnclamped = r.clamp(t, this.boundsMin, this.boundsMax), this.onTimeUpdate()
    }
    performTimelineDispatch() {}
    hasDuration() {
      return !0
    }
    getPosition() {
      return this.position.local
    }
    updateProgress(t) {}
    get duration() {
      return this.boundsMax
    }
  }
}, function(t, e, i) {
  "use strict";
  t.exports = {
    version: "3.5.4",
    major: "3.x",
    majorMinor: "3.5"
  }
}, function(t, e, i) {
  "use strict";
  var s = i(17);
  t.exports = s.cancelAnimationFrame("update")
}, function(t, e, i) {
  "use strict";
  t.exports = {
    CarnivalLottiePlayer: i(8),
    CarnivalInlineVideo: i(104),
    PageStateManager: i(125),
    TileOverlay: i(126),
    WillChange: i(127),
    Hero: i(128),
    PortraitMode: i(132),
    HomeSceneComponent: i(133),
    MindfulnessApp: i(134),
    TaiChi: i(135),
    WalletItems: i(136),
    MessagingMagic: i(137),
    CarKey: i(138),
    DigitalKey: i(139),
    Switcheroo: i(140)
  }
}, function(t, e, i) {
  "use strict";
  class s {
    constructor(t) {
      this.name = t, this.playing = !1, this.requests = []
    }
    addRequest(t) {
      this.requests.push(t), this.requests.sort(((t, e) => t.priority - e.priority)), this.playing || (this.playing = !0, requestAnimationFrame((() => {
        this._schedule()
      })))
    }
    removeRequest(t) {
      const e = this.requests.findIndex((e => e === t)); - 1 != e && this.requests.splice(e, 1).length;
      t === this.currentRequest && (clearTimeout(this.currentRequestTimeout), requestAnimationFrame((() => {
        this._schedule()
      })))
    }
    _schedule() {
      if (0 !== this.requests.length) {
        var t = this.requests.shift();
        0, this.currentRequest = t, t.callback(), this.currentRequestTimeout = setTimeout((() => {
          this.currentRequest = void 0, this.currentRequestTimeout = void 0, this._schedule()
        }), 1e3 * t.duration)
      } else this.playing = !1
    }
  }
  class r {
    constructor() {
      this.buckets = {}
    }
    _requestAnimationStartWithOptions({
      bucket: t,
      duration: e,
      element: i,
      name: r,
      priority: a
    }) {
      if (void 0 !== i && (("number" != typeof(t = Math.round(i.getBoundingClientRect().top + document.documentElement.scrollTop)) || isNaN(t)) && (t = void 0), a = n(i)), void 0 === a && (a = 0), void 0 === t) {
        const t = Promise.resolve();
        return t.cancel = function() {}, t
      }
      var o;
      const h = new Promise((i => {
        this.buckets[t] || (this.buckets[t] = new s(t)), o = {
          callback: i,
          duration: e,
          name: r,
          priority: a
        }, this.buckets[t].addRequest(o)
      }));
      return h.cancel = () => {
        this.buckets[t].removeRequest(o)
      }, h
    }
    requestAnimationStart(t, e, i, s) {
      var r;
      return r = "object" == typeof t && t ? t : {
        bucket: t,
        duration: e / 1e3,
        name: i,
        priority: s
      }, this._requestAnimationStartWithOptions(r)
    }
  }
  var a = new r;

  function n(t) {
    return Array.prototype.indexOf.call(t.parentElement.children, t)
  }
  t.exports = {
    CarnivalDirector: r,
    director: a,
    indexOf: n
  }
}, function(t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.trackAnimationStart = function(t) {
    try {
      if (!a[t]) return void(a[t] = !0);
      0, n++, o()
    } catch (t) {
      0
    }
  };
  const s = i(101);
  let r;
  try {
    r = i(102)
  } catch (t) {
    0
  }
  const a = {};
  var n = 0;
  window.s && window.s.registerPostTrackCallback && window.s.registerPostTrackCallback((function() {
    n = 0
  }));
  var o = s((() => {
    r.passiveTracker({
      events: `event378=${n}`
    })
  }), 50)
}, function(t, e, i) {
  "use strict";
  t.exports = function(t, e) {
    var i = null,
      s = function() {
        null === i && (t.apply(this, arguments), i = setTimeout((function() {
          i = null
        }), e))
      };
    return s.cancel = function() {
      clearTimeout(i)
    }, s
  }
}, function(t, e) {
  t.exports = require("@marcom/ac-analytics")
}, function(module, exports, __webpack_require__) {
  var __WEBPACK_AMD_DEFINE_RESULT__, root, factory;
  "undefined" != typeof navigator && (root = window || {}, factory = function(window) {
    "use strict";
    var svgNS = "http://www.w3.org/2000/svg",
      locationHref = "",
      initialDefaultFrame = -999999,
      subframeEnabled = !0,
      idPrefix = "",
      expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
      cachedColors = {},
      bmRnd, bmPow = Math.pow,
      bmSqrt = Math.sqrt,
      bmFloor = Math.floor,
      bmMax = Math.max,
      bmMin = Math.min,
      BMMath = {};

    function ProjectInterface() {
      return {}
    }! function() {
      var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
        i = e.length;
      for (t = 0; t < i; t += 1) BMMath[e[t]] = Math[e[t]]
    }(), BMMath.random = Math.random, BMMath.abs = function(t) {
      if ("object" == typeof t && t.length) {
        var e, i = createSizedArray(t.length),
          s = t.length;
        for (e = 0; e < s; e += 1) i[e] = Math.abs(t[e]);
        return i
      }
      return Math.abs(t)
    };
    var defaultCurveSegments = 150,
      degToRads = Math.PI / 180,
      roundCorner = .5519;

    function roundValues(t) {
      bmRnd = t ? Math.round : function(t) {
        return t
      }
    }

    function styleDiv(t) {
      t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
    }

    function BMEnterFrameEvent(t, e, i, s) {
      this.type = t, this.currentTime = e, this.totalTime = i, this.direction = s < 0 ? -1 : 1
    }

    function BMCompleteEvent(t, e) {
      this.type = t, this.direction = e < 0 ? -1 : 1
    }

    function BMCompleteLoopEvent(t, e, i, s) {
      this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = s < 0 ? -1 : 1
    }

    function BMSegmentStartEvent(t, e, i) {
      this.type = t, this.firstFrame = e, this.totalFrames = i
    }

    function BMDestroyEvent(t, e) {
      this.type = t, this.target = e
    }

    function BMRenderFrameErrorEvent(t, e) {
      this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
    }

    function BMConfigErrorEvent(t) {
      this.type = "configError", this.nativeError = t
    }

    function BMAnimationConfigErrorEvent(t, e) {
      this.type = t, this.nativeError = e
    }
    roundValues(!1);
    var createElementID = (_count = 0, function() {
        return idPrefix + "__lottie_element_" + (_count += 1)
      }),
      _count;

    function HSVtoRGB(t, e, i) {
      var s, r, a, n, o, h, l, p;
      switch (h = i * (1 - e), l = i * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = i * (1 - (1 - o) * e), n % 6) {
        case 0:
          s = i, r = p, a = h;
          break;
        case 1:
          s = l, r = i, a = h;
          break;
        case 2:
          s = h, r = i, a = p;
          break;
        case 3:
          s = h, r = l, a = i;
          break;
        case 4:
          s = p, r = h, a = i;
          break;
        case 5:
          s = i, r = h, a = l
      }
      return [s, r, a]
    }

    function RGBtoHSV(t, e, i) {
      var s, r = Math.max(t, e, i),
        a = Math.min(t, e, i),
        n = r - a,
        o = 0 === r ? 0 : n / r,
        h = r / 255;
      switch (r) {
        case a:
          s = 0;
          break;
        case t:
          s = e - i + n * (e < i ? 6 : 0), s /= 6 * n;
          break;
        case e:
          s = i - t + 2 * n, s /= 6 * n;
          break;
        case i:
          s = t - e + 4 * n, s /= 6 * n
      }
      return [s, o, h]
    }

    function addSaturationToRGB(t, e) {
      var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
      return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2])
    }

    function addBrightnessToRGB(t, e) {
      var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
      return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2])
    }

    function addHueToRGB(t, e) {
      var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
      return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2])
    }
    var rgbToHex = function() {
      var t, e, i = [];
      for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = 1 === e.length ? "0" + e : e;
      return function(t, e, s) {
        return t < 0 && (t = 0), e < 0 && (e = 0), s < 0 && (s = 0), "#" + i[t] + i[e] + i[s]
      }
    }();

    function BaseEvent() {}
    BaseEvent.prototype = {
      triggerEvent: function(t, e) {
        if (this._cbs[t])
          for (var i = this._cbs[t], s = 0; s < i.length; s += 1) i[s](e)
      },
      addEventListener: function(t, e) {
        return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
          function() {
            this.removeEventListener(t, e)
          }.bind(this)
      },
      removeEventListener: function(t, e) {
        if (e) {
          if (this._cbs[t]) {
            for (var i = 0, s = this._cbs[t].length; i < s;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, s -= 1), i += 1;
            this._cbs[t].length || (this._cbs[t] = null)
          }
        } else this._cbs[t] = null
      }
    };
    var createTypedArray = function() {
      function t(t, e) {
        var i, s = 0,
          r = [];
        switch (t) {
          case "int16":
          case "uint8c":
            i = 1;
            break;
          default:
            i = 1.1
        }
        for (s = 0; s < e; s += 1) r.push(i);
        return r
      }
      return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, i) {
        return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i)
      } : t
    }();

    function createSizedArray(t) {
      return Array.apply(null, {
        length: t
      })
    }

    function createNS(t) {
      return document.createElementNS(svgNS, t)
    }

    function createTag(t) {
      return document.createElement(t)
    }

    function DynamicPropertyContainer() {}
    DynamicPropertyContainer.prototype = {
      addDynamicProperty: function(t) {
        -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
      },
      iterateDynamicProperties: function() {
        var t;
        this._mdf = !1;
        var e = this.dynamicProperties.length;
        for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
      },
      initDynamicPropertyContainer: function(t) {
        this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
      }
    };
    var getBlendMode = (blendModeEnums = {
        0: "source-over",
        1: "multiply",
        2: "screen",
        3: "overlay",
        4: "darken",
        5: "lighten",
        6: "color-dodge",
        7: "color-burn",
        8: "hard-light",
        9: "soft-light",
        10: "difference",
        11: "exclusion",
        12: "hue",
        13: "saturation",
        14: "color",
        15: "luminosity"
      }, function(t) {
        return blendModeEnums[t] || ""
      }),
      blendModeEnums, lineCapEnum = {
        1: "butt",
        2: "round",
        3: "square"
      },
      lineJoinEnum = {
        1: "miter",
        2: "round",
        3: "bevel"
      },
      Matrix = function() {
        var t = Math.cos,
          e = Math.sin,
          i = Math.tan,
          s = Math.round;

        function r() {
          return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
        }

        function a(i) {
          if (0 === i) return this;
          var s = t(i),
            r = e(i);
          return this._t(s, -r, 0, 0, r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }

        function n(i) {
          if (0 === i) return this;
          var s = t(i),
            r = e(i);
          return this._t(1, 0, 0, 0, 0, s, -r, 0, 0, r, s, 0, 0, 0, 0, 1)
        }

        function o(i) {
          if (0 === i) return this;
          var s = t(i),
            r = e(i);
          return this._t(s, 0, r, 0, 0, 1, 0, 0, -r, 0, s, 0, 0, 0, 0, 1)
        }

        function h(i) {
          if (0 === i) return this;
          var s = t(i),
            r = e(i);
          return this._t(s, -r, 0, 0, r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }

        function l(t, e) {
          return this._t(1, e, t, 1, 0, 0)
        }

        function p(t, e) {
          return this.shear(i(t), i(e))
        }

        function c(s, r) {
          var a = t(r),
            n = e(r);
          return this._t(a, n, 0, 0, -n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(s), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -n, 0, 0, n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }

        function u(t, e, i) {
          return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
        }

        function d(t, e, i, s, r, a, n, o, h, l, p, c, u, d, m, f) {
          return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = s, this.props[4] = r, this.props[5] = a, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = c, this.props[12] = u, this.props[13] = d, this.props[14] = m, this.props[15] = f, this
        }

        function m(t, e, i) {
          return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
        }

        function f(t, e, i, s, r, a, n, o, h, l, p, c, u, d, m, f) {
          var y = this.props;
          if (1 === t && 0 === e && 0 === i && 0 === s && 0 === r && 1 === a && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === c) return y[12] = y[12] * t + y[15] * u, y[13] = y[13] * a + y[15] * d, y[14] = y[14] * p + y[15] * m, y[15] *= f, this._identityCalculated = !1, this;
          var g = y[0],
            v = y[1],
            _ = y[2],
            b = y[3],
            E = y[4],
            P = y[5],
            A = y[6],
            x = y[7],
            S = y[8],
            T = y[9],
            C = y[10],
            w = y[11],
            k = y[12],
            M = y[13],
            D = y[14],
            I = y[15];
          return y[0] = g * t + v * r + _ * h + b * u, y[1] = g * e + v * a + _ * l + b * d, y[2] = g * i + v * n + _ * p + b * m, y[3] = g * s + v * o + _ * c + b * f, y[4] = E * t + P * r + A * h + x * u, y[5] = E * e + P * a + A * l + x * d, y[6] = E * i + P * n + A * p + x * m, y[7] = E * s + P * o + A * c + x * f, y[8] = S * t + T * r + C * h + w * u, y[9] = S * e + T * a + C * l + w * d, y[10] = S * i + T * n + C * p + w * m, y[11] = S * s + T * o + C * c + w * f, y[12] = k * t + M * r + D * h + I * u, y[13] = k * e + M * a + D * l + I * d, y[14] = k * i + M * n + D * p + I * m, y[15] = k * s + M * o + D * c + I * f, this._identityCalculated = !1, this
        }

        function y() {
          return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
        }

        function g(t) {
          for (var e = 0; e < 16;) {
            if (t.props[e] !== this.props[e]) return !1;
            e += 1
          }
          return !0
        }

        function v(t) {
          var e;
          for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
          return t
        }

        function _(t) {
          var e;
          for (e = 0; e < 16; e += 1) this.props[e] = t[e]
        }

        function b(t, e, i) {
          return {
            x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
            y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
            z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
          }
        }

        function E(t, e, i) {
          return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
        }

        function P(t, e, i) {
          return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
        }

        function A(t, e, i) {
          return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
        }

        function x() {
          var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
            e = this.props[5] / t,
            i = -this.props[1] / t,
            s = -this.props[4] / t,
            r = this.props[0] / t,
            a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
            n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
            o = new Matrix;
          return o.props[0] = e, o.props[1] = i, o.props[4] = s, o.props[5] = r, o.props[12] = a, o.props[13] = n, o
        }

        function S(t) {
          return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
        }

        function T(t) {
          var e, i = t.length,
            s = [];
          for (e = 0; e < i; e += 1) s[e] = S(t[e]);
          return s
        }

        function C(t, e, i) {
          var s = createTypedArray("float32", 6);
          if (this.isIdentity()) s[0] = t[0], s[1] = t[1], s[2] = e[0], s[3] = e[1], s[4] = i[0], s[5] = i[1];
          else {
            var r = this.props[0],
              a = this.props[1],
              n = this.props[4],
              o = this.props[5],
              h = this.props[12],
              l = this.props[13];
            s[0] = t[0] * r + t[1] * n + h, s[1] = t[0] * a + t[1] * o + l, s[2] = e[0] * r + e[1] * n + h, s[3] = e[0] * a + e[1] * o + l, s[4] = i[0] * r + i[1] * n + h, s[5] = i[0] * a + i[1] * o + l
          }
          return s
        }

        function w(t, e, i) {
          return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
        }

        function k(t, e) {
          if (this.isIdentity()) return t + "," + e;
          var i = this.props;
          return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
        }

        function M() {
          for (var t = 0, e = this.props, i = "matrix3d("; t < 16;) i += s(1e4 * e[t]) / 1e4, i += 15 === t ? ")" : ",", t += 1;
          return i
        }

        function D(t) {
          return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? s(1e4 * t) / 1e4 : t
        }

        function I() {
          var t = this.props;
          return "matrix(" + D(t[0]) + "," + D(t[1]) + "," + D(t[4]) + "," + D(t[5]) + "," + D(t[12]) + "," + D(t[13]) + ")"
        }
        return function() {
          this.reset = r, this.rotate = a, this.rotateX = n, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = c, this.shear = l, this.scale = u, this.setTransform = d, this.translate = m, this.transform = f, this.applyToPoint = b, this.applyToX = E, this.applyToY = P, this.applyToZ = A, this.applyToPointArray = w, this.applyToTriplePoints = C, this.applyToPointStringified = k, this.toCSS = M, this.to2dCSS = I, this.clone = v, this.cloneFromProps = _, this.equals = g, this.inversePoints = T, this.inversePoint = S, this.getInverseMatrix = x, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
        }
      }();
    ! function(t, e) {
      var i = this,
        s = 256,
        r = e.pow(s, 6),
        a = e.pow(2, 52),
        n = 2 * a,
        o = 255;

      function h(t) {
        var e, i = t.length,
          r = this,
          a = 0,
          n = r.i = r.j = 0,
          h = r.S = [];
        for (i || (t = [i++]); a < s;) h[a] = a++;
        for (a = 0; a < s; a++) h[a] = h[n = o & n + t[a % i] + (e = h[a])], h[n] = e;
        r.g = function(t) {
          for (var e, i = 0, a = r.i, n = r.j, h = r.S; t--;) e = h[a = o & a + 1], i = i * s + h[o & (h[a] = h[n = o & n + e]) + (h[n] = e)];
          return r.i = a, r.j = n, i
        }
      }

      function l(t, e) {
        return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
      }

      function p(t, e) {
        var i, s = [],
          r = typeof t;
        if (e && "object" == r)
          for (i in t) try {
            s.push(p(t[i], e - 1))
          } catch (t) {}
        return s.length ? s : "string" == r ? t : t + "\0"
      }

      function c(t, e) {
        for (var i, s = t + "", r = 0; r < s.length;) e[o & r] = o & (i ^= 19 * e[o & r]) + s.charCodeAt(r++);
        return u(e)
      }

      function u(t) {
        return String.fromCharCode.apply(0, t)
      }
      e.seedrandom = function(o, d, m) {
        var f = [],
          y = c(p((d = !0 === d ? {
            entropy: !0
          } : d || {}).entropy ? [o, u(t)] : null === o ? function() {
            try {
              var e = new Uint8Array(s);
              return (i.crypto || i.msCrypto).getRandomValues(e), u(e)
            } catch (e) {
              var r = i.navigator,
                a = r && r.plugins;
              return [+new Date, i, a, i.screen, u(t)]
            }
          }() : o, 3), f),
          g = new h(f),
          v = function() {
            for (var t = g.g(6), e = r, i = 0; t < a;) t = (t + i) * s, e *= s, i = g.g(1);
            for (; t >= n;) t /= 2, e /= 2, i >>>= 1;
            return (t + i) / e
          };
        return v.int32 = function() {
          return 0 | g.g(4)
        }, v.quick = function() {
          return g.g(4) / 4294967296
        }, v.double = v, c(u(g.S), t), (d.pass || m || function(t, i, s, r) {
          return r && (r.S && l(r, g), t.state = function() {
            return l(g, {})
          }), s ? (e.random = t, i) : t
        })(v, y, "global" in d ? d.global : this == e, d.state)
      }, c(e.random(), t)
    }([], BMMath);
    var BezierFactory = function() {
      var t = {
          getBezierEasing: function(t, i, s, r, a) {
            var n = a || ("bez_" + t + "_" + i + "_" + s + "_" + r).replace(/\./g, "p");
            if (e[n]) return e[n];
            var o = new l([t, i, s, r]);
            return e[n] = o, o
          }
        },
        e = {},
        i = .1,
        s = "function" == typeof Float32Array;

      function r(t, e) {
        return 1 - 3 * e + 3 * t
      }

      function a(t, e) {
        return 3 * e - 6 * t
      }

      function n(t) {
        return 3 * t
      }

      function o(t, e, i) {
        return ((r(e, i) * t + a(e, i)) * t + n(e)) * t
      }

      function h(t, e, i) {
        return 3 * r(e, i) * t * t + 2 * a(e, i) * t + n(e)
      }

      function l(t) {
        this._p = t, this._mSampleValues = s ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
      }
      return l.prototype = {
        get: function(t) {
          var e = this._p[0],
            i = this._p[1],
            s = this._p[2],
            r = this._p[3];
          return this._precomputed || this._precompute(), e === i && s === r ? t : 0 === t ? 0 : 1 === t ? 1 : o(this._getTForX(t), i, r)
        },
        _precompute: function() {
          var t = this._p[0],
            e = this._p[1],
            i = this._p[2],
            s = this._p[3];
          this._precomputed = !0, t === e && i === s || this._calcSampleValues()
        },
        _calcSampleValues: function() {
          for (var t = this._p[0], e = this._p[2], s = 0; s < 11; ++s) this._mSampleValues[s] = o(s * i, t, e)
        },
        _getTForX: function(t) {
          for (var e = this._p[0], s = this._p[2], r = this._mSampleValues, a = 0, n = 1; 10 !== n && r[n] <= t; ++n) a += i;
          var l = a + (t - r[--n]) / (r[n + 1] - r[n]) * i,
            p = h(l, e, s);
          return p >= .001 ? function(t, e, i, s) {
            for (var r = 0; r < 4; ++r) {
              var a = h(e, i, s);
              if (0 === a) return e;
              e -= (o(e, i, s) - t) / a
            }
            return e
          }(t, l, e, s) : 0 === p ? l : function(t, e, i, s, r) {
            var a, n, h = 0;
            do {
              (a = o(n = e + (i - e) / 2, s, r) - t) > 0 ? i = n : e = n
            } while (Math.abs(a) > 1e-7 && ++h < 10);
            return n
          }(t, a, a + i, e, s)
        }
      }, t
    }();

    function extendPrototype(t, e) {
      var i, s, r = t.length;
      for (i = 0; i < r; i += 1)
        for (var a in s = t[i].prototype) Object.prototype.hasOwnProperty.call(s, a) && (e.prototype[a] = s[a])
    }

    function getDescriptor(t, e) {
      return Object.getOwnPropertyDescriptor(t, e)
    }

    function createProxyFunction(t) {
      function e() {}
      return e.prototype = t, e
    }

    function bezFunction() {
      var t = Math;

      function e(t, e, i, s, r, a) {
        var n = t * s + e * r + i * a - r * s - a * t - i * e;
        return n > -.001 && n < .001
      }
      var i = function(t, e, i, s) {
        var r, a, n, o, h, l, p = defaultCurveSegments,
          c = 0,
          u = [],
          d = [],
          m = bezierLengthPool.newElement();
        for (n = i.length, r = 0; r < p; r += 1) {
          for (h = r / (p - 1), l = 0, a = 0; a < n; a += 1) o = bmPow(1 - h, 3) * t[a] + 3 * bmPow(1 - h, 2) * h * i[a] + 3 * (1 - h) * bmPow(h, 2) * s[a] + bmPow(h, 3) * e[a], u[a] = o, null !== d[a] && (l += bmPow(u[a] - d[a], 2)), d[a] = u[a];
          l && (c += l = bmSqrt(l)), m.percents[r] = h, m.lengths[r] = c
        }
        return m.addedLength = c, m
      };

      function s(t) {
        this.segmentLength = 0, this.points = new Array(t)
      }

      function r(t, e) {
        this.partialLength = t, this.point = e
      }
      var a, n = (a = {}, function(t, i, n, o) {
        var h = (t[0] + "_" + t[1] + "_" + i[0] + "_" + i[1] + "_" + n[0] + "_" + n[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
        if (!a[h]) {
          var l, p, c, u, d, m, f, y = defaultCurveSegments,
            g = 0,
            v = null;
          2 === t.length && (t[0] !== i[0] || t[1] !== i[1]) && e(t[0], t[1], i[0], i[1], t[0] + n[0], t[1] + n[1]) && e(t[0], t[1], i[0], i[1], i[0] + o[0], i[1] + o[1]) && (y = 2);
          var _ = new s(y);
          for (c = n.length, l = 0; l < y; l += 1) {
            for (f = createSizedArray(c), d = l / (y - 1), m = 0, p = 0; p < c; p += 1) u = bmPow(1 - d, 3) * t[p] + 3 * bmPow(1 - d, 2) * d * (t[p] + n[p]) + 3 * (1 - d) * bmPow(d, 2) * (i[p] + o[p]) + bmPow(d, 3) * i[p], f[p] = u, null !== v && (m += bmPow(f[p] - v[p], 2));
            g += m = bmSqrt(m), _.points[l] = new r(m, f), v = f
          }
          _.segmentLength = g, a[h] = _
        }
        return a[h]
      });

      function o(t, e) {
        var i = e.percents,
          s = e.lengths,
          r = i.length,
          a = bmFloor((r - 1) * t),
          n = t * e.addedLength,
          o = 0;
        if (a === r - 1 || 0 === a || n === s[a]) return i[a];
        for (var h = s[a] > n ? -1 : 1, l = !0; l;)
          if (s[a] <= n && s[a + 1] > n ? (o = (n - s[a]) / (s[a + 1] - s[a]), l = !1) : a += h, a < 0 || a >= r - 1) {
            if (a === r - 1) return i[a];
            l = !1
          } return i[a] + (i[a + 1] - i[a]) * o
      }
      var h = createTypedArray("float32", 8);
      return {
        getSegmentsLength: function(t) {
          var e, s = segmentsLengthPool.newElement(),
            r = t.c,
            a = t.v,
            n = t.o,
            o = t.i,
            h = t._length,
            l = s.lengths,
            p = 0;
          for (e = 0; e < h - 1; e += 1) l[e] = i(a[e], a[e + 1], n[e], o[e + 1]), p += l[e].addedLength;
          return r && h && (l[e] = i(a[e], a[0], n[e], o[0]), p += l[e].addedLength), s.totalLength = p, s
        },
        getNewSegment: function(e, i, s, r, a, n, l) {
          a < 0 ? a = 0 : a > 1 && (a = 1);
          var p, c = o(a, l),
            u = o(n = n > 1 ? 1 : n, l),
            d = e.length,
            m = 1 - c,
            f = 1 - u,
            y = m * m * m,
            g = c * m * m * 3,
            v = c * c * m * 3,
            _ = c * c * c,
            b = m * m * f,
            E = c * m * f + m * c * f + m * m * u,
            P = c * c * f + m * c * u + c * m * u,
            A = c * c * u,
            x = m * f * f,
            S = c * f * f + m * u * f + m * f * u,
            T = c * u * f + m * u * u + c * f * u,
            C = c * u * u,
            w = f * f * f,
            k = u * f * f + f * u * f + f * f * u,
            M = u * u * f + f * u * u + u * f * u,
            D = u * u * u;
          for (p = 0; p < d; p += 1) h[4 * p] = t.round(1e3 * (y * e[p] + g * s[p] + v * r[p] + _ * i[p])) / 1e3, h[4 * p + 1] = t.round(1e3 * (b * e[p] + E * s[p] + P * r[p] + A * i[p])) / 1e3, h[4 * p + 2] = t.round(1e3 * (x * e[p] + S * s[p] + T * r[p] + C * i[p])) / 1e3, h[4 * p + 3] = t.round(1e3 * (w * e[p] + k * s[p] + M * r[p] + D * i[p])) / 1e3;
          return h
        },
        getPointInSegment: function(e, i, s, r, a, n) {
          var h = o(a, n),
            l = 1 - h;
          return [t.round(1e3 * (l * l * l * e[0] + (h * l * l + l * h * l + l * l * h) * s[0] + (h * h * l + l * h * h + h * l * h) * r[0] + h * h * h * i[0])) / 1e3, t.round(1e3 * (l * l * l * e[1] + (h * l * l + l * h * l + l * l * h) * s[1] + (h * h * l + l * h * h + h * l * h) * r[1] + h * h * h * i[1])) / 1e3]
        },
        buildBezierData: n,
        pointOnLine2D: e,
        pointOnLine3D: function(i, s, r, a, n, o, h, l, p) {
          if (0 === r && 0 === o && 0 === p) return e(i, s, a, n, h, l);
          var c, u = t.sqrt(t.pow(a - i, 2) + t.pow(n - s, 2) + t.pow(o - r, 2)),
            d = t.sqrt(t.pow(h - i, 2) + t.pow(l - s, 2) + t.pow(p - r, 2)),
            m = t.sqrt(t.pow(h - a, 2) + t.pow(l - n, 2) + t.pow(p - o, 2));
          return (c = u > d ? u > m ? u - d - m : m - d - u : m > d ? m - d - u : d - u - m) > -1e-4 && c < 1e-4
        }
      }
    }! function() {
      for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
      window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
        var i = (new Date).getTime(),
          s = Math.max(0, 16 - (i - t)),
          r = setTimeout((function() {
            e(i + s)
          }), s);
        return t = i + s, r
      }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
        clearTimeout(t)
      })
    }();
    var bez = bezFunction();

    function dataFunctionManager() {
      function t(r, a, n) {
        var o, h, l, p, c, u, d, m = r.length;
        for (h = 0; h < m; h += 1)
          if ("ks" in (o = r[h]) && !o.completed) {
            if (o.completed = !0, o.tt && (r[h - 1].td = o.tt), o.hasMask) {
              var f = o.masksProperties;
              for (p = f.length, l = 0; l < p; l += 1)
                if (f[l].pt.k.i) s(f[l].pt.k);
                else
                  for (u = f[l].pt.k.length, c = 0; c < u; c += 1) f[l].pt.k[c].s && s(f[l].pt.k[c].s[0]), f[l].pt.k[c].e && s(f[l].pt.k[c].e[0])
            }
            0 === o.ty ? (o.layers = e(o.refId, a), t(o.layers, a, n)) : 4 === o.ty ? i(o.shapes) : 5 === o.ty && (0 !== (d = o).t.a.length || "m" in d.t.p || (d.singleShape = !0))
          }
      }

      function e(t, e) {
        for (var i = 0, s = e.length; i < s;) {
          if (e[i].id === t) return e[i].layers.__used ? JSON.parse(JSON.stringify(e[i].layers)) : (e[i].layers.__used = !0, e[i].layers);
          i += 1
        }
        return null
      }

      function i(t) {
        var e, r, a;
        for (e = t.length - 1; e >= 0; e -= 1)
          if ("sh" === t[e].ty)
            if (t[e].ks.k.i) s(t[e].ks.k);
            else
              for (a = t[e].ks.k.length, r = 0; r < a; r += 1) t[e].ks.k[r].s && s(t[e].ks.k[r].s[0]), t[e].ks.k[r].e && s(t[e].ks.k[r].e[0]);
        else "gr" === t[e].ty && i(t[e].it)
      }

      function s(t) {
        var e, i = t.i.length;
        for (e = 0; e < i; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
      }

      function r(t, e) {
        var i = e ? e.split(".") : [100, 100, 100];
        return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
      }
      var a, n = function() {
          var t = [4, 4, 14];

          function e(t) {
            var e, i, s, r = t.length;
            for (e = 0; e < r; e += 1) 5 === t[e].ty && (i = t[e], s = void 0, s = i.t.d, i.t.d = {
              k: [{
                s: s,
                t: 0
              }]
            })
          }
          return function(i) {
            if (r(t, i.v) && (e(i.layers), i.assets)) {
              var s, a = i.assets.length;
              for (s = 0; s < a; s += 1) i.assets[s].layers && e(i.assets[s].layers)
            }
          }
        }(),
        o = (a = [4, 7, 99], function(t) {
          if (t.chars && !r(a, t.v)) {
            var e, i, n, o, h, l = t.chars.length;
            for (e = 0; e < l; e += 1)
              if (t.chars[e].data && t.chars[e].data.shapes)
                for (n = (h = t.chars[e].data.shapes[0].it).length, i = 0; i < n; i += 1)(o = h[i].ks.k).__converted || (s(h[i].ks.k), o.__converted = !0)
          }
        }),
        h = function() {
          var t = [5, 7, 15];

          function e(t) {
            var e, i, s, r = t.length;
            for (e = 0; e < r; e += 1) 5 === t[e].ty && (i = t[e], s = void 0, "number" == typeof(s = i.t.p).a && (s.a = {
              a: 0,
              k: s.a
            }), "number" == typeof s.p && (s.p = {
              a: 0,
              k: s.p
            }), "number" == typeof s.r && (s.r = {
              a: 0,
              k: s.r
            }))
          }
          return function(i) {
            if (r(t, i.v) && (e(i.layers), i.assets)) {
              var s, a = i.assets.length;
              for (s = 0; s < a; s += 1) i.assets[s].layers && e(i.assets[s].layers)
            }
          }
        }(),
        l = function() {
          var t = [4, 1, 9];

          function e(t) {
            var i, s, r, a = t.length;
            for (i = 0; i < a; i += 1)
              if ("gr" === t[i].ty) e(t[i].it);
              else if ("fl" === t[i].ty || "st" === t[i].ty)
              if (t[i].c.k && t[i].c.k[0].i)
                for (r = t[i].c.k.length, s = 0; s < r; s += 1) t[i].c.k[s].s && (t[i].c.k[s].s[0] /= 255, t[i].c.k[s].s[1] /= 255, t[i].c.k[s].s[2] /= 255, t[i].c.k[s].s[3] /= 255), t[i].c.k[s].e && (t[i].c.k[s].e[0] /= 255, t[i].c.k[s].e[1] /= 255, t[i].c.k[s].e[2] /= 255, t[i].c.k[s].e[3] /= 255);
              else t[i].c.k[0] /= 255, t[i].c.k[1] /= 255, t[i].c.k[2] /= 255, t[i].c.k[3] /= 255
          }

          function i(t) {
            var i, s = t.length;
            for (i = 0; i < s; i += 1) 4 === t[i].ty && e(t[i].shapes)
          }
          return function(e) {
            if (r(t, e.v) && (i(e.layers), e.assets)) {
              var s, a = e.assets.length;
              for (s = 0; s < a; s += 1) e.assets[s].layers && i(e.assets[s].layers)
            }
          }
        }(),
        p = function() {
          var t = [4, 4, 18];

          function e(t) {
            var i, s, r;
            for (i = t.length - 1; i >= 0; i -= 1)
              if ("sh" === t[i].ty)
                if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
                else
                  for (r = t[i].ks.k.length, s = 0; s < r; s += 1) t[i].ks.k[s].s && (t[i].ks.k[s].s[0].c = t[i].closed), t[i].ks.k[s].e && (t[i].ks.k[s].e[0].c = t[i].closed);
            else "gr" === t[i].ty && e(t[i].it)
          }

          function i(t) {
            var i, s, r, a, n, o, h = t.length;
            for (s = 0; s < h; s += 1) {
              if ((i = t[s]).hasMask) {
                var l = i.masksProperties;
                for (a = l.length, r = 0; r < a; r += 1)
                  if (l[r].pt.k.i) l[r].pt.k.c = l[r].cl;
                  else
                    for (o = l[r].pt.k.length, n = 0; n < o; n += 1) l[r].pt.k[n].s && (l[r].pt.k[n].s[0].c = l[r].cl), l[r].pt.k[n].e && (l[r].pt.k[n].e[0].c = l[r].cl)
              }
              4 === i.ty && e(i.shapes)
            }
          }
          return function(e) {
            if (r(t, e.v) && (i(e.layers), e.assets)) {
              var s, a = e.assets.length;
              for (s = 0; s < a; s += 1) e.assets[s].layers && i(e.assets[s].layers)
            }
          }
        }();
      var c = {
        completeData: function(e, i) {
          e.__complete || (l(e), n(e), o(e), h(e), p(e), t(e.layers, e.assets, i), e.__complete = !0)
        }
      };
      return c.checkColors = l, c.checkChars = o, c.checkPathProperties = h, c.checkShapes = p, c.completeLayers = t, c
    }
    var dataManager = dataFunctionManager();

    function getFontProperties(t) {
      for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", s = "normal", r = e.length, a = 0; a < r; a += 1) switch (e[a].toLowerCase()) {
        case "italic":
          s = "italic";
          break;
        case "bold":
          i = "700";
          break;
        case "black":
          i = "900";
          break;
        case "medium":
          i = "500";
          break;
        case "regular":
        case "normal":
          i = "400";
          break;
        case "light":
        case "thin":
          i = "200"
      }
      return {
        style: s,
        weight: t.fWeight || i
      }
    }
    var FontManager = function() {
        var t = {
            w: 0,
            size: 0,
            shapes: []
          },
          e = [];
        e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
        var i = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"],
          s = [65039, 8205];

        function r(t, e) {
          var i = createTag("span");
          i.setAttribute("aria-hidden", !0), i.style.fontFamily = e;
          var s = createTag("span");
          s.innerText = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(s), document.body.appendChild(i);
          var r = s.offsetWidth;
          return s.style.fontFamily = function(t) {
            var e, i = t.split(","),
              s = i.length,
              r = [];
            for (e = 0; e < s; e += 1) "sans-serif" !== i[e] && "monospace" !== i[e] && r.push(i[e]);
            return r.join(",")
          }(t) + ", " + e, {
            node: s,
            w: r,
            parent: i
          }
        }

        function a(t, e) {
          var i = createNS("text");
          i.style.fontSize = "100px";
          var s = getFontProperties(e);
          return i.setAttribute("font-family", e.fFamily), i.setAttribute("font-style", s.style), i.setAttribute("font-weight", s.weight), i.textContent = "1", e.fClass ? (i.style.fontFamily = "inherit", i.setAttribute("class", e.fClass)) : i.style.fontFamily = e.fFamily, t.appendChild(i), createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, i
        }
        var n = function() {
          this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
        };
        return n.isModifier = function(t, e) {
          var s = t.toString(16) + e.toString(16);
          return -1 !== i.indexOf(s)
        }, n.isZeroWidthJoiner = function(t, e) {
          return e ? t === s[0] && e === s[1] : t === s[1]
        }, n.isCombinedCharacter = function(t) {
          return -1 !== e.indexOf(t)
        }, n.prototype = {
          addChars: function(t) {
            if (t) {
              var e;
              this.chars || (this.chars = []);
              var i, s, r = t.length,
                a = this.chars.length;
              for (e = 0; e < r; e += 1) {
                for (i = 0, s = !1; i < a;) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (s = !0), i += 1;
                s || (this.chars.push(t[e]), a += 1)
              }
            }
          },
          addFonts: function(t, e) {
            if (t) {
              if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
              var i, s = t.list,
                n = s.length,
                o = n;
              for (i = 0; i < n; i += 1) {
                var h, l, p = !0;
                if (s[i].loaded = !1, s[i].monoCase = r(s[i].fFamily, "monospace"), s[i].sansCase = r(s[i].fFamily, "sans-serif"), s[i].fPath) {
                  if ("p" === s[i].fOrigin || 3 === s[i].origin) {
                    if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + s[i].fFamily + '"], style[f-origin="3"][f-family="' + s[i].fFamily + '"]')).length > 0 && (p = !1), p) {
                      var c = createTag("style");
                      c.setAttribute("f-forigin", s[i].fOrigin), c.setAttribute("f-origin", s[i].origin), c.setAttribute("f-family", s[i].fFamily), c.type = "text/css", c.innerText = "@font-face {font-family: " + s[i].fFamily + "; font-style: normal; src: url('" + s[i].fPath + "');}", e.appendChild(c)
                    }
                  } else if ("g" === s[i].fOrigin || 1 === s[i].origin) {
                    for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l += 1) - 1 !== h[l].href.indexOf(s[i].fPath) && (p = !1);
                    if (p) {
                      var u = createTag("link");
                      u.setAttribute("f-forigin", s[i].fOrigin), u.setAttribute("f-origin", s[i].origin), u.type = "text/css", u.rel = "stylesheet", u.href = s[i].fPath, document.body.appendChild(u)
                    }
                  } else if ("t" === s[i].fOrigin || 2 === s[i].origin) {
                    for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l += 1) s[i].fPath === h[l].src && (p = !1);
                    if (p) {
                      var d = createTag("link");
                      d.setAttribute("f-forigin", s[i].fOrigin), d.setAttribute("f-origin", s[i].origin), d.setAttribute("rel", "stylesheet"), d.setAttribute("href", s[i].fPath), e.appendChild(d)
                    }
                  }
                } else s[i].loaded = !0, o -= 1;
                s[i].helper = a(e, s[i]), s[i].cache = {}, this.fonts.push(s[i])
              }
              0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
            } else this.isLoaded = !0
          },
          getCharData: function(e, i, s) {
            for (var r = 0, a = this.chars.length; r < a;) {
              if (this.chars[r].ch === e && this.chars[r].style === i && this.chars[r].fFamily === s) return this.chars[r];
              r += 1
            }
            return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, i, s)), t
          },
          getFontByName: function(t) {
            for (var e = 0, i = this.fonts.length; e < i;) {
              if (this.fonts[e].fName === t) return this.fonts[e];
              e += 1
            }
            return this.fonts[0]
          },
          measureText: function(t, e, i) {
            var s = this.getFontByName(e),
              r = t.charCodeAt(0);
            if (!s.cache[r + 1]) {
              var a = s.helper;
              if (" " === t) {
                a.textContent = "|" + t + "|";
                var n = a.getComputedTextLength();
                a.textContent = "||";
                var o = a.getComputedTextLength();
                s.cache[r + 1] = (n - o) / 100
              } else a.textContent = t, s.cache[r + 1] = a.getComputedTextLength() / 100
            }
            return s.cache[r + 1] * i
          },
          checkLoadedFonts: function() {
            var t, e, i, s = this.fonts.length,
              r = s;
            for (t = 0; t < s; t += 1) this.fonts[t].loaded ? r -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, i = this.fonts[t].monoCase.w, e.offsetWidth !== i ? (r -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, i = this.fonts[t].sansCase.w, e.offsetWidth !== i && (r -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
            0 !== r && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
          },
          setIsLoaded: function() {
            this.isLoaded = !0
          }
        }, n
      }(),
      PropertyFactory = function() {
        var t = initialDefaultFrame,
          e = Math.abs;

        function i(t, e) {
          var i, r = this.offsetTime;
          "multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
          for (var a, n, o, h, l, p, c, u, d = e.lastIndex, m = d, f = this.keyframes.length - 1, y = !0; y;) {
            if (a = this.keyframes[m], n = this.keyframes[m + 1], m === f - 1 && t >= n.t - r) {
              a.h && (a = n), d = 0;
              break
            }
            if (n.t - r > t) {
              d = m;
              break
            }
            m < f - 1 ? m += 1 : (d = 0, y = !1)
          }
          var g, v, _, b, E, P, A, x, S, T, C = n.t - r,
            w = a.t - r;
          if (a.to) {
            a.bezierData || (a.bezierData = bez.buildBezierData(a.s, n.s || a.e, a.to, a.ti));
            var k = a.bezierData;
            if (t >= C || t < w) {
              var M = t >= C ? k.points.length - 1 : 0;
              for (h = k.points[M].point.length, o = 0; o < h; o += 1) i[o] = k.points[M].point[o]
            } else {
              a.__fnct ? u = a.__fnct : (u = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, a.__fnct = u), l = u((t - w) / (C - w));
              var D, I = k.segmentLength * l,
                F = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastAddedLength : 0;
              for (c = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastPoint : 0, y = !0, p = k.points.length; y;) {
                if (F += k.points[c].partialLength, 0 === I || 0 === l || c === k.points.length - 1) {
                  for (h = k.points[c].point.length, o = 0; o < h; o += 1) i[o] = k.points[c].point[o];
                  break
                }
                if (I >= F && I < F + k.points[c + 1].partialLength) {
                  for (D = (I - F) / k.points[c + 1].partialLength, h = k.points[c].point.length, o = 0; o < h; o += 1) i[o] = k.points[c].point[o] + (k.points[c + 1].point[o] - k.points[c].point[o]) * D;
                  break
                }
                c < p - 1 ? c += 1 : y = !1
              }
              e._lastPoint = c, e._lastAddedLength = F - k.points[c].partialLength, e._lastKeyframeIndex = m
            }
          } else {
            var R, O, L, N, V;
            if (f = a.s.length, g = n.s || a.e, this.sh && 1 !== a.h)
              if (t >= C) i[0] = g[0], i[1] = g[1], i[2] = g[2];
              else if (t <= w) i[0] = a.s[0], i[1] = a.s[1], i[2] = a.s[2];
            else {
              var B = s(a.s),
                G = s(g);
              v = i, _ = function(t, e, i) {
                var s, r, a, n, o, h = [],
                  l = t[0],
                  p = t[1],
                  c = t[2],
                  u = t[3],
                  d = e[0],
                  m = e[1],
                  f = e[2],
                  y = e[3];
                return (r = l * d + p * m + c * f + u * y) < 0 && (r = -r, d = -d, m = -m, f = -f, y = -y), 1 - r > 1e-6 ? (s = Math.acos(r), a = Math.sin(s), n = Math.sin((1 - i) * s) / a, o = Math.sin(i * s) / a) : (n = 1 - i, o = i), h[0] = n * l + o * d, h[1] = n * p + o * m, h[2] = n * c + o * f, h[3] = n * u + o * y, h
              }(B, G, (t - w) / (C - w)), b = _[0], E = _[1], P = _[2], A = _[3], x = Math.atan2(2 * E * A - 2 * b * P, 1 - 2 * E * E - 2 * P * P), S = Math.asin(2 * b * E + 2 * P * A), T = Math.atan2(2 * b * A - 2 * E * P, 1 - 2 * b * b - 2 * P * P), v[0] = x / degToRads, v[1] = S / degToRads, v[2] = T / degToRads
            } else
              for (m = 0; m < f; m += 1) 1 !== a.h && (t >= C ? l = 1 : t < w ? l = 0 : (a.o.x.constructor === Array ? (a.__fnct || (a.__fnct = []), a.__fnct[m] ? u = a.__fnct[m] : (R = void 0 === a.o.x[m] ? a.o.x[0] : a.o.x[m], O = void 0 === a.o.y[m] ? a.o.y[0] : a.o.y[m], L = void 0 === a.i.x[m] ? a.i.x[0] : a.i.x[m], N = void 0 === a.i.y[m] ? a.i.y[0] : a.i.y[m], u = BezierFactory.getBezierEasing(R, O, L, N).get, a.__fnct[m] = u)) : a.__fnct ? u = a.__fnct : (R = a.o.x, O = a.o.y, L = a.i.x, N = a.i.y, u = BezierFactory.getBezierEasing(R, O, L, N).get, a.__fnct = u), l = u((t - w) / (C - w)))), g = n.s || a.e, V = 1 === a.h ? a.s[m] : a.s[m] + (g[m] - a.s[m]) * l, "multidimensional" === this.propType ? i[m] = V : i = V
          }
          return e.lastIndex = d, i
        }

        function s(t) {
          var e = t[0] * degToRads,
            i = t[1] * degToRads,
            s = t[2] * degToRads,
            r = Math.cos(e / 2),
            a = Math.cos(i / 2),
            n = Math.cos(s / 2),
            o = Math.sin(e / 2),
            h = Math.sin(i / 2),
            l = Math.sin(s / 2);
          return [o * h * n + r * a * l, o * a * n + r * h * l, r * h * n - o * a * l, r * a * n - o * h * l]
        }

        function r() {
          var e = this.comp.renderedFrame - this.offsetTime,
            i = this.keyframes[0].t - this.offsetTime,
            s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
          if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= s && e >= s || this._caching.lastFrame < i && e < i))) {
            this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
            var r = this.interpolateValue(e, this._caching);
            this.pv = r
          }
          return this._caching.lastFrame = e, this.pv
        }

        function a(t) {
          var i;
          if ("unidimensional" === this.propType) i = t * this.mult, e(this.v - i) > 1e-5 && (this.v = i, this._mdf = !0);
          else
            for (var s = 0, r = this.v.length; s < r;) i = t[s] * this.mult, e(this.v[s] - i) > 1e-5 && (this.v[s] = i, this._mdf = !0), s += 1
        }

        function n() {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
            if (this.lock) this.setVValue(this.pv);
            else {
              var t;
              this.lock = !0, this._mdf = this._isFirstFrame;
              var e = this.effectsSequence.length,
                i = this.kf ? this.pv : this.data.k;
              for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
              this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
        }

        function o(t) {
          this.effectsSequence.push(t), this.container.addDynamicProperty(this)
        }

        function h(t, e, i, s) {
          this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = n, this.setVValue = a, this.addEffect = o
        }

        function l(t, e, i, s) {
          var r;
          this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
          var h = e.k.length;
          for (this.v = createTypedArray("float32", h), this.pv = createTypedArray("float32", h), this.vel = createTypedArray("float32", h), r = 0; r < h; r += 1) this.v[r] = e.k[r] * this.mult, this.pv[r] = e.k[r];
          this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = n, this.setVValue = a, this.addEffect = o
        }

        function p(e, s, h, l) {
          this.propType = "unidimensional", this.keyframes = s.k, this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
            lastFrame: t,
            lastIndex: 0,
            value: 0,
            _lastKeyframeIndex: -1
          }, this.k = !0, this.kf = !0, this.data = s, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = n, this.setVValue = a, this.interpolateValue = i, this.effectsSequence = [r.bind(this)], this.addEffect = o
        }

        function c(e, s, h, l) {
          var p;
          this.propType = "multidimensional";
          var c, u, d, m, f = s.k.length;
          for (p = 0; p < f - 1; p += 1) s.k[p].to && s.k[p].s && s.k[p + 1] && s.k[p + 1].s && (c = s.k[p].s, u = s.k[p + 1].s, d = s.k[p].to, m = s.k[p].ti, (2 === c.length && (c[0] !== u[0] || c[1] !== u[1]) && bez.pointOnLine2D(c[0], c[1], u[0], u[1], c[0] + d[0], c[1] + d[1]) && bez.pointOnLine2D(c[0], c[1], u[0], u[1], u[0] + m[0], u[1] + m[1]) || 3 === c.length && (c[0] !== u[0] || c[1] !== u[1] || c[2] !== u[2]) && bez.pointOnLine3D(c[0], c[1], c[2], u[0], u[1], u[2], c[0] + d[0], c[1] + d[1], c[2] + d[2]) && bez.pointOnLine3D(c[0], c[1], c[2], u[0], u[1], u[2], u[0] + m[0], u[1] + m[1], u[2] + m[2])) && (s.k[p].to = null, s.k[p].ti = null), c[0] === u[0] && c[1] === u[1] && 0 === d[0] && 0 === d[1] && 0 === m[0] && 0 === m[1] && (2 === c.length || c[2] === u[2] && 0 === d[2] && 0 === m[2]) && (s.k[p].to = null, s.k[p].ti = null));
          this.effectsSequence = [r.bind(this)], this.data = s, this.keyframes = s.k, this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.getValue = n, this.setVValue = a, this.interpolateValue = i, this.frameId = -1;
          var y = s.k[0].s.length;
          for (this.v = createTypedArray("float32", y), this.pv = createTypedArray("float32", y), p = 0; p < y; p += 1) this.v[p] = t, this.pv[p] = t;
          this._caching = {
            lastFrame: t,
            lastIndex: 0,
            value: createTypedArray("float32", y)
          }, this.addEffect = o
        }
        return {
          getProp: function(t, e, i, s, r) {
            var a;
            if (e.k.length)
              if ("number" == typeof e.k[0]) a = new l(t, e, s, r);
              else switch (i) {
                case 0:
                  a = new p(t, e, s, r);
                  break;
                case 1:
                  a = new c(t, e, s, r)
              } else a = new h(t, e, s, r);
            return a.effectsSequence.length && r.addDynamicProperty(a), a
          }
        }
      }(),
      TransformPropertyFactory = function() {
        var t = [0, 0];

        function e(t, e, i) {
          if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
              k: [0, 0, 0]
            }, 1, 0, this), e.rx) {
            if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
              var s, r = e.or.k.length;
              for (s = 0; s < r; s += 1) e.or.k[s].to = null, e.or.k[s].ti = null
            }
            this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
          } else this.r = PropertyFactory.getProp(t, e.r || {
            k: 0
          }, 0, degToRads, this);
          e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
            k: [0, 0, 0]
          }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
            k: [100, 100, 100]
          }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
            _mdf: !1,
            v: 1
          }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
        }
        return e.prototype = {
          applyToMatrix: function(t) {
            var e = this._mdf;
            this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
          },
          getValue: function(e) {
            if (this.elem.globalData.frameId !== this.frameId) {
              if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                var i;
                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                  var s, r;
                  if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (s = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), r = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (s = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), r = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (s = this.p.pv, r = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                  else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                    s = [], r = [];
                    var a = this.px,
                      n = this.py;
                    a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (s[0] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0), s[1] = n.getValueAtTime((n.keyframes[0].t + .01) / i, 0), r[0] = a.getValueAtTime(a.keyframes[0].t / i, 0), r[1] = n.getValueAtTime(n.keyframes[0].t / i, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (s[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), s[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0), r[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0), r[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / i, 0)) : (s = [a.pv, n.pv], r[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime), r[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / i, n.offsetTime))
                  } else s = r = t;
                  this.v.rotate(-Math.atan2(s[1] - r[1], s[0] - r[0]))
                }
                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
              }
              this.frameId = this.elem.globalData.frameId
            }
          },
          precalculateMatrix: function() {
            if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
              if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
              }
              this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
            }
          },
          autoOrient: function() {}
        }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t) {
          this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
        }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
          getTransformProperty: function(t, i, s) {
            return new e(t, i, s)
          }
        }
      }();

    function ShapePath() {
      this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
    }
    ShapePath.prototype.setPathData = function(t, e) {
      this.c = t, this.setLength(e);
      for (var i = 0; i < e;) this.v[i] = pointPool.newElement(), this.o[i] = pointPool.newElement(), this.i[i] = pointPool.newElement(), i += 1
    }, ShapePath.prototype.setLength = function(t) {
      for (; this._maxLength < t;) this.doubleArrayLength();
      this._length = t
    }, ShapePath.prototype.doubleArrayLength = function() {
      this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
    }, ShapePath.prototype.setXYAt = function(t, e, i, s, r) {
      var a;
      switch (this._length = Math.max(this._length, s + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
        case "v":
          a = this.v;
          break;
        case "i":
          a = this.i;
          break;
        case "o":
          a = this.o;
          break;
        default:
          a = []
      }(!a[s] || a[s] && !r) && (a[s] = pointPool.newElement()), a[s][0] = t, a[s][1] = e
    }, ShapePath.prototype.setTripleAt = function(t, e, i, s, r, a, n, o) {
      this.setXYAt(t, e, "v", n, o), this.setXYAt(i, s, "o", n, o), this.setXYAt(r, a, "i", n, o)
    }, ShapePath.prototype.reverse = function() {
      var t = new ShapePath;
      t.setPathData(this.c, this._length);
      var e = this.v,
        i = this.o,
        s = this.i,
        r = 0;
      this.c && (t.setTripleAt(e[0][0], e[0][1], s[0][0], s[0][1], i[0][0], i[0][1], 0, !1), r = 1);
      var a, n = this._length - 1,
        o = this._length;
      for (a = r; a < o; a += 1) t.setTripleAt(e[n][0], e[n][1], s[n][0], s[n][1], i[n][0], i[n][1], a, !1), n -= 1;
      return t
    };
    var ShapePropertyFactory = function() {
        var t = -999999;

        function e(t, e, i) {
          var s, r, a, n, o, h, l, p, c, u = i.lastIndex,
            d = this.keyframes;
          if (t < d[0].t - this.offsetTime) s = d[0].s[0], a = !0, u = 0;
          else if (t >= d[d.length - 1].t - this.offsetTime) s = d[d.length - 1].s ? d[d.length - 1].s[0] : d[d.length - 2].e[0], a = !0;
          else {
            for (var m, f, y = u, g = d.length - 1, v = !0; v && (m = d[y], !((f = d[y + 1]).t - this.offsetTime > t));) y < g - 1 ? y += 1 : v = !1;
            if (u = y, !(a = 1 === m.h)) {
              if (t >= f.t - this.offsetTime) p = 1;
              else if (t < m.t - this.offsetTime) p = 0;
              else {
                var _;
                m.__fnct ? _ = m.__fnct : (_ = BezierFactory.getBezierEasing(m.o.x, m.o.y, m.i.x, m.i.y).get, m.__fnct = _), p = _((t - (m.t - this.offsetTime)) / (f.t - this.offsetTime - (m.t - this.offsetTime)))
              }
              r = f.s ? f.s[0] : m.e[0]
            }
            s = m.s[0]
          }
          for (h = e._length, l = s.i[0].length, i.lastIndex = u, n = 0; n < h; n += 1)
            for (o = 0; o < l; o += 1) c = a ? s.i[n][o] : s.i[n][o] + (r.i[n][o] - s.i[n][o]) * p, e.i[n][o] = c, c = a ? s.o[n][o] : s.o[n][o] + (r.o[n][o] - s.o[n][o]) * p, e.o[n][o] = c, c = a ? s.v[n][o] : s.v[n][o] + (r.v[n][o] - s.v[n][o]) * p, e.v[n][o] = c
        }

        function i() {
          var e = this.comp.renderedFrame - this.offsetTime,
            i = this.keyframes[0].t - this.offsetTime,
            s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
            r = this._caching.lastFrame;
          return r !== t && (r < i && e < i || r > s && e > s) || (this._caching.lastIndex = r < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
        }

        function s() {
          this.paths = this.localShapeCollection
        }

        function r(t) {
          (function(t, e) {
            if (t._length !== e._length || t.c !== e.c) return !1;
            var i, s = t._length;
            for (i = 0; i < s; i += 1)
              if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
            return !0
          })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
        }

        function a() {
          if (this.elem.globalData.frameId !== this.frameId)
            if (this.effectsSequence.length)
              if (this.lock) this.setVValue(this.pv);
              else {
                var t, e;
                this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                var i = this.effectsSequence.length;
                for (e = 0; e < i; e += 1) t = this.effectsSequence[e](t);
                this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
              }
          else this._mdf = !1
        }

        function n(t, e, i) {
          this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
          var r = 3 === i ? e.pt.k : e.ks.k;
          this.v = shapePool.clone(r), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = s, this.effectsSequence = []
        }

        function o(t) {
          this.effectsSequence.push(t), this.container.addDynamicProperty(this)
        }

        function h(e, r, a) {
          this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === a ? r.pt.k : r.ks.k, this.k = !0, this.kf = !0;
          var n = this.keyframes[0].s[0].i.length;
          this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, n), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = s, this._caching = {
            lastFrame: t,
            lastIndex: 0
          }, this.effectsSequence = [i.bind(this)]
        }
        n.prototype.interpolateShape = e, n.prototype.getValue = a, n.prototype.setVValue = r, n.prototype.addEffect = o, h.prototype.getValue = a, h.prototype.interpolateShape = e, h.prototype.setVValue = r, h.prototype.addEffect = o;
        var l = function() {
            var t = roundCorner;

            function e(t, e) {
              this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
            }
            return e.prototype = {
              reset: s,
              getValue: function() {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
              },
              convertEllToPath: function() {
                var e = this.p.v[0],
                  i = this.p.v[1],
                  s = this.s.v[0] / 2,
                  r = this.s.v[1] / 2,
                  a = 3 !== this.d,
                  n = this.v;
                n.v[0][0] = e, n.v[0][1] = i - r, n.v[1][0] = a ? e + s : e - s, n.v[1][1] = i, n.v[2][0] = e, n.v[2][1] = i + r, n.v[3][0] = a ? e - s : e + s, n.v[3][1] = i, n.i[0][0] = a ? e - s * t : e + s * t, n.i[0][1] = i - r, n.i[1][0] = a ? e + s : e - s, n.i[1][1] = i - r * t, n.i[2][0] = a ? e + s * t : e - s * t, n.i[2][1] = i + r, n.i[3][0] = a ? e - s : e + s, n.i[3][1] = i + r * t, n.o[0][0] = a ? e + s * t : e - s * t, n.o[0][1] = i - r, n.o[1][0] = a ? e + s : e - s, n.o[1][1] = i + r * t, n.o[2][0] = a ? e - s * t : e + s * t, n.o[2][1] = i + r, n.o[3][0] = a ? e - s : e + s, n.o[3][1] = i - r * t
              }
            }, extendPrototype([DynamicPropertyContainer], e), e
          }(),
          p = function() {
            function t(t, e) {
              this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
            }
            return t.prototype = {
              reset: s,
              getValue: function() {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
              },
              convertStarToPath: function() {
                var t, e, i, s, r = 2 * Math.floor(this.pt.v),
                  a = 2 * Math.PI / r,
                  n = !0,
                  o = this.or.v,
                  h = this.ir.v,
                  l = this.os.v,
                  p = this.is.v,
                  c = 2 * Math.PI * o / (2 * r),
                  u = 2 * Math.PI * h / (2 * r),
                  d = -Math.PI / 2;
                d += this.r.v;
                var m = 3 === this.data.d ? -1 : 1;
                for (this.v._length = 0, t = 0; t < r; t += 1) {
                  i = n ? l : p, s = n ? c : u;
                  var f = (e = n ? o : h) * Math.cos(d),
                    y = e * Math.sin(d),
                    g = 0 === f && 0 === y ? 0 : y / Math.sqrt(f * f + y * y),
                    v = 0 === f && 0 === y ? 0 : -f / Math.sqrt(f * f + y * y);
                  f += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(f, y, f - g * s * i * m, y - v * s * i * m, f + g * s * i * m, y + v * s * i * m, t, !0), n = !n, d += a * m
                }
              },
              convertPolygonToPath: function() {
                var t, e = Math.floor(this.pt.v),
                  i = 2 * Math.PI / e,
                  s = this.or.v,
                  r = this.os.v,
                  a = 2 * Math.PI * s / (4 * e),
                  n = .5 * -Math.PI,
                  o = 3 === this.data.d ? -1 : 1;
                for (n += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                  var h = s * Math.cos(n),
                    l = s * Math.sin(n),
                    p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                    c = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                  h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * a * r * o, l - c * a * r * o, h + p * a * r * o, l + c * a * r * o, t, !0), n += i * o
                }
                this.paths.length = 0, this.paths[0] = this.v
              }
            }, extendPrototype([DynamicPropertyContainer], t), t
          }(),
          c = function() {
            function t(t, e) {
              this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
            }
            return t.prototype = {
              convertRectToPath: function() {
                var t = this.p.v[0],
                  e = this.p.v[1],
                  i = this.s.v[0] / 2,
                  s = this.s.v[1] / 2,
                  r = bmMin(i, s, this.r.v),
                  a = r * (1 - roundCorner);
                this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - s + r, t + i, e - s + r, t + i, e - s + a, 0, !0), this.v.setTripleAt(t + i, e + s - r, t + i, e + s - a, t + i, e + s - r, 1, !0), 0 !== r ? (this.v.setTripleAt(t + i - r, e + s, t + i - r, e + s, t + i - a, e + s, 2, !0), this.v.setTripleAt(t - i + r, e + s, t - i + a, e + s, t - i + r, e + s, 3, !0), this.v.setTripleAt(t - i, e + s - r, t - i, e + s - r, t - i, e + s - a, 4, !0), this.v.setTripleAt(t - i, e - s + r, t - i, e - s + a, t - i, e - s + r, 5, !0), this.v.setTripleAt(t - i + r, e - s, t - i + r, e - s, t - i + a, e - s, 6, !0), this.v.setTripleAt(t + i - r, e - s, t + i - a, e - s, t + i - r, e - s, 7, !0)) : (this.v.setTripleAt(t - i, e + s, t - i + a, e + s, t - i, e + s, 2), this.v.setTripleAt(t - i, e - s, t - i, e - s + a, t - i, e - s, 3))) : (this.v.setTripleAt(t + i, e - s + r, t + i, e - s + a, t + i, e - s + r, 0, !0), 0 !== r ? (this.v.setTripleAt(t + i - r, e - s, t + i - r, e - s, t + i - a, e - s, 1, !0), this.v.setTripleAt(t - i + r, e - s, t - i + a, e - s, t - i + r, e - s, 2, !0), this.v.setTripleAt(t - i, e - s + r, t - i, e - s + r, t - i, e - s + a, 3, !0), this.v.setTripleAt(t - i, e + s - r, t - i, e + s - a, t - i, e + s - r, 4, !0), this.v.setTripleAt(t - i + r, e + s, t - i + r, e + s, t - i + a, e + s, 5, !0), this.v.setTripleAt(t + i - r, e + s, t + i - a, e + s, t + i - r, e + s, 6, !0), this.v.setTripleAt(t + i, e + s - r, t + i, e + s - r, t + i, e + s - a, 7, !0)) : (this.v.setTripleAt(t - i, e - s, t - i + a, e - s, t - i, e - s, 1, !0), this.v.setTripleAt(t - i, e + s, t - i, e + s - a, t - i, e + s, 2, !0), this.v.setTripleAt(t + i, e + s, t + i - a, e + s, t + i, e + s, 3, !0)))
              },
              getValue: function() {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
              },
              reset: s
            }, extendPrototype([DynamicPropertyContainer], t), t
          }(),
          u = {
            getShapeProp: function(t, e, i) {
              var s;
              return 3 === i || 4 === i ? s = (3 === i ? e.pt : e.ks).k.length ? new h(t, e, i) : new n(t, e, i) : 5 === i ? s = new c(t, e) : 6 === i ? s = new l(t, e) : 7 === i && (s = new p(t, e)), s.k && t.addDynamicProperty(s), s
            },
            getConstructorFunction: function() {
              return n
            },
            getKeyframedConstructorFunction: function() {
              return h
            }
          };
        return u
      }(),
      ShapeModifiers = (ob = {}, modifiers = {}, ob.registerModifier = function(t, e) {
        modifiers[t] || (modifiers[t] = e)
      }, ob.getModifier = function(t, e, i) {
        return new modifiers[t](e, i)
      }, ob),
      ob, modifiers;

    function ShapeModifier() {}

    function TrimModifier() {}

    function RoundCornersModifier() {}

    function PuckerAndBloatModifier() {}

    function RepeaterModifier() {}

    function ShapeCollection() {
      this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
    }

    function DashProperty(t, e, i, s) {
      var r;
      this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(s);
      var a, n = e.length || 0;
      for (r = 0; r < n; r += 1) a = PropertyFactory.getProp(t, e[r].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[r] = {
        n: e[r].n,
        p: a
      };
      this.k || this.getValue(!0), this._isAnimated = this.k
    }

    function GradientProperty(t, e, i) {
      this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
      var s = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
      this.o = createTypedArray("float32", s), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = s, this.initDynamicPropertyContainer(i), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
    }
    ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
      if (!this.closed) {
        t.sh.container.addDynamicProperty(t.sh);
        var e = {
          shape: t.sh,
          data: t,
          localShapeCollection: shapeCollectionPool.newShapeCollection()
        };
        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
      }
    }, ShapeModifier.prototype.init = function(t, e) {
      this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
    }, ShapeModifier.prototype.processKeys = function() {
      this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
    }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
      this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
    }, TrimModifier.prototype.addShapeToModifier = function(t) {
      t.pathsData = []
    }, TrimModifier.prototype.calculateShapeEdges = function(t, e, i, s, r) {
      var a = [];
      e <= 1 ? a.push({
        s: t,
        e: e
      }) : t >= 1 ? a.push({
        s: t - 1,
        e: e - 1
      }) : (a.push({
        s: t,
        e: 1
      }), a.push({
        s: 0,
        e: e - 1
      }));
      var n, o, h = [],
        l = a.length;
      for (n = 0; n < l; n += 1) {
        var p, c;
        (o = a[n]).e * r < s || o.s * r > s + i || (p = o.s * r <= s ? 0 : (o.s * r - s) / i, c = o.e * r >= s + i ? 1 : (o.e * r - s) / i, h.push([p, c]))
      }
      return h.length || h.push([0, 0]), h
    }, TrimModifier.prototype.releasePathsData = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) segmentsLengthPool.release(t[e]);
      return t.length = 0, t
    }, TrimModifier.prototype.processShapes = function(t) {
      var e, i, s, r;
      if (this._mdf || t) {
        var a = this.o.v % 360 / 360;
        if (a < 0 && (a += 1), (e = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (i = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
          var n = e;
          e = i, i = n
        }
        e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i
      } else e = this.sValue, i = this.eValue;
      var o, h, l, p, c, u = this.shapes.length,
        d = 0;
      if (i === e)
        for (r = 0; r < u; r += 1) this.shapes[r].localShapeCollection.releaseShapes(), this.shapes[r].shape._mdf = !0, this.shapes[r].shape.paths = this.shapes[r].localShapeCollection, this._mdf && (this.shapes[r].pathsData.length = 0);
      else if (1 === i && 0 === e || 0 === i && 1 === e) {
        if (this._mdf)
          for (r = 0; r < u; r += 1) this.shapes[r].pathsData.length = 0, this.shapes[r].shape._mdf = !0
      } else {
        var m, f, y = [];
        for (r = 0; r < u; r += 1)
          if ((m = this.shapes[r]).shape._mdf || this._mdf || t || 2 === this.m) {
            if (h = (s = m.shape.paths)._length, c = 0, !m.shape._mdf && m.pathsData.length) c = m.totalShapeLength;
            else {
              for (l = this.releasePathsData(m.pathsData), o = 0; o < h; o += 1) p = bez.getSegmentsLength(s.shapes[o]), l.push(p), c += p.totalLength;
              m.totalShapeLength = c, m.pathsData = l
            }
            d += c, m.shape._mdf = !0
          } else m.shape.paths = m.localShapeCollection;
        var g, v = e,
          _ = i,
          b = 0;
        for (r = u - 1; r >= 0; r -= 1)
          if ((m = this.shapes[r]).shape._mdf) {
            for ((f = m.localShapeCollection).releaseShapes(), 2 === this.m && u > 1 ? (g = this.calculateShapeEdges(e, i, m.totalShapeLength, b, d), b += m.totalShapeLength) : g = [
                [v, _]
              ], h = g.length, o = 0; o < h; o += 1) {
              v = g[o][0], _ = g[o][1], y.length = 0, _ <= 1 ? y.push({
                s: m.totalShapeLength * v,
                e: m.totalShapeLength * _
              }) : v >= 1 ? y.push({
                s: m.totalShapeLength * (v - 1),
                e: m.totalShapeLength * (_ - 1)
              }) : (y.push({
                s: m.totalShapeLength * v,
                e: m.totalShapeLength
              }), y.push({
                s: 0,
                e: m.totalShapeLength * (_ - 1)
              }));
              var E = this.addShapes(m, y[0]);
              if (y[0].s !== y[0].e) {
                if (y.length > 1)
                  if (m.shape.paths.shapes[m.shape.paths._length - 1].c) {
                    var P = E.pop();
                    this.addPaths(E, f), E = this.addShapes(m, y[1], P)
                  } else this.addPaths(E, f), E = this.addShapes(m, y[1]);
                this.addPaths(E, f)
              }
            }
            m.shape.paths = f
          }
      }
    }, TrimModifier.prototype.addPaths = function(t, e) {
      var i, s = t.length;
      for (i = 0; i < s; i += 1) e.addShape(t[i])
    }, TrimModifier.prototype.addSegment = function(t, e, i, s, r, a, n) {
      r.setXYAt(e[0], e[1], "o", a), r.setXYAt(i[0], i[1], "i", a + 1), n && r.setXYAt(t[0], t[1], "v", a), r.setXYAt(s[0], s[1], "v", a + 1)
    }, TrimModifier.prototype.addSegmentFromArray = function(t, e, i, s) {
      e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), s && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1)
    }, TrimModifier.prototype.addShapes = function(t, e, i) {
      var s, r, a, n, o, h, l, p, c = t.pathsData,
        u = t.shape.paths.shapes,
        d = t.shape.paths._length,
        m = 0,
        f = [],
        y = !0;
      for (i ? (o = i._length, p = i._length) : (i = shapePool.newElement(), o = 0, p = 0), f.push(i), s = 0; s < d; s += 1) {
        for (h = c[s].lengths, i.c = u[s].c, a = u[s].c ? h.length : h.length + 1, r = 1; r < a; r += 1)
          if (m + (n = h[r - 1]).addedLength < e.s) m += n.addedLength, i.c = !1;
          else {
            if (m > e.e) {
              i.c = !1;
              break
            }
            e.s <= m && e.e >= m + n.addedLength ? (this.addSegment(u[s].v[r - 1], u[s].o[r - 1], u[s].i[r], u[s].v[r], i, o, y), y = !1) : (l = bez.getNewSegment(u[s].v[r - 1], u[s].v[r], u[s].o[r - 1], u[s].i[r], (e.s - m) / n.addedLength, (e.e - m) / n.addedLength, h[r - 1]), this.addSegmentFromArray(l, i, o, y), y = !1, i.c = !1), m += n.addedLength, o += 1
          } if (u[s].c && h.length) {
          if (n = h[r - 1], m <= e.e) {
            var g = h[r - 1].addedLength;
            e.s <= m && e.e >= m + g ? (this.addSegment(u[s].v[r - 1], u[s].o[r - 1], u[s].i[0], u[s].v[0], i, o, y), y = !1) : (l = bez.getNewSegment(u[s].v[r - 1], u[s].v[0], u[s].o[r - 1], u[s].i[0], (e.s - m) / g, (e.e - m) / g, h[r - 1]), this.addSegmentFromArray(l, i, o, y), y = !1, i.c = !1)
          } else i.c = !1;
          m += n.addedLength, o += 1
        }
        if (i._length && (i.setXYAt(i.v[p][0], i.v[p][1], "i", p), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), m > e.e) break;
        s < d - 1 && (i = shapePool.newElement(), y = !0, f.push(i), o = 0)
      }
      return f
    }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
    }, RoundCornersModifier.prototype.processPath = function(t, e) {
      var i, s = shapePool.newElement();
      s.c = t.c;
      var r, a, n, o, h, l, p, c, u, d, m, f, y = t._length,
        g = 0;
      for (i = 0; i < y; i += 1) r = t.v[i], n = t.o[i], a = t.i[i], r[0] === n[0] && r[1] === n[1] && r[0] === a[0] && r[1] === a[1] ? 0 !== i && i !== y - 1 || t.c ? (o = 0 === i ? t.v[y - 1] : t.v[i - 1], l = (h = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = m = r[0] + (o[0] - r[0]) * l, c = f = r[1] - (r[1] - o[1]) * l, u = p - (p - r[0]) * roundCorner, d = c - (c - r[1]) * roundCorner, s.setTripleAt(p, c, u, d, m, f, g), g += 1, o = i === y - 1 ? t.v[0] : t.v[i + 1], l = (h = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = u = r[0] + (o[0] - r[0]) * l, c = d = r[1] + (o[1] - r[1]) * l, m = p - (p - r[0]) * roundCorner, f = c - (c - r[1]) * roundCorner, s.setTripleAt(p, c, u, d, m, f, g), g += 1) : (s.setTripleAt(r[0], r[1], n[0], n[1], a[0], a[1], g), g += 1) : (s.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], g), g += 1);
      return s
    }, RoundCornersModifier.prototype.processShapes = function(t) {
      var e, i, s, r, a, n, o = this.shapes.length,
        h = this.rd.v;
      if (0 !== h)
        for (i = 0; i < o; i += 1) {
          if (n = (a = this.shapes[i]).localShapeCollection, a.shape._mdf || this._mdf || t)
            for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, r = a.shape.paths._length, s = 0; s < r; s += 1) n.addShape(this.processPath(e[s], h));
          a.shape.paths = a.localShapeCollection
        }
      this.dynamicProperties.length || (this._mdf = !1)
    }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
    }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
      var i = e / 100,
        s = [0, 0],
        r = t._length,
        a = 0;
      for (a = 0; a < r; a += 1) s[0] += t.v[a][0], s[1] += t.v[a][1];
      s[0] /= r, s[1] /= r;
      var n, o, h, l, p, c, u = shapePool.newElement();
      for (u.c = t.c, a = 0; a < r; a += 1) n = t.v[a][0] + (s[0] - t.v[a][0]) * i, o = t.v[a][1] + (s[1] - t.v[a][1]) * i, h = t.o[a][0] + (s[0] - t.o[a][0]) * -i, l = t.o[a][1] + (s[1] - t.o[a][1]) * -i, p = t.i[a][0] + (s[0] - t.i[a][0]) * -i, c = t.i[a][1] + (s[1] - t.i[a][1]) * -i, u.setTripleAt(n, o, h, l, p, c, a);
      return u
    }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
      var e, i, s, r, a, n, o = this.shapes.length,
        h = this.amount.v;
      if (0 !== h)
        for (i = 0; i < o; i += 1) {
          if (n = (a = this.shapes[i]).localShapeCollection, a.shape._mdf || this._mdf || t)
            for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, r = a.shape.paths._length, s = 0; s < r; s += 1) n.addShape(this.processPath(e[s], h));
          a.shape.paths = a.localShapeCollection
        }
      this.dynamicProperties.length || (this._mdf = !1)
    }, ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
    }, RepeaterModifier.prototype.applyTransforms = function(t, e, i, s, r, a) {
      var n = a ? -1 : 1,
        o = s.s.v[0] + (1 - s.s.v[0]) * (1 - r),
        h = s.s.v[1] + (1 - s.s.v[1]) * (1 - r);
      t.translate(s.p.v[0] * n * r, s.p.v[1] * n * r, s.p.v[2]), e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), e.rotate(-s.r.v * n * r), e.translate(s.a.v[0], s.a.v[1], s.a.v[2]), i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), i.scale(a ? 1 / o : o, a ? 1 / h : h), i.translate(s.a.v[0], s.a.v[1], s.a.v[2])
    }, RepeaterModifier.prototype.init = function(t, e, i, s) {
      for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = s, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0;) i -= 1, this._elements.unshift(e[i]);
      this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
    }, RepeaterModifier.prototype.resetElements = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
    }, RepeaterModifier.prototype.cloneElements = function(t) {
      var e = JSON.parse(JSON.stringify(t));
      return this.resetElements(e), e
    }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
      var i, s = t.length;
      for (i = 0; i < s; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
    }, RepeaterModifier.prototype.processShapes = function(t) {
      var e, i, s, r, a, n = !1;
      if (this._mdf || t) {
        var o, h = Math.ceil(this.c.v);
        if (this._groups.length < h) {
          for (; this._groups.length < h;) {
            var l = {
              it: this.cloneElements(this._elements),
              ty: "gr"
            };
            l.it.push({
              a: {
                a: 0,
                ix: 1,
                k: [0, 0]
              },
              nm: "Transform",
              o: {
                a: 0,
                ix: 7,
                k: 100
              },
              p: {
                a: 0,
                ix: 2,
                k: [0, 0]
              },
              r: {
                a: 1,
                ix: 6,
                k: [{
                  s: 0,
                  e: 0,
                  t: 0
                }, {
                  s: 0,
                  e: 0,
                  t: 1
                }]
              },
              s: {
                a: 0,
                ix: 3,
                k: [100, 100]
              },
              sa: {
                a: 0,
                ix: 5,
                k: 0
              },
              sk: {
                a: 0,
                ix: 4,
                k: 0
              },
              ty: "tr"
            }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1
          }
          this.elem.reloadShapes(), n = !0
        }
        for (a = 0, s = 0; s <= this._groups.length - 1; s += 1) {
          if (o = a < h, this._groups[s]._render = o, this.changeGroupRender(this._groups[s].it, o), !o) {
            var p = this.elemsData[s].it,
              c = p[p.length - 1];
            0 !== c.transform.op.v ? (c.transform.op._mdf = !0, c.transform.op.v = 0) : c.transform.op._mdf = !1
          }
          a += 1
        }
        this._currentCopies = h;
        var u = this.o.v,
          d = u % 1,
          m = u > 0 ? Math.floor(u) : Math.ceil(u),
          f = this.pMatrix.props,
          y = this.rMatrix.props,
          g = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
        var v, _, b = 0;
        if (u > 0) {
          for (; b < m;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), b += 1;
          d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, d, !1), b += d)
        } else if (u < 0) {
          for (; b > m;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), b -= 1;
          d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -d, !0), b -= d)
        }
        for (s = 1 === this.data.m ? 0 : this._currentCopies - 1, r = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
          if (_ = (i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (s / (this._currentCopies - 1)), 0 !== b) {
            for ((0 !== s && 1 === r || s !== this._currentCopies - 1 && -1 === r) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), v = 0; v < _; v += 1) i[v] = this.matrix.props[v];
            this.matrix.reset()
          } else
            for (this.matrix.reset(), v = 0; v < _; v += 1) i[v] = this.matrix.props[v];
          b += 1, a -= 1, s += r
        }
      } else
        for (a = this._currentCopies, s = 0, r = 1; a;) i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, s += r;
      return n
    }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) {
      this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
    }, ShapeCollection.prototype.releaseShapes = function() {
      var t;
      for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
      this._length = 0
    }, DashProperty.prototype.getValue = function(t) {
      if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
        var e = 0,
          i = this.dataProps.length;
        for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
      }
    }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function(t, e) {
      for (var i = 0, s = this.o.length / 2; i < s;) {
        if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01) return !1;
        i += 1
      }
      return !0
    }, GradientProperty.prototype.checkCollapsable = function() {
      if (this.o.length / 2 != this.c.length / 4) return !1;
      if (this.data.k.k[0].s)
        for (var t = 0, e = this.data.k.k.length; t < e;) {
          if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
          t += 1
        } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
      return !0
    }, GradientProperty.prototype.getValue = function(t) {
      if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
        var e, i, s, r = 4 * this.data.p;
        for (e = 0; e < r; e += 1) i = e % 4 == 0 ? 100 : 255, s = Math.round(this.prop.v[e] * i), this.c[e] !== s && (this.c[e] = s, this._cmdf = !t);
        if (this.o.length)
          for (r = this.prop.v.length, e = 4 * this.data.p; e < r; e += 1) i = e % 2 == 0 ? 100 : 1, s = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== s && (this.o[e - 4 * this.data.p] = s, this._omdf = !t);
        this._mdf = !t
      }
    }, extendPrototype([DynamicPropertyContainer], GradientProperty);
    var buildShapeString = function(t, e, i, s) {
        if (0 === e) return "";
        var r, a = t.o,
          n = t.i,
          o = t.v,
          h = " M" + s.applyToPointStringified(o[0][0], o[0][1]);
        for (r = 1; r < e; r += 1) h += " C" + s.applyToPointStringified(a[r - 1][0], a[r - 1][1]) + " " + s.applyToPointStringified(n[r][0], n[r][1]) + " " + s.applyToPointStringified(o[r][0], o[r][1]);
        return i && e && (h += " C" + s.applyToPointStringified(a[r - 1][0], a[r - 1][1]) + " " + s.applyToPointStringified(n[0][0], n[0][1]) + " " + s.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h
      },
      audioControllerFactory = function() {
        function t(t) {
          this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
        }
        return t.prototype = {
            addAudio: function(t) {
              this.audios.push(t)
            },
            pause: function() {
              var t, e = this.audios.length;
              for (t = 0; t < e; t += 1) this.audios[t].pause()
            },
            resume: function() {
              var t, e = this.audios.length;
              for (t = 0; t < e; t += 1) this.audios[t].resume()
            },
            setRate: function(t) {
              var e, i = this.audios.length;
              for (e = 0; e < i; e += 1) this.audios[e].setRate(t)
            },
            createAudio: function(t) {
              return this.audioFactory ? this.audioFactory(t) : Howl ? new Howl({
                src: [t]
              }) : {
                isPlaying: !1,
                play: function() {
                  this.isPlaying = !0
                },
                seek: function() {
                  this.isPlaying = !1
                },
                playing: function() {},
                rate: function() {},
                setVolume: function() {}
              }
            },
            setAudioFactory: function(t) {
              this.audioFactory = t
            },
            setVolume: function(t) {
              this._volume = t, this._updateVolume()
            },
            mute: function() {
              this._isMuted = !0, this._updateVolume()
            },
            unmute: function() {
              this._isMuted = !1, this._updateVolume()
            },
            getVolume: function() {
              return this._volume
            },
            _updateVolume: function() {
              var t, e = this.audios.length;
              for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
            }
          },
          function() {
            return new t
          }
      }(),
      ImagePreloader = function() {
        var t = function() {
          var t = createTag("canvas");
          t.width = 1, t.height = 1;
          var e = t.getContext("2d");
          return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
        }();

        function e() {
          this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
        }

        function i() {
          this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
        }

        function s(t, e, i) {
          var s = "";
          if (t.e) s = t.p;
          else if (e) {
            var r = t.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), s = e + r
          } else s = i, s += t.u ? t.u : "", s += t.p;
          return s
        }

        function r(t) {
          var e = 0,
            i = setInterval(function() {
              (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(i)), e += 1
            }.bind(this), 50)
        }

        function a(t) {
          var e = {
              assetData: t
            },
            i = s(t, this.assetsPath, this.path);
          return assetLoader.load(i, function(t) {
            e.img = t, this._footageLoaded()
          }.bind(this), function() {
            e.img = {}, this._footageLoaded()
          }.bind(this)), e
        }

        function n() {
          this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = r.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
        }
        return n.prototype = {
          loadAssets: function(t, e) {
            var i;
            this.imagesLoadedCb = e;
            var s = t.length;
            for (i = 0; i < s; i += 1) t[i].layers || (t[i].t && "seq" !== t[i].t ? 3 === t[i].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[i]))))
          },
          setAssetsPath: function(t) {
            this.assetsPath = t || ""
          },
          setPath: function(t) {
            this.path = t || ""
          },
          loadedImages: function() {
            return this.totalImages === this.loadedAssets
          },
          loadedFootages: function() {
            return this.totalFootages === this.loadedFootagesCount
          },
          destroy: function() {
            this.imagesLoadedCb = null, this.images.length = 0
          },
          getAsset: function(t) {
            for (var e = 0, i = this.images.length; e < i;) {
              if (this.images[e].assetData === t) return this.images[e].img;
              e += 1
            }
            return null
          },
          createImgData: function(e) {
            var i = s(e, this.assetsPath, this.path),
              r = createTag("img");
            r.crossOrigin = "anonymous", r.addEventListener("load", this._imageLoaded, !1), r.addEventListener("error", function() {
              a.img = t, this._imageLoaded()
            }.bind(this), !1), r.src = i;
            var a = {
              img: r,
              assetData: e
            };
            return a
          },
          createImageData: function(e) {
            var i = s(e, this.assetsPath, this.path),
              r = createNS("image");
            isSafari ? this.testImageLoaded(r) : r.addEventListener("load", this._imageLoaded, !1), r.addEventListener("error", function() {
              a.img = t, this._imageLoaded()
            }.bind(this), !1), r.setAttributeNS("http://www.w3.org/1999/xlink", "href", i), this._elementHelper.append ? this._elementHelper.append(r) : this._elementHelper.appendChild(r);
            var a = {
              img: r,
              assetData: e
            };
            return a
          },
          imageLoaded: e,
          footageLoaded: i,
          setCacheType: function(t, e) {
            "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
          }
        }, n
      }(),
      featureSupport = function() {
        var t = {
          maskType: !0
        };
        return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), t
      }(),
      filtersFactory = function() {
        var t = {
          createFilter: function(t, e) {
            var i = createNS("filter");
            return i.setAttribute("id", t), !0 !== e && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%")), i
          },
          createAlphaToLuminanceFilter: function() {
            var t = createNS("feColorMatrix");
            return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
          }
        };
        return t
      }(),
      assetLoader = function() {
        function t(t) {
          return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
        }
        return {
          load: function(e, i, s) {
            var r, a = new XMLHttpRequest;
            try {
              a.responseType = "json"
            } catch (t) {}
            a.onreadystatechange = function() {
              if (4 === a.readyState)
                if (200 === a.status) r = t(a), i(r);
                else try {
                  r = t(a), i(r)
                } catch (t) {
                  s && s(t)
                }
            }, a.open("GET", e, !0), a.send()
          }
        }
      }();

    function TextAnimatorProperty(t, e, i) {
      this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
        alignment: {}
      }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i)
    }

    function TextAnimatorDataProperty(t, e, i) {
      var s = {
          propType: !1
        },
        r = PropertyFactory.getProp,
        a = e.a;
      this.a = {
        r: a.r ? r(t, a.r, 0, degToRads, i) : s,
        rx: a.rx ? r(t, a.rx, 0, degToRads, i) : s,
        ry: a.ry ? r(t, a.ry, 0, degToRads, i) : s,
        sk: a.sk ? r(t, a.sk, 0, degToRads, i) : s,
        sa: a.sa ? r(t, a.sa, 0, degToRads, i) : s,
        s: a.s ? r(t, a.s, 1, .01, i) : s,
        a: a.a ? r(t, a.a, 1, 0, i) : s,
        o: a.o ? r(t, a.o, 0, .01, i) : s,
        p: a.p ? r(t, a.p, 1, 0, i) : s,
        sw: a.sw ? r(t, a.sw, 0, 0, i) : s,
        sc: a.sc ? r(t, a.sc, 1, 0, i) : s,
        fc: a.fc ? r(t, a.fc, 1, 0, i) : s,
        fh: a.fh ? r(t, a.fh, 0, 0, i) : s,
        fs: a.fs ? r(t, a.fs, 0, .01, i) : s,
        fb: a.fb ? r(t, a.fb, 0, .01, i) : s,
        t: a.t ? r(t, a.t, 0, 0, i) : s
      }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t
    }

    function LetterProps(t, e, i, s, r, a) {
      this.o = t, this.sw = e, this.sc = i, this.fc = s, this.m = r, this.p = a, this._mdf = {
        o: !0,
        sw: !!e,
        sc: !!i,
        fc: !!s,
        m: !0,
        p: !0
      }
    }

    function TextProperty(t, e) {
      this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
        ascent: 0,
        boxWidth: this.defaultBoxWidth,
        f: "",
        fStyle: "",
        fWeight: "",
        fc: "",
        j: "",
        justifyOffset: "",
        l: [],
        lh: 0,
        lineWidths: [],
        ls: "",
        of: "",
        s: "",
        sc: "",
        sw: 0,
        t: 0,
        tr: 0,
        sz: 0,
        ps: null,
        fillColorAnim: !1,
        strokeColorAnim: !1,
        strokeWidthAnim: !1,
        yOffset: 0,
        finalSize: 0,
        finalText: [],
        finalLineHeight: 0,
        __complete: !1
      }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
    }
    TextAnimatorProperty.prototype.searchProperties = function() {
      var t, e, i = this._textData.a.length,
        s = PropertyFactory.getProp;
      for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
      this._textData.p && "m" in this._textData.p ? (this._pathData = {
        a: s(this._elem, this._textData.p.a, 0, 0, this),
        f: s(this._elem, this._textData.p.f, 0, 0, this),
        l: s(this._elem, this._textData.p.l, 0, 0, this),
        r: s(this._elem, this._textData.p.r, 0, 0, this),
        p: s(this._elem, this._textData.p.p, 0, 0, this),
        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
      }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this)
    }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
      if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
        this._isFirstFrame = !1;
        var i, s, r, a, n, o, h, l, p, c, u, d, m, f, y, g, v, _, b, E = this._moreOptions.alignment.v,
          P = this._animatorsData,
          A = this._textData,
          x = this.mHelper,
          S = this._renderType,
          T = this.renderedLetters.length,
          C = t.l;
        if (this._hasMaskedPath) {
          if (b = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
            var w, k = b.v;
            for (this._pathData.r.v && (k = k.reverse()), n = {
                tLength: 0,
                segments: []
              }, a = k._length - 1, g = 0, r = 0; r < a; r += 1) w = bez.buildBezierData(k.v[r], k.v[r + 1], [k.o[r][0] - k.v[r][0], k.o[r][1] - k.v[r][1]], [k.i[r + 1][0] - k.v[r + 1][0], k.i[r + 1][1] - k.v[r + 1][1]]), n.tLength += w.segmentLength, n.segments.push(w), g += w.segmentLength;
            r = a, b.v.c && (w = bez.buildBezierData(k.v[r], k.v[0], [k.o[r][0] - k.v[r][0], k.o[r][1] - k.v[r][1]], [k.i[0][0] - k.v[0][0], k.i[0][1] - k.v[0][1]]), n.tLength += w.segmentLength, n.segments.push(w), g += w.segmentLength), this._pathData.pi = n
          }
          if (n = this._pathData.pi, o = this._pathData.f.v, u = 0, c = 1, l = 0, p = !0, f = n.segments, o < 0 && b.v.c)
            for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), c = (m = f[u = f.length - 1].points).length - 1; o < 0;) o += m[c].partialLength, (c -= 1) < 0 && (c = (m = f[u -= 1].points).length - 1);
          d = (m = f[u].points)[c - 1], y = (h = m[c]).partialLength
        }
        a = C.length, i = 0, s = 0;
        var M, D, I, F, R, O = 1.2 * t.finalSize * .714,
          L = !0;
        I = P.length;
        var N, V, B, G, z, H, K, j, U, q, W, Y, $ = -1,
          X = o,
          Z = u,
          Q = c,
          J = -1,
          tt = "",
          et = this.defaultPropsArray;
        if (2 === t.j || 1 === t.j) {
          var it = 0,
            st = 0,
            rt = 2 === t.j ? -.5 : -1,
            at = 0,
            nt = !0;
          for (r = 0; r < a; r += 1)
            if (C[r].n) {
              for (it && (it += st); at < r;) C[at].animatorJustifyOffset = it, at += 1;
              it = 0, nt = !0
            } else {
              for (D = 0; D < I; D += 1)(M = P[D].a).t.propType && (nt && 2 === t.j && (st += M.t.v * rt), (R = P[D].s.getMult(C[r].anIndexes[D], A.a[D].s.totalChars)).length ? it += M.t.v * R[0] * rt : it += M.t.v * R * rt);
              nt = !1
            } for (it && (it += st); at < r;) C[at].animatorJustifyOffset = it, at += 1
        }
        for (r = 0; r < a; r += 1) {
          if (x.reset(), G = 1, C[r].n) i = 0, s += t.yOffset, s += L ? 1 : 0, o = X, L = !1, this._hasMaskedPath && (c = Q, d = (m = f[u = Z].points)[c - 1], y = (h = m[c]).partialLength, l = 0), tt = "", W = "", U = "", Y = "", et = this.defaultPropsArray;
          else {
            if (this._hasMaskedPath) {
              if (J !== C[r].line) {
                switch (t.j) {
                  case 1:
                    o += g - t.lineWidths[C[r].line];
                    break;
                  case 2:
                    o += (g - t.lineWidths[C[r].line]) / 2
                }
                J = C[r].line
              }
              $ !== C[r].ind && (C[$] && (o += C[$].extra), o += C[r].an / 2, $ = C[r].ind), o += E[0] * C[r].an * .005;
              var ot = 0;
              for (D = 0; D < I; D += 1)(M = P[D].a).p.propType && ((R = P[D].s.getMult(C[r].anIndexes[D], A.a[D].s.totalChars)).length ? ot += M.p.v[0] * R[0] : ot += M.p.v[0] * R), M.a.propType && ((R = P[D].s.getMult(C[r].anIndexes[D], A.a[D].s.totalChars)).length ? ot += M.a.v[0] * R[0] : ot += M.a.v[0] * R);
              for (p = !0, this._pathData.a.v && (o = .5 * C[0].an + (g - this._pathData.f.v - .5 * C[0].an - .5 * C[C.length - 1].an) * $ / (a - 1), o += this._pathData.f.v); p;) l + y >= o + ot || !m ? (v = (o + ot - l) / h.partialLength, V = d.point[0] + (h.point[0] - d.point[0]) * v, B = d.point[1] + (h.point[1] - d.point[1]) * v, x.translate(-E[0] * C[r].an * .005, -E[1] * O * .01), p = !1) : m && (l += h.partialLength, (c += 1) >= m.length && (c = 0, f[u += 1] ? m = f[u].points : b.v.c ? (c = 0, m = f[u = 0].points) : (l -= h.partialLength, m = null)), m && (d = h, y = (h = m[c]).partialLength));
              N = C[r].an / 2 - C[r].add, x.translate(-N, 0, 0)
            } else N = C[r].an / 2 - C[r].add, x.translate(-N, 0, 0), x.translate(-E[0] * C[r].an * .005, -E[1] * O * .01, 0);
            for (D = 0; D < I; D += 1)(M = P[D].a).t.propType && (R = P[D].s.getMult(C[r].anIndexes[D], A.a[D].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? R.length ? o += M.t.v * R[0] : o += M.t.v * R : R.length ? i += M.t.v * R[0] : i += M.t.v * R));
            for (t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && (z = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (K = [t.fc[0], t.fc[1], t.fc[2]]), D = 0; D < I; D += 1)(M = P[D].a).a.propType && ((R = P[D].s.getMult(C[r].anIndexes[D], A.a[D].s.totalChars)).length ? x.translate(-M.a.v[0] * R[0], -M.a.v[1] * R[1], M.a.v[2] * R[2]) : x.translate(-M.a.v[0] * R, -M.a.v[1] * R, M.a.v[2] * R));
            for (D = 0; D < I; D += 1)(M = P[D].a).s.propType && ((R = P[D].s.getMult(C[r].anIndexes[D], A.a[D].s.totalChars)).length ? x.scale(1 + (M.s.v[0] - 1) * R[0], 1 + (M.s.v[1] - 1) * R[1], 1) : x.scale(1 + (M.s.v[0] - 1) * R, 1 + (M.s.v[1] - 1) * R, 1));
            for (D = 0; D < I; D += 1) {
              if (M = P[D].a, R = P[D].s.getMult(C[r].anIndexes[D], A.a[D].s.totalChars), M.sk.propType && (R.length ? x.skewFromAxis(-M.sk.v * R[0], M.sa.v * R[1]) : x.skewFromAxis(-M.sk.v * R, M.sa.v * R)), M.r.propType && (R.length ? x.rotateZ(-M.r.v * R[2]) : x.rotateZ(-M.r.v * R)), M.ry.propType && (R.length ? x.rotateY(M.ry.v * R[1]) : x.rotateY(M.ry.v * R)), M.rx.propType && (R.length ? x.rotateX(M.rx.v * R[0]) : x.rotateX(M.rx.v * R)), M.o.propType && (R.length ? G += (M.o.v * R[0] - G) * R[0] : G += (M.o.v * R - G) * R), t.strokeWidthAnim && M.sw.propType && (R.length ? H += M.sw.v * R[0] : H += M.sw.v * R), t.strokeColorAnim && M.sc.propType)
                for (j = 0; j < 3; j += 1) R.length ? z[j] += (M.sc.v[j] - z[j]) * R[0] : z[j] += (M.sc.v[j] - z[j]) * R;
              if (t.fillColorAnim && t.fc) {
                if (M.fc.propType)
                  for (j = 0; j < 3; j += 1) R.length ? K[j] += (M.fc.v[j] - K[j]) * R[0] : K[j] += (M.fc.v[j] - K[j]) * R;
                M.fh.propType && (K = R.length ? addHueToRGB(K, M.fh.v * R[0]) : addHueToRGB(K, M.fh.v * R)), M.fs.propType && (K = R.length ? addSaturationToRGB(K, M.fs.v * R[0]) : addSaturationToRGB(K, M.fs.v * R)), M.fb.propType && (K = R.length ? addBrightnessToRGB(K, M.fb.v * R[0]) : addBrightnessToRGB(K, M.fb.v * R))
              }
            }
            for (D = 0; D < I; D += 1)(M = P[D].a).p.propType && (R = P[D].s.getMult(C[r].anIndexes[D], A.a[D].s.totalChars), this._hasMaskedPath ? R.length ? x.translate(0, M.p.v[1] * R[0], -M.p.v[2] * R[1]) : x.translate(0, M.p.v[1] * R, -M.p.v[2] * R) : R.length ? x.translate(M.p.v[0] * R[0], M.p.v[1] * R[1], -M.p.v[2] * R[2]) : x.translate(M.p.v[0] * R, M.p.v[1] * R, -M.p.v[2] * R));
            if (t.strokeWidthAnim && (U = H < 0 ? 0 : H), t.strokeColorAnim && (q = "rgb(" + Math.round(255 * z[0]) + "," + Math.round(255 * z[1]) + "," + Math.round(255 * z[2]) + ")"), t.fillColorAnim && t.fc && (W = "rgb(" + Math.round(255 * K[0]) + "," + Math.round(255 * K[1]) + "," + Math.round(255 * K[2]) + ")"), this._hasMaskedPath) {
              if (x.translate(0, -t.ls), x.translate(0, E[1] * O * .01 + s, 0), this._pathData.p.v) {
                _ = (h.point[1] - d.point[1]) / (h.point[0] - d.point[0]);
                var ht = 180 * Math.atan(_) / Math.PI;
                h.point[0] < d.point[0] && (ht += 180), x.rotate(-ht * Math.PI / 180)
              }
              x.translate(V, B, 0), o -= E[0] * C[r].an * .005, C[r + 1] && $ !== C[r + 1].ind && (o += C[r].an / 2, o += .001 * t.tr * t.finalSize)
            } else {
              switch (x.translate(i, s, 0), t.ps && x.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                case 1:
                  x.translate(C[r].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[C[r].line]), 0, 0);
                  break;
                case 2:
                  x.translate(C[r].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[C[r].line]) / 2, 0, 0)
              }
              x.translate(0, -t.ls), x.translate(N, 0, 0), x.translate(E[0] * C[r].an * .005, E[1] * O * .01, 0), i += C[r].l + .001 * t.tr * t.finalSize
            }
            "html" === S ? tt = x.toCSS() : "svg" === S ? tt = x.to2dCSS() : et = [x.props[0], x.props[1], x.props[2], x.props[3], x.props[4], x.props[5], x.props[6], x.props[7], x.props[8], x.props[9], x.props[10], x.props[11], x.props[12], x.props[13], x.props[14], x.props[15]], Y = G
          }
          T <= r ? (F = new LetterProps(Y, U, q, W, tt, et), this.renderedLetters.push(F), T += 1, this.lettersChangedFlag = !0) : (F = this.renderedLetters[r], this.lettersChangedFlag = F.update(Y, U, q, W, tt, et) || this.lettersChangedFlag)
        }
      }
    }, TextAnimatorProperty.prototype.getValue = function() {
      this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
    }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function(t, e, i, s, r, a) {
      this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
      var n = !1;
      return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, n = !0), this.fc !== s && (this.fc = s, this._mdf.fc = !0, n = !0), this.m !== r && (this.m = r, this._mdf.m = !0, n = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, n = !0), n
    }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      return t
    }, TextProperty.prototype.setCurrentData = function(t) {
      t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
    }, TextProperty.prototype.searchProperty = function() {
      return this.searchKeyframes()
    }, TextProperty.prototype.searchKeyframes = function() {
      return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
    }, TextProperty.prototype.addEffect = function(t) {
      this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
    }, TextProperty.prototype.getValue = function(t) {
      if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
        var e = this.currentData,
          i = this.keysIndex;
        if (this.lock) this.setCurrentData(this.currentData);
        else {
          var s;
          this.lock = !0, this._mdf = !1;
          var r = this.effectsSequence.length,
            a = t || this.data.d.k[this.keysIndex].s;
          for (s = 0; s < r; s += 1) a = i !== this.keysIndex ? this.effectsSequence[s](a, a.t) : this.effectsSequence[s](this.currentData, a.t);
          e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
        }
      }
    }, TextProperty.prototype.getKeyframeValue = function() {
      for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, s = t.length; i <= s - 1 && !(i === s - 1 || t[i + 1].t > e);) i += 1;
      return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s
    }, TextProperty.prototype.buildFinalText = function(t) {
      for (var e, i, s = [], r = 0, a = t.length, n = !1; r < a;) e = t.charCodeAt(r), FontManager.isCombinedCharacter(e) ? s[s.length - 1] += t.charAt(r) : e >= 55296 && e <= 56319 ? (i = t.charCodeAt(r + 1)) >= 56320 && i <= 57343 ? (n || FontManager.isModifier(e, i) ? (s[s.length - 1] += t.substr(r, 2), n = !1) : s.push(t.substr(r, 2)), r += 1) : s.push(t.charAt(r)) : e > 56319 ? (i = t.charCodeAt(r + 1), FontManager.isZeroWidthJoiner(e, i) ? (n = !0, s[s.length - 1] += t.substr(r, 2), r += 1) : s.push(t.charAt(r))) : FontManager.isZeroWidthJoiner(e) ? (s[s.length - 1] += t.charAt(r), n = !0) : s.push(t.charAt(r)), r += 1;
      return s
    }, TextProperty.prototype.completeTextData = function(t) {
      t.__complete = !0;
      var e, i, s, r, a, n, o, h = this.elem.globalData.fontManager,
        l = this.data,
        p = [],
        c = 0,
        u = l.m.g,
        d = 0,
        m = 0,
        f = 0,
        y = [],
        g = 0,
        v = 0,
        _ = h.getFontByName(t.f),
        b = 0,
        E = getFontProperties(_);
      t.fWeight = E.weight, t.fStyle = E.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
      var P, A = t.tr / 1e3 * t.finalSize;
      if (t.sz)
        for (var x, S, T = !0, C = t.sz[0], w = t.sz[1]; T;) {
          x = 0, g = 0, i = (S = this.buildFinalText(t.t)).length, A = t.tr / 1e3 * t.finalSize;
          var k = -1;
          for (e = 0; e < i; e += 1) P = S[e].charCodeAt(0), s = !1, " " === S[e] ? k = e : 13 !== P && 3 !== P || (g = 0, s = !0, x += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(S[e], _.fStyle, _.fFamily), b = s ? 0 : o.w * t.finalSize / 100) : b = h.measureText(S[e], t.f, t.finalSize), g + b > C && " " !== S[e] ? (-1 === k ? i += 1 : e = k, x += t.finalLineHeight || 1.2 * t.finalSize, S.splice(e, k === e ? 1 : 0, "\r"), k = -1, g = 0) : (g += b, g += A);
          x += _.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && w < x ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = S, i = t.finalText.length, T = !1)
        }
      g = -A, b = 0;
      var M, D = 0;
      for (e = 0; e < i; e += 1)
        if (s = !1, 13 === (P = (M = t.finalText[e]).charCodeAt(0)) || 3 === P ? (D = 0, y.push(g), v = g > v ? g : v, g = -2 * A, r = "", s = !0, f += 1) : r = M, h.chars ? (o = h.getCharData(M, _.fStyle, h.getFontByName(t.f).fFamily), b = s ? 0 : o.w * t.finalSize / 100) : b = h.measureText(r, t.f, t.finalSize), " " === M ? D += b + A : (g += b + A + D, D = 0), p.push({
            l: b,
            an: b,
            add: d,
            n: s,
            anIndexes: [],
            val: r,
            line: f,
            animatorJustifyOffset: 0
          }), 2 == u) {
          if (d += b, "" === r || " " === r || e === i - 1) {
            for ("" !== r && " " !== r || (d -= b); m <= e;) p[m].an = d, p[m].ind = c, p[m].extra = b, m += 1;
            c += 1, d = 0
          }
        } else if (3 == u) {
        if (d += b, "" === r || e === i - 1) {
          for ("" === r && (d -= b); m <= e;) p[m].an = d, p[m].ind = c, p[m].extra = b, m += 1;
          d = 0, c += 1
        }
      } else p[c].ind = c, p[c].extra = 0, c += 1;
      if (t.l = p, v = g > v ? g : v, y.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
      else switch (t.boxWidth = v, t.j) {
        case 1:
          t.justifyOffset = -t.boxWidth;
          break;
        case 2:
          t.justifyOffset = -t.boxWidth / 2;
          break;
        default:
          t.justifyOffset = 0
      }
      t.lineWidths = y;
      var I, F, R, O, L = l.a;
      n = L.length;
      var N = [];
      for (a = 0; a < n; a += 1) {
        for ((I = L[a]).a.sc && (t.strokeColorAnim = !0), I.a.sw && (t.strokeWidthAnim = !0), (I.a.fc || I.a.fh || I.a.fs || I.a.fb) && (t.fillColorAnim = !0), O = 0, R = I.s.b, e = 0; e < i; e += 1)(F = p[e]).anIndexes[a] = O, (1 == R && "" !== F.val || 2 == R && "" !== F.val && " " !== F.val || 3 == R && (F.n || " " == F.val || e == i - 1) || 4 == R && (F.n || e == i - 1)) && (1 === I.s.rn && N.push(O), O += 1);
        l.a[a].s.totalChars = O;
        var V, B = -1;
        if (1 === I.s.rn)
          for (e = 0; e < i; e += 1) B != (F = p[e]).anIndexes[a] && (B = F.anIndexes[a], V = N.splice(Math.floor(Math.random() * N.length), 1)[0]), F.anIndexes[a] = V
      }
      t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = _.ascent * t.finalSize / 100
    }, TextProperty.prototype.updateDocumentData = function(t, e) {
      e = void 0 === e ? this.keysIndex : e;
      var i = this.copyData({}, this.data.d.k[e].s);
      i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.elem.addDynamicProperty(this)
    }, TextProperty.prototype.recalculate = function(t) {
      var e = this.data.d.k[t].s;
      e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
    }, TextProperty.prototype.canResizeFont = function(t) {
      this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
    }, TextProperty.prototype.setMinimumFontSize = function(t) {
      this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
    };
    var TextSelectorProp = function() {
        var t = Math.max,
          e = Math.min,
          i = Math.floor;

        function s(t, e) {
          this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
            k: 0
          }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
            v: 100
          }, this.o = PropertyFactory.getProp(t, e.o || {
            k: 0
          }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
            k: 0
          }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
            k: 0
          }, 0, 0, this), this.sm = PropertyFactory.getProp(t, e.sm || {
            k: 100
          }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
        }
        return s.prototype = {
          getMult: function(s) {
            this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
            var r = 0,
              a = 0,
              n = 1,
              o = 1;
            this.ne.v > 0 ? r = this.ne.v / 100 : a = -this.ne.v / 100, this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
            var h = BezierFactory.getBezierEasing(r, a, n, o).get,
              l = 0,
              p = this.finalS,
              c = this.finalE,
              u = this.data.sh;
            if (2 === u) l = h(l = c === p ? s >= c ? 1 : 0 : t(0, e(.5 / (c - p) + (s - p) / (c - p), 1)));
            else if (3 === u) l = h(l = c === p ? s >= c ? 0 : 1 : 1 - t(0, e(.5 / (c - p) + (s - p) / (c - p), 1)));
            else if (4 === u) c === p ? l = 0 : (l = t(0, e(.5 / (c - p) + (s - p) / (c - p), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5), l = h(l);
            else if (5 === u) {
              if (c === p) l = 0;
              else {
                var d = c - p,
                  m = -d / 2 + (s = e(t(0, s + .5 - p), c - p)),
                  f = d / 2;
                l = Math.sqrt(1 - m * m / (f * f))
              }
              l = h(l)
            } else 6 === u ? (c === p ? l = 0 : (s = e(t(0, s + .5 - p), c - p), l = (1 + Math.cos(Math.PI + 2 * Math.PI * s / (c - p))) / 2), l = h(l)) : (s >= i(p) && (l = t(0, e(s - p < 0 ? e(c, 1) - (p - s) : c - s, 1))), l = h(l));
            if (100 !== this.sm.v) {
              var y = .01 * this.sm.v;
              0 === y && (y = 1e-8);
              var g = .5 - .5 * y;
              l < g ? l = 0 : (l = (l - g) / y) > 1 && (l = 1)
            }
            return l * this.a.v
          },
          getValue: function(t) {
            this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
            var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
              i = this.o.v / e,
              s = this.s.v / e + i,
              r = this.e.v / e + i;
            if (s > r) {
              var a = s;
              s = r, r = a
            }
            this.finalS = s, this.finalE = r
          }
        }, extendPrototype([DynamicPropertyContainer], s), {
          getTextSelectorProp: function(t, e, i) {
            return new s(t, e, i)
          }
        }
      }(),
      poolFactory = function(t, e, i) {
        var s = 0,
          r = t,
          a = createSizedArray(r);
        return {
          newElement: function() {
            return s ? a[s -= 1] : e()
          },
          release: function(t) {
            s === r && (a = pooling.double(a), r *= 2), i && i(t), a[s] = t, s += 1
          }
        }
      },
      pooling = {
        double: function(t) {
          return t.concat(createSizedArray(t.length))
        }
      },
      pointPool = poolFactory(8, (function() {
        return createTypedArray("float32", 2)
      })),
      shapePool = (factory = poolFactory(4, (function() {
        return new ShapePath
      }), (function(t) {
        var e, i = t._length;
        for (e = 0; e < i; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
        t._length = 0, t.c = !1
      })), factory.clone = function(t) {
        var e, i = factory.newElement(),
          s = void 0 === t._length ? t.v.length : t._length;
        for (i.setLength(s), i.c = t.c, e = 0; e < s; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
        return i
      }, factory),
      factory, shapeCollectionPool = function() {
        var t = {
            newShapeCollection: function() {
              return e ? s[e -= 1] : new ShapeCollection
            },
            release: function(t) {
              var r, a = t._length;
              for (r = 0; r < a; r += 1) shapePool.release(t.shapes[r]);
              t._length = 0, e === i && (s = pooling.double(s), i *= 2), s[e] = t, e += 1
            }
          },
          e = 0,
          i = 4,
          s = createSizedArray(i);
        return t
      }(),
      segmentsLengthPool = poolFactory(8, (function() {
        return {
          lengths: [],
          totalLength: 0
        }
      }), (function(t) {
        var e, i = t.lengths.length;
        for (e = 0; e < i; e += 1) bezierLengthPool.release(t.lengths[e]);
        t.lengths.length = 0
      })),
      bezierLengthPool = poolFactory(8, (function() {
        return {
          addedLength: 0,
          percents: createTypedArray("float32", defaultCurveSegments),
          lengths: createTypedArray("float32", defaultCurveSegments)
        }
      })),
      markerParser = function() {
        function t(t) {
          for (var e, i = t.split("\r\n"), s = {}, r = 0, a = 0; a < i.length; a += 1) 2 === (e = i[a].split(":")).length && (s[e[0]] = e[1].trim(), r += 1);
          if (0 === r) throw new Error;
          return s
        }
        return function(e) {
          for (var i = [], s = 0; s < e.length; s += 1) {
            var r = e[s],
              a = {
                time: r.tm,
                duration: r.dr
              };
            try {
              a.payload = JSON.parse(e[s].cm)
            } catch (i) {
              try {
                a.payload = t(e[s].cm)
              } catch (t) {
                a.payload = {
                  name: e[s]
                }
              }
            }
            i.push(a)
          }
          return i
        }
      }();

    function BaseRenderer() {}

    function SVGRenderer(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
      var i = "";
      if (e && e.title) {
        var s = createNS("title"),
          r = createElementID();
        s.setAttribute("id", r), s.textContent = e.title, this.svgElement.appendChild(s), i += r
      }
      if (e && e.description) {
        var a = createNS("desc"),
          n = createElementID();
        a.setAttribute("id", n), a.textContent = e.description, this.svgElement.appendChild(a), i += " " + n
      }
      i && this.svgElement.setAttribute("aria-labelledby", i);
      var o = createNS("defs");
      this.svgElement.appendChild(o);
      var h = createNS("g");
      this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
        progressiveLoad: e && e.progressiveLoad || !1,
        hideOnTransparent: !(e && !1 === e.hideOnTransparent),
        viewBoxOnly: e && e.viewBoxOnly || !1,
        viewBoxSize: e && e.viewBoxSize || !1,
        className: e && e.className || "",
        id: e && e.id || "",
        focusable: e && e.focusable,
        filterSize: {
          width: e && e.filterSize && e.filterSize.width || "100%",
          height: e && e.filterSize && e.filterSize.height || "100%",
          x: e && e.filterSize && e.filterSize.x || "0%",
          y: e && e.filterSize && e.filterSize.y || "0%"
        }
      }, this.globalData = {
        _mdf: !1,
        frameNum: -1,
        defs: o,
        renderConfig: this.renderConfig
      }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
    }

    function CanvasRenderer(t, e) {
      this.animationItem = t, this.renderConfig = {
        clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
        context: e && e.context || null,
        progressiveLoad: e && e.progressiveLoad || !1,
        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
        className: e && e.className || "",
        id: e && e.id || ""
      }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
        frameNum: -1,
        _mdf: !1,
        renderConfig: this.renderConfig,
        currentGlobalAlpha: -1
      }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
    }

    function HybridRenderer(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
        className: e && e.className || "",
        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
        hideOnTransparent: !(e && !1 === e.hideOnTransparent),
        filterSize: {
          width: e && e.filterSize && e.filterSize.width || "400%",
          height: e && e.filterSize && e.filterSize.height || "400%",
          x: e && e.filterSize && e.filterSize.x || "-100%",
          y: e && e.filterSize && e.filterSize.y || "-100%"
        }
      }, this.globalData = {
        _mdf: !1,
        frameNum: -1,
        renderConfig: this.renderConfig
      }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
    }

    function MaskElement(t, e, i) {
      this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
      var s, r, a = this.globalData.defs,
        n = this.masksProperties ? this.masksProperties.length : 0;
      this.viewData = createSizedArray(n), this.solidPath = "";
      var o, h, l, p, c, u, d = this.masksProperties,
        m = 0,
        f = [],
        y = createElementID(),
        g = "clipPath",
        v = "clip-path";
      for (s = 0; s < n; s += 1)
        if (("a" !== d[s].mode && "n" !== d[s].mode || d[s].inv || 100 !== d[s].o.k || d[s].o.x) && (g = "mask", v = "mask"), "s" !== d[s].mode && "i" !== d[s].mode || 0 !== m ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), f.push(l)), r = createNS("path"), "n" === d[s].mode) this.viewData[s] = {
          op: PropertyFactory.getProp(this.element, d[s].o, 0, .01, this.element),
          prop: ShapePropertyFactory.getShapeProp(this.element, d[s], 3),
          elem: r,
          lastPath: ""
        }, a.appendChild(r);
        else {
          var _;
          if (m += 1, r.setAttribute("fill", "s" === d[s].mode ? "#000000" : "#ffffff"), r.setAttribute("clip-rule", "nonzero"), 0 !== d[s].x.k ? (g = "mask", v = "mask", u = PropertyFactory.getProp(this.element, d[s].x, 0, null, this.element), _ = createElementID(), (p = createNS("filter")).setAttribute("id", _), (c = createNS("feMorphology")).setAttribute("operator", "erode"), c.setAttribute("in", "SourceGraphic"), c.setAttribute("radius", "0"), p.appendChild(c), a.appendChild(p), r.setAttribute("stroke", "s" === d[s].mode ? "#000000" : "#ffffff")) : (c = null, u = null), this.storedData[s] = {
              elem: r,
              x: u,
              expan: c,
              lastPath: "",
              lastOperator: "",
              filterId: _,
              lastRadius: 0
            }, "i" === d[s].mode) {
            h = f.length;
            var b = createNS("g");
            for (o = 0; o < h; o += 1) b.appendChild(f[o]);
            var E = createNS("mask");
            E.setAttribute("mask-type", "alpha"), E.setAttribute("id", y + "_" + m), E.appendChild(r), a.appendChild(E), b.setAttribute("mask", "url(" + locationHref + "#" + y + "_" + m + ")"), f.length = 0, f.push(b)
          } else f.push(r);
          d[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = {
            elem: r,
            lastPath: "",
            op: PropertyFactory.getProp(this.element, d[s].o, 0, .01, this.element),
            prop: ShapePropertyFactory.getShapeProp(this.element, d[s], 3),
            invRect: l
          }, this.viewData[s].prop.k || this.drawPath(d[s], this.viewData[s].prop.v, this.viewData[s])
        } for (this.maskElement = createNS(g), n = f.length, s = 0; s < n; s += 1) this.maskElement.appendChild(f[s]);
      m > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + y + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
    }

    function HierarchyElement() {}

    function FrameElement() {}

    function TransformElement() {}

    function RenderableElement() {}

    function RenderableDOMElement() {}

    function ProcessedElement(t, e) {
      this.elem = t, this.pos = e
    }

    function SVGStyleData(t, e) {
      this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
    }

    function SVGShapeData(t, e, i) {
      this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
      for (var s = 0, r = t.length; s < r;) {
        if (t[s].mProps.dynamicProperties.length) {
          this._isAnimated = !0;
          break
        }
        s += 1
      }
    }

    function SVGTransformData(t, e, i) {
      this.transform = {
        mProps: t,
        op: e,
        container: i
      }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
    }

    function SVGStrokeStyleData(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated
    }

    function SVGFillStyleData(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i
    }

    function SVGGradientFillStyleData(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i)
    }

    function SVGGradientStrokeStyleData(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated
    }

    function ShapeGroupData() {
      this.it = [], this.prevViewData = [], this.gr = createNS("g")
    }
    BaseRenderer.prototype.checkLayers = function(t) {
      var e, i, s = this.layers.length;
      for (this.completeLayers = !0, e = s - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
      this.checkPendingElements()
    }, BaseRenderer.prototype.createItem = function(t) {
      switch (t.ty) {
        case 2:
          return this.createImage(t);
        case 0:
          return this.createComp(t);
        case 1:
          return this.createSolid(t);
        case 3:
          return this.createNull(t);
        case 4:
          return this.createShape(t);
        case 5:
          return this.createText(t);
        case 6:
          return this.createAudio(t);
        case 13:
          return this.createCamera(t);
        case 15:
          return this.createFootage(t);
        default:
          return this.createNull(t)
      }
    }, BaseRenderer.prototype.createCamera = function() {
      throw new Error("You're using a 3d camera. Try the html renderer.")
    }, BaseRenderer.prototype.createAudio = function(t) {
      return new AudioElement(t, this.globalData, this)
    }, BaseRenderer.prototype.createFootage = function(t) {
      return new FootageElement(t, this.globalData, this)
    }, BaseRenderer.prototype.buildAllItems = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) this.buildItem(t);
      this.checkPendingElements()
    }, BaseRenderer.prototype.includeLayers = function(t) {
      var e;
      this.completeLayers = !1;
      var i, s = t.length,
        r = this.layers.length;
      for (e = 0; e < s; e += 1)
        for (i = 0; i < r;) {
          if (this.layers[i].id === t[e].id) {
            this.layers[i] = t[e];
            break
          }
          i += 1
        }
    }, BaseRenderer.prototype.setProjectInterface = function(t) {
      this.globalData.projectInterface = t
    }, BaseRenderer.prototype.initItems = function() {
      this.globalData.progressiveLoad || this.buildAllItems()
    }, BaseRenderer.prototype.buildElementParenting = function(t, e, i) {
      for (var s = this.elements, r = this.layers, a = 0, n = r.length; a < n;) r[a].ind == e && (s[a] && !0 !== s[a] ? (i.push(s[a]), s[a].setAsParent(), void 0 !== r[a].parent ? this.buildElementParenting(t, r[a].parent, i) : t.setHierarchy(i)) : (this.buildItem(a), this.addPendingElement(t))), a += 1
    }, BaseRenderer.prototype.addPendingElement = function(t) {
      this.pendingElements.push(t)
    }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1)
        if (t[e].xt) {
          var s = this.createComp(t[e]);
          s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
        }
    }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
      this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
        w: t.w,
        h: t.h
      }
    }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function(t) {
      return new NullElement(t, this.globalData, this)
    }, SVGRenderer.prototype.createShape = function(t) {
      return new SVGShapeElement(t, this.globalData, this)
    }, SVGRenderer.prototype.createText = function(t) {
      return new SVGTextLottieElement(t, this.globalData, this)
    }, SVGRenderer.prototype.createImage = function(t) {
      return new IImageElement(t, this.globalData, this)
    }, SVGRenderer.prototype.createComp = function(t) {
      return new SVGCompElement(t, this.globalData, this)
    }, SVGRenderer.prototype.createSolid = function(t) {
      return new ISolidElement(t, this.globalData, this)
    }, SVGRenderer.prototype.configAnimation = function(t) {
      this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
      var e = this.globalData.defs;
      this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
      var i = createNS("clipPath"),
        s = createNS("rect");
      s.setAttribute("width", t.w), s.setAttribute("height", t.h), s.setAttribute("x", 0), s.setAttribute("y", 0);
      var r = createElementID();
      i.setAttribute("id", r), i.appendChild(s), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + r + ")"), e.appendChild(i), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
    }, SVGRenderer.prototype.destroy = function() {
      var t;
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
      var e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null
    }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) {
      var e = this.elements;
      if (!e[t] && 99 !== this.layers[t].ty) {
        e[t] = !0;
        var i = this.createItem(this.layers[t]);
        e[t] = i, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? i.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(i)))
      }
    }, SVGRenderer.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length;) {
        var t = this.pendingElements.pop();
        if (t.checkParenting(), t.data.tt)
          for (var e = 0, i = this.elements.length; e < i;) {
            if (this.elements[e] === t) {
              t.setMatte(this.elements[e - 1].layerId);
              break
            }
            e += 1
          }
      }
    }, SVGRenderer.prototype.renderFrame = function(t) {
      if (this.renderedFrame !== t && !this.destroyed) {
        var e;
        null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
        var i = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
        if (this.globalData._mdf)
          for (e = 0; e < i; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
      }
    }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
      var i = t.getBaseElement();
      if (i) {
        for (var s, r = 0; r < e;) this.elements[r] && !0 !== this.elements[r] && this.elements[r].getBaseElement() && (s = this.elements[r].getBaseElement()), r += 1;
        s ? this.layerElement.insertBefore(i, s) : this.layerElement.appendChild(i)
      }
    }, SVGRenderer.prototype.hide = function() {
      this.layerElement.style.display = "none"
    }, SVGRenderer.prototype.show = function() {
      this.layerElement.style.display = "block"
    }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t) {
      return new CVShapeElement(t, this.globalData, this)
    }, CanvasRenderer.prototype.createText = function(t) {
      return new CVTextElement(t, this.globalData, this)
    }, CanvasRenderer.prototype.createImage = function(t) {
      return new CVImageElement(t, this.globalData, this)
    }, CanvasRenderer.prototype.createComp = function(t) {
      return new CVCompElement(t, this.globalData, this)
    }, CanvasRenderer.prototype.createSolid = function(t) {
      return new CVSolidElement(t, this.globalData, this)
    }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t) {
      if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
        if (this.renderConfig.clearCanvas) {
          this.transformMat.cloneFromProps(t);
          var e = this.contextData.cTr.props;
          this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
          var i = this.contextData.cTr.props;
          this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13])
        } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
    }, CanvasRenderer.prototype.ctxOpacity = function(t) {
      if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
      this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO)
    }, CanvasRenderer.prototype.reset = function() {
      this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
    }, CanvasRenderer.prototype.save = function(t) {
      if (this.renderConfig.clearCanvas) {
        t && this.canvasContext.save();
        var e, i = this.contextData.cTr.props;
        this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
        var s = this.contextData.saved[this.contextData.cArrPos];
        for (e = 0; e < 16; e += 1) s[e] = i[e];
        this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
      } else this.canvasContext.save()
    }, CanvasRenderer.prototype.restore = function(t) {
      if (this.renderConfig.clearCanvas) {
        t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
        var e, i = this.contextData.saved[this.contextData.cArrPos],
          s = this.contextData.cTr.props;
        for (e = 0; e < 16; e += 1) s[e] = i[e];
        this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), i = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = i, this.globalData.currentGlobalAlpha !== i && (this.canvasContext.globalAlpha = i, this.globalData.currentGlobalAlpha = i)
      } else this.canvasContext.restore()
    }, CanvasRenderer.prototype.configAnimation = function(t) {
      if (this.animationItem.wrapper) {
        this.animationItem.container = createTag("canvas");
        var e = this.animationItem.container.style;
        e.width = "100%", e.height = "100%";
        var i = "0px 0px 0px";
        e.transformOrigin = i, e.mozTransformOrigin = i, e.webkitTransformOrigin = i, e["-webkit-transform"] = i, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
      } else this.canvasContext = this.renderConfig.context;
      this.data = t, this.layers = t.layers, this.transformCanvas = {
        w: t.w,
        h: t.h,
        sx: 0,
        sy: 0,
        tx: 0,
        ty: 0
      }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
    }, CanvasRenderer.prototype.updateContainerSize = function() {
      var t, e, i, s;
      if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
        var r = this.renderConfig.preserveAspectRatio.split(" "),
          a = r[1] || "meet",
          n = r[0] || "xMidYMid",
          o = n.substr(0, 4),
          h = n.substr(4);
        i = t / e, (s = this.transformCanvas.w / this.transformCanvas.h) > i && "meet" === a || s < i && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (s < i && "meet" === a || s > i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (s < i && "meet" === a || s > i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h && (s > i && "meet" === a || s < i && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (s > i && "meet" === a || s < i && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
      } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
      this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
    }, CanvasRenderer.prototype.destroy = function() {
      var t;
      for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
      this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
    }, CanvasRenderer.prototype.renderFrame = function(t, e) {
      if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
        var i;
        this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
        var s = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), i = 0; i < s; i += 1)(this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
        if (this.globalData._mdf) {
          for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = s - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
          !0 !== this.renderConfig.clearCanvas && this.restore()
        }
      }
    }, CanvasRenderer.prototype.buildItem = function(t) {
      var e = this.elements;
      if (!e[t] && 99 !== this.layers[t].ty) {
        var i = this.createItem(this.layers[t], this, this.globalData);
        e[t] = i, i.initExpressions()
      }
    }, CanvasRenderer.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
    }, CanvasRenderer.prototype.hide = function() {
      this.animationItem.container.style.display = "none"
    }, CanvasRenderer.prototype.show = function() {
      this.animationItem.container.style.display = "block"
    }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
    }, HybridRenderer.prototype.appendElementInPos = function(t, e) {
      var i = t.getBaseElement();
      if (i) {
        var s = this.layers[e];
        if (s.ddd && this.supports3d) this.addTo3dContainer(i, e);
        else if (this.threeDElements) this.addTo3dContainer(i, e);
        else {
          for (var r, a, n = 0; n < e;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement && (a = this.elements[n], r = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : a.getBaseElement()) || r), n += 1;
          r ? s.ddd && this.supports3d || this.layerElement.insertBefore(i, r) : s.ddd && this.supports3d || this.layerElement.appendChild(i)
        }
      }
    }, HybridRenderer.prototype.createShape = function(t) {
      return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
    }, HybridRenderer.prototype.createText = function(t) {
      return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
    }, HybridRenderer.prototype.createCamera = function(t) {
      return this.camera = new HCameraElement(t, this.globalData, this), this.camera
    }, HybridRenderer.prototype.createImage = function(t) {
      return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
    }, HybridRenderer.prototype.createComp = function(t) {
      return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
    }, HybridRenderer.prototype.createSolid = function(t) {
      return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
    }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
      for (var e = 0, i = this.threeDElements.length; e < i;) {
        if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
        e += 1
      }
      return null
    }, HybridRenderer.prototype.createThreeDContainer = function(t, e) {
      var i, s, r = createTag("div");
      styleDiv(r);
      var a = createTag("div");
      if (styleDiv(a), "3d" === e) {
        (i = r.style).width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
        var n = "50% 50%";
        i.webkitTransformOrigin = n, i.mozTransformOrigin = n, i.transformOrigin = n;
        var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
        (s = a.style).transform = o, s.webkitTransform = o
      }
      r.appendChild(a);
      var h = {
        container: a,
        perspectiveElem: r,
        startPos: t,
        endPos: t,
        type: e
      };
      return this.threeDElements.push(h), h
    }, HybridRenderer.prototype.build3dContainers = function() {
      var t, e, i = this.layers.length,
        s = "";
      for (t = 0; t < i; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== s && (s = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== s && (s = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
      for (t = (i = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
    }, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
      for (var i = 0, s = this.threeDElements.length; i < s;) {
        if (e <= this.threeDElements[i].endPos) {
          for (var r, a = this.threeDElements[i].startPos; a < e;) this.elements[a] && this.elements[a].getBaseElement && (r = this.elements[a].getBaseElement()), a += 1;
          r ? this.threeDElements[i].container.insertBefore(t, r) : this.threeDElements[i].container.appendChild(t);
          break
        }
        i += 1
      }
    }, HybridRenderer.prototype.configAnimation = function(t) {
      var e = createTag("div"),
        i = this.animationItem.wrapper,
        s = e.style;
      s.width = t.w + "px", s.height = t.h + "px", this.resizerElem = e, styleDiv(e), s.transformStyle = "flat", s.mozTransformStyle = "flat", s.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), i.appendChild(e), s.overflow = "hidden";
      var r = createNS("svg");
      r.setAttribute("width", "1"), r.setAttribute("height", "1"), styleDiv(r), this.resizerElem.appendChild(r);
      var a = createNS("defs");
      r.appendChild(a), this.data = t, this.setupGlobalData(t, r), this.globalData.defs = a, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
    }, HybridRenderer.prototype.destroy = function() {
      var t;
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
      var e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t += 1) this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null
    }, HybridRenderer.prototype.updateContainerSize = function() {
      var t, e, i, s, r = this.animationItem.wrapper.offsetWidth,
        a = this.animationItem.wrapper.offsetHeight,
        n = r / a;
      this.globalData.compSize.w / this.globalData.compSize.h > n ? (t = r / this.globalData.compSize.w, e = r / this.globalData.compSize.w, i = 0, s = (a - this.globalData.compSize.h * (r / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, i = (r - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, s = 0);
      var o = this.resizerElem.style;
      o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + s + ",0,1)", o.transform = o.webkitTransform
    }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
      this.resizerElem.style.display = "none"
    }, HybridRenderer.prototype.show = function() {
      this.resizerElem.style.display = "block"
    }, HybridRenderer.prototype.initItems = function() {
      if (this.buildAllItems(), this.camera) this.camera.setup();
      else {
        var t, e = this.globalData.compSize.w,
          i = this.globalData.compSize.h,
          s = this.threeDElements.length;
        for (t = 0; t < s; t += 1) {
          var r = this.threeDElements[t].perspectiveElem.style;
          r.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px", r.perspective = r.webkitPerspective
        }
      }
    }, HybridRenderer.prototype.searchExtraCompositions = function(t) {
      var e, i = t.length,
        s = createTag("div");
      for (e = 0; e < i; e += 1)
        if (t[e].xt) {
          var r = this.createComp(t[e], s, this.globalData.comp, null);
          r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
        }
    }, MaskElement.prototype.getMaskProperty = function(t) {
      return this.viewData[t].prop
    }, MaskElement.prototype.renderFrame = function(t) {
      var e, i = this.element.finalTransform.mat,
        s = this.masksProperties.length;
      for (e = 0; e < s; e += 1)
        if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
          var r = this.storedData[e].expan;
          this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), r.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
        }
    }, MaskElement.prototype.getMaskelement = function() {
      return this.maskElement
    }, MaskElement.prototype.createLayerSolidPath = function() {
      var t = "M0,0 ";
      return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
    }, MaskElement.prototype.drawPath = function(t, e, i) {
      var s, r, a = " M" + e.v[0][0] + "," + e.v[0][1];
      for (r = e._length, s = 1; s < r; s += 1) a += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
      if (e.c && r > 1 && (a += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== a) {
        var n = "";
        i.elem && (e.c && (n = t.inv ? this.solidPath + a : a), i.elem.setAttribute("d", n)), i.lastPath = a
      }
    }, MaskElement.prototype.destroy = function() {
      this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
    }, HierarchyElement.prototype = {
      initHierarchy: function() {
        this.hierarchy = [], this._isParent = !1, this.checkParenting()
      },
      setHierarchy: function(t) {
        this.hierarchy = t
      },
      setAsParent: function() {
        this._isParent = !0
      },
      checkParenting: function() {
        void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
      }
    }, FrameElement.prototype = {
      initFrame: function() {
        this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
      },
      prepareProperties: function(t, e) {
        var i, s = this.dynamicProperties.length;
        for (i = 0; i < s; i += 1)(e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
      },
      addDynamicProperty: function(t) {
        -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
      }
    }, TransformElement.prototype = {
      initTransform: function() {
        this.finalTransform = {
          mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
            o: 0
          },
          _matMdf: !1,
          _opMdf: !1,
          mat: new Matrix
        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
      },
      renderTransform: function() {
        if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
          var t, e = this.finalTransform.mat,
            i = 0,
            s = this.hierarchy.length;
          if (!this.finalTransform._matMdf)
            for (; i < s;) {
              if (this.hierarchy[i].finalTransform.mProp._mdf) {
                this.finalTransform._matMdf = !0;
                break
              }
              i += 1
            }
          if (this.finalTransform._matMdf)
            for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < s; i += 1) t = this.hierarchy[i].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
        }
      },
      globalToLocal: function(t) {
        var e = [];
        e.push(this.finalTransform);
        for (var i, s = !0, r = this.comp; s;) r.finalTransform ? (r.data.hasMask && e.splice(0, 0, r.finalTransform), r = r.comp) : s = !1;
        var a, n = e.length;
        for (i = 0; i < n; i += 1) a = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
        return t
      },
      mHelper: new Matrix
    }, RenderableElement.prototype = {
      initRenderable: function() {
        this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
      },
      addRenderableComponent: function(t) {
        -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
      },
      removeRenderableComponent: function(t) {
        -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
      },
      prepareRenderableFrame: function(t) {
        this.checkLayerLimits(t)
      },
      checkTransparency: function() {
        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
      },
      checkLayerLimits: function(t) {
        this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
      },
      renderRenderable: function() {
        var t, e = this.renderableComponents.length;
        for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
      },
      sourceRectAtTime: function() {
        return {
          top: 0,
          left: 0,
          width: 100,
          height: 100
        }
      },
      getLayerSize: function() {
        return 5 === this.data.ty ? {
          w: this.data.textData.width,
          h: this.data.textData.height
        } : {
          w: this.data.width,
          h: this.data.height
        }
      }
    }, extendPrototype([RenderableElement, createProxyFunction({
      initElement: function(t, e, i) {
        this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
      },
      hide: function() {
        this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
      },
      show: function() {
        this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
      },
      renderFrame: function() {
        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
      },
      renderInnerContent: function() {},
      prepareFrame: function(t) {
        this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
      },
      destroy: function() {
        this.innerElem = null, this.destroyBaseElement()
      }
    })], RenderableDOMElement), SVGStyleData.prototype.reset = function() {
      this.d = "", this._mdf = !1
    }, SVGShapeData.prototype.setAsAnimated = function() {
      this._isAnimated = !0
    }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, i) {
      this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
        k: 0
      }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
        k: 0
      }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated
    }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
      var i = createElementID(),
        s = createNS(1 === e.t ? "linearGradient" : "radialGradient");
      s.setAttribute("id", i), s.setAttribute("spreadMethod", "pad"), s.setAttribute("gradientUnits", "userSpaceOnUse");
      var r, a, n, o = [];
      for (n = 4 * e.g.p, a = 0; a < n; a += 4) r = createNS("stop"), s.appendChild(r), o.push(r);
      t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + i + ")"), this.gf = s, this.cst = o
    }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
      if (this.g._hasOpacity && !this.g._collapsable) {
        var i, s, r, a = createNS("mask"),
          n = createNS("path");
        a.appendChild(n);
        var o = createElementID(),
          h = createElementID();
        a.setAttribute("id", h);
        var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
        l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), r = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
        var p = this.stops;
        for (s = 4 * t.g.p; s < r; s += 2)(i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(i), p.push(i);
        n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), "gs" === t.ty && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), this.of = l, this.ms = a, this.ost = p, this.maskId = h, e.msElem = n
      }
    }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
    var SVGElementsRenderer = function() {
      var t = new Matrix,
        e = new Matrix;

      function i(t, e, i) {
        (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
      }

      function s(i, s, r) {
        var a, n, o, h, l, p, c, u, d, m, f, y = s.styles.length,
          g = s.lvl;
        for (p = 0; p < y; p += 1) {
          if (h = s.sh._mdf || r, s.styles[p].lvl < g) {
            for (u = e.reset(), m = g - s.styles[p].lvl, f = s.transformers.length - 1; !h && m > 0;) h = s.transformers[f].mProps._mdf || h, m -= 1, f -= 1;
            if (h)
              for (m = g - s.styles[p].lvl, f = s.transformers.length - 1; m > 0;) d = s.transformers[f].mProps.v.props, u.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), m -= 1, f -= 1
          } else u = t;
          if (n = (c = s.sh.paths)._length, h) {
            for (o = "", a = 0; a < n; a += 1)(l = c.shapes[a]) && l._length && (o += buildShapeString(l, l._length, l.c, u));
            s.caches[p] = o
          } else o = s.caches[p];
          s.styles[p].d += !0 === i.hd ? "" : o, s.styles[p]._mdf = h || s.styles[p]._mdf
        }
      }

      function r(t, e, i) {
        var s = e.style;
        (e.c._mdf || i) && s.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && s.pElem.setAttribute("fill-opacity", e.o.v)
      }

      function a(t, e, i) {
        n(t, e, i), o(0, e, i)
      }

      function n(t, e, i) {
        var s, r, a, n, o, h = e.gf,
          l = e.g._hasOpacity,
          p = e.s.v,
          c = e.e.v;
        if (e.o._mdf || i) {
          var u = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
          e.style.pElem.setAttribute(u, e.o.v)
        }
        if (e.s._mdf || i) {
          var d = 1 === t.t ? "x1" : "cx",
            m = "x1" === d ? "y1" : "cy";
          h.setAttribute(d, p[0]), h.setAttribute(m, p[1]), l && !e.g._collapsable && (e.of.setAttribute(d, p[0]), e.of.setAttribute(m, p[1]))
        }
        if (e.g._cmdf || i) {
          s = e.cst;
          var f = e.g.c;
          for (a = s.length, r = 0; r < a; r += 1)(n = s[r]).setAttribute("offset", f[4 * r] + "%"), n.setAttribute("stop-color", "rgb(" + f[4 * r + 1] + "," + f[4 * r + 2] + "," + f[4 * r + 3] + ")")
        }
        if (l && (e.g._omdf || i)) {
          var y = e.g.o;
          for (a = (s = e.g._collapsable ? e.cst : e.ost).length, r = 0; r < a; r += 1) n = s[r], e.g._collapsable || n.setAttribute("offset", y[2 * r] + "%"), n.setAttribute("stop-opacity", y[2 * r + 1])
        }
        if (1 === t.t)(e.e._mdf || i) && (h.setAttribute("x2", c[0]), h.setAttribute("y2", c[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", c[0]), e.of.setAttribute("y2", c[1])));
        else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
          o || (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)));
          var g = Math.atan2(c[1] - p[1], c[0] - p[0]),
            v = e.h.v;
          v >= 1 ? v = .99 : v <= -1 && (v = -.99);
          var _ = o * v,
            b = Math.cos(g + e.a.v) * _ + p[0],
            E = Math.sin(g + e.a.v) * _ + p[1];
          h.setAttribute("fx", b), h.setAttribute("fy", E), l && !e.g._collapsable && (e.of.setAttribute("fx", b), e.of.setAttribute("fy", E))
        }
      }

      function o(t, e, i) {
        var s = e.style,
          r = e.d;
        r && (r._mdf || i) && r.dashStr && (s.pElem.setAttribute("stroke-dasharray", r.dashStr), s.pElem.setAttribute("stroke-dashoffset", r.dashoffset[0])), e.c && (e.c._mdf || i) && s.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && s.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (s.pElem.setAttribute("stroke-width", e.w.v), s.msElem && s.msElem.setAttribute("stroke-width", e.w.v))
      }
      return {
        createRenderFunction: function(t) {
          switch (t.ty) {
            case "fl":
              return r;
            case "gf":
              return n;
            case "gs":
              return a;
            case "st":
              return o;
            case "sh":
            case "el":
            case "rc":
            case "sr":
              return s;
            case "tr":
              return i;
            default:
              return null
          }
        }
      }
    }();

    function ShapeTransformManager() {
      this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
    }

    function CVShapeData(t, e, i, s) {
      this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
      var r, a = 4;
      "rc" === e.ty ? a = 5 : "el" === e.ty ? a = 6 : "sr" === e.ty && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t);
      var n, o = i.length;
      for (r = 0; r < o; r += 1) i[r].closed || (n = {
        transforms: s.addTransformSequence(i[r].transforms),
        trNodes: []
      }, this.styledShapes.push(n), i[r].elements.push(n))
    }

    function BaseElement() {}

    function NullElement(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy()
    }

    function SVGBaseElement() {}

    function IShapeElement() {}

    function ITextElement() {}

    function ICompElement() {}

    function IImageElement(t, e, i) {
      this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i), this.sourceRect = {
        top: 0,
        left: 0,
        width: this.assetData.w,
        height: this.assetData.h
      }
    }

    function ISolidElement(t, e, i) {
      this.initElement(t, e, i)
    }

    function AudioElement(t, e, i) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
      var s = this.globalData.getAssetsPath(this.assetData);
      this.audio = this.globalData.audioController.createAudio(s), this._currentTime = 0, this.globalData.audioController.addAudio(this), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
        _placeholder: !0
      }
    }

    function FootageElement(t, e, i) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i)
    }

    function SVGCompElement(t, e, i) {
      this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
        _placeholder: !0
      }
    }

    function SVGTextLottieElement(t, e, i) {
      this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i)
    }

    function SVGShapeElement(t, e, i) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = []
    }

    function SVGTintFilter(t, e) {
      this.filterManager = e;
      var i = createNS("feColorMatrix");
      if (i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i), (i = createNS("feColorMatrix")).setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", "f2"), t.appendChild(i), this.matrixFilter = i, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
        var s, r = createNS("feMerge");
        t.appendChild(r), (s = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), r.appendChild(s), (s = createNS("feMergeNode")).setAttribute("in", "f2"), r.appendChild(s)
      }
    }

    function SVGFillFilter(t, e) {
      this.filterManager = e;
      var i = createNS("feColorMatrix");
      i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(i), this.matrixFilter = i
    }

    function SVGGaussianBlurEffect(t, e) {
      t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
      var i = createNS("feGaussianBlur");
      t.appendChild(i), this.feGaussianBlur = i
    }

    function SVGStrokeEffect(t, e) {
      this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
    }

    function SVGTritoneFilter(t, e) {
      this.filterManager = e;
      var i = createNS("feColorMatrix");
      i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i);
      var s = createNS("feComponentTransfer");
      s.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(s), this.matrixFilter = s;
      var r = createNS("feFuncR");
      r.setAttribute("type", "table"), s.appendChild(r), this.feFuncR = r;
      var a = createNS("feFuncG");
      a.setAttribute("type", "table"), s.appendChild(a), this.feFuncG = a;
      var n = createNS("feFuncB");
      n.setAttribute("type", "table"), s.appendChild(n), this.feFuncB = n
    }

    function SVGProLevelsFilter(t, e) {
      this.filterManager = e;
      var i = this.filterManager.effectElements,
        s = createNS("feComponentTransfer");
      (i[10].p.k || 0 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 1 !== i[12].p.v || i[13].p.k || 0 !== i[13].p.v || i[14].p.k || 1 !== i[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", s)), (i[17].p.k || 0 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 1 !== i[19].p.v || i[20].p.k || 0 !== i[20].p.v || i[21].p.k || 1 !== i[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", s)), (i[24].p.k || 0 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 1 !== i[26].p.v || i[27].p.k || 0 !== i[27].p.v || i[28].p.k || 1 !== i[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", s)), (i[31].p.k || 0 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 1 !== i[33].p.v || i[34].p.k || 0 !== i[34].p.v || i[35].p.k || 1 !== i[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", s)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (s.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(s), s = createNS("feComponentTransfer")), (i[3].p.k || 0 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 1 !== i[5].p.v || i[6].p.k || 0 !== i[6].p.v || i[7].p.k || 1 !== i[7].p.v) && (s.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(s), this.feFuncRComposed = this.createFeFunc("feFuncR", s), this.feFuncGComposed = this.createFeFunc("feFuncG", s), this.feFuncBComposed = this.createFeFunc("feFuncB", s))
    }

    function SVGDropShadowEffect(t, e) {
      var i = e.container.globalData.renderConfig.filterSize;
      t.setAttribute("x", i.x), t.setAttribute("y", i.y), t.setAttribute("width", i.width), t.setAttribute("height", i.height), this.filterManager = e;
      var s = createNS("feGaussianBlur");
      s.setAttribute("in", "SourceAlpha"), s.setAttribute("result", "drop_shadow_1"), s.setAttribute("stdDeviation", "0"), this.feGaussianBlur = s, t.appendChild(s);
      var r = createNS("feOffset");
      r.setAttribute("dx", "25"), r.setAttribute("dy", "0"), r.setAttribute("in", "drop_shadow_1"), r.setAttribute("result", "drop_shadow_2"), this.feOffset = r, t.appendChild(r);
      var a = createNS("feFlood");
      a.setAttribute("flood-color", "#00ff00"), a.setAttribute("flood-opacity", "1"), a.setAttribute("result", "drop_shadow_3"), this.feFlood = a, t.appendChild(a);
      var n = createNS("feComposite");
      n.setAttribute("in", "drop_shadow_3"), n.setAttribute("in2", "drop_shadow_2"), n.setAttribute("operator", "in"), n.setAttribute("result", "drop_shadow_4"), t.appendChild(n);
      var o, h = createNS("feMerge");
      t.appendChild(h), o = createNS("feMergeNode"), h.appendChild(o), (o = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = o, this.feMerge = h, this.originalNodeAdded = !1, h.appendChild(o)
    }
    ShapeTransformManager.prototype = {
      addTransformSequence: function(t) {
        var e, i = t.length,
          s = "_";
        for (e = 0; e < i; e += 1) s += t[e].transform.key + "_";
        var r = this.sequences[s];
        return r || (r = {
          transforms: [].concat(t),
          finalTransform: new Matrix,
          _mdf: !1
        }, this.sequences[s] = r, this.sequenceList.push(r)), r
      },
      processSequence: function(t, e) {
        for (var i, s = 0, r = t.transforms.length, a = e; s < r && !e;) {
          if (t.transforms[s].transform.mProps._mdf) {
            a = !0;
            break
          }
          s += 1
        }
        if (a)
          for (t.finalTransform.reset(), s = r - 1; s >= 0; s -= 1) i = t.transforms[s].transform.mProps.v.props, t.finalTransform.transform(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9], i[10], i[11], i[12], i[13], i[14], i[15]);
        t._mdf = a
      },
      processSequences: function(t) {
        var e, i = this.sequenceList.length;
        for (e = 0; e < i; e += 1) this.processSequence(this.sequenceList[e], t)
      },
      getNewKey: function() {
        return this.transform_key_count += 1, "_" + this.transform_key_count
      }
    }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
      checkMasks: function() {
        if (!this.data.hasMask) return !1;
        for (var t = 0, e = this.data.masksProperties.length; t < e;) {
          if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
          t += 1
        }
        return !1
      },
      initExpressions: function() {
        this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
        var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
        this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
      },
      setBlendMode: function() {
        var t = getBlendMode(this.data.bm);
        (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
      },
      initBaseData: function(t, e, i) {
        this.globalData = e, this.comp = i, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
      },
      getType: function() {
        return this.type
      },
      sourceRectAtTime: function() {}
    }, NullElement.prototype.prepareFrame = function(t) {
      this.prepareProperties(t, !0)
    }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
      return null
    }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = {
      initRendererElement: function() {
        this.layerElement = createNS("g")
      },
      createContainerElements: function() {
        this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
        var t, e, i, s = null;
        if (this.data.td) {
          if (3 == this.data.td || 1 == this.data.td) {
            var r = createNS("mask");
            r.setAttribute("id", this.layerId), r.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), r.appendChild(this.layerElement), s = r, this.globalData.defs.appendChild(r), featureSupport.maskType || 1 != this.data.td || (r.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")).appendChild(this.layerElement), s = i, r.appendChild(i), i.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))
          } else if (2 == this.data.td) {
            var a = createNS("mask");
            a.setAttribute("id", this.layerId), a.setAttribute("mask-type", "alpha");
            var n = createNS("g");
            a.appendChild(n), t = createElementID(), e = filtersFactory.createFilter(t);
            var o = createNS("feComponentTransfer");
            o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
            var h = createNS("feFuncA");
            h.setAttribute("type", "table"), h.setAttribute("tableValues", "1.0 0.0"), o.appendChild(h), this.globalData.defs.appendChild(e);
            var l = createNS("rect");
            l.setAttribute("width", this.comp.data.w), l.setAttribute("height", this.comp.data.h), l.setAttribute("x", "0"), l.setAttribute("y", "0"), l.setAttribute("fill", "#ffffff"), l.setAttribute("opacity", "0"), n.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), n.appendChild(l), n.appendChild(this.layerElement), s = n, featureSupport.maskType || (a.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), i = createNS("g"), n.appendChild(l), i.appendChild(this.layerElement), s = i, n.appendChild(i)), this.globalData.defs.appendChild(a)
          }
        } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), s = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
        if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
          var p = createNS("clipPath"),
            c = createNS("path");
          c.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
          var u = createElementID();
          if (p.setAttribute("id", u), p.appendChild(c), this.globalData.defs.appendChild(p), this.checkMasks()) {
            var d = createNS("g");
            d.setAttribute("clip-path", "url(" + locationHref + "#" + u + ")"), d.appendChild(this.layerElement), this.transformedElement = d, s ? s.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
          } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + u + ")")
        }
        0 !== this.data.bm && this.setBlendMode()
      },
      renderElement: function() {
        this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
      },
      destroyBaseElement: function() {
        this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
      },
      getBaseElement: function() {
        return this.data.hd ? null : this.baseElement
      },
      createRenderableComponents: function() {
        this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
      },
      setMatte: function(t) {
        this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")")
      }
    }, IShapeElement.prototype = {
      addShapeToModifiers: function(t) {
        var e, i = this.shapeModifiers.length;
        for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t)
      },
      isShapeInAnimatedModifiers: function(t) {
        for (var e = this.shapeModifiers.length; 0 < e;)
          if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
        return !1
      },
      renderModifiers: function() {
        if (this.shapeModifiers.length) {
          var t, e = this.shapes.length;
          for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
          for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
        }
      },
      searchProcessedElement: function(t) {
        for (var e = this.processedElements, i = 0, s = e.length; i < s;) {
          if (e[i].elem === t) return e[i].pos;
          i += 1
        }
        return 0
      },
      addProcessedElement: function(t, e) {
        for (var i = this.processedElements, s = i.length; s;)
          if (i[s -= 1].elem === t) return void(i[s].pos = e);
        i.push(new ProcessedElement(t, e))
      },
      prepareFrame: function(t) {
        this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
      }
    }, ITextElement.prototype.initElement = function(t, e, i) {
      this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
    }, ITextElement.prototype.prepareFrame = function(t) {
      this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
    }, ITextElement.prototype.createPathShape = function(t, e) {
      var i, s, r = e.length,
        a = "";
      for (i = 0; i < r; i += 1) s = e[i].ks.k, a += buildShapeString(s, s.i.length, !0, t);
      return a
    }, ITextElement.prototype.updateDocumentData = function(t, e) {
      this.textProperty.updateDocumentData(t, e)
    }, ITextElement.prototype.canResizeFont = function(t) {
      this.textProperty.canResizeFont(t)
    }, ITextElement.prototype.setMinimumFontSize = function(t) {
      this.textProperty.setMinimumFontSize(t)
    }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, s, r) {
      switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
        case 1:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
          break;
        case 2:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
      }
      e.translate(s, r, 0)
    }, ITextElement.prototype.buildColor = function(t) {
      return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
    }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
    }, ICompElement.prototype.prepareFrame = function(t) {
      if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
        if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
        else {
          var e = this.tm.v;
          e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
        }
        var i, s = this.elements.length;
        for (this.completeLayers || this.checkLayers(this.renderedFrame), i = s - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
      }
    }, ICompElement.prototype.renderInnerContent = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
    }, ICompElement.prototype.setElements = function(t) {
      this.elements = t
    }, ICompElement.prototype.getElements = function() {
      return this.elements
    }, ICompElement.prototype.destroyElements = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
    }, ICompElement.prototype.destroy = function() {
      this.destroyElements(), this.destroyBaseElement()
    }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
      var t = this.globalData.getAssetsPath(this.assetData);
      this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
    }, IImageElement.prototype.sourceRectAtTime = function() {
      return this.sourceRect
    }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
      var t = createNS("rect");
      t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
    }, AudioElement.prototype.prepareFrame = function(t) {
      if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
      else {
        var e = this.tm.v;
        this._currentTime = e
      }
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
      this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
    }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
      this.audio.pause(), this._isPlaying = !1
    }, AudioElement.prototype.pause = function() {
      this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
    }, AudioElement.prototype.resume = function() {
      this._canPlay = !0
    }, AudioElement.prototype.setRate = function(t) {
      this.audio.rate(t)
    }, AudioElement.prototype.volume = function(t) {
      this.audio.volume(t)
    }, AudioElement.prototype.getBaseElement = function() {
      return null
    }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
      return null
    }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
      this.layerInterface = FootageInterface(this)
    }, FootageElement.prototype.getFootageData = function() {
      return this.footageData
    }, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
      this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
    }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
      for (var e = 0, i = t.length, s = [], r = ""; e < i;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (s.push(r), r = "") : r += t[e], e += 1;
      return s.push(r), s
    }, SVGTextLottieElement.prototype.buildNewText = function() {
      var t, e, i = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
      var s = this.globalData.fontManager.getFontByName(i.f);
      if (s.fClass) this.layerElement.setAttribute("class", s.fClass);
      else {
        this.layerElement.setAttribute("font-family", s.fFamily);
        var r = i.fWeight,
          a = i.fStyle;
        this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", r)
      }
      this.layerElement.setAttribute("aria-label", i.t);
      var n, o = i.l || [],
        h = !!this.globalData.fontManager.chars;
      e = o.length;
      var l, p = this.mHelper,
        c = "",
        u = this.data.singleShape,
        d = 0,
        m = 0,
        f = !0,
        y = .001 * i.tr * i.finalSize;
      if (!u || h || i.sz) {
        var g, v, _ = this.textSpans.length;
        for (t = 0; t < e; t += 1) h && u && 0 !== t || (n = _ > t ? this.textSpans[t] : createNS(h ? "path" : "text"), _ <= t && (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = n, this.layerElement.appendChild(n)), n.style.display = "inherit"), p.reset(), p.scale(i.finalSize / 100, i.finalSize / 100), u && (o[t].n && (d = -y, m += i.yOffset, m += f ? 1 : 0, f = !1), this.applyTextPropertiesToMatrix(i, p, o[t].line, d, m), d += o[t].l || 0, d += y), h ? (l = (g = (v = this.globalData.fontManager.getCharData(i.finalText[t], s.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)) && v.data || {}).shapes ? g.shapes[0].it : [], u ? c += this.createPathShape(p, l) : n.setAttribute("d", this.createPathShape(p, l))) : (u && n.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), n.textContent = o[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
        u && n && n.setAttribute("d", c)
      } else {
        var b = this.textContainer,
          E = "start";
        switch (i.j) {
          case 1:
            E = "end";
            break;
          case 2:
            E = "middle";
            break;
          default:
            E = "start"
        }
        b.setAttribute("text-anchor", E), b.setAttribute("letter-spacing", y);
        var P = this.buildTextContents(i.finalText);
        for (e = P.length, m = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)(n = this.textSpans[t] || createNS("tspan")).textContent = P[t], n.setAttribute("x", 0), n.setAttribute("y", m), n.style.display = "inherit", b.appendChild(n), this.textSpans[t] = n, m += i.finalLineHeight;
        this.layerElement.appendChild(b)
      }
      for (; t < this.textSpans.length;) this.textSpans[t].style.display = "none", t += 1;
      this._sizeChanged = !0
    }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
      if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
        this._sizeChanged = !1;
        var t = this.layerElement.getBBox();
        this.bbox = {
          top: t.y,
          left: t.x,
          width: t.width,
          height: t.height
        }
      }
      return this.bbox
    }, SVGTextLottieElement.prototype.renderInnerContent = function() {
      if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
        var t, e;
        this._sizeChanged = !0;
        var i, s, r = this.textAnimator.renderedLetters,
          a = this.textProperty.currentData.l;
        for (e = a.length, t = 0; t < e; t += 1) a[t].n || (i = r[t], s = this.textSpans[t], i._mdf.m && s.setAttribute("transform", i.m), i._mdf.o && s.setAttribute("opacity", i.o), i._mdf.sw && s.setAttribute("stroke-width", i.sw), i._mdf.sc && s.setAttribute("stroke", i.sc), i._mdf.fc && s.setAttribute("fill", i.fc))
      }
    }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
    }, SVGShapeElement.prototype.filterUniqueShapes = function() {
      var t, e, i, s, r = this.shapes.length,
        a = this.stylesList.length,
        n = [],
        o = !1;
      for (i = 0; i < a; i += 1) {
        for (s = this.stylesList[i], o = !1, n.length = 0, t = 0; t < r; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(s) && (n.push(e), o = e._isAnimated || o);
        n.length > 1 && o && this.setShapesAsAnimated(n)
      }
    }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) t[e].setAsAnimated()
    }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
      var i, s = new SVGStyleData(t, e),
        r = s.pElem;
      return "st" === t.ty ? i = new SVGStrokeStyleData(this, t, s) : "fl" === t.ty ? i = new SVGFillStyleData(this, t, s) : "gf" !== t.ty && "gs" !== t.ty || (i = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, s), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), r.setAttribute("mask", "url(" + locationHref + "#" + i.maskId + ")"))), "st" !== t.ty && "gs" !== t.ty || (r.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), r.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), r.setAttribute("fill-opacity", "0"), 1 === t.lj && r.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && r.setAttribute("fill-rule", "evenodd"), t.ln && r.setAttribute("id", t.ln), t.cl && r.setAttribute("class", t.cl), t.bm && (r.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(s), this.addToAnimatedContents(t, i), i
    }, SVGShapeElement.prototype.createGroupElement = function(t) {
      var e = new ShapeGroupData;
      return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
    }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
      var i = TransformPropertyFactory.getTransformProperty(this, t, this),
        s = new SVGTransformData(i, i.o, e);
      return this.addToAnimatedContents(t, s), s
    }, SVGShapeElement.prototype.createShapeElement = function(t, e, i) {
      var s = 4;
      "rc" === t.ty ? s = 5 : "el" === t.ty ? s = 6 : "sr" === t.ty && (s = 7);
      var r = new SVGShapeData(e, i, ShapePropertyFactory.getShapeProp(this, t, s, this));
      return this.shapes.push(r), this.addShapeToModifiers(r), this.addToAnimatedContents(t, r), r
    }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
      for (var i = 0, s = this.animatedContents.length; i < s;) {
        if (this.animatedContents[i].element === e) return;
        i += 1
      }
      this.animatedContents.push({
        fn: SVGElementsRenderer.createRenderFunction(t),
        element: e,
        data: t
      })
    }, SVGShapeElement.prototype.setElementStyles = function(t) {
      var e, i = t.styles,
        s = this.stylesList.length;
      for (e = 0; e < s; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e])
    }, SVGShapeElement.prototype.reloadShapes = function() {
      var t;
      this._isFirstFrame = !0;
      var e = this.itemsData.length;
      for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
      this.renderModifiers()
    }, SVGShapeElement.prototype.searchShapes = function(t, e, i, s, r, a, n) {
      var o, h, l, p, c, u, d = [].concat(a),
        m = t.length - 1,
        f = [],
        y = [];
      for (o = m; o >= 0; o -= 1) {
        if ((u = this.searchProcessedElement(t[o])) ? e[o] = i[u - 1] : t[o]._render = n, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty) u ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], r), t[o]._render && s.appendChild(e[o].style.pElem), f.push(e[o].style);
        else if ("gr" === t[o].ty) {
          if (u)
            for (l = e[o].it.length, h = 0; h < l; h += 1) e[o].prevViewData[h] = e[o].it[h];
          else e[o] = this.createGroupElement(t[o]);
          this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, r + 1, d, n), t[o]._render && s.appendChild(e[o].gr)
        } else "tr" === t[o].ty ? (u || (e[o] = this.createTransformElement(t[o], s)), p = e[o].transform, d.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (u || (e[o] = this.createShapeElement(t[o], d, r)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty ? (u ? (c = e[o]).closed = !1 : ((c = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = c, this.shapeModifiers.push(c)), y.push(c)) : "rp" === t[o].ty && (u ? (c = e[o]).closed = !0 : (c = ShapeModifiers.getModifier(t[o].ty), e[o] = c, c.init(this, t, o, e), this.shapeModifiers.push(c), n = !1), y.push(c));
        this.addProcessedElement(t[o], o + 1)
      }
      for (m = f.length, o = 0; o < m; o += 1) f[o].closed = !0;
      for (m = y.length, o = 0; o < m; o += 1) y[o].closed = !0
    }, SVGShapeElement.prototype.renderInnerContent = function() {
      var t;
      this.renderModifiers();
      var e = this.stylesList.length;
      for (t = 0; t < e; t += 1) this.stylesList[t].reset();
      for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
    }, SVGShapeElement.prototype.renderShape = function() {
      var t, e, i = this.animatedContents.length;
      for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
    }, SVGShapeElement.prototype.destroy = function() {
      this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
    }, SVGTintFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[0].p.v,
          i = this.filterManager.effectElements[1].p.v,
          s = this.filterManager.effectElements[2].p.v / 100;
        this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + s + " 0")
      }
    }, SVGFillFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[2].p.v,
          i = this.filterManager.effectElements[6].p.v;
        this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
      }
    }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = .3 * this.filterManager.effectElements[0].p.v,
          i = this.filterManager.effectElements[1].p.v,
          s = 3 == i ? 0 : e,
          r = 2 == i ? 0 : e;
        this.feGaussianBlur.setAttribute("stdDeviation", s + " " + r);
        var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
        this.feGaussianBlur.setAttribute("edgeMode", a)
      }
    }, SVGStrokeEffect.prototype.initialize = function() {
      var t, e, i, s, r = this.elem.layerElement.children || this.elem.layerElement.childNodes;
      for (1 === this.filterManager.effectElements[1].p.v ? (s = this.elem.maskManager.masksProperties.length, i = 0) : s = 1 + (i = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); i < s; i += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
        p: t,
        m: i
      });
      if (3 === this.filterManager.effectElements[10].p.v) {
        var a = createNS("mask"),
          n = createElementID();
        a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a);
        var o = createNS("g");
        for (o.setAttribute("mask", "url(" + locationHref + "#" + n + ")"); r[0];) o.appendChild(r[0]);
        this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff")
      } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
        if (2 === this.filterManager.effectElements[10].p.v)
          for (r = this.elem.layerElement.children || this.elem.layerElement.childNodes; r.length;) this.elem.layerElement.removeChild(r[0]);
        this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
      }
      this.initialized = !0, this.pathMasker = e
    }, SVGStrokeEffect.prototype.renderFrame = function(t) {
      var e;
      this.initialized || this.initialize();
      var i, s, r = this.paths.length;
      for (e = 0; e < r; e += 1)
        if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m], s = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && s.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
          var a;
          if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
            var n = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
              o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
              h = s.getTotalLength();
            a = "0 0 0 " + h * n + " ";
            var l, p = h * (o - n),
              c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
              u = Math.floor(p / c);
            for (l = 0; l < u; l += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
            a += "0 " + 10 * h + " 0 0"
          } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
          s.setAttribute("stroke-dasharray", a)
        } if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
        var d = this.filterManager.effectElements[3].p.v;
        this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * d[0]) + "," + bmFloor(255 * d[1]) + "," + bmFloor(255 * d[2]) + ")")
      }
    }, SVGTritoneFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[0].p.v,
          i = this.filterManager.effectElements[1].p.v,
          s = this.filterManager.effectElements[2].p.v,
          r = s[0] + " " + i[0] + " " + e[0],
          a = s[1] + " " + i[1] + " " + e[1],
          n = s[2] + " " + i[2] + " " + e[2];
        this.feFuncR.setAttribute("tableValues", r), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", n)
      }
    }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
      var i = createNS(t);
      return i.setAttribute("type", "table"), e.appendChild(i), i
    }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, i, s, r) {
      for (var a, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, {
          length: 256
        }), c = 0, u = r - s, d = e - t; o <= 256;) n = (a = o / 256) <= h ? d < 0 ? r : s : a >= l ? d < 0 ? s : r : s + u * Math.pow((a - t) / d, 1 / i), p[c] = n, c += 1, o += 256 / 255;
      return p.join(" ")
    }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e, i = this.filterManager.effectElements;
        this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e))
      }
    }, SVGDropShadowEffect.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
          var e = this.filterManager.effectElements[0].p.v;
          this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
        }
        if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
          var i = this.filterManager.effectElements[3].p.v,
            s = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
            r = i * Math.cos(s),
            a = i * Math.sin(s);
          this.feOffset.setAttribute("dx", r), this.feOffset.setAttribute("dy", a)
        }
      }
    };
    var _svgMatteSymbols = [];

    function SVGMatte3Effect(t, e, i) {
      this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = i, i.matteElement = createNS("g"), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), i.baseElement = i.matteElement
    }

    function SVGEffects(t) {
      var e, i, s = t.data.ef ? t.data.ef.length : 0,
        r = createElementID(),
        a = filtersFactory.createFilter(r, !0),
        n = 0;
      for (this.filters = [], e = 0; e < s; e += 1) i = null, 20 === t.data.ef[e].ty ? (n += 1, i = new SVGTintFilter(a, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (n += 1, i = new SVGFillFilter(a, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? i = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (n += 1, i = new SVGTritoneFilter(a, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (n += 1, i = new SVGProLevelsFilter(a, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (n += 1, i = new SVGDropShadowEffect(a, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? i = new SVGMatte3Effect(a, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (n += 1, i = new SVGGaussianBlurEffect(a, t.effectsManager.effectElements[e])), i && this.filters.push(i);
      n && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + r + ")")), this.filters.length && t.addRenderableComponent(this)
    }

    function CVContextData() {
      var t;
      for (this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1, this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
      this._length = 15
    }

    function CVBaseElement() {}

    function CVImageElement(t, e, i) {
      this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, i)
    }

    function CVCompElement(t, e, i) {
      this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
        _placeholder: !0
      }
    }

    function CVMaskElement(t, e) {
      var i;
      this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
      var s = this.masksProperties.length,
        r = !1;
      for (i = 0; i < s; i += 1) "n" !== this.masksProperties[i].mode && (r = !0), this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
      this.hasMasks = r, r && this.element.addRenderableComponent(this)
    }

    function CVShapeElement(t, e, i) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, i)
    }

    function CVSolidElement(t, e, i) {
      this.initElement(t, e, i)
    }

    function CVTextElement(t, e, i) {
      this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
        fill: "rgba(0,0,0,0)",
        stroke: "rgba(0,0,0,0)",
        sWidth: 0,
        fValue: ""
      }, this.initElement(t, e, i)
    }

    function CVEffects() {}

    function HBaseElement() {}

    function HSolidElement(t, e, i) {
      this.initElement(t, e, i)
    }

    function HCompElement(t, e, i) {
      this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
        _placeholder: !0
      }
    }

    function HShapeElement(t, e, i) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, i), this.prevViewData = [], this.currentBBox = {
        x: 999999,
        y: -999999,
        h: 0,
        w: 0
      }
    }

    function HTextElement(t, e, i) {
      this.textSpans = [], this.textPaths = [], this.currentBBox = {
        x: 999999,
        y: -999999,
        h: 0,
        w: 0
      }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, i)
    }

    function HImageElement(t, e, i) {
      this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i)
    }

    function HCameraElement(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
      var s = PropertyFactory.getProp;
      if (this.pe = s(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = s(this, t.ks.p.x, 1, 0, this), this.py = s(this, t.ks.p.y, 1, 0, this), this.pz = s(this, t.ks.p.z, 1, 0, this)) : this.p = s(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = s(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
        var r, a = t.ks.or.k.length;
        for (r = 0; r < a; r += 1) t.ks.or.k[r].to = null, t.ks.or.k[r].ti = null
      }
      this.or = s(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = s(this, t.ks.rx, 0, degToRads, this), this.ry = s(this, t.ks.ry, 0, degToRads, this), this.rz = s(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
        mProp: this
      }
    }

    function HEffects() {}
    SVGMatte3Effect.prototype.findSymbol = function(t) {
      for (var e = 0, i = _svgMatteSymbols.length; e < i;) {
        if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
        e += 1
      }
      return null
    }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
      var i = t.layerElement.parentNode;
      if (i) {
        for (var s, r = i.children, a = 0, n = r.length; a < n && r[a] !== t.layerElement;) a += 1;
        a <= n - 2 && (s = r[a + 1]);
        var o = createNS("use");
        o.setAttribute("href", "#" + e), s ? i.insertBefore(o, s) : i.appendChild(o)
      }
    }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
      if (!this.findSymbol(e)) {
        var i = createElementID(),
          s = createNS("mask");
        s.setAttribute("id", e.layerId), s.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
        var r = t.globalData.defs;
        r.appendChild(s);
        var a = createNS("symbol");
        a.setAttribute("id", i), this.replaceInParent(e, i), a.appendChild(e.layerElement), r.appendChild(a);
        var n = createNS("use");
        n.setAttribute("href", "#" + i), s.appendChild(n), e.data.hd = !1, e.show()
      }
      t.setMatte(e.layerId)
    }, SVGMatte3Effect.prototype.initialize = function() {
      for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, s = e.length; i < s;) e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), i += 1;
      this.initialized = !0
    }, SVGMatte3Effect.prototype.renderFrame = function() {
      this.initialized || this.initialize()
    }, SVGEffects.prototype.renderFrame = function(t) {
      var e, i = this.filters.length;
      for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
    }, CVContextData.prototype.duplicate = function() {
      var t = 2 * this._length,
        e = this.savedOp;
      this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
      var i = 0;
      for (i = this._length; i < t; i += 1) this.saved[i] = createTypedArray("float32", 16);
      this._length = t
    }, CVContextData.prototype.reset = function() {
      this.cArrPos = 0, this.cTr.reset(), this.cO = 1
    }, CVBaseElement.prototype = {
      createElements: function() {},
      initRendererElement: function() {},
      createContainerElements: function() {
        this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this)
      },
      createContent: function() {},
      setBlendMode: function() {
        var t = this.globalData;
        if (t.blendMode !== this.data.bm) {
          t.blendMode = this.data.bm;
          var e = getBlendMode(this.data.bm);
          t.canvasContext.globalCompositeOperation = e
        }
      },
      createRenderableComponents: function() {
        this.maskManager = new CVMaskElement(this.data, this)
      },
      hideElement: function() {
        this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
      },
      showElement: function() {
        this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
      },
      renderFrame: function() {
        if (!this.hidden && !this.data.hd) {
          this.renderTransform(), this.renderRenderable(), this.setBlendMode();
          var t = 0 === this.data.ty;
          this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
        }
      },
      destroy: function() {
        this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
      },
      mHelper: new Matrix
    }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
      if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
        var t = createTag("canvas");
        t.width = this.assetData.w, t.height = this.assetData.h;
        var e, i, s = t.getContext("2d"),
          r = this.img.width,
          a = this.img.height,
          n = r / a,
          o = this.assetData.w / this.assetData.h,
          h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
        n > o && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? e = (i = a) * o : i = (e = r) / o, s.drawImage(this.img, (r - e) / 2, (a - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h), this.img = t
      }
    }, CVImageElement.prototype.renderInnerContent = function() {
      this.canvasContext.drawImage(this.img, 0, 0)
    }, CVImageElement.prototype.destroy = function() {
      this.img = null
    }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
      var t, e = this.canvasContext;
      for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
    }, CVCompElement.prototype.destroy = function() {
      var t;
      for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
      this.layers = null, this.elements = null
    }, CVMaskElement.prototype.renderFrame = function() {
      if (this.hasMasks) {
        var t, e, i, s, r = this.element.finalTransform.mat,
          a = this.element.canvasContext,
          n = this.masksProperties.length;
        for (a.beginPath(), t = 0; t < n; t += 1)
          if ("n" !== this.masksProperties[t].mode) {
            var o;
            this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), s = this.viewData[t].v, e = r.applyToPointArray(s.v[0][0], s.v[0][1], 0), a.moveTo(e[0], e[1]);
            var h = s._length;
            for (o = 1; o < h; o += 1) i = r.applyToTriplePoints(s.o[o - 1], s.i[o], s.v[o]), a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
            i = r.applyToTriplePoints(s.o[o - 1], s.i[0], s.v[0]), a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5])
          } this.element.globalData.renderer.save(!0), a.clip()
      }
    }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
      this.element = null
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
      opacity: 1,
      _opMdf: !1
    }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
    }, CVShapeElement.prototype.createStyleElement = function(t, e) {
      var i = {
          data: t,
          type: t.ty,
          preTransforms: this.transformsManager.addTransformSequence(e),
          transforms: [],
          elements: [],
          closed: !0 === t.hd
        },
        s = {};
      if ("fl" === t.ty || "st" === t.ty ? (s.c = PropertyFactory.getProp(this, t.c, 1, 255, this), s.c.k || (i.co = "rgb(" + bmFloor(s.c.v[0]) + "," + bmFloor(s.c.v[1]) + "," + bmFloor(s.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (s.s = PropertyFactory.getProp(this, t.s, 1, null, this), s.e = PropertyFactory.getProp(this, t.e, 1, null, this), s.h = PropertyFactory.getProp(this, t.h || {
          k: 0
        }, 0, .01, this), s.a = PropertyFactory.getProp(this, t.a || {
          k: 0
        }, 0, degToRads, this), s.g = new GradientProperty(this, t.g, this)), s.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
        if (i.lc = lineCapEnum[t.lc || 2], i.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (i.ml = t.ml), s.w = PropertyFactory.getProp(this, t.w, 0, null, this), s.w.k || (i.wi = s.w.v), t.d) {
          var r = new DashProperty(this, t.d, "canvas", this);
          s.d = r, s.d.k || (i.da = s.d.dashArray, i.do = s.d.dashoffset[0])
        }
      } else i.r = 2 === t.r ? "evenodd" : "nonzero";
      return this.stylesList.push(i), s.style = i, s
    }, CVShapeElement.prototype.createGroupElement = function() {
      return {
        it: [],
        prevViewData: []
      }
    }, CVShapeElement.prototype.createTransformElement = function(t) {
      return {
        transform: {
          opacity: 1,
          _opMdf: !1,
          key: this.transformsManager.getNewKey(),
          op: PropertyFactory.getProp(this, t.o, 0, .01, this),
          mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
        }
      }
    }, CVShapeElement.prototype.createShapeElement = function(t) {
      var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
      return this.shapes.push(e), this.addShapeToModifiers(e), e
    }, CVShapeElement.prototype.reloadShapes = function() {
      var t;
      this._isFirstFrame = !0;
      var e = this.itemsData.length;
      for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
      this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
    }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
      var e, i = this.stylesList.length;
      for (e = 0; e < i; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
    }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
      var t, e = this.stylesList.length;
      for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
    }, CVShapeElement.prototype.closeStyles = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) t[e].closed = !0
    }, CVShapeElement.prototype.searchShapes = function(t, e, i, s, r) {
      var a, n, o, h, l, p, c = t.length - 1,
        u = [],
        d = [],
        m = [].concat(r);
      for (a = c; a >= 0; a -= 1) {
        if ((h = this.searchProcessedElement(t[a])) ? e[a] = i[h - 1] : t[a]._shouldRender = s, "fl" === t[a].ty || "st" === t[a].ty || "gf" === t[a].ty || "gs" === t[a].ty) h ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], m), u.push(e[a].style);
        else if ("gr" === t[a].ty) {
          if (h)
            for (o = e[a].it.length, n = 0; n < o; n += 1) e[a].prevViewData[n] = e[a].it[n];
          else e[a] = this.createGroupElement(t[a]);
          this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, s, m)
        } else "tr" === t[a].ty ? (h || (p = this.createTransformElement(t[a]), e[a] = p), m.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" === t[a].ty || "rc" === t[a].ty || "el" === t[a].ty || "sr" === t[a].ty ? h || (e[a] = this.createShapeElement(t[a])) : "tm" === t[a].ty || "rd" === t[a].ty || "pb" === t[a].ty ? (h ? (l = e[a]).closed = !1 : ((l = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = l, this.shapeModifiers.push(l)), d.push(l)) : "rp" === t[a].ty && (h ? (l = e[a]).closed = !0 : (l = ShapeModifiers.getModifier(t[a].ty), e[a] = l, l.init(this, t, a, e), this.shapeModifiers.push(l), s = !1), d.push(l));
        this.addProcessedElement(t[a], a + 1)
      }
      for (this.removeTransformFromStyleList(), this.closeStyles(u), c = d.length, a = 0; a < c; a += 1) d[a].closed = !0
    }, CVShapeElement.prototype.renderInnerContent = function() {
      this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
    }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
      (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
    }, CVShapeElement.prototype.drawLayer = function() {
      var t, e, i, s, r, a, n, o, h, l = this.stylesList.length,
        p = this.globalData.renderer,
        c = this.globalData.canvasContext;
      for (t = 0; t < l; t += 1)
        if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
          for (p.save(), a = h.elements, "st" === o || "gs" === o ? (c.strokeStyle = "st" === o ? h.co : h.grd, c.lineWidth = h.wi, c.lineCap = h.lc, c.lineJoin = h.lj, c.miterLimit = h.ml || 0) : c.fillStyle = "fl" === o ? h.co : h.grd, p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && c.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), i = a.length, e = 0; e < i; e += 1) {
            for ("st" !== o && "gs" !== o || (c.beginPath(), h.da && (c.setLineDash(h.da), c.lineDashOffset = h.do)), r = (n = a[e].trNodes).length, s = 0; s < r; s += 1) "m" === n[s].t ? c.moveTo(n[s].p[0], n[s].p[1]) : "c" === n[s].t ? c.bezierCurveTo(n[s].pts[0], n[s].pts[1], n[s].pts[2], n[s].pts[3], n[s].pts[4], n[s].pts[5]) : c.closePath();
            "st" !== o && "gs" !== o || (c.stroke(), h.da && c.setLineDash(this.dashResetter))
          }
          "st" !== o && "gs" !== o && c.fill(h.r), p.restore()
        }
    }, CVShapeElement.prototype.renderShape = function(t, e, i, s) {
      var r, a;
      for (a = t, r = e.length - 1; r >= 0; r -= 1) "tr" === e[r].ty ? (a = i[r].transform, this.renderShapeTransform(t, a)) : "sh" === e[r].ty || "el" === e[r].ty || "rc" === e[r].ty || "sr" === e[r].ty ? this.renderPath(e[r], i[r]) : "fl" === e[r].ty ? this.renderFill(e[r], i[r], a) : "st" === e[r].ty ? this.renderStroke(e[r], i[r], a) : "gf" === e[r].ty || "gs" === e[r].ty ? this.renderGradientFill(e[r], i[r], a) : "gr" === e[r].ty ? this.renderShape(a, e[r].it, i[r].it) : e[r].ty;
      s && this.drawLayer()
    }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
      if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
        var i, s, r, a = t.trNodes,
          n = e.paths,
          o = n._length;
        a.length = 0;
        var h = t.transforms.finalTransform;
        for (r = 0; r < o; r += 1) {
          var l = n.shapes[r];
          if (l && l.v) {
            for (s = l._length, i = 1; i < s; i += 1) 1 === i && a.push({
              t: "m",
              p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
            }), a.push({
              t: "c",
              pts: h.applyToTriplePoints(l.o[i - 1], l.i[i], l.v[i])
            });
            1 === s && a.push({
              t: "m",
              p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
            }), l.c && s && (a.push({
              t: "c",
              pts: h.applyToTriplePoints(l.o[i - 1], l.i[0], l.v[0])
            }), a.push({
              t: "z"
            }))
          }
        }
        t.trNodes = a
      }
    }, CVShapeElement.prototype.renderPath = function(t, e) {
      if (!0 !== t.hd && t._shouldRender) {
        var i, s = e.styledShapes.length;
        for (i = 0; i < s; i += 1) this.renderStyledShape(e.styledShapes[i], e.sh)
      }
    }, CVShapeElement.prototype.renderFill = function(t, e, i) {
      var s = e.style;
      (e.c._mdf || this._isFirstFrame) && (s.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (s.coOp = e.o.v * i.opacity)
    }, CVShapeElement.prototype.renderGradientFill = function(t, e, i) {
      var s, r = e.style;
      if (!r.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
        var a, n = this.globalData.canvasContext,
          o = e.s.v,
          h = e.e.v;
        if (1 === t.t) s = n.createLinearGradient(o[0], o[1], h[0], h[1]);
        else {
          var l = Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2)),
            p = Math.atan2(h[1] - o[1], h[0] - o[0]),
            c = e.h.v;
          c >= 1 ? c = .99 : c <= -1 && (c = -.99);
          var u = l * c,
            d = Math.cos(p + e.a.v) * u + o[0],
            m = Math.sin(p + e.a.v) * u + o[1];
          s = n.createRadialGradient(d, m, 0, o[0], o[1], l)
        }
        var f = t.g.p,
          y = e.g.c,
          g = 1;
        for (a = 0; a < f; a += 1) e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * a + 1]), s.addColorStop(y[4 * a] / 100, "rgba(" + y[4 * a + 1] + "," + y[4 * a + 2] + "," + y[4 * a + 3] + "," + g + ")");
        r.grd = s
      }
      r.coOp = e.o.v * i.opacity
    }, CVShapeElement.prototype.renderStroke = function(t, e, i) {
      var s = e.style,
        r = e.d;
      r && (r._mdf || this._isFirstFrame) && (s.da = r.dashArray, s.do = r.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (s.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (s.coOp = e.o.v * i.opacity), (e.w._mdf || this._isFirstFrame) && (s.wi = e.w.v)
    }, CVShapeElement.prototype.destroy = function() {
      this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
      var t = this.canvasContext;
      t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
      var t = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
      var e = !1;
      t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
      var i = !1;
      t.sc && (i = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
      var s, r, a, n, o, h, l, p, c, u, d, m, f = this.globalData.fontManager.getFontByName(t.f),
        y = t.l,
        g = this.mHelper;
      this.stroke = i, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, r = t.finalText.length;
      var v = this.data.singleShape,
        _ = .001 * t.tr * t.finalSize,
        b = 0,
        E = 0,
        P = !0,
        A = 0;
      for (s = 0; s < r; s += 1) {
        for (n = (a = this.globalData.fontManager.getCharData(t.finalText[s], f.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && a.data || {}, g.reset(), v && y[s].n && (b = -_, E += t.yOffset, E += P ? 1 : 0, P = !1), c = (l = n.shapes ? n.shapes[0].it : []).length, g.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, g, y[s].line, b, E), d = createSizedArray(c), p = 0; p < c; p += 1) {
          for (h = l[p].ks.k.i.length, u = l[p].ks.k, m = [], o = 1; o < h; o += 1) 1 === o && m.push(g.applyToX(u.v[0][0], u.v[0][1], 0), g.applyToY(u.v[0][0], u.v[0][1], 0)), m.push(g.applyToX(u.o[o - 1][0], u.o[o - 1][1], 0), g.applyToY(u.o[o - 1][0], u.o[o - 1][1], 0), g.applyToX(u.i[o][0], u.i[o][1], 0), g.applyToY(u.i[o][0], u.i[o][1], 0), g.applyToX(u.v[o][0], u.v[o][1], 0), g.applyToY(u.v[o][0], u.v[o][1], 0));
          m.push(g.applyToX(u.o[o - 1][0], u.o[o - 1][1], 0), g.applyToY(u.o[o - 1][0], u.o[o - 1][1], 0), g.applyToX(u.i[0][0], u.i[0][1], 0), g.applyToY(u.i[0][0], u.i[0][1], 0), g.applyToX(u.v[0][0], u.v[0][1], 0), g.applyToY(u.v[0][0], u.v[0][1], 0)), d[p] = m
        }
        v && (b += y[s].l, b += _), this.textSpans[A] ? this.textSpans[A].elem = d : this.textSpans[A] = {
          elem: d
        }, A += 1
      }
    }, CVTextElement.prototype.renderInnerContent = function() {
      var t, e, i, s, r, a, n = this.canvasContext;
      n.font = this.values.fValue, n.lineCap = "butt", n.lineJoin = "miter", n.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
      var o, h = this.textAnimator.renderedLetters,
        l = this.textProperty.currentData.l;
      e = l.length;
      var p, c, u = null,
        d = null,
        m = null;
      for (t = 0; t < e; t += 1)
        if (!l[t].n) {
          if ((o = h[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
            for (o && o.fc ? u !== o.fc && (u = o.fc, n.fillStyle = o.fc) : u !== this.values.fill && (u = this.values.fill, n.fillStyle = this.values.fill), s = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1)
              for (a = (c = p[i]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), r = 2; r < a; r += 6) this.globalData.canvasContext.bezierCurveTo(c[r], c[r + 1], c[r + 2], c[r + 3], c[r + 4], c[r + 5]);
            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
          }
          if (this.stroke) {
            for (o && o.sw ? m !== o.sw && (m = o.sw, n.lineWidth = o.sw) : m !== this.values.sWidth && (m = this.values.sWidth, n.lineWidth = this.values.sWidth), o && o.sc ? d !== o.sc && (d = o.sc, n.strokeStyle = o.sc) : d !== this.values.stroke && (d = this.values.stroke, n.strokeStyle = this.values.stroke), s = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1)
              for (a = (c = p[i]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), r = 2; r < a; r += 6) this.globalData.canvasContext.bezierCurveTo(c[r], c[r + 1], c[r + 2], c[r + 3], c[r + 4], c[r + 5]);
            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
          }
          o && this.globalData.renderer.restore()
        }
    }, CVEffects.prototype.renderFrame = function() {}, HBaseElement.prototype = {
      checkBlendMode: function() {},
      initRendererElement: function() {
        this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
      },
      createContainerElements: function() {
        this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
      },
      renderElement: function() {
        var t = this.transformedElement ? this.transformedElement.style : {};
        if (this.finalTransform._matMdf) {
          var e = this.finalTransform.mat.toCSS();
          t.transform = e, t.webkitTransform = e
        }
        this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
      },
      renderFrame: function() {
        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
      },
      destroy: function() {
        this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
      },
      createRenderableComponents: function() {
        this.maskManager = new MaskElement(this.data, this, this.globalData)
      },
      addEffects: function() {},
      setMatte: function() {}
    }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
      var t;
      this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
    }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
      this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
    }, HCompElement.prototype.addTo3dContainer = function(t, e) {
      for (var i, s = 0; s < e;) this.elements[s] && this.elements[s].getBaseElement && (i = this.elements[s].getBaseElement()), s += 1;
      i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
    }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
      var t;
      if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
      else {
        t = createNS("svg");
        var e = this.comp.data ? this.comp.data : this.globalData.compSize;
        t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
      }
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
    }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
      var i, s = t.length;
      for (i = 0; i < s; i += 1) e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
      return e
    }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
      var i, s, r, a, n, o = t.sh.v,
        h = t.transformers,
        l = o._length;
      if (!(l <= 1)) {
        for (i = 0; i < l - 1; i += 1) s = this.getTransformedPoint(h, o.v[i]), r = this.getTransformedPoint(h, o.o[i]), a = this.getTransformedPoint(h, o.i[i + 1]), n = this.getTransformedPoint(h, o.v[i + 1]), this.checkBounds(s, r, a, n, e);
        o.c && (s = this.getTransformedPoint(h, o.v[i]), r = this.getTransformedPoint(h, o.o[i]), a = this.getTransformedPoint(h, o.i[0]), n = this.getTransformedPoint(h, o.v[0]), this.checkBounds(s, r, a, n, e))
      }
    }, HShapeElement.prototype.checkBounds = function(t, e, i, s, r) {
      this.getBoundsOfCurve(t, e, i, s);
      var a = this.shapeBoundingBox;
      r.x = bmMin(a.left, r.x), r.xMax = bmMax(a.right, r.xMax), r.y = bmMin(a.top, r.y), r.yMax = bmMax(a.bottom, r.yMax)
    }, HShapeElement.prototype.shapeBoundingBox = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, HShapeElement.prototype.tempBoundingBox = {
      x: 0,
      xMax: 0,
      y: 0,
      yMax: 0,
      width: 0,
      height: 0
    }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, i, s) {
      for (var r, a, n, o, h, l, p, c = [
          [t[0], s[0]],
          [t[1], s[1]]
        ], u = 0; u < 2; ++u) a = 6 * t[u] - 12 * e[u] + 6 * i[u], r = -3 * t[u] + 9 * e[u] - 9 * i[u] + 3 * s[u], n = 3 * e[u] - 3 * t[u], a |= 0, n |= 0, 0 == (r |= 0) && 0 === a || (0 === r ? (o = -n / a) > 0 && o < 1 && c[u].push(this.calculateF(o, t, e, i, s, u)) : (h = a * a - 4 * n * r) >= 0 && ((l = (-a + bmSqrt(h)) / (2 * r)) > 0 && l < 1 && c[u].push(this.calculateF(l, t, e, i, s, u)), (p = (-a - bmSqrt(h)) / (2 * r)) > 0 && p < 1 && c[u].push(this.calculateF(p, t, e, i, s, u))));
      this.shapeBoundingBox.left = bmMin.apply(null, c[0]), this.shapeBoundingBox.top = bmMin.apply(null, c[1]), this.shapeBoundingBox.right = bmMax.apply(null, c[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, c[1])
    }, HShapeElement.prototype.calculateF = function(t, e, i, s, r, a) {
      return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * i[a] + 3 * (1 - t) * bmPow(t, 2) * s[a] + bmPow(t, 3) * r[a]
    }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
      var i, s = t.length;
      for (i = 0; i < s; i += 1) t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it && this.calculateBoundingBox(t[i].it, e)
    }, HShapeElement.prototype.currentBoxContains = function(t) {
      return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
    }, HShapeElement.prototype.renderInnerContent = function() {
      if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
        var t = this.tempBoundingBox,
          e = 999999;
        if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
        var i = !1;
        if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), i = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), i = !0), i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
          this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
          var s = this.shapeCont.style,
            r = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
          s.transform = r, s.webkitTransform = r
        }
      }
    }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
      if (this.isMasked = this.checkMasks(), this.isMasked) {
        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
        var t = createNS("g");
        this.maskedElement.appendChild(t), this.innerElem = t
      } else this.renderType = "html", this.innerElem = this.layerElement;
      this.checkParenting()
    }, HTextElement.prototype.buildNewText = function() {
      var t = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
      var e = this.innerElem.style,
        i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
      e.fill = i, e.color = i, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
      var s, r, a = this.globalData.fontManager.getFontByName(t.f);
      if (!this.globalData.fontManager.chars)
        if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", a.fClass) this.innerElem.className = a.fClass;
        else {
          e.fontFamily = a.fFamily;
          var n = t.fWeight,
            o = t.fStyle;
          e.fontStyle = o, e.fontWeight = n
        } var h, l, p, c = t.l;
      r = c.length;
      var u, d = this.mHelper,
        m = "",
        f = 0;
      for (s = 0; s < r; s += 1) {
        if (this.globalData.fontManager.chars ? (this.textPaths[f] ? h = this.textPaths[f] : ((h = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), h.setAttribute("stroke-linejoin", lineJoinEnum[2]), h.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[f] ? p = (l = this.textSpans[f]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (p = createNS("svg")).appendChild(h), styleDiv(l)))) : this.isMasked ? h = this.textPaths[f] ? this.textPaths[f] : createNS("text") : this.textSpans[f] ? (l = this.textSpans[f], h = this.textPaths[f]) : (styleDiv(l = createTag("span")), styleDiv(h = createTag("span")), l.appendChild(h)), this.globalData.fontManager.chars) {
          var y, g = this.globalData.fontManager.getCharData(t.finalText[s], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
          if (y = g ? g.data : null, d.reset(), y && y.shapes && (u = y.shapes[0].it, d.scale(t.finalSize / 100, t.finalSize / 100), m = this.createPathShape(d, u), h.setAttribute("d", m)), this.isMasked) this.innerElem.appendChild(h);
          else {
            if (this.innerElem.appendChild(l), y && y.shapes) {
              document.body.appendChild(p);
              var v = p.getBBox();
              p.setAttribute("width", v.width + 2), p.setAttribute("height", v.height + 2), p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
              var _ = p.style,
                b = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
              _.transform = b, _.webkitTransform = b, c[s].yOffset = v.y - 1
            } else p.setAttribute("width", 1), p.setAttribute("height", 1);
            l.appendChild(p)
          }
        } else if (h.textContent = c[s].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(h);
        else {
          this.innerElem.appendChild(l);
          var E = h.style,
            P = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
          E.transform = P, E.webkitTransform = P
        }
        this.isMasked ? this.textSpans[f] = h : this.textSpans[f] = l, this.textSpans[f].style.display = "block", this.textPaths[f] = h, f += 1
      }
      for (; f < this.textSpans.length;) this.textSpans[f].style.display = "none", f += 1
    }, HTextElement.prototype.renderInnerContent = function() {
      var t;
      if (this.data.singleShape) {
        if (!this._isFirstFrame && !this.lettersChangedFlag) return;
        if (this.isMasked && this.finalTransform._matMdf) {
          this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
          var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
          t.transform = e, t.webkitTransform = e
        }
      }
      if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
        var i, s, r, a, n, o = 0,
          h = this.textAnimator.renderedLetters,
          l = this.textProperty.currentData.l;
        for (s = l.length, i = 0; i < s; i += 1) l[i].n ? o += 1 : (a = this.textSpans[i], n = this.textPaths[i], r = h[o], o += 1, r._mdf.m && (this.isMasked ? a.setAttribute("transform", r.m) : (a.style.webkitTransform = r.m, a.style.transform = r.m)), a.style.opacity = r.o, r.sw && r._mdf.sw && n.setAttribute("stroke-width", r.sw), r.sc && r._mdf.sc && n.setAttribute("stroke", r.sc), r.fc && r._mdf.fc && (n.setAttribute("fill", r.fc), n.style.color = r.fc));
        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
          var p = this.innerElem.getBBox();
          if (this.currentBBox.w !== p.width && (this.currentBBox.w = p.width, this.svgElement.setAttribute("width", p.width)), this.currentBBox.h !== p.height && (this.currentBBox.h = p.height, this.svgElement.setAttribute("height", p.height)), this.currentBBox.w !== p.width + 2 || this.currentBBox.h !== p.height + 2 || this.currentBBox.x !== p.x - 1 || this.currentBBox.y !== p.y - 1) {
            this.currentBBox.w = p.width + 2, this.currentBBox.h = p.height + 2, this.currentBBox.x = p.x - 1, this.currentBBox.y = p.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
            var c = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
            t.transform = c, t.webkitTransform = c
          }
        }
      }
    }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
      var t = this.globalData.getAssetsPath(this.assetData),
        e = new Image;
      this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
    }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
      var t, e, i, s, r = this.comp.threeDElements.length;
      for (t = 0; t < r; t += 1)
        if ("3d" === (e = this.comp.threeDElements[t]).type) {
          i = e.perspectiveElem.style, s = e.container.style;
          var a = this.pe.v + "px",
            n = "0px 0px 0px",
            o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
          i.perspective = a, i.webkitPerspective = a, s.transformOrigin = n, s.mozTransformOrigin = n, s.webkitTransformOrigin = n, i.transform = o, i.webkitTransform = o
        }
    }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
      var t, e, i = this._isFirstFrame;
      if (this.hierarchy)
        for (e = this.hierarchy.length, t = 0; t < e; t += 1) i = this.hierarchy[t].finalTransform.mProp._mdf || i;
      if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
        if (this.mat.reset(), this.hierarchy)
          for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
            var s = this.hierarchy[t].finalTransform.mProp;
            this.mat.translate(-s.p.v[0], -s.p.v[1], s.p.v[2]), this.mat.rotateX(-s.or.v[0]).rotateY(-s.or.v[1]).rotateZ(s.or.v[2]), this.mat.rotateX(-s.rx.v).rotateY(-s.ry.v).rotateZ(s.rz.v), this.mat.scale(1 / s.s.v[0], 1 / s.s.v[1], 1 / s.s.v[2]), this.mat.translate(s.a.v[0], s.a.v[1], s.a.v[2])
          }
        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
          var r;
          r = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
          var a = Math.sqrt(Math.pow(r[0], 2) + Math.pow(r[1], 2) + Math.pow(r[2], 2)),
            n = [r[0] / a, r[1] / a, r[2] / a],
            o = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
            h = Math.atan2(n[1], o),
            l = Math.atan2(n[0], -n[2]);
          this.mat.rotateY(l).rotateX(-h)
        }
        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
        var p = !this._prevMat.equals(this.mat);
        if ((p || this.pe._mdf) && this.comp.threeDElements) {
          var c, u, d;
          for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
            if ("3d" === (c = this.comp.threeDElements[t]).type) {
              if (p) {
                var m = this.mat.toCSS();
                (d = c.container.style).transform = m, d.webkitTransform = m
              }
              this.pe._mdf && ((u = c.perspectiveElem.style).perspective = this.pe.v + "px", u.webkitPerspective = this.pe.v + "px")
            } this.mat.clone(this._prevMat)
        }
      }
      this._isFirstFrame = !1
    }, HCameraElement.prototype.prepareFrame = function(t) {
      this.prepareProperties(t, !0)
    }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
      return null
    }, HEffects.prototype.renderFrame = function() {};
    var animationManager = function() {
        var t = {},
          e = [],
          i = 0,
          s = 0,
          r = 0,
          a = !0,
          n = !1;

        function o(t) {
          for (var i = 0, r = t.target; i < s;) e[i].animation === r && (e.splice(i, 1), i -= 1, s -= 1, r.isPaused || p()), i += 1
        }

        function h(t, i) {
          if (!t) return null;
          for (var r = 0; r < s;) {
            if (e[r].elem === t && null !== e[r].elem) return e[r].animation;
            r += 1
          }
          var a = new AnimationItem;
          return c(a, t), a.setData(t, i), a
        }

        function l() {
          r += 1, m()
        }

        function p() {
          r -= 1
        }

        function c(t, i) {
          t.addEventListener("destroy", o), t.addEventListener("_active", l), t.addEventListener("_idle", p), e.push({
            elem: i,
            animation: t
          }), s += 1
        }

        function u(t) {
          var o, h = t - i;
          for (o = 0; o < s; o += 1) e[o].animation.advanceTime(h);
          i = t, r && !n ? window.requestAnimationFrame(u) : a = !0
        }

        function d(t) {
          i = t, window.requestAnimationFrame(u)
        }

        function m() {
          !n && r && a && (window.requestAnimationFrame(d), a = !1)
        }
        return t.registerAnimation = h, t.loadAnimation = function(t) {
          var e = new AnimationItem;
          return c(e, null), e.setParams(t), e
        }, t.setSpeed = function(t, i) {
          var r;
          for (r = 0; r < s; r += 1) e[r].animation.setSpeed(t, i)
        }, t.setDirection = function(t, i) {
          var r;
          for (r = 0; r < s; r += 1) e[r].animation.setDirection(t, i)
        }, t.play = function(t) {
          var i;
          for (i = 0; i < s; i += 1) e[i].animation.play(t)
        }, t.pause = function(t) {
          var i;
          for (i = 0; i < s; i += 1) e[i].animation.pause(t)
        }, t.stop = function(t) {
          var i;
          for (i = 0; i < s; i += 1) e[i].animation.stop(t)
        }, t.togglePause = function(t) {
          var i;
          for (i = 0; i < s; i += 1) e[i].animation.togglePause(t)
        }, t.searchAnimations = function(t, e, i) {
          var s, r = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
            a = r.length;
          for (s = 0; s < a; s += 1) i && r[s].setAttribute("data-bm-type", i), h(r[s], t);
          if (e && 0 === a) {
            i || (i = "svg");
            var n = document.getElementsByTagName("body")[0];
            n.innerText = "";
            var o = createTag("div");
            o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", i), n.appendChild(o), h(o, t)
          }
        }, t.resize = function() {
          var t;
          for (t = 0; t < s; t += 1) e[t].animation.resize()
        }, t.goToAndStop = function(t, i, r) {
          var a;
          for (a = 0; a < s; a += 1) e[a].animation.goToAndStop(t, i, r)
        }, t.destroy = function(t) {
          var i;
          for (i = s - 1; i >= 0; i -= 1) e[i].animation.destroy(t)
        }, t.freeze = function() {
          n = !0
        }, t.unfreeze = function() {
          n = !1, m()
        }, t.setVolume = function(t, i) {
          var r;
          for (r = 0; r < s; r += 1) e[r].animation.setVolume(t, i)
        }, t.mute = function(t) {
          var i;
          for (i = 0; i < s; i += 1) e[i].animation.mute(t)
        }, t.unmute = function(t) {
          var i;
          for (i = 0; i < s; i += 1) e[i].animation.unmute(t)
        }, t.getRegisteredAnimations = function() {
          var t, i = e.length,
            s = [];
          for (t = 0; t < i; t += 1) s.push(e[t].animation);
          return s
        }, t
      }(),
      AnimationItem = function() {
        this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = []
      };
    extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
      (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
      var e = "svg";
      switch (t.animType ? e = t.animType : t.renderer && (e = t.renderer), e) {
        case "canvas":
          this.renderer = new CanvasRenderer(this, t.rendererSettings);
          break;
        case "svg":
          this.renderer = new SVGRenderer(this, t.rendererSettings);
          break;
        default:
          this.renderer = new HybridRenderer(this, t.rendererSettings)
      }
      this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), function() {
        this.trigger("data_failed")
      }.bind(this)))
    }, AnimationItem.prototype.setData = function(t, e) {
      e && "object" != typeof e && (e = JSON.parse(e));
      var i = {
          wrapper: t,
          animationData: e
        },
        s = t.attributes;
      i.path = s.getNamedItem("data-animation-path") ? s.getNamedItem("data-animation-path").value : s.getNamedItem("data-bm-path") ? s.getNamedItem("data-bm-path").value : s.getNamedItem("bm-path") ? s.getNamedItem("bm-path").value : "", i.animType = s.getNamedItem("data-anim-type") ? s.getNamedItem("data-anim-type").value : s.getNamedItem("data-bm-type") ? s.getNamedItem("data-bm-type").value : s.getNamedItem("bm-type") ? s.getNamedItem("bm-type").value : s.getNamedItem("data-bm-renderer") ? s.getNamedItem("data-bm-renderer").value : s.getNamedItem("bm-renderer") ? s.getNamedItem("bm-renderer").value : "canvas";
      var r = s.getNamedItem("data-anim-loop") ? s.getNamedItem("data-anim-loop").value : s.getNamedItem("data-bm-loop") ? s.getNamedItem("data-bm-loop").value : s.getNamedItem("bm-loop") ? s.getNamedItem("bm-loop").value : "";
      "false" === r ? i.loop = !1 : "true" === r ? i.loop = !0 : "" !== r && (i.loop = parseInt(r, 10));
      var a = s.getNamedItem("data-anim-autoplay") ? s.getNamedItem("data-anim-autoplay").value : s.getNamedItem("data-bm-autoplay") ? s.getNamedItem("data-bm-autoplay").value : !s.getNamedItem("bm-autoplay") || s.getNamedItem("bm-autoplay").value;
      i.autoplay = "false" !== a, i.name = s.getNamedItem("data-name") ? s.getNamedItem("data-name").value : s.getNamedItem("data-bm-name") ? s.getNamedItem("data-bm-name").value : s.getNamedItem("bm-name") ? s.getNamedItem("bm-name").value : "", "false" === (s.getNamedItem("data-anim-prerender") ? s.getNamedItem("data-anim-prerender").value : s.getNamedItem("data-bm-prerender") ? s.getNamedItem("data-bm-prerender").value : s.getNamedItem("bm-prerender") ? s.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), this.setParams(i)
    }, AnimationItem.prototype.includeLayers = function(t) {
      t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
      var e, i, s = this.animationData.layers,
        r = s.length,
        a = t.layers,
        n = a.length;
      for (i = 0; i < n; i += 1)
        for (e = 0; e < r;) {
          if (s[e].id === a[i].id) {
            s[e] = a[i];
            break
          }
          e += 1
        }
      if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
        for (r = t.assets.length, e = 0; e < r; e += 1) this.animationData.assets.push(t.assets[e]);
      this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment()
    }, AnimationItem.prototype.loadNextSegment = function() {
      var t = this.animationData.segments;
      if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
      var e = t.shift();
      this.timeCompleted = e.time * this.frameRate;
      var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
      this.segmentPos += 1, assetLoader.load(i, this.includeLayers.bind(this), function() {
        this.trigger("data_failed")
      }.bind(this))
    }, AnimationItem.prototype.loadSegments = function() {
      this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
    }, AnimationItem.prototype.imagesLoaded = function() {
      this.trigger("loaded_images"), this.checkLoaded()
    }, AnimationItem.prototype.preloadImages = function() {
      this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
    }, AnimationItem.prototype.configAnimation = function(t) {
      if (this.renderer) try {
        this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
      } catch (t) {
        this.triggerConfigError(t)
      }
    }, AnimationItem.prototype.waitForFontsLoaded = function() {
      this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
    }, AnimationItem.prototype.checkLoaded = function() {
      !this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages() && (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
        this.trigger("DOMLoaded")
      }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play())
    }, AnimationItem.prototype.resize = function() {
      this.renderer.updateContainerSize()
    }, AnimationItem.prototype.setSubframe = function(t) {
      this.isSubframeEnabled = !!t
    }, AnimationItem.prototype.gotoFrame = function() {
      this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
    }, AnimationItem.prototype.renderFrame = function() {
      if (!1 !== this.isLoaded && this.renderer) try {
        this.renderer.renderFrame(this.currentFrame + this.firstFrame)
      } catch (t) {
        this.triggerRenderFrameError(t)
      }
    }, AnimationItem.prototype.play = function(t) {
      t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
    }, AnimationItem.prototype.pause = function(t) {
      t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"), this.audioController.pause())
    }, AnimationItem.prototype.togglePause = function(t) {
      t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
    }, AnimationItem.prototype.stop = function(t) {
      t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
    }, AnimationItem.prototype.getMarkerData = function(t) {
      for (var e, i = 0; i < this.markers.length; i += 1)
        if ((e = this.markers[i]).payload && e.payload.name === t) return e;
      return null
    }, AnimationItem.prototype.goToAndStop = function(t, e, i) {
      if (!i || this.name === i) {
        var s = Number(t);
        if (isNaN(s)) {
          var r = this.getMarkerData(t);
          r && this.goToAndStop(r.time, !0)
        } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
        this.pause()
      }
    }, AnimationItem.prototype.goToAndPlay = function(t, e, i) {
      if (!i || this.name === i) {
        var s = Number(t);
        if (isNaN(s)) {
          var r = this.getMarkerData(t);
          r && (r.duration ? this.playSegments([r.time, r.time + r.duration], !0) : this.goToAndStop(r.time, !0))
        } else this.goToAndStop(s, e, i);
        this.play()
      }
    }, AnimationItem.prototype.advanceTime = function(t) {
      if (!0 !== this.isPaused && !1 !== this.isLoaded) {
        var e = this.currentRawFrame + t * this.frameModifier,
          i = !1;
        e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
      }
    }, AnimationItem.prototype.adjustSegment = function(t, e) {
      this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
    }, AnimationItem.prototype.setSegment = function(t, e) {
      var i = -1;
      this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== i && this.goToAndStop(i, !0)
    }, AnimationItem.prototype.playSegments = function(t, e) {
      if (e && (this.segments.length = 0), "object" == typeof t[0]) {
        var i, s = t.length;
        for (i = 0; i < s; i += 1) this.segments.push(t[i])
      } else this.segments.push(t);
      this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
    }, AnimationItem.prototype.resetSegments = function(t) {
      this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
    }, AnimationItem.prototype.checkSegments = function(t) {
      return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
    }, AnimationItem.prototype.destroy = function(t) {
      t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
    }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
      this.currentRawFrame = t, this.gotoFrame()
    }, AnimationItem.prototype.setSpeed = function(t) {
      this.playSpeed = t, this.updaFrameModifier()
    }, AnimationItem.prototype.setDirection = function(t) {
      this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
    }, AnimationItem.prototype.setVolume = function(t, e) {
      e && this.name !== e || this.audioController.setVolume(t)
    }, AnimationItem.prototype.getVolume = function() {
      return this.audioController.getVolume()
    }, AnimationItem.prototype.mute = function(t) {
      t && this.name !== t || this.audioController.mute()
    }, AnimationItem.prototype.unmute = function(t) {
      t && this.name !== t || this.audioController.unmute()
    }, AnimationItem.prototype.updaFrameModifier = function() {
      this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
    }, AnimationItem.prototype.getPath = function() {
      return this.path
    }, AnimationItem.prototype.getAssetsPath = function(t) {
      var e = "";
      if (t.e) e = t.p;
      else if (this.assetsPath) {
        var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i
      } else e = this.path, e += t.u ? t.u : "", e += t.p;
      return e
    }, AnimationItem.prototype.getAssetData = function(t) {
      for (var e = 0, i = this.assets.length; e < i;) {
        if (t === this.assets[e].id) return this.assets[e];
        e += 1
      }
      return null
    }, AnimationItem.prototype.hide = function() {
      this.renderer.hide()
    }, AnimationItem.prototype.show = function() {
      this.renderer.show()
    }, AnimationItem.prototype.getDuration = function(t) {
      return t ? this.totalFrames : this.totalFrames / this.frameRate
    }, AnimationItem.prototype.trigger = function(t) {
      if (this._cbs && this._cbs[t]) switch (t) {
        case "enterFrame":
          this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
          break;
        case "loopComplete":
          this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
          break;
        case "complete":
          this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
          break;
        case "segmentStart":
          this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
          break;
        case "destroy":
          this.triggerEvent(t, new BMDestroyEvent(t, this));
          break;
        default:
          this.triggerEvent(t)
      }
      "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
    }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
      var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
    }, AnimationItem.prototype.triggerConfigError = function(t) {
      var e = new BMConfigErrorEvent(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
    };
    var Expressions = function() {
      var t = {
        initExpressions: function(t) {
          var e = 0,
            i = [];
          t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
            e += 1
          }, t.renderer.globalData.popExpression = function() {
            0 == (e -= 1) && function() {
              var t, e = i.length;
              for (t = 0; t < e; t += 1) i[t].release();
              i.length = 0
            }()
          }, t.renderer.globalData.registerExpressionProperty = function(t) {
            -1 === i.indexOf(t) && i.push(t)
          }
        }
      };
      return t
    }();
    expressionsPlugin = Expressions;
    var ExpressionManager = function() {
        var ob = {},
          Math = BMMath,
          window = null,
          document = null,
          XMLHttpRequest = null,
          fetch = null;

        function $bm_isInstanceOfArray(t) {
          return t.constructor === Array || t.constructor === Float32Array
        }

        function isNumerable(t, e) {
          return "number" === t || "boolean" === t || "string" === t || e instanceof Number
        }

        function $bm_neg(t) {
          var e = typeof t;
          if ("number" === e || "boolean" === e || t instanceof Number) return -t;
          if ($bm_isInstanceOfArray(t)) {
            var i, s = t.length,
              r = [];
            for (i = 0; i < s; i += 1) r[i] = -t[i];
            return r
          }
          return t.propType ? t.v : -t
        }
        var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
          easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
          easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

        function sum(t, e) {
          var i = typeof t,
            s = typeof e;
          if ("string" === i || "string" === s) return t + e;
          if (isNumerable(i, t) && isNumerable(s, e)) return t + e;
          if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) return (t = t.slice(0))[0] += e, t;
          if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
          if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
            for (var r = 0, a = t.length, n = e.length, o = []; r < a || r < n;)("number" == typeof t[r] || t[r] instanceof Number) && ("number" == typeof e[r] || e[r] instanceof Number) ? o[r] = t[r] + e[r] : o[r] = void 0 === e[r] ? t[r] : t[r] || e[r], r += 1;
            return o
          }
          return 0
        }
        var add = sum;

        function sub(t, e) {
          var i = typeof t,
            s = typeof e;
          if (isNumerable(i, t) && isNumerable(s, e)) return "string" === i && (t = parseInt(t, 10)), "string" === s && (e = parseInt(e, 10)), t - e;
          if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) return (t = t.slice(0))[0] -= e, t;
          if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
          if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
            for (var r = 0, a = t.length, n = e.length, o = []; r < a || r < n;)("number" == typeof t[r] || t[r] instanceof Number) && ("number" == typeof e[r] || e[r] instanceof Number) ? o[r] = t[r] - e[r] : o[r] = void 0 === e[r] ? t[r] : t[r] || e[r], r += 1;
            return o
          }
          return 0
        }

        function mul(t, e) {
          var i, s, r, a = typeof t,
            n = typeof e;
          if (isNumerable(a, t) && isNumerable(n, e)) return t * e;
          if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
            for (r = t.length, i = createTypedArray("float32", r), s = 0; s < r; s += 1) i[s] = t[s] * e;
            return i
          }
          if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
            for (r = e.length, i = createTypedArray("float32", r), s = 0; s < r; s += 1) i[s] = t * e[s];
            return i
          }
          return 0
        }

        function div(t, e) {
          var i, s, r, a = typeof t,
            n = typeof e;
          if (isNumerable(a, t) && isNumerable(n, e)) return t / e;
          if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
            for (r = t.length, i = createTypedArray("float32", r), s = 0; s < r; s += 1) i[s] = t[s] / e;
            return i
          }
          if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
            for (r = e.length, i = createTypedArray("float32", r), s = 0; s < r; s += 1) i[s] = t / e[s];
            return i
          }
          return 0
        }

        function mod(t, e) {
          return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e
        }
        var $bm_sum = sum,
          $bm_sub = sub,
          $bm_mul = mul,
          $bm_div = div,
          $bm_mod = mod;

        function clamp(t, e, i) {
          if (e > i) {
            var s = i;
            i = e, e = s
          }
          return Math.min(Math.max(t, e), i)
        }

        function radiansToDegrees(t) {
          return t / degToRads
        }
        var radians_to_degrees = radiansToDegrees;

        function degreesToRadians(t) {
          return t * degToRads
        }
        var degrees_to_radians = radiansToDegrees,
          helperLengthArray = [0, 0, 0, 0, 0, 0];

        function length(t, e) {
          if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
          var i;
          e || (e = helperLengthArray);
          var s = Math.min(t.length, e.length),
            r = 0;
          for (i = 0; i < s; i += 1) r += Math.pow(e[i] - t[i], 2);
          return Math.sqrt(r)
        }

        function normalize(t) {
          return div(t, length(t))
        }

        function rgbToHsl(t) {
          var e, i, s = t[0],
            r = t[1],
            a = t[2],
            n = Math.max(s, r, a),
            o = Math.min(s, r, a),
            h = (n + o) / 2;
          if (n === o) e = 0, i = 0;
          else {
            var l = n - o;
            switch (i = h > .5 ? l / (2 - n - o) : l / (n + o), n) {
              case s:
                e = (r - a) / l + (r < a ? 6 : 0);
                break;
              case r:
                e = (a - s) / l + 2;
                break;
              case a:
                e = (s - r) / l + 4
            }
            e /= 6
          }
          return [e, i, h, t[3]]
        }

        function hue2rgb(t, e, i) {
          return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
        }

        function hslToRgb(t) {
          var e, i, s, r = t[0],
            a = t[1],
            n = t[2];
          if (0 === a) e = n, s = n, i = n;
          else {
            var o = n < .5 ? n * (1 + a) : n + a - n * a,
              h = 2 * n - o;
            e = hue2rgb(h, o, r + 1 / 3), i = hue2rgb(h, o, r), s = hue2rgb(h, o, r - 1 / 3)
          }
          return [e, i, s, t[3]]
        }

        function linear(t, e, i, s, r) {
          if (void 0 !== s && void 0 !== r || (s = e, r = i, e = 0, i = 1), i < e) {
            var a = i;
            i = e, e = a
          }
          if (t <= e) return s;
          if (t >= i) return r;
          var n, o = i === e ? 0 : (t - e) / (i - e);
          if (!s.length) return s + (r - s) * o;
          var h = s.length,
            l = createTypedArray("float32", h);
          for (n = 0; n < h; n += 1) l[n] = s[n] + (r[n] - s[n]) * o;
          return l
        }

        function random(t, e) {
          if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
            var i, s = e.length;
            t || (t = createTypedArray("float32", s));
            var r = createTypedArray("float32", s),
              a = BMMath.random();
            for (i = 0; i < s; i += 1) r[i] = t[i] + a * (e[i] - t[i]);
            return r
          }
          return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
        }

        function createPath(t, e, i, s) {
          var r, a = t.length,
            n = shapePool.newElement();
          n.setPathData(!!s, a);
          var o, h, l = [0, 0];
          for (r = 0; r < a; r += 1) o = e && e[r] ? e[r] : l, h = i && i[r] ? i[r] : l, n.setTripleAt(t[r][0], t[r][1], h[0] + t[r][0], h[1] + t[r][1], o[0] + t[r][0], o[1] + t[r][1], r, !0);
          return n
        }

        function initiateExpression(elem, data, property) {
          var val = data.x,
            needsVelocity = /velocity(?![\w\d])/.test(val),
            _needsRandom = -1 !== val.indexOf("random"),
            elemType = elem.data.ty,
            transform, $bm_transform, content, effect, thisProperty = property;
          thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
            get: function() {
              return thisProperty.v
            }
          }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
          var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
            outPoint = elem.data.op / elem.comp.globalData.frameRate,
            width = elem.data.sw ? elem.data.sw : 0,
            height = elem.data.sh ? elem.data.sh : 0,
            name = elem.data.nm,
            loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
            numKeys = property.kf ? data.k.length : 0,
            active = !this.data || !0 !== this.data.hd,
            wiggle = function(t, e) {
              var i, s, r = this.pv.length ? this.pv.length : 1,
                a = createTypedArray("float32", r),
                n = Math.floor(5 * time);
              for (i = 0, s = 0; i < n;) {
                for (s = 0; s < r; s += 1) a[s] += -e + 2 * e * BMMath.random();
                i += 1
              }
              var o = 5 * time,
                h = o - Math.floor(o),
                l = createTypedArray("float32", r);
              if (r > 1) {
                for (s = 0; s < r; s += 1) l[s] = this.pv[s] + a[s] + (-e + 2 * e * BMMath.random()) * h;
                return l
              }
              return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h
            }.bind(this);

          function loopInDuration(t, e) {
            return loopIn(t, e, !0)
          }

          function loopOutDuration(t, e) {
            return loopOut(t, e, !0)
          }
          thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
          var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
            time, velocity, value, text, textIndex, textTotal, selectorValue;

          function lookAt(t, e) {
            var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
              s = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;
            return [-Math.atan2(i[1], i[2]) / degToRads, s, 0]
          }

          function easeOut(t, e, i, s, r) {
            return applyEase(easeOutBez, t, e, i, s, r)
          }

          function easeIn(t, e, i, s, r) {
            return applyEase(easeInBez, t, e, i, s, r)
          }

          function ease(t, e, i, s, r) {
            return applyEase(easeInOutBez, t, e, i, s, r)
          }

          function applyEase(t, e, i, s, r, a) {
            void 0 === r ? (r = i, a = s) : e = (e - i) / (s - i), e > 1 ? e = 1 : e < 0 && (e = 0);
            var n = t(e);
            if ($bm_isInstanceOfArray(r)) {
              var o, h = r.length,
                l = createTypedArray("float32", h);
              for (o = 0; o < h; o += 1) l[o] = (a[o] - r[o]) * n + r[o];
              return l
            }
            return (a - r) * n + r
          }

          function nearestKey(t) {
            var e, i, s, r = data.k.length;
            if (data.k.length && "number" != typeof data.k[0])
              if (i = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) i = 1, s = data.k[0].t;
              else {
                for (e = 0; e < r - 1; e += 1) {
                  if (t === data.k[e].t) {
                    i = e + 1, s = data.k[e].t;
                    break
                  }
                  if (t > data.k[e].t && t < data.k[e + 1].t) {
                    t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, s = data.k[e + 1].t) : (i = e + 1, s = data.k[e].t);
                    break
                  }
                } - 1 === i && (i = e + 1, s = data.k[e].t)
              }
            else i = 0, s = 0;
            var a = {};
            return a.index = i, a.time = s / elem.comp.globalData.frameRate, a
          }

          function key(t) {
            var e, i, s;
            if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
            t -= 1, e = {
              time: data.k[t].t / elem.comp.globalData.frameRate,
              value: []
            };
            var r = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
            for (s = r.length, i = 0; i < s; i += 1) e[i] = r[i], e.value[i] = r[i];
            return e
          }

          function framesToTime(t, e) {
            return e || (e = elem.comp.globalData.frameRate), t / e
          }

          function timeToFrames(t, e) {
            return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
          }

          function seedRandom(t) {
            BMMath.seedrandom(randSeed + t)
          }

          function sourceRectAtTime() {
            return elem.sourceRectAtTime()
          }

          function substring(t, e) {
            return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
          }

          function substr(t, e) {
            return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
          }

          function posterizeTime(t) {
            time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
          }
          var index = elem.data.ind,
            hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
            parent, randSeed = Math.floor(1e6 * Math.random()),
            globalData = elem.globalData;

          function executeExpression(t) {
            return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt)
          }
          return executeExpression
        }
        return ob.initiateExpression = initiateExpression, ob
      }(),
      expressionHelpers = {
        searchExpressions: function(t, e, i) {
          e.x && (i.k = !0, i.x = !0, i.initiateExpression = ExpressionManager.initiateExpression, i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)))
        },
        getSpeedAtTime: function(t) {
          var e = this.getValueAtTime(t),
            i = this.getValueAtTime(t + -.01),
            s = 0;
          if (e.length) {
            var r;
            for (r = 0; r < e.length; r += 1) s += Math.pow(i[r] - e[r], 2);
            s = 100 * Math.sqrt(s)
          } else s = 0;
          return s
        },
        getVelocityAtTime: function(t) {
          if (void 0 !== this.vel) return this.vel;
          var e, i, s = -.001,
            r = this.getValueAtTime(t),
            a = this.getValueAtTime(t + s);
          if (r.length)
            for (e = createTypedArray("float32", r.length), i = 0; i < r.length; i += 1) e[i] = (a[i] - r[i]) / s;
          else e = (a - r) / s;
          return e
        },
        getValueAtTime: function(t) {
          return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
        },
        getStaticValueAtTime: function() {
          return this.pv
        },
        setGroupProperty: function(t) {
          this.propertyGroup = t
        }
      };
    ! function() {
      function t(t, e, i) {
        if (!this.k || !this.keyframes) return this.pv;
        t = t ? t.toLowerCase() : "";
        var s, r, a, n, o, h = this.comp.renderedFrame,
          l = this.keyframes,
          p = l[l.length - 1].t;
        if (h <= p) return this.pv;
        if (i ? r = p - (s = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), s = p - (r = l[l.length - 1 - e].t)), "pingpong" === t) {
          if (Math.floor((h - r) / s) % 2 != 0) return this.getValueAtTime((s - (h - r) % s + r) / this.comp.globalData.frameRate, 0)
        } else {
          if ("offset" === t) {
            var c = this.getValueAtTime(r / this.comp.globalData.frameRate, 0),
              u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
              d = this.getValueAtTime(((h - r) % s + r) / this.comp.globalData.frameRate, 0),
              m = Math.floor((h - r) / s);
            if (this.pv.length) {
              for (n = (o = new Array(c.length)).length, a = 0; a < n; a += 1) o[a] = (u[a] - c[a]) * m + d[a];
              return o
            }
            return (u - c) * m + d
          }
          if ("continue" === t) {
            var f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
              y = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              for (n = (o = new Array(f.length)).length, a = 0; a < n; a += 1) o[a] = f[a] + (f[a] - y[a]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4;
              return o
            }
            return f + (h - p) / .001 * (f - y)
          }
        }
        return this.getValueAtTime(((h - r) % s + r) / this.comp.globalData.frameRate, 0)
      }

      function e(t, e, i) {
        if (!this.k) return this.pv;
        t = t ? t.toLowerCase() : "";
        var s, r, a, n, o, h = this.comp.renderedFrame,
          l = this.keyframes,
          p = l[0].t;
        if (h >= p) return this.pv;
        if (i ? r = p + (s = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > l.length - 1) && (e = l.length - 1), s = (r = l[e].t) - p), "pingpong" === t) {
          if (Math.floor((p - h) / s) % 2 == 0) return this.getValueAtTime(((p - h) % s + p) / this.comp.globalData.frameRate, 0)
        } else {
          if ("offset" === t) {
            var c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
              u = this.getValueAtTime(r / this.comp.globalData.frameRate, 0),
              d = this.getValueAtTime((s - (p - h) % s + p) / this.comp.globalData.frameRate, 0),
              m = Math.floor((p - h) / s) + 1;
            if (this.pv.length) {
              for (n = (o = new Array(c.length)).length, a = 0; a < n; a += 1) o[a] = d[a] - (u[a] - c[a]) * m;
              return o
            }
            return d - (u - c) * m
          }
          if ("continue" === t) {
            var f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
              y = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              for (n = (o = new Array(f.length)).length, a = 0; a < n; a += 1) o[a] = f[a] + (f[a] - y[a]) * (p - h) / .001;
              return o
            }
            return f + (f - y) * (p - h) / .001
          }
        }
        return this.getValueAtTime((s - ((p - h) % s + p)) / this.comp.globalData.frameRate, 0)
      }

      function i(t, e) {
        if (!this.k) return this.pv;
        if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
        var i, s, r = this.comp.renderedFrame / this.comp.globalData.frameRate,
          a = r - t,
          n = e > 1 ? (r + t - a) / (e - 1) : 1,
          o = 0,
          h = 0;
        for (i = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
          if (s = this.getValueAtTime(a + o * n), this.pv.length)
            for (h = 0; h < this.pv.length; h += 1) i[h] += s[h];
          else i += s;
          o += 1
        }
        if (this.pv.length)
          for (h = 0; h < this.pv.length; h += 1) i[h] /= e;
        else i /= e;
        return i
      }

      function s(t) {
        this._transformCachingAtTime || (this._transformCachingAtTime = {
          v: new Matrix
        });
        var e = this._transformCachingAtTime.v;
        if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
          var i = this.a.getValueAtTime(t);
          e.translate(-i[0] * this.a.mult, -i[1] * this.a.mult, i[2] * this.a.mult)
        }
        if (this.appliedTransformations < 2) {
          var s = this.s.getValueAtTime(t);
          e.scale(s[0] * this.s.mult, s[1] * this.s.mult, s[2] * this.s.mult)
        }
        if (this.sk && this.appliedTransformations < 3) {
          var r = this.sk.getValueAtTime(t),
            a = this.sa.getValueAtTime(t);
          e.skewFromAxis(-r * this.sk.mult, a * this.sa.mult)
        }
        if (this.r && this.appliedTransformations < 4) {
          var n = this.r.getValueAtTime(t);
          e.rotate(-n * this.r.mult)
        } else if (!this.r && this.appliedTransformations < 4) {
          var o = this.rz.getValueAtTime(t),
            h = this.ry.getValueAtTime(t),
            l = this.rx.getValueAtTime(t),
            p = this.or.getValueAtTime(t);
          e.rotateZ(-o * this.rz.mult).rotateY(h * this.ry.mult).rotateX(l * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult)
        }
        if (this.data.p && this.data.p.s) {
          var c = this.px.getValueAtTime(t),
            u = this.py.getValueAtTime(t);
          if (this.data.p.z) {
            var d = this.pz.getValueAtTime(t);
            e.translate(c * this.px.mult, u * this.py.mult, -d * this.pz.mult)
          } else e.translate(c * this.px.mult, u * this.py.mult, 0)
        } else {
          var m = this.p.getValueAtTime(t);
          e.translate(m[0] * this.p.mult, m[1] * this.p.mult, -m[2] * this.p.mult)
        }
        return e
      }

      function r() {
        return this.v.clone(new Matrix)
      }
      var a = TransformPropertyFactory.getTransformProperty;
      TransformPropertyFactory.getTransformProperty = function(t, e, i) {
        var n = a(t, e, i);
        return n.dynamicProperties.length ? n.getValueAtTime = s.bind(n) : n.getValueAtTime = r.bind(n), n.setGroupProperty = expressionHelpers.setGroupProperty, n
      };
      var n = PropertyFactory.getProp;
      PropertyFactory.getProp = function(s, r, a, o, h) {
        var l = n(s, r, a, o, h);
        l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l), l.setGroupProperty = expressionHelpers.setGroupProperty, l.loopOut = t, l.loopIn = e, l.smooth = i, l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l), l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l), l.numKeys = 1 === r.a ? r.k.length : 0, l.propertyIndex = r.ix;
        var p = 0;
        return 0 !== a && (p = createTypedArray("float32", 1 === r.a ? r.k[0].s.length : r.k.length)), l._cachingAtTime = {
          lastFrame: initialDefaultFrame,
          lastIndex: 0,
          value: p
        }, expressionHelpers.searchExpressions(s, r, l), l.k && h.addDynamicProperty(l), l
      };
      var o = ShapePropertyFactory.getConstructorFunction(),
        h = ShapePropertyFactory.getKeyframedConstructorFunction();

      function l() {}
      l.prototype = {
        vertices: function(t, e) {
          this.k && this.getValue();
          var i, s = this.v;
          void 0 !== e && (s = this.getValueAtTime(e, 0));
          var r = s._length,
            a = s[t],
            n = s.v,
            o = createSizedArray(r);
          for (i = 0; i < r; i += 1) o[i] = "i" === t || "o" === t ? [a[i][0] - n[i][0], a[i][1] - n[i][1]] : [a[i][0], a[i][1]];
          return o
        },
        points: function(t) {
          return this.vertices("v", t)
        },
        inTangents: function(t) {
          return this.vertices("i", t)
        },
        outTangents: function(t) {
          return this.vertices("o", t)
        },
        isClosed: function() {
          return this.v.c
        },
        pointOnPath: function(t, e) {
          var i = this.v;
          void 0 !== e && (i = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
          for (var s, r = this._segmentsLength, a = r.lengths, n = r.totalLength * t, o = 0, h = a.length, l = 0; o < h;) {
            if (l + a[o].addedLength > n) {
              var p = o,
                c = i.c && o === h - 1 ? 0 : o + 1,
                u = (n - l) / a[o].addedLength;
              s = bez.getPointInSegment(i.v[p], i.v[c], i.o[p], i.i[c], u, a[o]);
              break
            }
            l += a[o].addedLength, o += 1
          }
          return s || (s = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]), s
        },
        vectorOnPath: function(t, e, i) {
          1 == t ? t = this.v.c : 0 == t && (t = .999);
          var s = this.pointOnPath(t, e),
            r = this.pointOnPath(t + .001, e),
            a = r[0] - s[0],
            n = r[1] - s[1],
            o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
          return 0 === o ? [0, 0] : "tangent" === i ? [a / o, n / o] : [-n / o, a / o]
        },
        tangentOnPath: function(t, e) {
          return this.vectorOnPath(t, e, "tangent")
        },
        normalOnPath: function(t, e) {
          return this.vectorOnPath(t, e, "normal")
        },
        setGroupProperty: expressionHelpers.setGroupProperty,
        getValueAtTime: expressionHelpers.getStaticValueAtTime
      }, extendPrototype([l], o), extendPrototype([l], h), h.prototype.getValueAtTime = function(t) {
        return this._cachingAtTime || (this._cachingAtTime = {
          shapeValue: shapePool.clone(this.pv),
          lastIndex: 0,
          lastTime: initialDefaultFrame
        }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
      }, h.prototype.initiateExpression = ExpressionManager.initiateExpression;
      var p = ShapePropertyFactory.getShapeProp;
      ShapePropertyFactory.getShapeProp = function(t, e, i, s, r) {
        var a = p(t, e, i, s, r);
        return a.propertyIndex = e.ix, a.lock = !1, 3 === i ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === i && expressionHelpers.searchExpressions(t, e.ks, a), a.k && t.addDynamicProperty(a), a
      }
    }(), TextProperty.prototype.getExpressionValue = function(t, e) {
      var i = this.calculateExpression(e);
      if (t.t !== i) {
        var s = {};
        return this.copyData(s, t), s.t = i.toString(), s.__complete = !1, s
      }
      return t
    }, TextProperty.prototype.searchProperty = function() {
      var t = this.searchKeyframes(),
        e = this.searchExpressions();
      return this.kf = t || e, this.kf
    }, TextProperty.prototype.searchExpressions = function() {
      return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
    };
    var ShapePathInterface = function(t, e, i) {
        var s = e.sh;

        function r(t) {
          return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? r.path : null
        }
        var a = propertyGroupFactory(r, i);
        return s.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(r, {
          path: {
            get: function() {
              return s.k && s.getValue(), s
            }
          },
          shape: {
            get: function() {
              return s.k && s.getValue(), s
            }
          },
          _name: {
            value: t.nm
          },
          ix: {
            value: t.ix
          },
          propertyIndex: {
            value: t.ix
          },
          mn: {
            value: t.mn
          },
          propertyGroup: {
            value: i
          }
        }), r
      },
      propertyGroupFactory = function(t, e) {
        return function(i) {
          return (i = void 0 === i ? 1 : i) <= 0 ? t : e(i - 1)
        }
      },
      PropertyInterface = function(t, e) {
        var i = {
          _name: t
        };
        return function(t) {
          return (t = void 0 === t ? 1 : t) <= 0 ? i : e(t - 1)
        }
      },
      ShapeExpressionInterface = function() {
        function t(t, n, u) {
          var d, m = [],
            f = t ? t.length : 0;
          for (d = 0; d < f; d += 1) "gr" === t[d].ty ? m.push(e(t[d], n[d], u)) : "fl" === t[d].ty ? m.push(i(t[d], n[d], u)) : "st" === t[d].ty ? m.push(r(t[d], n[d], u)) : "tm" === t[d].ty ? m.push(a(t[d], n[d], u)) : "tr" === t[d].ty || ("el" === t[d].ty ? m.push(o(t[d], n[d], u)) : "sr" === t[d].ty ? m.push(h(t[d], n[d], u)) : "sh" === t[d].ty ? m.push(ShapePathInterface(t[d], n[d], u)) : "rc" === t[d].ty ? m.push(l(t[d], n[d], u)) : "rd" === t[d].ty ? m.push(p(t[d], n[d], u)) : "rp" === t[d].ty ? m.push(c(t[d], n[d], u)) : "gf" === t[d].ty ? m.push(s(t[d], n[d], u)) : m.push((t[d], n[d], function() {
            return null
          })));
          return m
        }

        function e(e, i, s) {
          var r = function(t) {
            switch (t) {
              case "ADBE Vectors Group":
              case "Contents":
              case 2:
                return r.content;
              default:
                return r.transform
            }
          };
          r.propertyGroup = propertyGroupFactory(r, s);
          var a = function(e, i, s) {
              var r, a = function(t) {
                for (var e = 0, i = r.length; e < i;) {
                  if (r[e]._name === t || r[e].mn === t || r[e].propertyIndex === t || r[e].ix === t || r[e].ind === t) return r[e];
                  e += 1
                }
                return "number" == typeof t ? r[t - 1] : null
              };
              a.propertyGroup = propertyGroupFactory(a, s), r = t(e.it, i.it, a.propertyGroup), a.numProperties = r.length;
              var o = n(e.it[e.it.length - 1], i.it[i.it.length - 1], a.propertyGroup);
              return a.transform = o, a.propertyIndex = e.cix, a._name = e.nm, a
            }(e, i, r.propertyGroup),
            o = n(e.it[e.it.length - 1], i.it[i.it.length - 1], r.propertyGroup);
          return r.content = a, r.transform = o, Object.defineProperty(r, "_name", {
            get: function() {
              return e.nm
            }
          }), r.numProperties = e.np, r.propertyIndex = e.ix, r.nm = e.nm, r.mn = e.mn, r
        }

        function i(t, e, i) {
          function s(t) {
            return "Color" === t || "color" === t ? s.color : "Opacity" === t || "opacity" === t ? s.opacity : null
          }
          return Object.defineProperties(s, {
            color: {
              get: ExpressionPropertyInterface(e.c)
            },
            opacity: {
              get: ExpressionPropertyInterface(e.o)
            },
            _name: {
              value: t.nm
            },
            mn: {
              value: t.mn
            }
          }), e.c.setGroupProperty(PropertyInterface("Color", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), s
        }

        function s(t, e, i) {
          function s(t) {
            return "Start Point" === t || "start point" === t ? s.startPoint : "End Point" === t || "end point" === t ? s.endPoint : "Opacity" === t || "opacity" === t ? s.opacity : null
          }
          return Object.defineProperties(s, {
            startPoint: {
              get: ExpressionPropertyInterface(e.s)
            },
            endPoint: {
              get: ExpressionPropertyInterface(e.e)
            },
            opacity: {
              get: ExpressionPropertyInterface(e.o)
            },
            type: {
              get: function() {
                return "a"
              }
            },
            _name: {
              value: t.nm
            },
            mn: {
              value: t.mn
            }
          }), e.s.setGroupProperty(PropertyInterface("Start Point", i)), e.e.setGroupProperty(PropertyInterface("End Point", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), s
        }

        function r(t, e, i) {
          var s, r = propertyGroupFactory(l, i),
            a = propertyGroupFactory(h, r);

          function n(i) {
            Object.defineProperty(h, t.d[i].nm, {
              get: ExpressionPropertyInterface(e.d.dataProps[i].p)
            })
          }
          var o = t.d ? t.d.length : 0,
            h = {};
          for (s = 0; s < o; s += 1) n(s), e.d.dataProps[s].p.setGroupProperty(a);

          function l(t) {
            return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : null
          }
          return Object.defineProperties(l, {
            color: {
              get: ExpressionPropertyInterface(e.c)
            },
            opacity: {
              get: ExpressionPropertyInterface(e.o)
            },
            strokeWidth: {
              get: ExpressionPropertyInterface(e.w)
            },
            dash: {
              get: function() {
                return h
              }
            },
            _name: {
              value: t.nm
            },
            mn: {
              value: t.mn
            }
          }), e.c.setGroupProperty(PropertyInterface("Color", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), e.w.setGroupProperty(PropertyInterface("Stroke Width", r)), l
        }

        function a(t, e, i) {
          function s(e) {
            return e === t.e.ix || "End" === e || "end" === e ? s.end : e === t.s.ix ? s.start : e === t.o.ix ? s.offset : null
          }
          var r = propertyGroupFactory(s, i);
          return s.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", r)), e.e.setGroupProperty(PropertyInterface("End", r)), e.o.setGroupProperty(PropertyInterface("Offset", r)), s.propertyIndex = t.ix, s.propertyGroup = i, Object.defineProperties(s, {
            start: {
              get: ExpressionPropertyInterface(e.s)
            },
            end: {
              get: ExpressionPropertyInterface(e.e)
            },
            offset: {
              get: ExpressionPropertyInterface(e.o)
            },
            _name: {
              value: t.nm
            }
          }), s.mn = t.mn, s
        }

        function n(t, e, i) {
          function s(e) {
            return t.a.ix === e || "Anchor Point" === e ? s.anchorPoint : t.o.ix === e || "Opacity" === e ? s.opacity : t.p.ix === e || "Position" === e ? s.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? s.rotation : t.s.ix === e || "Scale" === e ? s.scale : t.sk && t.sk.ix === e || "Skew" === e ? s.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? s.skewAxis : null
          }
          var r = propertyGroupFactory(s, i);
          return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", r)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", r)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", r)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", r)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", r)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", r)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", r))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", r)), Object.defineProperties(s, {
            opacity: {
              get: ExpressionPropertyInterface(e.transform.mProps.o)
            },
            position: {
              get: ExpressionPropertyInterface(e.transform.mProps.p)
            },
            anchorPoint: {
              get: ExpressionPropertyInterface(e.transform.mProps.a)
            },
            scale: {
              get: ExpressionPropertyInterface(e.transform.mProps.s)
            },
            rotation: {
              get: ExpressionPropertyInterface(e.transform.mProps.r)
            },
            skew: {
              get: ExpressionPropertyInterface(e.transform.mProps.sk)
            },
            skewAxis: {
              get: ExpressionPropertyInterface(e.transform.mProps.sa)
            },
            _name: {
              value: t.nm
            }
          }), s.ty = "tr", s.mn = t.mn, s.propertyGroup = i, s
        }

        function o(t, e, i) {
          function s(e) {
            return t.p.ix === e ? s.position : t.s.ix === e ? s.size : null
          }
          var r = propertyGroupFactory(s, i);
          s.propertyIndex = t.ix;
          var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
          return a.s.setGroupProperty(PropertyInterface("Size", r)), a.p.setGroupProperty(PropertyInterface("Position", r)), Object.defineProperties(s, {
            size: {
              get: ExpressionPropertyInterface(a.s)
            },
            position: {
              get: ExpressionPropertyInterface(a.p)
            },
            _name: {
              value: t.nm
            }
          }), s.mn = t.mn, s
        }

        function h(t, e, i) {
          function s(e) {
            return t.p.ix === e ? s.position : t.r.ix === e ? s.rotation : t.pt.ix === e ? s.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? s.outerRadius : t.os.ix === e ? s.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? s.innerRoundness : null : s.innerRadius
          }
          var r = propertyGroupFactory(s, i),
            a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
          return s.propertyIndex = t.ix, a.or.setGroupProperty(PropertyInterface("Outer Radius", r)), a.os.setGroupProperty(PropertyInterface("Outer Roundness", r)), a.pt.setGroupProperty(PropertyInterface("Points", r)), a.p.setGroupProperty(PropertyInterface("Position", r)), a.r.setGroupProperty(PropertyInterface("Rotation", r)), t.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", r)), a.is.setGroupProperty(PropertyInterface("Inner Roundness", r))), Object.defineProperties(s, {
            position: {
              get: ExpressionPropertyInterface(a.p)
            },
            rotation: {
              get: ExpressionPropertyInterface(a.r)
            },
            points: {
              get: ExpressionPropertyInterface(a.pt)
            },
            outerRadius: {
              get: ExpressionPropertyInterface(a.or)
            },
            outerRoundness: {
              get: ExpressionPropertyInterface(a.os)
            },
            innerRadius: {
              get: ExpressionPropertyInterface(a.ir)
            },
            innerRoundness: {
              get: ExpressionPropertyInterface(a.is)
            },
            _name: {
              value: t.nm
            }
          }), s.mn = t.mn, s
        }

        function l(t, e, i) {
          function s(e) {
            return t.p.ix === e ? s.position : t.r.ix === e ? s.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? s.size : null
          }
          var r = propertyGroupFactory(s, i),
            a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
          return s.propertyIndex = t.ix, a.p.setGroupProperty(PropertyInterface("Position", r)), a.s.setGroupProperty(PropertyInterface("Size", r)), a.r.setGroupProperty(PropertyInterface("Rotation", r)), Object.defineProperties(s, {
            position: {
              get: ExpressionPropertyInterface(a.p)
            },
            roundness: {
              get: ExpressionPropertyInterface(a.r)
            },
            size: {
              get: ExpressionPropertyInterface(a.s)
            },
            _name: {
              value: t.nm
            }
          }), s.mn = t.mn, s
        }

        function p(t, e, i) {
          function s(e) {
            return t.r.ix === e || "Round Corners 1" === e ? s.radius : null
          }
          var r = propertyGroupFactory(s, i),
            a = e;
          return s.propertyIndex = t.ix, a.rd.setGroupProperty(PropertyInterface("Radius", r)), Object.defineProperties(s, {
            radius: {
              get: ExpressionPropertyInterface(a.rd)
            },
            _name: {
              value: t.nm
            }
          }), s.mn = t.mn, s
        }

        function c(t, e, i) {
          function s(e) {
            return t.c.ix === e || "Copies" === e ? s.copies : t.o.ix === e || "Offset" === e ? s.offset : null
          }
          var r = propertyGroupFactory(s, i),
            a = e;
          return s.propertyIndex = t.ix, a.c.setGroupProperty(PropertyInterface("Copies", r)), a.o.setGroupProperty(PropertyInterface("Offset", r)), Object.defineProperties(s, {
            copies: {
              get: ExpressionPropertyInterface(a.c)
            },
            offset: {
              get: ExpressionPropertyInterface(a.o)
            },
            _name: {
              value: t.nm
            }
          }), s.mn = t.mn, s
        }
        return function(e, i, s) {
          var r;

          function a(t) {
            if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? s : r[t - 1];
            for (var e = 0, i = r.length; e < i;) {
              if (r[e]._name === t) return r[e];
              e += 1
            }
            return null
          }
          return a.propertyGroup = propertyGroupFactory(a, (function() {
            return s
          })), r = t(e, i, a.propertyGroup), a.numProperties = r.length, a._name = "Contents", a
        }
      }(),
      TextExpressionInterface = function(t) {
        var e, i;

        function s(t) {
          switch (t) {
            case "ADBE Text Document":
              return s.sourceText;
            default:
              return null
          }
        }
        return Object.defineProperty(s, "sourceText", {
          get: function() {
            t.textProperty.getValue();
            var s = t.textProperty.currentData.t;
            return s !== e && (t.textProperty.currentData.t = e, (i = new String(s)).value = s || new String(s)), i
          }
        }), s
      },
      LayerExpressionInterface = function() {
        function t(t) {
          var e = new Matrix;
          return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e), e
        }

        function e(t, e) {
          var i = this.getMatrix(e);
          return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.applyPoint(i, t)
        }

        function i(t, e) {
          var i = this.getMatrix(e);
          return this.applyPoint(i, t)
        }

        function s(t, e) {
          var i = this.getMatrix(e);
          return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.invertPoint(i, t)
        }

        function r(t, e) {
          var i = this.getMatrix(e);
          return this.invertPoint(i, t)
        }

        function a(t, e) {
          if (this._elem.hierarchy && this._elem.hierarchy.length) {
            var i, s = this._elem.hierarchy.length;
            for (i = 0; i < s; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
          }
          return t.applyToPointArray(e[0], e[1], e[2] || 0)
        }

        function n(t, e) {
          if (this._elem.hierarchy && this._elem.hierarchy.length) {
            var i, s = this._elem.hierarchy.length;
            for (i = 0; i < s; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
          }
          return t.inversePoint(e)
        }

        function o(t) {
          var e = new Matrix;
          if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
            var i, s = this._elem.hierarchy.length;
            for (i = 0; i < s; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
            return e.inversePoint(t)
          }
          return e.inversePoint(t)
        }

        function h() {
          return [1, 1, 1, 1]
        }
        return function(l) {
          var p;

          function c(t) {
            switch (t) {
              case "ADBE Root Vectors Group":
              case "Contents":
              case 2:
                return c.shapeInterface;
              case 1:
              case 6:
              case "Transform":
              case "transform":
              case "ADBE Transform Group":
                return p;
              case 4:
              case "ADBE Effect Parade":
              case "effects":
              case "Effects":
                return c.effect;
              case "ADBE Text Properties":
                return c.textInterface;
              default:
                return null
            }
          }
          c.getMatrix = t, c.invertPoint = n, c.applyPoint = a, c.toWorld = i, c.toWorldVec = e, c.fromWorld = r, c.fromWorldVec = s, c.toComp = i, c.fromComp = o, c.sampleImage = h, c.sourceRectAtTime = l.sourceRectAtTime.bind(l), c._elem = l;
          var u = getDescriptor(p = TransformExpressionInterface(l.finalTransform.mProp), "anchorPoint");
          return Object.defineProperties(c, {
            hasParent: {
              get: function() {
                return l.hierarchy.length
              }
            },
            parent: {
              get: function() {
                return l.hierarchy[0].layerInterface
              }
            },
            rotation: getDescriptor(p, "rotation"),
            scale: getDescriptor(p, "scale"),
            position: getDescriptor(p, "position"),
            opacity: getDescriptor(p, "opacity"),
            anchorPoint: u,
            anchor_point: u,
            transform: {
              get: function() {
                return p
              }
            },
            active: {
              get: function() {
                return l.isInRange
              }
            }
          }), c.startTime = l.data.st, c.index = l.data.ind, c.source = l.data.refId, c.height = 0 === l.data.ty ? l.data.h : 100, c.width = 0 === l.data.ty ? l.data.w : 100, c.inPoint = l.data.ip / l.comp.globalData.frameRate, c.outPoint = l.data.op / l.comp.globalData.frameRate, c._name = l.data.nm, c.registerMaskInterface = function(t) {
            c.mask = new MaskManagerInterface(t, l)
          }, c.registerEffectsInterface = function(t) {
            c.effect = t
          }, c
        }
      }(),
      FootageInterface = (dataInterfaceFactory = function(t) {
        function e(t) {
          return "Outline" === t ? e.outlineInterface() : null
        }
        return e._name = "Outline", e.outlineInterface = function(t) {
          var e = "",
            i = t.getFootageData();

          function s(t) {
            if (i[t]) return e = t, "object" == typeof(i = i[t]) ? s : i;
            var r = t.indexOf(e);
            if (-1 !== r) {
              var a = parseInt(t.substr(r + e.length), 10);
              return "object" == typeof(i = i[a]) ? s : i
            }
            return ""
          }
          return function() {
            return e = "", i = t.getFootageData(), s
          }
        }(t), e
      }, function(t) {
        function e(t) {
          return "Data" === t ? e.dataInterface : null
        }
        return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e
      }),
      dataInterfaceFactory, CompExpressionInterface = function(t) {
        function e(e) {
          for (var i = 0, s = t.layers.length; i < s;) {
            if (t.layers[i].nm === e || t.layers[i].ind === e) return t.elements[i].layerInterface;
            i += 1
          }
          return null
        }
        return Object.defineProperty(e, "_name", {
          value: t.data.nm
        }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
      },
      TransformExpressionInterface = function(t) {
        function e(t) {
          switch (t) {
            case "scale":
            case "Scale":
            case "ADBE Scale":
            case 6:
              return e.scale;
            case "rotation":
            case "Rotation":
            case "ADBE Rotation":
            case "ADBE Rotate Z":
            case 10:
              return e.rotation;
            case "ADBE Rotate X":
              return e.xRotation;
            case "ADBE Rotate Y":
              return e.yRotation;
            case "position":
            case "Position":
            case "ADBE Position":
            case 2:
              return e.position;
            case "ADBE Position_0":
              return e.xPosition;
            case "ADBE Position_1":
              return e.yPosition;
            case "ADBE Position_2":
              return e.zPosition;
            case "anchorPoint":
            case "AnchorPoint":
            case "Anchor Point":
            case "ADBE AnchorPoint":
            case 1:
              return e.anchorPoint;
            case "opacity":
            case "Opacity":
            case 11:
              return e.opacity;
            default:
              return null
          }
        }
        var i, s, r, a;
        return Object.defineProperty(e, "rotation", {
          get: ExpressionPropertyInterface(t.r || t.rz)
        }), Object.defineProperty(e, "zRotation", {
          get: ExpressionPropertyInterface(t.rz || t.r)
        }), Object.defineProperty(e, "xRotation", {
          get: ExpressionPropertyInterface(t.rx)
        }), Object.defineProperty(e, "yRotation", {
          get: ExpressionPropertyInterface(t.ry)
        }), Object.defineProperty(e, "scale", {
          get: ExpressionPropertyInterface(t.s)
        }), t.p ? a = ExpressionPropertyInterface(t.p) : (i = ExpressionPropertyInterface(t.px), s = ExpressionPropertyInterface(t.py), t.pz && (r = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
          get: function() {
            return t.p ? a() : [i(), s(), r ? r() : 0]
          }
        }), Object.defineProperty(e, "xPosition", {
          get: ExpressionPropertyInterface(t.px)
        }), Object.defineProperty(e, "yPosition", {
          get: ExpressionPropertyInterface(t.py)
        }), Object.defineProperty(e, "zPosition", {
          get: ExpressionPropertyInterface(t.pz)
        }), Object.defineProperty(e, "anchorPoint", {
          get: ExpressionPropertyInterface(t.a)
        }), Object.defineProperty(e, "opacity", {
          get: ExpressionPropertyInterface(t.o)
        }), Object.defineProperty(e, "skew", {
          get: ExpressionPropertyInterface(t.sk)
        }), Object.defineProperty(e, "skewAxis", {
          get: ExpressionPropertyInterface(t.sa)
        }), Object.defineProperty(e, "orientation", {
          get: ExpressionPropertyInterface(t.or)
        }), e
      },
      ProjectInterface = function() {
        function t(t) {
          this.compositions.push(t)
        }
        return function() {
          function e(t) {
            for (var e = 0, i = this.compositions.length; e < i;) {
              if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
              e += 1
            }
            return null
          }
          return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
        }
      }(),
      EffectsExpressionInterface = function() {
        function t(i, s, r, a) {
          function n(t) {
            for (var e = i.ef, s = 0, r = e.length; s < r;) {
              if (t === e[s].nm || t === e[s].mn || t === e[s].ix) return 5 === e[s].ty ? l[s] : l[s]();
              s += 1
            }
            throw new Error
          }
          var o, h = propertyGroupFactory(n, r),
            l = [],
            p = i.ef.length;
          for (o = 0; o < p; o += 1) 5 === i.ef[o].ty ? l.push(t(i.ef[o], s.effectElements[o], s.effectElements[o].propertyGroup, a)) : l.push(e(s.effectElements[o], i.ef[o].ty, a, h));
          return "ADBE Color Control" === i.mn && Object.defineProperty(n, "color", {
            get: function() {
              return l[0]()
            }
          }), Object.defineProperties(n, {
            numProperties: {
              get: function() {
                return i.np
              }
            },
            _name: {
              value: i.nm
            },
            propertyGroup: {
              value: h
            }
          }), n.enabled = 0 !== i.en, n.active = n.enabled, n
        }

        function e(t, e, i, s) {
          var r = ExpressionPropertyInterface(t.p);
          return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", s)),
            function() {
              return 10 === e ? i.comp.compInterface(t.p.v) : r()
            }
        }
        return {
          createEffectsInterface: function(e, i) {
            if (e.effectsManager) {
              var s, r = [],
                a = e.data.ef,
                n = e.effectsManager.effectElements.length;
              for (s = 0; s < n; s += 1) r.push(t(a[s], e.effectsManager.effectElements[s], i, e));
              var o = e.data.ef || [],
                h = function(t) {
                  for (s = 0, n = o.length; s < n;) {
                    if (t === o[s].nm || t === o[s].mn || t === o[s].ix) return r[s];
                    s += 1
                  }
                  return null
                };
              return Object.defineProperty(h, "numProperties", {
                get: function() {
                  return o.length
                }
              }), h
            }
            return null
          }
        }
      }(),
      MaskManagerInterface = function() {
        function t(t, e) {
          this._mask = t, this._data = e
        }
        return Object.defineProperty(t.prototype, "maskPath", {
            get: function() {
              return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
            }
          }), Object.defineProperty(t.prototype, "maskOpacity", {
            get: function() {
              return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
            }
          }),
          function(e) {
            var i, s = createSizedArray(e.viewData.length),
              r = e.viewData.length;
            for (i = 0; i < r; i += 1) s[i] = new t(e.viewData[i], e.masksProperties[i]);
            return function(t) {
              for (i = 0; i < r;) {
                if (e.masksProperties[i].nm === t) return s[i];
                i += 1
              }
              return null
            }
          }
      }(),
      ExpressionPropertyInterface = function() {
        var t = {
            pv: 0,
            v: 0,
            mult: 1
          },
          e = {
            pv: [0, 0, 0],
            v: [0, 0, 0],
            mult: 1
          };

        function i(t, e, i) {
          Object.defineProperty(t, "velocity", {
            get: function() {
              return e.getVelocityAtTime(e.comp.currentFrame)
            }
          }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(s) {
            if (!t.numKeys) return 0;
            var r = "";
            r = "s" in e.keyframes[s - 1] ? e.keyframes[s - 1].s : "e" in e.keyframes[s - 2] ? e.keyframes[s - 2].e : e.keyframes[s - 2].s;
            var a = "unidimensional" === i ? new Number(r) : Object.assign({}, r);
            return a.time = e.keyframes[s - 1].t / e.elem.comp.globalData.frameRate, a.value = "unidimensional" === i ? r[0] : r, a
          }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
        }

        function s() {
          return t
        }
        return function(r) {
          return r ? "unidimensional" === r.propType ? function(e) {
            e && "pv" in e || (e = t);
            var s = 1 / e.mult,
              r = e.pv * s,
              a = new Number(r);
            return a.value = r, i(a, e, "unidimensional"),
              function() {
                return e.k && e.getValue(), r = e.v * s, a.value !== r && ((a = new Number(r)).value = r, i(a, e, "unidimensional")), a
              }
          }(r) : function(t) {
            t && "pv" in t || (t = e);
            var s = 1 / t.mult,
              r = t.data && t.data.l || t.pv.length,
              a = createTypedArray("float32", r),
              n = createTypedArray("float32", r);
            return a.value = n, i(a, t, "multidimensional"),
              function() {
                t.k && t.getValue();
                for (var e = 0; e < r; e += 1) n[e] = t.v[e] * s, a[e] = n[e];
                return a
              }
          }(r) : s
        }
      }(),
      TextExpressionSelectorPropFactory = function() {
        function t(t, e) {
          return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v
        }
        return function(e, i) {
          this.pv = 1, this.comp = e.comp, this.elem = e, this.mult = .01, this.propType = "textSelector", this.textTotal = i.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], this.k = !0, this.x = !0, this.getValue = ExpressionManager.initiateExpression.bind(this)(e, i, this), this.getMult = t, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty
        }
      }(),
      propertyGetTextProp = TextSelectorProp.getTextSelectorProp;

    function SliderEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
    }

    function AngleEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
    }

    function ColorEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
    }

    function PointEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
    }

    function LayerIndexEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
    }

    function MaskIndexEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
    }

    function CheckboxEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
    }

    function NoValueEffect() {
      this.p = {}
    }

    function EffectsManager(t, e) {
      var i, s = t.ef || [];
      this.effectElements = [];
      var r, a = s.length;
      for (i = 0; i < a; i += 1) r = new GroupEffect(s[i], e), this.effectElements.push(r)
    }

    function GroupEffect(t, e) {
      this.init(t, e)
    }
    TextSelectorProp.getTextSelectorProp = function(t, e, i) {
      return 1 === e.t ? new TextExpressionSelectorPropFactory(t, e, i) : propertyGetTextProp(t, e, i)
    }, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
      var i;
      this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
      var s, r = this.data.ef.length,
        a = this.data.ef;
      for (i = 0; i < r; i += 1) {
        switch (s = null, a[i].ty) {
          case 0:
            s = new SliderEffect(a[i], e, this);
            break;
          case 1:
            s = new AngleEffect(a[i], e, this);
            break;
          case 2:
            s = new ColorEffect(a[i], e, this);
            break;
          case 3:
            s = new PointEffect(a[i], e, this);
            break;
          case 4:
          case 7:
            s = new CheckboxEffect(a[i], e, this);
            break;
          case 10:
            s = new LayerIndexEffect(a[i], e, this);
            break;
          case 11:
            s = new MaskIndexEffect(a[i], e, this);
            break;
          case 5:
            s = new EffectsManager(a[i], e, this);
            break;
          default:
            s = new NoValueEffect(a[i], e, this)
        }
        s && this.effectElements.push(s)
      }
    };
    var lottie = {};

    function setLocationHref(t) {
      locationHref = t
    }

    function searchAnimations() {
      !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
    }

    function setSubframeRendering(t) {
      subframeEnabled = t
    }

    function setIDPrefix(t) {
      idPrefix = t
    }

    function loadAnimation(t) {
      return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
    }

    function setQuality(t) {
      if ("string" == typeof t) switch (t) {
        case "high":
          defaultCurveSegments = 200;
          break;
        default:
        case "medium":
          defaultCurveSegments = 50;
          break;
        case "low":
          defaultCurveSegments = 10
      } else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
      roundValues(!(defaultCurveSegments >= 50))
    }

    function inBrowser() {
      return "undefined" != typeof navigator
    }

    function installPlugin(t, e) {
      "expressions" === t && (expressionsPlugin = e)
    }

    function getFactory(t) {
      switch (t) {
        case "propertyFactory":
          return PropertyFactory;
        case "shapePropertyFactory":
          return ShapePropertyFactory;
        case "matrix":
          return Matrix;
        default:
          return null
      }
    }

    function checkReady() {
      "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
    }

    function getQueryVariable(t) {
      for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) {
        var s = e[i].split("=");
        if (decodeURIComponent(s[0]) == t) return decodeURIComponent(s[1])
      }
      return null
    }
    lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocationHref, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.setIDPrefix = setIDPrefix, lottie.__getFactory = getFactory, lottie.version = "5.7.14";
    var standalone = "__[STANDALONE]__",
      animationData = "__[ANIMATIONDATA]__",
      renderer = "",
      queryString;
    if (standalone) {
      var scripts = document.getElementsByTagName("script"),
        index = scripts.length - 1,
        myScript = scripts[index] || {
          src: ""
        };
      queryString = myScript.src.replace(/^[^\?]+\??/, ""), renderer = getQueryVariable("renderer")
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    return lottie
  }, void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
    return factory(root)
  }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
}, function(t, e, i) {
  "use strict";
  const s = i(18),
    r = i(35),
    {
      Media: a
    } = i(36),
    n = i(4).default;
  t.exports = class extends s {
    constructor(t) {
      super(t), this.duration = null, this.media = null, this.playPauseButton = this.el.querySelector(".inline-video-button") || null, this.play = this.play.bind(this), this.reset = this.reset.bind(this), this.destroy = this.destroy.bind(this), this.onLoad = this.onLoad.bind(this)
    }
    async mounted() {
      a.addPlugin("ReplayDisabled", r);
      let t = await a.autoInitialize(this.el, {
        anim: this.gum.anim,
        playPauseButton: this.playPauseButton
      });
      this.media = t[0], this.setupEvents()
    }
    setupEvents() {
      this.media.on(n.MEDIA_LOAD_COMPLETE, this.onLoad), this.anim.once("enhanced-destroy", this.destroy)
    }
    onLoad() {
      this.duration || (this.duration = this.media.el.duration, this.setupEngageKeyframes(this.play, this.reset, this.duration, this.media.el.currentTime))
    }
    play() {
      this.media.play()
    }
    reset() {
      this.media.el.pause(), this.media.el.currentTime = 0
    }
    destroy() {
      this.media.off(n.MEDIA_LOAD_START, this.onLoadStart), this.media.destroy()
    }
    static IS_SUPPORTED() {
      return document.documentElement.classList.contains("enhanced")
    }
  }
}, function(t, e, i) {
  "use strict";
  var s = i(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = s(i(106)),
    a = s(i(107)),
    n = s(i(109)),
    o = s(i(110)),
    h = [r.default, a.default, n.default, o.default];
  e.default = h
}, function(t, e, i) {
  "use strict";
  var s = i(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = s(i(3));
  class a extends r.default {
    get src() {
      return this.media.el.currentSrc
    }
  }
  var n = a;
  e.default = n
}, function(t, e, i) {
  "use strict";
  var s = i(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = s(i(3)),
    a = s(i(51)),
    n = s(i(4)),
    o = s(i(19)),
    h = s(i(37)),
    l = s(i(26));
  const p = a.default.CAN_PLAY_THROUGH,
    {
      HAVE_NOTHING: c,
      HAVE_CURRENT_DATA: u,
      NETWORK_EMPTY: d
    } = HTMLMediaElement;
  class m extends r.default {
    constructor(t) {
      super(t), this._loadCompleteEvent = t.loadCompleteEvent || p, this._onLoaded = this._onLoaded.bind(this), this._onError = this._onError.bind(this)
    }
    mounted() {
      "none" !== this.media.el.preload && this.media.src && (async () => {
        try {
          await this.media.load(this.media.src)
        } catch (t) {
          (0, h.default)(`auto load of ${this.media.src} failed or was aborted with err:${t}`)
        }
      })()
    }
    async load(t) {
      if (void 0 === t && this.media.src && (t = this.media.src), !t) throw new Error("No Media src was specified, can not fullfill load() request");
      return t !== this._currentLoadUrl && (this.media.trigger(n.default.MEDIA_LOAD_START), this._currentLoadUrl = t, this._pendingPromise = new Promise(((e, i) => {
        this._resolvePendingPromise = () => {
          this._resolvePendingPromise = null, this._rejectPendingPromise = null, e()
        }, this._rejectPendingPromise = () => {
          this._resolvePendingPromise = null, this._rejectPendingPromise = null, i()
        }, this.media.el.addEventListener(this._loadCompleteEvent, this._onLoaded), l.default.browser.firefox && "canplaythrough" === this._loadCompleteEvent && this.media.el.addEventListener("canplay", this._onLoaded), this.media.el.addEventListener(a.default.ERROR, this._onError), this.media.el.addEventListener(a.default.ABORT, this._onError), this.media.el.src = t, this.media.el.load()
      }))), this._pendingPromise
    }
    _clearLoadListeners() {
      this.media.el.removeEventListener(this._loadCompleteEvent, this._onLoaded), this.media.el.removeEventListener("canplay", this._onLoaded), this.media.el.removeEventListener(a.default.ERROR, this._onError), this.media.el.removeEventListener(a.default.ABORT, this._onError)
    }
    _onLoaded() {
      this._clearLoadListeners(), this.media.trigger(n.default.LOADING_STATE_CHANGE), this.media.trigger(n.default.MEDIA_LOAD_COMPLETE), this._resolvePendingPromise()
    }
    _onError() {
      this._clearLoadListeners(), this.media.trigger(n.default.MEDIA_LOAD_ERROR), this.media.trigger(n.default.LOADING_STATE_CHANGE), this._rejectPendingPromise()
    }
    abortLoad() {
      this._rejectPendingPromise && this._rejectPendingPromise()
    }
    get loadingState() {
      return this.media.el.error ? o.default.ERROR : this.media.el.networkState === d && this.media.el.readyState === c ? o.default.EMPTY : this.media.el.readyState < u ? o.default.LOADING : o.default.LOADED
    }
    destroy() {
      this._clearLoadListeners(), super.destroy()
    }
  }
  var f = m;
  e.default = f
}, function(t, e, i) {
  "use strict";
  var s = !1,
    r = window || self;
  try {
    s = !!r.localStorage.getItem("f7c9180f-5c45-47b4-8de4-428015f096c0")
  } catch (t) {}
  t.exports = s
}, function(t, e, i) {
  "use strict";
  var s = i(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = s(i(3)),
    a = s(i(15));
  const {
    HAVE_METADATA: n,
    HAVE_CURRENT_DATA: o
  } = HTMLVideoElement;
  class h extends r.default {
    constructor(t) {
      super(t), this._initialize()
    }
    _initialize() {
      this.media.el.playsInline = !0, this.media.el.autoplay && (this._autoPlayTimer = setTimeout((() => this.media.play())))
    }
    async play() {
      this.media.el.readyState < n && await this.media.load(), await this.media.el.play()
    }
    get playbackState() {
      return this.media.el.ended ? a.default.ENDED : this.media.el.paused && !this.media.el.ended ? a.default.PAUSED : a.default.PLAYING
    }
    destroy() {
      clearTimeout(this._autoPlayTimer), super.destroy()
    }
  }
  var l = h;
  e.default = l
}, function(t, e, i) {
  "use strict";
  var s = i(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = s(i(3)),
    a = s(i(15)),
    n = s(i(19)),
    o = s(i(51)),
    h = s(i(4));
  const l = [o.default.LOADED_DATA, o.default.LOAD_START, o.default.CAN_PLAY, o.default.CAN_PLAY_THROUGH, o.default.PLAY, o.default.PLAYING, o.default.PAUSE, o.default.WAITING, o.default.SEEKING, o.default.SEEKED, o.default.ERROR, o.default.ENDED],
    p = "[data-inline-media-controller={id}]";
  class c extends r.default {
    constructor(t) {
      super(t), this._container = t.container || this.media.el.parentElement, this._playbackState = a.default.IDLE, this._loadingState = n.default.EMPTY, this._elementsToDecorate = [], this._container && this._elementsToDecorate.push(this._container), this.media.id && this._elementsToDecorate.push(...Array.from(document.querySelectorAll(p.replace("{id}", this.media.id))));
      for (const t of this._elementsToDecorate) t.classList.add(this._playbackState), t.classList.add(this._loadingState);
      this.updateState = this.updateState.bind(this), this._addEventListeners()
    }
    _addEventListeners() {
      for (let t of l) this.media.el.addEventListener(t, this.updateState);
      this.media.on(h.default.LOADING_STATE_CHANGE, this.updateState), this.media.on(h.default.PLAYBACK_STATE_CHANGE, this.updateState)
    }
    _removeEventListeners() {
      for (let t of l) this.media.el.removeEventListener(t, this.updateState);
      this.media.off(h.default.LOADING_STATE_CHANGE, this.updateState), this.media.off(h.default.PLAYBACK_STATE_CHANGE, this.updateState)
    }
    updateState(t) {
      const e = this.media.playbackState,
        i = this._playbackState,
        s = this.media.loadingState,
        r = this._loadingState;
      if (this._playbackState = e, this._loadingState = s, e !== i) {
        for (const t of this._elementsToDecorate) t.classList.add(e), t.classList.remove(i);
        this.media.trigger(h.default.PLAYBACK_STATE_CHANGE)
      }
      if (s !== r) {
        for (const t of this._elementsToDecorate) t.classList.add(s), t.classList.remove(r);
        this.media.trigger(h.default.LOADING_STATE_CHANGE)
      }
    }
    destroy() {
      for (const t of this._elementsToDecorate) t.classList.remove(this._playbackState), t.classList.remove(this._loadingState);
      this._removeEventListeners(), super.destroy()
    }
  }
  var u = c;
  e.default = u
}, function(t, e, i) {
  "use strict";
  var s = i(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = async function(t = document, e = {}) {
    t || (t = document);
    const i = t.querySelectorAll("[data-inline-media]"),
      s = [];
    for (let t of i) {
      const i = t.dataset,
        n = i.inlineMediaPlugins ? i.inlineMediaPlugins.split(",").map((t => t.trim())) : [],
        o = [];
      for (const t of n)
        if (!r.pluginCache[t]) {
          if (!a.default[t]) throw new Error(`Error Trying to use undefined Plugin named: ${t} . Ensure you call Media.addPlugin() first to register this custom plugin!`);
          o.push((async () => {
            const e = (await a.default[t]()).default;
            r.default.addPlugin(t, e)
          }))
        } await Promise.all(o.map((async t => t()))), s.push(new r.default(Object.assign({
        el: t,
        plugins: n.map((t => r.pluginCache[t]))
      }, e)))
    }
    return s
  };
  var r = function(t, e) {
      if (!e && t && t.__esModule) return t;
      if (null === t || "object" != typeof t && "function" != typeof t) return {
        default: t
      };
      var i = n(e);
      if (i && i.has(t)) return i.get(t);
      var s = {},
        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var a in t)
        if ("default" !== a && Object.prototype.hasOwnProperty.call(t, a)) {
          var o = r ? Object.getOwnPropertyDescriptor(t, a) : null;
          o && (o.get || o.set) ? Object.defineProperty(s, a, o) : s[a] = t[a]
        } s.default = t, i && i.set(t, s);
      return s
    }(i(50)),
    a = s(i(112));

  function n(t) {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap,
      i = new WeakMap;
    return (n = function(t) {
      return t ? i : e
    })(t)
  }
}, function(t, e, i) {
  "use strict";

  function s(t) {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap,
      i = new WeakMap;
    return (s = function(t) {
      return t ? i : e
    })(t)
  }

  function r(t, e) {
    if (!e && t && t.__esModule) return t;
    if (null === t || "object" != typeof t && "function" != typeof t) return {
      default: t
    };
    var i = s(e);
    if (i && i.has(t)) return i.get(t);
    var r = {},
      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var n in t)
      if ("default" !== n && Object.prototype.hasOwnProperty.call(t, n)) {
        var o = a ? Object.getOwnPropertyDescriptor(t, n) : null;
        o && (o.get || o.set) ? Object.defineProperty(r, n, o) : r[n] = t[n]
      } return r.default = t, i && i.set(t, r), r
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var a = {
    AnimLoad: async () => Promise.resolve().then((() => r(i(113)))),
    AnimPlay: async () => Promise.resolve().then((() => r(i(114)))),
    FeatureObserver: async () => Promise.resolve().then((() => r(i(115)))),
    LoadTimeout: async () => Promise.resolve().then((() => r(i(118)))),
    PlayPauseButton: async () => Promise.resolve().then((() => r(i(119)))),
    ViewportSource: async () => Promise.resolve().then((() => r(i(120))))
  };
  e.default = a
}, function(t, e, i) {
  "use strict";
  var s = i(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = s(i(53)),
    a = s(i(3)),
    n = s(i(37));
  const o = {
    start: "t - 200vh",
    end: "b + 100vh"
  };
  class h extends a.default {
    constructor(t) {
      super(t), this._anim = t.anim, this._container = t.container || this.media.el.parentElement, this._scrollGroup = this.options.scrollGroup || this._anim.getGroupForTarget(this._container || this.media.el), this._initialize()
    }
    _initialize() {
      this._onLoadKeyframeEnter = this._onLoadKeyframeEnter.bind(this), this._onLoadKeyframeExit = this._onLoadKeyframeExit.bind(this);
      const t = (0, r.default)(this.media.el.dataset, this.options, "loadKeyframe", o);
      t.event || (t.event = "inline-media-load-kf"), this._loadKeyframe = this._scrollGroup.addKeyframe(this.media.el, t), this._loadKeyframe.controller.on(`${this._loadKeyframe.event}:enter`, this._onLoadKeyframeEnter), this._loadKeyframe.controller.on(`${this._loadKeyframe.event}:exit`, this._onLoadKeyframeExit)
    }
    get loadKeyframe() {
      return this._loadKeyframe
    }
    async _onLoadKeyframeEnter(t) {
      try {
        await this.media.load(), this._loaded = !0
      } catch (t) {
        (0, n.default)("AnimLoad: Load error occured")
      }
    }
    _onLoadKeyframeExit(t) {}
    destroy() {
      this._loadKeyframe.controller.off(`${this._loadKeyframe.event}:enter`, this._onLoadKeyframeEnter), this._loadKeyframe.controller.off(`${this._loadKeyframe.event}:exit`, this._onLoadKeyframeExit), super.destroy()
    }
  }
  e.default = h
}, function(t, e, i) {
  "use strict";
  var s = i(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = s(i(4)),
    a = s(i(53)),
    n = s(i(3));
  const o = {
    start: "t - 100vh",
    end: "b"
  };
  class h extends n.default {
    constructor(t) {
      super(t), this._anim = t.anim, this._container = t.container || this.media.el.parentElement, this._scrollGroup = this.options.scrollGroup || this._anim.getGroupForTarget(this._container || this.media.el), this._initialize()
    }
    _initialize() {
      this._onPlayKeyframeEnter = this._onPlayKeyframeEnter.bind(this), this._onPlayKeyframeExit = this._onPlayKeyframeExit.bind(this);
      const t = this.media.el.dataset;
      if (this._autoPlayWithReducedMotion = (0, a.default)(t, this.options, "autoPlayWithReducedMotion", !1), !this._autoPlayWithReducedMotion && h.prefersReducedMotion) return;
      this._pauseOnExit = (0, a.default)(t, this.options, "pauseOnExit", !1), this._resetOnExit = (0, a.default)(t, this.options, "resetOnExit", !1);
      const e = (0, a.default)(t, this.options, "playKeyframe", o);
      e.event || (e.event = "inline-media-play-kf"), this._playKeyframe = this._scrollGroup.addKeyframe(this.media.el, e), this._playKeyframe.controller.on(`${this._playKeyframe.event}:enter`, this._onPlayKeyframeEnter), this._playKeyframe.controller.on(`${this._playKeyframe.event}:exit`, this._onPlayKeyframeExit), this._onLoadStart = this._onLoadStart.bind(this), this.media.on(r.default.MEDIA_LOAD_START, this._onLoadStart)
    }
    _onLoadStart() {
      this._loaded = !1
    }
    async _onPlayKeyframeEnter(t) {
      if (this._inFrame = !0, !this._paused && (this._loaded || (await this.media.load(), this._loaded = !0), this._inFrame)) try {
        await this.media.play()
      } catch (t) {}
    }
    _onPlayKeyframeExit(t) {
      this._inFrame = !1, this._loaded && this.media.el.paused && !this.media.el.ended ? this._paused = !0 : this._pauseOnExit && (this._paused = !1, this.media.el.pause()), this._loaded && this._resetOnExit && (this.media.el.currentTime = 0)
    }
    get playKeyframe() {
      return this._playKeyframe
    }
    destroy() {
      this._playKeyframe.controller.off(`${this._playKeyframe.event}:enter`, this._onPlayKeyframeEnter), this._playKeyframe.controller.off(`${this._playKeyframe.event}:exit`, this._onPlayKeyframeExit), this.media.off(r.default.MEDIA_LOAD_START, this._onLoadStart), super.destroy()
    }
    static get prefersReducedMotion() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }
  }
  e.default = h
}, function(t, e, i) {
  "use strict";
  var s = i(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = s(i(3)),
    a = s(i(15)),
    n = s(i(19)),
    o = s(i(4)),
    h = s(i(116)),
    l = s(i(117));
  const p = t => t,
    c = t => t ? t.split(",").map((t => t.trim())) : null;
  class u extends r.default {
    constructor(t) {
      super(t);
      const e = (e, i, s) => {
        let r = "inlineMedia" + e[0].toUpperCase() + e.slice(1);
        return i(this.media.el.dataset[r]) || t[e] || s
      };
      this._disabledStates = new h.default({
        features: e("disabledWhen", c, []),
        onActivate: this.disable.bind(this),
        onDeactivate: this.enable.bind(this)
      }), this._destroyStates = new h.default({
        features: e("destroyWhen", c, []),
        onActivate: this.destroyMedia.bind(this)
      }), this._pausedStates = new h.default({
        features: e("pausedWhen", c, []),
        onActivate: this.pauseMedia.bind(this)
      }), this._autoplayStates = new h.default({
        features: e("autoplayWhen", c, []),
        onActivate: this.autoplayMedia.bind(this),
        onDeactivate: this.disableAutoplay.bind(this)
      });
      const i = t.featureDetect || {};
      var s;
      this.featureCallbacks = Object.entries(i).map((([t, e]) => new l.default({
        featureClass: t,
        callback: e
      }))), this._featureElement = (s = e("featureElement", p, document.documentElement)) instanceof HTMLElement ? s : document.querySelector(s), this.featureSets = [this._autoplayStates, this._pausedStates, this._disabledStates, this._destroyStates], this._featuresUpdated = this._featuresUpdated.bind(this), this.play = !1, this._observer = new MutationObserver(this._featuresUpdated), this._observer.observe(this._featureElement, {
        attributes: !0,
        attributeFilter: ["class"]
      }), this._featuresUpdated()
    }
    get loadingState() {
      return this._disabledStates.isDetected ? n.default.DISABLED : void 0
    }
    get playbackState() {
      return this._disabledStates.isDetected ? a.default.PAUSED : void 0
    }
    _featuresUpdated() {
      let t = this._featureElement.classList;
      this.featureSets.filter((e => (e.updateFeatureState(t), e.detectionChanged))).forEach((t => t.applyEffect())), this.featureCallbacks.forEach((e => {
        e.updatePresence(t), e.isPresent && e.presenceChanged && e.triggerCallback(this.media)
      }))
    }
    autoplayMedia() {
      this.media.el.setAttribute("autoplay", !0), this.media.play()
    }
    disableAutoplay() {
      this.media.el.setAttribute("autoplay", !1)
    }
    pauseMedia() {
      this.media.el.pause()
    }
    destroyMedia() {
      this.media.destroy()
    }
    destroy() {
      this._observer.disconnect()
    }
    disable() {
      this.media.abortLoad(), this.media.el.pause(), this.play = p, this.media.trigger(o.default.LOADING_STATE_CHANGE), this.media.trigger(o.default.PLAYBACK_STATE_CHANGE)
    }
    enable() {
      this.play = !1, this.media.trigger(o.default.LOADING_STATE_CHANGE), this.media.trigger(o.default.PLAYBACK_STATE_CHANGE)
    }
  }
  var d = u;
  e.default = d
}, function(t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  const s = () => {};
  var r = class {
    constructor(t) {
      var e;
      this._features = new Set((e = t.features, Array.isArray(e) ? e : e ? [e] : [])), this._isDetected = !1, this._wasDetected = !1, this._onActivate = t.onActivate || s, this._onDeactivate = t.onDeactivate || s
    }
    get detectionChanged() {
      return this._isDetected !== this._wasDetected
    }
    get isDetected() {
      return this._isDetected
    }
    updateFeatureState(t) {
      this._wasDetected = this._isDetected;
      for (let e of t)
        if (this._features.has(e)) return void(this._isDetected = !0);
      this._isDetected = !1
    }
    applyEffect() {
      this._isDetected ? this._onActivate() : this._onDeactivate()
    }
  };
  e.default = r
}, function(t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var s = class {
    constructor(t) {
      this.featureClass = t.featureClass, this._callback = t.callback, this._isPresent = !1, this._wasPresent = !1
    }
    get presenceChanged() {
      return this._isPresent !== this._wasPresent
    }
    get isPresent() {
      return this._isPresent
    }
    updatePresence(t) {
      this._wasPresent = this._isPresent, this._isPresent = t.contains(this.featureClass)
    }
    triggerCallback(t) {
      return this._callback(t)
    }
  };
  e.default = s
}, function(t, e, i) {
  "use strict";
  var s = i(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = s(i(3)),
    a = s(i(4));
  const n = "inline-media-timeout";
  class o extends r.default {
    static get LOAD_TIMEOUT_EVENT() {
      return n
    }
    constructor(t) {
      super(t);
      const e = this.media.el.dataset;
      this._timeoutDelay = e.loadTimeout || t.loadTimeout || 3e4, this._onLoadStart = this._onLoadStart.bind(this), this._onLoadComplete = this._onLoadComplete.bind(this), this._onTimerComplete = this._onTimerComplete.bind(this), this.media.on(a.default.MEDIA_LOAD_START, this._onLoadStart), this.media.on(a.default.MEDIA_LOAD_COMPLETE, this._onLoadComplete)
    }
    _onLoadStart() {
      clearTimeout(this._timer), this._timer = setTimeout(this._onTimerComplete, this._timeoutDelay)
    }
    _onLoadComplete() {
      clearTimeout(this._timer)
    }
    _onTimerComplete() {
      this.media.trigger(n), this.media.destroy(), this.media.el.parentElement && this.media.el.parentElement.removeChild(this.media.el)
    }
    destroy() {
      clearTimeout(this._timer), this.media.off(a.default.MEDIA_LOAD_START, this._onLoadStart)
    }
  }
  e.default = o
}, function(t, e, i) {
  "use strict";
  var s = i(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = s(i(3)),
    a = s(i(4)),
    n = s(i(15));
  const o = '[data-inline-media-control="PlayPause"]',
    h = "[data-inline-media-controller='{id}']",
    l = "Pause",
    p = "Play",
    c = "Replay",
    u = {
      CLICK: "data-analytics-click",
      TITLE: "data-analytics-title"
    };
  class d extends r.default {
    constructor(t) {
      super(t), this._container = t.container || this.media.el.parentElement, this._button = this._findButton(), this._onClick = this._onClick.bind(this), this._onPlaybackStateChange = this._onPlaybackStateChange.bind(this);
      const e = this._button.dataset;
      this._ariaLabels = {
        playing: e.ariaPlaying || t.ariaPlaying || l,
        paused: e.ariaPaused || t.ariaPaused || p,
        ended: e.ariaEnded || t.ariaEnded || c
      }, this._button.addEventListener("click", this._onClick), this.media.on(a.default.PLAYBACK_STATE_CHANGE, this._onPlaybackStateChange), this._activeAnalytics = Object.values(u).filter((t => this._button.hasAttribute(t + "-play") && this._button.hasAttribute(t + "-pause") || this._button.hasAttribute(t + "-replay")))
    }
    _findButton() {
      if (this.options.playPauseButton) return this.options.playPauseButton;
      let t = this._container.querySelector(`${o}`);
      if (!t) {
        const e = document.querySelectorAll(h.replace("{id}", this.media.id));
        for (const i of e) t = "PlayPause" === i.getAttribute("data-inline-media-control") ? i : i.querySelector(`${o}`)
      }
      return t
    }
    _onPlaybackStateChange() {
      switch (this.media.playbackState) {
        case n.default.PLAYING:
          this._button.setAttribute("aria-label", this._ariaLabels.playing);
          break;
        case n.default.ENDED:
          this._button.setAttribute("aria-label", this._ariaLabels.ended);
          break;
        default:
          this._button.setAttribute("aria-label", this._ariaLabels.paused)
      }
      this._setAnalyticsState()
    }
    _setAnalyticsState() {
      let t;
      switch (this.media.playbackState) {
        case n.default.PLAYING:
          t = "pause";
          break;
        case n.default.ENDED:
          t = "replay";
          break;
        default:
          t = "play"
      }
      for (const e of this._activeAnalytics) {
        let i = t;
        "replay" !== t || this._button.hasAttribute(`${e}-${i}`) || (i = "play"), this._button.setAttribute(e, this._button.getAttribute(`${e}-${i}`))
      }
    }
    _onClick(t) {
      this.media.el.paused ? this.media.play() : this.media.el.pause()
    }
    destroy() {
      this._button.removeEventListener("click", this._onClick), this.media.off(a.default.PLAYBACK_STATE_CHANGE, this._onPlaybackStateChange)
    }
  }
  e.default = d
}, function(t, e, i) {
  "use strict";
  var s = i(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = s(i(3)),
    a = s(i(54)),
    n = s(i(122)),
    o = (s(i(37)), s(i(124)), s(i(19)));
  class h extends r.default {
    constructor(t) {
      super(t), this._cachedPlaying = null, this._initialize()
    }
    _initialize() {
      this._onBreakpointChange = this._onBreakpointChange.bind(this);
      const t = Object.assign({
        callback: this._onBreakpointChange
      }, this.options);
      this._breakpointDetect = t.anim ? new n.default(t) : new a.default(t), this._currentTime = 0;
      const e = this.media.el.dataset;
      this._basePath = this.options.basePath || e.inlineMediaBasepath || "./", this._onBreakpointChange()
    }
    _onBreakpointChange() {
      this._currentBreakpoint = this._breakpointDetect.breakpoint;
      const t = window.devicePixelRatio > 1 ? `${this._currentBreakpoint}_2x` : this._currentBreakpoint,
        e = `${this._basePath}${t}.mp4`;
      this._swapSrc(e)
    }
    get src() {
      return this._src
    }
    async _swapSrc(t) {
      if (this._src = t, this.media.loadingState === o.default.EMPTY) return;
      const e = null !== this._cachedPlaying ? this._cachedPlaying : !this.media.el.paused;
      return this.media.loadingState === o.default.LOADED && (this._currentTime = this.media.el.currentTime), this._cachedPlaying = e, await this.media.load(`${t}#t=${this._currentTime}`), this._cachedPlaying = null, e ? this.media.play() : Promise.resolve()
    }
    destroy() {
      this._breakpointDetect.destroy(), super.destroy()
    }
  }
  e.default = h
}, function(t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  e.default = {
    small: 0,
    medium: 570,
    large: 780,
    xlarge: 1280
  }
}, function(t, e, i) {
  "use strict";
  var s = i(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = s(i(54)),
    a = s(i(123));
  class n extends r.default {
    constructor(t) {
      super(t)
    }
    _initialize() {
      this._anim = this.options.anim, this._bpMap = this.options.animBreakpointMap || a.default, this._updateBreakpoint = this._updateBreakpoint.bind(this), this._callback = this.options.callback, this._addEventListeners(), this._updateBreakpoint()
    }
    _addEventListeners() {
      this._anim.on("ON_BREAKPOINT_CHANGE", this._updateBreakpoint)
    }
    _removeEventListeners() {
      this._anim.off("ON_BREAKPOINT_CHANGE", this._updateBreakpoint)
    }
    _updateBreakpoint() {
      const t = this._bpMap[this._anim.model.pageMetrics.breakpoint];
      let e = !1;
      this._currentBreakpoint && this._currentBreakpoint !== t && (e = !0), this._currentBreakpoint = t, e && this._callback()
    }
    destroy() {
      super.destroy()
    }
  }
  e.default = n
}, function(t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  e.default = {
    S: "small",
    M: "medium",
    L: "large",
    X: "xlarge"
  }
}, function(t, e, i) {
  "use strict";
  t.exports = i(52)("log")
}, function(t, e, i) {
  "use strict";
  const s = i(7),
    r = i(5).shouldFallbackHeight,
    a = i(5).isSmallOnDesktop;
  t.exports = class extends s {
    constructor(t) {
      super(t), this.destroy = this.destroy.bind(this)
    }
    mounted() {
      this.anim.once("enhanced-destroy", this.destroy)
    }
    destroy() {
      let t = document.documentElement;
      t.classList.remove("enhanced"), t.classList.add("no-enhanced"), setTimeout((() => {
        this.anim.forceUpdate()
      }), 10)
    }
    onResizeDebounced() {
      (r() || a()) && this.anim.trigger("enhanced-destroy")
    }
    onBreakpointChange() {
      setTimeout((() => {
        this.anim.trigger("enhanced-destroy")
      }), 10)
    }
    static IS_SUPPORTED() {
      return document.documentElement.classList.contains("enhanced")
    }
  }
}, function(t, e, i) {
  "use strict";
  const s = i(7);
  t.exports = class extends s {
    constructor(t) {
      super(t), this.triggers = this.el.querySelectorAll(".tile-overlay-toggle"), this.labels = this.el.querySelectorAll("label"), this.btns = this.el.querySelectorAll(".tile-button-text")
    }
    mounted() {
      this.triggers.forEach(((t, e) => {
        const i = t.getAttribute("data-analytics-click"),
          s = t.parentElement,
          r = s.querySelector(".tile-overlay-content");
        t.addEventListener("change", (a => {
          t.checked ? (this.btns[e].setAttribute("aria-expanded", !0), s.classList.add("expanded"), r.setAttribute("aria-hidden", !1), t.removeAttribute("data-analytics-click")) : (this.btns[e].setAttribute("aria-expanded", !1), s.classList.remove("expanded"), r.setAttribute("aria-hidden", !0), t.setAttribute("data-analytics-click", i))
        })), this.labels[e].addEventListener("keypress", (e => {
          13 !== e.keyCode && 32 !== e.keyCode || (e.preventDefault(), t.checked = !t.checked, t.dispatchEvent(new Event("change")))
        }))
      }))
    }
    static IS_SUPPORTED() {
      return !0
    }
  }
}, function(t, e, i) {
  "use strict";
  var s = i(5);
  const r = i(7);
  t.exports = class extends r {
    constructor(t) {
      super(t), this.scrollGroup = this.anim.getGroupForTarget(this.el);
      const e = {
        anchors: this.el,
        toggle: !0
      };
      let i = {};
      Object.keys(this.el.dataset).forEach((t => {
        if (t.includes("willChange")) {
          let e = t.substring("willChange".length);
          e = e.charAt(0).toLowerCase() + e.substring(1), i[e] = this.el.dataset[t]
        }
      })), this.willChangeOptions = Object.assign(e, s.willChangeOptions, i)
    }
    mounted() {
      this.setupKeyframes()
    }
    setupKeyframes() {
      this.scrollGroup.addKeyframe(this.el, this.willChangeOptions)
    }
    static IS_SUPPORTED() {
      return !0
    }
  }
}, function(t, e, i) {
  "use strict";
  const s = i(7),
    r = i(129);
  t.exports = class extends s {
    constructor(t) {
      super(t), this.scrollGroup = this.anim.getGroupForTarget(this.el), this.heroWrapper = this.el.querySelector(".hero-gallery"), this.heroStaggeredAssets = [...this.el.querySelectorAll(".hero-column-layer-1 .staggered-asset, .hero-column-layer-2 .staggered-asset, .hero-column-layer-3 .staggered-asset")], this.heroLoadedAssets = [...this.el.querySelectorAll(".hero-column-layer-5 .staggered-asset, .hero-column-layer-4 .staggered-asset")], this.parallaxItems = [...this.el.querySelectorAll(".hero-column, .hero-content")], this.heroContentItems = [...this.el.querySelectorAll(".hero-content > *")], this.heroVideos = [...this.el.querySelectorAll("video.watch-screen")]
    }
    mounted() {
      this.selectVideoSrc(this.pageMetrics), this.setupHero()
    }
    onBreakpointChange(...t) {
      super.onBreakpointChange(...t), this.selectVideoSrc(this.pageMetrics)
    }
    selectVideoSrc(t) {
      this.heroVideos.forEach((e => "S" === t.breakpoint ? e.setAttribute("src", `${e.dataset.src}/small_2x.mp4`) : "M" === t.breakpoint ? e.setAttribute("src", `${e.dataset.src}/medium_2x.mp4`) : e.setAttribute("src", `${e.dataset.src}/large_2x.mp4`)))
    }
    setupHero() {
      this.scrollGroup.addKeyframe(this.el, {
        start: "0",
        end: "116vh",
        cssClass: "will-change",
        toggle: !0
      }), this.playVideos(), this.setupGalleryFade(), this.setupContentFade(), this.setupParallax()
    }
    playVideos() {
      this.heroVideos.forEach((t => {
        this.scrollGroup.addEvent(t, {
          start: "t - var(--anim-start)",
          onEvent: () => {
            t.play()
          },
          disabledWhen: ["no-enhanced"]
        })
      }))
    }
    setupGalleryFade() {
      r(".hero-column-layer-5 img, .hero-column-layer-4 img").then((() => {
        this.heroLoadedAssets.forEach((t => {
          t.style.opacity = 1
        }))
      })).then((() => {
        this.heroStaggeredAssets.forEach((t => {
          t.style.opacity = 1
        }))
      }))
    }
    setupContentFade() {
      this.heroContentItems.forEach((t => {
        this.scrollGroup.addEvent(t, {
          start: "t - var(--anim-start)",
          onEvent: () => {
            t.classList.add("hero-content-fade-in")
          },
          onEventReverse: () => {
            t.classList.remove("hero-content-fade-in")
          },
          disabledWhen: ["no-enhanced"]
        })
      }))
    }
    setupParallax() {
      this.parallaxItems.forEach((t => {
        this.scrollGroup.addKeyframe(t, {
          start: "0",
          end: "a0t + var(--anim-end)",
          y: ["0", "var(--y-end)"],
          anchors: [this.el],
          easeFunction: "easeOutQuad",
          ease: .08,
          disabledWhen: ["no-enhanced"]
        })
      }))
    }
    static IS_SUPPORTED() {
      return document.documentElement.classList.contains("enhanced")
    }
  }
}, function(t, e, i) {
  "use strict";
  const s = i(130),
    r = i(131),
    a = i(1).PICTURE_DATA_LOADED,
    n = i(1).PICTURE_DATA_LAZY;
  t.exports = function(t, e, i = !1) {
    const o = r(t);
    if (!o.length) return Promise.reject({
      message: "no elements found / passed into ImagesLoaded function."
    });
    const h = o.map((t => {
      const r = t.parentElement;
      let o = i;
      return "PICTURE" === r.tagName && r.hasAttribute(n) && !r.hasAttribute(a) && (o = !0), s({
        el: t,
        seconds: e,
        forceListener: o
      })
    }));
    return Promise.all(h)
  }
}, function(t, e, i) {
  "use strict";
  t.exports = function({
    el: t,
    url: e,
    seconds: i,
    forceListener: s
  } = {}) {
    return new Promise(((r, a) => {
      let n;
      const o = e || t.src;
      if (!o) return void a({
        message: "Couldn't find a src on image",
        el: t
      });
      const h = o.match(/.*\.svg$/g);
      let l;
      e || h ? n = new Image : "IMG" === t.tagName && (n = t);
      const p = () => {
        clearTimeout(l), n.removeEventListener("load", p), r({
          el: t,
          path: o
        })
      };
      if (i && (l = setTimeout((() => {
          n.removeEventListener("load", p), a({
            message: "Ran out of time loading: " + o,
            el: t,
            path: o
          })
        }), 1e3 * i)), !e && n.complete && !h && !s) return n.naturalWidth ? (clearTimeout(l), void r({
        el: t,
        path: o
      })) : void a({
        message: "Failed to load image:" + o,
        el: t,
        path: o
      });
      n.addEventListener("load", p), n.addEventListener("error", (function() {
        a({
          message: "Failed to load image:" + o,
          el: t,
          path: o
        })
      })), e && (n.src = o)
    }))
  }
}, function(t, e, i) {
  "use strict";
  t.exports = function(t) {
    let e;
    return e = "string" == typeof t ? Array.from(document.documentElement.querySelectorAll(t)) : Array.isArray(t) ? t : t instanceof Element ? [t] : Array.from(t), e
  }
}, function(t, e, i) {
  "use strict";
  var s = i(36);
  const r = i(18),
    a = i(35);
  i(4).default;
  t.exports = class extends r {
    constructor(t) {
      super(t), this.timelineGroup = this.gum.anim.createTimeGroup(), this.media = null, this.duration = null, this.play = this.play.bind(this), this.reset = this.reset.bind(this), this.destroy = this.destroy.bind(this)
    }
    async mounted() {
      s.Media.addPlugin("ReplayDisabled", a);
      let t = await s.Media.autoInitialize(this.el, {
        anim: this.gum.anim
      });
      this.media = t, this.setupEvents(), this.setupTimeline(), this.setupEngageKeyframes(this.play, this.reset, this.duration)
    }
    setupEvents() {
      this.anim.once("enhanced-destroy", this.destroy)
    }
    play() {
      this.timelineGroup.play()
    }
    reset() {
      this.timelineGroup.pause(0), this.media.forEach((t => {
        t.el.pause(), t.el.currentTime = 0
      }))
    }
    setupTimeline() {
      this.media.forEach(((t, e) => {
        this.timelineGroup.addEvent(this.el, {
          start: 1e-4 + .7 * e,
          eventName: "play-inline-video-" + e,
          onEvent: () => {
            t.play()
          }
        })
      }))
    }
    static IS_SUPPORTED() {
      return document.documentElement.classList.contains("enhanced")
    }
  }
}, function(t, e, i) {
  "use strict";
  const s = i(18);
  t.exports = class extends s {
    constructor(t) {
      super(t), this.duration = null, this.play = this.play.bind(this), this.reset = this.reset.bind(this), this.destroy = this.destroy.bind(this), this.tile = this.el.closest(".grid-item-scene")
    }
    mounted() {
      this.setupEvents(), this.setupEngageKeyframes(this.play, this.reset, this.duration), this.onResizeDebounced()
    }
    setupEvents() {
      this.anim.once("enhanced-destroy", this.destroy)
    }
    play() {
      this.tile.classList.add("animated")
    }
    reset() {
      this.tile.classList.remove("animated")
    }
    destroy() {}
    onResizeDebounced() {
      this.tile.classList.contains("will-change") ? this.tile.classList.add("animated") : this.tile.classList.remove("animated")
    }
    static IS_SUPPORTED() {
      return document.documentElement.classList.contains("enhanced")
    }
  }
}, function(t, e, i) {
  "use strict";
  const s = i(8);
  t.exports = class extends s {
    constructor(t) {
      super(t), this.timelineGroup = this.gum.anim.createTimeGroup(), this.lottieContainer = this.el.querySelector(".lottie-animation"), this.mindfulness = this.el.querySelector(".blockquote-mindfulness"), this.lottiePath = this.lottieContainer.dataset.lottieFile, this.play = this.play.bind(this), this.reset = this.reset.bind(this), this.destroy = this.destroy.bind(this)
    }
    mounted() {
      this.setupTimeline(), this.setupLottie(this.lottieContainer, this.lottiePath), this.setupEngageKeyframes(this.play, this.reset, this.timelineGroup.duration, this.timelineGroup.time)
    }
    setupEvents() {
      this.anim.once("enhanced-destroy", this.destroy)
    }
    play() {
      this.isEnhanced && this.timelineGroup.play()
    }
    reset() {
      this.timelineGroup.pause(0), this.lottie.stop()
    }
    destroy() {
      this.lottie.goToAndStop(this.lastFrame - 1, !0)
    }
    setupTimeline() {
      this.timelineGroup.addKeyframe(this.mindfulness, {
        start: 1.85,
        cssClass: "mindfulness-color-fade",
        toggle: !0,
        disabledWhen: ["no-enhanced"]
      }), this.timelineGroup.addEvent(this.el, {
        start: .25,
        eventName: "play-lottie",
        onEvent: () => {
          this.lottie.play()
        },
        disabledWhen: ["no-enhanced"]
      })
    }
    static IS_SUPPORTED() {
      return !0
    }
  }
}, function(t, e, i) {
  "use strict";
  const s = i(8);
  t.exports = class extends s {
    setupEngageKeyframes(...t) {
      super.setupEngageKeyframes(...t), setTimeout((() => {
        this.lottie.isPaused && (this.lottie.setCurrentRawFrameValue(1), this.lottie.setCurrentRawFrameValue(0))
      }), 50)
    }
  }
}, function(t, e, i) {
  "use strict";
  var s = i(5);
  const r = i(8);
  t.exports = class extends r {
    constructor(t) {
      super(t), this.timelineGroup = this.gum.anim.createTimeGroup(), this.lottieContainer = this.el.querySelector(".lottie-animation"), this.blockquotes = Array.from(this.el.querySelectorAll(".tile-blockquote")), this.lottiePath = this.lottieContainer.dataset.lottieFile, this.play = this.play.bind(this), this.reset = this.reset.bind(this), this.destroy = this.destroy.bind(this), this.engageKeyframeOptions = {
        large: {
          start: "t + 90h - 125vh",
          end: "t + 50h",
          event: "carnival-item-engage-large",
          breakpointMask: "L",
          disabledWhen: s.disabledWhen
        },
        medium: {
          start: "t + 90h - 125vh",
          end: "t + 50h",
          event: "carnival-item-engage-medium",
          breakpointMask: "M",
          disabledWhen: s.disabledWhen
        },
        small: {
          start: "t + 15h - 50vh",
          end: "t + 50h",
          event: "carnival-item-engage-small",
          breakpointMask: "S",
          disabledWhen: s.disabledWhen
        }
      }
    }
    mounted() {
      this.setupTimeline(), this.setupLottie(this.lottieContainer, this.lottiePath), this.setupEngageKeyframes(this.play, this.reset, this.timelineGroup.duration, this.timelineGroup.time)
    }
    setupEvents() {
      this.anim.once("enhanced-destroy", this.destroy)
    }
    play() {
      this.isEnhanced && this.timelineGroup.play()
    }
    reset() {
      this.timelineGroup.pause(0), this.lottie.stop()
    }
    destroy() {
      this.lottie.goToAndStop(this.lastFrame - 1, !0)
    }
    setupTimeline() {
      let t = 1e-5;
      this.blockquotes.forEach((e => {
        this.timelineGroup.addKeyframe(e, {
          start: t,
          cssClass: "slide-up",
          toggle: !0,
          disabledWhen: ["no-enhanced"]
        }), t += .1
      })), this.timelineGroup.addEvent(this.el, {
        start: 1e-5,
        eventName: "play-lottie",
        onEvent: () => {
          this.lottie.play()
        },
        disabledWhen: ["no-enhanced"]
      })
    }
    static IS_SUPPORTED() {
      return !0
    }
  }
}, function(t, e, i) {
  "use strict";
  const s = i(8);
  t.exports = class extends s {
    constructor(t) {
      super(t), this.timelineGroup = this.gum.anim.createTimeGroup(), this.lottieContainer = this.el.querySelector(".lottie-animation"), this.dictation = this.el.querySelector(".blockquote-dictation"), this.lottiePath = this.lottieContainer.dataset.lottieFile, this.play = this.play.bind(this), this.reset = this.reset.bind(this), this.destroy = this.destroy.bind(this)
    }
    mounted() {
      this.setupTimeline(), this.setupLottie(this.lottieContainer, this.lottiePath), this.setupEngageKeyframes(this.play, this.reset, this.timelineGroup.duration, this.timelineGroup.time)
    }
    setupEvents() {
      this.anim.once("enhanced-destroy", this.destroy)
    }
    play() {
      this.isEnhanced && this.timelineGroup.play()
    }
    reset() {
      this.timelineGroup.pause(0), this.lottie.stop()
    }
    destroy() {
      this.lottie.goToAndStop(this.lastFrame - 1, !0)
    }
    setupTimeline() {
      this.timelineGroup.addKeyframe(this.dictation, {
        start: 4,
        cssClass: "dictation-fade",
        toggle: !0,
        disabledWhen: ["no-enhanced"]
      }), this.timelineGroup.addEvent(this.el, {
        start: .25,
        eventName: "play-lottie",
        onEvent: () => {
          this.lottie.play()
        },
        disabledWhen: ["no-enhanced"]
      })
    }
    static IS_SUPPORTED() {
      return !0
    }
  }
}, function(t, e, i) {
  "use strict";
  var s = i(36);
  const r = i(8),
    a = i(35),
    n = i(4).default;
  t.exports = class extends r {
    constructor(t) {
      super(t), this.timelineGroup = this.gum.anim.createTimeGroup(), this.media = null, this.lottieContainer = this.el.querySelector(".lottie-animation"), this.lottiePath = this.lottieContainer.dataset.lottieFile, this.offsetDuration = 2.5, this.play = this.play.bind(this), this.reset = this.reset.bind(this), this.destroy = this.destroy.bind(this)
    }
    async mounted() {
      s.Media.addPlugin("ReplayDisabled", a);
      let t = await s.Media.autoInitialize(this.el, {
        anim: this.gum.anim,
        playPauseButton: this.playPauseButton
      });
      this.media = t[0], this.setupEvents(), this.setupTimeline(), this.setupLottie(this.lottieContainer, this.lottiePath), this.setupEngageKeyframes(this.play, this.reset, this.offsetDuration, this.timelineGroup.time)
    }
    setupEvents() {
      this.anim.once("enhanced-destroy", this.destroy)
    }
    play() {
      this.isEnhanced && this.timelineGroup.play()
    }
    reset() {
      this.timelineGroup.pause(0), this.lottie.stop(), this.media.el.pause(), this.media.el.currentTime = 0
    }
    destroy() {
      this.lottie.goToAndStop(this.lastFrame - 1, !0), this.media.off(n.MEDIA_LOAD_START, this.onLoadStart), this.media.destroy()
    }
    setupTimeline() {
      this.timelineGroup.addEvent(this.el, {
        start: 1e-5,
        eventName: "play-lottie",
        onEvent: () => this.lottie.play(),
        disabledWhen: ["no-enhanced"]
      }), this.timelineGroup.addEvent(this.el, {
        start: 1,
        eventName: "play-inline-video",
        onEvent: () => this.media.play(),
        disabledWhen: ["no-enhanced"]
      })
    }
    static IS_SUPPORTED() {
      return !0
    }
  }
}, function(t, e, i) {
  "use strict";
  const s = i(8);
  t.exports = class extends s {
    constructor(t) {
      super(t), this.lottieContainer = this.el.querySelector(".lottie-animation"), this.lottiePath = this.lottieContainer.dataset.lottieFile, this.offsetDuration = 2, this.play = this.play.bind(this), this.reset = this.reset.bind(this), this.destroy = this.destroy.bind(this)
    }
    mounted() {
      this.setupEvents(), this.setupLottie(this.iconContainer, this.lottiePath), this.lottie.addEventListener("data_ready", (() => {
        this.setupEngageKeyframes(this.play, this.reset, this.offsetDuration, this.lottie.currentFrame)
      }))
    }
    setupEvents() {
      this.anim.once("enhanced-destroy", this.destroy)
    }
    play() {
      this.isEnhanced && this.lottie.play()
    }
    reset() {
      this.lottie.stop()
    }
    destroy() {
      this.lottie.goToAndStop(this.lastFrame - 1, !0)
    }
    static IS_SUPPORTED() {
      return !0
    }
  }
}, function(t, e, i) {
  "use strict";
  var s = i(0)(i(7));
  class r extends s.default {
    mounted(...t) {
      super.mounted(...t), this.originalNextSibling = this.el.nextElementSibling, this.checkUpdateDomPosition(this.pageMetrics)
    }
    onBreakpointChange(...t) {
      super.onBreakpointChange(...t), this.checkUpdateDomPosition(this.pageMetrics)
    }
    checkUpdateDomPosition(t) {
      var e = this.el.dataset[`beforeTarget${t.breakpoint}`];
      if (e) {
        const t = this.el.parentElement,
          i = t.querySelector(e);
        i && t.insertBefore(this.el, i)
      } else this.el.parentElement.insertBefore(this.el, this.originalNextSibling);
      this.anim.forceUpdate()
    }
  }
  t.exports = r
}, function(t, e, i) {
  "use strict";
  const s = i(142),
    r = i(143),
    a = i(14),
    n = i(12);
  class o extends s {
    constructor(t = {}) {
      super(t), this.arrayImg = []
    }
    _init() {
      super._init(), this._onBreakpointChangeCallback = this._onBreakpointChangeCallback.bind(this), this._addViewportEvents(), this._resetPromises(), this._addMethodsToImageElement()
    }
    _addViewportEvents() {
      let t = this.options.breakpoints ? {
        breakpoints: this.options.breakpoints
      } : {};
      this.viewportEmitterMicro = new r(t), this.viewportEmitterMicro.on(r.CHANGE_EVENTS.VIEWPORT, this._onBreakpointChangeCallback), this.viewportEmitterMicro.on(r.CHANGE_EVENTS.RETINA, this._onBreakpointChangeCallback)
    }
    _addKeyframesToImages() {
      this._scrollGroup = this.AnimSystem.getGroupForTarget(document.body), this._images.forEach((t => {
        this.AnimSystem.getGroupForTarget(t) && (this._scrollGroup = this.AnimSystem.getGroupForTarget(t));
        let e = this._defineKeyframeOptions(t);
        this._scrollGroup.addKeyframe(t, e).controller.on("AnimLazyImage:enter", (() => {
          this._imageIsInLoadRange(t)
        }))
      }))
    }
    _onBreakpointChangeCallback(t) {
      this._resetPromises(), this.arrayImg = [], this._images.forEach((t => {
        this._cleanUpImageAttributes(t), "" != t.getAttribute(s.DATA_ATTRIBUTE) && this._imageIsInLoadRange(t)
      }))
    }
    _resetPromises() {
      this._images.forEach((t => {
        t.promises = {}, t.promises.downloadComplete = new Promise((e => {
          t.promises.__completePromiseResolver = e
        }))
      }))
    }
    _addMethodsToImageElement() {
      this._images.forEach((t => {
        t.forceLazyLoad = () => {
          this._imageIsInLoadRange(t)
        }
      }))
    }
    _imageIsInLoadRange(t) {
      this._downloadImage(t).then((() => {
        t.promises.__completePromiseResolver(t), t.dispatchEvent(new Event(o.EVENTS.DOWNLOAD_COMPLETE))
      }))
    }
    _cleanUpImageAttributes(t) {
      t.removeAttribute(o.DATA_DOWNLOADING_ATTRIBUTE), t.removeAttribute(o.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE)
    }
    _downloadingImageAttributes(t) {
      super._downloadingImageAttributes(t), t.setAttribute(o.DATA_DOWNLOADING_ATTRIBUTE, "")
    }
    _finishedDownloadAttributes(t) {
      t.removeAttribute(o.DATA_DOWNLOADING_ATTRIBUTE), t.setAttribute(o.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE, "")
    }
    _downloadImage(t) {
      return new Promise(((e, i) => {
        null === t.getAttribute(o.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE) ? null === t.getAttribute(o.DATA_DOWNLOADING_ATTRIBUTE) && this._waitForBackgroundVisible(t).then((t => this._getBackgroundImageSrc(t))).then((t => this._loadImage(t))).then((() => {
          a((() => {
            this._finishedDownloadAttributes(t), e()
          }), !0)
        })) : e()
      }))
    }
    _waitForBackgroundVisible(t) {
      return new Promise(((e, i) => {
        a((() => {
          this._downloadingImageAttributes(t), e(t)
        }), !0)
      }))
    }
    _getBackgroundImageSrc(t) {
      return new Promise(((e, i) => {
        n((() => {
          let i = t.currentStyle;
          i || (i = window.getComputedStyle(t, !1)), 0 !== i.backgroundImage.indexOf("url(") ? e(null) : e(i.backgroundImage.slice(4, -1).replace(/"/g, ""))
        }), !0)
      }))
    }
    _loadImage(t) {
      return new Promise(this._loadImagePromiseFunc.bind(this, t))
    }
    _loadImagePromiseFunc(t, e, i) {
      if (!t) return void e(null);
      let s = new Image(1, 1);
      s.addEventListener("load", (function t(i) {
        s.removeEventListener("load", t), e(this)
      })), s.src = t, this.arrayImg.push(s)
    }
  }
  o.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE = "data-anim-lazy-image-download-complete", o.DATA_DOWNLOADING_ATTRIBUTE = "data-anim-lazy-image-downloading", o.EVENTS = {}, o.EVENTS.DOWNLOAD_COMPLETE = "video-loading-complete", t.exports = o
}, function(t, e, i) {
  "use strict";
  class s {
    constructor(t = {}) {
      this.options = t, "loading" === document.readyState ? document.addEventListener("readystatechange", (t => {
        "interactive" === document.readyState && this._init()
      })) : this._init()
    }
    _init() {
      if (this._images = Array.from(document.querySelectorAll(`*[${s.DATA_ATTRIBUTE}]`)), this.AnimSystem = this._findAnim(), null === this.AnimSystem) return null;
      this._addKeyframesToImages()
    }
    _defineKeyframeOptions(t = null) {
      const e = t.getAttribute(s.DATA_DOWNLOAD_AREA_KEYFRAME) || "{}";
      return Object.assign({}, {
        start: "t - 200vh",
        end: "b + 100vh",
        event: "AnimLazyImage"
      }, JSON.parse(e))
    }
    _addKeyframesToImages() {
      this._scrollGroup = this.AnimSystem.getGroupForTarget(document.body), this._images.forEach((t => {
        this.AnimSystem.getGroupForTarget(t) && (this._scrollGroup = this.AnimSystem.getGroupForTarget(t));
        let e = this._defineKeyframeOptions(t);
        this._scrollGroup.addKeyframe(t, e).controller.once("AnimLazyImage:enter", (() => {
          this._imageIsInLoadRange(t)
        }))
      }))
    }
    _cleanUpImageAttributes(t) {
      let e = !1;
      try {
        e = this._scrollGroup.getControllerForTarget(t).getNearestKeyframeForAttribute("AnimLazyImage").isCurrentlyInRange
      } catch (t) {
        e = !1
      }
      e || t.setAttribute(s.DATA_ATTRIBUTE, "")
    }
    _downloadingImageAttributes(t) {
      t.removeAttribute(s.DATA_ATTRIBUTE)
    }
    _imageIsInLoadRange(t) {
      this._downloadImage(t)
    }
    _downloadImage(t) {
      this._downloadingImageAttributes(t)
    }
    _findAnim() {
      var t = Array.from(document.querySelectorAll("[data-anim-group],[data-anim-scroll-group],[data-anim-time-group]"));
      return t.map((t => t._animInfo ? t._animInfo.group : null)).filter((t => null !== t)), t[0] && t[0]._animInfo ? t[0]._animInfo.group.anim : (console.error("AnimLazyImage: AnimSystem not found, please initialize anim before instantiating"), null)
    }
  }
  s.DATA_DOWNLOAD_AREA_KEYFRAME = "data-download-area-keyframe", s.DATA_ATTRIBUTE = "data-anim-lazy-image", t.exports = s
}, function(t, e, i) {
  "use strict";
  const s = i(6).EventEmitterMicro,
    r = [{
      name: "S",
      mediaQuery: "only screen and (max-width: 734px)"
    }, {
      name: "M",
      mediaQuery: "only screen and (min-width: 735px) and (max-width: 1068px)"
    }, {
      name: "L",
      mediaQuery: "only screen and (min-width: 1069px) and (max-width: 1440px)"
    }, {
      name: "X",
      mediaQuery: "only screen and (min-width: 1441px)"
    }],
    a = "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)",
    n = "only screen and (orientation: portrait)";
  class o extends s {
    constructor(t = {}) {
      super(), this.BREAKPOINTS = t.breakpoints || r, this._setupProperties(), this._onRetinaChange = this._onRetinaChange.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), this.listenersAdded = {
        orientation: !1,
        retina: !1,
        viewport: !1
      }
    }
    static get CHANGE_EVENTS() {
      return {
        ORIENTATION: "change:orientation",
        RETINA: "change:retina",
        VIEWPORT: "change:viewport"
      }
    }
    on() {
      this._setupListeners(arguments[0]), super.on.apply(this, arguments)
    }
    _onRetinaChange() {
      this.trigger(o.CHANGE_EVENTS.RETINA, this)
    }
    _onOrientationChange() {
      this.trigger(o.CHANGE_EVENTS.ORIENTATION, this)
    }
    _setupProperties() {
      Object.defineProperty(this, "retina", {
        get: () => window.matchMedia(a).matches
      }), Object.defineProperty(this, "orientation", {
        get: () => window.matchMedia(n).matches ? "portrait" : "landscape"
      }), this.viewport = this.getBreakpoint()
    }
    _setupListeners(t) {
      if (t !== o.CHANGE_EVENTS.RETINA || this.listenersAdded.retina || (window.matchMedia(a).addListener(this._onRetinaChange), this.listenersAdded.retina = !0), t !== o.CHANGE_EVENTS.ORIENTATION || this.listenersAdded.orientation || (window.matchMedia(n).addListener(this._onOrientationChange), this.listenersAdded.orientation = !0), t === o.CHANGE_EVENTS.VIEWPORT && !this.listenersAdded.viewport) {
        for (let t = 0; t < this.BREAKPOINTS.length; t++) {
          let e = this.BREAKPOINTS[t];
          window.matchMedia(e.mediaQuery).addListener((t => {
            t.matches && (this.oldViewport = this.viewport, this.viewport = e.name, this.trigger(o.CHANGE_EVENTS.VIEWPORT, this))
          }))
        }
        this.listenersAdded.viewport = !0
      }
    }
    getBreakpoint() {
      for (let t = 0; t < this.BREAKPOINTS.length; t++) {
        let e = this.BREAKPOINTS[t];
        if (window.matchMedia(e.mediaQuery).matches) return e.name
      }
    }
  }
  t.exports = o
}, function(t, e, i) {
  "use strict";

  function s() {
    this._createElements(), this._bindEvents()
  }
  var r = s.prototype;
  r._bindEvents = function() {
    this._onResize = this._resize.bind(this)
  }, r._createElements = function() {
    this.span = document.createElement("span");
    var t = this.span.style;
    if (t.visibility = "hidden", t.position = "absolute", t.top = "0", t.zIndex = "-1", this.span.innerHTML = "&nbsp;", !window.ResizeObserver) {
      this.iframe = document.createElement("iframe");
      var e = this.iframe.style;
      e.position = "absolute", e.top = "0", e.left = "0", e.width = "100%", e.height = "100%", this.span.appendChild(this.iframe)
    }
    document.body.appendChild(this.span)
  }, r.detect = function(t) {
    this.originalSize = t || 17, this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.currentSize > this.originalSize && this._onResize(), this.isDetecting || (window.ResizeObserver ? (this.resizeObserver = new ResizeObserver(this._onResize), this.resizeObserver.observe(this.span)) : this.iframe.contentWindow.addEventListener("resize", this._onResize), this.isDetecting = !0)
  }, r._resize = function() {
    this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.originalSize < this.currentSize ? document.documentElement.classList.add("text-zoom") : document.documentElement.classList.remove("text-zoom"), window.dispatchEvent(new Event("resize")), window.dispatchEvent(new CustomEvent("resize:text-zoom", {
      detail: this
    }))
  }, r.getScale = function() {
    return this.currentSize / this.originalSize
  }, r.remove = function() {
    this.isDetecting && (this.resizeObserver && this.resizeObserver.unobserve(this.span), this.iframe && this.iframe.contentWindow.removeEventListener("resize", this._onResize), this.isDetecting = !1)
  }, r.destroy = function() {
    this.remove(), this.span && this.span.parentElement && this.span.parentElement.removeChild(this.span), this.span = null, this.iframe = null, this.resizeObserver = null
  }, t.exports = new s
}]);
