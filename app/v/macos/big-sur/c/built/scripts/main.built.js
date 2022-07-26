! function() {
  function e(t, A, n) {
    function i(a, o) {
      if (!A[a]) {
        if (!t[a]) {
          var s = "function" == typeof require && require;
          if (!o && s) return s(a, !0);
          if (r) return r(a, !0);
          var u = new Error("Cannot find module '" + a + "'");
          throw u.code = "MODULE_NOT_FOUND", u
        }
        var l = A[a] = {
          exports: {}
        };
        t[a][0].call(l.exports, function(e) {
          var A = t[a][1][e];
          return i(A ? A : e)
        }, l, l.exports, e, t, A, n)
      }
      return A[a].exports
    }
    for (var r = "function" == typeof require && require, a = 0; a < n.length; a++) i(n[a]);
    return i
  }
  return e
}()({
  1: [function(e, t, A) {
    "use strict";

    function n() {
      this._createElemnts(), this._bindEvents()
    }
    var i = n.prototype;
    i._bindEvents = function() {
      this._onResize = this._resize.bind(this)
    }, i._createElemnts = function() {
      this.span = document.createElement("span");
      var e = this.span.style;
      e.visibility = "hidden", e.position = "absolute", e.top = "0", e.bottom = "0", e.zIndex = "-1", this.span.innerHTML = "&nbsp;", this.iframe = document.createElement("iframe");
      var t = this.iframe.style;
      t.position = "absolute", t.top = "0", t.left = "0", t.width = "100%", t.height = "100%", this.span.appendChild(this.iframe), document.body.appendChild(this.span)
    }, i.detect = function(e) {
      this.originalSize = e || 17, this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.currentSize > this.originalSize && this._onResize(), this.isDetecting || (this.iframe.contentWindow.addEventListener("resize", this._onResize), this.isDetecting = !0)
    }, i._resize = function(e) {
      this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.originalSize < this.currentSize ? document.documentElement.classList.add("text-zoom") : document.documentElement.classList.remove("text-zoom"), window.dispatchEvent(new Event("resize")), window.dispatchEvent(new CustomEvent("resize:text-zoom", {
        detail: this
      }))
    }, i.getScale = function() {
      return this.currentSize / this.originalSize
    }, i.remove = function() {
      this.isDetecting && (this.iframe.contentWindow.removeEventListener("resize", this._onResize), this.isDetecting = !1)
    }, i.destroy = function() {
      this.remove(), this.span && this.span.parentElement && this.span.parentElement.removeChild(this.span), this.span = null, this.iframe = null
    }, t.exports = new n
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

    function n() {
      this._events = {}
    }
    var i = n.prototype;
    i.on = function(e, t) {
      this._events[e] = this._events[e] || [], this._events[e].unshift(t)
    }, i.once = function(e, t) {
      function A(i) {
        n.off(e, A), void 0 !== i ? t(i) : t()
      }
      var n = this;
      this.on(e, A)
    }, i.off = function(e, t) {
      if (this.has(e)) {
        if (1 === arguments.length) return this._events[e] = null, void delete this._events[e];
        var A = this._events[e].indexOf(t);
        A !== -1 && this._events[e].splice(A, 1)
      }
    }, i.trigger = function(e, t) {
      if (this.has(e))
        for (var A = this._events[e].length - 1; A >= 0; A--) void 0 !== t ? this._events[e][A](t) : this._events[e][A]()
    }, i.has = function(e) {
      return e in this._events != !1 && 0 !== this._events[e].length
    }, i.destroy = function() {
      for (var e in this._events) this._events[e] = null;
      this._events = null
    }, t.exports = n
  }, {}],
  4: [function(e, t, A) {
    function n(e) {
      if (Array.isArray(e)) {
        for (var t = 0, A = new Array(e.length); t < e.length; t++) A[t] = e[t];
        return A
      }
    }
    t.exports = n
  }, {}],
  5: [function(e, t, A) {
    function n(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }
    t.exports = n
  }, {}],
  6: [function(e, t, A) {
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.exports = n
  }, {}],
  7: [function(e, t, A) {
    function n() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
      } catch (e) {
        return !1
      }
    }

    function i(e, A, a) {
      return n() ? t.exports = i = Reflect.construct : t.exports = i = function(e, t, A) {
        var n = [null];
        n.push.apply(n, t);
        var i = Function.bind.apply(e, n),
          a = new i;
        return A && r(a, A.prototype), a
      }, i.apply(null, arguments)
    }
    var r = e(16);
    t.exports = i
  }, {
    16: 16
  }],
  8: [function(e, t, A) {
    function n(e, t) {
      for (var A = 0; A < t.length; A++) {
        var n = t[A];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    function i(e, t, A) {
      return t && n(e.prototype, t), A && n(e, A), e
    }
    t.exports = i
  }, {}],
  9: [function(e, t, A) {
    function n(e, A, r) {
      return "undefined" != typeof Reflect && Reflect.get ? t.exports = n = Reflect.get : t.exports = n = function(e, t, A) {
        var n = i(e, t);
        if (n) {
          var r = Object.getOwnPropertyDescriptor(n, t);
          return r.get ? r.get.call(A) : r.value
        }
      }, n(e, A, r || e)
    }
    var i = e(17);
    t.exports = n
  }, {
    17: 17
  }],
  10: [function(e, t, A) {
    function n(e) {
      return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, n(e)
    }
    t.exports = n
  }, {}],
  11: [function(e, t, A) {
    function n(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && i(e, t)
    }
    var i = e(16);
    t.exports = n
  }, {
    16: 16
  }],
  12: [function(e, t, A) {
    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    t.exports = n
  }, {}],
  13: [function(e, t, A) {
    function n(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }
    t.exports = n
  }, {}],
  14: [function(e, t, A) {
    function n() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
    t.exports = n
  }, {}],
  15: [function(e, t, A) {
    function n(e, t) {
      return !t || "object" !== i(t) && "function" != typeof t ? r(e) : t
    }
    var i = e(19),
      r = e(5);
    t.exports = n
  }, {
    19: 19,
    5: 5
  }],
  16: [function(e, t, A) {
    function n(e, A) {
      return t.exports = n = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      }, n(e, A)
    }
    t.exports = n
  }, {}],
  17: [function(e, t, A) {
    function n(e, t) {
      for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = i(e), null !== e););
      return e
    }
    var i = e(10);
    t.exports = n
  }, {
    10: 10
  }],
  18: [function(e, t, A) {
    function n(e) {
      return i(e) || r(e) || a()
    }
    var i = e(4),
      r = e(13),
      a = e(14);
    t.exports = n
  }, {
    13: 13,
    14: 14,
    4: 4
  }],
  19: [function(e, t, A) {
    function n(e) {
      return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function i(e) {
      return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = i = function(e) {
        return n(e)
      } : t.exports = i = function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e)
      }, i(e)
    }
    t.exports = i
  }, {}],
  20: [function(e, t, A) {
    "use strict";
    t.exports = {
      majorVersionNumber: "3.x"
    }
  }, {}],
  21: [function(e, t, A) {
    "use strict";
    t.exports = {
      RAFEmitter: e(22),
      ThrottledRAFEmitter: e(27),
      update: e(35),
      external: e(32),
      draw: e(31),
      cancelUpdate: e(30),
      cancelExternal: e(29),
      cancelDraw: e(28),
      RAFExecutor: e(23),
      sharedRAFExecutorInstance: e(34)
    }
  }, {
    22: 22,
    23: 23,
    27: 27,
    28: 28,
    29: 29,
    30: 30,
    31: 31,
    32: 32,
    34: 34,
    35: 35
  }],
  22: [function(e, t, A) {
    "use strict";

    function n(e) {
      e = e || {}, r.call(this), this.id = o.getNewID(), this.executor = e.executor || a, this._reset(), this._willRun = !1, this._didDestroy = !1
    }
    var i, r = e(2).EventEmitterMicro,
      a = e(34),
      o = e(33);
    i = n.prototype = Object.create(r.prototype), i.run = function() {
      return this._willRun || (this._willRun = !0), this._subscribe()
    }, i.cancel = function() {
      this._unsubscribe(), this._willRun && (this._willRun = !1), this._reset()
    }, i.destroy = function() {
      var e = this.willRun();
      return this.cancel(), this.executor = null, r.prototype.destroy.call(this), this._didDestroy = !0, e
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
    }, t.exports = n
  }, {
    2: 2,
    33: 33,
    34: 34
  }],
  23: [function(e, t, A) {
    "use strict";

    function n(e) {
      e = e || {}, this._reset(), this.updatePhases(), this.eventEmitter = new r, this._willRun = !1, this._totalSubscribeCount = -1, this._requestAnimationFrame = window.requestAnimationFrame, this._cancelAnimationFrame = window.cancelAnimationFrame, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
    }
    var i, r = e(3);
    i = n.prototype, i.frameRequestedPhase = "requested", i.startPhase = "start", i.runPhases = ["update", "external", "draw"], i.endPhase = "end", i.disabledPhase = "disabled", i.beforePhaseEventPrefix = "before:", i.afterPhaseEventPrefix = "after:", i.subscribe = function(e, t) {
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
      for (this._subscribers = this._nextFrameSubscribers, this._subscribersOrder = this._nextFrameSubscribersOrder, this._subscriberArrayLength = this._nextFrameSubscriberArrayLength, this._subscriberCount = this._nextFrameSubscriberCount, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex], this._isRunning = !0, this._willRun = !1, this._didRequestNextRAF = !1, this._rafData.delta = e - this.lastFrameTime, this.lastFrameTime = e, this._rafData.fps = 0, this._rafData.delta >= 1e3 && (this._rafData.delta = 0), 0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta), this._rafData.time = e, this._rafData.naturalFps = this._rafData.fps, this._rafData.timeNow = Date.now(), this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameStart(this._rafData);
      for (this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._runPhaseIndex = 0; this._runPhaseIndex < this._runPhasesLength; this._runPhaseIndex++) {
        for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]].trigger(this.phase, this._rafData);
        this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase)
      }
      for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameEnd(this._rafData);
      this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._willRun ? (this.phaseIndex = 0, this.phaseIndex = this.phases[this.phaseIndex]) : this._reset()
    }, i._onExternalAnimationFrame = function(e) {
      this._isUsingExternalAnimationFrame && this._onAnimationFrame(e)
    }, i._reset = function() {
      this._rafData || (this._rafData = {}), this._rafData.time = 0, this._rafData.delta = 0, this._rafData.fps = 0, this._rafData.naturalFps = 0, this._rafData.timeNow = 0, this._subscribers = {}, this._subscribersOrder = [], this._currentSubscriberIndex = -1, this._subscriberArrayLength = 0, this._subscriberCount = 0, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._didEmitFrameData = !1, this._animationFrame = null, this._animationFrameActive = !1, this._isRunning = !1, this._shouldReset = !1, this.lastFrameTime = 0, this._runPhaseIndex = -1, this.phaseIndex = -1, this.phase = this.disabledPhase
    }, t.exports = n
  }, {
    3: 3
  }],
  24: [function(e, t, A) {
    "use strict";
    var n = e(26),
      i = function(e) {
        this.phase = e, this.rafEmitter = new n, this._cachePhaseIndex(), this.requestAnimationFrame = this.requestAnimationFrame.bind(this), this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this), this._onBeforeRAFExecutorStart = this._onBeforeRAFExecutorStart.bind(this), this._onBeforeRAFExecutorPhase = this._onBeforeRAFExecutorPhase.bind(this), this._onAfterRAFExecutorPhase = this._onAfterRAFExecutorPhase.bind(this), this.rafEmitter.on(this.phase, this._onRAFExecuted.bind(this)), this.rafEmitter.executor.eventEmitter.on("before:start", this._onBeforeRAFExecutorStart), this.rafEmitter.executor.eventEmitter.on("before:" + this.phase, this._onBeforeRAFExecutorPhase), this.rafEmitter.executor.eventEmitter.on("after:" + this.phase, this._onAfterRAFExecutorPhase), this._frameCallbacks = [], this._currentFrameCallbacks = [], this._nextFrameCallbacks = [], this._phaseActive = !1, this._currentFrameID = -1, this._cancelFrameIdx = -1, this._frameCallbackLength = 0, this._currentFrameCallbacksLength = 0, this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0
      },
      r = i.prototype;
    r.requestAnimationFrame = function(e, t) {
      return t === !0 && this.rafEmitter.executor.phaseIndex > 0 && this.rafEmitter.executor.phaseIndex <= this.phaseIndex ? this._phaseActive ? (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !0), this._frameCallbacks.push(this._currentFrameID, e), this._frameCallbackLength += 2) : (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !1), this._currentFrameCallbacks.push(this._currentFrameID, e), this._currentFrameCallbacksLength += 2) : (this._currentFrameID = this.rafEmitter.run(), this._nextFrameCallbacks.push(this._currentFrameID, e), this._nextFrameCallbacksLength += 2), this._currentFrameID
    }, r.cancelAnimationFrame = function(e) {
      this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(e), this._cancelFrameIdx > -1 ? this._cancelNextAnimationFrame() : (this._cancelFrameIdx = this._currentFrameCallbacks.indexOf(e), this._cancelFrameIdx > -1 ? this._cancelCurrentAnimationFrame() : (this._cancelFrameIdx = this._frameCallbacks.indexOf(e), this._cancelFrameIdx > -1 && this._cancelRunningAnimationFrame()))
    }, r._onRAFExecuted = function(e) {
      for (this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) this._frameCallbacks[this._frameCallbackIteration + 1](e.time, e);
      this._frameCallbacks.length = 0, this._frameCallbackLength = 0
    }, r._onBeforeRAFExecutorStart = function() {
      Array.prototype.push.apply(this._currentFrameCallbacks, this._nextFrameCallbacks.splice(0, this._nextFrameCallbacksLength)), this._currentFrameCallbacksLength = this._nextFrameCallbacksLength, this._nextFrameCallbacks.length = 0, this._nextFrameCallbacksLength = 0
    }, r._onBeforeRAFExecutorPhase = function() {
      this._phaseActive = !0, Array.prototype.push.apply(this._frameCallbacks, this._currentFrameCallbacks.splice(0, this._currentFrameCallbacksLength)), this._frameCallbackLength = this._currentFrameCallbacksLength, this._currentFrameCallbacks.length = 0, this._currentFrameCallbacksLength = 0
    }, r._onAfterRAFExecutorPhase = function() {
      this._phaseActive = !1
    }, r._cachePhaseIndex = function() {
      this.phaseIndex = this.rafEmitter.executor.phases.indexOf(this.phase)
    }, r._cancelRunningAnimationFrame = function() {
      this._frameCallbacks.splice(this._cancelFrameIdx, 2), this._frameCallbackLength -= 2
    }, r._cancelCurrentAnimationFrame = function() {
      this._currentFrameCallbacks.splice(this._cancelFrameIdx, 2), this._currentFrameCallbacksLength -= 2
    }, r._cancelNextAnimationFrame = function() {
      this._nextFrameCallbacks.splice(this._cancelFrameIdx, 2), this._nextFrameCallbacksLength -= 2, 0 === this._nextFrameCallbacksLength && this.rafEmitter.cancel()
    }, t.exports = i
  }, {
    26: 26
  }],
  25: [function(e, t, A) {
    "use strict";
    var n = e(24),
      i = function() {
        this.events = {}
      },
      r = i.prototype;
    r.requestAnimationFrame = function(e) {
      return this.events[e] || (this.events[e] = new n(e)), this.events[e].requestAnimationFrame
    }, r.cancelAnimationFrame = function(e) {
      return this.events[e] || (this.events[e] = new n(e)), this.events[e].cancelAnimationFrame
    }, t.exports = new i
  }, {
    24: 24
  }],
  26: [function(e, t, A) {
    "use strict";
    var n = e(22),
      i = function(e) {
        n.call(this, e)
      },
      r = i.prototype = Object.create(n.prototype);
    r._subscribe = function() {
      return this.executor.subscribe(this, !0)
    }, t.exports = i
  }, {
    22: 22
  }],
  27: [function(e, t, A) {
    "use strict";

    function n(e, t) {
      a.call(this), t = t || {}, this._fps = e || 0, this._delta = 0, this._currentFps = 0, this._rafEmitter = t.rafEmitter || new r, this._lastThrottledTime = 0, this._didEmitFrameData = !1, this._rafEmitterEvent = null, this._shouldDraw = !1, this._boundOnRAFEmitterUpdate = this._onRAFEmitterUpdate.bind(this), this._boundOnRAFEmitterDraw = this._onRAFEmitterDraw.bind(this), this._boundOnRAFEmitterStop = this._onRAFEmitterStop.bind(this), this._rafEmitter.on("update", this._boundOnRAFEmitterUpdate), this._rafEmitter.on("draw", this._boundOnRAFEmitterDraw), this._rafEmitter.on("stop", this._boundOnRAFEmitterStop)
    }
    var i, r = e(22),
      a = e(2).EventEmitterMicro;
    i = n.prototype = Object.create(a.prototype), i.setFps = function(e) {
      return e !== this._fps && (this._fps = e, !0)
    }, i.getFps = function() {
      return this._fps
    }, i.run = function() {
      return this._rafEmitter.run()
    }, i.cancel = function() {
      return this._rafEmitter.cancel()
    }, i.willRun = function() {
      return this._rafEmitter.willRun()
    }, i.isRunning = function() {
      return this._rafEmitter.isRunning()
    }, i.destroy = function() {
      var e = this._rafEmitter.destroy();
      return a.prototype.destroy.call(this), this._rafEmitter = null, this._boundOnRAFEmitterUpdate = null, this._boundOnRAFEmitterDraw = null, this._boundOnRAFEmitterStop = null, this._rafEmitterEvent = null, e
    }, i._onRAFEmitterUpdate = function(e) {
      if (0 === this._lastThrottledTime && (this._lastThrottledTime = this._rafEmitter.executor.lastFrameTime), this._delta = e.time - this._lastThrottledTime, !this._fps) throw new TypeError("FPS is not defined.");
      return this._currentFps = 1e3 / this._delta, this._currentFps > this._fps ? void this._rafEmitter.run() : (this._rafEmitterEvent = Object.assign({}, e), this._rafEmitterEvent.delta = this._delta, this._rafEmitterEvent.fps = this._currentFps, this._lastThrottledTime = this._rafEmitterEvent.time, this._shouldDraw = !0, this._didEmitFrameData || (this.trigger("start", this._rafEmitterEvent), this._didEmitFrameData = !0), void this.trigger("update", this._rafEmitterEvent))
    }, i._onRAFEmitterDraw = function() {
      this._shouldDraw && (this._shouldDraw = !1, this.trigger("draw", this._rafEmitterEvent))
    }, i._onRAFEmitterStop = function() {
      this._lastThrottledTime = 0, this._didEmitFrameData = !1, this.trigger("stop", this._rafEmitterEvent)
    }, t.exports = n
  }, {
    2: 2,
    22: 22
  }],
  28: [function(e, t, A) {
    "use strict";
    var n = e(25);
    t.exports = n.cancelAnimationFrame("draw")
  }, {
    25: 25
  }],
  29: [function(e, t, A) {
    "use strict";
    var n = e(25);
    t.exports = n.cancelAnimationFrame("external")
  }, {
    25: 25
  }],
  30: [function(e, t, A) {
    "use strict";
    var n = e(25);
    t.exports = n.cancelAnimationFrame("update")
  }, {
    25: 25
  }],
  31: [function(e, t, A) {
    "use strict";
    var n = e(25);
    t.exports = n.requestAnimationFrame("draw")
  }, {
    25: 25
  }],
  32: [function(e, t, A) {
    "use strict";
    var n = e(25);
    t.exports = n.requestAnimationFrame("external")
  }, {
    25: 25
  }],
  33: [function(e, t, A) {
    "use strict";
    var n = e(36).SharedInstance,
      i = e(20).majorVersionNumber,
      r = function() {
        this._currentID = 0
      };
    r.prototype.getNewID = function() {
      return this._currentID++, "raf:" + this._currentID
    }, t.exports = n.share("@marcom/ac-raf-emitter/sharedRAFEmitterIDGeneratorInstance", i, r)
  }, {
    20: 20,
    36: 36
  }],
  34: [function(e, t, A) {
    "use strict";
    var n = e(36).SharedInstance,
      i = e(20).majorVersionNumber,
      r = e(23);
    t.exports = n.share("@marcom/ac-raf-emitter/sharedRAFExecutorInstance", i, r)
  }, {
    20: 20,
    23: 23,
    36: 36
  }],
  35: [function(e, t, A) {
    "use strict";
    var n = e(25);
    t.exports = n.requestAnimationFrame("update")
  }, {
    25: 25
  }],
  36: [function(e, t, A) {
    "use strict";
    t.exports = {
      SharedInstance: e(37)
    }
  }, {
    37: 37
  }],
  37: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(19)),
      r = window,
      a = "AC",
      o = "SharedInstance",
      s = r[a],
      u = function() {
        var e = {};
        return {
          get: function(t, A) {
            var n = null;
            return e[t] && e[t][A] && (n = e[t][A]), n
          },
          set: function(t, A, n) {
            return e[t] || (e[t] = {}), "function" == typeof n ? e[t][A] = new n : e[t][A] = n, e[t][A]
          },
          share: function(e, t, A) {
            var n = this.get(e, t);
            return n || (n = this.set(e, t, A)), n
          },
          remove: function(t, A) {
            var n = (0, i["default"])(A);
            if ("string" === n || "number" === n) {
              if (!e[t] || !e[t][A]) return;
              return void(e[t][A] = null)
            }
            e[t] && (e[t] = null)
          }
        }
      }();
    s || (s = r[a] = {}), s[o] || (s[o] = u), t.exports = s[o]
  }, {
    12: 12,
    19: 19
  }],
  38: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(6)),
      r = n(e(8)),
      a = function() {
        function e() {
          var t = this,
            A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (0, i["default"])(this, e), this.options = A, "loading" === document.readyState ? document.addEventListener("readystatechange", function(e) {
            "interactive" === document.readyState && t._init()
          }) : this._init()
        }
        return (0, r["default"])(e, [{
          key: "_init",
          value: function() {
            return this._images = Array.from(document.querySelectorAll("*[".concat(e.DATA_ATTRIBUTE, "]"))), this.AnimSystem = this._findAnim(), null === this.AnimSystem ? null : void this._addKeyframesToImages()
          }
        }, {
          key: "_defineKeyframeOptions",
          value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              A = t.getAttribute(e.DATA_DOWNLOAD_AREA_KEYFRAME) || "{}";
            return Object.assign({}, {
              start: "t - 200vh",
              end: "b + 100vh",
              event: "AnimLazyImage"
            }, JSON.parse(A))
          }
        }, {
          key: "_addKeyframesToImages",
          value: function() {
            var e = this;
            this._scrollGroup = this.AnimSystem.getGroupForTarget(document.body), this._images.forEach(function(t) {
              e.AnimSystem.getGroupForTarget(t) && (e._scrollGroup = e.AnimSystem.getGroupForTarget(t));
              var A = e._defineKeyframeOptions(t),
                n = e._scrollGroup.addKeyframe(t, A);
              n.controller.once("AnimLazyImage:enter", function() {
                e._imageIsInLoadRange(t)
              })
            })
          }
        }, {
          key: "_cleanUpImageAttributes",
          value: function(t) {
            var A = !1;
            try {
              A = this._scrollGroup.getControllerForTarget(t).getNearestKeyframeForAttribute("AnimLazyImage").isCurrentlyInRange
            } catch (n) {
              A = !1
            }
            A || t.setAttribute(e.DATA_ATTRIBUTE, "")
          }
        }, {
          key: "_downloadingImageAttributes",
          value: function(t) {
            t.removeAttribute(e.DATA_ATTRIBUTE)
          }
        }, {
          key: "_imageIsInLoadRange",
          value: function(e) {
            this._downloadImage(e)
          }
        }, {
          key: "_downloadImage",
          value: function(e) {
            this._downloadingImageAttributes(e)
          }
        }, {
          key: "_findAnim",
          value: function() {
            var e = Array.from(document.querySelectorAll("[data-anim-group],[data-anim-scroll-group],[data-anim-time-group]"));
            return e.map(function(e) {
              return e._animInfo ? e._animInfo.group : null
            }).filter(function(e) {
              return null !== e
            }), e[0] && e[0]._animInfo ? e[0]._animInfo.group.anim : (console.error("AnimLazyImage: AnimSystem not found, please initialize anim before instantiating"), null)
          }
        }]), e
      }();
    a.DATA_DOWNLOAD_AREA_KEYFRAME = "data-download-area-keyframe", a.DATA_ATTRIBUTE = "data-anim-lazy-image", t.exports = a
  }, {
    12: 12,
    6: 6,
    8: 8
  }],
  39: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(6)),
      r = n(e(8)),
      a = n(e(15)),
      o = n(e(10)),
      s = n(e(9)),
      u = n(e(11)),
      l = e(38),
      c = e(83),
      h = e(31),
      d = e(35),
      f = function(e) {
        function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, i["default"])(this, t), (0, a["default"])(this, (0, o["default"])(t).call(this, e))
        }
        return (0, u["default"])(t, e), (0, r["default"])(t, [{
          key: "_init",
          value: function() {
            (0, s["default"])((0, o["default"])(t.prototype), "_init", this).call(this), this._onBreakpointChangeCallback = this._onBreakpointChangeCallback.bind(this), this._addViewportEvents(), this._resetPromises(), this._addMethodsToImageElement()
          }
        }, {
          key: "_addViewportEvents",
          value: function() {
            var e = this.options.breakpoints ? {
              breakpoints: this.options.breakpoints
            } : {};
            this.viewportEmitterMicro = new c(e), this.viewportEmitterMicro.on(c.CHANGE_EVENTS.VIEWPORT, this._onBreakpointChangeCallback), this.viewportEmitterMicro.on(c.CHANGE_EVENTS.RETINA, this._onBreakpointChangeCallback)
          }
        }, {
          key: "_addKeyframesToImages",
          value: function() {
            var e = this;
            this._scrollGroup = this.AnimSystem.getGroupForTarget(document.body), this._images.forEach(function(t) {
              e.AnimSystem.getGroupForTarget(t) && (e._scrollGroup = e.AnimSystem.getGroupForTarget(t));
              var A = e._defineKeyframeOptions(t),
                n = e._scrollGroup.addKeyframe(t, A);
              n.controller.on("AnimLazyImage:enter", function() {
                e._imageIsInLoadRange(t)
              })
            })
          }
        }, {
          key: "_onBreakpointChangeCallback",
          value: function(e) {
            var t = this;
            this._resetPromises(), this._images.forEach(function(e) {
              t._cleanUpImageAttributes(e), "" != e.getAttribute(l.DATA_ATTRIBUTE) && t._imageIsInLoadRange(e)
            })
          }
        }, {
          key: "_resetPromises",
          value: function() {
            this._images.forEach(function(e) {
              e.promises = {}, e.promises.downloadComplete = new Promise(function(t) {
                e.promises.__completePromiseResolver = t
              })
            })
          }
        }, {
          key: "_addMethodsToImageElement",
          value: function() {
            var e = this;
            this._images.forEach(function(t) {
              t.forceLazyLoad = function() {
                e._imageIsInLoadRange(t)
              }
            })
          }
        }, {
          key: "_imageIsInLoadRange",
          value: function(e) {
            this._downloadImage(e).then(function() {
              e.promises.__completePromiseResolver(e), e.dispatchEvent(new Event(t.EVENTS.DOWNLOAD_COMPLETE))
            })
          }
        }, {
          key: "_cleanUpImageAttributes",
          value: function(e) {
            e.removeAttribute(t.DATA_DOWNLOADING_ATTRIBUTE), e.removeAttribute(t.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE)
          }
        }, {
          key: "_downloadingImageAttributes",
          value: function(e) {
            (0, s["default"])((0, o["default"])(t.prototype), "_downloadingImageAttributes", this).call(this, e), e.setAttribute(t.DATA_DOWNLOADING_ATTRIBUTE, "")
          }
        }, {
          key: "_finishedDownloadAttributes",
          value: function(e) {
            e.removeAttribute(t.DATA_DOWNLOADING_ATTRIBUTE), e.setAttribute(t.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE, "")
          }
        }, {
          key: "_downloadImage",
          value: function(e) {
            var A = this;
            return new Promise(function(n, i) {
              return null !== e.getAttribute(t.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE) ? void n() : void(null === e.getAttribute(t.DATA_DOWNLOADING_ATTRIBUTE) && A._waitForBackgroundVisible(e).then(function(e) {
                return A._getBackgroundImageSrc(e)
              }).then(function(e) {
                return A._loadImage(e)
              }).then(function() {
                h(function() {
                  A._finishedDownloadAttributes(e), n()
                }, !0)
              }))
            })
          }
        }, {
          key: "_waitForBackgroundVisible",
          value: function(e) {
            var t = this;
            return new Promise(function(A, n) {
              h(function() {
                t._downloadingImageAttributes(e), A(e)
              }, !0)
            })
          }
        }, {
          key: "_getBackgroundImageSrc",
          value: function(e) {
            return new Promise(function(t, A) {
              d(function() {
                var A = e.currentStyle;
                return A || (A = window.getComputedStyle(e, !1)), 0 === A.backgroundImage.indexOf("url(") ? void t(A.backgroundImage.slice(4, -1).replace(/"/g, "")) : void t(null)
              }, !0)
            })
          }
        }, {
          key: "_loadImage",
          value: function(e) {
            return new Promise(this._loadImagePromiseFunc.bind(this, e))
          }
        }, {
          key: "_loadImagePromiseFunc",
          value: function(e, t, A) {
            function n() {
              this.removeEventListener("load", n), t(this), t = null
            }
            if (!e) return void t(null);
            var i = new Image;
            i.addEventListener("load", n), i.src = e
          }
        }]), t
      }(l);
    f.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE = "data-anim-lazy-image-download-complete", f.DATA_DOWNLOADING_ATTRIBUTE = "data-anim-lazy-image-downloading", f.EVENTS = {}, f.EVENTS.DOWNLOAD_COMPLETE = "video-loading-complete", t.exports = f
  }, {
    10: 10,
    11: 11,
    12: 12,
    15: 15,
    31: 31,
    35: 35,
    38: 38,
    6: 6,
    8: 8,
    83: 83,
    9: 9
  }],
  40: [function(e, t, A) {
    "use strict";
    t.exports = {
      version: "3.2.1",
      major: "3.x",
      majorMinor: "3.2"
    }
  }, {}],
  41: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(6)),
      r = n(e(8)),
      a = n(e(15)),
      o = n(e(10)),
      s = n(e(5)),
      u = n(e(11)),
      l = e(2).EventEmitterMicro,
      c = e(47),
      h = e(42),
      d = e(43),
      f = e(45),
      m = e(57),
      p = e(58),
      g = e(40),
      v = {
        update: e(35),
        cancelUpdate: e(30),
        external: e(32),
        draw: e(31)
      },
      y = null,
      E = function(e) {
        function t() {
          var e;
          if ((0, i["default"])(this, t), e = (0, a["default"])(this, (0, o["default"])(t).call(this)), y) throw "You cannot create multiple AnimSystems. You probably want to create multiple groups instead. You can have unlimited groups on a page";
          return y = (0, s["default"])(e), e.groups = [], e.scrollSystems = [], e.timeSystems = [], e._forceUpdateRAFId = -1, e._initialized = !1, e.model = c, e.version = g.version, e._resolveReady = function() {}, e.ready = new Promise(function(t) {
            return e._resolveReady = t
          }), e.onScroll = e.onScroll.bind((0, s["default"])(e)), e.onResizedDebounced = e.onResizedDebounced.bind((0, s["default"])(e)), e.onResizeImmediate = e.onResizeImmediate.bind((0, s["default"])(e)), e
        }
        return (0, u["default"])(t, e), (0, r["default"])(t, [{
          key: "initialize",
          value: function() {
            return this._initialized ? this.ready : (this._initialized = !0, this.timeSystems = [], this.scrollSystems = [], this.groups = [], this.setupEvents(), this.initializeResizeFilter(), this.initializeModel(), this.createDOMGroups(), this.createDOMKeyframes(), this._resolveReady(), this.ready)
          }
        }, {
          key: "remove",
          value: function() {
            var e = this;
            return Promise.all(this.groups.map(function(e) {
              return e.remove()
            })).then(function() {
              e.groups = null, e.scrollSystems = null, e.timeSystems = null, window.clearTimeout(c.RESIZE_TIMEOUT), window.removeEventListener("scroll", e.onScroll), window.removeEventListener("resize", e.onResizeImmediate), e._events = {}, e._initialized = !1, e.ready = new Promise(function(t) {
                return e._resolveReady = t
              })
            })
          }
        }, {
          key: "destroy",
          value: function() {
            return this.remove()
          }
        }, {
          key: "createTimeGroup",
          value: function(e) {
            var t = new p(e, this);
            return this.groups.push(t), this.timeSystems.push(t), this.trigger(c.EVENTS.ON_GROUP_CREATED, t), t
          }
        }, {
          key: "createScrollGroup",
          value: function(e) {
            if (!e) throw "AnimSystem scroll based groups must supply an HTMLElement";
            var t = new m(e, this);
            return this.groups.push(t), this.scrollSystems.push(t), this.trigger(c.EVENTS.ON_GROUP_CREATED, t), t
          }
        }, {
          key: "removeGroup",
          value: function(e) {
            var t = this;
            return Promise.all(e.keyframeControllers.map(function(t) {
              return e.removeKeyframeController(t)
            })).then(function() {
              var A = t.groups.indexOf(e);
              A !== -1 && t.groups.splice(A, 1), A = t.scrollSystems.indexOf(e), A !== -1 && t.scrollSystems.splice(A, 1), A = t.timeSystems.indexOf(e), A !== -1 && t.timeSystems.splice(A, 1), e.destroy()
            })
          }
        }, {
          key: "createDOMGroups",
          value: function() {
            var e = this;
            document.body.setAttribute("data-anim-scroll-group", "body"), document.querySelectorAll("[data-anim-scroll-group]").forEach(function(t) {
              return e.createScrollGroup(t)
            }), document.querySelectorAll("[data-anim-time-group]").forEach(function(t) {
              return e.createTimeGroup(t)
            }), this.trigger(c.EVENTS.ON_DOM_GROUPS_CREATED, this.groups)
          }
        }, {
          key: "createDOMKeyframes",
          value: function() {
            var e = this,
              t = [];
            [h.DATA_ATTRIBUTE, d.DATA_ATTRIBUTE, f.DATA_ATTRIBUTE].forEach(function(e) {
              for (var A = 0; A < 12; A++) t.push(e + (0 === A ? "" : "-" + (A - 1)))
            });
            for (var A = 0; A < t.length; A++)
              for (var n = t[A], i = document.querySelectorAll("[" + n + "]"), r = 0; r < i.length; r++) {
                var a = i[r],
                  o = JSON.parse(a.getAttribute(n));
                this.addKeyframe(a, o)
              }
            v.update(function() {
              e.groups.forEach(function(e) {
                return e.onKeyframesDirty({
                  silent: !0
                })
              }), e.groups.forEach(function(e) {
                return e.trigger(c.EVENTS.ON_DOM_KEYFRAMES_CREATED, e)
              }), e.trigger(c.EVENTS.ON_DOM_KEYFRAMES_CREATED, e), e.groups.forEach(function(e) {
                e.forceUpdate({
                  waitForNextUpdate: !1,
                  silent: !0
                }), e.reconcile()
              }), e.onScroll()
            }, !0)
          }
        }, {
          key: "initializeResizeFilter",
          value: function() {
            if (!c.cssDimensionsTracker) {
              var e = document.querySelector(".cssDimensionsTracker") || document.createElement("div");
              e.setAttribute("cssDimensionsTracker", "true"), e.style.position = "fixed", e.style.top = "0", e.style.width = "100%", e.style.height = "100vh", e.style.pointerEvents = "none", e.style.visibility = "hidden", e.style.zIndex = "-1", document.documentElement.appendChild(e), c.cssDimensionsTracker = e
            }
          }
        }, {
          key: "initializeModel",
          value: function() {
            c.pageMetrics.windowHeight = c.cssDimensionsTracker.clientHeight, c.pageMetrics.windowWidth = c.cssDimensionsTracker.clientWidth, c.pageMetrics.scrollY = window.scrollY || window.pageYOffset, c.pageMetrics.scrollX = window.scrollX || window.pageXOffset, c.pageMetrics.breakpoint = c.getBreakpoint();
            var e = document.documentElement.getBoundingClientRect();
            c.pageMetrics.documentOffsetX = e.left + c.pageMetrics.scrollX, c.pageMetrics.documentOffsetY = e.top + c.pageMetrics.scrollY
          }
        }, {
          key: "setupEvents",
          value: function() {
            window.removeEventListener("scroll", this.onScroll), window.addEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onResizeImmediate), window.addEventListener("resize", this.onResizeImmediate)
          }
        }, {
          key: "onScroll",
          value: function() {
            c.pageMetrics.scrollY = window.scrollY || window.pageYOffset, c.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
            for (var e = 0, t = this.scrollSystems.length; e < t; e++) this.scrollSystems[e]._onScroll();
            this.trigger(c.PageEvents.ON_SCROLL, c.pageMetrics)
          }
        }, {
          key: "onResizeImmediate",
          value: function() {
            var e = c.cssDimensionsTracker.clientWidth,
              t = c.cssDimensionsTracker.clientHeight;
            if (e !== c.pageMetrics.windowWidth || t !== c.pageMetrics.windowHeight) {
              c.pageMetrics.windowWidth = e, c.pageMetrics.windowHeight = t, c.pageMetrics.scrollY = window.scrollY || window.pageYOffset, c.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
              var A = document.documentElement.getBoundingClientRect();
              c.pageMetrics.documentOffsetX = A.left + c.pageMetrics.scrollX, c.pageMetrics.documentOffsetY = A.top + c.pageMetrics.scrollY, window.clearTimeout(c.RESIZE_TIMEOUT), c.RESIZE_TIMEOUT = window.setTimeout(this.onResizedDebounced, 250), this.trigger(c.PageEvents.ON_RESIZE_IMMEDIATE, c.pageMetrics)
            }
          }
        }, {
          key: "onResizedDebounced",
          value: function() {
            var e = this;
            v.update(function() {
              var t = c.pageMetrics.breakpoint,
                A = c.getBreakpoint(),
                n = A !== t;
              if (n) {
                c.pageMetrics.previousBreakpoint = t, c.pageMetrics.breakpoint = A;
                for (var i = 0, r = e.groups.length; i < r; i++) e.groups[i]._onBreakpointChange();
                e.trigger(c.PageEvents.ON_BREAKPOINT_CHANGE, c.pageMetrics)
              }
              for (var a = 0, o = e.groups.length; a < o; a++) e.groups[a].forceUpdate({
                waitForNextUpdate: !1
              });
              e.trigger(c.PageEvents.ON_RESIZE_DEBOUNCED, c.pageMetrics)
            }, !0)
          }
        }, {
          key: "forceUpdate",
          value: function() {
            var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              A = t.waitForNextUpdate,
              n = void 0 === A || A,
              i = t.silent,
              r = void 0 !== i && i;
            this._forceUpdateRAFId !== -1 && v.cancelUpdate(this._forceUpdateRAFId);
            var a = function() {
              for (var t = 0, A = e.groups.length; t < A; t++) {
                var n = e.groups[t];
                n.forceUpdate({
                  waitForNextUpdate: !1,
                  silent: r
                })
              }
              return -1
            };
            this._forceUpdateRAFId = n ? v.update(a, !0) : a()
          }
        }, {
          key: "addKeyframe",
          value: function(e, t) {
            var A = this.getGroupForTarget(e);
            return A = A || this.getGroupForTarget(document.body), A.addKeyframe(e, t)
          }
        }, {
          key: "getGroupForTarget",
          value: function(e) {
            if (e._animInfo && e._animInfo.group) return e._animInfo.group;
            for (var t = e; t;) {
              if (t._animInfo && t._animInfo.isGroup) return t._animInfo.group;
              t = t.parentElement
            }
          }
        }, {
          key: "getControllerForTarget",
          value: function(e) {
            return e._animInfo && e._animInfo.controller ? e._animInfo.controller : null
          }
        }]), t
      }(l);
    t.exports = window.AC.SharedInstance.share("AnimSystem", g.major, E)
  }, {
    10: 10,
    11: 11,
    12: 12,
    15: 15,
    2: 2,
    30: 30,
    31: 31,
    32: 32,
    35: 35,
    40: 40,
    42: 42,
    43: 43,
    45: 45,
    47: 47,
    5: 5,
    57: 57,
    58: 58,
    6: 6,
    8: 8
  }],
  42: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(6)),
      r = n(e(8)),
      a = e(47),
      o = e(78),
      s = e(48),
      u = e(54),
      l = e(51),
      c = e(59),
      h = e(60),
      d = e(53),
      f = function() {
        function e(t, A) {
          (0, i["default"])(this, e), this.controller = t, this.anchors = [], this.jsonProps = A, this.ease = t.group.defaultEase, this.easeFunctionString = a.KeyframeDefaults.easeFunctionString, this.easeFunction = s[this.easeFunctionString], this.start = 0, this.end = 0, this.localT = 0, this.curvedT = 0, this.id = 0, this.event = "", this.needsEventDispatch = !1, this.snapAtCreation = !1, this.isEnabled = !1, this.animValues = {}, this.breakpointMask = "SMLX", this.disabledWhen = [], this.keyframeType = a.KeyframeTypes.Interpolation, this.hold = !1, this.preserveState = !1, this.markedForRemoval = !1, this.hidden = !1, this.uuid = d()
        }
        return (0, r["default"])(e, [{
          key: "destroy",
          value: function() {
            this.controller = null, this.disabledWhen = null, this.anchors = null, this.jsonProps = null, this.easeFunction = null, this.animValues = null
          }
        }, {
          key: "remove",
          value: function() {
            return this.controller.removeKeyframe(this)
          }
        }, {
          key: "parseOptions",
          value: function(e) {
            var t = this;
            this.jsonProps = e, e.relativeTo && console.error("KeyframeError: relativeTo has been removed. Use 'anchors' property instead. Found 'relativeTo':\"".concat(e.relativeTo, '"')), "" !== e.anchors && e.anchors ? (this.anchors = [], e.anchors = Array.isArray(e.anchors) ? e.anchors : [e.anchors], e.anchors.forEach(function(A, n) {
              var i = h(A, t.controller.group.element);
              if (!i) {
                var r = "";
                return "string" == typeof A && (r = " Provided value was a string, so a failed attempt was made to find anchor with the provided querystring in group.element, or in the document."), void console.warn("Keyframe on", t.controller.element, " failed to find anchor at index ".concat(n, " in array"), e.anchors, ". Anchors must be JS Object references, Elements references, or valid query selector strings. ".concat(r))
              }
              t.anchors.push(i), t.controller.group.metrics.add(i)
            })) : (this.anchors = [], e.anchors = []), e.ease ? this.ease = parseFloat(e.ease) : e.ease = this.ease, e.hasOwnProperty("snapAtCreation") ? this.snapAtCreation = e.snapAtCreation : e.snapAtCreation = this.snapAtCreation, e.easeFunction ? this.easeFunctionString = e.easeFunction : e.easeFunction = this.easeFunctionString, e.breakpointMask ? this.breakpointMask = e.breakpointMask : e.breakpointMask = this.breakpointMask, e.disabledWhen ? this.disabledWhen = Array.isArray(e.disabledWhen) ? e.disabledWhen : [e.disabledWhen] : e.disabledWhen = this.disabledWhen, e.hasOwnProperty("hold") ? this.hold = e.hold : e.hold = this.hold, e.hasOwnProperty("preserveState") ? this.preserveState = e.preserveState : e.preserveState = this.preserveState, this.easeFunction = s[e.easeFunction], s.hasOwnProperty(e.easeFunction) || (e.easeFunction.includes("bezier") ? this.easeFunction = u.fromCSSString(e.easeFunction) : e.easeFunction.includes("spring") ? this.easeFunction = l.fromCSSString(e.easeFunction) : console.error("Keyframe parseOptions cannot find 'easeFunction' named '" + e.easeFunction + "'"));
            for (var A in e)
              if (a.KeyframeJSONReservedWords.indexOf(A) === -1) {
                var n = e[A];
                if (Array.isArray(n)) {
                  if (this.animValues[A] = this.controller.group.expressionParser.parseArray(this, n), void 0 === this.controller.tweenProps[A] || !this.controller._ownerIsElement) {
                    var i = 0;
                    this.controller._ownerIsElement || (i = this.controller.element[A] || 0);
                    var r = new a.TargetValue(i, a.KeyframeDefaults.epsilon, this.snapAtCreation);
                    this.controller.tweenProps[A] = r
                  }
                  var o = this.controller.tweenProps[A];
                  if (e.epsilon) o.epsilon = e.epsilon;
                  else {
                    var c = Math.abs(this.animValues[A][0] - this.animValues[A][1]),
                      d = Math.min(.001 * c, o.epsilon, a.KeyframeDefaults.epsilon);
                    o.epsilon = Math.max(d, 1e-4)
                  }
                }
              } this.keyframeType = this.hold ? a.KeyframeTypes.InterpolationForward : a.KeyframeTypes.Interpolation, e.event && (this.event = e.event)
          }
        }, {
          key: "overwriteProps",
          value: function(e) {
            this.animValues = {};
            var t = Object.assign({}, this.jsonProps, e);
            this.controller.updateKeyframe(this, t)
          }
        }, {
          key: "updateLocalProgress",
          value: function(e) {
            if (this.start === this.end || e < this.start || e > this.end) return this.localT = e < this.start ? 0 : e > this.end ? 1 : 0, void(this.curvedT = this.easeFunction(this.localT));
            var t = (e - this.start) / (this.end - this.start),
              A = this.hold ? this.localT : 0;
            this.localT = o.clamp(t, A, 1), this.curvedT = this.easeFunction(this.localT)
          }
        }, {
          key: "reconcile",
          value: function(e) {
            var t = this.animValues[e],
              A = this.controller.tweenProps[e];
            A.initialValue = t[0], A.target = t[0] + this.curvedT * (t[1] - t[0]), A.current !== A.target && (A.current = A.target, this.needsEventDispatch || (this.needsEventDispatch = !0, this.controller.keyframesRequiringDispatch.push(this)))
          }
        }, {
          key: "reset",
          value: function(e) {
            this.localT = e || 0;
            var t = this.ease;
            this.ease = 1;
            for (var A in this.animValues) this.reconcile(A);
            this.ease = t
          }
        }, {
          key: "onDOMRead",
          value: function(e) {
            var t = this.animValues[e],
              A = this.controller.tweenProps[e];
            A.target = t[0] + this.curvedT * (t[1] - t[0]);
            var n = A.current;
            A.current += (A.target - A.current) * this.ease;
            var i = A.current - A.target;
            i < A.epsilon && i > -A.epsilon && (A.current = A.target, i = 0), "" === this.event || this.needsEventDispatch || (i > A.epsilon || i < -A.epsilon || 0 === i && n !== A.current) && (this.needsEventDispatch = !0, this.controller.keyframesRequiringDispatch.push(this))
          }
        }, {
          key: "isInRange",
          value: function(e) {
            return e >= this.start && e <= this.end
          }
        }, {
          key: "setEnabled",
          value: function(e) {
            e = e || c(Array.from(document.documentElement.classList));
            var t = this.breakpointMask.indexOf(a.pageMetrics.breakpoint) !== -1,
              A = !1;
            return this.disabledWhen.length > 0 && (A = this.disabledWhen.some(function(t) {
              return "undefined" != typeof e[t]
            })), this.isEnabled = t && !A, this.isEnabled
          }
        }, {
          key: "evaluateConstraints",
          value: function() {
            this.start = this.controller.group.expressionParser.parseTimeValue(this, this.jsonProps.start), this.end = this.controller.group.expressionParser.parseTimeValue(this, this.jsonProps.end), this.evaluateInterpolationConstraints()
          }
        }, {
          key: "evaluateInterpolationConstraints",
          value: function() {
            for (var e in this.animValues) {
              var t = this.jsonProps[e];
              this.animValues[e] = this.controller.group.expressionParser.parseArray(this, t)
            }
          }
        }]), e
      }();
    f.DATA_ATTRIBUTE = "data-anim-tween", t.exports = f
  }, {
    12: 12,
    47: 47,
    48: 48,
    51: 51,
    53: 53,
    54: 54,
    59: 59,
    6: 6,
    60: 60,
    78: 78,
    8: 8
  }],
  43: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(19)),
      r = n(e(6)),
      a = n(e(8)),
      o = n(e(15)),
      s = n(e(10)),
      u = n(e(11)),
      l = e(42),
      c = e(47),
      h = function(e) {
        function t(e, A) {
          var n;
          return (0, r["default"])(this, t), n = (0, o["default"])(this, (0, s["default"])(t).call(this, e, A)), n.keyframeType = c.KeyframeTypes.CSSClass, n._triggerType = t.TRIGGER_TYPE_CSS_CLASS, n.cssClass = "", n.friendlyName = "", n.style = {
            on: null,
            off: null
          }, n.toggle = !1, n.isApplied = !1, n
        }
        return (0, u["default"])(t, e), (0, a["default"])(t, [{
          key: "parseOptions",
          value: function(e) {
            if (!this.controller._ownerIsElement) throw new TypeError("CSS Keyframes cannot be applied to JS Objects");
            if (e.x = void 0, e.y = void 0, e.scale = void 0, e.scaleX = void 0, e.scaleY = void 0, e.rotation = void 0, e.opacity = void 0, e.hold = void 0, void 0 !== e.toggle && (this.toggle = e.toggle), void 0 !== e.cssClass) this._triggerType = t.TRIGGER_TYPE_CSS_CLASS, this.cssClass = e.cssClass, this.friendlyName = "." + this.cssClass, void 0 === this.controller.tweenProps.targetClasses && (this.controller.tweenProps.targetClasses = {
              add: [],
              remove: []
            });
            else {
              if (void 0 === e.style || !this.isValidStyleProperty(e.style)) throw new TypeError("KeyframeCSSClass no 'cssClass` property found. If using `style` property its also missing or invalid");
              if (this._triggerType = t.TRIGGER_TYPE_STYLE_PROPERTY, this.style = e.style, this.friendlyName = "style", this.toggle = void 0 !== this.style.off || this.toggle, this.toggle && void 0 === this.style.off) {
                this.style.off = {};
                for (var A in this.style.on) this.style.off[A] = ""
              }
              void 0 === this.controller.tweenProps.targetStyles && (this.controller.tweenProps.targetStyles = {})
            }
            if (void 0 === e.end && (e.end = e.start), e.toggle = this.toggle, this._triggerType === t.TRIGGER_TYPE_CSS_CLASS) this.isApplied = this.controller.element.classList.contains(this.cssClass);
            else {
              var n = getComputedStyle(this.controller.element);
              this.isApplied = !0;
              for (var i in this.style.on)
                if (n[i] !== this.style.on[i]) {
                  this.isApplied = !1;
                  break
                }
            }
            l.prototype.parseOptions.call(this, e), this.animValues[this.friendlyName] = [0, 0], void 0 === this.controller.tweenProps[this.friendlyName] && (this.controller.tweenProps[this.friendlyName] = new c.TargetValue(0, 1, (!1))), this.keyframeType = c.KeyframeTypes.CSSClass
          }
        }, {
          key: "updateLocalProgress",
          value: function(e) {
            this.isApplied && !this.toggle || (this.start !== this.end ? !this.isApplied && e >= this.start && e <= this.end ? this._apply() : this.isApplied && this.toggle && (e < this.start || e > this.end) && this._unapply() : !this.isApplied && e >= this.start ? this._apply() : this.isApplied && this.toggle && e < this.start && this._unapply())
          }
        }, {
          key: "_apply",
          value: function() {
            if (this._triggerType === t.TRIGGER_TYPE_CSS_CLASS) this.controller.tweenProps.targetClasses.add.push(this.cssClass), this.controller.needsClassUpdate = !0;
            else {
              for (var e in this.style.on) this.controller.tweenProps.targetStyles[e] = this.style.on[e];
              this.controller.needsStyleUpdate = !0
            }
            this.isApplied = !0
          }
        }, {
          key: "_unapply",
          value: function() {
            if (this._triggerType === t.TRIGGER_TYPE_CSS_CLASS) this.controller.tweenProps.targetClasses.remove.push(this.cssClass), this.controller.needsClassUpdate = !0;
            else {
              for (var e in this.style.off) this.controller.tweenProps.targetStyles[e] = this.style.off[e];
              this.controller.needsStyleUpdate = !0
            }
            this.isApplied = !1
          }
        }, {
          key: "isValidStyleProperty",
          value: function(e) {
            if (!e.hasOwnProperty("on")) return !1;
            if ("object" !== (0, i["default"])(e.on)) throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:hidden, otherProperty: value}}");
            if (this.toggle && e.hasOwnProperty("off") && "object" !== (0, i["default"])(e.off)) throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:hidden, otherProperty: value}}");
            return !0
          }
        }, {
          key: "reconcile",
          value: function(e, t) {}
        }, {
          key: "onDOMRead",
          value: function(e, t) {}
        }, {
          key: "evaluateInterpolationConstraints",
          value: function() {}
        }]), t
      }(l);
    h.TRIGGER_TYPE_CSS_CLASS = 0, h.TRIGGER_TYPE_STYLE_PROPERTY = 1, h.DATA_ATTRIBUTE = "data-anim-classname", t.exports = h
  }, {
    10: 10,
    11: 11,
    12: 12,
    15: 15,
    19: 19,
    42: 42,
    47: 47,
    6: 6,
    8: 8
  }],
  44: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(6)),
      r = n(e(8)),
      a = n(e(15)),
      o = n(e(5)),
      s = n(e(10)),
      u = n(e(9)),
      l = n(e(11)),
      c = e(47),
      h = (e(42), e(43)),
      d = e(50),
      f = e(59),
      m = e(53),
      p = e(2).EventEmitterMicro,
      g = e(65),
      v = {
        update: e(35),
        external: e(32),
        draw: e(31)
      },
      y = Math.PI / 180,
      E = ["x", "y", "z", "scale", "scaleX", "scaleY", "rotation", "rotationX", "rotationY", "rotationZ"],
      _ = {
        create: e(85),
        rotateX: e(87),
        rotateY: e(88),
        rotateZ: e(89),
        scale: e(90)
      },
      I = function(e) {
        function t(e, A) {
          var n;
          return (0, i["default"])(this, t), n = (0, a["default"])(this, (0, s["default"])(t).call(this)), n._events.draw = [], n.uuid = m(), n.group = e, n.element = A, n._ownerIsElement = n.element instanceof Element, n._ownerIsElement ? n.friendlyName = n.element.tagName + "." + Array.from(n.element.classList).join(".") : n.friendlyName = n.element.friendlyName || n.uuid, n.element._animInfo = n.element._animInfo || new c.AnimInfo(e, (0, o["default"])(n)), n.element._animInfo.controller = (0, o["default"])(n), n.element._animInfo.group = n.group, n.element._animInfo.controllers.push((0, o["default"])(n)), n.tweenProps = n.element._animInfo.tweenProps, n.eventObject = new c.EventObject((0, o["default"])(n)), n.needsStyleUpdate = !1, n.needsClassUpdate = !1, n.elementMetrics = n.group.metrics.add(n.element), n.attributes = [], n.keyframes = {}, n._allKeyframes = [], n._activeKeyframes = [], n.keyframesRequiringDispatch = [], n.updateCachedValuesFromElement(), n.boundsMin = 0, n.boundsMax = 0, n.mat2d = new Float32Array(6), n.mat4 = _.create(), n.needsWrite = !0, n.onDOMWriteImp = n._ownerIsElement ? n.onDOMWriteForElement : n.onDOMWriteForObject, n
        }
        return (0, l["default"])(t, e), (0, r["default"])(t, [{
          key: "destroy",
          value: function() {
            if (this.element._animInfo) {
              this.element._animInfo.controller === this && (this.element._animInfo.controller = null);
              var e = this.element._animInfo.controllers.indexOf(this);
              e !== -1 && this.element._animInfo.controllers.splice(e, 1), 0 === this.element._animInfo.controllers.length ? this.element._animInfo = null : (this.element._animInfo.controller = this.element._animInfo.controllers[this.element._animInfo.controllers.length - 1], this.element._animInfo.group = this.element._animInfo.controller.group)
            }
            this.eventObject.controller = null, this.eventObject.element = null, this.eventObject.keyframe = null, this.eventObject.tweenProps = null, this.eventObject = null, this.elementMetrics = null, this.group = null, this.keyframesRequiringDispatch = null;
            for (var A = 0; A < this._allKeyframes.length; A++) this._allKeyframes[A].destroy();
            this._allKeyframes = null, this._activeKeyframes = null, this.attributes = null, this.keyframes = null, this.element = null, this.tweenProps = null, (0, u["default"])((0, s["default"])(t.prototype), "destroy", this).call(this)
          }
        }, {
          key: "remove",
          value: function() {
            return this.group.removeKeyframeController(this)
          }
        }, {
          key: "updateCachedValuesFromElement",
          value: function() {
            var e = this;
            if (this._ownerIsElement) {
              var t = getComputedStyle(this.element),
                A = g(this.element, !0),
                n = c.KeyframeDefaults.epsilon,
                i = !1;
              ["x", "y", "z"].forEach(function(t, r) {
                e.tweenProps[t] = new c.TargetValue(A.translation[r], n, i)
              }), this.tweenProps.rotation = new c.TargetValue(A.eulerRotation[2], n, i), ["rotationX", "rotationY", "rotationZ"].forEach(function(t, r) {
                e.tweenProps[t] = new c.TargetValue(A.eulerRotation[r], n, i)
              }), this.tweenProps.scaleZ = new c.TargetValue(A.scale[0], n, i), ["scaleX", "scaleY", "scale"].forEach(function(t, r) {
                e.tweenProps[t] = new c.TargetValue(A.scale[r], n, i)
              }), this.tweenProps.opacity = new c.TargetValue(parseFloat(t.opacity), n, i)
            }
          }
        }, {
          key: "addKeyframe",
          value: function(e) {
            var t = d(e);
            if (!t) throw new Error("AnimSystem Cannot create keyframe for from options `" + e + "`");
            var A = new t(this, e);
            return A.parseOptions(e), A.id = this._allKeyframes.length, this._allKeyframes.push(A), A
          }
        }, {
          key: "needsUpdate",
          value: function() {
            for (var e = 0, t = this.attributes.length; e < t; e++) {
              var A = this.attributes[e],
                n = this.tweenProps[A],
                i = Math.abs(n.current - n.target);
              if (i > n.epsilon) return !0
            }
            return !1
          }
        }, {
          key: "updateLocalProgress",
          value: function(e) {
            for (var t = 0, A = this.attributes.length; t < A; t++) {
              var n = this.attributes[t],
                i = this.keyframes[this.attributes[t]];
              if (1 !== i.length) {
                var r = this.getNearestKeyframeForAttribute(n, e);
                r && r.updateLocalProgress(e)
              } else i[0].updateLocalProgress(e)
            }
          }
        }, {
          key: "reconcile",
          value: function() {
            for (var e = 0, t = this.attributes.length; e < t; e++) {
              var A = this.attributes[e],
                n = this.getNearestKeyframeForAttribute(A, this.group.position.local);
              n.updateLocalProgress(this.group.position.local), n.snapAtCreation && n.reconcile(A)
            }
          }
        }, {
          key: "determineActiveKeyframes",
          value: function(e) {
            var t = this;
            e = e || f(Array.from(document.documentElement.classList));
            var A = this._activeKeyframes,
              n = this.attributes,
              i = {};
            this._activeKeyframes = [], this.attributes = [], this.keyframes = {};
            for (var r = 0; r < this._allKeyframes.length; r++) {
              var a = this._allKeyframes[r];
              if (a.markedForRemoval || a.hidden || !a.setEnabled(e))
                for (var o in a.animValues) this.tweenProps[o].isActive = a.preserveState, a.preserveState && (i[o] = !0);
              else {
                this._activeKeyframes.push(a);
                for (var s in a.animValues) this.keyframes[s] = this.keyframes[s] || [], this.keyframes[s].push(a), this.attributes.indexOf(s) === -1 && (i[s] = !0, this.attributes.push(s), this.tweenProps[s].isActive = !0)
              }
            }
            this.attributes.forEach(function(e) {
              return t.tweenProps[e].isActive = !0
            });
            var u = A.filter(function(e) {
              return t._activeKeyframes.indexOf(e) === -1
            });
            if (0 !== u.length) {
              var l = n.filter(function(e) {
                return t.attributes.indexOf(e) === -1 && !i.hasOwnProperty(e)
              });
              if (0 !== l.length)
                if (this.needsWrite = !0, this._ownerIsElement) v.external(function() {
                  var e = Object.keys(i).filter(function(e) {
                    return E.includes(e)
                  });
                  0 === e.length && t.element.style.removeProperty("transform");
                  for (var A = 0, n = l.length; A < n; ++A) {
                    var r = l[A],
                      a = t.tweenProps[r];
                    a.current = a.target, a.isActive = !1, "opacity" === r && t.element.style.removeProperty("opacity")
                  }
                  for (var o = 0, s = u.length; o < s; ++o) {
                    var c = u[o];
                    c instanceof h && !c.preserveState && c._unapply()
                  }
                }, !0);
                else
                  for (var c = 0, d = l.length; c < d; ++c) {
                    var m = this.tweenProps[l[c]];
                    m.current = m.target, m.isActive = !1
                  }
            }
          }
        }, {
          key: "onDOMRead",
          value: function(e) {
            for (var t = 0, A = this.attributes.length; t < A; t++) {
              var n = this.attributes[t];
              this.tweenProps[n].previousValue = this.tweenProps[n].current;
              var i = this.getNearestKeyframeForAttribute(n, e);
              i && i.onDOMRead(n), this.tweenProps[n].previousValue !== this.tweenProps[n].current && (this.needsWrite = !0)
            }
          }
        }, {
          key: "onDOMWrite",
          value: function() {
            (this.needsWrite || this.needsClassUpdate || this.needsStyleUpdate) && (this.needsWrite = !1, this.onDOMWriteImp(), this.handleEventDispatch())
          }
        }, {
          key: "onDOMWriteForObject",
          value: function() {
            for (var e = 0, t = this.attributes.length; e < t; e++) {
              var A = this.attributes[e];
              this.element[A] = this.tweenProps[A].current
            }
          }
        }, {
          key: "onDOMWriteForElement",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.element.style,
              t = this.tweenProps;
            if (t.z.isActive || t.rotationX.isActive || t.rotationY.isActive) {
              var A = this.mat4;
              if (A[0] = 1, A[1] = 0, A[2] = 0, A[3] = 0, A[4] = 0, A[5] = 1, A[6] = 0, A[7] = 0, A[8] = 0, A[9] = 0, A[10] = 1, A[11] = 0, A[12] = 0, A[13] = 0, A[14] = 0, A[15] = 1, t.x.isActive || t.y.isActive || t.z.isActive) {
                var n = t.x.current,
                  i = t.y.current,
                  r = t.z.current;
                A[12] = A[0] * n + A[4] * i + A[8] * r + A[12], A[13] = A[1] * n + A[5] * i + A[9] * r + A[13], A[14] = A[2] * n + A[6] * i + A[10] * r + A[14], A[15] = A[3] * n + A[7] * i + A[11] * r + A[15]
              }
              if (t.rotation.isActive || t.rotationZ.isActive) {
                var a = (t.rotation.current || t.rotationZ.current) * y;
                _.rotateZ(A, A, a)
              }
              if (t.rotationX.isActive) {
                var o = t.rotationX.current * y;
                _.rotateX(A, A, o)
              }
              if (t.rotationY.isActive) {
                var s = t.rotationY.current * y;
                _.rotateY(A, A, s)
              }(t.scale.isActive || t.scaleX.isActive || t.scaleY.isActive) && _.scale(A, A, [t.scale.current, t.scale.current, 1]), e.transform = "matrix3d(" + A[0] + "," + A[1] + "," + A[2] + "," + A[3] + "," + A[4] + "," + A[5] + "," + A[6] + "," + A[7] + "," + A[8] + "," + A[9] + "," + A[10] + "," + A[11] + "," + A[12] + "," + A[13] + "," + A[14] + "," + A[15] + ")"
            } else if (t.x.isActive || t.y.isActive || t.rotation.isActive || t.rotationZ.isActive || t.scale.isActive || t.scaleX.isActive || t.scaleY.isActive) {
              var u = this.mat2d;
              if (u[0] = 1, u[1] = 0, u[2] = 0, u[3] = 1, u[4] = 0, u[5] = 0, t.x.isActive || t.y.isActive) {
                var l = t.x.current,
                  c = t.y.current,
                  h = u[0],
                  d = u[1],
                  f = u[2],
                  m = u[3],
                  p = u[4],
                  g = u[5];
                u[0] = h, u[1] = d, u[2] = f, u[3] = m, u[4] = h * l + f * c + p, u[5] = d * l + m * c + g
              }
              if (t.rotation.isActive || t.rotationZ.isActive) {
                var v = (t.rotation.current || t.rotationZ.current) * y,
                  E = u[0],
                  I = u[1],
                  b = u[2],
                  C = u[3],
                  T = u[4],
                  w = u[5],
                  S = Math.sin(v),
                  k = Math.cos(v);
                u[0] = E * k + b * S, u[1] = I * k + C * S, u[2] = E * -S + b * k, u[3] = I * -S + C * k, u[4] = T, u[5] = w
              }
              t.scale.isActive ? (u[0] = u[0] * t.scale.current, u[1] = u[1] * t.scale.current, u[2] = u[2] * t.scale.current, u[3] = u[3] * t.scale.current, u[4] = u[4], u[5] = u[5]) : (t.scaleX.isActive || t.scaleY.isActive) && (u[0] = u[0] * t.scaleX.current, u[1] = u[1] * t.scaleX.current, u[2] = u[2] * t.scaleY.current, u[3] = u[3] * t.scaleY.current, u[4] = u[4], u[5] = u[5]), e.transform = "matrix(" + u[0] + ", " + u[1] + ", " + u[2] + ", " + u[3] + ", " + u[4] + ", " + u[5] + ")"
            }
            if (t.opacity.isActive && (e.opacity = t.opacity.current), this.needsStyleUpdate) {
              for (var M in this.tweenProps.targetStyles) null !== this.tweenProps.targetStyles[M] && (this.element.style[M] = this.tweenProps.targetStyles[M]), this.tweenProps.targetStyles[M] = null;
              this.needsStyleUpdate = !1
            }
            this.needsClassUpdate && (this.tweenProps.targetClasses.add.length > 0 && this.element.classList.add.apply(this.element.classList, this.tweenProps.targetClasses.add), this.tweenProps.targetClasses.remove.length > 0 && this.element.classList.remove.apply(this.element.classList, this.tweenProps.targetClasses.remove), this.tweenProps.targetClasses.add.length = 0, this.tweenProps.targetClasses.remove.length = 0, this.needsClassUpdate = !1)
          }
        }, {
          key: "handleEventDispatch",
          value: function() {
            if (0 !== this.keyframesRequiringDispatch.length) {
              for (var e = 0, t = this.keyframesRequiringDispatch.length; e < t; e++) {
                var A = this.keyframesRequiringDispatch[e];
                A.needsEventDispatch = !1, this.eventObject.keyframe = A, this.eventObject.pageMetrics = c.pageMetrics, this.eventObject.event = A.event, this.trigger(A.event, this.eventObject)
              }
              this.keyframesRequiringDispatch.length = 0
            }
            if (0 !== this._events.draw.length) {
              this.eventObject.keyframe = null, this.eventObject.event = "draw";
              for (var n = this._events.draw.length - 1; n >= 0; n--) this._events.draw[n](this.eventObject)
            }
          }
        }, {
          key: "updateAnimationConstraints",
          value: function() {
            for (var e = this, t = 0, A = this._activeKeyframes.length; t < A; t++) this._activeKeyframes[t].evaluateConstraints();
            this.attributes.forEach(function(t) {
              1 !== e.keyframes[t].length && e.keyframes[t].sort(c.KeyframeComparison)
            }), this.updateDeferredPropertyValues()
          }
        }, {
          key: "refreshMetrics",
          value: function() {
            var e = new Set([this.element]);
            this._allKeyframes.forEach(function(t) {
              return t.anchors.forEach(function(t) {
                return e.add(t)
              })
            }), this.group.metrics.refreshCollection(e), this.group.keyframesDirty = !0
          }
        }, {
          key: "updateDeferredPropertyValues",
          value: function() {
            for (var e = 0, t = this.attributes.length; e < t; e++) {
              var A = this.attributes[e],
                n = this.keyframes[A],
                i = n[0];
              if (!(i.keyframeType > c.KeyframeTypes.InterpolationForward))
                for (var r = 0, a = n.length; r < a; r++) {
                  var o = n[r];
                  if (null === o.jsonProps[A][0]) {
                    if (0 === r) {
                      o.animValues[A][0] = this.tweenProps[A].initialValue;
                      continue
                    }
                    o.animValues[A][0] = n[r - 1].animValues[A][1]
                  }
                  if (null === o.jsonProps[A][1]) {
                    if (r === a - 1) throw new RangeError("AnimSystem - last keyframe cannot defer it's end value! ".concat(A, ":[").concat(o.jsonProps[A][0], ",null]"));
                    o.animValues[A][1] = n[r + 1].animValues[A][0]
                  }
                }
            }
          }
        }, {
          key: "getBounds",
          value: function(e) {
            this.boundsMin = Number.MAX_VALUE, this.boundsMax = -Number.MAX_VALUE;
            for (var t = 0, A = this.attributes.length; t < A; t++)
              for (var n = this.keyframes[this.attributes[t]], i = 0; i < n.length; i++) {
                var r = n[i];
                this.boundsMin = Math.min(r.start, this.boundsMin), this.boundsMax = Math.max(r.end, this.boundsMax), e.min = Math.min(r.start, e.min), e.max = Math.max(r.end, e.max)
              }
          }
        }, {
          key: "getNearestKeyframeForAttribute",
          value: function(e, t) {
            t = void 0 !== t ? t : this.group.position.local;
            var A = null,
              n = Number.POSITIVE_INFINITY,
              i = this.keyframes[e];
            if (void 0 === i) return null;
            var r = i.length;
            if (0 === r) return null;
            if (1 === r) return i[0];
            for (var a = 0; a < r; a++) {
              var o = i[a];
              if (o.isInRange(t)) {
                A = o;
                break
              }
              var s = Math.min(Math.abs(t - o.start), Math.abs(t - o.end));
              s < n && (n = s, A = o)
            }
            return A
          }
        }, {
          key: "getAllKeyframesForAttribute",
          value: function(e) {
            return this.keyframes[e]
          }
        }, {
          key: "updateKeyframe",
          value: function(e, t) {
            var A = this;
            e.parseOptions(t), e.evaluateConstraints(), this.group.keyframesDirty = !0, v.update(function() {
              A.trigger(c.EVENTS.ON_KEYFRAME_UPDATED, e), A.group.trigger(c.EVENTS.ON_KEYFRAME_UPDATED, e)
            }, !0)
          }
        }, {
          key: "removeKeyframe",
          value: function(e) {
            var t = this;
            return e.controller !== this ? Promise.resolve(null) : (e.markedForRemoval = !0, this.group.keyframesDirty = !0, new Promise(function(A) {
              t.group.rafEmitter.executor.eventEmitter.once("before:draw", function() {
                A(e), e.destroy();
                var n = t._allKeyframes.indexOf(e);
                n !== -1 && t._allKeyframes.splice(n, 1)
              })
            }))
          }
        }, {
          key: "updateAnimation",
          value: function(e, t) {
            return this.group.gui && console.warn("KeyframeController.updateAnimation(keyframe,props) has been deprecated. Please use updateKeyframe(keyframe,props)"), this.updateKeyframe(e, t)
          }
        }]), t
      }(p);
    t.exports = I
  }, {
    10: 10,
    11: 11,
    12: 12,
    15: 15,
    2: 2,
    31: 31,
    32: 32,
    35: 35,
    42: 42,
    43: 43,
    47: 47,
    5: 5,
    50: 50,
    53: 53,
    59: 59,
    6: 6,
    65: 65,
    8: 8,
    85: 85,
    87: 87,
    88: 88,
    89: 89,
    9: 9,
    90: 90
  }],
  45: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(6)),
      r = n(e(8)),
      a = n(e(15)),
      o = n(e(10)),
      s = n(e(9)),
      u = n(e(11)),
      l = e(42),
      c = e(47),
      h = function(e) {
        function t(e, A) {
          var n;
          return (0, i["default"])(this, t), n = (0, a["default"])(this, (0, o["default"])(t).call(this, e, A)), n.keyframeType = c.KeyframeTypes.Event, n.isApplied = !1, n.hasDuration = !1, n.isCurrentlyInRange = !1, n
        }
        return (0, u["default"])(t, e), (0, r["default"])(t, [{
          key: "parseOptions",
          value: function(e) {
            e.x = void 0, e.y = void 0, e.scale = void 0, e.scaleX = void 0, e.scaleY = void 0, e.rotation = void 0, e.style = void 0, e.cssClass = void 0, e.rotation = void 0, e.opacity = void 0, e.hold = void 0, void 0 === e.end && (e.end = e.start), this.event = e.event, this.animValues[this.event] = [0, 0], "undefined" == typeof this.controller.tweenProps[this.event] && (this.controller.tweenProps[this.event] = new c.TargetValue(0, 1, (!1))), (0, s["default"])((0, o["default"])(t.prototype), "parseOptions", this).call(this, e), this.keyframeType = c.KeyframeTypes.Event
          }
        }, {
          key: "updateLocalProgress",
          value: function(e) {
            if (this.hasDuration) {
              var t = this.isCurrentlyInRange,
                A = e >= this.start && e <= this.end;
              if (t === A) return;
              return this.isCurrentlyInRange = A, void(A && !t ? this._trigger(this.event + ":enter") : t && !A && this._trigger(this.event + ":exit"))
            }!this.isApplied && e >= this.start ? (this.isApplied = !0, this._trigger(this.event)) : this.isApplied && e < this.start && (this.isApplied = !1, this._trigger(this.event + ":reverse"))
          }
        }, {
          key: "_trigger",
          value: function(e) {
            this.controller.eventObject.event = e, this.controller.eventObject.keyframe = this, this.controller.trigger(e, this.controller.eventObject)
          }
        }, {
          key: "evaluateConstraints",
          value: function() {
            (0, s["default"])((0, o["default"])(t.prototype), "evaluateConstraints", this).call(this), this.hasDuration = this.start !== this.end
          }
        }, {
          key: "reset",
          value: function(e) {
            this.isApplied = !1, this.isCurrentlyInRange = !1, (0, s["default"])((0, o["default"])(t.prototype), "reset", this).call(this, e)
          }
        }, {
          key: "onDOMRead",
          value: function(e, t) {}
        }, {
          key: "reconcile",
          value: function(e, t) {}
        }, {
          key: "evaluateInterpolationConstraints",
          value: function() {}
        }]), t
      }(l);
    h.DATA_ATTRIBUTE = "data-anim-event", t.exports = h
  }, {
    10: 10,
    11: 11,
    12: 12,
    15: 15,
    42: 42,
    47: 47,
    6: 6,
    8: 8,
    9: 9
  }],
  46: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(6)),
      r = e(52);
    t.exports = function a(e, t) {
      var A = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      (0, i["default"])(this, a), this.isGroup = A, this.group = e, this.controller = t, this.controllers = [], this.tweenProps = new r
    }
  }, {
    12: 12,
    52: 52,
    6: 6
  }],
  47: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(6)),
      r = {
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
          for (var e = 0; e < r.BREAKPOINTS.length; e++) {
            var t = r.BREAKPOINTS[e],
              A = window.matchMedia(t.mediaQuery);
            if (A.matches) return t.name
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
        TweenProps: e(52),
        TargetValue: function a(e, t, A) {
          (0, i["default"])(this, a), this.epsilon = parseFloat(t), this.snapAtCreation = A, this.initialValue = e, this.target = e, this.current = e, this.previousValue = e, this.isActive = !1
        },
        AnimInfo: e(46),
        Progress: function() {
          this.local = 0, this.localUnclamped = 0, this.lastPosition = 0
        },
        ViewableRange: function(e, t) {
          this.a = e.top - t, this.a < 0 && (this.a = e.top), this.b = e.top, this.d = e.bottom, this.c = Math.max(this.d - t, this.b)
        },
        pageMetrics: new function() {
          this.scrollX = 0, this.scrollY = 0, this.windowWidth = 0, this.windowHeight = 0, this.documentOffsetX = 0, this.documentOffsetY = 0, this.previousBreakpoint = "", this.breakpoint = ""
        },
        EventObject: function(e) {
          this.controller = e, this.element = this.controller.element, this.keyframe = null, this.event = "", this.tweenProps = this.controller.tweenProps
        },
        KeyframeComparison: function(e, t) {
          return e.start < t.start ? -1 : e.start > t.start ? 1 : 0
        }
      };
    t.exports = r
  }, {
    12: 12,
    46: 46,
    52: 52,
    6: 6
  }],
  48: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(6)),
      r = function a() {
        (0, i["default"])(this, a), this.linear = function(e) {
          return e
        }, this.easeInQuad = function(e) {
          return e * e
        }, this.easeOutQuad = function(e) {
          return e * (2 - e)
        }, this.easeInOutQuad = function(e) {
          return e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e
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
          return e -= 1, e * e * (2.70158 * e + 1.70158) + 1
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
      };
    t.exports = new r
  }, {
    12: 12,
    6: 6
  }],
  49: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(6)),
      r = n(e(8)),
      a = e(47),
      o = function(e, t) {
        return void 0 === e || null === e ? t : e
      },
      s = function() {
        function e() {
          (0, i["default"])(this, e), this.clear()
        }
        return (0, r["default"])(e, [{
          key: "clear",
          value: function() {
            this._metrics = new WeakMap
          }
        }, {
          key: "destroy",
          value: function() {
            this._metrics = null
          }
        }, {
          key: "add",
          value: function(e) {
            var t = this._metrics.get(e);
            if (t) return t;
            var A = new u(e);
            return this._metrics.set(e, A), this._refreshMetrics(e, A)
          }
        }, {
          key: "get",
          value: function(e) {
            return this._metrics.get(e)
          }
        }, {
          key: "refreshCollection",
          value: function(e) {
            var t = this;
            e.forEach(function(e) {
              return t._refreshMetrics(e, null)
            })
          }
        }, {
          key: "refreshMetrics",
          value: function(e) {
            return this._refreshMetrics(e)
          }
        }, {
          key: "_refreshMetrics",
          value: function(e, t) {
            if (t = t || this._metrics.get(e), !(e instanceof Element)) return t.width = o(e.width, 0), t.height = o(e.height, 0), t.top = o(e.top, o(e.y, 0)), t.left = o(e.left, o(e.x, 0)), t.right = t.left + t.width, t.bottom = t.top + t.height, t;
            if (void 0 === e.offsetWidth) {
              var A = e.getBoundingClientRect();
              return t.width = A.width, t.height = A.height, t.top = a.pageMetrics.scrollY + A.top, t.left = a.pageMetrics.scrollX + A.left, t.right = t.left + t.width, t.bottom = t.top + t.height, t
            }
            t.width = e.offsetWidth, t.height = e.offsetHeight, t.top = a.pageMetrics.documentOffsetY, t.left = a.pageMetrics.documentOffsetX;
            for (var n = e; n;) t.top += n.offsetTop, t.left += n.offsetLeft, n = n.offsetParent;
            return t.right = t.left + t.width, t.bottom = t.top + t.height, t
          }
        }]), e
      }(),
      u = function() {
        function e(t) {
          (0, i["default"])(this, e), this.top = 0, this.bottom = 0, this.left = 0, this.right = 0, this.height = 0, this.width = 0
        }
        return (0, r["default"])(e, [{
          key: "toString",
          value: function() {
            return "top:".concat(this.top, ", bottom:").concat(this.bottom, ", left:").concat(this.left, ", right:").concat(this.right, ", height:").concat(this.height, ", width:").concat(this.width)
          }
        }, {
          key: "toObject",
          value: function() {
            return {
              top: this.top,
              bottom: this.bottom,
              left: this.left,
              right: this.right,
              height: this.height,
              width: this.width
            }
          }
        }]), e
      }();
    t.exports = s
  }, {
    12: 12,
    47: 47,
    6: 6,
    8: 8
  }],
  50: [function(e, t, A) {
    "use strict";
    var n = e(47),
      i = e(42),
      r = e(45),
      a = e(43),
      o = function(e) {
        for (var t in e) {
          var A = e[t];
          if (n.KeyframeJSONReservedWords.indexOf(t) === -1 && Array.isArray(A)) return !0
        }
        return !1
      };
    t.exports = function(e) {
      if (void 0 !== e.cssClass || void 0 !== e.style) {
        if (o(e)) throw "CSS Keyframes cannot tween values, please use multiple keyframes instead";
        return a
      }
      if (o(e)) return i;
      if (e.event) return r;
      throw delete e.anchors, "Could not determine tween type based on ".concat(JSON.stringify(e))
    }
  }, {
    42: 42,
    43: 43,
    45: 45,
    47: 47
  }],
  51: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(7)),
      r = n(e(18)),
      a = n(e(6)),
      o = n(e(8)),
      s = function() {
        function e(t, A, n, i) {
          (0, a["default"])(this, e), this.mass = t, this.stiffness = A, this.damping = n, this.initialVelocity = i, this.m_w0 = Math.sqrt(this.stiffness / this.mass), this.m_zeta = this.damping / (2 * Math.sqrt(this.stiffness * this.mass)), this.m_zeta < 1 ? (this.m_wd = this.m_w0 * Math.sqrt(1 - this.m_zeta * this.m_zeta), this.m_A = 1, this.m_B = (this.m_zeta * this.m_w0 + -this.initialVelocity) / this.m_wd) : (this.m_wd = 0, this.m_A = 1, this.m_B = -this.initialVelocity + this.m_w0)
        }
        return (0, o["default"])(e, [{
          key: "solve",
          value: function(e) {
            return 0 === e || 1 === e ? e : (e = this.m_zeta < 1 ? Math.exp(-e * this.m_zeta * this.m_w0) * (this.m_A * Math.cos(this.m_wd * e) + this.m_B * Math.sin(this.m_wd * e)) : (this.m_A + this.m_B * e) * Math.exp(-e * this.m_w0), 1 - e)
          }
        }]), e
      }(),
      u = /\d*\.?\d+/g;
    s.fromCSSString = function(e) {
      var t = e.match(u);
      if (4 !== t.length) throw "SpringEasing could not convert ".concat(cssString, " to spring params");
      var A = t.map(Number),
        n = (0, i["default"])(s, (0, r["default"])(A));
      return n.solve.bind(n)
    }, t.exports = s
  }, {
    12: 12,
    18: 18,
    6: 6,
    7: 7,
    8: 8
  }],
  52: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(6)),
      r = function a() {
        (0, i["default"])(this, a)
      };
    t.exports = r
  }, {
    12: 12,
    6: 6
  }],
  53: [function(e, t, A) {
    "use strict";
    t.exports = function() {
      return Math.random().toString(16).slice(2)
    }
  }, {}],
  54: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(6)),
      r = n(e(8)),
      a = 1e-5,
      o = Math.abs,
      s = 5,
      u = function() {
        function e(t, A, n, r) {
          (0, i["default"])(this, e), this.cp = new Float32Array(6), this.cp[0] = 3 * t, this.cp[1] = 3 * (n - t) - this.cp[0], this.cp[2] = 1 - this.cp[0] - this.cp[1], this.cp[3] = 3 * A, this.cp[4] = 3 * (r - A) - this.cp[3], this.cp[5] = 1 - this.cp[3] - this.cp[4]
        }
        return (0, r["default"])(e, [{
          key: "sampleCurveX",
          value: function(e) {
            return ((this.cp[2] * e + this.cp[1]) * e + this.cp[0]) * e
          }
        }, {
          key: "sampleCurveY",
          value: function(e) {
            return ((this.cp[5] * e + this.cp[4]) * e + this.cp[3]) * e
          }
        }, {
          key: "sampleCurveDerivativeX",
          value: function(e) {
            return (3 * this.cp[2] * e + 2 * this.cp[1]) * e + this.cp[0]
          }
        }, {
          key: "solveCurveX",
          value: function(e) {
            var t, A, n, i, r, u;
            for (n = e, u = 0; u < s; u++) {
              if (i = this.sampleCurveX(n) - e, o(i) < a) return n;
              if (r = this.sampleCurveDerivativeX(n), o(r) < a) break;
              n -= i / r
            }
            if (t = 0, A = 1, n = e, n < t) return t;
            if (n > A) return A;
            for (; t < A;) {
              if (i = this.sampleCurveX(n), o(i - e) < a) return n;
              e > i ? t = n : A = n, n = .5 * (A - t) + t
            }
            return n
          }
        }, {
          key: "solve",
          value: function(e) {
            return this.sampleCurveY(this.solveCurveX(e))
          }
        }]), e
      }(),
      l = /\d*\.?\d+/g;
    u.fromCSSString = function(e) {
      var t = e.match(l);
      if (4 !== t.length) throw "UnitBezier could not convert ".concat(e, " to cubic-bezier");
      var A = t.map(Number),
        n = new u(A[0], A[1], A[2], A[3]);
      return n.solve.bind(n)
    }, t.exports = u
  }, {
    12: 12,
    6: 6,
    8: 8
  }],
  55: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(19)),
      r = n(e(6)),
      a = n(e(8)),
      o = e(56),
      s = new(e(49)),
      u = function() {
        function e(t) {
          (0, r["default"])(this, e), this.group = t, this.data = {
            target: null,
            anchors: null,
            metrics: this.group.metrics
          }
        }
        return (0, a["default"])(e, [{
          key: "parseArray",
          value: function(e, t) {
            return [this.parseExpression(e, t[0]), this.parseExpression(e, t[1])]
          }
        }, {
          key: "parseExpression",
          value: function(t, A) {
            if (!A) return null;
            if ("number" == typeof A) return A;
            if ("string" != typeof A) throw "Expression must be a string, received ".concat((0, i["default"])(A), ": ").concat(A);
            return this.data.target = t.controller.element, this.data.anchors = t.anchors, this.data.keyframe = t.keyframe, e._parse(A, this.data)
          }
        }, {
          key: "parseTimeValue",
          value: function(e, t) {
            if ("number" == typeof t) return t;
            var A = this.group.expressionParser.parseExpression(e, t);
            return this.group.convertScrollPositionToTValue(A)
          }
        }, {
          key: "destroy",
          value: function() {
            this.group = null
          }
        }], [{
          key: "parse",
          value: function(t, A) {
            return A = A || {}, A && (s.clear(), A.target && s.add(A.target), A.anchors && A.anchors.forEach(function(e) {
              return s.add(e)
            })), A.metrics = s, e._parse(t, A)
          }
        }, {
          key: "_parse",
          value: function(e, t) {
            return o.Parse(e).execute(t)
          }
        }]), e
      }();
    u.programs = o.programs, window.ExpressionParser = u, t.exports = u
  }, {
    12: 12,
    19: 19,
    49: 49,
    56: 56,
    6: 6,
    8: 8
  }],
  56: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(8)),
      r = n(e(15)),
      a = n(e(10)),
      o = n(e(11)),
      s = n(e(6)),
      u = e(47),
      l = e(78),
      c = {},
      h = {
        smoothstep: function(e, t, A) {
          return A = h.clamp((A - e) / (t - e), 0, 1), A * A * (3 - 2 * A)
        },
        deg: function(e) {
          return 180 * e / Math.PI
        },
        rad: function(e) {
          return e * Math.PI / 180
        },
        random: function(e, t) {
          return Math.random() * (t - e) + e
        },
        atan: Math.atan2
      };
    Object.getOwnPropertyNames(Math).forEach(function(e) {
      return h[e] ? null : h[e.toLowerCase()] = Math[e]
    }), Object.getOwnPropertyNames(l).forEach(function(e) {
      return h[e] ? null : h[e.toLowerCase()] = l[e]
    });
    var d = null,
      f = {
        ANCHOR_CONST: "a",
        ALPHA: "ALPHA",
        LPAREN: "(",
        RPAREN: ")",
        PLUS: "PLUS",
        MINUS: "MINUS",
        MUL: "MUL",
        DIV: "DIV",
        INTEGER_CONST: "INTEGER_CONST",
        FLOAT_CONST: "FLOAT_CONST",
        COMMA: ",",
        EOF: "EOF"
      },
      m = {
        NUMBERS: /\d|\d\.\d/,
        DIGIT: /\d/,
        OPERATOR: /[-+*\/]/,
        PAREN: /[()]/,
        WHITE_SPACE: /\s/,
        ALPHA: /[a-zA-Z]|%/,
        ALPHANUMERIC: /[a-zA-Z0-9]/,
        OBJECT_UNIT: /^(t|l|b|r|%w|%h|%|h|w)$/,
        GLOBAL_METRICS_UNIT: /^(px|vh|vw)$/,
        ANY_UNIT: /^(t|l|b|r|%w|%h|%|h|w|px|vh|vw)$/,
        MATH_FUNCTION: new RegExp("\\b(".concat(Object.keys(h).join("|"), ")\\b"), "i")
      },
      p = {
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
      },
      g = function M(e, t) {
        (0, s["default"])(this, M), this.type = e, this.value = t
      };
    g.ONE = new g("100", 100), g.EOF = new g(f.EOF, null);
    var v = function x(e) {
        (0, s["default"])(this, x), this.type = e
      },
      y = function(e) {
        function t(e, A) {
          var n;
          return (0, s["default"])(this, t), n = (0, r["default"])(this, (0, a["default"])(t).call(this, "UnaryOp")), n.token = n.op = e, n.expr = A, n
        }
        return (0, o["default"])(t, e), t
      }(v),
      E = function(e) {
        function t(e, A, n) {
          var i;
          return (0, s["default"])(this, t), i = (0, r["default"])(this, (0, a["default"])(t).call(this, "BinOp")), i.left = e, i.op = A, i.right = n, i
        }
        return (0, o["default"])(t, e), t
      }(v),
      _ = function(e) {
        function t(e, A) {
          var n;
          if ((0, s["default"])(this, t), n = (0, r["default"])(this, (0, a["default"])(t).call(this, "MathOp")), n.op = e, n.list = A, p[e.value] && A.length !== p[e.value]) throw new Error("Incorrect number of arguments for '".concat(e.value, "'. Received ").concat(A.length, ", expected ").concat(p[e.value]));
          return n
        }
        return (0, o["default"])(t, e), t
      }(v),
      I = function(e) {
        function t(e) {
          var A;
          return (0, s["default"])(this, t), A = (0, r["default"])(this, (0, a["default"])(t).call(this, "Num")), A.token = e, A.value = e.value, A
        }
        return (0, o["default"])(t, e), t
      }(v),
      b = (function(e) {
        function t(e) {
          var A;
          return (0, s["default"])(this, t), A = (0, r["default"])(this, (0, a["default"])(t).call(this, "Unit")), A.token = e, A.value = e.value, A
        }
        return (0, o["default"])(t, e), t
      }(v), function(e) {
        function t(e, A, n) {
          var i;
          return (0, s["default"])(this, t), i = (0, r["default"])(this, (0, a["default"])(t).call(this, "RefValue")), i.num = e, i.ref = A, i.unit = n, i
        }
        return (0, o["default"])(t, e), t
      }(v)),
      C = function(e) {
        function t(e, A) {
          var n;
          return (0, s["default"])(this, t), n = (0, r["default"])(this, (0, a["default"])(t).call(this, "CSSValue")), n.ref = e, n.propertyName = A, n
        }
        return (0, o["default"])(t, e), t
      }(v),
      T = function(e) {
        function t(e, A) {
          var n;
          return (0, s["default"])(this, t), n = (0, r["default"])(this, (0, a["default"])(t).call(this, "PropValue")), n.ref = e, n.propertyName = A, n
        }
        return (0, o["default"])(t, e), t
      }(v),
      w = function() {
        function e(t) {
          (0, s["default"])(this, e), this.text = t, this.pos = 0, this["char"] = this.text[this.pos], this.tokens = [];
          for (var A;
            (A = this.getNextToken()) && A !== g.EOF;) this.tokens.push(A);
          this.tokens.push(A)
        }
        return (0, i["default"])(e, [{
          key: "advance",
          value: function() {
            this["char"] = this.text[++this.pos]
          }
        }, {
          key: "skipWhiteSpace",
          value: function() {
            for (; null != this["char"] && m.WHITE_SPACE.test(this["char"]);) this.advance()
          }
        }, {
          key: "name",
          value: function() {
            for (var e = ""; null != this["char"] && m.ALPHA.test(this["char"]);) e += this["char"], this.advance();
            return new g(f.ALPHA, e)
          }
        }, {
          key: "number",
          value: function() {
            for (var e = ""; null != this["char"] && m.DIGIT.test(this["char"]);) e += this["char"], this.advance();
            if (null != this["char"] && "." === this["char"]) {
              for (e += this["char"], this.advance(); null != this["char"] && m.DIGIT.test(this["char"]);) e += this["char"], this.advance();
              return new g(f.FLOAT_CONST, parseFloat(e))
            }
            return new g(f.INTEGER_CONST, parseInt(e))
          }
        }, {
          key: "getNextToken",
          value: function() {
            for (; null != this["char"];)
              if (m.WHITE_SPACE.test(this["char"])) this.skipWhiteSpace();
              else {
                if (m.DIGIT.test(this["char"])) return this.number();
                if ("," === this["char"]) return this.advance(), new g(f.COMMA, ",");
                if (m.OPERATOR.test(this["char"])) {
                  var e = "",
                    t = this["char"];
                  switch (t) {
                    case "+":
                      e = f.PLUS;
                      break;
                    case "-":
                      e = f.MINUS;
                      break;
                    case "*":
                      e = f.MUL;
                      break;
                    case "/":
                      e = f.DIV
                  }
                  return this.advance(), new g(e, t)
                }
                if (m.PAREN.test(this["char"])) {
                  var A = "",
                    n = this["char"];
                  switch (n) {
                    case "(":
                      A = f.LPAREN;
                      break;
                    case ")":
                      A = f.RPAREN
                  }
                  return this.advance(), new g(A, n)
                }
                if (m.ALPHA.test(this["char"])) return this.name();
                this.error("Unexpected character " + this["char"])
              } return g.EOF
          }
        }]), e
      }(),
      S = function() {
        function e(t) {
          (0, s["default"])(this, e), this.lexer = t, this.pos = 0
        }
        return (0, i["default"])(e, [{
          key: "error",
          value: function t(e) {
            var A = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              n = this.lexer.text.slice(this.pos - 3, this.pos + 3),
              t = new Error("".concat(e, ' in "').concat(this.lexer.text, '" near "').concat(n, '". ').concat(A, " "));
            throw console.error(t.message, d ? d.keyframe || d.target : ""), t
          }
        }, {
          key: "consume",
          value: function(e) {
            var t = this.currentToken;
            return t.type === e ? this.pos += 1 : this.error("Invalid token ".concat(this.currentToken.value, ", expected ").concat(e)), t
          }
        }, {
          key: "consumeList",
          value: function(e) {
            e.includes(this.currentToken) ? this.pos += 1 : this.error("Invalid token ".concat(this.currentToken.value, ", expected ").concat(tokenType))
          }
        }, {
          key: "expr",
          value: function() {
            for (var e = this.term(); this.currentToken.type === f.PLUS || this.currentToken.type === f.MINUS;) {
              var t = this.currentToken;
              switch (t.value) {
                case "+":
                  this.consume(f.PLUS);
                  break;
                case "-":
                  this.consume(f.MINUS)
              }
              e = new E(e, t, this.term())
            }
            return e
          }
        }, {
          key: "term",
          value: function() {
            for (var e = this.factor(); this.currentToken.type === f.MUL || this.currentToken.type === f.DIV;) {
              var t = this.currentToken;
              switch (t.value) {
                case "*":
                  this.consume(f.MUL);
                  break;
                case "/":
                  this.consume(f.DIV)
              }
              e = new E(e, t, this.factor())
            }
            return e
          }
        }, {
          key: "factor",
          value: function() {
            if (this.currentToken.type === f.PLUS) return new y(this.consume(f.PLUS), this.factor());
            if (this.currentToken.type === f.MINUS) return new y(this.consume(f.MINUS), this.factor());
            if (this.currentToken.type === f.INTEGER_CONST || this.currentToken.type === f.FLOAT_CONST) {
              var e = new I(this.currentToken);
              if (this.pos += 1, m.OPERATOR.test(this.currentToken.value) || this.currentToken.type === f.RPAREN || this.currentToken.type === f.COMMA || this.currentToken.type === f.EOF) return e;
              if (this.currentToken.type === f.ALPHA && this.currentToken.value === f.ANCHOR_CONST) return this.consume(f.ALPHA), new b(e, this.anchorIndex(), this.unit(m.ANY_UNIT));
              if (this.currentToken.type === f.ALPHA) return "%a" === this.currentToken.value && this.error("%a is invalid, try removing the %"), new b(e, null, this.unit());
              this.error("Expected a scaling unit type", "Such as 'h' / 'w'")
            } else {
              if (m.OBJECT_UNIT.test(this.currentToken.value)) return new b(new I(g.ONE), null, this.unit());
              if (this.currentToken.value === f.ANCHOR_CONST) {
                this.consume(f.ALPHA);
                var t = this.anchorIndex();
                if (m.OBJECT_UNIT.test(this.currentToken.value)) return new b(new I(g.ONE), t, this.unit())
              } else if (this.currentToken.type === f.ALPHA) {
                if ("css" === this.currentToken.value || "prop" === this.currentToken.value) {
                  var A = "css" === this.currentToken.value ? C : T;
                  this.consume(f.ALPHA), this.consume(f.LPAREN);
                  var n = this.propertyName(),
                    i = null;
                  return this.currentToken.type === f.COMMA && (this.consume(f.COMMA), this.consume(f.ALPHA), i = this.anchorIndex()), this.consume(f.RPAREN), new A(i, n)
                }
                if (m.MATH_FUNCTION.test(this.currentToken.value)) {
                  var r = this.currentToken.value.toLowerCase();
                  if ("number" == typeof h[r]) return this.consume(f.ALPHA), new I(new g(f.ALPHA, h[r]));
                  var a = g[r] || new g(r, r),
                    o = [];
                  this.consume(f.ALPHA), this.consume(f.LPAREN);
                  var s = null;
                  do this.currentToken.value === f.COMMA && this.consume(f.COMMA), s = this.expr(), o.push(s); while (this.currentToken.value === f.COMMA);
                  return this.consume(f.RPAREN), new _(a, o)
                }
              } else if (this.currentToken.type === f.LPAREN) {
                this.consume(f.LPAREN);
                var u = this.expr();
                return this.consume(f.RPAREN), u
              }
            }
            this.error("Unexpected token ".concat(this.currentToken.value))
          }
        }, {
          key: "propertyName",
          value: function() {
            for (var e = ""; this.currentToken.type === f.ALPHA || this.currentToken.type === f.MINUS;) e += this.currentToken.value, this.pos += 1;
            return e
          }
        }, {
          key: "unit",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.ANY_UNIT,
              t = this.currentToken;
            return t.type === f.ALPHA && e.test(t.value) ? (this.consume(f.ALPHA), new g(f.ALPHA, t.value = t.value.replace(/%(h|w)/, "$1").replace("%", "h"))) : void this.error("Expected unit type")
          }
        }, {
          key: "anchorIndex",
          value: function() {
            var e = this.currentToken;
            return e.type === f.INTEGER_CONST ? (this.consume(f.INTEGER_CONST), new I(e)) : void this.error("Invalid anchor reference", ". Should be something like a0, a1, a2")
          }
        }, {
          key: "parse",
          value: function() {
            var e = this.expr();
            return this.currentToken !== g.EOF && this.error("Unexpected token ".concat(this.currentToken.value)), e
          }
        }, {
          key: "currentToken",
          get: function() {
            return this.lexer.tokens[this.pos]
          }
        }]), e
      }(),
      k = function() {
        function e(t) {
          (0, s["default"])(this, e), this.parser = t, this.root = t.parse()
        }
        return (0, i["default"])(e, [{
          key: "visit",
          value: function(e) {
            var t = this[e.type];
            if (!t) throw new Error("No visit method named, ".concat(t));
            var A = t.call(this, e);
            return A
          }
        }, {
          key: "BinOp",
          value: function(e) {
            switch (e.op.type) {
              case f.PLUS:
                return this.visit(e.left) + this.visit(e.right);
              case f.MINUS:
                return this.visit(e.left) - this.visit(e.right);
              case f.MUL:
                return this.visit(e.left) * this.visit(e.right);
              case f.DIV:
                return this.visit(e.left) / this.visit(e.right)
            }
          }
        }, {
          key: "RefValue",
          value: function(e) {
            var t = this.unwrapReference(e),
              A = e.unit.value,
              n = e.num.value,
              i = d.metrics.get(t);
            switch (A) {
              case "h":
                return .01 * n * i.height;
              case "t":
                return .01 * n * i.top;
              case "vh":
                return .01 * n * u.pageMetrics.windowHeight;
              case "vw":
                return .01 * n * u.pageMetrics.windowWidth;
              case "px":
                return n;
              case "w":
                return .01 * n * i.width;
              case "b":
                return .01 * n * i.bottom;
              case "l":
                return .01 * n * i.left;
              case "r":
                return .01 * n * i.right
            }
          }
        }, {
          key: "PropValue",
          value: function(e) {
            var t = null === e.ref ? d.target : d.anchors[e.ref.value];
            return t[e.propertyName]
          }
        }, {
          key: "CSSValue",
          value: function(t) {
            var A = this.unwrapReference(t),
              n = getComputedStyle(A).getPropertyValue(t.propertyName);
            return "" === n ? 0 : e.Parse(n).execute(d)
          }
        }, {
          key: "Num",
          value: function(e) {
            return e.value
          }
        }, {
          key: "UnaryOp",
          value: function(e) {
            return e.op.type === f.PLUS ? +this.visit(e.expr) : e.op.type === f.MINUS ? -this.visit(e.expr) : void 0
          }
        }, {
          key: "MathOp",
          value: function(e) {
            var t = this,
              A = e.list.map(function(e) {
                return t.visit(e)
              });
            return h[e.op.value].apply(null, A)
          }
        }, {
          key: "unwrapReference",
          value: function(e) {
            return null === e.ref ? d.target : (e.ref.value >= d.anchors.length && console.error("Not enough anchors supplied for expression ".concat(this.parser.lexer.text), d.target), d.anchors[e.ref.value])
          }
        }, {
          key: "execute",
          value: function(e) {
            return d = e, this.visit(this.root)
          }
        }], [{
          key: "Parse",
          value: function(t) {
            return c[t] || (c[t] = new e(new S(new w(t))))
          }
        }]), e
      }();
    k.programs = c, t.exports = k
  }, {
    10: 10,
    11: 11,
    12: 12,
    15: 15,
    47: 47,
    6: 6,
    78: 78,
    8: 8
  }],
  57: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(6)),
      r = n(e(8)),
      a = n(e(15)),
      o = n(e(5)),
      s = n(e(10)),
      u = n(e(9)),
      l = n(e(11)),
      c = e(2).EventEmitterMicro,
      h = e(78),
      d = e(59),
      f = e(47),
      m = e(49),
      p = e(55),
      g = e(44),
      v = {
        create: e(22),
        update: e(35),
        draw: e(31)
      },
      y = function(e) {
        function t(e, A) {
          var n;
          return (0, i["default"])(this, t), n = (0, a["default"])(this, (0, s["default"])(t).call(this)), n.anim = A, n.element = e, n.name = n.name || e.getAttribute("data-anim-scroll-group"), n.isEnabled = !0, n.position = new f.Progress, n.metrics = new m, n.metrics.add(n.element), n.expressionParser = new p((0, o["default"])(n)), n.boundsMin = 0, n.boundsMax = 0, n.timelineUpdateRequired = !1, n._keyframesDirty = !1, n.viewableRange = n.createViewableRange(), n.defaultEase = f.KeyframeDefaults.ease, n.keyframeControllers = [], n.updateProgress(n.getPosition()), n.onDOMRead = n.onDOMRead.bind((0, o["default"])(n)), n.onDOMWrite = n.onDOMWrite.bind((0, o["default"])(n)), n.gui = null, n.finalizeInit(), n
        }
        return (0, l["default"])(t, e), (0, r["default"])(t, [{
          key: "finalizeInit",
          value: function() {
            this.element._animInfo = new f.AnimInfo(this, null, (!0)), this.setupRAFEmitter()
          }
        }, {
          key: "destroy",
          value: function() {
            this.expressionParser.destroy(), this.expressionParser = null;
            for (var e = 0, A = this.keyframeControllers.length; e < A; e++) this.keyframeControllers[e].destroy();
            this.keyframeControllers = null, this.position = null, this.viewableRange = null, this.gui && (this.gui.destroy(), this.gui = null), this.metrics.destroy(), this.metrics = null, this.rafEmitter.destroy(), this.rafEmitter = null, this.anim = null, this.element._animInfo && this.element._animInfo.group === this && (this.element._animInfo.group = null, this.element._animInfo = null), this.element = null, this.isEnabled = !1, (0, u["default"])((0, s["default"])(t.prototype), "destroy", this).call(this)
          }
        }, {
          key: "removeKeyframeController",
          value: function(e) {
            var t = this;
            return this.keyframeControllers.includes(e) ? (e._allKeyframes.forEach(function(e) {
              return e.markedForRemoval = !0
            }), this.keyframesDirty = !0, new Promise(function(A) {
              v.draw(function() {
                var n = t.keyframeControllers.indexOf(e);
                return n === -1 ? void A() : (t.keyframeControllers.splice(n, 1), e.onDOMWrite(), e.destroy(), t.gui && t.gui.create(), void A())
              })
            })) : Promise.resolve()
          }
        }, {
          key: "remove",
          value: function() {
            return this.anim.removeGroup(this)
          }
        }, {
          key: "setupRAFEmitter",
          value: function(e) {
            var t = this;
            this.rafEmitter && this.rafEmitter.destroy(), this.rafEmitter = e || new v.create, this.rafEmitter.on("update", this.onDOMRead), this.rafEmitter.on("draw", this.onDOMWrite), this.rafEmitter.once("external", function() {
              return t.reconcile()
            })
          }
        }, {
          key: "requestDOMChange",
          value: function() {
            return !!this.isEnabled && this.rafEmitter.run()
          }
        }, {
          key: "onDOMRead",
          value: function() {
            this.keyframesDirty && this.onKeyframesDirty();
            for (var e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].onDOMRead(this.position.local)
          }
        }, {
          key: "onDOMWrite",
          value: function() {
            for (var e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].onDOMWrite();
            this.needsUpdate() && this.requestDOMChange()
          }
        }, {
          key: "needsUpdate",
          value: function() {
            if (this._keyframesDirty) return !0;
            for (var e = 0, t = this.keyframeControllers.length; e < t; e++)
              if (this.keyframeControllers[e].needsUpdate()) return !0;
            return !1
          }
        }, {
          key: "addKeyframe",
          value: function(e, t) {
            var A = this.getControllerForTarget(e);
            return null === A && (A = new g(this, e), this.keyframeControllers.push(A)), this.keyframesDirty = !0, A.addKeyframe(t)
          }
        }, {
          key: "forceUpdate",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = e.waitForNextUpdate,
              A = void 0 === t || t,
              n = e.silent,
              i = void 0 !== n && n;
            this.isEnabled && (this.refreshMetrics(), this.timelineUpdateRequired = !0, A ? this.keyframesDirty = !0 : this.onKeyframesDirty({
              silent: i
            }))
          }
        }, {
          key: "onKeyframesDirty",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = e.silent,
              A = void 0 !== t && t;
            this.determineActiveKeyframes(), this.keyframesDirty = !1, this.metrics.refreshMetrics(this.element), this.viewableRange = this.createViewableRange();
            for (var n = 0, i = this.keyframeControllers.length; n < i; n++) this.keyframeControllers[n].updateAnimationConstraints();
            this.updateBounds(), this.updateProgress(this.getPosition()), A || this._onScroll(), this.gui && this.gui.create()
          }
        }, {
          key: "refreshMetrics",
          value: function() {
            var e = new Set([this.element]);
            this.keyframeControllers.forEach(function(t) {
              e.add(t.element), t._allKeyframes.forEach(function(t) {
                return t.anchors.forEach(function(t) {
                  return e.add(t)
                })
              })
            }), this.metrics.refreshCollection(e), this.viewableRange = this.createViewableRange()
          }
        }, {
          key: "reconcile",
          value: function() {
            for (var e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].reconcile()
          }
        }, {
          key: "determineActiveKeyframes",
          value: function(e) {
            e = e || d(Array.from(document.documentElement.classList));
            for (var t = 0, A = this.keyframeControllers.length; t < A; t++) this.keyframeControllers[t].determineActiveKeyframes(e)
          }
        }, {
          key: "updateBounds",
          value: function() {
            if (0 === this.keyframeControllers.length) return this.boundsMin = 0, void(this.boundsMax = 0);
            for (var e = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY
              }, t = 0, A = this.keyframeControllers.length; t < A; t++) this.keyframeControllers[t].getBounds(e);
            var n = this.convertTValueToScrollPosition(e.min),
              i = this.convertTValueToScrollPosition(e.max);
            i - n < f.pageMetrics.windowHeight ? (e.min = this.convertScrollPositionToTValue(n - .5 * f.pageMetrics.windowHeight), e.max = this.convertScrollPositionToTValue(i + .5 * f.pageMetrics.windowHeight)) : (e.min -= .001, e.max += .001), this.boundsMin = e.min, this.boundsMax = e.max, this.timelineUpdateRequired = !0
          }
        }, {
          key: "createViewableRange",
          value: function() {
            return new f.ViewableRange(this.metrics.get(this.element), f.pageMetrics.windowHeight)
          }
        }, {
          key: "_onBreakpointChange",
          value: function(e, t) {
            this.keyframesDirty = !0, this.determineActiveKeyframes()
          }
        }, {
          key: "updateProgress",
          value: function(e) {
            return this.hasDuration() ? (this.position.localUnclamped = (e - this.viewableRange.a) / (this.viewableRange.d - this.viewableRange.a), void(this.position.local = h.clamp(this.position.localUnclamped, this.boundsMin, this.boundsMax))) : void(this.position.local = this.position.localUnclamped = 0)
          }
        }, {
          key: "performTimelineDispatch",
          value: function() {
            for (var e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].updateLocalProgress(this.position.local);
            this.trigger(f.EVENTS.ON_TIMELINE_UPDATE, this.position.local), this.timelineUpdateRequired = !1, this.position.lastPosition !== this.position.local && (this.position.lastPosition <= this.boundsMin && this.position.localUnclamped > this.boundsMin ? this.trigger(f.EVENTS.ON_TIMELINE_START, this) : this.position.lastPosition >= this.boundsMin && this.position.localUnclamped < this.boundsMin ? this.trigger(f.EVENTS.ON_TIMELINE_START + ":reverse", this) : this.position.lastPosition <= this.boundsMax && this.position.localUnclamped >= this.boundsMax ? this.trigger(f.EVENTS.ON_TIMELINE_COMPLETE, this) : this.position.lastPosition >= this.boundsMax && this.position.localUnclamped < this.boundsMax && this.trigger(f.EVENTS.ON_TIMELINE_COMPLETE + ":reverse", this)), null !== this.gui && this.gui.onScrollUpdate(this.position)
          }
        }, {
          key: "_onScroll",
          value: function(e) {
            if (!this.isEnabled) return !1;
            void 0 === e && (e = this.getPosition()), this.updateProgress(e);
            var t = this.position.lastPosition === this.boundsMin || this.position.lastPosition === this.boundsMax,
              A = this.position.localUnclamped === this.boundsMin || this.position.localUnclamped === this.boundsMax;
            if (!this.timelineUpdateRequired && t && A && this.position.lastPosition === e) return void(this.position.local = this.position.localUnclamped);
            if (this.timelineUpdateRequired || this.position.localUnclamped > this.boundsMin && this.position.localUnclamped < this.boundsMax) return this.performTimelineDispatch(), this.requestDOMChange(), void(this.position.lastPosition = this.position.localUnclamped);
            var n = this.position.lastPosition > this.boundsMin && this.position.lastPosition < this.boundsMax,
              i = this.position.localUnclamped <= this.boundsMin || this.position.localUnclamped >= this.boundsMax;
            if (n && i) return this.performTimelineDispatch(), this.requestDOMChange(), void(this.position.lastPosition = this.position.localUnclamped);
            var r = this.position.lastPosition < this.boundsMin && this.position.localUnclamped > this.boundsMax,
              a = this.position.lastPosition > this.boundsMax && this.position.localUnclamped < this.boundsMax;
            (r || a) && (this.performTimelineDispatch(), this.requestDOMChange(), this.position.lastPosition = this.position.localUnclamped), null !== this.gui && this.gui.onScrollUpdate(this.position)
          }
        }, {
          key: "convertScrollPositionToTValue",
          value: function(e) {
            return this.hasDuration() ? h.map(e, this.viewableRange.a, this.viewableRange.d, 0, 1) : 0
          }
        }, {
          key: "convertTValueToScrollPosition",
          value: function(e) {
            return this.hasDuration() ? h.map(e, 0, 1, this.viewableRange.a, this.viewableRange.d) : 0
          }
        }, {
          key: "hasDuration",
          value: function() {
            return this.viewableRange.a !== this.viewableRange.d
          }
        }, {
          key: "getPosition",
          value: function() {
            return f.pageMetrics.scrollY
          }
        }, {
          key: "getControllerForTarget",
          value: function(e) {
            if (!e._animInfo || !e._animInfo.controllers) return null;
            if (e._animInfo.controller && e._animInfo.controller.group === this) return e._animInfo.controller;
            for (var t = e._animInfo.controllers, A = 0, n = t.length; A < n; A++)
              if (t[A].group === this) return t[A];
            return null
          }
        }, {
          key: "trigger",
          value: function(e, t) {
            if ("undefined" != typeof this._events[e])
              for (var A = this._events[e].length - 1; A >= 0; A--) void 0 !== t ? this._events[e][A](t) : this._events[e][A]()
          }
        }, {
          key: "keyframesDirty",
          set: function(e) {
            this._keyframesDirty = e, this._keyframesDirty && this.requestDOMChange()
          },
          get: function() {
            return this._keyframesDirty
          }
        }]), t
      }(c);
    t.exports = y
  }, {
    10: 10,
    11: 11,
    12: 12,
    15: 15,
    2: 2,
    22: 22,
    31: 31,
    35: 35,
    44: 44,
    47: 47,
    49: 49,
    5: 5,
    55: 55,
    59: 59,
    6: 6,
    78: 78,
    8: 8,
    9: 9
  }],
  58: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(6)),
      r = n(e(8)),
      a = n(e(15)),
      o = n(e(5)),
      s = n(e(10)),
      u = n(e(9)),
      l = n(e(11)),
      c = e(57),
      h = e(78),
      d = 0,
      f = {
        create: e(22)
      },
      m = function(e) {
        function t(e, A) {
          var n;
          return (0, i["default"])(this, t), e || (e = document.createElement("div"), e.className = "TimeGroup-" + d++), n = (0, a["default"])(this, (0, s["default"])(t).call(this, e, A)), window.timeGroup = window.timeGroup || (0, o["default"])(n), n.name = n.name || e.getAttribute("data-anim-time-group"), n._isPaused = !0, n._repeats = 0, n._isReversed = !1, n._timeScale = 1, n
        }
        return (0, l["default"])(t, e), (0, r["default"])(t, [{
          key: "finalizeInit",
          value: function() {
            if (!this.anim) throw "TimeGroup not instantiated correctly. Please use `AnimSystem.createTimeGroup(el)`";
            this.defaultEase = 1, this.onPlayTimeUpdate = this.onPlayTimeUpdate.bind(this), (0, u["default"])((0, s["default"])(t.prototype), "finalizeInit", this).call(this)
          }
        }, {
          key: "progress",
          value: function(e) {
            if (void 0 === e) return 0 === this.boundsMax ? 0 : this.position.local / this.boundsMax;
            var t = e * this.boundsMax;
            this.timelineUpdateRequired = !0, this._onScroll(t)
          }
        }, {
          key: "time",
          value: function(e) {
            return void 0 === e ? this.position.local : (e = h.clamp(e, this.boundsMin, this.boundsMax), this.timelineUpdateRequired = !0, void this._onScroll(e))
          }
        }, {
          key: "play",
          value: function(e) {
            this.reversed(!1), this.isEnabled = !0, this._isPaused = !1, this.time(e), this._playheadEmitter.run()
          }
        }, {
          key: "reverse",
          value: function(e) {
            this.reversed(!0), this.isEnabled = !0, this._isPaused = !1, this.time(e), this._playheadEmitter.run()
          }
        }, {
          key: "reversed",
          value: function(e) {
            return void 0 === e ? this._isReversed : void(this._isReversed = e)
          }
        }, {
          key: "restart",
          value: function() {
            this._isReversed ? (this.progress(1), this.reverse(this.time())) : (this.progress(0), this.play(this.time()))
          }
        }, {
          key: "pause",
          value: function(e) {
            this.time(e), this._isPaused = !0
          }
        }, {
          key: "paused",
          value: function(e) {
            return void 0 === e ? this._isPaused : (this._isPaused = e, this._isPaused || this.play(), this)
          }
        }, {
          key: "onPlayTimeUpdate",
          value: function(e) {
            if (!this._isPaused) {
              var A = h.clamp(e.delta / 1e3, 0, .5);
              this._isReversed && (A = -A);
              var n = this.time(),
                i = n + A * this._timeScale;
              if (this._repeats === t.REPEAT_FOREVER || this._repeats > 0) {
                var r = !1;
                !this._isReversed && i > this.boundsMax ? (i -= this.boundsMax, r = !0) : this._isReversed && i < 0 && (i = this.boundsMax + i, r = !0), r && (this._repeats = this._repeats === t.REPEAT_FOREVER ? t.REPEAT_FOREVER : this._repeats - 1)
              }
              this.time(i);
              var a = !this._isReversed && this.position.local !== this.duration,
                o = this._isReversed && 0 !== this.position.local;
              a || o ? this._playheadEmitter.run() : this.paused(!0)
            }
          }
        }, {
          key: "updateProgress",
          value: function(e) {
            return this.hasDuration() ? (this.position.localUnclamped = e, void(this.position.local = h.clamp(this.position.localUnclamped, this.boundsMin, this.boundsMax))) : void(this.position.local = this.position.localUnclamped = 0)
          }
        }, {
          key: "updateBounds",
          value: function() {
            if (0 === this.keyframeControllers.length) return this.boundsMin = 0, void(this.boundsMax = 0);
            for (var e = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY
              }, t = 0, A = this.keyframeControllers.length; t < A; t++) this.keyframeControllers[t].getBounds(e);
            this.boundsMin = 0, this.boundsMax = e.max, this.viewableRange.a = this.viewableRange.b = 0, this.viewableRange.c = this.viewableRange.d = this.boundsMax, this.timelineUpdateRequired = !0
          }
        }, {
          key: "setupRAFEmitter",
          value: function(e) {
            this._playheadEmitter = new f.create, this._playheadEmitter.on("update", this.onPlayTimeUpdate), (0, u["default"])((0, s["default"])(t.prototype), "setupRAFEmitter", this).call(this, e)
          }
        }, {
          key: "timeScale",
          value: function(e) {
            return void 0 === e ? this._timeScale : (this._timeScale = e, this)
          }
        }, {
          key: "repeats",
          value: function(e) {
            return void 0 === e ? this._repeats : void(this._repeats = e)
          }
        }, {
          key: "getPosition",
          value: function() {
            return this.position.local
          }
        }, {
          key: "convertScrollPositionToTValue",
          value: function(e) {
            return e
          }
        }, {
          key: "convertTValueToScrollPosition",
          value: function(e) {
            return e
          }
        }, {
          key: "hasDuration",
          value: function() {
            return this.duration > 0
          }
        }, {
          key: "destroy",
          value: function() {
            this._playheadEmitter.destroy(), this._playheadEmitter = null, (0, u["default"])((0, s["default"])(t.prototype), "destroy", this).call(this)
          }
        }, {
          key: "duration",
          get: function() {
            return this.keyframesDirty && this.onKeyframesDirty({
              silent: !0
            }), this.boundsMax
          }
        }]), t
      }(c);
    m.REPEAT_FOREVER = -1,
      t.exports = m
  }, {
    10: 10,
    11: 11,
    12: 12,
    15: 15,
    22: 22,
    5: 5,
    57: 57,
    6: 6,
    78: 78,
    8: 8,
    9: 9
  }],
  59: [function(e, t, A) {
    "use strict";
    var n = function(e) {
      return e.reduce(function(e, t) {
        return e[t] = t, e
      }, {})
    };
    t.exports = n
  }, {}],
  60: [function(e, t, A) {
    "use strict";
    t.exports = function(e, t) {
      if ("string" != typeof e) return e;
      try {
        return (t || document).querySelector(e) || document.querySelector(e)
      } catch (A) {
        return !1
      }
    }
  }, {}],
  61: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(6)),
      r = n(e(8)),
      a = n(e(15)),
      o = n(e(10)),
      s = n(e(9)),
      u = n(e(11)),
      l = e(2).EventEmitterMicro,
      c = e(47),
      h = {
        create: e(22),
        update: e(35),
        draw: e(31)
      },
      d = function() {},
      f = 0,
      m = function(e) {
        function t(e) {
          var A;
          return (0, i["default"])(this, t), A = (0, a["default"])(this, (0, o["default"])(t).call(this)), A.el = e.el, A.gum = e.gum, A.componentName = e.componentName, A._keyframeController = null, A
        }
        return (0, u["default"])(t, e), (0, r["default"])(t, [{
          key: "destroy",
          value: function() {
            this.el = null, this.gum = null, this._keyframeController = null, (0, s["default"])((0, o["default"])(t.prototype), "destroy", this).call(this)
          }
        }, {
          key: "addKeyframe",
          value: function(e) {
            var t = e.el || this.el;
            return (e.group || this.anim).addKeyframe(t, e)
          }
        }, {
          key: "addDiscreteEvent",
          value: function(e) {
            e.event = e.event || "Generic-Event-Name-" + f++;
            var t = void 0 !== e.end && e.end !== e.start,
              A = this.addKeyframe(e);
            return t ? (e.onEnterOnce && A.controller.once(e.event + ":enter", e.onEnterOnce), e.onExitOnce && A.controller.once(e.event + ":exit", e.onExitOnce), e.onEnter && A.controller.on(e.event + ":enter", e.onEnter), e.onExit && A.controller.on(e.event + ":exit", e.onExit)) : (e.onEventOnce && A.controller.once(e.event, e.onEventOnce), e.onEventReverseOnce && A.controller.once(e.event + ":reverse", e.onEventReverseOnce), e.onEvent && A.controller.on(e.event, e.onEvent), e.onEventReverse && A.controller.on(e.event + ":reverse", e.onEventReverse)), A
          }
        }, {
          key: "addRAFLoop",
          value: function(e) {
            var t = ["start", "end"];
            if (!t.every(function(t) {
                return e.hasOwnProperty(t)
              })) return void console.log("BubbleGum.BaseComponent::addRAFLoop required options are missing: " + t.join(" "));
            var A = new h.create;
            A.on("update", e.onUpdate || d), A.on("draw", e.onDraw || d), A.on("draw", function() {
              return A.run()
            });
            var n = e.onEnter,
              i = e.onExit;
            return e.onEnter = function() {
              A.run(), n ? n() : 0
            }, e.onExit = function() {
              A.cancel(), i ? i() : 0
            }, this.addDiscreteEvent(e)
          }
        }, {
          key: "addContinuousEvent",
          value: function(e) {
            e.onDraw || console.log("BubbleGum.BaseComponent::addContinuousEvent required option `onDraw` is missing. Consider using a regular keyframe if you do not need a callback"), e.event = e.event || "Generic-Event-Name-" + f++;
            var t = this.addKeyframe(e);
            return t.controller.on(e.event, e.onDraw), t
          }
        }, {
          key: "mounted",
          value: function() {}
        }, {
          key: "onResizeImmediate",
          value: function(e) {}
        }, {
          key: "onResizeDebounced",
          value: function(e) {}
        }, {
          key: "onBreakpointChange",
          value: function(e) {}
        }, {
          key: "anim",
          get: function() {
            return this.gum.anim
          }
        }, {
          key: "keyframeController",
          get: function() {
            return this._keyframeController || (this._keyframeController = this.anim.getControllerForTarget(this.el))
          }
        }, {
          key: "pageMetrics",
          get: function() {
            return c.pageMetrics
          }
        }]), t
      }(l);
    t.exports = m
  }, {
    10: 10,
    11: 11,
    12: 12,
    15: 15,
    2: 2,
    22: 22,
    31: 31,
    35: 35,
    47: 47,
    6: 6,
    8: 8,
    9: 9
  }],
  62: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(6)),
      r = n(e(8)),
      a = n(e(15)),
      o = n(e(10)),
      s = n(e(11)),
      u = e(2).EventEmitterMicro,
      l = e(66),
      c = e(41),
      h = e(47),
      d = e(63),
      f = {},
      m = function(e) {
        function t(e) {
          var A;
          return (0, i["default"])(this, t), A = (0, a["default"])(this, (0, o["default"])(t).call(this)), A.el = e, A.anim = c, A.components = [], A.el.getAttribute("data-anim-scroll-group") || A.el.setAttribute("data-anim-scroll-group", "bubble-gum-group"), c.on(h.EVENTS.ON_DOM_GROUPS_CREATED, function(e) {
            A.componentsInitialized = !1, A.initComponents(), A.setupEvents()
          }), c.on(h.EVENTS.ON_DOM_KEYFRAMES_CREATED, function() {
            A.components.forEach(function(e) {
              return e.mounted()
            }), A.trigger(t.EVENTS.DOM_COMPONENTS_MOUNTED)
          }), l.add(function() {
            return c.initialize()
          }), A
        }
        return (0, s["default"])(t, e), (0, r["default"])(t, [{
          key: "initComponents",
          value: function() {
            var e = Array.prototype.slice.call(this.el.querySelectorAll("[data-component-list]"));
            this.el.hasAttribute("data-component-list") && e.push(this.el);
            for (var t = 0; t < e.length; t++)
              for (var A = e[t], n = A.getAttribute("data-component-list"), i = n.split(" "), r = 0, a = i.length; r < a; r++) {
                var o = i[r];
                "" !== o && " " !== o && this.addComponent({
                  el: A,
                  componentName: o
                })
              }
            this.componentsInitialized = !0
          }
        }, {
          key: "setupEvents",
          value: function() {
            this.onResizeDebounced = this.onResizeDebounced.bind(this), this.onResizeImmediate = this.onResizeImmediate.bind(this), this.onBreakpointChange = this.onBreakpointChange.bind(this), c.on(h.PageEvents.ON_RESIZE_IMMEDIATE, this.onResizeImmediate), c.on(h.PageEvents.ON_RESIZE_DEBOUNCED, this.onResizeDebounced), c.on(h.PageEvents.ON_BREAKPOINT_CHANGE, this.onBreakpointChange)
          }
        }, {
          key: "addComponent",
          value: function(e) {
            var A = e.el,
              n = e.componentName,
              i = e.data;
            if (!d.hasOwnProperty(n)) throw "BubbleGum::addComponent could not add component to '" + A.className + "'. No component type '" + n + "' found!";
            var r = d[n];
            if (!t.componentIsSupported(r, n)) return void 0 === f[n] && (console.log("BubbleGum::addComponent unsupported component '" + n + "'. Reason: '" + n + ".IS_SUPPORTED' returned false"), f[n] = !0), null;
            var a = A.dataset.componentList || "";
            a.includes(n) || (A.dataset.componentList = a.split(" ").concat(n).join(" "));
            var o = new r({
              el: A,
              data: i,
              componentName: e.componentName,
              gum: this,
              pageMetrics: h.pageMetrics
            });
            return this.components.push(o), this.componentsInitialized && o.mounted(), o
          }
        }, {
          key: "removeComponent",
          value: function(e) {
            var t = this.components.indexOf(e);
            t !== -1 && (this.components.splice(t, 1), e.el.dataset.componentList = e.el.dataset.componentList.split(" ").filter(function(t) {
              return t !== e.componentName
            }).join(" "), e.destroy())
          }
        }, {
          key: "getComponentOfType",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement,
              A = "[data-component-list*=" + e + "]",
              n = t.matches(A) ? t : t.querySelector(A);
            return n ? this.components.find(function(t) {
              return t instanceof d[e] && t.el === n
            }) : null
          }
        }, {
          key: "getComponentsOfType",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement,
              A = "[data-component-list*=" + e + "]",
              n = t.matches(A) ? [t] : Array.from(t.querySelectorAll(A));
            return this.components.filter(function(t) {
              return t instanceof d[e] && n.includes(t.el)
            })
          }
        }, {
          key: "getComponentsForElement",
          value: function(e) {
            return this.components.filter(function(t) {
              return t.el === e
            })
          }
        }, {
          key: "onResizeImmediate",
          value: function() {
            this.components.forEach(function(e) {
              return e.onResizeImmediate(h.pageMetrics)
            })
          }
        }, {
          key: "onResizeDebounced",
          value: function() {
            this.components.forEach(function(e) {
              return e.onResizeDebounced(h.pageMetrics)
            })
          }
        }, {
          key: "onBreakpointChange",
          value: function() {
            this.components.forEach(function(e) {
              return e.onBreakpointChange(h.pageMetrics)
            })
          }
        }], [{
          key: "componentIsSupported",
          value: function(e, t) {
            var A = e.IS_SUPPORTED;
            if (void 0 === A) return !0;
            if ("function" != typeof A) return console.error('BubbleGum::addComponent error in "' + t + '".IS_SUPPORTED - it should be a function which returns true/false'), !0;
            var n = e.IS_SUPPORTED();
            return void 0 === n ? (console.error('BubbleGum::addComponent error in "' + t + '".IS_SUPPORTED - it should be a function which returns true/false'), !0) : n
          }
        }]), t
      }(u);
    m.EVENTS = {
      DOM_COMPONENTS_MOUNTED: "DOM_COMPONENTS_MOUNTED"
    }, t.exports = m
  }, {
    10: 10,
    11: 11,
    12: 12,
    15: 15,
    2: 2,
    41: 41,
    47: 47,
    6: 6,
    63: 63,
    66: 66,
    8: 8
  }],
  63: [function(e, t, A) {
    "use strict";
    t.exports = {
      BaseComponent: e(61)
    }
  }, {
    61: 61
  }],
  64: [function(e, t, A) {
    "use strict";

    function n(e) {
      return Array.prototype.indexOf.call(e.parentElement.children, e)
    }
    var i = e(12),
      r = i(e(19)),
      a = i(e(6)),
      o = i(e(8)),
      s = function() {
        function e(t) {
          (0, a["default"])(this, e), this.name = t, this.playing = !1, this.requests = []
        }
        return (0, o["default"])(e, [{
          key: "addRequest",
          value: function(e) {
            var t = this;
            this.requests.push(e), this.requests.sort(function(e, t) {
              return e.priority - t.priority
            }), this.playing || (this.playing = !0, requestAnimationFrame(function() {
              t._schedule()
            }))
          }
        }, {
          key: "removeRequest",
          value: function(e) {
            var t = this,
              A = this.requests.findIndex(function(t) {
                return t === e
              }),
              n = !1;
            A != -1 && (n = 1 === this.requests.splice(A, 1).length);
            var i = e === this.currentRequest;
            i && (clearTimeout(this.currentRequestTimeout), requestAnimationFrame(function() {
              t._schedule()
            }))
          }
        }, {
          key: "_schedule",
          value: function() {
            var e = this;
            if (0 === this.requests.length) return void(this.playing = !1);
            var t = this.requests.shift();
            this.currentRequest = t, t.callback(), this.currentRequestTimeout = setTimeout(function() {
              e.currentRequest = void 0, e.currentRequestTimeout = void 0, e._schedule()
            }, 1e3 * t.duration)
          }
        }]), e
      }(),
      u = function() {
        function e() {
          (0, a["default"])(this, e), this.buckets = {}
        }
        return (0, o["default"])(e, [{
          key: "_requestAnimationStartWithOptions",
          value: function(e) {
            var t = this,
              A = e.bucket,
              i = e.duration,
              r = e.element,
              a = e.name,
              o = e.priority;
            if ("undefined" != typeof r && (A = Math.round(r.getBoundingClientRect().top + document.documentElement.scrollTop), ("number" != typeof A || isNaN(A)) && (A = void 0), o = n(r)), "undefined" == typeof o && (o = 0), "undefined" == typeof A) {
              var u = Promise.resolve();
              return u.cancel = function() {}, u
            }
            var l, c = new Promise(function(e) {
              t.buckets[A] || (t.buckets[A] = new s(A)), l = {
                callback: e,
                duration: i,
                name: a,
                priority: o
              }, t.buckets[A].addRequest(l)
            });
            return c.cancel = function() {
              t.buckets[A].removeRequest(l)
            }, c
          }
        }, {
          key: "requestAnimationStart",
          value: function(e, t, A, n) {
            var i;
            return i = "object" == (0, r["default"])(e) && e ? e : {
              bucket: e,
              duration: t / 1e3,
              name: A,
              priority: n
            }, this._requestAnimationStartWithOptions(i)
          }
        }]), e
      }(),
      l = new u;
    t.exports = {
      CarnivalDirector: u,
      director: l,
      indexOf: n
    }
  }, {
    12: 12,
    19: 19,
    6: 6,
    8: 8
  }],
  65: [function(e, t, A) {
    "use strict";
    var n = {
        create: e(85),
        invert: e(86),
        clone: e(84),
        transpose: e(91)
      },
      i = {
        create: e(92),
        dot: e(94),
        normalize: e(97),
        length: e(96),
        cross: e(93),
        fromValues: e(95)
      },
      r = {
        create: e(98),
        transformMat4: e(100),
        fromValues: e(99)
      },
      a = (Math.PI / 180, 180 / Math.PI),
      o = 0,
      s = 1,
      u = 3,
      l = 4,
      c = 5,
      h = 7,
      d = 11,
      f = 12,
      m = 13,
      p = 15,
      g = function(e, t) {
        t = t || !1;
        for (var A = n.clone(e), o = i.create(), s = i.create(), l = i.create(), c = r.create(), f = r.create(), m = (i.create(), 0); m < 16; m++) A[m] /= A[p];
        var g = n.clone(A);
        g[u] = 0, g[h] = 0, g[d] = 0, g[p] = 1;
        var _ = (A[3], A[7], A[11], A[12]),
          I = A[13],
          b = A[14],
          C = (A[15], r.create());
        if (E(A[u]) && E(A[h]) && E(A[d])) c = r.fromValues(0, 0, 0, 1);
        else {
          C[0] = A[u], C[1] = A[h], C[2] = A[d], C[3] = A[p];
          var T = n.invert(n.create(), g),
            w = n.transpose(n.create(), T);
          c = r.transformMat4(c, C, w)
        }
        o[0] = _, o[1] = I, o[2] = b;
        var S = [i.create(), i.create(), i.create()];
        S[0][0] = A[0], S[0][1] = A[1], S[0][2] = A[2], S[1][0] = A[4], S[1][1] = A[5], S[1][2] = A[6], S[2][0] = A[8], S[2][1] = A[9], S[2][2] = A[10], s[0] = i.length(S[0]), i.normalize(S[0], S[0]), l[0] = i.dot(S[0], S[1]), S[1] = v(S[1], S[0], 1, -l[0]), s[1] = i.length(S[1]), i.normalize(S[1], S[1]), l[0] /= s[1], l[1] = i.dot(S[0], S[2]), S[2] = v(S[2], S[0], 1, -l[1]), l[2] = i.dot(S[1], S[2]), S[2] = v(S[2], S[1], 1, -l[2]), s[2] = i.length(S[2]), i.normalize(S[2], S[2]), l[1] /= s[2], l[2] /= s[2];
        var k = i.cross(i.create(), S[1], S[2]);
        if (i.dot(S[0], k) < 0)
          for (m = 0; m < 3; m++) s[m] *= -1, S[m][0] *= -1, S[m][1] *= -1, S[m][2] *= -1;
        f[0] = .5 * Math.sqrt(Math.max(1 + S[0][0] - S[1][1] - S[2][2], 0)), f[1] = .5 * Math.sqrt(Math.max(1 - S[0][0] + S[1][1] - S[2][2], 0)), f[2] = .5 * Math.sqrt(Math.max(1 - S[0][0] - S[1][1] + S[2][2], 0)), f[3] = .5 * Math.sqrt(Math.max(1 + S[0][0] + S[1][1] + S[2][2], 0)), S[2][1] > S[1][2] && (f[0] = -f[0]), S[0][2] > S[2][0] && (f[1] = -f[1]), S[1][0] > S[0][1] && (f[2] = -f[2]);
        var M = r.fromValues(f[0], f[1], f[2], 2 * Math.acos(f[3])),
          x = y(f);
        return t && (l[0] = Math.round(l[0] * a * 100) / 100, l[1] = Math.round(l[1] * a * 100) / 100, l[2] = Math.round(l[2] * a * 100) / 100, x[0] = Math.round(x[0] * a * 100) / 100, x[1] = Math.round(x[1] * a * 100) / 100, x[2] = Math.round(x[2] * a * 100) / 100, M[3] = Math.round(M[3] * a * 100) / 100), {
          translation: o,
          scale: s,
          skew: l,
          perspective: c,
          quaternion: f,
          eulerRotation: x,
          axisAngle: M
        }
      },
      v = function(e, t, A, n) {
        var r = i.create();
        return r[0] = A * e[0] + n * t[0], r[1] = A * e[1] + n * t[1], r[2] = A * e[2] + n * t[2], r
      },
      y = function(e) {
        var t, A, n, r = e[3] * e[3],
          a = e[0] * e[0],
          o = e[1] * e[1],
          s = e[2] * e[2],
          u = a + o + s + r,
          l = e[0] * e[1] + e[2] * e[3];
        return l > .499 * u ? (A = 2 * Math.atan2(e[0], e[3]), n = Math.PI / 2, t = 0, i.fromValues(t, A, n)) : l < -.499 * u ? (A = -2 * Math.atan2(e[0], e[3]), n = -Math.PI / 2, t = 0, i.fromValues(t, A, n)) : (A = Math.atan2(2 * e[1] * e[3] - 2 * e[0] * e[2], a - o - s + r), n = Math.asin(2 * l / u), t = Math.atan2(2 * e[0] * e[3] - 2 * e[1] * e[2], -a + o - s + r), i.fromValues(t, A, n))
      },
      E = function(e) {
        return Math.abs(e) < 1e-4
      },
      _ = function(e) {
        var t = String(getComputedStyle(e).transform).trim(),
          A = n.create();
        if ("none" === t || "" === t) return A;
        var i, r, a = t.slice(0, t.indexOf("("));
        if ("matrix3d" === a)
          for (i = t.slice(9, -1).split(","), r = 0; r < i.length; r++) A[r] = parseFloat(i[r]);
        else {
          if ("matrix" !== a) throw new TypeError("Invalid Matrix Value");
          for (i = t.slice(7, -1).split(","), r = i.length; r--;) i[r] = parseFloat(i[r]);
          A[o] = i[0], A[s] = i[1], A[f] = i[4], A[l] = i[2], A[c] = i[3], A[m] = i[5]
        }
        return A
      };
    t.exports = function(e, t) {
      var A = _(e);
      return g(A, t)
    }
  }, {
    100: 100,
    84: 84,
    85: 85,
    86: 86,
    91: 91,
    92: 92,
    93: 93,
    94: 94,
    95: 95,
    96: 96,
    97: 97,
    98: 98,
    99: 99
  }],
  66: [function(e, t, A) {
    "use strict";
    var n = !1,
      i = !1,
      r = [];
    t.exports = {
      NUMBER_OF_FRAMES_TO_WAIT: 30,
      add: function(e) {
        var t = this;
        if (i && e(), r.push(e), !n) {
          n = !0;
          var A = document.documentElement.scrollHeight,
            a = 0,
            o = function s() {
              var e = document.documentElement.scrollHeight;
              if (A !== e) a = 0;
              else if (a++, a >= t.NUMBER_OF_FRAMES_TO_WAIT) return void r.forEach(function(e) {
                return e()
              });
              A = e, requestAnimationFrame(s)
            };
          requestAnimationFrame(o)
        }
      }
    }
  }, {}],
  67: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(6)),
      r = n(e(8)),
      a = n(e(15)),
      o = n(e(10)),
      s = n(e(5)),
      u = n(e(11)),
      l = e(83),
      c = e(2).EventEmitterMicro,
      h = e(35),
      d = e(68),
      f = "video-loaded",
      m = "video-unloaded",
      p = "video-can-play",
      g = "video-download-complete",
      v = "",
      y = navigator.userAgent.toLowerCase();
    y.indexOf("firefox") > -1 && (v = d);
    var E, _ = function(e) {
      function t(e) {
        var A, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ((0, i["default"])(this, t), A = (0, a["default"])(this, (0, o["default"])(t).call(this)), "VIDEO" !== e.tagName.toUpperCase()) throw "@marcom/InlineVideoProxy : element should be a VIDEO tag";
        if (e.__InlineVideoProxyInstance) throw '@marcom/InlineVideoProxy : This Video element is already managed by InlineVideoProxyHub, look for the instance in "videoElement.__InlineVideoProxyInstance" ';
        return null !== e.getAttribute("src") && A.log('Warning the video already contains a SRC defined. it is not recommended to have one on load., set the "data-video-source-basepath" attribute in the video tag instead.'), A.videoElement = e, E = n.EVENTS, A._logs = n.log || !1, A._checkLogEnabled(), A.log("starting Video Loader"), A._manualLoad = n.manualLoad || !1, A._enableHardCacheClean = n.cacheClean || !1, A._enableHardCacheClean && console.error("@marcom/InlineVideoProxy : cache clean option is enabled DISABLE FOR PRODUCTION"), A._elementEnteredView = A._elementEnteredView.bind((0, s["default"])(A)), A._elementExitedView = A._elementExitedView.bind((0, s["default"])(A)), A._elementEnteredLoadingArea = A._elementEnteredLoadingArea.bind((0, s["default"])(A)), A._elementExitedLoadingArea = A._elementExitedLoadingArea.bind((0, s["default"])(A)), A._onChangeCallback = A._onChangeCallback.bind((0, s["default"])(A)), A._onChangeRetinaCallback = A._onChangeRetinaCallback.bind((0, s["default"])(A)), A.VIDEO_PREVENT_LOAD = "data-video-prevent-load", A.VIDEO_DATA_BASEPATH = "data-video-source-basepath", A.VIDEO_SOURCE_PREFIX = "data-video-source-prefix", A.VIDEO_RETINA_ENABLED = "data-video-source-retina-enabled", A.VIDEO_VIEW_AREA_KEYFRAME = "data-view-area-keyframe", A.VIDEO_LOADING_AREA_KEYFRAME = "data-loading-area-keyframe", A.animSystem = A._findAnim(), null === A.animSystem ? (A.log("anim not found"), (0, a["default"])(A, null)) : (A._scrollGroup = A.animSystem.getGroupForTarget(document.body), A.viewportEmitterMicro = n.viewportEmitterMicro, A.viewportEmitterMicro.on(l.CHANGE_EVENTS.VIEWPORT, A._onChangeCallback), A.viewportEmitterMicro.on(l.CHANGE_EVENTS.RETINA, A._onChangeRetinaCallback), A.videoStatsMap = new Map, A.keyframes = {}, "loading" === document.readyState ? document.addEventListener("readystatechange", function(e) {
          "interactive" === document.readyState && A._initVL()
        }) : A._initVL(), A.videoElement.__InlineVideoProxyInstance = (0, s["default"])(A), (0, a["default"])(A, (0, s["default"])(A)))
      }
      return (0, u["default"])(t, e), (0, r["default"])(t, [{
        key: "_initVL",
        value: function() {
          this._enhanceVideos()
        }
      }, {
        key: "_findAnim",
        value: function() {
          var e = Array.from(document.querySelectorAll("[data-anim-group],[data-anim-scroll-group],[data-anim-time-group]"));
          return e.map(function(e) {
            return e._animInfo ? e._animInfo.group : null
          }).filter(function(e) {
            return null !== e
          }), e[0] && e[0]._animInfo ? e[0]._animInfo.group.anim : (console.error("@marcom/InlineVideoProxy : AnimSystem not found, please initialize anim before instantiating vl"), null)
        }
      }, {
        key: "_checkLogEnabled",
        value: function() {
          this._logs ? this.log = function() {
            for (var e, t = arguments.length, A = new Array(t), n = 0; n < t; n++) A[n] = arguments[n];
            return (e = console).warn.apply(e, ["@marcom/InlineVideoProxy :"].concat(A))
          } : this.log = function() {}
        }
      }, {
        key: "_onChangeCallback",
        value: function(e) {
          this._changeVideoSource()
        }
      }, {
        key: "_onChangeRetinaCallback",
        value: function(e) {
          this._changeVideoSource(!0)
        }
      }, {
        key: "_getAllVideoSources",
        value: function(e) {
          var t = this;
          this._videoSourceBasepath = e.getAttribute(this.VIDEO_DATA_BASEPATH), this._videoSourceBasepath || console.error("VideoProxy :  Base path not defined, please provide a full relative path to the video with a trailing '/' "), this._videoSourcePrefix = e.getAttribute(this.VIDEO_SOURCE_PREFIX) || "", this._videoSourceRetinaEnabled = e.getAttribute(this.VIDEO_RETINA_ENABLED) || "false";
          var A = function(e) {
              var A = t._enableHardCacheClean ? "?" + Math.round(1e6 * Math.random()) : "",
                n = {};
              return n.x = "".concat(t._videoSourceBasepath).concat(t._videoSourcePrefix).concat(e, ".mp4").concat(A), n.xx = "".concat(t._videoSourceBasepath).concat(t._videoSourcePrefix).concat(e, ".mp4").concat(A), "false" !== t._videoSourceRetinaEnabled && (n.xx = "".concat(t._videoSourceBasepath).concat(t._videoSourcePrefix).concat(e, "_2x.mp4").concat(A)), n
            },
            n = this.viewportEmitterMicro.BREAKPOINTS.reduce(function(e, t, n) {
              var i = {};
              return Object.defineProperty(i, t.name, {
                value: A(t.name),
                enumerable: !0
              }), e = Object.assign(e, i)
            }, {});
          this.videoSources = n
        }
      }, {
        key: "_getVideoSource",
        value: function(e) {
          var t = this.viewportEmitterMicro.retina ? "xx" : "x",
            A = this.viewportEmitterMicro.viewport;
          this.videoSource = this.videoSources[A][t], this._addToStatsMap(e), this.viewportEmitterMicro.BREAKPOINTS.map(function(e) {
            return "vp-" + e.name
          }).forEach(function(t) {
            return e.classList.remove(t)
          }), e.classList.add("vp-" + A)
        }
      }, {
        key: "_addToStatsMap",
        value: function(e) {
          this.videoStatsMap.has(e.videoSource) || this.videoStatsMap.set(e.videoSource, {})
        }
      }, {
        key: "_updateStatsMap",
        value: function(e, t, A) {
          this.videoStatsMap.get(e.videoSource)[t] = A
        }
      }, {
        key: "_getValueStatsMap",
        value: function(e, t) {
          var A = this.videoStatsMap.get(e.videoSource);
          return null !== A[t] ? A[t] : null
        }
      }, {
        key: "_enhanceVideos",
        value: function() {
          var e = this,
            t = this.videoElement;
          this._getAllVideoSources(t), this._getVideoSource(t), this._isUnloadedVariable = !1, Object.defineProperty(this, "isUnloaded", {
            get: function() {
              return this._isUnloadedVariable
            },
            set: function(e) {
              e ? (t.classList.remove(f), t.classList.add(m)) : (t.classList.add(f), t.classList.remove(m)), this._isUnloadedVariable = e
            }
          }), Object.defineProperty(this, "currentTime", {
            get: function() {
              return this.videoElement.currentTime
            }
          }), Object.defineProperty(this, "duration", {
            get: function() {
              return t.duration ? t.duration : (this.log("Warning on duration:: wait for metadata to be loaded to get duration"), -1)
            }
          }), this.isUnloaded = !0, this.isInViewArea = !1, this.isInLoadingArea = !1, this.loadProgress = 0, this.hasMetadata = !1, this.downloadComplete = !1, this.canBePlayedThrough = !1, this._preventLoad = this._shouldPreventLoadViewportSize(t), t.setAttribute("src", v), this.promises = {}, this.promises.hasMetadata = null, this.promises.canBePlayedThrough = null, this.promises.downloadComplete = null, this._initVideoPromises(this);
          var A = function r() {
            h(function(A, n) {
              if (!e.isUnloaded) return !e.hasMetadata && t.readyState >= 1 && e._promiseResolver.hasMetadata(t), !e.canBePlayedThrough && t.readyState > 3 && e._promiseResolver.canBePlayedThrough(t), t.buffered.length && (e.loadProgress = t.buffered.end(0), t.buffered.end(0) >= .99 * t.duration) ? void e._promiseResolver.downloadComplete(t) : void r()
            })
          };
          this._startCheckStats = function() {
            A()
          }, this.animSystemVersion = 2, "function" == typeof this.animSystem.remove && (this.animSystemVersion = 3);
          var n = t.getAttribute(this.VIDEO_LOADING_AREA_KEYFRAME);
          n = null === n ? 3 === this.animSystemVersion ? {
            start: "t - 200vh",
            end: "b + 100vh"
          } : {
            start: "0% - 200vh",
            end: "100% + 100vh"
          } : JSON.parse(n), n.event = "video-proxy-loading-area";
          var i = t.getAttribute(this.VIDEO_VIEW_AREA_KEYFRAME);
          i = null === i ? 3 === this.animSystemVersion ? {
            start: "t - 100vh",
            end: "b"
          } : {
            start: "0% - 100vh",
            end: "100%"
          } : JSON.parse(i), i.event = "video-proxy-view-area", this.keyframes.loadArea = this._scrollGroup.addKeyframe(t, n), this.keyframes.loadArea.controller.on("video-proxy-loading-area:enter", this._elementEnteredLoadingArea), this.keyframes.loadArea.controller.on("video-proxy-loading-area:exit", this._elementExitedLoadingArea), this.keyframes.viewArea = this._scrollGroup.addKeyframe(t, i), this.keyframes.viewArea.controller.on("video-proxy-view-area:enter", this._elementEnteredView), this.keyframes.viewArea.controller.on("video-proxy-view-area:exit", this._elementExitedView), this.stopLoad = function() {
            var A = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            e.isUnloaded || (t.setAttribute("src", v), e.isUnloaded = !0, A ? (e.downloadComplete = !0, e.trigger(E.DOWNLOAD_CANCEL, e)) : e.trigger(E.DOWNLOAD_PAUSE, e))
          }, this.stop = function() {
            e._videoPlayPromise ? e._videoPlayPromise.then(function() {
              t.pause(), t.currentTime = 0
            })["catch"](function(A) {
              e.log("error when stopping", A, t)
            }) : t.pause()
          }, this.pause = function() {
            h(function(e, A) {
              t.pause()
            })
          }, this.play = function() {
            return new Promise(function(A) {
              return t.getAttribute("paused") ? (e.log("paused video:", t), void A(!1)) : e._shouldPreventLoadViewportSize(t) ? (A(!1), void e.log("cannot play a video in this viewport that has attribute :" + e.VIDEO_PREVENT_LOAD, t)) : void h(function(n, i) {
                h(function(n, i) {
                  setTimeout(function() {
                    e._videoPlayPromise = Object.getPrototypeOf(t).play.call(t), e.trigger("playing", t), A(t), e._videoPlayPromise && e._videoPlayPromise["catch"](function(A) {
                      e.isUnloaded && e.log("error when playing, there is no src", A, t, "this.isUnloaded:", e.isUnloaded)
                    })
                  }, 20)
                })
              })
            })
          }, this.gotoAndPlay = function() {
            var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return new Promise(function(n) {
              return t.getAttribute("paused") ? (e.log("paused video:", t), void n(!1)) : e._shouldPreventLoadViewportSize(t) ? (n(!1), void e.log("cannot play a video that has attribute :" + e.VIDEO_PREVENT_LOAD, t)) : void h(function(i, r) {
                null !== A && (t.pause(), t.currentTime = A), h(function(A, i) {
                  setTimeout(function() {
                    e._videoPlayPromise = Object.getPrototypeOf(t).play.call(t), e.trigger("playing", t), n(t), e._videoPlayPromise && e._videoPlayPromise["catch"](function(A) {
                      e.isUnloaded && e.log("error when playing, there is no src", A, t, "this.isUnloaded:", e.isUnloaded)
                    })
                  }, 20)
                })
              })
            })
          }, this.gotoAndStop = function() {
            var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return new Promise(function(n) {
              return t.getAttribute("paused") ? (e.log("paused video:", t), void n(!1)) : e._shouldPreventLoadViewportSize(t) ? (n(!1), void e.log("cannot play a video that has attribute :" + e.VIDEO_PREVENT_LOAD, t)) : void h(function(i, r) {
                null !== A && (t.pause(), t.currentTime = A, e.trigger("paused", t), n(t))
              })
            })
          }, this.startLoad = function() {
            e._startDownloading()
          }, this.loadSrc = function() {
            return e._preventLoad ? void e.log("cannot load a video that has attribute :" + e.VIDEO_PREVENT_LOAD, t) : void(e._videoPlayPromise ? e._videoPlayPromise.then(function() {
              Object.getPrototypeOf(t).load.call(t)
            })["catch"](function(A) {
              e.isUnloaded && e.log("error when loading the play function was interrupted", A, t, "isUnloaded", e.isUnloaded)
            }) : Object.getPrototypeOf(t).load.call(t))
          }
        }
      }, {
        key: "_shouldPreventLoadViewportSize",
        value: function(e) {
          if (0 === e.offsetHeight) return this.log(" this video is not displayed, make sure it has a display attribute different than 'none' on any of its ancestors"), !0;
          var t = this.viewportEmitterMicro.viewport.toUpperCase(),
            A = e.getAttribute(this.VIDEO_PREVENT_LOAD);
          if (null === A) return !1;
          if ("" === A) return !0;
          A = JSON.parse(A), A = A.map(function(e) {
            return e.toUpperCase()
          });
          var n = A.find(function(e) {
            return t === e
          });
          return void 0 != n
        }
      }, {
        key: "_initVideoPromises",
        value: function(e) {
          var t = this;
          this._promiseResolver = {}, this._promiseResolver.hasMetadata = null, this._promiseResolver.canBePlayedThrough = null, this._promiseResolver.downloadComplete = null;
          var A = function(e) {
            t._promiseResolver.hasMetadata = e
          };
          this.promises.hasMetadata = new Promise(A).then(function(e) {
            return t.hasMetadata = !0, t.trigger(E.HAS_METADATA, t), t.log(":::Video has metadata:::", e.className), e
          });
          var n = function(e) {
            t._promiseResolver.canBePlayedThrough = e
          };
          this.promises.canBePlayedThrough = new Promise(n).then(function(e) {
            return t.canBePlayedThrough = !0, t._promiseResolver.hasMetadata(e), h(function() {
              e.classList.add(p)
            }), t.trigger(E.CAN_PLAY_THROUGH, t), t.log(":::Video Ready to play:::", e.className), e
          });
          var i = function(e) {
            t._promiseResolver.downloadComplete = e
          };
          this.promises.downloadComplete = new Promise(i).then(function(e) {
            return t.downloadComplete = !0, t._promiseResolver.canBePlayedThrough(e), h(function() {
              e.classList.add(g)
            }), t.trigger(E.DOWNLOAD_COMPLETE, t), t.log(":::Video fully Downloaded:::", e.className), e
          })
        }
      }, {
        key: "_elementEnteredView",
        value: function(e) {
          if (this.trigger(E.VIDEO_ENTER_VIEW_AREA, this), this.isInViewArea = !0, e.element.autoplay) {
            e.element.currentTime = 0;
            var t = e.element.play();
            void 0 !== t && t["catch"](function(e) {})
          }
        }
      }, {
        key: "_elementExitedView",
        value: function(e) {
          this.isInViewArea = !1, this.trigger(E.VIDEO_EXIT_VIEW_AREA, this)
        }
      }, {
        key: "_elementEnteredLoadingArea",
        value: function(e) {
          this.trigger(E.VIDEO_ENTER_LOAD_AREA, this), this.isInLoadingArea = !0, this._manualLoad || this._startDownloading()
        }
      }, {
        key: "_elementExitedLoadingArea",
        value: function(e) {
          this.trigger(E.VIDEO_EXIT_LOAD_AREA, this), this.isInLoadingArea = !1
        }
      }, {
        key: "_changeVideoSource",
        value: function() {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          t && "false" === this.videoElement._videoSourceRetinaEnabled || (this.pause(), this.stopLoad(!1), this._getVideoSource(this.videoElement), this.loadProgress = 0, this.downloadComplete = !1, this.canBePlayedThrough = !1, this.hasMetadata = !1, this.isUnloaded = !0, this._preventLoad = this._shouldPreventLoadViewportSize(this.videoElement), h(function() {
            e.videoElement.classList.remove(g), e.videoElement.classList.remove(p)
          }), this._initVideoPromises(this), !this._manualLoad && this.keyframes.loadArea.isCurrentlyInRange && this._startDownloading())
        }
      }, {
        key: "_startDownloading",
        value: function() {
          this._preventLoad = this._shouldPreventLoadViewportSize(this.videoElement), this._preventLoad || this.isUnloaded && (this.videoElement.setAttribute("src", this.videoSource), this.isUnloaded = !1, this.loadSrc(), this._startCheckStats())
        }
      }]), t
    }(c);
    t.exports = _
  }, {
    10: 10,
    11: 11,
    12: 12,
    15: 15,
    2: 2,
    35: 35,
    5: 5,
    6: 6,
    68: 68,
    8: 8,
    83: 83
  }],
  68: [function(e, t, A) {
    "use strict";
    t.exports = "data:video/mp4;base64,AAAAGGZ0eXBtcDQyAAAAAG1wNDJtcDQxAAAP/m1vb3YAAABsbXZoZAAAAADXfsFZ137BWQABX5AAAB4AAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAA0YdHJhawAAAFx0a2hkAAAAAdd+wVnXfsFZAAAAAQAAAAAAAAu7AAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAQAAAAEAAAAAAAJGVkdHMAAAAcZWxzdAAAAAAAAAABAAALuwAAAAAAAQAAAAAMkG1kaWEAAAAgbWRoZAAAAADXfsFZ137BWQAAdTAAAAPpFccAAAAAAEBoZGxyAAAAAAAAAAB2aWRlAAAAAAAAAAAAAAAAH01haW5jb25jZXB0IFZpZGVvIE1lZGlhIEhhbmRsZXIAAAwobWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAM2hkbHIAAAAAAAAAAGFsaXMAAAAAAAAAAAAAAABBbGlhcyBEYXRhIEhhbmRsZXIAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAALtXN0YmwAAAtEc3RzZAAAAAAAAAABAAALNGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAEAAQAEgAAABIAAAAAAAAAAEKQVZDIENvZGluZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAreYXZjQwFNQB//4QAUZ01AH5ZSvSkGBgZAAAD6QAA6mCEBCrdo6Qk1IAAAAAEGBf////////////+iTUNTVBcOfdWkmlkokmrknsrlzzwBWDdTFUUJOHTxzQSPGJMFyJEvmzMFWFMyJEvomzJESyJOUFSWBMvnuzSFPSEFSJOHyEFMBZvpzVTFyCyTMJDFTvlzJOUFSMBDFyNPEFvlzEFGyIPSJaPOUBMyTJaFvmrzEFGyWFSUJDBMyTJaFvmrzGSBNFySBUFvnukusllnuusllzOVNySFGFSFODFyGSBNFTvpzTFBSDIySBOHFvmppzSEyPQUJNJaBUJPOvmzNBYyMlyBDUJWFvlzNBYyMmyBDUJWFvlzRVBOUyQJvnpzRVBOUyQQvnqzRVBOUyQCvnszCJUySBUFyNPEFvnzCJUySBUFyCVGGFSyTJaFvmtspuunzCJUySBUFvmlllllllzNBYyCJUySBUFvmnllllllzJOUFSyTFBSDIyTIBQFvmzFOUSPQZyDPEJOHyNPEFvmzVTFyIBEBNBSEyUSBOTGPSNvlzTBSyXJEUIvmzTBSyIFJHIUvmzWJEFPyGPSNBUvnzWJEFPyGVMMySBOHFvlzOVNyVOJUTyJOyUJDLvmllmzUJNFyTDBMFvollllzWCWyCVGGFSyGVMMOFTTvmlzWCWyCVGGFSyGVMMOFTTyUSHvmllzWCWyCVGGFSyVOJUTvlzDQCySFNPWBMyEFMBZvlzCJUySBUFyTDBMFvmzDQCyTJaFyTDBMFvozNBYyGSBNFyTJaFvblilililczISEyNBJOUBJOvmzNJOyGSBNFyTJaFvblilililczISEyMPXyEFMBZvlzTNPPUIyGBDUPSvlzISEyQSFWJFXvlzVTFyEFCMPDLJOHyGJMUFSvmzEFCMPDLJOHyBMQIBDlyPGGTFUvjmzEFCMPDLJOHyCFUByPGGTFUvjmzBEBQUJWFyEFCMPDLJOHvlzWJEFPyUZQFvnzWJEFPyQVMMEPXOyGMBHvlzPWFSTDBOyBQQSPQSJBUFyGMBHvlzDPMPVSyQSJNBSJFTvrzUSBOTGFSyDIBSBDUFSJTUJDTvrzNBUSJYyDPFGGJDJFOUTvrzFYUFOEFEyTBSvmzTUSFBNyUZQFvnzGSBNFyNCTyNPEFvlzCJUyEFQUIyMVNBvtzCJUyEFQUIyDISPNBvtzDISPNByGPSNBUvnzQJDyJOJUyRQvnrzQJDyJOJUyRTvnrzWVJyQSFTFOUBUJPOvtuzXSJUFyBVyEFMJNJUFSTvmzXSJUFyTFRyFOEyDPEFvmzXSJUFyUJNFTUBNQTvmzUJNFTUBNQyPGGTFUvlzESN/////0MhkgTRclCTRQzxBb5s10iVBckyThzBckxSckBUsjgTFb5c10iVBckxUckAUskxVL5c10iVBckCQ8kAUskxVL5czDx58jQWMkDw77czDx58jQWMhkgTRcjlTb7c0CQ8j0hBUsgzlMlGUBb5c0CQ8j0hBUskEhUxTlMhjAR75cxiWBRMhkgTRckgVBb5sxkgTRcggUxRMlCTSTh75cxkgTRckAQyyTh8gUkgThxTRTlMjTxBb5c01EhQTcg0hQVCTzskEjxFQ1MiThj75c10iVBckCQ8lCTSTh8kxSb5s10iVBckxVFCTh08iThj75sxkgTRcjlTchwUE8gTDD1xRMhjAR75cw1U1DzcgiVMhjAR075c1g0xMjTxBb5s1g0xMkxTkyQiTCVGb5c0zCQxcjTxBb5s0zCQxcgUh75swskzCQxckhRhUhTgxb5cwskzCQxckGUgTSRL5cwwsjxhkxVL5sw0sjxhkxVL5szRck1QkBTMjTxBb58zRclxSRyFBRMkMjTxBb5szRclxSRyFBRMgsjTxBb5cxTgQjBchgU1MiTlEgchBQyUyTzk75sxTgQjBchgU1MiTlBUshBQyUyTzk75s0CQ8gUsmL45s0CQ8gUsmb45swwTA8kVQTCVGb5cw0Fcj0FL5czlTclCEhQRE75czCVhcjTxBb5cwlRhhUiTh76MzSTskVQTlL5czQWMkVQTlL6pszQWMkzCQxckyWhb5cxTgzxCTh8glRhhUiTh75czD18hBTAWb5cwSUsjTxBb5cxBVAQyMlCEhQRL5swzzk1EgSThRMiTlEgckEhRL5cwSUsk0DCVMhkhUVRTg2b5cwSUskUMjxhkxVL5czSTsiREsiTlBUlgTL5swRAUFCVhcgshkgTRU75syREshkhUVRTg2b5sxiRTBMj0hBUr5cxiWBRMickD0yVCTzr5cyUzzAVBRMhz0E75cyCRUgUskMhkgTRU75cxgU1MjVTFCckhRsjRb5sxgU1Mk1QsgjDwy8jRb5swTDD18j1VMjxskCQ8jVk75swzzk1EgSThRMkhRsjCU1L5cxTgQjBciTlEgcgiR75sxTgQjBciTlEgcrWLb5cxTgQjBciTlEgcqWKb5sxTgQjBciTlEgckAzb5cxTgQjBciTlBUsgiR75sxTgQjBciTlBUsrWLb5cxTgQjBciTlBUsqWKb5sxTgQjBciTlBUskAzb5cxgU1MkhMj0FCTSWgVCTzr5s0VQTlMjTxBb58x0gSTsjTxBb5cx0gSTsj0FMk1EhTh1CL5cwRAUFCVhckVQTlMk1EhTh1CL25YpYpYpYpYpYpYpXMxBTjyUxck1EhTh1CMmb5cxBTjyUxck1EAAAAAIU4dQjIO+XMIwEMvI49I3IwVYUy+XNBUxMXJIURUNQk86+XMFVjIY9I0FTIkQO+ObMIlTIQVBQjIFVi+3MExAgHIk4NLIYwEe+XMExAgHI9AFFUXJYExUW+XMExAgHJRIE5NAFIU5TJYExUW+XNMVHJMMEwk4fI0FRIljJBIVMU5TIYwEe+XNMVHJMMEwk4fIwlNTJBIVMU5TIYwEe9uWKWKWKWKWKWKWKVzMk5RIHJnKlinJMMEwk4fIwlNTCavG9uWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKVzMk5RIHIMLKlinJMMEwk4fIwlNTCavG9uWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKVzMk5RIHINLKlinJMMEwk4fIwlNTCavG9uWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKVzMk5QVLJnKlinJMMEwk4fIwlNTCavG9uWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKVzMk5QVLIMLKlinJMMEwk4fIwlNTCavG9uWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKVzMk5QVLINLKlinJMMEwk4fIwlNTCavG9uWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKVzMk5RIHJnK1i3JMMEwk4fIwlNTCavG9uWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKVzMk5QVLJnK1i3JMMEwk4fIwlNTCavG9uWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKWKVzMQVYkMXIkRi+XMk5BVTIY9I0FS+XM5U3JAFIEwwUzJAkNO+XP+AAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAPpAAAADXNkdHAAAAAAAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAZAAAAAQAAABRzdGNvAAAAAAAAAAEAADfuAAACMnRyYWsAAABcdGtoZAAAAAHXfsFZ137BWQAAAAIAAAAAAAALuwAAAAAAAAAAAAAAAAEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAC7sAAAAAAAEAAAAAAaptZGlhAAAAIG1kaGQAAAAA137BWdd+wVkAALuAAAAQABXHAAAAAABEaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAACNNYWluY29uY2VwdCBNUDQgU291bmQgTWVkaWEgSGFuZGxlcgAAAT5taW5mAAAAEHNtaGQAAAAAAAAAAAAAADNoZGxyAAAAAAAAAABhbGlzAAAAAAAAAAAAAAAAQWxpYXMgRGF0YSBIYW5kbGVyAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAM9zdGJsAAAAW3N0c2QAAAAAAAAAAQAAAEttcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAAu4AAAAAAACdlc2RzAAAAAAMZAAAQBBFAFQAGAAAE2LkABNf9BQIRkAYBAgAAABhzdHRzAAAAAAAAAAEAAAAEAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAABAAAAAEAAAAkc3RzegAAAAAAAAAAAAAABAAAA08AAANOAAADTgAAA08AAAAUc3RjbwAAAAAAAAABAAA4BwAAAEB1ZHRhAAAAF6lUSU0ACwAAMDA7MDA7MDA7MDAAAAARqVRTQwAFAAAzMDAwMAAAABCpVFNaAAQAADEwMDEAABs+dXVpZL56z8uXqULonHGZlJHjr6w8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MCA3OS4xNjA0NTEsIDIwMTcvMDUvMDYtMDE6MDg6MjEgICAgICAgICI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICB4bWxuczp4bXBETT0iaHR0cDovL25zLmFkb2JlLmNvbS94bXAvMS4wL0R5bmFtaWNNZWRpYS8iCiAgICB4bWxuczpzdERpbT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL0RpbWVuc2lvbnMjIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA3LTI1VDE3OjA3OjUzLTA3OjAwIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wNy0yNVQxNzowNzo1My0wNzowMCIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wNy0yNVQxNzowNzo1My0wNzowMCIKICAgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBBZnRlciBFZmZlY3RzIENDIDIwMTcgKE1hY2ludG9zaCkiCiAgIHhtcERNOnZpZGVvRnJhbWVSYXRlPSIyOS45NzAwMzAiCiAgIHhtcERNOnZpZGVvRmllbGRPcmRlcj0iUHJvZ3Jlc3NpdmUiCiAgIHhtcERNOnZpZGVvUGl4ZWxBc3BlY3RSYXRpbz0iMS8xIgogICB4bXBETTphdWRpb1NhbXBsZVJhdGU9IjQ4MDAwIgogICB4bXBETTphdWRpb1NhbXBsZVR5cGU9IjE2SW50IgogICB4bXBETTphdWRpb0NoYW5uZWxUeXBlPSJTdGVyZW8iCiAgIHhtcERNOnN0YXJ0VGltZVNjYWxlPSIzMDAwMCIKICAgeG1wRE06c3RhcnRUaW1lU2FtcGxlU2l6ZT0iMTAwMSIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmNzkwNDVlMi1lMTY1LTRjZGMtYWUyYS00NTM3ZjZjNGRlMjIiCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImEyMGM2NTBkLTBlYjEtYjcxOC1kNmUwLTRlNjUwMDAwMDAzYiIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjI3ZTQ2NWVjLWNjMzctNDk1My1hNDI4LTVkNTYxYTdlOGY4MCIKICAgZGM6Zm9ybWF0PSJILjI2NCI+CiAgIDx4bXBETTpkdXJhdGlvbgogICAgeG1wRE06dmFsdWU9Ijc2ODAiCiAgICB4bXBETTpzY2FsZT0iMS85MDAwMCIvPgogICA8eG1wRE06dmlkZW9GcmFtZVNpemUKICAgIHN0RGltOnc9IjE2IgogICAgc3REaW06aD0iMTYiCiAgICBzdERpbTp1bml0PSJwaXhlbCIvPgogICA8eG1wRE06c3RhcnRUaW1lY29kZQogICAgeG1wRE06dGltZUZvcm1hdD0iMjk5N0Ryb3BUaW1lY29kZSIKICAgIHhtcERNOnRpbWVWYWx1ZT0iMDA7MDA7MDA7MDAiLz4KICAgPHhtcERNOmFsdFRpbWVjb2RlCiAgICB4bXBETTp0aW1lVmFsdWU9IjAwOzAwOzAwOzAwIgogICAgeG1wRE06dGltZUZvcm1hdD0iMjk5N0Ryb3BUaW1lY29kZSIvPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0iNjU0YzBhZTQtY2I1My0yZjUxLWIyNzgtYWU5NzAwMDAwMDY4IgogICAgICBzdEV2dDp3aGVuPSIyMDE4LTA3LTI1VDE3OjA3OjUzLTA3OjAwIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBBZG9iZSBNZWRpYSBFbmNvZGVyIENDIDIwMTcuMSAoTWFjaW50b3NoKSIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmYyMDhiNDYzLWYzMWYtNDk3Zi1iNDJjLWZhNWI2ZjEwY2VhZiIKICAgICAgc3RFdnQ6d2hlbj0iMjAxOC0wNy0yNVQxNzowNTowNy0wNzowMCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgQWZ0ZXIgRWZmZWN0cyBDQyAyMDE3IChNYWNpbnRvc2gpIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmMwYWU4MmU0LTdmNmMtNDE0OS04YjEyLTgzMjIwYWU3MzkyNyIKICAgICAgc3RFdnQ6d2hlbj0iMjAxOC0wNy0yNVQxNzowNjowMy0wNzowMCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgQWZ0ZXIgRWZmZWN0cyBDQyAyMDE3IChNYWNpbnRvc2gpIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvY29udGVudCIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2ZTIwMjNlNC1jY2JjLTQxN2EtODMyMC05YWIwNzMzY2ZlYWUiCiAgICAgIHN0RXZ0OndoZW49IjIwMTgtMDctMjVUMTc6MDY6MDMtMDc6MDAiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIEFmdGVyIEVmZmVjdHMgQ0MgMjAxNyAoTWFjaW50b3NoKSIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplNWUyYWRlNC1jNzk2LTQ5ZWMtOWVkOS05Y2Y0Yzg3NWEzNzQiCiAgICAgIHN0RXZ0OndoZW49IjIwMTgtMDctMjVUMTc6MDc6NTMtMDc6MDAiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIEFkb2JlIE1lZGlhIEVuY29kZXIgQ0MgMjAxNy4xIChNYWNpbnRvc2gpIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY3OTA0NWUyLWUxNjUtNGNkYy1hZTJhLTQ1MzdmNmM0ZGUyMiIKICAgICAgc3RFdnQ6d2hlbj0iMjAxOC0wNy0yNVQxNzowNzo1My0wNzowMCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgQWRvYmUgTWVkaWEgRW5jb2RlciBDQyAyMDE3LjEgKE1hY2ludG9zaCkiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii9tZXRhZGF0YSIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgIDx4bXBNTTpEZXJpdmVkRnJvbQogICAgc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNzhlMGNhYy04YzI0LTQ3OWItYTA2Mi0xZmU4MzgxZmM0NDciCiAgICBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM3OGUwY2FjLThjMjQtNDc5Yi1hMDYyLTFmZTgzODFmYzQ0NyIKICAgIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmMjA4YjQ2My1mMzFmLTQ5N2YtYjQyYy1mYTViNmYxMGNlYWYiLz4KICAgPHhtcE1NOkluZ3JlZGllbnRzPgogICAgPHJkZjpCYWc+CiAgICAgPHJkZjpsaQogICAgICBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZjZTE1MDM0LWQ2MTAtNGI2NS1hMzI0LTMwMWJjYWVlNTc2MyIKICAgICAgc3RSZWY6ZnJvbVBhcnQ9InRpbWU6MGQ4MDA4ZjI0MDAwMCIKICAgICAgc3RSZWY6dG9QYXJ0PSJ0aW1lOjBkODAwOGYyNDAwMDAiCiAgICAgIHN0UmVmOm1hc2tNYXJrZXJzPSJOb25lIi8+CiAgICA8L3JkZjpCYWc+CiAgIDwveG1wTU06SW5ncmVkaWVudHM+CiAgIDx4bXBNTTpQYW50cnk+CiAgICA8cmRmOkJhZz4KICAgICA8cmRmOmxpPgogICAgICA8cmRmOkRlc2NyaXB0aW9uCiAgICAgICBkYzpmb3JtYXQ9ImFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5hZnRlcmVmZmVjdHMuY29tcCIKICAgICAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NmNlMTUwMzQtZDYxMC00YjY1LWEzMjQtMzAxYmNhZWU1NzYzIj4KICAgICAgPGRjOnRpdGxlPgogICAgICAgPHJkZjpBbHQ+CiAgICAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5Db21wIDE8L3JkZjpsaT4KICAgICAgIDwvcmRmOkFsdD4KICAgICAgPC9kYzp0aXRsZT4KICAgICAgPHhtcE1NOkluZ3JlZGllbnRzPgogICAgICAgPHJkZjpCYWc+CiAgICAgICAgPHJkZjpsaQogICAgICAgICBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmMzOWMzZjE4LWUwNzUtNDI5Zi1hYzNkLTFmYThhMGVlOTI5YyIKICAgICAgICAgc3RSZWY6ZnJvbVBhcnQ9InRpbWU6MGQ4MDA4ZjI0MDAwMCIKICAgICAgICAgc3RSZWY6dG9QYXJ0PSJ0aW1lOjBkODAwOGYyNDAwMDAiCiAgICAgICAgIHN0UmVmOm1hc2tNYXJrZXJzPSJOb25lIi8+CiAgICAgICA8L3JkZjpCYWc+CiAgICAgIDwveG1wTU06SW5ncmVkaWVudHM+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgIDwvcmRmOmxpPgogICAgIDxyZGY6bGk+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24KICAgICAgIGRjOmZvcm1hdD0iYXBwbGljYXRpb24vdm5kLmFkb2JlLmFmdGVyZWZmZWN0cy5sYXllciIKICAgICAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YzM5YzNmMTgtZTA3NS00MjlmLWFjM2QtMWZhOGEwZWU5MjljIj4KICAgICAgPGRjOnRpdGxlPgogICAgICAgPHJkZjpBbHQ+CiAgICAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5XaGl0ZSBTb2xpZCAxPC9yZGY6bGk+CiAgICAgICA8L3JkZjpBbHQ+CiAgICAgIDwvZGM6dGl0bGU+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgIDwvcmRmOmxpPgogICAgPC9yZGY6QmFnPgogICA8L3htcE1NOlBhbnRyeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PgAADIpmcmVlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFtZGF0AAAAAAAADWMAAAAVZYiAQABPb/73gb8yy1cB6AAAAAEKIRAFAKAb/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADeGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/yEQBQCgG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADf/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3hYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7yEQBQCgG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADf/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3hYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+yEQBQCgG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADf/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3hgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdM=";
  }, {}],
  69: [function(e, t, A) {
    "use strict";

    function n(e) {
      var t, A = [{
          name: "small",
          mediaQuery: "only screen and (max-width: 735px)"
        }, {
          name: "medium",
          mediaQuery: "only screen and (min-width: 736px) and (max-width: 1068px)"
        }, {
          name: "large",
          mediaQuery: "only screen and (min-width: 1069px)"
        }],
        n = !!e.breakpoints,
        i = e.breakpoints;
      return n ? t = new s({
        breakpoints: i
      }) : (y || (y = new s({
        breakpoints: A
      })), t = y), t
    }

    function i(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      t.viewportEmitterMicro = n(t);
      var A = new u(e, t);
      return E.push(A), A
    }
    var r = e(12),
      a = r(e(6)),
      o = r(e(8)),
      s = e(83),
      u = e(67),
      l = "downloadCompleteEvent",
      c = "canplaythroughevent",
      h = "hasmetadataevent",
      d = "downloadPauseEvent",
      f = "downloadCanceledEvent",
      m = "videoEnterLoadArea",
      p = "videoExitLoadArea",
      g = "videoEnterViewArea",
      v = "videoExitViewArea",
      y = null,
      E = [],
      _ = function() {
        function e() {
          throw (0, a["default"])(this, e), "InlineVideoProxyHub: cannot be instantiated, use 'InlineVideoProxyHub.load'"
        }
        return (0, o["default"])(e, null, [{
          key: "newVideoProxy",
          value: function(t) {
            var A = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Object.assign(A, {
              EVENTS: e.EVENTS
            }), i(t, A)
          }
        }]), e
      }();
    _.videoInstances = E, _.EVENTS = {}, _.EVENTS.HAS_METADATA = h, _.EVENTS.DOWNLOAD_COMPLETE = l, _.EVENTS.CAN_PLAY_THROUGH = c, _.EVENTS.DOWNLOAD_PAUSE = d, _.EVENTS.DOWNLOAD_CANCEL = f, _.EVENTS.VIDEO_ENTER_VIEW_AREA = g, _.EVENTS.VIDEO_ENTER_LOAD_AREA = m, _.EVENTS.VIDEO_EXIT_VIEW_AREA = v, _.EVENTS.VIDEO_EXIT_LOAD_AREA = p, t.exports = _
  }, {
    12: 12,
    6: 6,
    67: 67,
    8: 8,
    83: 83
  }],
  70: [function(e, t, A) {
    "use strict";
    var n = e(73),
      i = e(72),
      r = e(74),
      a = e(76),
      o = {};
    o.motionsArray = [], o.linkedMotionsArray = [], o.setMotion = function(e, t) {
      this._tempMotion && (this._tempMotion._endMotionChain(), this._tempMotion = null);
      var A = o.motionsArray.length;
      return this._tempMotion = new n("locomotion-" + A), this._tempMotion.startMotionChain(e, t), o.motionsArray.push(this._tempMotion), this._tempMotion
    }, o.cloneMotion = function(e) {
      var t = new n(e.animationName + "_c" + o.motionsArray.length);
      return t._motionArray = e._motionArray.map(function(e) {
        return new r(e.duration, e.options, e.isDelay)
      }), t._addCSSclass(), o.motionsArray.push(t), t
    }, o.createTimeline = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = new a(e);
      return t
    }, o.linkMotions = function() {
      this._tempMotion && (this._tempMotion._endMotionChain(), this._tempMotion = null);
      for (var e = arguments.length, t = new Array(e), A = 0; A < e; A++) t[A] = arguments[A];
      var n = new i(t);
      return o.linkedMotionsArray.push(n), n
    }, t.exports = o
  }, {
    72: 72,
    73: 73,
    74: 74,
    76: 76
  }],
  71: [function(e, t, A) {
    "use strict";
    var n = e(74),
      i = function(e, t) {
        for (var A = "@keyframes " + e + "{\r", n = t.reduce(function(e, t) {
            return e + t.duration
          }, 0), i = a(t), o = 0, s = 0; s < i.length; s++) {
          var u = i[s];
          if (i.length - 1 === s) o = 100;
          else {
            var l = (u.duration / n * 100).toFixed(2);
            o += Number(l)
          }
          var c = r(u);
          A += "\t".concat(o, "%{").concat(c, "}\r")
        }
        return A += "}\n", A += ".".concat(e, " { animation: ").concat(e, " ").concat(n, "ms linear 0s normal 1 both; }")
      },
      r = function(e) {
        var t = "",
          A = e.options;
        A = s(A), A = o(A);
        for (var n in A)
          if (A.hasOwnProperty(n)) {
            var i = A[n];
            t += n + ":" + i + ";"
          } return t
      },
      a = function(e) {
        for (var t = e, A = 1; A < t.length; A++) {
          var n = t[A],
            i = n.options;
          i = Object.assign({}, t[A - 1].options, i), "delayed" in i && (delete i.delayed, i.transform = ""), n.options = i
        }
        return t
      },
      o = function(e) {
        var t = Object.assign({}, e);
        for (var A in t)
          if (t.hasOwnProperty(A)) {
            var n = t[A];
            "ease" === A && (t["animation-timing-function"] = n, delete t.ease)
          } return t
      },
      s = function(e) {
        var t = Object.assign({}, e),
          A = "",
          i = function(e) {
            if (t.hasOwnProperty(e)) {
              var i = t[e];
              if ("auto" === i) delete t[e];
              else switch (String(i).startsWith("--") && (i = "var(".concat(i, ")")), e) {
                case "y":
                  A += "translateY(".concat(i, ") "), delete t.y;
                  break;
                case "x":
                  A += "translateX(".concat(i, ") "), delete t.x;
                  break;
                case "z":
                  A += "translateZ(".concat(i, ") "), delete t.z;
                  break;
                default:
                  n.transformProps.forEach(function(n) {
                    e === n && (A += "".concat(n, "(").concat(i, ") "), delete t[n])
                  })
              }
            }
          };
        for (var r in t) i(r);
        return "" !== A && (t.transform = A), t
      },
      u = function(e, t) {
        for (var A = "", n = "", i = "", r = 0, a = 0; a < t.length; a++) {
          var o = t[a];
          A += o.animationName, n += o.duration + "ms", i += r + "ms", r += o.duration, a < t.length - 1 && (A += ", ", n += ", ", i += ", ")
        }
        return animationString = ".".concat(e, " { \n\t\tanimation-name: ").concat(A, ";\n\t\tanimation-duration: ").concat(n, ";\n\t\tanimation-delay: ").concat(i, ";\n\t\tanimation-timing-function: linear;\n\t\tanimation-iteration-count: 1;\n\t\tanimation-fill-mode: both;\n\t\tanimation-direction: normal;\n\t}"), {
          animationNames: A,
          animationDurations: n,
          animationDelays: i,
          animationString: animationString
        }
      };
    t.exports = {
      StyleStringGenerator: i,
      AnimationChainString: u
    }
  }, {
    74: 74
  }],
  72: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(6)),
      r = n(e(8)),
      a = (e(73), e(71)),
      o = a.AnimationChainString,
      s = e(75),
      u = function() {
        function e(t) {
          (0, i["default"])(this, e), this._id = t.reduce(function(e, t) {
            return e + "-" + t._id
          }, ""), this.styleElement = document.createElement("style"), this.className = "locomotion-linked" + this._id, this._linkedMotionArray = t, this._addCSSClass()
        }
        return (0, r["default"])(e, [{
          key: "_addCSSClass",
          value: function() {
            var e = o(this.className, this._linkedMotionArray),
              t = e.animationNames,
              A = (e.animationDurations, e.animationDelays, e.animationString);
            this.animationName = t, this.styleElement.appendChild(document.createTextNode(A)), document.head.appendChild(this.styleElement)
          }
        }, {
          key: "addToElement",
          value: function(e, t, A) {
            return t.delay && (console.warn("Locomotion::LinkedMotion: the option 'delay' cannot be changed when using linked animation"), delete t.delay), new s(e, t, A, this)
          }
        }]), e
      }();
    t.exports = u
  }, {
    12: 12,
    6: 6,
    71: 71,
    73: 73,
    75: 75,
    8: 8
  }],
  73: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(6)),
      r = n(e(8)),
      a = e(74),
      o = e(75),
      s = e(71),
      u = s.StyleStringGenerator,
      l = function() {
        function e(t) {
          (0, i["default"])(this, e), this.animationName = t, this._createStyleElement(), this._motionArray = [], this._cssCreated = !1, this._addProperties()
        }
        return (0, r["default"])(e, [{
          key: "startMotionChain",
          value: function(e) {
            var t = this,
              A = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this._timeoutId = setTimeout(function() {
              t._endMotionChain()
            }, 0), this._motionArray.push(new a(e, A))
          }
        }, {
          key: "_createStyleElement",
          value: function() {
            this.styleElement = document.createElement("style")
          }
        }, {
          key: "_addProperties",
          value: function() {
            this._delay = 0, Object.defineProperty(this, "delay", {
              enumerable: !0,
              get: function() {
                return this._delay
              },
              set: function(e) {
                this._delay = e;
                var t = this._motionArray.reduce(function(e, t) {
                    if (t.isDelay) return e;
                    var A = Object.keys(t.options),
                      n = {};
                    return A.forEach(function(e) {
                      Object.defineProperty(n, e, {
                        enumerable: !0,
                        value: "inherit"
                      })
                    }), Object.assign(e, n)
                  }, {
                    delayed: "".concat(e, "ms")
                  }),
                  A = new a(e, t, (!0));
                A.clearTransformProp(), this._motionArray[0].isDelay ? this._motionArray[0] = A : this._motionArray.unshift(A), this._modifyCSSclass()
              }
            }), Object.defineProperty(this, "duration", {
              enumerable: !0,
              get: function() {
                return this._motionArray.reduce(function(e, t) {
                  return e + t.duration
                }, 0)
              }
            })
          }
        }, {
          key: "setMotion",
          value: function(e, t) {
            return this._motionArray.push(new a(e, t)), this._modifyCSSclass(), this
          }
        }, {
          key: "addToElement",
          value: function(e, t) {
            return new o(e, t, this)
          }
        }, {
          key: "_endMotionChain",
          value: function() {
            this._cssCreated || (clearTimeout(this._timeoutId), this._addCSSclass())
          }
        }, {
          key: "_addCSSclass",
          value: function() {
            var e = u(this.animationName, this._motionArray);
            this._cssCreated ? (this.styleElement.removeChild(this.styleElement.childNodes[0]), this.styleElement.appendChild(document.createTextNode(e))) : (this.styleElement.appendChild(document.createTextNode(e)), document.head.appendChild(this.styleElement)), this._cssCreated = !0
          }
        }, {
          key: "_modifyCSSclass",
          value: function() {
            this._cssCreated && this._addCSSclass()
          }
        }]), e
      }();
    t.exports = l
  }, {
    12: 12,
    6: 6,
    71: 71,
    74: 74,
    75: 75,
    8: 8
  }],
  74: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(19)),
      r = function a(e) {
        var t = this,
          A = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (void 0 === e || !Number.isInteger(e) || e < 0) throw "Locomotion::MotionDefinition: 'duration' was not correctly defined for this Motion, use a number in milliseconds >= 0";
        if (void 0 === A || "object" !== (0, i["default"])(A) || 0 === Object.keys(A).length) throw "Locomotion::MotionDefinition: 'options' were not passed in correctly, please reffer to list of available animatable attributes.";
        this.duration = e, this.options = A, this.isDelay = n, this.clearTransformProp = function() {
          a.transformProps.forEach(function(e) {
            e in t.options && delete t.options[e]
          }), t.options.transform = "inherit"
        }
      };
    r.transformProps = ["x", "y", "z", "matrix", "translate", "translateX", "translateY", "scale", "scaleX", "scaleY", "rotate", "skew", "skewX", "skewY", "matrix3d", "translate3d", "translateZ", "scale3d", "scaleZ", "rotate3d", "rotateX", "rotateY", "rotateZ", "perspective"], t.exports = r
  }, {
    12: 12,
    19: 19
  }],
  75: [function(e, t, A) {
    "use strict";
    var n = function(e) {
      function t(e, t) {
        e.duration && (t.style.animationDuration = e.duration), e.timingFunction && (t.style.animationTimingFunction = e.timingFunction), e.delay && (t.style.animationDelay = e.delay), e.direction && (t.style.animationDirection = e.direction), e.iterationCount && (t.style.animationIterationCount = e.iterationCount), e.fillMode && (t.style.animationFillMode = e.fillMode), e.playState && (t.style.animationPlayState = e.playState)
      }

      function A(e, t) {
        for (var A in e)
          if (e.hasOwnProperty(A)) {
            var n = e[A];
            t.style.setProperty("--".concat(A), n)
          }
      }

      function n(e) {
        var t = e.getBoundingClientRect(),
          A = {};
        A.width = t.width, A.height = t.height, A.top = window.scrollY + t.top, A.left = window.scrollX + t.left, A.right = A.left + A.width, A.bottom = A.top + A.height;
        for (var n in A)
          if (A.hasOwnProperty(n)) {
            var i = A[n];
            e.style.setProperty("--".concat(n), i + "px")
          }
      }
      var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = arguments.length > 2 ? arguments[2] : void 0;
      this.element = e, this.motion = r, n(this.element), i.variables && A(i.variables, this.element), this.isScrubbingAnimation = !1, t(i, this.element), this.element.classList.add(this.motion.animationName), this.restart = function() {
        var e = this;
        this.isScrubbingAnimation && (this.element.style.animationDelay = "0ms", this.isScrubbingAnimation = !1), this.element.style.animationName = "none", requestAnimationFrame(function() {
          requestAnimationFrame(function() {
            e.element.style.animationPlayState = "running", e.element.style.animationName = e.motion.animationName
          })
        })
      }, this.gotoAndStop = function(e) {
        var t = this;
        this.isScrubbingAnimation ? this.element.style.animationDelay = this.motion.duration * e * -1 + "ms" : (this.element.style.animationName = "none", this.element.style.animationPlayState = "paused", this.element.style.animationDelay = this.motion.duration * e * -1 + "ms", requestAnimationFrame(function() {
          requestAnimationFrame(function() {
            t.element.style.animationName = t.motion.animationName, t.isScrubbingAnimation = !0
          })
        }))
      }, this.play = function() {
        this.element.style.animationPlayState = "running"
      }, this.reverse = function() {
        this.element.style.animationDirection = "reverse", this.restart()
      }, this.pause = function() {
        this.element.style.animationPlayState = "paused"
      }, this.remove = function() {
        this.element.classList.remove(this.motion.animationName)
      }, this.setCSSVariables = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        A(e, this.element)
      }
    };
    t.exports = n
  }, {}],
  76: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(6)),
      r = n(e(8)),
      a = n(e(15)),
      o = n(e(10)),
      s = n(e(5)),
      u = n(e(11)),
      l = e(2).EventEmitterMicro,
      c = function(e) {
        function t(e) {
          var A;
          return (0, i["default"])(this, t), A = (0, a["default"])(this, (0, o["default"])(t).call(this)), A.motionElementArray = e || [], A.duration = 0, A._longestDurationMotionElement = null, A._animationEndHandler = A._animationEndHandler.bind((0, s["default"])(A)), A
        }
        return (0, u["default"])(t, e), (0, r["default"])(t, [{
          key: "_setLongestDurationMotionElement",
          value: function(e) {
            this._longestDurationMotionElement && this._longestDurationMotionElement != e && this._longestDurationMotionElement.element.removeEventListener("animationend", this._animationEndHandler), this._longestDurationMotionElement = e, this._longestDurationMotionElement.element.addEventListener("animationend", this._animationEndHandler)
          }
        }, {
          key: "_animationEndHandler",
          value: function(e) {
            this.trigger("animationend", this)
          }
        }, {
          key: "addMotionElement",
          value: function(e) {
            var t = this;
            this.motionElementArray.push(e), this.duration = Math.max.apply(null, this.motionElementArray.map(function(e) {
              return t._setLongestDurationMotionElement(e), e.motion.duration
            }))
          }
        }, {
          key: "removeMotionElement",
          value: function(e) {
            var t = this.motionElementArray.indexOf(e);
            this.motionElementArray.splice(t, 1), this.duration = Math.max.apply(null, this.motionElementArray.map(function(e) {
              return e.motion.duration
            }))
          }
        }, {
          key: "gotoAndStop",
          value: function(e) {
            var t = this;
            this.motionElementArray.forEach(function(A) {
              var n = A.motion.duration / t.duration,
                i = Math.min(e / n, 1);
              A.gotoAndStop(i)
            })
          }
        }, {
          key: "restart",
          value: function() {
            this.motionElementArray.forEach(function(e) {
              e.restart()
            })
          }
        }, {
          key: "play",
          value: function() {
            this.motionElementArray.forEach(function(e) {
              e.play()
            })
          }
        }, {
          key: "pause",
          value: function() {
            this.motionElementArray.forEach(function(e) {
              e.pause()
            })
          }
        }, {
          key: "remove",
          value: function() {
            this.motionElementArray.forEach(function(e) {
              e.remove()
            })
          }
        }]), t
      }(l);
    t.exports = c
  }, {
    10: 10,
    11: 11,
    12: 12,
    15: 15,
    2: 2,
    5: 5,
    6: 6,
    8: 8
  }],
  77: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(19));
    ! function(e, n) {
      if ("object" === ("undefined" == typeof A ? "undefined" : (0, i["default"])(A)) && "object" === ("undefined" == typeof t ? "undefined" : (0, i["default"])(t))) t.exports = n();
      else if ("function" == typeof define && define.amd) define([], n);
      else {
        var r = n();
        for (var a in r)("object" === ("undefined" == typeof A ? "undefined" : (0, i["default"])(A)) ? A : e)[a] = r[a]
      }
    }(window, function() {
      return function(e) {
        function t(n) {
          if (A[n]) return A[n].exports;
          var i = A[n] = {
            i: n,
            l: !1,
            exports: {}
          };
          return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }
        var A = {};
        return t.m = e, t.c = A, t.d = function(e, A, n) {
          t.o(e, A) || Object.defineProperty(e, A, {
            enumerable: !0,
            get: n
          })
        }, t.r = function(e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, t.t = function(e, A) {
          if (1 & A && (e = t(e)), 8 & A) return e;
          if (4 & A && "object" === (0, i["default"])(e) && e && e.__esModule) return e;
          var n = Object.create(null);
          if (t.r(n), Object.defineProperty(n, "default", {
              enumerable: !0,
              value: e
            }), 2 & A && "string" != typeof e)
            for (var r in e) t.d(n, r, function(t) {
              return e[t]
            }.bind(null, r));
          return n
        }, t.n = function(e) {
          var A = e && e.__esModule ? function() {
            return e["default"]
          } : function() {
            return e
          };
          return t.d(A, "a", A), A
        }, t.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 2)
      }([function(e, t, A) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n;
        ! function(e) {
          e[e.Right = 1] = "Right", e[e.Bottom = 2] = "Bottom"
        }(n = t.Position || (t.Position = {}));
        var i;
        ! function(e) {
          e[e.LowRes = 1] = "LowRes", e[e.HiRes = 2] = "HiRes"
        }(i = t.Quality || (t.Quality = {}));
        var r;
        ! function(e) {
          e[e.NonRetina = 1] = "NonRetina", e[e.Retina = 2] = "Retina"
        }(r = t.Display || (t.Display = {}));
        var a;
        ! function(e) {
          e[e.Vertex = 1] = "Vertex", e[e.Fragment = 2] = "Fragment"
        }(a = t.WebGLShaderStage || (t.WebGLShaderStage = {}));
        var o;
        ! function(e) {
          e[e.No = 0] = "No", e[e.Yes = 1] = "Yes"
        }(o = t.Debug || (t.Debug = {}));
        var s;
        ! function(e) {
          e.IncorrectTextureAtlas = "Texture atlas needs to be of type: HTMLImageElement, HTMLVideoElement or HTMLCanvasElement.", e.IncorrectTextureAtlasDimensions = "Texture atlas dimensions need to be Power of 2.", e.RendererNotReady = "Renderer is not ready.", e.IncorrectDimensions = "Verify the dimensions specified to create HiDPI canvas.", e.NaN = "Renderer dimensions should be integers values.", e.NoCanvasElement = "HTMLCanvasElement is not present in the current client.", e.NoGLContext = "WebGLRenderingContext is not present in the current client.", e.NoGLRenderingContext = "Error while retrieving the webGL rendering context.", e.WebGLCompileError = "webGL shader program failed to compile.", e.NoShaderSourceOrStage = "Error while retrieving the GLSL source or shader stage.", e.ShaderCompileError = "Shader failed to compile.", e.ProgramCompileError = "WebGL program failed to compile.", e.NoWebGLProgram = "Error while retrieving the webGL shader program."
        }(s = t.ErrorMessage || (t.ErrorMessage = {}))
      }, function(e, t, A) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = A(4),
          i = A(5),
          r = A(6),
          a = A(7),
          o = A(8),
          s = A(9),
          u = A(10),
          l = A(11),
          c = A(12),
          h = A(13);
        t.Utils = {
          validateElementTagName: n.validateElementTagName,
          validateElementDimensions: i.validateElementDimensions,
          getDevicePixelRatio: r.getDevicePixelRatio,
          createHiDPICanvas: a.createHiDPICanvas,
          getWebGLRenderingContext: o.getWebGLRenderingContext,
          getCompiledShader: s.getCompiledShader,
          getWebGLShaderProgram: u.getWebGLShaderProgram,
          bindWebGLBufferToTarget: l.bindWebGLBufferToTarget,
          bindWebGLTextureToTarget: c.bindWebGLTextureToTarget,
          isPowerOfTwo: h.isPowerOfTwo
        }
      }, function(e, t, A) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = A(0);
        t.Position = n.Position, t.Quality = n.Quality, t.Debug = n.Debug;
        var i = A(3);
        t.createLumaMatte = i.createLumaMatte
      }, function(e, t, A) {
        var n = this && this.__importDefault || function(e) {
          return e && e.__esModule ? e : {
            "default": e
          }
        };
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var i = A(0),
          r = A(1),
          a = n(A(14)),
          o = n(A(15)),
          s = n(A(16)),
          u = function() {
            function e(e) {
              this.descriptor = {
                textureAtlas: null,
                width: 256,
                height: 256,
                position: i.Position.Right,
                resolution: i.Quality.HiRes,
                powerPreference: "low-power",
                debug: i.Debug.No
              }, this.canvasEl = null, this.glContextStrict = null, this.shaderProgram = null, this.textureReference = null, this.isRendererReady = !1, this.descriptor = Object.assign(this.descriptor, e)
            }
            return e.prototype.composite = function() {
              var e = this.descriptor.textureAtlas,
                t = this.descriptor;
              if (!r.Utils.validateElementTagName(e)) throw new Error(this.name + "::composite - " + i.ErrorMessage.IncorrectTextureAtlas);
              if (!r.Utils.validateElementDimensions(e)) throw new Error(this.name + "::composite - " + i.ErrorMessage.IncorrectTextureAtlasDimensions);
              var A = {
                width: t.width,
                height: t.height,
                resolution: t.resolution
              };
              this.canvasEl = r.Utils.createHiDPICanvas(A);
              var n = {
                canvasEl: this.canvasEl,
                powerPreference: this.descriptor.powerPreference
              };
              this.glContextStrict = r.Utils.getWebGLRenderingContext(n);
              var u = {
                glContext: this.glContextStrict,
                vertexShaderSource: o["default"],
                fragmentShaderSource: a["default"]
              };
              this.shaderProgram = r.Utils.getWebGLShaderProgram(u);
              var l = {
                glContext: this.glContextStrict,
                shaderProgram: this.shaderProgram,
                bufferData: s["default"].positions,
                attributeName: "aVertexPosition"
              };
              r.Utils.bindWebGLBufferToTarget(l);
              var c = {
                glContext: this.glContextStrict,
                shaderProgram: this.shaderProgram,
                bufferData: t.position === i.Position.Right ? s["default"].leftUVSet : s["default"].topUVSet,
                attributeName: "aTexturePosition"
              };
              r.Utils.bindWebGLBufferToTarget(c);
              var h = {
                glContext: this.glContextStrict,
                shaderProgram: this.shaderProgram,
                uniformName: "uTextureAtlas"
              };
              this.textureReference = r.Utils.bindWebGLTextureToTarget(h), this.glContextStrict.viewport(0, 0, this.canvasEl.width, this.canvasEl.height)
            }, e.prototype.render = function() {
              if (!this.glContextStrict) throw new Error;
              if (!this.textureReference) throw new Error;
              var e = this.glContextStrict,
                t = this.textureReference,
                A = this.descriptor.textureAtlas;
              e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, t), A instanceof HTMLVideoElement && e.texImage2D(e.TEXTURE_2D, 0, e.RGB, e.RGB, e.UNSIGNED_BYTE, A), e.drawArrays(e.TRIANGLE_STRIP, 0, 4), this.descriptor.debug === i.Debug.Yes && console.log(this.name + "::Render — Frame rendered.")
            }, e.prototype.clear = function() {
              if (!this.glContextStrict) throw new Error;
              var e = this.glContextStrict,
                t = e.COLOR_BUFFER_BIT;
              e.clear(t)
            }, Object.defineProperty(e.prototype, "name", {
              get: function() {
                return "LumaMatte"
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(e.prototype, "domElement", {
              get: function() {
                if (!this.canvasEl && !this.isRendererReady) throw new Error(this.name + "::domElement - " + i.ErrorMessage.RendererNotReady);
                return this.canvasEl
              },
              enumerable: !0,
              configurable: !0
            }), e
          }();
        t.createLumaMatte = function(e) {
          return new u(e)
        }
      }, function(e, t, A) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.validateElementTagName = function(e) {
          if (!e) throw new Error("LumaMatte::Utils::validateElementTagName - The HTML DOM element to validate can't be null.");
          var t = ["canvas", "image", "video"],
            A = String(e.tagName).toLowerCase();
          return e instanceof Element && t.indexOf(A) !== -1
        }
      }, function(e, t, A) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.validateElementDimensions = function(e) {
          return !0
        }
      }, function(e, t, A) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = A(0);
        t.getDevicePixelRatio = function() {
          return window.devicePixelRatio > 1 ? n.Display.Retina : n.Display.NonRetina
        }
      }, function(e, t, A) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = A(0),
          i = A(1);
        t.createHiDPICanvas = function(e) {
          if (!e.width || !e.height) throw new Error("LumaMatte::Utils::createHiDPICanvas - " + n.ErrorMessage.IncorrectDimensions);
          if (isNaN(e.width) || isNaN(e.height)) throw new Error("LumaMatte::Utils::createHiDPICanvas - " + n.ErrorMessage.NaN);
          if (!window.HTMLCanvasElement) throw new Error("LumaMatte::Utils::createHiDPICanvas - " + n.ErrorMessage.NoCanvasElement);
          var t = Math.round(e.width),
            A = Math.round(e.height),
            r = e.resolution,
            a = i.Utils.getDevicePixelRatio(),
            o = document.createElement("canvas");
          return r === n.Quality.HiRes ? (o.width = t * a, o.height = A * a) : (o.width = t, o.height = A), o.style.width = t + "px", o.style.height = A + "px", o
        }
      }, function(e, t, A) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = A(0);
        t.getWebGLRenderingContext = function(e) {
          if (!e.canvasEl) throw new Error("LumaMatte::Utils::getWebGLRenderingContext - " + n.ErrorMessage.NoCanvasElement);
          if (!window.WebGLRenderingContext) throw new Error("LumaMatte::Utils::getWebGLRenderingContext - " + n.ErrorMessage.NoGLContext);
          var t = e.canvasEl,
            A = e.powerPreference,
            i = {
              alpha: !0,
              antialias: !0,
              premultipliedAlpha: !1,
              powerPreference: A
            },
            r = t.getContext("webgl", i);
          return r
        }
      }, function(e, t, A) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = A(0);
        t.getCompiledShader = function(e) {
          if (!e.glContext) throw new Error("LumaMatte::Utils::getWebGLShaderProgram: - " + n.ErrorMessage.NoGLRenderingContext);
          if ("" === e.source || !e.stage) throw new Error("LumaMatte::Utils::getWebGLShaderProgram: - " + n.ErrorMessage.NoShaderSourceOrStage);
          var t = e.glContext,
            A = e.source,
            i = e.stage,
            r = new Map;
          r.set(n.WebGLShaderStage.Vertex, t.VERTEX_SHADER), r.set(n.WebGLShaderStage.Fragment, t.FRAGMENT_SHADER);
          var a = t.createShader(r.get(i));
          if (t.shaderSource(a, A), t.compileShader(a), !t.getShaderParameter(a, t.COMPILE_STATUS)) {
            var o = t.getShaderInfoLog(a);
            throw new Error("LumaMatte::Utils::getWebGLShaderProgram: - " + n.ErrorMessage.ShaderCompileError + " " + o + "}")
          }
          return a
        }
      }, function(e, t, A) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = A(0),
          i = A(1);
        t.getWebGLShaderProgram = function(e) {
          var t = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
          if (!e.glContext) throw new Error("LumaMatte::Utils::getWebGLShaderProgram: - " + n.ErrorMessage.NoGLRenderingContext);
          var A = e.glContext,
            r = e.vertexShaderSource,
            a = e.fragmentShaderSource;
          t && (A.enable(A.BLEND), A.blendFuncSeparate(A.SRC_ALPHA, A.ONE_MINUS_SRC_ALPHA, A.ONE, A.ONE_MINUS_SRC_ALPHA));
          var o = {
              glContext: A,
              source: r,
              stage: n.WebGLShaderStage.Vertex
            },
            s = {
              glContext: A,
              source: a,
              stage: n.WebGLShaderStage.Fragment
            },
            u = i.Utils.getCompiledShader(o),
            l = i.Utils.getCompiledShader(s),
            c = A.createProgram();
          A.attachShader(c, u), A.attachShader(c, l), A.linkProgram(c);
          var h = A.getProgramParameter(c, A.LINK_STATUS);
          if (!h) {
            var d = A.getProgramInfoLog(c);
            throw new Error("LumaMatte::Utils::getWebGLShaderProgram: - " + n.ErrorMessage.ProgramCompileError + " " + d + "}")
          }
          return A.useProgram(c), c
        }
      }, function(e, t, A) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = A(0);
        t.bindWebGLBufferToTarget = function(e) {
          if (!e.glContext) throw new Error("LumaMatte::Utils::bindWebGLBufferToTarget: - " + n.ErrorMessage.NoGLRenderingContext);
          if (!e.shaderProgram) throw new Error("LumaMatte::Utils::bindWebGLBufferToTarget: - " + n.ErrorMessage.NoWebGLProgram);
          var t = e.glContext,
            A = e.shaderProgram,
            i = e.bufferData,
            r = e.attributeName,
            a = t.createBuffer(),
            o = t.getAttribLocation(A, r);
          t.bindBuffer(t.ARRAY_BUFFER, a), t.bufferData(t.ARRAY_BUFFER, i, t.STATIC_DRAW), t.enableVertexAttribArray(o), t.vertexAttribPointer(o, 2, t.FLOAT, !1, 0, 0)
        }
      }, function(e, t, A) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = A(0);
        t.bindWebGLTextureToTarget = function(e) {
          if (!e.glContext) throw new Error("LumaMatte::Utils::bindWebGLBufferToTarget: - " + n.ErrorMessage.NoGLRenderingContext);
          if (!e.shaderProgram) throw new Error("LumaMatte::Utils::bindWebGLBufferToTarget: - " + n.ErrorMessage.NoWebGLProgram);
          var t = e.glContext,
            A = e.shaderProgram,
            i = t.createTexture();
          t.bindTexture(t.TEXTURE_2D, i), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
          var r = t.getUniformLocation(A, "uVideoSpriteSheet");
          return t.uniform1i(r, 0), t.bindTexture(t.TEXTURE_2D, null), i
        }
      }, function(e, t, A) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.isPowerOfTwo = function(e) {
          return "number" == typeof e && Boolean(e && 0 === (e & e - 1))
        }
      }, function(e, t, A) {
        A.r(t), t["default"] = "uniform mediump sampler2D uTextureAtlas;uniform int uLuminancePosition;varying mediump vec2 vTextureCoordinate;void main() {mediump vec3 rgbColor = texture2D(uTextureAtlas, vTextureCoordinate).rgb;mediump vec3 lumaMatteColor = texture2D(uTextureAtlas, (vTextureCoordinate + vec2(0.5, 0))).rgb;gl_FragColor = vec4(rgbColor, lumaMatteColor.g);}"
      }, function(e, t, A) {
        A.r(t), t["default"] = "attribute vec4 aVertexPosition;attribute vec4 aTexturePosition;varying mediump vec2 vTextureCoordinate;void main() {gl_Position = aVertexPosition;vTextureCoordinate = aTexturePosition.xy;}"
      }, function(e, t, A) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]),
          i = new Float32Array([.5, 0, 0, 0, .5, 1, 0, 1]),
          r = new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]),
          a = {
            positions: n,
            leftUVSet: i,
            topUVSet: r
          };
        t["default"] = a
      }])
    })
  }, {
    12: 12,
    19: 19
  }],
  78: [function(e, t, A) {
    "use strict";
    t.exports = {
      lerp: function(e, t, A) {
        return t + (A - t) * e
      },
      map: function(e, t, A, n, i) {
        return n + (i - n) * (e - t) / (A - t)
      },
      mapClamp: function(e, t, A, n, i) {
        var r = n + (i - n) * (e - t) / (A - t);
        return Math.max(n, Math.min(i, r))
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
  79: [function(e, t, A) {
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
  80: [function(e, t, A) {
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
          return e.ua.indexOf("Firefox") > -1 && e.ua.indexOf("Opera") === -1
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
          return (e.ua.indexOf("Linux") > -1 || e.platform.indexOf("Linux") > -1) && e.ua.indexOf("Android") === -1
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
  81: [function(e, t, A) {
    "use strict";

    function n(e) {
      return new RegExp(e + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")
    }

    function i(e, t) {
      if ("function" == typeof e.parseVersion) return e.parseVersion(t);
      var A = e.version || e.userAgent;
      "string" == typeof A && (A = [A]);
      for (var i, r = A.length, a = 0; a < r; a++)
        if (i = t.match(n(A[a])), i && i.length > 1) return i[1].replace(/_/g, ".");
      return !1
    }

    function r(e, t, A) {
      for (var n, r, a = e.length, o = 0; o < a; o++)
        if ("function" == typeof e[o].test ? e[o].test(A) === !0 && (n = e[o].name) : A.ua.indexOf(e[o].userAgent) > -1 && (n = e[o].name), n) {
          if (t[n] = !0, r = i(e[o], A.ua), "string" == typeof r) {
            var s = r.split(".");
            t.version.string = r, s && s.length > 0 && (t.version.major = parseInt(s[0] || 0), t.version.minor = parseInt(s[1] || 0), t.version.patch = parseInt(s[2] || 0))
          } else "edge" === n && (t.version.string = "12.0.0", t.version.major = "12", t.version.minor = "0", t.version.patch = "0");
          return "function" == typeof e[o].parseDocumentMode && (t.version.documentMode = e[o].parseDocumentMode()), t
        } return t
    }

    function a(e) {
      var t = {};
      return t.browser = r(s.browser, o.browser, e), t.os = r(s.os, o.os, e), t
    }
    var o = e(79),
      s = e(80);
    t.exports = a
  }, {
    79: 79,
    80: 80
  }],
  82: [function(e, t, A) {
    "use strict";
    var n = {
      ua: window.navigator.userAgent,
      platform: window.navigator.platform,
      vendor: window.navigator.vendor
    };
    t.exports = e(81)(n)
  }, {
    81: 81
  }],
  83: [function(e, t, A) {
    "use strict";
    var n = e(12),
      i = n(e(6)),
      r = n(e(8)),
      a = n(e(15)),
      o = n(e(5)),
      s = n(e(10)),
      u = n(e(9)),
      l = n(e(11)),
      c = e(2).EventEmitterMicro,
      h = [{
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
      d = "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)",
      f = "only screen and (orientation: portrait)",
      m = function(e) {
        function t() {
          var e, A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, i["default"])(this, t), e = (0, a["default"])(this, (0, s["default"])(t).call(this)), e.BREAKPOINTS = A.breakpoints || h, e._setupProperties(), e._onRetinaChange = e._onRetinaChange.bind((0, o["default"])(e)), e._onOrientationChange = e._onOrientationChange.bind((0, o["default"])(e)), e.listenersAdded = {
            orientation: !1,
            retina: !1,
            viewport: !1
          }, e
        }
        return (0, l["default"])(t, e), (0, r["default"])(t, [{
          key: "on",
          value: function() {
            this._setupListeners(arguments[0]), (0, u["default"])((0, s["default"])(t.prototype), "on", this).apply(this, arguments)
          }
        }, {
          key: "_onRetinaChange",
          value: function() {
            this.trigger(t.CHANGE_EVENTS.RETINA, this)
          }
        }, {
          key: "_onOrientationChange",
          value: function() {
            this.trigger(t.CHANGE_EVENTS.ORIENTATION, this)
          }
        }, {
          key: "_setupProperties",
          value: function() {
            Object.defineProperty(this, "retina", {
              get: function() {
                return window.matchMedia(d).matches
              }
            }), Object.defineProperty(this, "orientation", {
              get: function() {
                return window.matchMedia(f).matches ? "portrait" : "landscape"
              }
            }), this.viewport = this.getBreakpoint()
          }
        }, {
          key: "_setupListeners",
          value: function(e) {
            var A = this;
            if (e !== t.CHANGE_EVENTS.RETINA || this.listenersAdded.retina || (window.matchMedia(d).addListener(this._onRetinaChange), this.listenersAdded.retina = !0), e !== t.CHANGE_EVENTS.ORIENTATION || this.listenersAdded.orientation || (window.matchMedia(f).addListener(this._onOrientationChange), this.listenersAdded.orientation = !0), e === t.CHANGE_EVENTS.VIEWPORT && !this.listenersAdded.viewport) {
              for (var n = function(e) {
                  var n = A.BREAKPOINTS[e];
                  window.matchMedia(n.mediaQuery).addListener(function(e) {
                    e.matches && (A.oldViewport = A.viewport, A.viewport = n.name, A.trigger(t.CHANGE_EVENTS.VIEWPORT, A))
                  })
                }, i = 0; i < this.BREAKPOINTS.length; i++) n(i);
              this.listenersAdded.viewport = !0
            }
          }
        }, {
          key: "getBreakpoint",
          value: function() {
            for (var e = 0; e < this.BREAKPOINTS.length; e++) {
              var t = this.BREAKPOINTS[e],
                A = window.matchMedia(t.mediaQuery);
              if (A.matches) return t.name
            }
          }
        }], [{
          key: "CHANGE_EVENTS",
          get: function() {
            return {
              ORIENTATION: "change:orientation",
              RETINA: "change:retina",
              VIEWPORT: "change:viewport"
            }
          }
        }]), t
      }(c);
    t.exports = m
  }, {
    10: 10,
    11: 11,
    12: 12,
    15: 15,
    2: 2,
    5: 5,
    6: 6,
    8: 8,
    9: 9
  }],
  84: [function(e, t, A) {
    function n(e) {
      var t = new Float32Array(16);
      return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
    }
    t.exports = n
  }, {}],
  85: [function(e, t, A) {
    function n() {
      var e = new Float32Array(16);
      return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0,
        e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }
    t.exports = n
  }, {}],
  86: [function(e, t, A) {
    function n(e, t) {
      var A = t[0],
        n = t[1],
        i = t[2],
        r = t[3],
        a = t[4],
        o = t[5],
        s = t[6],
        u = t[7],
        l = t[8],
        c = t[9],
        h = t[10],
        d = t[11],
        f = t[12],
        m = t[13],
        p = t[14],
        g = t[15],
        v = A * o - n * a,
        y = A * s - i * a,
        E = A * u - r * a,
        _ = n * s - i * o,
        I = n * u - r * o,
        b = i * u - r * s,
        C = l * m - c * f,
        T = l * p - h * f,
        w = l * g - d * f,
        S = c * p - h * m,
        k = c * g - d * m,
        M = h * g - d * p,
        x = v * M - y * k + E * S + _ * w - I * T + b * C;
      return x ? (x = 1 / x, e[0] = (o * M - s * k + u * S) * x, e[1] = (i * k - n * M - r * S) * x, e[2] = (m * b - p * I + g * _) * x, e[3] = (h * I - c * b - d * _) * x, e[4] = (s * w - a * M - u * T) * x, e[5] = (A * M - i * w + r * T) * x, e[6] = (p * E - f * b - g * y) * x, e[7] = (l * b - h * E + d * y) * x, e[8] = (a * k - o * w + u * C) * x, e[9] = (n * w - A * k - r * C) * x, e[10] = (f * I - m * E + g * v) * x, e[11] = (c * E - l * I - d * v) * x, e[12] = (o * T - a * S - s * C) * x, e[13] = (A * S - n * T + i * C) * x, e[14] = (m * y - f * _ - p * v) * x, e[15] = (l * _ - c * y + h * v) * x, e) : null
    }
    t.exports = n
  }, {}],
  87: [function(e, t, A) {
    function n(e, t, A) {
      var n = Math.sin(A),
        i = Math.cos(A),
        r = t[4],
        a = t[5],
        o = t[6],
        s = t[7],
        u = t[8],
        l = t[9],
        c = t[10],
        h = t[11];
      return t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[4] = r * i + u * n, e[5] = a * i + l * n, e[6] = o * i + c * n, e[7] = s * i + h * n, e[8] = u * i - r * n, e[9] = l * i - a * n, e[10] = c * i - o * n, e[11] = h * i - s * n, e
    }
    t.exports = n
  }, {}],
  88: [function(e, t, A) {
    function n(e, t, A) {
      var n = Math.sin(A),
        i = Math.cos(A),
        r = t[0],
        a = t[1],
        o = t[2],
        s = t[3],
        u = t[8],
        l = t[9],
        c = t[10],
        h = t[11];
      return t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = r * i - u * n, e[1] = a * i - l * n, e[2] = o * i - c * n, e[3] = s * i - h * n, e[8] = r * n + u * i, e[9] = a * n + l * i, e[10] = o * n + c * i, e[11] = s * n + h * i, e
    }
    t.exports = n
  }, {}],
  89: [function(e, t, A) {
    function n(e, t, A) {
      var n = Math.sin(A),
        i = Math.cos(A),
        r = t[0],
        a = t[1],
        o = t[2],
        s = t[3],
        u = t[4],
        l = t[5],
        c = t[6],
        h = t[7];
      return t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = r * i + u * n, e[1] = a * i + l * n, e[2] = o * i + c * n, e[3] = s * i + h * n, e[4] = u * i - r * n, e[5] = l * i - a * n, e[6] = c * i - o * n, e[7] = h * i - s * n, e
    }
    t.exports = n
  }, {}],
  90: [function(e, t, A) {
    function n(e, t, A) {
      var n = A[0],
        i = A[1],
        r = A[2];
      return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * i, e[5] = t[5] * i, e[6] = t[6] * i, e[7] = t[7] * i, e[8] = t[8] * r, e[9] = t[9] * r, e[10] = t[10] * r, e[11] = t[11] * r, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    }
    t.exports = n
  }, {}],
  91: [function(e, t, A) {
    function n(e, t) {
      if (e === t) {
        var A = t[1],
          n = t[2],
          i = t[3],
          r = t[6],
          a = t[7],
          o = t[11];
        e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = A, e[6] = t[9], e[7] = t[13], e[8] = n, e[9] = r, e[11] = t[14], e[12] = i, e[13] = a, e[14] = o
      } else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
      return e
    }
    t.exports = n
  }, {}],
  92: [function(e, t, A) {
    function n() {
      var e = new Float32Array(3);
      return e[0] = 0, e[1] = 0, e[2] = 0, e
    }
    t.exports = n
  }, {}],
  93: [function(e, t, A) {
    function n(e, t, A) {
      var n = t[0],
        i = t[1],
        r = t[2],
        a = A[0],
        o = A[1],
        s = A[2];
      return e[0] = i * s - r * o, e[1] = r * a - n * s, e[2] = n * o - i * a, e
    }
    t.exports = n
  }, {}],
  94: [function(e, t, A) {
    function n(e, t) {
      return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
    }
    t.exports = n
  }, {}],
  95: [function(e, t, A) {
    function n(e, t, A) {
      var n = new Float32Array(3);
      return n[0] = e, n[1] = t, n[2] = A, n
    }
    t.exports = n
  }, {}],
  96: [function(e, t, A) {
    function n(e) {
      var t = e[0],
        A = e[1],
        n = e[2];
      return Math.sqrt(t * t + A * A + n * n)
    }
    t.exports = n
  }, {}],
  97: [function(e, t, A) {
    function n(e, t) {
      var A = t[0],
        n = t[1],
        i = t[2],
        r = A * A + n * n + i * i;
      return r > 0 && (r = 1 / Math.sqrt(r), e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r), e
    }
    t.exports = n
  }, {}],
  98: [function(e, t, A) {
    function n() {
      var e = new Float32Array(4);
      return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e
    }
    t.exports = n
  }, {}],
  99: [function(e, t, A) {
    function n(e, t, A, n) {
      var i = new Float32Array(4);
      return i[0] = e, i[1] = t, i[2] = A, i[3] = n, i
    }
    t.exports = n
  }, {}],
  100: [function(e, t, A) {
    function n(e, t, A) {
      var n = t[0],
        i = t[1],
        r = t[2],
        a = t[3];
      return e[0] = A[0] * n + A[4] * i + A[8] * r + A[12] * a, e[1] = A[1] * n + A[5] * i + A[9] * r + A[13] * a, e[2] = A[2] * n + A[6] * i + A[10] * r + A[14] * a, e[3] = A[3] * n + A[7] * i + A[11] * r + A[15] * a, e
    }
    t.exports = n
  }, {}],
  101: [function(e, t, A) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }

    function i(e) {
      return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      for (var A = 0; A < t.length; A++) {
        var n = t[A];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    function o(e, t, A) {
      return t && a(e.prototype, t), A && a(e, A), e
    }

    function s(e, t) {
      return !t || "object" !== i(t) && "function" != typeof t ? l(e) : t
    }

    function u(e) {
      return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function l(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function c(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && h(e, t)
    }

    function h(e, t) {
      return (h = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }
    Object.defineProperty(A, "__esModule", {
      value: !0
    }), A["default"] = void 0;
    var d = n(e(61)),
      f = n(e(55)),
      m = function(e) {
        function t() {
          var e;
          return r(this, t), e = s(this, u(t).apply(this, arguments)), e._onFocusHandler = e._onFocusHandler.bind(l(e)), e
        }
        return c(t, e), o(t, [{
          key: "name",
          value: function() {
            return "AXExperienceHeadline"
          }
        }, {
          key: "mounted",
          value: function() {
            this._instrumentHeadlineElement()
          }
        }, {
          key: "_instrumentHeadlineElement",
          value: function() {
            this.el.setAttribute("tabindex", "-1"), this.el.addEventListener(this.EVENTS.FOCUS, this._onFocusHandler)
          }
        }, {
          key: "_onFocusHandler",
          value: function(e) {
            var t = document.querySelector("[data-sticky-wrapper]"),
              A = this.OPTIONS.VISIBILITY_OFFSET + f["default"].parse("t", {
                target: t
              });
            window.scrollY <= A && window.scrollTo(0, A)
          }
        }, {
          key: "OPTIONS",
          get: function() {
            return {
              VISIBILITY_OFFSET: parseInt(this.el.getAttribute("data-ax-visibility-offset"))
            }
          }
        }, {
          key: "EVENTS",
          get: function() {
            return {
              FOCUS: "focus"
            }
          }
        }], [{
          key: "IS_SUPPORTED",
          value: function() {
            var e = document.documentElement,
              t = e.classList.contains("webgl"),
              A = e.classList.contains("fallback"),
              n = e.classList.contains("text-zoom"),
              i = e.classList.contains("edge"),
              r = e.classList.contains("aow");
            return t || !A || !n || !i || !r
          }
        }]), t
      }(d["default"]);
    A["default"] = m
  }, {
    55: 55,
    61: 61
  }],
  102: [function(e, t, A) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }

    function i(e) {
      return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      for (var A = 0; A < t.length; A++) {
        var n = t[A];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    function o(e, t, A) {
      return t && a(e.prototype, t), A && a(e, A), e
    }

    function s(e, t) {
      return !t || "object" !== i(t) && "function" != typeof t ? u(e) : t
    }

    function u(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function c(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && h(e, t)
    }

    function h(e, t) {
      return (h = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }
    var d = n(e(61)),
      f = (n(e(112)), e(64)),
      m = function(e) {
        function t(e) {
          var A;
          return r(this, t), A = s(this, l(t).call(this, e)), A.svg = A.el.querySelector("#charging-route"), A.chargingPath = A.el.querySelector(".charging-path"), A
        }
        return c(t, e), o(t, [{
          key: "mounted",
          value: function() {
            var e = this;
            this.timeline = this.anim.createTimeGroup(), this.timeline.name = "charging animation", this.animate(), this.addDiscreteEvent({
              start: "t - 50vh",
              end: "b -50vh",
              event: "Charging-play-animation",
              onEnterOnce: function() {
                e.carnivalPlay()
              },
              onEnter: function() {
                e.carnivalPlay()
              }
            }), this.addDiscreteEvent({
              start: "t - 100vh",
              end: "b",
              event: "Charging-view",
              onEnterOnce: function() {
                e.timeline.pause(0)
              },
              onExit: function() {
                e.animationRequest && e.animationRequest.cancel(), e.timeline.pause(0)
              }
            })
          }
        }, {
          key: "startAnimation",
          value: function() {
            this.timeline.play()
          }
        }, {
          key: "carnivalPlay",
          value: function() {
            var e = this;
            this.animationRequest = f.director.requestAnimationStart({
              element: this.el,
              duration: 1.4
            }), this.animationRequest.then(function() {
              e.startAnimation()
            })
          }
        }, {
          key: "animate",
          value: function() {
            var e = 1.4;
            this.animationKeyframe = this.timeline.addKeyframe({}, {
              start: 0,
              end: e,
              progress: [0, 1]
            });
            var t = .3,
              A = "cubic-bezier(.66, 0, .01, 1)";
            this.timeline.addKeyframe(this.el.querySelector(".dot-shadow"), {
              start: 0,
              end: t,
              scale: [0, 1],
              easeFunction: A
            }), this.timeline.addKeyframe(this.el.querySelector(".dot-circle"), {
              start: t / 2,
              end: t,
              scale: [0, 1],
              easeFunction: A
            }), this.timeline.addKeyframe(this.el.querySelector(".dot-center"), {
              start: t / 2 + .1,
              end: t,
              scale: [0, 1],
              easeFunction: A
            });
            var n = this.svg.querySelector("path"),
              i = Math.ceil(n.getTotalLength());
            n.style.strokeDasharray = i;
            var r = parseInt(this.svg.width.baseVal.value) / this.chargingPath.clientWidth;
            n.style.strokeWidth = 14 * r;
            var a = this.timeline.addKeyframe(n, {
              start: t,
              end: e,
              ease: 1,
              strokeDashoffset: [i, 0],
              event: "update-path"
            });
            a.controller.on("draw", function(e) {
              n.style.strokeDashoffset = "".concat(Math.round(e.tweenProps.strokeDashoffset.current), "px")
            }), this.timeline.addKeyframe(this.el.querySelector(".charging-icon"), {
              start: t + .6,
              end: t + .6 + .25,
              easeFunction: "cubic-bezier(.66, 0, .03, 1.31)",
              scale: [0, 1]
            })
          }
        }], [{
          key: "IS_SUPPORTED",
          value: function() {
            return !document.documentElement.classList.contains("aow") && !document.documentElement.classList.contains("reduced-motion")
          }
        }]), t
      }(d["default"]);
    t.exports = m
  }, {
    112: 112,
    61: 61,
    64: 64
  }],
  103: [function(e, t, A) {
    "use strict";

    function n(e) {
      return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
      for (var A = 0; A < t.length; A++) {
        var n = t[A];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    function a(e, t, A) {
      return t && r(e.prototype, t), A && r(e, A), e
    }

    function o(e, t) {
      return !t || "object" !== n(t) && "function" != typeof t ? s(e) : t
    }

    function s(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function u(e) {
      return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function l(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && c(e, t)
    }

    function c(e, t) {
      return (c = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }
    var h = e(64),
      d = e(61),
      f = function(e) {
        function t(e) {
          return i(this, t), o(this, u(t).call(this, e))
        }
        return l(t, e), a(t, [{
          key: "mounted",
          value: function() {
            var e = this;
            this.animatedElement = this.el.querySelector(".image-cycling-screen"), this.addDiscreteEvent({
              start: "t - 50vh",
              end: "b - 50vh",
              event: "range",
              onEnter: function() {
                e.carnivalPlay()
              },
              onExit: function(e) {}
            }), this.addDiscreteEvent({
              start: "t - 100vh",
              end: "b",
              event: "view",
              onEnter: function() {},
              onExit: function(t) {
                e.animatedElement.classList.remove("animation-screen"), e.animationRequest && e.animationRequest.cancel()
              }
            }), this.footnote = this.el.querySelector("a"), this.footnote.addEventListener("focus", function() {
              e.carnivalPlay()
            })
          }
        }, {
          key: "carnivalPlay",
          value: function() {
            var e = this;
            this.animationRequest = h.director.requestAnimationStart({
              element: this.el,
              duration: 1.3
            }), this.animationRequest.then(function() {
              e.startAnimation()
            })
          }
        }, {
          key: "startAnimation",
          value: function() {
            var e = this;
            this.animatedElement.classList.remove("remove-transition"), this.animatedElement.classList.add("animation-screen"), this.animatedElement.addEventListener("transitionend", function() {
              e.animatedElement.classList.add("remove-transition")
            })
          }
        }], [{
          key: "IS_SUPPORTED",
          value: function() {
            return !document.documentElement.classList.contains("aow") && !document.documentElement.classList.contains("reduced-motion")
          }
        }]), t
      }(d);
    t.exports = f
  }, {
    61: 61,
    64: 64
  }],
  104: [function(e, t, A) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }

    function i(e) {
      return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      for (var A = 0; A < t.length; A++) {
        var n = t[A];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    function o(e, t, A) {
      return t && a(e.prototype, t), A && a(e, A), e
    }

    function s(e, t) {
      return !t || "object" !== i(t) && "function" != typeof t ? l(e) : t
    }

    function u(e) {
      return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function l(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function c(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && h(e, t)
    }

    function h(e, t) {
      return (h = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }
    Object.defineProperty(A, "__esModule", {
      value: !0
    }), A["default"] = void 0;
    var d = n(e(61)),
      f = n(e(41)),
      m = function(e) {
        function t(e) {
          var A;
          return r(this, t), A = s(this, u(t).apply(this, arguments)), A._sectionEl = document.querySelector(".section-experience"), A._stickyWrapperEl = document.querySelector("[data-sticky-wrapper]"), A._hardwareEl = A.el.querySelector("[data-experience-hardware]"), A._streamlinedApps = document.querySelector("[data-streamlined-apps]"), A._refreshedDock = document.querySelector("[data-refreshed-dock]"), A._macosDock = document.querySelector("[data-macos-dock]"), A._controlCenter = document.querySelector("[data-control-center]"), A._notificationCenter = document.querySelector("[data-notification-center]"), A._appsScreenEl = A.el.querySelector("[data-apps-screen]"), A._dockScreenEl = A.el.querySelector("[data-dock-screen]"), A._controlCenterScreenEl = A.el.querySelector("[data-control-center-screen]"), A._notificationCenterScreenEl = A.el.querySelector("[data-notification-center-screen]"), A._animGroup = f["default"].getGroupForTarget(A._sectionEl), A._easeFunction = "easeOutQuad", A._hardwareTransformKeyframes = new Array, A._screenEventKeyframes = new Array, A.breakpoint = e.pageMetrics.breakpoint, A.onResize = A.onResize.bind(l(A)), A.onResizeDebounced = A.onResizeDebounced.bind(l(A)), A
        }
        return c(t, e), o(t, [{
          key: "name",
          value: function() {
            return "ExperienceHardwareController"
          }
        }, {
          key: "mounted",
          value: function() {
            "L" === this.breakpoint ? this._createTransformKeyframes() : this.el.closest(".section-experience").classList.add("static")
          }
        }, {
          key: "_createTransformKeyframes",
          value: function() {
            var e = this,
              A = this.addKeyframe({
                el: this._hardwareEl,
                group: this._animGroup,
                anchors: [this._stickyWrapperEl],
                start: "a0t + 300px",
                end: "a0t + 900px",
                easeFunction: this._easeFunction,
                easing: "0.8",
                breakpointMask: "L",
                x: ["50vw - 50w", "50vw - 21w"],
                y: ["css(--experience-hardware-initial-y-offset)", "((100vh - css(--r-localnav-height)) / 2) - 50h"],
                scale: ["css(--experience-hardware-initial-scale)", "css(--experience-hardware-initial-scale)"]
              });
            this._hardwareTransformKeyframes.push(A);
            var n = this.addKeyframe({
              el: this._hardwareEl,
              group: this._animGroup,
              anchors: [this._stickyWrapperEl],
              start: "a0t + 1200px",
              end: "a0t + 1500px",
              easeFunction: this._easeFunction,
              easing: "0.8",
              breakpointMask: "L",
              x: [null, "50vw - 9.5w"],
              y: [null, "((100vh - css(--r-localnav-height)) / 2) - 65h"],
              scale: ["css(--experience-hardware-initial-scale)", 1]
            });
            this._hardwareTransformKeyframes.push(n);
            var i = this.addKeyframe({
              el: this._appsScreenEl,
              group: this._animGroup,
              anchors: [this._stickyWrapperEl],
              start: "a0t + 1200px",
              end: "a0t + 1300px",
              easeFunction: this._easeFunction,
              easing: "0.8",
              breakpointMask: "L",
              opacity: [1, 0]
            });
            this._hardwareTransformKeyframes.push(i);
            var r = this.addKeyframe({
              el: this._macosDock,
              group: this._animGroup,
              anchors: [this._stickyWrapperEl],
              start: "a0t + 1400px",
              end: "a0t + 1700px",
              easeFunction: this._easeFunction,
              easing: "0.8",
              breakpointMask: "L",
              cssClass: "js-macos-dock-transition",
              toggle: !0
            });
            this._hardwareTransformKeyframes.push(r);
            var a = this.addKeyframe({
              el: this._hardwareEl,
              group: this._animGroup,
              anchors: [this._stickyWrapperEl],
              start: "a0t + 1700px",
              end: "a0t + 2500px",
              easeFunction: this._easeFunction,
              easing: "0.8",
              breakpointMask: "L",
              x: [null, "50vw - 90w"],
              y: [null, "20vh"]
            });
            this._hardwareTransformKeyframes.push(a);
            var o = this.addKeyframe({
              el: this._dockScreenEl,
              group: this._animGroup,
              anchors: [this._stickyWrapperEl],
              start: "a0t + 1800px",
              end: "a0t + 2000px",
              easeFunction: this._easeFunction,
              easing: "0.8",
              breakpointMask: "L",
              opacity: [1, 0]
            });
            this._hardwareTransformKeyframes.push(o);
            var s = this.addKeyframe({
              el: this._controlCenterScreenEl,
              group: this._animGroup,
              anchors: [this._stickyWrapperEl],
              start: "a0t + 2900px",
              end: "a0t + 2950px",
              easeFunction: this._easeFunction,
              easing: "0.8",
              breakpointMask: "L",
              opacity: [1, 0]
            });
            this._hardwareTransformKeyframes.push(s);
            var u = this.addKeyframe({
              el: this._hardwareEl,
              group: this._animGroup,
              anchors: [this._stickyWrapperEl],
              start: "a0t + 2800px",
              end: "a0t + 3100px",
              easeFunction: this._easeFunction,
              easing: "0.8",
              breakpointMask: "L",
              x: [null, "50vw - 82w"],
              y: [null, "10vh"],
              scale: [null, .8]
            });
            this._hardwareTransformKeyframes.push(u);
            var l = this.addKeyframe({
              el: this._streamlinedApps,
              group: this._animGroup,
              anchors: [this._stickyWrapperEl],
              start: "a0t + 1100px",
              end: "a0t + 2200px",
              breakpointMask: "L",
              cssClass: "js-feature-item-transition",
              toggle: !0
            });
            this._hardwareTransformKeyframes.push(l);
            var c = this.addKeyframe({
              el: this._refreshedDock,
              group: this._animGroup,
              anchors: [this._stickyWrapperEl],
              start: "a0t + 1100px",
              end: "a0t + 2200px",
              breakpointMask: "L",
              cssClass: "js-feature-item-transition",
              toggle: !0
            });
            this._hardwareTransformKeyframes.push(c);
            var h = this.addKeyframe({
              el: this._controlCenter,
              group: this._animGroup,
              anchors: [this._stickyWrapperEl],
              start: "a0t + 2800px",
              end: "a0t + 3300px",
              breakpointMask: "L",
              cssClass: "js-feature-item-transition",
              toggle: !0
            });
            this._hardwareTransformKeyframes.push(h);
            var d = this.addKeyframe({
              el: this._notificationCenter,
              group: this._animGroup,
              anchors: [this._stickyWrapperEl],
              start: "a0t + 2800px",
              end: "a0t + 5000px",
              breakpointMask: "L",
              cssClass: "js-feature-item-transition",
              toggle: !0
            });
            this._hardwareTransformKeyframes.push(d);
            var f = this.addDiscreteEvent({
              el: this.heroHardware,
              anchors: [this.el],
              start: "90vh",
              end: "330a0b",
              onEnter: function(t) {
                e.el.classList.contains("invisible") && e.el.classList.remove("invisible")
              },
              onExit: function() {
                e.el.classList.add("invisible")
              }
            });
            this._hardwareTransformKeyframes.push(f), this.el.classList.remove(t.CSS_TOKENS.HIDE)
          }
        }, {
          key: "onResizeDebounced",
          value: function() {
            "L" === this.breakpoint && (this._createTransformKeyframes(), this._updateAnimKeyframes())
          }
        }, {
          key: "onResize",
          value: function() {
            this._removeTransformKeyframes()
          }
        }, {
          key: "onBreakpointChange",
          value: function(e) {
            this.el.closest(".section-experience").classList.add("static")
          }
        }, {
          key: "_removeTransformKeyframes",
          value: function() {
            this._hardwareTransformKeyframes.forEach(function(e) {
              e.remove()
            })
          }
        }, {
          key: "_updateAnimKeyframes",
          value: function() {
            f["default"].forceUpdate({
              recalculateActiveKeyframes: !0,
              waitForNextUpdate: !0
            })
          }
        }], [{
          key: "IS_SUPPORTED",
          value: function() {
            var e = document.documentElement,
              t = e.classList.contains("webgl"),
              A = e.classList.contains("fallback"),
              n = e.classList.contains("text-zoom"),
              i = e.classList.contains("edge");
            return t && !A && !n && !i
          }
        }, {
          key: "EVENTS",
          get: function() {
            return {
              APPS_IN_VIEW: "APPS_IN_VIEW",
              DOCK_IN_VIEW: "DOCK_IN_VIEW",
              CONTROL_CENTER_IN_VIEW: "CONTROL_CENTER_IN_VIEW",
              NOTIFICATION_CENTER_IN_VIEW: "NOTIFICATION_CENTER_IN_VIEW"
            }
          }
        }, {
          key: "CSS_TOKENS",
          get: function() {
            return {
              HIDE: "hide"
            }
          }
        }]), t
      }(d["default"]);
    A["default"] = m
  }, {
    41: 41,
    61: 61
  }],
  105: [function(e, t, A) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }

    function i(e) {
      return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      for (var A = 0; A < t.length; A++) {
        var n = t[A];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    function o(e, t, A) {
      return t && a(e.prototype, t), A && a(e, A), e
    }

    function s(e, t) {
      return !t || "object" !== i(t) && "function" != typeof t ? l(e) : t
    }

    function u(e) {
      return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function l(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function c(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && h(e, t)
    }

    function h(e, t) {
      return (h = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }
    Object.defineProperty(A, "__esModule", {
      value: !0
    }), A.HeroComponent = void 0;
    var d = n(e(61)),
      f = n(e(39)),
      m = n(e(55)),
      p = {
        opacityFade: "js-opacity-fade",
        transitionIn: "js-tranlation",
        heroIntroText: "js-show",
        invisible: "visibility-hidden"
      },
      g = function(e) {
        function t(e) {
          var A;
          return r(this, t), A = s(this, u(t).call(this, e)), A.sectionHero = document.querySelector(".section-hero"), A.chromeBlock = document.querySelector(".chrome-block"), A.screenPlaceholder = A.el.querySelector(".screen-placeholder"), A.introTextBlock = A.el.querySelector(".intro-text-block"), A.heroHardware = A.el.querySelector(".hero-hardware"), A.productIntro = A.el.querySelector(".product-intro"), A.productName = A.el.querySelector(".product-name"), A.animationPoint = A.el.querySelectorAll(".animation-point"), A.imageMaps = A.el.querySelector(".image-app-maps"), A.imageMessages = A.el.querySelector(".image-app-messages"), A.imageNotifications = A.el.querySelector(".image-app-notifications"), A.imageSafari = A.el.querySelector(".image-app-safari"), A.imageDock = A.el.querySelector(".image-app-dock"), A.heroLink = document.querySelector(".hero-link"), A.scrollPage = A.scrollPage.bind(l(A)), A.checkFallback(), A.createImgElms(), A.setupKeyframes(), A
        }
        return c(t, e), o(t, [{
          key: "mounted",
          value: function() {
            var e = this;
            this.chromeBlock.style.opacity = 0, this.introTextBlock.classList.add(p.opacityFade), setTimeout(function() {
              e.chromeBlock.parentNode.removeChild(e.chromeBlock)
            }, 4300), this.imageLoadingStrategy(), this.setupVOScrollToView()
          }
        }, {
          key: "setupVOScrollToView",
          value: function() {
            var e = document.querySelector(".section-hero"),
              t = document.querySelector(".intro-text"),
              A = document.querySelector(".animation-point");
            A.setAttribute("tabindex", "-1"), A.addEventListener("focus", function() {
              document.documentElement.classList.contains("fallback") || requestAnimationFrame(function() {
                if ("key" === A.getAttribute("data-focus-method")) {
                  var n = e.getBoundingClientRect().height,
                    i = t.getBoundingClientRect().height,
                    r = n - i - window.innerHeight / 4;
                  window.scrollY <= r && window.scrollTo(0, r)
                }
              })
            }), this.heroLink.addEventListener("focus", this.scrollPage)
          }
        }, {
          key: "scrollPage",
          value: function() {
            var e = this;
            document.documentElement.classList.contains("fallback") || requestAnimationFrame(function() {
              var t = m["default"].parse("80a0h", {
                target: e.heroLink,
                anchors: [e.el.parentElement]
              });
              window.scrollY <= t && window.scrollTo(0, t)
            })
          }
        }, {
          key: "imageLoadingStrategy",
          value: function() {
            var e = this.el.querySelector(".image-screen-placeholder"),
              t = Array.from(this.el.querySelectorAll(".hero-animation-app"));
            e.addEventListener(f["default"].EVENTS.DOWNLOAD_COMPLETE, function() {
              t.forEach(function(e) {
                e.forceLazyLoad()
              })
            })
          }
        }, {
          key: "createImgElms",
          value: function() {
            this.elmCreated || (this.imgTag = document.createElement("img"), this.imgTag.classList.add("image-screen-placeholder")), this.fallbackSet || (this.srcTag = window.getComputedStyle(this.screenPlaceholder).backgroundImage.match(/url\("?(.*?)"?\)/i)[1], this.imgTag.setAttribute("src", this.srcTag)), this.elmCreated || (this.imgTag.setAttribute("alt", ""), this.heroHardware.prepend(this.imgTag)), this.elmCreated = !0
          }
        }, {
          key: "setupKeyframes",
          value: function() {
            var e = this;
            this.addKeyframe({
              el: this.productIntro,
              start: "0",
              end: "20vh",
              opacity: [1, 0]
            }), this.addKeyframe({
              el: this.productName,
              start: "0",
              end: "20vh",
              opacity: [1, 0]
            }), this.addKeyframe({
              el: this.heroHardware,
              anchors: [this.el, ".image-screen-placeholder", this.sectionHero, this.heroHardware],
              breakpointMask: "L",
              start: "4a2h",
              end: "40a2h",
              scale: ["max(100vh/a1h + 0.03, 100vw/a1w + 0.03)", 1],
              y: ["7", "(50vh - (a3h/2)) + 120"]
            }), this.addKeyframe({
              el: this.heroHardware,
              anchors: [this.el, ".image-screen-placeholder", this.sectionHero, this.heroHardware],
              breakpointMask: "M",
              start: "4a2h",
              end: "40a2h",
              scale: ["max(100vh/a1h + 0.15, 100vw/a1w + 0.15)", 1],
              y: ["0", "(50vh - (a3h/2)) + 120"]
            }), this.addKeyframe({
              el: this.heroHardware,
              anchors: [this.el, ".image-screen-placeholder", this.sectionHero],
              breakpointMask: "S",
              start: "4a2h",
              end: "40a2h",
              scale: ["max(100vh/a1h, 100vw/a1w)", 1],
              y: ["8", "(50vh - (h/2)) + 100"]
            }), this.addKeyframe({
              el: this.heroHardware,
              anchors: [this.sectionHero, this.heroHardware],
              breakpointMask: "L",
              start: "40a0h",
              end: "60a0h",
              y: ["(50vh - (a1h/2)) + 120", "-170"]
            }), this.addKeyframe({
              el: this.heroHardware,
              anchors: [this.sectionHero, this.heroHardware],
              breakpointMask: "M",
              start: "40a0h",
              end: "60a0h",
              y: ["(50vh - (h/2)) + 120", "50"]
            }), this.addKeyframe({
              el: this.heroHardware,
              anchors: [this.sectionHero, this.heroHardware],
              breakpointMask: "S",
              start: "40a0h",
              end: "60a0h",
              y: ["(50vh - (h/2)) + 100", "15px"]
            }), this.addKeyframe({
              el: this.imageMaps,
              anchors: [this.sectionHero],
              breakpointMask: "LM",
              start: "15a0h",
              end: "39.5a0h",
              easeFunction: "easeInOutQuad",
              x: ["-230%", 0],
              y: ["-70%", 0],
              scale: [1.7, .68]
            }), this.addKeyframe({
              el: this.imageMaps,
              anchors: [this.sectionHero],
              breakpointMask: "S",
              start: "15a0h",
              end: "39.5a0h",
              easeFunction: "easeInOutQuad",
              x: ["-200%", 0],
              y: ["-70%", 0],
              scale: [1.1, .68]
            }), this.addKeyframe({
              el: this.imageMessages,
              anchors: [this.sectionHero],
              breakpointMask: "LM",
              start: "5a0h",
              end: "38a0h",
              easeFunction: "easeInOutCubic",
              x: ["-150%", 0],
              y: ["160%", 0],
              scale: [1.7, .68]
            }), this.addKeyframe({
              el: this.imageMessages,
              anchors: [this.sectionHero],
              breakpointMask: "S",
              start: "5a0h",
              end: "38a0h",
              easeFunction: "easeInOutCubic",
              x: ["-150%", 0],
              y: ["160%", 0],
              scale: [1.05, .68]
            }), this.addKeyframe({
              el: this.imageNotifications,
              anchors: [this.sectionHero],
              start: "0",
              end: "40a0h",
              easeFunction: "easeInOutCubic",
              x: ["170%", 0],
              y: ["-375%", 0],
              scale: [1.5, .68]
            }), this.addKeyframe({
              el: this.imageSafari,
              anchors: [this.sectionHero],
              breakpointMask: "LM",
              start: "0",
              end: "37a0h",
              easeFunction: "easeInOutCubic",
              x: ["230%", 0],
              y: ["140%", 0],
              scale: [1.6, .68]
            }), this.addKeyframe({
              el: this.imageSafari,
              anchors: [this.sectionHero],
              breakpointMask: "S",
              start: "0",
              end: "37a0h",
              easeFunction: "easeInOutCubic",
              x: ["230%", 0],
              y: ["140%", 0],
              scale: [1.1, .68]
            }), this.addKeyframe({
              el: this.imageDock,
              anchors: [this.sectionHero],
              start: "35a0h",
              end: "40a0h",
              scale: [.9, .68],
              opacity: [0, 1]
            }), this.addDiscreteEvent({
              el: this.heroHardware,
              anchors: [this.sectionHero],
              start: "50a0h",
              end: "600vh",
              onEnter: function(t) {
                for (var A = function(t) {
                    e.fadeTimeout = setTimeout(function() {
                      e.animationPoint[t].classList.add(p.heroIntroText)
                    }, 115 * t)
                  }, n = 0; n < e.animationPoint.length; n++) A(n)
              },
              onExit: function() {
                clearTimeout(e.fadeTimeout), requestAnimationFrame(function() {
                  for (var t = 0; t < e.animationPoint.length; t++) e.animationPoint[t].classList.remove(p.heroIntroText)
                })
              }
            }), this.addDiscreteEvent({
              el: this.heroHardware,
              anchors: [this.sectionHero],
              start: "-40vh",
              end: "130a0b",
              onEnter: function(t) {
                e.el.classList.contains(p.invisible) && e.el.classList.remove(p.invisible)
              },
              onExit: function() {
                e.el.classList.add(p.invisible)
              }
            })
          }
        }, {
          key: "setFallback",
          value: function() {
            document.documentElement.classList.add("hero-fallback"), document.documentElement.classList.remove("no-hero-fallback"), this.heroLink.removeEventListener("focus", this.scrollPage), this.fallbackSet = !0, this.anim.forceUpdate()
          }
        }, {
          key: "checkFallback",
          value: function() {
            window.innerHeight > 1376 && this.setFallback(), window.innerHeight < 770 && "small" != this.breakpointCheck() && this.setFallback(), window.innerHeight > 736 && "small" === this.breakpointCheck() && this.setFallback(), window.innerHeight < 415 && "small" === this.breakpointCheck() && this.setFallback(), "small" === this.breakpointCheck() && document.documentElement.classList.contains("chrome") && this.setFallback()
          }
        }, {
          key: "breakpointCheck",
          value: function() {
            return {
              L: "large",
              M: "medium",
              S: "small"
            } [this.anim.model.pageMetrics.breakpoint]
          }
        }, {
          key: "onResizeImmediate",
          value: function(e) {
            this.checkFallback()
          }
        }, {
          key: "onResizeDebounced",
          value: function(e) {
            this.checkFallback()
          }
        }, {
          key: "onBreakpointChange",
          value: function(e) {
            this.createImgElms()
          }
        }], [{
          key: "IS_SUPPORTED",
          value: function() {
            return !document.documentElement.classList.contains("hero-fallback")
          }
        }]), t
      }(d["default"]);
    A.HeroComponent = g, t.exports = g
  }, {
    39: 39,
    55: 55,
    61: 61
  }],
  106: [function(e, t, A) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }

    function i(e) {
      return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      for (var A = 0; A < t.length; A++) {
        var n = t[A];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    function o(e, t, A) {
      return t && a(e.prototype, t), A && a(e, A), e
    }

    function s(e, t) {
      return !t || "object" !== i(t) && "function" != typeof t ? u(e) : t
    }

    function u(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function c(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && h(e, t)
    }

    function h(e, t) {
      return (h = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }
    var d = n(e(61)),
      f = function(e) {
        function t(e) {
          var A;
          return r(this, t), A = s(this, l(t).call(this, e)), A.triggers = A.el.querySelectorAll(".modal-toggle"), A.labels = A.el.querySelectorAll(".modal-cta"), A.btns = A.el.querySelectorAll(".modal-cta-text"), A.contents = A.el.querySelectorAll(".modal-content"), A
        }
        return c(t, e), o(t, [{
          key: "mounted",
          value: function() {
            var e = this;
            this.triggers.forEach(function(t, A) {
              var n = t.getAttribute("data-analytics-click");
              t.addEventListener("change", function(i) {
                t.checked ? (e.btns[A].setAttribute("aria-expanded", !0), t.parentElement.classList.add("expanded"), t.removeAttribute("data-analytics-click"), e.contents[A].removeAttribute("aria-hidden")) : (e.btns[A].setAttribute("aria-expanded", !1), t.parentElement.classList.remove("expanded"), t.setAttribute("data-analytics-click", n), e.contents[A].setAttribute("aria-hidden", "true"))
              }), e.labels[A].addEventListener("keypress", function(e) {
                13 !== e.keyCode && 32 !== e.keyCode || (e.preventDefault(), t.checked = !t.checked, t.dispatchEvent(new Event("change")))
              })
            })
          }
        }], [{
          key: "IS_SUPPORTED",
          value: function() {
            return !0
          }
        }]), t
      }(d["default"]);
    t.exports = f
  }, {
    61: 61
  }],
  107: [function(e, t, A) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }

    function i(e) {
      return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      for (var A = 0; A < t.length; A++) {
        var n = t[A];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n)
      }
    }

    function o(e, t, A) {
      return t && a(e.prototype, t), A && a(e, A), e
    }

    function s(e, t) {
      return !t || "object" !== i(t) && "function" != typeof t ? u(e) : t
    }

    function u(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function c(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && h(e, t)
    }

    function h(e, t) {
      return (h = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }
    var d = n(e(61)),
      f = n(e(69)),
      m = e(64),
      p = n(e(82)),
      g = function(e) {
        function t(e) {
          return r(this, t), s(this, l(t).call(this, e))
        }
        return c(t, e), o(t, [{
          key: "mounted",
          value: function() {
            this.videoElement = this.el.querySelector("video"), p["default"].browser.edge && "true" === this.videoElement.getAttribute("data-edge-disable") || (this.playbackControl = this.el.querySelector(".playback-control"), this.hasReplay = !!this.playbackControl || !1, this.playedOnce = !1, this.isPlaying = !1, this.loadVideo())
          }
        }, {
          key: "loadVideo",
          value: function() {
            var e = this;
            this.addDiscreteEvent({
              start: "t - 100vh",
              end: "b",
              event: "range",
              onExit: function(t) {
                e.playedOnce = !1, e.isPlaying = !1, e.hasReplay && e.hideReplay(), e.videoProxy.gotoAndStop(0), e.animationRequest && e.animationRequest.cancel()
              },
              onEnter: function() {
                e.videoProxy.isUnloaded || e.videoProxy.gotoAndStop(0)
              }
            }), this.videoProxy = f["default"].newVideoProxy(this.videoElement, {}), this.videoProxy.on(f["default"].EVENTS.VIDEO_ENTER_LOAD_AREA, function() {
              p["default"].browser.firefox && e.videoProxy.play(), e.videoProxy.videoElement.hasAttribute("data-video-prevent-load") || setTimeout(function() {
                e.videoProxy.canBePlayedThrough || e.videoProxy.videoElement.hasAttribute("data-video-prevent-load") || (e.videoProxy.stopLoad(), e.videoProxy.videoElement.setAttribute("data-video-prevent-load", ""))
              }, 5e3)
            }), this.videoProxy.on(f["default"].EVENTS.VIDEO_ENTER_VIEW_AREA, function() {
              e.videoProxy.canBePlayedThrough && !e.playedOnce && e.carnivalPlay()
            }), this.videoProxy.on(f["default"].EVENTS.CAN_PLAY_THROUGH, function() {
              e.videoProxy.isInViewArea && !e.playedOnce && e.carnivalPlay()
            }), this.videoProxy.videoElement.addEventListener("ended", function() {
              e.isPlaying = !1, e.hasReplay && e.showReplay()
            }), this.hasReplay && this.playbackControl.addEventListener("click", function() {
              e.carnivalPlay()
            })
          }
        }, {
          key: "carnivalPlay",
          value: function() {
            var e = this;
            this.animationRequest = m.director.requestAnimationStart({
              element: this.el,
              duration: this.videoProxy.duration
            }), this.animationRequest.then(function() {
              e.playHandler()
            })
          }
        }, {
          key: "playHandler",
          value: function() {
            this.isPlaying || (this.hasReplay && this.hideReplay(), this.videoProxy.play(), this.playedOnce = !0, this.isPlaying = !0)
          }
        }, {
          key: "hideReplay",
          value: function() {
            this.playbackControl.setAttribute("aria-hidden", !0), this.playbackControl.classList.remove("replay-visible")
          }
        }, {
          key: "showReplay",
          value: function() {
            this.playbackControl.removeAttribute("aria-hidden"), this.playbackControl.classList.add("replay-visible")
          }
        }, {
          key: "onBreakpointChange",
          value: function() {
            this.playedOnce = !1
          }
        }], [{
          key: "IS_SUPPORTED",
          value: function() {
            return document.documentElement.classList.contains("inline-video")
          }
        }]), t
      }(d["default"]);
    t.exports = g
  }, {
    61: 61,
    64: 64,
    69: 69,
    82: 82
  }],
  108: [function(e, t, A) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }

    function i(e) {
      return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      for (var A = 0; A < t.length; A++) {
        var n = t[A];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    function o(e, t, A) {
      return t && a(e.prototype, t), A && a(e, A), e
    }

    function s(e, t) {
      return !t || "object" !== i(t) && "function" != typeof t ? u(e) : t
    }

    function u(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function c(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && h(e, t)
    }

    function h(e, t) {
      return (h = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }
    Object.defineProperty(A, "__esModule", {
      value: !0
    }), A.LocalNavColor = void 0;
    var d = n(e(61)),
      f = function(e) {
        function t(e) {
          var A;
          return r(this, t), A = s(this, l(t).call(this, e)), A.localNav = document.querySelector("#ac-localnav"), A.sectionHero = document.querySelector(".section-hero"), A.heroHardware = document.querySelector(".hero-hardware"), A
        }
        return c(t, e), o(t, [{
          key: "mounted",
          value: function() {
            this.navKeyframe()
          }
        }, {
          key: "navKeyframe",
          value: function() {
            var e = this;
            this.addDiscreteEvent({
              anchors: [this.sectionHero],
              start: "-25vh",
              end: "100a0h",
              onEnter: function(t) {
                e.localNav.classList.add("ac-localnav-dark")
              },
              onExit: function() {
                e.localNav.classList.remove("ac-localnav-dark")
              }
            }), this.addDiscreteEvent({
              anchors: [this.sectionHero, document.body],
              start: "100a0h + 1px",
              end: "a1h",
              onEnter: function(t) {
                e.localNav.classList.remove("ac-localnav-dark")
              }
            })
          }
        }], [{
          key: "IS_SUPPORTED",
          value: function() {
            return !0
          }
        }]), t
      }(d["default"]);
    A.LocalNavColor = f, t.exports = f
  }, {
    61: 61
  }],
  109: [function(e, t, A) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }

    function i(e) {
      return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      for (var A = 0; A < t.length; A++) {
        var n = t[A];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    function o(e, t, A) {
      return t && a(e.prototype, t), A && a(e, A), e
    }

    function s(e, t) {
      return !t || "object" !== i(t) && "function" != typeof t ? l(e) : t
    }

    function u(e) {
      return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function l(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function c(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && h(e, t)
    }

    function h(e, t) {
      return (h = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }
    Object.defineProperty(A, "__esModule", {
      value: !0
    }), A["default"] = void 0;
    var d = n(e(61)),
      f = e(77),
      m = e(21),
      p = e(64),
      g = function(e) {
        function t() {
          var e;
          return r(this, t), e = s(this, u(t).apply(this, arguments)), e._isFirefox = document.documentElement.classList.contains("firefox"), e._isChrome = document.documentElement.classList.contains("chrome"), e._isTouch = document.documentElement.classList.contains("touch"), e.messageEffectsContainer = document.querySelector("[data-section-message-effects]"), e._loadTextureAtlasKeyframe = null, e._playLumaMatteVideoKeyframe = null, e._viewAreaKeyframe = null, e._keyframes = [], e._carnivalAnimationRequest = null, e._useCarnival = e.OPTIONS.USE_CARNIVAL, e._lumaMatteDuration = e.OPTIONS.DURATION, e._videoEl = document.createElement("video"), e._replayButton = null, e._animationHasPlayed = !1, e._lumaMatte = null, e._isLumaMatteReady = !1, e._isVideoReady = !1, e._isAnimationPlaying = !1, e._rafEmitter = new m.RAFEmitter, e._onEnterLoadKeyframeHandler = e._onEnterLoadKeyframeHandler.bind(l(e)), e._onEnterPlayKeyframeHandler = e._onEnterPlayKeyframeHandler.bind(l(e)), e._onEnterResetKeyframeHandler = e._onEnterResetKeyframeHandler.bind(l(e)), e._onExitViewKeyframeHandler = e._onExitViewKeyframeHandler.bind(l(e)), e._loadedVideoMetadataHandler = e._loadedVideoMetadataHandler.bind(l(e)), e._videoCanPlayThroughHandler = e._videoCanPlayThroughHandler.bind(l(e)), e._videoEndedHandler = e._videoEndedHandler.bind(l(e)), e._rafEmitterOnDrawHandler = e._rafEmitterOnDrawHandler.bind(l(e)), e._replayOnClickHandler = e._replayOnClickHandler.bind(l(e)), e
        }
        return c(t, e), o(t, [{
          key: "name",
          value: function() {
            return "LumaMatteVideo"
          }
        }, {
          key: "mounted",
          value: function() {
            this._createVideoLoadKeyframe(), this.OPTIONS.VIDEO_TEXTURE_ATLAS_PLAY_AREA_KEYFRAME && this._createLumaMatteVideoPlayKeyframe(), this.OPTIONS.VIDEO_TEXTURE_ATLAS_RESET_AREA_KEYFRAME && this._createLumaMatteVideoResetKeyframe(), this.OPTIONS.USE_CARNIVAL && this._createViewAreaKeyframe(), this.OPTIONS.REPLAY_BUTTON_ELEMENT && (this._replayButton = this.OPTIONS.CARNIVAL_ELEMENT.querySelector(this.OPTIONS.REPLAY_BUTTON_ELEMENT))
          }
        }, {
          key: "_createVideoLoadKeyframe",
          value: function() {
            var e = {
                event: "LumaMatteVideo - Video Texture Atlas Load.",
                onEnterOnce: this._onEnterLoadKeyframeHandler
              },
              t = this.OPTIONS.VIDEO_TEXTURE_ATLAS_DOWNLOAD_AREA_KEYFRAME,
              A = Object.assign(e, t);
            this._loadTextureAtlasKeyframe = this.addDiscreteEvent(A), this._keyframes.push(this._loadTextureAtlasKeyframe)
          }
        }, {
          key: "_createViewAreaKeyframe",
          value: function() {
            var e = {
              event: "LumaMatteVideo - Element in view.",
              anchors: ["[data-section-message-effects]"],
              start: "a0t - 100vh",
              end: "b",
              onExit: this._onExitViewKeyframeHandler
            };
            this._viewAreaKeyframe = this.addDiscreteEvent(e), this._keyframes.push(this._viewAreaKeyframe)
          }
        }, {
          key: "_createLumaMatteVideoPlayKeyframe",
          value: function() {
            var e = {
                event: "LumaMatteVideo - Play region.",
                onEnter: this._onEnterPlayKeyframeHandler
              },
              t = this.OPTIONS.VIDEO_TEXTURE_ATLAS_PLAY_AREA_KEYFRAME,
              A = Object.assign(e, t);
            this._playLumaMatteVideoKeyframe = this.addDiscreteEvent(A), this._keyframes.push(this._playLumaMatteVideoKeyframe)
          }
        }, {
          key: "_createLumaMatteVideoResetKeyframe",
          value: function() {
            var e = {
                event: "LumaMatteVideo - Reset region.",
                onEnter: this._onEnterResetKeyframeHandler
              },
              t = this.OPTIONS.VIDEO_TEXTURE_ATLAS_RESET_AREA_KEYFRAME,
              A = Object.assign(e, t);
            this._resetLumaMatteVideoKeyframe = this.addDiscreteEvent(A), this._keyframes.push(this._resetLumaMatteVideoKeyframe)
          }
        }, {
          key: "_initializeCarnivalDirector",
          value: function() {
            var e = this,
              t = {
                element: this.OPTIONS.CARNIVAL_ELEMENT,
                duration: this._lumaMatteDuration
              };
            this._carnivalAnimationRequest = p.director.requestAnimationStart(t), this._carnivalAnimationRequest.then(function() {
              e.playLumaMatteVideo()
            })["catch"](function(t) {
              throw new Error("".concat(e.name, "::_initializeCarnivalDirector — ").concat(t))
            })
          }
        }, {
          key: "_instrumentVideoPlayer",
          value: function() {
            this._videoEl.setAttribute("muted", ""), this._videoEl.src = t.getVideoSource(this.OPTIONS.VIDEO_TEXTURE_ATLAS_BASE_PATH, t.getCurrentViewport(this.pageMetrics), this._isTouch, this._useCarnival), this._videoEl.addEventListener(this.EVENTS.VIDEO_LOADED_METADATA, this._loadedVideoMetadataHandler), this._videoEl.addEventListener(this.EVENTS.VIDEO_ENDED, this._videoEndedHandler), this._isFirefox ? this._videoEl.addEventListener(this.EVENTS.VIDEO_CAN_PLAY, this._videoCanPlayThroughHandler) : this._videoEl.addEventListener(this.EVENTS.VIDEO_CAN_PLAY_THROUGH, this._videoCanPlayThroughHandler), this._rafEmitter.on(this.EVENTS.ON_RAF_DRAW, this._rafEmitterOnDrawHandler), this._videoEl.load()
          }
        }, {
          key: "_instrumentReplayButton",
          value: function() {
            this._replayButton.addEventListener(this.EVENTS.ON_REPLAY_CLICK, this._replayOnClickHandler)
          }
        }, {
          key: "_createLumaMatte",
          value: function() {
            var e = this.OPTIONS.LUMA_MATTE_DIMENSIONS,
              A = e.width,
              n = e.height,
              i = {
                textureAtlas: this._videoEl,
                width: parseInt(A),
                height: parseInt(n),
                position: f.Position.Right,
                resolution: f.Quality.HiRes,
                debug: f.Debug.No
              };
            this._lumaMatte = (0, f.createLumaMatte)(i), this._lumaMatte.composite(), this.el.append(this._lumaMatte.domElement), this.el.classList.add(t.CSS_TOKENS.GL_ENABLED), this._isLumaMatteReady = !0
          }
        }, {
          key: "_onEnterLoadKeyframeHandler",
          value: function(e) {
            this._instrumentVideoPlayer(), this._replayButton && this._instrumentReplayButton()
          }
        }, {
          key: "_onEnterPlayKeyframeHandler",
          value: function(e) {
            return this._animationHasPlayed ? null : void(this._useCarnival ? this._initializeCarnivalDirector() : this.playLumaMatteVideo())
          }
        }, {
          key: "_onEnterResetKeyframeHandler",
          value: function(e) {
            this.OPTIONS.LUMA_MATTE_ENDFRAME && (this.OPTIONS.LUMA_MATTE_ENDFRAME.classList.remove(t.CSS_TOKENS.SHOW), this.OPTIONS.LUMA_MATTE_ENDFRAME.classList.add(t.CSS_TOKENS.HIDE)), this.OPTIONS.LUMA_MATTE_STARTFRAME && (this.OPTIONS.LUMA_MATTE_ENDFRAME.classList.remove(t.CSS_TOKENS.HIDE), this.OPTIONS.LUMA_MATTE_STARTFRAME.classList.add(t.CSS_TOKENS.SHOW)), this._lumaMatte && this._lumaMatte.clear(), this._animationHasPlayed = !1
          }
        }, {
          key: "_onExitViewKeyframeHandler",
          value: function(e) {
            this._videoEndedHandler.apply(this, [e]), this._animationHasPlayed = !1, this._replayButton && this._replayButton.setAttribute("disabled", ""), this._replayButton && this._replayButton.classList.add("hide")
          }
        }, {
          key: "_loadedVideoMetadataHandler",
          value: function(e) {
            this._createLumaMatte()
          }
        }, {
          key: "_videoCanPlayThroughHandler",
          value: function(e) {
            this._isVideoReady = !0
          }
        }, {
          key: "_videoEndedHandler",
          value: function(e) {
            this._isAnimationPlaying = !1, this._rafEmitter.cancel(), this.OPTIONS.LUMA_MATTE_ENDFRAME && this.OPTIONS.LUMA_MATTE_ENDFRAME.classList.add(t.CSS_TOKENS.SHOW), this._lumaMatte && this._useCarnival && this._lumaMatte.clear(), this._videoEl.pause(), this._videoEl.currentTime = 0, this._useCarnival && this._carnivalAnimationRequest && this._carnivalAnimationRequest.cancel(), this._replayButton && this._replayButton.classList.contains("hide") && this._replayButton.classList.remove("hide"), this._replayButton && this._replayButton.removeAttribute("disabled")
          }
        }, {
          key: "_rafEmitterOnDrawHandler",
          value: function() {
            if (this._lumaMatte) {
              if (this.messageEffectsContainer.classList.contains("expanded")) return void this._lumaMatte.clear();
              this._lumaMatte.render()
            }
            this._rafEmitter.run()
          }
        }, {
          key: "_replayOnClickHandler",
          value: function(e) {
            this._animationHasPlayed = !1, this.playLumaMatteVideo()
          }
        }, {
          key: "playLumaMatteVideo",
          value: function() {
            var e = this;
            if (!this._isVideoReady || !this._isLumaMatteReady || this._isAnimationPlaying || this._animationHasPlayed) return null;
            this._useCarnival && this._replayButton && this._replayButton.setAttribute("disabled", ""), this.OPTIONS.LUMA_MATTE_STARTFRAME && this.OPTIONS.LUMA_MATTE_STARTFRAME.classList.add(t.CSS_TOKENS.HIDE), this.OPTIONS.LUMA_MATTE_ENDFRAME && this.OPTIONS.LUMA_MATTE_ENDFRAME.classList.remove(t.CSS_TOKENS.SHOW), this._rafEmitter.run(), this._videoEl.setAttribute("muted", ""), this._videoEl.setAttribute("playsinline", ""), this._videoEl.setAttribute("autoplay", ""), this._videoEl.currentTime = 0;
            var A = this._videoEl.play();
            void 0 !== A && this._isChrome && A.then()["catch"](function(t) {
              e._videoEl.muted = !0, e._videoEl.autoplay = !0, e._videoEl.play()
            }), this._isAnimationPlaying = !0, this._animationHasPlayed = !0
          }
        }, {
          key: "OPTIONS",
          get: function() {
            return {
              VIDEO_TEXTURE_ATLAS_DOWNLOAD_AREA_KEYFRAME: JSON.parse(this.el.getAttribute("data-video-texture-atlas-download-area-keyframe")),
              VIDEO_TEXTURE_ATLAS_PLAY_AREA_KEYFRAME: JSON.parse(this.el.getAttribute("data-video-texture-atlas-play-area-keyframe")),
              VIDEO_TEXTURE_ATLAS_RESET_AREA_KEYFRAME: JSON.parse(this.el.getAttribute("data-video-texture-atlas-reset-area-keyframe")),
              VIDEO_TEXTURE_ATLAS_BASE_PATH: this.el.getAttribute("data-video-texture-atlas-filepath"),
              LUMA_MATTE_DIMENSIONS: JSON.parse(this.el.getAttribute("data-luma-matte-dimensions")),
              LUMA_MATTE_STARTFRAME: this.el.querySelector(this.el.getAttribute("data-luma-matte-startframe")),
              LUMA_MATTE_ENDFRAME: this.el.querySelector(this.el.getAttribute("data-luma-matte-endframe")),
              USE_CARNIVAL: !!this.el.hasAttribute("data-use-carnival"),
              CARNIVAL_ELEMENT: document.querySelector(this.el.getAttribute("data-carnival-element")),
              REPLAY_BUTTON_ELEMENT: this.el.getAttribute("data-replay-button")
            }
          }
        }, {
          key: "EVENTS",
          get: function() {
            return {
              VIDEO_LOADED_METADATA: "loadedmetadata",
              VIDEO_CAN_PLAY: "canplay",
              VIDEO_CAN_PLAY_THROUGH: "canplaythrough",
              VIDEO_ENDED: "ended",
              ON_RAF_DRAW: "draw",
              ON_REPLAY_CLICK: "click"
            }
          }
        }], [{
          key: "getCurrentViewport",
          value: function(e) {
            var t = {
              L: "large",
              M: "medium",
              S: "small"
            };
            return t[e.breakpoint]
          }
        }, {
          key: "getVideoSource",
          value: function(e, A, n, i) {
            return "large" == A && n && i ? "".concat(e).concat(A, ".mp4") : "".concat(e).concat(A).concat(t.videoPixelDensity, ".mp4")
          }
        }, {
          key: "IS_SUPPORTED",
          value: function() {
            var e = document.documentElement,
              t = e.classList.contains("webgl"),
              A = e.classList.contains("fallback"),
              n = e.classList.contains("text-zoom"),
              i = e.classList.contains("edge");
            return t && !A && !n && !i
          }
        }, {
          key: "videoPixelDensity",
          get: function() {
            var e = window.devicePixelRatio;
            return 2 === e ? "_2x" : ""
          }
        }, {
          key: "CSS_TOKENS",
          get: function() {
            return {
              GL_ENABLED: "js-gl-enabled",
              SHOW: "js-show",
              HIDE: "js-hide"
            }
          }
        }]), t
      }(d["default"]);
    A["default"] = g
  }, {
    21: 21,
    61: 61,
    64: 64,
    77: 77
  }],
  110: [function(e, t, A) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }

    function i(e) {
      return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      for (var A = 0; A < t.length; A++) {
        var n = t[A];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    function o(e, t, A) {
      return t && a(e.prototype, t), A && a(e, A), e
    }

    function s(e, t) {
      return !t || "object" !== i(t) && "function" != typeof t ? u(e) : t
    }

    function u(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function c(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && h(e, t)
    }

    function h(e, t) {
      return (h = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }
    var d = n(e(61)),
      f = n(e(117)),
      m = n(e(115)),
      p = n(e(112)),
      g = e(64),
      v = n(e(82)),
      y = "\n\tattribute vec2 a_position;\n\tattribute vec2 a_texCoord;\n\n\tuniform vec2 u_resolution;\n\n\tvarying vec2 v_texCoord;\n\tvarying vec2 v_resolution;\n\n\tvoid main() {\n\t   gl_Position = vec4(a_position, 0, 1);\n\n\t   // pass the texCoord to the fragment shader\n\t   // The GPU will interpolate this value between points.\n\t   v_texCoord = a_texCoord;\n\t   v_resolution = u_resolution;\n\t}\n",
      E = "\n\tprecision highp float;\n\n\t// our texture\n\tuniform sampler2D u_image;\n\tuniform float u_radius;\n\n\t// the texCoords passed in from the vertex shader.\n\tvarying vec2 v_texCoord;\n\tvarying vec2 v_resolution;\n\tuniform vec2 u_mouse;\n\n\tvoid main(void) {\n\n\t\tfloat radius = u_radius; //0.2;\n\t\tfloat depth = radius/4.;\n\n\t\tvec2 uv = v_texCoord;\n\t\tvec2 center = u_mouse.xy/v_resolution.xy;\n\t\tvec2 s_uv = v_texCoord*v_resolution/v_resolution.x;\n\t\tvec2 s_center = u_mouse/v_resolution.x;\n\n\t\tvec2 dc = s_uv - s_center;\n\t\tfloat ax = dc.x*dc.x + dc.y*dc.y;\n\t\tfloat convex = ax;\n\t\tfloat dx = convex*depth/radius * (convex/radius - 1.);\n\t\tfloat zoom = sqrt(ax) > radius ? ax : ax + dx;\n\t\tvec2 ma = center + (uv-center)*zoom/ax;\n\n\t\tfloat alpha = sqrt(ax) > radius ? 0. : 1.;\n\n\t\tvec4 img = texture2D(u_image, ma);\n\t\tgl_FragColor = vec4(img.rgb, img.a * alpha);\n}\n",
      _ = function(e) {
        function t(e) {
          var A;
          return r(this, t), A = s(this, l(t).call(this, e)), A.container = A.el.querySelector(".grid-item-content"), A.glass = A.el.querySelector("#magnifying-glasses"), A.glassWidth = A.glass.clientWidth, A.textElement = A.el.querySelector("[data-text]"), A.textElementWidth = A.textElement.clientWidth, A.textElementHeight = A.textElement.clientHeight, A.lineHeight = parseFloat(getComputedStyle(A.textElement).lineHeight), A.canvas = document.createElement("canvas"), A.gl = A.canvas.getContext("webgl", {
            premultipliedAlpha: !1
          }), A.igloo = new f["default"](A.gl), A.program = A.igloo.program(y, E), A.container.appendChild(A.canvas), A.setOffset(), A.breakpoint = e.pageMetrics.breakpoint, A.rtl = "rtl" === document.documentElement.dir, A.isSafari = v["default"].browser.safari || v["default"].browser.chrome, A
        }
        return c(t, e), o(t, [{
          key: "mounted",
          value: function() {
            var e = this;
            this.group = this.anim.getGroupForTarget(this.el), this.group.name = "password security", this.canvasMetrics = this.group.metrics.add(this.canvas), this.animationPlayed = !1, this.addDiscreteEvent({
              start: "t - 100vh",
              end: "b",
              event: "Magnify-view",
              onEnter: function() {
                e.animationRequest && e.animationRequest.cancel(), e.animationPlayed = !1, e.timeline.pause(0), e.glass.style.opacity = "0", e.canvas.style.opacity = "0"
              },
              onExit: function() {
                e.animationRequest && e.animationRequest.cancel(), e.animationPlayed = !1, e.timeline.pause(0), e.glass.style.opacity = "0", e.canvas.style.opacity = "0"
              }
            }), this.addDiscreteEvent({
              start: "t - 50vh",
              end: "b - 50vh",
              event: "Magnify-auto-play",
              onEnter: function() {
                e.animationPlayed || e.carnivalPlay()
              }
            }), this.timeline = this.anim.createTimeGroup(), this.timeline.name = "password security animation", this.timeline.addKeyframe(this.glass, {
              start: 0,
              end: .2,
              opacity: [0, 1]
            }), this.timeline.addKeyframe(this.canvas, {
              start: 0,
              end: .3,
              opacity: [0, 1]
            }), this.svgAnimationKeyframe = this.timeline.addKeyframe({}, {
              start: .4,
              end: 5,
              i: [0, p["default"].length],
              easeFunction: "cubic-bezier(.56,.18,.58,.99)"
            }), this.timeline.addKeyframe(this.glass, {
              start: 4.2,
              end: 4.5,
              opacity: [1, 0]
            }), this.timeline.addKeyframe(this.canvas, {
              start: 4.2,
              end: 4.1,
              opacity: [1, 0]
            }), this.svgAnimationKeyframe.controller.on("draw", function(t) {
              e.animateSVG(t)
            }), this.textCanvas = new m["default"](this.textElement, this.breakpoint), this.textCanvas.drawImage().then(function(t) {
              e.render(t), e.isGLReady = !0
            })
          }
        }, {
          key: "carnivalPlay",
          value: function() {
            var e = this;
            this.animationRequest = g.director.requestAnimationStart({
              element: this.el,
              duration: 5
            }), this.animationRequest.then(function() {
              e.glass.style.opacity = "1", e.canvas.style.opacity = "1", e.timeline.play(), e.animationPlayed = !0
            })
          }
        }, {
          key: "render",
          value: function(e) {
            if (this.gl) {
              this.canvas.width = e.width, this.canvas.height = e.height, this.isSafari && (this.gl.enable(this.gl.BLEND), this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA));
              var t = this.igloo.array([-1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1]),
                A = this.igloo.array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]);
              this.texture = this.igloo.texture(e), this.program.use().attrib("a_position", t, 2).attrib("a_texCoord", A, 2).uniform("u_resolution", [this.canvas.width, this.canvas.height]).uniform("u_radius", this.glassWidth / this.canvas.width / 2), this.gl.drawArrays(this.gl.TRIANGLES, 0, 6)
            }
          }
        }, {
          key: "draw",
          value: function(e, t) {
            this.isGLReady && (this.gl.viewport(0, 0, this.canvas.width, this.canvas.height), this.gl.clearColor(0, 0, 0, 0), this.program.uniform("u_mouse", [e, t]), this.gl.drawArrays(this.gl.TRIANGLES, 0, 6)), this.glass.style.transform = "translate(".concat(e - this.glassWidth / 2, "px, ").concat(t - this.glassWidth / 2, "px)")
          }
        }, {
          key: "animateSVG",
          value: function(e) {
            var t = p["default"].normalizeVec(e.tweenProps.i.current),
              A = "M" === this.breakpoint ? 40 : (this.canvas.width - this.textElementWidth) / 2,
              n = Math.round(t.x * (this.textElementWidth - this.glassWidth) + A + this.glassWidth / 2);
            this.rtl && (n = this.canvas.width - n);
            var i = (this.canvas.height - this.textElementHeight) / 2,
              r = Math.round(t.y * (this.canvas.height - i + this.offsetHeight) + i + this.lineHeight / 2);
            this.draw(n, r)
          }
        }, {
          key: "onResizeDebounced",
          value: function(e) {
            var t = this;
            this.disabled || (this.setOffset(), this.textCanvas.update().then(function(e) {
              var A = e.width,
                n = e.height;
              t.canvas.width === A && t.canvas.height === n || (t.canvas.width = A, t.canvas.height = n, t.group.metrics.refreshMetrics(t.canvas), t.program.uniform("u_resolution", [t.canvas.width, t.canvas.height]), t.program.uniform("u_radius", t.glassWidth / t.canvas.width / 2), t.texture.set(e), t.timeline.play(4.9))
            }))
          }
        }, {
          key: "setOffset",
          value: function() {
            var e = getComputedStyle(this.textElement);
            this.offsetHeight = parseInt(e.getPropertyValue("--animation-offset-height"))
          }
        }, {
          key: "onBreakpointChange",
          value: function(e) {
            this.timeline.pause(), this.disabled = !0, this.el.classList.add("disabled")
          }
        }], [{
          key: "IS_SUPPORTED",
          value: function() {
            return !document.documentElement.classList.contains("aow") && !document.documentElement.classList.contains("reduced-motion")
          }
        }]), t
      }(d["default"]);
    t.exports = _
  }, {
    112: 112,
    115: 115,
    117: 117,
    61: 61,
    64: 64,
    82: 82
  }],
  111: [function(e, t, A) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }

    function i(e) {
      return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      for (var A = 0; A < t.length; A++) {
        var n = t[A];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    function o(e, t, A) {
      return t && a(e.prototype, t), A && a(e, A), e
    }

    function s(e, t) {
      return !t || "object" !== i(t) && "function" != typeof t ? u(e) : t
    }

    function u(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function c(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && h(e, t)
    }

    function h(e, t) {
      return (h = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }
    var d = n(e(61)),
      f = n(e(70)),
      m = e(64),
      p = function(e) {
        function t(e) {
          return r(this, t), s(this, l(t).call(this, e))
        }
        return c(t, e), o(t, [{
          key: "mounted",
          value: function() {
            var e = this;
            this.el.classList.remove("animation-static"), this.allMemoji = Array.from(this.el.querySelectorAll(".memoji-fade-out .memoji")), this.memojiContainerFade = this.el.querySelector(".memoji-fade-out"), this.mainMemoji = this.el.querySelector(".main-memoji-container .memoji"), this.mainMemojiContainer = this.el.querySelector(".main-memoji-container"), this.imageUI = this.el.querySelector(".image-ui"), this.animationPlayed = !1, this.setMainMemojiPosition(), this.setupAnimation(), this.viewKeyframe = this.addDiscreteEvent({
              start: "a0t - 50vh",
              end: "a0b - 50vh",
              anchors: [".grid-item-memoji"],
              event: "range",
              onEnter: function() {
                e.animationPlayed || e.timeline && e.carnivalPlay()
              },
              onExit: function(t) {
                e.animationRequest && e.animationRequest.cancel()
              }
            }), this.addDiscreteEvent({
              start: "a0t - 100vh",
              end: "b",
              event: "view",
              anchors: ["[data-section-memoji]"],
              onEnter: function() {
                e.timeline && (clearTimeout(e.endTimeout), e.el.classList.remove("animation-static"))
              },
              onExit: function(t) {
                e.timeline && (clearTimeout(e.endTimeout), e.animationPlayed = !1, e.el.classList.remove("animation-static"), e.timeline.gotoAndStop(0)), e.animationRequest && e.animationRequest.cancel()
              }
            })
          }
        }, {
          key: "carnivalPlay",
          value: function() {
            var e = this;
            this.animationRequest = m.director.requestAnimationStart({
              element: document.querySelector(".grid-item-memoji"),
              duration: this.timeline.duration / 1e3
            }), this.animationRequest.then(function() {
              e.startAnimation()
            })
          }
        }, {
          key: "setupAnimation",
          value: function() {
            var e = this;
            this.timeline = f["default"].createTimeline(), this.timeline.on("animationend", function(t) {
              e.endTimeout = setTimeout(function() {
                e.el.classList.add("animation-static"), e.animationRequest.cancel()
              }, 900)
            });
            var t = f["default"].setMotion(0, {
              opacity: 0,
              scale: 1.1
            }).setMotion(300, {
              opacity: 1,
              scale: 1,
              ease: "linear"
            }).setMotion(250, {
              scale: 1.1,
              ease: "cubic-bezier(0.65, 0.05, 0.36, 1)"
            }).setMotion(1e3, {
              scale: 1
            });
            this.allMemoji.sort(function(e, t) {
              var A = Number(e.getAttribute("data-order")),
                n = Number(t.getAttribute("data-order"));
              return A > n
            }), this.allMemoji.forEach(function(A, n) {
              var i = f["default"].cloneMotion(t);
              i.delay = 50 * n;
              var r = i.addToElement(A, {
                timingFunction: "cubic-bezier(0.65, 0.05, 0.36, 1)"
              });
              e.timeline.addMotionElement(r, {
                playState: "paused"
              })
            });
            var A = f["default"].setMotion(500, {
              opacity: 0
            });
            A.delay = 1450, this.timeline.addMotionElement(A.addToElement(this.memojiContainerFade, {
              timingFunction: "cubic-bezier(0.65, 0.05, 0.36, 1)",
              playState: "paused"
            }));
            var n = f["default"].setMotion(0, {
              opacity: 0,
              x: "--initial-emoji-position-x",
              y: "--initial-emoji-position-y",
              scale: 1.1,
              ease: "ease-out"
            }).setMotion(300, {
              opacity: 1,
              scale: "auto",
              ease: "ease-in"
            }).setMotion(250, {
              scale: 1.1,
              ease: "ease-out"
            }).setMotion(1e3, {
              scale: 1,
              ease: "ease-out"
            }).setMotion(400, {
              scale: 1,
              ease: "ease-in-out"
            }).setMotion(1e3, {
              x: "--final-emoji-position-x",
              y: "--final-emoji-position-y",
              scale: "--final-emoji-scale"
            });
            this.timeline.addMotionElement(n.addToElement(this.mainMemoji, {
              timingFunction: "cubic-bezier(0.65, 0.05, 0.36, 1)",
              playState: "paused"
            }));
            var i = f["default"].setMotion(0, {
              opacity: 0,
              scale: 1.15
            }).setMotion(1e3, {
              opacity: 1,
              scale: 1
            });
            i.delay = 2050, this.timeline.addMotionElement(i.addToElement(this.imageUI, {
              timingFunction: "cubic-bezier(0,-0.01,.04,.99)",
              playState: "paused"
            })), this.timeline.gotoAndStop(0)
          }
        }, {
          key: "startAnimation",
          value: function() {
            this.animationPlayed = !0, this.el.classList.remove("animation-static"), this.timeline.restart()
          }
        }, {
          key: "setMainMemojiPosition",
          value: function() {
            var e = this.mainMemojiContainer.getBoundingClientRect().width,
              t = parseInt(window.getComputedStyle(this.mainMemoji).width);
            this.mainMemoji.style.setProperty("--initial-emoji-position-x", Number((e / 2 - t / 2) * -1) + "px")
          }
        }, {
          key: "onResizeDebounced",
          value: function(e) {
            this.setMainMemojiPosition()
          }
        }], [{
          key: "IS_SUPPORTED",
          value: function() {
            return !document.documentElement.classList.contains("aow") && !document.documentElement.classList.contains("reduced-motion")
          }
        }]), t
      }(d["default"]);
    t.exports = p
  }, {
    61: 61,
    64: 64,
    70: 70
  }],
  112: [function(e, t, A) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      for (var A = 0; A < t.length; A++) {
        var n = t[A];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    function r(e, t, A) {
      return t && i(e.prototype, t), A && i(e, A), e
    }
    var a = function() {
      function e() {
        n(this, e);
        var t = '\n<svg viewBox="0 0 112.2 145" >\n  \t<path d="M0,0c43.2,0,92.1,3.1,93.1,27c0.2,12.1-17,30.5-40.9,31.9c-18.8,1.1-41.4,12.6-41.4,37.6c0,24.2,42.9,48.6,79.3,48.6"/>\n</svg>',
          A = document.createElement("div");
        A.innerHTML = t, this.svgElement = A.querySelector("svg"), this.path = A.querySelector("path"), this.length = this.path.getTotalLength()
      }
      return r(e, [{
        key: "normalizeVec",
        value: function(e) {
          var t = this.path.getPointAtLength(e),
            A = {
              x: t.x / this.svgElement.viewBox.baseVal.width,
              y: t.y / this.svgElement.viewBox.baseVal.height
            };
          return A
        }
      }]), e
    }();
    t.exports = new a
  }, {}],
  113: [function(e, t, A) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }

    function i(e) {
      return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      for (var A = 0; A < t.length; A++) {
        var n = t[A];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    function o(e, t, A) {
      return t && a(e.prototype, t), A && a(e, A), e
    }

    function s(e, t) {
      return !t || "object" !== i(t) && "function" != typeof t ? u(e) : t
    }

    function u(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function c(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && h(e, t)
    }

    function h(e, t) {
      return (h = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }
    var d = n(e(61)),
      f = (n(e(112)), e(64)),
      m = function(e) {
        function t(e) {
          var A;
          return r(this, t), A = s(this, l(t).call(this, e)), A.safari = A.el.querySelectorAll(".image-browser"), A;
        }
        return c(t, e), o(t, [{
          key: "mounted",
          value: function() {
            var e = this;
            this.timeline = this.anim.createTimeGroup(), this.timeline.name = "start page animation", this.delay = 2, this.duration = 1, this.animationKeyframe = this.timeline.addKeyframe({}, {
              start: 0,
              end: (this.duration + this.delay) * this.safari.length,
              progress: [0, 1]
            });
            for (var t = 0; t < this.safari.length; t++) this.timeline.addKeyframe(this.safari[t], {
              start: this.duration * t + this.delay * (1 + t),
              end: (this.duration + this.delay) * (1 + t),
              opacity: [0, 1],
              easeFunction: "easeInOutCubic"
            });
            var A = !0;
            this.addDiscreteEvent({
              start: "t - 50vh",
              end: "b + 30vh",
              event: "play-animation",
              onEnter: function() {
                A ? (e.carnivalPlay(), A = !1) : e.timeline.play()
              },
              onExit: function() {
                e.timeline.pause(0)
              }
            })
          }
        }, {
          key: "startAnimation",
          value: function() {
            this.timeline.play(0)
          }
        }, {
          key: "carnivalPlay",
          value: function() {
            var e = this;
            this.animationRequest = f.director.requestAnimationStart({
              element: this.el,
              duration: (this.duration + this.delay) * this.safari.length
            }), this.animationRequest.then(function() {
              e.startAnimation()
            })
          }
        }], [{
          key: "IS_SUPPORTED",
          value: function() {
            return !document.documentElement.classList.contains("aow") && !document.documentElement.classList.contains("reduced-motion")
          }
        }]), t
      }(d["default"]);
    t.exports = m
  }, {
    112: 112,
    61: 61,
    64: 64
  }],
  114: [function(e, t, A) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }

    function i(e) {
      return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      for (var A = 0; A < t.length; A++) {
        var n = t[A];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    function o(e, t, A) {
      return t && a(e.prototype, t), A && a(e, A), e
    }

    function s(e, t) {
      return !t || "object" !== i(t) && "function" != typeof t ? u(e) : t
    }

    function u(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function c(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && h(e, t)
    }

    function h(e, t) {
      return (h = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }
    var d = n(e(61)),
      f = n(e(70)),
      m = e(64),
      p = e(1),
      g = function(e) {
        function t(e) {
          return r(this, t), s(this, l(t).call(this, e))
        }
        return c(t, e), o(t, [{
          key: "mounted",
          value: function() {
            var e = this;
            this.el.classList.remove("animation-static"), this.popup = this.el.querySelector(".popup"), this.cursor = this.el.querySelector(".cursor"), this.animationPlayed = !1, this.setupAnimation(), window.addEventListener("resize:text-zoom", function() {
              p.getScale() > 1 && [e.popup, e.cursor].forEach(function(e) {
                e.removeAttribute("style")
              })
            }), this.addDiscreteEvent({
              start: "t - 50vh",
              end: "b - 50vh",
              event: "range",
              onEnter: function() {
                e.animationPlayed || e.carnivalPlay()
              },
              onExit: function(t) {
                e.animationRequest && e.animationRequest.cancel()
              }
            }), this.addDiscreteEvent({
              start: "t - 100vh",
              end: "b",
              event: "view",
              onEnter: function() {},
              onExit: function(t) {
                e.animationPlayed = !1, e.timeline.gotoAndStop(0), e.animationRequest && e.animationRequest.cancel()
              }
            })
          }
        }, {
          key: "carnivalPlay",
          value: function() {
            var e = this;
            this.animationRequest = m.director.requestAnimationStart({
              element: this.el,
              duration: this.timeline.duration / 1e3
            }), this.animationRequest.then(function() {
              e.startAnimation()
            })
          }
        }, {
          key: "setupAnimation",
          value: function() {
            this.timeline = f["default"].createTimeline();
            var e = f["default"].setMotion(1800, {
              x: "--cursor-final-x",
              y: "--cursor-final-y"
            });
            this.timeline.addMotionElement(e.addToElement(this.cursor, {
              timingFunction: "ease-out"
            }));
            var t = f["default"].setMotion(0, {
              opacity: 0
            }).setMotion(300, {
              opacity: 1
            });
            t.delay = e.duration, this.timeline.addMotionElement(t.addToElement(this.popup, {
              timingFunction: "ease-out"
            })), this.timeline.gotoAndStop(0)
          }
        }, {
          key: "startAnimation",
          value: function() {
            this.animationPlayed = !0, this.timeline.restart()
          }
        }, {
          key: "onBreakpointChange",
          value: function(e) {}
        }], [{
          key: "IS_SUPPORTED",
          value: function() {
            return !document.documentElement.classList.contains("aow") && !document.documentElement.classList.contains("reduced-motion") && !document.documentElement.classList.contains("text-zoom")
          }
        }]), t
      }(d["default"]);
    t.exports = g
  }, {
    1: 1,
    61: 61,
    64: 64,
    70: 70
  }],
  115: [function(e, t, A) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      for (var A = 0; A < t.length; A++) {
        var n = t[A];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    function r(e, t, A) {
      return t && i(e.prototype, t), A && i(e, A), e
    }
    var a = function() {
      function e(t, A) {
        n(this, e), this.el = t, this.computedStyles = getComputedStyle(t), this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.setCanvasDimension(), this.breakpoint = A
      }
      return r(e, [{
        key: "getPadding",
        value: function() {
          var e = 40;
          return "M" === this.breakpoint && (e = 80), (this.height - parseFloat(this.computedStyles.height) - e) / 2
        }
      }, {
        key: "getStyle",
        value: function() {
          var e = this,
            t = ["font-size", "line-height", "font-weight", "letter-spacing", "font-family", "color"],
            A = "";
          return t.forEach(function(t) {
            A += "".concat(t, ": ").concat(e.computedStyles[t], "; ")
          }), A += " word-break: break-all;\n\t\toverflow:hidden; padding: 0; width:".concat(this.computedStyles.width, "; height:").concat(this.computedStyles.height, ";\n\t\tpadding-top: ").concat(this.getPadding(), "px; margin: ").concat("M" === this.breakpoint ? "35px" : "auto")
        }
      }, {
        key: "createImage64",
        value: function(e) {
          var t = "style='".concat(this.getStyle(), "'"),
            A = e.outerHTML.replace(/<\s*[a-z]+[0-9]*\s+/, function(e) {
              return "".concat(e, " ").concat(t, " ")
            }),
            n = "\n<svg xmlns='http://www.w3.org/2000/svg' width='".concat(this.width, "' height='").concat(this.height, "' style=\"background:linear-gradient(150deg,#359cd7 10%,#7D6EFB 100%);\">\n\t<foreignObject x='0' y='0' width='").concat(this.width, "' height='").concat(this.height, "' style='margin:0;' externalResourcesRequired='true'>\n\t\t<html xmlns='http://www.w3.org/1999/xhtml' style=\"margin: 0; padding: 0;\">\n\t\t<head/>\n\t\t<body>\n\t\t\t<div>\n\t\t\t\t").concat(A, "\n\t\t\t</div>\n\t\t</body>\n\t\t</html>\n\t</foreignObject>\n</svg>"),
            i = btoa(unescape(encodeURIComponent(n))),
            r = "data:image/svg+xml;base64,",
            a = r + i;
          return a
        }
      }, {
        key: "createSVG",
        value: function() {
          for (var e = this.el.cloneNode(), t = this.computedStyles.getPropertyValue("--dot-radius"), A = Math.ceil(parseFloat(this.computedStyles.width) / (parseFloat(t) + 6) * parseFloat(this.computedStyles.height) / parseFloat(this.computedStyles["line-height"])), n = "", i = 0; i < A; i++) n += '<span style="display:inline-block; width: '.concat(t, "; height: ").concat(t, '; margin: 0px 5px; border-radius: 100%; background-color: #fff;"></span>');
          return e.innerHTML = n, this.createImage64(e)
        }
      }, {
        key: "setCanvasDimension",
        value: function() {
          var e = this.el.closest(".grid-item-content");
          this.width = e.clientWidth, this.height = e.clientHeight, this.padding = parseFloat(getComputedStyle(e).paddingBottom), this.canvas.width = this.width, this.canvas.height = this.height
        }
      }, {
        key: "drawImage",
        value: function() {
          var e, t = this,
            A = new Image,
            n = new Promise(function(t, A) {
              e = t
            }),
            i = function r() {
              t.ctx.drawImage(A, 0, 0), e(t.canvas), A.removeEventListener("load", r)
            };
          return A.addEventListener("load", i), A.src = this.createSVG(), n
        }
      }, {
        key: "update",
        value: function() {
          return this.setCanvasDimension(), this.drawImage()
        }
      }]), e
    }();
    t.exports = a
  }, {}],
  116: [function(e, t, A) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }

    function i(e) {
      return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      for (var A = 0; A < t.length; A++) {
        var n = t[A];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    function o(e, t, A) {
      return t && a(e.prototype, t), A && a(e, A), e
    }

    function s(e, t) {
      return !t || "object" !== i(t) && "function" != typeof t ? u(e) : t
    }

    function u(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function c(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && h(e, t)
    }

    function h(e, t) {
      return (h = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }
    var d = n(e(61)),
      f = n(e(70)),
      m = e(64),
      p = e(1),
      g = function(e) {
        function t(e) {
          return r(this, t), s(this, l(t).call(this, e))
        }
        return c(t, e), o(t, [{
          key: "mounted",
          value: function() {
            var e = this;
            this.el.classList.remove("animation-static"), this.allTranslations = Array.from(this.el.querySelectorAll("p[data-order]")), this.animationPlayed = !1, this.setupAnimation(), window.addEventListener("resize:text-zoom", function() {
              p.getScale() > 1 && e.allTranslations.forEach(function(e) {
                e.removeAttribute("style")
              })
            }), this.addDiscreteEvent({
              start: "t - 50vh",
              end: "b - 50vh",
              event: "translation-range",
              onEnter: function() {
                e.animationPlayed || e.carnivalPlay()
              },
              onExit: function(e) {}
            }), this.addDiscreteEvent({
              start: "t - 100vh",
              end: "b",
              event: "translation-view",
              onEnter: function() {},
              onExit: function(t) {
                e.animationPlayed = !1, e.timeline.gotoAndStop(0), e.animationRequest && e.animationRequest.cancel()
              }
            })
          }
        }, {
          key: "carnivalPlay",
          value: function() {
            var e = this;
            this.animationRequest = m.director.requestAnimationStart({
              element: this.el,
              duration: this.timeline.duration / 1e3 + .5
            }), this.animationRequest.then(function() {
              e.startAnimation()
            })
          }
        }, {
          key: "setupAnimation",
          value: function() {
            var e = this;
            this.timeline = f["default"].createTimeline();
            var t = f["default"].setMotion(0, {
              opacity: 0,
              scale: "0.95",
              "animation-timing-function": "cubic-bezier(0.65, 0.05, 0.36, 1)"
            }).setMotion(40, {
              opacity: 1
            }).setMotion(350, {
              scale: 1.15
            }).setMotion(80, {
              scale: 1
            }).setMotion(40, {
              scale: 1.05
            }).setMotion(40, {
              scale: 1
            });
            this.allTranslations.sort(function(e, t) {
              var A = Number(e.getAttribute("data-order")),
                n = Number(t.getAttribute("data-order"));
              return A - n
            }), this.allTranslations.forEach(function(A, n) {
              var i = f["default"].cloneMotion(t);
              i.delay = 350 * n;
              var r = i.addToElement(A);
              e.timeline.addMotionElement(r)
            }), this.timeline.gotoAndStop(0)
          }
        }, {
          key: "startAnimation",
          value: function() {
            this.animationPlayed = !0, this.timeline.restart()
          }
        }, {
          key: "onBreakpointChange",
          value: function(e) {}
        }], [{
          key: "IS_SUPPORTED",
          value: function() {
            return !document.documentElement.classList.contains("aow") && !document.documentElement.classList.contains("reduced-motion") && !document.documentElement.classList.contains("text-zoom")
          }
        }]), t
      }(d["default"]);
    t.exports = g
  }, {
    1: 1,
    61: 61,
    64: 64,
    70: 70
  }],
  117: [function(e, t, A) {
    "use strict";

    function n(e, t) {
      var A;
      e instanceof HTMLCanvasElement ? (A = e, e = n.getContext(e, t)) : A = e.canvas, this.gl = e, this.canvas = A, this.defaultFramebuffer = new n.Framebuffer(e, null)
    }
    n.QUAD2 = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), n.fetch = function(e, t) {
      var A = new XMLHttpRequest;
      return A.open("GET", e, Boolean(t)), null != t && (A.onload = function() {
        t(A.responseText)
      }), A.send(), A.responseText
    }, n.getContext = function(e, t, A) {
      var n;
      try {
        n = e.getContext("webgl", t || {}) || e.getContext("experimental-webgl", t || {})
      } catch (i) {
        n = null
      }
      if (null != n || A) return n;
      throw new Error("Could not create WebGL context.")
    }, n.looksLikeURL = function(e) {
      return null == /\s/.exec(e)
    }, n.isArray = function(e) {
      var t = Object.prototype.toString.apply(e, []),
        A = / (Float(32|64)|Int(16|32|8)|Uint(16|32|8(Clamped)?))?Array]$/;
      return null != A.exec(t)
    }, n.prototype.program = function(e, t, A) {
      return n.looksLikeURL(e) && (e = n.fetch(e)), n.looksLikeURL(t) && (t = n.fetch(t)), null != A && (e = A(e), t = A(t)), new n.Program(this.gl, e, t)
    }, n.prototype.array = function(e, t) {
      var A = this.gl,
        i = new n.Buffer(A, A.ARRAY_BUFFER);
      return null != e && i.update(e, null == t ? A.STATIC_DRAW : t), i
    }, n.prototype.elements = function(e, t) {
      var A = this.gl,
        i = new n.Buffer(A, A.ELEMENT_ARRAY_BUFFER);
      return null != e && i.update(e, null == t ? A.STATIC_DRAW : t), i
    }, n.prototype.texture = function(e, t, A, i, r) {
      var a = new n.Texture(this.gl, t, A, i, r);
      return null != e && a.set(e), a
    }, n.prototype.framebuffer = function(e) {
      var t = new n.Framebuffer(this.gl);
      return null != e && t.attach(e), t
    }, n.Program = function(e, t, A) {
      this.gl = e, this.debug = !1;
      var n = this.program = e.createProgram();
      if (e.attachShader(n, this.makeShader(e.VERTEX_SHADER, t)), e.attachShader(n, this.makeShader(e.FRAGMENT_SHADER, A)), e.linkProgram(n), !e.getProgramParameter(n, e.LINK_STATUS)) throw new Error(e.getProgramInfoLog(n));
      this.vars = {}
    }, n.Program.prototype.makeShader = function(e, t) {
      var A = this.gl,
        n = A.createShader(e);
      if (A.shaderSource(n, t), A.compileShader(n), A.getShaderParameter(n, A.COMPILE_STATUS)) return n;
      throw new Error(A.getShaderInfoLog(n))
    }, n.Program.prototype.use = function() {
      return this.gl.useProgram(this.program), this
    }, n.Program.prototype.uniform = function(e, t, A) {
      if (null == t) this.vars[e] = this.gl.getUniformLocation(this.program, e);
      else {
        null == this.vars[e] && this.uniform(e);
        var i = this.vars[e];
        if (n.isArray(t)) {
          var r = "uniform" + t.length + (A ? "i" : "f") + "v";
          this.gl[r](i, t)
        } else {
          if ("number" != typeof t && "boolean" != typeof t) throw new Error("Invalid uniform value: " + t);
          A ? this.gl.uniform1i(i, t) : this.gl.uniform1f(i, t)
        }
      }
      return this
    }, n.Program.prototype.matrix = function(e, t, A) {
      null == this.vars[e] && this.uniform(e);
      var n = "uniformMatrix" + Math.sqrt(t.length) + "fv";
      return this.gl[n](this.vars[e], Boolean(A), t), this
    }, n.Program.prototype.uniformi = function(e, t) {
      return this.uniform(e, t, !0)
    }, n.Program.prototype.attrib = function(e, t, A, n) {
      var i = this.gl;
      return null == t ? this.vars[e] = i.getAttribLocation(this.program, e) : (null == this.vars[e] && this.attrib(e), t.bind(), i.enableVertexAttribArray(this.vars[e]), i.vertexAttribPointer(this.vars[e], A, i.FLOAT, !1, null == n ? 0 : n, 0)), this
    }, n.Program.prototype.draw = function(e, t, A) {
      var n = this.gl;
      if (null == A ? n.drawArrays(e, 0, t) : n.drawElements(e, t, A, 0), this.debug && n.getError() !== n.NO_ERROR) throw new Error("WebGL rendering error");
      return this
    }, n.Program.prototype.disable = function() {
      for (var e in this.vars) {
        var t = this.vars[e];
        this.vars.hasOwnProperty(e) && "number" == typeof t && this.gl.disableVertexAttribArray(t)
      }
      return this
    }, n.Buffer = function(e, t) {
      this.gl = e, this.buffer = e.createBuffer(), this.target = null == t ? e.ARRAY_BUFFER : t, this.size = -1
    }, n.Buffer.prototype.bind = function() {
      return this.gl.bindBuffer(this.target, this.buffer), this
    }, n.Buffer.prototype.update = function(e, t) {
      var A = this.gl;
      return e instanceof Array && (e = new Float32Array(e)), t = null == t ? A.DYNAMIC_DRAW : t, this.bind(), this.size !== e.byteLength ? (A.bufferData(this.target, e, t), this.size = e.byteLength) : A.bufferSubData(this.target, 0, e), this
    }, n.Texture = function(e, t, A, n, i) {
      this.gl = e;
      var r = this.texture = e.createTexture();
      e.bindTexture(e.TEXTURE_2D, r), A = null == A ? e.CLAMP_TO_EDGE : A, n = null == n ? e.LINEAR : n, e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, A), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, A), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, n), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, n), this.format = null == t ? e.RGBA : t, this.type = null == i ? e.UNSIGNED_BYTE : i
    }, n.Texture.prototype.bind = function(e) {
      var t = this.gl;
      return null != e && t.activeTexture(t.TEXTURE0 + e), t.bindTexture(t.TEXTURE_2D, this.texture), this
    }, n.Texture.prototype.blank = function(e, t) {
      var A = this.gl;
      return this.bind(), A.texImage2D(A.TEXTURE_2D, 0, this.format, e, t, 0, this.format, this.type, null), this
    }, n.Texture.prototype.set = function(e, t, A) {
      var n = this.gl;
      return this.bind(), e instanceof Array && (e = this.type == n.FLOAT ? new Float32Array(e) : new Uint8Array(e)), null != t || null != A ? n.texImage2D(n.TEXTURE_2D, 0, this.format, t, A, 0, this.format, this.type, e) : n.texImage2D(n.TEXTURE_2D, 0, this.format, this.format, this.type, e), this
    }, n.Texture.prototype.subset = function(e, t, A, n, i) {
      var r = this.gl;
      return this.bind(), e instanceof Array && (e = this.type == r.FLOAT ? new Float32Array(e) : new Uint8Array(e)), null != n || null != i ? r.texSubImage2D(r.TEXTURE_2D, 0, t, A, n, i, this.format, this.type, e) : r.texSubImage2D(r.TEXTURE_2D, 0, t, A, this.format, this.type, e), this
    }, n.Texture.prototype.copy = function(e, t, A, n) {
      var i = this.gl;
      return i.copyTexImage2D(i.TEXTURE_2D, 0, this.format, e, t, A, n, 0), this
    }, n.Framebuffer = function(e, t) {
      this.gl = e, this.framebuffer = 2 == arguments.length ? t : e.createFramebuffer(), this.renderbuffer = null
    }, n.Framebuffer.prototype.bind = function() {
      return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebuffer), this
    }, n.Framebuffer.prototype.unbind = function() {
      return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null), this
    }, n.Framebuffer.prototype.attach = function(e) {
      var t = this.gl;
      return this.bind(), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, e.texture, 0), this
    }, n.Framebuffer.prototype.attachDepth = function(e, t) {
      var A = this.gl;
      return this.bind(), null == this.renderbuffer && (this.renderbuffer = A.createRenderbuffer(), A.renderbufferStorage(A.RENDERBUFFER, A.DEPTH_COMPONENT16, e, t), A.framebufferRenderbuffer(A.FRAMEBUFFER, A.DEPTH_ATTACHMENT, A.RENDERBUFFER, this.renderbuffer)), this
    }, t.exports = n
  }, {}],
  118: [function(e, t, A) {
    "use strict";
    var n = e(41),
      i = e(47),
      r = e(62),
      a = e(1),
      o = e(63),
      s = e(119),
      u = e(39),
      l = {
        initialize: function() {
          a.detect();
          var e = document.querySelector(".main");
          Object.assign(o, s);
          var t = new r(document.querySelector("body"));
          t.anim.on(i.EVENTS.ON_DOM_GROUPS_CREATED, function() {
            new u
          }), t.on(r.EVENTS.DOM_COMPONENTS_MOUNTED, function() {
            t.addComponent({
              componentName: "InlineModal",
              el: e
            })
          }), t.keyframeGroupsActive = !0;
          var A = function() {
              return new Promise(function(A, i) {
                t.keyframeGroupsActive && (t.anim.remove().then(function() {
                  var t = e.querySelectorAll("[data-anim-lazy-image]");
                  t.forEach(function(e) {
                    e.removeAttribute("data-anim-lazy-image")
                  }), n.initialize(), n.ready.then(function() {
                    return A()
                  })
                })["catch"](function(e) {
                  return i(e)
                }), t.keyframeGroupsActive = !1)
              })
            },
            l = function() {
              A().then(function() {
                var e = t.getComponentOfType("LocalNavColor");
                e && t.removeComponent("LocalNavColor"), t.componentsInitialized = !0, t.setupEvents(), t.addComponent({
                  componentName: "LocalNavColor",
                  el: document.querySelector('[data-component-list="LocalNavColor"]')
                })
              })
            },
            c = function() {
              document.documentElement.classList.remove("no-fallback"), document.documentElement.classList.add("fallback"), document.documentElement.classList.add("hero-fallback"), document.documentElement.classList.remove("no-hero-fallback"), l()
            };
          document.documentElement.classList.contains("reduced-motion") && l(), document.documentElement.classList.contains("text-zoom") && t.on(r.EVENTS.DOM_COMPONENTS_MOUNTED, function() {
            c()
          }), window.addEventListener("resize:text-zoom", function() {
            a.getScale() > 1 && t.keyframeGroupsActive && c()
          })
        }
      };
    l.initialize()
  }, {
    1: 1,
    119: 119,
    39: 39,
    41: 41,
    47: 47,
    62: 62,
    63: 63
  }],
  119: [function(e, t, A) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }

    function i(e, t, A) {
      return t in e ? Object.defineProperty(e, t, {
        value: A,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = A, e
    }
    var r, a = n(e(105)),
      o = n(e(104)),
      s = n(e(101)),
      u = n(e(107)),
      l = n(e(110)),
      c = n(e(116)),
      h = n(e(114)),
      d = n(e(111)),
      f = n(e(106)),
      m = n(e(102)),
      p = n(e(113)),
      g = n(e(103)),
      v = n(e(109)),
      y = n(e(108));
    t.exports = (r = {
      HeroComponent: a["default"],
      ExperienceHardwareController: o["default"],
      AXExperienceHeadline: s["default"],
      InlineVideo: u["default"],
      Magnify: l["default"],
      Translation: c["default"],
      TabsDesign: h["default"]
    }, i(r, "InlineVideo", u["default"]), i(r, "MemojiAnimation", d["default"]), i(r, "InlineModal", f["default"]), i(r, "ChargingAnimation", m["default"]), i(r, "StartPage", p["default"]), i(r, "CyclingAnimation", g["default"]), i(r, "LumaMatteVideo", v["default"]), i(r, "LocalNavColor", y["default"]), r)
  }, {
    101: 101,
    102: 102,
    103: 103,
    104: 104,
    105: 105,
    106: 106,
    107: 107,
    108: 108,
    109: 109,
    110: 110,
    111: 111,
    113: 113,
    114: 114,
    116: 116
  }]
}, {}, [118]);