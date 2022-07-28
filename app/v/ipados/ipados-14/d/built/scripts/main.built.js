! function t(e, i, s) {
  function r(a, o) {
    if (!i[a]) {
      if (!e[a]) {
        var h = "function" == typeof require && require;
        if (!o && h) return h(a, !0);
        if (n) return n(a, !0);
        var l = new Error("Cannot find module '" + a + "'");
        throw l.code = "MODULE_NOT_FOUND", l
      }
      var c = i[a] = {
        exports: {}
      };
      e[a][0].call(c.exports, (function(t) {
        return r(e[a][1][t] || t)
      }), c, c.exports, t, e, i, s)
    }
    return i[a].exports
  }
  for (var n = "function" == typeof require && require, a = 0; a < s.length; a++) r(s[a]);
  return r
}({
  1: [function(t, e, i) {
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
      if (t.visibility = "hidden", t.position = "absolute", t.top = "0", t.bottom = "0", t.zIndex = "-1", this.span.innerHTML = "&nbsp;", !window.ResizeObserver) {
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
    }, e.exports = new s
  }, {}],
  2: [function(t, e, i) {
    "use strict";
    var s = t(3),
      r = {
        complete: function(t, e) {},
        error: function(t, e) {},
        method: "GET",
        headers: {},
        success: function(t, e, i) {},
        timeout: 5e3
      },
      n = {
        ajax: function(t, e) {
          e = function() {
            for (var t = 1; t < arguments.length; t++)
              for (var e in arguments[t]) arguments[t].hasOwnProperty(e) && (arguments[0][e] = arguments[t][e]);
            return arguments[0]
          }({}, r, e), "//" === t.substr(0, 2) && (t = window.location.protocol + t);
          var i = s(t);
          return i.open(e.method, t), i.setTransportHeaders(e.headers), i.setReadyStateChangeHandlers(e.complete, e.error, e.success), i.setTimeout(e.timeout, e.error, e.complete), i.send(e.data), i
        },
        get: function(t, e) {
          return e.method = "GET", n.ajax(t, e)
        },
        head: function(t, e) {
          return e.method = "HEAD", n.ajax(t, e)
        },
        post: function(t, e) {
          return e.method = "POST", n.ajax(t, e)
        }
      };
    e.exports = n
  }, {
    3: 3
  }],
  3: [function(t, e, i) {
    "use strict";
    var s = t(6),
      r = t(5),
      n = /.*(?=:\/\/)/,
      a = /^.*:\/\/|\/.+$/g,
      o = window.XDomainRequest && document.documentMode < 10;
    e.exports = function(t, e) {
      return new(o && function(t) {
        return !!t.match(n) && t.replace(a, "") !== window.location.hostname
      }(t) ? r : s)
    }
  }, {
    5: 5,
    6: 6
  }],
  4: [function(t, e, i) {
    "use strict";
    var s = function() {};
    s.create = function() {
      var t = function() {};
      return t.prototype = s.prototype, new t
    }, s.prototype.open = function(t, e) {
      t = t.toUpperCase(), this.xhr.open(t, e)
    }, s.prototype.send = function(t) {
      this.xhr.send(t)
    }, s.prototype.setTimeout = function(t, e, i) {
      this.xhr.ontimeout = function() {
        e(this.xhr, this.status), i(this.xhr, this.status)
      }.bind(this)
    }, s.prototype.setTransportHeaders = function(t) {
      for (var e in t) this.xhr.setRequestHeader(e, t[e])
    }, e.exports = s
  }, {}],
  5: [function(t, e, i) {
    "use strict";
    var s = t(4),
      r = t(18),
      n = function() {
        this.xhr = new XDomainRequest
      };
    (n.prototype = s.create()).setReadyStateChangeHandlers = function(t, e, i) {
      this.xhr.onerror = function() {
        e(this.xhr, this.status), t(this.xhr, this.status)
      }.bind(this), this.xhr.onload = function() {
        i(this.xhr.responseText, this.xhr.status, this.xhr), t(this.xhr, this.status)
      }.bind(this)
    }, n.prototype.send = function(t) {
      t && "object" == typeof t && (t = r(t)), this.xhr.send(t)
    }, n.prototype.setTransportHeaders = function(t) {}, e.exports = n
  }, {
    18: 18,
    4: 4
  }],
  6: [function(t, e, i) {
    "use strict";
    var s = t(4),
      r = function() {
        this.xhr = new XMLHttpRequest
      };
    (r.prototype = s.create()).setReadyStateChangeHandlers = function(t, e, i) {
      this.xhr.onreadystatechange = function(s) {
        4 === this.xhr.readyState && (clearTimeout(this.timeout), this.xhr.status >= 200 && this.xhr.status < 300 ? (i(this.xhr.responseText, this.xhr.status, this.xhr), t(this.xhr, this.status)) : (e(this.xhr, this.status), t(this.xhr, this.status)))
      }.bind(this)
    }, e.exports = r
  }, {
    4: 4
  }],
  7: [function(t, e, i) {
    "use strict";
    var s = !1,
      r = window || self;
    try {
      s = !!r.localStorage.getItem("f7c9180f-5c45-47b4-8de4-428015f096c0")
    } catch (t) {}
    e.exports = s
  }, {}],
  8: [function(t, e, i) {
    "use strict";
    e.exports = t(9)("error")
  }, {
    9: 9
  }],
  9: [function(t, e, i) {
    "use strict";
    var s = t(7);
    e.exports = function(t) {
      return function() {
        if (s && "object" == typeof window.console && "function" == typeof console[t]) return console[t].apply(console, Array.prototype.slice.call(arguments, 0))
      }
    }
  }, {
    7: 7
  }],
  10: [function(t, e, i) {
    "use strict";
    e.exports = t(9)("log")
  }, {
    9: 9
  }],
  11: [function(t, e, i) {
    "use strict";
    e.exports = t(9)("warn")
  }, {
    9: 9
  }],
  12: [function(t, e, i) {
    "use strict";
    e.exports = {
      EventEmitterMicro: t(13)
    }
  }, {
    13: 13
  }],
  13: [function(t, e, i) {
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
    }, e.exports = s
  }, {}],
  14: [function(t, e, i) {
    e.exports = function(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
  }, {}],
  15: [function(t, e, i) {}, {}],
  16: [function(t, e, i) {
    "use strict";
    var s = t(17);
    e.exports = function(t, e) {
      if ("object" != typeof t) throw new TypeError("defaults: must provide a defaults object");
      if ("object" != typeof(e = e || {})) throw new TypeError("defaults: options must be a typeof object");
      return s({}, t, e)
    }
  }, {
    17: 17
  }],
  17: [function(t, e, i) {
    "use strict";
    t(15);
    var s = Object.prototype.hasOwnProperty;
    e.exports = function() {
      var t, e;
      return t = arguments.length < 2 ? [{}, arguments[0]] : [].slice.call(arguments), e = t.shift(), t.forEach((function(t) {
        if (null != t)
          for (var i in t) s.call(t, i) && (e[i] = t[i])
      })), e
    }
  }, {
    15: 15
  }],
  18: [function(t, e, i) {
    "use strict";
    var s = t(35);
    e.exports = function(t) {
      if ("object" != typeof t) throw new TypeError("toQueryParameters error: argument is not an object");
      return s(t, !1)
    }
  }, {
    35: 35
  }],
  19: [function(t, e, i) {
    "use strict";
    var s = t(16),
      r = t(20).LiveQueue,
      n = t(12).EventEmitterMicro,
      a = t(30),
      o = t(29),
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

    function c(t) {
      n.call(this), this.options = s(h, t), this.loadingOptions = null, this.els = [], this.loadingQueue = null, this._queueItems = [], this._queueItemsObj = {}, this._loadOrder = [], this._timeout = null, this._didCallLoad = !1
    }
    c.Events = {
      ImageLoad: "image-load",
      Complete: "complete"
    };
    var u = c.prototype = Object.create(n.prototype);
    u.load = function(t) {
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
    }, u.setVisible = function(t) {
      return new Promise(function(e, i) {
        o(function() {
          t.removeAttribute(this._getProgressiveImageDataAttribute()), e(), t = null
        }.bind(this))
      }.bind(this))
    }, u.cancel = function() {
      if (this.els) {
        var t, e = this.els.length;
        for (t = 0; t < e; t++) this.setVisible(this.els[t]), this.loadingOptions.imageAnimate && o(function() {
          this.els[t].setAttribute("data-progressive-image-loaded", "")
        }.bind(this, t))
      }
      this._handleLoadingComplete()
    }, u.destroy = function() {
      this.cancel(), this.off(), n.prototype.destroy.call(this)
    }, u._loadNextItem = function(t) {
      return new Promise(function(t, e, i) {
        var s = this._queueItemsObj[t];
        this._loadAndSetVisible(s.el).then(function() {
          var t = this._queueItems.indexOf(s);
          this._queueItems.splice(t, 1), this._queueItemsObj[s.id] = null, e(), this._handleImageLoad(s.el), s = e = null, 1 === this.loadingQueue.count() && this._handleLoadingComplete()
        }.bind(this))
      }.bind(this, t))
    }, u._loadAndSetVisible = function(t) {
      return new Promise(function(e, i) {
        this.setVisible(t).then(function() {
          this._getBackgroundImageSrc(t).then(function(i) {
            this._loadImage(i).then(e), t = null
          }.bind(this))
        }.bind(this))
      }.bind(this))
    }, u._getBackgroundImageSrc = function(t) {
      return new Promise(function(e, i) {
        a(function() {
          var i = t.currentStyle;
          i || (i = window.getComputedStyle(t, !1)), t = null, 0 !== i.backgroundImage.indexOf("url(") ? e(null) : e(i.backgroundImage.slice(4, -1).replace(/"/g, ""))
        }.bind(this))
      }.bind(this))
    }, u._getProgressiveImageDataAttribute = function() {
      return this.loadingOptions.imageDataAttribute
    }, u._getProgressiveImageCSSQuery = function() {
      return "[" + this._getProgressiveImageDataAttribute() + "]"
    }, u._getProgressiveImageElements = function() {
      return this.options.container.querySelectorAll(this._getProgressiveImageCSSQuery()) || []
    }, u._loadImage = function(t) {
      return new Promise(this._loadImagePromiseFunc.bind(this, t))
    }, u._loadImagePromiseFunc = function(t, e, i) {
      if (t) {
        var s = new Image;
        s.addEventListener("load", (function t() {
          this.removeEventListener("load", t), e(this), e = null
        })), s.src = t
      } else e(null)
    }, u._clearTimeout = function() {
      this._timeout && (window.clearTimeout(this._timeout), this._timeout = null)
    }, u._handleImageLoad = function(t) {
      o(function() {
        this.trigger(c.Events.ImageLoad, t), this.loadingOptions.imageAnimate && t.setAttribute("data-progressive-image-loaded", ""), t = null
      }.bind(this))
    }, u._handleLoadingComplete = function() {
      this.loadingQueue.stop(), this._clearTimeout(), this.trigger(c.Events.Complete)
    }, e.exports = c
  }, {
    12: 12,
    16: 16,
    20: 20,
    29: 29,
    30: 30
  }],
  20: [function(t, e, i) {
    "use strict";
    e.exports = {
      Queue: t(22),
      QueueItem: t(23),
      LiveQueue: t(21)
    }
  }, {
    21: 21,
    22: 22,
    23: 23
  }],
  21: [function(t, e, i) {
    "use strict";
    t(15), t(15), t(15);
    var s = t(22),
      r = t(23);

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
    }, e.exports = n
  }, {
    15: 15,
    22: 22,
    23: 23
  }],
  22: [function(t, e, i) {
    "use strict";
    var s = t(23);

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
    }, r.PRIORITY_LOW = 10, r.PRIORITY_DEFAULT = 5, r.PRIORITY_HIGH = 1, e.exports = r
  }, {
    23: 23
  }],
  23: [function(t, e, i) {
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
    }, e.exports = r
  }, {}],
  24: [function(t, e, i) {
    "use strict";
    var s = t(33).SharedInstance,
      r = function() {
        this._currentID = 0
      };
    r.prototype.getNewID = function() {
      return this._currentID++, "raf:" + this._currentID
    }, e.exports = s.share("ac-raf-emitter-id-generator:sharedRAFEmitterIDGeneratorInstance", "1.0.3", r)
  }, {
    33: 33
  }],
  25: [function(t, e, i) {
    "use strict";
    var s, r = t(12).EventEmitterMicro,
      n = t(32),
      a = t(24);

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
    }, e.exports = o
  }, {
    12: 12,
    24: 24,
    32: 32
  }],
  26: [function(t, e, i) {
    "use strict";
    var s = t(28),
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
    }, e.exports = r
  }, {
    28: 28
  }],
  27: [function(t, e, i) {
    "use strict";
    var s = t(26),
      r = function() {
        this.events = {}
      },
      n = r.prototype;
    n.requestAnimationFrame = function(t) {
      return this.events[t] || (this.events[t] = new s(t)), this.events[t].requestAnimationFrame
    }, n.cancelAnimationFrame = function(t) {
      return this.events[t] || (this.events[t] = new s(t)), this.events[t].cancelAnimationFrame
    }, e.exports = new r
  }, {
    26: 26
  }],
  28: [function(t, e, i) {
    "use strict";
    var s = t(25),
      r = function(t) {
        s.call(this, t)
      };
    (r.prototype = Object.create(s.prototype))._subscribe = function() {
      return this.executor.subscribe(this, !0)
    }, e.exports = r
  }, {
    25: 25
  }],
  29: [function(t, e, i) {
    "use strict";
    var s = t(27);
    e.exports = s.requestAnimationFrame("draw")
  }, {
    27: 27
  }],
  30: [function(t, e, i) {
    "use strict";
    var s = t(27);
    e.exports = s.requestAnimationFrame("update")
  }, {
    27: 27
  }],
  31: [function(t, e, i) {
    "use strict";
    var s;

    function r(t) {
      t = t || {}, this._reset(), this._willRun = !1, this._totalSubscribeCount = -1, this._requestAnimationFrame = window.requestAnimationFrame, this._cancelAnimationFrame = window.cancelAnimationFrame, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
    }
    t(15), (s = r.prototype).subscribe = function(t, e) {
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
    }, e.exports = r
  }, {
    15: 15
  }],
  32: [function(t, e, i) {
    "use strict";
    var s = t(33).SharedInstance,
      r = t(31);
    e.exports = s.share("ac-raf-executor:sharedRAFExecutorInstance", "2.0.1", r)
  }, {
    31: 31,
    33: 33
  }],
  33: [function(t, e, i) {
    "use strict";
    e.exports = {
      SharedInstance: t(34)
    }
  }, {
    34: 34
  }],
  34: [function(t, e, i) {
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
    n || (n = r.AC = {}), n.SharedInstance || (n.SharedInstance = a), e.exports = n.SharedInstance
  }, {}],
  35: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e) {
      var i = "";
      if (t) {
        var s = Object.keys(t),
          r = s.length - 1;
        s.forEach((function(e, s) {
          var n = t[e],
            a = (e = e.trim()) + (n = null === (n = n && "string" == typeof n ? n.trim() : n) ? "" : "=" + n) + (s === r ? "" : "&");
          i = i ? i.concat(a) : a
        }))
      }
      return i && !1 !== e ? "?" + i : i
    }
  }, {}],
  36: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e = (t = (t = t || window.location.search).replace(/^[^?]*\?/, "")) ? t.split("&") : [],
        i = {},
        s = new RegExp("=");
      return e.forEach((function(t) {
        var e, r;
        if (s.test(t)) {
          var n = t.split("=", 2);
          e = n[0], r = n[1]
        } else e = t, r = null;
        i[e] = r
      })), i
    }
  }, {}],
  37: [function(t, e, i) {
    "use strict";
    var s = t(36);
    e.exports = function(t) {
      var e, i = "",
        r = !1;
      return t ? window.URL && "function" == typeof window.URL ? e = new URL(t, window.location) : ((e = document.createElement("a")).href = t, e.href = e.href, function(t) {
        var e = t.port,
          i = new RegExp(":" + e);
        return e && !i.test(t.href) && i.test(t.host)
      }(e) && (i = e.host.replace(new RegExp(":" + e.port), ""), r = !0)) : e = window.location, {
        hash: e.hash,
        host: i || e.host,
        hostname: e.hostname,
        href: e.href,
        origin: e.origin || e.protocol + "//" + (i || e.host),
        pathname: e.pathname,
        port: r ? "" : e.port,
        protocol: e.protocol,
        search: e.search,
        searchParams: s(e.search)
      }
    }
  }, {
    36: 36
  }],
  38: [function(t, e, i) {
    "use strict";
    e.exports = {
      majorVersionNumber: "3.x"
    }
  }, {}],
  39: [function(t, e, i) {
    "use strict";
    var s, r = t(12).EventEmitterMicro,
      n = t(46),
      a = t(45);

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
    }, e.exports = o
  }, {
    12: 12,
    45: 45,
    46: 46
  }],
  40: [function(t, e, i) {
    "use strict";
    var s, r = t(13);

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
    }, e.exports = n
  }, {
    13: 13
  }],
  41: [function(t, e, i) {
    "use strict";
    var s = t(43),
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
    }, e.exports = r
  }, {
    43: 43
  }],
  42: [function(t, e, i) {
    "use strict";
    var s = t(41),
      r = function() {
        this.events = {}
      },
      n = r.prototype;
    n.requestAnimationFrame = function(t) {
      return this.events[t] || (this.events[t] = new s(t)), this.events[t].requestAnimationFrame
    }, n.cancelAnimationFrame = function(t) {
      return this.events[t] || (this.events[t] = new s(t)), this.events[t].cancelAnimationFrame
    }, e.exports = new r
  }, {
    41: 41
  }],
  43: [function(t, e, i) {
    "use strict";
    var s = t(39),
      r = function(t) {
        s.call(this, t)
      };
    (r.prototype = Object.create(s.prototype))._subscribe = function() {
      return this.executor.subscribe(this, !0)
    }, e.exports = r
  }, {
    39: 39
  }],
  44: [function(t, e, i) {
    "use strict";
    var s = t(42);
    e.exports = s.requestAnimationFrame("draw")
  }, {
    42: 42
  }],
  45: [function(t, e, i) {
    "use strict";
    var s = t(33).SharedInstance,
      r = t(38).majorVersionNumber,
      n = function() {
        this._currentID = 0
      };
    n.prototype.getNewID = function() {
      return this._currentID++, "raf:" + this._currentID
    }, e.exports = s.share("@marcom/ac-raf-emitter/sharedRAFEmitterIDGeneratorInstance", r, n)
  }, {
    33: 33,
    38: 38
  }],
  46: [function(t, e, i) {
    "use strict";
    var s = t(33).SharedInstance,
      r = t(38).majorVersionNumber,
      n = t(40);
    e.exports = s.share("@marcom/ac-raf-emitter/sharedRAFExecutorInstance", r, n)
  }, {
    33: 33,
    38: 38,
    40: 40
  }],
  47: [function(t, e, i) {
    "use strict";
    var s = t(42);
    e.exports = s.requestAnimationFrame("update")
  }, {
    42: 42
  }],
  48: [function(t, e, i) {
    "use strict";
    class s {
      constructor(t = {}) {
        this.options = t, "loading" === document.readyState ? document.addEventListener("readystatechange", t => {
          "interactive" === document.readyState && this._init()
        }) : this._init()
      }
      _init() {
        if (this._images = Array.from(document.querySelectorAll("*[".concat(s.DATA_ATTRIBUTE, "]"))), this.AnimSystem = this._findAnim(), null === this.AnimSystem) return null;
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
        this._scrollGroup = this.AnimSystem.getGroupForTarget(document.body), this._images.forEach(t => {
          this.AnimSystem.getGroupForTarget(t) && (this._scrollGroup = this.AnimSystem.getGroupForTarget(t));
          let e = this._defineKeyframeOptions(t);
          this._scrollGroup.addKeyframe(t, e).controller.once("AnimLazyImage:enter", () => {
            this._imageIsInLoadRange(t)
          })
        })
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
        return t.map(t => t._animInfo ? t._animInfo.group : null).filter(t => null !== t), t[0] && t[0]._animInfo ? t[0]._animInfo.group.anim : (console.error("AnimLazyImage: AnimSystem not found, please initialize anim before instantiating"), null)
      }
    }
    s.DATA_DOWNLOAD_AREA_KEYFRAME = "data-download-area-keyframe", s.DATA_ATTRIBUTE = "data-anim-lazy-image", e.exports = s
  }, {}],
  49: [function(t, e, i) {
    "use strict";
    const s = t(48),
      r = t(121),
      n = t(44),
      a = t(47);
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
        this._scrollGroup = this.AnimSystem.getGroupForTarget(document.body), this._images.forEach(t => {
          this.AnimSystem.getGroupForTarget(t) && (this._scrollGroup = this.AnimSystem.getGroupForTarget(t));
          let e = this._defineKeyframeOptions(t);
          this._scrollGroup.addKeyframe(t, e).controller.on("AnimLazyImage:enter", () => {
            this._imageIsInLoadRange(t)
          })
        })
      }
      _onBreakpointChangeCallback(t) {
        this._resetPromises(), this.arrayImg = [], this._images.forEach(t => {
          this._cleanUpImageAttributes(t), "" != t.getAttribute(s.DATA_ATTRIBUTE) && this._imageIsInLoadRange(t)
        })
      }
      _resetPromises() {
        this._images.forEach(t => {
          t.promises = {}, t.promises.downloadComplete = new Promise(e => {
            t.promises.__completePromiseResolver = e
          })
        })
      }
      _addMethodsToImageElement() {
        this._images.forEach(t => {
          t.forceLazyLoad = () => {
            this._imageIsInLoadRange(t)
          }
        })
      }
      _imageIsInLoadRange(t) {
        this._downloadImage(t).then(() => {
          t.promises.__completePromiseResolver(t), t.dispatchEvent(new Event(o.EVENTS.DOWNLOAD_COMPLETE))
        })
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
        return new Promise((e, i) => {
          null === t.getAttribute(o.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE) ? null === t.getAttribute(o.DATA_DOWNLOADING_ATTRIBUTE) && this._waitForBackgroundVisible(t).then(t => this._getBackgroundImageSrc(t)).then(t => this._loadImage(t)).then(() => {
            n(() => {
              this._finishedDownloadAttributes(t), e()
            }, !0)
          }) : e()
        })
      }
      _waitForBackgroundVisible(t) {
        return new Promise((e, i) => {
          n(() => {
            this._downloadingImageAttributes(t), e(t)
          }, !0)
        })
      }
      _getBackgroundImageSrc(t) {
        return new Promise((e, i) => {
          a(() => {
            let i = t.currentStyle;
            i || (i = window.getComputedStyle(t, !1)), 0 !== i.backgroundImage.indexOf("url(") ? e(null) : e(i.backgroundImage.slice(4, -1).replace(/"/g, ""))
          }, !0)
        })
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
    o.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE = "data-anim-lazy-image-download-complete", o.DATA_DOWNLOADING_ATTRIBUTE = "data-anim-lazy-image-downloading", o.EVENTS = {}, o.EVENTS.DOWNLOAD_COMPLETE = "video-loading-complete", e.exports = o
  }, {
    121: 121,
    44: 44,
    47: 47,
    48: 48
  }],
  50: [function(t, e, i) {
    arguments[4][12][0].apply(i, arguments)
  }, {
    12: 12,
    51: 51
  }],
  51: [function(t, e, i) {
    arguments[4][13][0].apply(i, arguments)
  }, {
    13: 13
  }],
  52: [function(t, e, i) {
    arguments[4][38][0].apply(i, arguments)
  }, {
    38: 38
  }],
  53: [function(t, e, i) {
    arguments[4][39][0].apply(i, arguments)
  }, {
    39: 39,
    50: 50,
    61: 61,
    62: 62
  }],
  54: [function(t, e, i) {
    arguments[4][40][0].apply(i, arguments)
  }, {
    40: 40,
    51: 51
  }],
  55: [function(t, e, i) {
    arguments[4][41][0].apply(i, arguments)
  }, {
    41: 41,
    57: 57
  }],
  56: [function(t, e, i) {
    arguments[4][42][0].apply(i, arguments)
  }, {
    42: 42,
    55: 55
  }],
  57: [function(t, e, i) {
    arguments[4][43][0].apply(i, arguments)
  }, {
    43: 43,
    53: 53
  }],
  58: [function(t, e, i) {
    "use strict";
    var s = t(56);
    e.exports = s.cancelAnimationFrame("update")
  }, {
    56: 56
  }],
  59: [function(t, e, i) {
    arguments[4][44][0].apply(i, arguments)
  }, {
    44: 44,
    56: 56
  }],
  60: [function(t, e, i) {
    "use strict";
    var s = t(56);
    e.exports = s.requestAnimationFrame("external")
  }, {
    56: 56
  }],
  61: [function(t, e, i) {
    arguments[4][45][0].apply(i, arguments)
  }, {
    45: 45,
    52: 52,
    64: 64
  }],
  62: [function(t, e, i) {
    arguments[4][46][0].apply(i, arguments)
  }, {
    46: 46,
    52: 52,
    54: 54,
    64: 64
  }],
  63: [function(t, e, i) {
    arguments[4][47][0].apply(i, arguments)
  }, {
    47: 47,
    56: 56
  }],
  64: [function(t, e, i) {
    arguments[4][33][0].apply(i, arguments)
  }, {
    33: 33,
    65: 65
  }],
  65: [function(t, e, i) {
    arguments[4][34][0].apply(i, arguments)
  }, {
    34: 34
  }],
  66: [function(t, e, i) {
    "use strict";
    e.exports = {
      version: "3.3.4",
      major: "3.x",
      majorMinor: "3.3"
    }
  }, {}],
  67: [function(t, e, i) {
    "use strict";
    const s = t(12).EventEmitterMicro,
      r = t(74),
      n = t(69),
      a = t(70),
      o = t(72),
      h = t(89),
      l = t(90),
      c = t(91),
      u = t(66),
      d = {};
    "undefined" != typeof window && (d.update = t(63), d.cancelUpdate = t(58), d.external = t(60), d.draw = t(59));
    let m = null;
    class p extends s {
      constructor() {
        if (super(), m) throw "You cannot create multiple AnimSystems. You probably want to create multiple groups instead. You can have unlimited groups on a page";
        m = this, this.groups = [], this.scrollSystems = [], this.timeSystems = [], this.tweenGroup = null, this._forceUpdateRAFId = -1, this.initialized = !1, this.model = r, this.version = u.version, this._resolveReady = () => {}, this.ready = new Promise(t => this._resolveReady = t), this.onScroll = this.onScroll.bind(this), this.onResizedDebounced = this.onResizedDebounced.bind(this), this.onResizeImmediate = this.onResizeImmediate.bind(this)
      }
      initialize() {
        return this.initialized || "undefined" == typeof window || (this.initialized = !0, this.timeSystems = [], this.scrollSystems = [], this.groups = [], this.setupEvents(), this.initializeResizeFilter(), this.initializeModel(), this.createDOMGroups(), this.createDOMKeyframes(), this.tweenGroup = new c(null, this), this.groups.push(this.tweenGroup), this._resolveReady()), this.ready
      }
      remove() {
        return this.initialized ? Promise.all(this.groups.map(t => t.remove())).then(() => {
          this.groups = null, this.scrollSystems = null, this.timeSystems = null, window.clearTimeout(r.RESIZE_TIMEOUT), window.removeEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onResizeImmediate), this._events = {}, this.initialized = !1, this.ready = new Promise(t => this._resolveReady = t)
        }) : (this.ready = new Promise(t => this._resolveReady = t), Promise.resolve())
      }
      destroy() {
        return this.remove()
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
        return Promise.all(t.keyframeControllers.map(e => t.removeKeyframeController(e))).then(() => {
          let e = this.groups.indexOf(t); - 1 !== e && this.groups.splice(e, 1), e = this.scrollSystems.indexOf(t), -1 !== e && this.scrollSystems.splice(e, 1), e = this.timeSystems.indexOf(t), -1 !== e && this.timeSystems.splice(e, 1), t.destroy()
        })
      }
      createDOMGroups() {
        document.body.setAttribute("data-anim-scroll-group", "body"), document.querySelectorAll("[data-anim-scroll-group]").forEach(t => this.createScrollGroup(t)), document.querySelectorAll("[data-anim-time-group]").forEach(t => this.createTimeGroup(t)), this.trigger(r.EVENTS.ON_DOM_GROUPS_CREATED, this.groups)
      }
      createDOMKeyframes() {
        let t = [];
        ["data-anim-keyframe", n.DATA_ATTRIBUTE, a.DATA_ATTRIBUTE, o.DATA_ATTRIBUTE].forEach((function(e) {
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
        d.update(() => {
          null !== this.groups && (this.groups.forEach(t => t.onKeyframesDirty({
            silent: !0
          })), this.groups.forEach(t => t.trigger(r.EVENTS.ON_DOM_KEYFRAMES_CREATED, t)), this.trigger(r.EVENTS.ON_DOM_KEYFRAMES_CREATED, this), this.groups.forEach(t => {
            t.forceUpdate({
              waitForNextUpdate: !1,
              silent: !0
            }), t.reconcile()
          }), this.onScroll())
        }, !0)
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
        d.update(() => {
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
        }, !0)
      }
      forceUpdate({
        waitForNextUpdate: t = !0,
        silent: e = !1
      } = {}) {
        -1 !== this._forceUpdateRAFId && d.cancelUpdate(this._forceUpdateRAFId);
        let i = () => {
          for (let t = 0, i = this.groups.length; t < i; t++) {
            this.groups[t].forceUpdate({
              waitForNextUpdate: !1,
              silent: e
            })
          }
          return -1
        };
        this._forceUpdateRAFId = t ? d.update(i, !0) : i()
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
        return this._getGroupForTarget(t, t => t instanceof l)
      }
      getScrollGroupForTarget(t) {
        return this._getGroupForTarget(t, t => !(t instanceof l))
      }
      getGroupForTarget(t) {
        return this._getGroupForTarget(t, () => !0)
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
    e.exports = "undefined" == typeof window ? new p : window.AC.SharedInstance.share("AnimSystem", u.major, p), e.exports.default = e.exports
  }, {
    12: 12,
    58: 58,
    59: 59,
    60: 60,
    63: 63,
    66: 66,
    69: 69,
    70: 70,
    72: 72,
    74: 74,
    89: 89,
    90: 90,
    91: 91
  }],
  68: [function(t, e, i) {
    "use strict";
    const s = t(74);
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
    e.exports = class {
      constructor(t) {
        this.timeGroup = t, this.chapters = [], this.chapterNames = {}, this.currentChapter = null, this.clip = null
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
        const n = new r(s, i);
        if (this.chapters.push(n), i) {
          if (this.chapterNames.hasOwnProperty(i)) throw ReferenceError('Duplicate chapter name assigned - "'.concat(i, '" is already in use'));
          this.chapterNames[i] = n
        }
        return this.chapters.sort((t, e) => t.start - e.start).forEach((t, e) => t.index = e), this.currentChapter = this.currentChapter || this.chapters[0], n
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
        this.clip && (this.clip.destroy(), i = "easeOutQuint"), this.timeGroup.timeScale(t.timeScale || 1);
        const r = void 0 !== t.duration ? t.duration : this.getDurationToChapter(e),
          n = this.timeGroup.time(),
          a = e.start;
        let o = !1;
        this.tween = this.timeGroup.anim.addTween({
          time: n
        }, {
          easeFunction: i,
          duration: r,
          time: [n, a],
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
            }), this.timeGroup.paused(!0), this.clip = null
          }
        })
      }
      getDurationToChapter(t) {
        const e = this.chapters[t.index - 1] || this.chapters[t.index + 1];
        return Math.abs(e.start - t.start)
      }
    }
  }, {
    74: 74
  }],
  69: [function(t, e, i) {
    "use strict";
    const s = t(74),
      r = t(82),
      n = t(120),
      a = t(76),
      o = t(85),
      h = t(81),
      l = t(92),
      c = t(93),
      u = t(84);
    class d {
      constructor(t, e) {
        this.controller = t, this.anchors = [], this.jsonProps = e, this.ease = t.group.defaultEase, this.easeFunction = a.linear, this.start = 0, this.end = 0, this.localT = 0, this.curvedT = 0, this.id = 0, this.event = "", this.needsEventDispatch = !1, this.snapAtCreation = !1, this.isEnabled = !1, this.animValues = {}, this.breakpointMask = "SMLX", this.disabledWhen = [], this.keyframeType = s.KeyframeTypes.Interpolation, this.hold = !1, this.preserveState = !1, this.markedForRemoval = !1;
        let i = !1;
        Object.defineProperty(this, "hidden", {
          get: () => i,
          set(e) {
            i = e, t.group.keyframesDirty = !0
          }
        }), this.uuid = u(), this.destroyed = !1
      }
      destroy() {
        this.destroyed = !0, this.controller = null, this.disabledWhen = null, this.anchors = null, this.jsonProps = null, this.easeFunction = null, this.animValues = null
      }
      remove() {
        return this.controller.removeKeyframe(this)
      }
      parseOptions(t) {
        this.jsonProps = t, t.relativeTo && console.error("KeyframeError: relativeTo has been removed. Use 'anchors' property instead. Found 'relativeTo':\"".concat(t.relativeTo, '"')), void 0 === t.end && void 0 === t.duration && (t.end = t.start), "" !== t.anchors && t.anchors ? (this.anchors = [], t.anchors = Array.isArray(t.anchors) ? t.anchors : [t.anchors], t.anchors.forEach((e, i) => {
          let s = c(e, this.controller.group.element);
          if (!s) {
            let s = "";
            return "string" == typeof e && (s = " Provided value was a string, so a failed attempt was made to find anchor with the provided querystring in group.element, or in the document."), void console.warn("Keyframe on", this.controller.element, " failed to find anchor at index ".concat(i, " in array"), t.anchors, ". Anchors must be JS Object references, Elements references, or valid query selector strings. ".concat(s))
          }
          this.anchors.push(s), this.controller.group.metrics.add(s)
        })) : (this.anchors = [], t.anchors = []), t.ease ? this.ease = parseFloat(t.ease) : t.ease = this.ease, t.hasOwnProperty("snapAtCreation") ? this.snapAtCreation = t.snapAtCreation : t.snapAtCreation = this.snapAtCreation, t.easeFunction || (t.easeFunction = s.KeyframeDefaults.easeFunctionString), t.breakpointMask ? this.breakpointMask = t.breakpointMask : t.breakpointMask = this.breakpointMask, t.disabledWhen ? this.disabledWhen = Array.isArray(t.disabledWhen) ? t.disabledWhen : [t.disabledWhen] : t.disabledWhen = this.disabledWhen, t.hasOwnProperty("hold") ? this.hold = t.hold : t.hold = this.hold, t.hasOwnProperty("preserveState") ? this.preserveState = t.preserveState : t.preserveState = s.KeyframeDefaults.preserveState, this.easeFunction = a[t.easeFunction], a.hasOwnProperty(t.easeFunction) || (t.easeFunction.includes("bezier") ? this.easeFunction = o.fromCSSString(t.easeFunction) : t.easeFunction.includes("spring") ? this.easeFunction = h.fromCSSString(t.easeFunction) : console.error("Keyframe parseOptions cannot find 'easeFunction' named '" + t.easeFunction + "'"));
        for (let e in t) {
          if (-1 !== s.KeyframeJSONReservedWords.indexOf(e)) continue;
          let i = t[e];
          if (!Array.isArray(i)) continue;
          if (1 === i.length && (i[0] = null, i[1] = i[0]), this.animValues[e] = this.controller.group.expressionParser.parseArray(this, i), void 0 === this.controller.tweenProps[e] || !this.controller._ownerIsElement) {
            let t = 0;
            this.controller._ownerIsElement || (t = this.controller.element[e] || 0);
            let i = new r(t, s.KeyframeDefaults.epsilon, this.snapAtCreation);
            this.controller.tweenProps[e] = i
          }
          let n = this.controller.tweenProps[e];
          if (t.epsilon) n.epsilon = t.epsilon;
          else {
            let t = Math.abs(this.animValues[e][0] - this.animValues[e][1]),
              i = Math.min(.001 * t, n.epsilon, s.KeyframeDefaults.epsilon);
            n.epsilon = Math.max(i, 1e-4)
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
        t = t || l(Array.from(document.documentElement.classList));
        let e = -1 !== this.breakpointMask.indexOf(s.pageMetrics.breakpoint),
          i = !1;
        return this.disabledWhen.length > 0 && (i = this.disabledWhen.some(e => void 0 !== t[e])), this.isEnabled = e && !i, this.isEnabled
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
    d.DATA_ATTRIBUTE = "data-anim-tween", e.exports = d
  }, {
    120: 120,
    74: 74,
    76: 76,
    81: 81,
    82: 82,
    84: 84,
    85: 85,
    92: 92,
    93: 93
  }],
  70: [function(t, e, i) {
    "use strict";
    const s = t(69),
      r = t(74),
      n = t(82);
    class a extends s {
      constructor(t, e) {
        super(t, e), this.keyframeType = r.KeyframeTypes.CSSClass, this._triggerType = a.TRIGGER_TYPE_CSS_CLASS, this.cssClass = "", this.friendlyName = "", this.style = {
          on: null,
          off: null
        }, this.toggle = !1, this.isApplied = !1
      }
      parseOptions(t) {
        if (!this.controller._ownerIsElement) throw new TypeError("CSS Keyframes cannot be applied to JS Objects");
        if (t.x = void 0, t.y = void 0, t.z = void 0, t.scale = void 0, t.scaleX = void 0, t.scaleY = void 0, t.rotationX = void 0, t.rotationY = void 0, t.rotationZ = void 0, t.rotation = void 0, t.opacity = void 0, t.hold = void 0, void 0 !== t.toggle && (this.toggle = t.toggle), void 0 !== t.cssClass) this._triggerType = a.TRIGGER_TYPE_CSS_CLASS, this.cssClass = t.cssClass, this.friendlyName = "." + this.cssClass, void 0 === this.controller.tweenProps.targetClasses && (this.controller.tweenProps.targetClasses = {
          add: [],
          remove: []
        });
        else {
          if (void 0 === t.style || !this.isValidStyleProperty(t.style)) throw new TypeError("KeyframeCSSClass no 'cssClass` property found. If using `style` property its also missing or invalid");
          if (this._triggerType = a.TRIGGER_TYPE_STYLE_PROPERTY, this.style = t.style, this.friendlyName = "style", this.toggle = void 0 !== this.style.off || this.toggle, this.toggle && void 0 === this.style.off) {
            this.style.off = {};
            for (let t in this.style.on) this.style.off[t] = ""
          }
          void 0 === this.controller.tweenProps.targetStyles && (this.controller.tweenProps.targetStyles = {})
        }
        if (void 0 === t.end && (t.end = t.start), t.toggle = this.toggle, this._triggerType === a.TRIGGER_TYPE_CSS_CLASS) this.isApplied = this.controller.element.classList.contains(this.cssClass);
        else {
          let t = getComputedStyle(this.controller.element);
          this.isApplied = !0;
          for (let e in this.style.on)
            if (t[e] !== this.style.on[e]) {
              this.isApplied = !1;
              break
            }
        }
        s.prototype.parseOptions.call(this, t), this.animValues[this.friendlyName] = [0, 0], void 0 === this.controller.tweenProps[this.friendlyName] && (this.controller.tweenProps[this.friendlyName] = new n(0, 1, !1)), this.keyframeType = r.KeyframeTypes.CSSClass
      }
      updateLocalProgress(t) {
        this.isApplied && !this.toggle || (this.start !== this.end ? !this.isApplied && t >= this.start && t <= this.end ? this._apply() : this.isApplied && this.toggle && (t < this.start || t > this.end) && this._unapply() : !this.isApplied && t >= this.start ? this._apply() : this.isApplied && this.toggle && t < this.start && this._unapply())
      }
      _apply() {
        if (this._triggerType === a.TRIGGER_TYPE_CSS_CLASS) this.controller.tweenProps.targetClasses.add.push(this.cssClass), this.controller.needsClassUpdate = !0;
        else {
          for (let t in this.style.on) this.controller.tweenProps.targetStyles[t] = this.style.on[t];
          this.controller.needsStyleUpdate = !0
        }
        this.isApplied = !0
      }
      _unapply() {
        if (this._triggerType === a.TRIGGER_TYPE_CSS_CLASS) this.controller.tweenProps.targetClasses.remove.push(this.cssClass), this.controller.needsClassUpdate = !0;
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
    a.TRIGGER_TYPE_CSS_CLASS = 0, a.TRIGGER_TYPE_STYLE_PROPERTY = 1, a.DATA_ATTRIBUTE = "data-anim-classname", e.exports = a
  }, {
    69: 69,
    74: 74,
    82: 82
  }],
  71: [function(t, e, i) {
    "use strict";
    const s = t(74),
      r = t(82),
      n = t(75),
      a = t(78),
      o = t(73),
      h = (t(69), t(70)),
      l = t(79),
      c = t(92),
      u = t(84),
      d = t(12).EventEmitterMicro,
      m = t(112),
      p = {};
    "undefined" != typeof window && (p.update = t(63), p.external = t(60), p.draw = t(59));
    const f = Math.PI / 180,
      g = ["x", "y", "z", "scale", "scaleX", "scaleY", "rotation", "rotationX", "rotationY", "rotationZ"],
      _ = ["borderRadius", "bottom", "fontSize", "fontWeight", "height", "left", "lineHeight", "marginBottom", "marginLeft", "marginRight", "marginTop", "maxHeight", "maxWidth", "opacity", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "right", "top", "width", "zIndex", "strokeDashoffset"],
      y = ["currentTime", "scrollLeft", "scrollTop"],
      b = {
        create: t(123),
        rotateX: t(124),
        rotateY: t(125),
        rotateZ: t(126),
        scale: t(127)
      };
    e.exports = class extends d {
      constructor(t, e) {
        super(), this._events.draw = [], this.uuid = u(), this.group = t, this.element = e, this._ownerIsElement = this.element instanceof Element, this._ownerIsElement ? this.friendlyName = this.element.tagName + "." + Array.from(this.element.classList).join(".") : this.friendlyName = this.element.friendlyName || this.uuid, this.element._animInfo = this.element._animInfo || new o(t, this), this.element._animInfo.controller = this, this.element._animInfo.group = this.group, this.element._animInfo.controllers.push(this), this.tweenProps = this.element._animInfo.tweenProps, this.eventObject = new a(this), this.needsStyleUpdate = !1, this.needsClassUpdate = !1, this.elementMetrics = this.group.metrics.add(this.element), this.attributes = [], this.cssAttributes = [], this.domAttributes = [], this.keyframes = {}, this._allKeyframes = [], this._activeKeyframes = [], this.keyframesRequiringDispatch = [], this.updateCachedValuesFromElement(), this.boundsMin = 0, this.boundsMax = 0, this.mat2d = new Float32Array(6), this.mat4 = b.create(), this.needsWrite = !0, this.onDOMWriteImp = this._ownerIsElement ? this.onDOMWriteForElement : this.onDOMWriteForObject
      }
      destroy() {
        if (this.element._animInfo) {
          this.element._animInfo.controller === this && (this.element._animInfo.controller = null);
          let t = this.element._animInfo.controllers.indexOf(this);
          if (-1 !== t && this.element._animInfo.controllers.splice(t, 1), 0 === this.element._animInfo.controllers.length) this.element._animInfo = null;
          else {
            let t = this.element._animInfo.controllers.find(t => t.group !== t.group.anim.tweenGroup);
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
        const t = getComputedStyle(this.element);
        let e = new DOMMatrix(t.getPropertyValue("transform")),
          i = m(e),
          a = s.KeyframeDefaults.epsilon;
        ["x", "y", "z"].forEach((t, e) => {
          this.tweenProps[t] = new r(i.translation[e], a, !1)
        }), this.tweenProps.rotation = new r(i.rotation[2], a, !1), ["rotationX", "rotationY", "rotationZ"].forEach((t, e) => {
          this.tweenProps[t] = new r(i.rotation[e], a, !1)
        }), this.tweenProps.scale = new r(i.scale[0], a, !1), ["scaleX", "scaleY", "scaleZ"].forEach((t, e) => {
          this.tweenProps[t] = new r(i.scale[e], a, !1)
        }), _.forEach(e => {
          let i = ["zIndex"].includes(e),
            s = ["opacity", "zIndex", "fontWeight"].includes(e) ? void 0 : "px",
            r = parseFloat(t[e]);
          isNaN(r) && (r = 0), this.tweenProps[e] = new n(r, a, !1, e, i, s)
        }), y.forEach(t => {
          let e = isNaN(this.element[t]) ? 0 : this.element[t];
          this.tweenProps[t] = new n(e, a, !1, t, !1)
        })
      }
      addKeyframe(t) {
        let e = l(t);
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
        t = t || c(Array.from(document.documentElement.classList));
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
        this.attributes.forEach(t => this.tweenProps[t].isActive = !0), this.cssAttributes = _.filter(t => this.attributes.includes(t)).map(t => this.tweenProps[t]), this.domAttributes = y.filter(t => this.attributes.includes(t)).map(t => this.tweenProps[t]);
        let r = e.filter(t => -1 === this._activeKeyframes.indexOf(t));
        if (0 === r.length) return;
        let n = i.filter(t => -1 === this.attributes.indexOf(t) && !s.hasOwnProperty(t));
        if (0 !== n.length)
          if (this.needsWrite = !0, this._ownerIsElement) p.external(() => {
            let t = n.some(t => g.includes(t)),
              e = t && Object.keys(s).some(t => g.includes(t));
            t && !e && this.element.style.removeProperty("transform");
            for (let t = 0, e = n.length; t < e; ++t) {
              let e = n[t],
                i = this.tweenProps[e],
                s = i.isActive ? i.target : i.initialValue;
              i.current = i.target = s, !i.isActive && _.includes(e) && (this.element.style[e] = null)
            }
            for (let t = 0, e = r.length; t < e; ++t) {
              let e = r[t];
              e instanceof h && !e.preserveState && e._unapply()
            }
          }, !0);
          else
            for (let t = 0, e = n.length; t < e; ++t) {
              let e = this.tweenProps[n[t]];
              e.current = e.target, e.isActive = !1
            }
      }
      onDOMRead(t) {
        for (let e = 0, i = this.attributes.length; e < i; e++) {
          let i = this.attributes[e];
          this.tweenProps[i].previousValue = this.tweenProps[i].current;
          let s = this.getNearestKeyframeForAttribute(i, t);
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
        let t = this.element.style;
        this.handleStyleTransform();
        for (let e = 0, i = this.cssAttributes.length; e < i; e++) this.cssAttributes[e].set(t);
        for (let t = 0, e = this.domAttributes.length; t < e; t++) this.domAttributes[t].set(this.element);
        if (this.needsStyleUpdate) {
          for (let t in this.tweenProps.targetStyles) null !== this.tweenProps.targetStyles[t] && (this.element.style[t] = this.tweenProps.targetStyles[t]), this.tweenProps.targetStyles[t] = null;
          this.needsStyleUpdate = !1
        }
        this.needsClassUpdate && (this.tweenProps.targetClasses.add.length > 0 && this.element.classList.add.apply(this.element.classList, this.tweenProps.targetClasses.add), this.tweenProps.targetClasses.remove.length > 0 && this.element.classList.remove.apply(this.element.classList, this.tweenProps.targetClasses.remove), this.tweenProps.targetClasses.add.length = 0, this.tweenProps.targetClasses.remove.length = 0, this.needsClassUpdate = !1)
      }
      handleStyleTransform() {
        let t = this.tweenProps,
          e = this.element.style;
        if (t.z.isActive || t.rotationX.isActive || t.rotationY.isActive) {
          const i = this.mat4;
          i[0] = 1, i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = 1, i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[10] = 1, i[11] = 0, i[12] = 0, i[13] = 0, i[14] = 0, i[15] = 1;
          const s = t.x.current,
            r = t.y.current,
            n = t.z.current;
          if (i[12] = i[0] * s + i[4] * r + i[8] * n + i[12], i[13] = i[1] * s + i[5] * r + i[9] * n + i[13], i[14] = i[2] * s + i[6] * r + i[10] * n + i[14], i[15] = i[3] * s + i[7] * r + i[11] * n + i[15], 0 !== t.rotation.current || 0 !== t.rotationZ.current) {
            const e = (t.rotation.current || t.rotationZ.current) * f;
            b.rotateZ(i, i, e)
          }
          if (0 !== t.rotationX.current) {
            const e = t.rotationX.current * f;
            b.rotateX(i, i, e)
          }
          if (0 !== t.rotationY.current) {
            const e = t.rotationY.current * f;
            b.rotateY(i, i, e)
          }
          1 === t.scale.current && 1 === t.scaleX.current && 1 === t.scaleY.current || b.scale(i, i, [t.scale.current, t.scale.current, 1]), e.transform = "matrix3d(" + i[0] + "," + i[1] + "," + i[2] + "," + i[3] + "," + i[4] + "," + i[5] + "," + i[6] + "," + i[7] + "," + i[8] + "," + i[9] + "," + i[10] + "," + i[11] + "," + i[12] + "," + i[13] + "," + i[14] + "," + i[15] + ")"
        } else if (t.x.isActive || t.y.isActive || t.rotation.isActive || t.rotationZ.isActive || t.scale.isActive || t.scaleX.isActive || t.scaleY.isActive) {
          const i = this.mat2d;
          i[0] = 1, i[1] = 0, i[2] = 0, i[3] = 1, i[4] = 0, i[5] = 0;
          const s = t.x.current,
            r = t.y.current,
            n = i[0],
            a = i[1],
            o = i[2],
            h = i[3],
            l = i[4],
            c = i[5];
          if (i[0] = n, i[1] = a, i[2] = o, i[3] = h, i[4] = n * s + o * r + l, i[5] = a * s + h * r + c, 0 !== t.rotation.current || 0 !== t.rotationZ.current) {
            const e = (t.rotation.current || t.rotationZ.current) * f,
              s = i[0],
              r = i[1],
              n = i[2],
              a = i[3],
              o = i[4],
              h = i[5],
              l = Math.sin(e),
              c = Math.cos(e);
            i[0] = s * c + n * l, i[1] = r * c + a * l, i[2] = s * -l + n * c, i[3] = r * -l + a * c, i[4] = o, i[5] = h
          }
          t.scaleX.isActive || t.scaleY.isActive ? (i[0] = i[0] * t.scaleX.current, i[1] = i[1] * t.scaleX.current, i[2] = i[2] * t.scaleY.current, i[3] = i[3] * t.scaleY.current) : (i[0] = i[0] * t.scale.current, i[1] = i[1] * t.scale.current, i[2] = i[2] * t.scale.current, i[3] = i[3] * t.scale.current), e.transform = "matrix(" + i[0] + ", " + i[1] + ", " + i[2] + ", " + i[3] + ", " + i[4] + ", " + i[5] + ")"
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
          for (var t = this._events.draw.length - 1; t >= 0; t--) this._events.draw[t](this.eventObject)
        }
      }
      updateAnimationConstraints() {
        for (let t = 0, e = this._activeKeyframes.length; t < e; t++) this._activeKeyframes[t].evaluateConstraints();
        this.attributes.forEach(t => {
          1 !== this.keyframes[t].length && this.keyframes[t].sort(s.KeyframeComparison)
        }), this.updateDeferredPropertyValues()
      }
      refreshMetrics() {
        let t = new Set([this.element]);
        this._allKeyframes.forEach(e => e.anchors.forEach(e => t.add(e))), this.group.metrics.refreshCollection(t), this.group.keyframesDirty = !0
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
        t.parseOptions(e), t.evaluateConstraints(), this.group.keyframesDirty = !0, p.update(() => {
          this.trigger(s.EVENTS.ON_KEYFRAME_UPDATED, t), this.group.trigger(s.EVENTS.ON_KEYFRAME_UPDATED, t)
        }, !0)
      }
      removeKeyframe(t) {
        return t.controller !== this ? Promise.resolve(null) : (t.markedForRemoval = !0, this.group.keyframesDirty = !0, new Promise(e => {
          this.group.rafEmitter.executor.eventEmitter.once("before:draw", () => {
            e(t), t.destroy();
            let i = this._allKeyframes.indexOf(t); - 1 !== i && this._allKeyframes.splice(i, 1)
          })
        }))
      }
      updateAnimation(t, e) {
        return this.group.gui && console.warn("KeyframeController.updateAnimation(keyframe,props) has been deprecated. Please use updateKeyframe(keyframe,props)"), this.updateKeyframe(t, e)
      }
    }
  }, {
    112: 112,
    12: 12,
    123: 123,
    124: 124,
    125: 125,
    126: 126,
    127: 127,
    59: 59,
    60: 60,
    63: 63,
    69: 69,
    70: 70,
    73: 73,
    74: 74,
    75: 75,
    78: 78,
    79: 79,
    82: 82,
    84: 84,
    92: 92
  }],
  72: [function(t, e, i) {
    "use strict";
    const s = t(69),
      r = t(74),
      n = t(82);
    class a extends s {
      constructor(t, e) {
        super(t, e), this.keyframeType = r.KeyframeTypes.Event, this.isApplied = !1, this.hasDuration = !1, this.isCurrentlyInRange = !1
      }
      parseOptions(t) {
        t.x = void 0, t.y = void 0, t.scale = void 0, t.scaleX = void 0, t.scaleY = void 0, t.rotation = void 0, t.style = void 0, t.cssClass = void 0, t.rotation = void 0, t.opacity = void 0, t.hold = void 0, this.event = t.event, this.animValues[this.event] = [0, 0], void 0 === this.controller.tweenProps[this.event] && (this.controller.tweenProps[this.event] = new n(0, 1, !1)), super.parseOptions(t), this.keyframeType = r.KeyframeTypes.Event
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
    a.DATA_ATTRIBUTE = "data-anim-event", e.exports = a
  }, {
    69: 69,
    74: 74,
    82: 82
  }],
  73: [function(t, e, i) {
    "use strict";
    const s = t(83);
    e.exports = class {
      constructor(t, e, i = !1) {
        this.isGroup = i, this.group = t, this.controller = e, this.controllers = [], this.tweenProps = new s
      }
    }
  }, {
    83: 83
  }],
  74: [function(t, e, i) {
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
      TweenProps: t(83),
      TargetValue: t(82),
      CSSTargetValue: t(75),
      pageMetrics: new function() {
        this.scrollX = 0, this.scrollY = 0, this.windowWidth = 0, this.windowHeight = 0, this.documentOffsetX = 0, this.documentOffsetY = 0, this.previousBreakpoint = "", this.breakpoint = ""
      },
      KeyframeComparison: function(t, e) {
        return t.start < e.start ? -1 : t.start > e.start ? 1 : 0
      }
    };
    e.exports = s
  }, {
    75: 75,
    82: 82,
    83: 83
  }],
  75: [function(t, e, i) {
    "use strict";
    const s = t(82);
    e.exports = class extends s {
      constructor(t, e, i, s, r = !1, n) {
        super(t, e, i), this.key = s, this.round = r, this.suffix = n
      }
      set(t) {
        let e = this.current;
        this.round && (e = Math.round(e)), this.suffix && (e += this.suffix), t[this.key] = e
      }
    }
  }, {
    82: 82
  }],
  76: [function(t, e, i) {
    "use strict";
    e.exports = new class {
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
  }, {}],
  77: [function(t, e, i) {
    "use strict";
    const s = t(74),
      r = (t, e) => null == t ? e : t;
    class n {
      constructor(t) {
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
    e.exports = class {
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
        let i = new n(t);
        return this._metrics.set(t, i), this._refreshMetrics(t, i)
      }
      get(t) {
        return this._metrics.get(t)
      }
      refreshCollection(t) {
        t.forEach(t => this._refreshMetrics(t, null))
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
  }, {
    74: 74
  }],
  78: [function(t, e, i) {
    "use strict";
    e.exports = class {
      constructor(t) {
        this.controller = t, this.element = this.controller.element, this.keyframe = null, this.event = "", this.tweenProps = this.controller.tweenProps
      }
    }
  }, {}],
  79: [function(t, e, i) {
    "use strict";
    const s = t(74),
      r = t(69),
      n = t(72),
      a = t(70),
      o = function(t) {
        for (let e in t) {
          let i = t[e];
          if (-1 === s.KeyframeJSONReservedWords.indexOf(e) && Array.isArray(i)) return !0
        }
        return !1
      };
    e.exports = function(t) {
      if (void 0 !== t.cssClass || void 0 !== t.style) {
        if (o(t)) throw "CSS Keyframes cannot tween values, please use multiple keyframes instead";
        return a
      }
      if (o(t)) return r;
      if (t.event) return n;
      throw delete t.anchors, "Could not determine tween type based on ".concat(JSON.stringify(t))
    }
  }, {
    69: 69,
    70: 70,
    72: 72,
    74: 74
  }],
  80: [function(t, e, i) {
    "use strict";
    e.exports = class {
      constructor() {
        this.local = 0, this.localUnclamped = 0, this.lastPosition = 0
      }
    }
  }, {}],
  81: [function(t, e, i) {
    "use strict";
    const {
      map: s
    } = t(120), r = {};
    class n {
      constructor(t, e, i, s) {
        this.mass = t, this.stiffness = e, this.damping = i, this.initialVelocity = s, this.m_w0 = Math.sqrt(this.stiffness / this.mass), this.m_zeta = this.damping / (2 * Math.sqrt(this.stiffness * this.mass)), this.m_zeta < 1 ? (this.m_wd = this.m_w0 * Math.sqrt(1 - this.m_zeta * this.m_zeta), this.m_A = 1, this.m_B = (this.m_zeta * this.m_w0 - this.initialVelocity) / this.m_wd) : (this.m_wd = 0, this.m_A = 1, this.m_B = -this.initialVelocity + this.m_w0)
      }
      solve(t) {
        return 1 - (t = this.m_zeta < 1 ? Math.exp(-t * this.m_zeta * this.m_w0) * (this.m_A * Math.cos(this.m_wd * t) + this.m_B * Math.sin(this.m_wd * t)) : (this.m_A + this.m_B * t) * Math.exp(-t * this.m_w0))
      }
    }
    const a = /\d*\.?\d+/g;
    n.fromCSSString = function(t) {
      let e = t.match(a);
      if (4 !== e.length) throw "SpringEasing could not convert ".concat(cssString, " to spring params");
      let i = e.map(Number),
        o = new n(...i);
      const h = o.solve.bind(o);
      let l = 0;
      let c = function() {
        if (r[t]) return r[t];
        let e, i = 0;
        for (;;) {
          l += 1 / 6;
          if (1 === h(l)) {
            if (i++, i >= 16) {
              e = l * (1 / 6);
              break
            }
          } else i = 0
        }
        return r[t] = e, r[t]
      }();
      return function(t) {
        return 0 === t || 1 === t ? t : h(s(t, 0, 1, 0, c))
      }
    }, e.exports = n
  }, {
    120: 120
  }],
  82: [function(t, e, i) {
    "use strict";
    e.exports = class {
      constructor(t, e, i) {
        this.epsilon = parseFloat(e), this.snapAtCreation = i, this.initialValue = t, this.target = t, this.current = t, this.previousValue = t, this.isActive = !1
      }
    }
  }, {}],
  83: [function(t, e, i) {
    "use strict";
    e.exports = class {}
  }, {}],
  84: [function(t, e, i) {
    "use strict";
    e.exports = () => Math.random().toString(16).slice(-4)
  }, {}],
  85: [function(t, e, i) {
    "use strict";
    const s = Math.abs;
    class r {
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
        var e, i, r, n, a, o;
        for (r = t, o = 0; o < 5; o++) {
          if (n = this.sampleCurveX(r) - t, s(n) < 1e-5) return r;
          if (a = this.sampleCurveDerivativeX(r), s(a) < 1e-5) break;
          r -= n / a
        }
        if ((r = t) < (e = 0)) return e;
        if (r > (i = 1)) return i;
        for (; e < i;) {
          if (n = this.sampleCurveX(r), s(n - t) < 1e-5) return r;
          t > n ? e = r : i = r, r = .5 * (i - e) + e
        }
        return r
      }
      solve(t) {
        return this.sampleCurveY(this.solveCurveX(t))
      }
    }
    const n = /\d*\.?\d+/g;
    r.fromCSSString = function(t) {
      let e = t.match(n);
      if (4 !== e.length) throw "UnitBezier could not convert ".concat(t, " to cubic-bezier");
      let i = e.map(Number),
        s = new r(i[0], i[1], i[2], i[3]);
      return s.solve.bind(s)
    }, e.exports = r
  }, {}],
  86: [function(t, e, i) {
    "use strict";
    e.exports = class {
      constructor(t, e) {
        this.a = t.top - e, this.a < 0 && (this.a = t.top), this.b = t.top, this.d = t.bottom, this.c = Math.max(this.d - e, this.b)
      }
    }
  }, {}],
  87: [function(t, e, i) {
    "use strict";
    const s = t(88),
      r = new(t(77));
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
        if ("string" != typeof e) throw "Expression must be a string, received ".concat(typeof e, ": ").concat(e);
        return this.data.target = t.controller.element, this.data.anchors = t.anchors, this.data.keyframe = t.keyframe, n._parse(e, this.data)
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
        return (e = e || {}) && (r.clear(), e.target && r.add(e.target), e.anchors && e.anchors.forEach(t => r.add(t))), e.metrics = r, n._parse(t, e)
      }
      static _parse(t, e) {
        return s.Parse(t).execute(e)
      }
    }
    n.programs = s.programs, "undefined" != typeof window && (window.ExpressionParser = n), e.exports = n
  }, {
    77: 77,
    88: 88
  }],
  88: [function(t, e, i) {
    "use strict";
    const s = t(74),
      r = t(120),
      n = {},
      a = {
        smoothstep: (t, e, i) => (i = a.clamp((i - t) / (e - t), 0, 1)) * i * (3 - 2 * i),
        deg: t => 180 * t / Math.PI,
        rad: t => t * Math.PI / 180,
        random: (t, e) => Math.random() * (e - t) + t,
        atan: Math.atan2
      };
    Object.getOwnPropertyNames(Math).forEach(t => a[t] ? null : a[t.toLowerCase()] = Math[t]), Object.getOwnPropertyNames(r).forEach(t => a[t] ? null : a[t.toLowerCase()] = r[t]);
    let o = null;
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
      b = "EOF",
      v = {
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
        MATH_FUNCTION: new RegExp("\\b(".concat(Object.keys(a).join("|"), ")\\b"), "i")
      },
      E = function(t, e, i, s = "") {
        let r = e.slice(Math.max(i, 0), Math.min(e.length, i + 3)),
          n = new Error("Expression Error. ".concat(t, ' in expression "').concat(e, '", near "').concat(r, '"'));
        throw console.error(n.message, o ? o.keyframe || o.target : ""), n
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
    class x {
      constructor(t, e) {
        this.type = t, this.value = e
      }
    }
    x.ONE = new x("100", 100), x.EOF = new x(b, null);
    class T {
      constructor(t) {
        this.type = t
      }
    }
    class A extends T {
      constructor(t, e) {
        super("UnaryOp"), this.token = this.op = t, this.expr = e
      }
    }
    class S extends T {
      constructor(t, e, i) {
        super("BinOp"), this.left = t, this.op = e, this.right = i
      }
    }
    class P extends T {
      constructor(t, e) {
        if (super("MathOp"), this.op = t, this.list = e, w[t.value] && e.length !== w[t.value]) throw new Error("Incorrect number of arguments for '".concat(t.value, "'. Received ").concat(e.length, ", expected ").concat(w[t.value]))
      }
    }
    class C extends T {
      constructor(t) {
        super("Num"), this.token = t, this.value = t.value
      }
    }
    class O extends T {
      constructor(t, e, i) {
        super("RefValue"), this.num = t, this.ref = e, this.unit = i
      }
    }
    class R extends T {
      constructor(t, e) {
        super("CSSValue"), this.ref = t, this.propertyName = e
      }
    }
    class I extends T {
      constructor(t, e) {
        super("PropValue"), this.ref = t, this.propertyName = e
      }
    }
    class F {
      constructor(t) {
        let e;
        for (this.text = t, this.pos = 0, this.char = this.text[this.pos], this.tokens = [];
          (e = this.getNextToken()) && e !== x.EOF;) this.tokens.push(e);
        this.tokens.push(e)
      }
      advance() {
        this.char = this.text[++this.pos]
      }
      skipWhiteSpace() {
        for (; null != this.char && v.WHITE_SPACE.test(this.char);) this.advance()
      }
      name() {
        let t = "";
        for (; null != this.char && v.ALPHA.test(this.char);) t += this.char, this.advance();
        return new x(l, t)
      }
      number() {
        let t = "";
        for ("." === this.char && (t += this.char, this.advance()); null != this.char && v.DIGIT.test(this.char);) t += this.char, this.advance();
        if (null != this.char && "." === this.char)
          for (t.includes(".") && E("Number appears to contain 2 decimal points", this.text, this.pos), t += this.char, this.advance(); null != this.char && v.DIGIT.test(this.char);) t += this.char, this.advance();
        return "." === t && E("Attempted to parse a number, but found only a decimal point", this.text, this.pos), t.includes(".") ? new x(_, parseFloat(t)) : new x(g, parseInt(t))
      }
      getNextToken() {
        for (; null != this.char;)
          if (v.WHITE_SPACE.test(this.char)) this.skipWhiteSpace();
          else {
            if ("." === this.char || v.DIGIT.test(this.char)) return this.number();
            if ("," === this.char) return this.advance(), new x(y, ",");
            if (v.OPERATOR.test(this.char)) {
              let t = "",
                e = this.char;
              switch (e) {
                case "+":
                  t = d;
                  break;
                case "-":
                  t = m;
                  break;
                case "*":
                  t = p;
                  break;
                case "/":
                  t = f
              }
              return this.advance(), new x(t, e)
            }
            if (v.PAREN.test(this.char)) {
              let t = "",
                e = this.char;
              switch (e) {
                case "(":
                  t = c;
                  break;
                case ")":
                  t = u
              }
              return this.advance(), new x(t, e)
            }
            if (v.ALPHA.test(this.char)) return this.name();
            E('Unexpected character "'.concat(this.char, '"'), this.text, this.pos)
          } return x.EOF
      }
    }
    class k {
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
        return e.type === t ? this.pos += 1 : this.error("Invalid token ".concat(this.currentToken.value, ", expected ").concat(t)), e
      }
      consumeList(t) {
        t.includes(this.currentToken) ? this.pos += 1 : this.error("Invalid token ".concat(this.currentToken.value, ", expected ").concat(tokenType))
      }
      expr() {
        let t = this.term();
        for (; this.currentToken.type === d || this.currentToken.type === m;) {
          const e = this.currentToken;
          switch (e.value) {
            case "+":
              this.consume(d);
              break;
            case "-":
              this.consume(m)
          }
          t = new S(t, e, this.term())
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
          t = new S(t, e, this.factor())
        }
        return t
      }
      factor() {
        if (this.currentToken.type === d) return new A(this.consume(d), this.factor());
        if (this.currentToken.type === m) return new A(this.consume(m), this.factor());
        if (this.currentToken.type === g || this.currentToken.type === _) {
          let t = new C(this.currentToken);
          if (this.pos += 1, v.OPERATOR.test(this.currentToken.value) || this.currentToken.type === u || this.currentToken.type === y || this.currentToken.type === b) return t;
          if (this.currentToken.type === l && this.currentToken.value === h) return this.consume(l), new O(t, this.anchorIndex(), this.unit(v.ANY_UNIT));
          if (this.currentToken.type === l) return "%a" === this.currentToken.value && this.error("%a is invalid, try removing the %"), new O(t, null, this.unit());
          this.error("Expected a scaling unit type", "Such as 'h' / 'w'")
        } else {
          if (v.OBJECT_UNIT.test(this.currentToken.value)) return new O(new C(x.ONE), null, this.unit());
          if (this.currentToken.value === h) {
            this.consume(l);
            const t = this.anchorIndex();
            if (v.OBJECT_UNIT.test(this.currentToken.value)) return new O(new C(x.ONE), t, this.unit())
          } else if (this.currentToken.type === l) {
            if ("calc" === this.currentToken.value) return this.consume(l), this.expr();
            if ("css" === this.currentToken.value || "var" === this.currentToken.value || "prop" === this.currentToken.value) {
              const t = "prop" !== this.currentToken.value ? R : I;
              this.consume(l), this.consume(c);
              const e = this.propertyName();
              let i = null;
              return this.currentToken.type === y && (this.consume(y), this.consume(l), i = this.anchorIndex()), this.consume(u), new t(i, e)
            }
            if (v.MATH_FUNCTION.test(this.currentToken.value)) {
              const t = this.currentToken.value.toLowerCase();
              if ("number" == typeof a[t]) return this.consume(l), new C(new x(l, a[t]));
              const e = x[t] || new x(t, t),
                i = [];
              this.consume(l), this.consume(c);
              let s = null;
              do {
                this.currentToken.value === y && this.consume(y), s = this.expr(), i.push(s)
              } while (this.currentToken.value === y);
              return this.consume(u), new P(e, i)
            }
          } else if (this.currentToken.type === c) {
            this.consume(c);
            let t = this.expr();
            return this.consume(u), t
          }
        }
        this.error("Unexpected token ".concat(this.currentToken.value))
      }
      propertyName() {
        let t = "";
        for (; this.currentToken.type === l || this.currentToken.type === m;) t += this.currentToken.value, this.pos += 1;
        return t
      }
      unit(t = v.ANY_UNIT) {
        const e = this.currentToken;
        if (e.type === l && t.test(e.value)) return this.consume(l), new x(l, e.value = e.value.replace(/%(h|w)/, "$1").replace("%", "h"));
        this.error("Expected unit type")
      }
      anchorIndex() {
        const t = this.currentToken;
        if (t.type === g) return this.consume(g), new C(t);
        this.error("Invalid anchor reference", ". Should be something like a0, a1, a2")
      }
      parse() {
        const t = this.expr();
        return this.currentToken !== x.EOF && this.error("Unexpected token ".concat(this.currentToken.value)), t
      }
    }
    class D {
      constructor(t) {
        this.parser = t, this.root = t.parse()
      }
      visit(t) {
        let e = this[t.type];
        if (!e) throw new Error("No visit method named, ".concat(e));
        return e.call(this, t)
      }
      BinOp(t) {
        switch (t.op.type) {
          case d:
            return this.visit(t.left) + this.visit(t.right);
          case m:
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
        return "" === i ? 0 : D.Parse(i).execute(o)
      }
      Num(t) {
        return t.value
      }
      UnaryOp(t) {
        return t.op.type === d ? +this.visit(t.expr) : t.op.type === m ? -this.visit(t.expr) : void 0
      }
      MathOp(t) {
        let e = t.list.map(t => this.visit(t));
        return a[t.op.value].apply(null, e)
      }
      unwrapReference(t) {
        return null === t.ref ? o.target : (t.ref.value >= o.anchors.length && console.error("Not enough anchors supplied for expression ".concat(this.parser.lexer.text), o.target), o.anchors[t.ref.value])
      }
      execute(t) {
        return o = t, this.visit(this.root)
      }
      static Parse(t) {
        return n[t] || (n[t] = new D(new k(new F(t))))
      }
    }
    D.programs = n, e.exports = D
  }, {
    120: 120,
    74: 74
  }],
  89: [function(t, e, i) {
    "use strict";
    const s = t(12).EventEmitterMicro,
      r = t(120),
      n = t(92),
      a = t(74),
      o = t(73),
      h = t(80),
      l = t(86),
      c = t(77),
      u = t(87),
      d = t(71),
      m = {};
    "undefined" != typeof window && (m.create = t(53), m.update = t(63), m.draw = t(59));
    let p = 0;
    e.exports = class extends s {
      constructor(t, e) {
        super(), this.anim = e, this.element = t, this.name = this.name || t.getAttribute("data-anim-scroll-group"), this.isEnabled = !0, this.position = new h, this.metrics = new c, this.metrics.add(this.element), this.expressionParser = new u(this), this.boundsMin = 0, this.boundsMax = 0, this.timelineUpdateRequired = !1, this._keyframesDirty = !1, this.viewableRange = this.createViewableRange(), this.defaultEase = a.KeyframeDefaults.ease, this.keyframeControllers = [], this.updateProgress(this.getPosition()), this.onDOMRead = this.onDOMRead.bind(this), this.onDOMWrite = this.onDOMWrite.bind(this), this.gui = null, this.finalizeInit()
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
        return this.keyframeControllers.includes(t) ? (t._allKeyframes.forEach(t => t.markedForRemoval = !0), this.keyframesDirty = !0, new Promise(e => {
          m.draw(() => {
            const i = this.keyframeControllers.indexOf(t); - 1 !== i ? (this.keyframeControllers.splice(i, 1), t.onDOMWrite(), t.destroy(), this.gui && this.gui.create(), e()) : e()
          })
        })) : Promise.resolve()
      }
      remove() {
        return this.anim.removeGroup(this)
      }
      clear() {
        return Promise.all(this.keyframeControllers.map(t => this.removeKeyframeController(t)))
      }
      setupRAFEmitter(t) {
        this.rafEmitter && this.rafEmitter.destroy(), this.rafEmitter = t || new m.create, this.rafEmitter.on("update", this.onDOMRead), this.rafEmitter.on("draw", this.onDOMWrite), this.rafEmitter.once("external", () => this.reconcile())
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
        return null === i && (i = new d(this, t), this.keyframeControllers.push(i)), this.keyframesDirty = !0, i.addKeyframe(e)
      }
      addEvent(t, e) {
        e.event = e.event || "Generic-Event-Name-" + p++;
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
        this.keyframeControllers.forEach(e => {
          t.add(e.element), e._allKeyframes.forEach(e => e.anchors.forEach(e => t.add(e)))
        }), this.metrics.refreshCollection(t), this.viewableRange = this.createViewableRange()
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
        return new l(this.metrics.get(this.element), a.pageMetrics.windowHeight)
      }
      _onBreakpointChange(t, e) {
        this.keyframesDirty = !0, this.determineActiveKeyframes()
      }
      updateProgress(t) {
        this.hasDuration() ? (this.position.localUnclamped = (t - this.viewableRange.a) / (this.viewableRange.d - this.viewableRange.a), this.position.local = r.clamp(this.position.localUnclamped, this.boundsMin, this.boundsMax)) : this.position.local = this.position.localUnclamped = 0
      }
      performTimelineDispatch() {
        for (let t = 0, e = this.keyframeControllers.length; t < e; t++) this.keyframeControllers[t].updateLocalProgress(this.position.local);
        this.trigger(a.EVENTS.ON_TIMELINE_UPDATE, this.position.local), this.trigger("update", this.position.local), this.timelineUpdateRequired = !1, this.position.lastPosition !== this.position.local && (this.position.lastPosition <= this.boundsMin && this.position.localUnclamped > this.boundsMin ? (this.trigger(a.EVENTS.ON_TIMELINE_START, this), this.trigger("start", this)) : this.position.lastPosition >= this.boundsMin && this.position.localUnclamped < this.boundsMin ? (this.trigger(a.EVENTS.ON_TIMELINE_START + ":reverse", this), this.trigger("start:reverse", this)) : this.position.lastPosition <= this.boundsMax && this.position.localUnclamped >= this.boundsMax ? (this.trigger(a.EVENTS.ON_TIMELINE_COMPLETE, this), this.trigger("complete", this)) : this.position.lastPosition >= this.boundsMax && this.position.localUnclamped < this.boundsMax && (this.trigger(a.EVENTS.ON_TIMELINE_COMPLETE + ":reverse", this), this.trigger("complete:reverse", this))), null !== this.gui && this.gui.onScrollUpdate(this.position)
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
        const n = this.position.lastPosition < this.boundsMin && this.position.localUnclamped > this.boundsMax,
          a = this.position.lastPosition > this.boundsMax && this.position.localUnclamped < this.boundsMax;
        (n || a) && (this.performTimelineDispatch(), this.requestDOMChange(), this.position.lastPosition = this.position.localUnclamped), null !== this.gui && this.gui.onScrollUpdate(this.position)
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
    }
  }, {
    12: 12,
    120: 120,
    53: 53,
    59: 59,
    63: 63,
    71: 71,
    73: 73,
    74: 74,
    77: 77,
    80: 80,
    86: 86,
    87: 87,
    92: 92
  }],
  90: [function(t, e, i) {
    "use strict";
    const s = t(89),
      r = t(68),
      n = t(120);
    let a = 0;
    const o = {};
    "undefined" != typeof window && (o.create = t(53));
    class h extends s {
      constructor(t, e) {
        t || ((t = document.createElement("div")).className = "TimeGroup-" + a++), super(t, e), this.name = this.name || t.getAttribute("data-anim-time-group"), this._isPaused = !0, this._repeats = 0, this._isReversed = !1, this._timeScale = 1, this._chapterPlayer = new r(this), this.now = performance.now()
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
        t = n.clamp(t, this.boundsMin, this.duration), this.timelineUpdateRequired = !0, this.updateTimeline(t)
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
        this.hasDuration() ? (this.position.localUnclamped = t, this.position.local = n.clamp(this.position.localUnclamped, this.boundsMin, this.boundsMax)) : this.position.local = this.position.localUnclamped = 0
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
      set timelineProgress(t) {
        this.progress(t)
      }
      get timelineProgress() {
        return this.progress()
      }
    }
    h.REPEAT_FOREVER = -1, e.exports = h
  }, {
    120: 120,
    53: 53,
    68: 68,
    89: 89
  }],
  91: [function(t, e, i) {
    "use strict";
    const s = t(89),
      r = (t(68), t(120));
    let n = 0;
    const a = {};
    "undefined" != typeof window && (a.create = t(53));
    e.exports = class extends s {
      constructor(t, e) {
        t || ((t = document.createElement("div")).className = "TweenGroup-" + n++), super(t, e), this.name = "Tweens", this.keyframes = [], this._isPaused = !1, this.now = performance.now()
      }
      finalizeInit() {
        this.onTimeEmitterUpdate = this.onTimeEmitterUpdate.bind(this), this.removeExpiredKeyframeControllers = this.removeExpiredKeyframeControllers.bind(this), super.finalizeInit()
      }
      destroy() {
        this._timeEmitter.destroy(), this._timeEmitter = null, this._keyframes = [], super.destroy()
      }
      setupRAFEmitter(t) {
        this.now = performance.now(), this._timeEmitter = new a.create, this._timeEmitter.on("update", this.onTimeEmitterUpdate), this._timeEmitter.run(), super.setupRAFEmitter(t)
      }
      addKeyframe(t, e) {
        if (void 0 !== e.start || void 0 !== e.end) throw Error("Tweens do not have a start or end, they can only have a duration. Consider using a TimeGroup instead");
        if ("number" != typeof e.duration) throw Error("Tween options.duration is undefined, or is not a number");
        let i, s;
        e.start = (e.delay || 0) + this.position.localUnclamped, e.end = e.start + e.duration, e.preserveState = !0, e.snapAtCreation = !0, t._animInfo && (i = t._animInfo.group, s = t._animInfo.controller);
        let r = super.addKeyframe(t, e);
        return t._animInfo.group = i, t._animInfo.controller = s, e.onStart && r.controller.once("draw", t => {
          t.keyframe = r, e.onStart(t), t.keyframe = null
        }), e.onDraw && r.controller.on("draw", t => {
          t.keyframe = r, e.onDraw(t), t.keyframe = null
        }), this.removeOverlappingProps(r), this.keyframes.push(r), this._timeEmitter.willRun() || (this.now = performance.now(), this._timeEmitter.run()), r
      }
      removeOverlappingProps(t) {
        if (t.controller._allKeyframes.length <= 1) return;
        let e = Object.keys(t.animValues),
          i = t.controller;
        for (let s = 0, r = i._allKeyframes.length; s < r; s++) {
          const r = i._allKeyframes[s];
          if (r === t) continue;
          if (r.markedForRemoval) continue;
          let n = Object.keys(r.animValues),
            a = n.filter(t => e.includes(t));
          a.length !== n.length ? a.forEach(t => delete r.animValues[t]) : r.markedForRemoval = !0
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
        this.boundsMin = Math.min(...this.keyframes.map(t => t.start)), this.boundsMax = Math.max(...this.keyframes.map(t => t.end))
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
  }, {
    120: 120,
    53: 53,
    68: 68,
    89: 89
  }],
  92: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return t.reduce((t, e) => (t[e] = e, t), {})
    }
  }, {}],
  93: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e) {
      if ("string" != typeof t) return t;
      try {
        return (e || document).querySelector(t) || document.querySelector(t)
      } catch (t) {
        return !1
      }
    }
  }, {}],
  94: [function(t, e, i) {
    "use strict";
    const s = t(95),
      r = t(122),
      n = t(8),
      a = Object.freeze({
        responseType: "blob"
      });
    class o {
      static convertToResolution(t) {
        return "boolean" != typeof t ? null : t ? "2x" : "1x"
      }
      static convertViewportName(t, e) {
        const i = t.toLowerCase();
        return "xl" === i && !0 === e ? "xlarge" : "l" === i || ("xl" === i || "xlarge" === i) && !0 !== e ? "large" : "m" === i ? "medium" : "s" === i ? "small" : t
      }
      constructor(t) {
        t = Object.assign({}, t), this._requestOptions = Object.assign({}, a, t.xhr), this._template = new s(t), this._evtObserver = null, this._state = {
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
        const t = this._state.request,
          e = t.xhr.response;
        let i;
        return i = !e ? t.send() : 200 === t.xhr.status ? Promise.resolve({
          response: e
        }) : Promise.reject({
          error: this._state.requestErr
        }), i.then(t => {
          let e = t.response;
          return "blob" === this._requestOptions.responseType && (this._state.objectUrl = e = window.URL.createObjectURL(t.response), this._updateHistory()), Promise.resolve(e)
        }, t => {
          let e = this._state.requestErr = t.error;
          return Promise.reject(e)
        })
      }
      change(t) {
        if ("object" != typeof t || Array.isArray(t)) return void n("AssetSource.change expects an object argument.");
        const e = t.hasOwnProperty("viewport"),
          i = t.hasOwnProperty("resolution");
        if (e || i) {
          if (e && (this._template.viewport = t.viewport), i) {
            const e = t.resolution;
            this._template.resolution = "boolean" == typeof e ? o.convertToResolution(e) : e
          }
          this._openNewRequest()
        } else n("AssetSource.change requires a viewport and/or resolution.")
      }
      abortLoad() {
        this._state.request.xhr.abort()
      }
      revokeLastObjectUrl() {
        if ("blob" === this._requestOptions.responseType) {
          const t = this._history.length - 2;
          if (t < 0) return;
          const e = this._history[t];
          window.URL.revokeObjectURL(e.objectUrl)
        }
      }
      _openNewRequest() {
        const t = "".concat(this._template.viewport, "_").concat(this._template.resolution);
        let e = this._requestCache.get(t);
        if (!e) {
          const i = this._template.generatePath();
          e = new r(i, this._requestOptions), this._requestCache.set(t, e), e.open()
        }
        this._state.request = e
      }
      _updateHistory() {
        this._history.push(Object.assign({}, this._state))
      }
      _revokeAllObjectUrls() {
        "blob" === this._requestOptions.responseType && this._history.forEach(t => {
          window.URL.revokeObjectURL(t.objectUrl)
        })
      }
    }
    e.exports = o
  }, {
    122: 122,
    8: 8,
    95: 95
  }],
  95: [function(t, e, i) {
    "use strict";
    const s = t(96),
      r = {
        isVatPath: !0
      };
    class n {
      static formatPathSegment(t) {
        let e = t.replace(/^\s*\/*\s*|\s*\/*\s*$/g, "");
        return e ? (e = e.replace(/\b\/{2,}\b/g, "/"), /\b:\/{2}\b/.test(e) ? e : "/".concat(e)) : ""
      }
      constructor(t) {
        (t = Object.assign({}, r, t)).model = t.model || s, this._model = t.model, this._isVatPath = t.isVatPath, this.viewport = "", this.resolution = "", this._pathSegmentsMap = this._createPathSegmentMap(t), this._template = this._createTemplate(this._pathSegmentsMap)
      }
      get name() {
        return this._pathSegmentsMap.get("name")
      }
      generatePath() {
        const t = this._model.TEMPLATE_PLACEHOLDERS,
          e = this.viewport;
        let i = this.resolution;
        return i && (i = "1x" === i || "" === e ? "" : "_".concat(i)), this._template.replace(t.viewport, e).replace(t.resolution, i)
      }
      _createPathSegmentMap(t) {
        const e = t.el,
          i = t.model,
          s = i.PATH_SEGMENTS,
          r = i.ATTRIBUTES,
          n = new Map;
        return Object.keys(s).forEach(i => {
          const a = r[i],
            o = a && e && e.hasAttribute(a);
          let h = o ? e.getAttribute(a) : t[i];
          "/" === h || null === h || "null" === h ? h = "" : h || o || (h = s[i]), n.set(i, h)
        }), this.viewport = n.get("viewport"), this.resolution = n.get("resolution"), n
      }
      _createTemplate(t) {
        let e = this._isVatPath ? "/105/media" : "";
        const i = this._model.TEMPLATE_PLACEHOLDERS;
        return t.forEach((t, s) => {
          t && (e += "viewport" === s ? n.formatPathSegment(i.viewport) : "resolution" === s ? i.resolution : "format" === s ? "." + t : n.formatPathSegment(t))
        }), e
      }
    }
    e.exports = n
  }, {
    96: 96
  }],
  96: [function(t, e, i) {
    "use strict";
    e.exports = {
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
  97: [function(t, e, i) {
    arguments[4][38][0].apply(i, arguments)
  }, {
    38: 38
  }],
  98: [function(t, e, i) {
    arguments[4][39][0].apply(i, arguments)
  }, {
    104: 104,
    105: 105,
    12: 12,
    39: 39
  }],
  99: [function(t, e, i) {
    arguments[4][40][0].apply(i, arguments)
  }, {
    13: 13,
    40: 40
  }],
  100: [function(t, e, i) {
    arguments[4][41][0].apply(i, arguments)
  }, {
    102: 102,
    41: 41
  }],
  101: [function(t, e, i) {
    arguments[4][42][0].apply(i, arguments)
  }, {
    100: 100,
    42: 42
  }],
  102: [function(t, e, i) {
    arguments[4][43][0].apply(i, arguments)
  }, {
    43: 43,
    98: 98
  }],
  103: [function(t, e, i) {
    arguments[4][44][0].apply(i, arguments)
  }, {
    101: 101,
    44: 44
  }],
  104: [function(t, e, i) {
    arguments[4][45][0].apply(i, arguments)
  }, {
    33: 33,
    45: 45,
    97: 97
  }],
  105: [function(t, e, i) {
    arguments[4][46][0].apply(i, arguments)
  }, {
    33: 33,
    46: 46,
    97: 97,
    99: 99
  }],
  106: [function(t, e, i) {
    arguments[4][47][0].apply(i, arguments)
  }, {
    101: 101,
    47: 47
  }],
  107: [function(t, e, i) {
    "use strict";
    const s = t(12).EventEmitterMicro,
      r = t(74),
      n = {
        create: t(98),
        update: t(106),
        draw: t(103)
      },
      a = () => {};
    let o = 0;
    e.exports = class extends s {
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
        if (!e.every(e => t.hasOwnProperty(e))) return void console.log("BubbleGum.BaseComponent::addRAFLoop required options are missing: " + e.join(" "));
        const i = new n.create;
        i.on("update", t.onUpdate || a), i.on("draw", t.onDraw || a), i.on("draw", () => i.run());
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
  }, {
    103: 103,
    106: 106,
    12: 12,
    74: 74,
    98: 98
  }],
  108: [function(t, e, i) {
    "use strict";
    const s = t(12).EventEmitterMicro,
      r = t(113),
      n = t(67),
      a = t(74),
      o = t(109),
      h = {};
    class l extends s {
      constructor(t, e = {}) {
        super(), this.el = t, this.anim = n, this.componentAttribute = e.attribute || "data-component-list", this.components = [], this.componentsInitialized = !1, this.el.getAttribute("data-anim-scroll-group") || this.el.setAttribute("data-anim-scroll-group", "bubble-gum-group"), r.add(() => {
          n.initialize().then(() => {
            this.initComponents(), this.setupEvents(), this.components.forEach(t => t.mounted()), this.trigger(l.EVENTS.DOM_COMPONENTS_MOUNTED)
          })
        })
      }
      initComponents() {
        const t = Array.prototype.slice.call(this.el.querySelectorAll("[".concat(this.componentAttribute, "]")));
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
        let c = new r({
          el: e,
          data: s,
          componentName: t.componentName,
          gum: this,
          pageMetrics: a.pageMetrics
        });
        return this.components.push(c), this.componentsInitialized && c.mounted(), c
      }
      removeComponent(t) {
        const e = this.components.indexOf(t); - 1 !== e && (this.components.splice(e, 1), t.el.dataset.componentList = t.el.dataset.componentList.split(" ").filter(e => e !== t.componentName).join(" "), t.destroy())
      }
      getComponentOfType(t, e = document.documentElement) {
        const i = "[".concat(this.componentAttribute, "*=").concat(t, "]"),
          s = e.matches(i) ? e : e.querySelector(i);
        return s ? this.components.find(e => e instanceof o[t] && e.el === s) : null
      }
      getComponentsOfType(t, e = document.documentElement) {
        const i = "[".concat(this.componentAttribute, "*=").concat(t, "]"),
          s = e.matches(i) ? [e] : Array.from(e.querySelectorAll(i));
        return this.components.filter(e => e instanceof o[t] && s.includes(e.el))
      }
      getComponentsForElement(t) {
        return this.components.filter(e => e.el === t)
      }
      onResizeImmediate() {
        this.components.forEach(t => t.onResizeImmediate(a.pageMetrics))
      }
      onResizeDebounced() {
        this.components.forEach(t => t.onResizeDebounced(a.pageMetrics))
      }
      onBreakpointChange() {
        this.components.forEach(t => t.onBreakpointChange(a.pageMetrics))
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
    }, e.exports = l
  }, {
    109: 109,
    113: 113,
    12: 12,
    67: 67,
    74: 74
  }],
  109: [function(t, e, i) {
    "use strict";
    e.exports = {
      BaseComponent: t(107)
    }
  }, {
    107: 107
  }],
  110: [function(t, e, i) {
    "use strict";
    class s {
      constructor(t) {
        this.name = t, this.playing = !1, this.requests = []
      }
      addRequest(t) {
        this.requests.push(t), this.requests.sort((t, e) => t.priority - e.priority), this.playing || (this.playing = !0, requestAnimationFrame(() => {
          this._schedule()
        }))
      }
      removeRequest(t) {
        const e = this.requests.findIndex(e => e === t); - 1 != e && this.requests.splice(e, 1).length;
        const i = t === this.currentRequest;
        i && (clearTimeout(this.currentRequestTimeout), requestAnimationFrame(() => {
          this._schedule()
        }))
      }
      _schedule() {
        if (0 !== this.requests.length) {
          var t = this.requests.shift();
          0, this.currentRequest = t, t.callback(), this.currentRequestTimeout = setTimeout(() => {
            this.currentRequest = void 0, this.currentRequestTimeout = void 0, this._schedule()
          }, 1e3 * t.duration)
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
        priority: n
      }) {
        if (void 0 !== i && (("number" != typeof(t = Math.round(i.getBoundingClientRect().top + document.documentElement.scrollTop)) || isNaN(t)) && (t = void 0), n = a(i)), void 0 === n && (n = 0), void 0 === t) {
          const t = Promise.resolve();
          return t.cancel = function() {}, t
        }
        var o;
        const h = new Promise(i => {
          this.buckets[t] || (this.buckets[t] = new s(t)), o = {
            callback: i,
            duration: e,
            name: r,
            priority: n
          }, this.buckets[t].addRequest(o)
        });
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
    var n = new r;

    function a(t) {
      return Array.prototype.indexOf.call(t.parentElement.children, t)
    }
    e.exports = {
      CarnivalDirector: r,
      director: n,
      indexOf: a
    }
  }, {}],
  111: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      let {
        element: e,
        attribute: i,
        defaultOptions: s
      } = t;
      const r = e.getAttribute(i) || "{}";
      let n = null;
      try {
        n = JSON.parse(r)
      } catch (t) {
        return void console.error("attributeToJSON Error! Invalid JSON in `" + i + "` for element:", e)
      }
      for (let t in s)
        if (!n.hasOwnProperty(t)) {
          if (null === s[t]) return void console.error("attributeToJSON Error! Required key `" + t + "` missing from attribute JSON `" + i + "` for element:", e);
          n[t] = s[t]
        } return n
    }
  }, {}],
  112: [function(t, e, i) {
    "use strict";
    "undefined" != typeof window && (window.DOMMatrix = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix);
    const s = 180 / Math.PI,
      r = t => Math.round(1e6 * t) / 1e6;

    function n(t) {
      return Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2])
    }

    function a(t, e) {
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
        c = new Float32Array(3);
      c[0] = t[3][0], c[1] = t[3][1], c[2] = t[3][2];
      const u = new Array(3);
      for (let e = 0; e < 3; e++) u[e] = t[e].slice(0, 3);
      i[0] = n(u[0]), u[0] = a(u[0], i[0]), l[0] = o(u[0], u[1]), u[1] = h(u[1], u[0], 1, -l[0]), i[1] = n(u[1]), u[1] = a(u[1], i[1]), l[0] /= i[1], l[1] = o(u[0], u[2]), u[2] = h(u[2], u[0], 1, -l[1]), l[2] = o(u[1], u[2]), u[2] = h(u[2], u[1], 1, -l[2]), i[2] = n(u[2]), u[2] = a(u[2], i[2]), l[1] /= i[2], l[2] /= i[2];
      const d = (m = u[1], p = u[2], [m[1] * p[2] - m[2] * p[1], m[2] * p[0] - m[0] * p[2], m[0] * p[1] - m[1] * p[0]]);
      var m, p;
      if (o(u[0], d) < 0)
        for (let t = 0; t < 3; t++) i[t] *= -1, u[t][0] *= -1, u[t][1] *= -1, u[t][2] *= -1;
      let f;
      return e[0] = .5 * Math.sqrt(Math.max(1 + u[0][0] - u[1][1] - u[2][2], 0)), e[1] = .5 * Math.sqrt(Math.max(1 - u[0][0] + u[1][1] - u[2][2], 0)), e[2] = .5 * Math.sqrt(Math.max(1 - u[0][0] - u[1][1] + u[2][2], 0)), e[3] = .5 * Math.sqrt(Math.max(1 + u[0][0] + u[1][1] + u[2][2], 0)), u[2][1] > u[1][2] && (e[0] = -e[0]), u[0][2] > u[2][0] && (e[1] = -e[1]), u[1][0] > u[0][1] && (e[2] = -e[2]), f = e[0] < .001 && e[0] >= 0 && e[1] < .001 && e[1] >= 0 ? [0, 0, r(180 * Math.atan2(u[0][1], u[0][0]) / Math.PI)] : function(t) {
        const [e, i, n, a] = t, o = e * e, h = i * i, l = n * n, c = e * i + n * a, u = a * a + o + h + l;
        return c > .49999 * u ? [0, 2 * Math.atan2(e, a) * s, 90] : c < -.49999 * u ? [0, -2 * Math.atan2(e, a) * s, -90] : [r(Math.atan2(2 * e * a - 2 * i * n, 1 - 2 * o - 2 * l) * s), r(Math.atan2(2 * i * a - 2 * e * n, 1 - 2 * h - 2 * l) * s), r(Math.asin(2 * e * i + 2 * n * a) * s)]
      }(e), {
        translation: c,
        rotation: f,
        eulerRotation: f,
        scale: [r(i[0]), r(i[1]), r(i[2])]
      }
    }
    e.exports = function(t) {
      t instanceof Element && (t = String(getComputedStyle(t).transform).trim());
      let e = new DOMMatrix(t);
      const i = new Array(4);
      for (let t = 1; t < 5; t++) {
        const s = i[t - 1] = new Float32Array(4);
        for (let i = 1; i < 5; i++) s[i - 1] = e["m".concat(t).concat(i)]
      }
      return l(i)
    }
  }, {}],
  113: [function(t, e, i) {
    "use strict";
    let s = !1,
      r = !1,
      n = [],
      a = -1;
    e.exports = {
      NUMBER_OF_FRAMES_TO_WAIT: 30,
      add: function(t) {
        if (r && t(), n.push(t), s) return;
        s = !0;
        let e = document.documentElement.scrollHeight,
          i = 0;
        const o = () => {
          let t = document.documentElement.scrollHeight;
          if (e !== t) i = 0;
          else if (i++, i >= this.NUMBER_OF_FRAMES_TO_WAIT) return void n.forEach(t => t());
          e = t, a = requestAnimationFrame(o)
        };
        a = requestAnimationFrame(o)
      },
      reset() {
        cancelAnimationFrame(a), s = !1, r = !1, n = []
      }
    }
  }, {}],
  114: [function(t, e, i) {
    "use strict";
    const s = t(119).controls,
      r = t(11);
    e.exports = class {
      constructor(t, e) {
        e = Object.assign({}, e), this._model = e.model || s, this._container = t, this._ctrls = new Map, this._state = {
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
        const t = this._container;
        if (!t) return;
        const e = this._model.SELECTORS;
        Object.keys(e).forEach(i => {
          if ("container" === i) return;
          const s = e[i],
            r = t.querySelector(s);
          r && (this._ctrls.set(i, r), this._state.arePresent = !0)
        })
      }
      isPresent(t) {
        return !!this._ctrls.get(t)
      }
      getElement(t) {
        return this._ctrls.get(t) || null
      }
      enable(t) {
        this._setDisabled(t, !1)
      }
      disable(t) {
        this._setDisabled(t, !0)
      }
      _setDisabled(t, e) {
        const i = this._ctrls,
          s = (s, n) => {
            const a = i.get(s);
            a ? a.disabled = n : r("Unable to ".concat(e ? "disable" : "enable", " the ").concat(t, " control. The element does not exist."))
          };
        "string" == typeof t ? s(t, e) : Array.isArray(t) && t.forEach(t => {
          s(t, e)
        })
      }
      disableAll() {
        this._ctrls.forEach((t, e) => {
          this.disable(e)
        })
      }
      attach(t, e) {
        const i = this._ctrls.get(t);
        i && "function" == typeof e ? i.addEventListener("click", e) : r("Unable to attach ".concat(t, " control."))
      }
      remove(t, e) {
        const i = this._ctrls.get(t);
        "string" != typeof t && "function" != typeof e || !this._ctrls.get(t) ? r("Unable to remove ".concat(t, " control.")) : i.removeEventListener("click", e)
      }
    }
  }, {
    11: 11,
    119: 119
  }],
  115: [function(t, e, i) {
    "use strict";
    const s = t(119).frames,
      r = t(11);
    e.exports = class {
      constructor(t, e) {
        e = Object.assign({}, e), this._model = e.model || s, this._container = t, this._frames = new Map, this._promise = {}, this._state = {
          arePresent: !1,
          active: !1
        }
      }
      get arePresent() {
        return this._state.arePresent
      }
      get active() {
        let t = !1;
        return this._frames.forEach((e, i) => {
          const s = this.isActive(i);
          t = s || t
        }), t
      }
      isPresent(t) {
        return !!this._frames.get(t)
      }
      isActive(t) {
        return this._state[t].active
      }
      getElement(t) {
        const e = this._frames.get(t);
        return e || (r("The ".concat(t, "Frame does not appear to exist.")), null)
      }
      initialize() {
        const t = this._container;
        if (!t) return;
        const e = this._model.SELECTORS;
        Object.keys(e).forEach(i => {
          if ("container" === i) return;
          const s = e[i],
            r = t.querySelector(s);
          r && (this._frames.set(i, r), this._state.arePresent = !0, this._state[i] = {}, this._state[i].active = r.classList.contains(this._model.CLASS.active), this._state[i].hasCSSTransition = this._checkForCSSTransition(r, i), this._promise[i] = {}, this._promise[i].activate = null, this._promise[i].deactivate = null)
        })
      }
      activate(t) {
        return this._setActivity(t, !0)
      }
      deactivate(t) {
        return this._setActivity(t, !1)
      }
      deactivateAll() {
        let t = [];
        return this._frames.forEach((e, i) => {
          t.push(this.deactivate(i))
        }), Promise.all(t)
      }
      _checkForCSSTransition(t, e) {
        const i = window.getComputedStyle(t)["transition-duration"],
          s = i && "0s" !== i;
        return s || r("InlineVideo : Frames : ".concat(e ? e + "Frame" : t, " does not have a valid CSS transition for (de)activation")), s
      }
      _toggleActivity(t, e) {
        e || (e = this.getElement(t)), e.classList.toggle(this._model.CLASS.active), this._state[t].active = !this._state[t].active
      }
      _setActivity(t, e) {
        const i = this._frames.get(t);
        if (!i) return Promise.reject("The ".concat(t, "Frame element does not exist"));
        const s = e ? "activate" : "deactivate",
          r = e ? "deactivate" : "activate",
          n = this._promise[t][s];
        if (n) return n;
        return (this._promise[t][r] || Promise.resolve()).then(() => (this._promise[t][r] = null, this._promise[t][s] = new Promise((r, n) => {
          const a = this._state[t].active;
          if (!(e && !a || !e && a)) return this._promise[t][s] = null, void r();
          const o = !!i.offsetHeight;
          if (this._state[t].hasCSSTransition && o) {
            const e = () => {
              i.removeEventListener("transitionend", e), this._promise[t][s] = null, r()
            };
            i.addEventListener("transitionend", e), this._toggleActivity(t, i)
          } else this._toggleActivity(t, i), this._promise[t][s] = null, r()
        })))
      }
    }
  }, {
    11: 11,
    119: 119
  }],
  116: [function(t, e, i) {
    "use strict";
    const s = t(119).indicators,
      r = t(11);
    e.exports = class {
      constructor(t, e) {
        e = Object.assign({}, e), this._model = e.model || s, this._container = t, this._indicators = new Map, this._state = {
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
        const t = this._container;
        if (!t) return;
        const e = this._model.SELECTORS;
        Object.keys(e).forEach(i => {
          if ("container" === i) return;
          const s = e[i],
            r = t.querySelector(s);
          r && (this._indicators.set(i, r), this._state.arePresent = !0, this._state[i] = {}, this._state[i].active = r.classList.contains(this._model.CLASS.active))
        })
      }
      isPresent(t) {
        return !!this._indicators.get(t)
      }
      isActive(t) {
        return this._state[t].active
      }
      getElement(t) {
        return this._indicators.get(t) || null
      }
      activate(t) {
        this._setActivity(t, !1)
      }
      deactivate(t) {
        this._setActivity(t, !0)
      }
      _setActivity(t, e) {
        const i = this._indicators.get(t);
        if (!i) return void r("Unable to ".concat(e ? "deactivate" : "activate", " the ").concat(t, " indicator. The element does not exist."));
        const s = e ? "remove" : "add";
        this._state[t].active = !e, i.classList[s](this._model.CLASS.active)
      }
    }
  }, {
    11: 11,
    119: 119
  }],
  117: [function(t, e, i) {
    "use strict";
    const s = t(118),
      r = t(114),
      n = t(115),
      a = t(116),
      o = t(119),
      h = t(11),
      l = t(8);
    e.exports = class extends s {
      constructor(t, e) {
        (e = Object.assign({}, e)).model = e.model || o, e.model = Object.assign({}, e.model, e.model.video), delete e.model.video, super(t, e), this._controls = {}, this._frames = {}, this._indicators = {}, this.replay = this.replay.bind(this)
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
        const t = this._container;
        if (!t) return void l("InlineVideo Error : A video element was passed as the containing element. InlineVideo class expects a container element holding the video, optional frames, and optional controls.");
        const e = t.querySelector(this._model.controls.SELECTORS.container),
          i = t.querySelector(this._model.frames.SELECTORS.container) || t,
          s = t.querySelector(this._model.indicators.SELECTORS.container),
          o = this._model;
        e && (this._controls = new r(e, {
          model: o.controls
        }), this._controls.initialize(), this._controls.arePresent && this._attachControls()), i && (this._frames = new n(i, {
          model: o.frames
        }), this._frames.initialize(), this._frames.arePresent || h("No inline-video frames appear to be present. At minimum, a static frame should be present for fallback.")), s && (this._indicators = new a(s, {
          model: o.indicators
        }), this._indicators.initialize())
      }
      load() {
        const t = this._indicators;
        !this.loaded && t.arePresent && t.activate("loading");
        let e = Promise.resolve();
        return this._frames.active, e.then(() => super.load())
      }
      play() {
        const t = this._frames,
          e = this._controls,
          i = t.isPresent("end") && t.isActive("end") ? t.deactivate("end") : Promise.resolve(),
          s = () => {
            this._el.removeEventListener("playing", s), e.arePresent && (e.disable(["play", "replay"]), e.enable("pause"))
          };
        return this._el.addEventListener("playing", s), i.then(() => super.play(), t => {
          h(t)
        })
      }
      pause() {
        const t = this._controls;
        return super.pause().then(() => {
          t.arePresent && (t.disable("pause"), t.enable("play"))
        }, t => {
          h(t)
        })
      }
      reset() {
        const t = this._controls;
        return super.reset().then(() => {
          t.arePresent && (t.disable("pause"), this.hasPlayed && t.isPresent("replay") ? t.enable("replay") : t.enable("play"))
        }, t => {
          h(t)
        })
      }
      replay() {
        const t = this._controls;
        return t.arePresent && (t.disable("replay"), t.enable("pause")), this.reset().then(() => this.play()).catch(t => {
          h(t)
        })
      }
      _attachControls() {
        const t = this._controls;
        t.allElements.forEach((e, i) => {
          const s = this[i];
          s ? t.attach(i, s) : h("Unable to attach ".concat(i, " control. No equivalent video method."))
        })
      }
      _onLoadSuccess(t) {
        const e = this._controls,
          i = this._frames,
          s = this._indicators;
        return super._onLoadSuccess(t).then(() => (s.arePresent && s.deactivate("loading"), e.arePresent && (this.hasPlayed && e.isPresent("replay") ? e.enable("replay") : e.enable("play")), i.arePresent ? i.deactivateAll() : Promise.resolve())).catch(t => {
          h(t)
        }).then(() => Promise.resolve())
      }
      _onLoadFailure(t) {
        const e = this._controls,
          i = this._frames,
          s = this._indicators;
        return super._onLoadFailure(t).catch(t => {}).then(() => (s.arePresent && s.deactivate("loading"), e.arePresent && e.disableAll(), i.arePresent ? i.activate("static") : Promise.resolve())).then(() => {
          const t = i.deactivate("end"),
            e = i.deactivate("start");
          return Promise.all([t, e])
        }).catch(t => {
          h(t)
        }).then(() => {
          const e = this._el;
          return e.getAttribute("src") && (e.setAttribute("src", ""), this._video.source.revokeLastObjectUrl()), Promise.reject(t)
        })
      }
      _onEnded(t) {
        const e = this._controls,
          i = this._frames;
        e.arePresent && (e.disable(["pause", "play", "replay"]), e.isPresent("replay") ? e.enable("replay") : e.enable("play"));
        return (i.isPresent("end") && !i.isActive("end") ? i.activate("end") : Promise.resolve()).catch(t => {
          h(t)
        }).then(() => super._onEnded(t))
      }
    }
  }, {
    11: 11,
    114: 114,
    115: 115,
    116: 116,
    118: 118,
    119: 119,
    8: 8
  }],
  118: [function(t, e, i) {
    "use strict";
    const s = t(119).video,
      r = t(94),
      n = t(8);
    class a {
      static convertToResolution(t) {
        return r.convertToResolution(t)
      }
      static convertViewportName(t, e) {
        return r.convertViewportName(t, e)
      }
      constructor(t, e) {
        e = Object.assign({}, e), this._model = e.model || s, delete e.model, this._options = e;
        const i = "VIDEO" === t.tagName;
        this._container = i ? null : t, this._el = i ? t : null, this._source = null, this._promise = {
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
        const t = this._el;
        return !(!t || t.paused || t.ended || !(t.readyState > 2))
      }
      get viewport() {
        return this.source.viewport
      }
      get resolution() {
        return this.source.resolution
      }
      get normalizedDuration() {
        const t = this._el.duration,
          e = t % 1;
        return t - e + .1 * Math.ceil(e / .1)
      }
      get name() {
        return this._state.name
      }
      set name(t) {
        this._state.name = t
      }
      initialize() {
        this._container && (this._el = this._container.querySelector(this._model.SELECTORS.video)), this._options.el = this._el, this._source = new r(this._options), this._state.name = this._source.name
      }
      change(t, e = !1) {
        const i = t.viewport;
        i && !e && (t.viewport = a.convertViewportName(i)), this.source.change(t)
      }
      load() {
        return this._promise.load && this.loaded ? this._promise.load : (this._state.loading = !0, this._promise.load = this._source.load().then(t => this._onLoadSuccess(t), t => this._onLoadFailure(t)))
      }
      play() {
        if (this._promise.nativePlay || this.isPlaying) return this._promise.playOnEnd;
        let t = this._promise.load;
        return t || this.loaded || (t = this.load()), this._promise.playOnEnd = t.then(this._playPromiseOnEnded)
      }
      pause() {
        let t = this._promise.nativePlay;
        return t = t || Promise.resolve(), t.then(() => (!this._el.paused && this.loaded && this._el.pause(), Promise.resolve()), t => Promise.reject(t))
      }
      reset() {
        let t = this._promise.nativePlay;
        return t = t || Promise.resolve(), t.then(() => (this.loaded && (this._el.paused || this._el.pause(), this._el.currentTime = 0), Promise.resolve()), t => Promise.reject(t))
      }
      end() {
        return this._el.ended ? Promise.resolve() : this.pause().then(() => (this._el.currentTime = this.normalizedDuration, Promise.resolve()), t => Promise.reject(t))
      }
      _onLoadSuccess(t) {
        return new Promise((e, i) => {
          const s = () => {
            this._el.removeEventListener("loadeddata", s), this._onFirstFrameLoaded(), e()
          };
          this._el.addEventListener("loadeddata", s), this._el.setAttribute("src", t), this._el.load()
        })
      }
      _onFirstFrameLoaded() {
        this._state.assetUrl = this._source.assetUrl, this._state.loading = !1, this._source.revokeLastObjectUrl()
      }
      _onLoadFailure(t) {
        return n("inline-video load error:", t), this._state.loading = !1, Promise.reject(t)
      }
      _crossBrowserPlay() {
        const t = this._el.play();
        return t || Promise.resolve()
      }
      _playPromiseOnEnded() {
        return new Promise((t, e) => {
          this._el.onended = () => {
            this._onEnded(t)
          };
          (this._promise.nativePlay = this._crossBrowserPlay()).then(() => {
            this._state.hasPlayed = !0, this._promise.nativePlay = null
          }).catch(e)
        })
      }
      _onEnded(t) {
        return t()
      }
    }
    e.exports = a
  }, {
    119: 119,
    8: 8,
    94: 94
  }],
  119: [function(t, e, i) {
    "use strict";
    e.exports = {
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
  120: [function(t, e, i) {
    "use strict";
    e.exports = {
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
  }, {}],
  121: [function(t, e, i) {
    "use strict";
    const s = t(12).EventEmitterMicro,
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
      a = "only screen and (orientation: portrait)";
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
          get: () => window.matchMedia(n).matches
        }), Object.defineProperty(this, "orientation", {
          get: () => window.matchMedia(a).matches ? "portrait" : "landscape"
        }), this.viewport = this.getBreakpoint()
      }
      _setupListeners(t) {
        if (t !== o.CHANGE_EVENTS.RETINA || this.listenersAdded.retina || (window.matchMedia(n).addListener(this._onRetinaChange), this.listenersAdded.retina = !0), t !== o.CHANGE_EVENTS.ORIENTATION || this.listenersAdded.orientation || (window.matchMedia(a).addListener(this._onOrientationChange), this.listenersAdded.orientation = !0), t === o.CHANGE_EVENTS.VIEWPORT && !this.listenersAdded.viewport) {
          for (let t = 0; t < this.BREAKPOINTS.length; t++) {
            let e = this.BREAKPOINTS[t];
            window.matchMedia(e.mediaQuery).addListener(t => {
              t.matches && (this.oldViewport = this.viewport, this.viewport = e.name, this.trigger(o.CHANGE_EVENTS.VIEWPORT, this))
            })
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
    e.exports = o
  }, {
    12: 12
  }],
  122: [function(t, e, i) {
    "use strict";
    const s = t(37),
      r = t(8),
      n = t(10),
      a = {
        requestMethod: "GET",
        timeout: 3e4
      };
    Object.freeze(a);
    const o = {
      response: null,
      xhr: null
    };
    Object.freeze(o);
    const h = {
      evt: null,
      xhr: null
    };
    Object.freeze(h);
    e.exports = class {
      static get IS_SUPPORTED() {
        const t = window.XMLHttpRequest,
          e = window.Promise;
        return t && "function" == typeof t && (e && "function" == typeof e)
      }
      static isCORSRequest(t) {
        return window.location.hostname !== s(t).hostname
      }
      constructor(t, e) {
        t || "string" == typeof t ? (this._src = s(t).href, this._opts = Object.assign({}, a, e), this._xhr = new XMLHttpRequest, this._promise = null, this._metrics = {
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
      send(t) {
        return t = void 0 === t ? null : t, this._promise ? this._promise : this._promise = new Promise((e, i) => {
          this._xhr.onprogress = this._onProgress, this._xhr.onloadstart = this._onLoadStart, this._xhr.onload = t => this._onLoad(e, i, t), this._xhr.ontimeout = t => this._rejectData(i, t), this._xhr.onerror = t => this._rejectData(i, t), this._xhr.onabort = t => this._rejectData(i, t), this._metrics.time.requested = Date.now(), this._xhr.send(t), n("XmlHttpRequest sent")
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
        Object.keys(this._opts).forEach(t => {
          t in this._xhr && "function" != typeof this._xhr[t] && (this._xhr[t] = this._opts[t])
        })
      }
      _onLoadStart() {
        this._metrics.time.load.start = Date.now(), this._metrics.progress = 0, n("XmlHttpRequest loading")
      }
      _onLoad(t, e, i) {
        if (200 !== this._xhr.status) return this._rejectData(e, i);
        this._calcTotalLoadTime();
        const s = Object.assign({}, o, {
          response: this._xhr.response,
          xhr: this._xhr
        });
        return n("XmlHttpRequest loaded"), t(s)
      }
      _onProgress(t) {
        this._metrics.totalAssetSize || (this._metrics.totalAssetSize = t.total), this._metrics.progress = t.total ? t.loaded / t.total : 0
      }
      _rejectData(t, e) {
        const i = Object.assign({}, h, {
          evt: e,
          xhr: this._xhr
        });
        return r("XhrRequest failed due to", i), t(i)
      }
    }
  }, {
    10: 10,
    37: 37,
    8: 8
  }],
  123: [function(t, e, i) {
    "use strict";
    e.exports = function() {
      var t = new Float32Array(16);
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }
  }, {}],
  124: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i) {
      var s = Math.sin(i),
        r = Math.cos(i),
        n = e[4],
        a = e[5],
        o = e[6],
        h = e[7],
        l = e[8],
        c = e[9],
        u = e[10],
        d = e[11];
      e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
      return t[4] = n * r + l * s, t[5] = a * r + c * s, t[6] = o * r + u * s, t[7] = h * r + d * s, t[8] = l * r - n * s, t[9] = c * r - a * s, t[10] = u * r - o * s, t[11] = d * r - h * s, t
    }
  }, {}],
  125: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i) {
      var s = Math.sin(i),
        r = Math.cos(i),
        n = e[0],
        a = e[1],
        o = e[2],
        h = e[3],
        l = e[8],
        c = e[9],
        u = e[10],
        d = e[11];
      e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
      return t[0] = n * r - l * s, t[1] = a * r - c * s, t[2] = o * r - u * s, t[3] = h * r - d * s, t[8] = n * s + l * r, t[9] = a * s + c * r, t[10] = o * s + u * r, t[11] = h * s + d * r, t
    }
  }, {}],
  126: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i) {
      var s = Math.sin(i),
        r = Math.cos(i),
        n = e[0],
        a = e[1],
        o = e[2],
        h = e[3],
        l = e[4],
        c = e[5],
        u = e[6],
        d = e[7];
      e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
      return t[0] = n * r + l * s, t[1] = a * r + c * s, t[2] = o * r + u * s, t[3] = h * r + d * s, t[4] = l * r - n * s, t[5] = c * r - a * s, t[6] = u * r - o * s, t[7] = d * r - h * s, t
    }
  }, {}],
  127: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i) {
      var s = i[0],
        r = i[1],
        n = i[2];
      return t[0] = e[0] * s, t[1] = e[1] * s, t[2] = e[2] * s, t[3] = e[3] * s, t[4] = e[4] * r, t[5] = e[5] * r, t[6] = e[6] * r, t[7] = e[7] * r, t[8] = e[8] * n, t[9] = e[9] * n, t[10] = e[10] * n, t[11] = e[11] * n, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
    }
  }, {}],
  128: [function(t, e, i) {
    "use strict";
    var s = t(110),
      r = t(155);
    const n = t(107);
    e.exports = class extends n {
      constructor(t) {
        super(t), this.cancelAnimationRequest = null, this.gridItemClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.animationDuration = 4.5, this.timeGroup = this.anim.createTimeGroup(), this.timeGroup.name = "adaptive-lighting", this.scrollGroup = this.anim.getGroupForTarget(this.el), this.icon = this.el.querySelector(".adaptive-lighting-icon"), this.text = this.el.querySelector(".typography-blockquote-copy"), this.params = {
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
        let t = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.play),
          e = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.reset);
        t.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), e.controller.on("reset:exit", () => {
          this._resetTileAnimation()
        })
      }
      _setupTimelineKeyframes() {
        const t = this.animationDuration / 3;
        this.timeGroup.addKeyframe(this.el, {
          start: 0,
          end: t,
          easeFunction: this.params.easeFunction,
          t: [0, 1],
          event: "fade-to-cool"
        }), this.timeGroup.addKeyframe(this.el, {
          start: t,
          end: 2 * t,
          easeFunction: this.params.easeFunction,
          t: [0, 1],
          event: "fade-to-warm"
        }), this.timeGroup.addKeyframe(this.el, {
          start: 2 * t,
          end: this.animationDuration,
          easeFunction: this.params.easeFunction,
          t: [0, 1],
          event: "fade-to-base"
        }), this.anim.getControllerForTarget(this.el).on("fade-to-cool", t => {
          this._updateColors(this.params.baseRGB, this.params.startRGB, t.tweenProps.t.current)
        }), this.anim.getControllerForTarget(this.el).on("fade-to-warm", t => {
          this._updateColors(this.params.startRGB, this.params.endRGB, t.tweenProps.t.current)
        }), this.anim.getControllerForTarget(this.el).on("fade-to-base", t => {
          this._updateColors(this.params.endRGB, this.params.baseRGB, t.tweenProps.t.current)
        })
      }
      _playTileAnimation() {
        let t = s.director.requestAnimationStart({
          element: this.el,
          duration: this.animationDuration
        });
        t.then(() => {
          this.timeGroup.play()
        }), this.cancelAnimationRequest = t.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.timeGroup.restart(), this.timeGroup.pause()
      }
      _hexToRGB(t) {
        t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(t, e, i, s) {
          return e + e + i + i + s + s
        }));
        let e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return e ? {
          r: parseInt(e[1], 16),
          g: parseInt(e[2], 16),
          b: parseInt(e[3], 16)
        } : null
      }
      _lerpRGB(t, e, i) {
        let s = {};
        return s.r = Math.round(t.r + (e.r - t.r) * i), s.g = Math.round(t.g + (e.g - t.g) * i), s.b = Math.round(t.b + (e.b - t.b) * i), s
      }
      _updateColors(t, e, i) {
        this.params.currRGB = this._lerpRGB(t, e, i);
        let s = "rgb(".concat(this.params.currRGB.r, ", ").concat(this.params.currRGB.g, ", ").concat(this.params.currRGB.b, ")");
        return this.icon.style.background = s, this.text.style.color = s, s
      }
      static IS_SUPPORTED() {
        let t = document.documentElement;
        return !t.classList.contains("aow") && !t.classList.contains("reduced-motion")
      }
    }
  }, {
    107: 107,
    110: 110,
    155: 155
  }],
  129: [function(t, e, i) {
    "use strict";
    const s = t(12).EventEmitterMicro,
      r = t(131),
      n = t(2);
    e.exports = class extends s {
      constructor(t, e) {
        super(), this.name = t, this.image = new Image, this.width = 0, this.height = 0, this.defaultSettings = new r, this.image.addEventListener("load", () => {
          this.width = this.image.naturalWidth, this.height = this.image.naturalHeight, n.get(e.replace(".png", ".json"), {
            success: (t, e) => {
              this.defaultSettings.set(JSON.parse(t)), this.defaultSettings.brush = this.name
            },
            complete: () => this.trigger("load")
          })
        }), this.image.src = e, this.coloredVariants = {
          "#FFFFFF": this.image
        }
      }
      getColor(t) {
        return this.coloredVariants[t] || (this.coloredVariants[t] = this._tint(t, 1)), this.coloredVariants[t]
      }
      _tint(t, e) {
        let i = document.createElement("canvas");
        i.width = this.image.width, i.height = this.image.height;
        let s = i.getContext("2d");
        return s.fillStyle = t, s.fillRect(0, 0, i.width, i.height), s.globalCompositeOperation = "destination-atop", s.globalAlpha = 1, s.drawImage(this.image, 0, 0), i
      }
    }
  }, {
    12: 12,
    131: 131,
    2: 2
  }],
  130: [function(t, e, i) {
    "use strict";
    const s = t(107),
      r = t(120),
      n = t(111),
      a = t(2),
      o = {
        update: t(30)
      },
      h = t(132),
      l = t(134),
      c = t(136),
      u = t(135),
      d = t(133),
      m = t(137),
      p = t(138);
    e.exports = class extends s {
      constructor(t) {
        super(t), this.retinaScale = 2, this.editor = null, this.canvas = null, this.ctx = null, this.wantsToStartPlayback = !1, this.hasLoaded = !1, this.disabled = !1, this.triggerKeyframe = null, this.breakpointMask = "SMLX", this.breakpoint = t.pageMetrics.breakpoint, "X" === this.breakpoint && (this.breakpoint = "L")
      }
      mounted() {
        if (this.config = {
            data: null,
            trigger: null,
            fallback: "",
            preventAutoplay: !1,
            instant: !1,
            delay: 0
          }, this.el.hasAttribute(u.ConfigAttribute)) {
          if (this.config = n({
              element: this.el,
              attribute: u.ConfigAttribute,
              defaultOptions: this.config
            }), this.config.customBreakpoints && (this.breakpoint = this.getCSSBreakpoint() || this.breakpoint, this.config.breakpointMask || (this.config.breakpointMask = this.config.customBreakpoints)), this.config.breakpointMask || (this.config.breakpointMask = this.breakpointMask), !this.enabledForBreakpoint()) return;
          this.config.preventAutoplay || this.createTriggerKeyframe()
        }
        this.loadBrushes()
      }
      enabledForBreakpoint() {
        if (!(-1 !== this.config.breakpointMask.toUpperCase().indexOf(this.breakpoint))) {
          if (this.config.fallback && "" !== this.config.fallback) {
            let t = this.el.parentElement.querySelector(this.config.fallback);
            t || console.error('CanvasAnnotation error: Attempting to disable dynamic annotation and display fallback image, but could not find fallback image using  provided querySelector "'.concat(this.config.fallbackImage, '"')), t.classList.add(u.DynamicAnnotationShowFallback)
          }
          return !1
        }
        return !0
      }
      disable() {
        this.disabled || (this.disabled = !0, this.canvas && (this.el.removeChild(this.canvas), this.canvas = null, this.ctx = null), this.triggerKeyframe && this.triggerKeyframe.controller.off(this.triggerKeyframe.event + ":enter"))
      }
      loadBrushes() {
        d.once("brushesloaded", () => this.onBrushesLoaded()), d.load()
      }
      onBreakpointChange(t) {
        this.enabledForBreakpoint() && !this.config.customBreakpoints && (this.breakpoint = t.breakpoint, "X" === this.breakpoint && (this.breakpoint = "L"), this.onBrushesLoaded())
      }
      onCustomBreakpointChanged(t) {
        this.enabledForBreakpoint() && (this.breakpoint = t, this.onBrushesLoaded())
      }
      onResizeDebounced(t) {
        this.config.customBreakpoints && (this.breakpoint = this.getCSSBreakpoint() || t.breakpoint, this.breakpoint !== this.previousBP && (this.previousBP = this.breakpoint, this.onCustomBreakpointChanged(this.breakpoint)))
      }
      getCSSBreakpoint() {
        return window.getComputedStyle(this.el).getPropertyValue("--breakpoint").replace(/[\s\"]/g, "")
      }
      onBrushesLoaded() {
        if (this.trigger("brushes-loaded"), !this.config) return;
        let t = u.BasePath + "data/" + this.config.data + ".json";
        a.get(t, {
          success: (t, e) => {
            let i = JSON.parse(t);
            i = this.applyTransforms(i), this.data = this.centerDrawing(i), i.forEach(t => {
              let e = l.getPoints(t.rawPoints);
              t.bezierCurves = l.getCurves(e)
            });
            let s = this.getBoundingBox(i);
            s.width *= .5, s.height *= .5, this.removeCanvas(), this.createCanvas(s), this.triggerKeyframe && o.update(() => {
              this.triggerKeyframe.controller.group.metrics.refreshMetrics(this.el), this.triggerKeyframe.overwriteProps({})
            }), this.hasLoaded = !0, this.tryToStartPlayback()
          }
        })
      }
      applyTransforms(t) {
        return this.getTransformationList().forEach(e => {
          let i = Object.keys(e)[0],
            s = e[i];
          ["transform_" + i] in this && this["transform_" + i](s, t)
        }), t
      }
      transform_translate(t, e) {
        return e.forEach(e => {
          e.rawPoints = e.rawPoints.map(e => (e.x += t[0], e.y += t[1], e))
        })
      }
      transform_scale(t, e) {
        return e.forEach(e => {
          e.rawPoints = e.rawPoints.map(e => (e.x *= t[0], e.y *= t[1], e))
        })
      }
      transform_rotate(t, e) {
        let i = t[0] * Math.PI / 180,
          s = void 0 === t[1] ? t[0] : t[1];
        s *= Math.PI / 180;
        let r = Math.cos(i),
          n = Math.sin(i),
          a = Math.cos(s),
          o = Math.sin(s),
          h = this.getCenter(e);
        return e.forEach(t => {
          t.rawPoints = t.rawPoints.map(t => {
            let e = t.x - h.x,
              i = t.y - h.y,
              s = e * r - i * n,
              l = e * o + i * a;
            return t.x = s + h.x, t.y = l + h.y, t
          })
        })
      }
      getTransformationList() {
        let t = this.config.customBreakpoints || "SML",
          e = t.indexOf(this.breakpoint),
          i = this.config.transforms || [];
        for (let s = e; s < t.length; s++) {
          let e = "transforms_" + t[s].toLowerCase();
          if (this.config[e]) {
            i = this.config[e];
            break
          }
        }
        return i
      }
      createTriggerKeyframe() {
        let t = this.addDiscreteEvent({
            start: this.config.instant ? "t - 150vh" : this.config.trigger,
            end: this.config.instant ? "t + 150vh" : "b",
            disabledWhen: "no-dynamic-annotations",
            event: this.config.data + "-playback"
          }),
          e = this.config.repeats ? "on" : "once";
        t.controller[e](t.event + ":enter", () => {
          this.wantsToStartPlayback = !0, this.tryToStartPlayback()
        }), this.triggerKeyframe = t
      }
      initializeEditorMode(t) {
        this.editor = t;
        let e = this.el.getBoundingClientRect();
        this.createCanvas(e), this.setupOffscreenCanvas(e), this.continuousPlaybackMode()
      }
      createCanvas(t) {
        let e = Math.ceil(t.width),
          i = Math.ceil(t.height);
        this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d", {
          alpha: !0
        }), this.canvas.width = 2 * e, this.canvas.height = 2 * i, this.canvas.style.width = Math.round(e) + "px", this.canvas.style.height = Math.round(i) + "px", this.el.appendChild(this.canvas)
      }
      removeCanvas() {
        let t = this.el.getElementsByTagName("canvas");
        t.length > 0 && this.el.removeChild(t[0])
      }
      getBoundingBox(t) {
        let e = t.map(t => {
          let e = d.get(t.settings.brush),
            i = Math.max(e.width, e.height);
          return c.calculateBoundingBoxOfPoints(t.rawPoints, i)
        });
        return c.calculateBoundingBoxOfRects(e, 10)
      }
      centerDrawing(t) {
        let e = this.getCenter(t);
        return t.forEach(t => {
          t.rawPoints = t.rawPoints.map(t => (t.x -= e.x, t.y -= e.y, t))
        }), t
      }
      getCenter(t) {
        let e = this.getBoundingBox(t);
        return {
          x: (e.x + e.right) / 2,
          y: (e.y + e.bottom) / 2
        }
      }
      setupOffscreenCanvas(t) {
        let e = document.createElement("canvas");
        this.offscreenCtx = e.getContext("2d", {
          alpha: !0
        }), e.width = 2 * t.width, e.height = 2 * t.height, e.style.width = Math.round(t.width) + "px", e.style.height = Math.round(t.height) + "px", this.addRAFLoop({
          start: "-100vh",
          end: "100%",
          event: "CanvasAnnotation-".concat(this.uuid),
          onDraw: this.onDraw.bind(this)
        })
      }
      onDraw() {
        this.editor && this.editor.onDraw(), this.hasOffscreenCanvasUpdate && (this.ctx.setTransform(1, 0, 0, 1, .5 * this.canvas.width, .5 * this.canvas.height), this.ctx.clearRect(-.5 * this.canvas.width, -.5 * this.canvas.height, this.canvas.width, this.canvas.height), this.editor && (this.editor.drawGuide(), this.ctx.setTransform(1, 0, 0, 1, .5 * this.canvas.width, .5 * this.canvas.height)), this.ctx.drawImage(this.offscreenCtx.canvas, -.5 * this.canvas.width, -.5 * this.canvas.height), this.hasOffscreenCanvasUpdate = !1)
      }
      async continuousPlaybackMode() {
        let t = this.editor.serialize(),
          e = JSON.stringify(t);
        if (e === this.lastData) return void requestAnimationFrame(() => this.continuousPlaybackMode());
        this.lastData = e;
        await this.draw({
          ctx: this.offscreenCtx,
          data: t,
          stopCondition: t => t.stampsThisFrame > t.stampsPerFrame && (t.stampsThisFrame = 0, !0)
        }), this.hasOffscreenCanvasUpdate = !0, requestAnimationFrame(() => this.continuousPlaybackMode())
      }
      async tryToStartPlayback() {
        this.hasLoaded && this.wantsToStartPlayback && (this.config.delay && 0 !== this.config.delay && await p(this.config.delay), this.startPlayback())
      }
      resetPlayback() {
        this.startPlayback(!0)
      }
      async startPlayback(t = !1) {
        try {
          let e = this.data || this.editor.serialize();
          e = e.sort((t, e) => t.order < e.order ? -1 : t.order > e.order ? 1 : 0);
          let i = t => t.elapsedTimeThisFrame > t.maxTimePerFrame && (t.elapsedTimeThisFrame -= t.maxTimePerFrame, !0),
            s = this.config.instant ? 1e3 : 15;
          await this.draw({
            ctx: this.ctx,
            maxTimePerFrame: s,
            data: e,
            stopCondition: i,
            reset: !this.config.instant && t
          })
        } catch (t) {}
      }
      async draw(t) {
        let e = t.data;
        this.el.classList.add("is-playing"), t.reset && (e = []);
        let i = {
          ctx: t.ctx,
          brush: null,
          brushWidth: 0,
          brushHeight: 0,
          start: 0,
          end: 0,
          leftOverDistance: 0,
          normalizedSpacing: 0,
          scaleStart: 0,
          scaleEnd: 0,
          segmentTimeStart: 0,
          segmentTimeEnd: 0,
          elapsedTimeThisFrame: 0,
          maxTimePerFrame: t.maxTimePerFrame,
          stampsThisFrame: 0,
          stampsPerFrame: u.StampsPerFrame,
          stopCondition: t.stopCondition
        };
        i.ctx.setTransform(1, 0, 0, 1, .5 * this.canvas.width, .5 * this.canvas.height), i.ctx.clearRect(-.5 * this.canvas.width, -.5 * this.canvas.height, this.canvas.width, this.canvas.height), i.ctx.globalCompositeOperation = "source-over";
        let s = this.config.strokeScale && this.config.strokeScale[this.breakpoint] ? this.config.strokeScale[this.breakpoint] : null;
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          if (null === n.bezierCurves || 0 === n.bezierCurves.length) continue;
          i.brush = d.get(n.settings.brush).getColor(n.settings.color), i.brushWidth = d.get(n.settings.brush).width, i.brushHeight = d.get(n.settings.brush).height, i.normalizedSpacing = n.settings.spacing, i.rotationSpeed = n.settings.rotationSpeed, i.rotateRandomly = n.settings.rotateRandomly, i.currentRotation = n.settings.initialRotation, i.ctx.globalAlpha = n.settings.opacity, i.ctx.globalCompositeOperation = n.settings.blendMode;
          const a = u.CatmullRomSamples;
          let o = n.bezierCurves[0],
            l = o.points[0],
            c = s || n.settings.scale,
            p = o.meta.timeStamp;
          for (let t = 1, e = n.bezierCurves.length; t < e; t++) {
            let e = n.bezierCurves[t - 1],
              o = e.points[e.points.length - 1];
            for (let u = 1; u <= a; u++) {
              let d = u / a,
                m = n.bezierCurves[t],
                f = e.meta.force * (1 - d) + m.meta.force * d,
                g = n.settings.scale * n.settings.taper.size * f * .95,
                _ = (s || n.settings.scale) + g,
                y = h.computeT_fromPoints(o.x, o.y, m.points[0].x, m.points[0].y, m.points[1].x, m.points[1].y, m.points[2].x, m.points[2].y, d);
              i.start = l, i.end = y, i.scaleStart = c, i.scaleEnd = _, i.segmentTimeStart = p, i.segmentTimeEnd = r.lerp(d, e.meta.timeStamp, m.meta.timeStamp);
              let b = await this.lineTo(i);
              i.leftOverDistance = b.distanceLeft, l = y, c = _, p = i.segmentTimeEnd
            }
          }
          await m()
        }
        if (!t.reset) {
          let t = new Event("annotation-complete", {
            bubbles: !0
          });
          this.el.dispatchEvent(t)
        }
        this.el.classList.remove("is-playing"), i.ctx.globalAlpha = 1, i.ctx.globalCompositeOperation = "source-over"
      }
      async lineTo(t) {
        let {
          ctx: e,
          brush: i,
          brushWidth: s,
          brushHeight: n,
          start: a,
          end: o,
          leftOverDistance: h,
          normalizedSpacing: l,
          scaleStart: c,
          scaleEnd: u,
          segmentTimeStart: d,
          segmentTimeEnd: p
        } = t, f = t.rotateRandomly ? (a.x + a.y + o.x + o.y + d) * p * 1e3 : Math.atan2(a.y - o.y, a.x - o.x), g = f;
        1 !== t.rotationSpeed && (g = r.lerp(t.rotationSpeed, t.currentRotation, f));
        let _ = s * l,
          y = a,
          b = o,
          v = b.x - y.x,
          E = b.y - y.y,
          w = Math.sqrt(v * v + E * E),
          x = 0,
          T = 0;
        if (w > 0) {
          let t = 1 / w;
          x = v * t, T = E * t
        }
        let A = 0,
          S = 0,
          P = h + w,
          C = Math.round(P / _),
          O = 0,
          R = (p - d) / C,
          I = 0,
          F = 0,
          k = d;
        for (; P >= _;) {
          let o = I / C;
          o > 1 && (o = 1);
          let l = f;
          1 !== t.rotationSpeed && (l = r.lerp(o, t.currentRotation, g)), F = r.lerp(o, c, u), h > 0 ? (A += x * (_ - h), S += T * (_ - h), h -= _) : (A += x * _, S += T * _);
          let d = y.x + A,
            p = y.y + S;
          t.rotateRandomly && (k += a.x, l = k, t.rotateRandomly && (d += k % 1 * F * 2, p += k % 1 * F * 2));
          let b = d,
            v = p;
          e.translate(b, v), e.rotate(l), e.drawImage(i, .5 * -s * F, .5 * -n * F, s * F, n * F), e.rotate(-l), e.translate(-b, -v), P -= _, O += _, t.stampsThisFrame++, t.elapsedTimeThisFrame += R, I++, void 0 !== t.stopCondition && t.stopCondition(t) && await m(1)
        }
        return t.currentRotation = g, {
          distanceLeft: P,
          distanceTraveled: O
        }
      }
      static IS_SUPPORTED() {
        return document.documentElement.classList.contains("dynamic-annotations")
      }
    }
  }, {
    107: 107,
    111: 111,
    120: 120,
    132: 132,
    133: 133,
    134: 134,
    135: 135,
    136: 136,
    137: 137,
    138: 138,
    2: 2,
    30: 30
  }],
  131: [function(t, e, i) {
    "use strict";
    e.exports = class {
      constructor(t) {
        this.brush = "GelPen-10", this.spacing = .05, this.initialRotation = 0, this.rotationSpeed = .25, this.rotateRandomly = !1, this.opacity = 1, this.scale = 1, this.color = "#000000", this.taper = {
          size: 0,
          opacity: .5
        }, this.blendMode = "normal"
      }
      set(t) {
        this.brush = void 0 === t.brush ? this.brush : t.brush, this.opacity = void 0 === t.opacity ? this.opacity : t.opacity, this.initialRotation = void 0 === t.initialRotation ? this.initialRotation : t.initialRotation, this.rotationSpeed = void 0 === t.rotationSpeed ? this.rotationSpeed : t.rotationSpeed, this.rotateRandomly = void 0 === t.rotateRandomly ? this.rotateRandomly : t.rotateRandomly, this.blendMode = void 0 === t.blendMode ? this.blendMode : t.blendMode, this.spacing = void 0 === t.spacing ? this.spacing : t.spacing, this.scale = void 0 === t.scale ? this.scale : t.scale, this.color = void 0 === t.color ? this.color : t.color, this.taper.opacity = t.taper && void 0 !== t.taper.opacity ? t.taper.opacity : this.taper.opacity, this.taper.size = t.taper && void 0 !== t.taper.size ? t.taper.size : this.taper.size
      }
      serialize() {
        return {
          brush: this.brush,
          opacity: this.opacity,
          initialRotation: this.initialRotation,
          rotationSpeed: this.rotationSpeed,
          rotateRandomly: this.rotateRandomly,
          blendMode: this.blendMode,
          spacing: this.spacing,
          color: this.color,
          scale: this.scale,
          taper: this.taper
        }
      }
    }
  }, {}],
  132: [function(t, e, i) {
    "use strict";
    e.exports = {
      computeT_fromPoints: (t, e, i, s, r, n, a, o, h) => ({
        x: (1 - h) * (1 - h) * (1 - h) * t + 3 * (1 - h) * (1 - h) * h * i + 3 * (1 - h) * h * h * r + h * h * h * a,
        y: (1 - h) * (1 - h) * (1 - h) * e + 3 * (1 - h) * (1 - h) * h * s + 3 * (1 - h) * h * h * n + h * h * h * o
      })
    }
  }, {}],
  133: [function(t, e, i) {
    "use strict";
    const s = t(12).EventEmitterMicro,
      r = t(129),
      n = t(135);
    e.exports = new class extends s {
      constructor() {
        super(), this.hasLoaded = !1, this.sources = ["BrokenBrush-32", "BrokenBrush-64", "color-pencil-16", "GelPen-6", "GelPen-10", "GelPen-15", "GelPen-12", "GelPen-20", "Highlighter-16", "Highlighter-32", "Highlighter-64", "Highlighter-96", "Highlighter-128"], this.brushCount = this.sources.length, this.brushes = {}
      }
      load() {
        requestAnimationFrame(() => {
          this.sources.forEach(t => {
            let e = t.split(".")[0],
              i = n.BasePath + "brushes/" + t + ".png",
              s = new r(e, i);
            s.on("load", () => {
              this.brushes[e] = s, Object.keys(this.brushes).length === this.brushCount && this.onBrushesLoaded()
            })
          }), this.sources = []
        })
      }
      onBrushesLoaded() {
        this.trigger("brushesloaded")
      }
      get(t) {
        return this.brushes[t]
      }
    }
  }, {
    12: 12,
    129: 129,
    135: 135
  }],
  134: [function(t, e, i) {
    "use strict";
    e.exports = {
      getPoints: function(t) {
        const e = t.length;
        if (e < 3) return [{
          points: t,
          meta: t[0]
        }];
        let i = t[0],
          s = t[0],
          r = t[1],
          n = t[2],
          a = [{
            points: [t[0]],
            meta: s
          }];
        for (let o = 1; o < e; o++) {
          let e = [{
            x: (-i.x + 6 * s.x + r.x) / 6,
            y: (-i.y + 6 * s.y + r.y) / 6
          }, {
            x: (s.x + 6 * r.x - n.x) / 6,
            y: (s.y + 6 * r.y - n.y) / 6
          }, {
            x: r.x,
            y: r.y
          }];
          a.push({
            points: e,
            meta: r
          }), i = s, s = r, r = n, n = t[o + 2] || n
        }
        return a
      },
      getCurves: function(t) {
        let e = [];
        if (1 === t.length) return e;
        for (let i = 0, s = t.length; i < s; i++) {
          const s = t[i],
            r = s.points,
            n = r.length;
          let a = {
            meta: s.meta,
            points: []
          };
          0 === i ? a.points.push({
            x: r[0].x,
            y: r[0].y
          }) : n > 2 ? (a.points.push({
            x: r[0].x,
            y: r[0].y
          }), a.points.push({
            x: r[1].x,
            y: r[1].y
          }), a.points.push({
            x: r[2].x,
            y: r[2].y
          })) : (a.points.push({
            x: r[0].x,
            y: r[0].y
          }), a.points.push({
            x: r[1].x,
            y: r[1].y
          })), e.push(a)
        }
        return e
      }
    }
  }, {}],
  135: [function(t, e, i) {
    "use strict";
    e.exports = {
      CatmullRomSamples: 15,
      ConfigAttribute: "data-annotation-config",
      DynamicAnnotationShowFallback: "dynamic-annotation-hidden",
      StampsPerFrame: 100,
      BasePath: "scribbles/"
    }
  }, {}],
  136: [function(t, e, i) {
    "use strict";
    class s {
      constructor() {
        this.x = 0, this.y = 0, this.width = 0, this.height = 0
      }
      get left() {
        return this.x
      }
      get right() {
        return this.x + this.width
      }
      get top() {
        return this.y
      }
      get bottom() {
        return this.y + this.height
      }
      static fromRect(t) {
        let e = new s;
        return e.x = t.x, e.y = t.y, e.width = t.width, e.height = t.height, e
      }
      static containsPoint(t, e) {
        return t.x >= e.x && t.x <= e.x + e.width && t.y >= e.y && t.y <= e.y + e.height
      }
      static calculateBoundingBoxOfPoints(t, e) {
        if (t.length < 2) return s.fromRect({
          x: 0,
          y: 0,
          width: 1,
          height: 1
        });
        let i = 1e4,
          r = -1e4,
          n = 1e4,
          a = -1e4;
        return t.forEach(t => {
          t.x < i && (i = t.x), t.x > r && (r = t.x), t.y < n && (n = t.y), t.y > a && (a = t.y)
        }), s.fromRect({
          x: i - .5 * e,
          y: n - .5 * e,
          width: r - i + e,
          height: a - n + e
        })
      }
      static calculateBoundingBoxOfRects(t, e) {
        let i = 1e4,
          r = -1e4,
          n = 1e4,
          a = -1e4;
        return t.forEach(t => {
          t.x < i && (i = t.x), t.x + t.width > r && (r = t.x + t.width), t.y < n && (n = t.y), t.y + t.height > a && (a = t.y + t.height)
        }), s.fromRect({
          x: i - .5 * e,
          y: n - .5 * e,
          width: r - i + e,
          height: a - n + e
        })
      }
    }
    e.exports = s
  }, {}],
  137: [function(t, e, i) {
    "use strict";
    e.exports = async () => new Promise(t => {
      requestAnimationFrame(t)
    })
  }, {}],
  138: [function(t, e, i) {
    "use strict";
    e.exports = async t => new Promise(e => setTimeout(() => e(), 1e3 * t))
  }, {}],
  139: [function(t, e, i) {
    "use strict";
    var s = t(110),
      r = t(155);
    const n = t(107);
    e.exports = class extends n {
      constructor(t) {
        super(t), this.cancelAnimationRequest = null, this.gridItemClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.animationDuration = 1.4, this.timeGroup = this.anim.createTimeGroup(), this.scrollGroup = this.anim.getGroupForTarget(this.el), this.svgContainer = this.el.querySelector(".charging-station-pins"), this.svg = this.svgContainer.querySelector("svg"), this.line = this.svg.querySelector("#line path"), this.pins = {
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
        let t = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.play),
          e = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.reset);
        t.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), e.controller.on("reset:exit", () => {
          this._resetTileAnimation()
        })
      }
      _setupTimelineKeyframes() {
        this._addLineKeyframes();
        for (let t in this.pins) {
          let e = this.pins[t].el.getBBox(),
            i = e.x + .5 * e.width,
            s = e.y + (t.indexOf("startPin") > -1 ? .5 * e.height : e.height);
          this.pins[t].el.style.transformOrigin = "".concat(this._round(i, 2), "px ").concat(this._round(s, 2), "px"), this._addPinsKeyframes(t, this.pins[t])
        }
      }
      _playTileAnimation() {
        let t = s.director.requestAnimationStart({
          element: this.el,
          duration: this.animationDuration
        });
        t.then(() => {
          this.timeGroup.play()
        }), this.cancelAnimationRequest = t.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.timeGroup.restart(), this.timeGroup.pause()
      }
      _addLineKeyframes() {
        const t = this.line.getTotalLength() + 1,
          e = this.timeGroup.addKeyframe(this.line, {
            start: .55,
            end: 1.46,
            easeFunction: "cubic-bezier(.66, 0, .01, 1)",
            strokeDashoffset: [t, 0]
          });
        this.line.style.strokeDasharray = t, this.line.style.strokeDashoffset = t, e.controller.on("draw", t => {
          this.line.style.strokeDashoffset = t.tweenProps.strokeDashoffset.current
        })
      }
      _addPinsKeyframes(t, e) {
        "pin0" === t ? (this.timeGroup.addKeyframe(e.el, {
          start: e.s,
          end: e.s + e.d,
          scale: [0, .5],
          easeFunction: e.e
        }), this.timeGroup.addKeyframe(e.el, {
          start: e.s + 2 * e.d,
          end: e.s + 3 * e.d,
          scale: [.5, 1],
          easeFunction: e.e
        })) : this.timeGroup.addKeyframe(e.el, {
          start: e.s,
          end: e.s + e.d,
          scale: [0, 1],
          easeFunction: e.e
        })
      }
      _round(t, e) {
        return Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
      }
      static IS_SUPPORTED() {
        let t = document.documentElement;
        return !t.classList.contains("aow") && !t.classList.contains("reduced-motion")
      }
    }
  }, {
    107: 107,
    110: 110,
    155: 155
  }],
  140: [function(t, e, i) {
    "use strict";
    var s = t(110),
      r = t(155);
    const n = t(107);
    e.exports = class extends n {
      constructor(t) {
        super(t), this.cancelAnimationRequest = null, this.gridItemClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.animationDuration = 1, this.timeGroup = this.anim.createTimeGroup(), this.timeGroup.name = "Circle Handler", this.scrollGroup = this.anim.getGroupForTarget(this.el), this.highlight = this.el.querySelector(".highlight"), this.circle = this.el.querySelector(".annotation-circle")
      }
      mounted() {
        this._setupEvents(), this._setupTimelineKeyframes(), this._addEventListeners()
      }
      _setupEvents() {
        this.annotation = this.gum.getComponentOfType("CanvasAnnotation", this.el);
        let t = this.anim.addKeyframe(this.el, r.scribbleTileTriggerKeyframeOptions.play),
          e = this.anim.addKeyframe(this.el, r.scribbleTileTriggerKeyframeOptions.reset);
        t.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), e.controller.on("reset:exit", () => {
          this._resetTileAnimation()
        })
      }
      _setupTimelineKeyframes() {
        this.timeGroup.addKeyframe(this.circle, {
          start: .5,
          end: .6,
          scale: [null, .95],
          toggle: !0
        }), this.timeGroup.addKeyframe(this.circle, {
          start: .6,
          end: .7,
          opacity: [null, 0]
        }), this.timeGroup.addKeyframe(this.highlight, {
          start: .7,
          cssClass: "highlighted",
          toggle: !0
        })
      }
      _playTileAnimation() {
        let t = s.director.requestAnimationStart({
          element: this.el,
          duration: this.animationDuration
        });
        t.then(() => {
          this.annotation.el.classList.contains("is-playing") || this.highlight.classList.contains("highlighted") || this.annotation.startPlayback()
        }), this.cancelAnimationRequest = t.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.timeGroup.restart(), this.timeGroup.pause(), this.annotation.resetPlayback()
      }
      _addEventListeners() {
        this.annotation.el.addEventListener("annotation-complete", () => {
          this.timeGroup.play(0)
        })
      }
      static IS_SUPPORTED() {
        return document.documentElement.classList.contains("dynamic-annotations")
      }
    }
  }, {
    107: 107,
    110: 110,
    155: 155
  }],
  141: [function(t, e, i) {
    "use strict";
    var s = t(14),
      r = t(110),
      n = t(155),
      a = s(t(87));
    const o = t(107),
      h = t(148),
      l = {
        viewport: "large"
      };
    e.exports = class extends o {
      constructor(t) {
        super(t), this.cancelAnimationRequest = null, this.gridItemClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.animationDuration = 4.5, this.timeGroup = this.anim.createTimeGroup(), this.timeGroup.name = "City-Level Location", this.scrollGroup = this.anim.getGroupForTarget(this.el), this.videoContainer = this.el.querySelector(".inline-video-media"), this.tileContainer = this.el.querySelector(".grid-item-content"), this.pinRipple = this.el.querySelector(".pin-ripple"), this.pinWhiteBorder = this.el.querySelector(".pin-border"), this.mapRipple = this.el.querySelector(".city-map-ripple"), this.pin = this.el.querySelector(".pin"), this.pinMask = this.el.querySelector(".map-mask"), this.rippleBorder = 12, this.cubicBezier = "cubic-bezier(.66,0,.01,1)", this.maxWidth = "366px - ".concat(2 * this.rippleBorder, "px"), this.scaledWidth = "(a0w - (css(--tile-header-padding) *2) - ".concat(2 * this.rippleBorder, "px)"), this.roundedWidth = "2 * floor(".concat(this.scaledWidth, " / 2)"), this.Expression = "min(".concat(this.maxWidth, ", ").concat(this.roundedWidth, ")"), this.inlineVideoContainer = this.el.querySelector(".inline-video"), this.inlineVideo = new h(this.inlineVideoContainer, l), this.inlineVideo.restartVideoOnBreakPoint = !1
      }
      mounted() {
        this._addFallbackListeners(), this._loadInlineVideo(), this._setWidths(), this._setupEvents(), this._setupTimelineKeyframes()
      }
      _addFallbackListeners() {
        addEventListener("gestureend", t => {
          t.scale > 1 && this._setStaticFallback()
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
        }), this.anim.getControllerForTarget(this.el).on("load-inline-video:enter", t => {
          this.inlineVideo.load()
        })
      }
      _setWidths() {
        let t = a.default.parse("".concat(this.Expression), {
          target: this.el,
          anchors: [this.el]
        });
        this.el.style.setProperty("--maxDimensions", "".concat(t, "px"))
      }
      _setupEvents() {
        let t = this.anim.addKeyframe(this.el, n.tileTriggerKeyframeOptions.play),
          e = this.anim.addKeyframe(this.el, n.tileTriggerKeyframeOptions.reset);
        t.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), e.controller.on("reset:exit", () => {
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
        }), [this.pin, this.pinMask].map(t => {
          this.timeGroup.addKeyframe(t, {
            scale: [0, "22px / ".concat(this.Expression)],
            x: ["-1px * ".concat(this.Expression, " / 2"), "-1px * ".concat(this.Expression, " / 2")],
            y: ["-1px * ".concat(this.Expression, " / 2"), "-1px * ".concat(this.Expression, " / 2")],
            easeFunction: this.cubicBezier,
            anchors: [this.el],
            start: .33,
            end: 1
          }), this.timeGroup.addKeyframe(t, {
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
        }), this.mapRippleBorder.controller.on("draw", t => {
          let e = t.tweenProps.rippleBorder.current;
          this.el.style.setProperty("--mapRippleBorder", "".concat(e, "px"))
        }), this.timeGroup.addKeyframe(this.el, {
          rgbAlpha: [1, 0],
          easeFunction: "linear",
          start: 1.5,
          end: 3.5
        }).controller.on("draw", t => {
          let e = t.tweenProps.rgbAlpha.current;
          this.el.style.setProperty("--pinOpacity", e)
        }), this.timeGroup.addKeyframe(this.el, {
          start: 1.5,
          event: "playVideo"
        }).controller.on("playVideo", t => {
          this.inlineVideo.play()
        })
      }
      _playTileAnimation() {
        let t = r.director.requestAnimationStart({
          element: this.el,
          duration: this.animationDuration
        });
        t.then(() => {
          this.timeGroup.play()
        }), this.cancelAnimationRequest = t.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.timeGroup.restart(), this.timeGroup.pause(), this.inlineVideo.reset()
      }
      onResizeDebounced(t) {
        this._setWidths()
      }
      onBreakpointChange(t) {
        this._setStaticFallback()
      }
      static IS_SUPPORTED() {
        let t = document.documentElement;
        return !t.classList.contains("edge") && (!t.classList.contains("aow") && !t.classList.contains("reduced-motion"))
      }
    }
  }, {
    107: 107,
    110: 110,
    14: 14,
    148: 148,
    155: 155,
    87: 87
  }],
  142: [function(t, e, i) {
    "use strict";
    const s = t(107);
    class r extends s {
      constructor(t) {
        super(t)
      }
      mounted() {
        const t = document.querySelector(".notification");
        r.IS_SUPPORTED() && (t.style.transform = "translate3d(0px, -100px, 0px)"), this.anim.addKeyframe(this.el, {
          start: "a0t - 110vh",
          end: "a0b + 10vh",
          event: "reset-animation",
          anchors: [".animated-device"]
        }).controller.on("reset-animation:exit", () => {
          this.el.classList.remove("show")
        });
        let e = this.anim.addKeyframe(this.el, {
            start: "a0t + 85h - 95vh",
            event: "play-animation",
            anchors: [".animated-device"]
          }),
          i = this.anim.addKeyframe(this.el, {
            start: "a0t - 10h",
            event: "play-animation",
            anchors: [".animated-device"]
          });
        e.controller.on("play-animation", () => {
          this.el.classList.add("show")
        }), i.controller.on("play-animation:reverse", () => {
          this.el.classList.add("show")
        })
      }
      static IS_SUPPORTED() {
        let t = document.documentElement;
        return !t.classList.contains("aow") && !t.classList.contains("reduced-motion")
      }
    }
    e.exports = r
  }, {
    107: 107
  }],
  143: [function(t, e, i) {
    "use strict";
    const s = t(107),
      r = t(111);
    e.exports = class extends s {
      constructor(t) {
        super(t), this.breakpoint = t.pageMetrics.breakpoint
      }
      mounted() {
        this.config = r({
          element: this.el,
          attribute: "data-fixed-width-config"
        }), this.resize(this.getCSSBreakpoint() || this.breakpoint)
      }
      resize(t) {
        let e = this.config[t] || null;
        this.el.style.maxWidth = e || ""
      }
      getCSSBreakpoint() {
        return window.getComputedStyle(this.el).getPropertyValue("--breakpoint").replace(/[\s"]/g, "")
      }
      onResizeDebounced(t) {
        this.breakpoint = this.getCSSBreakpoint() || t.breakpoint, this.breakpoint !== this.previousBP && (this.previousBP = this.breakpoint, this.resize(this.breakpoint))
      }
      static IS_SUPPORTED() {
        return !0
      }
    }
  }, {
    107: 107,
    111: 111
  }],
  144: [function(t, e, i) {
    "use strict";
    var s = t(110),
      r = t(155);
    const n = t(107);
    e.exports = class extends n {
      constructor(t) {
        super(t), this.cancelAnimationRequest = null, this.gridItemClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.animationDuration = 1.5, this.timeGroup = this.anim.createTimeGroup(), this.timeGroup.name = "Handwriting Handler", this.scrollGroup = this.anim.getGroupForTarget(this.el), this.convert = this.el.querySelector(".convert"), this.input = this.el.querySelector(".annotation-input"), this.convert.classList.add("typography-blockquote-copy"), this.convert.setAttribute("aria-hidden", !0), this.input.appendChild(this.convert)
      }
      mounted() {
        this._setupEvents(), this._setupTimelineKeyframes(), this._addEventListeners()
      }
      _setupEvents() {
        this.annotation = this.gum.getComponentOfType("CanvasAnnotation", this.el);
        let t = this.anim.addKeyframe(this.el, r.scribbleTileTriggerKeyframeOptions.play),
          e = this.anim.addKeyframe(this.el, r.scribbleTileTriggerKeyframeOptions.reset);
        t.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), e.controller.on("reset:exit", () => {
          this._resetTileAnimation()
        })
      }
      _setupTimelineKeyframes() {
        this.timeGroup.addKeyframe(this.el, {
          start: .6,
          cssClass: "converted",
          toggle: !0
        })
      }
      _playTileAnimation() {
        let t = s.director.requestAnimationStart({
          element: this.el,
          duration: this.animationDuration
        });
        t.then(() => {
          this.annotation.el.classList.contains("is-playing") || this.el.classList.contains("converted") || this.annotation.startPlayback()
        }), this.cancelAnimationRequest = t.cancel
      }
      _resetTileAnimation() {
        this.timeGroup.restart(), this.timeGroup.pause(), this.annotation.resetPlayback()
      }
      _addEventListeners() {
        this.annotation.el.addEventListener("annotation-complete", () => {
          this.timeGroup.play(0)
        })
      }
      static IS_SUPPORTED() {
        return document.documentElement.classList.contains("dynamic-annotations")
      }
    }
  }, {
    107: 107,
    110: 110,
    155: 155
  }],
  145: [function(t, e, i) {
    "use strict";
    const s = t(107),
      r = t(67),
      n = t(19);
    e.exports = class extends s {
      constructor(t) {
        super(t), this.options = t, this.heroLogoContainer = this.el.querySelector(".hero-logo-container"), this.heroLogo = this.el.querySelector(".hero-logo"), this.heroDeviceGrid = this.el.querySelector(".hero-device-grid"), this.devicesOuter = this.el.querySelectorAll(".hero-grid-item-outer"), this.deviceElements = [this.el.querySelector(".hero-hardware-1"), this.el.querySelector(".hero-hardware-2"), this.el.querySelector(".hero-hardware-2"), this.el.querySelector(".hero-hardware-3"), this.el.querySelector(".hero-hardware-4"), this.el.querySelector(".hero-hardware-5"), this.el.querySelector(".hero-hardware-6"), this.el.querySelector(".hero-hardware-7"), this.el.querySelector(".hero-hardware-8"), this.el.querySelector(".hero-hardware-9"), this.el.querySelector(".hero-hardware-10")], this.outerDeviceElements = [this.el.querySelector(".hero-hardware-topleft"), this.el.querySelector(".hero-hardware-topright"), this.el.querySelector(".hero-hardware-middleleft"), this.el.querySelector(".hero-hardware-middleright"), this.el.querySelector(".hero-hardware-bottomleft"), this.el.querySelector(".hero-hardware-bottomright")], this.deviceTopRowSmallElements = [this.el.querySelector(".hero-hardware-toprow-small-1"), this.el.querySelector(".hero-hardware-toprow-small-2"), this.el.querySelector(".hero-hardware-toprow-small-3")], this.startDelay = 0, this.cubicBezier = "easeOutQuint", this.easingCopy = "cubic-bezier(0, 1, 1, 1)", this.introContainer = this.el.querySelector(".hero-intro-container"), this.introEyebrow = this.el.querySelector(".intro-eyebrow"), this.introHeadline = this.el.querySelector(".intro-headline"), this.introCopy = this.el.querySelector(".intro-copy"), this.introCta = this.el.querySelector(".intro-cta") || null, this.copyElements = [this.introEyebrow, this.introHeadline, this.introCopy, this.introCta], this.copyAnimStart = .1, this.copyAnimIncrement = .2, this.copyAnimEnd = this.copyAnimStart + this.copyElements.length * this.copyAnimIncrement
      }
      mounted() {
        this.isOuterDevicesVisible = "block" === window.getComputedStyle(this.devicesOuter[0]).display, this.isInitialViewportSmall = "S" === this.pageMetrics.breakpoint, this._initializeTransitionToGrid(), this._initializeScrollTransition(), this._initializeCopyAnimation(), this._loadImages()
      }
      _loadImages() {
        this._setImagesQueue(), this.heroImgLoader = new n({
          container: this.el
        }), this.heroImgLoader.on("complete", () => {
          this._imagesLoadComplete()
        }), this.heroImgLoader.load({
          imageAnimate: !1
        })
      }
      _setImagesQueue() {
        this.isOuterDevicesVisible || this.outerDeviceElements.forEach(t => {
          t.querySelector(".hardware").removeAttribute("data-progressive-image"), t.querySelector(".screen").removeAttribute("data-progressive-image")
        }), this.isInitialViewportSmall || this.deviceTopRowSmallElements.forEach(t => {
          t.querySelector(".hardware").removeAttribute("data-progressive-image"), t.querySelector(".screen").removeAttribute("data-progressive-image")
        })
      }
      _imagesLoadComplete() {
        this.introTimeline.play()
      }
      _initializeTransitionToGrid() {
        this.introTimeline = r.createTimeGroup(), this.introTimeline.name = "Hero Intro", this.introTimeline.addKeyframe(this.heroLogo, {
          start: 0 + this.startDelay,
          end: 1.2 + this.startDelay,
          scale: ["css(--hero-logo-scale-start)", 1],
          easeFunction: this.cubicBezier
        }), this.deviceGridStart = .1 + this.startDelay, this.deviceGridEnd = 1.3 + this.startDelay, this.introTimeline.addKeyframe(this.heroDeviceGrid, {
          start: this.deviceGridStart,
          end: .2,
          opacity: [0, 1],
          easeFunction: "linear"
        }), this.isOuterDevicesVisible && (this.deviceElements = this.deviceElements.concat(this.outerDeviceElements)), this.isInitialViewportSmall && (this.deviceElements = this.deviceElements.concat(this.deviceTopRowSmallElements)), this.deviceElements.forEach(t => {
          this.introTimeline.addKeyframe(t, {
            start: this.deviceGridStart,
            end: this.deviceGridEnd,
            x: ["css(--device-x)", "0px"],
            y: ["css(--device-y)", "0px"],
            scale: ["css(--hero-device-scale-start)", 1],
            easeFunction: this.cubicBezier
          })
        })
      }
      _initializeScrollTransition() {
        this.scrollGroup = r.createScrollGroup(this.el), this.scrollGroup.group = "Hero Transition Out", this.scrollGroup.addKeyframe(this.heroLogoContainer, {
          start: "a0t",
          end: "a0t + 100vh",
          y: ["0px", "25px"],
          easeFunction: this.easingCopy,
          anchors: [this.el]
        })
      }
      _initializeCopyAnimation() {
        this.addDiscreteEvent({
          start: "a0t - 90vh",
          onEvent: () => {
            this.copyTimeline.play()
          },
          onEventReverse: () => {
            this.copyTimeline.reverse()
          },
          breakpointMask: "MLX",
          anchors: [this.introContainer]
        }), this.addDiscreteEvent({
          start: "a0t - 80vh",
          onEvent: () => {
            this.copyTimeline.play()
          },
          onEventReverse: () => {
            this.copyTimeline.reverse()
          },
          breakpointMask: "S",
          anchors: [this.introContainer]
        }), this.copyTimeline = r.createTimeGroup(), this.copyTimeline.name = "Hero Copy", this.copyElements.forEach((t, e) => {
          null !== t && this.copyTimeline.addKeyframe(t, {
            start: this.copyAnimStart + this.copyAnimIncrement * e,
            end: this.copyAnimEnd,
            opacity: [0, 1],
            y: ["100px", 0],
            easeFunction: this.easingCopy
          })
        })
      }
      static IS_SUPPORTED() {
        return document.documentElement.classList.contains("hero-enhanced")
      }
    }
  }, {
    107: 107,
    19: 19,
    67: 67
  }],
  146: [function(t, e, i) {
    "use strict";
    var s = t(14)(t(107));
    class r extends s.default {
      constructor(t) {
        super(t), this.triggers = this.el.querySelectorAll(".modal-toggle"), this.labels = this.el.querySelectorAll(".modal-cta"), this.btns = this.el.querySelectorAll(".modal-cta-text")
      }
      mounted() {
        this.triggers.forEach((t, e) => {
          let i = t.getAttribute("data-analytics-click"),
            s = t.nextElementSibling.querySelector(".modal-content");
          t.addEventListener("change", r => {
            t.checked ? (this.btns[e].setAttribute("aria-expanded", !0), t.parentElement.classList.add("expanded"), t.removeAttribute("data-analytics-click"), s.setAttribute("aria-hidden", !1)) : (this.btns[e].setAttribute("aria-expanded", !1), t.parentElement.classList.remove("expanded"), t.setAttribute("data-analytics-click", i), s.setAttribute("aria-hidden", !0))
          }), this.labels[e].addEventListener("keypress", e => {
            13 !== e.keyCode && 32 !== e.keyCode || (e.preventDefault(), t.checked = !t.checked, t.dispatchEvent(new Event("change")))
          })
        })
      }
      static IS_SUPPORTED() {
        return !0
      }
    }
    e.exports = r
  }, {
    107: 107,
    14: 14
  }],
  147: [function(t, e, i) {
    "use strict";
    var s = t(110),
      r = t(155);
    const n = t(107),
      a = t(148);
    e.exports = class extends n {
      constructor(t) {
        super(t), this.cancelAnimationRequest = null, this.gridItemClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.animationDuration = 5, this.timeGroup = this.anim.createTimeGroup(), this.scrollGroup = this.anim.getGroupForTarget(this.el), this.inlineVideoContainer = this.el.querySelector(".inline-video"), this.inlineVideo = new a(this.inlineVideoContainer), this.prefersReducedMotion = document.documentElement.classList.contains("reduced-motion")
      }
      mounted() {
        this._loadInlineVideo(), this.prefersReducedMotion || (this._setupEvents(), this._setupTimelineKeyframes())
      }
      _setupEvents() {
        let t = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.play),
          e = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.reset);
        t.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), e.controller.on("reset:exit", () => {
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
        let t = s.director.requestAnimationStart({
          element: this.el,
          duration: this.animationDuration
        });
        t.then(() => {
          this.inlineVideo.play()
        }), this.cancelAnimationRequest = t.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.inlineVideo.reset()
      }
      _loadInlineVideo() {
        !this.inlineVideo.video.controls.arePresent && this.prefersReducedMotion || (this.scrollGroup.addKeyframe(this.el, {
          start: "t - 200vh",
          end: "b + 200vh",
          event: "load-inline-video"
        }), this.anim.getControllerForTarget(this.el).on("load-inline-video:enter", t => {
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
    107: 107,
    110: 110,
    148: 148,
    155: 155
  }],
  148: [function(t, e, i) {
    "use strict";
    const s = t(121),
      r = t(117),
      n = t(67),
      a = new s;
    let o = "X" === a.viewport || "L" === a.viewport ? "L" : a.viewport;
    const h = {
      path: "/ipados/ipados-14/2020/bf6605be-c470-483f-8acd-015e1ba2a638/",
      viewport: r.convertViewportName(o),
      resolution: r.convertToResolution(a.retina)
    };
    e.exports = class {
      constructor(t, e) {
        this.overrides = e, this.video = this._initInlineVideo(t), this.restartVideoOnBreakPoint = !0, a.on("change:viewport", () => {
          o = "X" === a.viewport || "L" === a.viewport ? "L" : a.viewport, this._onBreakpointChange()
        }), a.on("change:retina", () => {
          this._onBreakpointChange()
        })
      }
      _initInlineVideo(t) {
        let e, i = h;
        return this.overrides && (i = Object.assign({}, h, this.overrides)), e = new r(t, i), e.initialize(), e.controls.arePresent && this._setupControls(e), e
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
      _setupControls(t) {
        let e, i, s, r = t._container.querySelector(".focus-item"),
          a = t._container.querySelector(".control-button"),
          o = t._container.querySelector(".control-button .visuallyhidden span"),
          h = t.controls._container;

        function l() {
          c(), s = setTimeout(() => {
            o.innerText = h.querySelector("button:not([disabled])").innerText
          }, 250), document.activeElement !== a && document.activeElement !== r || (e = setTimeout(() => {
            h.querySelector("button:not([disabled])").focus()
          }, 300), i = setTimeout(() => {
            a.focus()
          }, 350))
        }

        function c() {
          clearTimeout(e), clearTimeout(i), clearTimeout(s)
        }
        t.controls.allElements.forEach(t => {
          t.setAttribute("tabindex", "-1"), t.setAttribute("aria-hidden", "true"), t.addEventListener("click", () => {
            setTimeout(() => {
              r.focus()
            }, 250)
          })
        }), a.addEventListener("click", () => {
          h.querySelector("button:not([disabled])").click()
        }), n.addKeyframe(a, {
          start: "b - 100vh",
          end: "b",
          event: "control-events"
        }), n.getControllerForTarget(a).on("control-events:enter", () => {
          t.el.addEventListener("pause", l), t.el.addEventListener("playing", l), t.el.addEventListener("ended", l)
        }), n.getControllerForTarget(a).on("control-events:exit", () => {
          c(), t.el.removeEventListener("pause", l), t.el.removeEventListener("playing", l), t.el.removeEventListener("ended", l), setTimeout(() => {
            o.innerText = h.querySelector("button:not([disabled])").innerText
          }, 350)
        })
      }
      _onBreakpointChange() {
        const t = o,
          e = this._shouldReloadResolution();
        let i = {};
        i.viewport = r.convertViewportName(t), e && (i.resolution = r.convertToResolution(a.retina)), this.overrides && (i = Object.assign({}, i, this.overrides)), this.video.change(i), this.video.controls.arePresent && (this.video.controls.disableAll(), this.video.hasPlayed ? this.video.controls.enable("replay") : this.video.controls.enable("play")), this.restartVideoOnBreakPoint ? this.video.frames.deactivateAll().then(() => {
          this.video.frames.activate("start").then(() => {
            this.video.load().then(() => {
              this.video.frames.deactivate("start")
            })
          })
        }) : this.video.hasPlayed && this.video.frames.activate("end")
      }
      _shouldReloadResolution() {
        return r.convertToResolution(a.retina) !== this.video.resolution
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
    117: 117,
    121: 121,
    67: 67
  }],
  149: [function(t, e, i) {
    "use strict";
    var s = t(110),
      r = t(155);
    const n = t(107);
    e.exports = class extends n {
      constructor(t) {
        super(t), this.cancelAnimationRequest = null, this.gridItemClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.animationDuration = 1.1, this.timeGroup = this.anim.createTimeGroup(), this.scrollGroup = this.anim.getGroupForTarget(this.el), this.password = this.el.querySelector(".password"), this.replacementChar = "•", this.startColor = this.hexToRGB(window.getComputedStyle(this.password).getPropertyValue("--startColor").replace(/\s/g, "")), this.endColor = this.hexToRGB(window.getComputedStyle(this.password).getPropertyValue("--endColor").replace(/\s/g, "")), this.stringAnimationFrames = []
      }
      mounted() {
        this._setupString(), this._setupEvents(), this._setupTimelineKeyframes()
      }
      lerpRange(t, e, i) {
        return t * (i - e) + e
      }
      replaceChar(t, e, i) {
        return t.substr(0, e) + i + t.substr(e + 1)
      }
      hexToRGB(t) {
        t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(t, e, i, s) {
          return e + e + i + i + s + s
        }));
        let e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return e ? {
          r: parseInt(e[1], 16),
          g: parseInt(e[2], 16),
          b: parseInt(e[3], 16)
        } : null
      }
      _setupString() {
        /\u00a0/g.test(this.password.innerText) && (this.password.innerText = this.password.innerText.replace(/\u00a0/g, " ")), this.stringLength = this.password.innerHTML.length, this.password.innerText = this.password.innerText.replace(" ", " "), this.originalString = this.password.innerText, this.password.innerText = this.replacementChar.repeat(this.stringLength), this.stringAnimationFrames[this.stringLength] = this.originalString;
        for (let t = this.stringLength - 1; t > -1; t--) {
          let e = this.stringAnimationFrames[t + 1],
            i = this.replaceChar(e, t, this.replacementChar);
          this.stringAnimationFrames[t] = i
        }
      }
      _setupEvents() {
        let t = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.play),
          e = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.reset);
        t.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), e.controller.on("reset:exit", () => {
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
        }).controller.on("draw", t => {
          let e = Math.floor(this.lerpRange(t.tweenProps.index.current, 0, this.stringLength)),
            i = "rgb(".concat(t.tweenProps.red.current, ", ").concat(t.tweenProps.green.current, ", ").concat(t.tweenProps.blue.current, ")");
          this.password.innerText = this.stringAnimationFrames[e], this.password.style.setProperty("color", i)
        })
      }
      _playTileAnimation() {
        let t = s.director.requestAnimationStart({
          element: this.el,
          duration: this.animationDuration
        });
        t.then(() => {
          this.timeGroup.play()
        }), this.cancelAnimationRequest = t.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.timeGroup.restart(), this.timeGroup.pause()
      }
      static IS_SUPPORTED() {
        let t = document.documentElement;
        return !t.classList.contains("aow") && !t.classList.contains("reduced-motion")
      }
    }
  }, {
    107: 107,
    110: 110,
    155: 155
  }],
  150: [function(t, e, i) {
    "use strict";
    var s = t(110);
    t(155);
    const r = t(107);
    e.exports = class extends r {
      constructor(t) {
        super(t), this.sprite = this.el.querySelector(".hardware-spritesheet"), this.hasSpritePlayed = !1, this.cancelAnimationRequest = null, this.tileClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this._setAnimatonDuration(), this.handwritingTileTriggerKeyframeOptions = {
          play: {
            start: "t + 60h - 100vh",
            end: "b - 60h",
            event: "play",
            breakpointMask: "MLX"
          },
          reset: {
            start: "t - 110vh",
            end: "b + 10vh",
            event: "reset",
            breakpointMask: "MLX"
          }
        }, this.handwritingSmallTileTriggerKeyframeOptions = {
          play: {
            start: "t + 60h - 100vh",
            end: "b - 90h",
            event: "play",
            breakpointMask: "S"
          },
          reset: {
            start: "t - 110vh",
            end: "b + 10vh",
            event: "reset",
            breakpointMask: "S"
          }
        }
      }
      mounted() {
        this._setupEvents()
      }
      _setupEvents() {
        let t = this.anim.addKeyframe(this.el, this.handwritingTileTriggerKeyframeOptions.play),
          e = this.anim.addKeyframe(this.el, this.handwritingTileTriggerKeyframeOptions.reset);
        t.controller.on("play:enter", () => {
          this._playTileAnimation(), this.hasSpritePlayed = !0
        }), e.controller.on("reset:exit", () => {
          this._resetTileAnimation()
        });
        let i = this.anim.addKeyframe(this.el, this.handwritingSmallTileTriggerKeyframeOptions.play);
        this.anim.addKeyframe(this.el, this.handwritingSmallTileTriggerKeyframeOptions.reset);
        i.controller.on("play:enter", () => {
          this._playTileAnimation(), this.hasSpritePlayed = !0
        }), i.controller.on("reset:exit", () => {
          this._resetTileAnimation()
        })
      }
      _playTileAnimation() {
        let t = s.director.requestAnimationStart({
          element: this.el,
          duration: this.tileAnimationDuration
        });
        t.then(() => {
          this.playAnimSprite()
        }), this.cancelAnimationRequest = t.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.resetAnimSprite()
      }
      playAnimSprite() {
        this.hasSpritePlayed && this.sprite.classList.remove("anim-sprite-end"), this.sprite.classList.add("anim-sprite-start")
      }
      resetAnimSprite() {
        this.hasSpritePlayed && this.sprite.classList.remove("anim-sprite-start"), this.sprite.classList.add("anim-sprite-end")
      }
      _setAnimatonDuration() {
        this.duration = parseFloat(window.getComputedStyle(this.sprite).getPropertyValue("--spriteAnimDuration").replace(/s/g, "")), this.delay = parseFloat(window.getComputedStyle(this.sprite).getPropertyValue("--spriteAnimDelay").replace(/s/g, "")), this.animationDuration = this.duration + this.delay
      }
      onBreakpointChange(t) {
        this._setAnimatonDuration()
      }
      static IS_SUPPORTED() {
        let t = document.documentElement;
        return !t.classList.contains("aow") && !t.classList.contains("reduced-motion")
      }
    }
  }, {
    107: 107,
    110: 110,
    155: 155
  }],
  151: [function(t, e, i) {
    "use strict";
    var s = t(110),
      r = t(155);
    const n = t(107),
      a = t(148);
    e.exports = class extends n {
      constructor(t) {
        super(t), this.cancelAnimationRequest = null, this.gridItemClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.animationDuration = 10.5, this.timeGroup = this.anim.createTimeGroup(), this.scrollGroup = this.anim.getGroupForTarget(this.el), this.hardware = this.el.querySelector(".hardware"), this.inlineVideoContainer = this.el.querySelector(".inline-video"), this.inlineVideo = new a(this.inlineVideoContainer), this.prefersReducedMotion = document.documentElement.classList.contains("reduced-motion"), this.zoomDuration = 1, this.rtl = "ltr" == document.documentElement.getAttribute("dir") ? 1 : -1
      }
      mounted() {
        this._loadInlineVideo(), this.prefersReducedMotion || (this._setupEvents(), this._setupTimelineKeyframes(), this._setupVideoControls())
      }
      _setupEvents() {
        let t = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.play),
          e = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.reset);
        t.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), e.controller.on("reset:enter", () => {
          this.hardware.style.willChange = "transform"
        }), e.controller.on("reset:exit", () => {
          this.hardware.style.willChange = "", this._resetTileAnimation()
        })
      }
      _setupTimelineKeyframes() {
        this.timeGroup.addKeyframe(this.hardware, {
          start: 0,
          end: 1,
          scale: ["css(--start-scale)", 1],
          x: [0, "((max(-250, ((a0w * 0.5) - (w * 0.5))) - css(--tile-header-padding)) + css(--offset-x)) * ".concat(this.rtl)],
          anchors: [this.el],
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
        let t = s.director.requestAnimationStart({
          element: this.el,
          duration: this.animationDuration
        });
        t.then(() => {
          this.timeGroup.play()
        }), this.cancelAnimationRequest = t.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.timeGroup.restart(), this.timeGroup.pause(), this.inlineVideo.reset()
      }
      _loadInlineVideo() {
        this.scrollGroup.addKeyframe(this.el, {
          start: "t - 200vh",
          end: "b + 200vh",
          event: "load-inline-video"
        }), this.anim.getControllerForTarget(this.el).on("load-inline-video:enter", t => {
          this.inlineVideo.load().then(() => {
            this.animationDuration = this.inlineVideo.video.normalizedDuration + this.zoomDuration
          })
        })
      }
      _setupVideoControls() {
        const t = this.inlineVideo.video.controls.getElement("replay");
        this.inlineVideo.video.controls.getElement("play").addEventListener("click", () => {
          this.timeGroup.play()
        }), t.addEventListener("click", () => {
          this.timeGroup.play()
        })
      }
      static IS_SUPPORTED() {
        return !document.documentElement.classList.contains("no-inline-video")
      }
    }
  }, {
    107: 107,
    110: 110,
    148: 148,
    155: 155
  }],
  152: [function(t, e, i) {
    "use strict";
    var s = t(110),
      r = t(155);
    const n = t(107);
    e.exports = class extends n {
      constructor(t) {
        super(t), this.cancelAnimationRequest = null, this.gridItemClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.animationDuration = 1, this.timeGroup = this.anim.createTimeGroup(), this.scrollGroup = this.anim.getGroupForTarget(this.el), this.gridItemContent = this.el.querySelector(".grid-item-content"), this.hardwareContainer = this.gridItemContent.querySelector(".grid-item-figure"), this.hardware = this.hardwareContainer.querySelector(".hardware"), this.rtl = "ltr" == document.documentElement.getAttribute("dir") ? 1 : -1
      }
      mounted() {
        this._setupEvents(), this._setupTimelineKeyframes()
      }
      _setupEvents() {
        let t = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.play),
          e = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.reset);
        t.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), e.controller.on("reset:enter", () => {
          this.hardware.style.willChange = "transform"
        }), e.controller.on("reset:exit", () => {
          this.hardware.style.willChange = "auto", this._resetTileAnimation()
        })
      }
      _setupTimelineKeyframes() {
        this.timeGroup.addKeyframe(this.hardware, {
          start: 0,
          end: this.animationDuration,
          scale: ["css(--start-scale)", 1],
          x: [0, "(((a1w - a0w) * 0.5) - css(--offset-x)) * ".concat(this.rtl)],
          y: [0, "((a1h - a0h) * 0.5) + css(--tile-content-padding)"],
          anchors: [this.gridItemContent, this.hardwareContainer],
          easeFunction: "cubic-bezier(0.66,0,0.2,1)"
        })
      }
      _playTileAnimation() {
        let t = s.director.requestAnimationStart({
          element: this.el,
          duration: this.animationDuration
        });
        t.then(() => {
          this.timeGroup.play()
        }), this.cancelAnimationRequest = t.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.timeGroup.restart(), this.timeGroup.pause()
      }
      static IS_SUPPORTED() {
        let t = document.documentElement;
        return !t.classList.contains("aow") && !t.classList.contains("reduced-motion")
      }
    }
  }, {
    107: 107,
    110: 110,
    155: 155
  }],
  153: [function(t, e, i) {
    "use strict";
    var s = t(110),
      r = t(155);
    const n = t(107);
    e.exports = class extends n {
      constructor(t) {
        super(t), this.cancelAnimationRequest = null, this.gridItemClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.animationDuration = 1.5, this.timeGroup = this.anim.createTimeGroup(), this.timeGroup.name = "Scratch Handler", this.scrollGroup = this.anim.getGroupForTarget(this.el), this.scratchOut = this.el.querySelector(".scratch-out")
      }
      mounted() {
        this._setupEvents(), this._setupTimelineKeyframes(), this._addEventListeners()
      }
      _setupEvents() {
        this.annotation = this.gum.getComponentOfType("CanvasAnnotation", this.el);
        let t = this.anim.addKeyframe(this.el, r.scribbleTileTriggerKeyframeOptions.play),
          e = this.anim.addKeyframe(this.el, r.scribbleTileTriggerKeyframeOptions.reset);
        t.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), e.controller.on("reset:exit", () => {
          this._resetTileAnimation()
        })
      }
      _setupTimelineKeyframes() {
        this.timeGroup.addKeyframe(this.el, {
          start: .6,
          cssClass: "scratched-out",
          toggle: !0
        })
      }
      _playTileAnimation() {
        let t = s.director.requestAnimationStart({
          element: this.el,
          duration: this.animationDuration
        });
        t.then(() => {
          this.annotation.el.classList.contains("is-playing") || this.el.classList.contains("scratched-out") || this.annotation.startPlayback()
        }), this.cancelAnimationRequest = t.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.timeGroup.restart(), this.timeGroup.pause(), this.annotation.resetPlayback()
      }
      _addEventListeners() {
        this.annotation.el.addEventListener("annotation-complete", () => {
          this.timeGroup.play(0)
        })
      }
      static IS_SUPPORTED() {
        return document.documentElement.classList.contains("dynamic-annotations")
      }
    }
  }, {
    107: 107,
    110: 110,
    155: 155
  }],
  154: [function(t, e, i) {
    "use strict";
    var s = t(110),
      r = t(155);
    const n = t(107),
      a = t(67),
      o = t(148);
    e.exports = class extends n {
      constructor(t) {
        super(t), this.siriAura = this.el.querySelector(".siri-aura"), this.cancelAnimationRequest = null, this.tileClass = ".grid-item-".concat(this.el.getAttribute("data-anim-scroll-group")), this.animationDuration = window.getComputedStyle(this.el).getPropertyValue("--siriAnimDuration"), this.inlineVideoContainer = this.el.querySelector(".inline-video"), this.inlineVideo = new o(this.inlineVideoContainer)
      }
      mounted() {
        this._loadInlineVideo(), this._setupEvents(), this._createAnimKeyframes()
      }
      _createAnimKeyframes() {
        this.siriAuraAnim = a.createTimeGroup(), this.siriAuraAnim.name = "Siri Aura", this.siriAuraAnim.addKeyframe(this.siriAura, {
          start: 0,
          end: "css(--siriAnimDuration)",
          rotation: [0, 360],
          snapAtCreation: !0
        })
      }
      _setupEvents() {
        let t = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.play),
          e = this.anim.addKeyframe(this.el, r.tileTriggerKeyframeOptions.reset);
        t.controller.on("play:enter", () => {
          this._playTileAnimation()
        }), e.controller.on("reset:exit", () => {
          this._resetTileAnimation()
        })
      }
      _playTileAnimation() {
        let t = s.director.requestAnimationStart({
          element: this.el,
          duration: this.tileAnimationDuration
        });
        t.then(() => {
          this.inlineVideo.play(), "hidden" !== window.getComputedStyle(this.siriAura).getPropertyValue("visibility") && this.siriAuraAnim.play()
        }), this.cancelAnimationRequest = t.cancel
      }
      _resetTileAnimation() {
        this.cancelAnimationRequest && (this.cancelAnimationRequest(), this.cancelAnimationRequest = null), this.inlineVideo.reset(), "hidden" !== window.getComputedStyle(this.siriAura).getPropertyValue("visibility") && (this.siriAuraAnim.restart(), this.siriAuraAnim.pause())
      }
      _loadInlineVideo() {
        this.anim.addKeyframe(this.el, {
          start: "t - 200vh",
          end: "b + 200vh",
          event: "load-inline-video"
        }), this.anim.getControllerForTarget(this.el).on("load-inline-video:enter", t => {
          this.inlineVideo.load()
        })
      }
      static IS_SUPPORTED() {
        let t = document.documentElement;
        return !t.classList.contains("aow") && !t.classList.contains("reduced-motion")
      }
    }
  }, {
    107: 107,
    110: 110,
    148: 148,
    155: 155,
    67: 67
  }],
  155: [function(t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = i.scribbleTileTriggerKeyframeOptions = i.tileTriggerKeyframeOptions = void 0;
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
    const r = {
      play: {
        start: "t + 60h - 100vh",
        end: "b - 40h",
        event: "play"
      },
      reset: {
        start: "t - 110vh",
        end: "b + 10vh",
        event: "reset"
      }
    };
    i.scribbleTileTriggerKeyframeOptions = r;
    var n = {
      tileTriggerKeyframeOptions: s,
      scribbleTileTriggerKeyframeOptions: r
    };
    i.default = n
  }, {}],
  156: [function(t, e, i) {
    "use strict";
    const s = t(108),
      r = t(49),
      n = t(74),
      a = t(109),
      o = t(157),
      h = t(1);
    ({
      initialize() {
        Object.assign(a, o);
        let t = document.querySelector("body"),
          e = document.querySelector(".main");
        Object.assign(a, o);
        let i = new s(t);
        i.anim.on(n.EVENTS.ON_DOM_GROUPS_CREATED, () => {
          new r
        }), i.on(s.EVENTS.DOM_COMPONENTS_MOUNTED, () => {
          i.addComponent({
            componentName: "InlineModal",
            el: e
          })
        }), h.detect()
      }
    }).initialize()
  }, {
    1: 1,
    108: 108,
    109: 109,
    157: 157,
    49: 49,
    74: 74
  }],
  157: [function(t, e, i) {
    "use strict";
    e.exports = {
      InlineVideoAutoplay: t(147),
      Hero: t(145),
      ChargingStations: t(139),
      CanvasAnnotation: t(130),
      CircleHandlerComponent: t(140),
      CityLevelLocation: t(141),
      AdaptiveLighting: t(128),
      PasswordSecurity: t(149),
      SiriKnowledge: t(154),
      ScratchHandlerComponent: t(153),
      QuickStatus: t(152),
      HandwritingHandlerComponent: t(144),
      FixedWidth: t(143),
      PinnedConversations: t(151),
      CompactUI: t(142),
      InlineModal: t(146),
      PasteHandwriting: t(150)
    }
  }, {
    128: 128,
    130: 130,
    139: 139,
    140: 140,
    141: 141,
    142: 142,
    143: 143,
    144: 144,
    145: 145,
    146: 146,
    147: 147,
    149: 149,
    150: 150,
    151: 151,
    152: 152,
    153: 153,
    154: 154
  }]
}, {}, [156]);
