! function() {
  function t(e, i, n) {
    function r(o, a) {
      if (!i[o]) {
        if (!e[o]) {
          var l = "function" == typeof require && require;
          if (!a && l) return l(o, !0);
          if (s) return s(o, !0);
          var c = new Error("Cannot find module '" + o + "'");
          throw c.code = "MODULE_NOT_FOUND", c
        }
        var u = i[o] = {
          exports: {}
        };
        e[o][0].call(u.exports, function(t) {
          var i = e[o][1][t];
          return r(i ? i : t)
        }, u, u.exports, t, e, i, n)
      }
      return i[o].exports
    }
    for (var s = "function" == typeof require && require, o = 0; o < n.length; o++) r(n[o]);
    return r
  }
  return t
}()({
  1: [function(t, e, i) {
    "use strict";
    var n = t("./helpers/TabManager"),
      r = t("./helpers/hideSiblingElements"),
      s = t("./helpers/showSiblingElements"),
      o = function(t, e) {
        e = e || {}, this._tabbables = null, this._excludeHidden = e.excludeHidden, this._firstTabbableElement = e.firstFocusElement, this._lastTabbableElement = null, this._relatedTarget = null, this.el = t, this._handleOnFocus = this._handleOnFocus.bind(this)
      },
      a = o.prototype;
    a.start = function() {
      this.updateTabbables(), r(this.el, null, this._excludeHidden), this._firstTabbableElement ? this.el.contains(document.activeElement) || this._firstTabbableElement.focus() : console.warn("this._firstTabbableElement is null, CircularTab needs at least one tabbable element."), this._relatedTarget = document.activeElement, document.addEventListener("focus", this._handleOnFocus, !0)
    }, a.stop = function() {
      s(this.el), document.removeEventListener("focus", this._handleOnFocus, !0)
    }, a.updateTabbables = function() {
      this._tabbables = n.getTabbableElements(this.el, this._excludeHidden), this._firstTabbableElement = this._firstTabbableElement || this._tabbables[0], this._lastTabbableElement = this._tabbables[this._tabbables.length - 1]
    }, a._handleOnFocus = function(t) {
      if (this.el.contains(t.target)) this._relatedTarget = t.target;
      else {
        if (t.preventDefault(), this.updateTabbables(), this._relatedTarget === this._lastTabbableElement || null === this._relatedTarget) return this._firstTabbableElement.focus(), void(this._relatedTarget = this._firstTabbableElement);
        if (this._relatedTarget === this._firstTabbableElement) return this._lastTabbableElement.focus(), void(this._relatedTarget = this._lastTabbableElement)
      }
    }, a.destroy = function() {
      this.stop(), this.el = null, this._tabbables = null, this._firstTabbableElement = null, this._lastTabbableElement = null, this._relatedTarget = null, this._handleOnFocus = null
    }, e.exports = o
  }, {
    "./helpers/TabManager": 3,
    "./helpers/hideSiblingElements": 5,
    "./helpers/showSiblingElements": 9
  }],
  2: [function(t, e, i) {
    "use strict";

    function n() {
      this._createElemnts(), this._bindEvents()
    }
    var r = n.prototype;
    r._bindEvents = function() {
      this._onResize = this._resize.bind(this)
    }, r._createElemnts = function() {
      this.span = document.createElement("span");
      var t = this.span.style;
      t.visibility = "hidden", t.position = "absolute", t.top = "0", t.bottom = "0", t.zIndex = "-1", this.span.innerHTML = "&nbsp;", this.iframe = document.createElement("iframe");
      var e = this.iframe.style;
      e.position = "absolute", e.top = "0", e.left = "0", e.width = "100%", e.height = "100%", this.span.appendChild(this.iframe), document.body.appendChild(this.span)
    }, r.detect = function(t) {
      this.originalSize = t || 17, this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.currentSize > this.originalSize && this._onResize(), this.isDetecting || (this.iframe.contentWindow.addEventListener("resize", this._onResize), this.isDetecting = !0)
    }, r._resize = function(t) {
      this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.originalSize < this.currentSize ? document.documentElement.classList.add("text-zoom") : document.documentElement.classList.remove("text-zoom"), window.dispatchEvent(new Event("resize"))
    }, r.remove = function() {
      this.isDetecting && (this.iframe.contentWindow.removeEventListener("resize", this._onResize), this.isDetecting = !1)
    }, r.destroy = function() {
      this.remove(), this.span && this.span.parentElement && this.span.parentElement.removeChild(this.span), this.span = null, this.iframe = null
    }, e.exports = new n
  }, {}],
  3: [function(t, e, i) {
    "use strict";
    var n = t("./../maps/focusableElement"),
      r = function() {
        this.focusableSelectors = n.join(",")
      },
      s = r.prototype;
    s.isFocusableElement = function(t, e, i) {
      if (e && !this._isDisplayed(t)) return !1;
      var r = t.nodeName.toLowerCase(),
        s = n.indexOf(r) > -1;
      return "a" === r || (s ? !t.disabled : !t.contentEditable || (i = i || parseFloat(t.getAttribute("tabindex")), !isNaN(i)))
    }, s.isTabbableElement = function(t, e) {
      if (e && !this._isDisplayed(t)) return !1;
      var i = t.getAttribute("tabindex");
      return i = parseFloat(i), isNaN(i) ? this.isFocusableElement(t, e, i) : i >= 0
    }, s._isDisplayed = function(t) {
      var e = t.getBoundingClientRect();
      return (0 !== e.top || 0 !== e.left || 0 !== e.width || 0 !== e.height) && "hidden" !== window.getComputedStyle(t).visibility
    }, s.getTabbableElements = function(t, e) {
      for (var i = t.querySelectorAll(this.focusableSelectors), n = i.length, r = [], s = 0; s < n; s++) this.isTabbableElement(i[s], e) && r.push(i[s]);
      return r
    }, s.getFocusableElements = function(t, e) {
      for (var i = t.querySelectorAll(this.focusableSelectors), n = i.length, r = [], s = 0; s < n; s++) this.isFocusableElement(i[s], e) && r.push(i[s]);
      return r
    }, e.exports = new r
  }, {
    "./../maps/focusableElement": 11
  }],
  4: [function(t, e, i) {
    "use strict";
    var n = t("./setAttributes"),
      r = t("./../maps/ariaMap"),
      s = t("./TabManager"),
      o = "data-original-",
      a = "tabindex",
      l = function(t, e) {
        var i = t.getAttribute(o + e);
        i || (i = t.getAttribute(e) || "", n(t, o + e, i))
      };
    e.exports = function(t, e) {
      if (s.isFocusableElement(t, e)) l(t, a), n(t, a, -1);
      else
        for (var i = s.getTabbableElements(t, e), o = i.length; o--;) l(i[o], a), n(i[o], a, -1);
      l(t, r.HIDDEN), n(t, r.HIDDEN, !0)
    }
  }, {
    "./../maps/ariaMap": 10,
    "./TabManager": 3,
    "./setAttributes": 7
  }],
  5: [function(t, e, i) {
    "use strict";
    var n = t("./hide");
    e.exports = function r(t, e, i) {
      e = e || document.body;
      for (var s = t, o = t; s = s.previousElementSibling;) n(s, i);
      for (; o = o.nextElementSibling;) n(o, i);
      t.parentElement && t.parentElement !== e && r(t.parentElement)
    }
  }, {
    "./hide": 4
  }],
  6: [function(t, e, i) {
    "use strict";
    var n = function(t, e) {
        if ("string" == typeof e)
          for (var i = e.split(/\s+/), n = 0; n < i.length; n++) t.getAttribute(i[n]) && t.removeAttribute(i[n])
      },
      r = function(t, e) {
        if (t.length)
          for (var i = 0; i < t.length; i++) n(t[i], e);
        else n(t, e)
      };
    e.exports = r
  }, {}],
  7: [function(t, e, i) {
    "use strict";
    var n = function(t, e, i) {
        t && 1 === t.nodeType && t.setAttribute(e, i)
      },
      r = function(t, e, i) {
        if ("string" != typeof i && (i = i.toString()), t)
          if (t.length)
            for (var r = 0; r < t.length; r++) n(t[r], e, i);
          else n(t, e, i)
      };
    e.exports = r
  }, {}],
  8: [function(t, e, i) {
    "use strict";
    var n = t("./removeAttributes"),
      r = t("./setAttributes"),
      s = t("./../maps/ariaMap"),
      o = "data-original-",
      a = "tabindex",
      l = function(t, e) {
        var i = t.getAttribute(o + e);
        "string" == typeof i && (i.length ? r(t, e, i) : n(t, e), n(t, o + e))
      };
    e.exports = function(t) {
      n(t, a + " " + s.HIDDEN), l(t, a), l(t, s.HIDDEN);
      for (var e = t.querySelectorAll("[" + o + a + "]"), i = e.length; i--;) l(e[i], a)
    }
  }, {
    "./../maps/ariaMap": 10,
    "./removeAttributes": 6,
    "./setAttributes": 7
  }],
  9: [function(t, e, i) {
    "use strict";
    var n = t("./show");
    e.exports = function r(t, e) {
      e = e || document.body;
      for (var i = t, s = t; i = i.previousElementSibling;) n(i);
      for (; s = s.nextElementSibling;) n(s);
      t.parentElement && t.parentElement !== e && r(t.parentElement)
    }
  }, {
    "./show": 8
  }],
  10: [function(t, e, i) {
    "use strict";
    e.exports = {
      AUTOCOMPLETE: "aria-autocomplete",
      CHECKED: "aria-checked",
      DISABLED: "aria-disabled",
      EXPANDED: "aria-expanded",
      HASPOPUP: "aria-haspopup",
      HIDDEN: "aria-hidden",
      INVALID: "aria-invalid",
      LABEL: "aria-label",
      LEVEL: "aria-level",
      MULTILINE: "aria-multiline",
      MULTISELECTABLE: "aria-multiselectable",
      ORIENTATION: "aria-orientation",
      PRESSED: "aria-pressed",
      READONLY: "aria-readonly",
      REQUIRED: "aria-required",
      SELECTED: "aria-selected",
      SORT: "aria-sort",
      VALUEMAX: "aria-valuemax",
      VALUEMIN: "aria-valuemin",
      VALUENOW: "aria-valuenow",
      VALUETEXT: "aria-valuetext",
      ATOMIC: "aria-atomic",
      BUSY: "aria-busy",
      LIVE: "aria-live",
      RELEVANT: "aria-relevant",
      DROPEFFECT: "aria-dropeffect",
      GRABBED: "aria-grabbed",
      ACTIVEDESCENDANT: "aria-activedescendant",
      CONTROLS: "aria-controls",
      DESCRIBEDBY: "aria-describedby",
      FLOWTO: "aria-flowto",
      LABELLEDBY: "aria-labelledby",
      OWNS: "aria-owns",
      POSINSET: "aria-posinset",
      SETSIZE: "aria-setsize"
    }
  }, {}],
  11: [function(t, e, i) {
    "use strict";
    e.exports = ["input", "select", "textarea", "button", "optgroup", "option", "menuitem", "fieldset", "object", "a[href]", "*[tabindex]", "*[contenteditable]"]
  }, {}],
  12: [function(t, e, i) {
    "use strict";
    var n = function() {
      function t(t) {
        for (var e = 0; e < l.length; e++) {
          var n = i[e] + t;
          if (void 0 !== a.style[n]) return n
        }
      }

      function e(t) {
        for (var e = 0; e < c.length; e++) {
          var i = c[e] + t;
          if (void 0 !== a.style[i]) return i
        }
      }
      var i = ["", "-webkit-", "-moz-", "-o-", "-ms-"],
        n = {
          "animation-delay": "transitionend",
          "-o-animation-delay": "oTransitionEnd",
          "-moz-animation-delay": "transitionend",
          "-webkit-animation-delay": "webkitTransitionEnd",
          "-ms-animation-delay": "transitionend"
        },
        r = {
          "animation-delay": "animationstart",
          "-o-animation-delay": "oanimationstart",
          "-moz-animation-delay": "animationstart",
          "-webkit-animation-delay": "webkitAnimationStart",
          "-ms-animation-delay": "MSAnimationStart"
        },
        s = {
          "animation-delay": "animationiteration",
          "-o-animation-delay": "oanimationiteration",
          "-moz-animation-delay": "animationiteration",
          "-webkit-animation-delay": "webkitAnimationIteration",
          "-ms-animation-delay": "MSAnimationIteration"
        },
        o = {
          "animation-delay": "animationend",
          "-o-animation-delay": "oanimationend",
          "-moz-animation-delay": "animationend",
          "-webkit-animation-delay": "webkitAnimationEnd",
          "-ms-animation-delay": "MSAnimationEnd"
        },
        a = document.createElement("_"),
        l = ["", "-webkit-", "-moz-", "-o-", "-ms-"],
        c = ["-webkit-", "", "-moz-", "-o-", "-ms-"];
      return {
        filter: e("filter"),
        transform: t("transform"),
        transformOrigin: t("transform-origin"),
        transition: t("transition"),
        transitionDelay: t("transition-delay"),
        transitionDuration: t("transition-duration"),
        transitionProperty: t("transition-property"),
        transitionTimingFunction: t("transition-timing-function"),
        transitionEnd: n[t("animation-delay")],
        animation: t("animation"),
        animationDelay: t("animation-delay"),
        animationDirection: t("animation-direction"),
        animationDuration: t("animation-duration"),
        animationFillMode: t("animation-fill-mode"),
        animationIterationCount: t("animation-iteration-count"),
        animationName: t("animation-name"),
        animationTimingFunction: t("animation-timing-function"),
        animationPlayState: t("animation-play-state"),
        animationStart: r[t("animation-delay")],
        animationIteration: s[t("animation-delay")],
        animationEnd: o[t("animation-delay")]
      }
    }();
    e.exports = n
  }, {}],
  13: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.slice"), t("@marcom/ac-polyfills/Element/prototype.classList");
    var n = t("./className/add");
    e.exports = function() {
      var t, e = Array.prototype.slice.call(arguments),
        i = e.shift(e);
      if (i.classList && i.classList.add) return void i.classList.add.apply(i.classList, e);
      for (t = 0; t < e.length; t++) n(i, e[t])
    }
  }, {
    "./className/add": 14,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0
  }],
  14: [function(t, e, i) {
    "use strict";
    var n = t("./contains");
    e.exports = function(t, e) {
      n(t, e) || (t.className += " " + e)
    }
  }, {
    "./contains": 15
  }],
  15: [function(t, e, i) {
    "use strict";
    var n = t("./getTokenRegExp");
    e.exports = function(t, e) {
      return n(e).test(t.className)
    }
  }, {
    "./getTokenRegExp": 16
  }],
  16: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return new RegExp("(\\s|^)" + t + "(\\s|$)")
    }
  }, {}],
  17: [function(t, e, i) {
    "use strict";
    var n = t("./contains"),
      r = t("./getTokenRegExp");
    e.exports = function(t, e) {
      n(t, e) && (t.className = t.className.replace(r(e), "$1").trim())
    }
  }, {
    "./contains": 15,
    "./getTokenRegExp": 16
  }],
  18: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.slice"), t("@marcom/ac-polyfills/Element/prototype.classList");
    var n = t("./className/remove");
    e.exports = function() {
      var t, e = Array.prototype.slice.call(arguments),
        i = e.shift(e);
      if (i.classList && i.classList.remove) return void i.classList.remove.apply(i.classList, e);
      for (t = 0; t < e.length; t++) n(i, e[t])
    }
  }, {
    "./className/remove": 17,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0
  }],
  19: [function(t, e, i) {
    "use strict";
    e.exports = {
      EventEmitterMicro: t("./ac-event-emitter-micro/EventEmitterMicro")
    }
  }, {
    "./ac-event-emitter-micro/EventEmitterMicro": 20
  }],
  20: [function(t, e, i) {
    "use strict";

    function n() {
      this._events = {}
    }
    var r = n.prototype;
    r.on = function(t, e) {
      this._events[t] = this._events[t] || [], this._events[t].unshift(e)
    }, r.once = function(t, e) {
      function i(r) {
        n.off(t, i), void 0 !== r ? e(r) : e()
      }
      var n = this;
      this.on(t, i)
    }, r.off = function(t, e) {
      if (this.has(t)) {
        var i = this._events[t].indexOf(e);
        i !== -1 && this._events[t].splice(i, 1)
      }
    }, r.trigger = function(t, e) {
      if (this.has(t))
        for (var i = this._events[t].length - 1; i >= 0; i--) void 0 !== e ? this._events[t][i](e) : this._events[t][i]()
    }, r.has = function(t) {
      return t in this._events != !1 && 0 !== this._events[t].length
    }, r.destroy = function() {
      for (var t in this._events) this._events[t] = null;
      this._events = null
    }, e.exports = n
  }, {}],
  21: [function(t, e, i) {
    "use strict";
    e.exports = {
      Clip: t("./ac-clip/Clip")
    }
  }, {
    "./ac-clip/Clip": 22
  }],
  22: [function(t, e, i) {
    "use strict";

    function n(t, e, i, r) {
      r = r || {}, this._options = r, this._isYoyo = r.yoyo, this._direction = 1, this._timeScale = 1, this._loop = r.loop || 0, this._loopCount = 0, this._target = t, this.duration(e), this._delay = 1e3 * (r.delay || 0), this._remainingDelay = this._delay, this._progress = 0, this._clock = r.clock || a, this._playing = !1, this._getTime = Date.now || function() {
        return (new Date).getTime()
      }, this._propsTo = i || {}, this._propsFrom = r.propsFrom || {}, this._onStart = r.onStart || null, this._onUpdate = r.onUpdate || null, this._onDraw = r.onDraw || null, this._onComplete = r.onComplete || null;
      var s = r.ease || u;
      this._ease = "function" == typeof s ? new l(s) : o(s), this._start = this._start.bind(this), this._update = this._update.bind(this), this._draw = this._draw.bind(this), this._isPrepared = !1, n._add(this), c.call(this)
    }
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    t("@marcom/ac-polyfills/Array/isArray");
    var s = t("@marcom/ac-object/create"),
      o = t("@marcom/ac-easing").createPredefined,
      a = t("@marcom/ac-clock"),
      l = t("@marcom/ac-easing").Ease,
      c = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      u = "ease",
      h = n.prototype = s(c.prototype);
    n.COMPLETE = "complete", n.PAUSE = "pause", n.PLAY = "play", h.play = function() {
      return this._playing || (this._playing = !0, 0 === this._delay || 0 === this._remainingDelay ? this._start() : (this._isPrepared || (this._setDiff(), this._updateProps()), this._startTimeout = setTimeout(this._start, this._remainingDelay / this._timeScale), this._delayStart = this._getTime())), this
    }, h.pause = function() {
      return this._playing && (this._startTimeout && (this._remainingDelay = this._getTime() - this._delayStart, clearTimeout(this._startTimeout)), this._stop(), this.trigger(n.PAUSE, this)), this
    }, h.destroy = function() {
      return this.pause(), this._options = null, this._target = null, this._storeTarget = null, this._ease = null, this._clock = null, this._propsTo = null, this._propsFrom = null, this._storePropsTo = null, this._storePropsFrom = null, this._propsDiff = null, this._propsEase = null, this._onStart = null, this._onUpdate = null, this._onDraw = null, this._onComplete = null, n._remove(this), c.prototype.destroy.call(this), this
    }, h.reset = function() {
      if (this._isPrepared) return this._stop(), this._resetLoop(this._target, this._storeTarget), this._direction = 1, this._loop = this._options.loop || 0, this._loopCount = 0, this._propsFrom = this._storePropsFrom, this._propsTo = this._storePropsTo, this._progress = 0, this._setStartTime(), this._onUpdate && this._onUpdate.call(this, this), this._onDraw && this._onDraw.call(this, this), this
    }, h.playing = function() {
      return this._playing
    }, h.target = function() {
      return this._target
    }, h.duration = function(t) {
      return void 0 !== t && (this._duration = t, this._durationMs = 1e3 * t / this._timeScale, this._playing && this._setStartTime()), this._duration
    }, h.timeScale = function(t) {
      return void 0 !== t && (this._timeScale = t, this.duration(this._duration)), this._timeScale
    }, h.currentTime = function(t) {
      return void 0 !== t ? this.progress(t / this._duration) * this._duration : this.progress() * this._duration
    }, h.progress = function(t) {
      return void 0 !== t && (this._progress = Math.min(1, Math.max(0, t)), this._setStartTime(), this._isPrepared || this._setDiff(), this._playing && 1 === t ? (this._completeProps(), this._onUpdate && this._onUpdate.call(this, this), this._onDraw && this._onDraw.call(this, this), this._complete()) : (this._updateProps(), this._onUpdate && this._onUpdate.call(this, this), this._onDraw && this._onDraw.call(this, this))), this._progress
    }, h._resetLoop = function(t, e) {
      var i;
      for (i in e) e.hasOwnProperty(i) && null !== e[i] && ("object" === r(e[i]) ? this._resetLoop(t[i], e[i]) : t[i] = e[i])
    }, h._cloneObjects = function() {
      var t = {},
        e = {},
        i = {};
      return this._cloneObjectsLoop(this._target, this._propsTo, this._propsFrom, t, e, i), {
        target: t,
        propsTo: e,
        propsFrom: i
      }
    }, h._cloneObjectsLoop = function(t, e, i, n, s, o) {
      var a, l;
      for (l in i) i.hasOwnProperty(l) && void 0 === e[l] && void 0 !== t[l] && (n[l] = t[l], s[l] = t[l], o[l] = i[l]);
      for (l in e) t.hasOwnProperty(l) && (a = r(t[l]), null !== t[l] && "object" === a ? (Array.isArray(t[l]) ? (n[l] = [], s[l] = [], o[l] = []) : (n[l] = {}, s[l] = {}, o[l] = {}), this._cloneObjectsLoop(t[l], e[l] || {}, i[l] || {}, n[l], s[l], o[l])) : null !== e[l] && "number" === a && (n[l] = t[l], s[l] = e[l], i && void 0 !== i[l] && (o[l] = i[l])))
    }, h._prepareProperties = function() {
      if (!this._isPrepared) {
        var t = this._cloneObjects();
        this._storeTarget = t.target, this._propsTo = t.propsTo, this._storePropsTo = this._propsTo, this._propsFrom = t.propsFrom, this._storePropsFrom = this._propsFrom, this._isPrepared = !0
      }
    }, h._setStartTime = function() {
      this._startTime = this._getTime() - this.progress() * this._durationMs
    }, h._setDiff = function() {
      this._isPrepared || this._prepareProperties(), this._propsDiff = {}, this._setDiffLoop(this._propsTo, this._propsFrom, this._target, this._propsDiff)
    }, h._setDiffLoop = function(t, e, i, n) {
      var s, o;
      for (o in t) t.hasOwnProperty(o) && (s = r(t[o]), null !== t[o] && "object" === s ? (e[o] = e[o] || {}, n[o] = n[o] || {}, this._setDiffLoop(t[o], e[o], i[o], n[o])) : "number" === s && void 0 !== i[o] ? (void 0 !== e[o] ? i[o] = e[o] : e[o] = i[o], n[o] = t[o] - i[o]) : (t[o] = null, e[o] = null))
    }, h._start = function() {
      this._startTimeout = null, this._remainingDelay = 0, this._setStartTime(), this._clock.on("update", this._update), this._clock.on("draw", this._draw), this._clock.isRunning() || this._clock.start(), this._setDiff(), this._playing = !0, this._running = !0, this._onStart && this._onStart.call(this, this), this.trigger(n.PLAY, this)
    }, h._stop = function() {
      this._playing = !1, this._running = !1, this._clock.off("update", this._update), this._clock.off("draw", this._draw)
    }, h._updateProps = function() {
      var t;
      t = 1 === this._direction ? this._ease.getValue(this._progress) : 1 - this._ease.getValue(1 - this._progress), this._updatePropsLoop(this._propsTo, this._propsFrom, this._target, this._propsDiff, t)
    }, h._updatePropsLoop = function(t, e, i, n, r) {
      var s;
      for (s in t) t.hasOwnProperty(s) && null !== t[s] && ("number" != typeof t[s] ? this._updatePropsLoop(t[s], e[s], i[s], n[s], r) : i[s] = e[s] + n[s] * r)
    }, h._completeProps = function() {
      this._completePropsLoop(this._propsTo, this._target)
    }, h._completePropsLoop = function(t, e) {
      var i;
      for (i in t) t.hasOwnProperty(i) && null !== t[i] && ("number" != typeof t[i] ? this._completePropsLoop(t[i], e[i]) : e[i] = t[i])
    }, h._complete = function() {
      this._isYoyo && (this._loop > 0 && this._loopCount <= this._loop || 0 === this._loop && 0 === this._loopCount) ? (this._propsFrom = 1 === this._direction ? this._storePropsTo : this._storePropsFrom, this._propsTo = 1 === this._direction ? this._storePropsFrom : this._storePropsTo, this._direction *= -1, this._direction === -1 && ++this._loopCount, this.progress(0), this._start()) : this._loopCount < this._loop ? (++this._loopCount, this.progress(0), this._start()) : (this.trigger(n.COMPLETE, this), this._onComplete && this._onComplete.call(this, this), this._options && this._options.destroyOnComplete && this.destroy())
    }, h._update = function(t) {
      this._running && (this._progress = (t.timeNow - this._startTime) / this._durationMs, this._progress >= 1 ? (this._progress = 1, this._running = !1, this._completeProps()) : this._updateProps(), this._onUpdate && this._onUpdate.call(this, this))
    }, h._draw = function(t) {
      this._onDraw && this._onDraw.call(this, this), this._running || (this._stop(), 1 === this._progress && this._complete())
    }, n._instantiate = function() {
      return this._clips = [], this
    }, n._add = function(t) {
      this._clips.push(t)
    }, n._remove = function(t) {
      var e = this._clips.indexOf(t);
      e > -1 && this._clips.splice(e, 1)
    }, n.getAll = function(t) {
      if (void 0 !== t) {
        for (var e = [], i = this._clips.length; i--;) this._clips[i].target() === t && e.push(this._clips[i]);
        return e
      }
      return Array.prototype.slice.call(this._clips)
    }, n.destroyAll = function(t) {
      var e = this.getAll(t);
      this._clips.length === e.length && (this._clips = []);
      for (var i = e.length; i--;) e[i].destroy();
      return e
    }, n.to = function(t, e, i, r) {
      return r = r || {}, void 0 === r.destroyOnComplete && (r.destroyOnComplete = !0), new n(t, e, i, r).play()
    }, n.from = function(t, e, i, r) {
      return r = r || {}, r.propsFrom = i, void 0 === r.destroyOnComplete && (r.destroyOnComplete = !0), new n(t, e, r.propsTo, r).play()
    }, e.exports = n._instantiate()
  }, {
    "@marcom/ac-clock": 23,
    "@marcom/ac-easing": 83,
    "@marcom/ac-event-emitter-micro": 19,
    "@marcom/ac-object/create": 158,
    "@marcom/ac-polyfills/Array/isArray": void 0
  }],
  23: [function(t, e, i) {
    "use strict";
    var n = t("./ac-clock/Clock"),
      r = t("./ac-clock/ThrottledClock"),
      s = t("./ac-clock/sharedClockInstance");
    s.Clock = n, s.ThrottledClock = r, e.exports = s
  }, {
    "./ac-clock/Clock": 24,
    "./ac-clock/ThrottledClock": 25,
    "./ac-clock/sharedClockInstance": 26
  }],
  24: [function(t, e, i) {
    "use strict";

    function n() {
      s.call(this), this.lastFrameTime = null, this._animationFrame = null, this._active = !1, this._startTime = null, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._getTime = Date.now || function() {
        return (new Date).getTime()
      }
    }
    t("@marcom/ac-polyfills/Function/prototype.bind"), t("@marcom/ac-polyfills/requestAnimationFrame");
    var r, s = t("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    (new Date).getTime();
    r = n.prototype = new s(null), r.start = function() {
      this._active || this._tick()
    }, r.stop = function() {
      this._active && window.cancelAnimationFrame(this._animationFrame), this._animationFrame = null, this.lastFrameTime = null, this._active = !1
    }, r.destroy = function() {
      this.stop(), this.off();
      var t;
      for (t in this) this.hasOwnProperty(t) && (this[t] = null)
    }, r.isRunning = function() {
      return this._active
    }, r._tick = function() {
      this._active || (this._active = !0), this._animationFrame = window.requestAnimationFrame(this._boundOnAnimationFrame)
    }, r._onAnimationFrame = function(t) {
      null === this.lastFrameTime && (this.lastFrameTime = t);
      var e = t - this.lastFrameTime,
        i = 0;
      if (e >= 1e3 && (e = 0), 0 !== e && (i = 1e3 / e), this._firstFrame === !0 && (e = 0, this._firstFrame = !1), 0 === i) this._firstFrame = !0;
      else {
        var n = {
          time: t,
          delta: e,
          fps: i,
          naturalFps: i,
          timeNow: this._getTime()
        };
        this.trigger("update", n), this.trigger("draw", n)
      }
      this._animationFrame = null, this.lastFrameTime = t, this._active !== !1 ? this._tick() : this.lastFrameTime = null
    }, e.exports = n
  }, {
    "@marcom/ac-event-emitter-micro": 116,
    "@marcom/ac-polyfills/Function/prototype.bind": void 0,
    "@marcom/ac-polyfills/requestAnimationFrame": void 0
  }],
  25: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      null !== t && (o.call(this), e = e || {}, this._fps = t || null, this._clock = e.clock || s, this._lastThrottledTime = null, this._clockEvent = null, this._boundOnClockDraw = this._onClockDraw.bind(this), this._boundOnClockUpdate = this._onClockUpdate.bind(this), this._clock.on("update", this._boundOnClockUpdate))
    }
    t("@marcom/ac-polyfills/requestAnimationFrame");
    var r, s = t("./sharedClockInstance"),
      o = t("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    r = n.prototype = new o(null), r.setFps = function(t) {
      return this._fps = t, this
    }, r.getFps = function() {
      return this._fps
    }, r.start = function() {
      return this._clock.start(), this
    }, r.stop = function() {
      return this._clock.stop(), this
    }, r.isRunning = function() {
      return this._clock.isRunning()
    }, r.destroy = function() {
      this._clock.off("update", this._boundOnClockUpdate), this._clock.destroy.call(this)
    }, r._onClockUpdate = function(t) {
      null === this._lastThrottledTime && (this._lastThrottledTime = this._clock.lastFrameTime);
      var e = t.time - this._lastThrottledTime;
      if (!this._fps) throw new TypeError("FPS is not defined.");
      Math.ceil(1e3 / e) >= this._fps + 2 || (this._clockEvent = t, this._clockEvent.delta = e, this._clockEvent.fps = 1e3 / e, this._lastThrottledTime = this._clockEvent.time, this._clock.once("draw", this._boundOnClockDraw), this.trigger("update", this._clockEvent))
    }, r._onClockDraw = function() {
      this.trigger("draw", this._clockEvent)
    }, e.exports = n
  }, {
    "./sharedClockInstance": 26,
    "@marcom/ac-event-emitter-micro": 116,
    "@marcom/ac-polyfills/requestAnimationFrame": void 0
  }],
  26: [function(t, e, i) {
    "use strict";
    var n = t("./Clock");
    e.exports = new n
  }, {
    "./Clock": 24
  }],
  27: [function(t, e, i) {
    "use strict";
    var n = t("./ac-color/Color");
    n.decimalToHex = t("./ac-color/static/decimalToHex"), n.hexToDecimal = t("./ac-color/static/hexToDecimal"), n.hexToRgb = t("./ac-color/static/hexToRgb"), n.isColor = t("./ac-color/static/isColor"), n.isHex = t("./ac-color/static/isHex"), n.isRgb = t("./ac-color/static/isRgb"), n.isRgba = t("./ac-color/static/isRgba"), n.mixColors = t("./ac-color/static/mixColors"), n.rgbaToArray = t("./ac-color/static/rgbaToArray"), n.rgbToArray = t("./ac-color/static/rgbToArray"), n.rgbToDecimal = t("./ac-color/static/rgbToDecimal"), n.rgbToHex = t("./ac-color/static/rgbToHex"), n.rgbToHsl = t("./ac-color/static/rgbToHsl"), n.rgbToHsv = t("./ac-color/static/rgbToHsv"), n.rgbaToObject = t("./ac-color/static/rgbaToObject"), n.rgbToObject = t("./ac-color/static/rgbToObject"), n.shortToLongHex = t("./ac-color/static/shortToLongHex"), e.exports = {
      Color: n
    }
  }, {
    "./ac-color/Color": 28,
    "./ac-color/static/decimalToHex": 30,
    "./ac-color/static/hexToDecimal": 31,
    "./ac-color/static/hexToRgb": 32,
    "./ac-color/static/isColor": 33,
    "./ac-color/static/isHex": 34,
    "./ac-color/static/isRgb": 35,
    "./ac-color/static/isRgba": 36,
    "./ac-color/static/mixColors": 37,
    "./ac-color/static/rgbToArray": 38,
    "./ac-color/static/rgbToDecimal": 39,
    "./ac-color/static/rgbToHex": 40,
    "./ac-color/static/rgbToHsl": 41,
    "./ac-color/static/rgbToHsv": 42,
    "./ac-color/static/rgbToObject": 43,
    "./ac-color/static/rgbaToArray": 44,
    "./ac-color/static/rgbaToObject": 45,
    "./ac-color/static/shortToLongHex": 46
  }],
  28: [function(t, e, i) {
    "use strict";

    function n(t) {
      if (!o(t) && !r.nameToRgbObject[t]) throw new Error(t + " is not a supported color.");
      this._setColor(t)
    }
    var r = t("./helpers/cssColorNames"),
      s = t("./static/hexToRgb"),
      o = t("./static/isColor"),
      a = t("./static/isHex"),
      l = t("./static/isRgba"),
      c = t("./static/mixColors"),
      u = t("./static/rgbaToArray"),
      h = t("./static/rgbToArray"),
      m = t("./static/rgbToDecimal"),
      p = t("./static/rgbToHex"),
      d = t("./static/rgbaToObject"),
      f = t("./static/rgbToObject"),
      _ = t("./static/shortToLongHex"),
      g = n.prototype;
    g._setColor = function(t) {
      if (this._color = {}, a(t)) this._color.hex = _(t), this._color.rgb = {
        color: s(t)
      };
      else if (l(t)) {
        this._color.rgba = {
          color: t
        };
        var e = this.rgbaObject();
        this._color.rgb = {
          color: "rgb(" + e.r + ", " + e.g + ", " + e.b + ")"
        }
      } else if (r.nameToRgbObject[t]) {
        var i = r.nameToRgbObject[t];
        this._color.rgb = {
          object: i,
          color: "rgb(" + i.r + ", " + i.g + ", " + i.b + ")"
        }
      } else this._color.rgb = {
        color: t
      }
    }, g.rgb = function() {
      return this._color.rgb.color
    }, g.rgba = function() {
      if (void 0 === this._color.rgba) {
        var t = this.rgbObject();
        this._color.rgba = {
          color: "rgba(" + t.r + ", " + t.g + ", " + t.b + ", 1)"
        }
      }
      return this._color.rgba.color
    }, g.hex = function() {
      return void 0 === this._color.hex && (this._color.hex = p.apply(this, this.rgbArray())), this._color.hex
    }, g.decimal = function() {
      return void 0 === this._color.decimal && (this._color.decimal = m(this.rgb())), this._color.decimal
    }, g.cssName = function() {
      return r.rgbToName[this.rgb()] || null
    }, g.rgbArray = function() {
      return void 0 === this._color.rgb.array && (this._color.rgb.array = h(this.rgb())), this._color.rgb.array
    }, g.rgbaArray = function() {
      return void 0 === this._color.rgba && this.rgba(), void 0 === this._color.rgba.array && (this._color.rgba.array = u(this.rgba())), this._color.rgba.array
    }, g.rgbObject = function() {
      return void 0 === this._color.rgb.object && (this._color.rgb.object = f(this.rgb())), this._color.rgb.object
    }, g.rgbaObject = function() {
      return void 0 === this._color.rgba && this.rgba(), void 0 === this._color.rgba.object && (this._color.rgba.object = d(this.rgba())), this._color.rgba.object
    }, g.getRed = function() {
      return this.rgbObject().r
    }, g.getGreen = function() {
      return this.rgbObject().g
    }, g.getBlue = function() {
      return this.rgbObject().b
    }, g.getAlpha = function() {
      return void 0 === this._color.rgba ? 1 : this.rgbaObject().a
    }, g.setRed = function(t) {
      return t !== this.getRed() && this._setColor("rgba(" + t + ", " + this.getGreen() + ", " + this.getBlue() + ", " + this.getAlpha() + ")"), this.rgbObject().r
    }, g.setGreen = function(t) {
      return t !== this.getGreen() && this._setColor("rgba(" + this.getRed() + ", " + t + ", " + this.getBlue() + ", " + this.getAlpha() + ")"), this.rgbObject().g
    }, g.setBlue = function(t) {
      return t !== this.getBlue() && this._setColor("rgba(" + this.getRed() + ", " + this.getGreen() + ", " + t + ", " + this.getAlpha() + ")"), this.rgbObject().b
    }, g.setAlpha = function(t) {
      return t !== this.getAlpha() && this._setColor("rgba(" + this.getRed() + ", " + this.getGreen() + ", " + this.getBlue() + ", " + t + ")"), this.rgbaObject().a
    }, g.mix = function(t, e) {
      var i = f(c(this.rgb(), t, e));
      return this._setColor("rgba(" + i.r + ", " + i.g + ", " + i.b + ", " + this.getAlpha() + ")"), this.rgb()
    }, g.clone = function() {
      return new n(this.rgb())
    }, e.exports = n
  }, {
    "./helpers/cssColorNames": 29,
    "./static/hexToRgb": 32,
    "./static/isColor": 33,
    "./static/isHex": 34,
    "./static/isRgba": 36,
    "./static/mixColors": 37,
    "./static/rgbToArray": 38,
    "./static/rgbToDecimal": 39,
    "./static/rgbToHex": 40,
    "./static/rgbToObject": 43,
    "./static/rgbaToArray": 44,
    "./static/rgbaToObject": 45,
    "./static/shortToLongHex": 46
  }],
  29: [function(t, e, i) {
    "use strict";
    var n = {
        "rgb(240, 248, 255)": "aliceblue",
        "rgb(250, 235, 215)": "antiquewhite",
        "rgb(0, 0, 0)": "black",
        "rgb(0, 0, 255)": "blue",
        "rgb(0, 255, 255)": "cyan",
        "rgb(0, 0, 139)": "darkblue",
        "rgb(0, 139, 139)": "darkcyan",
        "rgb(0, 100, 0)": "darkgreen",
        "rgb(0, 206, 209)": "darkturquoise",
        "rgb(0, 191, 255)": "deepskyblue",
        "rgb(0, 128, 0)": "green",
        "rgb(0, 255, 0)": "lime",
        "rgb(0, 0, 205)": "mediumblue",
        "rgb(0, 250, 154)": "mediumspringgreen",
        "rgb(0, 0, 128)": "navy",
        "rgb(0, 255, 127)": "springgreen",
        "rgb(0, 128, 128)": "teal",
        "rgb(25, 25, 112)": "midnightblue",
        "rgb(30, 144, 255)": "dodgerblue",
        "rgb(32, 178, 170)": "lightseagreen",
        "rgb(34, 139, 34)": "forestgreen",
        "rgb(46, 139, 87)": "seagreen",
        "rgb(47, 79, 79)": "darkslategray",
        "rgb(50, 205, 50)": "limegreen",
        "rgb(60, 179, 113)": "mediumseagreen",
        "rgb(64, 224, 208)": "turquoise",
        "rgb(65, 105, 225)": "royalblue",
        "rgb(70, 130, 180)": "steelblue",
        "rgb(72, 61, 139)": "darkslateblue",
        "rgb(72, 209, 204)": "mediumturquoise",
        "rgb(75, 0, 130)": "indigo",
        "rgb(85, 107, 47)": "darkolivegreen",
        "rgb(95, 158, 160)": "cadetblue",
        "rgb(100, 149, 237)": "cornflowerblue",
        "rgb(102, 205, 170)": "mediumaquamarine",
        "rgb(105, 105, 105)": "dimgray",
        "rgb(106, 90, 205)": "slateblue",
        "rgb(107, 142, 35)": "olivedrab",
        "rgb(112, 128, 144)": "slategray",
        "rgb(119, 136, 153)": "lightslategray",
        "rgb(123, 104, 238)": "mediumslateblue",
        "rgb(124, 252, 0)": "lawngreen",
        "rgb(127, 255, 212)": "aquamarine",
        "rgb(127, 255, 0)": "chartreuse",
        "rgb(128, 128, 128)": "gray",
        "rgb(128, 0, 0)": "maroon",
        "rgb(128, 128, 0)": "olive",
        "rgb(128, 0, 128)": "purple",
        "rgb(135, 206, 250)": "lightskyblue",
        "rgb(135, 206, 235)": "skyblue",
        "rgb(138, 43, 226)": "blueviolet",
        "rgb(139, 0, 139)": "darkmagenta",
        "rgb(139, 0, 0)": "darkred",
        "rgb(139, 69, 19)": "saddlebrown",
        "rgb(143, 188, 143)": "darkseagreen",
        "rgb(144, 238, 144)": "lightgreen",
        "rgb(147, 112, 219)": "mediumpurple",
        "rgb(148, 0, 211)": "darkviolet",
        "rgb(152, 251, 152)": "palegreen",
        "rgb(153, 50, 204)": "darkorchid",
        "rgb(154, 205, 50)": "yellowgreen",
        "rgb(160, 82, 45)": "sienna",
        "rgb(165, 42, 42)": "brown",
        "rgb(169, 169, 169)": "darkgray",
        "rgb(173, 255, 47)": "greenyellow",
        "rgb(173, 216, 230)": "lightblue",
        "rgb(175, 238, 238)": "paleturquoise",
        "rgb(176, 196, 222)": "lightsteelblue",
        "rgb(176, 224, 230)": "powderblue",
        "rgb(178, 34, 34)": "firebrick",
        "rgb(184, 134, 11)": "darkgoldenrod",
        "rgb(186, 85, 211)": "mediumorchid",
        "rgb(188, 143, 143)": "rosybrown",
        "rgb(189, 183, 107)": "darkkhaki",
        "rgb(192, 192, 192)": "silver",
        "rgb(199, 21, 133)": "mediumvioletred",
        "rgb(205, 92, 92)": "indianred",
        "rgb(205, 133, 63)": "peru",
        "rgb(210, 105, 30)": "chocolate",
        "rgb(210, 180, 140)": "tan",
        "rgb(211, 211, 211)": "lightgray",
        "rgb(216, 191, 216)": "thistle",
        "rgb(218, 165, 32)": "goldenrod",
        "rgb(218, 112, 214)": "orchid",
        "rgb(219, 112, 147)": "palevioletred",
        "rgb(220, 20, 60)": "crimson",
        "rgb(220, 220, 220)": "gainsboro",
        "rgb(221, 160, 221)": "plum",
        "rgb(222, 184, 135)": "burlywood",
        "rgb(224, 255, 255)": "lightcyan",
        "rgb(230, 230, 250)": "lavender",
        "rgb(233, 150, 122)": "darksalmon",
        "rgb(238, 232, 170)": "palegoldenrod",
        "rgb(238, 130, 238)": "violet",
        "rgb(240, 255, 255)": "azure",
        "rgb(240, 255, 240)": "honeydew",
        "rgb(240, 230, 140)": "khaki",
        "rgb(240, 128, 128)": "lightcoral",
        "rgb(244, 164, 96)": "sandybrown",
        "rgb(245, 245, 220)": "beige",
        "rgb(245, 255, 250)": "mintcream",
        "rgb(245, 222, 179)": "wheat",
        "rgb(245, 245, 245)": "whitesmoke",
        "rgb(248, 248, 255)": "ghostwhite",
        "rgb(250, 250, 210)": "lightgoldenrodyellow",
        "rgb(250, 240, 230)": "linen",
        "rgb(250, 128, 114)": "salmon",
        "rgb(253, 245, 230)": "oldlace",
        "rgb(255, 228, 196)": "bisque",
        "rgb(255, 235, 205)": "blanchedalmond",
        "rgb(255, 127, 80)": "coral",
        "rgb(255, 248, 220)": "cornsilk",
        "rgb(255, 140, 0)": "darkorange",
        "rgb(255, 20, 147)": "deeppink",
        "rgb(255, 250, 240)": "floralwhite",
        "rgb(255, 215, 0)": "gold",
        "rgb(255, 105, 180)": "hotpink",
        "rgb(255, 255, 240)": "ivory",
        "rgb(255, 240, 245)": "lavenderblush",
        "rgb(255, 250, 205)": "lemonchiffon",
        "rgb(255, 182, 193)": "lightpink",
        "rgb(255, 160, 122)": "lightsalmon",
        "rgb(255, 255, 224)": "lightyellow",
        "rgb(255, 0, 255)": "magenta",
        "rgb(255, 228, 225)": "mistyrose",
        "rgb(255, 228, 181)": "moccasin",
        "rgb(255, 222, 173)": "navajowhite",
        "rgb(255, 165, 0)": "orange",
        "rgb(255, 69, 0)": "orangered",
        "rgb(255, 239, 213)": "papayawhip",
        "rgb(255, 218, 185)": "peachpuff",
        "rgb(255, 192, 203)": "pink",
        "rgb(255, 0, 0)": "red",
        "rgb(255, 245, 238)": "seashell",
        "rgb(255, 250, 250)": "snow",
        "rgb(255, 99, 71)": "tomato",
        "rgb(255, 255, 255)": "white",
        "rgb(255, 255, 0)": "yellow",
        "rgb(102, 51, 153)": "rebeccapurple"
      },
      r = {
        aqua: {
          r: 0,
          g: 255,
          b: 255
        },
        aliceblue: {
          r: 240,
          g: 248,
          b: 255
        },
        antiquewhite: {
          r: 250,
          g: 235,
          b: 215
        },
        black: {
          r: 0,
          g: 0,
          b: 0
        },
        blue: {
          r: 0,
          g: 0,
          b: 255
        },
        cyan: {
          r: 0,
          g: 255,
          b: 255
        },
        darkblue: {
          r: 0,
          g: 0,
          b: 139
        },
        darkcyan: {
          r: 0,
          g: 139,
          b: 139
        },
        darkgreen: {
          r: 0,
          g: 100,
          b: 0
        },
        darkturquoise: {
          r: 0,
          g: 206,
          b: 209
        },
        deepskyblue: {
          r: 0,
          g: 191,
          b: 255
        },
        green: {
          r: 0,
          g: 128,
          b: 0
        },
        lime: {
          r: 0,
          g: 255,
          b: 0
        },
        mediumblue: {
          r: 0,
          g: 0,
          b: 205
        },
        mediumspringgreen: {
          r: 0,
          g: 250,
          b: 154
        },
        navy: {
          r: 0,
          g: 0,
          b: 128
        },
        springgreen: {
          r: 0,
          g: 255,
          b: 127
        },
        teal: {
          r: 0,
          g: 128,
          b: 128
        },
        midnightblue: {
          r: 25,
          g: 25,
          b: 112
        },
        dodgerblue: {
          r: 30,
          g: 144,
          b: 255
        },
        lightseagreen: {
          r: 32,
          g: 178,
          b: 170
        },
        forestgreen: {
          r: 34,
          g: 139,
          b: 34
        },
        seagreen: {
          r: 46,
          g: 139,
          b: 87
        },
        darkslategray: {
          r: 47,
          g: 79,
          b: 79
        },
        darkslategrey: {
          r: 47,
          g: 79,
          b: 79
        },
        limegreen: {
          r: 50,
          g: 205,
          b: 50
        },
        mediumseagreen: {
          r: 60,
          g: 179,
          b: 113
        },
        turquoise: {
          r: 64,
          g: 224,
          b: 208
        },
        royalblue: {
          r: 65,
          g: 105,
          b: 225
        },
        steelblue: {
          r: 70,
          g: 130,
          b: 180
        },
        darkslateblue: {
          r: 72,
          g: 61,
          b: 139
        },
        mediumturquoise: {
          r: 72,
          g: 209,
          b: 204
        },
        indigo: {
          r: 75,
          g: 0,
          b: 130
        },
        darkolivegreen: {
          r: 85,
          g: 107,
          b: 47
        },
        cadetblue: {
          r: 95,
          g: 158,
          b: 160
        },
        cornflowerblue: {
          r: 100,
          g: 149,
          b: 237
        },
        mediumaquamarine: {
          r: 102,
          g: 205,
          b: 170
        },
        dimgray: {
          r: 105,
          g: 105,
          b: 105
        },
        dimgrey: {
          r: 105,
          g: 105,
          b: 105
        },
        slateblue: {
          r: 106,
          g: 90,
          b: 205
        },
        olivedrab: {
          r: 107,
          g: 142,
          b: 35
        },
        slategray: {
          r: 112,
          g: 128,
          b: 144
        },
        slategrey: {
          r: 112,
          g: 128,
          b: 144
        },
        lightslategray: {
          r: 119,
          g: 136,
          b: 153
        },
        lightslategrey: {
          r: 119,
          g: 136,
          b: 153
        },
        mediumslateblue: {
          r: 123,
          g: 104,
          b: 238
        },
        lawngreen: {
          r: 124,
          g: 252,
          b: 0
        },
        aquamarine: {
          r: 127,
          g: 255,
          b: 212
        },
        chartreuse: {
          r: 127,
          g: 255,
          b: 0
        },
        gray: {
          r: 128,
          g: 128,
          b: 128
        },
        grey: {
          r: 128,
          g: 128,
          b: 128
        },
        maroon: {
          r: 128,
          g: 0,
          b: 0
        },
        olive: {
          r: 128,
          g: 128,
          b: 0
        },
        purple: {
          r: 128,
          g: 0,
          b: 128
        },
        lightskyblue: {
          r: 135,
          g: 206,
          b: 250
        },
        skyblue: {
          r: 135,
          g: 206,
          b: 235
        },
        blueviolet: {
          r: 138,
          g: 43,
          b: 226
        },
        darkmagenta: {
          r: 139,
          g: 0,
          b: 139
        },
        darkred: {
          r: 139,
          g: 0,
          b: 0
        },
        saddlebrown: {
          r: 139,
          g: 69,
          b: 19
        },
        darkseagreen: {
          r: 143,
          g: 188,
          b: 143
        },
        lightgreen: {
          r: 144,
          g: 238,
          b: 144
        },
        mediumpurple: {
          r: 147,
          g: 112,
          b: 219
        },
        darkviolet: {
          r: 148,
          g: 0,
          b: 211
        },
        palegreen: {
          r: 152,
          g: 251,
          b: 152
        },
        darkorchid: {
          r: 153,
          g: 50,
          b: 204
        },
        yellowgreen: {
          r: 154,
          g: 205,
          b: 50
        },
        sienna: {
          r: 160,
          g: 82,
          b: 45
        },
        brown: {
          r: 165,
          g: 42,
          b: 42
        },
        darkgray: {
          r: 169,
          g: 169,
          b: 169
        },
        darkgrey: {
          r: 169,
          g: 169,
          b: 169
        },
        greenyellow: {
          r: 173,
          g: 255,
          b: 47
        },
        lightblue: {
          r: 173,
          g: 216,
          b: 230
        },
        paleturquoise: {
          r: 175,
          g: 238,
          b: 238
        },
        lightsteelblue: {
          r: 176,
          g: 196,
          b: 222
        },
        powderblue: {
          r: 176,
          g: 224,
          b: 230
        },
        firebrick: {
          r: 178,
          g: 34,
          b: 34
        },
        darkgoldenrod: {
          r: 184,
          g: 134,
          b: 11
        },
        mediumorchid: {
          r: 186,
          g: 85,
          b: 211
        },
        rosybrown: {
          r: 188,
          g: 143,
          b: 143
        },
        darkkhaki: {
          r: 189,
          g: 183,
          b: 107
        },
        silver: {
          r: 192,
          g: 192,
          b: 192
        },
        mediumvioletred: {
          r: 199,
          g: 21,
          b: 133
        },
        indianred: {
          r: 205,
          g: 92,
          b: 92
        },
        peru: {
          r: 205,
          g: 133,
          b: 63
        },
        chocolate: {
          r: 210,
          g: 105,
          b: 30
        },
        tan: {
          r: 210,
          g: 180,
          b: 140
        },
        lightgray: {
          r: 211,
          g: 211,
          b: 211
        },
        lightgrey: {
          r: 211,
          g: 211,
          b: 211
        },
        thistle: {
          r: 216,
          g: 191,
          b: 216
        },
        goldenrod: {
          r: 218,
          g: 165,
          b: 32
        },
        orchid: {
          r: 218,
          g: 112,
          b: 214
        },
        palevioletred: {
          r: 219,
          g: 112,
          b: 147
        },
        crimson: {
          r: 220,
          g: 20,
          b: 60
        },
        gainsboro: {
          r: 220,
          g: 220,
          b: 220
        },
        plum: {
          r: 221,
          g: 160,
          b: 221
        },
        burlywood: {
          r: 222,
          g: 184,
          b: 135
        },
        lightcyan: {
          r: 224,
          g: 255,
          b: 255
        },
        lavender: {
          r: 230,
          g: 230,
          b: 250
        },
        darksalmon: {
          r: 233,
          g: 150,
          b: 122
        },
        palegoldenrod: {
          r: 238,
          g: 232,
          b: 170
        },
        violet: {
          r: 238,
          g: 130,
          b: 238
        },
        azure: {
          r: 240,
          g: 255,
          b: 255
        },
        honeydew: {
          r: 240,
          g: 255,
          b: 240
        },
        khaki: {
          r: 240,
          g: 230,
          b: 140
        },
        lightcoral: {
          r: 240,
          g: 128,
          b: 128
        },
        sandybrown: {
          r: 244,
          g: 164,
          b: 96
        },
        beige: {
          r: 245,
          g: 245,
          b: 220
        },
        mintcream: {
          r: 245,
          g: 255,
          b: 250
        },
        wheat: {
          r: 245,
          g: 222,
          b: 179
        },
        whitesmoke: {
          r: 245,
          g: 245,
          b: 245
        },
        ghostwhite: {
          r: 248,
          g: 248,
          b: 255
        },
        lightgoldenrodyellow: {
          r: 250,
          g: 250,
          b: 210
        },
        linen: {
          r: 250,
          g: 240,
          b: 230
        },
        salmon: {
          r: 250,
          g: 128,
          b: 114
        },
        oldlace: {
          r: 253,
          g: 245,
          b: 230
        },
        bisque: {
          r: 255,
          g: 228,
          b: 196
        },
        blanchedalmond: {
          r: 255,
          g: 235,
          b: 205
        },
        coral: {
          r: 255,
          g: 127,
          b: 80
        },
        cornsilk: {
          r: 255,
          g: 248,
          b: 220
        },
        darkorange: {
          r: 255,
          g: 140,
          b: 0
        },
        deeppink: {
          r: 255,
          g: 20,
          b: 147
        },
        floralwhite: {
          r: 255,
          g: 250,
          b: 240
        },
        fuchsia: {
          r: 255,
          g: 0,
          b: 255
        },
        gold: {
          r: 255,
          g: 215,
          b: 0
        },
        hotpink: {
          r: 255,
          g: 105,
          b: 180
        },
        ivory: {
          r: 255,
          g: 255,
          b: 240
        },
        lavenderblush: {
          r: 255,
          g: 240,
          b: 245
        },
        lemonchiffon: {
          r: 255,
          g: 250,
          b: 205
        },
        lightpink: {
          r: 255,
          g: 182,
          b: 193
        },
        lightsalmon: {
          r: 255,
          g: 160,
          b: 122
        },
        lightyellow: {
          r: 255,
          g: 255,
          b: 224
        },
        magenta: {
          r: 255,
          g: 0,
          b: 255
        },
        mistyrose: {
          r: 255,
          g: 228,
          b: 225
        },
        moccasin: {
          r: 255,
          g: 228,
          b: 181
        },
        navajowhite: {
          r: 255,
          g: 222,
          b: 173
        },
        orange: {
          r: 255,
          g: 165,
          b: 0
        },
        orangered: {
          r: 255,
          g: 69,
          b: 0
        },
        papayawhip: {
          r: 255,
          g: 239,
          b: 213
        },
        peachpuff: {
          r: 255,
          g: 218,
          b: 185
        },
        pink: {
          r: 255,
          g: 192,
          b: 203
        },
        red: {
          r: 255,
          g: 0,
          b: 0
        },
        seashell: {
          r: 255,
          g: 245,
          b: 238
        },
        snow: {
          r: 255,
          g: 250,
          b: 250
        },
        tomato: {
          r: 255,
          g: 99,
          b: 71
        },
        white: {
          r: 255,
          g: 255,
          b: 255
        },
        yellow: {
          r: 255,
          g: 255,
          b: 0
        },
        rebeccapurple: {
          r: 102,
          g: 51,
          b: 153
        }
      };
    e.exports = {
      rgbToName: n,
      nameToRgbObject: r
    }
  }, {}],
  30: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return "#" + t.toString(16)
    }
  }, {}],
  31: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return parseInt(t.substr(1), 16)
    }
  }, {}],
  32: [function(t, e, i) {
    "use strict";
    var n = t("./shortToLongHex");
    e.exports = function(t) {
      t = n(t);
      var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
      return e ? "rgb(" + parseInt(e[1], 16) + ", " + parseInt(e[2], 16) + ", " + parseInt(e[3], 16) + ")" : null
    }
  }, {
    "./shortToLongHex": 46
  }],
  33: [function(t, e, i) {
    "use strict";
    var n = t("./isRgb"),
      r = t("./isRgba"),
      s = t("./isHex");
    e.exports = function(t) {
      return s(t) || n(t) || r(t)
    }
  }, {
    "./isHex": 34,
    "./isRgb": 35,
    "./isRgba": 36
  }],
  34: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
      return e.test(t)
    }
  }, {}],
  35: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e = /^rgb\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*\)$/;
      return null !== e.exec(t)
    }
  }, {}],
  36: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e = /^rgba\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*(0(\.\d+)?|1(\.0+)?)\s*\)$/;
      return null !== e.exec(t)
    }
  }, {}],
  37: [function(t, e, i) {
    "use strict";
    var n = t("./isHex"),
      r = t("./hexToRgb"),
      s = t("./rgbToObject");
    e.exports = function(t, e, i) {
      t = n(t) ? r(t) : t, e = n(e) ? r(e) : e, t = s(t), e = s(e);
      var o = t.r + (e.r - t.r) * i,
        a = t.g + (e.g - t.g) * i,
        l = t.b + (e.b - t.b) * i;
      return "rgb(" + Math.round(o) + ", " + Math.round(a) + ", " + Math.round(l) + ")"
    }
  }, {
    "./hexToRgb": 32,
    "./isHex": 34,
    "./rgbToObject": 43
  }],
  38: [function(t, e, i) {
    "use strict";
    var n = t("./rgbToObject");
    e.exports = function(t) {
      var e = n(t);
      return [e.r, e.g, e.b]
    }
  }, {
    "./rgbToObject": 43
  }],
  39: [function(t, e, i) {
    "use strict";
    var n = t("./hexToDecimal"),
      r = t("./rgbToArray"),
      s = t("./rgbToHex");
    e.exports = function(t) {
      var e = s.apply(this, r(t));
      return n(e)
    }
  }, {
    "./hexToDecimal": 31,
    "./rgbToArray": 38,
    "./rgbToHex": 40
  }],
  40: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i) {
      return "#" + ((1 << 24) + (t << 16) + (e << 8) + i).toString(16).slice(1)
    }
  }, {}],
  41: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i) {
      if (3 !== arguments.length) return !1;
      t /= 255, e /= 255, i /= 255;
      var n, r, s = Math.max(t, e, i),
        o = Math.min(t, e, i),
        a = s + o,
        l = s - o,
        c = a / 2;
      if (s === o) n = r = 0;
      else {
        switch (r = c > .5 ? l / (2 - s - o) : l / a, s) {
          case t:
            n = (e - i) / l;
            break;
          case e:
            n = 2 + (i - t) / l;
            break;
          case i:
            n = 4 + (t - e) / l
        }
        n *= 60, n < 0 && (n += 360)
      }
      return [n, Math.round(100 * r), Math.round(100 * c)]
    }
  }, {}],
  42: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i) {
      if (3 !== arguments.length) return !1;
      var n, r, s = t / 255,
        o = e / 255,
        a = i / 255,
        l = Math.max(s, o, a),
        c = Math.min(s, o, a),
        u = l,
        h = l - c;
      if (r = 0 === l ? 0 : h / l, l === c) n = 0;
      else {
        switch (l) {
          case s:
            n = (o - a) / h + (o < a ? 6 : 0);
            break;
          case o:
            n = (a - s) / h + 2;
            break;
          case a:
            n = (s - o) / h + 4
        }
        n /= 6
      }
      return [Math.round(360 * n), Math.round(100 * r), Math.round(100 * u)]
    }
  }, {}],
  43: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e = /rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/,
        i = e.exec(t);
      return {
        r: Number(i[1]),
        g: Number(i[2]),
        b: Number(i[3])
      }
    }
  }, {}],
  44: [function(t, e, i) {
    "use strict";
    var n = t("./rgbaToObject");
    e.exports = function(t) {
      var e = n(t);
      return [e.r, e.g, e.b, e.a]
    }
  }, {
    "./rgbaToObject": 45
  }],
  45: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e = /rgba\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0(\.\d+)?|1(\.0+)?)\s*\)/,
        i = e.exec(t);
      return {
        r: Number(i[1]),
        g: Number(i[2]),
        b: Number(i[3]),
        a: Number(i[4])
      }
    }
  }, {}],
  46: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      return t = t.replace(e, function(t, e, i, n) {
        return "#" + e + e + i + i + n + n
      })
    }
  }, {}],
  47: [function(t, e, i) {
    "use strict";
    var n = t("./utils/addEventListener"),
      r = t("./shared/getEventType");
    e.exports = function(t, e, i, s) {
      return e = r(t, e), n(t, e, i, s)
    }
  }, {
    "./shared/getEventType": 49,
    "./utils/addEventListener": 51
  }],
  48: [function(t, e, i) {
    "use strict";
    var n = t("./utils/removeEventListener"),
      r = t("./shared/getEventType");
    e.exports = function(t, e, i, s) {
      return e = r(t, e), n(t, e, i, s)
    }
  }, {
    "./shared/getEventType": 49,
    "./utils/removeEventListener": 52
  }],
  49: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-prefixer/getEventType");
    e.exports = function(t, e) {
      var i, r;
      return i = "tagName" in t ? t.tagName : t === window ? "window" : "document", r = n(e, i), r ? r : e
    }
  }, {
    "@marcom/ac-prefixer/getEventType": 165
  }],
  50: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return t = t || window.event, "undefined" != typeof t.target ? t.target : t.srcElement
    }
  }, {}],
  51: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i, n) {
      return t.addEventListener ? t.addEventListener(e, i, !!n) : t.attachEvent("on" + e, i), t
    }
  }, {}],
  52: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i, n) {
      return t.removeEventListener ? t.removeEventListener(e, i, !!n) : t.detachEvent("on" + e, i), t
    }
  }, {}],
  53: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e) {
      var i;
      return e ? (i = t.getBoundingClientRect(), {
        width: i.width,
        height: i.height
      }) : {
        width: t.offsetWidth,
        height: t.offsetHeight
      }
    }
  }, {}],
  54: [function(t, e, i) {
    "use strict";
    var n = t("./getDimensions"),
      r = t("./getScrollX"),
      s = t("./getScrollY");
    e.exports = function(t, e) {
      var i, o, a, l;
      if (e) return i = t.getBoundingClientRect(), o = r(), a = s(), {
        top: i.top + a,
        right: i.right + o,
        bottom: i.bottom + a,
        left: i.left + o
      };
      for (l = n(t, e), i = {
          top: t.offsetTop,
          left: t.offsetLeft,
          width: l.width,
          height: l.height
        }; t = t.offsetParent;) i.top += t.offsetTop, i.left += t.offsetLeft;
      return {
        top: i.top,
        right: i.left + i.width,
        bottom: i.top + i.height,
        left: i.left
      }
    }
  }, {
    "./getDimensions": 53,
    "./getScrollX": 57,
    "./getScrollY": 58
  }],
  55: [function(t, e, i) {
    "use strict";
    var n = t("./getDimensions"),
      r = t("./getPixelsInViewport");
    e.exports = function(t, e) {
      var i = r(t, e),
        s = n(t, e).height;
      return i / s
    }
  }, {
    "./getDimensions": 53,
    "./getPixelsInViewport": 56
  }],
  56: [function(t, e, i) {
    "use strict";
    var n = t("./getViewportPosition");
    e.exports = function(t, e) {
      var i, r = window.innerHeight,
        s = n(t, e);
      return s.top >= r || s.bottom <= 0 ? 0 : (i = s.bottom - s.top, s.top < 0 && (i += s.top), s.bottom > r && (i -= s.bottom - r), i)
    }
  }, {
    "./getViewportPosition": 59
  }],
  57: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return t = t || window, t === window ? window.scrollX || window.pageXOffset : t.scrollLeft
    }
  }, {}],
  58: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return t = t || window, t === window ? window.scrollY || window.pageYOffset : t.scrollTop
    }
  }, {}],
  59: [function(t, e, i) {
    "use strict";
    var n = t("./getPagePosition"),
      r = t("./getScrollX"),
      s = t("./getScrollY");
    e.exports = function(t, e) {
      var i, o, a;
      return e ? (i = t.getBoundingClientRect(), {
        top: i.top,
        right: i.right,
        bottom: i.bottom,
        left: i.left
      }) : (i = n(t), o = r(), a = s(), {
        top: i.top - a,
        right: i.right - o,
        bottom: i.bottom - a,
        left: i.left - o
      })
    }
  }, {
    "./getPagePosition": 54,
    "./getScrollX": 57,
    "./getScrollY": 58
  }],
  60: [function(t, e, i) {
    "use strict";
    var n = t("./getPixelsInViewport"),
      r = t("./getPercentInViewport");
    e.exports = function(t, e, i) {
      var s;
      return i = i || 0, "string" == typeof i && "px" === i.slice(-2) ? (i = parseInt(i, 10), s = n(t, e)) : s = r(t, e), s > 0 && s >= i
    }
  }, {
    "./getPercentInViewport": 55,
    "./getPixelsInViewport": 56
  }],
  61: [function(t, e, i) {
    "use strict";
    e.exports = 8
  }, {}],
  62: [function(t, e, i) {
    "use strict";
    e.exports = 11
  }, {}],
  63: [function(t, e, i) {
    "use strict";
    e.exports = 9
  }, {}],
  64: [function(t, e, i) {
    "use strict";
    e.exports = 1
  }, {}],
  65: [function(t, e, i) {
    "use strict";
    e.exports = 3
  }, {}],
  66: [function(t, e, i) {
    "use strict";
    var n = t("../isNode");
    e.exports = function(t, e) {
      return !!n(t) && ("number" == typeof e ? t.nodeType === e : e.indexOf(t.nodeType) !== -1)
    }
  }, {
    "../isNode": 70
  }],
  67: [function(t, e, i) {
    "use strict";
    var n = t("./isNodeType"),
      r = t("../COMMENT_NODE"),
      s = t("../DOCUMENT_FRAGMENT_NODE"),
      o = t("../ELEMENT_NODE"),
      a = t("../TEXT_NODE"),
      l = [o, a, r, s],
      c = " must be an Element, TextNode, Comment, or Document Fragment",
      u = [o, a, r],
      h = " must be an Element, TextNode, or Comment",
      m = [o, s],
      p = " must be an Element, or Document Fragment",
      d = " must have a parentNode";
    e.exports = {
      parentNode: function(t, e, i, r) {
        if (r = r || "target", (t || e) && !n(t, m)) throw new TypeError(i + ": " + r + p)
      },
      childNode: function(t, e, i, r) {
        if (r = r || "target", (t || e) && !n(t, u)) throw new TypeError(i + ": " + r + h)
      },
      insertNode: function(t, e, i, r) {
        if (r = r || "node", (t || e) && !n(t, l)) throw new TypeError(i + ": " + r + c)
      },
      hasParentNode: function(t, e, i) {
        if (i = i || "target", !t.parentNode) throw new TypeError(e + ": " + i + d)
      }
    }
  }, {
    "../COMMENT_NODE": 61,
    "../DOCUMENT_FRAGMENT_NODE": 62,
    "../ELEMENT_NODE": 64,
    "../TEXT_NODE": 65,
    "./isNodeType": 66
  }],
  68: [function(t, e, i) {
    "use strict";
    var n = t("./internal/isNodeType"),
      r = t("./DOCUMENT_FRAGMENT_NODE");
    e.exports = function(t) {
      return n(t, r)
    }
  }, {
    "./DOCUMENT_FRAGMENT_NODE": 62,
    "./internal/isNodeType": 66
  }],
  69: [function(t, e, i) {
    "use strict";
    var n = t("./internal/isNodeType"),
      r = t("./ELEMENT_NODE");
    e.exports = function(t) {
      return n(t, r)
    }
  }, {
    "./ELEMENT_NODE": 64,
    "./internal/isNodeType": 66
  }],
  70: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return !(!t || !t.nodeType)
    }
  }, {}],
  71: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate");
    e.exports = function(t) {
      return n.childNode(t, !0, "remove"), t.parentNode ? t.parentNode.removeChild(t) : t
    }
  }, {
    "./internal/validate": 67
  }],
  72: [function(t, e, i) {
    "use strict";
    e.exports = {
      getStyle: t("./getStyle"),
      setStyle: t("./setStyle")
    }
  }, {
    "./getStyle": 73,
    "./setStyle": 75
  }],
  73: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-prefixer/getStyleProperty"),
      r = t("@marcom/ac-prefixer/stripPrefixes");
    e.exports = function() {
      var t, e, i, s, o = Array.prototype.slice.call(arguments),
        a = o.shift(o),
        l = window.getComputedStyle(a),
        c = {};
      for ("string" != typeof o[0] && (o = o[0]), s = 0; s < o.length; s++) t = o[s], e = n(t), e ? (t = r(e), i = l[e], i && "auto" !== i || (i = null), i && (i = r(i))) : i = null, c[t] = i;
      return c
    }
  }, {
    "@marcom/ac-prefixer/getStyleProperty": 167,
    "@marcom/ac-prefixer/stripPrefixes": 175
  }],
  74: [function(t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e.exports = function(t) {
      var e, i, r;
      if (!t && 0 !== t) return "";
      if (Array.isArray(t)) return t + "";
      if ("object" === ("undefined" == typeof t ? "undefined" : n(t))) {
        for (e = "", i = Object.keys(t), r = 0; r < i.length; r++) e += i[r] + "(" + t[i[r]] + ") ";
        return e.trim()
      }
      return t
    }
  }, {}],
  75: [function(t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      r = t("@marcom/ac-prefixer/getStyleCSS"),
      s = t("@marcom/ac-prefixer/getStyleProperty"),
      o = t("./internal/normalizeValue");
    e.exports = function(t, e) {
      var i, a, l, c, u, h = "";
      if ("object" !== ("undefined" == typeof e ? "undefined" : n(e))) throw new TypeError("setStyle: styles must be an Object");
      for (a in e) c = o(e[a]), c || 0 === c ? (i = r(a, c), i !== !1 && (h += " " + i)) : (l = s(a), "removeAttribute" in t.style ? t.style.removeAttribute(l) : t.style[l] = "");
      return h.length && (u = t.style.cssText, ";" !== u.charAt(u.length - 1) && (u += ";"), u += h, t.style.cssText = u), t
    }
  }, {
    "./internal/normalizeValue": 74,
    "@marcom/ac-prefixer/getStyleCSS": 166,
    "@marcom/ac-prefixer/getStyleProperty": 167
  }],
  76: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-nodes/isElement"),
      r = t("./matchesSelector"),
      s = t("./internal/validate");
    e.exports = function(t, e, i, o) {
      var a = [];
      if (s.childNode(t, !0, "ancestors"), s.selector(e, !1, "ancestors"), i && n(t) && (!e || r(t, e)) && a.push(t), o = o || document.body, t !== o)
        for (;
          (t = t.parentNode) && n(t) && (e && !r(t, e) || a.push(t), t !== o););
      return a
    }
  }, {
    "./internal/validate": 78,
    "./matchesSelector": 79,
    "@marcom/ac-dom-nodes/isElement": 69
  }],
  77: [function(t, e, i) {
    "use strict";
    e.exports = window.Element ? function(t) {
      return t.matches || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector
    }(Element.prototype) : null
  }, {}],
  78: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.indexOf");
    var n = t("@marcom/ac-dom-nodes/isNode"),
      r = t("@marcom/ac-dom-nodes/COMMENT_NODE"),
      s = t("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE"),
      o = t("@marcom/ac-dom-nodes/DOCUMENT_NODE"),
      a = t("@marcom/ac-dom-nodes/ELEMENT_NODE"),
      l = t("@marcom/ac-dom-nodes/TEXT_NODE"),
      c = function(t, e) {
        return !!n(t) && ("number" == typeof e ? t.nodeType === e : e.indexOf(t.nodeType) !== -1)
      },
      u = [a, o, s],
      h = " must be an Element, Document, or Document Fragment",
      m = [a, l, r],
      p = " must be an Element, TextNode, or Comment",
      d = " must be a string";
    e.exports = {
      parentNode: function(t, e, i, n) {
        if (n = n || "node", (t || e) && !c(t, u)) throw new TypeError(i + ": " + n + h)
      },
      childNode: function(t, e, i, n) {
        if (n = n || "node", (t || e) && !c(t, m)) throw new TypeError(i + ": " + n + p)
      },
      selector: function(t, e, i, n) {
        if (n = n || "selector", (t || e) && "string" != typeof t) throw new TypeError(i + ": " + n + d)
      }
    }
  }, {
    "@marcom/ac-dom-nodes/COMMENT_NODE": 61,
    "@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE": 62,
    "@marcom/ac-dom-nodes/DOCUMENT_NODE": 63,
    "@marcom/ac-dom-nodes/ELEMENT_NODE": 64,
    "@marcom/ac-dom-nodes/TEXT_NODE": 65,
    "@marcom/ac-dom-nodes/isNode": 70,
    "@marcom/ac-polyfills/Array/prototype.indexOf": void 0
  }],
  79: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-nodes/isElement"),
      r = t("./internal/validate"),
      s = t("./internal/nativeMatches"),
      o = t("./shims/matchesSelector");
    e.exports = function(t, e) {
      return r.selector(e, !0, "matchesSelector"), !!n(t) && (s ? s.call(t, e) : o(t, e))
    }
  }, {
    "./internal/nativeMatches": 77,
    "./internal/validate": 78,
    "./shims/matchesSelector": 81,
    "@marcom/ac-dom-nodes/isElement": 69
  }],
  80: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.slice");
    var n = t("./internal/validate"),
      r = t("./shims/querySelectorAll"),
      s = "querySelectorAll" in document;
    e.exports = function(t, e) {
      return e = e || document, n.parentNode(e, !0, "querySelectorAll", "context"), n.selector(t, !0, "querySelectorAll"), s ? Array.prototype.slice.call(e.querySelectorAll(t)) : r(t, e)
    }
  }, {
    "./internal/validate": 78,
    "./shims/querySelectorAll": 82,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0
  }],
  81: [function(t, e, i) {
    "use strict";
    var n = t("../querySelectorAll");
    e.exports = function(t, e) {
      var i, r = t.parentNode || document,
        s = n(e, r);
      for (i = 0; i < s.length; i++)
        if (s[i] === t) return !0;
      return !1
    }
  }, {
    "../querySelectorAll": 80
  }],
  82: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.indexOf");
    var n = t("@marcom/ac-dom-nodes/isElement"),
      r = t("@marcom/ac-dom-nodes/isDocumentFragment"),
      s = t("@marcom/ac-dom-nodes/remove"),
      o = "_ac_qsa_",
      a = function(t, e) {
        var i;
        if (e === document) return !0;
        for (i = t;
          (i = i.parentNode) && n(i);)
          if (i === e) return !0;
        return !1
      },
      l = function(t) {
        "recalc" in t ? t.recalc(!1) : document.recalc(!1), window.scrollBy(0, 0)
      };
    e.exports = function(t, e) {
      var i, n = document.createElement("style"),
        c = o + (Math.random() + "").slice(-6),
        u = [];
      for (e = e || document, document[c] = [], r(e) ? e.appendChild(n) : document.documentElement.firstChild.appendChild(n), n.styleSheet.cssText = "*{display:recalc;}" + t + '{ac-qsa:expression(document["' + c + '"] && document["' + c + '"].push(this));}', l(e); document[c].length;) i = document[c].shift(), i.style.removeAttribute("ac-qsa"), u.indexOf(i) === -1 && a(i, e) && u.push(i);
      return document[c] = null, s(n), l(e), u
    }
  }, {
    "@marcom/ac-dom-nodes/isDocumentFragment": 68,
    "@marcom/ac-dom-nodes/isElement": 69,
    "@marcom/ac-dom-nodes/remove": 71,
    "@marcom/ac-polyfills/Array/prototype.indexOf": void 0
  }],
  83: [function(t, e, i) {
    "use strict";
    e.exports = {
      createBezier: t("./ac-easing/createBezier"),
      createPredefined: t("./ac-easing/createPredefined"),
      createStep: t("./ac-easing/createStep"),
      Ease: t("./ac-easing/Ease")
    }
  }, {
    "./ac-easing/Ease": 84,
    "./ac-easing/createBezier": 85,
    "./ac-easing/createPredefined": 86,
    "./ac-easing/createStep": 87
  }],
  84: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if ("function" != typeof t) throw new TypeError(r);
      this.easingFunction = t, this.cssString = e || null
    }
    var r = "Ease expects an easing function.",
      s = n.prototype;
    s.getValue = function(t) {
      return this.easingFunction(t, 0, 1, 1)
    }, e.exports = n
  }, {}],
  85: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.every");
    var n = t("./Ease"),
      r = t("./helpers/KeySpline"),
      s = "Bezier curve expects exactly four (4) numbers. Given: ";
    e.exports = function(t, e, i, o) {
      var a = Array.prototype.slice.call(arguments),
        l = a.every(function(t) {
          return "number" == typeof t
        });
      if (4 !== a.length || !l) throw new TypeError(s + a);
      var c = new r(t, e, i, o),
        u = function(t, e, i, n) {
          return c.get(t / n) * i + e
        },
        h = "cubic-bezier(" + a.join(", ") + ")";
      return new n(u, h)
    }
  }, {
    "./Ease": 84,
    "./helpers/KeySpline": 88,
    "@marcom/ac-polyfills/Array/prototype.every": void 0
  }],
  86: [function(t, e, i) {
    "use strict";
    var n = t("./createStep"),
      r = t("./helpers/cssAliases"),
      s = t("./helpers/easingFunctions"),
      o = t("./Ease"),
      a = 'Easing function "%TYPE%" not recognized among the following: ' + Object.keys(s).join(", ");
    e.exports = function(t) {
      var e;
      if ("step-start" === t) return n(1, "start");
      if ("step-end" === t) return n(1, "end");
      if (e = s[t], !e) throw new Error(a.replace("%TYPE%", t));
      return new o(e, r[t])
    }
  }, {
    "./Ease": 84,
    "./createStep": 87,
    "./helpers/cssAliases": 89,
    "./helpers/easingFunctions": 90
  }],
  87: [function(t, e, i) {
    "use strict";
    var n = t("./Ease"),
      r = "Step function expects a numeric value greater than zero. Given: ",
      s = 'Step function direction must be either "start" or "end" (default). Given: ';
    e.exports = function(t, e) {
      if (e = e || "end", "number" != typeof t || t < 1) throw new TypeError(r + t);
      if ("start" !== e && "end" !== e) throw new TypeError(s + e);
      var i = function(i, n, r, s) {
          var o = r / t,
            a = Math["start" === e ? "floor" : "ceil"](i / s * t);
          return n + o * a
        },
        o = "steps(" + t + ", " + e + ")";
      return new n(i, o)
    }
  }, {
    "./Ease": 84
  }],
  88: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n) {
      function r(t, e) {
        return 1 - 3 * e + 3 * t
      }

      function s(t, e) {
        return 3 * e - 6 * t
      }

      function o(t) {
        return 3 * t
      }

      function a(t, e, i) {
        return ((r(e, i) * t + s(e, i)) * t + o(e)) * t
      }

      function l(t, e, i) {
        return 3 * r(e, i) * t * t + 2 * s(e, i) * t + o(e)
      }

      function c(e) {
        for (var n = e, r = 0; r < 4; ++r) {
          var s = l(n, t, i);
          if (0 === s) return n;
          var o = a(n, t, i) - e;
          n -= o / s
        }
        return n
      }
      this.get = function(r) {
        return t === e && i === n ? r : a(c(r), e, n)
      }
    }
    e.exports = n
  }, {}],
  89: [function(t, e, i) {
    "use strict";
    var n = {
      linear: "cubic-bezier(0, 0, 1, 1)",
      ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      "ease-in": "cubic-bezier(0.42, 0, 1, 1)",
      "ease-out": "cubic-bezier(0, 0, 0.58, 1)",
      "ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
      "ease-in-cubic": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
      "ease-out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)",
      "ease-in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1)",
      "ease-in-quad": "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
      "ease-out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      "ease-in-out-quad": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
      "ease-in-quart": "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
      "ease-out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
      "ease-in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
      "ease-in-quint": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
      "ease-out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
      "ease-in-out-quint": "cubic-bezier(0.86, 0, 0.07, 1)",
      "ease-in-sine": "cubic-bezier(0.47, 0, 0.745, 0.715)",
      "ease-out-sine": "cubic-bezier(0.39, 0.575, 0.565, 1)",
      "ease-in-out-sine": "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
      "ease-in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
      "ease-out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      "ease-in-out-expo": "cubic-bezier(1, 0, 0, 1)",
      "ease-in-circ": "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
      "ease-out-circ": "cubic-bezier(0.075, 0.82, 0.165, 1)",
      "ease-in-out-circ": "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
      "ease-in-back": "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
      "ease-out-back": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      "ease-in-out-back": "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
    };
    n.easeIn = n["ease-in"], n.easeOut = n["ease-out"], n.easeInOut = n["ease-in-out"], n.easeInCubic = n["ease-in-cubic"], n.easeOutCubic = n["ease-out-cubic"], n.easeInOutCubic = n["ease-in-out-cubic"], n.easeInQuad = n["ease-in-quad"], n.easeOutQuad = n["ease-out-quad"], n.easeInOutQuad = n["ease-in-out-quad"], n.easeInQuart = n["ease-in-quart"], n.easeOutQuart = n["ease-out-quart"], n.easeInOutQuart = n["ease-in-out-quart"], n.easeInQuint = n["ease-in-quint"], n.easeOutQuint = n["ease-out-quint"], n.easeInOutQuint = n["ease-in-out-quint"], n.easeInSine = n["ease-in-sine"], n.easeOutSine = n["ease-out-sine"], n.easeInOutSine = n["ease-in-out-sine"], n.easeInExpo = n["ease-in-expo"], n.easeOutExpo = n["ease-out-expo"], n.easeInOutExpo = n["ease-in-out-expo"], n.easeInCirc = n["ease-in-circ"], n.easeOutCirc = n["ease-out-circ"], n.easeInOutCirc = n["ease-in-out-circ"], n.easeInBack = n["ease-in-back"], n.easeOutBack = n["ease-out-back"], n.easeInOutBack = n["ease-in-out-back"], e.exports = n
  }, {}],
  90: [function(t, e, i) {
    "use strict";
    var n = t("../createBezier"),
      r = n(.25, .1, .25, 1).easingFunction,
      s = n(.42, 0, 1, 1).easingFunction,
      o = n(0, 0, .58, 1).easingFunction,
      a = n(.42, 0, .58, 1).easingFunction,
      l = function(t, e, i, n) {
        return i * t / n + e
      },
      c = function(t, e, i, n) {
        return i * (t /= n) * t + e
      },
      u = function(t, e, i, n) {
        return -i * (t /= n) * (t - 2) + e
      },
      h = function(t, e, i, n) {
        return (t /= n / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e
      },
      m = function(t, e, i, n) {
        return i * (t /= n) * t * t + e
      },
      p = function(t, e, i, n) {
        return i * ((t = t / n - 1) * t * t + 1) + e
      },
      d = function(t, e, i, n) {
        return (t /= n / 2) < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e
      },
      f = function(t, e, i, n) {
        return i * (t /= n) * t * t * t + e
      },
      _ = function(t, e, i, n) {
        return -i * ((t = t / n - 1) * t * t * t - 1) + e
      },
      g = function(t, e, i, n) {
        return (t /= n / 2) < 1 ? i / 2 * t * t * t * t + e : -i / 2 * ((t -= 2) * t * t * t - 2) + e
      },
      y = function(t, e, i, n) {
        return i * (t /= n) * t * t * t * t + e
      },
      v = function(t, e, i, n) {
        return i * ((t = t / n - 1) * t * t * t * t + 1) + e
      },
      b = function(t, e, i, n) {
        return (t /= n / 2) < 1 ? i / 2 * t * t * t * t * t + e : i / 2 * ((t -= 2) * t * t * t * t + 2) + e
      },
      E = function(t, e, i, n) {
        return -i * Math.cos(t / n * (Math.PI / 2)) + i + e
      },
      w = function(t, e, i, n) {
        return i * Math.sin(t / n * (Math.PI / 2)) + e
      },
      T = function(t, e, i, n) {
        return -i / 2 * (Math.cos(Math.PI * t / n) - 1) + e
      },
      S = function(t, e, i, n) {
        return 0 === t ? e : i * Math.pow(2, 10 * (t / n - 1)) + e
      },
      C = function(t, e, i, n) {
        return t === n ? e + i : i * (-Math.pow(2, -10 * t / n) + 1) + e
      },
      A = function(t, e, i, n) {
        return 0 === t ? e : t === n ? e + i : (t /= n / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : i / 2 * (-Math.pow(2, -10 * --t) + 2) + e
      },
      O = function(t, e, i, n) {
        return -i * (Math.sqrt(1 - (t /= n) * t) - 1) + e
      },
      x = function(t, e, i, n) {
        return i * Math.sqrt(1 - (t = t / n - 1) * t) + e
      },
      P = function(t, e, i, n) {
        return (t /= n / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + e : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
      },
      I = function(t, e, i, n) {
        var r = 1.70158,
          s = 0,
          o = i;
        return 0 === t ? e : 1 === (t /= n) ? e + i : (s || (s = .3 * n), o < Math.abs(i) ? (o = i, r = s / 4) : r = s / (2 * Math.PI) * Math.asin(i / o), -(o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - r) * (2 * Math.PI) / s)) + e)
      },
      k = function(t, e, i, n) {
        var r = 1.70158,
          s = 0,
          o = i;
        return 0 === t ? e : 1 === (t /= n) ? e + i : (s || (s = .3 * n), o < Math.abs(i) ? (o = i, r = s / 4) : r = s / (2 * Math.PI) * Math.asin(i / o), o * Math.pow(2, -10 * t) * Math.sin((t * n - r) * (2 * Math.PI) / s) + i + e)
      },
      M = function(t, e, i, n) {
        var r = 1.70158,
          s = 0,
          o = i;
        return 0 === t ? e : 2 === (t /= n / 2) ? e + i : (s || (s = n * (.3 * 1.5)), o < Math.abs(i) ? (o = i, r = s / 4) : r = s / (2 * Math.PI) * Math.asin(i / o), t < 1 ? -.5 * (o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - r) * (2 * Math.PI) / s)) + e : o * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * n - r) * (2 * Math.PI) / s) * .5 + i + e)
      },
      D = function(t, e, i, n, r) {
        return void 0 === r && (r = 1.70158), i * (t /= n) * t * ((r + 1) * t - r) + e
      },
      F = function(t, e, i, n, r) {
        return void 0 === r && (r = 1.70158), i * ((t = t / n - 1) * t * ((r + 1) * t + r) + 1) + e
      },
      N = function(t, e, i, n, r) {
        return void 0 === r && (r = 1.70158), (t /= n / 2) < 1 ? i / 2 * (t * t * (((r *= 1.525) + 1) * t - r)) + e : i / 2 * ((t -= 2) * t * (((r *= 1.525) + 1) * t + r) + 2) + e
      },
      R = function(t, e, i, n) {
        return (t /= n) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
      },
      L = function(t, e, i, n) {
        return i - R(n - t, 0, i, n) + e
      },
      U = function(t, e, i, n) {
        return t < n / 2 ? .5 * L(2 * t, 0, i, n) + e : .5 * R(2 * t - n, 0, i, n) + .5 * i + e
      };
    e.exports = {
      linear: l,
      ease: r,
      easeIn: s,
      "ease-in": s,
      easeOut: o,
      "ease-out": o,
      easeInOut: a,
      "ease-in-out": a,
      easeInCubic: m,
      "ease-in-cubic": m,
      easeOutCubic: p,
      "ease-out-cubic": p,
      easeInOutCubic: d,
      "ease-in-out-cubic": d,
      easeInQuad: c,
      "ease-in-quad": c,
      easeOutQuad: u,
      "ease-out-quad": u,
      easeInOutQuad: h,
      "ease-in-out-quad": h,
      easeInQuart: f,
      "ease-in-quart": f,
      easeOutQuart: _,
      "ease-out-quart": _,
      easeInOutQuart: g,
      "ease-in-out-quart": g,
      easeInQuint: y,
      "ease-in-quint": y,
      easeOutQuint: v,
      "ease-out-quint": v,
      easeInOutQuint: b,
      "ease-in-out-quint": b,
      easeInSine: E,
      "ease-in-sine": E,
      easeOutSine: w,
      "ease-out-sine": w,
      easeInOutSine: T,
      "ease-in-out-sine": T,
      easeInExpo: S,
      "ease-in-expo": S,
      easeOutExpo: C,
      "ease-out-expo": C,
      easeInOutExpo: A,
      "ease-in-out-expo": A,
      easeInCirc: O,
      "ease-in-circ": O,
      easeOutCirc: x,
      "ease-out-circ": x,
      easeInOutCirc: P,
      "ease-in-out-circ": P,
      easeInBack: D,
      "ease-in-back": D,
      easeOutBack: F,
      "ease-out-back": F,
      easeInOutBack: N,
      "ease-in-out-back": N,
      easeInElastic: I,
      "ease-in-elastic": I,
      easeOutElastic: k,
      "ease-out-elastic": k,
      easeInOutElastic: M,
      "ease-in-out-elastic": M,
      easeInBounce: L,
      "ease-in-bounce": L,
      easeOutBounce: R,
      "ease-out-bounce": R,
      easeInOutBounce: U,
      "ease-in-out-bounce": U
    }
  }, {
    "../createBezier": 85
  }],
  91: [function(t, e, i) {
    "use strict";
    var n = t("./utils/getBoundingClientRect");
    e.exports = function(t, e) {
      var i;
      return e ? (i = n(t), {
        width: i.width,
        height: i.height
      }) : {
        width: t.offsetWidth,
        height: t.offsetHeight
      }
    }
  }, {
    "./utils/getBoundingClientRect": 92
  }],
  92: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e = t.getBoundingClientRect();
      return {
        top: e.top,
        right: e.right,
        bottom: e.bottom,
        left: e.left,
        width: e.width || e.right - e.left,
        height: e.height || e.bottom - e.top
      }
    }
  }, {}],
  93: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n) {
      return t.nodeType ? void 0 === r || n && n.inlineStyles ? new a(t, e, i, n) : new l(t, e, i, n) : new o(t, e, i, n)
    }
    t("./helpers/Float32Array");
    var r = t("./helpers/transitionEnd"),
      s = t("@marcom/ac-clip").Clip,
      o = t("./clips/ClipEasing"),
      a = t("./clips/ClipInlineCss"),
      l = t("./clips/ClipTransitionCss");
    for (var c in s) "function" == typeof s[c] && "_" !== c.substr(0, 1) && (n[c] = s[c].bind(s));
    n.to = function(t, e, i, r) {
      return r = r || {}, void 0 === r.destroyOnComplete && (r.destroyOnComplete = !0), new n(t, e, i, r).play()
    }, n.from = function(t, e, i, r) {
      return r = r || {}, r.propsFrom = i, void 0 === r.destroyOnComplete && (r.destroyOnComplete = !0), new n(t, e, r.propsTo, r).play()
    }, e.exports = n
  }, {
    "./clips/ClipEasing": 96,
    "./clips/ClipInlineCss": 97,
    "./clips/ClipTransitionCss": 98,
    "./helpers/Float32Array": 101,
    "./helpers/transitionEnd": 110,
    "@marcom/ac-clip": 21
  }],
  94: [function(t, e, i) {
    "use strict";
    e.exports = t("./timeline/Timeline")
  }, {
    "./timeline/Timeline": 112
  }],
  95: [function(t, e, i) {
    "use strict";
    e.exports = {
      Clip: t("./Clip"),
      Timeline: t("./Timeline")
    }
  }, {
    "./Clip": 93,
    "./Timeline": 94
  }],
  96: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n) {
      n && a(n.ease) && (n.ease = l.create(n.ease).toEasingFunction()), n = n || {}, this._propsEase = n.propsEase || {}, c.call(this, t, e, i, n)
    }
    var r = t("@marcom/ac-object/clone"),
      s = t("@marcom/ac-object/create"),
      o = t("@marcom/ac-easing").createPredefined,
      a = t("../helpers/isCssCubicBezierString"),
      l = t("../helpers/BezierCurveCssManager"),
      c = t("@marcom/ac-clip").Clip,
      u = t("@marcom/ac-easing").Ease,
      h = c.prototype,
      m = n.prototype = s(h);
    m.reset = function() {
      var t = h.reset.call(this);
      if (this._clips)
        for (var e = this._clips.length; e--;) this._clips[e].reset();
      return t
    }, m.destroy = function() {
      if (this._clips) {
        for (var t = this._clips.length; t--;) this._clips[t].destroy();
        this._clips = null
      }
      return this._eases = null, this._storeOnUpdate = null, h.destroy.call(this)
    }, m._prepareProperties = function() {
      var t, e, i = 0,
        n = {},
        s = {},
        m = {};
      if (this._propsEase) {
        for (t in this._propsTo) this._propsTo.hasOwnProperty(t) && (e = this._propsEase[t], a(e) && (e = l.create(e).toEasingFunction()), void 0 === e ? (void 0 === n[this._ease] && (n[this._ease] = {}, s[this._ease] = {}, m[this._ease] = this._ease.easingFunction, i++), n[this._ease][t] = this._propsTo[t], s[this._ease][t] = this._propsFrom[t]) : "function" == typeof e ? (n[i] = {}, s[i] = {}, n[i][t] = this._propsTo[t], s[i][t] = this._propsFrom[t], m[i] = e, i++) : (void 0 === n[e] && (n[e] = {}, s[e] = {}, m[e] = e, i++), n[e][t] = this._propsTo[t], s[e][t] = this._propsFrom[t]));
        if (i > 1) {
          var p = r(this._options || {}, !0),
            d = .001 * this._duration;
          this._storeOnUpdate = this._onUpdate,
            this._onUpdate = this._onUpdateClips, p.onStart = null, p.onUpdate = null, p.onDraw = null, p.onComplete = null, this._clips = [];
          for (e in n) n.hasOwnProperty(e) && (p.ease = m[e], p.propsFrom = s[e], this._clips.push(new c(this._target, d, n[e], p)));
          e = "linear", this._propsTo = {}, this._propsFrom = {}
        } else
          for (t in m) m.hasOwnProperty(t) && (e = m[t]);
        void 0 !== e && (this._ease = "function" == typeof e ? new u(e) : o(e))
      }
      return h._prepareProperties.call(this)
    }, m._onUpdateClips = function(t) {
      for (var e = 1 === this._direction ? t.progress() : 1 - t.progress(), i = this._clips.length; i--;) this._clips[i].progress(e);
      "function" == typeof this._storeOnUpdate && this._storeOnUpdate.call(this, this)
    }, e.exports = n
  }, {
    "../helpers/BezierCurveCssManager": 100,
    "../helpers/isCssCubicBezierString": 106,
    "@marcom/ac-clip": 21,
    "@marcom/ac-easing": 83,
    "@marcom/ac-object/clone": 157,
    "@marcom/ac-object/create": 158
  }],
  97: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n) {
      n = n || {}, this._el = t, this._storeOnStart = n.onStart || null, this._storeOnDraw = n.onDraw || null, this._storeOnComplete = n.onComplete || null, n.onStart = this._onStart, n.onDraw = this._onDraw, n.onComplete = this._onComplete, u.call(this, {}, e, i, n)
    }
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      s = t("@marcom/ac-dom-styles/setStyle"),
      o = t("../helpers/convertToStyleObject"),
      a = t("../helpers/convertToTransitionableObjects"),
      l = t("@marcom/ac-object/create"),
      c = t("../helpers/removeTransitions"),
      u = t("./ClipEasing"),
      h = u.prototype,
      m = n.prototype = l(h);
    m.play = function() {
      var t = h.play.call(this);
      return 0 !== this._remainingDelay && s(this._el, o(this._target)), t
    }, m.reset = function() {
      var t = h.reset.call(this);
      return s(this._el, o(this._target)), t
    }, m.destroy = function() {
      return this._el = null, this._completeStyles = null, this._storeOnStart = null, this._storeOnDraw = null, this._storeOnComplete = null, h.destroy.call(this)
    }, m.target = function() {
      return this._el
    }, m._prepareProperties = function() {
      var t = a(this._el, this._propsTo, this._propsFrom);
      this._target = t.target, this._propsFrom = t.propsFrom, this._propsTo = t.propsTo, c(this._el, this._target);
      var e = this._isYoyo ? this._propsFrom : this._propsTo;
      if (this._completeStyles = o(e), void 0 !== this._options.removeStylesOnComplete) {
        var i, n = this._options.removeStylesOnComplete;
        if ("boolean" == typeof n && n)
          for (i in this._completeStyles) this._completeStyles.hasOwnProperty(i) && (this._completeStyles[i] = null);
        else if ("object" === ("undefined" == typeof n ? "undefined" : r(n)) && n.length)
          for (var s = n.length; s--;) i = n[s], this._completeStyles.hasOwnProperty(i) && (this._completeStyles[i] = null)
      }
      return h._prepareProperties.call(this)
    }, m._onStart = function(t) {
      this.playing() && 1 === this._direction && 0 === this._delay && s(this._el, o(this._propsFrom)), "function" == typeof this._storeOnStart && this._storeOnStart.call(this, this)
    }, m._onDraw = function(t) {
      s(this._el, o(this._target)), "function" == typeof this._storeOnDraw && this._storeOnDraw.call(this, this)
    }, m._onComplete = function(t) {
      s(this._el, this._completeStyles), "function" == typeof this._storeOnComplete && this._storeOnComplete.call(this, this)
    }, e.exports = n
  }, {
    "../helpers/convertToStyleObject": 103,
    "../helpers/convertToTransitionableObjects": 104,
    "../helpers/removeTransitions": 107,
    "./ClipEasing": 96,
    "@marcom/ac-dom-styles/setStyle": 75,
    "@marcom/ac-object/create": 158
  }],
  98: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n) {
      if (n = n || {}, this._el = t, this._storeEase = n.ease, "function" == typeof this._storeEase) throw new Error(w);
      this._storeOnStart = n.onStart || null, this._storeOnComplete = n.onComplete || null, n.onStart = this._onStart.bind(this), n.onComplete = this._onComplete.bind(this), this._stylesTo = c(i, !0), this._stylesFrom = n.propsFrom ? c(n.propsFrom, !0) : {}, this._propsEase = n.propsEase ? c(n.propsEase, !0) : {}, m(n.ease) && (n.ease = _.create(n.ease).toEasingFunction()), g.call(this, {}, e, {}, n), this._propsFrom = {}
    }
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      s = t("@marcom/ac-dom-styles/setStyle"),
      o = t("@marcom/ac-dom-styles/getStyle"),
      a = t("../helpers/convertToStyleObject"),
      l = t("../helpers/convertToTransitionableObjects"),
      c = t("@marcom/ac-object/clone"),
      u = t("@marcom/ac-object/create"),
      h = t("@marcom/ac-easing").createPredefined,
      m = t("../helpers/isCssCubicBezierString"),
      p = t("../helpers/removeTransitions"),
      d = t("../helpers/transitionEnd"),
      f = t("../helpers/waitAnimationFrames"),
      _ = t("../helpers/BezierCurveCssManager"),
      g = t("@marcom/ac-clip").Clip,
      y = t("./ClipEasing"),
      v = t("@marcom/ac-page-visibility").PageVisibilityManager,
      b = "ease",
      E = "%EASE% is not a supported predefined ease when transitioning with Elements and CSS transition. If you need to use %EASE% then pass the inlineStyle:true option.",
      w = "Function eases are not supported when using CSS transitions with Elements. Either use a cubic-bezier string (e.g. 'cubic-bezier(0, 0, 1, 1)' or pass the inlineStyle option as `true` to render styles each frame instead of using CSS transitions.",
      T = g.prototype,
      S = n.prototype = u(T);
    S.play = function() {
      var t = T.play.call(this);
      return 1 === this._direction && 0 === this.progress() && 0 !== this._remainingDelay && this._applyStyles(0, a(this._stylesFrom)), t
    }, S.reset = function() {
      var t = T.reset.call(this);
      return this._stylesClip.reset(), this._applyStyles(0, a(this._styles)), t
    }, S.destroy = function() {
      return v.off("changed", this._onVisibilityChanged), this._removeTransitionListener(), this.off("pause", this._onPaused), this._onPaused(), this._stylesClip.destroy(), this._stylesClip = null, this._el = null, this._propsArray = null, this._styles = null, this._stylesFrom = null, this._stylesTo = null, this._completeStyles = null, this._storeOnStart = null, this._storeOnComplete = null, this._onTransitionEnded = null, T.destroy.call(this)
    }, S.target = function() {
      return this._el
    }, S.duration = function(t) {
      var e = T.duration.call(this, t);
      return void 0 === t ? e : (this.playing() && this.progress(this._progress), e)
    }, S.progress = function(t) {
      var e = T.progress.call(this, t);
      return void 0 === t ? e : (t = 1 === this._direction ? t : 1 - t, this._stylesClip.progress(t), this._applyStyles(0, a(this._styles)), this.playing() && (this._isWaitingForStylesToBeApplied = !0, f(this._setStylesAfterWaiting, 2)), e)
    }, S._prepareProperties = function() {
      var t = l(this._el, this._stylesTo, this._stylesFrom);
      this._styles = t.target, this._stylesTo = t.propsTo, this._stylesFrom = t.propsFrom;
      var e = this._storeEase || b;
      this._eases = {}, this._propsArray = [];
      var i;
      this._styleCompleteTo = a(this._stylesTo), this._styleCompleteFrom = a(this._stylesFrom), this._propsEaseKeys = {};
      var n;
      for (n in this._stylesTo) this._stylesTo.hasOwnProperty(n) && (this._propsArray[this._propsArray.length] = n, void 0 === this._propsEase[n] ? (void 0 === this._eases[e] && (i = this._convertEase(e), this._eases[e] = i.css), this._propsEaseKeys[n] = e) : void 0 === this._eases[this._propsEase[n]] ? (i = this._convertEase(this._propsEase[n]), this._eases[this._propsEase[n]] = i.css, this._propsEaseKeys[n] = this._propsEase[n], this._propsEase[n] = i.js) : m(this._propsEase[n]) && (this._propsEaseKeys[n] = this._propsEase[n], this._propsEase[n] = this._eases[this._propsEase[n]][1].toEasingFunction()));
      if (this._onPaused = this._onPaused.bind(this), this.on("pause", this._onPaused), this._setOtherTransitions(), this._currentTransitionStyles = this._otherTransitions, this._completeStyles = a(this._isYoyo ? this._stylesFrom : this._stylesTo), void 0 !== this._options.removeStylesOnComplete) {
        var s = this._options.removeStylesOnComplete;
        if ("boolean" == typeof s && s)
          for (n in this._stylesTo) this._completeStyles[n] = null;
        else if ("object" === ("undefined" == typeof s ? "undefined" : r(s)) && s.length)
          for (var o = s.length; o--;) this._completeStyles[s[o]] = null
      }
      return this._onTransitionEnded = this._onTransitionEnded.bind(this), this._setStylesAfterWaiting = this._setStylesAfterWaiting.bind(this), this._onVisibilityChanged = this._onVisibilityChanged.bind(this), v.on(v.CHANGED, this._onVisibilityChanged), this._stylesClip = new y(this._styles, 1, this._stylesTo, {
        ease: this._options.ease,
        propsFrom: this._stylesFrom,
        propsEase: this._options.propsEase
      }), g._remove(this._stylesClip), T._prepareProperties.call(this)
    }, S._convertEase = function(t) {
      if ("function" == typeof t) throw new Error(w);
      var e, i;
      if (m(t)) e = _.create(t), i = e.toEasingFunction();
      else {
        var n = h(t);
        if (null === n.cssString) throw new Error(E.replace(/%EASE%/g, t));
        e = _.create(n.cssString), i = t
      }
      return {
        css: {
          1: e,
          "-1": e.reversed()
        },
        js: i
      }
    }, S._complete = function() {
      !this._isWaitingForStylesToBeApplied && !this._isTransitionEnded && this._isListeningForTransitionEnd || 1 !== this.progress() || (this._isWaitingForStylesToBeApplied = !1, T._complete.call(this))
    }, S._onTransitionEnded = function() {
      this._isTransitionEnded = !0, this._complete()
    }, S._addTransitionListener = function() {
      !this._isListeningForTransitionEnd && this._el && this._onTransitionEnded && (this._isListeningForTransitionEnd = !0, this._isTransitionEnded = !1, this._el.addEventListener(d, this._onTransitionEnded))
    }, S._removeTransitionListener = function() {
      this._isListeningForTransitionEnd && this._el && this._onTransitionEnded && (this._isListeningForTransitionEnd = !1, this._isTransitionEnded = !1, this._el.removeEventListener(d, this._onTransitionEnded))
    }, S._applyStyles = function(t, e) {
      if (t > 0) {
        var i, n = "",
          r = {};
        for (i in this._eases) this._eases.hasOwnProperty(i) && (r[i] = this._eases[i][this._direction].splitAt(this.progress()).toCSSString());
        for (i in this._stylesTo) this._stylesTo.hasOwnProperty(i) && (n += i + " " + t + "ms " + r[this._propsEaseKeys[i]] + " 0ms, ");
        this._currentTransitionStyles = n.substr(0, n.length - 2), this._doStylesMatchCurrentStyles(e) ? this._removeTransitionListener() : this._addTransitionListener()
      } else this._currentTransitionStyles = "", this._removeTransitionListener();
      e.transition = this._getOtherClipTransitionStyles() + this._currentTransitionStyles, s(this._el, e)
    }, S._doStylesMatchCurrentStyles = function(t) {
      var e, i = o.apply(this, [this._el].concat([this._propsArray]));
      for (e in t)
        if (t.hasOwnProperty(e) && i.hasOwnProperty(e) && t[e] !== i[e]) return !1;
      return !0
    }, S._setStylesAfterWaiting = function() {
      if (this._isWaitingForStylesToBeApplied = !1, this.playing()) {
        var t = this._durationMs * (1 - this.progress()),
          e = this._direction > 0 ? this._styleCompleteTo : this._styleCompleteFrom;
        this._applyStyles(t, e)
      }
    }, S._setOtherTransitions = function() {
      p(this._el, this._stylesTo);
      for (var t = g.getAll(this._el), e = t.length; e--;)
        if (t[e] !== this && t[e].playing() && t[e]._otherTransitions && t[e]._otherTransitions.length) return void(this._otherTransitions = t[e]._otherTransitions);
      this._otherTransitions = o(this._el, "transition").transition, null !== this._otherTransitions && "all 0s ease 0s" !== this._otherTransitions || (this._otherTransitions = "")
    }, S._getTransitionStyles = function() {
      var t = this._getOtherClipTransitionStyles();
      return this._otherTransitions.length ? t += this._otherTransitions : t.length && (t = t.substr(0, t.length - 2)), t
    }, S._getOtherClipTransitionStyles = function() {
      for (var t = "", e = g.getAll(this._el), i = e.length; i--;) e[i] !== this && e[i].playing() && e[i]._currentTransitionStyles && e[i]._currentTransitionStyles.length && (t += e[i]._currentTransitionStyles + ", ");
      return t
    }, S._onVisibilityChanged = function(t) {
      if (this.playing() && !t.isHidden) {
        this._update({
          timeNow: this._getTime()
        });
        var e = this.progress();
        e < 1 && this.progress(e)
      }
    }, S._onPaused = function(t) {
      var e = o.apply(this, [this._el].concat([this._propsArray]));
      e.transition = this._getTransitionStyles(), this._removeTransitionListener(), s(this._el, e)
    }, S._onStart = function(t) {
      var e = 1 === this._direction && 0 === this.progress() && 0 === this._delay ? 2 : 0;
      e && (this._isWaitingForStylesToBeApplied = !0, this._applyStyles(0, this._styleCompleteFrom)), f(this._setStylesAfterWaiting, e), "function" == typeof this._storeOnStart && this._storeOnStart.call(this, this)
    }, S._onComplete = function(t) {
      this._removeTransitionListener(), this._completeStyles.transition = this._getTransitionStyles(), s(this._el, this._completeStyles), "function" == typeof this._storeOnComplete && this._storeOnComplete.call(this, this)
    }, e.exports = n
  }, {
    "../helpers/BezierCurveCssManager": 100,
    "../helpers/convertToStyleObject": 103,
    "../helpers/convertToTransitionableObjects": 104,
    "../helpers/isCssCubicBezierString": 106,
    "../helpers/removeTransitions": 107,
    "../helpers/transitionEnd": 110,
    "../helpers/waitAnimationFrames": 111,
    "./ClipEasing": 96,
    "@marcom/ac-clip": 21,
    "@marcom/ac-dom-styles/getStyle": 73,
    "@marcom/ac-dom-styles/setStyle": 75,
    "@marcom/ac-easing": 83,
    "@marcom/ac-object/clone": 157,
    "@marcom/ac-object/create": 158,
    "@marcom/ac-page-visibility": 161
  }],
  99: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this.manager = e, this.p1 = {
        x: t[0],
        y: t[1]
      }, this.p2 = {
        x: t[2],
        y: t[3]
      }, this._isLinear = this.p1.x === this.p1.y && this.p2.x === this.p2.y, this._cacheSplits = {}
    }
    var r = t("@marcom/ac-easing").createBezier,
      s = n.prototype;
    s.splitAt = function(t) {
      if (this._isLinear) return this;
      if (t = Math.round(40 * t) / 40, 0 === t) return this;
      if (void 0 !== this._cacheSplits[t]) return this._cacheSplits[t];
      for (var e = [this.p1.x, this.p2.x], i = [this.p1.y, this.p2.y], n = 0, r = t, s = 0, o = 1, a = this._getStartX(t, e); r !== a && n < 1e3;) r < a ? o = t : s = t, t = s + .5 * (o - s), a = this._getStartX(t, e), ++n;
      var l = this._splitBezier(t, e, i),
        c = this._normalize(l),
        u = this.manager.create(c);
      return this._cacheSplits[r] = u, u
    }, s.reversed = function() {
      var t = this.toArray();
      return this.manager.create([.5 - (t[2] - .5), .5 - (t[3] - .5), .5 - (t[0] - .5), .5 - (t[1] - .5)])
    }, s.toArray = function() {
      return [this.p1.x, this.p1.y, this.p2.x, this.p2.y]
    }, s.toCSSString = function() {
      return "cubic-bezier(" + this.p1.x + ", " + this.p1.y + ", " + this.p2.x + ", " + this.p2.y + ")"
    }, s.toEasingFunction = function() {
      return r.apply(this, this.toArray()).easingFunction
    }, s._getStartX = function(t, e) {
      var i = t - 1,
        n = t * t,
        r = i * i,
        s = n * t;
      return s - 3 * n * i * e[1] + 3 * t * r * e[0]
    }, s._splitBezier = function(t, e, i) {
      var n = t - 1,
        r = t * t,
        s = n * n,
        o = r * t;
      return [o - 3 * r * n * e[1] + 3 * t * s * e[0], o - 3 * r * n * i[1] + 3 * t * s * i[0], r - 2 * t * n * e[1] + s * e[0], r - 2 * t * n * i[1] + s * i[0], t - n * e[1], t - n * i[1]]
    }, s._normalize = function(t) {
      return [(t[2] - t[0]) / (1 - t[0]), (t[3] - t[1]) / (1 - t[1]), (t[4] - t[0]) / (1 - t[0]), (t[5] - t[1]) / (1 - t[1])]
    }, e.exports = n
  }, {
    "@marcom/ac-easing": 83
  }],
  100: [function(t, e, i) {
    "use strict";

    function n() {
      this._instances = {}
    }
    var r = t("./BezierCurveCss"),
      s = n.prototype;
    s.create = function(t) {
      var e;
      if (e = "string" == typeof t ? t.replace(/ /g, "") : "cubic-bezier(" + t.join(",") + ")", void 0 === this._instances[e]) {
        if ("string" == typeof t) {
          t = t.match(/\d*\.?\d+/g);
          for (var i = t.length; i--;) t[i] = Number(t[i])
        }
        this._instances[e] = new r(t, this)
      }
      return this._instances[e]
    }, e.exports = new n
  }, {
    "./BezierCurveCss": 99
  }],
  101: [function(t, e, i) {
    "use strict";
    "undefined" == typeof window.Float32Array && (window.Float32Array = function() {})
  }, {}],
  102: [function(t, e, i) {
    "use strict";

    function n(t, e, i) {
      this._transform = t;
      var n, r, o;
      for (o in i) i.hasOwnProperty(o) && "function" == typeof this._transform[o] && (n = s(i[o]), r = "%" === n.unit ? this._convertPercentToPixelValue(o, n.value, e) : n.value, this._transform[o].call(this._transform, r))
    }
    var r = t("@marcom/ac-dom-metrics/getDimensions"),
      s = t("./splitUnits"),
      o = {
        translateX: "width",
        translateY: "height"
      },
      a = n.prototype;
    a._convertPercentToPixelValue = function(t, e, i) {
      t = o[t];
      var n = r(i);
      return n[t] ? (e *= .01, n[t] * e) : e
    }, a.toArray = function() {
      return this._transform.toArray()
    }, a.toCSSString = function() {
      return this._transform.toCSSString()
    }, e.exports = n
  }, {
    "./splitUnits": 108,
    "@marcom/ac-dom-metrics/getDimensions": 91
  }],
  103: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e, i, n = {};
      for (i in t) t.hasOwnProperty(i) && null !== t[i] && (t[i].isColor ? t[i].isRgb ? n[i] = "rgb(" + Math.round(t[i].r) + ", " + Math.round(t[i].g) + ", " + Math.round(t[i].b) + ")" : t[i].isRgba && (n[i] = "rgba(" + Math.round(t[i].r) + ", " + Math.round(t[i].g) + ", " + Math.round(t[i].b) + ", " + t[i].a + ")") : "transform" === i ? (e = 6 === t[i].length ? "matrix" : "matrix3d", n[i] = e + "(" + t[i].join(",") + ")") : t[i].unit ? n[i] = t[i].value + t[i].unit : n[i] = t[i].value);
      return n
    }
  }, {}],
  104: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-styles/getStyle"),
      r = t("@marcom/ac-object/clone"),
      s = t("./splitUnits"),
      o = t("./toCamCase"),
      a = t("@marcom/ac-color").Color,
      l = t("@marcom/ac-feature/cssPropertyAvailable"),
      c = t("@marcom/ac-transform").Transform,
      u = t("./TransformMatrix"),
      h = function(t) {
        return a.isRgba(t) ? (t = new a(t).rgbaObject(), t.isRgba = !0) : (t = new a(t).rgbObject(), t.isRgb = !0), t.isColor = !0, t
      },
      m = function(t) {
        t.isRgb && (t.isRgb = !1, t.isRgba = !0, t.a = 1)
      },
      p = function(t, e, i) {
        (t.isRgba || e.isRgba || i.isRgba) && (m(t), m(e), m(i))
      },
      d = function(t) {
        return [t[0], t[1], 0, 0, t[2], t[3], 0, 0, 0, 0, 1, 0, t[4], t[5], 0, 1]
      },
      f = function(t, e, i) {
        16 !== t.transform.length && 16 !== e.transform.length && 16 !== i.transform.length || (6 === t.transform.length && (t.transform = d(t.transform)), 6 === e.transform.length && (e.transform = d(e.transform)), 6 === i.transform.length && (i.transform = d(i.transform)))
      };
    e.exports = function(t, e, i) {
      var m = {};
      e = r(e, !0), i = r(i, !0);
      var d, _, g, y, v, b = l("transform");
      for (v in e) e.hasOwnProperty(v) && null !== e[v] && ("transform" === v ? (b && (_ = new c, d = n(t, "transform").transform || "none", _.setMatrixValue(d), g = new u(new c, t, e[v])), g && g.toCSSString() !== _.toCSSString() ? (y = new u(i[v] ? new c : _.clone(), t, i[v]), m[v] = _.toArray(), e[v] = g.toArray(), i[v] = y.toArray()) : (m[v] = null, e[v] = null)) : (d = n(t, v)[o(v)] || i[v], a.isColor(d) ? (m[v] = h(d), i[v] = void 0 !== i[v] ? h(i[v]) : r(m[v], !0), e[v] = h(e[v])) : (m[v] = s(d), i[v] = void 0 !== i[v] ? s(i[v]) : r(m[v], !0), e[v] = s(e[v]))));
      for (v in i) !i.hasOwnProperty(v) || null === i[v] || void 0 !== e[v] && null !== e[v] || ("transform" === v ? (b && (_ = new c, _.setMatrixValue(getComputedStyle(t).transform || getComputedStyle(t).webkitTransform || "none"), y = new u(new c, t, i[v])), y && y.toCSSString() !== _.toCSSString() ? (g = new u(_.clone()), m[v] = _.toArray(), e[v] = g.toArray(), i[v] = y.toArray()) : (m[v] = null, e[v] = null, i[v] = null)) : (d = n(t, v)[o(v)], a.isColor(d) ? (m[v] = h(d), e[v] = r(m[v], !0), i[v] = h(i[v])) : (m[v] = s(d), i[v] = s(i[v]), e[v] = r(m[v], !0)))), m[v] && m[v].isColor && p(m[v], i[v], e[v]);
      return m.transform && f(m, i, e), {
        target: m,
        propsTo: e,
        propsFrom: i
      }
    }
  }, {
    "./TransformMatrix": 102,
    "./splitUnits": 108,
    "./toCamCase": 109,
    "@marcom/ac-color": 27,
    "@marcom/ac-dom-styles/getStyle": 73,
    "@marcom/ac-feature/cssPropertyAvailable": 118,
    "@marcom/ac-object/clone": 157,
    "@marcom/ac-transform": 204
  }],
  105: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      if (t.transitionProperty) {
        for (var e = "", i = t.transitionProperty.split(", "), n = t.transitionDuration.split(", "), r = t.transitionTimingFunction.replace(/\d+[,]+[\s]/gi, function(t) {
            return t.substr(0, t.length - 1)
          }).split(", "), s = t.transitionDelay.split(", "), o = i.length; o--;) e += i[o] + " " + n[o] + " " + r[o] + " " + s[o] + ", ";
        return e.substr(0, e.length - 2)
      }
      return !1
    }
  }, {}],
  106: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return "string" == typeof t && "cubic-bezier(" === t.substr(0, 13)
    }
  }, {}],
  107: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-styles/setStyle"),
      r = t("@marcom/ac-dom-styles/getStyle"),
      s = t("./getShorthandTransition");
    e.exports = function(t, e) {
      var i = r(t, "transition", "transition-property", "transition-duration", "transition-timing-function", "transition-delay");
      if (i = i.transition || s(i), i && i.length) {
        i = i.split(",");
        for (var o, a = 0, l = i.length; l--;) o = i[l].trim().split(" ")[0], void 0 !== e[o] && (i.splice(l, 1), ++a);
        a && (0 === i.length && (i = ["all"]), n(t, {
          transition: i.join(",").trim()
        }))
      }
    }
  }, {
    "./getShorthandTransition": 105,
    "@marcom/ac-dom-styles/getStyle": 73,
    "@marcom/ac-dom-styles/setStyle": 75
  }],
  108: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      if (t = String(t), t.indexOf(" ") > -1) throw new Error("Shorthand CSS is not supported. Please use longhand CSS only.");
      var e = /(\d*\.?\d*)(.*)/,
        i = 1;
      t && "-" === t.substr(0, 1) && (t = t.substr(1), i = -1);
      var n = String(t).match(e);
      return {
        value: Number(n[1]) * i,
        unit: n[2]
      }
    }
  }, {}],
  109: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e = function(t, e, i, n) {
        return 0 === i && "moz" !== n.substr(1, 3) ? e : e.toUpperCase()
      };
      return t.replace(/-(\w)/g, e)
    }
  }, {}],
  110: [function(t, e, i) {
    "use strict";
    var n;
    e.exports = function() {
      if (n) return n;
      var t, e = document.createElement("fakeelement"),
        i = {
          transition: "transitionend",
          OTransition: "oTransitionEnd",
          MozTransition: "transitionend",
          WebkitTransition: "webkitTransitionEnd"
        };
      for (t in i)
        if (void 0 !== e.style[t]) return n = i[t]
    }()
  }, {}],
  111: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-page-visibility").PageVisibilityManager;
    e.exports = function(t, e) {
      if (e) {
        var i = function(t) {
            n.isHidden ? setTimeout(t, 16) : window.requestAnimationFrame(t)
          },
          r = 0,
          s = function o() {
            r === e ? t.call(this) : (++r, i(o))
          };
        s()
      } else t.call(this)
    }
  }, {
    "@marcom/ac-page-visibility": 161
  }],
  112: [function(t, e, i) {
    "use strict";

    function n(t) {
      t = t || {}, t.ease = t.ease || "linear", t.destroyOnComplete = !1, this.options = t, s.call(this, {
        t: 0
      }, 0, {
        t: 1
      }, t), this._itemList = new l
    }
    var r = t("@marcom/ac-object/create"),
      s = t("@marcom/ac-clip").Clip,
      o = t("./TimelineClip"),
      a = t("./TimelineCallback"),
      l = t("./TimelineItemList"),
      c = s.prototype,
      u = n.prototype = r(c);
    n.prototype.constructor = n, u._update = function(t) {
      c._update.call(this, t), this._render()
    }, u.progress = function(t) {
      return c.progress.call(this, t), void 0 !== t && this._render(), this._progress
    }, u._render = function() {
      if (0 !== this._itemList.length)
        for (var t = this._target.t * this._duration, e = this._itemList.head, i = e; i;) {
          i = e.next;
          var n = t - e.position;
          e.currentTime(n), e = i
        }
    }, u.addClip = function(t, e) {
      e = void 0 === e ? this.duration() : e;
      var i = t._delay / 1e3;
      this._itemList.append(new o(t, e + i)), this._updateDuration()
    }, u.addCallback = function(t, e) {
      e = void 0 === e ? this.duration() : e, this._itemList.append(new a(t, e)), this._updateDuration()
    }, u.remove = function(t) {
      var e = this._itemList.getItem(t);
      e && (this._itemList.remove(e), this._updateDuration())
    }, u._updateDuration = function() {
      var t = this._itemList.head,
        e = t.position + t.duration();
      this._itemList.forEach(function(i) {
        var n = i.position + i.duration();
        n >= e && (t = i, e = n)
      }), this.duration(e)
    }, u.destroy = function() {
      for (var t = this._itemList.head; t;) {
        var e = t;
        t = e.next, this._itemList.remove(e)
      }
      return this._duration = 0, c.destroy.call(this)
    }, e.exports = n
  }, {
    "./TimelineCallback": 113,
    "./TimelineClip": 114,
    "./TimelineItemList": 115,
    "@marcom/ac-clip": 21,
    "@marcom/ac-object/create": 158
  }],
  113: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this.callback = t, this._delay = 0, this.position = e, this._hasTriggered = !1, this.prev = null, this.next = null
    }
    var r = n.prototype;
    r.duration = function() {
      return 0
    }, r.currentTime = function(t) {
      return t >= 0 && !this._hasTriggered && (this.callback(), this._hasTriggered = !0), t < 0 && this._hasTriggered && (this.callback(), this._hasTriggered = !1), 0
    }, e.exports = n
  }, {}],
  114: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this.clip = t, this.position = e, this.duration = this.clip.duration.bind(this.clip), this.lastProgress = -1, this.prev = null, this.next = null
    }
    var r = n.prototype;
    r.currentTime = function(t) {
      var e = Math.min(1, Math.max(0, t / this.clip._duration));
      return e !== e && (e = 1), this.lastProgress === e ? this.lastProgress : (0 !== this.lastProgress && 0 !== e && this.lastProgress !== -1 || this.clip._storeOnStart && this.clip._storeOnStart(this.clip), this.clip._playing = e * this.clip._duration === this.clip._duration, this.lastProgress = this.clip.progress(e), this.lastProgress)
    }, r.destroy = function() {
      this.clip.destroy(), this.prev = null, this.next = null, this.duration = null
    }, e.exports = n
  }, {}],
  115: [function(t, e, i) {
    "use strict";
    var n = t("./TimelineClip"),
      r = t("./TimelineCallback"),
      s = function() {
        this.head = null, this.tail = null, this.length = 0
      },
      o = s.prototype;
    o.append = function(t) {
      t.prev = null, t.next = null, this.tail ? (this.tail.next = t, t.prev = this.tail) : this.head = t, this.tail = t, this.length++
    }, o.remove = function(t) {
      t === this.head ? this.head = this.head.next : t === this.tail && (this.tail = this.tail.prev), t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t.next = t.prev = null, null === this.head && (this.tail = null), this.length--
    }, o.getItem = function(t) {
      for (var e = this.head; e;) {
        var i = e;
        if (i instanceof n && i.clip === t || i instanceof r && i.callback === t) return i;
        e = i.next
      }
      return null
    }, o.forEach = function(t) {
      for (var e = 0, i = this.head; i;) {
        var n = i;
        t(n, e, this.length), i = n.next
      }
    }, o.destroy = function() {
      for (; this.head;) {
        var t = this.head;
        this.remove(t), t.destroy()
      }
    }, e.exports = s
  }, {
    "./TimelineCallback": 113,
    "./TimelineClip": 114
  }],
  116: [function(t, e, i) {
    "use strict";
    e.exports = {
      EventEmitterMicro: t("./ac-event-emitter-micro/EventEmitterMicro")
    }
  }, {
    "./ac-event-emitter-micro/EventEmitterMicro": 117
  }],
  117: [function(t, e, i) {
    "use strict";

    function n() {
      this._events = {}
    }
    var r = n.prototype;
    r.on = function(t, e) {
      this._events[t] = this._events[t] || [], this._events[t].unshift(e)
    }, r.once = function(t, e) {
      function i(r) {
        n.off(t, i), void 0 !== r ? e(r) : e()
      }
      var n = this;
      this.on(t, i)
    }, r.off = function(t, e) {
      if (this.has(t)) {
        if (1 === arguments.length) return this._events[t] = null, void delete this._events[t];
        var i = this._events[t].indexOf(e);
        i !== -1 && this._events[t].splice(i, 1)
      }
    }, r.trigger = function(t, e) {
      if (this.has(t))
        for (var i = this._events[t].length - 1; i >= 0; i--) void 0 !== e ? this._events[t][i](e) : this._events[t][i]()
    }, r.has = function(t) {
      return t in this._events != !1 && 0 !== this._events[t].length
    }, r.destroy = function() {
      for (var t in this._events) this._events[t] = null;
      this._events = null
    }, e.exports = n
  }, {}],
  118: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      return "undefined" != typeof e ? !!r(t, e) : !!s(t)
    }
    var r = t("@marcom/ac-prefixer/getStyleValue"),
      s = t("@marcom/ac-prefixer/getStyleProperty"),
      o = t("@marcom/ac-function/memoize");
    e.exports = o(n), e.exports.original = n
  }, {
    "@marcom/ac-function/memoize": 121,
    "@marcom/ac-prefixer/getStyleProperty": 167,
    "@marcom/ac-prefixer/getStyleValue": 168
  }],
  119: [function(t, e, i) {
    "use strict";
    e.exports = {
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
  }, {}],
  120: [function(t, e, i) {
    "use strict";

    function n() {
      var t = r.getWindow(),
        e = r.getDocument(),
        i = r.getNavigator();
      return !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch || i.maxTouchPoints > 0 || i.msMaxTouchPoints > 0)
    }
    var r = t("./helpers/globals"),
      s = t("@marcom/ac-function/once");
    e.exports = s(n), e.exports.original = n
  }, {
    "./helpers/globals": 119,
    "@marcom/ac-function/once": 122
  }],
  121: [function(t, e, i) {
    "use strict";
    var n = function() {
      var t, e = "";
      for (t = 0; t < arguments.length; t++) t > 0 && (e += ","), e += arguments[t];
      return e
    };
    e.exports = function(t, e) {
      e = e || n;
      var i = function r() {
        var i = arguments,
          n = e.apply(this, i);
        return n in r.cache || (r.cache[n] = t.apply(this, i)), r.cache[n]
      };
      return i.cache = {}, i
    }
  }, {}],
  122: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e;
      return function() {
        return "undefined" == typeof e && (e = t.apply(this, arguments)), e
      }
    }
  }, {}],
  123: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e) {
      var i = null;
      return function() {
        null === i && (t.apply(this, arguments), i = setTimeout(function() {
          i = null
        }, e))
      }
    }
  }, {}],
  124: [function(t, e, i) {
    "use strict";

    function n(t) {
      t = t || {}, this._wrapAround = t.wrapAround || !1, this._itemType = t.itemType || o, this._items = [], this._itemsIdLookup = {}, this._itemChanged = !1, this.showNext = this.showNext.bind(this), this.showPrevious = this.showPrevious.bind(this), this._update = this._update.bind(this), this._updateItems = this._updateItems.bind(this), s.call(this), t.startAt && this._startAt(t.startAt), n._add(this, t.analyticsOptions)
    }
    var r = t("./singletons/analyticsManager"),
      s = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      o = t("./Item");
    n.FADE = "fade", n.FADE_SELECTOR = "[data-ac-gallery-fade]", n.SLIDE = "slide", n.SLIDE_SELECTOR = "[data-ac-gallery-slide]", n.UPDATE = "update", n.UPDATE_COMPLETE = "update:complete";
    var a = s.prototype,
      l = n.prototype = Object.create(a);
    l.addItem = function(t, e) {
      if (t.nodeType) t = new this._itemType(t);
      else if (this._items.indexOf(t) > -1) return t;
      return "number" == typeof e ? this._items.splice(e, 0, t) : this._items.push(t), 1 === this._items.length ? (t.show(), this._setCurrentItem(t)) : (t.hide(), this.getNextItem() === t && this._setNextItem(t), this.getPreviousItem() === t && this._setPreviousItem(t)), null !== t.getElementId() && (this._itemsIdLookup[t.getElementId()] = t), t.on(o.SELECTED, this._update), t
    }, l.removeItem = function(t, e) {
      e = e || {}, "number" == typeof t && (t = this._items[t]);
      var i = this._items.indexOf(t);
      if (i > -1) {
        var n = this.getNextItem(),
          r = this.getPreviousItem();
        this._items.splice(i, 1), t.off(o.SELECTED, this._update), n === t && this._setNextItem(this.getNextItem()), r === t && this._setPreviousItem(this.getPreviousItem())
      }
      return t === this._currentItem && this._items.length && e.setCurrentItem !== !1 && (this._update({
        item: this._items[0]
      }), this._setLastItem(null)), e.destroyItem && t.getElement() && t.destroy(), t
    }, l.show = function(t, e) {
      return "number" == typeof t ? t = this._items[t] : "string" == typeof t && (t = this._itemsIdLookup[t]), t && (e = e || {}, this._update({
        item: t,
        interactionEvent: e.interactionEvent
      })), t || null
    }, l.showNext = function(t) {
      var e = this.getNextItem();
      return e && this.show(e, t), e
    }, l.showPrevious = function(t) {
      var e = this.getPreviousItem();
      return e && this.show(e, t), e
    }, l.isInView = function() {
      return this._currentItem && this._currentItem.isInView()
    }, l.getTotalItems = function() {
      return this._items.length
    }, l.getItems = function() {
      return this._items
    }, l.getItem = function(t) {
      return "number" == typeof t ? this.getItemAt(t) : "string" == typeof t ? this.getItemById(t) : void 0
    }, l.getItemAt = function(t) {
      return this._items[t] || null
    }, l.getItemById = function(t) {
      return this._itemsIdLookup[t] || null
    }, l.getItemIndex = function(t) {
      return this._items.indexOf(t)
    }, l.getCurrentItem = function() {
      return this._currentItem || null
    }, l.getLastItem = function() {
      return this._lastItem || null
    }, l.getNextItem = function() {
      var t, e = this._items.indexOf(this._currentItem);
      return e < this._items.length - 1 ? t = this._items[e + 1] : this._wrapAround && (t = this._items[0]), t || null
    }, l.getPreviousItem = function() {
      var t, e = this._items.indexOf(this._currentItem);
      return e > 0 ? t = this._items[e - 1] : this._wrapAround && (t = this._items[this._items.length - 1]), t || null
    }, l.getId = function() {
      return this._id
    }, l.destroy = function(t) {
      if (t = t || {}, void 0 === t.destroyItems && (t.destroyItems = !0), this._setCurrentItem(null), t.destroyItems)
        for (var e; this._items.length;) e = this._items[0], e.off(o.SELECTED, this._update), this.removeItem(e, {
          destroyItem: !0,
          setCurrentItem: !1
        });
      return this._items = null, this._itemsIdLookup = null, n._remove(this), a.destroy.call(this)
    }, l._startAt = function(t) {
      var e = this._items[t];
      e && this._currentItem !== e && (this._currentItem.hide(), this._setCurrentItem(e), this._currentItem.show(), this.trigger(n.UPDATE, this._items))
    }, l._setCurrentItem = function(t) {
      this._currentItem && this._currentItem.getElement() && this._currentItem !== t && (this._currentItem.getElement().classList.remove(o.CSS_CURRENT_ITEM), this._setLastItem(this._currentItem)), this._currentItem = t, this._currentItem && this._currentItem.getElement() && (this._currentItem.getElement().classList.add(o.CSS_CURRENT_ITEM), this._setNextItem(this.getNextItem()), this._setPreviousItem(this.getPreviousItem()))
    }, l._setLastItem = function(t) {
      this._lastItem && this._lastItem.getElement() && this._lastItem !== t && this._lastItem.getElement().classList.remove(o.CSS_LAST_ITEM), this._lastItem = t, this._lastItem && this._lastItem.getElement() && this._lastItem.getElement().classList.add(o.CSS_LAST_ITEM)
    }, l._setNextItem = function(t) {
      this._nextItem && this._nextItem.getElement() && this._nextItem !== t && this._nextItem.getElement().classList.remove(o.CSS_NEXT_ITEM), this._nextItem = t, this._nextItem && this._nextItem.getElement() && this._nextItem.getElement().classList.add(o.CSS_NEXT_ITEM)
    }, l._setPreviousItem = function(t) {
      this._previousItem && this._previousItem.getElement() && this._previousItem !== t && this._previousItem.getElement().classList.remove(o.CSS_PREVIOUS_ITEM), this._previousItem = t, this._previousItem && this._previousItem.getElement() && this._previousItem.getElement().classList.add(o.CSS_PREVIOUS_ITEM)
    }, l._updateItems = function(t) {
      t.outgoing[0] && t.outgoing[0].hide(), t.incoming[0].show(), this._itemChanged && (this.trigger(n.UPDATE_COMPLETE, t), this._itemChanged = !1)
    }, l._update = function(t) {
      var e = this._currentItem !== t.item;
      e && this._setCurrentItem(t.item);
      var i = {
        incoming: [t.item],
        outgoing: this._lastItem ? [this._lastItem] : [],
        interactionEvent: t.interactionEvent || null
      };
      e && (this.trigger(n.UPDATE, i), this._itemChanged = !0), this._updateItems(i)
    }, n._instantiate = function() {
      return this._galleries = [], this._idCounter = 0, this
    }, n._add = function(t, e) {
      this._galleries.push(t), t._id = ++this._idCounter, r.add(t, e)
    }, n._remove = function(t) {
      var e = this._galleries.indexOf(t);
      e > -1 && (this._galleries.splice(e, 1), r.remove(t))
    }, n.getAll = function() {
      return Array.prototype.slice.call(this._galleries)
    }, n.getAllInView = function() {
      for (var t = [], e = this._galleries.length; e--;) this._galleries[e].isInView() && t.push(this._galleries[e]);
      return t
    }, n.destroyAll = function() {
      for (var t = this._galleries.length; t--;) this._galleries[t].destroy();
      this._galleries = []
    }, e.exports = n._instantiate()
  }, {
    "./Item": 125,
    "./singletons/analyticsManager": 137,
    "@marcom/ac-event-emitter-micro": 116
  }],
  125: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this._el = t, e = e || {}, this._triggerKeys = [], this._triggerEls = {}, this._isShown = !1, this._isACaption = void 0 !== e.isACaption && e.isACaption,
        this._onKeyboardInteraction = this._onKeyboardInteraction.bind(this), this._onTriggered = this._onTriggered.bind(this), this._isACaption || this._el.setAttribute("role", "tabpanel"), l.call(this)
    }
    t("@marcom/ac-polyfills/Array/from");
    var r = t("@marcom/ac-dom-metrics/isInViewport"),
      s = t("@marcom/ac-dom-metrics/getPercentInViewport"),
      o = t("@marcom/ac-accessibility/helpers/TabManager"),
      a = t("@marcom/ac-keyboard/keyMap"),
      l = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      c = t("@marcom/ac-keyboard"),
      u = "current";
    n.CSS_CURRENT_ITEM = "ac-gallery-currentitem", n.CSS_LAST_ITEM = "ac-gallery-lastitem", n.CSS_NEXT_ITEM = "ac-gallery-nextitem", n.CSS_PREVIOUS_ITEM = "ac-gallery-previousitem", n.SELECTED = "selected", n.SHOW = "show", n.HIDE = "hide";
    var h = n.prototype = Object.create(l.prototype);
    h.show = function() {
      this._isShown = !0, this._addCurrentClassToTriggers(), this._setTabIndexOnFocusableItems(null), this._el.removeAttribute("aria-hidden"), this.trigger(n.SHOW, this)
    }, h.hide = function() {
      this._isShown = !1, this._removeCurrentClassFromTriggers(), this._setTabIndexOnFocusableItems("-1"), this._el.setAttribute("aria-hidden", "true"), this.trigger(n.HIDE, this)
    }, h.addElementTrigger = function(t, e) {
      e = e || "click", void 0 === this._triggerEls[e] && (this._triggerEls[e] = []);
      var i = this._triggerEls[e].indexOf(t);
      if (i < 0) {
        t.setAttribute("role", "tab"), t.setAttribute("tabindex", "0");
        var n = this.getElementId();
        n && t.setAttribute("aria-controls", n), n = t.getAttribute("id"), n && null === this._el.getAttribute("aria-labelledby") && this._el.setAttribute("aria-labelledby", n), t.addEventListener(e, this._onTriggered), this._triggerEls[e].push(t), this._isShown ? (t.setAttribute("aria-selected", "true"), t.classList.add(u)) : t.setAttribute("aria-selected", "false")
      }
    }, Object.defineProperty(h, "triggerElements", {
      get: function() {
        var t = this._triggerEls;
        return Object.keys(t).reduce(function(e, i) {
          return e.concat(t[i])
        }, [])
      }
    }), h.removeElementTrigger = function(t, e) {
      if (e = e || "click", void 0 !== this._triggerEls[e]) {
        var i = this._triggerEls[e].indexOf(t);
        i > -1 && this._cleanElementTrigger(t, e), 0 === this._triggerEls[e].length && (this._triggerEls[e] = void 0)
      }
    }, h.addKeyTrigger = function(t) {
      if ("string" == typeof t && (t = a[t.toUpperCase()]), "number" == typeof t) {
        var e = this._triggerKeys.indexOf(t);
        e < 0 && (c.onDown(t, this._onKeyboardInteraction), this._triggerKeys.push(t))
      }
    }, h.removeKeyTrigger = function(t) {
      if ("string" == typeof t && (t = a[t.toUpperCase()]), "number" == typeof t) {
        var e = this._triggerKeys.indexOf(t);
        e > -1 && (c.offDown(t, this._onKeyboardInteraction), this._triggerKeys.splice(e, 1))
      }
    }, h.removeAllTriggers = function() {
      for (var t, e = this._triggerKeys.length; e--;) t = this._triggerKeys[e], c.offDown(t, this._onKeyboardInteraction);
      this._triggerKeys = [];
      var i, n;
      for (n in this._triggerEls)
        for (e = this._triggerEls[n].length; e--;) i = this._triggerEls[n][e], this._cleanElementTrigger(i, n);
      this._triggerEls = {}
    }, Object.defineProperty(h, "isShown", {
      get: function() {
        return this._isShown
      }
    }), h.isInView = function() {
      return !!this._el && r(this._el)
    }, h.percentageInView = function() {
      return this._el ? s(this._el) : 0
    }, h.getElement = function() {
      return this._el
    }, h.getElementId = function() {
      return void 0 !== this._elId ? this._elId : (this._elId = this._el.getAttribute("id") || null, this._elId)
    }, h.destroy = function() {
      this._isShown && (this._isShown = null, this._el.classList.remove(n.CSS_CURRENT_ITEM, n.CSS_LAST_ITEM, n.CSS_NEXT_ITEM, n.CSS_PREVIOUS_ITEM), this._removeCurrentClassFromTriggers()), this.removeAllTriggers(), this._setTabIndexOnFocusableItems(null), this._el.removeAttribute("aria-hidden"), this._el.removeAttribute("role"), this._el.removeAttribute("aria-labelledby"), this._isACaption = null, this._triggerKeys = null, this._triggerEls = null, this._el = null
    }, h._addCurrentClassToTriggers = function() {
      var t, e, i;
      for (e in this._triggerEls)
        for (i = this._triggerEls[e].length; i--;) t = this._triggerEls[e][i], t.setAttribute("aria-selected", "true"), t.classList.add(u)
    }, h._removeCurrentClassFromTriggers = function() {
      var t, e, i;
      for (e in this._triggerEls)
        for (i = this._triggerEls[e].length; i--;) t = this._triggerEls[e][i], t.setAttribute("aria-selected", "false"), t.classList.remove(u)
    }, h._cleanElementTrigger = function(t, e) {
      t.removeAttribute("aria-selected"), t.removeAttribute("role"), t.removeAttribute("tabindex"), t.removeAttribute("aria-controls"), t.removeEventListener(e, this._onTriggered), this._isShown && t.classList.remove(u)
    }, h._onKeyboardInteraction = function(t) {
      this.isInView() && this._onTriggered(t)
    }, h._setTabIndexOnFocusableItems = function(t) {
      var e = null === t,
        i = [];
      this._currentTabbableEls = this._currentTabbableEls || o.getTabbableElements(this._el), e || (i = o.getTabbableElements(this._el), this._currentTabbableEls = i);
      for (var n = this._currentTabbableEls.length; n--;) e ? this._currentTabbableEls[n].removeAttribute("tabindex") : this._currentTabbableEls[n].setAttribute("tabindex", t)
    }, h._onTriggered = function(t) {
      t.preventDefault(), this.trigger(n.SELECTED, {
        item: this,
        interactionEvent: t
      })
    }, e.exports = n
  }, {
    "@marcom/ac-accessibility/helpers/TabManager": 3,
    "@marcom/ac-dom-metrics/getPercentInViewport": 55,
    "@marcom/ac-dom-metrics/isInViewport": 60,
    "@marcom/ac-event-emitter-micro": 116,
    "@marcom/ac-keyboard": 143,
    "@marcom/ac-keyboard/keyMap": 145,
    "@marcom/ac-polyfills/Array/from": void 0
  }],
  126: [function(t, e, i) {
    "use strict";
    var n = t("./helpers/extendProto"),
      r = t("./Gallery"),
      s = t("./auto/AutoGallery"),
      o = t("./fade/FadeGallery"),
      a = t("./fade/FadeItem"),
      l = t("./slide/SlideGallery"),
      c = t("./slide/SlideItem"),
      u = t("./Item");
    r.create = t("./factories/create"), r.autoCreate = t("./factories/autoCreate"), r.extend = n, s.extend = n, o.extend = n, a.extend = n, l.extend = n, c.extend = n, u.extend = n, e.exports = {
      Gallery: r,
      AutoGallery: s,
      FadeGallery: o,
      FadeGalleryItem: a,
      SlideGallery: l,
      SlideGalleryItem: c,
      Item: u,
      TabNav: t("./navigation/TabNav")
    }
  }, {
    "./Gallery": 124,
    "./Item": 125,
    "./auto/AutoGallery": 128,
    "./factories/autoCreate": 129,
    "./factories/create": 130,
    "./fade/FadeGallery": 131,
    "./fade/FadeItem": 132,
    "./helpers/extendProto": 133,
    "./navigation/TabNav": 136,
    "./slide/SlideGallery": 138,
    "./slide/SlideItem": 139
  }],
  127: [function(t, e, i) {
    "use strict";

    function n() {
      this._observers = {}
    }
    var r;
    try {
      r = t("ac-analytics").observer.Gallery
    } catch (s) {}
    var o = "data-analytics-gallery-id",
      a = n.prototype;
    a.add = function(t, e) {
      var i = t.getId();
      if (r && !this._observers[i]) {
        e = e || {}, e.galleryName || (e.galleryName = this._getAnalyticsId(t, e.dataAttribute) || i), e.beforeUpdateEvent || (e.beforeUpdateEvent = "update"), e.afterUpdateEvent || (e.afterUpdateEvent = "update:complete");
        var n = new r(t, e);
        n.gallery && (this._observers[i] = n)
      }
    }, a.remove = function(t) {
      var e = t.getId();
      r && this._observers[e] && ("function" == typeof this._observers[e].destroy && this._observers[e].destroy(), this._observers[e] = null)
    }, a._getAnalyticsId = function(t, e) {
      if ("function" == typeof t.getElement) {
        e = e || o;
        var i = t.getElement();
        return i.getAttribute(e) || i.getAttribute("id")
      }
      return null
    }, e.exports = n
  }, {
    "ac-analytics": void 0
  }],
  128: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (e = e || {}, !t || 1 !== t.nodeType) throw new Error(v);
      if (this._el = t, c.call(this, e), this._itemHeights = [], this._itemHeightsLookup = {}, this._tabNavDuration = e.tabNavDuration, this._tabNavPaddles = e.tabNavPaddles !== !1, this._isRightToLeft = void 0 === e.rightToLeft ? "rtl" === window.getComputedStyle(t).direction : e.rightToLeft, this._keyboardThrottleDelay = 1e3 * (void 0 === e.keyboardThrottleDelay ? g : e.keyboardThrottleDelay), this._resizeContainer = !!e.resizeContainer, this._setUpContainerAutoResize(e.resizeContainerOnUpdate), this._createTabNav(), this._addPaddleNav(e.addPaddleNav), this._isACaptionsGallery = "" === t.getAttribute("data-ac-gallery-captions"), this._addItems(e.itemSelector || _), this._wrapAround || this._updatePaddleNavState(), e.enableArrowKeys !== !1 && (this._enableArrowKeys = !0, this._addKeyboardListener()), e.updateOnWindowResize !== !1 && (this._onWindowResize = this._onWindowResize.bind(this), window.addEventListener("resize", this._onWindowResize)), this._componentsContainer = document.getElementById(e.container), e.startAt && this._startAt(e.startAt), this.stopAutoPlay = this.stopAutoPlay.bind(this), e.autoPlay) {
        if (!this._componentsContainer) throw new Error(b);
        var i = "number" == typeof e.autoPlay ? e.autoPlay : d;
        this.startAutoPlay(i)
      }
      if (e.deeplink !== !1) {
        var n = this._getDeeplinkedItem();
        n && n !== this._currentItem && this.show(n)
      }
      if (this._containerResizeDuration !== !1) {
        var r = this._itemHeightsLookup[this._currentItem.getElementId()];
        r && this._setElHeight(r)
      }
      this._tabNav && this._tabNav.start(), this._setUpSwiping(e.touch && a(), e.desktopSwipe), this._componentsContainer && this._componentsContainer.setAttribute("tabIndex", -1);
      var s = t.getAttribute("data-related-gallery");
      if (s && (this._captionsContainer = document.querySelector(s)), e.enableCaptions) {
        if (!this._captionsContainer) throw new Error(E);
        this._captionsOptions = !!e.captionsOptions && e.captionsOptions, this.enableCaptions()
      }
    }
    t("@marcom/ac-polyfills/Array/from");
    var r = t("@marcom/ac-keyboard/keyMap"),
      s = t("./../helpers/inputHasFocus"),
      o = t("@marcom/ac-function/throttle"),
      a = t("@marcom/ac-feature/touchAvailable"),
      l = t("@marcom/ac-browser-prefixed"),
      c = t("./../Gallery"),
      u = t("@marcom/ac-keyboard"),
      h = t("@marcom/ac-pointer-tracker").PointerTracker,
      m = t("./../navigation/TabNav"),
      p = "disabled",
      d = 3,
      f = .5,
      _ = "[data-ac-gallery-item]",
      g = .12,
      y = t("../templates/paddlenav.js"),
      v = "No element supplied.",
      b = 'Container element needed when autoPlay is on. Use the "container" option when you instantiate your gallery.',
      E = 'Captions datatag needed when enableCaptions is on. Use the "data-related-gallery" tag (with an ID of the related captions container) on your gallery container to automatically use captions.';
    n.RESIZED = "resized", n.UPDATE = c.UPDATE, n.UPDATE_COMPLETE = c.UPDATE_COMPLETE;
    var w = c.prototype,
      T = n.prototype = Object.create(w);
    T.addItem = function(t, e) {
      if (t.nodeType) {
        var i = this._isACaptionsGallery;
        t = new this._itemType(t, {
          isACaption: i
        })
      } else if (this._items.indexOf(t) > -1) return t;
      return this._resizeContainer && this._storeItemHeight(t, this._containerResizeDuration === !1), this._addItemTriggers(t), w.addItem.call(this, t, e)
    }, T.removeItem = function(t, e) {
      if (this._resizeContainer)
        for (var i = this._itemHeights.length; i--;) this._itemHeights[i].item === t && (this._itemHeights.splice(i, 1), 0 === i && this._itemHeights.length && this._setElHeight(this._itemHeights[0].height));
      return w.removeItem.call(this, t, e)
    }, T.startAutoPlay = function(t, e) {
      if (e = e || {}, this._isAutoPlaying = !0, this._autoPlayDelay = 1e3 * (t || d), this._cancelAutoPlayOnInteraction = void 0 === e.cancelOnInteraction || e.cancelOnInteraction, clearTimeout(this._autoPlayTimeoutId), this._autoPlayTimeoutId = setTimeout(this._onAutoPlayToNextItem.bind(this), this._autoPlayDelay), this._cancelAutoPlayOnInteraction && this.on(c.UPDATE, this.stopAutoPlay), !this._componentsContainer) throw new Error(b);
      this._componentsContainer.addEventListener("focus", this.stopAutoPlay, !0), this._componentsContainer.addEventListener("touchend", this.stopAutoPlay, !0), this._componentsContainer.addEventListener("click", this.stopAutoPlay, !0)
    }, T.stopAutoPlay = function() {
      this._isAutoPlaying = !1, clearTimeout(this._autoPlayTimeoutId), this._cancelAutoPlayOnInteraction && this.off(c.UPDATE, this.stopAutoPlay), this._componentsContainer && (this._componentsContainer.removeEventListener("focus", this.stopAutoPlay, !0), this._componentsContainer.removeEventListener("touchend", this.stopAutoPlay, !0), this._componentsContainer.removeEventListener("click", this.stopAutoPlay, !0))
    }, T.getElement = function() {
      return this._el
    }, T.getTabNav = function() {
      return this._tabNav || null
    }, T.resize = function(t, e) {
      if (this._resizeContainer) {
        this._itemHeights = [];
        for (var i = this._items.length; i--;) this._storeItemHeight(this._items[i], !1);
        this._containerResizeDuration !== !1 ? this._setElHeight(this._itemHeightsLookup[this._currentItem.getElementId()]) : this._setElHeight(this._itemHeights[0].height)
      }
      this._tabNav && this._tabNav.resize(), this.trigger(n.RESIZED, this)
    }, T.enableKeyboard = function() {
      this._enableArrowKeys || (this._enableArrowKeys = !0, this._addKeyboardListener())
    }, T.disableKeyboard = function() {
      this._enableArrowKeys && (this._enableArrowKeys = !1, u.offDown(r.ARROW_RIGHT, this._rightArrowFunc), u.offDown(r.ARROW_LEFT, this._leftArrowFunc))
    }, T.enableTouch = function() {
      this._touchSwipe || this._setUpSwiping(!0, !1)
    }, T.disableTouch = function() {
      this._touchSwipe && (this._touchSwipe.off(h.END, this._onSwipeEnd), this._touchSwipe.destroy(), this._touchSwipe = null)
    }, T.enableDesktopSwipe = function() {
      this._clickSwipe || this._setUpSwiping(!1, !0)
    }, T.disableDesktopSwipe = function() {
      this._clickSwipe && (this._clickSwipe.off(h.END, this._onSwipeEnd), this._clickSwipe.destroy(), this._clickSwipe = null)
    }, T.enableCaptions = function() {
      this._galleryWithCaptions || this._initCaptionsGallery(this._captionsContainer, this._captionsOptions)
    }, T.disableCaptions = function() {
      this._galleryWithCaptions && this._galleryWithCaptions.destroy()
    }, T.destroy = function(t) {
      this._isAutoPlaying && this.stopAutoPlay(), this._componentsContainer && (this._componentsContainer.removeEventListener("focus", this.stopAutoPlay, !0), this._componentsContainer.removeEventListener("touchend", this.stopAutoPlay, !0), this._componentsContainer.removeEventListener("click", this.stopAutoPlay, !0)), this._resizeContainer && (this._el.style.height = null, this._el.style[l.transition] = null), this._enableArrowKeys && (u.offDown(r.ARROW_RIGHT, this._rightArrowFunc), u.offDown(r.ARROW_LEFT, this._leftArrowFunc));
      var e;
      if (this._previousButtons) {
        for (e = this._previousButtons.length; e--;) this._previousButtons[e].removeEventListener("click", this._onPaddlePrevious);
        this._setPaddleDisabledState(this._previousButtons, !1)
      }
      if (this._nextButtons) {
        for (e = this._nextButtons.length; e--;) this._nextButtons[e].removeEventListener("click", this._onPaddleNext);
        this._setPaddleDisabledState(this._nextButtons, !1)
      }
      return this._dynamicPaddleNav && this._el.removeChild(this._dynamicPaddleNav), this._hasPaddleNavStateHandler && this.off(c.UPDATE, this._updatePaddleNavState), this.disableTouch(), this.disableDesktopSwipe(), this.disableCaptions(), this._tabNav && (this._tabNav.destroy(), this._tabNav = null), window.removeEventListener("resize", this._onWindowResize), this._el = null, this._itemHeights = null, this._itemHeightsLookup = null, this._resizeContainer = null, this._isRightToLeft = null, this._enableArrowKeys = null, this._previousButtons = null, this._onPaddlePrevious = null, this._nextButtons = null, this._onPaddleNext = null, this._isACaptionsGallery = null, this._componentsContainer = null, this._galleryWithCaptions = null, this._captionsContainer = null, this._captionsOptions = null, w.destroy.call(this, t)
    }, T._getDeeplinkedItem = function() {
      for (var t, e = window.location.hash.substr(1), i = this._items.length; i--;)
        if (t = this._items[i], e === t.getElementId()) return t;
      return null
    }, T._addItems = function(t) {
      var e, i = this._el.querySelectorAll(t),
        n = 0,
        r = i.length,
        s = this._isACaptionsGallery;
      for (n; n < r; n++) e = new this._itemType(i[n], {
        isACaption: s
      }), this.addItem(e), this._addItemTriggers(e)
    }, T._createTabNav = function() {
      var t = this._getElementId(),
        e = '[data-ac-gallery-tabnav="' + t + '"]',
        i = document.querySelector(e);
      i && (this._tabNav = new m(i, this, {
        duration: this._tabNavDuration,
        usePaddles: this._tabNavPaddles
      }))
    }, T._addItemTriggers = function(t, e) {
      var i = Array.from(document.querySelectorAll('[data-ac-gallery-trigger="' + t.getElementId() + '"]'));
      e && e.length && (i = i.concat(e));
      var n = 0,
        r = i.length;
      for (n; n < r; n++) t.addElementTrigger(i[n]), this._tabNav && this._tabNav.addTrigger(i[n], t)
    }, T._addPaddleNav = function(t) {
      var e, i = this._getElementId();
      if (t) {
        var n = "string" == typeof t ? t : y;
        n = n.replace(/%ID%/g, this._getElementId()), this._dynamicPaddleNav = document.createElement("div"), this._dynamicPaddleNav.innerHTML = n, this._el.insertBefore(this._dynamicPaddleNav, this._el.firstChild)
      }
      this._previousButtons = document.querySelectorAll('[data-ac-gallery-previous-trigger="' + i + '"]'), this._nextButtons = document.querySelectorAll('[data-ac-gallery-next-trigger="' + i + '"]');
      var r = this._el.getAttribute("aria-label") || "";
      if (r.length && (r = "(" + r + ")"), this._onPaddlePrevious = this._onPaddleInteraction.bind(null, this.showPrevious), e = this._previousButtons.length) {
        var s = this._el.getAttribute("data-ac-gallery-previouslabel");
        for (s && r.length && (this._isRightToLeft ? s = r + " " + s : s += " " + r); e--;) s && null === this._previousButtons[e].getAttribute("aria-label") && this._previousButtons[e].setAttribute("aria-label", s), this._previousButtons[e].addEventListener("click", this._onPaddlePrevious)
      }
      if (this._onPaddleNext = this._onPaddleInteraction.bind(null, this.showNext), e = this._nextButtons.length) {
        var o = this._el.getAttribute("data-ac-gallery-nextlabel");
        for (o && r.length && (this._isRightToLeft ? o = r + " " + o : o += " " + r); e--;) o && null === this._nextButtons[e].getAttribute("aria-label") && this._nextButtons[e].setAttribute("aria-label", o), this._nextButtons[e].addEventListener("click", this._onPaddleNext)
      }(this._nextButtons.length || this._previousButtons.length) && (this._hasPaddleNavStateHandler = !0, this._updatePaddleNavState = this._updatePaddleNavState.bind(this), this.on(c.UPDATE, this._updatePaddleNavState))
    }, T._onPaddleInteraction = function(t, e) {
      e.preventDefault(), t.call(null, {
        interactionEvent: e
      })
    }, T._updatePaddleNavState = function() {
      if (this._wrapAround) this._setPaddleDisabledState(this._previousButtons, !1), this._setPaddleDisabledState(this._nextButtons, !1);
      else {
        var t = this._items.indexOf(this._currentItem);
        0 === t && this._previousButtons.length ? (this._setPaddleDisabledState(this._previousButtons, !0), this._setPaddleDisabledState(this._nextButtons, !1)) : t === this._items.length - 1 && this._nextButtons.length ? (this._setPaddleDisabledState(this._nextButtons, !0), this._setPaddleDisabledState(this._previousButtons, !1)) : (this._setPaddleDisabledState(this._previousButtons, !1), this._setPaddleDisabledState(this._nextButtons, !1))
      }
    }, T._setPaddleDisabledState = function(t, e) {
      for (var i = t.length; i--;) t[i].disabled = e, e ? t[i].classList.add(p) : t[i].classList.remove(p)
    }, T._addKeyboardListener = function() {
      if (this._enableArrowKeys) {
        this._onKeyboardInteraction = this._onKeyboardInteraction.bind(this);
        var t, e;
        this._isRightToLeft ? (t = this.showPrevious, e = this.showNext) : (t = this.showNext, e = this.showPrevious), this._rightArrowFunc = o(this._onKeyboardInteraction.bind(null, t), this._keyboardThrottleDelay), this._leftArrowFunc = o(this._onKeyboardInteraction.bind(null, e), this._keyboardThrottleDelay), u.onDown(r.ARROW_RIGHT, this._rightArrowFunc), u.onDown(r.ARROW_LEFT, this._leftArrowFunc)
      }
    }, T._onKeyboardInteraction = function(t, e) {
      if (this.isInView() && !s()) {
        var i = c.getAllInView();
        if (i.length > 1 && (i.sort(function(t, e) {
            return t = t._enableArrowKeys ? t.getCurrentItem().percentageInView() : 0, e = e._enableArrowKeys ? e.getCurrentItem().percentageInView() : 0, e - t
          }), this !== i[0])) return;
        t.call(null, {
          interactionEvent: e
        })
      }
    }, T._setUpSwiping = function(t, e) {
      this._onSwipeEnd = this._onSwipeEnd.bind(this), t && (this._touchSwipe = new h(this._el, h.TOUCH_EVENTS), this._touchSwipe.on(h.END, this._onSwipeEnd)), e && (this._clickSwipe = new h(this._el, h.MOUSE_EVENTS), this._clickSwipe.on(h.END, this._onSwipeEnd))
    }, T._onSwipeEnd = function(t) {
      var e, i, n = t.interactionEvent,
        r = "touchend" !== n.type || "touchstart" !== n.type || "touchmove" !== n.type;
      r && (i = {
        type: "touchmove",
        target: n.target,
        srcElement: n.srcElement
      });
      var s = {
        interactionEvent: i || n
      };
      return t.swipe === h.SWIPE_RIGHT ? e = this._isRightToLeft ? this.showNext : this.showPrevious : t.swipe === h.SWIPE_LEFT && (e = this._isRightToLeft ? this.showPrevious : this.showNext), e ? e.call(this, s) : (n = null, null)
    }, T._getElementId = function() {
      return void 0 === this._elementId && (this._elementId = this._el.getAttribute("id")), this._elementId
    }, T._setUpContainerAutoResize = function(t) {
      "number" == typeof t ? this._containerResizeDuration = t : t ? this._containerResizeDuration = f : this._containerResizeDuration = !1, this._containerResizeDuration !== !1 && (this._resizeContainer = !0, this._updateContainerSize = this._updateContainerSize.bind(this), this.on(c.UPDATE, this._updateContainerSize))
    }, T._updateContainerSize = function(t) {
      if (t.incoming) {
        var e = this._itemHeightsLookup[t.incoming[0].getElementId()];
        e && this._setElHeight(e, this._containerResizeDuration)
      }
    }, T._storeItemHeight = function(t, e) {
      this._itemHeights.push({
        item: t,
        height: t.getElement().scrollHeight
      }), this._itemHeightsLookup[t.getElementId()] = t.getElement().scrollHeight, this._itemHeights.sort(function(t, e) {
        return e.height - t.height
      }), e && this._itemHeights[0].item === t && this._setElHeight(t.getElement().scrollHeight)
    }, T._setElHeight = function(t, e) {
      null !== e && "number" == typeof e && (this._el.style[l.transition] = "height " + e + "s"), this._el.style.height = t + "px"
    }, T._initCaptionsGallery = function(t, e) {
      t && (this._galleryWithCaptions = c.create(t, "fade", e ? e : {
        crossFade: !0
      }), this._enableArrowKeys && (this._galleryWithCaptions._enableArrowKeys = !1), this.on(c.UPDATE, function(t) {
        var e = this.getItemIndex(t.incoming[0]);
        this._galleryWithCaptions.show(e)
      }.bind(this)))
    }, T._onAutoPlayToNextItem = function() {
      if (this._isAutoPlaying)
        if (!document.hidden && this._currentItem.isInView()) {
          this._cancelAutoPlayOnInteraction && this.off(c.UPDATE, this.stopAutoPlay);
          var t = this.showNext();
          null !== t && (this._cancelAutoPlayOnInteraction && this.on(c.UPDATE, this.stopAutoPlay), clearTimeout(this._autoPlayTimeoutId), this._autoPlayTimeoutId = setTimeout(this._onAutoPlayToNextItem.bind(this), this._autoPlayDelay))
        } else clearTimeout(this._autoPlayTimeoutId), this._autoPlayTimeoutId = setTimeout(this._onAutoPlayToNextItem.bind(this), this._autoPlayDelay)
    }, T._onWindowResize = function(t) {
      window.requestAnimationFrame(function() {
        this._el && this.resize()
      }.bind(this))
    }, e.exports = n
  }, {
    "../templates/paddlenav.js": 141,
    "./../Gallery": 124,
    "./../helpers/inputHasFocus": 135,
    "./../navigation/TabNav": 136,
    "@marcom/ac-browser-prefixed": 12,
    "@marcom/ac-feature/touchAvailable": 120,
    "@marcom/ac-function/throttle": 123,
    "@marcom/ac-keyboard": 143,
    "@marcom/ac-keyboard/keyMap": 145,
    "@marcom/ac-pointer-tracker": 163,
    "@marcom/ac-polyfills/Array/from": void 0
  }],
  129: [function(t, e, i) {
    "use strict";
    var n = t("./create"),
      r = t("./../Gallery");
    e.exports = function(t) {
      t = t || {};
      var e, i, s = t.context || document.body;
      for (e = s.querySelectorAll(r.SLIDE_SELECTOR), i = e.length; i--;) n(e[i], r.SLIDE, t);
      for (e = s.querySelectorAll(r.FADE_SELECTOR), i = e.length; i--;) n(e[i], r.FADE, t);
      return r.getAll()
    }
  }, {
    "./../Gallery": 124,
    "./create": 130
  }],
  130: [function(t, e, i) {
    "use strict";
    var n = t("./../fade/FadeGallery"),
      r = t("./../Gallery"),
      s = t("./../slide/SlideGallery"),
      o = "%TYPE% is not a supported gallery type and el has no gallery data attribute.",
      a = r.FADE_SELECTOR.replace(/\[|\]/g, ""),
      l = r.SLIDE_SELECTOR.replace(/\[|\]/g, "");
    e.exports = function(t, e, i) {
      var c;
      if ("string" == typeof e && (e === r.SLIDE ? c = s : e === r.FADE && (c = n)), void 0 === c && (null !== t.getAttribute(l) ? c = s : null !== t.getAttribute(a) && (c = n)), void 0 === c) throw new Error(o.replace(/%TYPE%/g, e));
      return new c(t, i)
    }
  }, {
    "./../Gallery": 124,
    "./../fade/FadeGallery": 131,
    "./../slide/SlideGallery": 138
  }],
  131: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (e = Object.assign({}, e), e.itemType = e.itemType || r, this._fadeDuration = void 0 !== e.duration ? e.duration : o, e.tabNavDuration = void 0 !== e.tabNavDuration ? e.tabNavDuration : this._fadeDuration, this._crossFade = e.crossFade, this._zIndexBase = e.startZIndex || 1, this._ease = e.ease, e.resizeContainerOnUpdate === !0 && (e.resizeContainerOnUpdate = this._fadeDuration), this._onItemShowComplete = this._onItemShowComplete.bind(this), s.call(this, t, e), e.startZIndex)
        for (var i, n = this._items.length; n--;) i = this._items[n], i.getElement().style.zIndex = this._zIndexBase;
      this._currentItem && this._currentItem.fadeIn(0, this._ease, this._zIndexBase + l)
    }
    t("@marcom/ac-polyfills/Object/assign");
    var r = t("./FadeItem"),
      s = t("./../auto/AutoGallery"),
      o = .5,
      a = 1,
      l = 2;
    n.RESIZED = s.RESIZED, n.UPDATE = s.UPDATE, n.UPDATE_COMPLETE = s.UPDATE_COMPLETE;
    var c = s.prototype,
      u = n.prototype = Object.create(c);
    u.addItem = function(t, e) {
      t.nodeType && (t = new this._itemType(t));
      var i = c.addItem.call(this, t, e);
      return t !== this._currentItem ? t.fadeOut() : t.fadeIn(0), i
    }, u.destroy = function(t) {
      var e = c.destroy.call(this, t);
      return this._fadeDuration = null, this._crossFade = null, this._zIndexBase = null, this._ease = null, this._onItemShowComplete = null, e
    }, u._startAt = function(t) {
      var e = this._items[t];
      e && this._currentItem !== e && (this._currentItem.fadeOut(0), this._currentItem.hide(), this._setCurrentItem(e), this._currentItem.show(), this._currentItem.fadeIn(0), this.trigger(n.UPDATE, this._items))
    }, u._onItemShowComplete = function(t) {
      return t && t.target() !== this._currentItem.getElement() ? void(this._currentItem.isFading() || (this._prepareForTransition(), this._currentItem.fadeIn(this._fadeDuration, this._ease, this._zIndexBase + l, this._onItemShowComplete))) : (this._prepareForTransition(!0), void(this._incomingOutgoingItems && this.trigger(n.UPDATE_COMPLETE, this._incomingOutgoingItems)))
    }, u._updateItems = function(t) {
      if (this._itemChanged) {
        if (this._crossFade) {
          this._prepareForTransition();
          var e = function() {
            this.trigger(n.UPDATE_COMPLETE, t), this._itemChanged = !1
          }.bind(this);
          t.outgoing[0].fadeOut(.99 * this._fadeDuration, this._ease), t.incoming[0].fadeIn(this._fadeDuration, this._ease, this._zIndexBase + l, e)
        } else this._incomingOutgoingItems = t, t.outgoing[0].isFading() || (this._prepareForTransition(), t.incoming[0].fadeIn(this._fadeDuration, this._ease, this._zIndexBase + l, this._onItemShowComplete));
        t.outgoing[0].hide(), t.incoming[0].show()
      }
    }, u._prepareForTransition = function(t) {
      for (var e, i = this._items.length; i--;) e = this._items[i], e !== this._currentItem && (t && e.fadeOut(), e.getElement().style.zIndex = this._zIndexBase);
      this._lastItem._el.style.zIndex = this._zIndexBase + a
    }, e.exports = n
  }, {
    "./../auto/AutoGallery": 128,
    "./FadeItem": 132,
    "@marcom/ac-polyfills/Object/assign": void 0
  }],
  132: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      a.call(this, t, e), t.style.position = "absolute"
    }
    var r = t("@marcom/ac-solar/fade"),
      s = t("@marcom/ac-solar/fadeIn"),
      o = t("@marcom/ac-solar/fadeOut"),
      a = t("./../Item");
    n.SELECTED = a.SELECTED, n.SHOW = a.SHOW, n.HIDE = a.HIDE;
    var l = a.prototype,
      c = n.prototype = Object.create(l);
    c.fadeIn = function(t, e, i, n) {
      this._el.style.zIndex = i || 1, t ? (this._destroyCurrentClip(), this._clip = r(this._el, 0, 1, t, {
        ease: e,
        onComplete: n
      })) : s(this._el, 0)
    }, c.fadeOut = function(t, e) {
      t ? (this._destroyCurrentClip(), this._clip = o(this._el, t, {
        ease: e
      })) : o(this._el, 0)
    }, c.isFading = function() {
      return !(!this._clip || !this._clip.playing())
    }, c.destroy = function() {
      this._el.style.position = null, this._el.style.opacity = null, this._el.style.zIndex = null, l.destroy.call(this), this._destroyCurrentClip(), this._clip = null
    }, c._destroyCurrentClip = function() {
      this._clip && this._clip._el && this._clip.destroy()
    }, e.exports = n
  }, {
    "./../Item": 125,
    "@marcom/ac-solar/fade": 198,
    "@marcom/ac-solar/fadeIn": 199,
    "@marcom/ac-solar/fadeOut": 200
  }],
  133: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Object/assign"), e.exports = function(t) {
      var e = this,
        i = function() {
          e.apply(this, arguments)
        },
        n = Object.create(this.prototype);
      return i.prototype = Object.assign(n, t), Object.assign(i, this), i
    }
  }, {
    "@marcom/ac-polyfills/Object/assign": void 0
  }],
  134: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e) {
      var i = window.getComputedStyle(t),
        n = e ? t.clientWidth : t.scrollWidth;
      return Math.round(n + parseFloat(i.marginRight) + parseFloat(i.marginLeft))
    }
  }, {}],
  135: [function(t, e, i) {
    "use strict";
    e.exports = function() {
      var t = ["input", "select", "textarea"];
      return t.indexOf(document.activeElement.nodeName.toLowerCase()) > -1
    }
  }, {}],
  136: [function(t, e, i) {
    "use strict";

    function n(t, e, i) {
      i = i || {}, this._el = t, this._gallery = e, this._triggers = {}, this._ordered = [], i.scrollDuration = "undefined" == typeof i.duration ? l : i.duration, this.tabnav = new s(t, i), o.call(this)
    }
    var r = t("@marcom/ac-dom-traversal/ancestors"),
      s = t("@marcom/ac-tabnav"),
      o = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      a = t("./../Gallery"),
      l = .5,
      c = o.prototype,
      u = n.prototype = Object.create(c);
    u.start = function() {
      this._onWindowLoad = this._onWindowLoad.bind(this), this._onGalleryUpdated = this._onGalleryUpdated.bind(this), this._gallery.on(a.UPDATE, this._onGalleryUpdated), this.resize(), window.addEventListener("load", this._onWindowLoad)
    }, u.addTrigger = function(t, e) {
      if (void 0 === this._triggers[e.getElementId()]) {
        var i = r(t);
        if (i.indexOf(this._el) > -1) {
          var n = {
            el: t
          };
          this._triggers[e.getElementId()] = n, this._ordered.push(n)
        }
      }
    }, u.resize = function() {
      var t;
      this._ordered.length && this.tabnav._wrapper.scrollWidth > this.tabnav.el.scrollWidth && (t = this._triggers[this._gallery.getCurrentItem().getElementId()], t && this.tabnav.centerItem(t.el))
    }, u.destroy = function() {
      return this._gallery.off(a.UPDATE, this._onGalleryUpdated), window.removeEventListener("load", this._onWindowLoad), this._el = null, this._gallery = null, this._triggers = null, this._ordered = null, this._clip = null, c.destroy.call(this)
    }, u._onWindowLoad = function() {
      window.removeEventListener("load", this._onWindowLoad), this.resize()
    }, u._onGalleryUpdated = function(t) {
      var e = this._triggers[t.incoming[0].getElementId()];
      e && this.tabnav.centerItem(e.el)
    }, e.exports = n
  }, {
    "./../Gallery": 124,
    "@marcom/ac-dom-traversal/ancestors": 76,
    "@marcom/ac-event-emitter-micro": 116,
    "@marcom/ac-tabnav": 203
  }],
  137: [function(t, e, i) {
    "use strict";
    var n = t("./../analytics/AnalyticsManager");
    e.exports = new n
  }, {
    "./../analytics/AnalyticsManager": 127
  }],
  138: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      e = Object.assign({}, e), e.itemType = e.itemType || c, this._itemsPerSlide = e.itemsPerSlide || 1;
      var i = e.deeplink !== !1;
      if (e.deeplink = !1, this._slideDuration = void 0 !== e.duration ? e.duration : m, e.tabNavDuration = void 0 !== e.tabNavDuration ? e.tabNavDuration : this._slideDuration, this._itemCenterPoint = void 0 !== e.itemCenterPoint ? e.itemCenterPoint : h, this._edgePullResistance = e.edgePullResistance ? e.edgePullResistance : p, this._useClientWidthForItemWidth = e.useItemClientWidth || !1, this._slideOptions = {
          ease: e.ease
        }, e.resizeContainerOnUpdate === !0 && (e.resizeContainerOnUpdate = this._slideDuration), e.touch = e.touch !== !1, this._originalWrapAround = e.wrapAround || !1, a.call(this, t, e), i) {
        var n = this._getDeeplinkedItem();
        n && this._currentItem !== n && (this._currentItem.hide(), this._setCurrentItem(n), this._currentItem.show())
      }
      this._positionItems = this._positionItems.bind(this), this._createContainer(), 0 !== this._items.length && this._positionItems(), this._isInstantiated = !0
    }
    t("@marcom/ac-polyfills/Array/from"), t("@marcom/ac-polyfills/Object/assign");
    var r = t("./../helpers/getElementFullWidth"),
      s = t("@marcom/ac-solar/moveX"),
      o = t("@marcom/ac-browser-prefixed"),
      a = t("./../auto/AutoGallery"),
      l = t("@marcom/ac-pointer-tracker").PointerTracker,
      c = t("./SlideItem"),
      u = t("./SlideItemWrapper"),
      h = .5,
      m = .5,
      p = !0;
    n.RESIZED = a.RESIZED, n.UPDATE = a.UPDATE, n.UPDATE_COMPLETE = a.UPDATE_COMPLETE;
    var d = a.prototype,
      f = n.prototype = Object.create(d);
    f.addItem = function(t, e) {
      t.nodeType && (t = new this._itemType(t));
      var i = d.addItem.call(this, t, e);
      return void 0 !== this._containerEl && (this._addItemToContainer(t), this._positionItems()), this._updateWrapAround(), i
    }, f.removeItem = function(t, e) {
      if (this._containerEl && t.getElement().parentElement === this._containerEl) {
        var i = t.getOriginalParentElement();
        i ? i.appendChild(t.getElement()) : "function" == typeof t.removeItems && (t.removeItems(), e.destroyItem = !0);
        var n = d.removeItem.call(this, t, e);
        return this._currentItem && this._positionItems(this._currentItem), this._updateWrapAround(), n
      }
      return d.removeItem.call(this, t, e)
    }, f.resize = function() {
      return this._positionItems(), this._snapToPosition(this._currentItem.position()), d.resize.call(this)
    }, f.destroy = function(t) {
      this._destroyCurrentClip(), this._clip = null;
      for (var e = this._items.length; e--;) this._items[e].off(c.CENTER_POINT_CHANGED, this._positionItems);
      this._touchSwipe && (this._touchSwipe.off(l.START, this._onSwipeStart), this._touchSwipe.off(l.UPDATE, this._onSwipeUpdate)), this._clickSwipe && (this._clickSwipe.off(l.START, this._onSwipeStart), this._clickSwipe.off(l.UPDATE, this._onSwipeUpdate));
      var i = this._el,
        n = d.destroy.call(this, t);
      return i.removeChild(this._containerEl), this._containerEl = null, this._slideDuration = null, this._itemCenterPoint = null, this._positionItems = null, this._slideOptions = null, n
    }, f._addItems = function(t) {
      if (this._itemsPerSlide > 1) {
        var e, i, n, r = this._el.querySelectorAll(t),
          s = 0,
          o = 0,
          a = r.length;
        for (o; o < a; o++) 0 === s && (e = new u(this._useClientWidthForItemWidth)), e.addItem(r[o]), n = r[o].getAttribute("id"), n && (i = Array.from(document.querySelectorAll("[data-ac-gallery-trigger=" + n + "]")), this._addItemTriggers(e, i)), ++s !== this._itemsPerSlide && o !== a - 1 || (s = 0, e.resize(), this.addItem(e))
      } else d._addItems.call(this, t)
    }, f._createContainer = function() {
      this._containerEl = document.createElement("div"), this._containerEl.classList.add("ac-gallery-slidecontainer"), this._containerEl.style.position = "absolute", this._containerEl.style.top = "0", this._containerEl.style.left = "0", this._containerEl.style.width = "100%", this._containerEl.style.height = "100%", this._el.appendChild(this._containerEl);
      var t = 0,
        e = this._items.length;
      for (t; t < e; t++) this._addItemToContainer(this._items[t])
    }, f._addItemToContainer = function(t) {
      this._containerEl.appendChild(t.getElement()), this._resizeContainer && this._itemsPerSlide > 1 && this._storeItemHeight(t, this._containerResizeDuration === !1), t.on(c.CENTER_POINT_CHANGED, this._positionItems)
    }, f._positionItems = function(t) {
      t = t || this._currentItem;
      var e = this._items;
      this._wrapAround && (e = this._shuffleItems());
      var i, n, s, o, a, l = this._getActualPositionX() - t.position() || 0,
        c = parseInt(window.getComputedStyle(this._el).width, 10),
        u = 0,
        h = 0,
        m = e.length;
      for (h; h < m; h++) i = e[h], i.resize(), n = i.getElement(), n.style.left = u + "px", s = r(n, this._useClientWidthForItemWidth), o = c - s, a = i.centerPoint && null !== i.centerPoint() ? i.centerPoint() : this._itemCenterPoint, i.position(u * -1 + o * a), this._isRightToLeft ? u -= s : u += s;
      u = t.position() + l, this._snapToPosition(u)
    }, f._getActualPositionX = function() {
      var t = window.getComputedStyle(this._containerEl)[o.transform];
      if (t === this._transformStyles && void 0 !== this._actualPositionX) return this._actualPositionX;
      this._transformStyles = t;
      var e = this._transformStyles.split(",");
      return this._actualPositionX = e[4] || this._currentItem.position(), 1 * this._actualPositionX
    }, f._snapToPosition = function(t) {
      this._destroyCurrentClip(), this._positionX = t, this._containerEl.style[o.transition] = "transform 0s, left 0s", s(this._containerEl, t, 0, this._slideOptions)
    }, f._slideToPosition = function(t, e, i) {
      this._positionX = t, this._clip = s(this._containerEl, t, e, {
        ease: this._slideOptions.ease,
        onComplete: i
      })
    }, f._setUpSwiping = function(t, e) {
      var i = d._setUpSwiping.call(this, t, e);
      return this._onSwipeStart = this._onSwipeStart.bind(this), this._onSwipeUpdate = this._onSwipeUpdate.bind(this), this._touchSwipe && (this._touchSwipe.on(l.START, this._onSwipeStart), this._touchSwipe.on(l.UPDATE, this._onSwipeUpdate)), this._clickSwipe && (this._clickSwipe.on(l.START, this._onSwipeStart), this._clickSwipe.on(l.UPDATE, this._onSwipeUpdate)), i
    }, f._onSwipeStart = function(t) {
      this._clip && this._clip.playing() && (this._destroyCurrentClip(), this._positionX = this._getActualPositionX())
    }, f._onSwipeUpdate = function(t) {
      this._destroyCurrentClip();
      var e = this.getItems().slice(-1)[0].position(),
        i = this._positionX > 0 || this._positionX < e,
        n = t.diffX;
      this._edgePullResistance && !this._wrapAround && i && (n *= .5), this._snapToPosition(this._positionX - n)
    }, f._onSwipeEnd = function(t) {
      var e = d._onSwipeEnd.call(this, t);
      return null === e && (e = this.show(this._currentItem, {
        interactionEvent: t.interactionEvent
      })), e
    }, f._shuffleItems = function() {
      var t = 2 === this._items.length && !this._isAutoPlaying;
      if (t) return this._items.slice();
      var e, i, n, r = this._items.length,
        s = this._items.indexOf(this._currentItem),
        o = Math.floor(.5 * r);
      if (s < o) {
        e = o - s;
        var a = r - e;
        return i = this._items.slice(a), n = this._items.slice(0, a), i.concat(n)
      }
      return s > o ? (e = s - o, i = this._items.slice(0, e), n = this._items.slice(e), n.concat(i)) : this._items
    }, f._storeItemHeight = function(t, e) {
      var i;
      if (this._itemsPerSlide > 1) {
        for (var n = [], r = 0; r < t.getElement().children.length; r++) n.push(t.getElement().children[r].scrollHeight);
        i = Math.max.apply(null, n)
      } else i = t.getElement().scrollHeight;
      i && (this._itemHeights.push({
        item: t,
        height: i
      }), this._itemHeightsLookup[t.getElementId()] = i, this._itemHeights.sort(function(t, e) {
        return e.height - t.height
      }), e && this._itemHeights[0].item === t && this._setElHeight(i))
    }, f._updateItems = function(t) {
      if (this._destroyCurrentClip(), this._wrapAround && this._positionItems(t.outgoing[0]), this.getItemIndex(t.outgoing[0]) > -1) {
        var e = this._itemChanged ? function() {
            this.trigger(n.UPDATE_COMPLETE, t), this._itemChanged = !1
          }.bind(this) : null,
          i = this._slideDuration;
        this._slideToPosition(t.incoming[0].position(), i, e), t.incoming[0] !== t.outgoing[0] && (t.incoming[0].show(), t.outgoing[0].hide())
      } else this._slideToPosition(this._currentItem.position(), this._slideDuration), t.incoming[0].show(), this._itemChanged && (this.trigger(n.UPDATE_COMPLETE, t), this._itemChanged = !1)
    }, f._updateWrapAround = function() {
      this._items.length <= 2 ? this._wrapAround = !1 : this._originalWrapAround && (this._wrapAround = this._originalWrapAround), this._isInstantiated && (this._previousButtons || this._nextButtons) && this._updatePaddleNavState()
    }, f._destroyCurrentClip = function() {
      this._clip && this._clip.playing() && this._clip.destroy()
    }, e.exports = n
  }, {
    "./../auto/AutoGallery": 128,
    "./../helpers/getElementFullWidth": 134,
    "./SlideItem": 139,
    "./SlideItemWrapper": 140,
    "@marcom/ac-browser-prefixed": 12,
    "@marcom/ac-pointer-tracker": 163,
    "@marcom/ac-polyfills/Array/from": void 0,
    "@marcom/ac-polyfills/Object/assign": void 0,
    "@marcom/ac-solar/moveX": 202
  }],
  139: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      s.call(this, t, e), t.style.position = "absolute", t.style[r.transform] = "translateZ(0)", this._parentElement = t.parentElement
    }
    var r = t("@marcom/ac-browser-prefixed"),
      s = t("./../Item");
    n.CENTER_POINT_CHANGED = "centerpointchanged", n.SELECTED = s.SELECTED, n.SHOW = s.SHOW, n.HIDE = s.HIDE;
    var o = s.prototype,
      a = n.prototype = Object.create(o);
    a.position = function(t) {
      return void 0 !== t && (this._position = t), this._position || 0
    }, a.centerPoint = function(t) {
      return void 0 !== t && (this._centerPoint = t, this.trigger(n.CENTER_POINT_CHANGED)), void 0 !== this._centerPoint ? this._centerPoint : null
    }, a.getOriginalParentElement = function() {
      return this._parentElement
    }, a.resize = function() {}, a.destroy = function() {
      this._el.style.position = null, this._el.style.left = null, this._el.style[r.transform] = null, o.destroy.call(this)
    }, e.exports = n
  }, {
    "./../Item": 125,
    "@marcom/ac-browser-prefixed": 12
  }],
  140: [function(t, e, i) {
    "use strict";

    function n(t) {
      s.call(this, document.createElement("div")), this._useClientWidthForItemWidth = t, this._items = [], this._currentWidth = 0, this._el.classList.add(o)
    }
    t("@marcom/ac-polyfills/Array/from");
    var r = t("./../helpers/getElementFullWidth"),
      s = t("./SlideItem"),
      o = "ac-gallery-slideitemwrapper",
      a = s.prototype,
      l = n.prototype = Object.create(a);
    l.addItem = function(t) {
      this._items.push({
        el: t,
        parentElement: t.parentElement
      }), this._el.appendChild(t);
      var e = t.getAttribute("id");
      if (e) {
        var i = this._el.getAttribute("id") || "",
          n = i.length ? "-" : "";
        i += n + e, this._el.setAttribute("id", i)
      }
    }, l.removeItems = function() {
      var t, e, i = 0,
        n = this._items.length;
      for (i; i < n; i++) t = this._items[i].el, t.style.position = null, t.style.left = null, e = this._items[i].parentElement, e && e.appendChild(t)
    }, l.resize = function() {
      this._currentWidth = 0;
      var t, e = 0,
        i = this._items.length,
        n = "rtl" === document.dir ? "right" : "left";
      for (e; e < i; e++) t = this._items[e].el, t.style.position = "absolute", t.style[n] = this._currentWidth + "px", this._currentWidth += r(t, this._useClientWidthForItemWidth);
      this._el.style.width = this._currentWidth + "px"
    }, l.destroy = function() {
      this.removeItems(), this._items = null, this._currentWidth = null;
      var t = this._el.parentElement;
      t && t.removeChild(this._el), a.destroy.call(this)
    }, e.exports = n
  }, {
    "./../helpers/getElementFullWidth": 134,
    "./SlideItem": 139,
    "@marcom/ac-polyfills/Array/from": void 0
  }],
  141: [function(t, e, i) {
    "use strict";
    var n = "";
    n += '<div class="paddlenav" data-analytics-gallery-interaction-type="paddlenav">', n += "<ul>", n += '<li><button class="paddlenav-arrow paddlenav-arrow-previous" data-ac-gallery-previous-trigger="%ID%"></button></li>', n += '<li><button class="paddlenav-arrow paddlenav-arrow-next" data-ac-gallery-next-trigger="%ID%"></button></li>', n += "</ul>", n += "</div>", e.exports = n
  }, {}],
  142: [function(t, e, i) {
    "use strict";

    function n(t) {
      this._keysDown = {}, this._DOMKeyDown = this._DOMKeyDown.bind(this), this._DOMKeyUp = this._DOMKeyUp.bind(this), this._context = t || document, s(this._context, c, this._DOMKeyDown, !0), s(this._context, u, this._DOMKeyUp, !0), r.call(this)
    }
    var r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      s = t("@marcom/ac-dom-events/utils/addEventListener"),
      o = t("@marcom/ac-dom-events/utils/removeEventListener"),
      a = t("@marcom/ac-object/create"),
      l = t("./internal/KeyEvent"),
      c = "keydown",
      u = "keyup",
      h = n.prototype = a(r.prototype);
    h.onDown = function(t, e) {
      return this.on(c + ":" + t, e)
    }, h.onceDown = function(t, e) {
      return this.once(c + ":" + t, e)
    }, h.offDown = function(t, e) {
      return this.off(c + ":" + t, e)
    }, h.onUp = function(t, e) {
      return this.on(u + ":" + t, e)
    }, h.onceUp = function(t, e) {
      return this.once(u + ":" + t, e)
    }, h.offUp = function(t, e) {
      return this.off(u + ":" + t, e)
    }, h.isDown = function(t) {
      return t += "", this._keysDown[t] || !1
    }, h.isUp = function(t) {
      return !this.isDown(t)
    }, h.destroy = function() {
      return o(this._context, c, this._DOMKeyDown, !0), o(this._context, u, this._DOMKeyUp, !0), this._keysDown = null, this._context = null, r.prototype.destroy.call(this), this
    }, h._DOMKeyDown = function(t) {
      var e = this._normalizeKeyboardEvent(t),
        i = e.keyCode += "";
      this._trackKeyDown(i), this.trigger(c + ":" + i, e)
    }, h._DOMKeyUp = function(t) {
      var e = this._normalizeKeyboardEvent(t),
        i = e.keyCode += "";
      this._trackKeyUp(i), this.trigger(u + ":" + i, e)
    }, h._normalizeKeyboardEvent = function(t) {
      return new l(t)
    }, h._trackKeyUp = function(t) {
      this._keysDown[t] && (this._keysDown[t] = !1)
    }, h._trackKeyDown = function(t) {
      this._keysDown[t] || (this._keysDown[t] = !0)
    }, e.exports = n
  }, {
    "./internal/KeyEvent": 144,
    "@marcom/ac-dom-events/utils/addEventListener": 51,
    "@marcom/ac-dom-events/utils/removeEventListener": 52,
    "@marcom/ac-event-emitter-micro": 116,
    "@marcom/ac-object/create": 158
  }],
  143: [function(t, e, i) {
    "use strict";
    var n = t("./Keyboard");
    e.exports = new n
  }, {
    "./Keyboard": 142
  }],
  144: [function(t, e, i) {
    "use strict";

    function n(t) {
      this.originalEvent = t;
      var e;
      for (e in t) r.indexOf(e) === -1 && "function" != typeof t[e] && (this[e] = t[e]);
      this.location = void 0 !== this.originalEvent.location ? this.originalEvent.location : this.originalEvent.keyLocation
    }
    var r = ["keyLocation"];
    n.prototype = {
      preventDefault: function() {
        return "function" != typeof this.originalEvent.preventDefault ? void(this.originalEvent.returnValue = !1) : this.originalEvent.preventDefault()
      },
      stopPropagation: function() {
        return this.originalEvent.stopPropagation()
      }
    }, e.exports = n
  }, {}],
  145: [function(t, e, i) {
    "use strict";
    e.exports = {
      BACKSPACE: 8,
      TAB: 9,
      ENTER: 13,
      SHIFT: 16,
      CONTROL: 17,
      ALT: 18,
      COMMAND: 91,
      CAPSLOCK: 20,
      ESCAPE: 27,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      ARROW_LEFT: 37,
      ARROW_UP: 38,
      ARROW_RIGHT: 39,
      ARROW_DOWN: 40,
      DELETE: 46,
      ZERO: 48,
      ONE: 49,
      TWO: 50,
      THREE: 51,
      FOUR: 52,
      FIVE: 53,
      SIX: 54,
      SEVEN: 55,
      EIGHT: 56,
      NINE: 57,
      A: 65,
      B: 66,
      C: 67,
      D: 68,
      E: 69,
      F: 70,
      G: 71,
      H: 72,
      I: 73,
      J: 74,
      K: 75,
      L: 76,
      M: 77,
      N: 78,
      O: 79,
      P: 80,
      Q: 81,
      R: 82,
      S: 83,
      T: 84,
      U: 85,
      V: 86,
      W: 87,
      X: 88,
      Y: 89,
      Z: 90,
      NUMPAD_ZERO: 96,
      NUMPAD_ONE: 97,
      NUMPAD_TWO: 98,
      NUMPAD_THREE: 99,
      NUMPAD_FOUR: 100,
      NUMPAD_FIVE: 101,
      NUMPAD_SIX: 102,
      NUMPAD_SEVEN: 103,
      NUMPAD_EIGHT: 104,
      NUMPAD_NINE: 105,
      NUMPAD_ASTERISK: 106,
      NUMPAD_PLUS: 107,
      NUMPAD_DASH: 109,
      NUMPAD_DOT: 110,
      NUMPAD_SLASH: 111,
      NUMPAD_EQUALS: 187,
      TICK: 192,
      LEFT_BRACKET: 219,
      RIGHT_BRACKET: 221,
      BACKSLASH: 220,
      SEMICOLON: 186,
      APOSTRAPHE: 222,
      APOSTROPHE: 222,
      SPACEBAR: 32,
      CLEAR: 12,
      COMMA: 188,
      DOT: 190,
      SLASH: 191
    }
  }, {}],
  146: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e;
      if (t = t || window, t === window) {
        if (e = window.pageXOffset) return e;
        t = document.documentElement || document.body.parentNode || document.body
      }
      return t.scrollLeft
    }
  }, {}],
  147: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e;
      if (t = t || window, t === window) {
        if (e = window.pageYOffset) return e;
        t = document.documentElement || document.body.parentNode || document.body
      }
      return t.scrollTop
    }
  }, {}],
  148: [function(t, e, i) {
    "use strict";
    e.exports = {
      Modal: t("./ac-modal-basic/Modal"),
      Renderer: t("./ac-modal-basic/Renderer"),
      classNames: t("./ac-modal-basic/classNames"),
      dataAttributes: t("./ac-modal-basic/dataAttributes")
    }
  }, {
    "./ac-modal-basic/Modal": 149,
    "./ac-modal-basic/Renderer": 150,
    "./ac-modal-basic/classNames": 151,
    "./ac-modal-basic/dataAttributes": 152
  }],
  149: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      c.call(this), this.options = o.defaults(h, t), this.renderer = new u(e), this.opened = !1, this._keysToClose = [l.ESCAPE], this._attachedKeysToClose = [], this.close = this.close.bind(this)
    }
    var r = {
        addEventListener: t("@marcom/ac-dom-events/addEventListener"),
        removeEventListener: t("@marcom/ac-dom-events/removeEventListener"),
        target: t("@marcom/ac-dom-events/target")
      },
      s = {
        getScrollX: t("@marcom/ac-dom-metrics/getScrollX"),
        getScrollY: t("@marcom/ac-dom-metrics/getScrollY")
      },
      o = {
        create: t("@marcom/ac-object/create"),
        defaults: t("@marcom/ac-object/defaults")
      },
      a = t("@marcom/ac-keyboard"),
      l = t("@marcom/ac-keyboard/keyMap"),
      c = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      u = t("./Renderer"),
      h = {
        retainScrollPosition: !1
      },
      m = n.prototype = o.create(c.prototype);
    m.open = function() {
      this.options.retainScrollPosition && this._saveScrollPosition(), this.opened || (this._attachEvents(), this.trigger("willopen"), this.renderer.open(), this.opened = !0, this.trigger("open"))
    }, m.close = function(t) {
      var e, i;
      if (this.opened) {
        if (t && "click" === t.type && (e = r.target(t), i = this.renderer.options.dataAttributes.close, !e.hasAttribute(i))) return;
        this.trigger("willclose"), this._removeEvents(), this.renderer.close(), this.options.retainScrollPosition && this._restoreScrollPosition(), this.opened = !1, this.trigger("close")
      }
    }, m.render = function() {
      this.renderer.render()
    }, m.appendContent = function(t, e) {
      this.renderer.appendContent(t, e)
    }, m.removeContent = function(t) {
      this.renderer.removeContent(t)
    }, m.destroy = function() {
      this._removeEvents(), this.renderer.destroy();
      for (var t in this) this.hasOwnProperty(t) && (this[t] = null)
    }, m.addKeyToClose = function(t) {
      var e = this._keysToClose.indexOf(t);
      e === -1 && (this._keysToClose.push(t), this._bindKeyToClose(t))
    }, m.removeKeyToClose = function(t) {
      var e = this._keysToClose.indexOf(t);
      e !== -1 && this._keysToClose.splice(e, 1), this._releaseKeyToClose(t)
    }, m._bindKeyToClose = function(t) {
      var e = this._attachedKeysToClose.indexOf(t);
      e === -1 && (a.onUp(t, this.close), this._attachedKeysToClose.push(t))
    }, m._releaseKeyToClose = function(t) {
      var e = this._attachedKeysToClose.indexOf(t);
      e !== -1 && (a.offUp(t, this.close), this._attachedKeysToClose.splice(e, 1))
    }, m._removeEvents = function() {
      this.renderer.modalElement && r.removeEventListener(this.renderer.modalElement, "click", this.close), this._keysToClose.forEach(this._releaseKeyToClose, this)
    }, m._attachEvents = function() {
      this.renderer.modalElement && r.addEventListener(this.renderer.modalElement, "click", this.close), this._keysToClose.forEach(this._bindKeyToClose, this)
    }, m._restoreScrollPosition = function() {
      window.scrollTo(this._scrollX || 0, this._scrollY || 0)
    }, m._saveScrollPosition = function() {
      this._scrollX = s.getScrollX(), this._scrollY = s.getScrollY()
    }, e.exports = n
  }, {
    "./Renderer": 150,
    "@marcom/ac-dom-events/addEventListener": 47,
    "@marcom/ac-dom-events/removeEventListener": 48,
    "@marcom/ac-dom-events/target": 50,
    "@marcom/ac-dom-metrics/getScrollX": 146,
    "@marcom/ac-dom-metrics/getScrollY": 147,
    "@marcom/ac-event-emitter-micro": 116,
    "@marcom/ac-keyboard": 143,
    "@marcom/ac-keyboard/keyMap": 145,
    "@marcom/ac-object/create": 158,
    "@marcom/ac-object/defaults": 159
  }],
  150: [function(t, e, i) {
    "use strict";
    var n = {
        add: t("@marcom/ac-classlist/add"),
        remove: t("@marcom/ac-classlist/remove")
      },
      r = {
        defaults: t("@marcom/ac-object/defaults")
      },
      s = {
        remove: t("@marcom/ac-dom-nodes/remove"),
        isElement: t("@marcom/ac-dom-nodes/isElement")
      },
      o = t("./classNames"),
      a = t("./dataAttributes"),
      l = {
        modalElement: null,
        contentElement: null,
        closeButton: null,
        classNames: o,
        dataAttributes: a
      },
      c = function(t) {
        t = t || {}, this.options = r.defaults(l, t), this.options.classNames = r.defaults(l.classNames, t.classNames), this.options.dataAttributes = r.defaults(l.dataAttributes, t.dataAttributes), this.modalElement = this.options.modalElement, this.contentElement = this.options.contentElement, this.closeButton = this.options.closeButton
      },
      u = c.prototype;
    u.render = function() {
      return s.isElement(this.modalElement) || (this.modalElement = this.renderModalElement(this.options.classNames.modalElement)), s.isElement(this.contentElement) || (this.contentElement = this.renderContentElement(this.options.classNames.contentElement)), this.closeButton !== !1 && (s.isElement(this.closeButton) || (this.closeButton = this.renderCloseButton(this.options.classNames.closeButton)), this.modalElement.appendChild(this.closeButton)), this.modalElement.appendChild(this.contentElement), document.body.appendChild(this.modalElement), this.modalElement
    }, u.renderCloseButton = function(t) {
      var e;
      return t = t || this.options.classNames.closeButton, e = this._renderElement("button", t), e.setAttribute(this.options.dataAttributes.close, ""), e
    }, u.renderModalElement = function(t) {
      return t = t || this.options.classNames.modalElement, this._renderElement("div", t)
    }, u.renderContentElement = function(t) {
      return t = t || this.options.classNames.contentElement, this._renderElement("div", t)
    }, u.appendContent = function(t, e) {
      s.isElement(t) && (void 0 === arguments[1] ? this.contentElement.appendChild(t) : s.isElement(e) && e.appendChild(t))
    }, u.removeContent = function(t) {
      t ? this.modalElement.contains(t) && s.remove(t) : this._emptyContent()
    }, u.open = function() {
      var t = [document.documentElement].concat(this.options.classNames.documentElement),
        e = [this.modalElement].concat(this.options.classNames.modalOpen);
      n.add.apply(null, t), n.add.apply(null, e)
    }, u.close = function() {
      var t = [document.documentElement].concat(this.options.classNames.documentElement),
        e = [this.modalElement].concat(this.options.classNames.modalOpen);
      n.remove.apply(null, t), n.remove.apply(null, e)
    }, u.destroy = function() {
      var t = [document.documentElement].concat(this.options.classNames.documentElement);
      this.modalElement && document.body.contains(this.modalElement) && (this.close(), document.body.removeChild(this.modalElement)), n.remove.apply(null, t);
      for (var e in this) this.hasOwnProperty(e) && (this[e] = null)
    }, u._renderElement = function(t, e) {
      var i = document.createElement(t),
        r = [i];
      return e && (r = r.concat(e)), n.add.apply(null, r), i
    }, u._emptyContent = function() {
      this.contentElement.innerHTML = ""
    }, e.exports = c
  }, {
    "./classNames": 151,
    "./dataAttributes": 152,
    "@marcom/ac-classlist/add": 13,
    "@marcom/ac-classlist/remove": 18,
    "@marcom/ac-dom-nodes/isElement": 69,
    "@marcom/ac-dom-nodes/remove": 71,
    "@marcom/ac-object/defaults": 159
  }],
  151: [function(t, e, i) {
    "use strict";
    e.exports = {
      modalElement: "modal",
      modalOpen: "modal-open",
      documentElement: "has-modal",
      contentElement: "modal-content",
      closeButton: "modal-close"
    }
  }, {}],
  152: [function(t, e, i) {
    "use strict";
    e.exports = {
      close: "data-modal-close"
    }
  }, {}],
  153: [function(t, e, i) {
    "use strict";
    e.exports = {
      Modal: t("./ac-modal/Modal"),
      createStandardModal: t("./ac-modal/factory/createStandardModal"),
      createFullViewportModal: t("./ac-modal/factory/createFullViewportModal")
    }
  }, {
    "./ac-modal/Modal": 154,
    "./ac-modal/factory/createFullViewportModal": 155,
    "./ac-modal/factory/createStandardModal": 156
  }],
  154: [function(t, e, i) {
    "use strict";

    function n(t) {
      s.call(this), this.options = t || {}, this._modal = new r(t, this.options.renderer), this.opened = !1, this._render(), this.closeButton = this._modal.renderer.closeButton, this.modalElement = this._modal.renderer.modalElement, this.contentElement = this._modal.renderer.contentElement, this.modalElement.setAttribute("role", "dialog"), this.modalElement.setAttribute("aria-label", "Modal"), this.modalElement.setAttribute("tabindex", "-1"), this.closeButton.setAttribute("aria-label", "Close"), this._circularTab = new o(this.modalElement), this._onWillOpen = this._onWillOpen.bind(this), this._onOpen = this._onOpen.bind(this), this._onWillClose = this._onWillClose.bind(this), this._onClose = this._onClose.bind(this), this._bindEvents()
    }
    var r = t("@marcom/ac-modal-basic").Modal,
      s = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      o = t("@marcom/ac-accessibility/CircularTab"),
      a = n.prototype = Object.create(s.prototype);
    a.open = function() {
      this._modal.open(), this.opened = this._modal.opened
    }, a.close = function() {
      this._modal.close()
    }, a.appendContent = function(t) {
      this._modal.appendContent(t)
    }, a.removeContent = function(t) {
      this._modal.removeContent(t)
    }, a.destroy = function() {
      this._releaseEvents(), this._modal.destroy(), this._removeModalFocus(), this._circularTab.destroy(), this._focusObj = null;
      for (var t in this) this.hasOwnProperty(t) && (this[t] = null)
    }, a.addKeyToClose = function(t) {
      this._modal.addKeyToClose(t)
    }, a.removeKeyToClose = function(t) {
      this._modal.removeKeyToClose(t)
    }, a._render = function() {
      this._modal.render(), this._modal.renderer.modalElement.setAttribute("aria-hidden", "true")
    }, a._bindEvents = function() {
      this._modal.on("willopen", this._onWillOpen), this._modal.on("open", this._onOpen), this._modal.on("willclose", this._onWillClose), this._modal.on("close", this._onClose)
    }, a._releaseEvents = function() {
      this._modal.off("willopen", this._onWillOpen), this._modal.off("open", this._onOpen), this._modal.off("willclose", this._onWillClose), this._modal.off("close", this._onClose)
    }, a._onWillOpen = function() {
      this.trigger("willopen")
    }, a._onOpen = function() {
      this.opened = this._modal.opened, this._giveModalFocus(), this.trigger("open")
    }, a._onWillClose = function() {
      this.trigger("willclose"), this._removeModalFocus()
    }, a._onClose = function() {
      this.opened = this._modal.opened, this.trigger("close")
    }, a._giveModalFocus = function() {
      this.modalElement.removeAttribute("aria-hidden"), this._activeElement = document.activeElement, this.modalElement.focus(), this._circularTab.start()
    }, a._removeModalFocus = function() {
      this._circularTab.stop(), this.modalElement.setAttribute("aria-hidden", "true"), this._activeElement && (this._activeElement.focus(), this._activeElement = null)
    }, e.exports = n
  }, {
    "@marcom/ac-accessibility/CircularTab": 1,
    "@marcom/ac-event-emitter-micro": 116,
    "@marcom/ac-modal-basic": 148
  }],
  155: [function(t, e, i) {
    "use strict";

    function n(t) {
      var e = new r(o);
      return t && e.appendContent(t), e
    }
    var r = t("../Modal"),
      s = t("@marcom/ac-modal-basic").classNames,
      o = {
        retainScrollPosition: !0,
        renderer: {
          classNames: {
            documentElement: [s.documentElement].concat("has-modal-full-viewport"),
            modalElement: [s.modalElement].concat("modal-full-viewport")
          }
        }
      };
    e.exports = n
  }, {
    "../Modal": 154,
    "@marcom/ac-modal-basic": 148
  }],
  156: [function(t, e, i) {
    "use strict";

    function n(t) {
      var e = new r(l);
      t && e.appendContent(t);
      var i = document.createElement("div"),
        n = document.createElement("div"),
        s = document.createElement("div"),
        c = document.createElement("div");
      return a.add(i, "content-table"), a.add(n, "content-cell"), a.add(s, "content-wrapper"), a.add(c, "content-padding", "large-8", "medium-10"), e.modalElement.setAttribute(o.close, ""), s.setAttribute(o.close, ""), n.setAttribute(o.close, ""), i.appendChild(n), n.appendChild(s), s.appendChild(c), e.modalElement.appendChild(i), c.appendChild(e.contentElement), c.appendChild(e.closeButton), e
    }
    var r = t("../Modal"),
      s = t("@marcom/ac-modal-basic").classNames,
      o = t("@marcom/ac-modal-basic").dataAttributes,
      a = {
        add: t("@marcom/ac-classlist/add")
      },
      l = {
        renderer: {
          classNames: {
            documentElement: [s.documentElement].concat("has-modal-standard"),
            modalElement: [s.modalElement].concat("modal-standard")
          }
        }
      };
    e.exports = n
  }, {
    "../Modal": 154,
    "@marcom/ac-classlist/add": 13,
    "@marcom/ac-modal-basic": 148
  }],
  157: [function(t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    t("@marcom/ac-polyfills/Array/isArray");
    var r = t("./extend"),
      s = Object.prototype.hasOwnProperty,
      o = function a(t, e) {
        var i;
        for (i in e) s.call(e, i) && (null === e[i] ? t[i] = null : "object" === n(e[i]) ? (t[i] = Array.isArray(e[i]) ? [] : {}, a(t[i], e[i])) : t[i] = e[i]);
        return t
      };
    e.exports = function(t, e) {
      return e ? o({}, t) : r({}, t)
    }
  }, {
    "./extend": 160,
    "@marcom/ac-polyfills/Array/isArray": void 0
  }],
  158: [function(t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      r = function() {};
    e.exports = function(t) {
      if (arguments.length > 1) throw new Error("Second argument not supported");
      if (null === t || "object" !== ("undefined" == typeof t ? "undefined" : n(t))) throw new TypeError("Object prototype may only be an Object.");
      return "function" == typeof Object.create ? Object.create(t) : (r.prototype = t, new r)
    }
  }, {}],
  159: [function(t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      r = t("./extend");
    e.exports = function(t, e) {
      if ("object" !== ("undefined" == typeof t ? "undefined" : n(t))) throw new TypeError("defaults: must provide a defaults object");
      if (e = e || {}, "object" !== ("undefined" == typeof e ? "undefined" : n(e))) throw new TypeError("defaults: options must be a typeof object");
      return r({}, t, e)
    }
  }, {
    "./extend": 160
  }],
  160: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.forEach");
    var n = Object.prototype.hasOwnProperty;
    e.exports = function() {
      var t, e;
      return t = arguments.length < 2 ? [{}, arguments[0]] : [].slice.call(arguments), e = t.shift(), t.forEach(function(t) {
        if (null != t)
          for (var i in t) n.call(t, i) && (e[i] = t[i])
      }), e
    }
  }, {
    "@marcom/ac-polyfills/Array/prototype.forEach": void 0
  }],
  161: [function(t, e, i) {
    "use strict";
    e.exports = {
      PageVisibilityManager: t("./ac-page-visibility/PageVisibilityManager")
    }
  }, {
    "./ac-page-visibility/PageVisibilityManager": 162
  }],
  162: [function(t, e, i) {
    "use strict";

    function n() {
      if ("undefined" != typeof document.addEventListener) {
        var t;
        "undefined" != typeof document.hidden ? (this._hidden = "hidden", t = "visibilitychange") : "undefined" != typeof document.mozHidden ? (this._hidden = "mozHidden", t = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (this._hidden = "msHidden", t = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (this._hidden = "webkitHidden", t = "webkitvisibilitychange"), "undefined" == typeof document[this._hidden] ? this.isHidden = !1 : this.isHidden = document[this._hidden], t && document.addEventListener(t, this._handleVisibilityChange.bind(this), !1), s.call(this)
      }
    }
    var r = t("@marcom/ac-object/create"),
      s = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      o = n.prototype = r(s.prototype);
    o.CHANGED = "changed", o._handleVisibilityChange = function(t) {
      this.isHidden = document[this._hidden], this.trigger(this.CHANGED, {
        isHidden: this.isHidden
      })
    }, e.exports = new n
  }, {
    "@marcom/ac-event-emitter-micro": 116,
    "@marcom/ac-object/create": 158
  }],
  163: [function(t, e, i) {
    "use strict";
    e.exports = {
      PointerTracker: t("./ac-pointer-tracker/PointerTracker")
    }
  }, {
    "./ac-pointer-tracker/PointerTracker": 164
  }],
  164: [function(t, e, i) {
    "use strict";

    function n(t, e, i) {
      this._el = t, i = i || {}, this._lockVertical = i.lockVertical !== !1, this._swipeThreshold = i.swipeThreshold || n.DEFAULT_SWIPE_THRESHOLD, this._pointerEvents = e || {}, this._trackHover = i.trackHover, this._trackHover ? (this._pointerEvents.down = this._pointerEvents.down || n.MOUSE_EVENTS.over, this._pointerEvents.up = this._pointerEvents.up || n.MOUSE_EVENTS.out) : (this._pointerEvents.down = this._pointerEvents.down || (a ? n.TOUCH_EVENTS.down : n.MOUSE_EVENTS.down), this._pointerEvents.up = this._pointerEvents.up || (a ? n.TOUCH_EVENTS.up : n.MOUSE_EVENTS.up)), this._pointerEvents.out = this._pointerEvents.out || (a ? n.TOUCH_EVENTS.out : n.MOUSE_EVENTS.out), this._pointerEvents.move = this._pointerEvents.move || (a ? n.TOUCH_EVENTS.move : n.MOUSE_EVENTS.move), this._onMouseDown = this._onMouseDown.bind(this), this._onMouseUp = this._onMouseUp.bind(this), this._onMouseOut = this._onMouseOut.bind(this), this._onMouseMove = this._onMouseMove.bind(this), l.call(this), this._el.addEventListener(this._pointerEvents.down, this._onMouseDown, o), this._setCursorStyle("grab")
    }
    var r = t("@marcom/useragent-detect"),
      s = r.os.android,
      o = !r.browser.ie && {
        passive: !1
      },
      a = t("@marcom/ac-feature/touchAvailable")(),
      l = t("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    n.START = "start", n.END = "end", n.UPDATE = "update", n.SWIPE_RIGHT = "swiperight", n.SWIPE_LEFT = "swipeleft", n.DEFAULT_SWIPE_THRESHOLD = s ? 2 : 8, n.TOUCH_EVENTS = {
      down: "touchstart",
      up: "touchend",
      out: "mouseout",
      move: "touchmove"
    }, n.MOUSE_EVENTS = {
      down: "mousedown",
      up: "mouseup",
      out: "mouseout",
      move: "mousemove",
      over: "mouseover"
    };
    var c = l.prototype,
      u = n.prototype = Object.create(c);
    u.destroy = function() {
      return this._isDragging && this._onMouseUp(), this._el.removeEventListener(this._pointerEvents.down, this._onMouseDown), this._setCursorStyle(null), this._el = null, this._pointerEvents = null, this._lockVertical = null, this._swipeThreshold = null, this._checkForTouchScrollY = null, this._isDragging = null, this._currentX = null, this._currentY = null, this._velocityX = null, this._velocityY = null, this._lastX = null, this._lastY = null, c.destroy.call(this)
    }, u._onMouseDown = function(t) {
      if (!this._isDragging) {
        this._isDragging = !0, this._setCursorStyle("grabbing"), this._el.removeEventListener(this._pointerEvents.down, this._onMouseDown), document.body.addEventListener(this._pointerEvents.up, this._onMouseUp, o), document.addEventListener(this._pointerEvents.out, this._onMouseOut, o), document.body.addEventListener(this._pointerEvents.move, this._onMouseMove, o), this._checkForTouchScrollY = this._lockVertical && !(!t.touches || !t.touches[0]), this._checkForTouchScrollY && (this._lastY = this._getTouchY(t));
        var e = this._storeAndGetValues(t);
        this._velocityX = e.diffX = 0, this._velocityY = e.diffY = 0, this.trigger(n.START, e)
      }
    }, u._onMouseUp = function(t) {
      if (this._isDragging) {
        this._isDragging = !1, this._setCursorStyle("grab"), this._el.addEventListener(this._pointerEvents.down, this._onMouseDown, o), document.body.removeEventListener(this._pointerEvents.up, this._onMouseUp), document.removeEventListener(this._pointerEvents.out, this._onMouseOut), document.body.removeEventListener(this._pointerEvents.move, this._onMouseMove);
        var e;
        this._checkForTouchScrollY || this._trackHover ? e = null : this._velocityX > this._swipeThreshold ? e = n.SWIPE_LEFT : this._velocityX * -1 > this._swipeThreshold && (e = n.SWIPE_RIGHT);
        var i = this._storeAndGetValues(t);
        i.swipe = e, this.trigger(n.END, i), e && !this._trackHover && this.trigger(e, i)
      }
    }, u._onMouseOut = function(t) {
      t = t ? t : window.event;
      var e = t.relatedTarget || t.toElement;
      e && "HTML" !== e.nodeName || this._onMouseUp(t)
    }, u._onMouseMove = function(t) {
      return this._checkForTouchScrollY && this._isVerticalTouchMove(t) ? void this._onMouseUp(t) : (t.preventDefault(), void this.trigger(n.UPDATE, this._storeAndGetValues(t)))
    }, u._storeAndGetValues = function(t) {
      if (void 0 === t) return {};
      this._currentX = this._getPointerX(t), this._currentY = this._getPointerY(t), this._velocityX = this._lastX - this._currentX, this._velocityY = this._lastY - this._currentY;
      var e = {
        x: this._currentX,
        y: this._currentY,
        lastX: this._lastX,
        lastY: this._lastY,
        diffX: this._velocityX,
        diffY: this._velocityY,
        interactionEvent: t
      };
      return this._lastX = this._currentX, this._lastY = this._currentY, e
    }, u._getPointerX = function(t) {
      return t.pageX ? t.pageX : t.touches && t.touches[0] ? t.touches[0].pageX : t.clientX ? t.clientX : 0
    }, u._getPointerY = function(t) {
      return t.pageY ? t.pageY : t.touches && t.touches[0] ? t.touches[0].pageY : t.clientY ? t.clientY : 0
    }, u._getTouchX = function(t) {
      return t.touches && t.touches[0] ? t.touches[0].pageX : 0
    }, u._getTouchY = function(t) {
      return t.touches && t.touches[0] ? t.touches[0].pageY : 0
    }, u._isVerticalTouchMove = function(t) {
      var e = this._getTouchX(t),
        i = this._getTouchY(t),
        n = Math.abs(e - this._lastX),
        r = Math.abs(i - this._lastY);
      return this._checkForTouchScrollY = n < r, this._checkForTouchScrollY
    }, u._setCursorStyle = function(t) {
      this._el.style.cursor = t
    }, e.exports = n
  }, {
    "@marcom/ac-event-emitter-micro": 116,
    "@marcom/ac-feature/touchAvailable": 120,
    "@marcom/useragent-detect": 242
  }],
  165: [function(t, e, i) {
    "use strict";
    var n = t("./utils/eventTypeAvailable"),
      r = t("./shared/camelCasedEventTypes"),
      s = t("./shared/windowFallbackEventTypes"),
      o = t("./shared/prefixHelper"),
      a = {};
    e.exports = function l(t, e) {
      var i, c, u;
      if (e = e || "div", t = t.toLowerCase(), e in a || (a[e] = {}), c = a[e], t in c) return c[t];
      if (n(t, e)) return c[t] = t;
      if (t in r)
        for (u = 0; u < r[t].length; u++)
          if (i = r[t][u], n(i.toLowerCase(), e)) return c[t] = i;
      for (u = 0; u < o.evt.length; u++)
        if (i = o.evt[u] + t, n(i, e)) return o.reduce(u), c[t] = i;
      return "window" !== e && s.indexOf(t) ? c[t] = l(t, "window") : c[t] = !1
    }
  }, {
    "./shared/camelCasedEventTypes": 169,
    "./shared/prefixHelper": 171,
    "./shared/windowFallbackEventTypes": 174,
    "./utils/eventTypeAvailable": 176
  }],
  166: [function(t, e, i) {
    "use strict";
    var n = t("./shared/stylePropertyCache"),
      r = t("./getStyleProperty"),
      s = t("./getStyleValue");
    e.exports = function(t, e) {
      var i;
      if (t = r(t), !t) return !1;
      if (i = n[t].css, "undefined" != typeof e) {
        if (e = s(t, e), e === !1) return !1;
        i += ":" + e + ";"
      }
      return i
    }
  }, {
    "./getStyleProperty": 167,
    "./getStyleValue": 168,
    "./shared/stylePropertyCache": 172
  }],
  167: [function(t, e, i) {
    "use strict";
    var n = t("./shared/stylePropertyCache"),
      r = t("./shared/getStyleTestElement"),
      s = t("./utils/toCSS"),
      o = t("./utils/toDOM"),
      a = t("./shared/prefixHelper"),
      l = function(t, e) {
        var i = s(t),
          r = e !== !1 && s(e);
        return n[t] = n[e] = n[i] = n[r] = {
          dom: e,
          css: r
        }, e
      };
    e.exports = function(t) {
      var e, i, s, c;
      if (t += "", t in n) return n[t].dom;
      for (s = r(), t = o(t), i = t.charAt(0).toUpperCase() + t.substring(1), e = "filter" === t ? ["WebkitFilter", "filter"] : (t + " " + a.dom.join(i + " ") + i).split(" "), c = 0; c < e.length; c++)
        if ("undefined" != typeof s.style[e[c]]) return 0 !== c && a.reduce(c - 1), l(t, e[c]);
      return l(t, !1)
    }
  }, {
    "./shared/getStyleTestElement": 170,
    "./shared/prefixHelper": 171,
    "./shared/stylePropertyCache": 172,
    "./utils/toCSS": 177,
    "./utils/toDOM": 178
  }],
  168: [function(t, e, i) {
    "use strict";
    var n = t("./getStyleProperty"),
      r = t("./shared/styleValueAvailable"),
      s = t("./shared/prefixHelper"),
      o = t("./shared/stylePropertyCache"),
      a = {},
      l = /(\([^\)]+\))/gi,
      c = /([^ ,;\(]+(\([^\)]+\))?)/gi;
    e.exports = function(t, e) {
      var i;
      return e += "", !!(t = n(t)) && (r(t, e) ? e : (i = o[t].css, e = e.replace(c, function(e) {
        var n, o, c, u;
        if ("#" === e[0] || !isNaN(e[0])) return e;
        if (o = e.replace(l, ""), c = i + ":" + o, c in a) return a[c] === !1 ? "" : e.replace(o, a[c]);
        for (n = s.css.map(function(t) {
            return t + e
          }), n = [e].concat(n), u = 0; u < n.length; u++)
          if (r(t, n[u])) return 0 !== u && s.reduce(u - 1), a[c] = n[u].replace(l, ""), n[u];
        return a[c] = !1, ""
      }), e = e.trim(), "" !== e && e))
    }
  }, {
    "./getStyleProperty": 167,
    "./shared/prefixHelper": 171,
    "./shared/stylePropertyCache": 172,
    "./shared/styleValueAvailable": 173
  }],
  169: [function(t, e, i) {
    "use strict";
    e.exports = {
      transitionend: ["webkitTransitionEnd", "MSTransitionEnd"],
      animationstart: ["webkitAnimationStart", "MSAnimationStart"],
      animationend: ["webkitAnimationEnd", "MSAnimationEnd"],
      animationiteration: ["webkitAnimationIteration", "MSAnimationIteration"],
      fullscreenchange: ["MSFullscreenChange"],
      fullscreenerror: ["MSFullscreenError"]
    }
  }, {}],
  170: [function(t, e, i) {
    "use strict";
    var n;
    e.exports = function() {
      return n ? (n.style.cssText = "", n.removeAttribute("style")) : n = document.createElement("_"), n
    }, e.exports.resetElement = function() {
      n = null
    }
  }, {}],
  171: [function(t, e, i) {
    "use strict";
    var n = ["-webkit-", "-moz-", "-ms-"],
      r = ["Webkit", "Moz", "ms"],
      s = ["webkit", "moz", "ms"],
      o = function() {
        this.initialize()
      },
      a = o.prototype;
    a.initialize = function() {
      this.reduced = !1, this.css = n, this.dom = r, this.evt = s
    }, a.reduce = function(t) {
      this.reduced || (this.reduced = !0, this.css = [this.css[t]], this.dom = [this.dom[t]], this.evt = [this.evt[t]])
    }, e.exports = new o
  }, {}],
  172: [function(t, e, i) {
    "use strict";
    e.exports = {}
  }, {}],
  173: [function(t, e, i) {
    "use strict";
    var n, r, s = t("./stylePropertyCache"),
      o = t("./getStyleTestElement"),
      a = !1,
      l = function() {
        var t;
        if (!a) {
          a = !0, n = "CSS" in window && "supports" in window.CSS, r = !1, t = o();
          try {
            t.style.width = "invalid"
          } catch (e) {
            r = !0
          }
        }
      };
    e.exports = function(t, e) {
      var i, a;
      if (l(), n) return t = s[t].css, CSS.supports(t, e);
      if (a = o(), i = a.style[t], r) try {
        a.style[t] = e
      } catch (c) {
        return !1
      } else a.style[t] = e;
      return a.style[t] && a.style[t] !== i
    }, e.exports.resetFlags = function() {
      a = !1
    }
  }, {
    "./getStyleTestElement": 170,
    "./stylePropertyCache": 172
  }],
  174: [function(t, e, i) {
    "use strict";
    e.exports = ["transitionend", "animationstart", "animationend", "animationiteration"]
  }, {}],
  175: [function(t, e, i) {
    "use strict";
    var n = /(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
    e.exports = function(t) {
      return t = String.prototype.replace.call(t, n, ""), t.charAt(0).toLowerCase() + t.substring(1)
    }
  }, {}],
  176: [function(t, e, i) {
    "use strict";
    var n = {
      window: window,
      document: document
    };
    e.exports = function(t, e) {
      var i;
      return t = "on" + t, e in n || (n[e] = document.createElement(e)), i = n[e], t in i || "setAttribute" in i && (i.setAttribute(t, "return;"), "function" == typeof i[t])
    }
  }, {}],
  177: [function(t, e, i) {
    "use strict";
    var n = /^(webkit|moz|ms)/gi;
    e.exports = function(t) {
      return "cssfloat" === t.toLowerCase() ? "float" : (n.test(t) && (t = "-" + t), t.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase())
    }
  }, {}],
  178: [function(t, e, i) {
    "use strict";
    var n = /-([a-z])/g;
    e.exports = function(t) {
      return "float" === t.toLowerCase() ? "cssFloat" : (t = t.replace(n, function(t, e) {
        return e.toUpperCase()
      }), "Ms" === t.substr(0, 2) && (t = "ms" + t.substring(2)), t)
    }
  }, {}],
  179: [function(t, e, i) {
    "use strict";
    e.exports = {
      majorVersionNumber: "3.x"
    }
  }, {}],
  180: [function(t, e, i) {
    "use strict";

    function n(t) {
      t = t || {}, s.call(this), this.id = a.getNewID(), this.executor = t.executor || o, this._reset(), this._willRun = !1, this._didDestroy = !1
    }
    var r, s = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      o = t("./sharedRAFExecutorInstance"),
      a = t("./sharedRAFEmitterIDGeneratorInstance");
    r = n.prototype = Object.create(s.prototype), r.run = function() {
      return this._willRun || (this._willRun = !0), this._subscribe()
    }, r.cancel = function() {
      this._unsubscribe(), this._willRun && (this._willRun = !1), this._reset()
    }, r.destroy = function() {
      var t = this.willRun();
      return this.cancel(), this.executor = null, s.prototype.destroy.call(this), this._didDestroy = !0, t
    }, r.willRun = function() {
      return this._willRun
    }, r.isRunning = function() {
      return this._isRunning
    }, r._subscribe = function() {
      return this.executor.subscribe(this)
    }, r._unsubscribe = function() {
      return this.executor.unsubscribe(this)
    }, r._onAnimationFrameStart = function(t) {
      this._isRunning = !0, this._willRun = !1, this._didEmitFrameData || (this._didEmitFrameData = !0, this.trigger("start", t))
    }, r._onAnimationFrameEnd = function(t) {
      this._willRun || (this.trigger("stop", t), this._reset())
    }, r._reset = function() {
      this._didEmitFrameData = !1, this._isRunning = !1
    }, e.exports = n
  }, {
    "./sharedRAFEmitterIDGeneratorInstance": 188,
    "./sharedRAFExecutorInstance": 189,
    "@marcom/ac-event-emitter-micro": 116
  }],
  181: [function(t, e, i) {
    "use strict";

    function n(t) {
      t = t || {}, this._reset(), this.updatePhases(), this.eventEmitter = new s, this._willRun = !1, this._totalSubscribeCount = -1, this._requestAnimationFrame = window.requestAnimationFrame, this._cancelAnimationFrame = window.cancelAnimationFrame, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
    }
    var r, s = t("@marcom/ac-event-emitter-micro/EventEmitterMicro");
    r = n.prototype, r.frameRequestedPhase = "requested", r.startPhase = "start", r.runPhases = ["update", "external", "draw"], r.endPhase = "end", r.disabledPhase = "disabled", r.beforePhaseEventPrefix = "before:", r.afterPhaseEventPrefix = "after:", r.subscribe = function(t, e) {
      return this._totalSubscribeCount++, this._nextFrameSubscribers[t.id] || (e ? this._nextFrameSubscribersOrder.unshift(t.id) : this._nextFrameSubscribersOrder.push(t.id), this._nextFrameSubscribers[t.id] = t, this._nextFrameSubscriberArrayLength++, this._nextFrameSubscriberCount++, this._run()), this._totalSubscribeCount
    }, r.subscribeImmediate = function(t, e) {
      return this._totalSubscribeCount++, this._subscribers[t.id] || (e ? this._subscribersOrder.splice(this._currentSubscriberIndex + 1, 0, t.id) : this._subscribersOrder.unshift(t.id), this._subscribers[t.id] = t, this._subscriberArrayLength++, this._subscriberCount++), this._totalSubscribeCount
    }, r.unsubscribe = function(t) {
      return !!this._nextFrameSubscribers[t.id] && (this._nextFrameSubscribers[t.id] = null, this._nextFrameSubscriberCount--, 0 === this._nextFrameSubscriberCount && this._cancel(), !0)
    }, r.getSubscribeID = function() {
      return this._totalSubscribeCount += 1
    }, r.destroy = function() {
      var t = this._cancel();
      return this.eventEmitter.destroy(), this.eventEmitter = null, this.phases = null, this._subscribers = null, this._subscribersOrder = null, this._nextFrameSubscribers = null, this._nextFrameSubscribersOrder = null, this._rafData = null, this._boundOnAnimationFrame = null, this._onExternalAnimationFrame = null, t
    }, r.useExternalAnimationFrame = function(t) {
      if ("boolean" == typeof t) {
        var e = this._isUsingExternalAnimationFrame;
        return t && this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), !this._willRun || t || this._animationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this._isUsingExternalAnimationFrame = t, t ? this._boundOnExternalAnimationFrame : e || !1
      }
    }, r.updatePhases = function() {
      this.phases || (this.phases = []), this.phases.length = 0, this.phases.push(this.frameRequestedPhase), this.phases.push(this.startPhase), Array.prototype.push.apply(this.phases, this.runPhases), this.phases.push(this.endPhase), this._runPhasesLength = this.runPhases.length, this._phasesLength = this.phases.length
    }, r._run = function() {
      if (!this._willRun) return this._willRun = !0, 0 === this.lastFrameTime && (this.lastFrameTime = performance.now()), this._animationFrameActive = !0, this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this.phase === this.disabledPhase && (this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex]), !0
    }, r._cancel = function() {
      var t = !1;
      return this._animationFrameActive && (this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), this._animationFrameActive = !1, this._willRun = !1, t = !0), this._isRunning || this._reset(), t
    }, r._onAnimationFrame = function(t) {
      for (this._subscribers = this._nextFrameSubscribers, this._subscribersOrder = this._nextFrameSubscribersOrder, this._subscriberArrayLength = this._nextFrameSubscriberArrayLength, this._subscriberCount = this._nextFrameSubscriberCount, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex], this._isRunning = !0, this._willRun = !1, this._didRequestNextRAF = !1, this._rafData.delta = t - this.lastFrameTime, this.lastFrameTime = t, this._rafData.fps = 0, this._rafData.delta >= 1e3 && (this._rafData.delta = 0), 0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta), this._rafData.time = t, this._rafData.naturalFps = this._rafData.fps, this._rafData.timeNow = Date.now(), this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameStart(this._rafData);
      for (this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._runPhaseIndex = 0; this._runPhaseIndex < this._runPhasesLength; this._runPhaseIndex++) {
        for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]].trigger(this.phase, this._rafData);
        this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase)
      }
      for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameEnd(this._rafData);
      this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._willRun ? (this.phaseIndex = 0, this.phaseIndex = this.phases[this.phaseIndex]) : this._reset()
    }, r._onExternalAnimationFrame = function(t) {
      this._isUsingExternalAnimationFrame && this._onAnimationFrame(t)
    }, r._reset = function() {
      this._rafData || (this._rafData = {}), this._rafData.time = 0, this._rafData.delta = 0, this._rafData.fps = 0, this._rafData.naturalFps = 0, this._rafData.timeNow = 0, this._subscribers = {}, this._subscribersOrder = [], this._currentSubscriberIndex = -1, this._subscriberArrayLength = 0, this._subscriberCount = 0, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._didEmitFrameData = !1, this._animationFrame = null, this._animationFrameActive = !1, this._isRunning = !1, this._shouldReset = !1, this.lastFrameTime = 0, this._runPhaseIndex = -1, this.phaseIndex = -1, this.phase = this.disabledPhase
    }, e.exports = n
  }, {
    "@marcom/ac-event-emitter-micro/EventEmitterMicro": 117
  }],
  182: [function(t, e, i) {
    "use strict";
    var n = t("./SingleCallRAFEmitter"),
      r = function(t) {
        this.phase = t, this.rafEmitter = new n, this._cachePhaseIndex(), this.requestAnimationFrame = this.requestAnimationFrame.bind(this), this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this), this._onBeforeRAFExecutorStart = this._onBeforeRAFExecutorStart.bind(this), this._onBeforeRAFExecutorPhase = this._onBeforeRAFExecutorPhase.bind(this), this._onAfterRAFExecutorPhase = this._onAfterRAFExecutorPhase.bind(this), this.rafEmitter.on(this.phase, this._onRAFExecuted.bind(this)), this.rafEmitter.executor.eventEmitter.on("before:start", this._onBeforeRAFExecutorStart), this.rafEmitter.executor.eventEmitter.on("before:" + this.phase, this._onBeforeRAFExecutorPhase), this.rafEmitter.executor.eventEmitter.on("after:" + this.phase, this._onAfterRAFExecutorPhase), this._frameCallbacks = [], this._currentFrameCallbacks = [], this._nextFrameCallbacks = [], this._phaseActive = !1, this._currentFrameID = -1, this._cancelFrameIdx = -1, this._frameCallbackLength = 0, this._currentFrameCallbacksLength = 0, this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0
      },
      s = r.prototype;
    s.requestAnimationFrame = function(t, e) {
      return e === !0 && this.rafEmitter.executor.phaseIndex > 0 && this.rafEmitter.executor.phaseIndex <= this.phaseIndex ? this._phaseActive ? (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !0), this._frameCallbacks.push(this._currentFrameID, t), this._frameCallbackLength += 2) : (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !1), this._currentFrameCallbacks.push(this._currentFrameID, t), this._currentFrameCallbacksLength += 2) : (this._currentFrameID = this.rafEmitter.run(), this._nextFrameCallbacks.push(this._currentFrameID, t), this._nextFrameCallbacksLength += 2), this._currentFrameID
    }, s.cancelAnimationFrame = function(t) {
      this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(t), this._cancelFrameIdx > -1 ? this._cancelNextAnimationFrame() : (this._cancelFrameIdx = this._currentFrameCallbacks.indexOf(t), this._cancelFrameIdx > -1 ? this._cancelCurrentAnimationFrame() : (this._cancelFrameIdx = this._frameCallbacks.indexOf(t), this._cancelFrameIdx > -1 && this._cancelRunningAnimationFrame()))
    }, s._onRAFExecuted = function(t) {
      for (this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) this._frameCallbacks[this._frameCallbackIteration + 1](t.time, t);
      this._frameCallbacks.length = 0, this._frameCallbackLength = 0
    }, s._onBeforeRAFExecutorStart = function() {
      Array.prototype.push.apply(this._currentFrameCallbacks, this._nextFrameCallbacks.splice(0, this._nextFrameCallbacksLength)), this._currentFrameCallbacksLength = this._nextFrameCallbacksLength, this._nextFrameCallbacks.length = 0, this._nextFrameCallbacksLength = 0
    }, s._onBeforeRAFExecutorPhase = function() {
      this._phaseActive = !0, Array.prototype.push.apply(this._frameCallbacks, this._currentFrameCallbacks.splice(0, this._currentFrameCallbacksLength)), this._frameCallbackLength = this._currentFrameCallbacksLength, this._currentFrameCallbacks.length = 0, this._currentFrameCallbacksLength = 0
    }, s._onAfterRAFExecutorPhase = function() {
      this._phaseActive = !1
    }, s._cachePhaseIndex = function() {
      this.phaseIndex = this.rafEmitter.executor.phases.indexOf(this.phase)
    }, s._cancelRunningAnimationFrame = function() {
      this._frameCallbacks.splice(this._cancelFrameIdx, 2), this._frameCallbackLength -= 2
    }, s._cancelCurrentAnimationFrame = function() {
      this._currentFrameCallbacks.splice(this._cancelFrameIdx, 2), this._currentFrameCallbacksLength -= 2
    }, s._cancelNextAnimationFrame = function() {
      this._nextFrameCallbacks.splice(this._cancelFrameIdx, 2), this._nextFrameCallbacksLength -= 2, 0 === this._nextFrameCallbacksLength && this.rafEmitter.cancel()
    }, e.exports = r
  }, {
    "./SingleCallRAFEmitter": 184
  }],
  183: [function(t, e, i) {
    "use strict";
    var n = t("./RAFInterface"),
      r = function() {
        this.events = {}
      },
      s = r.prototype;
    s.requestAnimationFrame = function(t) {
      return this.events[t] || (this.events[t] = new n(t)), this.events[t].requestAnimationFrame
    }, s.cancelAnimationFrame = function(t) {
      return this.events[t] || (this.events[t] = new n(t)), this.events[t].cancelAnimationFrame
    }, e.exports = new r
  }, {
    "./RAFInterface": 182
  }],
  184: [function(t, e, i) {
    "use strict";
    var n = t("./RAFEmitter"),
      r = function(t) {
        n.call(this, t)
      },
      s = r.prototype = Object.create(n.prototype);
    s._subscribe = function() {
      return this.executor.subscribe(this, !0)
    }, e.exports = r
  }, {
    "./RAFEmitter": 180
  }],
  185: [function(t, e, i) {
    "use strict";
    var n = t("./RAFInterfaceController");
    e.exports = n.cancelAnimationFrame("update")
  }, {
    "./RAFInterfaceController": 183
  }],
  186: [function(t, e, i) {
    "use strict";
    var n = t("./RAFInterfaceController");
    e.exports = n.requestAnimationFrame("draw")
  }, {
    "./RAFInterfaceController": 183
  }],
  187: [function(t, e, i) {
    "use strict";
    var n = t("./RAFInterfaceController");
    e.exports = n.requestAnimationFrame("external")
  }, {
    "./RAFInterfaceController": 183
  }],
  188: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-shared-instance").SharedInstance,
      r = t("../.release-info.js").majorVersionNumber,
      s = function() {
        this._currentID = 0
      };
    s.prototype.getNewID = function() {
      return this._currentID++, "raf:" + this._currentID
    }, e.exports = n.share("@marcom/ac-raf-emitter/sharedRAFEmitterIDGeneratorInstance", r, s)
  }, {
    "../.release-info.js": 179,
    "@marcom/ac-shared-instance": 196
  }],
  189: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-shared-instance").SharedInstance,
      r = t("../.release-info.js").majorVersionNumber,
      s = t("./RAFExecutor");
    e.exports = n.share("@marcom/ac-raf-emitter/sharedRAFExecutorInstance", r, s)
  }, {
    "../.release-info.js": 179,
    "./RAFExecutor": 181,
    "@marcom/ac-shared-instance": 196
  }],
  190: [function(t, e, i) {
    "use strict";
    var n = t("./RAFInterfaceController");
    e.exports = n.requestAnimationFrame("update")
  }, {
    "./RAFInterfaceController": 183
  }],
  191: [function(t, e, i) {
    arguments[4][91][0].apply(i, arguments)
  }, {
    "./utils/getBoundingClientRect": 193,
    dup: 91
  }],
  192: [function(t, e, i) {
    "use strict";
    var n = t("./getDimensions"),
      r = t("./utils/getBoundingClientRect");
    e.exports = function(t, e) {
      var i, s, o;
      return e ? (i = r(t), t.offsetParent && (s = r(t.offsetParent), i.top -= s.top, i.left -= s.left)) : (o = n(t, e), i = {
        top: t.offsetTop,
        left: t.offsetLeft,
        width: o.width,
        height: o.height
      }), {
        top: i.top,
        right: i.left + i.width,
        bottom: i.top + i.height,
        left: i.left
      }
    }
  }, {
    "./getDimensions": 191,
    "./utils/getBoundingClientRect": 193
  }],
  193: [function(t, e, i) {
    arguments[4][92][0].apply(i, arguments)
  }, {
    dup: 92
  }],
  194: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this.el = t, this._options = e || {}, this._wrapper = this.el.querySelector(this._options.itemsSelector), this._items = Array.prototype.slice.call(this.el.querySelectorAll(this._options.itemSelector)), this.lastCenteredItem = this._items[0], this._isRightToLeft = "rtl" === window.getComputedStyle(t).direction, this._inlineStart = this._isRightToLeft ? "right" : "left", this._inlineEnd = this._isRightToLeft ? "left" : "right", this._scrollType = this._scrollDirection(), this._usePaddles = void 0 === this._options.usePaddles ? a() : this._options.usePaddles, this.centerItem = this.centerItem.bind(this), this._onScrollClipUpdate = this._onScrollClipUpdate.bind(this), this._init()
    }
    var r = t("@marcom/ac-dom-metrics/getDimensions"),
      s = t("@marcom/ac-dom-metrics/getPosition"),
      o = t("@marcom/ac-clip").Clip,
      a = t("@marcom/ac-feature/touchAvailable"),
      l = n.prototype;
    l._init = function() {
      this._usePaddles && this._setupPaddles()
    }, l.centerItem = function(t, e) {
      this.lastCenteredItem = t;
      var i = r(this.el).width,
        n = .5 * i,
        o = s(t).left,
        a = r(t).width,
        l = o + .5 * a,
        c = Math.round(l - n);
      return e ? void(this.el.scrollLeft = this._setNormalizedScroll(c)) : (this._destroyCurrentClip(), this._isRightToLeft && (c *= -1), void this._smoothScrollTo(c))
    }, l._getPaddles = function() {
      var t = this._isRightToLeft ? this._options.rightPaddleSelector : this._options.leftPaddleSelector,
        e = this._isRightToLeft ? this._options.leftPaddleSelector : this._options.rightPaddleSelector;
      return {
        start: this.el.querySelector(t),
        end: this.el.querySelector(e)
      }
    }, l._setupPaddles = function() {
      this.el.classList.add("with-paddles"), this._paddles = this._getPaddles(), this._children = this._wrapper.children, this._childCount = this._wrapper.children.length, this._onScrollClipComplete = this._onScrollClipComplete.bind(this), this._onPaddleStartClick = this._onPaddleStartClick.bind(this), this._paddles.start.addEventListener("click", this._onPaddleStartClick), this._onPaddleEndClick = this._onPaddleEndClick.bind(this), this._paddles.end.addEventListener("click", this._onPaddleEndClick), this._onScroll = this._onScroll.bind(this), this._wrapper.addEventListener("scroll", this._onScroll), this._updateElementMetrics = this._updateElementMetrics.bind(this), window.addEventListener("resize", this._updateElementMetrics), window.addEventListener("orientationchange", this._updateElementMetrics), this._updateElementMetrics()
    }, l._updateElementMetrics = function() {
      this._wrapperWidth = this._wrapper.offsetWidth, this._contentWidth = this._wrapper.scrollWidth, this._contentWidth <= this._wrapperWidth && (this._destroyCurrentClip(), 0 !== this._wrapper.scrollLeft && (this._wrapper.scrollLeft = 0)), this._scrollStart = this._wrapper.scrollLeft, this._usePaddles && (this._paddleWidth = this._paddles.start.offsetWidth, this._updatePaddleDisplay())
    }, l._onScroll = function() {
      this._lockPaddles || (this._scrollStart = this._wrapper.scrollLeft, this._updatePaddleDisplay())
    }, l._updatePaddleDisplay = function() {
      var t = this._getNormalizedScroll(this._scrollStart) + this._wrapperWidth,
        e = 1;
      this._paddles.start.disabled = this._getNormalizedScroll(this._scrollStart) <= e, this._paddles.end.disabled = t >= this._contentWidth - e
    }, l._onPaddleStartClick = function(t) {
      this._smoothScrollTo(this._getPaddleStartScrollDestination())
    }, l._getPaddleStartScrollDestination = function() {
      var t, e, i = this._getNormalizedScroll(this._scrollStart);
      for (e = this._childCount - 1; e > 0; e--)
        if (t = this._normalizePosition(s(this._children[e])), t[this._inlineStart] < i) return t[this._inlineEnd] - this._wrapperWidth;
      return 0
    }, l._onPaddleEndClick = function(t) {
      this._smoothScrollTo(this._getPaddleEndScrollDestination())
    }, l._getPaddleEndScrollDestination = function() {
      var t, e, i = this._getNormalizedScroll(this._scrollStart) + this._wrapperWidth;
      for (e = 0; e < this._childCount; e++)
        if (t = this._normalizePosition(s(this._children[e])), t[this._inlineEnd] > i) return t[this._inlineStart];
      return this._contentWidth
    }, l._getBoundedScrollX = function(t) {
      var e = this._contentWidth - this._wrapperWidth;
      return Math.max(Math.min(t, e), 0)
    }, l._smoothScrollTo = function(t) {
      if (this._updateElementMetrics(), !this._lockPaddles && t !== this._scrollStart) {
        var e = {
            scrollLeft: this._wrapper.scrollLeft
          },
          i = {
            scrollLeft: this._setNormalizedScroll(t)
          },
          n = {
            ease: this._options.scrollEasing,
            onUpdate: this._onScrollClipUpdate
          };
        this._usePaddles && (this._lockPaddles = !0, n.onComplete = this._onScrollClipComplete), this._clip = o.to(e, this._options.scrollDuration, i, n)
      }
    }, l._onScrollClipUpdate = function(t) {
      this._scrollStart = this._wrapper.scrollLeft = Math.round(t.target().scrollLeft)
    }, l._onScrollClipComplete = function() {
      this._updatePaddleDisplay(), this._lockPaddles = !1
    }, l._scrollDirection = function() {
      var t = "reverse",
        e = document.createElement("div");
      return e.style.cssText = "width:2px; height:1px; position:absolute; top:-1000px; overflow:scroll; font-size: 14px;", e.style.direction = "rtl", e.innerHTML = "test", document.body.appendChild(e), e.scrollLeft > 0 ? t = "default" : (e.scrollLeft = 1, 0 === e.scrollLeft && (t = "negative")), document.body.removeChild(e), t
    }, l._getNormalizedScroll = function(t) {
      if (!this._isRightToLeft) return t;
      var e = Math.abs(t);
      return "default" === this._scrollType && (e = this._contentWidth - this._wrapperWidth - e), e
    }, l._setNormalizedScroll = function(t) {
      var e = this._getBoundedScrollX(t);
      return this._isRightToLeft && "reverse" !== this._scrollType ? "negative" === this._scrollType ? -e : -(e - this._contentWidth + this._wrapperWidth) : e
    }, l._normalizePosition = function(t) {
      return this._isRightToLeft ? {
        top: t.top,
        right: this._wrapperWidth - t.right + this._paddleWidth,
        bottom: t.bottom,
        left: this._wrapperWidth - t.left + this._paddleWidth
      } : {
        top: t.top,
        right: t.right - this._paddleWidth,
        bottom: t.bottom,
        left: t.left - this._paddleWidth
      }
    }, l._destroyCurrentClip = function() {
      this._clip && this._clip.playing() && (this._clip.destroy(), this._lockPaddles = !1)
    }, l._destroyPaddles = function() {
      this._paddles.start.removeEventListener("click", this._onPaddleStartClick), this._paddles.end.removeEventListener("click", this._onPaddleEndClick), this._wrapper.removeEventListener("scroll", this._onScroll), this._paddles = null
    }, l.destroy = function() {
      this._items = null, this._destroyCurrentClip(), this._destroyPaddles(), window.removeEventListener("resize", this._updateElementMetrics), window.removeEventListener("orientationchange", this._updateElementMetrics)
    }, e.exports = n
  }, {
    "@marcom/ac-clip": 21,
    "@marcom/ac-dom-metrics/getDimensions": 191,
    "@marcom/ac-dom-metrics/getPosition": 192,
    "@marcom/ac-feature/touchAvailable": 120
  }],
  195: [function(t, e, i) {
    "use strict";
    var n = t("./ScrollContainer");
    e.exports = {
      ScrollContainer: n
    }
  }, {
    "./ScrollContainer": 194
  }],
  196: [function(t, e, i) {
    "use strict";
    e.exports = {
      SharedInstance: t("./ac-shared-instance/SharedInstance")
    }
  }, {
    "./ac-shared-instance/SharedInstance": 197
  }],
  197: [function(t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      r = window,
      s = "AC",
      o = "SharedInstance",
      a = r[s],
      l = function() {
        var t = {};
        return {
          get: function(e, i) {
            var n = null;
            return t[e] && t[e][i] && (n = t[e][i]), n
          },
          set: function(e, i, n) {
            return t[e] || (t[e] = {}), "function" == typeof n ? t[e][i] = new n : t[e][i] = n, t[e][i]
          },
          share: function(t, e, i) {
            var n = this.get(t, e);
            return n || (n = this.set(t, e, i)), n
          },
          remove: function(e, i) {
            var r = "undefined" == typeof i ? "undefined" : n(i);
            if ("string" === r || "number" === r) {
              if (!t[e] || !t[e][i]) return;
              return void(t[e][i] = null)
            }
            t[e] && (t[e] = null)
          }
        }
      }();
    a || (a = r[s] = {}), a[o] || (a[o] = l), e.exports = a[o]
  }, {}],
  198: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-eclipse").Clip,
      r = t("@marcom/ac-feature/cssPropertyAvailable");
    e.exports = function(t, e, i, s, o) {
      if (r("opacity")) {
        if (o = o || {}, s) return o.autoplay = o.autoplay !== !1 || o.autoplay, o.propsFrom = o.propsFrom || {}, o.propsFrom.opacity = e, o.autoplay ? n.to(t, s, {
          opacity: i
        }, o) : new n(t, s, {
          opacity: i
        }, o);
        t.style.opacity = i, "function" == typeof o.onStart && o.onStart(), "function" == typeof o.onComplete && o.onComplete()
      } else t.style.visibility = i ? "visible" : "hidden", "function" == typeof o.onStart && o.onStart(), "function" == typeof o.onComplete && o.onComplete()
    }
  }, {
    "@marcom/ac-eclipse": 95,
    "@marcom/ac-feature/cssPropertyAvailable": 118
  }],
  199: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-eclipse").Clip,
      r = t("@marcom/ac-feature/cssPropertyAvailable");
    e.exports = function(t, e, i) {
      var s = 1;
      if (i = i || {}, r("opacity")) {
        if (e) return i.autoplay = i.autoplay !== !1 || i.autoplay, i.autoplay ? n.to(t, e, {
          opacity: s
        }, i) : new n(t, e, {
          opacity: s
        }, i);
        t.style.opacity = s, "function" == typeof i.onStart && i.onStart(), "function" == typeof i.onComplete && i.onComplete()
      } else t.style.visibility = "visible", "function" == typeof i.onStart && i.onStart(), "function" == typeof i.onComplete && i.onComplete()
    }
  }, {
    "@marcom/ac-eclipse": 95,
    "@marcom/ac-feature/cssPropertyAvailable": 118
  }],
  200: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-eclipse").Clip,
      r = t("@marcom/ac-feature/cssPropertyAvailable");
    e.exports = function(t, e, i) {
      var s = 0;
      if (i = i || {}, r("opacity")) {
        if (e) return i.autoplay = i.autoplay !== !1 || i.autoplay, i.autoplay ? n.to(t, e, {
          opacity: s
        }, i) : new n(t, e, {
          opacity: s
        }, i);
        t.style.opacity = s, "function" == typeof i.onStart && i.onStart(), "function" == typeof i.onComplete && i.onComplete()
      } else t.style.visibility = "hidden", "function" == typeof i.onStart && i.onStart(), "function" == typeof i.onComplete && i.onComplete()
    }
  }, {
    "@marcom/ac-eclipse": 95,
    "@marcom/ac-feature/cssPropertyAvailable": 118
  }],
  201: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-eclipse").Clip,
      r = t("@marcom/ac-dom-styles");
    e.exports = function(t, e, i, s, o) {
      o = o || {}, o.autoplay = o.autoplay !== !1 || o.autoplay;
      var a, l = o.onStart || null,
        c = o.onComplete || null;
      return a = {
        transform: {
          translateX: e + "px",
          translateY: i + "px"
        }
      }, s ? (o.onStart = function() {
        t.style.willChange = "transform", null !== l && l.call(this)
      }, o.onComplete = function() {
        t.style.willChange = "", null !== c && c.call(this)
      }, o.autoplay ? n.to(t, s, a, o) : new n(t, s, a, o)) : (r.setStyle(t, a), "function" == typeof o.onStart && o.onStart(), void("function" == typeof o.onComplete && o.onComplete()))
    }
  }, {
    "@marcom/ac-dom-styles": 72,
    "@marcom/ac-eclipse": 95
  }],
  202: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-browser-prefixed"),
      r = t("@marcom/ac-transform").Transform,
      s = t("./move");
    e.exports = function(t, e, i, o) {
      var a = new r;
      return a.setMatrixValue(getComputedStyle(t)[n.transform]), s(t, e, a.getTranslateY(), i, o)
    }
  }, {
    "./move": 201,
    "@marcom/ac-browser-prefixed": 12,
    "@marcom/ac-transform": 204
  }],
  203: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      return e = Object.assign({}, s, e), new r(t, e)
    }
    var r = t("@marcom/ac-scroll-container").ScrollContainer,
      s = {
        itemsSelector: ".tabnav-items",
        itemSelector: ".tabnav-link",
        leftPaddleSelector: ".tabnav-paddle-left",
        rightPaddleSelector: ".tabnav-paddle-right",
        scrollEasing: "ease-out",
        scrollDuration: .5,
        usePaddles: !0
      };
    e.exports = n
  }, {
    "@marcom/ac-scroll-container": 195
  }],
  204: [function(t, e, i) {
    "use strict";
    e.exports = {
      Transform: t("./ac-transform/Transform")
    }
  }, {
    "./ac-transform/Transform": 205
  }],
  205: [function(t, e, i) {
    "use strict";

    function n() {
      this.m = r.create()
    }
    var r = t("./gl-matrix/mat4"),
      s = t("./gl-matrix/vec3"),
      o = t("./gl-matrix/vec4"),
      a = Math.PI / 180,
      l = 180 / Math.PI,
      c = 0,
      u = 0,
      h = 1,
      m = 1,
      p = 2,
      d = 3,
      f = 4,
      _ = 4,
      g = 5,
      y = 5,
      v = 6,
      b = 7,
      E = 8,
      w = 9,
      T = 10,
      S = 11,
      C = 12,
      A = 12,
      O = 13,
      x = 13,
      P = 14,
      I = 15,
      k = n.prototype;
    k.rotateX = function(t) {
      var e = a * t;
      return r.rotateX(this.m, this.m, e), this
    }, k.rotateY = function(t) {
      var e = a * t;
      return r.rotateY(this.m, this.m, e), this
    }, k.rotateZ = function(t) {
      var e = a * t;
      return r.rotateZ(this.m, this.m, e), this
    }, k.rotate = k.rotateZ, k.rotate3d = function(t, e, i, n) {
      null !== e && void 0 !== e || (e = t), null !== i && void 0 !== e || (i = t);
      var s = a * n;
      return r.rotate(this.m, this.m, s, [t, e, i]), this
    }, k.rotateAxisAngle = k.rotate3d, k.scale = function(t, e) {
      return e = e || t, r.scale(this.m, this.m, [t, e, 1]), this
    }, k.scaleX = function(t) {
      return r.scale(this.m, this.m, [t, 1, 1]), this
    }, k.scaleY = function(t) {
      return r.scale(this.m, this.m, [1, t, 1]), this
    }, k.scaleZ = function(t) {
      return r.scale(this.m, this.m, [1, 1, t]), this
    }, k.scale3d = function(t, e, i) {
      return r.scale(this.m, this.m, [t, e, i]), this
    }, k.skew = function(t, e) {
      if (null === e || void 0 === e) return this.skewX(t);
      t = a * t, e = a * e;
      var i = r.create();
      return i[_] = Math.tan(t), i[m] = Math.tan(e), r.multiply(this.m, this.m, i), this
    }, k.skewX = function(t) {
      t = a * t;
      var e = r.create();
      return e[_] = Math.tan(t), r.multiply(this.m, this.m, e), this
    }, k.skewY = function(t) {
      t = a * t;
      var e = r.create();
      return e[m] = Math.tan(t), r.multiply(this.m, this.m, e), this
    }, k.translate = function(t, e) {
      return e = e || 0, r.translate(this.m, this.m, [t, e, 0]), this
    }, k.translate3d = function(t, e, i) {
      return r.translate(this.m, this.m, [t, e, i]), this
    }, k.translateX = function(t) {
      return r.translate(this.m, this.m, [t, 0, 0]), this
    }, k.translateY = function(t) {
      return r.translate(this.m, this.m, [0, t, 0]), this
    }, k.translateZ = function(t) {
      return r.translate(this.m, this.m, [0, 0, t]), this
    }, k.perspective = function(t) {
      var e = r.create();
      0 !== t && (e[S] = -1 / t), r.multiply(this.m, this.m, e)
    }, k.inverse = function() {
      var t = this.clone();
      return t.m = r.invert(t.m, this.m), t
    }, k.reset = function() {
      return r.identity(this.m), this
    }, k.getTranslateXY = function() {
      var t = this.m;
      return this.isAffine() ? [t[A], t[x]] : [t[C], t[O]]
    }, k.getTranslateXYZ = function() {
      var t = this.m;
      return this.isAffine() ? [t[A], t[x], 0] : [t[C], t[O], t[P]]
    }, k.getTranslateX = function() {
      var t = this.m;
      return this.isAffine() ? t[A] : t[C]
    }, k.getTranslateY = function() {
      var t = this.m;
      return this.isAffine() ? t[x] : t[O]
    }, k.getTranslateZ = function() {
      var t = this.m;
      return this.isAffine() ? 0 : t[P]
    }, k.clone = function() {
      var t = new n;
      return t.m = r.clone(this.m), t
    }, k.toArray = function() {
      var t = this.m;
      return this.isAffine() ? [t[u], t[m], t[_], t[y], t[A], t[x]] : [t[c], t[h], t[p], t[d], t[f], t[g], t[v], t[b], t[E], t[w], t[T], t[S], t[C], t[O], t[P], t[I]]
    }, k.fromArray = function(t) {
      return this.m = Array.prototype.slice.call(t), this
    }, k.setMatrixValue = function(t) {
      t = String(t).trim();
      var e = r.create();
      if ("none" === t) return this.m = e, this;
      var i, n, s = t.slice(0, t.indexOf("("));
      if ("matrix3d" === s)
        for (i = t.slice(9, -1).split(","), n = 0; n < i.length; n++) e[n] = parseFloat(i[n]);
      else {
        if ("matrix" !== s) throw new TypeError("Invalid Matrix Value");
        for (i = t.slice(7, -1).split(","), n = i.length; n--;) i[n] = parseFloat(i[n]);
        e[c] = i[0], e[h] = i[1], e[C] = i[4], e[f] = i[2], e[g] = i[3], e[O] = i[5]
      }
      return this.m = e, this
    };
    var M = function(t) {
      return Math.abs(t) < 1e-4
    };
    k.decompose = function(t) {
      t = t || !1;
      for (var e = r.clone(this.m), i = s.create(), n = s.create(), a = s.create(), c = o.create(), u = o.create(), h = (s.create(), 0); h < 16; h++) e[h] /= e[I];
      var m = r.clone(e);
      m[d] = 0, m[b] = 0, m[S] = 0, m[I] = 1;
      var p = (e[3], e[7], e[11], e[12]),
        f = e[13],
        _ = e[14],
        g = (e[15], o.create());
      if (M(e[d]) && M(e[b]) && M(e[S])) c = o.fromValues(0, 0, 0, 1);
      else {
        g[0] = e[d], g[1] = e[b], g[2] = e[S], g[3] = e[I];
        var y = r.invert(r.create(), m),
          v = r.transpose(r.create(), y);
        c = o.transformMat4(c, g, v)
      }
      i[0] = p, i[1] = f, i[2] = _;
      var E = [s.create(), s.create(), s.create()];
      E[0][0] = e[0], E[0][1] = e[1], E[0][2] = e[2], E[1][0] = e[4], E[1][1] = e[5], E[1][2] = e[6], E[2][0] = e[8], E[2][1] = e[9], E[2][2] = e[10], n[0] = s.length(E[0]), s.normalize(E[0], E[0]), a[0] = s.dot(E[0], E[1]), E[1] = this._combine(E[1], E[0], 1, -a[0]), n[1] = s.length(E[1]), s.normalize(E[1], E[1]), a[0] /= n[1], a[1] = s.dot(E[0], E[2]), E[2] = this._combine(E[2], E[0], 1, -a[1]), a[2] = s.dot(E[1], E[2]), E[2] = this._combine(E[2], E[1], 1, -a[2]), n[2] = s.length(E[2]), s.normalize(E[2], E[2]), a[1] /= n[2], a[2] /= n[2];
      var w = s.cross(s.create(), E[1], E[2]);
      if (s.dot(E[0], w) < 0)
        for (h = 0; h < 3; h++) n[h] *= -1, E[h][0] *= -1, E[h][1] *= -1, E[h][2] *= -1;
      u[0] = .5 * Math.sqrt(Math.max(1 + E[0][0] - E[1][1] - E[2][2], 0)), u[1] = .5 * Math.sqrt(Math.max(1 - E[0][0] + E[1][1] - E[2][2], 0)), u[2] = .5 * Math.sqrt(Math.max(1 - E[0][0] - E[1][1] + E[2][2], 0)), u[3] = .5 * Math.sqrt(Math.max(1 + E[0][0] + E[1][1] + E[2][2], 0)), E[2][1] > E[1][2] && (u[0] = -u[0]), E[0][2] > E[2][0] && (u[1] = -u[1]), E[1][0] > E[0][1] && (u[2] = -u[2]);
      var T = o.fromValues(u[0], u[1], u[2], 2 * Math.acos(u[3])),
        C = this._rotationFromQuat(u);
      return t && (a[0] = Math.round(a[0] * l * 100) / 100, a[1] = Math.round(a[1] * l * 100) / 100, a[2] = Math.round(a[2] * l * 100) / 100, C[0] = Math.round(C[0] * l * 100) / 100, C[1] = Math.round(C[1] * l * 100) / 100, C[2] = Math.round(C[2] * l * 100) / 100, T[3] = Math.round(T[3] * l * 100) / 100), {
        translation: i,
        scale: n,
        skew: a,
        perspective: c,
        quaternion: u,
        eulerRotation: C,
        axisAngle: T
      }
    }, k.recompose = function(t, e, i, n, a) {
      t = t || s.create(), e = e || s.create(), i = i || s.create(), n = n || o.create(), a = a || o.create();
      var l = r.fromRotationTranslation(r.create(), a, t);
      l[d] = n[0], l[b] = n[1], l[S] = n[2], l[I] = n[3];
      var c = r.create();
      return 0 !== i[2] && (c[w] = i[2], r.multiply(l, l, c)), 0 !== i[1] && (c[w] = 0, c[E] = i[1], r.multiply(l, l, c)), i[0] && (c[E] = 0, c[4] = i[0], r.multiply(l, l, c)), r.scale(l, l, e), this.m = l, this
    }, k.isAffine = function() {
      return 0 === this.m[p] && 0 === this.m[d] && 0 === this.m[v] && 0 === this.m[b] && 0 === this.m[E] && 0 === this.m[w] && 1 === this.m[T] && 0 === this.m[S] && 0 === this.m[P] && 1 === this.m[I]
    }, k.toString = function() {
      var t = this.m;
      return this.isAffine() ? "matrix(" + t[u] + ", " + t[m] + ", " + t[_] + ", " + t[y] + ", " + t[A] + ", " + t[x] + ")" : "matrix3d(" + t[c] + ", " + t[h] + ", " + t[p] + ", " + t[d] + ", " + t[f] + ", " + t[g] + ", " + t[v] + ", " + t[b] + ", " + t[E] + ", " + t[w] + ", " + t[T] + ", " + t[S] + ", " + t[C] + ", " + t[O] + ", " + t[P] + ", " + t[I] + ")"
    }, k.toCSSString = k.toString, k._combine = function(t, e, i, n) {
      var r = s.create();
      return r[0] = i * t[0] + n * e[0], r[1] = i * t[1] + n * e[1], r[2] = i * t[2] + n * e[2], r
    }, k._matrix2dToMat4 = function(t) {
      for (var e = r.create(), i = 0; i < 4; i++)
        for (var n = 0; n < 4; n++) e[4 * i + n] = t[i][n];
      return e
    }, k._mat4ToMatrix2d = function(t) {
      for (var e = [], i = 0; i < 4; i++) {
        e[i] = [];
        for (var n = 0; n < 4; n++) e[i][n] = t[4 * i + n]
      }
      return e
    }, k._rotationFromQuat = function(t) {
      var e, i, n, r = t[3] * t[3],
        o = t[0] * t[0],
        a = t[1] * t[1],
        l = t[2] * t[2],
        c = o + a + l + r,
        u = t[0] * t[1] + t[2] * t[3];
      return u > .499 * c ? (i = 2 * Math.atan2(t[0], t[3]), n = Math.PI / 2, e = 0, s.fromValues(e, i, n)) : u < -.499 * c ? (i = -2 * Math.atan2(t[0], t[3]), n = -Math.PI / 2, e = 0, s.fromValues(e, i, n)) : (i = Math.atan2(2 * t[1] * t[3] - 2 * t[0] * t[2], o - a - l + r), n = Math.asin(2 * u / c), e = Math.atan2(2 * t[0] * t[3] - 2 * t[1] * t[2], -o + a - l + r), s.fromValues(e, i, n))
    }, e.exports = n
  }, {
    "./gl-matrix/mat4": 206,
    "./gl-matrix/vec3": 207,
    "./gl-matrix/vec4": 208
  }],
  206: [function(t, e, i) {
    "use strict";
    var n = {
      create: t("gl-mat4/create"),
      rotate: t("gl-mat4/rotate"),
      rotateX: t("gl-mat4/rotateX"),
      rotateY: t("gl-mat4/rotateY"),
      rotateZ: t("gl-mat4/rotateZ"),
      scale: t("gl-mat4/scale"),
      multiply: t("gl-mat4/multiply"),
      translate: t("gl-mat4/translate"),
      invert: t("gl-mat4/invert"),
      clone: t("gl-mat4/clone"),
      transpose: t("gl-mat4/transpose"),
      identity: t("gl-mat4/identity"),
      fromRotationTranslation: t("gl-mat4/fromRotationTranslation")
    };
    e.exports = n
  }, {
    "gl-mat4/clone": 245,
    "gl-mat4/create": 246,
    "gl-mat4/fromRotationTranslation": 247,
    "gl-mat4/identity": 248,
    "gl-mat4/invert": 249,
    "gl-mat4/multiply": 250,
    "gl-mat4/rotate": 251,
    "gl-mat4/rotateX": 252,
    "gl-mat4/rotateY": 253,
    "gl-mat4/rotateZ": 254,
    "gl-mat4/scale": 255,
    "gl-mat4/translate": 256,
    "gl-mat4/transpose": 257
  }],
  207: [function(t, e, i) {
    "use strict";
    var n = {
      create: t("gl-vec3/create"),
      dot: t("gl-vec3/dot"),
      normalize: t("gl-vec3/normalize"),
      length: t("gl-vec3/length"),
      cross: t("gl-vec3/cross"),
      fromValues: t("gl-vec3/fromValues")
    };
    e.exports = n
  }, {
    "gl-vec3/create": 258,
    "gl-vec3/cross": 259,
    "gl-vec3/dot": 260,
    "gl-vec3/fromValues": 261,
    "gl-vec3/length": 262,
    "gl-vec3/normalize": 263
  }],
  208: [function(t, e, i) {
    "use strict";
    var n = {
      create: t("gl-vec4/create"),
      transformMat4: t("gl-vec4/transformMat4"),
      fromValues: t("gl-vec4/fromValues")
    };
    e.exports = n
  }, {
    "gl-vec4/create": 264,
    "gl-vec4/fromValues": 265,
    "gl-vec4/transformMat4": 266
  }],
  209: [function(t, e, i) {
    "use strict";
    var n = {
      ua: window.navigator.userAgent,
      platform: window.navigator.platform,
      vendor: window.navigator.vendor
    };
    e.exports = t("./parseUserAgent")(n)
  }, {
    "./parseUserAgent": 212
  }],
  210: [function(t, e, i) {
    "use strict";
    e.exports = {
      browser: {
        safari: !1,
        chrome: !1,
        firefox: !1,
        ie: !1,
        opera: !1,
        android: !1,
        edge: !1,
        version: {
          name: "",
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
          name: "",
          major: 0,
          minor: 0,
          patch: 0
        }
      }
    }
  }, {}],
  211: [function(t, e, i) {
    "use strict";
    e.exports = {
      browser: [{
        name: "edge",
        userAgent: "Edge",
        version: ["rv", "Edge"],
        test: function(t) {
          return t.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === t.ua
        }
      }, {
        name: "chrome",
        userAgent: "Chrome"
      }, {
        name: "firefox",
        test: function(t) {
          return t.ua.indexOf("Firefox") > -1 && t.ua.indexOf("Opera") === -1
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
          return t.platform.indexOf("Win") > -1
        },
        version: "Windows NT"
      }, {
        name: "osx",
        userAgent: "Mac",
        test: function(t) {
          return t.platform.indexOf("Mac") > -1
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
          return t.platform.indexOf("Linux") > -1 && t.ua.indexOf("Android") === -1
        }
      }, {
        name: "fireos",
        test: function(t) {
          return t.ua.indexOf("Firefox") > -1 && t.ua.indexOf("Mobile") > -1
        },
        version: "rv"
      }, {
        name: "android",
        userAgent: "Android"
      }, {
        name: "chromeos",
        userAgent: "CrOS"
      }]
    }
  }, {}],
  212: [function(t, e, i) {
    "use strict";

    function n(t) {
      return new RegExp(t + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")
    }

    function r(t, e) {
      if ("function" == typeof t.parseVersion) return t.parseVersion(e);
      var i = t.version || t.userAgent;
      "string" == typeof i && (i = [i]);
      for (var r, s = i.length, o = 0; o < s; o++)
        if (r = e.match(n(i[o])), r && r.length > 1) return r[1].replace(/_/g, ".")
    }

    function s(t, e, i) {
      for (var n, s, o = t.length, a = 0; a < o; a++)
        if ("function" == typeof t[a].test ? t[a].test(i) === !0 && (n = t[a].name) : i.ua.indexOf(t[a].userAgent) > -1 && (n = t[a].name), n) {
          if (e[n] = !0, s = r(t[a], i.ua), "string" == typeof s) {
            var l = s.split(".");
            e.version.name = s, l && l.length > 0 && (e.version.major = parseInt(l[0] || 0), e.version.minor = parseInt(l[1] || 0), e.version.patch = parseInt(l[2] || 0))
          } else "edge" === n && (e.version.name = "12.0.0", e.version.major = "12", e.version.minor = "0", e.version.patch = "0");
          return "function" == typeof t[a].parseDocumentMode && (e.version.documentMode = t[a].parseDocumentMode()), e
        } return e
    }

    function o(t) {
      var e = {};
      return e.browser = s(l.browser, a.browser, t), e.os = s(l.os, a.os, t), e
    }
    var a = t("./defaults"),
      l = t("./dictionary");
    e.exports = o
  }, {
    "./defaults": 210,
    "./dictionary": 211
  }],
  213: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      a = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      l = t("./Model/AnimSystemModel"),
      c = t("./Keyframes/Keyframe"),
      u = t("./Keyframes/KeyframeCSSClass"),
      h = t("./Keyframes/KeyframeDiscreteEvent"),
      m = t("./ScrollGroup"),
      p = t("./TimeGroup"),
      d = (t("./utils/arrayToObject"), {
        update: t("@marcom/ac-raf-emitter/update"),
        cancelUpdate: t("@marcom/ac-raf-emitter/cancelUpdate"),
        external: t("@marcom/ac-raf-emitter/external"),
        draw: t("@marcom/ac-raf-emitter/draw")
      }),
      f = null,
      _ = function(t) {
        function e() {
          n(this, e);
          var t = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          if (f) throw "You cannot create multiple AnimSystems. You probably want to create multiple groups instead. You can have unlimited groups on a page";
          return f = t, t.groups = [], t.scrollSystems = [], t.timeSystems = [], t._forceUpdateRAFId = -1, t.onScroll = t.onScroll.bind(t), t.onResizedDebounced = t.onResizedDebounced.bind(t), t.onResizeImmediate = t.onResizeImmediate.bind(t), t
        }
        return s(e, t), o(e, [{
          key: "initialize",
          value: function() {
            this.timeSystems = [], this.scrollSystems = [], this.groups = [], this.setupEvents(), this.initializeResizeFilter(), this.initializeModel(), this.createDOMGroups(), this.createDOMKeyframes()
          }
        }, {
          key: "remove",
          value: function() {
            var t = this;
            return Promise.all(this.groups.map(function(t) {
              return t.remove()
            })).then(function() {
              t.groups = null, t.scrollSystems = null, t.timeSystems = null, window.clearTimeout(l.RESIZE_TIMEOUT), window.removeEventListener("scroll", t.onScroll), window.removeEventListener("resize", t.onResizeImmediate), t._events = {}
            })
          }
        }, {
          key: "destroy",
          value: function() {
            this.remove()
          }
        }, {
          key: "createTimeGroup",
          value: function(t) {
            var e = new p(t, this);
            return this.groups.push(e), this.timeSystems.push(e), this.trigger(l.EVENTS.ON_GROUP_CREATED, e), e
          }
        }, {
          key: "createScrollGroup",
          value: function(t) {
            if (!t) throw "AnimSystem scroll based groups must supply an HTMLElement";
            var e = new m(t, this);
            return this.groups.push(e), this.scrollSystems.push(e), this.trigger(l.EVENTS.ON_GROUP_CREATED, e), e
          }
        }, {
          key: "removeGroup",
          value: function(t) {
            var e = this;
            return Promise.all(t.keyframeControllers.map(function(e) {
              return t.removeKeyframeController(e)
            })).then(function() {
              return new Promise(function(i) {
                var n = e.groups.indexOf(t);
                n !== -1 && e.groups.splice(n, 1), n = e.scrollSystems.indexOf(t), n !== -1 && e.scrollSystems.splice(n, 1), n = e.timeSystems.indexOf(t), n !== -1 && e.timeSystems.splice(n, 1), t.destroy(), i()
              })
            })
          }
        }, {
          key: "createDOMGroups",
          value: function() {
            var t = this;
            document.body.setAttribute("data-anim-scroll-group", "body"), document.querySelectorAll("[data-anim-scroll-group]").forEach(function(e) {
              return t.createScrollGroup(e)
            }), document.querySelectorAll("[data-anim-time-group]").forEach(function(e) {
              return t.createTimeGroup(e)
            }), this.trigger(l.EVENTS.ON_DOM_GROUPS_CREATED, this.groups)
          }
        }, {
          key: "createDOMKeyframes",
          value: function() {
            var t = this,
              e = [];
            [c.DATA_ATTRIBUTE, u.DATA_ATTRIBUTE, h.DATA_ATTRIBUTE].forEach(function(t) {
              for (var i = 0; i < 12; i++) e.push(t + (0 === i ? "" : "-" + (i - 1)))
            });
            for (var i = 0; i < e.length; i++)
              for (var n = e[i], r = document.querySelectorAll("[" + n + "]"), s = 0; s < r.length; s++) {
                var o = r[s],
                  a = JSON.parse(o.getAttribute(n));
                this.addKeyframe(o, a)
              }
            d.update(function() {
              t.groups.forEach(function(t) {
                return t.onKeyframesDirty({
                  silent: !0
                })
              }), t.groups.forEach(function(t) {
                return t.trigger(l.EVENTS.ON_DOM_KEYFRAMES_CREATED, t)
              }), t.trigger(l.EVENTS.ON_DOM_KEYFRAMES_CREATED, t), t.groups.forEach(function(t) {
                t.forceUpdate({
                  waitForNextUpdate: !1,
                  silent: !0
                }), t.reconcile()
              }), t.onScroll()
            }, !0)
          }
        }, {
          key: "initializeResizeFilter",
          value: function() {
            if (!l.cssDimensionsTracker) {
              var t = document.createElement("div");
              t.setAttribute("cssDimensionsTracker", "true"), t.style.position = "fixed", t.style.top = "0", t.style.width = "100%", t.style.height = "100vh", t.style.pointerEvents = "none", t.style.visibility = "hidden", t.style.zIndex = "-1", document.documentElement.appendChild(t), l.cssDimensionsTracker = t
            }
          }
        }, {
          key: "initializeModel",
          value: function() {
            l.pageMetrics.windowHeight = l.cssDimensionsTracker.clientHeight, l.pageMetrics.windowWidth = l.cssDimensionsTracker.clientWidth, l.pageMetrics.scrollY = window.scrollY || window.pageYOffset, l.pageMetrics.scrollX = window.scrollX || window.pageXOffset, l.pageMetrics.breakpoint = l.getBreakpoint();
            var t = document.documentElement.getBoundingClientRect();
            l.pageMetrics.documentOffsetX = t.left + l.pageMetrics.scrollX, l.pageMetrics.documentOffsetY = t.top + l.pageMetrics.scrollY
          }
        }, {
          key: "setupEvents",
          value: function() {
            window.removeEventListener("scroll", this.onScroll), window.addEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onResizeImmediate), window.addEventListener("resize", this.onResizeImmediate)
          }
        }, {
          key: "onScroll",
          value: function() {
            l.pageMetrics.scrollY = window.scrollY || window.pageYOffset, l.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
            for (var t = 0, e = this.scrollSystems.length; t < e; t++) this.scrollSystems[t]._onScroll();
            this.trigger(l.PageEvents.ON_SCROLL, l.pageMetrics)
          }
        }, {
          key: "onResizeImmediate",
          value: function() {
            var t = l.cssDimensionsTracker.clientWidth,
              e = l.cssDimensionsTracker.clientHeight;
            if (t !== l.pageMetrics.windowWidth || e !== l.pageMetrics.windowHeight) {
              l.pageMetrics.windowWidth = t, l.pageMetrics.windowHeight = e, l.pageMetrics.scrollY = window.scrollY || window.pageYOffset, l.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
              var i = document.documentElement.getBoundingClientRect();
              l.pageMetrics.documentOffsetX = i.left + l.pageMetrics.scrollX, l.pageMetrics.documentOffsetY = i.top + l.pageMetrics.scrollY, window.clearTimeout(l.RESIZE_TIMEOUT), l.RESIZE_TIMEOUT = window.setTimeout(this.onResizedDebounced, 250), this.trigger(l.PageEvents.ON_RESIZE_IMMEDIATE, l.pageMetrics)
            }
          }
        }, {
          key: "onResizedDebounced",
          value: function() {
            var t = this;
            d.update(function() {
              var e = l.pageMetrics.breakpoint,
                i = l.getBreakpoint(),
                n = i !== e;
              if (n) {
                l.pageMetrics.previousBreakpoint = e, l.pageMetrics.breakpoint = i;
                for (var r = 0, s = t.groups.length; r < s; r++) t.groups[r]._onBreakpointChange();
                t.trigger(l.PageEvents.ON_BREAKPOINT_CHANGE, l.pageMetrics)
              }
              for (var o = 0, a = t.groups.length; o < a; o++) t.groups[o].forceUpdate({
                waitForNextUpdate: !1
              });
              t.trigger(l.PageEvents.ON_RESIZE_DEBOUNCED, l.pageMetrics)
            }, !0)
          }
        }, {
          key: "forceUpdate",
          value: function() {
            var t = this,
              e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              i = e.waitForNextUpdate,
              n = void 0 === i || i,
              r = e.silent,
              s = void 0 !== r && r;
            this._forceUpdateRAFId !== -1 && d.cancelUpdate(this._forceUpdateRAFId);
            var o = function() {
              for (var e = 0, i = t.groups.length; e < i; e++) {
                var n = t.groups[e];
                n.forceUpdate({
                  waitForNextUpdate: !1,
                  silent: s
                })
              }
              return -1
            };
            this._forceUpdateRAFId = n ? d.update(o, !0) : o()
          }
        }, {
          key: "addKeyframe",
          value: function(t, e) {
            var i = this.getGroupForTarget(t);
            return i = i || this.getGroupForTarget(document.body), i.addKeyframe(t, e)
          }
        }, {
          key: "getGroupForTarget",
          value: function(t) {
            if (t._animInfo && t._animInfo.group) return t._animInfo.group;
            for (var e = t; e;) {
              if (e._animInfo && e._animInfo.isGroup) return e._animInfo.group;
              e = e.parentElement
            }
          }
        }, {
          key: "getControllerForTarget",
          value: function(t) {
            return t._animInfo && t._animInfo.controller ? t._animInfo.controller : null
          }
        }]), e
      }(a);
    e.exports = new _
  }, {
    "./Keyframes/Keyframe": 214,
    "./Keyframes/KeyframeCSSClass": 215,
    "./Keyframes/KeyframeDiscreteEvent": 217,
    "./Model/AnimSystemModel": 218,
    "./ScrollGroup": 227,
    "./TimeGroup": 228,
    "./utils/arrayToObject": 229,
    "@marcom/ac-event-emitter-micro": 116,
    "@marcom/ac-raf-emitter/cancelUpdate": 185,
    "@marcom/ac-raf-emitter/draw": 186,
    "@marcom/ac-raf-emitter/external": 187,
    "@marcom/ac-raf-emitter/update": 190
  }],
  214: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var r = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      s = t("../Model/AnimSystemModel"),
      o = t("@marcom/sm-math-utils"),
      a = t("../Model/EasingFunctions"),
      l = t("../Model/UnitBezier"),
      c = t("../utils/arrayToObject"),
      u = function() {
        function t(e, i) {
          n(this, t), this.controller = e, this.anchors = [], this.jsonProps = i, this.ease = e.group.defaultEase, this.easeFunctionString = s.KeyframeDefaults.easeFunctionString, this.easeFunction = a[this.easeFunctionString], this.start = 0, this.end = 0, this.localT = 0, this.curvedT = 0, this.id = 0, this.event = "", this.needsEventDispatch = !1, this.snapAtCreation = !1, this.isEnabled = !1, this.animValues = {}, this.breakpointMask = "SMLX", this.disabledWhen = [], this.keyframeType = s.KeyframeTypes.Interpolation, this.hold = !1
        }
        return r(t, [{
          key: "destroy",
          value: function() {
            this.controller = null, this.anchors = null, this.jsonProps = null, this.easeFunction = null, this.animValues = null
          }
        }, {
          key: "remove",
          value: function() {
            return this.controller.removeKeyframe(this)
          }
        }, {
          key: "parseOptions",
          value: function(t) {
            var e = this;
            if (this.jsonProps = t, t.relativeTo && console.error("KeyframeError: relativeTo has been removed. Use 'anchors' property instead. Found 'relativeTo':\"" + t.relativeTo + '"'), "" !== t.anchors && t.anchors) {
              var i = Array.isArray(t.anchors) ? t.anchors : [t.anchors];
              this.anchors = [], i.forEach(function(t) {
                var i = t instanceof Element ? t : e.controller.group.element.querySelector(t) || document.querySelector(t);
                return null === i ? void console.warn("Keyframe for", e.controller.friendlyName, " `anchor` failed to find '" + t + "' via querySelector in group.element or document") : (e.anchors.push(i), void e.controller.group.metrics.add(i))
              })
            } else this.anchors = [], t.anchors = [];
            if (t.ease ? this.ease = parseFloat(t.ease) : t.ease = this.ease, t.hasOwnProperty("snapAtCreation") ? this.snapAtCreation = t.snapAtCreation : t.snapAtCreation = this.snapAtCreation, t.easeFunction ? this.easeFunction = t.easeFunction : t.easeFunction = this.easeFunctionString, t.breakpointMask ? this.breakpointMask = t.breakpointMask : t.breakpointMask = this.breakpointMask, t.disabledWhen ? this.disabledWhen = Array.isArray(t.disabledWhen) ? t.disabledWhen : [t.disabledWhen] : t.disabledWhen = this.disabledWhen, t.hasOwnProperty("hold") ? this.hold = t.hold : t.hold = this.hold, this.easeFunction = a[t.easeFunction], !a.hasOwnProperty(t.easeFunction)) {
              var n = l.fromCSSString(t.easeFunction);
              n ? this.easeFunction = n : console.error("Keyframe parseOptions cannot find EasingFunction named '" + t.easingFunction + "'")
            }
            for (var r in t)
              if (s.KeyframeJSONReservedWords.indexOf(r) === -1) {
                var o = t[r];
                if (Array.isArray(o)) {
                  if (this.animValues[r] = this.controller.group.expressionParser.parseArray(this, o), void 0 === this.controller.tweenProps[r] || !this.controller._ownerIsElement) {
                    var c = 0;
                    this.controller._ownerIsElement || (c = this.controller.element[r]);
                    var u = new s.TargetValue(c, s.KeyframeDefaults.epsilon, this.snapAtCreation);
                    this.controller.tweenProps[r] = u
                  }
                  var h = this.controller.tweenProps[r];
                  if (t.epsilon) h.epsilon = t.epsilon;
                  else {
                    var m = Math.abs(this.animValues[r][0] - this.animValues[r][1]),
                      p = Math.min(.001 * m, h.epsilon, s.KeyframeDefaults.epsilon);
                    h.epsilon = Math.max(p, 1e-4)
                  }
                }
              } this.keyframeType = this.hold ? s.KeyframeTypes.InterpolationForward : s.KeyframeTypes.Interpolation, t.event && (this.event = t.event)
          }
        }, {
          key: "overwriteProps",
          value: function(t) {
            this.animValues = {};
            var e = Object.assign({}, this.jsonProps, t);
            this.controller.updateKeyframe(this, e)
          }
        }, {
          key: "updateLocalProgress",
          value: function(t) {
            if (this.start === this.end || t > this.end) return this.localT = 1, void(this.curvedT = this.easeFunction(this.localT));
            var e = (t - this.start) / (this.end - this.start),
              i = this.hold ? this.localT : 0;
            this.localT = o.clamp(e, i, 1), this.curvedT = this.easeFunction(this.localT)
          }
        }, {
          key: "reconcile",
          value: function(t) {
            var e = this.animValues[t],
              i = this.controller.tweenProps[t];
            i.initialValue = e[0], i.target = e[0] + this.curvedT * (e[1] - e[0]), i.current !== i.target && (i.current = i.target, this.needsEventDispatch || (this.needsEventDispatch = !0, this.controller.keyframesRequiringDispatch.push(this)))
          }
        }, {
          key: "reset",
          value: function(t) {
            this.localT = t || 0;
            var e = this.ease;
            this.ease = 1;
            for (var i in this.animValues) this.reconcile(i);
            this.ease = e
          }
        }, {
          key: "onDOMRead",
          value: function(t) {
            var e = this.animValues[t],
              i = this.controller.tweenProps[t];
            i.target = e[0] + this.curvedT * (e[1] - e[0]);
            var n = i.current;
            i.current += (i.target - i.current) * this.ease;
            var r = i.current - i.target;
            r < i.epsilon && r > -i.epsilon && (i.current = i.target, r = 0), "" === this.event || this.needsEventDispatch || (r > i.epsilon || r < -i.epsilon || 0 === r && n !== i.current) && (this.needsEventDispatch = !0, this.controller.keyframesRequiringDispatch.push(this))
          }
        }, {
          key: "isInRange",
          value: function(t) {
            return t >= this.start && t <= this.end
          }
        }, {
          key: "setEnabled",
          value: function(t) {
            t = t || c(Array.from(document.documentElement.classList));
            var e = this.breakpointMask.indexOf(s.pageMetrics.breakpoint) !== -1,
              i = !1;
            return this.disabledWhen.length > 0 && (i = this.disabledWhen.some(function(e) {
              return "undefined" != typeof t[e]
            })), this.isEnabled = e && !i, this.isEnabled
          }
        }, {
          key: "updateAnimationConstraints",
          value: function() {
            this.start = this.controller.group.timeParser.parse(this, this.jsonProps.start), this.end = this.controller.group.timeParser.parse(this, this.jsonProps.end), this.updateAnimatedValueConstraints()
          }
        }, {
          key: "updateAnimatedValueConstraints",
          value: function() {
            for (var t in this.animValues) {
              var e = this.jsonProps[t];
              this.animValues[t] = this.controller.group.expressionParser.parseArray(this, e)
            }
          }
        }]), t
      }();
    u.DATA_ATTRIBUTE = "data-anim-tween", e.exports = u
  }, {
    "../Model/AnimSystemModel": 218,
    "../Model/EasingFunctions": 219,
    "../Model/UnitBezier": 223,
    "../utils/arrayToObject": 229,
    "@marcom/sm-math-utils": 238
  }],
  215: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      a = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      l = t("./Keyframe"),
      c = t("../Model/AnimSystemModel.js"),
      u = function(t) {
        function e(t, i) {
          n(this, e);
          var s = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
          return s.keyframeType = c.KeyframeTypes.CSSClass, s._triggerType = e.TRIGGER_TYPE_CSS_CLASS, s.cssClass = "", s.friendlyName = "", s.style = {
            on: null,
            off: null
          }, s.toggle = !1, s.isApplied = !1, s
        }
        return s(e, t), a(e, [{
          key: "parseOptions",
          value: function(t) {
            if (!this.controller._ownerIsElement) throw new TypeError("CSS Keyframes cannot be applied to JS Objects");
            if (t.x = void 0, t.y = void 0, t.scale = void 0, t.scaleX = void 0, t.scaleY = void 0, t.rotation = void 0, t.opacity = void 0, t.hold = void 0, void 0 !== t.toggle && (this.toggle = t.toggle), void 0 !== t.cssClass) this._triggerType = e.TRIGGER_TYPE_CSS_CLASS, this.cssClass = t.cssClass, this.friendlyName = "." + this.cssClass, void 0 === this.controller.tweenProps.targetClasses && (this.controller.tweenProps.targetClasses = {
              add: [],
              remove: []
            });
            else {
              if (void 0 === t.style || !this.isValidStyleProperty(t.style)) throw new TypeError("KeyframeCSSClass no 'cssClass` property found. If using `style` property its also missing or invalid");
              if (this._triggerType = e.TRIGGER_TYPE_STYLE_PROPERTY, this.style = t.style, this.friendlyName = "style", this.toggle = void 0 !== this.style.off || this.toggle, this.toggle && void 0 === this.style.off) {
                this.style.off = {};
                for (var i in this.style.on) this.style.off[i] = ""
              }
              void 0 === this.controller.tweenProps.targetStyles && (this.controller.tweenProps.targetStyles = {})
            }
            if (void 0 === t.end && (t.end = t.start), t.toggle = this.toggle, this._triggerType === e.TRIGGER_TYPE_CSS_CLASS) this.isApplied = this.controller.element.classList.contains(this.cssClass);
            else {
              var n = getComputedStyle(this.controller.element);
              this.isApplied = !0;
              for (var r in this.style.on)
                if (n[r] !== this.style.on[r]) {
                  this.isApplied = !1;
                  break
                }
            }
            l.prototype.parseOptions.call(this, t), this.animValues[this.friendlyName] = [0, 0], void 0 === this.controller.tweenProps[this.friendlyName] && (this.controller.tweenProps[this.friendlyName] = new c.TargetValue(0, 1, (!1))), this.keyframeType = c.KeyframeTypes.CSSClass
          }
        }, {
          key: "updateLocalProgress",
          value: function(t) {
            this.isApplied && !this.toggle || (this.start !== this.end ? !this.isApplied && t >= this.start && t <= this.end ? this._apply() : this.isApplied && this.toggle && (t < this.start || t > this.end) && this._unapply() : !this.isApplied && t >= this.start ? this._apply() : this.isApplied && this.toggle && t < this.start && this._unapply())
          }
        }, {
          key: "_apply",
          value: function() {
            if (this._triggerType === e.TRIGGER_TYPE_CSS_CLASS) this.controller.tweenProps.targetClasses.add.push(this.cssClass), this.controller.needsClassUpdate = !0;
            else {
              for (var t in this.style.on) this.controller.tweenProps.targetStyles[t] = this.style.on[t];
              this.controller.needsStyleUpdate = !0
            }
            this.isApplied = !0
          }
        }, {
          key: "_unapply",
          value: function() {
            if (this._triggerType === e.TRIGGER_TYPE_CSS_CLASS) this.controller.tweenProps.targetClasses.remove.push(this.cssClass), this.controller.needsClassUpdate = !0;
            else {
              for (var t in this.style.off) this.controller.tweenProps.targetStyles[t] = this.style.off[t];
              this.controller.needsStyleUpdate = !0
            }
            this.isApplied = !1
          }
        }, {
          key: "isValidStyleProperty",
          value: function(t) {
            if (!t.hasOwnProperty("on")) return !1;
            if ("object" !== o(t.on)) throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:hidden, otherProperty: value}}");
            if (this.toggle && t.hasOwnProperty("off") && "object" !== o(t.off)) throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:hidden, otherProperty: value}}");
            return !0
          }
        }, {
          key: "reconcile",
          value: function(t, e) {}
        }, {
          key: "onDOMRead",
          value: function(t, e) {}
        }, {
          key: "updateAnimatedValueConstraints",
          value: function() {}
        }]), e
      }(l);
    u.TRIGGER_TYPE_CSS_CLASS = 0, u.TRIGGER_TYPE_STYLE_PROPERTY = 1, u.DATA_ATTRIBUTE = "data-anim-classname", e.exports = u
  }, {
    "../Model/AnimSystemModel.js": 218,
    "./Keyframe": 214
  }],
  216: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      a = function v(t, e, i) {
        null === t && (t = Function.prototype);
        var n = Object.getOwnPropertyDescriptor(t, e);
        if (void 0 === n) {
          var r = Object.getPrototypeOf(t);
          return null === r ? void 0 : v(r, e, i)
        }
        if ("value" in n) return n.value;
        var s = n.get;
        if (void 0 !== s) return s.call(i)
      },
      l = t("../Model/AnimSystemModel"),
      c = (t("./Keyframe"), t("./KeyframeCSSClass")),
      u = t("../Model/InferKeyframeFromProps"),
      h = t("../utils/arrayToObject"),
      m = t("../Model/UUID"),
      p = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      d = t("@marcom/decompose-css-transform"),
      f = {
        update: t("@marcom/ac-raf-emitter/update"),
        external: t("@marcom/ac-raf-emitter/external"),
        draw: t("@marcom/ac-raf-emitter/draw")
      },
      _ = Math.PI / 180,
      g = {
        create: t("gl-mat4/create"),
        rotateX: t("gl-mat4/rotateX"),
        rotateY: t("gl-mat4/rotateY"),
        rotateZ: t("gl-mat4/rotateZ"),
        scale: t("gl-mat4/scale")
      },
      y = function(t) {
        function e(t, i) {
          n(this, e);
          var s = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return s.uuid = m(), s.group = t, s.element = i, s._ownerIsElement = s.element instanceof Element, s._ownerIsElement ? s.friendlyName = s.element.tagName + "." + Array.from(s.element.classList).join(".") : s.friendlyName = s.element.friendlyName || s.uuid, s.element._animInfo = s.element._animInfo || new l.AnimInfo(t, s), s.element._animInfo.controller = s, s.element._animInfo.group = s.group, s.element._animInfo.controllers.push(s), s.tweenProps = new l.TweenProps, s.eventObject = new l.EventObject(s), s.needsStyleUpdate = !1, s.needsClassUpdate = !1, s.elementMetrics = s.group.metrics.add(s.element), s.attributes = [], s.keyframes = {}, s._allKeyframes = [], s._activeKeyframes = [], s.keyframesRequiringDispatch = [], s.updateCachedValuesFromElement(), s.boundsMin = 0, s.boundsMax = 0, s.mat2d = new Float32Array(6), s.mat4 = g.create(), s.needsWrite = !0, s.onDOMWriteImp = s._ownerIsElement ? s.onDOMWriteForElement : s.onDOMWriteForObject, s
        }
        return s(e, t), o(e, [{
          key: "destroy",
          value: function() {
            if (this.element._animInfo) {
              this.element._animInfo.controller === this && (this.element._animInfo.controller = null);
              var t = this.element._animInfo.controllers.indexOf(this);
              t !== -1 && this.element._animInfo.controllers.splice(t, 1), 0 === this.element._animInfo.controllers.length ? this.element._animInfo = null : (this.element._animInfo.controller = this.element._animInfo.controllers[this.element._animInfo.controllers.length - 1], this.element._animInfo.group = this.element._animInfo.controller.group)
            }
            this.eventObject.controller = null, this.eventObject.element = null, this.eventObject.keyframe = null, this.eventObject.tweenProps = null, this.eventObject = null, this.elementMetrics = null, this.group = null, this.keyframesRequiringDispatch = null;
            for (var i = 0; i < this._allKeyframes.length; i++) this._allKeyframes[i].destroy();
            this._allKeyframes = null, this._activeKeyframes = null, this.attributes = null, this.keyframes = null, this.element = null, this.tweenProps = null, a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this)
          }
        }, {
          key: "remove",
          value: function() {
            return this.group.removeKeyframeController(this)
          }
        }, {
          key: "updateCachedValuesFromElement",
          value: function() {
            if (this._ownerIsElement) {
              var t = getComputedStyle(this.element),
                e = d(this.element, !0),
                i = l.KeyframeDefaults.epsilon,
                n = !1;
              this.tweenProps.x = new l.TargetValue(e.translation[0], i, n), this.tweenProps.y = new l.TargetValue(e.translation[1], i, n), this.tweenProps.z = new l.TargetValue(e.translation[2], i, n), this.tweenProps.rotation = new l.TargetValue(e.eulerRotation[2], i, n), this.tweenProps.rotationX = new l.TargetValue(e.eulerRotation[0], i, n), this.tweenProps.rotationY = new l.TargetValue(e.eulerRotation[1], i, n), this.tweenProps.rotationZ = new l.TargetValue(e.eulerRotation[2], i, n), this.tweenProps.scale = new l.TargetValue(e.scale[0], i, n), this.tweenProps.scaleX = new l.TargetValue(e.scale[0], i, n), this.tweenProps.scaleY = new l.TargetValue(e.scale[1], i, n), this.tweenProps.opacity = new l.TargetValue(parseFloat(t.opacity), i, n)
            }
          }
        }, {
          key: "addKeyframe",
          value: function(t) {
            var e = u(t);
            if (!e) throw new Error("AnimSystem Cannot create keyframe for from options `" + t + "`");
            var i = new e(this, t);
            return i.parseOptions(t), i.id = this._allKeyframes.length, this._allKeyframes.push(i), i
          }
        }, {
          key: "needsUpdate",
          value: function() {
            for (var t = 0, e = this.attributes.length; t < e; t++) {
              var i = this.attributes[t],
                n = this.tweenProps[i],
                r = Math.abs(n.current - n.target);
              if (r > n.epsilon) return !0
            }
            return !1
          }
        }, {
          key: "updateLocalProgress",
          value: function(t) {
            for (var e = 0, i = this.attributes.length; e < i; e++) {
              var n = this.attributes[e],
                r = this.keyframes[this.attributes[e]];
              if (1 !== r.length) {
                var s = this.getNearestKeyframeForAttribute(n, t);
                s && s.updateLocalProgress(t)
              } else r[0].updateLocalProgress(t)
            }
          }
        }, {
          key: "reconcile",
          value: function() {
            for (var t = 0, e = this.attributes.length; t < e; t++) {
              var i = this.attributes[t],
                n = this.getNearestKeyframeForAttribute(i, this.group.position.local);
              n.updateLocalProgress(this.group.position.local), n.snapAtCreation && n.reconcile(i)
            }
          }
        }, {
          key: "determineActiveKeyframes",
          value: function(t) {
            var e = this;
            t = t || h(Array.from(document.documentElement.classList));
            var i = this._activeKeyframes,
              n = this.attributes;
            this._activeKeyframes = [], this.attributes = [], this.keyframes = {};
            for (var r = 0; r < this._allKeyframes.length; r++) {
              var s = this._allKeyframes[r];
              if (s.setEnabled(t)) {
                this._activeKeyframes.push(s);
                for (var o in s.animValues) this.keyframes[o] = this.keyframes[o] || [], this.keyframes[o].push(s), this.attributes.indexOf(o) === -1 && (this.attributes.push(o), this.tweenProps[o].isActive = !0)
              }
            }
            var a = i.filter(function(t) {
              return e._activeKeyframes.indexOf(t) === -1
            });
            if (0 !== a.length) {
              var l = n.filter(function(t) {
                return e.attributes.indexOf(t) === -1
              });
              if (0 !== l.length)
                if (this.needsWrite = !0, this._ownerIsElement) f.external(function() {
                  var t = ["x", "y", "z", "scale", "scaleX", "scaleY", "rotation", "rotationX", "rotationY", "rotationZ"],
                    i = l.filter(function(e) {
                      return t.indexOf(e) !== -1
                    });
                  i.length > 0 && e.element.style.removeProperty("transform");
                  for (var n = 0, r = l.length; n < r; ++n) {
                    var s = l[n],
                      o = e.tweenProps[s];
                    o.current = o.target = o.initialValue, o.isActive = !1, "opacity" === s && e.element.style.removeProperty("opacity")
                  }
                  for (var u = 0, h = a.length; u < h; ++u) {
                    var m = a[u];
                    m instanceof c && m._unapply()
                  }
                }, !0);
                else
                  for (var u = 0, m = l.length; u < m; ++u) {
                    var p = this.tweenProps[l[u]];
                    p.current = p.target = p.initialValue, p.isActive = !1
                  }
            }
          }
        }, {
          key: "onDOMRead",
          value: function(t) {
            for (var e = 0, i = this.attributes.length; e < i; e++) {
              var n = this.attributes[e];
              this.tweenProps[n].previousValue = this.tweenProps[n].current;
              var r = this.getNearestKeyframeForAttribute(n, t.local);
              r && r.onDOMRead(n), this.tweenProps[n].previousValue !== this.tweenProps[n].current && (this.needsWrite = !0)
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
            for (var t = 0, e = this.attributes.length; t < e; t++) {
              var i = this.attributes[t];
              this.element[i] = this.tweenProps[i].current
            }
          }
        }, {
          key: "onDOMWriteForElement",
          value: function() {
            var t = this.tweenProps;
            if (t.z.isActive || t.rotationX.isActive || t.rotationY.isActive) {
              var e = this.mat4;
              if (e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, t.x.isActive || t.y.isActive || t.z.isActive) {
                var i = t.x.current,
                  n = t.y.current,
                  r = t.z.current;
                e[12] = e[0] * i + e[4] * n + e[8] * r + e[12], e[13] = e[1] * i + e[5] * n + e[9] * r + e[13], e[14] = e[2] * i + e[6] * n + e[10] * r + e[14], e[15] = e[3] * i + e[7] * n + e[11] * r + e[15]
              }
              if (t.rotation.isActive || t.rotationZ.isActive) {
                var s = (t.rotation.current || t.rotationZ.current) * _;
                g.rotateZ(e, e, s)
              }
              if (t.rotationX.isActive) {
                var o = t.rotationX.current * _;
                g.rotateX(e, e, o)
              }
              if (t.rotationY.isActive) {
                var a = t.rotationY.current * _;
                g.rotateY(e, e, a)
              }(t.scale.isActive || t.scaleX.isActive || t.scaleY.isActive) && g.scale(e, e, [t.scale.current, t.scale.current, 1]), this.element.style.transform = "matrix3d(" + e[0] + "," + e[1] + "," + e[2] + "," + e[3] + "," + e[4] + "," + e[5] + "," + e[6] + "," + e[7] + "," + e[8] + "," + e[9] + "," + e[10] + "," + e[11] + "," + e[12] + "," + e[13] + "," + e[14] + "," + e[15] + ")"
            } else if (t.x.isActive || t.y.isActive || t.rotation.isActive || t.rotationZ.isActive || t.scale.isActive || t.scaleX.isActive || t.scaleY.isActive) {
              var l = this.mat2d;
              if (l[0] = 1, l[1] = 0, l[2] = 0, l[3] = 1, l[4] = 0, l[5] = 0, t.x.isActive || t.y.isActive) {
                var c = t.x.current,
                  u = t.y.current,
                  h = l[0],
                  m = l[1],
                  p = l[2],
                  d = l[3],
                  f = l[4],
                  y = l[5];
                l[0] = h, l[1] = m, l[2] = p, l[3] = d, l[4] = h * c + p * u + f, l[5] = m * c + d * u + y
              }
              if (t.rotation.isActive || t.rotationZ.isActive) {
                var v = (t.rotation.current || t.rotationZ.current) * _,
                  b = l[0],
                  E = l[1],
                  w = l[2],
                  T = l[3],
                  S = l[4],
                  C = l[5],
                  A = Math.sin(v),
                  O = Math.cos(v);
                l[0] = b * O + w * A, l[1] = E * O + T * A, l[2] = b * -A + w * O, l[3] = E * -A + T * O, l[4] = S, l[5] = C
              }
              t.scale.isActive ? (l[0] = l[0] * t.scale.current, l[1] = l[1] * t.scale.current, l[2] = l[2] * t.scale.current, l[3] = l[3] * t.scale.current, l[4] = l[4], l[5] = l[5]) : (t.scaleX.isActive || t.scaleY.isActive) && (l[0] = l[0] * t.scaleX.current, l[1] = l[1] * t.scaleX.current, l[2] = l[2] * t.scaleY.current, l[3] = l[3] * t.scaleY.current, l[4] = l[4], l[5] = l[5]), this.element.style.transform = "matrix(" + l[0] + ", " + l[1] + ", " + l[2] + ", " + l[3] + ", " + l[4] + ", " + l[5] + ")"
            }
            if (t.opacity.isActive && (this.element.style.opacity = t.opacity.current), this.needsStyleUpdate) {
              for (var x in this.tweenProps.targetStyles) null !== this.tweenProps.targetStyles[x] && (this.element.style[x] = this.tweenProps.targetStyles[x]), this.tweenProps.targetStyles[x] = null;
              this.needsStyleUpdate = !1
            }
            this.needsClassUpdate && (this.tweenProps.targetClasses.add.length > 0 && this.element.classList.add.apply(this.element.classList, this.tweenProps.targetClasses.add), this.tweenProps.targetClasses.remove.length > 0 && this.element.classList.remove.apply(this.element.classList, this.tweenProps.targetClasses.remove), this.tweenProps.targetClasses.add.length = 0, this.tweenProps.targetClasses.remove.length = 0, this.needsClassUpdate = !1)
          }
        }, {
          key: "handleEventDispatch",
          value: function() {
            if (0 !== this.keyframesRequiringDispatch.length) {
              for (var t = 0, e = this.keyframesRequiringDispatch.length; t < e; t++) {
                var i = this.keyframesRequiringDispatch[t];
                i.needsEventDispatch = !1, this.eventObject.keyframe = i, this.eventObject.pageMetrics = l.pageMetrics, this.eventObject.event = i.event, this.trigger(i.event, this.eventObject)
              }
              this.keyframesRequiringDispatch.length = 0
            }
            this.eventObject.keyframe = null, this.eventObject.event = "draw", this.trigger("draw", this.eventObject)
          }
        }, {
          key: "updateAnimationConstraints",
          value: function() {
            for (var t = this, e = 0, i = this._activeKeyframes.length; e < i; e++) this._activeKeyframes[e].updateAnimationConstraints();
            this.attributes.forEach(function(e) {
              1 !== t.keyframes[e].length && t.keyframes[e].sort(l.KeyframeComparison)
            }), this.updateDeferredPropertyValues()
          }
        }, {
          key: "refreshMetrics",
          value: function() {
            var t = new Set([this.element]);
            this._allKeyframes.forEach(function(e) {
              return e.anchors.forEach(function(e) {
                return t.add(e)
              })
            }), this.group.metrics.refreshCollection(t), this.group.keyframesDirty = !0
          }
        }, {
          key: "updateDeferredPropertyValues",
          value: function() {
            for (var t = 0, e = this.attributes.length; t < e; t++) {
              var i = this.attributes[t],
                n = this.keyframes[i],
                r = n[0];
              if (!(r.keyframeType > l.KeyframeTypes.InterpolationForward))
                for (var s = 0, o = n.length; s < o; s++) {
                  var a = n[s];
                  if (null === a.jsonProps[i][0]) {
                    if (0 === s) {
                      a.animValues[i][0] = this.tweenProps[i].initialValue;
                      continue
                    }
                    a.animValues[i][0] = n[s - 1].animValues[i][1]
                  }
                  if (null === a.jsonProps[i][1]) {
                    if (s === o - 1) throw new RangeError("AnimSystem - last keyframe cannot defer it's end value! " + i + ":[" + a.jsonProps[i][0] + ",null]");
                    a.animValues[i][1] = n[s + 1].animValues[i][0]
                  }
                }
            }
          }
        }, {
          key: "getBounds",
          value: function(t) {
            this.boundsMin = Number.MAX_VALUE, this.boundsMax = -Number.MAX_VALUE;
            for (var e = 0, i = this.attributes.length; e < i; e++)
              for (var n = this.keyframes[this.attributes[e]], r = 0; r < n.length; r++) {
                var s = n[r];
                this.boundsMin = Math.min(s.start, this.boundsMin), this.boundsMax = Math.max(s.end, this.boundsMax), t.min = Math.min(s.start, t.min), t.max = Math.max(s.end, t.max)
              }
          }
        }, {
          key: "getNearestKeyframeForAttribute",
          value: function(t, e) {
            e = void 0 !== e ? e : this.group.lastPosition;
            var i = null,
              n = Number.POSITIVE_INFINITY,
              r = this.keyframes[t];
            if (void 0 === r) return null;
            var s = r.length;
            if (0 === s) return null;
            if (1 === s) return r[0];
            for (var o = 0; o < s; o++) {
              var a = r[o];
              if (a.isInRange(e)) {
                i = a;
                break
              }
              var l = Math.min(Math.abs(e - a.start), Math.abs(e - a.end));
              l < n && (n = l, i = a)
            }
            return i
          }
        }, {
          key: "getAllKeyframesForAttribute",
          value: function(t) {
            return this.keyframes[t]
          }
        }, {
          key: "updateKeyframe",
          value: function(t, e) {
            var i = this;
            t.parseOptions(e), t.updateAnimationConstraints(), this.group.keyframesDirty = !0, f.update(function() {
              i.trigger(l.EVENTS.ON_KEYFRAME_UPDATED, t), i.group.trigger(l.EVENTS.ON_KEYFRAME_UPDATED, t)
            }, !0)
          }
        }, {
          key: "removeKeyframe",
          value: function(t) {
            var e = this,
              i = this._allKeyframes.indexOf(t);
            return i === -1 ? Promise.resolve(null) : (this._allKeyframes.splice(i, 1), this.group.keyframesDirty = !0, new Promise(function(i) {
              e.group.rafEmitter.executor.eventEmitter.once("before:draw", function() {
                return i(t)
              })
            }))
          }
        }, {
          key: "updateAnimation",
          value: function(t, e) {
            return this.group.gui && console.warn("KeyframeController.updateAnimation(keyframe,props) has been deprecated. Please use updateKeyframe(keyframe,props)"), this.updateKeyframe(t, e)
          }
        }]), e
      }(p);
    e.exports = y
  }, {
    "../Model/AnimSystemModel": 218,
    "../Model/InferKeyframeFromProps": 221,
    "../Model/UUID": 222,
    "../utils/arrayToObject": 229,
    "./Keyframe": 214,
    "./KeyframeCSSClass": 215,
    "@marcom/ac-event-emitter-micro": 116,
    "@marcom/ac-raf-emitter/draw": 186,
    "@marcom/ac-raf-emitter/external": 187,
    "@marcom/ac-raf-emitter/update": 190,
    "@marcom/decompose-css-transform": 233,
    "gl-mat4/create": 246,
    "gl-mat4/rotateX": 252,
    "gl-mat4/rotateY": 253,
    "gl-mat4/rotateZ": 254,
    "gl-mat4/scale": 255
  }],
  217: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      a = function h(t, e, i) {
        null === t && (t = Function.prototype);
        var n = Object.getOwnPropertyDescriptor(t, e);
        if (void 0 === n) {
          var r = Object.getPrototypeOf(t);
          return null === r ? void 0 : h(r, e, i)
        }
        if ("value" in n) return n.value;
        var s = n.get;
        if (void 0 !== s) return s.call(i)
      },
      l = t("./Keyframe"),
      c = t("../Model/AnimSystemModel.js"),
      u = function(t) {
        function e(t, i) {
          n(this, e);
          var s = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
          return s.keyframeType = c.KeyframeTypes.Event, s.isApplied = !1, s.hasDuration = !1, s.isCurrentlyInRange = !1, s
        }
        return s(e, t), o(e, [{
          key: "parseOptions",
          value: function(t) {
            t.x = void 0, t.y = void 0, t.scale = void 0, t.scaleX = void 0, t.scaleY = void 0, t.rotation = void 0, t.style = void 0, t.cssClass = void 0, t.rotation = void 0, t.opacity = void 0, t.hold = void 0, void 0 === t.end && (t.end = t.start), this.event = t.event, this.animValues[this.event] = [0, 0], "undefined" == typeof this.controller.tweenProps[this.event] && (this.controller.tweenProps[this.event] = new c.TargetValue(0, 1, (!1))), a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "parseOptions", this).call(this, t), this.keyframeType = c.KeyframeTypes.Event
          }
        }, {
          key: "updateLocalProgress",
          value: function(t) {
            if (this.hasDuration) {
              var e = this.isCurrentlyInRange,
                i = t >= this.start && t <= this.end;
              if (e === i) return;
              return this.isCurrentlyInRange = i, void(i && !e ? this._trigger(this.event + ":enter") : e && !i && this._trigger(this.event + ":exit"))
            }!this.isApplied && t >= this.start ? (this.isApplied = !0, this._trigger(this.event)) : this.isApplied && t < this.start && (this.isApplied = !1, this._trigger(this.event + ":reverse"))
          }
        }, {
          key: "_trigger",
          value: function(t) {
            this.controller.eventObject.event = t, this.controller.eventObject.keyframe = this, this.controller.trigger(t, this.controller.eventObject)
          }
        }, {
          key: "updateAnimationConstraints",
          value: function() {
            a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateAnimationConstraints", this).call(this), this.hasDuration = this.start !== this.end
          }
        }, {
          key: "reset",
          value: function(t) {
            this.isApplied = !1, this.isCurrentlyInRange = !1, a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "reset", this).call(this, t)
          }
        }, {
          key: "onDOMRead",
          value: function(t, e) {}
        }, {
          key: "reconcile",
          value: function(t, e) {}
        }, {
          key: "updateAnimatedValueConstraints",
          value: function() {}
        }]), e
      }(l);
    u.DATA_ATTRIBUTE = "data-anim-event", e.exports = u
  }, {
    "../Model/AnimSystemModel.js": 218,
    "./Keyframe": 214
  }],
  218: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var r = {
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
        for (var t = 0; t < r.BREAKPOINTS.length; t++) {
          var e = r.BREAKPOINTS[t],
            i = window.matchMedia(e.mediaQuery);
          if (i.matches) return e.name
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
      TweenProps: function s() {
        n(this, s)
      },
      TargetValue: function o(t, e, i) {
        n(this, o), this.epsilon = parseFloat(e), this.snapAtCreation = i, this.initialValue = t, this.target = t, this.current = t, this.previousValue = t, this.isActive = !1
      },
      AnimInfo: function(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
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
    e.exports = r
  }, {}],
  219: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var r = function s() {
      n(this, s), this.linear = function(t) {
        return t
      }, this.easeInQuad = function(t) {
        return t * t
      }, this.easeOutQuad = function(t) {
        return t * (2 - t)
      }, this.easeInOutQuad = function(t) {
        return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
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
        return t -= 1, t * t * (2.70158 * t + 1.70158) + 1
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
    };
    e.exports = new r
  }, {}],
  220: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var r = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      s = t("./AnimSystemModel"),
      o = function(t, e) {
        return void 0 === t || null === t ? e : t
      },
      a = function() {
        function t() {
          n(this, t), this._metrics = new WeakMap
        }
        return r(t, [{
          key: "destroy",
          value: function() {
            this._metrics = null
          }
        }, {
          key: "add",
          value: function(t) {
            var e = this._metrics.get(t);
            if (e) return e;
            var i = new l(t);
            return this._metrics.set(t, i), this._refreshMetrics(t, i)
          }
        }, {
          key: "get",
          value: function(t) {
            return this._metrics.get(t)
          }
        }, {
          key: "refreshCollection",
          value: function(t) {
            var e = this;
            t.forEach(function(t) {
              return e._refreshMetrics(t, null)
            })
          }
        }, {
          key: "refreshMetrics",
          value: function(t) {
            return this._refreshMetrics(t)
          }
        }, {
          key: "_refreshMetrics",
          value: function(t, e) {
            if (e = e || this._metrics.get(t), !(t instanceof Element)) return e.width = o(t.width, 0), e.height = o(t.height, 0), e.top = o(t.top, 0), e.left = o(t.left, 0), e.right = e.left + e.width, e.bottom = e.top + e.height, e;
            if (void 0 === t.offsetWidth) {
              var i = t.getBoundingClientRect();
              return e.width = i.width, e.height = i.height, e.top = s.pageMetrics.scrollY + i.top, e.left = s.pageMetrics.scrollX + i.left, e.right = e.left + e.width, e.bottom = e.top + e.height, e
            }
            e.width = t.offsetWidth, e.height = t.offsetHeight, e.top = s.pageMetrics.documentOffsetY, e.left = s.pageMetrics.documentOffsetX;
            for (var n = t; n;) e.top += n.offsetTop, e.left += n.offsetLeft, n = n.offsetParent;
            return e.right = e.left + e.width, e.bottom = e.top + e.height, e
          }
        }]), t
      }(),
      l = function() {
        function t(e) {
          n(this, t), this.top = 0, this.bottom = 0, this.left = 0, this.right = 0, this.height = 0, this.width = 0
        }
        return r(t, [{
          key: "toString",
          value: function() {
            return "top:" + this.top + ", bottom:" + this.bottom + ", left:" + this.left + ", right:" + this.right + ", height:" + this.height + ", width:" + this.width
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
        }]), t
      }();
    e.exports = a
  }, {
    "./AnimSystemModel": 218
  }],
  221: [function(t, e, i) {
    "use strict";
    var n = t("./AnimSystemModel"),
      r = t("../Keyframes/Keyframe"),
      s = t("../Keyframes/KeyframeDiscreteEvent"),
      o = t("../Keyframes/KeyframeCSSClass"),
      a = function(t) {
        for (var e in t) {
          var i = t[e];
          if (n.KeyframeJSONReservedWords.indexOf(e) === -1 && Array.isArray(i)) return !0
        }
        return !1
      };
    e.exports = function(t) {
      if (void 0 !== t.cssClass || void 0 !== t.style) {
        if (a(t)) throw "CSS Keyframes cannot tween values, please use multiple keyframes instead";
        return o
      }
      if (a(t)) return r;
      if (t.event) return s;
      throw delete t.anchors, "Could not determine tween type based on " + JSON.stringify(t)
    }
  }, {
    "../Keyframes/Keyframe": 214,
    "../Keyframes/KeyframeCSSClass": 215,
    "../Keyframes/KeyframeDiscreteEvent": 217,
    "./AnimSystemModel": 218
  }],
  222: [function(t, e, i) {
    "use strict";
    e.exports = function() {
      for (var t = "", e = 0; e < 8; e++) {
        var i = 16 * Math.random() | 0;
        8 !== e && 12 !== e && 16 !== e && 20 !== e || (t += "-"), t += (12 === e ? 4 : 16 === e ? 3 & i | 8 : i).toString(16)
      }
      return t
    }
  }, {}],
  223: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var r = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      s = 1e-5,
      o = Math.abs,
      a = 5,
      l = function() {
        function t(e, i, r, s) {
          n(this, t), this.cp = new Float32Array(6), this.cp[0] = 3 * e, this.cp[1] = 3 * (r - e) - this.cp[0], this.cp[2] = 1 - this.cp[0] - this.cp[1], this.cp[3] = 3 * i, this.cp[4] = 3 * (s - i) - this.cp[3], this.cp[5] = 1 - this.cp[3] - this.cp[4]
        }
        return r(t, [{
          key: "sampleCurveX",
          value: function(t) {
            return ((this.cp[2] * t + this.cp[1]) * t + this.cp[0]) * t
          }
        }, {
          key: "sampleCurveY",
          value: function(t) {
            return ((this.cp[5] * t + this.cp[4]) * t + this.cp[3]) * t
          }
        }, {
          key: "sampleCurveDerivativeX",
          value: function(t) {
            return (3 * this.cp[2] * t + 2 * this.cp[1]) * t + this.cp[0]
          }
        }, {
          key: "solveCurveX",
          value: function(t) {
            var e, i, n, r, l, c;
            for (n = t, c = 0; c < a; c++) {
              if (r = this.sampleCurveX(n) - t, o(r) < s) return n;
              if (l = this.sampleCurveDerivativeX(n), o(l) < s) break;
              n -= r / l
            }
            if (e = 0, i = 1, n = t, n < e) return e;
            if (n > i) return i;
            for (; e < i;) {
              if (r = this.sampleCurveX(n), o(r - t) < s) return n;
              t > r ? e = n : i = n, n = .5 * (i - e) + e
            }
            return n
          }
        }, {
          key: "solve",
          value: function(t) {
            return this.sampleCurveY(this.solveCurveX(t))
          }
        }]), t
      }(),
      c = /\d*\.?\d+/g;
    l.fromCSSString = function(t) {
      var e = t.match(c);
      if (4 !== e.length) throw "UnitBezier could not convert " + t + " to cubic-bezier";
      var i = e.map(Number),
        n = new l(i[0], i[1], i[2], i[3]);
      return n.solve.bind(n)
    }, e.exports = l
  }, {}],
  224: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var r = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      s = t("./Interpreter"),
      o = new(t("../Model/ElementMetricsLookup")),
      a = {},
      l = function() {
        function t(e) {
          n(this, t), this.group = e, this.data = {
            target: null,
            anchors: null,
            metrics: this.group.metrics
          }
        }
        return r(t, [{
          key: "parseArray",
          value: function(t, e) {
            return [this.parseExpression(t, e[0]), this.parseExpression(t, e[1])]
          }
        }, {
          key: "parseExpression",
          value: function(e, i) {
            return i ? "number" == typeof i ? i : (this.data.target = e.controller.element, this.data.anchors = e.anchors, this.data.keyframe = e.keyframe, t._parse(i, this.data)) : null
          }
        }, {
          key: "destroy",
          value: function() {
            this.group = null
          }
        }], [{
          key: "_parse",
          value: function(t, e) {
            var i = a[t] || (a[t] = s.Parse(t, e));
            return i.execute(e)
          }
        }, {
          key: "parse",
          value: function(e, i) {
            return i = i || {}, i && (i.target && o.add(i.target), i.anchors && i.anchors.forEach(function(t) {
              return o.add(t)
            })), i.metrics = o, t._parse(e, i)
          }
        }]), t
      }();
    window.ExpressionParser = l, l.programs = a, e.exports = l
  }, {
    "../Model/ElementMetricsLookup": 220,
    "./Interpreter": 225
  }],
  225: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function s(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      a = t("../Model/AnimSystemModel"),
      l = t("@marcom/sm-math-utils"),
      c = {
        smoothstep: function(t, e, i) {
          return i = c.clamp((i - t) / (e - t), 0, 1), i * i * (3 - 2 * i)
        },
        deg: function(t) {
          return 180 * t / Math.PI
        },
        rad: function(t) {
          return t * Math.PI / 180
        },
        random: function(t, e) {
          return Math.random() * (e - t) + t
        },
        atan: Math.atan2
      };
    Object.getOwnPropertyNames(Math).forEach(function(t) {
      return c[t] ? null : c[t.toLowerCase()] = Math[t]
    }), Object.getOwnPropertyNames(l).forEach(function(t) {
      return c[t] ? null : c[t.toLowerCase()] = l[t]
    });
    var u = null,
      h = {
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
        MATH_FUNCTION: new RegExp("\\b(" + Object.keys(c).join("|") + ")\\b", "i")
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
        pow: 2
      },
      d = function A(t, e) {
        s(this, A), this.type = t, this.value = e
      };
    d.ONE = new d("100", 100), d.EOF = new d(h.EOF, null);
    var f = function O(t) {
        s(this, O), this.type = t
      },
      _ = function(t) {
        function e(t, i) {
          s(this, e);
          var r = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, "UnaryOp"));
          return r.token = r.op = t, r.expr = i, r
        }
        return r(e, t), e
      }(f),
      g = function(t) {
        function e(t, i, r) {
          s(this, e);
          var o = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, "BinOp"));
          return o.left = t, o.op = i, o.right = r, o
        }
        return r(e, t), e
      }(f),
      y = function(t) {
        function e(t, i) {
          s(this, e);
          var r = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, "MathOp"));
          if (r.op = t, r.list = i, p[t.value] && i.length !== p[t.value]) throw new Error("Incorrect number of arguments for '" + t.value + "'. Received " + i.length + ", expected " + p[t.value]);
          return r
        }
        return r(e, t), e
      }(f),
      v = function(t) {
        function e(t) {
          s(this, e);
          var i = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, "Num"));
          return i.token = t, i.value = t.value, i
        }
        return r(e, t), e
      }(f),
      b = (function(t) {
        function e(t) {
          s(this, e);
          var i = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, "Unit"));
          return i.token = t, i.value = t.value, i
        }
        return r(e, t), e
      }(f), function(t) {
        function e(t, i, r) {
          s(this, e);
          var o = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, "RefValue"));
          return o.num = t, o.ref = i, o.unit = r, o
        }
        return r(e, t), e
      }(f)),
      E = function(t) {
        function e(t, i) {
          s(this, e);
          var r = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, "CSSValue"));
          return r.ref = t, r.propertyName = i, r
        }
        return r(e, t), e
      }(f),
      w = function(t) {
        function e(t, i) {
          s(this, e);
          var r = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, "PropValue"));
          return r.ref = t, r.propertyName = i, r
        }
        return r(e, t), e
      }(f),
      T = function() {
        function t(e) {
          s(this, t), this.text = e, this.pos = 0, this["char"] = this.text[this.pos], this.tokens = [];
          for (var i = void 0;
            (i = this.getNextToken()) && i !== d.EOF;) this.tokens.push(i);
          this.tokens.push(i)
        }
        return o(t, [{
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
            for (var t = ""; null != this["char"] && m.ALPHA.test(this["char"]);) t += this["char"], this.advance();
            return new d(h.ALPHA, t)
          }
        }, {
          key: "number",
          value: function() {
            for (var t = ""; null != this["char"] && m.DIGIT.test(this["char"]);) t += this["char"], this.advance();
            if (null != this["char"] && "." === this["char"]) {
              for (t += this["char"], this.advance(); null != this["char"] && m.DIGIT.test(this["char"]);) t += this["char"], this.advance();
              return new d(h.FLOAT_CONST, parseFloat(t))
            }
            return new d(h.INTEGER_CONST, parseInt(t))
          }
        }, {
          key: "getNextToken",
          value: function() {
            for (; null != this["char"];)
              if (m.WHITE_SPACE.test(this["char"])) this.skipWhiteSpace();
              else {
                if (m.DIGIT.test(this["char"])) return this.number();
                if ("," === this["char"]) return this.advance(), new d(h.COMMA, ",");
                if (m.OPERATOR.test(this["char"])) {
                  var t = "",
                    e = this["char"];
                  switch (e) {
                    case "+":
                      t = h.PLUS;
                      break;
                    case "-":
                      t = h.MINUS;
                      break;
                    case "*":
                      t = h.MUL;
                      break;
                    case "/":
                      t = h.DIV
                  }
                  return this.advance(), new d(t, e)
                }
                if (m.PAREN.test(this["char"])) {
                  var i = "",
                    n = this["char"];
                  switch (n) {
                    case "(":
                      i = h.LPAREN;
                      break;
                    case ")":
                      i = h.RPAREN
                  }
                  return this.advance(), new d(i, n)
                }
                if (m.ALPHA.test(this["char"])) return this.name();
                this.error("Unexpected character " + this["char"])
              } return d.EOF
          }
        }]), t
      }(),
      S = function() {
        function t(e) {
          s(this, t), this.lexer = e, this.pos = 0
        }
        return o(t, [{
          key: "error",
          value: function e(t) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              n = this.lexer.text.slice(this.pos - 3, this.pos + 3),
              e = new Error(t + ' in "' + this.lexer.text + '" near "' + n + '". ' + i + " ");
            throw console.error(e.message, u.keyframe || u.target), e
          }
        }, {
          key: "consume",
          value: function(t) {
            var e = this.currentToken;
            return e.type === t ? this.pos += 1 : this.error("Invalid token " + this.currentToken.value + ", expected " + t), e
          }
        }, {
          key: "consumeList",
          value: function(t) {
            t.includes(this.currentToken) ? this.pos += 1 : this.error("Invalid token " + this.currentToken.value + ", expected " + tokenType)
          }
        }, {
          key: "expr",
          value: function() {
            for (var t = this.term(); this.currentToken.type === h.PLUS || this.currentToken.type === h.MINUS;) {
              var e = this.currentToken;
              switch (e.value) {
                case "+":
                  this.consume(h.PLUS);
                  break;
                case "-":
                  this.consume(h.MINUS)
              }
              t = new g(t, e, this.term())
            }
            return t
          }
        }, {
          key: "term",
          value: function() {
            for (var t = this.factor(); this.currentToken.type === h.MUL || this.currentToken.type === h.DIV;) {
              var e = this.currentToken;
              switch (e.value) {
                case "*":
                  this.consume(h.MUL);
                  break;
                case "/":
                  this.consume(h.DIV)
              }
              t = new g(t, e, this.factor())
            }
            return t
          }
        }, {
          key: "factor",
          value: function() {
            if (this.currentToken.type === h.PLUS) return new _(this.consume(h.PLUS), this.factor());
            if (this.currentToken.type === h.MINUS) return new _(this.consume(h.MINUS), this.factor());
            if (this.currentToken.type === h.INTEGER_CONST || this.currentToken.type === h.FLOAT_CONST) {
              var t = new v(this.currentToken);
              if (this.pos += 1, m.OPERATOR.test(this.currentToken.value) || this.currentToken.type === h.RPAREN || this.currentToken.type === h.COMMA || this.currentToken.type === h.EOF) return t;
              if (this.currentToken.type === h.ALPHA && this.currentToken.value === h.ANCHOR_CONST) return this.consume(h.ALPHA), new b(t, this.anchorIndex(), this.unit(m.ANY_UNIT));
              if (this.currentToken.type === h.ALPHA) return "%a" === this.currentToken.value && this.error("%a is invalid, try removing the %"), new b(t, null, this.unit());
              this.error("Expected a scaling unit type", "Such as 'h' / 'w'")
            } else {
              if (m.OBJECT_UNIT.test(this.currentToken.value)) return new b(new v(d.ONE), null, this.unit());
              if (this.currentToken.value === h.ANCHOR_CONST) {
                this.consume(h.ALPHA);
                var e = this.anchorIndex();
                if (m.OBJECT_UNIT.test(this.currentToken.value)) return new b(new v(d.ONE), e, this.unit())
              } else if (this.currentToken.type === h.ALPHA) {
                if ("css" === this.currentToken.value || "prop" === this.currentToken.value) {
                  var i = "css" === this.currentToken.value ? E : w;
                  this.consume(h.ALPHA), this.consume(h.LPAREN);
                  var n = this.propertyName(),
                    r = null;
                  return this.currentToken.type === h.COMMA && (this.consume(h.COMMA), this.consume(h.ALPHA), r = this.anchorIndex()), this.consume(h.RPAREN), new i(r, n)
                }
                if (m.MATH_FUNCTION.test(this.currentToken.value)) {
                  var s = this.currentToken.value.toLowerCase();
                  if ("number" == typeof c[s]) return this.consume(h.ALPHA), new v(new d(h.ALPHA, c[s]));
                  var o = d[s] || new d(s, s),
                    a = [];
                  this.consume(h.ALPHA), this.consume(h.LPAREN);
                  var l = null;
                  do this.currentToken.value === h.COMMA && this.consume(h.COMMA), l = this.expr(), a.push(l); while (this.currentToken.value === h.COMMA);
                  return this.consume(h.RPAREN), new y(o, a)
                }
              } else if (this.currentToken.type === h.LPAREN) {
                this.consume(h.LPAREN);
                var u = this.expr();
                return this.consume(h.RPAREN), u
              }
            }
            this.error("Unexpected token " + this.currentToken.value)
          }
        }, {
          key: "propertyName",
          value: function() {
            for (var t = ""; this.currentToken.type === h.ALPHA || this.currentToken.type === h.MINUS;) t += this.currentToken.value, this.pos += 1;
            return t
          }
        }, {
          key: "unit",
          value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.ANY_UNIT,
              e = this.currentToken;
            return e.type === h.ALPHA && t.test(e.value) ? (this.consume(h.ALPHA), new d(h.ALPHA, e.value = e.value.replace(/%(h|w)/, "$1").replace("%", "h"))) : void this.error("Expected unit type")
          }
        }, {
          key: "anchorIndex",
          value: function() {
            var t = this.currentToken;
            return t.type === h.INTEGER_CONST ? (this.consume(h.INTEGER_CONST), new v(t)) : void this.error("Invalid anchor reference", ". Should be something like a0, a1, a2")
          }
        }, {
          key: "parse",
          value: function() {
            var t = this.expr();
            return this.currentToken !== d.EOF && this.error("Unexpected token " + this.currentToken.value), t
          }
        }, {
          key: "currentToken",
          get: function() {
            return this.lexer.tokens[this.pos]
          }
        }]), t
      }(),
      C = function() {
        function t(e) {
          s(this, t), this.parser = e, this.root = e.parse()
        }
        return o(t, [{
          key: "visit",
          value: function(t) {
            var e = this[t.type];
            if (!e) throw new Error("No visit method named, " + e);
            var i = e.call(this, t);
            return i
          }
        }, {
          key: "BinOp",
          value: function(t) {
            switch (t.op.type) {
              case h.PLUS:
                return this.visit(t.left) + this.visit(t.right);
              case h.MINUS:
                return this.visit(t.left) - this.visit(t.right);
              case h.MUL:
                return this.visit(t.left) * this.visit(t.right);
              case h.DIV:
                return this.visit(t.left) / this.visit(t.right)
            }
          }
        }, {
          key: "RefValue",
          value: function(t) {
            var e = this.unwrapReference(t),
              i = t.unit.value,
              n = t.num.value,
              r = u.metrics.get(e);
            switch (i) {
              case "h":
                return .01 * n * r.height;
              case "t":
                return .01 * n * r.top;
              case "vh":
                return .01 * n * a.pageMetrics.windowHeight;
              case "vw":
                return .01 * n * a.pageMetrics.windowWidth;
              case "px":
                return n;
              case "w":
                return .01 * n * r.width;
              case "b":
                return .01 * n * r.bottom;
              case "l":
                return .01 * n * r.left;
              case "r":
                return .01 * n * r.right
            }
          }
        }, {
          key: "PropValue",
          value: function(t) {
            var e = null === t.ref ? u.target : u.anchors[t.ref.value];
            return e[t.propertyName]
          }
        }, {
          key: "CSSValue",
          value: function(t) {
            var e = this.unwrapReference(t);
            return parseFloat(getComputedStyle(e).getPropertyValue(t.propertyName))
          }
        }, {
          key: "Num",
          value: function(t) {
            return t.value
          }
        }, {
          key: "UnaryOp",
          value: function(t) {
            return t.op.type === h.PLUS ? +this.visit(t.expr) : t.op.type === h.MINUS ? -this.visit(t.expr) : void 0
          }
        }, {
          key: "MathOp",
          value: function(t) {
            var e = this,
              i = t.list.map(function(t) {
                return e.visit(t)
              });
            return c[t.op.value].apply(null, i)
          }
        }, {
          key: "unwrapReference",
          value: function(t) {
            return null === t.ref ? u.target : (t.ref.value >= u.anchors.length && console.error("Not enough anchors supplied for expression " + this.parser.lexer.text, u.target), u.anchors[t.ref.value])
          }
        }, {
          key: "execute",
          value: function(t) {
            return u = t, this.visit(this.root)
          }
        }], [{
          key: "Parse",
          value: function(e) {
            return new t(new S(new T(e)))
          }
        }]), t
      }();
    e.exports = C
  }, {
    "../Model/AnimSystemModel": 218,
    "@marcom/sm-math-utils": 238
  }],
  226: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var r = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      s = function() {
        function t(e) {
          n(this, t), this.group = e
        }
        return r(t, [{
          key: "parse",
          value: function(t, e) {
            if ("number" == typeof e) return e;
            var i = this.group.expressionParser.parseExpression(t, e);
            return this.group.convertScrollPositionToTValue(i)
          }
        }, {
          key: "destroy",
          value: function() {
            this.group = null
          }
        }]), t
      }();
    e.exports = s
  }, {}],
  227: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      a = function y(t, e, i) {
        null === t && (t = Function.prototype);
        var n = Object.getOwnPropertyDescriptor(t, e);
        if (void 0 === n) {
          var r = Object.getPrototypeOf(t);
          return null === r ? void 0 : y(r, e, i)
        }
        if ("value" in n) return n.value;
        var s = n.get;
        if (void 0 !== s) return s.call(i)
      },
      l = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      c = t("@marcom/sm-math-utils"),
      u = t("./utils/arrayToObject"),
      h = t("./Model/AnimSystemModel"),
      m = t("./Model/ElementMetricsLookup"),
      p = t("./Parsing/ExpressionParser"),
      d = t("./Parsing/TimeParser"),
      f = t("./Keyframes/KeyframeController"),
      _ = {
        create: t("@marcom/ac-raf-emitter/RAFEmitter"),
        update: t("@marcom/ac-raf-emitter/update"),
        draw: t("@marcom/ac-raf-emitter/draw")
      },
      g = function(t) {
        function e(t, i) {
          n(this, e);
          var s = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return s.anim = i, s.element = t, s.name = s.name || t.getAttribute("data-anim-scroll-group"), s.isEnabled = !0, s.position = new h.Progress, s.metrics = new m, s.metrics.add(s.element), s.expressionParser = new p(s), s.timeParser = new d(s), s.boundsMin = 0, s.boundsMax = 0, s.timelineUpdateRequired = !1, s._keyframesDirty = !1, s.viewableRange = s.createViewableRange(), s.defaultEase = h.KeyframeDefaults.ease, s.keyframeControllers = [], s.updateProgress(s.getPosition()), s.onDOMRead = s.onDOMRead.bind(s), s.onDOMWrite = s.onDOMWrite.bind(s), s.gui = null, s.finalizeInit(), s
        }
        return s(e, t), o(e, [{
          key: "finalizeInit",
          value: function() {
            this.element._animInfo = new h.AnimInfo(this, null, (!0)), this.setupRAFEmitter()
          }
        }, {
          key: "destroy",
          value: function() {
            this.expressionParser.destroy(), this.expressionParser = null, this.timeParser.destroy(), this.timeParser = null;
            for (var t = 0, i = this.keyframeControllers.length; t < i; t++) this.keyframeControllers[t].destroy();
            this.keyframeControllers = null, this.position = null, this.viewableRange = null, this.gui && (this.gui.destroy(), this.gui = null), this.metrics.destroy(), this.metrics = null, this.rafEmitter.destroy(), this.rafEmitter = null, this.anim = null, this.element._animInfo && this.element._animInfo.group === this && (this.element._animInfo.group = null, this.element._animInfo = null), this.element = null, this.isEnabled = !1, a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this)
          }
        }, {
          key: "removeKeyframeController",
          value: function(t) {
            var e = this;
            if (!this.keyframeControllers.includes(t)) return Promise.resolve();
            var i = t._allKeyframes;
            return t._allKeyframes = [], this.keyframesDirty = !0, new Promise(function(n) {
              _.draw(function() {
                var r = e.keyframeControllers.indexOf(t);
                return r === -1 ? void n() : (e.keyframeControllers.splice(r, 1), t.onDOMWrite(), i.forEach(function(t) {
                  return t.destroy()
                }), t.destroy(), e.gui && e.gui.create(), void n())
              }, !0)
            })
          }
        }, {
          key: "remove",
          value: function() {
            return this.anim.removeGroup(this)
          }
        }, {
          key: "setupRAFEmitter",
          value: function(t) {
            var e = this;
            this.rafEmitter && this.rafEmitter.destroy(), this.rafEmitter = t || new _.create, this.rafEmitter.on("update", this.onDOMRead), this.rafEmitter.on("draw", this.onDOMWrite), this.rafEmitter.once("external", function() {
              return e.reconcile()
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
            for (var t = 0, e = this.keyframeControllers.length; t < e; t++) this.keyframeControllers[t].onDOMRead(this.position)
          }
        }, {
          key: "onDOMWrite",
          value: function() {
            for (var t = 0, e = this.keyframeControllers.length; t < e; t++) this.keyframeControllers[t].onDOMWrite(this.position);
            this.needsUpdate() && this.requestDOMChange()
          }
        }, {
          key: "needsUpdate",
          value: function() {
            if (this._keyframesDirty) return !0;
            for (var t = 0, e = this.keyframeControllers.length; t < e; t++)
              if (this.keyframeControllers[t].needsUpdate()) return !0;
            return !1
          }
        }, {
          key: "addKeyframe",
          value: function(t, e) {
            var i = this.getControllerForTarget(t);
            return null === i && (i = new f(this, t), this.keyframeControllers.push(i)), this.keyframesDirty = !0, i.addKeyframe(e)
          }
        }, {
          key: "forceUpdate",
          value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              e = t.waitForNextUpdate,
              i = void 0 === e || e,
              n = t.silent,
              r = void 0 !== n && n;
            this.isEnabled && (this.refreshMetrics(), this.timelineUpdateRequired = !0, i ? this.keyframesDirty = !0 : this.onKeyframesDirty({
              silent: r
            }))
          }
        }, {
          key: "onKeyframesDirty",
          value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              e = t.silent,
              i = void 0 !== e && e;
            this.determineActiveKeyframes(), this.keyframesDirty = !1;
            for (var n = 0, r = this.keyframeControllers.length; n < r; n++) this.keyframeControllers[n].updateAnimationConstraints();
            this.updateProgress(this.getPosition()), this.updateBounds(), i || this._onScroll(), this.gui && this.gui.create()
          }
        }, {
          key: "refreshMetrics",
          value: function() {
            var t = new Set([this.element]);
            this.keyframeControllers.forEach(function(e) {
              t.add(e.element), e._allKeyframes.forEach(function(e) {
                return e.anchors.forEach(function(e) {
                  return t.add(e)
                })
              })
            }), this.metrics.refreshCollection(t), this.viewableRange = this.createViewableRange()
          }
        }, {
          key: "reconcile",
          value: function() {
            for (var t = 0, e = this.keyframeControllers.length; t < e; t++) this.keyframeControllers[t].reconcile()
          }
        }, {
          key: "determineActiveKeyframes",
          value: function(t) {
            t = t || u(Array.from(document.documentElement.classList));
            for (var e = 0, i = this.keyframeControllers.length; e < i; e++) this.keyframeControllers[e].determineActiveKeyframes(t)
          }
        }, {
          key: "updateBounds",
          value: function() {
            if (0 === this.keyframeControllers.length) return this.boundsMin = 0, void(this.boundsMax = 0);
            for (var t = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY
              }, e = 0, i = this.keyframeControllers.length; e < i; e++) this.keyframeControllers[e].getBounds(t);
            var n = this.convertTValueToScrollPosition(t.min),
              r = this.convertTValueToScrollPosition(t.max);
            r - n < h.pageMetrics.windowHeight ? (t.min = this.convertScrollPositionToTValue(n - .5 * h.pageMetrics.windowHeight), t.max = this.convertScrollPositionToTValue(r + .5 * h.pageMetrics.windowHeight)) : (t.min -= .001, t.max += .001), this.boundsMin = t.min, this.boundsMax = t.max, this.timelineUpdateRequired = !0
          }
        }, {
          key: "createViewableRange",
          value: function() {
            return new h.ViewableRange(this.metrics.get(this.element), h.pageMetrics.windowHeight)
          }
        }, {
          key: "_onBreakpointChange",
          value: function(t, e) {
            this.keyframesDirty = !0, this.determineActiveKeyframes()
          }
        }, {
          key: "updateProgress",
          value: function(t) {
            return this.hasDuration() ? (this.position.localUnclamped = (t - this.viewableRange.a) / (this.viewableRange.d - this.viewableRange.a), void(this.position.local = c.clamp(this.position.localUnclamped, this.boundsMin, this.boundsMax))) : void(this.position.local = this.position.localUnclamped = 0)
          }
        }, {
          key: "performTimelineDispatch",
          value: function() {
            for (var t = 0, e = this.keyframeControllers.length; t < e; t++) this.keyframeControllers[t].updateLocalProgress(this.position.local);
            this.trigger(h.EVENTS.ON_TIMELINE_UPDATE, this.position.local), this.timelineUpdateRequired = !1, this.position.lastPosition !== this.position.local && (this.position.lastPosition <= this.boundsMin && this.position.localUnclamped > this.boundsMin ? this.trigger(h.EVENTS.ON_TIMELINE_START, this) : this.position.lastPosition >= this.boundsMin && this.position.localUnclamped < this.boundsMin ? this.trigger(h.EVENTS.ON_TIMELINE_START + ":reverse", this) : this.position.lastPosition <= this.boundsMax && this.position.localUnclamped >= this.boundsMax ? this.trigger(h.EVENTS.ON_TIMELINE_COMPLETE, this) : this.position.lastPosition >= this.boundsMax && this.position.localUnclamped < this.boundsMax && this.trigger(h.EVENTS.ON_TIMELINE_COMPLETE + ":reverse", this)), null !== this.gui && this.gui.onScrollUpdate(this.position)
          }
        }, {
          key: "_onScroll",
          value: function(t) {
            if (!this.isEnabled) return !1;
            void 0 === t && (t = this.getPosition()), this.updateProgress(t);
            var e = this.position.lastPosition === this.boundsMin || this.position.lastPosition === this.boundsMax,
              i = this.position.localUnclamped === this.boundsMin || this.position.localUnclamped === this.boundsMax;
            if (!this.timelineUpdateRequired && e && i && this.position.lastPosition === t) return void(this.position.local = this.position.localUnclamped);
            if (this.timelineUpdateRequired || this.position.localUnclamped > this.boundsMin && this.position.localUnclamped < this.boundsMax) return this.performTimelineDispatch(), this.requestDOMChange(), void(this.position.lastPosition = this.position.localUnclamped);
            var n = this.position.lastPosition > this.boundsMin && this.position.lastPosition < this.boundsMax,
              r = this.position.localUnclamped <= this.boundsMin || this.position.localUnclamped >= this.boundsMax;
            if (n && r) return this.performTimelineDispatch(), this.requestDOMChange(), void(this.position.lastPosition = this.position.localUnclamped);
            var s = this.position.lastPosition < this.boundsMin && this.position.localUnclamped > this.boundsMax,
              o = this.position.lastPosition > this.boundsMax && this.position.localUnclamped < this.boundsMax;
            (s || o) && (this.performTimelineDispatch(), this.requestDOMChange(), this.position.lastPosition = this.position.localUnclamped), null !== this.gui && this.gui.onScrollUpdate(this.position)
          }
        }, {
          key: "convertScrollPositionToTValue",
          value: function(t) {
            return this.hasDuration() ? c.map(t, this.viewableRange.a, this.viewableRange.d, 0, 1) : 0
          }
        }, {
          key: "convertTValueToScrollPosition",
          value: function(t) {
            return this.hasDuration() ? c.map(t, 0, 1, this.viewableRange.a, this.viewableRange.d) : 0
          }
        }, {
          key: "hasDuration",
          value: function() {
            return this.viewableRange.a !== this.viewableRange.d
          }
        }, {
          key: "getPosition",
          value: function() {
            return h.pageMetrics.scrollY
          }
        }, {
          key: "getControllerForTarget",
          value: function(t) {
            if (!t._animInfo || !t._animInfo.controllers) return null;
            if (t._animInfo.controller && t._animInfo.controller.group === this) return t._animInfo.controller;
            for (var e = t._animInfo.controllers, i = 0, n = e.length; i < n; i++)
              if (e[i].group === this) return e[i];
            return null
          }
        }, {
          key: "trigger",
          value: function(t, e) {
            if ("undefined" != typeof this._events[t])
              for (var i = this._events[t].length - 1; i >= 0; i--) void 0 !== e ? this._events[t][i](e) : this._events[t][i]()
          }
        }, {
          key: "keyframesDirty",
          set: function(t) {
            this._keyframesDirty = t, this._keyframesDirty && this.requestDOMChange()
          },
          get: function() {
            return this._keyframesDirty
          }
        }, {
          key: "keyFrames",
          get: function() {
            return this.viewableRange
          }
        }]), e
      }(l);
    e.exports = g
  }, {
    "./Keyframes/KeyframeController": 216,
    "./Model/AnimSystemModel": 218,
    "./Model/ElementMetricsLookup": 220,
    "./Parsing/ExpressionParser": 224,
    "./Parsing/TimeParser": 226,
    "./utils/arrayToObject": 229,
    "@marcom/ac-event-emitter-micro": 116,
    "@marcom/ac-raf-emitter/RAFEmitter": 180,
    "@marcom/ac-raf-emitter/draw": 186,
    "@marcom/ac-raf-emitter/update": 190,
    "@marcom/sm-math-utils": 238
  }],
  228: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      a = function p(t, e, i) {
        null === t && (t = Function.prototype);
        var n = Object.getOwnPropertyDescriptor(t, e);
        if (void 0 === n) {
          var r = Object.getPrototypeOf(t);
          return null === r ? void 0 : p(r, e, i)
        }
        if ("value" in n) return n.value;
        var s = n.get;
        if (void 0 !== s) return s.call(i)
      },
      l = t("./ScrollGroup"),
      c = t("@marcom/sm-math-utils"),
      u = 0,
      h = {
        create: t("@marcom/ac-raf-emitter/RAFEmitter")
      },
      m = function(t) {
        function e(t, i) {
          n(this, e), t || (t = document.createElement("div"), t.className = "TimeGroup-" + u++);
          var s = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
          return s.name = s.name || t.getAttribute("data-anim-time-group"), s._isPaused = !0, s._repeats = 0, s._isReversed = !1, s._timeScale = 1, s
        }
        return s(e, t), o(e, [{
          key: "finalizeInit",
          value: function() {
            if (!this.anim) throw "TimeGroup not instantiated correctly. Please use `AnimSystem.createTimeGroup(el)`";
            this.defaultEase = 1, this.onPlayTimeUpdate = this.onPlayTimeUpdate.bind(this), a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "finalizeInit", this).call(this)
          }
        }, {
          key: "progress",
          value: function(t) {
            if (void 0 === t) return 0 === this.boundsMax ? 0 : this.position.local / this.boundsMax;
            var e = t * this.boundsMax;
            this.timelineUpdateRequired = !0, this._onScroll(e)
          }
        }, {
          key: "time",
          value: function(t) {
            return void 0 === t ? this.position.local : (t = c.clamp(t, this.boundsMin, this.boundsMax), this.timelineUpdateRequired = !0, void this._onScroll(t))
          }
        }, {
          key: "play",
          value: function(t) {
            this.reversed(!1), this.isEnabled = !0, this._isPaused = !1, this.time(t), this._playheadEmitter.run()
          }
        }, {
          key: "reverse",
          value: function(t) {
            this.reversed(!0), this.isEnabled = !0, this._isPaused = !1, this.time(t), this._playheadEmitter.run()
          }
        }, {
          key: "reversed",
          value: function(t) {
            return void 0 === t ? this._isReversed : void(this._isReversed = t)
          }
        }, {
          key: "restart",
          value: function() {
            this._isReversed ? (this.progress(1), this.reverse(this.time())) : (this.progress(0), this.play(this.time()))
          }
        }, {
          key: "pause",
          value: function(t) {
            this.time(t), this._isPaused = !0
          }
        }, {
          key: "paused",
          value: function(t) {
            return void 0 === t ? this._isPaused : (this._isPaused = t, this._isPaused || this.play(), this)
          }
        }, {
          key: "onPlayTimeUpdate",
          value: function(t) {
            if (!this._isPaused) {
              var i = c.clamp(t.delta / 1e3, 0, .5);
              this._isReversed && (i = -i);
              var n = this.time(),
                r = n + i * this._timeScale;
              if (this._repeats === e.REPEAT_FOREVER || this._repeats > 0) {
                var s = !1;
                !this._isReversed && r > this.boundsMax ? (r -= this.boundsMax, s = !0) : this._isReversed && r < 0 && (r = this.boundsMax + r, s = !0), s && (this._repeats = this._repeats === e.REPEAT_FOREVER ? e.REPEAT_FOREVER : this._repeats - 1)
              }
              this.time(r);
              var o = !this._isReversed && this.position.local !== this.duration,
                a = this._isReversed && 0 !== this.position.local;
              o || a ? this._playheadEmitter.run() : this.paused(!0)
            }
          }
        }, {
          key: "updateProgress",
          value: function(t) {
            return this.hasDuration() ? (this.position.localUnclamped = t, void(this.position.local = c.clamp(this.position.localUnclamped, this.boundsMin, this.boundsMax))) : void(this.position.local = this.position.localUnclamped = 0)
          }
        }, {
          key: "updateBounds",
          value: function() {
            if (0 === this.keyframeControllers.length) return this.boundsMin = 0, void(this.boundsMax = 0);
            for (var t = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY
              }, e = 0, i = this.keyframeControllers.length; e < i; e++) this.keyframeControllers[e].getBounds(t);
            this.boundsMin = 0, this.boundsMax = t.max, this.viewableRange.a = this.viewableRange.b = 0, this.viewableRange.c = this.viewableRange.d = this.boundsMax, this.timelineUpdateRequired = !0
          }
        }, {
          key: "setupRAFEmitter",
          value: function(t) {
            this._playheadEmitter = new h.create, this._playheadEmitter.on("update", this.onPlayTimeUpdate), a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setupRAFEmitter", this).call(this, t)
          }
        }, {
          key: "needsUpdate",
          value: function() {
            return !0
          }
        }, {
          key: "timeScale",
          value: function(t) {
            return void 0 === t ? this._timeScale : (this._timeScale = t, this)
          }
        }, {
          key: "repeats",
          value: function(t) {
            return void 0 === t ? this._repeats : void(this._repeats = t)
          }
        }, {
          key: "getPosition",
          value: function() {
            return this.position.local
          }
        }, {
          key: "convertScrollPositionToTValue",
          value: function(t) {
            return t
          }
        }, {
          key: "convertTValueToScrollPosition",
          value: function(t) {
            return t
          }
        }, {
          key: "hasDuration",
          value: function() {
            return this.duration > 0
          }
        }, {
          key: "destroy",
          value: function() {
            this._playheadEmitter.destroy(), this._playheadEmitter = null, a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this)
          }
        }, {
          key: "duration",
          get: function() {
            return this.keyframesDirty && this.onKeyframesDirty({
              silent: !0
            }), this.boundsMax
          }
        }]), e
      }(l);
    m.REPEAT_FOREVER = -1, e.exports = m
  }, {
    "./ScrollGroup": 227,
    "@marcom/ac-raf-emitter/RAFEmitter": 180,
    "@marcom/sm-math-utils": 238
  }],
  229: [function(t, e, i) {
    "use strict";
    var n = function(t) {
      return t.reduce(function(t, e) {
        return t[e] = e, t
      }, {})
    };
    e.exports = n
  }, {}],
  230: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      a = function d(t, e, i) {
        null === t && (t = Function.prototype);
        var n = Object.getOwnPropertyDescriptor(t, e);
        if (void 0 === n) {
          var r = Object.getPrototypeOf(t);
          return null === r ? void 0 : d(r, e, i)
        }
        if ("value" in n) return n.value;
        var s = n.get;
        if (void 0 !== s) return s.call(i)
      },
      l = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      c = t("@marcom/anim-system/Model/AnimSystemModel"),
      u = {
        create: t("@marcom/ac-raf-emitter/RAFEmitter"),
        update: t("@marcom/ac-raf-emitter/update"),
        draw: t("@marcom/ac-raf-emitter/draw")
      },
      h = function() {},
      m = 0,
      p = function(t) {
        function e(t) {
          n(this, e);
          var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return i.el = t.el, i.gum = t.gum, i.componentName = t.componentName, i._keyframeController = null, i
        }
        return s(e, t), o(e, [{
          key: "destroy",
          value: function() {
            this.el = null, this.gum = null, this._keyframeController = null, a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this)
          }
        }, {
          key: "addKeyframe",
          value: function(t) {
            var e = t.el || this.el;
            return (t.group || this.anim).addKeyframe(e, t)
          }
        }, {
          key: "addDiscreteEvent",
          value: function(t) {
            t.event = t.event || "Generic-Event-Name-" + m++;
            var e = void 0 !== t.end && t.end !== t.start,
              i = this.addKeyframe(t);
            return e ? (t.onEnterOnce && i.controller.once(t.event + ":enter", t.onEnterOnce), t.onExitOnce && i.controller.once(t.event + ":exit", t.onExitOnce), t.onEnter && i.controller.on(t.event + ":enter", t.onEnter), t.onExit && i.controller.on(t.event + ":exit", t.onExit)) : (t.onEventOnce && i.controller.once(t.event, t.onEventOnce), t.onEventReverseOnce && i.controller.once(t.event + ":reverse", t.onEventReverseOnce), t.onEvent && i.controller.on(t.event, t.onEvent), t.onEventReverse && i.controller.on(t.event + ":reverse", t.onEventReverse)), i
          }
        }, {
          key: "addRAFLoop",
          value: function(t) {
            var e = ["start", "end"];
            if (!e.every(function(e) {
                return t.hasOwnProperty(e)
              })) return void console.log("BubbleGum.BaseComponent::addRAFLoop required options are missing: " + e.join(" "));
            var i = new u.create;
            i.on("update", t.onUpdate || h), i.on("draw", t.onDraw || h), i.on("draw", function() {
              return i.run()
            });
            var n = t.onEnter,
              r = t.onExit;
            return t.onEnter = function() {
              i.run(), n ? n() : 0
            }, t.onExit = function() {
              i.cancel(), r ? r() : 0
            }, this.addDiscreteEvent(t)
          }
        }, {
          key: "addContinuousEvent",
          value: function(t) {
            t.onDraw || console.log("BubbleGum.BaseComponent::addContinuousEvent required option `onDraw` is missing. Consider using a regular keyframe if you do not need a callback"), t.event = t.event || "Generic-Event-Name-" + m++;
            var e = this.addKeyframe(t);
            return e.controller.on(t.event, t.onDraw), e
          }
        }, {
          key: "mounted",
          value: function() {}
        }, {
          key: "onResizeImmediate",
          value: function(t) {}
        }, {
          key: "onResizeDebounced",
          value: function(t) {}
        }, {
          key: "onBreakpointChange",
          value: function(t) {}
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
        }]), e
      }(l);
    e.exports = p
  }, {
    "@marcom/ac-event-emitter-micro": 116,
    "@marcom/ac-raf-emitter/RAFEmitter": 180,
    "@marcom/ac-raf-emitter/draw": 186,
    "@marcom/ac-raf-emitter/update": 190,
    "@marcom/anim-system/Model/AnimSystemModel": 218
  }],
  231: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      a = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      l = t("@marcom/delayed-initializer"),
      c = t("@marcom/anim-system"),
      u = t("@marcom/anim-system/Model/AnimSystemModel"),
      h = t("./ComponentMap"),
      m = {},
      p = function(t) {
        function e(t) {
          n(this, e);
          var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return i.el = t, i.anim = c, i.components = [], i.el.getAttribute("data-anim-scroll-group") || i.el.setAttribute("data-anim-scroll-group", "bubble-gum-group"), c.on(u.EVENTS.ON_DOM_GROUPS_CREATED, function(t) {
            i.componentsInitialized = !1, i.initComponents(), i.setupEvents()
          }), c.on(u.EVENTS.ON_DOM_KEYFRAMES_CREATED, function() {
            i.components.forEach(function(t) {
              return t.mounted()
            }), i.trigger(e.EVENTS.DOM_COMPONENTS_MOUNTED)
          }), l.add(function() {
            return c.initialize()
          }), i
        }
        return s(e, t), o(e, [{
          key: "initComponents",
          value: function() {
            var t = Array.prototype.slice.call(this.el.querySelectorAll("[data-component-list]"));
            this.el.hasAttribute("data-component-list") && t.push(this.el);
            for (var e = 0; e < t.length; e++)
              for (var i = t[e], n = i.getAttribute("data-component-list"), r = n.split(" "), s = 0, o = r.length; s < o; s++) {
                var a = r[s];
                "" !== a && " " !== a && this.addComponent({
                  el: i,
                  componentName: a
                })
              }
            this.componentsInitialized = !0
          }
        }, {
          key: "setupEvents",
          value: function() {
            this.onResizeDebounced = this.onResizeDebounced.bind(this), this.onResizeImmediate = this.onResizeImmediate.bind(this), this.onBreakpointChange = this.onBreakpointChange.bind(this), c.on(u.PageEvents.ON_RESIZE_IMMEDIATE, this.onResizeImmediate), c.on(u.PageEvents.ON_RESIZE_DEBOUNCED, this.onResizeDebounced), c.on(u.PageEvents.ON_BREAKPOINT_CHANGE, this.onBreakpointChange)
          }
        }, {
          key: "addComponent",
          value: function(t) {
            var i = t.el,
              n = t.componentName,
              r = t.data;
            if (!h.hasOwnProperty(n)) throw "BubbleGum::addComponent could not add component to '" + i.className + "'. No component type '" + n + "' found!";
            var s = h[n];
            if (!e.componentIsSupported(s, n)) return void 0 === m[n] && (console.log("BubbleGum::addComponent unsupported component '" + n + "'. Reason: '" + n + ".IS_SUPPORTED' returned false"), m[n] = !0), null;
            var o = i.dataset.componentList || "";
            o.includes(n) || (i.dataset.componentList = o.split(" ").concat(n).join(" "));
            var a = new s({
              el: i,
              data: r,
              componentName: t.componentName,
              gum: this,
              pageMetrics: u.pageMetrics
            });
            return this.components.push(a), this.componentsInitialized && a.mounted(), a
          }
        }, {
          key: "removeComponent",
          value: function(t) {
            var e = this.components.indexOf(t);
            e !== -1 && (this.components.splice(e, 1), t.el.dataset.componentList = t.el.dataset.componentList.split(" ").filter(function(e) {
              return e !== t.componentName
            }).join(" "), t.destroy())
          }
        }, {
          key: "getComponentOfType",
          value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement,
              i = "[data-component-list*=" + t + "]",
              n = e.matches(i) ? e : e.querySelector(i);
            return n ? this.components.find(function(e) {
              return e instanceof h[t] && e.el === n
            }) : null
          }
        }, {
          key: "getComponentsOfType",
          value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement,
              i = "[data-component-list*=" + t + "]",
              n = e.matches(i) ? [e] : Array.from(e.querySelectorAll(i));
            return this.components.filter(function(e) {
              return e instanceof h[t] && n.includes(e.el)
            })
          }
        }, {
          key: "getComponentsForElement",
          value: function(t) {
            return this.components.filter(function(e) {
              return e.el === t
            })
          }
        }, {
          key: "onResizeImmediate",
          value: function() {
            this.components.forEach(function(t) {
              return t.onResizeImmediate(u.pageMetrics)
            })
          }
        }, {
          key: "onResizeDebounced",
          value: function() {
            this.components.forEach(function(t) {
              return t.onResizeDebounced(u.pageMetrics)
            })
          }
        }, {
          key: "onBreakpointChange",
          value: function() {
            this.components.forEach(function(t) {
              return t.onBreakpointChange(u.pageMetrics)
            })
          }
        }], [{
          key: "componentIsSupported",
          value: function(t, e) {
            var i = t.IS_SUPPORTED;
            if (void 0 === i) return !0;
            if ("function" != typeof i) return console.error('BubbleGum::addComponent error in "' + e + '".IS_SUPPORTED - it should be a function which returns true/false'), !0;
            var n = t.IS_SUPPORTED();
            return void 0 === n ? (console.error('BubbleGum::addComponent error in "' + e + '".IS_SUPPORTED - it should be a function which returns true/false'), !0) : n
          }
        }]), e
      }(a);
    p.EVENTS = {
      DOM_COMPONENTS_MOUNTED: "DOM_COMPONENTS_MOUNTED"
    }, e.exports = p
  }, {
    "./ComponentMap": 232,
    "@marcom/ac-event-emitter-micro": 116,
    "@marcom/anim-system": 213,
    "@marcom/anim-system/Model/AnimSystemModel": 218,
    "@marcom/delayed-initializer": 234
  }],
  232: [function(t, e, i) {
    "use strict";
    e.exports = {
      BaseComponent: t("./BaseComponent")
    }
  }, {
    "./BaseComponent": 230
  }],
  233: [function(t, e, i) {
    "use strict";
    var n = {
        create: t("gl-mat4/create"),
        invert: t("gl-mat4/invert"),
        clone: t("gl-mat4/clone"),
        transpose: t("gl-mat4/transpose")
      },
      r = {
        create: t("gl-vec3/create"),
        dot: t("gl-vec3/dot"),
        normalize: t("gl-vec3/normalize"),
        length: t("gl-vec3/length"),
        cross: t("gl-vec3/cross"),
        fromValues: t("gl-vec3/fromValues")
      },
      s = {
        create: t("gl-vec4/create"),
        transformMat4: t("gl-vec4/transformMat4"),
        fromValues: t("gl-vec4/fromValues")
      },
      o = (Math.PI / 180, 180 / Math.PI),
      a = 0,
      l = 1,
      c = 3,
      u = 4,
      h = 5,
      m = 7,
      p = 11,
      d = 12,
      f = 13,
      _ = 15,
      g = function(t, e) {
        e = e || !1;
        for (var i = n.clone(t), a = r.create(), l = r.create(), u = r.create(), h = s.create(), d = s.create(), f = (r.create(), 0); f < 16; f++) i[f] /= i[_];
        var g = n.clone(i);
        g[c] = 0, g[m] = 0, g[p] = 0, g[_] = 1;
        var E = (i[3], i[7], i[11], i[12]),
          w = i[13],
          T = i[14],
          S = (i[15], s.create());
        if (b(i[c]) && b(i[m]) && b(i[p])) h = s.fromValues(0, 0, 0, 1);
        else {
          S[0] = i[c], S[1] = i[m], S[2] = i[p], S[3] = i[_];
          var C = n.invert(n.create(), g),
            A = n.transpose(n.create(), C);
          h = s.transformMat4(h, S, A)
        }
        a[0] = E, a[1] = w, a[2] = T;
        var O = [r.create(), r.create(), r.create()];
        O[0][0] = i[0], O[0][1] = i[1], O[0][2] = i[2], O[1][0] = i[4], O[1][1] = i[5], O[1][2] = i[6], O[2][0] = i[8], O[2][1] = i[9], O[2][2] = i[10], l[0] = r.length(O[0]), r.normalize(O[0], O[0]), u[0] = r.dot(O[0], O[1]), O[1] = y(O[1], O[0], 1, -u[0]), l[1] = r.length(O[1]), r.normalize(O[1], O[1]), u[0] /= l[1], u[1] = r.dot(O[0], O[2]), O[2] = y(O[2], O[0], 1, -u[1]), u[2] = r.dot(O[1], O[2]), O[2] = y(O[2], O[1], 1, -u[2]), l[2] = r.length(O[2]), r.normalize(O[2], O[2]), u[1] /= l[2], u[2] /= l[2];
        var x = r.cross(r.create(), O[1], O[2]);
        if (r.dot(O[0], x) < 0)
          for (f = 0; f < 3; f++) l[f] *= -1, O[f][0] *= -1, O[f][1] *= -1, O[f][2] *= -1;
        d[0] = .5 * Math.sqrt(Math.max(1 + O[0][0] - O[1][1] - O[2][2], 0)), d[1] = .5 * Math.sqrt(Math.max(1 - O[0][0] + O[1][1] - O[2][2], 0)), d[2] = .5 * Math.sqrt(Math.max(1 - O[0][0] - O[1][1] + O[2][2], 0)), d[3] = .5 * Math.sqrt(Math.max(1 + O[0][0] + O[1][1] + O[2][2], 0)), O[2][1] > O[1][2] && (d[0] = -d[0]), O[0][2] > O[2][0] && (d[1] = -d[1]), O[1][0] > O[0][1] && (d[2] = -d[2]);
        var P = s.fromValues(d[0], d[1], d[2], 2 * Math.acos(d[3])),
          I = v(d);
        return e && (u[0] = Math.round(u[0] * o * 100) / 100, u[1] = Math.round(u[1] * o * 100) / 100, u[2] = Math.round(u[2] * o * 100) / 100, I[0] = Math.round(I[0] * o * 100) / 100, I[1] = Math.round(I[1] * o * 100) / 100, I[2] = Math.round(I[2] * o * 100) / 100, P[3] = Math.round(P[3] * o * 100) / 100), {
          translation: a,
          scale: l,
          skew: u,
          perspective: h,
          quaternion: d,
          eulerRotation: I,
          axisAngle: P
        }
      },
      y = function(t, e, i, n) {
        var s = r.create();
        return s[0] = i * t[0] + n * e[0], s[1] = i * t[1] + n * e[1], s[2] = i * t[2] + n * e[2], s
      },
      v = function(t) {
        var e, i, n, s = t[3] * t[3],
          o = t[0] * t[0],
          a = t[1] * t[1],
          l = t[2] * t[2],
          c = o + a + l + s,
          u = t[0] * t[1] + t[2] * t[3];
        return u > .499 * c ? (i = 2 * Math.atan2(t[0], t[3]), n = Math.PI / 2, e = 0, r.fromValues(e, i, n)) : u < -.499 * c ? (i = -2 * Math.atan2(t[0], t[3]), n = -Math.PI / 2, e = 0, r.fromValues(e, i, n)) : (i = Math.atan2(2 * t[1] * t[3] - 2 * t[0] * t[2], o - a - l + s), n = Math.asin(2 * u / c), e = Math.atan2(2 * t[0] * t[3] - 2 * t[1] * t[2], -o + a - l + s), r.fromValues(e, i, n))
      },
      b = function(t) {
        return Math.abs(t) < 1e-4
      },
      E = function(t) {
        var e = String(getComputedStyle(t).transform).trim(),
          i = n.create();
        if ("none" === e || "" === e) return i;
        var r, s, o = e.slice(0, e.indexOf("("));
        if ("matrix3d" === o)
          for (r = e.slice(9, -1).split(","), s = 0; s < r.length; s++) i[s] = parseFloat(r[s]);
        else {
          if ("matrix" !== o) throw new TypeError("Invalid Matrix Value");
          for (r = e.slice(7, -1).split(","), s = r.length; s--;) r[s] = parseFloat(r[s]);
          i[a] = r[0], i[l] = r[1], i[d] = r[4], i[u] = r[2], i[h] = r[3], i[f] = r[5]
        }
        return i
      };
    e.exports = function(t, e) {
      var i = E(t);
      return g(i, e)
    }
  }, {
    "gl-mat4/clone": 245,
    "gl-mat4/create": 246,
    "gl-mat4/invert": 249,
    "gl-mat4/transpose": 257,
    "gl-vec3/create": 258,
    "gl-vec3/cross": 259,
    "gl-vec3/dot": 260,
    "gl-vec3/fromValues": 261,
    "gl-vec3/length": 262,
    "gl-vec3/normalize": 263,
    "gl-vec4/create": 264,
    "gl-vec4/fromValues": 265,
    "gl-vec4/transformMat4": 266
  }],
  234: [function(t, e, i) {
    "use strict";
    var n = !1,
      r = !1,
      s = [];
    e.exports = {
      NUMBER_OF_FRAMES_TO_WAIT: 30,
      add: function(t) {
        var e = this;
        if (r && t(), s.push(t), !n) {
          n = !0;
          var i = document.documentElement.scrollHeight,
            o = 0,
            a = function l() {
              var t = document.documentElement.scrollHeight;
              if (i !== t) o = 0;
              else if (o++, o >= e.NUMBER_OF_FRAMES_TO_WAIT) return void s.forEach(function(t) {
                return t()
              });
              i = t, requestAnimationFrame(l)
            };
          requestAnimationFrame(a)
        }
      }
    }
  }, {}],
  235: [function(t, e, i) {
    "use strict";
    e.exports = {
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
  }, {}],
  236: [function(t, e, i) {
    "use strict";

    function n() {
      var t = r.getWindow(),
        e = r.getDocument(),
        i = r.getNavigator();
      return !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch || i.maxTouchPoints > 0 || i.msMaxTouchPoints > 0)
    }
    var r = t("./helpers/globals"),
      s = t("@marcom/function-utils/once");
    e.exports = s(n), e.exports.original = n
  }, {
    "./helpers/globals": 235,
    "@marcom/function-utils/once": 237
  }],
  237: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e;
      return function() {
        return "undefined" == typeof e && (e = t.apply(this, arguments)), e
      }
    }
  }, {}],
  238: [function(t, e, i) {
    "use strict";
    e.exports = {
      lerp: function(t, e, i) {
        return e + (i - e) * t
      },
      map: function(t, e, i, n, r) {
        return n + (r - n) * (t - e) / (i - e)
      },
      mapClamp: function(t, e, i, n, r) {
        var s = n + (r - n) * (t - e) / (i - e);
        return Math.max(n, Math.min(r, s))
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
  }, {}],
  239: [function(t, e, i) {
    "use strict";
    e.exports = {
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
  240: [function(t, e, i) {
    "use strict";
    e.exports = {
      browser: [{
        name: "edge",
        userAgent: "Edge",
        version: ["rv", "Edge"],
        test: function(t) {
          return t.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === t.ua
        }
      }, {
        name: "chrome",
        userAgent: "Chrome"
      }, {
        name: "firefox",
        test: function(t) {
          return t.ua.indexOf("Firefox") > -1 && t.ua.indexOf("Opera") === -1
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
          return (t.ua.indexOf("Linux") > -1 || t.platform.indexOf("Linux") > -1) && t.ua.indexOf("Android") === -1
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
  }, {}],
  241: [function(t, e, i) {
    "use strict";

    function n(t) {
      return new RegExp(t + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")
    }

    function r(t, e) {
      if ("function" == typeof t.parseVersion) return t.parseVersion(e);
      var i = t.version || t.userAgent;
      "string" == typeof i && (i = [i]);
      for (var r, s = i.length, o = 0; o < s; o++)
        if (r = e.match(n(i[o])), r && r.length > 1) return r[1].replace(/_/g, ".");
      return !1
    }

    function s(t, e, i) {
      for (var n, s, o = t.length, a = 0; a < o; a++)
        if ("function" == typeof t[a].test ? t[a].test(i) === !0 && (n = t[a].name) : i.ua.indexOf(t[a].userAgent) > -1 && (n = t[a].name), n) {
          if (e[n] = !0, s = r(t[a], i.ua), "string" == typeof s) {
            var l = s.split(".");
            e.version.string = s, l && l.length > 0 && (e.version.major = parseInt(l[0] || 0), e.version.minor = parseInt(l[1] || 0), e.version.patch = parseInt(l[2] || 0))
          } else "edge" === n && (e.version.string = "12.0.0", e.version.major = "12", e.version.minor = "0", e.version.patch = "0");
          return "function" == typeof t[a].parseDocumentMode && (e.version.documentMode = t[a].parseDocumentMode()), e
        } return e
    }

    function o(t) {
      var e = {};
      return e.browser = s(l.browser, a.browser, t), e.os = s(l.os, a.os, t), e
    }
    var a = t("./defaults"),
      l = t("./dictionary");
    e.exports = o
  }, {
    "./defaults": 239,
    "./dictionary": 240
  }],
  242: [function(t, e, i) {
    "use strict";
    var n = {
      ua: window.navigator.userAgent,
      platform: window.navigator.platform,
      vendor: window.navigator.vendor
    };
    e.exports = t("./parseUserAgent")(n)
  }, {
    "./parseUserAgent": 241
  }],
  243: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      r.call(this), this._id = t || o.ID, this._options = Object.assign({}, o.OPTIONS, e), this._allowDOMEventDispatch = !1, this._allowElementStateData = !1, this._options.removeNamespace = "boolean" != typeof this._options.removeNamespace || this._options.removeNamespace, this._el = this._initViewportEl(this._id), this._resizing = !1, this._mediaQueryLists = {
        resolution: {
          retina: window.matchMedia(c.RETINA)
        },
        orientation: {
          portrait: window.matchMedia(c.PORTRAIT),
          landscape: window.matchMedia(c.LANDSCAPE)
        }
      }, this._viewport = this._getViewport(this._options.removeNamespace), this._retina = this._getRetina(this._mediaQueryLists.resolution.retina), this._orientation = this._initOrientation(), this._addListeners(), this._updateElementStateData()
    }
    var r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      s = t("@marcom/ac-raf-emitter/update"),
      o = {
        ID: "viewport-emitter",
        OPTIONS: {
          removeNamespace: !0
        }
      },
      a = {
        DOM_DISPATCH: "data-viewport-emitter-dispatch",
        STATE: "data-viewport-emitter-state"
      },
      l = "::before",
      c = {
        RETINA: "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)",
        PORTRAIT: "only screen and (orientation: portrait)",
        LANDSCAPE: "only screen and (orientation: landscape)"
      },
      u = {
        any: "change:any",
        orientation: "change:orientation",
        retina: "change:retina",
        viewport: "change:viewport"
      };
    Object.defineProperty(n, "DOM_DISPATCH_ATTRIBUTE", {
      get: function() {
        return a.DOM_DISPATCH
      }
    }), Object.defineProperty(n, "DOM_STATE_ATTRIBUTE", {
      get: function() {
        return a.STATE
      }
    });
    var h = n.prototype = Object.create(r.prototype);
    Object.defineProperty(h, "id", {
      get: function() {
        return this._id
      }
    }), Object.defineProperty(h, "element", {
      get: function() {
        return this._el
      }
    }), Object.defineProperty(h, "mediaQueryLists", {
      get: function() {
        return this._mediaQueryLists
      }
    }), Object.defineProperty(h, "viewport", {
      get: function() {
        return this._viewport
      }
    }), Object.defineProperty(h, "retina", {
      get: function() {
        return this._retina
      }
    }), Object.defineProperty(h, "orientation", {
      get: function() {
        return this._orientation
      }
    }), Object.defineProperty(h, "hasDomDispatch", {
      get: function() {
        return this._allowDOMEventDispatch
      }
    }), h.destroy = function() {
      this._removeListeners();
      for (var t in this._options) this._options[t] = null;
      for (var e in this._mediaQueryLists) {
        var i = this._mediaQueryLists[e];
        for (var n in i) i[n] = null
      }
      this._id = null, this._el = null, this._viewport = null, this._retina = null, this._orientation = null, r.prototype.destroy.call(this)
    }, h._initViewportEl = function(t) {
      var e = document.getElementById(t);
      return e || (e = document.createElement("div"), e.id = t, e = document.body.appendChild(e)), e.hasAttribute(a.DOM_DISPATCH) || (e.setAttribute(a.DOM_DISPATCH, ""), this._allowDOMEventDispatch = !0), e.hasAttribute(a.STATE) || (this._allowElementStateData = !0), e
    }, h._dispatch = function(t, e) {
      var i = {
        viewport: this._viewport,
        orientation: this._orientation,
        retina: this._retina
      };
      if (this._allowDOMEventDispatch) {
        var n = new CustomEvent(t, {
            detail: e
          }),
          r = new CustomEvent(u.any, {
            detail: i
          });
        this._el.dispatchEvent(n), this._el.dispatchEvent(r)
      }
      this.trigger(t, e), this.trigger(u.any, i)
    }, h._addListeners = function() {
      this._onOrientationChange = this._onOrientationChange.bind(this), this._onRetinaChange = this._onRetinaChange.bind(this), this._onViewportChange = this._onViewportChange.bind(this), this._onViewportChangeUpdate = this._onViewportChangeUpdate.bind(this), this._mediaQueryLists.orientation.portrait.addListener(this._onOrientationChange), this._mediaQueryLists.orientation.landscape.addListener(this._onOrientationChange), this._mediaQueryLists.resolution.retina.addListener(this._onRetinaChange), window.addEventListener("resize", this._onViewportChange)
    }, h._removeListeners = function() {
      this._mediaQueryLists.orientation.portrait.removeListener(this._onOrientationChange), this._mediaQueryLists.orientation.landscape.removeListener(this._onOrientationChange), this._mediaQueryLists.resolution.retina.removeListener(this._onRetinaChange), window.removeEventListener("resize", this._onViewportChange)
    }, h._updateElementStateData = function() {
      if (this._allowElementStateData) {
        var t = JSON.stringify({
          viewport: this._viewport,
          orientation: this._orientation,
          retina: this._retina
        });
        this._el.setAttribute(a.STATE, t)
      }
    }, h._getViewport = function(t) {
      var e = window.getComputedStyle(this._el, l).content;
      return e ? (e = e.replace(/["']/g, ""), t ? e.split(":").pop() : e) : null
    }, h._getRetina = function(t) {
      return t.matches
    }, h._getOrientation = function(t) {
      var e = this._orientation;
      if (t.matches) {
        var i = /portrait|landscape/;
        return t.media.match(i)[0]
      }
      return e
    }, h._initOrientation = function() {
      var t = this._getOrientation(this._mediaQueryLists.orientation.portrait);
      return t ? t : this._getOrientation(this._mediaQueryLists.orientation.landscape)
    }, h._onViewportChange = function() {
      this._resizing || (this._resizing = !0, s(this._onViewportChangeUpdate))
    }, h._onViewportChangeUpdate = function() {
      var t = this._viewport;
      if (this._viewport = this._getViewport(this._options.removeNamespace), t !== this._viewport) {
        var e = {
          from: t,
          to: this._viewport
        };
        this._updateElementStateData(), this._dispatch(u.viewport, e)
      }
      this._resizing = !1
    }, h._onRetinaChange = function(t) {
      var e = this._retina;
      if (this._retina = this._getRetina(t), e !== this._retina) {
        var i = {
          from: e,
          to: this._retina
        };
        this._updateElementStateData(), this._dispatch(u.retina, i)
      }
    }, h._onOrientationChange = function(t) {
      var e = this._orientation;
      if (this._orientation = this._getOrientation(t), e !== this._orientation) {
        var i = {
          from: e,
          to: this._orientation
        };
        this._updateElementStateData(), this._dispatch(u.orientation, i)
      }
    }, e.exports = n
  }, {
    "@marcom/ac-event-emitter-micro": 116,
    "@marcom/ac-raf-emitter/update": 190
  }],
  244: [function(t, e, i) {
    "use strict";
    var n = t("./ViewportEmitter");
    e.exports = new n
  }, {
    "./ViewportEmitter": 243
  }],
  245: [function(t, e, i) {
    function n(t) {
      var e = new Float32Array(16);
      return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    }
    e.exports = n
  }, {}],
  246: [function(t, e, i) {
    function n() {
      var t = new Float32Array(16);
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }
    e.exports = n
  }, {}],
  247: [function(t, e, i) {
    function n(t, e, i) {
      var n = e[0],
        r = e[1],
        s = e[2],
        o = e[3],
        a = n + n,
        l = r + r,
        c = s + s,
        u = n * a,
        h = n * l,
        m = n * c,
        p = r * l,
        d = r * c,
        f = s * c,
        _ = o * a,
        g = o * l,
        y = o * c;
      return t[0] = 1 - (p + f), t[1] = h + y, t[2] = m - g, t[3] = 0, t[4] = h - y, t[5] = 1 - (u + f), t[6] = d + _, t[7] = 0, t[8] = m + g, t[9] = d - _, t[10] = 1 - (u + p), t[11] = 0, t[12] = i[0], t[13] = i[1], t[14] = i[2], t[15] = 1, t
    }
    e.exports = n
  }, {}],
  248: [function(t, e, i) {
    function n(t) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }
    e.exports = n
  }, {}],
  249: [function(t, e, i) {
    function n(t, e) {
      var i = e[0],
        n = e[1],
        r = e[2],
        s = e[3],
        o = e[4],
        a = e[5],
        l = e[6],
        c = e[7],
        u = e[8],
        h = e[9],
        m = e[10],
        p = e[11],
        d = e[12],
        f = e[13],
        _ = e[14],
        g = e[15],
        y = i * a - n * o,
        v = i * l - r * o,
        b = i * c - s * o,
        E = n * l - r * a,
        w = n * c - s * a,
        T = r * c - s * l,
        S = u * f - h * d,
        C = u * _ - m * d,
        A = u * g - p * d,
        O = h * _ - m * f,
        x = h * g - p * f,
        P = m * g - p * _,
        I = y * P - v * x + b * O + E * A - w * C + T * S;
      return I ? (I = 1 / I, t[0] = (a * P - l * x + c * O) * I, t[1] = (r * x - n * P - s * O) * I, t[2] = (f * T - _ * w + g * E) * I, t[3] = (m * w - h * T - p * E) * I, t[4] = (l * A - o * P - c * C) * I, t[5] = (i * P - r * A + s * C) * I, t[6] = (_ * b - d * T - g * v) * I, t[7] = (u * T - m * b + p * v) * I, t[8] = (o * x - a * A + c * S) * I, t[9] = (n * A - i * x - s * S) * I, t[10] = (d * w - f * b + g * y) * I, t[11] = (h * b - u * w - p * y) * I, t[12] = (a * C - o * O - l * S) * I, t[13] = (i * O - n * C + r * S) * I, t[14] = (f * v - d * E - _ * y) * I, t[15] = (u * E - h * v + m * y) * I, t) : null
    }
    e.exports = n
  }, {}],
  250: [function(t, e, i) {
    function n(t, e, i) {
      var n = e[0],
        r = e[1],
        s = e[2],
        o = e[3],
        a = e[4],
        l = e[5],
        c = e[6],
        u = e[7],
        h = e[8],
        m = e[9],
        p = e[10],
        d = e[11],
        f = e[12],
        _ = e[13],
        g = e[14],
        y = e[15],
        v = i[0],
        b = i[1],
        E = i[2],
        w = i[3];
      return t[0] = v * n + b * a + E * h + w * f, t[1] = v * r + b * l + E * m + w * _, t[2] = v * s + b * c + E * p + w * g, t[3] = v * o + b * u + E * d + w * y, v = i[4], b = i[5], E = i[6], w = i[7], t[4] = v * n + b * a + E * h + w * f, t[5] = v * r + b * l + E * m + w * _, t[6] = v * s + b * c + E * p + w * g, t[7] = v * o + b * u + E * d + w * y, v = i[8], b = i[9], E = i[10], w = i[11], t[8] = v * n + b * a + E * h + w * f, t[9] = v * r + b * l + E * m + w * _, t[10] = v * s + b * c + E * p + w * g, t[11] = v * o + b * u + E * d + w * y, v = i[12], b = i[13], E = i[14], w = i[15], t[12] = v * n + b * a + E * h + w * f, t[13] = v * r + b * l + E * m + w * _, t[14] = v * s + b * c + E * p + w * g, t[15] = v * o + b * u + E * d + w * y, t
    }
    e.exports = n
  }, {}],
  251: [function(t, e, i) {
    function n(t, e, i, n) {
      var r, s, o, a, l, c, u, h, m, p, d, f, _, g, y, v, b, E, w, T, S, C, A, O, x = n[0],
        P = n[1],
        I = n[2],
        k = Math.sqrt(x * x + P * P + I * I);
      return Math.abs(k) < 1e-6 ? null : (k = 1 / k, x *= k, P *= k, I *= k, r = Math.sin(i), s = Math.cos(i), o = 1 - s, a = e[0], l = e[1], c = e[2], u = e[3], h = e[4], m = e[5], p = e[6], d = e[7], f = e[8], _ = e[9], g = e[10], y = e[11], v = x * x * o + s, b = P * x * o + I * r, E = I * x * o - P * r, w = x * P * o - I * r, T = P * P * o + s, S = I * P * o + x * r, C = x * I * o + P * r, A = P * I * o - x * r, O = I * I * o + s, t[0] = a * v + h * b + f * E, t[1] = l * v + m * b + _ * E, t[2] = c * v + p * b + g * E, t[3] = u * v + d * b + y * E, t[4] = a * w + h * T + f * S, t[5] = l * w + m * T + _ * S, t[6] = c * w + p * T + g * S, t[7] = u * w + d * T + y * S, t[8] = a * C + h * A + f * O, t[9] = l * C + m * A + _ * O, t[10] = c * C + p * A + g * O, t[11] = u * C + d * A + y * O, e !== t && (t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t)
    }
    e.exports = n
  }, {}],
  252: [function(t, e, i) {
    function n(t, e, i) {
      var n = Math.sin(i),
        r = Math.cos(i),
        s = e[4],
        o = e[5],
        a = e[6],
        l = e[7],
        c = e[8],
        u = e[9],
        h = e[10],
        m = e[11];
      return e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[4] = s * r + c * n, t[5] = o * r + u * n, t[6] = a * r + h * n, t[7] = l * r + m * n, t[8] = c * r - s * n, t[9] = u * r - o * n, t[10] = h * r - a * n, t[11] = m * r - l * n, t
    }
    e.exports = n
  }, {}],
  253: [function(t, e, i) {
    function n(t, e, i) {
      var n = Math.sin(i),
        r = Math.cos(i),
        s = e[0],
        o = e[1],
        a = e[2],
        l = e[3],
        c = e[8],
        u = e[9],
        h = e[10],
        m = e[11];
      return e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = s * r - c * n, t[1] = o * r - u * n, t[2] = a * r - h * n, t[3] = l * r - m * n, t[8] = s * n + c * r, t[9] = o * n + u * r, t[10] = a * n + h * r, t[11] = l * n + m * r, t
    }
    e.exports = n
  }, {}],
  254: [function(t, e, i) {
    function n(t, e, i) {
      var n = Math.sin(i),
        r = Math.cos(i),
        s = e[0],
        o = e[1],
        a = e[2],
        l = e[3],
        c = e[4],
        u = e[5],
        h = e[6],
        m = e[7];
      return e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = s * r + c * n, t[1] = o * r + u * n, t[2] = a * r + h * n, t[3] = l * r + m * n, t[4] = c * r - s * n, t[5] = u * r - o * n, t[6] = h * r - a * n, t[7] = m * r - l * n, t
    }
    e.exports = n
  }, {}],
  255: [function(t, e, i) {
    function n(t, e, i) {
      var n = i[0],
        r = i[1],
        s = i[2];
      return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * r, t[5] = e[5] * r, t[6] = e[6] * r, t[7] = e[7] * r, t[8] = e[8] * s, t[9] = e[9] * s, t[10] = e[10] * s, t[11] = e[11] * s, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
    }
    e.exports = n
  }, {}],
  256: [function(t, e, i) {
    function n(t, e, i) {
      var n, r, s, o, a, l, c, u, h, m, p, d, f = i[0],
        _ = i[1],
        g = i[2];
      return e === t ? (t[12] = e[0] * f + e[4] * _ + e[8] * g + e[12], t[13] = e[1] * f + e[5] * _ + e[9] * g + e[13], t[14] = e[2] * f + e[6] * _ + e[10] * g + e[14], t[15] = e[3] * f + e[7] * _ + e[11] * g + e[15]) : (n = e[0], r = e[1], s = e[2], o = e[3], a = e[4], l = e[5], c = e[6], u = e[7], h = e[8], m = e[9], p = e[10], d = e[11], t[0] = n, t[1] = r, t[2] = s, t[3] = o, t[4] = a, t[5] = l, t[6] = c, t[7] = u, t[8] = h, t[9] = m, t[10] = p, t[11] = d, t[12] = n * f + a * _ + h * g + e[12], t[13] = r * f + l * _ + m * g + e[13], t[14] = s * f + c * _ + p * g + e[14], t[15] = o * f + u * _ + d * g + e[15]), t
    }
    e.exports = n
  }, {}],
  257: [function(t, e, i) {
    function n(t, e) {
      if (t === e) {
        var i = e[1],
          n = e[2],
          r = e[3],
          s = e[6],
          o = e[7],
          a = e[11];
        t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = i, t[6] = e[9], t[7] = e[13], t[8] = n, t[9] = s, t[11] = e[14], t[12] = r, t[13] = o, t[14] = a
      } else t[0] = e[0], t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = e[1], t[5] = e[5], t[6] = e[9], t[7] = e[13], t[8] = e[2], t[9] = e[6], t[10] = e[10], t[11] = e[14], t[12] = e[3], t[13] = e[7], t[14] = e[11], t[15] = e[15];
      return t
    }
    e.exports = n
  }, {}],
  258: [function(t, e, i) {
    function n() {
      var t = new Float32Array(3);
      return t[0] = 0, t[1] = 0, t[2] = 0, t
    }
    e.exports = n
  }, {}],
  259: [function(t, e, i) {
    function n(t, e, i) {
      var n = e[0],
        r = e[1],
        s = e[2],
        o = i[0],
        a = i[1],
        l = i[2];
      return t[0] = r * l - s * a, t[1] = s * o - n * l, t[2] = n * a - r * o, t
    }
    e.exports = n
  }, {}],
  260: [function(t, e, i) {
    function n(t, e) {
      return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }
    e.exports = n
  }, {}],
  261: [function(t, e, i) {
    function n(t, e, i) {
      var n = new Float32Array(3);
      return n[0] = t, n[1] = e, n[2] = i, n
    }
    e.exports = n
  }, {}],
  262: [function(t, e, i) {
    function n(t) {
      var e = t[0],
        i = t[1],
        n = t[2];
      return Math.sqrt(e * e + i * i + n * n)
    }
    e.exports = n
  }, {}],
  263: [function(t, e, i) {
    function n(t, e) {
      var i = e[0],
        n = e[1],
        r = e[2],
        s = i * i + n * n + r * r;
      return s > 0 && (s = 1 / Math.sqrt(s), t[0] = e[0] * s, t[1] = e[1] * s, t[2] = e[2] * s), t
    }
    e.exports = n
  }, {}],
  264: [function(t, e, i) {
    function n() {
      var t = new Float32Array(4);
      return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t
    }
    e.exports = n
  }, {}],
  265: [function(t, e, i) {
    function n(t, e, i, n) {
      var r = new Float32Array(4);
      return r[0] = t, r[1] = e, r[2] = i, r[3] = n, r
    }
    e.exports = n
  }, {}],
  266: [function(t, e, i) {
    function n(t, e, i) {
      var n = e[0],
        r = e[1],
        s = e[2],
        o = e[3];
      return t[0] = i[0] * n + i[4] * r + i[8] * s + i[12] * o, t[1] = i[1] * n + i[5] * r + i[9] * s + i[13] * o, t[2] = i[2] * n + i[6] * r + i[10] * s + i[14] * o, t[3] = i[3] * n + i[7] * r + i[11] * s + i[15] * o, t
    }
    e.exports = n
  }, {}],
  267: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var r = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      s = function() {
        function t(e) {
          n(this, t), this.tryItFreeLink = e, this._updateTryItFreeLink()
        }
        return r(t, [{
          key: "_updateTryItFreeLink",
          value: function() {
            this.tryItFreeLink.removeAttribute("data-analytics-click"), this.tryItFreeLink.removeAttribute("data-analytics-intrapage-link"), this.tryItFreeLink.setAttribute("data-rid-relay", '{"288":"itsct"}'), this.tryItFreeLink.setAttribute("data-analytics-exit-link", "")
          }
        }]), t
      }();
    e.exports = s
  }, {}],
  268: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      a = t("@marcom/bubble-gum/BaseComponent"),
      l = t("@marcom/ac-gallery").SlideGallery,
      c = t("@marcom/ac-gallery").FadeGallery,
      u = ["L", "M", "S"],
      h = {
        GALLERY: "data-gallery"
      },
      m = function(t) {
        function e(t) {
          n(this, e);
          var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
          i._onGalleryUpdate = i._onGalleryUpdate.bind(i), i._onGalleryUpdateComplete = i._onGalleryUpdateComplete.bind(i), i._onOrientationChange = i._onOrientationChange.bind(i), i.galleryOptions = {}, i._normalizeGalleryOptions(), i._createGalleryForViewport(t.pageMetrics.breakpoint);
          var s = document.documentElement.classList.contains("handheld"),
            o = document.documentElement.classList.contains("tablet");
          return (s || o) && window.addEventListener("orientationchange", i._onOrientationChange), i
        }
        return s(e, t), o(e, [{
          key: "_normalizeGalleryOptions",
          value: function() {
            for (var t = {}, e = {
                type: "stacked"
              }, i = void 0, n = 0; n < u.length; n++) {
              var r = u[n],
                s = h.GALLERY + "-" + r,
                o = this.el.getAttribute(s);
              null === o && (i = e, t[r] = !0), "string" == typeof o && (i = JSON.parse(o));
              for (var a in e) i.hasOwnProperty(a) || (i[a] = e[a]);
              e = i, this._saveGalleryOptionDataForViewport(r, i)
            }
          }
        }, {
          key: "_saveGalleryOptionDataForViewport",
          value: function(t, e) {
            var i = Object.assign({}, e);
            this.galleryOptions[t] = {}, this.galleryOptions[t].type = i.type, delete i.type, this.galleryOptions[t].options = i
          }
        }, {
          key: "_createGalleryForViewport",
          value: function(t) {
            var e = this.galleryOptions[t],
              i = 0;
            if (this.galleryObject) {
              if (void 0 === e.options.startAt) {
                var n = this.galleryObject.getCurrentItem();
                i = this.galleryObject.getItemIndex(n)
              }
              this.galleryObject.destroy(), this.galleryObject = null
            }
            switch (e.type) {
              case "stacked":
                this.el.classList.add("gallery-stacked");
                break;
              case "fade":
                this.el.classList.remove("gallery-stacked"), this.galleryObject = new c(this.el, e.options), this._setupAccessibility(this.galleryObject);
                break;
              case "slide":
                this.el.classList.remove("gallery-stacked"), this.galleryObject = new l(this.el, e.options), this._setupAccessibility(this.galleryObject);
                break;
              default:
                throw new Error("GalleryComponent::Invalid gallery type. Valid GalleryComponent types are fade, slide, or stacked.")
            }
            var r = this.galleryObject.getItemAt(i);
            this.galleryObject._update({
              item: r
            })
          }
        }, {
          key: "_galleryOptionsAreEqualForViewports",
          value: function(t, e) {
            var i = JSON.stringify(this.galleryOptions[t]),
              n = JSON.stringify(this.galleryOptions[e]);
            return i === n
          }
        }, {
          key: "onBreakpointChange",
          value: function(t) {
            var e = t.breakpoint,
              i = t.previousBreakpoint;
            this._galleryOptionsAreEqualForViewports(e, i) || this._createGalleryForViewport(e)
          }
        }, {
          key: "_onOrientationChange",
          value: function() {
            setTimeout(function() {
              window.scrollTo(0, window.scrollY)
            }, 400)
          }
        }, {
          key: "_setupAccessibility",
          value: function(t) {
            var e = t._tabNav._el,
              i = this.galleryObject.getCurrentItem();
            this._setupTabNavAccessibility(e, i), t.on(l.UPDATE, this._onGalleryUpdate), t.on(l.UPDATE_COMPLETE, this._onGalleryUpdateComplete)
          }
        }, {
          key: "_setupTabNavAccessibility",
          value: function(t, e) {
            var i = t.querySelector(".tabnav-items");
            i.setAttribute("role", "tablist");
            for (var n = i.querySelectorAll(".tabnav-item"), r = 0, s = n.length; r < s; r++) {
              var o = n[r],
                a = o.querySelector("[data-ac-gallery-trigger]");
              o.setAttribute("role", "presentation"), a.setAttribute("role", "tab"), a.setAttribute("aria-controls", a.getAttribute("data-ac-gallery-trigger")), a.getAttribute("aria-controls") === e._elId ? a.setAttribute("aria-selected", !0) : a.setAttribute("tabindex", -1)
            }
          }
        }, {
          key: "_onGalleryUpdate",
          value: function(t) {
            var e = this.galleryObject._tabNav._el,
              i = e.querySelector('[data-ac-gallery-trigger][aria-selected="true"]');
            i.setAttribute("tabindex", -1);
            var n = t.incoming[0]._elId,
              r = e.querySelector("[data-ac-gallery-trigger=" + n + "]");
            r.removeAttribute("tabindex"), r.focus(), this.gum.trigger("gallery-update", [t, this.galleryObject])
          }
        }, {
          key: "_onGalleryUpdateComplete",
          value: function(t) {
            this.gum.trigger("gallery-update-complete", [t, this.galleryObject])
          }
        }]), e
      }(a);
    e.exports = m
  }, {
    "@marcom/ac-gallery": 126,
    "@marcom/bubble-gum/BaseComponent": 230
  }],
  269: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      a = t("@marcom/bubble-gum/BaseComponent"),
      l = (t("@marcom/ac-raf-emitter/draw"), t("@marcom/ac-raf-emitter/update")),
      c = (t("@marcom/anim-system"), t("@marcom/viewport-emitter"), function(t) {
        function e(t) {
          n(this, e);
          var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
          return i.documentTokenList = document.documentElement.classList, i.reduceMotionEnabled = i.documentTokenList.contains("reduced-motion"), i.fallback = i.reduceMotionEnabled, i.stickyWrapper = i.el.querySelector(".sticky-wrapper"), i.transformContainer = i.el.querySelector(".scaling-container"), i.placeholder = i.el.querySelector(".screen-placeholder"), i.headlineEyebrowContainer = i.el.querySelector(".hero-eyebrow"), i.headlineContainer = i.el.querySelector(".hero-headline"), i.screenLightLoader = i.el.querySelector(".screen-light-loader"), i.screenLight = i.el.querySelector(".screen-light"), i
        }
        return s(e, t), o(e, [{
          key: "mounted",
          value: function(t) {
            this.setScreenKeyframes()
          }
        }, {
          key: "setScreenKeyframes",
          value: function() {
            var t = this,
              e = {
                el: this.transformContainer,
                start: "10vh",
                end: "a2b - a0h",
                ease: 1,
                easeFunction: "easeOutQuad",
                anchors: [".sticky-container", ".screen-placeholder", ".sticky-wrapper"],
                disabledWhen: "no-sticky-enhanced",
                scale: ["max(100vh/a1h, 100vw/a1w) * 0.5", .5],
                y: [0, "a1t - a0t"],
                breakpointMask: "MLX"
              };
            this.screenKeyframe = this.addKeyframe(e), this.stickyWrapper.style.opacity = 1, this.headlineEyebrowContainer.style.animationPlayState = "running", this.headlineContainer.style.animationPlayState = "running", this.gum.getComponentsForElement(this.screenLight)[0].forceLoad(), this.screenLight.loadPromise && l(function() {
              t.screenLight.loadPromise.then(function() {
                t.screenLightLoader.style.opacity = 0
              })
            })
          }
        }], [{
          key: "IS_SUPPORTED",
          value: function() {
            return !0
          }
        }]), e
      }(a));
    e.exports = c
  }, {
    "@marcom/ac-raf-emitter/draw": 186,
    "@marcom/ac-raf-emitter/update": 190,
    "@marcom/anim-system": 213,
    "@marcom/bubble-gum/BaseComponent": 230,
    "@marcom/viewport-emitter": 244
  }],
  270: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      a = t("@marcom/anim-system"),
      l = t("@marcom/anim-system/Model/AnimSystemModel"),
      c = t("@marcom/bubble-gum/BaseComponent"),
      u = t("@marcom/ac-accessibility/TextZoom"),
      h = "sticky-enhanced",
      m = function(t) {
        function e(t) {
          var i = t.pageMetrics;
          n(this, e);
          var s = r(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          return s._pollForFontSizeChange = s._pollForFontSizeChange.bind(s), s._minHeightThreshold = {
            L: 570,
            M: 510,
            S: 10
          }, s._maxHeightThreshold = {
            L: 1646,
            M: 1408,
            S: 2e3
          }, s._isTextZoomed = !1, s._documentTokenList = document.documentElement.classList, s.reduceMotionEnabled = s._documentTokenList.contains("reduced-motion"), s.noEnhancedHero = s._documentTokenList.contains("no-enhanced-hero"), s._documentTokenList.contains("has-text-zoom") && (u.detect(), s._isTextZoomed = s._documentTokenList.contains("text-zoom"), setInterval(s._pollForFontSizeChange, 2e3)), s.gum.once("DOM_COMPONENTS_MOUNTED", function() {
            s._detect(i)
          }), s
        }
        return s(e, t), o(e, null, [{
          key: "IS_SUPPORTED",
          value: function() {
            return !0
          }
        }, {
          key: "EVENTS",
          get: function() {
            return {
              STICKY_SETTLED: "STICKY_SETTLED"
            }
          }
        }]), o(e, [{
          key: "_pollForFontSizeChange",
          value: function() {
            u.remove(), u.detect(), this._isTextZoomed !== this._documentTokenList.contains("text-zoom") && (this._isTextZoomed = this._documentTokenList.contains("text-zoom"), this._detect(l.pageMetrics))
          }
        }, {
          key: "onResizeDebounced",
          value: function(t) {
            this._detect(t)
          }
        }, {
          key: "_detect",
          value: function(t) {
            var e = this._minHeightThreshold[t.breakpoint],
              i = this._maxHeightThreshold[t.breakpoint],
              n = t.windowHeight < e,
              r = t.windowHeight > i;
            this._isTextZoomed || n || r || this.reduceMotionEnabled || this.noEnhancedHero ? this._setFallback(t) : this._setEnhanced(t)
          }
        }, {
          key: "_setFallback",
          value: function(t) {
            this._documentTokenList.add("no-" + h), this._documentTokenList.remove(h), a.forceUpdate({
              updateActiveKeyframes: !0,
              waitForNextUpdate: !1
            }), this.gum.trigger(e.EVENTS.STICKY_SETTLED, t)
          }
        }, {
          key: "_setEnhanced",
          value: function(t) {
            this._documentTokenList.add(h), this._documentTokenList.remove("no-" + h), a.forceUpdate({
              updateActiveKeyframes: !0,
              waitForNextUpdate: !1
            }), this.gum.trigger(e.EVENTS.STICKY_SETTLED, t)
          }
        }]), e
      }(c);
    e.exports = m
  }, {
    "@marcom/ac-accessibility/TextZoom": 2,
    "@marcom/anim-system": 213,
    "@marcom/anim-system/Model/AnimSystemModel": 218,
    "@marcom/bubble-gum/BaseComponent": 230
  }],
  271: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      a = t("@marcom/bubble-gum/BaseComponent"),
      l = "data-focus-options",
      c = {
        animEl: null,
        disabledWhen: null,
        tabindex: null
      },
      u = function(t) {
        function e() {
          n(this, e);
          var t = r(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          return t._onFocus = t._onFocus.bind(t), t.options = t._parseOptions(), t._isDisabled = t._checkIfDisabled(), t
        }
        return s(e, t), o(e, null, [{
          key: "IS_SUPPORTED",
          value: function() {
            return !0
          }
        }]), o(e, [{
          key: "mounted",
          value: function() {
            this.animEl = this.options.animEl ? document.querySelector(this.options.animEl) : this.el, this.animEl && (this.options.tabindex && (this.el.setAttribute("tabindex", -1), this.el.style.outline = "none"), this.el.addEventListener("focusin", this._onFocus))
          }
        }, {
          key: "onResizeDebounced",
          value: function() {
            this._isDisabled = this._checkIfDisabled()
          }
        }, {
          key: "_checkIfDisabled",
          value: function() {
            if (null === this.options.disabledWhen) return !1;
            if ("string" == typeof this.options.disabledWhen) return document.documentElement.classList.contains(this.options.disabledWhen);
            if (Array.isArray(this.options.disabledWhen)) {
              var t = !0,
                e = !1,
                i = void 0;
              try {
                for (var n, r = this.options.disabledWhen[Symbol.iterator](); !(t = (n = r.next()).done); t = !0) {
                  var s = n.value;
                  if (document.documentElement.classList.contains(s)) return !0
                }
              } catch (o) {
                e = !0, i = o
              } finally {
                try {
                  !t && r["return"] && r["return"]()
                } finally {
                  if (e) throw i
                }
              }
              return !1
            }
            return !0
          }
        }, {
          key: "_parseOptions",
          value: function() {
            var t = JSON.parse(this.el.getAttribute(l) || "{}");
            return Object.assign({}, c, t)
          }
        }, {
          key: "_onFocus",
          value: function(t) {
            var e = this;
            if (!this._isDisabled && "mouse" !== t.target.getAttribute("data-focus-method")) {
              if (this.options.forceScrollTo) return void requestAnimationFrame(function() {
                return window.scrollTo(0, e.options.forceScrollTo)
              });
              var i = this.anim.getControllerForTarget(this.animEl),
                n = this._findKeyframe(i);
              if (n) {
                var r = this.anim.getGroupForTarget(this.animEl),
                  s = r.convertTValueToScrollPosition(n.end);
                requestAnimationFrame(function() {
                  return window.scrollTo(0, s)
                })
              }
            }
          }
        }, {
          key: "_findKeyframe",
          value: function(t) {
            var e = t.getAllKeyframesForAttribute("opacity");
            if (!e) return null;
            var i = e.find(function(t) {
              return 1 === parseInt(t.animValues.opacity[0]) || 1 === parseInt(t.animValues.opacity[1])
            });
            return i === -1 ? null : i
          }
        }]), e
      }(a);
    e.exports = u
  }, {
    "@marcom/bubble-gum/BaseComponent": 230
  }],
  272: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      a = t("@marcom/bubble-gum/BaseComponent"),
      l = document.querySelector("#ac-localnav"),
      c = document.querySelector("#ac-globalnav"),
      u = 0,
      h = function(t) {
        function e(t) {
          n(this, e);
          var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
          return i.onBreakpointChange(), i.uniqueSelector = i.generateIdentifyingSelector(), i.initializeKeyframe(), i
        }
        return s(e, t), o(e, [{
          key: "generateIdentifyingSelector",
          value: function() {
            var t = "data-ln-section",
              e = ++u;
            return this.el.setAttribute(t, e), "[" + t + '="' + e + '"]'
          }
        }, {
          key: "initializeKeyframe",
          value: function() {
            this.keyframe && this.keyframe.remove(), this.localnavHeight = l.clientHeight, this.globalnavHeight = c.clientHeight, this.keyframe = this.anim.addKeyframe(l, {
              start: "0% - " + this.localnavHeight + "px - " + this.globalnavHeight + "px",
              end: "0% + " + this.globalnavHeight + "px",
              cssClass: "ac-localnav-dark",
              toggle: !0,
              anchors: [this.uniqueSelector],
              breakpointMask: "MLX",
              disabledWhen: "no-sticky-enhanced"
            })
          }
        }, {
          key: "onBreakpointChange",
          value: function() {
            this.localnavHeight = l.clientHeight, this.globalnavHeight = c.clientHeight
          }
        }], [{
          key: "IS_SUPPORTED",
          value: function() {
            return c && l
          }
        }]), e
      }(a);
    e.exports = h
  }, {
    "@marcom/bubble-gum/BaseComponent": 230
  }],
  273: [function(t, e, i) {
    "use strict";

    function n(t) {
      var e = t.el.querySelectorAll(".thumbnail-transcript-button");
      e = Array.from(e), e.forEach(function(e) {
        var i = t.el.querySelector(".video-transcript");
        e.addEventListener("click", this.openModal.bind(this, i))
      }.bind(this)), this.modal = r({
        retainScrollPosition: !0
      }), this.modal.modalElement.setAttribute("aria-labelledby", "transcript-modal"), this.modal.modalElement.removeAttribute("aria-label"), this.modal.on("open", function() {
        setTimeout(function() {
          document.querySelector(".modal-open > .modal-close").focus()
        }, 350)
      }), this.modal.on("close", function() {
        document.querySelector(".thumbnail-transcript-button").focus()
      }), s.call(this, t)
    }
    var r = (t("@marcom/ac-modal").Modal, t("@marcom/ac-modal").createFullViewportModal),
      s = t("@marcom//bubble-gum/BaseComponent"),
      o = (s.prototype, n.prototype = Object.create(s.prototype));
    o.openModal = function(t) {
      var e = this.modal.contentElement.children;
      e.length > 0 && this.modal.contentElement.removeChild(e[0]), this.modal.appendContent(t), this.modal.open()
    }, e.exports = n
  }, {
    "@marcom//bubble-gum/BaseComponent": 230,
    "@marcom/ac-modal": 153
  }],
  274: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var r = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      s = t("@marcom/ac-modal").createStandardModal,
      o = t("@marcom/ac-raf-emitter/update"),
      a = t("@marcom/ac-raf-emitter/draw"),
      l = "#notify-me",
      c = function() {
        function t(e, i) {
          var r = this;
          n(this, t), this.button = e, this.button.setAttribute("data-analytics-click", "prop3: try it free modal"), this.button.setAttribute("data-analytics-intrapage-link", ""), this._openModal = this._openModal.bind(this), o(function() {
            var t = i.getAttribute("data-modal-close-label");
            a(function() {
              r.modal = s(i);
              var e = r.element = r.modal.modalElement;
              r.element.classList.add("modal-notify"), t && r.modal.closeButton.setAttribute("aria-label", t), r.element.setAttribute("aria-labelledby", "modal-notify-headline"), r.element.tabIndex = -1, r.modal._giveModalFocus = function() {
                this.modalElement.removeAttribute("aria-hidden"), this._activeElement = document.activeElement, a(function() {
                  return e.focus()
                }), this._circularTab.start()
              }, r._onDeepLinkLoad()
            })
          }), this._addLinkEvents()
        }
        return r(t, [{
          key: "_onDeepLinkLoad",
          value: function() {
            var t = window.location.hash,
              e = new RegExp(l, "i");
            e.test(t) && this._openModal()
          }
        }, {
          key: "_addLinkEvents",
          value: function() {
            var t = this;
            a(function() {
              return t.button.setAttribute("role", "button")
            }), this.button.addEventListener("click", this._openModal, !0)
          }
        }, {
          key: "_openModal",
          value: function(t) {
            var e = this;
            t && t.preventDefault(), a(function() {
              e.modal.open()
            })
          }
        }]), t
      }();
    e.exports = c
  }, {
    "@marcom/ac-modal": 153,
    "@marcom/ac-raf-emitter/draw": 186,
    "@marcom/ac-raf-emitter/update": 190
  }],
  275: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      a = t("@marcom/bubble-gum/BaseComponent"),
      l = t("@marcom/ac-raf-emitter/update"),
      c = t("@marcom/ac-raf-emitter/draw"),
      u = function(t) {
        function e(t) {
          n(this, e);
          var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
          return i.DATA_ATTRIBUTE = "data-progressive-image", i.DATA_LOADED_ATTRIBUTE = "data-progressive-image-loaded", i.loadAndSetVisible = i.loadAndSetVisible.bind(i), i._didLoad = !1, i
        }
        return s(e, t), o(e, [{
          key: "loadAndSetVisible",
          value: function() {
            var t = this;
            if (!this._didLoad) return new Promise(function(e, i) {
              t.setVisible().then(function() {
                return t._getBackgroundImageSrc()
              }).then(function(e) {
                return t._loadImage(e)
              }).then(function() {
                c(function() {
                  t.el.setAttribute(t.DATA_LOADED_ATTRIBUTE, ""), t._didLoad = !0, e()
                }, !0)
              })
            })
          }
        }, {
          key: "_getBackgroundImageSrc",
          value: function() {
            var t = this;
            return new Promise(function(e, i) {
              l(function() {
                var i = t.el.currentStyle;
                return i || (i = window.getComputedStyle(t.el, !1)), 0 === i.backgroundImage.indexOf("url(") ? void e(i.backgroundImage.slice(4, -1).replace(/"/g, "")) : void e(null)
              }, !0)
            })
          }
        }, {
          key: "_loadImage",
          value: function(t) {
            return new Promise(this._loadImagePromiseFunc.bind(this, t))
          }
        }, {
          key: "_loadImagePromiseFunc",
          value: function(t, e, i) {
            function n() {
              this.removeEventListener("load", n), e(this), e = null
            }
            if (!t) return void e(null);
            var r = new Image;
            r.addEventListener("load", n), r.src = t
          }
        }, {
          key: "setVisible",
          value: function() {
            var t = this;
            return new Promise(function(e, i) {
              c(function() {
                t.el.removeAttribute(t.DATA_ATTRIBUTE), e()
              }, !0)
            })
          }
        }, {
          key: "mounted",
          value: function() {
            var t = this;
            if (!this._didLoad) {
              this.addDiscreteEvent({
                start: "t - 200vh",
                end: "b + 100vh",
                event: "ProgressiveImageLoad",
                onEnter: function() {
                  t.el.loadPromise = t.loadAndSetVisible()
                }
              })
            }
          }
        }, {
          key: "forceLoad",
          value: function() {
            this.el.loadPromise = this.loadAndSetVisible()
          }
        }, {
          key: "onBreakpointChange",
          value: function(t) {
            this._didLoad = !1
          }
        }]), e
      }(a);
    e.exports = u
  }, {
    "@marcom/ac-raf-emitter/draw": 186,
    "@marcom/ac-raf-emitter/update": 190,
    "@marcom/bubble-gum/BaseComponent": 230
  }],
  276: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      a = t("@marcom/bubble-gum/BaseComponent"),
      l = function(t) {
        function e(t) {
          n(this, e);
          var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
          return console.log("Bubble-gum ready - remove from:", i.el), i
        }
        return s(e, t), o(e, [{
          key: "mounted",
          value: function() {}
        }], [{
          key: "IS_SUPPORTED",
          value: function() {
            return !0
          }
        }]), e
      }(a);
    e.exports = l
  }, {
    "@marcom/bubble-gum/BaseComponent": 230
  }],
  277: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var o = t("@marcom/bubble-gum/BaseComponent"),
      a = t("@marcom/ac-tabnav"),
      l = function(t) {
        function e(t) {
          n(this, e);
          var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)),
            s = document.querySelector(".tabnav");
          new a(s);
          return i
        }
        return s(e, t), e
      }(o);
    e.exports = l
  }, {
    "@marcom/ac-tabnav": 203,
    "@marcom/bubble-gum/BaseComponent": 230
  }],
  278: [function(t, e, i) {
    "use strict";
    var n = (t("@marcom/anim-system"), t("@marcom/anim-system/Model/AnimSystemModel"), t("@marcom/bubble-gum")),
      r = t("@marcom/bubble-gum/ComponentMap"),
      s = t("./model/SiteComponentMap"),
      o = t("@marcom/ac-accessibility/TextZoom"),
      a = t("@marcom/data-relay"),
      l = t("@marcom/ac-useragent"),
      c = t("@marcom/feature-detect/touchAvailable"),
      u = t("./components/ArcadeLink"),
      h = t("./components/NotifyModal"),
      m = {
        initialize: function() {
          Object.assign(r, s), document.querySelectorAll("main section").forEach(function(t) {
            t.setAttribute("data-anim-scroll-group", t.className.replace(/ /g, "."))
          });
          var t = document.querySelector(".main");
          new n(t), o.detect(), m.setupDataRelay(), m.setupArcadeLink()
        },
        setupArcadeLink: function() {
          var t = document.querySelector("#arcade-try-it-free"),
            e = document.querySelector("[data-notify-modal]"),
            i = l.os.version.major,
            n = l.os.version.minor,
            r = l.os.ios && i >= 13,
            s = l.os.osx && i >= 10 && n >= 15 && c(),
            o = l.os.osx && i >= 10 && n >= 15;
          t && (r || s || o ? new u(t) : new h(t, e))
        },
        setupDataRelay: function() {
          if (a) {
            var t = {
                properties: {
                  customAnalyticsAttribute: "data-analytics-exit-link"
                }
              },
              e = new a(t);
            e && e.passiveTrackingOptions && (e.passiveTrackingOptions.overwriteAppMeasurementValues = !0)
          }
        }
      };
    m.initialize()
  }, {
    "./components/ArcadeLink": 267,
    "./components/NotifyModal": 274,
    "./model/SiteComponentMap": 279,
    "@marcom/ac-accessibility/TextZoom": 2,
    "@marcom/ac-useragent": 209,
    "@marcom/anim-system": 213,
    "@marcom/anim-system/Model/AnimSystemModel": 218,
    "@marcom/bubble-gum": 231,
    "@marcom/bubble-gum/ComponentMap": 232,
    "@marcom/data-relay": void 0,
    "@marcom/feature-detect/touchAvailable": 236
  }],
  279: [function(t, e, i) {
    "use strict";
    e.exports = {
      StubComponent: t("../components/StubComponent"),
      ProgressiveImage: t("../components/ProgressiveImage"),
      GalleryComponent: t("../components/GalleryComponent"),
      ModalComponent: t("../components/ModalComponent"),
      HeroEnhancementCheck: t("../components/HeroEnhancementCheck"),
      HeroComponent: t("../components/HeroComponent"),
      HeroFocusComponent: t("../components/HeroFocusComponent"),
      LocalNavThemeDark: t("../components/LocalNavThemeDark"),
      TabNavComponent: t("../components/TabNavComponent")
    }
  }, {
    "../components/GalleryComponent": 268,
    "../components/HeroComponent": 269,
    "../components/HeroEnhancementCheck": 270,
    "../components/HeroFocusComponent": 271,
    "../components/LocalNavThemeDark": 272,
    "../components/ModalComponent": 273,
    "../components/ProgressiveImage": 275,
    "../components/StubComponent": 276,
    "../components/TabNavComponent": 277
  }]
}, {}, [278]);