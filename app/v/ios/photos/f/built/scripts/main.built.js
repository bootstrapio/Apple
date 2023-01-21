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
  }, i.p = "/", i(i.s = 39)
}([function(t, e, i) {
  "use strict";
  const s = {
    GUI_INSTANCE: null,
    ANIM_INSTANCE: null,
    VIEWPORT_EMITTER_ELEMENT: void 0,
    LOCAL_STORAGE_KEYS: {
      GuiPosition: "GuiPosition-0",
      scrollY: "scrollY",
      path: "path"
    },
    RESIZE_TIMEOUT: -1,
    BREAKPOINTS: [{
      name: "S",
      mediaQuery: "only screen and (max-width: 735px)"
    }, {
      name: "M",
      mediaQuery: "only screen and (max-width: 1068px)"
    }, {
      name: "L",
      mediaQuery: "only screen and (min-width: 1442px)"
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
      ON_TIMELINE_COMPLETE: "ON_TIMELINE_COMPLETE"
    },
    PageEvents: {
      ON_SCROLL: "ON_SCROLL",
      ON_RESIZE_IMMEDIATE: "ON_RESIZE_IMMEDIATE",
      ON_RESIZE_DEBOUNCED: "ON_RESIZE_DEBOUNCED",
      ON_BREAKPOINT_CHANGE: "ON_BREAKPOINT_CHANGE"
    },
    KeyframeJSONReservedWords: ["event", "cssClass", "style", "anchors", "start", "end", "epsilon", "easeFunction", "ease", "breakpointMask", "disabledWhen"],
    TweenProps: class {},
    TargetValue: class {
      constructor(t, e, i) {
        this.epsilon = parseFloat(e), this.snapAtCreation = i, this.initialValue = t, this.target = t, this.current = t, this.previousValue = t, this.isActive = !1
      }
    },
    AnimInfo: function(t, e, i = !1) {
      this.isGroup = i, this.group = t, this.controller = e, this.controllers = []
    },
    Progress: function() {
      this.local = 0, this.localUnclamped = 0, this.lastPosition = 0
    },
    ViewableRange: function(t, e) {
      this.a = t.top - e, this.a < 0 && (this.a = t.top), this.b = t.top, this.d = t.bottom, this.c = Math.max(this.d - e, this.b)
    },
    pageMetrics: new function() {
      this.scrollX = 0, this.scrollY = 0, this.windowWidth = 0, this.windowHeight = 0, this.documentOffsetX = 0, this.documentOffsetY = 0, this.previousBreakpoint = "", this.breakpoint = ""
    },
    EventObject: function(t) {
      this.controller = t, this.element = this.controller.element, this.keyframe = null, this.event = "", this.tweenProps = this.controller.tweenProps
    },
    KeyframeComparison: function(t, e) {
      return t.start < e.start ? -1 : t.start > e.start ? 1 : 0
    }
  };
  t.exports = s
}, function(t, e, i) {
  "use strict";
  t.exports = {
    EventEmitterMicro: i(14)
  }
}, function(t, e, i) {
  "use strict";
  const s = i(0),
    r = i(5),
    n = i(44),
    a = i(45),
    o = i(10);
  class h {
    constructor(t, e) {
      this.controller = t, this.anchors = [], this.jsonProps = e, this.ease = t.group.defaultEase, this.easeFunctionString = s.KeyframeDefaults.easeFunctionString, this.easeFunction = n[this.easeFunctionString], this.start = 0, this.end = 0, this.localT = 0, this.curvedT = 0, this.id = 0, this.event = "", this.needsEventDispatch = !1, this.snapAtCreation = !1, this.isEnabled = !1, this.animValues = {}, this.breakpointMask = "SMLX", this.disabledWhen = [], this.keyframeType = s.KeyframeTypes.Interpolation, this.hold = !1
    }
    destroy() {
      this.controller = null, this.anchors = null, this.jsonProps = null, this.easeFunction = null, this.animValues = null
    }
    remove() {
      return this.controller.removeKeyframe(this)
    }
    parseOptions(t) {
      if (this.jsonProps = t, t.relativeTo && console.error(`KeyframeError: relativeTo has been removed. Use 'anchors' property instead. Found 'relativeTo':"${t.relativeTo}"`), "" !== t.anchors && t.anchors) {
        let e = Array.isArray(t.anchors) ? t.anchors : [t.anchors];
        this.anchors = [], e.forEach((t => {
          let e = t instanceof Element ? t : this.controller.group.element.querySelector(t) || document.querySelector(t);
          null !== e ? (this.anchors.push(e), this.controller.group.metrics.add(e)) : console.warn("Keyframe for", this.controller.friendlyName, " `anchor` failed to find '" + t + "' via querySelector in group.element or document")
        }))
      } else this.anchors = [], t.anchors = [];
      if (t.ease ? this.ease = parseFloat(t.ease) : t.ease = this.ease, t.hasOwnProperty("snapAtCreation") ? this.snapAtCreation = t.snapAtCreation : t.snapAtCreation = this.snapAtCreation, t.easeFunction ? this.easeFunction = t.easeFunction : t.easeFunction = this.easeFunctionString, t.breakpointMask ? this.breakpointMask = t.breakpointMask : t.breakpointMask = this.breakpointMask, t.disabledWhen ? this.disabledWhen = Array.isArray(t.disabledWhen) ? t.disabledWhen : [t.disabledWhen] : t.disabledWhen = this.disabledWhen, t.hasOwnProperty("hold") ? this.hold = t.hold : t.hold = this.hold, this.easeFunction = n[t.easeFunction], !n.hasOwnProperty(t.easeFunction)) {
        let e = a.fromCSSString(t.easeFunction);
        e ? this.easeFunction = e : console.error("Keyframe parseOptions cannot find EasingFunction named '" + t.easingFunction + "'")
      }
      for (let e in t) {
        if (-1 !== s.KeyframeJSONReservedWords.indexOf(e)) continue;
        let i = t[e];
        if (!Array.isArray(i)) continue;
        if (this.animValues[e] = this.controller.group.expressionParser.parseArray(this, i), void 0 === this.controller.tweenProps[e] || !this.controller._ownerIsElement) {
          let t = 0;
          this.controller._ownerIsElement || (t = this.controller.element[e]);
          let i = new s.TargetValue(t, s.KeyframeDefaults.epsilon, this.snapAtCreation);
          this.controller.tweenProps[e] = i
        }
        let r = this.controller.tweenProps[e];
        if (t.epsilon) r.epsilon = t.epsilon;
        else {
          let t = Math.abs(this.animValues[e][0] - this.animValues[e][1]),
            i = Math.min(.001 * t, r.epsilon, s.KeyframeDefaults.epsilon);
          r.epsilon = Math.max(i, 1e-4)
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
      if (this.start === this.end || t > this.end) return this.localT = 1, void(this.curvedT = this.easeFunction(this.localT));
      const e = (t - this.start) / (this.end - this.start),
        i = this.hold ? this.localT : 0;
      this.localT = r.clamp(e, i, 1), this.curvedT = this.easeFunction(this.localT)
    }
    reconcile(t) {
      let e = this.animValues[t],
        i = this.controller.tweenProps[t];
      i.initialValue = e[0], i.target = e[0] + this.curvedT * (e[1] - e[0]), i.current !== i.target && (i.current = i.target, this.needsEventDispatch || (this.needsEventDispatch = !0, this.controller.keyframesRequiringDispatch.push(this)))
    }
    reset(t) {
      this.localT = t || 0;
      var e = this.ease;
      this.ease = 1;
      for (let t in this.animValues) this.reconcile(t);
      this.ease = e
    }
    onDOMRead(t) {
      let e = this.animValues[t],
        i = this.controller.tweenProps[t];
      i.target = e[0] + this.curvedT * (e[1] - e[0]);
      let s = i.current;
      i.current += (i.target - i.current) * this.ease;
      let r = i.current - i.target;
      r < i.epsilon && r > -i.epsilon && (i.current = i.target, r = 0), "" === this.event || this.needsEventDispatch || (r > i.epsilon || r < -i.epsilon || 0 === r && s !== i.current) && (this.needsEventDispatch = !0, this.controller.keyframesRequiringDispatch.push(this))
    }
    isInRange(t) {
      return t >= this.start && t <= this.end
    }
    setEnabled(t) {
      t = t || o(Array.from(document.documentElement.classList));
      let e = -1 !== this.breakpointMask.indexOf(s.pageMetrics.breakpoint),
        i = !1;
      return this.disabledWhen.length > 0 && (i = this.disabledWhen.some((e => void 0 !== t[e]))), this.isEnabled = e && !i, this.isEnabled
    }
    updateAnimationConstraints() {
      this.start = this.controller.group.timeParser.parse(this, this.jsonProps.start), this.end = this.controller.group.timeParser.parse(this, this.jsonProps.end), this.updateAnimatedValueConstraints()
    }
    updateAnimatedValueConstraints() {
      for (let t in this.animValues) {
        let e = this.jsonProps[t];
        this.animValues[t] = this.controller.group.expressionParser.parseArray(this, e)
      }
    }
  }
  h.DATA_ATTRIBUTE = "data-anim-tween", t.exports = h
}, function(t, e, i) {
  "use strict";
  var s = i(6);
  t.exports = s.requestAnimationFrame("update")
}, function(t, e, i) {
  "use strict";
  var s = i(6);
  t.exports = s.requestAnimationFrame("draw")
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
      var n = s + (r - s) * (t - e) / (i - e);
      return Math.max(s, Math.min(r, n))
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
  var s = i(65),
    r = function() {
      this.events = {}
    },
    n = r.prototype;
  n.requestAnimationFrame = function(t) {
    return this.events[t] || (this.events[t] = new s(t)), this.events[t].requestAnimationFrame
  }, n.cancelAnimationFrame = function(t) {
    return this.events[t] || (this.events[t] = new s(t)), this.events[t].cancelAnimationFrame
  }, t.exports = new r
}, function(t, e, i) {
  "use strict";
  var s, r = i(1).EventEmitterMicro,
    n = i(67),
    a = i(70);

  function o(t) {
    t = t || {}, r.call(this), this.id = a.getNewID(), this.executor = t.executor || n, this._reset(), this._willRun = !1, this._didDestroy = !1
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
  t.exports = {
    SharedInstance: i(68)
  }
}, function(t, e, i) {
  "use strict";
  const s = i(1).EventEmitterMicro,
    r = i(0),
    n = {
      create: i(7),
      update: i(3),
      draw: i(4)
    },
    a = () => {};
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
      const i = new n.create;
      i.on("update", t.onUpdate || a), i.on("draw", t.onDraw || a), i.on("draw", (() => i.run()));
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
  t.exports = function(t) {
    return t.reduce(((t, e) => (t[e] = e, t)), {})
  }
}, function(t, e, i) {
  "use strict";
  const s = i(2),
    r = i(0);
  class n extends s {
    constructor(t, e) {
      super(t, e), this.keyframeType = r.KeyframeTypes.CSSClass, this._triggerType = n.TRIGGER_TYPE_CSS_CLASS, this.cssClass = "", this.friendlyName = "", this.style = {
        on: null,
        off: null
      }, this.toggle = !1, this.isApplied = !1
    }
    parseOptions(t) {
      if (!this.controller._ownerIsElement) throw new TypeError("CSS Keyframes cannot be applied to JS Objects");
      if (t.x = void 0, t.y = void 0, t.scale = void 0, t.scaleX = void 0, t.scaleY = void 0, t.rotation = void 0, t.opacity = void 0, t.hold = void 0, void 0 !== t.toggle && (this.toggle = t.toggle), void 0 !== t.cssClass) this._triggerType = n.TRIGGER_TYPE_CSS_CLASS, this.cssClass = t.cssClass, this.friendlyName = "." + this.cssClass, void 0 === this.controller.tweenProps.targetClasses && (this.controller.tweenProps.targetClasses = {
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
      s.prototype.parseOptions.call(this, t), this.animValues[this.friendlyName] = [0, 0], void 0 === this.controller.tweenProps[this.friendlyName] && (this.controller.tweenProps[this.friendlyName] = new r.TargetValue(0, 1, !1)), this.keyframeType = r.KeyframeTypes.CSSClass
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
      if ("object" != typeof t.on) throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:hidden, otherProperty: value}}");
      if (this.toggle && t.hasOwnProperty("off") && "object" != typeof t.off) throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:hidden, otherProperty: value}}");
      return !0
    }
    reconcile(t, e) {}
    onDOMRead(t, e) {}
    updateAnimatedValueConstraints() {}
  }
  n.TRIGGER_TYPE_CSS_CLASS = 0, n.TRIGGER_TYPE_STYLE_PROPERTY = 1, n.DATA_ATTRIBUTE = "data-anim-classname", t.exports = n
}, function(t, e, i) {
  "use strict";
  var s = 0;

  function r(t, e) {
    this.priority = e, this.data = t, this.insertionOrder = s++
  }
  var n = r.prototype;
  n.compareTo = function(t) {
    return this.priority < t.priority ? -1 : this.priority > t.priority ? 1 : this.insertionOrder < t.insertionOrder ? -1 : 1
  }, n.toString = function() {
    return "QueueItem {priority:" + this.priority + ",\tdata:" + this.data + "\tinsertionOrder:" + this.insertionOrder + "}"
  }, t.exports = r
}, , function(t, e, i) {
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
  const s = i(2),
    r = i(0);
  class n extends s {
    constructor(t, e) {
      super(t, e), this.keyframeType = r.KeyframeTypes.Event, this.isApplied = !1, this.hasDuration = !1, this.isCurrentlyInRange = !1
    }
    parseOptions(t) {
      t.x = void 0, t.y = void 0, t.scale = void 0, t.scaleX = void 0, t.scaleY = void 0, t.rotation = void 0, t.style = void 0, t.cssClass = void 0, t.rotation = void 0, t.opacity = void 0, t.hold = void 0, void 0 === t.end && (t.end = t.start), this.event = t.event, this.animValues[this.event] = [0, 0], void 0 === this.controller.tweenProps[this.event] && (this.controller.tweenProps[this.event] = new r.TargetValue(0, 1, !1)), super.parseOptions(t), this.keyframeType = r.KeyframeTypes.Event
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
    updateAnimationConstraints() {
      super.updateAnimationConstraints(), this.hasDuration = this.start !== this.end
    }
    reset(t) {
      this.isApplied = !1, this.isCurrentlyInRange = !1, super.reset(t)
    }
    onDOMRead(t, e) {}
    reconcile(t, e) {}
    updateAnimatedValueConstraints() {}
  }
  n.DATA_ATTRIBUTE = "data-anim-event", t.exports = n
}, function(t, e, i) {
  "use strict";
  const s = i(1).EventEmitterMicro,
    r = i(5),
    n = i(10),
    a = i(0),
    o = i(17),
    h = i(46),
    l = i(48),
    u = i(49),
    c = {
      create: i(7),
      update: i(3),
      draw: i(4)
    };
  t.exports = class extends s {
    constructor(t, e) {
      super(), this.anim = e, this.element = t, this.name = this.name || t.getAttribute("data-anim-scroll-group"), this.isEnabled = !0, this.position = new a.Progress, this.metrics = new o, this.metrics.add(this.element), this.expressionParser = new h(this), this.timeParser = new l(this), this.boundsMin = 0, this.boundsMax = 0, this.timelineUpdateRequired = !1, this._keyframesDirty = !1, this.viewableRange = this.createViewableRange(), this.defaultEase = a.KeyframeDefaults.ease, this.keyframeControllers = [], this.updateProgress(this.getPosition()), this.onDOMRead = this.onDOMRead.bind(this), this.onDOMWrite = this.onDOMWrite.bind(this), this.gui = null, this.finalizeInit()
    }
    finalizeInit() {
      this.element._animInfo = new a.AnimInfo(this, null, !0), this.setupRAFEmitter()
    }
    destroy() {
      this.expressionParser.destroy(), this.expressionParser = null, this.timeParser.destroy(), this.timeParser = null;
      for (let t = 0, e = this.keyframeControllers.length; t < e; t++) this.keyframeControllers[t].destroy();
      this.keyframeControllers = null, this.position = null, this.viewableRange = null, this.gui && (this.gui.destroy(), this.gui = null), this.metrics.destroy(), this.metrics = null, this.rafEmitter.destroy(), this.rafEmitter = null, this.anim = null, this.element._animInfo && this.element._animInfo.group === this && (this.element._animInfo.group = null, this.element._animInfo = null), this.element = null, this.isEnabled = !1, super.destroy()
    }
    removeKeyframeController(t) {
      if (!this.keyframeControllers.includes(t)) return Promise.resolve();
      let e = t._allKeyframes;
      return t._allKeyframes = [], this.keyframesDirty = !0, new Promise((i => {
        c.draw((() => {
          const s = this.keyframeControllers.indexOf(t); - 1 !== s ? (this.keyframeControllers.splice(s, 1), t.onDOMWrite(), e.forEach((t => t.destroy())), t.destroy(), this.gui && this.gui.create(), i()) : i()
        }), !0)
      }))
    }
    remove() {
      return this.anim.removeGroup(this)
    }
    setupRAFEmitter(t) {
      this.rafEmitter && this.rafEmitter.destroy(), this.rafEmitter = t || new c.create, this.rafEmitter.on("update", this.onDOMRead), this.rafEmitter.on("draw", this.onDOMWrite), this.rafEmitter.once("external", (() => this.reconcile()))
    }
    requestDOMChange() {
      return !!this.isEnabled && this.rafEmitter.run()
    }
    onDOMRead() {
      this.keyframesDirty && this.onKeyframesDirty();
      for (let t = 0, e = this.keyframeControllers.length; t < e; t++) this.keyframeControllers[t].onDOMRead(this.position)
    }
    onDOMWrite() {
      for (let t = 0, e = this.keyframeControllers.length; t < e; t++) this.keyframeControllers[t].onDOMWrite(this.position);
      this.needsUpdate() && this.requestDOMChange()
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
      this.determineActiveKeyframes(), this.keyframesDirty = !1;
      for (let t = 0, e = this.keyframeControllers.length; t < e; t++) this.keyframeControllers[t].updateAnimationConstraints();
      this.updateProgress(this.getPosition()), this.updateBounds(), t || this._onScroll(), this.gui && this.gui.create()
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
      t = t || n(Array.from(document.documentElement.classList));
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
      i - e < a.pageMetrics.windowHeight ? (t.min = this.convertScrollPositionToTValue(e - .5 * a.pageMetrics.windowHeight), t.max = this.convertScrollPositionToTValue(i + .5 * a.pageMetrics.windowHeight)) : (t.min -= .001, t.max += .001), this.boundsMin = t.min, this.boundsMax = t.max, this.timelineUpdateRequired = !0
    }
    createViewableRange() {
      return new a.ViewableRange(this.metrics.get(this.element), a.pageMetrics.windowHeight)
    }
    _onBreakpointChange(t, e) {
      this.keyframesDirty = !0, this.determineActiveKeyframes()
    }
    updateProgress(t) {
      this.hasDuration() ? (this.position.localUnclamped = (t - this.viewableRange.a) / (this.viewableRange.d - this.viewableRange.a), this.position.local = r.clamp(this.position.localUnclamped, this.boundsMin, this.boundsMax)) : this.position.local = this.position.localUnclamped = 0
    }
    performTimelineDispatch() {
      for (let t = 0, e = this.keyframeControllers.length; t < e; t++) this.keyframeControllers[t].updateLocalProgress(this.position.local);
      this.trigger(a.EVENTS.ON_TIMELINE_UPDATE, this.position.local), this.timelineUpdateRequired = !1, this.position.lastPosition !== this.position.local && (this.position.lastPosition <= this.boundsMin && this.position.localUnclamped > this.boundsMin ? this.trigger(a.EVENTS.ON_TIMELINE_START, this) : this.position.lastPosition >= this.boundsMin && this.position.localUnclamped < this.boundsMin ? this.trigger(a.EVENTS.ON_TIMELINE_START + ":reverse", this) : this.position.lastPosition <= this.boundsMax && this.position.localUnclamped >= this.boundsMax ? this.trigger(a.EVENTS.ON_TIMELINE_COMPLETE, this) : this.position.lastPosition >= this.boundsMax && this.position.localUnclamped < this.boundsMax && this.trigger(a.EVENTS.ON_TIMELINE_COMPLETE + ":reverse", this)), null !== this.gui && this.gui.onScrollUpdate(this.position)
    }
    _onScroll(t) {
      if (!this.isEnabled) return !1;
      void 0 === t && (t = this.getPosition()), this.updateProgress(t);
      let e = this.position.lastPosition === this.boundsMin || this.position.lastPosition === this.boundsMax,
        i = this.position.localUnclamped === this.boundsMin || this.position.localUnclamped === this.boundsMax;
      if (!this.timelineUpdateRequired && e && i && this.position.lastPosition === t) return void(this.position.local = this.position.localUnclamped);
      if (this.timelineUpdateRequired || this.position.localUnclamped > this.boundsMin && this.position.localUnclamped < this.boundsMax) return this.performTimelineDispatch(), this.requestDOMChange(), void(this.position.lastPosition = this.position.localUnclamped);
      let s = this.position.lastPosition > this.boundsMin && this.position.lastPosition < this.boundsMax,
        r = this.position.localUnclamped <= this.boundsMin || this.position.localUnclamped >= this.boundsMax;
      if (s && r) return this.performTimelineDispatch(), this.requestDOMChange(), void(this.position.lastPosition = this.position.localUnclamped);
      const n = this.position.lastPosition < this.boundsMin && this.position.localUnclamped > this.boundsMax,
        a = this.position.lastPosition > this.boundsMax && this.position.localUnclamped < this.boundsMax;
      (n || a) && (this.performTimelineDispatch(), this.requestDOMChange(), this.position.lastPosition = this.position.localUnclamped), null !== this.gui && this.gui.onScrollUpdate(this.position)
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
      return a.pageMetrics.scrollY
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
    get keyFrames() {
      return this.viewableRange
    }
  }
}, function(t, e, i) {
  "use strict";
  const s = i(0),
    r = (t, e) => null == t ? e : t;
  class n {
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
      this._metrics = new WeakMap
    }
    destroy() {
      this._metrics = null
    }
    add(t) {
      let e = this._metrics.get(t);
      if (e) return e;
      let i = new n(t);
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
      if (e = e || this._metrics.get(t), !(t instanceof Element)) return e.width = r(t.width, 0), e.height = r(t.height, 0), e.top = r(t.top, 0), e.left = r(t.left, 0), e.right = e.left + e.width, e.bottom = e.top + e.height, e;
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
}, function(t, e) {
  t.exports = function() {
    var t = new Float32Array(16);
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
  }
}, function(t, e, i) {
  "use strict";
  t.exports = {
    majorVersionNumber: "3.x"
  }
}, function(t, e, i) {
  "use strict";
  var s = i(6);
  t.exports = s.requestAnimationFrame("external")
}, function(t, e, i) {
  "use strict";
  t.exports = {
    BaseComponent: i(9)
  }
}, function(t, e, i) {
  "use strict";
  const s = i(9);
  t.exports = class extends s {
    constructor(t) {
      let e;
      super(t), this.video = this.el.querySelector("video") || this.el, this.options = t.data || {}, this.pauseRelativeTo = this.options.pauseRelativeTo || this.el.getAttribute("data-pause-relative-to"), this.isFirefox = document.documentElement.classList.contains("firefox"), this.isIE = document.documentElement.classList.contains("ie"), this.sources = {}, Object.entries(this.video.dataset).filter((([t]) => 0 === t.indexOf("src"))).forEach((([t, e]) => {
        const i = t.replace(/^src/, "").toLowerCase();
        this.sources[i] = e
      })), Object.defineProperty(this, "currentViewport", {
        set: t => {
          e = {
            X: "xlarge",
            L: "large",
            M: "medium",
            S: "small"
          } [t], this.load(e)
        },
        get: () => e
      }), this.currentViewport = t.pageMetrics.breakpoint, this.previousSource = null, this.inLoadArea = !1, this.addDiscreteEvent({
        event: "Video: Load",
        start: this.options.loadAreaStart || "t - 200vh",
        end: this.options.loadAreaEnd || "b + 100vh",
        onEnter: () => {
          this.inLoadArea = !0, this.load()
        },
        onExit: () => {
          this.inLoadArea = !1
        }
      }), this.autoplayKeyframe = this.addDiscreteEvent({
        event: "Video: Pause Offscreen",
        start: "t - (100vh - 100%h) + 70px",
        end: "b - 50h",
        onEnter: () => this.queueVideoPlayback(),
        onExit: () => this.pauseVideoPlayback()
      }), this.video.addEventListener("playing", (() => {
        this.setPlayState("playing")
      })), this.video.addEventListener("ended", (() => {
        this.setPlayState("ended")
      }))
    }
    setPlayState(t) {
      this.el.setAttribute("data-media-play-state", t)
    }
    onBreakpointChange(t) {
      this.currentViewport = t.breakpoint
    }
    load(t) {
      if (!this.inLoadArea) return;
      t = t || this.currentViewport;
      let e = this.sources[t],
        i = window.devicePixelRatio >= 2 ? "_2x" : "",
        s = e.split(".")[1];
      e = e.replace(`.${s}`, `${i}.${s}`), e && e !== this.previousSource && (this.video.autoplay = this.video.readyState >= 3 && !this.video.paused, this.video.src = this.previousSource = e, this.video.load())
    }
    showStartFrame() {
      this.video.currentTime = 0, this.setPlayState("waiting-to-start"), this.pauseVideoPlayback()
    }
    queueVideoPlayback() {
      "function" == typeof this._onCanPlay && this.video.removeEventListener("canplay", this._onCanPlay), this.video.readyState < 3 ? (this._onCanPlay = () => {
        this.video.play(), this.rePaint(), this.video.removeEventListener("canplay", this._onCanPlay)
      }, this.video.addEventListener("canplay", this._onCanPlay), this.isFirefox && (this.video.play(), this.video.style.visibility = "hidden", this.rePaint())) : (this.setPlayState("waiting-to-start"), this.video.play(), this.rePaint())
    }
    rePaint() {
      (this.isFirefox || this.isIE) && (this.video.style.top = 0, setTimeout((() => {
        this.video.style.visibility = "visible"
      }), 50))
    }
    pauseVideoPlayback() {
      this.video.paused || (this.setPlayState("paused"), this.video.pause())
    }
    static IS_SUPPORTED() {
      return !(document.documentElement.classList.contains("ie") || document.documentElement.classList.contains("reduced-motion") || document.documentElement.classList.contains("aow"))
    }
  }
}, function(t, e, i) {
  "use strict";
  var s = i(12);

  function r() {
    this._items = []
  }
  var n = r.prototype;
  n.enqueue = function(t, e) {
    void 0 === e && (e = r.PRIORITY_DEFAULT);
    var i = new s(t, e);
    return this.enqueueQueueItem(i)
  }, n.enqueueQueueItem = function(t) {
    return -1 === this._items.indexOf(t) && this._items.push(t), t
  }, n.dequeue = function() {
    this._heapSort();
    var t = this._items.length - 1,
      e = this._items[0];
    return this._items[0] = this._items[t], this._items.pop(), e
  }, n.dequeueQueueItem = function(t) {
    var e = this._items.indexOf(t);
    return e > -1 && this._items.splice(e, 1), t
  }, n.peek = function() {
    return 0 == this.count() ? null : (this._heapSort(), this._items[0])
  }, n.isEmpty = function() {
    return 0 === this._items.length
  }, n.count = function() {
    return this._items.length
  }, n.toString = function() {
    for (var t = ["Queue total items: " + this.count() + "\n"], e = 0; e < this.count(); ++e) t.push(this._items[e].toString() + "\n");
    return t.join("")
  }, n._heapSort = function() {
    for (var t = this._items.length - 1; t >= 0; t--)
      for (var e = t; e > 0;) {
        0;
        var i = Math.floor((e - 1) / 2);
        if (this._items[e].compareTo(this._items[i]) >= 0) break;
        var s = this._items[e];
        this._items[e] = this._items[i], this._items[i] = s, e = i
      }
  }, r.PRIORITY_LOW = 10, r.PRIORITY_DEFAULT = 5, r.PRIORITY_HIGH = 1, t.exports = r
}, function(t, e, i) {
  "use strict";
  var s = i(91),
    r = function() {
      this.events = {}
    },
    n = r.prototype;
  n.requestAnimationFrame = function(t) {
    return this.events[t] || (this.events[t] = new s(t)), this.events[t].requestAnimationFrame
  }, n.cancelAnimationFrame = function(t) {
    return this.events[t] || (this.events[t] = new s(t)), this.events[t].cancelAnimationFrame
  }, t.exports = new r
}, , , , , , , , , , , , , , , function(t, e, i) {
  t.exports = i(40)
}, function(t, e, i) {
  "use strict";
  const s = i(41),
    r = i(21),
    n = i(78),
    a = i(99);
  ! function() {
    Object.assign(r, n);
    let t = document.querySelector("body");
    new s(t), a.detect()
  }()
}, function(t, e, i) {
  "use strict";
  const s = i(1).EventEmitterMicro,
    r = i(42),
    n = i(43),
    a = i(0),
    o = i(21),
    h = {};
  class l extends s {
    constructor(t) {
      super(), this.el = t, this.anim = n, this.components = [], this.el.getAttribute("data-anim-scroll-group") || this.el.setAttribute("data-anim-scroll-group", "bubble-gum-group"), n.on(a.EVENTS.ON_DOM_GROUPS_CREATED, (t => {
        this.componentsInitialized = !1, this.initComponents(), this.setupEvents()
      })), n.on(a.EVENTS.ON_DOM_KEYFRAMES_CREATED, (() => {
        this.components.forEach((t => t.mounted())), this.trigger(l.EVENTS.DOM_COMPONENTS_MOUNTED)
      })), r.add((() => n.initialize()))
    }
    initComponents() {
      const t = Array.prototype.slice.call(this.el.querySelectorAll("[data-component-list]"));
      this.el.hasAttribute("data-component-list") && t.push(this.el);
      for (let e = 0; e < t.length; e++) {
        let i = t[e],
          s = i.getAttribute("data-component-list").split(" ");
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
      this.onResizeDebounced = this.onResizeDebounced.bind(this), this.onResizeImmediate = this.onResizeImmediate.bind(this), this.onBreakpointChange = this.onBreakpointChange.bind(this), n.on(a.PageEvents.ON_RESIZE_IMMEDIATE, this.onResizeImmediate), n.on(a.PageEvents.ON_RESIZE_DEBOUNCED, this.onResizeDebounced), n.on(a.PageEvents.ON_BREAKPOINT_CHANGE, this.onBreakpointChange)
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
      let n = e.dataset.componentList || "";
      n.includes(i) || (e.dataset.componentList = n.split(" ").concat(i).join(" "));
      let u = new r({
        el: e,
        data: s,
        componentName: t.componentName,
        gum: this,
        pageMetrics: a.pageMetrics
      });
      return this.components.push(u), this.componentsInitialized && u.mounted(), u
    }
    removeComponent(t) {
      const e = this.components.indexOf(t); - 1 !== e && (this.components.splice(e, 1), t.el.dataset.componentList = t.el.dataset.componentList.split(" ").filter((e => e !== t.componentName)).join(" "), t.destroy())
    }
    getComponentOfType(t, e = document.documentElement) {
      const i = "[data-component-list*=" + t + "]",
        s = e.matches(i) ? e : e.querySelector(i);
      return s ? this.components.find((e => e instanceof o[t] && e.el === s)) : null
    }
    getComponentsOfType(t, e = document.documentElement) {
      const i = "[data-component-list*=" + t + "]",
        s = e.matches(i) ? [e] : Array.from(e.querySelectorAll(i));
      return this.components.filter((e => e instanceof o[t] && s.includes(e.el)))
    }
    getComponentsForElement(t) {
      return this.components.filter((e => e.el === t))
    }
    onResizeImmediate() {
      this.components.forEach((t => t.onResizeImmediate(a.pageMetrics)))
    }
    onResizeDebounced() {
      this.components.forEach((t => t.onResizeDebounced(a.pageMetrics)))
    }
    onBreakpointChange() {
      this.components.forEach((t => t.onBreakpointChange(a.pageMetrics)))
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
  let s = !1;
  const r = [];
  t.exports = {
    NUMBER_OF_FRAMES_TO_WAIT: 30,
    add: function(t) {
      if (r.push(t), s) return;
      s = !0;
      let e = document.documentElement.scrollHeight,
        i = 0;
      const n = () => {
        let t = document.documentElement.scrollHeight;
        if (e !== t) i = 0;
        else if (i++, i >= this.NUMBER_OF_FRAMES_TO_WAIT) return void r.forEach((t => t()));
        e = t, requestAnimationFrame(n)
      };
      requestAnimationFrame(n)
    }
  }
}, function(t, e, i) {
  "use strict";
  const s = i(1).EventEmitterMicro,
    r = i(0),
    n = i(2),
    a = i(11),
    o = i(15),
    h = i(16),
    l = i(75),
    u = i(76),
    c = {
      update: i(3),
      cancelUpdate: i(77),
      external: i(20),
      draw: i(4)
    };
  let m = null;
  t.exports = window.AC.SharedInstance.share("AnimSystem", u.major, class extends s {
    constructor() {
      if (super(), m) throw "You cannot create multiple AnimSystems. You probably want to create multiple groups instead. You can have unlimited groups on a page";
      m = this, this.groups = [], this.scrollSystems = [], this.timeSystems = [], this._forceUpdateRAFId = -1, this._initialized = !1, this._model = r, this.version = u.version, this.onScroll = this.onScroll.bind(this), this.onResizedDebounced = this.onResizedDebounced.bind(this), this.onResizeImmediate = this.onResizeImmediate.bind(this)
    }
    initialize() {
      this._initialized || (this._initialized = !0, this.timeSystems = [], this.scrollSystems = [], this.groups = [], this.setupEvents(), this.initializeResizeFilter(), this.initializeModel(), this.createDOMGroups(), this.createDOMKeyframes())
    }
    remove() {
      return Promise.all(this.groups.map((t => t.remove()))).then((() => {
        this.groups = null, this.scrollSystems = null, this.timeSystems = null, window.clearTimeout(r.RESIZE_TIMEOUT), window.removeEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onResizeImmediate), this._events = {}, this._initialized = !1
      }))
    }
    destroy() {
      this.remove()
    }
    createTimeGroup(t) {
      let e = new l(t, this);
      return this.groups.push(e), this.timeSystems.push(e), this.trigger(r.EVENTS.ON_GROUP_CREATED, e), e
    }
    createScrollGroup(t) {
      if (!t) throw "AnimSystem scroll based groups must supply an HTMLElement";
      let e = new h(t, this);
      return this.groups.push(e), this.scrollSystems.push(e), this.trigger(r.EVENTS.ON_GROUP_CREATED, e), e
    }
    removeGroup(t) {
      return Promise.all(t.keyframeControllers.map((e => t.removeKeyframeController(e)))).then((() => new Promise((e => {
        let i = this.groups.indexOf(t); - 1 !== i && this.groups.splice(i, 1), i = this.scrollSystems.indexOf(t), -1 !== i && this.scrollSystems.splice(i, 1), i = this.timeSystems.indexOf(t), -1 !== i && this.timeSystems.splice(i, 1), t.destroy(), e()
      }))))
    }
    createDOMGroups() {
      document.body.setAttribute("data-anim-scroll-group", "body"), document.querySelectorAll("[data-anim-scroll-group]").forEach((t => this.createScrollGroup(t))), document.querySelectorAll("[data-anim-time-group]").forEach((t => this.createTimeGroup(t))), this.trigger(r.EVENTS.ON_DOM_GROUPS_CREATED, this.groups)
    }
    createDOMKeyframes() {
      let t = [];
      [n.DATA_ATTRIBUTE, a.DATA_ATTRIBUTE, o.DATA_ATTRIBUTE].forEach((function(e) {
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
      c.update((() => {
        this.groups.forEach((t => t.onKeyframesDirty({
          silent: !0
        }))), this.groups.forEach((t => t.trigger(r.EVENTS.ON_DOM_KEYFRAMES_CREATED, t))), this.trigger(r.EVENTS.ON_DOM_KEYFRAMES_CREATED, this), this.groups.forEach((t => {
          t.forceUpdate({
            waitForNextUpdate: !1,
            silent: !0
          }), t.reconcile()
        })), this.onScroll()
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
      for (let t = 0, e = this.scrollSystems.length; t < e; t++) this.scrollSystems[t]._onScroll();
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
      c.update((() => {
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
      -1 !== this._forceUpdateRAFId && c.cancelUpdate(this._forceUpdateRAFId);
      let i = () => {
        for (let t = 0, i = this.groups.length; t < i; t++) {
          this.groups[t].forceUpdate({
            waitForNextUpdate: !1,
            silent: e
          })
        }
        return -1
      };
      this._forceUpdateRAFId = t ? c.update(i, !0) : i()
    }
    addKeyframe(t, e) {
      let i = this.getGroupForTarget(t);
      return i = i || this.getGroupForTarget(document.body), i.addKeyframe(t, e)
    }
    getGroupForTarget(t) {
      if (t._animInfo && t._animInfo.group) return t._animInfo.group;
      let e = t;
      for (; e;) {
        if (e._animInfo && e._animInfo.isGroup) return e._animInfo.group;
        e = e.parentElement
      }
    }
    getControllerForTarget(t) {
      return t._animInfo && t._animInfo.controller ? t._animInfo.controller : null
    }
  })
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
  class n {
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
      var e, i, n, a, o, h;
      for (n = t, h = 0; h < 5; h++) {
        if (a = this.sampleCurveX(n) - t, r(a) < s) return n;
        if (o = this.sampleCurveDerivativeX(n), r(o) < s) break;
        n -= a / o
      }
      if ((n = t) < (e = 0)) return e;
      if (n > (i = 1)) return i;
      for (; e < i;) {
        if (a = this.sampleCurveX(n), r(a - t) < s) return n;
        t > a ? e = n : i = n, n = .5 * (i - e) + e
      }
      return n
    }
    solve(t) {
      return this.sampleCurveY(this.solveCurveX(t))
    }
  }
  const a = /\d*\.?\d+/g;
  n.fromCSSString = function(t) {
    let e = t.match(a);
    if (4 !== e.length) throw `UnitBezier could not convert ${t} to cubic-bezier`;
    let i = e.map(Number),
      s = new n(i[0], i[1], i[2], i[3]);
    return s.solve.bind(s)
  }, t.exports = n
}, function(t, e, i) {
  "use strict";
  const s = i(47),
    r = new(i(17));
  class n {
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
      if ("string" != typeof e) throw "Expression must be a string, received " + typeof e;
      return this.data.target = t.controller.element, this.data.anchors = t.anchors, this.data.keyframe = t.keyframe, n._parse(e, this.data)
    }
    static _parse(t, e) {
      return s.Parse(t).execute(e)
    }
    destroy() {
      this.group = null
    }
    static parse(t, e) {
      return (e = e || {}) && (e.target && r.add(e.target), e.anchors && e.anchors.forEach((t => r.add(t)))), e.metrics = r, n._parse(t, e)
    }
  }
  n.programs = s.programs, window.ExpressionParser = n, t.exports = n
}, function(t, e, i) {
  "use strict";
  const s = i(0),
    r = i(5),
    n = {},
    a = {
      smoothstep: (t, e, i) => (i = a.clamp((i - t) / (e - t), 0, 1)) * i * (3 - 2 * i),
      deg: t => 180 * t / Math.PI,
      rad: t => t * Math.PI / 180,
      random: (t, e) => Math.random() * (e - t) + t,
      atan: Math.atan2
    };
  Object.getOwnPropertyNames(Math).forEach((t => a[t] ? null : a[t.toLowerCase()] = Math[t])), Object.getOwnPropertyNames(r).forEach((t => a[t] ? null : a[t.toLowerCase()] = r[t]));
  let o = null;
  const h = "a",
    l = "ALPHA",
    u = "(",
    c = ")",
    m = "PLUS",
    d = "MINUS",
    p = "MUL",
    f = "DIV",
    _ = "INTEGER_CONST",
    b = "FLOAT_CONST",
    g = ",",
    v = "EOF",
    y = {
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
      MATH_FUNCTION: new RegExp(`\\b(${Object.keys(a).join("|")})\\b`, "i")
    },
    E = {
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
  class w {
    constructor(t, e) {
      this.type = t, this.value = e
    }
  }
  w.ONE = new w("100", 100), w.EOF = new w(v, null);
  class x {
    constructor(t) {
      this.type = t
    }
  }
  class A extends x {
    constructor(t, e) {
      super("UnaryOp"), this.token = this.op = t, this.expr = e
    }
  }
  class I extends x {
    constructor(t, e, i) {
      super("BinOp"), this.left = t, this.op = e, this.right = i
    }
  }
  class S extends x {
    constructor(t, e) {
      if (super("MathOp"), this.op = t, this.list = e, E[t.value] && e.length !== E[t.value]) throw new Error(`Incorrect number of arguments for '${t.value}'. Received ${e.length}, expected ${E[t.value]}`)
    }
  }
  class F extends x {
    constructor(t) {
      super("Num"), this.token = t, this.value = t.value
    }
  }
  class O extends x {
    constructor(t, e, i) {
      super("RefValue"), this.num = t, this.ref = e, this.unit = i
    }
  }
  class T extends x {
    constructor(t, e) {
      super("CSSValue"), this.ref = t, this.propertyName = e
    }
  }
  class P extends x {
    constructor(t, e) {
      super("PropValue"), this.ref = t, this.propertyName = e
    }
  }
  class C {
    constructor(t) {
      let e;
      for (this.text = t, this.pos = 0, this.char = this.text[this.pos], this.tokens = [];
        (e = this.getNextToken()) && e !== w.EOF;) this.tokens.push(e);
      this.tokens.push(e)
    }
    advance() {
      this.char = this.text[++this.pos]
    }
    skipWhiteSpace() {
      for (; null != this.char && y.WHITE_SPACE.test(this.char);) this.advance()
    }
    name() {
      let t = "";
      for (; null != this.char && y.ALPHA.test(this.char);) t += this.char, this.advance();
      return new w(l, t)
    }
    number() {
      let t = "";
      for (; null != this.char && y.DIGIT.test(this.char);) t += this.char, this.advance();
      if (null != this.char && "." === this.char) {
        for (t += this.char, this.advance(); null != this.char && y.DIGIT.test(this.char);) t += this.char, this.advance();
        return new w(b, parseFloat(t))
      }
      return new w(_, parseInt(t))
    }
    getNextToken() {
      for (; null != this.char;)
        if (y.WHITE_SPACE.test(this.char)) this.skipWhiteSpace();
        else {
          if (y.DIGIT.test(this.char)) return this.number();
          if ("," === this.char) return this.advance(), new w(g, ",");
          if (y.OPERATOR.test(this.char)) {
            let t = "",
              e = this.char;
            switch (e) {
              case "+":
                t = m;
                break;
              case "-":
                t = d;
                break;
              case "*":
                t = p;
                break;
              case "/":
                t = f
            }
            return this.advance(), new w(t, e)
          }
          if (y.PAREN.test(this.char)) {
            let t = "",
              e = this.char;
            switch (e) {
              case "(":
                t = u;
                break;
              case ")":
                t = c
            }
            return this.advance(), new w(t, e)
          }
          if (y.ALPHA.test(this.char)) return this.name();
          this.error("Unexpected character " + this.char)
        } return w.EOF
    }
  }
  class R {
    constructor(t) {
      this.lexer = t, this.pos = 0
    }
    get currentToken() {
      return this.lexer.tokens[this.pos]
    }
    error(t, e = "") {
      let i = this.lexer.text.slice(this.pos - 3, this.pos + 3),
        s = new Error(`${t} in "${this.lexer.text}" near "${i}". ${e} `);
      throw console.error(s.message, o ? o.keyframe || o.target : ""), s
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
      for (; this.currentToken.type === m || this.currentToken.type === d;) {
        const e = this.currentToken;
        switch (e.value) {
          case "+":
            this.consume(m);
            break;
          case "-":
            this.consume(d)
        }
        t = new I(t, e, this.term())
      }
      return t
    }
    term() {
      let t = this.factor();
      for (; this.currentToken.type === p || this.currentToken.type === f;) {
        const e = this.currentToken;
        switch (e.value) {
          case "*":
            this.consume(p);
            break;
          case "/":
            this.consume(f)
        }
        t = new I(t, e, this.factor())
      }
      return t
    }
    factor() {
      if (this.currentToken.type === m) return new A(this.consume(m), this.factor());
      if (this.currentToken.type === d) return new A(this.consume(d), this.factor());
      if (this.currentToken.type === _ || this.currentToken.type === b) {
        let t = new F(this.currentToken);
        if (this.pos += 1, y.OPERATOR.test(this.currentToken.value) || this.currentToken.type === c || this.currentToken.type === g || this.currentToken.type === v) return t;
        if (this.currentToken.type === l && this.currentToken.value === h) return this.consume(l), new O(t, this.anchorIndex(), this.unit(y.ANY_UNIT));
        if (this.currentToken.type === l) return "%a" === this.currentToken.value && this.error("%a is invalid, try removing the %"), new O(t, null, this.unit());
        this.error("Expected a scaling unit type", "Such as 'h' / 'w'")
      } else {
        if (y.OBJECT_UNIT.test(this.currentToken.value)) return new O(new F(w.ONE), null, this.unit());
        if (this.currentToken.value === h) {
          this.consume(l);
          const t = this.anchorIndex();
          if (y.OBJECT_UNIT.test(this.currentToken.value)) return new O(new F(w.ONE), t, this.unit())
        } else if (this.currentToken.type === l) {
          if ("css" === this.currentToken.value || "prop" === this.currentToken.value) {
            const t = "css" === this.currentToken.value ? T : P;
            this.consume(l), this.consume(u);
            const e = this.propertyName();
            let i = null;
            return this.currentToken.type === g && (this.consume(g), this.consume(l), i = this.anchorIndex()), this.consume(c), new t(i, e)
          }
          if (y.MATH_FUNCTION.test(this.currentToken.value)) {
            const t = this.currentToken.value.toLowerCase();
            if ("number" == typeof a[t]) return this.consume(l), new F(new w(l, a[t]));
            const e = w[t] || new w(t, t),
              i = [];
            this.consume(l), this.consume(u);
            let s = null;
            do {
              this.currentToken.value === g && this.consume(g), s = this.expr(), i.push(s)
            } while (this.currentToken.value === g);
            return this.consume(c), new S(e, i)
          }
        } else if (this.currentToken.type === u) {
          this.consume(u);
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
    unit(t = y.ANY_UNIT) {
      const e = this.currentToken;
      if (e.type === l && t.test(e.value)) return this.consume(l), new w(l, e.value = e.value.replace(/%(h|w)/, "$1").replace("%", "h"));
      this.error("Expected unit type")
    }
    anchorIndex() {
      const t = this.currentToken;
      if (t.type === _) return this.consume(_), new F(t);
      this.error("Invalid anchor reference", ". Should be something like a0, a1, a2")
    }
    parse() {
      const t = this.expr();
      return this.currentToken !== w.EOF && this.error(`Unexpected token ${this.currentToken.value}`), t
    }
  }
  class M {
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
        case m:
          return this.visit(t.left) + this.visit(t.right);
        case d:
          return this.visit(t.left) - this.visit(t.right);
        case p:
          return this.visit(t.left) * this.visit(t.right);
        case f:
          return this.visit(t.left) / this.visit(t.right)
      }
    }
    RefValue(t) {
      let e = this.unwrapReference(t),
        i = t.unit.value,
        r = t.num.value;
      const n = o.metrics.get(e);
      switch (i) {
        case "h":
          return .01 * r * n.height;
        case "t":
          return .01 * r * n.top;
        case "vh":
          return .01 * r * s.pageMetrics.windowHeight;
        case "vw":
          return .01 * r * s.pageMetrics.windowWidth;
        case "px":
          return r;
        case "w":
          return .01 * r * n.width;
        case "b":
          return .01 * r * n.bottom;
        case "l":
          return .01 * r * n.left;
        case "r":
          return .01 * r * n.right
      }
    }
    PropValue(t) {
      return (null === t.ref ? o.target : o.anchors[t.ref.value])[t.propertyName]
    }
    CSSValue(t) {
      let e = this.unwrapReference(t);
      const i = getComputedStyle(e).getPropertyValue(t.propertyName);
      return "" === i ? 0 : M.Parse(i).execute(o)
    }
    Num(t) {
      return t.value
    }
    UnaryOp(t) {
      return t.op.type === m ? +this.visit(t.expr) : t.op.type === d ? -this.visit(t.expr) : void 0
    }
    MathOp(t) {
      let e = t.list.map((t => this.visit(t)));
      return a[t.op.value].apply(null, e)
    }
    unwrapReference(t) {
      return null === t.ref ? o.target : (t.ref.value >= o.anchors.length && console.error(`Not enough anchors supplied for expression ${this.parser.lexer.text}`, o.target), o.anchors[t.ref.value])
    }
    execute(t) {
      return o = t, this.visit(this.root)
    }
    static Parse(t) {
      return n[t] || (n[t] = new M(new R(new C(t))))
    }
  }
  M.programs = n, t.exports = M
}, function(t, e, i) {
  "use strict";
  t.exports = class {
    constructor(t) {
      this.group = t
    }
    parse(t, e) {
      if ("number" == typeof e) return e;
      let i = this.group.expressionParser.parseExpression(t, e);
      return this.group.convertScrollPositionToTValue(i)
    }
    destroy() {
      this.group = null
    }
  }
}, function(t, e, i) {
  "use strict";
  const s = i(0),
    r = (i(2), i(11)),
    n = i(50),
    a = i(10),
    o = i(51),
    h = i(1).EventEmitterMicro,
    l = i(52),
    u = {
      update: i(3),
      external: i(20),
      draw: i(4)
    },
    c = Math.PI / 180,
    m = {
      create: i(18),
      rotateX: i(71),
      rotateY: i(72),
      rotateZ: i(73),
      scale: i(74)
    };
  t.exports = class extends h {
    constructor(t, e) {
      super(), this.uuid = o(), this.group = t, this.element = e, this._ownerIsElement = this.element instanceof Element, this._ownerIsElement ? this.friendlyName = this.element.tagName + "." + Array.from(this.element.classList).join(".") : this.friendlyName = this.element.friendlyName || this.uuid, this.element._animInfo = this.element._animInfo || new s.AnimInfo(t, this), this.element._animInfo.controller = this, this.element._animInfo.group = this.group, this.element._animInfo.controllers.push(this), this.tweenProps = new s.TweenProps, this.eventObject = new s.EventObject(this), this.needsStyleUpdate = !1, this.needsClassUpdate = !1, this.elementMetrics = this.group.metrics.add(this.element), this.attributes = [], this.keyframes = {}, this._allKeyframes = [], this._activeKeyframes = [], this.keyframesRequiringDispatch = [], this.updateCachedValuesFromElement(), this.boundsMin = 0, this.boundsMax = 0, this.mat2d = new Float32Array(6), this.mat4 = m.create(), this.needsWrite = !0, this.onDOMWriteImp = this._ownerIsElement ? this.onDOMWriteForElement : this.onDOMWriteForObject
    }
    destroy() {
      if (this.element._animInfo) {
        this.element._animInfo.controller === this && (this.element._animInfo.controller = null);
        let t = this.element._animInfo.controllers.indexOf(this); - 1 !== t && this.element._animInfo.controllers.splice(t, 1), 0 === this.element._animInfo.controllers.length ? this.element._animInfo = null : (this.element._animInfo.controller = this.element._animInfo.controllers[this.element._animInfo.controllers.length - 1], this.element._animInfo.group = this.element._animInfo.controller.group)
      }
      this.eventObject.controller = null, this.eventObject.element = null, this.eventObject.keyframe = null, this.eventObject.tweenProps = null, this.eventObject = null, this.elementMetrics = null, this.group = null, this.keyframesRequiringDispatch = null;
      for (let t = 0; t < this._allKeyframes.length; t++) this._allKeyframes[t].destroy();
      this._allKeyframes = null, this._activeKeyframes = null, this.attributes = null, this.keyframes = null, this.element = null, this.tweenProps = null, super.destroy()
    }
    remove() {
      return this.group.removeKeyframeController(this)
    }
    updateCachedValuesFromElement() {
      if (!this._ownerIsElement) return;
      const t = getComputedStyle(this.element);
      let e = l(this.element, !0),
        i = s.KeyframeDefaults.epsilon,
        r = !1;
      this.tweenProps.x = new s.TargetValue(e.translation[0], i, r), this.tweenProps.y = new s.TargetValue(e.translation[1], i, r), this.tweenProps.z = new s.TargetValue(e.translation[2], i, r), this.tweenProps.rotation = new s.TargetValue(e.eulerRotation[2], i, r), this.tweenProps.rotationX = new s.TargetValue(e.eulerRotation[0], i, r), this.tweenProps.rotationY = new s.TargetValue(e.eulerRotation[1], i, r), this.tweenProps.rotationZ = new s.TargetValue(e.eulerRotation[2], i, r), this.tweenProps.scale = new s.TargetValue(e.scale[0], i, r), this.tweenProps.scaleX = new s.TargetValue(e.scale[0], i, r), this.tweenProps.scaleY = new s.TargetValue(e.scale[1], i, r), this.tweenProps.opacity = new s.TargetValue(parseFloat(t.opacity), i, r)
    }
    addKeyframe(t) {
      let e = n(t);
      if (!e) throw new Error("AnimSystem Cannot create keyframe for from options `" + t + "`");
      let i = new e(this, t);
      return i.parseOptions(t), i.id = this._allKeyframes.length, this._allKeyframes.push(i), i
    }
    needsUpdate() {
      for (let t = 0, e = this.attributes.length; t < e; t++) {
        let e = this.attributes[t],
          i = this.tweenProps[e];
        if (Math.abs(i.current - i.target) > i.epsilon) return !0
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
      t = t || a(Array.from(document.documentElement.classList));
      let e = this._activeKeyframes,
        i = this.attributes;
      this._activeKeyframes = [], this.attributes = [], this.keyframes = {};
      for (let e = 0; e < this._allKeyframes.length; e++) {
        let i = this._allKeyframes[e];
        if (i.setEnabled(t)) {
          this._activeKeyframes.push(i);
          for (let t in i.animValues) this.keyframes[t] = this.keyframes[t] || [], this.keyframes[t].push(i), -1 === this.attributes.indexOf(t) && (this.attributes.push(t), this.tweenProps[t].isActive = !0)
        }
      }
      let s = e.filter((t => -1 === this._activeKeyframes.indexOf(t)));
      if (0 === s.length) return;
      let n = i.filter((t => -1 === this.attributes.indexOf(t)));
      if (0 !== n.length)
        if (this.needsWrite = !0, this._ownerIsElement) u.external((() => {
          let t = ["x", "y", "z", "scale", "scaleX", "scaleY", "rotation", "rotationX", "rotationY", "rotationZ"];
          n.filter((e => -1 !== t.indexOf(e))).length > 0 && this.element.style.removeProperty("transform");
          for (let t = 0, e = n.length; t < e; ++t) {
            let e = n[t],
              i = this.tweenProps[e];
            i.current = i.target = i.initialValue, i.isActive = !1, "opacity" === e && this.element.style.removeProperty("opacity")
          }
          for (let t = 0, e = s.length; t < e; ++t) {
            let e = s[t];
            e instanceof r && e._unapply()
          }
        }), !0);
        else
          for (let t = 0, e = n.length; t < e; ++t) {
            let e = this.tweenProps[n[t]];
            e.current = e.target = e.initialValue, e.isActive = !1
          }
    }
    onDOMRead(t) {
      for (let e = 0, i = this.attributes.length; e < i; e++) {
        let i = this.attributes[e];
        this.tweenProps[i].previousValue = this.tweenProps[i].current;
        let s = this.getNearestKeyframeForAttribute(i, t.local);
        s && s.onDOMRead(i), this.tweenProps[i].previousValue !== this.tweenProps[i].current && (this.needsWrite = !0)
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
    onDOMWriteForElement() {
      let t = this.tweenProps;
      if (t.z.isActive || t.rotationX.isActive || t.rotationY.isActive) {
        const e = this.mat4;
        if (e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, t.x.isActive || t.y.isActive || t.z.isActive) {
          const i = t.x.current,
            s = t.y.current,
            r = t.z.current;
          e[12] = e[0] * i + e[4] * s + e[8] * r + e[12], e[13] = e[1] * i + e[5] * s + e[9] * r + e[13], e[14] = e[2] * i + e[6] * s + e[10] * r + e[14], e[15] = e[3] * i + e[7] * s + e[11] * r + e[15]
        }
        if (t.rotation.isActive || t.rotationZ.isActive) {
          const i = (t.rotation.current || t.rotationZ.current) * c;
          m.rotateZ(e, e, i)
        }
        if (t.rotationX.isActive) {
          const i = t.rotationX.current * c;
          m.rotateX(e, e, i)
        }
        if (t.rotationY.isActive) {
          const i = t.rotationY.current * c;
          m.rotateY(e, e, i)
        }(t.scale.isActive || t.scaleX.isActive || t.scaleY.isActive) && m.scale(e, e, [t.scale.current, t.scale.current, 1]), this.element.style.transform = "matrix3d(" + e[0] + "," + e[1] + "," + e[2] + "," + e[3] + "," + e[4] + "," + e[5] + "," + e[6] + "," + e[7] + "," + e[8] + "," + e[9] + "," + e[10] + "," + e[11] + "," + e[12] + "," + e[13] + "," + e[14] + "," + e[15] + ")"
      } else if (t.x.isActive || t.y.isActive || t.rotation.isActive || t.rotationZ.isActive || t.scale.isActive || t.scaleX.isActive || t.scaleY.isActive) {
        const e = this.mat2d;
        if (e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, t.x.isActive || t.y.isActive) {
          const i = t.x.current,
            s = t.y.current,
            r = e[0],
            n = e[1],
            a = e[2],
            o = e[3],
            h = e[4],
            l = e[5];
          e[0] = r, e[1] = n, e[2] = a, e[3] = o, e[4] = r * i + a * s + h, e[5] = n * i + o * s + l
        }
        if (t.rotation.isActive || t.rotationZ.isActive) {
          const i = (t.rotation.current || t.rotationZ.current) * c,
            s = e[0],
            r = e[1],
            n = e[2],
            a = e[3],
            o = e[4],
            h = e[5],
            l = Math.sin(i),
            u = Math.cos(i);
          e[0] = s * u + n * l, e[1] = r * u + a * l, e[2] = s * -l + n * u, e[3] = r * -l + a * u, e[4] = o, e[5] = h
        }
        t.scale.isActive ? (e[0] = e[0] * t.scale.current, e[1] = e[1] * t.scale.current, e[2] = e[2] * t.scale.current, e[3] = e[3] * t.scale.current, e[4] = e[4], e[5] = e[5]) : (t.scaleX.isActive || t.scaleY.isActive) && (e[0] = e[0] * t.scaleX.current, e[1] = e[1] * t.scaleX.current, e[2] = e[2] * t.scaleY.current, e[3] = e[3] * t.scaleY.current, e[4] = e[4], e[5] = e[5]), this.element.style.transform = "matrix(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ")"
      }
      if (t.opacity.isActive && (this.element.style.opacity = t.opacity.current), this.needsStyleUpdate) {
        for (let t in this.tweenProps.targetStyles) null !== this.tweenProps.targetStyles[t] && (this.element.style[t] = this.tweenProps.targetStyles[t]), this.tweenProps.targetStyles[t] = null;
        this.needsStyleUpdate = !1
      }
      this.needsClassUpdate && (this.tweenProps.targetClasses.add.length > 0 && this.element.classList.add.apply(this.element.classList, this.tweenProps.targetClasses.add), this.tweenProps.targetClasses.remove.length > 0 && this.element.classList.remove.apply(this.element.classList, this.tweenProps.targetClasses.remove), this.tweenProps.targetClasses.add.length = 0, this.tweenProps.targetClasses.remove.length = 0, this.needsClassUpdate = !1)
    }
    handleEventDispatch() {
      if (0 !== this.keyframesRequiringDispatch.length) {
        for (let t = 0, e = this.keyframesRequiringDispatch.length; t < e; t++) {
          let e = this.keyframesRequiringDispatch[t];
          e.needsEventDispatch = !1, this.eventObject.keyframe = e, this.eventObject.pageMetrics = s.pageMetrics, this.eventObject.event = e.event, this.trigger(e.event, this.eventObject)
        }
        this.keyframesRequiringDispatch.length = 0
      }
      this.eventObject.keyframe = null, this.eventObject.event = "draw", this.trigger("draw", this.eventObject)
    }
    updateAnimationConstraints() {
      for (let t = 0, e = this._activeKeyframes.length; t < e; t++) this._activeKeyframes[t].updateAnimationConstraints();
      this.attributes.forEach((t => {
        1 !== this.keyframes[t].length && this.keyframes[t].sort(s.KeyframeComparison)
      })), this.updateDeferredPropertyValues()
    }
    refreshMetrics() {
      let t = new Set([this.element]);
      this._allKeyframes.forEach((e => e.anchors.forEach((e => t.add(e))))), this.group.metrics.refreshCollection(t), this.group.keyframesDirty = !0
    }
    updateDeferredPropertyValues() {
      for (let t = 0, e = this.attributes.length; t < e; t++) {
        let e = this.attributes[t],
          i = this.keyframes[e];
        if (!(i[0].keyframeType > s.KeyframeTypes.InterpolationForward))
          for (let t = 0, s = i.length; t < s; t++) {
            let r = i[t];
            if (null === r.jsonProps[e][0]) {
              if (0 === t) {
                r.animValues[e][0] = this.tweenProps[e].initialValue;
                continue
              }
              r.animValues[e][0] = i[t - 1].animValues[e][1]
            }
            if (null === r.jsonProps[e][1]) {
              if (t === s - 1) throw new RangeError(`AnimSystem - last keyframe cannot defer it's end value! ${e}:[${r.jsonProps[e][0]},null]`);
              r.animValues[e][1] = i[t + 1].animValues[e][0]
            }
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
      e = void 0 !== e ? e : this.group.lastPosition;
      let i = null,
        s = Number.POSITIVE_INFINITY,
        r = this.keyframes[t];
      if (void 0 === r) return null;
      let n = r.length;
      if (0 === n) return null;
      if (1 === n) return r[0];
      for (let t = 0; t < n; t++) {
        let n = r[t];
        if (n.isInRange(e)) {
          i = n;
          break
        }
        let a = Math.min(Math.abs(e - n.start), Math.abs(e - n.end));
        a < s && (s = a, i = n)
      }
      return i
    }
    getAllKeyframesForAttribute(t) {
      return this.keyframes[t]
    }
    updateKeyframe(t, e) {
      t.parseOptions(e), t.updateAnimationConstraints(), this.group.keyframesDirty = !0, u.update((() => {
        this.trigger(s.EVENTS.ON_KEYFRAME_UPDATED, t), this.group.trigger(s.EVENTS.ON_KEYFRAME_UPDATED, t)
      }), !0)
    }
    removeKeyframe(t) {
      let e = this._allKeyframes.indexOf(t);
      return -1 === e ? Promise.resolve(null) : (this._allKeyframes.splice(e, 1), this.group.keyframesDirty = !0, new Promise((e => {
        this.group.rafEmitter.executor.eventEmitter.once("before:draw", (() => e(t)))
      })))
    }
    updateAnimation(t, e) {
      return this.group.gui && console.warn("KeyframeController.updateAnimation(keyframe,props) has been deprecated. Please use updateKeyframe(keyframe,props)"), this.updateKeyframe(t, e)
    }
  }
}, function(t, e, i) {
  "use strict";
  const s = i(0),
    r = i(2),
    n = i(15),
    a = i(11),
    o = function(t) {
      for (let e in t) {
        let i = t[e];
        if (-1 === s.KeyframeJSONReservedWords.indexOf(e) && Array.isArray(i)) return !0
      }
      return !1
    };
  t.exports = t => {
    if (void 0 !== t.cssClass || void 0 !== t.style) {
      if (o(t)) throw "CSS Keyframes cannot tween values, please use multiple keyframes instead";
      return a
    }
    if (o(t)) return r;
    if (t.event) return n;
    throw delete t.anchors, `Could not determine tween type based on ${JSON.stringify(t)}`
  }
}, function(t, e, i) {
  "use strict";
  t.exports = function() {
    let t = "";
    for (let e = 0; e < 8; e++) {
      let i = 16 * Math.random() | 0;
      8 !== e && 12 !== e && 16 !== e && 20 !== e || (t += "-"), t += (12 === e ? 4 : 16 === e ? 3 & i | 8 : i).toString(16)
    }
    return t
  }
}, function(t, e, i) {
  "use strict";
  var s = {
      create: i(18),
      invert: i(53),
      clone: i(54),
      transpose: i(55)
    },
    r = {
      create: i(56),
      dot: i(57),
      normalize: i(58),
      length: i(59),
      cross: i(60),
      fromValues: i(61)
    },
    n = {
      create: i(62),
      transformMat4: i(63),
      fromValues: i(64)
    },
    a = (Math.PI, 180 / Math.PI);
  let o = function(t, e, i, s) {
      var n = r.create();
      return n[0] = i * t[0] + s * e[0], n[1] = i * t[1] + s * e[1], n[2] = i * t[2] + s * e[2], n
    },
    h = function(t) {
      var e, i, s, n = t[3] * t[3],
        a = t[0] * t[0],
        o = t[1] * t[1],
        h = t[2] * t[2],
        l = a + o + h + n,
        u = t[0] * t[1] + t[2] * t[3];
      return u > .499 * l ? (i = 2 * Math.atan2(t[0], t[3]), s = Math.PI / 2, e = 0, r.fromValues(e, i, s)) : u < -.499 * l ? (i = -2 * Math.atan2(t[0], t[3]), s = -Math.PI / 2, e = 0, r.fromValues(e, i, s)) : (i = Math.atan2(2 * t[1] * t[3] - 2 * t[0] * t[2], a - o - h + n), s = Math.asin(2 * u / l), e = Math.atan2(2 * t[0] * t[3] - 2 * t[1] * t[2], -a + o - h + n), r.fromValues(e, i, s))
    };
  const l = function(t) {
    return Math.abs(t) < 1e-4
  };
  t.exports = function(t, e) {
    return function(t, e) {
      e = e || !1;
      for (var i = s.clone(t), u = r.create(), c = r.create(), m = r.create(), d = n.create(), p = n.create(), f = (r.create(), 0); f < 16; f++) i[f] /= i[15];
      var _ = s.clone(i);
      _[3] = 0, _[7] = 0, _[11] = 0, _[15] = 1, i[3], i[7], i[11];
      var b = i[12],
        g = i[13],
        v = i[14],
        y = (i[15], n.create());
      if (l(i[3]) && l(i[7]) && l(i[11])) d = n.fromValues(0, 0, 0, 1);
      else {
        y[0] = i[3], y[1] = i[7], y[2] = i[11], y[3] = i[15];
        var E = s.invert(s.create(), _),
          w = s.transpose(s.create(), E);
        d = n.transformMat4(d, y, w)
      }
      u[0] = b, u[1] = g, u[2] = v;
      var x = [r.create(), r.create(), r.create()];
      x[0][0] = i[0], x[0][1] = i[1], x[0][2] = i[2], x[1][0] = i[4], x[1][1] = i[5], x[1][2] = i[6], x[2][0] = i[8], x[2][1] = i[9], x[2][2] = i[10], c[0] = r.length(x[0]), r.normalize(x[0], x[0]), m[0] = r.dot(x[0], x[1]), x[1] = o(x[1], x[0], 1, -m[0]), c[1] = r.length(x[1]), r.normalize(x[1], x[1]), m[0] /= c[1], m[1] = r.dot(x[0], x[2]), x[2] = o(x[2], x[0], 1, -m[1]), m[2] = r.dot(x[1], x[2]), x[2] = o(x[2], x[1], 1, -m[2]), c[2] = r.length(x[2]), r.normalize(x[2], x[2]), m[1] /= c[2], m[2] /= c[2];
      var A = r.cross(r.create(), x[1], x[2]);
      if (r.dot(x[0], A) < 0)
        for (f = 0; f < 3; f++) c[f] *= -1, x[f][0] *= -1, x[f][1] *= -1, x[f][2] *= -1;
      p[0] = .5 * Math.sqrt(Math.max(1 + x[0][0] - x[1][1] - x[2][2], 0)), p[1] = .5 * Math.sqrt(Math.max(1 - x[0][0] + x[1][1] - x[2][2], 0)), p[2] = .5 * Math.sqrt(Math.max(1 - x[0][0] - x[1][1] + x[2][2], 0)), p[3] = .5 * Math.sqrt(Math.max(1 + x[0][0] + x[1][1] + x[2][2], 0)), x[2][1] > x[1][2] && (p[0] = -p[0]), x[0][2] > x[2][0] && (p[1] = -p[1]), x[1][0] > x[0][1] && (p[2] = -p[2]);
      var I = n.fromValues(p[0], p[1], p[2], 2 * Math.acos(p[3])),
        S = h(p);
      return e && (m[0] = Math.round(m[0] * a * 100) / 100, m[1] = Math.round(m[1] * a * 100) / 100, m[2] = Math.round(m[2] * a * 100) / 100, S[0] = Math.round(S[0] * a * 100) / 100, S[1] = Math.round(S[1] * a * 100) / 100, S[2] = Math.round(S[2] * a * 100) / 100, I[3] = Math.round(I[3] * a * 100) / 100), {
        translation: u,
        scale: c,
        skew: m,
        perspective: d,
        quaternion: p,
        eulerRotation: S,
        axisAngle: I
      }
    }(function(t) {
      var e = String(getComputedStyle(t).transform).trim(),
        i = s.create();
      if ("none" === e || "" === e) return i;
      var r, n, a = e.slice(0, e.indexOf("("));
      if ("matrix3d" === a)
        for (r = e.slice(9, -1).split(","), n = 0; n < r.length; n++) i[n] = parseFloat(r[n]);
      else {
        if ("matrix" !== a) throw new TypeError("Invalid Matrix Value");
        for (n = (r = e.slice(7, -1).split(",")).length; n--;) r[n] = parseFloat(r[n]);
        i[0] = r[0], i[1] = r[1], i[12] = r[4], i[4] = r[2], i[5] = r[3], i[13] = r[5]
      }
      return i
    }(t), e)
  }
}, function(t, e) {
  t.exports = function(t, e) {
    var i = e[0],
      s = e[1],
      r = e[2],
      n = e[3],
      a = e[4],
      o = e[5],
      h = e[6],
      l = e[7],
      u = e[8],
      c = e[9],
      m = e[10],
      d = e[11],
      p = e[12],
      f = e[13],
      _ = e[14],
      b = e[15],
      g = i * o - s * a,
      v = i * h - r * a,
      y = i * l - n * a,
      E = s * h - r * o,
      w = s * l - n * o,
      x = r * l - n * h,
      A = u * f - c * p,
      I = u * _ - m * p,
      S = u * b - d * p,
      F = c * _ - m * f,
      O = c * b - d * f,
      T = m * b - d * _,
      P = g * T - v * O + y * F + E * S - w * I + x * A;
    if (!P) return null;
    return P = 1 / P, t[0] = (o * T - h * O + l * F) * P, t[1] = (r * O - s * T - n * F) * P, t[2] = (f * x - _ * w + b * E) * P, t[3] = (m * w - c * x - d * E) * P, t[4] = (h * S - a * T - l * I) * P, t[5] = (i * T - r * S + n * I) * P, t[6] = (_ * y - p * x - b * v) * P, t[7] = (u * x - m * y + d * v) * P, t[8] = (a * O - o * S + l * A) * P, t[9] = (s * S - i * O - n * A) * P, t[10] = (p * w - f * y + b * g) * P, t[11] = (c * y - u * w - d * g) * P, t[12] = (o * I - a * F - h * A) * P, t[13] = (i * F - s * I + r * A) * P, t[14] = (f * v - p * E - _ * g) * P, t[15] = (u * E - c * v + m * g) * P, t
  }
}, function(t, e) {
  t.exports = function(t) {
    var e = new Float32Array(16);
    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
  }
}, function(t, e) {
  t.exports = function(t, e) {
    if (t === e) {
      var i = e[1],
        s = e[2],
        r = e[3],
        n = e[6],
        a = e[7],
        o = e[11];
      t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = i, t[6] = e[9], t[7] = e[13], t[8] = s, t[9] = n, t[11] = e[14], t[12] = r, t[13] = a, t[14] = o
    } else t[0] = e[0], t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = e[1], t[5] = e[5], t[6] = e[9], t[7] = e[13], t[8] = e[2], t[9] = e[6], t[10] = e[10], t[11] = e[14], t[12] = e[3], t[13] = e[7], t[14] = e[11], t[15] = e[15];
    return t
  }
}, function(t, e) {
  t.exports = function() {
    var t = new Float32Array(3);
    return t[0] = 0, t[1] = 0, t[2] = 0, t
  }
}, function(t, e) {
  t.exports = function(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
  }
}, function(t, e) {
  t.exports = function(t, e) {
    var i = e[0],
      s = e[1],
      r = e[2],
      n = i * i + s * s + r * r;
    n > 0 && (n = 1 / Math.sqrt(n), t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n);
    return t
  }
}, function(t, e) {
  t.exports = function(t) {
    var e = t[0],
      i = t[1],
      s = t[2];
    return Math.sqrt(e * e + i * i + s * s)
  }
}, function(t, e) {
  t.exports = function(t, e, i) {
    var s = e[0],
      r = e[1],
      n = e[2],
      a = i[0],
      o = i[1],
      h = i[2];
    return t[0] = r * h - n * o, t[1] = n * a - s * h, t[2] = s * o - r * a, t
  }
}, function(t, e) {
  t.exports = function(t, e, i) {
    var s = new Float32Array(3);
    return s[0] = t, s[1] = e, s[2] = i, s
  }
}, function(t, e) {
  t.exports = function() {
    var t = new Float32Array(4);
    return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t
  }
}, function(t, e) {
  t.exports = function(t, e, i) {
    var s = e[0],
      r = e[1],
      n = e[2],
      a = e[3];
    return t[0] = i[0] * s + i[4] * r + i[8] * n + i[12] * a, t[1] = i[1] * s + i[5] * r + i[9] * n + i[13] * a, t[2] = i[2] * s + i[6] * r + i[10] * n + i[14] * a, t[3] = i[3] * s + i[7] * r + i[11] * n + i[15] * a, t
  }
}, function(t, e) {
  t.exports = function(t, e, i, s) {
    var r = new Float32Array(4);
    return r[0] = t, r[1] = e, r[2] = i, r[3] = s, r
  }
}, function(t, e, i) {
  "use strict";
  var s = i(66),
    r = function(t) {
      this.phase = t, this.rafEmitter = new s, this._cachePhaseIndex(), this.requestAnimationFrame = this.requestAnimationFrame.bind(this), this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this), this._onBeforeRAFExecutorStart = this._onBeforeRAFExecutorStart.bind(this), this._onBeforeRAFExecutorPhase = this._onBeforeRAFExecutorPhase.bind(this), this._onAfterRAFExecutorPhase = this._onAfterRAFExecutorPhase.bind(this), this.rafEmitter.on(this.phase, this._onRAFExecuted.bind(this)), this.rafEmitter.executor.eventEmitter.on("before:start", this._onBeforeRAFExecutorStart), this.rafEmitter.executor.eventEmitter.on("before:" + this.phase, this._onBeforeRAFExecutorPhase), this.rafEmitter.executor.eventEmitter.on("after:" + this.phase, this._onAfterRAFExecutorPhase), this._frameCallbacks = [], this._currentFrameCallbacks = [], this._nextFrameCallbacks = [], this._phaseActive = !1, this._currentFrameID = -1, this._cancelFrameIdx = -1, this._frameCallbackLength = 0, this._currentFrameCallbacksLength = 0, this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0
    },
    n = r.prototype;
  n.requestAnimationFrame = function(t, e) {
    return !0 === e && this.rafEmitter.executor.phaseIndex > 0 && this.rafEmitter.executor.phaseIndex <= this.phaseIndex ? this._phaseActive ? (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !0), this._frameCallbacks.push(this._currentFrameID, t), this._frameCallbackLength += 2) : (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !1), this._currentFrameCallbacks.push(this._currentFrameID, t), this._currentFrameCallbacksLength += 2) : (this._currentFrameID = this.rafEmitter.run(), this._nextFrameCallbacks.push(this._currentFrameID, t), this._nextFrameCallbacksLength += 2), this._currentFrameID
  }, n.cancelAnimationFrame = function(t) {
    this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(t), this._cancelFrameIdx > -1 ? this._cancelNextAnimationFrame() : (this._cancelFrameIdx = this._currentFrameCallbacks.indexOf(t), this._cancelFrameIdx > -1 ? this._cancelCurrentAnimationFrame() : (this._cancelFrameIdx = this._frameCallbacks.indexOf(t), this._cancelFrameIdx > -1 && this._cancelRunningAnimationFrame()))
  }, n._onRAFExecuted = function(t) {
    for (this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) this._frameCallbacks[this._frameCallbackIteration + 1](t.time, t);
    this._frameCallbacks.length = 0, this._frameCallbackLength = 0
  }, n._onBeforeRAFExecutorStart = function() {
    Array.prototype.push.apply(this._currentFrameCallbacks, this._nextFrameCallbacks.splice(0, this._nextFrameCallbacksLength)), this._currentFrameCallbacksLength = this._nextFrameCallbacksLength, this._nextFrameCallbacks.length = 0, this._nextFrameCallbacksLength = 0
  }, n._onBeforeRAFExecutorPhase = function() {
    this._phaseActive = !0, Array.prototype.push.apply(this._frameCallbacks, this._currentFrameCallbacks.splice(0, this._currentFrameCallbacksLength)), this._frameCallbackLength = this._currentFrameCallbacksLength, this._currentFrameCallbacks.length = 0, this._currentFrameCallbacksLength = 0
  }, n._onAfterRAFExecutorPhase = function() {
    this._phaseActive = !1
  }, n._cachePhaseIndex = function() {
    this.phaseIndex = this.rafEmitter.executor.phases.indexOf(this.phase)
  }, n._cancelRunningAnimationFrame = function() {
    this._frameCallbacks.splice(this._cancelFrameIdx, 2), this._frameCallbackLength -= 2
  }, n._cancelCurrentAnimationFrame = function() {
    this._currentFrameCallbacks.splice(this._cancelFrameIdx, 2), this._currentFrameCallbacksLength -= 2
  }, n._cancelNextAnimationFrame = function() {
    this._nextFrameCallbacks.splice(this._cancelFrameIdx, 2), this._nextFrameCallbacksLength -= 2, 0 === this._nextFrameCallbacksLength && this.rafEmitter.cancel()
  }, t.exports = r
}, function(t, e, i) {
  "use strict";
  var s = i(7),
    r = function(t) {
      s.call(this, t)
    };
  (r.prototype = Object.create(s.prototype))._subscribe = function() {
    return this.executor.subscribe(this, !0)
  }, t.exports = r
}, function(t, e, i) {
  "use strict";
  var s = i(8).SharedInstance,
    r = i(19).majorVersionNumber,
    n = i(69);
  t.exports = s.share("@marcom/ac-raf-emitter/sharedRAFExecutorInstance", r, n)
}, function(t, e, i) {
  "use strict";
  var s, r = window,
    n = r.AC,
    a = (s = {}, {
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
  n || (n = r.AC = {}), n.SharedInstance || (n.SharedInstance = a), t.exports = n.SharedInstance
}, function(t, e, i) {
  "use strict";
  var s, r = i(14);

  function n(t) {
    t = t || {}, this._reset(), this.updatePhases(), this.eventEmitter = new r, this._willRun = !1, this._totalSubscribeCount = -1, this._requestAnimationFrame = window.requestAnimationFrame, this._cancelAnimationFrame = window.cancelAnimationFrame, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
  }(s = n.prototype).frameRequestedPhase = "requested", s.startPhase = "start", s.runPhases = ["update", "external", "draw"], s.endPhase = "end", s.disabledPhase = "disabled", s.beforePhaseEventPrefix = "before:", s.afterPhaseEventPrefix = "after:", s.subscribe = function(t, e) {
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
  }, t.exports = n
}, function(t, e, i) {
  "use strict";
  var s = i(8).SharedInstance,
    r = i(19).majorVersionNumber,
    n = function() {
      this._currentID = 0
    };
  n.prototype.getNewID = function() {
    return this._currentID++, "raf:" + this._currentID
  }, t.exports = s.share("@marcom/ac-raf-emitter/sharedRAFEmitterIDGeneratorInstance", r, n)
}, function(t, e) {
  t.exports = function(t, e, i) {
    var s = Math.sin(i),
      r = Math.cos(i),
      n = e[4],
      a = e[5],
      o = e[6],
      h = e[7],
      l = e[8],
      u = e[9],
      c = e[10],
      m = e[11];
    e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
    return t[4] = n * r + l * s, t[5] = a * r + u * s, t[6] = o * r + c * s, t[7] = h * r + m * s, t[8] = l * r - n * s, t[9] = u * r - a * s, t[10] = c * r - o * s, t[11] = m * r - h * s, t
  }
}, function(t, e) {
  t.exports = function(t, e, i) {
    var s = Math.sin(i),
      r = Math.cos(i),
      n = e[0],
      a = e[1],
      o = e[2],
      h = e[3],
      l = e[8],
      u = e[9],
      c = e[10],
      m = e[11];
    e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
    return t[0] = n * r - l * s, t[1] = a * r - u * s, t[2] = o * r - c * s, t[3] = h * r - m * s, t[8] = n * s + l * r, t[9] = a * s + u * r, t[10] = o * s + c * r, t[11] = h * s + m * r, t
  }
}, function(t, e) {
  t.exports = function(t, e, i) {
    var s = Math.sin(i),
      r = Math.cos(i),
      n = e[0],
      a = e[1],
      o = e[2],
      h = e[3],
      l = e[4],
      u = e[5],
      c = e[6],
      m = e[7];
    e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
    return t[0] = n * r + l * s, t[1] = a * r + u * s, t[2] = o * r + c * s, t[3] = h * r + m * s, t[4] = l * r - n * s, t[5] = u * r - a * s, t[6] = c * r - o * s, t[7] = m * r - h * s, t
  }
}, function(t, e) {
  t.exports = function(t, e, i) {
    var s = i[0],
      r = i[1],
      n = i[2];
    return t[0] = e[0] * s, t[1] = e[1] * s, t[2] = e[2] * s, t[3] = e[3] * s, t[4] = e[4] * r, t[5] = e[5] * r, t[6] = e[6] * r, t[7] = e[7] * r, t[8] = e[8] * n, t[9] = e[9] * n, t[10] = e[10] * n, t[11] = e[11] * n, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
  }
}, function(t, e, i) {
  "use strict";
  const s = i(16),
    r = i(5);
  let n = 0;
  const a = {
    create: i(7)
  };
  class o extends s {
    constructor(t, e) {
      t || ((t = document.createElement("div")).className = "TimeGroup-" + n++), super(t, e), this.name = this.name || t.getAttribute("data-anim-time-group"), this._isPaused = !0, this._repeats = 0, this._isReversed = !1, this._timeScale = 1
    }
    finalizeInit() {
      if (!this.anim) throw "TimeGroup not instantiated correctly. Please use `AnimSystem.createTimeGroup(el)`";
      this.defaultEase = 1, this.onPlayTimeUpdate = this.onPlayTimeUpdate.bind(this), super.finalizeInit()
    }
    progress(t) {
      if (void 0 === t) return 0 === this.boundsMax ? 0 : this.position.local / this.boundsMax;
      let e = t * this.boundsMax;
      this.timelineUpdateRequired = !0, this._onScroll(e)
    }
    time(t) {
      if (void 0 === t) return this.position.local;
      t = r.clamp(t, this.boundsMin, this.boundsMax), this.timelineUpdateRequired = !0, this._onScroll(t)
    }
    play(t) {
      this.reversed(!1), this.isEnabled = !0, this._isPaused = !1, this.time(t), this._playheadEmitter.run()
    }
    reverse(t) {
      this.reversed(!0), this.isEnabled = !0, this._isPaused = !1, this.time(t), this._playheadEmitter.run()
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
    onPlayTimeUpdate(t) {
      if (this._isPaused) return;
      let e = r.clamp(t.delta / 1e3, 0, .5);
      this._isReversed && (e = -e);
      let i = this.time() + e * this._timeScale;
      if (this._repeats === o.REPEAT_FOREVER || this._repeats > 0) {
        let t = !1;
        !this._isReversed && i > this.boundsMax ? (i -= this.boundsMax, t = !0) : this._isReversed && i < 0 && (i = this.boundsMax + i, t = !0), t && (this._repeats = this._repeats === o.REPEAT_FOREVER ? o.REPEAT_FOREVER : this._repeats - 1)
      }
      this.time(i);
      let s = !this._isReversed && this.position.local !== this.duration,
        n = this._isReversed && 0 !== this.position.local;
      s || n ? this._playheadEmitter.run() : this.paused(!0)
    }
    updateProgress(t) {
      this.hasDuration() ? (this.position.localUnclamped = t, this.position.local = r.clamp(this.position.localUnclamped, this.boundsMin, this.boundsMax)) : this.position.local = this.position.localUnclamped = 0
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
      this._playheadEmitter = new a.create, this._playheadEmitter.on("update", this.onPlayTimeUpdate), super.setupRAFEmitter(t)
    }
    needsUpdate() {
      return !0
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
  }
  o.REPEAT_FOREVER = -1, t.exports = o
}, function(t, e, i) {
  "use strict";
  t.exports = {
    version: "3.0.0",
    major: "3.x",
    majorMinor: "3.0"
  }
}, function(t, e, i) {
  "use strict";
  var s = i(6);
  t.exports = s.cancelAnimationFrame("update")
}, function(t, e, i) {
  "use strict";
  t.exports = {
    VideoViewportSource: i(22),
    MediaButton: i(79),
    ProgressiveImage: i(80)
  }
}, function(t, e, i) {
  "use strict";
  const s = i(9),
    r = i(22);
  t.exports = class extends s {
    constructor(t) {
      super(t), this.player = null, this.buttons = {
        play: this.el.querySelector(".icon-play"),
        pause: this.el.querySelector(".icon-pause"),
        replay: this.el.querySelector(".icon-replay")
      }
    }
    mounted() {
      this.attachToVideoPlayer(), this.setupButtons()
    }
    attachToVideoPlayer() {
      let t = this.el.parentElement;
      for (; t;) {
        let e = this.gum.getComponentOfType("VideoViewportSource", t);
        if (e) {
          this.player = e;
          break
        }
        t = t.parentElement
      }
      this.player ? (this.player.video.addEventListener("playing", (() => {
        this.el.classList.remove("ended");
        for (let t in this.buttons) this.buttons[t].removeAttribute("disabled")
      })), this.player.video.addEventListener("ended", (() => {
        this.el.classList.add("ended"), this.focusElement(this.buttons.replay)
      }))) : console.log("MediaButton could not find a VideoViewportSource component")
    }
    focusElement(t) {
      setTimeout((() => {
        t.focus()
      }), 200)
    }
    setupButtons() {
      Object.keys(this.buttons).forEach((t => {
        let e = "play" === t,
          i = "pause" === t,
          s = "replay" === t;
        this.buttons[t].addEventListener("click", (() => {
          this.el.setAttribute("data-media-click-state", t), (e || s) && (this.player.queueVideoPlayback(), this.buttons.play.classList.add("hidden"), this.buttons.pause.classList.remove("hidden"), this.focusElement(this.buttons.pause)), i && (this.player.pauseVideoPlayback(), this.buttons.pause.classList.add("hidden"), this.buttons.play.classList.remove("hidden"), this.focusElement(this.buttons.play))
        }))
      }))
    }
    static IS_SUPPORTED() {
      return r.IS_SUPPORTED()
    }
  }
}, function(t, e, i) {
  "use strict";
  const s = i(9),
    r = i(81),
    n = {
      update: i(3),
      draw: i(4)
    };
  t.exports = class extends s {
    constructor(t) {
      super(t);
      try {
        this._loadOptions = JSON.parse(this.el.getAttribute("data-progressive-image-options"))
      } catch (t) {
        this._loadOptions = null
      }
      this.imageLoader = new r({
        container: this.el,
        includeContainer: !0
      })
    }
    mounted() {
      const t = this.el.querySelectorAll("[data-progressive-image]").length,
        e = this.el.querySelectorAll("figure").length;
      0 === t && e > 0 ? console.log("Warning: Attempting to progressively load images on a container without any progressive-images", this.el) : n.update((() => {
        this.addDiscreteEvent({
          start: "t - 200vh",
          end: "b + 100vh",
          event: "ProgressiveImageLoad",
          allowRTL: !0,
          onEnter: () => this.imageLoader.load(this._loadOptions)
        })
      }))
    }
    destroy() {
      this.imageLoader.destroy(), this.imageLoader = null
    }
    static IS_SUPPORTED() {
      return document.documentElement.classList.contains("progressive-image")
    }
  }
}, function(t, e, i) {
  "use strict";
  var s = i(82),
    r = i(85).LiveQueue,
    n = i(1).EventEmitterMicro,
    a = i(90),
    o = i(98),
    h = {
      container: document.body,
      includeContainer: !1
    },
    l = {
      loadingPoolSize: 8,
      timeout: null,
      imageDataAttribute: "data-progressive-image",
      imageAnimate: !0,
      imageAnimateClass: "progressive-image-animated"
    };

  function u(t) {
    n.call(this), this.options = s(h, t), this.loadingOptions = null, this.els = [], this.loadingQueue = null, this._queueItems = [], this._queueItemsObj = {}, this._loadOrder = [], this._timeout = null, this._didCallLoad = !1
  }
  u.Events = {
    ImageLoad: "image-load",
    Complete: "complete"
  };
  var c = u.prototype = Object.create(n.prototype);
  c.load = function(t) {
    this._didCallLoad || (this._didCallLoad = !0, this.loadingOptions = s(l, t), this.loadingQueue = new r(this.loadingOptions.loadingPoolSize), this.els = Array.from(this._getProgressiveImageElements()), this.options.includeContainer && this.options.container.hasAttribute(this._getProgressiveImageDataAttribute()) && this.els.unshift(this.options.container), o(function() {
      var t, e, i = this.els.length;
      for (t = 0; t < i; t++) e = {
        queueItem: this.loadingQueue.enqueue(this._loadNextItem.bind(this, t), t),
        el: this.els[t],
        id: t
      }, this._queueItems.push(e), this._queueItemsObj[t] = e, this.loadingOptions.imageAnimate && this.els[t].classList.add(this.loadingOptions.imageAnimateClass);
      a(function() {
        this.loadingQueue.start(), "number" == typeof this.loadingOptions.timeout && (this._timeout = setTimeout(this.cancel.bind(this), this.loadingOptions.timeout))
      }.bind(this))
    }.bind(this)))
  }, c.setVisible = function(t) {
    return new Promise(function(e, i) {
      o(function() {
        t.removeAttribute(this._getProgressiveImageDataAttribute()), e(), t = null
      }.bind(this))
    }.bind(this))
  }, c.cancel = function() {
    if (this.els) {
      var t, e = this.els.length;
      for (t = 0; t < e; t++) this.setVisible(this.els[t]), this.loadingOptions.imageAnimate && o(function() {
        this.els[t].setAttribute("data-progressive-image-loaded", "")
      }.bind(this, t))
    }
    this._handleLoadingComplete()
  }, c.destroy = function() {
    this.cancel(), this.off(), n.prototype.destroy.call(this)
  }, c._loadNextItem = function(t) {
    return new Promise(function(t, e, i) {
      var s = this._queueItemsObj[t];
      this._loadAndSetVisible(s.el).then(function() {
        var t = this._queueItems.indexOf(s);
        this._queueItems.splice(t, 1), this._queueItemsObj[s.id] = null, e(), this._handleImageLoad(s.el), s = e = null, 1 === this.loadingQueue.count() && this._handleLoadingComplete()
      }.bind(this))
    }.bind(this, t))
  }, c._loadAndSetVisible = function(t) {
    return new Promise(function(e, i) {
      this.setVisible(t).then(function() {
        this._getBackgroundImageSrc(t).then(function(i) {
          this._loadImage(i).then(e), t = null
        }.bind(this))
      }.bind(this))
    }.bind(this))
  }, c._getBackgroundImageSrc = function(t) {
    return new Promise(function(e, i) {
      a(function() {
        var i = t.currentStyle;
        i || (i = window.getComputedStyle(t, !1)), t = null, 0 !== i.backgroundImage.indexOf("url(") ? e(null) : e(i.backgroundImage.slice(4, -1).replace(/"/g, ""))
      }.bind(this))
    }.bind(this))
  }, c._getProgressiveImageDataAttribute = function() {
    return this.loadingOptions.imageDataAttribute
  }, c._getProgressiveImageCSSQuery = function() {
    return "[" + this._getProgressiveImageDataAttribute() + "]"
  }, c._getProgressiveImageElements = function() {
    return this.options.container.querySelectorAll(this._getProgressiveImageCSSQuery()) || []
  }, c._loadImage = function(t) {
    return new Promise(this._loadImagePromiseFunc.bind(this, t))
  }, c._loadImagePromiseFunc = function(t, e, i) {
    if (t) {
      var s = new Image;
      s.addEventListener("load", (function t() {
        this.removeEventListener("load", t), e(this), e = null
      })), s.src = t
    } else e(null)
  }, c._clearTimeout = function() {
    this._timeout && (window.clearTimeout(this._timeout), this._timeout = null)
  }, c._handleImageLoad = function(t) {
    o(function() {
      this.trigger(u.Events.ImageLoad, t), this.loadingOptions.imageAnimate && t.setAttribute("data-progressive-image-loaded", ""), t = null
    }.bind(this))
  }, c._handleLoadingComplete = function() {
    this.loadingQueue.stop(), this._clearTimeout(), this.trigger(u.Events.Complete)
  }, t.exports = u
}, function(t, e, i) {
  "use strict";
  var s = i(83);
  t.exports = function(t, e) {
    if ("object" != typeof t) throw new TypeError("defaults: must provide a defaults object");
    if ("object" != typeof(e = e || {})) throw new TypeError("defaults: options must be a typeof object");
    return s({}, t, e)
  }
}, function(t, e, i) {
  "use strict";
  i(84);
  var s = Object.prototype.hasOwnProperty;
  t.exports = function() {
    var t, e;
    return t = arguments.length < 2 ? [{}, arguments[0]] : [].slice.call(arguments), e = t.shift(), t.forEach((function(t) {
      if (null != t)
        for (var i in t) s.call(t, i) && (e[i] = t[i])
    })), e
  }
}, function(t, e) {}, function(t, e, i) {
  "use strict";
  t.exports = {
    Queue: i(23),
    QueueItem: i(12),
    LiveQueue: i(86)
  }
}, function(t, e, i) {
  "use strict";
  i(87), i(88), i(89);
  var s = i(23),
    r = i(12);

  function n(t) {
    this._queue = new s, this._maxProcesses = t || 1, this._availableSlots = this._maxProcesses, this._rafId = 0, this._isRunning = !1, this._boundFunctions = {
      _run: this._run.bind(this),
      _releaseSlot: this._releaseSlot.bind(this)
    }
  }
  var a = n.prototype;
  a.start = function() {
    this._isRunning && cancelAnimationFrame(this._rafId), this._rafId = requestAnimationFrame(this._boundFunctions._run), this._isRunning = !0
  }, a.pause = function() {
    this._isRunning && (cancelAnimationFrame(this._rafId), this._rafId = 0), this._isRunning = !1
  }, a.stop = function() {
    this.pause(), this.clear()
  }, a.enqueue = function(t, e) {
    if ("function" != typeof t) throw new Error("LiveQueue can only enqueue functions");
    void 0 === e && (e = s.PRIORITY_DEFAULT);
    var i = new r(t, e);
    return this.enqueueQueueItem(i)
  }, a.enqueueQueueItem = function(t) {
    return this._queue.enqueueQueueItem(t), this._isRunning && 0 === this._rafId && this.start(), t
  }, a.dequeueQueueItem = function(t) {
    return this._queue.dequeueQueueItem(t)
  }, a.clear = function() {
    this._queue = new s
  }, a.destroy = function() {
    this.pause(), this._isRunning = !1, this._queue = null, this._boundFunctions = null
  }, a.count = function() {
    return this._queue.count() + this.pending()
  }, a.pending = function() {
    return this._maxProcesses - this._availableSlots
  }, a.isEmpty = function() {
    return 0 === this.count()
  }, a._run = function() {
    if (this._isRunning && (this._rafId = requestAnimationFrame(this._boundFunctions._run), !this._queue.isEmpty() && 0 !== this._availableSlots)) {
      var t = this._queue.dequeue().data();
      this._isPromise(t) && (this._retainSlot(), t.then(this._boundFunctions._releaseSlot, this._boundFunctions._releaseSlot)), this._stopRunningIfDone()
    }
  }, a._retainSlot = function() {
    this._availableSlots--
  }, a._releaseSlot = function() {
    this._availableSlots++, this._stopRunningIfDone()
  }, a._stopRunningIfDone = function() {
    0 != this._rafId && 0 === this._queue.count() && this._availableSlots == this._maxProcesses && (cancelAnimationFrame(this._rafId), this._rafId = 0)
  }, a._isPromise = function(t) {
    return !(!t || "function" != typeof t.then)
  }, t.exports = n
}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e, i) {
  "use strict";
  var s = i(24);
  t.exports = s.requestAnimationFrame("update")
}, function(t, e, i) {
  "use strict";
  var s = i(92),
    r = function(t) {
      this.rafEmitter = new s, this.rafEmitter.on(t, this._onRAFExecuted.bind(this)), this.requestAnimationFrame = this.requestAnimationFrame.bind(this), this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this), this._frameCallbacks = [], this._nextFrameCallbacks = [], this._currentFrameID = -1, this._cancelFrameIdx = -1, this._frameCallbackLength = 0, this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0
    },
    n = r.prototype;
  n.requestAnimationFrame = function(t) {
    return this._currentFrameID = this.rafEmitter.run(), this._nextFrameCallbacks.push(this._currentFrameID, t), this._nextFrameCallbacksLength += 2, this._currentFrameID
  }, n.cancelAnimationFrame = function(t) {
    this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(t), -1 !== this._cancelFrameIdx && (this._nextFrameCallbacks.splice(this._cancelFrameIdx, 2), this._nextFrameCallbacksLength -= 2, 0 === this._nextFrameCallbacksLength && this.rafEmitter.cancel())
  }, n._onRAFExecuted = function(t) {
    for (this._frameCallbacks = this._nextFrameCallbacks, this._frameCallbackLength = this._nextFrameCallbacksLength, this._nextFrameCallbacks = [], this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) this._frameCallbacks[this._frameCallbackIteration + 1](t.time, t)
  }, t.exports = r
}, function(t, e, i) {
  "use strict";
  var s = i(93),
    r = function(t) {
      s.call(this, t)
    };
  (r.prototype = Object.create(s.prototype))._subscribe = function() {
    return this.executor.subscribe(this, !0)
  }, t.exports = r
}, function(t, e, i) {
  "use strict";
  var s, r = i(1).EventEmitterMicro,
    n = i(94),
    a = i(97);

  function o(t) {
    t = t || {}, r.call(this), this.id = a.getNewID(), this.executor = t.executor || n, this._reset(), this._willRun = !1, this._didDestroy = !1
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
  var s = i(8).SharedInstance,
    r = i(95);
  t.exports = s.share("ac-raf-executor:sharedRAFExecutorInstance", "2.0.1", r)
}, function(t, e, i) {
  "use strict";
  var s;

  function r(t) {
    t = t || {}, this._reset(), this._willRun = !1, this._totalSubscribeCount = -1, this._requestAnimationFrame = window.requestAnimationFrame, this._cancelAnimationFrame = window.cancelAnimationFrame, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
  }
  i(96), (s = r.prototype).subscribe = function(t, e) {
    return this._totalSubscribeCount++, this._nextFrameSubscribers[t.id] || (e ? this._nextFrameSubscribersOrder.unshift(t.id) : this._nextFrameSubscribersOrder.push(t.id), this._nextFrameSubscribers[t.id] = t, this._nextFrameSubscriberArrayLength++, this._nextFrameSubscriberCount++, this._run()), this._totalSubscribeCount
  }, s.unsubscribe = function(t) {
    return !!this._nextFrameSubscribers[t.id] && (this._nextFrameSubscribers[t.id] = null, this._nextFrameSubscriberCount--, 0 === this._nextFrameSubscriberCount && this._cancel(), !0)
  }, s.trigger = function(t, e) {
    var i;
    for (i = 0; i < this._subscriberArrayLength; i++) null !== this._subscribers[this._subscribersOrder[i]] && !1 === this._subscribers[this._subscribersOrder[i]]._didDestroy && this._subscribers[this._subscribersOrder[i]].trigger(t, e)
  }, s.destroy = function() {
    var t = this._cancel();
    return this._subscribers = null, this._subscribersOrder = null, this._nextFrameSubscribers = null, this._nextFrameSubscribersOrder = null, this._rafData = null, this._boundOnAnimationFrame = null, this._onExternalAnimationFrame = null, t
  }, s.useExternalAnimationFrame = function(t) {
    if ("boolean" == typeof t) {
      var e = this._isUsingExternalAnimationFrame;
      return t && this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), !this._willRun || t || this._animationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this._isUsingExternalAnimationFrame = t, t ? this._boundOnExternalAnimationFrame : e || !1
    }
  }, s._run = function() {
    if (!this._willRun) return this._willRun = !0, 0 === this.lastFrameTime && (this.lastFrameTime = performance.now()), this._animationFrameActive = !0, this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), !0
  }, s._cancel = function() {
    var t = !1;
    return this._animationFrameActive && (this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), this._animationFrameActive = !1, this._willRun = !1, t = !0), this._isRunning || this._reset(), t
  }, s._onSubscribersAnimationFrameStart = function(t) {
    var e;
    for (e = 0; e < this._subscriberArrayLength; e++) null !== this._subscribers[this._subscribersOrder[e]] && !1 === this._subscribers[this._subscribersOrder[e]]._didDestroy && this._subscribers[this._subscribersOrder[e]]._onAnimationFrameStart(t)
  }, s._onSubscribersAnimationFrameEnd = function(t) {
    var e;
    for (e = 0; e < this._subscriberArrayLength; e++) null !== this._subscribers[this._subscribersOrder[e]] && !1 === this._subscribers[this._subscribersOrder[e]]._didDestroy && this._subscribers[this._subscribersOrder[e]]._onAnimationFrameEnd(t)
  }, s._onAnimationFrame = function(t) {
    this._subscribers = this._nextFrameSubscribers, this._subscribersOrder = this._nextFrameSubscribersOrder, this._subscriberArrayLength = this._nextFrameSubscriberArrayLength, this._subscriberCount = this._nextFrameSubscriberCount, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._isRunning = !0, this._willRun = !1, this._didRequestNextRAF = !1, this._rafData.delta = t - this.lastFrameTime, this.lastFrameTime = t, this._rafData.fps = 0, this._rafData.delta >= 1e3 && (this._rafData.delta = 0), 0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta), this._rafData.time = t, this._rafData.naturalFps = this._rafData.fps, this._rafData.timeNow = Date.now(), this._onSubscribersAnimationFrameStart(this._rafData), this.trigger("update", this._rafData), this.trigger("external", this._rafData), this.trigger("draw", this._rafData), this._onSubscribersAnimationFrameEnd(this._rafData), this._willRun || this._reset()
  }, s._onExternalAnimationFrame = function(t) {
    this._isUsingExternalAnimationFrame && this._onAnimationFrame(t)
  }, s._reset = function() {
    this._rafData = {
      time: 0,
      delta: 0,
      fps: 0,
      naturalFps: 0,
      timeNow: 0
    }, this._subscribers = {}, this._subscribersOrder = [], this._subscriberArrayLength = 0, this._subscriberCount = 0, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._didEmitFrameData = !1, this._animationFrame = null, this._animationFrameActive = !1, this._isRunning = !1, this._shouldReset = !1, this.lastFrameTime = 0
  }, t.exports = r
}, function(t, e) {}, function(t, e, i) {
  "use strict";
  var s = i(8).SharedInstance,
    r = function() {
      this._currentID = 0
    };
  r.prototype.getNewID = function() {
    return this._currentID++, "raf:" + this._currentID
  }, t.exports = s.share("ac-raf-emitter-id-generator:sharedRAFEmitterIDGeneratorInstance", "1.0.3", r)
}, function(t, e, i) {
  "use strict";
  var s = i(24);
  t.exports = s.requestAnimationFrame("draw")
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
