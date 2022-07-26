! function() {
  function t(e, i, n) {
    function r(o, a) {
      if (!i[o]) {
        if (!e[o]) {
          var c = "function" == typeof require && require;
          if (!a && c) return c(o, !0);
          if (s) return s(o, !0);
          var l = new Error("Cannot find module '" + o + "'");
          throw l.code = "MODULE_NOT_FOUND", l
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
    var n = t("./../maps/focusableElement"),
      r = function() {
        this.focusableSelectors = n.join(",")
      },
      s = r.prototype;
    s.isFocusableElement = function(t, e, i) {
      if (!e && !this._isDisplayed(t, e)) return !1;
      var r = t.nodeName.toLowerCase(),
        s = n.indexOf(r) > -1;
      return "a" === r || (s ? !t.disabled : !t.contentEditable || (i = i || parseFloat(t.getAttribute("tabindex")), !isNaN(i)))
    }, s.isTabbableElement = function(t, e) {
      if (!e && !this._isDisplayed(t, e)) return !1;
      var i = t.getAttribute("tabindex");
      return i = parseFloat(i), isNaN(i) ? this.isFocusableElement(t, e, i) : i >= 0
    }, s._isDisplayed = function(t) {
      var e = t.getBoundingClientRect();
      return e.top > 0 && e.left > 0 && e.width > 0 && e.height > 0
    }, s.getTabbableElements = function(t, e) {
      for (var i = t.querySelectorAll(this.focusableSelectors), n = i.length, r = [], s = 0; s < n; s++) this.isTabbableElement(i[s], e) && r.push(i[s]);
      return r
    }, s.getFocusableElements = function(t, e) {
      for (var i = t.querySelectorAll(this.focusableSelectors), n = i.length, r = [], s = 0; s < n; s++) this.isFocusableElement(i[s], e) && r.push(i[s]);
      return r
    }, e.exports = new r
  }, {
    "./../maps/focusableElement": 7
  }],
  2: [function(t, e, i) {
    "use strict";
    var n = t("./setAttributes"),
      r = t("./../maps/ariaMap"),
      s = t("./TabManager"),
      o = "data-original-",
      a = "tabindex",
      c = function(t, e) {
        var i = t.getAttribute(o + e);
        i || (i = t.getAttribute(e) || "", n(t, o + e, i))
      };
    e.exports = function(t) {
      if (s.isFocusableElement(t)) c(t, a), n(t, a, -1);
      else
        for (var e = s.getTabbableElements(t, !0), i = e.length; i--;) c(e[i], a), n(e[i], a, -1);
      c(t, r.HIDDEN), n(t, r.HIDDEN, !0)
    }
  }, {
    "./../maps/ariaMap": 6,
    "./TabManager": 1,
    "./setAttributes": 4
  }],
  3: [function(t, e, i) {
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
  4: [function(t, e, i) {
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
  5: [function(t, e, i) {
    "use strict";
    var n = t("./removeAttributes"),
      r = t("./setAttributes"),
      s = t("./../maps/ariaMap"),
      o = "data-original-",
      a = "tabindex",
      c = function(t, e) {
        var i = t.getAttribute(o + e);
        "string" == typeof i && (i.length ? r(t, e, i) : n(t, e), n(t, o + e))
      };
    e.exports = function(t) {
      n(t, a + " " + s.HIDDEN), c(t, a), c(t, s.HIDDEN);
      for (var e = t.querySelectorAll("[" + o + a + "]"), i = e.length; i--;) c(e[i], a)
    }
  }, {
    "./../maps/ariaMap": 6,
    "./removeAttributes": 3,
    "./setAttributes": 4
  }],
  6: [function(t, e, i) {
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
  7: [function(t, e, i) {
    "use strict";
    e.exports = ["input", "select", "textarea", "button", "optgroup", "option", "menuitem", "fieldset", "object", "a[href]", "*[tabindex]", "*[contenteditable]"]
  }, {}],
  8: [function(t, e, i) {
    "use strict";
    var n = t("./request/factory"),
      r = {
        complete: function(t, e) {},
        error: function(t, e) {},
        method: "GET",
        headers: {},
        success: function(t, e, i) {},
        timeout: 5e3
      },
      s = function() {
        for (var t = 1; t < arguments.length; t++)
          for (var e in arguments[t]) arguments[t].hasOwnProperty(e) && (arguments[0][e] = arguments[t][e]);
        return arguments[0]
      },
      o = {
        ajax: function(t, e) {
          e = s({}, r, e), "//" === t.substr(0, 2) && (t = window.location.protocol + t);
          var i = n(t);
          return i.open(e.method, t), i.setTransportHeaders(e.headers), i.setReadyStateChangeHandlers(e.complete, e.error, e.success), i.setTimeout(e.timeout, e.error, e.complete), i.send(e.data), i
        },
        get: function(t, e) {
          return e.method = "GET", o.ajax(t, e)
        },
        head: function(t, e) {
          return e.method = "HEAD", o.ajax(t, e)
        },
        post: function(t, e) {
          return e.method = "POST", o.ajax(t, e)
        }
      };
    e.exports = o
  }, {
    "./request/factory": 9
  }],
  9: [function(t, e, i) {
    "use strict";
    var n = t("./xmlhttprequest"),
      r = t("./xdomainrequest"),
      s = /.*(?=:\/\/)/,
      o = /^.*:\/\/|\/.+$/g,
      a = window.XDomainRequest && document.documentMode < 10,
      c = function(t) {
        if (!t.match(s)) return !1;
        var e = t.replace(o, "");
        return e !== window.location.hostname
      };
    e.exports = function(t, e) {
      var i = a && c(t) ? r : n;
      return new i
    }
  }, {
    "./xdomainrequest": 11,
    "./xmlhttprequest": 12
  }],
  10: [function(t, e, i) {
    "use strict";
    var n = function() {};
    n.create = function() {
      var t = function() {};
      return t.prototype = n.prototype, new t
    }, n.prototype.open = function(t, e) {
      t = t.toUpperCase(), this.xhr.open(t, e)
    }, n.prototype.send = function(t) {
      this.xhr.send(t)
    }, n.prototype.setTimeout = function(t, e, i) {
      this.xhr.ontimeout = function() {
        e(this.xhr, this.status), i(this.xhr, this.status)
      }.bind(this)
    }, n.prototype.setTransportHeaders = function(t) {
      for (var e in t) this.xhr.setRequestHeader(e, t[e])
    }, e.exports = n
  }, {}],
  11: [function(t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      r = t("./request"),
      s = t("@marcom/ac-object/toQueryParameters"),
      o = function() {
        this.xhr = new XDomainRequest
      };
    o.prototype = r.create(), o.prototype.setReadyStateChangeHandlers = function(t, e, i) {
      this.xhr.onerror = function() {
        e(this.xhr, this.status), t(this.xhr, this.status)
      }.bind(this), this.xhr.onload = function() {
        i(this.xhr.responseText, this.xhr.status, this.xhr), t(this.xhr, this.status)
      }.bind(this)
    }, o.prototype.send = function(t) {
      t && "object" === ("undefined" == typeof t ? "undefined" : n(t)) && (t = s(t)), this.xhr.send(t)
    }, o.prototype.setTransportHeaders = function(t) {}, e.exports = o
  }, {
    "./request": 10,
    "@marcom/ac-object/toQueryParameters": 312
  }],
  12: [function(t, e, i) {
    "use strict";
    var n = t("./request"),
      r = function() {
        this.xhr = new XMLHttpRequest
      };
    r.prototype = n.create(), r.prototype.setReadyStateChangeHandlers = function(t, e, i) {
      this.xhr.onreadystatechange = function(n) {
        4 === this.xhr.readyState && (clearTimeout(this.timeout), this.xhr.status >= 200 && this.xhr.status < 300 ? (i(this.xhr.responseText, this.xhr.status, this.xhr), t(this.xhr, this.status)) : (e(this.xhr, this.status), t(this.xhr, this.status)))
      }.bind(this)
    }, e.exports = r
  }, {
    "./request": 10
  }],
  13: [function(t, e, i) {
    "use strict";
    var n = t("./ac-ajax/Ajax"),
      r = t("./ac-ajax/Request");
    e.exports = new n, e.exports.Ajax = n, e.exports.Request = r
  }, {
    "./ac-ajax/Ajax": 14,
    "./ac-ajax/Request": 15
  }],
  14: [function(t, e, i) {
    "use strict";
    var n = t("./Request"),
      r = t("./XDomain-request"),
      s = t("./URLParser"),
      o = function() {};
    o._Request = n, o.prototype = {
      _defaults: {
        method: "get",
        timeout: 5e3
      },
      _extend: function() {
        for (var t = 1; t < arguments.length; t++)
          for (var e in arguments[t]) arguments[t].hasOwnProperty(e) && (arguments[0][e] = arguments[t][e]);
        return arguments[0]
      },
      _getOptions: function(t, e) {
        return this._extend({}, this._defaults, e, t)
      },
      _isCrossDomainRequest: function(t) {
        var e = new s,
          i = e.parse(window.location.href).origin,
          n = e.parse(t).origin;
        return e.destroy(), n !== i
      },
      create: function(t) {
        return new n(t)
      },
      cors: function(t) {
        var e = window.XDomainRequest && document.documentMode < 10 ? r : n;
        return new e(t)
      },
      get: function(t) {
        var e;
        return t = this._getOptions({
          method: "get"
        }, t), e = this._isCrossDomainRequest(t.url) ? this.cors(t) : this.create(t), e.send()
      },
      getJSON: function(t) {
        return this.get(t).then(function(t) {
          return JSON.parse(t.responseText)
        })
      },
      head: function(t) {
        return t = this._getOptions({
          method: "head"
        }, t), this.create(t).send()
      },
      isCrossDomainRequest: function(t) {
        return this._isCrossDomainRequest(t)
      },
      post: function(t) {
        return t = this._getOptions({
          method: "post"
        }, t), this.create(t).send()
      }
    }, e.exports = o
  }, {
    "./Request": 15,
    "./URLParser": 16,
    "./XDomain-request": 17
  }],
  15: [function(t, e, i) {
    "use strict";
    var n = function(t) {
      this._initialize(t)
    };
    n.create = function() {
      var t = function() {};
      return t.prototype = n.prototype, new t
    }, n.prototype = {
      _addReadyStateChangeHandler: function() {
        this.xhr.onreadystatechange = function(t) {
          4 === this.xhr.readyState && (clearTimeout(this._timeout), this.xhr.status >= 200 && this.xhr.status < 300 ? this.resolve(this.xhr) : this.reject(this.xhr))
        }.bind(this)
      },
      _getPromise: function() {
        this.promise = new Promise(function(t, e) {
          this.resolve = t, this.reject = e
        }.bind(this))
      },
      _getTransport: function() {
        return new XMLHttpRequest
      },
      _initialize: function(t) {
        var e = this._validateConfiguration(t);
        if (e) throw e;
        this._configuration = t;
        var i = this._configuration.method.toUpperCase();
        this.xhr = this._getTransport(), this._getPromise(), this.xhr.open(i, this._configuration.url), this._setRequestHeaders(t.headers), this._addReadyStateChangeHandler()
      },
      _sendXHR: function() {
        this.xhr && (this._configuration && this._configuration.data ? this.xhr.send(this._configuration.data) : this.xhr.send())
      },
      _setRequestHeaders: function(t) {
        t && t.forEach(function(t) {
          this.xhr.setRequestHeader(t.name, t.value)
        }, this)
      },
      _setTimeout: function(t) {
        t || (this._configuration && this._configuration.timeout ? t = this._configuration.timeout : (clearTimeout(this._timeout), this._timeout = null)), null !== this._timeout && clearTimeout(this._timeout), t > 0 && (this._timeout = setTimeout(function() {
          this.xhr.abort(), this.reject()
        }.bind(this), t))
      },
      _timeout: null,
      _validateConfiguration: function(t) {
        if (!t) return "Must provide a configuration object";
        var e = [],
          i = t.headers;
        if (t.url || e.push("Must provide a url"), t.method || e.push("Must provide a method"), i) {
          if (!Array.isArray(i)) return "Must provide an array of headers";
          this._validateHeaders(i, e)
        }
        return e.join(", ")
      },
      _validateHeaders: function(t, e) {
        for (var i = 0, n = t.length; i < n; i++)
          if (!t[i].hasOwnProperty("name") || !t[i].hasOwnProperty("value")) {
            e.push("Must provide a name and value key for all headers");
            break
          }
      },
      promise: null,
      reject: null,
      resolve: null,
      send: function() {
        return this._setTimeout(), this._sendXHR(), this.promise
      },
      xhr: null
    }, e.exports = n
  }, {}],
  16: [function(t, e, i) {
    "use strict";
    var n = function() {
        this.parser = null
      },
      r = n.prototype;
    r.parse = function(t) {
      var e, i, n, r, s;
      if ("string" != typeof t) throw new TypeError(t + " must be a string");
      return this.parser || (this.parser = document.createElement("a")), this._qualifyPath(t), n = this.parser.hostname, i = this.parser.protocol, r = this._normalizePort(this.parser), e = this.parser.origin || this._constructOriginString(this.parser, r), s = this.parser.search, {
        originalPath: t,
        qualifiedPath: this.parser.href,
        protocol: i,
        hostname: n,
        origin: e,
        port: r,
        search: s
      }
    }, r.destroy = function() {
      this.parser = null
    }, r._constructOriginString = function(t, e) {
      var i = e ? ":" + e : "";
      return t.protocol + "//" + t.hostname + i
    }, r._normalizePort = function(t) {
      return "80" === t.port || "443" === t.port || "0" === t.port ? "" : t.port
    }, r._qualifyPath = function(t) {
      this.parser.href = t, this.parser.href = this.parser.href
    }, e.exports = n
  }, {}],
  17: [function(t, e, i) {
    "use strict";
    var n = t("./Request"),
      r = function(t) {
        n.apply(this, arguments)
      };
    r.prototype = n.create(), r.prototype._getTransport = function() {
      return new XDomainRequest
    }, r.prototype._addReadyStateChangeHandler = function() {
      this.xhr.ontimeout = function() {
        this.reject(this.xhr)
      }.bind(this), this.xhr.onerror = function() {
        this.reject(this.xhr)
      }.bind(this), this.xhr.onload = function() {
        this.resolve(this.xhr)
      }.bind(this)
    }, r.prototype._setTimeout = function(t) {
      t || this._configuration && this._configuration.timeout && (t = this._configuration.timeout), t > 0 && (this.xhr.timeout = t)
    }, r.prototype._sendXHR = function() {
      setTimeout(function() {
        n.prototype._sendXHR.call(this)
      }.bind(this), 0)
    }, e.exports = r
  }, {
    "./Request": 15
  }],
  18: [function(t, e, i) {
    "use strict";
    e.exports = {
      log: t("./ac-console/log")
    }
  }, {
    "./ac-console/log": 19
  }],
  19: [function(t, e, i) {
    "use strict";
    var n = "f7c9180f-5c45-47b4-8de4-428015f096c0",
      r = !! function() {
        try {
          return window.localStorage.getItem(n)
        } catch (t) {}
      }();
    e.exports = function() {
      window.console && "undefined" != typeof console.log && r && console.log.apply(console, Array.prototype.slice.call(arguments, 0))
    }
  }, {}],
  20: [function(t, e, i) {
    "use strict";
    var n, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      s = t("@marcom/ac-object/extend"),
      o = t("@marcom/ac-object/create"),
      a = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      c = t("@marcom/ac-dom-traversal/querySelectorAll"),
      l = t("@marcom/ac-dom-events/addEventListener"),
      u = t("@marcom/ac-dom-events/removeEventListener"),
      h = t("@marcom/ac-console");
    try {
      n = t("@marcom/ac-analytics")
    } catch (d) {
      h.log(d.message)
    }
    var m = {
        dataAttribute: "analytics-share",
        interactionEvents: ["click"],
        autoEnable: !0
      },
      f = function(t) {
        t = t || {}, this.options = s(m, t), a.call(this), this.elements = [], this.eventObserver = null, this.publishShareClick = this.publishShareClick.bind(this), this.options.autoEnable && this.enable()
      },
      p = a.prototype,
      _ = f.prototype = o(p);
    _.enable = function() {
      return !!n && (this._createObserver(), void this.bindEventListener())
    }, _.disable = function() {
      return !!n && void this.unbindEventListener()
    }, _.bindEventListener = function() {
      var t = 0;
      this.elements = this.populateElements(), t = this.elements.length;
      for (var e = 0; e < t; e++) l(this.elements[e], "click", this.publishShareClick)
    }, _.unbindEventListener = function() {
      for (var t = this.elements && this.elements.length ? this.elements.length : 0, e = 0; e < t; e++) u(this.elements[e], "click", this.publishShareClick)
    }, _.populateElements = function() {
      return c("[data-" + this.options.dataAttribute + "]", this.options.context || document)
    }, _.publishShareClick = function(t) {
      var e = t.currentTarget,
        i = this.parseDataAttribute(e.getAttribute("data-" + this.options.dataAttribute));
      if ("object" === ("undefined" == typeof i ? "undefined" : r(i))) {
        if (!i.title) return console.log("data-" + this.options.dataAttribute + " attribute must have a `title` property"), !1;
        this.trigger("click", i)
      }
    }, _.parseDataAttribute = function(t) {
      var e = {};
      try {
        e = JSON.parse(t)
      } catch (i) {
        console.log("data-" + this.options.dataAttribute + " must be a valid JSON string")
      }
      return e
    }, _.destroy = function() {
      this.disable(), this.elements = [], this.eventObserver = null, this.publishShareClick = null, this.options = null
    }, _._createObserver = function() {
      return !!(n && n.observer && n.observer.Event) && void(this.eventObserver = new n.observer.Event(this, this.options))
    }, e.exports = f
  }, {
    "@marcom/ac-analytics": void 0,
    "@marcom/ac-console": 18,
    "@marcom/ac-dom-events/addEventListener": 71,
    "@marcom/ac-dom-events/removeEventListener": 75,
    "@marcom/ac-dom-traversal/querySelectorAll": 119,
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-object/create": 305,
    "@marcom/ac-object/extend": 307
  }],
  21: [function(t, e, i) {
    "use strict";
    var n = t("./../AnalyticsShare");
    e.exports = function(t) {
      return new n(t)
    }
  }, {
    "./../AnalyticsShare": 20
  }],
  22: [function(t, e, i) {
    "use strict";
    var n = function() {
      function t(t) {
        for (var e = 0; e < c.length; e++) {
          var n = i[e] + t;
          if (void 0 !== a.style[n]) return n
        }
      }

      function e(t) {
        for (var e = 0; e < l.length; e++) {
          var i = l[e] + t;
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
        c = ["", "-webkit-", "-moz-", "-o-", "-ms-"],
        l = ["-webkit-", "", "-moz-", "-o-", "-ms-"];
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
  23: [function(t, e, i) {
    "use strict";
    var n = t("./ac-browser/BrowserData"),
      r = /applewebkit/i,
      s = t("./ac-browser/IE"),
      o = n.create();
    o.isWebKit = function(t) {
      var e = t || window.navigator.userAgent;
      return !!e && !!r.test(e)
    }, o.lowerCaseUserAgent = navigator.userAgent.toLowerCase(), "IE" === o.name && (o.IE = {
      documentMode: s.getDocumentMode()
    }), e.exports = o
  }, {
    "./ac-browser/BrowserData": 24,
    "./ac-browser/IE": 25
  }],
  24: [function(t, e, i) {
    "use strict";

    function n() {}
    t("@marcom/ac-polyfills/Array/prototype.filter"), t("@marcom/ac-polyfills/Array/prototype.some");
    var r = t("./data");
    n.prototype = {
      __getBrowserVersion: function(t, e) {
        var i;
        if (t && e) {
          var n = r.browser.filter(function(t) {
            return t.identity === e
          });
          return n.some(function(n) {
            var r = n.versionSearch || e,
              s = t.indexOf(r);
            if (s > -1) return i = parseFloat(t.substring(s + r.length + 1)), !0
          }), i
        }
      },
      __getName: function(t) {
        return this.__getIdentityStringFromArray(t)
      },
      __getIdentity: function(t) {
        return t.string ? this.__matchSubString(t) : t.prop ? t.identity : void 0
      },
      __getIdentityStringFromArray: function(t) {
        for (var e, i = 0, n = t.length; i < n; i++)
          if (e = this.__getIdentity(t[i])) return e
      },
      __getOS: function(t) {
        return this.__getIdentityStringFromArray(t)
      },
      __getOSVersion: function(t, e) {
        if (t && e) {
          var i = r.os.filter(function(t) {
              return t.identity === e
            })[0],
            n = i.versionSearch || e,
            s = new RegExp(n + " ([\\d_\\.]+)", "i"),
            o = t.match(s);
          return null !== o ? o[1].replace(/_/g, ".") : void 0
        }
      },
      __matchSubString: function(t) {
        var e = t.subString;
        if (e) {
          var i = e.test ? !!e.test(t.string) : t.string.indexOf(e) > -1;
          if (i) return t.identity
        }
      }
    }, n.create = function() {
      var t = new n,
        e = {};
      return e.name = t.__getName(r.browser), e.version = t.__getBrowserVersion(r.versionString, e.name), e.os = t.__getOS(r.os), e.osVersion = t.__getOSVersion(r.versionString, e.os), e
    }, e.exports = n
  }, {
    "./data": 26,
    "@marcom/ac-polyfills/Array/prototype.filter": void 0,
    "@marcom/ac-polyfills/Array/prototype.some": void 0
  }],
  25: [function(t, e, i) {
    "use strict";
    e.exports = {
      getDocumentMode: function() {
        var t;
        return document.documentMode ? t = parseInt(document.documentMode, 10) : (t = 5, document.compatMode && "CSS1Compat" === document.compatMode && (t = 7)), t
      }
    }
  }, {}],
  26: [function(t, e, i) {
    "use strict";
    e.exports = {
      browser: [{
        string: window.navigator.userAgent,
        subString: "Edge",
        identity: "Edge"
      }, {
        string: window.navigator.userAgent,
        subString: /silk/i,
        identity: "Silk"
      }, {
        string: window.navigator.userAgent,
        subString: /(android).*(version\/[0-9+].[0-9+])/i,
        identity: "Android"
      }, {
        string: window.navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
      }, {
        string: window.navigator.userAgent,
        subString: "OmniWeb",
        versionSearch: "OmniWeb/",
        identity: "OmniWeb"
      }, {
        string: window.navigator.userAgent,
        subString: /mobile\/[^\s]*\ssafari\//i,
        identity: "Safari Mobile",
        versionSearch: "Version"
      }, {
        string: window.navigator.vendor,
        subString: "Apple",
        identity: "Safari",
        versionSearch: "Version"
      }, {
        prop: window.opera,
        identity: "Opera",
        versionSearch: "Version"
      }, {
        string: window.navigator.vendor,
        subString: "iCab",
        identity: "iCab"
      }, {
        string: window.navigator.vendor,
        subString: "KDE",
        identity: "Konqueror"
      }, {
        string: window.navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
      }, {
        string: window.navigator.vendor,
        subString: "Camino",
        identity: "Camino"
      }, {
        string: window.navigator.userAgent,
        subString: "Netscape",
        identity: "Netscape"
      }, {
        string: window.navigator.userAgent,
        subString: "MSIE",
        identity: "IE",
        versionSearch: "MSIE"
      }, {
        string: window.navigator.userAgent,
        subString: "Trident",
        identity: "IE",
        versionSearch: "rv"
      }, {
        string: window.navigator.userAgent,
        subString: "Gecko",
        identity: "Mozilla",
        versionSearch: "rv"
      }, {
        string: window.navigator.userAgent,
        subString: "Mozilla",
        identity: "Netscape",
        versionSearch: "Mozilla"
      }],
      os: [{
        string: window.navigator.platform,
        subString: "Win",
        identity: "Windows",
        versionSearch: "Windows NT"
      }, {
        string: window.navigator.platform,
        subString: "Mac",
        identity: "OS X"
      }, {
        string: window.navigator.userAgent,
        subString: "iPhone",
        identity: "iOS",
        versionSearch: "iPhone OS"
      }, {
        string: window.navigator.userAgent,
        subString: "iPad",
        identity: "iOS",
        versionSearch: "CPU OS"
      }, {
        string: window.navigator.userAgent,
        subString: /android/i,
        identity: "Android"
      }, {
        string: window.navigator.platform,
        subString: "Linux",
        identity: "Linux"
      }],
      versionString: window.navigator.userAgent || window.navigator.appVersion || void 0
    }
  }, {}],
  27: [function(t, e, i) {
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
    "./className/add": 29,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0
  }],
  28: [function(t, e, i) {
    "use strict";
    e.exports = {
      add: t("./className/add"),
      contains: t("./className/contains"),
      remove: t("./className/remove")
    }
  }, {
    "./className/add": 29,
    "./className/contains": 30,
    "./className/remove": 32
  }],
  29: [function(t, e, i) {
    "use strict";
    var n = t("./contains");
    e.exports = function(t, e) {
      n(t, e) || (t.className += " " + e)
    }
  }, {
    "./contains": 30
  }],
  30: [function(t, e, i) {
    "use strict";
    var n = t("./getTokenRegExp");
    e.exports = function(t, e) {
      return n(e).test(t.className)
    }
  }, {
    "./getTokenRegExp": 31
  }],
  31: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return new RegExp("(\\s|^)" + t + "(\\s|$)")
    }
  }, {}],
  32: [function(t, e, i) {
    "use strict";
    var n = t("./contains"),
      r = t("./getTokenRegExp");
    e.exports = function(t, e) {
      n(t, e) && (t.className = t.className.replace(r(e), "$1").trim())
    }
  }, {
    "./contains": 30,
    "./getTokenRegExp": 31
  }],
  33: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Element/prototype.classList");
    var n = t("./className/contains");
    e.exports = function(t, e) {
      return t.classList && t.classList.contains ? t.classList.contains(e) : n(t, e)
    }
  }, {
    "./className/contains": 30,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0
  }],
  34: [function(t, e, i) {
    "use strict";
    e.exports = {
      add: t("./add"),
      contains: t("./contains"),
      remove: t("./remove"),
      toggle: t("./toggle")
    }
  }, {
    "./add": 27,
    "./contains": 33,
    "./remove": 35,
    "./toggle": 36
  }],
  35: [function(t, e, i) {
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
    "./className/remove": 32,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0
  }],
  36: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Element/prototype.classList");
    var n = t("./className");
    e.exports = function(t, e, i) {
      var r, s = "undefined" != typeof i;
      return t.classList && t.classList.toggle ? s ? t.classList.toggle(e, i) : t.classList.toggle(e) : (r = s ? !!i : !n.contains(t, e), r ? n.add(t, e) : n.remove(t, e), r)
    }
  }, {
    "./className": 28,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0
  }],
  37: [function(t, e, i) {
    "use strict";
    e.exports = {
      EventEmitterMicro: t("./ac-event-emitter-micro/EventEmitterMicro")
    }
  }, {
    "./ac-event-emitter-micro/EventEmitterMicro": 38
  }],
  38: [function(t, e, i) {
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
  39: [function(t, e, i) {
    "use strict";
    e.exports = {
      Clip: t("./ac-clip/Clip")
    }
  }, {
    "./ac-clip/Clip": 40
  }],
  40: [function(t, e, i) {
    "use strict";

    function n(t, e, i, r) {
      r = r || {}, this._options = r, this._isYoyo = r.yoyo, this._direction = 1, this._timeScale = 1, this._loop = r.loop || 0, this._loopCount = 0, this._target = t, this.duration(e), this._delay = 1e3 * (r.delay || 0), this._remainingDelay = this._delay, this._progress = 0, this._clock = r.clock || a, this._playing = !1, this._getTime = Date.now || function() {
        return (new Date).getTime()
      }, this._propsTo = i || {}, this._propsFrom = r.propsFrom || {}, this._onStart = r.onStart || null, this._onUpdate = r.onUpdate || null, this._onDraw = r.onDraw || null, this._onComplete = r.onComplete || null;
      var s = r.ease || u;
      this._ease = "function" == typeof s ? new c(s) : o(s), this._start = this._start.bind(this), this._update = this._update.bind(this), this._draw = this._draw.bind(this), this._isPrepared = !1, n._add(this), l.call(this)
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
      c = t("@marcom/ac-easing").Ease,
      l = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      u = "ease",
      h = n.prototype = s(l.prototype);
    n.COMPLETE = "complete", n.PAUSE = "pause", n.PLAY = "play", h.play = function() {
      return this._playing || (this._playing = !0, 0 === this._delay || 0 === this._remainingDelay ? this._start() : (this._isPrepared || (this._setDiff(), this._updateProps()), this._startTimeout = setTimeout(this._start, this._remainingDelay / this._timeScale), this._delayStart = this._getTime())), this
    }, h.pause = function() {
      return this._playing && (this._startTimeout && (this._remainingDelay = this._getTime() - this._delayStart, clearTimeout(this._startTimeout)), this._stop(), this.trigger(n.PAUSE, this)), this
    }, h.destroy = function() {
      return this.pause(), this._options = null, this._target = null, this._storeTarget = null, this._ease = null, this._clock = null, this._propsTo = null, this._propsFrom = null, this._storePropsTo = null, this._storePropsFrom = null, this._propsDiff = null, this._propsEase = null, this._onStart = null, this._onUpdate = null, this._onDraw = null, this._onComplete = null, n._remove(this), l.prototype.destroy.call(this), this
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
      var a, c;
      for (c in i) i.hasOwnProperty(c) && void 0 === e[c] && void 0 !== t[c] && (n[c] = t[c], s[c] = t[c], o[c] = i[c]);
      for (c in e) t.hasOwnProperty(c) && (a = r(t[c]), null !== t[c] && "object" === a ? (Array.isArray(t[c]) ? (n[c] = [], s[c] = [], o[c] = []) : (n[c] = {}, s[c] = {}, o[c] = {}), this._cloneObjectsLoop(t[c], e[c] || {}, i[c] || {}, n[c], s[c], o[c])) : null !== e[c] && "number" === a && (n[c] = t[c], s[c] = e[c], i && void 0 !== i[c] && (o[c] = i[c])))
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
    "@marcom/ac-clock": 42,
    "@marcom/ac-easing": 123,
    "@marcom/ac-event-emitter-micro": 37,
    "@marcom/ac-object/create": 305,
    "@marcom/ac-polyfills/Array/isArray": void 0
  }],
  41: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      if ("function" == typeof t.select) {
        var e = !1;
        e = t.select(), e || t.setSelectionRange(0, t.value.length)
      } else {
        var i = document.createRange();
        i.selectNodeContents(t);
        var n = window.getSelection();
        n.removeAllRanges(), n.addRange(i)
      }
    }
  }, {}],
  42: [function(t, e, i) {
    "use strict";
    var n = t("./ac-clock/Clock"),
      r = t("./ac-clock/ThrottledClock"),
      s = t("./ac-clock/sharedClockInstance");
    s.Clock = n, s.ThrottledClock = r, e.exports = s
  }, {
    "./ac-clock/Clock": 43,
    "./ac-clock/ThrottledClock": 44,
    "./ac-clock/sharedClockInstance": 45
  }],
  43: [function(t, e, i) {
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
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-polyfills/Function/prototype.bind": void 0,
    "@marcom/ac-polyfills/requestAnimationFrame": void 0
  }],
  44: [function(t, e, i) {
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
    "./sharedClockInstance": 45,
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-polyfills/requestAnimationFrame": void 0
  }],
  45: [function(t, e, i) {
    "use strict";
    var n = t("./Clock");
    e.exports = new n
  }, {
    "./Clock": 43
  }],
  46: [function(t, e, i) {
    "use strict";
    var n = t("./ac-color/Color");
    n.decimalToHex = t("./ac-color/static/decimalToHex"), n.hexToDecimal = t("./ac-color/static/hexToDecimal"), n.hexToRgb = t("./ac-color/static/hexToRgb"), n.isColor = t("./ac-color/static/isColor"), n.isHex = t("./ac-color/static/isHex"), n.isRgb = t("./ac-color/static/isRgb"), n.isRgba = t("./ac-color/static/isRgba"), n.mixColors = t("./ac-color/static/mixColors"), n.rgbaToArray = t("./ac-color/static/rgbaToArray"), n.rgbToArray = t("./ac-color/static/rgbToArray"), n.rgbToDecimal = t("./ac-color/static/rgbToDecimal"), n.rgbToHex = t("./ac-color/static/rgbToHex"), n.rgbToHsl = t("./ac-color/static/rgbToHsl"), n.rgbToHsv = t("./ac-color/static/rgbToHsv"), n.rgbaToObject = t("./ac-color/static/rgbaToObject"), n.rgbToObject = t("./ac-color/static/rgbToObject"), n.shortToLongHex = t("./ac-color/static/shortToLongHex"), e.exports = {
      Color: n
    }
  }, {
    "./ac-color/Color": 47,
    "./ac-color/static/decimalToHex": 49,
    "./ac-color/static/hexToDecimal": 50,
    "./ac-color/static/hexToRgb": 51,
    "./ac-color/static/isColor": 52,
    "./ac-color/static/isHex": 53,
    "./ac-color/static/isRgb": 54,
    "./ac-color/static/isRgba": 55,
    "./ac-color/static/mixColors": 56,
    "./ac-color/static/rgbToArray": 57,
    "./ac-color/static/rgbToDecimal": 58,
    "./ac-color/static/rgbToHex": 59,
    "./ac-color/static/rgbToHsl": 60,
    "./ac-color/static/rgbToHsv": 61,
    "./ac-color/static/rgbToObject": 62,
    "./ac-color/static/rgbaToArray": 63,
    "./ac-color/static/rgbaToObject": 64,
    "./ac-color/static/shortToLongHex": 65
  }],
  47: [function(t, e, i) {
    "use strict";

    function n(t) {
      if (!o(t) && !r.nameToRgbObject[t]) throw new Error(t + " is not a supported color.");
      this._setColor(t)
    }
    var r = t("./helpers/cssColorNames"),
      s = t("./static/hexToRgb"),
      o = t("./static/isColor"),
      a = t("./static/isHex"),
      c = t("./static/isRgba"),
      l = t("./static/mixColors"),
      u = t("./static/rgbaToArray"),
      h = t("./static/rgbToArray"),
      d = t("./static/rgbToDecimal"),
      m = t("./static/rgbToHex"),
      f = t("./static/rgbaToObject"),
      p = t("./static/rgbToObject"),
      _ = t("./static/shortToLongHex"),
      g = n.prototype;
    g._setColor = function(t) {
      if (this._color = {}, a(t)) this._color.hex = _(t), this._color.rgb = {
        color: s(t)
      };
      else if (c(t)) {
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
      return void 0 === this._color.hex && (this._color.hex = m.apply(this, this.rgbArray())), this._color.hex
    }, g.decimal = function() {
      return void 0 === this._color.decimal && (this._color.decimal = d(this.rgb())), this._color.decimal
    }, g.cssName = function() {
      return r.rgbToName[this.rgb()] || null
    }, g.rgbArray = function() {
      return void 0 === this._color.rgb.array && (this._color.rgb.array = h(this.rgb())), this._color.rgb.array
    }, g.rgbaArray = function() {
      return void 0 === this._color.rgba && this.rgba(), void 0 === this._color.rgba.array && (this._color.rgba.array = u(this.rgba())), this._color.rgba.array
    }, g.rgbObject = function() {
      return void 0 === this._color.rgb.object && (this._color.rgb.object = p(this.rgb())), this._color.rgb.object
    }, g.rgbaObject = function() {
      return void 0 === this._color.rgba && this.rgba(), void 0 === this._color.rgba.object && (this._color.rgba.object = f(this.rgba())), this._color.rgba.object
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
      var i = p(l(this.rgb(), t, e));
      return this._setColor("rgba(" + i.r + ", " + i.g + ", " + i.b + ", " + this.getAlpha() + ")"), this.rgb()
    }, g.clone = function() {
      return new n(this.rgb())
    }, e.exports = n
  }, {
    "./helpers/cssColorNames": 48,
    "./static/hexToRgb": 51,
    "./static/isColor": 52,
    "./static/isHex": 53,
    "./static/isRgba": 55,
    "./static/mixColors": 56,
    "./static/rgbToArray": 57,
    "./static/rgbToDecimal": 58,
    "./static/rgbToHex": 59,
    "./static/rgbToObject": 62,
    "./static/rgbaToArray": 63,
    "./static/rgbaToObject": 64,
    "./static/shortToLongHex": 65
  }],
  48: [function(t, e, i) {
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
  49: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return "#" + t.toString(16)
    }
  }, {}],
  50: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return parseInt(t.substr(1), 16)
    }
  }, {}],
  51: [function(t, e, i) {
    "use strict";
    var n = t("./shortToLongHex");
    e.exports = function(t) {
      t = n(t);
      var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
      return e ? "rgb(" + parseInt(e[1], 16) + ", " + parseInt(e[2], 16) + ", " + parseInt(e[3], 16) + ")" : null
    }
  }, {
    "./shortToLongHex": 65
  }],
  52: [function(t, e, i) {
    "use strict";
    var n = t("./isRgb"),
      r = t("./isRgba"),
      s = t("./isHex");
    e.exports = function(t) {
      return s(t) || n(t) || r(t)
    }
  }, {
    "./isHex": 53,
    "./isRgb": 54,
    "./isRgba": 55
  }],
  53: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
      return e.test(t)
    }
  }, {}],
  54: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e = /^rgb\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*\)$/;
      return null !== e.exec(t)
    }
  }, {}],
  55: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e = /^rgba\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*(0(\.\d+)?|1(\.0+)?)\s*\)$/;
      return null !== e.exec(t)
    }
  }, {}],
  56: [function(t, e, i) {
    "use strict";
    var n = t("./isHex"),
      r = t("./hexToRgb"),
      s = t("./rgbToObject");
    e.exports = function(t, e, i) {
      t = n(t) ? r(t) : t, e = n(e) ? r(e) : e, t = s(t), e = s(e);
      var o = t.r + (e.r - t.r) * i,
        a = t.g + (e.g - t.g) * i,
        c = t.b + (e.b - t.b) * i;
      return "rgb(" + Math.round(o) + ", " + Math.round(a) + ", " + Math.round(c) + ")"
    }
  }, {
    "./hexToRgb": 51,
    "./isHex": 53,
    "./rgbToObject": 62
  }],
  57: [function(t, e, i) {
    "use strict";
    var n = t("./rgbToObject");
    e.exports = function(t) {
      var e = n(t);
      return [e.r, e.g, e.b]
    }
  }, {
    "./rgbToObject": 62
  }],
  58: [function(t, e, i) {
    "use strict";
    var n = t("./hexToDecimal"),
      r = t("./rgbToArray"),
      s = t("./rgbToHex");
    e.exports = function(t) {
      var e = s.apply(this, r(t));
      return n(e)
    }
  }, {
    "./hexToDecimal": 50,
    "./rgbToArray": 57,
    "./rgbToHex": 59
  }],
  59: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i) {
      return "#" + ((1 << 24) + (t << 16) + (e << 8) + i).toString(16).slice(1)
    }
  }, {}],
  60: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i) {
      if (3 !== arguments.length) return !1;
      t /= 255, e /= 255, i /= 255;
      var n, r, s = Math.max(t, e, i),
        o = Math.min(t, e, i),
        a = s + o,
        c = s - o,
        l = a / 2;
      if (s === o) n = r = 0;
      else {
        switch (r = l > .5 ? c / (2 - s - o) : c / a, s) {
          case t:
            n = (e - i) / c;
            break;
          case e:
            n = 2 + (i - t) / c;
            break;
          case i:
            n = 4 + (t - e) / c
        }
        n *= 60, n < 0 && (n += 360)
      }
      return [n, Math.round(100 * r), Math.round(100 * l)]
    }
  }, {}],
  61: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i) {
      if (3 !== arguments.length) return !1;
      var n, r, s = t / 255,
        o = e / 255,
        a = i / 255,
        c = Math.max(s, o, a),
        l = Math.min(s, o, a),
        u = c,
        h = c - l;
      if (r = 0 === c ? 0 : h / c, c === l) n = 0;
      else {
        switch (c) {
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
  62: [function(t, e, i) {
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
  63: [function(t, e, i) {
    "use strict";
    var n = t("./rgbaToObject");
    e.exports = function(t) {
      var e = n(t);
      return [e.r, e.g, e.b, e.a]
    }
  }, {
    "./rgbaToObject": 64
  }],
  64: [function(t, e, i) {
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
  65: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      return t = t.replace(e, function(t, e, i, n) {
        return "#" + e + e + i + i + n + n
      })
    }
  }, {}],
  66: [function(t, e, i) {
    "use strict";
    var n, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      s = "f7c9180f-5c45-47b4-8de4-428015f096c0",
      o = window || self;
    try {
      n = !!o.localStorage.getItem(s)
    } catch (a) {}
    e.exports = function(t) {
      return function() {
        if (n && "object" === r(window.console)) return console[t].apply(console, Array.prototype.slice.call(arguments, 0))
      }
    }
  }, {}],
  67: [function(t, e, i) {
    "use strict";
    e.exports = t("./internal/expose")("log")
  }, {
    "./internal/expose": 66
  }],
  68: [function(t, e, i) {
    "use strict";
    e.exports = {
      DOMEmitter: t("./ac-dom-emitter/DOMEmitter")
    }
  }, {
    "./ac-dom-emitter/DOMEmitter": 69
  }],
  69: [function(t, e, i) {
    "use strict";

    function n(t) {
      null !== t && (this.el = t, this._bindings = {}, this._delegateFuncs = {}, this._eventEmitter = new o)
    }
    var r, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      o = t("ac-event-emitter").EventEmitter,
      a = t("./DOMEmitterEvent"),
      c = {
        addEventListener: t("@marcom/ac-dom-events/addEventListener"),
        removeEventListener: t("@marcom/ac-dom-events/removeEventListener"),
        dispatchEvent: t("@marcom/ac-dom-events/dispatchEvent")
      },
      l = {
        querySelectorAll: t("@marcom/ac-dom-traversal/querySelectorAll"),
        matchesSelector: t("@marcom/ac-dom-traversal/matchesSelector")
      },
      u = "dom-emitter";
    r = n.prototype, r.on = function() {
      return this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments, 0), this._on), this
    }, r.once = function() {
      return this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments, 0), this._once), this
    }, r.off = function() {
      return this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments, 0), this._off), this
    }, r.has = function(t, e, i, n) {
      var r, s;
      if ("string" == typeof e ? (r = e, s = i) : (s = e, n = i), r) {
        var o = this._getDelegateFuncBindingIdx(t, r, s, n, !0);
        return o > -1
      }
      return !(!this._eventEmitter || !this._eventEmitter.has.apply(this._eventEmitter, arguments))
    }, r.trigger = function(t, e, i, n) {
      t = this._parseEventNames(t), t = this._cleanStringData(t);
      var r, s, o, a = t.length;
      for ("string" == typeof e ? (r = this._cleanStringData(e), s = i) : (s = e, n = i), o = 0; o < a; o++) this._triggerDOMEvents(t[o], s, r);
      return this
    }, r.emitterTrigger = function(t, e, i) {
      if (!this._eventEmitter) return this;
      t = this._parseEventNames(t), t = this._cleanStringData(t), e = new a(e, this);
      var n, r = t.length;
      for (n = 0; n < r; n++) this._eventEmitter.trigger(t[n], e, i);
      return this
    }, r.propagateTo = function(t, e) {
      return this._eventEmitter.propagateTo(t, e), this
    }, r.stopPropagatingTo = function(t) {
      return this._eventEmitter.stopPropagatingTo(t), this
    }, r.stopImmediatePropagation = function() {
      return this._eventEmitter.stopImmediatePropagation(), this
    }, r.destroy = function() {
      this._triggerInternalEvent("willdestroy"), this.off();
      var t;
      for (t in this) this.hasOwnProperty(t) && (this[t] = null)
    }, r._parseEventNames = function(t) {
      return t ? t.split(" ") : [t]
    }, r._onListenerEvent = function(t, e) {
      var i = new a(e, this);
      this._eventEmitter.trigger(t, i, !1)
    }, r._setListener = function(t) {
      this._bindings[t] = this._onListenerEvent.bind(this, t), c.addEventListener(this.el, t, this._bindings[t])
    }, r._removeListener = function(t) {
      c.removeEventListener(this.el, t, this._bindings[t]), this._bindings[t] = null
    }, r._triggerInternalEvent = function(t, e) {
      this.emitterTrigger(u + ":" + t, e)
    }, r._normalizeArgumentsAndCall = function(t, e) {
      var i = {};
      if (0 === t.length) return void e.call(this, i);
      if ("string" == typeof t[0] || null === t[0]) return t = this._cleanStringData(t), i.events = t[0], "string" == typeof t[1] ? (i.delegateQuery = t[1], i.callback = t[2], i.context = t[3]) : (i.callback = t[1], i.context = t[2]), void e.call(this, i);
      var n, r, s = ":",
        o = t[0];
      for (n in o) o.hasOwnProperty(n) && (i = {}, r = this._cleanStringData(n.split(s)), i.events = r[0], i.delegateQuery = r[1], i.callback = o[n], i.context = t[1], e.call(this, i))
    }, r._registerDelegateFunc = function(t, e, i, n, r) {
      var s = this._delegateFunc.bind(this, t, e, i, r);
      return this._delegateFuncs[e] = this._delegateFuncs[e] || {}, this._delegateFuncs[e][t] = this._delegateFuncs[e][t] || [], this._delegateFuncs[e][t].push({
        func: n,
        context: r,
        delegateFunc: s
      }), s
    }, r._cleanStringData = function(t) {
      var e = !1;
      "string" == typeof t && (t = [t], e = !0);
      var i, n, r, s = [],
        o = t.length;
      for (i = 0; i < o; i++) {
        if (n = t[i], "string" == typeof n) {
          if ("" === n || " " === n) continue;
          for (r = n.length;
            " " === n[0];) n = n.slice(1, r), r--;
          for (;
            " " === n[r - 1];) n = n.slice(0, r - 1), r--
        }
        s.push(n)
      }
      return e ? s[0] : s
    }, r._unregisterDelegateFunc = function(t, e, i, n) {
      if (this._delegateFuncs[e] && this._delegateFuncs[e][t]) {
        var r, s = this._getDelegateFuncBindingIdx(t, e, i, n);
        return s > -1 && (r = this._delegateFuncs[e][t][s].delegateFunc, this._delegateFuncs[e][t].splice(s, 1), 0 === this._delegateFuncs[e][t].length && (this._delegateFuncs[e][t] = null)), r
      }
    }, r._unregisterDelegateFuncs = function(t, e) {
      if (this._delegateFuncs[e] && (null === t || this._delegateFuncs[e][t]))
        if (null !== t) this._unbindDelegateFunc(t, e);
        else {
          var i;
          for (i in this._delegateFuncs[e]) this._delegateFuncs[e].hasOwnProperty(i) && this._unbindDelegateFunc(i, e)
        }
    }, r._unbindDelegateFunc = function(t, e) {
      for (var i, n, r = 0; this._delegateFuncs[e][t] && this._delegateFuncs[e][t][r];) i = this._delegateFuncs[e][t][r], n = this._delegateFuncs[e][t][r].length, this._off({
        events: t,
        delegateQuery: e,
        callback: i.func,
        context: i.context
      }), this._delegateFuncs[e][t] && n === this._delegateFuncs[e][t].length && r++;
      i = n = null
    }, r._unregisterDelegateFuncsByEvent = function(t) {
      var e;
      for (e in this._delegateFuncs) this._delegateFuncs.hasOwnProperty(e) && this._unregisterDelegateFuncs(t, e)
    }, r._delegateFunc = function(t, e, i, n, r) {
      if (this._targetHasDelegateAncestor(r.target, e)) {
        var o = Array.prototype.slice.call(arguments, 0),
          a = o.slice(4, o.length);
        n = n || window, "object" === s(r.detail) && (a[0] = r.detail), i.apply(n, a)
      }
    }, r._targetHasDelegateAncestor = function(t, e) {
      for (var i = t; i && i !== this.el && i !== document.documentElement;) {
        if (l.matchesSelector(i, e)) return !0;
        i = i.parentNode
      }
      return !1
    }, r._on = function(t) {
      var e = t.events,
        i = t.callback,
        n = t.delegateQuery,
        r = t.context,
        s = t.unboundCallback || i;
      e = this._parseEventNames(e), e.forEach(function(t, e, i, n, r) {
        this.has(r) || this._setListener(r), "string" == typeof n && (t = this._registerDelegateFunc(r, n, t, e, i)), this._triggerInternalEvent("willon", {
          evt: r,
          callback: t,
          context: i,
          delegateQuery: n
        }), this._eventEmitter.on(r, t, i), this._triggerInternalEvent("didon", {
          evt: r,
          callback: t,
          context: i,
          delegateQuery: n
        })
      }.bind(this, i, s, r, n)), e = i = s = n = r = null
    }, r._off = function(t) {
      var e = t.events,
        i = t.callback,
        n = t.delegateQuery,
        r = t.context,
        s = t.unboundCallback || i;
      if ("undefined" != typeof e) e = this._parseEventNames(e), e.forEach(function(t, e, i, n, r) {
        if ("string" != typeof n || "function" != typeof e || (t = this._unregisterDelegateFunc(r, n, e, i))) return "string" == typeof n && "undefined" == typeof t ? void this._unregisterDelegateFuncs(r, n) : void("string" == typeof r && "undefined" == typeof t && (this._unregisterDelegateFuncsByEvent(r), "string" == typeof n) || (this._triggerInternalEvent("willoff", {
          evt: r,
          callback: t,
          context: i,
          delegateQuery: n
        }), this._eventEmitter.off(r, t, i), this._triggerInternalEvent("didoff", {
          evt: r,
          callback: t,
          context: i,
          delegateQuery: n
        }), this.has(r) || this._removeListener(r)))
      }.bind(this, i, s, r, n)), e = i = s = n = r = null;
      else {
        this._eventEmitter.off();
        var o;
        for (o in this._bindings) this._bindings.hasOwnProperty(o) && this._removeListener(o);
        for (o in this._delegateFuncs) this._delegateFuncs.hasOwnProperty(o) && (this._delegateFuncs[o] = null)
      }
    }, r._once = function(t) {
      var e = t.events,
        i = t.callback,
        n = t.delegateQuery,
        r = t.context;
      e = this._parseEventNames(e), e.forEach(function(t, e, i, n) {
        return "string" == typeof i ? this._handleDelegateOnce(n, t, e, i) : (this.has(n) || this._setListener(n), this._triggerInternalEvent("willonce", {
          evt: n,
          callback: t,
          context: e,
          delegateQuery: i
        }), this._eventEmitter.once.call(this, n, t, e), void this._triggerInternalEvent("didonce", {
          evt: n,
          callback: t,
          context: e,
          delegateQuery: i
        }))
      }.bind(this, i, r, n)), e = i = n = r = null
    }, r._handleDelegateOnce = function(t, e, i, n) {
      return this._triggerInternalEvent("willonce", {
        evt: t,
        callback: e,
        context: i,
        delegateQuery: n
      }), this._on({
        events: t,
        context: i,
        delegateQuery: n,
        callback: this._getDelegateOnceCallback.bind(this, t, e, i, n),
        unboundCallback: e
      }), this._triggerInternalEvent("didonce", {
        evt: t,
        callback: e,
        context: i,
        delegateQuery: n
      }), this
    }, r._getDelegateOnceCallback = function(t, e, i, n) {
      var r = Array.prototype.slice.call(arguments, 0),
        s = r.slice(4, r.length);
      e.apply(i, s), this._off({
        events: t,
        delegateQuery: n,
        callback: e,
        context: i
      })
    }, r._getDelegateFuncBindingIdx = function(t, e, i, n, r) {
      var s = -1;
      if (this._delegateFuncs[e] && this._delegateFuncs[e][t]) {
        var o, a, c = this._delegateFuncs[e][t].length;
        for (o = 0; o < c; o++)
          if (a = this._delegateFuncs[e][t][o], r && "undefined" == typeof i && (i = a.func), a.func === i && a.context === n) {
            s = o;
            break
          }
      }
      return s
    }, r._triggerDOMEvents = function(t, e, i) {
      var n = [this.el];
      i && (n = l.querySelectorAll(i, this.el));
      var r, s = n.length;
      for (r = 0; r < s; r++) c.dispatchEvent(n[r], t, {
        bubbles: !0,
        cancelable: !0,
        detail: e
      })
    }, e.exports = n
  }, {
    "./DOMEmitterEvent": 70,
    "@marcom/ac-dom-events/addEventListener": 71,
    "@marcom/ac-dom-events/dispatchEvent": 72,
    "@marcom/ac-dom-events/removeEventListener": 75,
    "@marcom/ac-dom-traversal/matchesSelector": 117,
    "@marcom/ac-dom-traversal/querySelectorAll": 119,
    "ac-event-emitter": 522
  }],
  70: [function(t, e, i) {
    "use strict";
    var n, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      s = {
        preventDefault: t("@marcom/ac-dom-events/preventDefault"),
        stopPropagation: t("@marcom/ac-dom-events/stopPropagation"),
        target: t("@marcom/ac-dom-events/target")
      },
      o = function(t, e) {
        this._domEmitter = e, this.originalEvent = t || {}, this._originalTarget = s.target(this.originalEvent), this.target = this._originalTarget || this._domEmitter.el, this.currentTarget = this._domEmitter.el, this.timeStamp = this.originalEvent.timeStamp || Date.now(), this._isDOMEvent(this.originalEvent) ? "object" === r(this.originalEvent.detail) && (this.data = this.originalEvent.detail) : t && (this.data = this.originalEvent, this.originalEvent = {})
      };
    n = o.prototype, n.preventDefault = function() {
      s.preventDefault(this.originalEvent)
    }, n.stopPropagation = function() {
      s.stopPropagation(this.originalEvent)
    }, n.stopImmediatePropagation = function() {
      this.originalEvent.stopImmediatePropagation && this.originalEvent.stopImmediatePropagation(), this._domEmitter.stopImmediatePropagation()
    }, n._isDOMEvent = function(t) {
      return !!(this._originalTarget || "undefined" !== document.createEvent && "undefined" != typeof CustomEvent && t instanceof CustomEvent)
    }, e.exports = o
  }, {
    "@marcom/ac-dom-events/preventDefault": 74,
    "@marcom/ac-dom-events/stopPropagation": 78,
    "@marcom/ac-dom-events/target": 79
  }],
  71: [function(t, e, i) {
    "use strict";
    var n = t("./utils/addEventListener"),
      r = t("./shared/getEventType");
    e.exports = function(t, e, i, s) {
      return e = r(t, e), n(t, e, i, s)
    }
  }, {
    "./shared/getEventType": 76,
    "./utils/addEventListener": 80
  }],
  72: [function(t, e, i) {
    "use strict";
    var n = t("./utils/dispatchEvent"),
      r = t("./shared/getEventType");
    e.exports = function(t, e, i) {
      return e = r(t, e), n(t, e, i)
    }
  }, {
    "./shared/getEventType": 76,
    "./utils/dispatchEvent": 81
  }],
  73: [function(t, e, i) {
    "use strict";
    e.exports = {
      addEventListener: t("./addEventListener"),
      dispatchEvent: t("./dispatchEvent"),
      preventDefault: t("./preventDefault"),
      removeEventListener: t("./removeEventListener"),
      stop: t("./stop"),
      stopPropagation: t("./stopPropagation"),
      target: t("./target")
    }
  }, {
    "./addEventListener": 71,
    "./dispatchEvent": 72,
    "./preventDefault": 74,
    "./removeEventListener": 75,
    "./stop": 77,
    "./stopPropagation": 78,
    "./target": 79
  }],
  74: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      t = t || window.event, t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }
  }, {}],
  75: [function(t, e, i) {
    "use strict";
    var n = t("./utils/removeEventListener"),
      r = t("./shared/getEventType");
    e.exports = function(t, e, i, s) {
      return e = r(t, e), n(t, e, i, s)
    }
  }, {
    "./shared/getEventType": 76,
    "./utils/removeEventListener": 82
  }],
  76: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-prefixer/getEventType");
    e.exports = function(t, e) {
      var i, r;
      return i = "tagName" in t ? t.tagName : t === window ? "window" : "document", r = n(e, i), r ? r : e
    }
  }, {
    "@marcom/ac-prefixer/getEventType": 317
  }],
  77: [function(t, e, i) {
    "use strict";
    var n = t("./stopPropagation"),
      r = t("./preventDefault");
    e.exports = function(t) {
      t = t || window.event, n(t), r(t), t.stopped = !0, t.returnValue = !1
    }
  }, {
    "./preventDefault": 74,
    "./stopPropagation": 78
  }],
  78: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      t = t || window.event, t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
    }
  }, {}],
  79: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return t = t || window.event, "undefined" != typeof t.target ? t.target : t.srcElement
    }
  }, {}],
  80: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i, n) {
      return t.addEventListener ? t.addEventListener(e, i, !!n) : t.attachEvent("on" + e, i), t
    }
  }, {}],
  81: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/CustomEvent"), e.exports = function(t, e, i) {
      var n;
      return t.dispatchEvent ? (n = i ? new CustomEvent(e, i) : new CustomEvent(e), t.dispatchEvent(n)) : (n = document.createEventObject(), i && "detail" in i && (n.detail = i.detail), t.fireEvent("on" + e, n)), t
    }
  }, {
    "@marcom/ac-polyfills/CustomEvent": void 0
  }],
  82: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i, n) {
      return t.removeEventListener ? t.removeEventListener(e, i, !!n) : t.detachEvent("on" + e, i), t
    }
  }, {}],
  83: [function(t, e, i) {
    "use strict";
    e.exports = 8
  }, {}],
  84: [function(t, e, i) {
    "use strict";
    e.exports = 11
  }, {}],
  85: [function(t, e, i) {
    "use strict";
    e.exports = 9
  }, {}],
  86: [function(t, e, i) {
    "use strict";
    e.exports = 10
  }, {}],
  87: [function(t, e, i) {
    "use strict";
    e.exports = 1
  }, {}],
  88: [function(t, e, i) {
    "use strict";
    e.exports = 3
  }, {}],
  89: [function(t, e, i) {
    "use strict";
    e.exports = {
      createDocumentFragment: t("./createDocumentFragment"),
      filterByNodeType: t("./filterByNodeType"),
      hasAttribute: t("./hasAttribute"),
      indexOf: t("./indexOf"),
      insertAfter: t("./insertAfter"),
      insertBefore: t("./insertBefore"),
      insertFirstChild: t("./insertFirstChild"),
      insertLastChild: t("./insertLastChild"),
      isComment: t("./isComment"),
      isDocument: t("./isDocument"),
      isDocumentFragment: t("./isDocumentFragment"),
      isDocumentType: t("./isDocumentType"),
      isElement: t("./isElement"),
      isNode: t("./isNode"),
      isNodeList: t("./isNodeList"),
      isTextNode: t("./isTextNode"),
      remove: t("./remove"),
      replace: t("./replace"),
      COMMENT_NODE: t("./COMMENT_NODE"),
      DOCUMENT_FRAGMENT_NODE: t("./DOCUMENT_FRAGMENT_NODE"),
      DOCUMENT_NODE: t("./DOCUMENT_NODE"),
      DOCUMENT_TYPE_NODE: t("./DOCUMENT_TYPE_NODE"),
      ELEMENT_NODE: t("./ELEMENT_NODE"),
      TEXT_NODE: t("./TEXT_NODE")
    }
  }, {
    "./COMMENT_NODE": 83,
    "./DOCUMENT_FRAGMENT_NODE": 84,
    "./DOCUMENT_NODE": 85,
    "./DOCUMENT_TYPE_NODE": 86,
    "./ELEMENT_NODE": 87,
    "./TEXT_NODE": 88,
    "./createDocumentFragment": 90,
    "./filterByNodeType": 91,
    "./hasAttribute": 92,
    "./indexOf": 93,
    "./insertAfter": 94,
    "./insertBefore": 95,
    "./insertFirstChild": 96,
    "./insertLastChild": 97,
    "./isComment": 100,
    "./isDocument": 101,
    "./isDocumentFragment": 102,
    "./isDocumentType": 103,
    "./isElement": 104,
    "./isNode": 105,
    "./isNodeList": 106,
    "./isTextNode": 107,
    "./remove": 108,
    "./replace": 109
  }],
  90: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e, i = document.createDocumentFragment();
      if (t)
        for (e = document.createElement("div"), e.innerHTML = t; e.firstChild;) i.appendChild(e.firstChild);
      return i
    }
  }, {}],
  91: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.slice"), t("@marcom/ac-polyfills/Array/prototype.filter");
    var n = t("./internal/isNodeType"),
      r = t("./ELEMENT_NODE");
    e.exports = function(t, e) {
      return e = e || r, t = Array.prototype.slice.call(t), t.filter(function(t) {
        return n(t, e)
      })
    }
  }, {
    "./ELEMENT_NODE": 87,
    "./internal/isNodeType": 98,
    "@marcom/ac-polyfills/Array/prototype.filter": void 0,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0
  }],
  92: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e) {
      return "hasAttribute" in t ? t.hasAttribute(e) : null !== t.attributes.getNamedItem(e)
    }
  }, {}],
  93: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.indexOf"), t("@marcom/ac-polyfills/Array/prototype.slice");
    var n = (t("./internal/validate"), t("./filterByNodeType"));
    e.exports = function(t, e) {
      var i, r = t.parentNode;
      return r ? (i = r.childNodes, i = e !== !1 ? n(i, e) : Array.prototype.slice.call(i), i.indexOf(t)) : 0
    }
  }, {
    "./filterByNodeType": 91,
    "./internal/validate": 99,
    "@marcom/ac-polyfills/Array/prototype.indexOf": void 0,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0
  }],
  94: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate");
    e.exports = function(t, e) {
      return n.insertNode(t, !0, "insertAfter"), n.childNode(e, !0, "insertAfter"), n.hasParentNode(e, "insertAfter"), e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t)
    }
  }, {
    "./internal/validate": 99
  }],
  95: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate");
    e.exports = function(t, e) {
      return n.insertNode(t, !0, "insertBefore"), n.childNode(e, !0, "insertBefore"), n.hasParentNode(e, "insertBefore"), e.parentNode.insertBefore(t, e)
    }
  }, {
    "./internal/validate": 99
  }],
  96: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate");
    e.exports = function(t, e) {
      return n.insertNode(t, !0, "insertFirstChild"), n.parentNode(e, !0, "insertFirstChild"), e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
    }
  }, {
    "./internal/validate": 99
  }],
  97: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate");
    e.exports = function(t, e) {
      return n.insertNode(t, !0, "insertLastChild"), n.parentNode(e, !0, "insertLastChild"), e.appendChild(t)
    }
  }, {
    "./internal/validate": 99
  }],
  98: [function(t, e, i) {
    "use strict";
    var n = t("../isNode");
    e.exports = function(t, e) {
      return !!n(t) && ("number" == typeof e ? t.nodeType === e : e.indexOf(t.nodeType) !== -1)
    }
  }, {
    "../isNode": 105
  }],
  99: [function(t, e, i) {
    "use strict";
    var n = t("./isNodeType"),
      r = t("../COMMENT_NODE"),
      s = t("../DOCUMENT_FRAGMENT_NODE"),
      o = t("../ELEMENT_NODE"),
      a = t("../TEXT_NODE"),
      c = [o, a, r, s],
      l = " must be an Element, TextNode, Comment, or Document Fragment",
      u = [o, a, r],
      h = " must be an Element, TextNode, or Comment",
      d = [o, s],
      m = " must be an Element, or Document Fragment",
      f = " must have a parentNode";
    e.exports = {
      parentNode: function(t, e, i, r) {
        if (r = r || "target", (t || e) && !n(t, d)) throw new TypeError(i + ": " + r + m)
      },
      childNode: function(t, e, i, r) {
        if (r = r || "target", (t || e) && !n(t, u)) throw new TypeError(i + ": " + r + h)
      },
      insertNode: function(t, e, i, r) {
        if (r = r || "node", (t || e) && !n(t, c)) throw new TypeError(i + ": " + r + l)
      },
      hasParentNode: function(t, e, i) {
        if (i = i || "target", !t.parentNode) throw new TypeError(e + ": " + i + f)
      }
    }
  }, {
    "../COMMENT_NODE": 83,
    "../DOCUMENT_FRAGMENT_NODE": 84,
    "../ELEMENT_NODE": 87,
    "../TEXT_NODE": 88,
    "./isNodeType": 98
  }],
  100: [function(t, e, i) {
    "use strict";
    var n = t("./internal/isNodeType"),
      r = t("./COMMENT_NODE");
    e.exports = function(t) {
      return n(t, r)
    }
  }, {
    "./COMMENT_NODE": 83,
    "./internal/isNodeType": 98
  }],
  101: [function(t, e, i) {
    "use strict";
    var n = t("./internal/isNodeType"),
      r = t("./DOCUMENT_NODE");
    e.exports = function(t) {
      return n(t, r)
    }
  }, {
    "./DOCUMENT_NODE": 85,
    "./internal/isNodeType": 98
  }],
  102: [function(t, e, i) {
    "use strict";
    var n = t("./internal/isNodeType"),
      r = t("./DOCUMENT_FRAGMENT_NODE");
    e.exports = function(t) {
      return n(t, r)
    }
  }, {
    "./DOCUMENT_FRAGMENT_NODE": 84,
    "./internal/isNodeType": 98
  }],
  103: [function(t, e, i) {
    "use strict";
    var n = t("./internal/isNodeType"),
      r = t("./DOCUMENT_TYPE_NODE");
    e.exports = function(t) {
      return n(t, r)
    }
  }, {
    "./DOCUMENT_TYPE_NODE": 86,
    "./internal/isNodeType": 98
  }],
  104: [function(t, e, i) {
    "use strict";
    var n = t("./internal/isNodeType"),
      r = t("./ELEMENT_NODE");
    e.exports = function(t) {
      return n(t, r)
    }
  }, {
    "./ELEMENT_NODE": 87,
    "./internal/isNodeType": 98
  }],
  105: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return !(!t || !t.nodeType)
    }
  }, {}],
  106: [function(t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      r = /^\[object (HTMLCollection|NodeList|Object)\]$/;
    e.exports = function(t) {
      return !!t && ("number" == typeof t.length && (!!("object" !== n(t[0]) || t[0] && t[0].nodeType) && r.test(Object.prototype.toString.call(t))))
    }
  }, {}],
  107: [function(t, e, i) {
    "use strict";
    var n = t("./internal/isNodeType"),
      r = t("./TEXT_NODE");
    e.exports = function(t) {
      return n(t, r)
    }
  }, {
    "./TEXT_NODE": 88,
    "./internal/isNodeType": 98
  }],
  108: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate");
    e.exports = function(t) {
      return n.childNode(t, !0, "remove"), t.parentNode ? t.parentNode.removeChild(t) : t
    }
  }, {
    "./internal/validate": 99
  }],
  109: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate");
    e.exports = function(t, e) {
      return n.insertNode(t, !0, "insertFirstChild", "newNode"), n.childNode(e, !0, "insertFirstChild", "oldNode"), n.hasParentNode(e, "insertFirstChild", "oldNode"), e.parentNode.replaceChild(t, e)
    }
  }, {
    "./internal/validate": 99
  }],
  110: [function(t, e, i) {
    "use strict";
    e.exports = {
      getStyle: t("./getStyle"),
      setStyle: t("./setStyle")
    }
  }, {
    "./getStyle": 111,
    "./setStyle": 113
  }],
  111: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-prefixer/getStyleProperty"),
      r = t("@marcom/ac-prefixer/stripPrefixes");
    e.exports = function() {
      var t, e, i, s, o = Array.prototype.slice.call(arguments),
        a = o.shift(o),
        c = window.getComputedStyle(a),
        l = {};
      for ("string" != typeof o[0] && (o = o[0]), s = 0; s < o.length; s++) t = o[s], e = n(t), e ? (t = r(e), i = c[e], i && "auto" !== i || (i = null), i && (i = r(i))) : i = null, l[t] = i;
      return l
    }
  }, {
    "@marcom/ac-prefixer/getStyleProperty": 319,
    "@marcom/ac-prefixer/stripPrefixes": 327
  }],
  112: [function(t, e, i) {
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
  113: [function(t, e, i) {
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
      var i, a, c, l, u, h = "";
      if ("object" !== ("undefined" == typeof e ? "undefined" : n(e))) throw new TypeError("setStyle: styles must be an Object");
      for (a in e) l = o(e[a]), l || 0 === l ? (i = r(a, l), i !== !1 && (h += " " + i)) : (c = s(a), "removeAttribute" in t.style ? t.style.removeAttribute(c) : t.style[c] = "");
      return h.length && (u = t.style.cssText, ";" !== u.charAt(u.length - 1) && (u += ";"), u += h, t.style.cssText = u), t
    }
  }, {
    "./internal/normalizeValue": 112,
    "@marcom/ac-prefixer/getStyleCSS": 318,
    "@marcom/ac-prefixer/getStyleProperty": 319
  }],
  114: [function(t, e, i) {
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
    "./internal/validate": 116,
    "./matchesSelector": 117,
    "@marcom/ac-dom-nodes/isElement": 104
  }],
  115: [function(t, e, i) {
    "use strict";
    e.exports = window.Element ? function(t) {
      return t.matches || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector
    }(Element.prototype) : null
  }, {}],
  116: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.indexOf");
    var n = t("@marcom/ac-dom-nodes/isNode"),
      r = t("@marcom/ac-dom-nodes/COMMENT_NODE"),
      s = t("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE"),
      o = t("@marcom/ac-dom-nodes/DOCUMENT_NODE"),
      a = t("@marcom/ac-dom-nodes/ELEMENT_NODE"),
      c = t("@marcom/ac-dom-nodes/TEXT_NODE"),
      l = function(t, e) {
        return !!n(t) && ("number" == typeof e ? t.nodeType === e : e.indexOf(t.nodeType) !== -1)
      },
      u = [a, o, s],
      h = " must be an Element, Document, or Document Fragment",
      d = [a, c, r],
      m = " must be an Element, TextNode, or Comment",
      f = " must be a string";
    e.exports = {
      parentNode: function(t, e, i, n) {
        if (n = n || "node", (t || e) && !l(t, u)) throw new TypeError(i + ": " + n + h)
      },
      childNode: function(t, e, i, n) {
        if (n = n || "node", (t || e) && !l(t, d)) throw new TypeError(i + ": " + n + m)
      },
      selector: function(t, e, i, n) {
        if (n = n || "selector", (t || e) && "string" != typeof t) throw new TypeError(i + ": " + n + f)
      }
    }
  }, {
    "@marcom/ac-dom-nodes/COMMENT_NODE": 83,
    "@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE": 84,
    "@marcom/ac-dom-nodes/DOCUMENT_NODE": 85,
    "@marcom/ac-dom-nodes/ELEMENT_NODE": 87,
    "@marcom/ac-dom-nodes/TEXT_NODE": 88,
    "@marcom/ac-dom-nodes/isNode": 105,
    "@marcom/ac-polyfills/Array/prototype.indexOf": void 0
  }],
  117: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-nodes/isElement"),
      r = t("./internal/validate"),
      s = t("./internal/nativeMatches"),
      o = t("./shims/matchesSelector");
    e.exports = function(t, e) {
      return r.selector(e, !0, "matchesSelector"), !!n(t) && (s ? s.call(t, e) : o(t, e))
    }
  }, {
    "./internal/nativeMatches": 115,
    "./internal/validate": 116,
    "./shims/matchesSelector": 120,
    "@marcom/ac-dom-nodes/isElement": 104
  }],
  118: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate"),
      r = t("./shims/querySelector"),
      s = "querySelector" in document;
    e.exports = function(t, e) {
      return e = e || document, n.parentNode(e, !0, "querySelector", "context"), n.selector(t, !0, "querySelector"), s ? e.querySelector(t) : r(t, e)
    }
  }, {
    "./internal/validate": 116,
    "./shims/querySelector": 121
  }],
  119: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.slice");
    var n = t("./internal/validate"),
      r = t("./shims/querySelectorAll"),
      s = "querySelectorAll" in document;
    e.exports = function(t, e) {
      return e = e || document, n.parentNode(e, !0, "querySelectorAll", "context"), n.selector(t, !0, "querySelectorAll"), s ? Array.prototype.slice.call(e.querySelectorAll(t)) : r(t, e)
    }
  }, {
    "./internal/validate": 116,
    "./shims/querySelectorAll": 122,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0
  }],
  120: [function(t, e, i) {
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
    "../querySelectorAll": 119
  }],
  121: [function(t, e, i) {
    "use strict";
    var n = t("./querySelectorAll");
    e.exports = function(t, e) {
      var i = n(t, e);
      return i.length ? i[0] : null
    }
  }, {
    "./querySelectorAll": 122
  }],
  122: [function(t, e, i) {
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
      c = function(t) {
        "recalc" in t ? t.recalc(!1) : document.recalc(!1), window.scrollBy(0, 0)
      };
    e.exports = function(t, e) {
      var i, n = document.createElement("style"),
        l = o + (Math.random() + "").slice(-6),
        u = [];
      for (e = e || document, document[l] = [], r(e) ? e.appendChild(n) : document.documentElement.firstChild.appendChild(n), n.styleSheet.cssText = "*{display:recalc;}" + t + '{ac-qsa:expression(document["' + l + '"] && document["' + l + '"].push(this));}', c(e); document[l].length;) i = document[l].shift(), i.style.removeAttribute("ac-qsa"), u.indexOf(i) === -1 && a(i, e) && u.push(i);
      return document[l] = null, s(n), c(e), u
    }
  }, {
    "@marcom/ac-dom-nodes/isDocumentFragment": 102,
    "@marcom/ac-dom-nodes/isElement": 104,
    "@marcom/ac-dom-nodes/remove": 108,
    "@marcom/ac-polyfills/Array/prototype.indexOf": void 0
  }],
  123: [function(t, e, i) {
    "use strict";
    e.exports = {
      createBezier: t("./ac-easing/createBezier"),
      createPredefined: t("./ac-easing/createPredefined"),
      createStep: t("./ac-easing/createStep"),
      Ease: t("./ac-easing/Ease")
    }
  }, {
    "./ac-easing/Ease": 124,
    "./ac-easing/createBezier": 125,
    "./ac-easing/createPredefined": 126,
    "./ac-easing/createStep": 127
  }],
  124: [function(t, e, i) {
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
  125: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.every");
    var n = t("./Ease"),
      r = t("./helpers/KeySpline"),
      s = "Bezier curve expects exactly four (4) numbers. Given: ";
    e.exports = function(t, e, i, o) {
      var a = Array.prototype.slice.call(arguments),
        c = a.every(function(t) {
          return "number" == typeof t
        });
      if (4 !== a.length || !c) throw new TypeError(s + a);
      var l = new r(t, e, i, o),
        u = function(t, e, i, n) {
          return l.get(t / n) * i + e
        },
        h = "cubic-bezier(" + a.join(", ") + ")";
      return new n(u, h)
    }
  }, {
    "./Ease": 124,
    "./helpers/KeySpline": 128,
    "@marcom/ac-polyfills/Array/prototype.every": void 0
  }],
  126: [function(t, e, i) {
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
    "./Ease": 124,
    "./createStep": 127,
    "./helpers/cssAliases": 129,
    "./helpers/easingFunctions": 130
  }],
  127: [function(t, e, i) {
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
    "./Ease": 124
  }],
  128: [function(t, e, i) {
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

      function c(t, e, i) {
        return 3 * r(e, i) * t * t + 2 * s(e, i) * t + o(e)
      }

      function l(e) {
        for (var n = e, r = 0; r < 4; ++r) {
          var s = c(n, t, i);
          if (0 === s) return n;
          var o = a(n, t, i) - e;
          n -= o / s
        }
        return n
      }
      this.get = function(r) {
        return t === e && i === n ? r : a(l(r), e, n)
      }
    }
    e.exports = n
  }, {}],
  129: [function(t, e, i) {
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
  130: [function(t, e, i) {
    "use strict";
    var n = t("../createBezier"),
      r = n(.25, .1, .25, 1).easingFunction,
      s = n(.42, 0, 1, 1).easingFunction,
      o = n(0, 0, .58, 1).easingFunction,
      a = n(.42, 0, .58, 1).easingFunction,
      c = function(t, e, i, n) {
        return i * t / n + e
      },
      l = function(t, e, i, n) {
        return i * (t /= n) * t + e
      },
      u = function(t, e, i, n) {
        return -i * (t /= n) * (t - 2) + e
      },
      h = function(t, e, i, n) {
        return (t /= n / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e
      },
      d = function(t, e, i, n) {
        return i * (t /= n) * t * t + e
      },
      m = function(t, e, i, n) {
        return i * ((t = t / n - 1) * t * t + 1) + e
      },
      f = function(t, e, i, n) {
        return (t /= n / 2) < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e
      },
      p = function(t, e, i, n) {
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
      x = function(t, e, i, n) {
        return 0 === t ? e : t === n ? e + i : (t /= n / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : i / 2 * (-Math.pow(2, -10 * --t) + 2) + e
      },
      A = function(t, e, i, n) {
        return -i * (Math.sqrt(1 - (t /= n) * t) - 1) + e
      },
      k = function(t, e, i, n) {
        return i * Math.sqrt(1 - (t = t / n - 1) * t) + e
      },
      P = function(t, e, i, n) {
        return (t /= n / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + e : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
      },
      O = function(t, e, i, n) {
        var r = 1.70158,
          s = 0,
          o = i;
        return 0 === t ? e : 1 === (t /= n) ? e + i : (s || (s = .3 * n), o < Math.abs(i) ? (o = i, r = s / 4) : r = s / (2 * Math.PI) * Math.asin(i / o), -(o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - r) * (2 * Math.PI) / s)) + e)
      },
      I = function(t, e, i, n) {
        var r = 1.70158,
          s = 0,
          o = i;
        return 0 === t ? e : 1 === (t /= n) ? e + i : (s || (s = .3 * n), o < Math.abs(i) ? (o = i, r = s / 4) : r = s / (2 * Math.PI) * Math.asin(i / o), o * Math.pow(2, -10 * t) * Math.sin((t * n - r) * (2 * Math.PI) / s) + i + e)
      },
      D = function(t, e, i, n) {
        var r = 1.70158,
          s = 0,
          o = i;
        return 0 === t ? e : 2 === (t /= n / 2) ? e + i : (s || (s = n * (.3 * 1.5)), o < Math.abs(i) ? (o = i, r = s / 4) : r = s / (2 * Math.PI) * Math.asin(i / o), t < 1 ? -.5 * (o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - r) * (2 * Math.PI) / s)) + e : o * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * n - r) * (2 * Math.PI) / s) * .5 + i + e)
      },
      L = function(t, e, i, n, r) {
        return void 0 === r && (r = 1.70158), i * (t /= n) * t * ((r + 1) * t - r) + e
      },
      M = function(t, e, i, n, r) {
        return void 0 === r && (r = 1.70158), i * ((t = t / n - 1) * t * ((r + 1) * t + r) + 1) + e
      },
      F = function(t, e, i, n, r) {
        return void 0 === r && (r = 1.70158), (t /= n / 2) < 1 ? i / 2 * (t * t * (((r *= 1.525) + 1) * t - r)) + e : i / 2 * ((t -= 2) * t * (((r *= 1.525) + 1) * t + r) + 2) + e
      },
      R = function(t, e, i, n) {
        return (t /= n) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
      },
      N = function(t, e, i, n) {
        return i - R(n - t, 0, i, n) + e
      },
      j = function(t, e, i, n) {
        return t < n / 2 ? .5 * N(2 * t, 0, i, n) + e : .5 * R(2 * t - n, 0, i, n) + .5 * i + e
      };
    e.exports = {
      linear: c,
      ease: r,
      easeIn: s,
      "ease-in": s,
      easeOut: o,
      "ease-out": o,
      easeInOut: a,
      "ease-in-out": a,
      easeInCubic: d,
      "ease-in-cubic": d,
      easeOutCubic: m,
      "ease-out-cubic": m,
      easeInOutCubic: f,
      "ease-in-out-cubic": f,
      easeInQuad: l,
      "ease-in-quad": l,
      easeOutQuad: u,
      "ease-out-quad": u,
      easeInOutQuad: h,
      "ease-in-out-quad": h,
      easeInQuart: p,
      "ease-in-quart": p,
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
      easeInOutExpo: x,
      "ease-in-out-expo": x,
      easeInCirc: A,
      "ease-in-circ": A,
      easeOutCirc: k,
      "ease-out-circ": k,
      easeInOutCirc: P,
      "ease-in-out-circ": P,
      easeInBack: L,
      "ease-in-back": L,
      easeOutBack: M,
      "ease-out-back": M,
      easeInOutBack: F,
      "ease-in-out-back": F,
      easeInElastic: O,
      "ease-in-elastic": O,
      easeOutElastic: I,
      "ease-out-elastic": I,
      easeInOutElastic: D,
      "ease-in-out-elastic": D,
      easeInBounce: N,
      "ease-in-bounce": N,
      easeOutBounce: R,
      "ease-out-bounce": R,
      easeInOutBounce: j,
      "ease-in-out-bounce": j
    }
  }, {
    "../createBezier": 125
  }],
  131: [function(t, e, i) {
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
    "./utils/getBoundingClientRect": 132
  }],
  132: [function(t, e, i) {
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
  133: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n) {
      return t.nodeType ? void 0 === r || n && n.inlineStyles ? new a(t, e, i, n) : new c(t, e, i, n) : new o(t, e, i, n)
    }
    t("./helpers/Float32Array");
    var r = t("./helpers/transitionEnd"),
      s = t("@marcom/ac-clip").Clip,
      o = t("./clips/ClipEasing"),
      a = t("./clips/ClipInlineCss"),
      c = t("./clips/ClipTransitionCss");
    for (var l in s) "function" == typeof s[l] && "_" !== l.substr(0, 1) && (n[l] = s[l].bind(s));
    n.to = function(t, e, i, r) {
      return r = r || {}, void 0 === r.destroyOnComplete && (r.destroyOnComplete = !0), new n(t, e, i, r).play()
    }, n.from = function(t, e, i, r) {
      return r = r || {}, r.propsFrom = i, void 0 === r.destroyOnComplete && (r.destroyOnComplete = !0), new n(t, e, r.propsTo, r).play()
    }, e.exports = n
  }, {
    "./clips/ClipEasing": 136,
    "./clips/ClipInlineCss": 137,
    "./clips/ClipTransitionCss": 138,
    "./helpers/Float32Array": 141,
    "./helpers/transitionEnd": 150,
    "@marcom/ac-clip": 39
  }],
  134: [function(t, e, i) {
    "use strict";
    e.exports = t("./timeline/Timeline")
  }, {
    "./timeline/Timeline": 152
  }],
  135: [function(t, e, i) {
    "use strict";
    e.exports = {
      Clip: t("./Clip"),
      Timeline: t("./Timeline")
    }
  }, {
    "./Clip": 133,
    "./Timeline": 134
  }],
  136: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n) {
      n && a(n.ease) && (n.ease = c.create(n.ease).toEasingFunction()), n = n || {}, this._propsEase = n.propsEase || {}, l.call(this, t, e, i, n)
    }
    var r = t("@marcom/ac-object/clone"),
      s = t("@marcom/ac-object/create"),
      o = t("@marcom/ac-easing").createPredefined,
      a = t("../helpers/isCssCubicBezierString"),
      c = t("../helpers/BezierCurveCssManager"),
      l = t("@marcom/ac-clip").Clip,
      u = t("@marcom/ac-easing").Ease,
      h = l.prototype,
      d = n.prototype = s(h);
    d.reset = function() {
      var t = h.reset.call(this);
      if (this._clips)
        for (var e = this._clips.length; e--;) this._clips[e].reset();
      return t
    }, d.destroy = function() {
      if (this._clips) {
        for (var t = this._clips.length; t--;) this._clips[t].destroy();
        this._clips = null
      }
      return this._eases = null, this._storeOnUpdate = null, h.destroy.call(this)
    }, d._prepareProperties = function() {
      var t, e, i = 0,
        n = {},
        s = {},
        d = {};
      if (this._propsEase) {
        for (t in this._propsTo) this._propsTo.hasOwnProperty(t) && (e = this._propsEase[t], a(e) && (e = c.create(e).toEasingFunction()), void 0 === e ? (void 0 === n[this._ease] && (n[this._ease] = {}, s[this._ease] = {}, d[this._ease] = this._ease.easingFunction, i++), n[this._ease][t] = this._propsTo[t], s[this._ease][t] = this._propsFrom[t]) : "function" == typeof e ? (n[i] = {}, s[i] = {}, n[i][t] = this._propsTo[t], s[i][t] = this._propsFrom[t], d[i] = e, i++) : (void 0 === n[e] && (n[e] = {}, s[e] = {}, d[e] = e, i++), n[e][t] = this._propsTo[t], s[e][t] = this._propsFrom[t]));
        if (i > 1) {
          var m = r(this._options || {}, !0),
            f = .001 * this._duration;
          this._storeOnUpdate = this._onUpdate, this._onUpdate = this._onUpdateClips, m.onStart = null, m.onUpdate = null, m.onDraw = null, m.onComplete = null, this._clips = [];
          for (e in n) n.hasOwnProperty(e) && (m.ease = d[e], m.propsFrom = s[e], this._clips.push(new l(this._target, f, n[e], m)));
          e = "linear", this._propsTo = {}, this._propsFrom = {}
        } else
          for (t in d) d.hasOwnProperty(t) && (e = d[t]);
        void 0 !== e && (this._ease = "function" == typeof e ? new u(e) : o(e))
      }
      return h._prepareProperties.call(this)
    }, d._onUpdateClips = function(t) {
      for (var e = 1 === this._direction ? t.progress() : 1 - t.progress(), i = this._clips.length; i--;) this._clips[i].progress(e);
      "function" == typeof this._storeOnUpdate && this._storeOnUpdate.call(this, this)
    }, e.exports = n
  }, {
    "../helpers/BezierCurveCssManager": 140,
    "../helpers/isCssCubicBezierString": 146,
    "@marcom/ac-clip": 39,
    "@marcom/ac-easing": 123,
    "@marcom/ac-object/clone": 304,
    "@marcom/ac-object/create": 305
  }],
  137: [function(t, e, i) {
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
      c = t("@marcom/ac-object/create"),
      l = t("../helpers/removeTransitions"),
      u = t("./ClipEasing"),
      h = u.prototype,
      d = n.prototype = c(h);
    d.play = function() {
      var t = h.play.call(this);
      return 0 !== this._remainingDelay && s(this._el, o(this._target)), t
    }, d.reset = function() {
      var t = h.reset.call(this);
      return s(this._el, o(this._target)), t
    }, d.destroy = function() {
      return this._el = null, this._completeStyles = null, this._storeOnStart = null, this._storeOnDraw = null, this._storeOnComplete = null, h.destroy.call(this)
    }, d.target = function() {
      return this._el
    }, d._prepareProperties = function() {
      var t = a(this._el, this._propsTo, this._propsFrom);
      this._target = t.target, this._propsFrom = t.propsFrom, this._propsTo = t.propsTo, l(this._el, this._target);
      var e = this._isYoyo ? this._propsFrom : this._propsTo;
      if (this._completeStyles = o(e), void 0 !== this._options.removeStylesOnComplete) {
        var i, n = this._options.removeStylesOnComplete;
        if ("boolean" == typeof n && n)
          for (i in this._completeStyles) this._completeStyles.hasOwnProperty(i) && (this._completeStyles[i] = null);
        else if ("object" === ("undefined" == typeof n ? "undefined" : r(n)) && n.length)
          for (var s = n.length; s--;) i = n[s], this._completeStyles.hasOwnProperty(i) && (this._completeStyles[i] = null)
      }
      return h._prepareProperties.call(this)
    }, d._onStart = function(t) {
      this.playing() && 1 === this._direction && 0 === this._delay && s(this._el, o(this._propsFrom)), "function" == typeof this._storeOnStart && this._storeOnStart.call(this, this)
    }, d._onDraw = function(t) {
      s(this._el, o(this._target)), "function" == typeof this._storeOnDraw && this._storeOnDraw.call(this, this)
    }, d._onComplete = function(t) {
      s(this._el, this._completeStyles), "function" == typeof this._storeOnComplete && this._storeOnComplete.call(this, this)
    }, e.exports = n
  }, {
    "../helpers/convertToStyleObject": 143,
    "../helpers/convertToTransitionableObjects": 144,
    "../helpers/removeTransitions": 147,
    "./ClipEasing": 136,
    "@marcom/ac-dom-styles/setStyle": 113,
    "@marcom/ac-object/create": 305
  }],
  138: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n) {
      if (n = n || {}, this._el = t, this._storeEase = n.ease, "function" == typeof this._storeEase) throw new Error(w);
      this._storeOnStart = n.onStart || null, this._storeOnComplete = n.onComplete || null, n.onStart = this._onStart.bind(this), n.onComplete = this._onComplete.bind(this), this._stylesTo = l(i, !0), this._stylesFrom = n.propsFrom ? l(n.propsFrom, !0) : {}, this._propsEase = n.propsEase ? l(n.propsEase, !0) : {}, d(n.ease) && (n.ease = _.create(n.ease).toEasingFunction()),
        g.call(this, {}, e, {}, n), this._propsFrom = {}
    }
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      s = t("@marcom/ac-dom-styles/setStyle"),
      o = t("@marcom/ac-dom-styles/getStyle"),
      a = t("../helpers/convertToStyleObject"),
      c = t("../helpers/convertToTransitionableObjects"),
      l = t("@marcom/ac-object/clone"),
      u = t("@marcom/ac-object/create"),
      h = t("@marcom/ac-easing").createPredefined,
      d = t("../helpers/isCssCubicBezierString"),
      m = t("../helpers/removeTransitions"),
      f = t("../helpers/transitionEnd"),
      p = t("../helpers/waitAnimationFrames"),
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
      return void 0 === t ? e : (t = 1 === this._direction ? t : 1 - t, this._stylesClip.progress(t), this._applyStyles(0, a(this._styles)), this.playing() && (this._isWaitingForStylesToBeApplied = !0, p(this._setStylesAfterWaiting, 2)), e)
    }, S._prepareProperties = function() {
      var t = c(this._el, this._stylesTo, this._stylesFrom);
      this._styles = t.target, this._stylesTo = t.propsTo, this._stylesFrom = t.propsFrom;
      var e = this._storeEase || b;
      this._eases = {}, this._propsArray = [];
      var i;
      this._styleCompleteTo = a(this._stylesTo), this._styleCompleteFrom = a(this._stylesFrom), this._propsEaseKeys = {};
      var n;
      for (n in this._stylesTo) this._stylesTo.hasOwnProperty(n) && (this._propsArray[this._propsArray.length] = n, void 0 === this._propsEase[n] ? (void 0 === this._eases[e] && (i = this._convertEase(e), this._eases[e] = i.css), this._propsEaseKeys[n] = e) : void 0 === this._eases[this._propsEase[n]] ? (i = this._convertEase(this._propsEase[n]), this._eases[this._propsEase[n]] = i.css, this._propsEaseKeys[n] = this._propsEase[n], this._propsEase[n] = i.js) : d(this._propsEase[n]) && (this._propsEaseKeys[n] = this._propsEase[n], this._propsEase[n] = this._eases[this._propsEase[n]][1].toEasingFunction()));
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
      if (d(t)) e = _.create(t), i = e.toEasingFunction();
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
      !this._isListeningForTransitionEnd && this._el && this._onTransitionEnded && (this._isListeningForTransitionEnd = !0, this._isTransitionEnded = !1, this._el.addEventListener(f, this._onTransitionEnded))
    }, S._removeTransitionListener = function() {
      this._isListeningForTransitionEnd && this._el && this._onTransitionEnded && (this._isListeningForTransitionEnd = !1, this._isTransitionEnded = !1, this._el.removeEventListener(f, this._onTransitionEnded))
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
      m(this._el, this._stylesTo);
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
      e && (this._isWaitingForStylesToBeApplied = !0, this._applyStyles(0, this._styleCompleteFrom)), p(this._setStylesAfterWaiting, e), "function" == typeof this._storeOnStart && this._storeOnStart.call(this, this)
    }, S._onComplete = function(t) {
      this._removeTransitionListener(), this._completeStyles.transition = this._getTransitionStyles(), s(this._el, this._completeStyles), "function" == typeof this._storeOnComplete && this._storeOnComplete.call(this, this)
    }, e.exports = n
  }, {
    "../helpers/BezierCurveCssManager": 140,
    "../helpers/convertToStyleObject": 143,
    "../helpers/convertToTransitionableObjects": 144,
    "../helpers/isCssCubicBezierString": 146,
    "../helpers/removeTransitions": 147,
    "../helpers/transitionEnd": 150,
    "../helpers/waitAnimationFrames": 151,
    "./ClipEasing": 136,
    "@marcom/ac-clip": 39,
    "@marcom/ac-dom-styles/getStyle": 111,
    "@marcom/ac-dom-styles/setStyle": 113,
    "@marcom/ac-easing": 123,
    "@marcom/ac-object/clone": 304,
    "@marcom/ac-object/create": 305,
    "@marcom/ac-page-visibility": 313
  }],
  139: [function(t, e, i) {
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
      var c = this._splitBezier(t, e, i),
        l = this._normalize(c),
        u = this.manager.create(l);
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
    "@marcom/ac-easing": 123
  }],
  140: [function(t, e, i) {
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
    "./BezierCurveCss": 139
  }],
  141: [function(t, e, i) {
    "use strict";
    "undefined" == typeof window.Float32Array && (window.Float32Array = function() {})
  }, {}],
  142: [function(t, e, i) {
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
    "./splitUnits": 148,
    "@marcom/ac-dom-metrics/getDimensions": 131
  }],
  143: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e, i, n = {};
      for (i in t) t.hasOwnProperty(i) && null !== t[i] && (t[i].isColor ? t[i].isRgb ? n[i] = "rgb(" + Math.round(t[i].r) + ", " + Math.round(t[i].g) + ", " + Math.round(t[i].b) + ")" : t[i].isRgba && (n[i] = "rgba(" + Math.round(t[i].r) + ", " + Math.round(t[i].g) + ", " + Math.round(t[i].b) + ", " + t[i].a + ")") : "transform" === i ? (e = 6 === t[i].length ? "matrix" : "matrix3d", n[i] = e + "(" + t[i].join(",") + ")") : t[i].unit ? n[i] = t[i].value + t[i].unit : n[i] = t[i].value);
      return n
    }
  }, {}],
  144: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-styles/getStyle"),
      r = t("@marcom/ac-object/clone"),
      s = t("./splitUnits"),
      o = t("./toCamCase"),
      a = t("@marcom/ac-color").Color,
      c = t("@marcom/ac-feature/cssPropertyAvailable"),
      l = t("@marcom/ac-transform").Transform,
      u = t("./TransformMatrix"),
      h = function(t) {
        return a.isRgba(t) ? (t = new a(t).rgbaObject(), t.isRgba = !0) : (t = new a(t).rgbObject(), t.isRgb = !0), t.isColor = !0, t
      },
      d = function(t) {
        t.isRgb && (t.isRgb = !1, t.isRgba = !0, t.a = 1)
      },
      m = function(t, e, i) {
        (t.isRgba || e.isRgba || i.isRgba) && (d(t), d(e), d(i))
      },
      f = function(t) {
        return [t[0], t[1], 0, 0, t[2], t[3], 0, 0, 0, 0, 1, 0, t[4], t[5], 0, 1]
      },
      p = function(t, e, i) {
        16 !== t.transform.length && 16 !== e.transform.length && 16 !== i.transform.length || (6 === t.transform.length && (t.transform = f(t.transform)), 6 === e.transform.length && (e.transform = f(e.transform)), 6 === i.transform.length && (i.transform = f(i.transform)))
      };
    e.exports = function(t, e, i) {
      var d = {};
      e = r(e, !0), i = r(i, !0);
      var f, _, g, y, v, b = c("transform");
      for (v in e) e.hasOwnProperty(v) && null !== e[v] && ("transform" === v ? (b && (_ = new l, f = n(t, "transform").transform || "none", _.setMatrixValue(f), g = new u(new l, t, e[v])), g && g.toCSSString() !== _.toCSSString() ? (y = new u(i[v] ? new l : _.clone(), t, i[v]), d[v] = _.toArray(), e[v] = g.toArray(), i[v] = y.toArray()) : (d[v] = null, e[v] = null)) : (f = n(t, v)[o(v)] || i[v], a.isColor(f) ? (d[v] = h(f), i[v] = void 0 !== i[v] ? h(i[v]) : r(d[v], !0), e[v] = h(e[v])) : (d[v] = s(f), i[v] = void 0 !== i[v] ? s(i[v]) : r(d[v], !0), e[v] = s(e[v]))));
      for (v in i) !i.hasOwnProperty(v) || null === i[v] || void 0 !== e[v] && null !== e[v] || ("transform" === v ? (b && (_ = new l, _.setMatrixValue(getComputedStyle(t).transform || getComputedStyle(t).webkitTransform || "none"), y = new u(new l, t, i[v])), y && y.toCSSString() !== _.toCSSString() ? (g = new u(_.clone()), d[v] = _.toArray(), e[v] = g.toArray(), i[v] = y.toArray()) : (d[v] = null, e[v] = null, i[v] = null)) : (f = n(t, v)[o(v)], a.isColor(f) ? (d[v] = h(f), e[v] = r(d[v], !0), i[v] = h(i[v])) : (d[v] = s(f), i[v] = s(i[v]), e[v] = r(d[v], !0)))), d[v] && d[v].isColor && m(d[v], i[v], e[v]);
      return d.transform && p(d, i, e), {
        target: d,
        propsTo: e,
        propsFrom: i
      }
    }
  }, {
    "./TransformMatrix": 142,
    "./splitUnits": 148,
    "./toCamCase": 149,
    "@marcom/ac-color": 46,
    "@marcom/ac-dom-styles/getStyle": 111,
    "@marcom/ac-feature/cssPropertyAvailable": 163,
    "@marcom/ac-object/clone": 304,
    "@marcom/ac-transform": 407
  }],
  145: [function(t, e, i) {
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
  146: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return "string" == typeof t && "cubic-bezier(" === t.substr(0, 13)
    }
  }, {}],
  147: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-styles/setStyle"),
      r = t("@marcom/ac-dom-styles/getStyle"),
      s = t("./getShorthandTransition");
    e.exports = function(t, e) {
      var i = r(t, "transition", "transition-property", "transition-duration", "transition-timing-function", "transition-delay");
      if (i = i.transition || s(i), i && i.length) {
        i = i.split(",");
        for (var o, a = 0, c = i.length; c--;) o = i[c].trim().split(" ")[0], void 0 !== e[o] && (i.splice(c, 1), ++a);
        a && (0 === i.length && (i = ["all"]), n(t, {
          transition: i.join(",").trim()
        }))
      }
    }
  }, {
    "./getShorthandTransition": 145,
    "@marcom/ac-dom-styles/getStyle": 111,
    "@marcom/ac-dom-styles/setStyle": 113
  }],
  148: [function(t, e, i) {
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
  149: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e = function(t, e, i, n) {
        return 0 === i && "moz" !== n.substr(1, 3) ? e : e.toUpperCase()
      };
      return t.replace(/-(\w)/g, e)
    }
  }, {}],
  150: [function(t, e, i) {
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
  151: [function(t, e, i) {
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
    "@marcom/ac-page-visibility": 313
  }],
  152: [function(t, e, i) {
    "use strict";

    function n(t) {
      t = t || {}, t.ease = t.ease || "linear", t.destroyOnComplete = !1, this.options = t, s.call(this, {
        t: 0
      }, 0, {
        t: 1
      }, t), this._itemList = new c
    }
    var r = t("@marcom/ac-object/create"),
      s = t("@marcom/ac-clip").Clip,
      o = t("./TimelineClip"),
      a = t("./TimelineCallback"),
      c = t("./TimelineItemList"),
      l = s.prototype,
      u = n.prototype = r(l);
    n.prototype.constructor = n, u._update = function(t) {
      l._update.call(this, t), this._render()
    }, u.progress = function(t) {
      return l.progress.call(this, t), void 0 !== t && this._render(), this._progress
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
      return this._duration = 0, l.destroy.call(this)
    }, e.exports = n
  }, {
    "./TimelineCallback": 153,
    "./TimelineClip": 154,
    "./TimelineItemList": 155,
    "@marcom/ac-clip": 39,
    "@marcom/ac-object/create": 305
  }],
  153: [function(t, e, i) {
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
  154: [function(t, e, i) {
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
  155: [function(t, e, i) {
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
    "./TimelineCallback": 153,
    "./TimelineClip": 154
  }],
  156: [function(t, e, i) {
    "use strict";
    e.exports = {
      EventEmitterMicro: t("./ac-event-emitter-micro/EventEmitterMicro")
    }
  }, {
    "./ac-event-emitter-micro/EventEmitterMicro": 157
  }],
  157: [function(t, e, i) {
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
  158: [function(t, e, i) {
    "use strict";
    e.exports = {
      canvasAvailable: t("./canvasAvailable"),
      continuousScrollEventsAvailable: t("./continuousScrollEventsAvailable"),
      cookiesAvailable: t("./cookiesAvailable"),
      cssLinearGradientAvailable: t("./cssLinearGradientAvailable"),
      cssPropertyAvailable: t("./cssPropertyAvailable"),
      cssViewportUnitsAvailable: t("./cssViewportUnitsAvailable"),
      elementAttributeAvailable: t("./elementAttributeAvailable"),
      eventTypeAvailable: t("./eventTypeAvailable"),
      isDesktop: t("./isDesktop"),
      isHandheld: t("./isHandheld"),
      isRetina: t("./isRetina"),
      isTablet: t("./isTablet"),
      localStorageAvailable: t("./localStorageAvailable"),
      mediaElementsAvailable: t("./mediaElementsAvailable"),
      mediaQueriesAvailable: t("./mediaQueriesAvailable"),
      prefersReducedMotion: t("./prefersReducedMotion"),
      sessionStorageAvailable: t("./sessionStorageAvailable"),
      svgAvailable: t("./svgAvailable"),
      threeDTransformsAvailable: t("./threeDTransformsAvailable"),
      touchAvailable: t("./touchAvailable"),
      webGLAvailable: t("./webGLAvailable")
    }
  }, {
    "./canvasAvailable": 159,
    "./continuousScrollEventsAvailable": 160,
    "./cookiesAvailable": 161,
    "./cssLinearGradientAvailable": 162,
    "./cssPropertyAvailable": 163,
    "./cssViewportUnitsAvailable": 164,
    "./elementAttributeAvailable": 165,
    "./eventTypeAvailable": 166,
    "./isDesktop": 168,
    "./isHandheld": 169,
    "./isRetina": 170,
    "./isTablet": 171,
    "./localStorageAvailable": 172,
    "./mediaElementsAvailable": 173,
    "./mediaQueriesAvailable": 174,
    "./prefersReducedMotion": 175,
    "./sessionStorageAvailable": 176,
    "./svgAvailable": 177,
    "./threeDTransformsAvailable": 178,
    "./touchAvailable": 179,
    "./webGLAvailable": 180
  }],
  159: [function(t, e, i) {
    "use strict";
    var n = t("./helpers/globals"),
      r = t("@marcom/ac-function/once"),
      s = function() {
        var t = n.getDocument(),
          e = t.createElement("canvas");
        return !("function" != typeof e.getContext || !e.getContext("2d"))
      };
    e.exports = r(s), e.exports.original = s
  }, {
    "./helpers/globals": 167,
    "@marcom/ac-function/once": 223
  }],
  160: [function(t, e, i) {
    "use strict";

    function n() {
      return !s() || r.os.ios && r.os.version.major >= 8 || r.browser.chrome
    }
    var r = t("@marcom/ac-useragent"),
      s = t("./touchAvailable").original,
      o = t("@marcom/ac-function/once");
    e.exports = o(n), e.exports.original = n
  }, {
    "./touchAvailable": 179,
    "@marcom/ac-function/once": 223,
    "@marcom/ac-useragent": 413
  }],
  161: [function(t, e, i) {
    "use strict";

    function n() {
      var t = !1,
        e = r.getDocument(),
        i = r.getNavigator();
      try {
        "cookie" in e && i.cookieEnabled && (e.cookie = "ac_feature_cookie=1", t = e.cookie.indexOf("ac_feature_cookie") !== -1, e.cookie = "ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;")
      } catch (n) {}
      return t
    }
    var r = t("./helpers/globals"),
      s = t("@marcom/ac-function/once");
    e.exports = s(n), e.exports.original = n
  }, {
    "./helpers/globals": 167,
    "@marcom/ac-function/once": 223
  }],
  162: [function(t, e, i) {
    "use strict";

    function n() {
      var t = ["linear-gradient(to bottom right, #9f9, white)", "linear-gradient(top left, #9f9, white)", "gradient(linear, left top, right bottom, from(#9f9), to(white))"];
      return t.some(function(t) {
        return !!r("background-image", t)
      })
    }
    var r = t("@marcom/ac-prefixer/getStyleValue"),
      s = t("@marcom/ac-function/once");
    e.exports = s(n), e.exports.original = n
  }, {
    "@marcom/ac-function/once": 223,
    "@marcom/ac-prefixer/getStyleValue": 320
  }],
  163: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      return "undefined" != typeof e ? !!r(t, e) : !!s(t)
    }
    var r = t("@marcom/ac-prefixer/getStyleValue"),
      s = t("@marcom/ac-prefixer/getStyleProperty"),
      o = t("@marcom/ac-function/memoize");
    e.exports = o(n), e.exports.original = n
  }, {
    "@marcom/ac-function/memoize": 222,
    "@marcom/ac-prefixer/getStyleProperty": 319,
    "@marcom/ac-prefixer/getStyleValue": 320
  }],
  164: [function(t, e, i) {
    "use strict";

    function n() {
      return !!r("margin", "1vw 1vh")
    }
    var r = t("@marcom/ac-prefixer/getStyleValue"),
      s = t("@marcom/ac-function/once");
    e.exports = s(n), e.exports.original = n
  }, {
    "@marcom/ac-function/once": 223,
    "@marcom/ac-prefixer/getStyleValue": 320
  }],
  165: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      var i, n = r.getDocument();
      return e = e || "div", i = n.createElement(e), t in i
    }
    var r = t("./helpers/globals"),
      s = t("@marcom/ac-function/memoize");
    e.exports = s(n), e.exports.original = n
  }, {
    "./helpers/globals": 167,
    "@marcom/ac-function/memoize": 222
  }],
  166: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      return !!r(t, e)
    }
    var r = t("@marcom/ac-prefixer/getEventType"),
      s = t("@marcom/ac-function/memoize");
    e.exports = s(n), e.exports.original = n
  }, {
    "@marcom/ac-function/memoize": 222,
    "@marcom/ac-prefixer/getEventType": 317
  }],
  167: [function(t, e, i) {
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
  168: [function(t, e, i) {
    "use strict";

    function n() {
      var t = s.getWindow();
      return !r() && !t.orientation
    }
    var r = t("./touchAvailable").original,
      s = t("./helpers/globals"),
      o = t("@marcom/ac-function/once");
    e.exports = o(n), e.exports.original = n
  }, {
    "./helpers/globals": 167,
    "./touchAvailable": 179,
    "@marcom/ac-function/once": 223
  }],
  169: [function(t, e, i) {
    "use strict";

    function n() {
      return !r() && !s()
    }
    var r = t("./isDesktop").original,
      s = t("./isTablet").original,
      o = t("@marcom/ac-function/once");
    e.exports = o(n), e.exports.original = n
  }, {
    "./isDesktop": 168,
    "./isTablet": 171,
    "@marcom/ac-function/once": 223
  }],
  170: [function(t, e, i) {
    "use strict";
    var n = t("./helpers/globals");
    e.exports = function() {
      var t = n.getWindow();
      return "devicePixelRatio" in t && t.devicePixelRatio >= 1.5
    }
  }, {
    "./helpers/globals": 167
  }],
  171: [function(t, e, i) {
    "use strict";

    function n() {
      var t = s.getWindow(),
        e = t.screen.width;
      return t.orientation && t.screen.height < e && (e = t.screen.height), !r() && e >= a
    }
    var r = t("./isDesktop").original,
      s = t("./helpers/globals"),
      o = t("@marcom/ac-function/once"),
      a = 600;
    e.exports = o(n), e.exports.original = n
  }, {
    "./helpers/globals": 167,
    "./isDesktop": 168,
    "@marcom/ac-function/once": 223
  }],
  172: [function(t, e, i) {
    "use strict";

    function n() {
      var t = r.getWindow(),
        e = !1;
      try {
        e = !(!t.localStorage || null === t.localStorage.non_existent)
      } catch (i) {}
      return e
    }
    var r = t("./helpers/globals"),
      s = t("@marcom/ac-function/once");
    e.exports = s(n), e.exports.original = n
  }, {
    "./helpers/globals": 167,
    "@marcom/ac-function/once": 223
  }],
  173: [function(t, e, i) {
    "use strict";

    function n() {
      var t = r.getWindow();
      return "HTMLMediaElement" in t
    }
    var r = t("./helpers/globals"),
      s = t("@marcom/ac-function/once");
    e.exports = s(n), e.exports.original = n
  }, {
    "./helpers/globals": 167,
    "@marcom/ac-function/once": 223
  }],
  174: [function(t, e, i) {
    "use strict";

    function n() {
      var t = r.getWindow(),
        e = t.matchMedia("only all");
      return !(!e || !e.matches)
    }
    t("@marcom/ac-polyfills/matchMedia");
    var r = t("./helpers/globals"),
      s = t("@marcom/ac-function/once");
    e.exports = s(n), e.exports.original = n
  }, {
    "./helpers/globals": 167,
    "@marcom/ac-function/once": 223,
    "@marcom/ac-polyfills/matchMedia": void 0
  }],
  175: [function(t, e, i) {
    "use strict";

    function n() {
      var t = r.getWindow(),
        e = t.matchMedia("(prefers-reduced-motion)");
      return !(!e || !e.matches)
    }
    var r = t("./helpers/globals");
    e.exports = n
  }, {
    "./helpers/globals": 167
  }],
  176: [function(t, e, i) {
    "use strict";

    function n() {
      var t = r.getWindow(),
        e = !1;
      try {
        "sessionStorage" in t && "function" == typeof t.sessionStorage.setItem && (t.sessionStorage.setItem("ac_feature", "test"), e = !0, t.sessionStorage.removeItem("ac_feature", "test"))
      } catch (i) {}
      return e
    }
    var r = t("./helpers/globals"),
      s = t("@marcom/ac-function/once");
    e.exports = s(n), e.exports.original = n
  }, {
    "./helpers/globals": 167,
    "@marcom/ac-function/once": 223
  }],
  177: [function(t, e, i) {
    "use strict";

    function n() {
      var t = r.getDocument();
      return !!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
    }
    var r = t("./helpers/globals"),
      s = t("@marcom/ac-function/once");
    e.exports = s(n), e.exports.original = n
  }, {
    "./helpers/globals": 167,
    "@marcom/ac-function/once": 223
  }],
  178: [function(t, e, i) {
    "use strict";

    function n() {
      return !(!r("perspective", "1px") || !r("transform", "translateZ(0)"))
    }
    var r = t("@marcom/ac-prefixer/getStyleValue"),
      s = t("@marcom/ac-function/once");
    e.exports = s(n), e.exports.original = n
  }, {
    "@marcom/ac-function/once": 223,
    "@marcom/ac-prefixer/getStyleValue": 320
  }],
  179: [function(t, e, i) {
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
    "./helpers/globals": 167,
    "@marcom/ac-function/once": 223
  }],
  180: [function(t, e, i) {
    "use strict";

    function n() {
      var t = r.getDocument(),
        e = t.createElement("canvas");
      return "function" == typeof e.getContext && !(!e.getContext("webgl") && !e.getContext("experimental-webgl"))
    }
    var r = t("./helpers/globals"),
      s = t("@marcom/ac-function/once");
    e.exports = s(n), e.exports.original = n
  }, {
    "./helpers/globals": 167,
    "@marcom/ac-function/once": 223
  }],
  181: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      s.call(this), this.options = o(a, e || {}), this.src = t, this.data = null, this.error = null, this.priority = this.options.priority, this.status = "idle", this._onLoad = this._onLoad.bind(this), this._onError = this._onError.bind(this)
    }
    var r, s = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      o = t("@marcom/ac-object/defaults"),
      a = {
        priority: 5
      };
    r = n.prototype = Object.create(s.prototype), r.load = function() {
      "idle" === this.status && (this.status = "pending", this._load())
    }, r.destroy = function() {
      s.prototype.destroy.call(this), this.status = "destroyed", this.data = null
    }, r._load = function() {
      this.data = {
        src: this.src
      }, window.setTimeout(this._onLoad.bind(this), 20)
    }, r._onLoad = function() {
      "destroyed" !== this.status && (this.status = "loaded", this.trigger("loaded", this))
    }, r._onError = function(t) {
      "destroyed" !== this.status && (this.error = t, this.status = "error", this.trigger("error", this))
    }, e.exports = n
  }, {
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-object/defaults": 306
  }],
  182: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      s.apply(this, arguments)
    }
    var r, s = t("../Asset");
    r = n.prototype = Object.create(s.prototype), r._load = function() {
      this.data = new Image, this.data.addEventListener("load", this._onLoad), this.data.addEventListener("error", this._onError), this.data.src = this.src
    }, r.destroy = function() {
      this.data && (this.data.removeEventListener("load", this._onLoad), this.data.removeEventListener("error", this._onError)), this.status = "destroyed", this.data = null
    }, e.exports = n
  }, {
    "../Asset": 181
  }],
  183: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Promise");
    var n, r = t("@marcom/ac-object/defaults"),
      s = t("./XHR/ArrayBuffer"),
      o = t("./XHR/JSON"),
      a = t("../Asset"),
      c = t("../AssetGroup"),
      l = {
        manifestTimeout: 5e3,
        chunkTimeout: 1e4
      },
      u = function(t, e) {
        var i = r(l, e || {});
        a.call(this, t, i), t.lastIndexOf("/") !== t.length - 1 && (t += "/");
        var n = "j";
        this._manifestPath = t + "manifest." + n + "son", this._chunks = [], this._loadChunks = this._loadChunks.bind(this), this._onChunksLoaded = this._onChunksLoaded.bind(this), this._manifestLoader = null, this._chunkLoader = null
      };
    n = u.prototype = Object.create(a.prototype), n._load = function() {
      this._loadManifest().then(this._loadChunks).then(this._onChunksLoaded)["catch"](this._onError)
    }, n._loadManifest = function() {
      var t = new o(this._manifestPath, {
          timeout: this.options.manifestTimeout
        }),
        e = new c(t, {
          privateQueue: this.options.queue
        });
      return e.load(), this._manifestLoader = e, new Promise(function(t, i) {
        e.once("load", function(e) {
          t(e.latest)
        }), e.once("error", function(t) {
          i(t.latest.error)
        })
      })
    }, n._loadChunks = function(t) {
      this._manifest = t.data, this._manifestLoader.destroy(), this._manifestLoader = null;
      var e = [];
      this._manifest.files.forEach(function(t, i) {
        e.push(this._getOrCreateChunkObject(t, i))
      }, this);
      var i = new c(e, {
          privateQueue: this.options.queue,
          failFast: !0
        }),
        n = new Promise(function(t, e) {
          i.once("load", t), i.once("error", function(t) {
            e(t.latest.error)
          })
        });
      return i.load(), this._chunkLoader = i, n
    }, n._getOrCreateChunkObject = function(t, e) {
      var i = this.options.chunkTimeout ? {
        timeout: this.options.chunkTimeout
      } : null;
      if (!this._chunks[e]) {
        var n = t.path;
        if (n.match(/(^http(s?))/)) {
          if (this.src.match(/(^http(s?))/)) {
            var r = n.indexOf("/", 10),
              o = this.src.indexOf("/", 10);
            n = this.src.substring(0, o) + n.substring(r)
          }
        } else n = this.src + "/" + n;
        this._chunks[e] = new s(n, i)
      }
      return this._chunks[e]
    }, n._onChunksLoaded = function() {
      for (var t = this._chunks.length, e = [], i = 0; i < t; i++) e.push(this._chunks[i].data), this._chunks[i].off();
      this.data = new Blob(e, {
        type: this._manifest.mimeType
      }), e = this._chunks = null, this._chunkLoader.destroy(), this._chunkLoader = null, this._onLoad()
    }, n.pause = function() {
      this._manifestLoader && this._manifestLoader.pause(), this._chunkLoader && this._chunkLoader.pause()
    }, n.resume = function() {
      this._manifestLoader && this._manifestLoader.resume(), this._chunkLoader && this._chunkLoader.resume()
    }, n.destroy = function() {
      this.pause(), this._manifestLoader && this._manifestLoader.destroy(), this._chunkLoader && this._chunkLoader.destroy(), this._chunks = null, a.prototype.destroy.call(this)
    }, e.exports = u
  }, {
    "../Asset": 181,
    "../AssetGroup": 188,
    "./XHR/ArrayBuffer": 186,
    "./XHR/JSON": 187,
    "@marcom/ac-object/defaults": 306,
    "@marcom/ac-polyfills/Promise": void 0
  }],
  184: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      s.apply(this, arguments), this.options = e || {}, this._binary = this.options.binary || this._createAssetType()
    }
    var r, s = t("../Asset"),
      o = t("./SplitFile");
    r = n.prototype = Object.create(s.prototype), r._canUseBlob = function() {
      return void 0 !== window.Blob && void 0 !== window.URL && "function" == typeof window.URL.createObjectURL
    }, r._createAssetType = function() {
      if (this._canUseBlob()) return new o(this.src, this.options)
    }, r._load = function() {
      this._binary.on("loaded", this._onLoad), this._binary.on("error", this._onError), this._binary.load()
    }, r._onLoad = function(t) {
      this.data = t, this.data instanceof window.Blob && (this.data = this.options.element, this.data || (this.data = document.createElement("video")), this.data.getAttribute("type") !== t.type && this.data.setAttribute("type", t.type), this.data.src = window.URL.createObjectURL(t)), s.prototype._onLoad.call(this, this.data)
    }, r.pause = function() {
      this._binary.pause()
    }, r.destroy = function() {
      this._binary.destroy(), s.prototype.destroy.call(this)
    }, e.exports = n
  }, {
    "../Asset": 181,
    "./SplitFile": 183
  }],
  185: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      var i = a(c, e || {});
      o.call(this, t, i), this._request = this._createRequest(), this._request.xhr.responseType = this.options.responseType
    }
    var r, s = t("@marcom/ac-ajax"),
      o = t("../Asset"),
      a = t("@marcom/ac-object/defaults"),
      c = {
        timeout: 3e4,
        responseType: ""
      };
    r = n.prototype = Object.create(o.prototype), r.destroy = function() {
      return "idle" !== this.status && "loaded" !== this.status || (this._request = null), "pending" === this.status ? (this._request.xhr.abort(), void o.prototype.destroy.call(this)) : void o.prototype.destroy.call(this)
    }, r._createRequest = function() {
      return s.create({
        url: this.src,
        method: "GET",
        timeout: this.options.timeout,
        responseType: this.options.responseType
      })
    }, r._load = function() {
      this._request.send().then(this._onLoad)["catch"](this._onError)
    }, r._onLoad = function(t) {
      this.data = this.data || t.response, this._request = null, o.prototype._onLoad.call(this)
    }, e.exports = n
  }, {
    "../Asset": 181,
    "@marcom/ac-ajax": 13,
    "@marcom/ac-object/defaults": 306
  }],
  186: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      var i = o(e || {}, a);
      s.call(this, t, i)
    }
    var r, s = t("../XHR"),
      o = t("@marcom/ac-object/extend"),
      a = {
        responseType: "arraybuffer"
      };
    r = n.prototype = Object.create(s.prototype), e.exports = n
  }, {
    "../XHR": 185,
    "@marcom/ac-object/extend": 307
  }],
  187: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      s.apply(this, arguments)
    }
    var r, s = t("../XHR");
    r = n.prototype = Object.create(s.prototype), r._onLoad = function(t) {
      try {
        this.data = JSON.parse(t.response || t.responseText)
      } catch (e) {
        this._onError(e)
      }
      s.prototype._onLoad.call(this, t)
    }, e.exports = n
  }, {
    "../XHR": 185
  }],
  188: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Promise");
    var n = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      r = t("@marcom/ac-object/defaults"),
      s = t("./utils/enqueueAsset"),
      o = t("./utils/selectQueue"),
      a = t("./queue"),
      c = {
        failFast: !0,
        privateQueue: !1,
        privateQueueThreads: a.DEFAULT_THREADS
      },
      l = function(t, e) {
        n.call(this), this.options = r(c, e || {}), this._onGroupError = this._onGroupError.bind(this), this._onAssetError = this._onAssetError.bind(this), this._onScheduled = this._onScheduled.bind(this), this._onProgress = this._onProgress.bind(this), this._onComplete = this._onComplete.bind(this), this.errors = [], this._queue = o(this.options.privateQueue, this.options.privateQueueThreads), this._assets = [].concat(t), this._loaded = [], this._errored = [], this._enqueued = [], this._dequeued = [], this._pending = [], this._isRunning = !1, this._isComplete = !1, this._isErrored = !1, this._destroyPending = !1
      },
      u = l.prototype = Object.create(n.prototype);
    u.load = function() {
      var t = this._assets.map(function(t) {
        var e = {
            asset: t,
            success: this._onProgress,
            failure: this._onAssetError,
            scheduled: this._onScheduled
          },
          i = s(this._queue, e, this.options.failFast);
        return this._enqueued.push(i), i.promise
      }, this);
      Promise.all(t).then(this._onComplete)["catch"](this._onGroupError), this._isRunning = !0, this._queue.start();
      var e = new Promise(function(t, e) {
        this.once("load", t), this.options.failFast && this.once("error", t)
      }.bind(this));
      return e
    }, u.isRunning = function() {
      return this._isRunning
    }, u.count = function() {
      return this._enqueued.length
    }, u.pending = function() {
      return this._pending.length
    }, u.loadedCount = function() {
      return this._loaded.length
    }, u.isComplete = function() {
      return this._isComplete
    }, u.isErrored = function() {
      return this._isErrored
    }, u.pause = function() {
      this.isComplete() || this.isErrored() || !this.isRunning() || (this._dequeueItems(), this._pauseAssets(), this._isRunning = !1)
    }, u.resume = function() {
      this.isComplete() || this.isErrored() || this.isRunning() || this._destroyPending || (this._reenqueueItems(), this._resumeAssets(), this._isRunning = !0)
    }, u.destroy = function() {
      this._destroyPending || (n.prototype.destroy.call(this), this.pause(), this._destroyPending = !0, this._assets.forEach(function(t) {
        t.destroy()
      }), 0 === this.pending() && this._destroy())
    }, u.trigger = function() {
      this._destroyPending || n.prototype.trigger.apply(this, arguments)
    }, u._destroy = function() {
      this.privateQueue && (this._queue.destroy(), this._queue = null, this.options.privateQueue = null), this.errors = null, this._assets = null, this._loaded = null, this._errored = null, this._enqueued = null, this._dequeued = null, this._pending = null
    }, u._pauseAssets = function() {
      this._assets.forEach(function(t) {
        "function" == typeof t.pause && t.pause()
      })
    }, u._resumeAssets = function() {
      this._assets.forEach(function(t) {
        "function" == typeof t.resume && t.resume()
      })
    }, u._onProgress = function(t) {
      if (!this.isErrored()) {
        var e = this._pending.indexOf(t),
          i = this._pending.splice(e, 1)[0];
        if (i && "loaded" === i.asset.status && this._loaded.push(i.asset), this._destroyPending) return void(0 === this.pending() && this._destroy());
        var n = this._makeDataObject(t.asset);
        this.trigger("progress", n)
      }
    }, u._onScheduled = function(t) {
      var e = this._enqueued.indexOf(t);
      e > -1 && (this._enqueued.splice(e, 1), this._pending.push(t))
    }, u._onComplete = function(t) {
      this._isRunning = !1, this._isComplete = !0;
      var e = this._makeDataObject(this._loaded[this._loaded.length - 1]);
      this.trigger("load", e)
    }, u._onAssetError = function(t) {
      this.errors.push(t.error), this._errored.push(t);
      var e = this._pending.indexOf(t);
      this._pending.splice(e, 1);
      var i = this._makeDataObject(t.asset);
      this.trigger("error", i)
    }, u._onGroupError = function(t) {
      this.options.failFast && (this.pause(), this._isErrored = !0, this._isRunning = !1, this._isComplete = !1)
    }, u._makeDataObject = function(t) {
      var e = this.errors.length;
      this.errors.map(function(t) {
        return this._assets.indexOf(t)
      }, this);
      return {
        latest: t,
        assets: this._assets,
        error: !!(e > 0),
        errored: this.errors
      }
    }, u._dequeueItems = function() {
      this._enqueued.forEach(function(t) {
        this._queue.dequeueQueueItem(t.queueItem), this._dequeued.push(t)
      }, this), this._enqueued = []
    }, u._reenqueueItems = function() {
      this._dequeued.forEach(function(t) {
        this._queue.enqueueQueueItem(t.queueItem), this._enqueued.push(t)
      }, this), this._dequeued = []
    }, e.exports = l
  }, {
    "./queue": 192,
    "./utils/enqueueAsset": 193,
    "./utils/selectQueue": 194,
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-object/defaults": 306,
    "@marcom/ac-polyfills/Promise": void 0
  }],
  189: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      return t = [].concat(t), t.map(function(t) {
        return c(t, e)
      })
    }

    function r(t, e) {
      var i = u(e || {});
      return i.privateQueue = l(i.privateQueue, i.privateQueueThreads), t = n(t, i.privateQueue), new o(t, i)
    }
    var s = t("./queue"),
      o = t("./AssetGroup"),
      a = t("./assetTypes"),
      c = t("./createAsset"),
      l = t("./utils/selectQueue"),
      u = t("@marcom/ac-object/clone");
    e.exports = {
      count: function() {
        return s.getInstance().count()
      },
      pending: function() {
        return s.getInstance().pending()
      },
      pause: function() {
        return s.getInstance().pause()
      },
      stop: function() {
        return s.getInstance().stop()
      },
      clear: function() {
        return s.getInstance().clear()
      },
      isEmpty: function() {
        return s.getInstance().isEmpty()
      },
      load: function(t, e) {
        var i = r(t, e);
        return i.load()
      },
      resume: function() {
        return s.getInstance().start()
      },
      setThreads: function(t) {
        s.setThreads(t)
      },
      createAssets: function(t, e) {
        return n(t, e)
      },
      createAssetGroup: function(t, e) {
        return r(t, e)
      },
      types: a
    }
  }, {
    "./AssetGroup": 188,
    "./assetTypes": 190,
    "./createAsset": 191,
    "./queue": 192,
    "./utils/selectQueue": 194,
    "@marcom/ac-object/clone": 304
  }],
  190: [function(t, e, i) {
    "use strict";
    var n = t("./Asset/XHR"),
      r = t("./Asset/SplitFile"),
      s = t("./Asset/Img"),
      o = t("./Asset/Video"),
      a = t("./Asset/XHR/ArrayBuffer"),
      c = t("./Asset/XHR/JSON");
    e.exports = {
      XHR_ASSET: n,
      JSON_ASSET: c,
      SPLITFILE_ASSET: r,
      IMG_ASSET: s,
      VIDEO_ASSET: o,
      ARRAY_BUFFER_ASSET: a
    }
  }, {
    "./Asset/Img": 182,
    "./Asset/SplitFile": 183,
    "./Asset/Video": 184,
    "./Asset/XHR": 185,
    "./Asset/XHR/ArrayBuffer": 186,
    "./Asset/XHR/JSON": 187
  }],
  191: [function(t, e, i) {
    "use strict";

    function n(t) {
      return t = t.replace(/([?#].*)$/, ""), a[t.split(".").pop()]
    }
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      s = t("./assetTypes"),
      o = t("./Asset"),
      a = {
        txt: s.XHR_ASSET,
        xml: s.XHR_ASSET,
        csv: s.XHR_ASSET,
        json: s.JSON_ASSET,
        png: s.IMG_ASSET,
        jpg: s.IMG_ASSET,
        gif: s.IMG_ASSET,
        svg: s.IMG_ASSET,
        splitfile: s.SPLITFILE_ASSET
      };
    e.exports = function(t, e) {
      var i = {};
      return o.prototype.isPrototypeOf(t) ? src : ("string" == typeof t && (i.src = t, i.type = n(t)), "object" === ("undefined" == typeof t ? "undefined" : r(t)) && (i = t, "string" == typeof i.type && (i.type = n(i.type)), i.type || (i.type = n(i.src))), i.options || (i.options = {}), e && (i.options.queue = e), new i.type(i.src, i.options))
    }
  }, {
    "./Asset": 181,
    "./assetTypes": 190
  }],
  192: [function(t, e, i) {
    "use strict";

    function n(t) {
      return t = t || c, new a(t)
    }

    function r(t) {
      return t = t || l, o || (o = n(t)), o
    }

    function s(t) {
      l = t
    }
    var o, a = t("@marcom/ac-queue").LiveQueue,
      c = 4,
      l = c;
    e.exports = {
      getInstance: function(t) {
        return r(t)
      },
      setThreads: function(t) {
        s(t)
      },
      newInstance: function(t) {
        return n(t)
      },
      isLiveQueue: function(t) {
        return t instanceof a
      },
      DEFAULT_THREADS: c
    }
  }, {
    "@marcom/ac-queue": 338
  }],
  193: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      "function" == typeof t[e] && t[e](t)
    }
    t("@marcom/ac-polyfills/Promise"), e.exports = function(t, e, i) {
      var r = function(t, n) {
          e.scheduled(e), e.asset.once("loaded", function(i) {
            t(e)
          }), e.asset.once("error", function(r) {
            return i ? n(r) : void t(e)
          }), e.asset.load()
        },
        s = function() {
          return new Promise(r)
        },
        o = new Promise(function(t, r) {
          e.asset.once("loaded", function(i) {
            n(e, "success"), t(i)
          }), e.asset.once("error", function(s) {
            return e.error = s, n(e, "failure"), i ? r(s) : void t(e)
          })
        });
      return e.queueItem = t.enqueue(s, e.asset.priority), e.promise = o, e
    }
  }, {
    "@marcom/ac-polyfills/Promise": void 0
  }],
  194: [function(t, e, i) {
    "use strict";
    var n = t("../queue");
    e.exports = function(t, e) {
      return e = e || n.DEFAULT_THREADS, n.isLiveQueue(t) ? t : t === !0 ? n.newInstance(e) : n.getInstance()
    }
  }, {
    "../queue": 192
  }],
  195: [function(t, e, i) {
    "use strict";

    function n(t) {
      t = t || {}, s.call(this), this.id = a.getNewID(), this.executor = t.executor || o, this._reset(), this._willRun = !1, this._didDestroy = !1
    }
    var r, s = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      o = t("@marcom/ac-raf-executor/sharedRAFExecutorInstance"),
      a = t("@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance");
    r = n.prototype = Object.create(s.prototype), r.run = function() {
      return !this._willRun && (this._willRun = !0, this.executor.subscribe(this), !0)
    }, r.cancel = function() {
      var t = !1;
      return this._willRun && (this.executor.unsubscribe(this), this._willRun = !1, t = !0), this._reset(), t
    }, r.destroy = function() {
      var t = this.cancel();
      return this.executor.unsubscribe(this), this.executor = null, s.prototype.destroy.call(this), this._didDestroy = !0, t
    }, r.willRun = function() {
      return this._willRun
    }, r.isRunning = function() {
      return this._isRunning
    }, r._onAnimationFrameStart = function(t) {
      this._isRunning = !0, this._willRun = !1, this._didEmitFrameData || (this._didEmitFrameData = !0, this.trigger("start", t))
    }, r._onAnimationFrameEnd = function(t) {
      this._willRun || (this.trigger("stop", t), this._reset())
    }, r._reset = function() {
      this._didEmitFrameData = !1, this._isRunning = !1
    }, e.exports = n
  }, {
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance": 342,
    "@marcom/ac-raf-executor/sharedRAFExecutorInstance": 197
  }],
  196: [function(t, e, i) {
    "use strict";

    function n(t) {
      t = t || {}, this._reset(), this._willRun = !1, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
    }
    t("@marcom/ac-polyfills/performance/now");
    var r;
    r = n.prototype, r.subscribe = function(t) {
      return !this._nextFrameSubscribers[t.id] && (this._nextFrameSubscribers[t.id] = t, this._nextFrameSubscriberCount++, this._run(), !0)
    }, r.unsubscribe = function(t) {
      return !!this._nextFrameSubscribers[t.id] && (this._nextFrameSubscribers[t.id] = null, this._nextFrameSubscriberCount--, 0 === this._nextFrameSubscriberCount && this._cancel(), !0)
    }, r.trigger = function(t, e) {
      var i;
      for (i in this._subscribers) this._subscribers.hasOwnProperty(i) && null !== this._subscribers[i] && this._subscribers[i]._didDestroy === !1 && this._subscribers[i].trigger(t, e)
    }, r.destroy = function() {
      var t = this._cancel();
      return this._subscribers = null, this._nextFrameSubscribers = null, this._rafData = null, this._boundOnAnimationFrame = null, this._onExternalAnimationFrame = null, t
    }, r.useExternalAnimationFrame = function(t) {
      if ("boolean" == typeof t) {
        var e = this._isUsingExternalAnimationFrame;
        return t && this._animationFrame && (cancelAnimationFrame(this._animationFrame), this._animationFrame = null), !this._willRun || t || this._animationFrame || (this._animationFrame = window.requestAnimationFrame(this._boundOnAnimationFrame)), this._isUsingExternalAnimationFrame = t, t ? this._boundOnExternalAnimationFrame : e || !1
      }
    }, r._run = function() {
      if (!this._willRun) return this._willRun = !0, 0 === this.lastFrameTime && (this.lastFrameTime = performance.now()), this._animationFrameActive = !0, this._isUsingExternalAnimationFrame || (this._animationFrame = requestAnimationFrame(this._boundOnAnimationFrame)), !0
    }, r._cancel = function() {
      var t = !1;
      return this._animationFrameActive && (this._animationFrame && (cancelAnimationFrame(this._animationFrame), this._animationFrame = null), this._animationFrameActive = !1, this._willRun = !1, t = !0), this._isRunning || this._reset(), t
    }, r._onSubscribersAnimationFrameStart = function(t) {
      var e;
      for (e in this._subscribers) this._subscribers.hasOwnProperty(e) && null !== this._subscribers[e] && this._subscribers[e]._didDestroy === !1 && this._subscribers[e]._onAnimationFrameStart(t)
    }, r._onSubscribersAnimationFrameEnd = function(t) {
      var e;
      for (e in this._subscribers) this._subscribers.hasOwnProperty(e) && null !== this._subscribers[e] && this._subscribers[e]._didDestroy === !1 && this._subscribers[e]._onAnimationFrameEnd(t)
    }, r._onAnimationFrame = function(t) {
      this._subscribers = this._nextFrameSubscribers, this._nextFrameSubscribers = {}, this._nextFrameSubscriberCount = 0, this._isRunning = !0, this._willRun = !1, this._didRequestNextRAF = !1, this._rafData.delta = t - this.lastFrameTime, this.lastFrameTime = t, this._rafData.fps = 0, this._rafData.delta >= 1e3 && (this._rafData.delta = 0), 0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta), this._rafData.time = t, this._rafData.naturalFps = this._rafData.fps, this._rafData.timeNow = Date.now(), this._onSubscribersAnimationFrameStart(this._rafData), this.trigger("update", this._rafData), this.trigger("draw", this._rafData), this._onSubscribersAnimationFrameEnd(this._rafData), this._willRun || this._reset()
    }, r._onExternalAnimationFrame = function(t) {
      this._isUsingExternalAnimationFrame && this._onAnimationFrame(t)
    }, r._reset = function() {
      this._rafData = {
        time: 0,
        delta: 0,
        fps: 0,
        naturalFps: 0,
        timeNow: 0
      }, this._subscribers = {}, this._nextFrameSubscribers = {}, this._nextFrameSubscriberCount = 0, this._didEmitFrameData = !1, this._animationFrame = null, this._animationFrameActive = !1, this._isRunning = !1, this._shouldReset = !1, this.lastFrameTime = 0
    }, e.exports = n
  }, {
    "@marcom/ac-polyfills/performance/now": void 0
  }],
  197: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-shared-instance").SharedInstance,
      r = "ac-raf-executor:sharedRAFExecutorInstance",
      s = "1.0.3",
      o = t("./RAFExecutor");
    e.exports = n.share(r, s, o)
  }, {
    "./RAFExecutor": 196,
    "@marcom/ac-shared-instance": 358
  }],
  198: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Promise"), t("@marcom/ac-polyfills/JSON"), e.exports = {
      createFlow: t("./ac-flow/flow/factory"),
      Player: t("./ac-flow/flow/Player")
    }
  }, {
    "./ac-flow/flow/Player": 201,
    "./ac-flow/flow/factory": 212,
    "@marcom/ac-polyfills/JSON": void 0,
    "@marcom/ac-polyfills/Promise": void 0
  }],
  199: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n) {
      r.call(this), this._compositor = new l(e, i, n), this.options = t || {}
    }
    var r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      s = t("./compositor/decorator/Keyframe"),
      o = t("./compositor/decorator/Superframe"),
      a = t("./compositor/decorator/SuperKeyframe"),
      c = t("./compositor/decorator/Cache"),
      l = t("./compositor/Sequence"),
      u = n.prototype = new r(null);
    u._gotoImageFrame = function(t) {
      return this._rendering ? Promise.resolve() : this._currentFrame === t ? Promise.resolve() : (this._rendering = !0, this._compositor.compositeFrames(this._currentFrame, t).then(function() {
        this._rendering = !1, this._currentFrame = t
      }.bind(this)))
    }, u.init = function() {
      var t;
      return "CANVAS" === this.options.element.nodeName ? t = this.options.element : (t = document.createElement("canvas"), this.options.element.appendChild(t)), this.gotoFrame = this._gotoImageFrame, this._compositor.init(t).then(this._decorateCompositor.bind(this))
    }, u.resumeLoading = function() {
      return this._compositor.resumeLoading()
    }, u.pauseLoading = function() {
      this._compositor.pauseLoading()
    }, u._decorateCompositor = function() {
      var t, e, i = this._compositor;
      return i ? (t = this._compositor._diffRender.flowData, e = this._compositor.canvas, t.superframeFrequency && (i = new o(i, t.superframeFrequency)), t.version >= 4 && (i = new s(i)), t.version >= 4 && t.superframeFrequency && (i = new a(i)), this.options.keyframeCache && (i = new c(i, this.options.keyframeCache)), i === this._compositor ? Promise.resolve() : (this._compositor = i, this._compositor.init(e))) : Promise.reject()
    }, u._destroy = function() {
      this.off(), this._compositor.destroy()
    }, "function" != typeof Object.defineProperties && (Object.defineProperties = function() {}), Object.defineProperties(u, {
      _currentFrame: {
        value: 0,
        enumerable: !1,
        writable: !0
      },
      frameCount: {
        get: function() {
          return this._compositor.frameCount
        },
        enumerable: !0
      }
    }), e.exports = n
  }, {
    "./compositor/Sequence": 202,
    "./compositor/decorator/Cache": 203,
    "./compositor/decorator/Keyframe": 204,
    "./compositor/decorator/SuperKeyframe": 205,
    "./compositor/decorator/Superframe": 206,
    "@marcom/ac-event-emitter-micro": 156
  }],
  200: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-asset-loader/assetLoader"),
      r = t("./data/provider/Async"),
      s = function(t, e, i) {
        this._manifestUrl = t, this._keyframeUrls = e, this._imageUrlPattern = i, this.state = {
          manifestLoaded: !1,
          keyframesLoaded: !1,
          diffsLoaded: !1,
          diffCountLoaded: 0,
          totalDiffs: null
        }, this.assets = {
          keyframes: null,
          manifest: null,
          diffs: null
        }, this._promises = {}, this._loaders = {}, this._activeLoaders = [], this._resumeQueue = [], this._paused = !0, this._shouldPause = !1, this._boundOnManifestLoaded = this._onManifestLoaded.bind(this), this._boundOnKeyframesLoaded = this._onKeyframesLoaded.bind(this), this._boundOnDiffsLoaded = this._onDiffsLoaded.bind(this)
      },
      o = s.prototype;
    o.setManifestUrl = function(t) {
      return this._manifestUrl = t, this
    }, o.setKeyframeUrls = function(t) {
      return this._keyframeUrls = t, this
    }, o.setImageUrlPattern = function(t) {
      return this._imageUrlPattern = t, this
    }, o.pause = function() {
      this._shouldPause = !0;
      var t, e = this._activeLoaders.length;
      for (t = 0; t < e; t++) this._activeLoaders[t].pause();
      this._paused = !0
    }, o.destroy = function() {
      var t, e, i;
      this.pause();
      for (t in this._loaders) this._loaders.hasOwnProperty(t) && this._loaders[t].destroy();
      for (e in this._promises) this._promises.hasOwnProperty(e) && "pending" === this._promises[e].status() && this._promises[e].reject();
      for (i in this) this.hasOwnProperty(i) && (this[i] = null)
    }, o.load = function() {
      if (this._paused && (this._activeLoaders.length > 0 || this._resumeQueue.length > 0)) return this._resume(), !0
    }, o._resume = function() {
      this._shouldPause = !1;
      var t, e = this._activeLoaders.length;
      for (t = 0; t < e; t++) this._activeLoaders[t].load();
      var i, n = this._resumeQueue.length;
      for (i = 0; i < n; i++) this._resumeQueue[i].call(this);
      this._resumeQueue = [], this._paused = !1
    }, o.loadManifest = function() {
      return this._shouldPause ? void this._resumeQueue.push(this.loadManifest) : this.assets.manifest ? this.assets.manifest : (this._paused = !1, this._loaders.manifest = new r(this._getManifestAssetsData()), this._activeLoaders.push(this._loaders.manifest), this._loaders.manifest.load().then(this._boundOnManifestLoaded))
    }, o.loadKeyframes = function() {
      var t;
      return this._shouldPause && this._resumeQueue.push(this.loadKeyframes), this.assets.keyframes ? t = Promise.resolve(this.assets.keyframes) : (this._paused = !1, this._loaders.keyframes = n.createAssetGroup(this._getKeyframesAssetsData()), this._activeLoaders.push(this._loaders.keyframes), t = this._loaders.keyframes.load().then(this._boundOnKeyframesLoaded)), this._promises.keyframes = t, this._promises.keyframes
    }, o.loadDiffs = function() {
      var t;
      return this._shouldPause && this._resumeQueue.push(this.loadDiffs), this.assets.diffs ? t = this._promises.diffs.resolve(this.assets.diffs) : (this._paused = !1, this._loaders.diffs = n.createAssetGroup(this._getDiffsAssetsData()), this._activeLoaders.push(this._loaders.diffs), t = this._loaders.diffs.load().then(this._boundOnDiffsLoaded)), this._promises.diffs = t, this._promises.diffs
    }, o._getManifestAssetsData = function() {
      return this._manifestUrl
    }, o._getKeyframesAssetsData = function() {
      return this._keyframeUrls
    }, o._getDiffsAssetsData = function() {
      var t, e, i = this.assets.manifest.imagesRequired,
        n = [],
        r = this._imageUrlPattern.match(/#/g).length;
      for (t = 1; t <= i; t++) e = "0000" + t, e = e.substring(e.length - r), n.push(this._imageUrlPattern.replace(/#{2,}/g, e));
      return n
    }, o._onManifestLoaded = function(t) {
      if (this.assets) return this.assets.manifest = t, this.state.manifestLoaded = !0, this._paused = !0, this._removeFromActiveLoaders(this._loaders.manifest), this.assets.manifest
    }, o._onKeyframesLoaded = function(t) {
      if (this.assets) return this.assets.keyframes = t, this.state.keyframeLoaded = !0, this._paused = !0, this._removeFromActiveLoaders(this._loaders.keyframes), Promise.resolve(this.assets.keyframes)
    }, o._onDiffsLoaded = function(t) {
      if (this.assets) return this.assets.diffs = t, this.state.diffsLoaded = !0, this._paused = !0, this._removeFromActiveLoaders(this._loaders.diffs), Promise.resolve(this.assets.diffs)
    }, o._removeFromActiveLoaders = function(t) {
      var e, i = this._activeLoaders.length;
      for (e = 0; e < i; e++)
        if (this._activeLoaders[e] === t) return void this._activeLoaders.splice(e, 1)
    }, e.exports = s
  }, {
    "./data/provider/Async": 210,
    "@marcom/ac-asset-loader/assetLoader": 189
  }],
  201: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this.element = e, this._domEmitter = new r(e), this._frameRate = 30, this.paused = !0, this.loop = !1, this._destroyed = !1, this._flow = t, this._rafEmitter = new s, this._rafDrawSet = !1, this._shouldAdvanceToTimeGlobal = !1, this._shouldGlobalTimeUpdate = !1, this._shouldLocalTimeUpdate = !1, this._boundAdvanceTimeToGlobal = this._advanceToTimeGlobal.bind(this), this._onBoundGlobalTimeUpdate = this._onGlobalTimeUpdate.bind(this), this._onBoundLocalTimeUpdate = this._onLocalTimeUpdate.bind(this), this._rafEmitter.on("draw", this._onDraw.bind(this))
    }
    var r = t("@marcom/ac-dom-emitter").DOMEmitter,
      s = t("@marcom/ac-raf-emitter/RAFEmitter"),
      o = n.prototype;
    o._timeToFrame = function(t) {
      var e;
      return e = Math.round(t / this.duration * this._flow.frameCount), e %= this._flow.frameCount + 1, e < 0 ? this._flow.frameCount + e : e
    }, o._advanceToTimeGlobal = function(t) {
      if (this._rafDrawSet) {
        this._prevTime = this._prevTime || t.time, this._currentTime += (t.time - this._prevTime) / 1e3 * this.playbackRate, this._prevTime = t.time, this._pauseAfterRender = !1;
        var e = this._timeToFrame(this._currentTime);
        if (this.loop ? this._currentTime = (this.duration + this._currentTime) % this.duration : this.playbackRate > 0 && this._currentTime > this.duration ? (e = this._flow.frameCount, this._currentTime = this.duration, this._pauseAfterRender = !0) : this.playbackRate < 0 && this._currentTime < 0 && (e = 0, this._currentTime = 0, this._pauseAfterRender = !0), !this.paused && !this.seeking) return this._flow.gotoFrame(e).then(this._onBoundGlobalTimeUpdate)
      }
    }, o._onGlobalTimeUpdate = function() {
      this.trigger("timeupdate"), this._pauseAfterRender ? (this.paused = !0, this.trigger("ended")) : this._bindAdvanceToTimeGlobal()
    }, o._onLocalTimeUpdate = function() {
      this.seeking = !1, this.trigger("timeupdate"), this.trigger("seeked"), this._bindAdvanceToTimeGlobal()
    }, o._advanceToTimeLocal = function(t) {
      this.seeking || (this.seeking = !0, this.trigger("seeking"), this._currentTime = 1 * t, this._prevTime = null, this._cancelFrame(), this._flow.gotoFrame(this._timeToFrame(t)).then(this._onBoundLocalTimeUpdate))
    }, o._onLoaded = function() {
      this.trigger("loaded"), this.trigger("canplaythrough")
    }, o._nullProperties = function(t) {
      var e;
      for (e in t) t.hasOwnProperty(e) && (t[e] = null);
      return t
    }, o.destroy = function() {
      this._rafEmitter.destroy(), this.trigger("destroy"), this.pause(), this.off(), this._flow.destroy(), this._flow = this._nullProperties(this._flow), this._nullProperties(this)
    }, o.load = function() {
      if (!this._flow.resumeLoading()) return this.trigger("loadstart"), this._flow.init().then(function(t) {
        var e = function() {
            this._onLoaded()
          }.bind(this),
          i = function() {
            this._destroyed === !1 && this.trigger("error")
          }.bind(this);
        return t ? t.then(e, i) : void e()
      }.bind(this))
    }, o.pauseLoading = function() {
      this._flow.pauseLoading()
    }, o.play = function() {
      return this.paused && (this.paused = !1, this.trigger("play"), this._prevTime = null, this._bindAdvanceToTimeGlobal()), this
    }, o.pause = function() {
      return this.paused || (this.paused = !0, this._cancelFrame(), this.trigger("pause")), this
    }, o.on = function() {
      this._domEmitter.on.apply(this._domEmitter, arguments)
    }, o.once = function() {
      this._domEmitter.once.apply(this._domEmitter, arguments)
    }, o.trigger = function() {
      this._domEmitter.trigger.apply(this._domEmitter, arguments)
    }, o.off = function() {
      this._domEmitter.off.apply(this._domEmitter, arguments)
    }, o._cancelFrame = function() {
      this._rafEmitter.cancel(), this._rafDrawSet = !1
    }, o._onDraw = function(t) {
      this._shouldAdvanceToTimeGlobal ? this._advanceToTimeGlobal(t) : this._shouldGlobalTimeUpdate ? this._onGlobalTimeUpdate(t) : this._shouldLocalTimeUpdate && this._onLocalTimeUpdate(t), this._shouldLocalTimeUpdate = !1, this._shouldGlobalTimeUpdate = !1, this._shouldLocalTimeUpdate = !1
    }, o._bindAdvanceToTimeGlobal = function() {
      this._rafDrawSet = !0, this._shouldAdvanceToTimeGlobal = !0, this._rafEmitter.run()
    }, o._bindGlobalTimeUpdate = function() {
      this._rafDrawSet = !0, this._shouldGlobalTimeUpdate = !0, this._rafEmitter.run()
    }, o._bindLocalTimeUpdate = function() {
      this._rafDrawSet = !0, this._shouldLocalTimeUpdate = !0, this._rafEmitter.run()
    }, "function" != typeof Object.defineProperties && (Object.defineProperties = function() {}), Object.defineProperties(o, {
      _currentTime: {
        value: 0,
        enumerable: !1,
        writable: !0
      },
      _playbackRate: {
        value: 1,
        enumerable: !1,
        writable: !0
      },
      currentTime: {
        get: function() {
          return 1 * this._currentTime
        },
        set: o._advanceToTimeLocal,
        enumerable: !0
      },
      frameRate: {
        get: function() {
          return this._frameRate
        },
        set: function(t) {
          isFinite(t) && (this._frameRate = t, this.trigger("durationchange"))
        },
        enumerable: !0
      },
      playbackRate: {
        get: function() {
          return 1 * this._playbackRate
        },
        set: function(t) {
          isFinite(t) && (this._playbackRate = 1 * t, this.trigger("ratechange"))
        },
        enumerable: !0
      },
      duration: {
        get: function() {
          return this._flow.frameCount / this.frameRate
        },
        enumerable: !0
      }
    }), e.exports = n
  }, {
    "@marcom/ac-dom-emitter": 68,
    "@marcom/ac-raf-emitter/RAFEmitter": 195
  }],
  202: [function(t, e, i) {
    "use strict";

    function n(t, e, i) {
      this._keyframes = e, this._imageUrlPattern = i, this._loadController = new s(t, e, i)
    }
    var r = t("../diff/Render"),
      s = t("../LoadController"),
      o = n.prototype;
    o._initDiffRender = function(t) {
      this._images = t.assets.map(function(t) {
        return t.data
      }), this.canvas.height = this._images[0].height, this.canvas.width = this._images[0].width, this.applyFrame(this._images[0])
    }, o.init = function(t) {
      return this.canvas = t || document.createElement("canvas"), this.context = t.getContext("2d"), this._loadController.loadKeyframes().then(this._initDiffRender.bind(this)).then(this._loadController.loadManifest.bind(this._loadController)).then(this.createDiffRender.bind(this))
    }, o.resumeLoading = function() {
      return this._loadController.load()
    }, o.pauseLoading = function() {
      this._loadController.pause()
    }, o.createDiffRender = function(t) {
      return this._diffRender = new r(t, this._imageUrlPattern, this._loadController), this._diffRender.init()
    }, o.applyFrame = function(t) {
      var e = this.context;
      e.drawImage(t, 0, 0)
    }, o.calculateRenderCount = function(t, e) {
      var i = 0;
      return Math.abs(e - t) >= e ? (t = 1, i = 1) : Math.abs(e - t) >= this.frameCount - e && this._images[1] && (t = this.frameCount - 2, i = 1), e > 0 && e < this.frameCount - 1 ? Math.abs(t - e) + i : i
    }, o.compositeFrames = function(t, e) {
      e = this.frameCount < e ? this.frameCount - 1 : e < 0 ? 0 : e, t = this.frameCount - 2 < t ? this.frameCount - 2 : t < 0 ? 0 : t;
      var i;
      if (Math.abs(e - t) >= e ? (t = 1, this.applyFrame(this._images[0])) : Math.abs(e - t) >= this.frameCount - e && this._images[1] && (t = this.frameCount - 2, this.applyFrame(this._images[1])), i = t > e ? -1 : t < e ? 1 : 0, e > 0 && e < this.frameCount - 1)
        for (; t !== e;) this._diffRender.renderDiff(this.canvas, t), t += i;
      return Promise.resolve(t)
    }, o.destroy = function() {
      this._loadController.destroy()
    }, "function" != typeof Object.defineProperties && (Object.defineProperties = function() {}), Object.defineProperties(o, {
      frameCount: {
        get: function() {
          return this._diffRender.frames.length + 2
        },
        enumerable: !0
      },
      canvas: {
        get: function() {
          return this._canvas
        },
        set: function(t) {
          return this._canvas = t
        },
        enumerable: !0
      },
      mainCompositor: {
        get: function() {
          for (var t = this; t._compositor;) t = t._compositor;
          return t
        },
        enumerable: !0
      }
    }), e.exports = n
  }, {
    "../LoadController": 200,
    "../diff/Render": 211
  }],
  203: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this._compositor = t, this._keyframeInterval = e || 8, this._keyframes = []
    }
    var r = n.prototype;
    r._getClosestKeyframe = function(t) {
      var e = t % this._keyframeInterval,
        i = Math.floor(t / this._keyframeInterval) + (e > this._keyframeInterval / 2 ? 1 : 0);
      return i
    }, r._getFrameFromKeyframe = function(t) {
      return t * this._keyframeInterval
    }, r._saveKeyframe = function(t) {
      var e, i = Math.floor(t / this._keyframeInterval);
      t % this._keyframeInterval !== 0 || this._keyframes[i] || (e = document.createElement("canvas"), e.width = this._compositor.canvas.width, e.height = this._compositor.canvas.height, e.getContext("2d").drawImage(this._compositor.canvas, 0, 0), this._keyframes[i] = e)
    }, r.init = function(t) {
      return this._compositor.init.apply(this._compositor, arguments)
    }, r.resumeLoading = function() {
      return this._compositor.resumeLoading()
    }, r.pauseLoading = function() {
      return this._compositor.pauseLoading()
    }, r.applyFrame = function() {
      this._compositor.applyFrame.apply(this._compositor, arguments)
    }, r.calculateRenderCount = function(t, e) {
      return t = this._getFrameFromKeyframe(this._getClosestKeyframe(e)), this._compositor.calculateRenderCount(t, e) + 1
    }, r.compositeFrames = function(t, e) {
      var i = this._getClosestKeyframe(e);
      return this._keyframes[i] && this._compositor.calculateRenderCount(t, e) > this.calculateRenderCount(t, e) ? (t = this._getFrameFromKeyframe(i), this.applyFrame(this._keyframes[i]), this._compositor.compositeFrames(t, e).then(function() {})) : this._compositor.compositeFrames(t, e).then(function() {}, null, this._saveKeyframe.bind(this))
    }, r.destroy = function() {
      return this._compositor.destroy()
    }, "function" != typeof Object.defineProperties && (Object.defineProperties = function() {}), Object.defineProperties(r, {
      frameCount: {
        get: function() {
          return this._compositor.frameCount
        },
        enumerable: !0
      },
      canvas: {
        get: function() {
          return this._compositor.canvas
        },
        set: function(t) {
          return this._compositor.canvas = t
        },
        enumerable: !0
      }
    }), e.exports = n
  }, {}],
  204: [function(t, e, i) {
    "use strict";

    function n(t) {
      this._compositor = t, this._flowDataProvider = this.mainCompositor._loadController._loaders.manifest
    }
    var r = t("../../keyframe/Render"),
      s = n.prototype;
    s.init = function(t) {
      return this._keyframeDiffRender = new r(this._flowDataProvider._data, this.mainCompositor._imageUrlPattern), this._keyframeDiffRender.init()
    }, s.resumeLoading = function() {
      return this._compositor.resumeLoading()
    }, s.pauseLoading = function() {
      return this._compositor.pauseLoading()
    }, s.applyFrame = function(t) {
      return this._compositor.applyFrame.apply(this._compositor, arguments)
    }, s.applyKeyframe = function(t, e) {
      this._keyframeDiffRender.renderKeyframe(this.canvas, t, e)
    }, s.compositeFrames = function(t, e) {
      return this._isKeyframeDiff(e - 1) ? (this.applyKeyframe(e - 1), Promise.resolve(t - 1)) : this._compositor.compositeFrames.apply(this._compositor, arguments)
    }, s._isKeyframeDiff = function(t) {
      return t in this._keyframeDiffRender._loader._keyframes
    }, s.calculateRenderCount = function(t, e) {
      return this._compositor.calculateRenderCount.apply(this._compositor, arguments)
    }, s.destroy = function() {
      return this._compositor.destroy()
    }, "function" != typeof Object.defineProperties && (Object.defineProperties = function() {}), Object.defineProperties(s, {
      frameCount: {
        get: function() {
          return this._compositor.frameCount
        },
        enumerable: !0
      },
      canvas: {
        get: function() {
          return this._compositor.canvas
        },
        set: function(t) {
          return this._compositor.canvas = t
        },
        enumerable: !0
      },
      mainCompositor: {
        get: function() {
          return this._compositor.mainCompositor
        },
        enumerable: !0
      }
    }), e.exports = n
  }, {
    "../../keyframe/Render": 214
  }],
  205: [function(t, e, i) {
    "use strict";

    function n(t) {
      this._compositor = t, this._frames = this.mainCompositor._loadController._loaders.manifest._data.frames, this._superframeInterval = this.mainCompositor._diffRender.flowData.superframeFrequency
    }
    var r = n.prototype;
    r.init = function(t) {
      return this._compositor.init.apply(this._compositor, arguments)
    }, r.resumeLoading = function() {
      return this._compositor.resumeLoading()
    }, r.pauseLoading = function() {
      return this._compositor.pauseLoading()
    }, r.applyFrame = function(t) {
      return this._compositor.applyFrame.apply(this._compositor, arguments)
    }, r.applyKeyframe = function(t, e) {
      this._compositor.applyKeyframe.apply(this._compositor, arguments)
    }, r.compositeFrames = function(t, e) {
      var i, n;
      return e < 1 || e > this.frameCount - 2 ? this._compositor.compositeFrames.apply(this._compositor, arguments) : this._isKeyframeDiff(e - 1) ? (i = 1 === Math.abs(t - e), this.applyKeyframe(e - 1, i), Promise.resolve(t - 1)) : Math.abs(e - t) > this._superframeInterval && (n = this._getShortestRender(t, e), this._isKeyframeDiff(n - 1) || n <= 0 || n >= this.frameCount - 2) ? this._compositeFromSuperKeyframe(n, e) : this._compositor.compositeFrames.apply(this._compositor, [t, e])
    }, r._getShortestRender = function(t, e) {
      var i = this._compositor.calculateRenderCount,
        n = this._getClosestSuperKeyframe(e - 1),
        r = i.apply(this._compositor, [n, e]) + 1,
        s = i.apply(this._compositor, [t, e]);
      return r <= s ? n : t
    }, r._compositeFromSuperKeyframe = function(t, e) {
      var i = this.canvas.getContext("2d"),
        n = t <= 0 ? this.mainCompositor._images[0] : t >= this.frameCount - 2 ? this.mainCompositor._images[1] : this._frames[t - 1].image;
      return i.drawImage(n, 0, 0), this._compositor.compositeFrames.call(this._compositor, t, e)
    }, r._getClosestSuperFrame = function(t) {
      return Math.round(t / this._superframeInterval) * this._superframeInterval
    }, r._getClosestSuperKeyframe = function(t) {
      var e, i, n, r, s = this._frames.length;
      if (t < s + 1 && t > 0) {
        for (r = t - 1; r >= 0;) {
          if ("keyframe" === this._frames[r].type) {
            e = r + 1;
            break
          }
          r -= 1
        }
        for (r = t + 1; r <= s - 1;) {
          if ("keyframe" === this._frames[r].type) {
            i = r + 1;
            break
          }
          r += 1
        }
      }
      return e = e ? e : 0, i = i ? i : this.frameCount, n = t - e < i - t ? e : i
    }, r._isKeyframeDiff = function(t) {
      return this._compositor._isKeyframeDiff.apply(this._compositor, arguments)
    }, r.destroy = function() {
      return this._compositor.destroy()
    }, "function" != typeof Object.defineProperties && (Object.defineProperties = function() {}), Object.defineProperties(r, {
      frameCount: {
        get: function() {
          return this._compositor.frameCount
        },
        enumerable: !0
      },
      canvas: {
        get: function() {
          return this._compositor.canvas
        },
        set: function(t) {
          return this._compositor.canvas = t
        },
        enumerable: !0
      },
      mainCompositor: {
        get: function() {
          return this._compositor.mainCompositor
        },
        enumerable: !0
      }
    }), e.exports = n
  }, {}],
  206: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this._compositor = t, this._superframeInterval = e || 4
    }
    var r = n.prototype;
    r._getClosestSuperframe = function(t) {
      return Math.round(t / this._superframeInterval) * this._superframeInterval
    }, r.init = function(t) {
      this._screenCanvas = t
    }, r.resumeLoading = function() {
      return this._compositor.resumeLoading()
    }, r.pauseLoading = function() {
      return this._compositor.pauseLoading()
    }, r.applyFrame = function() {
      this._compositor.applyFrame.apply(this._compositor, arguments)
    }, r.calculateRenderCount = function(t, e) {
      var i = this._getClosestSuperframe(t);
      return Math.abs(i - e) > this._superframeInterval / 2 ? (t = i + (t > e ? -1 : 1) * this._superframeInterval, this.calculateRenderCount(t, e) + 1) : Math.abs(i - e) + 1
    }, r.compositeFrames = function(t, e) {
      var i, n;
      return (e <= 0 || e >= this.frameCount - 2) && this._compositor.compositeFrames(t, e), t > this.frameCount - 2 ? t = this.frameCount - 2 : t <= 0 && (t = 1), n = this._getClosestSuperframe(t), i = this._compositor.calculateRenderCount(t, e) > this.calculateRenderCount(t, e) ? this._compositor.compositeFrames(n, n).then(function() {
        var i = n + (t > e ? -1 : 1) * this._superframeInterval;
        this._compositor.compositeFrames(n, i).then(function() {
          return this.compositeFrames(i, e)
        }.bind(this))
      }.bind(this)) : this._compositor.compositeFrames(t, e).then(function() {}.bind(this)), i.then(function() {}.bind(this)), i
    }, r.destroy = function() {
      return this._compositor.destroy()
    }, "function" != typeof Object.defineProperties && (Object.defineProperties = function() {}), Object.defineProperties(r, {
      frameCount: {
        get: function() {
          return this._compositor.frameCount
        },
        enumerable: !0
      },
      canvas: {
        get: function() {
          return this._compositor.canvas
        },
        set: function(t) {
          return this._compositor.canvas = t
        },
        enumerable: !0
      },
      mainCompositor: {
        get: function() {
          return this._compositor.mainCompositor
        },
        enumerable: !0
      }
    }), e.exports = n
  }, {}],
  207: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this.location = t, this.length = e
    }
    e.exports = n
  }, {}],
  208: [function(t, e, i) {
    "use strict";

    function n() {}
    e.exports = n
  }, {}],
  209: [function(t, e, i) {
    "use strict";
    var n, r = t("./Manifest"),
      s = t("./Block"),
      o = {
        parseData: function(t) {
          n = 0;
          var e = t.frames.map(this._parseFrame, this);
          return Object.create(r.prototype, {
            version: {
              value: t.version
            },
            framecount: {
              value: t.frameCount
            },
            blockSize: {
              value: t.blockSize
            },
            imagesRequired: {
              value: t.imagesRequired
            },
            reversible: {
              value: t.reversible
            },
            superframeFrequency: {
              value: t.superframeFrequency
            },
            frames: {
              value: e
            }
          })
        },
        _valueForCharAt: function(t, e) {
          var i = t.charCodeAt(e);
          return i > 64 && i < 91 ? i - 65 : i > 96 && i < 123 ? i - 71 : i > 47 && i < 58 ? i + 4 : 43 === i ? 62 : 47 === i ? 63 : void 0
        },
        _createNumberFromBase64Range: function(t, e, i) {
          for (var n, r = 0; i--;) n = this._valueForCharAt(t, e++), r += n << 6 * i;
          return r
        },
        _parseFrame: function(t) {
          var e, i, n, r = [],
            o = t.value,
            a = t.startImageIndex,
            c = t.startBlockIndex;
          if ("keyframe" === t.type) return r.type = "keyframe", r.width = t.width, r.height = t.height, r.x = t.x, r.y = t.y, r;
          for (e = 0; e < o.length; e += 5) n = this._createNumberFromBase64Range(o, e, 3), i = this._createNumberFromBase64Range(o, e + 3, 2), r.push(Object.create(s.prototype, {
            location: {
              value: n,
              enumerable: !0
            },
            length: {
              value: i,
              enumerable: !0
            },
            block: {
              value: (c += i) - i,
              enumerable: !0
            },
            startImageIndex: {
              value: a,
              enumerable: !0
            }
          }));
          return r
        }
      };
    e.exports = o
  }, {
    "./Block": 207,
    "./Manifest": 208
  }],
  210: [function(t, e, i) {
    "use strict";

    function n(t) {
      this.url = t
    }
    var r = t("@marcom/ac-asset-loader/assetLoader"),
      s = t("../processor"),
      o = n.prototype;
    o.load = function() {
      return r.load(this.url).then(function(t) {
        var e;
        return t && t.latest && t.latest.data && (e = s.parseData(t.latest.data), this._data = e), e
      }.bind(this))
    }, e.exports = n
  }, {
    "../processor": 209,
    "@marcom/ac-asset-loader/assetLoader": 189
  }],
  211: [function(t, e, i) {
    "use strict";

    function n(t, e, i) {
      this.flowData = t, this.flowData.imageUrlPattern = e, this._loadController = i
    }
    var r = n.prototype;
    r._storeImages = function(t) {
      var e = t.assets.length;
      this.images = t.assets.map(function(t) {
        return t.data
      }), this._blocksPerFullDiff = [], this._blockCountUpToIndex = [];
      for (var i = 0, n = 0; n < e; n++) this._blocksPerFullDiff[n] = this.images[n].width / this.flowData.blockSize * (this.images[n].height / this.flowData.blockSize), i += this._blocksPerFullDiff[n], this._blockCountUpToIndex[n] = i
    }, r._applyDiffRange = function(t, e) {
      for (var i, n, r = e.block, s = e.length, o = t.canvas.width / this.flowData.blockSize, a = e.startImageIndex, c = this.images[a].width, l = r % this._blockCountUpToIndex[a], u = c / this.flowData.blockSize, h = l % u * this.flowData.blockSize, d = Math.floor(l / (u || 1)) * this.flowData.blockSize, m = e.location % o * this.flowData.blockSize, f = Math.floor(e.location / o) * this.flowData.blockSize; s;) i = Math.min(s * this.flowData.blockSize, t.canvas.width - m, c - h), n = i / this.flowData.blockSize, t.drawImage(this.images[a], h, d, i, this.flowData.blockSize, m, f, i, this.flowData.blockSize), s -= n, s && ((h += i) >= c && (h = 0, d += this.flowData.blockSize), (m += i) >= t.canvas.width && (m = 0, f += this.flowData.blockSize), r += n)
    }, r.init = function() {
      return this._loadController.loadDiffs().then(this._storeImages.bind(this))
    }, r.renderDiff = function(t, e) {
      var i = t.getContext("2d");
      e -= 1;
      for (var n = 0, r = this.frames[e].length; n < r; n++) this._applyDiffRange(i, this.frames[e][n])
    }, "function" != typeof Object.defineProperties && (Object.defineProperties = function() {}), Object.defineProperties(r, {
      frames: {
        get: function() {
          return this.flowData.frames
        },
        set: function(t) {
          this.flowData.frames = t
        },
        enumerable: !0
      }
    }), e.exports = n
  }, {}],
  212: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-object/defaults"),
      r = t("./Flow"),
      s = t("./Player"),
      o = {
        keyframeCache: 8,
        preload: !0
      },
      a = {
        fileFormat: "jpg",
        baseName: "flow",
        imageUrlPattern: "###",
        startframeFileFormat: null,
        endframeFileFormat: null,
        basePath: null,
        manifestPath: null,
        manifestFileFormat: "json",
        diffPath: null,
        framePath: null
      },
      c = function(t) {
        return t.lastIndexOf("/") !== t.length - 1 && (t += "/"), t
      },
      l = function(t) {
        var e = t.basePath ? c(t.basePath) : null,
          i = t.framePath ? c(t.framePath) : null,
          n = t.diffPath ? c(t.diffPath) : null,
          r = t.manifestPath ? c(t.manifestPath) : null,
          s = t.baseName + "_",
          o = {};
        return o.startframe = (i || e) + s + "startframe." + (t.startframeFileFormat || t.fileFormat), o.endframe = (i || e) + s + "endframe." + (t.endframeFileFormat || t.fileFormat), o.imageUrlPattern = (n || e) + s + t.imageUrlPattern + "." + t.fileFormat, o.manifest = (r || e) + s + "manifest." + t.manifestFileFormat, o
      },
      u = function(t, e) {
        var i = l(e),
          n = [i.startframe, i.endframe];
        return new r(t, i.manifest, n, i.imageUrlPattern)
      },
      h = function(t, e) {
        var i = t || {},
          r = e || {};
        i = n(o, t), r = n(a, e), i.element || (t.element = document.createElement("canvas"));
        var c = u(i, r),
          l = new s(c, i.element);
        return i.preload && l.load(), l
      };
    e.exports = h
  }, {
    "./Flow": 199,
    "./Player": 201,
    "@marcom/ac-object/defaults": 306
  }],
  213: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      var i, n = t.match(/#/g).length;
      this._keyframes = {}, t = t.replace(/([^#]+)(#+)(\..*)/, "$1key_$2$3"), this._imageUrls = [], e.frames && e.frames.forEach(function(e, r) {
        "keyframe" === e.type && (i = "0000" + r, i = i.substring(i.length - n), this._imageUrls.push(t.replace(/#+/g, i)), this._keyframes[r] = e)
      }.bind(this))
    }
    var r = t("@marcom/ac-asset-loader/assetLoader"),
      s = n.prototype;
    s.load = function() {
      return this._imageUrls.length > 0 ? r.load(this._imageUrls) : Promise.resolve()
    }, "function" != typeof Object.defineProperties && (Object.defineProperties = function() {}), Object.defineProperties(s, {
      keyframes: {
        get: function() {
          return this._keyframes
        },
        enumerable: !0
      }
    }), e.exports = n
  }, {
    "@marcom/ac-asset-loader/assetLoader": 189
  }],
  214: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this.flowData = t, this.flowData.imageUrlPattern = e
    }
    var r = t("./Loader"),
      s = n.prototype;
    s._storeImages = function(t) {
      var e, i = 0;
      if (t && t.assets.length > 0)
        for (var n in this._loader._keyframes) this._loader._keyframes.hasOwnProperty(n) && (e = t.assets[i], this._loader._keyframes[n].image = e.data, i += 1)
    }, s.init = function() {
      return this._loader = new r(this.flowData.imageUrlPattern, this.flowData), this._loader.load().then(this._storeImages.bind(this))
    }, s.renderKeyframe = function(t, e, i) {
      var n = t.getContext("2d"),
        r = this._loader.keyframes[e],
        s = r.image,
        o = r.x,
        a = r.y,
        c = r.width,
        l = r.height;
      i === !0 ? n.drawImage(s, o, a, c, l, o, a, c, l) : this.flowData.reversible ? n.drawImage(s, 0, 0) : n.drawImage(s, o, a, c, l)
    }, e.exports = n
  }, {
    "./Loader": 213
  }],
  215: [function(t, e, i) {
    "use strict";
    e.exports = t("./fullscreen")
  }, {
    "./fullscreen": 221
  }],
  216: [function(t, e, i) {
    "use strict";
    e.exports = {
      STANDARD: "standard",
      IOS: "ios"
    }
  }, {}],
  217: [function(t, e, i) {
    "use strict";

    function n(t) {
      h.trigger(l.ENTERFULLSCREEN, t)
    }

    function r(t) {
      h.trigger(l.EXITFULLSCREEN, t)
    }

    function s(t) {
      h.fullscreenElement() ? n(t) : r(t)
    }

    function o() {
      a(document, "fullscreenchange", s)
    }
    var a = t("@marcom/ac-dom-events/addEventListener"),
      c = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      l = t("./../events/types"),
      u = t("./../consts/modes"),
      h = new c;
    o(), h.fullscreenEnabled = function(t) {
      var e = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
      return !!e
    }, h.fullscreenElement = function() {
      return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement
    }, h.exitFullscreen = function(t) {
      var e;
      "function" == typeof document.exitFullscreen ? e = "exitFullscreen" : "function" == typeof document.webkitExitFullscreen ? e = "webkitExitFullscreen" : "function" == typeof document.webkitCancelFullScreen ? e = "webkitCancelFullScreen" : "function" == typeof document.mozCancelFullScreen ? e = "mozCancelFullScreen" : "function" == typeof document.msExitFullscreen && (e = "msExitFullscreen"), "function" == typeof document[e] && document[e].call(document)
    }, h.requestFullscreen = function(t) {
      var e;
      "function" == typeof t.requestFullscreen ? e = "requestFullscreen" : "function" == typeof t.webkitRequestFullscreen ? e = "webkitRequestFullscreen" : "function" == typeof t.webkitRequestFullScreen ? e = "webkitRequestFullScreen" : "function" == typeof t.mozRequestFullScreen ? e = "mozRequestFullScreen" : "function" == typeof t.msRequestFullscreen && (e = "msRequestFullscreen"), "function" == typeof t[e] && t[e].call(t)
    }, h.mode = u.STANDARD, e.exports = h
  }, {
    "./../consts/modes": 216,
    "./../events/types": 220,
    "@marcom/ac-dom-events/addEventListener": 71,
    "@marcom/ac-event-emitter-micro": 156
  }],
  218: [function(t, e, i) {
    "use strict";
    var n = t("./ios"),
      r = t("./desktop");
    e.exports = {
      create: function() {
        var t = r;
        return "webkitEnterFullscreen" in document.createElement("video") && !("webkitRequestFullScreen" in document.createElement("div")) && (t = n), t
      }
    }
  }, {
    "./desktop": 217,
    "./ios": 219
  }],
  219: [function(t, e, i) {
    "use strict";

    function n() {
      a(document, "webkitbeginfullscreen", r, !0), a(document, "webkitendfullscreen", s, !0)
    }

    function r(t) {
      h.trigger(l.ENTERFULLSCREEN, t)
    }

    function s(t) {
      o = void 0, h.trigger(l.EXITFULLSCREEN, t)
    }
    var o, a = t("@marcom/ac-dom-events/addEventListener"),
      c = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      l = t("./../events/types"),
      u = t("./../consts/modes");
    n();
    var h = new c;
    h.fullscreenEnabled = function(t) {
      return !!t.webkitSupportsFullscreen
    }, h.fullscreenElement = function() {
      return o
    }, h.exitFullscreen = function(t) {
      t && "function" == typeof t.webkitExitFullscreen && t.webkitExitFullscreen()
    }, h.requestFullscreen = function(t) {
      "function" == typeof t.webkitEnterFullscreen && t.webkitEnterFullscreen()
    }, h.mode = u.IOS, e.exports = h
  }, {
    "./../consts/modes": 216,
    "./../events/types": 220,
    "@marcom/ac-dom-events/addEventListener": 71,
    "@marcom/ac-event-emitter-micro": 156
  }],
  220: [function(t, e, i) {
    "use strict";
    e.exports = {
      ENTERFULLSCREEN: "enterfullscreen",
      EXITFULLSCREEN: "exitfullscreen"
    }
  }, {}],
  221: [function(t, e, i) {
    "use strict";

    function n() {
      throw new Error(s)
    }
    var r = (t("@marcom/ac-event-emitter-micro").EventEmitterMicro, t("./delegate/factory")),
      s = "Error: Element missing. ac-fullscreen requires an element to be specified",
      o = r.create(),
      a = {};
    a.requestFullscreen = function(t) {
      return t || n(), o.requestFullscreen(t)
    }, a.fullscreenEnabled = function(t) {
      return t || n(), o.fullscreenEnabled(t)
    }, a.fullscreenElement = function() {
      return o.fullscreenElement()
    }, a.exitFullscreen = function(t) {
      return t || n(), o.exitFullscreen(t)
    }, a.getMode = function() {
      return o.mode
    }, a.on = function() {
      return o.on.apply(o, arguments)
    }, a.off = function() {
      return o.off.apply(o, arguments)
    }, a.once = function() {
      return o.once.apply(o, arguments)
    }, e.exports = a
  }, {
    "./delegate/factory": 218,
    "@marcom/ac-event-emitter-micro": 156
  }],
  222: [function(t, e, i) {
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
  223: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e;
      return function() {
        return "undefined" == typeof e && (e = t.apply(this, arguments)), e
      }
    }
  }, {}],
  224: [function(t, e, i) {
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
  225: [function(t, e, i) {
    "use strict";
    var n = t("./utils/getBoundingClientRect");
    e.exports = function(t, e) {
      var i = 1;
      return e && (i = n(t).width / t.offsetWidth), {
        width: t.scrollWidth * i,
        height: t.scrollHeight * i
      }
    }
  }, {
    "./utils/getBoundingClientRect": 235
  }],
  226: [function(t, e, i) {
    arguments[4][131][0].apply(i, arguments)
  }, {
    "./utils/getBoundingClientRect": 235,
    dup: 131
  }],
  227: [function(t, e, i) {
    "use strict";
    var n = t("./getDimensions"),
      r = t("./utils/getBoundingClientRect"),
      s = t("./getScrollX"),
      o = t("./getScrollY");
    e.exports = function(t, e) {
      var i, a, c, l;
      if (e) return i = r(t), a = s(), c = o(), {
        top: i.top + c,
        right: i.right + a,
        bottom: i.bottom + c,
        left: i.left + a
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
    "./getDimensions": 226,
    "./getScrollX": 231,
    "./getScrollY": 232,
    "./utils/getBoundingClientRect": 235
  }],
  228: [function(t, e, i) {
    "use strict";
    var n = t("./getDimensions"),
      r = t("./getPixelsInViewport");
    e.exports = function(t, e) {
      var i = r(t, e),
        s = n(t, e).height;
      return i / s
    }
  }, {
    "./getDimensions": 226,
    "./getPixelsInViewport": 229
  }],
  229: [function(t, e, i) {
    "use strict";
    var n = t("./getViewportPosition");
    e.exports = function(t, e) {
      var i, r = document.documentElement.clientHeight,
        s = n(t, e);
      return s.top >= r || s.bottom <= 0 ? 0 : (i = s.bottom - s.top, s.top < 0 && (i += s.top), s.bottom > r && (i -= s.bottom - r), i)
    }
  }, {
    "./getViewportPosition": 233
  }],
  230: [function(t, e, i) {
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
    "./getDimensions": 226,
    "./utils/getBoundingClientRect": 235
  }],
  231: [function(t, e, i) {
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
  232: [function(t, e, i) {
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
  233: [function(t, e, i) {
    "use strict";
    var n = t("./getPagePosition"),
      r = t("./utils/getBoundingClientRect"),
      s = t("./getScrollX"),
      o = t("./getScrollY");
    e.exports = function(t, e) {
      var i, a, c;
      return e ? (i = r(t), {
        top: i.top,
        right: i.right,
        bottom: i.bottom,
        left: i.left
      }) : (i = n(t), a = s(), c = o(), {
        top: i.top - c,
        right: i.right - a,
        bottom: i.bottom - c,
        left: i.left - a
      })
    }
  }, {
    "./getPagePosition": 227,
    "./getScrollX": 231,
    "./getScrollY": 232,
    "./utils/getBoundingClientRect": 235
  }],
  234: [function(t, e, i) {
    "use strict";
    var n = t("./getPixelsInViewport"),
      r = t("./getPercentInViewport");
    e.exports = function(t, e, i) {
      var s;
      return i = i || 0, "string" == typeof i && "px" === i.slice(-2) ? (i = parseInt(i, 10), s = n(t, e)) : s = r(t, e), s > 0 && s >= i
    }
  }, {
    "./getPercentInViewport": 228,
    "./getPixelsInViewport": 229
  }],
  235: [function(t, e, i) {
    arguments[4][132][0].apply(i, arguments)
  }, {
    dup: 132
  }],
  236: [function(t, e, i) {
    "use strict";

    function n(t) {
      t = t || {}, this._wrapAround = t.wrapAround || !1, this._itemType = t.itemType || c, this._items = [], this._itemsIdLookup = {}, this.showNext = this.showNext.bind(this), this.showPrevious = this.showPrevious.bind(this), this._update = this._update.bind(this), this._updateItems = this._updateItems.bind(this), a.call(this), t.startAt && this._startAt(t.startAt), n._add(this, t.analyticsOptions)
    }
    var r = t("@marcom/ac-classlist"),
      s = t("./singletons/analyticsManager"),
      o = t("@marcom/ac-object/create"),
      a = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      c = t("./Item");
    n.FADE = "fade", n.FADE_SELECTOR = "[data-ac-gallery-fade]", n.SLIDE = "slide", n.SLIDE_SELECTOR = "[data-ac-gallery-slide]", n.UPDATE = "update", n.UPDATE_COMPLETE = "update:complete";
    var l = a.prototype,
      u = n.prototype = o(l);
    u.addItem = function(t, e) {
      if (t.nodeType) t = new this._itemType(t);
      else if (this._items.indexOf(t) > -1) return t;
      return "number" == typeof e ? this._items.splice(e, 0, t) : this._items.push(t), 1 === this._items.length ? (t.show(), this._setCurrentItem(t)) : (t.hide(), this.getNextItem() === t && this._setNextItem(t), this.getPreviousItem() === t && this._setPreviousItem(t)), null !== t.getElementId() && (this._itemsIdLookup[t.getElementId()] = t), t.on(c.SELECTED, this._update), t
    }, u.removeItem = function(t, e) {
      e = e || {}, "number" == typeof t && (t = this._items[t]);
      var i = this._items.indexOf(t);
      if (i > -1) {
        var n = this.getNextItem(),
          r = this.getPreviousItem();
        this._items.splice(i, 1), t.off(c.SELECTED, this._update), n === t && this._setNextItem(this.getNextItem()), r === t && this._setPreviousItem(this.getPreviousItem())
      }
      return t === this._currentItem && this._items.length && e.setCurrentItem !== !1 && (this._update({
        item: this._items[0]
      }), this._setLastItem(null)), e.destroyItem && t.getElement() && t.destroy(), t
    }, u.show = function(t, e) {
      return "number" == typeof t ? t = this._items[t] : "string" == typeof t && (t = this._itemsIdLookup[t]), t && (e = e || {}, this._update({
        item: t,
        interactionEvent: e.interactionEvent
      })), t || null
    }, u.showNext = function(t) {
      var e = this.getNextItem();
      return e && this.show(e, t), e
    }, u.showPrevious = function(t) {
      var e = this.getPreviousItem();
      return e && this.show(e, t), e
    }, u.isInView = function() {
      return this._currentItem && this._currentItem.isInView()
    }, u.getTotalItems = function() {
      return this._items.length
    }, u.getItems = function() {
      return this._items
    }, u.getItem = function(t) {
      return "number" == typeof t ? this.getItemAt(t) : "string" == typeof t ? this.getItemById(t) : void 0
    }, u.getItemAt = function(t) {
      return this._items[t] || null
    }, u.getItemById = function(t) {
      return this._itemsIdLookup[t] || null
    }, u.getItemIndex = function(t) {
      return this._items.indexOf(t)
    }, u.getCurrentItem = function() {
      return this._currentItem || null
    }, u.getLastItem = function() {
      return this._lastItem || null
    }, u.getNextItem = function() {
      var t, e = this._items.indexOf(this._currentItem);
      return e < this._items.length - 1 ? t = this._items[e + 1] : this._wrapAround && (t = this._items[0]), t || null
    }, u.getPreviousItem = function() {
      var t, e = this._items.indexOf(this._currentItem);
      return e > 0 ? t = this._items[e - 1] : this._wrapAround && (t = this._items[this._items.length - 1]), t || null
    }, u.getId = function() {
      return this._id
    }, u.destroy = function(t) {
      if (t = t || {}, void 0 === t.destroyItems && (t.destroyItems = !0), this._setCurrentItem(null), t.destroyItems)
        for (var e; this._items.length;) e = this._items[0], e.off(c.SELECTED, this._update), this.removeItem(e, {
          destroyItem: !0,
          setCurrentItem: !1
        });
      return this._items = null, this._itemsIdLookup = null, n._remove(this), l.destroy.call(this)
    }, u._startAt = function(t) {
      var e = this._items[t];
      e && this._currentItem !== e && (this._currentItem.hide(), this._setCurrentItem(e), this._currentItem.show(), this.trigger(n.UPDATE, this._items))
    }, u._setCurrentItem = function(t) {
      this._currentItem && this._currentItem.getElement() && this._currentItem !== t && (r.remove(this._currentItem.getElement(), c.CSS_CURRENT_ITEM), this._setLastItem(this._currentItem)), this._currentItem = t, this._currentItem && this._currentItem.getElement() && (r.add(this._currentItem.getElement(), c.CSS_CURRENT_ITEM), this._setNextItem(this.getNextItem()), this._setPreviousItem(this.getPreviousItem()))
    }, u._setLastItem = function(t) {
      this._lastItem && this._lastItem.getElement() && this._lastItem !== t && r.remove(this._lastItem.getElement(), c.CSS_LAST_ITEM), this._lastItem = t, this._lastItem && this._lastItem.getElement() && r.add(this._lastItem.getElement(), c.CSS_LAST_ITEM)
    }, u._setNextItem = function(t) {
      this._nextItem && this._nextItem.getElement() && this._nextItem !== t && r.remove(this._nextItem.getElement(), c.CSS_NEXT_ITEM), this._nextItem = t, this._nextItem && this._nextItem.getElement() && r.add(this._nextItem.getElement(), c.CSS_NEXT_ITEM)
    }, u._setPreviousItem = function(t) {
      this._previousItem && this._previousItem.getElement() && this._previousItem !== t && r.remove(this._previousItem.getElement(), c.CSS_PREVIOUS_ITEM), this._previousItem = t, this._previousItem && this._previousItem.getElement() && r.add(this._previousItem.getElement(), c.CSS_PREVIOUS_ITEM)
    }, u._updateItems = function(t, e) {
      t.outgoing[0] && t.outgoing[0].hide(), t.incoming[0].show(), e || this.trigger(n.UPDATE_COMPLETE, t)
    }, u._update = function(t) {
      var e = this._currentItem !== t.item;
      e && this._setCurrentItem(t.item);
      var i = {
        incoming: [t.item],
        outgoing: this._lastItem ? [this._lastItem] : [],
        interactionEvent: t.interactionEvent || null
      };
      e && this.trigger(n.UPDATE, i), this._updateItems(i, !e)
    }, n._instantiate = function() {
      return this._galleries = [], this._idCounter = 0, this
    }, n._add = function(t, e) {
      this._galleries.push(t), t._id = ++this._idCounter, s.add(t, e)
    }, n._remove = function(t) {
      var e = this._galleries.indexOf(t);
      e > -1 && (this._galleries.splice(e, 1), s.remove(t))
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
    "./Item": 237,
    "./singletons/analyticsManager": 251,
    "@marcom/ac-classlist": 34,
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-object/create": 305
  }],
  237: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this._el = t, e = e || {}, this._triggerKeys = [], this._triggerEls = {}, this._isShown = !1, this._isACaption = void 0 !== e.isACaption && e.isACaption, this._onKeyboardInteraction = this._onKeyboardInteraction.bind(this), this._onTriggered = this._onTriggered.bind(this), this._isACaption || this._el.setAttribute("role", "tabpanel"), this._focusableEls = u(d.focusableSelectors, t), f.call(this)
    }
    var r = t("@marcom/ac-classlist"),
      s = t("@marcom/ac-dom-events/addEventListener"),
      o = t("@marcom/ac-dom-events/removeEventListener"),
      a = t("@marcom/ac-dom-events/preventDefault"),
      c = t("@marcom/ac-dom-metrics/isInViewport"),
      l = t("@marcom/ac-dom-metrics/getPercentInViewport"),
      u = t("@marcom/ac-dom-traversal/querySelectorAll"),
      h = t("@marcom/ac-object/create"),
      d = t("./singletons/tabManager"),
      m = t("@marcom/ac-keyboard/keyMap"),
      f = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      p = t("@marcom/ac-keyboard"),
      _ = "current";
    n.CSS_CURRENT_ITEM = "ac-gallery-currentitem", n.CSS_LAST_ITEM = "ac-gallery-lastitem", n.CSS_NEXT_ITEM = "ac-gallery-nextitem", n.CSS_PREVIOUS_ITEM = "ac-gallery-previousitem", n.SELECTED = "selected", n.SHOW = "show", n.HIDE = "hide";
    var g = n.prototype = h(f.prototype);
    g.show = function() {
      this._isShown = !0, this._addCurrentClassToTriggers(), this._setTabIndexOnFocusableItems(null), this._el.removeAttribute("aria-hidden"), this.trigger(n.SHOW, this)
    }, g.hide = function() {
      this._isShown = !1, this._removeCurrentClassFromTriggers(), this._setTabIndexOnFocusableItems("-1"), this._el.setAttribute("aria-hidden", "true"), this.trigger(n.HIDE, this)
    }, g.addElementTrigger = function(t, e) {
      e = e || "click", void 0 === this._triggerEls[e] && (this._triggerEls[e] = []);
      var i = this._triggerEls[e].indexOf(t);
      if (i < 0) {
        t.setAttribute("role", "tab"), t.setAttribute("tabindex", "0");
        var n = this.getElementId();
        n && t.setAttribute("aria-controls", n), n = t.getAttribute("id"), n && null === this._el.getAttribute("aria-labelledby") && this._el.setAttribute("aria-labelledby", n), s(t, e, this._onTriggered), this._triggerEls[e].push(t), this._isShown ? (t.setAttribute("aria-selected", "true"), r.add(t, _)) : t.setAttribute("aria-selected", "false")
      }
    }, g.removeElementTrigger = function(t, e) {
      if (e = e || "click", void 0 !== this._triggerEls[e]) {
        var i = this._triggerEls[e].indexOf(t);
        i > -1 && this._cleanElementTrigger(t, e), 0 === this._triggerEls[e].length && (this._triggerEls[e] = void 0)
      }
    }, g.addKeyTrigger = function(t) {
      if ("string" == typeof t && (t = m[t.toUpperCase()]), "number" == typeof t) {
        var e = this._triggerKeys.indexOf(t);
        e < 0 && (p.onDown(t, this._onKeyboardInteraction), this._triggerKeys.push(t))
      }
    }, g.removeKeyTrigger = function(t) {
      if ("string" == typeof t && (t = m[t.toUpperCase()]), "number" == typeof t) {
        var e = this._triggerKeys.indexOf(t);
        e > -1 && (p.offDown(t, this._onKeyboardInteraction), this._triggerKeys.splice(e, 1))
      }
    }, g.removeAllTriggers = function() {
      for (var t, e = this._triggerKeys.length; e--;) t = this._triggerKeys[e], p.offDown(t, this._onKeyboardInteraction);
      this._triggerKeys = [];
      var i, n;
      for (n in this._triggerEls)
        for (e = this._triggerEls[n].length; e--;) i = this._triggerEls[n][e], this._cleanElementTrigger(i, n);
      this._triggerEls = {}
    }, g.isInView = function() {
      return !!this._el && c(this._el)
    }, g.percentageInView = function() {
      return this._el ? l(this._el) : 0
    }, g.getElement = function() {
      return this._el
    }, g.getElementId = function() {
      return void 0 !== this._elId ? this._elId : (this._elId = this._el.getAttribute("id") || null, this._elId)
    }, g.destroy = function() {
      this._isShown && (this._isShown = null, r.remove(this._el, n.CSS_CURRENT_ITEM, n.CSS_LAST_ITEM, n.CSS_NEXT_ITEM, n.CSS_PREVIOUS_ITEM), this._removeCurrentClassFromTriggers()), this.removeAllTriggers(), this._setTabIndexOnFocusableItems(null), this._el.removeAttribute("aria-hidden"), this._el.removeAttribute("role"), this._el.removeAttribute("aria-labelledby"), this._isACaption = null, this._triggerKeys = null, this._triggerEls = null, this._el = null
    }, g._addCurrentClassToTriggers = function() {
      var t, e, i;
      for (e in this._triggerEls)
        for (i = this._triggerEls[e].length; i--;) t = this._triggerEls[e][i], t.setAttribute("aria-selected", "true"), r.add(t, _)
    }, g._removeCurrentClassFromTriggers = function() {
      var t, e, i;
      for (e in this._triggerEls)
        for (i = this._triggerEls[e].length; i--;) t = this._triggerEls[e][i], t.setAttribute("aria-selected", "false"), r.remove(t, _)
    }, g._cleanElementTrigger = function(t, e) {
      t.removeAttribute("aria-selected"), t.removeAttribute("role"), t.removeAttribute("tabindex"), t.removeAttribute("aria-controls"), o(t, e, this._onTriggered), this._isShown && r.remove(t, _)
    }, g._onKeyboardInteraction = function(t) {
      this.isInView() && this._onTriggered(t)
    }, g._setTabIndexOnFocusableItems = function(t) {
      var e = null === t,
        i = [];
      this._currentTabbableEls = this._currentTabbableEls || d.getTabbable(this._focusableEls), e || (i = d.getTabbable(this._focusableEls), this._currentTabbableEls = i);
      for (var n = this._currentTabbableEls.length; n--;) e ? this._currentTabbableEls[n].removeAttribute("tabindex") : this._currentTabbableEls[n].setAttribute("tabindex", t)
    }, g._onTriggered = function(t) {
      a(t), this.trigger(n.SELECTED, {
        item: this,
        interactionEvent: t
      })
    }, e.exports = n
  }, {
    "./singletons/tabManager": 252,
    "@marcom/ac-classlist": 34,
    "@marcom/ac-dom-events/addEventListener": 71,
    "@marcom/ac-dom-events/preventDefault": 74,
    "@marcom/ac-dom-events/removeEventListener": 75,
    "@marcom/ac-dom-metrics/getPercentInViewport": 228,
    "@marcom/ac-dom-metrics/isInViewport": 234,
    "@marcom/ac-dom-traversal/querySelectorAll": 119,
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-keyboard": 262,
    "@marcom/ac-keyboard/keyMap": 264,
    "@marcom/ac-object/create": 305
  }],
  238: [function(t, e, i) {
    "use strict";
    var n = t("./helpers/extendProto"),
      r = t("./Gallery"),
      s = t("./auto/AutoGallery"),
      o = t("./fade/FadeGallery"),
      a = t("./fade/FadeItem"),
      c = t("./slide/SlideGallery"),
      l = t("./slide/SlideItem"),
      u = t("./Item");
    r.create = t("./factories/create"), r.autoCreate = t("./factories/autoCreate"), r.extend = n, s.extend = n, o.extend = n, a.extend = n, c.extend = n, l.extend = n, u.extend = n, e.exports = {
      Gallery: r,
      AutoGallery: s,
      FadeGallery: o,
      FadeGalleryItem: a,
      SlideGallery: c,
      SlideGalleryItem: l,
      Item: u,
      ToggleNav: t("./navigation/ToggleNav")
    }
  }, {
    "./Gallery": 236,
    "./Item": 237,
    "./auto/AutoGallery": 240,
    "./factories/autoCreate": 241,
    "./factories/create": 242,
    "./fade/FadeGallery": 243,
    "./fade/FadeItem": 244,
    "./helpers/extendProto": 245,
    "./navigation/ToggleNav": 250,
    "./slide/SlideGallery": 253,
    "./slide/SlideItem": 254
  }],
  239: [function(t, e, i) {
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
  240: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (e = e || {}, !t || void 0 === t.nodeType) throw new Error(O);
      if (this._el = t, v.call(this, e), this._itemHeights = [], this._itemHeightsLookup = {}, this._toggleNavDuration = e.toggleNavDuration, this._isRightToLeft = void 0 === e.rightToLeft ? "rtl" === c.getStyle(t, "direction").direction : e.rightToLeft, this._keyboardThrottleDelay = 1e3 * (void 0 === e.keyboardThrottleDelay ? k : e.keyboardThrottleDelay), this._resizeContainer = !!e.resizeContainer, this._setUpContainerAutoResize(e.resizeContainerOnUpdate), this._createToggleNav(), this._addPaddleNav(e.addPaddleNav), this._isACaptionsGallery = "" === t.getAttribute("data-ac-gallery-captions"), this._addItems(e.itemSelector || A), this._wrapAround || this._updatePaddleNavState(), e.enableArrowKeys !== !1 && (this._enableArrowKeys = !0, this._addKeyboardListener()), e.updateOnWindowResize !== !1 && (this._onWindowResize = this._onWindowResize.bind(this), s(window, "resize", this._onWindowResize)), this._componentsContainer = document.getElementById(e.container), e.startAt && this._startAt(e.startAt), this.stopAutoPlay = this.stopAutoPlay.bind(this), e.autoPlay) {
        if (!this._componentsContainer) throw new Error(I);
        var i = "number" == typeof e.autoPlay ? e.autoPlay : C;
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
      this._toggleNav && this._toggleNav.start(), this._setUpSwiping(e.touch && y(), e.desktopSwipe), this._componentsContainer && this._componentsContainer.setAttribute("tabIndex", -1);
      var o = t.getAttribute("data-related-gallery");
      if (o && (this._captionsContainer = document.querySelector(o)), e.enableCaptions) {
        if (!this._captionsContainer) throw new Error(D);
        this._captionsOptions = !!e.captionsOptions && e.captionsOptions, this.enableCaptions()
      }
    }
    t("@marcom/ac-polyfills/requestAnimationFrame");
    var r = t("@marcom/ac-classlist"),
      s = t("@marcom/ac-dom-events/addEventListener"),
      o = t("@marcom/ac-dom-events/removeEventListener"),
      a = t("@marcom/ac-dom-events/preventDefault"),
      c = t("@marcom/ac-dom-styles"),
      l = t("@marcom/ac-dom-traversal/querySelector"),
      u = t("@marcom/ac-dom-traversal/querySelectorAll"),
      h = t("@marcom/ac-object/create"),
      d = t("@marcom/ac-dom-metrics/getContentDimensions"),
      m = t("@marcom/ac-keyboard/keyMap"),
      f = t("./../helpers/selectElementFromDataAttributeValue"),
      p = t("./../helpers/selectElementThatHasDataAttribute"),
      _ = t("./../helpers/inputHasFocus"),
      g = t("@marcom/ac-function/throttle"),
      y = t("@marcom/ac-feature/touchAvailable"),
      v = t("./../Gallery"),
      b = t("@marcom/ac-keyboard"),
      E = t("@marcom/ac-page-visibility").PageVisibilityManager,
      w = t("@marcom/ac-pointer-tracker").PointerTracker,
      T = t("./../navigation/ToggleNav"),
      S = "disabled",
      C = 3,
      x = .5,
      A = "[data-ac-gallery-item]",
      k = .12,
      P = t("../templates/paddlenav.js"),
      O = "No element supplied.",
      I = 'Container element needed when autoPlay is on. Use the "container" option when you instantiate your gallery.',
      D = 'Captions datatag needed when enableCaptions is on. Use the "data-related-gallery" tag (with an ID of the related captions container) on your gallery container to automatically use captions.';
    n.RESIZED = "resized", n.UPDATE = v.UPDATE, n.UPDATE_COMPLETE = v.UPDATE_COMPLETE;
    var L = v.prototype,
      M = n.prototype = h(L);
    M.addItem = function(t, e) {
      if (t.nodeType) {
        var i = this._isACaptionsGallery;
        t = new this._itemType(t, {
          isACaption: i
        })
      } else if (this._items.indexOf(t) > -1) return t;
      return this._resizeContainer && this._storeItemHeight(t, this._containerResizeDuration === !1), this._addItemTriggers(t), L.addItem.call(this, t, e)
    }, M.removeItem = function(t, e) {
      if (this._resizeContainer)
        for (var i = this._itemHeights.length; i--;) this._itemHeights[i].item === t && (this._itemHeights.splice(i, 1), 0 === i && this._itemHeights.length && this._setElHeight(this._itemHeights[0].height));
      return L.removeItem.call(this, t, e)
    }, M.startAutoPlay = function(t, e) {
      if (e = e || {}, this._isAutoPlaying = !0, this._autoPlayDelay = 1e3 * (t || C), this._cancelAutoPlayOnInteraction = void 0 === e.cancelOnInteraction || e.cancelOnInteraction, setTimeout(this._onAutoPlayToNextItem.bind(this), this._autoPlayDelay), this._cancelAutoPlayOnInteraction && this.on(v.UPDATE, this.stopAutoPlay), !this._componentsContainer) throw new Error(I);
      s(this._componentsContainer, "focus", this.stopAutoPlay, !0), s(this._componentsContainer, "touchend", this.stopAutoPlay, !0), s(this._componentsContainer, "click", this.stopAutoPlay, !0)
    }, M.stopAutoPlay = function() {
      this._isAutoPlaying = !1, this._cancelAutoPlayOnInteraction && this.off(v.UPDATE, this.stopAutoPlay), this._componentsContainer && (o(this._componentsContainer, "focus", this.stopAutoPlay, !0), o(this._componentsContainer, "touchend", this.stopAutoPlay, !0), o(this._componentsContainer, "click", this.stopAutoPlay, !0))
    }, M.getElement = function() {
      return this._el
    }, M.getToggleNav = function() {
      return this._toggleNav || null
    }, M.resize = function(t, e) {
      if (this._resizeContainer) {
        this._itemHeights = [];
        for (var i = this._items.length; i--;) this._storeItemHeight(this._items[i], !1);
        this._containerResizeDuration !== !1 ? this._setElHeight(this._itemHeightsLookup[this._currentItem.getElementId()]) : this._setElHeight(this._itemHeights[0].height)
      }
      this._toggleNav && this._toggleNav.resize(), this.trigger(n.RESIZED, this)
    }, M.enableKeyboard = function() {
      this._enableArrowKeys || (this._enableArrowKeys = !0, this._addKeyboardListener())
    }, M.disableKeyboard = function() {
      this._enableArrowKeys && (this._enableArrowKeys = !1, b.offDown(m.ARROW_RIGHT, this._rightArrowFunc), b.offDown(m.ARROW_LEFT, this._leftArrowFunc))
    }, M.enableTouch = function() {
      this._touchSwipe || this._setUpSwiping(!0, !1)
    }, M.disableTouch = function() {
      this._touchSwipe && (this._touchSwipe.off(w.END, this._onSwipeEnd), this._touchSwipe.destroy(), this._touchSwipe = null)
    }, M.enableDesktopSwipe = function() {
      this._clickSwipe || this._setUpSwiping(!1, !0)
    }, M.disableDesktopSwipe = function() {
      this._clickSwipe && (this._clickSwipe.off(w.END, this._onSwipeEnd), this._clickSwipe.destroy(), this._clickSwipe = null)
    }, M.enableCaptions = function() {
      this._galleryWithCaptions || this._initCaptionsGallery(this._captionsContainer, this._captionsOptions)
    }, M.disableCaptions = function() {
      this._galleryWithCaptions && this._galleryWithCaptions.destroy()
    }, M.destroy = function(t) {
      this._isAutoPlaying && this.stopAutoPlay(), this._componentsContainer && (o(this._componentsContainer, "focus", this.stopAutoPlay, !0), o(this._componentsContainer, "touchend", this.stopAutoPlay, !0), o(this._componentsContainer, "click", this.stopAutoPlay, !0)), this._resizeContainer && c.setStyle(this._el, {
        height: null,
        transition: null
      }), this._enableArrowKeys && (b.offDown(m.ARROW_RIGHT, this._rightArrowFunc), b.offDown(m.ARROW_LEFT, this._leftArrowFunc));
      var e;
      if (this._previousButtons) {
        for (e = this._previousButtons.length; e--;) o(this._previousButtons[e], "click", this._onPaddlePrevious);
        this._setPaddleDisabledState(this._previousButtons, !1)
      }
      if (this._nextButtons) {
        for (e = this._nextButtons.length; e--;) o(this._nextButtons[e], "click", this._onPaddleNext);
        this._setPaddleDisabledState(this._nextButtons, !1)
      }
      return this._dynamicPaddleNav && this._el.removeChild(this._dynamicPaddleNav), this._hasPaddleNavStateHandler && this.off(v.UPDATE, this._updatePaddleNavState), this.disableTouch(), this.disableDesktopSwipe(), this.disableCaptions(), this._toggleNav && (this._toggleNav.destroy(), this._toggleNav = null), o(window, "resize", this._onWindowResize), this._el = null, this._itemHeights = null, this._itemHeightsLookup = null, this._resizeContainer = null, this._isRightToLeft = null, this._enableArrowKeys = null, this._previousButtons = null, this._onPaddlePrevious = null, this._nextButtons = null, this._onPaddleNext = null, this._isACaptionsGallery = null, this._componentsContainer = null, this._galleryWithCaptions = null, this._captionsContainer = null, this._captionsOptions = null, L.destroy.call(this, t)
    }, M._getDeeplinkedItem = function() {
      for (var t, e = window.location.hash.substr(1), i = this._items.length; i--;)
        if (t = this._items[i], e === t.getElementId()) return t;
      return null
    }, M._addItems = function(t) {
      var e, i, n = /(^\[).*(\]$)/.test(t);
      n ? (t = t.replace(/\[|\]/g, ""), i = p(t, this._el)) : i = u(t, this._el);
      var r = 0,
        s = i.length,
        o = this._isACaptionsGallery;
      for (r; r < s; r++) e = new this._itemType(i[r], {
        isACaption: o
      }), this.addItem(e), this._addItemTriggers(e)
    }, M._createToggleNav = function() {
      var t = this._getElementId(),
        e = '[data-ac-gallery-togglenav="' + t + '"], [data-ac-gallery-tabnav="' + t + '"]',
        i = l(e);
      i && (this._toggleNav = new T(i, this, {
        duration: this._toggleNavDuration
      }))
    }, M._addItemTriggers = function(t, e) {
      var i = f("data-ac-gallery-trigger", t.getElementId());
      e && e.length && (i = i.concat(e));
      var n = 0,
        r = i.length;
      for (n; n < r; n++) t.addElementTrigger(i[n]), this._toggleNav && this._toggleNav.addTrigger(i[n], t)
    }, M._addPaddleNav = function(t) {
      var e, i = this._getElementId();
      if (t) {
        var n = "string" == typeof t ? t : P;
        n = n.replace(/%ID%/g, this._getElementId()), this._dynamicPaddleNav = document.createElement("div"), this._dynamicPaddleNav.innerHTML = n, this._el.insertBefore(this._dynamicPaddleNav, this._el.firstChild)
      }
      this._previousButtons = f("data-ac-gallery-previous-trigger", i), this._nextButtons = f("data-ac-gallery-next-trigger", i);
      var r = this._el.getAttribute("aria-label") || "";
      if (r.length && (r = "(" + r + ")"), this._onPaddlePrevious = this._onPaddleInteraction.bind(null, this.showPrevious), e = this._previousButtons.length) {
        var o = this._el.getAttribute("data-ac-gallery-previouslabel");
        for (o && r.length && (this._isRightToLeft ? o = r + " " + o : o += " " + r); e--;) o && null === this._previousButtons[e].getAttribute("aria-label") && this._previousButtons[e].setAttribute("aria-label", o), s(this._previousButtons[e], "click", this._onPaddlePrevious)
      }
      if (this._onPaddleNext = this._onPaddleInteraction.bind(null, this.showNext), e = this._nextButtons.length) {
        var a = this._el.getAttribute("data-ac-gallery-nextlabel");
        for (a && r.length && (this._isRightToLeft ? a = r + " " + a : a += " " + r); e--;) a && null === this._nextButtons[e].getAttribute("aria-label") && this._nextButtons[e].setAttribute("aria-label", a), s(this._nextButtons[e], "click", this._onPaddleNext)
      }(this._nextButtons.length || this._previousButtons.length) && (this._hasPaddleNavStateHandler = !0, this._updatePaddleNavState = this._updatePaddleNavState.bind(this), this.on(v.UPDATE, this._updatePaddleNavState))
    }, M._onPaddleInteraction = function(t, e) {
      a(e), t.call(null, {
        interactionEvent: e
      })
    }, M._updatePaddleNavState = function() {
      if (this._wrapAround) this._setPaddleDisabledState(this._previousButtons, !1), this._setPaddleDisabledState(this._nextButtons, !1);
      else {
        var t = this._items.indexOf(this._currentItem);
        0 === t && this._previousButtons.length ? (this._setPaddleDisabledState(this._previousButtons, !0), this._setPaddleDisabledState(this._nextButtons, !1)) : t === this._items.length - 1 && this._nextButtons.length ? (this._setPaddleDisabledState(this._nextButtons, !0), this._setPaddleDisabledState(this._previousButtons, !1)) : (this._setPaddleDisabledState(this._previousButtons, !1), this._setPaddleDisabledState(this._nextButtons, !1))
      }
    }, M._setPaddleDisabledState = function(t, e) {
      for (var i = t.length; i--;) t[i].disabled = e, e ? r.add(t[i], S) : r.remove(t[i], S)
    }, M._addKeyboardListener = function() {
      if (this._enableArrowKeys) {
        this._onKeyboardInteraction = this._onKeyboardInteraction.bind(this);
        var t, e;
        this._isRightToLeft ? (t = this.showPrevious, e = this.showNext) : (t = this.showNext, e = this.showPrevious), this._rightArrowFunc = g(this._onKeyboardInteraction.bind(null, t), this._keyboardThrottleDelay), this._leftArrowFunc = g(this._onKeyboardInteraction.bind(null, e), this._keyboardThrottleDelay), b.onDown(m.ARROW_RIGHT, this._rightArrowFunc), b.onDown(m.ARROW_LEFT, this._leftArrowFunc)
      }
    }, M._onKeyboardInteraction = function(t, e) {
      if (this.isInView() && !_()) {
        var i = v.getAllInView();
        if (i.length > 1 && (i.sort(function(t, e) {
            return t = t._enableArrowKeys ? t.getCurrentItem().percentageInView() : 0, e = e._enableArrowKeys ? e.getCurrentItem().percentageInView() : 0, e - t
          }), this !== i[0])) return;
        t.call(null, {
          interactionEvent: e
        })
      }
    }, M._setUpSwiping = function(t, e) {
      this._onSwipeEnd = this._onSwipeEnd.bind(this), t && (this._touchSwipe = new w(this._el, w.TOUCH_EVENTS), this._touchSwipe.on(w.END, this._onSwipeEnd)), e && (this._clickSwipe = new w(this._el, w.MOUSE_EVENTS), this._clickSwipe.on(w.END, this._onSwipeEnd))
    }, M._onSwipeEnd = function(t) {
      var e, i = t.interactionEvent,
        n = "touchend" !== i.type || "touchstart" !== i.type || "touchmove" !== i.type;
      if (n) var r = {
        type: "touchmove",
        target: i.target,
        srcElement: i.srcElement
      };
      var s = {
        interactionEvent: r || i
      };
      return t.swipe === w.SWIPE_RIGHT ? e = this._isRightToLeft ? this.showNext : this.showPrevious : t.swipe === w.SWIPE_LEFT && (e = this._isRightToLeft ? this.showPrevious : this.showNext), e ? e.call(this, s) : (i = null, null)
    }, M._getElementId = function() {
      return void 0 === this._elementId && (this._elementId = this._el.getAttribute("id")), this._elementId
    }, M._setUpContainerAutoResize = function(t) {
      "number" == typeof t ? this._containerResizeDuration = t : t ? this._containerResizeDuration = x : this._containerResizeDuration = !1, this._containerResizeDuration !== !1 && (this._resizeContainer = !0, this._updateContainerSize = this._updateContainerSize.bind(this), this.on(v.UPDATE, this._updateContainerSize))
    }, M._updateContainerSize = function(t) {
      var e = this._itemHeightsLookup[t.incoming[0].getElementId()];
      e && this._setElHeight(e, this._containerResizeDuration)
    }, M._storeItemHeight = function(t, e) {
      var i = d(t.getElement());
      this._itemHeights.push({
        item: t,
        height: i.height
      }), this._itemHeightsLookup[t.getElementId()] = i.height, this._itemHeights.sort(function(t, e) {
        return e.height - t.height
      }), e && this._itemHeights[0].item === t && this._setElHeight(i.height)
    }, M._setElHeight = function(t, e) {
      var i = {
        height: t + "px"
      };
      e ? i.transition = "height " + e + "s" : i.transition = null, c.setStyle(this._el, i)
    }, M._initCaptionsGallery = function(t, e) {
      t && (this._galleryWithCaptions = v.create(t, "fade", e ? e : {
        crossFade: !0
      }), this._enableArrowKeys && (this._galleryWithCaptions._enableArrowKeys = !1), this.on(v.UPDATE, function(t) {
        var e = this.getItemIndex(t.incoming[0]);
        this._galleryWithCaptions.show(e)
      }.bind(this)))
    }, M._onAutoPlayToNextItem = function() {
      if (this._isAutoPlaying)
        if (!E.isHidden && this._currentItem.isInView()) {
          this._cancelAutoPlayOnInteraction && this.off(v.UPDATE, this.stopAutoPlay);
          var t = this.showNext();
          null !== t && (this._cancelAutoPlayOnInteraction && this.on(v.UPDATE, this.stopAutoPlay), setTimeout(this._onAutoPlayToNextItem.bind(this), this._autoPlayDelay))
        } else setTimeout(this._onAutoPlayToNextItem.bind(this), this._autoPlayDelay)
    }, M._onWindowResize = function(t) {
      window.requestAnimationFrame(function() {
        this._el && this.resize()
      }.bind(this))
    }, e.exports = n
  }, {
    "../templates/paddlenav.js": 256,
    "./../Gallery": 236,
    "./../helpers/inputHasFocus": 247,
    "./../helpers/selectElementFromDataAttributeValue": 248,
    "./../helpers/selectElementThatHasDataAttribute": 249,
    "./../navigation/ToggleNav": 250,
    "@marcom/ac-classlist": 34,
    "@marcom/ac-dom-events/addEventListener": 71,
    "@marcom/ac-dom-events/preventDefault": 74,
    "@marcom/ac-dom-events/removeEventListener": 75,
    "@marcom/ac-dom-metrics/getContentDimensions": 225,
    "@marcom/ac-dom-styles": 110,
    "@marcom/ac-dom-traversal/querySelector": 118,
    "@marcom/ac-dom-traversal/querySelectorAll": 119,
    "@marcom/ac-feature/touchAvailable": 179,
    "@marcom/ac-function/throttle": 224,
    "@marcom/ac-keyboard": 262,
    "@marcom/ac-keyboard/keyMap": 264,
    "@marcom/ac-object/create": 305,
    "@marcom/ac-page-visibility": 313,
    "@marcom/ac-pointer-tracker": 315,
    "@marcom/ac-polyfills/requestAnimationFrame": void 0
  }],
  241: [function(t, e, i) {
    "use strict";
    var n = t("./create"),
      r = t("./../helpers/selectElementThatHasDataAttribute"),
      s = t("./../Gallery"),
      o = s.FADE_SELECTOR.replace(/\[|\]/g, ""),
      a = s.SLIDE_SELECTOR.replace(/\[|\]/g, "");
    e.exports = function(t) {
      t = t || {};
      var e, i, c = t.context || document.body;
      for (e = r(a, c), i = e.length; i--;) n(e[i], s.SLIDE, t);
      for (e = r(o, c), i = e.length; i--;) n(e[i], s.FADE, t);
      return s.getAll()
    }
  }, {
    "./../Gallery": 236,
    "./../helpers/selectElementThatHasDataAttribute": 249,
    "./create": 242
  }],
  242: [function(t, e, i) {
    "use strict";
    var n = t("./../fade/FadeGallery"),
      r = t("./../Gallery"),
      s = t("./../slide/SlideGallery"),
      o = "%TYPE% is not a supported gallery type and el has no gallery data attribute.",
      a = r.FADE_SELECTOR.replace(/\[|\]/g, ""),
      c = r.SLIDE_SELECTOR.replace(/\[|\]/g, "");
    e.exports = function(t, e, i) {
      var l;
      if ("string" == typeof e && (e === r.SLIDE ? l = s : e === r.FADE && (l = n)), void 0 === l && (null !== t.getAttribute(c) ? l = s : null !== t.getAttribute(a) && (l = n)), void 0 === l) throw new Error(o.replace(/%TYPE%/g, e));
      return new l(t, i)
    }
  }, {
    "./../Gallery": 236,
    "./../fade/FadeGallery": 243,
    "./../slide/SlideGallery": 253
  }],
  243: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      e = r(e) || {}, e.itemType = e.itemType || o, this._fadeDuration = e.duration || c, e.toggleNavDuration = void 0 === e.toggleNavDuration ? this._fadeDuration : e.toggleNavDuration, this._crossFade = e.crossFade, this._zIndexCount = e.startZIndex || 1, this._ease = e.ease, e.resizeContainerOnUpdate === !0 && (e.resizeContainerOnUpdate = this._fadeDuration), this._onItemShowComplete = this._onItemShowComplete.bind(this), a.call(this, t, e), this._currentItem && this._currentItem.fadeIn(0)
    }
    var r = t("@marcom/ac-object/clone"),
      s = t("@marcom/ac-object/create"),
      o = t("./FadeItem"),
      a = t("./../auto/AutoGallery"),
      c = .5;
    n.RESIZED = a.RESIZED, n.UPDATE = a.UPDATE, n.UPDATE_COMPLETE = a.UPDATE_COMPLETE;
    var l = a.prototype,
      u = n.prototype = s(l);
    u.addItem = function(t, e) {
      t.nodeType && (t = new this._itemType(t));
      var i = l.addItem.call(this, t, e);
      return t !== this._currentItem ? t.fadeOut() : t.fadeIn(0), i
    }, u.destroy = function(t) {
      var e = l.destroy.call(this, t);
      return this._fadeDuration = null, this._crossFade = null, this._zIndexCount = null, this._ease = null, this._onItemShowComplete = null, e
    }, u._startAt = function(t) {
      var e = this._items[t];
      e && this._currentItem !== e && (this._currentItem.fadeOut(0), this._currentItem.hide(), this._setCurrentItem(e), this._currentItem.show(), this._currentItem.fadeIn(0), this.trigger(n.UPDATE, this._items))
    }, u._onItemShowComplete = function(t) {
      if (t && t.target() !== this._currentItem.getElement()) return void(this._currentItem.isFading() || this._currentItem.fadeIn(this._fadeDuration, this._ease, ++this._zIndexCount, this._onItemShowComplete));
      for (var e, i = this._items.length; i--;) e = this._items[i], e !== this._currentItem && e.fadeOut();
      this._incomingOutgoingItems && this.trigger(n.UPDATE_COMPLETE, this._incomingOutgoingItems)
    }, u._updateItems = function(t, e) {
      if (!e) {
        if (this._crossFade) {
          var i = e ? null : this.trigger.bind(this, n.UPDATE_COMPLETE, t);
          t.outgoing[0].fadeOut(.99 * this._fadeDuration, this._ease), t.incoming[0].fadeIn(this._fadeDuration, this._ease, ++this._zIndexCount, i)
        } else this._incomingOutgoingItems = !e && t, t.outgoing[0].isFading() || t.incoming[0].fadeIn(this._fadeDuration, this._ease, ++this._zIndexCount, this._onItemShowComplete);
        t.outgoing[0].hide(), t.incoming[0].show()
      }
    }, e.exports = n
  }, {
    "./../auto/AutoGallery": 240,
    "./FadeItem": 244,
    "@marcom/ac-object/clone": 304,
    "@marcom/ac-object/create": 305
  }],
  244: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      l.call(this, t, e), r(t, {
        position: "absolute"
      })
    }
    var r = t("@marcom/ac-dom-styles/setStyle"),
      s = t("@marcom/ac-object/create"),
      o = t("@marcom/ac-solar/fade"),
      a = t("@marcom/ac-solar/fadeIn"),
      c = t("@marcom/ac-solar/fadeOut"),
      l = t("./../Item");
    n.SELECTED = l.SELECTED, n.SHOW = l.SHOW, n.HIDE = l.HIDE;
    var u = l.prototype,
      h = n.prototype = s(u);
    h.fadeIn = function(t, e, i, n) {
      t ? (r(this._el, {
        zIndex: i || 1
      }), this._destroyCurrentClip(), this._clip = o(this._el, 0, 1, t, {
        ease: e,
        onComplete: n
      })) : (a(this._el, 0), r(this._el, {
        zIndex: i || 1
      }))
    }, h.fadeOut = function(t, e) {
      t ? (this._destroyCurrentClip(), this._clip = c(this._el, t, {
        ease: e
      })) : c(this._el, 0)
    }, h.isFading = function() {
      return !(!this._clip || !this._clip.playing())
    }, h.destroy = function() {
      r(this._el, {
        position: null,
        opacity: null,
        zIndex: null
      }), u.destroy.call(this), this._destroyCurrentClip(), this._clip = null
    }, h._destroyCurrentClip = function() {
      this.isFading() && this._clip.destroy()
    }, e.exports = n
  }, {
    "./../Item": 237,
    "@marcom/ac-dom-styles/setStyle": 113,
    "@marcom/ac-object/create": 305,
    "@marcom/ac-solar/fade": 399,
    "@marcom/ac-solar/fadeIn": 400,
    "@marcom/ac-solar/fadeOut": 401
  }],
  245: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-object/create"),
      r = t("@marcom/ac-object/extend");
    e.exports = function(t) {
      var e = this,
        i = function() {
          e.apply(this, arguments)
        },
        s = n(this.prototype);
      return i.prototype = r(s, t), r(i, this), i
    }
  }, {
    "@marcom/ac-object/create": 305,
    "@marcom/ac-object/extend": 307
  }],
  246: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-styles/getStyle"),
      r = t("@marcom/ac-dom-metrics/getContentDimensions");
    e.exports = function(t) {
      var e = n(t, "margin-right", "margin-left");
      return Math.round(r(t).width) + parseInt(e.marginRight, 10) + parseInt(e.marginLeft, 10)
    }
  }, {
    "@marcom/ac-dom-metrics/getContentDimensions": 225,
    "@marcom/ac-dom-styles/getStyle": 111
  }],
  247: [function(t, e, i) {
    "use strict";
    e.exports = function() {
      var t = ["input", "select", "textarea"];
      return t.indexOf(document.activeElement.nodeName.toLowerCase()) > -1
    }
  }, {}],
  248: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-traversal/querySelectorAll"),
      r = function(t, e) {
        var i, n = document.getElementsByTagName("*"),
          r = 0,
          s = n.length,
          o = [];
        for (r; r < s; r++) i = n[r], null !== i.getAttribute(t) && i.getAttribute(t).split(" ").indexOf(e) > -1 && (o[o.length] = i);
        return o
      };
    e.exports = function(t, e) {
      var i = n("[" + t + '*="' + e + '"]');
      if (0 === i.length && 7 === document.documentMode) return r(t, e);
      var s, o = [],
        a = 0,
        c = i.length;
      for (a; a < c; a++) s = i[a].getAttribute(t), s === e ? o.push(i[a]) : s && s.length && (s = s.split(" "), s.indexOf(e) > -1 && o.push(i[a]));
      return o
    }
  }, {
    "@marcom/ac-dom-traversal/querySelectorAll": 119
  }],
  249: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-traversal/querySelectorAll"),
      r = t("@marcom/ac-dom-traversal/ancestors"),
      s = function(t, e) {
        var i, n = document.getElementsByTagName("*"),
          s = 0,
          o = n.length,
          a = [];
        for (s; s < o; s++) i = n[s], null !== i.getAttribute(t) && (!e || r(i).indexOf(e) > -1) && (a[a.length] = i);
        return a
      };
    e.exports = function(t, e) {
      e = e || document.body;
      var i = n("[" + t + "]", e);
      return 0 === i.length && 7 === document.documentMode ? s(t, e) : i
    }
  }, {
    "@marcom/ac-dom-traversal/ancestors": 114,
    "@marcom/ac-dom-traversal/querySelectorAll": 119
  }],
  250: [function(t, e, i) {
    "use strict";

    function n(t, e, i) {
      i = i || {}, this._el = t, this._isRightToLeft = void 0 === i.rightToLeft ? "rtl" === c(t, "direction").direction : i.rightToLeft, this._scrollType = this._scrollDirection(), this._gallery = e, this._triggers = {}, this._ordered = [], this._containerEl = this._el.children[0], this._slideDuration = void 0 === i.duration ? p : i.duration, m.call(this)
    }
    var r = t("@marcom/ac-dom-events/addEventListener"),
      s = t("@marcom/ac-dom-events/removeEventListener"),
      o = t("@marcom/ac-dom-metrics/getDimensions"),
      a = t("@marcom/ac-dom-metrics/getPosition"),
      c = t("@marcom/ac-dom-styles/getStyle"),
      l = t("@marcom/ac-dom-styles/setStyle"),
      u = t("@marcom/ac-dom-traversal/ancestors"),
      h = t("@marcom/ac-object/create"),
      d = t("@marcom/ac-solar/scrollX"),
      m = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      f = t("./../Gallery"),
      p = .5,
      _ = m.prototype,
      g = n.prototype = h(_);
    g.start = function() {
      this._onWindowLoad = this._onWindowLoad.bind(this), this._onGalleryUpdated = this._onGalleryUpdated.bind(this), this._gallery.on(f.UPDATE, this._onGalleryUpdated), this.resize(), r(window, "load", this._onWindowLoad)
    }, g.addTrigger = function(t, e) {
      if (void 0 === this._triggers[e.getElementId()]) {
        var i = u(t);
        if (i.indexOf(this._el) > -1) {
          var n = {
            el: t
          };
          this._triggers[e.getElementId()] = n, this._ordered.push(n)
        }
      }
    }, g.resize = function() {
      if (this._ordered.length) {
        l(this._containerEl, {
          paddingLeft: null,
          paddingRight: null
        }), this._containerWidth = o(this._containerEl).width, this._width = o(this._el).width, this._viewCenter = Math.round(.5 * this._width);
        for (var t = this._ordered.length; t--;) this._setTriggerData(this._ordered[t]);
        if (this._ordered.sort(function(t, e) {
            return t.left - e.left
          }), this._containerWidth > this._width) {
          var e = this._ordered[0],
            i = this._ordered[this._ordered.length - 1],
            n = .5 * (this._width - e.width),
            r = .5 * (this._width - i.width);
          l(this._containerEl, {
            paddingLeft: n + "px",
            paddingRight: r + "px"
          });
          var s = this._triggers[this._gallery.getCurrentItem().getElementId()];
          s && this._centerNav(s)
        }
      }
    }, g.destroy = function() {
      return this._gallery.off(f.UPDATE, this._onGalleryUpdated), s(window, "load", this._onWindowLoad), l(this._containerEl, {
        paddingLeft: null,
        paddingRight: null
      }), this._el = null, this._gallery = null, this._triggers = null, this._ordered = null, this._containerEl = null, this._destroyCurrentClip(), this._clip = null, _.destroy.call(this)
    }, g._onWindowLoad = function() {
      s(window, "load", this._onWindowLoad), this.resize()
    }, g._setTriggerData = function(t) {
      t.width = o(t.el).width;
      var e = a(t.el);
      t.left = e.left, t.right = e.right, t.center = t.left + .5 * t.width
    }, g._centerNav = function(t, e) {
      this._setTriggerData(t), this._width = o(this._el).width, this._viewCenter = Math.round(.5 * this._width);
      var i = Math.round(t.center - this._viewCenter);
      this._isRightToLeft && ("negative" !== this._scrollType && (i = Math.abs(i)), "default" === this._scrollType && (i = this._el.scrollWidth - this._el.clientWidth - i)), this._destroyCurrentClip(), e ? this._clip = d(this._el, i, e) : this._el.scrollLeft = i
    }, g._onGalleryUpdated = function(t) {
      var e = this._triggers[t.incoming[0].getElementId()];
      e && this._centerNav(e, this._slideDuration)
    }, g._destroyCurrentClip = function() {
      this._clip && this._clip.playing() && this._clip.destroy()
    }, g._scrollDirection = function() {
      var t = "reverse",
        e = document.createElement("div");
      return e.style.cssText = "width:2px; height:1px; position:absolute; top:-1000px; overflow:scroll; font-size: 14px;", e.style.direction = "rtl", e.innerHTML = "test", document.body.appendChild(e), e.scrollLeft > 0 ? t = "default" : (e.scrollLeft = 1, 0 === e.scrollLeft && (t = "negative")), document.body.removeChild(e), t
    }, e.exports = n
  }, {
    "./../Gallery": 236,
    "@marcom/ac-dom-events/addEventListener": 71,
    "@marcom/ac-dom-events/removeEventListener": 75,
    "@marcom/ac-dom-metrics/getDimensions": 226,
    "@marcom/ac-dom-metrics/getPosition": 230,
    "@marcom/ac-dom-styles/getStyle": 111,
    "@marcom/ac-dom-styles/setStyle": 113,
    "@marcom/ac-dom-traversal/ancestors": 114,
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-object/create": 305,
    "@marcom/ac-solar/scrollX": 405
  }],
  251: [function(t, e, i) {
    "use strict";
    var n = t("./../analytics/AnalyticsManager");
    e.exports = new n
  }, {
    "./../analytics/AnalyticsManager": 239
  }],
  252: [function(t, e, i) {
    "use strict";
    var n = ["input", "select", "textarea", "button", "object"],
      r = ["href", "tabindex", "contenteditable"],
      s = function() {
        this.focusableSelectors = n.concat(r.map(function(t) {
          return "href" === t ? "a[" + t + "]" : "*[" + t + "]"
        })).join(",")
      },
      o = s.prototype;
    o.isFocusable = function(t, e) {
      var i = t.nodeName.toLowerCase(),
        r = n.indexOf(i) > -1;
      return "a" === i || (r ? !t.disabled : !t.contentEditable || (e = e || t.tabIndex, isNaN(e)))
    }, o.isTabbable = function(t) {
      var e = t.getAttribute("tabindex");
      return isNaN(e) ? this.isFocusable(t, e) : e >= 0
    }, o.getTabbable = function(t) {
      for (var e = t.length, i = [], n = 0; n < e; n++) this.isTabbable(t[n]) && i.push(t[n]);
      return i
    }, e.exports = new s
  }, {}],
  253: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      e = a(e) || {}, e.itemType = e.itemType || p, this._itemsPerSlide = e.itemsPerSlide || 1;
      var i = e.deeplink !== !1;
      if (e.deeplink = !1, this._slideDuration = void 0 !== e.duration ? e.duration : y, e.toggleNavDuration = void 0 === e.toggleNavDuration ? this._slideDuration : e.toggleNavDuration, this._itemCenterPoint = void 0 !== e.itemCenterPoint ? e.itemCenterPoint : g, this._edgePullResistance = e.edgePullResistance ? e.edgePullResistance : v, this._slideOptions = {
          ease: e.ease
        }, e.resizeContainerOnUpdate === !0 && (e.resizeContainerOnUpdate = this._slideDuration), e.touch = e.touch !== !1, this._originalWrapAround = e.wrapAround || !1, m.call(this, t, e), i) {
        var n = this._getDeeplinkedItem();
        n && this._currentItem !== n && (this._currentItem.hide(), this._setCurrentItem(n), this._currentItem.show())
      }
      this._positionItems = this._positionItems.bind(this), this._createContainer(), 0 !== this._items.length && this._positionItems(), this._isInstantiated = !0
    }
    var r = t("@marcom/ac-classlist"),
      s = t("@marcom/ac-dom-styles"),
      o = t("@marcom/ac-dom-traversal/querySelectorAll"),
      a = t("@marcom/ac-object/clone"),
      c = t("@marcom/ac-object/create"),
      l = t("./../helpers/getElementFullWidth"),
      u = t("@marcom/ac-solar/moveX"),
      h = t("./../helpers/selectElementFromDataAttributeValue"),
      d = t("./../helpers/selectElementThatHasDataAttribute"),
      m = t("./../auto/AutoGallery"),
      f = t("@marcom/ac-pointer-tracker").PointerTracker,
      p = t("./SlideItem"),
      _ = t("./SlideItemWrapper"),
      g = .5,
      y = .5,
      v = !0;
    n.RESIZED = m.RESIZED, n.UPDATE = m.UPDATE, n.UPDATE_COMPLETE = m.UPDATE_COMPLETE;
    var b = m.prototype,
      E = n.prototype = c(b);
    E.addItem = function(t, e) {
      t.nodeType && (t = new this._itemType(t));
      var i = b.addItem.call(this, t, e);
      return void 0 !== this._containerEl && (this._addItemToContainer(t), this._positionItems()), this._updateWrapAround(), i
    }, E.removeItem = function(t, e) {
      if (this._containerEl && t.getElement().parentElement === this._containerEl) {
        var i = t.getOriginalParentElement();
        i ? i.appendChild(t.getElement()) : "function" == typeof t.removeItems && (t.removeItems(), e.destroyItem = !0);
        var n = b.removeItem.call(this, t, e);
        return this._currentItem && this._positionItems(this._currentItem), this._updateWrapAround(), n
      }
      return b.removeItem.call(this, t, e)
    }, E.resize = function() {
      return this._positionItems(), this._snapToPosition(this._currentItem.position()), b.resize.call(this)
    }, E.destroy = function(t) {
      this._destroyCurrentClip(), this._clip = null;
      for (var e = this._items.length; e--;) this._items[e].off(p.CENTER_POINT_CHANGED, this._positionItems);
      this._touchSwipe && (this._touchSwipe.off(f.START, this._onSwipeStart), this._touchSwipe.off(f.UPDATE, this._onSwipeUpdate)), this._clickSwipe && (this._clickSwipe.off(f.START, this._onSwipeStart), this._clickSwipe.off(f.UPDATE, this._onSwipeUpdate));
      var i = this._el,
        n = b.destroy.call(this, t);
      return i.removeChild(this._containerEl), this._containerEl = null, this._slideDuration = null, this._itemCenterPoint = null, this._positionItems = null, this._slideOptions = null, n
    }, E._addItems = function(t) {
      if (this._itemsPerSlide > 1) {
        var e, i = /(^\[).*(\]$)/.test(t);
        e = i ? d(t.replace(/\[|\]/g, ""), this._el) : o(t, this._el);
        var n, r, s, a = 0,
          c = 0,
          l = e.length;
        for (c; c < l; c++) 0 === a && (n = new _), n.addItem(e[c]), s = e[c].getAttribute("id"), s && (r = h("data-ac-gallery-trigger", s), this._addItemTriggers(n, r)), ++a !== this._itemsPerSlide && c !== l - 1 || (a = 0, n.resize(), this.addItem(n))
      } else b._addItems.call(this, t)
    }, E._createContainer = function() {
      this._containerEl = document.createElement("div"), r.add(this._containerEl, "ac-gallery-slidecontainer"), s.setStyle(this._containerEl, {
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%"
      }), this._el.appendChild(this._containerEl);
      var t = 0,
        e = this._items.length;
      for (t; t < e; t++) this._addItemToContainer(this._items[t])
    }, E._addItemToContainer = function(t) {
      this._containerEl.appendChild(t.getElement()), t.on(p.CENTER_POINT_CHANGED, this._positionItems)
    }, E._positionItems = function(t) {
      t = t || this._currentItem;
      var e = this._items;
      this._wrapAround && (e = this._shuffleItems());
      var i, n, r, o, a, c = this._getActualPositionX() - t.position() || 0,
        u = parseInt(s.getStyle(this._el, "width").width, 10),
        h = 0,
        d = 0,
        m = e.length;
      for (d; d < m; d++) i = e[d], i.resize(), n = i.getElement(), s.setStyle(n, {
        left: h + "px"
      }), r = l(n), o = u - r, a = i.centerPoint && null !== i.centerPoint() ? i.centerPoint() : this._itemCenterPoint, i.position(h * -1 + o * a), this._isRightToLeft ? h -= r : h += r;
      h = t.position() + c, this._snapToPosition(h)
    }, E._getActualPositionX = function() {
      var t = s.getStyle(this._containerEl, "transform").transform;
      if (!t || "none" === t) {
        var e = s.getStyle(this._containerEl, "left").left;
        return parseInt(e, 10)
      }
      if (t === this._transformStyles && void 0 !== this._actualPositionX) return this._actualPositionX;
      this._transformStyles = t;
      var i = this._transformStyles.split(",");
      return this._actualPositionX = i[4] || this._currentItem.position(), 1 * this._actualPositionX
    }, E._snapToPosition = function(t) {
      this._destroyCurrentClip(), this._positionX = t, s.setStyle(this._containerEl, {
        transition: "transform 0s, left 0s"
      }), u(this._containerEl, t, 0, this._slideOptions)
    }, E._slideToPosition = function(t, e, i) {
      this._positionX = t, this._clip = u(this._containerEl, t, e, {
        ease: this._slideOptions.ease,
        onComplete: i
      })
    }, E._setUpSwiping = function(t, e) {
      var i = b._setUpSwiping.call(this, t, e);
      return this._onSwipeStart = this._onSwipeStart.bind(this), this._onSwipeUpdate = this._onSwipeUpdate.bind(this), this._touchSwipe && (this._touchSwipe.on(f.START, this._onSwipeStart), this._touchSwipe.on(f.UPDATE, this._onSwipeUpdate)), this._clickSwipe && (this._clickSwipe.on(f.START, this._onSwipeStart), this._clickSwipe.on(f.UPDATE, this._onSwipeUpdate)), i
    }, E._onSwipeStart = function(t) {
      this._clip && this._clip.playing() && (this._destroyCurrentClip(), this._positionX = this._getActualPositionX())
    }, E._onSwipeUpdate = function(t) {
      this._destroyCurrentClip();
      var e = this.getItems().slice(-1)[0].position(),
        i = this._positionX > 0 || this._positionX < e,
        n = t.diffX;
      this._edgePullResistance && !this._wrapAround && i && (n *= .5), this._snapToPosition(this._positionX - n)
    }, E._onSwipeEnd = function(t) {
      var e = b._onSwipeEnd.call(this, t);
      return null === e && (e = this.show(this._currentItem, {
        interactionEvent: t.interactionEvent
      })), e
    }, E._shuffleItems = function() {
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
    }, E._updateItems = function(t, e) {
      if (this._destroyCurrentClip(), this._wrapAround && this._positionItems(t.outgoing[0]), this.getItemIndex(t.outgoing[0]) > -1) {
        var i = e ? null : this.trigger.bind(this, n.UPDATE_COMPLETE, t),
          r = this._slideDuration;
        this._slideToPosition(t.incoming[0].position(), r, i), t.incoming[0] !== t.outgoing[0] && (t.incoming[0].show(), t.outgoing[0].hide())
      } else this._slideToPosition(this._currentItem.position(), this._slideDuration), t.incoming[0].show(), e || this.trigger(n.UPDATE_COMPLETE, t)
    }, E._updateWrapAround = function() {
      this._items.length <= 2 ? this._wrapAround = !1 : this._originalWrapAround && (this._wrapAround = this._originalWrapAround), this._isInstantiated && (this._previousButtons || this._nextButtons) && this._updatePaddleNavState()
    }, E._destroyCurrentClip = function() {
      this._clip && this._clip.playing() && this._clip.destroy()
    }, e.exports = n
  }, {
    "./../auto/AutoGallery": 240,
    "./../helpers/getElementFullWidth": 246,
    "./../helpers/selectElementFromDataAttributeValue": 248,
    "./../helpers/selectElementThatHasDataAttribute": 249,
    "./SlideItem": 254,
    "./SlideItemWrapper": 255,
    "@marcom/ac-classlist": 34,
    "@marcom/ac-dom-styles": 110,
    "@marcom/ac-dom-traversal/querySelectorAll": 119,
    "@marcom/ac-object/clone": 304,
    "@marcom/ac-object/create": 305,
    "@marcom/ac-pointer-tracker": 315,
    "@marcom/ac-solar/moveX": 403
  }],
  254: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      o.call(this, t, e), r(t, {
        position: "absolute",
        transform: {
          translateZ: 0
        }
      }), this._parentElement = t.parentElement
    }
    var r = t("@marcom/ac-dom-styles/setStyle"),
      s = t("@marcom/ac-object/create"),
      o = t("./../Item");
    n.CENTER_POINT_CHANGED = "centerpointchanged", n.SELECTED = o.SELECTED, n.SHOW = o.SHOW, n.HIDE = o.HIDE;
    var a = o.prototype,
      c = n.prototype = s(a);
    c.position = function(t) {
      return void 0 !== t && (this._position = t), this._position || 0
    }, c.centerPoint = function(t) {
      return void 0 !== t && (this._centerPoint = t, this.trigger(n.CENTER_POINT_CHANGED)), void 0 !== this._centerPoint ? this._centerPoint : null
    }, c.getOriginalParentElement = function() {
      return this._parentElement
    }, c.resize = function() {}, c.destroy = function() {
      r(this._el, {
        position: null,
        left: null,
        transform: null
      }), a.destroy.call(this)
    }, e.exports = n
  }, {
    "./../Item": 237,
    "@marcom/ac-dom-styles/setStyle": 113,
    "@marcom/ac-object/create": 305
  }],
  255: [function(t, e, i) {
    "use strict";

    function n() {
      u.call(this, document.createElement("div")), this._items = [], this._currentWidth = 0, r.add(this._el, h)
    }
    var r = t("@marcom/ac-classlist"),
      s = t("@marcom/ac-dom-styles/setStyle"),
      o = t("@marcom/ac-dom-traversal/querySelectorAll"),
      a = t("@marcom/ac-object/create"),
      c = t("./../singletons/tabManager"),
      l = t("./../helpers/getElementFullWidth"),
      u = t("./SlideItem"),
      h = "ac-gallery-slideitemwrapper",
      d = u.prototype,
      m = n.prototype = a(d);
    m.addItem = function(t) {
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
      this._focusableEls = this._focusableEls.concat(o(c.focusableSelectors, t))
    }, m.removeItems = function() {
      var t, e, i = 0,
        n = this._items.length;
      for (i; i < n; i++) t = this._items[i].el, s(t, {
        position: null,
        left: null
      }), e = this._items[i].parentElement, e && e.appendChild(t)
    }, m.resize = function() {
      this._currentWidth = 0;
      var t, e = 0,
        i = this._items.length;
      for (e; e < i; e++) t = this._items[e].el, s(t, {
        position: "absolute",
        left: this._currentWidth + "px"
      }), this._currentWidth += l(t);
      s(this._el, {
        width: this._currentWidth + "px"
      })
    }, m.destroy = function() {
      this.removeItems(), this._items = null, this._currentWidth = null;
      var t = this._el.parentElement;
      t && t.removeChild(this._el), d.destroy.call(this)
    }, e.exports = n
  }, {
    "./../helpers/getElementFullWidth": 246,
    "./../singletons/tabManager": 252,
    "./SlideItem": 254,
    "@marcom/ac-classlist": 34,
    "@marcom/ac-dom-styles/setStyle": 113,
    "@marcom/ac-dom-traversal/querySelectorAll": 119,
    "@marcom/ac-object/create": 305
  }],
  256: [function(t, e, i) {
    "use strict";
    var n = "";
    n += '<nav class="paddlenav">', n += "<ul>", n += '<li><button class="paddlenav-arrow paddlenav-arrow-previous" data-ac-gallery-previous-trigger="%ID%"></button></li>', n += '<li><button class="paddlenav-arrow paddlenav-arrow-next" data-ac-gallery-next-trigger="%ID%"></button></li>', n += "</ul>", n += "</nav>", e.exports = n
  }, {}],
  257: [function(t, e, i) {
    "use strict";

    function n(t) {
      var e = t.length;
      if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0
    }

    function r(t) {
      return 3 * t.length / 4 - n(t)
    }

    function s(t) {
      var e, i, r, s, o, a = t.length;
      s = n(t), o = new h(3 * a / 4 - s), i = s > 0 ? a - 4 : a;
      var c = 0;
      for (e = 0; e < i; e += 4) r = u[t.charCodeAt(e)] << 18 | u[t.charCodeAt(e + 1)] << 12 | u[t.charCodeAt(e + 2)] << 6 | u[t.charCodeAt(e + 3)], o[c++] = r >> 16 & 255, o[c++] = r >> 8 & 255, o[c++] = 255 & r;
      return 2 === s ? (r = u[t.charCodeAt(e)] << 2 | u[t.charCodeAt(e + 1)] >> 4, o[c++] = 255 & r) : 1 === s && (r = u[t.charCodeAt(e)] << 10 | u[t.charCodeAt(e + 1)] << 4 | u[t.charCodeAt(e + 2)] >> 2, o[c++] = r >> 8 & 255, o[c++] = 255 & r), o
    }

    function o(t) {
      return l[t >> 18 & 63] + l[t >> 12 & 63] + l[t >> 6 & 63] + l[63 & t]
    }

    function a(t, e, i) {
      for (var n, r = [], s = e; s < i; s += 3) n = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]), r.push(o(n));
      return r.join("")
    }

    function c(t) {
      for (var e, i = t.length, n = i % 3, r = "", s = [], o = 16383, c = 0, u = i - n; c < u; c += o) s.push(a(t, c, c + o > u ? u : c + o));
      return 1 === n ? (e = t[i - 1], r += l[e >> 2], r += l[e << 4 & 63], r += "==") : 2 === n && (e = (t[i - 2] << 8) + t[i - 1], r += l[e >> 10], r += l[e >> 4 & 63], r += l[e << 2 & 63], r += "="), s.push(r), s.join("")
    }
    i.byteLength = r, i.toByteArray = s, i.fromByteArray = c;
    for (var l = [], u = [], h = "undefined" != typeof Uint8Array ? Uint8Array : Array, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", m = 0, f = d.length; m < f; ++m) l[m] = d[m], u[d.charCodeAt(m)] = m;
    u["-".charCodeAt(0)] = 62, u["_".charCodeAt(0)] = 63
  }, {}],
  258: [function(t, e, i) {
    (function(e) {
      "use strict";

      function n() {
        try {
          var t = new Uint8Array(1);
          return t.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function() {
              return 42
            }
          }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
        } catch (e) {
          return !1
        }
      }

      function r() {
        return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
      }

      function s(t, e) {
        if (r() < e) throw new RangeError("Invalid typed array length");
        return o.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = o.prototype) : (null === t && (t = new o(e)), t.length = e), t
      }

      function o(t, e, i) {
        if (!(o.TYPED_ARRAY_SUPPORT || this instanceof o)) return new o(t, e, i);
        if ("number" == typeof t) {
          if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
          return u(this, t)
        }
        return a(this, t, e, i)
      }

      function a(t, e, i, n) {
        if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? m(t, e, i, n) : "string" == typeof e ? h(t, e, i) : f(t, e)
      }

      function c(t) {
        if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
        if (t < 0) throw new RangeError('"size" argument must not be negative')
      }

      function l(t, e, i, n) {
        return c(e), e <= 0 ? s(t, e) : void 0 !== i ? "string" == typeof n ? s(t, e).fill(i, n) : s(t, e).fill(i) : s(t, e)
      }

      function u(t, e) {
        if (c(e), t = s(t, e < 0 ? 0 : 0 | p(e)), !o.TYPED_ARRAY_SUPPORT)
          for (var i = 0; i < e; ++i) t[i] = 0;
        return t
      }

      function h(t, e, i) {
        if ("string" == typeof i && "" !== i || (i = "utf8"), !o.isEncoding(i)) throw new TypeError('"encoding" must be a valid string encoding');
        var n = 0 | g(e, i);
        t = s(t, n);
        var r = t.write(e, i);
        return r !== n && (t = t.slice(0, r)), t
      }

      function d(t, e) {
        var i = e.length < 0 ? 0 : 0 | p(e.length);
        t = s(t, i);
        for (var n = 0; n < i; n += 1) t[n] = 255 & e[n];
        return t
      }

      function m(t, e, i, n) {
        if (e.byteLength, i < 0 || e.byteLength < i) throw new RangeError("'offset' is out of bounds");
        if (e.byteLength < i + (n || 0)) throw new RangeError("'length' is out of bounds");
        return e = void 0 === i && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, i) : new Uint8Array(e, i, n), o.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = o.prototype) : t = d(t, e), t
      }

      function f(t, e) {
        if (o.isBuffer(e)) {
          var i = 0 | p(e.length);
          return t = s(t, i), 0 === t.length ? t : (e.copy(t, 0, 0, i), t)
        }
        if (e) {
          if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || Q(e.length) ? s(t, 0) : d(t, e);
          if ("Buffer" === e.type && $(e.data)) return d(t, e.data)
        }
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
      }

      function p(t) {
        if (t >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes");
        return 0 | t
      }

      function _(t) {
        return +t != t && (t = 0), o.alloc(+t)
      }

      function g(t, e) {
        if (o.isBuffer(t)) return t.length;
        if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
        "string" != typeof t && (t = "" + t);
        var i = t.length;
        if (0 === i) return 0;
        for (var n = !1;;) switch (e) {
          case "ascii":
          case "latin1":
          case "binary":
            return i;
          case "utf8":
          case "utf-8":
          case void 0:
            return G(t).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return 2 * i;
          case "hex":
            return i >>> 1;
          case "base64":
            return Y(t).length;
          default:
            if (n) return G(t).length;
            e = ("" + e).toLowerCase(), n = !0
        }
      }

      function y(t, e, i) {
        var n = !1;
        if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
        if ((void 0 === i || i > this.length) && (i = this.length), i <= 0) return "";
        if (i >>>= 0, e >>>= 0, i <= e) return "";
        for (t || (t = "utf8");;) switch (t) {
          case "hex":
            return L(this, e, i);
          case "utf8":
          case "utf-8":
            return P(this, e, i);
          case "ascii":
            return I(this, e, i);
          case "latin1":
          case "binary":
            return D(this, e, i);
          case "base64":
            return k(this, e, i);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return M(this, e, i);
          default:
            if (n) throw new TypeError("Unknown encoding: " + t);
            t = (t + "").toLowerCase(), n = !0
        }
      }

      function v(t, e, i) {
        var n = t[e];
        t[e] = t[i], t[i] = n
      }

      function b(t, e, i, n, r) {
        if (0 === t.length) return -1;
        if ("string" == typeof i ? (n = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, isNaN(i) && (i = r ? 0 : t.length - 1), i < 0 && (i = t.length + i), i >= t.length) {
          if (r) return -1;
          i = t.length - 1
        } else if (i < 0) {
          if (!r) return -1;
          i = 0
        }
        if ("string" == typeof e && (e = o.from(e, n)), o.isBuffer(e)) return 0 === e.length ? -1 : E(t, e, i, n, r);
        if ("number" == typeof e) return e = 255 & e, o.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(t, e, i) : Uint8Array.prototype.lastIndexOf.call(t, e, i) : E(t, [e], i, n, r);
        throw new TypeError("val must be string, number or Buffer")
      }

      function E(t, e, i, n, r) {
        function s(t, e) {
          return 1 === o ? t[e] : t.readUInt16BE(e * o)
        }
        var o = 1,
          a = t.length,
          c = e.length;
        if (void 0 !== n && (n = String(n).toLowerCase(), "ucs2" === n || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
          if (t.length < 2 || e.length < 2) return -1;
          o = 2, a /= 2, c /= 2, i /= 2
        }
        var l;
        if (r) {
          var u = -1;
          for (l = i; l < a; l++)
            if (s(t, l) === s(e, u === -1 ? 0 : l - u)) {
              if (u === -1 && (u = l), l - u + 1 === c) return u * o
            } else u !== -1 && (l -= l - u), u = -1
        } else
          for (i + c > a && (i = a - c), l = i; l >= 0; l--) {
            for (var h = !0, d = 0; d < c; d++)
              if (s(t, l + d) !== s(e, d)) {
                h = !1;
                break
              } if (h) return l
          }
        return -1
      }

      function w(t, e, i, n) {
        i = Number(i) || 0;
        var r = t.length - i;
        n ? (n = Number(n), n > r && (n = r)) : n = r;
        var s = e.length;
        if (s % 2 !== 0) throw new TypeError("Invalid hex string");
        n > s / 2 && (n = s / 2);
        for (var o = 0; o < n; ++o) {
          var a = parseInt(e.substr(2 * o, 2), 16);
          if (isNaN(a)) return o;
          t[i + o] = a
        }
        return o
      }

      function T(t, e, i, n) {
        return X(G(e, t.length - i), t, i, n)
      }

      function S(t, e, i, n) {
        return X(K(e), t, i, n)
      }

      function C(t, e, i, n) {
        return S(t, e, i, n)
      }

      function x(t, e, i, n) {
        return X(Y(e), t, i, n)
      }

      function A(t, e, i, n) {
        return X(W(e, t.length - i), t, i, n)
      }

      function k(t, e, i) {
        return 0 === e && i === t.length ? Z.fromByteArray(t) : Z.fromByteArray(t.slice(e, i))
      }

      function P(t, e, i) {
        i = Math.min(t.length, i);
        for (var n = [], r = e; r < i;) {
          var s = t[r],
            o = null,
            a = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
          if (r + a <= i) {
            var c, l, u, h;
            switch (a) {
              case 1:
                s < 128 && (o = s);
                break;
              case 2:
                c = t[r + 1], 128 === (192 & c) && (h = (31 & s) << 6 | 63 & c, h > 127 && (o = h));
                break;
              case 3:
                c = t[r + 1], l = t[r + 2], 128 === (192 & c) && 128 === (192 & l) && (h = (15 & s) << 12 | (63 & c) << 6 | 63 & l, h > 2047 && (h < 55296 || h > 57343) && (o = h));
                break;
              case 4:
                c = t[r + 1], l = t[r + 2], u = t[r + 3], 128 === (192 & c) && 128 === (192 & l) && 128 === (192 & u) && (h = (15 & s) << 18 | (63 & c) << 12 | (63 & l) << 6 | 63 & u, h > 65535 && h < 1114112 && (o = h))
            }
          }
          null === o ? (o = 65533, a = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), n.push(o), r += a
        }
        return O(n)
      }

      function O(t) {
        var e = t.length;
        if (e <= tt) return String.fromCharCode.apply(String, t);
        for (var i = "", n = 0; n < e;) i += String.fromCharCode.apply(String, t.slice(n, n += tt));
        return i
      }

      function I(t, e, i) {
        var n = "";
        i = Math.min(t.length, i);
        for (var r = e; r < i; ++r) n += String.fromCharCode(127 & t[r]);
        return n
      }

      function D(t, e, i) {
        var n = "";
        i = Math.min(t.length, i);
        for (var r = e; r < i; ++r) n += String.fromCharCode(t[r]);
        return n
      }

      function L(t, e, i) {
        var n = t.length;
        (!e || e < 0) && (e = 0), (!i || i < 0 || i > n) && (i = n);
        for (var r = "", s = e; s < i; ++s) r += z(t[s]);
        return r
      }

      function M(t, e, i) {
        for (var n = t.slice(e, i), r = "", s = 0; s < n.length; s += 2) r += String.fromCharCode(n[s] + 256 * n[s + 1]);
        return r
      }

      function F(t, e, i) {
        if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + e > i) throw new RangeError("Trying to access beyond buffer length")
      }

      function R(t, e, i, n, r, s) {
        if (!o.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > r || e < s) throw new RangeError('"value" argument is out of bounds');
        if (i + n > t.length) throw new RangeError("Index out of range")
      }

      function N(t, e, i, n) {
        e < 0 && (e = 65535 + e + 1);
        for (var r = 0, s = Math.min(t.length - i, 2); r < s; ++r) t[i + r] = (e & 255 << 8 * (n ? r : 1 - r)) >>> 8 * (n ? r : 1 - r)
      }

      function j(t, e, i, n) {
        e < 0 && (e = 4294967295 + e + 1);
        for (var r = 0, s = Math.min(t.length - i, 4); r < s; ++r) t[i + r] = e >>> 8 * (n ? r : 3 - r) & 255
      }

      function V(t, e, i, n, r, s) {
        if (i + n > t.length) throw new RangeError("Index out of range");
        if (i < 0) throw new RangeError("Index out of range")
      }

      function U(t, e, i, n, r) {
        return r || V(t, e, i, 4, 3.4028234663852886e38, -3.4028234663852886e38), J.write(t, e, i, n, 23, 4), i + 4
      }

      function B(t, e, i, n, r) {
        return r || V(t, e, i, 8, 1.7976931348623157e308, -1.7976931348623157e308), J.write(t, e, i, n, 52, 8), i + 8
      }

      function H(t) {
        if (t = q(t).replace(et, ""), t.length < 2) return "";
        for (; t.length % 4 !== 0;) t += "=";
        return t
      }

      function q(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
      }

      function z(t) {
        return t < 16 ? "0" + t.toString(16) : t.toString(16)
      }

      function G(t, e) {
        e = e || 1 / 0;
        for (var i, n = t.length, r = null, s = [], o = 0; o < n; ++o) {
          if (i = t.charCodeAt(o), i > 55295 && i < 57344) {
            if (!r) {
              if (i > 56319) {
                (e -= 3) > -1 && s.push(239, 191, 189);
                continue
              }
              if (o + 1 === n) {
                (e -= 3) > -1 && s.push(239, 191, 189);
                continue
              }
              r = i;
              continue
            }
            if (i < 56320) {
              (e -= 3) > -1 && s.push(239, 191, 189), r = i;
              continue
            }
            i = (r - 55296 << 10 | i - 56320) + 65536
          } else r && (e -= 3) > -1 && s.push(239, 191, 189);
          if (r = null, i < 128) {
            if ((e -= 1) < 0) break;
            s.push(i)
          } else if (i < 2048) {
            if ((e -= 2) < 0) break;
            s.push(i >> 6 | 192, 63 & i | 128)
          } else if (i < 65536) {
            if ((e -= 3) < 0) break;
            s.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128)
          } else {
            if (!(i < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            s.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128)
          }
        }
        return s
      }

      function K(t) {
        for (var e = [], i = 0; i < t.length; ++i) e.push(255 & t.charCodeAt(i));
        return e
      }

      function W(t, e) {
        for (var i, n, r, s = [], o = 0; o < t.length && !((e -= 2) < 0); ++o) i = t.charCodeAt(o), n = i >> 8, r = i % 256, s.push(r), s.push(n);
        return s
      }

      function Y(t) {
        return Z.toByteArray(H(t))
      }

      function X(t, e, i, n) {
        for (var r = 0; r < n && !(r + i >= e.length || r >= t.length); ++r) e[r + i] = t[r];
        return r
      }

      function Q(t) {
        return t !== t
      }
      var Z = t("base64-js"),
        J = t("ieee754"),
        $ = t("isarray");
      i.Buffer = o, i.SlowBuffer = _, i.INSPECT_MAX_BYTES = 50, o.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : n(), i.kMaxLength = r(), o.poolSize = 8192, o._augment = function(t) {
        return t.__proto__ = o.prototype, t
      }, o.from = function(t, e, i) {
        return a(null, t, e, i)
      }, o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
        value: null,
        configurable: !0
      })), o.alloc = function(t, e, i) {
        return l(null, t, e, i)
      }, o.allocUnsafe = function(t) {
        return u(null, t)
      }, o.allocUnsafeSlow = function(t) {
        return u(null, t)
      }, o.isBuffer = function(t) {
        return !(null == t || !t._isBuffer)
      }, o.compare = function(t, e) {
        if (!o.isBuffer(t) || !o.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
        if (t === e) return 0;
        for (var i = t.length, n = e.length, r = 0, s = Math.min(i, n); r < s; ++r)
          if (t[r] !== e[r]) {
            i = t[r], n = e[r];
            break
          } return i < n ? -1 : n < i ? 1 : 0
      }, o.isEncoding = function(t) {
        switch (String(t).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return !0;
          default:
            return !1
        }
      }, o.concat = function(t, e) {
        if (!$(t)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === t.length) return o.alloc(0);
        var i;
        if (void 0 === e)
          for (e = 0, i = 0; i < t.length; ++i) e += t[i].length;
        var n = o.allocUnsafe(e),
          r = 0;
        for (i = 0; i < t.length; ++i) {
          var s = t[i];
          if (!o.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
          s.copy(n, r), r += s.length
        }
        return n
      }, o.byteLength = g, o.prototype._isBuffer = !0, o.prototype.swap16 = function() {
        var t = this.length;
        if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var e = 0; e < t; e += 2) v(this, e, e + 1);
        return this
      }, o.prototype.swap32 = function() {
        var t = this.length;
        if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var e = 0; e < t; e += 4) v(this, e, e + 3), v(this, e + 1, e + 2);
        return this
      }, o.prototype.swap64 = function() {
        var t = this.length;
        if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var e = 0; e < t; e += 8) v(this, e, e + 7), v(this, e + 1, e + 6), v(this, e + 2, e + 5), v(this, e + 3, e + 4);
        return this
      }, o.prototype.toString = function() {
        var t = 0 | this.length;
        return 0 === t ? "" : 0 === arguments.length ? P(this, 0, t) : y.apply(this, arguments)
      }, o.prototype.equals = function(t) {
        if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
        return this === t || 0 === o.compare(this, t)
      }, o.prototype.inspect = function() {
        var t = "",
          e = i.INSPECT_MAX_BYTES;
        return this.length > 0 && (t = this.toString("hex", 0, e).match(/.{2}/g).join(" "), this.length > e && (t += " ... ")), "<Buffer " + t + ">"
      }, o.prototype.compare = function(t, e, i, n, r) {
        if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
        if (void 0 === e && (e = 0), void 0 === i && (i = t ? t.length : 0), void 0 === n && (n = 0), void 0 === r && (r = this.length), e < 0 || i > t.length || n < 0 || r > this.length) throw new RangeError("out of range index");
        if (n >= r && e >= i) return 0;
        if (n >= r) return -1;
        if (e >= i) return 1;
        if (e >>>= 0, i >>>= 0, n >>>= 0, r >>>= 0, this === t) return 0;
        for (var s = r - n, a = i - e, c = Math.min(s, a), l = this.slice(n, r), u = t.slice(e, i), h = 0; h < c; ++h)
          if (l[h] !== u[h]) {
            s = l[h], a = u[h];
            break
          } return s < a ? -1 : a < s ? 1 : 0
      }, o.prototype.includes = function(t, e, i) {
        return this.indexOf(t, e, i) !== -1
      }, o.prototype.indexOf = function(t, e, i) {
        return b(this, t, e, i, !0)
      }, o.prototype.lastIndexOf = function(t, e, i) {
        return b(this, t, e, i, !1)
      }, o.prototype.write = function(t, e, i, n) {
        if (void 0 === e) n = "utf8", i = this.length, e = 0;
        else if (void 0 === i && "string" == typeof e) n = e, i = this.length, e = 0;
        else {
          if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          e = 0 | e, isFinite(i) ? (i = 0 | i, void 0 === n && (n = "utf8")) : (n = i, i = void 0)
        }
        var r = this.length - e;
        if ((void 0 === i || i > r) && (i = r), t.length > 0 && (i < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        n || (n = "utf8");
        for (var s = !1;;) switch (n) {
          case "hex":
            return w(this, t, e, i);
          case "utf8":
          case "utf-8":
            return T(this, t, e, i);
          case "ascii":
            return S(this, t, e, i);
          case "latin1":
          case "binary":
            return C(this, t, e, i);
          case "base64":
            return x(this, t, e, i);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return A(this, t, e, i);
          default:
            if (s) throw new TypeError("Unknown encoding: " + n);
            n = ("" + n).toLowerCase(), s = !0
        }
      }, o.prototype.toJSON = function() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        }
      };
      var tt = 4096;
      o.prototype.slice = function(t, e) {
        var i = this.length;
        t = ~~t, e = void 0 === e ? i : ~~e, t < 0 ? (t += i, t < 0 && (t = 0)) : t > i && (t = i), e < 0 ? (e += i, e < 0 && (e = 0)) : e > i && (e = i), e < t && (e = t);
        var n;
        if (o.TYPED_ARRAY_SUPPORT) n = this.subarray(t, e), n.__proto__ = o.prototype;
        else {
          var r = e - t;
          n = new o(r, (void 0));
          for (var s = 0; s < r; ++s) n[s] = this[s + t]
        }
        return n
      }, o.prototype.readUIntLE = function(t, e, i) {
        t = 0 | t, e = 0 | e, i || F(t, e, this.length);
        for (var n = this[t], r = 1, s = 0; ++s < e && (r *= 256);) n += this[t + s] * r;
        return n
      }, o.prototype.readUIntBE = function(t, e, i) {
        t = 0 | t, e = 0 | e, i || F(t, e, this.length);
        for (var n = this[t + --e], r = 1; e > 0 && (r *= 256);) n += this[t + --e] * r;
        return n
      }, o.prototype.readUInt8 = function(t, e) {
        return e || F(t, 1, this.length), this[t]
      }, o.prototype.readUInt16LE = function(t, e) {
        return e || F(t, 2, this.length), this[t] | this[t + 1] << 8
      }, o.prototype.readUInt16BE = function(t, e) {
        return e || F(t, 2, this.length), this[t] << 8 | this[t + 1]
      }, o.prototype.readUInt32LE = function(t, e) {
        return e || F(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
      }, o.prototype.readUInt32BE = function(t, e) {
        return e || F(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
      }, o.prototype.readIntLE = function(t, e, i) {
        t = 0 | t, e = 0 | e, i || F(t, e, this.length);
        for (var n = this[t], r = 1, s = 0; ++s < e && (r *= 256);) n += this[t + s] * r;
        return r *= 128, n >= r && (n -= Math.pow(2, 8 * e)), n
      }, o.prototype.readIntBE = function(t, e, i) {
        t = 0 | t, e = 0 | e, i || F(t, e, this.length);
        for (var n = e, r = 1, s = this[t + --n]; n > 0 && (r *= 256);) s += this[t + --n] * r;
        return r *= 128, s >= r && (s -= Math.pow(2, 8 * e)), s
      }, o.prototype.readInt8 = function(t, e) {
        return e || F(t, 1, this.length), 128 & this[t] ? (255 - this[t] + 1) * -1 : this[t]
      }, o.prototype.readInt16LE = function(t, e) {
        e || F(t, 2, this.length);
        var i = this[t] | this[t + 1] << 8;
        return 32768 & i ? 4294901760 | i : i
      }, o.prototype.readInt16BE = function(t, e) {
        e || F(t, 2, this.length);
        var i = this[t + 1] | this[t] << 8;
        return 32768 & i ? 4294901760 | i : i
      }, o.prototype.readInt32LE = function(t, e) {
        return e || F(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
      }, o.prototype.readInt32BE = function(t, e) {
        return e || F(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
      }, o.prototype.readFloatLE = function(t, e) {
        return e || F(t, 4, this.length), J.read(this, t, !0, 23, 4)
      }, o.prototype.readFloatBE = function(t, e) {
        return e || F(t, 4, this.length), J.read(this, t, !1, 23, 4)
      }, o.prototype.readDoubleLE = function(t, e) {
        return e || F(t, 8, this.length), J.read(this, t, !0, 52, 8)
      }, o.prototype.readDoubleBE = function(t, e) {
        return e || F(t, 8, this.length), J.read(this, t, !1, 52, 8)
      }, o.prototype.writeUIntLE = function(t, e, i, n) {
        if (t = +t, e = 0 | e, i = 0 | i, !n) {
          var r = Math.pow(2, 8 * i) - 1;
          R(this, t, e, i, r, 0)
        }
        var s = 1,
          o = 0;
        for (this[e] = 255 & t; ++o < i && (s *= 256);) this[e + o] = t / s & 255;
        return e + i
      }, o.prototype.writeUIntBE = function(t, e, i, n) {
        if (t = +t, e = 0 | e, i = 0 | i, !n) {
          var r = Math.pow(2, 8 * i) - 1;
          R(this, t, e, i, r, 0)
        }
        var s = i - 1,
          o = 1;
        for (this[e + s] = 255 & t; --s >= 0 && (o *= 256);) this[e + s] = t / o & 255;
        return e + i
      }, o.prototype.writeUInt8 = function(t, e, i) {
        return t = +t, e = 0 | e, i || R(this, t, e, 1, 255, 0), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
      }, o.prototype.writeUInt16LE = function(t, e, i) {
        return t = +t, e = 0 | e, i || R(this, t, e, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : N(this, t, e, !0), e + 2
      }, o.prototype.writeUInt16BE = function(t, e, i) {
        return t = +t, e = 0 | e, i || R(this, t, e, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : N(this, t, e, !1), e + 2
      }, o.prototype.writeUInt32LE = function(t, e, i) {
        return t = +t, e = 0 | e, i || R(this, t, e, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : j(this, t, e, !0), e + 4
      }, o.prototype.writeUInt32BE = function(t, e, i) {
        return t = +t, e = 0 | e, i || R(this, t, e, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : j(this, t, e, !1), e + 4
      }, o.prototype.writeIntLE = function(t, e, i, n) {
        if (t = +t, e = 0 | e, !n) {
          var r = Math.pow(2, 8 * i - 1);
          R(this, t, e, i, r - 1, -r)
        }
        var s = 0,
          o = 1,
          a = 0;
        for (this[e] = 255 & t; ++s < i && (o *= 256);) t < 0 && 0 === a && 0 !== this[e + s - 1] && (a = 1), this[e + s] = (t / o >> 0) - a & 255;
        return e + i
      }, o.prototype.writeIntBE = function(t, e, i, n) {
        if (t = +t, e = 0 | e, !n) {
          var r = Math.pow(2, 8 * i - 1);
          R(this, t, e, i, r - 1, -r)
        }
        var s = i - 1,
          o = 1,
          a = 0;
        for (this[e + s] = 255 & t; --s >= 0 && (o *= 256);) t < 0 && 0 === a && 0 !== this[e + s + 1] && (a = 1), this[e + s] = (t / o >> 0) - a & 255;
        return e + i
      }, o.prototype.writeInt8 = function(t, e, i) {
        return t = +t, e = 0 | e, i || R(this, t, e, 1, 127, -128), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
      }, o.prototype.writeInt16LE = function(t, e, i) {
        return t = +t, e = 0 | e, i || R(this, t, e, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : N(this, t, e, !0), e + 2
      }, o.prototype.writeInt16BE = function(t, e, i) {
        return t = +t, e = 0 | e, i || R(this, t, e, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : N(this, t, e, !1), e + 2
      }, o.prototype.writeInt32LE = function(t, e, i) {
        return t = +t, e = 0 | e, i || R(this, t, e, 4, 2147483647, -2147483648), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : j(this, t, e, !0), e + 4
      }, o.prototype.writeInt32BE = function(t, e, i) {
        return t = +t, e = 0 | e, i || R(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : j(this, t, e, !1), e + 4
      }, o.prototype.writeFloatLE = function(t, e, i) {
        return U(this, t, e, !0, i)
      }, o.prototype.writeFloatBE = function(t, e, i) {
        return U(this, t, e, !1, i)
      }, o.prototype.writeDoubleLE = function(t, e, i) {
        return B(this, t, e, !0, i)
      }, o.prototype.writeDoubleBE = function(t, e, i) {
        return B(this, t, e, !1, i)
      }, o.prototype.copy = function(t, e, i, n) {
        if (i || (i = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < i && (n = i), n === i) return 0;
        if (0 === t.length || 0 === this.length) return 0;
        if (e < 0) throw new RangeError("targetStart out of bounds");
        if (i < 0 || i >= this.length) throw new RangeError("sourceStart out of bounds");
        if (n < 0) throw new RangeError("sourceEnd out of bounds");
        n > this.length && (n = this.length), t.length - e < n - i && (n = t.length - e + i);
        var r, s = n - i;
        if (this === t && i < e && e < n)
          for (r = s - 1; r >= 0; --r) t[r + e] = this[r + i];
        else if (s < 1e3 || !o.TYPED_ARRAY_SUPPORT)
          for (r = 0; r < s; ++r) t[r + e] = this[r + i];
        else Uint8Array.prototype.set.call(t, this.subarray(i, i + s), e);
        return s
      }, o.prototype.fill = function(t, e, i, n) {
        if ("string" == typeof t) {
          if ("string" == typeof e ? (n = e, e = 0, i = this.length) : "string" == typeof i && (n = i, i = this.length), 1 === t.length) {
            var r = t.charCodeAt(0);
            r < 256 && (t = r)
          }
          if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
          if ("string" == typeof n && !o.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
        } else "number" == typeof t && (t = 255 & t);
        if (e < 0 || this.length < e || this.length < i) throw new RangeError("Out of range index");
        if (i <= e) return this;
        e >>>= 0, i = void 0 === i ? this.length : i >>> 0, t || (t = 0);
        var s;
        if ("number" == typeof t)
          for (s = e; s < i; ++s) this[s] = t;
        else {
          var a = o.isBuffer(t) ? t : G(new o(t, n).toString()),
            c = a.length;
          for (s = 0; s < i - e; ++s) this[s + e] = a[s % c]
        }
        return this
      };
      var et = /[^+\/0-9A-Za-z-_]/g
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }, {
    "base64-js": 257,
    ieee754: 259,
    isarray: 260
  }],
  259: [function(t, e, i) {
    "use strict";
    i.read = function(t, e, i, n, r) {
      var s, o, a = 8 * r - n - 1,
        c = (1 << a) - 1,
        l = c >> 1,
        u = -7,
        h = i ? r - 1 : 0,
        d = i ? -1 : 1,
        m = t[e + h];
      for (h += d, s = m & (1 << -u) - 1, m >>= -u, u += a; u > 0; s = 256 * s + t[e + h], h += d, u -= 8);
      for (o = s & (1 << -u) - 1, s >>= -u, u += n; u > 0; o = 256 * o + t[e + h], h += d, u -= 8);
      if (0 === s) s = 1 - l;
      else {
        if (s === c) return o ? NaN : (m ? -1 : 1) * (1 / 0);
        o += Math.pow(2, n), s -= l
      }
      return (m ? -1 : 1) * o * Math.pow(2, s - n)
    }, i.write = function(t, e, i, n, r, s) {
      var o, a, c, l = 8 * s - r - 1,
        u = (1 << l) - 1,
        h = u >> 1,
        d = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        m = n ? 0 : s - 1,
        f = n ? 1 : -1,
        p = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
      for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, o = u) : (o = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -o)) < 1 && (o--, c *= 2), e += o + h >= 1 ? d / c : d * Math.pow(2, 1 - h), e * c >= 2 && (o++, c /= 2), o + h >= u ? (a = 0, o = u) : o + h >= 1 ? (a = (e * c - 1) * Math.pow(2, r), o += h) : (a = e * Math.pow(2, h - 1) * Math.pow(2, r), o = 0)); r >= 8; t[i + m] = 255 & a, m += f, a /= 256, r -= 8);
      for (o = o << r | a, l += r; l > 0; t[i + m] = 255 & o, m += f, o /= 256, l -= 8);
      t[i + m - f] |= 128 * p
    }
  }, {}],
  260: [function(t, e, i) {
    "use strict";
    var n = {}.toString;
    e.exports = Array.isArray || function(t) {
      return "[object Array]" == n.call(t)
    }
  }, {}],
  261: [function(t, e, i) {
    "use strict";

    function n(t) {
      this._keysDown = {}, this._DOMKeyDown = this._DOMKeyDown.bind(this), this._DOMKeyUp = this._DOMKeyUp.bind(this), this._context = t || document, s(this._context, l, this._DOMKeyDown, !0), s(this._context, u, this._DOMKeyUp, !0), r.call(this)
    }
    var r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      s = t("@marcom/ac-dom-events/utils/addEventListener"),
      o = t("@marcom/ac-dom-events/utils/removeEventListener"),
      a = t("@marcom/ac-object/create"),
      c = t("./internal/KeyEvent"),
      l = "keydown",
      u = "keyup",
      h = n.prototype = a(r.prototype);
    h.onDown = function(t, e) {
      return this.on(l + ":" + t, e)
    }, h.onceDown = function(t, e) {
      return this.once(l + ":" + t, e)
    }, h.offDown = function(t, e) {
      return this.off(l + ":" + t, e)
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
      return o(this._context, l, this._DOMKeyDown, !0), o(this._context, u, this._DOMKeyUp, !0), this._keysDown = null, this._context = null, r.prototype.destroy.call(this), this
    }, h._DOMKeyDown = function(t) {
      var e = this._normalizeKeyboardEvent(t),
        i = e.keyCode += "";
      this._trackKeyDown(i), this.trigger(l + ":" + i, e)
    }, h._DOMKeyUp = function(t) {
      var e = this._normalizeKeyboardEvent(t),
        i = e.keyCode += "";
      this._trackKeyUp(i), this.trigger(u + ":" + i, e)
    }, h._normalizeKeyboardEvent = function(t) {
      return new c(t)
    }, h._trackKeyUp = function(t) {
      this._keysDown[t] && (this._keysDown[t] = !1)
    }, h._trackKeyDown = function(t) {
      this._keysDown[t] || (this._keysDown[t] = !0)
    }, e.exports = n
  }, {
    "./internal/KeyEvent": 263,
    "@marcom/ac-dom-events/utils/addEventListener": 80,
    "@marcom/ac-dom-events/utils/removeEventListener": 82,
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-object/create": 305
  }],
  262: [function(t, e, i) {
    "use strict";
    var n = t("./Keyboard");
    e.exports = new n
  }, {
    "./Keyboard": 261
  }],
  263: [function(t, e, i) {
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
  264: [function(t, e, i) {
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
  265: [function(t, e, i) {
    "use strict";
    e.exports = {
      WordJoiner: t("./ac-kr-word-joiner/WordJoiner")
    }
  }, {
    "./ac-kr-word-joiner/WordJoiner": 266
  }],
  266: [function(t, e, i) {
    "use strict";

    function n(t) {
      this.options = o(l, t), this._treeWalkers = [], this.rootElements = []
    }
    var r = t("./isOnlyWhitespace"),
      s = t("./createTreeWalker"),
      o = t("@marcom/ac-object/defaults"),
      a = "⁠",
      c = null,
      l = {
        dataAttribute: "data-word-join",
        joinerCharacter: a,
        contextElement: document
      },
      u = n.prototype;
    n.joinify = function(t, e) {
      var i = "",
        n = 0,
        s = t.length;
      for (e = e || a; n < s;) i += t[n], n < s - 1 && !r(t[n + 1]) && !r(t[n]) && (i += e), n += 1;
      return i
    }, n.shouldJoin = function() {
      if (null !== c) return c;
      c = !1;
      var t = document.createElement("div");
      return "querySelectorAll" in document && "wordBreak" in t.style && (t.style.wordBreak = "keep-all", "keep-all" !== t.style.wordBreak && (c = !0)), t = null, c
    }, u.destroy = function() {
      this._treeWalkers && this._treeWalkers.length > 0 && this._treeWalkers.forEach(function(t) {
        t = null
      }), this._treeWalkers = null, this.rootElements = null, this.options = null
    }, u.getRootElements = function(t, e) {
      t = t || this.options.dataAttribute, e = e || this.options.contextElement;
      var i, n = "body";
      return t && (n = "[" + t + "]"), i = [].slice.call(e.querySelectorAll(n))
    }, u.join = function() {
      0 === this.rootElements.length && (this.rootElements = this.getRootElements(), this._treeWalkers = this._createTreeWalkers()), this._treeWalkers && this._treeWalkers.length > 0 && this._treeWalkers.forEach(function(t) {
        for (var e = t.nextNode(); e;) e.data = n.joinify(e.data, this.options.joinerCharacter), e = t.nextNode();
      }, this)
    }, u._createTreeWalkers = function() {
      var t = [];
      return this.rootElements && this.rootElements.length > 0 && this.rootElements.forEach(function(e) {
        t.push(s(e))
      }, this), t
    }, e.exports = n
  }, {
    "./createTreeWalker": 267,
    "./isOnlyWhitespace": 268,
    "@marcom/ac-object/defaults": 306
  }],
  267: [function(t, e, i) {
    "use strict";

    function n(t) {
      var e = document.createTreeWalker(t, NodeFilter.SHOW_TEXT, {
        acceptNode: function(t) {
          if (!r(t.data) && t.data.length > 1) return NodeFilter.FILTER_ACCEPT
        }
      }, !1);
      return e
    }
    var r = t("./isOnlyWhitespace");
    e.exports = n
  }, {
    "./isOnlyWhitespace": 268
  }],
  268: [function(t, e, i) {
    "use strict";

    function n(t) {
      return /^\s*$/.test(t)
    }
    e.exports = n
  }, {}],
  269: [function(t, e, i) {
    arguments[4][181][0].apply(i, arguments)
  }, {
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-object/defaults": 306,
    dup: 181
  }],
  270: [function(t, e, i) {
    arguments[4][182][0].apply(i, arguments)
  }, {
    "../Asset": 269,
    dup: 182
  }],
  271: [function(t, e, i) {
    arguments[4][183][0].apply(i, arguments)
  }, {
    "../Asset": 269,
    "../AssetGroup": 276,
    "./XHR/ArrayBuffer": 274,
    "./XHR/JSON": 275,
    "@marcom/ac-object/defaults": 306,
    "@marcom/ac-polyfills/Promise": void 0,
    dup: 183
  }],
  272: [function(t, e, i) {
    arguments[4][184][0].apply(i, arguments)
  }, {
    "../Asset": 269,
    "./SplitFile": 271,
    dup: 184
  }],
  273: [function(t, e, i) {
    arguments[4][185][0].apply(i, arguments)
  }, {
    "../Asset": 269,
    "@marcom/ac-ajax": 13,
    "@marcom/ac-object/defaults": 306,
    dup: 185
  }],
  274: [function(t, e, i) {
    arguments[4][186][0].apply(i, arguments)
  }, {
    "../XHR": 273,
    "@marcom/ac-object/extend": 307,
    dup: 186
  }],
  275: [function(t, e, i) {
    arguments[4][187][0].apply(i, arguments)
  }, {
    "../XHR": 273,
    dup: 187
  }],
  276: [function(t, e, i) {
    arguments[4][188][0].apply(i, arguments)
  }, {
    "./queue": 281,
    "./utils/enqueueAsset": 282,
    "./utils/selectQueue": 283,
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-object/defaults": 306,
    "@marcom/ac-polyfills/Promise": void 0,
    dup: 188
  }],
  277: [function(t, e, i) {
    "use strict";
    e.exports.assetLoader = t("./assetLoader"), e.exports.types = t("./assetTypes"), e.exports.AssetGroup = t("./AssetGroup"), e.exports.createAsset = t("./createAsset")
  }, {
    "./AssetGroup": 276,
    "./assetLoader": 278,
    "./assetTypes": 279,
    "./createAsset": 280
  }],
  278: [function(t, e, i) {
    arguments[4][189][0].apply(i, arguments)
  }, {
    "./AssetGroup": 276,
    "./assetTypes": 279,
    "./createAsset": 280,
    "./queue": 281,
    "./utils/selectQueue": 283,
    "@marcom/ac-object/clone": 304,
    dup: 189
  }],
  279: [function(t, e, i) {
    arguments[4][190][0].apply(i, arguments)
  }, {
    "./Asset/Img": 270,
    "./Asset/SplitFile": 271,
    "./Asset/Video": 272,
    "./Asset/XHR": 273,
    "./Asset/XHR/ArrayBuffer": 274,
    "./Asset/XHR/JSON": 275,
    dup: 190
  }],
  280: [function(t, e, i) {
    arguments[4][191][0].apply(i, arguments)
  }, {
    "./Asset": 269,
    "./assetTypes": 279,
    dup: 191
  }],
  281: [function(t, e, i) {
    arguments[4][192][0].apply(i, arguments)
  }, {
    "@marcom/ac-queue": 338,
    dup: 192
  }],
  282: [function(t, e, i) {
    arguments[4][193][0].apply(i, arguments)
  }, {
    "@marcom/ac-polyfills/Promise": void 0,
    dup: 193
  }],
  283: [function(t, e, i) {
    arguments[4][194][0].apply(i, arguments)
  }, {
    "../queue": 281,
    dup: 194
  }],
  284: [function(t, e, i) {
    "use strict";

    function n(t) {
      t = t || {}, s.call(this), this.id = a.getNewID(), this.executor = t.executor || o, this._reset(), this._willRun = !1, this._didDestroy = !1
    }
    var r, s = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      o = t("@marcom/ac-raf-executor/sharedRAFExecutorInstance"),
      a = t("@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance");
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
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance": 342,
    "@marcom/ac-raf-executor/sharedRAFExecutorInstance": 357
  }],
  285: [function(t, e, i) {
    "use strict";
    var n = t("./SingleCallRAFEmitter"),
      r = function(t) {
        this.rafEmitter = new n, this.rafEmitter.on(t, this._onRAFExecuted.bind(this)), this.requestAnimationFrame = this.requestAnimationFrame.bind(this), this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this), this._frameCallbacks = [], this._nextFrameCallbacks = [], this._currentFrameID = -1, this._cancelFrameIdx = -1, this._frameCallbackLength = 0, this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0
      },
      s = r.prototype;
    s.requestAnimationFrame = function(t) {
      return this._currentFrameID = this.rafEmitter.run(), this._nextFrameCallbacks.push(this._currentFrameID, t), this._nextFrameCallbacksLength += 2, this._currentFrameID
    }, s.cancelAnimationFrame = function(t) {
      this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(t), this._cancelFrameIdx !== -1 && (this._nextFrameCallbacks.splice(this._cancelFrameIdx, 2), this._nextFrameCallbacksLength -= 2, 0 === this._nextFrameCallbacksLength && this.rafEmitter.cancel())
    }, s._onRAFExecuted = function(t) {
      for (this._frameCallbacks = this._nextFrameCallbacks, this._frameCallbackLength = this._nextFrameCallbacksLength, this._nextFrameCallbacks = [], this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) this._frameCallbacks[this._frameCallbackIteration + 1](t.time, t)
    }, e.exports = r
  }, {
    "./SingleCallRAFEmitter": 287
  }],
  286: [function(t, e, i) {
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
    "./RAFInterface": 285
  }],
  287: [function(t, e, i) {
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
    "./RAFEmitter": 284
  }],
  288: [function(t, e, i) {
    "use strict";
    var n = t("./RAFInterfaceController");
    e.exports = n.requestAnimationFrame("draw")
  }, {
    "./RAFInterfaceController": 286
  }],
  289: [function(t, e, i) {
    "use strict";
    var n = t("./ac-media-object/factories/createVideo"),
      r = t("./ac-media-object/factories/createFlow");
    e.exports = {
      createFlow: r,
      createVideo: n
    }
  }, {
    "./ac-media-object/factories/createFlow": 290,
    "./ac-media-object/factories/createVideo": 291
  }],
  290: [function(t, e, i) {
    "use strict";
    var n = t("./../views/FlowView"),
      r = t("@marcom/ac-object/clone");
    e.exports = function(t, e, i) {
      function s(t) {
        throw new Error(t)
      }
      var o, a = r(i || {}, !0);
      return a.type = "flow", e ? e.basePath || s("Please provide a valid mediaSrc object with a basePath property.") : s("Please provide both a valid container element and a valid mediaSrc object as arguments."), a.mediaObjectView ? o = a.mediaObjectView : (o = new n(t, e, a), o.options.mediaObjectView = o), o
    }
  }, {
    "./../views/FlowView": 294,
    "@marcom/ac-object/clone": 304
  }],
  291: [function(t, e, i) {
    "use strict";
    var n = t("./../views/VideoView"),
      r = t("./../views/InlinePolyfillVideoView"),
      s = t("@marcom/ac-feature").isHandheld,
      o = t("@marcom/ac-feature").isTablet,
      a = t("@marcom/ac-object/clone");
    e.exports = function(t, e, i) {
      function c(t) {
        throw new Error(t)
      }
      var l, u = a(i || {}, !0);
      return u.type = "video", e ? e.basePath || c("Please provide a valid mediaSrc object with a basePath property.") : c("Please provide both a valid container element and a valid mediaSrc object as arguments."), u.mediaObjectView ? l = u.mediaObjectView : (l = u.iosInline && !window.matchMedia("(-webkit-video-playable-inline)").matches && (s() || o()) ? new r(t, e, u) : new n(t, e, u), l.options.mediaObjectView = l), l
    }
  }, {
    "./../views/InlinePolyfillVideoView": 295,
    "./../views/VideoView": 296,
    "@marcom/ac-feature": 158,
    "@marcom/ac-object/clone": 304
  }],
  292: [function(t, e, i) {
    "use strict";

    function n(t) {
      r.apply(this, arguments)
    }
    var r = t("@marcom/ac-mvc-model").Model,
      s = t("@marcom/ac-object"),
      o = n.prototype = s.create(r.prototype);
    o.defaultAttributes = {
      type: "video",
      paused: !0,
      ended: !1,
      ready: !1,
      loadStart: !1,
      loaded: !1,
      error: !1,
      destroyed: !1,
      currentTime: 0,
      playbackRate: 1,
      duration: 0,
      preload: !1,
      autoplay: !1,
      frameRate: 24,
      enhanced: !1,
      looping: !1
    }, o.getType = function() {
      return this.get("type")
    }, o.getPaused = function() {
      return this.get("paused")
    }, o.getEnded = function() {
      return this.get("ended")
    }, o.getReady = function() {
      return this.get("ready")
    }, o.getDestroyed = function() {
      return this.get("destroyed")
    }, o.getLoadStart = function() {
      return this.get("loadedStart")
    }, o.getLoaded = function() {
      return this.get("loaded")
    }, o.getError = function() {
      return this.get("error")
    }, o.getCurrentTime = function() {
      return this.get("currentTime")
    }, o.getPlaybackRate = function() {
      return this.get("playbackRate")
    }, o.getDuration = function() {
      return this.get("duration")
    }, o.getPreload = function() {
      return this.get("preload")
    }, o.getAutoplay = function() {
      return this.get("autoplay")
    }, o.getFrameRate = function() {
      return this.get("frameRate")
    }, o.getEnhanced = function() {
      return this.get("enhanced")
    }, o.getLooping = function() {
      return this.get("looping")
    }, o.setPaused = function(t) {
      this.set({
        paused: t
      })
    }, o.setEnded = function(t) {
      this.set({
        ended: t
      })
    }, o.setReady = function(t) {
      this.set({
        ready: t
      })
    }, o.setDestroyed = function(t) {
      this.set({
        destroyed: t
      })
    }, o.setDuration = function(t) {
      this.set({
        duration: t
      })
    }, o.setLoadStart = function(t) {
      this.set({
        loadStart: t
      })
    }, o.setLoaded = function(t) {
      this.set({
        loaded: t
      })
    }, o.setError = function(t) {
      this.set({
        error: t
      })
    }, o.setCurrentTime = function(t) {
      this.set({
        currentTime: t
      })
    }, o.setPlaybackRate = function(t) {
      this.set({
        playbackRate: t
      })
    }, o.setPreload = function(t) {
      this.set({
        preload: t
      })
    }, o.setAutoplay = function(t) {
      this.set({
        autoplay: t
      })
    }, o.setFrameRate = function(t) {
      this.set({
        frameRate: t
      })
    }, o.setEnhanced = function(t) {
      this.set({
        enhanced: t
      })
    }, o.setLooping = function(t) {
      this.set({
        looping: t
      })
    }, e.exports = n
  }, {
    "@marcom/ac-mvc-model": 299,
    "@marcom/ac-object": 303
  }],
  293: [function(t, e, i) {
    "use strict";
    var n = t("./../models/MediaModel"),
      r = t("@marcom/ac-mvc-view").View,
      s = t("@marcom/ac-object"),
      o = function(t, e, i) {
        r.call(this, {
          element: t
        }), this.options = s.clone(i || {}, !0), this.mediaSrc = e || "", this.model = this.options.model || new n(this.options), this._onLoadStartChange = this._onLoadStartChange.bind(this), this._onLoadedChange = this._onLoadedChange.bind(this), this._onPausedChange = this._onPausedChange.bind(this), this._onReadyChange = this._onReadyChange.bind(this), this._onErrorChange = this._onErrorChange.bind(this), this._onEnhancedChange = this._onEnhancedChange.bind(this), this._onCurrentTimeChange = this._onCurrentTimeChange.bind(this), this._onPlaybackRateChange = this._onPlaybackRateChange.bind(this), this._onDestroyedChange = this._onDestroyedChange.bind(this), this._onEndedChange = this._onEndedChange.bind(this), this._respondToPlay = this._respondToPlay.bind(this), this._respondToPause = this._respondToPause.bind(this), this._respondToTimeUpdate = this._respondToTimeUpdate.bind(this), this._respondToEnded = this._respondToEnded.bind(this), this._respondToDurationChange = this._respondToDurationChange.bind(this), this._respondToRateChange = this._respondToRateChange.bind(this), this._init()
      },
      a = o.prototype = s.create(r.prototype);
    a._init = function() {
      this._createMediaElement(), this._createMediaEmitter(), this._createMediaLoader(), this._bindEvents(), this._config()
    }, a._createMediaElement = function() {}, a._createMediaEmitter = function() {}, a._createMediaLoader = function() {}, a._config = function() {
      this.options.preload === !0 && (this._setPreload(!0), this.load()), this.options.autoplay === !0 && this._setAutoplay(!0), this.options.looping === !0 && this._setLooping(!0), this.options.frameRate && this._setFrameRate(this.options.frameRate)
    }, a._bindEvents = function() {
      this._bindViewEvents(), this._bindModelEvents()
    }, a.destroy = function() {
      if (!this.getDestroyed()) {
        this._destroy(), this._setDestroyed(!0), this.model.off(), this.off();
        for (var t in this) this.hasOwnProperty(t) && "function" != typeof this[t] && (this[t] = null)
      }
    }, a._bindModelEvents = function() {
      this.model.on("change:loadStart", this._onLoadStartChange), this.model.on("change:loaded", this._onLoadedChange), this.model.on("change:paused", this._onPausedChange), this.model.on("change:ready", this._onReadyChange), this.model.on("change:error", this._onErrorChange), this.model.on("change:enhanced", this._onEnhancedChange), this.model.on("change:currentTime", this._onCurrentTimeChange), this.model.on("change:playbackRate", this._onPlaybackRateChange), this.model.on("change:destroyed", this._onDestroyedChange), this.model.on("change:ended", this._onEndedChange)
    }, a._onLoadStartChange = function() {
      this.trigger("loadstart")
    }, a._onLoadedChange = function() {
      this.trigger("loaded")
    }, a._onPausedChange = function(t) {
      t.value === !0 ? (this.trigger("pause"), this.el.classList.remove("mediaobject-playing")) : (this.trigger("play"), this.el.classList.remove("mediaobject-ended"), this.el.classList.add("mediaobject-playing"))
    }, a._onReadyChange = function() {
      this.trigger("ready")
    }, a._onErrorChange = function() {
      this.trigger("error")
    }, a._onEnhancedChange = function() {
      this.el.classList.add("mediaobject-enhanced"), this.mediaElement.classList.add("mediaobject-element"), this.trigger("enhanced")
    }, a._onCurrentTimeChange = function() {
      this.trigger("timeupdate")
    }, a._onPlaybackRateChange = function() {
      this.trigger("ratechange")
    }, a._onDestroyedChange = function() {
      this.el.classList.remove("mediaobject-playing"), this.el.classList.remove("mediaobject-ended"), this.el.classList.remove("mediaobject-enhanced"), this.el.classList.add("mediaobject-destroyed"), this.trigger("destroyed")
    }, a._onEndedChange = function(t) {
      t.value === !0 && this.trigger("ended")
    }, a._bindViewEvents = function() {
      this.mediaEmitter && (this.mediaEmitter.on("play", this._respondToPlay), this.mediaEmitter.on("pause", this._respondToPause), this.mediaEmitter.on("timeupdate", this._respondToTimeUpdate), this.mediaEmitter.on("ended", this._respondToEnded), this.mediaEmitter.on("durationchange", this._respondToDurationChange), this.mediaEmitter.on("ratechange", this._respondToRateChange))
    }, a._respondToPlay = function() {
      this.model.set({
        ended: !1,
        paused: !1
      })
    }, a._respondToPause = function() {
      this.model.setPaused(!0)
    }, a._respondToTimeUpdate = function() {
      var t = 0;
      if (this.mediaElement.currentTime) t = this.mediaElement.currentTime;
      else {
        if (!this.mediaEmitter.currentTime) return;
        t = this.mediaEmitter.currentTime
      }
      this.getCurrentTime() !== t && this.model.set({
        currentTime: t
      })
    }, a._respondToEnded = function() {
      this.model.set({
        ended: !0,
        paused: !0
      }), this.el.classList.remove("mediaobject-playing"), this.el.classList.add("mediaobject-ended")
    }, a._respondToDurationChange = function() {
      var t = 0;
      if (this.mediaElement.duration) t = this.mediaElement.duration;
      else {
        if (!this.mediaEmitter.duration) return;
        t = this.mediaEmitter.duration
      }
      this.model.set({
        duration: t
      })
    }, a._respondToRateChange = function() {
      var t = 0;
      if (this.mediaElement.playbackRate) t = this.mediaElement.playbackRate;
      else {
        if (!this.mediaEmitter.playbackRate) return;
        t = this.mediaEmitter.playbackRate
      }
      this.model.set({
        playbackRate: t
      })
    }, a.enhance = function() {}, a.play = function() {}, a.pause = function() {}, a.reset = function() {}, a.setCurrentTime = function(t) {}, a.setPlaybackRate = function(t) {}, a.goToFrame = function(t) {
      var e = t / this.model.frameRate;
      return this.setCurrentTime(e)
    }, a.goToPercent = function(t) {
      var e = t * this.getDuration();
      return this.setCurrentTime(e)
    }, a._setReady = function(t) {
      this.model.setReady(t)
    }, a._setLoadStart = function(t) {
      this.model.setLoadStart(t)
    }, a._setLoaded = function(t) {
      this.model.setLoaded(t)
    }, a._setError = function(t) {
      this.model.setError(t)
    }, a._setDuration = function(t) {
      this.model.setDuration(t)
    }, a._setPreload = function(t) {
      this.model.setPreload(t)
    }, a._setAutoplay = function(t) {
      this.model.setAutoplay(t)
    }, a._setFrameRate = function(t) {
      this.model.setFrameRate(t)
    }, a._setEnhanced = function(t) {
      this.model.setEnhanced(t)
    }, a._setDestroyed = function(t) {
      this.model.setDestroyed(t)
    }, a._setLooping = function(t) {}, a._destroy = function() {}, a.getType = function() {
      return this.model.getType()
    }, a.getPaused = function() {
      return this.model.getPaused()
    }, a.getEnded = function() {
      return this.model.getEnded()
    }, a.getReady = function() {
      return this.model.getReady()
    }, a.getLoadStart = function() {
      return this.model.getLoadStart()
    }, a.getLoaded = function() {
      return this.model.getLoaded()
    }, a.getError = function() {
      return this.model.getError()
    }, a.getDuration = function() {
      return this.model.getDuration()
    }, a.getEnhanced = function() {
      return this.model.getEnhanced()
    }, a.getCurrentTime = function() {
      return this.model.getCurrentTime()
    }, a.getCurrentFrame = function() {
      return Math.floor(this.getCurrentTime() * this.options.frameRate)
    }, a.getCurrentPercent = function() {
      return this.model.getCurrentTime() / this.getDuration() || 0
    }, a.getPlaybackRate = function() {
      return this.model.getPlaybackRate()
    }, a.getFrameRate = function() {
      return this.model.getFrameRate()
    }, a.getPreload = function() {
      return this.model.getPreload()
    }, a.getAutoplay = function() {
      return this.model.getAutoplay()
    }, a.getLooping = function() {
      return this.model.getLooping()
    }, a.getDestroyed = function() {
      return !this.model || this.model.getDestroyed()
    }, e.exports = o
  }, {
    "./../models/MediaModel": 292,
    "@marcom/ac-mvc-view": 301,
    "@marcom/ac-object": 303
  }],
  294: [function(t, e, i) {
    "use strict";
    var n = t("./BaseView"),
      r = t("@marcom/ac-dom-nodes"),
      s = t("@marcom/ac-flow").createFlow,
      o = t("@marcom/ac-raf-emitter/draw"),
      a = function(t, e, i) {
        n.call(this, t, e, i), this._onLoad = this._onLoad.bind(this), this._onError = this._onError.bind(this), this._onReady = this._onReady.bind(this)
      },
      c = a.prototype = Object.create(n.prototype);
    c._createMediaElement = function() {
      this.mediaElement = document.createElement("canvas")
    }, c._createMediaEmitter = function() {
      this.flowOptions = {
        element: this.mediaElement,
        preload: !1,
        keyframeCache: this.options.keyframeCache || !1
      }, this.mediaEmitter = s(this.flowOptions, this.mediaSrc)
    }, c._createMediaLoader = function() {
      this.mediaLoader = this.mediaEmitter
    }, c.load = function() {
      this._setLoadStart(!0), this.mediaLoader.once("loaded", this._onLoad), this.mediaLoader.once("error", this._onError), this.mediaEmitter.once("canplaythrough", this._onReady), this.loaded || this.mediaLoader.load()["catch"](this._onError)
    }, c._onLoad = function() {
      this._setLoaded(!0)
    }, c._onError = function() {
      this.model && this._setError(!0)
    }, c._onReady = function() {
      this._setReady(!0), this._setDuration(this.mediaEmitter.duration), this.setPlaybackRate(this.getPlaybackRate()), this._totalFrames = this._getTotalFrames(), this.getAutoplay() && (this.getEnhanced === !1 && this.enhance(), this.play())
    }, c._getTotalFrames = function() {
      return this.getDuration() * this.getFrameRate()
    }, c.enhance = function() {
      this._setEnhanced(!0), o(function() {
        this.mediaElement && this._inject()
      }.bind(this))
    }, c._inject = function() {
      r.insertFirstChild(this.mediaElement, this.el)
    }, c._destroy = function() {
      this._remove(), this.mediaEmitter && this.mediaEmitter.destroy()
    }, c._remove = function() {
      r.remove(this.mediaElement)
    }, c.play = function() {
      this.model.getPaused() !== !1 && (this.mediaEmitter.currentTime >= this.getDuration() && this.setCurrentTime(0), this.getReady() && null !== this.mediaEmitter && this.mediaEmitter.play())
    }, c.pause = function() {
      this.model.getPaused() !== !0 && this.mediaEmitter.pause()
    }, c.reset = function() {
      0 !== this.model.getCurrentTime() && (this.setCurrentTime(0), this.pause())
    }, c.setCurrentTime = function(t) {
      t < 0 && (t = 0), t > this.getDuration() && (t = this.getDuration()), this.mediaEmitter.currentTime = t
    }, c.setPlaybackRate = function(t) {
      this.mediaEmitter.playbackRate = t
    }, c._setLooping = function(t) {
      this.mediaEmitter.loop = t, this.model.setLooping(t)
    }, e.exports = a
  }, {
    "./BaseView": 293,
    "@marcom/ac-dom-nodes": 89,
    "@marcom/ac-flow": 198,
    "@marcom/ac-raf-emitter/draw": 288
  }],
  295: [function(t, e, i) {
    "use strict";
    var n = t("./VideoView"),
      r = n.prototype,
      s = t("@marcom/ac-raf-emitter/RAFEmitter"),
      o = function(t, e, i) {
        n.call(this, t, e, i), this._polyfillRAFEmitter = i.polyfillRAFEmitter || new s, this._boundHandlePolyfillRAFEmitterDraw = this._handlePolyfillRAFEmitterDraw.bind(this), this._polyfillRAFEmitter.on("draw", this._boundHandlePolyfillRAFEmitterDraw)
      },
      a = o.prototype = Object.create(n.prototype);
    a._initInlineVideo = function() {
      r._initInlineVideo.apply(this, arguments), this._shouldLoop = !1
    }, a._destroy = function() {
      r._destroy.apply(this, arguments), this._polyfillRAFEmitter && (this._polyfillRAFEmitter.destroy(), this._polyfillRAFEmitter = null)
    }, a.play = function() {
      this.model.getPaused() !== !1 && (this.model.setPaused(!1), this._polyfillRAFEmitter.run())
    }, a.pause = function() {
      this.model.getPaused() !== !0 && (this.model.setPaused(!0), this._polyfillRAFEmitter.cancel())
    }, a.setCurrentTime = function(t) {
      r.setCurrentTime.apply(this, arguments), this._polyfillRAFEmitter.run()
    }, a._handlePolyfillRAFEmitterDraw = function(t) {
      var e = this.model.getCurrentTime(),
        i = this.model.getPlaybackRate(),
        n = this.mediaElement.duration,
        r = t.delta / 1e3 * i;
      if (!this.model.getPaused()) {
        e += r;
        var s = e <= 0,
          o = e >= n,
          a = i >= 0,
          c = i < 0;
        if (s && (e = 0), o && (e = n), this._shouldLoop) return this._shouldLoop = !1, void(a ? this.setCurrentTime(r) : this.setCurrentTime(n - r));
        this.setCurrentTime(e), (s && c || o && a) && (this.model.getLooping() ? this._shouldLoop = !0 : (this.pause(), this.model.setEnded(!0)))
      }
    }, e.exports = o
  }, {
    "./VideoView": 296,
    "@marcom/ac-raf-emitter/RAFEmitter": 284
  }],
  296: [function(t, e, i) {
    "use strict";
    var n = t("./BaseView"),
      r = n.prototype,
      s = t("@marcom/ac-raf-emitter/draw"),
      o = t("@marcom/ac-dom-nodes"),
      a = t("@marcom/ac-dom-emitter").DOMEmitter,
      c = t("@marcom/ac-dom-styles"),
      l = t("@marcom/ac-asset-loader").assetLoader,
      u = t("@marcom/ac-useragent"),
      h = t("@marcom/ac-feature").isHandheld,
      d = t("@marcom/ac-feature").isTablet,
      m = function(t, e, i) {
        this.srcForVideoEl = null, this._cannotPlayInlineVideo = null, this._onLoaded = this._onLoaded.bind(this), this._onReady = this._onReady.bind(this), n.call(this, t, e, i), i.iosInline && this._initInlineVideo()
      },
      f = m.prototype = Object.create(n.prototype);
    f.inlineClassName = "mediaobject-ios-inline-video", f.inlineAttribute = "playsinline", f._cannotPlayInlineVideo = null, f._initInlineVideo = function() {
      this.mediaElement.hasAttribute("controls") && this.mediaElement.removeAttribute("controls"), this.mediaElement.setAttribute(this.inlineAttribute, ""), this.mediaElement.classList.add(this.inlineClassName)
    }, f._createMediaElement = function() {
      this.mediaElement = document.createElement("video")
    }, f._createMediaEmitter = function() {
      this.mediaEmitter = new a(this.mediaElement)
    }, f._createMediaLoader = function() {
      var t;
      if (this.mediaSrc.basePath = this._forceTrailingSlash(this.mediaSrc.basePath), this.mediaSrc.splitFileLoading) {
        t = this.mediaSrc.basePath;
        var e = {
          src: t,
          type: "splitfile"
        };
        this.mediaLoader = l.createAssetGroup(e)
      } else this.mediaSrc.fileFormat = this._checkFileFormat(this.mediaSrc.fileFormat), t = this.mediaSrc.basePath + this.mediaSrc.filename + this.mediaSrc.fileFormat, this.srcForVideoEl = t
    }, f._forceTrailingSlash = function(t) {
      return t && t.lastIndexOf("/") !== t.length - 1 && (t += "/"), t
    }, f._checkFileFormat = function(t) {
      return t && 0 !== t.lastIndexOf(".") && (t = "." + t), t
    }, f.load = function() {
      if (this._setLoadStart(!0), this.mediaSrc.splitFileLoading) {
        var t = function(t) {
          var e = window.URL.createObjectURL(t.latest.data);
          this.mediaEmitter && (this.mediaEmitter.once("loadeddata", this._onLoaded), this.mediaEmitter.once("canplaythrough", this._onReady)), this.mediaElement.src = e, this.mediaElement.load(), this.mediaLoader.destroy()
        }.bind(this);
        this.mediaLoader.load().then(t)["catch"](this._setError.bind(this, !0))
      } else this.cannotPlayInlineVideo() || (this.mediaEmitter.once("loadeddata", this._onLoaded), this.mediaEmitter.once("canplaythrough", this._onReady)), this.mediaElement.src = this.srcForVideoEl, this.cannotPlayInlineVideo() ? this._onLoaded() : this.mediaElement.load()
    }, f._onLoaded = function() {
      this._setLoaded(!0)
    }, f.cannotPlayInlineVideo = function() {
      if (null !== this._cannotPlayInlineVideo) return this._cannotPlayInlineVideo;
      var t = "iOS" === u.os && h(),
        e = "iOS" === u.os && d() && u.version < 8;
      return this._cannotPlayInlineVideo = t || e, this._cannotPlayInlineVideo
    }, f._onReady = function() {
      this._setReady(!0), this.getAutoplay() && (this.getEnhanced() || this.enhance(), this.play())
    }, f.enhance = function() {
      this._setEnhanced(!0), s(function() {
        "VIDEO" === this.mediaElement.tagName && (o.insertLastChild(this.mediaElement, this.el), c.setStyle(this.mediaElement, {
          visibility: "hidden"
        }), s(function() {
          this.mediaElement && (this.setPlaybackRate(this.getPlaybackRate()), c.setStyle(this.mediaElement, {
            visibility: "visible"
          }))
        }.bind(this)))
      }.bind(this))
    }, f._destroy = function() {
      this._remove(), this.mediaEmitter && this.mediaEmitter.off(), this.mediaLoader && this.mediaLoader.destroy()
    }, f._remove = function() {
      o.remove(this.mediaElement)
    }, f._onEndedChange = function(t) {
      r._onEndedChange.call(this, t), "iOS" === u.os && h() && t.value === !0 && this.mediaElement.webkitExitFullScreen()
    }, f.play = function() {
      if (this.model.getPaused() !== !1) {
        var t = this.mediaElement.play();
        t && "undefined" != typeof Promise && t instanceof Promise && t.then(function() {})["catch"](function() {})
      }
    }, f.pause = function() {
      this.model.getPaused() !== !0 && this.mediaElement.pause()
    }, f.reset = function() {
      0 !== this.model.getCurrentTime() && (this.setCurrentTime(0), this.pause())
    }, f.setCurrentTime = function(t) {
      this.mediaElement.duration && (this.model.setCurrentTime(t), this.mediaElement.currentTime = t)
    }, f.setPlaybackRate = function(t) {
      this.mediaElement.playbackRate = t
    }, f._setLooping = function(t) {
      this.mediaElement.loop = t, this.model.setLooping(t)
    }, e.exports = m
  }, {
    "./BaseView": 293,
    "@marcom/ac-asset-loader": 277,
    "@marcom/ac-dom-emitter": 68,
    "@marcom/ac-dom-nodes": 89,
    "@marcom/ac-dom-styles": 110,
    "@marcom/ac-feature": 158,
    "@marcom/ac-raf-emitter/draw": 288,
    "@marcom/ac-useragent": 413
  }],
  297: [function(t, e, i) {
    "use strict";
    e.exports = {
      CID: t("./ac-mvc-cid/CID")
    }
  }, {
    "./ac-mvc-cid/CID": 298
  }],
  298: [function(t, e, i) {
    "use strict";

    function n() {
      this._idCount = 0
    }
    var r = t("@marcom/ac-shared-instance").SharedInstance,
      s = "ac-mvc-cid:CID",
      o = "1.0.0",
      a = n.prototype;
    a._cidPrefix = "cid", a.getNewCID = function() {
      var t = this._cidPrefix + "-" + this._idCount;
      return this._idCount++, t
    }, e.exports = r.share(s, o, n)
  }, {
    "@marcom/ac-shared-instance": 358
  }],
  299: [function(t, e, i) {
    "use strict";
    e.exports = {
      Model: t("./ac-mvc-model/Model")
    }
  }, {
    "./ac-mvc-model/Model": 300
  }],
  300: [function(t, e, i) {
    "use strict";

    function n(t) {
      s.call(this), this.attributes = o(this.defaultAttributes, t || {}), this.cid = c.getNewCID(), this.attributes[this.idAttribute] && (this.id = this.attributes[this.idAttribute])
    }
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      s = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      o = t("@marcom/ac-object/defaults"),
      a = t("@marcom/ac-object/create"),
      c = t("@marcom/ac-mvc-cid").CID,
      l = s.prototype,
      u = n.prototype = a(l);
    u.defaultAttributes = {}, u.idAttribute = "id", u.get = function(t) {
      if (this.attributes) return this.attributes[t]
    }, u.set = function(t, e) {
      if (this.attributes) {
        var i, n, s, o = {},
          a = !1;
        for (i in t)
          if (t.hasOwnProperty(i)) {
            if (s = this.get(i), s === t[i] || "object" === ("undefined" == typeof s ? "undefined" : r(s)) && "object" === r(t[i]) && JSON.stringify(s) === JSON.stringify(t[i])) continue;
            a = !0, this.attributes[i] = t[i], n = {
              value: t[i],
              previous: s
            }, o[i] = n, this._triggerChange(i, n, e)
          } a && this._trigger("change", o, e)
      }
    }, u.hasAttribute = function(t) {
      return !!this.attributes && void 0 !== this.attributes[t]
    }, u.eachAttribute = function(t, e) {
      if (this.attributes) {
        var i;
        for (i in this.attributes) this.attributes.hasOwnProperty(i) && t.call(e, {
          attribute: i,
          value: this.attributes[i]
        })
      }
    }, u.destroy = function() {
      this.trigger("destroy"), l.destroy.call(this);
      var t;
      for (t in this) this.hasOwnProperty(t) && (this[t] = null)
    }, u._trigger = function(t, e, i) {
      i = i || {}, i.silent !== !0 && this.trigger(t, e)
    }, u._triggerChange = function(t, e, i) {
      return this._trigger("change:" + t, e, i)
    }, e.exports = n
  }, {
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-mvc-cid": 297,
    "@marcom/ac-object/create": 305,
    "@marcom/ac-object/defaults": 306
  }],
  301: [function(t, e, i) {
    "use strict";
    e.exports = {
      View: t("./ac-mvc-view/View")
    }
  }, {
    "./ac-mvc-view/View": 302
  }],
  302: [function(t, e, i) {
    "use strict";

    function n(t) {
      var e, i, n;
      this.options = a.defaults(this.defaultOptions, t || {}), this.cid = o.getNewCID(), this.model = this.options.model, this.options.template && (this.template = this.options.template), e = this.options.tagName || this.tagName, i = this.options.element, n = this.options.className || this.className, i || (i = document.createElement(e)), s.call(this, i), n && this.addClassName(n), this.options.events && this.delegateEvents(this.options.events)
    }
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      s = t("@marcom/ac-dom-emitter").DOMEmitter,
      o = t("@marcom/ac-mvc-cid").CID,
      a = {
        create: t("@marcom/ac-object/create"),
        defaults: t("@marcom/ac-object/defaults")
      },
      c = {
        insertLastChild: t("@marcom/ac-dom-nodes/insertLastChild"),
        remove: t("@marcom/ac-dom-nodes/remove")
      },
      l = t("@marcom/ac-classlist/add"),
      u = t("@marcom/ac-classlist/remove"),
      h = n.prototype = a.create(s.prototype);
    h.tagName = "div", h.defaultOptions = {}, h.getTagName = function() {
      return this.el.tagName.toLowerCase()
    }, h.appendTo = function(t) {
      return c.insertLastChild(this.el, t), this
    }, h.render = function() {}, h.addClassName = function(t) {
      return this._manipulateClassName(t, l)
    }, h.removeClassName = function(t) {
      return this._manipulateClassName(t, u)
    }, h.destroy = function() {
      this.emitterTrigger("destroy"), this.off(), c.remove(this.el);
      var t;
      for (t in this) this.hasOwnProperty(t) && (this[t] = null)
    }, h.delegateEvents = function(t, e) {
      e = e || this;
      var i, n;
      for (i in t) t.hasOwnProperty(i) && (n = t[i], "string" == typeof n && (t[i] = this[t[i]]));
      return this.on(t, e), this
    }, h._manipulateClassName = function(t, e) {
      var i;
      if ("string" == typeof t) i = t.split(" ");
      else {
        if ("object" !== ("undefined" == typeof t ? "undefined" : r(t)) || !Array.isArray(t)) return this;
        i = t.slice()
      }
      return i.unshift(this.el), e.apply(this.el, i), this
    }, e.exports = n
  }, {
    "@marcom/ac-classlist/add": 27,
    "@marcom/ac-classlist/remove": 35,
    "@marcom/ac-dom-emitter": 68,
    "@marcom/ac-dom-nodes/insertLastChild": 97,
    "@marcom/ac-dom-nodes/remove": 108,
    "@marcom/ac-mvc-cid": 297,
    "@marcom/ac-object/create": 305,
    "@marcom/ac-object/defaults": 306
  }],
  303: [function(t, e, i) {
    "use strict";
    e.exports = {
      clone: t("./clone"),
      create: t("./create"),
      defaults: t("./defaults"),
      extend: t("./extend"),
      getPrototypeOf: t("./getPrototypeOf"),
      isDate: t("./isDate"),
      isEmpty: t("./isEmpty"),
      isRegExp: t("./isRegExp"),
      toQueryParameters: t("./toQueryParameters")
    }
  }, {
    "./clone": 304,
    "./create": 305,
    "./defaults": 306,
    "./extend": 307,
    "./getPrototypeOf": 308,
    "./isDate": 309,
    "./isEmpty": 310,
    "./isRegExp": 311,
    "./toQueryParameters": 312
  }],
  304: [function(t, e, i) {
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
    "./extend": 307,
    "@marcom/ac-polyfills/Array/isArray": void 0
  }],
  305: [function(t, e, i) {
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
  306: [function(t, e, i) {
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
    "./extend": 307
  }],
  307: [function(t, e, i) {
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
  308: [function(t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      r = Object.prototype.hasOwnProperty;
    e.exports = function(t) {
      if (Object.getPrototypeOf) return Object.getPrototypeOf(t);
      if ("object" !== ("undefined" == typeof t ? "undefined" : n(t))) throw new Error("Requested prototype of a value that is not an object.");
      if ("object" === n(this.__proto__)) return t.__proto__;
      var e, i = t.constructor;
      if (r.call(t, "constructor")) {
        if (e = i, !delete t.constructor) return null;
        i = t.constructor, t.constructor = e
      }
      return i ? i.prototype : null
    }
  }, {}],
  309: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return "[object Date]" === Object.prototype.toString.call(t)
    }
  }, {}],
  310: [function(t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      r = Object.prototype.hasOwnProperty;
    e.exports = function(t) {
      var e;
      if ("object" !== ("undefined" == typeof t ? "undefined" : n(t))) throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object");
      for (e in t)
        if (r.call(t, e)) return !1;
      return !0
    }
  }, {}],
  311: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return !!window.RegExp && t instanceof RegExp
    }
  }, {}],
  312: [function(t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      r = t("@marcom/ac-url/joinSearchParams");
    e.exports = function(t) {
      if ("object" !== ("undefined" == typeof t ? "undefined" : n(t))) throw new TypeError("toQueryParameters error: argument is not an object");
      return r(t, !1)
    }
  }, {
    "@marcom/ac-url/joinSearchParams": 412
  }],
  313: [function(t, e, i) {
    "use strict";
    e.exports = {
      PageVisibilityManager: t("./ac-page-visibility/PageVisibilityManager")
    }
  }, {
    "./ac-page-visibility/PageVisibilityManager": 314
  }],
  314: [function(t, e, i) {
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
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-object/create": 305
  }],
  315: [function(t, e, i) {
    "use strict";
    e.exports = {
      PointerTracker: t("./ac-pointer-tracker/PointerTracker")
    }
  }, {
    "./ac-pointer-tracker/PointerTracker": 316
  }],
  316: [function(t, e, i) {
    "use strict";

    function n(t, e, i) {
      this._el = t, i = i || {}, this._lockVertical = i.lockVertical !== !1, this._swipeThreshold = i.swipeThreshold || n.DEFAULT_SWIPE_THRESHOLD, this._pointerEvents = e || {}, this._trackHover = i.trackHover, this._trackHover ? (this._pointerEvents.down = this._pointerEvents.down || n.MOUSE_EVENTS.over, this._pointerEvents.up = this._pointerEvents.up || n.MOUSE_EVENTS.out) : (this._pointerEvents.down = this._pointerEvents.down || (l ? n.TOUCH_EVENTS.down : n.MOUSE_EVENTS.down), this._pointerEvents.up = this._pointerEvents.up || (l ? n.TOUCH_EVENTS.up : n.MOUSE_EVENTS.up)), this._pointerEvents.out = this._pointerEvents.out || (l ? n.TOUCH_EVENTS.out : n.MOUSE_EVENTS.out), this._pointerEvents.move = this._pointerEvents.move || (l ? n.TOUCH_EVENTS.move : n.MOUSE_EVENTS.move), this._onMouseDown = this._onMouseDown.bind(this), this._onMouseUp = this._onMouseUp.bind(this), this._onMouseOut = this._onMouseOut.bind(this), this._onMouseMove = this._onMouseMove.bind(this), u.call(this), s.addEventListener(this._el, this._pointerEvents.down, this._onMouseDown), this._setCursorStyle("grab")
    }
    var r = t("@marcom/ac-browser"),
      s = t("@marcom/ac-dom-events"),
      o = t("@marcom/ac-dom-styles"),
      a = t("@marcom/ac-object/create"),
      c = "Android" === r.os || "IE" === r.name && r.version <= 8,
      l = t("@marcom/ac-feature/touchAvailable")(),
      u = t("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    n.START = "start", n.END = "end", n.UPDATE = "update", n.SWIPE_RIGHT = "swiperight", n.SWIPE_LEFT = "swipeleft", n.DEFAULT_SWIPE_THRESHOLD = c ? 2 : 8, n.TOUCH_EVENTS = {
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
    var h = u.prototype,
      d = n.prototype = a(h);
    d.destroy = function() {
      return this._isDragging && this._onMouseUp(), s.removeEventListener(this._el, this._pointerEvents.down, this._onMouseDown), this._setCursorStyle(null), this._el = null, this._pointerEvents = null, this._lockVertical = null, this._swipeThreshold = null, this._checkForTouchScrollY = null, this._isDragging = null, this._currentX = null, this._currentY = null, this._velocityX = null, this._velocityY = null, this._lastX = null, this._lastY = null, h.destroy.call(this)
    }, d._onMouseDown = function(t) {
      if (!this._isDragging) {
        this._isDragging = !0, this._setCursorStyle("grabbing"), s.removeEventListener(this._el, this._pointerEvents.down, this._onMouseDown), s.addEventListener(document.body, this._pointerEvents.up, this._onMouseUp), s.addEventListener(document, this._pointerEvents.out, this._onMouseOut), s.addEventListener(document.body, this._pointerEvents.move, this._onMouseMove), this._checkForTouchScrollY = this._lockVertical && !(!t.touches || !t.touches[0]), this._checkForTouchScrollY && (this._lastY = this._getTouchY(t));
        var e = this._storeAndGetValues(t);
        this._velocityX = e.diffX = 0, this._velocityY = e.diffY = 0, this.trigger(n.START, e)
      }
    }, d._onMouseUp = function(t) {
      if (this._isDragging) {
        this._isDragging = !1, this._setCursorStyle("grab"), s.addEventListener(this._el, this._pointerEvents.down, this._onMouseDown), s.removeEventListener(document.body, this._pointerEvents.up, this._onMouseUp), s.removeEventListener(document, this._pointerEvents.out, this._onMouseOut), s.removeEventListener(document.body, this._pointerEvents.move, this._onMouseMove);
        var e;
        this._checkForTouchScrollY || this._trackHover ? e = null : this._velocityX > this._swipeThreshold ? e = n.SWIPE_LEFT : this._velocityX * -1 > this._swipeThreshold && (e = n.SWIPE_RIGHT);
        var i = this._storeAndGetValues(t);
        i.swipe = e, this.trigger(n.END, i), e && !this._trackHover && this.trigger(e, i)
      }
    }, d._onMouseOut = function(t) {
      t = t ? t : window.event;
      var e = t.relatedTarget || t.toElement;
      e && "HTML" !== e.nodeName || this._onMouseUp(t)
    }, d._onMouseMove = function(t) {
      return this._checkForTouchScrollY && this._isVerticalTouchMove(t) ? void this._onMouseUp(t) : (s.preventDefault(t), void this.trigger(n.UPDATE, this._storeAndGetValues(t)))
    }, d._storeAndGetValues = function(t) {
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
    }, d._getPointerX = function(t) {
      return t.pageX ? t.pageX : t.touches && t.touches[0] ? t.touches[0].pageX : t.clientX ? t.clientX : 0
    }, d._getPointerY = function(t) {
      return t.pageY ? t.pageY : t.touches && t.touches[0] ? t.touches[0].pageY : t.clientY ? t.clientY : 0
    }, d._getTouchX = function(t) {
      return t.touches && t.touches[0] ? t.touches[0].pageX : 0
    }, d._getTouchY = function(t) {
      return t.touches && t.touches[0] ? t.touches[0].pageY : 0
    }, d._isVerticalTouchMove = function(t) {
      var e = this._getTouchX(t),
        i = this._getTouchY(t),
        n = Math.abs(e - this._lastX),
        r = Math.abs(i - this._lastY);
      return this._checkForTouchScrollY = n < r, this._checkForTouchScrollY
    }, d._setCursorStyle = function(t) {
      o.setStyle(this._el, {
        cursor: t
      })
    }, e.exports = n
  }, {
    "@marcom/ac-browser": 23,
    "@marcom/ac-dom-events": 73,
    "@marcom/ac-dom-styles": 110,
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-feature/touchAvailable": 179,
    "@marcom/ac-object/create": 305
  }],
  317: [function(t, e, i) {
    "use strict";
    var n = t("./utils/eventTypeAvailable"),
      r = t("./shared/camelCasedEventTypes"),
      s = t("./shared/windowFallbackEventTypes"),
      o = t("./shared/prefixHelper"),
      a = {};
    e.exports = function c(t, e) {
      var i, l, u;
      if (e = e || "div", t = t.toLowerCase(), e in a || (a[e] = {}), l = a[e], t in l) return l[t];
      if (n(t, e)) return l[t] = t;
      if (t in r)
        for (u = 0; u < r[t].length; u++)
          if (i = r[t][u], n(i.toLowerCase(), e)) return l[t] = i;
      for (u = 0; u < o.evt.length; u++)
        if (i = o.evt[u] + t, n(i, e)) return o.reduce(u), l[t] = i;
      return "window" !== e && s.indexOf(t) ? l[t] = c(t, "window") : l[t] = !1
    }
  }, {
    "./shared/camelCasedEventTypes": 321,
    "./shared/prefixHelper": 323,
    "./shared/windowFallbackEventTypes": 326,
    "./utils/eventTypeAvailable": 328
  }],
  318: [function(t, e, i) {
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
    "./getStyleProperty": 319,
    "./getStyleValue": 320,
    "./shared/stylePropertyCache": 324
  }],
  319: [function(t, e, i) {
    "use strict";
    var n = t("./shared/stylePropertyCache"),
      r = t("./shared/getStyleTestElement"),
      s = t("./utils/toCSS"),
      o = t("./utils/toDOM"),
      a = t("./shared/prefixHelper"),
      c = function(t, e) {
        var i = s(t),
          r = e !== !1 && s(e);
        return n[t] = n[e] = n[i] = n[r] = {
          dom: e,
          css: r
        }, e
      };
    e.exports = function(t) {
      var e, i, s, l;
      if (t += "", t in n) return n[t].dom;
      for (s = r(), t = o(t), i = t.charAt(0).toUpperCase() + t.substring(1), e = "filter" === t ? ["WebkitFilter", "filter"] : (t + " " + a.dom.join(i + " ") + i).split(" "), l = 0; l < e.length; l++)
        if ("undefined" != typeof s.style[e[l]]) return 0 !== l && a.reduce(l - 1), c(t, e[l]);
      return c(t, !1)
    }
  }, {
    "./shared/getStyleTestElement": 322,
    "./shared/prefixHelper": 323,
    "./shared/stylePropertyCache": 324,
    "./utils/toCSS": 329,
    "./utils/toDOM": 330
  }],
  320: [function(t, e, i) {
    "use strict";
    var n = t("./getStyleProperty"),
      r = t("./shared/styleValueAvailable"),
      s = t("./shared/prefixHelper"),
      o = t("./shared/stylePropertyCache"),
      a = {},
      c = /(\([^\)]+\))/gi,
      l = /([^ ,;\(]+(\([^\)]+\))?)/gi;
    e.exports = function(t, e) {
      var i;
      return e += "", !!(t = n(t)) && (r(t, e) ? e : (i = o[t].css, e = e.replace(l, function(e) {
        var n, o, l, u;
        if ("#" === e[0] || !isNaN(e[0])) return e;
        if (o = e.replace(c, ""), l = i + ":" + o, l in a) return a[l] === !1 ? "" : e.replace(o, a[l]);
        for (n = s.css.map(function(t) {
            return t + e
          }), n = [e].concat(n), u = 0; u < n.length; u++)
          if (r(t, n[u])) return 0 !== u && s.reduce(u - 1), a[l] = n[u].replace(c, ""), n[u];
        return a[l] = !1, ""
      }), e = e.trim(), "" !== e && e))
    }
  }, {
    "./getStyleProperty": 319,
    "./shared/prefixHelper": 323,
    "./shared/stylePropertyCache": 324,
    "./shared/styleValueAvailable": 325
  }],
  321: [function(t, e, i) {
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
  322: [function(t, e, i) {
    "use strict";
    var n;
    e.exports = function() {
      return n ? (n.style.cssText = "", n.removeAttribute("style")) : n = document.createElement("_"), n
    }, e.exports.resetElement = function() {
      n = null
    }
  }, {}],
  323: [function(t, e, i) {
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
  324: [function(t, e, i) {
    "use strict";
    e.exports = {}
  }, {}],
  325: [function(t, e, i) {
    "use strict";
    var n, r, s = t("./stylePropertyCache"),
      o = t("./getStyleTestElement"),
      a = !1,
      c = function() {
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
      if (c(), n) return t = s[t].css, CSS.supports(t, e);
      if (a = o(), i = a.style[t], r) try {
        a.style[t] = e
      } catch (l) {
        return !1
      } else a.style[t] = e;
      return a.style[t] && a.style[t] !== i
    }, e.exports.resetFlags = function() {
      a = !1
    }
  }, {
    "./getStyleTestElement": 322,
    "./stylePropertyCache": 324
  }],
  326: [function(t, e, i) {
    "use strict";
    e.exports = ["transitionend", "animationstart", "animationend", "animationiteration"]
  }, {}],
  327: [function(t, e, i) {
    "use strict";
    var n = /(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
    e.exports = function(t) {
      return t = String.prototype.replace.call(t, n, ""), t.charAt(0).toLowerCase() + t.substring(1)
    }
  }, {}],
  328: [function(t, e, i) {
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
  329: [function(t, e, i) {
    "use strict";
    var n = /^(webkit|moz|ms)/gi;
    e.exports = function(t) {
      return "cssfloat" === t.toLowerCase() ? "float" : (n.test(t) && (t = "-" + t), t.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase())
    }
  }, {}],
  330: [function(t, e, i) {
    "use strict";
    var n = /-([a-z])/g;
    e.exports = function(t) {
      return "float" === t.toLowerCase() ? "cssFloat" : (t = t.replace(n, function(t, e) {
        return e.toUpperCase()
      }), "Ms" === t.substr(0, 2) && (t = "ms" + t.substring(2)), t)
    }
  }, {}],
  331: [function(t, e, i) {
    arguments[4][284][0].apply(i, arguments)
  }, {
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance": 342,
    "@marcom/ac-raf-executor/sharedRAFExecutorInstance": 357,
    dup: 284
  }],
  332: [function(t, e, i) {
    arguments[4][285][0].apply(i, arguments)
  }, {
    "./SingleCallRAFEmitter": 334,
    dup: 285
  }],
  333: [function(t, e, i) {
    arguments[4][286][0].apply(i, arguments)
  }, {
    "./RAFInterface": 332,
    dup: 286
  }],
  334: [function(t, e, i) {
    arguments[4][287][0].apply(i, arguments)
  }, {
    "./RAFEmitter": 331,
    dup: 287
  }],
  335: [function(t, e, i) {
    arguments[4][288][0].apply(i, arguments)
  }, {
    "./RAFInterfaceController": 333,
    dup: 288
  }],
  336: [function(t, e, i) {
    "use strict";
    var n = t("./RAFInterfaceController");
    e.exports = n.requestAnimationFrame("update")
  }, {
    "./RAFInterfaceController": 333
  }],
  337: [function(t, e, i) {
    "use strict";

    function n(t) {
      o.call(this), this.options = r(l, t), this.loadingOptions = null, this.els = [], this.loadingQueue = null, this._queueItems = [], this._queueItemsObj = {}, this._loadOrder = [], this._timeout = null, this._didCallLoad = !1
    }
    var r = t("@marcom/ac-object/defaults"),
      s = t("@marcom/ac-queue").LiveQueue,
      o = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      a = t("@marcom/ac-raf-emitter/update"),
      c = t("@marcom/ac-raf-emitter/draw"),
      l = {
        container: document.body,
        includeContainer: !1
      },
      u = {
        loadingPoolSize: 8,
        timeout: null,
        imageDataAttribute: "data-progressive-image",
        imageAnimate: !0,
        imageAnimateClass: "progressive-image-animated"
      };
    n.Events = {
      ImageLoad: "image-load",
      Complete: "complete"
    };
    var h = n.prototype = Object.create(o.prototype);
    h.load = function(t) {
      this._didCallLoad || (this._didCallLoad = !0, this.loadingOptions = r(u, t), this.loadingQueue = new s(this.loadingOptions.loadingPoolSize), this.els = Array.from(this._getProgressiveImageElements()), this.options.includeContainer && this.options.container.hasAttribute(this._getProgressiveImageDataAttribute()) && this.els.unshift(this.options.container), c(function() {
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
    }, h.setVisible = function(t) {
      return new Promise(function(e, i) {
        c(function() {
          t.removeAttribute(this._getProgressiveImageDataAttribute()), e(), t = null
        }.bind(this))
      }.bind(this))
    }, h.cancel = function() {
      if (this.els) {
        var t, e = this.els.length;
        for (t = 0; t < e; t++) this.setVisible(this.els[t]), this.loadingOptions.imageAnimate && c(function() {
          this.els[t].setAttribute("data-progressive-image-loaded", "")
        }.bind(this, t))
      }
      this._handleLoadingComplete()
    }, h.destroy = function() {
      this.cancel(), this.off(), o.prototype.destroy.call(this)
    }, h._loadNextItem = function(t) {
      return new Promise(function(t, e, i) {
        var n = this._queueItemsObj[t];
        this._loadAndSetVisible(n.el).then(function() {
          var t = this._queueItems.indexOf(n);
          this._queueItems.splice(t, 1), this._queueItemsObj[n.id] = null, e(), this._handleImageLoad(n.el), n = e = null, 1 === this.loadingQueue.count() && this._handleLoadingComplete()
        }.bind(this))
      }.bind(this, t))
    }, h._loadAndSetVisible = function(t) {
      return new Promise(function(e, i) {
        this.setVisible(t).then(function() {
          this._getBackgroundImageSrc(t).then(function(i) {
            this._loadImage(i).then(e), t = null
          }.bind(this))
        }.bind(this))
      }.bind(this))
    }, h._getBackgroundImageSrc = function(t) {
      return new Promise(function(e, i) {
        a(function() {
          var i = t.currentStyle;
          return i || (i = window.getComputedStyle(t, !1)), t = null, 0 === i.backgroundImage.indexOf("url(") ? void e(i.backgroundImage.slice(4, -1).replace(/"/g, "")) : void e(null)
        }.bind(this))
      }.bind(this))
    }, h._getProgressiveImageDataAttribute = function() {
      return this.loadingOptions.imageDataAttribute
    }, h._getProgressiveImageCSSQuery = function() {
      return "[" + this._getProgressiveImageDataAttribute() + "]"
    }, h._getProgressiveImageElements = function() {
      return this.options.container.querySelectorAll(this._getProgressiveImageCSSQuery()) || []
    }, h._loadImage = function(t) {
      return new Promise(this._loadImagePromiseFunc.bind(this, t))
    }, h._loadImagePromiseFunc = function(t, e, i) {
      function n() {
        this.removeEventListener("load", n), e(this), e = null
      }
      if (!t) return void e(null);
      var r = new Image;
      r.addEventListener("load", n), r.src = t
    }, h._clearTimeout = function() {
      this._timeout && (window.clearTimeout(this._timeout), this._timeout = null)
    }, h._handleImageLoad = function(t) {
      c(function() {
        this.trigger(n.Events.ImageLoad, t), this.loadingOptions.imageAnimate && t.setAttribute("data-progressive-image-loaded", ""), t = null
      }.bind(this))
    }, h._handleLoadingComplete = function() {
      this.loadingQueue.stop(), this._clearTimeout(), this.trigger(n.Events.Complete)
    }, e.exports = n
  }, {
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-object/defaults": 306,
    "@marcom/ac-queue": 338,
    "@marcom/ac-raf-emitter/draw": 335,
    "@marcom/ac-raf-emitter/update": 336
  }],
  338: [function(t, e, i) {
    "use strict";
    e.exports = {
      Queue: t("./ac-queue/Queue"),
      QueueItem: t("./ac-queue/QueueItem"),
      LiveQueue: t("./ac-queue/LiveQueue")
    }
  }, {
    "./ac-queue/LiveQueue": 339,
    "./ac-queue/Queue": 340,
    "./ac-queue/QueueItem": 341
  }],
  339: [function(t, e, i) {
    "use strict";

    function n(t) {
      this._queue = new r, this._maxProcesses = t || 1, this._availableSlots = this._maxProcesses, this._rafId = 0, this._isRunning = !1, this._boundFunctions = {
        _run: this._run.bind(this),
        _releaseSlot: this._releaseSlot.bind(this)
      }
    }
    t("@marcom/ac-polyfills/Promise"), t("@marcom/ac-polyfills/requestAnimationFrame"), t("@marcom/ac-polyfills/Function/prototype.bind");
    var r = t("./Queue"),
      s = t("./QueueItem"),
      o = n.prototype;
    o.start = function() {
      this._isRunning && cancelAnimationFrame(this._rafId), this._rafId = requestAnimationFrame(this._boundFunctions._run), this._isRunning = !0
    }, o.pause = function() {
      this._isRunning && (cancelAnimationFrame(this._rafId), this._rafId = 0), this._isRunning = !1
    }, o.stop = function() {
      this.pause(), this.clear()
    }, o.enqueue = function(t, e) {
      if ("function" != typeof t) throw new Error("LiveQueue can only enqueue functions");
      void 0 === e && (e = r.PRIORITY_DEFAULT);
      var i = new s(t, e);
      return this.enqueueQueueItem(i)
    }, o.enqueueQueueItem = function(t) {
      return this._queue.enqueueQueueItem(t), this._isRunning && 0 === this._rafId && this.start(), t
    }, o.dequeueQueueItem = function(t) {
      return this._queue.dequeueQueueItem(t)
    }, o.clear = function() {
      this._queue = new r
    }, o.destroy = function() {
      this.pause(), this._isRunning = !1, this._queue = null, this._boundFunctions = null
    }, o.count = function() {
      return this._queue.count() + this.pending()
    }, o.pending = function() {
      return this._maxProcesses - this._availableSlots
    }, o.isEmpty = function() {
      return 0 === this.count()
    }, o._run = function() {
      if (this._isRunning && (this._rafId = requestAnimationFrame(this._boundFunctions._run), !this._queue.isEmpty() && 0 !== this._availableSlots)) {
        var t = this._queue.dequeue(),
          e = t.data();
        this._isPromise(e) && (this._retainSlot(), e.then(this._boundFunctions._releaseSlot, this._boundFunctions._releaseSlot)), this._stopRunningIfDone()
      }
    }, o._retainSlot = function() {
      this._availableSlots--
    }, o._releaseSlot = function() {
      this._availableSlots++, this._stopRunningIfDone()
    }, o._stopRunningIfDone = function() {
      0 != this._rafId && 0 === this._queue.count() && this._availableSlots == this._maxProcesses && (cancelAnimationFrame(this._rafId), this._rafId = 0)
    }, o._isPromise = function(t) {
      return !(!t || "function" != typeof t.then)
    }, e.exports = n
  }, {
    "./Queue": 340,
    "./QueueItem": 341,
    "@marcom/ac-polyfills/Function/prototype.bind": void 0,
    "@marcom/ac-polyfills/Promise": void 0,
    "@marcom/ac-polyfills/requestAnimationFrame": void 0
  }],
  340: [function(t, e, i) {
    "use strict";

    function n() {
      this._items = []
    }
    var r = t("./QueueItem"),
      s = n.prototype;
    s.enqueue = function(t, e) {
      void 0 === e && (e = n.PRIORITY_DEFAULT);
      var i = new r(t, e);
      return this.enqueueQueueItem(i)
    }, s.enqueueQueueItem = function(t) {
      return this._items.indexOf(t) === -1 && this._items.push(t), t
    }, s.dequeue = function() {
      this._heapSort();
      var t = this._items.length - 1,
        e = this._items[0];
      return this._items[0] = this._items[t], this._items.pop(), e
    }, s.dequeueQueueItem = function(t) {
      var e = this._items.indexOf(t);
      return e > -1 && this._items.splice(e, 1), t
    }, s.peek = function() {
      return 0 == this.count() ? null : (this._heapSort(), this._items[0])
    }, s.isEmpty = function() {
      return 0 === this._items.length
    }, s.count = function() {
      return this._items.length
    }, s.toString = function() {
      for (var t = ["Queue total items: " + this.count() + "\n"], e = 0; e < this.count(); ++e) t.push(this._items[e].toString() + "\n");
      return t.join("")
    }, s._heapSort = function() {
      for (var t = 0, e = this._items.length - 1; e >= 0; e--)
        for (var i = e; i > 0;) {
          t++;
          var n = Math.floor((i - 1) / 2);
          if (this._items[i].compareTo(this._items[n]) >= 0) break;
          var r = this._items[i];
          this._items[i] = this._items[n], this._items[n] = r, i = n
        }
    }, n.PRIORITY_LOW = 10, n.PRIORITY_DEFAULT = 5, n.PRIORITY_HIGH = 1, e.exports = n
  }, {
    "./QueueItem": 341
  }],
  341: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this.priority = e, this.data = t, this.insertionOrder = r++
    }
    var r = 0,
      s = n.prototype;
    s.compareTo = function(t) {
      return this.priority < t.priority ? -1 : this.priority > t.priority ? 1 : this.insertionOrder < t.insertionOrder ? -1 : 1
    }, s.toString = function() {
      return "QueueItem {priority:" + this.priority + ",\tdata:" + this.data + "\tinsertionOrder:" + this.insertionOrder + "}"
    }, e.exports = n
  }, {}],
  342: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-shared-instance").SharedInstance,
      r = "ac-raf-emitter-id-generator:sharedRAFEmitterIDGeneratorInstance",
      s = "1.0.3",
      o = function() {
        this._currentID = 0
      };
    o.prototype.getNewID = function() {
      return this._currentID++, "raf:" + this._currentID
    }, e.exports = n.share(r, s, o)
  }, {
    "@marcom/ac-shared-instance": 358
  }],
  343: [function(t, e, i) {
    "use strict";
    e.exports = {
      majorVersionNumber: "3.x"
    }
  }, {}],
  344: [function(t, e, i) {
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
    "./sharedRAFEmitterIDGeneratorInstance": 353,
    "./sharedRAFExecutorInstance": 354,
    "@marcom/ac-event-emitter-micro": 156
  }],
  345: [function(t, e, i) {
    "use strict";

    function n(t) {
      t = t || {}, this._reset(), this.updatePhases(), this.eventEmitter = new s, this._willRun = !1, this._totalSubscribeCount = -1, this._requestAnimationFrame = window.requestAnimationFrame, this._cancelAnimationFrame = window.cancelAnimationFrame, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
    }
    t("@marcom/ac-polyfills/performance/now");
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
    "@marcom/ac-event-emitter-micro/EventEmitterMicro": 157,
    "@marcom/ac-polyfills/performance/now": void 0
  }],
  346: [function(t, e, i) {
    "use strict";
    var n = t("./SingleCallRAFEmitter"),
      r = function(t) {
        this.phase = t, this.rafEmitter = new n, this._cachePhaseIndex(), this.requestAnimationFrame = this.requestAnimationFrame.bind(this), this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this), this._onBeforeRAFExecutorStart = this._onBeforeRAFExecutorStart.bind(this), this._onBeforeRAFExecutorPhase = this._onBeforeRAFExecutorPhase.bind(this), this._onAfterRAFExecutorPhase = this._onAfterRAFExecutorPhase.bind(this), this.rafEmitter.on(this.phase, this._onRAFExecuted.bind(this)), this.rafEmitter.executor.eventEmitter.on("before:start", this._onBeforeRAFExecutorStart),
          this.rafEmitter.executor.eventEmitter.on("before:" + this.phase, this._onBeforeRAFExecutorPhase), this.rafEmitter.executor.eventEmitter.on("after:" + this.phase, this._onAfterRAFExecutorPhase), this._frameCallbacks = [], this._currentFrameCallbacks = [], this._nextFrameCallbacks = [], this._phaseActive = !1, this._currentFrameID = -1, this._cancelFrameIdx = -1, this._frameCallbackLength = 0, this._currentFrameCallbacksLength = 0, this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0
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
    "./SingleCallRAFEmitter": 348
  }],
  347: [function(t, e, i) {
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
    "./RAFInterface": 346
  }],
  348: [function(t, e, i) {
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
    "./RAFEmitter": 344
  }],
  349: [function(t, e, i) {
    "use strict";
    var n = t("./RAFInterfaceController");
    e.exports = n.cancelAnimationFrame("draw")
  }, {
    "./RAFInterfaceController": 347
  }],
  350: [function(t, e, i) {
    "use strict";
    var n = t("./RAFInterfaceController");
    e.exports = n.cancelAnimationFrame("update")
  }, {
    "./RAFInterfaceController": 347
  }],
  351: [function(t, e, i) {
    "use strict";
    var n = t("./RAFInterfaceController");
    e.exports = n.requestAnimationFrame("draw")
  }, {
    "./RAFInterfaceController": 347
  }],
  352: [function(t, e, i) {
    "use strict";
    var n = t("./RAFInterfaceController");
    e.exports = n.requestAnimationFrame("external")
  }, {
    "./RAFInterfaceController": 347
  }],
  353: [function(t, e, i) {
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
    "../.release-info.js": 343,
    "@marcom/ac-shared-instance": 358
  }],
  354: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-shared-instance").SharedInstance,
      r = t("../.release-info.js").majorVersionNumber,
      s = t("./RAFExecutor");
    e.exports = n.share("@marcom/ac-raf-emitter/sharedRAFExecutorInstance", r, s)
  }, {
    "../.release-info.js": 343,
    "./RAFExecutor": 345,
    "@marcom/ac-shared-instance": 358
  }],
  355: [function(t, e, i) {
    "use strict";
    var n = t("./RAFInterfaceController");
    e.exports = n.requestAnimationFrame("update")
  }, {
    "./RAFInterfaceController": 347
  }],
  356: [function(t, e, i) {
    "use strict";

    function n(t) {
      t = t || {}, this._reset(), this._willRun = !1, this._totalSubscribeCount = -1, this._requestAnimationFrame = window.requestAnimationFrame, this._cancelAnimationFrame = window.cancelAnimationFrame, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
    }
    t("@marcom/ac-polyfills/performance/now");
    var r;
    r = n.prototype, r.subscribe = function(t, e) {
      return this._totalSubscribeCount++, this._nextFrameSubscribers[t.id] || (e ? this._nextFrameSubscribersOrder.unshift(t.id) : this._nextFrameSubscribersOrder.push(t.id), this._nextFrameSubscribers[t.id] = t, this._nextFrameSubscriberArrayLength++, this._nextFrameSubscriberCount++, this._run()), this._totalSubscribeCount
    }, r.unsubscribe = function(t) {
      return !!this._nextFrameSubscribers[t.id] && (this._nextFrameSubscribers[t.id] = null, this._nextFrameSubscriberCount--, 0 === this._nextFrameSubscriberCount && this._cancel(), !0)
    }, r.trigger = function(t, e) {
      var i;
      for (i = 0; i < this._subscriberArrayLength; i++) null !== this._subscribers[this._subscribersOrder[i]] && this._subscribers[this._subscribersOrder[i]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[i]].trigger(t, e)
    }, r.destroy = function() {
      var t = this._cancel();
      return this._subscribers = null, this._subscribersOrder = null, this._nextFrameSubscribers = null, this._nextFrameSubscribersOrder = null, this._rafData = null, this._boundOnAnimationFrame = null, this._onExternalAnimationFrame = null, t
    }, r.useExternalAnimationFrame = function(t) {
      if ("boolean" == typeof t) {
        var e = this._isUsingExternalAnimationFrame;
        return t && this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), !this._willRun || t || this._animationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this._isUsingExternalAnimationFrame = t, t ? this._boundOnExternalAnimationFrame : e || !1
      }
    }, r._run = function() {
      if (!this._willRun) return this._willRun = !0, 0 === this.lastFrameTime && (this.lastFrameTime = performance.now()), this._animationFrameActive = !0, this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), !0
    }, r._cancel = function() {
      var t = !1;
      return this._animationFrameActive && (this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), this._animationFrameActive = !1, this._willRun = !1, t = !0), this._isRunning || this._reset(), t
    }, r._onSubscribersAnimationFrameStart = function(t) {
      var e;
      for (e = 0; e < this._subscriberArrayLength; e++) null !== this._subscribers[this._subscribersOrder[e]] && this._subscribers[this._subscribersOrder[e]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[e]]._onAnimationFrameStart(t)
    }, r._onSubscribersAnimationFrameEnd = function(t) {
      var e;
      for (e = 0; e < this._subscriberArrayLength; e++) null !== this._subscribers[this._subscribersOrder[e]] && this._subscribers[this._subscribersOrder[e]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[e]]._onAnimationFrameEnd(t)
    }, r._onAnimationFrame = function(t) {
      this._subscribers = this._nextFrameSubscribers, this._subscribersOrder = this._nextFrameSubscribersOrder, this._subscriberArrayLength = this._nextFrameSubscriberArrayLength, this._subscriberCount = this._nextFrameSubscriberCount, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._isRunning = !0, this._willRun = !1, this._didRequestNextRAF = !1, this._rafData.delta = t - this.lastFrameTime, this.lastFrameTime = t, this._rafData.fps = 0, this._rafData.delta >= 1e3 && (this._rafData.delta = 0), 0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta), this._rafData.time = t, this._rafData.naturalFps = this._rafData.fps, this._rafData.timeNow = Date.now(), this._onSubscribersAnimationFrameStart(this._rafData), this.trigger("update", this._rafData), this.trigger("external", this._rafData), this.trigger("draw", this._rafData), this._onSubscribersAnimationFrameEnd(this._rafData), this._willRun || this._reset()
    }, r._onExternalAnimationFrame = function(t) {
      this._isUsingExternalAnimationFrame && this._onAnimationFrame(t)
    }, r._reset = function() {
      this._rafData = {
        time: 0,
        delta: 0,
        fps: 0,
        naturalFps: 0,
        timeNow: 0
      }, this._subscribers = {}, this._subscribersOrder = [], this._subscriberArrayLength = 0, this._subscriberCount = 0, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._didEmitFrameData = !1, this._animationFrame = null, this._animationFrameActive = !1, this._isRunning = !1, this._shouldReset = !1, this.lastFrameTime = 0
    }, e.exports = n
  }, {
    "@marcom/ac-polyfills/performance/now": void 0
  }],
  357: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-shared-instance").SharedInstance,
      r = "ac-raf-executor:sharedRAFExecutorInstance",
      s = "2.0.1",
      o = t("./RAFExecutor");
    e.exports = n.share(r, s, o)
  }, {
    "./RAFExecutor": 356,
    "@marcom/ac-shared-instance": 358
  }],
  358: [function(t, e, i) {
    "use strict";
    e.exports = {
      SharedInstance: t("./ac-shared-instance/SharedInstance")
    }
  }, {
    "./ac-shared-instance/SharedInstance": 359
  }],
  359: [function(t, e, i) {
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
      c = function() {
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
    a || (a = r[s] = {}), a[o] || (a[o] = c), e.exports = a[o]
  }, {}],
  360: [function(t, e, i) {
    "use strict";
    e.exports = {
      getContentDimensions: t("./getContentDimensions"),
      getDimensions: t("./getDimensions"),
      getPagePosition: t("./getPagePosition"),
      getPercentInViewport: t("./getPercentInViewport"),
      getPixelsInViewport: t("./getPixelsInViewport"),
      getPosition: t("./getPosition"),
      getScrollX: t("./getScrollX"),
      getScrollY: t("./getScrollY"),
      getViewportPosition: t("./getViewportPosition"),
      isInViewport: t("./isInViewport")
    }
  }, {
    "./getContentDimensions": 361,
    "./getDimensions": 362,
    "./getPagePosition": 363,
    "./getPercentInViewport": 364,
    "./getPixelsInViewport": 365,
    "./getPosition": 366,
    "./getScrollX": 367,
    "./getScrollY": 368,
    "./getViewportPosition": 369,
    "./isInViewport": 370
  }],
  361: [function(t, e, i) {
    arguments[4][225][0].apply(i, arguments)
  }, {
    "./utils/getBoundingClientRect": 371,
    dup: 225
  }],
  362: [function(t, e, i) {
    arguments[4][131][0].apply(i, arguments)
  }, {
    "./utils/getBoundingClientRect": 371,
    dup: 131
  }],
  363: [function(t, e, i) {
    arguments[4][227][0].apply(i, arguments)
  }, {
    "./getDimensions": 362,
    "./getScrollX": 367,
    "./getScrollY": 368,
    "./utils/getBoundingClientRect": 371,
    dup: 227
  }],
  364: [function(t, e, i) {
    arguments[4][228][0].apply(i, arguments)
  }, {
    "./getDimensions": 362,
    "./getPixelsInViewport": 365,
    dup: 228
  }],
  365: [function(t, e, i) {
    arguments[4][229][0].apply(i, arguments)
  }, {
    "./getViewportPosition": 369,
    dup: 229
  }],
  366: [function(t, e, i) {
    arguments[4][230][0].apply(i, arguments)
  }, {
    "./getDimensions": 362,
    "./utils/getBoundingClientRect": 371,
    dup: 230
  }],
  367: [function(t, e, i) {
    arguments[4][231][0].apply(i, arguments)
  }, {
    dup: 231
  }],
  368: [function(t, e, i) {
    arguments[4][232][0].apply(i, arguments)
  }, {
    dup: 232
  }],
  369: [function(t, e, i) {
    arguments[4][233][0].apply(i, arguments)
  }, {
    "./getPagePosition": 363,
    "./getScrollX": 367,
    "./getScrollY": 368,
    "./utils/getBoundingClientRect": 371,
    dup: 233
  }],
  370: [function(t, e, i) {
    arguments[4][234][0].apply(i, arguments)
  }, {
    "./getPercentInViewport": 364,
    "./getPixelsInViewport": 365,
    dup: 234
  }],
  371: [function(t, e, i) {
    arguments[4][132][0].apply(i, arguments)
  }, {
    dup: 132
  }],
  372: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-event-emitter-micro"),
      r = t("@marcom/ac-dom-metrics"),
      s = t("@marcom/ac-keyboard/Keyboard"),
      o = {
        num: 37,
        string: "ArrowLeft"
      },
      a = {
        num: 38,
        string: "ArrowUp"
      },
      c = {
        num: 39,
        string: "ArrowRight"
      },
      l = {
        num: 40,
        string: "ArrowDown"
      },
      u = [o, c, l, c],
      h = function(t) {
        if (t.which) return t.which;
        for (var e = t.key ? t.key : t.code, i = 0, n = u.length; i < n; i++)
          if (u[i].string === e) return u[i].num;
        return -1
      },
      d = {
        min: 0,
        max: 1,
        step: 1,
        value: 0,
        orientation: "horizontal",
        renderedPosition: !1,
        template: '<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-thumb"></div>\n</div>',
        keyboardMaxStepPercentage: .05,
        keyboardStepMultiplier: 1.25
      },
      m = Object.keys(d),
      f = function(t, e) {
        this.options = Object.assign({}, d, e), this.model = Object.create(this.options), this.el = t;
        var i = void 0 !== this.options.keyboardContext ? this.options.keyboardContext : this.el;
        null !== i && (this._keyboard = new s(i), this._keyDown = {}), t.className += " ac-slider-container", t.innerHTML = this.model.template, n.EventEmitterMicro.call(this), this.initialize()
      };
    f.prototype = Object.create(n.EventEmitterMicro.prototype);
    var p = f.prototype;
    p.addEventListeners = function() {
      this.addEventListener(this.el, "mousedown", this.onMouseDown), this.addEventListener(this.el, "touchstart", this.onTouchStart), this.addEventListener(this.el, "mouseover", this.onMouseOver), this.addEventListener(this.el, "mouseleave", this.onMouseLeave), this.addEventListener(this.el, "touchend", this.onTouchEnd), this.addEventListener(document, "touchend", this.onMouseUp), this._keyboard && ("horizontal" === this.model.orientation ? (this._keyboard.onDown(c.num, this.stepUp), this._keyboard.onDown(o.num, this.stepDown)) : (this._keyboard.onDown(l.num, this.stepDown), this._keyboard.onDown(a.num, this.stepUp)))
    }, p.addEventListener = function(t, e, i) {
      t.addEventListener(e, i)
    }, p.bindMethods = function() {
      this.stepDown = this.stepDown.bind(this), this.stepUp = this.stepUp.bind(this), this._triggerRelease = this._triggerRelease.bind(this), this._preventDefault = this._preventDefault.bind(this), this.onMouseDown = this.bindMethod(this.onMouseDown, this), this.onTouchStart = this.bindMethod(this.onTouchStart, this), this.onMouseOver = this.bindMethod(this.onMouseOver, this), this.onMouseLeave = this.bindMethod(this.onMouseLeave, this), this.onTouchEnd = this.bindMethod(this.onTouchEnd, this), this.onMouseUp = this.bindMethod(this.onMouseUp, this), this.onMouseMove = this.bindMethod(this.onMouseMove, this), this.onTouchMove = this.bindMethod(this.onTouchMove, this)
    }, p.bindMethod = function(t, e) {
      return t.bind(e)
    }, p.correctValueMinMax = function(t, e, i) {
      return t > i && (t = i), t < e && (t = e), t
    }, p.calculateStepsToValue = function(t, e) {
      return Math.abs(t - e)
    }, p.calculateMaxSteps = function(t, e) {
      return Math.abs(e - t)
    }, p.calculateStepsEqualToPercentage = function(t, e) {
      return t / 100 * e
    }, p.calculateNextStepInRange = function(t, e, i, n) {
      var r = this.calculateMaxSteps(e, i),
        s = this.calculateStepsToValue(t, e),
        o = e + Math.floor(r / n) * n;
      return t = Math.min(o, e + Math.round(s / n) * n)
    }, p.dispatchEvent = function(t, e) {
      t.dispatchEvent(new CustomEvent(e))
    }, p.disableUserControls = function() {
      this.removeEventListeners()
    }, p.enableUserControls = function() {
      this.addEventListeners()
    }, p.getNextValue = function(t, e, i, n) {
      return t = this.correctValueMinMax(t, e, i), "auto" !== n && (t = this.calculateNextStepInRange(t, e, i, n)), t
    }, p.getOrientation = function() {
      return this.model.orientation
    }, p.getValue = function() {
      return this.model.value
    }, p.getMin = function() {
      return this.model.min
    }, p.getMax = function() {
      return this.model.max
    }, p.getStep = function() {
      return this.model.step
    }, p.getClientXValue = function(t, e) {
      var i = this.getClientXFromEvent(t),
        n = null !== e ? r.getDimensions(e || this.thumbElement) : {
          width: 0,
          height: 0
        },
        s = r.getDimensions(this.runnableTrackElement),
        o = i - this.runnableTrackElement.getBoundingClientRect().left - Math.round(n.width / 2),
        a = s.width - n.width,
        c = o / a * 100,
        l = this.calculateMaxSteps(this.getMin(), this.getMax()),
        u = this.calculateStepsEqualToPercentage(c, l);
      return this.getMin() + u
    }, p.getClientYValue = function(t) {
      var e = this.getClientYFromEvent(t),
        i = r.getDimensions(this.thumbElement),
        n = r.getDimensions(this.runnableTrackElement),
        s = r.getViewportPosition(this.runnableTrackElement, this.model.renderedPosition),
        o = n.height - i.height,
        a = o - (e - s.top - i.height / 2),
        c = a / (n.height - i.height) * 100,
        l = this.calculateMaxSteps(this.model.min, this.model.max),
        u = this.calculateStepsEqualToPercentage(c, l);
      return this.model.min + u
    }, p.getClientValue = function(t) {
      t = t.originalEvent || t;
      var e;
      return e = "horizontal" === this.model.orientation ? this.getClientXValue(t) : this.getClientYValue(t)
    }, p.getClientXFromEvent = function(t) {
      return t.touches ? t.touches[0].clientX : t.clientX
    }, p.getClientYFromEvent = function(t) {
      return t.touches ? t.touches[0].clientY : t.clientY
    }, p.initialize = function() {
      this.setNodeReferences(), this.setValue(this.model.value), this.bindMethods(), this.addEventListeners()
    }, p.onMouseLeave = function() {
      this.preventDocumentMouseUpDispatch = !1
    }, p.onMouseDown = function(t) {
      var e = this.getClientValue(t);
      this.addEventListener(document, "mouseup", this.onMouseUp), this.addEventListener(document, "mousemove", this.onMouseMove), this.trigger("grab", this.getValue()), this.setValue(e)
    }, p.onMouseUp = function() {
      this.removeEventListener(document, "mouseup", this.onMouseUp), this.removeEventListener(document, "mousemove", this.onMouseMove), this.trigger("release", this.getValue()), this.preventDocumentMouseUpDispatch || this.dispatchEvent(this.el, "mouseup")
    }, p.onMouseOver = function() {
      this.preventDocumentMouseUpDispatch = !0
    }, p.onTouchEnd = function() {
      this.removeEventListener(document, "touchend", this.onTouchEnd), this.removeEventListener(document, "touchmove", this.onTouchMove), this.trigger("release", this.getValue()), this.preventDocumentMouseUpDispatch || this.dispatchEvent(this.el, "touchend")
    }, p.onTouchStart = function(t) {
      var e = this.getClientValue(t);
      this.addEventListener(document, "touchend", this.onMouseUp), this.addEventListener(document, "touchmove", this.onTouchMove), this.trigger("grab", this.getValue()), this.setValue(e)
    }, p.onMouseMove = function(t) {
      var e = this.getClientValue(t);
      this.setValue(e)
    }, p.onTouchMove = function(t) {
      t.preventDefault && t.preventDefault();
      var e = this.getClientValue(t);
      this.setValue(e)
    }, p.getElementOrientationOffsetValue = function(t, e) {
      return "horizontal" === e ? r.getDimensions(t).width : r.getDimensions(t).height
    }, p.getAvailableRunnableTrack = function(t, e) {
      var i = this.getElementOrientationOffsetValue(this.thumbElement, e);
      return t - i
    }, p.getPercentageByValue = function(t, e) {
      return t = this.calculateStepsToValue(t, this.getMin()), e = this.calculateMaxSteps(this.getMin(), this.getMax()), t / e * 100
    }, p.getPercentageOfRunnableTrack = function(t) {
      var e = this.getOrientation(),
        i = this.getElementOrientationOffsetValue(this.runnableTrackElement, e),
        n = this.getAvailableRunnableTrack(i, e),
        r = this.getPercentageByValue(t, this.getMax()),
        s = r / 100 * n;
      return s / i * 100
    }, p.onChange = function(t) {
      var e = this.getPercentageOfRunnableTrack(t);
      isNaN(e) || ("horizontal" === this.getOrientation() ? this.thumbElement.style.left = e + "%" : this.thumbElement.style.bottom = e + "%", this.trigger("change", this.getValue()))
    }, p.removeEventListeners = function() {
      this.removeEventListener(this.el, "mousedown", this.onMouseDown), this.removeEventListener(this.el, "touchstart", this.onTouchStart), this.removeEventListener(this.el, "mouseover", this.onMouseOver), this.removeEventListener(this.el, "mouseleave", this.onMouseLeave), this.removeEventListener(this.el, "touchend", this.onTouchEnd), this.removeEventListener(document, "touchend", this.onMouseUp)
    }, p.removeEventListener = function(t, e, i) {
      t.removeEventListener(e, i)
    }, p.setNodeReferences = function() {
      this.runnableTrackElement = this.el.querySelector(".ac-slider-runnable-track"), this.thumbElement = this.el.querySelector(".ac-slider-thumb")
    }, p.setOrientation = function(t) {
      this.set("orientation", t)
    }, p._triggerRelease = function(t) {
      this._preventDefault(t), this.trigger("release", this.getValue()), this._keyDown[h(t)] = 0
    }, p._preventDefault = function(t) {
      t.preventDefault(), t.stopPropagation()
    }, p._step = function(t, e) {
      this._preventDefault(t), this.el.focus();
      var i = this._keyDown[h(t)] || 0;
      i ? Math.abs(this._keyDown[h(t)]) < Math.abs(this.model.max * this.model.keyboardMaxStepPercentage) && (i *= this.model.keyboardStepMultiplier) : (this.trigger("grab", this.getValue()), i = this.getStep(), i = "auto" !== i ? i : this._cachedMaxStep, e || (i *= -1), this._keyboard.onceUp(h(t), this._triggerRelease)), this._keyDown[h(t)] = i, this.setValue(this.getValue() + i)
    }, p.stepUp = function(t) {
      this._step(t, !0)
    }, p.stepDown = function(t) {
      this._step(t, !1)
    }, p.setValue = function(t) {
      t = this.getNextValue(t, this.getMin(), this.getMax(), this.getStep()), this.set("value", t), this.el.setAttribute("aria-valuenow", t), this.onChange(t)
    }, p.setMin = function(t) {
      this.set("min", t), this.el.setAttribute("aria-valuemin", t)
    }, p.setMax = function(t) {
      this.set("max", t), this.el.setAttribute("aria-valuemax", t), this._cachedMaxStep = t / 100
    }, p.setStep = function(t) {
      this.set("step", t)
    }, p.set = function(t, e) {
      if (m.indexOf(t) > -1 && this.model[t] !== e) {
        var i = this.model[t];
        this.model[t] = e, this.trigger("change:model:" + t, {
          previous: i,
          current: e
        })
      }
    }, p._removeEventListeners = function() {
      this.removeEventListener(this.el, "mousedown", this.onMouseDown), this.removeEventListener(this.el, "touchstart", this.onTouchStart), this.removeEventListener(this.el, "mouseover", this.onMouseOver), this.removeEventListener(this.el, "mouseleave", this.onMouseLeave), this.removeEventListener(this.el, "touchend", this.onTouchEnd), this.removeEventListener(document, "touchend", this.onMouseUp), "horizontal" === this.model.orientation ? (this._keyboard.offDown(c.num, this.stepUp), this._keyboard.offDown(o.num, this.stepDown), this._keyboard.offUp(o.num, this._triggerRelease), this._keyboard.offUp(c.num, this._triggerRelease)) : (this._keyboard.offDown(l.num, this.stepDown), this._keyboard.offDown(a.num, this.stepUp), this._keyboard.offUp(l.num, this._triggerRelease), this._keyboard.offUp(a.num, this._triggerRelease))
    }, p.destroy = function() {
      this._removeEventListeners(), this._keyboard && this._keyboard.destroy(), n.EventEmitterMicro.prototype.destroy.call(this)
    }, e.exports = f
  }, {
    "@marcom/ac-dom-metrics": 360,
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-keyboard/Keyboard": 261
  }],
  373: [function(t, e, i) {
    "use strict";
    e.exports.Slider = t("./Slider")
  }, {
    "./Slider": 372
  }],
  374: [function(t, e, i) {
    "use strict";
    e.exports = t("./lib/")
  }, {
    "./lib/": 375
  }],
  375: [function(t, e, i) {
    "use strict";
    var n = t("./stringify"),
      r = t("./parse");
    e.exports = {
      stringify: n,
      parse: r
    }
  }, {
    "./parse": 376,
    "./stringify": 377
  }],
  376: [function(t, e, i) {
    "use strict";
    var n = t("./utils"),
      r = {
        delimiter: "&",
        depth: 5,
        arrayLimit: 20,
        parameterLimit: 1e3
      };
    r.parseValues = function(t, e) {
      for (var i = {}, r = t.split(e.delimiter, e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit), s = 0, o = r.length; s < o; ++s) {
        var a = r[s],
          c = a.indexOf("]=") === -1 ? a.indexOf("=") : a.indexOf("]=") + 1;
        if (c === -1) i[n.decode(a)] = "";
        else {
          var l = n.decode(a.slice(0, c)),
            u = n.decode(a.slice(c + 1));
          i.hasOwnProperty(l) ? i[l] = [].concat(i[l]).concat(u) : i[l] = u
        }
      }
      return i
    }, r.parseObject = function(t, e, i) {
      if (!t.length) return e;
      var n = t.shift(),
        s = {};
      if ("[]" === n) s = [], s = s.concat(r.parseObject(t, e, i));
      else {
        var o = "[" === n[0] && "]" === n[n.length - 1] ? n.slice(1, n.length - 1) : n,
          a = parseInt(o, 10),
          c = "" + a;
        !isNaN(a) && n !== o && c === o && a >= 0 && a <= i.arrayLimit ? (s = [], s[a] = r.parseObject(t, e, i)) : s[o] = r.parseObject(t, e, i)
      }
      return s
    }, r.parseKeys = function(t, e, i) {
      if (t) {
        var n = /^([^\[\]]*)/,
          s = /(\[[^\[\]]*\])/g,
          o = n.exec(t);
        if (!Object.prototype.hasOwnProperty(o[1])) {
          var a = [];
          o[1] && a.push(o[1]);
          for (var c = 0; null !== (o = s.exec(t)) && c < i.depth;) ++c, Object.prototype.hasOwnProperty(o[1].replace(/\[|\]/g, "")) || a.push(o[1]);
          return o && a.push("[" + t.slice(o.index) + "]"), r.parseObject(a, e, i)
        }
      }
    }, e.exports = function(t, e) {
      if ("" === t || null === t || "undefined" == typeof t) return {};
      e = e || {}, e.delimiter = "string" == typeof e.delimiter || n.isRegExp(e.delimiter) ? e.delimiter : r.delimiter, e.depth = "number" == typeof e.depth ? e.depth : r.depth, e.arrayLimit = "number" == typeof e.arrayLimit ? e.arrayLimit : r.arrayLimit, e.parameterLimit = "number" == typeof e.parameterLimit ? e.parameterLimit : r.parameterLimit;
      for (var i = "string" == typeof t ? r.parseValues(t, e) : t, s = {}, o = Object.keys(i), a = 0, c = o.length; a < c; ++a) {
        var l = o[a],
          u = r.parseKeys(l, i[l], e);
        s = n.merge(s, u)
      }
      return n.compact(s)
    }
  }, {
    "./utils": 378
  }],
  377: [function(t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      r = t("./utils"),
      s = {
        delimiter: "&",
        indices: !0
      };
    s.stringify = function(t, e, i) {
      if (r.isBuffer(t) ? t = t.toString() : t instanceof Date ? t = t.toISOString() : null === t && (t = ""), "string" == typeof t || "number" == typeof t || "boolean" == typeof t) return [encodeURIComponent(e) + "=" + encodeURIComponent(t)];
      var n = [];
      if ("undefined" == typeof t) return n;
      for (var o = Object.keys(t), a = 0, c = o.length; a < c; ++a) {
        var l = o[a];
        n = !i.indices && Array.isArray(t) ? n.concat(s.stringify(t[l], e, i)) : n.concat(s.stringify(t[l], e + "[" + l + "]", i))
      }
      return n
    }, e.exports = function(t, e) {
      e = e || {};
      var i = "undefined" == typeof e.delimiter ? s.delimiter : e.delimiter;
      e.indices = "boolean" == typeof e.indices ? e.indices : s.indices;
      var r = [];
      if ("object" !== ("undefined" == typeof t ? "undefined" : n(t)) || null === t) return "";
      for (var o = Object.keys(t), a = 0, c = o.length; a < c; ++a) {
        var l = o[a];
        r = r.concat(s.stringify(t[l], l, e))
      }
      return r.join(i)
    }
  }, {
    "./utils": 378
  }],
  378: [function(t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    i.arrayToObject = function(t) {
      for (var e = {}, i = 0, n = t.length; i < n; ++i) "undefined" != typeof t[i] && (e[i] = t[i]);
      return e
    }, i.merge = function(t, e) {
      if (!e) return t;
      if ("object" !== ("undefined" == typeof e ? "undefined" : n(e))) return Array.isArray(t) ? t.push(e) : t[e] = !0, t;
      if ("object" !== ("undefined" == typeof t ? "undefined" : n(t))) return t = [t].concat(e);
      Array.isArray(t) && !Array.isArray(e) && (t = i.arrayToObject(t));
      for (var r = Object.keys(e), s = 0, o = r.length; s < o; ++s) {
        var a = r[s],
          c = e[a];
        t[a] ? t[a] = i.merge(t[a], c) : t[a] = c
      }
      return t
    }, i.decode = function(t) {
      try {
        return decodeURIComponent(t.replace(/\+/g, " "))
      } catch (e) {
        return t
      }
    }, i.compact = function(t, e) {
      if ("object" !== ("undefined" == typeof t ? "undefined" : n(t)) || null === t) return t;
      e = e || [];
      var r = e.indexOf(t);
      if (r !== -1) return e[r];
      if (e.push(t), Array.isArray(t)) {
        for (var s = [], o = 0, a = t.length; o < a; ++o) "undefined" != typeof t[o] && s.push(t[o]);
        return s
      }
      var c = Object.keys(t);
      for (o = 0, a = c.length; o < a; ++o) {
        var l = c[o];
        t[l] = i.compact(t[l], e)
      }
      return t
    }, i.isRegExp = function(t) {
      return "[object RegExp]" === Object.prototype.toString.call(t)
    }, i.isBuffer = function(t) {
      return null !== t && "undefined" != typeof t && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
    }
  }, {}],
  379: [function(t, e, i) {
    "use strict";
    e.exports = {
      Link: t("./ac-social/Link"),
      Dialog: t("./ac-social/Dialog"),
      Focus: t("./ac-social/Focus"),
      Debug: t("./ac-social/Debug")
    }
  }, {
    "./ac-social/Debug": 380,
    "./ac-social/Dialog": 381,
    "./ac-social/Focus": 382,
    "./ac-social/Link": 383
  }],
  380: [function(t, e, i) {
    "use strict";

    function n() {
      this.types = {};
      var t;
      for (t in r) r.hasOwnProperty(t) && (s[t] = t, this.addType(t, r[t].getDialogDebugData.bind(r[t])))
    }
    var r = t("./NetworkActions"),
      s = n.prototype;
    s.create = function(t, e) {
      e = e || {};
      var i = this.types[t];
      if (i) return i(e)
    }, s.addType = function(t, e) {
      return this.types[t] = e, this
    }, s.removeType = function() {
      return this.types[name] = null, this
    }, e.exports = new n
  }, {
    "./NetworkActions": 384
  }],
  381: [function(t, e, i) {
    "use strict";

    function n() {
      this.types = {};
      var t;
      for (t in r) r.hasOwnProperty(t) && (s[t] = t, this.addType(t, r[t].generateDialog.bind(r[t])))
    }
    var r = t("./NetworkActions"),
      s = n.prototype;
    s.create = function(t, e) {
      e = e || {};
      var i = this.types[t];
      if (i) return i(e)
    }, s.addType = function(t, e) {
      return this.types[t] = e, this
    }, s.removeType = function() {
      return this.types[name] = null, this
    }, e.exports = new n
  }, {
    "./NetworkActions": 384
  }],
  382: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      if (window.getSelection) {
        var e = window.getSelection(),
          i = document.createRange();
        i.selectNodeContents(t), e.removeAllRanges(), e.addRange(i)
      } else if (t.setSelectionRange) t.setSelectionRange(0, t.value.length);
      else if (document.body.createTextRange) {
        var i = document.body.createTextRange();
        i.moveToElementText(t), i.select()
      }
    }
  }, {}],
  383: [function(t, e, i) {
    "use strict";

    function n() {
      this.types = {};
      var t;
      for (t in r) r.hasOwnProperty(t) && (o[t] = t, this.addType(t, r[t].generateLink.bind(r[t])))
    }
    var r = t("./NetworkActions"),
      s = t("./network-actions/DefaultNetworkAction"),
      o = n.prototype;
    o.create = function(t, e, i) {
      e = e || {};
      var n = this.types[t];
      if (n) return n(e, i)
    }, o.createFromAnchor = function(t) {
      var e, i = t.getAttribute("data-network-action");
      for (e in r)
        if (r.hasOwnProperty(e) && i === r[e].id) return void r[e].enhanceLinkEngagement(t);
      s.enhanceLinkEngagement(t)
    }, o.addType = function(t, e) {
      return this.types[t] = e, this
    }, o.removeType = function() {
      return this.types[name] = null, this
    }, e.exports = new n
  }, {
    "./NetworkActions": 384,
    "./network-actions/DefaultNetworkAction": 385
  }],
  384: [function(t, e, i) {
    "use strict";
    var n = t("./network-actions/FacebookShare"),
      r = t("./network-actions/PinterestShare"),
      s = t("./network-actions/TumblrShare"),
      o = t("./network-actions/TwitterFavorite"),
      a = t("./network-actions/TwitterReply"),
      c = t("./network-actions/TwitterRetweet"),
      l = t("./network-actions/TwitterTweet"),
      u = t("./network-actions/WeiboShare"),
      h = t("./network-actions/QQWeiboShare"),
      d = t("./network-actions/QZoneShare"),
      m = t("./network-actions/RenrenShare"),
      f = t("./network-actions/EMailShare");
    e.exports = {
      FACEBOOK_SHARE: n,
      PINTEREST_SHARE: r,
      TUMBLR_SHARE: s,
      TWITTER_FAVORITE: o,
      TWITTER_REPLY: a,
      TWITTER_RETWEET: c,
      TWITTER_TWEET: l,
      WEIBO_SHARE: u,
      QQWEIBO_SHARE: h,
      QZONE_SHARE: d,
      RENREN_SHARE: m,
      EMAIL_SHARE: f
    }
  }, {
    "./network-actions/EMailShare": 386,
    "./network-actions/FacebookShare": 387,
    "./network-actions/PinterestShare": 389,
    "./network-actions/QQWeiboShare": 390,
    "./network-actions/QZoneShare": 391,
    "./network-actions/RenrenShare": 392,
    "./network-actions/TumblrShare": 393,
    "./network-actions/TwitterFavorite": 394,
    "./network-actions/TwitterReply": 395,
    "./network-actions/TwitterRetweet": 396,
    "./network-actions/TwitterTweet": 397,
    "./network-actions/WeiboShare": 398
  }],
  385: [function(t, e, i) {
    "use strict";
    var n = t("./NetworkAction"),
      r = function(t) {
        return t
      };
    e.exports = new n(r, {
      baseLinkPath: ""
    })
  }, {
    "./NetworkAction": 388
  }],
  386: [function(t, e, i) {
    "use strict";
    var n = t("./NetworkAction"),
      r = function(t) {
        var e = {
          url: t.url
        };
        return t.title && (e.subject = t.title), t.description ? e.body = t.description + "\r\n\r\n" + t.url : e.body = t.url, e
      };
    e.exports = new n(r, {
      id: "email-share",
      baseLinkPath: "mailto:",
      preventDialog: !0
    })
  }, {
    "./NetworkAction": 388
  }],
  387: [function(t, e, i) {
    "use strict";
    var n = t("./NetworkAction"),
      r = function(t) {
        return {
          u: t.url
        }
      };
    e.exports = new n(r, {
      id: "facebook-share",
      baseLinkPath: "https://www.facebook.com/sharer/sharer.php",
      dialogDimensions: {
        width: 555,
        height: 368
      }
    })
  }, {
    "./NetworkAction": 388
  }],
  388: [function(t, e, i) {
    "use strict";
    var n, r = t("qs"),
      s = function(t, e) {
        e = e || {}, this.baseLinkPath = e.baseLinkPath, e.dialogDimensions && (this.dialogDimensions = e.dialogDimensions), e.id && (this.id = e.id), e.preventDialog && (this.preventDialog = e.preventDialog), this.normalizeData = t
      };
    n = s.prototype, n.dataAttributeName = "network-action", n.id = "network-action", n.normalizeData = function(t) {
      return t
    }, n.dialogDimensions = {
      width: 500,
      height: 500
    }, n.generateLinkURL = function(t) {
      var e = this.normalizeData(t),
        i = r.stringify(e),
        n = this.baseLinkPath;
      return i.length > 0 && (n = n + "?" + i), n
    }, n.generateLink = function(t, e) {
      var i = this.generateLinkURL(t);
      return e = e || document.createElement("A"),
        e.setAttribute("href", i), e.setAttribute("target", "_blank"), e.setAttribute("data-" + this.dataAttributeName, this.id), this.enhanceLinkEngagement(e, i), e
    }, n.generateDialog = function(t) {
      var e = this.generateLinkURL(t);
      this._triggerDialog(e)
    }, n.enhanceLinkEngagement = function(t, e) {
      e = e || t.getAttribute("href"), t.addEventListener("click", this._onLinkEngaged.bind(this, e))
    }, n.getDialogOptions = function() {
      var t, e = "status=1",
        i = {
          width: this.dialogDimensions.width,
          height: this.dialogDimensions.height
        };
      i.top = (window.screen.availHeight - i.height) / 2, i.left = (window.screen.availWidth - i.width) / 2;
      for (t in i) i.hasOwnProperty(t) && (e += ", " + t + "=" + i[t]);
      return e
    }, n.getDialogDebugData = function(t) {
      return {
        data: this.normalizeData(t),
        dialogUrl: this.generateLinkURL(t)
      }
    }, n._triggerDialog = function(t) {
      return this.preventDialog ? void(window.location.href = t) : void window.open(t, "_blank", this.getDialogOptions())
    }, n._onLinkEngaged = function(t, e) {
      e.preventDefault(), this._triggerDialog(t)
    }, e.exports = s
  }, {
    qs: 374
  }],
  389: [function(t, e, i) {
    "use strict";
    var n = t("./NetworkAction"),
      r = function(t) {
        var e = {
          url: t.url,
          description: t.description
        };
        return t.media && (e.media = t.media), e
      };
    e.exports = new n(r, {
      id: "pinterest-share",
      baseLinkPath: "http://www.pinterest.com/pin/create/button",
      dialogDimensions: {
        width: 750,
        height: 450
      }
    })
  }, {
    "./NetworkAction": 388
  }],
  390: [function(t, e, i) {
    "use strict";
    var n = t("./NetworkAction"),
      r = function(t) {
        return {
          url: t.url,
          title: t.title,
          pic: t.media
        }
      };
    e.exports = new n(r, {
      id: "qq-weibo-share",
      baseLinkPath: "http://v.t.qq.com/share/share.php",
      dialogDimensions: {
        width: 658,
        height: 506
      }
    })
  }, {
    "./NetworkAction": 388
  }],
  391: [function(t, e, i) {
    "use strict";
    var n = t("./NetworkAction"),
      r = function(t) {
        return {
          url: t.url,
          title: t.title,
          pics: t.media,
          summary: t.description
        }
      };
    e.exports = new n(r, {
      id: "qzone-share",
      baseLinkPath: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",
      dialogDimensions: {
        width: 620,
        height: 645
      }
    })
  }, {
    "./NetworkAction": 388
  }],
  392: [function(t, e, i) {
    "use strict";
    var n = t("./NetworkAction"),
      r = function(t) {
        return {
          url: t.url,
          title: t.title
        }
      };
    e.exports = new n(r, {
      id: "renren-share",
      baseLinkPath: "http://www.connect.renren.com/share/sharer",
      dialogDimensions: {
        width: 500,
        height: 315
      }
    })
  }, {
    "./NetworkAction": 388
  }],
  393: [function(t, e, i) {
    "use strict";
    var n = t("./NetworkAction"),
      r = function(t) {
        var e = {
          clickthru: t.url,
          caption: t.description
        };
        return t.media && (e.source = t.media), e
      };
    e.exports = new n(r, {
      id: "tumblr-share",
      baseLinkPath: "http://www.tumblr.com/share/photo",
      dialogDimensions: {
        width: 450,
        height: 432
      }
    })
  }, {
    "./NetworkAction": 388
  }],
  394: [function(t, e, i) {
    "use strict";
    var n = t("./NetworkAction"),
      r = function(t) {
        var e = {
          tweet_id: t.messageId
        };
        return e
      };
    e.exports = new n(r, {
      id: "twitter-favorite",
      baseLinkPath: "https://twitter.com/intent/favorite",
      dialogDimensions: {
        width: 550,
        height: 420
      }
    })
  }, {
    "./NetworkAction": 388
  }],
  395: [function(t, e, i) {
    "use strict";
    var n = t("./NetworkAction"),
      r = function(t) {
        var e = {
          in_reply_to: t.messageId
        };
        return t.hashtags && (e.hashtags = t.hashtags), e
      };
    e.exports = new n(r, {
      id: "twitter-reply",
      baseLinkPath: "https://twitter.com/intent/tweet",
      dialogDimensions: {
        width: 550,
        height: 420
      }
    })
  }, {
    "./NetworkAction": 388
  }],
  396: [function(t, e, i) {
    "use strict";
    var n = t("./NetworkAction"),
      r = function(t) {
        var e = {
          tweet_id: t.messageId
        };
        return e
      };
    e.exports = new n(r, {
      id: "twitter-retweet",
      baseLinkPath: "https://twitter.com/intent/retweet",
      dialogDimensions: {
        width: 550,
        height: 420
      }
    })
  }, {
    "./NetworkAction": 388
  }],
  397: [function(t, e, i) {
    "use strict";
    var n = t("./NetworkAction"),
      r = function(t) {
        var e = {
          url: t.url,
          text: t.description
        };
        return t.hashtags && (e.hashtags = t.hashtags), e
      };
    e.exports = new n(r, {
      id: "twitter-tweet",
      baseLinkPath: "https://twitter.com/intent/tweet",
      dialogDimensions: {
        width: 550,
        height: 420
      }
    })
  }, {
    "./NetworkAction": 388
  }],
  398: [function(t, e, i) {
    "use strict";
    var n = t("./NetworkAction"),
      r = function(t) {
        return {
          url: t.url,
          title: t.title,
          pic: t.media
        }
      };
    e.exports = new n(r, {
      id: "weibo-share",
      baseLinkPath: "http://service.weibo.com/share/share.php",
      dialogDimensions: {
        width: 650,
        height: 426
      }
    })
  }, {
    "./NetworkAction": 388
  }],
  399: [function(t, e, i) {
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
    "@marcom/ac-eclipse": 135,
    "@marcom/ac-feature/cssPropertyAvailable": 163
  }],
  400: [function(t, e, i) {
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
    "@marcom/ac-eclipse": 135,
    "@marcom/ac-feature/cssPropertyAvailable": 163
  }],
  401: [function(t, e, i) {
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
    "@marcom/ac-eclipse": 135,
    "@marcom/ac-feature/cssPropertyAvailable": 163
  }],
  402: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-eclipse").Clip,
      r = t("@marcom/ac-dom-styles");
    e.exports = function(t, e, i, s, o) {
      o = o || {}, o.autoplay = o.autoplay !== !1 || o.autoplay;
      var a, c = o.onStart || null,
        l = o.onComplete || null;
      return a = {
        transform: {
          translateX: e + "px",
          translateY: i + "px"
        }
      }, s ? (o.onStart = function() {
        t.style.willChange = "transform", null !== c && c.call(this)
      }, o.onComplete = function() {
        t.style.willChange = "", null !== l && l.call(this)
      }, o.autoplay ? n.to(t, s, a, o) : new n(t, s, a, o)) : (r.setStyle(t, a), "function" == typeof o.onStart && o.onStart(), void("function" == typeof o.onComplete && o.onComplete()))
    }
  }, {
    "@marcom/ac-dom-styles": 110,
    "@marcom/ac-eclipse": 135
  }],
  403: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-browser-prefixed"),
      r = t("@marcom/ac-transform").Transform,
      s = t("./move");
    e.exports = function(t, e, i, o) {
      var a = new r;
      return a.setMatrixValue(getComputedStyle(t)[n.transform]), s(t, e, a.getTranslateY(), i, o)
    }
  }, {
    "./move": 402,
    "@marcom/ac-browser-prefixed": 22,
    "@marcom/ac-transform": 407
  }],
  404: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-eclipse").Clip;
    e.exports = function(t, e, i, r, s) {
      s = s || {}, s.autoplay = s.autoplay !== !1 || s.autoplay;
      var o, a, c = t === window;
      c ? (o = t.pageXOffset, a = t.pageYOffset) : (o = t.scrollLeft, a = t.scrollTop);
      var l = {
          x: o,
          y: a
        },
        u = {
          x: e,
          y: i
        };
      if ("function" == typeof s.onDraw) var h = s.onDraw;
      var d = function(e) {
        c ? t.scrollTo(l.x, l.y) : (t.scrollLeft = l.x, t.scrollTop = l.y), h && h.call(this, e)
      };
      return s.onDraw = d, s.autoplay ? n.to(l, r, u, s) : new n(l, r, u, s)
    }
  }, {
    "@marcom/ac-eclipse": 135
  }],
  405: [function(t, e, i) {
    "use strict";
    var n = t("./scroll");
    e.exports = function(t, e, i, r) {
      var s, o = t === window;
      return s = o ? t.pageYOffset : t.scrollTop, n(t, e, s, i, r)
    }
  }, {
    "./scroll": 404
  }],
  406: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i) {
      return e ? (i = i || /{([^{}]*)}/g, t.replace(i, function(t, i) {
        var n = e[i];
        return "string" == typeof n || "number" == typeof n || "boolean" == typeof n ? n : t
      })) : t
    }
  }, {}],
  407: [function(t, e, i) {
    "use strict";
    e.exports = {
      Transform: t("./ac-transform/Transform")
    }
  }, {
    "./ac-transform/Transform": 408
  }],
  408: [function(t, e, i) {
    "use strict";

    function n() {
      this.m = r.create()
    }
    var r = t("./gl-matrix/mat4"),
      s = t("./gl-matrix/vec3"),
      o = t("./gl-matrix/vec4"),
      a = Math.PI / 180,
      c = 180 / Math.PI,
      l = 0,
      u = 0,
      h = 1,
      d = 1,
      m = 2,
      f = 3,
      p = 4,
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
      x = 12,
      A = 13,
      k = 13,
      P = 14,
      O = 15,
      I = n.prototype;
    I.rotateX = function(t) {
      var e = a * t;
      return r.rotateX(this.m, this.m, e), this
    }, I.rotateY = function(t) {
      var e = a * t;
      return r.rotateY(this.m, this.m, e), this
    }, I.rotateZ = function(t) {
      var e = a * t;
      return r.rotateZ(this.m, this.m, e), this
    }, I.rotate = I.rotateZ, I.rotate3d = function(t, e, i, n) {
      null !== e && void 0 !== e || (e = t), null !== i && void 0 !== e || (i = t);
      var s = a * n;
      return r.rotate(this.m, this.m, s, [t, e, i]), this
    }, I.rotateAxisAngle = I.rotate3d, I.scale = function(t, e) {
      return e = e || t, r.scale(this.m, this.m, [t, e, 1]), this
    }, I.scaleX = function(t) {
      return r.scale(this.m, this.m, [t, 1, 1]), this
    }, I.scaleY = function(t) {
      return r.scale(this.m, this.m, [1, t, 1]), this
    }, I.scaleZ = function(t) {
      return r.scale(this.m, this.m, [1, 1, t]), this
    }, I.scale3d = function(t, e, i) {
      return r.scale(this.m, this.m, [t, e, i]), this
    }, I.skew = function(t, e) {
      if (null === e || void 0 === e) return this.skewX(t);
      t = a * t, e = a * e;
      var i = r.create();
      return i[_] = Math.tan(t), i[d] = Math.tan(e), r.multiply(this.m, this.m, i), this
    }, I.skewX = function(t) {
      t = a * t;
      var e = r.create();
      return e[_] = Math.tan(t), r.multiply(this.m, this.m, e), this
    }, I.skewY = function(t) {
      t = a * t;
      var e = r.create();
      return e[d] = Math.tan(t), r.multiply(this.m, this.m, e), this
    }, I.translate = function(t, e) {
      return e = e || 0, r.translate(this.m, this.m, [t, e, 0]), this
    }, I.translate3d = function(t, e, i) {
      return r.translate(this.m, this.m, [t, e, i]), this
    }, I.translateX = function(t) {
      return r.translate(this.m, this.m, [t, 0, 0]), this
    }, I.translateY = function(t) {
      return r.translate(this.m, this.m, [0, t, 0]), this
    }, I.translateZ = function(t) {
      return r.translate(this.m, this.m, [0, 0, t]), this
    }, I.perspective = function(t) {
      var e = r.create();
      0 !== t && (e[S] = -1 / t), r.multiply(this.m, this.m, e)
    }, I.inverse = function() {
      var t = this.clone();
      return t.m = r.invert(t.m, this.m), t
    }, I.reset = function() {
      return r.identity(this.m), this
    }, I.getTranslateXY = function() {
      var t = this.m;
      return this.isAffine() ? [t[x], t[k]] : [t[C], t[A]]
    }, I.getTranslateXYZ = function() {
      var t = this.m;
      return this.isAffine() ? [t[x], t[k], 0] : [t[C], t[A], t[P]]
    }, I.getTranslateX = function() {
      var t = this.m;
      return this.isAffine() ? t[x] : t[C]
    }, I.getTranslateY = function() {
      var t = this.m;
      return this.isAffine() ? t[k] : t[A]
    }, I.getTranslateZ = function() {
      var t = this.m;
      return this.isAffine() ? 0 : t[P]
    }, I.clone = function() {
      var t = new n;
      return t.m = r.clone(this.m), t
    }, I.toArray = function() {
      var t = this.m;
      return this.isAffine() ? [t[u], t[d], t[_], t[y], t[x], t[k]] : [t[l], t[h], t[m], t[f], t[p], t[g], t[v], t[b], t[E], t[w], t[T], t[S], t[C], t[A], t[P], t[O]]
    }, I.fromArray = function(t) {
      return this.m = Array.prototype.slice.call(t), this
    }, I.setMatrixValue = function(t) {
      t = String(t).trim();
      var e = r.create();
      if ("none" === t) return this.m = e, this;
      var i, n, s = t.slice(0, t.indexOf("("));
      if ("matrix3d" === s)
        for (i = t.slice(9, -1).split(","), n = 0; n < i.length; n++) e[n] = parseFloat(i[n]);
      else {
        if ("matrix" !== s) throw new TypeError("Invalid Matrix Value");
        for (i = t.slice(7, -1).split(","), n = i.length; n--;) i[n] = parseFloat(i[n]);
        e[l] = i[0], e[h] = i[1], e[C] = i[4], e[p] = i[2], e[g] = i[3], e[A] = i[5]
      }
      return this.m = e, this
    };
    var D = function(t) {
      return Math.abs(t) < 1e-4
    };
    I.decompose = function(t) {
      t = t || !1;
      for (var e = r.clone(this.m), i = s.create(), n = s.create(), a = s.create(), l = o.create(), u = o.create(), h = (s.create(), 0); h < 16; h++) e[h] /= e[O];
      var d = r.clone(e);
      d[f] = 0, d[b] = 0, d[S] = 0, d[O] = 1;
      var m = (e[3], e[7], e[11], e[12]),
        p = e[13],
        _ = e[14],
        g = (e[15], o.create());
      if (D(e[f]) && D(e[b]) && D(e[S])) l = o.fromValues(0, 0, 0, 1);
      else {
        g[0] = e[f], g[1] = e[b], g[2] = e[S], g[3] = e[O];
        var y = r.invert(r.create(), d),
          v = r.transpose(r.create(), y);
        l = o.transformMat4(l, g, v)
      }
      i[0] = m, i[1] = p, i[2] = _;
      var E = [s.create(), s.create(), s.create()];
      E[0][0] = e[0], E[0][1] = e[1], E[0][2] = e[2], E[1][0] = e[4], E[1][1] = e[5], E[1][2] = e[6], E[2][0] = e[8], E[2][1] = e[9], E[2][2] = e[10], n[0] = s.length(E[0]), s.normalize(E[0], E[0]), a[0] = s.dot(E[0], E[1]), E[1] = this._combine(E[1], E[0], 1, -a[0]), n[1] = s.length(E[1]), s.normalize(E[1], E[1]), a[0] /= n[1], a[1] = s.dot(E[0], E[2]), E[2] = this._combine(E[2], E[0], 1, -a[1]), a[2] = s.dot(E[1], E[2]), E[2] = this._combine(E[2], E[1], 1, -a[2]), n[2] = s.length(E[2]), s.normalize(E[2], E[2]), a[1] /= n[2], a[2] /= n[2];
      var w = s.cross(s.create(), E[1], E[2]);
      if (s.dot(E[0], w) < 0)
        for (h = 0; h < 3; h++) n[h] *= -1, E[h][0] *= -1, E[h][1] *= -1, E[h][2] *= -1;
      u[0] = .5 * Math.sqrt(Math.max(1 + E[0][0] - E[1][1] - E[2][2], 0)), u[1] = .5 * Math.sqrt(Math.max(1 - E[0][0] + E[1][1] - E[2][2], 0)), u[2] = .5 * Math.sqrt(Math.max(1 - E[0][0] - E[1][1] + E[2][2], 0)), u[3] = .5 * Math.sqrt(Math.max(1 + E[0][0] + E[1][1] + E[2][2], 0)), E[2][1] > E[1][2] && (u[0] = -u[0]), E[0][2] > E[2][0] && (u[1] = -u[1]), E[1][0] > E[0][1] && (u[2] = -u[2]);
      var T = o.fromValues(u[0], u[1], u[2], 2 * Math.acos(u[3])),
        C = this._rotationFromQuat(u);
      return t && (a[0] = Math.round(a[0] * c * 100) / 100, a[1] = Math.round(a[1] * c * 100) / 100, a[2] = Math.round(a[2] * c * 100) / 100, C[0] = Math.round(C[0] * c * 100) / 100, C[1] = Math.round(C[1] * c * 100) / 100, C[2] = Math.round(C[2] * c * 100) / 100, T[3] = Math.round(T[3] * c * 100) / 100), {
        translation: i,
        scale: n,
        skew: a,
        perspective: l,
        quaternion: u,
        eulerRotation: C,
        axisAngle: T
      }
    }, I.recompose = function(t, e, i, n, a) {
      t = t || s.create(), e = e || s.create(), i = i || s.create(), n = n || o.create(), a = a || o.create();
      var c = r.fromRotationTranslation(r.create(), a, t);
      c[f] = n[0], c[b] = n[1], c[S] = n[2], c[O] = n[3];
      var l = r.create();
      return 0 !== i[2] && (l[w] = i[2], r.multiply(c, c, l)), 0 !== i[1] && (l[w] = 0, l[E] = i[1], r.multiply(c, c, l)), i[0] && (l[E] = 0, l[4] = i[0], r.multiply(c, c, l)), r.scale(c, c, e), this.m = c, this
    }, I.isAffine = function() {
      return 0 === this.m[m] && 0 === this.m[f] && 0 === this.m[v] && 0 === this.m[b] && 0 === this.m[E] && 0 === this.m[w] && 1 === this.m[T] && 0 === this.m[S] && 0 === this.m[P] && 1 === this.m[O]
    }, I.toString = function() {
      var t = this.m;
      return this.isAffine() ? "matrix(" + t[u] + ", " + t[d] + ", " + t[_] + ", " + t[y] + ", " + t[x] + ", " + t[k] + ")" : "matrix3d(" + t[l] + ", " + t[h] + ", " + t[m] + ", " + t[f] + ", " + t[p] + ", " + t[g] + ", " + t[v] + ", " + t[b] + ", " + t[E] + ", " + t[w] + ", " + t[T] + ", " + t[S] + ", " + t[C] + ", " + t[A] + ", " + t[P] + ", " + t[O] + ")"
    }, I.toCSSString = I.toString, I._combine = function(t, e, i, n) {
      var r = s.create();
      return r[0] = i * t[0] + n * e[0], r[1] = i * t[1] + n * e[1], r[2] = i * t[2] + n * e[2], r
    }, I._matrix2dToMat4 = function(t) {
      for (var e = r.create(), i = 0; i < 4; i++)
        for (var n = 0; n < 4; n++) e[4 * i + n] = t[i][n];
      return e
    }, I._mat4ToMatrix2d = function(t) {
      for (var e = [], i = 0; i < 4; i++) {
        e[i] = [];
        for (var n = 0; n < 4; n++) e[i][n] = t[4 * i + n]
      }
      return e
    }, I._rotationFromQuat = function(t) {
      var e, i, n, r = t[3] * t[3],
        o = t[0] * t[0],
        a = t[1] * t[1],
        c = t[2] * t[2],
        l = o + a + c + r,
        u = t[0] * t[1] + t[2] * t[3];
      return u > .499 * l ? (i = 2 * Math.atan2(t[0], t[3]), n = Math.PI / 2, e = 0, s.fromValues(e, i, n)) : u < -.499 * l ? (i = -2 * Math.atan2(t[0], t[3]), n = -Math.PI / 2, e = 0, s.fromValues(e, i, n)) : (i = Math.atan2(2 * t[1] * t[3] - 2 * t[0] * t[2], o - a - c + r), n = Math.asin(2 * u / l), e = Math.atan2(2 * t[0] * t[3] - 2 * t[1] * t[2], -o + a - c + r), s.fromValues(e, i, n))
    }, e.exports = n
  }, {
    "./gl-matrix/mat4": 409,
    "./gl-matrix/vec3": 410,
    "./gl-matrix/vec4": 411
  }],
  409: [function(t, e, i) {
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
    "gl-mat4/clone": 524,
    "gl-mat4/create": 525,
    "gl-mat4/fromRotationTranslation": 526,
    "gl-mat4/identity": 527,
    "gl-mat4/invert": 528,
    "gl-mat4/multiply": 529,
    "gl-mat4/rotate": 530,
    "gl-mat4/rotateX": 531,
    "gl-mat4/rotateY": 532,
    "gl-mat4/rotateZ": 533,
    "gl-mat4/scale": 534,
    "gl-mat4/translate": 535,
    "gl-mat4/transpose": 536
  }],
  410: [function(t, e, i) {
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
    "gl-vec3/create": 537,
    "gl-vec3/cross": 538,
    "gl-vec3/dot": 539,
    "gl-vec3/fromValues": 540,
    "gl-vec3/length": 541,
    "gl-vec3/normalize": 542
  }],
  411: [function(t, e, i) {
    "use strict";
    var n = {
      create: t("gl-vec4/create"),
      transformMat4: t("gl-vec4/transformMat4"),
      fromValues: t("gl-vec4/fromValues")
    };
    e.exports = n
  }, {
    "gl-vec4/create": 543,
    "gl-vec4/fromValues": 544,
    "gl-vec4/transformMat4": 545
  }],
  412: [function(t, e, i) {
    "use strict";
    var n = t("qs");
    e.exports = function(t, e) {
      var i = n.stringify(t, {
        strictNullHandling: !0
      });
      return i && e !== !1 && (i = "?" + i), i
    }
  }, {
    qs: 546
  }],
  413: [function(t, e, i) {
    "use strict";
    var n = {
      ua: window.navigator.userAgent,
      platform: window.navigator.platform,
      vendor: window.navigator.vendor
    };
    e.exports = t("./parseUserAgent")(n)
  }, {
    "./parseUserAgent": 416
  }],
  414: [function(t, e, i) {
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
  415: [function(t, e, i) {
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
  416: [function(t, e, i) {
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
            var c = s.split(".");
            e.version.name = s, c && c.length > 0 && (e.version.major = parseInt(c[0] || 0), e.version.minor = parseInt(c[1] || 0), e.version.patch = parseInt(c[2] || 0))
          } else "edge" === n && (e.version.name = "12.0.0", e.version.major = "12", e.version.minor = "0", e.version.patch = "0");
          return "function" == typeof t[a].parseDocumentMode && (e.version.documentMode = t[a].parseDocumentMode()), e
        } return e
    }

    function o(t) {
      var e = {};
      return e.browser = s(c.browser, a.browser, t), e.os = s(c.os, a.os, t), e
    }
    var a = t("./defaults"),
      c = t("./dictionary");
    e.exports = o
  }, {
    "./defaults": 414,
    "./dictionary": 415
  }],
  417: [function(t, e, i) {
    arguments[4][284][0].apply(i, arguments)
  }, {
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance": 342,
    "@marcom/ac-raf-executor/sharedRAFExecutorInstance": 357,
    dup: 284
  }],
  418: [function(t, e, i) {
    arguments[4][285][0].apply(i, arguments)
  }, {
    "./SingleCallRAFEmitter": 420,
    dup: 285
  }],
  419: [function(t, e, i) {
    arguments[4][286][0].apply(i, arguments)
  }, {
    "./RAFInterface": 418,
    dup: 286
  }],
  420: [function(t, e, i) {
    arguments[4][287][0].apply(i, arguments)
  }, {
    "./RAFEmitter": 417,
    dup: 287
  }],
  421: [function(t, e, i) {
    "use strict";
    var n = t("./RAFInterfaceController");
    e.exports = n.cancelAnimationFrame("draw")
  }, {
    "./RAFInterfaceController": 419
  }],
  422: [function(t, e, i) {
    arguments[4][288][0].apply(i, arguments)
  }, {
    "./RAFInterfaceController": 419,
    dup: 288
  }],
  423: [function(t, e, i) {
    "use strict";
    var n = t("./player/Player");
    n.create = t("./player/factory/createPlayer"), e.exports = {
      Player: n
    }
  }, {
    "./player/Player": 427,
    "./player/factory/createPlayer": 430
  }],
  424: [function(t, e, i) {
    "use strict";
    var n = function(t) {
        this.el = t
      },
      r = n.prototype;
    r.on = function() {
      this.el.addEventListener.apply(this.el, arguments)
    }, r.off = function() {
      this.el.removeEventListener.apply(this.el, arguments)
    }, r.once = function(t, e) {
      var i = function() {
        e(), this.off(t, i)
      }.bind(this);
      this.on(t, i)
    }, r.trigger = function(t, e) {
      var i = new CustomEvent(t, e);
      this.el.dispatchEvent(i)
    }, e.exports = n
  }, {}],
  425: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      r = function() {
        n.call(this)
      },
      s = n.prototype;
    r.prototype = Object.create(s);
    var o = r.prototype;
    o.constructor = r, o.once = function(t, e, i) {
      if (i) {
        var n = function() {
          e.apply(i, arguments)
        };
        s.once.apply(this, [t, n])
      } else s.once.apply(this, arguments)
    }, o.on = function(t, e, i) {
      if (arguments.length > 2) {
        this._boundListeners || (this._boundListeners = {}), this._boundListeners[t] || (this._boundListeners[t] = []);
        var n = e.bind(i);
        return this._boundListeners[t].push([e, i, n]), s.on.call(this, t, n)
      }
      return s.on.apply(this, arguments)
    }, o.off = function(t, e, i) {
      if (!(arguments.length > 2)) return s.off.apply(this, arguments);
      try {
        for (var n = this._boundListeners[t], r = 0, o = n.length; r < o; r++)
          if (n[r][0] === e && n[r][1] === i) {
            var a = n.splice(r, 1)[0];
            return s.off.call(this, t, a[2])
          }
      } catch (c) {}
    }, o.destroy = function() {
      this._boundListeners = void 0, s.destroy.call(this)
    }, e.exports = r
  }, {
    "@marcom/ac-event-emitter-micro": 156
  }],
  426: [function(t, e, i) {
    "use strict";
    e.exports = t("./utils/urlOptimizer/OptimizeVideoUrl")
  }, {
    "./utils/urlOptimizer/OptimizeVideoUrl": 481
  }],
  427: [function(t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      r = t("../event-emitter-shim/EventEmitterShim"),
      s = t("../dom-emitter/DOMEmitterMicro"),
      o = t("../video/VideoFactory").create,
      a = t("@marcom/ac-useragent"),
      c = t("@marcom/ac-fullscreen"),
      l = t("../posterframe/PosterFrameFactory"),
      u = t("@marcom/ac-feature/isRetina")(),
      h = t("@marcom/ac-feature/isDesktop")(),
      d = t("@marcom/ac-feature/isHandheld")(),
      m = a.browser.safari && a.os.osx,
      f = a.browser.safari && a.os.ios,
      p = a.browser.chrome,
      _ = "user-hover",
      g = "mobile",
      y = "initial-play",
      v = "ac-video-live",
      b = "longform",
      E = t("../ui/DefaultBreakpoints"),
      w = t("@marcom/ac-console/log"),
      T = t("./event/EventsToForward"),
      S = t("./event/ReadyStateChangeEvents"),
      C = t("../utils/BreakpointDetect"),
      x = t("../ui/KeyboardControl"),
      A = t("@marcom/ac-accessibility/helpers/hide"),
      k = t("@marcom/ac-accessibility/helpers/show"),
      P = function(t) {
        t = t || {}, this.el = t.el || document.createElement("div"), this._elementEmitter = new s(this.el), this.options = t, r.call(this), this._controlsFactory = t.controlsFactory, this._urlOptimizer = t.urlOptimizer;
        try {
          var e = window.top;
          this._maxWidth = t.maxWidth || Math.min(window.innerWidth, 1280) || Math.min(e.innerWidth, 1280)
        } catch (i) {
          this._maxWidth = t.maxWidth || Math.min(window.innerWidth, 1280)
        }
        this._lastResize = 0, this._lastMouseCoords = {}, this.el.classList.add("ac-video-player"), this._isResponsive = t.responsive, this._isResponsive && (this._breakpointDetect = new C({
          el: this.el,
          player: this,
          breakpoints: E,
          addClass: !0
        })), this._isLive = t.live, this._isLive && this._useLiveMode(), this._videoImpl = o(t, this.el), this._supportsInlineVideo = h || !(d && f), this._cachedPiPMode = this.isPictureInPicture(), this._cachedReadyState = this.getReadyState(), this._cachedVisibleTracksLength = 0, this.el.appendChild(this._videoImpl.getMediaElement()), (t.poster || "undefined" == typeof t.poster) && this._initPoster(t.poster), this._bindMethods(), this._addEventListeners(), h && (this._keyboardControl = new x({
          player: this,
          keyboardTarget: t.keyboardTarget
        })), t.controls && this._initUIComponents(), t.parentElement && t.parentElement.appendChild(this.el), this.refreshSize = this.refreshSize.bind(this), setTimeout(this.refreshSize, 0), window.addEventListener("DOMContentLoaded", this.refreshSize)
      };
    P.LOADEDMETADATA = 1, P.LOADEDDATA = 2, P.CANPLAY = 3, P.CANPLAYTHROUGH = 4;
    var O = r.prototype;
    P.prototype = Object.create(O);
    var I = P.prototype;
    I.constructor = P, I._bindMethods = function() {
      this._onStart = this._onStart.bind(this), this._onEnded = this._onEnded.bind(this), this._onTimeUpdate = this._onTimeUpdate.bind(this), this._onCaptionsChanged = this._onCaptionsChanged.bind(this), this._onPlay = this._onPlay.bind(this), this._onFullscreenChange = this._onFullscreenChange.bind(this), this._forwardEvent = this._forwardEvent.bind(this), this._onPresentationModeChanged = this._onPresentationModeChanged.bind(this), this._forwardFullScreenChangeEvent = this._forwardNamedEvent.bind(this, "fullscreen:change"), this._forwardEnterFullScreenEvent = this._forwardNamedEvent.bind(this, "enterfullscreen"), this._forwardExitFullScreenEvent = this._forwardNamedEvent.bind(this, "exitfullscreen"), this._onDurationChange = this._onDurationChange.bind(this), this._forwardReadyStateChange = this._forwardReadyStateChange.bind(this), this._onFocusIn = this._onFocusIn.bind(this), this._onFocusOut = this._onFocusOut.bind(this), this._showControls = this._showControls.bind(this), this._hideControls = this._hideControls.bind(this), this._onClick = this._onClick.bind(this), this._onUserInteraction = this._onUserInteraction.bind(this), this._onMouseLeave = this._onMouseLeave.bind(this), this._onMouseOut = this._onMouseOut.bind(this), this._onPlayPromiseError = this._onPlayPromiseError.bind(this)
    }, I._addEventListeners = function() {
      for (var t = 0, e = T.length; t < e; t++) this._videoImpl.on(T[t], this._forwardEvent);
      for (t = 0, e = S.length; t < e; t++) this._videoImpl.on(S[t], this._forwardReadyStateChange);
      this._videoImpl.on("timeupdate", this._onTimeUpdate), this._videoImpl.on("webkitpresentationmodechanged", this._onPresentationModeChanged), this._videoImpl.on("durationchange", this._onDurationChange), this._videoImpl.on("addtrack", this._forwardEvent), this._videoImpl.on("change", this._forwardEvent), this._videoImpl.on("change", this._onCaptionsChanged), this._videoImpl.on("removetrack", this._forwardEvent), h ? (c.on("enterfullscreen", this._forwardEnterFullScreenEvent), c.on("exitfullscreen", this._forwardExitFullScreenEvent), c.on("enterfullscreen", this._forwardFullScreenChangeEvent), c.on("exitfullscreen", this._forwardFullScreenChangeEvent)) : f && (this._videoImpl.on("webkitbeginfullscreen", this._forwardEnterFullScreenEvent), this._videoImpl.on("webkitendfullscreen", this._forwardExitFullScreenEvent), this._videoImpl.on("webkitbeginfullscreen", this._forwardFullScreenChangeEvent), this._videoImpl.on("webkitendfullscreen", this._forwardFullScreenChangeEvent), d && this.on("fullscreen:change", this._onFullscreenChange)), this._videoImpl.on("PlayPromiseError", this._onPlayPromiseError), this._elementEmitter.on("focusin", this._onFocusIn), this._elementEmitter.on("focusout", this._onFocusOut), this.on("fullscreen:change", this._onFullscreenChange)
    }, I._removeEventListeners = function() {
      for (var t = 0, e = T.length; t < e; t++) this._videoImpl.off(T[t], this._forwardEvent);
      for (t = 0, e = S.length; t < e; t++) this._videoImpl.off(S[t], this._forwardReadyStateChange);
      this._videoImpl.off("timeupdate", this._onTimeUpdate), this._videoImpl.off("webkitpresentationmodechanged", this._onPresentationModeChanged), this._videoImpl.off("durationchange", this._onDurationChange), h ? (c.off("enterfullscreen", this._forwardEnterFullScreenEvent), c.off("exitfullscreen", this._forwardExitFullScreenEvent), c.off("enterfullscreen", this._forwardFullScreenChangeEvent), c.off("exitfullscreen", this._forwardFullScreenChangeEvent)) : a.os.ios && (this._videoImpl.off("webkitbeginfullscreen", this._forwardEnterFullScreenEvent), this._videoImpl.off("webkitendfullscreen", this._forwardExitFullScreenEvent), this._videoImpl.off("webkitbeginfullscreen", this._forwardFullScreenChangeEvent), this._videoImpl.off("webkitendfullscreen", this._forwardFullScreenChangeEvent)), this._elementEmitter.off("focusin", this._onFocusIn), this._elementEmitter.off("focusout", this._onFocusOut), this._elementEmitter.off("mouseenter", this._onUserInteraction), this.controls && (this.controls.el.removeEventListener("mousemove", this._onUserInteraction, !0), this.controls.el.removeEventListener("click", this._onUserInteraction, !0)), this._blockade && (this._blockade.off("mouseenter", this._onUserInteraction), this._blockade.off("mousemove", this._onUserInteraction), this._blockade.off("click", this._onUserInteraction), this._elementEmitter.off("click", this._onClick), "onmouseleave" in this.el ? this._blockade.off("mouseleave", this._onMouseLeave) : this._blockade.off("mouseout", this._onMouseOut), clearTimeout(this._userInteractionTimeout)), this._keyboardControl && this._keyboardControl.off("keyboardinteraction", this._onUserInteraction), this.off("fullscreen:change", this._onFullscreenChange), this._videoImpl.off("PlayPromiseError", this._onPlayPromiseError), clearTimeout(this._userInteractionTimeout)
    }, I._forwardReadyStateChange = function() {
      var t = this.getReadyState();
      (t > this._cachedReadyState || 0 === t) && (this._cachedReadyState = t, this.trigger("readystatechange", {
        readyState: t
      }))
    }, I._forwardEvent = function(t) {
      w(t.type + " time:" + this.getCurrentTime()), this.trigger(t.type)
    }, I._forwardNamedEvent = function(t) {
      w(t + " time:" + this.getCurrentTime()), this.trigger(t)
    }, I._onPlayPromiseError = function() {
      w("play() Promise rejected, probably because the browser is blocking autoplay"), this.el.classList.add(y), this._showStartState(), this.once("play", this._onPlay)
    }, I._onCaptionsChanged = function(t) {
      var e = this.getVisibleTextTracks().length;
      e > 0 && 0 === this._cachedVisibleTracksLength ? this.trigger("texttrackshow") : 0 === e && this._cachedVisibleTracksLength > 0 && this.trigger("texttrackhide"), this._cachedVisibleTracksLength = e
    }, I._onTimeUpdate = function() {
      this.trigger("timeupdate", {
        currentTime: this.getCurrentTime()
      })
    }, I.load = function(t, e, i, n) {
      if (this.refreshSize(), Array.isArray(t) || (t = [t]), e && !Array.isArray(e) && (e = [{
          src: e
        }]), this._cachedReadyState = 0, n || (n = this.options), this._urlOptimizer) {
        e || (e = t.map(this._urlOptimizer.getCaptionsSource).filter(function(t) {
          return !!t
        }));
        var r = this.getVisibleTextTracks();
        r && r.length && e && e.length && (e[0].mode = "showing");
        var s = n.maxWidth || this._calcMaxWidth();
        t = t.map(function(t) {
          return this._urlOptimizer.getVideoSource(t, s, null, {
            maxWidth: this._maxWidth
          })
        }.bind(this))
      }
      var o = n && n.thumbnails || this._urlOptimizer && this._urlOptimizer.getThumbnailImageSource(t[0]);
      this.once("play", this._onPlay), (this.options.autoplay && h || this.getEnded()) && this.once("loadstart", function() {
        this.play()
      }.bind(this)), n || (n = this.options), n && this.setPoster(n.poster), this._poster && this._poster.show(), this.controls && this.controls.sharingModule && (n.sharing ? this.controls.sharingModule.setData(n.sharing) : this.controls.sharingModule.setData(null)), void 0 !== n.live && (this._isLive = n.live, this._useLiveMode()), this._hideEndState(), this._videoImpl.load(t, e, i), this.controls && this.controls.overlays ? this.controls.overlays.setData(o) : this.controls && this.once("controlsready", function() {
        this.controls.overlays && this.controls.overlays.setData(o)
      }.bind(this)), this.controls && this.controls.endState ? this.controls.endState.setData(n.endState) : this.controls && this.once("controlsready", function() {
        this.controls.endState && this.controls.endState.setData(n.endState)
      }.bind(this))
    }, I._calcMaxWidth = function() {
      return this.el.parentElement ? this.el.parentElement.clientWidth : this._maxWidth
    }, I._isActiveArea = function(t) {
      for (; t !== this.el;) {
        if (t.hasAttribute("data-acv-active-area")) return !0;
        t = t.parentNode
      }
      return !1
    }, I._onPresentationModeChanged = function(t) {
      this._forwardEvent(t);
      var e = this.isPictureInPicture();
      this._cachedPiPMode !== e && (this._cachedPiPMode = e, w("pictureinpicture:change to " + e), this.trigger("pictureinpicture:change"))
    }, I._onDurationChange = function(t) {
      this.getDuration() > 3600 && this.el.classList.add(b)
    }, I.appendTo = function(t) {
      t.appendChild(this.el), this.refreshSize()
    }, I.getTextTracks = function() {
      return Array.prototype.slice.call(this._videoImpl.getTextTracks())
    }, I.getVisibleTextTracks = function() {
      var t = Array.prototype.slice.call(this._videoImpl.getTextTracks());
      return t && t.length && (t = t.filter(function(t) {
        return "showing" === t.mode
      })), t
    }, I.getFullScreenElement = function() {
      return h ? this.el : this.getMediaElement()
    }, I.getFullScreenEnabled = function() {
      return c.fullscreenEnabled(this.getFullScreenElement())
    }, I.isFullscreen = function() {
      return h ? c.fullscreenElement() === this.getFullScreenElement() : this._videoImpl.isFullscreen();
    }, I.requestFullscreen = function() {
      this.isFullscreen() || (this.controls && (this.controls.el.display = "none"), this._hideControls(), this.trigger("fullscreen:willenter", {
        type: "enter"
      }), this._lastResize = Date.now(), p ? setTimeout(function() {
        this._lastResize = Date.now(), c.requestFullscreen(this.getFullScreenElement())
      }.bind(this), 300) : c.requestFullscreen(this.getFullScreenElement()))
    }, I.exitFullscreen = function() {
      this.isFullscreen() && (this.controls && (this.controls.el.display = "none"), this._hideControls(), this.trigger("fullscreen:willexit", {
        type: "exit"
      }), p ? setTimeout(function() {
        c.exitFullscreen(this.getFullScreenElement())
      }.bind(this), 300) : c.exitFullscreen(this.getFullScreenElement()))
    }, I._onFullscreenChange = function() {
      this._lastResize = Date.now(), this.controls && (this.controls.el.display = ""), this._hideControls(), this._preventUserInteraction = !0, setTimeout(function() {
        this._preventUserInteraction = !1
      }.bind(this), 750)
    }, I.toggleFullscreen = function() {
      this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen()
    }, I._initUIComponents = function() {
      this._controlsFactory ? (this._instantiateDefaultCustomUIControls(), h ? this.el.appendChild(this._blockade.el) : (this.controls.el.classList.add(g), this.setControls(!0))) : this.setControls(!0)
    }, I._onFocusIn = function() {
      clearTimeout(this._focusOutTimer), this._focusOutTimer = null, this._hasFocus = !0, h && this._onUserInteraction()
    }, I._onFocusOut = function(t) {
      this._focusOutTimer = setTimeout(function() {
        this._hasFocus && !this.el.contains(document.activeElement) && (this._hasFocus = !1, this._hideControls())
      }.bind(this), 100)
    }, I._showControls = function() {
      this.el.classList.remove(y), this.el.classList.add(_)
    }, I._hideControls = function() {
      this.el.classList.remove(_)
    }, I._onControlsReady = function() {
      this.options.autoplay && h || this._showStartState()
    }, I._showStartState = function() {
      this.controls && this.controls.el.classList.add("start-state"), this._poster && this._poster.show(), h || A(this.getMediaElement())
    }, I._hideStartState = function() {
      this.controls && this.controls.el.classList.remove("start-state"), this._poster && this._poster.hide(), h || k(this.getMediaElement())
    }, I._showEndState = function() {
      this.controls && (this.controls.mainControlsElement ? this.controls.mainControlsElement.contains(document.activeElement) && this.controls.playButtonElement.focus() : this.el.contains(document.activeElement) && !this.controls.sharingModule.el.contains(document.activeElement) && this.controls.playButtonElement.focus(), this.controls.el.classList.add("end-state")), this._poster && this._poster.show(), A(this.getMediaElement())
    }, I._hideEndState = function() {
      this.controls && this.controls.el.classList.remove("end-state"), h || k(this.getMediaElement())
    }, I._instantiateDefaultCustomUIControls = function() {
      return this.controls = this._controlsFactory.create({
        player: this,
        endState: this.options.endState,
        basePath: this.options.localizationBasePath,
        template: this.options.template,
        readyCallback: function() {
          this.options.autoplay && h || this._showStartState(), this.trigger("controlsready")
        }.bind(this)
      }), this.controls.el.parentNode !== this.el && this.el.appendChild(this.controls.el), this._videoImpl.setControls(!1), this._blockade = new s(document.createElement("div")), this._blockade.el.classList.add("ac-video-blockade"), h && (this.controls.el.addEventListener("mousemove", this._onUserInteraction, !0), this.controls.el.addEventListener("click", this._onUserInteraction, !0), this._elementEmitter.on("click", this._onClick), "onmouseleave" in this.el ? this.controls.el.addEventListener("mouseleave", this._onMouseLeave) : this.controls.el.addEventListener("mouseout", this._onMouseOut, !0), this._keyboardControl && this._keyboardControl.on("keyboardinteraction", this._onUserInteraction)), this.controls
    }, I._onClick = function() {
      this._hasFocus = !1
    }, I._onMouseLeave = function(t) {
      window.clearTimeout(this._userInteractionTimeout), this._hideControls(), this._lastMouseCoords = {}
    }, I._onMouseOut = function(t) {
      this.controls.el.contains(t.target) || t.target === this.controls.el || this._onMouseLeave()
    }, I._onUserInteraction = function(t) {
      this.controls.el.classList.remove("hide-cursor"), !this.getCurrentSrc() || this._preventUserInteraction || t && this._lastMouseCoords.x === t.screenX && this._lastMouseCoords.y === t.screenY || (t && t.pageX && (this._lastMouseCoords = {
        x: t.screenX,
        y: t.screenY
      }), this._showControls(), window.clearTimeout(this._userInteractionTimeout), t && t.target && this._isActiveArea(t.target) || (this._userInteractionTimeout = window.setTimeout(function() {
        var t = this.getEnded();
        t || (this.controls.el.classList.add("hide-cursor"), this._hideControls())
      }.bind(this), this.options.controlsTimeoutDuration)))
    }, I._onPlay = function() {
      m ? this.once("timeupdate", this._onStart, function() {
        return this.getCurrentTime() > 0
      }.bind(this)) : this.once("timeupdate", this._onStart)
    }, I._onStart = function() {
      this.el.classList.add(y), this._poster && this._poster.hide(), this.controls && (this._hideStartState(), this._hideEndState()), this.once("ended", this._onEnded)
    }, I._onEnded = function() {
      this.isFullscreen() && this.exitFullscreen(), this.controls && (this._hideStartState(), this._showEndState()), this.once("timeupdate", this._onStart), this._poster && this._poster.show()
    }, I._initPoster = function(t) {
      this._poster = l({
        player: this,
        video: this._videoImpl,
        useNativePoster: this.options.controls === !1,
        is2x: u,
        src: t
      }), this._poster.el && this.el.appendChild(this._poster.el), this.options.autoplay || this._poster.show()
    }, I._useLiveMode = function() {
      this._isLive ? this.el.classList.add(v) : this.el.classList.remove(v)
    }, I.once = function(t, e, i) {
      if (arguments.length < 3 || "object" === ("undefined" == typeof i ? "undefined" : n(i))) O.once.apply(this, arguments);
      else {
        var r = arguments,
          s = Array.prototype.slice.call(arguments, 2),
          o = function() {
            s.every(function(t) {
              return !!t()
            }) && (r[1].apply(this, r), this.off(r[0], o))
          }.bind(this);
        this.on(r[0], o)
      }
    }, I.getMediaElement = function() {
      return this._videoImpl.getMediaElement()
    }, I.play = function() {
      w("play called"), this._videoImpl.play()
    }, I.pause = function() {
      this._videoImpl.pause()
    }, I.seek = function(t) {
      this.setCurrentTime.apply(this, arguments)
    }, I.addTextTrack = function(t) {
      this._videoImpl.addTextTrack(t)
    }, I.getReadyState = function() {
      return this._videoImpl.getMediaElement().readyState
    }, I.getPreload = function() {
      return this._videoImpl.getPreload()
    }, I.setPoster = function(t) {
      this._poster.setSrc(t)
    }, I.getVolume = function() {
      return this._videoImpl.getVolume()
    }, I.getMuted = function() {
      return this._videoImpl.getMuted()
    }, I.getCurrentTime = function() {
      return this._videoImpl.getCurrentTime()
    }, I.getDuration = function() {
      return this._videoImpl.getDuration()
    }, I.getPaused = function() {
      return this._videoImpl.getPaused()
    }, I.getEnded = function() {
      return this._videoImpl.getEnded()
    }, I.setCurrentTime = function(t) {
      return this._videoImpl.setCurrentTime(t)
    }, I.setVolume = function(t) {
      return this.trigger("uservolumechange"), this._videoImpl.setVolume(t)
    }, I.setMuted = function(t) {
      this.trigger("uservolumechange"), this._videoImpl.setMuted(t)
    }, I.setSrc = function(t) {
      this._videoImpl.setSrc(t)
    }, I.getCurrentSrc = function() {
      return this._videoImpl.getCurrentSrc()
    }, I.setControls = function(t) {
      return this._videoImpl.setControls(t)
    }, I.getMediaHeight = function() {
      return this._videoImpl.getMediaElement().videoHeight
    }, I.getMediaWidth = function() {
      return this._videoImpl.getMediaElement().videoWidth
    }, I.supportsPictureInPicture = function() {
      return this._videoImpl.supportsPictureInPicture()
    }, I.isPictureInPicture = function() {
      return this._videoImpl.isPictureInPicture()
    }, I.setPictureInPicture = function(t) {
      return this._videoImpl.setPictureInPicture(t)
    }, I.supportsAirPlay = function() {
      return this._videoImpl.supportsAirPlay()
    }, I.refreshSize = function() {
      this._breakpointDetect ? this._breakpointDetect.refresh() : (this._currentBreakpoint && this.el.classList.remove(this._currentBreakpoint.name), this._currentBreakpoint = C.getBreakpointFromElement(this.el, E), this.el.classList.add(this._currentBreakpoint.name))
    }, I.destroy = function() {
      this._removeEventListeners(), this._videoImpl.destroy(), this.controls && (this.controls.destroy(), this.controls = null), this._videoImpl = void 0, this.el.innerHTML = "", this._breakpointDetect && this._breakpointDetect.destroy(), r.prototype.destroy.call(this)
    }, e.exports = P
  }, {
    "../dom-emitter/DOMEmitterMicro": 424,
    "../event-emitter-shim/EventEmitterShim": 425,
    "../posterframe/PosterFrameFactory": 432,
    "../ui/DefaultBreakpoints": 441,
    "../ui/KeyboardControl": 443,
    "../utils/BreakpointDetect": 474,
    "../video/VideoFactory": 483,
    "./event/EventsToForward": 428,
    "./event/ReadyStateChangeEvents": 429,
    "@marcom/ac-accessibility/helpers/hide": 2,
    "@marcom/ac-accessibility/helpers/show": 5,
    "@marcom/ac-console/log": 67,
    "@marcom/ac-feature/isDesktop": 168,
    "@marcom/ac-feature/isHandheld": 169,
    "@marcom/ac-feature/isRetina": 170,
    "@marcom/ac-fullscreen": 215,
    "@marcom/ac-useragent": 413
  }],
  428: [function(t, e, i) {
    "use strict";
    e.exports = ["loadstart", "progress", "suspend", "abort", "error", "emptied", "stalled", "play", "pause", "loadedmetadata", "loadeddata", "waiting", "playing", "canplay", "canplaythrough", "seeking", "seeked", "ended", "ratechange", "durationchange", "volumechange", "addtrack", "change", "removetrack"]
  }, {}],
  429: [function(t, e, i) {
    "use strict";
    e.exports = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "waiting", "canplay", "canplaythrough"]
  }, {}],
  430: [function(t, e, i) {
    "use strict";
    var n = t("../Player"),
      r = t("@marcom/ac-feature/isDesktop")();
    e.exports = function(e) {
      e ? arguments.length > 1 && (e = Object.assign.apply(null, Array.prototype.slice.apply(arguments))) : e = {}, e.components || (e.components = t("../../ui/DefaultComponents")), "undefined" == typeof e.controls && (e.controls = !0), e.controlsImplementation || (e.controlsImplementation = t("../../ui/ControlBar")), e.controlsFactory || (e.controlsFactory = t("../../ui/ControlsFactory")({
        controlsImplementation: e.controlsImplementation,
        components: e.components,
        template: e.controlsTemplate
      })), ("undefined" != typeof e.urlOptimizer && e.urlOptimizer === !0 || "true" === e.urlOptimizer) && (e.urlOptimizer = t("../../optimizeVideoUrl")), e.sources || e.src ? e.sources = e.sources ? e.sources : e.src ? [e.src] : [] : e.sources = [], e.autoplay = void 0 !== e.autoplay ? e.autoplay : r, e.controlsTimeoutDuration || (e.controlsTimeoutDuration = 3e3);
      var i = new n(e),
        s = {};
      return e.sharing && (s.sharing = Object.assign({}, e.sharing)), e.thumbnails && (s.thumbnails = Object.assign({}, e.thumbnails)), e.endState && (s.endState = Object.assign({}, e.endState)), e.sources && e.sources.length && i.load(e.sources, e.textTracks, e.startTime, s), i
    }
  }, {
    "../../optimizeVideoUrl": 426,
    "../../ui/ControlBar": 439,
    "../../ui/ControlsFactory": 440,
    "../../ui/DefaultComponents": 442,
    "../Player": 427,
    "@marcom/ac-feature/isDesktop": 168
  }],
  431: [function(t, e, i) {
    "use strict";
    var n = "ac-video-poster",
      r = "ac-video-poster-hide",
      s = function(t) {
        this._defaultSrc = t.src, this._initialize(t)
      },
      o = s.prototype;
    o._initialize = function(t) {
      var e = t.src;
      this.el = t.el || document.createElement("div"), this._imgElement = document.createElement("img"), this._imgElement.src = e, this._currentSrc = e, this._imgElement.alt = "", this._imgElement.addEventListener("load", this._onLoad.bind(this)), this.el.appendChild(this._imgElement), this.hide(), this.el.classList.add(n)
    }, o.hide = function() {
      this.el.classList.add(r)
    }, o.show = function() {
      this.el.classList.remove(r)
    }, o.setSrc = function(t) {
      var e = t || this._defaultSrc;
      e !== this._currentSrc && (this._imgElement.style.display = "none", this._imgElement.src = e, this._currentSrc = e)
    }, o._onLoad = function() {
      this._imgElement.style.display = ""
    }, e.exports = s
  }, {}],
  432: [function(t, e, i) {
    "use strict";
    var n = t("./PosterFrame"),
      r = {
        "1x": "/ac/ac-video-posterframe/1.0/images/ac-video-poster_848x480.jpg",
        "2x": "/ac/ac-video-posterframe/1.0/images/ac-video-poster_848x480_2x.jpg"
      };
    e.exports = function(t) {
      if (t.src = t.src || (t.is2x ? r["2x"] : r["1x"]), t.useNativePoster) {
        t.video.setPoster(t.src);
        var e, i = !1;
        return {
          show: function() {
            i = !0, e && (t.video.setPoster(e), e = null)
          },
          hide: function() {
            i = !1
          },
          setSrc: function(n) {
            i ? t.video.setPoster(n) : e = n
          }
        }
      }
      return new n(t)
    }
  }, {
    "./PosterFrame": 431
  }],
  433: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-ajax-xhr"),
      r = t("@marcom/ac-function/throttle"),
      s = t("./parseVTT"),
      o = function(t, e) {
        this._view = t, this._video = e.video, this._refreshTracks = this._refreshTracks.bind(this), this._throttledRefreshCurrentCaption = r(this._refreshCurrentCaption.bind(this), 300), this._addTrackListeners()
      },
      a = o.prototype;
    a._addTrackListeners = function() {
      this._video.on("addtrack", this._refreshTracks), this._video.on("removetrack", this._refreshTracks), this._video.on("change", this._refreshTracks)
    }, a._addVideoListeners = function(t) {
      if (!t.cues) {
        this._view.setText("");
        try {
          return n.get(t.src, {
            complete: function(e) {
              t.cues = s(e.responseText), this._addVideoListeners(t), this._refreshCurrentCaption()
            }.bind(this),
            error: function(t) {}.bind(this)
          })
        } catch (e) {}
      }
      this._video.on("loadstart", this._refreshTracks), this._video.on("timeupdate", this._throttledRefreshCurrentCaption)
    }, a._removeVideoListeners = function() {
      this._video.off("loadstart", this._refreshTracks), this._video.off("timeupdate", this._throttledRefreshCurrentCaption)
    }, a._refreshTracks = function() {
      var t = this._video.getTextTracks();
      t && t.length && (t = t.filter(function(t) {
        return "showing" === t.mode
      })), t.length ? (this._activeTrack = t[0], this._addVideoListeners(this._activeTrack)) : (this._activeTrack = null, this._removeVideoListeners()), this._refreshCurrentCaption()
    }, a._getCurrentCaptionText = function(t) {
      var e = this._activeTrack ? this._activeTrack.cues : null;
      if (!e) return "";
      if (this._currentCaption && this._currentCaption.startTime >= t && this._currentCaption <= t) return this._currentCaption.text;
      for (var i, n = 0, r = e.length; n < r;) {
        if (e[n].startTime <= t && e[n].endTime >= t) i = e[n];
        else if (e[n].startTime >= t) break;
        n++
      }
      return this._currentCaption = i, i ? i.text : ""
    }, a._refreshCurrentCaption = function() {
      this._view.setText(this._getCurrentCaptionText(this._video.getCurrentTime()))
    }, a.destroy = function() {
      this._removeVideoListeners()
    }, e.exports = o
  }, {
    "./parseVTT": 438,
    "@marcom/ac-ajax-xhr": 8,
    "@marcom/ac-function/throttle": 224
  }],
  434: [function(t, e, i) {
    "use strict";
    var n = t("../ui/factory/createComponents"),
      r = t("./TextTracksBehavior"),
      s = t("../ui/elements/Label"),
      o = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      a = '<div class="ac-video-player-text-track"></div>',
      c = "is-visible",
      l = "ac-video-player-text-track-container",
      u = {
        textTracksPolyfill: {
          className: "ac-video-player-text-track",
          view: {
            classDef: s,
            options: {}
          },
          behavior: {
            classDef: r
          }
        }
      },
      h = function(t) {
        o.call(this), this.container = t.container, this._video = t.video, this._initialize(t)
      },
      d = h.prototype = Object.create(o.prototype);
    d._initialize = function(t) {
      this._onTrackChange = this._onTrackChange.bind(this), this.el = document.createElement("div"), this.el.innerHTML = t.template || a, this.el.classList.add(l), this._tracks = t.tracks || [], this._textTrackComponent = n(this.el, u, {
        video: this._video
      })
    }, d._onTrackChange = function() {
      this.trigger("change"), this.el.parentElement || (this._video.el.parentElement.appendChild(this.el), this.el.firstElementChild.classList.add(c))
    }, d.addTrack = function(t) {
      this._tracks || (this._tracks = []);
      var e = t.mode || "hidden",
        i = this._onTrackChange;
      Object.defineProperty(t, "mode", {
        get: function() {
          return e
        },
        set: function(t) {
          e = t, i()
        },
        enumerable: !0,
        configurable: !0
      }), this._tracks.push(t), this.trigger("addtrack")
    }, d.clearTracks = function() {
      this._tracks = [], this.trigger("removetrack"), this.trigger("change")
    }, d.getTextTracks = function() {
      return this._tracks
    }, d.trigger = function(t, e) {
      return o.prototype.trigger.call(this, t, Object.assign({
        type: t
      }, e || {}))
    }, d.destroy = function() {
      this._textTrackComponent.destroy(), o.prototype.destroy.call(this)
    }, e.exports = h
  }, {
    "../ui/elements/Label": 458,
    "../ui/factory/createComponents": 465,
    "./TextTracksBehavior": 433,
    "@marcom/ac-event-emitter-micro": 156
  }],
  435: [function(t, e, i) {
    "use strict";
    var n, r = t("@marcom/ac-useragent");
    n = r.browser.safari ? function(t, e) {
      t.track.mode = e
    } : function(t, e) {
      t.mode = e
    };
    var s = function(t) {
        var e;
        if (t instanceof HTMLElement) return this._videoElement.appendChild(t);
        var i = document.createElement("track");
        i.src = t.src, i.kind = "captions", i.srclang = t.srclang, "en" === i.srclang && (i.label = "English"), r.browser.firefox ? (e = this._videoElement.textTracks.length, setTimeout(function() {
          this._videoElement.appendChild(i), n(this._videoElement.textTracks[e], t.mode || "hidden")
        }.bind(this), 0)) : r.os.android ? (e = this._videoElement.textTracks.length, this._videoElement.appendChild(i), n(this._videoElement.textTracks[e], t.mode || "hidden")) : (this._videoElement.appendChild(i), n(i, t.mode || "hidden"))
      },
      o = function() {
        return this._videoElement.textTracks
      },
      a = function() {
        if (!this._textTracksEmitter) {
          var e = t("../dom-emitter/DOMEmitterMicro");
          this._textTracksEmitter = new e(this.getTextTracks())
        }
        return this._textTracksEmitter
      },
      c = function(t) {
        for (var e = 0, i = t ? t.length : 0; e < i; e++) {
          var n = t[e];
          s.call(this, n)
        }
      },
      l = function() {};
    e.exports = {
      create: c,
      add: s,
      get: o,
      getEmitter: a,
      destroy: l
    }
  }, {
    "../dom-emitter/DOMEmitterMicro": 424,
    "@marcom/ac-useragent": 413
  }],
  436: [function(t, e, i) {
    "use strict";
    var n = t("./TextTracksDOM"),
      r = function(t) {
        if (t)
          if (this._textTracksPolyfill) {
            this._textTracksPolyfill.clearTracks();
            for (var e = 0, i = t.length; e < i; e++) this._textTracksPolyfill.addTrack(t[e])
          } else this._textTracksPolyfill = new n({
            video: this,
            tracks: t,
            container: this._parentElement
          })
      },
      s = function(t) {
        return this._textTracksPolyfill.addTrack(t)
      },
      o = function() {
        return this._textTracksPolyfill || this._createTextTrackTags([]), this._textTracksPolyfill.getTextTracks()
      },
      a = function() {
        return this._textTracksPolyfill || this._createTextTrackTags([]), this._textTracksPolyfill
      },
      c = function() {
        this._textTracksPolyfill.destroy(), this._textTracksPolyfill = null
      };
    e.exports = {
      create: r,
      add: s,
      get: o,
      getEmitter: a,
      destroy: c
    }
  }, {
    "./TextTracksDOM": 434
  }],
  437: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-useragent"),
      r = !n.browser.ie && !n.browser.edge;
    e.exports = function(e) {
      e = e || {};
      var i = "undefined" == typeof e.useNativeCaptions ? r : e.useNativeCaptions;
      return t(i ? "./TextTracksNative" : "./TextTracksPolyfill")
    }
  }, {
    "./TextTracksNative": 435,
    "./TextTracksPolyfill": 436,
    "@marcom/ac-useragent": 413
  }],
  438: [function(t, e, i) {
    "use strict";
    var n = t("../utils/Time");
    e.exports = function(t) {
      var e, i, r = t.split(/\n/),
        s = /([\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3}( \-\-> ){1}([\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3}/,
        o = [],
        a = 0,
        c = r.length;
      for (a; a < c; a++)
        if (i = "", s.test(r[a])) {
          for (e = r[a].split(" --> "), e[0] = e[0].split(":").length < 3 ? "00:" + e[0] : e[0], e[1] = e[1].split(":").length < 3 ? "00:" + e[1] : e[1]; ++a && a < c && !s.test(r[a]);) "" !== r[a] && (i += r[a] + "<br />");
          i = i.substr(0, i.length - 6), a < c && a--, o.push({
            startTime: n.stringToNumber(e[0].split(" ")[0]),
            endTime: n.stringToNumber(e[1].split(" ")[0]),
            text: i
          })
        } return o
    }
  }, {
    "../utils/Time": 475
  }],
  439: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-string/supplant"),
      r = t("../utils/Time"),
      s = t("./localization/Localization"),
      o = t("./factory/createComponents"),
      a = "ac-video-controls",
      c = "control-bar-skin-default",
      l = t("@marcom/ac-feature/isDesktop")(),
      u = t("./overlays/OverlayContainer"),
      h = t("./end-state/EndStateItemContainer"),
      d = t("../utils/merge"),
      m = function(t) {
        this._initialize(t)
      },
      f = m.prototype;
    f._initialize = function(t) {
      this.el = t.element || document.createElement("div"), this._basePath = t.basePath, this.el.style.display = "none", this._template = t.template || '<div class="controls-container" >\n\n\t<div class="{elementClassPrefix}-social-tray hidden"></div>\n\n\t<div class="center-button-container {elementClassPrefix}-play-pause-button-container">\n\t\t<div class="button-wrapper">\n\t\t\t<button type="button" class="ac-video-icon centered-button {elementClassPrefix}-play-pause-button {elementClassPrefix}-button no-autoplay" value="{playpause}" aria-label="{playpause}" role="button" tabindex="0" data-acv-active-area></button>\n\t\t</div>\n\t</div>\n\n\t<div class="main-controls-container" >\n\t\t<div class="ac-video-overlay-container" ></div>\n\t\t<div class="main-controls">\n\t\t\t<div class="button-wrapper">\n\t\t\t\t<div class="main-controls-item controls-volume">\n\t\t\t\t\t<button type="button" class="ac-video-icon {elementClassPrefix}-toggle-mute-volume-button {elementClassPrefix}-button" value="{togglemutevolume}" aria-label="{togglemutevolume}" role="button" tabindex="0" data-acv-active-area></button>\n\t\t\t\t\t<div class="{elementClassPrefix}-volume-level-indicator" tabindex="0" aria-valuemin="0" aria-valuemax="100" min="0" max="100" aria-label="{adjustvolume}" role="slider" aria-orientation="vertical" step="0.05" data-acv-active-area></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="button-wrapper">\n\t\t\t\t<button type="button" class="ac-video-icon main-controls-item {elementClassPrefix}-text-tracks-toggle-button {elementClassPrefix}-button no-text-tracks" value="{captionscontrol}" aria-label="{captionscontrol}" role="button" tabindex="0" data-acv-active-area></button>\n\t\t\t</div>\n\n\t\t\t<div class="main-controls-item controls-progress">\n\t\t\t\t<div class="controls-progress-time controls-progress-time-1">\n\t\t\t\t\t<div class="{elementClassPrefix}-elapsed-time-indicator" role="text" tabindex="-1">\n\t\t\t\t\t\t<span class="label">{elapsed}</span>\n\t\t\t\t\t\t<span class="{elementClassPrefix}-elapsed-time">00:00</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="controls-progress-bar">\n\t\t\t\t\t<div class="{elementClassPrefix}-buffered-indicator"></div>\n\t\t\t\t\t<div class="{elementClassPrefix}-progress-indicator ac-slider-inactive" aria-label="progress-indicator" role="slider" precision="float" min="0" max="{max}" step="0.0005" value="0" tabindex="0" aria-valuemax="{max}" aria-valuemin="{min}" aria-valuenow="{value}" data-acv-active-area></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="controls-progress-time controls-progress-time-2">\n\t\t\t\t\t<div class="{elementClassPrefix}-remaining-time-indicator" role="text" tabindex="-1">\n\t\t\t\t\t\t<span class="label">{remaining}</span>\n\t\t\t\t\t\t<span class="{elementClassPrefix}-remaining-time">-00:00</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="main-controls-item live-stream">\n\t\t\t\t<span class="live-stream-text">{livestream}</span>\n\t\t\t</div>\n\n\t\t\t<div class="button-wrapper">\n\t\t\t\t<button type="button" class="ac-video-icon main-controls-item {elementClassPrefix}-airplay-button {elementClassPrefix}-button airplay-unsupported" value="{airplay}" aria-label="{airplay}" role="button" tabindex="0" data-acv-active-area></button>\n\t\t\t</div>\n\n\t\t\t<div class="button-wrapper">\n\t\t\t\t<button type="button" class="ac-video-icon main-controls-item {elementClassPrefix}-picture-in-picture-button {elementClassPrefix}-button picture-in-picture-unsupported" value="{pictureinpicture}" aria-label="{pictureinpicture}" role="button" tabindex="0" data-acv-active-area></button>\n\t\t\t</div>\n\n\t\t\t<div class="button-wrapper">\n\t\t\t\t<button type="button" class="ac-video-icon main-controls-item {elementClassPrefix}-full-screen-button {elementClassPrefix}-button fullscreen-unsupported" value="{fullscreen}" aria-label="{fullscreen}" role="button" tabindex="0" data-acv-active-area></button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class="end-state-wrapper">\n\t\t<div class="end-state-container"></div>\n\t</div>\n</div>\n', this._templateData = t.templateData || Object.assign({
        elementClassPrefix: "controls"
      }), this._destroyed = !1, this._localize().then(function() {
        this._destroyed || (this._initUIComponents(t), this.el.style.display = ""), "function" == typeof t.readyCallback && t.readyCallback()
      }.bind(this))
    }, f._localize = function() {
      return new Promise(function(t) {
        s.getTranslation({
          callback: function(e) {
            t(e)
          }.bind(this),
          basePath: this._basePath
        })
      }.bind(this)).then(function(t) {
        this._templateData = Object.assign(this._templateData, t)
      }.bind(this))
    }, f._renderTemplateMarkup = function() {
      var t = n(this._template, this._templateData);
      this.el.innerHTML = t
    }, f._initDesktopControls = function(t, e) {
      this._componentCollection = o(t, d(e, {
        elementClassPrefix: this._templateData.elementClassPrefix,
        elapsedTimeIndicator: {
          behavior: {
            observe: {
              source: this._player,
              events: ["timeupdate", "seeking", "seeked", "durationchange"],
              update: function(t) {
                t.setText(r.formatTime(this._player.getCurrentTime(), this._player.getDuration()))
              }.bind(this)
            }
          }
        },
        remainingTimeIndicator: {
          behavior: {
            observe: {
              source: this._player,
              events: ["timeupdate", "seeking", "seeked", "durationchange"],
              update: function(t) {
                t.setText(r.formatTime(this._player.getCurrentTime() - this._player.getDuration(), this._player.getDuration()))
              }.bind(this)
            }
          }
        },
        volumeLevel: {
          view: {
            options: {
              value: this._player.getMuted() ? 0 : 100 * this._player.getVolume()
            }
          }
        },
        playPauseContainer: {
          view: {
            options: {
              labels: {
                playing: this._templateData.pause,
                paused: this._templateData.play,
                ended: this._templateData.replay
              }
            }
          }
        },
        fullScreen: {
          view: {
            options: {
              labels: {
                initial: this._templateData.fullscreen,
                on: this._templateData.exitfullscreen,
                off: this._templateData.fullscreen
              }
            }
          }
        },
        pictureInPictureToggle: {
          view: {
            options: {
              labels: {
                initial: this._templateData.pictureinpicture,
                on: this._templateData.exitpictureinpicture,
                off: this._templateData.pictureinpicture
              }
            }
          }
        }
      }), {
        player: this._player,
        localization: this._templateData
      })
    }, f._initUIComponents = function(t) {
      this._player = t.player;
      var e = this.el,
        i = t.components;
      e.classList.add(t.className || a), this._renderTemplateMarkup();
      var n = e.querySelector(".main-controls-container");
      l ? (n.classList.add(c), this.mainControlsElement = n) : n.parentElement.removeChild(n);
      var r = e.querySelector(".end-state-container");
      this.endState = new h(Object.assign({}, {
        el: r,
        player: this._player
      }, t.endState)), this._initDesktopControls(e, i), this.sharingModule = this._componentCollection.components.socialShare[0].behavior.sharingModule, this._componentCollection.components.progressBar.length && (this.scrubberView = this._componentCollection.components.progressBar[0].view), this.playButtonElement = this.el.querySelector(".controls-play-pause-button"), l && (this.overlays = new u({
        el: this.el.querySelector(".ac-video-overlay-container"),
        player: this._player
      }))
    }, f._setVolume = function(t) {
      t && this._player.setMuted(!1), this._player.setVolume(t)
    }, f._thirySecondsBack = function() {
      var t = this._player.getCurrentTime(),
        e = t - 30;
      this._player.setCurrentTime(e < 0 ? 0 : e)
    }, f.destroy = function() {
      this._componentCollection && (this._componentCollection.destroy(), this._componentCollection = null), this._destroyed = !0, this._player = null, this._templateData = null
    }, e.exports = m
  }, {
    "../utils/Time": 475,
    "../utils/merge": 476,
    "./end-state/EndStateItemContainer": 463,
    "./factory/createComponents": 465,
    "./localization/Localization": 468,
    "./overlays/OverlayContainer": 470,
    "@marcom/ac-feature/isDesktop": 168,
    "@marcom/ac-string/supplant": 406
  }],
  440: [function(t, e, i) {
    "use strict";
    var n = {
        components: t("./DefaultComponents"),
        controlsImplementation: t("./ControlBar")
      },
      r = function(t) {
        t = t || {};
        var e = Object.assign({}, n, t);
        return {
          create: function(i) {
            var r = Object.assign({}, e, i);
            return r.components = t.components || n.components, new r.controlsImplementation(r)
          }
        }
      };
    e.exports = r
  }, {
    "./ControlBar": 439,
    "./DefaultComponents": 442
  }],
  441: [function(t, e, i) {
    "use strict";
    e.exports = [{
      name: "small",
      minWidth: 0,
      maxWidth: 479
    }, {
      name: "medium",
      minWidth: 480,
      maxWidth: 779
    }, {
      name: "large",
      minWidth: 780,
      maxWidth: 1 / 0
    }]
  }, {}],
  442: [function(t, e, i) {
    "use strict";
    var n = t("./elements/Button"),
      r = t("./elements/StatefulButton"),
      s = t("./elements/Label"),
      o = t("./elements/Slider"),
      a = t("./elements/Container"),
      c = t("./behaviors/MuteButtonBehavior"),
      l = t("./behaviors/PlayPauseButtonBehavior"),
      u = t("./behaviors/PictureInPictureButtonBehavior"),
      h = t("./behaviors/CaptionsButtonBehavior"),
      d = t("./behaviors/FullScreenButtonBehavior"),
      m = t("./behaviors/ProgressBarSliderBehavior"),
      f = t("./behaviors/VolumeSliderBehavior"),
      p = t("./behaviors/SharingButtonBehavior"),
      _ = t("./behaviors/SocialContainerBehavior"),
      g = t("./behaviors/AirPlayButtonBehavior"),
      y = t("./elements/mixins/CursorPointer");
    e.exports = {
      back30Seconds: {
        className: "back-30-seconds-button",
        view: {
          classDef: n
        }
      },
      fullScreen: {
        className: "full-screen-button",
        view: {
          classDef: r,
          options: {
            states: {
              initial: "fullscreen-unsupported",
              on: "is-fullscreen",
              off: ""
            },
            labels: {
              initial: "fullscreen",
              on: "exitfullscreen",
              off: "fullscreen"
            }
          }
        },
        behavior: {
          classDef: d
        }
      },
      toggleMuteVolume: {
        className: "toggle-mute-volume-button",
        view: {
          classDef: r,
          options: {
            states: {
              initial: [],
              on: ["is-muted"],
              off: []
            }
          }
        },
        behavior: {
          classDef: c
        }
      },
      playPauseContainer: {
        className: "play-pause-button-container",
        view: {
          classDef: r,
          options: {
            states: {
              playing: ["is-playing"],
              paused: [],
              ended: ["is-ended"]
            }
          }
        },
        behavior: {
          classDef: l
        }
      },
      pictureInPictureToggle: {
        className: "picture-in-picture-button",
        view: {
          classDef: r,
          options: {
            states: {
              initial: ["picture-in-picture-unsupported"],
              on: ["is-picture-in-picture"],
              off: []
            },
            labels: {
              initial: "pictureinpicture",
              on: "exitpictureinpicture",
              off: "pictureinpicture"
            }
          }
        },
        behavior: {
          classDef: u
        }
      },
      captionsToggle: {
        className: "text-tracks-toggle-button",
        view: {
          classDef: r,
          options: {
            states: {
              initial: ["no-text-tracks"],
              on: ["text-tracks-visible"],
              off: []
            }
          }
        },
        behavior: {
          classDef: h
        }
      },
      airplayToggle: {
        className: "airplay-button",
        view: {
          classDef: r,
          options: {
            states: {
              initial: ["airplay-unsupported"],
              on: ["airplay-active"],
              off: []
            }
          }
        },
        behavior: {
          classDef: g
        }
      },
      elapsedTimeIndicator: {
        className: "elapsed-time",
        view: {
          classDef: s
        }
      },
      remainingTimeIndicator: {
        className: "remaining-time",
        view: {
          classDef: s
        }
      },
      progressBar: {
        className: "progress-indicator",
        view: {
          classDef: o,
          options: {
            template: '<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-hover-track">\n\t\t<div class="ac-slider-hover-notch"></div>\n\t</div>\n\t<div class="ac-slider-thumb">\n\t\t<div class="ac-slider-thumb-background-wrapper">\n\t\t\t<div class="ac-slider-thumb-background"></div>\n\t\t</div>\n\t</div>\n\t<div class="ac-slider-inner-track">\n\t\t<div class="ac-slider-scrubbed"></div>\n\t</div>\n</div>',
            min: 0,
            max: 1,
            mixins: [y],
            orientation: "horizontal"
          }
        },
        behavior: {
          classDef: m
        }
      },
      volumeLevel: {
        className: "volume-level-indicator",
        view: {
          classDef: o,
          options: {
            template: '<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-background"></div>\n\t<div class="ac-slider-thumb-wrapper">\n\t\t<div class="ac-slider-thumb">\n\t\t\t<div class="ac-slider-thumb-background-wrapper">\n\t\t\t\t<div class="ac-slider-thumb-background"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="ac-slider-inner-track">\n\t\t<div class="ac-slider-scrubbed"></div>\n\t</div>\n</div>',
            min: 0,
            max: 100,
            mixins: [y],
            orientation: "vertical"
          }
        },
        behavior: {
          classDef: f
        }
      },
      sharing: {
        className: "sharing-button",
        view: {
          classDef: r,
          options: {
            states: {
              initial: ["sharing-unsupported"],
              on: ["is-sharing"],
              off: []
            }
          }
        },
        behavior: {
          classDef: p
        }
      },
      socialShare: {
        className: "social-tray",
        view: {
          classDef: a,
          options: {}
        },
        behavior: {
          classDef: _
        }
      }
    }
  }, {
    "./behaviors/AirPlayButtonBehavior": 444,
    "./behaviors/CaptionsButtonBehavior": 447,
    "./behaviors/FullScreenButtonBehavior": 448,
    "./behaviors/MuteButtonBehavior": 449,
    "./behaviors/PictureInPictureButtonBehavior": 450,
    "./behaviors/PlayPauseButtonBehavior": 451,
    "./behaviors/ProgressBarSliderBehavior": 452,
    "./behaviors/SharingButtonBehavior": 453,
    "./behaviors/SocialContainerBehavior": 454,
    "./behaviors/VolumeSliderBehavior": 455,
    "./elements/Button": 456,
    "./elements/Container": 457,
    "./elements/Label": 458,
    "./elements/Slider": 459,
    "./elements/StatefulButton": 460,
    "./elements/mixins/CursorPointer": 461
  }],
  443: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-keyboard/Keyboard"),
      r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      s = 32,
      o = 37,
      a = 38,
      c = 39,
      l = 40,
      u = function(t) {
        r.call(this), this._player = t.player, this._target = t.keyboardTarget || this._player.el, this._keyboard = new n(this._target), this._addEventListeners()
      },
      h = r.prototype,
      d = u.prototype = Object.create(h);
    d._addEventListeners = function() {
      this._onLeftArrow = this._onLeftArrow.bind(this), this._onRightArrow = this._onRightArrow.bind(this), this._onUpArrow = this._onUpArrow.bind(this), this._onDownArrow = this._onDownArrow.bind(this), this._onSpaceBarUp = this._onSpaceBarUp.bind(this), this._onSpaceBarDown = this._onSpaceBarDown.bind(this), this._onKeyboardInteraction = this._onKeyboardInteraction.bind(this), this._onDurationChange = this._onDurationChange.bind(this), this._boundKeyboardInteraction = {}, [s, o, c, a, l].forEach(function(t) {
        this._boundKeyboardInteraction[t] = this._onKeyboardInteraction.bind(this, t), this._keyboard.onDown(t, this._boundKeyboardInteraction[t])
      }.bind(this)), this._keyboard.onDown(s, this._onSpaceBarDown), this._keyboard.onDown(o, this._onLeftArrow), this._keyboard.onDown(c, this._onRightArrow), this._keyboard.onDown(a, this._onUpArrow), this._keyboard.onDown(l, this._onDownArrow), this._player.on("durationchange", this._onDurationChange)
    }, d._onKeyboardInteraction = function() {
      this.trigger("keyboardinteraction")
    }, d._onDurationChange = function() {
      var t = this._player.getDuration();
      t >= 60 ? this._interval = 10 : t >= 20 ? this._interval = 5 : this._interval = 1
    }, d._onLeftArrow = function(t) {
      t.originalEvent.preventDefault(), t.originalEvent.stopPropagation();
      var e = this._player.getCurrentTime();
      isNaN(e) || this._player.seek(Math.max(e - this._interval, 0))
    }, d._onRightArrow = function(t) {
      t.originalEvent.preventDefault(), t.originalEvent.stopPropagation();
      var e = this._player.getCurrentTime();
      isNaN(e) || this._player.seek(Math.min(e + this._interval, this._player.getDuration()))
    }, d._onUpArrow = function(t) {
      t.originalEvent.preventDefault(), t.originalEvent.stopPropagation();
      var e = this._player.getMuted() ? 0 : this._player.getVolume(),
        i = Math.min(1, e + .1);
      this._player.setVolume(i), this._player.setMuted(!1)
    }, d._onDownArrow = function(t) {
      t.originalEvent.preventDefault(), t.originalEvent.stopPropagation();
      var e = this._player.getMuted() ? 0 : this._player.getVolume(),
        i = Math.max(0, e - .1);
      this._player.setVolume(i), this._player.setMuted(0 === Math.round(10 * i))
    }, d._onSpaceBarDown = function(t) {
      "BUTTON" !== t.target.tagName && (this._keyboard.offDown(s, this._onSpaceBarDown), this._keyboard.onUp(s, this._onSpaceBarUp))
    }, d._onSpaceBarUp = function() {
      this._keyboard.offUp(s, this._onSpaceBarUp), this._player.getPaused() ? this._player.play() : this._player.pause(), this._keyboard.onDown(s, this._onSpaceBarDown)
    }, d.destroy = function() {
      [s, o, c, a, l].forEach(function(t) {
        this._keyboard.offDown(t, this._boundKeyboardInteraction[t])
      }.bind(this)), this._boundKeyboardInteraction = null, this._keyboard.offDown(s, this._onSpaceBarDown), this._keyboard.offUp(s, this._onSpaceBarUp), this._keyboard.offDown(o, this._onLeftArrow), this._keyboard.offDown(c, this._onRightArrow), this._keyboard.offDown(a, this._onUpArrow), this._keyboard.offDown(l, this._onDownArrow), this._player.off("durationchange", this._onDurationChange), this._keyboard.destroy(), h.destroy.call(this)
    }, e.exports = u
  }, {
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-keyboard/Keyboard": 261
  }],
  444: [function(t, e, i) {
    "use strict";
    var n = t("./ButtonBehavior"),
      r = function(t, e) {
        n.apply(this, arguments), this._player.supportsAirPlay() && (this._airplayStateChange = this._airplayStateChange.bind(this), this._player.getMediaElement().addEventListener("webkitplaybacktargetavailabilitychanged", this._airplayStateChange), this._updateState = this._updateState.bind(this), this._player.getMediaElement().addEventListener("webkitcurrentplaybacktargetiswirelesschanged", this._updateState))
      },
      s = n.prototype,
      o = r.prototype = Object.create(s);
    o._airplayStateChange = function(t) {
      "available" === t.availability ? this._airplayAvailable = !0 : this._airplayAvailable = !1, this._updateState()
    }, o._updateState = function() {
      this._player.getMediaElement().webkitCurrentPlaybackTargetIsWireless ? this._view.setState("on") : this._airplayAvailable ? this._view.setState("off") : this._view.setState("initial")
    }, o._onClick = function() {
      this._player.getMediaElement().webkitShowPlaybackTargetPicker()
    }, o.destroy = function() {
      this._player.getMediaElement().removeEventListener("webkitplaybacktargetavailabilitychanged", this._airplayStateChange), this._player.getMediaElement().removeEventListener("webkitcurrentplaybacktargetiswirelesschanged", this._updateState)
    }, e.exports = r
  }, {
    "./ButtonBehavior": 446
  }],
  445: [function(t, e, i) {
    "use strict";
    var n = function(t, e) {
      this._player = e.player, this._view = t, this._addViewListeners && this._addViewListeners(), this._addPlayerListeners && this._addPlayerListeners()
    };
    e.exports = n
  }, {}],
  446: [function(t, e, i) {
    "use strict";
    var n = t("./BaseBehavior"),
      r = function(t, e) {
        this._onClick = this._onClick.bind(this), n.apply(this, arguments)
      },
      s = r.prototype = Object.create(n.prototype);
    s._addViewListeners = function() {
      this._view.on("click", this._onClick)
    }, s._clickHandler = function(t) {
      t.preventDefault(), this._onClick(t)
    }, s._onClick = function(t) {}, s.destroy = function() {
      this._view.off("click", this._onClick)
    }, e.exports = r
  }, {
    "./BaseBehavior": 445
  }],
  447: [function(t, e, i) {
    "use strict";
    var n = t("./ButtonBehavior"),
      r = function(t, e) {
        n.apply(this, arguments), this._updateState()
      },
      s = n.prototype,
      o = r.prototype = Object.create(s);
    o._updateState = function() {
      var t = this._player.getVisibleTextTracks(),
        e = this._player.getTextTracks();
      t.length ? this._view.setState("on") : e.length ? this._view.setState("off") : this._view.setState("initial")
    }, o._addPlayerListeners = function() {
      this._updateState = this._updateState.bind(this), this._player.on("addtrack", this._updateState), this._player.on("change", this._updateState), this._player.on("removetrack", this._updateState)
    }, o._onClick = function() {
      var t = this._player.getVisibleTextTracks(),
        e = this._player.getTextTracks();
      t.length ? e[0].mode = "hidden" : e[0].mode = "showing"
    }, o.destroy = function() {
      this._player.off("addtrack", this._updateState), this._player.off("change", this._updateState), this._player.off("removetrack", this._updateState), s.destroy.call(this)
    }, e.exports = r
  }, {
    "./ButtonBehavior": 446
  }],
  448: [function(t, e, i) {
    "use strict";
    var n = t("./ButtonBehavior"),
      r = function(t, e) {
        n.apply(this, arguments), this._player.getFullScreenEnabled() && this._updateState()
      },
      s = n.prototype,
      o = r.prototype = Object.create(s);
    o._addPlayerListeners = function() {
      this._updateState = this._updateState.bind(this), this._player.on("fullscreen:change", this._updateState)
    }, o._updateState = function() {
      this._view.setState(this._player.isFullscreen() ? "on" : "off")
    }, o._onClick = function() {
      this._player.toggleFullscreen(!this._player.isFullscreen())
    }, o.destroy = function() {
      this._player.off("fullscreen:change", this._updateState), s.destroy.call(this)
    }, e.exports = r
  }, {
    "./ButtonBehavior": 446
  }],
  449: [function(t, e, i) {
    "use strict";
    var n = t("./ButtonBehavior"),
      r = function(t, e) {
        n.apply(this, arguments), this._updateState()
      },
      s = n.prototype,
      o = r.prototype = Object.create(s);
    o._updateState = function() {
      this._view.setState(this._player.getMuted() ? "on" : "off")
    }, o._addPlayerListeners = function() {
      this._updateState = this._updateState.bind(this), this._player.on("volumechange", this._updateState)
    }, o._onClick = function() {
      this._player.getMuted() ? (this._player.setMuted(!1), 0 === this._player.getVolume() && this._player.setVolume(.1)) : this._player.setMuted(!0)
    }, o.destroy = function() {
      this._player.off("volumechange", this._updateState), s.destroy.call(this)
    }, e.exports = r
  }, {
    "./ButtonBehavior": 446
  }],
  450: [function(t, e, i) {
    "use strict";
    var n = t("./ButtonBehavior"),
      r = function(t, e) {
        n.apply(this, arguments), this._initialize()
      },
      s = n.prototype,
      o = r.prototype = Object.create(s);
    o._initialize = function() {
      this._updateButtonState = this._updateButtonState.bind(this), this._player.supportsPictureInPicture() && (this._updateButtonState(), this._player.on("webkitpresentationmodechanged", this._updateButtonState))
    }, o._onClick = function() {
      this._player.setPictureInPicture(!this._player.isPictureInPicture())
    }, o._updateButtonState = function() {
      this._view.setState(this._player.isPictureInPicture() ? "on" : "off")
    }, o.destroy = function() {
      this._player.off("webkitpresentationmodechanged", this._updateButtonState), s.destroy.call(this)
    }, e.exports = r
  }, {
    "./ButtonBehavior": 446
  }],
  451: [function(t, e, i) {
    "use strict";
    var n = t("./ButtonBehavior"),
      r = function(t, e) {
        n.apply(this, arguments), this._setPlayingState()
      },
      s = n.prototype,
      o = r.prototype = Object.create(s);
    o._addPlayerListeners = function() {
      this._setPlayingState = this._setPlayingState.bind(this), this._player.on("play", this._setPlayingState), this._player.on("playing", this._setPlayingState), this._player.on("pause", this._setPlayingState), this._player.on("ended", this._setPlayingState)
    }, o._onClick = function() {
      this._togglePlay()
    }, o._setPlayingState = function() {
      this._view.setState(this._player.getEnded() ? "ended" : this._player.getPaused() ? "paused" : "playing")
    }, o._togglePlay = function() {
      this._player.getPaused() || this._player.getEnded() ? this._player.play() : this._player.pause()
    }, o.destroy = function() {
      this._player.off("play", this._setPlayingState), this._player.off("pause", this._setPlayingState), this._player.off("playing", this._setPlayingState), this._player.off("ended", this._setPlayingState), s.destroy.call(this)
    }, e.exports = r
  }, {
    "./ButtonBehavior": 446
  }],
  452: [function(t, e, i) {
    "use strict";
    var n = t("./BaseBehavior"),
      r = t("@marcom/ac-string/supplant"),
      s = "is-playing",
      o = t("@marcom/ac-raf-emitter/draw"),
      a = t("@marcom/ac-raf-emitter/cancelDraw"),
      c = function(t, e) {
        n.apply(this, arguments), this._visible = !1, this._ariaTextTemplate = e.localization.currenttimetext, this._onDurationChange()
      },
      l = c.prototype = Object.create(n.prototype);
    l._addViewListeners = function() {
      this._onSliderGrab = this._onSliderGrab.bind(this), this._onSliderChange = this._onSliderChange.bind(this), this._onSliderRelease = this._onSliderRelease.bind(this), this._view.on("grab", this._onSliderGrab)
    }, l._addPlayerListeners = function() {
      this._onTimeUpdate = this._onTimeUpdate.bind(this), this._onPlay = this._onPlay.bind(this), this._onPause = this._onPause.bind(this), this._onEnded = this._onEnded.bind(this), this._onDurationChange = this._onDurationChange.bind(this), this._onRAF = this._onRAF.bind(this), this._player.on("durationchange", this._onDurationChange), this._player.on("loadstart", this._onEnded), this._player.on("ended", this._onEnded), this._player.on("timeupdate", this._onTimeUpdate), this._player.on("play", this._onPlay), this._player.on("pause", this._onPause), this._player.on("ended", this._onEnded)
    }, l._setIsPlaying = function(t) {
      t ? this._view.setState(s) : this._view.clearState(s)
    }, l._onPlay = function() {
      this._setIsPlaying(!0), a(this._timeUpdateInterval), o(this._onRAF)
    }, l._onRAF = function() {
      this._onTimeUpdate(), this._timeUpdateInterval = o(this._onRAF)
    }, l._onPause = function() {
      this._setIsPlaying(!1), a(this._timeUpdateInterval), this._onTimeUpdate()
    }, l._onEnded = function() {
      this._onPause(), this._updateSliderPosition(0)
    }, l._onSliderGrab = function() {
      this._player.off("timeupdate", this._onTimeUpdate), a(this._timeUpdateInterval), this._view.off("grab", this._onSliderGrab), this._view.on("change", this._onSliderChange), this._view.on("release", this._onSliderRelease), this._onPause()
    }, l._onSliderRelease = function() {
      this._view.off("change", this._onSliderChange), this._view.off("release", this._onSliderRelease), this._view.on("grab", this._onSliderGrab), this._player.on("timeupdate", this._onTimeUpdate), this._player.getPaused() || this._onPlay()
    }, l._getTimeAsPercent = function() {
      return this._player.getCurrentTime() / this._cachedDuration
    }, l._onDurationChange = function() {
      this._cachedDuration = this._player.getDuration(), this._updateSliderPosition(this._getTimeAsPercent()), this._player.getPaused() || this._onPlay()
    }, l._onSliderChange = function() {
      var t = this._view.getValue();
      this._setPlayerCurrentTime(t * this._cachedDuration), this._setAriaValueText(t * this._cachedDuration), this._updateScrubbedValue()
    }, l._onTimeUpdate = function() {
      this._player.getPaused() ? this._updateSliderPosition(this._getTimeAsPercent()) : this._updateSliderPosition(this._getTimeAsPercent())
    }, l._updateSliderPosition = function(t) {
      this._view.setValue(t), this._setAriaValueText(t * this._cachedDuration), this._updateScrubbedValue(), this._visible || isNaN(this._cachedDuration) || (this._view.show(), this._visible = !0)
    }, l._setAriaValueText = function(t) {
      var e = Math.floor(t / 60),
        i = Math.ceil(t % 60);
      this._view.setAriaValueText(r(this._ariaTextTemplate, {
        minutes: e,
        seconds: i
      }))
    }, l._updateScrubbedValue = function() {
      this._view.setScrubbedValue()
    }, l._setPlayerCurrentTime = function(t) {
      this._player.setCurrentTime(t)
    }, l._removeEventListeners = function() {
      this._player.off("durationchange", this._onDurationChange), this._player.off("loadstart", this._onEnded), this._player.off("ended", this._onEnded), this._player.off("timeupdate", this._onTimeUpdate), this._view.off("change", this._onSliderChange), this._view.off("release", this._onSliderRelease), this._view.off("grab", this._onSliderGrab), this._player.off("play", this._onPlay), this._player.off("pause", this._onPause), this._player.off("ended", this._onPause)
    }, l.destroy = function() {
      this._removeEventListeners(), a(this._timeUpdateInterval)
    }, e.exports = c
  }, {
    "./BaseBehavior": 445,
    "@marcom/ac-raf-emitter/cancelDraw": 421,
    "@marcom/ac-raf-emitter/draw": 422,
    "@marcom/ac-string/supplant": 406
  }],
  453: [function(t, e, i) {
    "use strict";
    var n = t("./ButtonBehavior"),
      r = function(t, e) {
        n.apply(this, arguments), this._player.states && this._updateState()
      },
      s = n.prototype,
      o = r.prototype = Object.create(s);
    o._addPlayerListeners = function() {
      this._updateState = this._updateState.bind(this), this._player.states && this._player.states.on("statechange", this._updateState)
    }, o._updateState = function() {
      this._stateChanging = !1, this._view.setState("sharing" === this._player.states.getCurrentState() ? "on" : "off")
    }, o._onClick = function() {
      this._stateChanging || ("sharing" === this._player.states.getCurrentState() ? (this._view.setState("off"), this._player.states.setState("none")) : (this._view.setState("on"), this._player.states.setState("sharing")), this._stateChanging = !0)
    }, o.destroy = function() {
      this._player.states && this._player.states.off("statechange", this._updateState), s.destroy.call(this)
    }, e.exports = r
  }, {
    "./ButtonBehavior": 446
  }],
  454: [function(t, e, i) {
    "use strict";
    var n = t("./BaseBehavior"),
      r = t("../sharing/SharingModule"),
      s = function(t, e) {
        n.apply(this, arguments), this._updateState()
      },
      o = n.prototype,
      a = s.prototype = Object.create(o);
    a._updateState = function() {
      this.sharingModule = new r(Object.assign({}, {
        player: this._player,
        parentView: this._view
      })), this.sharingModule.setData(this._player.options.sharing), this._view.el.innerHTML = "", this._view.el.appendChild(this.sharingModule.el)
    }, e.exports = s
  }, {
    "../sharing/SharingModule": 473,
    "./BaseBehavior": 445
  }],
  455: [function(t, e, i) {
    "use strict";
    var n = t("./BaseBehavior"),
      r = function(t, e) {
        n.apply(this, arguments), this._hideVolume(), this._updateSliderVolumeValue()
      },
      s = r.prototype = Object.create(n.prototype);
    s._addViewListeners = function() {
      this._showVolume = this._showVolume.bind(this), this._hideVolume = this._hideVolume.bind(this), this._onSliderGrab = this._onSliderGrab.bind(this), this._onSliderChange = this._onSliderChange.bind(this), this._onSliderRelease = this._onSliderRelease.bind(this), this._onFocusChange = this._onFocusChange.bind(this), this._view.on("grab", this._onSliderGrab), this._view.on("focuschange", this._onFocusChange)
    }, s._addPlayerListeners = function() {
      this._updateSliderVolumeValue = this._updateSliderVolumeValue.bind(this), this._onUserVolumeChange = this._onUserVolumeChange.bind(this), this._player.once("durationchange", this._updateSliderVolumeValue), this._player.on("volumechange", this._updateSliderVolumeValue), this._player.on("uservolumechange", this._onUserVolumeChange)
    }, s._onSliderGrab = function() {
      this._cachedVolume = this._player.getVolume(), this._player.off("volumechange", this._updateSliderVolumeValue), this._view.off("grab", this._onSliderGrab), this._view.on("change", this._onSliderChange), this._view.on("release", this._onSliderRelease)
    }, s._onSliderRelease = function() {
      this._setPlayerVolume(this._view.getValue()), this._view.off("change", this._onSliderChange), this._view.off("release", this._onSliderRelease), this._view.on("grab", this._onSliderGrab), this._player.on("volumechange", this._updateSliderVolumeValue)
    }, s._onSliderChange = function() {
      var t = this._view.getValue();
      this._setPlayerVolume(t), this._view.setScrubbedValue()
    }, s._setPlayerVolume = function(t) {
      t ? (this._player.setMuted(!1), this._player.setVolume(t / 100)) : (this._player.setMuted(!0), this._player.setVolume(this._cachedVolume))
    }, s._showVolume = function() {
      this._view.show()
    }, s._hideVolume = function() {
      this._view.hide()
    }, s._onUserVolumeChange = function() {
      this._showVolume(), clearTimeout(this._hideVolumeTimer), this._view.isFocused() || (this._hideVolumeTimer = setTimeout(this._hideVolume, 1e3))
    }, s._onFocusChange = function() {
      this._view.isFocused() ? this._showVolume() : this._hideVolume()
    }, s._updateSliderVolumeValue = function() {
      if (this._player.getMuted()) this._view.setValue(0), this._view.setScrubbedValue();
      else {
        var t = this._player.getVolume();
        this._view.setValue(100 * t), this._view.setScrubbedValue()
      }
    }, s._removeEventListeners = function() {
      this._player.off("durationchange", this._updateSliderVolumeValue), this._player.off("volumechange", this._updateSliderVolumeValue), this._player.off("uservolumechange", this._onUserVolumeChange), this._view.off("change", this._onSliderChange), this._view.off("release", this._onSliderRelease), this._view.off("grab", this._onSliderGrab)
    }, s.destroy = function() {
      this._removeEventListeners()
    }, e.exports = r
  }, {
    "./BaseBehavior": 445
  }],
  456: [function(t, e, i) {
    "use strict";
    var n = t("../../dom-emitter/DOMEmitterMicro"),
      r = function(t) {
        this.el = t
      };
    r.prototype = Object.create(n.prototype), e.exports = r
  }, {
    "../../dom-emitter/DOMEmitterMicro": 424
  }],
  457: [function(t, e, i) {
    "use strict";
    var n = function(t) {
        this.el = t
      },
      r = n.prototype;
    r.show = function() {
      this.el.classList.remove("hidden")
    }, r.hide = function() {
      this.el.classList.add("hidden")
    }, r.destroy = function(t) {}, e.exports = n
  }, {}],
  458: [function(t, e, i) {
    "use strict";
    var n = function(t) {
        this.el = t
      },
      r = n.prototype;
    r.setText = function(t) {
      this.el.innerHTML = t
    }, e.exports = n
  }, {}],
  459: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-slider").Slider,
      r = "ac-slider-inactive",
      s = function(t, e) {
        if (this.el = t, this._min = e.min || 0, this._max = e.max || 1, e.mixins)
          for (var i = e.mixins.slice(0); i.length;) Object.assign(this, i.pop());
        this._slider = new n(this.el, {
          template: e.template,
          min: this._min,
          max: this._max,
          step: isNaN(+this.el.getAttribute("step")) ? this.el.getAttribute("step") : +this.el.getAttribute("step"),
          value: void 0 !== e.value ? e.value : +this.el.getAttribute("value"),
          orientation: e.orientation,
          renderedPosition: !0,
          keyboardContext: this.el
        }), this._onFocusChange = this._onFocusChange.bind(this), this._setHoveringValue = this._setHoveringValue.bind(this), this._onMouseOver = this._onMouseOver.bind(this), this._onMouseLeave = this._onMouseLeave.bind(this), this._slider.el.addEventListener("blur", this._onFocusChange), this._slider.el.addEventListener("focus", this._onFocusChange), this._slider.el.addEventListener("mouseout", this._onFocusChange), this.forceCursorPointer = this.forceCursorPointer.bind(this), this.disableForcedCursorPointer = this.disableForcedCursorPointer.bind(this), this._slider.on("grab", this.forceCursorPointer), this._slider.on("release", this.disableForcedCursorPointer), this._scrubbedEl = this.el.querySelector(".ac-slider-scrubbed"), this._notchEl = this.el.querySelector(".ac-slider-hover-notch"), this._notchEl && (this._slider.el.addEventListener("mouseover", this._onMouseOver), this._slider.el.addEventListener("mouseleave", this._onMouseLeave), this._slider.el.addEventListener("mousemove", this._setHoveringValue)), e.value && requestAnimationFrame(function() {
          this._slider && this.setValue(e.value)
        }.bind(this))
      },
      o = s.prototype;
    o.on = function() {
      return this._slider.on.apply(this._slider, arguments)
    }, o.off = function() {
      return this._slider.off.apply(this._slider, arguments)
    }, o.trigger = function() {
      return this._slider.trigger.apply(this._slider, arguments)
    }, o.setValue = function(t) {
      return this._slider.setValue.call(this._slider, t)
    }, o.setAriaValueText = function(t) {
      this._slider.el.setAttribute("aria-valuetext", t)
    }, o.setMin = function(t) {
      this._min = t, this._slider.setMin(t)
    }, o.setMax = function(t) {
      this._max = t, this._slider.setMax(t)
    }, o._onMouseOver = function() {
      this._slider.el.classList.add("hover")
    }, o._onMouseLeave = function() {
      this._slider.el.classList.remove("hover")
    }, o._onFocusChange = function() {
      setTimeout(function() {
        this.trigger("focuschange")
      }.bind(this), 0)
    }, o.isFocused = function() {
      return this._slider.el === document.activeElement && this._hasFocusOutline()
    }, o._hasFocusOutline = function() {
      return "none" !== getComputedStyle(this._slider.el).getPropertyValue("outline-style")
    }, o.getValue = function() {
      return this._slider.getValue.apply(this._slider, arguments)
    }, o.getMax = function() {
      return this._max
    }, o.setScrubbedValue = function() {
      "horizontal" === this._slider.getOrientation() ? this._scrubbedEl.style.left = this._slider.thumbElement.style.left : this._scrubbedEl.style.bottom = this._slider.thumbElement.style.bottom
    }, o._setHoveringValue = function(t) {
      var e = this.getClientXValue(t, this._notchEl);
      this._notchEl.style.left = e / this.getMax() * 100 + "%", this._setNotchColor(e)
    }, o._setNotchColor = function(t) {
      t > this.getValue() ? this._notchEl.style.backgroundColor = "#fff" : this._notchEl.style.backgroundColor = "#333"
    }, o.show = function() {
      this.el.classList.remove(r)
    }, o.hide = function() {
      this.el.classList.add(r)
    }, o.setState = function(t) {
      this.el.classList.add(t)
    }, o.clearState = function(t) {
      this.el.classList.remove(t)
    }, o.getClientXValue = function(t, e) {
      return this._slider.getClientXValue(t, e)
    }, o.destroy = function() {
      this._slider.el.removeEventListener("mousemove", this._setHoveringValue), this._slider.el.removeEventListener("mouseleave", this._onMouseOver), this._slider.el.removeEventListener("mouseout", this._onMouseLeave), this._slider.el.removeEventListener("blur", this._onFocusChange), this._slider.el.removeEventListener("focus", this._onFocusChange), this._slider.el.removeEventListener("mouseout", this._onFocusChange), this._slider.off("grab", this.forceCursorPointer), this._slider.off("release", this.disableForcedCursorPointer), this._slider.destroy(), this._slider = null
    }, e.exports = s
  }, {
    "@marcom/ac-slider": 373
  }],
  460: [function(t, e, i) {
    "use strict";
    var n = t("./Button"),
      r = function(t, e) {
        n.apply(this, arguments), this._states = e.states || {}, this._labels = e.labels, this._focusTarget = this.el.querySelector("button") || this.el, this._states && this._states.initial && this.setState("initial")
      },
      s = r.prototype = Object.create(n.prototype);
    s.setState = function(t) {
      this._currentState && this._currentState !== t && this._states[this._currentState].length && this.el.classList.remove(this._states[this._currentState]), this._currentState = t, this._labels && this._labels[this._currentState] && (this._focusTarget.value = this._labels[this._currentState], this._focusTarget.setAttribute("aria-label", this._labels[this._currentState])), "on" === this._currentState ? this._focusTarget.setAttribute("aria-pressed", !0) : this._focusTarget.setAttribute("aria-pressed", !1), this._states[t].length && this.el.classList.add(this._states[t])
    }, e.exports = r
  }, {
    "./Button": 456
  }],
  461: [function(t, e, i) {
    "use strict";
    var n = "cursor-pointer";
    e.exports = {
      disableForcedCursorPointer: function() {
        document.body.classList.remove(n), this.onSelectStartResumeDefault()
      },
      forceCursorPointer: function() {
        document.body.classList.add(n), this.onSelectStartPreventDefault()
      },
      onSelectStartResumeDefault: function() {
        document.removeEventListener("selectstart", this.preventDefault)
      },
      onSelectStartPreventDefault: function() {
        document.addEventListener("selectstart", this.preventDefault)
      },
      preventDefault: function(t) {
        t.preventDefault()
      }
    }
  }, {}],
  462: [function(t, e, i) {
    "use strict";
    var n = "hidden",
      r = '<a class="end-state-link hidden"></a>\n',
      s = function(t) {
        this.el = t.el, this.el.innerHTML = r, this._player = t.player, this._bindContent(t)
      },
      o = s.prototype;
    o._bindContent = function(t) {
      if ("link" === t.type || "video" === t.type) {
        var e = this.el.querySelector(".end-state-link"),
          i = document.createElement("div");
        e.classList.remove(n), i.classList.add("end-state-text-container"), i.innerText = t.label || "", e.href = t.url || "", e.appendChild(i), "link" === t.type ? e.classList.add("icon", "icon-after", "icon-chevronright") : "video" === t.type && e.classList.add("icon", "icon-after", "icon-playcircle"), this._bindAction(this.el, t)
      }
    }, o._bindAction = function(t, e) {
      "function" == typeof e.onclick ? t.onclick = function(t) {
        t.preventDefault(), e.onclick.call(null, t)
      }.bind(this) : "video" === e.type && e.url && (t.onclick = function(t) {
        t.preventDefault(), this._player.load(e.url, null, 0, {})
      }.bind(this))
    }, o.destroy = function() {}, e.exports = s
  }, {}],
  463: [function(t, e, i) {
    "use strict";
    var n = t("./EndStateItem"),
      r = function(t) {
        this.el = t.el, this._player = t.player, this._addItems(t.items || [])
      },
      s = r.prototype;
    s._addItems = function(t) {
      this._items = [], t.forEach(function(t) {
        var e = document.createElement("div");
        e.classList.add("end-state-item");
        var i = new n(Object.assign({}, t, {
          el: e,
          player: this._player
        }));
        this.el.appendChild(e), this._items.push(i)
      }.bind(this))
    }, s.setData = function(t) {
      for (; this._items.length;) this._items.pop().destroy();
      this.el.innerHTML = "", t ? (this.el.classList.remove("hidden"), this._addItems(t.items)) : this.el.classList.add("hidden")
    }, s.destroy = function() {
      for (; this._items.length;) this._items.pop().destroy()
    }, e.exports = r
  }, {
    "./EndStateItem": 462
  }],
  464: [function(t, e, i) {
    "use strict";
    var n = function(t, e, i) {
        return new e.classDef(t, Object.assign(e.options || {}, i || {}))
      },
      r = function(t, e, i) {
        return function(n) {
          t[e](n, i)
        }
      },
      s = function(t, e) {
        var i = e.handlers || {},
          n = {};
        for (var s in i) i.hasOwnProperty(s) && t.on(s, n[s] = r(i, s, t));
        var o, a = e.observe;
        if (a) {
          for (var c = a.update, l = a.source, u = l.on.bind(l) || l.addEventListener, h = l.off.bind(l) || l.removeEventListener, d = a.events, m = 0, f = d.length, p = function() {
              c.call(a, t)
            }; m < f; m++) s = d[m], u(s, p);
          o = function() {
            for (m = 0; m < f; m++) s = d[m], h(s, p)
          }
        }
        var _ = function() {
          for (var e in n) n.hasOwnProperty(e) && t.off(e, n[e]);
          o && o()
        };
        return {
          destroy: _
        }
      };
    e.exports = function(t, e, i) {
      return e.classDef ? n(t, e, i) : s(t, e, i)
    }
  }, {}],
  465: [function(t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      r = t("./createView"),
      s = t("./createBehavior"),
      o = function(t, e) {
        "function" == typeof e.destroy && e.destroy(), "function" == typeof t.destroy && t.destroy()
      },
      a = function(t) {
        for (; t.length;) t.shift().destroy()
      },
      c = function(t) {
        for (var e in t) t.hasOwnProperty(e) && (a(t[e]), delete t[e])
      },
      l = function(t, e, i) {
        var n = r(t, e.view),
          a = s(n, e.behavior, i);
        return {
          view: n,
          behavior: a,
          destroy: o.bind(null, n, a)
        }
      };
    e.exports = function(t, e, i) {
      var r = {};
      for (var s in e)
        if (e.hasOwnProperty(s) && "object" === n(e[s])) {
          var o = e[s],
            a = e.elementClassPrefix ? "." + e.elementClassPrefix + "-" + o.className : "." + o.className,
            u = t.querySelectorAll(a);
          r[s] = [];
          for (var h = 0, d = u.length; h < d; h++) r[s].push(l(u[h], o, i))
        } return {
        components: r,
        destroy: c.bind(null, r)
      }
    }
  }, {
    "./createBehavior": 464,
    "./createView": 466
  }],
  466: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e) {
      return new e.classDef(t, e.options)
    }
  }, {}],
  467: [function(t, e, i) {
    "use strict";
    e.exports = {
      backthirtyseconds: "Back 30 Seconds",
      playpause: "Play/Pause",
      play: "Play",
      pause: "Pause",
      togglemutevolume: "Toggle Mute Volume",
      mutevolume: "Mute Volume",
      minvolume: "Minimum Volume",
      adjustvolume: "Adjust Volume",
      fastreverse: "Fast Reverse",
      fastforward: "Fast Forward",
      fullvolume: "Full Volume",
      fullscreen: "Full Screen",
      exitfullscreen: "Exit Full Screen",
      airplay: "AirPlay",
      captionscontrol: "Closed Captions",
      captionsturnedon: "Closed Captions On",
      captionsturnedoff: "Closed Captions Off",
      subtitlescontrol: "Subtitles",
      subtitlesturnedon: "Subtitles On",
      subtitlesturnedoff: "Subtitles Off",
      sizescontrol: "Video Size",
      downloadcontrol: "Download Video",
      share: "Share",
      small: "Small",
      medium: "Medium",
      large: "Large",
      hd: "HD",
      ipod: "iPod/iPhone",
      mb: "MB",
      gb: "GB",
      tb: "TB",
      downloadquicktimetitle: "Get QuickTime.",
      downloadquicktimetext: "Download QuickTime to view this video. QuickTime is free for Mac + PC.",
      downloadquicktimebutton: "Download",
      downloadquicktimeurl: "https://www.apple.com/quicktime/download/",
      elapsed: "elapsed",
      remaining: "remaining",
      currenttimetext: "{minutes} minutes and {seconds} seconds",
      pictureinpicture: "Picture-in-Picture",
      exitpictureinpicture: "Exit Picture-in-Picture",
      closesharing: "Close Sharing",
      facebookshare: "Share to Facebook",
      twittershare: "Share to Twitter",
      copylink: "Copy Link",
      copyembed: "Copy Embed Code",
      copyarea: "Copy Link Text Area",
      selectlink: "Select Link Text",
      selectembed: "Select Embed Code",
      close: "Close",
      dismisscopy: "Dismiss Copy",
      replay: "Replay",
      livestream: "Live Streaming",
      newwindow: "Opens in New Window"
    }
  }, {}],
  468: [function(t, e, i) {
    "use strict";
    var n, r = t("./Translations"),
      s = t("./DefaultLabelStrings"),
      o = window.document.documentElement;
    try {
      n = window.top.document.documentElement
    } catch (a) {
      n = o
    }
    var c = t("@marcom/ac-ajax-xhr"),
      l = "m",
      u = "/global/ac_" + l + "edia_player/scripts/ac_" + l + "edia_languages/",
      h = "en-US",
      d = {},
      m = function(t) {
        var e;
        try {
          e = t || n.getAttribute("lang")
        } catch (i) {
          e = o.getAttribute("lang")
        }
        var r;
        if (e) switch (e.toLowerCase()) {
          case "es-418":
            r = "es-LA";
            break;
          case "pt":
            r = "pt-BR";
            break;
          default:
            r = e
        } else r = h;
        return r
      },
      f = function(t) {
        return t = m(t), void 0 !== d[t]
      },
      p = function(t) {
        t = t || {};
        var e = m(t.lang);
        if (f(e)) return t.callback ? void t.callback(d[e]) : d[e];
        if (!t.callback) throw new Error("To use Localization.getTranslation you must either pass a callback or ensure the translation is ready via Localization.translationReady");
        var i = t.basePath || u,
          n = r[e] ? i + r[e] : i + r[h],
          o = s;
        c.get(n, {
          success: function(i) {
            o = Object.assign(o, JSON.parse(i)), d[e] = o, t.callback(o)
          },
          error: function() {
            d[e] = o, t.callback(o)
          }
        })
      };
    e.exports = {
      getLanguage: m,
      getTranslation: p,
      translationReady: f
    }
  }, {
    "./DefaultLabelStrings": 467,
    "./Translations": 469,
    "@marcom/ac-ajax-xhr": 8
  }],
  469: [function(t, e, i) {
    "use strict";
    e.exports = {
      "bg-BG": "bg-BG.json",
      "cs-CZ": "cs-CZ.json",
      "el-GR": "el-GR.json",
      "de-AT": "de-AT.json",
      "de-CH": "de-CH.json",
      "de-DE": "de-DE.json",
      "de-LI": "de-LI.json",
      "da-DK": "da-DK.json",
      en: "en.json",
      "en-US": "en-US.json",
      "en-AP": "en-AP.json",
      "en-CA": "en-CA.json",
      "en-GB": "en-GB.json",
      "en-HK": "en-HK.json",
      "en-IE": "en-IE.json",
      "en-IN": "en-IN.json",
      "en-KR": "en-KR.json",
      "en-AU": "en-AU.json",
      "en-NZ": "en-NZ.json",
      "en-SG": "en-SG.json",
      "en-ZA": "en-ZA.json",
      es: "es.json",
      "es-LA": "es-LA.json",
      "es-MX": "es-MX.json",
      "es-ES": "es-ES.json",
      "et-EE": "et-EE.json",
      "fi-FI": "fi-FI.json",
      fr: "fr.json",
      "fr-BE": "fr-BE.json",
      "fr-CA": "fr-CA.json",
      "fr-CH": "fr-CH.json",
      "fr-FR": "fr-FR.json",
      "hr-HR": "hr-HR.json",
      "hu-HU": "hu-HU.json",
      "it-IT": "it-IT.json",
      ja: "ja.json",
      "ja-JP": "ja-JP.json",
      "ko-KR": "ko-KR.json",
      "lt-LT": "lt-LT.json",
      "lv-LV": "lv-LV.json",
      "nl-BE": "nl-BE.json",
      "nl-NL": "nl-NL.json",
      "no-NO": "no-NO.json",
      "pl-PL": "pl-PL.json",
      pt: "pt.json",
      "pt-BR": "pt-BR.json",
      "pt-PT": "pt-PT.json",
      "ro-RO": "ro-RO.json",
      "ru-RU": "ru-RU.json",
      "sk-SK": "sk-SK.json",
      "sv-SE": "sv-SE.json",
      "tr-TR": "tr-TR.json",
      zh: "zh.json",
      "zh-CN": "zh-CN.json",
      "zh-HK": "zh-HK.json",
      "zh-TW": "zh-TW.json"
    }
  }, {}],
  470: [function(t, e, i) {
    "use strict";
    var n = t("./PopUp"),
      r = function(t) {
        this.el = t.el, this._player = t.player, this._popUp = new n(t), this.el.appendChild(this._popUp.el)
      },
      s = r.prototype;
    s.setData = function(t) {
      this._popUp.setData(t)
    }, s.show = function() {
      this.el.classList.remove("hidden")
    }, s.hide = function() {
      this.el.classList.add("hidden")
    }, s.destroy = function() {}, e.exports = r
  }, {
    "./PopUp": 471
  }],
  471: [function(t, e, i) {
    "use strict";
    var n = '<div class="ac-video-trickplay hidden" aria-hidden="true">\n    <div class="ac-video-trickplay-image">\n    </div>\n    <div class="ac-video-trickplay-time"></div>\n</div>\n',
      r = t("../../utils/Time"),
      s = t("./ThumbnailHandler"),
      o = t("@marcom/ac-function/throttle"),
      a = 5,
      c = function(t) {
        this._player = t.player, this.el = document.createElement("div"), this.el.style.opacity = "0", this.el.innerHTML = n, this._thumbnailHandler = new s({
          el: this.el.querySelector(".ac-video-trickplay-image"),
          player: this._player,
          numberOfImages: t.numberOfImages
        }), this._timeLabel = this.el.querySelector(".ac-video-trickplay-time"), this._bindMethods(), this._addEventListeners()
      },
      l = c.prototype;
    l._initPointerTracking = function() {
      this._scrubberView = this._player.controls.scrubberView, this._scrubberView && (this._runnableTrack = this._scrubberView.el.querySelector(".ac-slider-runnable-track"), this._calcOffsets(), this._scrubberView.el.addEventListener("mouseover", this._show), this._scrubberView.el.addEventListener("mouseout", this._hide), this._scrubberView.el.addEventListener("mousedown", this._startScrubbing), this._scrubberView.el.addEventListener("mouseup", this._endScrubbing), this._scrubberView.el.addEventListener("mousemove", this._onTrackerUpdate), this._scrubberView.el.addEventListener("mousemove", this._setThumbnail), this._player.on("resize", this._calcOffsets), window.addEventListener("resize", this._calcOffsets))
    }, l._bindMethods = function() {
      this._show = this._show.bind(this), this._hide = this._hide.bind(this), this._onDurationChange = this._onDurationChange.bind(this), this._onLoadedMetaData = this._onLoadedMetaData.bind(this), this._startScrubbing = this._startScrubbing.bind(this), this._endScrubbing = this._endScrubbing.bind(this), this._initPointerTracking = this._initPointerTracking.bind(this), this._onTrackerUpdate = this._onTrackerUpdate.bind(this), this._setThumbnail = this._setThumbnail.bind(this), this._calcOffsets = this._calcOffsets.bind(this), this._debouncedCalcOffsets = o(this._calcOffsets, 30)
    }, l._startScrubbing = function(t) {
      this._thumbnailHandler.el.classList.add("hidden"), this._scrubberView.el.removeEventListener("mousemove", this._setThumbnail), this._scrubberView.el.removeEventListener("mouseout", this._hide), document.addEventListener("mouseup", this._endScrubbing), document.addEventListener("mousemove", this._onTrackerUpdate)
    }, l._endScrubbing = function(t) {
      t.target === this._scrubberView.el && this._hide(), this._scrubberView.el.addEventListener("mousemove", this._setThumbnail),
        this._scrubberView.el.addEventListener("mouseout", this._hide), document.removeEventListener("mouseup", this._endScrubbing), document.removeEventListener("mousemove", this._onTrackerUpdate), this._setThumbnail(t), this._thumbnailHandler.el.classList.remove("hidden")
    }, l._calcOffsets = function() {
      this._onLoadedMetaData();
      var t = this._player.el.getBoundingClientRect();
      this._offsetLeft = t.left;
      var e = this._runnableTrack.getBoundingClientRect();
      this._leftBoundary = e.left - this._offsetLeft + a, this._rightBoundary = this._leftBoundary + e.width - a - 2, this._imgWidth = this.el.firstElementChild.getBoundingClientRect().width
    }, l._onLoadedMetaData = function() {
      var t = this._player.getMediaElement().videoWidth,
        e = this._player.getMediaElement().videoHeight,
        i = this._player.getMediaElement().src.indexOf("-tft-") !== -1;
      this.el.classList.remove("square-video"), this.el.classList.remove("vertical-video"), this.el.classList.remove("tft-video"), i ? (this.el.classList.add("tft-video"), this._thumbnailHandler.setVertical(!1)) : t < e ? (this.el.classList.add("vertical-video"), this._thumbnailHandler.setVertical(!0)) : t === e ? (this.el.classList.add("square-video"), this._thumbnailHandler.setVertical(!1)) : this._thumbnailHandler.setVertical(!1)
    }, l._addEventListeners = function() {
      this._player.on("durationchange", this._onDurationChange), this._player.once("controlsready", this._initPointerTracking), this._player.on("loadedmetadata", this._calcOffsets)
    }, l._removeEventListeners = function() {
      this._player.off("durationchange", this._onDurationChange), this._player.off("controlsready", this._initPointerTracking), this._player.off("timeupdate", this._calcOffsets), this._player.off("resize", this._debouncedCalcOffsets), window.removeEventListener("resize", this._debouncedCalcOffsets), this._scrubberView.el.removeEventListener("mouseover", this._show), this._scrubberView.el.removeEventListener("mouseout", this._hide), this._scrubberView.el.removeEventListener("mousemove", this._onTrackerUpdate), this._scrubberView.el.removeEventListener("mousemove", this._setThumbnail)
    }, l._onTrackerUpdate = function(t) {
      this._calcOffsets();
      var e = Math.min(Math.max(t.clientX - this._offsetLeft, this._leftBoundary), this._rightBoundary);
      this.el.firstElementChild.style.left = e - this._imgWidth / 2 + "px";
      var i = this._scrubberView.getClientXValue(t);
      this._player.getReadyState() <= 2 ? this._cachedTrackerUpdate = t : this._cachedTrackerUpdate = null, this._setTime(Math.max(i, 0))
    }, l._onDurationChange = function(t) {
      this._cachedDuration = this._player.getDuration(), this._cachedTrackerUpdate && (this._onTrackerUpdate(this._cachedTrackerUpdate), this._setThumbnail()), this.el.style.opacity = "1"
    }, l._setThumbnail = function(t) {
      this._thumbnailHandler.setTime(this._time, this._cachedDuration)
    }, l._setTime = function(t) {
      var e = t / this._scrubberView.getMax();
      this._time = Math.min(e * this._cachedDuration, this._cachedDuration);
      var i = r.formatTime(Math.round(this._time), this._cachedDuration);
      this._timeLabel.innerHTML = i
    }, l.setData = function(t) {
      this.el.style.opacity = "0", this._canPlayThroughHander && (this._player.off("canplaythrough", this._canPlayThroughHander), this._player.off("playing", this._canPlayThroughHander), this._canPlayThroughHander = null), t && this._player.getReadyState() > 2 ? (this.el.style.opacity = "1", this._thumbnailHandler.setData(t), this._cachedTrackerUpdate && (this._onTrackerUpdate(this._cachedTrackerUpdate), this._setThumbnail())) : (this._thumbnailHandler.setData(null), t ? (this._canPlayThroughHander = this.setData.bind(this, t), this._player.on("canplaythrough", this._canPlayThroughHander), this._player.on("playing", this._canPlayThroughHander)) : this.el.style.opacity = "1"), this._onLoadedMetaData()
    }, l._show = function(t) {
      this._onTrackerUpdate(t), this.el.firstElementChild.classList.remove("hidden")
    }, l._hide = function() {
      this.el.firstElementChild.classList.add("hidden")
    }, l.destroy = function() {
      this._canPlayThroughHander && (this._player.off("canplaythrough", this._canPlayThroughHander), this._player.off("playing", this._canPlayThroughHander)), this._tracker.destroy()
    }, e.exports = c
  }, {
    "../../utils/Time": 475,
    "./ThumbnailHandler": 472,
    "@marcom/ac-function/throttle": 224
  }],
  472: [function(t, e, i) {
    "use strict";
    var n = 120,
      r = 144,
      s = 81,
      o = function(t) {
        this.el = t.el, this._player = t.player, this._imgWidth = t.imgWidth || r, this.el.style.backgroundSize = 100 * this._numberOfImages + "% 100%"
      },
      a = o.prototype;
    a.setVertical = function(t) {
      this._imgWidth = t ? s : r
    }, a.getWidth = function() {
      return this._imgWidth
    }, a.setData = function(t) {
      if (!t) return this._imgUrl = null, void(this.el.style.backgroundImage = "");
      if (t.url !== this._imgUrl) {
        this._imgUrl = t.url, this._numberOfImages = parseInt(t.numberOfImages || n), this.el.style.backgroundSize = 100 * this._numberOfImages + "% 100%", this.el.style.backgroundImage = "", this.el.classList.add("hidden");
        var e = this._loadImage(this._imgUrl).then(function() {
          this._imageLoadPromise === e && (this.el.style.backgroundImage = 'url("' + this._imgUrl + '")', this._imageLoadPromise = null, this.el.classList.remove("hidden"))
        }.bind(this));
        this._imageLoadPromise = e
      }
    }, a._loadImage = function(t) {
      return new Promise(function(e, i) {
        var n = new Image;
        n.onload = function() {
          e()
        }, n.onerror = function() {
          i()
        }, n.src = t
      })
    }, a.setTime = function(t, e) {
      var i = t / e,
        n = Math.min(Math.round(i * this._numberOfImages), this._numberOfImages - 1),
        r = n / (this._numberOfImages - 1) * 100;
      this.el.style.backgroundPositionX = r + "%"
    }, a.destroy = function() {
      this._imageLoadPromise && this._imageLoadPromise.cancel()
    }, e.exports = o
  }, {}],
  473: [function(t, e, i) {
    (function(i) {
      "use strict";
      var n, r = i("PGRpdiBjbGFzcz0ic2hhcmluZy1zdGF0ZSI+CiAgICA8ZGl2IGNsYXNzPSJjb250YWluZXIiIGRhdGEtYWN2LWFjdGl2ZS1hcmVhPgogICAgICAgIDxkaXYgY2xhc3M9InNoYXJpbmctY29udGFpbmVyIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0ic2hhcmluZy1idXR0b24tY29udGFpbmVyIj4KICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9ImZhY2Vib29rLXNoYXJlIGFjLXZpZGVvLWljb24gaWNvbi1zaGFyZV9mYiIgYXJpYS1sYWJlbD0ie2ZhY2Vib29rc2hhcmV9LCB7bmV3d2luZG93fSI+PC9idXR0b24+CiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJ0d2l0dGVyLXNoYXJlIGFjLXZpZGVvLWljb24gaWNvbi1zaGFyZV90d2l0dGVyIiBhcmlhLWxhYmVsPSJ7dHdpdHRlcnNoYXJlfSwge25ld3dpbmRvd30iPjwvYnV0dG9uPgogICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0iY29weS1saW5rIGFjLXZpZGVvLWljb24gaWNvbi1zaGFyZV9saW5rIiBhcmlhLWxhYmVsPSJ7Y29weWxpbmt9Ij48L2J1dHRvbj4KICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9ImNvcHktZW1iZWQtY29kZSBhYy12aWRlby1pY29uIGljb24tc2hhcmVfZW1iZWQiIGFyaWEtbGFiZWw9Intjb3B5ZW1iZWR9Ij48L2J1dHRvbj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0idGV4dGFyZWEtY29udGFpbmVyIj4KICAgICAgICAgICAgPHNwYW4+CiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9ImNvcHktYXJlYSBmb3JtLXRleHRib3ggZm9ybS10ZXh0Ym94LXRleHQgZGlzYWJsZWQiIHR5cGU9InRleHQiIGlkPSJjb3B5LWxpbmsiIGFyaWEtbGFiZWw9Intjb3B5bGlua30iPjwvaW5wdXQ+CiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJ0ZXh0aW5wdXQtY2xvc2UtYnV0dG9uIGFjLXZpZGVvLWljb24gaWNvbi1zaGFyZV9jbG9zZSIgYXJpYS1sYWJlbD0ie2Rpc21pc3Njb3B5fSI+PC9idXR0b24+CiAgICAgICAgICAgIDwvc3Bhbj4KICAgICAgICA8L2Rpdj4KICAgIDwvZGl2Pgo8L2Rpdj4K", "base64").toString(),
        s = i("PGlmcmFtZSBzcmM9IntlbWJlZENvZGVQYXRofXt2aWRlb2lkfXtleHRlbnNpb259IiB3aWR0aD0ie3dpZHRofSIgaGVpZ2h0PSJ7aGVpZ2h0fSIgdGl0bGU9Int0aXRsZX0iIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4K", "base64").toString(),
        o = "https://www.apple.com/embed/",
        a = "Video Player",
        c = t("@marcom/ac-console/log"),
        l = t("@marcom/ac-clipboard/select"),
        u = t("@marcom/ac-social").Dialog,
        h = t("@marcom/ac-string/supplant"),
        d = t("../localization/Localization"),
        m = t("@marcom/ac-accessibility/helpers/TabManager");
      try {
        n = t("@marcom/ac-analytics-share/factory/create")
      } catch (f) {
        c("ac-analytics-share failed to load, are you sure you've included it?")
      }
      var p = t("@marcom/ac-useragent"),
        _ = p.os,
        g = _.ios || _.android,
        y = 735,
        v = function(t) {
          this.el || this._initializeElement(t.el, t.template), this._player = t.player, this._parentView = t.parentView, this._clickedShareButton = null, this._container = this.el.querySelector(".container"), this._sharingButtonContainer = this.el.querySelector(".sharing-button-container"), this._facebookButton = this.el.querySelector(".facebook-share"), this._twitterButton = this.el.querySelector(".twitter-share"), this._copyLinkButton = this.el.querySelector(".copy-link"), this._copyEmbedCodeButton = this.el.querySelector(".copy-embed-code"), this._copyTextArea = this.el.querySelector(".copy-area"), this._copyCloseButton = this.el.querySelector(".textinput-close-button"), this._closeButton = this.el.querySelector(".close-button"), t.analytics === !1 && (n = null), g && (this.el.firstChild.classList.add("mobile"), this._player.on("loadstart", function() {
            this._getClientWidth() > y && this.el.firstChild.classList.add("mobile-large")
          }.bind(this))), this._bindMethods(), this._addEventListeners(), this._syncSocialShareHidden()
        },
        b = v.prototype;
      b._initializeElement = function(t, e) {
        t ? this.el = t : (this.el = document.createElement("div"), this._templateData = d.getTranslation(), this.el.innerHTML = h((e || r).toString(), this._templateData))
      }, b.setData = function(t) {
        if (!t) return void this._parentView.hide();
        if (this._parentView.show(), t.allowEmbed && this.el.firstChild.classList.add("embed-enabled"), this._sharingUrl = t.originatorUrl || window.location.href, this._videoid = t.videoid, this._hideExtension = t.hideExtension, this._embedPath = t.embedpath || o, this._hideFacebook = t.hideFacebookShare || !1, this._hideTwitter = t.hideTwitterShare || !1, this._title = t.title || a, this._syncSocialShareHidden(), this._container.classList.remove("textarea-active"), n && t.analytics !== !1 && t.videoid) try {
          this._initAnalyticsAttributes(t), this._analyticsObserver || (this._analyticsObserver = n({
            context: this.el
          }))
        } catch (e) {
          c("ac-analytics-share failed to load, are you sure you've included it?")
        }
      }, b._bindMethods = function() {
        this._doFacebookShare = this._doSocialShare.bind(this, u.FACEBOOK_SHARE), this._doTwitterShare = this._doSocialShare.bind(this, u.TWITTER_TWEET), this._copyUrl = this._copyUrl.bind(this), this._copyEmbedCode = this._copyEmbedCode.bind(this), this._closeCopyArea = this._showTextArea.bind(this, !1), this._closeState = this._closeState.bind(this)
      }, b._addEventListeners = function() {
        this._facebookButton && this._facebookButton.addEventListener("click", this._doFacebookShare), this._twitterButton && this._twitterButton.addEventListener("click", this._doTwitterShare), this._copyLinkButton && this._copyLinkButton.addEventListener("click", this._copyUrl), this._copyEmbedCodeButton && this._copyEmbedCodeButton.addEventListener("click", this._copyEmbedCode), this._copyCloseButton && this._copyCloseButton.addEventListener("click", this._closeCopyArea), this._closeButton && this._closeButton.addEventListener("click", this._closeState)
      }, b._removeEventListeners = function() {
        this._facebookButton && this._facebookButton.removeEventListener("click", this._doFacebookShare), this._twitterButton && this._twitterButton.removeEventListener("click", this._doTwitterShare), this._copyLinkButton && this._copyLinkButton.removeEventListener("click", this._copyUrl), this._copyEmbedCodeButton && this._copyEmbedCodeButton.removeEventListener("click", this._copyEmbedCode), this._copyCloseButton && this._copyCloseButton.removeEventListener("click", this._closeCopyArea), this._closeButton && this._closeButton.removeEventListener("click", this._closeState)
      }, b._syncSocialShareHidden = function() {
        this._facebookButton && (this._hideFacebook ? this._facebookButton.classList.add("hide-button") : this._facebookButton.classList.remove("hide-button")), this._twitterButton && (this._hideTwitter ? this._twitterButton.classList.add("hide-button") : this._twitterButton.classList.remove("hide-button"))
      }, b._doSocialShare = function(t) {
        this._clickedShareButton = null, this._copyLinkButton.classList.remove("active"), this._copyEmbedCodeButton.classList.remove("active"), this._showTextArea(!1), u.create(t, {
          url: this._sharingUrl,
          title: this._title
        })
      }, b._showTextArea = function(t) {
        t ? (this._container.classList.add("textarea-active"), l(this._copyTextArea), g || this._copyTextArea.setAttribute("readonly", "")) : (this._container.classList.remove("textarea-active"), this._copyLinkButton.classList.remove("active"), this._copyEmbedCodeButton.classList.remove("active"), this._copyTextArea.removeAttribute("readonly"), this._clickedShareButton && this._clickedShareButton.focus(), this._copyLinkButton.setAttribute("aria-label", this._templateData.copylink), this._copyEmbedCodeButton.setAttribute("aria-label", this._templateData.copyembed))
      }, b._copyUrl = function() {
        this._clearTextArea(), this._copyTextArea.value = this._sharingUrl, this._copyLinkButton.classList.add("active"), this._copyLinkButton.setAttribute("aria-label", this._templateData.selectlink), this._showTextArea(!0), this._clickedShareButton = this._copyLinkButton, this._copyTextArea.setAttribute("aria-label", this._templateData.copylink), l(this._copyTextArea)
      }, b._clearTextArea = function() {
        window.getSelection().removeAllRanges(), this._copyLinkButton.classList.remove("active"), this._copyEmbedCodeButton.classList.remove("active"), this._copyTextArea.removeAttribute("readonly")
      }, b._copyEmbedCode = function() {
        this._clearTextArea(), this._copyTextArea.value = h(s, {
          videoid: this._videoid,
          embedCodePath: this._embedPath,
          width: this._player.getMediaWidth(),
          height: this._player.getMediaHeight(),
          title: this._title,
          extension: this._hideExtension ? "" : ".html"
        }), this._copyEmbedCodeButton.classList.add("active"), this._copyEmbedCodeButton.setAttribute("aria-label", this._templateData.selectembed), this._showTextArea(!0), this._clickedShareButton = this._copyEmbedCodeButton, this._copyTextArea.setAttribute("aria-label", this._templateData.copyembed), l(this._copyTextArea)
      }, b._focusFirstButton = function() {
        this._firstButton || (this._firstButton = m.getTabbableElements(this._sharingButtonContainer)[0]), this._firstButton.focus()
      }, b.show = function() {
        return new Promise(function(t, e) {
          requestAnimationFrame(function() {
            var e = function() {
              this.el.removeEventListener("transitionend", e), focus && this._focusFirstButton(), t()
            }.bind(this);
            this.el.addEventListener("transitionend", e), setTimeout(function() {
              this._container.classList.add("showing")
            }.bind(this))
          }.bind(this))
        }.bind(this))
      }, b.hide = function() {
        return this._clickedShareButton = null, this._showTextArea(!1), new Promise(function(t, e) {
          var i = function() {
            this.el.removeEventListener("transitionend", i), t()
          }.bind(this);
          this.el.addEventListener("transitionend", i), setTimeout(function() {
            this._container.classList.remove("showing")
          }.bind(this))
        }.bind(this))
      }, b._getClientHeight = function() {
        return this.el.clientHeight
      }, b._getClientWidth = function() {
        return this.el.clientWidth
      }, b.destroy = function() {
        this._removeEventListeners()
      }, b._closeState = function() {
        this._showTextArea(!1), 0 === this._player.getCurrentTime() || this._player.getEnded() ? this._player.states.setState("initial") : this._player.states.setState("none")
      }, b._getAnalyticsSource = function() {
        return "drawer"
      }, b._initAnalyticsAttributes = function(t) {
        var e = [];
        this._facebookButton && e.push({
          button: this._facebookButton,
          title: "facebook",
          events: "event85"
        }), this._twitterButton && e.push({
          button: this._twitterButton,
          title: "twitter",
          events: "event84"
        }), this._copyLinkButton && e.push({
          button: this._copyLinkButton,
          title: "copy-link",
          events: "event89"
        }), this._copyEmbedCodeButton && e.push({
          button: this._copyEmbedCodeButton,
          title: "copy-embed-code",
          events: "event101"
        });
        var i = ((t.url && t.url.indexOf(".m3u8")) !== -1 ? "m3u8" : "mp4") + " via html5",
          n = this._getAnalyticsSource(),
          r = t.videoid,
          s = document.head.querySelectorAll('meta[property="analytics-track"]');
        s = s ? s[0].getAttribute("content") : "", e.forEach(function(t) {
          t.button.setAttribute("data-analytics-click", ""), t.button.setAttribute("data-analytics-share", JSON.stringify({
            title: r,
            events: t.events,
            prop2: s + " - " + r + " - " + t.title,
            prop18: i,
            eVar49: document.referrer,
            eVar54: document.location.href,
            eVar55: s + " - " + r,
            eVar70: n
          }))
        }.bind(this))
      }, e.exports = v
    }).call(this, t("buffer").Buffer)
  }, {
    "../localization/Localization": 468,
    "@marcom/ac-accessibility/helpers/TabManager": 1,
    "@marcom/ac-analytics-share/factory/create": 21,
    "@marcom/ac-clipboard/select": 41,
    "@marcom/ac-console/log": 67,
    "@marcom/ac-social": 379,
    "@marcom/ac-string/supplant": 406,
    "@marcom/ac-useragent": 413,
    buffer: 258
  }],
  474: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      r = function(t) {
        n.call(this), this.el = t.el || document.body, this.breakpoints = t.breakpoints.sort(function(t, e) {
          return t.minWidth - e.minWidth
        }), this._breakPointsLength = this.breakpoints.length, this._addClasses = t.addClass, this._addEventListeners(), this._onResize()
      },
      s = n.prototype,
      o = r.prototype = Object.create(s);
    o.constructor = r, o._addEventListeners = function() {
      var t = this;
      this._boundOnResize = function() {
        t._onResize.apply(t, arguments)
      }, window.addEventListener("resize", this._boundOnResize), window.addEventListener("orientationchange", this._boundOnResize), window.addEventListener("DOMContentLoaded", this._boundOnResize)
    }, o._removeEventListeners = function() {
      window.removeEventListener("resize", this._boundOnResize), window.removeEventListener("orientationchange", this._boundOnResize), window.addEventListener("DOMContentLoaded", this._boundOnResize)
    }, o._onResize = function() {
      var t = this.el.clientWidth,
        e = this._currentBreakpoint;
      if (!e || !r.widthInBreakpoint(t, e)) {
        var i = r.getBreakpointFromWidth(t, this.breakpoints, e, this._breakPointsLength);
        this._addClasses && (this._currentBreakpoint && this.el.classList.remove(e.name), this.el.classList.add(i.name)), this._currentBreakpoint = i, this.trigger("breakpointchange", i)
      }
    }, o.getCurrentBreakpoint = function() {
      return this._currentBreakpoint
    }, o.refresh = function() {
      this._onResize()
    }, o.destroy = function() {
      this._removeEventListeners(), s.destroy.call(this)
    }, r.getBreakpointFromElement = function(t, e) {
      return r.getBreakpointFromWidth(t.clientWidth, e)
    }, r.getBreakpointFromWidth = function(t, e, i, n) {
      for (var r = 0, s = n || e.length; r < s; r++) {
        var o = e[r];
        if (o !== i && t >= o.minWidth && t <= o.maxWidth) return o
      }
    }, r.widthInBreakpoint = function(t, e) {
      return t >= e.minWidth && t <= e.maxWidth
    }, e.exports = r
  }, {
    "@marcom/ac-event-emitter-micro": 156
  }],
  475: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-string/supplant"),
      r = {
        addLeadingZero: function(t, e) {
          if (e = e || 2, t < 10 || e > 2)
            for (t = String(t); t.length < e;) t = "0" + t;
          return t
        },
        formatTime: function(t, e, i) {
          if (isNaN(t)) return "00:00";
          t = this.splitTime(Math.floor(t), e, function(t) {
            return this.addLeadingZero(t, i)
          }.bind(this));
          var r;
          r = e >= 3600 ? "{PN}{hours}:{minutes}:{seconds}" : "{PN}{minutes}:{seconds}";
          var s = n(r, {
            PN: t.negativeModifier,
            hours: t.hours,
            minutes: t.minutes,
            seconds: t.seconds
          });
          return s
        },
        splitTime: function(t, e, i) {
          i = i || function(t) {
            return t
          };
          var n = {
            negativeModifier: "",
            hours: 0,
            minutes: 0,
            seconds: 0
          };
          if (isNaN(t)) return n;
          n.negativeModifier = t < 0 ? "-" : "", t = Math.abs(t), n.hours = e >= 3600 ? Math.floor(t / 3600) : 0, n.minutes = n.hours ? Math.floor(t / 60 % 60) : Math.floor(t / 60), n.seconds = t % 60;
          for (var r in n) "number" == typeof n[r] && "hours" !== r && (n[r] = i(n[r]));
          return n
        },
        stringToNumber: function(t) {
          for (var e = 0, i = t.split(":"); i.length;) e += 3 === i.length ? 3600 * parseFloat(i.shift()) : 2 === i.length ? 60 * parseFloat(i.shift()) : parseFloat(i.shift());
          return e
        }
      };
    e.exports = r
  }, {
    "@marcom/ac-string/supplant": 406
  }],
  476: [function(t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      r = t("@marcom/ac-object/clone"),
      s = function o() {
        var t = Array.prototype.slice.call(arguments);
        if (t.length < 2) return r(t[0]);
        var e = r(t.shift(), !0),
          i = t.shift();
        for (var s in i) i.hasOwnProperty(s) && (e.hasOwnProperty(s) && "object" === n(e[s]) ? "object" === n(e[s]) && "object" === n(i[s]) && (e[s] = o(e[s], i[s])) : e[s] = i[s]);
        return t.length ? o.apply(null, [e].concat(t)) : e
      };
    e.exports = s
  }, {
    "@marcom/ac-object/clone": 304
  }],
  477: [function(t, e, i) {
    "use strict";
    e.exports = [{
      width: 384,
      height: 160,
      type: "baseline-high",
      suffix: "h"
    }, {
      width: 384,
      height: 160,
      type: "small",
      suffix: "h"
    }, {
      width: 384,
      height: 160,
      type: "baseline-low",
      suffix: "l"
    }, {
      width: 384,
      height: 160,
      type: "baseline-medium",
      suffix: "m"
    }, {
      width: 480,
      height: 200,
      type: "medium",
      suffix: "h"
    }, {
      width: 768,
      height: 320,
      type: "large",
      suffix: ""
    }, {
      width: 960,
      height: 400,
      type: "large",
      suffix: ""
    }, {
      width: 1536,
      height: 640,
      type: "large",
      suffix: "h"
    }, {
      width: 1536,
      height: 640,
      type: "large",
      suffix: "l"
    }, {
      width: 1920,
      height: 800,
      type: "large",
      suffix: "l"
    }, {
      width: 1920,
      height: 800,
      type: "large",
      suffix: "h"
    }]
  }, {}],
  478: [function(t, e, i) {
    "use strict";
    e.exports = [{
      width: 416,
      height: 234,
      type: "baseline-high",
      suffix: "h"
    }, {
      width: 416,
      height: 234,
      type: "small",
      suffix: "h"
    }, {
      width: 416,
      height: 234,
      type: "baseline-low",
      suffix: "l"
    }, {
      width: 416,
      height: 234,
      type: "baseline-medium",
      suffix: "m"
    }, {
      width: 640,
      height: 360,
      type: "medium",
      suffix: "h"
    }, {
      width: 848,
      height: 480,
      type: "large",
      suffix: ""
    }, {
      width: 960,
      height: 540,
      type: "large",
      suffix: ""
    }, {
      width: 1280,
      height: 720,
      type: "large",
      suffix: "h"
    }, {
      width: 1280,
      height: 720,
      type: "large",
      suffix: "l"
    }, {
      width: 1920,
      height: 1080,
      type: "large",
      suffix: "l"
    }, {
      width: 1920,
      height: 1080,
      type: "large",
      suffix: "h"
    }]
  }, {}],
  479: [function(t, e, i) {
    "use strict";
    e.exports = [{
      width: 528,
      height: 244,
      type: "baseline-high",
      suffix: "h"
    }, {
      width: 528,
      height: 244,
      type: "small",
      suffix: "h"
    }, {
      width: 528,
      height: 244,
      type: "baseline-low",
      suffix: "l"
    }, {
      width: 528,
      height: 244,
      type: "baseline-medium",
      suffix: "m"
    }, {
      width: 812,
      height: 375,
      type: "medium",
      suffix: "h"
    }, {
      width: 1082,
      height: 500,
      type: "large",
      suffix: ""
    }, {
      width: 1218,
      height: 563,
      type: "large",
      suffix: ""
    }, {
      width: 1624,
      height: 750,
      type: "large",
      suffix: "h"
    }, {
      width: 1624,
      height: 750,
      type: "large",
      suffix: "l"
    }, {
      width: 2436,
      height: 1126,
      type: "large",
      suffix: "l"
    }, {
      width: 2436,
      height: 1126,
      type: "large",
      suffix: "h"
    }]
  }, {}],
  480: [function(t, e, i) {
    "use strict";
    e.exports = [{
      width: 360,
      height: 360,
      type: "baseline-high",
      suffix: "h"
    }, {
      width: 360,
      height: 360,
      type: "small",
      suffix: "h"
    }, {
      width: 360,
      height: 360,
      type: "baseline-low",
      suffix: "l"
    }, {
      width: 480,
      height: 480,
      type: "medium",
      suffix: ""
    }, {
      width: 540,
      height: 540,
      type: "medium",
      suffix: ""
    }, {
      width: 720,
      height: 720,
      type: "large",
      suffix: "h"
    }, {
      width: 720,
      height: 720,
      type: "large",
      suffix: "l"
    }, {
      width: 1080,
      height: 1080,
      type: "large",
      suffix: "l"
    }, {
      width: 1080,
      height: 1080,
      type: "large",
      suffix: "h"
    }]
  }, {}],
  481: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-string/supplant"),
      r = /_r[0-9].+\.mov$/,
      s = /_[0-9]+x[0-9].+\.mp4$/,
      o = /_([0-9]+)x([0-9]+)/,
      a = /-tpl-.*-/,
      c = /-cc-[a-z].*-/,
      l = /-tft-.*-/,
      u = "m",
      h = "_{width}x{height}{suffix}." + u + "p4",
      d = "_{height}x{width}{suffix}." + u + "p4",
      m = "j",
      f = "_thumbnails." + m + "pg",
      p = t("./1X1AssetSizes"),
      _ = t("./16X9AssetSizes"),
      g = t("./12X5AssetSizes"),
      y = t("./19X9AssetSizes"),
      v = function(t, e) {
        return t.find(function(t) {
          return t.width === e.width && (t.height = e.height) || t.width === e.height && (t.height = e.width)
        })
      },
      b = function(t, e, i, a) {
        var c, u;
        o.test(t);
        var m, f = {};
        if (f.width = parseInt(RegExp.$1, 10), f.height = parseInt(RegExp.$2, 10), t.match(l)) c = g, u = 1536;
        else if (f.width === f.height) c = p, u = 1080;
        else if (t.match(r) || v(_, f)) c = _, u = 1280;
        else {
          if (!v(y, f)) return t;
          c = y, u = 1624
        }
        f.width < f.height && (m = !0);
        var b = c[0].width,
          E = a && a.maxWidth ? Math.max(a.maxWidth, b) : u;
        if (!t) throw "Must provide an url to optimize";
        if (void 0 === e || isNaN(e)) throw "Must provide a width";
        0 === e && (e = f.width), i && (c = c.filter(function(t) {
          return t.type === i
        })), E < 1920 && (c = c.filter(function(t) {
          return t.width <= E
        }));
        var w;
        w = m ? c.reduce(function(t, i) {
          return Math.abs(i.height - e) < Math.abs(t.height - e) ? i : t
        }) : c.reduce(function(t, i) {
          return Math.abs(i.width - e) < Math.abs(t.width - e) ? i : t
        });
        var T = h;
        return m && (T = d), t.match(s) ? t.replace(s, n(T, w)) : t.match(r) ? t.replace(r, n(T, w)) : t
      },
      E = function(t) {
        return t.match(c) ? t.match(s) ? {
          src: t.replace(s, "_cc.vtt"),
          srclang: "en"
        } : t.match(r) ? {
          src: t.replace(r, "_cc.vtt"),
          srclang: "en"
        } : null : null
      },
      w = function(t) {
        return t.match(a) ? {
          url: t.replace(s, f)
        } : null
      };
    e.exports = {
      getVideoSource: b,
      getCaptionsSource: E,
      getThumbnailImageSource: w
    }
  }, {
    "./12X5AssetSizes": 477,
    "./16X9AssetSizes": 478,
    "./19X9AssetSizes": 479,
    "./1X1AssetSizes": 480,
    "@marcom/ac-string/supplant": 406
  }],
  482: [function(t, e, i) {
    "use strict";
    var n = t("../dom-emitter/DOMEmitterMicro"),
      r = t("../texttracks/createTextTracks"),
      s = t("@marcom/ac-console/log"),
      o = window.document,
      a = function(t) {
        this._videoElement = t && t.mediaElement ? t.mediaElement : o.createElement("video"), this.options = t || {}, this._textTracks = r(t), this._initElement(), n.apply(this, [this._videoElement]), this._forwardCaptionEvent = this._forwardCaptionEvent.bind(this), this._textTracksEmitter = this.getTextTracksEventEmitter(), this._textTracksEmitter.on("addtrack", this._forwardCaptionEvent), this._textTracksEmitter.on("change", this._forwardCaptionEvent), this._textTracksEmitter.on("removetrack", this._forwardCaptionEvent)
      },
      c = a.prototype = Object.create(n.prototype);
    c._initElement = function() {
      this._videoElement.classList.add("ac-video-media-controller"), null !== this.options.crossorigin && this._videoElement.setAttribute("crossorigin", this.options.crossorigin ? this.options.crossorigin : "anonymous"), this._videoElement.setAttribute("preload", this.options.preload || "auto"), this._videoElement.setAttribute("x-webkit-airplay", "")
    }, c._forwardCaptionEvent = function(t) {
      this.trigger(t.type)
    }, c.load = function(t, e, i) {
      i && (t = t.map(function(t) {
        return t + "#t=" + i
      })), this._createSourceTags(t), this._createTextTrackTags(e), this._videoElement.load()
    }, c._createSourceTags = function(t) {
      this._videoElement.removeAttribute("src"), this._videoElement.innerHTML = "";
      var e = 0,
        i = t.length;
      for (i && this._videoElement.setAttribute("src", t[0]); e < i; e++) {
        var n = o.createElement("source");
        n.src = t[e], this._videoElement.appendChild(n)
      }
    }, c.play = function() {
      try {
        var t = this._videoElement.play();
        t && "function" == typeof t["catch"] && t["catch"](function(e) {
          this._playPromise === t && this.trigger("PlayPromiseError")
        }.bind(this)), this._playPromise = t
      } catch (e) {
        s(e)
      }
    }, c.pause = function() {
      this._playPromise = null, this._videoElement.pause()
    }, c.addTextTrack = function(t) {
      this._addTextTrackTag(t)
    }, c.removeTextTrack = function(t) {
      this._removeTextTrackTag(t)
    }, c.getMediaElement = function() {
      return this._videoElement
    }, c._createTextTrackTags = function() {
      return this._textTracks.create.apply(this, arguments)
    }, c._addTextTrackTag = function() {
      return this._textTracks.add.apply(this, arguments)
    }, c._removeTextTrackTag = function() {
      return this._textTracks.remove.apply(this, arguments)
    }, c.getTextTracks = function() {
      return this._textTracks.get.apply(this, arguments)
    }, c.getTextTracksEventEmitter = function() {
      return this._textTracks.getEmitter.apply(this, arguments)
    }, c.getReadyState = function() {
      return this._videoElement.readyState
    }, c.getPreload = function() {
      return this._videoElement.preload
    }, c.setPreload = function(t) {
      return this._videoElement.preload = t
    }, c.setPoster = function(t) {
      this._videoElement.poster = t
    }, c.getVolume = function() {
      return this._videoElement.volume
    }, c.getMuted = function() {
      return this._videoElement.muted
    }, c.getPaused = function() {
      return this._videoElement.paused
    }, c.getCurrentTime = function() {
      return this._videoElement.currentTime
    }, c.getDuration = function() {
      return this._videoElement.duration
    }, c.setCurrentTime = function(t) {
      return this._videoElement.currentTime = t
    }, c.setVolume = function(t) {
      return this._videoElement.volume = t
    }, c.setMuted = function(t) {
      this._videoElement.muted = t
    }, c.getEnded = function() {
      return this._videoElement.ended
    }, c.setSrc = function(t) {
      this._videoElement.childNodes.length && t === this._getSrcNode().url || this._createSourceTags([t])
    }, c.getCurrentSrc = function() {
      return this._getSrcNode()
    }, c._getSrcNode = function() {
      return this._videoElement.childNodes[0]
    }, c.setControls = function(t) {
      t ? (this._videoElement.setAttribute("controls", ""), this._videoElement.removeAttribute("aria-hidden")) : (this._videoElement.removeAttribute("controls"), this._videoElement.setAttribute("aria-hidden", "true"))
    }, c.isFullscreen = function() {
      return this._videoElement.webkitDisplayingFullscreen
    }, c.supportsPictureInPicture = function() {
      return "function" == typeof this._videoElement.webkitSetPresentationMode
    }, c.isPictureInPicture = function() {
      return "picture-in-picture" === this._videoElement.webkitPresentationMode
    }, c.setPictureInPicture = function(t) {
      this.supportsPictureInPicture() && this._videoElement.webkitSetPresentationMode(t ? "picture-in-picture" : "inline")
    }, c.supportsAirPlay = function() {
      return !!window.WebKitPlaybackTargetAvailabilityEvent
    }, c.destroy = function() {
      this._textTracks.destroy(), this._textTracksEmitter.off("addtrack", this._forwardCaptionEvent), this._textTracksEmitter.off("change", this._forwardCaptionEvent), this._textTracksEmitter.off("removetrack", this._forwardCaptionEvent), this._textTracks = null, this._textTracksEmitter = null, this._videoElement = null
    }, e.exports = a
  }, {
    "../dom-emitter/DOMEmitterMicro": 424,
    "../texttracks/createTextTracks": 437,
    "@marcom/ac-console/log": 67
  }],
  483: [function(t, e, i) {
    "use strict";
    var n = t("./HTML5Video"),
      r = function() {},
      s = r.prototype;
    s.create = function(t, e) {
      return new n(Object.assign({}, t, {
        parentElement: e
      }))
    }, e.exports = Object.create(r.prototype)
  }, {
    "./HTML5Video": 482
  }],
  484: [function(t, e, i) {
    "use strict";

    function n(t) {
      r.call(this), this._initializeElement(t), o() && (this._updateViewport = this._updateViewport.bind(this), s(window, "resize", this._updateViewport), s(window, "orientationchange", this._updateViewport), this._retinaQuery = window.matchMedia(l), this._updateRetina(), this._retinaQuery.addListener && (this._updateRetina = this._updateRetina.bind(this), this._retinaQuery.addListener(this._updateRetina))), this._updateViewport()
    }
    t("@marcom/ac-polyfills/Function/prototype.bind"), t("@marcom/ac-polyfills/Object/keys"), t("@marcom/ac-polyfills/Object/create");
    var r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      s = t("@marcom/ac-dom-events/utils/addEventListener"),
      o = t("@marcom/ac-feature/mediaQueriesAvailable"),
      a = "viewport-emitter",
      c = "::before",
      l = "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)",
      u = n.prototype = Object.create(r.prototype);
    u.viewport = !1, u.retina = !1, u._initializeElement = function(t) {
      var e;
      t = t || a, e = document.getElementById(t), e || (e = document.createElement("div"), e.id = t, e = document.body.appendChild(e)), this._el = e
    }, u._getElementContent = function() {
      var t;
      return "currentStyle" in this._el ? t = this._el.currentStyle["x-content"] : (this._invalidateStyles(), t = window.getComputedStyle(this._el, c).content), t && (t = t.replace(/["']/g, "")), !!t && t
    }, u._updateViewport = function() {
      var t, e = this.viewport;
      this.viewport = this._getElementContent(), this.viewport && (this.viewport = this.viewport.split(":").pop()), e && this.viewport !== e && (t = {
        from: e,
        to: this.viewport
      }, this.trigger("change", t), this.trigger("from:" + e, t), this.trigger("to:" + this.viewport, t))
    }, u._updateRetina = function(t) {
      var e = this.retina;
      this.retina = this._retinaQuery.matches, e !== this.retina && this.trigger("retinachange", {
        from: e,
        to: this.retina
      })
    }, u._invalidateStyles = function() {
      document.documentElement.clientWidth, this._el.innerHTML = " " === this._el.innerHTML ? " " : " ", document.documentElement.clientWidth
    }, e.exports = n
  }, {
    "@marcom/ac-dom-events/utils/addEventListener": 80,
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-feature/mediaQueriesAvailable": 174,
    "@marcom/ac-polyfills/Function/prototype.bind": void 0,
    "@marcom/ac-polyfills/Object/create": void 0,
    "@marcom/ac-polyfills/Object/keys": void 0
  }],
  485: [function(t, e, i) {
    "use strict";
    var n = t("./ViewportEmitter");
    e.exports = new n
  }, {
    "./ViewportEmitter": 484
  }],
  486: [function(t, e, i) {
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
      c = t("./Model/AnimSystemModel"),
      l = t("./Keyframes/Keyframe"),
      u = t("./Keyframes/KeyframeCSSClass"),
      h = t("./Keyframes/KeyframeDiscreteEvent"),
      d = (t("./KeyframeController"), t("./ScrollGroup")),
      m = t("./TimeGroup"),
      f = {
        create: t("@marcom/ac-raf-emitter/RAFEmitter"),
        update: t("@marcom/ac-raf-emitter/update"),
        external: t("@marcom/ac-raf-emitter/external"),
        draw: t("@marcom/ac-raf-emitter/draw")
      },
      p = null,
      _ = function(t) {
        function e() {
          n(this, e);
          var t = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          if (p) throw "You cannot create multiple AnimSystems. You probably want to create multiple groups instead. You can have unlimited groups on a page";
          return p = t, t.groups = [], t.scrollSystems = [], t.timeSystems = [], t.setupEvents(),
            t
        }
        return s(e, t), o(e, [{
          key: "initialize",
          value: function() {
            var t = this;
            this.initializeModel(), this.createDOMGroups(), f.external(function() {
              t.setupAnimatedContent()
            })
          }
        }, {
          key: "destroy",
          value: function() {
            this.groups.forEach(function(t) {
              return t.destroy()
            }), this.groups = null, this.scrollSystems = null, this.timeSystems = null, window.clearTimeout(c.RESIZE_TIMEOUT), window.removeEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onResizeImmediate)
          }
        }, {
          key: "createTimeGroup",
          value: function(t) {
            var e = new m(t, this);
            return this.groups.push(e), this.timeSystems.push(e), this.trigger(c.EVENTS.ON_GROUP_CREATED, e), e
          }
        }, {
          key: "createScrollGroup",
          value: function(t) {
            if (!t) throw "AnimSystem scroll based groups must supply an HTMLElement";
            var e = new d(t, this);
            return this.groups.push(e), this.scrollSystems.push(e), this.trigger(c.EVENTS.ON_GROUP_CREATED, e), e
          }
        }, {
          key: "createDOMGroups",
          value: function() {
            var t = this;
            document.body.setAttribute("data-anim-scroll-group", "body"), document.querySelectorAll("[data-anim-scroll-group]").forEach(function(e) {
              return t.createScrollGroup(e)
            }), document.querySelectorAll("[data-anim-time-group]").forEach(function(e) {
              return t.createTimeGroup(e)
            }), this.trigger(c.EVENTS.ON_DOM_GROUPS_CREATED, this.groups)
          }
        }, {
          key: "setupAnimatedContent",
          value: function() {
            var t = this,
              e = [];
            [l.DATA_ATTRIBUTE, u.DATA_ATTRIBUTE, h.DATA_ATTRIBUTE].forEach(function(t) {
              for (var i = 0; i < 12; i++) e.push(t + (0 === i ? "" : "-" + (i - 1)))
            });
            for (var i = 0; i < e.length; i++)
              for (var n = e[i], r = document.querySelectorAll("[" + n + "]"), s = 0; s < r.length; s++) {
                var o = r[s],
                  a = JSON.parse(o.getAttribute(n));
                this.addKeyframe(o, a)
              }
            f.update(function() {
              t.groups.forEach(function(t) {
                return t.onKeyframesDirty()
              }), f.draw(function() {
                return t.groups.forEach(function(t) {
                  return t.reconcile()
                })
              }, !0)
            }, !0), this.groups.forEach(function(t) {
              return t.trigger(c.EVENTS.ON_DOM_KEYFRAMES_CREATED, t)
            }), this.trigger(c.EVENTS.ON_DOM_KEYFRAMES_CREATED, this)
          }
        }, {
          key: "initializeModel",
          value: function() {
            c.DOCUMENT_ELEMENT_CLASSES = Array.from(document.documentElement.classList), c.pageMetrics.windowHeight = window.innerHeight, c.pageMetrics.windowWidth = window.innerWidth, c.pageMetrics.scrollY = window.scrollY || window.pageYOffset, c.pageMetrics.scrollX = window.scrollX || window.pageXOffset, c.pageMetrics.breakpoint = c.getBreakpoint();
            var t = document.documentElement.getBoundingClientRect();
            c.pageMetrics.documentOffsetX = t.left + c.pageMetrics.scrollX, c.pageMetrics.documentOffsetY = t.top + c.pageMetrics.scrollY
          }
        }, {
          key: "setupEvents",
          value: function() {
            this.onScroll = this.onScroll.bind(this), this.onResizedDebounced = this.onResizedDebounced.bind(this), this.onResizeImmediate = this.onResizeImmediate.bind(this), window.addEventListener("scroll", this.onScroll), window.addEventListener("resize", this.onResizeImmediate)
          }
        }, {
          key: "determineActiveKeyframes",
          value: function() {
            for (var t = Array.from(document.documentElement.classList), e = 0, i = this.groups.length; e < i; e++) this.groups[e].determineActiveKeyframes(t)
          }
        }, {
          key: "onScroll",
          value: function() {
            c.pageMetrics.scrollY = window.scrollY || window.pageYOffset, c.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
            for (var t = 0, e = this.scrollSystems.length; t < e; t++) this.scrollSystems[t]._onScroll(c.pageMetrics.scrollY);
            this.trigger(c.PageEvents.ON_SCROLL, c.pageMetrics)
          }
        }, {
          key: "onResizeImmediate",
          value: function() {
            c.pageMetrics.windowHeight = window.innerHeight, c.pageMetrics.windowWidth = window.innerWidth, c.pageMetrics.scrollY = window.scrollY || window.pageYOffset, c.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
            var t = document.documentElement.getBoundingClientRect();
            c.pageMetrics.documentOffsetX = t.left + c.pageMetrics.scrollX, c.pageMetrics.documentOffsetY = t.top + c.pageMetrics.scrollY, window.clearTimeout(c.RESIZE_TIMEOUT), c.RESIZE_TIMEOUT = window.setTimeout(this.onResizedDebounced, 250), this.trigger(c.PageEvents.ON_RESIZE_IMMEDIATE, c.pageMetrics)
          }
        }, {
          key: "onResizedDebounced",
          value: function() {
            var t = this;
            f.update(function() {
              var e = c.pageMetrics.breakpoint,
                i = c.getBreakpoint();
              if (i !== e) {
                c.pageMetrics.previousBreakpoint = e, c.pageMetrics.breakpoint = i;
                for (var n = 0, r = t.groups.length; n < r; n++) t.groups[n]._onBreakpointChange(i, e);
                t.trigger(c.PageEvents.ON_BREAKPOINT_CHANGE, c.pageMetrics)
              }
              for (var s = i !== e, o = 0, a = t.groups.length; o < a; o++) t.groups[o]._onResizeDebounced(s);
              t.trigger(c.PageEvents.ON_RESIZE_DEBOUNCED, c.pageMetrics)
            }, !0)
          }
        }, {
          key: "addKeyframe",
          value: function(t, e) {
            var i = this.getGroupForTarget(t);
            return i.addKeyframe(t, e)
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
    "./KeyframeController": 487,
    "./Keyframes/Keyframe": 488,
    "./Keyframes/KeyframeCSSClass": 489,
    "./Keyframes/KeyframeDiscreteEvent": 490,
    "./Model/AnimSystemModel": 491,
    "./ScrollGroup": 500,
    "./TimeGroup": 501,
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-raf-emitter/RAFEmitter": 344,
    "@marcom/ac-raf-emitter/draw": 351,
    "@marcom/ac-raf-emitter/external": 352,
    "@marcom/ac-raf-emitter/update": 355
  }],
  487: [function(t, e, i) {
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
      a = t("./Model/AnimSystemModel"),
      c = (t("./Keyframes/Keyframe"), t("./Keyframes/KeyframeCSSClass")),
      l = (t("./Keyframes/KeyframeDiscreteEvent"), t("./Model/InferKeyframeFromProps")),
      u = t("./Model/UUID"),
      h = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      d = t("@marcom/decompose-css-transform"),
      m = {
        update: t("@marcom/ac-raf-emitter/update"),
        external: t("@marcom/ac-raf-emitter/external"),
        draw: t("@marcom/ac-raf-emitter/draw")
      },
      f = function(t) {
        function e(t, i) {
          n(this, e);
          var s = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return s.uuid = u(), s.group = t, s.element = i, s._ownerIsElement = s.element instanceof Element, s._ownerIsElement ? s.friendlyName = s.element.tagName + "." + Array.from(s.element.classList).join(".") : s.friendlyName = s.element.friendlyName || s.uuid, s.element._animInfo = s.element._animInfo || new a.AnimInfo(t, s), s.element._animInfo.controller = s, s.tweenProps = {}, s.eventObject = new a.EventObject(s, null), s.needsStyleUpdate = !1, s.needsClassUpdate = !1, s.elementMetrics = s.group.metrics.add(s.element), s._parentElementMetrics = null, s.attributes = [], s.keyframes = {}, s._allKeyframes = [], s._activeKeyframes = [], s.keyframesRequiringDispatch = [], s.updateCachedValuesFromElement(), s.boundsMin = 0, s.boundsMax = 0, s
        }
        return s(e, t), o(e, [{
          key: "destroy",
          value: function() {
            this.element._animInfo && this.element._animInfo.controller === this && (this.element._animInfo.controller = null), this.eventObject.controller = null, this.eventObject.element = null, this.eventObject.keyframe = null, this.eventObject.tweenProps = null, this.elementMetrics.destroy(), this.group = null;
            for (var t = 0; t < this._allKeyframes.length; t++) this._allKeyframes[t].destroy();
            this._allKeyframes = null, this._activeKeyframes = null, this.attributes = null, this.keyframes = null
          }
        }, {
          key: "updateCachedValuesFromElement",
          value: function() {
            if (this._ownerIsElement) {
              var t = getComputedStyle(this.element),
                e = d(this.element, !0),
                i = a.KeyframeDefaults.epsilon,
                n = !1;
              this.tweenProps.x = new a.TargetValue(e.translation[0], i, n), this.tweenProps.y = new a.TargetValue(e.translation[1], i, n), this.tweenProps.z = new a.TargetValue(e.translation[2], i, n), this.tweenProps.rotation = new a.TargetValue(e.eulerRotation[2], i, n), this.tweenProps.scale = new a.TargetValue(e.scale[0], i, n), this.tweenProps.scaleX = new a.TargetValue(e.scale[0], i, n), this.tweenProps.scaleY = new a.TargetValue(e.scale[1], i, n), this.tweenProps.opacity = new a.TargetValue(parseFloat(t.opacity), i, n)
            }
          }
        }, {
          key: "addKeyframe",
          value: function(t) {
            var e = l(t);
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
                var s = this.getNearestKeyframeForAttribute(t.local, n);
                s && s.updateLocalProgress(t.local)
              } else r[0].updateLocalProgress(t.local)
            }
          }
        }, {
          key: "reconcile",
          value: function() {
            for (var t = 0, e = this.attributes.length; t < e; t++) {
              var i = this.attributes[t],
                n = this.getNearestKeyframeForAttribute(this.group.timelines.local, i);
              n.updateLocalProgress(this.group.timelines.local), n.snapAtCreation && n.reconcile(i)
            }
          }
        }, {
          key: "determineActiveKeyframes",
          value: function(t) {
            var e = this;
            t = t || Array.from(document.documentElement.classList);
            var i = this._activeKeyframes,
              n = this.attributes;
            this._activeKeyframes = [], this.attributes = [], this.keyframes = {};
            for (var r = 0; r < this._allKeyframes.length; r++) {
              var s = this._allKeyframes[r];
              if (s.setEnabled(t)) {
                this._activeKeyframes.push(s);
                for (var o in s.animValues) this.keyframes[o] = this.keyframes[o] || [], this.keyframes[o].push(s), this.attributes.indexOf(o) === -1 && this.attributes.push(o)
              }
            }
            var a = i.filter(function(t) {
              return e._activeKeyframes.indexOf(t) === -1
            });
            if (0 !== a.length) {
              var l = n.filter(function(t) {
                return e.attributes.indexOf(t) === -1
              });
              0 !== l.length && m.external(function() {
                var t = ["x", "y", "z", "scale", "scaleX", "scaleY", "rotation"],
                  i = l.filter(function(e) {
                    return t.indexOf(e) !== -1
                  });
                i.length !== -1 && e.element.style.removeProperty("transform");
                for (var n = 0, r = l.length; n < r; ++n) {
                  var s = l[n],
                    o = e.tweenProps[s];
                  o.current = o.target = o.initialValue, "opacity" === s && e.element.style.removeProperty("opacity")
                }
                for (var u = 0, h = a.length; u < h; ++u) {
                  var d = a[u];
                  d instanceof c && d._unapply()
                }
              }, !0)
            }
          }
        }, {
          key: "onDOMRead",
          value: function(t) {
            for (var e = 0, i = this.attributes.length; e < i; e++) {
              var n = this.attributes[e],
                r = this.getNearestKeyframeForAttribute(t.local, n);
              r && r.onDOMRead(n)
            }
          }
        }, {
          key: "onDOMWrite",
          value: function(t) {
            this._ownerIsElement ? this.onDOMWriteForElement(t) : this.onDOMWriteForObject(t), this.handleEventDispatch()
          }
        }, {
          key: "onDOMWriteForObject",
          value: function(t) {
            for (var e = 0, i = this.attributes.length; e < i; e++) {
              var n = this.attributes[e];
              this.element[n] = this.tweenProps[n].current
            }
          }
        }, {
          key: "onDOMWriteForElement",
          value: function(t) {
            var e = this.tweenProps,
              i = "";
            if ("undefined" != typeof this.keyframes.scale) i += "scale(" + e.scale.current + "," + e.scale.current + ") ";
            else {
              var n = "undefined" != typeof this.keyframes.scaleX,
                r = "undefined" != typeof this.keyframes.scaleY;
              (n || r) && (i += "scale(" + e.scaleX.current + "," + e.scaleY.current + ") ")
            }
            if ("undefined" != typeof this.keyframes.z ? i += "translate3d(" + e.x.current + "px," + e.y.current + "px, " + e.z.current + "px)" : "undefined" == typeof this.keyframes.x && "undefined" == typeof this.keyframes.y || (i += "translate(" + e.x.current + "px," + e.y.current + "px)"), "undefined" != typeof this.keyframes.rotation ? i += "rotate(" + e.rotation.current + "deg) " : ("undefined" != typeof this.keyframes.rotationX && (i += "rotateX(" + e.rotationX.current + "deg) "), "undefined" != typeof this.keyframes.rotationY && (i += "rotateY(" + e.rotationY.current + "deg) "), "undefined" != typeof this.keyframes.rotationZ && (i += "rotateZ(" + e.rotationZ.current + "deg) ")), "" !== i && (this.element.style.transform = i), "undefined" != typeof this.keyframes.opacity && (this.element.style.opacity = e.opacity.current), this.needsStyleUpdate) {
              for (var s in this.tweenProps.targetStyles) null !== this.tweenProps.targetStyles[s] && (this.element.style[s] = this.tweenProps.targetStyles[s]), this.tweenProps.targetStyles[s] = null;
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
                i.needsEventDispatch = !1, this.eventObject.keyframe = i, this.eventObject.pageMetrics = a.pageMetrics, this.eventObject.event = i.event, this.trigger(i.event, this.eventObject)
              }
              this.keyframesRequiringDispatch.length = 0
            }
          }
        }, {
          key: "updateAnimationConstraints",
          value: function() {
            for (var t = this, e = 0, i = this._activeKeyframes.length; e < i; e++) this._activeKeyframes[e].updateAnimationConstraints();
            this.attributes.forEach(function(e) {
              1 !== t.keyframes[e].length && t.keyframes[e].sort(a.KeyframeComparison)
            }), this.updateDeferredPropertyValues()
          }
        }, {
          key: "refreshMetrics",
          value: function() {
            var t = this,
              e = this._activeKeyframes.map(function(t) {
                return t.relativeTo
              }),
              i = new Set(e);
            i.add(this.element), i.forEach(function(e) {
              return t.group.metrics.refreshMetrics(e)
            }), this.group.keyframesDirty = !0, this.group.requestDOMChange()
          }
        }, {
          key: "updateDeferredPropertyValues",
          value: function() {
            for (var t = 0, e = this.attributes.length; t < e; t++) {
              var i = this.attributes[t],
                n = this.keyframes[i],
                r = n[0];
              if (!(r.keyframeType > a.KeyframeTypes.InterpolationForward))
                for (var s = 0; s < n.length; s++) {
                  var o = n[s];
                  if (null === o.jsonProps[i][0]) {
                    if (0 === s) throw new RangeError("AnimSystem - earliest keyframe cannot defer it's beginning value! " + i + ":[null," + o.jsonProps[i][1] + "]");
                    o.animValues[i][0] = n[s - 1].animValues[i][1]
                  }
                  if (null === o.jsonProps[i][1]) {
                    if (s === e - 1) throw new RangeError("AnimSystem - last keyframe cannot defer it's end value! " + i + ":[" + o.jsonProps[i][0] + ",null]");
                    o.animValues[i][1] = n[s + 1].animValues[i][0]
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
            var i = null,
              n = Number.POSITIVE_INFINITY,
              r = this.keyframes[e];
            if (void 0 === r) return null;
            var s = r.length;
            if (0 === s) return null;
            if (1 === s) return r[0];
            for (var o = 0; o < s; o++) {
              var a = r[o];
              if (a.isInRange(t)) {
                i = a;
                break
              }
              var c = Math.min(Math.abs(t - a.start), Math.abs(t - a.end));
              c < n && (n = c, i = a)
            }
            return i
          }
        }, {
          key: "getAllKeyframesForAttribute",
          value: function(t) {
            return this.keyframes[t]
          }
        }, {
          key: "updateAnimation",
          value: function(t, e) {
            var i = this;
            t.parseOptions(e), t.updateAnimationConstraints(), this.group.updateBounds(), this.group._onScroll(this.group.getPosition()), this.group.requestDOMChange(), m.update(function() {
              i.group.trigger(a.EVENTS.ON_KEYFRAME_UPDATED, t)
            }, !0)
          }
        }]), e
      }(h);
    Object.defineProperty(f.prototype, "parentElementMetrics", {
      get: function() {
        return null === this._parentElementMetrics && (this._parentElementMetrics = this.group.metrics.add(this.element.parentElement)), this._parentElementMetrics
      }
    }), e.exports = f
  }, {
    "./Keyframes/Keyframe": 488,
    "./Keyframes/KeyframeCSSClass": 489,
    "./Keyframes/KeyframeDiscreteEvent": 490,
    "./Model/AnimSystemModel": 491,
    "./Model/InferKeyframeFromProps": 494,
    "./Model/UUID": 495,
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-raf-emitter/draw": 351,
    "@marcom/ac-raf-emitter/external": 352,
    "@marcom/ac-raf-emitter/update": 355,
    "@marcom/decompose-css-transform": 502
  }],
  488: [function(t, e, i) {
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
      c = t("../Model/UnitBezier"),
      l = function() {
        function t(e, i) {
          n(this, t), this.controller = e, this.relativeTo = e.element, this.jsonProps = i, this.ease = s.KeyframeDefaults.ease, this.easeFunctionString = s.KeyframeDefaults.easeFunctionString, this.easeFunction = a[this.easeFunctionString], this.start = 0, this.end = 0, this.localT = 0, this.id = 0, this.event = "", this.needsEventDispatch = !1, this.snapAtCreation = !1, this.isEnabled = !1, this.animValues = {}, this.breakpointMask = "SMLX", this.disabledWhen = "", this.keyframeType = s.KeyframeTypes.Interpolation, this.hold = !1
        }
        return r(t, [{
          key: "destroy",
          value: function() {
            this.controller = null, this.jsonProps = null, this.easeFunction = null, this.animValues = null
          }
        }, {
          key: "parseOptions",
          value: function(t) {
            if (this.jsonProps = t, "" !== t.relativeTo && t.relativeTo ? t.relativeTo && (this.relativeTo = this.controller.group.element.querySelector(t.relativeTo) || document.querySelector(t.relativeTo), null === this.relativeTo && (console.warn("Keyframe for", this.controller.element.className, " .relativeTo failed to find " + t.relativeTo + "' via querySelector"), this.relativeTo = this.controller.element), this.controller.group.metrics.add(this.relativeTo)) : this.relativeTo = this.controller.element, t.ease ? this.ease = parseFloat(t.ease) : t.ease = this.ease, t.snapAtCreation ? this.snapAtCreation = t.snapAtCreation : t.snapAtCreation = this.snapAtCreation, t.easeFunction ? this.easeFunction = t.easeFunction : t.easeFunction = this.easeFunctionString, t.breakpointMask ? this.breakpointMask = t.breakpointMask : t.breakpointMask = this.breakpointMask, t.disabledWhen ? this.disabledWhen = t.disabledWhen : t.disabledWhen = this.disabledWhen, t.hold ? this.hold = t.hold : t.hold = this.hold, this.easeFunction = a[t.easeFunction], !a.hasOwnProperty(t.easeFunction)) {
              var e = c.fromCSSString(t.easeFunction);
              e ? this.easeFunction = e : console.error("Keyframe parseOptions cannot find EasingFunction named '" + t.easingFunction + "'")
            }
            for (var i in t)
              if (s.KeyframeJSONReservedWords.indexOf(i) === -1) {
                var n = t[i];
                if (Array.isArray(n)) {
                  if (this.animValues[i] = this.controller.group.expressionParser.parse(this, n), void 0 === this.controller.tweenProps[i] || !this.controller._ownerIsElement) {
                    var r = 0;
                    this.controller._ownerIsElement || (r = this.controller.element[i]);
                    var o = new s.TargetValue(r, s.KeyframeDefaults.epsilon, this.snapAtCreation);
                    this.controller.tweenProps[i] = o
                  }
                  var l = this.controller.tweenProps[i];
                  if (t.epsilon) l.epsilon = t.epsilon;
                  else {
                    var u = Math.abs(this.animValues[i][0] - this.animValues[i][1]),
                      h = Math.min(.001 * u, l.epsilon, s.KeyframeDefaults.epsilon);
                    l.epsilon = Math.max(h, 1e-4)
                  }
                }
              } this.keyframeType = this.hold ? s.KeyframeTypes.InterpolationForward : s.KeyframeTypes.Interpolation, t.event && (this.event = t.event)
          }
        }, {
          key: "overwriteProps",
          value: function(t) {
            this.animValues = {};
            var e = Object.assign({}, this.jsonProps, t);
            this.controller.group.keyframesDirty = !0, this.controller.updateAnimation(this, e)
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
            t = t || Array.from(document.documentElement.classList);
            var e = this.breakpointMask.indexOf(s.pageMetrics.breakpoint) !== -1,
              i = !1;
            return "" !== this.disabledWhen && (i = t.indexOf(this.disabledWhen) !== -1), this.isEnabled = e && !i, this.isEnabled
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
              this.animValues[t] = this.controller.group.expressionParser.parse(this, e)
            }
          }
        }]), t
      }();
    l.DATA_ATTRIBUTE = "data-anim-tween", e.exports = l
  }, {
    "../Model/AnimSystemModel": 491,
    "../Model/EasingFunctions": 492,
    "../Model/UnitBezier": 496,
    "@marcom/sm-math-utils": 519
  }],
  489: [function(t, e, i) {
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
      c = t("./Keyframe"),
      l = t("../Model/AnimSystemModel.js"),
      u = function(t) {
        function e(t, i) {
          n(this, e);
          var s = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
          return s.keyframeType = l.KeyframeTypes.CSSClass, s._triggerType = e.TRIGGER_TYPE_CSS_CLASS, s.cssClass = "", s.friendlyName = "", s.style = {
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
            c.prototype.parseOptions.call(this, t), this.animValues[this.friendlyName] = [0, 0], void 0 === this.controller.tweenProps[this.friendlyName] && (this.controller.tweenProps[this.friendlyName] = new l.TargetValue(0, 1, (!1))), this.keyframeType = l.KeyframeTypes.CSSClass
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
      }(c);
    u.TRIGGER_TYPE_CSS_CLASS = 0, u.TRIGGER_TYPE_STYLE_PROPERTY = 1, u.DATA_ATTRIBUTE = "data-anim-classname", e.exports = u
  }, {
    "../Model/AnimSystemModel.js": 491,
    "./Keyframe": 488
  }],
  490: [function(t, e, i) {
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
      c = t("./Keyframe"),
      l = t("../Model/AnimSystemModel.js"),
      u = function(t) {
        function e(t, i) {
          n(this, e);
          var s = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
          return s.keyframeType = l.KeyframeTypes.Event, s.isApplied = !1, s.hasDuration = !1, s.isCurrentlyInRange = !1, s
        }
        return s(e, t), o(e, [{
          key: "parseOptions",
          value: function(t) {
            t.x = void 0, t.y = void 0, t.scale = void 0, t.scaleX = void 0, t.scaleY = void 0, t.rotation = void 0, t.style = void 0, t.cssClass = void 0, t.rotation = void 0, t.opacity = void 0, t.hold = void 0, void 0 === t.end && (t.end = t.start), this.event = t.event, this.animValues[this.event] = [0, 0], "undefined" == typeof this.controller.tweenProps[this.event] && (this.controller.tweenProps[this.event] = new l.TargetValue(0, 1, (!1))), a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "parseOptions", this).call(this, t), this.keyframeType = l.KeyframeTypes.Event
          }
        }, {
          key: "updateLocalProgress",
          value: function(t) {
            if (this.hasDuration) {
              var e = this.isCurrentlyInRange,
                i = t >= this.start && t <= this.end;
              if (e === i) return;
              return i && !e ? this._trigger(this.event + ":enter") : e && !i && this._trigger(this.event + ":exit"), void(this.isCurrentlyInRange = i)
            }!this.isApplied && t >= this.start ? (this._trigger(this.event), this.isApplied = !0) : this.isApplied && t < this.start && (this._trigger(this.event + ":reverse"), this.isApplied = !1)
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
          key: "onDOMRead",
          value: function(t, e) {}
        }, {
          key: "reconcile",
          value: function(t, e) {}
        }, {
          key: "updateAnimatedValueConstraints",
          value: function() {}
        }]), e
      }(c);
    u.DATA_ATTRIBUTE = "data-anim-event", e.exports = u
  }, {
    "../Model/AnimSystemModel.js": 491,
    "./Keyframe": 488
  }],
  491: [function(t, e, i) {
    "use strict";
    var n = {
      GUI_INSTANCE: null,
      ANIM_INSTANCE: null,
      VIEWPORT_EMITTER_ELEMENT: void 0,
      LOCAL_STORAGE_KEYS: {
        GuiPosition: "GuiPosition-0"
      },
      DOCUMENT_ELEMENT_CLASSES: [],
      RESIZE_TIMEOUT: -1,
      BREAKPOINTS: [{
        name: "S",
        longName: "small",
        mediaQuery: "only screen and (max-width: 735px)"
      }, {
        name: "M",
        longName: "medium",
        mediaQuery: "only screen and (max-width: 1068px)"
      }, {
        name: "L",
        longName: "xlarge",
        mediaQuery: "only screen and (min-width: 1442px)"
      }, {
        name: "L",
        longName: "large",
        mediaQuery: "only screen and (min-width: 1069px)"
      }],
      getBreakpoint: function() {
        for (var t = 0; t < n.BREAKPOINTS.length; t++) {
          var e = n.BREAKPOINTS[t],
            i = window.matchMedia(e.mediaQuery);
          if (i.matches) return e.name
        }
      },
      KeyframeDefaults: {
        ease: .1,
        epsilon: .05,
        easeFunctionString: "linear",
        easeFunction: "linear",
        hold: !1,
        snapAtCreation: !1,
        toggle: !1,
        breakpointMask: "SMLX",
        event: "",
        disabledWhen: "",
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
        ON_TIMELINE_UPDATE: "ON_TIMELINE_UPDATE"
      },
      PageEvents: {
        ON_SCROLL: "ON_SCROLL",
        ON_RESIZE_IMMEDIATE: "ON_RESIZE_IMMEDIATE",
        ON_RESIZE_DEBOUNCED: "ON_RESIZE_DEBOUNCED",
        ON_BREAKPOINT_CHANGE: "ON_BREAKPOINT_CHANGE"
      },
      KeyframeJSONReservedWords: ["event", "cssClass", "style", "relativeTo", "start", "end", "epsilon", "easeFunction", "easing", "breakpointMask"],
      TargetValue: function(t, e, i) {
        this.epsilon = parseFloat(e), this.snapAtCreation = i, this.initialValue = t, this.target = t, this.current = t
      },
      Timeline: function() {
        this.local = 0, this.localUnclamped = 0
      },
      KeyFrames: function(t, e) {
        this.a = t.top - e, this.a < 0 && (this.a = t.top), this.b = t.top, this.d = t.bottom, this.c = Math.max(this.d - e, this.b)
      },
      pageMetrics: new function() {
        this.scrollX = 0, this.scrollY = 0, this.windowWidth = 0, this.windowHeight = 0, this.documentOffsetX = 0, this.documentOffsetY = 0, this.previousBreakpoint = "", this.breakpoint = ""
      },
      EventObject: function(t, e) {
        this.controller = t, this.element = this.controller.element, this.keyframe = e, this.event = "", this.tweenProps = this.controller.tweenProps
      },
      KeyframeComparison: function(t, e) {
        return t.start < e.start ? -1 : t.start > e.start ? 1 : 0
      },
      AnimInfo: function(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.isGroup = i, this.group = t, this.controller = e
      }
    };
    e.exports = n
  }, {}],
  492: [function(t, e, i) {
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
        return 0 === t ? t : (.04 - .04 / t) * Math.sin(25 * t) + 1;
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
  493: [function(t, e, i) {
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
      o = window.Symbol || function() {
        var t = 0;
        return function() {
          return ++t + ""
        }
      }(),
      a = function() {
        function t() {
          n(this, t), this._symbols = [], this._lut = {}
        }
        return r(t, [{
          key: "destroy",
          value: function() {
            for (var t = 0, e = this._symbols.length; t < e; t++) {
              var i = this._lut[this._symbols[t]];
              i.el._animSymbol = null, i.el = null
            }
            this._lut = null
          }
        }, {
          key: "add",
          value: function(t) {
            if (void 0 === t._animSymbol && (t._animSymbol = o()), void 0 === this._lut[t._animSymbol]) {
              var e = new c(t);
              this._refreshMetrics(e), this._lut[t._animSymbol] = e, this._symbols.push(t._animSymbol)
            }
            return this._lut[t._animSymbol]
          }
        }, {
          key: "get",
          value: function(t) {
            if (void 0 === t._animSymbol) throw "ElementMetricsLookup Attempting to retrieve info on element which is not being tracked.";
            return this._lut[t._animSymbol]
          }
        }, {
          key: "refreshAll",
          value: function() {
            for (var t = 0, e = this._symbols.length; t < e; t++) {
              var i = this._lut[this._symbols[t]];
              this._refreshMetrics(i)
            }
          }
        }, {
          key: "refreshMetrics",
          value: function(t) {
            var e = this.get(t);
            return e ? this._refreshMetrics(e) : null
          }
        }, {
          key: "_refreshMetrics",
          value: function(t) {
            var e = t.el;
            if (e instanceof Element) {
              if (void 0 === e.offsetWidth) {
                var i = e.getBoundingClientRect();
                return t.width = i.width, t.height = i.height, t.top = s.pageMetrics.scrollY + i.top, t.left = s.pageMetrics.scrollX + i.left, t.right = t.left + t.width, t.bottom = t.top + t.height, t
              }
              t.width = e.offsetWidth, t.height = e.offsetHeight, t.top = s.pageMetrics.documentOffsetY, t.left = s.pageMetrics.documentOffsetX;
              for (var n = e; n;) t.top += n.offsetTop, t.left += n.offsetLeft, n = n.offsetParent;
              return t.right = t.left + t.width, t.bottom = t.top + t.height, t
            }
          }
        }]), t
      }(),
      c = function() {
        function t(e) {
          n(this, t), this.el = e, this.top = 0, this.bottom = 0, this.left = 0, this.right = 0, this.height = 0, this.width = 0
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
    "./AnimSystemModel": 491
  }],
  494: [function(t, e, i) {
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
      throw "Could not determine tween type based on " + JSON.stringify(t)
    }
  }, {
    "../Keyframes/Keyframe": 488,
    "../Keyframes/KeyframeCSSClass": 489,
    "../Keyframes/KeyframeDiscreteEvent": 490,
    "./AnimSystemModel": 491
  }],
  495: [function(t, e, i) {
    "use strict";
    e.exports = function() {
      for (var t = "", e = 0; e < 8; e++) {
        var i = 16 * Math.random() | 0;
        8 !== e && 12 !== e && 16 !== e && 20 !== e || (t += "-"), t += (12 === e ? 4 : 16 === e ? 3 & i | 8 : i).toString(16)
      }
      return t
    }
  }, {}],
  496: [function(t, e, i) {
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
      c = function() {
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
            var e, i, n, r, c, l;
            for (n = t, l = 0; l < a; l++) {
              if (r = this.sampleCurveX(n) - t, o(r) < s) return n;
              if (c = this.sampleCurveDerivativeX(n), o(c) < s) break;
              n -= r / c
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
      l = /\d*\.?\d+/g;
    c.fromCSSString = function(t) {
      var e = t.match(l);
      if (4 !== e.length) throw "UnitBezier could not convert " + t + " to cubic-bezier";
      var i = e.map(Number),
        n = new c(i[0], i[1], i[2], i[3]);
      return n.solve.bind(n)
    }, e.exports = c
  }, {}],
  497: [function(t, e, i) {
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
      o = t("./Operations"),
      a = /([-|\+])?(\d+\.?\d*)(px|vh|vw|pw|ph|\%w|\%h|rw|rh|\%)?|(-|\+|\*|\/)/g,
      c = /^[-+]?(?:[0-9]{0,30}\.)?[0-9]{1,30}(?:[Ee][-+]?[1-2]?[0-9])?$/g,
      l = function() {
        function t(e) {
          n(this, t), this.group = e
        }
        return r(t, [{
          key: "parse",
          value: function(t, e) {
            if (Array.isArray(e)) return this.parseArray(t, e);
            throw new Error("Keyframe value `" + e + "` is not supported. Only arrays in the form of [start,end] are currently supported")
          }
        }, {
          key: "parseArray",
          value: function(t, e) {
            var i = this.parseExpression(t, e[0]),
              n = this.parseExpression(t, e[1]);
            return [i, n]
          }
        }, {
          key: "parseExpression",
          value: function(t, e) {
            if (null === e) return 0;
            if ("number" == typeof e) return e;
            for (var i = 5, n = void 0;
              (n = e.indexOf("(")) !== -1 && --i > 0;) {
              var r = this.captureParenthesis(e, n),
                s = this.parseExpression(t, r);
              e = e.replace("(" + r + ")", s)
            }
            for (var c = void 0, l = []; null !== (c = a.exec(e));)
              if (c.index === a.lastIndex && a.lastIndex++, c[4]) l.push(o.GetOpCode(c[4]));
              else {
                var u = c[1],
                  h = parseFloat(c[2]),
                  d = c[3];
                "-" === u && (h *= -1);
                var m = this.parseSplitUnit(t, h, d);
                l.push(m)
              } var f = l.length;
            if (3 === f && "function" == typeof l[1]) return l[1](l[0], l[2]);
            for (var p = 0; p < f; p++)
              if ("function" == typeof l[p] && 1 === l[p].priority) {
                var _ = l[p - 1],
                  g = l[p + 1],
                  y = l[p](_, g);
                l[p - 1] = null, l[p + 0] = null, l[p + 1] = y, p += 1
              } for (var v = 0; null == l[v] && v < f;) v += 1;
            var b = l[v],
              E = null,
              w = null;
            for (v += 1; v < f; v++) null !== l[v] ? l[v] instanceof Function ? E = l[v] : (null === w && (w = l[v]), null !== w && (E = E || o.add, b = E(b, w), E = null, w = null)) : v += 1;
            return b
          }
        }, {
          key: "parseSplitUnit",
          value: function(t, e, i) {
            if ("undefined" == typeof i) return parseFloat(e);
            switch (i) {
              case "vh":
                return .01 * e * s.pageMetrics.windowHeight;
              case "%":
                return .01 * e * t.controller.elementMetrics.height;
              case "px":
                return e;
              case "rh":
                return .01 * e * this.group.metrics.get(t.relativeTo).height;
              case "vw":
                return .01 * e * s.pageMetrics.windowWidth;
              case "rw":
                return .01 * e * this.group.metrics.get(t.relativeTo).width;
              case "%w":
                return .01 * e * t.controller.elementMetrics.width;
              case "%h":
                return .01 * e * t.controller.elementMetrics.height;
              case "pw":
                return .01 * e * t.controller.parentElementMetrics.width;
              case "ph":
                return .01 * e * t.controller.parentElementMetrics.height;
              default:
                throw new Error("Keyframe no strategy found for unit `" + i + "` only `vh, vw, %, ph, pw` are supported")
            }
          }
        }, {
          key: "captureParenthesis",
          value: function(t, e) {
            for (var i = "", n = 0, r = !1, s = t.length, o = e; o < s; o++)
              if ("(" === t[o] ? (n += 1, r && (i += t[o]), r = !0) : ")" === t[o] ? (n -= 1, 0 !== n && (i += t[o])) : r && (i += t[o]), r && 0 === n) return i
          }
        }, {
          key: "isUnitlessNumber",
          value: function(t) {
            return String(t).match(c)
          }
        }, {
          key: "destroy",
          value: function() {
            this.group = null
          }
        }, {
          key: "logParts",
          value: function(t) {
            console.log(t.reduce(function(t, e) {
              return "function" == typeof e ? t + e.friendlyName + " " : t + (e + " ")
            }, ""))
          }
        }]), t
      }();
    e.exports = l
  }, {
    "../Model/AnimSystemModel": 491,
    "./Operations": 498
  }],
  498: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var r = function s() {
      n(this, s), this.sub = function(t, e) {
        return t - e
      }, this.add = function(t, e) {
        return t + e
      }, this.mul = function(t, e) {
        return t * e
      }, this.div = function(t, e) {
        return t / e
      }, this.add.friendlyName = "add", this.sub.friendlyName = "sub", this.mul.friendlyName = "mul", this.div.friendlyName = "div", this.add.priority = 0, this.sub.priority = 0, this.mul.priority = 1, this.div.priority = 1, this.GetOpCode = function(t) {
        switch (t) {
          case "-":
            return this.sub;
          case "+":
            return this.add;
          case "*":
            return this.mul;
          case "/":
            return this.div;
          default:
            throw new Error('AnimSystem.parsing.Operations - op code "' + t + "\" was found. Only '+ - * /' are supported. Check expression for typos/spacing issues")
        }
      }
    };
    e.exports = new r
  }, {}],
  499: [function(t, e, i) {
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
          var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          n(this, t), this.group = e, this.groupIsTimeBased = i
        }
        return r(t, [{
          key: "parse",
          value: function(t, e) {
            if ("number" == typeof e) return e;
            var i = this.groupIsTimeBased ? 0 : this.group.metrics.get(t.relativeTo).top,
              n = this.group.expressionParser.parseExpression(t, e),
              r = n + i;
            return this.group.convertScrollPositionToTValue(r)
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
  500: [function(t, e, i) {
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
      a = function g(t, e, i) {
        null === t && (t = Function.prototype);
        var n = Object.getOwnPropertyDescriptor(t, e);
        if (void 0 === n) {
          var r = Object.getPrototypeOf(t);
          return null === r ? void 0 : g(r, e, i)
        }
        if ("value" in n) return n.value;
        var s = n.get;
        if (void 0 !== s) return s.call(i)
      },
      c = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      l = t("@marcom/sm-math-utils"),
      u = t("./Model/AnimSystemModel"),
      h = t("./Model/ElementMetricsLookup"),
      d = t("./Parsing/ExpressionParser"),
      m = t("./Parsing/TimeParser"),
      f = (t("./Keyframes/Keyframe"), t("./KeyframeController")),
      p = {
        create: t("@marcom/ac-raf-emitter/RAFEmitter"),
        update: t("@marcom/ac-raf-emitter/update"),
        draw: t("@marcom/ac-raf-emitter/draw")
      },
      _ = function(t) {
        function e(t, i) {
          n(this, e);
          var s = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return s.anim = i, s.element = t, s.name = s.name || t.getAttribute("data-anim-scroll-group"), s.isEnabled = !0, s.timelines = new u.Timeline, s.metrics = new h, s.metrics.add(s.element), s.expressionParser = new d(s), s.timeParser = new m(s), s.boundsMin = 0, s.boundsMax = 0, s.lastPosition = Math.random(), s.keyframesDirty = !1, s.keyFrames = new u.KeyFrames(s.metrics.get(s.element), u.pageMetrics.windowHeight), s.keyframeControllers = [], s.updateProgress(s.getPosition()), s.setupRAFEmitter(), s.gui = null, s.finalizeInit(), s
        }
        return s(e, t), o(e, [{
          key: "finalizeInit",
          value: function() {
            this.element._animInfo = new u.AnimInfo(this, null, (!0))
          }
        }, {
          key: "destroy",
          value: function() {
            this.expressionParser.destroy(), this.expressionParser = null, this.timeParser.destroy(), this.timeParser = null;
            for (var t = 0, i = this.keyframeControllers.length; t < i; t++) this.keyframeControllers[t].destroy();
            this.timelines = null, this.keyFrames = null, a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this)
          }
        }, {
          key: "setupRAFEmitter",
          value: function() {
            this._rafEmitter = new p.create, this.onDOMRead = this.onDOMRead.bind(this), this.onDOMWrite = this.onDOMWrite.bind(this), this._rafEmitter.on("update", this.onDOMRead), this._rafEmitter.on("draw", this.onDOMWrite)
          }
        }, {
          key: "requestDOMChange",
          value: function() {
            return !!this.isEnabled && this._rafEmitter.run()
          }
        }, {
          key: "onDOMRead",
          value: function() {
            this.keyframesDirty && this.onKeyframesDirty();
            for (var t = 0, e = this.keyframeControllers.length; t < e; t++) this.keyframeControllers[t].onDOMRead(this.timelines)
          }
        }, {
          key: "onDOMWrite",
          value: function() {
            for (var t = 0, e = this.keyframeControllers.length; t < e; t++) this.keyframeControllers[t].onDOMWrite(this.timelines);
            this.needsUpdate() && this.requestDOMChange()
          }
        }, {
          key: "needsUpdate",
          value: function() {
            for (var t = 0, e = this.keyframeControllers.length; t < e; t++)
              if (this.keyframeControllers[t].needsUpdate()) return !0;
            return this.keyframesDirty
          }
        }, {
          key: "addKeyframe",
          value: function(t, e) {
            var i = this.anim.getControllerForTarget(t);
            return null === i && (i = new f(this, t), this.keyframeControllers.push(i)), this.keyframesDirty = !0, this.requestDOMChange(), i.addKeyframe(e)
          }
        }, {
          key: "onKeyframeUpdated",
          value: function(t) {
            this.updateBounds(), this._onScroll(this.getPosition()), this.requestDOMChange()
          }
        }, {
          key: "onKeyframesDirty",
          value: function() {
            this.determineActiveKeyframes();
            for (var t = 0, e = this.keyframeControllers.length; t < e; t++) this.keyframeControllers[t].updateAnimationConstraints();
            this.updateProgress(this.getPosition()), this.updateBounds(), this.timelines.local = l.clamp(this.timelines.localUnclamped, this.boundsMin, this.boundsMax);
            var i = this.getPosition();
            this._onScroll(i), this.gui && this.gui.create(), this.keyframesDirty = !1
          }
        }, {
          key: "reconcile",
          value: function() {
            for (var t = 0, e = this.keyframeControllers.length; t < e; t++) this.keyframeControllers[t].reconcile()
          }
        }, {
          key: "determineActiveKeyframes",
          value: function(t) {
            t = t || Array.from(document.documentElement.classList);
            for (var e = 0, i = this.keyframeControllers.length; e < i; e++) this.keyframeControllers[e].determineActiveKeyframes(t)
          }
        }, {
          key: "updateBounds",
          value: function() {
            if (0 === this.keyframeControllers.length) return this.boundsMin = 0, void(this.boundsMax = .1);
            for (var t = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY
              }, e = 0, i = this.keyframeControllers.length; e < i; e++) this.keyframeControllers[e].getBounds(t);
            var n = this.convertTValueToScrollPosition(t.min),
              r = this.convertTValueToScrollPosition(t.max);
            r - n < u.pageMetrics.windowHeight ? (t.min = this.convertScrollPositionToTValue(n - .5 * u.pageMetrics.windowHeight), t.max = this.convertScrollPositionToTValue(r + .5 * u.pageMetrics.windowHeight)) : (t.min -= .001, t.max += .001), this.boundsMin = t.min, this.boundsMax = t.max, this.lastPosition = l.lerp(Math.random(), this.boundsMin, this.boundsMax)
          }
        }, {
          key: "_onBreakpointChange",
          value: function(t, e) {
            this.keyframesDirty = !0, this.requestDOMChange()
          }
        }, {
          key: "_onResizeDebounced",
          value: function(t) {
            if (this.isEnabled && (this.metrics.refreshAll(), this.keyFrames = new u.KeyFrames(this.metrics.get(this.element), u.pageMetrics.windowHeight), this.hasDuration())) {
              for (var e = 0, i = this.keyframeControllers.length; e < i; e++) this.keyframeControllers[e].updateAnimationConstraints();
              this.updateProgress(this.getPosition()), this.updateBounds(), t && (this.lastPosition = l.randFloat(this.boundsMin, this.boundsMax)), (t || this.timelines.localUnclamped >= this.boundsMin && this.timelines.localUnclamped <= this.boundsMax) && this._onScroll(this.getPosition())
            }
          }
        }, {
          key: "updateProgress",
          value: function(t) {
            return this.hasDuration() ? void(this.timelines.localUnclamped = l.map(t, this.keyFrames.a, this.keyFrames.d, 0, 1)) : void(this.timelines.local = this.timelines.localUnclamped = 0)
          }
        }, {
          key: "performTimelineDispatch",
          value: function() {
            if (this.lastPosition !== this.timelines.local) {
              this.trigger(u.EVENTS.ON_TIMELINE_UPDATE, this.timelines.local);
              for (var t = 0, e = this.keyframeControllers.length; t < e; t++) this.keyframeControllers[t].updateLocalProgress(this.timelines)
            }
            null !== this.gui && this.gui.onScrollUpdate(this.timelines)
          }
        }, {
          key: "_onScroll",
          value: function(t) {
            if (!this.isEnabled) return !1;
            this.updateProgress(t);
            var e = this.lastPosition === this.boundsMin || this.lastPosition === this.boundsMax,
              i = this.timelines.localUnclamped === this.boundsMin || this.timelines.localUnclamped === this.boundsMax;
            if (e && i) return void(this.timelines.local = this.timelines.localUnclamped);
            if (this.timelines.localUnclamped >= this.boundsMin && this.timelines.localUnclamped <= this.boundsMax) return this.timelines.local = l.clamp(this.timelines.localUnclamped, this.boundsMin, this.boundsMax), this.performTimelineDispatch(), this.requestDOMChange(), void(this.lastPosition = this.timelines.localUnclamped);
            var n = this.lastPosition > this.boundsMin && this.lastPosition < this.boundsMax,
              r = this.timelines.localUnclamped < this.boundsMin || this.timelines.localUnclamped > this.boundsMax;
            return n && r ? (this.timelines.local = l.clamp(this.timelines.localUnclamped, this.boundsMin, this.boundsMax), this.performTimelineDispatch(), this.requestDOMChange(), void(this.lastPosition = this.timelines.localUnclamped)) : void(null !== this.gui && this.gui.onScrollUpdate(this.timelines))
          }
        }, {
          key: "convertScrollPositionToTValue",
          value: function(t) {
            return this.hasDuration() ? l.map(t, this.keyFrames.a, this.keyFrames.d, 0, 1) : 0
          }
        }, {
          key: "convertTValueToScrollPosition",
          value: function(t) {
            return this.hasDuration() ? l.map(t, 0, 1, this.keyFrames.a, this.keyFrames.d) : 0
          }
        }, {
          key: "hasDuration",
          value: function() {
            return this.keyFrames.a !== this.keyFrames.d
          }
        }, {
          key: "getPosition",
          value: function() {
            return u.pageMetrics.scrollY
          }
        }, {
          key: "getControllerForTarget",
          value: function(t) {
            return this.anim.getControllerForTarget(t)
          }
        }]), e
      }(c);
    e.exports = _
  }, {
    "./KeyframeController": 487,
    "./Keyframes/Keyframe": 488,
    "./Model/AnimSystemModel": 491,
    "./Model/ElementMetricsLookup": 493,
    "./Parsing/ExpressionParser": 497,
    "./Parsing/TimeParser": 499,
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-raf-emitter/RAFEmitter": 344,
    "@marcom/ac-raf-emitter/draw": 351,
    "@marcom/ac-raf-emitter/update": 355,
    "@marcom/sm-math-utils": 519
  }],
  501: [function(t, e, i) {
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
      a = function f(t, e, i) {
        null === t && (t = Function.prototype);
        var n = Object.getOwnPropertyDescriptor(t, e);
        if (void 0 === n) {
          var r = Object.getPrototypeOf(t);
          return null === r ? void 0 : f(r, e, i)
        }
        if ("value" in n) return n.value;
        var s = n.get;
        if (void 0 !== s) return s.call(i)
      },
      c = t("./ScrollGroup"),
      l = t("@marcom/sm-math-utils"),
      u = 0,
      h = -1,
      d = {
        create: t("@marcom/ac-raf-emitter/RAFEmitter")
      },
      m = function(t) {
        function e(t, i) {
          n(this, e), t || (t = document.createElement("div"), t.className = "TimeGroup-" + u++);
          var s = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
          return s.name = s.name || t.getAttribute("data-anim-time-group"), s.timeParser.groupIsTimeBased = !0, s._isPaused = !0, s._repeats = 0, s._isReversed = !1, s._timeScale = 1, s
        }
        return s(e, t), o(e, [{
          key: "finalizeInit",
          value: function() {
            if (a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "finalizeInit", this).call(this), !this.anim) throw "TimeGroup not instantiated correctly. Please use `AnimSystem.createTimeGroup(el)`"
          }
        }, {
          key: "progress",
          value: function(t) {
            if (void 0 === t) return 0 === this.boundsMax ? 0 : this.timelines.local / this.boundsMax;
            var e = t * this.boundsMax;
            this._onScroll(e)
          }
        }, {
          key: "time",
          value: function(t) {
            return void 0 === t ? this.timelines.local : (t = l.clamp(t, this.boundsMin, this.boundsMax), void this._onScroll(t))
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
          key: "restart",
          value: function() {
            this._isReversed ? (this.progress(1), this.reverse()) : (this.progress(0), this.play())
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
              var e = l.clamp(t.delta / 1e3, 0, .5);
              this._isReversed && (e = -e);
              var i = this.time(),
                n = i + e * this._timeScale;
              if (this._repeats === h || this._repeats > 0) {
                var r = !1;
                !this._isReversed && n > this.boundsMax ? (n -= this.boundsMax, r = !0) : this._isReversed && n < 0 && (n = this.boundsMax + n, r = !0), r && (this._repeats = this._repeats === h ? h : this._repeats - 1)
              }
              this.time(n), this._playheadEmitter.run()
            }
          }
        }, {
          key: "updateProgress",
          value: function(t) {
            return this.hasDuration() ? void(this.timelines.localUnclamped = t) : void(this.timelines.local = this.timelines.localUnclamped = 0)
          }
        }, {
          key: "updateBounds",
          value: function() {
            if (0 === this.keyframeControllers.length) return this.boundsMin = 0, void(this.boundsMax = 0);
            for (var t = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY
              }, e = 0, i = this.keyframeControllers.length; e < i; e++) this.keyframeControllers[e].getBounds(t);
            this.boundsMin = 0, this.boundsMax = t.max, this.keyFrames.a = this.keyFrames.b = 0, this.keyFrames.c = this.keyFrames.d = this.boundsMax, this.lastPosition = l.lerp(Math.random(), this.boundsMin, this.boundsMax)
          }
        }, {
          key: "setupRAFEmitter",
          value: function() {
            this.onPlayTimeUpdate = this.onPlayTimeUpdate.bind(this), this._playheadEmitter = new d.create, this._playheadEmitter.on("update", this.onPlayTimeUpdate), a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setupRAFEmitter", this).call(this)
          }
        }, {
          key: "timeScale",
          value: function(t) {
            return void 0 === t ? this._timeScale : (this._timeScale = t, this)
          }
        }, {
          key: "repeats",
          value: function(t) {
            return void 0 === t ? this._repeats : (this._repeats = t, this)
          }
        }, {
          key: "reversed",
          value: function(t) {
            return void 0 === t ? this._isReversed : (this._isReversed = t, this)
          }
        }, {
          key: "getPosition",
          value: function() {
            return this.timelines.local
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
            return this.boundsMax > 0
          }
        }, {
          key: "duration",
          get: function() {
            return this.boundsMax
          }
        }]), e
      }(c);
    e.exports = m
  }, {
    "./ScrollGroup": 500,
    "@marcom/ac-raf-emitter/RAFEmitter": 344,
    "@marcom/sm-math-utils": 519
  }],
  502: [function(t, e, i) {
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
      c = 1,
      l = 3,
      u = 4,
      h = 5,
      d = 7,
      m = 11,
      f = 12,
      p = 13,
      _ = 15,
      g = function(t, e) {
        e = e || !1;
        for (var i = n.clone(t), a = r.create(), c = r.create(), u = r.create(), h = s.create(), f = s.create(), p = (r.create(), 0); p < 16; p++) i[p] /= i[_];
        var g = n.clone(i);
        g[l] = 0, g[d] = 0, g[m] = 0, g[_] = 1;
        var E = (i[3], i[7], i[11], i[12]),
          w = i[13],
          T = i[14],
          S = (i[15], s.create());
        if (b(i[l]) && b(i[d]) && b(i[m])) h = s.fromValues(0, 0, 0, 1);
        else {
          S[0] = i[l], S[1] = i[d], S[2] = i[m], S[3] = i[_];
          var C = n.invert(n.create(), g),
            x = n.transpose(n.create(), C);
          h = s.transformMat4(h, S, x)
        }
        a[0] = E, a[1] = w, a[2] = T;
        var A = [r.create(), r.create(), r.create()];
        A[0][0] = i[0], A[0][1] = i[1], A[0][2] = i[2], A[1][0] = i[4], A[1][1] = i[5], A[1][2] = i[6], A[2][0] = i[8], A[2][1] = i[9], A[2][2] = i[10], c[0] = r.length(A[0]), r.normalize(A[0], A[0]), u[0] = r.dot(A[0], A[1]), A[1] = y(A[1], A[0], 1, -u[0]), c[1] = r.length(A[1]), r.normalize(A[1], A[1]), u[0] /= c[1], u[1] = r.dot(A[0], A[2]), A[2] = y(A[2], A[0], 1, -u[1]), u[2] = r.dot(A[1], A[2]), A[2] = y(A[2], A[1], 1, -u[2]), c[2] = r.length(A[2]), r.normalize(A[2], A[2]), u[1] /= c[2], u[2] /= c[2];
        var k = r.cross(r.create(), A[1], A[2]);
        if (r.dot(A[0], k) < 0)
          for (p = 0; p < 3; p++) c[p] *= -1, A[p][0] *= -1, A[p][1] *= -1, A[p][2] *= -1;
        f[0] = .5 * Math.sqrt(Math.max(1 + A[0][0] - A[1][1] - A[2][2], 0)), f[1] = .5 * Math.sqrt(Math.max(1 - A[0][0] + A[1][1] - A[2][2], 0)), f[2] = .5 * Math.sqrt(Math.max(1 - A[0][0] - A[1][1] + A[2][2], 0)), f[3] = .5 * Math.sqrt(Math.max(1 + A[0][0] + A[1][1] + A[2][2], 0)), A[2][1] > A[1][2] && (f[0] = -f[0]), A[0][2] > A[2][0] && (f[1] = -f[1]), A[1][0] > A[0][1] && (f[2] = -f[2]);
        var P = s.fromValues(f[0], f[1], f[2], 2 * Math.acos(f[3])),
          O = v(f);
        return e && (u[0] = Math.round(u[0] * o * 100) / 100, u[1] = Math.round(u[1] * o * 100) / 100, u[2] = Math.round(u[2] * o * 100) / 100, O[0] = Math.round(O[0] * o * 100) / 100, O[1] = Math.round(O[1] * o * 100) / 100, O[2] = Math.round(O[2] * o * 100) / 100, P[3] = Math.round(P[3] * o * 100) / 100), {
          translation: a,
          scale: c,
          skew: u,
          perspective: h,
          quaternion: f,
          eulerRotation: O,
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
          c = t[2] * t[2],
          l = o + a + c + s,
          u = t[0] * t[1] + t[2] * t[3];
        return u > .499 * l ? (i = 2 * Math.atan2(t[0], t[3]), n = Math.PI / 2, e = 0, r.fromValues(e, i, n)) : u < -.499 * l ? (i = -2 * Math.atan2(t[0], t[3]), n = -Math.PI / 2, e = 0, r.fromValues(e, i, n)) : (i = Math.atan2(2 * t[1] * t[3] - 2 * t[0] * t[2], o - a - c + s), n = Math.asin(2 * u / l), e = Math.atan2(2 * t[0] * t[3] - 2 * t[1] * t[2], -o + a - c + s), r.fromValues(e, i, n))
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
          i[a] = r[0], i[c] = r[1], i[f] = r[4], i[u] = r[2], i[h] = r[3], i[p] = r[5]
        }
        return i
      };
    e.exports = function(t, e) {
      var i = E(t);
      return g(i, e)
    }
  }, {
    "gl-mat4/clone": 524,
    "gl-mat4/create": 525,
    "gl-mat4/invert": 528,
    "gl-mat4/transpose": 536,
    "gl-vec3/create": 537,
    "gl-vec3/cross": 538,
    "gl-vec3/dot": 539,
    "gl-vec3/fromValues": 540,
    "gl-vec3/length": 541,
    "gl-vec3/normalize": 542,
    "gl-vec4/create": 543,
    "gl-vec4/fromValues": 544,
    "gl-vec4/transformMat4": 545
  }],
  503: [function(t, e, i) {
    e.exports = {
      versionNumber: "0.2.0-rc.1"
    }
  }, {}],
  504: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-shared-instance").SharedInstance,
      r = t("./.release-info.json"),
      s = t("./lens/core/Lens");
    e.exports = n.share("@marcom/lens", r.versionNumber, s)
  }, {
    "./.release-info.json": 503,
    "./lens/core/Lens": 509,
    "@marcom/ac-shared-instance": 358
  }],
  505: [function(t, e, i) {
    "use strict";
    e.exports = {
      COMPONENT_LIST: "component-list",
      COMPONENT_REGISTERED: "component-registered",
      CURRENT_COMPONENT_LIST: "current-components"
    }
  }, {}],
  506: [function(t, e, i) {
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
      c = t("../helpers/destroyObject"),
      l = t("../helpers/getGenericEventName"),
      u = t("../helpers/getGenericRAFLoopName"),
      h = t("../helpers/getGenericComponentName"),
      d = t("../../lens"),
      m = t("@marcom/ac-raf-emitter/update"),
      f = t("@marcom/ac-raf-emitter/draw"),
      p = t("@marcom/ac-raf-emitter/cancelUpdate"),
      _ = t("@marcom/ac-raf-emitter/cancelDraw"),
      g = function(t) {
        function e() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          n(this, e);
          var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return i.lens = t.lens || d, i.el = t.el, i._setInitialAnimGroup(t.group), t.name && (i.name = function() {
            return t.name
          }), i.keyframes = new Set, i.mounted = !1, i._keyframeController = null, i._keyframeExtensions = {}, i._rafLoopCount = -1, i._rafLoops = {}, i._destroyed = !1, i.onResizeImmediate = i.onResizeImmediate.bind(i), i.onResizeDebounced = i.onResizeDebounced.bind(i), i.onBreakpointChange = i.onBreakpointChange.bind(i), i.lens._addComponent(i, t.preventAutoMount), i
        }
        return s(e, t), o(e, [{
          key: "name",
          value: function() {
            return h(this.constructor)
          }
        }, {
          key: "componentWillMount",
          value: function(t) {}
        }, {
          key: "componentDidMount",
          value: function(t) {}
        }, {
          key: "componentWillUnmount",
          value: function(t) {}
        }, {
          key: "componentDidUnmount",
          value: function(t) {}
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
          key: "addKeyframe",
          value: function(t) {
            return this._addKeyframe(t)
          }
        }, {
          key: "addDiscreteEvent",
          value: function(t) {
            t.event || (t.event = l(this.el));
            var e = this._addKeyframe(t);
            return this._addKeyframeControllerEvents(e, t, [{
              name: "onenter",
              type: "enter",
              method: "on"
            }, {
              name: "onceenter",
              type: "enter",
              method: "once"
            }, {
              name: "onexit",
              type: "exit",
              method: "on"
            }, {
              name: "onceexit",
              type: "exit",
              method: "once"
            }]), e
          }
        }, {
          key: "addContinuousEvent",
          value: function(t) {
            t.event || (t.event = l(this.el)), t[t.event] = [0, 1];
            var e = this._addKeyframe(t);
            return this._addKeyframeControllerEvents(e, t, [{
              name: "onevent",
              method: "on"
            }, {
              name: "onceevent",
              method: "once"
            }]), e
          }
        }, {
          key: "addRAFLoop",
          value: function(t) {
            t.event || (t.event = u(this.el));
            var e = this._addKeyframe(t),
              i = ++this._rafLoopCount;
            return e._lens.rafLoop = {
              id: i,
              onupdate: this._onRAFLoopUpdate.bind(this, e, t),
              ondraw: this._onRAFLoopDraw.bind(this, e, t)
            }, this._addKeyframeControllerEvents(e, t, [{
              name: "onenter",
              type: "enter",
              method: "on"
            }, {
              name: "onceenter",
              type: "enter",
              method: "once"
            }, {
              name: "onexit",
              type: "exit",
              method: "on"
            }, {
              name: "onceexit",
              type: "exit",
              method: "once"
            }, {
              type: "enter",
              method: "on",
              callback: this._onRAFLoopEnter.bind(this, e)
            }, {
              type: "exit",
              method: "on",
              callback: this._onRAFLoopExit.bind(this, e)
            }]), e
          }
        }, {
          key: "refreshMetrics",
          value: function(t) {
            var e = this;
            return new Promise(function(i, n) {
              m(function(n) {
                e.group._onResizeDebounced(t), i(), i = null
              }, !0)
            })
          }
        }, {
          key: "forceRedraw",
          value: function() {
            var t = this;
            return new Promise(function(e, i) {
              m(function(i) {
                t.group.onKeyframesDirty(), e(), e = null
              }, !0)
            })
          }
        }, {
          key: "removeKeyframe",
          value: function(t) {
            if (!this.keyframes.has(t)) return !1;
            t._lens.rafLoop && this._cancelRAFLoopRAF(t._lens.rafLoop.id), this._removeKeyframeControllerEvents(t), this.keyframes["delete"](t);
            var e = this._keyframeController._allKeyframes.indexOf(t);
            return this._keyframeController._allKeyframes.splice(e, 1), 0 === this._keyframeController._allKeyframes.length, this.forceRedraw(), !0
          }
        }, {
          key: "removeKeyframes",
          value: function(t) {
            var e = this;
            return "undefined" == typeof t && this.keyframes && (t = Array.from(this.keyframes)), t.map(function(t) {
              return e.removeKeyframe(t)
            })
          }
        }, {
          key: "addKeyframeExtension",
          value: function(t, e) {
            return this._keyframeExtensions[t] ? (this.lens.logger.warn('Keyframe Extension "' + t + '" already registered for component'),
              !1) : (this._keyframeExtensions[t] = e, !0)
          }
        }, {
          key: "removeKeyframeExtension",
          value: function(t) {
            return !!this._keyframeExtensions[t] && (this._keyframeExtensions[t] = null, !0)
          }
        }, {
          key: "removeKeyframeExtensions",
          value: function(t) {
            var e = this;
            return t.map(function(t) {
              return e.removeKeyframeExtension(t)
            })
          }
        }, {
          key: "update",
          value: function() {
            return m.apply(m, Array.prototype.slice.call(arguments, 0))
          }
        }, {
          key: "draw",
          value: function() {
            return f.apply(f, Array.prototype.slice.call(arguments, 0))
          }
        }, {
          key: "destroy",
          value: function() {
            var t = this;
            return new Promise(function(e, i) {
              return t.mounted ? void t.lens.unmountComponent(t).then(function() {
                return t._completeDestroy(e)
              }) : void t._completeDestroy(e)
            })
          }
        }, {
          key: "_addKeyframe",
          value: function(t) {
            if (t = this._setupKeyframeExtensions(t), !this.group) throw new TypeError("'this.group' is not defined. Ensure that AnimSystem has been initialized before adding keyframes.");
            var e = this.group.addKeyframe(this.el, t);
            return e._lens = {}, e._lens.events = [], this._keyframeController = this._keyframeController || e.controller, this.keyframes.add(e), e
          }
        }, {
          key: "_addKeyframeControllerEvents",
          value: function(t, e, i) {
            var n = this;
            i.forEach(function(i) {
              var r = !1,
                s = e.event;
              i.type && (s += ":" + i.type), i.callback ? (n._keyframeController[i.method](s, i.callback), r = !0) : e[i.name] && (n._keyframeController[i.method](s, e[i.name]), r = !0), r && t._lens.events.push({
                options: e,
                data: i
              })
            }), t = e = i = null
          }
        }, {
          key: "_removeKeyframeControllerEvents",
          value: function(t) {
            var e = this;
            t._lens.events.forEach(function(t) {
              var i = t.options,
                n = t.data,
                r = i.event;
              n.type && (r += ":" + n.type), n.callback ? e._keyframeController.off(r, n.callback) : i[n.name] && e._keyframeController.off(r, i[n.name])
            }), t._lens.events = []
          }
        }, {
          key: "_onRAFLoopEnter",
          value: function(t) {
            var e = t._lens.rafLoop.id;
            this._rafLoops[e] || (this._rafLoops[e] = {}), this._runRAFLoop(t)
          }
        }, {
          key: "_onRAFLoopExit",
          value: function(t) {
            this._cancelRAFLoopRAF(t._lens.rafLoop.id)
          }
        }, {
          key: "_onRAFLoopUpdate",
          value: function(t, e, i) {
            this._destroyed || e.onupdate && e.onupdate(this.lens.getPageMetrics(), i)
          }
        }, {
          key: "_onRAFLoopDraw",
          value: function(t, e, i) {
            this._destroyed || (e.ondraw && e.ondraw(this.lens.getPageMetrics(), i), this._rafLoops[t._lens.rafLoop.id] && this._runRAFLoop(t))
          }
        }, {
          key: "_runRAFLoop",
          value: function(t) {
            var e = t._lens.rafLoop.id;
            this._rafLoops[e].update = m(t._lens.rafLoop.onupdate), this._rafLoops[e].draw = f(t._lens.rafLoop.ondraw)
          }
        }, {
          key: "_cancelRAFLoopRAF",
          value: function(t) {
            this._rafLoops[t] && (this._rafLoops[t].update && p(this._rafLoops[t].update), this._rafLoops[t].draw && _(this._rafLoops[t].draw), this._rafLoops[t] = null)
          }
        }, {
          key: "_completeDestroy",
          value: function(t) {
            var e = this;
            this.off(), this.keyframes.forEach(function(t) {
              return e.removeKeyframe(t)
            }), this.lens.removeComponent(this), c(this), this._destroyed = !0, t(!0)
          }
        }, {
          key: "_setupKeyframeExtensions",
          value: function(t) {
            var e = void 0;
            for (e in this._keyframeExtensions) this._keyframeExtensions.hasOwnProperty(e) && t.hasOwnProperty(e) && (t = this._keyframeExtensions[e](this, t));
            return t
          }
        }, {
          key: "_setInitialAnimGroup",
          value: function(t) {
            return 0 === this.lens.anim.groups.length ? void(this.group = null) : void(this.group = t || this.lens.anim.getGroupForTarget(this.el))
          }
        }], [{
          key: "isSupported",
          value: function() {
            return !0
          }
        }]), e
      }(a);
    e.exports = g
  }, {
    "../../lens": 504,
    "../helpers/destroyObject": 512,
    "../helpers/getGenericComponentName": 513,
    "../helpers/getGenericEventName": 514,
    "../helpers/getGenericRAFLoopName": 515,
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-raf-emitter/cancelDraw": 349,
    "@marcom/ac-raf-emitter/cancelUpdate": 350,
    "@marcom/ac-raf-emitter/draw": 351,
    "@marcom/ac-raf-emitter/update": 355
  }],
  507: [function(t, e, i) {
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
      a = t("../helpers/DOMStateSync"),
      c = function(t) {
        function e(t) {
          n(this, e);
          var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
            MapType: Map,
            initialValue: {
              resolve: null,
              reject: null,
              shouldMount: null
            }
          }));
          return i.lens = t, i
        }
        return s(e, t), o(e, [{
          key: "mount",
          value: function(t) {
            var e = this,
              i = this.get(t);
            if (i.shouldMount === !0 && i.promise) return i.promise;
            var n = new Promise(function(n, r) {
              return t.mounted ? void n(t) : (i.reject && i.reject(t), i = null, void e.set(t, {
                resolve: n,
                reject: r,
                shouldMount: !0
              }))
            });
            return n["catch"](function() {
              this.lens.logger.warn("Component mount was called before previous call was resolved.")
            }), n
          }
        }, {
          key: "unmount",
          value: function(t) {
            var e = this,
              i = this.get(t);
            if (i.shouldMount === !1 && i.promise) return i.promise;
            var n = new Promise(function(n, r) {
              return t.mounted ? (i.reject && i.reject(t), void e.set(t, {
                resolve: n,
                reject: r,
                shouldMount: !1
              })) : void n(t)
            });
            return n["catch"](function() {
              this.lens.logger.warn("Component unmount was called before previous call was resolved.")
            }), n
          }
        }, {
          key: "onUpdate",
          value: function(t, e) {
            e.shouldMount !== !0 || t.mounted ? e.shouldMount === !1 && t.mounted && (t.componentWillUnmount(this.lens.getPageMetrics()), this.lens._removeViewportEvents(t), t.removeKeyframes()) : t.componentWillMount(this.lens.getPageMetrics())
          }
        }, {
          key: "onDraw",
          value: function(t, e) {
            e.shouldMount !== !0 || t.mounted ? e.shouldMount === !1 && t.mounted && (t.mounted = !1, t.componentDidUnmount(this.lens.getPageMetrics())) : (t.mounted = !0, this.lens._attachViewportEvents(t), t.componentDidMount(this.lens.getPageMetrics())), e.resolve && e.resolve(t), this["delete"](t)
          }
        }]), e
      }(a);
    e.exports = c
  }, {
    "../helpers/DOMStateSync": 510
  }],
  508: [function(t, e, i) {
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
      a = t("../helpers/DOMStateSync"),
      c = t("../config/dataAttributes"),
      l = (t("../helpers/destroyObject"), t("@marcom/ac-raf-emitter/draw")),
      u = function(t) {
        function e(t, i) {
          n(this, e);
          var s = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
            MapType: WeakMap,
            initialValue: []
          }));
          return s.lensID = t, s.attributes = Object.assign(c, i.dataAttributes), s.attributes.CURRENT_COMPONENTS = "data-" + s.lensID + "-" + s.attributes.CURRENT_COMPONENT_LIST, s
        }
        return s(e, t), o(e, [{
          key: "addCurrentComponent",
          value: function(t) {
            this.addTo(t.el, t.name())
          }
        }, {
          key: "removeCurrentComponent",
          value: function(t) {
            this.removeFrom(t.el, t.name())
          }
        }, {
          key: "onDraw",
          value: function(t, e) {
            var i = this.attributes.CURRENT_COMPONENTS;
            e.length > 0 ? t.setAttribute(i, "<" + e.join("> <") + ">") : t.removeAttribute(i)
          }
        }, {
          key: "removeComponentList",
          value: function(t) {
            var e = this;
            l(function() {
              t.removeAttribute("data-" + e.attributes.COMPONENT_LIST), t = null
            }, !0)
          }
        }]), e
      }(a);
    e.exports = u
  }, {
    "../config/dataAttributes": 505,
    "../helpers/DOMStateSync": 510,
    "../helpers/destroyObject": 512,
    "@marcom/ac-raf-emitter/draw": 351
  }],
  509: [function(t, e, i) {
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
      s = t("@marcom/anim-system"),
      o = t("@marcom/anim-system/Model/AnimSystemModel"),
      a = t("../utils/logger"),
      c = t("../helpers/destroyObject"),
      l = t("../helpers/getLensID"),
      u = t("../helpers/querySelectorAllIncludingScopedElement"),
      h = t("./DataAttributesController"),
      d = t("./ComponentMounter"),
      m = t("@marcom/ac-raf-emitter/update"),
      f = (t("@marcom/ac-raf-emitter/draw"), function() {
        function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          n(this, t), this.options = e, this.id = l(), this.components = new Set, this.componentMap = new Map, this._componentsElementsMap = new Map, this._mounter = new d(this), this._dataAttributes = new h(this.id, e), this.logger = new a(e), this.anim = s, this.model = o
        }
        return r(t, [{
          key: "initializeAnimSystem",
          value: function() {
            var t = this;
            return new Promise(function(e, i) {
              return t.anim.groups.length > 0 ? void e(!1) : void m(function(i) {
                0 === t.anim.groups.length ? (t.anim.initialize(), e(!0)) : e(!1), e = null
              }, !0)
            })
          }
        }, {
          key: "createComponent",
          value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              i = this._getComponentConstructorFromComponentMap(t);
            return i.isSupported() ? (e.lens = e.lens || this, new i(e)) : null
          }
        }, {
          key: "removeComponent",
          value: function(t) {
            return this.components.has(t) ? (this.unmountComponent(t), this._removeViewportEvents(t), this.components["delete"](t), this._removeFromComponentElementsMap(t), this._dataAttributes.removeCurrentComponent(t), this.logger.log("Removed component:", t), !0) : (this.logger.warn("Component not found in component list, skipping...", t), !1)
          }
        }, {
          key: "mountComponent",
          value: function(t) {
            return this._mounter.mount(t)
          }
        }, {
          key: "unmountComponent",
          value: function(t) {
            return this._mounter.unmount(t)
          }
        }, {
          key: "getPageMetrics",
          value: function() {
            return this.model.pageMetrics
          }
        }, {
          key: "refreshMetrics",
          value: function(t) {
            var e = this;
            return new Promise(function(i, n) {
              m(function(n) {
                e.anim.groups.forEach(function(e) {
                  return e._onResizeDebounced(t)
                }), i(), i = null
              }, !0)
            })
          }
        }, {
          key: "forceRedraw",
          value: function() {
            var t = this;
            return new Promise(function(e, i) {
              m(function(i) {
                t.anim.groups.forEach(function(t) {
                  return t.onKeyframesDirty()
                }), e(), e = null
              }, !0)
            })
          }
        }, {
          key: "destroy",
          value: function() {
            var t = this;
            return new Promise(function(e, i) {
              var n = Array.from(t.components).map(function(t) {
                return t.destroy()
              });
              Promise.all(n).then(function() {
                t._mounter.destroy(), t._dataAttributes.destroy(), c(t), e(!0)
              })
            })
          }
        }, {
          key: "initializeDOMComponents",
          value: function() {
            var t = this,
              e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.body;
            Object.keys(e).forEach(function(i) {
              return t.componentMap.set(i, e[i])
            });
            var n = u(i, "[data-" + this._dataAttributes.attributes.COMPONENT_LIST + "]");
            if (0 === n.length) return n;
            var r = [],
              s = void 0,
              o = void 0,
              a = void 0,
              c = void 0,
              l = void 0,
              h = void 0,
              d = n.length;
            for (s = 0; s < d; s++) {
              for (a = n[s], l = a.getAttribute("data-" + this._dataAttributes.attributes.COMPONENT_LIST).split(" "), h = l.length, o = 0; o < h; o++) c = this.createComponent(l[o], {
                el: a,
                name: l[o]
              }), c && r.push(c);
              this._dataAttributes.removeComponentList(a)
            }
            return r
          }
        }, {
          key: "getComponentsOfType",
          value: function(t, e) {
            var i = this,
              n = this._getComponentConstructorFromComponentMap(t),
              r = null;
            if (e) {
              var s = void 0;
              s = "string" == typeof t ? "[" + this._dataAttributes.attributes.CURRENT_COMPONENTS + '*="<' + t + '>"]' : "[" + this._dataAttributes.attributes.CURRENT_COMPONENTS + "]";
              var o = u(e, s);
              this._dataAttributes.getQueuedModifications().forEach(function(t) {
                var r = t.key,
                  s = t.value;
                if (!(o.indexOf(r) > -1)) {
                  var a = void 0,
                    c = s.length,
                    l = void 0;
                  for (a = 0; a < c; a++)
                    if (l = i._getComponentConstructorFromComponentMap(s[a]), l.prototype instanceof n && (e === r || e.contains(r))) {
                      o.push(r);
                      break
                    }
                }
              }), r = o.map(function(t) {
                return i.getComponentsForElement(t).filter(function(t) {
                  return t instanceof n
                })
              }).reduce(function(t, e) {
                return e.forEach(function(e) {
                  return t.push(e)
                }), t
              }, []), o = null
            } else r = Array.from(this.components).filter(function(t) {
              return t instanceof n
            });
            return n = e = null, r
          }
        }, {
          key: "getComponentsForElement",
          value: function(t) {
            return this._componentsElementsMap.has(t) ? Array.from(this._componentsElementsMap.get(t)) : []
          }
        }, {
          key: "_getComponentConstructorFromComponentMap",
          value: function(t) {
            var e = void 0;
            if ("function" == typeof t) e = t;
            else {
              if (!this.componentMap.has(t)) throw "getComponentsOfType:Component type " + t + " not found in Component Map.";
              e = this.componentMap.get(t)
            }
            return e
          }
        }, {
          key: "_addComponent",
          value: function(t, e) {
            if (this.components.has(t)) return this.logger.warn("Component already added to component list, skipping...", t), !1;
            var i = t.name();
            return this.componentMap.has(i) || this.componentMap.set(i, t.constructor), this._addToComponentElementsMap(t), this._dataAttributes.addCurrentComponent(t), this.components.add(t), e ? t.group || this.anim.once(this.model.EVENTS.ON_DOM_GROUPS_CREATED, function(e) {
              return t._setInitialAnimGroup()
            }) : t.group ? this.mountComponent(t) : (this.anim.once(this.model.EVENTS.ON_DOM_GROUPS_CREATED, this._mountComponentOnAnimInitialize.bind(this, t)), this.initializeAnimSystem()), this.logger.log("Created new component:", t), !0
          }
        }, {
          key: "_attachViewportEvents",
          value: function(t) {
            this.anim.on(this.model.PageEvents.ON_RESIZE_IMMEDIATE, t.onResizeImmediate), this.anim.on(this.model.PageEvents.ON_RESIZE_DEBOUNCED, t.onResizeDebounced), this.anim.on(this.model.PageEvents.ON_BREAKPOINT_CHANGE, t.onBreakpointChange)
          }
        }, {
          key: "_removeViewportEvents",
          value: function(t) {
            this.anim.off(this.model.PageEvents.ON_RESIZE_IMMEDIATE, t.onResizeImmediate), this.anim.off(this.model.PageEvents.ON_RESIZE_DEBOUNCED, t.onResizeDebounced), this.anim.off(this.model.PageEvents.ON_BREAKPOINT_CHANGE, t.onBreakpointChange)
          }
        }, {
          key: "_addToComponentElementsMap",
          value: function(t) {
            var e = this.getComponentsForElement(t.el);
            e.push(t), this._componentsElementsMap.set(t.el, e)
          }
        }, {
          key: "_removeFromComponentElementsMap",
          value: function(t) {
            var e = this.getComponentsForElement(t.el),
              i = e.indexOf(t);
            i > -1 && (e.splice(i, 1), e.length > 0 ? this._componentsElementsMap.set(t.el, e) : this._componentsElementsMap["delete"](t.el))
          }
        }, {
          key: "_mountComponentOnAnimInitialize",
          value: function(t) {
            t._setInitialAnimGroup(), this.mountComponent(t)
          }
        }]), t
      }());
    e.exports = f
  }, {
    "../helpers/destroyObject": 512,
    "../helpers/getLensID": 516,
    "../helpers/querySelectorAllIncludingScopedElement": 517,
    "../utils/logger": 518,
    "./ComponentMounter": 507,
    "./DataAttributesController": 508,
    "@marcom/ac-raf-emitter/draw": 351,
    "@marcom/ac-raf-emitter/update": 355,
    "@marcom/anim-system": 486,
    "@marcom/anim-system/Model/AnimSystemModel": 491
  }],
  510: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      s = function() {
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
      o = t("../helpers/destroyObject"),
      a = t("@marcom/ac-raf-emitter/update"),
      c = t("@marcom/ac-raf-emitter/draw"),
      l = function() {
        function t(e) {
          n(this, t), this._map = new e.MapType, this.initialValue = e.initialValue, this._modifyQueue = new Set, this._willModify = !1
        }
        return s(t, [{
          key: "getQueuedModifications",
          value: function() {
            var t = this;
            return Array.from(this._modifyQueue).map(function(e) {
              return {
                key: e,
                value: t.get(e)
              }
            })
          }
        }, {
          key: "get",
          value: function(t) {
            this._map.has(t) || this.reset(t);
            var e = this._map.get(t);
            return Array.isArray(e) ? e = Array.prototype.slice.call(e, 0) : "object" === ("undefined" == typeof e ? "undefined" : r(e)) && (e = Object.assign({}, e)), e
          }
        }, {
          key: "set",
          value: function(t, e) {
            this._map.set(t, e), this._setModified(t)
          }
        }, {
          key: "reset",
          value: function(t) {
            var e = this.initialValue;
            Array.isArray(e) ? e = Array.prototype.slice.call(e, 0) : "object" === ("undefined" == typeof e ? "undefined" : r(e)) && (e = Object.assign({}, e)), this._map.set(t, e)
          }
        }, {
          key: "delete",
          value: function(t) {
            this._map["delete"](t)
          }
        }, {
          key: "addTo",
          value: function(t, e) {
            var i = this.get(t);
            i.push(e), this._map.set(t, i), this._setModified(t)
          }
        }, {
          key: "removeFrom",
          value: function(t, e) {
            var i = this.get(t),
              n = i.indexOf(e);
            n > -1 && (i.splice(n, 1), 0 === i.length ? this._map.set(t, i) : this._map["delete"](t), this._setModified(t))
          }
        }, {
          key: "destroy",
          value: function() {
            this._modifyQueue.clear(), o(this)
          }
        }, {
          key: "_setModified",
          value: function(t) {
            var e = this;
            this._modifyQueue.has(t) || (this._modifyQueue.add(t), this._willModify || (this._willModify = !0, this.onUpdate && a(function() {
              e._modifyQueue.forEach(function(t) {
                return e.onUpdate(t, e.get(t))
              })
            }, !0), this.onDraw && c(function() {
              e._modifyQueue.forEach(function(t) {
                return e.onDraw(t, e.get(t))
              }), e._modifyQueue.clear(), e._willModify = !1
            }, !0)))
          }
        }]), t
      }();
    e.exports = l
  }, {
    "../helpers/destroyObject": 512,
    "@marcom/ac-raf-emitter/draw": 351,
    "@marcom/ac-raf-emitter/update": 355
  }],
  511: [function(t, e, i) {
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
          n(this, t), this.elementMap = new WeakMap, this.startCount = -1, this.name = e.name
        }
        return r(t, [{
          key: "get",
          value: function(t) {
            var e = this.startCount;
            this.elementMap.has(t) && (e = this.elementMap.get(t));
            var i = ++e;
            return this.elementMap.set(t, i), this.name + ":" + i
          }
        }]), t
      }();
    e.exports = s
  }, {}],
  512: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e = void 0;
      for (e in t) t.hasOwnProperty(e) && (t[e] = null)
    }
  }, {}],
  513: [function(t, e, i) {
    "use strict";
    e.exports = function() {
      var t = new WeakMap,
        e = 0,
        i = "AnonymousComponent";
      return function(n) {
        return t.has(n) || t.set(n, ++e), i + "-" + t.get(n)
      }
    }()
  }, {}],
  514: [function(t, e, i) {
    "use strict";
    var n = t("./ElementEventNameGenerator"),
      r = new n({
        name: "generic-event-name"
      });
    e.exports = r.get.bind(r)
  }, {
    "./ElementEventNameGenerator": 511
  }],
  515: [function(t, e, i) {
    "use strict";
    var n = t("./ElementEventNameGenerator"),
      r = new n({
        name: "raf-loop"
      });
    e.exports = r.get.bind(r)
  }, {
    "./ElementEventNameGenerator": 511
  }],
  516: [function(t, e, i) {
    "use strict";
    e.exports = function() {
      var t = "lens",
        e = 0;
      return function() {
        return e++, 1 === e ? t : t + "-" + e
      }
    }()
  }, {}],
  517: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e) {
      var i = Array.from(t.querySelectorAll(e));
      return t.matches(e) && i.unshift(t), i
    }
  }, {}],
  518: [function(t, e, i) {
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
        function t() {
          n(this, t), this.verbose = !1
        }
        return r(t, [{
          key: "enable",
          value: function() {
            this.verbose = !0
          }
        }, {
          key: "disable",
          value: function() {
            this.verbose = !1
          }
        }, {
          key: "log",
          value: function() {
            return this._consoleCall("log", Array.prototype.slice.call(arguments))
          }
        }, {
          key: "warn",
          value: function() {
            return this._consoleCall("warn", Array.prototype.slice.call(arguments))
          }
        }, {
          key: "error",
          value: function() {
            return this._consoleCall("error", Array.prototype.slice.call(arguments))
          }
        }, {
          key: "_consoleCall",
          value: function(t, e) {
            if (this.verbose) return console[t].apply(console, e)
          }
        }]), t
      }();
    e.exports = s
  }, {}],
  519: [function(t, e, i) {
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
  520: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      r.call(this), this._id = t || o.ID, this._options = Object.assign({}, o.OPTIONS, e), this._allowDOMEventDispatch = !1, this._allowElementStateData = !1, this._options.removeNamespace = "boolean" != typeof this._options.removeNamespace || this._options.removeNamespace, this._el = this._initViewportEl(this._id), this._resizing = !1, this._mediaQueryLists = {
        resolution: {
          retina: window.matchMedia(l.RETINA)
        },
        orientation: {
          portrait: window.matchMedia(l.PORTRAIT),
          landscape: window.matchMedia(l.LANDSCAPE)
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
      c = "::before",
      l = {
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
      var e = window.getComputedStyle(this._el, c).content;
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
    "@marcom/ac-event-emitter-micro": 156,
    "@marcom/ac-raf-emitter/update": 355
  }],
  521: [function(t, e, i) {
    "use strict";
    var n = t("./ViewportEmitter");
    e.exports = new n
  }, {
    "./ViewportEmitter": 520
  }],
  522: [function(t, e, i) {
    e.exports.EventEmitter = t("./ac-event-emitter/EventEmitter")
  }, {
    "./ac-event-emitter/EventEmitter": 523
  }],
  523: [function(t, e, i) {
    "use strict";
    var n = "EventEmitter:propagation",
      r = function(t) {
        t && (this.context = t)
      },
      s = r.prototype,
      o = function() {
        return this.hasOwnProperty("_events") || "object" == typeof this._events || (this._events = {}), this._events
      },
      a = function(t, e) {
        var i = t[0],
          n = t[1],
          r = t[2];
        if ("string" != typeof i && "object" != typeof i || null === i || Array.isArray(i)) throw new TypeError("Expecting event name to be a string or object.");
        if ("string" == typeof i && !n) throw new Error("Expecting a callback function to be provided.");
        if (n && "function" != typeof n) {
          if ("object" != typeof i || "object" != typeof n) throw new TypeError("Expecting callback to be a function.");
          r = n
        }
        if ("object" == typeof i)
          for (var s in i) e.call(this, s, i[s], r);
        "string" == typeof i && (i = i.split(" "), i.forEach(function(t) {
          e.call(this, t, n, r)
        }, this))
      },
      c = function(t, e) {
        var i, n, r;
        if (i = o.call(this)[t], i && 0 !== i.length)
          for (i = i.slice(), this._stoppedImmediatePropagation = !1, n = 0, r = i.length; n < r && (!this._stoppedImmediatePropagation && !e(i[n], n)); n++);
      },
      l = function(t, e, i) {
        var n = -1;
        c.call(this, e, function(t, e) {
          if (t.callback === i) return n = e, !0
        }), n !== -1 && t[e].splice(n, 1)
      };
    s.on = function() {
      var t = o.call(this);
      return a.call(this, arguments, function(e, i, n) {
        t[e] = t[e] || (t[e] = []), t[e].push({
          callback: i,
          context: n
        })
      }), this
    }, s.once = function() {
      return a.call(this, arguments, function(t, e, i) {
        var n = function(r) {
          e.call(i || this, r), this.off(t, n)
        };
        this.on(t, n, this)
      }), this
    }, s.off = function(t, e) {
      var i = o.call(this);
      if (0 === arguments.length) this._events = {};
      else if (!t || "string" != typeof t && "object" != typeof t || Array.isArray(t)) throw new TypeError("Expecting event name to be a string or object.");
      if ("object" == typeof t)
        for (var n in t) l.call(this, i, n, t[n]);
      if ("string" == typeof t) {
        var r = t.split(" ");
        1 === r.length ? e ? l.call(this, i, t, e) : i[t] = [] : r.forEach(function(t) {
          i[t] = []
        })
      }
      return this
    }, s.trigger = function(t, e, i) {
      if (!t) throw new Error("trigger method requires an event name");
      if ("string" != typeof t) throw new TypeError("Expecting event names to be a string.");
      if (i && "boolean" != typeof i) throw new TypeError("Expecting doNotPropagate to be a boolean.");
      return t = t.split(" "), t.forEach(function(t) {
        c.call(this, t, function(t) {
          t.callback.call(t.context || this.context || this, e)
        }.bind(this)), i || c.call(this, n, function(i) {
          var n = t;
          i.prefix && (n = i.prefix + n), i.emitter.trigger(n, e)
        })
      }, this), this
    }, s.propagateTo = function(t, e) {
      var i = o.call(this);
      i[n] || (this._events[n] = []), i[n].push({
        emitter: t,
        prefix: e
      })
    }, s.stopPropagatingTo = function(t) {
      var e = o.call(this);
      if (!t) return void(e[n] = []);
      var i, r = e[n],
        s = r.length;
      for (i = 0; i < s; i++)
        if (r[i].emitter === t) {
          r.splice(i, 1);
          break
        }
    }, s.stopImmediatePropagation = function() {
      this._stoppedImmediatePropagation = !0
    }, s.has = function(t, e, i) {
      var n = o.call(this),
        r = n[t];
      if (0 === arguments.length) return Object.keys(n);
      if (!r) return !1;
      if (!e) return r.length > 0;
      for (var s = 0, a = r.length; s < a; s++) {
        var c = r[s];
        if (i && e && c.context === i && c.callback === e) return !0;
        if (e && !i && c.callback === e) return !0
      }
      return !1
    }, e.exports = r
  }, {}],
  524: [function(t, e, i) {
    function n(t) {
      var e = new Float32Array(16);
      return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    }
    e.exports = n
  }, {}],
  525: [function(t, e, i) {
    function n() {
      var t = new Float32Array(16);
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }
    e.exports = n
  }, {}],
  526: [function(t, e, i) {
    function n(t, e, i) {
      var n = e[0],
        r = e[1],
        s = e[2],
        o = e[3],
        a = n + n,
        c = r + r,
        l = s + s,
        u = n * a,
        h = n * c,
        d = n * l,
        m = r * c,
        f = r * l,
        p = s * l,
        _ = o * a,
        g = o * c,
        y = o * l;
      return t[0] = 1 - (m + p), t[1] = h + y, t[2] = d - g, t[3] = 0, t[4] = h - y, t[5] = 1 - (u + p), t[6] = f + _, t[7] = 0, t[8] = d + g, t[9] = f - _, t[10] = 1 - (u + m), t[11] = 0, t[12] = i[0], t[13] = i[1], t[14] = i[2], t[15] = 1, t
    }
    e.exports = n
  }, {}],
  527: [function(t, e, i) {
    function n(t) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }
    e.exports = n
  }, {}],
  528: [function(t, e, i) {
    function n(t, e) {
      var i = e[0],
        n = e[1],
        r = e[2],
        s = e[3],
        o = e[4],
        a = e[5],
        c = e[6],
        l = e[7],
        u = e[8],
        h = e[9],
        d = e[10],
        m = e[11],
        f = e[12],
        p = e[13],
        _ = e[14],
        g = e[15],
        y = i * a - n * o,
        v = i * c - r * o,
        b = i * l - s * o,
        E = n * c - r * a,
        w = n * l - s * a,
        T = r * l - s * c,
        S = u * p - h * f,
        C = u * _ - d * f,
        x = u * g - m * f,
        A = h * _ - d * p,
        k = h * g - m * p,
        P = d * g - m * _,
        O = y * P - v * k + b * A + E * x - w * C + T * S;
      return O ? (O = 1 / O, t[0] = (a * P - c * k + l * A) * O, t[1] = (r * k - n * P - s * A) * O, t[2] = (p * T - _ * w + g * E) * O, t[3] = (d * w - h * T - m * E) * O, t[4] = (c * x - o * P - l * C) * O, t[5] = (i * P - r * x + s * C) * O, t[6] = (_ * b - f * T - g * v) * O, t[7] = (u * T - d * b + m * v) * O, t[8] = (o * k - a * x + l * S) * O, t[9] = (n * x - i * k - s * S) * O, t[10] = (f * w - p * b + g * y) * O, t[11] = (h * b - u * w - m * y) * O, t[12] = (a * C - o * A - c * S) * O, t[13] = (i * A - n * C + r * S) * O, t[14] = (p * v - f * E - _ * y) * O, t[15] = (u * E - h * v + d * y) * O, t) : null
    }
    e.exports = n
  }, {}],
  529: [function(t, e, i) {
    function n(t, e, i) {
      var n = e[0],
        r = e[1],
        s = e[2],
        o = e[3],
        a = e[4],
        c = e[5],
        l = e[6],
        u = e[7],
        h = e[8],
        d = e[9],
        m = e[10],
        f = e[11],
        p = e[12],
        _ = e[13],
        g = e[14],
        y = e[15],
        v = i[0],
        b = i[1],
        E = i[2],
        w = i[3];
      return t[0] = v * n + b * a + E * h + w * p, t[1] = v * r + b * c + E * d + w * _, t[2] = v * s + b * l + E * m + w * g, t[3] = v * o + b * u + E * f + w * y, v = i[4], b = i[5], E = i[6], w = i[7], t[4] = v * n + b * a + E * h + w * p, t[5] = v * r + b * c + E * d + w * _, t[6] = v * s + b * l + E * m + w * g, t[7] = v * o + b * u + E * f + w * y, v = i[8], b = i[9], E = i[10], w = i[11], t[8] = v * n + b * a + E * h + w * p, t[9] = v * r + b * c + E * d + w * _, t[10] = v * s + b * l + E * m + w * g, t[11] = v * o + b * u + E * f + w * y, v = i[12], b = i[13], E = i[14], w = i[15], t[12] = v * n + b * a + E * h + w * p, t[13] = v * r + b * c + E * d + w * _, t[14] = v * s + b * l + E * m + w * g, t[15] = v * o + b * u + E * f + w * y, t
    }
    e.exports = n
  }, {}],
  530: [function(t, e, i) {
    function n(t, e, i, n) {
      var r, s, o, a, c, l, u, h, d, m, f, p, _, g, y, v, b, E, w, T, S, C, x, A, k = n[0],
        P = n[1],
        O = n[2],
        I = Math.sqrt(k * k + P * P + O * O);
      return Math.abs(I) < 1e-6 ? null : (I = 1 / I, k *= I, P *= I, O *= I, r = Math.sin(i), s = Math.cos(i), o = 1 - s, a = e[0], c = e[1], l = e[2], u = e[3], h = e[4], d = e[5], m = e[6], f = e[7], p = e[8], _ = e[9], g = e[10], y = e[11], v = k * k * o + s, b = P * k * o + O * r, E = O * k * o - P * r, w = k * P * o - O * r, T = P * P * o + s, S = O * P * o + k * r, C = k * O * o + P * r, x = P * O * o - k * r, A = O * O * o + s, t[0] = a * v + h * b + p * E, t[1] = c * v + d * b + _ * E, t[2] = l * v + m * b + g * E, t[3] = u * v + f * b + y * E, t[4] = a * w + h * T + p * S, t[5] = c * w + d * T + _ * S, t[6] = l * w + m * T + g * S, t[7] = u * w + f * T + y * S, t[8] = a * C + h * x + p * A, t[9] = c * C + d * x + _ * A, t[10] = l * C + m * x + g * A, t[11] = u * C + f * x + y * A, e !== t && (t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t)
    }
    e.exports = n
  }, {}],
  531: [function(t, e, i) {
    function n(t, e, i) {
      var n = Math.sin(i),
        r = Math.cos(i),
        s = e[4],
        o = e[5],
        a = e[6],
        c = e[7],
        l = e[8],
        u = e[9],
        h = e[10],
        d = e[11];
      return e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[4] = s * r + l * n, t[5] = o * r + u * n, t[6] = a * r + h * n, t[7] = c * r + d * n, t[8] = l * r - s * n, t[9] = u * r - o * n, t[10] = h * r - a * n, t[11] = d * r - c * n, t
    }
    e.exports = n
  }, {}],
  532: [function(t, e, i) {
    function n(t, e, i) {
      var n = Math.sin(i),
        r = Math.cos(i),
        s = e[0],
        o = e[1],
        a = e[2],
        c = e[3],
        l = e[8],
        u = e[9],
        h = e[10],
        d = e[11];
      return e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = s * r - l * n, t[1] = o * r - u * n, t[2] = a * r - h * n, t[3] = c * r - d * n, t[8] = s * n + l * r, t[9] = o * n + u * r, t[10] = a * n + h * r, t[11] = c * n + d * r, t
    }
    e.exports = n
  }, {}],
  533: [function(t, e, i) {
    function n(t, e, i) {
      var n = Math.sin(i),
        r = Math.cos(i),
        s = e[0],
        o = e[1],
        a = e[2],
        c = e[3],
        l = e[4],
        u = e[5],
        h = e[6],
        d = e[7];
      return e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = s * r + l * n, t[1] = o * r + u * n, t[2] = a * r + h * n, t[3] = c * r + d * n, t[4] = l * r - s * n, t[5] = u * r - o * n, t[6] = h * r - a * n, t[7] = d * r - c * n, t
    }
    e.exports = n
  }, {}],
  534: [function(t, e, i) {
    function n(t, e, i) {
      var n = i[0],
        r = i[1],
        s = i[2];
      return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * r, t[5] = e[5] * r, t[6] = e[6] * r, t[7] = e[7] * r, t[8] = e[8] * s, t[9] = e[9] * s, t[10] = e[10] * s, t[11] = e[11] * s, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
    }
    e.exports = n
  }, {}],
  535: [function(t, e, i) {
    function n(t, e, i) {
      var n, r, s, o, a, c, l, u, h, d, m, f, p = i[0],
        _ = i[1],
        g = i[2];
      return e === t ? (t[12] = e[0] * p + e[4] * _ + e[8] * g + e[12], t[13] = e[1] * p + e[5] * _ + e[9] * g + e[13], t[14] = e[2] * p + e[6] * _ + e[10] * g + e[14], t[15] = e[3] * p + e[7] * _ + e[11] * g + e[15]) : (n = e[0], r = e[1], s = e[2], o = e[3], a = e[4], c = e[5], l = e[6], u = e[7], h = e[8], d = e[9], m = e[10], f = e[11], t[0] = n, t[1] = r, t[2] = s, t[3] = o, t[4] = a, t[5] = c, t[6] = l, t[7] = u, t[8] = h, t[9] = d, t[10] = m, t[11] = f, t[12] = n * p + a * _ + h * g + e[12], t[13] = r * p + c * _ + d * g + e[13], t[14] = s * p + l * _ + m * g + e[14], t[15] = o * p + u * _ + f * g + e[15]), t
    }
    e.exports = n
  }, {}],
  536: [function(t, e, i) {
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
  537: [function(t, e, i) {
    function n() {
      var t = new Float32Array(3);
      return t[0] = 0, t[1] = 0, t[2] = 0, t
    }
    e.exports = n
  }, {}],
  538: [function(t, e, i) {
    function n(t, e, i) {
      var n = e[0],
        r = e[1],
        s = e[2],
        o = i[0],
        a = i[1],
        c = i[2];
      return t[0] = r * c - s * a, t[1] = s * o - n * c, t[2] = n * a - r * o, t
    }
    e.exports = n
  }, {}],
  539: [function(t, e, i) {
    function n(t, e) {
      return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }
    e.exports = n
  }, {}],
  540: [function(t, e, i) {
    function n(t, e, i) {
      var n = new Float32Array(3);
      return n[0] = t, n[1] = e, n[2] = i, n
    }
    e.exports = n
  }, {}],
  541: [function(t, e, i) {
    function n(t) {
      var e = t[0],
        i = t[1],
        n = t[2];
      return Math.sqrt(e * e + i * i + n * n)
    }
    e.exports = n
  }, {}],
  542: [function(t, e, i) {
    function n(t, e) {
      var i = e[0],
        n = e[1],
        r = e[2],
        s = i * i + n * n + r * r;
      return s > 0 && (s = 1 / Math.sqrt(s), t[0] = e[0] * s, t[1] = e[1] * s, t[2] = e[2] * s), t
    }
    e.exports = n
  }, {}],
  543: [function(t, e, i) {
    function n() {
      var t = new Float32Array(4);
      return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t
    }
    e.exports = n
  }, {}],
  544: [function(t, e, i) {
    function n(t, e, i, n) {
      var r = new Float32Array(4);
      return r[0] = t, r[1] = e, r[2] = i, r[3] = n, r
    }
    e.exports = n
  }, {}],
  545: [function(t, e, i) {
    function n(t, e, i) {
      var n = e[0],
        r = e[1],
        s = e[2],
        o = e[3];
      return t[0] = i[0] * n + i[4] * r + i[8] * s + i[12] * o, t[1] = i[1] * n + i[5] * r + i[9] * s + i[13] * o, t[2] = i[2] * n + i[6] * r + i[10] * s + i[14] * o, t[3] = i[3] * n + i[7] * r + i[11] * s + i[15] * o, t
    }
    e.exports = n
  }, {}],
  546: [function(t, e, i) {
    var n = t("./stringify"),
      r = t("./parse");
    e.exports = {
      stringify: n,
      parse: r
    }
  }, {
    "./parse": 547,
    "./stringify": 548
  }],
  547: [function(t, e, i) {
    var n = t("./utils"),
      r = {
        delimiter: "&",
        depth: 5,
        arrayLimit: 20,
        parameterLimit: 1e3,
        strictNullHandling: !1,
        plainObjects: !1,
        allowPrototypes: !1
      };
    r.parseValues = function(t, e) {
      for (var i = {}, r = t.split(e.delimiter, e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit), s = 0, o = r.length; s < o; ++s) {
        var a = r[s],
          c = a.indexOf("]=") === -1 ? a.indexOf("=") : a.indexOf("]=") + 1;
        if (c === -1) i[n.decode(a)] = "", e.strictNullHandling && (i[n.decode(a)] = null);
        else {
          var l = n.decode(a.slice(0, c)),
            u = n.decode(a.slice(c + 1));
          Object.prototype.hasOwnProperty.call(i, l) ? i[l] = [].concat(i[l]).concat(u) : i[l] = u
        }
      }
      return i
    }, r.parseObject = function(t, e, i) {
      if (!t.length) return e;
      var n, s = t.shift();
      if ("[]" === s) n = [], n = n.concat(r.parseObject(t, e, i));
      else {
        n = i.plainObjects ? Object.create(null) : {};
        var o = "[" === s[0] && "]" === s[s.length - 1] ? s.slice(1, s.length - 1) : s,
          a = parseInt(o, 10),
          c = "" + a;
        !isNaN(a) && s !== o && c === o && a >= 0 && i.parseArrays && a <= i.arrayLimit ? (n = [], n[a] = r.parseObject(t, e, i)) : n[o] = r.parseObject(t, e, i)
      }
      return n
    }, r.parseKeys = function(t, e, i) {
      if (t) {
        i.allowDots && (t = t.replace(/\.([^\.\[]+)/g, "[$1]"));
        var n = /^([^\[\]]*)/,
          s = /(\[[^\[\]]*\])/g,
          o = n.exec(t),
          a = [];
        if (o[1]) {
          if (!i.plainObjects && Object.prototype.hasOwnProperty(o[1]) && !i.allowPrototypes) return;
          a.push(o[1])
        }
        for (var c = 0; null !== (o = s.exec(t)) && c < i.depth;) ++c, (i.plainObjects || !Object.prototype.hasOwnProperty(o[1].replace(/\[|\]/g, "")) || i.allowPrototypes) && a.push(o[1]);
        return o && a.push("[" + t.slice(o.index) + "]"), r.parseObject(a, e, i)
      }
    }, e.exports = function(t, e) {
      if (e = e || {}, e.delimiter = "string" == typeof e.delimiter || n.isRegExp(e.delimiter) ? e.delimiter : r.delimiter, e.depth = "number" == typeof e.depth ? e.depth : r.depth, e.arrayLimit = "number" == typeof e.arrayLimit ? e.arrayLimit : r.arrayLimit, e.parseArrays = e.parseArrays !== !1, e.allowDots = e.allowDots !== !1, e.plainObjects = "boolean" == typeof e.plainObjects ? e.plainObjects : r.plainObjects, e.allowPrototypes = "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : r.allowPrototypes, e.parameterLimit = "number" == typeof e.parameterLimit ? e.parameterLimit : r.parameterLimit, e.strictNullHandling = "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : r.strictNullHandling, "" === t || null === t || "undefined" == typeof t) return e.plainObjects ? Object.create(null) : {};
      for (var i = "string" == typeof t ? r.parseValues(t, e) : t, s = e.plainObjects ? Object.create(null) : {}, o = Object.keys(i), a = 0, c = o.length; a < c; ++a) {
        var l = o[a],
          u = r.parseKeys(l, i[l], e);
        s = n.merge(s, u, e)
      }
      return n.compact(s)
    }
  }, {
    "./utils": 549
  }],
  548: [function(t, e, i) {
    var n = t("./utils"),
      r = {
        delimiter: "&",
        arrayPrefixGenerators: {
          brackets: function(t, e) {
            return t + "[]"
          },
          indices: function(t, e) {
            return t + "[" + e + "]"
          },
          repeat: function(t, e) {
            return t
          }
        },
        strictNullHandling: !1
      };
    r.stringify = function(t, e, i, s, o) {
      if ("function" == typeof o) t = o(e, t);
      else if (n.isBuffer(t)) t = t.toString();
      else if (t instanceof Date) t = t.toISOString();
      else if (null === t) {
        if (s) return n.encode(e);
        t = ""
      }
      if ("string" == typeof t || "number" == typeof t || "boolean" == typeof t) return [n.encode(e) + "=" + n.encode(t)];
      var a = [];
      if ("undefined" == typeof t) return a;
      for (var c = Array.isArray(o) ? o : Object.keys(t), l = 0, u = c.length; l < u; ++l) {
        var h = c[l];
        a = Array.isArray(t) ? a.concat(r.stringify(t[h], i(e, h), i, s, o)) : a.concat(r.stringify(t[h], e + "[" + h + "]", i, s, o))
      }
      return a
    }, e.exports = function(t, e) {
      e = e || {};
      var i, n, s = "undefined" == typeof e.delimiter ? r.delimiter : e.delimiter,
        o = "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : r.strictNullHandling;
      "function" == typeof e.filter ? (n = e.filter, t = n("", t)) : Array.isArray(e.filter) && (i = n = e.filter);
      var a = [];
      if ("object" != typeof t || null === t) return "";
      var c;
      c = e.arrayFormat in r.arrayPrefixGenerators ? e.arrayFormat : "indices" in e ? e.indices ? "indices" : "repeat" : "indices";
      var l = r.arrayPrefixGenerators[c];
      i || (i = Object.keys(t));
      for (var u = 0, h = i.length; u < h; ++u) {
        var d = i[u];
        a = a.concat(r.stringify(t[d], d, l, o, n))
      }
      return a.join(s)
    }
  }, {
    "./utils": 549
  }],
  549: [function(t, e, i) {
    var n = {};
    n.hexTable = new Array(256);
    for (var r = 0; r < 256; ++r) n.hexTable[r] = "%" + ((r < 16 ? "0" : "") + r.toString(16)).toUpperCase();
    i.arrayToObject = function(t, e) {
      for (var i = e.plainObjects ? Object.create(null) : {}, n = 0, r = t.length; n < r; ++n) "undefined" != typeof t[n] && (i[n] = t[n]);
      return i
    }, i.merge = function(t, e, n) {
      if (!e) return t;
      if ("object" != typeof e) return Array.isArray(t) ? t.push(e) : "object" == typeof t ? t[e] = !0 : t = [t, e], t;
      if ("object" != typeof t) return t = [t].concat(e);
      Array.isArray(t) && !Array.isArray(e) && (t = i.arrayToObject(t, n));
      for (var r = Object.keys(e), s = 0, o = r.length; s < o; ++s) {
        var a = r[s],
          c = e[a];
        Object.prototype.hasOwnProperty.call(t, a) ? t[a] = i.merge(t[a], c, n) : t[a] = c
      }
      return t
    }, i.decode = function(t) {
      try {
        return decodeURIComponent(t.replace(/\+/g, " "))
      } catch (e) {
        return t
      }
    }, i.encode = function(t) {
      if (0 === t.length) return t;
      "string" != typeof t && (t = "" + t);
      for (var e = "", i = 0, r = t.length; i < r; ++i) {
        var s = t.charCodeAt(i);
        45 === s || 46 === s || 95 === s || 126 === s || s >= 48 && s <= 57 || s >= 65 && s <= 90 || s >= 97 && s <= 122 ? e += t[i] : s < 128 ? e += n.hexTable[s] : s < 2048 ? e += n.hexTable[192 | s >> 6] + n.hexTable[128 | 63 & s] : s < 55296 || s >= 57344 ? e += n.hexTable[224 | s >> 12] + n.hexTable[128 | s >> 6 & 63] + n.hexTable[128 | 63 & s] : (++i, s = 65536 + ((1023 & s) << 10 | 1023 & t.charCodeAt(i)), e += n.hexTable[240 | s >> 18] + n.hexTable[128 | s >> 12 & 63] + n.hexTable[128 | s >> 6 & 63] + n.hexTable[128 | 63 & s])
      }
      return e
    }, i.compact = function(t, e) {
      if ("object" != typeof t || null === t) return t;
      e = e || [];
      var n = e.indexOf(t);
      if (n !== -1) return e[n];
      if (e.push(t), Array.isArray(t)) {
        for (var r = [], s = 0, o = t.length; s < o; ++s) "undefined" != typeof t[s] && r.push(t[s]);
        return r
      }
      var a = Object.keys(t);
      for (s = 0, o = a.length; s < o; ++s) {
        var c = a[s];
        t[c] = i.compact(t[c], e)
      }
      return t
    }, i.isRegExp = function(t) {
      return "[object RegExp]" === Object.prototype.toString.call(t)
    }, i.isBuffer = function(t) {
      return null !== t && "undefined" != typeof t && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
    }
  }, {}],
  550: [function(t, e, i) {
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
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
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
      a = t("@marcom/lens/src/lens/core/Component"),
      c = (t("@marcom/viewport-emitter/src/js/viewport-emitter"), t("@marcom/sm-math-utils")),
      l = {
        create: t("@marcom/ac-raf-emitter/src/ac-raf-emitter/RAFEmitter"),
        update: t("@marcom/ac-raf-emitter/src/ac-raf-emitter/update"),
        draw: t("@marcom/ac-raf-emitter/src/ac-raf-emitter/draw")
      };
    window.MathUtils = c;
    var u, h;
    try {
      u = t("@marcom/ac-analytics"), h = u.observer.Event
    } catch (d) {}
    var m = function(t) {
      function e() {
        n(this, e);
        var t = r(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
        t.scrollbar = t.el.querySelector("#scrubber"), t.image = Array.from(t.el.querySelectorAll(".image-container > .image-wrapper")), t.currentImage = null, t.slideContainer = t.el.querySelector(".slide-container"), t.newImage = "", t.getElementToAdd = "", t.imageToAdd = "", t.componentReady = !1, t.thumb = t.el.querySelector(".thumb"), t.gradient = t.el.querySelector(".gradient"), t.ratio = 0, t.gradient.value = 0, t.thumbX = 0, t.initialPos = 0, t.setImageTimeout = -1, t.NUM_VERTICAL_LINES = t.image.length, t.manageMouseEvents = t.manageMouseEvents.bind(t), t.updateTransforms = t.updateTransforms.bind(t), t.moveThumbOnClick = t.moveThumbOnClick.bind(t), t._setDefaultTime = t._setDefaultTime.bind(t);
        if (h) {
          var i = {
            on: function() {},
            off: function() {}
          };
          t.customAnalyticsTracker = new h(i)
        }
        return t
      }
      return s(e, t), o(e, [{
        key: "name",
        value: function() {
          return "LivingWallpaperComponent"
        }
      }, {
        key: "componentWillMount",
        value: function() {
          var t = this;
          this.thumb.style.transitionDelay = "1s", this.thumb.style.transition = "all 1.5s cubic-bezier(0.22, 0.61, 0.36, 1)", l.update(function() {
            return t.measure().then(function() {
              t.finalizeInit()
            })
          })
        }
      }, {
        key: "_drawComponent",
        value: function() {
          var t = this;
          return this.measure().then(function() {
            t._setDefaultTime()
          })["catch"](function(t) {
            console.log(t)
          })
        }
      }, {
        key: "finalizeInit",
        value: function() {
          this.manageMouseEvents();
          var t = this.lens.anim.addKeyframe(this.el, {
            start: "-90vh + 50%",
            event: "move-slider"
          });
          t.controller.once(t.event, this._setDefaultTime), this.rafEmitter = new l.create, this.rafEmitter.on("draw", this.updateTransforms)
        }
      }, {
        key: "moveThumbOnClick",
        value: function(t) {
          this.metrics.gradientWidth;
          this.setRatioFromThumbTransform(t.offsetX), this.thumbX = this.getThumbTransformFromRatio(this.ratio), this.setSliderRatio(this.ratio), this.thumb.style.transition = "all 1.5s cubic-bezier(0.22, 0.61, 0.36, 1)"
        }
      }, {
        key: "_setDefaultTime",
        value: function() {
          for (var t = new Date, e = new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0), i = function(t) {
              return new Date(e.getTime()).setMinutes(60 * t)
            }, n = [i(6), i(6.5), i(7), i(7.5), i(8), i(10.5), i(13), i(15.5), i(18), i(18.5), i(19), i(19.5), i(20), i(22.5), i(1), i(3.5)], r = -1, s = Number.MAX_VALUE, o = 0; o < n.length; o++) {
            var a = Math.abs(n[o] - t.getTime());
            a < s && (s = a, r = o)
          }
          var c = Math.max(r / (n.length - 1));
          this.setSliderRatio(c), this.thumbX = this.getThumbTransformFromRatio(c)
        }
      }, {
        key: "updateTransforms",
        value: function() {
          var t = this.getThumbTransformFromRatio(this.ratio);
          this.thumb.style.transform = "translateX(" + t + "px)"
        }
      }, {
        key: "setSliderRatio",
        value: function(t) {
          this.ratio = t, this.setImageFromRatio(t), this.rafEmitter.run()
        }
      }, {
        key: "manageMouseEvents",
        value: function() {
          var t = this,
            e = "ontouchstart" in document.documentElement,
            i = e ? "touchstart" : "mousedown",
            n = e ? "touchend" : "mouseup",
            r = e ? "touchmove" : "mousemove",
            s = -1,
            o = function(i) {
              e ? t.initialPos = i.touches[0].screenX : t.initialPos = i.screenX, window.addEventListener(r, a), window.addEventListener(n, c), clearTimeout(s), t.gradient.removeEventListener("click", t.moveThumbOnClick)
            },
            a = function(i) {
              var n = e ? i.touches[0].screenX : i.screenX,
                r = n - t.initialPos;
              if (t.initialPos = n, t.thumbX += r, t.thumb.style.transition = "none", t.setRatioFromThumbTransform(t.thumbX), !t.hasBeenTracked && t.customAnalyticsTracker) {
                t.hasBeenTracked = !0;
                var s = "dynamic desktop slider interaction";
                t.customAnalyticsTracker.track({
                  title: "{PAGE_NAME} - " + s,
                  eVar1: "{PAGE_NAME} | " + s,
                  prop3: s
                })
              }
            },
            c = function l(e) {
              window.removeEventListener(r, a), window.removeEventListener(n, l), s = setTimeout(function() {
                return t.gradient.addEventListener("click", t.moveThumbOnClick)
              }, 250), t.setSliderRatio(t.ratio), t.thumbX = t.getThumbTransformFromRatio()
            };
          this.gradient.addEventListener("click", this.moveThumbOnClick), window.removeEventListener(i, o), this.thumb.addEventListener(i, o)
        }
      }, {
        key: "onResizeImmediate",
        value: function() {
          var t = this;
          this.measure().then(function() {
            t.updateTransforms(), t.thumbX = t.getThumbTransformFromRatio()
          })
        }
      }, {
        key: "measure",
        value: function() {
          var t = this;
          return new Promise(function(e, i) {
            var n = {
              containerWidth: t.slideContainer.clientWidth,
              boundsOffset: Math.round((t.slideContainer.clientWidth - t.gradient.clientWidth) / 2),
              thumbWidth: t.thumb.clientWidth,
              gradientWidth: t.gradient.clientWidth
            };
            t.metrics = n, e()
          })
        }
      }, {
        key: "getThumbTransformFromRatio",
        value: function(t) {
          return t = void 0 !== t ? t : this.ratio, c.lerp(t, 0, this.metrics.gradientWidth)
        }
      }, {
        key: "setRatioFromThumbTransform",
        value: function(t) {
          var e = 0,
            i = this.metrics.gradientWidth - this.metrics.thumbWidth / 2;
          t = c.clamp(t, e, i);
          var n = i - e;
          this.setSliderRatio((t - e) / n)
        }
      }, {
        key: "setImageFromRatio",
        value: function(t) {
          var e = this;
          clearTimeout(this.setImageTimeout), this.setImageTimeout = setTimeout(function() {
            l.draw(function() {
              t = void 0 === t ? e.ratio : t;
              var i = Math.round(t * (e.NUM_VERTICAL_LINES - 1)),
                n = e.image[i];
              n !== e.currentImage && (e.image.forEach(function(t) {
                (t.classList.contains("fade-in") || t.classList.contains("fade-out")) && t.classList.remove("fade-in", "fade-out")
              }), e.currentImage && e.currentImage.classList.add("fade-out"), e.currentImage = n, e.currentImage && e.currentImage.classList.add("fade-in"))
            })
          }, 100)
        }
      }]), e
    }(a);
    i["default"] = m
  }, {
    "@marcom/ac-analytics": void 0,
    "@marcom/ac-raf-emitter/src/ac-raf-emitter/RAFEmitter": 344,
    "@marcom/ac-raf-emitter/src/ac-raf-emitter/draw": 351,
    "@marcom/ac-raf-emitter/src/ac-raf-emitter/update": 355,
    "@marcom/lens/src/lens/core/Component": 506,
    "@marcom/sm-math-utils": 519,
    "@marcom/viewport-emitter/src/js/viewport-emitter": 521
  }],
  551: [function(t, e, i) {
    "use strict";

    function n(t) {
      return t && t.__esModule ? t : {
        "default": t
      }
    }

    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
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
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var a = function() {
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
      c = t("@marcom/lens/core/Component"),
      l = n(c),
      u = t("@marcom/viewport-emitter"),
      h = n(u),
      d = {
        DID_ENGAGE: "js-anim-engaged",
        TRANSITION_COMPLETE: "js-transition-complete"
      },
      m = {
        EVENT_NAME: "section-will-appear-with-padding",
        START: "500px-100vh",
        END: "100%"
      },
      f = ({
        EVENT_NAME: "remove-engage-transitions",
        START: m.END
      }, 5),
      p = function(t) {
        function e() {
          r(this, e);
          var t = s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          return t.documentTokenList = document.documentElement.classList, t.elementTokenList = t.el.classList, t.copyEl = t.el.querySelector(".copy"), t.isIE11 = t.documentTokenList.contains("ie-11"), t._componentInViewHandler = t._componentInViewHandler.bind(t), t._onTransitionEndEventHandler = t._onTransitionEndEventHandler.bind(t), t._initialize(), t
        }
        return o(e, t), a(e, [{
          key: "name",
          value: function() {
            return "EngagedTransitionComponent"
          }
        }, {
          key: "configureTransitionStart",
          value: function() {
            switch (h["default"].viewport) {
              case "xlarge":
                m.START = "500px-100vh";
                break;
              case "large":
                m.START = "500px-100vh";
                break;
              case "medium":
                m.START = "300px-100vh";
                break;
              case "small":
                m.START = "100px-100vh"
            }
          }
        }, {
          key: "_initialize",
          value: function() {
            this._setComponentEventHandlers(), this.configureTransitionStart()
          }
        }, {
          key: "_setComponentEventHandlers",
          value: function() {
            this.copyEl && !this.isIE11 && this.copyEl.addEventListener("transitionend", this._onTransitionEndEventHandler, !1)
          }
        }, {
          key: "componentWillMount",
          value: function() {
            this.configureTransitionStart(), this.addDiscreteEvent({
              event: m.EVENT_NAME,
              start: m.START,
              end: m.END,
              cssClass: d.DID_ENGAGE,
              toggle: !1,
              onenter: this._componentInViewHandler
            })
          }
        }, {
          key: "onResizeImmediate",
          value: function() {
            this.configureTransitionStart()
          }
        }, {
          key: "_onTransitionEndEventHandler",
          value: function() {
            this.elementTokenList.add(d.TRANSITION_COMPLETE)
          }
        }, {
          key: "_componentInViewHandler",
          value: function() {
            var t = this;
            this.isIE11 && setTimeout(function() {
              t.elementTokenList.add(d.TRANSITION_COMPLETE)
            }, 1e3 * f)
          }
        }]), e
      }(l["default"]);
    i["default"] = p
  }, {
    "@marcom/lens/core/Component": 506,
    "@marcom/viewport-emitter": 521
  }],
  552: [function(t, e, i) {
    "use strict";

    function n(t) {
      return t && t.__esModule ? t : {
        "default": t
      }
    }

    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
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
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var a = function() {
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
      c = t("@marcom/lens/core/Component"),
      l = n(c),
      u = {
        EVENT_NAME: "fade-in-gradient",
        START: "45%-100vh",
        END: "70%-100vh",
        EASE_OUT: 1
      },
      h = {
        EVENT_NAME: "fade-out-gradient",
        START: "60%",
        END: "80%",
        EASE_OUT: 1
      },
      d = function(t) {
        function e() {
          r(this, e);
          var t = s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          return t._fadeInGradient = t._fadeInGradient.bind(t), t._fadeOutGradient = t._fadeOutGradient.bind(t), t
        }
        return o(e, t), a(e, [{
          key: "name",
          value: function() {
            return "GradientComponent"
          }
        }, {
          key: "componentWillMount",
          value: function() {
            this.addContinuousEvent({
              event: u.EVENT_NAME,
              start: u.START,
              end: u.END,
              easeout: u.EASE_OUT,
              onevent: this._fadeInGradient.bind(this)
            }), this.addContinuousEvent({
              event: h.EVENT_NAME,
              start: h.START,
              end: h.END,
              easeout: h.EASE_OUT,
              onevent: this._fadeOutGradient.bind(this)
            })
          }
        }, {
          key: "_fadeInGradient",
          value: function(t) {
            var i = t.event,
              n = t.tweenProps[i].current;
            this.el.style.opacity = e.transitionSigmoid(n, 0, 1)
          }
        }, {
          key: "_fadeOutGradient",
          value: function(t) {
            var i = t.event,
              n = t.tweenProps[i].current;
            this.el.style.opacity = e.transitionSigmoid(n, 1, 0)
          }
        }], [{
          key: "transitionSigmoid",
          value: function(t, e, i) {
            return e + (i - e) * t
          }
        }]), e
      }(l["default"]);
    i["default"] = d
  }, {
    "@marcom/lens/core/Component": 506
  }],
  553: [function(t, e, i) {
    "use strict";

    function n(t) {
      return t && t.__esModule ? t : {
        "default": t
      }
    }

    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
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
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var a = function() {
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
      c = t("@marcom/lens"),
      l = (n(c), t("@marcom/lens/core/Component")),
      u = n(l),
      h = t("./keyframeManager"),
      d = n(h),
      m = t("@marcom/ac-video"),
      f = t("@marcom/viewport-emitter"),
      p = n(f),
      _ = t("@marcom/ac-raf-emitter/RAFEmitter"),
      g = (n(_), t("@marcom/ac-raf-emitter/update")),
      y = n(g),
      v = t("@marcom/ac-raf-emitter/draw"),
      b = n(v),
      E = "js-show-item",
      w = "fallback",
      T = "no-fallback",
      S = "js-animate-headline",
      C = "js-fade-in-headline",
      x = "js-fading-in",
      A = "js-scale-hero",
      k = "js-remove-transition",
      P = "initial-opacity",
      O = "js-remove-delay",
      I = "visibility-hidden",
      D = "large-hide",
      L = document.querySelector(".image-hero"),
      M = document.querySelector(".darkmode-gallery"),
      F = function(t) {
        function e(t) {
          r(this, e);
          var i = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
          return i.heroComponentWrap = document.querySelector(".hero-component"), i.heroImage = document.querySelector(".hero-image"), i.scalingOffset = document.querySelectorAll(".scaling-offset"), i.heroText = document.querySelectorAll(".hero-text"), i.darkModeHeadline = document.querySelectorAll(".dark-mode-headline"), i.heroScalingContainer = document.querySelector(".hero-scaling-container"), i.galleryScreens = i.heroImage.querySelectorAll(".image-screen"), i.gradient = document.querySelectorAll(".gradient-fade"), i.heroHeadline = document.querySelectorAll(".hero-headline"), i.heroTextContainer = document.querySelectorAll(".hero-text-container"), i.textViolator = document.querySelectorAll(".hero-text-violator"), i.galleryTriggers = i.heroComponentWrap.querySelectorAll(".hardware-gallery-triggers"), i.darkTextContainer = i.heroComponentWrap.querySelector(".dark-text-container"), i.initialWidth = window.innerWidth, i.fallback = !1, i.visibilityRemoved = !1, i.mobile = document.documentElement.classList.contains("mobile"), i.iOS = document.documentElement.classList.contains("ios"), i.legacyiOS = document.documentElement.classList.contains("legacy-ios"), i.isIE11 = document.documentElement.classList.contains("ie-11"), i.isFF = document.documentElement.classList.contains("isFF"), i.isChrome = document.documentElement.classList.contains("chrome"), i.isAndroid = document.documentElement.classList.contains("android"), i.isAOW = document.documentElement.classList.contains("aow"), i.inViewport = !0, i.videoLoaded = !1, i.videoType = {
            size: "",
            quality: ""
          }, i.checkFallback() && i.showFallback(), (0, y["default"])(function() {
            i.setScales(), i.setUpVideo()
          }), document.addEventListener("scroll", function() {
            (0, y["default"])(function() {
              i.scrollDirection()
            })
          }), i.keyframeManager = new d["default"], i
        }
        return o(e, t), a(e, [{
          key: "inView",
          value: function(t) {
            this.inViewport = t
          }
        }, {
          key: "name",
          value: function() {
            return "HeroComponent"
          }
        }, {
          key: "checkFallback",
          value: function() {
            return "small" === p["default"].viewport || window.innerHeight < 620 || document.documentElement.classList.contains("aow") || document.documentElement.classList.contains("ie") || this.shouldFallback || document.documentElement.classList.contains("safari10") || document.documentElement.classList.contains("edge") || document.documentElement.classList.contains("reduced-motion")
          }
        }, {
          key: "showFallback",
          value: function() {
            document.documentElement.classList.remove(T), document.documentElement.classList.add(w)
          }
        }, {
          key: "setUpVideo",
          value: function() {
            var t = this;
            this.checkFallback() || this.mediaController || (this.videoPlayer = m.Player.create({
              src: "/105/media/us/macos/mojave/2018/13892e3e_9a69_4184_9666_fed6d3215088/overview/hero/" + this.videoType.size + this.videoType.quality + "mp4",
              poster: " ",
              autoplay: !1,
              sharing: !1
            }), this.videoPlayer.on("ended", function() {
              t.videoPlayerReversed && !t.iOS && (t.resetVideo(t.videoPlayerReversed), t.swapVideoVisibility(t.videoPlayer, t.videoPlayerReversed))
            }), this.mediaController = this.videoPlayer.el.querySelector(".ac-video-media-controller"), this.mediaController.removeAttribute("controls"), this.videoPlayer.appendTo(this.heroScalingContainer), this.mediaController && (this.mediaController.muted = !0), setTimeout(function() {
              if (!t.videoLoaded) return t.shouldFallback = !0, void t.showFallback()
            }, 1800), this.videoPlayer.on("canplaythrough", function() {
              t.videoLoaded = !0, t.shouldFallback || t.videoPlayerReversed || (t.loadReversedVideo(), t.mountComponent())
            }))
          }
        }, {
          key: "loadReversedVideo",
          value: function() {
            var t = this;
            this.iOS || (this.videoPlayerReversed = m.Player.create({
              src: "/105/media/us/macos/mojave/2018/13892e3e_9a69_4184_9666_fed6d3215088/overview/hero/reversed_" + this.videoType.size + this.videoType.quality + "mp4",
              poster: " ",
              autoplay: !1,
              sharing: !1
            }), this.videoPlayerReversed.el.classList.add(D), this.videoPlayerReversed._videoImpl.el.removeAttribute("controls"), this.videoPlayerReversed.on("ended", function() {
              t.resetVideo(t.videoPlayer), t.swapVideoVisibility(t.videoPlayerReversed, t.videoPlayer)
            }), this.videoPlayerReversed.appendTo(this.heroScalingContainer))
          }
        }, {
          key: "setScales",
          value: function() {
            this.setVideoWidth(), this.transformAmtEnd = this.darkModeHeadline[0].getBoundingClientRect().height + 125, this.scaleAmtX = window.innerWidth / this.scaleXConstant, this.scaleAmtY = window.innerHeight / this.scaleYConstant, this.scaleAmtX > this.scaleAmtY ? this.scaleAmt = this.scaleAmtX + .5 : this.scaleAmt = this.scaleAmtY + .36
          }
        }, {
          key: "swapVideoVisibility",
          value: function(t, e) {
            t && e && (e.el.classList.remove(D), t.el.classList.add(D))
          }
        }, {
          key: "rewind",
          value: function() {
            this.iOS || !this.scrollUp || this.isAndroid || (this.videoPlayerReversed.play(), this.isRewinding = !0)
          }
        }, {
          key: "resetVideo",
          value: function(t) {
            t && t.getEnded() && t.seek(0)
          }
        }, {
          key: "setVideoWidth",
          value: function() {
            var t = this.darkTextContainer.getBoundingClientRect().height + 170;
            switch (this.videoType.quality = "_2x.", this.heroImage.querySelector(".ac-gallery-currentitem").style.opacity = "", p["default"].viewport) {
              case "xlarge":
                this.scaleYConstant = 487, this.scaleXConstant = 850, this.videoType.size = "large", this.transformAmt = t;
                break;
              case "large":
                this.scaleYConstant = 487, this.scaleXConstant = 850, this.videoType.size = "large", this.transformAmt = t;
                break;
              case "medium":
                this.scaleYConstant = 337, this.scaleXConstant = 724, this.videoType.size = "large", this.transformAmt = t;
                break;
              case "small":
            }
          }
        }, {
          key: "firstInteraction",
          value: function() {
            !this.scrollUp && this.videoPlayer && 0 === this.videoPlayer.getCurrentTime() && (this.isRewinding = !1, this.videoPlayer.play())
          }
        }, {
          key: "mountComponent",
          value: function() {
            var t = this;
            this.hasMounted || (this.hasMounted = !0, "small" === p["default"].viewport || this.fallback || (this.introAnimations() && (this.heroScalingContainer.style.transition = "unset"), this.removeDefaultOpacity(), this.setScales(), this.keyframeManager.defKeyframes.call(this).then(function() {
              t.headlineAnimation()
            })))
          }
        }, {
          key: "componentDidMount",
          value: function() {
            var t = this;
            document.addEventListener("scroll", function() {
              t.videoPlayer && t.firstInteraction()
            }, {
              once: !0
            })
          }
        }, {
          key: "positionScalingElm",
          value: function(t) {
            M.style.transform = "translateY(" + t.tweenProps.translateHWVals.current + "px)"
          }
        }, {
          key: "hardwareScale",
          value: function(t) {
            L.style.transform = "scale(" + t.tweenProps.scaleHWVals.current + ")"
          }
        }, {
          key: "introAnimations",
          value: function() {
            return document.querySelector(".hero-component").getBoundingClientRect().y < -2 || "small" === p["default"].viewport
          }
        }, {
          key: "headlineAnimation",
          value: function() {
            var t = this;
            setTimeout(function() {
              t.heroImage.classList.remove(I), t.heroScalingContainer.classList.add(A);
              for (var e = 0; e < t.heroHeadline.length; e++) t.heroHeadline[e].classList.add(x), t.heroHeadline[e].classList.add(C)
            }, 350)
          }
        }, {
          key: "scrollDirection",
          value: function() {
            var t = this;
            this.oldScroll >= window.scrollY ? this.scrollUp = !0 : this.scrollUp = !1, setTimeout(function() {
              t.oldScroll = window.scrollY
            }, 100)
          }
        }, {
          key: "removeDefaultOpacity",
          value: function() {
            this.heroImage.querySelector(".ac-gallery-currentitem").style.opacity = ""
          }
        }, {
          key: "fadeItem",
          value: function(t) {
            for (var e = 0; e < t.length; e++) t[e].classList.add(E), t[e].classList.add(S)
          }
        }, {
          key: "hideText",
          value: function(t, e) {
            for (var i = 0; i < t.length; i++) t[i].classList.remove(E), t[i].classList.remove(S), t[i].classList.remove(C), t[i].classList.remove(x), t[i].classList.remove(P), t[i].classList.add(O), e && (t[i].style.opacity = 0)
          }
        }, {
          key: "removeVisibility",
          value: function(t, e) {
            for (var i = 0; i < t.length; i++) t[i].classList.add(I), e && t[i].classList.add(D)
          }
        }, {
          key: "addVisibility",
          value: function(t, e) {
            for (var i = 0; i < t.length; i++) t[i].classList.remove(I), e && t[i].classList.remove(D)
          }
        }, {
          key: "resetGallery",
          value: function() {
            L.setAttribute("style", ""), M.setAttribute("style", ""), this.heroImage.querySelector(".ac-gallery-currentitem").style.opacity = "1"
          }
        }, {
          key: "onBreakpointChange",
          value: function() {
            this.setUpVideo(), this.onResizeImmediate()
          }
        }, {
          key: "onResizeImmediate",
          value: function() {
            var t = this;
            (0, y["default"])(function() {
              t.initialWidth !== window.innerWidth && (t.darkModeHeadline[0].classList.add(k), t.heroTextContainer[0].classList.add(k)), "small" === p["default"].viewport && t.darkModeHeadline[0].classList.contains(k) && t.darkModeHeadline[0].classList.remove(k), t.mobile || "medium" !== p["default"].viewport && "large" !== p["default"].viewport || t.darkModeHeadline[0].classList.add(k), (t.legacyiOS || t.isIE11 || t.isAOW && ("medium" === p["default"].viewport || "large" === p["default"].viewport)) && t.darkModeHeadline[0].classList.remove(k), t.setScales()
            }), (0, b["default"])(function() {
              return t.checkFallback() ? (document.documentElement.classList.add(w), t.keyframeManager.removeKeyframes.call(t), void t.resetGallery()) : (t.setScales(), t.darkModeHeadline[0].classList.remove(k), t.heroTextContainer[0].classList.remove(k), document.documentElement.classList.remove(w), t.keyframeManager.removeKeyframes.call(t), void t.keyframeManager.defKeyframes.call(t))
            })
          }
        }, {
          key: "onResizeDebounced",
          value: function() {
            !this.checkFallback() && window.innerHeight > 620 && (document.documentElement.classList.remove(w), document.documentElement.classList.add(T), this.onBreakpointChange())
          }
        }]), e
      }(u["default"]);
    i["default"] = F
  }, {
    "./keyframeManager": 554,
    "@marcom/ac-raf-emitter/RAFEmitter": 344,
    "@marcom/ac-raf-emitter/draw": 351,
    "@marcom/ac-raf-emitter/update": 355,
    "@marcom/ac-video": 423,
    "@marcom/lens": 504,
    "@marcom/lens/core/Component": 506,
    "@marcom/viewport-emitter": 521
  }],
  554: [function(t, e, i) {
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
        function t() {
          n(this, t)
        }
        return r(t, [{
          key: "defKeyframes",
          value: function() {
            var t = this;
            return new Promise(function(e, i) {
              t.addDiscreteEvent({
                event: "fade-in-out-headline",
                relativeTo: ".hero-component",
                start: "-10rh",
                end: "8rh",
                onenter: function() {
                  t.fadeItem(t.heroText), t.inView(!0)
                },
                onexit: function() {
                  t.hideText(t.heroText)
                }
              }), t.addDiscreteEvent({
                event: "fade-in-dark-mode-copy",
                relativeTo: ".hero-component",
                start: "29rh",
                end: "100rh",
                onenter: function() {
                  t.removeDefaultOpacity(), t.fadeItem(t.darkModeHeadline), t.fadeItem(t.galleryTriggers)
                },
                onexit: function() {
                  t.hideText(t.darkModeHeadline), t.hideText(t.galleryTriggers)
                }
              }), t.addDiscreteEvent({
                event: "fade-in-dark-mode-copy",
                relativeTo: ".hero-component",
                start: "1rh",
                end: "3rh",
                onenter: function() {
                  t.removeDefaultOpacity(), t.fadeItem(t.darkModeHeadline), t.fadeItem(t.galleryTriggers)
                },
                onexit: function() {
                  t.hideText(t.darkModeHeadline), t.hideText(t.galleryTriggers)
                }
              }), t.addDiscreteEvent({
                event: "fade-in-gallery",
                relativeTo: ".hero-component",
                start: "29rh",
                end: "110rh",
                onenter: function() {
                  setTimeout(function() {
                    t.removeVisibility(t.scalingOffset, !0)
                  }, 300), setTimeout(function() {
                    t.swapVideoVisibility(t.videoPlayer, t.videoPlayerReversed), t.resetVideo(t.videoPlayer), t.resetVideo(t.videoPlayerReversed)
                  }, 500), t.fadeItem(t.galleryScreens)
                },
                onexit: function() {
                  t.hideText(t.galleryScreens, !0), setTimeout(function() {
                    t.addVisibility(t.scalingOffset, !0)
                  }, 300), t.addVisibility(t.scalingOffset, !0), t.inView(!1)
                }
              }), t.addDiscreteEvent({
                event: "remove-gallery-screens",
                relativeTo: ".hero-component",
                start: "0rh",
                end: "20rh",
                onenter: function() {
                  t.removeVisibility(t.galleryScreens)
                },
                onexit: function() {
                  t.addVisibility(t.galleryScreens)
                }
              }), t.addContinuousEvent({
                event: "scale-hardware",
                scaleHWVals: [t.scaleAmt, 1],
                start: "20.85rh",
                end: "31rh",
                ease: .3,
                relativeTo: ".hero-component",
                onevent: t.hardwareScale
              }), t.addContinuousEvent({
                event: "translate-hardware",
                translateHWVals: [-t.transformAmt, 50],
                start: "20.85rh",
                end: "31rh",
                ease: .3,
                relativeTo: ".hero-component",
                onevent: t.positionScalingElm
              }), t.addDiscreteEvent({
                event: "fade-in-gradient",
                relativeTo: ".hero-component",
                start: "23.00rh",
                end: "100rh",
                onenter: function() {
                  t.fadeItem(t.gradient)
                },
                onexit: function() {
                  t.hideText(t.gradient)
                }
              }), t.addDiscreteEvent({
                event: "video-play",
                relativeTo: ".hero-component",
                start: "4.50rh",
                end: "10.5rh",
                onenter: function() {
                  t.firstInteraction(), t.resetVideo(t.videoPlayerReversed)
                },
                onexit: function() {
                  t.firstInteraction()
                }
              }), t.addDiscreteEvent({
                event: "video-rewind",
                relativeTo: ".hero-component",
                start: "20.8rh",
                end: "25.1rh",
                onenter: function() {
                  t.rewind()
                }
              }), e()
            })
          }
        }, {
          key: "removeKeyframes",
          value: function() {
            this.removeKeyframes(Array.from(this.keyframes))
          }
        }]), t
      }();
    e.exports = s
  }, {}],
  555: [function(t, e, i) {
    "use strict";

    function n(t) {
      return t && t.__esModule ? t : {
        "default": t
      }
    }

    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
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
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var a, c, l = function() {
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
      u = t("@marcom/lens/core/Component"),
      h = n(u),
      d = t("@marcom/ac-progressive-image-loader/ProgressiveImageLoader"),
      m = n(d);
    try {
      a = t("@marcom/ac-analytics"), c = a.observer.Event
    } catch (f) {}
    var p = {
        DID_ENGAGE: "js-anim-engaged",
        TRANSITION_COMPLETE: "js-transition-complete"
      },
      _ = {
        EVENT_NAME: "js-image-compare-progressive-images",
        START: "-110vh",
        END: "200%"
      },
      g = {
        EVENT_NAME: "js-image-compare",
        START: "-50vh",
        END: "140%",
        RELATIVE_TO: ".compare-container"
      },
      y = 6,
      v = function(t) {
        function e() {
          r(this, e);
          var t = s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          if (t.imagesLoaded = !1, t.componentInView = !1, t.progressiveImageLoaderOptions = {
              container: t.el
            }, t.progressiveImageLoadOptions = {
              imageDataAttribute: "data-progressive-image",
              imageAnimate: !1
            }, c) {
            var i = {
              on: function() {},
              off: function() {}
            };
            t.customAnalyticsTracker = new c(i)
          }
          return t.documentTokenList = document.documentElement.classList, t.elementTokenList = t.el.classList, t.isIE11 = t.documentTokenList.contains("ie-11"), t.slider = t.el.querySelector("[data-compare-slider]"), t.divisor = t.el.querySelector("[data-compare-divisor]"), t.handle = t.el.querySelector("[data-compare-handle]"), t._progressiveLoadImages = t._progressiveLoadImages.bind(t), t._progressiveImagesCompleteHandler = t._progressiveImagesCompleteHandler.bind(t), t._componentInViewHandler = t._componentInViewHandler.bind(t), t._dragHandleEventHandler = t._dragHandleEventHandler.bind(t), t._onTransitionEndEventHandler = t._onTransitionEndEventHandler.bind(t), t.progressiveImageLoader = new m["default"](t.progressiveImageLoaderOptions), t._initialize(), t
        }
        return o(e, t), l(e, [{
          key: "name",
          value: function() {
            return "ImageCompareComponent"
          }
        }, {
          key: "_initialize",
          value: function() {
            this._setComponentEventHandlers()
          }
        }, {
          key: "_setComponentEventHandlers",
          value: function() {
            var t = this.isIE11 ? "change" : "input";
            this.progressiveImageLoader.on("complete", this._progressiveImagesCompleteHandler), this.slider && this.slider.addEventListener(t, this._dragHandleEventHandler), this.divisor && !this.isIE11 && this.divisor.addEventListener("transitionend", this._onTransitionEndEventHandler, !1)
          }
        }, {
          key: "componentWillMount",
          value: function() {
            this.addDiscreteEvent({
              event: _.EVENT_NAME,
              start: _.START,
              end: _.END,
              relativeTo: g.RELATIVE_TO,
              onceenter: this._progressiveLoadImages
            }), this.addDiscreteEvent({
              event: g.EVENT_NAME,
              start: g.START,
              end: g.END,
              relativeTo: g.RELATIVE_TO,
              onceenter: this._componentInViewHandler
            })
          }
        }, {
          key: "onBreakpointChange",
          value: function() {
            this.componentInView && this.elementTokenList.add(p.TRANSITION_COMPLETE)
          }
        }, {
          key: "_progressiveLoadImages",
          value: function() {
            this.progressiveImageLoader.load(this.progressiveImageLoadOptions)
          }
        }, {
          key: "_progressiveImagesCompleteHandler",
          value: function() {
            var t = this.elementTokenList.contains(p.DID_ENGAGE);
            this.imagesLoaded = !0, this.componentInView && !t && this.elementTokenList.add(p.DID_ENGAGE)
          }
        }, {
          key: "_componentInViewHandler",
          value: function() {
            var t = this;
            this.componentInView = !0, this.imagesLoaded && this.elementTokenList.add(p.DID_ENGAGE), this.isIE11 && this.imagesLoaded && setTimeout(function() {
              t.elementTokenList.add(p.TRANSITION_COMPLETE)
            }, 1e3 * y)
          }
        }, {
          key: "_onTransitionEndEventHandler",
          value: function() {
            this.elementTokenList.add(p.TRANSITION_COMPLETE)
          }
        }, {
          key: "_dragHandleEventHandler",
          value: function(t) {
            var e = t.target.value;
            if (this.elementTokenList.add(p.TRANSITION_COMPLETE), this.divisor.style.width = e + "%", this.handle.style.left = e + "%", !this.hasBeenTracked && this.customAnalyticsTracker) {
              this.hasBeenTracked = !0;
              var i = "Image Compare Slider Interaction";
              this.customAnalyticsTracker.track({
                title: "{PAGE_NAME} - " + i,
                eVar1: "{PAGE_NAME} | " + i,
                prop3: i
              })
            }
          }
        }]), e
      }(h["default"]);
    i["default"] = v
  }, {
    "@marcom/ac-analytics": void 0,
    "@marcom/ac-progressive-image-loader/ProgressiveImageLoader": 337,
    "@marcom/lens/core/Component": 506
  }],
  556: [function(t, e, i) {
    "use strict";

    function n(t) {
      return t && t.__esModule ? t : {
        "default": t
      }
    }

    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
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
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var a = function() {
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
      c = t("@marcom/lens/core/Component"),
      l = n(c),
      u = t("@marcom/ac-media-object"),
      h = n(u),
      d = t("@marcom/ac-viewport-emitter"),
      m = n(d),
      f = t("../utils/DevicePixelRatioEmitter"),
      p = n(f),
      _ = {
        basePath: "/105/media/{{locale}}/macos/mojave/2018/13892e3e_9a69_4184_9666_fed6d3215088",
        locale: "us",
        format: "mp4"
      },
      g = {
        SETTINGS: "data-inline-video-options"
      },
      y = 3,
      v = {
        EVENT_NAME: "load-video-asset",
        START: "-130vh",
        END: "120vh + 100%"
      },
      b = {
        EVENT_NAME: "play-inline-video",
        START: "-80vh",
        END: "100vh + 100%"
      },
      E = {
        START_FRAME: "[data-mediaobject-startframe]",
        ENDED: ".mediaobject-ended"
      },
      w = {
        LOADED: "loaded",
        PLAY: "play",
        ENDED: "ended",
        DESTROYED: "destroyed",
        TIME_UPDATE: "timeupdate"
      },
      T = "change",
      S = .26,
      C = "js-fade-in",
      x = function(t) {
        function e() {
          r(this, e);
          var t = s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          return t.mediaObjectOptions = {
            iosInline: !0
          }, t.devicePixelRatioEmitter = new p["default"], t.settings = new Object, t.customComponentSettings = t.el.getAttribute(g.SETTINGS), t.mediaSource = null, t.documentTokenList = document.documentElement.classList, t.inLineVideoAvailable = t.documentTokenList.contains("inline-video"), t.isLegacyiOS = t.documentTokenList.contains("legacy-ios"), t.previousViewport = m["default"].viewport, t.isIE11 = t.documentTokenList.contains("ie-11"), t.isAndroid = t.documentTokenList.contains("android"), t.aow = t.documentTokenList.contains("aow"), t.componentHasCustomSettings = t.el.hasAttribute(g.SETTINGS), t.fallback = !t.inLineVideoAvailable && !t.isLegacyiOS || t.isAndroid || t.aow, t.videoContainer = t.el.querySelector("[data-video-container]"), t.replayButton = t.el.querySelector("[data-replay-button]"), t._createMediaObjectEventHandler = t._createMediaObjectEventHandler.bind(t), t._onComponentInViewHandler = t._onComponentInViewHandler.bind(t), t._onRetinaChangeHandler = t._onRetinaChangeHandler.bind(t), t._mediaObjectEndedHandler = t._mediaObjectEndedHandler.bind(t), t._mediaObjectOnTimeUpdateHandler = t._mediaObjectOnTimeUpdateHandler.bind(t), t._replayMediaObject = t._replayMediaObject.bind(t), t._initialize(), t
        }
        return o(e, t), a(e, [{
          key: "name",
          value: function() {
            return "InlineVideoComponent"
          }
        }, {
          key: "_initialize",
          value: function() {
            this.fallback || (this.componentHasCustomSettings && this._overwriteDefaultOptions(), this._setComponentEventHandlers())
          }
        }, {
          key: "_setComponentEventHandlers",
          value: function() {
            this.devicePixelRatioEmitter.on(T, this._onRetinaChangeHandler)
          }
        }, {
          key: "_createMediaObject",
          value: function() {
            var t = this;
            return new Promise(function(e, i) {
              t.mediaSource = t._getMediaSource(), t.mediaObject = h["default"].createVideo(t.videoContainer, t.mediaSource, t.mediaObjectOptions), t._setMediaObjectEventHandlers(), t.mediaObject.on(w.LOADED, function() {
                t.startFrame = t.mediaObject.el.querySelector(E.START_FRAME), t.mediaObjectVideoEl = t.mediaObject.el.getElementsByTagName("video").item(0), t.mediaObjectVideoEl && (t.mediaObjectVideoEl.muted = !0), e()
              }), t.mediaObject.load(), t.mediaObject.enhance()
            })
          }
        }, {
          key: "_resetMediaObject",
          value: function() {
            this.mediaObject.reset(), this.mediaObject.el.classList.remove(E.ENDED)
          }
        }, {
          key: "_setMediaObjectEventHandlers",
          value: function() {
            this.mediaObject.on(w.ENDED, this._mediaObjectEndedHandler), this.isIE11 && this.mediaObject.on(w.TIME_UPDATE, this._mediaObjectOnTimeUpdateHandler), this.replayButton && this.replayButton.addEventListener("click", this._replayMediaObject)
          }
        }, {
          key: "componentWillMount",
          value: function() {
            this.fallback || (this.addDiscreteEvent({
              event: v.EVENT_NAME,
              start: v.START,
              end: v.END,
              onceenter: this._createMediaObjectEventHandler
            }), this.addDiscreteEvent({
              timeToEngage: y,
              event: b.EVENT_NAME,
              start: b.START,
              end: b.END,
              onceenter: this._onComponentInViewHandler
            }))
          }
        }, {
          key: "_createMediaObjectEventHandler",
          value: function() {
            this.mediaObject || this._createMediaObject()
          }
        }, {
          key: "_onComponentInViewHandler",
          value: function() {
            var t = this;
            return this.mediaObject ? void this.mediaObject.play() : void this._createMediaObject().then(function() {
              t.mediaObject.play()
            })
          }
        }, {
          key: "_mediaObjectEndedHandler",
          value: function() {
            this.replayButton && (this.replayButton.disabled = !1, this.replayButton.classList.add(C))
          }
        }, {
          key: "_mediaObjectOnTimeUpdateHandler",
          value: function() {
            this.mediaObject.getCurrentTime() < S && this.mediaObject.trigger(w.PLAY), this.mediaObject.getCurrentTime() === this.mediaObject.getDuration() && this.mediaObject.trigger(w.ENDED)
          }
        }, {
          key: "_replayMediaObject",
          value: function() {
            this.isIE11 && (this._resetMediaObject(), this.mediaObject.el.querySelector(E.START_FRAME).style.opacity = 0), this.replayButton && (this.replayButton.classList.remove(C), this.replayButton.disabled = !0), this.mediaObject.play()
          }
        }, {
          key: "onBreakpointChange",
          value: function() {
            var t = this;
            if (this.mediaObject && !this.fallback) {
              var e = m["default"].viewport;
              "xlarge" === e || "large" === e && "xlarge" === this.previousViewport || (this.replayButton && (this.replayButton.classList.remove(C), this.replayButton.disabled = !0), this.destroy().then(function() {
                return t._createMediaObject()
              }).then(function() {
                t.isIE11 && (t._resetMediaObject(), t.startFrame.style.opacity = 0), t.replayButton.classList.remove(C), t.replayButton.disabled = !0, t.mediaObject.play()
              })), this.previousViewport = e
            }
          }
        }, {
          key: "_onRetinaChangeHandler",
          value: function(t) {
            var e = this;
            this.mediaObject && this.destroy().then(function() {
              return e._createMediaObject()
            }).then(function() {
              e.mediaObject.play()
            })
          }
        }, {
          key: "_overwriteDefaultOptions",
          value: function() {
            try {
              var t = JSON.parse(this.customComponentSettings);
              Object.assign(this.settings, _, t), this.settings.basePath = this.settings.basePath.replace("{{locale}}", this.settings.locale)
            } catch (e) {
              throw new Error("InlineVideoComponent::overwriteDefaultOptions. Invalid custom options.")
            }
          }
        }, {
          key: "_getMediaSource",
          value: function() {
            var t = m["default"].viewport,
              e = m["default"].retina,
              i = new Object;
            return "xlarge" === t && (t = "large"), this.loadedViewport = t, i = {
              basePath: this.settings.basePath,
              filename: this.settings.filename + "/" + this.loadedViewport + (e ? "_2x" : ""),
              fileFormat: this.settings.format
            }
          }
        }, {
          key: "destroy",
          value: function() {
            var t = this;
            return new Promise(function(e, i) {
              t.mediaObject.on(w.DESTROYED, function() {
                t.mediaSource = null, t.mediaObject = null, t.replayButton && t.replayButton.classList.remove(C), e()
              }), t.mediaObject.destroy()
            })
          }
        }]), e
      }(l["default"]);
    i["default"] = x
  }, {
    "../utils/DevicePixelRatioEmitter": 559,
    "@marcom/ac-media-object": 289,
    "@marcom/ac-viewport-emitter": 485,
    "@marcom/lens/core/Component": 506
  }],
  557: [function(t, e, i) {
    "use strict";

    function n(t) {
      return t && t.__esModule ? t : {
        "default": t
      }
    }

    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
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
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var a = function() {
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
      c = function v(t, e, i) {
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
      l = t("@marcom/lens/core/Component"),
      u = n(l),
      h = t("@marcom/ac-progressive-image-loader/ProgressiveImageLoader"),
      d = n(h),
      m = {
        imageAnimate: !1
      },
      f = {
        SETTINGS: "data-progressive-image-options"
      },
      p = {
        EVENT_NAME: "progressive-image-loading",
        START: "-95vh",
        END: "100vh + 100%"
      },
      _ = "progressive-image",
      g = {
        IMAGE_COMPLETE: "complete"
      },
      y = function(t) {
        function e() {
          r(this, e);
          var t = s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          return t.imagesLoaded = !1, t.settings = new Object, t.customComponentSettings = t.el.getAttribute(f.SETTINGS), t.loaderSettings = {
            container: t.el,
            includeContainer: !0
          }, t.documentTokenList = document.documentElement.classList, t.isProgressiveImageAvailable = t.documentTokenList.contains(_), t.componentHasCustomSettings = t.el.hasAttribute(f.SETTINGS), t._onProgressiveImageComplete = t._onProgressiveImageComplete.bind(t), t._onComponentInViewHandler = t._onComponentInViewHandler.bind(t), t._initialize(), t
        }
        return o(e, t), a(e, [{
          key: "name",
          value: function() {
            return "ProgressiveImageComponent"
          }
        }, {
          key: "_initialize",
          value: function() {
            this.progressiveImageLoader = new d["default"](this.loaderSettings), this.componentHasCustomSettings && this._overwriteDefaultOptions(), this._setComponentEventHandlers()
          }
        }, {
          key: "_setComponentEventHandlers",
          value: function() {
            this.progressiveImageLoader.on(g.IMAGE_COMPLETE, this._onProgressiveImageComplete)
          }
        }, {
          key: "componentWillMount",
          value: function() {
            this.addDiscreteEvent({
              event: p.EVENT_NAME,
              start: p.START,
              end: p.END,
              onceenter: this._onComponentInViewHandler
            })
          }
        }, {
          key: "_onComponentInViewHandler",
          value: function() {
            this.isProgressiveImageAvailable && !this.imagesLoaded && this.progressiveImageLoader.load(Object.assign({}, m, this.settings))
          }
        }, {
          key: "_onProgressiveImageComplete",
          value: function() {
            this.imagesLoaded = !0
          }
        }, {
          key: "_overwriteDefaultOptions",
          value: function() {
            try {
              var t = JSON.parse(this.customComponentSettings);
              Object.assign(this.settings, m, t)
            } catch (e) {
              throw new Error("ProgressiveImageComponent::overwriteDefaultOptions. Invalid custom options.")
            }
          }
        }, {
          key: "destroy",
          value: function() {
            this.progressiveImageLoader.destroy(), this.progressiveImageLoader = null, this.imagesLoaded = !1, c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this)
          }
        }]), e
      }(u["default"]);
    i["default"] = y
  }, {
    "@marcom/ac-progressive-image-loader/ProgressiveImageLoader": 337,
    "@marcom/lens/core/Component": 506
  }],
  558: [function(t, e, i) {
    "use strict";

    function n(t) {
      return t && t.__esModule ? t : {
        "default": t
      }
    }

    function r(t) {
      var e = document.documentElement.scrollHeight,
        i = 0,
        n = 30;
      window.requestAnimationFrame(function r() {
        var s = document.documentElement.scrollHeight;
        if (e !== s) i = 0;
        else if (i++, i >= n) return void t();
        e = s, window.requestAnimationFrame(r)
      })
    }

    function s() {
      var t = void 0,
        e = document.documentElement.getAttribute("lang");
      "ko-KR" === e && f.WordJoiner.shouldJoin() && (t = new f.WordJoiner({
        dataAttribute: !1
      }), t.join(), t.destroy())
    }

    function o() {
      var t = ["darkmode", "newapps", "macappstore"];
      t.forEach(function(t) {
        var e = document.getElementById(t + "-gallery");
        if (e) {
          var i = e.hasAttribute("data-related-gallery");
          new C.FadeGallery(e, {
            enableCaptions: i
          })
        }
      })
    }

    function a() {
      A["default"].initialize(), o(), _["default"].initializeDOMComponents({
        ProgressiveImageComponent: l["default"],
        HeroComponent: y["default"],
        EngagedTransitionComponent: m["default"],
        DynamicDesktopComponent: b["default"],
        GradientComponent: w["default"],
        ImageCompareComponent: S["default"],
        InlineVideoComponent: h["default"]
      }), s()
    }
    var c = t("./components/ProgressiveImageComponent"),
      l = n(c),
      u = t("./components/InlineVideoComponent"),
      h = n(u),
      d = t("./components/EngagedTransitionComponent"),
      m = n(d),
      f = t("@marcom/ac-kr-word-joiner"),
      p = t("@marcom/lens"),
      _ = n(p),
      g = t("./components/HeroComponent/HeroComponent"),
      y = n(g),
      v = t("./components/DynamicDesktopComponent"),
      b = n(v),
      E = t("./components/GradientComponent"),
      w = n(E),
      T = t("./components/ImageCompareComponent"),
      S = n(T),
      C = t("@marcom/ac-gallery"),
      x = t("@marcom/anim-system"),
      A = n(x);
    r(a)
  }, {
    "./components/DynamicDesktopComponent": 550,
    "./components/EngagedTransitionComponent": 551,
    "./components/GradientComponent": 552,
    "./components/HeroComponent/HeroComponent": 553,
    "./components/ImageCompareComponent": 555,
    "./components/InlineVideoComponent": 556,
    "./components/ProgressiveImageComponent": 557,
    "@marcom/ac-gallery": 238,
    "@marcom/ac-kr-word-joiner": 265,
    "@marcom/anim-system": 486,
    "@marcom/lens": 504
  }],
  559: [function(t, e, i) {
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
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
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
      c = t("@marcom/ac-event-emitter-micro"),
      l = "change",
      u = function(t) {
        function e() {
          n(this, e);
          var t = r(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          return t._devicePixelRatioUpdateHandler = t._devicePixelRatioUpdateHandler.bind(t), t._initialize(), t
        }
        return s(e, t), o(e, [{
          key: "_initialize",
          value: function() {
            this._setProperties()
          }
        }, {
          key: "_setProperties",
          value: function() {
            this.devicePixelRatio = window.devicePixelRatio, this.matchMediaMin = window.matchMedia("screen and (min-resolution: " + this.devicePixelRatio + "dppx), screen and (-webkit-min-device-pixel-ratio: " + this.devicePixelRatio + ")"), this.matchMediaMax = window.matchMedia("screen and (max-resolution: " + this.devicePixelRatio + "dppx), screen and (-webkit-max-device-pixel-ratio: " + this.devicePixelRatio + ")"), this._addEventListeners()
          }
        }, {
          key: "_addEventListeners",
          value: function() {
            this.matchMediaMin.addListener(this._devicePixelRatioUpdateHandler), this.matchMediaMax.addListener(this._devicePixelRatioUpdateHandler)
          }
        }, {
          key: "_devicePixelRatioUpdateHandler",
          value: function(t) {
            var e = {
              from: this.devicePixelRatio,
              to: window.devicePixelRatio
            };
            this.trigger(l, e), this._removeEventListeners(), this._setProperties()
          }
        }, {
          key: "_removeEventListeners",
          value: function() {
            this.matchMediaMin.removeListener(this._devicePixelRatioUpdateHandler), this.matchMediaMax.removeListener(this._devicePixelRatioUpdateHandler)
          }
        }, {
          key: "_clearProperties",
          value: function() {
            this.devicePixelRatio = null, this.matchMediaMin = null, this.matchMediaMax = null
          }
        }, {
          key: "destroy",
          value: function() {
            this._clearProperties(), a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this)
          }
        }]), e
      }(c.EventEmitterMicro);
    i["default"] = u
  }, {
    "@marcom/ac-event-emitter-micro": 156
  }]
}, {}, [558]);
