! function e(t, A, i) {
  function s(r, a) {
    if (!A[r]) {
      if (!t[r]) {
        var o = "function" == typeof require && require;
        if (!a && o) return o(r, !0);
        if (n) return n(r, !0);
        var l = new Error("Cannot find module '" + r + "'");
        throw l.code = "MODULE_NOT_FOUND", l
      }
      var h = A[r] = {
        exports: {}
      };
      t[r][0].call(h.exports, (function(e) {
        return s(t[r][1][e] || e)
      }), h, h.exports, e, t, A, i)
    }
    return A[r].exports
  }
  for (var n = "function" == typeof require && require, r = 0; r < i.length; r++) s(i[r]);
  return s
}({
  1: [function(e, t, A) {
    "use strict";

    function i() {
      this._createElemnts(), this._bindEvents()
    }
    var s = i.prototype;
    s._bindEvents = function() {
      this._onResize = this._resize.bind(this)
    }, s._createElemnts = function() {
      this.span = document.createElement("span");
      var e = this.span.style;
      e.visibility = "hidden", e.position = "absolute", e.top = "0", e.bottom = "0", e.zIndex = "-1", this.span.innerHTML = "&nbsp;", this.iframe = document.createElement("iframe");
      var t = this.iframe.style;
      t.position = "absolute", t.top = "0", t.left = "0", t.width = "100%", t.height = "100%", this.span.appendChild(this.iframe), document.body.appendChild(this.span)
    }, s.detect = function(e) {
      this.originalSize = e || 17, this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.currentSize > this.originalSize && this._onResize(), this.isDetecting || (this.iframe.contentWindow.addEventListener("resize", this._onResize), this.isDetecting = !0)
    }, s._resize = function(e) {
      this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.originalSize < this.currentSize ? document.documentElement.classList.add("text-zoom") : document.documentElement.classList.remove("text-zoom"), window.dispatchEvent(new Event("resize")), window.dispatchEvent(new CustomEvent("resize:text-zoom", {
        detail: this
      }))
    }, s.getScale = function() {
      return this.currentSize / this.originalSize
    }, s.remove = function() {
      this.isDetecting && (this.iframe.contentWindow.removeEventListener("resize", this._onResize), this.isDetecting = !1)
    }, s.destroy = function() {
      this.remove(), this.span && this.span.parentElement && this.span.parentElement.removeChild(this.span), this.span = null, this.iframe = null
    }, t.exports = new i
  }, {}],
  2: [function(e, t, A) {
    "use strict";
    t.exports = {
      EventEmitterMicro: e(3)
    }
  }, {
    3: 3
  }],
  3: [function(e, t, A) {
    "use strict";

    function i() {
      this._events = {}
    }
    var s = i.prototype;
    s.on = function(e, t) {
      this._events[e] = this._events[e] || [], this._events[e].unshift(t)
    }, s.once = function(e, t) {
      var A = this;
      this.on(e, (function i(s) {
        A.off(e, i), void 0 !== s ? t(s) : t()
      }))
    }, s.off = function(e, t) {
      if (this.has(e)) {
        if (1 === arguments.length) return this._events[e] = null, void delete this._events[e];
        var A = this._events[e].indexOf(t); - 1 !== A && this._events[e].splice(A, 1)
      }
    }, s.trigger = function(e, t) {
      if (this.has(e))
        for (var A = this._events[e].length - 1; A >= 0; A--) void 0 !== t ? this._events[e][A](t) : this._events[e][A]()
    }, s.has = function(e) {
      return e in this._events != !1 && 0 !== this._events[e].length
    }, s.destroy = function() {
      for (var e in this._events) this._events[e] = null;
      this._events = null
    }, t.exports = i
  }, {}],
  4: [function(e, t, A) {
    t.exports = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
  }, {}],
  5: [function(e, t, A) {
    var i = e(6);

    function s() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap;
      return s = function() {
        return e
      }, e
    }
    t.exports = function(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" !== i(e) && "function" != typeof e) return {
        default: e
      };
      var t = s();
      if (t && t.has(e)) return t.get(e);
      var A = {},
        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          var a = n ? Object.getOwnPropertyDescriptor(e, r) : null;
          a && (a.get || a.set) ? Object.defineProperty(A, r, a) : A[r] = e[r]
        } return A.default = e, t && t.set(e, A), A
    }
  }, {
    6: 6
  }],
  6: [function(e, t, A) {
    function i(e) {
      return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = i = function(e) {
        return typeof e
      } : t.exports = i = function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, i(e)
    }
    t.exports = i
  }, {}],
  7: [function(e, t, A) {
    "use strict";
    t.exports = {
      majorVersionNumber: "3.x"
    }
  }, {}],
  8: [function(e, t, A) {
    "use strict";
    var i, s = e(2).EventEmitterMicro,
      n = e(17),
      r = e(16);

    function a(e) {
      e = e || {}, s.call(this), this.id = r.getNewID(), this.executor = e.executor || n, this._reset(), this._willRun = !1, this._didDestroy = !1
    }(i = a.prototype = Object.create(s.prototype)).run = function() {
      return this._willRun || (this._willRun = !0), this._subscribe()
    }, i.cancel = function() {
      this._unsubscribe(), this._willRun && (this._willRun = !1), this._reset()
    }, i.destroy = function() {
      var e = this.willRun();
      return this.cancel(), this.executor = null, s.prototype.destroy.call(this), this._didDestroy = !0, e
    }, i.willRun = function() {
      return this._willRun
    }, i.isRunning = function() {
      return this._isRunning
    }, i._subscribe = function() {
      return this.executor.subscribe(this)
    }, i._unsubscribe = function() {
      return this.executor.unsubscribe(this)
    }, i._onAnimationFrameStart = function(e) {
      this._isRunning = !0, this._willRun = !1, this._didEmitFrameData || (this._didEmitFrameData = !0, this.trigger("start", e))
    }, i._onAnimationFrameEnd = function(e) {
      this._willRun || (this.trigger("stop", e), this._reset())
    }, i._reset = function() {
      this._didEmitFrameData = !1, this._isRunning = !1
    }, t.exports = a
  }, {
    16: 16,
    17: 17,
    2: 2
  }],
  9: [function(e, t, A) {
    "use strict";
    var i, s = e(3);

    function n(e) {
      e = e || {}, this._reset(), this.updatePhases(), this.eventEmitter = new s, this._willRun = !1, this._totalSubscribeCount = -1, this._requestAnimationFrame = window.requestAnimationFrame, this._cancelAnimationFrame = window.cancelAnimationFrame, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
    }(i = n.prototype).frameRequestedPhase = "requested", i.startPhase = "start", i.runPhases = ["update", "external", "draw"], i.endPhase = "end", i.disabledPhase = "disabled", i.beforePhaseEventPrefix = "before:", i.afterPhaseEventPrefix = "after:", i.subscribe = function(e, t) {
      return this._totalSubscribeCount++, this._nextFrameSubscribers[e.id] || (t ? this._nextFrameSubscribersOrder.unshift(e.id) : this._nextFrameSubscribersOrder.push(e.id), this._nextFrameSubscribers[e.id] = e, this._nextFrameSubscriberArrayLength++, this._nextFrameSubscriberCount++, this._run()), this._totalSubscribeCount
    }, i.subscribeImmediate = function(e, t) {
      return this._totalSubscribeCount++, this._subscribers[e.id] || (t ? this._subscribersOrder.splice(this._currentSubscriberIndex + 1, 0, e.id) : this._subscribersOrder.unshift(e.id), this._subscribers[e.id] = e, this._subscriberArrayLength++, this._subscriberCount++), this._totalSubscribeCount
    }, i.unsubscribe = function(e) {
      return !!this._nextFrameSubscribers[e.id] && (this._nextFrameSubscribers[e.id] = null, this._nextFrameSubscriberCount--, 0 === this._nextFrameSubscriberCount && this._cancel(), !0)
    }, i.getSubscribeID = function() {
      return this._totalSubscribeCount += 1
    }, i.destroy = function() {
      var e = this._cancel();
      return this.eventEmitter.destroy(), this.eventEmitter = null, this.phases = null, this._subscribers = null, this._subscribersOrder = null, this._nextFrameSubscribers = null, this._nextFrameSubscribersOrder = null, this._rafData = null, this._boundOnAnimationFrame = null, this._onExternalAnimationFrame = null, e
    }, i.useExternalAnimationFrame = function(e) {
      if ("boolean" == typeof e) {
        var t = this._isUsingExternalAnimationFrame;
        return e && this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), !this._willRun || e || this._animationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this._isUsingExternalAnimationFrame = e, e ? this._boundOnExternalAnimationFrame : t || !1
      }
    }, i.updatePhases = function() {
      this.phases || (this.phases = []), this.phases.length = 0, this.phases.push(this.frameRequestedPhase), this.phases.push(this.startPhase), Array.prototype.push.apply(this.phases, this.runPhases), this.phases.push(this.endPhase), this._runPhasesLength = this.runPhases.length, this._phasesLength = this.phases.length
    }, i._run = function() {
      if (!this._willRun) return this._willRun = !0, 0 === this.lastFrameTime && (this.lastFrameTime = performance.now()), this._animationFrameActive = !0, this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this.phase === this.disabledPhase && (this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex]), !0
    }, i._cancel = function() {
      var e = !1;
      return this._animationFrameActive && (this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), this._animationFrameActive = !1, this._willRun = !1, e = !0), this._isRunning || this._reset(), e
    }, i._onAnimationFrame = function(e) {
      for (this._subscribers = this._nextFrameSubscribers, this._subscribersOrder = this._nextFrameSubscribersOrder, this._subscriberArrayLength = this._nextFrameSubscriberArrayLength, this._subscriberCount = this._nextFrameSubscriberCount, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex], this._isRunning = !0, this._willRun = !1, this._didRequestNextRAF = !1, this._rafData.delta = e - this.lastFrameTime, this.lastFrameTime = e, this._rafData.fps = 0, this._rafData.delta >= 1e3 && (this._rafData.delta = 0), 0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta), this._rafData.time = e, this._rafData.naturalFps = this._rafData.fps, this._rafData.timeNow = Date.now(), this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameStart(this._rafData);
      for (this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._runPhaseIndex = 0; this._runPhaseIndex < this._runPhasesLength; this._runPhaseIndex++) {
        for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]].trigger(this.phase, this._rafData);
        this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase)
      }
      for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameEnd(this._rafData);
      this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._willRun ? (this.phaseIndex = 0, this.phaseIndex = this.phases[this.phaseIndex]) : this._reset()
    }, i._onExternalAnimationFrame = function(e) {
      this._isUsingExternalAnimationFrame && this._onAnimationFrame(e)
    }, i._reset = function() {
      this._rafData || (this._rafData = {}), this._rafData.time = 0, this._rafData.delta = 0, this._rafData.fps = 0, this._rafData.naturalFps = 0, this._rafData.timeNow = 0, this._subscribers = {}, this._subscribersOrder = [], this._currentSubscriberIndex = -1, this._subscriberArrayLength = 0, this._subscriberCount = 0, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._didEmitFrameData = !1, this._animationFrame = null, this._animationFrameActive = !1, this._isRunning = !1, this._shouldReset = !1, this.lastFrameTime = 0, this._runPhaseIndex = -1, this.phaseIndex = -1, this.phase = this.disabledPhase
    }, t.exports = n
  }, {
    3: 3
  }],
  10: [function(e, t, A) {
    "use strict";
    var i = e(12),
      s = function(e) {
        this.phase = e, this.rafEmitter = new i, this._cachePhaseIndex(), this.requestAnimationFrame = this.requestAnimationFrame.bind(this), this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this), this._onBeforeRAFExecutorStart = this._onBeforeRAFExecutorStart.bind(this), this._onBeforeRAFExecutorPhase = this._onBeforeRAFExecutorPhase.bind(this), this._onAfterRAFExecutorPhase = this._onAfterRAFExecutorPhase.bind(this), this.rafEmitter.on(this.phase, this._onRAFExecuted.bind(this)), this.rafEmitter.executor.eventEmitter.on("before:start", this._onBeforeRAFExecutorStart), this.rafEmitter.executor.eventEmitter.on("before:" + this.phase, this._onBeforeRAFExecutorPhase), this.rafEmitter.executor.eventEmitter.on("after:" + this.phase, this._onAfterRAFExecutorPhase), this._frameCallbacks = [], this._currentFrameCallbacks = [], this._nextFrameCallbacks = [], this._phaseActive = !1, this._currentFrameID = -1, this._cancelFrameIdx = -1, this._frameCallbackLength = 0, this._currentFrameCallbacksLength = 0, this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0
      },
      n = s.prototype;
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
    }, t.exports = s
  }, {
    12: 12
  }],
  11: [function(e, t, A) {
    "use strict";
    var i = e(10),
      s = function() {
        this.events = {}
      },
      n = s.prototype;
    n.requestAnimationFrame = function(e) {
      return this.events[e] || (this.events[e] = new i(e)), this.events[e].requestAnimationFrame
    }, n.cancelAnimationFrame = function(e) {
      return this.events[e] || (this.events[e] = new i(e)), this.events[e].cancelAnimationFrame
    }, t.exports = new s
  }, {
    10: 10
  }],
  12: [function(e, t, A) {
    "use strict";
    var i = e(8),
      s = function(e) {
        i.call(this, e)
      };
    (s.prototype = Object.create(i.prototype))._subscribe = function() {
      return this.executor.subscribe(this, !0)
    }, t.exports = s
  }, {
    8: 8
  }],
  13: [function(e, t, A) {
    "use strict";
    var i = e(11);
    t.exports = i.cancelAnimationFrame("update")
  }, {
    11: 11
  }],
  14: [function(e, t, A) {
    "use strict";
    var i = e(11);
    t.exports = i.requestAnimationFrame("draw")
  }, {
    11: 11
  }],
  15: [function(e, t, A) {
    "use strict";
    var i = e(11);
    t.exports = i.requestAnimationFrame("external")
  }, {
    11: 11
  }],
  16: [function(e, t, A) {
    "use strict";
    var i = e(19).SharedInstance,
      s = e(7).majorVersionNumber,
      n = function() {
        this._currentID = 0
      };
    n.prototype.getNewID = function() {
      return this._currentID++, "raf:" + this._currentID
    }, t.exports = i.share("@marcom/ac-raf-emitter/sharedRAFEmitterIDGeneratorInstance", s, n)
  }, {
    19: 19,
    7: 7
  }],
  17: [function(e, t, A) {
    "use strict";
    var i = e(19).SharedInstance,
      s = e(7).majorVersionNumber,
      n = e(9);
    t.exports = i.share("@marcom/ac-raf-emitter/sharedRAFExecutorInstance", s, n)
  }, {
    19: 19,
    7: 7,
    9: 9
  }],
  18: [function(e, t, A) {
    "use strict";
    var i = e(11);
    t.exports = i.requestAnimationFrame("update")
  }, {
    11: 11
  }],
  19: [function(e, t, A) {
    "use strict";
    t.exports = {
      SharedInstance: e(20)
    }
  }, {
    20: 20
  }],
  20: [function(e, t, A) {
    "use strict";
    var i, s = window,
      n = s.AC,
      r = (i = {}, {
        get: function(e, t) {
          var A = null;
          return i[e] && i[e][t] && (A = i[e][t]), A
        },
        set: function(e, t, A) {
          return i[e] || (i[e] = {}), i[e][t] = "function" == typeof A ? new A : A, i[e][t]
        },
        share: function(e, t, A) {
          var i = this.get(e, t);
          return i || (i = this.set(e, t, A)), i
        },
        remove: function(e, t) {
          var A = typeof t;
          if ("string" !== A && "number" !== A) i[e] && (i[e] = null);
          else {
            if (!i[e] || !i[e][t]) return;
            i[e][t] = null
          }
        }
      });
    n || (n = s.AC = {}), n.SharedInstance || (n.SharedInstance = r), t.exports = n.SharedInstance
  }, {}],
  21: [function(e, t, A) {
    "use strict";
    class i {
      constructor(e = {}) {
        this.options = e, "loading" === document.readyState ? document.addEventListener("readystatechange", e => {
          "interactive" === document.readyState && this._init()
        }) : this._init()
      }
      _init() {
        if (this._images = Array.from(document.querySelectorAll("*[".concat(i.DATA_ATTRIBUTE, "]"))), this.AnimSystem = this._findAnim(), null === this.AnimSystem) return null;
        this._addKeyframesToImages()
      }
      _defineKeyframeOptions(e = null) {
        const t = e.getAttribute(i.DATA_DOWNLOAD_AREA_KEYFRAME) || "{}";
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
        t || e.setAttribute(i.DATA_ATTRIBUTE, "")
      }
      _downloadingImageAttributes(e) {
        e.removeAttribute(i.DATA_ATTRIBUTE)
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
    i.DATA_DOWNLOAD_AREA_KEYFRAME = "data-download-area-keyframe", i.DATA_ATTRIBUTE = "data-anim-lazy-image", t.exports = i
  }, {}],
  22: [function(e, t, A) {
    "use strict";
    const i = e(21),
      s = e(66),
      n = e(14),
      r = e(18);
    class a extends i {
      constructor(e = {}) {
        super(e)
      }
      _init() {
        super._init(), this._onBreakpointChangeCallback = this._onBreakpointChangeCallback.bind(this), this._addViewportEvents(), this._resetPromises(), this._addMethodsToImageElement()
      }
      _addViewportEvents() {
        let e = this.options.breakpoints ? {
          breakpoints: this.options.breakpoints
        } : {};
        this.viewportEmitterMicro = new s(e), this.viewportEmitterMicro.on(s.CHANGE_EVENTS.VIEWPORT, this._onBreakpointChangeCallback), this.viewportEmitterMicro.on(s.CHANGE_EVENTS.RETINA, this._onBreakpointChangeCallback)
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
        this._resetPromises(), this._images.forEach(e => {
          this._cleanUpImageAttributes(e), "" != e.getAttribute(i.DATA_ATTRIBUTE) && this._imageIsInLoadRange(e)
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
        return new Promise((t, A) => {
          null === e.getAttribute(a.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE) ? null === e.getAttribute(a.DATA_DOWNLOADING_ATTRIBUTE) && this._waitForBackgroundVisible(e).then(e => this._getBackgroundImageSrc(e)).then(e => this._loadImage(e)).then(() => {
            n(() => {
              this._finishedDownloadAttributes(e), t()
            }, !0)
          }) : t()
        })
      }
      _waitForBackgroundVisible(e) {
        return new Promise((t, A) => {
          n(() => {
            this._downloadingImageAttributes(e), t(e)
          }, !0)
        })
      }
      _getBackgroundImageSrc(e) {
        return new Promise((t, A) => {
          r(() => {
            let A = e.currentStyle;
            A || (A = window.getComputedStyle(e, !1)), 0 !== A.backgroundImage.indexOf("url(") ? t(null) : t(A.backgroundImage.slice(4, -1).replace(/"/g, ""))
          }, !0)
        })
      }
      _loadImage(e) {
        return new Promise(this._loadImagePromiseFunc.bind(this, e))
      }
      _loadImagePromiseFunc(e, t, A) {
        if (!e) return void t(null);
        let i = new Image;
        i.addEventListener("load", (function e() {
          this.removeEventListener("load", e), t(this), t = null
        })), i.src = e
      }
    }
    a.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE = "data-anim-lazy-image-download-complete", a.DATA_DOWNLOADING_ATTRIBUTE = "data-anim-lazy-image-downloading", a.EVENTS = {}, a.EVENTS.DOWNLOAD_COMPLETE = "video-loading-complete", t.exports = a
  }, {
    14: 14,
    18: 18,
    21: 21,
    66: 66
  }],
  23: [function(e, t, A) {
    "use strict";
    t.exports = {
      version: "3.3.5",
      major: "3.x",
      majorMinor: "3.3"
    }
  }, {}],
  24: [function(e, t, A) {
    "use strict";
    const i = e(2).EventEmitterMicro,
      s = e(31),
      n = e(26),
      r = e(27),
      a = e(29),
      o = e(46),
      l = e(47),
      h = e(48),
      c = e(23),
      d = {};
    "undefined" != typeof window && (d.update = e(18), d.cancelUpdate = e(13), d.external = e(15), d.draw = e(14));
    let u = null;
    class m extends i {
      constructor() {
        if (super(), u) throw "You cannot create multiple AnimSystems. You probably want to create multiple groups instead. You can have unlimited groups on a page";
        u = this, this.groups = [], this.scrollSystems = [], this.timeSystems = [], this.tweenGroup = null, this._forceUpdateRAFId = -1, this.initialized = !1, this.model = s, this.version = c.version, this._resolveReady = () => {}, this.ready = new Promise(e => this._resolveReady = e), this.onScroll = this.onScroll.bind(this), this.onResizedDebounced = this.onResizedDebounced.bind(this), this.onResizeImmediate = this.onResizeImmediate.bind(this)
      }
      initialize() {
        return this.initialized || "undefined" == typeof window || (this.initialized = !0, this.timeSystems = [], this.scrollSystems = [], this.groups = [], this.setupEvents(), this.initializeResizeFilter(), this.initializeModel(), this.createDOMGroups(), this.createDOMKeyframes(), this.tweenGroup = new h(null, this), this.groups.push(this.tweenGroup), this._resolveReady()), this.ready
      }
      remove() {
        return this.initialized ? Promise.all(this.groups.map(e => e.remove())).then(() => {
          this.groups = null, this.scrollSystems = null, this.timeSystems = null, window.clearTimeout(s.RESIZE_TIMEOUT), window.removeEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onResizeImmediate), this._events = {}, this.initialized = !1, this.ready = new Promise(e => this._resolveReady = e)
        }) : (this.ready = new Promise(e => this._resolveReady = e), Promise.resolve())
      }
      destroy() {
        return this.remove()
      }
      createTimeGroup(e) {
        let t = new l(e, this);
        return this.groups.push(t), this.timeSystems.push(t), this.trigger(s.EVENTS.ON_GROUP_CREATED, t), t
      }
      createScrollGroup(e) {
        if (!e) throw "AnimSystem scroll based groups must supply an HTMLElement";
        let t = new o(e, this);
        return this.groups.push(t), this.scrollSystems.push(t), this.trigger(s.EVENTS.ON_GROUP_CREATED, t), t
      }
      removeGroup(e) {
        return Promise.all(e.keyframeControllers.map(t => e.removeKeyframeController(t))).then(() => {
          let t = this.groups.indexOf(e); - 1 !== t && this.groups.splice(t, 1), t = this.scrollSystems.indexOf(e), -1 !== t && this.scrollSystems.splice(t, 1), t = this.timeSystems.indexOf(e), -1 !== t && this.timeSystems.splice(t, 1), e.destroy()
        })
      }
      createDOMGroups() {
        document.body.setAttribute("data-anim-scroll-group", "body"), document.querySelectorAll("[data-anim-scroll-group]").forEach(e => this.createScrollGroup(e)), document.querySelectorAll("[data-anim-time-group]").forEach(e => this.createTimeGroup(e)), this.trigger(s.EVENTS.ON_DOM_GROUPS_CREATED, this.groups)
      }
      createDOMKeyframes() {
        let e = [];
        ["data-anim-keyframe", n.DATA_ATTRIBUTE, r.DATA_ATTRIBUTE, a.DATA_ATTRIBUTE].forEach((function(t) {
          for (let A = 0; A < 12; A++) e.push(t + (0 === A ? "" : "-" + (A - 1)))
        }));
        for (let t = 0; t < e.length; t++) {
          let A = e[t],
            i = document.querySelectorAll("[" + A + "]");
          for (let e = 0; e < i.length; e++) {
            const t = i[e],
              s = JSON.parse(t.getAttribute(A));
            this.addKeyframe(t, s)
          }
        }
        d.update(() => {
          null !== this.groups && (this.groups.forEach(e => e.onKeyframesDirty({
            silent: !0
          })), this.groups.forEach(e => e.trigger(s.EVENTS.ON_DOM_KEYFRAMES_CREATED, e)), this.trigger(s.EVENTS.ON_DOM_KEYFRAMES_CREATED, this), this.groups.forEach(e => {
            e.forceUpdate({
              waitForNextUpdate: !1,
              silent: !0
            }), e.reconcile()
          }), this.onScroll())
        }, !0)
      }
      initializeResizeFilter() {
        if (s.cssDimensionsTracker) return;
        const e = document.querySelector(".cssDimensionsTracker") || document.createElement("div");
        e.setAttribute("cssDimensionsTracker", "true"), e.style.position = "fixed", e.style.top = "0", e.style.width = "100%", e.style.height = "100vh", e.style.pointerEvents = "none", e.style.visibility = "hidden", e.style.zIndex = "-1", document.documentElement.appendChild(e), s.cssDimensionsTracker = e
      }
      initializeModel() {
        s.pageMetrics.windowHeight = s.cssDimensionsTracker.clientHeight, s.pageMetrics.windowWidth = s.cssDimensionsTracker.clientWidth, s.pageMetrics.scrollY = window.scrollY || window.pageYOffset, s.pageMetrics.scrollX = window.scrollX || window.pageXOffset, s.pageMetrics.breakpoint = s.getBreakpoint();
        let e = document.documentElement.getBoundingClientRect();
        s.pageMetrics.documentOffsetX = e.left + s.pageMetrics.scrollX, s.pageMetrics.documentOffsetY = e.top + s.pageMetrics.scrollY
      }
      setupEvents() {
        window.removeEventListener("scroll", this.onScroll), window.addEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onResizeImmediate), window.addEventListener("resize", this.onResizeImmediate)
      }
      onScroll() {
        s.pageMetrics.scrollY = window.scrollY || window.pageYOffset, s.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
        for (let e = 0, t = this.scrollSystems.length; e < t; e++) this.scrollSystems[e].updateTimeline();
        this.trigger(s.PageEvents.ON_SCROLL, s.pageMetrics)
      }
      onResizeImmediate() {
        let e = s.cssDimensionsTracker.clientWidth,
          t = s.cssDimensionsTracker.clientHeight;
        if (e === s.pageMetrics.windowWidth && t === s.pageMetrics.windowHeight) return;
        s.pageMetrics.windowWidth = e, s.pageMetrics.windowHeight = t, s.pageMetrics.scrollY = window.scrollY || window.pageYOffset, s.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
        let A = document.documentElement.getBoundingClientRect();
        s.pageMetrics.documentOffsetX = A.left + s.pageMetrics.scrollX, s.pageMetrics.documentOffsetY = A.top + s.pageMetrics.scrollY, window.clearTimeout(s.RESIZE_TIMEOUT), s.RESIZE_TIMEOUT = window.setTimeout(this.onResizedDebounced, 250), this.trigger(s.PageEvents.ON_RESIZE_IMMEDIATE, s.pageMetrics)
      }
      onResizedDebounced() {
        d.update(() => {
          let e = s.pageMetrics.breakpoint,
            t = s.getBreakpoint();
          if (t !== e) {
            s.pageMetrics.previousBreakpoint = e, s.pageMetrics.breakpoint = t;
            for (let e = 0, t = this.groups.length; e < t; e++) this.groups[e]._onBreakpointChange();
            this.trigger(s.PageEvents.ON_BREAKPOINT_CHANGE, s.pageMetrics)
          }
          for (let e = 0, t = this.groups.length; e < t; e++) this.groups[e].forceUpdate({
            waitForNextUpdate: !1
          });
          this.trigger(s.PageEvents.ON_RESIZE_DEBOUNCED, s.pageMetrics)
        }, !0)
      }
      forceUpdate({
        waitForNextUpdate: e = !0,
        silent: t = !1
      } = {}) {
        -1 !== this._forceUpdateRAFId && d.cancelUpdate(this._forceUpdateRAFId);
        let A = () => {
          for (let e = 0, A = this.groups.length; e < A; e++) {
            this.groups[e].forceUpdate({
              waitForNextUpdate: !1,
              silent: t
            })
          }
          return -1
        };
        this._forceUpdateRAFId = e ? d.update(A, !0) : A()
      }
      addKeyframe(e, t) {
        let A = this.getGroupForTarget(e);
        return A = A || this.getGroupForTarget(document.body), A.addKeyframe(e, t)
      }
      addEvent(e, t) {
        let A = this.getGroupForTarget(e);
        return A = A || this.getGroupForTarget(document.body), A.addEvent(e, t)
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
        let A = e;
        for (; A;) {
          if (A._animInfo && A._animInfo.isGroup && t(A._animInfo.group)) return A._animInfo.group;
          A = A.parentElement
        }
      }
      getControllerForTarget(e) {
        return e._animInfo && e._animInfo.controller ? e._animInfo.controller : null
      }
      addTween(e, t) {
        return this.tweenGroup.addKeyframe(e, t)
      }
    }
    t.exports = "undefined" == typeof window ? new m : window.AC.SharedInstance.share("AnimSystem", c.major, m), t.exports.default = t.exports
  }, {
    13: 13,
    14: 14,
    15: 15,
    18: 18,
    2: 2,
    23: 23,
    26: 26,
    27: 27,
    29: 29,
    31: 31,
    46: 46,
    47: 47,
    48: 48
  }],
  25: [function(e, t, A) {
    "use strict";
    const i = e(31);
    class s {
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
          name: A
        } = e;
        if (void 0 === t) throw ReferenceError("Cannot add chapter without target position.");
        e._impIsFirst || 0 !== this.chapters.length || this.addChapter({
          position: 0,
          _impIsFirst: !0
        });
        let i = this.timeGroup.addKeyframe(this, {
          start: t,
          end: t,
          event: "Chapter"
        });
        this.timeGroup.forceUpdate({
          waitForNextFrame: !1,
          silent: !0
        });
        const n = new s(i, A);
        if (this.chapters.push(n), A) {
          if (this.chapterNames.hasOwnProperty(A)) throw ReferenceError('Duplicate chapter name assigned - "'.concat(A, '" is already in use'));
          this.chapterNames[A] = n
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
        let A = e.ease || "easeInOutCubic";
        this.clip && (this.clip.destroy(), A = "easeOutQuint"), this.timeGroup.timeScale(e.timeScale || 1);
        const s = void 0 !== e.duration ? e.duration : this.getDurationToChapter(t),
          n = this.timeGroup.time(),
          r = t.start;
        let a = !1;
        this.tween = this.timeGroup.anim.addTween({
          time: n
        }, {
          easeFunction: A,
          duration: s,
          time: [n, r],
          onStart: () => this.timeGroup.trigger(i.EVENTS.ON_CHAPTER_INITIATED, {
            player: this,
            next: t
          }),
          onDraw: e => {
            let A = e.tweenProps.time.current;
            this.timeGroup.time(A), e.keyframe.curvedT > .5 && !a && (a = !0, this.currentIndex = t.index, this.currentChapter = t, this.timeGroup.trigger(i.EVENTS.ON_CHAPTER_OCCURRED, {
              player: this,
              current: t
            }))
          },
          onComplete: () => {
            this.timeGroup.trigger(i.EVENTS.ON_CHAPTER_COMPLETED, {
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
    31: 31
  }],
  26: [function(e, t, A) {
    "use strict";
    const i = e(31),
      s = e(39),
      n = e(61),
      r = e(33),
      a = e(42),
      o = e(38),
      l = e(49),
      h = e(50),
      c = e(41);
    class d {
      constructor(e, t) {
        this.controller = e, this.anchors = [], this.jsonProps = t, this.ease = e.group.defaultEase, this.easeFunction = r.linear, this.start = 0, this.end = 0, this.localT = 0, this.curvedT = 0, this.id = 0, this.event = "", this.needsEventDispatch = !1, this.snapAtCreation = !1, this.isEnabled = !1, this.animValues = {}, this.breakpointMask = "SMLX", this.disabledWhen = [], this.keyframeType = i.KeyframeTypes.Interpolation, this.hold = !1, this.preserveState = !1, this.markedForRemoval = !1;
        let A = !1;
        Object.defineProperty(this, "hidden", {
          get: () => A,
          set(t) {
            A = t, e.group.keyframesDirty = !0
          }
        }), this.uuid = c(), this.destroyed = !1
      }
      destroy() {
        this.destroyed = !0, this.controller = null, this.disabledWhen = null, this.anchors = null, this.jsonProps = null, this.easeFunction = null, this.animValues = null
      }
      remove() {
        return this.controller.removeKeyframe(this)
      }
      parseOptions(e) {
        this.jsonProps = e, e.relativeTo && console.error("KeyframeError: relativeTo has been removed. Use 'anchors' property instead. Found 'relativeTo':\"".concat(e.relativeTo, '"')), void 0 === e.end && void 0 === e.duration && (e.end = e.start), "" !== e.anchors && e.anchors ? (this.anchors = [], e.anchors = Array.isArray(e.anchors) ? e.anchors : [e.anchors], e.anchors.forEach((t, A) => {
          let i = h(t, this.controller.group.element);
          if (!i) {
            let i = "";
            return "string" == typeof t && (i = " Provided value was a string, so a failed attempt was made to find anchor with the provided querystring in group.element, or in the document."), void console.warn("Keyframe on", this.controller.element, " failed to find anchor at index ".concat(A, " in array"), e.anchors, ". Anchors must be JS Object references, Elements references, or valid query selector strings. ".concat(i))
          }
          this.anchors.push(i), this.controller.group.metrics.add(i)
        })) : (this.anchors = [], e.anchors = []), e.ease ? this.ease = parseFloat(e.ease) : e.ease = this.ease, e.hasOwnProperty("snapAtCreation") ? this.snapAtCreation = e.snapAtCreation : e.snapAtCreation = this.snapAtCreation, e.easeFunction || (e.easeFunction = i.KeyframeDefaults.easeFunctionString), e.breakpointMask ? this.breakpointMask = e.breakpointMask : e.breakpointMask = this.breakpointMask, e.disabledWhen ? this.disabledWhen = Array.isArray(e.disabledWhen) ? e.disabledWhen : [e.disabledWhen] : e.disabledWhen = this.disabledWhen, e.hasOwnProperty("hold") ? this.hold = e.hold : e.hold = this.hold, e.hasOwnProperty("preserveState") ? this.preserveState = e.preserveState : e.preserveState = i.KeyframeDefaults.preserveState, this.easeFunction = r[e.easeFunction], r.hasOwnProperty(e.easeFunction) || (e.easeFunction.includes("bezier") ? this.easeFunction = a.fromCSSString(e.easeFunction) : e.easeFunction.includes("spring") ? this.easeFunction = o.fromCSSString(e.easeFunction) : console.error("Keyframe parseOptions cannot find 'easeFunction' named '" + e.easeFunction + "'"));
        for (let t in e) {
          if (-1 !== i.KeyframeJSONReservedWords.indexOf(t)) continue;
          let A = e[t];
          if (!Array.isArray(A)) continue;
          if (1 === A.length && (A[0] = null, A[1] = A[0]), this.animValues[t] = this.controller.group.expressionParser.parseArray(this, A), void 0 === this.controller.tweenProps[t] || !this.controller._ownerIsElement) {
            let e = 0;
            this.controller._ownerIsElement || (e = this.controller.element[t] || 0);
            let A = new s(e, i.KeyframeDefaults.epsilon, this.snapAtCreation);
            this.controller.tweenProps[t] = A
          }
          let n = this.controller.tweenProps[t];
          if (e.epsilon) n.epsilon = e.epsilon;
          else {
            let e = Math.abs(this.animValues[t][0] - this.animValues[t][1]),
              A = Math.min(.001 * e, n.epsilon, i.KeyframeDefaults.epsilon);
            n.epsilon = Math.max(A, 1e-4)
          }
        }
        this.keyframeType = this.hold ? i.KeyframeTypes.InterpolationForward : i.KeyframeTypes.Interpolation, e.event && (this.event = e.event)
      }
      overwriteProps(e) {
        this.animValues = {};
        let t = Object.assign({}, this.jsonProps, e);
        this.controller.updateKeyframe(this, t)
      }
      updateLocalProgress(e) {
        if (this.start === this.end || e < this.start || e > this.end) return this.localT = e < this.start ? this.hold ? this.localT : 0 : e > this.end ? 1 : 0, void(this.curvedT = this.easeFunction(this.localT));
        const t = (e - this.start) / (this.end - this.start),
          A = this.hold ? this.localT : 0;
        this.localT = n.clamp(t, A, 1), this.curvedT = this.easeFunction(this.localT)
      }
      reconcile(e) {
        let t = this.animValues[e],
          A = this.controller.tweenProps[e];
        A.initialValue = t[0], A.target = t[0] + this.curvedT * (t[1] - t[0]), A.current !== A.target && (A.current = A.target, this.needsEventDispatch || (this.needsEventDispatch = !0, this.controller.keyframesRequiringDispatch.push(this)))
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
          A = this.controller.tweenProps[e];
        A.target = t[0] + this.curvedT * (t[1] - t[0]);
        let i = A.current;
        A.current += (A.target - A.current) * this.ease;
        let s = A.current - A.target;
        s < A.epsilon && s > -A.epsilon && (A.current = A.target, s = 0), "" === this.event || this.needsEventDispatch || (s > A.epsilon || s < -A.epsilon || 0 === s && i !== A.current) && (this.needsEventDispatch = !0, this.controller.keyframesRequiringDispatch.push(this))
      }
      isInRange(e) {
        return e >= this.start && e <= this.end
      }
      setEnabled(e) {
        e = e || l(Array.from(document.documentElement.classList));
        let t = -1 !== this.breakpointMask.indexOf(i.pageMetrics.breakpoint),
          A = !1;
        return this.disabledWhen.length > 0 && (A = this.disabledWhen.some(t => void 0 !== e[t])), this.isEnabled = t && !A, this.isEnabled
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
    31: 31,
    33: 33,
    38: 38,
    39: 39,
    41: 41,
    42: 42,
    49: 49,
    50: 50,
    61: 61
  }],
  27: [function(e, t, A) {
    "use strict";
    const i = e(26),
      s = e(31),
      n = e(39);
    class r extends i {
      constructor(e, t) {
        super(e, t), this.keyframeType = s.KeyframeTypes.CSSClass, this._triggerType = r.TRIGGER_TYPE_CSS_CLASS, this.cssClass = "", this.friendlyName = "", this.style = {
          on: null,
          off: null
        }, this.toggle = !1, this.isApplied = !1
      }
      parseOptions(e) {
        if (!this.controller._ownerIsElement) throw new TypeError("CSS Keyframes cannot be applied to JS Objects");
        if (e.x = void 0, e.y = void 0, e.z = void 0, e.scale = void 0, e.scaleX = void 0, e.scaleY = void 0, e.rotationX = void 0, e.rotationY = void 0, e.rotationZ = void 0, e.rotation = void 0, e.opacity = void 0, e.hold = void 0, void 0 !== e.toggle && (this.toggle = e.toggle), void 0 !== e.cssClass) this._triggerType = r.TRIGGER_TYPE_CSS_CLASS, this.cssClass = e.cssClass, this.friendlyName = "." + this.cssClass, void 0 === this.controller.tweenProps.targetClasses && (this.controller.tweenProps.targetClasses = {
          add: [],
          remove: []
        });
        else {
          if (void 0 === e.style || !this.isValidStyleProperty(e.style)) throw new TypeError("KeyframeCSSClass no 'cssClass` property found. If using `style` property its also missing or invalid");
          if (this._triggerType = r.TRIGGER_TYPE_STYLE_PROPERTY, this.style = e.style, this.friendlyName = "style", this.toggle = void 0 !== this.style.off || this.toggle, this.toggle && void 0 === this.style.off) {
            this.style.off = {};
            for (let e in this.style.on) this.style.off[e] = ""
          }
          void 0 === this.controller.tweenProps.targetStyles && (this.controller.tweenProps.targetStyles = {})
        }
        if (void 0 === e.end && (e.end = e.start), e.toggle = this.toggle, this._triggerType === r.TRIGGER_TYPE_CSS_CLASS) this.isApplied = this.controller.element.classList.contains(this.cssClass);
        else {
          let e = getComputedStyle(this.controller.element);
          this.isApplied = !0;
          for (let t in this.style.on)
            if (e[t] !== this.style.on[t]) {
              this.isApplied = !1;
              break
            }
        }
        i.prototype.parseOptions.call(this, e), this.animValues[this.friendlyName] = [0, 0], void 0 === this.controller.tweenProps[this.friendlyName] && (this.controller.tweenProps[this.friendlyName] = new n(0, 1, !1)), this.keyframeType = s.KeyframeTypes.CSSClass
      }
      updateLocalProgress(e) {
        this.isApplied && !this.toggle || (this.start !== this.end ? !this.isApplied && e >= this.start && e <= this.end ? this._apply() : this.isApplied && this.toggle && (e < this.start || e > this.end) && this._unapply() : !this.isApplied && e >= this.start ? this._apply() : this.isApplied && this.toggle && e < this.start && this._unapply())
      }
      _apply() {
        if (this._triggerType === r.TRIGGER_TYPE_CSS_CLASS) this.controller.tweenProps.targetClasses.add.push(this.cssClass), this.controller.needsClassUpdate = !0;
        else {
          for (let e in this.style.on) this.controller.tweenProps.targetStyles[e] = this.style.on[e];
          this.controller.needsStyleUpdate = !0
        }
        this.isApplied = !0
      }
      _unapply() {
        if (this._triggerType === r.TRIGGER_TYPE_CSS_CLASS) this.controller.tweenProps.targetClasses.remove.push(this.cssClass), this.controller.needsClassUpdate = !0;
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
    r.TRIGGER_TYPE_CSS_CLASS = 0, r.TRIGGER_TYPE_STYLE_PROPERTY = 1, r.DATA_ATTRIBUTE = "data-anim-classname", t.exports = r
  }, {
    26: 26,
    31: 31,
    39: 39
  }],
  28: [function(e, t, A) {
    "use strict";
    const i = e(31),
      s = e(39),
      n = e(32),
      r = e(35),
      a = e(30),
      o = (e(26), e(27)),
      l = e(36),
      h = e(49),
      c = e(41),
      d = e(2).EventEmitterMicro,
      u = e(55),
      m = {};
    "undefined" != typeof window && (m.update = e(18), m.external = e(15), m.draw = e(14));
    const p = Math.PI / 180,
      g = ["x", "y", "z", "scale", "scaleX", "scaleY", "rotation", "rotationX", "rotationY", "rotationZ"],
      f = ["borderRadius", "bottom", "fontSize", "fontWeight", "height", "left", "lineHeight", "marginBottom", "marginLeft", "marginRight", "marginTop", "maxHeight", "maxWidth", "opacity", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "right", "top", "width", "zIndex", "strokeDashoffset"],
      C = ["currentTime", "scrollLeft", "scrollTop"],
      y = {
        create: e(67),
        rotateX: e(68),
        rotateY: e(69),
        rotateZ: e(70),
        scale: e(71)
      };
    t.exports = class extends d {
      constructor(e, t) {
        super(), this._events.draw = [], this.uuid = c(), this.group = e, this.element = t, this._ownerIsElement = this.element instanceof Element, this._ownerIsElement ? this.friendlyName = this.element.tagName + "." + Array.from(this.element.classList).join(".") : this.friendlyName = this.element.friendlyName || this.uuid, this.element._animInfo = this.element._animInfo || new a(e, this), this.element._animInfo.controller = this, this.element._animInfo.group = this.group, this.element._animInfo.controllers.push(this), this.tweenProps = this.element._animInfo.tweenProps, this.eventObject = new r(this), this.needsStyleUpdate = !1, this.needsClassUpdate = !1, this.elementMetrics = this.group.metrics.add(this.element), this.attributes = [], this.cssAttributes = [], this.domAttributes = [], this.keyframes = {}, this._allKeyframes = [], this._activeKeyframes = [], this.keyframesRequiringDispatch = [], this.updateCachedValuesFromElement(), this.boundsMin = 0, this.boundsMax = 0, this.mat2d = new Float32Array(6), this.mat4 = y.create(), this.needsWrite = !0, this.onDOMWriteImp = this._ownerIsElement ? this.onDOMWriteForElement : this.onDOMWriteForObject
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
          A = u(t),
          r = i.KeyframeDefaults.epsilon;
        ["x", "y", "z"].forEach((e, t) => {
          this.tweenProps[e] = new s(A.translation[t], r, !1)
        }), this.tweenProps.rotation = new s(A.rotation[2], r, !1), ["rotationX", "rotationY", "rotationZ"].forEach((e, t) => {
          this.tweenProps[e] = new s(A.rotation[t], r, !1)
        }), this.tweenProps.scale = new s(A.scale[0], r, !1), ["scaleX", "scaleY", "scaleZ"].forEach((e, t) => {
          this.tweenProps[e] = new s(A.scale[t], r, !1)
        }), f.forEach(t => {
          let A = ["zIndex"].includes(t),
            i = ["opacity", "zIndex", "fontWeight"].includes(t) ? void 0 : "px",
            s = parseFloat(e[t]);
          isNaN(s) && (s = 0), this.tweenProps[t] = new n(s, r, !1, t, A, i)
        }), C.forEach(e => {
          let t = isNaN(this.element[e]) ? 0 : this.element[e];
          this.tweenProps[e] = new n(t, r, !1, e, !1)
        })
      }
      addKeyframe(e) {
        let t = l(e);
        if (!t) throw new Error("AnimSystem Cannot create keyframe for from options `" + e + "`");
        let A = new t(this, e);
        return A.parseOptions(e), A.id = this._allKeyframes.length, this._allKeyframes.push(A), A
      }
      needsUpdate() {
        for (let e = 0, t = this.attributes.length; e < t; e++) {
          let t = this.attributes[e],
            A = this.tweenProps[t];
          if (Math.abs(A.current - A.target) > A.epsilon) return !0
        }
        return !1
      }
      updateLocalProgress(e) {
        for (let t = 0, A = this.attributes.length; t < A; t++) {
          let A = this.attributes[t],
            i = this.keyframes[this.attributes[t]];
          if (1 === i.length) {
            i[0].updateLocalProgress(e);
            continue
          }
          let s = this.getNearestKeyframeForAttribute(A, e);
          s && s.updateLocalProgress(e)
        }
      }
      reconcile() {
        for (let e = 0, t = this.attributes.length; e < t; e++) {
          let t = this.attributes[e],
            A = this.getNearestKeyframeForAttribute(t, this.group.position.local);
          A.updateLocalProgress(this.group.position.local), A.snapAtCreation && A.reconcile(t)
        }
      }
      determineActiveKeyframes(e) {
        e = e || h(Array.from(document.documentElement.classList));
        let t = this._activeKeyframes,
          A = this.attributes,
          i = {};
        this._activeKeyframes = [], this.attributes = [], this.keyframes = {};
        for (let t = 0; t < this._allKeyframes.length; t++) {
          let A = this._allKeyframes[t];
          if (A.markedForRemoval || A.hidden || !A.setEnabled(e))
            for (let e in A.animValues) this.tweenProps[e].isActive = A.preserveState, A.preserveState && (i[e] = !0);
          else {
            this._activeKeyframes.push(A);
            for (let e in A.animValues) this.keyframes[e] = this.keyframes[e] || [], this.keyframes[e].push(A), -1 === this.attributes.indexOf(e) && (i[e] = !0, this.attributes.push(e), this.tweenProps[e].isActive = !0)
          }
        }
        this.attributes.forEach(e => this.tweenProps[e].isActive = !0), this.cssAttributes = f.filter(e => this.attributes.includes(e)).map(e => this.tweenProps[e]), this.domAttributes = C.filter(e => this.attributes.includes(e)).map(e => this.tweenProps[e]);
        let s = t.filter(e => -1 === this._activeKeyframes.indexOf(e));
        if (0 === s.length) return;
        let n = A.filter(e => -1 === this.attributes.indexOf(e) && !i.hasOwnProperty(e));
        if (0 !== n.length)
          if (this.needsWrite = !0, this._ownerIsElement) m.external(() => {
            let e = n.some(e => g.includes(e)),
              t = e && Object.keys(i).some(e => g.includes(e));
            e && !t && this.element.style.removeProperty("transform");
            for (let e = 0, t = n.length; e < t; ++e) {
              let t = n[e],
                A = this.tweenProps[t],
                i = A.isActive ? A.target : A.initialValue;
              A.current = A.target = i, !A.isActive && f.includes(t) && (this.element.style[t] = null)
            }
            for (let e = 0, t = s.length; e < t; ++e) {
              let t = s[e];
              t instanceof o && !t.preserveState && t._unapply()
            }
          }, !0);
          else
            for (let e = 0, t = n.length; e < t; ++e) {
              let t = this.tweenProps[n[e]];
              t.current = t.target, t.isActive = !1
            }
      }
      onDOMRead(e) {
        for (let t = 0, A = this.attributes.length; t < A; t++) {
          let A = this.attributes[t];
          this.tweenProps[A].previousValue = this.tweenProps[A].current;
          let i = this.getNearestKeyframeForAttribute(A, e);
          i && i.onDOMRead(A), this.tweenProps[A].previousValue !== this.tweenProps[A].current && (this.needsWrite = !0)
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
        for (let t = 0, A = this.cssAttributes.length; t < A; t++) this.cssAttributes[t].set(e);
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
          const A = this.mat4;
          A[0] = 1, A[1] = 0, A[2] = 0, A[3] = 0, A[4] = 0, A[5] = 1, A[6] = 0, A[7] = 0, A[8] = 0, A[9] = 0, A[10] = 1, A[11] = 0, A[12] = 0, A[13] = 0, A[14] = 0, A[15] = 1;
          const i = e.x.current,
            s = e.y.current,
            n = e.z.current;
          if (A[12] = A[0] * i + A[4] * s + A[8] * n + A[12], A[13] = A[1] * i + A[5] * s + A[9] * n + A[13], A[14] = A[2] * i + A[6] * s + A[10] * n + A[14], A[15] = A[3] * i + A[7] * s + A[11] * n + A[15], 0 !== e.rotation.current || 0 !== e.rotationZ.current) {
            const t = (e.rotation.current || e.rotationZ.current) * p;
            y.rotateZ(A, A, t)
          }
          if (0 !== e.rotationX.current) {
            const t = e.rotationX.current * p;
            y.rotateX(A, A, t)
          }
          if (0 !== e.rotationY.current) {
            const t = e.rotationY.current * p;
            y.rotateY(A, A, t)
          }
          1 === e.scale.current && 1 === e.scaleX.current && 1 === e.scaleY.current || y.scale(A, A, [e.scale.current, e.scale.current, 1]), t.transform = "matrix3d(" + A[0] + "," + A[1] + "," + A[2] + "," + A[3] + "," + A[4] + "," + A[5] + "," + A[6] + "," + A[7] + "," + A[8] + "," + A[9] + "," + A[10] + "," + A[11] + "," + A[12] + "," + A[13] + "," + A[14] + "," + A[15] + ")"
        } else if (e.x.isActive || e.y.isActive || e.rotation.isActive || e.rotationZ.isActive || e.scale.isActive || e.scaleX.isActive || e.scaleY.isActive) {
          const A = this.mat2d;
          A[0] = 1, A[1] = 0, A[2] = 0, A[3] = 1, A[4] = 0, A[5] = 0;
          const i = e.x.current,
            s = e.y.current,
            n = A[0],
            r = A[1],
            a = A[2],
            o = A[3],
            l = A[4],
            h = A[5];
          if (A[0] = n, A[1] = r, A[2] = a, A[3] = o, A[4] = n * i + a * s + l, A[5] = r * i + o * s + h, 0 !== e.rotation.current || 0 !== e.rotationZ.current) {
            const t = (e.rotation.current || e.rotationZ.current) * p,
              i = A[0],
              s = A[1],
              n = A[2],
              r = A[3],
              a = A[4],
              o = A[5],
              l = Math.sin(t),
              h = Math.cos(t);
            A[0] = i * h + n * l, A[1] = s * h + r * l, A[2] = i * -l + n * h, A[3] = s * -l + r * h, A[4] = a, A[5] = o
          }
          e.scaleX.isActive || e.scaleY.isActive ? (A[0] = A[0] * e.scaleX.current, A[1] = A[1] * e.scaleX.current, A[2] = A[2] * e.scaleY.current, A[3] = A[3] * e.scaleY.current) : (A[0] = A[0] * e.scale.current, A[1] = A[1] * e.scale.current, A[2] = A[2] * e.scale.current, A[3] = A[3] * e.scale.current), t.transform = "matrix(" + A[0] + ", " + A[1] + ", " + A[2] + ", " + A[3] + ", " + A[4] + ", " + A[5] + ")"
        }
      }
      handleEventDispatch() {
        if (0 !== this.keyframesRequiringDispatch.length) {
          for (let e = 0, t = this.keyframesRequiringDispatch.length; e < t; e++) {
            let t = this.keyframesRequiringDispatch[e];
            t.needsEventDispatch = !1, this.eventObject.keyframe = t, this.eventObject.pageMetrics = i.pageMetrics, this.eventObject.event = t.event, this.trigger(t.event, this.eventObject)
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
          1 !== this.keyframes[e].length && this.keyframes[e].sort(i.KeyframeComparison)
        }), this.updateDeferredPropertyValues()
      }
      refreshMetrics() {
        let e = new Set([this.element]);
        this._allKeyframes.forEach(t => t.anchors.forEach(t => e.add(t))), this.group.metrics.refreshCollection(e), this.group.keyframesDirty = !0
      }
      updateDeferredPropertyValues() {
        for (let e = 0, t = this.attributes.length; e < t; e++) {
          let t = this.attributes[e],
            A = this.keyframes[t];
          if (!(A[0].keyframeType > i.KeyframeTypes.InterpolationForward))
            for (let e = 0, i = A.length; e < i; e++) {
              let s = A[e];
              null === s.jsonProps[t][0] && (0 === e ? s.jsonProps[t][0] = s.animValues[t][0] = this.tweenProps[t].current : s.animValues[t][0] = A[e - 1].animValues[t][1]), null === s.jsonProps[t][1] && (s.animValues[t][1] = e === i - 1 ? this.tweenProps[t].current : A[e + 1].animValues[t][0]), s.snapAtCreation && (s.jsonProps[t][0] = s.animValues[t][0], s.jsonProps[t][1] = s.animValues[t][1])
            }
        }
      }
      getBounds(e) {
        this.boundsMin = Number.MAX_VALUE, this.boundsMax = -Number.MAX_VALUE;
        for (let t = 0, A = this.attributes.length; t < A; t++) {
          let A = this.keyframes[this.attributes[t]];
          for (let t = 0; t < A.length; t++) {
            let i = A[t];
            this.boundsMin = Math.min(i.start, this.boundsMin), this.boundsMax = Math.max(i.end, this.boundsMax), e.min = Math.min(i.start, e.min), e.max = Math.max(i.end, e.max)
          }
        }
      }
      getNearestKeyframeForAttribute(e, t) {
        t = void 0 !== t ? t : this.group.position.local;
        let A = null,
          i = Number.POSITIVE_INFINITY,
          s = this.keyframes[e];
        if (void 0 === s) return null;
        let n = s.length;
        if (0 === n) return null;
        if (1 === n) return s[0];
        for (let e = 0; e < n; e++) {
          let n = s[e];
          if (n.isInRange(t)) {
            A = n;
            break
          }
          let r = Math.min(Math.abs(t - n.start), Math.abs(t - n.end));
          r < i && (i = r, A = n)
        }
        return A
      }
      getAllKeyframesForAttribute(e) {
        return this.keyframes[e]
      }
      updateKeyframe(e, t) {
        e.parseOptions(t), e.evaluateConstraints(), this.group.keyframesDirty = !0, m.update(() => {
          this.trigger(i.EVENTS.ON_KEYFRAME_UPDATED, e), this.group.trigger(i.EVENTS.ON_KEYFRAME_UPDATED, e)
        }, !0)
      }
      removeKeyframe(e) {
        return e.controller !== this ? Promise.resolve(null) : (e.markedForRemoval = !0, this.group.keyframesDirty = !0, new Promise(t => {
          this.group.rafEmitter.executor.eventEmitter.once("before:draw", () => {
            t(e), e.destroy();
            let A = this._allKeyframes.indexOf(e); - 1 !== A && this._allKeyframes.splice(A, 1)
          })
        }))
      }
      updateAnimation(e, t) {
        return this.group.gui && console.warn("KeyframeController.updateAnimation(keyframe,props) has been deprecated. Please use updateKeyframe(keyframe,props)"), this.updateKeyframe(e, t)
      }
    }
  }, {
    14: 14,
    15: 15,
    18: 18,
    2: 2,
    26: 26,
    27: 27,
    30: 30,
    31: 31,
    32: 32,
    35: 35,
    36: 36,
    39: 39,
    41: 41,
    49: 49,
    55: 55,
    67: 67,
    68: 68,
    69: 69,
    70: 70,
    71: 71
  }],
  29: [function(e, t, A) {
    "use strict";
    const i = e(26),
      s = e(31),
      n = e(39);
    class r extends i {
      constructor(e, t) {
        super(e, t), this.keyframeType = s.KeyframeTypes.Event, this.isApplied = !1, this.hasDuration = !1, this.isCurrentlyInRange = !1
      }
      parseOptions(e) {
        e.x = void 0, e.y = void 0, e.scale = void 0, e.scaleX = void 0, e.scaleY = void 0, e.rotation = void 0, e.style = void 0, e.cssClass = void 0, e.rotation = void 0, e.opacity = void 0, e.hold = void 0, this.event = e.event, this.animValues[this.event] = [0, 0], void 0 === this.controller.tweenProps[this.event] && (this.controller.tweenProps[this.event] = new n(0, 1, !1)), super.parseOptions(e), this.keyframeType = s.KeyframeTypes.Event
      }
      updateLocalProgress(e) {
        if (this.hasDuration) {
          let t = this.isCurrentlyInRange,
            A = e >= this.start && e <= this.end;
          if (t === A) return;
          return this.isCurrentlyInRange = A, void(A && !t ? this._trigger(this.event + ":enter") : t && !A && this._trigger(this.event + ":exit"))
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
    r.DATA_ATTRIBUTE = "data-anim-event", t.exports = r
  }, {
    26: 26,
    31: 31,
    39: 39
  }],
  30: [function(e, t, A) {
    "use strict";
    const i = e(40);
    t.exports = class {
      constructor(e, t, A = !1) {
        this.isGroup = A, this.group = e, this.controller = t, this.controllers = [], this.tweenProps = new i
      }
    }
  }, {
    40: 40
  }],
  31: [function(e, t, A) {
    "use strict";
    const i = {
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
        for (let e = 0; e < i.BREAKPOINTS.length; e++) {
          let t = i.BREAKPOINTS[e];
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
      TweenProps: e(40),
      TargetValue: e(39),
      CSSTargetValue: e(32),
      pageMetrics: new function() {
        this.scrollX = 0, this.scrollY = 0, this.windowWidth = 0, this.windowHeight = 0, this.documentOffsetX = 0, this.documentOffsetY = 0, this.previousBreakpoint = "", this.breakpoint = ""
      },
      KeyframeComparison: function(e, t) {
        return e.start < t.start ? -1 : e.start > t.start ? 1 : 0
      }
    };
    t.exports = i
  }, {
    32: 32,
    39: 39,
    40: 40
  }],
  32: [function(e, t, A) {
    "use strict";
    const i = e(39);
    t.exports = class extends i {
      constructor(e, t, A, i, s = !1, n) {
        super(e, t, A), this.key = i, this.round = s, this.suffix = n
      }
      set(e) {
        let t = this.current;
        this.round && (t = Math.round(t)), this.suffix && (t += this.suffix), e[this.key] = t
      }
    }
  }, {
    39: 39
  }],
  33: [function(e, t, A) {
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
  34: [function(e, t, A) {
    "use strict";
    const i = e(31),
      s = (e, t) => null == e ? t : e;
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
        let A = new n(e);
        return this._metrics.set(e, A), this._refreshMetrics(e, A)
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
        if (t = t || this._metrics.get(e), !(e instanceof Element)) return t.width = s(e.width, 0), t.height = s(e.height, 0), t.top = s(e.top, s(e.y, 0)), t.left = s(e.left, s(e.x, 0)), t.right = t.left + t.width, t.bottom = t.top + t.height, t;
        if (void 0 === e.offsetWidth) {
          let A = e.getBoundingClientRect();
          return t.width = A.width, t.height = A.height, t.top = i.pageMetrics.scrollY + A.top, t.left = i.pageMetrics.scrollX + A.left, t.right = t.left + t.width, t.bottom = t.top + t.height, t
        }
        t.width = e.offsetWidth, t.height = e.offsetHeight, t.top = i.pageMetrics.documentOffsetY, t.left = i.pageMetrics.documentOffsetX;
        let A = e;
        for (; A;) t.top += A.offsetTop, t.left += A.offsetLeft, A = A.offsetParent;
        return t.right = t.left + t.width, t.bottom = t.top + t.height, t
      }
    }
  }, {
    31: 31
  }],
  35: [function(e, t, A) {
    "use strict";
    t.exports = class {
      constructor(e) {
        this.controller = e, this.element = this.controller.element, this.keyframe = null, this.event = "", this.tweenProps = this.controller.tweenProps
      }
    }
  }, {}],
  36: [function(e, t, A) {
    "use strict";
    const i = e(31),
      s = e(26),
      n = e(29),
      r = e(27),
      a = function(e) {
        for (let t in e) {
          let A = e[t];
          if (-1 === i.KeyframeJSONReservedWords.indexOf(t) && Array.isArray(A)) return !0
        }
        return !1
      };
    t.exports = function(e) {
      if (void 0 !== e.cssClass || void 0 !== e.style) {
        if (a(e)) throw "CSS Keyframes cannot tween values, please use multiple keyframes instead";
        return r
      }
      if (a(e)) return s;
      if (e.event) return n;
      throw delete e.anchors, "Could not determine tween type based on ".concat(JSON.stringify(e))
    }
  }, {
    26: 26,
    27: 27,
    29: 29,
    31: 31
  }],
  37: [function(e, t, A) {
    "use strict";
    t.exports = class {
      constructor() {
        this.local = 0, this.localUnclamped = 0, this.lastPosition = 0
      }
    }
  }, {}],
  38: [function(e, t, A) {
    "use strict";
    const {
      map: i
    } = e(61), s = {};
    class n {
      constructor(e, t, A, i) {
        this.mass = e, this.stiffness = t, this.damping = A, this.initialVelocity = i, this.m_w0 = Math.sqrt(this.stiffness / this.mass), this.m_zeta = this.damping / (2 * Math.sqrt(this.stiffness * this.mass)), this.m_zeta < 1 ? (this.m_wd = this.m_w0 * Math.sqrt(1 - this.m_zeta * this.m_zeta), this.m_A = 1, this.m_B = (this.m_zeta * this.m_w0 - this.initialVelocity) / this.m_wd) : (this.m_wd = 0, this.m_A = 1, this.m_B = -this.initialVelocity + this.m_w0)
      }
      solve(e) {
        return 1 - (e = this.m_zeta < 1 ? Math.exp(-e * this.m_zeta * this.m_w0) * (this.m_A * Math.cos(this.m_wd * e) + this.m_B * Math.sin(this.m_wd * e)) : (this.m_A + this.m_B * e) * Math.exp(-e * this.m_w0))
      }
    }
    const r = /\d*\.?\d+/g;
    n.fromCSSString = function(e) {
      let t = e.match(r);
      if (4 !== t.length) throw "SpringEasing could not convert ".concat(cssString, " to spring params");
      let A = t.map(Number),
        a = new n(...A);
      const o = a.solve.bind(a);
      let l = 0;
      let h = function() {
        if (s[e]) return s[e];
        let t, A = 0;
        for (;;) {
          l += 1 / 6;
          if (1 === o(l)) {
            if (A++, A >= 16) {
              t = l * (1 / 6);
              break
            }
          } else A = 0
        }
        return s[e] = t, s[e]
      }();
      return function(e) {
        return 0 === e || 1 === e ? e : o(i(e, 0, 1, 0, h))
      }
    }, t.exports = n
  }, {
    61: 61
  }],
  39: [function(e, t, A) {
    "use strict";
    t.exports = class {
      constructor(e, t, A) {
        this.epsilon = parseFloat(t), this.snapAtCreation = A, this.initialValue = e, this.target = e, this.current = e, this.previousValue = e, this.isActive = !1
      }
    }
  }, {}],
  40: [function(e, t, A) {
    "use strict";
    t.exports = class {}
  }, {}],
  41: [function(e, t, A) {
    "use strict";
    t.exports = () => Math.random().toString(16).slice(-4)
  }, {}],
  42: [function(e, t, A) {
    "use strict";
    const i = Math.abs;
    class s {
      constructor(e, t, A, i) {
        this.cp = new Float32Array(6), this.cp[0] = 3 * e, this.cp[1] = 3 * (A - e) - this.cp[0], this.cp[2] = 1 - this.cp[0] - this.cp[1], this.cp[3] = 3 * t, this.cp[4] = 3 * (i - t) - this.cp[3], this.cp[5] = 1 - this.cp[3] - this.cp[4]
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
        var t, A, s, n, r, a;
        for (s = e, a = 0; a < 5; a++) {
          if (n = this.sampleCurveX(s) - e, i(n) < 1e-5) return s;
          if (r = this.sampleCurveDerivativeX(s), i(r) < 1e-5) break;
          s -= n / r
        }
        if ((s = e) < (t = 0)) return t;
        if (s > (A = 1)) return A;
        for (; t < A;) {
          if (n = this.sampleCurveX(s), i(n - e) < 1e-5) return s;
          e > n ? t = s : A = s, s = .5 * (A - t) + t
        }
        return s
      }
      solve(e) {
        return this.sampleCurveY(this.solveCurveX(e))
      }
    }
    const n = /\d*\.?\d+/g;
    s.fromCSSString = function(e) {
      let t = e.match(n);
      if (4 !== t.length) throw "UnitBezier could not convert ".concat(e, " to cubic-bezier");
      let A = t.map(Number),
        i = new s(A[0], A[1], A[2], A[3]);
      return i.solve.bind(i)
    }, t.exports = s
  }, {}],
  43: [function(e, t, A) {
    "use strict";
    t.exports = class {
      constructor(e, t) {
        this.a = e.top - t, this.a < 0 && (this.a = e.top), this.b = e.top, this.d = e.bottom, this.c = Math.max(this.d - t, this.b)
      }
    }
  }, {}],
  44: [function(e, t, A) {
    "use strict";
    const i = e(45),
      s = new(e(34));
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
        let A = this.group.expressionParser.parseExpression(e, t);
        return this.group.convertScrollPositionToTValue(A)
      }
      destroy() {
        this.group = null
      }
      static parse(e, t) {
        return (t = t || {}) && (s.clear(), t.target && s.add(t.target), t.anchors && t.anchors.forEach(e => s.add(e))), t.metrics = s, n._parse(e, t)
      }
      static _parse(e, t) {
        return i.Parse(e).execute(t)
      }
    }
    n.programs = i.programs, "undefined" != typeof window && (window.ExpressionParser = n), t.exports = n
  }, {
    34: 34,
    45: 45
  }],
  45: [function(e, t, A) {
    "use strict";
    const i = e(31),
      s = e(61),
      n = {},
      r = {
        smoothstep: (e, t, A) => (A = r.clamp((A - e) / (t - e), 0, 1)) * A * (3 - 2 * A),
        deg: e => 180 * e / Math.PI,
        rad: e => e * Math.PI / 180,
        random: (e, t) => Math.random() * (t - e) + e,
        atan: Math.atan2
      };
    Object.getOwnPropertyNames(Math).forEach(e => r[e] ? null : r[e.toLowerCase()] = Math[e]), Object.getOwnPropertyNames(s).forEach(e => r[e] ? null : r[e.toLowerCase()] = s[e]);
    let a = null;
    const o = "a",
      l = "ALPHA",
      h = "(",
      c = ")",
      d = "PLUS",
      u = "MINUS",
      m = "MUL",
      p = "DIV",
      g = "INTEGER_CONST",
      f = "FLOAT_CONST",
      C = ",",
      y = "EOF",
      I = {
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
        MATH_FUNCTION: new RegExp("\\b(".concat(Object.keys(r).join("|"), ")\\b"), "i")
      },
      v = function(e, t, A, i = "") {
        let s = t.slice(Math.max(A, 0), Math.min(t.length, A + 3)),
          n = new Error("Expression Error. ".concat(e, ' in expression "').concat(t, '", near "').concat(s, '"'));
        throw console.error(n.message, a ? a.keyframe || a.target : ""), n
      },
      b = {
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
    class E {
      constructor(e, t) {
        this.type = e, this.value = t
      }
    }
    E.ONE = new E("100", 100), E.EOF = new E(y, null);
    class _ {
      constructor(e) {
        this.type = e
      }
    }
    class w extends _ {
      constructor(e, t) {
        super("UnaryOp"), this.token = this.op = e, this.expr = t
      }
    }
    class T extends _ {
      constructor(e, t, A) {
        super("BinOp"), this.left = e, this.op = t, this.right = A
      }
    }
    class S extends _ {
      constructor(e, t) {
        if (super("MathOp"), this.op = e, this.list = t, b[e.value] && t.length !== b[e.value]) throw new Error("Incorrect number of arguments for '".concat(e.value, "'. Received ").concat(t.length, ", expected ").concat(b[e.value]))
      }
    }
    class x extends _ {
      constructor(e) {
        super("Num"), this.token = e, this.value = e.value
      }
    }
    class M extends _ {
      constructor(e, t, A) {
        super("RefValue"), this.num = e, this.ref = t, this.unit = A
      }
    }
    class k extends _ {
      constructor(e, t) {
        super("CSSValue"), this.ref = e, this.propertyName = t
      }
    }
    class R extends _ {
      constructor(e, t) {
        super("PropValue"), this.ref = e, this.propertyName = t
      }
    }
    class O {
      constructor(e) {
        let t;
        for (this.text = e, this.pos = 0, this.char = this.text[this.pos], this.tokens = [];
          (t = this.getNextToken()) && t !== E.EOF;) this.tokens.push(t);
        this.tokens.push(t)
      }
      advance() {
        this.char = this.text[++this.pos]
      }
      skipWhiteSpace() {
        for (; null != this.char && I.WHITE_SPACE.test(this.char);) this.advance()
      }
      name() {
        let e = "";
        for (; null != this.char && I.ALPHA.test(this.char);) e += this.char, this.advance();
        return new E(l, e)
      }
      number() {
        let e = "";
        for ("." === this.char && (e += this.char, this.advance()); null != this.char && I.DIGIT.test(this.char);) e += this.char, this.advance();
        if (null != this.char && "." === this.char)
          for (e.includes(".") && v("Number appears to contain 2 decimal points", this.text, this.pos), e += this.char, this.advance(); null != this.char && I.DIGIT.test(this.char);) e += this.char, this.advance();
        return "." === e && v("Attempted to parse a number, but found only a decimal point", this.text, this.pos), e.includes(".") ? new E(f, parseFloat(e)) : new E(g, parseInt(e))
      }
      getNextToken() {
        for (; null != this.char;)
          if (I.WHITE_SPACE.test(this.char)) this.skipWhiteSpace();
          else {
            if ("." === this.char || I.DIGIT.test(this.char)) return this.number();
            if ("," === this.char) return this.advance(), new E(C, ",");
            if (I.OPERATOR.test(this.char)) {
              let e = "",
                t = this.char;
              switch (t) {
                case "+":
                  e = d;
                  break;
                case "-":
                  e = u;
                  break;
                case "*":
                  e = m;
                  break;
                case "/":
                  e = p
              }
              return this.advance(), new E(e, t)
            }
            if (I.PAREN.test(this.char)) {
              let e = "",
                t = this.char;
              switch (t) {
                case "(":
                  e = h;
                  break;
                case ")":
                  e = c
              }
              return this.advance(), new E(e, t)
            }
            if (I.ALPHA.test(this.char)) return this.name();
            v('Unexpected character "'.concat(this.char, '"'), this.text, this.pos)
          } return E.EOF
      }
    }
    class P {
      constructor(e) {
        this.lexer = e, this.pos = 0
      }
      get currentToken() {
        return this.lexer.tokens[this.pos]
      }
      error(e, t = "") {
        v(e, t, this.lexer.text, this.pos)
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
        for (; this.currentToken.type === d || this.currentToken.type === u;) {
          const t = this.currentToken;
          switch (t.value) {
            case "+":
              this.consume(d);
              break;
            case "-":
              this.consume(u)
          }
          e = new T(e, t, this.term())
        }
        return e
      }
      term() {
        let e = this.factor();
        for (; this.currentToken.type === m || this.currentToken.type === p;) {
          const t = this.currentToken;
          switch (t.value) {
            case "*":
              this.consume(m);
              break;
            case "/":
              this.consume(p)
          }
          e = new T(e, t, this.factor())
        }
        return e
      }
      factor() {
        if (this.currentToken.type === d) return new w(this.consume(d), this.factor());
        if (this.currentToken.type === u) return new w(this.consume(u), this.factor());
        if (this.currentToken.type === g || this.currentToken.type === f) {
          let e = new x(this.currentToken);
          if (this.pos += 1, I.OPERATOR.test(this.currentToken.value) || this.currentToken.type === c || this.currentToken.type === C || this.currentToken.type === y) return e;
          if (this.currentToken.type === l && this.currentToken.value === o) return this.consume(l), new M(e, this.anchorIndex(), this.unit(I.ANY_UNIT));
          if (this.currentToken.type === l) return "%a" === this.currentToken.value && this.error("%a is invalid, try removing the %"), new M(e, null, this.unit());
          this.error("Expected a scaling unit type", "Such as 'h' / 'w'")
        } else {
          if (I.OBJECT_UNIT.test(this.currentToken.value)) return new M(new x(E.ONE), null, this.unit());
          if (this.currentToken.value === o) {
            this.consume(l);
            const e = this.anchorIndex();
            if (I.OBJECT_UNIT.test(this.currentToken.value)) return new M(new x(E.ONE), e, this.unit())
          } else if (this.currentToken.type === l) {
            if ("calc" === this.currentToken.value) return this.consume(l), this.expr();
            if ("css" === this.currentToken.value || "var" === this.currentToken.value || "prop" === this.currentToken.value) {
              const e = "prop" !== this.currentToken.value ? k : R;
              this.consume(l), this.consume(h);
              const t = this.propertyName();
              let A = null;
              return this.currentToken.type === C && (this.consume(C), this.consume(l), A = this.anchorIndex()), this.consume(c), new e(A, t)
            }
            if (I.MATH_FUNCTION.test(this.currentToken.value)) {
              const e = this.currentToken.value.toLowerCase();
              if ("number" == typeof r[e]) return this.consume(l), new x(new E(l, r[e]));
              const t = E[e] || new E(e, e),
                A = [];
              this.consume(l), this.consume(h);
              let i = null;
              do {
                this.currentToken.value === C && this.consume(C), i = this.expr(), A.push(i)
              } while (this.currentToken.value === C);
              return this.consume(c), new S(t, A)
            }
          } else if (this.currentToken.type === h) {
            this.consume(h);
            let e = this.expr();
            return this.consume(c), e
          }
        }
        this.error("Unexpected token ".concat(this.currentToken.value))
      }
      propertyName() {
        let e = "";
        for (; this.currentToken.type === l || this.currentToken.type === u;) e += this.currentToken.value, this.pos += 1;
        return e
      }
      unit(e = I.ANY_UNIT) {
        const t = this.currentToken;
        if (t.type === l && e.test(t.value)) return this.consume(l), new E(l, t.value = t.value.replace(/%(h|w)/, "$1").replace("%", "h"));
        this.error("Expected unit type")
      }
      anchorIndex() {
        const e = this.currentToken;
        if (e.type === g) return this.consume(g), new x(e);
        this.error("Invalid anchor reference", ". Should be something like a0, a1, a2")
      }
      parse() {
        const e = this.expr();
        return this.currentToken !== E.EOF && this.error("Unexpected token ".concat(this.currentToken.value)), e
      }
    }
    class W {
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
          case u:
            return this.visit(e.left) - this.visit(e.right);
          case m:
            return this.visit(e.left) * this.visit(e.right);
          case p:
            return this.visit(e.left) / this.visit(e.right)
        }
      }
      RefValue(e) {
        let t = this.unwrapReference(e),
          A = e.unit.value,
          s = e.num.value;
        const n = a.metrics.get(t);
        switch (A) {
          case "h":
            return .01 * s * n.height;
          case "t":
            return .01 * s * n.top;
          case "vh":
            return .01 * s * i.pageMetrics.windowHeight;
          case "vw":
            return .01 * s * i.pageMetrics.windowWidth;
          case "px":
            return s;
          case "w":
            return .01 * s * n.width;
          case "b":
            return .01 * s * n.bottom;
          case "l":
            return .01 * s * n.left;
          case "r":
            return .01 * s * n.right
        }
      }
      PropValue(e) {
        return (null === e.ref ? a.target : a.anchors[e.ref.value])[e.propertyName]
      }
      CSSValue(e) {
        let t = this.unwrapReference(e);
        const A = getComputedStyle(t).getPropertyValue(e.propertyName);
        return "" === A ? 0 : W.Parse(A).execute(a)
      }
      Num(e) {
        return e.value
      }
      UnaryOp(e) {
        return e.op.type === d ? +this.visit(e.expr) : e.op.type === u ? -this.visit(e.expr) : void 0
      }
      MathOp(e) {
        let t = e.list.map(e => this.visit(e));
        return r[e.op.value].apply(null, t)
      }
      unwrapReference(e) {
        return null === e.ref ? a.target : (e.ref.value >= a.anchors.length && console.error("Not enough anchors supplied for expression ".concat(this.parser.lexer.text), a.target), a.anchors[e.ref.value])
      }
      execute(e) {
        return a = e, this.visit(this.root)
      }
      static Parse(e) {
        return n[e] || (n[e] = new W(new P(new O(e))))
      }
    }
    W.programs = n, t.exports = W
  }, {
    31: 31,
    61: 61
  }],
  46: [function(e, t, A) {
    "use strict";
    const i = e(2).EventEmitterMicro,
      s = e(61),
      n = e(49),
      r = e(31),
      a = e(30),
      o = e(37),
      l = e(43),
      h = e(34),
      c = e(44),
      d = e(28),
      u = {};
    "undefined" != typeof window && (u.create = e(8), u.update = e(18), u.draw = e(14));
    let m = 0;
    t.exports = class extends i {
      constructor(e, t) {
        super(), this.anim = t, this.element = e, this.name = this.name || e.getAttribute("data-anim-scroll-group"), this.isEnabled = !0, this.position = new o, this.metrics = new h, this.metrics.add(this.element), this.expressionParser = new c(this), this.boundsMin = 0, this.boundsMax = 0, this.timelineUpdateRequired = !1, this._keyframesDirty = !1, this.viewableRange = this.createViewableRange(), this.defaultEase = r.KeyframeDefaults.ease, this.keyframeControllers = [], this.updateProgress(this.getPosition()), this.onDOMRead = this.onDOMRead.bind(this), this.onDOMWrite = this.onDOMWrite.bind(this), this.gui = null, this.finalizeInit()
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
          u.draw(() => {
            const A = this.keyframeControllers.indexOf(e); - 1 !== A ? (this.keyframeControllers.splice(A, 1), e.onDOMWrite(), e.destroy(), this.gui && this.gui.create(), t()) : t()
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
        this.rafEmitter && this.rafEmitter.destroy(), this.rafEmitter = e || new u.create, this.rafEmitter.on("update", this.onDOMRead), this.rafEmitter.on("draw", this.onDOMWrite), this.rafEmitter.once("external", () => this.reconcile())
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
        let A = this.getControllerForTarget(e);
        return null === A && (A = new d(this, e), this.keyframeControllers.push(A)), this.keyframesDirty = !0, A.addKeyframe(t)
      }
      addEvent(e, t) {
        t.event = t.event || "Generic-Event-Name-" + m++;
        let A = void 0 !== t.end && t.end !== t.start;
        const i = this.addKeyframe(e, t);
        return A ? (t.onEnterOnce && i.controller.once(t.event + ":enter", t.onEnterOnce), t.onExitOnce && i.controller.once(t.event + ":exit", t.onExitOnce), t.onEnter && i.controller.on(t.event + ":enter", t.onEnter), t.onExit && i.controller.on(t.event + ":exit", t.onExit)) : (t.onEventOnce && i.controller.once(t.event, t.onEventOnce), t.onEventReverseOnce && i.controller.once(t.event + ":reverse", t.onEventReverseOnce), t.onEvent && i.controller.on(t.event, t.onEvent), t.onEventReverse && i.controller.on(t.event + ":reverse", t.onEventReverse)), i
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
        for (let t = 0, A = this.keyframeControllers.length; t < A; t++) this.keyframeControllers[t].determineActiveKeyframes(e)
      }
      updateBounds() {
        if (0 === this.keyframeControllers.length) return this.boundsMin = 0, void(this.boundsMax = 0);
        let e = {
          min: Number.POSITIVE_INFINITY,
          max: Number.NEGATIVE_INFINITY
        };
        for (let t = 0, A = this.keyframeControllers.length; t < A; t++) this.keyframeControllers[t].getBounds(e);
        let t = this.convertTValueToScrollPosition(e.min),
          A = this.convertTValueToScrollPosition(e.max);
        A - t < r.pageMetrics.windowHeight ? (e.min = this.convertScrollPositionToTValue(t - .5 * r.pageMetrics.windowHeight), e.max = this.convertScrollPositionToTValue(A + .5 * r.pageMetrics.windowHeight)) : (e.min -= .001, e.max += .001), this.boundsMin = e.min, this.boundsMax = e.max, this.timelineUpdateRequired = !0
      }
      createViewableRange() {
        return new l(this.metrics.get(this.element), r.pageMetrics.windowHeight)
      }
      _onBreakpointChange(e, t) {
        this.keyframesDirty = !0, this.determineActiveKeyframes()
      }
      updateProgress(e) {
        this.hasDuration() ? (this.position.localUnclamped = (e - this.viewableRange.a) / (this.viewableRange.d - this.viewableRange.a), this.position.local = s.clamp(this.position.localUnclamped, this.boundsMin, this.boundsMax)) : this.position.local = this.position.localUnclamped = 0
      }
      performTimelineDispatch() {
        for (let e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].updateLocalProgress(this.position.local);
        this.trigger(r.EVENTS.ON_TIMELINE_UPDATE, this.position.local), this.trigger("update", this.position.local), this.timelineUpdateRequired = !1, this.position.lastPosition !== this.position.local && (this.position.lastPosition <= this.boundsMin && this.position.localUnclamped > this.boundsMin ? (this.trigger(r.EVENTS.ON_TIMELINE_START, this), this.trigger("start", this)) : this.position.lastPosition >= this.boundsMin && this.position.localUnclamped < this.boundsMin ? (this.trigger(r.EVENTS.ON_TIMELINE_START + ":reverse", this), this.trigger("start:reverse", this)) : this.position.lastPosition <= this.boundsMax && this.position.localUnclamped >= this.boundsMax ? (this.trigger(r.EVENTS.ON_TIMELINE_COMPLETE, this), this.trigger("complete", this)) : this.position.lastPosition >= this.boundsMax && this.position.localUnclamped < this.boundsMax && (this.trigger(r.EVENTS.ON_TIMELINE_COMPLETE + ":reverse", this), this.trigger("complete:reverse", this))), null !== this.gui && this.gui.onScrollUpdate(this.position)
      }
      updateTimeline(e) {
        if (!this.isEnabled) return !1;
        void 0 === e && (e = this.getPosition()), this.updateProgress(e);
        let t = this.position.lastPosition === this.boundsMin || this.position.lastPosition === this.boundsMax,
          A = this.position.localUnclamped === this.boundsMin || this.position.localUnclamped === this.boundsMax;
        if (!this.timelineUpdateRequired && t && A && this.position.lastPosition === e) return void(this.position.local = this.position.localUnclamped);
        if (this.timelineUpdateRequired || this.position.localUnclamped > this.boundsMin && this.position.localUnclamped < this.boundsMax) return this.performTimelineDispatch(), this.requestDOMChange(), void(this.position.lastPosition = this.position.localUnclamped);
        let i = this.position.lastPosition > this.boundsMin && this.position.lastPosition < this.boundsMax,
          s = this.position.localUnclamped <= this.boundsMin || this.position.localUnclamped >= this.boundsMax;
        if (i && s) return this.performTimelineDispatch(), this.requestDOMChange(), void(this.position.lastPosition = this.position.localUnclamped);
        const n = this.position.lastPosition < this.boundsMin && this.position.localUnclamped > this.boundsMax,
          r = this.position.lastPosition > this.boundsMax && this.position.localUnclamped < this.boundsMax;
        (n || r) && (this.performTimelineDispatch(), this.requestDOMChange(), this.position.lastPosition = this.position.localUnclamped), null !== this.gui && this.gui.onScrollUpdate(this.position)
      }
      _onScroll(e) {
        this.updateTimeline(e)
      }
      convertScrollPositionToTValue(e) {
        return this.hasDuration() ? s.map(e, this.viewableRange.a, this.viewableRange.d, 0, 1) : 0
      }
      convertTValueToScrollPosition(e) {
        return this.hasDuration() ? s.map(e, 0, 1, this.viewableRange.a, this.viewableRange.d) : 0
      }
      hasDuration() {
        return this.viewableRange.a !== this.viewableRange.d
      }
      getPosition() {
        return r.pageMetrics.scrollY
      }
      getControllerForTarget(e) {
        if (!e._animInfo || !e._animInfo.controllers) return null;
        if (e._animInfo.controller && e._animInfo.controller.group === this) return e._animInfo.controller;
        const t = e._animInfo.controllers;
        for (let e = 0, A = t.length; e < A; e++)
          if (t[e].group === this) return t[e];
        return null
      }
      trigger(e, t) {
        if (void 0 !== this._events[e])
          for (let A = this._events[e].length - 1; A >= 0; A--) void 0 !== t ? this._events[e][A](t) : this._events[e][A]()
      }
      set keyframesDirty(e) {
        this._keyframesDirty = e, this._keyframesDirty && this.requestDOMChange()
      }
      get keyframesDirty() {
        return this._keyframesDirty
      }
    }
  }, {
    14: 14,
    18: 18,
    2: 2,
    28: 28,
    30: 30,
    31: 31,
    34: 34,
    37: 37,
    43: 43,
    44: 44,
    49: 49,
    61: 61,
    8: 8
  }],
  47: [function(e, t, A) {
    "use strict";
    const i = e(46),
      s = e(25),
      n = e(61);
    let r = 0;
    const a = {};
    "undefined" != typeof window && (a.create = e(8));
    class o extends i {
      constructor(e, t) {
        e || ((e = document.createElement("div")).className = "TimeGroup-" + r++), super(e, t), this.name = this.name || e.getAttribute("data-anim-time-group"), this._isPaused = !0, this._repeats = 0, this._isReversed = !1, this._timeScale = 1, this._chapterPlayer = new s(this), this.now = performance.now()
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
        let A = this.time() + t * this._timeScale;
        if (this._repeats === o.REPEAT_FOREVER || this._repeats > 0) {
          let e = !1;
          !this._isReversed && A > this.boundsMax ? (A -= this.boundsMax, e = !0) : this._isReversed && A < 0 && (A = this.boundsMax + A, e = !0), e && (this._repeats = this._repeats === o.REPEAT_FOREVER ? o.REPEAT_FOREVER : this._repeats - 1)
        }
        this.time(A);
        let i = !this._isReversed && this.position.local !== this.duration,
          s = this._isReversed && 0 !== this.position.local;
        i || s ? this._playheadEmitter.run() : this.paused(!0)
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
        for (let t = 0, A = this.keyframeControllers.length; t < A; t++) this.keyframeControllers[t].getBounds(e);
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
    o.REPEAT_FOREVER = -1, t.exports = o
  }, {
    25: 25,
    46: 46,
    61: 61,
    8: 8
  }],
  48: [function(e, t, A) {
    "use strict";
    const i = e(46),
      s = (e(25), e(61));
    let n = 0;
    const r = {};
    "undefined" != typeof window && (r.create = e(8));
    t.exports = class extends i {
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
        this.now = performance.now(), this._timeEmitter = new r.create, this._timeEmitter.on("update", this.onTimeEmitterUpdate), this._timeEmitter.run(), super.setupRAFEmitter(e)
      }
      addKeyframe(e, t) {
        if (void 0 !== t.start || void 0 !== t.end) throw Error("Tweens do not have a start or end, they can only have a duration. Consider using a TimeGroup instead");
        if ("number" != typeof t.duration) throw Error("Tween options.duration is undefined, or is not a number");
        let A, i;
        t.start = (t.delay || 0) + this.position.localUnclamped, t.end = t.start + t.duration, t.preserveState = !0, t.snapAtCreation = !0, e._animInfo && (A = e._animInfo.group, i = e._animInfo.controller);
        let s = super.addKeyframe(e, t);
        return e._animInfo.group = A, e._animInfo.controller = i, t.onStart && s.controller.once("draw", e => {
          e.keyframe = s, t.onStart(e), e.keyframe = null
        }), t.onDraw && s.controller.on("draw", e => {
          e.keyframe = s, t.onDraw(e), e.keyframe = null
        }), this.removeOverlappingProps(s), this.keyframes.push(s), this._timeEmitter.willRun() || (this.now = performance.now(), this._timeEmitter.run()), s
      }
      removeOverlappingProps(e) {
        if (e.controller._allKeyframes.length <= 1) return;
        let t = Object.keys(e.animValues),
          A = e.controller;
        for (let i = 0, s = A._allKeyframes.length; i < s; i++) {
          const s = A._allKeyframes[i];
          if (s === e) continue;
          if (s.markedForRemoval) continue;
          let n = Object.keys(s.animValues),
            r = n.filter(e => t.includes(e));
          r.length !== n.length ? r.forEach(e => delete s.animValues[e]) : s.markedForRemoval = !0
        }
      }
      onTimeEmitterUpdate(e) {
        if (this._isPaused || 0 === this.keyframeControllers.length) return;
        let t = performance.now(),
          A = (t - this.now) / 1e3;
        this.now = t;
        let i = this.position.local + A;
        this.position.local = this.position.localUnclamped = i, this.onTimeUpdate()
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
            A = this.keyframeControllers[e];
          for (let e = 0, i = A._allKeyframes.length; e < i; e++)
            if (!A._allKeyframes[e].destroyed) {
              t = !1;
              break
            } t && A.remove()
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
        this.position.local = this.position.localUnclamped = s.clamp(e, this.boundsMin, this.boundsMax), this.onTimeUpdate()
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
    25: 25,
    46: 46,
    61: 61,
    8: 8
  }],
  49: [function(e, t, A) {
    "use strict";
    t.exports = function(e) {
      return e.reduce((e, t) => (e[t] = t, e), {})
    }
  }, {}],
  50: [function(e, t, A) {
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
  51: [function(e, t, A) {
    "use strict";
    const i = e(2).EventEmitterMicro,
      s = e(31),
      n = {
        create: e(8),
        update: e(18),
        draw: e(14)
      },
      r = () => {};
    let a = 0;
    t.exports = class extends i {
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
        const A = this.addKeyframe(e);
        return t ? (e.onEnterOnce && A.controller.once(e.event + ":enter", e.onEnterOnce), e.onExitOnce && A.controller.once(e.event + ":exit", e.onExitOnce), e.onEnter && A.controller.on(e.event + ":enter", e.onEnter), e.onExit && A.controller.on(e.event + ":exit", e.onExit)) : (e.onEventOnce && A.controller.once(e.event, e.onEventOnce), e.onEventReverseOnce && A.controller.once(e.event + ":reverse", e.onEventReverseOnce), e.onEvent && A.controller.on(e.event, e.onEvent), e.onEventReverse && A.controller.on(e.event + ":reverse", e.onEventReverse)), A
      }
      addRAFLoop(e) {
        let t = ["start", "end"];
        if (!t.every(t => e.hasOwnProperty(t))) return void console.log("BubbleGum.BaseComponent::addRAFLoop required options are missing: " + t.join(" "));
        const A = new n.create;
        A.on("update", e.onUpdate || r), A.on("draw", e.onDraw || r), A.on("draw", () => A.run());
        const {
          onEnter: i,
          onExit: s
        } = e;
        return e.onEnter = () => {
          A.run(), i && i()
        }, e.onExit = () => {
          A.cancel(), s && s()
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
        return s.pageMetrics
      }
    }
  }, {
    14: 14,
    18: 18,
    2: 2,
    31: 31,
    8: 8
  }],
  52: [function(e, t, A) {
    "use strict";
    const i = e(2).EventEmitterMicro,
      s = e(56),
      n = e(24),
      r = e(31),
      a = e(53),
      o = {};
    class l extends i {
      constructor(e, t = {}) {
        super(), this.el = e, this.anim = n, this.componentAttribute = t.attribute || "data-component-list", this.components = [], this.componentsInitialized = !1, this.el.getAttribute("data-anim-scroll-group") || this.el.setAttribute("data-anim-scroll-group", "bubble-gum-group"), s.add(() => {
          n.initialize().then(() => {
            this.initComponents(), this.setupEvents(), this.components.forEach(e => e.mounted()), this.trigger(l.EVENTS.DOM_COMPONENTS_MOUNTED)
          })
        })
      }
      initComponents() {
        const e = Array.prototype.slice.call(this.el.querySelectorAll("[".concat(this.componentAttribute, "]")));
        this.el.hasAttribute(this.componentAttribute) && e.push(this.el);
        for (let t = 0; t < e.length; t++) {
          let A = e[t],
            i = A.getAttribute(this.componentAttribute).split(" ");
          for (let e = 0, t = i.length; e < t; e++) {
            let t = i[e];
            "" !== t && " " !== t && this.addComponent({
              el: A,
              componentName: t
            })
          }
        }
        this.componentsInitialized = !0
      }
      setupEvents() {
        this.onResizeDebounced = this.onResizeDebounced.bind(this), this.onResizeImmediate = this.onResizeImmediate.bind(this), this.onBreakpointChange = this.onBreakpointChange.bind(this), n.on(r.PageEvents.ON_RESIZE_IMMEDIATE, this.onResizeImmediate), n.on(r.PageEvents.ON_RESIZE_DEBOUNCED, this.onResizeDebounced), n.on(r.PageEvents.ON_BREAKPOINT_CHANGE, this.onBreakpointChange)
      }
      addComponent(e) {
        const {
          el: t,
          componentName: A,
          data: i
        } = e;
        if (!a.hasOwnProperty(A)) throw "BubbleGum::addComponent could not add component to '" + t.className + "'. No component type '" + A + "' found!";
        const s = a[A];
        if (!l.componentIsSupported(s, A)) return void 0 === o[A] && (console.log("BubbleGum::addComponent unsupported component '" + A + "'. Reason: '" + A + ".IS_SUPPORTED' returned false"), o[A] = !0), null;
        let n = t.dataset.componentList || "";
        n.includes(A) || (t.dataset.componentList = n.split(" ").concat(A).join(" "));
        let h = new s({
          el: t,
          data: i,
          componentName: e.componentName,
          gum: this,
          pageMetrics: r.pageMetrics
        });
        return this.components.push(h), this.componentsInitialized && h.mounted(), h
      }
      removeComponent(e) {
        const t = this.components.indexOf(e); - 1 !== t && (this.components.splice(t, 1), e.el.dataset.componentList = e.el.dataset.componentList.split(" ").filter(t => t !== e.componentName).join(" "), e.destroy())
      }
      getComponentOfType(e, t = document.documentElement) {
        const A = "[".concat(this.componentAttribute, "*=").concat(e, "]"),
          i = t.matches(A) ? t : t.querySelector(A);
        return i ? this.components.find(t => t instanceof a[e] && t.el === i) : null
      }
      getComponentsOfType(e, t = document.documentElement) {
        const A = "[".concat(this.componentAttribute, "*=").concat(e, "]"),
          i = t.matches(A) ? [t] : Array.from(t.querySelectorAll(A));
        return this.components.filter(t => t instanceof a[e] && i.includes(t.el))
      }
      getComponentsForElement(e) {
        return this.components.filter(t => t.el === e)
      }
      onResizeImmediate() {
        this.components.forEach(e => e.onResizeImmediate(r.pageMetrics))
      }
      onResizeDebounced() {
        this.components.forEach(e => e.onResizeDebounced(r.pageMetrics))
      }
      onBreakpointChange() {
        this.components.forEach(e => e.onBreakpointChange(r.pageMetrics))
      }
      static componentIsSupported(e, t) {
        const A = e.IS_SUPPORTED;
        if (void 0 === A) return !0;
        if ("function" != typeof A) return console.error('BubbleGum::addComponent error in "' + t + '".IS_SUPPORTED - it should be a function which returns true/false'), !0;
        const i = e.IS_SUPPORTED();
        return void 0 === i ? (console.error('BubbleGum::addComponent error in "' + t + '".IS_SUPPORTED - it should be a function which returns true/false'), !0) : i
      }
    }
    l.EVENTS = {
      DOM_COMPONENTS_MOUNTED: "DOM_COMPONENTS_MOUNTED"
    }, t.exports = l
  }, {
    2: 2,
    24: 24,
    31: 31,
    53: 53,
    56: 56
  }],
  53: [function(e, t, A) {
    "use strict";
    t.exports = {
      BaseComponent: e(51)
    }
  }, {
    51: 51
  }],
  54: [function(e, t, A) {
    "use strict";
    class i {
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
        const A = e === this.currentRequest;
        A && (clearTimeout(this.currentRequestTimeout), requestAnimationFrame(() => {
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
    class s {
      constructor() {
        this.buckets = {}
      }
      _requestAnimationStartWithOptions({
        bucket: e,
        duration: t,
        element: A,
        name: s,
        priority: n
      }) {
        if (void 0 !== A && (("number" != typeof(e = Math.round(A.getBoundingClientRect().top + document.documentElement.scrollTop)) || isNaN(e)) && (e = void 0), n = r(A)), void 0 === n && (n = 0), void 0 === e) {
          const e = Promise.resolve();
          return e.cancel = function() {}, e
        }
        var a;
        const o = new Promise(A => {
          this.buckets[e] || (this.buckets[e] = new i(e)), a = {
            callback: A,
            duration: t,
            name: s,
            priority: n
          }, this.buckets[e].addRequest(a)
        });
        return o.cancel = () => {
          this.buckets[e].removeRequest(a)
        }, o
      }
      requestAnimationStart(e, t, A, i) {
        var s;
        return s = "object" == typeof e && e ? e : {
          bucket: e,
          duration: t / 1e3,
          name: A,
          priority: i
        }, this._requestAnimationStartWithOptions(s)
      }
    }
    var n = new s;

    function r(e) {
      return Array.prototype.indexOf.call(e.parentElement.children, e)
    }
    t.exports = {
      CarnivalDirector: s,
      director: n,
      indexOf: r
    }
  }, {}],
  55: [function(e, t, A) {
    "use strict";
    "undefined" != typeof window && (window.DOMMatrix = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix);
    const i = 180 / Math.PI,
      s = e => Math.round(1e6 * e) / 1e6;

    function n(e) {
      return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2])
    }

    function r(e, t) {
      return 0 === t ? Array.from(e) : [e[0] / t, e[1] / t, e[2] / t]
    }

    function a(e, t) {
      return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
    }

    function o(e, t, A, i) {
      return [e[0] * A + t[0] * i, e[1] * A + t[1] * i, e[2] * A + t[2] * i]
    }

    function l(e) {
      const t = new Float32Array(4),
        A = new Float32Array(3),
        l = new Float32Array(3),
        h = new Float32Array(3);
      h[0] = e[3][0], h[1] = e[3][1], h[2] = e[3][2];
      const c = new Array(3);
      for (let t = 0; t < 3; t++) c[t] = e[t].slice(0, 3);
      A[0] = n(c[0]), c[0] = r(c[0], A[0]), l[0] = a(c[0], c[1]), c[1] = o(c[1], c[0], 1, -l[0]), A[1] = n(c[1]), c[1] = r(c[1], A[1]), l[0] /= A[1], l[1] = a(c[0], c[2]), c[2] = o(c[2], c[0], 1, -l[1]), l[2] = a(c[1], c[2]), c[2] = o(c[2], c[1], 1, -l[2]), A[2] = n(c[2]), c[2] = r(c[2], A[2]), l[1] /= A[2], l[2] /= A[2];
      const d = (u = c[1], m = c[2], [u[1] * m[2] - u[2] * m[1], u[2] * m[0] - u[0] * m[2], u[0] * m[1] - u[1] * m[0]]);
      var u, m;
      if (a(c[0], d) < 0)
        for (let e = 0; e < 3; e++) A[e] *= -1, c[e][0] *= -1, c[e][1] *= -1, c[e][2] *= -1;
      let p;
      return t[0] = .5 * Math.sqrt(Math.max(1 + c[0][0] - c[1][1] - c[2][2], 0)), t[1] = .5 * Math.sqrt(Math.max(1 - c[0][0] + c[1][1] - c[2][2], 0)), t[2] = .5 * Math.sqrt(Math.max(1 - c[0][0] - c[1][1] + c[2][2], 0)), t[3] = .5 * Math.sqrt(Math.max(1 + c[0][0] + c[1][1] + c[2][2], 0)), c[2][1] > c[1][2] && (t[0] = -t[0]), c[0][2] > c[2][0] && (t[1] = -t[1]), c[1][0] > c[0][1] && (t[2] = -t[2]), p = t[0] < .001 && t[0] >= 0 && t[1] < .001 && t[1] >= 0 ? [0, 0, s(180 * Math.atan2(c[0][1], c[0][0]) / Math.PI)] : function(e) {
        const [t, A, n, r] = e, a = t * t, o = A * A, l = n * n, h = t * A + n * r, c = r * r + a + o + l;
        return h > .49999 * c ? [0, 2 * Math.atan2(t, r) * i, 90] : h < -.49999 * c ? [0, -2 * Math.atan2(t, r) * i, -90] : [s(Math.atan2(2 * t * r - 2 * A * n, 1 - 2 * a - 2 * l) * i), s(Math.atan2(2 * A * r - 2 * t * n, 1 - 2 * o - 2 * l) * i), s(Math.asin(2 * t * A + 2 * n * r) * i)]
      }(t), {
        translation: h,
        rotation: p,
        eulerRotation: p,
        scale: [s(A[0]), s(A[1]), s(A[2])]
      }
    }
    t.exports = function(e) {
      e instanceof Element && (e = String(getComputedStyle(e).transform).trim());
      let t = new DOMMatrix(e);
      const A = new Array(4);
      for (let e = 1; e < 5; e++) {
        const i = A[e - 1] = new Float32Array(4);
        for (let A = 1; A < 5; A++) i[A - 1] = t["m".concat(e).concat(A)]
      }
      return l(A)
    }
  }, {}],
  56: [function(e, t, A) {
    "use strict";
    let i = !1,
      s = !1,
      n = [],
      r = -1;
    t.exports = {
      NUMBER_OF_FRAMES_TO_WAIT: 30,
      add: function(e) {
        if (s && e(), n.push(e), i) return;
        i = !0;
        let t = document.documentElement.scrollHeight,
          A = 0;
        const a = () => {
          let e = document.documentElement.scrollHeight;
          if (t !== e) A = 0;
          else if (A++, A >= this.NUMBER_OF_FRAMES_TO_WAIT) return void n.forEach(e => e());
          t = e, r = requestAnimationFrame(a)
        };
        r = requestAnimationFrame(a)
      },
      reset() {
        cancelAnimationFrame(r), i = !1, s = !1, n = []
      }
    }
  }, {}],
  57: [function(e, t, A) {
    "use strict";
    t.exports = function(e, t) {
      var A = null,
        i = function() {
          null === A && (e.apply(this, arguments), A = setTimeout((function() {
            A = null
          }), t))
        };
      return i.cancel = function() {
        clearTimeout(A)
      }, i
    }
  }, {}],
  58: [function(e, t, A) {
    "use strict";
    const i = e(66),
      s = e(2).EventEmitterMicro,
      n = e(18),
      r = e(59);
    var a, o = "";
    navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && (o = r);
    t.exports = class extends s {
      constructor(e, t = {}) {
        if (super(), "VIDEO" !== e.tagName.toUpperCase()) throw "@marcom/InlineVideoProxy : element should be a VIDEO tag";
        if (e.__InlineVideoProxyInstance) throw '@marcom/InlineVideoProxy : This Video element is already managed by InlineVideoProxyHub, look for the instance in "videoElement.__InlineVideoProxyInstance" ';
        return null !== e.getAttribute("src") && this.log('Warning the video already contains a SRC defined. it is not recommended to have one on load., set the "data-video-source-basepath" attribute in the video tag instead.'), this.videoElement = e, a = t.EVENTS, this._logs = t.log || !1, this._checkLogEnabled(), this.log("starting Video Loader"), this._manualLoad = t.manualLoad || !1, this._enableHardCacheClean = t.cacheClean || !1, this._enableHardCacheClean && console.error("@marcom/InlineVideoProxy : cache clean option is enabled DISABLE FOR PRODUCTION"), this._elementEnteredView = this._elementEnteredView.bind(this), this._elementExitedView = this._elementExitedView.bind(this), this._elementEnteredLoadingArea = this._elementEnteredLoadingArea.bind(this), this._elementExitedLoadingArea = this._elementExitedLoadingArea.bind(this), this._onChangeCallback = this._onChangeCallback.bind(this), this._onChangeRetinaCallback = this._onChangeRetinaCallback.bind(this), this.VIDEO_PREVENT_LOAD = "data-video-prevent-load", this.VIDEO_DATA_BASEPATH = "data-video-source-basepath", this.VIDEO_SOURCE_PREFIX = "data-video-source-prefix", this.VIDEO_RETINA_ENABLED = "data-video-source-retina-enabled", this.VIDEO_VIEW_AREA_KEYFRAME = "data-view-area-keyframe", this.VIDEO_LOADING_AREA_KEYFRAME = "data-loading-area-keyframe", this.animSystem = this._findAnim(), null === this.animSystem ? (this.log("anim not found"), null) : (this._scrollGroup = this.animSystem.getGroupForTarget(document.body), this.viewportEmitterMicro = t.viewportEmitterMicro, this.viewportEmitterMicro.on(i.CHANGE_EVENTS.VIEWPORT, this._onChangeCallback), this.viewportEmitterMicro.on(i.CHANGE_EVENTS.RETINA, this._onChangeRetinaCallback), this.videoStatsMap = new Map, this.keyframes = {}, "loading" === document.readyState ? document.addEventListener("readystatechange", e => {
          "interactive" === document.readyState && this._initVL()
        }) : this._initVL(), this.videoElement.__InlineVideoProxyInstance = this, this)
      }
      _initVL() {
        this._enhanceVideos()
      }
      _findAnim() {
        var e = Array.from(document.querySelectorAll("[data-anim-group],[data-anim-scroll-group],[data-anim-time-group]"));
        return e.map(e => e._animInfo ? e._animInfo.group : null).filter(e => null !== e), e[0] && e[0]._animInfo ? e[0]._animInfo.group.anim : (console.error("@marcom/InlineVideoProxy : AnimSystem not found, please initialize anim before instantiating vl"), null)
      }
      _checkLogEnabled() {
        this._logs ? this.log = (...e) => console.warn("@marcom/InlineVideoProxy :", ...e) : this.log = () => {}
      }
      _onChangeCallback(e) {
        this._changeVideoSource()
      }
      _onChangeRetinaCallback(e) {
        this._changeVideoSource(!0)
      }
      _getAllVideoSources(e) {
        this._videoSourceBasepath = e.getAttribute(this.VIDEO_DATA_BASEPATH), this._videoSourceBasepath || console.error("VideoProxy :  Base path not defined, please provide a full relative path to the video with a trailing '/' "), this._videoSourcePrefix = e.getAttribute(this.VIDEO_SOURCE_PREFIX) || "", this._videoSourceRetinaEnabled = e.getAttribute(this.VIDEO_RETINA_ENABLED) || "false";
        let t = e => {
            let t = this._enableHardCacheClean ? "?" + Math.round(1e6 * Math.random()) : "",
              A = {};
            return A.x = "".concat(this._videoSourceBasepath).concat(this._videoSourcePrefix).concat(e, ".mp4").concat(t), A.xx = "".concat(this._videoSourceBasepath).concat(this._videoSourcePrefix).concat(e, ".mp4").concat(t), "false" !== this._videoSourceRetinaEnabled && (A.xx = "".concat(this._videoSourceBasepath).concat(this._videoSourcePrefix).concat(e, "_2x.mp4").concat(t)), A
          },
          A = this.viewportEmitterMicro.BREAKPOINTS.reduce((e, A, i) => {
            let s = {};
            return Object.defineProperty(s, A.name, {
              value: t(A.name),
              enumerable: !0
            }), e = Object.assign(e, s)
          }, {});
        this.videoSources = A
      }
      _getVideoSource(e) {
        let t = this.viewportEmitterMicro.retina ? "xx" : "x",
          A = this.viewportEmitterMicro.viewport;
        this.videoSource = this.videoSources[A][t], this._addToStatsMap(e), this.viewportEmitterMicro.BREAKPOINTS.map(e => "vp-" + e.name).forEach(t => e.classList.remove(t)), e.classList.add("vp-" + A)
      }
      _addToStatsMap(e) {
        this.videoStatsMap.has(e.videoSource) || this.videoStatsMap.set(e.videoSource, {})
      }
      _updateStatsMap(e, t, A) {
        this.videoStatsMap.get(e.videoSource)[t] = A
      }
      _getValueStatsMap(e, t) {
        let A = this.videoStatsMap.get(e.videoSource);
        return null !== A[t] ? A[t] : null
      }
      _enhanceVideos() {
        let e = this.videoElement;
        this._getAllVideoSources(e), this._getVideoSource(e), this._isUnloadedVariable = !1, Object.defineProperty(this, "isUnloaded", {
          get() {
            return this._isUnloadedVariable
          },
          set(t) {
            t ? (e.classList.remove("video-loaded"), e.classList.add("video-unloaded")) : (e.classList.add("video-loaded"), e.classList.remove("video-unloaded")), this._isUnloadedVariable = t
          }
        }), Object.defineProperty(this, "currentTime", {
          get() {
            return this.videoElement.currentTime
          }
        }), Object.defineProperty(this, "duration", {
          get() {
            return e.duration ? e.duration : (this.log("Warning on duration:: wait for metadata to be loaded to get duration"), -1)
          }
        }), this.isUnloaded = !0, this.isInViewArea = !1, this.isInLoadingArea = !1, this.loadProgress = 0, this.hasMetadata = !1, this.downloadComplete = !1, this.canBePlayedThrough = !1, this._preventLoad = this._shouldPreventLoadViewportSize(e), e.setAttribute("src", o), this.promises = {}, this.promises.hasMetadata = null, this.promises.canBePlayedThrough = null, this.promises.downloadComplete = null, this._initVideoPromises(this);
        let t = () => {
          n((A, i) => {
            this.isUnloaded || (!this.hasMetadata && e.readyState >= 1 && this._promiseResolver.hasMetadata(e), !this.canBePlayedThrough && e.readyState > 3 && this._promiseResolver.canBePlayedThrough(e), e.buffered.length && (this.loadProgress = e.buffered.end(0), e.buffered.end(0) >= .99 * e.duration) ? this._promiseResolver.downloadComplete(e) : t())
          })
        };
        this._startCheckStats = () => {
          t()
        }, this.animSystemVersion = 2, "function" == typeof this.animSystem.remove && (this.animSystemVersion = 3);
        let A = e.getAttribute(this.VIDEO_LOADING_AREA_KEYFRAME);
        A = null === A ? 3 === this.animSystemVersion ? {
          start: "t - 200vh",
          end: "b + 100vh"
        } : {
          start: "0% - 200vh",
          end: "100% + 100vh"
        } : JSON.parse(A), A.event = "video-proxy-loading-area";
        let i = e.getAttribute(this.VIDEO_VIEW_AREA_KEYFRAME);
        i = null === i ? 3 === this.animSystemVersion ? {
          start: "t - 100vh",
          end: "b"
        } : {
          start: "0% - 100vh",
          end: "100%"
        } : JSON.parse(i), i.event = "video-proxy-view-area", this.keyframes.loadArea = this._scrollGroup.addKeyframe(e, A), this.keyframes.loadArea.controller.on("video-proxy-loading-area:enter", this._elementEnteredLoadingArea), this.keyframes.loadArea.controller.on("video-proxy-loading-area:exit", this._elementExitedLoadingArea), this.keyframes.viewArea = this._scrollGroup.addKeyframe(e, i), this.keyframes.viewArea.controller.on("video-proxy-view-area:enter", this._elementEnteredView), this.keyframes.viewArea.controller.on("video-proxy-view-area:exit", this._elementExitedView), this.stopLoad = (t = !0) => {
          this.isUnloaded || (e.setAttribute("src", o), this.isUnloaded = !0, t ? (this.downloadComplete = !0, this.trigger(a.DOWNLOAD_CANCEL, this)) : this.trigger(a.DOWNLOAD_PAUSE, this))
        }, this.stop = () => {
          this._videoPlayPromise ? this._videoPlayPromise.then(() => {
            e.pause(), e.currentTime = 0
          }).catch(t => {
            this.log("error when stopping", t, e)
          }) : e.pause()
        }, this.pause = () => {
          n((t, A) => {
            e.pause()
          })
        }, this.play = () => new Promise(t => e.getAttribute("paused") ? (this.log("paused video:", e), void t(!1)) : this._shouldPreventLoadViewportSize(e) ? (t(!1), void this.log("cannot play a video in this viewport that has attribute :" + this.VIDEO_PREVENT_LOAD, e)) : void n((A, i) => {
          n((A, i) => {
            setTimeout(() => {
              this._videoPlayPromise = Object.getPrototypeOf(e).play.call(e), this.trigger("playing", e), t(e), this._videoPlayPromise && this._videoPlayPromise.catch(t => {
                this.isUnloaded && this.log("error when playing, there is no src", t, e, "this.isUnloaded:", this.isUnloaded)
              })
            }, 20)
          })
        })), this.gotoAndPlay = (t = null) => new Promise(A => e.getAttribute("paused") ? (this.log("paused video:", e), void A(!1)) : this._shouldPreventLoadViewportSize(e) ? (A(!1), void this.log("cannot play a video that has attribute :" + this.VIDEO_PREVENT_LOAD, e)) : void n((i, s) => {
          null !== t && (e.pause(), e.currentTime = t), n((t, i) => {
            setTimeout(() => {
              this._videoPlayPromise = Object.getPrototypeOf(e).play.call(e), this.trigger("playing", e), A(e), this._videoPlayPromise && this._videoPlayPromise.catch(t => {
                this.isUnloaded && this.log("error when playing, there is no src", t, e, "this.isUnloaded:", this.isUnloaded)
              })
            }, 20)
          })
        })), this.gotoAndStop = (t = null) => new Promise(A => e.getAttribute("paused") ? (this.log("paused video:", e), void A(!1)) : this._shouldPreventLoadViewportSize(e) ? (A(!1), void this.log("cannot play a video that has attribute :" + this.VIDEO_PREVENT_LOAD, e)) : void n((i, s) => {
          null !== t && (e.pause(), e.currentTime = t, this.trigger("paused", e), A(e))
        })), this.startLoad = () => {
          this._startDownloading()
        }, this.loadSrc = () => {
          this._preventLoad ? this.log("cannot load a video that has attribute :" + this.VIDEO_PREVENT_LOAD, e) : this._videoPlayPromise ? this._videoPlayPromise.then(() => {
            Object.getPrototypeOf(e).load.call(e)
          }).catch(t => {
            this.isUnloaded && this.log("error when loading the play function was interrupted", t, e, "isUnloaded", this.isUnloaded)
          }) : Object.getPrototypeOf(e).load.call(e)
        }
      }
      _shouldPreventLoadViewportSize(e) {
        if (0 === e.offsetHeight) return this.log(" this video is not displayed, make sure it has a display attribute different than 'none' on any of its ancestors"), !0;
        let t = this.viewportEmitterMicro.viewport.toUpperCase(),
          A = e.getAttribute(this.VIDEO_PREVENT_LOAD);
        return null !== A && ("" === A || (A = JSON.parse(A), A = A.map(e => e.toUpperCase()), null != A.find(e => t === e)))
      }
      _initVideoPromises(e) {
        this._promiseResolver = {}, this._promiseResolver.hasMetadata = null, this._promiseResolver.canBePlayedThrough = null, this._promiseResolver.downloadComplete = null;
        this.promises.hasMetadata = new Promise(e => {
          this._promiseResolver.hasMetadata = e
        }).then(e => (this.hasMetadata = !0, this.trigger(a.HAS_METADATA, this), this.log(":::Video has metadata:::", e.className), e));
        this.promises.canBePlayedThrough = new Promise(e => {
          this._promiseResolver.canBePlayedThrough = e
        }).then(e => (this.canBePlayedThrough = !0, this._promiseResolver.hasMetadata(e), n(() => {
          e.classList.add("video-can-play")
        }), this.trigger(a.CAN_PLAY_THROUGH, this), this.log(":::Video Ready to play:::", e.className), e));
        this.promises.downloadComplete = new Promise(e => {
          this._promiseResolver.downloadComplete = e
        }).then(e => (this.downloadComplete = !0, this._promiseResolver.canBePlayedThrough(e), n(() => {
          e.classList.add("video-download-complete")
        }), this.trigger(a.DOWNLOAD_COMPLETE, this), this.log(":::Video fully Downloaded:::", e.className), e))
      }
      _elementEnteredView(e) {
        if (this.trigger(a.VIDEO_ENTER_VIEW_AREA, this), this.isInViewArea = !0, e.element.autoplay) {
          e.element.currentTime = 0;
          let t = e.element.play();
          void 0 !== t && t.catch(e => {})
        }
      }
      _elementExitedView(e) {
        this.isInViewArea = !1, this.trigger(a.VIDEO_EXIT_VIEW_AREA, this)
      }
      _elementEnteredLoadingArea(e) {
        this.trigger(a.VIDEO_ENTER_LOAD_AREA, this), this.isInLoadingArea = !0, this._manualLoad || this._startDownloading()
      }
      _elementExitedLoadingArea(e) {
        this.trigger(a.VIDEO_EXIT_LOAD_AREA, this), this.isInLoadingArea = !1
      }
      _changeVideoSource(e = !1) {
        e && "false" === this.videoElement._videoSourceRetinaEnabled || (this.pause(), this.stopLoad(!1), this._getVideoSource(this.videoElement), this.loadProgress = 0, this.downloadComplete = !1, this.canBePlayedThrough = !1, this.hasMetadata = !1, this.isUnloaded = !0, this._preventLoad = this._shouldPreventLoadViewportSize(this.videoElement), n(() => {
          this.videoElement.classList.remove("video-download-complete"), this.videoElement.classList.remove("video-can-play")
        }), this._initVideoPromises(this), !this._manualLoad && this.keyframes.loadArea.isCurrentlyInRange && this._startDownloading())
      }
      _startDownloading() {
        this._preventLoad = this._shouldPreventLoadViewportSize(this.videoElement), this._preventLoad || this.isUnloaded && (this.videoElement.setAttribute("src", this.videoSource), this.isUnloaded = !1, this.loadSrc(), this._startCheckStats())
      }
    }
  }, {
    18: 18,
    2: 2,
    59: 59,
    66: 66
  }],
  59: [function(e, t, A) {
    "use strict";
    t.exports = "data:video/mp4;base64,AAAAGGZ0eXBtcDQyAAAAAG1wNDJtcDQxAAAP/m1vb3YAAABsbXZoZAAAAADXfsFZ137BWQABX5AAAB4AAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAA0YdHJhawAAAFx0a2hkAAAAAdd+wVnXfsFZAAAAAQAAAAAAAAu7AAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAQAAAAEAAAAAAAJGVkdHMAAAAcZWxzdAAAAAAAAAABAAALuwAAAAAAAQAAAAAMkG1kaWEAAAAgbWRoZAAAAADXfsFZ137BWQAAdTAAAAPpFccAAAAAAEBoZGxyAAAAAAAAAAB2aWRlAAAAAAAAAAAAAAAAH01haW5jb25jZXB0IFZpZGVvIE1lZGlhIEhhbmRsZXIAAAwobWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAM2hkbHIAAAAAAAAAAGFsaXMAAAAAAAAAAAAAAABBbGlhcyBEYXRhIEhhbmRsZXIAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAALtXN0YmwAAAtEc3RzZAAAAAAAAAABAAALNGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAEAAQAEgAAABIAAAAAAAAAAEKQVZDIENvZGluZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAreYXZjQwFNQB//4QAUZ01AH5ZSvSkGBgZAAAD6QAA6mCEBCrdo6Qk1IAAAAAEGBf////////////+iTUNTVBcOfdWkmlkokmrknsrlzzwBWDdTFUUJOHTxzQSPGJMFyJEvmzMFWFMyJEvomzJESyJOUFSWBMvnuzSFPSEFSJOHyEFMBZvpzVTFyCyTMJDFTvlzJOUFSMBDFyNPEFvlzEFGyIPSJaPOUBMyTJaFvmrzEFGyWFSUJDBMyTJaFvmrzGSBNFySBUFvnukusllnuusllzOVNySFGFSFODFyGSBNFTvpzTFBSDIySBOHFvmppzSEyPQUJNJaBUJPOvmzNBYyMlyBDUJWFvlzNBYyMmyBDUJWFvlzRVBOUyQJvnpzRVBOUyQQvnqzRVBOUyQCvnszCJUySBUFyNPEFvnzCJUySBUFyCVGGFSyTJaFvmtspuunzCJUySBUFvmlllllllzNBYyCJUySBUFvmnllllllzJOUFSyTFBSDIyTIBQFvmzFOUSPQZyDPEJOHyNPEFvmzVTFyIBEBNBSEyUSBOTGPSNvlzTBSyXJEUIvmzTBSyIFJHIUvmzWJEFPyGPSNBUvnzWJEFPyGVMMySBOHFvlzOVNyVOJUTyJOyUJDLvmllmzUJNFyTDBMFvollllzWCWyCVGGFSyGVMMOFTTvmlzWCWyCVGGFSyGVMMOFTTyUSHvmllzWCWyCVGGFSyVOJUTvlzDQCySFNPWBMyEFMBZvlzCJUySBUFyTDBMFvmzDQCyTJaFyTDBMFvozNBYyGSBNFyTJaFvblilililczISEyNBJOUBJOvmzNJOyGSBNFyTJaFvblilililczISEyMPXyEFMBZvlzTNPPUIyGBDUPSvlzISEyQSFWJFXvlzVTFyEFCMPDLJOHyGJMUFSvmzEFCMPDLJOHyBMQIBDlyPGGTFUvjmzEFCMPDLJOHyCFUByPGGTFUvjmzBEBQUJWFyEFCMPDLJOHvlzWJEFPyUZQFvnzWJEFPyQVMMEPXOyGMBHvlzPWFSTDBOyBQQSPQSJBUFyGMBHvlzDPMPVSyQSJNBSJFTvrzUSBOTGFSyDIBSBDUFSJTUJDTvrzNBUSJYyDPFGGJDJFOUTvrzFYUFOEFEyTBSvmzTUSFBNyUZQFvnzGSBNFyNCTyNPEFvlzCJUyEFQUIyMVNBvtzCJUyEFQUIyDISPNBvtzDISPNByGPSNBUvnzQJDyJOJUyRQvnrzQJDyJOJUyRTvnrzWVJyQSFTFOUBUJPOvtuzXSJUFyBVyEFMJNJUFSTvmzXSJUFyTFRyFOEyDPEFvmzXSJUFyUJNFTUBNQTvmzUJNFTUBNQyPGGTFUvlzESN/////0MhkgTRclCTRQzxBb5s10iVBckyThzBckxSckBUsjgTFb5c10iVBckxUckAUskxVL5c10iVBckCQ8kAUskxVL5czDx58jQWMkDw77czDx58jQWMhkgTRcjlTb7c0CQ8j0hBUsgzlMlGUBb5c0CQ8j0hBUskEhUxTlMhjAR75cxiWBRMhkgTRckgVBb5sxkgTRcggUxRMlCTSTh75cxkgTRckAQyyTh8gUkgThxTRTlMjTxBb5c01EhQTcg0hQVCTzskEjxFQ1MiThj75c10iVBckCQ8lCTSTh8kxSb5s10iVBckxVFCTh08iThj75sxkgTRcjlTchwUE8gTDD1xRMhjAR75cw1U1DzcgiVMhjAR075c1g0xMjTxBb5s1g0xMkxTkyQiTCVGb5c0zCQxcjTxBb5s0zCQxcgUh75swskzCQxckhRhUhTgxb5cwskzCQxckGUgTSRL5cwwsjxhkxVL5sw0sjxhkxVL5szRck1QkBTMjTxBb58zRclxSRyFBRMkMjTxBb5szRclxSRyFBRMgsjTxBb5cxTgQjBchgU1MiTlEgchBQyUyTzk75sxTgQjBchgU1MiTlBUshBQyUyTzk75s0CQ8gUsmL45s0CQ8gUsmb45swwTA8kVQTCVGb5cw0Fcj0FL5czlTclCEhQRE75czCVhcjTxBb5cwlRhhUiTh76MzSTskVQTlL5czQWMkVQTlL6pszQWMkzCQxckyWhb5cxTgzxCTh8glRhhUiTh75czD18hBTAWb5cwSUsjTxBb5cxBVAQyMlCEhQRL5swzzk1EgSThRMiTlEgckEhRL5cwSUsk0DCVMhkhUVRTg2b5cwSUskUMjxhkxVL5czSTsiREsiTlBUlgTL5swRAUFCVhcgshkgTRU75syREshkhUVRTg2b5sxiRTBMj0hBUr5cxiWBRMickD0yVCTzr5cyUzzAVBRMhz0E75cyCRUgUskMhkgTRU75cxgU1MjVTFCckhRsjRb5sxgU1Mk1QsgjDwy8jRb5swTDD18j1VMjxskCQ8jVk75swzzk1EgSThRMkhRsjCU1L5cxTgQjBciTlEgcgiR75sxTgQjBciTlEgcrWLb5cxTgQjBciTlEgcqWKb5sxTgQjBciTlEgckAzb5cxTgQjBciTlBUsgiR75sxTgQjBciTlBUsrWLb5cxTgQjBciTlBUsqWKb5sxTgQjBciTlBUskAzb5cxgU1MkhMj0FCTSWgVCTzr5s0VQTlMjTxBb58x0gSTsjTxBb5cx0gSTsj0FMk1EhTh1CL5cwRAUFCVhckVQTlMk1EhTh1CL25YpYpYpYpYpYpYpXMxBTjyUxck1EhTh1CMmb5cxBTjyUxck1EAAAAAIU4dQjIO+XMIwEMvI49I3IwVYUy+XNBUxMXJIURUNQk86+XMFVjIY9I0FTIkQO+ObMIlTIQVBQjIFVi+3MExAgHIk4NLIYwEe+XMExAgHI9AFFUXJYExUW+XMExAgHJRIE5NAFIU5TJYExUW+XNMVHJMMEwk4fI0FRIljJBIVMU5TIYwEe+XNMVHJMMEwk4fIwlNTJBIVMU5TIYwEe9uWKWKWKWKWKWKWKVzMk5RIHJnKlinJMMEwk4fIwlNTCavG9uWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKVzMk5RIHIMLKlinJMMEwk4fIwlNTCavG9uWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKVzMk5RIHINLKlinJMMEwk4fIwlNTCavG9uWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKVzMk5QVLJnKlinJMMEwk4fIwlNTCavG9uWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKVzMk5QVLIMLKlinJMMEwk4fIwlNTCavG9uWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKVzMk5QVLINLKlinJMMEwk4fIwlNTCavG9uWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKVzMk5RIHJnK1i3JMMEwk4fIwlNTCavG9uWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKVzMk5QVLJnK1i3JMMEwk4fIwlNTCavG9uWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKVzMQVYkMXIkRi+XMk5BVTIY9I0FS+XM5U3JAFIEwwUzJAkNO+XP+AAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAPpAAAADXNkdHAAAAAAAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAZAAAAAQAAABRzdGNvAAAAAAAAAAEAADfuAAACMnRyYWsAAABcdGtoZAAAAAHXfsFZ137BWQAAAAIAAAAAAAALuwAAAAAAAAAAAAAAAAEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAC7sAAAAAAAEAAAAAAaptZGlhAAAAIG1kaGQAAAAA137BWdd+wVkAALuAAAAQABXHAAAAAABEaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAACNNYWluY29uY2VwdCBNUDQgU291bmQgTWVkaWEgSGFuZGxlcgAAAT5taW5mAAAAEHNtaGQAAAAAAAAAAAAAADNoZGxyAAAAAAAAAABhbGlzAAAAAAAAAAAAAAAAQWxpYXMgRGF0YSBIYW5kbGVyAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAM9zdGJsAAAAW3N0c2QAAAAAAAAAAQAAAEttcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAAu4AAAAAAACdlc2RzAAAAAAMZAAAQBBFAFQAGAAAE2LkABNf9BQIRkAYBAgAAABhzdHRzAAAAAAAAAAEAAAAEAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAABAAAAAEAAAAkc3RzegAAAAAAAAAAAAAABAAAA08AAANOAAADTgAAA08AAAAUc3RjbwAAAAAAAAABAAA4BwAAAEB1ZHRhAAAAF6lUSU0ACwAAMDA7MDA7MDA7MDAAAAARqVRTQwAFAAAzMDAwMAAAABCpVFNaAAQAADEwMDEAABs+dXVpZL56z8uXqULonHGZlJHjr6w8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MCA3OS4xNjA0NTEsIDIwMTcvMDUvMDYtMDE6MDg6MjEgICAgICAgICI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICB4bWxuczp4bXBETT0iaHR0cDovL25zLmFkb2JlLmNvbS94bXAvMS4wL0R5bmFtaWNNZWRpYS8iCiAgICB4bWxuczpzdERpbT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL0RpbWVuc2lvbnMjIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA3LTI1VDE3OjA3OjUzLTA3OjAwIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wNy0yNVQxNzowNzo1My0wNzowMCIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wNy0yNVQxNzowNzo1My0wNzowMCIKICAgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBBZnRlciBFZmZlY3RzIENDIDIwMTcgKE1hY2ludG9zaCkiCiAgIHhtcERNOnZpZGVvRnJhbWVSYXRlPSIyOS45NzAwMzAiCiAgIHhtcERNOnZpZGVvRmllbGRPcmRlcj0iUHJvZ3Jlc3NpdmUiCiAgIHhtcERNOnZpZGVvUGl4ZWxBc3BlY3RSYXRpbz0iMS8xIgogICB4bXBETTphdWRpb1NhbXBsZVJhdGU9IjQ4MDAwIgogICB4bXBETTphdWRpb1NhbXBsZVR5cGU9IjE2SW50IgogICB4bXBETTphdWRpb0NoYW5uZWxUeXBlPSJTdGVyZW8iCiAgIHhtcERNOnN0YXJ0VGltZVNjYWxlPSIzMDAwMCIKICAgeG1wRE06c3RhcnRUaW1lU2FtcGxlU2l6ZT0iMTAwMSIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmNzkwNDVlMi1lMTY1LTRjZGMtYWUyYS00NTM3ZjZjNGRlMjIiCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImEyMGM2NTBkLTBlYjEtYjcxOC1kNmUwLTRlNjUwMDAwMDAzYiIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjI3ZTQ2NWVjLWNjMzctNDk1My1hNDI4LTVkNTYxYTdlOGY4MCIKICAgZGM6Zm9ybWF0PSJILjI2NCI+CiAgIDx4bXBETTpkdXJhdGlvbgogICAgeG1wRE06dmFsdWU9Ijc2ODAiCiAgICB4bXBETTpzY2FsZT0iMS85MDAwMCIvPgogICA8eG1wRE06dmlkZW9GcmFtZVNpemUKICAgIHN0RGltOnc9IjE2IgogICAgc3REaW06aD0iMTYiCiAgICBzdERpbTp1bml0PSJwaXhlbCIvPgogICA8eG1wRE06c3RhcnRUaW1lY29kZQogICAgeG1wRE06dGltZUZvcm1hdD0iMjk5N0Ryb3BUaW1lY29kZSIKICAgIHhtcERNOnRpbWVWYWx1ZT0iMDA7MDA7MDA7MDAiLz4KICAgPHhtcERNOmFsdFRpbWVjb2RlCiAgICB4bXBETTp0aW1lVmFsdWU9IjAwOzAwOzAwOzAwIgogICAgeG1wRE06dGltZUZvcm1hdD0iMjk5N0Ryb3BUaW1lY29kZSIvPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0iNjU0YzBhZTQtY2I1My0yZjUxLWIyNzgtYWU5NzAwMDAwMDY4IgogICAgICBzdEV2dDp3aGVuPSIyMDE4LTA3LTI1VDE3OjA3OjUzLTA3OjAwIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBBZG9iZSBNZWRpYSBFbmNvZGVyIENDIDIwMTcuMSAoTWFjaW50b3NoKSIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmYyMDhiNDYzLWYzMWYtNDk3Zi1iNDJjLWZhNWI2ZjEwY2VhZiIKICAgICAgc3RFdnQ6d2hlbj0iMjAxOC0wNy0yNVQxNzowNTowNy0wNzowMCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgQWZ0ZXIgRWZmZWN0cyBDQyAyMDE3IChNYWNpbnRvc2gpIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmMwYWU4MmU0LTdmNmMtNDE0OS04YjEyLTgzMjIwYWU3MzkyNyIKICAgICAgc3RFdnQ6d2hlbj0iMjAxOC0wNy0yNVQxNzowNjowMy0wNzowMCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgQWZ0ZXIgRWZmZWN0cyBDQyAyMDE3IChNYWNpbnRvc2gpIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvY29udGVudCIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2ZTIwMjNlNC1jY2JjLTQxN2EtODMyMC05YWIwNzMzY2ZlYWUiCiAgICAgIHN0RXZ0OndoZW49IjIwMTgtMDctMjVUMTc6MDY6MDMtMDc6MDAiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIEFmdGVyIEVmZmVjdHMgQ0MgMjAxNyAoTWFjaW50b3NoKSIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplNWUyYWRlNC1jNzk2LTQ5ZWMtOWVkOS05Y2Y0Yzg3NWEzNzQiCiAgICAgIHN0RXZ0OndoZW49IjIwMTgtMDctMjVUMTc6MDc6NTMtMDc6MDAiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIEFkb2JlIE1lZGlhIEVuY29kZXIgQ0MgMjAxNy4xIChNYWNpbnRvc2gpIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY3OTA0NWUyLWUxNjUtNGNkYy1hZTJhLTQ1MzdmNmM0ZGUyMiIKICAgICAgc3RFdnQ6d2hlbj0iMjAxOC0wNy0yNVQxNzowNzo1My0wNzowMCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgQWRvYmUgTWVkaWEgRW5jb2RlciBDQyAyMDE3LjEgKE1hY2ludG9zaCkiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii9tZXRhZGF0YSIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgIDx4bXBNTTpEZXJpdmVkRnJvbQogICAgc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNzhlMGNhYy04YzI0LTQ3OWItYTA2Mi0xZmU4MzgxZmM0NDciCiAgICBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM3OGUwY2FjLThjMjQtNDc5Yi1hMDYyLTFmZTgzODFmYzQ0NyIKICAgIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmMjA4YjQ2My1mMzFmLTQ5N2YtYjQyYy1mYTViNmYxMGNlYWYiLz4KICAgPHhtcE1NOkluZ3JlZGllbnRzPgogICAgPHJkZjpCYWc+CiAgICAgPHJkZjpsaQogICAgICBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZjZTE1MDM0LWQ2MTAtNGI2NS1hMzI0LTMwMWJjYWVlNTc2MyIKICAgICAgc3RSZWY6ZnJvbVBhcnQ9InRpbWU6MGQ4MDA4ZjI0MDAwMCIKICAgICAgc3RSZWY6dG9QYXJ0PSJ0aW1lOjBkODAwOGYyNDAwMDAiCiAgICAgIHN0UmVmOm1hc2tNYXJrZXJzPSJOb25lIi8+CiAgICA8L3JkZjpCYWc+CiAgIDwveG1wTU06SW5ncmVkaWVudHM+CiAgIDx4bXBNTTpQYW50cnk+CiAgICA8cmRmOkJhZz4KICAgICA8cmRmOmxpPgogICAgICA8cmRmOkRlc2NyaXB0aW9uCiAgICAgICBkYzpmb3JtYXQ9ImFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5hZnRlcmVmZmVjdHMuY29tcCIKICAgICAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NmNlMTUwMzQtZDYxMC00YjY1LWEzMjQtMzAxYmNhZWU1NzYzIj4KICAgICAgPGRjOnRpdGxlPgogICAgICAgPHJkZjpBbHQ+CiAgICAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5Db21wIDE8L3JkZjpsaT4KICAgICAgIDwvcmRmOkFsdD4KICAgICAgPC9kYzp0aXRsZT4KICAgICAgPHhtcE1NOkluZ3JlZGllbnRzPgogICAgICAgPHJkZjpCYWc+CiAgICAgICAgPHJkZjpsaQogICAgICAgICBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmMzOWMzZjE4LWUwNzUtNDI5Zi1hYzNkLTFmYThhMGVlOTI5YyIKICAgICAgICAgc3RSZWY6ZnJvbVBhcnQ9InRpbWU6MGQ4MDA4ZjI0MDAwMCIKICAgICAgICAgc3RSZWY6dG9QYXJ0PSJ0aW1lOjBkODAwOGYyNDAwMDAiCiAgICAgICAgIHN0UmVmOm1hc2tNYXJrZXJzPSJOb25lIi8+CiAgICAgICA8L3JkZjpCYWc+CiAgICAgIDwveG1wTU06SW5ncmVkaWVudHM+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgIDwvcmRmOmxpPgogICAgIDxyZGY6bGk+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24KICAgICAgIGRjOmZvcm1hdD0iYXBwbGljYXRpb24vdm5kLmFkb2JlLmFmdGVyZWZmZWN0cy5sYXllciIKICAgICAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YzM5YzNmMTgtZTA3NS00MjlmLWFjM2QtMWZhOGEwZWU5MjljIj4KICAgICAgPGRjOnRpdGxlPgogICAgICAgPHJkZjpBbHQ+CiAgICAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5XaGl0ZSBTb2xpZCAxPC9yZGY6bGk+CiAgICAgICA8L3JkZjpBbHQ+CiAgICAgIDwvZGM6dGl0bGU+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgIDwvcmRmOmxpPgogICAgPC9yZGY6QmFnPgogICA8L3htcE1NOlBhbnRyeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PgAADIpmcmVlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFtZGF0AAAAAAAADWMAAAAVZYiAQABPb/73gb8yy1cB6AAAAAEKIRAFAKAb/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADeGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/yEQBQCgG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADf/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3hYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7yEQBQCgG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADf/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3hYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+yEQBQCgG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADf/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3hgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdM="
  }, {}],
  60: [function(e, t, A) {
    "use strict";
    const i = e(66),
      s = e(58);
    var n = null,
      r = [];

    function a(e, t = {}) {
      t.viewportEmitterMicro = function(e) {
        const t = [{
          name: "small",
          mediaQuery: "only screen and (max-width: 735px)"
        }, {
          name: "medium",
          mediaQuery: "only screen and (min-width: 736px) and (max-width: 1068px)"
        }, {
          name: "large",
          mediaQuery: "only screen and (min-width: 1069px)"
        }];
        let A, s = !!e.breakpoints,
          r = e.breakpoints;
        return s ? A = new i({
          breakpoints: r
        }) : (n || (n = new i({
          breakpoints: t
        })), A = n), A
      }(t);
      let A = new s(e, t);
      return r.push(A), A
    }
    class o {
      constructor() {
        throw "InlineVideoProxyHub: cannot be instantiated, use 'InlineVideoProxyHub.load'"
      }
      static newVideoProxy(e, t = {}) {
        return Object.assign(t, {
          EVENTS: o.EVENTS
        }), a(e, t)
      }
    }
    o.videoInstances = r, o.EVENTS = {}, o.EVENTS.HAS_METADATA = "hasmetadataevent", o.EVENTS.DOWNLOAD_COMPLETE = "downloadCompleteEvent", o.EVENTS.CAN_PLAY_THROUGH = "canplaythroughevent", o.EVENTS.DOWNLOAD_PAUSE = "downloadPauseEvent", o.EVENTS.DOWNLOAD_CANCEL = "downloadCanceledEvent", o.EVENTS.VIDEO_ENTER_VIEW_AREA = "videoEnterViewArea", o.EVENTS.VIDEO_ENTER_LOAD_AREA = "videoEnterLoadArea", o.EVENTS.VIDEO_EXIT_VIEW_AREA = "videoExitViewArea", o.EVENTS.VIDEO_EXIT_LOAD_AREA = "videoExitLoadArea", t.exports = o
  }, {
    58: 58,
    66: 66
  }],
  61: [function(e, t, A) {
    "use strict";
    t.exports = {
      lerp: function(e, t, A) {
        return t + (A - t) * e
      },
      map: function(e, t, A, i, s) {
        return i + (s - i) * (e - t) / (A - t)
      },
      mapClamp: function(e, t, A, i, s) {
        var n = i + (s - i) * (e - t) / (A - t);
        return Math.max(i, Math.min(s, n))
      },
      norm: function(e, t, A) {
        return (e - t) / (A - t)
      },
      clamp: function(e, t, A) {
        return Math.max(t, Math.min(A, e))
      },
      randFloat: function(e, t) {
        return Math.random() * (t - e) + e
      },
      randInt: function(e, t) {
        return Math.floor(Math.random() * (t - e) + e)
      }
    }
  }, {}],
  62: [function(e, t, A) {
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
  63: [function(e, t, A) {
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
  64: [function(e, t, A) {
    "use strict";
    var i = e(62),
      s = e(63);

    function n(e, t) {
      if ("function" == typeof e.parseVersion) return e.parseVersion(t);
      var A, i = e.version || e.userAgent;
      "string" == typeof i && (i = [i]);
      for (var s, n = i.length, r = 0; r < n; r++)
        if ((s = t.match((A = i[r], new RegExp(A + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")))) && s.length > 1) return s[1].replace(/_/g, ".");
      return !1
    }

    function r(e, t, A) {
      for (var i, s, r = e.length, a = 0; a < r; a++)
        if ("function" == typeof e[a].test ? !0 === e[a].test(A) && (i = e[a].name) : A.ua.indexOf(e[a].userAgent) > -1 && (i = e[a].name), i) {
          if (t[i] = !0, "string" == typeof(s = n(e[a], A.ua))) {
            var o = s.split(".");
            t.version.string = s, o && o.length > 0 && (t.version.major = parseInt(o[0] || 0), t.version.minor = parseInt(o[1] || 0), t.version.patch = parseInt(o[2] || 0))
          } else "edge" === i && (t.version.string = "12.0.0", t.version.major = "12", t.version.minor = "0", t.version.patch = "0");
          return "function" == typeof e[a].parseDocumentMode && (t.version.documentMode = e[a].parseDocumentMode()), t
        } return t
    }
    t.exports = function(e) {
      var t = {};
      return t.browser = r(s.browser, i.browser, e), t.os = r(s.os, i.os, e), t
    }
  }, {
    62: 62,
    63: 63
  }],
  65: [function(e, t, A) {
    "use strict";
    var i = {
      ua: window.navigator.userAgent,
      platform: window.navigator.platform,
      vendor: window.navigator.vendor
    };
    t.exports = e(64)(i)
  }, {
    64: 64
  }],
  66: [function(e, t, A) {
    "use strict";
    const i = e(2).EventEmitterMicro,
      s = [{
        name: "S",
        mediaQuery: "only screen and (max-width: 734px)"
      }, {
        name: "M",
        mediaQuery: "only screen and (min-width: 735px) and (max-width: 1068px)  "
      }, {
        name: "L",
        mediaQuery: "only screen and (min-width: 1069px) and (max-width: 1440px)"
      }, {
        name: "X",
        mediaQuery: "only screen and (min-width: 1441px)"
      }],
      n = "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)",
      r = "only screen and (orientation: portrait)";
    class a extends i {
      constructor(e = {}) {
        super(), this.BREAKPOINTS = e.breakpoints || s, this._setupProperties(), this._onRetinaChange = this._onRetinaChange.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), this.listenersAdded = {
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
          get: () => window.matchMedia(r).matches ? "portrait" : "landscape"
        }), this.viewport = this.getBreakpoint()
      }
      _setupListeners(e) {
        if (e !== a.CHANGE_EVENTS.RETINA || this.listenersAdded.retina || (window.matchMedia(n).addListener(this._onRetinaChange), this.listenersAdded.retina = !0), e !== a.CHANGE_EVENTS.ORIENTATION || this.listenersAdded.orientation || (window.matchMedia(r).addListener(this._onOrientationChange), this.listenersAdded.orientation = !0), e === a.CHANGE_EVENTS.VIEWPORT && !this.listenersAdded.viewport) {
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
    2: 2
  }],
  67: [function(e, t, A) {
    "use strict";
    t.exports = function() {
      var e = new Float32Array(16);
      return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }
  }, {}],
  68: [function(e, t, A) {
    "use strict";
    t.exports = function(e, t, A) {
      var i = Math.sin(A),
        s = Math.cos(A),
        n = t[4],
        r = t[5],
        a = t[6],
        o = t[7],
        l = t[8],
        h = t[9],
        c = t[10],
        d = t[11];
      t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]);
      return e[4] = n * s + l * i, e[5] = r * s + h * i, e[6] = a * s + c * i, e[7] = o * s + d * i, e[8] = l * s - n * i, e[9] = h * s - r * i, e[10] = c * s - a * i, e[11] = d * s - o * i, e
    }
  }, {}],
  69: [function(e, t, A) {
    "use strict";
    t.exports = function(e, t, A) {
      var i = Math.sin(A),
        s = Math.cos(A),
        n = t[0],
        r = t[1],
        a = t[2],
        o = t[3],
        l = t[8],
        h = t[9],
        c = t[10],
        d = t[11];
      t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]);
      return e[0] = n * s - l * i, e[1] = r * s - h * i, e[2] = a * s - c * i, e[3] = o * s - d * i, e[8] = n * i + l * s, e[9] = r * i + h * s, e[10] = a * i + c * s, e[11] = o * i + d * s, e
    }
  }, {}],
  70: [function(e, t, A) {
    "use strict";
    t.exports = function(e, t, A) {
      var i = Math.sin(A),
        s = Math.cos(A),
        n = t[0],
        r = t[1],
        a = t[2],
        o = t[3],
        l = t[4],
        h = t[5],
        c = t[6],
        d = t[7];
      t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]);
      return e[0] = n * s + l * i, e[1] = r * s + h * i, e[2] = a * s + c * i, e[3] = o * s + d * i, e[4] = l * s - n * i, e[5] = h * s - r * i, e[6] = c * s - a * i, e[7] = d * s - o * i, e
    }
  }, {}],
  71: [function(e, t, A) {
    "use strict";
    t.exports = function(e, t, A) {
      var i = A[0],
        s = A[1],
        n = A[2];
      return e[0] = t[0] * i, e[1] = t[1] * i, e[2] = t[2] * i, e[3] = t[3] * i, e[4] = t[4] * s, e[5] = t[5] * s, e[6] = t[6] * s, e[7] = t[7] * s, e[8] = t[8] * n, e[9] = t[9] * n, e[10] = t[10] * n, e[11] = t[11] * n, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    }
  }, {}],
  72: [function(e, t, A) {
    "use strict";
    t.exports = {
      EnhancementComponent: e(74),
      InlineVideo: e(76),
      DarkMode: e(73),
      Hero: e(75),
      Design: e(78),
      Complications: e(77),
      Alerts: e(84),
      WindDown: e(83),
      FeaturedWorkouts: e(79),
      SearchRoute: e(81),
      TranslationLanguages: e(82),
      Siri: e(86),
      MaxVolume: e(80)
    }
  }, {
    73: 73,
    74: 74,
    75: 75,
    76: 76,
    77: 77,
    78: 78,
    79: 79,
    80: 80,
    81: 81,
    82: 82,
    83: 83,
    84: 84,
    86: 86
  }],
  73: [function(e, t, A) {
    "use strict";
    var i = e(93);
    const s = e(51);
    t.exports = class extends s {
      constructor(e) {
        super(e), this.previousSection = this.el.previousElementSibling, this.nextSection = this.el.nextElementSibling, this.sectionName = ".section-".concat(this.el.getAttribute("data-anim-scroll-group")), this.previousSectionName = ".section-".concat(this.previousSection.getAttribute("data-name")), this.nextSectionName = ".section-".concat(this.nextSection.getAttribute("data-name")), this.timelineGroup = this.gum.anim.createTimeGroup(), this.scrollGroup = this.anim.getGroupForTarget(this.el)
      }
      initialize() {
        this.scrollGroup.addKeyframe(this.el, {
          anchors: this.sectionName,
          start: i.animation.willChange.start,
          end: i.animation.willChange.end,
          cssClass: i.animation.willChange.class,
          toggle: !0,
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        }), this.scrollGroup.addKeyframe(this.previousSection, {
          anchors: this.previousSectionName,
          start: i.animation.willChange.start,
          end: i.animation.willChange.end,
          cssClass: i.animation.willChange.class,
          toggle: !0,
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        }), this.fade()
      }
      fade() {
        let e = this.scrollGroup.addKeyframe(this.el, {
          anchors: [this.sectionName, this.nextSectionName],
          start: "a0t - 50vh",
          end: "a1b + 100vh",
          event: "fadeIn",
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        e.controller.on("fadeIn:enter", () => {
          this.timelineGroup.play()
        }), e.controller.on("fadeIn:exit", () => {
          this.timelineGroup.reverse()
        }), this.timelineGroup.addKeyframe(this.el, {
          start: .1,
          end: .2,
          cssClass: "section-dark",
          toggle: !0,
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        }), this.timelineGroup.addKeyframe(this.previousSection, {
          start: .1,
          end: .2,
          cssClass: "section-dark-sibling",
          toggle: !0,
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        })
      }
      mounted() {
        this.initialize()
      }
      handleFallback() {}
      handleEnhance() {}
      onResizeImmediate(e) {}
      onResizeDebounced(e) {}
      onBreakpointChange(e) {}
      static IS_SUPPORTED() {
        return !document.documentElement.classList.contains("ie")
      }
    }
  }, {
    51: 51,
    93: 93
  }],
  74: [function(e, t, A) {
    "use strict";
    var i = e(93);
    const s = e(51),
      n = e(88),
      r = e(90);
    t.exports = class extends s {
      constructor(e) {
        super(e), this.portraitRatio = Number(Math.round(5 / 16 + "e3") + "e-3"), this.landscapeRatio = Number(Math.round("3.2e3") + "e-3"), this.heightThresholds = {
          landscape: {
            s: {
              min: 226,
              max: 545
            },
            m: {
              min: 290,
              max: 1200
            },
            l: {
              min: 640,
              max: 1400
            }
          },
          portrait: {
            s: {
              min: 454,
              max: 99999
            },
            m: {
              min: 640,
              max: 1400
            },
            l: {
              min: 690,
              max: 1600
            }
          }
        };
        let t = this.el.attributes["data-fallback-thresholds"];
        t && (this.heightThresholds = this._parseDataThresholdValues(JSON.parse(t.value))), this.pageOptions = e, this.emitter = new n, this.isInitialized = !1
      }
      mounted() {
        this._initialize(this.pageOptions), this.isMounted && "function" == typeof this.isMounted && this.isMounted(arguments), this.isInitialized = !0
      }
      _initialize(e) {
        this._getCurrentOrientation(e.pageMetrics), this._setActiveViewportParameters(e.pageMetrics.breakpoint, e.pageMetrics.windowHeight), "HTML" === this.el.tagName && (this.el.classList.add("sections-visible"), this.isTextZoomed = document.documentElement.classList.contains("text-zoom"), this.el.addEventListener("text-zoom", () => this._checkZoomLevel()))
      }
      _getCurrentOrientation(e) {
        this.activeOrientation = e.windowWidth > e.windowHeight ? "landscape" : "portrait", this.aspectRatio = Number(Math.round(e.windowWidth / e.windowHeight + "e3") + "e-3")
      }
      _setActiveViewportParameters(e, t) {
        e = e.toLowerCase();
        let A = this.heightThresholds[this.activeOrientation][e];
        if (t >= A.min && t <= A.max && this.aspectRatio < this.landscapeRatio && this.aspectRatio > this.portraitRatio) {
          if (this.shouldEnhance) return;
          return this._toggleEnhanced(!0), this.gum.anim.forceUpdate(), this.isInitialized && this.handleEnhance && "function" == typeof this.handleEnhance && (this.handleEnhance(A), console.warn("handle enhance", this.handleEnhance), this.gum.anim.forceUpdate({
            updateActiveKeyframes: !0,
            waitForNextUpdate: !0
          })), this.shouldEnhance = !0
        }
        if (!1 === this.shouldEnhance) return;
        this.emitter.emit("event:enhanced-layout");
        const i = new Event("event:enhanced-layout");
        return this.el.dispatchEvent(i), this.isInitialized && this.handleFallback && "function" == typeof this.handleFallback && (this.handleFallback(A), console.warn("handle fallback", this.handleFallback), this.gum.anim.forceUpdate({
          updateActiveKeyframes: !0,
          waitForNextUpdate: !0
        })), this._toggleEnhanced(!1), this.gum.anim.forceUpdate({
          updateActiveKeyframes: !0,
          waitForNextUpdate: !0
        }), this.shouldEnhance = !1
      }
      _toggleEnhanced(e) {
        if (e) return this.el.classList.add("enhanced-layout"), this.el.classList.remove("static-layout"), void this.emitter.emit("event:should-enhance");
        this.el.classList.remove("enhanced-layout"), this.el.classList.add("static-layout"), this.emitter.emit("event:static-layout")
      }
      _parseDataThresholdValues(e) {
        return r(!0, this.heightThresholds, e)
      }
      _checkZoomLevel() {
        let e = document.documentElement.classList.contains("text-zoom");
        this.isTextZoomed != e && (e ? this._toggleEnhanced(!1) : this._toggleEnhanced(!0), this.isTextZoomed = e)
      }
      onResizeDebounced(e) {
        this._getCurrentOrientation(e), this._setActiveViewportParameters(e.breakpoint, e.windowHeight)
      }
      onBreakpointChange(e) {
        this._getCurrentOrientation(e), this._setActiveViewportParameters(e.breakpoint, e.windowHeight)
      }
      static IS_SUPPORTED() {
        return !i.environment.staticLayout
      }
    }
  }, {
    51: 51,
    88: 88,
    90: 90,
    93: 93
  }],
  75: [function(e, t, A) {
    "use strict";
    var i = e(93),
      s = e(89);
    const n = e(51),
      r = e(57),
      a = e(92);
    let o;
    try {
      o = e("@marcom/ac-analytics")
    } catch (e) {}
    t.exports = class extends n {
      constructor(e) {
        super(e), this.heroTimeline = this.gum.anim.createTimeGroup(), this.scrollGroup = this.anim.getGroupForTarget(this.el), this.heroWrapper = this.el.querySelector(".hero-wrapper"), this.watchImage = this.el.querySelector(".hero-circle"), this.heroContentContainer = this.el.querySelector(".hero-content-container"), this.heroCopyContainer = this.el.querySelector(".hero-copy-container"), this.hero7Copy = this.el.querySelector(".hero-eyebrow"), this.dayText = this.heroContentContainer.querySelector(".day"), this.nightText = this.heroContentContainer.querySelector(".night"), this.heroWrapperRect = this.heroWrapper.getBoundingClientRect(), this.isStatic, this.rotateAngle = 18, this.rotationStride = -3, this.timelineRotation = this.rotateAngle * this.rotationStride, this.scrollSloppiness = .2, this.trackedElements = [], this.options = e, this.killSwitch = {
          classes: ["static-layout", "prefers-reduced-motion", "hero-static", "ios12"],
          thresholds: {
            portrait: 1115,
            landscapeLarge: {
              min: 770,
              max: 1200
            },
            mediumLandscape: {
              min: 764
            },
            small: 600
          }
        }, this.buildInHasPlayed = !1, this.didFireAnalyticsEvent = !1, this.voItems, this.voFocusArray
      }
      mounted() {
        this.getCurrentOrientation(this.options.pageMetrics), this.staticController(this.options.pageMetrics), this.isStatic = document.documentElement.classList.contains("hero-static"), this.isStatic && (this.heroPlayState("static"), this.didFireAnalyticsEvent = !0), window.addEventListener("text-zoom", e => {
          e.detail.textZoom > 1 && this.triggerStatic()
        });
        const e = .2 * window.innerHeight;
        this.initialScrollPosition = document.documentElement.scrollTop, this.scrollThreshold = this.initialScrollPosition + e, this.isStatic || (this.hero7Copy.classList.remove("hide"), this.throttledCustomScrollEvent = r(() => {
          this.handleCustomScrollEvent()
        }, 150), document.addEventListener("scroll", this.throttledCustomScrollEvent), this.setupHero())
      }
      handleCustomScrollEvent() {
        const e = document.documentElement.scrollTop;
        !this.didFireAnalyticsEvent && e > this.scrollThreshold && (this.handleUserEarlyScroll(), this.didFireAnalyticsEvent = !0)
      }
      heroPlayState(e) {
        if (o) {
          var t = {
            eVar70: e
          };
          o.passiveTracker(t)
        }
      }
      handleUserEarlyScroll() {
        this.buildInHasPlayed || this.heroPlayState("partial")
      }
      updateCSSTransform(e) {
        const t = e.style.transform;
        e.originalTransform = t
      }
      storeCSSTransform(e) {
        this.trackedElements.push(e), this.updateCSSTransform(e)
      }
      getCurrentOrientation(e) {
        this.activeOrientation = e.windowWidth > e.windowHeight ? "landscape" : "portrait", this.aspectRatio = Number(Math.round(e.windowWidth / e.windowHeight + "e3") + "e-3")
      }
      triggerStatic() {
        if (!this.isStatic) {
          document.documentElement.classList.add("hero-static"), this.isStatic = !0, setTimeout(() => {
            this.anim.forceUpdate()
          }, 500);
          try {
            this.scrollGroup.remove()
          } catch (e) {}
        }
      }
      staticController(e) {
        const t = e.windowHeight < this.killSwitch.thresholds.landscapeLarge.min,
          A = e.windowHeight > this.killSwitch.thresholds.landscapeLarge.max,
          i = e.windowHeight < this.killSwitch.thresholds.mediumLandscape.min && "M" === e.breakpoint,
          s = e.windowHeight < this.killSwitch.thresholds.small && "S" === e.breakpoint,
          n = "landscape" === this.activeOrientation && t && "L" === e.breakpoint,
          r = "landscape" === this.activeOrientation && A && "L" === e.breakpoint,
          a = "portrait" === this.activeOrientation && e.windowHeight > this.killSwitch.thresholds.portrait;
        (n || r || a || i || s) && this.triggerStatic()
      }
      setupHero() {
        this.scrollGroup.addKeyframe(this.el, {
          start: "-100vh",
          end: "170vh",
          cssClass: "will-change",
          toggle: !0,
          disabledWhen: this.killSwitch.classes
        }), this.setupTimeline(), this.waitForImages().then(() => {
          this.heroTimeline.play(0)
        }), this.setupAX()
      }
      setupAX() {
        this.voItems = Array.from(document.querySelector(".hero-headline-container").children), this.voItems = this.voItems.concat(Array.from(this.heroCopyContainer.children)), this.voFocusArray = [], this.voItems.forEach(e => {
          this.voFocusArray.push(new a(e, [this.heroWrapper], {
            start: "a0t",
            end: "a0b",
            anchors: [".hero-wrapper"]
          }))
        })
      }
      waitForImages() {
        const e = document.querySelectorAll(".hero-circle .watch-screen, .hero-circle .watch:first-child .watch-hardware");
        return (0, s.waitForImagesBackgroundLoad)(e, 5).catch(() => {})
      }
      setupScrollKeyframes() {
        const e = "a0t",
          t = "a0t + 45vh",
          A = "a0t + 90vh",
          i = this.scrollGroup.addKeyframe(this.watchImage, {
            start: e,
            end: "a0t + 90vh",
            _rotation: [0, 1],
            anchors: [this.el],
            ease: this.scrollSloppiness,
            breakpointMask: "LM",
            disabledWhen: this.killSwitch.classes
          });
        this.scrollGroup.addKeyframe(this.watchImage, {
          start: e,
          end: "a0t + 100vh",
          _rotation: [0, 1],
          anchors: [this.el],
          ease: this.scrollSloppiness,
          breakpointMask: "S",
          disabledWhen: this.killSwitch.classes
        }), i.controller.on("draw", e => {
          const t = e.tweenProps._rotation.current;
          e.element.style.transform = "".concat(e.element.originalTransform, " rotate(").concat((3 * -t * 18).toFixed(2), "deg)")
        }), this.scrollGroup.addKeyframe(this.heroCopyContainer, {
          start: t,
          end: A,
          anchors: [this.el],
          y: [null, 0],
          opacity: [null, 1],
          disabledWhen: this.killSwitch.classes
        }), this.scrollGroup.addKeyframe(this.el, {
          start: "a0t + 20vh",
          end: "a0b + 100vh",
          cssClass: "dark",
          toggle: !0,
          anchors: [this.el],
          disabledWhen: this.killSwitch.classes
        })
      }
      setupTimeline() {
        const e = .31,
          t = .19;
        this.watchPlacement = {
          large: "800px",
          medium: "700px",
          small: "660px"
        };
        const A = {
            enter: .6,
            get exit() {
              return this.enter + 1.5
            }
          },
          i = {
            enter: A.exit / 2,
            get exit() {
              return this.enter + .75
            }
          };
        this.heroTimeline.addKeyframe(this.watchImage, {
          start: .05,
          end: .25,
          opacity: [null, 1],
          disabledWhen: this.killSwitch.classes
        }), this.heroTimeline.addKeyframe(this.watchImage, {
          start: A.enter,
          end: A.exit,
          scale: [e, 1],
          y: [null, this.watchPlacement.large],
          rotationZ: [0, this.timelineRotation],
          easeFunction: "easeInOutQuad",
          breakpointMask: "L",
          disabledWhen: this.killSwitch.classes
        }), this.heroTimeline.addKeyframe(this.watchImage, {
          start: A.enter,
          end: A.exit,
          scale: [e, 1],
          y: [null, this.watchPlacement.medium],
          rotationZ: [0, this.timelineRotation],
          easeFunction: "easeInOutQuad",
          breakpointMask: "M",
          disabledWhen: this.killSwitch.classes
        }), this.heroTimeline.addKeyframe(this.watchImage, {
          start: A.enter,
          end: A.exit,
          scale: [t, 1],
          y: [null, this.watchPlacement.small],
          rotationZ: [0, this.timelineRotation],
          easeFunction: "easeInOutQuad",
          breakpointMask: "S",
          disabledWhen: this.killSwitch.classes
        }), this.heroTimeline.addKeyframe(this.watchImage, {
          start: A.exit,
          event: "handoff"
        }).controller.once("handoff", e => {
          this.buildInHasPlayed = !0, this.storeCSSTransform(this.watchImage), this.setupScrollKeyframes(), this.didFireAnalyticsEvent || this.heroPlayState("full"), document.removeEventListener("scroll", this.throttledCustomScrollEvent)
        }), this.heroTimeline.addKeyframe(this.hero7Copy, {
          start: A.enter,
          end: A.exit,
          scale: [1.7, 1],
          y: [null, 0],
          easeFunction: "easeInOutQuad",
          disabledWhen: this.killSwitch.classes
        }), this.heroTimeline.addKeyframe(this.dayText, {
          start: i.enter,
          end: i.exit,
          opacity: [null, 1],
          disabledWhen: this.killSwitch.classes
        }), this.heroTimeline.addKeyframe(this.nightText, {
          start: i.enter,
          end: i.exit,
          opacity: [null, 1],
          disabledWhen: this.killSwitch.classes
        })
      }
      onResizeDebounced(e) {
        const t = this.activeOrientation;
        this.getCurrentOrientation(this.options.pageMetrics), this.staticController(this.options.pageMetrics), this.heroTimeline.timeScale(10), this.heroTimeline.play(1.8), this.heroTimeline.timeScale(1), this.isStatic || (this.isStatic = document.documentElement.classList.contains("hero-static"), t !== this.activeOrientation && this.triggerStatic())
      }
      onBreakpointChange(e) {
        this.storeCSSTransform(this.watchImage), this.triggerStatic()
      }
      static IS_SUPPORTED() {
        return !i.environment.staticLayout && !i.environment.ios12
      }
    }
  }, {
    51: 51,
    57: 57,
    89: 89,
    92: 92,
    93: 93,
    undefined: void 0
  }],
  76: [function(e, t, A) {
    "use strict";
    var i = e(93),
      s = e(54),
      n = e(94);
    const r = e(51),
      a = e(60);
    t.exports = class extends r {
      constructor(e) {
        super(e), this.playButton = this.el.querySelector(".play-button"), this.pauseButton = this.el.querySelector(".pause-button"), this.replayButton = this.el.querySelector(".replay-button"), this.controlButton = this.el.querySelector(".control-button"), this.controlButtonState = this.el.querySelector(".control-button .visuallyhidden span"), this.controls = this.el.querySelectorAll(".inline-video-controls button"), this.focusItem = this.el.querySelector(".focus-item"), this.focusBtnTimeout, this.focusCtrlBtnTimeout, this.startFrame = this.el.querySelector(".start-frame"), this.endFrame = this.el.querySelector(".end-frame"), this.videoElement = this.el.querySelector("video") || null, this.tile = this.el, this.tileClass = ".tile-".concat(this.tile.getAttribute("data-anim-scroll-group")), this.scrollGroup = this.anim.getGroupForTarget(this.tile), this.startFrame && (this.startFrame.style.zIndex = 1), this.endFrame && (this.endFrame.style.zIndex = 3), this.videoElement && (this.videoElement.style.zIndex = 2), this.videoTrimStart = Number(this.el.dataset.videoTrimStart || 0), this.videoTrimEnd = Number(this.el.dataset.videoTrimEnd || 0), this.animationEndDelay = Number(this.el.dataset.animationEndDelay || 0), this.totalDelay = 0, this.videoProxy, this.playedOnce = !1, this.isPlaying = !1, this.userPaused = !1, this.onEnterKeyframe = this.onEnterKeyframe.bind(this), this.onExitKeyframe = this.onExitKeyframe.bind(this), this.onVideoEnded = this.onVideoEnded.bind(this)
      }
      mounted() {
        this.videoElement && (this.initVideoProxy(), this._setupVideoControls(), this._setupAXControls())
      }
      initVideoProxy() {
        this.videoProxy = a.newVideoProxy(this.videoElement, {}), this.setVideoEvents()
      }
      setVideoEvents() {
        this.videoProxy.on(a.EVENTS.CAN_PLAY_THROUGH, () => {
          this.videoProxy.videoElement.currentTime = this.videoTrimStart / 1e3, this.totalDelay = this.videoProxy.duration + (this.animationEndDelay - this.videoTrimStart - this.videoTrimEnd) / 1e3
        }), this.videoProxy.videoElement.addEventListener("ended", this.onVideoEnded), this.addVideoKeyframes()
      }
      addVideoKeyframes() {
        let e = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.start.l,
            end: i.animation.end.l,
            event: "engage-large",
            breakpointMask: "L",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          }),
          t = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.visibleStart.l,
            end: i.animation.visibleEnd.l,
            event: "visible-large",
            breakpointMask: "L",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          });
        e.controller.on("engage-large:enter", () => {
          this.onEnterKeyframe()
        }), t.controller.on("visible-large:exit", () => {
          this.onExitKeyframe()
        });
        let A = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.start.m,
            end: i.animation.end.m,
            event: "engage-medium",
            breakpointMask: "M",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          }),
          s = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.visibleStart.m,
            end: i.animation.visibleEnd.m,
            event: "visible-medium",
            breakpointMask: "M",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          });
        A.controller.on("engage-medium:enter", () => {
          this.onEnterKeyframe()
        }), s.controller.on("visible-medium:exit", () => {
          this.onExitKeyframe()
        });
        let n = this.scrollGroup.addKeyframe(this.el, {
          anchors: this.tileClass,
          start: i.animation.start.s,
          end: i.animation.end.s,
          event: "engage-small",
          breakpointMask: "S",
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        this.scrollGroup.addKeyframe(this.el, {
          anchors: this.tileClass,
          start: i.animation.visibleStart.s,
          end: i.animation.visibleEnd.s,
          event: "visible-small",
          breakpointMask: "S",
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        n.controller.on("engage-small:enter", () => {
          this.onEnterKeyframe()
        }), n.controller.on("visible-small:exit", () => {
          this.onExitKeyframe()
        })
      }
      onEnterKeyframe() {
        this.userPaused || this.videoProxy.promises.canBePlayedThrough.then(() => {
          const e = s.director.requestAnimationStart({
            element: this.tile,
            duration: this.totalDelay
          });
          this.cancelAnimationRequest = e.cancel, e.then(() => {
            0 === this.videoProxy.videoElement.currentTime && (0, n.trackAnimationStart)(this.tileClass), this.playVideo()
          })
        })
      }
      onExitKeyframe() {
        this.cancelAnimationRequest && this.cancelAnimationRequest(), this.userPaused || (clearTimeout(this.focusBtnTimeout), clearTimeout(this.focusCtrlBtnTimeout), this.videoProxy.gotoAndStop(0), this.isPlaying = !1, this.playedOnce ? this._updateVideoControls("video-ended") : this._updateVideoControls("pause"))
      }
      onBreakpointChange() {
        this.isPlaying = !1, this.videoProxy.pause(), this._updateVideoControls("pause"), this._updateAXControls()
      }
      playVideo() {
        this.isPlaying || (this.isPlaying = !0, this.startFrame.style.visibility = "hidden", this.endFrame.style.visibility = "hidden", this._updateVideoControls("play"), this._updateAXControls(), this.videoProxy.play())
      }
      onVideoEnded() {
        this.isPlaying = !1, this.playedOnce = !0, this.endFrame.style.visibility = "visible", this._updateVideoControls("video-ended")
      }
      _setupVideoControls() {
        this.playButton.disabled = !1, this.playButton && this.playButton.addEventListener("click", () => {
          this.userPaused = !1, this.playVideo()
        }), this.pauseButton && this.pauseButton.addEventListener("click", () => {
          this.cancelAnimationRequest && this.cancelAnimationRequest(), this.isPlaying = !1, this.userPaused = !0, this.videoProxy.pause(), this._updateVideoControls("pause"), this._updateAXControls()
        }), this.replayButton && this.replayButton.addEventListener("click", () => {
          this.userPaused = !1, this.playVideo()
        })
      }
      _updateVideoControls(e) {
        "pause" === e ? (this.playButton.disabled = !1, this.replayButton.disabled = !0, this.pauseButton.disabled = !0, this.controlButtonState.innerText = "Play") : "play" === e ? (this.pauseButton.disabled = !1, this.replayButton.disabled = !0, this.playButton.disabled = !0, this.controlButtonState.innerText = "Pause") : "video-ended" === e && (this.replayButton.disabled = !1, this.playButton.disabled = !0, this.pauseButton.disabled = !0, this.controlButtonState.innerText = "Replay")
      }
      _updateAXControls() {
        clearTimeout(this.focusBtnTimeout), clearTimeout(this.focusCtrlBtnTimeout), document.activeElement !== this.controlButton && document.activeElement !== this.focusItem || (this.focusBtnTimeout = setTimeout(() => {
          this.el.querySelector(".inline-video-controls button:not([disabled])").focus()
        }, 300), this.focusCtrlBtnTimeout = setTimeout(() => {
          this.controlButton.focus()
        }, 350))
      }
      _setupAXControls() {
        this.controls.forEach(e => {
          e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true"), e.addEventListener("click", () => {
            setTimeout(() => {
              this.focusItem.focus()
            }, 250)
          })
        }), this.controlButton.addEventListener("click", () => {
          this.el.querySelector(".inline-video-controls button:not([disabled])").click()
        })
      }
      static IS_SUPPORTED() {
        return !i.environment.aow && !i.environment.staticLayout
      }
    }
  }, {
    51: 51,
    54: 54,
    60: 60,
    93: 93,
    94: 94
  }],
  77: [function(e, t, A) {
    "use strict";
    var i = e(93),
      s = e(54),
      n = e(94);
    const r = e(51);
    t.exports = class extends r {
      constructor(e) {
        super(e), this.tile = this.el.closest(".grid-item"), this.tileClass = ".tile-".concat(this.tile.getAttribute("data-anim-scroll-group")), this.scrollGroup = this.anim.getGroupForTarget(this.tile), this.timelineGroup = this.gum.anim.createTimeGroup(), this.icons = Array.from(this.el.querySelectorAll(".icon-complications")), this.headlines = Array.from(this.el.querySelectorAll(".complications-headline-label")), this.animationControls = this.el.querySelector(".inline-animation-controls"), this.replayButton = this.el.querySelector(".replay-button"), this.playedOnce = !1, this.delay = .5
      }
      initialize() {
        this.scrollGroup.addKeyframe(this.tile, {
          anchors: this.tileClass,
          start: i.animation.willChange.start,
          end: i.animation.willChange.end,
          cssClass: i.animation.willChange.class,
          toggle: !0,
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        let e = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.start.l,
            end: i.animation.end.l,
            event: "engage-large",
            breakpointMask: "L",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          }),
          t = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.visibleStart.l,
            end: i.animation.visibleEnd.l,
            event: "visible-large",
            breakpointMask: "L",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          });
        e.controller.on("engage-large:enter", () => {
          const e = s.director.requestAnimationStart({
            element: this.tile,
            duration: this.timelineGroup.duration
          });
          this.cancelAnimationRequest = e.cancel, e.then(() => {
            0 === this.timelineGroup.time() && (0, n.trackAnimationStart)(this.tileClass), this.timelineGroup.play()
          })
        }), t.controller.on("visible-large:exit", () => {
          this.cancelAnimationRequest && this.cancelAnimationRequest(), this.timelineGroup.pause(0)
        });
        let A = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.start.m,
            end: i.animation.end.m,
            event: "engage-medium",
            breakpointMask: "M",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          }),
          r = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.visibleStart.m,
            end: i.animation.visibleEnd.m,
            event: "visible-medium",
            breakpointMask: "M",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          });
        A.controller.on("engage-medium:enter", () => {
          const e = s.director.requestAnimationStart({
            element: this.tile,
            duration: this.timelineGroup.duration
          });
          this.cancelAnimationRequest = e.cancel, e.then(() => {
            0 === this.timelineGroup.time() && (0, n.trackAnimationStart)(this.tileClass), this.timelineGroup.play()
          })
        }), r.controller.on("visible-medium:exit", () => {
          this.cancelAnimationRequest && this.cancelAnimationRequest(), this.timelineGroup.pause(0)
        });
        let a = this.scrollGroup.addKeyframe(this.el, {
          anchors: this.tileClass,
          start: i.animation.start.s,
          end: i.animation.end.s,
          event: "engage-small",
          breakpointMask: "S",
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        this.scrollGroup.addKeyframe(this.el, {
          anchors: this.tileClass,
          start: i.animation.visibleStart.s,
          end: i.animation.visibleEnd.s,
          event: "visible-small",
          breakpointMask: "S",
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        a.controller.on("engage-small:enter", () => {
          0 === this.timelineGroup.time() && (0, n.trackAnimationStart)(this.tileClass), this.timelineGroup.play()
        }), a.controller.on("visible-small:exit", () => {
          this.timelineGroup.pause(0)
        }), this.icons.forEach((e, t) => {
          let A = t - 1,
            i = this.icons.length - 1;
          0 != t && (this.timelineGroup.addKeyframe(this.headlines[t], {
            start: this.delay + A,
            end: this.delay + A + .75,
            ease: 1,
            easeFunction: "easeOutQuint",
            y: ["50h", 0],
            disabledWhen: ["static-layout"]
          }), this.timelineGroup.addKeyframe(this.headlines[t], {
            start: this.delay + A,
            end: this.delay + A + .2,
            ease: 1,
            easeFunction: "easeOutSin",
            opacity: [0, 1],
            disabledWhen: ["static-layout"]
          }), this.timelineGroup.addKeyframe(e, {
            start: this.delay + A,
            end: this.delay + A + .4,
            ease: 1,
            easeFunction: "linear",
            y: ["100h + 15px", 0],
            disabledWhen: ["static-layout"]
          }), this.timelineGroup.addKeyframe(e, {
            start: this.delay + A,
            end: this.delay + A + .2,
            ease: 1,
            easeFunction: "easeOutSin",
            opacity: [0, 1],
            disabledWhen: ["static-layout"]
          })), t != i && (this.timelineGroup.addKeyframe(this.headlines[t], {
            start: this.delay + t,
            end: this.delay + t + .75,
            ease: 1,
            easeFunction: "easeOutQuint",
            y: [0, "-50h"],
            disabledWhen: ["static-layout"]
          }), this.timelineGroup.addKeyframe(this.headlines[t], {
            start: this.delay + t,
            end: this.delay + t + .2,
            ease: 1,
            easeFunction: "easeOutSin",
            opacity: [1, 0],
            disabledWhen: ["static-layout"]
          }), this.timelineGroup.addKeyframe(e, {
            start: this.delay + t,
            end: this.delay + t + .4,
            ease: 1,
            easeFunction: "linear",
            y: [0, "-100h - 15px"],
            disabledWhen: ["static-layout"]
          }))
        }), this.timelineGroup.addKeyframe(this.el, {
          start: this.timelineGroup.duration,
          end: this.timelineGroup.duration + .1,
          event: "timelineComplete"
        }).controller.on("timelineComplete:enter", () => {
          this.updateAnimationControls()
        })
      }
      mounted() {
        this.initialize(), this.replayButton && this.addReplay(), i.environment.prefersReducedMotion && this.updateAnimationControls()
      }
      updateAnimationControls() {
        this.playedOnce || (this.playedOnce = !0)
      }
      addReplay() {
        this.replayButton.addEventListener("click", () => {
          setTimeout(() => {
            this.timelineGroup.play(0)
          }, this.delay)
        })
      }
      handleFallback() {}
      handleEnhance() {}
      onResizeImmediate(e) {}
      onResizeDebounced(e) {}
      onBreakpointChange(e) {}
      static IS_SUPPORTED() {
        return !i.environment.staticLayout
      }
    }
  }, {
    51: 51,
    54: 54,
    93: 93,
    94: 94
  }],
  78: [function(e, t, A) {
    "use strict";
    var i = e(93),
      s = e(54),
      n = e(94);
    const r = e(51);
    t.exports = class extends r {
      constructor(e) {
        super(e), this.tile = this.el.closest(".grid-item"), this.tileClass = ".tile-".concat(this.tile.getAttribute("data-anim-scroll-group")), this.scrollGroup = this.anim.getGroupForTarget(this.tile), this.timelineGroup = this.gum.anim.createTimeGroup(), this.duration = 3
      }
      initialize() {
        this.cycleLeft()
      }
      cycleLeft() {
        this.timelineGroup.addKeyframe(this.el, {
          start: .01,
          end: .11,
          cssClass: "cycle-left",
          toggle: !0,
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        }), this.scrollGroup.addKeyframe(this.tile, {
          anchors: this.tileClass,
          start: i.animation.willChange.start,
          end: i.animation.willChange.end,
          cssClass: i.animation.willChange.class,
          toggle: !0,
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        let e = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.start.l,
            end: i.animation.end.l,
            event: "engage-large",
            breakpointMask: "L",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          }),
          t = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.visibleStart.l,
            end: i.animation.visibleEnd.l,
            event: "visible-large",
            breakpointMask: "L",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          });
        e.controller.on("engage-large:enter", () => {
          const e = s.director.requestAnimationStart({
            element: this.tile,
            duration: this.duration
          });
          this.cancelAnimationRequest = e.cancel, e.then(() => {
            0 === this.timelineGroup.time() && (0, n.trackAnimationStart)(this.tileClass), this.timelineGroup.play()
          })
        }), t.controller.on("visible-large:exit", () => {
          this.cancelAnimationRequest && this.cancelAnimationRequest(), this.timelineGroup.pause(0)
        });
        let A = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.start.m,
            end: i.animation.end.m,
            event: "engage-medium",
            breakpointMask: "M",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          }),
          r = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.visibleStart.m,
            end: i.animation.visibleEnd.m,
            event: "visible-medium",
            breakpointMask: "M",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          });
        A.controller.on("engage-medium:enter", () => {
          const e = s.director.requestAnimationStart({
            element: this.tile,
            duration: this.duration
          });
          this.cancelAnimationRequest = e.cancel, e.then(() => {
            0 === this.timelineGroup.time() && (0, n.trackAnimationStart)(this.tileClass), this.timelineGroup.play()
          })
        }), r.controller.on("visible-medium:exit", () => {
          this.cancelAnimationRequest && this.cancelAnimationRequest(), this.timelineGroup.pause(0)
        });
        let a = this.scrollGroup.addKeyframe(this.el, {
          anchors: this.tileClass,
          start: i.animation.start.s,
          end: i.animation.end.s,
          event: "engage-small",
          breakpointMask: "S",
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        this.scrollGroup.addKeyframe(this.el, {
          anchors: this.tileClass,
          start: i.animation.visibleStart.s,
          end: i.animation.visibleEnd.s,
          event: "visible-small",
          breakpointMask: "S",
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        a.controller.on("engage-small:enter", () => {
          0 === this.timelineGroup.time() && (0, n.trackAnimationStart)(this.tileClass), this.timelineGroup.play()
        }), a.controller.on("visible-small:exit", () => {
          this.timelineGroup.pause(0)
        })
      }
      mounted() {
        this.initialize()
      }
      handleFallback() {}
      handleEnhance() {}
      onResizeImmediate(e) {}
      onResizeDebounced(e) {}
      onBreakpointChange(e) {}
      static IS_SUPPORTED() {
        return !i.environment.staticLayout
      }
    }
  }, {
    51: 51,
    54: 54,
    93: 93,
    94: 94
  }],
  79: [function(e, t, A) {
    "use strict";
    var i = e(93),
      s = e(94);
    const n = e(51);
    t.exports = class extends n {
      constructor(e) {
        super(e), this.tile = this.el.closest(".grid-item"), this.tileClass = ".tile-".concat(this.tile.getAttribute("data-anim-scroll-group")), this.scrollGroup = this.anim.getGroupForTarget(this.tile), this.timelineGroup = this.gum.anim.createTimeGroup(), this.media = this.el.querySelector(".tile-media"), this.animationControls = this.el.querySelector(".inline-animation-controls"), this.replayButton = this.el.querySelector(".replay-button"), this.playedOnce = !1, this.duration = 2, this.replayDelay = 500
      }
      initialize() {
        this.scrollGroup.addKeyframe(this.tile, {
          anchors: this.tileClass,
          start: i.animation.willChange.start,
          end: i.animation.willChange.end,
          cssClass: i.animation.willChange.class,
          toggle: !0,
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        let e = this.scrollGroup.addKeyframe(this.el, {
          anchors: this.tileClass,
          start: i.animation.start.s,
          end: i.animation.end.s,
          event: "engage-small",
          breakpointMask: "S",
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        this.scrollGroup.addKeyframe(this.el, {
          anchors: this.tileClass,
          start: i.animation.visibleStart.s,
          end: i.animation.visibleEnd.s,
          event: "visible-small",
          breakpointMask: "S",
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        e.controller.on("engage-small:enter", () => {
          0 === this.timelineGroup.time() && (0, s.trackAnimationStart)(this.tileClass), this.timelineGroup.play()
        }), e.controller.on("visible-small:exit", () => {
          this.timelineGroup.pause(0), this.replayButton.disabled = !0
        }), this.timelineGroup.addKeyframe(this.media, {
          start: 0,
          end: this.duration,
          x: ["-100", "-539"],
          easeFunction: "easeOutQuad",
          breakpointMask: "S"
        }), this.timelineGroup.addKeyframe(this.el, {
          start: this.duration,
          end: this.duration + .1,
          breakpointMask: "S",
          event: "timelineComplete"
        }).controller.on("timelineComplete:enter", () => {
          this.updateAnimationControls()
        })
      }
      mounted() {
        this.initialize(), this.handleAx(), "S" === this.pageMetrics.breakpoint && i.environment.prefersReducedMotion && this.updateAnimationControls(), this.replayButton && this.addReplay()
      }
      updateAnimationControls() {
        this.playedOnce || (this.playedOnce = !0), this.replayButton.disabled = !1
      }
      addReplay() {
        this.replayButton.addEventListener("click", () => {
          this.replayDelay && (this.media.style.transform = "translateX(-100px)", setTimeout(() => {
            this.timelineGroup.play(0)
          }, this.replayDelay)), this.replayButton.disabled = !0
        })
      }
      onBreakpointChange() {
        this.handleAx(), "S" === this.pageMetrics.breakpoint && i.environment.prefersReducedMotion && this.updateAnimationControls()
      }
      handleAx() {
        "S" === this.pageMetrics.breakpoint ? this.animationControls.ariaHidden = !1 : this.animationControls.ariaHidden = !0
      }
      static IS_SUPPORTED() {
        return !i.environment.staticLayout
      }
    }
  }, {
    51: 51,
    93: 93,
    94: 94
  }],
  80: [function(e, t, A) {
    "use strict";
    var i = e(93),
      s = e(54),
      n = e(94);
    const r = e(51);
    t.exports = class extends r {
      constructor(e) {
        super(e), this.tile = this.el.closest(".grid-item"), this.tileClass = ".tile-".concat(this.tile.getAttribute("data-anim-scroll-group")), this.scrollGroup = this.anim.getGroupForTarget(this.tile), this.timelineGroup = this.gum.anim.createTimeGroup(), this.duration = 1.25
      }
      initialize() {
        this.fadeVolume()
      }
      fadeVolume() {
        const e = document.querySelectorAll(".volume"),
          t = [].slice.call(e, 0).reverse();
        this.scrollGroup.addKeyframe(this.tile, {
          anchors: this.tileClass,
          start: i.animation.willChange.start,
          end: i.animation.willChange.end,
          cssClass: i.animation.willChange.class,
          toggle: !0,
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        let A = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.start.l,
            end: i.animation.end.l,
            event: "engage-large",
            breakpointMask: "L",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          }),
          r = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.visibleStart.l,
            end: i.animation.visibleEnd.l,
            event: "visible-large",
            breakpointMask: "L",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          });
        A.controller.on("engage-large:enter", () => {
          const e = s.director.requestAnimationStart({
            element: this.tile,
            duration: this.duration
          });
          this.cancelAnimationRequest = e.cancel, e.then(() => {
            0 === this.timelineGroup.time() && (0, n.trackAnimationStart)(this.tileClass), this.timelineGroup.play()
          })
        }), r.controller.on("visible-large:exit", () => {
          this.cancelAnimationRequest && this.cancelAnimationRequest(), this.timelineGroup.pause(0)
        });
        let a = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.start.m,
            end: i.animation.end.m,
            event: "engage-medium",
            breakpointMask: "M",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          }),
          o = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.visibleStart.m,
            end: i.animation.visibleEnd.m,
            event: "visible-medium",
            breakpointMask: "M",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          });
        a.controller.on("engage-medium:enter", () => {
          const e = s.director.requestAnimationStart({
            element: this.tile,
            duration: this.duration
          });
          this.cancelAnimationRequest = e.cancel, e.then(() => {
            0 === this.timelineGroup.time() && (0, n.trackAnimationStart)(this.tileClass), this.timelineGroup.play()
          })
        }), o.controller.on("visible-medium:exit", () => {
          this.cancelAnimationRequest && this.cancelAnimationRequest(), this.timelineGroup.pause(0)
        });
        let l = this.scrollGroup.addKeyframe(this.el, {
          anchors: this.tileClass,
          start: i.animation.start.s,
          end: i.animation.end.s,
          event: "engage-small",
          breakpointMask: "S",
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        this.scrollGroup.addKeyframe(this.el, {
          anchors: this.tileClass,
          start: i.animation.visibleStart.s,
          end: i.animation.visibleEnd.s,
          event: "visible-small",
          breakpointMask: "S",
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        l.controller.on("engage-small:enter", () => {
          0 === this.timelineGroup.time() && (0, n.trackAnimationStart)(this.tileClass), this.timelineGroup.play()
        }), l.controller.on("visible-small:exit", () => {
          this.timelineGroup.pause(0)
        }), e.forEach((e, t) => {
          this.timelineGroup.addKeyframe(e, {
            start: .65 + .5 * t,
            end: .5 * t + .4 + .65,
            opacity: [0, 1],
            toggle: !0,
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          })
        }), t.forEach((e, t) => {
          this.timelineGroup.addKeyframe(e, {
            start: 2.15 + .5 * t,
            end: .5 * t + .4 + 2.15,
            opacity: [1, 0],
            toggle: !0,
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          })
        }), this.timelineGroup.addKeyframe(e[0], {
          start: 3.25,
          end: 4.15,
          opacity: [0, 1],
          toggle: !0,
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        })
      }
      mounted() {
        this.initialize()
      }
      handleFallback() {}
      handleEnhance() {}
      onResizeImmediate(e) {}
      onResizeDebounced(e) {}
      onBreakpointChange(e) {}
      static IS_SUPPORTED() {
        return !i.environment.staticLayout
      }
    }
  }, {
    51: 51,
    54: 54,
    93: 93,
    94: 94
  }],
  81: [function(e, t, A) {
    "use strict";
    var i = e(93),
      s = e(54),
      n = e(94);
    const r = e(51);
    t.exports = class extends r {
      constructor(e) {
        super(e), this.tile = this.el.closest(".grid-item"), this.tileClass = ".tile-".concat(this.tile.getAttribute("data-anim-scroll-group")), this.iconsContainer = this.tile.querySelector(".icons-container"), this.icons = this.tile.querySelectorAll(".sub-icon"), this.scrollGroup = this.anim.getGroupForTarget(this.tile), this.timelineGroup = this.anim.createTimeGroup(), this.duration = 1.1
      }
      initialize() {
        let e = [{
          x: 82,
          y: 100
        }, {
          x: 0,
          y: 198
        }, {
          x: -82,
          y: 100
        }];
        this.scrollGroup.addKeyframe(this.tile, {
          anchors: this.tileClass,
          start: i.animation.willChange.start,
          end: i.animation.willChange.end,
          cssClass: i.animation.willChange.class,
          toggle: !0,
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        let t = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.start.l,
            end: i.animation.end.l,
            event: "engage-large",
            breakpointMask: "L",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          }),
          A = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.visibleStart.l,
            end: i.animation.visibleEnd.l,
            event: "visible-large",
            breakpointMask: "L",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          });
        t.controller.on("engage-large:enter", () => {
          const e = s.director.requestAnimationStart({
            element: this.tile,
            duration: this.duration
          });
          this.cancelAnimationRequest = e.cancel, e.then(() => {
            0 === this.timelineGroup.time() && (0, n.trackAnimationStart)(this.tileClass), this.timelineGroup.play()
          })
        }), A.controller.on("visible-large:exit", () => {
          this.cancelAnimationRequest && this.cancelAnimationRequest(), this.timelineGroup.pause(0)
        });
        let r = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.start.m,
            end: i.animation.end.m,
            event: "engage-medium",
            breakpointMask: "M",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          }),
          a = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.visibleStart.m,
            end: i.animation.visibleEnd.m,
            event: "visible-medium",
            breakpointMask: "M",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          });
        r.controller.on("engage-medium:enter", () => {
          const e = s.director.requestAnimationStart({
            element: this.tile,
            duration: this.duration
          });
          this.cancelAnimationRequest = e.cancel, e.then(() => {
            0 === this.timelineGroup.time() && (0, n.trackAnimationStart)(this.tileClass), this.timelineGroup.play()
          })
        }), a.controller.on("visible-medium:exit", () => {
          this.cancelAnimationRequest && this.cancelAnimationRequest(), this.timelineGroup.pause(0)
        });
        let o = this.scrollGroup.addKeyframe(this.el, {
          anchors: this.tileClass,
          start: i.animation.start.s,
          end: i.animation.end.s,
          event: "engage-small",
          breakpointMask: "S",
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        this.scrollGroup.addKeyframe(this.el, {
          anchors: this.tileClass,
          start: i.animation.visibleStart.s,
          end: i.animation.visibleEnd.s,
          event: "visible-small",
          breakpointMask: "S",
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        o.controller.on("engage-small:enter", () => {
          0 === this.timelineGroup.time() && (0, n.trackAnimationStart)(this.tileClass), this.timelineGroup.play()
        }), o.controller.on("visible-small:exit", () => {
          this.timelineGroup.pause(0)
        }), this.timelineGroup.addKeyframe(this.iconsContainer, {
          start: 0,
          end: 1,
          scale: [null, 1],
          y: [null, -90],
          easeFunction: "easeOutCubic"
        }), this.icons.forEach((t, A) => {
          this.timelineGroup.addKeyframe(t, {
            start: .1 * (A + 1),
            end: .1 * (A + 1) + .7,
            x: [null, e[A].x],
            y: [null, e[A].y],
            easeFunction: "easeOutCubic"
          })
        })
      }
      mounted() {
        this.initialize()
      }
      static IS_SUPPORTED() {
        return !i.environment.staticLayout
      }
    }
  }, {
    51: 51,
    54: 54,
    93: 93,
    94: 94
  }],
  82: [function(e, t, A) {
    "use strict";
    var i = e(93),
      s = e(54),
      n = e(94);
    const r = e(51);
    t.exports = class extends r {
      constructor(e) {
        super(e), this.tile = this.el.closest(".grid-item"), this.tileClass = ".tile-".concat(this.tile.getAttribute("data-anim-scroll-group")), this.translatedContainer = this.tile.querySelector(".translated-text-container"), this.scrollGroup = this.anim.getGroupForTarget(this.tile), this.timelineGroup = this.anim.createTimeGroup(), this.duration = 2.11
      }
      initialize() {
        this.scrollGroup.addKeyframe(this.tile, {
          anchors: this.tileClass,
          start: i.animation.willChange.start,
          end: i.animation.willChange.end,
          cssClass: i.animation.willChange.class,
          toggle: !0,
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        let e = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.start.l,
            end: i.animation.end.l,
            event: "engage-large",
            breakpointMask: "L",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          }),
          t = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.visibleStart.l,
            end: i.animation.visibleEnd.l,
            event: "visible-large",
            breakpointMask: "L",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          });
        e.controller.on("engage-large:enter", () => {
          const e = s.director.requestAnimationStart({
            element: this.tile,
            duration: this.duration
          });
          this.cancelAnimationRequest = e.cancel, e.then(() => {
            0 === this.timelineGroup.time() && (0, n.trackAnimationStart)(this.tileClass), this.timelineGroup.play()
          })
        }), t.controller.on("visible-large:exit", () => {
          this.cancelAnimationRequest && this.cancelAnimationRequest(), this.timelineGroup.pause(0)
        });
        let A = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.start.m,
            end: i.animation.end.m,
            event: "engage-medium",
            breakpointMask: "M",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          }),
          r = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.visibleStart.m,
            end: i.animation.visibleEnd.m,
            event: "visible-medium",
            breakpointMask: "M",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          });
        A.controller.on("engage-medium:enter", () => {
          const e = s.director.requestAnimationStart({
            element: this.tile,
            duration: this.duration
          });
          this.cancelAnimationRequest = e.cancel, e.then(() => {
            0 === this.timelineGroup.time() && (0, n.trackAnimationStart)(this.tileClass), this.timelineGroup.play()
          })
        }), r.controller.on("visible-medium:exit", () => {
          this.cancelAnimationRequest && this.cancelAnimationRequest(), this.timelineGroup.pause(0)
        });
        let a = this.scrollGroup.addKeyframe(this.el, {
          anchors: this.tileClass,
          start: i.animation.start.s,
          end: i.animation.end.s,
          event: "engage-small",
          breakpointMask: "S",
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        this.scrollGroup.addKeyframe(this.el, {
          anchors: this.tileClass,
          start: i.animation.visibleStart.s,
          end: i.animation.visibleEnd.s,
          event: "visible-small",
          breakpointMask: "S",
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        a.controller.on("engage-small:enter", () => {
          0 === this.timelineGroup.time() && (0, n.trackAnimationStart)(this.tileClass), this.timelineGroup.play()
        }), a.controller.on("visible-small:exit", () => {
          this.timelineGroup.pause(0)
        }), this.animateText()
      }
      animateText() {
        const e = document.querySelectorAll(".translate");
        e.forEach((e, t) => {
          this.timelineGroup.addKeyframe(e, {
            start: .01 + 1.25 * t,
            end: .01 + 1.25 * t + .2,
            opacity: [0, 1],
            toggle: !0
          })
        })
      }
      mounted() {
        this.initialize()
      }
      handleFallback() {}
      handleEnhance() {}
      onResizeImmediate(e) {}
      onResizeDebounced(e) {}
      onBreakpointChange(e) {}
      static IS_SUPPORTED() {
        return !i.environment.staticLayout
      }
    }
  }, {
    51: 51,
    54: 54,
    93: 93,
    94: 94
  }],
  83: [function(e, t, A) {
    "use strict";
    var i = e(93),
      s = e(54),
      n = e(94);
    const r = e(51);
    t.exports = class extends r {
      constructor(e) {
        super(e), this.tile = this.el.closest(".grid-item"), this.tileClass = ".tile-".concat(this.tile.getAttribute("data-anim-scroll-group")), this.timelineGroup = this.anim.createTimeGroup(), this.scrollGroup = this.anim.getGroupForTarget(this.tile), this.duration = .5
      }
      initialize() {
        this.scrollGroup.addKeyframe(this.tile, {
          anchors: this.tileClass,
          start: i.animation.willChange.start,
          end: i.animation.willChange.end,
          cssClass: i.animation.willChange.class,
          toggle: !0,
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        let e = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.start.l,
            end: i.animation.end.l,
            event: "engage-large",
            breakpointMask: "L",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          }),
          t = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.visibleStart.l,
            end: i.animation.visibleEnd.l,
            event: "visible-large",
            breakpointMask: "L",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          });
        e.controller.on("engage-large:enter", () => {
          const e = s.director.requestAnimationStart({
            element: this.tile,
            duration: this.duration
          });
          this.cancelAnimationRequest = e.cancel, e.then(() => {
            0 === this.timelineGroup.time() && (0, n.trackAnimationStart)(this.tileClass), this.timelineGroup.play()
          })
        }), t.controller.on("visible-large:exit", () => {
          this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.timelineGroup.pause(0)
        });
        let A = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.start.m,
            end: i.animation.end.m,
            event: "engage-medium",
            breakpointMask: "M",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          }),
          r = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.visibleStart.m,
            end: i.animation.visibleEnd.m,
            event: "visible-medium",
            breakpointMask: "M",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          });
        A.controller.on("engage-medium:enter", () => {
          const e = s.director.requestAnimationStart({
            element: this.tile,
            duration: this.duration
          });
          this.cancelAnimationRequest = e.cancel, e.then(() => {
            0 === this.timelineGroup.time() && (0, n.trackAnimationStart)(this.tileClass), this.timelineGroup.play()
          })
        }), r.controller.on("visible-medium:exit", () => {
          this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.timelineGroup.pause(0)
        });
        let a = this.scrollGroup.addKeyframe(this.el, {
          anchors: this.tileClass,
          start: i.animation.start.s,
          end: i.animation.end.s,
          event: "engage-small",
          breakpointMask: "S",
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        this.scrollGroup.addKeyframe(this.el, {
          anchors: this.tileClass,
          start: i.animation.visibleStart.s,
          end: i.animation.visibleEnd.s,
          event: "visible-small",
          breakpointMask: "S",
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        a.controller.on("engage-small:enter", () => {
          0 === this.timelineGroup.time() && (0, n.trackAnimationStart)(this.tileClass), this.timelineGroup.play()
        }), a.controller.on("visible-small:exit", () => this.timelineGroup.pause(0)), this.timelineGroup.addKeyframe(this.el, {
          start: .25,
          end: .35,
          cssClass: "animated",
          toggle: !0
        })
      }
      mounted() {
        this.initialize()
      }
      handleFallback() {}
      handleEnhance() {}
      static IS_SUPPORTED() {
        return !i.environment.staticLayout
      }
    }
  }, {
    51: 51,
    54: 54,
    93: 93,
    94: 94
  }],
  84: [function(e, t, A) {
    "use strict";
    var i = e(4),
      s = e(93),
      n = e(54),
      r = i(e(85)),
      a = e(94);
    const o = e(51);
    e(91);
    t.exports = class extends o {
      constructor(e) {
        super(e), this.el, this.tile = this.el.closest(".grid-item"), this.tileClass = ".tile-".concat(this.tile.getAttribute("data-anim-scroll-group")), this.scrollGroup = this.anim.getGroupForTarget(this.tile), this.timelineGroup = this.gum.anim.createTimeGroup(), this.timelineGroup.name = "zzz+bell", this.bell = this.el.querySelector(".bell-clapper"), this.snooze = this.el.querySelector(".snooze"), this.duration = 4.8
      }
      mounted() {
        this.initialize()
      }
      initialize() {
        this.initZZZ();
        this.timelineGroup.addKeyframe(this.zzzController, {
          start: 0,
          end: 2.7,
          t: [0, 2.8],
          easeFunction: "cubic-bezier(.42,.17,.62,1)"
        }), this.timelineGroup.addKeyframe(this.zzzController, {
          start: 2.7 - 1.2,
          end: 2.7,
          fadeFlatten: [0, 1],
          easeFunction: "easeInOutQuad"
        }), this.timelineGroup.getControllerForTarget(this.zzzController).on("draw", () => this.zzzController.draw()), this.timelineGroup.addKeyframe(this.bell, {
          start: 3.2,
          end: 3.2 + .1,
          cssClass: "ring",
          toggle: !0,
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        }), this.scrollGroup.addKeyframe(this.tile, {
          anchors: this.tileClass,
          start: s.animation.willChange.start,
          end: s.animation.willChange.end,
          cssClass: s.animation.willChange.class,
          toggle: !0,
          disabledWhen: ["static-layout", "prefers-reduced-motion"]
        });
        let e = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: s.animation.start.l,
            end: s.animation.end.l,
            event: "engage-large",
            breakpointMask: "L",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          }),
          t = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: s.animation.visibleStart.l,
            end: s.animation.visibleEnd.l,
            event: "visible-large",
            breakpointMask: "L",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          });
        e.controller.on("engage-large:enter", () => {
          this.requestAnimationStart().then(() => {
            0 === this.timelineGroup.time() && (0, a.trackAnimationStart)(this.tileClass), this.timelineGroup.play(0)
          })
        }), t.controller.on("visible-large:exit", () => {
          this.resetAnimations()
        });
        let A = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: s.animation.start.m,
            end: s.animation.end.m,
            event: "engage-medium",
            breakpointMask: "M",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          }),
          i = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: s.animation.visibleStart.m,
            end: s.animation.visibleEnd.m,
            event: "visible-medium",
            breakpointMask: "M",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          });
        A.controller.on("engage-medium:enter", () => {
          this.requestAnimationStart().then(() => {
            0 === this.timelineGroup.time() && (0, a.trackAnimationStart)(this.tileClass), this.timelineGroup.play(0)
          })
        }), i.controller.on("visible-medium:exit", () => {
          this.resetAnimations()
        });
        let n = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: s.animation.start.s,
            end: s.animation.end.s,
            event: "engage-small",
            breakpointMask: "S",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          }),
          r = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: s.animation.visibleStart.s,
            end: s.animation.visibleEnd.s,
            event: "visible-small",
            breakpointMask: "S",
            disabledWhen: ["static-layout", "prefers-reduced-motion"]
          });
        n.controller.on("engage-small:enter", () => {
          0 === this.timelineGroup.time() && (0, a.trackAnimationStart)(this.tileClass), this.timelineGroup.play(0)
        }), r.controller.on("visible-small:exit", () => {
          this.resetAnimations()
        })
      }
      initZZZ() {
        const e = this.el.querySelector(".zzz-template");
        this.zzzEl = e.content.firstElementChild.cloneNode(!0), this.snooze.insertBefore(this.zzzEl, this.snooze.childNodes[0]);
        const t = {};
        this.tile.dataset.dir ? t.rtl = "rtl" === this.tile.dataset.dir : t.rtl = "rtl" === getComputedStyle(this.snooze).direction, this.zzzController = new r.default(this.zzzEl, t)
      }
      requestAnimationStart() {
        const e = n.director.requestAnimationStart({
          element: this.tile,
          duration: this.duration,
          name: "alerts"
        });
        return this.cancelAnimationRequest = e.cancel, e
      }
      resetAnimations() {
        this.cancelAnimationRequest && this.cancelAnimationRequest(), this.timelineGroup.pause(0)
      }
      handleFallback() {}
      handleEnhance() {}
      onResizeImmediate(e) {}
      onResizeDebounced(e) {}
      onBreakpointChange(e) {}
      static IS_SUPPORTED() {
        return !s.environment.staticLayout
      }
    }
  }, {
    4: 4,
    51: 51,
    54: 54,
    85: 85,
    91: 91,
    93: 93,
    94: 94
  }],
  85: [function(e, t, A) {
    "use strict";
    Object.defineProperty(A, "__esModule", {
      value: !0
    }), A.default = void 0;

    function i(e) {
      var t = e.trim().match(/#(..)(..)(..)/);
      return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
    }

    function s(e, t, A) {
      return e.map((e, i) => e * (1 - A) + t[i] * A)
    }

    function n(e, t) {
      return "rgba(".concat(e[0], ", ").concat(e[1], ", ").concat(e[2], ", ").concat(t, ")")
    }
    var r = class {
      constructor(e, t) {
        this.zzzEl = e, this.zzzList = Array.from(this.zzzEl.querySelectorAll(".z")), this.rtl = t.rtl, this.t = 0, this.speed = 0, this.stopping = !1, this.lastNow = Date.now(), this.colorPrimary = i(getComputedStyle(this.zzzEl).getPropertyValue("--color")), this.colorFade = i(getComputedStyle(this.zzzEl).getPropertyValue("--color-fade")), this.count = 4, this.tTarget = .8, this.finalOpacity = .7, this.textBabySize = .64, this.textSizeGrowTime = .61, this.textSizeFade = 9.2, this.wobbleAmt = 38, this.wobbleSpeed = 7.672, this.wobbleAtten = 1, this.driftXAmt = 125, this.driftYAmt = 200, this.driftYShape = 1.17, this.endAnimationSpeedThreshold = .1, this.fadeShape = 1.466, this.fadeShape2 = 2.3, this.fadeShape3 = 3.683, this.fadeFlatten = .01
      }
      _zPath(e) {
        return [Math.sin(e * this.wobbleSpeed) * this.wobbleAmt / (e * this.wobbleAtten + 1) + e * this.driftXAmt, -this.driftYAmt * e ** this.driftYShape]
      }
      _fadeInOut(e) {
        if (e < .001) return 0;
        var t = (Math.sin(e ** this.fadeShape * Math.PI) / (e * this.fadeShape2)) ** this.fadeShape3;
        return t = t * (1 - this.fadeFlatten) + Math.min(1, 6.8 - 8 * e) * this.finalOpacity * this.fadeFlatten, Math.min(1, Math.max(0, t))
      }
      draw() {
        for (let r = 0; r < this.count; r++) {
          const a = this.zzzList[r],
            o = r / this.count,
            l = (this.t / this.count + o) % 1,
            h = this._fadeInOut(l),
            c = s(this.colorFade, this.colorPrimary, h),
            d = this._zPath(l);
          this.rtl && (d[0] *= -1);
          const u = 1 * this.textBabySize + (1 - this.textBabySize) * (e = 0, t = 1, A = Math.min(1, l / this.textSizeGrowTime), i = void 0, (i = Math.max(0, Math.min(1, (A - e) / (t - e)))) * i * (3 - 2 * i)),
            m = (1 - l * this.textSizeFade / 100) * u;
          a.style.color = n(c, h), a.style.transform = "translate(".concat(d[0], "px, ").concat(d[1], "px) scale(").concat(m, ")")
        }
        var e, t, A, i
      }
    };
    A.default = r
  }, {}],
  86: [function(e, t, A) {
    "use strict";
    var i = e(93),
      s = e(54),
      n = e(94);
    const r = e(51),
      a = e(87),
      o = e(60);
    t.exports = class extends r {
      constructor(e) {
        super(e), this.tile = this.el, this.tileClass = ".tile-".concat(this.tile.getAttribute("data-anim-scroll-group")), this.tileContainer = this.el.querySelector(".media-container"), this.tileHeadline = this.el.querySelector(".siri-before"), this.tileTranslation = this.el.querySelector(".siri-after"), this.siriOrb = this.el.querySelector("video"), this.siriWordAnimation = null, this.animationControls = this.tile.querySelector(".inline-animation-controls"), this.replayButton = this.tile.querySelector(".replay-button"), this.videoElement = this.el.querySelector("video") || null, this.videoProxy, this.playedOnce = !1, this.onEnterKeyframe = this.onEnterKeyframe.bind(this), this.onExitKeyframe = this.onExitKeyframe.bind(this), this.onVideoEnded = this.onVideoEnded.bind(this), this.isPlaying = !1, this.userPaused = !1, this.timelineGroup = this.gum.anim.createTimeGroup(), this.scrollGroup = this.anim.getGroupForTarget(this.tile), this.translationDelay, this.duration = 5, this.replayDuration = 1.5
      }
      mounted() {
        this.videoElement && (this.initVideoProxy(), this.replayButton && this.addReplay())
      }
      onVideoEnded() {
        this.isPlaying = !1, this.playedOnce = !0
      }
      initialize() {
        this.timelineGroup.addKeyframe(this.tileHeadline, {
          start: .7,
          end: .8,
          ease: 1,
          opacity: [1, 0],
          disabledWhen: ["static-layout", "prefers-reduced-motion", "firefox"]
        }), this.timelineGroup.addKeyframe(this.tileTranslation, {
          start: .5,
          end: .6,
          ease: 1,
          opacity: [0, 1],
          disabledWhen: ["static-layout", "prefers-reduced-motion", "firefox"]
        }), this.timelineGroup.addKeyframe(this.tileTranslation, {
          start: .5,
          end: .6,
          ease: 1,
          easeFunction: "easeInCubic",
          y: ["100h", "0px"],
          disabledWhen: ["static-layout", "prefers-reduced-motion", "firefox"]
        }), this.timelineGroup.addKeyframe(this.tileContainer, {
          start: .6,
          end: 1,
          ease: 1,
          easeFunction: "easeOutCubic",
          y: [null, "0px"],
          disabledWhen: ["static-layout", "prefers-reduced-motion", "firefox"]
        }), this.timelineGroup.addKeyframe(this.siriOrb, {
          start: .5,
          end: .6,
          ease: 1,
          opacity: [1, 0],
          disabledWhen: ["static-layout", "prefers-reduced-motion", "firefox"]
        }), this.timelineGroup.addKeyframe(this.el, {
          start: this.replayDuration,
          end: this.replayDuration + .1,
          event: "timelineComplete"
        }).controller.on("timelineComplete:enter", () => {
          this.updateAnimationControls()
        }), this.scrollGroup.addKeyframe(this.tile, {
          anchors: this.tileClass,
          start: i.animation.willChange.start,
          end: i.animation.willChange.end,
          cssClass: i.animation.willChange.class,
          toggle: !0,
          disabledWhen: ["static-layout", "prefers-reduced-motion", "firefox"]
        });
        let e = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.start.l,
            end: i.animation.end.l,
            event: "engage-large",
            breakpointMask: "L",
            disabledWhen: ["static-layout", "prefers-reduced-motion", "firefox"]
          }),
          t = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.visibleStart.l,
            end: i.animation.visibleEnd.l,
            event: "visible-large",
            breakpointMask: "L",
            disabledWhen: ["static-layout", "prefers-reduced-motion", "firefox"]
          });
        e.controller.on("engage-large:enter", () => {
          const e = s.director.requestAnimationStart({
            element: this.tile,
            duration: this.duration
          });
          this.cancelAnimationRequest = e.cancel, e.then(() => {
            this.startSiriAnimations()
          })
        }), t.controller.on("visible-large:exit", () => {
          this.onExitKeyframe(), this.tileHeadline.classList.remove("visible"), this.timelineGroup.pause(0), this.siriWordAnimation && this.siriWordAnimation.resetHiddenLetters()
        });
        let A = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.start.m,
            end: i.animation.end.m,
            event: "engage-medium",
            breakpointMask: "M",
            disabledWhen: ["static-layout", "prefers-reduced-motion", "firefox"]
          }),
          n = this.scrollGroup.addKeyframe(this.el, {
            anchors: this.tileClass,
            start: i.animation.visibleStart.m,
            end: i.animation.visibleEnd.m,
            event: "visible-medium",
            breakpointMask: "M",
            disabledWhen: ["static-layout", "prefers-reduced-motion", "firefox"]
          });
        A.controller.on("engage-medium:enter", () => {
          const e = s.director.requestAnimationStart({
            element: this.tile,
            duration: this.duration
          });
          this.cancelAnimationRequest = e.cancel, e.then(() => {
            this.startSiriAnimations()
          })
        }), n.controller.on("visible-medium:exit", () => {
          this.onExitKeyframe(), this.tileHeadline.classList.remove("visible"), this.timelineGroup.pause(0), this.siriWordAnimation && this.siriWordAnimation.resetHiddenLetters()
        });
        let r = this.scrollGroup.addKeyframe(this.el, {
          anchors: this.tileClass,
          start: i.animation.start.s,
          end: i.animation.end.s,
          event: "engage-small",
          breakpointMask: "S",
          disabledWhen: ["static-layout", "prefers-reduced-motion", "firefox"]
        });
        this.scrollGroup.addKeyframe(this.el, {
          anchors: this.tileClass,
          start: i.animation.visibleStart.s,
          end: i.animation.visibleEnd.s,
          event: "visible-small",
          breakpointMask: "S",
          disabledWhen: ["static-layout", "prefers-reduced-motion", "firefox"]
        });
        r.controller.on("engage-small:enter", () => {
          this.startSiriAnimations()
        }), r.controller.on("visible-small:exit", () => {
          this.onExitKeyframe(), this.tileHeadline.classList.remove("visible"), this.timelineGroup.pause(0), this.siriWordAnimation && this.siriWordAnimation.resetHiddenLetters()
        })
      }
      initVideoProxy() {
        this.videoProxy = o.newVideoProxy(this.videoElement, {}), this.videoProxy.videoElement.addEventListener("ended", this.onVideoEnded), this.initialize()
      }
      onEnterKeyframe() {
        this.userPaused || this.playVideo()
      }
      onExitKeyframe() {
        this.cancelAnimationRequest && this.cancelAnimationRequest(), this.userPaused || (this.videoProxy.gotoAndStop(0), this.isPlaying = !1, this.siriWordAnimation && this.siriWordAnimation.cancelAnimation(), this.timelineTimer && (clearTimeout(this.timelineTimer), this.timelineTimer = null), this.timelineTimer2 && (clearTimeout(this.timelineTimer2), this.timelineTimer2 = null))
      }
      playVideo() {
        this.isPlaying || (this.isPlaying = !0, 0 === this.videoProxy.videoElement.currentTime && (0, n.trackAnimationStart)(this.tileClass), this.videoProxy.play())
      }
      startSiriAnimations() {
        this.videoProxy.promises.canBePlayedThrough.then(() => {
          this.tileHeadline.classList.add("visible"), this.siriWordAnimation ? this.siriWordAnimation.animateWords() : this.siriWordAnimation = new a({
            element: "#siri-command-animation",
            duration: 3300,
            pause_time: 300
          }), this.onEnterKeyframe(), this.translationDelay = 1e3 * this.videoProxy.duration * .86, this.timelineTimer = setTimeout(() => {
            this.timelineGroup.play()
          }, this.translationDelay)
        })
      }
      updateAnimationControls() {
        this.playedOnce || (this.playedOnce = !0), this.replayButton.disabled = !1
      }
      addReplay() {
        this.replayButton.addEventListener("click", () => {
          this.timelineGroup.pause(0), this.siriWordAnimation && (this.siriWordAnimation.resetHiddenLetters(), this.siriWordAnimation.animateWords()), this.onEnterKeyframe(), this.timelineTimer2 = setTimeout(() => {
            this.timelineGroup.play()
          }, this.translationDelay)
        })
      }
      onResizeImmediate(e) {}
      onResizeDebounced(e) {}
      onBreakpointChange(e) {}
      static IS_SUPPORTED() {
        return !i.environment.staticLayout && document.documentElement.classList.contains("webgl")
      }
    }
  }, {
    51: 51,
    54: 54,
    60: 60,
    87: 87,
    93: 93,
    94: 94
  }],
  87: [function(e, t, A) {
    "use strict";
    t.exports = class {
      constructor(e) {
        var t = {
          element: "#siri-command-animation",
          duration: 1500,
          pause_time: 500
        };
        this.props = Object.assign({}, t, e), this.element = document.querySelector(this.props.element), this.copyText = this.element.textContent, this.hideAllLetters(this.copyText), this.element.innerHTML = "", this.render(), this.animateWords()
      }
      render() {
        let e = document.createDocumentFragment();
        this.hiddenElementLetters.forEach(t => {
          e.appendChild(t[1])
        }), this.element.appendChild(e)
      }
      hideAllLetters(e) {
        let t = "ั่ง".length,
          A = e.indexOf("ั่ง");
        var i = this.hiddenElementLetters = e.split("");
        return -1 !== A && i.splice(A, t, "ั่ง"), this.hiddenElementLetters = i.map((e, t) => {
          let A = document.createElement("span");
          return this.setHidden(e, A), [e, A]
        }), this.hiddenElementLetters
      }
      setHidden(e, t) {
        t.setAttribute("aria-hidden", "true"), t.style.color = this.props.shownColor, t.style.opacity = "0", t.innerText = e
      }
      resetHiddenLetters() {
        this.hiddenElementLetters.forEach(e => {
          this.setHidden(e[0], e[1])
        })
      }
      showLetter(e) {
        e.style.opacity = "1"
      }
      animateWords() {
        let e = this.props.duration,
          t = this.hiddenElementLetters.length,
          A = this.hiddenElementLetters.reduce((e, t) => t[0].match(/\s/) ? e + 1 : e, 0);
        e -= A * this.props.pause_time;
        let i = t - A;
        return this.timePerCharacter = Math.floor(e / i), this.showedLettersIndex = 0, this.showNextLetter(), new Promise(e => {
          this.element.addEventListener("complete", () => {
            e()
          })
        })
      }
      showNextLetter() {
        if (this.showedLettersIndex < this.hiddenElementLetters.length) {
          let e = this.timePerCharacter,
            t = this.hiddenElementLetters[this.showedLettersIndex];
          t[0].match(/\s/) && (e = this.props.pause_time), this.wait(e).then(() => {
            this.showNextLetter(), this.showLetter(t[1]), this.showedLettersIndex++
          })
        } else this.wait(this.props.pause_time).then(() => {
          this.element.dispatchEvent(new Event("complete"))
        })
      }
      wait(e) {
        return new Promise(t => {
          this.waitTimer = setTimeout(() => {
            t()
          }, e)
        })
      }
      cancelAnimation() {
        this.waitTimer && (clearTimeout(this.waitTimer), this.waitTimer = null, this.resetHiddenLetters())
      }
    }
  }, {}],
  88: [function(e, t, A) {
    "use strict";
    t.exports = class {
      constructor() {
        this.events = {}
      }
      emit(e, t) {
        const A = this.events[e];
        A && A.forEach(e => {
          e.call(null, t)
        })
      }
      subscribe(e, t) {
        return this.events[e] || (this.events[e] = []), this.events[e].push(t), () => {
          this.events[e] = this.events[e].filter(e => t !== e)
        }
      }
    }
  }, {}],
  89: [function(e, t, A) {
    "use strict";

    function i(e) {
      var t = getComputedStyle(e).backgroundImage.match(/\(["']?(.*?)["']?\)/);
      if (t) return t[1]
    }

    function s(e) {
      return new Promise((t, A) => {
        var i = new Image;
        i.src = e, i.addEventListener("load", () => {
          t()
        }), i.addEventListener("error", e => {
          A(e)
        })
      })
    }

    function n(e, t) {
      return new Promise((A, i) => {
        var s = !1,
          n = setTimeout(() => {
            s = !0, i(new Error("Timed out after ".concat(t, "s")))
          }, 1e3 * t);
        e.then((...e) => {
          s || (clearTimeout(n), A(...e))
        })
      })
    }
    Object.defineProperty(A, "__esModule", {
      value: !0
    }), A.getBackgroundImageUrl = i, A.waitForImageLoad = s, A.timeoutPromise = n, A.waitForImagesBackgroundLoad = function(e, t = 10) {
      try {
        const A = Array.from(e),
          r = A.map(i).map(s);
        return n(Promise.all(r), t)
      } catch (e) {
        return new Promise.reject(e)
      }
    }
  }, {}],
  90: [function(e, t, A) {
    "use strict";
    t.exports = function e() {
      let t = {},
        A = !1,
        i = 0;
      "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (A = arguments[0], i++);
      let s = function(i) {
        for (let s in i) i.hasOwnProperty(s) && (A && "[object Object]" === Object.prototype.toString.call(i[s]) ? t[s] = e(t[s], i[s]) : t[s] = i[s])
      };
      for (; i < arguments.length; i++) {
        s(arguments[i])
      }
      return t
    }
  }, {}],
  91: [function(e, t, A) {
    "use strict";
    const i = function(e) {
      for (var t = {}, A = e.substr(1).split("&"), i = 0; i < A.length; i++)
        if (0 !== A[i].length) {
          var s = A[i].split("=");
          t[decodeURIComponent(s[0])] = decodeURIComponent(s[1] || "")
        } return t
    }(window.location.search);
    t.exports = i
  }, {}],
  92: [function(e, t, A) {
    "use strict";
    const i = e(44);
    t.exports = class {
      constructor(e, t, A) {
        return this.el = e, this.anchors = t, this.kf = A, this.boundOnVoFocus = this.onVoFocus.bind(this), this.el.addEventListener("focus", this.boundOnVoFocus), this.el.setAttribute("tabindex", -1), this
      }
      onVoFocus(e) {
        if ("key" !== e.target.dataset.focusMethod) return;
        let t = i.parse(this.kf.start, {
          anchors: this.anchors
        });
        const A = t + (i.parse(this.kf.end, {
          anchors: this.anchors
        }) - t) / 2;
        window.scrollTo(0, A), e.target.blur()
      }
      remove() {
        this.el.removeEventListener("focus", this.boundOnVoFocus)
      }
    }
  }, {
    44: 44
  }],
  93: [function(e, t, A) {
    "use strict";
    Object.defineProperty(A, "__esModule", {
      value: !0
    }), A.default = A.animation = A.environment = void 0;
    const i = document.documentElement.classList,
      s = {
        staticLayout: i.contains("static-layout"),
        ie: i.contains("ie"),
        edge: i.contains("edge"),
        aow: i.contains("aow"),
        prefersReducedMotion: i.contains("prefers-reduced-motion"),
        webkit: i.contains("webkit"),
        ios12: i.contains("ios12")
      };
    A.environment = s;
    const n = {
      start: {
        l: "a0t + 90a0h - 100vh",
        m: "a0t + 90a0h - 100vh",
        s: "a0t + 15a0h - 50vh"
      },
      end: {
        l: "a0t + 50a0h",
        m: "a0t + 50a0h",
        s: "a0t + 50a0h"
      },
      visibleStart: {
        l: "a0t - 100vh + 10h",
        m: "a0t - 100vh + 10h",
        s: "a0t - 100vh + 10h"
      },
      visibleEnd: {
        l: "a0b",
        m: "a0b",
        s: "a0b"
      },
      willChange: {
        start: "a0t - 100vh",
        end: "a0b",
        class: "will-change"
      }
    };
    A.animation = n;
    var r = {
      environment: s,
      animation: n
    };
    A.default = r
  }, {}],
  94: [function(e, t, A) {
    "use strict";
    Object.defineProperty(A, "__esModule", {
      value: !0
    }), A.trackAnimationStart = function(e) {
      try {
        if (!n[e]) return void(n[e] = !0);
        0, r++, o()
      } catch (e) {
        0
      }
    };
    const i = e(57);
    let s;
    try {
      s = e("@marcom/ac-analytics")
    } catch (e) {
      0
    }
    const n = {};
    var r = 0;

    function a() {
      r = 0
    }
    window.s && window.s.registerPostTrackCallback && window.s.registerPostTrackCallback(a);
    var o = i(() => {
      s.passiveTracker({
        events: "event378=".concat(r)
      })
    }, 50)
  }, {
    57: 57,
    undefined: void 0
  }],
  95: [function(e, t, A) {
    "use strict";
    Object.defineProperty(A, "__esModule", {
      value: !0
    }), A.getTextZoomRatio = c, A.adjustForTextZoom = d, A.listen = function() {
      m();
      let e = c(!0);
      e > 1 && u({
        textZoom: e
      });
      n.detect(), window.addEventListener("resize:text-zoom", p), i.on(s.PageEvents.ON_RESIZE_DEBOUNCED, g)
    };
    const i = e(24),
      s = e(31),
      n = e(1);
    var r = null,
      a = NaN,
      o = NaN,
      l = NaN,
      h = NaN;

    function c(e = !1) {
      if (e || isNaN(h)) {
        const e = parseFloat(getComputedStyle((r || ((r = window.document.createElement("span")).textContent = "Text Zoom Tester", r.setAttribute("aria-hidden", "true"), r.style.fontSize = "100px", r.style.display = "none", window.document.body.appendChild(r)), r)).fontSize);
        h = e / 100
      }
      return h
    }

    function d({
      container: e = document,
      zoomRatio: t = c(!0)
    }) {
      Array.from(e.querySelectorAll("[data-text-zoom-max]")).forEach(e => {
        const A = Number(e.dataset.textZoomMax);
        if (t > A) {
          e.style.fontSize = "";
          const i = A,
            s = (parseFloat(getComputedStyle(e).fontSize) / t / t * i).toFixed(2);
          e.style.fontSize = "".concat(s, "px")
        } else e.style.fontSize = ""
      }), Array.from(e.querySelectorAll("[data-text-zoom-max-font-size]")).forEach(e => {
        const A = Number(e.dataset.textZoomMaxFontSize);
        e.style.fontSize = "";
        if (A < parseFloat(getComputedStyle(e).fontSize)) {
          const i = A;
          e.style.fontSize = "".concat(i / t, "px")
        }
      })
    }

    function u({
      textZoom: e = c(!0),
      force: t = !1
    } = {}) {
      if (t || l !== e && e >= 1) {
        d({
          zoomRatio: e
        }), l = e;
        let t = new CustomEvent("text-zoom", {
          bubbles: !1,
          detail: {
            textZoom: e
          }
        });
        window.dispatchEvent(t)
      }
    }

    function m() {
      a = s.pageMetrics.windowWidth, o = s.pageMetrics.windowHeight
    }

    function p() {
      let e = s.pageMetrics.windowWidth,
        t = s.pageMetrics.windowHeight;
      e === a && t === o && u(), m()
    }

    function g() {
      u({
        force: !0
      })
    }
  }, {
    1: 1,
    24: 24,
    31: 31
  }],
  96: [function(e, t, A) {
    "use strict";
    var i = e(5)(e(95));
    const s = e(52),
      n = e(22),
      r = e(53),
      a = e(72);
    e(1), e(65);
    Object.assign(r, a);
    const o = {
      initialize: function() {
        let e = document.querySelector(".main"),
          t = new s(e),
          A = {};
        t.on(s.EVENTS.DOM_COMPONENTS_MOUNTED, () => {
          t.addComponent({
            componentName: "EnhancementComponent",
            el: document.documentElement,
            data: A
          }), i.listen()
        }), t.anim.on(t.anim.model.EVENTS.ON_DOM_GROUPS_CREATED, () => {
          new n
        })
      }
    };
    t.exports = o.initialize()
  }, {
    1: 1,
    22: 22,
    5: 5,
    52: 52,
    53: 53,
    65: 65,
    72: 72,
    95: 95
  }]
}, {}, [96]);