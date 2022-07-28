! function e(t, i, s) {
  function r(o, a) {
    if (!i[o]) {
      if (!t[o]) {
        var h = "function" == typeof require && require;
        if (!a && h) return h(o, !0);
        if (n) return n(o, !0);
        var l = new Error("Cannot find module '" + o + "'");
        throw l.code = "MODULE_NOT_FOUND", l
      }
      var c = i[o] = {
        exports: {}
      };
      t[o][0].call(c.exports, (function(e) {
        return r(t[o][1][e] || e)
      }), c, c.exports, e, t, i, s)
    }
    return i[o].exports
  }
  for (var n = "function" == typeof require && require, o = 0; o < s.length; o++) r(s[o]);
  return r
}({
  1: [function(e, t, i) {
    "use strict";

    function s() {
      this._createElements(), this._bindEvents()
    }
    var r = s.prototype;
    r._bindEvents = function() {
      this._onResize = this._resize.bind(this)
    }, r._createElements = function() {
      this.span = document.createElement("span");
      var e = this.span.style;
      if (e.visibility = "hidden", e.position = "absolute", e.top = "0", e.bottom = "0", e.zIndex = "-1", this.span.innerHTML = "&nbsp;", !window.ResizeObserver) {
        this.iframe = document.createElement("iframe");
        var t = this.iframe.style;
        t.position = "absolute", t.top = "0", t.left = "0", t.width = "100%", t.height = "100%", this.span.appendChild(this.iframe)
      }
      document.body.appendChild(this.span)
    }, r.detect = function(e) {
      this.originalSize = e || 17, this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.currentSize > this.originalSize && this._onResize(), this.isDetecting || (window.ResizeObserver ? (this.resizeObserver = new ResizeObserver(this._onResize), this.resizeObserver.observe(this.span)) : this.iframe.contentWindow.addEventListener("resize", this._onResize), this.isDetecting = !0)
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
  }, {}],
  2: [function(e, t, i) {
    "use strict";
    var s = !1,
      r = window || self;
    try {
      s = !!r.localStorage.getItem("f7c9180f-5c45-47b4-8de4-428015f096c0")
    } catch (e) {}
    t.exports = s
  }, {}],
  3: [function(e, t, i) {
    "use strict";
    t.exports = e(4)("error")
  }, {
    4: 4
  }],
  4: [function(e, t, i) {
    "use strict";
    var s = e(2);
    t.exports = function(e) {
      return function() {
        if (s && "object" == typeof window.console && "function" == typeof console[e]) return console[e].apply(console, Array.prototype.slice.call(arguments, 0))
      }
    }
  }, {
    2: 2
  }],
  5: [function(e, t, i) {
    "use strict";
    t.exports = e(4)("log")
  }, {
    4: 4
  }],
  6: [function(e, t, i) {
    "use strict";
    t.exports = e(4)("warn")
  }, {
    4: 4
  }],
  7: [function(e, t, i) {
    "use strict";
    t.exports = {
      EventEmitterMicro: e(8)
    }
  }, {
    8: 8
  }],
  8: [function(e, t, i) {
    "use strict";

    function s() {
      this._events = {}
    }
    var r = s.prototype;
    r.on = function(e, t) {
      this._events[e] = this._events[e] || [], this._events[e].unshift(t)
    }, r.once = function(e, t) {
      var i = this;
      this.on(e, (function s(r) {
        i.off(e, s), void 0 !== r ? t(r) : t()
      }))
    }, r.off = function(e, t) {
      if (this.has(e)) {
        if (1 === arguments.length) return this._events[e] = null, void delete this._events[e];
        var i = this._events[e].indexOf(t); - 1 !== i && this._events[e].splice(i, 1)
      }
    }, r.trigger = function(e, t) {
      if (this.has(e))
        for (var i = this._events[e].length - 1; i >= 0; i--) void 0 !== t ? this._events[e][i](t) : this._events[e][i]()
    }, r.has = function(e) {
      return e in this._events != !1 && 0 !== this._events[e].length
    }, r.destroy = function() {
      for (var e in this._events) this._events[e] = null;
      this._events = null
    }, t.exports = s
  }, {}],
  9: [function(e, t, i) {
    t.exports = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
  }, {}],
  10: [function(e, t, i) {
    "use strict";
    t.exports = {
      majorVersionNumber: "3.x"
    }
  }, {}],
  11: [function(e, t, i) {
    "use strict";
    var s, r = e(7).EventEmitterMicro,
      n = e(20),
      o = e(19);

    function a(e) {
      e = e || {}, r.call(this), this.id = o.getNewID(), this.executor = e.executor || n, this._reset(), this._willRun = !1, this._didDestroy = !1
    }(s = a.prototype = Object.create(r.prototype)).run = function() {
      return this._willRun || (this._willRun = !0), this._subscribe()
    }, s.cancel = function() {
      this._unsubscribe(), this._willRun && (this._willRun = !1), this._reset()
    }, s.destroy = function() {
      var e = this.willRun();
      return this.cancel(), this.executor = null, r.prototype.destroy.call(this), this._didDestroy = !0, e
    }, s.willRun = function() {
      return this._willRun
    }, s.isRunning = function() {
      return this._isRunning
    }, s._subscribe = function() {
      return this.executor.subscribe(this)
    }, s._unsubscribe = function() {
      return this.executor.unsubscribe(this)
    }, s._onAnimationFrameStart = function(e) {
      this._isRunning = !0, this._willRun = !1, this._didEmitFrameData || (this._didEmitFrameData = !0, this.trigger("start", e))
    }, s._onAnimationFrameEnd = function(e) {
      this._willRun || (this.trigger("stop", e), this._reset())
    }, s._reset = function() {
      this._didEmitFrameData = !1, this._isRunning = !1
    }, t.exports = a
  }, {
    19: 19,
    20: 20,
    7: 7
  }],
  12: [function(e, t, i) {
    "use strict";
    var s, r = e(8);

    function n(e) {
      e = e || {}, this._reset(), this.updatePhases(), this.eventEmitter = new r, this._willRun = !1, this._totalSubscribeCount = -1, this._requestAnimationFrame = window.requestAnimationFrame, this._cancelAnimationFrame = window.cancelAnimationFrame, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
    }(s = n.prototype).frameRequestedPhase = "requested", s.startPhase = "start", s.runPhases = ["update", "external", "draw"], s.endPhase = "end", s.disabledPhase = "disabled", s.beforePhaseEventPrefix = "before:", s.afterPhaseEventPrefix = "after:", s.subscribe = function(e, t) {
      return this._totalSubscribeCount++, this._nextFrameSubscribers[e.id] || (t ? this._nextFrameSubscribersOrder.unshift(e.id) : this._nextFrameSubscribersOrder.push(e.id), this._nextFrameSubscribers[e.id] = e, this._nextFrameSubscriberArrayLength++, this._nextFrameSubscriberCount++, this._run()), this._totalSubscribeCount
    }, s.subscribeImmediate = function(e, t) {
      return this._totalSubscribeCount++, this._subscribers[e.id] || (t ? this._subscribersOrder.splice(this._currentSubscriberIndex + 1, 0, e.id) : this._subscribersOrder.unshift(e.id), this._subscribers[e.id] = e, this._subscriberArrayLength++, this._subscriberCount++), this._totalSubscribeCount
    }, s.unsubscribe = function(e) {
      return !!this._nextFrameSubscribers[e.id] && (this._nextFrameSubscribers[e.id] = null, this._nextFrameSubscriberCount--, 0 === this._nextFrameSubscriberCount && this._cancel(), !0)
    }, s.getSubscribeID = function() {
      return this._totalSubscribeCount += 1
    }, s.destroy = function() {
      var e = this._cancel();
      return this.eventEmitter.destroy(), this.eventEmitter = null, this.phases = null, this._subscribers = null, this._subscribersOrder = null, this._nextFrameSubscribers = null, this._nextFrameSubscribersOrder = null, this._rafData = null, this._boundOnAnimationFrame = null, this._onExternalAnimationFrame = null, e
    }, s.useExternalAnimationFrame = function(e) {
      if ("boolean" == typeof e) {
        var t = this._isUsingExternalAnimationFrame;
        return e && this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), !this._willRun || e || this._animationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this._isUsingExternalAnimationFrame = e, e ? this._boundOnExternalAnimationFrame : t || !1
      }
    }, s.updatePhases = function() {
      this.phases || (this.phases = []), this.phases.length = 0, this.phases.push(this.frameRequestedPhase), this.phases.push(this.startPhase), Array.prototype.push.apply(this.phases, this.runPhases), this.phases.push(this.endPhase), this._runPhasesLength = this.runPhases.length, this._phasesLength = this.phases.length
    }, s._run = function() {
      if (!this._willRun) return this._willRun = !0, 0 === this.lastFrameTime && (this.lastFrameTime = performance.now()), this._animationFrameActive = !0, this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this.phase === this.disabledPhase && (this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex]), !0
    }, s._cancel = function() {
      var e = !1;
      return this._animationFrameActive && (this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), this._animationFrameActive = !1, this._willRun = !1, e = !0), this._isRunning || this._reset(), e
    }, s._onAnimationFrame = function(e) {
      for (this._subscribers = this._nextFrameSubscribers, this._subscribersOrder = this._nextFrameSubscribersOrder, this._subscriberArrayLength = this._nextFrameSubscriberArrayLength, this._subscriberCount = this._nextFrameSubscriberCount, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex], this._isRunning = !0, this._willRun = !1, this._didRequestNextRAF = !1, this._rafData.delta = e - this.lastFrameTime, this.lastFrameTime = e, this._rafData.fps = 0, this._rafData.delta >= 1e3 && (this._rafData.delta = 0), 0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta), this._rafData.time = e, this._rafData.naturalFps = this._rafData.fps, this._rafData.timeNow = Date.now(), this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameStart(this._rafData);
      for (this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._runPhaseIndex = 0; this._runPhaseIndex < this._runPhasesLength; this._runPhaseIndex++) {
        for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]].trigger(this.phase, this._rafData);
        this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase)
      }
      for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameEnd(this._rafData);
      this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._willRun ? (this.phaseIndex = 0, this.phaseIndex = this.phases[this.phaseIndex]) : this._reset()
    }, s._onExternalAnimationFrame = function(e) {
      this._isUsingExternalAnimationFrame && this._onAnimationFrame(e)
    }, s._reset = function() {
      this._rafData || (this._rafData = {}), this._rafData.time = 0, this._rafData.delta = 0, this._rafData.fps = 0, this._rafData.naturalFps = 0, this._rafData.timeNow = 0, this._subscribers = {}, this._subscribersOrder = [], this._currentSubscriberIndex = -1, this._subscriberArrayLength = 0, this._subscriberCount = 0, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._didEmitFrameData = !1, this._animationFrame = null, this._animationFrameActive = !1, this._isRunning = !1, this._shouldReset = !1, this.lastFrameTime = 0, this._runPhaseIndex = -1, this.phaseIndex = -1, this.phase = this.disabledPhase
    }, t.exports = n
  }, {
    8: 8
  }],
  13: [function(e, t, i) {
    "use strict";
    var s = e(15),
      r = function(e) {
        this.phase = e, this.rafEmitter = new s, this._cachePhaseIndex(), this.requestAnimationFrame = this.requestAnimationFrame.bind(this), this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this), this._onBeforeRAFExecutorStart = this._onBeforeRAFExecutorStart.bind(this), this._onBeforeRAFExecutorPhase = this._onBeforeRAFExecutorPhase.bind(this), this._onAfterRAFExecutorPhase = this._onAfterRAFExecutorPhase.bind(this), this.rafEmitter.on(this.phase, this._onRAFExecuted.bind(this)), this.rafEmitter.executor.eventEmitter.on("before:start", this._onBeforeRAFExecutorStart), this.rafEmitter.executor.eventEmitter.on("before:" + this.phase, this._onBeforeRAFExecutorPhase), this.rafEmitter.executor.eventEmitter.on("after:" + this.phase, this._onAfterRAFExecutorPhase), this._frameCallbacks = [], this._currentFrameCallbacks = [], this._nextFrameCallbacks = [], this._phaseActive = !1, this._currentFrameID = -1, this._cancelFrameIdx = -1, this._frameCallbackLength = 0, this._currentFrameCallbacksLength = 0, this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0
      },
      n = r.prototype;
    n.requestAnimationFrame = function(e, t) {
      return !0 === t && this.rafEmitter.executor.phaseIndex > 0 && this.rafEmitter.executor.phaseIndex <= this.phaseIndex ? this._phaseActive ? (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !0), this._frameCallbacks.push(this._currentFrameID, e), this._frameCallbackLength += 2) : (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !1), this._currentFrameCallbacks.push(this._currentFrameID, e), this._currentFrameCallbacksLength += 2) : (this._currentFrameID = this.rafEmitter.run(), this._nextFrameCallbacks.push(this._currentFrameID, e), this._nextFrameCallbacksLength += 2), this._currentFrameID
    }, n.cancelAnimationFrame = function(e) {
      this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(e), this._cancelFrameIdx > -1 ? this._cancelNextAnimationFrame() : (this._cancelFrameIdx = this._currentFrameCallbacks.indexOf(e), this._cancelFrameIdx > -1 ? this._cancelCurrentAnimationFrame() : (this._cancelFrameIdx = this._frameCallbacks.indexOf(e), this._cancelFrameIdx > -1 && this._cancelRunningAnimationFrame()))
    }, n._onRAFExecuted = function(e) {
      for (this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) this._frameCallbacks[this._frameCallbackIteration + 1](e.time, e);
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
  }, {
    15: 15
  }],
  14: [function(e, t, i) {
    "use strict";
    var s = e(13),
      r = function() {
        this.events = {}
      },
      n = r.prototype;
    n.requestAnimationFrame = function(e) {
      return this.events[e] || (this.events[e] = new s(e)), this.events[e].requestAnimationFrame
    }, n.cancelAnimationFrame = function(e) {
      return this.events[e] || (this.events[e] = new s(e)), this.events[e].cancelAnimationFrame
    }, t.exports = new r
  }, {
    13: 13
  }],
  15: [function(e, t, i) {
    "use strict";
    var s = e(11),
      r = function(e) {
        s.call(this, e)
      };
    (r.prototype = Object.create(s.prototype))._subscribe = function() {
      return this.executor.subscribe(this, !0)
    }, t.exports = r
  }, {
    11: 11
  }],
  16: [function(e, t, i) {
    "use strict";
    var s = e(14);
    t.exports = s.cancelAnimationFrame("update")
  }, {
    14: 14
  }],
  17: [function(e, t, i) {
    "use strict";
    var s = e(14);
    t.exports = s.requestAnimationFrame("draw")
  }, {
    14: 14
  }],
  18: [function(e, t, i) {
    "use strict";
    var s = e(14);
    t.exports = s.requestAnimationFrame("external")
  }, {
    14: 14
  }],
  19: [function(e, t, i) {
    "use strict";
    var s = e(22).SharedInstance,
      r = e(10).majorVersionNumber,
      n = function() {
        this._currentID = 0
      };
    n.prototype.getNewID = function() {
      return this._currentID++, "raf:" + this._currentID
    }, t.exports = s.share("@marcom/ac-raf-emitter/sharedRAFEmitterIDGeneratorInstance", r, n)
  }, {
    10: 10,
    22: 22
  }],
  20: [function(e, t, i) {
    "use strict";
    var s = e(22).SharedInstance,
      r = e(10).majorVersionNumber,
      n = e(12);
    t.exports = s.share("@marcom/ac-raf-emitter/sharedRAFExecutorInstance", r, n)
  }, {
    10: 10,
    12: 12,
    22: 22
  }],
  21: [function(e, t, i) {
    "use strict";
    var s = e(14);
    t.exports = s.requestAnimationFrame("update")
  }, {
    14: 14
  }],
  22: [function(e, t, i) {
    "use strict";
    t.exports = {
      SharedInstance: e(23)
    }
  }, {
    23: 23
  }],
  23: [function(e, t, i) {
    "use strict";
    var s, r = window,
      n = r.AC,
      o = (s = {}, {
        get: function(e, t) {
          var i = null;
          return s[e] && s[e][t] && (i = s[e][t]), i
        },
        set: function(e, t, i) {
          return s[e] || (s[e] = {}), s[e][t] = "function" == typeof i ? new i : i, s[e][t]
        },
        share: function(e, t, i) {
          var s = this.get(e, t);
          return s || (s = this.set(e, t, i)), s
        },
        remove: function(e, t) {
          var i = typeof t;
          if ("string" !== i && "number" !== i) s[e] && (s[e] = null);
          else {
            if (!s[e] || !s[e][t]) return;
            s[e][t] = null
          }
        }
      });
    n || (n = r.AC = {}), n.SharedInstance || (n.SharedInstance = o), t.exports = n.SharedInstance
  }, {}],
  24: [function(e, t, i) {
    "use strict";
    t.exports = function(e) {
      var t = (e = (e = e || window.location.search).replace(/^[^?]*\?/, "")) ? e.split("&") : [],
        i = {},
        s = new RegExp("=");
      return t.forEach((function(e) {
        var t, r;
        if (s.test(e)) {
          var n = e.split("=", 2);
          t = n[0], r = n[1]
        } else t = e, r = null;
        i[t] = r
      })), i
    }
  }, {}],
  25: [function(e, t, i) {
    "use strict";
    var s = e(24);
    t.exports = function(e) {
      var t, i = "",
        r = !1;
      return e ? window.URL && "function" == typeof window.URL ? t = new URL(e, window.location) : ((t = document.createElement("a")).href = e, t.href = t.href, function(e) {
        var t = e.port,
          i = new RegExp(":" + t);
        return t && !i.test(e.href) && i.test(e.host)
      }(t) && (i = t.host.replace(new RegExp(":" + t.port), ""), r = !0)) : t = window.location, {
        hash: t.hash,
        host: i || t.host,
        hostname: t.hostname,
        href: t.href,
        origin: t.origin || t.protocol + "//" + (i || t.host),
        pathname: t.pathname,
        port: r ? "" : t.port,
        protocol: t.protocol,
        search: t.search,
        searchParams: s(t.search)
      }
    }
  }, {
    24: 24
  }],
  26: [function(e, t, i) {
    "use strict";
    class s {
      constructor(e = {}) {
        this.options = e, "loading" === document.readyState ? document.addEventListener("readystatechange", e => {
          "interactive" === document.readyState && this._init()
        }) : this._init()
      }
      _init() {
        if (this._images = Array.from(document.querySelectorAll("*[".concat(s.DATA_ATTRIBUTE, "]"))), this.AnimSystem = this._findAnim(), null === this.AnimSystem) return null;
        this._addKeyframesToImages()
      }
      _defineKeyframeOptions(e = null) {
        const t = e.getAttribute(s.DATA_DOWNLOAD_AREA_KEYFRAME) || "{}";
        return Object.assign({}, {
          start: "t - 200vh",
          end: "b + 100vh",
          event: "AnimLazyImage"
        }, JSON.parse(t))
      }
      _addKeyframesToImages() {
        this._scrollGroup = this.AnimSystem.getGroupForTarget(document.body), this._images.forEach(e => {
          this.AnimSystem.getGroupForTarget(e) && (this._scrollGroup = this.AnimSystem.getGroupForTarget(e));
          let t = this._defineKeyframeOptions(e);
          this._scrollGroup.addKeyframe(e, t).controller.once("AnimLazyImage:enter", () => {
            this._imageIsInLoadRange(e)
          })
        })
      }
      _cleanUpImageAttributes(e) {
        let t = !1;
        try {
          t = this._scrollGroup.getControllerForTarget(e).getNearestKeyframeForAttribute("AnimLazyImage").isCurrentlyInRange
        } catch (e) {
          t = !1
        }
        t || e.setAttribute(s.DATA_ATTRIBUTE, "")
      }
      _downloadingImageAttributes(e) {
        e.removeAttribute(s.DATA_ATTRIBUTE)
      }
      _imageIsInLoadRange(e) {
        this._downloadImage(e)
      }
      _downloadImage(e) {
        this._downloadingImageAttributes(e)
      }
      _findAnim() {
        var e = Array.from(document.querySelectorAll("[data-anim-group],[data-anim-scroll-group],[data-anim-time-group]"));
        return e.map(e => e._animInfo ? e._animInfo.group : null).filter(e => null !== e), e[0] && e[0]._animInfo ? e[0]._animInfo.group.anim : (console.error("AnimLazyImage: AnimSystem not found, please initialize anim before instantiating"), null)
      }
    }
    s.DATA_DOWNLOAD_AREA_KEYFRAME = "data-download-area-keyframe", s.DATA_ATTRIBUTE = "data-anim-lazy-image", t.exports = s
  }, {}],
  27: [function(e, t, i) {
    "use strict";
    const s = e(26),
      r = e(77),
      n = e(17),
      o = e(21);
    class a extends s {
      constructor(e = {}) {
        super(e), this.arrayImg = []
      }
      _init() {
        super._init(), this._onBreakpointChangeCallback = this._onBreakpointChangeCallback.bind(this), this._addViewportEvents(), this._resetPromises(), this._addMethodsToImageElement()
      }
      _addViewportEvents() {
        let e = this.options.breakpoints ? {
          breakpoints: this.options.breakpoints
        } : {};
        this.viewportEmitterMicro = new r(e), this.viewportEmitterMicro.on(r.CHANGE_EVENTS.VIEWPORT, this._onBreakpointChangeCallback), this.viewportEmitterMicro.on(r.CHANGE_EVENTS.RETINA, this._onBreakpointChangeCallback)
      }
      _addKeyframesToImages() {
        this._scrollGroup = this.AnimSystem.getGroupForTarget(document.body), this._images.forEach(e => {
          this.AnimSystem.getGroupForTarget(e) && (this._scrollGroup = this.AnimSystem.getGroupForTarget(e));
          let t = this._defineKeyframeOptions(e);
          this._scrollGroup.addKeyframe(e, t).controller.on("AnimLazyImage:enter", () => {
            this._imageIsInLoadRange(e)
          })
        })
      }
      _onBreakpointChangeCallback(e) {
        this._resetPromises(), this.arrayImg = [], this._images.forEach(e => {
          this._cleanUpImageAttributes(e), "" != e.getAttribute(s.DATA_ATTRIBUTE) && this._imageIsInLoadRange(e)
        })
      }
      _resetPromises() {
        this._images.forEach(e => {
          e.promises = {}, e.promises.downloadComplete = new Promise(t => {
            e.promises.__completePromiseResolver = t
          })
        })
      }
      _addMethodsToImageElement() {
        this._images.forEach(e => {
          e.forceLazyLoad = () => {
            this._imageIsInLoadRange(e)
          }
        })
      }
      _imageIsInLoadRange(e) {
        this._downloadImage(e).then(() => {
          e.promises.__completePromiseResolver(e), e.dispatchEvent(new Event(a.EVENTS.DOWNLOAD_COMPLETE))
        })
      }
      _cleanUpImageAttributes(e) {
        e.removeAttribute(a.DATA_DOWNLOADING_ATTRIBUTE), e.removeAttribute(a.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE)
      }
      _downloadingImageAttributes(e) {
        super._downloadingImageAttributes(e), e.setAttribute(a.DATA_DOWNLOADING_ATTRIBUTE, "")
      }
      _finishedDownloadAttributes(e) {
        e.removeAttribute(a.DATA_DOWNLOADING_ATTRIBUTE), e.setAttribute(a.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE, "")
      }
      _downloadImage(e) {
        return new Promise((t, i) => {
          null === e.getAttribute(a.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE) ? null === e.getAttribute(a.DATA_DOWNLOADING_ATTRIBUTE) && this._waitForBackgroundVisible(e).then(e => this._getBackgroundImageSrc(e)).then(e => this._loadImage(e)).then(() => {
            n(() => {
              this._finishedDownloadAttributes(e), t()
            }, !0)
          }) : t()
        })
      }
      _waitForBackgroundVisible(e) {
        return new Promise((t, i) => {
          n(() => {
            this._downloadingImageAttributes(e), t(e)
          }, !0)
        })
      }
      _getBackgroundImageSrc(e) {
        return new Promise((t, i) => {
          o(() => {
            let i = e.currentStyle;
            i || (i = window.getComputedStyle(e, !1)), 0 !== i.backgroundImage.indexOf("url(") ? t(null) : t(i.backgroundImage.slice(4, -1).replace(/"/g, ""))
          }, !0)
        })
      }
      _loadImage(e) {
        return new Promise(this._loadImagePromiseFunc.bind(this, e))
      }
      _loadImagePromiseFunc(e, t, i) {
        if (!e) return void t(null);
        let s = new Image(1, 1);
        s.addEventListener("load", (function e(i) {
          s.removeEventListener("load", e), t(this)
        })), s.src = e, this.arrayImg.push(s)
      }
    }
    a.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE = "data-anim-lazy-image-download-complete", a.DATA_DOWNLOADING_ATTRIBUTE = "data-anim-lazy-image-downloading", a.EVENTS = {}, a.EVENTS.DOWNLOAD_COMPLETE = "video-loading-complete", t.exports = a
  }, {
    17: 17,
    21: 21,
    26: 26,
    77: 77
  }],
  28: [function(e, t, i) {
    "use strict";
    t.exports = {
      version: "3.3.4",
      major: "3.x",
      majorMinor: "3.3"
    }
  }, {}],
  29: [function(e, t, i) {
    "use strict";
    const s = e(7).EventEmitterMicro,
      r = e(36),
      n = e(31),
      o = e(32),
      a = e(34),
      h = e(51),
      l = e(52),
      c = e(53),
      u = e(28),
      d = {};
    "undefined" != typeof window && (d.update = e(21), d.cancelUpdate = e(16), d.external = e(18), d.draw = e(17));
    let m = null;
    class p extends s {
      constructor() {
        if (super(), m) throw "You cannot create multiple AnimSystems. You probably want to create multiple groups instead. You can have unlimited groups on a page";
        m = this, this.groups = [], this.scrollSystems = [], this.timeSystems = [], this.tweenGroup = null, this._forceUpdateRAFId = -1, this.initialized = !1, this.model = r, this.version = u.version, this._resolveReady = () => {}, this.ready = new Promise(e => this._resolveReady = e), this.onScroll = this.onScroll.bind(this), this.onResizedDebounced = this.onResizedDebounced.bind(this), this.onResizeImmediate = this.onResizeImmediate.bind(this)
      }
      initialize() {
        return this.initialized || "undefined" == typeof window || (this.initialized = !0, this.timeSystems = [], this.scrollSystems = [], this.groups = [], this.setupEvents(), this.initializeResizeFilter(), this.initializeModel(), this.createDOMGroups(), this.createDOMKeyframes(), this.tweenGroup = new c(null, this), this.groups.push(this.tweenGroup), this._resolveReady()), this.ready
      }
      remove() {
        return this.initialized ? Promise.all(this.groups.map(e => e.remove())).then(() => {
          this.groups = null, this.scrollSystems = null, this.timeSystems = null, window.clearTimeout(r.RESIZE_TIMEOUT), window.removeEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onResizeImmediate), this._events = {}, this.initialized = !1, this.ready = new Promise(e => this._resolveReady = e)
        }) : (this.ready = new Promise(e => this._resolveReady = e), Promise.resolve())
      }
      destroy() {
        return this.remove()
      }
      createTimeGroup(e) {
        let t = new l(e, this);
        return this.groups.push(t), this.timeSystems.push(t), this.trigger(r.EVENTS.ON_GROUP_CREATED, t), t
      }
      createScrollGroup(e) {
        if (!e) throw "AnimSystem scroll based groups must supply an HTMLElement";
        let t = new h(e, this);
        return this.groups.push(t), this.scrollSystems.push(t), this.trigger(r.EVENTS.ON_GROUP_CREATED, t), t
      }
      removeGroup(e) {
        return Promise.all(e.keyframeControllers.map(t => e.removeKeyframeController(t))).then(() => {
          let t = this.groups.indexOf(e); - 1 !== t && this.groups.splice(t, 1), t = this.scrollSystems.indexOf(e), -1 !== t && this.scrollSystems.splice(t, 1), t = this.timeSystems.indexOf(e), -1 !== t && this.timeSystems.splice(t, 1), e.destroy()
        })
      }
      createDOMGroups() {
        document.body.setAttribute("data-anim-scroll-group", "body"), document.querySelectorAll("[data-anim-scroll-group]").forEach(e => this.createScrollGroup(e)), document.querySelectorAll("[data-anim-time-group]").forEach(e => this.createTimeGroup(e)), this.trigger(r.EVENTS.ON_DOM_GROUPS_CREATED, this.groups)
      }
      createDOMKeyframes() {
        let e = [];
        ["data-anim-keyframe", n.DATA_ATTRIBUTE, o.DATA_ATTRIBUTE, a.DATA_ATTRIBUTE].forEach((function(t) {
          for (let i = 0; i < 12; i++) e.push(t + (0 === i ? "" : "-" + (i - 1)))
        }));
        for (let t = 0; t < e.length; t++) {
          let i = e[t],
            s = document.querySelectorAll("[" + i + "]");
          for (let e = 0; e < s.length; e++) {
            const t = s[e],
              r = JSON.parse(t.getAttribute(i));
            this.addKeyframe(t, r)
          }
        }
        d.update(() => {
          null !== this.groups && (this.groups.forEach(e => e.onKeyframesDirty({
            silent: !0
          })), this.groups.forEach(e => e.trigger(r.EVENTS.ON_DOM_KEYFRAMES_CREATED, e)), this.trigger(r.EVENTS.ON_DOM_KEYFRAMES_CREATED, this), this.groups.forEach(e => {
            e.forceUpdate({
              waitForNextUpdate: !1,
              silent: !0
            }), e.reconcile()
          }), this.onScroll())
        }, !0)
      }
      initializeResizeFilter() {
        if (r.cssDimensionsTracker) return;
        const e = document.querySelector(".cssDimensionsTracker") || document.createElement("div");
        e.setAttribute("cssDimensionsTracker", "true"), e.style.position = "fixed", e.style.top = "0", e.style.width = "100%", e.style.height = "100vh", e.style.pointerEvents = "none", e.style.visibility = "hidden", e.style.zIndex = "-1", document.documentElement.appendChild(e), r.cssDimensionsTracker = e
      }
      initializeModel() {
        r.pageMetrics.windowHeight = r.cssDimensionsTracker.clientHeight, r.pageMetrics.windowWidth = r.cssDimensionsTracker.clientWidth, r.pageMetrics.scrollY = window.scrollY || window.pageYOffset, r.pageMetrics.scrollX = window.scrollX || window.pageXOffset, r.pageMetrics.breakpoint = r.getBreakpoint();
        let e = document.documentElement.getBoundingClientRect();
        r.pageMetrics.documentOffsetX = e.left + r.pageMetrics.scrollX, r.pageMetrics.documentOffsetY = e.top + r.pageMetrics.scrollY
      }
      setupEvents() {
        window.removeEventListener("scroll", this.onScroll), window.addEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onResizeImmediate), window.addEventListener("resize", this.onResizeImmediate)
      }
      onScroll() {
        r.pageMetrics.scrollY = window.scrollY || window.pageYOffset, r.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
        for (let e = 0, t = this.scrollSystems.length; e < t; e++) this.scrollSystems[e].updateTimeline();
        this.trigger(r.PageEvents.ON_SCROLL, r.pageMetrics)
      }
      onResizeImmediate() {
        let e = r.cssDimensionsTracker.clientWidth,
          t = r.cssDimensionsTracker.clientHeight;
        if (e === r.pageMetrics.windowWidth && t === r.pageMetrics.windowHeight) return;
        r.pageMetrics.windowWidth = e, r.pageMetrics.windowHeight = t, r.pageMetrics.scrollY = window.scrollY || window.pageYOffset, r.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
        let i = document.documentElement.getBoundingClientRect();
        r.pageMetrics.documentOffsetX = i.left + r.pageMetrics.scrollX, r.pageMetrics.documentOffsetY = i.top + r.pageMetrics.scrollY, window.clearTimeout(r.RESIZE_TIMEOUT), r.RESIZE_TIMEOUT = window.setTimeout(this.onResizedDebounced, 250), this.trigger(r.PageEvents.ON_RESIZE_IMMEDIATE, r.pageMetrics)
      }
      onResizedDebounced() {
        d.update(() => {
          let e = r.pageMetrics.breakpoint,
            t = r.getBreakpoint();
          if (t !== e) {
            r.pageMetrics.previousBreakpoint = e, r.pageMetrics.breakpoint = t;
            for (let e = 0, t = this.groups.length; e < t; e++) this.groups[e]._onBreakpointChange();
            this.trigger(r.PageEvents.ON_BREAKPOINT_CHANGE, r.pageMetrics)
          }
          for (let e = 0, t = this.groups.length; e < t; e++) this.groups[e].forceUpdate({
            waitForNextUpdate: !1
          });
          this.trigger(r.PageEvents.ON_RESIZE_DEBOUNCED, r.pageMetrics)
        }, !0)
      }
      forceUpdate({
        waitForNextUpdate: e = !0,
        silent: t = !1
      } = {}) {
        -1 !== this._forceUpdateRAFId && d.cancelUpdate(this._forceUpdateRAFId);
        let i = () => {
          for (let e = 0, i = this.groups.length; e < i; e++) {
            this.groups[e].forceUpdate({
              waitForNextUpdate: !1,
              silent: t
            })
          }
          return -1
        };
        this._forceUpdateRAFId = e ? d.update(i, !0) : i()
      }
      addKeyframe(e, t) {
        let i = this.getGroupForTarget(e);
        return i = i || this.getGroupForTarget(document.body), i.addKeyframe(e, t)
      }
      addEvent(e, t) {
        let i = this.getGroupForTarget(e);
        return i = i || this.getGroupForTarget(document.body), i.addEvent(e, t)
      }
      getTimeGroupForTarget(e) {
        return this._getGroupForTarget(e, e => e instanceof l)
      }
      getScrollGroupForTarget(e) {
        return this._getGroupForTarget(e, e => !(e instanceof l))
      }
      getGroupForTarget(e) {
        return this._getGroupForTarget(e, () => !0)
      }
      _getGroupForTarget(e, t) {
        if (e._animInfo && e._animInfo.group && t(e._animInfo.group)) return e._animInfo.group;
        let i = e;
        for (; i;) {
          if (i._animInfo && i._animInfo.isGroup && t(i._animInfo.group)) return i._animInfo.group;
          i = i.parentElement
        }
      }
      getControllerForTarget(e) {
        return e._animInfo && e._animInfo.controller ? e._animInfo.controller : null
      }
      addTween(e, t) {
        return this.tweenGroup.addKeyframe(e, t)
      }
    }
    t.exports = "undefined" == typeof window ? new p : window.AC.SharedInstance.share("AnimSystem", u.major, p), t.exports.default = t.exports
  }, {
    16: 16,
    17: 17,
    18: 18,
    21: 21,
    28: 28,
    31: 31,
    32: 32,
    34: 34,
    36: 36,
    51: 51,
    52: 52,
    53: 53,
    7: 7
  }],
  30: [function(e, t, i) {
    "use strict";
    const s = e(36);
    class r {
      constructor(e, t) {
        this._index = 0, this.keyframe = e, t && (this.name = t)
      }
      get start() {
        return this.keyframe.jsonProps.start
      }
      set index(e) {
        this._index = e
      }
      get index() {
        return this._index
      }
    }
    t.exports = class {
      constructor(e) {
        this.timeGroup = e, this.chapters = [], this.chapterNames = {}, this.currentChapter = null, this.clip = null
      }
      addChapter(e) {
        const {
          position: t,
          name: i
        } = e;
        if (void 0 === t) throw ReferenceError("Cannot add chapter without target position.");
        e._impIsFirst || 0 !== this.chapters.length || this.addChapter({
          position: 0,
          _impIsFirst: !0
        });
        let s = this.timeGroup.addKeyframe(this, {
          start: t,
          end: t,
          event: "Chapter"
        });
        this.timeGroup.forceUpdate({
          waitForNextFrame: !1,
          silent: !0
        });
        const n = new r(s, i);
        if (this.chapters.push(n), i) {
          if (this.chapterNames.hasOwnProperty(i)) throw ReferenceError('Duplicate chapter name assigned - "'.concat(i, '" is already in use'));
          this.chapterNames[i] = n
        }
        return this.chapters.sort((e, t) => e.start - t.start).forEach((e, t) => e.index = t), this.currentChapter = this.currentChapter || this.chapters[0], n
      }
      playToChapter(e) {
        let t;
        if (e.hasOwnProperty("index")) t = this.chapters[e.index];
        else {
          if (!e.hasOwnProperty("name")) throw ReferenceError("Cannot play to chapter without target index or name");
          t = this.chapterNames[e.name]
        }
        if (!t || this.currentChapter === t && !0 !== e.force) return;
        let i = e.ease || "easeInOutCubic";
        this.clip && (this.clip.destroy(), i = "easeOutQuint"), this.timeGroup.timeScale(e.timeScale || 1);
        const r = void 0 !== e.duration ? e.duration : this.getDurationToChapter(t),
          n = this.timeGroup.time(),
          o = t.start;
        let a = !1;
        this.tween = this.timeGroup.anim.addTween({
          time: n
        }, {
          easeFunction: i,
          duration: r,
          time: [n, o],
          onStart: () => this.timeGroup.trigger(s.EVENTS.ON_CHAPTER_INITIATED, {
            player: this,
            next: t
          }),
          onDraw: e => {
            let i = e.tweenProps.time.current;
            this.timeGroup.time(i), e.keyframe.curvedT > .5 && !a && (a = !0, this.currentIndex = t.index, this.currentChapter = t, this.timeGroup.trigger(s.EVENTS.ON_CHAPTER_OCCURRED, {
              player: this,
              current: t
            }))
          },
          onComplete: () => {
            this.timeGroup.trigger(s.EVENTS.ON_CHAPTER_COMPLETED, {
              player: this,
              current: t
            }), this.timeGroup.paused(!0), this.clip = null
          }
        })
      }
      getDurationToChapter(e) {
        const t = this.chapters[e.index - 1] || this.chapters[e.index + 1];
        return Math.abs(t.start - e.start)
      }
    }
  }, {
    36: 36
  }],
  31: [function(e, t, i) {
    "use strict";
    const s = e(36),
      r = e(44),
      n = e(72),
      o = e(38),
      a = e(47),
      h = e(43),
      l = e(54),
      c = e(55),
      u = e(46);
    class d {
      constructor(e, t) {
        this.controller = e, this.anchors = [], this.jsonProps = t, this.ease = e.group.defaultEase, this.easeFunction = o.linear, this.start = 0, this.end = 0, this.localT = 0, this.curvedT = 0, this.id = 0, this.event = "", this.needsEventDispatch = !1, this.snapAtCreation = !1, this.isEnabled = !1, this.animValues = {}, this.breakpointMask = "SMLX", this.disabledWhen = [], this.keyframeType = s.KeyframeTypes.Interpolation, this.hold = !1, this.preserveState = !1, this.markedForRemoval = !1;
        let i = !1;
        Object.defineProperty(this, "hidden", {
          get: () => i,
          set(t) {
            i = t, e.group.keyframesDirty = !0
          }
        }), this.uuid = u(), this.destroyed = !1
      }
      destroy() {
        this.destroyed = !0, this.controller = null, this.disabledWhen = null, this.anchors = null, this.jsonProps = null, this.easeFunction = null, this.animValues = null
      }
      remove() {
        return this.controller.removeKeyframe(this)
      }
      parseOptions(e) {
        this.jsonProps = e, e.relativeTo && console.error("KeyframeError: relativeTo has been removed. Use 'anchors' property instead. Found 'relativeTo':\"".concat(e.relativeTo, '"')), void 0 === e.end && void 0 === e.duration && (e.end = e.start), "" !== e.anchors && e.anchors ? (this.anchors = [], e.anchors = Array.isArray(e.anchors) ? e.anchors : [e.anchors], e.anchors.forEach((t, i) => {
          let s = c(t, this.controller.group.element);
          if (!s) {
            let s = "";
            return "string" == typeof t && (s = " Provided value was a string, so a failed attempt was made to find anchor with the provided querystring in group.element, or in the document."), void console.warn("Keyframe on", this.controller.element, " failed to find anchor at index ".concat(i, " in array"), e.anchors, ". Anchors must be JS Object references, Elements references, or valid query selector strings. ".concat(s))
          }
          this.anchors.push(s), this.controller.group.metrics.add(s)
        })) : (this.anchors = [], e.anchors = []), e.ease ? this.ease = parseFloat(e.ease) : e.ease = this.ease, e.hasOwnProperty("snapAtCreation") ? this.snapAtCreation = e.snapAtCreation : e.snapAtCreation = this.snapAtCreation, e.easeFunction || (e.easeFunction = s.KeyframeDefaults.easeFunctionString), e.breakpointMask ? this.breakpointMask = e.breakpointMask : e.breakpointMask = this.breakpointMask, e.disabledWhen ? this.disabledWhen = Array.isArray(e.disabledWhen) ? e.disabledWhen : [e.disabledWhen] : e.disabledWhen = this.disabledWhen, e.hasOwnProperty("hold") ? this.hold = e.hold : e.hold = this.hold, e.hasOwnProperty("preserveState") ? this.preserveState = e.preserveState : e.preserveState = s.KeyframeDefaults.preserveState, this.easeFunction = o[e.easeFunction], o.hasOwnProperty(e.easeFunction) || (e.easeFunction.includes("bezier") ? this.easeFunction = a.fromCSSString(e.easeFunction) : e.easeFunction.includes("spring") ? this.easeFunction = h.fromCSSString(e.easeFunction) : console.error("Keyframe parseOptions cannot find 'easeFunction' named '" + e.easeFunction + "'"));
        for (let t in e) {
          if (-1 !== s.KeyframeJSONReservedWords.indexOf(t)) continue;
          let i = e[t];
          if (!Array.isArray(i)) continue;
          if (1 === i.length && (i[0] = null, i[1] = i[0]), this.animValues[t] = this.controller.group.expressionParser.parseArray(this, i), void 0 === this.controller.tweenProps[t] || !this.controller._ownerIsElement) {
            let e = 0;
            this.controller._ownerIsElement || (e = this.controller.element[t] || 0);
            let i = new r(e, s.KeyframeDefaults.epsilon, this.snapAtCreation);
            this.controller.tweenProps[t] = i
          }
          let n = this.controller.tweenProps[t];
          if (e.epsilon) n.epsilon = e.epsilon;
          else {
            let e = Math.abs(this.animValues[t][0] - this.animValues[t][1]),
              i = Math.min(.001 * e, n.epsilon, s.KeyframeDefaults.epsilon);
            n.epsilon = Math.max(i, 1e-4)
          }
        }
        this.keyframeType = this.hold ? s.KeyframeTypes.InterpolationForward : s.KeyframeTypes.Interpolation, e.event && (this.event = e.event)
      }
      overwriteProps(e) {
        this.animValues = {};
        let t = Object.assign({}, this.jsonProps, e);
        this.controller.updateKeyframe(this, t)
      }
      updateLocalProgress(e) {
        if (this.start === this.end || e < this.start || e > this.end) return this.localT = e < this.start ? this.hold ? this.localT : 0 : e > this.end ? 1 : 0, void(this.curvedT = this.easeFunction(this.localT));
        const t = (e - this.start) / (this.end - this.start),
          i = this.hold ? this.localT : 0;
        this.localT = n.clamp(t, i, 1), this.curvedT = this.easeFunction(this.localT)
      }
      reconcile(e) {
        let t = this.animValues[e],
          i = this.controller.tweenProps[e];
        i.initialValue = t[0], i.target = t[0] + this.curvedT * (t[1] - t[0]), i.current !== i.target && (i.current = i.target, this.needsEventDispatch || (this.needsEventDispatch = !0, this.controller.keyframesRequiringDispatch.push(this)))
      }
      reset(e) {
        this.localT = e || 0;
        var t = this.ease;
        this.ease = 1;
        for (let e in this.animValues) this.reconcile(e);
        this.ease = t
      }
      onDOMRead(e) {
        let t = this.animValues[e],
          i = this.controller.tweenProps[e];
        i.target = t[0] + this.curvedT * (t[1] - t[0]);
        let s = i.current;
        i.current += (i.target - i.current) * this.ease;
        let r = i.current - i.target;
        r < i.epsilon && r > -i.epsilon && (i.current = i.target, r = 0), "" === this.event || this.needsEventDispatch || (r > i.epsilon || r < -i.epsilon || 0 === r && s !== i.current) && (this.needsEventDispatch = !0, this.controller.keyframesRequiringDispatch.push(this))
      }
      isInRange(e) {
        return e >= this.start && e <= this.end
      }
      setEnabled(e) {
        e = e || l(Array.from(document.documentElement.classList));
        let t = -1 !== this.breakpointMask.indexOf(s.pageMetrics.breakpoint),
          i = !1;
        return this.disabledWhen.length > 0 && (i = this.disabledWhen.some(t => void 0 !== e[t])), this.isEnabled = t && !i, this.isEnabled
      }
      evaluateConstraints() {
        this.start = this.controller.group.expressionParser.parseTimeValue(this, this.jsonProps.start), this.end = this.controller.group.expressionParser.parseTimeValue(this, this.jsonProps.end), this.evaluateInterpolationConstraints()
      }
      evaluateInterpolationConstraints() {
        for (let e in this.animValues) {
          let t = this.jsonProps[e];
          this.animValues[e] = this.controller.group.expressionParser.parseArray(this, t)
        }
      }
    }
    d.DATA_ATTRIBUTE = "data-anim-tween", t.exports = d
  }, {
    36: 36,
    38: 38,
    43: 43,
    44: 44,
    46: 46,
    47: 47,
    54: 54,
    55: 55,
    72: 72
  }],
  32: [function(e, t, i) {
    "use strict";
    const s = e(31),
      r = e(36),
      n = e(44);
    class o extends s {
      constructor(e, t) {
        super(e, t), this.keyframeType = r.KeyframeTypes.CSSClass, this._triggerType = o.TRIGGER_TYPE_CSS_CLASS, this.cssClass = "", this.friendlyName = "", this.style = {
          on: null,
          off: null
        }, this.toggle = !1, this.isApplied = !1
      }
      parseOptions(e) {
        if (!this.controller._ownerIsElement) throw new TypeError("CSS Keyframes cannot be applied to JS Objects");
        if (e.x = void 0, e.y = void 0, e.z = void 0, e.scale = void 0, e.scaleX = void 0, e.scaleY = void 0, e.rotationX = void 0, e.rotationY = void 0, e.rotationZ = void 0, e.rotation = void 0, e.opacity = void 0, e.hold = void 0, void 0 !== e.toggle && (this.toggle = e.toggle), void 0 !== e.cssClass) this._triggerType = o.TRIGGER_TYPE_CSS_CLASS, this.cssClass = e.cssClass, this.friendlyName = "." + this.cssClass, void 0 === this.controller.tweenProps.targetClasses && (this.controller.tweenProps.targetClasses = {
          add: [],
          remove: []
        });
        else {
          if (void 0 === e.style || !this.isValidStyleProperty(e.style)) throw new TypeError("KeyframeCSSClass no 'cssClass` property found. If using `style` property its also missing or invalid");
          if (this._triggerType = o.TRIGGER_TYPE_STYLE_PROPERTY, this.style = e.style, this.friendlyName = "style", this.toggle = void 0 !== this.style.off || this.toggle, this.toggle && void 0 === this.style.off) {
            this.style.off = {};
            for (let e in this.style.on) this.style.off[e] = ""
          }
          void 0 === this.controller.tweenProps.targetStyles && (this.controller.tweenProps.targetStyles = {})
        }
        if (void 0 === e.end && (e.end = e.start), e.toggle = this.toggle, this._triggerType === o.TRIGGER_TYPE_CSS_CLASS) this.isApplied = this.controller.element.classList.contains(this.cssClass);
        else {
          let e = getComputedStyle(this.controller.element);
          this.isApplied = !0;
          for (let t in this.style.on)
            if (e[t] !== this.style.on[t]) {
              this.isApplied = !1;
              break
            }
        }
        s.prototype.parseOptions.call(this, e), this.animValues[this.friendlyName] = [0, 0], void 0 === this.controller.tweenProps[this.friendlyName] && (this.controller.tweenProps[this.friendlyName] = new n(0, 1, !1)), this.keyframeType = r.KeyframeTypes.CSSClass
      }
      updateLocalProgress(e) {
        this.isApplied && !this.toggle || (this.start !== this.end ? !this.isApplied && e >= this.start && e <= this.end ? this._apply() : this.isApplied && this.toggle && (e < this.start || e > this.end) && this._unapply() : !this.isApplied && e >= this.start ? this._apply() : this.isApplied && this.toggle && e < this.start && this._unapply())
      }
      _apply() {
        if (this._triggerType === o.TRIGGER_TYPE_CSS_CLASS) this.controller.tweenProps.targetClasses.add.push(this.cssClass), this.controller.needsClassUpdate = !0;
        else {
          for (let e in this.style.on) this.controller.tweenProps.targetStyles[e] = this.style.on[e];
          this.controller.needsStyleUpdate = !0
        }
        this.isApplied = !0
      }
      _unapply() {
        if (this._triggerType === o.TRIGGER_TYPE_CSS_CLASS) this.controller.tweenProps.targetClasses.remove.push(this.cssClass), this.controller.needsClassUpdate = !0;
        else {
          for (let e in this.style.off) this.controller.tweenProps.targetStyles[e] = this.style.off[e];
          this.controller.needsStyleUpdate = !0
        }
        this.isApplied = !1
      }
      isValidStyleProperty(e) {
        if (!e.hasOwnProperty("on")) return !1;
        if ("object" != typeof e.on) throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:'hidden', otherProperty: 'value'}}");
        if (this.toggle && e.hasOwnProperty("off") && "object" != typeof e.off) throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:'hidden', otherProperty: 'value'}}");
        return !0
      }
      reconcile(e) {}
      onDOMRead(e) {}
      evaluateInterpolationConstraints() {}
    }
    o.TRIGGER_TYPE_CSS_CLASS = 0, o.TRIGGER_TYPE_STYLE_PROPERTY = 1, o.DATA_ATTRIBUTE = "data-anim-classname", t.exports = o
  }, {
    31: 31,
    36: 36,
    44: 44
  }],
  33: [function(e, t, i) {
    "use strict";
    const s = e(36),
      r = e(44),
      n = e(37),
      o = e(40),
      a = e(35),
      h = (e(31), e(32)),
      l = e(41),
      c = e(54),
      u = e(46),
      d = e(7).EventEmitterMicro,
      m = e(64),
      p = {};
    "undefined" != typeof window && (p.update = e(21), p.external = e(18), p.draw = e(17));
    const f = Math.PI / 180,
      g = ["x", "y", "z", "scale", "scaleX", "scaleY", "rotation", "rotationX", "rotationY", "rotationZ"],
      _ = ["borderRadius", "bottom", "fontSize", "fontWeight", "height", "left", "lineHeight", "marginBottom", "marginLeft", "marginRight", "marginTop", "maxHeight", "maxWidth", "opacity", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "right", "top", "width", "zIndex", "strokeDashoffset"],
      y = ["currentTime", "scrollLeft", "scrollTop"],
      v = {
        create: e(79),
        rotateX: e(80),
        rotateY: e(81),
        rotateZ: e(82),
        scale: e(83)
      };
    t.exports = class extends d {
      constructor(e, t) {
        super(), this._events.draw = [], this.uuid = u(), this.group = e, this.element = t, this._ownerIsElement = this.element instanceof Element, this._ownerIsElement ? this.friendlyName = this.element.tagName + "." + Array.from(this.element.classList).join(".") : this.friendlyName = this.element.friendlyName || this.uuid, this.element._animInfo = this.element._animInfo || new a(e, this), this.element._animInfo.controller = this, this.element._animInfo.group = this.group, this.element._animInfo.controllers.push(this), this.tweenProps = this.element._animInfo.tweenProps, this.eventObject = new o(this), this.needsStyleUpdate = !1, this.needsClassUpdate = !1, this.elementMetrics = this.group.metrics.add(this.element), this.attributes = [], this.cssAttributes = [], this.domAttributes = [], this.keyframes = {}, this._allKeyframes = [], this._activeKeyframes = [], this.keyframesRequiringDispatch = [], this.updateCachedValuesFromElement(), this.boundsMin = 0, this.boundsMax = 0, this.mat2d = new Float32Array(6), this.mat4 = v.create(), this.needsWrite = !0, this.onDOMWriteImp = this._ownerIsElement ? this.onDOMWriteForElement : this.onDOMWriteForObject
      }
      destroy() {
        if (this.element._animInfo) {
          this.element._animInfo.controller === this && (this.element._animInfo.controller = null);
          let e = this.element._animInfo.controllers.indexOf(this);
          if (-1 !== e && this.element._animInfo.controllers.splice(e, 1), 0 === this.element._animInfo.controllers.length) this.element._animInfo = null;
          else {
            let e = this.element._animInfo.controllers.find(e => e.group !== e.group.anim.tweenGroup);
            e && (this.element._animInfo.controller = e, this.element._animInfo.group = e.group)
          }
        }
        this.eventObject.controller = null, this.eventObject.element = null, this.eventObject.keyframe = null, this.eventObject.tweenProps = null, this.eventObject = null, this.elementMetrics = null, this.group = null, this.keyframesRequiringDispatch = null;
        for (let e = 0; e < this._allKeyframes.length; e++) this._allKeyframes[e].destroy();
        this._allKeyframes = null, this._activeKeyframes = null, this.attributes = null, this.keyframes = null, this.element = null, this.tweenProps = null, this.destroyed = !0, super.destroy()
      }
      remove() {
        return this.group.removeKeyframeController(this)
      }
      updateCachedValuesFromElement() {
        if (!this._ownerIsElement) return;
        const e = getComputedStyle(this.element);
        let t = new DOMMatrix(e.getPropertyValue("transform")),
          i = m(t),
          o = s.KeyframeDefaults.epsilon;
        ["x", "y", "z"].forEach((e, t) => {
          this.tweenProps[e] = new r(i.translation[t], o, !1)
        }), this.tweenProps.rotation = new r(i.rotation[2], o, !1), ["rotationX", "rotationY", "rotationZ"].forEach((e, t) => {
          this.tweenProps[e] = new r(i.rotation[t], o, !1)
        }), this.tweenProps.scale = new r(i.scale[0], o, !1), ["scaleX", "scaleY", "scaleZ"].forEach((e, t) => {
          this.tweenProps[e] = new r(i.scale[t], o, !1)
        }), _.forEach(t => {
          let i = ["zIndex"].includes(t),
            s = ["opacity", "zIndex", "fontWeight"].includes(t) ? void 0 : "px",
            r = parseFloat(e[t]);
          isNaN(r) && (r = 0), this.tweenProps[t] = new n(r, o, !1, t, i, s)
        }), y.forEach(e => {
          let t = isNaN(this.element[e]) ? 0 : this.element[e];
          this.tweenProps[e] = new n(t, o, !1, e, !1)
        })
      }
      addKeyframe(e) {
        let t = l(e);
        if (!t) throw new Error("AnimSystem Cannot create keyframe for from options `" + e + "`");
        let i = new t(this, e);
        return i.parseOptions(e), i.id = this._allKeyframes.length, this._allKeyframes.push(i), i
      }
      needsUpdate() {
        for (let e = 0, t = this.attributes.length; e < t; e++) {
          let t = this.attributes[e],
            i = this.tweenProps[t];
          if (Math.abs(i.current - i.target) > i.epsilon) return !0
        }
        return !1
      }
      updateLocalProgress(e) {
        for (let t = 0, i = this.attributes.length; t < i; t++) {
          let i = this.attributes[t],
            s = this.keyframes[this.attributes[t]];
          if (1 === s.length) {
            s[0].updateLocalProgress(e);
            continue
          }
          let r = this.getNearestKeyframeForAttribute(i, e);
          r && r.updateLocalProgress(e)
        }
      }
      reconcile() {
        for (let e = 0, t = this.attributes.length; e < t; e++) {
          let t = this.attributes[e],
            i = this.getNearestKeyframeForAttribute(t, this.group.position.local);
          i.updateLocalProgress(this.group.position.local), i.snapAtCreation && i.reconcile(t)
        }
      }
      determineActiveKeyframes(e) {
        e = e || c(Array.from(document.documentElement.classList));
        let t = this._activeKeyframes,
          i = this.attributes,
          s = {};
        this._activeKeyframes = [], this.attributes = [], this.keyframes = {};
        for (let t = 0; t < this._allKeyframes.length; t++) {
          let i = this._allKeyframes[t];
          if (i.markedForRemoval || i.hidden || !i.setEnabled(e))
            for (let e in i.animValues) this.tweenProps[e].isActive = i.preserveState, i.preserveState && (s[e] = !0);
          else {
            this._activeKeyframes.push(i);
            for (let e in i.animValues) this.keyframes[e] = this.keyframes[e] || [], this.keyframes[e].push(i), -1 === this.attributes.indexOf(e) && (s[e] = !0, this.attributes.push(e), this.tweenProps[e].isActive = !0)
          }
        }
        this.attributes.forEach(e => this.tweenProps[e].isActive = !0), this.cssAttributes = _.filter(e => this.attributes.includes(e)).map(e => this.tweenProps[e]), this.domAttributes = y.filter(e => this.attributes.includes(e)).map(e => this.tweenProps[e]);
        let r = t.filter(e => -1 === this._activeKeyframes.indexOf(e));
        if (0 === r.length) return;
        let n = i.filter(e => -1 === this.attributes.indexOf(e) && !s.hasOwnProperty(e));
        if (0 !== n.length)
          if (this.needsWrite = !0, this._ownerIsElement) p.external(() => {
            let e = n.some(e => g.includes(e)),
              t = e && Object.keys(s).some(e => g.includes(e));
            e && !t && this.element.style.removeProperty("transform");
            for (let e = 0, t = n.length; e < t; ++e) {
              let t = n[e],
                i = this.tweenProps[t],
                s = i.isActive ? i.target : i.initialValue;
              i.current = i.target = s, !i.isActive && _.includes(t) && (this.element.style[t] = null)
            }
            for (let e = 0, t = r.length; e < t; ++e) {
              let t = r[e];
              t instanceof h && !t.preserveState && t._unapply()
            }
          }, !0);
          else
            for (let e = 0, t = n.length; e < t; ++e) {
              let t = this.tweenProps[n[e]];
              t.current = t.target, t.isActive = !1
            }
      }
      onDOMRead(e) {
        for (let t = 0, i = this.attributes.length; t < i; t++) {
          let i = this.attributes[t];
          this.tweenProps[i].previousValue = this.tweenProps[i].current;
          let s = this.getNearestKeyframeForAttribute(i, e);
          s && s.onDOMRead(i), this.tweenProps[i].previousValue !== this.tweenProps[i].current && (this.needsWrite = !0)
        }
      }
      onDOMWrite() {
        (this.needsWrite || this.needsClassUpdate || this.needsStyleUpdate) && (this.needsWrite = !1, this.onDOMWriteImp(), this.handleEventDispatch())
      }
      onDOMWriteForObject() {
        for (let e = 0, t = this.attributes.length; e < t; e++) {
          let t = this.attributes[e];
          this.element[t] = this.tweenProps[t].current
        }
      }
      onDOMWriteForElement() {
        let e = this.element.style;
        this.handleStyleTransform();
        for (let t = 0, i = this.cssAttributes.length; t < i; t++) this.cssAttributes[t].set(e);
        for (let e = 0, t = this.domAttributes.length; e < t; e++) this.domAttributes[e].set(this.element);
        if (this.needsStyleUpdate) {
          for (let e in this.tweenProps.targetStyles) null !== this.tweenProps.targetStyles[e] && (this.element.style[e] = this.tweenProps.targetStyles[e]), this.tweenProps.targetStyles[e] = null;
          this.needsStyleUpdate = !1
        }
        this.needsClassUpdate && (this.tweenProps.targetClasses.add.length > 0 && this.element.classList.add.apply(this.element.classList, this.tweenProps.targetClasses.add), this.tweenProps.targetClasses.remove.length > 0 && this.element.classList.remove.apply(this.element.classList, this.tweenProps.targetClasses.remove), this.tweenProps.targetClasses.add.length = 0, this.tweenProps.targetClasses.remove.length = 0, this.needsClassUpdate = !1)
      }
      handleStyleTransform() {
        let e = this.tweenProps,
          t = this.element.style;
        if (e.z.isActive || e.rotationX.isActive || e.rotationY.isActive) {
          const i = this.mat4;
          i[0] = 1, i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = 1, i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[10] = 1, i[11] = 0, i[12] = 0, i[13] = 0, i[14] = 0, i[15] = 1;
          const s = e.x.current,
            r = e.y.current,
            n = e.z.current;
          if (i[12] = i[0] * s + i[4] * r + i[8] * n + i[12], i[13] = i[1] * s + i[5] * r + i[9] * n + i[13], i[14] = i[2] * s + i[6] * r + i[10] * n + i[14], i[15] = i[3] * s + i[7] * r + i[11] * n + i[15], 0 !== e.rotation.current || 0 !== e.rotationZ.current) {
            const t = (e.rotation.current || e.rotationZ.current) * f;
            v.rotateZ(i, i, t)
          }
          if (0 !== e.rotationX.current) {
            const t = e.rotationX.current * f;
            v.rotateX(i, i, t)
          }
          if (0 !== e.rotationY.current) {
            const t = e.rotationY.current * f;
            v.rotateY(i, i, t)
          }
          1 === e.scale.current && 1 === e.scaleX.current && 1 === e.scaleY.current || v.scale(i, i, [e.scale.current, e.scale.current, 1]), t.transform = "matrix3d(" + i[0] + "," + i[1] + "," + i[2] + "," + i[3] + "," + i[4] + "," + i[5] + "," + i[6] + "," + i[7] + "," + i[8] + "," + i[9] + "," + i[10] + "," + i[11] + "," + i[12] + "," + i[13] + "," + i[14] + "," + i[15] + ")"
        } else if (e.x.isActive || e.y.isActive || e.rotation.isActive || e.rotationZ.isActive || e.scale.isActive || e.scaleX.isActive || e.scaleY.isActive) {
          const i = this.mat2d;
          i[0] = 1, i[1] = 0, i[2] = 0, i[3] = 1, i[4] = 0, i[5] = 0;
          const s = e.x.current,
            r = e.y.current,
            n = i[0],
            o = i[1],
            a = i[2],
            h = i[3],
            l = i[4],
            c = i[5];
          if (i[0] = n, i[1] = o, i[2] = a, i[3] = h, i[4] = n * s + a * r + l, i[5] = o * s + h * r + c, 0 !== e.rotation.current || 0 !== e.rotationZ.current) {
            const t = (e.rotation.current || e.rotationZ.current) * f,
              s = i[0],
              r = i[1],
              n = i[2],
              o = i[3],
              a = i[4],
              h = i[5],
              l = Math.sin(t),
              c = Math.cos(t);
            i[0] = s * c + n * l, i[1] = r * c + o * l, i[2] = s * -l + n * c, i[3] = r * -l + o * c, i[4] = a, i[5] = h
          }
          e.scaleX.isActive || e.scaleY.isActive ? (i[0] = i[0] * e.scaleX.current, i[1] = i[1] * e.scaleX.current, i[2] = i[2] * e.scaleY.current, i[3] = i[3] * e.scaleY.current) : (i[0] = i[0] * e.scale.current, i[1] = i[1] * e.scale.current, i[2] = i[2] * e.scale.current, i[3] = i[3] * e.scale.current), t.transform = "matrix(" + i[0] + ", " + i[1] + ", " + i[2] + ", " + i[3] + ", " + i[4] + ", " + i[5] + ")"
        }
      }
      handleEventDispatch() {
        if (0 !== this.keyframesRequiringDispatch.length) {
          for (let e = 0, t = this.keyframesRequiringDispatch.length; e < t; e++) {
            let t = this.keyframesRequiringDispatch[e];
            t.needsEventDispatch = !1, this.eventObject.keyframe = t, this.eventObject.pageMetrics = s.pageMetrics, this.eventObject.event = t.event, this.trigger(t.event, this.eventObject)
          }
          this.keyframesRequiringDispatch.length = 0
        }
        if (0 !== this._events.draw.length) {
          this.eventObject.keyframe = null, this.eventObject.event = "draw";
          for (var e = this._events.draw.length - 1; e >= 0; e--) this._events.draw[e](this.eventObject)
        }
      }
      updateAnimationConstraints() {
        for (let e = 0, t = this._activeKeyframes.length; e < t; e++) this._activeKeyframes[e].evaluateConstraints();
        this.attributes.forEach(e => {
          1 !== this.keyframes[e].length && this.keyframes[e].sort(s.KeyframeComparison)
        }), this.updateDeferredPropertyValues()
      }
      refreshMetrics() {
        let e = new Set([this.element]);
        this._allKeyframes.forEach(t => t.anchors.forEach(t => e.add(t))), this.group.metrics.refreshCollection(e), this.group.keyframesDirty = !0
      }
      updateDeferredPropertyValues() {
        for (let e = 0, t = this.attributes.length; e < t; e++) {
          let t = this.attributes[e],
            i = this.keyframes[t];
          if (!(i[0].keyframeType > s.KeyframeTypes.InterpolationForward))
            for (let e = 0, s = i.length; e < s; e++) {
              let r = i[e];
              null === r.jsonProps[t][0] && (0 === e ? r.jsonProps[t][0] = r.animValues[t][0] = this.tweenProps[t].current : r.animValues[t][0] = i[e - 1].animValues[t][1]), null === r.jsonProps[t][1] && (r.animValues[t][1] = e === s - 1 ? this.tweenProps[t].current : i[e + 1].animValues[t][0]), r.snapAtCreation && (r.jsonProps[t][0] = r.animValues[t][0], r.jsonProps[t][1] = r.animValues[t][1])
            }
        }
      }
      getBounds(e) {
        this.boundsMin = Number.MAX_VALUE, this.boundsMax = -Number.MAX_VALUE;
        for (let t = 0, i = this.attributes.length; t < i; t++) {
          let i = this.keyframes[this.attributes[t]];
          for (let t = 0; t < i.length; t++) {
            let s = i[t];
            this.boundsMin = Math.min(s.start, this.boundsMin), this.boundsMax = Math.max(s.end, this.boundsMax), e.min = Math.min(s.start, e.min), e.max = Math.max(s.end, e.max)
          }
        }
      }
      getNearestKeyframeForAttribute(e, t) {
        t = void 0 !== t ? t : this.group.position.local;
        let i = null,
          s = Number.POSITIVE_INFINITY,
          r = this.keyframes[e];
        if (void 0 === r) return null;
        let n = r.length;
        if (0 === n) return null;
        if (1 === n) return r[0];
        for (let e = 0; e < n; e++) {
          let n = r[e];
          if (n.isInRange(t)) {
            i = n;
            break
          }
          let o = Math.min(Math.abs(t - n.start), Math.abs(t - n.end));
          o < s && (s = o, i = n)
        }
        return i
      }
      getAllKeyframesForAttribute(e) {
        return this.keyframes[e]
      }
      updateKeyframe(e, t) {
        e.parseOptions(t), e.evaluateConstraints(), this.group.keyframesDirty = !0, p.update(() => {
          this.trigger(s.EVENTS.ON_KEYFRAME_UPDATED, e), this.group.trigger(s.EVENTS.ON_KEYFRAME_UPDATED, e)
        }, !0)
      }
      removeKeyframe(e) {
        return e.controller !== this ? Promise.resolve(null) : (e.markedForRemoval = !0, this.group.keyframesDirty = !0, new Promise(t => {
          this.group.rafEmitter.executor.eventEmitter.once("before:draw", () => {
            t(e), e.destroy();
            let i = this._allKeyframes.indexOf(e); - 1 !== i && this._allKeyframes.splice(i, 1)
          })
        }))
      }
      updateAnimation(e, t) {
        return this.group.gui && console.warn("KeyframeController.updateAnimation(keyframe,props) has been deprecated. Please use updateKeyframe(keyframe,props)"), this.updateKeyframe(e, t)
      }
    }
  }, {
    17: 17,
    18: 18,
    21: 21,
    31: 31,
    32: 32,
    35: 35,
    36: 36,
    37: 37,
    40: 40,
    41: 41,
    44: 44,
    46: 46,
    54: 54,
    64: 64,
    7: 7,
    79: 79,
    80: 80,
    81: 81,
    82: 82,
    83: 83
  }],
  34: [function(e, t, i) {
    "use strict";
    const s = e(31),
      r = e(36),
      n = e(44);
    class o extends s {
      constructor(e, t) {
        super(e, t), this.keyframeType = r.KeyframeTypes.Event, this.isApplied = !1, this.hasDuration = !1, this.isCurrentlyInRange = !1
      }
      parseOptions(e) {
        e.x = void 0, e.y = void 0, e.scale = void 0, e.scaleX = void 0, e.scaleY = void 0, e.rotation = void 0, e.style = void 0, e.cssClass = void 0, e.rotation = void 0, e.opacity = void 0, e.hold = void 0, this.event = e.event, this.animValues[this.event] = [0, 0], void 0 === this.controller.tweenProps[this.event] && (this.controller.tweenProps[this.event] = new n(0, 1, !1)), super.parseOptions(e), this.keyframeType = r.KeyframeTypes.Event
      }
      updateLocalProgress(e) {
        if (this.hasDuration) {
          let t = this.isCurrentlyInRange,
            i = e >= this.start && e <= this.end;
          if (t === i) return;
          return this.isCurrentlyInRange = i, void(i && !t ? this._trigger(this.event + ":enter") : t && !i && this._trigger(this.event + ":exit"))
        }!this.isApplied && e >= this.start ? (this.isApplied = !0, this._trigger(this.event)) : this.isApplied && e < this.start && (this.isApplied = !1, this._trigger(this.event + ":reverse"))
      }
      _trigger(e) {
        this.controller.eventObject.event = e, this.controller.eventObject.keyframe = this, this.controller.trigger(e, this.controller.eventObject)
      }
      evaluateConstraints() {
        super.evaluateConstraints(), this.hasDuration = this.start !== this.end
      }
      reset(e) {
        this.isApplied = !1, this.isCurrentlyInRange = !1, super.reset(e)
      }
      onDOMRead(e) {}
      reconcile(e) {}
      evaluateInterpolationConstraints() {}
    }
    o.DATA_ATTRIBUTE = "data-anim-event", t.exports = o
  }, {
    31: 31,
    36: 36,
    44: 44
  }],
  35: [function(e, t, i) {
    "use strict";
    const s = e(45);
    t.exports = class {
      constructor(e, t, i = !1) {
        this.isGroup = i, this.group = e, this.controller = t, this.controllers = [], this.tweenProps = new s
      }
    }
  }, {
    45: 45
  }],
  36: [function(e, t, i) {
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
        for (let e = 0; e < s.BREAKPOINTS.length; e++) {
          let t = s.BREAKPOINTS[e];
          if (window.matchMedia(t.mediaQuery).matches) return t.name
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
      TweenProps: e(45),
      TargetValue: e(44),
      CSSTargetValue: e(37),
      pageMetrics: new function() {
        this.scrollX = 0, this.scrollY = 0, this.windowWidth = 0, this.windowHeight = 0, this.documentOffsetX = 0, this.documentOffsetY = 0, this.previousBreakpoint = "", this.breakpoint = ""
      },
      KeyframeComparison: function(e, t) {
        return e.start < t.start ? -1 : e.start > t.start ? 1 : 0
      }
    };
    t.exports = s
  }, {
    37: 37,
    44: 44,
    45: 45
  }],
  37: [function(e, t, i) {
    "use strict";
    const s = e(44);
    t.exports = class extends s {
      constructor(e, t, i, s, r = !1, n) {
        super(e, t, i), this.key = s, this.round = r, this.suffix = n
      }
      set(e) {
        let t = this.current;
        this.round && (t = Math.round(t)), this.suffix && (t += this.suffix), e[this.key] = t
      }
    }
  }, {
    44: 44
  }],
  38: [function(e, t, i) {
    "use strict";
    t.exports = new class {
      constructor() {
        this.linear = function(e) {
          return e
        }, this.easeInQuad = function(e) {
          return e * e
        }, this.easeOutQuad = function(e) {
          return e * (2 - e)
        }, this.easeInOutQuad = function(e) {
          return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
        }, this.easeInSin = function(e) {
          return 1 + Math.sin(Math.PI / 2 * e - Math.PI / 2)
        }, this.easeOutSin = function(e) {
          return Math.sin(Math.PI / 2 * e)
        }, this.easeInOutSin = function(e) {
          return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2
        }, this.easeInElastic = function(e) {
          return 0 === e ? e : (.04 - .04 / e) * Math.sin(25 * e) + 1
        }, this.easeOutElastic = function(e) {
          return .04 * e / --e * Math.sin(25 * e)
        }, this.easeInOutElastic = function(e) {
          return (e -= .5) < 0 ? (.02 + .01 / e) * Math.sin(50 * e) : (.02 - .01 / e) * Math.sin(50 * e) + 1
        }, this.easeOutBack = function(e) {
          return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
        }, this.easeInCubic = function(e) {
          return e * e * e
        }, this.easeOutCubic = function(e) {
          return --e * e * e + 1
        }, this.easeInOutCubic = function(e) {
          return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
        }, this.easeInQuart = function(e) {
          return e * e * e * e
        }, this.easeOutQuart = function(e) {
          return 1 - --e * e * e * e
        }, this.easeInOutQuart = function(e) {
          return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
        }, this.easeInQuint = function(e) {
          return e * e * e * e * e
        }, this.easeOutQuint = function(e) {
          return 1 + --e * e * e * e * e
        }, this.easeInOutQuint = function(e) {
          return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
        }
      }
    }
  }, {}],
  39: [function(e, t, i) {
    "use strict";
    const s = e(36),
      r = (e, t) => null == e ? t : e;
    class n {
      constructor(e) {
        this.top = 0, this.bottom = 0, this.left = 0, this.right = 0, this.height = 0, this.width = 0
      }
      toString() {
        return "top:".concat(this.top, ", bottom:").concat(this.bottom, ", left:").concat(this.left, ", right:").concat(this.right, ", height:").concat(this.height, ", width:").concat(this.width)
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
      add(e) {
        let t = this._metrics.get(e);
        if (t) return t;
        let i = new n(e);
        return this._metrics.set(e, i), this._refreshMetrics(e, i)
      }
      get(e) {
        return this._metrics.get(e)
      }
      refreshCollection(e) {
        e.forEach(e => this._refreshMetrics(e, null))
      }
      refreshMetrics(e) {
        return this._refreshMetrics(e)
      }
      _refreshMetrics(e, t) {
        if (t = t || this._metrics.get(e), !(e instanceof Element)) return t.width = r(e.width, 0), t.height = r(e.height, 0), t.top = r(e.top, r(e.y, 0)), t.left = r(e.left, r(e.x, 0)), t.right = t.left + t.width, t.bottom = t.top + t.height, t;
        if (void 0 === e.offsetWidth) {
          let i = e.getBoundingClientRect();
          return t.width = i.width, t.height = i.height, t.top = s.pageMetrics.scrollY + i.top, t.left = s.pageMetrics.scrollX + i.left, t.right = t.left + t.width, t.bottom = t.top + t.height, t
        }
        t.width = e.offsetWidth, t.height = e.offsetHeight, t.top = s.pageMetrics.documentOffsetY, t.left = s.pageMetrics.documentOffsetX;
        let i = e;
        for (; i;) t.top += i.offsetTop, t.left += i.offsetLeft, i = i.offsetParent;
        return t.right = t.left + t.width, t.bottom = t.top + t.height, t
      }
    }
  }, {
    36: 36
  }],
  40: [function(e, t, i) {
    "use strict";
    t.exports = class {
      constructor(e) {
        this.controller = e, this.element = this.controller.element, this.keyframe = null, this.event = "", this.tweenProps = this.controller.tweenProps
      }
    }
  }, {}],
  41: [function(e, t, i) {
    "use strict";
    const s = e(36),
      r = e(31),
      n = e(34),
      o = e(32),
      a = function(e) {
        for (let t in e) {
          let i = e[t];
          if (-1 === s.KeyframeJSONReservedWords.indexOf(t) && Array.isArray(i)) return !0
        }
        return !1
      };
    t.exports = function(e) {
      if (void 0 !== e.cssClass || void 0 !== e.style) {
        if (a(e)) throw "CSS Keyframes cannot tween values, please use multiple keyframes instead";
        return o
      }
      if (a(e)) return r;
      if (e.event) return n;
      throw delete e.anchors, "Could not determine tween type based on ".concat(JSON.stringify(e))
    }
  }, {
    31: 31,
    32: 32,
    34: 34,
    36: 36
  }],
  42: [function(e, t, i) {
    "use strict";
    t.exports = class {
      constructor() {
        this.local = 0, this.localUnclamped = 0, this.lastPosition = 0
      }
    }
  }, {}],
  43: [function(e, t, i) {
    "use strict";
    const {
      map: s
    } = e(72), r = {};
    class n {
      constructor(e, t, i, s) {
        this.mass = e, this.stiffness = t, this.damping = i, this.initialVelocity = s, this.m_w0 = Math.sqrt(this.stiffness / this.mass), this.m_zeta = this.damping / (2 * Math.sqrt(this.stiffness * this.mass)), this.m_zeta < 1 ? (this.m_wd = this.m_w0 * Math.sqrt(1 - this.m_zeta * this.m_zeta), this.m_A = 1, this.m_B = (this.m_zeta * this.m_w0 - this.initialVelocity) / this.m_wd) : (this.m_wd = 0, this.m_A = 1, this.m_B = -this.initialVelocity + this.m_w0)
      }
      solve(e) {
        return 1 - (e = this.m_zeta < 1 ? Math.exp(-e * this.m_zeta * this.m_w0) * (this.m_A * Math.cos(this.m_wd * e) + this.m_B * Math.sin(this.m_wd * e)) : (this.m_A + this.m_B * e) * Math.exp(-e * this.m_w0))
      }
    }
    const o = /\d*\.?\d+/g;
    n.fromCSSString = function(e) {
      let t = e.match(o);
      if (4 !== t.length) throw "SpringEasing could not convert ".concat(cssString, " to spring params");
      let i = t.map(Number),
        a = new n(...i);
      const h = a.solve.bind(a);
      let l = 0;
      let c = function() {
        if (r[e]) return r[e];
        let t, i = 0;
        for (;;) {
          l += 1 / 6;
          if (1 === h(l)) {
            if (i++, i >= 16) {
              t = l * (1 / 6);
              break
            }
          } else i = 0
        }
        return r[e] = t, r[e]
      }();
      return function(e) {
        return 0 === e || 1 === e ? e : h(s(e, 0, 1, 0, c))
      }
    }, t.exports = n
  }, {
    72: 72
  }],
  44: [function(e, t, i) {
    "use strict";
    t.exports = class {
      constructor(e, t, i) {
        this.epsilon = parseFloat(t), this.snapAtCreation = i, this.initialValue = e, this.target = e, this.current = e, this.previousValue = e, this.isActive = !1
      }
    }
  }, {}],
  45: [function(e, t, i) {
    "use strict";
    t.exports = class {}
  }, {}],
  46: [function(e, t, i) {
    "use strict";
    t.exports = () => Math.random().toString(16).slice(-4)
  }, {}],
  47: [function(e, t, i) {
    "use strict";
    const s = Math.abs;
    class r {
      constructor(e, t, i, s) {
        this.cp = new Float32Array(6), this.cp[0] = 3 * e, this.cp[1] = 3 * (i - e) - this.cp[0], this.cp[2] = 1 - this.cp[0] - this.cp[1], this.cp[3] = 3 * t, this.cp[4] = 3 * (s - t) - this.cp[3], this.cp[5] = 1 - this.cp[3] - this.cp[4]
      }
      sampleCurveX(e) {
        return ((this.cp[2] * e + this.cp[1]) * e + this.cp[0]) * e
      }
      sampleCurveY(e) {
        return ((this.cp[5] * e + this.cp[4]) * e + this.cp[3]) * e
      }
      sampleCurveDerivativeX(e) {
        return (3 * this.cp[2] * e + 2 * this.cp[1]) * e + this.cp[0]
      }
      solveCurveX(e) {
        var t, i, r, n, o, a;
        for (r = e, a = 0; a < 5; a++) {
          if (n = this.sampleCurveX(r) - e, s(n) < 1e-5) return r;
          if (o = this.sampleCurveDerivativeX(r), s(o) < 1e-5) break;
          r -= n / o
        }
        if ((r = e) < (t = 0)) return t;
        if (r > (i = 1)) return i;
        for (; t < i;) {
          if (n = this.sampleCurveX(r), s(n - e) < 1e-5) return r;
          e > n ? t = r : i = r, r = .5 * (i - t) + t
        }
        return r
      }
      solve(e) {
        return this.sampleCurveY(this.solveCurveX(e))
      }
    }
    const n = /\d*\.?\d+/g;
    r.fromCSSString = function(e) {
      let t = e.match(n);
      if (4 !== t.length) throw "UnitBezier could not convert ".concat(e, " to cubic-bezier");
      let i = t.map(Number),
        s = new r(i[0], i[1], i[2], i[3]);
      return s.solve.bind(s)
    }, t.exports = r
  }, {}],
  48: [function(e, t, i) {
    "use strict";
    t.exports = class {
      constructor(e, t) {
        this.a = e.top - t, this.a < 0 && (this.a = e.top), this.b = e.top, this.d = e.bottom, this.c = Math.max(this.d - t, this.b)
      }
    }
  }, {}],
  49: [function(e, t, i) {
    "use strict";
    const s = e(50),
      r = new(e(39));
    class n {
      constructor(e) {
        this.group = e, this.data = {
          target: null,
          anchors: null,
          metrics: this.group.metrics
        }
      }
      parseArray(e, t) {
        return [this.parseExpression(e, t[0]), this.parseExpression(e, t[1])]
      }
      parseExpression(e, t) {
        if (!t) return null;
        if ("number" == typeof t) return t;
        if ("string" != typeof t) throw "Expression must be a string, received ".concat(typeof t, ": ").concat(t);
        return this.data.target = e.controller.element, this.data.anchors = e.anchors, this.data.keyframe = e.keyframe, n._parse(t, this.data)
      }
      parseTimeValue(e, t) {
        if ("number" == typeof t) return t;
        let i = this.group.expressionParser.parseExpression(e, t);
        return this.group.convertScrollPositionToTValue(i)
      }
      destroy() {
        this.group = null
      }
      static parse(e, t) {
        return (t = t || {}) && (r.clear(), t.target && r.add(t.target), t.anchors && t.anchors.forEach(e => r.add(e))), t.metrics = r, n._parse(e, t)
      }
      static _parse(e, t) {
        return s.Parse(e).execute(t)
      }
    }
    n.programs = s.programs, "undefined" != typeof window && (window.ExpressionParser = n), t.exports = n
  }, {
    39: 39,
    50: 50
  }],
  50: [function(e, t, i) {
    "use strict";
    const s = e(36),
      r = e(72),
      n = {},
      o = {
        smoothstep: (e, t, i) => (i = o.clamp((i - e) / (t - e), 0, 1)) * i * (3 - 2 * i),
        deg: e => 180 * e / Math.PI,
        rad: e => e * Math.PI / 180,
        random: (e, t) => Math.random() * (t - e) + e,
        atan: Math.atan2
      };
    Object.getOwnPropertyNames(Math).forEach(e => o[e] ? null : o[e.toLowerCase()] = Math[e]), Object.getOwnPropertyNames(r).forEach(e => o[e] ? null : o[e.toLowerCase()] = r[e]);
    let a = null;
    const h = "a",
      l = "ALPHA",
      c = "(",
      u = ")",
      d = "PLUS",
      m = "MINUS",
      p = "MUL",
      f = "DIV",
      g = "INTEGER_CONST",
      _ = "FLOAT_CONST",
      y = ",",
      v = "EOF",
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
        MATH_FUNCTION: new RegExp("\\b(".concat(Object.keys(o).join("|"), ")\\b"), "i")
      },
      E = function(e, t, i, s = "") {
        let r = t.slice(Math.max(i, 0), Math.min(t.length, i + 3)),
          n = new Error("Expression Error. ".concat(e, ' in expression "').concat(t, '", near "').concat(r, '"'));
        throw console.error(n.message, a ? a.keyframe || a.target : ""), n
      },
      w = {
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
      constructor(e, t) {
        this.type = e, this.value = t
      }
    }
    A.ONE = new A("100", 100), A.EOF = new A(v, null);
    class T {
      constructor(e) {
        this.type = e
      }
    }
    class x extends T {
      constructor(e, t) {
        super("UnaryOp"), this.token = this.op = e, this.expr = t
      }
    }
    class S extends T {
      constructor(e, t, i) {
        super("BinOp"), this.left = e, this.op = t, this.right = i
      }
    }
    class P extends T {
      constructor(e, t) {
        if (super("MathOp"), this.op = e, this.list = t, w[e.value] && t.length !== w[e.value]) throw new Error("Incorrect number of arguments for '".concat(e.value, "'. Received ").concat(t.length, ", expected ").concat(w[e.value]))
      }
    }
    class O extends T {
      constructor(e) {
        super("Num"), this.token = e, this.value = e.value
      }
    }
    class R extends T {
      constructor(e, t, i) {
        super("RefValue"), this.num = e, this.ref = t, this.unit = i
      }
    }
    class C extends T {
      constructor(e, t) {
        super("CSSValue"), this.ref = e, this.propertyName = t
      }
    }
    class I extends T {
      constructor(e, t) {
        super("PropValue"), this.ref = e, this.propertyName = t
      }
    }
    class k {
      constructor(e) {
        let t;
        for (this.text = e, this.pos = 0, this.char = this.text[this.pos], this.tokens = [];
          (t = this.getNextToken()) && t !== A.EOF;) this.tokens.push(t);
        this.tokens.push(t)
      }
      advance() {
        this.char = this.text[++this.pos]
      }
      skipWhiteSpace() {
        for (; null != this.char && b.WHITE_SPACE.test(this.char);) this.advance()
      }
      name() {
        let e = "";
        for (; null != this.char && b.ALPHA.test(this.char);) e += this.char, this.advance();
        return new A(l, e)
      }
      number() {
        let e = "";
        for ("." === this.char && (e += this.char, this.advance()); null != this.char && b.DIGIT.test(this.char);) e += this.char, this.advance();
        if (null != this.char && "." === this.char)
          for (e.includes(".") && E("Number appears to contain 2 decimal points", this.text, this.pos), e += this.char, this.advance(); null != this.char && b.DIGIT.test(this.char);) e += this.char, this.advance();
        return "." === e && E("Attempted to parse a number, but found only a decimal point", this.text, this.pos), e.includes(".") ? new A(_, parseFloat(e)) : new A(g, parseInt(e))
      }
      getNextToken() {
        for (; null != this.char;)
          if (b.WHITE_SPACE.test(this.char)) this.skipWhiteSpace();
          else {
            if ("." === this.char || b.DIGIT.test(this.char)) return this.number();
            if ("," === this.char) return this.advance(), new A(y, ",");
            if (b.OPERATOR.test(this.char)) {
              let e = "",
                t = this.char;
              switch (t) {
                case "+":
                  e = d;
                  break;
                case "-":
                  e = m;
                  break;
                case "*":
                  e = p;
                  break;
                case "/":
                  e = f
              }
              return this.advance(), new A(e, t)
            }
            if (b.PAREN.test(this.char)) {
              let e = "",
                t = this.char;
              switch (t) {
                case "(":
                  e = c;
                  break;
                case ")":
                  e = u
              }
              return this.advance(), new A(e, t)
            }
            if (b.ALPHA.test(this.char)) return this.name();
            E('Unexpected character "'.concat(this.char, '"'), this.text, this.pos)
          } return A.EOF
      }
    }
    class M {
      constructor(e) {
        this.lexer = e, this.pos = 0
      }
      get currentToken() {
        return this.lexer.tokens[this.pos]
      }
      error(e, t = "") {
        E(e, t, this.lexer.text, this.pos)
      }
      consume(e) {
        let t = this.currentToken;
        return t.type === e ? this.pos += 1 : this.error("Invalid token ".concat(this.currentToken.value, ", expected ").concat(e)), t
      }
      consumeList(e) {
        e.includes(this.currentToken) ? this.pos += 1 : this.error("Invalid token ".concat(this.currentToken.value, ", expected ").concat(tokenType))
      }
      expr() {
        let e = this.term();
        for (; this.currentToken.type === d || this.currentToken.type === m;) {
          const t = this.currentToken;
          switch (t.value) {
            case "+":
              this.consume(d);
              break;
            case "-":
              this.consume(m)
          }
          e = new S(e, t, this.term())
        }
        return e
      }
      term() {
        let e = this.factor();
        for (; this.currentToken.type === p || this.currentToken.type === f;) {
          const t = this.currentToken;
          switch (t.value) {
            case "*":
              this.consume(p);
              break;
            case "/":
              this.consume(f)
          }
          e = new S(e, t, this.factor())
        }
        return e
      }
      factor() {
        if (this.currentToken.type === d) return new x(this.consume(d), this.factor());
        if (this.currentToken.type === m) return new x(this.consume(m), this.factor());
        if (this.currentToken.type === g || this.currentToken.type === _) {
          let e = new O(this.currentToken);
          if (this.pos += 1, b.OPERATOR.test(this.currentToken.value) || this.currentToken.type === u || this.currentToken.type === y || this.currentToken.type === v) return e;
          if (this.currentToken.type === l && this.currentToken.value === h) return this.consume(l), new R(e, this.anchorIndex(), this.unit(b.ANY_UNIT));
          if (this.currentToken.type === l) return "%a" === this.currentToken.value && this.error("%a is invalid, try removing the %"), new R(e, null, this.unit());
          this.error("Expected a scaling unit type", "Such as 'h' / 'w'")
        } else {
          if (b.OBJECT_UNIT.test(this.currentToken.value)) return new R(new O(A.ONE), null, this.unit());
          if (this.currentToken.value === h) {
            this.consume(l);
            const e = this.anchorIndex();
            if (b.OBJECT_UNIT.test(this.currentToken.value)) return new R(new O(A.ONE), e, this.unit())
          } else if (this.currentToken.type === l) {
            if ("calc" === this.currentToken.value) return this.consume(l), this.expr();
            if ("css" === this.currentToken.value || "var" === this.currentToken.value || "prop" === this.currentToken.value) {
              const e = "prop" !== this.currentToken.value ? C : I;
              this.consume(l), this.consume(c);
              const t = this.propertyName();
              let i = null;
              return this.currentToken.type === y && (this.consume(y), this.consume(l), i = this.anchorIndex()), this.consume(u), new e(i, t)
            }
            if (b.MATH_FUNCTION.test(this.currentToken.value)) {
              const e = this.currentToken.value.toLowerCase();
              if ("number" == typeof o[e]) return this.consume(l), new O(new A(l, o[e]));
              const t = A[e] || new A(e, e),
                i = [];
              this.consume(l), this.consume(c);
              let s = null;
              do {
                this.currentToken.value === y && this.consume(y), s = this.expr(), i.push(s)
              } while (this.currentToken.value === y);
              return this.consume(u), new P(t, i)
            }
          } else if (this.currentToken.type === c) {
            this.consume(c);
            let e = this.expr();
            return this.consume(u), e
          }
        }
        this.error("Unexpected token ".concat(this.currentToken.value))
      }
      propertyName() {
        let e = "";
        for (; this.currentToken.type === l || this.currentToken.type === m;) e += this.currentToken.value, this.pos += 1;
        return e
      }
      unit(e = b.ANY_UNIT) {
        const t = this.currentToken;
        if (t.type === l && e.test(t.value)) return this.consume(l), new A(l, t.value = t.value.replace(/%(h|w)/, "$1").replace("%", "h"));
        this.error("Expected unit type")
      }
      anchorIndex() {
        const e = this.currentToken;
        if (e.type === g) return this.consume(g), new O(e);
        this.error("Invalid anchor reference", ". Should be something like a0, a1, a2")
      }
      parse() {
        const e = this.expr();
        return this.currentToken !== A.EOF && this.error("Unexpected token ".concat(this.currentToken.value)), e
      }
    }
    class D {
      constructor(e) {
        this.parser = e, this.root = e.parse()
      }
      visit(e) {
        let t = this[e.type];
        if (!t) throw new Error("No visit method named, ".concat(t));
        return t.call(this, e)
      }
      BinOp(e) {
        switch (e.op.type) {
          case d:
            return this.visit(e.left) + this.visit(e.right);
          case m:
            return this.visit(e.left) - this.visit(e.right);
          case p:
            return this.visit(e.left) * this.visit(e.right);
          case f:
            return this.visit(e.left) / this.visit(e.right)
        }
      }
      RefValue(e) {
        let t = this.unwrapReference(e),
          i = e.unit.value,
          r = e.num.value;
        const n = a.metrics.get(t);
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
      PropValue(e) {
        return (null === e.ref ? a.target : a.anchors[e.ref.value])[e.propertyName]
      }
      CSSValue(e) {
        let t = this.unwrapReference(e);
        const i = getComputedStyle(t).getPropertyValue(e.propertyName);
        return "" === i ? 0 : D.Parse(i).execute(a)
      }
      Num(e) {
        return e.value
      }
      UnaryOp(e) {
        return e.op.type === d ? +this.visit(e.expr) : e.op.type === m ? -this.visit(e.expr) : void 0
      }
      MathOp(e) {
        let t = e.list.map(e => this.visit(e));
        return o[e.op.value].apply(null, t)
      }
      unwrapReference(e) {
        return null === e.ref ? a.target : (e.ref.value >= a.anchors.length && console.error("Not enough anchors supplied for expression ".concat(this.parser.lexer.text), a.target), a.anchors[e.ref.value])
      }
      execute(e) {
        return a = e, this.visit(this.root)
      }
      static Parse(e) {
        return n[e] || (n[e] = new D(new M(new k(e))))
      }
    }
    D.programs = n, t.exports = D
  }, {
    36: 36,
    72: 72
  }],
  51: [function(e, t, i) {
    "use strict";
    const s = e(7).EventEmitterMicro,
      r = e(72),
      n = e(54),
      o = e(36),
      a = e(35),
      h = e(42),
      l = e(48),
      c = e(39),
      u = e(49),
      d = e(33),
      m = {};
    "undefined" != typeof window && (m.create = e(11), m.update = e(21), m.draw = e(17));
    let p = 0;
    t.exports = class extends s {
      constructor(e, t) {
        super(), this.anim = t, this.element = e, this.name = this.name || e.getAttribute("data-anim-scroll-group"), this.isEnabled = !0, this.position = new h, this.metrics = new c, this.metrics.add(this.element), this.expressionParser = new u(this), this.boundsMin = 0, this.boundsMax = 0, this.timelineUpdateRequired = !1, this._keyframesDirty = !1, this.viewableRange = this.createViewableRange(), this.defaultEase = o.KeyframeDefaults.ease, this.keyframeControllers = [], this.updateProgress(this.getPosition()), this.onDOMRead = this.onDOMRead.bind(this), this.onDOMWrite = this.onDOMWrite.bind(this), this.gui = null, this.finalizeInit()
      }
      finalizeInit() {
        this.element._animInfo = new a(this, null, !0), this.setupRAFEmitter()
      }
      destroy() {
        this.destroyed = !0, this.expressionParser.destroy(), this.expressionParser = null;
        for (let e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].destroy();
        this.keyframeControllers = null, this.position = null, this.viewableRange = null, this.gui && (this.gui.destroy(), this.gui = null), this.metrics.destroy(), this.metrics = null, this.rafEmitter.destroy(), this.rafEmitter = null, this.anim = null, this.element._animInfo && this.element._animInfo.group === this && (this.element._animInfo.group = null, this.element._animInfo = null), this.element = null, this.isEnabled = !1, super.destroy()
      }
      removeKeyframeController(e) {
        return this.keyframeControllers.includes(e) ? (e._allKeyframes.forEach(e => e.markedForRemoval = !0), this.keyframesDirty = !0, new Promise(t => {
          m.draw(() => {
            const i = this.keyframeControllers.indexOf(e); - 1 !== i ? (this.keyframeControllers.splice(i, 1), e.onDOMWrite(), e.destroy(), this.gui && this.gui.create(), t()) : t()
          })
        })) : Promise.resolve()
      }
      remove() {
        return this.anim.removeGroup(this)
      }
      clear() {
        return Promise.all(this.keyframeControllers.map(e => this.removeKeyframeController(e)))
      }
      setupRAFEmitter(e) {
        this.rafEmitter && this.rafEmitter.destroy(), this.rafEmitter = e || new m.create, this.rafEmitter.on("update", this.onDOMRead), this.rafEmitter.on("draw", this.onDOMWrite), this.rafEmitter.once("external", () => this.reconcile())
      }
      requestDOMChange() {
        return !!this.isEnabled && this.rafEmitter.run()
      }
      onDOMRead() {
        this.keyframesDirty && this.onKeyframesDirty();
        for (let e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].onDOMRead(this.position.local)
      }
      onDOMWrite() {
        for (let e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].onDOMWrite();
        this.needsUpdate() && this.requestDOMChange()
      }
      needsUpdate() {
        if (this._keyframesDirty) return !0;
        for (let e = 0, t = this.keyframeControllers.length; e < t; e++)
          if (this.keyframeControllers[e].needsUpdate()) return !0;
        return !1
      }
      addKeyframe(e, t) {
        let i = this.getControllerForTarget(e);
        return null === i && (i = new d(this, e), this.keyframeControllers.push(i)), this.keyframesDirty = !0, i.addKeyframe(t)
      }
      addEvent(e, t) {
        t.event = t.event || "Generic-Event-Name-" + p++;
        let i = void 0 !== t.end && t.end !== t.start;
        const s = this.addKeyframe(e, t);
        return i ? (t.onEnterOnce && s.controller.once(t.event + ":enter", t.onEnterOnce), t.onExitOnce && s.controller.once(t.event + ":exit", t.onExitOnce), t.onEnter && s.controller.on(t.event + ":enter", t.onEnter), t.onExit && s.controller.on(t.event + ":exit", t.onExit)) : (t.onEventOnce && s.controller.once(t.event, t.onEventOnce), t.onEventReverseOnce && s.controller.once(t.event + ":reverse", t.onEventReverseOnce), t.onEvent && s.controller.on(t.event, t.onEvent), t.onEventReverse && s.controller.on(t.event + ":reverse", t.onEventReverse)), s
      }
      forceUpdate({
        waitForNextUpdate: e = !0,
        silent: t = !1
      } = {}) {
        this.isEnabled && (this.refreshMetrics(), this.timelineUpdateRequired = !0, e ? this.keyframesDirty = !0 : this.onKeyframesDirty({
          silent: t
        }))
      }
      onKeyframesDirty({
        silent: e = !1
      } = {}) {
        this.determineActiveKeyframes(), this.keyframesDirty = !1, this.metrics.refreshMetrics(this.element), this.viewableRange = this.createViewableRange();
        for (let e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].updateAnimationConstraints();
        this.updateBounds(), this.updateProgress(this.getPosition()), e || this.updateTimeline(), this.gui && this.gui.create()
      }
      refreshMetrics() {
        let e = new Set([this.element]);
        this.keyframeControllers.forEach(t => {
          e.add(t.element), t._allKeyframes.forEach(t => t.anchors.forEach(t => e.add(t)))
        }), this.metrics.refreshCollection(e), this.viewableRange = this.createViewableRange()
      }
      reconcile() {
        for (let e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].reconcile()
      }
      determineActiveKeyframes(e) {
        e = e || n(Array.from(document.documentElement.classList));
        for (let t = 0, i = this.keyframeControllers.length; t < i; t++) this.keyframeControllers[t].determineActiveKeyframes(e)
      }
      updateBounds() {
        if (0 === this.keyframeControllers.length) return this.boundsMin = 0, void(this.boundsMax = 0);
        let e = {
          min: Number.POSITIVE_INFINITY,
          max: Number.NEGATIVE_INFINITY
        };
        for (let t = 0, i = this.keyframeControllers.length; t < i; t++) this.keyframeControllers[t].getBounds(e);
        let t = this.convertTValueToScrollPosition(e.min),
          i = this.convertTValueToScrollPosition(e.max);
        i - t < o.pageMetrics.windowHeight ? (e.min = this.convertScrollPositionToTValue(t - .5 * o.pageMetrics.windowHeight), e.max = this.convertScrollPositionToTValue(i + .5 * o.pageMetrics.windowHeight)) : (e.min -= .001, e.max += .001), this.boundsMin = e.min, this.boundsMax = e.max, this.timelineUpdateRequired = !0
      }
      createViewableRange() {
        return new l(this.metrics.get(this.element), o.pageMetrics.windowHeight)
      }
      _onBreakpointChange(e, t) {
        this.keyframesDirty = !0, this.determineActiveKeyframes()
      }
      updateProgress(e) {
        this.hasDuration() ? (this.position.localUnclamped = (e - this.viewableRange.a) / (this.viewableRange.d - this.viewableRange.a), this.position.local = r.clamp(this.position.localUnclamped, this.boundsMin, this.boundsMax)) : this.position.local = this.position.localUnclamped = 0
      }
      performTimelineDispatch() {
        for (let e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].updateLocalProgress(this.position.local);
        this.trigger(o.EVENTS.ON_TIMELINE_UPDATE, this.position.local), this.trigger("update", this.position.local), this.timelineUpdateRequired = !1, this.position.lastPosition !== this.position.local && (this.position.lastPosition <= this.boundsMin && this.position.localUnclamped > this.boundsMin ? (this.trigger(o.EVENTS.ON_TIMELINE_START, this), this.trigger("start", this)) : this.position.lastPosition >= this.boundsMin && this.position.localUnclamped < this.boundsMin ? (this.trigger(o.EVENTS.ON_TIMELINE_START + ":reverse", this), this.trigger("start:reverse", this)) : this.position.lastPosition <= this.boundsMax && this.position.localUnclamped >= this.boundsMax ? (this.trigger(o.EVENTS.ON_TIMELINE_COMPLETE, this), this.trigger("complete", this)) : this.position.lastPosition >= this.boundsMax && this.position.localUnclamped < this.boundsMax && (this.trigger(o.EVENTS.ON_TIMELINE_COMPLETE + ":reverse", this), this.trigger("complete:reverse", this))), null !== this.gui && this.gui.onScrollUpdate(this.position)
      }
      updateTimeline(e) {
        if (!this.isEnabled) return !1;
        void 0 === e && (e = this.getPosition()), this.updateProgress(e);
        let t = this.position.lastPosition === this.boundsMin || this.position.lastPosition === this.boundsMax,
          i = this.position.localUnclamped === this.boundsMin || this.position.localUnclamped === this.boundsMax;
        if (!this.timelineUpdateRequired && t && i && this.position.lastPosition === e) return void(this.position.local = this.position.localUnclamped);
        if (this.timelineUpdateRequired || this.position.localUnclamped > this.boundsMin && this.position.localUnclamped < this.boundsMax) return this.performTimelineDispatch(), this.requestDOMChange(), void(this.position.lastPosition = this.position.localUnclamped);
        let s = this.position.lastPosition > this.boundsMin && this.position.lastPosition < this.boundsMax,
          r = this.position.localUnclamped <= this.boundsMin || this.position.localUnclamped >= this.boundsMax;
        if (s && r) return this.performTimelineDispatch(), this.requestDOMChange(), void(this.position.lastPosition = this.position.localUnclamped);
        const n = this.position.lastPosition < this.boundsMin && this.position.localUnclamped > this.boundsMax,
          o = this.position.lastPosition > this.boundsMax && this.position.localUnclamped < this.boundsMax;
        (n || o) && (this.performTimelineDispatch(), this.requestDOMChange(), this.position.lastPosition = this.position.localUnclamped), null !== this.gui && this.gui.onScrollUpdate(this.position)
      }
      _onScroll(e) {
        this.updateTimeline(e)
      }
      convertScrollPositionToTValue(e) {
        return this.hasDuration() ? r.map(e, this.viewableRange.a, this.viewableRange.d, 0, 1) : 0
      }
      convertTValueToScrollPosition(e) {
        return this.hasDuration() ? r.map(e, 0, 1, this.viewableRange.a, this.viewableRange.d) : 0
      }
      hasDuration() {
        return this.viewableRange.a !== this.viewableRange.d
      }
      getPosition() {
        return o.pageMetrics.scrollY
      }
      getControllerForTarget(e) {
        if (!e._animInfo || !e._animInfo.controllers) return null;
        if (e._animInfo.controller && e._animInfo.controller.group === this) return e._animInfo.controller;
        const t = e._animInfo.controllers;
        for (let e = 0, i = t.length; e < i; e++)
          if (t[e].group === this) return t[e];
        return null
      }
      trigger(e, t) {
        if (void 0 !== this._events[e])
          for (let i = this._events[e].length - 1; i >= 0; i--) void 0 !== t ? this._events[e][i](t) : this._events[e][i]()
      }
      set keyframesDirty(e) {
        this._keyframesDirty = e, this._keyframesDirty && this.requestDOMChange()
      }
      get keyframesDirty() {
        return this._keyframesDirty
      }
    }
  }, {
    11: 11,
    17: 17,
    21: 21,
    33: 33,
    35: 35,
    36: 36,
    39: 39,
    42: 42,
    48: 48,
    49: 49,
    54: 54,
    7: 7,
    72: 72
  }],
  52: [function(e, t, i) {
    "use strict";
    const s = e(51),
      r = e(30),
      n = e(72);
    let o = 0;
    const a = {};
    "undefined" != typeof window && (a.create = e(11));
    class h extends s {
      constructor(e, t) {
        e || ((e = document.createElement("div")).className = "TimeGroup-" + o++), super(e, t), this.name = this.name || e.getAttribute("data-anim-time-group"), this._isPaused = !0, this._repeats = 0, this._isReversed = !1, this._timeScale = 1, this._chapterPlayer = new r(this), this.now = performance.now()
      }
      finalizeInit() {
        if (!this.anim) throw "TimeGroup not instantiated correctly. Please use `AnimSystem.createTimeGroup(el)`";
        this.onPlayTimeUpdate = this.onPlayTimeUpdate.bind(this), super.finalizeInit()
      }
      progress(e) {
        if (void 0 === e) return 0 === this.boundsMax ? 0 : this.position.local / this.boundsMax;
        let t = e * this.boundsMax;
        this.timelineUpdateRequired = !0, this.updateTimeline(t)
      }
      time(e) {
        if (void 0 === e) return this.position.local;
        e = n.clamp(e, this.boundsMin, this.duration), this.timelineUpdateRequired = !0, this.updateTimeline(e)
      }
      play(e) {
        this.reversed(!1), this.isEnabled = !0, this._isPaused = !1, this.time(e), this.now = performance.now(), this._playheadEmitter.run()
      }
      reverse(e) {
        this.reversed(!0), this.isEnabled = !0, this._isPaused = !1, this.time(e), this.now = performance.now(), this._playheadEmitter.run()
      }
      reversed(e) {
        if (void 0 === e) return this._isReversed;
        this._isReversed = e
      }
      restart() {
        this._isReversed ? (this.progress(1), this.reverse(this.time())) : (this.progress(0), this.play(this.time()))
      }
      pause(e) {
        this.time(e), this._isPaused = !0
      }
      paused(e) {
        return void 0 === e ? this._isPaused : (this._isPaused = e, this._isPaused || this.play(), this)
      }
      onPlayTimeUpdate() {
        if (this._isPaused) return;
        let e = performance.now(),
          t = (e - this.now) / 1e3;
        this.now = e, this._isReversed && (t = -t);
        let i = this.time() + t * this._timeScale;
        if (this._repeats === h.REPEAT_FOREVER || this._repeats > 0) {
          let e = !1;
          !this._isReversed && i > this.boundsMax ? (i -= this.boundsMax, e = !0) : this._isReversed && i < 0 && (i = this.boundsMax + i, e = !0), e && (this._repeats = this._repeats === h.REPEAT_FOREVER ? h.REPEAT_FOREVER : this._repeats - 1)
        }
        this.time(i);
        let s = !this._isReversed && this.position.local !== this.duration,
          r = this._isReversed && 0 !== this.position.local;
        s || r ? this._playheadEmitter.run() : this.paused(!0)
      }
      updateProgress(e) {
        this.hasDuration() ? (this.position.localUnclamped = e, this.position.local = n.clamp(this.position.localUnclamped, this.boundsMin, this.boundsMax)) : this.position.local = this.position.localUnclamped = 0
      }
      updateBounds() {
        if (0 === this.keyframeControllers.length) return this.boundsMin = 0, void(this.boundsMax = 0);
        let e = {
          min: Number.POSITIVE_INFINITY,
          max: Number.NEGATIVE_INFINITY
        };
        for (let t = 0, i = this.keyframeControllers.length; t < i; t++) this.keyframeControllers[t].getBounds(e);
        this.boundsMin = 0, this.boundsMax = e.max, this.viewableRange.a = this.viewableRange.b = 0, this.viewableRange.c = this.viewableRange.d = this.boundsMax, this.timelineUpdateRequired = !0
      }
      setupRAFEmitter(e) {
        this._playheadEmitter = new a.create, this._playheadEmitter.on("update", this.onPlayTimeUpdate), super.setupRAFEmitter(e)
      }
      get duration() {
        return this.keyframesDirty && this.onKeyframesDirty({
          silent: !0
        }), this.boundsMax
      }
      timeScale(e) {
        return void 0 === e ? this._timeScale : (this._timeScale = e, this)
      }
      repeats(e) {
        if (void 0 === e) return this._repeats;
        this._repeats = e
      }
      getPosition() {
        return this.position.local
      }
      addChapter(e) {
        return this._chapterPlayer.addChapter(e)
      }
      playToChapter(e) {
        this._chapterPlayer.playToChapter(e)
      }
      convertScrollPositionToTValue(e) {
        return e
      }
      convertTValueToScrollPosition(e) {
        return e
      }
      hasDuration() {
        return this.duration > 0
      }
      destroy() {
        this._playheadEmitter.destroy(), this._playheadEmitter = null, super.destroy()
      }
      set timelineProgress(e) {
        this.progress(e)
      }
      get timelineProgress() {
        return this.progress()
      }
    }
    h.REPEAT_FOREVER = -1, t.exports = h
  }, {
    11: 11,
    30: 30,
    51: 51,
    72: 72
  }],
  53: [function(e, t, i) {
    "use strict";
    const s = e(51),
      r = (e(30), e(72));
    let n = 0;
    const o = {};
    "undefined" != typeof window && (o.create = e(11));
    t.exports = class extends s {
      constructor(e, t) {
        e || ((e = document.createElement("div")).className = "TweenGroup-" + n++), super(e, t), this.name = "Tweens", this.keyframes = [], this._isPaused = !1, this.now = performance.now()
      }
      finalizeInit() {
        this.onTimeEmitterUpdate = this.onTimeEmitterUpdate.bind(this), this.removeExpiredKeyframeControllers = this.removeExpiredKeyframeControllers.bind(this), super.finalizeInit()
      }
      destroy() {
        this._timeEmitter.destroy(), this._timeEmitter = null, this._keyframes = [], super.destroy()
      }
      setupRAFEmitter(e) {
        this.now = performance.now(), this._timeEmitter = new o.create, this._timeEmitter.on("update", this.onTimeEmitterUpdate), this._timeEmitter.run(), super.setupRAFEmitter(e)
      }
      addKeyframe(e, t) {
        if (void 0 !== t.start || void 0 !== t.end) throw Error("Tweens do not have a start or end, they can only have a duration. Consider using a TimeGroup instead");
        if ("number" != typeof t.duration) throw Error("Tween options.duration is undefined, or is not a number");
        let i, s;
        t.start = (t.delay || 0) + this.position.localUnclamped, t.end = t.start + t.duration, t.preserveState = !0, t.snapAtCreation = !0, e._animInfo && (i = e._animInfo.group, s = e._animInfo.controller);
        let r = super.addKeyframe(e, t);
        return e._animInfo.group = i, e._animInfo.controller = s, t.onStart && r.controller.once("draw", e => {
          e.keyframe = r, t.onStart(e), e.keyframe = null
        }), t.onDraw && r.controller.on("draw", e => {
          e.keyframe = r, t.onDraw(e), e.keyframe = null
        }), this.removeOverlappingProps(r), this.keyframes.push(r), this._timeEmitter.willRun() || (this.now = performance.now(), this._timeEmitter.run()), r
      }
      removeOverlappingProps(e) {
        if (e.controller._allKeyframes.length <= 1) return;
        let t = Object.keys(e.animValues),
          i = e.controller;
        for (let s = 0, r = i._allKeyframes.length; s < r; s++) {
          const r = i._allKeyframes[s];
          if (r === e) continue;
          if (r.markedForRemoval) continue;
          let n = Object.keys(r.animValues),
            o = n.filter(e => t.includes(e));
          o.length !== n.length ? o.forEach(e => delete r.animValues[e]) : r.markedForRemoval = !0
        }
      }
      onTimeEmitterUpdate(e) {
        if (this._isPaused || 0 === this.keyframeControllers.length) return;
        let t = performance.now(),
          i = (t - this.now) / 1e3;
        this.now = t;
        let s = this.position.local + i;
        this.position.local = this.position.localUnclamped = s, this.onTimeUpdate()
      }
      onTimeUpdate() {
        for (let e = 0, t = this.keyframes.length; e < t; e++) this.keyframes[e].updateLocalProgress(this.position.localUnclamped);
        this.requestDOMChange(), this._timeEmitter.run(), null !== this.gui && this.gui.onScrollUpdate(this.position)
      }
      onDOMRead() {
        if (this.keyframesDirty && this.onKeyframesDirty(), 0 !== this.keyframes.length)
          for (let e = 0, t = this.keyframes.length; e < t; e++) {
            this.keyframes[e].controller.needsWrite = !0;
            for (let t in this.keyframes[e].animValues) this.keyframes[e].onDOMRead(t)
          }
      }
      onDOMWrite() {
        super.onDOMWrite(), this.removeExpiredKeyframes()
      }
      removeExpiredKeyframes() {
        let e = this.keyframes.length,
          t = e;
        for (; e--;) {
          let t = this.keyframes[e];
          t.destroyed ? this.keyframes.splice(e, 1) : (t.markedForRemoval && (t.jsonProps.onComplete && 1 === t.localT && (t.controller.eventObject.keyframe = t, t.jsonProps.onComplete(t.controller.eventObject), t.jsonProps.onComplete = null), null !== this.gui && this.gui.isDraggingPlayhead || (t.remove(), this.keyframes.splice(e, 1))), 1 === t.localT && (t.markedForRemoval = !0))
        }
        this.keyframes.length === t && 0 !== this.keyframes.length || this._timeEmitter.executor.eventEmitter.once("after:draw", this.removeExpiredKeyframeControllers)
      }
      removeExpiredKeyframeControllers() {
        for (let e = 0, t = this.keyframeControllers.length; e < t; e++) {
          let t = !0,
            i = this.keyframeControllers[e];
          for (let e = 0, s = i._allKeyframes.length; e < s; e++)
            if (!i._allKeyframes[e].destroyed) {
              t = !1;
              break
            } t && i.remove()
        }
      }
      updateBounds() {
        this.boundsMin = Math.min(...this.keyframes.map(e => e.start)), this.boundsMax = Math.max(...this.keyframes.map(e => e.end))
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
      time(e) {
        if (void 0 === e) return this.position.local;
        this.position.local = this.position.localUnclamped = r.clamp(e, this.boundsMin, this.boundsMax), this.onTimeUpdate()
      }
      performTimelineDispatch() {}
      hasDuration() {
        return !0
      }
      getPosition() {
        return this.position.local
      }
      updateProgress(e) {}
      get duration() {
        return this.boundsMax
      }
    }
  }, {
    11: 11,
    30: 30,
    51: 51,
    72: 72
  }],
  54: [function(e, t, i) {
    "use strict";
    t.exports = function(e) {
      return e.reduce((e, t) => (e[t] = t, e), {})
    }
  }, {}],
  55: [function(e, t, i) {
    "use strict";
    t.exports = function(e, t) {
      if ("string" != typeof e) return e;
      try {
        return (t || document).querySelector(e) || document.querySelector(e)
      } catch (e) {
        return !1
      }
    }
  }, {}],
  56: [function(e, t, i) {
    "use strict";
    const s = e(57),
      r = e(78),
      n = e(3),
      o = Object.freeze({
        responseType: "blob"
      });
    class a {
      static convertToResolution(e) {
        return "boolean" != typeof e ? null : e ? "2x" : "1x"
      }
      static convertViewportName(e, t) {
        const i = e.toLowerCase();
        return "xl" === i && !0 === t ? "xlarge" : "l" === i || ("xl" === i || "xlarge" === i) && !0 !== t ? "large" : "m" === i ? "medium" : "s" === i ? "small" : e
      }
      constructor(e) {
        e = Object.assign({}, e), this._requestOptions = Object.assign({}, o, e.xhr), this._template = new s(e), this._evtObserver = null, this._state = {
          request: null,
          objectUrl: ""
        }, this._requestCache = new Map, this._history = [], this._openNewRequest()
      }
      get name() {
        return this._template.name
      }
      get request() {
        return this._state.request
      }
      get assetUrl() {
        return this._state.request.requestUrl
      }
      get objectUrl() {
        return this._state.objectUrl
      }
      get viewport() {
        return this._template.viewport
      }
      get resolution() {
        return this._template.resolution
      }
      get requestCache() {
        return this._requestCache
      }
      get history() {
        return this._history
      }
      load() {
        const e = this._state.request,
          t = e.xhr.response;
        let i;
        return i = !t ? e.send() : 200 === e.xhr.status ? Promise.resolve({
          response: t
        }) : Promise.reject({
          error: this._state.requestErr
        }), i.then(e => {
          let t = e.response;
          return "blob" === this._requestOptions.responseType && (this._state.objectUrl = t = window.URL.createObjectURL(e.response), this._updateHistory()), Promise.resolve(t)
        }, e => {
          let t = this._state.requestErr = e.error;
          return Promise.reject(t)
        })
      }
      change(e) {
        if ("object" != typeof e || Array.isArray(e)) return void n("AssetSource.change expects an object argument.");
        const t = e.hasOwnProperty("viewport"),
          i = e.hasOwnProperty("resolution");
        if (t || i) {
          if (t && (this._template.viewport = e.viewport), i) {
            const t = e.resolution;
            this._template.resolution = "boolean" == typeof t ? a.convertToResolution(t) : t
          }
          this._openNewRequest()
        } else n("AssetSource.change requires a viewport and/or resolution.")
      }
      abortLoad() {
        this._state.request.xhr.abort()
      }
      revokeLastObjectUrl() {
        if ("blob" === this._requestOptions.responseType) {
          const e = this._history.length - 2;
          if (e < 0) return;
          const t = this._history[e];
          window.URL.revokeObjectURL(t.objectUrl)
        }
      }
      _openNewRequest() {
        const e = "".concat(this._template.viewport, "_").concat(this._template.resolution);
        let t = this._requestCache.get(e);
        if (!t) {
          const i = this._template.generatePath();
          t = new r(i, this._requestOptions), this._requestCache.set(e, t), t.open()
        }
        this._state.request = t
      }
      _updateHistory() {
        this._history.push(Object.assign({}, this._state))
      }
      _revokeAllObjectUrls() {
        "blob" === this._requestOptions.responseType && this._history.forEach(e => {
          window.URL.revokeObjectURL(e.objectUrl)
        })
      }
    }
    t.exports = a
  }, {
    3: 3,
    57: 57,
    78: 78
  }],
  57: [function(e, t, i) {
    "use strict";
    const s = e(58),
      r = {
        isVatPath: !0
      };
    class n {
      static formatPathSegment(e) {
        let t = e.replace(/^\s*\/*\s*|\s*\/*\s*$/g, "");
        return t ? (t = t.replace(/\b\/{2,}\b/g, "/"), /\b:\/{2}\b/.test(t) ? t : "/".concat(t)) : ""
      }
      constructor(e) {
        (e = Object.assign({}, r, e)).model = e.model || s, this._model = e.model, this._isVatPath = e.isVatPath, this.viewport = "", this.resolution = "", this._pathSegmentsMap = this._createPathSegmentMap(e), this._template = this._createTemplate(this._pathSegmentsMap)
      }
      get name() {
        return this._pathSegmentsMap.get("name")
      }
      generatePath() {
        const e = this._model.TEMPLATE_PLACEHOLDERS,
          t = this.viewport;
        let i = this.resolution;
        return i && (i = "1x" === i || "" === t ? "" : "_".concat(i)), this._template.replace(e.viewport, t).replace(e.resolution, i)
      }
      _createPathSegmentMap(e) {
        const t = e.el,
          i = e.model,
          s = i.PATH_SEGMENTS,
          r = i.ATTRIBUTES,
          n = new Map;
        return Object.keys(s).forEach(i => {
          const o = r[i],
            a = o && t && t.hasAttribute(o);
          let h = a ? t.getAttribute(o) : e[i];
          "/" === h || null === h || "null" === h ? h = "" : h || a || (h = s[i]), n.set(i, h)
        }), this.viewport = n.get("viewport"), this.resolution = n.get("resolution"), n
      }
      _createTemplate(e) {
        let t = this._isVatPath ? "/105/media" : "";
        const i = this._model.TEMPLATE_PLACEHOLDERS;
        return e.forEach((e, s) => {
          e && (t += "viewport" === s ? n.formatPathSegment(i.viewport) : "resolution" === s ? i.resolution : "format" === s ? "." + e : n.formatPathSegment(e))
        }), t
      }
    }
    t.exports = n
  }, {
    58: 58
  }],
  58: [function(e, t, i) {
    "use strict";
    t.exports = {
      ATTRIBUTES: {
        locale: "data-source-locale",
        path: "data-source-path",
        name: "data-source-name",
        viewport: "data-source-viewport",
        resolution: "data-source-resolution",
        format: "data-source-format"
      },
      TEMPLATE_PLACEHOLDERS: {
        viewport: "{{viewport}}",
        resolution: "{{resolution}}"
      },
      PATH_SEGMENTS: {
        locale: "us",
        path: "",
        name: "",
        viewport: "",
        resolution: "",
        format: "mp4"
      }
    }
  }, {}],
  59: [function(e, t, i) {
    "use strict";
    const s = e(7).EventEmitterMicro,
      r = e(36),
      n = {
        create: e(11),
        update: e(21),
        draw: e(17)
      },
      o = () => {};
    let a = 0;
    t.exports = class extends s {
      constructor(e) {
        super(), this.el = e.el, this.gum = e.gum, this.componentName = e.componentName, this._keyframeController = null
      }
      destroy() {
        this.el = null, this.gum = null, this._keyframeController = null, super.destroy()
      }
      addKeyframe(e) {
        const t = e.el || this.el;
        return (e.group || this.anim).addKeyframe(t, e)
      }
      addDiscreteEvent(e) {
        e.event = e.event || "Generic-Event-Name-" + a++;
        let t = void 0 !== e.end && e.end !== e.start;
        const i = this.addKeyframe(e);
        return t ? (e.onEnterOnce && i.controller.once(e.event + ":enter", e.onEnterOnce), e.onExitOnce && i.controller.once(e.event + ":exit", e.onExitOnce), e.onEnter && i.controller.on(e.event + ":enter", e.onEnter), e.onExit && i.controller.on(e.event + ":exit", e.onExit)) : (e.onEventOnce && i.controller.once(e.event, e.onEventOnce), e.onEventReverseOnce && i.controller.once(e.event + ":reverse", e.onEventReverseOnce), e.onEvent && i.controller.on(e.event, e.onEvent), e.onEventReverse && i.controller.on(e.event + ":reverse", e.onEventReverse)), i
      }
      addRAFLoop(e) {
        let t = ["start", "end"];
        if (!t.every(t => e.hasOwnProperty(t))) return void console.log("BubbleGum.BaseComponent::addRAFLoop required options are missing: " + t.join(" "));
        const i = new n.create;
        i.on("update", e.onUpdate || o), i.on("draw", e.onDraw || o), i.on("draw", () => i.run());
        const {
          onEnter: s,
          onExit: r
        } = e;
        return e.onEnter = () => {
          i.run(), s && s()
        }, e.onExit = () => {
          i.cancel(), r && r()
        }, this.addDiscreteEvent(e)
      }
      addContinuousEvent(e) {
        e.onDraw || console.log("BubbleGum.BaseComponent::addContinuousEvent required option `onDraw` is missing. Consider using a regular keyframe if you do not need a callback"), e.event = e.event || "Generic-Event-Name-" + a++;
        let t = this.addKeyframe(e);
        return t.controller.on(e.event, e.onDraw), t
      }
      mounted() {}
      onResizeImmediate(e) {}
      onResizeDebounced(e) {}
      onBreakpointChange(e) {}
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
  }, {
    11: 11,
    17: 17,
    21: 21,
    36: 36,
    7: 7
  }],
  60: [function(e, t, i) {
    "use strict";
    const s = e(7).EventEmitterMicro,
      r = e(65),
      n = e(29),
      o = e(36),
      a = e(61),
      h = {};
    class l extends s {
      constructor(e, t = {}) {
        super(), this.el = e, this.anim = n, this.componentAttribute = t.attribute || "data-component-list", this.components = [], this.componentsInitialized = !1, this.el.getAttribute("data-anim-scroll-group") || this.el.setAttribute("data-anim-scroll-group", "bubble-gum-group"), r.add(() => {
          n.initialize().then(() => {
            this.initComponents(), this.setupEvents(), this.components.forEach(e => e.mounted()), this.trigger(l.EVENTS.DOM_COMPONENTS_MOUNTED)
          })
        })
      }
      initComponents() {
        const e = Array.prototype.slice.call(this.el.querySelectorAll("[".concat(this.componentAttribute, "]")));
        this.el.hasAttribute(this.componentAttribute) && e.push(this.el);
        for (let t = 0; t < e.length; t++) {
          let i = e[t],
            s = i.getAttribute(this.componentAttribute).split(" ");
          for (let e = 0, t = s.length; e < t; e++) {
            let t = s[e];
            "" !== t && " " !== t && this.addComponent({
              el: i,
              componentName: t
            })
          }
        }
        this.componentsInitialized = !0
      }
      setupEvents() {
        this.onResizeDebounced = this.onResizeDebounced.bind(this), this.onResizeImmediate = this.onResizeImmediate.bind(this), this.onBreakpointChange = this.onBreakpointChange.bind(this), n.on(o.PageEvents.ON_RESIZE_IMMEDIATE, this.onResizeImmediate), n.on(o.PageEvents.ON_RESIZE_DEBOUNCED, this.onResizeDebounced), n.on(o.PageEvents.ON_BREAKPOINT_CHANGE, this.onBreakpointChange)
      }
      addComponent(e) {
        const {
          el: t,
          componentName: i,
          data: s
        } = e;
        if (!a.hasOwnProperty(i)) throw "BubbleGum::addComponent could not add component to '" + t.className + "'. No component type '" + i + "' found!";
        const r = a[i];
        if (!l.componentIsSupported(r, i)) return void 0 === h[i] && (console.log("BubbleGum::addComponent unsupported component '" + i + "'. Reason: '" + i + ".IS_SUPPORTED' returned false"), h[i] = !0), null;
        let n = t.dataset.componentList || "";
        n.includes(i) || (t.dataset.componentList = n.split(" ").concat(i).join(" "));
        let c = new r({
          el: t,
          data: s,
          componentName: e.componentName,
          gum: this,
          pageMetrics: o.pageMetrics
        });
        return this.components.push(c), this.componentsInitialized && c.mounted(), c
      }
      removeComponent(e) {
        const t = this.components.indexOf(e); - 1 !== t && (this.components.splice(t, 1), e.el.dataset.componentList = e.el.dataset.componentList.split(" ").filter(t => t !== e.componentName).join(" "), e.destroy())
      }
      getComponentOfType(e, t = document.documentElement) {
        const i = "[".concat(this.componentAttribute, "*=").concat(e, "]"),
          s = t.matches(i) ? t : t.querySelector(i);
        return s ? this.components.find(t => t instanceof a[e] && t.el === s) : null
      }
      getComponentsOfType(e, t = document.documentElement) {
        const i = "[".concat(this.componentAttribute, "*=").concat(e, "]"),
          s = t.matches(i) ? [t] : Array.from(t.querySelectorAll(i));
        return this.components.filter(t => t instanceof a[e] && s.includes(t.el))
      }
      getComponentsForElement(e) {
        return this.components.filter(t => t.el === e)
      }
      onResizeImmediate() {
        this.components.forEach(e => e.onResizeImmediate(o.pageMetrics))
      }
      onResizeDebounced() {
        this.components.forEach(e => e.onResizeDebounced(o.pageMetrics))
      }
      onBreakpointChange() {
        this.components.forEach(e => e.onBreakpointChange(o.pageMetrics))
      }
      static componentIsSupported(e, t) {
        const i = e.IS_SUPPORTED;
        if (void 0 === i) return !0;
        if ("function" != typeof i) return console.error('BubbleGum::addComponent error in "' + t + '".IS_SUPPORTED - it should be a function which returns true/false'), !0;
        const s = e.IS_SUPPORTED();
        return void 0 === s ? (console.error('BubbleGum::addComponent error in "' + t + '".IS_SUPPORTED - it should be a function which returns true/false'), !0) : s
      }
    }
    l.EVENTS = {
      DOM_COMPONENTS_MOUNTED: "DOM_COMPONENTS_MOUNTED"
    }, t.exports = l
  }, {
    29: 29,
    36: 36,
    61: 61,
    65: 65,
    7: 7
  }],
  61: [function(e, t, i) {
    "use strict";
    t.exports = {
      BaseComponent: e(59)
    }
  }, {
    59: 59
  }],
  62: [function(e, t, i) {
    "use strict";
    class s {
      constructor(e) {
        this.name = e, this.playing = !1, this.requests = []
      }
      addRequest(e) {
        this.requests.push(e), this.requests.sort((e, t) => e.priority - t.priority), this.playing || (this.playing = !0, requestAnimationFrame(() => {
          this._schedule()
        }))
      }
      removeRequest(e) {
        const t = this.requests.findIndex(t => t === e); - 1 != t && this.requests.splice(t, 1).length;
        const i = e === this.currentRequest;
        i && (clearTimeout(this.currentRequestTimeout), requestAnimationFrame(() => {
          this._schedule()
        }))
      }
      _schedule() {
        if (0 !== this.requests.length) {
          var e = this.requests.shift();
          0, this.currentRequest = e, e.callback(), this.currentRequestTimeout = setTimeout(() => {
            this.currentRequest = void 0, this.currentRequestTimeout = void 0, this._schedule()
          }, 1e3 * e.duration)
        } else this.playing = !1
      }
    }
    class r {
      constructor() {
        this.buckets = {}
      }
      _requestAnimationStartWithOptions({
        bucket: e,
        duration: t,
        element: i,
        name: r,
        priority: n
      }) {
        if (void 0 !== i && (("number" != typeof(e = Math.round(i.getBoundingClientRect().top + document.documentElement.scrollTop)) || isNaN(e)) && (e = void 0), n = o(i)), void 0 === n && (n = 0), void 0 === e) {
          const e = Promise.resolve();
          return e.cancel = function() {}, e
        }
        var a;
        const h = new Promise(i => {
          this.buckets[e] || (this.buckets[e] = new s(e)), a = {
            callback: i,
            duration: t,
            name: r,
            priority: n
          }, this.buckets[e].addRequest(a)
        });
        return h.cancel = () => {
          this.buckets[e].removeRequest(a)
        }, h
      }
      requestAnimationStart(e, t, i, s) {
        var r;
        return r = "object" == typeof e && e ? e : {
          bucket: e,
          duration: t / 1e3,
          name: i,
          priority: s
        }, this._requestAnimationStartWithOptions(r)
      }
    }
    var n = new r;

    function o(e) {
      return Array.prototype.indexOf.call(e.parentElement.children, e)
    }
    t.exports = {
      CarnivalDirector: r,
      director: n,
      indexOf: o
    }
  }, {}],
  63: [function(e, t, i) {
    "use strict";
    t.exports = function(e) {
      let {
        element: t,
        attribute: i,
        defaultOptions: s
      } = e;
      const r = t.getAttribute(i) || "{}";
      let n = null;
      try {
        n = JSON.parse(r)
      } catch (e) {
        return void console.error("attributeToJSON Error! Invalid JSON in `" + i + "` for element:", t)
      }
      for (let e in s)
        if (!n.hasOwnProperty(e)) {
          if (null === s[e]) return void console.error("attributeToJSON Error! Required key `" + e + "` missing from attribute JSON `" + i + "` for element:", t);
          n[e] = s[e]
        } return n
    }
  }, {}],
  64: [function(e, t, i) {
    "use strict";
    "undefined" != typeof window && (window.DOMMatrix = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix);
    const s = 180 / Math.PI,
      r = e => Math.round(1e6 * e) / 1e6;

    function n(e) {
      return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2])
    }

    function o(e, t) {
      return 0 === t ? Array.from(e) : [e[0] / t, e[1] / t, e[2] / t]
    }

    function a(e, t) {
      return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
    }

    function h(e, t, i, s) {
      return [e[0] * i + t[0] * s, e[1] * i + t[1] * s, e[2] * i + t[2] * s]
    }

    function l(e) {
      const t = new Float32Array(4),
        i = new Float32Array(3),
        l = new Float32Array(3),
        c = new Float32Array(3);
      c[0] = e[3][0], c[1] = e[3][1], c[2] = e[3][2];
      const u = new Array(3);
      for (let t = 0; t < 3; t++) u[t] = e[t].slice(0, 3);
      i[0] = n(u[0]), u[0] = o(u[0], i[0]), l[0] = a(u[0], u[1]), u[1] = h(u[1], u[0], 1, -l[0]), i[1] = n(u[1]), u[1] = o(u[1], i[1]), l[0] /= i[1], l[1] = a(u[0], u[2]), u[2] = h(u[2], u[0], 1, -l[1]), l[2] = a(u[1], u[2]), u[2] = h(u[2], u[1], 1, -l[2]), i[2] = n(u[2]), u[2] = o(u[2], i[2]), l[1] /= i[2], l[2] /= i[2];
      const d = (m = u[1], p = u[2], [m[1] * p[2] - m[2] * p[1], m[2] * p[0] - m[0] * p[2], m[0] * p[1] - m[1] * p[0]]);
      var m, p;
      if (a(u[0], d) < 0)
        for (let e = 0; e < 3; e++) i[e] *= -1, u[e][0] *= -1, u[e][1] *= -1, u[e][2] *= -1;
      let f;
      return t[0] = .5 * Math.sqrt(Math.max(1 + u[0][0] - u[1][1] - u[2][2], 0)), t[1] = .5 * Math.sqrt(Math.max(1 - u[0][0] + u[1][1] - u[2][2], 0)), t[2] = .5 * Math.sqrt(Math.max(1 - u[0][0] - u[1][1] + u[2][2], 0)), t[3] = .5 * Math.sqrt(Math.max(1 + u[0][0] + u[1][1] + u[2][2], 0)), u[2][1] > u[1][2] && (t[0] = -t[0]), u[0][2] > u[2][0] && (t[1] = -t[1]), u[1][0] > u[0][1] && (t[2] = -t[2]), f = t[0] < .001 && t[0] >= 0 && t[1] < .001 && t[1] >= 0 ? [0, 0, r(180 * Math.atan2(u[0][1], u[0][0]) / Math.PI)] : function(e) {
        const [t, i, n, o] = e, a = t * t, h = i * i, l = n * n, c = t * i + n * o, u = o * o + a + h + l;
        return c > .49999 * u ? [0, 2 * Math.atan2(t, o) * s, 90] : c < -.49999 * u ? [0, -2 * Math.atan2(t, o) * s, -90] : [r(Math.atan2(2 * t * o - 2 * i * n, 1 - 2 * a - 2 * l) * s), r(Math.atan2(2 * i * o - 2 * t * n, 1 - 2 * h - 2 * l) * s), r(Math.asin(2 * t * i + 2 * n * o) * s)]
      }(t), {
        translation: c,
        rotation: f,
        eulerRotation: f,
        scale: [r(i[0]), r(i[1]), r(i[2])]
      }
    }
    t.exports = function(e) {
      e instanceof Element && (e = String(getComputedStyle(e).transform).trim());
      let t = new DOMMatrix(e);
      const i = new Array(4);
      for (let e = 1; e < 5; e++) {
        const s = i[e - 1] = new Float32Array(4);
        for (let i = 1; i < 5; i++) s[i - 1] = t["m".concat(e).concat(i)]
      }
      return l(i)
    }
  }, {}],
  65: [function(e, t, i) {
    "use strict";
    let s = !1,
      r = !1,
      n = [],
      o = -1;
    t.exports = {
      NUMBER_OF_FRAMES_TO_WAIT: 30,
      add: function(e) {
        if (r && e(), n.push(e), s) return;
        s = !0;
        let t = document.documentElement.scrollHeight,
          i = 0;
        const a = () => {
          let e = document.documentElement.scrollHeight;
          if (t !== e) i = 0;
          else if (i++, i >= this.NUMBER_OF_FRAMES_TO_WAIT) return void n.forEach(e => e());
          t = e, o = requestAnimationFrame(a)
        };
        o = requestAnimationFrame(a)
      },
      reset() {
        cancelAnimationFrame(o), s = !1, r = !1, n = []
      }
    }
  }, {}],
  66: [function(e, t, i) {
    "use strict";
    const s = e(71).controls,
      r = e(6);
    t.exports = class {
      constructor(e, t) {
        t = Object.assign({}, t), this._model = t.model || s, this._container = e, this._ctrls = new Map, this._state = {
          arePresent: !1
        }
      }
      get arePresent() {
        return this._state.arePresent
      }
      get allElements() {
        return this._ctrls
      }
      initialize() {
        const e = this._container;
        if (!e) return;
        const t = this._model.SELECTORS;
        Object.keys(t).forEach(i => {
          if ("container" === i) return;
          const s = t[i],
            r = e.querySelector(s);
          r && (this._ctrls.set(i, r), this._state.arePresent = !0)
        })
      }
      isPresent(e) {
        return !!this._ctrls.get(e)
      }
      getElement(e) {
        return this._ctrls.get(e) || null
      }
      enable(e) {
        this._setDisabled(e, !1)
      }
      disable(e) {
        this._setDisabled(e, !0)
      }
      _setDisabled(e, t) {
        const i = this._ctrls,
          s = (s, n) => {
            const o = i.get(s);
            o ? o.disabled = n : r("Unable to ".concat(t ? "disable" : "enable", " the ").concat(e, " control. The element does not exist."))
          };
        "string" == typeof e ? s(e, t) : Array.isArray(e) && e.forEach(e => {
          s(e, t)
        })
      }
      disableAll() {
        this._ctrls.forEach((e, t) => {
          this.disable(t)
        })
      }
      attach(e, t) {
        const i = this._ctrls.get(e);
        i && "function" == typeof t ? i.addEventListener("click", t) : r("Unable to attach ".concat(e, " control."))
      }
      remove(e, t) {
        const i = this._ctrls.get(e);
        "string" != typeof e && "function" != typeof t || !this._ctrls.get(e) ? r("Unable to remove ".concat(e, " control.")) : i.removeEventListener("click", t)
      }
    }
  }, {
    6: 6,
    71: 71
  }],
  67: [function(e, t, i) {
    "use strict";
    const s = e(71).frames,
      r = e(6);
    t.exports = class {
      constructor(e, t) {
        t = Object.assign({}, t), this._model = t.model || s, this._container = e, this._frames = new Map, this._promise = {}, this._state = {
          arePresent: !1,
          active: !1
        }
      }
      get arePresent() {
        return this._state.arePresent
      }
      get active() {
        let e = !1;
        return this._frames.forEach((t, i) => {
          const s = this.isActive(i);
          e = s || e
        }), e
      }
      isPresent(e) {
        return !!this._frames.get(e)
      }
      isActive(e) {
        return this._state[e].active
      }
      getElement(e) {
        const t = this._frames.get(e);
        return t || (r("The ".concat(e, "Frame does not appear to exist.")), null)
      }
      initialize() {
        const e = this._container;
        if (!e) return;
        const t = this._model.SELECTORS;
        Object.keys(t).forEach(i => {
          if ("container" === i) return;
          const s = t[i],
            r = e.querySelector(s);
          r && (this._frames.set(i, r), this._state.arePresent = !0, this._state[i] = {}, this._state[i].active = r.classList.contains(this._model.CLASS.active), this._state[i].hasCSSTransition = this._checkForCSSTransition(r, i), this._promise[i] = {}, this._promise[i].activate = null, this._promise[i].deactivate = null)
        })
      }
      activate(e) {
        return this._setActivity(e, !0)
      }
      deactivate(e) {
        return this._setActivity(e, !1)
      }
      deactivateAll() {
        let e = [];
        return this._frames.forEach((t, i) => {
          e.push(this.deactivate(i))
        }), Promise.all(e)
      }
      _checkForCSSTransition(e, t) {
        const i = window.getComputedStyle(e)["transition-duration"],
          s = i && "0s" !== i;
        return s || r("InlineVideo : Frames : ".concat(t ? t + "Frame" : e, " does not have a valid CSS transition for (de)activation")), s
      }
      _toggleActivity(e, t) {
        t || (t = this.getElement(e)), t.classList.toggle(this._model.CLASS.active), this._state[e].active = !this._state[e].active
      }
      _setActivity(e, t) {
        const i = this._frames.get(e);
        if (!i) return Promise.reject("The ".concat(e, "Frame element does not exist"));
        const s = t ? "activate" : "deactivate",
          r = t ? "deactivate" : "activate",
          n = this._promise[e][s];
        if (n) return n;
        return (this._promise[e][r] || Promise.resolve()).then(() => (this._promise[e][r] = null, this._promise[e][s] = new Promise((r, n) => {
          const o = this._state[e].active;
          if (!(t && !o || !t && o)) return this._promise[e][s] = null, void r();
          const a = !!i.offsetHeight;
          if (this._state[e].hasCSSTransition && a) {
            const t = () => {
              i.removeEventListener("transitionend", t), this._promise[e][s] = null, r()
            };
            i.addEventListener("transitionend", t), this._toggleActivity(e, i)
          } else this._toggleActivity(e, i), this._promise[e][s] = null, r()
        })))
      }
    }
  }, {
    6: 6,
    71: 71
  }],
  68: [function(e, t, i) {
    "use strict";
    const s = e(71).indicators,
      r = e(6);
    t.exports = class {
      constructor(e, t) {
        t = Object.assign({}, t), this._model = t.model || s, this._container = e, this._indicators = new Map, this._state = {
          arePresent: !1
        }
      }
      get arePresent() {
        return this._state.arePresent
      }
      get allElements() {
        return this._indicators
      }
      initialize() {
        const e = this._container;
        if (!e) return;
        const t = this._model.SELECTORS;
        Object.keys(t).forEach(i => {
          if ("container" === i) return;
          const s = t[i],
            r = e.querySelector(s);
          r && (this._indicators.set(i, r), this._state.arePresent = !0, this._state[i] = {}, this._state[i].active = r.classList.contains(this._model.CLASS.active))
        })
      }
      isPresent(e) {
        return !!this._indicators.get(e)
      }
      isActive(e) {
        return this._state[e].active
      }
      getElement(e) {
        return this._indicators.get(e) || null
      }
      activate(e) {
        this._setActivity(e, !1)
      }
      deactivate(e) {
        this._setActivity(e, !0)
      }
      _setActivity(e, t) {
        const i = this._indicators.get(e);
        if (!i) return void r("Unable to ".concat(t ? "deactivate" : "activate", " the ").concat(e, " indicator. The element does not exist."));
        const s = t ? "remove" : "add";
        this._state[e].active = !t, i.classList[s](this._model.CLASS.active)
      }
    }
  }, {
    6: 6,
    71: 71
  }],
  69: [function(e, t, i) {
    "use strict";
    const s = e(70),
      r = e(66),
      n = e(67),
      o = e(68),
      a = e(71),
      h = e(6),
      l = e(3);
    t.exports = class extends s {
      constructor(e, t) {
        (t = Object.assign({}, t)).model = t.model || a, t.model = Object.assign({}, t.model, t.model.video), delete t.model.video, super(e, t), this._controls = {}, this._frames = {}, this._indicators = {}, this.replay = this.replay.bind(this)
      }
      get frames() {
        return this._frames
      }
      get controls() {
        return this._controls
      }
      get indicators() {
        return this._indicators
      }
      initialize() {
        super.initialize();
        const e = this._container;
        if (!e) return void l("InlineVideo Error : A video element was passed as the containing element. InlineVideo class expects a container element holding the video, optional frames, and optional controls.");
        const t = e.querySelector(this._model.controls.SELECTORS.container),
          i = e.querySelector(this._model.frames.SELECTORS.container) || e,
          s = e.querySelector(this._model.indicators.SELECTORS.container),
          a = this._model;
        t && (this._controls = new r(t, {
          model: a.controls
        }), this._controls.initialize(), this._controls.arePresent && this._attachControls()), i && (this._frames = new n(i, {
          model: a.frames
        }), this._frames.initialize(), this._frames.arePresent || h("No inline-video frames appear to be present. At minimum, a static frame should be present for fallback.")), s && (this._indicators = new o(s, {
          model: a.indicators
        }), this._indicators.initialize())
      }
      load() {
        const e = this._indicators;
        !this.loaded && e.arePresent && e.activate("loading");
        let t = Promise.resolve();
        return this._frames.active, t.then(() => super.load())
      }
      play() {
        const e = this._frames,
          t = this._controls,
          i = e.isPresent("end") && e.isActive("end") ? e.deactivate("end") : Promise.resolve(),
          s = () => {
            this._el.removeEventListener("playing", s), t.arePresent && (t.disable(["play", "replay"]), t.enable("pause"))
          };
        return this._el.addEventListener("playing", s), i.then(() => super.play(), e => {
          h(e)
        })
      }
      pause() {
        const e = this._controls;
        return super.pause().then(() => {
          e.arePresent && (e.disable("pause"), e.enable("play"))
        }, e => {
          h(e)
        })
      }
      reset() {
        const e = this._controls;
        return super.reset().then(() => {
          e.arePresent && (e.disable("pause"), this.hasPlayed && e.isPresent("replay") ? e.enable("replay") : e.enable("play"))
        }, e => {
          h(e)
        })
      }
      replay() {
        const e = this._controls;
        return e.arePresent && (e.disable("replay"), e.enable("pause")), this.reset().then(() => this.play()).catch(e => {
          h(e)
        })
      }
      _attachControls() {
        const e = this._controls;
        e.allElements.forEach((t, i) => {
          const s = this[i];
          s ? e.attach(i, s) : h("Unable to attach ".concat(i, " control. No equivalent video method."))
        })
      }
      _onLoadSuccess(e) {
        const t = this._controls,
          i = this._frames,
          s = this._indicators;
        return super._onLoadSuccess(e).then(() => (s.arePresent && s.deactivate("loading"), t.arePresent && (this.hasPlayed && t.isPresent("replay") ? t.enable("replay") : t.enable("play")), i.arePresent ? i.deactivateAll() : Promise.resolve())).catch(e => {
          h(e)
        }).then(() => Promise.resolve())
      }
      _onLoadFailure(e) {
        const t = this._controls,
          i = this._frames,
          s = this._indicators;
        return super._onLoadFailure(e).catch(e => {}).then(() => (s.arePresent && s.deactivate("loading"), t.arePresent && t.disableAll(), i.arePresent ? i.activate("static") : Promise.resolve())).then(() => {
          const e = i.deactivate("end"),
            t = i.deactivate("start");
          return Promise.all([e, t])
        }).catch(e => {
          h(e)
        }).then(() => {
          const t = this._el;
          return t.getAttribute("src") && (t.setAttribute("src", ""), this._video.source.revokeLastObjectUrl()), Promise.reject(e)
        })
      }
      _onEnded(e) {
        const t = this._controls,
          i = this._frames;
        t.arePresent && (t.disable(["pause", "play", "replay"]), t.isPresent("replay") ? t.enable("replay") : t.enable("play"));
        return (i.isPresent("end") && !i.isActive("end") ? i.activate("end") : Promise.resolve()).catch(e => {
          h(e)
        }).then(() => super._onEnded(e))
      }
    }
  }, {
    3: 3,
    6: 6,
    66: 66,
    67: 67,
    68: 68,
    70: 70,
    71: 71
  }],
  70: [function(e, t, i) {
    "use strict";
    const s = e(71).video,
      r = e(56),
      n = e(3);
    class o {
      static convertToResolution(e) {
        return r.convertToResolution(e)
      }
      static convertViewportName(e, t) {
        return r.convertViewportName(e, t)
      }
      constructor(e, t) {
        t = Object.assign({}, t), this._model = t.model || s, delete t.model, this._options = t;
        const i = "VIDEO" === e.tagName;
        this._container = i ? null : e, this._el = i ? e : null, this._source = null, this._promise = {
          load: null,
          nativePlay: null,
          playOnEnd: null
        }, this._state = {
          loading: !1,
          hasPlayed: !1,
          assetUrl: "",
          name: ""
        }, this.load = this.load.bind(this), this.play = this.play.bind(this), this.pause = this.pause.bind(this), this.end = this.end.bind(this), this.reset = this.reset.bind(this), this._crossBrowserPlay = this._crossBrowserPlay.bind(this), this._playPromiseOnEnded = this._playPromiseOnEnded.bind(this), this._onEnded = this._onEnded.bind(this)
      }
      get el() {
        return this._el
      }
      get source() {
        return this._source
      }
      get loading() {
        return this._state.loading
      }
      get loaded() {
        return this._state.assetUrl === this._source.assetUrl
      }
      get hasPlayed() {
        return this._state.hasPlayed
      }
      get assetUrl() {
        return this._state.hasPlayed
      }
      get isPlaying() {
        const e = this._el;
        return !(!e || e.paused || e.ended || !(e.readyState > 2))
      }
      get viewport() {
        return this.source.viewport
      }
      get resolution() {
        return this.source.resolution
      }
      get normalizedDuration() {
        const e = this._el.duration,
          t = e % 1;
        return e - t + .1 * Math.ceil(t / .1)
      }
      get name() {
        return this._state.name
      }
      set name(e) {
        this._state.name = e
      }
      initialize() {
        this._container && (this._el = this._container.querySelector(this._model.SELECTORS.video)), this._options.el = this._el, this._source = new r(this._options), this._state.name = this._source.name
      }
      change(e, t = !1) {
        const i = e.viewport;
        i && !t && (e.viewport = o.convertViewportName(i)), this.source.change(e)
      }
      load() {
        return this._promise.load && this.loaded ? this._promise.load : (this._state.loading = !0, this._promise.load = this._source.load().then(e => this._onLoadSuccess(e), e => this._onLoadFailure(e)))
      }
      play() {
        if (this._promise.nativePlay || this.isPlaying) return this._promise.playOnEnd;
        let e = this._promise.load;
        return e || this.loaded || (e = this.load()), this._promise.playOnEnd = e.then(this._playPromiseOnEnded)
      }
      pause() {
        let e = this._promise.nativePlay;
        return e = e || Promise.resolve(), e.then(() => (!this._el.paused && this.loaded && this._el.pause(), Promise.resolve()), e => Promise.reject(e))
      }
      reset() {
        let e = this._promise.nativePlay;
        return e = e || Promise.resolve(), e.then(() => (this.loaded && (this._el.paused || this._el.pause(), this._el.currentTime = 0), Promise.resolve()), e => Promise.reject(e))
      }
      end() {
        return this._el.ended ? Promise.resolve() : this.pause().then(() => (this._el.currentTime = this.normalizedDuration, Promise.resolve()), e => Promise.reject(e))
      }
      _onLoadSuccess(e) {
        return new Promise((t, i) => {
          const s = () => {
            this._el.removeEventListener("loadeddata", s), this._onFirstFrameLoaded(), t()
          };
          this._el.addEventListener("loadeddata", s), this._el.setAttribute("src", e), this._el.load()
        })
      }
      _onFirstFrameLoaded() {
        this._state.assetUrl = this._source.assetUrl, this._state.loading = !1, this._source.revokeLastObjectUrl()
      }
      _onLoadFailure(e) {
        return n("inline-video load error:", e), this._state.loading = !1, Promise.reject(e)
      }
      _crossBrowserPlay() {
        const e = this._el.play();
        return e || Promise.resolve()
      }
      _playPromiseOnEnded() {
        return new Promise((e, t) => {
          this._el.onended = () => {
            this._onEnded(e)
          };
          (this._promise.nativePlay = this._crossBrowserPlay()).then(() => {
            this._state.hasPlayed = !0, this._promise.nativePlay = null
          }).catch(t)
        })
      }
      _onEnded(e) {
        return e()
      }
    }
    t.exports = o
  }, {
    3: 3,
    56: 56,
    71: 71
  }],
  71: [function(e, t, i) {
    "use strict";
    t.exports = {
      video: {
        SELECTORS: {
          video: "video",
          mediaContainer: ".inline-video-media"
        }
      },
      frames: {
        CLASS: {
          active: "active"
        },
        SELECTORS: {
          container: ".inline-video-media",
          static: ".inline-video-frame-static",
          start: ".inline-video-frame-start",
          end: ".inline-video-frame-end"
        }
      },
      controls: {
        SELECTORS: {
          container: ".inline-video-controls",
          play: ".inline-video-control-play",
          replay: ".inline-video-control-replay",
          pause: ".inline-video-control-pause",
          reset: ".inline-video-control-reset"
        }
      },
      indicators: {
        CLASS: {
          active: "active"
        },
        SELECTORS: {
          container: ".inline-video-indicators",
          loading: ".inline-video-indicator-loading"
        }
      }
    }
  }, {}],
  72: [function(e, t, i) {
    "use strict";
    t.exports = {
      lerp: function(e, t, i) {
        return t + (i - t) * e
      },
      map: function(e, t, i, s, r) {
        return s + (r - s) * (e - t) / (i - t)
      },
      mapClamp: function(e, t, i, s, r) {
        var n = s + (r - s) * (e - t) / (i - t);
        return Math.max(s, Math.min(r, n))
      },
      norm: function(e, t, i) {
        return (e - t) / (i - t)
      },
      clamp: function(e, t, i) {
        return Math.max(t, Math.min(i, e))
      },
      randFloat: function(e, t) {
        return Math.random() * (t - e) + e
      },
      randInt: function(e, t) {
        return Math.floor(Math.random() * (t - e) + e)
      }
    }
  }, {}],
  73: [function(e, t, i) {
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
  }, {}],
  74: [function(e, t, i) {
    "use strict";
    t.exports = {
      browser: [{
        name: "edge",
        userAgent: "Edge",
        version: ["rv", "Edge"],
        test: function(e) {
          return e.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === e.ua
        }
      }, {
        name: "edgeChromium",
        userAgent: "Edge",
        version: ["rv", "Edg"],
        test: function(e) {
          return e.ua.indexOf("Edg") > -1 && -1 === e.ua.indexOf("Edge")
        }
      }, {
        name: "chrome",
        userAgent: "Chrome"
      }, {
        name: "firefox",
        test: function(e) {
          return e.ua.indexOf("Firefox") > -1 && -1 === e.ua.indexOf("Opera")
        },
        version: "Firefox"
      }, {
        name: "android",
        userAgent: "Android"
      }, {
        name: "safari",
        test: function(e) {
          return e.ua.indexOf("Safari") > -1 && e.vendor.indexOf("Apple") > -1
        },
        version: "Version"
      }, {
        name: "ie",
        test: function(e) {
          return e.ua.indexOf("IE") > -1 || e.ua.indexOf("Trident") > -1
        },
        version: ["MSIE", "rv"],
        parseDocumentMode: function() {
          var e = !1;
          return document.documentMode && (e = parseInt(document.documentMode, 10)), e
        }
      }, {
        name: "opera",
        userAgent: "Opera",
        version: ["Version", "Opera"]
      }],
      os: [{
        name: "windows",
        test: function(e) {
          return e.ua.indexOf("Windows") > -1
        },
        version: "Windows NT"
      }, {
        name: "osx",
        userAgent: "Mac",
        test: function(e) {
          return e.ua.indexOf("Macintosh") > -1
        }
      }, {
        name: "ios",
        test: function(e) {
          return e.ua.indexOf("iPhone") > -1 || e.ua.indexOf("iPad") > -1
        },
        version: ["iPhone OS", "CPU OS"]
      }, {
        name: "linux",
        userAgent: "Linux",
        test: function(e) {
          return (e.ua.indexOf("Linux") > -1 || e.platform.indexOf("Linux") > -1) && -1 === e.ua.indexOf("Android")
        }
      }, {
        name: "fireos",
        test: function(e) {
          return e.ua.indexOf("Firefox") > -1 && e.ua.indexOf("Mobile") > -1
        },
        version: "rv"
      }, {
        name: "android",
        userAgent: "Android",
        test: function(e) {
          return e.ua.indexOf("Android") > -1
        }
      }, {
        name: "chromeos",
        userAgent: "CrOS"
      }]
    }
  }, {}],
  75: [function(e, t, i) {
    "use strict";
    var s = e(73),
      r = e(74);

    function n(e, t) {
      if ("function" == typeof e.parseVersion) return e.parseVersion(t);
      var i, s = e.version || e.userAgent;
      "string" == typeof s && (s = [s]);
      for (var r, n = s.length, o = 0; o < n; o++)
        if ((r = t.match((i = s[o], new RegExp(i + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")))) && r.length > 1) return r[1].replace(/_/g, ".");
      return !1
    }

    function o(e, t, i) {
      for (var s, r, o = e.length, a = 0; a < o; a++)
        if ("function" == typeof e[a].test ? !0 === e[a].test(i) && (s = e[a].name) : i.ua.indexOf(e[a].userAgent) > -1 && (s = e[a].name), s) {
          if (t[s] = !0, "string" == typeof(r = n(e[a], i.ua))) {
            var h = r.split(".");
            t.version.string = r, h && h.length > 0 && (t.version.major = parseInt(h[0] || 0), t.version.minor = parseInt(h[1] || 0), t.version.patch = parseInt(h[2] || 0))
          } else "edge" === s && (t.version.string = "12.0.0", t.version.major = "12", t.version.minor = "0", t.version.patch = "0");
          return "function" == typeof e[a].parseDocumentMode && (t.version.documentMode = e[a].parseDocumentMode()), t
        } return t
    }
    t.exports = function(e) {
      var t = {};
      return t.browser = o(r.browser, s.browser, e), t.os = o(r.os, s.os, e), t
    }
  }, {
    73: 73,
    74: 74
  }],
  76: [function(e, t, i) {
    "use strict";
    var s = {
      ua: window.navigator.userAgent,
      platform: window.navigator.platform,
      vendor: window.navigator.vendor
    };
    t.exports = e(75)(s)
  }, {
    75: 75
  }],
  77: [function(e, t, i) {
    "use strict";
    const s = e(7).EventEmitterMicro,
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
      n = "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)",
      o = "only screen and (orientation: portrait)";
    class a extends s {
      constructor(e = {}) {
        super(), this.BREAKPOINTS = e.breakpoints || r, this._setupProperties(), this._onRetinaChange = this._onRetinaChange.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), this.listenersAdded = {
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
        this.trigger(a.CHANGE_EVENTS.RETINA, this)
      }
      _onOrientationChange() {
        this.trigger(a.CHANGE_EVENTS.ORIENTATION, this)
      }
      _setupProperties() {
        Object.defineProperty(this, "retina", {
          get: () => window.matchMedia(n).matches
        }), Object.defineProperty(this, "orientation", {
          get: () => window.matchMedia(o).matches ? "portrait" : "landscape"
        }), this.viewport = this.getBreakpoint()
      }
      _setupListeners(e) {
        if (e !== a.CHANGE_EVENTS.RETINA || this.listenersAdded.retina || (window.matchMedia(n).addListener(this._onRetinaChange), this.listenersAdded.retina = !0), e !== a.CHANGE_EVENTS.ORIENTATION || this.listenersAdded.orientation || (window.matchMedia(o).addListener(this._onOrientationChange), this.listenersAdded.orientation = !0), e === a.CHANGE_EVENTS.VIEWPORT && !this.listenersAdded.viewport) {
          for (let e = 0; e < this.BREAKPOINTS.length; e++) {
            let t = this.BREAKPOINTS[e];
            window.matchMedia(t.mediaQuery).addListener(e => {
              e.matches && (this.oldViewport = this.viewport, this.viewport = t.name, this.trigger(a.CHANGE_EVENTS.VIEWPORT, this))
            })
          }
          this.listenersAdded.viewport = !0
        }
      }
      getBreakpoint() {
        for (let e = 0; e < this.BREAKPOINTS.length; e++) {
          let t = this.BREAKPOINTS[e];
          if (window.matchMedia(t.mediaQuery).matches) return t.name
        }
      }
    }
    t.exports = a
  }, {
    7: 7
  }],
  78: [function(e, t, i) {
    "use strict";
    const s = e(25),
      r = e(3),
      n = e(5),
      o = {
        requestMethod: "GET",
        timeout: 3e4
      };
    Object.freeze(o);
    const a = {
      response: null,
      xhr: null
    };
    Object.freeze(a);
    const h = {
      evt: null,
      xhr: null
    };
    Object.freeze(h);
    t.exports = class {
      static get IS_SUPPORTED() {
        const e = window.XMLHttpRequest,
          t = window.Promise;
        return e && "function" == typeof e && (t && "function" == typeof t)
      }
      static isCORSRequest(e) {
        return window.location.hostname !== s(e).hostname
      }
      constructor(e, t) {
        e || "string" == typeof e ? (this._src = s(e).href, this._opts = Object.assign({}, o, t), this._xhr = new XMLHttpRequest, this._promise = null, this._metrics = {
          progress: 0,
          totalAssetSize: null,
          time: {
            requested: null,
            load: {
              start: null,
              end: null,
              total: null
            }
          }
        }, this._onLoadStart = this._onLoadStart.bind(this), this._onProgress = this._onProgress.bind(this), this._rejectData = this._rejectData.bind(this)) : r("createXhr(src, opts), a src is required to create an XMLHttpRequest")
      }
      get xhr() {
        return this._xhr
      }
      get requestUrl() {
        return this._src
      }
      get progress() {
        return this._metrics.progress
      }
      get totalAssetSize() {
        return this._metrics.totalAssetSize
      }
      get requestedAtTime() {
        return this._metrics.time.requested
      }
      get loadStartTime() {
        return this._metrics.time.load.start
      }
      get loadEndTime() {
        return this._metrics.time.load.end
      }
      get totalLoadTime() {
        return this._metrics.time.load.total
      }
      open() {
        0 === this._xhr.readyState && (this._xhr.open(this._opts.requestMethod, this._src, !0, this._opts.user, this._opts.password), this._setXhrProps(), n("XmlHttpRequest opened and properties set"))
      }
      send(e) {
        return e = void 0 === e ? null : e, this._promise ? this._promise : this._promise = new Promise((t, i) => {
          this._xhr.onprogress = this._onProgress, this._xhr.onloadstart = this._onLoadStart, this._xhr.onload = e => this._onLoad(t, i, e), this._xhr.ontimeout = e => this._rejectData(i, e), this._xhr.onerror = e => this._rejectData(i, e), this._xhr.onabort = e => this._rejectData(i, e), this._metrics.time.requested = Date.now(), this._xhr.send(e), n("XmlHttpRequest sent")
        })
      }
      destroy() {
        return 4 !== this._xhr.readyState && this._xhr.abort(), this._promise = this._promise || Promise.resolve(), this._promise.then(() => {
          this._nullifyConstructorProps()
        }, () => {
          this._nullifyConstructorProps()
        }).then(() => Promise.resolve())
      }
      _nullifyConstructorProps() {
        this._src = null, this._metrics = {
          progress: null,
          totalAssetSize: null,
          time: {
            requested: null,
            load: {
              start: null,
              end: null,
              total: null
            }
          }
        }
      }
      _calcTotalLoadTime() {
        this._metrics.time.load.end = Date.now(), this._metrics.time.load.total = this._metrics.time.load.end - this._metrics.time.load.start
      }
      _setXhrProps() {
        Object.keys(this._opts).forEach(e => {
          e in this._xhr && "function" != typeof this._xhr[e] && (this._xhr[e] = this._opts[e])
        })
      }
      _onLoadStart() {
        this._metrics.time.load.start = Date.now(), this._metrics.progress = 0, n("XmlHttpRequest loading")
      }
      _onLoad(e, t, i) {
        if (200 !== this._xhr.status) return this._rejectData(t, i);
        this._calcTotalLoadTime();
        const s = Object.assign({}, a, {
          response: this._xhr.response,
          xhr: this._xhr
        });
        return n("XmlHttpRequest loaded"), e(s)
      }
      _onProgress(e) {
        this._metrics.totalAssetSize || (this._metrics.totalAssetSize = e.total), this._metrics.progress = e.total ? e.loaded / e.total : 0
      }
      _rejectData(e, t) {
        const i = Object.assign({}, h, {
          evt: t,
          xhr: this._xhr
        });
        return r("XhrRequest failed due to", i), e(i)
      }
    }
  }, {
    25: 25,
    3: 3,
    5: 5
  }],
  79: [function(e, t, i) {
    "use strict";
    t.exports = function() {
      var e = new Float32Array(16);
      return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }
  }, {}],
  80: [function(e, t, i) {
    "use strict";
    t.exports = function(e, t, i) {
      var s = Math.sin(i),
        r = Math.cos(i),
        n = t[4],
        o = t[5],
        a = t[6],
        h = t[7],
        l = t[8],
        c = t[9],
        u = t[10],
        d = t[11];
      t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]);
      return e[4] = n * r + l * s, e[5] = o * r + c * s, e[6] = a * r + u * s, e[7] = h * r + d * s, e[8] = l * r - n * s, e[9] = c * r - o * s, e[10] = u * r - a * s, e[11] = d * r - h * s, e
    }
  }, {}],
  81: [function(e, t, i) {
    "use strict";
    t.exports = function(e, t, i) {
      var s = Math.sin(i),
        r = Math.cos(i),
        n = t[0],
        o = t[1],
        a = t[2],
        h = t[3],
        l = t[8],
        c = t[9],
        u = t[10],
        d = t[11];
      t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]);
      return e[0] = n * r - l * s, e[1] = o * r - c * s, e[2] = a * r - u * s, e[3] = h * r - d * s, e[8] = n * s + l * r, e[9] = o * s + c * r, e[10] = a * s + u * r, e[11] = h * s + d * r, e
    }
  }, {}],
  82: [function(e, t, i) {
    "use strict";
    t.exports = function(e, t, i) {
      var s = Math.sin(i),
        r = Math.cos(i),
        n = t[0],
        o = t[1],
        a = t[2],
        h = t[3],
        l = t[4],
        c = t[5],
        u = t[6],
        d = t[7];
      t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]);
      return e[0] = n * r + l * s, e[1] = o * r + c * s, e[2] = a * r + u * s, e[3] = h * r + d * s, e[4] = l * r - n * s, e[5] = c * r - o * s, e[6] = u * r - a * s, e[7] = d * r - h * s, e
    }
  }, {}],
  83: [function(e, t, i) {
    "use strict";
    t.exports = function(e, t, i) {
      var s = i[0],
        r = i[1],
        n = i[2];
      return e[0] = t[0] * s, e[1] = t[1] * s, e[2] = t[2] * s, e[3] = t[3] * s, e[4] = t[4] * r, e[5] = t[5] * r, e[6] = t[6] * r, e[7] = t[7] * r, e[8] = t[8] * n, e[9] = t[9] * n, e[10] = t[10] * n, e[11] = t[11] * n, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    }
  }, {}],
  84: [function(e, t, i) {
    "use strict";
    var s = e(62),
      r = e(100);
    const n = e(59);
    t.exports = class extends n {
      constructor(e) {
        super(e), this.cancelAnimationRequest = null, this.gridItemClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.animationDuration = 4.5, this.timeGroup = this.anim.createTimeGroup(), this.timeGroup.name = "adaptive-lighting", this.scrollGroup = this.anim.getGroupForTarget(this.el), this.icon = this.el.querySelector(".adaptive-lighting-icon"), this.text = this.el.querySelector(".typography-blockquote-copy"), this.params = {
          easeFunction: "cubic-bezier(.66,0,.34,1)",
          currRGB: {
            r: 0,
            g: 0,
            b: 0
          },
          baseRGB: this._hexToRGB(window.getComputedStyle(this.el).getPropertyValue("--base-color").trim()),
          startRGB: this._hexToRGB(window.getComputedStyle(this.el).getPropertyValue("--start-color").trim()),
          endRGB: this._hexToRGB(window.getComputedStyle(this.el).getPropertyValue("--end-color").trim())
        }
      }
      mounted() {
        this._setupEvents(), this._setupTimelineKeyframes()
      }
      _setupEvents() {
        let e = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.play),
          t = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.reset);
        e.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), t.controller.on("reset:exit", () => {
          this._resetTileAnimation()
        })
      }
      _setupTimelineKeyframes() {
        const e = this.animationDuration / 3;
        this.timeGroup.addKeyframe(this.el, {
          start: 0,
          end: e,
          easeFunction: this.params.easeFunction,
          t: [0, 1],
          event: "fade-to-cool"
        }), this.timeGroup.addKeyframe(this.el, {
          start: e,
          end: 2 * e,
          easeFunction: this.params.easeFunction,
          t: [0, 1],
          event: "fade-to-warm"
        }), this.timeGroup.addKeyframe(this.el, {
          start: 2 * e,
          end: this.animationDuration,
          easeFunction: this.params.easeFunction,
          t: [0, 1],
          event: "fade-to-base"
        }), this.anim.getControllerForTarget(this.el).on("fade-to-cool", e => {
          this._updateColors(this.params.baseRGB, this.params.startRGB, e.tweenProps.t.current)
        }), this.anim.getControllerForTarget(this.el).on("fade-to-warm", e => {
          this._updateColors(this.params.startRGB, this.params.endRGB, e.tweenProps.t.current)
        }), this.anim.getControllerForTarget(this.el).on("fade-to-base", e => {
          this._updateColors(this.params.endRGB, this.params.baseRGB, e.tweenProps.t.current)
        })
      }
      _playTileAnimation() {
        let e = s.director.requestAnimationStart({
          element: this.el,
          duration: this.animationDuration
        });
        e.then(() => {
          this.timeGroup.play()
        }), this.cancelAnimationRequest = e.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.timeGroup.restart(), this.timeGroup.pause()
      }
      _hexToRGB(e) {
        e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(e, t, i, s) {
          return t + t + i + i + s + s
        }));
        let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return t ? {
          r: parseInt(t[1], 16),
          g: parseInt(t[2], 16),
          b: parseInt(t[3], 16)
        } : null
      }
      _lerpRGB(e, t, i) {
        let s = {};
        return s.r = Math.round(e.r + (t.r - e.r) * i), s.g = Math.round(e.g + (t.g - e.g) * i), s.b = Math.round(e.b + (t.b - e.b) * i), s
      }
      _updateColors(e, t, i) {
        this.params.currRGB = this._lerpRGB(e, t, i);
        let s = "rgb(".concat(this.params.currRGB.r, ", ").concat(this.params.currRGB.g, ", ").concat(this.params.currRGB.b, ")");
        return this.icon.style.background = s, this.text.style.color = s, s
      }
      static IS_SUPPORTED() {
        let e = document.documentElement;
        return !e.classList.contains("aow") && !e.classList.contains("reduced-motion")
      }
    }
  }, {
    100: 100,
    59: 59,
    62: 62
  }],
  85: [function(e, t, i) {
    "use strict";
    var s = e(62),
      r = e(100);
    const n = e(59);
    t.exports = class extends n {
      constructor(e) {
        super(e), this.cancelAnimationRequest = null, this.gridItemClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.animationDuration = 1.4, this.timeGroup = this.anim.createTimeGroup(), this.scrollGroup = this.anim.getGroupForTarget(this.el), this.svgContainer = this.el.querySelector(".charging-station-pins"), this.svg = this.svgContainer.querySelector("svg"), this.line = this.svg.querySelector("#line path"), this.pins = {
          startPinOuter: {
            el: this.svg.querySelectorAll("#dots path")[0],
            s: 0,
            d: .83,
            e: "cubic-bezier(.66, 0, .01, 1)"
          },
          startPinInner0: {
            el: this.svg.querySelectorAll("#dots path")[1],
            s: .16,
            d: .76,
            e: "cubic-bezier(.66, 0, .01, 1)"
          },
          startPinInner1: {
            el: this.svg.querySelectorAll("#dots path")[2],
            s: .33,
            d: .67,
            e: "cubic-bezier(.66, 0, .01, 1)"
          },
          pin0: {
            el: this.svg.querySelector("#ev1"),
            s: .8,
            d: .64,
            e: "cubic-bezier(.66, 0, .03, 1.31)"
          },
          pin1: {
            el: this.svg.querySelector("#ev2"),
            s: .95,
            d: .64,
            e: "cubic-bezier(.66, 0, .03, 1.31)"
          },
          pin2: {
            el: this.svg.querySelector("#ev3"),
            s: 1.1,
            d: .64,
            e: "cubic-bezier(.66, 0, .03, 1.31)"
          },
          endPin: {
            el: this.svg.querySelector("#star"),
            s: .7,
            d: .64,
            e: "cubic-bezier(.66, 0, .03, 1.31)"
          }
        }
      }
      mounted() {
        this._setupEvents(), this._setupTimelineKeyframes()
      }
      _setupEvents() {
        let e = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.play),
          t = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.reset);
        e.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), t.controller.on("reset:exit", () => {
          this._resetTileAnimation()
        })
      }
      _setupTimelineKeyframes() {
        this._addLineKeyframes();
        for (let e in this.pins) {
          let t = this.pins[e].el.getBBox(),
            i = t.x + .5 * t.width,
            s = t.y + (e.indexOf("startPin") > -1 ? .5 * t.height : t.height);
          this.pins[e].el.style.transformOrigin = "".concat(this._round(i, 2), "px ").concat(this._round(s, 2), "px"), this._addPinsKeyframes(e, this.pins[e])
        }
      }
      _playTileAnimation() {
        let e = s.director.requestAnimationStart({
          element: this.el,
          duration: this.animationDuration
        });
        e.then(() => {
          this.timeGroup.play()
        }), this.cancelAnimationRequest = e.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.timeGroup.restart(), this.timeGroup.pause()
      }
      _addLineKeyframes() {
        const e = this.line.getTotalLength() + 1,
          t = this.timeGroup.addKeyframe(this.line, {
            start: .55,
            end: 1.46,
            easeFunction: "cubic-bezier(.66, 0, .01, 1)",
            strokeDashoffset: [e, 0]
          });
        this.line.style.strokeDasharray = e, this.line.style.strokeDashoffset = e, t.controller.on("draw", e => {
          this.line.style.strokeDashoffset = e.tweenProps.strokeDashoffset.current
        })
      }
      _addPinsKeyframes(e, t) {
        "pin0" === e ? (this.timeGroup.addKeyframe(t.el, {
          start: t.s,
          end: t.s + t.d,
          scale: [0, .5],
          easeFunction: t.e
        }), this.timeGroup.addKeyframe(t.el, {
          start: t.s + 2 * t.d,
          end: t.s + 3 * t.d,
          scale: [.5, 1],
          easeFunction: t.e
        })) : this.timeGroup.addKeyframe(t.el, {
          start: t.s,
          end: t.s + t.d,
          scale: [0, 1],
          easeFunction: t.e
        })
      }
      _round(e, t) {
        return Math.round(e * Math.pow(10, t)) / Math.pow(10, t)
      }
      static IS_SUPPORTED() {
        let e = document.documentElement;
        return !e.classList.contains("aow") && !e.classList.contains("reduced-motion")
      }
    }
  }, {
    100: 100,
    59: 59,
    62: 62
  }],
  86: [function(e, t, i) {
    "use strict";
    var s = e(9),
      r = e(62),
      n = e(100),
      o = s(e(49));
    const a = e(59),
      h = e(94),
      l = {
        viewport: "large"
      };
    t.exports = class extends a {
      constructor(e) {
        super(e), this.cancelAnimationRequest = null, this.gridItemClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.animationDuration = 4.5, this.timeGroup = this.anim.createTimeGroup(), this.timeGroup.name = "City-Level Location", this.scrollGroup = this.anim.getGroupForTarget(this.el), this.videoContainer = this.el.querySelector(".inline-video-media"), this.tileContainer = this.el.querySelector(".grid-item-content"), this.pinRipple = this.el.querySelector(".pin-ripple"), this.pinWhiteBorder = this.el.querySelector(".pin-border"), this.mapRipple = this.el.querySelector(".city-map-ripple"), this.pin = this.el.querySelector(".pin"), this.pinMask = this.el.querySelector(".map-mask"), this.rippleBorder = 12, this.cubicBezier = "cubic-bezier(.66,0,.01,1)", this.maxWidth = "366px - ".concat(2 * this.rippleBorder, "px"), this.scaledWidth = "(a0w - (css(--tile-header-padding) *2) - ".concat(2 * this.rippleBorder, "px)"), this.roundedWidth = "2 * floor(".concat(this.scaledWidth, " / 2)"), this.Expression = "min(".concat(this.maxWidth, ", ").concat(this.roundedWidth, ")"), this.inlineVideoContainer = this.el.querySelector(".inline-video"), this.inlineVideo = new h(this.inlineVideoContainer, l), this.inlineVideo.restartVideoOnBreakPoint = !1
      }
      mounted() {
        this._addFallbackListeners(), this._loadInlineVideo(), this._setWidths(), this._setupEvents(), this._setupTimelineKeyframes()
      }
      _addFallbackListeners() {
        addEventListener("gestureend", e => {
          e.scale > 1 && this._setStaticFallback()
        })
      }
      _setStaticFallback() {
        this.el.classList.contains("static") || this.el.classList.add("static")
      }
      _loadInlineVideo() {
        this.scrollGroup.addKeyframe(this.el, {
          start: "t - 200vh",
          end: "b + 200vh",
          event: "load-inline-video"
        }), this.anim.getControllerForTarget(this.el).on("load-inline-video:enter", e => {
          this.inlineVideo.load()
        })
      }
      _setWidths() {
        let e = o.default.parse("".concat(this.Expression), {
          target: this.el,
          anchors: [this.el]
        });
        this.el.style.setProperty("--maxDimensions", "".concat(e, "px"))
      }
      _setupEvents() {
        let e = this.anim.addKeyframe(this.el, n.tileTriggerKeyframeOptions.play),
          t = this.anim.addKeyframe(this.el, n.tileTriggerKeyframeOptions.reset);
        e.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), t.controller.on("reset:exit", () => {
          this._resetTileAnimation()
        })
      }
      _setupTimelineKeyframes() {
        this.timeGroup.addKeyframe(this.el, {
          progress: [0, 1],
          start: 0,
          end: 4.5
        }), this.timeGroup.addKeyframe(this.pinRipple, {
          scale: [0, 1],
          x: [null, "-50%"],
          y: [null, "-50%"],
          easeFunction: this.cubicBezier,
          start: 0,
          end: .83
        }), this.timeGroup.addKeyframe(this.pinRipple, {
          scale: [null, 0],
          easeFunction: "cubic-bezier(.99,0,.33,1)",
          start: 1.5,
          end: 2
        }), this.timeGroup.addKeyframe(this.pinWhiteBorder, {
          scale: [0, 1],
          x: [null, "-50%"],
          y: [null, "-50%"],
          easeFunction: this.cubicBezier,
          start: .16,
          end: .92
        }), this.timeGroup.addKeyframe(this.pinWhiteBorder, {
          opacity: [null, 0],
          start: 1.8,
          end: 1.81
        }), [this.pin, this.pinMask].map(e => {
          this.timeGroup.addKeyframe(e, {
            scale: [0, "22px / ".concat(this.Expression)],
            x: ["-1px * ".concat(this.Expression, " / 2"), "-1px * ".concat(this.Expression, " / 2")],
            y: ["-1px * ".concat(this.Expression, " / 2"), "-1px * ".concat(this.Expression, " / 2")],
            easeFunction: this.cubicBezier,
            anchors: [this.el],
            start: .33,
            end: 1
          }), this.timeGroup.addKeyframe(e, {
            scale: [null, 1],
            easeFunction: this.cubicBezier,
            start: 1.5,
            end: 3.5
          })
        }), this.mapRippleBorder = this.timeGroup.addKeyframe(this.mapRipple, {
          scale: ["150px / ".concat(this.Expression), 1],
          x: ["-1px * ".concat(this.Expression, " / 2"), "-1px * ".concat(this.Expression, " / 2 - ").concat(this.rippleBorder, "px")],
          y: ["-1px * ".concat(this.Expression, " / 2"), "-1px * ".concat(this.Expression, " / 2 - ").concat(this.rippleBorder, "px")],
          rippleBorder: ["0", this.rippleBorder],
          easeFunction: this.cubicBezier,
          anchors: [this.el],
          start: 1.5,
          end: 3.5
        }), this.mapRippleBorder.controller.on("draw", e => {
          let t = e.tweenProps.rippleBorder.current;
          this.el.style.setProperty("--mapRippleBorder", "".concat(t, "px"))
        }), this.timeGroup.addKeyframe(this.el, {
          rgbAlpha: [1, 0],
          easeFunction: "linear",
          start: 1.5,
          end: 3.5
        }).controller.on("draw", e => {
          let t = e.tweenProps.rgbAlpha.current;
          this.el.style.setProperty("--pinOpacity", t)
        }), this.timeGroup.addKeyframe(this.el, {
          start: 1.5,
          event: "playVideo"
        }).controller.on("playVideo", e => {
          this.inlineVideo.play()
        })
      }
      _playTileAnimation() {
        let e = r.director.requestAnimationStart({
          element: this.el,
          duration: this.animationDuration
        });
        e.then(() => {
          this.timeGroup.play()
        }), this.cancelAnimationRequest = e.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.timeGroup.restart(), this.timeGroup.pause(), this.inlineVideo.reset()
      }
      onResizeDebounced(e) {
        this._setWidths()
      }
      onBreakpointChange(e) {
        this._setStaticFallback()
      }
      static IS_SUPPORTED() {
        let e = document.documentElement;
        return !e.classList.contains("edge") && (!e.classList.contains("aow") && !e.classList.contains("reduced-motion"))
      }
    }
  }, {
    100: 100,
    49: 49,
    59: 59,
    62: 62,
    9: 9,
    94: 94
  }],
  87: [function(e, t, i) {
    "use strict";
    const s = e(59);
    class r extends s {
      constructor(e) {
        super(e)
      }
      mounted() {
        const e = document.querySelector(".notification");
        r.IS_SUPPORTED() && (e.style.transform = "translate3d(0, -150px, 0)"), this.anim.addKeyframe(this.el, {
          start: "a0t - 120vh",
          end: "a0b + 10vh",
          event: "reset-animation",
          anchors: [".animated-device"]
        }).controller.on("reset-animation:exit", () => {
          this.el.classList.remove("show")
        });
        let t = this.anim.addKeyframe(this.el, {
            start: "a0t + 70h - 100vh",
            event: "play-animation",
            anchors: [".animated-device"]
          }),
          i = this.anim.addKeyframe(this.el, {
            start: "a0t - 15h",
            event: "play-animation",
            anchors: [".animated-device"]
          });
        t.controller.on("play-animation", () => {
          this.el.classList.add("show")
        }), i.controller.on("play-animation:reverse", () => {
          this.el.classList.add("show")
        })
      }
      static IS_SUPPORTED() {
        let e = document.documentElement;
        return !e.classList.contains("aow") && !e.classList.contains("reduced-motion")
      }
    }
    t.exports = r
  }, {
    59: 59
  }],
  88: [function(e, t, i) {
    "use strict";
    var s = e(62),
      r = e(100);
    const n = e(59);
    t.exports = class extends n {
      constructor(e) {
        super(e), this.cancelAnimationRequest = null, this.gridItemClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.animationDuration = 3.1, this.timeGroup = this.anim.createTimeGroup(), this.timeGroup.name = "Device Translate Pan: ".concat(this.el.getAttribute("data-anim-name")), this.scrollGroup = this.anim.getGroupForTarget(this.el), this.device = this.el.querySelector(".translate-device"), this.scaledDeviceWidth = 578, this.direction = window.getComputedStyle(this.el).getPropertyValue("--direction").replace(/\s/g, ""), this.rtl = "ltr" == this.direction ? 1 : -1, this.tileContentWidth = "(a0w -  css(--tile-header-padding) * 2)", this.scaledDeviceRatio = "(".concat(this.tileContentWidth, " / ").concat(this.scaledDeviceWidth, "px)"), this.translationStartPosition = "(css(--image-space-side) * ".concat(this.scaledDeviceRatio, " + css(--tile-header-padding)) * ").concat(this.rtl), this.translationScalePosition = "(css(--image-space-side) + css(--tile-header-padding)) * ".concat(this.rtl), this.translationEndPosition = "ltr" == this.direction ? "a0w - css(--tile-header-padding) - ".concat(this.scaledDeviceWidth, "px + css(--image-space-side)") : "(css(--image-space-side) + css(--tile-header-padding) - (".concat(this.scaledDeviceWidth, " - ").concat(this.tileContentWidth, ")) * ").concat(this.rtl)
      }
      mounted() {
        this._setupEvents(), this._setupTimelineKeyframes()
      }
      _setupEvents() {
        let e = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.play),
          t = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.reset);
        e.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), t.controller.on("reset:exit", () => {
          this._resetTileAnimation()
        })
      }
      _setupTimelineKeyframes() {
        this.timeGroup.addKeyframe(this.device, {
          start: "0.1",
          end: "1.1",
          scale: ["".concat(this.scaledDeviceRatio), 1],
          x: [this.translationStartPosition, this.translationScalePosition],
          easeFunction: "cubic-bezier(.66,0,.2,1)",
          breakpointMask: "S",
          anchors: [this.el]
        }), this.timeGroup.addKeyframe(this.device, {
          start: "2.1",
          end: "3.1",
          x: [null, this.translationEndPosition],
          easeFunction: "cubic-bezier(.66,0,.2,1)",
          breakpointMask: "S",
          anchors: [this.el]
        }), this.timeGroup.addKeyframe(this.el, {
          start: 0,
          end: this.animationDuration,
          duration: [0, 1]
        })
      }
      _playTileAnimation() {
        let e = s.director.requestAnimationStart({
          element: this.el,
          duration: this.animationDuration
        });
        e.then(() => {
          this.timeGroup.play()
        }), this.cancelAnimationRequest = e.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.timeGroup.restart(), this.timeGroup.pause()
      }
      static IS_SUPPORTED() {
        let e = document.documentElement;
        return !e.classList.contains("aow") && !e.classList.contains("reduced-motion")
      }
    }
  }, {
    100: 100,
    59: 59,
    62: 62
  }],
  89: [function(e, t, i) {
    "use strict";
    var s = e(62),
      r = e(100);
    const n = e(59);
    t.exports = class extends n {
      constructor(e) {
        super(e), this.cancelAnimationRequest = null, this.gridItemClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.animationDuration = 1.329, this.timeGroup = this.anim.createTimeGroup(), this.scrollGroup = this.anim.getGroupForTarget(this.el), this.blockquote = this.el.querySelector(".typography-blockquote-copy"), this.startColor = window.getComputedStyle(this.el).getPropertyValue("--start-color").trim(), this.endColor = window.getComputedStyle(this.el).getPropertyValue("--end-color").trim()
      }
      mounted() {
        this._setupEvents(), this._setupTimelineKeyframes()
      }
      _setupEvents() {
        let e = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.play),
          t = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.reset);
        e.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), t.controller.on("reset:exit", () => {
          this._resetTileAnimation()
        })
      }
      _setupTimelineKeyframes() {
        this.timeGroup.addKeyframe(this.blockquote, {
          start: 0,
          end: .33,
          startFade: [100, 64.5],
          endFade: [100, 64.5],
          easeFunction: "cubic-bezier(.66, 0, 0.2, 1)",
          event: "fade-gradient"
        }), this.timeGroup.addKeyframe(this.blockquote, {
          start: .396,
          end: this.animationDuration,
          startFade: [null, 0],
          endFade: [null, 0],
          easeFunction: "cubic-bezier(.66, 0, 0.2, 1)",
          event: "fade-gradient"
        }), this.anim.getControllerForTarget(this.blockquote).on("fade-gradient", e => {
          let t = e.tweenProps.startFade.current,
            i = e.tweenProps.endFade.current;
          e.element.style.backgroundImage = "linear-gradient(\n\t\t\t\t180deg,\n\t\t\t\t".concat(this.startColor, " ").concat(parseFloat(t), "%,\n\t\t\t\t").concat(this.endColor, " ").concat(parseFloat(i), "%)")
        })
      }
      _playTileAnimation() {
        let e = s.director.requestAnimationStart({
          element: this.el,
          duration: this.animationDuration
        });
        e.then(() => {
          this.timeGroup.play()
        }), this.cancelAnimationRequest = e.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.timeGroup.restart(), this.timeGroup.pause()
      }
      static IS_SUPPORTED() {
        let e = document.documentElement;
        return !e.classList.contains("aow") && !e.classList.contains("reduced-motion")
      }
    }
  }, {
    100: 100,
    59: 59,
    62: 62
  }],
  90: [function(e, t, i) {
    "use strict";
    const s = e(59),
      r = e(63);
    t.exports = class extends s {
      constructor(e) {
        super(e), this.breakpoint = e.pageMetrics.breakpoint
      }
      mounted() {
        this.config = r({
          element: this.el,
          attribute: "data-fixed-width-config"
        }), this.resize(this.getCSSBreakpoint() || this.breakpoint)
      }
      resize(e) {
        let t = this.config[e] || null;
        this.el.style.maxWidth = t || ""
      }
      getCSSBreakpoint() {
        return window.getComputedStyle(this.el).getPropertyValue("--breakpoint").replace(/[\s"]/g, "")
      }
      onResizeDebounced(e) {
        this.breakpoint = this.getCSSBreakpoint() || e.breakpoint, this.breakpoint !== this.previousBP && (this.previousBP = this.breakpoint, this.resize(this.breakpoint))
      }
      static IS_SUPPORTED() {
        return !0
      }
    }
  }, {
    59: 59,
    63: 63
  }],
  91: [function(e, t, i) {
    "use strict";
    const s = e(59),
      r = e(29),
      n = e(49);
    let o = e(101)(),
      a = document.documentElement;
    t.exports = class extends s {
      constructor(e) {
        super(e), this.options = e, this.animationStartTimer = 800, this.timerOffset = 0, this.ratioOffset = 0, this.wallpaperRatioOffset = 0, this.fakeLoadImages = {}, this.introAssets = [this.el.querySelector(".intro-wallpaper"), this.el.querySelector(".image-icon-14")], this.phoneAssets = [this.el.querySelector(".image-dock"), this.el.querySelector(".image-top-ui"), this.el.querySelector(".image-hardware"), ...this.el.querySelectorAll(".image-side-phone"), ...this.el.querySelectorAll(".widget"), ...this.el.querySelectorAll(".chiclet")], this.sidePhone = this.phoneAssets[3].parentNode, this.chiclet = this.phoneAssets[this.phoneAssets.length - 1], this.wallpaper = this.el.querySelector(".screen-wrap"), this.centerPhone = this.el.querySelector(".center-phone"), this.wallpaperSpecs = {
          width: this.wallpaper.clientWidth,
          height: this.wallpaper.clientHeight,
          get ratio() {
            return this.width / this.height
          }
        }, this.animCSSvar = "--hero-scale", this.wallpaperScale = "--wallpaper-scale", this.animState = {
          centerDone: "hero-center-phone-animation-done",
          sidesDone: "hero-side-phones-animation-done",
          assetsDone: "hero-intro-assets-loaded",
          start: "hero-animate",
          static: "hero-static"
        }, this.kfAnchors = {
          copy: this.el.querySelector(".copy-wrap"),
          lockup: this.el.querySelector(".section-hero .phone-lockup-wrap"),
          wallpaper: this.wallpaper
        }, this.heroEyebrow = this.kfAnchors.copy.querySelector(".typography-hero-eyebrow"), this.topOffset = {
          L: 180,
          M: 120,
          S: 90
        }, this.heroLoadTimedOut = !1, this.safariStatic = !1
      }
      mounted() {
        this.checkForHeroLoadTimeout(), this.waitForAssetsToLoad(this.introAssets, !0).then(() => {
          this.heroLoadTimedOut || (this.heroLoadTimedOut = !0, this.addRootClass(this.animState.assetsDone), this.scaleScreen(), this.runPhoneAnimation(), this.heroCopyKeyframes(), this.heroCopyOffset())
        })
      }
      checkForHeroLoadTimeout() {
        setTimeout(() => {
          this.heroLoadTimedOut || (this.heroLoadTimedOut = !0, this.removeRootClass("no-".concat(this.animState.static)), this.addRootClass(this.animState.static), this.el.style.setProperty(this.animCSSvar, 1), this.fakeLoadImages["intro-wallpaper"].src = "", this.fakeLoadImages["image-icon-14"].src = "")
        }, 3e3)
      }
      heroCopyKeyframes() {
        let e = "a0t + css(--r-localnav-height-stacked)";
        for (let t in this.topOffset) r.addKeyframe(this.kfAnchors.copy, {
          start: e,
          end: e,
          cssClass: "keyframe-triggered",
          toggle: !0,
          breakpointMask: t,
          anchors: [this.kfAnchors.lockup]
        });
        if (o.safari) {
          r.addKeyframe(this.kfAnchors.copy, {
            start: 0,
            end: "50vh",
            event: "resetKeyframes"
          }).controller.on("resetKeyframes:enter", () => {
            this.kfAnchors.copy.classList.remove("reset-keyframes")
          })
        }
      }
      heroCopyOffset() {
        if (!this.animTimedOut()) {
          let e = this.options.pageMetrics.breakpoint,
            t = "((a0h - a1h - ".concat(this.topOffset[e], ") / 2) * -1"),
            i = n.parse(t, {
              target: this.kfAnchors.copy,
              anchors: [this.kfAnchors.lockup, this.kfAnchors.wallpaper]
            });
          this.el.style.setProperty("--hero-copy-offset", "".concat(i, "px")), this.heroEyebrow.addEventListener("focus", () => {
            window.scrollTo(0, -1 * i)
          })
        }
      }
      waitForAssetsToLoad(e, t = !1) {
        return new Promise(i => {
          let s = e.map(e => new Promise(i => {
            let s = window.getComputedStyle(e, null).backgroundImage;
            "none" == s && (s = window.getComputedStyle(e, null).content);
            let r = s.replace(/url\(['"]?(.*?)['"]?\)/i, "$1").replace(/(\"|\')/g, ""),
              n = document.createElement("img");
            if (n.src = r, t) {
              let t = e.getAttribute("class").split(" ").join("-");
              this.fakeLoadImages["".concat(t)] = n
            }
            n.addEventListener("load", () => {
              i()
            })
          }));
          Promise.all(s).then(() => {
            i()
          })
        })
      }
      scaleScreen() {
        if (!a.classList.contains(this.animState.start) && !this.animTimedOut()) {
          let e = window.innerWidth,
            t = window.innerHeight + 100;
          this.ratioOffset = e / this.wallpaperSpecs.width, this.wallpaperRatioOffset = 1.05, this.wallpaperSpecs.ratio > e / t && (this.ratioOffset = t / this.wallpaperSpecs.height, this.wallpaperRatioOffset = t / e * this.wallpaperSpecs.ratio + .05), this.el.style.setProperty(this.animCSSvar, this.ratioOffset + .2), this.el.style.setProperty(this.wallpaperScale, this.wallpaperRatioOffset)
        }
      }
      animTimedOut() {
        return a.classList.contains(this.animState.static)
      }
      runPhoneAnimation() {
        let e = Date.now();
        this.waitForAssetsToLoad(this.phoneAssets).then(() => {
          let t = Date.now();
          this.timerOffset = t - e, this.timerOffset > this.animationStartTimer && (this.timerOffset = this.animationStartTimer), setTimeout(() => {
            this.el.style.setProperty(this.wallpaperScale, this.wallpaperSpecs.width / window.innerWidth), this.addRootClass(this.animState.start), this.el.style.setProperty(this.animCSSvar, 1), this.chiclet.addEventListener("animationend", () => {
              this.addRootClass(this.animState.centerDone), this.el.style.setProperty(this.wallpaperScale, 1)
            }), this.sidePhone.addEventListener("animationend", () => {
              this.addRootClass(this.animState.sidesDone)
            }), this.gum.anim.forceUpdate()
          }, this.animationStartTimer - this.timerOffset)
        })
      }
      addRootClass(e) {
        a.classList.add(e)
      }
      removeRootClass(e) {
        a.classList.remove(e)
      }
      onResizeImmediate() {
        this.safariStatic || this.scaleScreen()
      }
      onResizeDebounced() {
        this.safariStatic || this.heroCopyOffset()
      }
      onBreakpointChange() {
        this.safariStatic || (this.wallpaperSpecs.width = this.wallpaper.clientWidth, this.wallpaperSpecs.height = this.wallpaper.clientHeight, this.scaleScreen(), o.safari && !o.old && this.kfAnchors.copy.classList.contains("keyframe-triggered") && (this.kfAnchors.copy.classList.add("reset-keyframes"), [...this.kfAnchors.copy.querySelectorAll(".copy")].forEach(e => {
          e.style.animation = "none", setTimeout(() => {
            e.removeAttribute("style")
          }, 0)
        })), o.old && (this.safariStatic = !0, a.classList.remove("no-".concat(this.animState.static), this.animState.assetsDone, this.animState.start, this.animState.centerDone, this.animState.sidesDone), a.classList.add(this.animState.static), this.el.style.setProperty("--hero-copy-offset", "0px")))
      }
      static IS_SUPPORTED() {
        let e = a.classList.contains("reduced-motion"),
          t = a.classList.contains("aow"),
          i = a.classList.contains("edge");
        return !(e || t || i)
      }
    }
  }, {
    101: 101,
    29: 29,
    49: 49,
    59: 59
  }],
  92: [function(e, t, i) {
    "use strict";
    var s = e(9)(e(59));
    class r extends s.default {
      constructor(e) {
        super(e), this.triggers = this.el.querySelectorAll(".modal-toggle"), this.labels = this.el.querySelectorAll(".modal-cta"), this.btns = this.el.querySelectorAll(".modal-cta-text")
      }
      mounted() {
        this.triggers.forEach((e, t) => {
          let i = e.getAttribute("data-analytics-click"),
            s = e.nextElementSibling.querySelector(".modal-content");
          e.addEventListener("change", r => {
            e.checked ? (this.btns[t].setAttribute("aria-expanded", !0), e.parentElement.classList.add("expanded"), e.removeAttribute("data-analytics-click"), s.setAttribute("aria-hidden", !1)) : (this.btns[t].setAttribute("aria-expanded", !1), e.parentElement.classList.remove("expanded"), e.setAttribute("data-analytics-click", i), s.setAttribute("aria-hidden", !0))
          }), this.labels[t].addEventListener("keypress", t => {
            13 !== t.keyCode && 32 !== t.keyCode || (t.preventDefault(), e.checked = !e.checked, e.dispatchEvent(new Event("change")))
          })
        })
      }
      static IS_SUPPORTED() {
        return !0
      }
    }
    t.exports = r
  }, {
    59: 59,
    9: 9
  }],
  93: [function(e, t, i) {
    "use strict";
    var s = e(62),
      r = e(100);
    const n = e(59),
      o = e(94);
    t.exports = class extends n {
      constructor(e) {
        super(e), this.cancelAnimationRequest = null, this.gridItemClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.animationDuration = 5, this.timeGroup = this.anim.createTimeGroup(), this.scrollGroup = this.anim.getGroupForTarget(this.el), this.inlineVideoContainer = this.el.querySelector(".inline-video"), this.inlineVideo = new o(this.inlineVideoContainer), this.prefersReducedMotion = document.documentElement.classList.contains("reduced-motion")
      }
      mounted() {
        this._loadInlineVideo(), this.prefersReducedMotion || (this._setupEvents(), this._setupTimelineKeyframes())
      }
      _setupEvents() {
        let e = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.play),
          t = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.reset);
        e.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), t.controller.on("reset:exit", () => {
          this._resetTileAnimation()
        })
      }
      _setupTimelineKeyframes() {
        this.timeGroup.addKeyframe(this.inlineVideo, {
          start: .1,
          event: "play-inline-video",
          disabledWhen: "reduced-motion"
        }).controller.on("play-inline-video", () => {
          this.inlineVideo.play()
        })
      }
      _playTileAnimation() {
        let e = s.director.requestAnimationStart({
          element: this.el,
          duration: this.animationDuration
        });
        e.then(() => {
          this.inlineVideo.play()
        }), this.cancelAnimationRequest = e.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.inlineVideo.reset()
      }
      _loadInlineVideo() {
        !this.inlineVideo.video.controls.arePresent && this.prefersReducedMotion || (this.scrollGroup.addKeyframe(this.el, {
          start: "t - 200vh",
          end: "b + 200vh",
          event: "load-inline-video"
        }), this.anim.getControllerForTarget(this.el).on("load-inline-video:enter", e => {
          this.inlineVideo.load().then(() => {
            this.animationDuration = this.inlineVideo.video.normalizedDuration
          })
        }))
      }
      static IS_SUPPORTED() {
        return !document.documentElement.classList.contains("no-inline-video")
      }
    }
  }, {
    100: 100,
    59: 59,
    62: 62,
    94: 94
  }],
  94: [function(e, t, i) {
    "use strict";
    const s = e(77),
      r = e(69),
      n = e(29),
      o = new s;
    let a = "X" === o.viewport || "L" === o.viewport ? "L" : o.viewport;
    const h = {
      path: "/ios/ios-14/2020/b1dc2246-084a-4f7b-b707-1fe58d662847/",
      viewport: r.convertViewportName(a),
      resolution: r.convertToResolution(o.retina)
    };
    t.exports = class {
      constructor(e, t) {
        this.overrides = t, this.video = this._initInlineVideo(e), this.restartVideoOnBreakPoint = !0, o.on("change:viewport", () => {
          a = "X" === o.viewport || "L" === o.viewport ? "L" : o.viewport, this._onBreakpointChange()
        }), o.on("change:retina", () => {
          this._onBreakpointChange()
        })
      }
      _initInlineVideo(e) {
        let t, i = h;
        return this.overrides && (i = Object.assign({}, h, this.overrides)), t = new r(e, i), t.initialize(), t.controls.arePresent && this._setupControls(t), t
      }
      _load() {
        return this.video.load()
      }
      _play() {
        return this.video.load().then(() => {
          this.video.frames.deactivateAll().then(this.video.play())
        })
      }
      _pause() {
        return this.video.pause()
      }
      _reset() {
        return this.video.reset().then(() => {
          this.video.frames.activate("start"), this.video.frames.deactivate("end"), this.video.controls.arePresent && (this.video.controls.disableAll(), this.video.hasPlayed ? this.video.controls.enable("replay") : this.video.controls.enable("play"))
        })
      }
      _setupControls(e) {
        let t, i, s, r = e._container.querySelector(".focus-item"),
          o = e._container.querySelector(".control-button"),
          a = e._container.querySelector(".control-button .visuallyhidden span"),
          h = e.controls._container;

        function l() {
          c(), s = setTimeout(() => {
            a.innerText = h.querySelector("button:not([disabled])").innerText
          }, 250), document.activeElement !== o && document.activeElement !== r || (t = setTimeout(() => {
            h.querySelector("button:not([disabled])").focus()
          }, 300), i = setTimeout(() => {
            o.focus()
          }, 350))
        }

        function c() {
          clearTimeout(t), clearTimeout(i), clearTimeout(s)
        }
        e.controls.allElements.forEach(e => {
          e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true"), e.addEventListener("click", () => {
            setTimeout(() => {
              r.focus()
            }, 250)
          })
        }), o.addEventListener("click", () => {
          h.querySelector("button:not([disabled])").click()
        }), n.addKeyframe(o, {
          start: "b - 100vh",
          end: "b",
          event: "control-events"
        }), n.getControllerForTarget(o).on("control-events:enter", () => {
          e.el.addEventListener("pause", l), e.el.addEventListener("playing", l), e.el.addEventListener("ended", l)
        }), n.getControllerForTarget(o).on("control-events:exit", () => {
          c(), e.el.removeEventListener("pause", l), e.el.removeEventListener("playing", l), e.el.removeEventListener("ended", l), setTimeout(() => {
            a.innerText = h.querySelector("button:not([disabled])").innerText
          }, 350)
        })
      }
      _onBreakpointChange() {
        const e = a,
          t = this._shouldReloadResolution();
        let i = {};
        i.viewport = r.convertViewportName(e), t && (i.resolution = r.convertToResolution(o.retina)), this.overrides && (i = Object.assign({}, i, this.overrides)), this.video.change(i), this.video.controls.arePresent && (this.video.controls.disableAll(), this.video.hasPlayed ? this.video.controls.enable("replay") : this.video.controls.enable("play")), this.restartVideoOnBreakPoint ? this.video.frames.deactivateAll().then(() => {
          this.video.frames.activate("start").then(() => {
            this.video.load().then(() => {
              this.video.frames.deactivate("start")
            })
          })
        }) : this.video.hasPlayed && this.video.frames.activate("end")
      }
      _shouldReloadResolution() {
        return r.convertToResolution(o.retina) !== this.video.resolution
      }
      get load() {
        return this._load
      }
      get play() {
        return this._play
      }
      get pause() {
        return this._pause
      }
      get reset() {
        return this._reset
      }
      get duration() {
        return this.video.normalizedDuration
      }
      static IS_SUPPORTED() {
        return !document.documentElement.classList.contains("no-inline-video")
      }
    }
  }, {
    29: 29,
    69: 69,
    77: 77
  }],
  95: [function(e, t, i) {
    "use strict";
    var s = e(62),
      r = e(100);
    const n = e(59);
    t.exports = class extends n {
      constructor(e) {
        super(e), this.cancelAnimationRequest = null, this.gridItemClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.animationDuration = 1.1, this.timeGroup = this.anim.createTimeGroup(), this.scrollGroup = this.anim.getGroupForTarget(this.el), this.password = this.el.querySelector(".password"), this.replacementChar = "•", this.startColor = this.hexToRGB(window.getComputedStyle(this.password).getPropertyValue("--startColor").replace(/\s/g, "")), this.endColor = this.hexToRGB(window.getComputedStyle(this.password).getPropertyValue("--endColor").replace(/\s/g, "")), this.stringAnimationFrames = []
      }
      mounted() {
        this._setupString(), this._setupEvents(), this._setupTimelineKeyframes()
      }
      lerpRange(e, t, i) {
        return e * (i - t) + t
      }
      replaceChar(e, t, i) {
        return e.substr(0, t) + i + e.substr(t + 1)
      }
      hexToRGB(e) {
        e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(e, t, i, s) {
          return t + t + i + i + s + s
        }));
        let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return t ? {
          r: parseInt(t[1], 16),
          g: parseInt(t[2], 16),
          b: parseInt(t[3], 16)
        } : null
      }
      _setupString() {
        /\u00a0/g.test(this.password.innerText) && (this.password.innerText = this.password.innerText.replace(/\u00a0/g, " ")), this.stringLength = this.password.innerHTML.length, this.password.innerText = this.password.innerText.replace(" ", " "), this.originalString = this.password.innerText, this.password.innerText = this.replacementChar.repeat(this.stringLength), this.stringAnimationFrames[this.stringLength] = this.originalString;
        for (let e = this.stringLength - 1; e > -1; e--) {
          let t = this.stringAnimationFrames[e + 1],
            i = this.replaceChar(t, e, this.replacementChar);
          this.stringAnimationFrames[e] = i
        }
      }
      _setupEvents() {
        let e = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.play),
          t = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.reset);
        e.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), t.controller.on("reset:exit", () => {
          this._resetTileAnimation()
        })
      }
      _setupTimelineKeyframes() {
        this.timeGroup.addKeyframe(this.el, {
          index: [0, 1],
          red: [this.startColor.r, this.endColor.r],
          green: [this.startColor.g, this.endColor.g],
          blue: [this.startColor.b, this.endColor.b],
          start: .1,
          end: this.animationDuration
        }).controller.on("draw", e => {
          let t = Math.floor(this.lerpRange(e.tweenProps.index.current, 0, this.stringLength)),
            i = "rgb(".concat(e.tweenProps.red.current, ", ").concat(e.tweenProps.green.current, ", ").concat(e.tweenProps.blue.current, ")");
          this.password.innerText = this.stringAnimationFrames[t], this.password.style.setProperty("color", i)
        })
      }
      _playTileAnimation() {
        let e = s.director.requestAnimationStart({
          element: this.el,
          duration: this.animationDuration
        });
        e.then(() => {
          this.timeGroup.play()
        }), this.cancelAnimationRequest = e.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.timeGroup.restart(), this.timeGroup.pause()
      }
      static IS_SUPPORTED() {
        let e = document.documentElement;
        return !e.classList.contains("aow") && !e.classList.contains("reduced-motion")
      }
    }
  }, {
    100: 100,
    59: 59,
    62: 62
  }],
  96: [function(e, t, i) {
    "use strict";
    var s = e(62),
      r = e(100);
    const n = e(59),
      o = e(94);
    t.exports = class extends n {
      constructor(e) {
        super(e), this.cancelAnimationRequest = null, this.gridItemClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.animationDuration = 10.5, this.timeGroup = this.anim.createTimeGroup(), this.scrollGroup = this.anim.getGroupForTarget(this.el), this.hardware = this.el.querySelector(".hardware"), this.inlineVideoContainer = this.el.querySelector(".inline-video"), this.inlineVideo = new o(this.inlineVideoContainer), this.prefersReducedMotion = document.documentElement.classList.contains("reduced-motion"), this.zoomDuration = 1
      }
      mounted() {
        this._loadInlineVideo(), this.prefersReducedMotion || (this._setupEvents(), this._setupTimelineKeyframes(), this._setupVideoControls())
      }
      _setupEvents() {
        let e = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.play),
          t = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.reset);
        e.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), t.controller.on("reset:enter", () => {
          this.hardware.style.willChange = "transform"
        }), t.controller.on("reset:exit", () => {
          this.hardware.style.willChange = "auto", this._resetTileAnimation()
        })
      }
      _setupTimelineKeyframes() {
        this.timeGroup.addKeyframe(this.hardware, {
          start: 0,
          end: 1,
          scale: ["css(--start-scale)", 1],
          easeFunction: "cubic-bezier(0.66,0,0.2,1)"
        });
        this.timeGroup.addKeyframe(this.inlineVideo, {
          start: 1,
          event: "play-inline-video"
        }).controller.on("play-inline-video", () => {
          this.inlineVideo.play()
        })
      }
      _playTileAnimation() {
        let e = s.director.requestAnimationStart({
          element: this.el,
          duration: this.animationDuration
        });
        e.then(() => {
          this.timeGroup.play()
        }), this.cancelAnimationRequest = e.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.timeGroup.restart(), this.timeGroup.pause(), this.inlineVideo.reset()
      }
      _loadInlineVideo() {
        this.scrollGroup.addKeyframe(this.el, {
          start: "t - 200vh",
          end: "b + 200vh",
          event: "load-inline-video"
        }), this.anim.getControllerForTarget(this.el).on("load-inline-video:enter", e => {
          this.inlineVideo.load().then(() => {
            this.animationDuration = this.inlineVideo.video.normalizedDuration + this.zoomDuration
          })
        })
      }
      _setupVideoControls() {
        const e = this.inlineVideo.video.controls.getElement("replay");
        this.inlineVideo.video.controls.getElement("play").addEventListener("click", () => {
          this.timeGroup.play()
        }), e.addEventListener("click", () => {
          this.timeGroup.play()
        })
      }
      static IS_SUPPORTED() {
        return !document.documentElement.classList.contains("no-inline-video")
      }
    }
  }, {
    100: 100,
    59: 59,
    62: 62,
    94: 94
  }],
  97: [function(e, t, i) {
    "use strict";
    var s = e(62),
      r = e(100);
    const n = e(59);
    t.exports = class extends n {
      constructor(e) {
        super(e), this.cancelAnimationRequest = null, this.tileClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.powerReserveGroup = this.gum.anim.getGroupForTarget(this.el), this.powerTriggerTiming = {
          play: {
            start: "a0t - (100vh - a0h) - a1h - css(--hero-copy-offset)",
            end: "a2b",
            event: "play",
            anchors: [".grid-item-power", "figure.battery", ".grid-item-power .grid-tile-blockquote"]
          }
        }
      }
      mounted() {
        this._setupEvents();
        let e = setInterval(() => {
          document.documentElement.classList.contains("hero-intro-assets-loaded") && (clearInterval(e), this.powerReserveGroup.forceUpdate())
        }, 100)
      }
      _setupEvents() {
        let e = this.anim.addKeyframe(this.el, this.powerTriggerTiming.play),
          t = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.reset);
        e.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), t.controller.on("reset:exit", () => {
          this._resetTileAnimation()
        })
      }
      _playTileAnimation() {
        let e = s.director.requestAnimationStart({
          element: this.el,
          duration: this.tileAnimationDuration
        });
        e.then(() => {
          this.el.classList.add("fade-in")
        }), this.cancelAnimationRequest = e.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.el.classList.remove("fade-in")
      }
      static IS_SUPPORTED() {
        let e = document.documentElement;
        return !e.classList.contains("aow") && !e.classList.contains("reduced-motion")
      }
    }
  }, {
    100: 100,
    59: 59,
    62: 62
  }],
  98: [function(e, t, i) {
    "use strict";
    var s = e(62),
      r = e(100);
    const n = e(59);
    t.exports = class extends n {
      constructor(e) {
        super(e), this.cancelAnimationRequest = null, this.gridItemClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.animationDuration = 1, this.timeGroup = this.anim.createTimeGroup(), this.scrollGroup = this.anim.getGroupForTarget(this.el), this.hardware = this.el.querySelector(".hardware")
      }
      mounted() {
        this._setupEvents(), this._setupTimelineKeyframes()
      }
      _setupEvents() {
        let e = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.play),
          t = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.reset);
        e.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), t.controller.on("reset:enter", () => {
          this.hardware.style.willChange = "transform"
        }), t.controller.on("reset:exit", () => {
          this.hardware.style.willChange = "auto", this._resetTileAnimation()
        })
      }
      _setupTimelineKeyframes() {
        this.timeGroup.addKeyframe(this.hardware, {
          start: 0,
          end: this.animationDuration,
          scale: ["css(--start-scale)", 1],
          easeFunction: "cubic-bezier(0.66,0,0.2,1)"
        })
      }
      _playTileAnimation() {
        let e = s.director.requestAnimationStart({
          element: this.el,
          duration: this.animationDuration
        });
        e.then(() => {
          this.timeGroup.play()
        }), this.cancelAnimationRequest = e.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.timeGroup.restart(), this.timeGroup.pause()
      }
      static IS_SUPPORTED() {
        let e = document.documentElement;
        return !e.classList.contains("aow") && !e.classList.contains("reduced-motion")
      }
    }
  }, {
    100: 100,
    59: 59,
    62: 62
  }],
  99: [function(e, t, i) {
    "use strict";
    var s = e(62),
      r = e(100);
    const n = e(59),
      o = e(29),
      a = e(94);
    t.exports = class extends n {
      constructor(e) {
        super(e), this.siriAura = this.el.querySelector(".siri-aura"), this.cancelAnimationRequest = null, this.tileClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.animationDuration = window.getComputedStyle(this.el).getPropertyValue("--siriAnimDuration"), this.isBlendModeSupported = document.documentElement.classList.contains("blend-mode"), this.siriAuraAnim = null, this.inlineVideoContainer = this.el.querySelector(".inline-video"), this.inlineVideo = new a(this.inlineVideoContainer)
      }
      mounted() {
        this._loadInlineVideo(), this._setupEvents(), this.isBlendModeSupported && this._createAnimKeyframes()
      }
      _createAnimKeyframes() {
        this.siriAuraAnim = o.createTimeGroup(), this.siriAuraAnim.name = "Siri Aura", this.siriAuraAnim.addKeyframe(this.siriAura, {
          start: 0,
          end: "css(--siriAnimDuration)",
          rotation: [0, 360],
          snapAtCreation: !0
        })
      }
      _setupEvents() {
        let e = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.play),
          t = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.reset);
        e.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), t.controller.on("reset:exit", () => {
          this._resetTileAnimation()
        })
      }
      _playTileAnimation() {
        let e = s.director.requestAnimationStart({
          element: this.el,
          duration: this.tileAnimationDuration
        });
        e.then(() => {
          this.inlineVideo.play(), null !== this.siriAuraAnim && this.siriAuraAnim.play()
        }), this.cancelAnimationRequest = e.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.inlineVideo.reset(), null !== this.siriAuraAnim && (this.siriAuraAnim.restart(), this.siriAuraAnim.pause())
      }
      _loadInlineVideo() {
        this.anim.addKeyframe(this.el, {
          start: "t - 200vh",
          end: "b + 200vh",
          event: "load-inline-video"
        }), this.anim.getControllerForTarget(this.el).on("load-inline-video:enter", e => {
          this.inlineVideo.load()
        })
      }
      static IS_SUPPORTED() {
        let e = document.documentElement;
        return !e.classList.contains("aow") && !e.classList.contains("reduced-motion")
      }
    }
  }, {
    100: 100,
    29: 29,
    59: 59,
    62: 62,
    94: 94
  }],
  100: [function(e, t, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = i.tileTriggerKeyframeOptions = void 0;
    const s = {
      play: {
        start: "t + 60h - 100vh",
        end: "b - 60h",
        event: "play"
      },
      reset: {
        start: "t - 100vh",
        end: "b",
        event: "reset"
      }
    };
    i.tileTriggerKeyframeOptions = s;
    var r = {
      tileTriggerKeyframeOptions: s
    };
    i.default = r
  }, {}],
  101: [function(e, t, i) {
    "use strict";
    const s = e(76);
    t.exports = () => {
      let e = (() => {
          let e = [window.outerWidth, window.outerHeight];
          return "0.46" === (Math.min(...e) / Math.max(...e)).toFixed(2)
        })(),
        t = s.browser.safari,
        i = s.os.ios,
        r = s.os.osx,
        n = t && i,
        o = t && r && 12 === s.browser.version.major,
        a = t && r && 13 === s.browser.version.major && s.browser.version.minor < 1;
      return {
        safari: t,
        old: o || a,
        mobile: n && !e,
        iphonex: n && e,
        ipad: t && r && !1 === window.navigator.standalone
      }
    }
  }, {
    76: 76
  }],
  102: [function(e, t, i) {
    "use strict";
    const s = e(60),
      r = e(27),
      n = e(36),
      o = e(61),
      a = e(103),
      h = e(1);
    ({
      initialize() {
        let e = document.querySelector("body"),
          t = document.querySelector("main.main");
        Object.assign(o, a);
        let i = new s(e);
        i.anim.on(n.EVENTS.ON_DOM_GROUPS_CREATED, () => {
          new r
        }), i.on(s.EVENTS.DOM_COMPONENTS_MOUNTED, () => {
          i.addComponent({
            componentName: "InlineModal",
            el: t
          })
        }), h.detect()
      }
    }).initialize()
  }, {
    1: 1,
    103: 103,
    27: 27,
    36: 36,
    60: 60,
    61: 61
  }],
  103: [function(e, t, i) {
    "use strict";
    t.exports = {
      HeroAnimation: e(91),
      InlineVideoAutoplay: e(93),
      FixedWidth: e(90),
      PasswordSecurity: e(95),
      ChargingStations: e(85),
      InlineModal: e(92),
      QuickStatus: e(98),
      PinnedConversations: e(96),
      SiriKnowledge: e(99),
      DeviceTranslate: e(88),
      CityLevelLocation: e(86),
      AdaptiveLighting: e(84),
      PowerReserve: e(97),
      FastLoading: e(89),
      CompactUI: e(87)
    }
  }, {
    84: 84,
    85: 85,
    86: 86,
    87: 87,
    88: 88,
    89: 89,
    90: 90,
    91: 91,
    92: 92,
    93: 93,
    95: 95,
    96: 96,
    97: 97,
    98: 98,
    99: 99
  }]
}, {}, [102]);