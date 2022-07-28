! function t(e, i, n) {
  function r(s, a) {
    if (!i[s]) {
      if (!e[s]) {
        var c = "function" == typeof require && require;
        if (!a && c) return c(s, !0);
        if (o) return o(s, !0);
        var l = new Error("Cannot find module '" + s + "'");
        throw l.code = "MODULE_NOT_FOUND", l
      }
      var u = i[s] = {
        exports: {}
      };
      e[s][0].call(u.exports, function(t) {
        var i = e[s][1][t];
        return r(i ? i : t)
      }, u, u.exports, t, e, i, n)
    }
    return i[s].exports
  }
  for (var o = "function" == typeof require && require, s = 0; s < n.length; s++) r(n[s]);
  return r
}({
  1: [function(t, e, i) {
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
        o = {
          "animation-delay": "animationiteration",
          "-o-animation-delay": "oanimationiteration",
          "-moz-animation-delay": "animationiteration",
          "-webkit-animation-delay": "webkitAnimationIteration",
          "-ms-animation-delay": "MSAnimationIteration"
        },
        s = {
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
        animationIteration: o[t("animation-delay")],
        animationEnd: s[t("animation-delay")]
      }
    }();
    e.exports = n
  }, {}],
  2: [function(t, e, i) {
    "use strict";
    e.exports = {
      path: t("./ac-path/path")
    }
  }, {
    "./ac-path/path": 3
  }],
  3: [function(t, e, i) {
    "use strict";

    function n(t) {
      return n.parse(t)
    }
    n.basename = function(t, e) {
      n._assertStr(t);
      var i, r = t.match(/[^/]*$/)[0];
      return e && (i = r.match(new RegExp("(.*)" + e + "$")), i && (r = i[1])), r
    }, n.dirname = function(t) {
      n._assertStr(t);
      var e = t.match(/^(.*)\b\/|.*/);
      return e[1] || t
    }, n.extname = function(t) {
      n._assertStr(t);
      var e = t.match(/\.[^.]*$/);
      return e ? e[0] : ""
    }, n.filename = function(t) {
      return n._assertStr(t), n.basename(t, n.extname(t))
    }, n.format = function(t, e) {
      n._assertObj(t);
      var i = t.dirname ? t.dirname + "/" : "";
      return t.basename ? i += t.basename : t.filename && (i += t.filename, t.extname && (i += t.extname)), e && ("string" == typeof e ? i += "?" + e : Object.prototype.toString.call(e) === Object.prototype.toString.call([]) && (i += "?" + e.join("&"))), i
    }, n.isAbsolute = function(t) {
      return n._assertStr(t), !!t.match(/(^http(s?))/)
    }, n.isRootRelative = function(t) {
      return n._assertStr(t), !!t.match(/^\/(?!\/)/)
    }, n.parse = function(t) {
      return n._assertStr(t), {
        dirname: n.dirname(t),
        basename: n.basename(t),
        filename: n.filename(t),
        extname: n.extname(t)
      }
    }, n._assertStr = function(t) {
      n._assertType(t, "string")
    }, n._assertObj = function(t) {
      n._assertType(t, "object")
    }, n._assertType = function(t, e) {
      var i = typeof t;
      if ("undefined" === i || i !== e) throw new TypeError("path param must be of type " + e)
    }, e.exports = n
  }, {}],
  4: [function(t, e, i) {
    "use strict";
    e.exports = {
      cname: t("./ac-cname/cname")
    }
  }, {
    "./ac-cname/cname": 5
  }],
  5: [function(t, e, i) {
    "use strict";

    function n(t) {
      return n.addPrefix(t)
    }
    var r = t("ac-path").path;
    n._prefix = function() {
      var t = "https://images.apple.com/global/elements/blank.gif";
      return t.replace(/global\/.*/, "")
    }(), n.addPrefix = function(t) {
      return r.isAbsolute(t) ? t : (n._assertRootRelative(t), t = n._prefix + t.replace(/^\//, ""), t = t.replace(/(^.+)(\/105\/)/, "$1/"))
    }, n.formatUrl = function(t, e, i, o) {
      var s = r.format({
        dirname: t,
        filename: e,
        extname: i
      }, o);
      if (r.isAbsolute(s)) return s;
      n._assertRootRelative(t);
      var a = n.addPrefix(s);
      return a
    }, n._assertRootRelative = function(t) {
      if (!r.isRootRelative(t)) throw new URIError("Only root-relative paths are currently supported")
    }, e.exports = n
  }, {
    "ac-path": 2
  }],
  6: [function(t, e, i) {
    "use strict";
    var n = t("./utils/addEventListener"),
      r = t("./shared/getEventType");
    e.exports = function(t, e, i, o) {
      return e = r(t, e), n(t, e, i, o)
    }
  }, {
    "./shared/getEventType": 16,
    "./utils/addEventListener": 20
  }],
  7: [function(t, e, i) {
    "use strict";
    var n = t("./utils/dispatchEvent"),
      r = t("./shared/getEventType");
    e.exports = function(t, e, i) {
      return e = r(t, e), n(t, e, i)
    }
  }, {
    "./shared/getEventType": 16,
    "./utils/dispatchEvent": 21
  }],
  8: [function(t, e, i) {
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
    "./addEventListener": 6,
    "./dispatchEvent": 7,
    "./preventDefault": 14,
    "./removeEventListener": 15,
    "./stop": 17,
    "./stopPropagation": 18,
    "./target": 19
  }],
  9: [function(t, e, i) {
    "use strict";
    var n = t("./utils/eventTypeAvailable"),
      r = t("./shared/camelCasedEventTypes"),
      o = t("./shared/windowFallbackEventTypes"),
      s = t("./shared/prefixHelper"),
      a = {};
    e.exports = function c(t, e) {
      var i, l, u;
      if (e = e || "div", t = t.toLowerCase(), e in a || (a[e] = {}), l = a[e], t in l) return l[t];
      if (n(t, e)) return l[t] = t;
      if (t in r)
        for (u = 0; u < r[t].length; u++)
          if (i = r[t][u], n(i.toLowerCase(), e)) return l[t] = i;
      for (u = 0; u < s.evt.length; u++)
        if (i = s.evt[u] + t, n(i, e)) return s.reduce(u), l[t] = i;
      return "window" !== e && o.indexOf(t) ? l[t] = c(t, "window") : l[t] = !1
    }
  }, {
    "./shared/camelCasedEventTypes": 10,
    "./shared/prefixHelper": 11,
    "./shared/windowFallbackEventTypes": 12,
    "./utils/eventTypeAvailable": 13
  }],
  10: [function(t, e, i) {
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
  11: [function(t, e, i) {
    "use strict";
    var n = ["-webkit-", "-moz-", "-ms-"],
      r = ["Webkit", "Moz", "ms"],
      o = ["webkit", "moz", "ms"],
      s = function() {
        this.initialize()
      },
      a = s.prototype;
    a.initialize = function() {
      this.reduced = !1, this.css = n, this.dom = r, this.evt = o
    }, a.reduce = function(t) {
      this.reduced || (this.reduced = !0, this.css = [this.css[t]], this.dom = [this.dom[t]], this.evt = [this.evt[t]])
    }, e.exports = new s
  }, {}],
  12: [function(t, e, i) {
    "use strict";
    e.exports = ["transitionend", "animationstart", "animationend", "animationiteration"]
  }, {}],
  13: [function(t, e, i) {
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
  14: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      t = t || window.event, t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }
  }, {}],
  15: [function(t, e, i) {
    "use strict";
    var n = t("./utils/removeEventListener"),
      r = t("./shared/getEventType");
    e.exports = function(t, e, i, o) {
      return e = r(t, e), n(t, e, i, o)
    }
  }, {
    "./shared/getEventType": 16,
    "./utils/removeEventListener": 22
  }],
  16: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-prefixer/getEventType");
    e.exports = function(t, e) {
      var i, r;
      return i = "tagName" in t ? t.tagName : t === window ? "window" : "document", r = n(e, i), r ? r : e
    }
  }, {
    "@marcom/ac-prefixer/getEventType": 9
  }],
  17: [function(t, e, i) {
    "use strict";
    var n = t("./stopPropagation"),
      r = t("./preventDefault");
    e.exports = function(t) {
      t = t || window.event, n(t), r(t), t.stopped = !0, t.returnValue = !1
    }
  }, {
    "./preventDefault": 14,
    "./stopPropagation": 18
  }],
  18: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      t = t || window.event, t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
    }
  }, {}],
  19: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return t = t || window.event, "undefined" != typeof t.target ? t.target : t.srcElement
    }
  }, {}],
  20: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i, n) {
      return t.addEventListener ? t.addEventListener(e, i, !!n) : t.attachEvent("on" + e, i), t
    }
  }, {}],
  21: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/CustomEvent"), e.exports = function(t, e, i) {
      var n;
      return t.dispatchEvent ? (n = i ? new CustomEvent(e, i) : new CustomEvent(e), t.dispatchEvent(n)) : (n = document.createEventObject(), i && "detail" in i && (n.detail = i.detail), t.fireEvent("on" + e, n)), t
    }
  }, {
    "@marcom/ac-polyfills/CustomEvent": void 0
  }],
  22: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i, n) {
      return t.removeEventListener ? t.removeEventListener(e, i, !!n) : t.detachEvent("on" + e, i), t
    }
  }, {}],
  23: [function(t, e, i) {
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
    "./utils/getBoundingClientRect": 34
  }],
  24: [function(t, e, i) {
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
    "./utils/getBoundingClientRect": 34
  }],
  25: [function(t, e, i) {
    "use strict";
    var n = t("./getDimensions"),
      r = t("./utils/getBoundingClientRect"),
      o = t("./getScrollX"),
      s = t("./getScrollY");
    e.exports = function(t, e) {
      var i, a, c, l;
      if (e) return i = r(t), a = o(), c = s(), {
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
    "./getDimensions": 24,
    "./getScrollX": 29,
    "./getScrollY": 30,
    "./utils/getBoundingClientRect": 34
  }],
  26: [function(t, e, i) {
    "use strict";
    var n = t("./getDimensions"),
      r = t("./getPixelsInViewport");
    e.exports = function(t, e) {
      var i = r(t, e),
        o = n(t, e).height;
      return i / o
    }
  }, {
    "./getDimensions": 24,
    "./getPixelsInViewport": 27
  }],
  27: [function(t, e, i) {
    "use strict";
    var n = t("./getViewportPosition");
    e.exports = function(t, e) {
      var i, r = document.documentElement.clientHeight,
        o = n(t, e);
      return o.top >= r || o.bottom <= 0 ? 0 : (i = o.bottom - o.top, o.top < 0 && (i += o.top), o.bottom > r && (i -= o.bottom - r), i)
    }
  }, {
    "./getViewportPosition": 31
  }],
  28: [function(t, e, i) {
    "use strict";
    var n = t("./getDimensions"),
      r = t("./utils/getBoundingClientRect");
    e.exports = function(t, e) {
      var i, o, s;
      return e ? (i = r(t), t.offsetParent && (o = r(t.offsetParent), i.top -= o.top, i.left -= o.left)) : (s = n(t, e), i = {
        top: t.offsetTop,
        left: t.offsetLeft,
        width: s.width,
        height: s.height
      }), {
        top: i.top,
        right: i.left + i.width,
        bottom: i.top + i.height,
        left: i.left
      }
    }
  }, {
    "./getDimensions": 24,
    "./utils/getBoundingClientRect": 34
  }],
  29: [function(t, e, i) {
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
  30: [function(t, e, i) {
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
  31: [function(t, e, i) {
    "use strict";
    var n = t("./getPagePosition"),
      r = t("./utils/getBoundingClientRect"),
      o = t("./getScrollX"),
      s = t("./getScrollY");
    e.exports = function(t, e) {
      var i, a, c;
      return e ? (i = r(t), {
        top: i.top,
        right: i.right,
        bottom: i.bottom,
        left: i.left
      }) : (i = n(t), a = o(), c = s(), {
        top: i.top - c,
        right: i.right - a,
        bottom: i.bottom - c,
        left: i.left - a
      })
    }
  }, {
    "./getPagePosition": 25,
    "./getScrollX": 29,
    "./getScrollY": 30,
    "./utils/getBoundingClientRect": 34
  }],
  32: [function(t, e, i) {
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
    "./getContentDimensions": 23,
    "./getDimensions": 24,
    "./getPagePosition": 25,
    "./getPercentInViewport": 26,
    "./getPixelsInViewport": 27,
    "./getPosition": 28,
    "./getScrollX": 29,
    "./getScrollY": 30,
    "./getViewportPosition": 31,
    "./isInViewport": 33
  }],
  33: [function(t, e, i) {
    "use strict";
    var n = t("./getPixelsInViewport"),
      r = t("./getPercentInViewport");
    e.exports = function(t, e, i) {
      var o;
      return i = i || 0, "string" == typeof i && "px" === i.slice(-2) ? (i = parseInt(i, 10), o = n(t, e)) : o = r(t, e), o > 0 && o >= i
    }
  }, {
    "./getPercentInViewport": 26,
    "./getPixelsInViewport": 27
  }],
  34: [function(t, e, i) {
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
  35: [function(t, e, i) {
    "use strict";
    e.exports = 8
  }, {}],
  36: [function(t, e, i) {
    "use strict";
    e.exports = 11
  }, {}],
  37: [function(t, e, i) {
    "use strict";
    e.exports = 9
  }, {}],
  38: [function(t, e, i) {
    "use strict";
    e.exports = 1
  }, {}],
  39: [function(t, e, i) {
    "use strict";
    e.exports = 3
  }, {}],
  40: [function(t, e, i) {
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
    "./ELEMENT_NODE": 38,
    "./internal/isNodeType": 41,
    "@marcom/ac-polyfills/Array/prototype.filter": void 0,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0
  }],
  41: [function(t, e, i) {
    "use strict";
    var n = t("../isNode");
    e.exports = function(t, e) {
      return !!n(t) && ("number" == typeof e ? t.nodeType === e : e.indexOf(t.nodeType) !== -1)
    }
  }, {
    "../isNode": 45
  }],
  42: [function(t, e, i) {
    "use strict";
    var n = t("./isNodeType"),
      r = t("../COMMENT_NODE"),
      o = t("../DOCUMENT_FRAGMENT_NODE"),
      s = t("../ELEMENT_NODE"),
      a = t("../TEXT_NODE"),
      c = [s, a, r, o],
      l = " must be an Element, TextNode, Comment, or Document Fragment",
      u = [s, a, r],
      h = " must be an Element, TextNode, or Comment",
      d = [s, o],
      m = " must be an Element, or Document Fragment",
      p = " must have a parentNode";
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
        if (i = i || "target", !t.parentNode) throw new TypeError(e + ": " + i + p)
      }
    }
  }, {
    "../COMMENT_NODE": 35,
    "../DOCUMENT_FRAGMENT_NODE": 36,
    "../ELEMENT_NODE": 38,
    "../TEXT_NODE": 39,
    "./isNodeType": 41
  }],
  43: [function(t, e, i) {
    "use strict";
    var n = t("./internal/isNodeType"),
      r = t("./DOCUMENT_FRAGMENT_NODE");
    e.exports = function(t) {
      return n(t, r)
    }
  }, {
    "./DOCUMENT_FRAGMENT_NODE": 36,
    "./internal/isNodeType": 41
  }],
  44: [function(t, e, i) {
    "use strict";
    var n = t("./internal/isNodeType"),
      r = t("./ELEMENT_NODE");
    e.exports = function(t) {
      return n(t, r)
    }
  }, {
    "./ELEMENT_NODE": 38,
    "./internal/isNodeType": 41
  }],
  45: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return !(!t || !t.nodeType)
    }
  }, {}],
  46: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate");
    e.exports = function(t) {
      return n.childNode(t, !0, "remove"), t.parentNode ? t.parentNode.removeChild(t) : t
    }
  }, {
    "./internal/validate": 42
  }],
  47: [function(t, e, i) {
    "use strict";
    e.exports = {
      ancestor: t("./ancestor"),
      ancestors: t("./ancestors"),
      children: t("./children"),
      filterBySelector: t("./filterBySelector"),
      firstChild: t("./firstChild"),
      lastChild: t("./lastChild"),
      matchesSelector: t("./matchesSelector"),
      nextSibling: t("./nextSibling"),
      nextSiblings: t("./nextSiblings"),
      previousSibling: t("./previousSibling"),
      previousSiblings: t("./previousSiblings"),
      querySelector: t("./querySelector"),
      querySelectorAll: t("./querySelectorAll"),
      siblings: t("./siblings")
    }
  }, {
    "./ancestor": 48,
    "./ancestors": 49,
    "./children": 50,
    "./filterBySelector": 51,
    "./firstChild": 52,
    "./lastChild": 55,
    "./matchesSelector": 56,
    "./nextSibling": 57,
    "./nextSiblings": 58,
    "./previousSibling": 59,
    "./previousSiblings": 60,
    "./querySelector": 61,
    "./querySelectorAll": 62,
    "./siblings": 66
  }],
  48: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-nodes/isElement"),
      r = t("./matchesSelector"),
      o = t("./internal/validate");
    e.exports = function(t, e, i) {
      if (o.childNode(t, !0, "ancestors"), o.selector(e, !1, "ancestors"), i && n(t) && (!e || r(t, e))) return t;
      if (t !== document.body)
        for (;
          (t = t.parentNode) && n(t);) {
          if (!e || r(t, e)) return t;
          if (t === document.body) break
        }
      return null
    }
  }, {
    "./internal/validate": 54,
    "./matchesSelector": 56,
    "@marcom/ac-dom-nodes/isElement": 44
  }],
  49: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-nodes/isElement"),
      r = t("./matchesSelector"),
      o = t("./internal/validate");
    e.exports = function(t, e, i) {
      var s = [];
      if (o.childNode(t, !0, "ancestors"), o.selector(e, !1, "ancestors"), i && n(t) && (!e || r(t, e)) && s.push(t), t !== document.body)
        for (;
          (t = t.parentNode) && n(t) && (e && !r(t, e) || s.push(t), t !== document.body););
      return s
    }
  }, {
    "./internal/validate": 54,
    "./matchesSelector": 56,
    "@marcom/ac-dom-nodes/isElement": 44
  }],
  50: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-nodes/filterByNodeType"),
      r = t("./filterBySelector"),
      o = t("./internal/validate");
    e.exports = function(t, e) {
      var i;
      return o.parentNode(t, !0, "children"), o.selector(e, !1, "children"), i = t.children || t.childNodes, i = n(i), e && (i = r(i, e)), i
    }
  }, {
    "./filterBySelector": 51,
    "./internal/validate": 54,
    "@marcom/ac-dom-nodes/filterByNodeType": 40
  }],
  51: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.slice"), t("@marcom/ac-polyfills/Array/prototype.filter");
    var n = t("./matchesSelector"),
      r = t("./internal/validate");
    e.exports = function(t, e) {
      return r.selector(e, !0, "filterBySelector"), t = Array.prototype.slice.call(t), t.filter(function(t) {
        return n(t, e)
      })
    }
  }, {
    "./internal/validate": 54,
    "./matchesSelector": 56,
    "@marcom/ac-polyfills/Array/prototype.filter": void 0,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0
  }],
  52: [function(t, e, i) {
    "use strict";
    var n = t("./children"),
      r = t("./internal/validate");
    e.exports = function(t, e) {
      var i;
      return r.parentNode(t, !0, "firstChild"), r.selector(e, !1, "firstChild"), t.firstElementChild && !e ? t.firstElementChild : (i = n(t, e), i.length ? i[0] : null)
    }
  }, {
    "./children": 50,
    "./internal/validate": 54
  }],
  53: [function(t, e, i) {
    "use strict";
    e.exports = window.Element ? function(t) {
      return t.matches || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector
    }(Element.prototype) : null
  }, {}],
  54: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.indexOf");
    var n = t("@marcom/ac-dom-nodes/isNode"),
      r = t("@marcom/ac-dom-nodes/COMMENT_NODE"),
      o = t("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE"),
      s = t("@marcom/ac-dom-nodes/DOCUMENT_NODE"),
      a = t("@marcom/ac-dom-nodes/ELEMENT_NODE"),
      c = t("@marcom/ac-dom-nodes/TEXT_NODE"),
      l = function(t, e) {
        return !!n(t) && ("number" == typeof e ? t.nodeType === e : e.indexOf(t.nodeType) !== -1)
      },
      u = [a, s, o],
      h = " must be an Element, Document, or Document Fragment",
      d = [a, c, r],
      m = " must be an Element, TextNode, or Comment",
      p = " must be a string";
    e.exports = {
      parentNode: function(t, e, i, n) {
        if (n = n || "node", (t || e) && !l(t, u)) throw new TypeError(i + ": " + n + h)
      },
      childNode: function(t, e, i, n) {
        if (n = n || "node", (t || e) && !l(t, d)) throw new TypeError(i + ": " + n + m)
      },
      selector: function(t, e, i, n) {
        if (n = n || "selector", (t || e) && "string" != typeof t) throw new TypeError(i + ": " + n + p)
      }
    }
  }, {
    "@marcom/ac-dom-nodes/COMMENT_NODE": 35,
    "@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE": 36,
    "@marcom/ac-dom-nodes/DOCUMENT_NODE": 37,
    "@marcom/ac-dom-nodes/ELEMENT_NODE": 38,
    "@marcom/ac-dom-nodes/TEXT_NODE": 39,
    "@marcom/ac-dom-nodes/isNode": 45,
    "@marcom/ac-polyfills/Array/prototype.indexOf": void 0
  }],
  55: [function(t, e, i) {
    "use strict";
    var n = t("./children"),
      r = t("./internal/validate");
    e.exports = function(t, e) {
      var i;
      return r.parentNode(t, !0, "lastChild"), r.selector(e, !1, "lastChild"), t.lastElementChild && !e ? t.lastElementChild : (i = n(t, e), i.length ? i[i.length - 1] : null)
    }
  }, {
    "./children": 50,
    "./internal/validate": 54
  }],
  56: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-nodes/isElement"),
      r = t("./internal/validate"),
      o = t("./internal/nativeMatches"),
      s = t("./shims/matchesSelector");
    e.exports = function(t, e) {
      return r.selector(e, !0, "matchesSelector"), !!n(t) && (o ? o.call(t, e) : s(t, e))
    }
  }, {
    "./internal/nativeMatches": 53,
    "./internal/validate": 54,
    "./shims/matchesSelector": 63,
    "@marcom/ac-dom-nodes/isElement": 44
  }],
  57: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-nodes/isElement"),
      r = t("./matchesSelector"),
      o = t("./internal/validate");
    e.exports = function(t, e) {
      if (o.childNode(t, !0, "nextSibling"), o.selector(e, !1, "nextSibling"), t.nextElementSibling && !e) return t.nextElementSibling;
      for (; t = t.nextSibling;)
        if (n(t) && (!e || r(t, e))) return t;
      return null
    }
  }, {
    "./internal/validate": 54,
    "./matchesSelector": 56,
    "@marcom/ac-dom-nodes/isElement": 44
  }],
  58: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-nodes/isElement"),
      r = t("./matchesSelector"),
      o = t("./internal/validate");
    e.exports = function(t, e) {
      var i = [];
      for (o.childNode(t, !0, "nextSiblings"), o.selector(e, !1, "nextSiblings"); t = t.nextSibling;) n(t) && (e && !r(t, e) || i.push(t));
      return i
    }
  }, {
    "./internal/validate": 54,
    "./matchesSelector": 56,
    "@marcom/ac-dom-nodes/isElement": 44
  }],
  59: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-nodes/isElement"),
      r = t("./matchesSelector"),
      o = t("./internal/validate");
    e.exports = function(t, e) {
      if (o.childNode(t, !0, "previousSibling"), o.selector(e, !1, "previousSibling"), t.previousElementSibling && !e) return t.previousElementSibling;
      for (; t = t.previousSibling;)
        if (n(t) && (!e || r(t, e))) return t;
      return null
    }
  }, {
    "./internal/validate": 54,
    "./matchesSelector": 56,
    "@marcom/ac-dom-nodes/isElement": 44
  }],
  60: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-nodes/isElement"),
      r = t("./matchesSelector"),
      o = t("./internal/validate");
    e.exports = function(t, e) {
      var i = [];
      for (o.childNode(t, !0, "previousSiblings"), o.selector(e, !1, "previousSiblings"); t = t.previousSibling;) n(t) && (e && !r(t, e) || i.push(t));
      return i.reverse()
    }
  }, {
    "./internal/validate": 54,
    "./matchesSelector": 56,
    "@marcom/ac-dom-nodes/isElement": 44
  }],
  61: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate"),
      r = t("./shims/querySelector"),
      o = "querySelector" in document;
    e.exports = function(t, e) {
      return e = e || document, n.parentNode(e, !0, "querySelector", "context"), n.selector(t, !0, "querySelector"), o ? e.querySelector(t) : r(t, e)
    }
  }, {
    "./internal/validate": 54,
    "./shims/querySelector": 64
  }],
  62: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.slice");
    var n = t("./internal/validate"),
      r = t("./shims/querySelectorAll"),
      o = "querySelectorAll" in document;
    e.exports = function(t, e) {
      return e = e || document, n.parentNode(e, !0, "querySelectorAll", "context"), n.selector(t, !0, "querySelectorAll"), o ? Array.prototype.slice.call(e.querySelectorAll(t)) : r(t, e)
    }
  }, {
    "./internal/validate": 54,
    "./shims/querySelectorAll": 65,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0
  }],
  63: [function(t, e, i) {
    "use strict";
    var n = t("../querySelectorAll");
    e.exports = function(t, e) {
      var i, r = t.parentNode || document,
        o = n(e, r);
      for (i = 0; i < o.length; i++)
        if (o[i] === t) return !0;
      return !1
    }
  }, {
    "../querySelectorAll": 62
  }],
  64: [function(t, e, i) {
    "use strict";
    var n = t("./querySelectorAll");
    e.exports = function(t, e) {
      var i = n(t, e);
      return i.length ? i[0] : null
    }
  }, {
    "./querySelectorAll": 65
  }],
  65: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.indexOf");
    var n = t("@marcom/ac-dom-nodes/isElement"),
      r = t("@marcom/ac-dom-nodes/isDocumentFragment"),
      o = t("@marcom/ac-dom-nodes/remove"),
      s = "_ac_qsa_",
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
        l = s + (Math.random() + "").slice(-6),
        u = [];
      for (e = e || document, document[l] = [], r(e) ? e.appendChild(n) : document.documentElement.firstChild.appendChild(n), n.styleSheet.cssText = "*{display:recalc;}" + t + '{ac-qsa:expression(document["' + l + '"] && document["' + l + '"].push(this));}', c(e); document[l].length;) i = document[l].shift(), i.style.removeAttribute("ac-qsa"), u.indexOf(i) === -1 && a(i, e) && u.push(i);
      return document[l] = null, o(n), c(e), u
    }
  }, {
    "@marcom/ac-dom-nodes/isDocumentFragment": 43,
    "@marcom/ac-dom-nodes/isElement": 44,
    "@marcom/ac-dom-nodes/remove": 46,
    "@marcom/ac-polyfills/Array/prototype.indexOf": void 0
  }],
  66: [function(t, e, i) {
    "use strict";
    var n = t("./children"),
      r = t("./internal/validate");
    e.exports = function(t, e) {
      var i = [];
      return r.childNode(t, !0, "siblings"), r.selector(e, !1, "siblings"), t.parentNode && (i = n(t.parentNode, e), i = i.filter(function(e) {
        return e !== t
      })), i
    }
  }, {
    "./children": 50,
    "./internal/validate": 54
  }],
  67: [function(t, e, i) {
    var n = t("./ac-clock/Clock"),
      r = t("./ac-clock/ThrottledClock"),
      o = t("./ac-clock/sharedClockInstance");
    o.Clock = n, o.ThrottledClock = r, e.exports = o
  }, {
    "./ac-clock/Clock": 68,
    "./ac-clock/ThrottledClock": 69,
    "./ac-clock/sharedClockInstance": 70
  }],
  68: [function(t, e, i) {
    "use strict";

    function n() {
      o.call(this), this.lastFrameTime = null, this._animationFrame = null, this._active = !1, this._startTime = null, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._getTime = Date.now || function() {
        return (new Date).getTime()
      }
    }
    t("@marcom/ac-polyfills/Function/prototype.bind"), t("@marcom/ac-polyfills/requestAnimationFrame");
    var r, o = t("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    (new Date).getTime();
    r = n.prototype = new o(null), r.start = function() {
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
    "@marcom/ac-event-emitter-micro": 114,
    "@marcom/ac-polyfills/Function/prototype.bind": void 0,
    "@marcom/ac-polyfills/requestAnimationFrame": void 0
  }],
  69: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      null !== t && (s.call(this), e = e || {}, this._fps = t || null, this._clock = e.clock || o, this._lastThrottledTime = null, this._clockEvent = null, this._boundOnClockDraw = this._onClockDraw.bind(this), this._boundOnClockUpdate = this._onClockUpdate.bind(this), this._clock.on("update", this._boundOnClockUpdate))
    }
    t("@marcom/ac-polyfills/requestAnimationFrame");
    var r, o = t("./sharedClockInstance"),
      s = t("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    r = n.prototype = new s(null), r.setFps = function(t) {
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
    "./sharedClockInstance": 70,
    "@marcom/ac-event-emitter-micro": 114,
    "@marcom/ac-polyfills/requestAnimationFrame": void 0
  }],
  70: [function(t, e, i) {
    "use strict";
    var n = t("./Clock");
    e.exports = new n
  }, {
    "./Clock": 68
  }],
  71: [function(t, e, i) {
    "use strict";
    e.exports = {
      Clip: t("./ac-clip/Clip")
    }
  }, {
    "./ac-clip/Clip": 72
  }],
  72: [function(t, e, i) {
    "use strict";

    function n(t, e, i, r) {
      r = r || {}, this._options = r, this._isYoyo = r.yoyo, this._direction = 1, this._timeScale = 1, this._loop = r.loop || 0, this._loopCount = 0, this._target = t, this.duration(e), this._delay = 1e3 * (r.delay || 0), this._remainingDelay = this._delay, this._progress = 0, this._clock = r.clock || s, this._playing = !1, this._getTime = Date.now || function() {
        return (new Date).getTime()
      }, this._propsTo = i || {}, this._propsFrom = r.propsFrom || {}, this._onStart = r.onStart || null, this._onUpdate = r.onUpdate || null, this._onDraw = r.onDraw || null, this._onComplete = r.onComplete || null;
      var u = r.ease || l;
      this._ease = "function" == typeof u ? new a(u) : o(u), this._start = this._start.bind(this), this._update = this._update.bind(this), this._draw = this._draw.bind(this), this._isPrepared = !1, n._add(this), c.call(this)
    }
    t("@marcom/ac-polyfills/Array/isArray");
    var r = t("@marcom/ac-object/create"),
      o = t("@marcom/ac-easing").createPredefined,
      s = t("@marcom/ac-clock"),
      a = t("@marcom/ac-easing").Ease,
      c = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      l = "ease",
      u = n.prototype = r(c.prototype);
    n.COMPLETE = "complete", n.PAUSE = "pause", n.PLAY = "play", u.play = function() {
      return this._playing || (this._playing = !0, 0 === this._delay || 0 === this._remainingDelay ? this._start() : (this._isPrepared || (this._setDiff(), this._updateProps()), this._startTimeout = setTimeout(this._start, this._remainingDelay / this._timeScale), this._delayStart = this._getTime())), this
    }, u.pause = function() {
      return this._playing && (this._startTimeout && (this._remainingDelay = this._getTime() - this._delayStart, clearTimeout(this._startTimeout)), this._stop(), this.trigger(n.PAUSE, this)), this
    }, u.destroy = function() {
      return this.pause(), this._options = null, this._target = null, this._storeTarget = null, this._ease = null, this._clock = null, this._propsTo = null, this._propsFrom = null, this._storePropsTo = null, this._storePropsFrom = null, this._propsDiff = null, this._propsEase = null, this._onStart = null, this._onUpdate = null, this._onDraw = null, this._onComplete = null, n._remove(this), c.prototype.destroy.call(this), this
    }, u.reset = function() {
      if (this._isPrepared) return this._stop(), this._resetLoop(this._target, this._storeTarget), this._direction = 1, this._loop = this._options.loop || 0, this._loopCount = 0, this._propsFrom = this._storePropsFrom, this._propsTo = this._storePropsTo, this._progress = 0, this._setStartTime(), this._onUpdate && this._onUpdate.call(this, this), this._onDraw && this._onDraw.call(this, this), this
    }, u.playing = function() {
      return this._playing
    }, u.target = function() {
      return this._target
    }, u.duration = function(t) {
      return void 0 !== t && (this._duration = t, this._durationMs = 1e3 * t / this._timeScale, this._playing && this._setStartTime()), this._duration
    }, u.timeScale = function(t) {
      return void 0 !== t && (this._timeScale = t, this.duration(this._duration)), this._timeScale
    }, u.currentTime = function(t) {
      return void 0 !== t ? this.progress(t / this._duration) * this._duration : this.progress() * this._duration
    }, u.progress = function(t) {
      return void 0 !== t && (this._progress = Math.min(1, Math.max(0, t)), this._setStartTime(), this._isPrepared || this._setDiff(), this._playing && 1 === t ? (this._completeProps(), this._onUpdate && this._onUpdate.call(this, this), this._onDraw && this._onDraw.call(this, this), this._complete()) : (this._updateProps(), this._onUpdate && this._onUpdate.call(this, this), this._onDraw && this._onDraw.call(this, this))), this._progress
    }, u._resetLoop = function(t, e) {
      var i;
      for (i in e) e.hasOwnProperty(i) && null !== e[i] && ("object" == typeof e[i] ? this._resetLoop(t[i], e[i]) : t[i] = e[i])
    }, u._cloneObjects = function() {
      var t = {},
        e = {},
        i = {};
      return this._cloneObjectsLoop(this._target, this._propsTo, this._propsFrom, t, e, i), {
        target: t,
        propsTo: e,
        propsFrom: i
      }
    }, u._cloneObjectsLoop = function(t, e, i, n, r, o) {
      var s, a;
      for (a in i) i.hasOwnProperty(a) && void 0 === e[a] && void 0 !== t[a] && (n[a] = t[a], r[a] = t[a], o[a] = i[a]);
      for (a in e) t.hasOwnProperty(a) && (s = typeof t[a], null !== t[a] && "object" === s ? (Array.isArray(t[a]) ? (n[a] = [], r[a] = [], o[a] = []) : (n[a] = {}, r[a] = {}, o[a] = {}), this._cloneObjectsLoop(t[a], e[a] || {}, i[a] || {}, n[a], r[a], o[a])) : null !== e[a] && "number" === s && (n[a] = t[a], r[a] = e[a], i && void 0 !== i[a] && (o[a] = i[a])))
    }, u._prepareProperties = function() {
      if (!this._isPrepared) {
        var t = this._cloneObjects();
        this._storeTarget = t.target, this._propsTo = t.propsTo,
          this._storePropsTo = this._propsTo, this._propsFrom = t.propsFrom, this._storePropsFrom = this._propsFrom, this._isPrepared = !0
      }
    }, u._setStartTime = function() {
      this._startTime = this._getTime() - this.progress() * this._durationMs
    }, u._setDiff = function() {
      this._isPrepared || this._prepareProperties(), this._propsDiff = {}, this._setDiffLoop(this._propsTo, this._propsFrom, this._target, this._propsDiff)
    }, u._setDiffLoop = function(t, e, i, n) {
      var r, o;
      for (o in t) t.hasOwnProperty(o) && (r = typeof t[o], null !== t[o] && "object" === r ? (e[o] = e[o] || {}, n[o] = n[o] || {}, this._setDiffLoop(t[o], e[o], i[o], n[o])) : "number" === r && void 0 !== i[o] ? (void 0 !== e[o] ? i[o] = e[o] : e[o] = i[o], n[o] = t[o] - i[o]) : (t[o] = null, e[o] = null))
    }, u._start = function() {
      this._startTimeout = null, this._remainingDelay = 0, this._setStartTime(), this._clock.on("update", this._update), this._clock.on("draw", this._draw), this._clock.isRunning() || this._clock.start(), this._setDiff(), this._playing = !0, this._running = !0, this._onStart && this._onStart.call(this, this), this.trigger(n.PLAY, this)
    }, u._stop = function() {
      this._playing = !1, this._running = !1, this._clock.off("update", this._update), this._clock.off("draw", this._draw)
    }, u._updateProps = function() {
      var t;
      t = 1 === this._direction ? this._ease.getValue(this._progress) : 1 - this._ease.getValue(1 - this._progress), this._updatePropsLoop(this._propsTo, this._propsFrom, this._target, this._propsDiff, t)
    }, u._updatePropsLoop = function(t, e, i, n, r) {
      var o;
      for (o in t) t.hasOwnProperty(o) && null !== t[o] && ("number" != typeof t[o] ? this._updatePropsLoop(t[o], e[o], i[o], n[o], r) : i[o] = e[o] + n[o] * r)
    }, u._completeProps = function() {
      this._completePropsLoop(this._propsTo, this._target)
    }, u._completePropsLoop = function(t, e) {
      var i;
      for (i in t) t.hasOwnProperty(i) && null !== t[i] && ("number" != typeof t[i] ? this._completePropsLoop(t[i], e[i]) : e[i] = t[i])
    }, u._complete = function() {
      this._isYoyo && (this._loop > 0 && this._loopCount <= this._loop || 0 === this._loop && 0 === this._loopCount) ? (this._propsFrom = 1 === this._direction ? this._storePropsTo : this._storePropsFrom, this._propsTo = 1 === this._direction ? this._storePropsFrom : this._storePropsTo, this._direction *= -1, this._direction === -1 && ++this._loopCount, this.progress(0), this._start()) : this._loopCount < this._loop ? (++this._loopCount, this.progress(0), this._start()) : (this.trigger(n.COMPLETE, this), this._onComplete && this._onComplete.call(this, this), this._options && this._options.destroyOnComplete && this.destroy())
    }, u._update = function(t) {
      this._running && (this._progress = (t.timeNow - this._startTime) / this._durationMs, this._progress >= 1 ? (this._progress = 1, this._running = !1, this._completeProps()) : this._updateProps(), this._onUpdate && this._onUpdate.call(this, this))
    }, u._draw = function(t) {
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
    "@marcom/ac-clock": 67,
    "@marcom/ac-easing": 106,
    "@marcom/ac-event-emitter-micro": 114,
    "@marcom/ac-object/create": 806,
    "@marcom/ac-polyfills/Array/isArray": void 0
  }],
  73: [function(t, e, i) {
    "use strict";
    var n = t("./ac-color/Color");
    n.decimalToHex = t("./ac-color/static/decimalToHex"), n.hexToDecimal = t("./ac-color/static/hexToDecimal"), n.hexToRgb = t("./ac-color/static/hexToRgb"), n.isColor = t("./ac-color/static/isColor"), n.isHex = t("./ac-color/static/isHex"), n.isRgb = t("./ac-color/static/isRgb"), n.isRgba = t("./ac-color/static/isRgba"), n.mixColors = t("./ac-color/static/mixColors"), n.rgbaToArray = t("./ac-color/static/rgbaToArray"), n.rgbToArray = t("./ac-color/static/rgbToArray"), n.rgbToDecimal = t("./ac-color/static/rgbToDecimal"), n.rgbToHex = t("./ac-color/static/rgbToHex"), n.rgbToHsl = t("./ac-color/static/rgbToHsl"), n.rgbToHsv = t("./ac-color/static/rgbToHsv"), n.rgbaToObject = t("./ac-color/static/rgbaToObject"), n.rgbToObject = t("./ac-color/static/rgbToObject"), n.shortToLongHex = t("./ac-color/static/shortToLongHex"), e.exports = {
      Color: n
    }
  }, {
    "./ac-color/Color": 74,
    "./ac-color/static/decimalToHex": 76,
    "./ac-color/static/hexToDecimal": 77,
    "./ac-color/static/hexToRgb": 78,
    "./ac-color/static/isColor": 79,
    "./ac-color/static/isHex": 80,
    "./ac-color/static/isRgb": 81,
    "./ac-color/static/isRgba": 82,
    "./ac-color/static/mixColors": 83,
    "./ac-color/static/rgbToArray": 84,
    "./ac-color/static/rgbToDecimal": 85,
    "./ac-color/static/rgbToHex": 86,
    "./ac-color/static/rgbToHsl": 87,
    "./ac-color/static/rgbToHsv": 88,
    "./ac-color/static/rgbToObject": 89,
    "./ac-color/static/rgbaToArray": 90,
    "./ac-color/static/rgbaToObject": 91,
    "./ac-color/static/shortToLongHex": 92
  }],
  74: [function(t, e, i) {
    "use strict";

    function n(t) {
      if (!s(t) && !r.nameToRgbObject[t]) throw new Error(t + " is not a supported color.");
      this._setColor(t)
    }
    var r = t("./helpers/cssColorNames"),
      o = t("./static/hexToRgb"),
      s = t("./static/isColor"),
      a = t("./static/isHex"),
      c = t("./static/isRgba"),
      l = t("./static/mixColors"),
      u = t("./static/rgbaToArray"),
      h = t("./static/rgbToArray"),
      d = t("./static/rgbToDecimal"),
      m = t("./static/rgbToHex"),
      p = t("./static/rgbaToObject"),
      f = t("./static/rgbToObject"),
      g = t("./static/shortToLongHex"),
      v = n.prototype;
    v._setColor = function(t) {
      if (this._color = {}, a(t)) this._color.hex = g(t), this._color.rgb = {
        color: o(t)
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
    }, v.rgb = function() {
      return this._color.rgb.color
    }, v.rgba = function() {
      if (void 0 === this._color.rgba) {
        var t = this.rgbObject();
        this._color.rgba = {
          color: "rgba(" + t.r + ", " + t.g + ", " + t.b + ", 1)"
        }
      }
      return this._color.rgba.color
    }, v.hex = function() {
      return void 0 === this._color.hex && (this._color.hex = m.apply(this, this.rgbArray())), this._color.hex
    }, v.decimal = function() {
      return void 0 === this._color.decimal && (this._color.decimal = d(this.rgb())), this._color.decimal
    }, v.cssName = function() {
      return r.rgbToName[this.rgb()] || null
    }, v.rgbArray = function() {
      return void 0 === this._color.rgb.array && (this._color.rgb.array = h(this.rgb())), this._color.rgb.array
    }, v.rgbaArray = function() {
      return void 0 === this._color.rgba && this.rgba(), void 0 === this._color.rgba.array && (this._color.rgba.array = u(this.rgba())), this._color.rgba.array
    }, v.rgbObject = function() {
      return void 0 === this._color.rgb.object && (this._color.rgb.object = f(this.rgb())), this._color.rgb.object
    }, v.rgbaObject = function() {
      return void 0 === this._color.rgba && this.rgba(), void 0 === this._color.rgba.object && (this._color.rgba.object = p(this.rgba())), this._color.rgba.object
    }, v.getRed = function() {
      return this.rgbObject().r
    }, v.getGreen = function() {
      return this.rgbObject().g
    }, v.getBlue = function() {
      return this.rgbObject().b
    }, v.getAlpha = function() {
      return void 0 === this._color.rgba ? 1 : this.rgbaObject().a
    }, v.setRed = function(t) {
      return t !== this.getRed() && this._setColor("rgba(" + t + ", " + this.getGreen() + ", " + this.getBlue() + ", " + this.getAlpha() + ")"), this.rgbObject().r
    }, v.setGreen = function(t) {
      return t !== this.getGreen() && this._setColor("rgba(" + this.getRed() + ", " + t + ", " + this.getBlue() + ", " + this.getAlpha() + ")"), this.rgbObject().g
    }, v.setBlue = function(t) {
      return t !== this.getBlue() && this._setColor("rgba(" + this.getRed() + ", " + this.getGreen() + ", " + t + ", " + this.getAlpha() + ")"), this.rgbObject().b
    }, v.setAlpha = function(t) {
      return t !== this.getAlpha() && this._setColor("rgba(" + this.getRed() + ", " + this.getGreen() + ", " + this.getBlue() + ", " + t + ")"), this.rgbaObject().a
    }, v.mix = function(t, e) {
      var i = f(l(this.rgb(), t, e));
      return this._setColor("rgba(" + i.r + ", " + i.g + ", " + i.b + ", " + this.getAlpha() + ")"), this.rgb()
    }, v.clone = function() {
      return new n(this.rgb())
    }, e.exports = n
  }, {
    "./helpers/cssColorNames": 75,
    "./static/hexToRgb": 78,
    "./static/isColor": 79,
    "./static/isHex": 80,
    "./static/isRgba": 82,
    "./static/mixColors": 83,
    "./static/rgbToArray": 84,
    "./static/rgbToDecimal": 85,
    "./static/rgbToHex": 86,
    "./static/rgbToObject": 89,
    "./static/rgbaToArray": 90,
    "./static/rgbaToObject": 91,
    "./static/shortToLongHex": 92
  }],
  75: [function(t, e, i) {
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
  76: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return "#" + t.toString(16)
    }
  }, {}],
  77: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return parseInt(t.substr(1), 16)
    }
  }, {}],
  78: [function(t, e, i) {
    "use strict";
    var n = t("./shortToLongHex");
    e.exports = function(t) {
      t = n(t);
      var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
      return e ? "rgb(" + parseInt(e[1], 16) + ", " + parseInt(e[2], 16) + ", " + parseInt(e[3], 16) + ")" : null
    }
  }, {
    "./shortToLongHex": 92
  }],
  79: [function(t, e, i) {
    "use strict";
    var n = t("./isRgb"),
      r = t("./isRgba"),
      o = t("./isHex");
    e.exports = function(t) {
      return o(t) || n(t) || r(t)
    }
  }, {
    "./isHex": 80,
    "./isRgb": 81,
    "./isRgba": 82
  }],
  80: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
      return e.test(t)
    }
  }, {}],
  81: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e = /^rgb\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*\)$/;
      return null !== e.exec(t)
    }
  }, {}],
  82: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e = /^rgba\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*(0(\.\d+)?|1(\.0+)?)\s*\)$/;
      return null !== e.exec(t)
    }
  }, {}],
  83: [function(t, e, i) {
    "use strict";
    var n = t("./isHex"),
      r = t("./hexToRgb"),
      o = t("./rgbToObject");
    e.exports = function(t, e, i) {
      t = n(t) ? r(t) : t, e = n(e) ? r(e) : e, t = o(t), e = o(e);
      var s = t.r + (e.r - t.r) * i,
        a = t.g + (e.g - t.g) * i,
        c = t.b + (e.b - t.b) * i;
      return "rgb(" + Math.round(s) + ", " + Math.round(a) + ", " + Math.round(c) + ")"
    }
  }, {
    "./hexToRgb": 78,
    "./isHex": 80,
    "./rgbToObject": 89
  }],
  84: [function(t, e, i) {
    "use strict";
    var n = t("./rgbToObject");
    e.exports = function(t) {
      var e = n(t);
      return [e.r, e.g, e.b]
    }
  }, {
    "./rgbToObject": 89
  }],
  85: [function(t, e, i) {
    "use strict";
    var n = t("./hexToDecimal"),
      r = t("./rgbToArray"),
      o = t("./rgbToHex");
    e.exports = function(t) {
      var e = o.apply(this, r(t));
      return n(e)
    }
  }, {
    "./hexToDecimal": 77,
    "./rgbToArray": 84,
    "./rgbToHex": 86
  }],
  86: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i) {
      return "#" + ((1 << 24) + (t << 16) + (e << 8) + i).toString(16).slice(1)
    }
  }, {}],
  87: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i) {
      if (3 !== arguments.length) return !1;
      t /= 255, e /= 255, i /= 255;
      var n, r, o = Math.max(t, e, i),
        s = Math.min(t, e, i),
        a = o + s,
        c = o - s,
        l = a / 2;
      if (o === s) n = r = 0;
      else {
        switch (r = l > .5 ? c / (2 - o - s) : c / a, o) {
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
  88: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i) {
      if (3 !== arguments.length) return !1;
      var n, r, o = t / 255,
        s = e / 255,
        a = i / 255,
        c = Math.max(o, s, a),
        l = Math.min(o, s, a),
        u = c,
        h = c - l;
      if (r = 0 === c ? 0 : h / c, c === l) n = 0;
      else {
        switch (c) {
          case o:
            n = (s - a) / h + (s < a ? 6 : 0);
            break;
          case s:
            n = (a - o) / h + 2;
            break;
          case a:
            n = (o - s) / h + 4
        }
        n /= 6
      }
      return [Math.round(360 * n), Math.round(100 * r), Math.round(100 * u)]
    }
  }, {}],
  89: [function(t, e, i) {
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
  90: [function(t, e, i) {
    "use strict";
    var n = t("./rgbaToObject");
    e.exports = function(t) {
      var e = n(t);
      return [e.r, e.g, e.b, e.a]
    }
  }, {
    "./rgbaToObject": 91
  }],
  91: [function(t, e, i) {
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
  92: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      return t = t.replace(e, function(t, e, i, n) {
        return "#" + e + e + i + i + n + n
      })
    }
  }, {}],
  93: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-prefixer/getStyleProperty"),
      r = t("@marcom/ac-prefixer/stripPrefixes");
    e.exports = function() {
      var t, e, i, o, s = Array.prototype.slice.call(arguments),
        a = s.shift(s),
        c = window.getComputedStyle(a),
        l = {};
      for ("string" != typeof s[0] && (s = s[0]), o = 0; o < s.length; o++) t = s[o], e = n(t), e ? (t = r(e), i = c[e], i && "auto" !== i || (i = null), i && (i = r(i))) : i = null, l[t] = i;
      return l
    }
  }, {
    "@marcom/ac-prefixer/getStyleProperty": 96,
    "@marcom/ac-prefixer/stripPrefixes": 102
  }],
  94: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e, i, n;
      if (!t && 0 !== t) return "";
      if (Array.isArray(t)) return t + "";
      if ("object" == typeof t) {
        for (e = "", i = Object.keys(t), n = 0; n < i.length; n++) e += i[n] + "(" + t[i[n]] + ") ";
        return e.trim()
      }
      return t
    }
  }, {}],
  95: [function(t, e, i) {
    "use strict";
    var n = t("./shared/stylePropertyCache"),
      r = t("./getStyleProperty"),
      o = t("./getStyleValue");
    e.exports = function(t, e) {
      var i;
      if (t = r(t), !t) return !1;
      if (i = n[t].css, "undefined" != typeof e) {
        if (e = o(t, e), e === !1) return !1;
        i += ":" + e + ";"
      }
      return i
    }
  }, {
    "./getStyleProperty": 96,
    "./getStyleValue": 97,
    "./shared/stylePropertyCache": 100
  }],
  96: [function(t, e, i) {
    "use strict";
    var n = t("./shared/stylePropertyCache"),
      r = t("./shared/getStyleTestElement"),
      o = t("./utils/toCSS"),
      s = t("./utils/toDOM"),
      a = t("./shared/prefixHelper"),
      c = function(t, e) {
        var i = o(t),
          r = e !== !1 && o(e);
        return n[t] = n[e] = n[i] = n[r] = {
          dom: e,
          css: r
        }, e
      };
    e.exports = function(t) {
      var e, i, o, l;
      if (t += "", t in n) return n[t].dom;
      for (o = r(), t = s(t), i = t.charAt(0).toUpperCase() + t.substring(1), e = "filter" === t ? ["WebkitFilter", "filter"] : (t + " " + a.dom.join(i + " ") + i).split(" "), l = 0; l < e.length; l++)
        if ("undefined" != typeof o.style[e[l]]) return 0 !== l && a.reduce(l - 1), c(t, e[l]);
      return c(t, !1)
    }
  }, {
    "./shared/getStyleTestElement": 98,
    "./shared/prefixHelper": 99,
    "./shared/stylePropertyCache": 100,
    "./utils/toCSS": 103,
    "./utils/toDOM": 104
  }],
  97: [function(t, e, i) {
    "use strict";
    var n = t("./getStyleProperty"),
      r = t("./shared/styleValueAvailable"),
      o = t("./shared/prefixHelper"),
      s = t("./shared/stylePropertyCache"),
      a = {},
      c = /(\([^\)]+\))/gi,
      l = /([^ ,;\(]+(\([^\)]+\))?)/gi;
    e.exports = function(t, e) {
      var i;
      return e += "", !!(t = n(t)) && (r(t, e) ? e : (i = s[t].css, e = e.replace(l, function(e) {
        var n, s, l, u;
        if ("#" === e[0] || !isNaN(e[0])) return e;
        if (s = e.replace(c, ""), l = i + ":" + s, l in a) return a[l] === !1 ? "" : e.replace(s, a[l]);
        for (n = o.css.map(function(t) {
            return t + e
          }), n = [e].concat(n), u = 0; u < n.length; u++)
          if (r(t, n[u])) return 0 !== u && o.reduce(u - 1), a[l] = n[u].replace(c, ""), n[u];
        return a[l] = !1, ""
      }), e = e.trim(), "" !== e && e))
    }
  }, {
    "./getStyleProperty": 96,
    "./shared/prefixHelper": 99,
    "./shared/stylePropertyCache": 100,
    "./shared/styleValueAvailable": 101
  }],
  98: [function(t, e, i) {
    "use strict";
    var n;
    e.exports = function() {
      return n ? (n.style.cssText = "", n.removeAttribute("style")) : n = document.createElement("_"), n
    }, e.exports.resetElement = function() {
      n = null
    }
  }, {}],
  99: [function(t, e, i) {
    arguments[4][11][0].apply(i, arguments)
  }, {
    dup: 11
  }],
  100: [function(t, e, i) {
    "use strict";
    e.exports = {}
  }, {}],
  101: [function(t, e, i) {
    "use strict";
    var n, r, o = t("./stylePropertyCache"),
      s = t("./getStyleTestElement"),
      a = !1,
      c = function() {
        var t;
        if (!a) {
          a = !0, n = "CSS" in window && "supports" in window.CSS, r = !1, t = s();
          try {
            t.style.width = "invalid"
          } catch (e) {
            r = !0
          }
        }
      };
    e.exports = function(t, e) {
      var i, a;
      if (c(), n) return t = o[t].css, CSS.supports(t, e);
      if (a = s(), i = a.style[t], r) try {
        a.style[t] = e
      } catch (l) {
        return !1
      } else a.style[t] = e;
      return a.style[t] && a.style[t] !== i
    }, e.exports.resetFlags = function() {
      a = !1
    }
  }, {
    "./getStyleTestElement": 98,
    "./stylePropertyCache": 100
  }],
  102: [function(t, e, i) {
    "use strict";
    var n = /(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
    e.exports = function(t) {
      return t = String.prototype.replace.call(t, n, ""), t.charAt(0).toLowerCase() + t.substring(1)
    }
  }, {}],
  103: [function(t, e, i) {
    "use strict";
    var n = /^(webkit|moz|ms)/gi;
    e.exports = function(t) {
      return "cssfloat" === t.toLowerCase() ? "float" : (n.test(t) && (t = "-" + t), t.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase())
    }
  }, {}],
  104: [function(t, e, i) {
    "use strict";
    var n = /-([a-z])/g;
    e.exports = function(t) {
      return "float" === t.toLowerCase() ? "cssFloat" : (t = t.replace(n, function(t, e) {
        return e.toUpperCase()
      }), "Ms" === t.substr(0, 2) && (t = "ms" + t.substring(2)), t)
    }
  }, {}],
  105: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-prefixer/getStyleCSS"),
      r = t("@marcom/ac-prefixer/getStyleProperty"),
      o = t("./internal/normalizeValue");
    e.exports = function(t, e) {
      var i, s, a, c, l, u = "";
      if ("object" != typeof e) throw new TypeError("setStyle: styles must be an Object");
      for (s in e) c = o(e[s]), c || 0 === c ? (i = n(s, c), i !== !1 && (u += " " + i)) : (a = r(s), "removeAttribute" in t.style ? t.style.removeAttribute(a) : t.style[a] = "");
      return u.length && (l = t.style.cssText, ";" !== l.charAt(l.length - 1) && (l += ";"), l += u, t.style.cssText = l), t
    }
  }, {
    "./internal/normalizeValue": 94,
    "@marcom/ac-prefixer/getStyleCSS": 95,
    "@marcom/ac-prefixer/getStyleProperty": 96
  }],
  106: [function(t, e, i) {
    "use strict";
    e.exports = {
      createBezier: t("./ac-easing/createBezier"),
      createPredefined: t("./ac-easing/createPredefined"),
      createStep: t("./ac-easing/createStep"),
      Ease: t("./ac-easing/Ease")
    }
  }, {
    "./ac-easing/Ease": 107,
    "./ac-easing/createBezier": 108,
    "./ac-easing/createPredefined": 109,
    "./ac-easing/createStep": 110
  }],
  107: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if ("function" != typeof t) throw new TypeError(r);
      this.easingFunction = t, this.cssString = e || null
    }
    var r = "Ease expects an easing function.",
      o = n.prototype;
    o.getValue = function(t) {
      return this.easingFunction(t, 0, 1, 1)
    }, e.exports = n
  }, {}],
  108: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.every");
    var n = t("./Ease"),
      r = t("./helpers/KeySpline"),
      o = "Bezier curve expects exactly four (4) numbers. Given: ";
    e.exports = function(t, e, i, s) {
      var a = Array.prototype.slice.call(arguments),
        c = a.every(function(t) {
          return "number" == typeof t
        });
      if (4 !== a.length || !c) throw new TypeError(o + a);
      var l = new r(t, e, i, s),
        u = function(t, e, i, n) {
          return l.get(t / n) * i + e
        },
        h = "cubic-bezier(" + a.join(", ") + ")";
      return new n(u, h)
    }
  }, {
    "./Ease": 107,
    "./helpers/KeySpline": 111,
    "@marcom/ac-polyfills/Array/prototype.every": void 0
  }],
  109: [function(t, e, i) {
    "use strict";
    var n = t("./createStep"),
      r = t("./helpers/cssAliases"),
      o = t("./helpers/easingFunctions"),
      s = t("./Ease"),
      a = 'Easing function "%TYPE%" not recognized among the following: ' + Object.keys(o).join(", ");
    e.exports = function(t) {
      var e;
      if ("step-start" === t) return n(1, "start");
      if ("step-end" === t) return n(1, "end");
      if (e = o[t], !e) throw new Error(a.replace("%TYPE%", t));
      return new s(e, r[t])
    }
  }, {
    "./Ease": 107,
    "./createStep": 110,
    "./helpers/cssAliases": 112,
    "./helpers/easingFunctions": 113
  }],
  110: [function(t, e, i) {
    "use strict";
    var n = t("./Ease"),
      r = "Step function expects a numeric value greater than zero. Given: ",
      o = 'Step function direction must be either "start" or "end" (default). Given: ';
    e.exports = function(t, e) {
      if (e = e || "end", "number" != typeof t || t < 1) throw new TypeError(r + t);
      if ("start" !== e && "end" !== e) throw new TypeError(o + e);
      var i = function(i, n, r, o) {
          var s = r / t,
            a = Math["start" === e ? "floor" : "ceil"](i / o * t);
          return n + s * a
        },
        s = "steps(" + t + ", " + e + ")";
      return new n(i, s)
    }
  }, {
    "./Ease": 107
  }],
  111: [function(t, e, i) {
    function n(t, e, i, n) {
      function r(t, e) {
        return 1 - 3 * e + 3 * t
      }

      function o(t, e) {
        return 3 * e - 6 * t
      }

      function s(t) {
        return 3 * t
      }

      function a(t, e, i) {
        return ((r(e, i) * t + o(e, i)) * t + s(e)) * t
      }

      function c(t, e, i) {
        return 3 * r(e, i) * t * t + 2 * o(e, i) * t + s(e)
      }

      function l(e) {
        for (var n = e, r = 0; r < 4; ++r) {
          var o = c(n, t, i);
          if (0 === o) return n;
          var s = a(n, t, i) - e;
          n -= s / o
        }
        return n
      }
      this.get = function(r) {
        return t === e && i === n ? r : a(l(r), e, n)
      }
    }
    e.exports = n
  }, {}],
  112: [function(t, e, i) {
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
  113: [function(t, e, i) {
    "use strict";
    var n = t("../createBezier"),
      r = n(.25, .1, .25, 1).easingFunction,
      o = n(.42, 0, 1, 1).easingFunction,
      s = n(0, 0, .58, 1).easingFunction,
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
      p = function(t, e, i, n) {
        return (t /= n / 2) < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e
      },
      f = function(t, e, i, n) {
        return i * (t /= n) * t * t * t + e
      },
      g = function(t, e, i, n) {
        return -i * ((t = t / n - 1) * t * t * t - 1) + e
      },
      v = function(t, e, i, n) {
        return (t /= n / 2) < 1 ? i / 2 * t * t * t * t + e : -i / 2 * ((t -= 2) * t * t * t - 2) + e
      },
      y = function(t, e, i, n) {
        return i * (t /= n) * t * t * t * t + e
      },
      _ = function(t, e, i, n) {
        return i * ((t = t / n - 1) * t * t * t * t + 1) + e
      },
      b = function(t, e, i, n) {
        return (t /= n / 2) < 1 ? i / 2 * t * t * t * t * t + e : i / 2 * ((t -= 2) * t * t * t * t + 2) + e
      },
      T = function(t, e, i, n) {
        return -i * Math.cos(t / n * (Math.PI / 2)) + i + e
      },
      E = function(t, e, i, n) {
        return i * Math.sin(t / n * (Math.PI / 2)) + e
      },
      x = function(t, e, i, n) {
        return -i / 2 * (Math.cos(Math.PI * t / n) - 1) + e
      },
      w = function(t, e, i, n) {
        return 0 === t ? e : i * Math.pow(2, 10 * (t / n - 1)) + e
      },
      S = function(t, e, i, n) {
        return t === n ? e + i : i * (-Math.pow(2, -10 * t / n) + 1) + e
      },
      C = function(t, e, i, n) {
        return 0 === t ? e : t === n ? e + i : (t /= n / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : i / 2 * (-Math.pow(2, -10 * --t) + 2) + e
      },
      k = function(t, e, i, n) {
        return -i * (Math.sqrt(1 - (t /= n) * t) - 1) + e
      },
      A = function(t, e, i, n) {
        return i * Math.sqrt(1 - (t = t / n - 1) * t) + e
      },
      O = function(t, e, i, n) {
        return (t /= n / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + e : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
      },
      P = function(t, e, i, n) {
        var r = 1.70158,
          o = 0,
          s = i;
        return 0 === t ? e : 1 === (t /= n) ? e + i : (o || (o = .3 * n), s < Math.abs(i) ? (s = i, r = o / 4) : r = o / (2 * Math.PI) * Math.asin(i / s), -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - r) * (2 * Math.PI) / o)) + e)
      },
      M = function(t, e, i, n) {
        var r = 1.70158,
          o = 0,
          s = i;
        return 0 === t ? e : 1 === (t /= n) ? e + i : (o || (o = .3 * n), s < Math.abs(i) ? (s = i, r = o / 4) : r = o / (2 * Math.PI) * Math.asin(i / s), s * Math.pow(2, -10 * t) * Math.sin((t * n - r) * (2 * Math.PI) / o) + i + e)
      },
      N = function(t, e, i, n) {
        var r = 1.70158,
          o = 0,
          s = i;
        return 0 === t ? e : 2 === (t /= n / 2) ? e + i : (o || (o = n * (.3 * 1.5)), s < Math.abs(i) ? (s = i, r = o / 4) : r = o / (2 * Math.PI) * Math.asin(i / s), t < 1 ? -.5 * (s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - r) * (2 * Math.PI) / o)) + e : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * n - r) * (2 * Math.PI) / o) * .5 + i + e)
      },
      D = function(t, e, i, n, r) {
        return void 0 === r && (r = 1.70158), i * (t /= n) * t * ((r + 1) * t - r) + e
      },
      L = function(t, e, i, n, r) {
        return void 0 === r && (r = 1.70158), i * ((t = t / n - 1) * t * ((r + 1) * t + r) + 1) + e
      },
      R = function(t, e, i, n, r) {
        return void 0 === r && (r = 1.70158), (t /= n / 2) < 1 ? i / 2 * (t * t * (((r *= 1.525) + 1) * t - r)) + e : i / 2 * ((t -= 2) * t * (((r *= 1.525) + 1) * t + r) + 2) + e
      },
      j = function(t, e, i, n) {
        return (t /= n) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
      },
      F = function(t, e, i, n) {
        return i - j(n - t, 0, i, n) + e
      },
      V = function(t, e, i, n) {
        return t < n / 2 ? .5 * F(2 * t, 0, i, n) + e : .5 * j(2 * t - n, 0, i, n) + .5 * i + e
      };
    e.exports = {
      linear: c,
      ease: r,
      easeIn: o,
      "ease-in": o,
      easeOut: s,
      "ease-out": s,
      easeInOut: a,
      "ease-in-out": a,
      easeInCubic: d,
      "ease-in-cubic": d,
      easeOutCubic: m,
      "ease-out-cubic": m,
      easeInOutCubic: p,
      "ease-in-out-cubic": p,
      easeInQuad: l,
      "ease-in-quad": l,
      easeOutQuad: u,
      "ease-out-quad": u,
      easeInOutQuad: h,
      "ease-in-out-quad": h,
      easeInQuart: f,
      "ease-in-quart": f,
      easeOutQuart: g,
      "ease-out-quart": g,
      easeInOutQuart: v,
      "ease-in-out-quart": v,
      easeInQuint: y,
      "ease-in-quint": y,
      easeOutQuint: _,
      "ease-out-quint": _,
      easeInOutQuint: b,
      "ease-in-out-quint": b,
      easeInSine: T,
      "ease-in-sine": T,
      easeOutSine: E,
      "ease-out-sine": E,
      easeInOutSine: x,
      "ease-in-out-sine": x,
      easeInExpo: w,
      "ease-in-expo": w,
      easeOutExpo: S,
      "ease-out-expo": S,
      easeInOutExpo: C,
      "ease-in-out-expo": C,
      easeInCirc: k,
      "ease-in-circ": k,
      easeOutCirc: A,
      "ease-out-circ": A,
      easeInOutCirc: O,
      "ease-in-out-circ": O,
      easeInBack: D,
      "ease-in-back": D,
      easeOutBack: L,
      "ease-out-back": L,
      easeInOutBack: R,
      "ease-in-out-back": R,
      easeInElastic: P,
      "ease-in-elastic": P,
      easeOutElastic: M,
      "ease-out-elastic": M,
      easeInOutElastic: N,
      "ease-in-out-elastic": N,
      easeInBounce: F,
      "ease-in-bounce": F,
      easeOutBounce: j,
      "ease-out-bounce": j,
      easeInOutBounce: V,
      "ease-in-out-bounce": V
    }
  }, {
    "../createBezier": 108
  }],
  114: [function(t, e, i) {
    "use strict";
    e.exports = {
      EventEmitterMicro: t("./ac-event-emitter-micro/EventEmitterMicro")
    }
  }, {
    "./ac-event-emitter-micro/EventEmitterMicro": 115
  }],
  115: [function(t, e, i) {
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
  116: [function(t, e, i) {
    "use strict";
    e.exports = {
      PageVisibilityManager: t("./ac-page-visibility/PageVisibilityManager")
    }
  }, {
    "./ac-page-visibility/PageVisibilityManager": 117
  }],
  117: [function(t, e, i) {
    "use strict";

    function n() {
      if ("undefined" != typeof document.addEventListener) {
        var t;
        "undefined" != typeof document.hidden ? (this._hidden = "hidden", t = "visibilitychange") : "undefined" != typeof document.mozHidden ? (this._hidden = "mozHidden", t = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (this._hidden = "msHidden", t = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (this._hidden = "webkitHidden", t = "webkitvisibilitychange"), "undefined" == typeof document[this._hidden] ? this.isHidden = !1 : this.isHidden = document[this._hidden], t && document.addEventListener(t, this._handleVisibilityChange.bind(this), !1), o.call(this)
      }
    }
    var r = t("@marcom/ac-object/create"),
      o = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      s = n.prototype = r(o.prototype);
    s.CHANGED = "changed", s._handleVisibilityChange = function(t) {
      this.isHidden = document[this._hidden], this.trigger(this.CHANGED, {
        isHidden: this.isHidden
      })
    }, e.exports = new n
  }, {
    "@marcom/ac-event-emitter-micro": 114,
    "@marcom/ac-object/create": 806
  }],
  118: [function(t, e, i) {
    function n(t) {
      var e = new Float32Array(16);
      return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    }
    e.exports = n
  }, {}],
  119: [function(t, e, i) {
    function n() {
      var t = new Float32Array(16);
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }
    e.exports = n
  }, {}],
  120: [function(t, e, i) {
    function n(t, e, i) {
      var n = e[0],
        r = e[1],
        o = e[2],
        s = e[3],
        a = n + n,
        c = r + r,
        l = o + o,
        u = n * a,
        h = n * c,
        d = n * l,
        m = r * c,
        p = r * l,
        f = o * l,
        g = s * a,
        v = s * c,
        y = s * l;
      return t[0] = 1 - (m + f), t[1] = h + y, t[2] = d - v, t[3] = 0, t[4] = h - y, t[5] = 1 - (u + f), t[6] = p + g, t[7] = 0, t[8] = d + v, t[9] = p - g, t[10] = 1 - (u + m), t[11] = 0, t[12] = i[0], t[13] = i[1], t[14] = i[2], t[15] = 1, t
    }
    e.exports = n
  }, {}],
  121: [function(t, e, i) {
    function n(t) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }
    e.exports = n
  }, {}],
  122: [function(t, e, i) {
    function n(t, e) {
      var i = e[0],
        n = e[1],
        r = e[2],
        o = e[3],
        s = e[4],
        a = e[5],
        c = e[6],
        l = e[7],
        u = e[8],
        h = e[9],
        d = e[10],
        m = e[11],
        p = e[12],
        f = e[13],
        g = e[14],
        v = e[15],
        y = i * a - n * s,
        _ = i * c - r * s,
        b = i * l - o * s,
        T = n * c - r * a,
        E = n * l - o * a,
        x = r * l - o * c,
        w = u * f - h * p,
        S = u * g - d * p,
        C = u * v - m * p,
        k = h * g - d * f,
        A = h * v - m * f,
        O = d * v - m * g,
        P = y * O - _ * A + b * k + T * C - E * S + x * w;
      return P ? (P = 1 / P, t[0] = (a * O - c * A + l * k) * P, t[1] = (r * A - n * O - o * k) * P, t[2] = (f * x - g * E + v * T) * P, t[3] = (d * E - h * x - m * T) * P, t[4] = (c * C - s * O - l * S) * P, t[5] = (i * O - r * C + o * S) * P, t[6] = (g * b - p * x - v * _) * P, t[7] = (u * x - d * b + m * _) * P, t[8] = (s * A - a * C + l * w) * P, t[9] = (n * C - i * A - o * w) * P, t[10] = (p * E - f * b + v * y) * P, t[11] = (h * b - u * E - m * y) * P, t[12] = (a * S - s * k - c * w) * P, t[13] = (i * k - n * S + r * w) * P, t[14] = (f * _ - p * T - g * y) * P, t[15] = (u * T - h * _ + d * y) * P, t) : null
    }
    e.exports = n
  }, {}],
  123: [function(t, e, i) {
    function n(t, e, i) {
      var n = e[0],
        r = e[1],
        o = e[2],
        s = e[3],
        a = e[4],
        c = e[5],
        l = e[6],
        u = e[7],
        h = e[8],
        d = e[9],
        m = e[10],
        p = e[11],
        f = e[12],
        g = e[13],
        v = e[14],
        y = e[15],
        _ = i[0],
        b = i[1],
        T = i[2],
        E = i[3];
      return t[0] = _ * n + b * a + T * h + E * f, t[1] = _ * r + b * c + T * d + E * g, t[2] = _ * o + b * l + T * m + E * v, t[3] = _ * s + b * u + T * p + E * y, _ = i[4], b = i[5], T = i[6], E = i[7], t[4] = _ * n + b * a + T * h + E * f, t[5] = _ * r + b * c + T * d + E * g, t[6] = _ * o + b * l + T * m + E * v, t[7] = _ * s + b * u + T * p + E * y, _ = i[8], b = i[9], T = i[10], E = i[11], t[8] = _ * n + b * a + T * h + E * f, t[9] = _ * r + b * c + T * d + E * g, t[10] = _ * o + b * l + T * m + E * v, t[11] = _ * s + b * u + T * p + E * y, _ = i[12], b = i[13], T = i[14], E = i[15], t[12] = _ * n + b * a + T * h + E * f, t[13] = _ * r + b * c + T * d + E * g, t[14] = _ * o + b * l + T * m + E * v, t[15] = _ * s + b * u + T * p + E * y, t
    }
    e.exports = n
  }, {}],
  124: [function(t, e, i) {
    function n(t, e, i, n) {
      var r, o, s, a, c, l, u, h, d, m, p, f, g, v, y, _, b, T, E, x, w, S, C, k, A = n[0],
        O = n[1],
        P = n[2],
        M = Math.sqrt(A * A + O * O + P * P);
      return Math.abs(M) < 1e-6 ? null : (M = 1 / M, A *= M, O *= M, P *= M, r = Math.sin(i), o = Math.cos(i), s = 1 - o, a = e[0], c = e[1], l = e[2], u = e[3], h = e[4], d = e[5], m = e[6], p = e[7], f = e[8], g = e[9], v = e[10], y = e[11], _ = A * A * s + o, b = O * A * s + P * r, T = P * A * s - O * r, E = A * O * s - P * r, x = O * O * s + o, w = P * O * s + A * r, S = A * P * s + O * r, C = O * P * s - A * r, k = P * P * s + o, t[0] = a * _ + h * b + f * T, t[1] = c * _ + d * b + g * T, t[2] = l * _ + m * b + v * T, t[3] = u * _ + p * b + y * T, t[4] = a * E + h * x + f * w, t[5] = c * E + d * x + g * w, t[6] = l * E + m * x + v * w, t[7] = u * E + p * x + y * w, t[8] = a * S + h * C + f * k, t[9] = c * S + d * C + g * k, t[10] = l * S + m * C + v * k, t[11] = u * S + p * C + y * k, e !== t && (t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t)
    }
    e.exports = n
  }, {}],
  125: [function(t, e, i) {
    function n(t, e, i) {
      var n = Math.sin(i),
        r = Math.cos(i),
        o = e[4],
        s = e[5],
        a = e[6],
        c = e[7],
        l = e[8],
        u = e[9],
        h = e[10],
        d = e[11];
      return e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[4] = o * r + l * n, t[5] = s * r + u * n, t[6] = a * r + h * n, t[7] = c * r + d * n, t[8] = l * r - o * n, t[9] = u * r - s * n, t[10] = h * r - a * n, t[11] = d * r - c * n, t
    }
    e.exports = n
  }, {}],
  126: [function(t, e, i) {
    function n(t, e, i) {
      var n = Math.sin(i),
        r = Math.cos(i),
        o = e[0],
        s = e[1],
        a = e[2],
        c = e[3],
        l = e[8],
        u = e[9],
        h = e[10],
        d = e[11];
      return e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = o * r - l * n, t[1] = s * r - u * n, t[2] = a * r - h * n, t[3] = c * r - d * n, t[8] = o * n + l * r, t[9] = s * n + u * r, t[10] = a * n + h * r, t[11] = c * n + d * r, t
    }
    e.exports = n
  }, {}],
  127: [function(t, e, i) {
    function n(t, e, i) {
      var n = Math.sin(i),
        r = Math.cos(i),
        o = e[0],
        s = e[1],
        a = e[2],
        c = e[3],
        l = e[4],
        u = e[5],
        h = e[6],
        d = e[7];
      return e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = o * r + l * n, t[1] = s * r + u * n, t[2] = a * r + h * n, t[3] = c * r + d * n, t[4] = l * r - o * n, t[5] = u * r - s * n, t[6] = h * r - a * n, t[7] = d * r - c * n, t
    }
    e.exports = n
  }, {}],
  128: [function(t, e, i) {
    function n(t, e, i) {
      var n = i[0],
        r = i[1],
        o = i[2];
      return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * r, t[5] = e[5] * r, t[6] = e[6] * r, t[7] = e[7] * r, t[8] = e[8] * o, t[9] = e[9] * o, t[10] = e[10] * o, t[11] = e[11] * o, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
    }
    e.exports = n
  }, {}],
  129: [function(t, e, i) {
    function n(t, e, i) {
      var n, r, o, s, a, c, l, u, h, d, m, p, f = i[0],
        g = i[1],
        v = i[2];
      return e === t ? (t[12] = e[0] * f + e[4] * g + e[8] * v + e[12], t[13] = e[1] * f + e[5] * g + e[9] * v + e[13], t[14] = e[2] * f + e[6] * g + e[10] * v + e[14], t[15] = e[3] * f + e[7] * g + e[11] * v + e[15]) : (n = e[0], r = e[1], o = e[2], s = e[3], a = e[4], c = e[5], l = e[6], u = e[7], h = e[8], d = e[9], m = e[10], p = e[11], t[0] = n, t[1] = r, t[2] = o, t[3] = s, t[4] = a, t[5] = c, t[6] = l, t[7] = u, t[8] = h, t[9] = d, t[10] = m, t[11] = p, t[12] = n * f + a * g + h * v + e[12], t[13] = r * f + c * g + d * v + e[13], t[14] = o * f + l * g + m * v + e[14], t[15] = s * f + u * g + p * v + e[15]), t
    }
    e.exports = n
  }, {}],
  130: [function(t, e, i) {
    function n(t, e) {
      if (t === e) {
        var i = e[1],
          n = e[2],
          r = e[3],
          o = e[6],
          s = e[7],
          a = e[11];
        t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = i, t[6] = e[9], t[7] = e[13], t[8] = n, t[9] = o, t[11] = e[14], t[12] = r, t[13] = s, t[14] = a
      } else t[0] = e[0], t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = e[1], t[5] = e[5], t[6] = e[9], t[7] = e[13], t[8] = e[2], t[9] = e[6], t[10] = e[10], t[11] = e[14], t[12] = e[3], t[13] = e[7], t[14] = e[11], t[15] = e[15];
      return t
    }
    e.exports = n
  }, {}],
  131: [function(t, e, i) {
    function n() {
      var t = new Float32Array(3);
      return t[0] = 0, t[1] = 0, t[2] = 0, t
    }
    e.exports = n
  }, {}],
  132: [function(t, e, i) {
    function n(t, e, i) {
      var n = e[0],
        r = e[1],
        o = e[2],
        s = i[0],
        a = i[1],
        c = i[2];
      return t[0] = r * c - o * a, t[1] = o * s - n * c, t[2] = n * a - r * s, t
    }
    e.exports = n
  }, {}],
  133: [function(t, e, i) {
    function n(t, e) {
      return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }
    e.exports = n
  }, {}],
  134: [function(t, e, i) {
    function n(t, e, i) {
      var n = new Float32Array(3);
      return n[0] = t, n[1] = e, n[2] = i, n
    }
    e.exports = n
  }, {}],
  135: [function(t, e, i) {
    function n(t) {
      var e = t[0],
        i = t[1],
        n = t[2];
      return Math.sqrt(e * e + i * i + n * n)
    }
    e.exports = n
  }, {}],
  136: [function(t, e, i) {
    function n(t, e) {
      var i = e[0],
        n = e[1],
        r = e[2],
        o = i * i + n * n + r * r;
      return o > 0 && (o = 1 / Math.sqrt(o), t[0] = e[0] * o, t[1] = e[1] * o, t[2] = e[2] * o), t
    }
    e.exports = n
  }, {}],
  137: [function(t, e, i) {
    function n() {
      var t = new Float32Array(4);
      return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t
    }
    e.exports = n
  }, {}],
  138: [function(t, e, i) {
    function n(t, e, i, n) {
      var r = new Float32Array(4);
      return r[0] = t, r[1] = e, r[2] = i, r[3] = n, r
    }
    e.exports = n
  }, {}],
  139: [function(t, e, i) {
    function n(t, e, i) {
      var n = e[0],
        r = e[1],
        o = e[2],
        s = e[3];
      return t[0] = i[0] * n + i[4] * r + i[8] * o + i[12] * s, t[1] = i[1] * n + i[5] * r + i[9] * o + i[13] * s, t[2] = i[2] * n + i[6] * r + i[10] * o + i[14] * s, t[3] = i[3] * n + i[7] * r + i[11] * o + i[15] * s, t
    }
    e.exports = n
  }, {}],
  140: [function(t, e, i) {
    "use strict";
    e.exports = {
      Transform: t("./ac-transform/Transform")
    }
  }, {
    "./ac-transform/Transform": 141
  }],
  141: [function(t, e, i) {
    "use strict";

    function n() {
      this.m = r.create()
    }
    var r = t("./gl-matrix/mat4"),
      o = t("./gl-matrix/vec3"),
      s = t("./gl-matrix/vec4"),
      a = Math.PI / 180,
      c = 180 / Math.PI,
      l = 0,
      u = 0,
      h = 1,
      d = 1,
      m = 2,
      p = 3,
      f = 4,
      g = 4,
      v = 5,
      y = 5,
      _ = 6,
      b = 7,
      T = 8,
      E = 9,
      x = 10,
      w = 11,
      S = 12,
      C = 12,
      k = 13,
      A = 13,
      O = 14,
      P = 15,
      M = n.prototype;
    M.rotateX = function(t) {
      var e = a * t;
      return r.rotateX(this.m, this.m, e), this
    }, M.rotateY = function(t) {
      var e = a * t;
      return r.rotateY(this.m, this.m, e), this
    }, M.rotateZ = function(t) {
      var e = a * t;
      return r.rotateZ(this.m, this.m, e), this
    }, M.rotate = M.rotateZ, M.rotate3d = function(t, e, i, n) {
      null !== e && void 0 !== e || (e = t), null !== i && void 0 !== e || (i = t);
      var o = a * n;
      return r.rotate(this.m, this.m, o, [t, e, i]), this
    }, M.rotateAxisAngle = M.rotate3d, M.scale = function(t, e) {
      return e = e || t, r.scale(this.m, this.m, [t, e, 1]), this
    }, M.scaleX = function(t) {
      return r.scale(this.m, this.m, [t, 1, 1]), this
    }, M.scaleY = function(t) {
      return r.scale(this.m, this.m, [1, t, 1]), this
    }, M.scaleZ = function(t) {
      return r.scale(this.m, this.m, [1, 1, t]), this
    }, M.scale3d = function(t, e, i) {
      return r.scale(this.m, this.m, [t, e, i]), this
    }, M.skew = function(t, e) {
      if (null === e || void 0 === e) return this.skewX(t);
      t = a * t, e = a * e;
      var i = r.create();
      return i[g] = Math.tan(t), i[d] = Math.tan(e), r.multiply(this.m, this.m, i), this
    }, M.skewX = function(t) {
      t = a * t;
      var e = r.create();
      return e[g] = Math.tan(t), r.multiply(this.m, this.m, e), this
    }, M.skewY = function(t) {
      t = a * t;
      var e = r.create();
      return e[d] = Math.tan(t), r.multiply(this.m, this.m, e), this
    }, M.translate = function(t, e) {
      return e = e || 0, r.translate(this.m, this.m, [t, e, 0]), this
    }, M.translate3d = function(t, e, i) {
      return r.translate(this.m, this.m, [t, e, i]), this
    }, M.translateX = function(t) {
      return r.translate(this.m, this.m, [t, 0, 0]), this
    }, M.translateY = function(t) {
      return r.translate(this.m, this.m, [0, t, 0]), this
    }, M.translateZ = function(t) {
      return r.translate(this.m, this.m, [0, 0, t]), this
    }, M.perspective = function(t) {
      var e = r.create();
      0 !== t && (e[w] = -1 / t), r.multiply(this.m, this.m, e)
    }, M.inverse = function() {
      var t = this.clone();
      return t.m = r.invert(t.m, this.m), t
    }, M.reset = function() {
      return r.identity(this.m), this
    }, M.getTranslateXY = function() {
      var t = this.m;
      return this.isAffine() ? [t[C], t[A]] : [t[S], t[k]]
    }, M.getTranslateXYZ = function() {
      var t = this.m;
      return this.isAffine() ? [t[C], t[A], 0] : [t[S], t[k], t[O]]
    }, M.getTranslateX = function() {
      var t = this.m;
      return this.isAffine() ? t[C] : t[S]
    }, M.getTranslateY = function() {
      var t = this.m;
      return this.isAffine() ? t[A] : t[k]
    }, M.getTranslateZ = function() {
      var t = this.m;
      return this.isAffine() ? 0 : t[O]
    }, M.clone = function() {
      var t = new n;
      return t.m = r.clone(this.m), t
    }, M.toArray = function() {
      var t = this.m;
      return this.isAffine() ? [t[u], t[d], t[g], t[y], t[C], t[A]] : [t[l], t[h], t[m], t[p], t[f], t[v], t[_], t[b], t[T], t[E], t[x], t[w], t[S], t[k], t[O], t[P]]
    }, M.fromArray = function(t) {
      return this.m = Array.prototype.slice.call(t), this
    }, M.setMatrixValue = function(t) {
      t = String(t).trim();
      var e = r.create();
      if ("none" === t) return this.m = e, this;
      var i, n, o = t.slice(0, t.indexOf("("));
      if ("matrix3d" === o)
        for (i = t.slice(9, -1).split(","), n = 0; n < i.length; n++) e[n] = parseFloat(i[n]);
      else {
        if ("matrix" !== o) throw new TypeError("Invalid Matrix Value");
        for (i = t.slice(7, -1).split(","), n = i.length; n--;) i[n] = parseFloat(i[n]);
        e[l] = i[0], e[h] = i[1], e[S] = i[4], e[f] = i[2], e[v] = i[3], e[k] = i[5]
      }
      return this.m = e, this
    };
    var N = function(t) {
      return Math.abs(t) < 1e-4
    };
    M.decompose = function(t) {
      t = t || !1;
      for (var e = r.clone(this.m), i = o.create(), n = o.create(), a = o.create(), l = s.create(), u = s.create(), h = (o.create(), 0); h < 16; h++) e[h] /= e[P];
      var d = r.clone(e);
      d[p] = 0, d[b] = 0, d[w] = 0, d[P] = 1;
      var m = (e[3], e[7], e[11], e[12]),
        f = e[13],
        g = e[14],
        v = (e[15], s.create());
      if (N(e[p]) && N(e[b]) && N(e[w])) l = s.fromValues(0, 0, 0, 1);
      else {
        v[0] = e[p], v[1] = e[b], v[2] = e[w], v[3] = e[P];
        var y = r.invert(r.create(), d),
          _ = r.transpose(r.create(), y);
        l = s.transformMat4(l, v, _)
      }
      i[0] = m, i[1] = f, i[2] = g;
      var T = [o.create(), o.create(), o.create()];
      T[0][0] = e[0], T[0][1] = e[1], T[0][2] = e[2], T[1][0] = e[4], T[1][1] = e[5], T[1][2] = e[6], T[2][0] = e[8], T[2][1] = e[9], T[2][2] = e[10], n[0] = o.length(T[0]), o.normalize(T[0], T[0]), a[0] = o.dot(T[0], T[1]), T[1] = this._combine(T[1], T[0], 1, -a[0]), n[1] = o.length(T[1]), o.normalize(T[1], T[1]), a[0] /= n[1], a[1] = o.dot(T[0], T[2]), T[2] = this._combine(T[2], T[0], 1, -a[1]), a[2] = o.dot(T[1], T[2]), T[2] = this._combine(T[2], T[1], 1, -a[2]), n[2] = o.length(T[2]), o.normalize(T[2], T[2]), a[1] /= n[2], a[2] /= n[2];
      var E = o.cross(o.create(), T[1], T[2]);
      if (o.dot(T[0], E) < 0)
        for (h = 0; h < 3; h++) n[h] *= -1, T[h][0] *= -1, T[h][1] *= -1, T[h][2] *= -1;
      u[0] = .5 * Math.sqrt(Math.max(1 + T[0][0] - T[1][1] - T[2][2], 0)), u[1] = .5 * Math.sqrt(Math.max(1 - T[0][0] + T[1][1] - T[2][2], 0)), u[2] = .5 * Math.sqrt(Math.max(1 - T[0][0] - T[1][1] + T[2][2], 0)), u[3] = .5 * Math.sqrt(Math.max(1 + T[0][0] + T[1][1] + T[2][2], 0)), T[2][1] > T[1][2] && (u[0] = -u[0]), T[0][2] > T[2][0] && (u[1] = -u[1]), T[1][0] > T[0][1] && (u[2] = -u[2]);
      var x = s.fromValues(u[0], u[1], u[2], 2 * Math.acos(u[3])),
        S = this._rotationFromQuat(u);
      return t && (a[0] = Math.round(a[0] * c * 100) / 100, a[1] = Math.round(a[1] * c * 100) / 100, a[2] = Math.round(a[2] * c * 100) / 100, S[0] = Math.round(S[0] * c * 100) / 100, S[1] = Math.round(S[1] * c * 100) / 100, S[2] = Math.round(S[2] * c * 100) / 100, x[3] = Math.round(x[3] * c * 100) / 100), {
        translation: i,
        scale: n,
        skew: a,
        perspective: l,
        quaternion: u,
        eulerRotation: S,
        axisAngle: x
      }
    }, M.recompose = function(t, e, i, n, a) {
      t = t || o.create(), e = e || o.create(), i = i || o.create(), n = n || s.create(), a = a || s.create();
      var c = r.fromRotationTranslation(r.create(), a, t);
      c[p] = n[0], c[b] = n[1], c[w] = n[2], c[P] = n[3];
      var l = r.create();
      return 0 !== i[2] && (l[E] = i[2], r.multiply(c, c, l)), 0 !== i[1] && (l[E] = 0, l[T] = i[1], r.multiply(c, c, l)), i[0] && (l[T] = 0, l[4] = i[0], r.multiply(c, c, l)), r.scale(c, c, e), this.m = c, this
    }, M.isAffine = function() {
      return 0 === this.m[m] && 0 === this.m[p] && 0 === this.m[_] && 0 === this.m[b] && 0 === this.m[T] && 0 === this.m[E] && 1 === this.m[x] && 0 === this.m[w] && 0 === this.m[O] && 1 === this.m[P]
    }, M.toString = function() {
      var t = this.m;
      return this.isAffine() ? "matrix(" + t[u] + ", " + t[d] + ", " + t[g] + ", " + t[y] + ", " + t[C] + ", " + t[A] + ")" : "matrix3d(" + t[l] + ", " + t[h] + ", " + t[m] + ", " + t[p] + ", " + t[f] + ", " + t[v] + ", " + t[_] + ", " + t[b] + ", " + t[T] + ", " + t[E] + ", " + t[x] + ", " + t[w] + ", " + t[S] + ", " + t[k] + ", " + t[O] + ", " + t[P] + ")"
    }, M.toCSSString = M.toString, M._combine = function(t, e, i, n) {
      var r = o.create();
      return r[0] = i * t[0] + n * e[0], r[1] = i * t[1] + n * e[1], r[2] = i * t[2] + n * e[2], r
    }, M._matrix2dToMat4 = function(t) {
      for (var e = r.create(), i = 0; i < 4; i++)
        for (var n = 0; n < 4; n++) e[4 * i + n] = t[i][n];
      return e
    }, M._mat4ToMatrix2d = function(t) {
      for (var e = [], i = 0; i < 4; i++) {
        e[i] = [];
        for (var n = 0; n < 4; n++) e[i][n] = t[4 * i + n]
      }
      return e
    }, M._rotationFromQuat = function(t) {
      var e, i, n, r = t[3] * t[3],
        s = t[0] * t[0],
        a = t[1] * t[1],
        c = t[2] * t[2],
        l = s + a + c + r,
        u = t[0] * t[1] + t[2] * t[3];
      return u > .499 * l ? (i = 2 * Math.atan2(t[0], t[3]), n = Math.PI / 2, e = 0, o.fromValues(e, i, n)) : u < -.499 * l ? (i = -2 * Math.atan2(t[0], t[3]), n = -Math.PI / 2, e = 0, o.fromValues(e, i, n)) : (i = Math.atan2(2 * t[1] * t[3] - 2 * t[0] * t[2], s - a - c + r), n = Math.asin(2 * u / l), e = Math.atan2(2 * t[0] * t[3] - 2 * t[1] * t[2], -s + a - c + r), o.fromValues(e, i, n))
    }, e.exports = n
  }, {
    "./gl-matrix/mat4": 142,
    "./gl-matrix/vec3": 143,
    "./gl-matrix/vec4": 144
  }],
  142: [function(t, e, i) {
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
    "gl-mat4/clone": 118,
    "gl-mat4/create": 119,
    "gl-mat4/fromRotationTranslation": 120,
    "gl-mat4/identity": 121,
    "gl-mat4/invert": 122,
    "gl-mat4/multiply": 123,
    "gl-mat4/rotate": 124,
    "gl-mat4/rotateX": 125,
    "gl-mat4/rotateY": 126,
    "gl-mat4/rotateZ": 127,
    "gl-mat4/scale": 128,
    "gl-mat4/translate": 129,
    "gl-mat4/transpose": 130
  }],
  143: [function(t, e, i) {
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
    "gl-vec3/create": 131,
    "gl-vec3/cross": 132,
    "gl-vec3/dot": 133,
    "gl-vec3/fromValues": 134,
    "gl-vec3/length": 135,
    "gl-vec3/normalize": 136
  }],
  144: [function(t, e, i) {
    var n = {
      create: t("gl-vec4/create"),
      transformMat4: t("gl-vec4/transformMat4"),
      fromValues: t("gl-vec4/fromValues")
    };
    e.exports = n
  }, {
    "gl-vec4/create": 137,
    "gl-vec4/fromValues": 138,
    "gl-vec4/transformMat4": 139
  }],
  145: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n) {
      return t.nodeType ? void 0 === r || n && n.inlineStyles ? new a(t, e, i, n) : new c(t, e, i, n) : new s(t, e, i, n)
    }
    t("./helpers/Float32Array");
    var r = t("./helpers/transitionEnd"),
      o = t("@marcom/ac-clip").Clip,
      s = t("./clips/ClipEasing"),
      a = t("./clips/ClipInlineCss"),
      c = t("./clips/ClipTransitionCss");
    for (var l in o) "function" == typeof o[l] && "_" !== l.substr(0, 1) && (n[l] = o[l].bind(o));
    n.to = function(t, e, i, r) {
      return r = r || {}, void 0 === r.destroyOnComplete && (r.destroyOnComplete = !0), new n(t, e, i, r).play()
    }, n.from = function(t, e, i, r) {
      return r = r || {}, r.propsFrom = i, void 0 === r.destroyOnComplete && (r.destroyOnComplete = !0), new n(t, e, r.propsTo, r).play()
    }, e.exports = n
  }, {
    "./clips/ClipEasing": 148,
    "./clips/ClipInlineCss": 149,
    "./clips/ClipTransitionCss": 150,
    "./helpers/Float32Array": 153,
    "./helpers/transitionEnd": 162,
    "@marcom/ac-clip": 71
  }],
  146: [function(t, e, i) {
    "use strict";
    e.exports = t("./timeline/Timeline")
  }, {
    "./timeline/Timeline": 164
  }],
  147: [function(t, e, i) {
    "use strict";
    e.exports = {
      Clip: t("./Clip"),
      Timeline: t("./Timeline")
    }
  }, {
    "./Clip": 145,
    "./Timeline": 146
  }],
  148: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n) {
      n && a(n.ease) && (n.ease = c.create(n.ease).toEasingFunction()), n = n || {}, this._propsEase = n.propsEase || {}, l.call(this, t, e, i, n)
    }
    var r = t("@marcom/ac-object/clone"),
      o = t("@marcom/ac-object/create"),
      s = t("@marcom/ac-easing").createPredefined,
      a = t("../helpers/isCssCubicBezierString"),
      c = t("../helpers/BezierCurveCssManager"),
      l = t("@marcom/ac-clip").Clip,
      u = t("@marcom/ac-easing").Ease,
      h = l.prototype,
      d = n.prototype = o(h);
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
        o = {},
        d = {};
      if (this._propsEase) {
        for (t in this._propsTo) this._propsTo.hasOwnProperty(t) && (e = this._propsEase[t], a(e) && (e = c.create(e).toEasingFunction()), void 0 === e ? (void 0 === n[this._ease] && (n[this._ease] = {}, o[this._ease] = {}, d[this._ease] = this._ease.easingFunction, i++), n[this._ease][t] = this._propsTo[t], o[this._ease][t] = this._propsFrom[t]) : "function" == typeof e ? (n[i] = {}, o[i] = {}, n[i][t] = this._propsTo[t], o[i][t] = this._propsFrom[t], d[i] = e, i++) : (void 0 === n[e] && (n[e] = {}, o[e] = {}, d[e] = e, i++), n[e][t] = this._propsTo[t], o[e][t] = this._propsFrom[t]));
        if (i > 1) {
          var m = r(this._options || {}, !0),
            p = .001 * this._duration;
          this._storeOnUpdate = this._onUpdate, this._onUpdate = this._onUpdateClips, m.onStart = null, m.onUpdate = null, m.onDraw = null, m.onComplete = null, this._clips = [];
          for (e in n) n.hasOwnProperty(e) && (m.ease = d[e], m.propsFrom = o[e], this._clips.push(new l(this._target, p, n[e], m)));
          e = "linear", this._propsTo = {}, this._propsFrom = {}
        } else
          for (t in d) d.hasOwnProperty(t) && (e = d[t]);
        void 0 !== e && (this._ease = "function" == typeof e ? new u(e) : s(e))
      }
      return h._prepareProperties.call(this)
    }, d._onUpdateClips = function(t) {
      for (var e = 1 === this._direction ? t.progress() : 1 - t.progress(), i = this._clips.length; i--;) this._clips[i].progress(e);
      "function" == typeof this._storeOnUpdate && this._storeOnUpdate.call(this, this)
    }, e.exports = n
  }, {
    "../helpers/BezierCurveCssManager": 152,
    "../helpers/isCssCubicBezierString": 158,
    "@marcom/ac-clip": 71,
    "@marcom/ac-easing": 106,
    "@marcom/ac-object/clone": 805,
    "@marcom/ac-object/create": 806
  }],
  149: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n) {
      n = n || {}, this._el = t, this._storeOnStart = n.onStart || null, this._storeOnDraw = n.onDraw || null, this._storeOnComplete = n.onComplete || null, n.onStart = this._onStart, n.onDraw = this._onDraw, n.onComplete = this._onComplete, l.call(this, {}, e, i, n)
    }
    var r = t("@marcom/ac-dom-styles/setStyle"),
      o = t("../helpers/convertToStyleObject"),
      s = t("../helpers/convertToTransitionableObjects"),
      a = t("@marcom/ac-object/create"),
      c = t("../helpers/removeTransitions"),
      l = t("./ClipEasing"),
      u = l.prototype,
      h = n.prototype = a(u);
    h.play = function() {
      var t = u.play.call(this);
      return 0 !== this._remainingDelay && r(this._el, o(this._target)), t
    }, h.reset = function() {
      var t = u.reset.call(this);
      return r(this._el, o(this._target)), t
    }, h.destroy = function() {
      return this._el = null, this._completeStyles = null, this._storeOnStart = null, this._storeOnDraw = null, this._storeOnComplete = null, u.destroy.call(this)
    }, h.target = function() {
      return this._el
    }, h._prepareProperties = function() {
      var t = s(this._el, this._propsTo, this._propsFrom);
      this._target = t.target, this._propsFrom = t.propsFrom, this._propsTo = t.propsTo, c(this._el, this._target);
      var e = this._isYoyo ? this._propsFrom : this._propsTo;
      if (this._completeStyles = o(e), void 0 !== this._options.removeStylesOnComplete) {
        var i, n = this._options.removeStylesOnComplete;
        if ("boolean" == typeof n && n)
          for (i in this._completeStyles) this._completeStyles.hasOwnProperty(i) && (this._completeStyles[i] = null);
        else if ("object" == typeof n && n.length)
          for (var r = n.length; r--;) i = n[r], this._completeStyles.hasOwnProperty(i) && (this._completeStyles[i] = null)
      }
      return u._prepareProperties.call(this)
    }, h._onStart = function(t) {
      this.playing() && 1 === this._direction && 0 === this._delay && r(this._el, o(this._propsFrom)), "function" == typeof this._storeOnStart && this._storeOnStart.call(this, this)
    }, h._onDraw = function(t) {
      r(this._el, o(this._target)), "function" == typeof this._storeOnDraw && this._storeOnDraw.call(this, this)
    }, h._onComplete = function(t) {
      r(this._el, this._completeStyles), "function" == typeof this._storeOnComplete && this._storeOnComplete.call(this, this)
    }, e.exports = n
  }, {
    "../helpers/convertToStyleObject": 155,
    "../helpers/convertToTransitionableObjects": 156,
    "../helpers/removeTransitions": 159,
    "./ClipEasing": 148,
    "@marcom/ac-dom-styles/setStyle": 105,
    "@marcom/ac-object/create": 806
  }],
  150: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n) {
      if (n = n || {}, this._el = t, this._storeEase = n.ease, "function" == typeof this._storeEase) throw new Error(T);
      this._storeOnStart = n.onStart || null, this._storeOnComplete = n.onComplete || null, n.onStart = this._onStart.bind(this), n.onComplete = this._onComplete.bind(this), this._stylesTo = c(i, !0), this._stylesFrom = n.propsFrom ? c(n.propsFrom, !0) : {}, this._propsEase = n.propsEase ? c(n.propsEase, !0) : {}, h(n.ease) && (n.ease = f.create(n.ease).toEasingFunction()), g.call(this, {}, e, {}, n), this._propsFrom = {}
    }
    var r = t("@marcom/ac-dom-styles/setStyle"),
      o = t("@marcom/ac-dom-styles/getStyle"),
      s = t("../helpers/convertToStyleObject"),
      a = t("../helpers/convertToTransitionableObjects"),
      c = t("@marcom/ac-object/clone"),
      l = t("@marcom/ac-object/create"),
      u = t("@marcom/ac-easing").createPredefined,
      h = t("../helpers/isCssCubicBezierString"),
      d = t("../helpers/removeTransitions"),
      m = t("../helpers/transitionEnd"),
      p = t("../helpers/waitAnimationFrames"),
      f = t("../helpers/BezierCurveCssManager"),
      g = t("@marcom/ac-clip").Clip,
      v = t("./ClipEasing"),
      y = t("@marcom/ac-page-visibility").PageVisibilityManager,
      _ = "ease",
      b = "%EASE% is not a supported predefined ease when transitioning with Elements and CSS transition. If you need to use %EASE% then pass the inlineStyle:true option.",
      T = "Function eases are not supported when using CSS transitions with Elements. Either use a cubic-bezier string (e.g. 'cubic-bezier(0, 0, 1, 1)' or pass the inlineStyle option as `true` to render styles each frame instead of using CSS transitions.",
      E = g.prototype,
      x = n.prototype = l(E);
    x.play = function() {
      var t = E.play.call(this);
      return 1 === this._direction && 0 === this.progress() && 0 !== this._remainingDelay && this._applyStyles(0, s(this._stylesFrom)), t
    }, x.reset = function() {
      var t = E.reset.call(this);
      return this._stylesClip.reset(), this._applyStyles(0, s(this._styles)), t
    }, x.destroy = function() {
      return y.off("changed", this._onVisibilityChanged), this._removeTransitionListener(), this.off("pause", this._onPaused), this._onPaused(), this._stylesClip.destroy(), this._stylesClip = null, this._el = null, this._propsArray = null, this._styles = null, this._stylesFrom = null, this._stylesTo = null, this._completeStyles = null, this._storeOnStart = null, this._storeOnComplete = null, this._onTransitionEnded = null, E.destroy.call(this)
    }, x.target = function() {
      return this._el
    }, x.duration = function(t) {
      var e = E.duration.call(this, t);
      return void 0 === t ? e : (this.playing() && this.progress(this._progress), e)
    }, x.progress = function(t) {
      var e = E.progress.call(this, t);
      return void 0 === t ? e : (t = 1 === this._direction ? t : 1 - t, this._stylesClip.progress(t), this._applyStyles(0, s(this._styles)), this.playing() && (this._isWaitingForStylesToBeApplied = !0, p(this._setStylesAfterWaiting, 2)), e)
    }, x._prepareProperties = function() {
      var t = a(this._el, this._stylesTo, this._stylesFrom);
      this._styles = t.target, this._stylesTo = t.propsTo, this._stylesFrom = t.propsFrom;
      var e = this._storeEase || _;
      this._eases = {}, this._propsArray = [];
      var i;
      this._styleCompleteTo = s(this._stylesTo), this._styleCompleteFrom = s(this._stylesFrom), this._propsEaseKeys = {};
      var n;
      for (n in this._stylesTo) this._stylesTo.hasOwnProperty(n) && (this._propsArray[this._propsArray.length] = n, void 0 === this._propsEase[n] ? (void 0 === this._eases[e] && (i = this._convertEase(e), this._eases[e] = i.css), this._propsEaseKeys[n] = e) : void 0 === this._eases[this._propsEase[n]] ? (i = this._convertEase(this._propsEase[n]), this._eases[this._propsEase[n]] = i.css, this._propsEaseKeys[n] = this._propsEase[n], this._propsEase[n] = i.js) : h(this._propsEase[n]) && (this._propsEaseKeys[n] = this._propsEase[n], this._propsEase[n] = this._eases[this._propsEase[n]][1].toEasingFunction()));
      if (this._onPaused = this._onPaused.bind(this), this.on("pause", this._onPaused), this._setOtherTransitions(), this._currentTransitionStyles = this._otherTransitions, this._completeStyles = s(this._isYoyo ? this._stylesFrom : this._stylesTo), void 0 !== this._options.removeStylesOnComplete) {
        var r = this._options.removeStylesOnComplete;
        if ("boolean" == typeof r && r)
          for (n in this._stylesTo) this._completeStyles[n] = null;
        else if ("object" == typeof r && r.length)
          for (var o = r.length; o--;) this._completeStyles[r[o]] = null
      }
      return this._onTransitionEnded = this._onTransitionEnded.bind(this), this._setStylesAfterWaiting = this._setStylesAfterWaiting.bind(this), this._onVisibilityChanged = this._onVisibilityChanged.bind(this), y.on(y.CHANGED, this._onVisibilityChanged), this._stylesClip = new v(this._styles, 1, this._stylesTo, {
        ease: this._options.ease,
        propsFrom: this._stylesFrom,
        propsEase: this._options.propsEase
      }), g._remove(this._stylesClip), E._prepareProperties.call(this)
    }, x._convertEase = function(t) {
      if ("function" == typeof t) throw new Error(T);
      var e, i;
      if (h(t)) e = f.create(t), i = e.toEasingFunction();
      else {
        var n = u(t);
        if (null === n.cssString) throw new Error(b.replace(/%EASE%/g, t));
        e = f.create(n.cssString), i = t
      }
      return {
        css: {
          1: e,
          "-1": e.reversed()
        },
        js: i
      }
    }, x._complete = function() {
      !this._isWaitingForStylesToBeApplied && !this._isTransitionEnded && this._isListeningForTransitionEnd || 1 !== this.progress() || (this._isWaitingForStylesToBeApplied = !1, E._complete.call(this))
    }, x._onTransitionEnded = function() {
      this._isTransitionEnded = !0, this._complete()
    }, x._addTransitionListener = function() {
      !this._isListeningForTransitionEnd && this._el && this._onTransitionEnded && (this._isListeningForTransitionEnd = !0, this._isTransitionEnded = !1, this._el.addEventListener(m, this._onTransitionEnded))
    }, x._removeTransitionListener = function() {
      this._isListeningForTransitionEnd && this._el && this._onTransitionEnded && (this._isListeningForTransitionEnd = !1, this._isTransitionEnded = !1, this._el.removeEventListener(m, this._onTransitionEnded))
    }, x._applyStyles = function(t, e) {
      if (t > 0) {
        var i, n = "",
          o = {};
        for (i in this._eases) this._eases.hasOwnProperty(i) && (o[i] = this._eases[i][this._direction].splitAt(this.progress()).toCSSString());
        for (i in this._stylesTo) this._stylesTo.hasOwnProperty(i) && (n += i + " " + t + "ms " + o[this._propsEaseKeys[i]] + " 0ms, ");
        this._currentTransitionStyles = n.substr(0, n.length - 2), this._doStylesMatchCurrentStyles(e) ? this._removeTransitionListener() : this._addTransitionListener()
      } else this._currentTransitionStyles = "", this._removeTransitionListener();
      e.transition = this._getOtherClipTransitionStyles() + this._currentTransitionStyles, r(this._el, e)
    }, x._doStylesMatchCurrentStyles = function(t) {
      var e, i = o.apply(this, [this._el].concat([this._propsArray]));
      for (e in t)
        if (t.hasOwnProperty(e) && i.hasOwnProperty(e) && t[e] !== i[e]) return !1;
      return !0
    }, x._setStylesAfterWaiting = function() {
      if (this._isWaitingForStylesToBeApplied = !1, this.playing()) {
        var t = this._durationMs * (1 - this.progress()),
          e = this._direction > 0 ? this._styleCompleteTo : this._styleCompleteFrom;
        this._applyStyles(t, e)
      }
    }, x._setOtherTransitions = function() {
      d(this._el, this._stylesTo);
      for (var t = g.getAll(this._el), e = t.length; e--;)
        if (t[e] !== this && t[e].playing() && t[e]._otherTransitions && t[e]._otherTransitions.length) return void(this._otherTransitions = t[e]._otherTransitions);
      this._otherTransitions = o(this._el, "transition").transition, null !== this._otherTransitions && "all 0s ease 0s" !== this._otherTransitions || (this._otherTransitions = "")
    }, x._getTransitionStyles = function() {
      var t = this._getOtherClipTransitionStyles();
      return this._otherTransitions.length ? t += this._otherTransitions : t.length && (t = t.substr(0, t.length - 2)), t
    }, x._getOtherClipTransitionStyles = function() {
      for (var t = "", e = g.getAll(this._el), i = e.length; i--;) e[i] !== this && e[i].playing() && e[i]._currentTransitionStyles && e[i]._currentTransitionStyles.length && (t += e[i]._currentTransitionStyles + ", ");
      return t
    }, x._onVisibilityChanged = function(t) {
      if (this.playing() && !t.isHidden) {
        this._update({
          timeNow: this._getTime()
        });
        var e = this.progress();
        e < 1 && this.progress(e)
      }
    }, x._onPaused = function(t) {
      var e = o.apply(this, [this._el].concat([this._propsArray]));
      e.transition = this._getTransitionStyles(), this._removeTransitionListener(), r(this._el, e)
    }, x._onStart = function(t) {
      var e = 1 === this._direction && 0 === this.progress() && 0 === this._delay ? 2 : 0;
      e && (this._isWaitingForStylesToBeApplied = !0, this._applyStyles(0, this._styleCompleteFrom)), p(this._setStylesAfterWaiting, e), "function" == typeof this._storeOnStart && this._storeOnStart.call(this, this)
    }, x._onComplete = function(t) {
      this._removeTransitionListener(), this._completeStyles.transition = this._getTransitionStyles(), r(this._el, this._completeStyles), "function" == typeof this._storeOnComplete && this._storeOnComplete.call(this, this)
    }, e.exports = n
  }, {
    "../helpers/BezierCurveCssManager": 152,
    "../helpers/convertToStyleObject": 155,
    "../helpers/convertToTransitionableObjects": 156,
    "../helpers/isCssCubicBezierString": 158,
    "../helpers/removeTransitions": 159,
    "../helpers/transitionEnd": 162,
    "../helpers/waitAnimationFrames": 163,
    "./ClipEasing": 148,
    "@marcom/ac-clip": 71,
    "@marcom/ac-dom-styles/getStyle": 93,
    "@marcom/ac-dom-styles/setStyle": 105,
    "@marcom/ac-easing": 106,
    "@marcom/ac-object/clone": 805,
    "@marcom/ac-object/create": 806,
    "@marcom/ac-page-visibility": 116
  }],
  151: [function(t, e, i) {
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
      o = n.prototype;
    o.splitAt = function(t) {
      if (this._isLinear) return this;
      if (t = Math.round(40 * t) / 40, 0 === t) return this;
      if (void 0 !== this._cacheSplits[t]) return this._cacheSplits[t];
      for (var e = [this.p1.x, this.p2.x], i = [this.p1.y, this.p2.y], n = 0, r = t, o = 0, s = 1, a = this._getStartX(t, e); r !== a && n < 1e3;) r < a ? s = t : o = t, t = o + .5 * (s - o), a = this._getStartX(t, e), ++n;
      var c = this._splitBezier(t, e, i),
        l = this._normalize(c),
        u = this.manager.create(l);
      return this._cacheSplits[r] = u, u
    }, o.reversed = function() {
      var t = this.toArray();
      return this.manager.create([.5 - (t[2] - .5), .5 - (t[3] - .5), .5 - (t[0] - .5), .5 - (t[1] - .5)])
    }, o.toArray = function() {
      return [this.p1.x, this.p1.y, this.p2.x, this.p2.y]
    }, o.toCSSString = function() {
      return "cubic-bezier(" + this.p1.x + ", " + this.p1.y + ", " + this.p2.x + ", " + this.p2.y + ")"
    }, o.toEasingFunction = function() {
      return r.apply(this, this.toArray()).easingFunction
    }, o._getStartX = function(t, e) {
      var i = t - 1,
        n = t * t,
        r = i * i,
        o = n * t;
      return o - 3 * n * i * e[1] + 3 * t * r * e[0]
    }, o._splitBezier = function(t, e, i) {
      var n = t - 1,
        r = t * t,
        o = n * n,
        s = r * t;
      return [s - 3 * r * n * e[1] + 3 * t * o * e[0], s - 3 * r * n * i[1] + 3 * t * o * i[0], r - 2 * t * n * e[1] + o * e[0], r - 2 * t * n * i[1] + o * i[0], t - n * e[1], t - n * i[1]]
    }, o._normalize = function(t) {
      return [(t[2] - t[0]) / (1 - t[0]), (t[3] - t[1]) / (1 - t[1]), (t[4] - t[0]) / (1 - t[0]), (t[5] - t[1]) / (1 - t[1])]
    }, e.exports = n
  }, {
    "@marcom/ac-easing": 106
  }],
  152: [function(t, e, i) {
    "use strict";

    function n() {
      this._instances = {}
    }
    var r = t("./BezierCurveCss"),
      o = n.prototype;
    o.create = function(t) {
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
    "./BezierCurveCss": 151
  }],
  153: [function(t, e, i) {
    "use strict";
    "undefined" == typeof window.Float32Array && (window.Float32Array = function() {})
  }, {}],
  154: [function(t, e, i) {
    "use strict";

    function n(t, e, i) {
      this._transform = t;
      var n, r, s;
      for (s in i) i.hasOwnProperty(s) && "function" == typeof this._transform[s] && (n = o(i[s]), r = "%" === n.unit ? this._convertPercentToPixelValue(s, n.value, e) : n.value, this._transform[s].call(this._transform, r))
    }
    var r = t("@marcom/ac-dom-metrics/getDimensions"),
      o = t("./splitUnits"),
      s = {
        translateX: "width",
        translateY: "height"
      },
      a = n.prototype;
    a._convertPercentToPixelValue = function(t, e, i) {
      t = s[t];
      var n = r(i);
      return n[t] ? (e *= .01, n[t] * e) : e
    }, a.toArray = function() {
      return this._transform.toArray()
    }, a.toCSSString = function() {
      return this._transform.toCSSString()
    }, e.exports = n
  }, {
    "./splitUnits": 160,
    "@marcom/ac-dom-metrics/getDimensions": 24
  }],
  155: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e, i, n = {};
      for (i in t) t.hasOwnProperty(i) && null !== t[i] && (t[i].isColor ? t[i].isRgb ? n[i] = "rgb(" + Math.round(t[i].r) + ", " + Math.round(t[i].g) + ", " + Math.round(t[i].b) + ")" : t[i].isRgba && (n[i] = "rgba(" + Math.round(t[i].r) + ", " + Math.round(t[i].g) + ", " + Math.round(t[i].b) + ", " + t[i].a + ")") : "transform" === i ? (e = 6 === t[i].length ? "matrix" : "matrix3d", n[i] = e + "(" + t[i].join(",") + ")") : t[i].unit ? n[i] = t[i].value + t[i].unit : n[i] = t[i].value);
      return n
    }
  }, {}],
  156: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-styles/getStyle"),
      r = t("@marcom/ac-object/clone"),
      o = t("./splitUnits"),
      s = t("./toCamCase"),
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
      p = function(t) {
        return [t[0], t[1], 0, 0, t[2], t[3], 0, 0, 0, 0, 1, 0, t[4], t[5], 0, 1]
      },
      f = function(t, e, i) {
        16 !== t.transform.length && 16 !== e.transform.length && 16 !== i.transform.length || (6 === t.transform.length && (t.transform = p(t.transform)), 6 === e.transform.length && (e.transform = p(e.transform)), 6 === i.transform.length && (i.transform = p(i.transform)))
      };
    e.exports = function(t, e, i) {
      var d = {};
      e = r(e, !0), i = r(i, !0);
      var p, g, v, y, _, b = c("transform");
      for (_ in e) e.hasOwnProperty(_) && null !== e[_] && ("transform" === _ ? (b && (g = new l, p = n(t, "transform").transform || "none", g.setMatrixValue(p), v = new u(new l, t, e[_])), v && v.toCSSString() !== g.toCSSString() ? (y = new u(i[_] ? new l : g.clone(), t, i[_]), d[_] = g.toArray(), e[_] = v.toArray(), i[_] = y.toArray()) : (d[_] = null, e[_] = null)) : (p = n(t, _)[s(_)] || i[_], a.isColor(p) ? (d[_] = h(p), i[_] = void 0 !== i[_] ? h(i[_]) : r(d[_], !0), e[_] = h(e[_])) : (d[_] = o(p), i[_] = void 0 !== i[_] ? o(i[_]) : r(d[_], !0), e[_] = o(e[_]))));
      for (_ in i) !i.hasOwnProperty(_) || null === i[_] || void 0 !== e[_] && null !== e[_] || ("transform" === _ ? (b && (g = new l, g.setMatrixValue(getComputedStyle(t).transform || getComputedStyle(t).webkitTransform || "none"), y = new u(new l, t, i[_])), y && y.toCSSString() !== g.toCSSString() ? (v = new u(g.clone()), d[_] = g.toArray(), e[_] = v.toArray(), i[_] = y.toArray()) : (d[_] = null, e[_] = null, i[_] = null)) : (p = n(t, _)[s(_)], a.isColor(p) ? (d[_] = h(p), e[_] = r(d[_], !0), i[_] = h(i[_])) : (d[_] = o(p), i[_] = o(i[_]), e[_] = r(d[_], !0)))), d[_] && d[_].isColor && m(d[_], i[_], e[_]);
      return d.transform && f(d, i, e), {
        target: d,
        propsTo: e,
        propsFrom: i
      }
    }
  }, {
    "./TransformMatrix": 154,
    "./splitUnits": 160,
    "./toCamCase": 161,
    "@marcom/ac-color": 73,
    "@marcom/ac-dom-styles/getStyle": 93,
    "@marcom/ac-feature/cssPropertyAvailable": 189,
    "@marcom/ac-object/clone": 805,
    "@marcom/ac-transform": 140
  }],
  157: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      if (t.transitionProperty) {
        for (var e = "", i = t.transitionProperty.split(", "), n = t.transitionDuration.split(", "), r = t.transitionTimingFunction.replace(/\d+[,]+[\s]/gi, function(t) {
            return t.substr(0, t.length - 1)
          }).split(", "), o = t.transitionDelay.split(", "), s = i.length; s--;) e += i[s] + " " + n[s] + " " + r[s] + " " + o[s] + ", ";
        return e.substr(0, e.length - 2)
      }
      return !1
    }
  }, {}],
  158: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return "string" == typeof t && "cubic-bezier(" === t.substr(0, 13)
    }
  }, {}],
  159: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-styles/setStyle"),
      r = t("@marcom/ac-dom-styles/getStyle"),
      o = t("./getShorthandTransition");
    e.exports = function(t, e) {
      var i = r(t, "transition", "transition-property", "transition-duration", "transition-timing-function", "transition-delay");
      if (i = i.transition || o(i), i && i.length) {
        i = i.split(",");
        for (var s, a = 0, c = i.length; c--;) s = i[c].trim().split(" ")[0], void 0 !== e[s] && (i.splice(c, 1), ++a);
        a && (0 === i.length && (i = ["all"]), n(t, {
          transition: i.join(",").trim()
        }))
      }
    }
  }, {
    "./getShorthandTransition": 157,
    "@marcom/ac-dom-styles/getStyle": 93,
    "@marcom/ac-dom-styles/setStyle": 105
  }],
  160: [function(t, e, i) {
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
  161: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e = function(t, e, i, n) {
        return 0 === i && "moz" !== n.substr(1, 3) ? e : e.toUpperCase()
      };
      return t.replace(/-(\w)/g, e)
    }
  }, {}],
  162: [function(t, e, i) {
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
  163: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-page-visibility").PageVisibilityManager;
    e.exports = function(t, e) {
      if (e) {
        var i = function(t) {
            n.isHidden ? setTimeout(t, 16) : window.requestAnimationFrame(t)
          },
          r = 0,
          o = function() {
            r === e ? t.call(this) : (++r, i(o))
          };
        o()
      } else t.call(this)
    }
  }, {
    "@marcom/ac-page-visibility": 116
  }],
  164: [function(t, e, i) {
    "use strict";

    function n(t) {
      t = t || {}, t.ease = t.ease || "linear", t.destroyOnComplete = !1, this.options = t, o.call(this, {
        t: 0
      }, 0, {
        t: 1
      }, t), this._itemList = new c
    }
    var r = t("@marcom/ac-object/create"),
      o = t("@marcom/ac-clip").Clip,
      s = t("./TimelineClip"),
      a = t("./TimelineCallback"),
      c = t("./TimelineItemList"),
      l = o.prototype,
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
      this._itemList.append(new s(t, e + i)), this._updateDuration()
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
    "./TimelineCallback": 165,
    "./TimelineClip": 166,
    "./TimelineItemList": 167,
    "@marcom/ac-clip": 71,
    "@marcom/ac-object/create": 806
  }],
  165: [function(t, e, i) {
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
  166: [function(t, e, i) {
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
  167: [function(t, e, i) {
    "use strict";
    var n = t("./TimelineClip"),
      r = t("./TimelineCallback"),
      o = function() {
        this.head = null, this.tail = null, this.length = 0
      },
      s = o.prototype;
    s.append = function(t) {
      t.prev = null, t.next = null, this.tail ? (this.tail.next = t, t.prev = this.tail) : this.head = t, this.tail = t, this.length++
    }, s.remove = function(t) {
      t === this.head ? this.head = this.head.next : t === this.tail && (this.tail = this.tail.prev), t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t.next = t.prev = null, null === this.head && (this.tail = null), this.length--
    }, s.getItem = function(t) {
      for (var e = this.head; e;) {
        var i = e;
        if (i instanceof n && i.clip === t || i instanceof r && i.callback === t) return i;
        e = i.next
      }
      return null
    }, s.forEach = function(t) {
      for (var e = 0, i = this.head; i;) {
        var n = i;
        t(n, e, this.length), i = n.next
      }
    }, s.destroy = function() {
      for (; this.head;) {
        var t = this.head;
        this.remove(t), t.destroy()
      }
    }, e.exports = o
  }, {
    "./TimelineCallback": 165,
    "./TimelineClip": 166
  }],
  168: [function(t, e, i) {
    "use strict";
    e.exports = {
      EventEmitterMicro: t("./ac-event-emitter-micro/EventEmitterMicro")
    }
  }, {
    "./ac-event-emitter-micro/EventEmitterMicro": 169
  }],
  169: [function(t, e, i) {
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
  170: [function(t, e, i) {
    "use strict";
    var n = function() {
      var t, e = "";
      for (t = 0; t < arguments.length; t++) t > 0 && (e += ","), e += arguments[t];
      return e
    };
    e.exports = function(t, e) {
      e = e || n;
      var i = function() {
        var n = arguments,
          r = e.apply(this, n);
        return r in i.cache || (i.cache[r] = t.apply(this, n)), i.cache[r]
      };
      return i.cache = {}, i
    }
  }, {}],
  171: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e;
      return function() {
        return "undefined" == typeof e && (e = t.apply(this, arguments)), e
      }
    }
  }, {}],
  172: [function(t, e, i) {
    arguments[4][9][0].apply(i, arguments)
  }, {
    "./shared/camelCasedEventTypes": 175,
    "./shared/prefixHelper": 177,
    "./shared/windowFallbackEventTypes": 180,
    "./utils/eventTypeAvailable": 181,
    dup: 9
  }],
  173: [function(t, e, i) {
    arguments[4][96][0].apply(i, arguments)
  }, {
    "./shared/getStyleTestElement": 176,
    "./shared/prefixHelper": 177,
    "./shared/stylePropertyCache": 178,
    "./utils/toCSS": 182,
    "./utils/toDOM": 183,
    dup: 96
  }],
  174: [function(t, e, i) {
    arguments[4][97][0].apply(i, arguments)
  }, {
    "./getStyleProperty": 173,
    "./shared/prefixHelper": 177,
    "./shared/stylePropertyCache": 178,
    "./shared/styleValueAvailable": 179,
    dup: 97
  }],
  175: [function(t, e, i) {
    arguments[4][10][0].apply(i, arguments)
  }, {
    dup: 10
  }],
  176: [function(t, e, i) {
    arguments[4][98][0].apply(i, arguments)
  }, {
    dup: 98
  }],
  177: [function(t, e, i) {
    arguments[4][11][0].apply(i, arguments)
  }, {
    dup: 11
  }],
  178: [function(t, e, i) {
    arguments[4][100][0].apply(i, arguments)
  }, {
    dup: 100
  }],
  179: [function(t, e, i) {
    arguments[4][101][0].apply(i, arguments)
  }, {
    "./getStyleTestElement": 176,
    "./stylePropertyCache": 178,
    dup: 101
  }],
  180: [function(t, e, i) {
    arguments[4][12][0].apply(i, arguments)
  }, {
    dup: 12
  }],
  181: [function(t, e, i) {
    arguments[4][13][0].apply(i, arguments)
  }, {
    dup: 13
  }],
  182: [function(t, e, i) {
    arguments[4][103][0].apply(i, arguments)
  }, {
    dup: 103
  }],
  183: [function(t, e, i) {
    arguments[4][104][0].apply(i, arguments)
  }, {
    dup: 104
  }],
  184: [function(t, e, i) {
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
      sessionStorageAvailable: t("./sessionStorageAvailable"),
      svgAvailable: t("./svgAvailable"),
      threeDTransformsAvailable: t("./threeDTransformsAvailable"),
      touchAvailable: t("./touchAvailable"),
      webGLAvailable: t("./webGLAvailable")
    }
  }, {
    "./canvasAvailable": 185,
    "./continuousScrollEventsAvailable": 186,
    "./cookiesAvailable": 187,
    "./cssLinearGradientAvailable": 188,
    "./cssPropertyAvailable": 189,
    "./cssViewportUnitsAvailable": 190,
    "./elementAttributeAvailable": 191,
    "./eventTypeAvailable": 192,
    "./isDesktop": 194,
    "./isHandheld": 195,
    "./isRetina": 196,
    "./isTablet": 197,
    "./localStorageAvailable": 198,
    "./mediaElementsAvailable": 199,
    "./mediaQueriesAvailable": 200,
    "./sessionStorageAvailable": 201,
    "./svgAvailable": 202,
    "./threeDTransformsAvailable": 203,
    "./touchAvailable": 204,
    "./webGLAvailable": 205
  }],
  185: [function(t, e, i) {
    "use strict";
    var n = t("./helpers/globals"),
      r = t("@marcom/ac-function/once"),
      o = function() {
        var t = n.getDocument(),
          e = t.createElement("canvas");
        return !("function" != typeof e.getContext || !e.getContext("2d"))
      };
    e.exports = r(o), e.exports.original = o
  }, {
    "./helpers/globals": 193,
    "@marcom/ac-function/once": 171
  }],
  186: [function(t, e, i) {
    "use strict";

    function n() {
      return !o() || r.os.ios && r.os.version.major >= 8 || r.browser.chrome
    }
    var r = t("@marcom/ac-useragent"),
      o = t("./touchAvailable").original,
      s = t("@marcom/ac-function/once");
    e.exports = s(n), e.exports.original = n
  }, {
    "./touchAvailable": 204,
    "@marcom/ac-function/once": 171,
    "@marcom/ac-useragent": 819
  }],
  187: [function(t, e, i) {
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
      o = t("@marcom/ac-function/once");
    e.exports = o(n), e.exports.original = n
  }, {
    "./helpers/globals": 193,
    "@marcom/ac-function/once": 171
  }],
  188: [function(t, e, i) {
    "use strict";

    function n() {
      var t = ["linear-gradient(to bottom right, #9f9, white)", "linear-gradient(top left, #9f9, white)", "gradient(linear, left top, right bottom, from(#9f9), to(white))"];
      return t.some(function(t) {
        return !!r("background-image", t)
      })
    }
    var r = t("@marcom/ac-prefixer/getStyleValue"),
      o = t("@marcom/ac-function/once");
    e.exports = o(n), e.exports.original = n
  }, {
    "@marcom/ac-function/once": 171,
    "@marcom/ac-prefixer/getStyleValue": 174
  }],
  189: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      return "undefined" != typeof e ? !!r(t, e) : !!o(t)
    }
    var r = t("@marcom/ac-prefixer/getStyleValue"),
      o = t("@marcom/ac-prefixer/getStyleProperty"),
      s = t("@marcom/ac-function/memoize");
    e.exports = s(n), e.exports.original = n
  }, {
    "@marcom/ac-function/memoize": 170,
    "@marcom/ac-prefixer/getStyleProperty": 173,
    "@marcom/ac-prefixer/getStyleValue": 174
  }],
  190: [function(t, e, i) {
    "use strict";

    function n() {
      return !!r("margin", "1vw 1vh")
    }
    var r = t("@marcom/ac-prefixer/getStyleValue"),
      o = t("@marcom/ac-function/once");
    e.exports = o(n), e.exports.original = n
  }, {
    "@marcom/ac-function/once": 171,
    "@marcom/ac-prefixer/getStyleValue": 174
  }],
  191: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      var i, n = r.getDocument();
      return e = e || "div", i = n.createElement(e), t in i
    }
    var r = t("./helpers/globals"),
      o = t("@marcom/ac-function/memoize");
    e.exports = o(n), e.exports.original = n
  }, {
    "./helpers/globals": 193,
    "@marcom/ac-function/memoize": 170
  }],
  192: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      return !!r(t, e)
    }
    var r = t("@marcom/ac-prefixer/getEventType"),
      o = t("@marcom/ac-function/memoize");
    e.exports = o(n), e.exports.original = n
  }, {
    "@marcom/ac-function/memoize": 170,
    "@marcom/ac-prefixer/getEventType": 172
  }],
  193: [function(t, e, i) {
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
  194: [function(t, e, i) {
    "use strict";

    function n() {
      var t = o.getWindow();
      return !r() && !t.orientation
    }
    var r = t("./touchAvailable").original,
      o = t("./helpers/globals"),
      s = t("@marcom/ac-function/once");
    e.exports = s(n), e.exports.original = n
  }, {
    "./helpers/globals": 193,
    "./touchAvailable": 204,
    "@marcom/ac-function/once": 171
  }],
  195: [function(t, e, i) {
    "use strict";

    function n() {
      return !r() && !o()
    }
    var r = t("./isDesktop").original,
      o = t("./isTablet").original,
      s = t("@marcom/ac-function/once");
    e.exports = s(n), e.exports.original = n
  }, {
    "./isDesktop": 194,
    "./isTablet": 197,
    "@marcom/ac-function/once": 171
  }],
  196: [function(t, e, i) {
    "use strict";
    var n = t("./helpers/globals");
    e.exports = function() {
      var t = n.getWindow();
      return "devicePixelRatio" in t && t.devicePixelRatio >= 1.5
    }
  }, {
    "./helpers/globals": 193
  }],
  197: [function(t, e, i) {
    "use strict";

    function n() {
      var t = o.getWindow(),
        e = t.screen.width;
      return t.orientation && t.screen.height < e && (e = t.screen.height), !r() && e >= a
    }
    var r = t("./isDesktop").original,
      o = t("./helpers/globals"),
      s = t("@marcom/ac-function/once"),
      a = 600;
    e.exports = s(n), e.exports.original = n
  }, {
    "./helpers/globals": 193,
    "./isDesktop": 194,
    "@marcom/ac-function/once": 171
  }],
  198: [function(t, e, i) {
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
      o = t("@marcom/ac-function/once");
    e.exports = o(n), e.exports.original = n
  }, {
    "./helpers/globals": 193,
    "@marcom/ac-function/once": 171
  }],
  199: [function(t, e, i) {
    "use strict";

    function n() {
      var t = r.getWindow();
      return "HTMLMediaElement" in t
    }
    var r = t("./helpers/globals"),
      o = t("@marcom/ac-function/once");
    e.exports = o(n), e.exports.original = n
  }, {
    "./helpers/globals": 193,
    "@marcom/ac-function/once": 171
  }],
  200: [function(t, e, i) {
    "use strict";

    function n() {
      var t = r.getWindow(),
        e = t.matchMedia("only all");
      return !(!e || !e.matches)
    }
    t("@marcom/ac-polyfills/matchMedia");
    var r = t("./helpers/globals"),
      o = t("@marcom/ac-function/once");
    e.exports = o(n), e.exports.original = n
  }, {
    "./helpers/globals": 193,
    "@marcom/ac-function/once": 171,
    "@marcom/ac-polyfills/matchMedia": void 0
  }],
  201: [function(t, e, i) {
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
      o = t("@marcom/ac-function/once");
    e.exports = o(n), e.exports.original = n
  }, {
    "./helpers/globals": 193,
    "@marcom/ac-function/once": 171
  }],
  202: [function(t, e, i) {
    "use strict";

    function n() {
      var t = r.getDocument();
      return !!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
    }
    var r = t("./helpers/globals"),
      o = t("@marcom/ac-function/once");
    e.exports = o(n), e.exports.original = n
  }, {
    "./helpers/globals": 193,
    "@marcom/ac-function/once": 171
  }],
  203: [function(t, e, i) {
    "use strict";

    function n() {
      return !(!r("perspective", "1px") || !r("transform", "translateZ(0)"))
    }
    var r = t("@marcom/ac-prefixer/getStyleValue"),
      o = t("@marcom/ac-function/once");
    e.exports = o(n), e.exports.original = n
  }, {
    "@marcom/ac-function/once": 171,
    "@marcom/ac-prefixer/getStyleValue": 174
  }],
  204: [function(t, e, i) {
    "use strict";

    function n() {
      var t = r.getWindow(),
        e = r.getDocument(),
        i = r.getNavigator();
      return !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch || i.maxTouchPoints > 0 || i.msMaxTouchPoints > 0)
    }
    var r = t("./helpers/globals"),
      o = t("@marcom/ac-function/once");
    e.exports = o(n), e.exports.original = n
  }, {
    "./helpers/globals": 193,
    "@marcom/ac-function/once": 171
  }],
  205: [function(t, e, i) {
    "use strict";

    function n() {
      var t = r.getDocument(),
        e = t.createElement("canvas");
      return "function" == typeof e.getContext && !(!e.getContext("webgl") && !e.getContext("experimental-webgl"))
    }
    var r = t("./helpers/globals"),
      o = t("@marcom/ac-function/once");
    e.exports = o(n), e.exports.original = n
  }, {
    "./helpers/globals": 193,
    "@marcom/ac-function/once": 171
  }],
  206: [function(t, e, i) {
    "use strict";
    var n = t("./ac-browser/BrowserData"),
      r = /applewebkit/i,
      o = t("./ac-browser/IE"),
      s = n.create();
    s.isWebKit = function(t) {
      var e = t || window.navigator.userAgent;
      return !!e && !!r.test(e)
    }, s.lowerCaseUserAgent = navigator.userAgent.toLowerCase(), "IE" === s.name && (s.IE = {
      documentMode: o.getDocumentMode()
    }), e.exports = s
  }, {
    "./ac-browser/BrowserData": 207,
    "./ac-browser/IE": 208
  }],
  207: [function(t, e, i) {
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
              o = t.indexOf(r);
            if (o > -1) return i = parseFloat(t.substring(o + r.length + 1)), !0
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
            o = new RegExp(n + " ([\\d_\\.]+)", "i"),
            s = t.match(o);
          return null !== s ? s[1].replace(/_/g, ".") : void 0
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
    "./data": 209,
    "@marcom/ac-polyfills/Array/prototype.filter": void 0,
    "@marcom/ac-polyfills/Array/prototype.some": void 0
  }],
  208: [function(t, e, i) {
    "use strict";
    e.exports = {
      getDocumentMode: function() {
        var t;
        return document.documentMode ? t = parseInt(document.documentMode, 10) : (t = 5, document.compatMode && "CSS1Compat" === document.compatMode && (t = 7)), t
      }
    }
  }, {}],
  209: [function(t, e, i) {
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
  210: [function(t, e, i) {
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
    "./className/add": 212,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0
  }],
  211: [function(t, e, i) {
    "use strict";
    e.exports = {
      add: t("./className/add"),
      contains: t("./className/contains"),
      remove: t("./className/remove")
    }
  }, {
    "./className/add": 212,
    "./className/contains": 213,
    "./className/remove": 215
  }],
  212: [function(t, e, i) {
    "use strict";
    var n = t("./contains");
    e.exports = function(t, e) {
      n(t, e) || (t.className += " " + e)
    }
  }, {
    "./contains": 213
  }],
  213: [function(t, e, i) {
    "use strict";
    var n = t("./getTokenRegExp");
    e.exports = function(t, e) {
      return n(e).test(t.className)
    }
  }, {
    "./getTokenRegExp": 214
  }],
  214: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return new RegExp("(\\s|^)" + t + "(\\s|$)")
    }
  }, {}],
  215: [function(t, e, i) {
    "use strict";
    var n = t("./contains"),
      r = t("./getTokenRegExp");
    e.exports = function(t, e) {
      n(t, e) && (t.className = t.className.replace(r(e), "$1").trim())
    }
  }, {
    "./contains": 213,
    "./getTokenRegExp": 214
  }],
  216: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Element/prototype.classList");
    var n = t("./className/contains");
    e.exports = function(t, e) {
      return t.classList && t.classList.contains ? t.classList.contains(e) : n(t, e)
    }
  }, {
    "./className/contains": 213,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0
  }],
  217: [function(t, e, i) {
    "use strict";
    e.exports = {
      add: t("./add"),
      contains: t("./contains"),
      remove: t("./remove"),
      toggle: t("./toggle")
    }
  }, {
    "./add": 210,
    "./contains": 216,
    "./remove": 218,
    "./toggle": 219
  }],
  218: [function(t, e, i) {
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
    "./className/remove": 215,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0
  }],
  219: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Element/prototype.classList");
    var n = t("./className");
    e.exports = function(t, e, i) {
      var r, o = "undefined" != typeof i;
      return t.classList && t.classList.toggle ? o ? t.classList.toggle(e, i) : t.classList.toggle(e) : (r = o ? !!i : !n.contains(t, e), r ? n.add(t, e) : n.remove(t, e), r)
    }
  }, {
    "./className": 211,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0
  }],
  220: [function(t, e, i) {
    e.exports.EventEmitter = t("./ac-event-emitter/EventEmitter")
  }, {
    "./ac-event-emitter/EventEmitter": 221
  }],
  221: [function(t, e, i) {
    "use strict";
    var n = "EventEmitter:propagation",
      r = function(t) {
        t && (this.context = t)
      },
      o = r.prototype,
      s = function() {
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
          for (var o in i) e.call(this, o, i[o], r);
        "string" == typeof i && (i = i.split(" "), i.forEach(function(t) {
          e.call(this, t, n, r)
        }, this))
      },
      c = function(t, e) {
        var i, n, r;
        if (i = s.call(this)[t], i && 0 !== i.length)
          for (i = i.slice(), this._stoppedImmediatePropagation = !1, n = 0, r = i.length; n < r && (!this._stoppedImmediatePropagation && !e(i[n], n)); n++);
      },
      l = function(t, e, i) {
        var n = -1;
        c.call(this, e, function(t, e) {
          if (t.callback === i) return n = e, !0
        }), n !== -1 && t[e].splice(n, 1)
      };
    o.on = function() {
      var t = s.call(this);
      return a.call(this, arguments, function(e, i, n) {
        t[e] = t[e] || (t[e] = []), t[e].push({
          callback: i,
          context: n
        })
      }), this
    }, o.once = function() {
      return a.call(this, arguments, function(t, e, i) {
        var n = function(r) {
          e.call(i || this, r), this.off(t, n)
        };
        this.on(t, n, this)
      }), this
    }, o.off = function(t, e) {
      var i = s.call(this);
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
    }, o.trigger = function(t, e, i) {
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
    }, o.propagateTo = function(t, e) {
      var i = s.call(this);
      i[n] || (this._events[n] = []), i[n].push({
        emitter: t,
        prefix: e
      })
    }, o.stopPropagatingTo = function(t) {
      var e = s.call(this);
      if (!t) return void(e[n] = []);
      var i, r = e[n],
        o = r.length;
      for (i = 0; i < o; i++)
        if (r[i].emitter === t) {
          r.splice(i, 1);
          break
        }
    }, o.stopImmediatePropagation = function() {
      this._stoppedImmediatePropagation = !0
    }, o.has = function(t, e, i) {
      var n = s.call(this),
        r = n[t];
      if (0 === arguments.length) return Object.keys(n);
      if (!r) return !1;
      if (!e) return r.length > 0;
      for (var o = 0, a = r.length; o < a; o++) {
        var c = r[o];
        if (i && e && c.context === i && c.callback === e) return !0;
        if (e && !i && c.callback === e) return !0
      }
      return !1
    }, e.exports = r
  }, {}],
  222: [function(t, e, i) {
    "use strict";
    e.exports = {
      TouchClick: t("./ac-gesture-touchclick/TouchClick")
    }
  }, {
    "./ac-gesture-touchclick/TouchClick": 223
  }],
  223: [function(t, e, i) {
    "use strict";

    function n(t) {
      t = t || {}, this.el = t.el, this._onTouchStart = this._onTouchStart.bind(this), this._onTouchMove = this._onTouchMove.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onClick = this._onClick.bind(this), this._touchStart = !1, this.activate()
    }
    var r = t("@marcom/ac-dom-events"),
      o = t("@marcom/ac-event-emitter").EventEmitter,
      s = t("@marcom/ac-object"),
      a = t("@marcom/ac-feature"),
      c = n.prototype = s.create(o.prototype);
    c._broadcastClick = function(t) {
      this.trigger("click", {
        originalEvent: t
      })
    }, c._onClick = function(t) {
      r.stop(t), this._touchAvailable() || this._broadcastClick(t)
    }, c._onTouchStart = function() {
      this._touchStart = !0
    }, c._onTouchEnd = function(t) {
      this._touchStart === !0 && (r.stop(t), this._broadcastClick(t)), this._touchStart = !1
    }, c._onTouchMove = function() {
      this._touchStart = !1
    }, c._touchAvailable = function() {
      return a.touchAvailable()
    }, c.activate = function() {
      this._touchAvailable() && (r.addEventListener(this.el, "touchstart", this._onTouchStart), r.addEventListener(this.el, "touchmove", this._onTouchMove), r.addEventListener(this.el, "touchend", this._onTouchEnd)), r.addEventListener(this.el, "click", this._onClick)
    }, c.deactivate = function() {
      r.removeEventListener(this.el, "touchstart", this._onTouchStart), r.removeEventListener(this.el, "touchmove", this._onTouchMove), r.removeEventListener(this.el, "touchend", this._onTouchEnd), r.removeEventListener(this.el, "click", this._onClick)
    }, n.create = function(t, e) {
      return e = e || {}, new n({
        el: t
      })
    }, e.exports = n
  }, {
    "@marcom/ac-dom-events": 8,
    "@marcom/ac-event-emitter": 220,
    "@marcom/ac-feature": 184,
    "@marcom/ac-object": 804
  }],
  224: [function(t, e, i) {
    "use strict";

    function n(t) {
      this._keysDown = {}, this._DOMKeyDown = this._DOMKeyDown.bind(this), this._DOMKeyUp = this._DOMKeyUp.bind(this), this._context = t || document, o(this._context, l, this._DOMKeyDown, !0), o(this._context, u, this._DOMKeyUp, !0), r.call(this)
    }
    var r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      o = t("@marcom/ac-dom-events/utils/addEventListener"),
      s = t("@marcom/ac-dom-events/utils/removeEventListener"),
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
      return s(this._context, l, this._DOMKeyDown, !0), s(this._context, u, this._DOMKeyUp, !0), this._keysDown = null, this._context = null, r.prototype.destroy.call(this), this
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
    "./internal/KeyEvent": 226,
    "@marcom/ac-dom-events/utils/addEventListener": 20,
    "@marcom/ac-dom-events/utils/removeEventListener": 22,
    "@marcom/ac-event-emitter-micro": 168,
    "@marcom/ac-object/create": 806
  }],
  225: [function(t, e, i) {
    "use strict";
    var n = t("./Keyboard");
    e.exports = new n
  }, {
    "./Keyboard": 224
  }],
  226: [function(t, e, i) {
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
  227: [function(t, e, i) {
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
  228: [function(t, e, i) {
    arguments[4][220][0].apply(i, arguments)
  }, {
    "./ac-event-emitter/EventEmitter": 229,
    dup: 220
  }],
  229: [function(t, e, i) {
    arguments[4][221][0].apply(i, arguments)
  }, {
    dup: 221
  }],
  230: [function(t, e, i) {
    "use strict";
    e.exports = {
      DOMEmitter: t("./ac-dom-emitter/DOMEmitter")
    }
  }, {
    "./ac-dom-emitter/DOMEmitter": 231
  }],
  231: [function(t, e, i) {
    "use strict";

    function n(t) {
      null !== t && (this.el = t, this._bindings = {}, this._delegateFuncs = {}, this._eventEmitter = new o)
    }
    var r, o = t("ac-event-emitter").EventEmitter,
      s = t("./DOMEmitterEvent"),
      a = {
        addEventListener: t("@marcom/ac-dom-events/addEventListener"),
        removeEventListener: t("@marcom/ac-dom-events/removeEventListener"),
        dispatchEvent: t("@marcom/ac-dom-events/dispatchEvent")
      },
      c = {
        querySelectorAll: t("@marcom/ac-dom-traversal/querySelectorAll"),
        matchesSelector: t("@marcom/ac-dom-traversal/matchesSelector")
      },
      l = "dom-emitter";
    r = n.prototype, r.on = function() {
      return this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments, 0), this._on), this
    }, r.once = function() {
      return this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments, 0), this._once), this
    }, r.off = function() {
      return this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments, 0), this._off), this
    }, r.has = function(t, e, i, n) {
      var r, o;
      if ("string" == typeof e ? (r = e, o = i) : (o = e, n = i), r) {
        var s = this._getDelegateFuncBindingIdx(t, r, o, n, !0);
        return s > -1
      }
      return !(!this._eventEmitter || !this._eventEmitter.has.apply(this._eventEmitter, arguments))
    }, r.trigger = function(t, e, i, n) {
      t = this._parseEventNames(t), t = this._cleanStringData(t);
      var r, o, s, a = t.length;
      for ("string" == typeof e ? (r = this._cleanStringData(e), o = i) : (o = e, n = i), s = 0; s < a; s++) this._triggerDOMEvents(t[s], o, r);
      return this
    }, r.emitterTrigger = function(t, e, i) {
      if (!this._eventEmitter) return this;
      t = this._parseEventNames(t), t = this._cleanStringData(t), e = new s(e, this);
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
      var i = new s(e, this);
      this._eventEmitter.trigger(t, i, !1)
    }, r._setListener = function(t) {
      this._bindings[t] = this._onListenerEvent.bind(this, t), a.addEventListener(this.el, t, this._bindings[t])
    }, r._removeListener = function(t) {
      a.removeEventListener(this.el, t, this._bindings[t]), this._bindings[t] = null
    }, r._triggerInternalEvent = function(t, e) {
      this.emitterTrigger(l + ":" + t, e)
    }, r._normalizeArgumentsAndCall = function(t, e) {
      var i = {};
      if (0 === t.length) return void e.call(this, i);
      if ("string" == typeof t[0] || null === t[0]) return t = this._cleanStringData(t), i.events = t[0], "string" == typeof t[1] ? (i.delegateQuery = t[1], i.callback = t[2], i.context = t[3]) : (i.callback = t[1], i.context = t[2]), void e.call(this, i);
      var n, r, o = ":",
        s = t[0];
      for (n in s) s.hasOwnProperty(n) && (i = {}, r = this._cleanStringData(n.split(o)), i.events = r[0], i.delegateQuery = r[1], i.callback = s[n], i.context = t[1], e.call(this, i))
    }, r._registerDelegateFunc = function(t, e, i, n, r) {
      var o = this._delegateFunc.bind(this, t, e, i, r);
      return this._delegateFuncs[e] = this._delegateFuncs[e] || {}, this._delegateFuncs[e][t] = this._delegateFuncs[e][t] || [], this._delegateFuncs[e][t].push({
        func: n,
        context: r,
        delegateFunc: o
      }), o
    }, r._cleanStringData = function(t) {
      var e = !1;
      "string" == typeof t && (t = [t], e = !0);
      var i, n, r, o = [],
        s = t.length;
      for (i = 0; i < s; i++) {
        if (n = t[i], "string" == typeof n) {
          if ("" === n || " " === n) continue;
          for (r = n.length;
            " " === n[0];) n = n.slice(1, r), r--;
          for (;
            " " === n[r - 1];) n = n.slice(0, r - 1), r--
        }
        o.push(n)
      }
      return e ? o[0] : o
    }, r._unregisterDelegateFunc = function(t, e, i, n) {
      if (this._delegateFuncs[e] && this._delegateFuncs[e][t]) {
        var r, o = this._getDelegateFuncBindingIdx(t, e, i, n);
        return o > -1 && (r = this._delegateFuncs[e][t][o].delegateFunc, this._delegateFuncs[e][t].splice(o, 1), 0 === this._delegateFuncs[e][t].length && (this._delegateFuncs[e][t] = null)), r
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
          s = o.slice(4, o.length);
        n = n || window, "object" == typeof r.detail && (s[0] = r.detail), i.apply(n, s)
      }
    }, r._targetHasDelegateAncestor = function(t, e) {
      for (var i = t; i && i !== this.el && i !== document.documentElement;) {
        if (c.matchesSelector(i, e)) return !0;
        i = i.parentNode
      }
      return !1
    }, r._on = function(t) {
      var e = t.events,
        i = t.callback,
        n = t.delegateQuery,
        r = t.context,
        o = t.unboundCallback || i;
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
      }.bind(this, i, o, r, n)), e = i = o = n = r = null
    }, r._off = function(t) {
      var e = t.events,
        i = t.callback,
        n = t.delegateQuery,
        r = t.context,
        o = t.unboundCallback || i;
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
      }.bind(this, i, o, r, n)), e = i = o = n = r = null;
      else {
        this._eventEmitter.off();
        var s;
        for (s in this._bindings) this._bindings.hasOwnProperty(s) && this._removeListener(s);
        for (s in this._delegateFuncs) this._delegateFuncs.hasOwnProperty(s) && (this._delegateFuncs[s] = null)
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
        o = r.slice(4, r.length);
      e.apply(i, o), this._off({
        events: t,
        delegateQuery: n,
        callback: e,
        context: i
      })
    }, r._getDelegateFuncBindingIdx = function(t, e, i, n, r) {
      var o = -1;
      if (this._delegateFuncs[e] && this._delegateFuncs[e][t]) {
        var s, a, c = this._delegateFuncs[e][t].length;
        for (s = 0; s < c; s++)
          if (a = this._delegateFuncs[e][t][s], r && "undefined" == typeof i && (i = a.func), a.func === i && a.context === n) {
            o = s;
            break
          }
      }
      return o
    }, r._triggerDOMEvents = function(t, e, i) {
      var n = [this.el];
      i && (n = c.querySelectorAll(i, this.el));
      var r, o = n.length;
      for (r = 0; r < o; r++) a.dispatchEvent(n[r], t, {
        bubbles: !0,
        cancelable: !0,
        detail: e
      })
    }, e.exports = n
  }, {
    "./DOMEmitterEvent": 232,
    "@marcom/ac-dom-events/addEventListener": 6,
    "@marcom/ac-dom-events/dispatchEvent": 7,
    "@marcom/ac-dom-events/removeEventListener": 15,
    "@marcom/ac-dom-traversal/matchesSelector": 56,
    "@marcom/ac-dom-traversal/querySelectorAll": 62,
    "ac-event-emitter": 228
  }],
  232: [function(t, e, i) {
    "use strict";
    var n, r = {
        preventDefault: t("@marcom/ac-dom-events/preventDefault"),
        stopPropagation: t("@marcom/ac-dom-events/stopPropagation"),
        target: t("@marcom/ac-dom-events/target")
      },
      o = function(t, e) {
        this._domEmitter = e, this.originalEvent = t || {}, this._originalTarget = r.target(this.originalEvent), this.target = this._originalTarget || this._domEmitter.el, this.currentTarget = this._domEmitter.el, this.timeStamp = this.originalEvent.timeStamp || Date.now(), this._isDOMEvent(this.originalEvent) ? "object" == typeof this.originalEvent.detail && (this.data = this.originalEvent.detail) : t && (this.data = this.originalEvent, this.originalEvent = {})
      };
    n = o.prototype, n.preventDefault = function() {
      r.preventDefault(this.originalEvent)
    }, n.stopPropagation = function() {
      r.stopPropagation(this.originalEvent)
    }, n.stopImmediatePropagation = function() {
      this.originalEvent.stopImmediatePropagation && this.originalEvent.stopImmediatePropagation(), this._domEmitter.stopImmediatePropagation()
    }, n._isDOMEvent = function(t) {
      return !!(this._originalTarget || "undefined" !== document.createEvent && "undefined" != typeof CustomEvent && t instanceof CustomEvent)
    }, e.exports = o
  }, {
    "@marcom/ac-dom-events/preventDefault": 14,
    "@marcom/ac-dom-events/stopPropagation": 18,
    "@marcom/ac-dom-events/target": 19
  }],
  233: [function(t, e, i) {
    "use strict";
    var n = t("./ac-modal-video/ModalVideo");
    n.create = t("./ac-modal-video/factory/create"), e.exports = {
      ModalVideo: n
    }
  }, {
    "./ac-modal-video/ModalVideo": 234,
    "./ac-modal-video/factory/create": 237
  }],
  234: [function(t, e, i) {
    "use strict";
    var n, r = t("ac-modal"),
      o = t("@marcom/ac-object"),
      s = t("@marcom/ac-classlist"),
      a = t("@marcom/ac-event-emitter").EventEmitter,
      c = t("./featureDetect/featureDetect"),
      l = t("./delegate/Default"),
      u = t("./delegate/Mobile"),
      h = {
        deepLink: !1,
        playOnOpen: !1,
        closeOnEnded: !1,
        autoAppend: !0
      },
      d = function(t, e) {
        this.options = o.defaults(h, e || {}), this.modal = this.options.modal || new r.Modal, this._delegate = this._createDelegate(), this.setPlayer(t), this.options.autoAppend && this.appendPlayer(t), s.add(this.modal.modalEl, "ac-modal-video"), this.modal.propagateTo(this), this.modal.on("willclose", this._willClose, this)
      };
    n = d.prototype = o.create(a.prototype), n._createDelegate = function() {
      var t = l;
      return c.shouldPlayInModal() === !1 && (t = u), new t(this.player, this.modal, this.options)
    }, n.appendPlayer = function(t) {
      var e = document.createElement("div");
      t.appendTo(e), this.modal.appendContent(e)
    }, n.getPlayer = function() {
      return this._delegate.getPlayer()
    }, n.setPlayer = function(t) {
      return this._delegate.setPlayer(t)
    }, n.open = function() {
      this._delegate.open()
    }, n.close = function() {
      this._delegate.close()
    }, n._willClose = function() {
      this._delegate.willClose()
    }, n._pause = function() {
      this._delegate.pause()
    }, e.exports = d
  }, {
    "./delegate/Default": 235,
    "./delegate/Mobile": 236,
    "./featureDetect/featureDetect": 239,
    "@marcom/ac-classlist": 217,
    "@marcom/ac-event-emitter": 220,
    "@marcom/ac-object": 804,
    "ac-modal": 589
  }],
  235: [function(t, e, i) {
    "use strict";

    function n(t, e, i) {
      this.player = t, this.modal = e, this.options = i
    }
    var r = t("@marcom/ac-browser"),
      o = n.prototype;
    o.pause = function() {
      this.player && this.player.getReadyState() > 0 && this.player.pause()
    }, o.play = function() {
      this.player && this.player.getReadyState() > 0 ? this.player.play() : this.player.once("loadedmetadata", this.player.play, this.player)
    }, o._bindPlayerEvents = function() {
      this.player.on("ended", this._onEnded, this)
    }, o._unbindPlayerEvents = function() {
      this.player.off("ended", this._onEnded, this), this.player.off("loadedmetadata", this.player.play, this.player), this.player.off("timeupdate", this.pause, this), this.player.off("play", this.pause, this)
    }, o.open = function() {
      this.player && this.player.has("timeupdate", this._onTimeUpdateOnce) && this.player.off("timeupdate", this._onTimeUpdateOnce), this.modal.open(), this.player && this.player.getPaused() && (this.player.off("play", this.pause), this.options.playOnOpen && this.play())
    }, o.getPlayer = function() {
      return this.player
    }, o.setPlayer = function(t) {
      this.player && this._unbindPlayerEvents(), this.player = t, this._bindPlayerEvents()
    }, o._closeModal = function() {
      this.modal.close()
    }, o._handleExitFullScreen = function() {
      setTimeout(this._closeModal.bind(this), 400)
    }, o.close = function() {
      return "firefox" !== r.name.toLowerCase() && this.player && this.player.isFullscreen() ? (this._boundHandleExitFullScreen = this._handleExitFullScreen.bind(this), this.player.once("exitfullscreen", this._boundHandleExitFullScreen), void this.player.exitFullscreen()) : void this.modal.close()
    }, o.willClose = function() {
      this.player && this.player.isFullscreen() && this.player.exitFullscreen(), this.player && this.player.getReadyState() > 0 ? this.player.getEnded() === !1 && this.pause() : this.player && this.player.on("play", this.pause, this), this.player && this.player.getEnded() === !1 && this.player.on("timeupdate", this._onTimeUpdateOnce, this)
    }, o._onEnded = function() {
      this.options.closeOnEnded && this.close()
    }, o._onTimeUpdateOnce = function() {
      this.pause(), this.player.off("timeupdate", this._onTimeUpdateOnce)
    }, e.exports = n
  }, {
    "@marcom/ac-browser": 206
  }],
  236: [function(t, e, i) {
    "use strict";

    function n() {
      o.apply(this, arguments)
    }
    var r = t("@marcom/ac-object"),
      o = t("./Default"),
      s = n.prototype = r.create(o.prototype);
    s.open = function() {
      this.player.play()
    }, e.exports = n
  }, {
    "./Default": 235,
    "@marcom/ac-object": 804
  }],
  237: [function(t, e, i) {
    "use strict";
    var n = t("./../ModalVideo"),
      r = t("@marcom/ac-dom-emitter").DOMEmitter,
      o = t("./router");
    e.exports = function(t, e) {
      e = e || {};
      var i, s = new n(t, e);
      if (e.deepLink && (i = o.createOrGet(), i.createRoute(e.deepLink, s.open, s), i.start()), e.triggerSelector) {
        var a = new r(document);
        a.on("click", e.triggerSelector, function(t) {
          t.preventDefault(), s.open()
        }, s)
      }
      return s
    }
  }, {
    "./../ModalVideo": 234,
    "./router": 238,
    "@marcom/ac-dom-emitter": 230
  }],
  238: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-router"),
      r = null;
    e.exports = {
      create: function() {
        r = new n.Router({
          hashChange: !0,
          pushState: !1
        })
      },
      get: function() {
        return r
      },
      destroy: function() {
        r = null
      },
      createOrGet: function() {
        return null === r && this.create(), this.get()
      }
    }
  }, {
    "@marcom/ac-router": 248
  }],
  239: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-browser"),
      r = t("@marcom/ac-feature");
    e.exports = {
      shouldPlayInModal: function() {
        return !(r.isHandheld() && "ios" === n.os.toLowerCase())
      }
    }
  }, {
    "@marcom/ac-browser": 206,
    "@marcom/ac-feature": 184
  }],
  240: [function(t, e, i) {
    arguments[4][220][0].apply(i, arguments)
  }, {
    "./ac-event-emitter/EventEmitter": 241,
    dup: 220
  }],
  241: [function(t, e, i) {
    arguments[4][221][0].apply(i, arguments)
  }, {
    dup: 221
  }],
  242: [function(t, e, i) {
    arguments[4][230][0].apply(i, arguments)
  }, {
    "./ac-dom-emitter/DOMEmitter": 243,
    dup: 230
  }],
  243: [function(t, e, i) {
    arguments[4][231][0].apply(i, arguments)
  }, {
    "./DOMEmitterEvent": 244,
    "@marcom/ac-dom-events/addEventListener": 6,
    "@marcom/ac-dom-events/dispatchEvent": 7,
    "@marcom/ac-dom-events/removeEventListener": 15,
    "@marcom/ac-dom-traversal/matchesSelector": 56,
    "@marcom/ac-dom-traversal/querySelectorAll": 62,
    "ac-event-emitter": 240,
    dup: 231
  }],
  244: [function(t, e, i) {
    arguments[4][232][0].apply(i, arguments)
  }, {
    "@marcom/ac-dom-events/preventDefault": 14,
    "@marcom/ac-dom-events/stopPropagation": 18,
    "@marcom/ac-dom-events/target": 19,
    dup: 232
  }],
  245: [function(t, e, i) {
    "use strict";
    e.exports = {
      Routes: t("./ac-routes/Routes"),
      Route: t("./ac-routes/Route")
    }
  }, {
    "./ac-routes/Route": 246,
    "./ac-routes/Routes": 247
  }],
  246: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n, r) {
      if (this.path = t, this.callback = e, this.context = i, this.greedy = n || !1, this.priority = r || 0, "number" != typeof this.priority) throw new Error("Priority must be a Number.");
      this.identifierPattern = "([a-zA-Z0-9\\-\\_]+)", this.tokensRe = new RegExp(":" + this.identifierPattern, "g"), this.matcher = this._createRouteMatcher(t)
    }
    var r = n.prototype;
    r._createRouteMatcher = function(t) {
      if (t && t.exec) return {
        pattern: t
      };
      if ("/" === t) return {
        pattern: /^\/$/
      };
      if ("string" != typeof t) throw new Error("path must be either a string or regex");
      var e = this._extractRouteTokens(t),
        i = t.replace(this.tokensRe, this.identifierPattern),
        n = new RegExp(i, "g");
      return {
        pattern: n,
        routeTokens: e
      }
    }, r._extractRouteTokens = function(t) {
      var e = t.replace(this.tokensRe, ":" + this.identifierPattern),
        i = new RegExp(e, "g"),
        n = i.exec(t);
      return n = n && n.length > 1 ? n.slice(1) : null
    }, r.match = function(t) {
      this.matcher.pattern.lastIndex = 0;
      var e = this.matcher.pattern.exec(t);
      if (e) {
        var i = e.length ? e.slice(1) : [],
          n = this.callback;
        if (n && "function" == typeof n) return n.apply(this.context || this, i), !0
      }
      return !1
    }, e.exports = n
  }, {}],
  247: [function(t, e, i) {
    "use strict";

    function n(t) {
      this._routes = {}, t && this.addRoutes(t)
    }
    var r = t("./Route"),
      o = n.prototype;
    o._getIndex = function(t, e, i) {
      if (void 0 !== this._routes[t])
        for (var n = this._routes[t].length; --n > -1;)
          if (this._routes[t][n].callback === e && this._routes[t][n].context === i) return n;
      return -1
    }, o.match = function(t) {
      var e, i;
      for (e in this._routes)
        for (i = this._routes[e].length; --i > -1 && (!this._routes[e][i].match(t) || !this._routes[e][i].greedy););
    }, o.add = function(t) {
      if (void 0 === this._routes[t.path]) this._routes[t.path] = [t];
      else if (!this.get(t.path, t.callback, t.context)) {
        var e, i = this._routes[t.path].length;
        if (i > 0)
          for (e = 0; e < i; ++e)
            if (this._routes[t.path][e].priority > t.priority) return this._routes[t.path].splice(e, 0, t), t;
        this._routes[t.path].push(t)
      }
      return t
    }, o.remove = function(t) {
      var e = this._getIndex(t.path, t.callback, t.context);
      return e > -1 && (this._routes[t.path].splice(e, 1), t)
    }, o.get = function(t, e, i) {
      var n = this._getIndex(t, e, i);
      return n > -1 && this._routes[t][n]
    }, o.createRoute = function(t, e, i, n, o) {
      var s = new r(t, e, i, n, o);
      return this.add(s), s
    }, o.addRoutes = function(t) {
      if (!(t instanceof Array)) throw new Error("routes must be an Array.");
      var e, i, n = t.length;
      for (e = 0; e < n; ++e) i = t[e], i && "object" == typeof i && this.add(i)
    }, o.removeRoutes = function(t) {
      if (!(t instanceof Array)) throw new Error("routes must be an Array.");
      var e, i, n = t.length;
      for (e = 0; e < n; ++e) i = t[e], i && "object" == typeof i && this.remove(i)
    }, o.getRoutes = function(t) {
      return void 0 === this._routes[t] ? [] : this._routes[t]
    }, e.exports = n
  }, {
    "./Route": 246
  }],
  248: [function(t, e, i) {
    "use strict";
    e.exports = {
      Router: t("./ac-router/Router"),
      History: t("./ac-router/History"),
      Routes: t("@marcom/ac-routes").Routes,
      Route: t("@marcom/ac-routes").Route
    }
  }, {
    "./ac-router/History": 249,
    "./ac-router/Router": 250,
    "@marcom/ac-routes": 245
  }],
  249: [function(t, e, i) {
    "use strict";

    function n(t) {
      t = t || {}, this.history = window.history, this.rootStripper = /^\/+|\/+$/g, this.root = t.root || "/", this.root = ("/" + this.root + "/").replace(this.rootStripper, "/");
      var e = "boolean" != typeof t.resolveInitialHash || t.resolveInitialHash;
      this._pushState = "boolean" != typeof t.pushState || t.pushState, this._hashChange = t.hashChange || !1, this._setUpdateVars(e), t.autoStart && this.start()
    }
    var r = t("@marcom/ac-object").create,
      o = t("@marcom/ac-dom-events"),
      s = t("@marcom/ac-event-emitter").EventEmitter,
      a = n.prototype = r(s.prototype);
    a._isRoot = function(t) {
      return ("/" + t + "/").replace(this.rootStripper, "/") === this.root
    }, a._isPushStateSupported = function() {
      return this.history && this.history.pushState
    }, a._isHashChangeSupported = function() {
      return "onhashchange" in window
    }, a._setUpdateVars = function(t) {
      if (this._pushState && this._isPushStateSupported()) t && this._hashChange && window.location.href.indexOf("#") !== -1 && this.history.pushState({}, document.title, window.location.href.replace("#", "")), this._hashChange = !1;
      else {
        if (t && this._pushState && this._hashChange && window.location.href.indexOf("#") < 0) {
          window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.hostname, window.location.origin += window.location.port ? ":" + window.location.port : "");
          var e = window.location.href.substr(window.location.origin.length + this.root.length);
          if (e.length) return void(window.location = window.location.origin + this.root + "#" + e)
        }
        this._hashChange && !this._isHashChangeSupported() && (this._interval = 50, this._iframe = document.createElement('<iframe src="javascript:0" tabindex="-1" style="display:none;">'), this._iframe = document.body.appendChild(this._iframe).contentWindow, this._iframe.document.open().close()), this._pushState = !1
      }
    }, a._checkUrl = function() {
      var t = this._iframe.location.hash.substr(1);
      0 === t.length && (t = "/"), this.fragment() !== t && (window.location.hash = "#" + t, this._ignoreHashChange = !1, this._handleHashChange())
    }, a._handlePopState = function(t) {
      this.trigger("popstate", {
        fragment: this.fragment()
      })
    }, a._handleHashChange = function(t) {
      return this._ignoreHashChange ? void(this._ignoreHashChange = !1) : void this.trigger("popstate", {
        fragment: this.fragment()
      })
    }, a.canUpdate = function() {
      return this._pushState || this._hashChange
    }, a.start = function() {
      return this.started || !this._pushState && !this._hashChange || (this.started = !0, this._pushState ? (this._handlePopState = this._handlePopState.bind(this), o.addEventListener(window, "popstate", this._handlePopState)) : this._hashChange && (this._isHashChangeSupported() ? (this._handleHashChange = this._handleHashChange.bind(this), o.addEventListener(window, "hashchange", this._handleHashChange)) : (this._iframe.location.hash = this.fragment(), this._checkUrl = this._checkUrl.bind(this), this._checkUrlInterval = setInterval(this._checkUrl, this._interval)))), this.started || !1
    }, a.stop = function() {
      this.started && (this.started = !1, this._pushState ? o.removeEventListener(window, "popstate", this._handlePopState) : this._hashChange && (this._isHashChangeSupported() ? o.removeEventListener(window, "hashchange", this._handleHashChange) : this._checkUrlInterval && (clearInterval(this._checkUrlInterval), this._checkUrlInterval = null)))
    }, a.navigate = function(t, e) {
      if (!this.started || !this.canUpdate()) return !1;
      e = e || {};
      var i = ((this._isRoot(t) ? "" : this.root) + t).replace(/([^:])(\/\/)/g, "$1/");
      return this._pushState ? this.history.pushState(e, document.title, i) : this._hashChange && (this._ignoreHashChange = !0, window.location.hash = "#" + t, this._isHashChangeSupported() || (this._iframe.document.open().close(), this._iframe.location.hash = "#" + t)), !0
    }, a.fragment = function() {
      var t = "";
      return this._pushState ? t = window.location.pathname.substr(this.root.length) : this._hashChange && (t = window.location.hash.substr(1)), "" === t ? "/" : t
    }, e.exports = n
  }, {
    "@marcom/ac-dom-events": 8,
    "@marcom/ac-event-emitter": 220,
    "@marcom/ac-object": 804
  }],
  250: [function(t, e, i) {
    "use strict";

    function n(t) {
      t = t || {}, this._intercept = t.intercept || "[data-route]", this._interceptAttribute = t.attribute || "href", this._handleTrigger = this._handleTrigger.bind(this), this.intercept(this._intercept), this.history = t.history || new s({
        root: t.root,
        autoStart: t.autoStart,
        pushState: t.pushState,
        hashChange: t.hashChange,
        resolveInitialHash: t.resolveInitialHash
      }), a.call(this, t.routes), t.autoStart && (this.history.started || this.history.start(), this.start())
    }
    var r = t("@marcom/ac-object").create,
      o = t("@marcom/ac-dom-emitter").DOMEmitter,
      s = t("./History"),
      a = (t("@marcom/ac-routes").Route, t("@marcom/ac-routes").Routes),
      c = n.prototype = r(a.prototype);
    c._handleTrigger = function(t) {
      if (this.started) {
        var e = t.target.getAttribute(this._interceptAttribute);
        e && (/^(http|https):\/\/+/.exec(e) && "href" === this._interceptAttribute && (e = e.substr(e.indexOf(this.history.root) + this.history.root.length) || "/"), this.navigate(e) && t.preventDefault())
      }
    }, c._handlePopstate = function(t) {
      this.navigate(t.fragment, !0)
    }, c.start = function() {
      this.started || (this.started = !0, this.history.start(), this._handlePopstate = this._handlePopstate.bind(this), this.history.on("popstate", this._handlePopstate), this.navigate(this.history.fragment(), !0))
    }, c.stop = function() {
      this.started && (this.started = !1, this.history.stop(), this.history.off("popstate", this._handlePopstate))
    }, c.navigate = function(t, e) {
      return this.history.fragment() !== t || e ? !(t && !e && !this.history.navigate(t)) && (this.match(t), !0) : this.history.canUpdate()
    }, c.intercept = function(t, e) {
      var i = new o(e || document.body);
      i.on("click", t, this._handleTrigger)
    }, e.exports = n
  }, {
    "./History": 249,
    "@marcom/ac-dom-emitter": 242,
    "@marcom/ac-object": 804,
    "@marcom/ac-routes": 245
  }],
  251: [function(t, e, i) {
    "use strict";
    var n = t("./ac-ajax/Ajax"),
      r = t("./ac-ajax/Request");
    e.exports = new n, e.exports.Ajax = n, e.exports.Request = r
  }, {
    "./ac-ajax/Ajax": 252,
    "./ac-ajax/Request": 253
  }],
  252: [function(t, e, i) {
    "use strict";
    var n = t("./Request"),
      r = t("./XDomain-request"),
      o = t("./URLParser"),
      s = function() {};
    s._Request = n, s.prototype = {
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
        var e = new o,
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
    }, e.exports = s
  }, {
    "./Request": 253,
    "./URLParser": 254,
    "./XDomain-request": 255
  }],
  253: [function(t, e, i) {
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
  254: [function(t, e, i) {
    "use strict";
    var n = function() {
        this.parser = null
      },
      r = n.prototype;
    r.parse = function(t) {
      var e, i, n, r, o;
      if ("string" != typeof t) throw new TypeError(t + " must be a string");
      return this.parser || (this.parser = document.createElement("a")), this._qualifyPath(t), n = this.parser.hostname, i = this.parser.protocol, r = this._normalizePort(this.parser), e = this.parser.origin || this._constructOriginString(this.parser, r), o = this.parser.search, {
        originalPath: t,
        qualifiedPath: this.parser.href,
        protocol: i,
        hostname: n,
        origin: e,
        port: r,
        search: o
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
  255: [function(t, e, i) {
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
    "./Request": 253
  }],
  256: [function(t, e, i) {
    "use strict";
    e.exports = "a-z\\xdf-\\xf6\\xf8-\\xff"
  }, {}],
  257: [function(t, e, i) {
    "use strict";
    e.exports = "\\s!¡?¿‽.,…:;_\\-–—~·•‘’“”‚„‛‟′″'\"#$&*@§¶^|/"
  }, {}],
  258: [function(t, e, i) {
    "use strict";
    e.exports = "A-Z\\xc0-\\xd6\\xd8-\\xde"
  }, {}],
  259: [function(t, e, i) {
    "use strict";
    e.exports = {
      capitalize: t("./capitalize"),
      collapseWhitespace: t("./collapseWhitespace"),
      splitWords: t("./splitWords"),
      stripTags: t("./stripTags"),
      supplant: t("./supplant"),
      toCamelCase: t("./toCamelCase"),
      toKebabCase: t("./toKebabCase"),
      toSnakeCase: t("./toSnakeCase"),
      trim: t("./trim"),
      trimLeft: t("./trimLeft"),
      trimRight: t("./trimRight"),
      LOWERCASE_CHARS: t("./LOWERCASE_CHARS"),
      PUNCTUATION_CHARS: t("./PUNCTUATION_CHARS"),
      UPPERCASE_CHARS: t("./UPPERCASE_CHARS")
    }
  }, {
    "./LOWERCASE_CHARS": 256,
    "./PUNCTUATION_CHARS": 257,
    "./UPPERCASE_CHARS": 258,
    "./capitalize": 260,
    "./collapseWhitespace": 261,
    "./splitWords": 263,
    "./stripTags": 264,
    "./supplant": 265,
    "./toCamelCase": 266,
    "./toKebabCase": 267,
    "./toSnakeCase": 268,
    "./trim": 269,
    "./trimLeft": 270,
    "./trimRight": 271
  }],
  260: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return t.charAt(0).toUpperCase() + t.slice(1)
    }
  }, {}],
  261: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/String/prototype.trim"), e.exports = function(t) {
      return t.trim().replace(/\s+/g, " ")
    }
  }, {
    "@marcom/ac-polyfills/String/prototype.trim": void 0
  }],
  262: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return t = t ? t + "" : "\\s", t = t.replace(/[.*+?^${}()|[\]]/g, "\\$&"), "[" + t + "]+"
    }
  }, {}],
  263: [function(t, e, i) {
    "use strict";
    var n = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
      r = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
      o = new RegExp("(" + n + "+" + r + "*|" + n + "*" + r + "+|[0-9]+)", "g");
    e.exports = function(t) {
      return t.match(o) || []
    }
  }, {}],
  264: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return t.replace(/<[^>]*>/g, "")
    }
  }, {}],
  265: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i) {
      return e ? (i = i || /{([^{}]*)}/g, t.replace(i, function(t, i) {
        var n = e[i];
        return "string" == typeof n || "number" == typeof n || "boolean" == typeof n ? n : t
      })) : t
    }
  }, {}],
  266: [function(t, e, i) {
    "use strict";
    var n = (t("./splitWords"), t("./utils/transformWords")),
      r = t("./capitalize"),
      o = function(t, e, i) {
        return e ? t.toLowerCase() : r(t.toLowerCase())
      };
    e.exports = function(t) {
      return n(t, o)
    }
  }, {
    "./capitalize": 260,
    "./splitWords": 263,
    "./utils/transformWords": 272
  }],
  267: [function(t, e, i) {
    "use strict";
    var n = t("./splitWords");
    e.exports = function(t) {
      return n(t).join("-").toLowerCase()
    }
  }, {
    "./splitWords": 263
  }],
  268: [function(t, e, i) {
    "use strict";
    var n = t("./splitWords");
    e.exports = function(t) {
      return n(t).join("_").toLowerCase()
    }
  }, {
    "./splitWords": 263
  }],
  269: [function(t, e, i) {
    "use strict";
    var n = t("./internal/normalizeTrimCharacters");
    e.exports = function(t, e) {
      var i = n(e);
      return i = new RegExp("^" + i + "|" + i + "$", "g"), t.replace(i, "")
    }
  }, {
    "./internal/normalizeTrimCharacters": 262
  }],
  270: [function(t, e, i) {
    "use strict";
    var n = t("./internal/normalizeTrimCharacters");
    e.exports = function(t, e) {
      var i = n(e);
      return i = new RegExp("^" + i, "g"), t.replace(i, "")
    }
  }, {
    "./internal/normalizeTrimCharacters": 262
  }],
  271: [function(t, e, i) {
    "use strict";
    var n = t("./internal/normalizeTrimCharacters");
    e.exports = function(t, e) {
      var i = n(e);
      return i = new RegExp(i + "$", "g"), t.replace(i, "")
    }
  }, {
    "./internal/normalizeTrimCharacters": 262
  }],
  272: [function(t, e, i) {
    "use strict";
    var n = t("../splitWords");
    e.exports = function(t, e) {
      var i, r = n(t),
        o = r.length,
        s = "";
      for (i = 0; i < o; i++) s += e(r[i], 0 === i, i === o - 1);
      return s
    }
  }, {
    "../splitWords": 263
  }],
  273: [function(t, e, i) {
    "use strict";
    var n = t("./ac-vatman/vat-client"),
      r = t("./ac-vatman/vat-resource"),
      o = {
        createPlayer: t("./ac-vatman/factory/createPlayer"),
        vatClient: n,
        vatResource: r
      };
    e.exports = o
  }, {
    "./ac-vatman/factory/createPlayer": 274,
    "./ac-vatman/vat-client": 277,
    "./ac-vatman/vat-resource": 278
  }],
  274: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      return t.create(e)
    }

    function r(t) {
      var e = this.findTextTrackModelFromNativeTrack(t),
        i = this.getEnabledTextTracks();
      i.forEach(function(t) {
        e.cid !== t.cid && t.disable()
      }), "disabled" === e.get("mode") && e.hide()
    }

    function o(t, e) {
      e = e || {};
      var i;
      return i = n(t, e), i && !s() && i.on("addtrack", r, i), i
    }
    var s = t("./../featureDetection/featureDetect").textTrackDisablingNotAvailable;
    e.exports = o
  }, {
    "./../featureDetection/featureDetect": 275
  }],
  275: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-browser"),
      r = n.name.toLowerCase();
    e.exports = {
      shouldPlayMOV: function() {
        return "safari" === r || "safari mobile" === r
      },
      textTrackDisablingNotAvailable: function() {
        return "safari mobile" === r && 7 === n.version
      }
    }
  }, {
    "@marcom/ac-browser": 206
  }],
  276: [function(t, e, i) {
    e.exports = {
      bg: "български език",
      cs: "Czech",
      el: "Greek",
      de: "German",
      da: "Danish",
      en: "English",
      es: "Spanish",
      et: "Estonian",
      fi: "Finnish",
      fr: "Français",
      hr: "Croatian",
      hu: "Hungarian",
      it: "Italian",
      ja: "Japanese",
      ko: "Korean",
      lt: "Lithuanian",
      lv: "Latvian",
      nl: "Dutch",
      no: "Norsk",
      pl: "Polish",
      pt: "Portuguese",
      ro: "Romanian",
      ru: "Russian",
      sk: "Slovak",
      sv: "Swedish",
      tr: "Turkish",
      zh: "Chinese"
    }
  }, {}],
  277: [function(t, e, i) {
    "use strict";
    var n = (t("@marcom/ac-ajax"), t("@marcom/ac-string")),
      r = (t("./featureDetection/featureDetect"), /_r[0-9].+\.mov$/),
      o = "m",
      s = "_{width}x{height}{suffix}." + o + "p4",
      a = [{
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
      }],
      c = {
        create: function() {
          var t = function() {};
          return t.prototype = this, new t
        },
        getSource: function(t, e, i, o) {
          var c = a,
            l = o && o.maxWidth ? o.maxWidth : 1280;
          if (!t) throw "Must provide a vatRefMovie";
          if (!e) throw "Must provide a width";
          i && (c = c.filter(function(t) {
            return t.type === i
          })), l < 1920 && (c = c.filter(function(t) {
            return t.width <= l
          }));
          var u = c.reduce(function(t, i) {
            return Math.abs(i.width - e) < Math.abs(t.width - e) ? i : t
          });
          return t.replace(r, n.supplant(s, u))
        },
        getVTTSource: function(t) {
          return t.replace(r, "_cc.vtt")
        }
      };
    e.exports = c
  }, {
    "./featureDetection/featureDetect": 275,
    "@marcom/ac-ajax": 251,
    "@marcom/ac-string": 259
  }],
  278: [function(t, e, i) {
    "use strict";
    var n = t("./vat-client"),
      r = t("./localization/language"),
      o = t("./featureDetection/featureDetect").shouldPlayMOV,
      s = {
        create: function(t, e) {
          if (!t) throw "Must provide a vatRefMovie.";
          var i = function() {};
          i.prototype = this;
          var n = new i;
          return n.vatRefMovie = t, n._options = e, n.vatVTTSource = [], n
        },
        getSource: function(t, e) {
          return n.getSource(this.vatRefMovie, t, e, this._options)
        },
        getVTTSource: function() {
          return n.getVTTSource(this.vatRefMovie)
        },
        _getCaptionsSrcLang: function(t) {
          var e = "";
          return "string" == typeof t && t.indexOf("-") !== -1 && (e = t.split("-")[0]), e
        },
        _isNewVTTSrc: function(t) {
          return this.vatVTTSource.indexOf(t) === -1
        },
        _handleCaptions: function(t, e) {
          var i, n = "",
            o = {};
          i = this.getVTTSource(), i && this._isNewVTTSrc(i) === !0 && (e && (n = this._getCaptionsSrcLang(e)), o.kind = "caption", o.src = i, o.mode = "hidden", n && (o.srclang = n, o.label = r[n] || null), t.addTextTrackFromRemoteVTT(o), this.vatVTTSource.push(i))
        },
        setPlayerSrc: function(t, e, i, n) {
          var r = this.vatRefMovie;
          o() || (r = this.getSource(e, i)), t.setSrc(r), n.captions && this._handleCaptions(t, n.lang)
        }
      };
    e.exports = s
  }, {
    "./featureDetection/featureDetect": 275,
    "./localization/language": 276,
    "./vat-client": 277
  }],
  279: [function(t, e, i) {
    "use strict";
    e.exports = {
      SharedInstance: t("./ac-shared-instance/SharedInstance")
    }
  }, {
    "./ac-shared-instance/SharedInstance": 280
  }],
  280: [function(t, e, i) {
    "use strict";
    var n = window,
      r = "AC",
      o = "SharedInstance",
      s = n[r],
      a = function() {
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
            var n = typeof i;
            if ("string" === n || "number" === n) {
              if (!t[e] || !t[e][i]) return;
              return void(t[e][i] = null)
            }
            t[e] && (t[e] = null)
          }
        }
      }();
    s || (s = n[r] = {}), s[o] || (s[o] = a), e.exports = s[o]
  }, {}],
  281: [function(t, e, i) {
    "use strict";
    e.exports = {
      CID: t("./ac-mvc-cid/CID")
    }
  }, {
    "./ac-mvc-cid/CID": 282
  }],
  282: [function(t, e, i) {
    "use strict";

    function n() {
      this._idCount = 0
    }
    var r = t("@marcom/ac-shared-instance").SharedInstance,
      o = "ac-mvc-cid:CID",
      s = "1.0.0",
      a = n.prototype;
    a._cidPrefix = "cid", a.getNewCID = function() {
      var t = this._cidPrefix + "-" + this._idCount;
      return this._idCount++, t
    }, e.exports = r.share(o, s, n)
  }, {
    "@marcom/ac-shared-instance": 279
  }],
  283: [function(t, e, i) {
    "use strict";
    e.exports = {
      Model: t("./ac-mvc-model/Model")
    }
  }, {
    "./ac-mvc-model/Model": 284
  }],
  284: [function(t, e, i) {
    "use strict";

    function n(t) {
      r.call(this), this.attributes = o(this.defaultAttributes, t || {}), this.cid = a.getNewCID(), this.attributes[this.idAttribute] && (this.id = this.attributes[this.idAttribute])
    }
    var r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      o = t("@marcom/ac-object/defaults"),
      s = t("@marcom/ac-object/create"),
      a = t("@marcom/ac-mvc-cid").CID,
      c = r.prototype,
      l = n.prototype = s(c);
    l.defaultAttributes = {}, l.idAttribute = "id", l.get = function(t) {
      if (this.attributes) return this.attributes[t]
    }, l.set = function(t, e) {
      if (this.attributes) {
        var i, n, r, o = {},
          s = !1;
        for (i in t)
          if (t.hasOwnProperty(i)) {
            if (r = this.get(i), r === t[i] || "object" == typeof r && "object" == typeof t[i] && JSON.stringify(r) === JSON.stringify(t[i])) continue;
            s = !0, this.attributes[i] = t[i], n = {
              value: t[i],
              previous: r
            }, o[i] = n, this._triggerChange(i, n, e)
          } s && this._trigger("change", o, e)
      }
    }, l.hasAttribute = function(t) {
      return !!this.attributes && void 0 !== this.attributes[t]
    }, l.eachAttribute = function(t, e) {
      if (this.attributes) {
        var i;
        for (i in this.attributes) this.attributes.hasOwnProperty(i) && t.call(e, {
          attribute: i,
          value: this.attributes[i]
        })
      }
    }, l.destroy = function() {
      this.trigger("destroy"), c.destroy.call(this);
      var t;
      for (t in this) this.hasOwnProperty(t) && (this[t] = null)
    }, l._trigger = function(t, e, i) {
      i = i || {}, i.silent !== !0 && this.trigger(t, e)
    }, l._triggerChange = function(t, e, i) {
      return this._trigger("change:" + t, e, i)
    }, e.exports = n
  }, {
    "@marcom/ac-event-emitter-micro": 168,
    "@marcom/ac-mvc-cid": 281,
    "@marcom/ac-object/create": 806,
    "@marcom/ac-object/defaults": 807
  }],
  285: [function(t, e, i) {
    "use strict";
    e.exports = {
      localization: t("./ac-video-localization/localization")
    }
  }, {
    "./ac-video-localization/localization": 286
  }],
  286: [function(t, e, i) {
    "use strict";
    var n = t("./translations"),
      r = "m",
      o = "/global/ac_" + r + "edia_player/scripts/ac_" + r + "edia_languages/",
      s = document.getElementsByTagName("html")[0],
      a = t("@marcom/ac-mvc-model").Model,
      c = {
        create: function(t) {
          t = t || this.getLang();
          var e = this.getRequestPath(t);
          return this.sendRequest(e)
        },
        getRequestPath: function(t) {
          return o + this.getTranslationFileName(t)
        },
        getLang: function() {
          var t, e = s.getAttribute("lang");
          if (e) switch (e.toLowerCase()) {
            case "es-418":
              t = "es-LA";
              break;
            case "pt":
              t = "pt-BR";
              break;
            default:
              t = e
          } else t = "en-us";
          return t
        },
        getTranslationFileName: function(t) {
          var e = t.toLowerCase().split("-")[0],
            i = n[t] || !1;
          return i || (i = n[e] || n.en), i
        },
        sendRequest: function(t) {
          return new Promise(function(e, i) {
            var n = new XMLHttpRequest;
            n.onreadystatechange = function() {
              if (4 === n.readyState)
                if (n.status >= 200 && n.status < 300) try {
                  var t = JSON.parse(n.responseText);
                  for (var r in t) t[r].replace(/<br\s{0,}\/>/g, "");
                  e(new a(t))
                } catch (o) {
                  i(o)
                } else i(n)
            }, n.open("GET", t), n.send()
          })
        }
      };
    e.exports = c
  }, {
    "./translations": 287,
    "@marcom/ac-mvc-model": 283
  }],
  287: [function(t, e, i) {
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
  288: [function(t, e, i) {
    arguments[4][220][0].apply(i, arguments)
  }, {
    "./ac-event-emitter/EventEmitter": 289,
    dup: 220
  }],
  289: [function(t, e, i) {
    arguments[4][221][0].apply(i, arguments)
  }, {
    dup: 221
  }],
  290: [function(t, e, i) {
    arguments[4][230][0].apply(i, arguments)
  }, {
    "./ac-dom-emitter/DOMEmitter": 291,
    dup: 230
  }],
  291: [function(t, e, i) {
    arguments[4][231][0].apply(i, arguments)
  }, {
    "./DOMEmitterEvent": 292,
    "@marcom/ac-dom-events/addEventListener": 6,
    "@marcom/ac-dom-events/dispatchEvent": 7,
    "@marcom/ac-dom-events/removeEventListener": 15,
    "@marcom/ac-dom-traversal/matchesSelector": 56,
    "@marcom/ac-dom-traversal/querySelectorAll": 62,
    "ac-event-emitter": 288,
    dup: 231
  }],
  292: [function(t, e, i) {
    arguments[4][232][0].apply(i, arguments)
  }, {
    "@marcom/ac-dom-events/preventDefault": 14,
    "@marcom/ac-dom-events/stopPropagation": 18,
    "@marcom/ac-dom-events/target": 19,
    dup: 232
  }],
  293: [function(t, e, i) {
    arguments[4][35][0].apply(i, arguments)
  }, {
    dup: 35
  }],
  294: [function(t, e, i) {
    arguments[4][36][0].apply(i, arguments)
  }, {
    dup: 36
  }],
  295: [function(t, e, i) {
    arguments[4][38][0].apply(i, arguments)
  }, {
    dup: 38
  }],
  296: [function(t, e, i) {
    arguments[4][39][0].apply(i, arguments)
  }, {
    dup: 39
  }],
  297: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate");
    e.exports = function(t, e) {
      return n.insertNode(t, !0, "insertLastChild"), n.parentNode(e, !0, "insertLastChild"), e.appendChild(t)
    }
  }, {
    "./internal/validate": 299
  }],
  298: [function(t, e, i) {
    arguments[4][41][0].apply(i, arguments)
  }, {
    "../isNode": 300,
    dup: 41
  }],
  299: [function(t, e, i) {
    arguments[4][42][0].apply(i, arguments)
  }, {
    "../COMMENT_NODE": 293,
    "../DOCUMENT_FRAGMENT_NODE": 294,
    "../ELEMENT_NODE": 295,
    "../TEXT_NODE": 296,
    "./isNodeType": 298,
    dup: 42
  }],
  300: [function(t, e, i) {
    arguments[4][45][0].apply(i, arguments)
  }, {
    dup: 45
  }],
  301: [function(t, e, i) {
    arguments[4][46][0].apply(i, arguments)
  }, {
    "./internal/validate": 299,
    dup: 46
  }],
  302: [function(t, e, i) {
    arguments[4][279][0].apply(i, arguments)
  }, {
    "./ac-shared-instance/SharedInstance": 303,
    dup: 279
  }],
  303: [function(t, e, i) {
    arguments[4][280][0].apply(i, arguments)
  }, {
    dup: 280
  }],
  304: [function(t, e, i) {
    arguments[4][281][0].apply(i, arguments)
  }, {
    "./ac-mvc-cid/CID": 305,
    dup: 281
  }],
  305: [function(t, e, i) {
    arguments[4][282][0].apply(i, arguments)
  }, {
    "@marcom/ac-shared-instance": 302,
    dup: 282
  }],
  306: [function(t, e, i) {
    "use strict";
    e.exports = {
      View: t("./ac-mvc-view/View")
    }
  }, {
    "./ac-mvc-view/View": 307
  }],
  307: [function(t, e, i) {
    "use strict";

    function n(t) {
      var e, i, n;
      this.options = s.defaults(this.defaultOptions, t || {}), this.cid = o.getNewCID(), this.model = this.options.model, this.options.template && (this.template = this.options.template), e = this.options.tagName || this.tagName, i = this.options.element, n = this.options.className || this.className, i || (i = document.createElement(e)), r.call(this, i), n && this.addClassName(n), this.options.events && this.delegateEvents(this.options.events)
    }
    var r = t("@marcom/ac-dom-emitter").DOMEmitter,
      o = t("@marcom/ac-mvc-cid").CID,
      s = {
        create: t("@marcom/ac-object/create"),
        defaults: t("@marcom/ac-object/defaults")
      },
      a = {
        insertLastChild: t("@marcom/ac-dom-nodes/insertLastChild"),
        remove: t("@marcom/ac-dom-nodes/remove")
      },
      c = t("@marcom/ac-classlist/add"),
      l = t("@marcom/ac-classlist/remove"),
      u = n.prototype = s.create(r.prototype);
    u.tagName = "div", u.defaultOptions = {}, u.getTagName = function() {
      return this.el.tagName.toLowerCase()
    }, u.appendTo = function(t) {
      return a.insertLastChild(this.el, t), this
    }, u.render = function() {}, u.addClassName = function(t) {
      return this._manipulateClassName(t, c)
    }, u.removeClassName = function(t) {
      return this._manipulateClassName(t, l)
    }, u.destroy = function() {
      this.emitterTrigger("destroy"), this.off(), a.remove(this.el);
      var t;
      for (t in this) this.hasOwnProperty(t) && (this[t] = null)
    }, u.delegateEvents = function(t, e) {
      e = e || this;
      var i, n;
      for (i in t) t.hasOwnProperty(i) && (n = t[i], "string" == typeof n && (t[i] = this[t[i]]));
      return this.on(t, e), this
    }, u._manipulateClassName = function(t, e) {
      var i;
      if ("string" == typeof t) i = t.split(" ");
      else {
        if ("object" != typeof t || !Array.isArray(t)) return this;
        i = t.slice()
      }
      return i.unshift(this.el), e.apply(this.el, i), this
    }, e.exports = n
  }, {
    "@marcom/ac-classlist/add": 210,
    "@marcom/ac-classlist/remove": 218,
    "@marcom/ac-dom-emitter": 290,
    "@marcom/ac-dom-nodes/insertLastChild": 297,
    "@marcom/ac-dom-nodes/remove": 301,
    "@marcom/ac-mvc-cid": 304,
    "@marcom/ac-object/create": 806,
    "@marcom/ac-object/defaults": 807
  }],
  308: [function(t, e, i) {
    arguments[4][265][0].apply(i, arguments)
  }, {
    dup: 265
  }],
  309: [function(t, e, i) {
    "use strict";
    e.exports = {
      View: t("./ac-video-nosupportview/NoSupportView")
    }
  }, {
    "./ac-video-nosupportview/NoSupportView": 310
  }],
  310: [function(t, e, i) {
    "use strict";

    function n() {
      r.apply(this, arguments)
    }
    var r = t("@marcom/ac-mvc-view").View,
      o = t("@marcom/ac-object/create"),
      s = t("@marcom/ac-string/supplant"),
      a = n.prototype = o(r.prototype);
    a.className = ["ac-video-nosupport"], a.defaultOptions = {
      template: '<a onclick="s_objectID=&quot;https://www.apple.com/quicktime/download/_1&quot;;return this.s_oc?this.s_oc(e):true" href="{downloadquicktimeurl}" class="ac-video-quicktime-download"><span class="ac-video-quicktime-download-title">{downloadquicktimetitle}</span><span class="ac-video-quicktime-download-text">{downloadquicktimetext}</span><span class="ac-video-quicktime-download-button">{downloadquicktimebutton}</span></a>'
    }, a.render = function() {
      this.el.innerHTML = s(this.options.template, this.model.attributes)
    }, e.exports = n
  }, {
    "@marcom/ac-mvc-view": 306,
    "@marcom/ac-object/create": 806,
    "@marcom/ac-string/supplant": 308
  }],
  311: [function(t, e, i) {
    arguments[4][251][0].apply(i, arguments)
  }, {
    "./ac-ajax/Ajax": 312,
    "./ac-ajax/Request": 313,
    dup: 251
  }],
  312: [function(t, e, i) {
    arguments[4][252][0].apply(i, arguments)
  }, {
    "./Request": 313,
    "./URLParser": 314,
    "./XDomain-request": 315,
    dup: 252
  }],
  313: [function(t, e, i) {
    arguments[4][253][0].apply(i, arguments)
  }, {
    dup: 253
  }],
  314: [function(t, e, i) {
    arguments[4][254][0].apply(i, arguments)
  }, {
    dup: 254
  }],
  315: [function(t, e, i) {
    arguments[4][255][0].apply(i, arguments)
  }, {
    "./Request": 313,
    dup: 255
  }],
  316: [function(t, e, i) {
    "use strict";
    e.exports = {
      log: t("./ac-console/log")
    }
  }, {
    "./ac-console/log": 317
  }],
  317: [function(t, e, i) {
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
  318: [function(t, e, i) {
    arguments[4][220][0].apply(i, arguments)
  }, {
    "./ac-event-emitter/EventEmitter": 319,
    dup: 220
  }],
  319: [function(t, e, i) {
    arguments[4][221][0].apply(i, arguments)
  }, {
    dup: 221
  }],
  320: [function(t, e, i) {
    arguments[4][230][0].apply(i, arguments)
  }, {
    "./ac-dom-emitter/DOMEmitter": 321,
    dup: 230
  }],
  321: [function(t, e, i) {
    arguments[4][231][0].apply(i, arguments)
  }, {
    "./DOMEmitterEvent": 322,
    "@marcom/ac-dom-events/addEventListener": 6,
    "@marcom/ac-dom-events/dispatchEvent": 7,
    "@marcom/ac-dom-events/removeEventListener": 15,
    "@marcom/ac-dom-traversal/matchesSelector": 56,
    "@marcom/ac-dom-traversal/querySelectorAll": 62,
    "ac-event-emitter": 318,
    dup: 231
  }],
  322: [function(t, e, i) {
    arguments[4][232][0].apply(i, arguments)
  }, {
    "@marcom/ac-dom-events/preventDefault": 14,
    "@marcom/ac-dom-events/stopPropagation": 18,
    "@marcom/ac-dom-events/target": 19,
    dup: 232
  }],
  323: [function(t, e, i) {
    arguments[4][35][0].apply(i, arguments)
  }, {
    dup: 35
  }],
  324: [function(t, e, i) {
    arguments[4][36][0].apply(i, arguments)
  }, {
    dup: 36
  }],
  325: [function(t, e, i) {
    arguments[4][37][0].apply(i, arguments)
  }, {
    dup: 37
  }],
  326: [function(t, e, i) {
    "use strict";
    e.exports = 10
  }, {}],
  327: [function(t, e, i) {
    arguments[4][38][0].apply(i, arguments)
  }, {
    dup: 38
  }],
  328: [function(t, e, i) {
    arguments[4][39][0].apply(i, arguments)
  }, {
    dup: 39
  }],
  329: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e, i = document.createDocumentFragment();
      if (t)
        for (e = document.createElement("div"), e.innerHTML = t; e.firstChild;) i.appendChild(e.firstChild);
      return i
    }
  }, {}],
  330: [function(t, e, i) {
    arguments[4][40][0].apply(i, arguments)
  }, {
    "./ELEMENT_NODE": 327,
    "./internal/isNodeType": 338,
    "@marcom/ac-polyfills/Array/prototype.filter": void 0,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0,
    dup: 40
  }],
  331: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e) {
      return "hasAttribute" in t ? t.hasAttribute(e) : null !== t.attributes.getNamedItem(e)
    }
  }, {}],
  332: [function(t, e, i) {
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
    "./COMMENT_NODE": 323,
    "./DOCUMENT_FRAGMENT_NODE": 324,
    "./DOCUMENT_NODE": 325,
    "./DOCUMENT_TYPE_NODE": 326,
    "./ELEMENT_NODE": 327,
    "./TEXT_NODE": 328,
    "./createDocumentFragment": 329,
    "./filterByNodeType": 330,
    "./hasAttribute": 331,
    "./indexOf": 333,
    "./insertAfter": 334,
    "./insertBefore": 335,
    "./insertFirstChild": 336,
    "./insertLastChild": 337,
    "./isComment": 340,
    "./isDocument": 341,
    "./isDocumentFragment": 342,
    "./isDocumentType": 343,
    "./isElement": 344,
    "./isNode": 345,
    "./isNodeList": 346,
    "./isTextNode": 347,
    "./remove": 348,
    "./replace": 349
  }],
  333: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.indexOf"), t("@marcom/ac-polyfills/Array/prototype.slice");
    var n = (t("./internal/validate"), t("./filterByNodeType"));
    e.exports = function(t, e) {
      var i, r = t.parentNode;
      return r ? (i = r.childNodes, i = e !== !1 ? n(i, e) : Array.prototype.slice.call(i), i.indexOf(t)) : 0
    }
  }, {
    "./filterByNodeType": 330,
    "./internal/validate": 339,
    "@marcom/ac-polyfills/Array/prototype.indexOf": void 0,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0
  }],
  334: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate");
    e.exports = function(t, e) {
      return n.insertNode(t, !0, "insertAfter"), n.childNode(e, !0, "insertAfter"), n.hasParentNode(e, "insertAfter"), e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t)
    }
  }, {
    "./internal/validate": 339
  }],
  335: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate");
    e.exports = function(t, e) {
      return n.insertNode(t, !0, "insertBefore"), n.childNode(e, !0, "insertBefore"), n.hasParentNode(e, "insertBefore"), e.parentNode.insertBefore(t, e)
    }
  }, {
    "./internal/validate": 339
  }],
  336: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate");
    e.exports = function(t, e) {
      return n.insertNode(t, !0, "insertFirstChild"), n.parentNode(e, !0, "insertFirstChild"), e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
    }
  }, {
    "./internal/validate": 339
  }],
  337: [function(t, e, i) {
    arguments[4][297][0].apply(i, arguments)
  }, {
    "./internal/validate": 339,
    dup: 297
  }],
  338: [function(t, e, i) {
    arguments[4][41][0].apply(i, arguments)
  }, {
    "../isNode": 345,
    dup: 41
  }],
  339: [function(t, e, i) {
    arguments[4][42][0].apply(i, arguments)
  }, {
    "../COMMENT_NODE": 323,
    "../DOCUMENT_FRAGMENT_NODE": 324,
    "../ELEMENT_NODE": 327,
    "../TEXT_NODE": 328,
    "./isNodeType": 338,
    dup: 42
  }],
  340: [function(t, e, i) {
    "use strict";
    var n = t("./internal/isNodeType"),
      r = t("./COMMENT_NODE");
    e.exports = function(t) {
      return n(t, r)
    }
  }, {
    "./COMMENT_NODE": 323,
    "./internal/isNodeType": 338
  }],
  341: [function(t, e, i) {
    "use strict";
    var n = t("./internal/isNodeType"),
      r = t("./DOCUMENT_NODE");
    e.exports = function(t) {
      return n(t, r)
    }
  }, {
    "./DOCUMENT_NODE": 325,
    "./internal/isNodeType": 338
  }],
  342: [function(t, e, i) {
    arguments[4][43][0].apply(i, arguments)
  }, {
    "./DOCUMENT_FRAGMENT_NODE": 324,
    "./internal/isNodeType": 338,
    dup: 43
  }],
  343: [function(t, e, i) {
    "use strict";
    var n = t("./internal/isNodeType"),
      r = t("./DOCUMENT_TYPE_NODE");
    e.exports = function(t) {
      return n(t, r)
    }
  }, {
    "./DOCUMENT_TYPE_NODE": 326,
    "./internal/isNodeType": 338
  }],
  344: [function(t, e, i) {
    arguments[4][44][0].apply(i, arguments)
  }, {
    "./ELEMENT_NODE": 327,
    "./internal/isNodeType": 338,
    dup: 44
  }],
  345: [function(t, e, i) {
    arguments[4][45][0].apply(i, arguments)
  }, {
    dup: 45
  }],
  346: [function(t, e, i) {
    "use strict";
    var n = /^\[object (HTMLCollection|NodeList|Object)\]$/;
    e.exports = function(t) {
      return !!t && ("number" == typeof t.length && (!!("object" != typeof t[0] || t[0] && t[0].nodeType) && n.test(Object.prototype.toString.call(t))))
    }
  }, {}],
  347: [function(t, e, i) {
    "use strict";
    var n = t("./internal/isNodeType"),
      r = t("./TEXT_NODE");
    e.exports = function(t) {
      return n(t, r)
    }
  }, {
    "./TEXT_NODE": 328,
    "./internal/isNodeType": 338
  }],
  348: [function(t, e, i) {
    arguments[4][46][0].apply(i, arguments)
  }, {
    "./internal/validate": 339,
    dup: 46
  }],
  349: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate");
    e.exports = function(t, e) {
      return n.insertNode(t, !0, "insertFirstChild", "newNode"), n.childNode(e, !0, "insertFirstChild", "oldNode"), n.hasParentNode(e, "insertFirstChild", "oldNode"), e.parentNode.replaceChild(t, e)
    }
  }, {
    "./internal/validate": 339
  }],
  350: [function(t, e, i) {
    arguments[4][93][0].apply(i, arguments)
  }, {
    "@marcom/ac-prefixer/getStyleProperty": 354,
    "@marcom/ac-prefixer/stripPrefixes": 360,
    dup: 93
  }],
  351: [function(t, e, i) {
    "use strict";
    e.exports = {
      getStyle: t("./getStyle"),
      setStyle: t("./setStyle")
    }
  }, {
    "./getStyle": 350,
    "./setStyle": 363
  }],
  352: [function(t, e, i) {
    arguments[4][94][0].apply(i, arguments)
  }, {
    dup: 94
  }],
  353: [function(t, e, i) {
    arguments[4][95][0].apply(i, arguments)
  }, {
    "./getStyleProperty": 354,
    "./getStyleValue": 355,
    "./shared/stylePropertyCache": 358,
    dup: 95
  }],
  354: [function(t, e, i) {
    arguments[4][96][0].apply(i, arguments)
  }, {
    "./shared/getStyleTestElement": 356,
    "./shared/prefixHelper": 357,
    "./shared/stylePropertyCache": 358,
    "./utils/toCSS": 361,
    "./utils/toDOM": 362,
    dup: 96
  }],
  355: [function(t, e, i) {
    arguments[4][97][0].apply(i, arguments)
  }, {
    "./getStyleProperty": 354,
    "./shared/prefixHelper": 357,
    "./shared/stylePropertyCache": 358,
    "./shared/styleValueAvailable": 359,
    dup: 97
  }],
  356: [function(t, e, i) {
    arguments[4][98][0].apply(i, arguments)
  }, {
    dup: 98
  }],
  357: [function(t, e, i) {
    arguments[4][11][0].apply(i, arguments)
  }, {
    dup: 11
  }],
  358: [function(t, e, i) {
    arguments[4][100][0].apply(i, arguments)
  }, {
    dup: 100
  }],
  359: [function(t, e, i) {
    arguments[4][101][0].apply(i, arguments)
  }, {
    "./getStyleTestElement": 356,
    "./stylePropertyCache": 358,
    dup: 101
  }],
  360: [function(t, e, i) {
    arguments[4][102][0].apply(i, arguments)
  }, {
    dup: 102
  }],
  361: [function(t, e, i) {
    arguments[4][103][0].apply(i, arguments)
  }, {
    dup: 103
  }],
  362: [function(t, e, i) {
    arguments[4][104][0].apply(i, arguments)
  }, {
    dup: 104
  }],
  363: [function(t, e, i) {
    arguments[4][105][0].apply(i, arguments)
  }, {
    "./internal/normalizeValue": 352,
    "@marcom/ac-prefixer/getStyleCSS": 353,
    "@marcom/ac-prefixer/getStyleProperty": 354,
    dup: 105
  }],
  364: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/isArray"), t("@marcom/ac-polyfills/Array/prototype.forEach"), e.exports = function(t) {
      var e = [],
        i = function(t) {
          Array.isArray(t) ? t.forEach(i) : e.push(t)
        };
      return t.forEach(i), e
    }
  }, {
    "@marcom/ac-polyfills/Array/isArray": void 0,
    "@marcom/ac-polyfills/Array/prototype.forEach": void 0
  }],
  365: [function(t, e, i) {
    "use strict";
    e.exports = {
      flatten: t("./flatten"),
      intersection: t("./intersection"),
      shuffle: t("./shuffle"),
      toArray: t("./toArray"),
      union: t("./union"),
      unique: t("./unique"),
      without: t("./without")
    }
  }, {
    "./flatten": 364,
    "./intersection": 366,
    "./shuffle": 367,
    "./toArray": 368,
    "./union": 369,
    "./unique": 370,
    "./without": 371
  }],
  366: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.indexOf"), e.exports = function(t) {
      if (!t) return [];
      var e, i = arguments.length,
        n = 0,
        r = t.length,
        o = [];
      for (n; n < r; n++)
        if (e = t[n], !(o.indexOf(e) > -1)) {
          for (var s = 1; s < i && !(arguments[s].indexOf(e) < 0); s++);
          s === i && o.push(e)
        } return o
    }
  }, {
    "@marcom/ac-polyfills/Array/prototype.indexOf": void 0
  }],
  367: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      for (var e, i, n = t.length; n;) e = Math.floor(Math.random() * n--), i = t[n], t[n] = t[e], t[e] = i;
      return t
    }
  }, {}],
  368: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.slice"), e.exports = function(t) {
      return Array.prototype.slice.call(t)
    }
  }, {
    "@marcom/ac-polyfills/Array/prototype.slice": void 0
  }],
  369: [function(t, e, i) {
    "use strict";
    var n = t("./flatten"),
      r = t("./toArray"),
      o = t("./unique");
    e.exports = function(t) {
      return o(n(r(arguments)))
    }
  }, {
    "./flatten": 364,
    "./toArray": 368,
    "./unique": 370
  }],
  370: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.indexOf"), t("@marcom/ac-polyfills/Array/prototype.reduce"), e.exports = function(t) {
      var e = function(t, e) {
        return t.indexOf(e) < 0 && t.push(e), t
      };
      return t.reduce(e, [])
    }
  }, {
    "@marcom/ac-polyfills/Array/prototype.indexOf": void 0,
    "@marcom/ac-polyfills/Array/prototype.reduce": void 0
  }],
  371: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/prototype.indexOf"), t("@marcom/ac-polyfills/Array/prototype.slice"), e.exports = function(t, e, i) {
      var n, r = t.indexOf(e),
        o = t.length;
      if (!(r >= 0)) return t;
      if (i) {
        n = t.slice(0, o);
        var s, a = 0;
        for (s = r; s < o; s++) t[s] === e && (n.splice(s - a, 1), a++)
      } else r === o - 1 ? n = t.slice(0, o - 1) : 0 === r ? n = t.slice(1) : (n = t.slice(0, r), n = n.concat(t.slice(r + 1)));
      return n
    }
  }, {
    "@marcom/ac-polyfills/Array/prototype.indexOf": void 0,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0
  }],
  372: [function(t, e, i) {
    arguments[4][279][0].apply(i, arguments)
  }, {
    "./ac-shared-instance/SharedInstance": 373,
    dup: 279
  }],
  373: [function(t, e, i) {
    arguments[4][280][0].apply(i, arguments)
  }, {
    dup: 280
  }],
  374: [function(t, e, i) {
    arguments[4][281][0].apply(i, arguments)
  }, {
    "./ac-mvc-cid/CID": 375,
    dup: 281
  }],
  375: [function(t, e, i) {
    arguments[4][282][0].apply(i, arguments)
  }, {
    "@marcom/ac-shared-instance": 372,
    dup: 282
  }],
  376: [function(t, e, i) {
    "use strict";
    e.exports = {
      Collection: t("./ac-mvc-collection/Collection")
    }
  }, {
    "./ac-mvc-collection/Collection": 377
  }],
  377: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n) {
      "undefined" == typeof t[e] && (t[e] = function(t, e) {
        return function() {
          var i = s.toArray(arguments),
            n = e.concat(i);
          return t.apply(this, n)
        }
      }(i, n))
    }

    function r(t) {
      c.call(this), this.options = o.defaults(this.defaultOptions, t || {}), this.models = [], this.cid = a.getNewCID(), this.options.ModelType && (this.ModelType = this.options.ModelType), this.ModelType && (this._modelsObject = {}), this.on(h.add, this._addToModelsObject, this), this.on(h.remove, this._removeFromModelsObject, this), this.options.models && this.add(this.options.models)
    }
    var o = t("@marcom/ac-object"),
      s = t("@marcom/ac-array"),
      a = t("@marcom/ac-mvc-cid").CID,
      c = t("@marcom/ac-event-emitter").EventEmitter,
      l = ["every", "filter", "forEach", "map", "reduce", "reduceRight", "some", "slice", "sort", "reverse", "indexOf", "lastIndexOf"],
      u = ["intersection", "union", "unique", "without"],
      h = {
        add: "add",
        remove: "remove",
        set: "set",
        reset: "reset",
        empty: "empty",
        destroy: "destroy"
      },
      d = r.prototype = o.create(c.prototype);
    d.defaultOptions = {}, d.count = function() {
      return this.models ? this.models.length : null
    }, d.add = function(t, e) {
      return e = e || {}, "undefined" == typeof t && (t = []), t = this._returnAsArray(t), t = this._createModels(t), 0 === this.models.length ? this.models = t : this.models = this.models.concat(t), this._trigger(h.add, {
        models: t
      }, e), this
    }, d.remove = function(t, e) {
      if (e = e || {}, !t) return [];
      t = this._returnAsArray(t);
      var i, n, r = [],
        o = t.length;
      for (i = 0; i < o; i++) n = this.indexOf(t[i]), n > -1 && (r.push(t[i]), this.spliceWithOptions([n, 1], {
        silent: !0
      }));
      return r.length > 0 && this._trigger(h.remove, {
        models: r
      }, e), r
    }, d.reset = function(t, e) {
      return e = e || {}, this.empty(e), this.add(t, e), this._trigger(h.reset, {
        models: this.models
      }, e), this
    }, d.empty = function(t) {
      t = t || {};
      var e = this.slice(0);
      return this.models = [], this._modelsObject && (this._modelsObject = {}), e.length > 0 && (this._trigger(h.remove, {
        models: e
      }, t), this._trigger(h.empty, {
        models: e
      }, t)), e
    }, d.destroy = function(t) {
      t = t || {};
      var e = this.empty(t);
      this._trigger(h.destroy, {
        models: e
      }, t), this.off();
      var i;
      for (i in this) this.hasOwnProperty(i) && (this[i] = null)
    }, d.get = function(t) {
      var e = this._getModelByID(t);
      if (e) return e;
      var i, n = this.models.length;
      for (i = 0; i < n; i++)
        if ("undefined" != typeof this.models[i].id && this.models[i].id === t || "undefined" != typeof this.models[i].cid && this.models[i].cid === t) {
          e = this.models[i];
          break
        } return e
    }, d.set = function(t, e) {
      e = e || {}, "undefined" == typeof t && (t = []), t = this._returnAsArray(t);
      var i, n, r, o = "id",
        s = t.length,
        a = [],
        c = [],
        l = {};
      for (e.matchParameter ? o = e.matchParameter : this.ModelType && this.ModelType.prototype.idAttribute && (o = this.ModelType.prototype.idAttribute), e.matchParameter && (o = e.matchParameter), i = 0; i < s; i++) n = null, r = t[i] instanceof this.ModelType, r ? n = this.get(t[i].id) : "object" == typeof t[i] && (n = this.get(t[i][o])), n ? (this.ModelType ? (r ? n.set(t[i].attributes) : n.set(t[i]), l[n.cid] = !0) : n = t[i], c.push(n)) : (this.ModelType && (t[i] = this._createModel(t[i])), (this.ModelType || this.indexOf(t[i]) === -1) && a.push(t[i]), c.push(t[i]));
      var u, d, m, p = c.length,
        f = [];
      for (s = this.models.length, i = 0; i < s; i++) {
        if (m = this.models[i], this.ModelType) d = !0, l[m.cid] && (d = !1);
        else
          for (d = !0, u = 0; u < p; u++)
            if (m === c[u]) {
              d = !1;
              break
            } d && f.push(m)
      }
      return this.models = c, a.length > 0 && this._trigger(h.add, {
        models: a
      }, e), f.length > 0 && this._trigger(h.remove, {
        models: f
      }, e), this._trigger(h.set, {
        models: c
      }, e), f
    }, d.at = function(t) {
      if (this.models) return this.models[t]
    }, d.find = function(t, e) {
      if ("object" != typeof t) return console.warn("Collection.protoype.find query needs to be an object"), [];
      e = e || {};
      var i, n, r = [],
        o = !1,
        s = 0,
        a = null,
        c = 0,
        l = this.models.length,
        u = l;
      for (e.reverse && (c = l - 1, u = -1, o = !0), e.limit && (a = e.limit), n = c;
        (o ? n > u : n < u) && (i = this.models[n], !(this._modelMatchesProperties(i, t) && (o ? r.unshift(i) : r.push(i), s++, a && s >= a))); o ? n-- : n++);
      return r
    }, d.push = function() {
      return this.pushWithOptions(s.toArray(arguments))
    }, d.pushWithOptions = function(t, e) {
      e = e || {};
      var i = this._createModels(t),
        n = Array.prototype.push.apply(this.models, i);
      return i.length > 0 && this._trigger(h.add, {
        models: i
      }, e), n
    }, d.pop = function() {
      return this.popWithOptions(s.toArray(arguments))
    }, d.popWithOptions = function(t, e) {
      e = e || {};
      var i = Array.prototype.pop.call(this.models);
      return i && this._trigger(h.remove, {
        models: [i]
      }, e), i
    }, d.shift = function() {
      return this.shiftWithOptions(s.toArray(arguments))
    }, d.shiftWithOptions = function(t, e) {
      e = e || {};
      var i = Array.prototype.shift.call(this.models);
      return i && this._trigger(h.remove, {
        models: [i]
      }, e), i
    }, d.unshift = function() {
      return this.unshiftWithOptions(s.toArray(arguments))
    }, d.unshiftWithOptions = function(t, e) {
      e = e || {};
      var i = this._createModels(t),
        n = Array.prototype.unshift.apply(this.models, i);
      return i.length > 0 && this._trigger(h.add, {
        models: i
      }, e), n
    }, d.splice = function() {
      return this.spliceWithOptions(s.toArray(arguments))
    }, d.spliceWithOptions = function(t, e) {
      e = e || {};
      var i, n, r, o = [t[0], t[1]];
      return t.length > 2 && (i = t.slice(2, t.length), n = this._createModels(i), o = o.concat(n)), r = Array.prototype.splice.apply(this.models, o), r.length > 0 && this._trigger(h.remove, {
        models: r
      }, e), n && this._trigger(h.add, {
        models: n
      }, e), r
    }, d._trigger = function(t, e, i) {
      i = i || {}, i.silent || this.trigger(t, e)
    }, d._getModelByID = function(t) {
      return this.ModelType && this._modelsObject && this._modelsObject[t] ? this._modelsObject[t] : null
    }, d._createModel = function(t) {
      return t instanceof this.ModelType || t instanceof r ? t : new this.ModelType(t)
    }, d._createModels = function(t) {
      if (!this.ModelType) return Array.prototype.slice.call(t, 0);
      var e, i, n = [],
        r = t.length;
      for (i = 0; i < r; i++) e = t[i], e instanceof this.ModelType || (e = this._createModel(e)), n.push(e);
      return n
    }, d._modelMatchesProperties = function(t, e) {
      var i;
      for (i in e)
        if (e.hasOwnProperty(i) && this._getPropFromModel(t, i) !== e[i]) return !1;
      return !0
    }, d._getPropFromModel = function(t, e) {
      return this.ModelType ? t.get(e) : t[e]
    }, d._addToModelsObject = function(t) {
      this._modelsObject && t.models || (this._modelsObject = {}), t.models.forEach(function(t) {
        this._modelsObject[t.id] = t, this._modelsObject[t.cid] = t
      }, this)
    }, d._removeFromModelsObject = function(t) {
      this._modelsObject && t.models || (this._modelsObject = {}), t.models.forEach(function(t) {
        this._modelsObject[t.id] = null, this._modelsObject[t.cid] = null
      }, this)
    }, d._returnAsArray = function(t) {
      return Array.isArray(t) || (t = [t]), t
    }, d._acArrayProxy = function(t) {
      var e = s.toArray(arguments);
      return e[0] = this.models, s[t].apply(s, e)
    }, d._arrayPrototypeProxy = function(t) {
      var e = s.toArray(arguments);
      return e.shift(), Array.prototype[t].apply(this.models, e)
    }, l.forEach(function(t) {
      "function" == typeof Array.prototype[t] && n(this, t, this._arrayPrototypeProxy, [t])
    }, d), u.forEach(function(t) {
      "function" == typeof s[t] && n(this, t, this._acArrayProxy, [t])
    }, d), e.exports = r
  }, {
    "@marcom/ac-array": 365,
    "@marcom/ac-event-emitter": 220,
    "@marcom/ac-mvc-cid": 374,
    "@marcom/ac-object": 804
  }],
  378: [function(t, e, i) {
    arguments[4][279][0].apply(i, arguments)
  }, {
    "./ac-shared-instance/SharedInstance": 379,
    dup: 279
  }],
  379: [function(t, e, i) {
    arguments[4][280][0].apply(i, arguments)
  }, {
    dup: 280
  }],
  380: [function(t, e, i) {
    arguments[4][281][0].apply(i, arguments)
  }, {
    "./ac-mvc-cid/CID": 381,
    dup: 281
  }],
  381: [function(t, e, i) {
    arguments[4][282][0].apply(i, arguments)
  }, {
    "@marcom/ac-shared-instance": 378,
    dup: 282
  }],
  382: [function(t, e, i) {
    arguments[4][306][0].apply(i, arguments)
  }, {
    "./ac-mvc-view/View": 383,
    dup: 306
  }],
  383: [function(t, e, i) {
    arguments[4][307][0].apply(i, arguments)
  }, {
    "@marcom/ac-classlist/add": 210,
    "@marcom/ac-classlist/remove": 218,
    "@marcom/ac-dom-emitter": 320,
    "@marcom/ac-dom-nodes/insertLastChild": 337,
    "@marcom/ac-dom-nodes/remove": 348,
    "@marcom/ac-mvc-cid": 380,
    "@marcom/ac-object/create": 806,
    "@marcom/ac-object/defaults": 807,
    dup: 307
  }],
  384: [function(t, e, i) {
    arguments[4][256][0].apply(i, arguments)
  }, {
    dup: 256
  }],
  385: [function(t, e, i) {
    arguments[4][257][0].apply(i, arguments)
  }, {
    dup: 257
  }],
  386: [function(t, e, i) {
    arguments[4][258][0].apply(i, arguments)
  }, {
    dup: 258
  }],
  387: [function(t, e, i) {
    arguments[4][259][0].apply(i, arguments)
  }, {
    "./LOWERCASE_CHARS": 384,
    "./PUNCTUATION_CHARS": 385,
    "./UPPERCASE_CHARS": 386,
    "./capitalize": 388,
    "./collapseWhitespace": 389,
    "./splitWords": 391,
    "./stripTags": 392,
    "./supplant": 393,
    "./toCamelCase": 394,
    "./toKebabCase": 395,
    "./toSnakeCase": 396,
    "./trim": 397,
    "./trimLeft": 398,
    "./trimRight": 399,
    dup: 259
  }],
  388: [function(t, e, i) {
    arguments[4][260][0].apply(i, arguments)
  }, {
    dup: 260
  }],
  389: [function(t, e, i) {
    arguments[4][261][0].apply(i, arguments)
  }, {
    "@marcom/ac-polyfills/String/prototype.trim": void 0,
    dup: 261
  }],
  390: [function(t, e, i) {
    arguments[4][262][0].apply(i, arguments)
  }, {
    dup: 262
  }],
  391: [function(t, e, i) {
    arguments[4][263][0].apply(i, arguments)
  }, {
    dup: 263
  }],
  392: [function(t, e, i) {
    arguments[4][264][0].apply(i, arguments)
  }, {
    dup: 264
  }],
  393: [function(t, e, i) {
    arguments[4][265][0].apply(i, arguments)
  }, {
    dup: 265
  }],
  394: [function(t, e, i) {
    arguments[4][266][0].apply(i, arguments)
  }, {
    "./capitalize": 388,
    "./splitWords": 391,
    "./utils/transformWords": 400,
    dup: 266
  }],
  395: [function(t, e, i) {
    arguments[4][267][0].apply(i, arguments)
  }, {
    "./splitWords": 391,
    dup: 267
  }],
  396: [function(t, e, i) {
    arguments[4][268][0].apply(i, arguments)
  }, {
    "./splitWords": 391,
    dup: 268
  }],
  397: [function(t, e, i) {
    arguments[4][269][0].apply(i, arguments)
  }, {
    "./internal/normalizeTrimCharacters": 390,
    dup: 269
  }],
  398: [function(t, e, i) {
    arguments[4][270][0].apply(i, arguments)
  }, {
    "./internal/normalizeTrimCharacters": 390,
    dup: 270
  }],
  399: [function(t, e, i) {
    arguments[4][271][0].apply(i, arguments)
  }, {
    "./internal/normalizeTrimCharacters": 390,
    dup: 271
  }],
  400: [function(t, e, i) {
    arguments[4][272][0].apply(i, arguments)
  }, {
    "../splitWords": 391,
    dup: 272
  }],
  401: [function(t, e, i) {
    e.exports.Slider = t("./ac-slider/Slider")
  }, {
    "./ac-slider/Slider": 402
  }],
  402: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-traversal"),
      r = t("@marcom/ac-dom-events"),
      o = t("@marcom/ac-event-emitter"),
      s = t("@marcom/ac-dom-metrics"),
      a = {
        min: 0,
        max: 1,
        step: 1,
        value: 0,
        orientation: "horizontal",
        template: '<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-thumb"></div>\n</div>'
      },
      c = Object.keys(a),
      l = function(t, e) {
        this.options = Object.assign({}, a, e), this.model = Object.create(this.options), this.el = t, t.className += " ac-slider-container", t.innerHTML = this.model.template, this.initialize()
      };
    l.prototype = Object.create(o.EventEmitter.prototype);
    var u = l.prototype;
    u.addEventListeners = function() {
      this.addEventListener(this.el, "mousedown", this.onMouseDown), this.addEventListener(this.el, "touchstart", this.onTouchStart), this.addEventListener(this.el, "mouseover", this.onMouseOver), this.addEventListener(this.el, "mouseleave", this.onMouseLeave), this.addEventListener(this.el, "touchend", this.onTouchEnd), this.addEventListener(document, "touchend", this.onMouseUp)
    }, u.addEventListener = r.addEventListener, u.bindMethods = function() {
      this.onMouseDown = this.bindMethod(this.onMouseDown, this), this.onTouchStart = this.bindMethod(this.onTouchStart, this), this.onMouseOver = this.bindMethod(this.onMouseOver, this), this.onMouseLeave = this.bindMethod(this.onMouseLeave, this), this.onTouchEnd = this.bindMethod(this.onTouchEnd, this), this.onMouseUp = this.bindMethod(this.onMouseUp, this), this.onMouseMove = this.bindMethod(this.onMouseMove, this), this.onTouchMove = this.bindMethod(this.onTouchMove, this)
    }, u.bindMethod = function(t, e) {
      return t.bind(e)
    }, u.correctValueMinMax = function(t, e, i) {
      return t > i && (t = i), t < e && (t = e), t
    }, u.calculateStepsToValue = function(t, e) {
      return Math.abs(t - e)
    }, u.calculateMaxSteps = function(t, e) {
      return Math.abs(e - t)
    }, u.calculateStepsEqualToPercentage = function(t, e) {
      return t / 100 * e
    }, u.calculateNextStepInRange = function(t, e, i, n) {
      var r = this.calculateMaxSteps(e, i),
        o = this.calculateStepsToValue(t, e),
        s = e + Math.floor(r / n) * n;
      return t = Math.min(s, e + Math.round(o / n) * n)
    }, u.dispatchEvent = r.dispatchEvent, u.disableUserControls = function() {
      this.removeEventListeners()
    }, u.enableUserControls = function() {
      this.addEventListeners()
    }, u.getNextValue = function(t, e, i, n) {
      return t = this.correctValueMinMax(t, e, i), "auto" !== n && (t = this.calculateNextStepInRange(t, e, i, n)), t
    }, u.getOrientation = function() {
      return this.model.orientation
    }, u.getValue = function() {
      return this.model.value
    }, u.getMin = function() {
      return this.model.min
    }, u.getMax = function() {
      return this.model.max
    }, u.getStep = function() {
      return this.model.step
    }, u.getClientXValue = function(t) {
      var e = this.getClientXFromEvent(t),
        i = s.getDimensions(this.thumbElement),
        n = (s.getViewportPosition(this.thumbElement), s.getDimensions(this.runnableTrackElement)),
        r = e - this.runnableTrackElement.getBoundingClientRect().left - i.width / 2,
        o = n.width - i.width,
        a = r / o * 100,
        c = this.calculateMaxSteps(this.getMin(), this.getMax()),
        l = this.calculateStepsEqualToPercentage(a, c);
      return this.getMin() + l
    }, u.getClientYValue = function(t) {
      var e = this.getClientYFromEvent(t),
        i = s.getDimensions(this.thumbElement),
        n = (s.getViewportPosition(this.thumbElement), s.getDimensions(this.runnableTrackElement)),
        r = s.getViewportPosition(this.runnableTrackElement),
        o = n.height - i.height,
        a = o - (e - r.top - i.height / 2),
        c = a / (n.height - i.height) * 100,
        l = this.calculateMaxSteps(this.model.min, this.model.max),
        u = this.calculateStepsEqualToPercentage(c, l);
      return this.model.min + u
    }, u.getClientValue = function(t) {
      t = t.originalEvent || t;
      var e;
      return e = "horizontal" === this.model.orientation ? this.getClientXValue(t) : this.getClientYValue(t)
    }, u.getClientXFromEvent = function(t) {
      return t.touches ? t.touches[0].clientX : t.clientX
    }, u.getClientYFromEvent = function(t) {
      return t.touches ? t.touches[0].clientY : t.clientY
    }, u.initialize = function() {
      this.setNodeReferences(), this.setValue(this.model.value), this.bindMethods(), this.addEventListeners()
    }, u.onMouseLeave = function() {
      this.preventDocumentMouseUpDispatch = !1
    }, u.onMouseDown = function(t) {
      var e = this.getClientValue(t);
      this.addEventListener(document, "mouseup", this.onMouseUp), this.addEventListener(document, "mousemove", this.onMouseMove), this.trigger("grab", this.getValue()), this.setValue(e)
    }, u.onMouseUp = function() {
      this.removeEventListener(document, "mouseup", this.onMouseUp), this.removeEventListener(document, "mousemove", this.onMouseMove), this.trigger("release", this.getValue()), this.preventDocumentMouseUpDispatch || this.dispatchEvent(this.el, "mouseup")
    }, u.onMouseOver = function() {
      this.preventDocumentMouseUpDispatch = !0
    }, u.onTouchEnd = function() {
      this.removeEventListener(document, "touchend", this.onTouchEnd), this.removeEventListener(document, "touchmove", this.onTouchMove), this.trigger("release", this.getValue()), this.preventDocumentMouseUpDispatch || this.dispatchEvent(this.el, "touchend")
    }, u.onTouchStart = function(t) {
      var e = this.getClientValue(t);
      this.addEventListener(document, "touchend", this.onMouseUp), this.addEventListener(document, "touchmove", this.onTouchMove), this.trigger("grab", this.getValue()), this.setValue(e)
    }, u.onMouseMove = function(t) {
      var e = this.getClientValue(t);
      this.setValue(e)
    }, u.onTouchMove = function(t) {
      t.preventDefault && t.preventDefault();
      var e = this.getClientValue(t);
      this.setValue(e)
    }, u.getElementOrientationOffsetValue = function(t, e) {
      return "horizontal" === e ? s.getDimensions(t).width : s.getDimensions(t).height
    }, u.getAvailableRunnableTrack = function(t, e) {
      var i = this.getElementOrientationOffsetValue(this.thumbElement, e);
      return t - i
    }, u.getPercentageByValue = function(t, e) {
      return t = this.calculateStepsToValue(t, this.getMin()), e = this.calculateMaxSteps(this.getMin(), this.getMax()), t / e * 100
    }, u.getPercentageOfRunnableTrack = function(t) {
      var e = this.getOrientation(),
        i = this.getElementOrientationOffsetValue(this.runnableTrackElement, e),
        n = this.getAvailableRunnableTrack(i, e),
        r = this.getPercentageByValue(t, this.getMax()),
        o = r / 100 * n;
      return o / i * 100
    }, u.onChange = function(t) {
      var e = this.getPercentageOfRunnableTrack(t);
      isNaN(e) || ("horizontal" === this.getOrientation() ? this.thumbElement.style.left = e + "%" : this.thumbElement.style.bottom = e + "%", this.trigger("change", this.getValue()))
    }, u.removeEventListeners = function() {
      this.removeEventListener(this.el, "mousedown", this.onMouseDown), this.removeEventListener(this.el, "touchstart", this.onTouchStart), this.removeEventListener(this.el, "mouseover", this.onMouseOver), this.removeEventListener(this.el, "mouseleave", this.onMouseLeave), this.removeEventListener(this.el, "touchend", this.onTouchEnd), this.removeEventListener(document, "touchend", this.onMouseUp)
    }, u.removeEventListener = r.removeEventListener, u.setNodeReferences = function() {
      this.runnableTrackElement = n.querySelector(".ac-slider-runnable-track", this.el), this.thumbElement = n.querySelector(".ac-slider-thumb", this.el)
    }, u.setOrientation = function(t) {
      this.set("orientation", t)
    }, u.setValue = function(t) {
      t = this.getNextValue(t, this.getMin(), this.getMax(), this.getStep()), this.set("value", t), this.onChange(t)
    }, u.setMin = function(t) {
      this.set("min", t)
    }, u.setMax = function(t) {
      this.set("max", t)
    }, u.setStep = function(t) {
      this.set("step", t)
    }, u.set = function(t, e) {
      if (c.indexOf(t) > -1 && this.model[t] !== e) {
        var i = this.model[t];
        this.model[t] = e, this.trigger("change:model:" + t, {
          previous: i,
          current: e
        })
      }
    }, e.exports = l
  }, {
    "@marcom/ac-dom-events": 8,
    "@marcom/ac-dom-metrics": 32,
    "@marcom/ac-dom-traversal": 47,
    "@marcom/ac-event-emitter": 220
  }],
  403: [function(t, e, i) {
    "use strict";
    var n = t("./view"),
      r = t("./model"),
      o = t("./elements/element"),
      s = {
        create: function(t, e) {
          t = t || {}, e = e || {}, t.elementClassPrefix = t.elementClassPrefix || "controls", e.elementClassPrefix = t.elementClassPrefix;
          var i = this.Model(e),
            n = this.View(Object.assign({}, t, {
              model: i
            }));
          return n.initialize(), n
        },
        Model: r,
        View: n,
        element: o
      };
    e.exports = s
  }, {
    "./elements/element": 406,
    "./model": 424,
    "./view": 426
  }],
  404: [function(t, e, i) {
    "use strict";
    var n = (t("@marcom/ac-classlist"), t("./element")),
      r = n.newType({
        className: "thirty-seconds-back-button",
        events: [{
          type: "click",
          callback: "thirySecondsBack"
        }],
        thirySecondsBack: function() {
          var t = this.player.getCurrentTime(),
            e = t - 30;
          this.player.setCurrentTime(e < 0 ? 0 : e)
        }
      });
    e.exports = r
  }, {
    "./element": 406,
    "@marcom/ac-classlist": 217
  }],
  405: [function(t, e, i) {
    "use strict";
    var n = t("./element"),
      r = n.newType({
        className: "elapsed-time",
        _initialize: function() {
          this.options.model.on("change:elapsedTime", this._setElapsedTime, this)
        },
        _setElapsedTime: function(t) {
          this.el.innerHTML = t.value || t
        }
      });
    e.exports = r
  }, {
    "./element": 406
  }],
  406: [function(t, e, i) {
    "use strict";
    var n = {
      className: "",
      create: function(t, e) {
        var i = Object.create(this);
        return i.el = t, i.options = e, i.player = e.player, i._initialize(), i
      },
      events: [],
      newType: function(t) {
        var e = Object.assign({}, this, t);
        return e
      },
      setElementAttributes: function() {
        this.elementAttributeString.forEach(function(t) {
          var e;
          "string" == typeof t ? (e = this._getLocalizationAttribute(t), this._setAttributeText(e)) : this[t.condition]() && (e = this._getLocalizationAttribute(t.string), this._setAttributeText(e))
        }, this)
      },
      _getLocalizationAttribute: function(t) {
        return this.options.model.get(t)
      },
      _initialize: function() {
        this.elementAttributeString = this.elementAttributeString || [], this.setElementAttributes()
      },
      _setAttributeText: function(t) {
        ["value", "aria-label"].forEach(function(e) {
          this.el.setAttribute(e, t)
        }, this)
      }
    };
    e.exports = n
  }, {}],
  407: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-classlist"),
      r = t("@marcom/ac-fullscreen"),
      o = t("@marcom/ac-feature"),
      s = t("./element"),
      a = !o.isDesktop(),
      c = s.newType({
        className: "full-screen-button",
        events: [{
          type: "click",
          callback: "_toggleFullscreen"
        }],
        _exitFullscreen: function(t) {
          r.exitFullscreen(t)
        },
        _getFullScreenElement: function() {
          var t = !1;
          return this._isNotDesktop() && (t = this.options.player.getMediaElement()), t || this.options.fullScreenElement || this.options.player.getMediaElement()
        },
        _isFullScreen: function(t) {
          return this._supportsFullscreen(t)
        },
        _initialize: function() {
          this.isFullScreen = !1, this._supportsFullscreen(this._getFullScreenElement()) && (this._removeFullscreenUnsupportedClass(), this._listenForFullscreenChange())
        },
        _isNotDesktop: function() {
          return a
        },
        _listenForFullscreenChange: function() {
          r.on("enterfullscreen", this._onEnterFullScreen, this), r.on("exitfullscreen", this._onExitFullScreen, this)
        },
        _onEnterFullScreen: function() {
          this.isFullScreen = !0, n.add(this.el, "is-fullscreen")
        },
        _onExitFullScreen: function() {
          this.isFullScreen = !1, n.remove(this.el, "is-fullscreen")
        },
        _requestFullscreen: function(t) {
          r.requestFullscreen(t)
        },
        _removeFullscreenUnsupportedClass: function() {
          n.remove(this.el, "fullscreen-unsupported")
        },
        _supportsFullscreen: function(t) {
          return r.fullscreenEnabled(t)
        },
        _toggleFullscreen: function() {
          var t = this._getFullScreenElement();
          this.isFullScreen ? this._exitFullscreen(t) : this._requestFullscreen(t)
        }
      });
    e.exports = c
  }, {
    "./element": 406,
    "@marcom/ac-classlist": 217,
    "@marcom/ac-feature": 184,
    "@marcom/ac-fullscreen": 605
  }],
  408: [function(t, e, i) {
    "use strict";
    var n = t("./element"),
      r = n.newType({
        className: "max-volume-button",
        events: [{
          type: "click",
          callback: "maxVolume"
        }],
        maxVolume: function() {
          this.options.player.setMuted(!1), this.options.player.setVolume(1)
        }
      });
    e.exports = r
  }, {
    "./element": 406
  }],
  409: [function(t, e, i) {
    "use strict";
    var n = t("./element"),
      r = n.newType({
        className: "min-volume-button",
        events: [{
          type: "click",
          callback: "minVolume"
        }],
        minVolume: function() {
          this.options.player.setMuted(!1), this.options.player.setVolume(0)
        }
      });
    e.exports = r
  }, {
    "./element": 406
  }],
  410: [function(t, e, i) {
    "use strict";
    var n = t("./element"),
      r = n.newType({
        className: "mute-volume-button",
        events: [{
          type: "click",
          callback: "mute"
        }],
        mute: function() {
          this.options.player.setMuted(!0)
        }
      });
    e.exports = r
  }, {
    "./element": 406
  }],
  411: [function(t, e, i) {
    "use strict";
    var n = t("./element"),
      r = n.newType({
        className: "toggle-mute-volume-button",
        events: [{
          type: "click",
          callback: "toggleMutedVolume"
        }],
        toggleMutedVolume: function() {
          var t = !this.options.player.getMuted();
          this.options.player.setMuted(t)
        }
      });
    e.exports = r
  }, {
    "./element": 406
  }],
  412: [function(t, e, i) {
    "use strict";
    var n = t("./element"),
      r = n.newType({
        className: "pause-button",
        events: [{
          type: "click",
          callback: "pause"
        }],
        pause: function() {
          this.options.player.pause()
        }
      });
    e.exports = r
  }, {
    "./element": 406
  }],
  413: [function(t, e, i) {
    "use strict";
    var n = t("./element"),
      r = n.newType({
        className: "play-button",
        events: [{
          type: "click",
          callback: "play"
        }],
        play: function() {
          this.options.player.play()
        }
      });
    e.exports = r
  }, {
    "./element": 406
  }],
  414: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-classlist"),
      r = t("./element"),
      o = r.newType({
        className: "play-pause-button",
        events: [{
          type: "click",
          callback: "playPauseToggle"
        }],
        elementAttributeString: [{
          condition: "playerIsPlaying",
          string: "pause"
        }, {
          condition: "playerIsPaused",
          string: "play"
        }],
        playerIsPlaying: function() {
          return !this.player.getPaused()
        },
        playerIsPaused: function() {
          return this.player.getPaused()
        },
        playPauseToggle: function() {
          this.player.getPaused() ? this.player.play() : this.player.pause()
        },
        _addEventListeners: function() {
          this.player.on("play", this._handleStateChange, this), this.player.on("pause", this._handleStateChange, this)
        },
        _handleStateChange: function() {
          this._toggleIsPlayingClass(), this.setElementAttributes()
        },
        _initialize: function() {
          r._initialize.call(this), this._addEventListeners(), this._handleStateChange()
        },
        _toggleIsPlayingClass: function() {
          var t = this.player.getPaused() ? "remove" : "add";
          n[t](this.el, "is-playing")
        }
      });
    e.exports = o
  }, {
    "./element": 406,
    "@marcom/ac-classlist": 217
  }],
  415: [function(t, e, i) {
    "use strict";
    var n = t("./element"),
      r = (t("@marcom/ac-classlist"), t("@marcom/ac-dom-traversal")),
      o = (t("@marcom/ac-dom-events"), t("@marcom/ac-slider")),
      s = t("../mixins/get-model-attribute"),
      a = t("../mixins/cursor-pointer"),
      c = n.newType(Object.assign({
        className: "progress-indicator",
        _bindSetupElement: function() {
          return this._setupElement.bind(this)
        },
        _getCurrentTime: function(t) {
          return t && t.value ? t.value : this.polyfilledEl.getValue()
        },
        _getSliderInstance: function() {
          return new o.Slider(this.el, {
            template: '<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-inner-track">\n\t\t<div class="ac-slider-thumb">\n\t\t\t<div class="ac-slider-thumb-background"></div>\n\t\t\t<div class="ac-slider-scrubbed"></div>\n\t\t</div>\n\t</div>\n</div>\n<input class="ac-slider-input-type-range" type="range" value="0" step="1" min="0" max="1"  />',
            min: 0,
            max: +this.options.model.get("duration"),
            step: isNaN(+this.el.getAttribute("step")) ? this.el.getAttribute("step") : +this.el.getAttribute("step"),
            value: +this.el.getAttribute("value")
          })
        },
        _handleProgressIndicatorChange: function(t) {
          this.options.model.set({
            timeupdate: this._getCurrentTime(t)
          })
        },
        _initialize: function() {
          n._initialize.call(this), this._setupElement = this._bindSetupElement(), this.getModelAttribute("duration").then(this._setupElement)
        },
        _onGrab: function() {
          this.options.model.set({
            ignoreTimeupdate: !0
          }), this.options.player.off("timeupdate", this._setIndicatorValue), this.polyfilledEl.on("change", this._setModelValue, this), this.forceCursorPointer()
        },
        _onRelease: function() {
          this._setPlayerValue(), this.options.model.set({
            ignoreTimeupdate: !1
          }), this.options.player.on("timeupdate", this._setIndicatorValue, this), this.polyfilledEl.off("change", this._setModelValue), this.disableForcedCursorPointer()
        },
        _onPlayerDurationChange: function() {
          isNaN(this.options.player.getDuration()) || this.polyfilledEl.setMax(this.options.player.getDuration())
        },
        _polyfillRangeInput: function() {
          this.polyfilledEl = this._getSliderInstance(), this.thumbEl = r.querySelector(".ac-slider-thumb", this.el), this.scrubbedEl = r.querySelector(".ac-slider-scrubbed", this.el)
        },
        _setIndicatorValue: function() {
          var t = this.options.player.getCurrentTime();
          this.polyfilledEl.setValue(t)
        },
        _setPlayerValue: function() {
          var t = this.polyfilledEl.getValue();
          this.options.player.setCurrentTime(t)
        },
        _setModelValue: function() {
          var t = this.polyfilledEl.getValue();
          this.options.model.set({
            timeupdate: t
          })
        },
        _setupElement: function(t) {
          this.el.setAttribute("max", t), this._polyfillRangeInput(), this.el.setAttribute("aria-valuemax", this.polyfilledEl.getMax()), this.polyfilledEl.on("change:model:max", function() {
            this.el.setAttribute("aria-valuemax", this.polyfilledEl.getMax())
          }, this), this.polyfilledEl.on("change:model:value", function() {
            this.el.setAttribute("aria-valuenow", this.polyfilledEl.getValue())
          }, this), this.el.setAttribute("aria-valuemin", this.polyfilledEl.getMin()), this.polyfilledEl.on("change:model:min", function() {
            this.el.setAttribute("aria-valuemin", this.polyfilledEl.getMin())
          }, this), this.options.player.on("timeupdate", this._setIndicatorValue, this), this.polyfilledEl.on("grab", this._onGrab, this), this.polyfilledEl.on("release", this._onRelease, this), this.options.player.on("durationchange", this._onPlayerDurationChange, this)
        }
      }, s, a));
    e.exports = c
  }, {
    "../mixins/cursor-pointer": 422,
    "../mixins/get-model-attribute": 423,
    "./element": 406,
    "@marcom/ac-classlist": 217,
    "@marcom/ac-dom-events": 8,
    "@marcom/ac-dom-traversal": 47,
    "@marcom/ac-slider": 401
  }],
  416: [function(t, e, i) {
    "use strict";
    var n = t("./element"),
      r = t("../mixins/get-model-attribute"),
      o = n.newType(Object.assign({}, {
        className: "remaining-time",
        _bindUpdateRemainingTimeIndicator: function() {
          return this._updateRemainingTimeIndicator.bind(this)
        },
        _initialize: function() {
          this._updateRemainingTimeIndicator = this._bindUpdateRemainingTimeIndicator(), this.options.model.on("change:remainingTime", this._updateRemainingTimeIndicator, this), this.getModelAttribute("remainingTime").then(this._updateRemainingTimeIndicator)
        },
        _updateRemainingTimeIndicator: function(t) {
          this.el.innerHTML = t.value || t
        }
      }, r));
    e.exports = o
  }, {
    "../mixins/get-model-attribute": 423,
    "./element": 406
  }],
  417: [function(t, e, i) {
    "use strict";
    var n = t("./text-tracks"),
      r = n.newType({
        className: "text-tracks-off-button",
        events: [{
          type: "click",
          callback: "textTracksOff"
        }],
        elementAttributeString: ["captionsturnedoff"]
      });
    e.exports = r
  }, {
    "./text-tracks": 420
  }],
  418: [function(t, e, i) {
    "use strict";
    var n = t("./text-tracks"),
      r = n.newType({
        className: "text-tracks-on-button",
        events: [{
          type: "click",
          callback: "textTracksOn"
        }],
        elementAttributeString: ["captionsturnedon"]
      });
    e.exports = r
  }, {
    "./text-tracks": 420
  }],
  419: [function(t, e, i) {
    "use strict";
    var n = (t("@marcom/ac-classlist"), t("./text-tracks")),
      r = n.newType({
        className: "text-tracks-toggle-button",
        events: [{
          type: "click",
          callback: "textTracksToggle"
        }],
        textTracksToggle: function() {
          var t = this._getTextTrackModeAndIndex(),
            e = t.get("mode");
          "showing" === e ? this.textTracksOff() : this.textTracksOn()
        },
        elementAttributeString: [{
          condition: "textTracksAreShowing",
          string: "captionsturnedoff"
        }, {
          condition: "textTracksAreDisabled",
          string: "captionsturnedon"
        }],
        textTracksAreShowing: function() {
          return this.player.getVisibleTextTracks().models.length > 0
        },
        textTracksAreDisabled: function() {
          return 0 === this.player.getVisibleTextTracks().models.length
        },
        _addEventListeners: function() {
          n._addEventListeners.call(this), this.player.on("texttrackshow", this.setElementAttributes, this), this.player.on("texttrackhide", this.setElementAttributes, this)
        }
      });
    e.exports = r
  }, {
    "./text-tracks": 420,
    "@marcom/ac-classlist": 217
  }],
  420: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-classlist"),
      r = t("./element"),
      o = {
        visible: "text-tracks-visible",
        none: "no-text-tracks"
      },
      s = r.newType({
        onTextTracksVisible: function() {
          n.add(this.el, o.visible)
        },
        onTextTracksHidden: function() {
          n.remove(this.el, o.visible)
        },
        textTracksOn: function() {
          var t = this._getTextTrackModeAndIndex();
          t.show()
        },
        textTracksOff: function() {
          var t = this._getTextTrackModeAndIndex();
          t.hide()
        },
        _addEventListeners: function() {
          this._getTextTrackModeAndIndex();
          this.player.on("texttrackshow", this.onTextTracksVisible, this), this.player.on("texttrackhide", this.onTextTracksHidden, this), this.player.on("addtrack", this._addTextTrackClass, this), this.options.model.on("change:localization", this.setElementAttributes, this)
        },
        _addTextTrackClass: function() {
          var t = this.player.getEnabledTextTracks().models;
          t.length ? (this._removeNoTextTracksClass(), this.player.getVisibleTextTracks().models.length ? this.onTextTracksVisible() : this.onTextTracksHidden()) : this._addNoTextTracksClass()
        },
        _addNoTextTracksClass: function() {
          n.add(this.el, o.none)
        },
        _getTextTrackModeAndIndex: function() {
          var t = this.player.getVisibleTextTracks().at(0);
          return t || (t = this.player.getEnabledTextTracks().at(0)), t
        },
        _initialize: function() {
          r._initialize.call(this), this._addTextTrackClass(), this._addEventListeners()
        },
        _removeNoTextTracksClass: function() {
          n.remove(this.el, o.none)
        },
        _toggleTextTracksVisibleClass: function(t) {
          var e = t ? "onTextTracksHidden" : "onTextTracksVisible";
          this[e]()
        },
        _toggleNoTextTracksClass: function(t) {
          var e = t ? "_removeNoTextTracksClass" : "_addNoTextTracksClass";
          this[e]()
        }
      });
    e.exports = s
  }, {
    "./element": 406,
    "@marcom/ac-classlist": 217
  }],
  421: [function(t, e, i) {
    "use strict";
    var n = t("./element"),
      r = t("@marcom/ac-classlist"),
      o = (t("@marcom/ac-dom-events"), t("@marcom/ac-slider")),
      s = t("@marcom/ac-dom-traversal"),
      a = t("../mixins/get-model-attribute"),
      c = t("../mixins/cursor-pointer"),
      l = n.newType(Object.assign({
        className: "volume-level-indicator",
        events: [{
          type: "change",
          callback: "handleVolumeIndicatorChange"
        }],
        handleVolumeIndicatorChange: function(t) {
          this._unmute();
          var e = this._getVolume(t);
          this._setVolume(e)
        },
        ignoreVolumechange: function(t) {
          this.options.model.set({
            ignoreVolumechange: !0
          }), this._stopListeningForVolumechange(), this.forceCursorPointer()
        },
        setVolumeOnMove: function() {
          this._setVolume(this._getVolume())
        },
        _bindResumeVolumechange: function() {
          return this._resumeVolumechange.bind(this)
        },
        _bindSetupElement: function() {
          return this._setupElement.bind(this)
        },
        _bindHandleVolumeIndicatorChange: function() {
          return this.handleVolumeIndicatorChange.bind(this)
        },
        _getVolume: function(t) {
          return t && t.value ? t.value : this.polyfilledEl.getValue()
        },
        _getSliderInstance: function() {
          var t = this.options.player.getVolume();
          return this.options.player.getMuted() === !0 && (t = 0), new o.Slider(this.el, {
            template: '<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-thumb">\n\t\t<div class="ac-slider-thumb-background"></div>\n\t</div>\n\t<div class="ac-slider-inner-track">\n\t\t<div class="ac-slider-scrubbed"></div>\n\t</div>\n</div>\n<input class="ac-slider-input-type-range" type="range" value="0" step="1" min="0" max="1"  />',
            min: 0,
            max: 1,
            step: +this.el.getAttribute("step"),
            value: t
          })
        },
        _initialize: function() {
          n._initialize.call(this), this.handleVolumeIndicatorChange = this._bindHandleVolumeIndicatorChange(), this._resumeVolumechange = this._bindResumeVolumechange(), this._setupElement = this._bindSetupElement(), this.getModelAttribute("volume").then(this._setupElement)
        },
        _listenForVolumechange: function(t) {
          this.options.model.on("change:volume", this._updateVolumeIndicator, this), this.polyfilledEl.off("release", this._resumeVolumechange), this.polyfilledEl.off("change", this.handleVolumeIndicatorChange), this.polyfilledEl.on("grab", this.ignoreVolumechange, this);
        },
        _polyfillRangeInput: function() {
          this.polyfilledEl = this._getSliderInstance(), this.scrubbed = s.querySelector(".ac-slider-scrubbed", this.el), this.thumb = s.querySelector(".ac-slider-thumb", this.el), this.polyfilledEl.on("change", function() {
            this.scrubbed.style.marginLeft = parseInt(this.thumb.style.left, 10) + this.thumb.offsetWidth / 2 / this.el.offsetWidth * 100 + "%"
          }, this), this.polyfilledEl.trigger("change", this.polyfilledEl.getValue())
        },
        _resumeVolumechange: function(t) {
          this.options.model.set({
            ignoreVolumechange: !1
          }), this._listenForVolumechange(), this._setVolume(this._getVolume()), this.disableForcedCursorPointer()
        },
        _setVolume: function(t) {
          this._unmute(), this.options.player.setVolume(t)
        },
        _setupElement: function(t) {
          this.el.setAttribute("value", t), this._polyfillRangeInput(), this._listenForVolumechange()
        },
        _stopListeningForVolumechange: function() {
          this.options.model.off("change:volume", this._updateVolumeIndicator, this), this.polyfilledEl.on("release", this._resumeVolumechange, this), this.polyfilledEl.on("change", this.handleVolumeIndicatorChange, this), this.polyfilledEl.off("grab", this.ignoreVolumechange)
        },
        _toggleVolumeLevelIndicator: function(t) {
          r.toggle(this.el, "is-visible")
        },
        _updateVolumeIndicator: function(t) {
          var e = t && null !== t.value ? t.value : this.options.player.getVolume();
          this.polyfilledEl.setValue(e)
        },
        _unmute: function() {
          this.options.player.getMuted() && this.options.player.setMuted(!1)
        }
      }, a, c));
    e.exports = l
  }, {
    "../mixins/cursor-pointer": 422,
    "../mixins/get-model-attribute": 423,
    "./element": 406,
    "@marcom/ac-classlist": 217,
    "@marcom/ac-dom-events": 8,
    "@marcom/ac-dom-traversal": 47,
    "@marcom/ac-slider": 401
  }],
  422: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-classlist"),
      r = t("@marcom/ac-dom-events"),
      o = "cursor-pointer";
    e.exports = {
      disableForcedCursorPointer: function() {
        n.remove(document.body, o), this.onSelectStartResumeDefault()
      },
      forceCursorPointer: function() {
        n.add(document.body, o), this.onSelectStartPreventDefault()
      },
      onSelectStartResumeDefault: function() {
        r.removeEventListener(document, "selectstart", this.preventDefault)
      },
      onSelectStartPreventDefault: function() {
        r.addEventListener(document, "selectstart", this.preventDefault)
      },
      preventDefault: function(t) {
        r.preventDefault(t)
      }
    }
  }, {
    "@marcom/ac-classlist": 217,
    "@marcom/ac-dom-events": 8
  }],
  423: [function(t, e, i) {
    "use strict";
    e.exports = {
      getModelAttribute: function(t) {
        return new Promise(function(e, i) {
          this.options.model.has(t) ? e(this.options.model.get(t)) : this.options.model.once("change:" + t, function(t) {
            e(t.value)
          }, this)
        }.bind(this))
      }
    }
  }, {}],
  424: [function(t, e, i) {
    "use strict";
    var n = t("ac-mvc-model").Model,
      r = t("@marcom/ac-video-localization").localization,
      o = function(t) {
        return this instanceof o ? (n.apply(this, arguments), void this.initialize()) : new o(t)
      };
    o.prototype = Object.create(n.prototype);
    var s = o.prototype;
    Object.assign(s, {
      defaultAttributes: {
        backthirtyseconds: "Back 30 Seconds",
        playpause: "Play/Pause",
        play: "Play",
        pause: "Pause",
        togglemutevolume: "Toggle Mute Volume",
        mutevolume: "Mute Volume",
        minvolume: "Min Volume",
        adjustvolume: "Adjust Volume",
        fastreverse: "Fast Reverse",
        fastforward: "Fast Forward",
        fullvolume: "Full Volume",
        fullscreen: "Full Screen",
        captionscontrol: "Closed Captions",
        captionsturnedon: "Closed Captions On",
        captionsturnedoff: "Closed Captions Off",
        subtitlescontrol: "Subtitles",
        subtitlesturnedon: "Subtitles On",
        subtitlesturnedoff: "Subtitles Off",
        sizescontrol: "Video Size",
        downloadcontrol: "Download Video",
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
        remaining: "remaining"
      },
      getLocalizationPromise: function() {
        return r.create()
      },
      initialize: function() {
        this.localize = this._bindLocalize(), this.getLocalizationPromise().then(this.localize)
      },
      localize: function(t) {
        this.set(t.attributes), this.trigger("change:localization")
      },
      _bindLocalize: function() {
        return this.localize.bind(this)
      }
    }), e.exports = o
  }, {
    "@marcom/ac-video-localization": 285,
    "ac-mvc-model": 449
  }],
  425: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-string"),
      r = {
        addLeadingZero: function(t, e) {
          if (e = e || 2, t < 10 || e > 2)
            for (t = String(t); t.length < e;) t = "0" + t;
          return t
        },
        formatTime: function(t, e) {
          if (isNaN(t)) return "00:00";
          t = this.splitTime(Math.floor(t), function(t) {
            return this.addLeadingZero(t, e)
          }.bind(this));
          var i = "{PN}{minutes}:{seconds}",
            r = n.supplant(i, {
              PN: t.negativeModifier,
              minutes: t.minutes,
              seconds: t.seconds
            });
          return r
        },
        splitTime: function(t, e) {
          e = e || function(t) {
            return t
          };
          var i = {
            negativeModifier: "",
            minutes: 0,
            seconds: 0
          };
          if (isNaN(t)) return i;
          i.negativeModifier = t < 0 ? "-" : "", t = Math.abs(t), i.minutes = Math.floor(t / 60), i.seconds = t % 60;
          for (var n in i) "number" == typeof i[n] && (i[n] = e(i[n]));
          return i
        }
      };
    e.exports = r
  }, {
    "@marcom/ac-string": 387
  }],
  426: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-dom-traversal"),
      r = t("@marcom/ac-string"),
      o = t("@marcom/ac-classlist"),
      s = t("@marcom/ac-mvc-view").View,
      a = t("./time"),
      c = {
        "back-30-seconds-button": t("./elements/back-30-seconds-button"),
        "elapsed-time-indicator": t("./elements/elapsed-time-indicator"),
        element: t("./elements/element"),
        "full-screen-button": t("./elements/full-screen-button"),
        "max-volume-button": t("./elements/max-volume-button"),
        "min-volume-button": t("./elements/min-volume-button"),
        "mute-button": t("./elements/mute-button"),
        "mute-toggle-button": t("./elements/mute-toggle-button"),
        "pause-button": t("./elements/pause-button"),
        "play-button": t("./elements/play-button"),
        "play-pause-button": t("./elements/play-pause-button"),
        "progress-indicator": t("./elements/progress-indicator"),
        "remaining-time-indicator": t("./elements/remaining-time-indicator"),
        "text-tracks-off-button": t("./elements/text-tracks-off-button"),
        "text-tracks-on-button": t("./elements/text-tracks-on-button"),
        "text-tracks-toggle-button": t("./elements/text-tracks-toggle-button"),
        "text-tracks": t("./elements/text-tracks"),
        "volume-level-indicator": t("./elements/volume-level-indicator")
      },
      l = function(t) {
        return this instanceof l ? (s.apply(this, arguments), void(this.elements = [])) : new l(t)
      };
    l.prototype = Object.create(s.prototype);
    var u = l.prototype;
    Object.assign(u, {
      className: "ac-video-controls",
      initialize: function() {
        this._addInactiveClasses(), this.options.player && (this._onPlayerReady = this._bindOnPlayerReady(), this.playerIsReady(this.options.player).then(this._onPlayerReady)), this.options.model.once("change:localization", this.render, this), this.options.model.on("change:timeupdate", this._onModelTimeUpdate, this)
      },
      playerIsReady: function(t) {
        var e = t.getReadyState(),
          i = t.getPreload();
        return new Promise(function(n, r) {
          4 === e ? n() : "metadata" === i ? 3 === e ? n() : t.on("loadedmetadata", n) : t.on("canplay", n)
        })
      },
      render: function() {
        this.el.innerHTML = this._getParsedTemplate(this.model.attributes), o.add(this.el, this.className), o.add(this.el, this._getSkin()), this._getSkin() === this._defaultSkin && this.el.setAttribute("data-hires", "false"), this._onRender().resolve()
      },
      _addInactiveClasses: function() {
        o.add(this.el, "inactive")
      },
      _bindSetupElements: function() {
        return this._setupElements.bind(this)
      },
      _bindOnPlayerReady: function() {
        return this._onPlayerReady.bind(this)
      },
      _currentTimeIsWholeNumber: function(t) {
        return t = Math.floor(t), 0 === t || (t !== this._previousCurrentTime ? (this._previousCurrentTime = t, !0) : void 0)
      },
      _defaultTemplate: '<div class="left row-1">\n\t<input type="button" class="{elementClassPrefix}-min-volume-button {elementClassPrefix}-button" value="{minvolume}" aria-label="{minvolume}" role="button" tabindex="0">\n\t<div class="{elementClassPrefix}-volume-level-indicator" max="1" step="0.09090909090909091"></div>\n\t<input type="button" class="{elementClassPrefix}-max-volume-button {elementClassPrefix}-button" value="{fullvolume}" aria-label="{fullvolume}" role="button" tabindex="0">\n</div>\n\n<div class="center row-1">\n\t<input type="button" class="{elementClassPrefix}-play-pause-button {elementClassPrefix}-button" value="{playpause}" aria-label="{playpause}" role="button" tabindex="0">\n</div>\n\n<div class="right row-1">\n\t<input type="button" class="{elementClassPrefix}-text-tracks-toggle-button {elementClassPrefix}-button no-text-tracks" value="{textTrackscontrol}" aria-label="{textTrackscontrol}" role="button" tabindex="0">\n\t<input type="button" class="{elementClassPrefix}-full-screen-button {elementClassPrefix}-button fullscreen-unsupported" value="{fullscreen}" aria-label="{fullscreen}" role="button" tabindex="0">\n</div>\n\n<div class="left row-2">\n\t<div class="{elementClassPrefix}-elapsed-time-indicator">\n\t\t<span class="label">{elapsed}</span>\n\t\t<span class="{elementClassPrefix}-elapsed-time" aria-label="{elapsed}" tabindex="0" role="timer" aria-value="00:00">00:00</span>\n\t</div>\n</div>\n\n<div class="center row-2">\n\t<div class="{elementClassPrefix}-buffered-indicator"></div>\n\t<div class="{elementClassPrefix}-progress-indicator" aria-label="progress-indicator" role="progressbar" precision="float" min="0" max="{max}" step="auto" value="0" tabindex="0" aria-valuemax="{max}" aria-valuemin="{min}" aria-valuenow="{value}"></div>\n</div>\n\n<div class="right row-2">\n\t<div class="{elementClassPrefix}-remaining-time-indicator">\n\t<span class="label">{remaining}</span>\n\t<span class="{elementClassPrefix}-remaining-time" aria-label="{remaining}" tabindex="0" role="timer" aria-value="-00:00">-00:00</span>\n</div>\n</div>\n\n<div class="{elementClassPrefix}-inactive-container"></div>',
      _defaultSkin: "control-bar-skin-default",
      _getPromise: function() {
        var t, e, i;
        return i = new Promise(function(i, n) {
          t = i, e = n
        }), i.resolve = t, i.reject = e, i
      },
      _getSkin: function() {
        return this.options.skin || this._defaultSkin
      },
      _getCurrentTime: function(t) {
        return t && t.value ? t.value : this.options.player.getCurrentTime()
      },
      _getParsedTemplate: function(t) {
        var e = this.options.template || this._defaultTemplate;
        return r.supplant(e, t)
      },
      _listenToModelVolumechange: function() {
        this.options.player.off("volumechange", this._onVolumeChange), this.options.model.on("change:volume", this._onVolumeChange, this)
      },
      _listenToPlayerForVolumechange: function() {
        this.options.player.on("volumechange", this._onVolumeChange, this), this.options.model.off("change:volume", this._onVolumeChange), this.options.player.setVolume(this.options.model.get("volume"))
      },
      _onRender: function() {
        return this._onRenderPromise || (this._onRenderPromise = this._getPromise()), this._onRenderPromise
      },
      _onModelTimeUpdate: function(t) {
        this._currentTimeIsWholeNumber(t.value) && this._setModelRemainingAndElapsedTime(t.value)
      },
      _onPlayerTimeUpdate: function() {
        if (!this.options.model.get("ignoreTimeupdate")) {
          var t = this.options.player.getCurrentTime();
          this.options.model.set({
            timeupdate: t
          })
        }
      },
      _onPlayerReady: function() {
        this._setupElements = this._bindSetupElements(), this._onRender().then(this._setupElements), this.options.player.on("durationchange", this._onPlayerDurationChange, this), this._onVolumeChange(), this._onTimeupdate(), this._removeInactiveClasses(), this._onPlayerDurationChange(), this.options.player.on("timeupdate", this._onPlayerTimeUpdate, this), this._onVolumeChangeEvents()
      },
      _onVolumeChangeEvents: function() {
        this.options.model.on("change:ignoreVolumechange", this._onModelIgnoreVolumechange, this), this.options.player.on("volumechange loadedmetadata", this._onVolumeChange, this)
      },
      _onVolumeChange: function(t) {
        t = t || {};
        var e = t.value || this.options.player.getVolume();
        this.options.model.set({
          volume: e
        })
      },
      _onTimeupdate: function(t) {
        var e = this._getCurrentTime(t);
        this._currentTimeIsWholeNumber(e) && this._setModelRemainingAndElapsedTime(e)
      },
      _onModelIgnoreVolumechange: function(t) {
        t.value ? this._listenToModelVolumechange() : this._listenToPlayerForVolumechange()
      },
      _onPlayerDurationChange: function() {
        this.options.model.set({
          duration: this.options.player.getDuration()
        }), this._onTimeupdate()
      },
      _removeInactiveClasses: function() {
        o.remove(this.el, "inactive")
      },
      _setupElements: function() {
        var t;
        for (var e in c) try {
          if (e.match(/^element$|^time$|^text-tracks$/)) continue;
          t = n.querySelector("." + this.options.elementClassPrefix + "-" + c[e].className, this.el), t && (t = c[e].create(t, this.options), this.elements.push(t), t.events && this._setupElementEvents(t))
        } catch (i) {
          console.log("ERROR: ", e, i)
        }
      },
      _setModelRemainingAndElapsedTime: function(t) {
        var e = this.options.player.getDuration(),
          i = a.formatTime(t - Math.floor(e)),
          n = a.formatTime(t);
        this.options.model.set({
          remainingTime: i,
          elapsedTime: n
        })
      },
      _setupElementEvents: function(t) {
        for (var e, i, n, r = 0, o = t.events.length; r < o; r++) e = t.events[r], i = t[e.callback], n = e.delegate || "." + this.options.elementClassPrefix + "-" + t.className, this.on(e.type, n, i, t)
      }
    }), e.exports = l
  }, {
    "./elements/back-30-seconds-button": 404,
    "./elements/elapsed-time-indicator": 405,
    "./elements/element": 406,
    "./elements/full-screen-button": 407,
    "./elements/max-volume-button": 408,
    "./elements/min-volume-button": 409,
    "./elements/mute-button": 410,
    "./elements/mute-toggle-button": 411,
    "./elements/pause-button": 412,
    "./elements/play-button": 413,
    "./elements/play-pause-button": 414,
    "./elements/progress-indicator": 415,
    "./elements/remaining-time-indicator": 416,
    "./elements/text-tracks": 420,
    "./elements/text-tracks-off-button": 417,
    "./elements/text-tracks-on-button": 418,
    "./elements/text-tracks-toggle-button": 419,
    "./elements/volume-level-indicator": 421,
    "./time": 425,
    "@marcom/ac-classlist": 217,
    "@marcom/ac-dom-traversal": 47,
    "@marcom/ac-mvc-view": 382,
    "@marcom/ac-string": 387
  }],
  427: [function(t, e, i) {
    "use strict";
    var n = t("./ac-video-posterframe/factory");
    e.exports = {
      create: n.create,
      AttributePoster: t("./ac-video-posterframe/PosterAttribute"),
      ImageTagPoster: t("./ac-video-posterframe/PosterImageTag"),
      defaultPosterPath: t("./ac-video-posterframe/defaultPosterPath")
    }
  }, {
    "./ac-video-posterframe/PosterAttribute": 428,
    "./ac-video-posterframe/PosterImageTag": 429,
    "./ac-video-posterframe/defaultPosterPath": 430,
    "./ac-video-posterframe/factory": 431
  }],
  428: [function(t, e, i) {
    "use strict";

    function n() {
      r.apply(this, arguments)
    }
    var r = t("@marcom/ac-mvc-view").View,
      o = t("@marcom/ac-object"),
      s = n.prototype = o.create(r.prototype);
    s._renderPoster = function() {
      this.model.hasPoster() ? this.el.setAttribute("poster", this.model.getPoster()) : this.el.removeAttribute("poster")
    }, s.render = function() {
      this._renderPoster(), this.model.on("posterchange", this._renderPoster, this)
    }, e.exports = n
  }, {
    "@marcom/ac-mvc-view": 382,
    "@marcom/ac-object": 804
  }],
  429: [function(t, e, i) {
    "use strict";

    function n() {
      r.apply(this, arguments), this._img = null
    }
    var r = t("@marcom/ac-mvc-view").View,
      o = t("@marcom/ac-object"),
      s = "ac-video-poster-hide",
      a = n.prototype = o.create(r.prototype);
    a.tagName = "div", a.className = ["ac-video-poster"], a._renderSrc = function() {
      this.model.hasPoster() ? (this._img || (this._img = document.createElement("img"), this.el.appendChild(this._img)), this._img.setAttribute("src", this.model.getPoster())) : this._img && this._img.parentNode === this.el && (this.el.removeChild(this._img), this._img = null)
    }, a._hide = function() {
      this.addClassName(s)
    }, a._show = function() {
      this.removeClassName(s)
    }, a._onPlay = function() {
      var t = this.model.getCurrentTime();
      0 === t ? (this._show(), this.model.once("timeupdate", this._hide, this)) : this._hide()
    }, a._onReadyStateChange = function(t) {
      0 === t.readyState && this._show()
    }, a.render = function() {
      this._renderSrc(), this.model.on("readystatechange", this._onReadyStateChange, this), this.model.on("posterchange", this._renderSrc, this), this.model.on("play", this._onPlay, this), this.model.on("ended", this._show, this)
    }, e.exports = n
  }, {
    "@marcom/ac-mvc-view": 382,
    "@marcom/ac-object": 804
  }],
  430: [function(t, e, i) {
    "use strict";

    function n() {
      return r.isRetina()
    }
    var r = t("@marcom/ac-feature"),
      o = t("@marcom/ac-cname").cname;
    e.exports = function() {
      return n() ? o.formatUrl("/ac/ac-video-posterframe/1.0/images", "ac-video-poster_848x480_2x", ".jpg") : o.formatUrl("/ac/ac-video-posterframe/1.0/images", "ac-video-poster_848x480", ".jpg")
    }
  }, {
    "@marcom/ac-cname": 4,
    "@marcom/ac-feature": 184
  }],
  431: [function(t, e, i) {
    "use strict";

    function n() {
      return s.isHandheld()
    }
    var r = t("./PosterAttribute"),
      o = t("./PosterImageTag"),
      s = t("@marcom/ac-feature");
    e.exports = {
      create: function(t) {
        var e = null;
        return e = n() ? new r({
          model: t,
          element: t.getMediaElement()
        }) : new o({
          model: t
        })
      }
    }
  }, {
    "./PosterAttribute": 428,
    "./PosterImageTag": 429,
    "@marcom/ac-feature": 184
  }],
  432: [function(t, e, i) {
    arguments[4][220][0].apply(i, arguments)
  }, {
    "./ac-event-emitter/EventEmitter": 433,
    dup: 220
  }],
  433: [function(t, e, i) {
    arguments[4][221][0].apply(i, arguments)
  }, {
    dup: 221
  }],
  434: [function(t, e, i) {
    "use strict";
    e.exports = {
      SharedInstance: t("./ac-shared-instance/SharedInstance")
    }
  }, {
    "./ac-shared-instance/SharedInstance": 435
  }],
  435: [function(t, e, i) {
    "use strict";
    var n = window,
      r = "AC",
      o = "SharedInstance",
      s = n[r],
      a = function() {
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
            var n = typeof i;
            if ("string" === n || "number" === n) {
              if (!t[e] || !t[e][i]) return;
              return void(t[e][i] = null)
            }
            t[e] && (t[e] = null)
          }
        }
      }();
    s || (s = n[r] = {}), s[o] || (s[o] = a), e.exports = s[o]
  }, {}],
  436: [function(t, e, i) {
    "use strict";
    e.exports = {
      CID: t("./ac-mvc-cid/CID")
    }
  }, {
    "./ac-mvc-cid/CID": 437
  }],
  437: [function(t, e, i) {
    "use strict";

    function n() {
      this._idCount = 0
    }
    var r = t("ac-shared-instance").SharedInstance,
      o = "ac-mvc-cid:CID",
      s = "1.0.0",
      a = n.prototype;
    a._cidPrefix = "cid", a.getNewCID = function() {
      var t = this._cidPrefix + "-" + this._idCount;
      return this._idCount++, t
    }, e.exports = r.share(o, s, n)
  }, {
    "ac-shared-instance": 434
  }],
  438: [function(t, e, i) {
    function n(t, e) {
      if (0 == t[e].length) return t[e] = {};
      var i = {};
      for (var n in t[e]) g.call(t[e], n) && (i[n] = t[e][n]);
      return t[e] = i, i
    }

    function r(t, e, i, o) {
      var s = t.shift();
      if (!g.call(Object.prototype, i))
        if (s) {
          var a = e[i] = e[i] || [];
          "]" == s ? y(a) ? "" != o && a.push(o) : "object" == typeof a ? a[_(a).length] = o : a = e[i] = [e[i], o] : ~v(s, "]") ? (s = s.substr(0, s.length - 1), !E.test(s) && y(a) && (a = n(e, i)), r(t, a, s, o)) : (!E.test(s) && y(a) && (a = n(e, i)), r(t, a, s, o))
        } else y(e[i]) ? e[i].push(o) : "object" == typeof e[i] ? e[i] = o : "undefined" == typeof e[i] ? e[i] = o : e[i] = [e[i], o]
    }

    function o(t, e, i) {
      if (~v(e, "]")) {
        var n = e.split("[");
        n.length;
        r(n, t, "base", i)
      } else {
        if (!E.test(e) && y(t.base)) {
          var o = {};
          for (var s in t.base) o[s] = t.base[s];
          t.base = o
        }
        d(t.base, e, i)
      }
      return t
    }

    function s(t) {
      if ("object" != typeof t) return t;
      if (y(t)) {
        var e = [];
        for (var i in t) g.call(t, i) && e.push(t[i]);
        return e
      }
      for (var n in t) t[n] = s(t[n]);
      return t
    }

    function a(t) {
      var e = {
        base: {}
      };
      return b(_(t), function(i) {
        o(e, i, t[i])
      }), s(e.base)
    }

    function c(t) {
      var e = T(String(t).split("&"), function(t, e) {
        var i = v(e, "="),
          n = m(e),
          r = e.substr(0, n || i),
          s = e.substr(n || i, e.length),
          s = s.substr(v(s, "=") + 1, s.length);
        return "" == r && (r = e, s = ""), "" == r ? t : o(t, p(r), p(s))
      }, {
        base: {}
      }).base;
      return s(e)
    }

    function l(t, e) {
      if (!e) throw new TypeError("stringify expects an object");
      return e + "=" + encodeURIComponent(t)
    }

    function u(t, e) {
      var i = [];
      if (!e) throw new TypeError("stringify expects an object");
      for (var n = 0; n < t.length; n++) i.push(x(t[n], e + "[" + n + "]"));
      return i.join("&")
    }

    function h(t, e) {
      for (var i, n = [], r = _(t), o = 0, s = r.length; o < s; ++o) i = r[o], "" != i && (null == t[i] ? n.push(encodeURIComponent(i) + "=") : n.push(x(t[i], e ? e + "[" + encodeURIComponent(i) + "]" : encodeURIComponent(i))));
      return n.join("&")
    }

    function d(t, e, i) {
      var n = t[e];
      g.call(Object.prototype, e) || (void 0 === n ? t[e] = i : y(n) ? n.push(i) : t[e] = [n, i])
    }

    function m(t) {
      for (var e, i, n = t.length, r = 0; r < n; ++r)
        if (i = t[r], "]" == i && (e = !1), "[" == i && (e = !0), "=" == i && !e) return r
    }

    function p(t) {
      try {
        return decodeURIComponent(t.replace(/\+/g, " "))
      } catch (e) {
        return t
      }
    }
    var f = Object.prototype.toString,
      g = Object.prototype.hasOwnProperty,
      v = "function" == typeof Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e)
      } : function(t, e) {
        for (var i = 0; i < t.length; i++)
          if (t[i] === e) return i;
        return -1
      },
      y = Array.isArray || function(t) {
        return "[object Array]" == f.call(t)
      },
      _ = Object.keys || function(t) {
        var e = [];
        for (var i in t) t.hasOwnProperty(i) && e.push(i);
        return e
      },
      b = "function" == typeof Array.prototype.forEach ? function(t, e) {
        return t.forEach(e)
      } : function(t, e) {
        for (var i = 0; i < t.length; i++) e(t[i])
      },
      T = function(t, e, i) {
        if ("function" == typeof t.reduce) return t.reduce(e, i);
        for (var n = i, r = 0; r < t.length; r++) n = e(n, t[r]);
        return n
      },
      E = /^[0-9]+$/;
    i.parse = function(t) {
      return null == t || "" == t ? {} : "object" == typeof t ? a(t) : c(t)
    };
    var x = i.stringify = function(t, e) {
      return y(t) ? u(t, e) : "[object Object]" == f.call(t) ? h(t, e) : "string" == typeof t ? l(t, e) : e + "=" + encodeURIComponent(String(t))
    }
  }, {}],
  439: [function(t, e, i) {
    "use strict";
    e.exports = {
      clone: t("./ac-object/clone"),
      create: t("./ac-object/create"),
      defaults: t("./ac-object/defaults"),
      extend: t("./ac-object/extend"),
      getPrototypeOf: t("./ac-object/getPrototypeOf"),
      isDate: t("./ac-object/isDate"),
      isEmpty: t("./ac-object/isEmpty"),
      isRegExp: t("./ac-object/isRegExp"),
      toQueryParameters: t("./ac-object/toQueryParameters")
    }
  }, {
    "./ac-object/clone": 440,
    "./ac-object/create": 441,
    "./ac-object/defaults": 442,
    "./ac-object/extend": 443,
    "./ac-object/getPrototypeOf": 444,
    "./ac-object/isDate": 445,
    "./ac-object/isEmpty": 446,
    "./ac-object/isRegExp": 447,
    "./ac-object/toQueryParameters": 448
  }],
  440: [function(t, e, i) {
    "use strict";
    var n = t("./extend");
    e.exports = function(t) {
      return n({}, t)
    }
  }, {
    "./extend": 443
  }],
  441: [function(t, e, i) {
    "use strict";
    var n = function() {};
    e.exports = function(t) {
      if (arguments.length > 1) throw new Error("Second argument not supported");
      if (null === t || "object" != typeof t) throw new TypeError("Object prototype may only be an Object.");
      return "function" == typeof Object.create ? Object.create(t) : (n.prototype = t, new n)
    }
  }, {}],
  442: [function(t, e, i) {
    "use strict";
    var n = t("./extend");
    e.exports = function(t, e) {
      if ("object" != typeof t) throw new TypeError("defaults: must provide a defaults object");
      if (e = e || {}, "object" != typeof e) throw new TypeError("defaults: options must be a typeof object");
      return n({}, t, e)
    }
  }, {
    "./extend": 443
  }],
  443: [function(t, e, i) {
    "use strict";
    var n = Object.prototype.hasOwnProperty;
    e.exports = function() {
      var t, e;
      return t = arguments.length < 2 ? [{}, arguments[0]] : [].slice.call(arguments), e = t.shift(), t.forEach(function(t) {
        if (null != t)
          for (var i in t) n.call(t, i) && (e[i] = t[i])
      }), e
    }
  }, {}],
  444: [function(t, e, i) {
    "use strict";
    var n = Object.prototype.hasOwnProperty;
    e.exports = function(t) {
      if (Object.getPrototypeOf) return Object.getPrototypeOf(t);
      if ("object" != typeof t) throw new Error("Requested prototype of a value that is not an object.");
      if ("object" == typeof this.__proto__) return t.__proto__;
      var e, i = t.constructor;
      if (n.call(t, "constructor")) {
        if (e = i, !delete t.constructor) return null;
        i = t.constructor, t.constructor = e
      }
      return i ? i.prototype : null
    }
  }, {}],
  445: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return "[object Date]" === Object.prototype.toString.call(t)
    }
  }, {}],
  446: [function(t, e, i) {
    "use strict";
    var n = Object.prototype.hasOwnProperty;
    e.exports = function(t) {
      var e;
      if ("object" != typeof t) throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object");
      for (e in t)
        if (n.call(t, e)) return !1;
      return !0
    }
  }, {}],
  447: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return !!window.RegExp && t instanceof RegExp
    }
  }, {}],
  448: [function(t, e, i) {
    "use strict";
    var n = t("qs");
    e.exports = function(t) {
      if ("object" != typeof t) throw new TypeError("toQueryParameters error: argument is not an object");
      return n.stringify(t)
    }
  }, {
    qs: 438
  }],
  449: [function(t, e, i) {
    "use strict";
    e.exports = {
      Model: t("./ac-mvc-model/Model")
    }
  }, {
    "./ac-mvc-model/Model": 450
  }],
  450: [function(t, e, i) {
    "use strict";
    var n = t("ac-event-emitter").EventEmitter,
      r = t("ac-object"),
      o = t("ac-mvc-cid").CID,
      s = function(t) {
        this.attributes = r.defaults(this.defaultAttributes, t || {}), this.cid = o.getNewCID(), this.attributes[this.idAttribute] && (this.id = this.attributes[this.idAttribute])
      },
      a = s.prototype = r.create(n.prototype);
    a.defaultAttributes = {}, a.idAttribute = "id", a._trigger = function(t, e, i) {
      i = i || {}, i.silent !== !0 && this.trigger(t, e)
    }, a._triggerChange = function(t, e, i) {
      return this._trigger("change:" + t, e, i)
    }, a.get = function(t) {
      if (this.attributes) return this.attributes[t]
    }, a.set = function(t, e) {
      if (this.attributes) {
        var i, n, r, o = {},
          s = !1;
        for (i in t)
          if (t.hasOwnProperty(i)) {
            if (r = this.get(i), "object" == typeof r && "object" == typeof t[i] && JSON.stringify(r) === JSON.stringify(t[i]) || r === t[i]) continue;
            s = !0, this.attributes[i] = t[i], n = {
              value: t[i],
              previous: r
            }, o[i] = n, this._triggerChange(i, n, e)
          } s && this._trigger("change", o, e)
      }
    }, a.has = function(t) {
      return !!this.attributes && void 0 !== this.attributes[t]
    }, a.eachAttribute = function(t, e) {
      if (this.attributes) {
        var i;
        for (i in this.attributes) this.attributes.hasOwnProperty(i) && t.call(e, {
          attribute: i,
          value: this.attributes[i]
        })
      }
    }, a.destroy = function() {
      this.trigger("destroy"), this.off();
      var t;
      for (t in this) this.hasOwnProperty(t) && (this[t] = null)
    }, e.exports = s
  }, {
    "ac-event-emitter": 432,
    "ac-mvc-cid": 436,
    "ac-object": 439
  }],
  451: [function(t, e, i) {
    var n = t("./ac-video/player/Player");
    n.create = t("./ac-video/player/factory/create"), n.createFromElement = t("./ac-video/player/factory/createFromElement"), n.createFromAnchorTag = t("./ac-video/player/factory/createFromAnchorTag");
    var r = t("./ac-video/models/Video");
    r.createFromVideoTag = t("./ac-video/models/video/factory/createFromVideoTag"), e.exports = {
      Player: n,
      Video: r
    }
  }, {
    "./ac-video/models/Video": 472,
    "./ac-video/models/video/factory/createFromVideoTag": 474,
    "./ac-video/player/Player": 475,
    "./ac-video/player/factory/create": 477,
    "./ac-video/player/factory/createFromAnchorTag": 478,
    "./ac-video/player/factory/createFromElement": 479
  }],
  452: [function(t, e, i) {
    function n(t) {
      this.el = t
    }
    var r = n.prototype;
    r.setEl = function(t) {
      this.el = t
    }, r.play = function() {
      this.el.play()
    }, r.pause = function() {
      this.el.pause()
    }, r.setCurrentTime = function(t) {
      this.el.currentTime = t
    }, r.getCurrentTime = function() {
      return this.el.currentTime
    }, r.setPreload = function(t) {
      this.el.preload = t
    }, r.getWidth = function() {
      return this.el.videoWidth
    }, r.getHeight = function() {
      return this.el.videoHeight
    }, r.setControls = function(t) {
      this.el.controls = t
    }, r.setSrc = function(t) {
      this.el.src = t
    }, r.getSrc = function() {
      return this.el.src
    }, r.getControls = function() {
      return this.el.controls
    }, r.setMuted = function(t) {
      this.el.muted = t
    }, r.setVolume = function(t) {
      this.el.volume = t
    }, r.getVolume = function() {
      return this.el.volume
    }, r.getDuration = function() {
      return this.el.duration
    }, r.setPlaybackRate = function(t) {
      this.el.playbackRate = t
    }, r.getPlaybackRate = function() {
      return this.el.playbackRate
    }, r.getDefaultPlaybackRate = function() {
      return this.el.defaultPlaybackRate
    }, r.setLoop = function(t) {
      this.el.loop = t
    }, r.getLoop = function() {
      return this.el.loop
    }, r.getCurrentSrc = function() {
      return this.el.currentSrc
    }, r.getPlayed = function() {
      return this.el.played
    }, r.addTextTrack = function(t, e, i) {
      return this.el.addTextTrack(t, e, i)
    }, r.getTextTracks = function() {
      var t = this.el.textTracks || [];
      return Array.prototype.map.call(t, function(t, e) {
        return t.index = e, t
      })
    }, r.getBuffered = function() {
      return this.el.buffered
    }, e.exports = n
  }, {}],
  453: [function(t, e, i) {
    "use strict";
    var n = t("./HTML5VideoAPI"),
      r = {
        create: function(t, e) {
          if ("video" === e) return new n(t)
        }
      };
    e.exports = r
  }, {
    "./HTML5VideoAPI": 452
  }],
  454: [function(t, e, i) {
    var n = t("@marcom/ac-mvc-collection").Collection,
      r = t("./../models/MediaSource"),
      o = t("@marcom/ac-object"),
      s = function() {
        n.apply(this, arguments)
      },
      a = s.prototype = o.create(n.prototype);
    a.ModelType = r, e.exports = s
  }, {
    "./../models/MediaSource": 469,
    "@marcom/ac-mvc-collection": 376,
    "@marcom/ac-object": 804
  }],
  455: [function(t, e, i) {
    var n = t("./TextTrackCollection"),
      r = t("./../models/PolyfillTextTrackModel"),
      o = t("@marcom/ac-object"),
      s = function() {
        n.apply(this, arguments)
      },
      a = s.prototype = o.create(n.prototype);
    a.ModelType = r, a.createTextTrackFromNativeTrack = function(t, e, i) {
      var n = new r;
      return n.setNativeTextTrack(i), n.setTextTrackEl(t), n.setTextTrackInnerEl(e), this.add(n), n
    }, a.removeTextTrackFromNativeTrack = function(t) {
      var e = this.findTextTrackModelFromNativeTrack(t);
      this.remove(e)
    }, a.findTextTrackModelFromNativeTrack = function(t) {
      if (!t || !t.id) return null;
      var e = this.filter(function(e) {
        return e.getNativeTextTrack().id === t.id && e
      })[0];
      return e || null
    }, a.getEnabledTextTracks = function() {
      var t = this.filter(function(t) {
        return "disabled" !== t.get("mode") && t
      });
      return new s({
        models: t
      })
    }, a.getVisibleTextTracks = function() {
      var t = this.find({
        mode: "showing"
      });
      return new s({
        models: t
      })
    }, e.exports = s
  }, {
    "./../models/PolyfillTextTrackModel": 470,
    "./TextTrackCollection": 456,
    "@marcom/ac-object": 804
  }],
  456: [function(t, e, i) {
    var n = t("@marcom/ac-mvc-collection").Collection,
      r = t("./../models/TextTrackModel"),
      o = t("@marcom/ac-object"),
      s = function() {
        n.apply(this, arguments)
      },
      a = s.prototype = o.create(n.prototype);
    a.ModelType = r, a.createTextTrackFromNativeTrack = function(t) {
      var e = new r(t);
      return e.setNativeTextTrack(t), this.add(e), e
    }, a.removeTextTrackFromNativeTrack = function(t) {
      var e = this.findTextTrackModelFromNativeTrack(t);
      this.remove(e)
    }, a.count = function() {
      return this.models.length
    }, a.findTextTrackModelFromNativeTrack = function(t) {
      var e = this.filter(function(e) {
        return e.getNativeTextTrack() === t && e
      })[0];
      return e || null
    }, a.getEnabledTextTracks = function() {
      var t = this.filter(function(t) {
        return "disabled" !== t.get("mode") && t
      });
      return new s({
        models: t
      })
    }, a._findTextTrack = function(t) {
      var e;
      return e = this.indexOf(t) > -1 ? t : "number" == typeof t ? this.at(t) : "string" == typeof t ? this.get(t) : this.find(t, {
        limit: 1
      })[0]
    }, a.getVisibleTextTracks = function() {
      var t = this.find({
        mode: "showing"
      });
      return new s({
        models: t
      })
    }, a.findTextTrack = function(t) {
      return this._findTextTrack(t)
    }, e.exports = s
  }, {
    "./../models/TextTrackModel": 471,
    "@marcom/ac-mvc-collection": 376,
    "@marcom/ac-object": 804
  }],
  457: [function(t, e, i) {
    "use strict";

    function n() {
      this._boundEventListeners = [], this._collection = []
    }
    var r = n.prototype;
    r.add = function(t) {
      t = Array.prototype.slice.call(arguments, 0);
      var e, i, n = t.length;
      for (i = 0; i < n; i++) this._collection.indexOf(t[i]) < 0 && (e = t[i], this._setup(e), this._collection.push(e))
    }, r.remove = function(t) {
      t = Array.prototype.slice.call(arguments, 0);
      var e, i, n = t.length;
      for (e = 0; e < n; e++) i = this._collection.indexOf(t[e]), i > -1 && (this._teardown(t[e]), this._collection.splice(i, 1))
    }, r._setup = function(t) {
      var e = this._pauseOtherVideos.bind(this, t),
        i = this.remove.bind(this, t),
        n = {
          video: t,
          eventListeners: {
            playListener: e,
            destroyListener: i
          }
        };
      this._boundEventListeners.push(n), t.on("play", e), t.on("acv-destroy", i)
    }, r._teardown = function(t) {
      var e = this._boundEventListeners.filter(function(e) {
        return e.video === t
      }, this);
      if (e.length) {
        e = e.pop(), t.off("play", e.eventListeners.playListener), t.off("acv-destroy", e.eventListeners.destroyListener);
        var i = this._boundEventListeners.indexOf(e);
        this._boundEventListeners.splice(i, 1)
      }
    }, r._getOtherVideos = function(t) {
      return this._collection.filter(function(e) {
        return e !== t
      }, this)
    }, r._pauseOtherVideos = function(t) {
      var e = this._getOtherVideos(t);
      e.forEach(function(t) {
        t.pause()
      })
    }, e.exports = new n
  }, {}],
  458: [function(t, e, i) {
    function n() {
      return /^(iOS|Android)$/.test(a.os)
    }

    function r() {
      this._possibleTemplateKeys = ["autoplay", "buffered", "endframe", "controls", "height", "loop", "muted", "poster", "preload", "suffix", "width", "controlbar", "controlbarwidth", "controlbarskinning", "disablecaptionscontrol"], this._defaultTemplateValues = {
        autoplay: !1,
        muted: !1,
        loop: !1,
        controls: !1,
        preload: "metadata",
        controlbarwidth: "450",
        controlbarskinning: "ac-video-controlbar",
        disablecaptionscontrol: !1
      }
    }
    var o = t("@marcom/ac-object"),
      s = t("@marcom/ac-dom-traversal/querySelector"),
      a = t("@marcom/ac-browser"),
      c = "v",
      l = function(t, e) {
        var i = t.getAttribute(e);
        return null !== i && "" !== i
      },
      u = function() {
        function t() {
          return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return function() {
          return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
        }
      }(),
      h = r.prototype;
    h.getSource = function(t) {
      var e = /[^/]*.[^\.]*$/,
        i = null,
        n = {};
      if (l(t, "data-src")) i = t.getAttribute("data-src");
      else if (l(t, "href")) i = t.getAttribute("href");
      else if (l(t, "src")) i = t.getAttribute("src");
      else {
        var r = s("source", t);
        r && l(r, "src") && (i = r.getAttribute("src"))
      }
      return i && (n.defaultSource = i, n.videoSource = i.match(e)[0], n.directory = i.replace(n.videoSource, ""), n.videoFileName = n.videoSource.split(".")[0]), n
    }, h.getConfig = function(t, e, i) {
      var n = {},
        r = this.getSource(t);
      return this.isAppleMobileDevice = "iOS" === a.os, n = this._getValues(t, i), this._videoRecommendation = e, n.videoTemplate = e.videoTemplate, n.usesFullScreen = n.usesFullScreen && "elementVideo" === n.videoTemplate, n.source = r.defaultSource, n
    }, h._buildFileSuffix = function(t) {
      var e = "";
      if (t.suffix) e = "_" + t.suffix;
      else if (t.height && t.width) {
        var i = t.height.replace("px", "").replace("em", "").replace("rem", ""),
          n = t.width.replace("px", "").replace("em", "").replace("rem", "");
        e = "_" + n + "x" + i
      }
      return e
    }, h._getRecommendedCaptionsPaths = function(t, e) {
      var i = [];
      return i.push(t + e + "-captions." + c + "tt"), i
    }, h._generateRecommendedVideoPaths = function(t, e) {
      var i = this._buildFileSuffix(e),
        n = [];
      return this._videoRecommendation.supportedProfiles.forEach(function(e) {
        e.sizeRelevant && (t += i), n.push(t + "." + e.fileExtension)
      }), n
    }, h._getValues = function(t, e) {
      var i = "ac-video-" + u(),
        r = this._defaultTemplateValues;
      return o.extend(r, this._getMarkupValues(t)), e && o.extend(r, e), n() && (r["native"] = !0, r.controls = "true"), r.targetId = t.id, r.domId = i, r.eventId = i + "-quicktime-event", r.wrapperId = i + "-wrapper", r
    }, h._getMarkupValues = function(t) {
      var e = {};
      return this._possibleTemplateKeys.forEach(function(i) {
        l(t, i) ? e[i] = t.getAttribute(i) : l(t, "data-acv-" + i) && (e[i] = t.getAttribute("data-acv-" + i)), ("autoplay" === i || "controls" === i || "muted" === i || "loop" === i) && e[i] && e[i].length > 0 && (e[i] = !0), "string" == typeof e[i] && /^(true|false)$/.test(e[i]) && (e[i] = "true" === e[i])
      }), e
    }, h.addPossibleTemplateKeys = function(t) {
      t.forEach(function(t) {
        this._possibleTemplateKeys.indexOf(t) || this._possibleTemplateKeys.push(t)
      }, this)
    }, e.exports = r
  }, {
    "@marcom/ac-browser": 206,
    "@marcom/ac-dom-traversal/querySelector": 61,
    "@marcom/ac-object": 804
  }],
  459: [function(t, e, i) {
    "use strict";
    e.exports = {
      LOADEDMETADATA: 1,
      LOADEDDATA: 2,
      CANPLAY: 3,
      CANPLAYTHROUGH: 4
    }
  }, {}],
  460: [function(t, e, i) {
    "use strict";

    function n() {
      r.apply(this, arguments), this.view = this.options.view || new o({
        element: this.mediaElement.el
      }), this._addViewEvents()
    }
    var r = t("./TextTracksController"),
      o = t("./../../views/textTracks/TextTracksCollectionView"),
      s = t("./../../models/TextTrackModel"),
      a = t("@marcom/ac-object"),
      c = n.prototype = a.create(r.prototype);
    c._holdingTextTrackModels = {}, c._addViewEvents = function() {
      this.view.on("addtrack", this._respondToAddTrackEvent, this), this.view.on("change", this._respondToChangeTrackEvent, this), this.view.on("removetrack", this._respondToRemoveTrackEvent, this)
    }, c._removeViewEvents = function() {
      this.view.off("addtrack", this._respondToAddTrackEvent, this), this.view.off("change", this._respondToChangeTrackEvent, this), this.view.off("removetrack", this._respondToRemoveTrackEvent, this)
    }, c._respondToAddTrackEvent = function(t) {
      var e = t.data.track,
        i = this.model.findTextTrackModelFromNativeTrack(e);
      if (!i && e && e.id && this._holdingTextTrackModels[e.id]) {
        i = this._holdingTextTrackModels[e.id], i.setNativeTextTrack(e), this.model.add(i), this._holdingTextTrackModels[e.id] = void 0;
        var n = this.createTextTrackRenderView(e, i);
        n.renderMode()
      }
      null === i ? this._createTextTrackFromNativeTrack(e) : i.set({
        mode: e.mode
      }), i && i.on("change:mode", function() {
        "webkitClosedCaptionsVisible" in this.mediaElement.el && "showing" === i.get("mode") && this.mediaElement.el.webkitClosedCaptionsVisible === !1 && (this.mediaElement.el.webkitClosedCaptionsVisible = !0)
      }, this), this._resetModel(), this.trigger("addtrack", t)
    }, c._createTextTrackFromNativeTrack = function(t) {
      var e = this.model.createTextTrackFromNativeTrack(t);
      return this.createTextTrackRenderView(t, e), e
    }, c._removeTextTrackFromNativeTrack = function(t) {
      var e = this.model.findTextTrackModelFromNativeTrack(t);
      this.removeTextTrackRenderView(e), this.model.removeTextTrackFromNativeTrack(t), this._resetModel()
    }, c._resetModel = function() {
      var t, e = this.mediaElement.el.textTracks,
        i = [];
      if (e) {
        for (var n = 0; n < e.length; n += 1) t = this.model.findTextTrackModelFromNativeTrack(e[n]), t && (t.set({
          mode: e[n].mode
        }), i.push(t));
        this.model.reset(i)
      }
    }, c._respondToChangeTrackEvent = function(t) {
      this.trigger("changetrack", t)
    }, c._respondToRemoveTrackEvent = function(t) {
      var e = t.data.track;
      this._removeTextTrackFromNativeTrack(e), this.trigger("removetrack", t)
    }, c.addTextTrackFromRemoteVTT = function(t) {
      var e = {
          src: t.src
        },
        i = this.model.findTextTrack(e);
      return i && "object" == typeof i ? i.cid : (i = new s(t), this._holdingTextTrackModels[i.cid] = i, this.view.addTextTrackTag(i), i.cid)
    }, c.addTextTrack = function(t, e, i) {
      var n = this.mediaElement.addTextTrack(t, e, i);
      return this._createTextTrackFromNativeTrack(n)
    }, c.removeTextTrack = function(t) {
      t && (this._holdingTextTrackModels[t.cid] && (this._holdingTextTrackModels[t.cid] = void 0), this.view.removeTextTrackTag(t))
    }, c.populateTextTracks = function() {
      var t = this.mediaElement.getTextTracks();
      t && t.forEach(function(t) {
        null === this.model.findTextTrackModelFromNativeTrack(t) && this._createTextTrackFromNativeTrack(t)
      }, this)
    }, e.exports = n
  }, {
    "./../../models/TextTrackModel": 471,
    "./../../views/textTracks/TextTracksCollectionView": 489,
    "./TextTracksController": 462,
    "@marcom/ac-object": 804
  }],
  461: [function(t, e, i) {
    "use strict";

    function n(t) {
      var e = {
        model: new a
      };
      r.apply(this, [t, e]), this.view = this.options.view || new o({
        element: this.mediaElement.el
      }), this._addViewEvents()
    }
    var r = t("./TextTracksController"),
      o = t("./../../views/textTracks/PolyfillTextTrackCollectionView"),
      s = t("./../../models/PolyfillTextTrackModel"),
      a = t("./../../collection/PolyfillTextTrackCollection"),
      c = t("@marcom/ac-object"),
      l = n.prototype = c.create(r.prototype);
    l._holdingTextTrackModels = {}, l._addViewEvents = function() {
      this.view.on("addtrack", this._respondToAddTrackEvent, this), this.view.on("change", this._respondToChangeTrackEvent, this), this.view.on("removetrack", this._respondToRemoveTrackEvent, this), this.view.on("timeupdate", this._onTimeUpdate, this), this.view.on("loadstart", this._onHide, this), this.on("texttrackhide", this._onHide, this), this.on("texttrackshow", this._onShow, this)
    }, l._removeViewEvents = function() {
      this.view.off("addtrack", this._respondToAddTrackEvent, this), this.view.off("change", this._respondToChangeTrackEvent, this), this.view.off("removetrack", this._respondToRemoveTrackEvent, this), this.view.off("timeupdate", this._onTimeUpdate, this), this.view.off("loadstart", this._onHide, this), this.off("texttrackhide", this._onHide, this), this.off("texttrackshow", this._onShow, this)
    }, l._onShow = function() {
      this.view && this._refreshCurrentCaption()
    }, l._onHide = function() {
      this.view && this.view.hide()
    }, l._respondToAddTrackEvent = function(t) {
      if (t && t.data) {
        var e = t.data && t.data.track ? t.data.track : {
            id: null,
            cues: []
          },
          i = this.model.findTextTrackModelFromNativeTrack(e);
        if (!i && e && t.data.textTrackEl && t.data.textTrackEl.id && this._holdingTextTrackModels[t.data.textTrackEl.id]) {
          i = this._holdingTextTrackModels[t.data.textTrackEl.id], i.setNativeTextTrack(e), i.setTextTrackEl(t.data.textTrackEl), i.setTextTrackInnerEl(t.data.textTrackInnerEl), this.model.add(i), this._holdingTextTrackModels[t.data.textTrackEl.id] = void 0;
          var n = this.createTextTrackRenderView(t.data.textTrackEl, i);
          n.renderMode()
        }
        null === i && this._createTextTrackFromTextTrackData(t.data.textTrackEl, t.data.textTrackInnerEl, e), this.trigger("addtrack", t)
      }
    }, l._createTextTrackFromTextTrackData = function(t, e, i) {
      var n = this.model.createTextTrackFromNativeTrack(t, e, i);
      return this.createTextTrackRenderView(t, n), n
    }, l._removeTextTrackFromTextTrackData = function(t) {
      var e = this.model.findTextTrackModelFromNativeTrack(t);
      this.removeTextTrackRenderView(e), this.model.removeTextTrackFromNativeTrack(t)
    }, l._respondToChangeTrackEvent = function(t) {
      this.trigger("changetrack", t)
    }, l._respondToRemoveTrackEvent = function(t) {
      var e = t.data.track;
      this._removeTextTrackFromTextTrackData(e), this.trigger("removetrack", t)
    }, l._onTimeUpdate = function(t) {
      this._refreshCurrentCaption()
    }, l._refreshCurrentCaption = function() {
      if (this.view.textTracks && 0 !== this.view.textTracks.cues.length) {
        var t = this.view.textTracks.cues.filter(this._filterCaptions.bind(this)),
          e = t.length,
          i = this.model.findTextTrackModelFromNativeTrack(this.view.textTracks),
          n = i.get("mode");
        "showing" === n && e > 0 ? (i.addVTTCue(t[0].text), this.view.show()) : (i.clearVTTCue(), this.view.hide())
      }
    }, l.addTextTrackFromRemoteVTT = function(t) {
      this.view && this.view.hide();
      var e = {
          src: t.src
        },
        i = this.model.findTextTrack(e);
      return i && "object" == typeof i ? (this.view.textTracks = i.getNativeTextTrack(), this.view.textTrackEl = i.getTextTrackEl(), this.view.textTrackInnerEl = i.getTextTrackInnerEl(), i.cid) : (i = new s(t), this._holdingTextTrackModels[i.cid] = i, t.src && this.view.loadVTTFile(t.src, i), i.cid)
    }, l.removeTextTrack = function(t) {
      t && (this._holdingTextTrackModels[t.cid] && (this._holdingTextTrackModels[t.cid] = void 0), this.view.removeTextTrackDiv(t))
    }, l.populateTextTracks = function() {}, l._filterCaptions = function(t, e, i) {
      var n = this.mediaElement.getCurrentTime(),
        r = this._toMMSSS(n);
      return this._compareTime(r, t.startTime, "gt") && this._compareTime(r, t.endTime, "lt")
    }, l._toMMSSS = function(t) {
      var e = Math.floor(t / 3600),
        i = Math.floor((t - 3600 * e) / 60),
        n = Math.round(t - 3600 * e - 60 * i);
      return e < 10 && (e = "0" + e), i < 10 && (i = "0" + i), n < 10 && (n = "0" + n), e + ":" + i + ":" + n
    }, l._compareTime = function(t, e, i) {
      return t = new Date("January 1, 1975 " + t), e = new Date("January 1, 1975 " + e), "gt" === i ? t >= e : t <= e
    }, e.exports = n
  }, {
    "./../../collection/PolyfillTextTrackCollection": 455,
    "./../../models/PolyfillTextTrackModel": 470,
    "./../../views/textTracks/PolyfillTextTrackCollectionView": 485,
    "./TextTracksController": 462,
    "@marcom/ac-object": 804
  }],
  462: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this.options = e || {}, this.mediaElement = t, this.model = this.options.model || new o, this._textTrackRenderViews = []
    }
    var r = t("@marcom/ac-event-emitter").EventEmitter,
      o = t("./../../collection/TextTrackCollection"),
      s = t("./../../views/textTracks/TextTrackRender"),
      a = t("@marcom/ac-object"),
      c = n.prototype = a.create(r.prototype);
    c.findTextTrackModelFromNativeTrack = function(t) {
      return this.model.findTextTrackModelFromNativeTrack(t)
    }, c.addTextTrackFromRemoteVTT = function(t) {}, c.addTextTrack = function() {}, c.removeTextTrack = function(t) {}, c.getEnabledTextTracks = function() {
      return this.model.getEnabledTextTracks.apply(this.model, arguments)
    }, c.getTextTracks = function() {
      return this.model
    }, c.getTextTracksCount = function() {
      return this.model.count()
    }, c.getVisibleTextTracks = function() {
      return this.model.getVisibleTextTracks()
    }, c.findTextTrack = function(t) {
      return this.model.findTextTrack(t)
    }, c.addTextTrack = function(t, e, i) {
      return this.mediaElement.addTextTrack(t, e, i)
    }, c.populateTextTracks = function() {}, c.createTextTrackRenderView = function(t, e) {
      var i = new s({
        element: t,
        model: e
      });
      return e.on("change:mode", this._onTextTrackModeChange, this), i.render(), this._textTrackRenderViews.push(i), i
    }, c.removeTextTrackRenderView = function(t) {
      for (var e = this._textTrackRenderViews.length, i = {}, n = 0; n < e; n++)
        if (this._textTrackRenderViews[n].model.cid === t.cid) {
          i.view = this._textTrackRenderViews[n], i.idx = n;
          break
        } i.view && (this._destroyRenderView(i.view), this._textTrackRenderViews.splice(i.idx, 1))
    }, c._destroyRenderView = function(t) {
      t.emitterTrigger("destroy"), t.off();
      var e;
      for (e in t) t.hasOwnProperty(e) && (t[e] = null)
    }, c._onTextTrackModeChange = function(t) {
      var e = t.value;
      "showing" === e ? this.trigger("texttrackshow") : this.trigger("texttrackhide")
    }, e.exports = n
  }, {
    "./../../collection/TextTrackCollection": 456,
    "./../../views/textTracks/TextTrackRender": 487,
    "@marcom/ac-event-emitter": 220,
    "@marcom/ac-object": 804
  }],
  463: [function(t, e, i) {
    "use strict";

    function n() {
      r.apply(this, arguments)
    }
    var r = t("./TextTracksController"),
      o = t("./../../models/TextTrackModel"),
      s = t("./../../views/textTracks/WebkitClosedCaptionsView"),
      a = t("@marcom/ac-object"),
      c = t("@marcom/ac-browser"),
      l = n.prototype = a.create(r.prototype);
    l._onTextTrackModeChange = function(t) {
      "showing" === t.value ? this.trigger("texttrackshow") : this.trigger("texttrackhide")
    }, l.populateTextTracks = function() {
      var t, e = this.mediaElement.el,
        i = e.webkitHasClosedCaptions;
      i === !0 && (this.view || (this.view = new s({
        element: e
      })), t = new o({
        mode: "hidden"
      }), this.view.setModel(t), t.on("change:mode", this._onTextTrackModeChange, this), this.model.reset([t]), this.trigger("addtrack", {
        textTrack: t
      }), "Safari Mobile" === c.name && c.version < 7 ? t.once("change:mode", this.view.render, this.view) : this.view.render())
    }, e.exports = n
  }, {
    "./../../models/TextTrackModel": 471,
    "./../../views/textTracks/WebkitClosedCaptionsView": 490,
    "./TextTracksController": 462,
    "@marcom/ac-browser": 206,
    "@marcom/ac-object": 804
  }],
  464: [function(t, e, i) {
    "use strict";

    function n(t) {
      this.options = t || {}, this.player = this.options.player, this.player.setControls(!0)
    }
    n.create = function(t) {
      return new n(t)
    }, e.exports = n
  }, {}],
  465: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this.playableObject = t, this.options = e || {}, this.model = this._getOrCreateVideo(), this.view = this._getOrCreateView(), this.textTracks = this._getOrCreateTextTracksController(), this._sourceReadyBinding = !1, o.call(this), this._bindTextTrackEvents(), this._bindModelEvents(), this._checkToRenderView()
    }
    var r = t("./../models/Video"),
      o = t("@marcom/ac-event-emitter").EventEmitter,
      s = t("./../views/mediaView/MediaView"),
      a = t("@marcom/ac-object"),
      c = t("./../controller/textTracks/NativeTextTracksController"),
      l = t("@marcom/ac-fullscreen"),
      u = t("@marcom/ac-feature"),
      h = t("./../const/readyState"),
      d = n.prototype = a.create(o.prototype);
    d._bindTextTrackEvents = function() {
      this.textTracks.on("addtrack", this._onAddTrack, this), this.textTracks.on("change", this._onTrackChange, this), this.textTracks.on("removetrack", this._onRemoveTrack, this), this.textTracks.on("texttrackshow", this._onTextTrackShow, this), this.textTracks.on("texttrackhide", this._onTextTrackHide, this)
    }, d._onTextTrackHide = function() {
      this.trigger("texttrackhide")
    }, d._onTextTrackShow = function() {
      this.trigger("texttrackshow")
    }, d._onAddTrack = function(t) {
      this.trigger("addtrack", t.data.track)
    }, d._onTrackChange = function(t) {
      this.trigger("change", t)
    }, d._onRemoveTrack = function(t) {
      this.trigger("removetrack", t.data.track)
    }, d._checkToRenderView = function() {
      this.model.getCurrentSrc() ? this._onSourceReady() : this._sourceReadyBinding || (this.model.once("change:currentSrc", this._onSourceReady, this), this._sourceReadyBinding = !0)
    }, d._onSourceReady = function() {
      "none" !== this.model.getPreload() && (this.view.render(), this.playableObject.setEl(this.view.getMediaElement()), this._bindViewEvents()), this._sourceReadyBinding = !1
    }, d._getOrCreateView = function() {
      var t = this.options.view;
      return t || (t = new s({
        model: this.model
      })), t.on("mediaelementchange", this._onMediaElementChange, this), t
    }, d._onMediaElementChange = function() {
      this.playableObject.setEl(this.view.getMediaElement())
    }, d._getOrCreateTextTracksController = function() {
      var t = this.options.textTracks;
      return void 0 === t && (t = new c(this.playableObject)), t
    }, d._getOrCreateVideo = function() {
      var t = this.options.model;
      return void 0 === t ? t = new r : t instanceof r || (t = new r(t)), t
    }, d._bindModelEvents = function() {
      this.model.on("change:muted", this._onMutedChange, this), this.model.on("change:seeking", this._onModelSeekingChange, this), this.model.on("change:paused", this._onPausedChange, this), this.model.on("change:playbackRate", this._onPlaybackRateChange, this), this.model.on("change:duration", this._onDurationChange, this), this.model.on("change:volume", this._onVolumeChange, this), this.model.on("change:readyState", this._onReadyStateChange, this), this.model.on("change:poster", this._onPosterChange, this)
    }, d._bindViewEvents = function() {
      this.view.on("play", this._respondToPlay, this), this.view.on("pause", this._respondToPause, this), this.view.on("timeupdate", this._respondToTimeUpdate, this), this.view.on("ended", this._respondToEnded, this), this.view.on("ratechange", this._respondToRateChange, this), this.view.on("durationchange", this._respondToDurationChange, this), this.view.on("loadedmetadata", this._respondToLoadedMetaData, this), this.view.on("loadeddata", this._respondToLoadedData, this), this.view.on("canplay", this._respondToCanPlay, this), this.view.on("canplaythrough", this._respondToCanPlayThrough, this)
    }, d._populateTextTracks = function() {
      this.textTracks.populateTextTracks()
    }, d._respondToLoadedMetaData = function() {
      this._populateTextTracks(), this._setReadyState(1)
    }, d._onPosterChange = function() {
      this.trigger("posterchange")
    }, d._respondToLoadedData = function() {
      this._setReadyState(2)
    }, d._respondToCanPlay = function() {
      this._setReadyState(3)
    }, d._respondToCanPlayThrough = function() {
      this._setReadyState(4)
    }, d._respondToDurationChange = function() {
      this.model.set({
        duration: this.playableObject.getDuration()
      })
    }, d._respondToRateChange = function() {
      this.playableObject.getPlaybackRate && this.model.set({
        playbackRate: this.playableObject.getPlaybackRate()
      })
    }, d._respondToEnded = function() {
      this.model.set({
        ended: !0
      }), this.trigger("ended")
    }, d._respondToPlay = function() {
      var t = this.getMediaElement();
      if (l.fullscreenElement() !== t && "ios" === l.getMode() && u.isHandheld()) try {
        l.requestFullscreen(this.getMediaElement())
      } catch (e) {}
      this.model.set({
        paused: !1,
        ended: !1
      })
    }, d._respondToPause = function() {
      this.model.set({
        paused: !0
      })
    }, d._triggerTimeUpdate = function() {
      this.trigger("timeupdate", {
        currentTime: this.getCurrentTime()
      })
    }, d._respondToTimeUpdate = function() {
      this.model.getCurrentTime() !== this.playableObject.getCurrentTime() && (this.model.setCurrentTime(this.playableObject.getCurrentTime()), this._triggerTimeUpdate()), this.model.getSeeking() === !0 && this.model.set({
        seeking: !1
      })
    }, d._onReadyStateChange = function(t) {
      t.value === h.LOADEDMETADATA ? this.trigger("loadedmetadata") : t.value === h.LOADEDDATA ? this.trigger("loadeddata") : t.value === h.CANPLAY ? this.trigger("canplay") : t.value === h.CANPLAYTHROUGH && this.trigger("canplaythrough"), this.trigger("readystatechange", {
        readyState: t.value
      })
    }, d._setReadyState = function(t) {
      this.model.set({
        readyState: t
      })
    }, d._onMutedChange = function() {
      this.trigger("volumechange"), this.model.getMuted() === !1 && this._setElementVolume(this.model.getVolume())
    }, d._onVolumeChange = function() {
      this.trigger("volumechange")
    }, d._onDurationChange = function(t) {
      isNaN(t.previous) && isNaN(t.value) || this.trigger("durationchange", t)
    }, d._onPlaybackRateChange = function() {
      this.trigger("ratechange")
    }, d._onPausedChange = function(t) {
      t.value === !0 ? this.trigger("pause") : this.trigger("play")
    }, d._onModelSeekingChange = function(t) {
      t.value === !0 ? this.trigger("seeking") : this.trigger("seeked")
    }, d.findTextTrackModelFromNativeTrack = function(t) {
      return this.textTracks.findTextTrackModelFromNativeTrack(t)
    }, d.findTextTrack = function(t) {
      return this.textTracks.findTextTrack(t)
    }, d.getTextTracks = function() {
      return this.textTracks.getTextTracks()
    }, d.getTextTracksCount = function() {
      return this.textTracks.getTextTracksCount()
    }, d.addTextTrackFromRemoteVTT = function() {
      return this.textTracks.addTextTrackFromRemoteVTT.apply(this.textTracks, arguments)
    }, d.addTextTrack = function(t, e, i) {
      return this.textTracks.addTextTrack(t, e, i)
    }, d.removeTextTrack = function() {
      return this.textTracks.removeTextTrack.apply(this.textTracks, arguments)
    }, d.getEnabledTextTracks = function() {
      return this.textTracks.getEnabledTextTracks.apply(this.textTracks, arguments)
    }, d.getVisibleTextTracks = function() {
      return this.textTracks.getVisibleTextTracks()
    }, d.play = function() {
      this.getPaused() !== !1 && this.playableObject.play()
    }, d.pause = function() {
      this.getPaused() !== !0 && this.playableObject.pause()
    }, d.getVideo = function() {
      return this.model
    }, d.getPaused = function() {
      return this.model.getPaused()
    }, d.setMuted = function(t) {
      this.model.setMuted(t), this.playableObject.setMuted(t)
    }, d.getMuted = function() {
      return this.model.getMuted()
    }, d.getEnded = function() {
      return this.model.getEnded()
    }, d._setElementVolume = function(t) {
      this.playableObject.setVolume(t)
    }, d.setVolume = function(t) {
      this.model.setVolume(t, {
        silent: !0
      }), this.getMuted() === !1 && this._setElementVolume(t)
    }, d.getVolume = function() {
      return this.model.getVolume()
    }, d.setCurrentTime = function(t) {
      var e = this.getCurrentTime();
      this.model.set({
        seeking: !0
      }), this.playableObject.setCurrentTime(t), e === t && this.model.set({
        seeking: !1
      })
    }, d.getWidth = function() {
      return this.playableObject.getWidth()
    }, d.getHeight = function() {
      return this.playableObject.getHeight()
    }, d.getCurrentTime = function() {
      return this.model.getCurrentTime()
    }, d.setPlaybackRate = function(t) {
      var e = this.model.getPlaybackRate();
      e !== t && this.playableObject.setPlaybackRate(t)
    }, d.getPlaybackRate = function() {
      return this.model.getPlaybackRate()
    }, d.getDuration = function() {
      return this.model.getDuration()
    }, d.setAutoplay = function(t) {
      this.playableObject.SetAutoPlay(t)
    }, d.getAutoplay = function() {
      return this.playableObject.GetAutoPlay()
    }, d.getCaptionsTracks = function() {
      return this.playableObject.getCaptionsTracks()
    }, d.setLoop = function(t) {
      this.model.setLoop(t), this.playableObject.setLoop(t)
    }, d.getLoop = function() {
      return this.model.getLoop()
    }, d.getError = function() {}, d.getVideoWidth = function() {}, d.getVideoHeight = function() {}, d.getPoster = function() {
      return this.model.getPoster()
    }, d.setPoster = function(t) {
      this.model.setPoster(t)
    }, d.hasPoster = function() {
      return !!this.model.getPoster()
    }, d._resetModelPlaybackAttributes = function() {
      this.model.set({
        duration: this.playableObject.getDuration(),
        currentTime: this.playableObject.getCurrentTime(),
        playbackRate: this.playableObject.getPlaybackRate(),
        readyState: 0,
        paused: !0,
        ended: !1,
        seeking: !1
      }), this._triggerTimeUpdate()
    }, d.setSrc = function(t) {
      var e = this.model.findSources(t)[0],
        i = this.model.getCurrentSrc();
      return i && (i = i.get("src")), void 0 === e && (e = this.model.addSource(t)), i !== e.get("src") && (this.model.setCurrentSrc(e), this.playableObject.setSrc(e.get("src")), this._resetModelPlaybackAttributes()), e
    }, d.getPreload = function() {
      return this.model.getPreload()
    }, d.setPreload = function(t) {
      this.model.setPreload(t), this.playableObject.setPreload(t), this._checkToRenderView()
    }, d.getCurrentSrc = function() {
      return this.model.getCurrentSrc()
    }, d.getSources = function() {
      return this.model.getSources()
    }, d.getNetworkState = function() {
      return this.model.get("networkState")
    }, d.getReadyState = function() {
      return this.model.get("readyState")
    }, d.getControls = function() {
      return this.model.get("controls")
    }, d.setControls = function(t) {
      this.model.set({
        controls: t
      }), this.playableObject.setControls(t)
    }, d.getDefaultPlaybackRate = function() {
      return this.model.getDefaultPlaybackRate()
    }, d.getSeekable = function() {
      return this.getBuffered()
    }, d.getDefaultMuted = function() {
      return this.model.get("defaultMuted")
    }, d.getSeeking = function() {
      return this.model.get("seeking")
    }, d.getPlayed = function() {
      return this.playableObject.getPlayed()
    }, d.getBuffered = function() {
      return this.playableObject.getBuffered()
    }, d.getMediaElement = function() {
      return this.view.getMediaElement()
    }, d.appendTo = function() {
      return this.view.appendTo.apply(this.view, arguments)
    }, d.getViewElement = function() {
      return this.view.el
    }, e.exports = n
  }, {
    "./../const/readyState": 459,
    "./../controller/textTracks/NativeTextTracksController": 460,
    "./../models/Video": 472,
    "./../views/mediaView/MediaView": 484,
    "@marcom/ac-event-emitter": 220,
    "@marcom/ac-feature": 184,
    "@marcom/ac-fullscreen": 605,
    "@marcom/ac-object": 804
  }],
  466: [function(t, e, i) {
    function n(t, e) {
      e = e || {};
      var i;
      return i = r(t, e)
    }
    var r = t("./createHTML5Video");
    e.exports = n
  }, {
    "./createHTML5Video": 468
  }],
  467: [function(t, e, i) {
    function n(t, e) {
      e = e || {}, e.element = t;
      var i, n = e.type = s.get(),
        a = o(t, e),
        c = a.getSources(),
        l = c.find({
          src: t.currentSrc
        })[0];
      return "quicktime" === n && (l = c.find({
        type: "video/quicktime"
      })[0], l || 1 !== c.models.length || (l = c.at(0))), l && a.setSrc(l), i = r(a, e), i.getViewElement() !== t && t.parentNode.replaceChild(i.getViewElement(), t), i
    }
    var r = t("./create"),
      o = t("./../../models/video/factory/createFromVideoTag"),
      s = t("./../../recommendation/vat");
    e.exports = n
  }, {
    "./../../models/video/factory/createFromVideoTag": 474,
    "./../../recommendation/vat": 481,
    "./create": 466
  }],
  468: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-browser"),
      r = t("./../../views/mediaView/HTML5Video"),
      o = t("./../MediaController"),
      s = t("./../../adapter/element-adapter"),
      a = t("./../../controller/textTracks/NativeTextTracksController"),
      c = t("./../../controller/textTracks/PolyfillTextTracksController"),
      l = t("./../../controller/textTracks/WebkitClosedCaptions"),
      u = t("./../../models/Video"),
      h = function(t, e) {
        e = e || {}, t instanceof u || (t = new u(t));
        var i, h = e.view || new r({
            model: t,
            element: e.element,
            template: "elementVideo"
          }),
          d = h.getMediaElement(),
          m = s.create(d, "video"),
          p = n.name.toLowerCase(),
          f = "ie" === p || "edge" === p;
        i = !("textTracks" in d) && "webkitClosedCaptionsVisible" in d ? new l(m) : f ? new c(m) : new a(m), e.textTracks && e.textTracks.forEach(function(t) {
          var e = t;
          "string" == typeof t && (e = {
            src: t
          }), i.addTextTrackFromRemoteVTT(e)
        });
        var g = new o(m, {
          model: t,
          view: h,
          textTracks: i
        });
        return g
      };
    e.exports = h
  }, {
    "./../../adapter/element-adapter": 453,
    "./../../controller/textTracks/NativeTextTracksController": 460,
    "./../../controller/textTracks/PolyfillTextTracksController": 461,
    "./../../controller/textTracks/WebkitClosedCaptions": 463,
    "./../../models/Video": 472,
    "./../../views/mediaView/HTML5Video": 483,
    "./../MediaController": 465,
    "@marcom/ac-browser": 206
  }],
  469: [function(t, e, i) {
    function n() {
      r.apply(this, arguments)
    }
    var r = t("ac-mvc-model").Model,
      o = t("@marcom/ac-object"),
      s = n.prototype = o.create(r.prototype);
    s.defaultAttributes = {}, s.getFullyQualifiedURL = function() {
      var t, e = this.get("src"),
        i = window.location.origin || window.location.protocol + "//" + window.location.hostname;
      return /http(s)?/.test(e) ? e : "//" === e.slice(0, 2) ? window.location.protocol + e : "/" !== e[0] ? (t = window.location.pathname, t = t.substring(0, t.lastIndexOf("/") + 1), i + t + e) : i + e
    }, e.exports = n
  }, {
    "@marcom/ac-object": 804,
    "ac-mvc-model": 449
  }],
  470: [function(t, e, i) {
    function n(t) {
      r.apply(this, arguments)
    }
    var r = t("ac-mvc-model").Model,
      o = t("@marcom/ac-object"),
      s = n.prototype = o.create(r.prototype);
    s.defaultAttributes = {
      mode: "disabled"
    }, s.setNativeTextTrack = function(t) {
      this._textTrackData = t || {
        id: null,
        cues: []
      }
    }, s.getNativeTextTrack = function() {
      return this._textTrackData
    }, s.setTextTrackEl = function(t) {
      this._textTrackEl = t
    }, s.getTextTrackEl = function() {
      return this._textTrackEl
    }, s.getTextTrackInnerEl = function() {
      return this._textTrackInnerEl
    }, s.setTextTrackInnerEl = function(t) {
      this._textTrackInnerEl = t
    }, s.getCues = function() {
      return this._textTrackData.cues
    }, s.removeCue = function(t) {
      "number" == typeof t && this._textTrackData.cues[t] && this._textTrackData.cues.splice(t, 1)
    }, s.addCue = function(t, e, i) {
      var n = {
        startTime: t,
        endTime: e,
        text: i
      };
      this._textTrackData.cues.push(n)
    }, s.addVTTCue = function(t) {
      this._currentVTTCue !== t && (this._currentVTTCue = t, this._textTrackInnerEl && (this._textTrackInnerEl.innerHTML = t))
    }, s.removeVTTCue = function(t) {
      this._currentVTTCue === t && this._textTrackInnerEl && (this._textTrackInnerEl.innerHTML = "")
    }, s.clearVTTCue = function() {
      this._currentVTTCue = void 0, this._textTrackInnerEl && (this._textTrackInnerEl.innerHTML = "")
    }, s.show = function() {
      this.set({
        mode: "showing"
      })
    }, s.hide = function() {
      this.set({
        mode: "hidden"
      })
    }, s.disable = function() {
      this.set({
        mode: "disabled"
      })
    }, e.exports = n
  }, {
    "@marcom/ac-object": 804,
    "ac-mvc-model": 449
  }],
  471: [function(t, e, i) {
    function n(t) {
      r.apply(this, arguments)
    }
    var r = t("ac-mvc-model").Model,
      o = t("@marcom/ac-object"),
      s = n.prototype = o.create(r.prototype);
    s.defaultAttributes = {
      mode: "disabled"
    }, s.setNativeTextTrack = function(t) {
      this._nativeTextTrack = t
    }, s.getNativeTextTrack = function() {
      return this._nativeTextTrack
    }, s.getCues = function() {
      return this._nativeTextTrack.cues
    }, s.removeCue = function(t) {
      this._nativeTextTrack.removeCue(t)
    }, s.addCue = function(t, e, i) {
      var n = new VTTCue(t, e, i);
      this.addVTTCue(n)
    }, s.addVTTCue = function(t) {
      this._nativeTextTrack.addCue(t)
    }, s.show = function() {
      this.set({
        mode: "showing"
      })
    }, s.hide = function() {
      this.set({
        mode: "hidden"
      })
    }, s.disable = function() {
      this.set({
        mode: "disabled"
      })
    }, e.exports = n
  }, {
    "@marcom/ac-object": 804,
    "ac-mvc-model": 449
  }],
  472: [function(t, e, i) {
    "use strict";

    function n() {
      r.apply(this, arguments), this._sources = new s, this.has("src") && this._addInitSources()
    }
    var r = t("ac-mvc-model").Model,
      o = t("@marcom/ac-object"),
      s = t("./../collection/MediaSourceCollection"),
      a = t("./MediaSource"),
      c = t("@marcom/ac-video-posterframe"),
      l = c.defaultPosterPath(),
      u = n.prototype = o.create(r.prototype);
    u.defaultAttributes = {
      duration: "NaN",
      readyState: 0,
      currentTime: 0,
      paused: !0,
      playbackRate: 1,
      ended: !1,
      seeking: !1,
      controls: !1,
      muted: !1,
      volume: 1,
      looping: !1,
      poster: l,
      defaultPlaybackRate: 1,
      defaultMuted: !1,
      currentSrc: null,
      preload: "auto"
    }, u._addInitSources = function() {
      var t = this.get("src");
      Array.isArray(t) || (t = [t]), t.forEach(this.addSource, this)
    }, u.findSourcesByFullyQualifiedURL = function(t) {
      return this._sources.filter(function(e) {
        return e.getFullyQualifiedURL() === t
      })
    }, u.getPoster = function() {
      return this.get("poster")
    }, u.setAutoplay = function(t) {
      this.set({
        autoplay: t
      })
    }, u.setPoster = function(t) {
      this.set({
        poster: t
      })
    }, u.setPreload = function(t) {
      this.set({
        preload: t
      })
    }, u.addSource = function(t) {
      var e = this.createSource(t);
      return this._sources.add(e), this.trigger("source:add", {
        source: e
      }), 1 === this._sources.models.length && this.setCurrentSrc(e), e
    }, u._coerceMediaSourceData = function(t) {
      return "string" == typeof t ? {
        src: t
      } : t
    }, u.createSource = function(t) {
      return t instanceof a ? t : new a(this._coerceMediaSourceData(t))
    }, u.findSources = function(t, e) {
      return "string" == typeof t && (t = {
        src: t
      }), this._sources.find(t, e)
    }, u.getSources = function() {
      return this._sources
    }, u.getAutoplay = function() {
      return this.get("autoplay")
    }, u.setCurrentTime = function(t) {
      this.set({
        currentTime: t
      })
    }, u.getPreload = function() {
      return this.get("preload")
    }, u.setSrc = function(t) {
      this.set({
        currentSrc: t.cid
      })
    }, u.setCurrentSrc = function(t) {
      this.set({
        currentSrc: t.cid
      })
    }, u.getCurrentSrc = function() {
      return this._sources.get(this.get("currentSrc"))
    }, u.setReadyState = function(t) {
      this.set({
        readyState: t
      })
    }, u.getDefaultMuted = function() {
      return this.get("defaultMuted")
    }, u.getDefaultPlaybackRate = function() {
      return this.get("defaultPlaybackRate")
    }, u.setLoop = function(t) {
      this.set({
        loop: t
      })
    }, u.getLoop = function() {
      return this.get("loop")
    }, u.getSeeking = function() {
      return this.get("seeking")
    }, u.getReadyState = function() {
      return this.get("readyState")
    }, u.getDuration = function() {
      return this.get("duration")
    }, u.getCurrentTime = function() {
      return this.get("currentTime")
    }, u.setVolume = function(t) {
      this.set({
        volume: t
      })
    }, u.getVolume = function() {
      return this.get("volume")
    }, u.getPaused = function() {
      return this.get("paused")
    }, u.getPlaybackRate = function() {
      return this.get("playbackRate")
    }, u.setEnded = function(t) {
      this.set({
        ended: t
      })
    }, u.getEnded = function() {
      return this.get("ended")
    }, u.getMuted = function() {
      return this.get("muted")
    }, u.setPlaybackRate = function(t) {
      this.set({
        playbackRate: t
      })
    }, u.setMuted = function(t, e) {
      this.set({
        muted: t
      }, e)
    }, e.exports = n
  }, {
    "./../collection/MediaSourceCollection": 454,
    "./MediaSource": 469,
    "@marcom/ac-object": 804,
    "@marcom/ac-video-posterframe": 427,
    "ac-mvc-model": 449
  }],
  473: [function(t, e, i) {
    function n(t) {
      var e = t.getAttribute("src"),
        i = {
          src: e
        };
      return t.getAttribute("type") && (i.type = t.getAttribute("type")), new r(i)
    }
    var r = t("./../../MediaSource");
    e.exports = n
  }, {
    "./../../MediaSource": 469
  }],
  474: [function(t, e, i) {
    function n(t, e) {
      e.getAttribute("preload") && (t.preload = e.getAttribute("preload"))
    }

    function r(t, e) {
      var i;
      t.src = [], e.getAttribute("src") && t.src.push(c(e)), i = s("source", e), i.length && (i = i.map(function(t) {
        return c(t)
      }), t.src = t.src.concat(i))
    }
    var o = t("./../../Video"),
      s = t("@marcom/ac-dom-traversal/querySelectorAll"),
      a = t("@marcom/ac-object"),
      c = t("./../../mediaSource/factory/createFromSourceTag");
    e.exports = function(t, e) {
      e = e || {};
      var i, s, c = {
        paused: t.paused,
        currentTime: t.currentTime,
        duration: t.duration,
        muted: t.muted,
        volume: t.volume,
        playbackRate: t.playbackRate,
        ended: t.ended,
        readyState: t.readyState,
        seeking: t.seeking,
        poster: t.poster,
        defaultPlaybackRate: t.defaultPlaybackRate,
        defaultMuted: t.defaultMuted,
        currentSrc: t.currentSrc,
        autoplay: t.autoplay
      };
      return n(c, t), r(c, t), c = a.extend(c, e), i = new o(c), t.currentSrc && (s = i.findSourcesByFullyQualifiedURL(t.currentSrc), s && s[0] && i.setCurrentSrc(s[0])), i
    }
  }, {
    "./../../Video": 472,
    "./../../mediaSource/factory/createFromSourceTag": 473,
    "@marcom/ac-dom-traversal/querySelectorAll": 62,
    "@marcom/ac-object": 804
  }],
  475: [function(t, e, i) {
    "use strict";

    function n() {
      r.apply(this, arguments), this.options.mediaController && this.setMediaController(this.options.mediaController), this.poster = null, this._initPoster(), this._initControls(), this._listenForFullscreenEvents(), l.isDesktop() && this._appendBlockade()
    }
    var r = t("@marcom/ac-mvc-view").View,
      o = t("@marcom/ac-video-controls"),
      s = t("./../controls/Native"),
      a = t("@marcom/ac-object"),
      c = t("@marcom/ac-fullscreen"),
      l = t("@marcom/ac-feature"),
      u = t("./../const/readyState"),
      h = t("@marcom/ac-video-posterframe"),
      d = t("@marcom/ac-dom-events/addEventListener"),
      m = t("@marcom/ac-classlist/add"),
      p = t("@marcom/ac-classlist/remove"),
      f = t("@marcom/ac-classlist/contains"),
      g = "user-hover";
    n.LOADEDMETADATA = u.LOADEDMETADATA, n.LOADEDDATA = u.LOADEDDATA, n.CANPLAY = u.CANPLAY, n.CANPLAYTHROUGH = u.CANPLAYTHROUGH;
    var v = n.prototype = a.create(r.prototype);
    v.defaultOptions = {
      controlsTimeoutDuration: 5e3
    }, v.className = "ac-video-player", v._appendBlockade = function() {
      var t = new r({
        className: "ac-video-blockade"
      });
      t.appendTo(this.el), this._blockade = t
    }, v._onEnterFullscreen = function(t) {
      t.target === this.getFullscreenTargetElement() && this.trigger("enterfullscreen", t)
    }, v._onExitFullscreen = function(t) {
      t.target === this.getFullscreenTargetElement() && this.trigger("exitfullscreen", t)
    }, v._listenForFullscreenEvents = function() {
      c.on("enterfullscreen", this._onEnterFullscreen, this),
        c.on("exitfullscreen", this._onExitFullscreen, this)
    }, v._unbindFullscreenEvents = function() {
      c.off("enterfullscreen", this._onEnterFullscreen, this), c.off("exitfullscreen", this._onExitFullscreen, this)
    }, v.destroy = function() {
      r.prototype.destroy.call(this), this._unbindFullscreenEvents()
    }, v._initPoster = function() {
      var t = null;
      this.mediaController.hasPoster() && null === this.poster && (t = h.create(this.mediaController), t.render(), t.el.parentNode !== this.el && t.appendTo(this.el), this.poster = t)
    }, v._destroyPoster = function() {
      this.poster && this.poster.el.parentNode === this.el && this.el.removeChild(this.poster.el), this.poster = null
    }, v.getFullscreenTargetElement = function() {
      return "ios" === c.getMode() ? this.getMediaElement() : this.el
    }, v.toggleFullscreen = function() {
      this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen()
    }, v.isFullscreen = function() {
      return c.fullscreenElement() === this.getFullscreenTargetElement()
    }, v.requestFullscreen = function() {
      var t = this.getFullscreenTargetElement();
      c.fullscreenEnabled(t) && c.requestFullscreen(t)
    }, v.exitFullscreen = function() {
      c.exitFullscreen(this.getFullscreenTargetElement())
    }, v._instantiateDefaultCustomUIControls = function() {
      var t = this._instantiateControls(o);
      t.el.parentNode !== this.el && "function" == typeof t.appendTo && t.appendTo(this.el);
      var e, i = {},
        n = function(t) {
          void 0 !== t.pageX && i.x === t.pageX && i.y === t.pageY || (f(this.el, g) || m(this.el, g), window.clearTimeout(e), e = window.setTimeout(function() {
            p(this.el, g)
          }.bind(this), this.options.controlsTimeoutDuration), i = {
            x: t.pageX,
            y: t.pageY
          })
        }.bind(this);
      d(this.el, "mouseenter", n), d(this.el, "mousemove", n);
      var r = function() {
        window.clearTimeout(e), p(this.el, g), i = {}
      };
      return "onmouseleave" in this.el ? d(this.el, "mouseleave", r.bind(this)) : d(this.el, "mouseout", function(e) {
        t.el.contains(e.target) || e.target === t.el || r.call(this)
      }.bind(this), !0), t
    }, v._instantiateControls = function(t) {
      return "function" != typeof t.create ? t : t.create({
        player: this.mediaController,
        fullScreenElement: this.getFullscreenTargetElement()
      })
    }, v._instantiateNonHandheldControls = function() {
      var t, e = this.options.controls;
      return t = e === !1 || null === e ? null : void 0 !== e ? this._instantiateControls(e) : l.isDesktop() ? this._instantiateDefaultCustomUIControls() : this._instantiateControls(s)
    }, v._instantiateHandheldControls = function() {
      return this._instantiateControls(s)
    }, v._initControls = function() {
      var t;
      t = l.isHandheld() ? this._instantiateHandheldControls() : this._instantiateNonHandheldControls(), this.controls = t
    }, v.setMediaController = function(t) {
      this.mediaController && this.mediaController.stopPropagatingTo(this), this.mediaController = t, this.mediaController.propagateTo(this._eventEmitter)
    }, v.getVideo = function() {
      return this.mediaController.getVideo()
    }, v.play = function() {
      return this.mediaController.play()
    }, v.pause = function() {
      return this.mediaController.pause()
    }, v.getPaused = function() {
      return this.mediaController.getPaused()
    }, v.setMuted = function(t) {
      return this.mediaController.setMuted(t)
    }, v.getMuted = function() {
      return this.mediaController.getMuted()
    }, v.getEnded = function() {
      return this.mediaController.getEnded()
    }, v.setVolume = function(t) {
      return this.mediaController.setVolume(t)
    }, v.getVolume = function() {
      return this.mediaController.getVolume()
    }, v.setCurrentTime = function(t) {
      return this.mediaController.setCurrentTime(t)
    }, v.getCurrentTime = function() {
      return this.mediaController.getCurrentTime()
    }, v.getPreload = function() {
      return this.mediaController.getPreload()
    }, v.setPreload = function(t) {
      return this.mediaController.setPreload(t)
    }, v.setPlaybackRate = function(t) {
      return this.mediaController.setPlaybackRate(t)
    }, v.getPlaybackRate = function() {
      return this.mediaController.getPlaybackRate()
    }, v.getDuration = function() {
      return this.mediaController.getDuration()
    }, v.setLoop = function(t) {
      return this.mediaController.setLoop(t)
    }, v.getLoop = function() {
      return this.mediaController.getLoop()
    }, v.getError = function() {
      return this.mediaController.getError()
    }, v.getPoster = function() {
      return this.mediaController.getPoster()
    }, v.getMediaWidth = function() {
      return this.mediaController.getWidth()
    }, v.getMediaHeight = function() {
      return this.mediaController.getHeight()
    }, v.setPoster = function() {
      this.mediaController.setPoster.apply(this.mediaController, arguments), this.mediaController.hasPoster() ? this._initPoster() : this._destroyPoster()
    }, v.setSrc = function() {
      return this.mediaController.setSrc.apply(this.mediaController, arguments)
    }, v.getCurrentSrc = function() {
      return this.mediaController.getCurrentSrc()
    }, v.getSources = function() {
      return this.mediaController.getSources()
    }, v.getNetworkState = function() {
      return this.mediaController.getNetworkState()
    }, v.getReadyState = function() {
      return this.mediaController.getReadyState()
    }, v.getDefaultPlaybackRate = function() {
      return this.mediaController.getDefaultPlaybackRate()
    }, v.getSeekable = function() {
      return this.mediaController.getSeekable()
    }, v.getDefaultMuted = function() {
      return this.mediaController.getDefaultMuted()
    }, v.getSeeking = function() {
      return this.mediaController.getSeeking()
    }, v.getStartDate = function() {
      return this.mediaController.getStartDate()
    }, v.getPlayed = function() {
      return this.mediaController.getPlayed()
    }, v.getBuffered = function() {
      return this.mediaController.getBuffered()
    }, v.getTextTracks = function() {
      return this.mediaController.getTextTracks()
    }, v.getTextTracksCount = function() {
      return this.mediaController.getTextTracksCount()
    }, v.addTextTrackFromRemoteVTT = function() {
      return this.mediaController.addTextTrackFromRemoteVTT.apply(this.mediaController, arguments)
    }, v.addTextTrack = function() {
      return this.mediaController.addTextTrack.apply(this.mediaController, arguments)
    }, v.removeTextTrack = function() {
      return this.mediaController.removeTextTrack.apply(this.mediaController, arguments)
    }, v.getEnabledTextTracks = function() {
      return this.mediaController.getEnabledTextTracks.apply(this.mediaController, arguments)
    }, v.getVisibleTextTracks = function() {
      return this.mediaController.getVisibleTextTracks.apply(this.mediaController, arguments)
    }, v.findTextTrack = function(t) {
      return this.mediaController.findTextTrack(t)
    }, v.findTextTrackModelFromNativeTrack = function(t) {
      return this.mediaController.findTextTrackModelFromNativeTrack(t)
    }, v.getMediaElement = function() {
      return this.mediaController.getMediaElement()
    }, e.exports = n
  }, {
    "./../const/readyState": 459,
    "./../controls/Native": 464,
    "@marcom/ac-classlist/add": 210,
    "@marcom/ac-classlist/contains": 216,
    "@marcom/ac-classlist/remove": 218,
    "@marcom/ac-dom-events/addEventListener": 6,
    "@marcom/ac-feature": 184,
    "@marcom/ac-fullscreen": 605,
    "@marcom/ac-mvc-view": 382,
    "@marcom/ac-object": 804,
    "@marcom/ac-video-controls": 403,
    "@marcom/ac-video-posterframe": 427
  }],
  476: [function(t, e, i) {
    "use strict";
    e.exports = {
      novideosupportheadline: "Your browser doesn’t support playback of this video.",
      novideosupportdetails: "To watch it please use Safari, Firefox, Chrome, Internet Explorer 9 or later, or Microsoft Edge."
    }
  }, {}],
  477: [function(t, e, i) {
    var n = t("./../Player"),
      r = t("./../../mediaController/factory/create"),
      o = t("@marcom/ac-dom-nodes"),
      s = t("./../../collection/playerCollection"),
      a = t("./createNoSupportPlayer"),
      c = t("@marcom/ac-browser"),
      l = !(c.IE && c.version <= 8);
    e.exports = function(t, e) {
      if (!l) return a(e);
      e = e || {};
      var i;
      return e.mediaController || (e.mediaController = r(t, e)), i = new n(e), e.mediaController.getViewElement().parentNode !== i.el && o.insertFirstChild(e.mediaController.getViewElement(), i.el), e.preventCollection || s.add(i), i
    }
  }, {
    "./../../collection/playerCollection": 457,
    "./../../mediaController/factory/create": 466,
    "./../Player": 475,
    "./createNoSupportPlayer": 480,
    "@marcom/ac-browser": 206,
    "@marcom/ac-dom-nodes": 332
  }],
  478: [function(t, e, i) {
    var n = t("./../../config/VideoConfig"),
      r = t("./../../models/Video"),
      o = t("./create"),
      s = function(t) {
        var e, i, s = new n,
          a = s.getConfig(t, {}, {});
        a.id = t.id, e = a, i = a.source;
        var c = new r({
          src: i
        });
        return o(c)
      };
    e.exports = s
  }, {
    "./../../config/VideoConfig": 458,
    "./../../models/Video": 472,
    "./create": 477
  }],
  479: [function(t, e, i) {
    function n(t) {
      var e = s("source", t),
        i = 0;
      for (i; i < e.length; i += 1) e[i].parentNode.removeChild(e[i])
    }
    var r = t("./create"),
      o = t("./../../mediaController/factory/createFromVideoTag"),
      s = t("@marcom/ac-dom-traversal/querySelectorAll"),
      a = t("@marcom/ac-dom-traversal/querySelector"),
      c = function(t, e) {
        e = e || {};
        var i = a("video", t);
        return null === i && (i = document.createElement("video"), t.appendChild(i)), "undefined" != typeof e.src && null !== e.src && n(i), e.mediaController = o(i, e), e.element = t, r(null, e)
      };
    e.exports = c
  }, {
    "./../../mediaController/factory/createFromVideoTag": 467,
    "./create": 477,
    "@marcom/ac-dom-traversal/querySelector": 61,
    "@marcom/ac-dom-traversal/querySelectorAll": 62
  }],
  480: [function(t, e, i) {
    "use strict";
    var n = t("../Player"),
      r = t("@marcom/ac-string/supplant"),
      o = t("@marcom/ac-video-localization").localization,
      s = '<div class="ac-video-not-supported">\n\t<div class="ac-video-not-supported-content">\n\t\t<p class="ac-video-not-supported-headline">{novideosupportheadline}</p>\n\t\t<p class="ac-video-not-supported-details">{novideosupportdetails}</p>\n\t</div>\n</div>',
      a = t("../defaults/defaultNoSupportText");
    e.exports = function() {
      var t = document.createElement("div");
      t.className = "ac-video-player";
      var e = {
          el: t,
          notSupported: !0,
          appendTo: function(e) {
            e.appendChild(t)
          }
        },
        i = function() {}.bind(e);
      for (var c in n.prototype) e.hasOwnProperty(c) || (e[c] = i);
      return o.create().then(function(e) {
        t.innerHTML = r(s, Object.assign(a, e.attributes))
      })["catch"](function() {
        t.innerHTML = r(s, Object.assign(a))
      }), e
    }
  }, {
    "../Player": 475,
    "../defaults/defaultNoSupportText": 476,
    "@marcom/ac-string/supplant": 393,
    "@marcom/ac-video-localization": 285
  }],
  481: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-browser");
    e.exports = {
      get: function() {
        var t = "html5";
        return "IE" === n.name && n.version < 9 && (t = "quicktime"), t
      }
    }
  }, {
    "@marcom/ac-browser": 206
  }],
  482: [function(t, e, i) {
    function n() {
      r.apply(this, arguments)
    }
    var r = t("@marcom/ac-mvc-view").View,
      o = n.prototype = new r;
    o.tagName = "source", o.render = function() {
      this.el.setAttribute("src", this.model.get("src")), this.model.has("type") && this.el.setAttribute("type", this.model.get("type"))
    }, e.exports = n
  }, {
    "@marcom/ac-mvc-view": 382
  }],
  483: [function(t, e, i) {
    function n() {
      r.apply(this, arguments)
    }
    var r = t("./MediaView"),
      o = t("./../MediaSourceTag"),
      s = t("@marcom/ac-object"),
      a = t("@marcom/ac-dom-traversal/querySelector"),
      c = n.prototype = s.create(r.prototype);
    c.tagName = "video", c._renderBooleanAttribute = function(t, e) {
      var i = this.getMediaElement();
      e === !0 ? i.setAttribute(t, "") : i.removeAttribute(t)
    }, c._findExistingSourceOrTrackElement = function(t) {
      var e, i;
      return t.has("src") && (i = '[src="' + t.get("src") + '"]', e = a(i, this.el)), e
    }, c._appendSource = function(t) {
      var e = this.getMediaElement(),
        i = this._findExistingSourceOrTrackElement(t),
        n = new o({
          model: t,
          element: i
        });
      n.render(), i || n.appendTo(e)
    }, c._onSourceAdd = function(t) {
      this._appendSource(t.source)
    }, c._renderPreload = function() {
      var t = this.getMediaElement();
      t.setAttribute("preload", this.model.getPreload())
    }, c._renderAutoplay = function() {
      this._renderBooleanAttribute("autoplay", this.model.getAutoplay())
    }, c._renderMuted = function() {
      this._renderBooleanAttribute("muted", this.model.getMuted())
    }, c._renderAirplay = function() {
      this._renderBooleanAttribute("x-webkit-airplay", !0)
    }, c._renderCrossOrigin = function() {
      var t = this.getMediaElement();
      this.model.has("crossorigin") && t.setAttribute("crossorigin", this.model.get("crossorigin"))
    }, c._renderCurrentSrc = function() {
      var t = this.model.getCurrentSrc();
      t && this.el.setAttribute("src", t.get("src"))
    }, c._renderLoop = function() {
      var t = this.model.getLoop();
      this._renderBooleanAttribute("loop", t)
    }, c._respondToAddTrackEvent = function(t) {
      this.emitterTrigger("addtrack", t.data)
    }, c.getSourceAttribute = function() {
      return this.getMediaElement().getAttribute("src")
    }, c.render = function() {
      var t = this.getMediaElement();
      this.model.on("source:add", this._onSourceAdd, this), this.model.on("change:autoplay", this._renderAutoplay, this), this.model.on("change:muted", this._renderMuted, this), this.model.on("change:preload", this._renderPreload, this), this.model.on("change:currentSrc", this._renderCurrentSrc, this), this.model.on("change:crossorigin", this._renderCrossOrigin, this), this.model.getSources().forEach(this._appendSource, this), this._renderAutoplay(), this._renderPreload(), this._renderMuted(), this._renderAirplay(), this._renderCrossOrigin(), this._renderCurrentSrc(), this._renderLoop(), this.model.id && t.setAttribute("id", this.model.id)
    }, e.exports = n
  }, {
    "./../MediaSourceTag": 482,
    "./MediaView": 484,
    "@marcom/ac-dom-traversal/querySelector": 61,
    "@marcom/ac-object": 804
  }],
  484: [function(t, e, i) {
    "use strict";

    function n() {
      this._mediaElement = null, s.apply(this, arguments)
    }
    var r = t("@marcom/ac-dom-traversal/querySelector"),
      o = t("@marcom/ac-browser"),
      s = t("@marcom/ac-mvc-view").View,
      a = t("@marcom/ac-object"),
      c = n.prototype = a.create(s.prototype);
    c.className = "ac-video-media-controller", c._findMediaElementByTagName = function(t) {
      return this.getTagName() === t ? this.el : r(t, this.el)
    }, c.renderTextTrack = function() {}, c._findMediaElement = function() {
      return this._findMediaElementByTagName("video") ? this._findMediaElementByTagName("video") : "IE" !== o.name ? this._findMediaElementByTagName("embed") : this._findMediaElementByTagName("object")
    }, c.getMediaElement = function() {
      return this._findMediaElement()
    }, e.exports = n
  }, {
    "@marcom/ac-browser": 206,
    "@marcom/ac-dom-traversal/querySelector": 61,
    "@marcom/ac-mvc-view": 382,
    "@marcom/ac-object": 804
  }],
  485: [function(t, e, i) {
    "use strict";

    function n() {
      r.apply(this, arguments), this.textTracks = {
        id: null,
        cues: []
      }, this.textTrackEl = null, this.textTrackInnerEl = null, this.isVisible = !1, this._textTrackDivs = [], this.loadExistingTextTracksSrc()
    }
    var r = t("@marcom/ac-mvc-view").View,
      o = t("./TextTrackDiv"),
      s = t("@marcom/ac-object"),
      a = t("@marcom/ac-dom-styles"),
      c = t("@marcom/ac-dom-traversal/firstChild"),
      l = t("@marcom/ac-ajax"),
      u = t("@marcom/ac-console"),
      h = t("@marcom/ac-classlist"),
      d = "is-visible",
      m = n.prototype = s.create(r.prototype);
    m.loadExistingTextTracksSrc = function() {
      for (var t, e = this.el && this.el.children ? this.el.children : [], i = e.length; i--;)
        if (e[i] && "TRACK" === e[i].nodeName) {
          t = e[i].getAttribute("src");
          break
        } t && this.loadVTTFile(t)
    }, m.loadVTTFile = function(t, e) {
      l.get({
        url: t
      }).then(function(t) {
        this._vttFileLoadSuccess(t.responseText, e)
      }.bind(this), function(t) {
        u.log(JSON.stringify(t))
      })
    }, m._vttFileLoadSuccess = function(t, e) {
      var i = this.addTextTrackTag(e);
      this.textTrackEl = i.el, this.textTrackInnerEl = c(this.textTrackEl), this.textTracks = {
        id: e.cid,
        cues: this._formatVTTToModel(t)
      }, this._publishAddTrack(this.textTracks)
    }, m._publishAddTrack = function(t) {
      this.emitterTrigger("addtrack", {
        track: t,
        textTrackEl: this.textTrackEl,
        textTrackInnerEl: this.textTrackInnerEl
      })
    }, m._publishRemoveTrack = function(t) {
      this.emitterTrigger("removetrack", {
        track: t
      })
    }, m.show = function() {
      this.textTrackEl && !this.isVisible && (a.setStyle(this.textTrackEl, {
        display: "inline-block"
      }), h.add(this.textTrackInnerEl, d), this.isVisible = !0)
    }, m.hide = function() {
      this.textTrackEl && this.isVisible && (a.setStyle(this.textTrackEl, {
        display: "none"
      }), this.textTrackInnerEl && h.remove(this.textTrackInnerEl, d), this.isVisible = !1)
    }, m._createTextTrackDiv = function(t) {
      this.isVisible && this.hide();
      var e = new o({
        model: t
      });
      return e.render(), this.el.parentNode ? (e.appendTo(this.el.parentNode), this._textTrackDivs.push(e)) : this.on("canplay", function() {
        e.appendTo(this.el.parentNode), this._textTrackDivs.push(e)
      }.bind(this)), e
    }, m.addTextTrackTag = function(t) {
      return this._createTextTrackDiv(t)
    }, m._findTextTrackTagFromModel = function(t) {
      for (var e = this._textTrackDivs.length, i = {}, n = 0; n < e; n++)
        if (this._textTrackDivs[n].model.cid === t.cid) {
          i.div = this._textTrackDivs[n], i.idx = n;
          break
        } return i
    }, m.removeTextTrackDiv = function(t) {
      var e = this._findTextTrackTagFromModel(t);
      e.div && (e.div.destroy(), this._textTrackDivs.splice(e.idx, 1)), this._publishRemoveTrack(t.getCues())
    }, m._formatVTTToModel = function(t) {
      var e, i, n = t.split(/\n/),
        r = /([\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3}( \-\-> ){1}([\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3}/,
        o = [],
        s = 0,
        a = n.length;
      for (s; s < a; s++)
        if (i = "", r.test(n[s])) {
          for (e = n[s].split(" --> "), e[0] = e[0].split(":").length < 3 ? "00:" + e[0] : e[0], e[1] = e[1].split(":").length < 3 ? "00:" + e[1] : e[1]; ++s && s < a && !r.test(n[s]);) "" !== n[s] && (i += n[s] + "<br />");
          i = i.substr(0, i.length - 6), s < a && s--, o.push({
            startTime: e[0].split(".")[0],
            endTime: e[1].split(".")[0],
            text: i
          })
        } return o
    }, e.exports = n
  }, {
    "./TextTrackDiv": 486,
    "@marcom/ac-ajax": 311,
    "@marcom/ac-classlist": 217,
    "@marcom/ac-console": 316,
    "@marcom/ac-dom-styles": 351,
    "@marcom/ac-dom-traversal/firstChild": 52,
    "@marcom/ac-mvc-view": 382,
    "@marcom/ac-object": 804
  }],
  486: [function(t, e, i) {
    function n() {
      r.apply(this, arguments)
    }
    var r = t("@marcom/ac-mvc-view").View,
      o = t("@marcom/ac-object"),
      s = t("@marcom/ac-dom-styles"),
      a = t("@marcom/ac-classlist/add"),
      c = n.prototype = o.create(r.prototype);
    c.tagName = "div", c.render = function() {
      var t = document.createElement("div");
      a(t, "ac-text-track-inner-element"), s.setStyle(this.el, {
        display: "none",
        position: "absolute",
        "z-index": "9",
        bottom: "20%",
        left: "0",
        right: "0",
        "text-align": "center"
      }), this.el.setAttribute("id", this.model.cid), this.el.appendChild(t)
    }, e.exports = n
  }, {
    "@marcom/ac-classlist/add": 210,
    "@marcom/ac-dom-styles": 351,
    "@marcom/ac-mvc-view": 382,
    "@marcom/ac-object": 804
  }],
  487: [function(t, e, i) {
    "use strict";

    function n() {
      r.apply(this, arguments)
    }
    var r = t("@marcom/ac-mvc-view").View,
      o = t("@marcom/ac-object"),
      s = n.prototype = o.create(r.prototype);
    s._onModeChange = function(t) {
      this.renderMode()
    }, s.renderMode = function() {
      var t = this.model.get("mode");
      this.el.mode = t
    }, s.render = function() {
      this.model.on("change:mode", this._onModeChange, this)
    }, e.exports = n
  }, {
    "@marcom/ac-mvc-view": 382,
    "@marcom/ac-object": 804
  }],
  488: [function(t, e, i) {
    function n() {
      r.apply(this, arguments)
    }
    var r = t("@marcom/ac-mvc-view").View,
      o = t("@marcom/ac-object"),
      s = n.prototype = o.create(r.prototype);
    s.tagName = "track", s.render = function() {
      ["src", "type", "label", "kind", "srclang"].forEach(function(t) {
        this.model.has(t) && this.el.setAttribute(t, this.model.get(t))
      }, this), this.el.setAttribute("id", this.model.cid)
    }, e.exports = n
  }, {
    "@marcom/ac-mvc-view": 382,
    "@marcom/ac-object": 804
  }],
  489: [function(t, e, i) {
    "use strict";

    function n() {
      r.apply(this, arguments), this._textTracks = this.el.textTracks, this._textTrackTags = [], this.addTextTrackEvents()
    }
    var r = t("@marcom/ac-mvc-view").View,
      o = t("./TextTrackTag"),
      s = t("@marcom/ac-object"),
      a = n.prototype = s.create(r.prototype);
    a.addTextTrackEvents = function() {
      this._textTracks && (this._boundRespondToAddTrackEvent = this._respondToAddTrackEvent.bind(this), this._boundRespondToChangeEvent = this._respondToChangeEvent.bind(this), this._boundRespondToRemoveTrackEvent = this._respondToRemoveTrackEvent.bind(this), this._textTracks.addEventListener("addtrack", this._boundRespondToAddTrackEvent), this._textTracks.addEventListener("change", this._boundRespondToChangeEvent), this._textTracks.addEventListener("removetrack", this._boundRespondToRemoveTrackEvent))
    }, a.removeTextTrackEvents = function() {
      this._boundRespondToAddTrackEvent = null, this._boundRespondToChangeEvent = null, this._boundRespondToRemoveTrackEvent = null, this._textTracks.removeEventListener("addtrack", this._boundRespondToAddTrackEvent), this._textTracks.removeEventListener("change", this._boundRespondToChangeEvent), this._textTracks.removeEventListener("removetrack", this._boundRespondToRemoveTrackEvent)
    }, a._respondToAddTrackEvent = function(t) {
      this._addIdToTextTrackEventData(t), this.emitterTrigger("addtrack", {
        track: t.track
      })
    }, a._respondToChangeEvent = function(t) {
      this.emitterTrigger("change", t)
    }, a._respondToRemoveTrackEvent = function(t) {
      this._addIdToTextTrackEventData(t), this.emitterTrigger("removetrack", {
        track: t.track
      })
    }, a._addIdToTextTrackEventData = function(t) {
      if (t && t.track && this._textTrackId && !t.track.id) {
        try {
          t.track.id = this._textTrackId
        } catch (e) {}
        this._textTrackId = null
      }
      return t
    }, a._createTextTrackTag = function(t) {
      var e = new o({
        model: t
      });
      e.render(), this._textTrackId = e.el.id, e.appendTo(this.el), this._textTrackTags.push(e)
    }, a.addTextTrackTag = function(t) {
      this._createTextTrackTag(t)
    }, a._findTextTrackTagFromModel = function(t) {
      for (var e = this._textTrackTags.length, i = {}, n = 0; n < e; n++)
        if (this._textTrackTags[n].model.cid === t.cid) {
          i.tag = this._textTrackTags[n], i.idx = n;
          break
        } return i
    }, a.removeTextTrackTag = function(t) {
      var e = this._findTextTrackTagFromModel(t);
      e.tag && (e.tag.destroy(), this._textTrackTags.splice(e.idx, 1))
    }, e.exports = n
  }, {
    "./TextTrackTag": 488,
    "@marcom/ac-mvc-view": 382,
    "@marcom/ac-object": 804
  }],
  490: [function(t, e, i) {
    "use strict";

    function n() {
      r.apply(this, arguments)
    }
    var r = t("@marcom/ac-mvc-view").View,
      o = t("@marcom/ac-object"),
      s = n.prototype = o.create(r.prototype);
    s._onModeChange = function(t) {
      this._renderMode()
    }, s._renderMode = function() {
      var t = this.model.get("mode");
      "showing" === t ? this.el.webkitClosedCaptionsVisible = !0 : this.el.webkitClosedCaptionsVisible = !1
    }, s.setModel = function(t) {
      this.model && this.model.off("change:mode", this._onModeChange, this), this.model = t, this.listen()
    }, s.listen = function() {
      this.model.on("change:mode", this._onModeChange, this)
    }, s.render = function() {
      this._renderMode(), this.listen()
    }, e.exports = n
  }, {
    "@marcom/ac-mvc-view": 382,
    "@marcom/ac-object": 804
  }],
  491: [function(t, e, i) {
    "use strict";
    e.exports = t("@marcom/ac-video-player")
  }, {
    "@marcom/ac-video-player": 451
  }],
  492: [function(t, e, i) {
    "use strict";
    e.exports = {
      add: t("./ac-classlist/add"),
      contains: t("./ac-classlist/contains"),
      remove: t("./ac-classlist/remove"),
      toggle: t("./ac-classlist/toggle")
    }
  }, {
    "./ac-classlist/add": 493,
    "./ac-classlist/contains": 494,
    "./ac-classlist/remove": 496,
    "./ac-classlist/toggle": 497
  }],
  493: [function(t, e, i) {
    "use strict";
    var n = t("./helpers/className");
    e.exports = function() {
      var t = Array.prototype.slice.call(arguments),
        e = t.shift(t);
      e.classList && e.classList.add ? e.classList.add.apply(e.classList, t) : t.forEach(n.add.bind(this, e))
    }
  }, {
    "./helpers/className": 495
  }],
  494: [function(t, e, i) {
    "use strict";
    var n = t("./helpers/className");
    e.exports = function(t, e) {
      return t.classList && t.classList.contains ? t.classList.contains(e) : n.contains(t, e)
    }
  }, {
    "./helpers/className": 495
  }],
  495: [function(t, e, i) {
    "use strict";
    var n = function(t) {
        return new RegExp("(\\s|^)" + t + "(\\s|$)")
      },
      r = function(t, e) {
        return n(e).test(t.className)
      },
      o = function(t, e) {
        r(t, e) || (t.className += " " + e)
      },
      s = function(t, e) {
        r(t, e) && (t.className = t.className.replace(n(e), "$1").trim())
      };
    e.exports = {
      contains: r,
      add: o,
      remove: s
    }
  }, {}],
  496: [function(t, e, i) {
    "use strict";
    var n = t("./helpers/className");
    e.exports = function() {
      var t = Array.prototype.slice.call(arguments),
        e = t.shift(t);
      e.classList && e.classList.remove ? e.classList.remove.apply(e.classList, t) : t.forEach(n.remove.bind(this, e))
    }
  }, {
    "./helpers/className": 495
  }],
  497: [function(t, e, i) {
    "use strict";
    var n = t("./helpers/className");
    e.exports = function(t, e, i) {
      var r, o = "undefined" != typeof i;
      return t.classList && t.classList.toggle ? o ? t.classList.toggle(e, i) : t.classList.toggle(e) : (r = o ? !!i : !n.contains(t, e), r ? n.add(t, e) : n.remove(t, e), r)
    }
  }, {
    "./helpers/className": 495
  }],
  498: [function(t, e, i) {
    "use strict";
    var n = t("./ac-prefixer/Prefixer");
    e.exports = new n, e.exports.Prefixer = n
  }, {
    "./ac-prefixer/Prefixer": 499
  }],
  499: [function(t, e, i) {
    "use strict";

    function n() {
      this._supportsAvailable = "CSS" in window && "supports" in window.CSS, this._cssPrefixes = l, this._domPrefixes = u, this._evtPrefixes = h, this._styleProperties = {}, this._styleValues = {}, this._eventTypes = {}
    }
    var r = t("./Prefixer/camelCasedEvents"),
      o = /(\([^\)]+\))/gi,
      s = /([^ ,;\(]+(\([^\)]+\))?)/gi,
      a = /(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi,
      c = /^(webkit|moz|ms)/gi,
      l = ["-webkit-", "-moz-", "-ms-"],
      u = ["Webkit", "Moz", "ms"],
      h = ["webkit", "moz", "ms"],
      d = n.prototype;
    d.getEventType = function(t) {
      var e, i;
      if (t = t.toLowerCase(), t in this._eventTypes) return this._eventTypes[t];
      if (this._checkEventType("on" + t)) return this._eventTypes[t] = t;
      if (r[t])
        for (e in r[t])
          if (this._checkEventType(e)) return this._eventTypes[t] = r[t][e];
      for (i = 0; i < this._evtPrefixes.length; i++)
        if (this._checkEventType("on" + this._evtPrefixes[i] + t)) return this._eventTypes[t] = this._evtPrefixes[i] + t, this._reduceAvailablePrefixes(i), this._eventTypes[t];
      return this._eventTypes[t] = t
    }, d._checkEventType = function(t) {
      return t in window || t in document
    }, d.getStyleProperty = function(t) {
      var e, i, n;
      if (t += "", t in this._styleProperties) return this._styleProperties[t].dom;
      for (t = this._toDOM(t), this._prepareTestElement(), i = t.charAt(0).toUpperCase() + t.substr(1), e = "filter" === t ? ["WebkitFilter", "filter"] : (t + " " + this._domPrefixes.join(i + " ") + i).split(" "), n = 0; n < e.length; n++)
        if (void 0 !== this._el.style[e[n]]) return 0 !== n && this._reduceAvailablePrefixes(n - 1), this._memoizeStyleProperty(t, e[n]), e[n];
      return this._memoizeStyleProperty(t, !1), !1
    }, d._memoizeStyleProperty = function(t, e) {
      var i = this._toCSS(t),
        n = e !== !1 && this._toCSS(e);
      this._styleProperties[t] = this._styleProperties[e] = this._styleProperties[i] = this._styleProperties[n] = {
        dom: e,
        css: n
      }
    }, d.getStyleCSS = function(t, e) {
      var i;
      if (t = this.getStyleProperty(t), !t) return !1;
      if (i = this._styleProperties[t].css, "undefined" != typeof e) {
        if (e = this.getStyleValue(t, e), e === !1) return !1;
        i += ":" + e + ";"
      }
      return i
    }, d.getStyleValue = function(t, e) {
      var i;
      return e += "", !!(t = this.getStyleProperty(t)) && (this._testStyleValue(t, e) ? e : (i = this._styleProperties[t].css, e = e.replace(s, function(e) {
        var n, r, s, a;
        if ("#" === e[0] || !isNaN(e[0])) return e;
        if (r = e.replace(o, ""), s = i + ":" + r, s in this._styleValues) return this._styleValues[s] === !1 ? "" : e.replace(r, this._styleValues[s]);
        for (n = this._cssPrefixes.map(function(t) {
            return t + e
          }), n = [e].concat(n), a = 0; a < n.length; a++)
          if (this._testStyleValue(t, n[a])) return 0 !== a && this._reduceAvailablePrefixes(a - 1), this._styleValues[s] = n[a].replace(o, ""), n[a];
        return this._styleValues[s] = !1, ""
      }.bind(this)), e = e.trim(), "" !== e && e))
    }, d._testStyleValue = function(t, e) {
      var i;
      if (this._supportsAvailable) return t = this._styleProperties[t].css, CSS.supports(t, e);
      this._prepareTestElement(), i = this._el.style[t];
      try {
        this._el.style[t] = e
      } catch (n) {
        return !1
      }
      return this._el.style[t] && this._el.style[t] !== i
    }, d.stripPrefixes = function(t) {
      return t = String.prototype.replace.call(t, a, ""), t.charAt(0).toLowerCase() + t.slice(1)
    }, d._reduceAvailablePrefixes = function(t) {
      1 !== this._cssPrefixes.length && (this._cssPrefixes = [this._cssPrefixes[t]], this._domPrefixes = [this._domPrefixes[t]], this._evtPrefixes = [this._evtPrefixes[t]])
    }, d._toDOM = function(t) {
      return "float" === t.toLowerCase() ? "cssFloat" : (t = t.replace(/-([a-z])/g, function(t, e) {
        return e.toUpperCase()
      }), "Ms" === t.substr(0, 2) && (t = "ms" + t.substr(2)), t)
    }, d._toCSS = function(t) {
      return "cssfloat" === t.toLowerCase() ? "float" : (c.test(t) && (t = "-" + t), t.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase())
    }, d._prepareTestElement = function() {
      this._el ? (this._el.style.cssText = "", this._el.removeAttribute("style")) : this._el = document.createElement("_")
    }, e.exports = n
  }, {
    "./Prefixer/camelCasedEvents": 500
  }],
  500: [function(t, e, i) {
    "use strict";
    e.exports = {
      transitionend: {
        onwebkittransitionend: "webkitTransitionEnd",
        onmstransitionend: "MSTransitionEnd"
      },
      animationstart: {
        onwebkitanimationstart: "webkitAnimationStart",
        onmsanimationstart: "MSAnimationStart"
      },
      animationend: {
        onwebkitanimationend: "webkitAnimationEnd",
        onmsanimationend: "MSAnimationEnd"
      },
      animationiteration: {
        onwebkitanimationiteration: "webkitAnimationIteration",
        onmsanimationiteration: "MSAnimationIteration"
      },
      fullscreenchange: {
        onmsfullscreenchange: "MSFullscreenChange"
      },
      fullscreenerror: {
        onmsfullscreenerror: "MSFullscreenError"
      }
    }
  }, {}],
  501: [function(t, e, i) {
    "use strict";
    e.exports = {
      addEventListener: t("./ac-dom-events/addEventListener"),
      dispatchEvent: t("./ac-dom-events/dispatchEvent"),
      removeEventListener: t("./ac-dom-events/removeEventListener"),
      stop: t("./ac-dom-events/stop"),
      target: t("./ac-dom-events/target")
    }
  }, {
    "./ac-dom-events/addEventListener": 502,
    "./ac-dom-events/dispatchEvent": 503,
    "./ac-dom-events/removeEventListener": 504,
    "./ac-dom-events/stop": 505,
    "./ac-dom-events/target": 506
  }],
  502: [function(t, e, i) {
    "use strict";
    var n = t("ac-prefixer");
    e.exports = function(t, e, i, r) {
      return e = n.getEventType(e), t.addEventListener ? t.addEventListener(e, i, r) : (e = "on" + e.toLowerCase(), t.attachEvent(e, i)), t
    }
  }, {
    "ac-prefixer": 498
  }],
  503: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i) {
      var n;
      return e = e.toLowerCase(), window.CustomEvent ? (n = i ? new CustomEvent(e, i) : new CustomEvent(e), t.dispatchEvent(n)) : (n = document.createEventObject(), i && "detail" in i && (n.detail = i.detail), t.fireEvent("on" + e, n)), t
    }
  }, {}],
  504: [function(t, e, i) {
    "use strict";
    var n = t("ac-prefixer");
    e.exports = function(t, e, i, r) {
      return e = n.getEventType(e), t.removeEventListener ? t.removeEventListener(e, i, r) : (e = "on" + e.toLowerCase(), t.detachEvent(e, i)), t
    }
  }, {
    "ac-prefixer": 498
  }],
  505: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      t || (t = window.event), t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, t.preventDefault && t.preventDefault(), t.stopped = !0, t.returnValue = !1
    }
  }, {}],
  506: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return "undefined" != typeof t.target ? t.target : t.srcElement
    }
  }, {}],
  507: [function(t, e, i) {
    "use strict";
    e.exports = 8
  }, {}],
  508: [function(t, e, i) {
    "use strict";
    e.exports = 11
  }, {}],
  509: [function(t, e, i) {
    "use strict";
    e.exports = 9
  }, {}],
  510: [function(t, e, i) {
    "use strict";
    e.exports = 10
  }, {}],
  511: [function(t, e, i) {
    "use strict";
    e.exports = 1
  }, {}],
  512: [function(t, e, i) {
    "use strict";
    e.exports = 3
  }, {}],
  513: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e, i = document.createDocumentFragment();
      if (t)
        for (e = document.createElement("div"), e.innerHTML = t; e.firstChild;) i.appendChild(e.firstChild);
      return i
    }
  }, {}],
  514: [function(t, e, i) {
    "use strict";
    t("ac-polyfills/Array/prototype.slice"), t("ac-polyfills/Array/prototype.filter");
    var n = t("./internal/isNodeType"),
      r = t("./ELEMENT_NODE");
    e.exports = function(t, e) {
      return e = e || r, t = Array.prototype.slice.call(t), t.filter(function(t) {
        return n(t, e)
      })
    }
  }, {
    "./ELEMENT_NODE": 511,
    "./internal/isNodeType": 522,
    "ac-polyfills/Array/prototype.filter": 532,
    "ac-polyfills/Array/prototype.slice": 534
  }],
  515: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e) {
      return "hasAttribute" in t ? t.hasAttribute(e) : null !== t.attributes.getNamedItem(e)
    }
  }, {}],
  516: [function(t, e, i) {
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
    "./COMMENT_NODE": 507,
    "./DOCUMENT_FRAGMENT_NODE": 508,
    "./DOCUMENT_NODE": 509,
    "./DOCUMENT_TYPE_NODE": 510,
    "./ELEMENT_NODE": 511,
    "./TEXT_NODE": 512,
    "./createDocumentFragment": 513,
    "./filterByNodeType": 514,
    "./hasAttribute": 515,
    "./indexOf": 517,
    "./insertAfter": 518,
    "./insertBefore": 519,
    "./insertFirstChild": 520,
    "./insertLastChild": 521,
    "./isComment": 524,
    "./isDocument": 525,
    "./isDocumentFragment": 526,
    "./isDocumentType": 527,
    "./isElement": 528,
    "./isNode": 529,
    "./isNodeList": 530,
    "./isTextNode": 531,
    "./remove": 535,
    "./replace": 536
  }],
  517: [function(t, e, i) {
    "use strict";
    t("ac-polyfills/Array/prototype.indexOf"), t("ac-polyfills/Array/prototype.slice");
    var n = (t("./internal/validate"), t("./filterByNodeType"));
    e.exports = function(t, e) {
      var i, r = t.parentNode;
      return r ? (i = r.childNodes, i = e !== !1 ? n(i, e) : Array.prototype.slice.call(i), i.indexOf(t)) : 0
    }
  }, {
    "./filterByNodeType": 514,
    "./internal/validate": 523,
    "ac-polyfills/Array/prototype.indexOf": 533,
    "ac-polyfills/Array/prototype.slice": 534
  }],
  518: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate");
    e.exports = function(t, e) {
      return n.insertNode(t, !0, "insertAfter"), n.childNode(e, !0, "insertAfter"), n.hasParentNode(e, "insertAfter"), e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t)
    }
  }, {
    "./internal/validate": 523
  }],
  519: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate");
    e.exports = function(t, e) {
      return n.insertNode(t, !0, "insertBefore"), n.childNode(e, !0, "insertBefore"), n.hasParentNode(e, "insertBefore"), e.parentNode.insertBefore(t, e)
    }
  }, {
    "./internal/validate": 523
  }],
  520: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate");
    e.exports = function(t, e) {
      return n.insertNode(t, !0, "insertFirstChild"), n.parentNode(e, !0, "insertFirstChild"), e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
    }
  }, {
    "./internal/validate": 523
  }],
  521: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate");
    e.exports = function(t, e) {
      return n.insertNode(t, !0, "insertLastChild"), n.parentNode(e, !0, "insertLastChild"), e.appendChild(t)
    }
  }, {
    "./internal/validate": 523
  }],
  522: [function(t, e, i) {
    "use strict";
    var n = t("../isNode");
    e.exports = function(t, e) {
      return !!n(t) && ("number" == typeof e ? t.nodeType === e : e.indexOf(t.nodeType) !== -1)
    }
  }, {
    "../isNode": 529
  }],
  523: [function(t, e, i) {
    "use strict";
    var n = t("./isNodeType"),
      r = t("../COMMENT_NODE"),
      o = t("../DOCUMENT_FRAGMENT_NODE"),
      s = t("../ELEMENT_NODE"),
      a = t("../TEXT_NODE"),
      c = [s, a, r, o],
      l = " must be an Element, TextNode, Comment, or Document Fragment",
      u = [s, a, r],
      h = " must be an Element, TextNode, or Comment",
      d = [s, o],
      m = " must be an Element, or Document Fragment",
      p = " must have a parentNode";
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
        if (i = i || "target", !t.parentNode) throw new TypeError(e + ": " + i + p)
      }
    }
  }, {
    "../COMMENT_NODE": 507,
    "../DOCUMENT_FRAGMENT_NODE": 508,
    "../ELEMENT_NODE": 511,
    "../TEXT_NODE": 512,
    "./isNodeType": 522
  }],
  524: [function(t, e, i) {
    "use strict";
    var n = t("./internal/isNodeType"),
      r = t("./COMMENT_NODE");
    e.exports = function(t) {
      return n(t, r)
    }
  }, {
    "./COMMENT_NODE": 507,
    "./internal/isNodeType": 522
  }],
  525: [function(t, e, i) {
    "use strict";
    var n = t("./internal/isNodeType"),
      r = t("./DOCUMENT_NODE");
    e.exports = function(t) {
      return n(t, r)
    }
  }, {
    "./DOCUMENT_NODE": 509,
    "./internal/isNodeType": 522
  }],
  526: [function(t, e, i) {
    "use strict";
    var n = t("./internal/isNodeType"),
      r = t("./DOCUMENT_FRAGMENT_NODE");
    e.exports = function(t) {
      return n(t, r)
    }
  }, {
    "./DOCUMENT_FRAGMENT_NODE": 508,
    "./internal/isNodeType": 522
  }],
  527: [function(t, e, i) {
    "use strict";
    var n = t("./internal/isNodeType"),
      r = t("./DOCUMENT_TYPE_NODE");
    e.exports = function(t) {
      return n(t, r)
    }
  }, {
    "./DOCUMENT_TYPE_NODE": 510,
    "./internal/isNodeType": 522
  }],
  528: [function(t, e, i) {
    "use strict";
    var n = t("./internal/isNodeType"),
      r = t("./ELEMENT_NODE");
    e.exports = function(t) {
      return n(t, r)
    }
  }, {
    "./ELEMENT_NODE": 511,
    "./internal/isNodeType": 522
  }],
  529: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return !(!t || !t.nodeType)
    }
  }, {}],
  530: [function(t, e, i) {
    "use strict";
    var n = /^\[object (HTMLCollection|NodeList|Object)\]$/;
    e.exports = function(t) {
      return !!t && ("number" == typeof t.length && (!!("object" != typeof t[0] || t[0] && t[0].nodeType) && n.test(Object.prototype.toString.call(t))))
    }
  }, {}],
  531: [function(t, e, i) {
    "use strict";
    var n = t("./internal/isNodeType"),
      r = t("./TEXT_NODE");
    e.exports = function(t) {
      return n(t, r)
    }
  }, {
    "./TEXT_NODE": 512,
    "./internal/isNodeType": 522
  }],
  532: [function(t, e, i) {
    Array.prototype.filter || (Array.prototype.filter = function(t, e) {
      var i, n = Object(this),
        r = n.length >>> 0,
        o = [];
      if ("function" != typeof t) throw new TypeError(t + " is not a function");
      for (i = 0; i < r; i += 1) i in n && t.call(e, n[i], i, n) && o.push(n[i]);
      return o
    })
  }, {}],
  533: [function(t, e, i) {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
      var i = e || 0,
        n = 0;
      if (i < 0 && (i = this.length + e - 1, i < 0)) throw "Wrapped past beginning of array while looking up a negative start index.";
      for (n = 0; n < this.length; n++)
        if (this[n] === t) return n;
      return -1
    })
  }, {}],
  534: [function(t, e, i) {
    ! function() {
      "use strict";
      var t = Array.prototype.slice;
      try {
        t.call(document.documentElement)
      } catch (e) {
        Array.prototype.slice = function(e, i) {
          if (i = "undefined" != typeof i ? i : this.length, "[object Array]" === Object.prototype.toString.call(this)) return t.call(this, e, i);
          var n, r, o = [],
            s = this.length,
            a = e || 0;
          a = a >= 0 ? a : s + a;
          var c = i ? i : s;
          if (i < 0 && (c = s + i), r = c - a, r > 0)
            if (o = new Array(r), this.charAt)
              for (n = 0; n < r; n++) o[n] = this.charAt(a + n);
            else
              for (n = 0; n < r; n++) o[n] = this[a + n];
          return o
        }
      }
    }()
  }, {}],
  535: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate");
    e.exports = function(t) {
      return n.childNode(t, !0, "remove"), t.parentNode ? t.parentNode.removeChild(t) : t
    }
  }, {
    "./internal/validate": 523
  }],
  536: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate");
    e.exports = function(t, e) {
      return n.insertNode(t, !0, "insertFirstChild", "newNode"), n.childNode(e, !0, "insertFirstChild", "oldNode"), n.hasParentNode(e, "insertFirstChild", "oldNode"), e.parentNode.replaceChild(t, e)
    }
  }, {
    "./internal/validate": 523
  }],
  537: [function(t, e, i) {
    arguments[4][498][0].apply(i, arguments)
  }, {
    "./ac-prefixer/Prefixer": 538,
    dup: 498
  }],
  538: [function(t, e, i) {
    arguments[4][499][0].apply(i, arguments)
  }, {
    "./Prefixer/camelCasedEvents": 539,
    dup: 499
  }],
  539: [function(t, e, i) {
    arguments[4][500][0].apply(i, arguments)
  }, {
    dup: 500
  }],
  540: [function(t, e, i) {
    "use strict";
    e.exports = {
      getStyle: t("./ac-dom-styles/getStyle"),
      setStyle: t("./ac-dom-styles/setStyle")
    }
  }, {
    "./ac-dom-styles/getStyle": 541,
    "./ac-dom-styles/setStyle": 544
  }],
  541: [function(t, e, i) {
    "use strict";
    var n = t("ac-prefixer"),
      r = t("./shim/getComputedStyle");
    e.exports = function() {
      var t, e, i, o, s = Array.prototype.slice.call(arguments),
        a = s.shift(s),
        c = r(a),
        l = {};
      for ("string" != typeof s[0] && (s = s[0]), o = 0; o < s.length; o++) t = s[o], e = n.getStyleProperty(t), e ? (t = n.stripPrefixes(e), i = c[e], i && "auto" !== i || (i = null), i && (i = n.stripPrefixes(i))) : i = null, l[t] = i;
      return l
    }
  }, {
    "./shim/getComputedStyle": 545,
    "ac-prefixer": 537
  }],
  542: [function(t, e, i) {
    "use strict";
    var n = {
      transform: ["matrix", "translate", "translateX", "translateY", "scale", "scaleX", "scaleY", "rotate", "skewX", "skewY", "matrix3d", "translate3d", "translateZ", "scale3d", "scaleZ", "rotate3d", "rotateX", "rotateY", "rotateZ", "perspective"],
      filter: ["blur", "brightness", "contrast", "drop-shadow", "grayscale", "hue-rotate", "invert", "saturate", "sepia"]
    };
    e.exports = function(t) {
      var e, i, r, o;
      for (e in n) {
        for (i = t[e] ? t[e] : "", o = 0; o < n[e].length; o++) r = n[e][o], r in t && (i += " " + r + "(" + t[r] + ")", delete t[r]);
        i = i.trim(), i && (t[e] = i)
      }
      return t
    }
  }, {}],
  543: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      var e, i, n, r, o;
      if ("string" == typeof t)
        for (e = {}, i = t.split(";"), r = i.length, o = 0; o < r; o += 1) n = i[o].indexOf(":"), n > 0 && (e[i[o].substr(0, n).trim()] = i[o].substr(n + 1).trim());
      else e = t;
      return e
    }
  }, {}],
  544: [function(t, e, i) {
    "use strict";
    var n = t("ac-prefixer"),
      r = t("./helpers/cssToObject"),
      o = t("./helpers/combinePartialProperties");
    e.exports = function(t, e) {
      var i, s, a, c, l;
      if ("string" != typeof e && "object" != typeof e || Array.isArray(e)) throw new TypeError("setStyle: styles must be an Object or String");
      e = r(e), e = o(e), i = "";
      for (a in e) l = e[a], l || 0 === l ? (s = n.getStyleCSS(a, l), s !== !1 && (i += " " + s)) : (c = n.getStyleProperty(a), "removeAttribute" in t.style ? t.style.removeAttribute(c) : t.style[c] = "");
      return i.length && (t.style.cssText += i), t
    }
  }, {
    "./helpers/combinePartialProperties": 542,
    "./helpers/cssToObject": 543,
    "ac-prefixer": 537
  }],
  545: [function(t, e, i) {
    "use strict";
    e.exports = function() {
      return "getComputedStyle" in window ? window.getComputedStyle : function(t) {
        var e, i, n;
        e = t.currentStyle;
        for (i in e) "styleFloat" === i ? n["float"] = n.cssFloat = e[i] : n[i] = e[i];
        return n
      }
    }()
  }, {}],
  546: [function(t, e, i) {
    "use strict";
    var n = t("ac-dom-nodes/isElement"),
      r = t("./matchesSelector"),
      o = t("./internal/validate");
    e.exports = function(t, e, i) {
      if (o.childNode(t, !0, "ancestors"), o.selector(e, !1, "ancestors"), i && n(t) && (!e || r(t, e))) return t;
      if (t !== document.body)
        for (;
          (t = t.parentNode) && n(t);) {
          if (!e || r(t, e)) return t;
          if (t === document.body) break
        }
      return null
    }
  }, {
    "./internal/validate": 553,
    "./matchesSelector": 555,
    "ac-dom-nodes/isElement": 528
  }],
  547: [function(t, e, i) {
    "use strict";
    var n = t("ac-dom-nodes/isElement"),
      r = t("./matchesSelector"),
      o = t("./internal/validate");
    e.exports = function(t, e, i) {
      var s = [];
      if (o.childNode(t, !0, "ancestors"), o.selector(e, !1, "ancestors"), i && n(t) && (!e || r(t, e)) && s.push(t), t !== document.body)
        for (;
          (t = t.parentNode) && n(t) && (e && !r(t, e) || s.push(t), t !== document.body););
      return s
    }
  }, {
    "./internal/validate": 553,
    "./matchesSelector": 555,
    "ac-dom-nodes/isElement": 528
  }],
  548: [function(t, e, i) {
    "use strict";
    var n = t("ac-dom-nodes/filterByNodeType"),
      r = t("./filterBySelector"),
      o = t("./internal/validate");
    e.exports = function(t, e) {
      var i;
      return o.parentNode(t, !0, "children"), o.selector(e, !1, "children"), i = t.children || t.childNodes, i = n(i), e && (i = r(i, e)), i
    }
  }, {
    "./filterBySelector": 549,
    "./internal/validate": 553,
    "ac-dom-nodes/filterByNodeType": 514
  }],
  549: [function(t, e, i) {
    "use strict";
    t("ac-polyfills/Array/prototype.slice"), t("ac-polyfills/Array/prototype.filter");
    var n = t("./matchesSelector"),
      r = t("./internal/validate");
    e.exports = function(t, e) {
      return r.selector(e, !0, "filterBySelector"), t = Array.prototype.slice.call(t), t.filter(function(t) {
        return n(t, e)
      })
    }
  }, {
    "./internal/validate": 553,
    "./matchesSelector": 555,
    "ac-polyfills/Array/prototype.filter": 558,
    "ac-polyfills/Array/prototype.slice": 561
  }],
  550: [function(t, e, i) {
    "use strict";
    var n = t("./children"),
      r = t("./internal/validate");
    e.exports = function(t, e) {
      var i;
      return r.parentNode(t, !0, "firstChild"), r.selector(e, !1, "firstChild"), t.firstElementChild && !e ? t.firstElementChild : (i = n(t, e), i.length ? i[0] : null)
    }
  }, {
    "./children": 548,
    "./internal/validate": 553
  }],
  551: [function(t, e, i) {
    "use strict";
    e.exports = {
      ancestor: t("./ancestor"),
      ancestors: t("./ancestors"),
      children: t("./children"),
      filterBySelector: t("./filterBySelector"),
      firstChild: t("./firstChild"),
      lastChild: t("./lastChild"),
      matchesSelector: t("./matchesSelector"),
      nextSibling: t("./nextSibling"),
      nextSiblings: t("./nextSiblings"),
      previousSibling: t("./previousSibling"),
      previousSiblings: t("./previousSiblings"),
      querySelector: t("./querySelector"),
      querySelectorAll: t("./querySelectorAll"),
      siblings: t("./siblings")
    }
  }, {
    "./ancestor": 546,
    "./ancestors": 547,
    "./children": 548,
    "./filterBySelector": 549,
    "./firstChild": 550,
    "./lastChild": 554,
    "./matchesSelector": 555,
    "./nextSibling": 556,
    "./nextSiblings": 557,
    "./previousSibling": 562,
    "./previousSiblings": 563,
    "./querySelector": 564,
    "./querySelectorAll": 565,
    "./siblings": 568
  }],
  552: [function(t, e, i) {
    "use strict";
    e.exports = window.Element ? function(t) {
      return t.matches || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector
    }(Element.prototype) : null
  }, {}],
  553: [function(t, e, i) {
    "use strict";
    t("ac-polyfills/Array/prototype.indexOf");
    var n = t("ac-dom-nodes/isNode"),
      r = t("ac-dom-nodes/COMMENT_NODE"),
      o = t("ac-dom-nodes/DOCUMENT_FRAGMENT_NODE"),
      s = t("ac-dom-nodes/DOCUMENT_NODE"),
      a = t("ac-dom-nodes/ELEMENT_NODE"),
      c = t("ac-dom-nodes/TEXT_NODE"),
      l = function(t, e) {
        return !!n(t) && ("number" == typeof e ? t.nodeType === e : e.indexOf(t.nodeType) !== -1)
      },
      u = [a, s, o],
      h = " must be an Element, Document, or Document Fragment",
      d = [a, c, r],
      m = " must be an Element, TextNode, or Comment",
      p = " must be a string";
    e.exports = {
      parentNode: function(t, e, i, n) {
        if (n = n || "node", (t || e) && !l(t, u)) throw new TypeError(i + ": " + n + h)
      },
      childNode: function(t, e, i, n) {
        if (n = n || "node", (t || e) && !l(t, d)) throw new TypeError(i + ": " + n + m)
      },
      selector: function(t, e, i, n) {
        if (n = n || "selector", (t || e) && "string" != typeof t) throw new TypeError(i + ": " + n + p)
      }
    }
  }, {
    "ac-dom-nodes/COMMENT_NODE": 507,
    "ac-dom-nodes/DOCUMENT_FRAGMENT_NODE": 508,
    "ac-dom-nodes/DOCUMENT_NODE": 509,
    "ac-dom-nodes/ELEMENT_NODE": 511,
    "ac-dom-nodes/TEXT_NODE": 512,
    "ac-dom-nodes/isNode": 529,
    "ac-polyfills/Array/prototype.indexOf": 560
  }],
  554: [function(t, e, i) {
    "use strict";
    var n = t("./children"),
      r = t("./internal/validate");
    e.exports = function(t, e) {
      var i;
      return r.parentNode(t, !0, "lastChild"), r.selector(e, !1, "lastChild"), t.lastElementChild && !e ? t.lastElementChild : (i = n(t, e), i.length ? i[i.length - 1] : null)
    }
  }, {
    "./children": 548,
    "./internal/validate": 553
  }],
  555: [function(t, e, i) {
    "use strict";
    var n = t("ac-dom-nodes/isElement"),
      r = t("./internal/nativeMatches"),
      o = t("./internal/validate"),
      s = t("./vendor/sizzle/sizzle");
    e.exports = function(t, e) {
      return o.selector(e, !0, "matchesSelector"), !!n(t) && (r ? r.call(t, e) : s.matchesSelector(t, e))
    }
  }, {
    "./internal/nativeMatches": 552,
    "./internal/validate": 553,
    "./vendor/sizzle/sizzle": 569,
    "ac-dom-nodes/isElement": 528
  }],
  556: [function(t, e, i) {
    "use strict";
    var n = t("ac-dom-nodes/isElement"),
      r = t("./matchesSelector"),
      o = t("./internal/validate");
    e.exports = function(t, e) {
      if (o.childNode(t, !0, "nextSibling"), o.selector(e, !1, "nextSibling"), t.nextElementSibling && !e) return t.nextElementSibling;
      for (; t = t.nextSibling;)
        if (n(t) && (!e || r(t, e))) return t;
      return null
    }
  }, {
    "./internal/validate": 553,
    "./matchesSelector": 555,
    "ac-dom-nodes/isElement": 528
  }],
  557: [function(t, e, i) {
    "use strict";
    var n = t("ac-dom-nodes/isElement"),
      r = t("./matchesSelector"),
      o = t("./internal/validate");
    e.exports = function(t, e) {
      var i = [];
      for (o.childNode(t, !0, "nextSiblings"), o.selector(e, !1, "nextSiblings"); t = t.nextSibling;) n(t) && (e && !r(t, e) || i.push(t));
      return i
    }
  }, {
    "./internal/validate": 553,
    "./matchesSelector": 555,
    "ac-dom-nodes/isElement": 528
  }],
  558: [function(t, e, i) {
    arguments[4][532][0].apply(i, arguments)
  }, {
    dup: 532
  }],
  559: [function(t, e, i) {
    Array.prototype.forEach || (Array.prototype.forEach = function(t, e) {
      var i, n, r = Object(this);
      if ("function" != typeof t) throw new TypeError("No function object passed to forEach.");
      for (i = 0; i < this.length; i += 1) n = r[i], t.call(e, n, i, r)
    })
  }, {}],
  560: [function(t, e, i) {
    arguments[4][533][0].apply(i, arguments)
  }, {
    dup: 533
  }],
  561: [function(t, e, i) {
    arguments[4][534][0].apply(i, arguments)
  }, {
    dup: 534
  }],
  562: [function(t, e, i) {
    "use strict";
    var n = t("ac-dom-nodes/isElement"),
      r = t("./matchesSelector"),
      o = t("./internal/validate");
    e.exports = function(t, e) {
      if (o.childNode(t, !0, "previousSibling"), o.selector(e, !1, "previousSibling"), t.previousElementSibling && !e) return t.previousElementSibling;
      for (; t = t.previousSibling;)
        if (n(t) && (!e || r(t, e))) return t;
      return null
    }
  }, {
    "./internal/validate": 553,
    "./matchesSelector": 555,
    "ac-dom-nodes/isElement": 528
  }],
  563: [function(t, e, i) {
    "use strict";
    var n = t("ac-dom-nodes/isElement"),
      r = t("./matchesSelector"),
      o = t("./internal/validate");
    e.exports = function(t, e) {
      var i = [];
      for (o.childNode(t, !0, "previousSiblings"), o.selector(e, !1, "previousSiblings"); t = t.previousSibling;) n(t) && (e && !r(t, e) || i.push(t));
      return i.reverse()
    }
  }, {
    "./internal/validate": 553,
    "./matchesSelector": 555,
    "ac-dom-nodes/isElement": 528
  }],
  564: [function(t, e, i) {
    "use strict";
    var n = t("./internal/validate"),
      r = t("./shims/querySelector");
    e.exports = function(t, e) {
      return e = e || document, n.parentNode(e, !0, "querySelector", "context"), n.selector(t, !0, "querySelector"), e.querySelector ? e.querySelector(t) : r(t, e)
    }
  }, {
    "./internal/validate": 553,
    "./shims/querySelector": 566
  }],
  565: [function(t, e, i) {
    "use strict";
    t("ac-polyfills/Array/prototype.slice");
    var n = t("./internal/validate"),
      r = t("./shims/querySelectorAll");
    e.exports = function(t, e) {
      return e = e || document, n.parentNode(e, !0, "querySelectorAll", "context"), n.selector(t, !0, "querySelectorAll"), e.querySelectorAll ? Array.prototype.slice.call(e.querySelectorAll(t)) : r(t, e)
    }
  }, {
    "./internal/validate": 553,
    "./shims/querySelectorAll": 567,
    "ac-polyfills/Array/prototype.slice": 561
  }],
  566: [function(t, e, i) {
    "use strict";
    var n = t("./querySelectorAll");
    e.exports = function(t, e) {
      var i = n(t, e);
      return i.length ? i[0] : null
    }
  }, {
    "./querySelectorAll": 567
  }],
  567: [function(t, e, i) {
    "use strict";
    t("ac-polyfills/Array/prototype.forEach");
    var n = t("../vendor/sizzle/sizzle"),
      r = t("../children"),
      o = t("ac-dom-nodes/isDocumentFragment");
    e.exports = function(t, e) {
      var i, s;
      return o(e) ? (i = r(e), s = [], i.forEach(function(e) {
        var i;
        n.matchesSelector(e, t) && s.push(e), i = n(t, e), i.length && (s = s.concat(i))
      }), s) : n(t, e)
    }
  }, {
    "../children": 548,
    "../vendor/sizzle/sizzle": 569,
    "ac-dom-nodes/isDocumentFragment": 526,
    "ac-polyfills/Array/prototype.forEach": 559
  }],
  568: [function(t, e, i) {
    "use strict";
    var n = t("./children"),
      r = t("./internal/validate");
    e.exports = function(t, e) {
      var i = [];
      return r.childNode(t, !0, "siblings"), r.selector(e, !1, "siblings"), t.parentNode && (i = n(t.parentNode, e), i = i.filter(function(e) {
        return e !== t
      })), i
    }
  }, {
    "./children": 548,
    "./internal/validate": 553
  }],
  569: [function(t, e, i) {
    ! function(t, i) {
      function n(t, e, i, n) {
        for (var r = 0, o = e.length; r < o; r++) ot(t, e[r], i, n)
      }

      function r(t, e, i, r, o, s) {
        var a, c = st.setFilters[e.toLowerCase()];
        return c || ot.error(e), !t && (a = o) || n(t || "*", r, a = [], o), a.length > 0 ? c(a, i, s) : []
      }

      function o(t, e, o, s, a) {
        for (var c, l, u, h, d, m, p, f, g = 0, v = a.length, y = W.POS, _ = new RegExp("^" + y.source + "(?!" + S + ")", "i"), b = function() {
            for (var t = 1, e = arguments.length - 2; t < e; t++) arguments[t] === i && (c[t] = i)
          }; g < v; g++) {
          for (y.exec(""), t = a[g], h = [], u = 0, d = s; c = y.exec(t);) f = y.lastIndex = c.index + c[0].length, f > u && (p = t.slice(u, c.index), u = f, m = [e], R.test(p) && (d && (m = d), d = s), (l = z.test(p)) && (p = p.slice(0, -5).replace(R, "$&*")), c.length > 1 && c[0].replace(_, b), d = r(p, c[1], c[2], m, d, l));
          d ? (h = h.concat(d), (p = t.slice(u)) && ")" !== p ? n(p, h, o, s) : x.apply(o, h)) : ot(t, e, o, s)
        }
        return 1 === v ? o : ot.uniqueSort(o)
      }

      function s(t, e, i) {
        for (var n, r, o, s = [], a = 0, c = F.exec(t), l = !c.pop() && !c.pop(), u = l && t.match(j) || [""], h = st.preFilter, d = st.filter, m = !i && e !== g; null != (r = u[a]) && l; a++)
          for (s.push(n = []), m && (r = " " + r); r;) {
            l = !1, (c = R.exec(r)) && (r = r.slice(c[0].length), l = n.push({
              part: c.pop().replace(L, " "),
              captures: c
            }));
            for (o in d) !(c = W[o].exec(r)) || h[o] && !(c = h[o](c, e, i)) || (r = r.slice(c.shift().length), l = n.push({
              part: o,
              captures: c
            }));
            if (!l) break
          }
        return l || ot.error(t), s
      }

      function a(t, e, i) {
        var n = e.dir,
          r = T++;
        return t || (t = function(t) {
          return t === i
        }), e.first ? function(e, i) {
          for (; e = e[n];)
            if (1 === e.nodeType) return t(e, i) && e
        } : function(e, i) {
          for (var o, s = r + "." + d, a = s + "." + h; e = e[n];)
            if (1 === e.nodeType) {
              if ((o = e[w]) === a) return !1;
              if ("string" == typeof o && 0 === o.indexOf(s)) {
                if (e.sizset) return e
              } else {
                if (e[w] = a, t(e, i)) return e.sizset = !0, e;
                e.sizset = !1
              }
            }
        }
      }

      function c(t, e) {
        return t ? function(i, n) {
          var r = e(i, n);
          return r && t(r === !0 ? i : r, n)
        } : e
      }

      function l(t, e, i) {
        for (var n, r, o = 0; n = t[o]; o++) st.relative[n.part] ? r = a(r, st.relative[n.part], e) : (n.captures.push(e, i), r = c(r, st.filter[n.part].apply(null, n.captures)));
        return r
      }

      function u(t) {
        return function(e, i) {
          for (var n, r = 0; n = t[r]; r++)
            if (n(e, i)) return !0;
          return !1
        }
      }
      var h, d, m, p, f, g = t.document,
        v = g.documentElement,
        y = "undefined",
        _ = !1,
        b = !0,
        T = 0,
        E = [].slice,
        x = [].push,
        w = ("sizcache" + Math.random()).replace(".", ""),
        S = "[\\x20\\t\\r\\n\\f]",
        C = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])",
        k = "(?:[\\w#_-]|[^\\x00-\\xa0]|\\\\.)",
        A = "([*^$|!~]?=)",
        O = "\\[" + S + "*(" + C + "+)" + S + "*(?:" + A + S + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + k + "+)|)|)" + S + "*\\]",
        P = ":(" + C + "+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|(.*))\\)|)",
        M = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",
        N = S + "*([\\x20\\t\\r\\n\\f>+~])" + S + "*",
        D = "(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|" + O + "|" + P.replace(2, 7) + "|[^\\\\(),])+",
        L = new RegExp("^" + S + "+|((?:^|[^\\\\])(?:\\\\.)*)" + S + "+$", "g"),
        R = new RegExp("^" + N),
        j = new RegExp(D + "?(?=" + S + "*,|$)", "g"),
        F = new RegExp("^(?:(?!,)(?:(?:^|,)" + S + "*" + D + ")*?|" + S + "*(.*?))(\\)|$)"),
        V = new RegExp(D.slice(19, -6) + "\\x20\\t\\r\\n\\f>+~])+|" + N, "g"),
        I = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        q = /[\x20\t\r\n\f]*[+~]/,
        z = /:not\($/,
        U = /h\d/i,
        H = /input|select|textarea|button/i,
        B = /\\(?!\\)/g,
        W = {
          ID: new RegExp("^#(" + C + "+)"),
          CLASS: new RegExp("^\\.(" + C + "+)"),
          NAME: new RegExp("^\\[name=['\"]?(" + C + "+)['\"]?\\]"),
          TAG: new RegExp("^(" + C.replace("[-", "[-\\*") + "+)"),
          ATTR: new RegExp("^" + O),
          PSEUDO: new RegExp("^" + P),
          CHILD: new RegExp("^:(only|nth|last|first)-child(?:\\(" + S + "*(even|odd|(([+-]|)(\\d*)n|)" + S + "*(?:([+-]|)" + S + "*(\\d+)|))" + S + "*\\)|)", "i"),
          POS: new RegExp(M, "ig"),
          needsContext: new RegExp("^" + S + "*[>+~]|" + M, "i")
        },
        Y = {},
        X = [],
        K = {},
        Q = [],
        G = function(t) {
          return t.sizzleFilter = !0, t
        },
        $ = function(t) {
          return function(e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t
          }
        },
        J = function(t) {
          return function(e) {
            var i = e.nodeName.toLowerCase();
            return ("input" === i || "button" === i) && e.type === t
          }
        },
        Z = function(t) {
          var e = !1,
            i = g.createElement("div");
          try {
            e = t(i)
          } catch (n) {}
          return i = null, e
        },
        tt = Z(function(t) {
          t.innerHTML = "<select></select>";
          var e = typeof t.lastChild.getAttribute("multiple");
          return "boolean" !== e && "string" !== e
        }),
        et = Z(function(t) {
          t.id = w + 0, t.innerHTML = "<a name='" + w + "'></a><div name='" + w + "'></div>", v.insertBefore(t, v.firstChild);
          var e = g.getElementsByName && g.getElementsByName(w).length === 2 + g.getElementsByName(w + 0).length;
          return f = !g.getElementById(w), v.removeChild(t), e
        }),
        it = Z(function(t) {
          return t.appendChild(g.createComment("")), 0 === t.getElementsByTagName("*").length
        }),
        nt = Z(function(t) {
          return t.innerHTML = "<a href='#'></a>", t.firstChild && typeof t.firstChild.getAttribute !== y && "#" === t.firstChild.getAttribute("href")
        }),
        rt = Z(function(t) {
          return t.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !(!t.getElementsByClassName || 0 === t.getElementsByClassName("e").length) && (t.lastChild.className = "e", 1 !== t.getElementsByClassName("e").length)
        }),
        ot = function(t, e, i, n) {
          i = i || [], e = e || g;
          var r, o, s, a, c = e.nodeType;
          if (1 !== c && 9 !== c) return [];
          if (!t || "string" != typeof t) return i;
          if (s = ct(e), !s && !n && (r = I.exec(t)))
            if (a = r[1]) {
              if (9 === c) {
                if (o = e.getElementById(a), !o || !o.parentNode) return i;
                if (o.id === a) return i.push(o), i
              } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && lt(e, o) && o.id === a) return i.push(o), i
            } else {
              if (r[2]) return x.apply(i, E.call(e.getElementsByTagName(t), 0)), i;
              if ((a = r[3]) && rt && e.getElementsByClassName) return x.apply(i, E.call(e.getElementsByClassName(a), 0)), i
            } return dt(t, e, i, n, s)
        },
        st = ot.selectors = {
          cacheLength: 50,
          match: W,
          order: ["ID", "TAG"],
          attrHandle: {},
          createPseudo: G,
          find: {
            ID: f ? function(t, e, i) {
              if (typeof e.getElementById !== y && !i) {
                var n = e.getElementById(t);
                return n && n.parentNode ? [n] : []
              }
            } : function(t, e, n) {
              if (typeof e.getElementById !== y && !n) {
                var r = e.getElementById(t);
                return r ? r.id === t || typeof r.getAttributeNode !== y && r.getAttributeNode("id").value === t ? [r] : i : []
              }
            },
            TAG: it ? function(t, e) {
              if (typeof e.getElementsByTagName !== y) return e.getElementsByTagName(t)
            } : function(t, e) {
              var i = e.getElementsByTagName(t);
              if ("*" === t) {
                for (var n, r = [], o = 0; n = i[o]; o++) 1 === n.nodeType && r.push(n);
                return r
              }
              return i
            }
          },
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function(t) {
              return t[1] = t[1].replace(B, ""), t[3] = (t[4] || t[5] || "").replace(B, ""), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
            },
            CHILD: function(t) {
              return t[1] = t[1].toLowerCase(), "nth" === t[1] ? (t[2] || ot.error(t[0]), t[3] = +(t[3] ? t[4] + (t[5] || 1) : 2 * ("even" === t[2] || "odd" === t[2])), t[4] = +(t[6] + t[7] || "odd" === t[2])) : t[2] && ot.error(t[0]), t
            },
            PSEUDO: function(t) {
              var e, i = t[4];
              return W.CHILD.test(t[0]) ? null : (i && (e = F.exec(i)) && e.pop() && (t[0] = t[0].slice(0, e[0].length - i.length - 1), i = e[0].slice(0, -1)), t.splice(2, 3, i || t[3]), t)
            }
          },
          filter: {
            ID: f ? function(t) {
              return t = t.replace(B, ""),
                function(e) {
                  return e.getAttribute("id") === t
                }
            } : function(t) {
              return t = t.replace(B, ""),
                function(e) {
                  var i = typeof e.getAttributeNode !== y && e.getAttributeNode("id");
                  return i && i.value === t
                }
            },
            TAG: function(t) {
              return "*" === t ? function() {
                return !0
              } : (t = t.replace(B, "").toLowerCase(), function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
              })
            },
            CLASS: function(t) {
              var e = Y[t];
              return e || (e = Y[t] = new RegExp("(^|" + S + ")" + t + "(" + S + "|$)"), X.push(t), X.length > st.cacheLength && delete Y[X.shift()]),
                function(t) {
                  return e.test(t.className || typeof t.getAttribute !== y && t.getAttribute("class") || "")
                }
            },
            ATTR: function(t, e, i) {
              return e ? function(n) {
                var r = ot.attr(n, t),
                  o = r + "";
                if (null == r) return "!=" === e;
                switch (e) {
                  case "=":
                    return o === i;
                  case "!=":
                    return o !== i;
                  case "^=":
                    return i && 0 === o.indexOf(i);
                  case "*=":
                    return i && o.indexOf(i) > -1;
                  case "$=":
                    return i && o.substr(o.length - i.length) === i;
                  case "~=":
                    return (" " + o + " ").indexOf(i) > -1;
                  case "|=":
                    return o === i || o.substr(0, i.length + 1) === i + "-"
                }
              } : function(e) {
                return null != ot.attr(e, t)
              }
            },
            CHILD: function(t, e, i, n) {
              if ("nth" === t) {
                var r = T++;
                return function(t) {
                  var e, o, s = 0,
                    a = t;
                  if (1 === i && 0 === n) return !0;
                  if (e = t.parentNode, e && (e[w] !== r || !t.sizset)) {
                    for (a = e.firstChild; a && (1 !== a.nodeType || (a.sizset = ++s, a !== t)); a = a.nextSibling);
                    e[w] = r
                  }
                  return o = t.sizset - n, 0 === i ? 0 === o : o % i === 0 && o / i >= 0
                }
              }
              return function(e) {
                var i = e;
                switch (t) {
                  case "only":
                  case "first":
                    for (; i = i.previousSibling;)
                      if (1 === i.nodeType) return !1;
                    if ("first" === t) return !0;
                    i = e;
                  case "last":
                    for (; i = i.nextSibling;)
                      if (1 === i.nodeType) return !1;
                    return !0
                }
              }
            },
            PSEUDO: function(t, e, i, n) {
              var r = st.pseudos[t] || st.pseudos[t.toLowerCase()];
              return r || ot.error("unsupported pseudo: " + t), r.sizzleFilter ? r(e, i, n) : r
            }
          },
          pseudos: {
            not: G(function(t, e, i) {
              var n = ht(t.replace(L, "$1"), e, i);
              return function(t) {
                return !n(t)
              }
            }),
            enabled: function(t) {
              return t.disabled === !1
            },
            disabled: function(t) {
              return t.disabled === !0
            },
            checked: function(t) {
              var e = t.nodeName.toLowerCase();
              return "input" === e && !!t.checked || "option" === e && !!t.selected
            },
            selected: function(t) {
              return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
            },
            parent: function(t) {
              return !!t.firstChild
            },
            empty: function(t) {
              return !t.firstChild
            },
            contains: G(function(t) {
              return function(e) {
                return (e.textContent || e.innerText || ut(e)).indexOf(t) > -1
              }
            }),
            has: G(function(t) {
              return function(e) {
                return ot(t, e).length > 0
              }
            }),
            header: function(t) {
              return U.test(t.nodeName)
            },
            text: function(t) {
              var e, i;
              return "input" === t.nodeName.toLowerCase() && "text" === (e = t.type) && (null == (i = t.getAttribute("type")) || i.toLowerCase() === e)
            },
            radio: $("radio"),
            checkbox: $("checkbox"),
            file: $("file"),
            password: $("password"),
            image: $("image"),
            submit: J("submit"),
            reset: J("reset"),
            button: function(t) {
              var e = t.nodeName.toLowerCase();
              return "input" === e && "button" === t.type || "button" === e
            },
            input: function(t) {
              return H.test(t.nodeName)
            },
            focus: function(t) {
              var e = t.ownerDocument;
              return t === e.activeElement && (!e.hasFocus || e.hasFocus()) && !(!t.type && !t.href)
            },
            active: function(t) {
              return t === t.ownerDocument.activeElement
            }
          },
          setFilters: {
            first: function(t, e, i) {
              return i ? t.slice(1) : [t[0]]
            },
            last: function(t, e, i) {
              var n = t.pop();
              return i ? t : [n]
            },
            even: function(t, e, i) {
              for (var n = [], r = i ? 1 : 0, o = t.length; r < o; r += 2) n.push(t[r]);
              return n
            },
            odd: function(t, e, i) {
              for (var n = [], r = i ? 0 : 1, o = t.length; r < o; r += 2) n.push(t[r]);
              return n
            },
            lt: function(t, e, i) {
              return i ? t.slice(+e) : t.slice(0, +e)
            },
            gt: function(t, e, i) {
              return i ? t.slice(0, +e + 1) : t.slice(+e + 1)
            },
            eq: function(t, e, i) {
              var n = t.splice(+e, 1);
              return i ? t : n
            }
          }
        };
      st.setFilters.nth = st.setFilters.eq, st.filters = st.pseudos, nt || (st.attrHandle = {
        href: function(t) {
          return t.getAttribute("href", 2)
        },
        type: function(t) {
          return t.getAttribute("type")
        }
      }), et && (st.order.push("NAME"), st.find.NAME = function(t, e) {
        if (typeof e.getElementsByName !== y) return e.getElementsByName(t)
      }), rt && (st.order.splice(1, 0, "CLASS"), st.find.CLASS = function(t, e, i) {
        if (typeof e.getElementsByClassName !== y && !i) return e.getElementsByClassName(t)
      });
      try {
        E.call(v.childNodes, 0)[0].nodeType
      } catch (at) {
        E = function(t) {
          for (var e, i = []; e = this[t]; t++) i.push(e);
          return i
        }
      }
      var ct = ot.isXML = function(t) {
          var e = t && (t.ownerDocument || t).documentElement;
          return !!e && "HTML" !== e.nodeName
        },
        lt = ot.contains = v.compareDocumentPosition ? function(t, e) {
          return !!(16 & t.compareDocumentPosition(e))
        } : v.contains ? function(t, e) {
          var i = 9 === t.nodeType ? t.documentElement : t,
            n = e.parentNode;
          return t === n || !!(n && 1 === n.nodeType && i.contains && i.contains(n))
        } : function(t, e) {
          for (; e = e.parentNode;)
            if (e === t) return !0;
          return !1
        },
        ut = ot.getText = function(t) {
          var e, i = "",
            n = 0,
            r = t.nodeType;
          if (r) {
            if (1 === r || 9 === r || 11 === r) {
              if ("string" == typeof t.textContent) return t.textContent;
              for (t = t.firstChild; t; t = t.nextSibling) i += ut(t)
            } else if (3 === r || 4 === r) return t.nodeValue
          } else
            for (; e = t[n]; n++) i += ut(e);
          return i
        };
      ot.attr = function(t, e) {
        var i, n = ct(t);
        return n || (e = e.toLowerCase()), st.attrHandle[e] ? st.attrHandle[e](t) : tt || n ? t.getAttribute(e) : (i = t.getAttributeNode(e), i ? "boolean" == typeof t[e] ? t[e] ? e : null : i.specified ? i.value : null : null)
      }, ot.error = function(t) {
        throw new Error("Syntax error, unrecognized expression: " + t)
      }, [0, 0].sort(function() {
        return b = 0
      }), v.compareDocumentPosition ? m = function(t, e) {
        return t === e ? (_ = !0, 0) : (t.compareDocumentPosition && e.compareDocumentPosition ? 4 & t.compareDocumentPosition(e) : t.compareDocumentPosition) ? -1 : 1
      } : (m = function(t, e) {
        if (t === e) return _ = !0, 0;
        if (t.sourceIndex && e.sourceIndex) return t.sourceIndex - e.sourceIndex;
        var i, n, r = [],
          o = [],
          s = t.parentNode,
          a = e.parentNode,
          c = s;
        if (s === a) return p(t, e);
        if (!s) return -1;
        if (!a) return 1;
        for (; c;) r.unshift(c), c = c.parentNode;
        for (c = a; c;) o.unshift(c), c = c.parentNode;
        i = r.length, n = o.length;
        for (var l = 0; l < i && l < n; l++)
          if (r[l] !== o[l]) return p(r[l], o[l]);
        return l === i ? p(t, o[l], -1) : p(r[l], e, 1)
      }, p = function(t, e, i) {
        if (t === e) return i;
        for (var n = t.nextSibling; n;) {
          if (n === e) return -1;
          n = n.nextSibling
        }
        return 1
      }), ot.uniqueSort = function(t) {
        var e, i = 1;
        if (m && (_ = b, t.sort(m), _))
          for (; e = t[i]; i++) e === t[i - 1] && t.splice(i--, 1);
        return t
      };
      var ht = ot.compile = function(t, e, i) {
        var n, r, o, a = K[t];
        if (a && a.context === e) return a.dirruns++, a;
        for (r = s(t, e, i), o = 0; n = r[o]; o++) r[o] = l(n, e, i);
        return a = K[t] = u(r), a.context = e, a.runs = a.dirruns = 0, Q.push(t), Q.length > st.cacheLength && delete K[Q.shift()], a
      };
      ot.matches = function(t, e) {
        return ot(t, null, null, e)
      }, ot.matchesSelector = function(t, e) {
        return ot(e, null, null, [t]).length > 0
      };
      var dt = function(t, e, i, n, r) {
        t = t.replace(L, "$1");
        var s, a, c, l, u, m, p, f, g, v = t.match(j),
          y = t.match(V),
          _ = e.nodeType;
        if (W.POS.test(t)) return o(t, e, i, n, v);
        if (n) s = E.call(n, 0);
        else if (v && 1 === v.length) {
          if (y.length > 1 && 9 === _ && !r && (v = W.ID.exec(y[0]))) {
            if (e = st.find.ID(v[1], e, r)[0], !e) return i;
            t = t.slice(y.shift().length)
          }
          for (f = (v = q.exec(y[0])) && !v.index && e.parentNode || e, g = y.pop(), m = g.split(":not")[0], c = 0, l = st.order.length; c < l; c++)
            if (p = st.order[c], v = W[p].exec(m)) {
              if (s = st.find[p]((v[1] || "").replace(B, ""), f, r), null == s) continue;
              m === g && (t = t.slice(0, t.length - g.length) + m.replace(W[p], ""), t || x.apply(i, E.call(s, 0)));
              break
            }
        }
        if (t)
          for (a = ht(t, e, r), d = a.dirruns, null == s && (s = st.find.TAG("*", q.test(t) && e.parentNode || e)), c = 0; u = s[c]; c++) h = a.runs++, a(u, e) && i.push(u);
        return i
      };
      g.querySelectorAll && ! function() {
        var t, e = dt,
          i = /'|\\/g,
          n = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
          r = [],
          o = [":active"],
          s = v.matchesSelector || v.mozMatchesSelector || v.webkitMatchesSelector || v.oMatchesSelector || v.msMatchesSelector;
        Z(function(t) {
          t.innerHTML = "<select><option selected></option></select>", t.querySelectorAll("[selected]").length || r.push("\\[" + S + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), t.querySelectorAll(":checked").length || r.push(":checked")
        }), Z(function(t) {
          t.innerHTML = "<p test=''></p>", t.querySelectorAll("[test^='']").length && r.push("[*^$]=" + S + "*(?:\"\"|'')"), t.innerHTML = "<input type='hidden'>", t.querySelectorAll(":enabled").length || r.push(":enabled", ":disabled")
        }), r = r.length && new RegExp(r.join("|")), dt = function(t, n, o, s, a) {
          if (!(s || a || r && r.test(t)))
            if (9 === n.nodeType) try {
              return x.apply(o, E.call(n.querySelectorAll(t), 0)), o
            } catch (c) {} else if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
              var l = n.getAttribute("id"),
                u = l || w,
                h = q.test(t) && n.parentNode || n;
              l ? u = u.replace(i, "\\$&") : n.setAttribute("id", u);
              try {
                return x.apply(o, E.call(h.querySelectorAll(t.replace(j, "[id='" + u + "'] $&")), 0)), o
              } catch (c) {} finally {
                l || n.removeAttribute("id")
              }
            } return e(t, n, o, s, a)
        }, s && (Z(function(e) {
          t = s.call(e, "div");
          try {
            s.call(e, "[test!='']:sizzle"), o.push(st.match.PSEUDO)
          } catch (i) {}
        }), o = new RegExp(o.join("|")), ot.matchesSelector = function(e, i) {
          if (i = i.replace(n, "='$1']"), !(ct(e) || o.test(i) || r && r.test(i))) try {
            var a = s.call(e, i);
            if (a || t || e.document && 11 !== e.document.nodeType) return a
          } catch (c) {}
          return ot(i, null, null, [e]).length > 0
        })
      }(), "object" == typeof e && e.exports ? e.exports = ot : t.Sizzle = ot
    }(window)
  }, {}],
  570: [function(t, e, i) {
    arguments[4][220][0].apply(i, arguments)
  }, {
    "./ac-event-emitter/EventEmitter": 571,
    dup: 220
  }],
  571: [function(t, e, i) {
    arguments[4][221][0].apply(i, arguments)
  }, {
    dup: 221
  }],
  572: [function(t, e, i) {
    var n = t("./ac-keyboard/Keyboard");
    e.exports = new n, e.exports.Keyboard = n, e.exports.keys = t("./ac-keyboard/keymap")
  }, {
    "./ac-keyboard/Keyboard": 574,
    "./ac-keyboard/keymap": 575
  }],
  573: [function(t, e, i) {
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
  574: [function(t, e, i) {
    "use strict";

    function n() {
      this._keysDown = {}, this._keyDownEmitter = new s, this._keyUpEmitter = new s, o.addEventListener(document, "keydown", this._DOMKeyDown.bind(this), !0), o.addEventListener(document, "keyup", this._DOMKeyUp.bind(this), !0), this._listening = []
    }
    var r, o = t("ac-dom-events"),
      s = t("ac-event-emitter").EventEmitter,
      a = t("./KeyEvent");
    t("./keymap");
    r = n.prototype, r._castEventNameNumberToString = function(t) {
      return "number" == typeof t ? t.toString() : t
    }, r._DOMKeyDown = function(t) {
      var e = this._normalizeKeyboardEvent(t),
        i = e.keyCode.toString();
      this._trackKeyDown(i), this._keyDownEmitter.trigger(i, e)
    }, r._DOMKeyUp = function(t) {
      var e = this._normalizeKeyboardEvent(t),
        i = e.keyCode.toString();
      this._trackKeyUp(i), this._keyUpEmitter.trigger(i, e)
    }, r.addKeyDown = function() {
      var t = Array.prototype.slice.call(arguments),
        e = t.shift();
      if (void 0 === e) throw new TypeError('Could not listen for keyup event on "' + e + '"');
      return e = this._castEventNameNumberToString(e),
        this._keyDownEmitter.on.apply(this._keyDownEmitter, [e].concat(t))
    }, r.addKeyUp = function() {
      var t = Array.prototype.slice.call(arguments),
        e = t.shift();
      if (void 0 === e) throw new TypeError('Could not listen for keyup event on "' + e + '"');
      return e = this._castEventNameNumberToString(e), this._keyUpEmitter.on.apply(this._keyUpEmitter, [e].concat(t))
    }, r.removeKeyDown = function() {
      var t = Array.prototype.slice.call(arguments),
        e = t.shift();
      return e = this._castEventNameNumberToString(e), this._keyDownEmitter.off.apply(this._keyDownEmitter, [e].concat(t))
    }, r.removeKeyUp = function() {
      var t = Array.prototype.slice.call(arguments),
        e = t.shift();
      return e = this._castEventNameNumberToString(e), this._keyUpEmitter.off.apply(this._keyUpEmitter, [e].concat(t))
    }, r.isDown = function(t) {
      return this._keysDown[t] || !1
    }, r.isUp = function(t) {
      return !this.isDown(t)
    }, r._trackKeyUp = function(t) {
      this._keysDown[t] && (this._keysDown[t] = !1)
    }, r._trackKeyDown = function(t) {
      this._keysDown[t] || (this._keysDown[t] = !0)
    }, r._normalizeKeyboardEvent = function(t) {
      return new a(t)
    }, e.exports = n
  }, {
    "./KeyEvent": 573,
    "./keymap": 575,
    "ac-dom-events": 501,
    "ac-event-emitter": 570
  }],
  575: [function(t, e, i) {
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
      SPACEBAR: 32,
      CLEAR: 12,
      COMMA: 188,
      DOT: 190,
      SLASH: 191
    }
  }, {}],
  576: [function(t, e, i) {
    "use strict";
    t("ac-polyfills/Array/isArray");
    var n = t("./extend"),
      r = Object.prototype.hasOwnProperty,
      o = function(t, e) {
        var i;
        for (i in e) r.call(e, i) && (null === e[i] ? t[i] = null : "object" == typeof e[i] ? (t[i] = Array.isArray(e[i]) ? [] : {}, o(t[i], e[i])) : t[i] = e[i]);
        return t
      };
    e.exports = function(t, e) {
      return e ? o({}, t) : n({}, t)
    }
  }, {
    "./extend": 579,
    "ac-polyfills/Array/isArray": 585
  }],
  577: [function(t, e, i) {
    arguments[4][441][0].apply(i, arguments)
  }, {
    dup: 441
  }],
  578: [function(t, e, i) {
    arguments[4][442][0].apply(i, arguments)
  }, {
    "./extend": 579,
    dup: 442
  }],
  579: [function(t, e, i) {
    "use strict";
    t("ac-polyfills/Array/prototype.forEach");
    var n = Object.prototype.hasOwnProperty;
    e.exports = function() {
      var t, e;
      return t = arguments.length < 2 ? [{}, arguments[0]] : [].slice.call(arguments), e = t.shift(), t.forEach(function(t) {
        if (null != t)
          for (var i in t) n.call(t, i) && (e[i] = t[i])
      }), e
    }
  }, {
    "ac-polyfills/Array/prototype.forEach": 586
  }],
  580: [function(t, e, i) {
    arguments[4][444][0].apply(i, arguments)
  }, {
    dup: 444
  }],
  581: [function(t, e, i) {
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
    "./clone": 576,
    "./create": 577,
    "./defaults": 578,
    "./extend": 579,
    "./getPrototypeOf": 580,
    "./isDate": 582,
    "./isEmpty": 583,
    "./isRegExp": 584,
    "./toQueryParameters": 588
  }],
  582: [function(t, e, i) {
    arguments[4][445][0].apply(i, arguments)
  }, {
    dup: 445
  }],
  583: [function(t, e, i) {
    arguments[4][446][0].apply(i, arguments)
  }, {
    dup: 446
  }],
  584: [function(t, e, i) {
    arguments[4][447][0].apply(i, arguments)
  }, {
    dup: 447
  }],
  585: [function(t, e, i) {
    Array.isArray || (Array.isArray = function(t) {
      return "[object Array]" === Object.prototype.toString.call(t)
    })
  }, {}],
  586: [function(t, e, i) {
    arguments[4][559][0].apply(i, arguments)
  }, {
    dup: 559
  }],
  587: [function(t, e, i) {
    arguments[4][438][0].apply(i, arguments)
  }, {
    dup: 438
  }],
  588: [function(t, e, i) {
    arguments[4][448][0].apply(i, arguments)
  }, {
    dup: 448,
    qs: 587
  }],
  589: [function(t, e, i) {
    "use strict";
    e.exports = {
      Modal: t("./ac-modal/Modal")
    }
  }, {
    "./ac-modal/Modal": 590
  }],
  590: [function(t, e, i) {
    "use strict";

    function n(t) {
      this.opened = !1, this.closeButton = null, this.modalEl = null, this.contentEl = null, this._keysToClose = [h.ESCAPE], this._keysToOpen = [], this._boundClose = this.close.bind(this), this._generateElements(), t && this.appendContent(t)
    }
    var r, o = t("ac-classlist"),
      s = (t("ac-dom-styles"), t("ac-dom-events")),
      a = t("ac-dom-nodes"),
      c = t("ac-dom-traversal"),
      l = t("ac-object"),
      u = t("ac-keyboard"),
      h = u.keys,
      d = t("ac-event-emitter").EventEmitter,
      m = document.documentElement,
      r = n.prototype = l.create(d.prototype);
    r._getScrollX = function() {
      var t = window.pageXOffset;
      if (!t) {
        var e = document.documentElement || document.body.parentNode || document.body;
        t = e.scrollLeft
      }
      return t
    }, r._getScrollY = function() {
      var t = window.pageYOffset;
      if (!t) {
        var e = document.documentElement || document.body.parentNode || document.body;
        t = e.scrollTop
      }
      return t
    }, r.open = function() {
      this._scrollX = this._getScrollX(), this._scrollY = this._getScrollY(), this.opened || (this._attachEvents(), this.trigger("willopen"), o.add(m, "modal-open"), this.opened = !0, this.trigger("open"))
    }, r.close = function() {
      this.trigger("willclose"), this._removeEvents(), o.remove(m, "modal-open"), this._returnToScrollPosition(), this.opened = !1, this.trigger("close")
    }, r.appendContent = function(t) {
      if (!t || !a.isElement(t)) throw new TypeError(t + " is not an Element");
      this.contentEl.appendChild(t)
    }, r.removeContent = function(t) {
      this.contentEl.contains(t) && a.remove(t)
    }, r.emptyContent = function() {
      var t = c.children(this.contentEl);
      t.forEach(a.remove)
    }, r.destroy = function() {}, r.addKeyToClose = function(t) {
      this._keysToClose.push(t), u.addKeyUp(t, this.close, this)
    }, r.removeKeyToClose = function(t) {
      var e = this._keysToClose.indexOf(t);
      e !== -1 && this._keysToClose.splice(e, 1), u.removeKeyUp(t, this.close, this)
    }, r._removeEvents = function() {
      s.removeEventListener(this.closeButton, "click", this._boundClose), this._keysToClose.forEach(this.removeKeyToClose, this)
    }, r._attachEvents = function() {
      s.addEventListener(this.closeButton, "click", this._boundClose), this._keysToClose.forEach(this.addKeyToClose, this)
    }, r._generateCloseButton = function() {
      var t = document.createElement("button");
      return o.add(t, "modal-close", "icon", "icon-closealt"), t
    }, r._generateModalEl = function() {
      var t = document.createElement("div");
      return o.add(t, "modal"), t
    }, r._createContentElement = function() {
      var t = document.createElement("div");
      return o.add(t, "modal-content"), t
    }, r._generateElements = function() {
      this.closeButton = this._closeButton || this._generateCloseButton(), this.contentEl = this._createContentElement(), this.modalEl = this._modalEl || this._generateModalEl(), this.modalEl.appendChild(this.closeButton), this.modalEl.appendChild(this.contentEl), document.body.appendChild(this.modalEl), o.add(m, "has-modal")
    }, r._returnToScrollPosition = function() {
      window.scrollTo(this._scrollX || 0, this._scrollY || 0)
    }, e.exports = n
  }, {
    "ac-classlist": 492,
    "ac-dom-events": 501,
    "ac-dom-nodes": 516,
    "ac-dom-styles": 540,
    "ac-dom-traversal": 551,
    "ac-event-emitter": 570,
    "ac-keyboard": 572,
    "ac-object": 581
  }],
  591: [function(t, e, i) {
    "use strict";
    e.exports = {
      create: t("./ac-films/factory/films")
    }
  }, {
    "./ac-films/factory/films": 597
  }],
  592: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this.player = t, this.sources = {}, this.currentStubPlayer = null, this.playerType = "", this.videoType = "", this.options = c.defaults(l, e || {})
    }
    var r;
    try {
      r = t("@marcom/ac-analytics")
    } catch (o) {}
    var s = t("@marcom/ac-event-emitter").EventEmitter,
      a = (t("@marcom/ac-dom-traversal"), t("@marcom/ac-browser")),
      c = t("@marcom/ac-object"),
      l = {
        dataAttribute: "analytics-video-id"
      },
      u = n.prototype;
    u.activate = function() {
      this.player.on("play", this._onPlay, this), this.player.on("ended", this._onEnded, this), this.player.on("timeupdate", this._onTimeupdate, this), this.player.on("texttrackshow", this._onTexttrackshow, this), this.player.on("durationchange", this.setCurrentStubPlayer, this)
    }, u.deactivate = function() {
      this.player.off("play", this._onPlay, this), this.player.off("ended", this._onEnded, this), this.player.off("timeupdate", this._onTimeupdate, this), this.player.off("texttrackshow", this._onTexttrackshow, this), this.player.off("durationchange", this.setCurrentStubPlayer, this)
    }, u.addSourceObject = function(t) {
      var e, i;
      if (t && t.id && t.element) {
        if (this.sources[t.id]) return;
        e = this._createStubPlayer(t.element), i = t.element.getAttribute("data-" + this.options.dataAttribute), i || (e.videoId = t.id), this.sources[t.id] = {
          stubPlayer: e,
          observer: this._createObserver(e)
        }
      }
    }, u.setCurrentStubPlayer = function() {
      var t, e = this.player.el,
        i = e.getAttribute("data-" + this.options.dataAttribute),
        n = this._getCurrentSourceObject(i);
      n && n.stubPlayer && (this.currentStubPlayer = n.stubPlayer, this.playerType = "ie" === a.name.toLowerCase() && a.version < 9 ? "quicktime" : "html5", t = this.player.getCurrentSrc(), t && t.attributes && t.attributes.src && (this.videoType = t.attributes.src.split(".").pop()))
    }, u.destroy = function() {
      this.deactivate(), this.player = null, this.sources = null, this.currentStubPlayer = null, this.options = null
    }, u._onPlay = function() {
      this.setCurrentStubPlayer(), this._proxyEvent("play")
    }, u._onEnded = function() {
      this._proxyEvent("ended")
    }, u._onTimeupdate = function() {
      this._proxyEvent("timeupdate")
    }, u._onTexttrackshow = function() {
      this._proxyEvent("captions-enabled")
    }, u._getSourceObjectBySrcObjId = function(t) {
      return this.sources[t] || null
    }, u._getCurrentSourceObject = function(t) {
      var e;
      return t && (e = this._getSourceObjectBySrcObjId(t)), e
    }, u._createStubPlayer = function(t) {
      var e = new s;
      return e.el = t, e
    }, u._getEventData = function() {
      return {
        currentTime: this.player.getCurrentTime(),
        playerType: this.playerType || null,
        videoType: this.videoType || null
      }
    }, u._createObserver = function(t) {
      var e;
      return r && r.observer && r.observer.Video && (e = new r.observer.Video(t, {
        dataAttribute: this.options.dataAttribute
      })), e
    }, u._proxyEvent = function(t) {
      this.currentStubPlayer && this.currentStubPlayer.trigger(t, this._getEventData())
    }, e.exports = n
  }, {
    "@marcom/ac-analytics": void 0,
    "@marcom/ac-browser": 206,
    "@marcom/ac-dom-traversal": 47,
    "@marcom/ac-event-emitter": 220,
    "@marcom/ac-object": 804
  }],
  593: [function(t, e, i) {
    "use strict";

    function n(t) {
      c.call(this), this._currentVideo = null, this.videoSrcCollection = new u, this.analyticsTranslator = null, this.player = null, this.localization = null, this.noSupportView = null, this.options = l.defaults(n.defaults, t)
    }
    var r = t("@marcom/ac-video-localization").localization,
      o = t("@marcom/ac-video-nosupportview").View,
      s = t("@marcom/ac-feature"),
      a = t("@marcom/ac-classlist"),
      c = t("@marcom/ac-event-emitter").EventEmitter,
      l = t("@marcom/ac-object"),
      u = t("./VideoSourceCollection"),
      h = t("./factory/player"),
      d = (t("@marcom/ac-fullscreen"), t("./featureDetect/featureDetect")),
      m = t("@marcom/ac-browser"),
      p = t("./AnalyticsTranslator"),
      f = n.prototype = l.create(c.prototype);
    n.defaults = {
      analytics: !0,
      playerOptions: {
        crossorigin: "anonymous",
        preload: "none"
      },
      analyticsOptions: {
        dataAttribute: "analytics-id"
      }
    }, f.play = function(t) {
      var e = null,
        i = null;
      if (this.player || this.createPlayer(), t) {
        if (e = this.videoSrcCollection.getSource(t), i = this.getCurrentVideo(), e && i && e.src === i.src) return this._setCurrSrcObjIdForAnalytics(e.id), this.player.addClassName("player-fullscreen"), void this.player.play();
        this._storedTextTrack = null
      } else e = this.player.getCurrentSrc() ? this.getCurrentVideo() : this.videoSrcCollection.getSourceByIndex(0);
      e && (this._setCurrSrcObjIdForAnalytics(e.id), e.poster && this.setPoster(e.poster), null === this.localization ? this.ensureLocalization().then(this.play.bind(this, t)) : this._playVideoBySrcObj(e))
    }, f.bindPlayerEvents = function() {
      this.player.on("enterfullscreen", this._onEnterFullscreen, this), this.player.on("exitfullscreen", this._onExitFullscreen, this), this.player.on("durationchange", this._onPlayerSrcChange, this)
    }, f.handleTextTracks = function(t) {
      var e, i, n;
      this.player && t.value && !isNaN(t.value) && this._currentVideo.vatResource.vatVTTSource && 0 !== this._currentVideo.vatResource.vatVTTSource.length && (n = {
        src: this._currentVideo.vatResource.vatVTTSource.pop()
      }, e = this.player.getTextTracks(), i = this.player.findTextTrack(n), e && e.models && e.models.length > 0 && i && e.models.forEach(function(t) {
        i.cid === t.cid ? t.hide() : d.shouldAllowSingleTextTrack() ? this.player.removeTextTrack(t) : t.disable()
      }.bind(this)))
    }, f.pause = function() {
      this.player.pause()
    }, f.setSrc = function(t) {
      return this._setNewPlayerSrc(t)
    }, f.getCurrentSrc = function() {
      return this.player.getCurrentSrc().attributes.src
    }, f.getCurrentVideo = function() {
      return this._currentVideo
    }, f.createVideoResource = function(t, e) {
      var i = this.videoSrcCollection.addSource(t, e);
      return this._addSourceToAnalytics(i), i
    }, f.createPlayer = function() {
      return this.on("novideosupport", this._onNoVideoSupport, this), this.options.poster && (this.options.playerOptions.poster = this.options.poster), this.player = h(this.options.playerOptions), this.player && (this.bindPlayerEvents(), this.defaultPosterFrame = this.player.getPoster(), this._intializeAnalytics(), this._applyDocumentClassnames()), this.player
    }, f.loadLocalization = function() {
      return r.create().then(function(t) {
        this.localization = t
      }.bind(this))
    }, f.ensureLocalization = function() {
      var t;
      return t = null === this.localization ? this.loadLocalization() : Promise.resolve()
    }, f.createNoSupportView = function() {
      this.ensureLocalization().then(function() {
        var t = new o({
          model: this.localization
        });
        t.render(), this.noSupportView = t, this.trigger("novideosupport"), this._onNoVideoSupport()
      }.bind(this))
    }, f.setPoster = function(t) {
      t !== this.player.getPoster() && this.player.setPoster(t)
    }, f._onPlayerSrcChange = function(t) {
      this.handleTextTracks(t)
    }, f._onEnterFullscreen = function() {
      a.add(this.player.el, "player-fullscreen")
    }, f._onExitFullscreen = function() {
      a.remove(this.player.el, "player-fullscreen")
    }, f._intializeAnalytics = function() {
      this.analyticsTranslator || this.options.analytics !== !0 || (this.analyticsTranslator = new p(this.player, this.options.analyticsOptions), this.analyticsTranslator.activate())
    }, f._addSourceToAnalytics = function(t) {
      t && this.analyticsTranslator && this.options.analytics === !0 && this.analyticsTranslator.addSourceObject(t)
    }, f._setCurrSrcObjIdForAnalytics = function(t) {
      this.options.analytics === !0 && t && this.player.el && this.player.el.setAttribute("data-" + this.options.analyticsOptions.dataAttribute, t)
    }, f._playVideoBySrcObj = function(t) {
      var e = this.player.getCurrentSrc();
      !e || e.attributes.src && e.attributes.src !== t.src ? s.isDesktop() ? (this.player.once("canplaythrough", this.player.play, this.player), this._setNewPlayerSrc(t)) : (this.player.addClassName("player-fullscreen"), this._setNewPlayerSrc(t), this.player.play()) : this.player.play()
    }, f._setNewPlayerSrc = function(t) {
      var e = this._setPlayerSrcFromSourceObject(t);
      return e && (this._currentVideo = t, t.poster && this.setPoster(t.poster)), e
    }, f._setPlayerSrcFromSourceObject = function(t) {
      var e, i, n = null;
      return this.player && !this.player.notSupported && t.vatResource && "function" == typeof t.vatResource.setPlayerSrc && (e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, i = this._getVTTConfigFromElement(t.element), t.vatResource.setPlayerSrc(this.player, e, null, i), "safari mobile" === m.name.toLowerCase() && this.player.once("readystatechange", function() {
        var t = this.player.el,
          e = this.player.getMediaWidth(),
          i = this.player.getMediaHeight();
        e && 848 !== e && i && 480 !== i && (t.style.paddingBottom = i / e * 100 + "%")
      }, this), t.cid = this.player.getCurrentSrc().cid, n = this.player.getCurrentSrc().attributes.src), n
    }, f._getVTTConfigFromElement = function(t) {
      var e = !t.hasAttribute(this.options.noCaptions) && t.href && t.href.indexOf("-cc-") !== -1;
      return {
        captions: e,
        lang: t.hasAttribute(this.options.captionsLanguage) ? t.attribute[this.options.captionsLanguage] : "en-US"
      }
    }, f._applyDocumentClassnames = function() {
      var t;
      d.shouldPlayNativePlayer() && (t = "ac-player-handheld"), s.isTablet() && (t = "ac-player-tablet"), s.isDesktop() && (t = "ac-player-desktop"), a.add(document.documentElement, t)
    }, f._onNoVideoSupport = function() {}, e.exports = n
  }, {
    "./AnalyticsTranslator": 592,
    "./VideoSourceCollection": 595,
    "./factory/player": 598,
    "./featureDetect/featureDetect": 600,
    "@marcom/ac-browser": 206,
    "@marcom/ac-classlist": 217,
    "@marcom/ac-event-emitter": 220,
    "@marcom/ac-feature": 184,
    "@marcom/ac-fullscreen": 605,
    "@marcom/ac-object": 804,
    "@marcom/ac-video-localization": 285,
    "@marcom/ac-video-nosupportview": 309
  }],
  594: [function(t, e, i) {
    "use strcit";

    function n(t) {
      a.apply(this, arguments), this.options = s.extend(n.defaults, this.options), this.modalVideo = null
    }
    var r = t("ac-modal").Modal,
      o = t("@marcom/ac-modal-video").ModalVideo,
      s = t("@marcom/ac-object"),
      a = t("./FilmsController"),
      c = t("@marcom/ac-feature"),
      l = t("@marcom/ac-fullscreen"),
      u = t("@marcom/ac-browser"),
      h = (t("@marcom/ac-classlist"), t("@marcom/ac-keyboard")),
      d = t("@marcom/ac-keyboard/keyMap"),
      m = u.IE && u.version <= 8,
      p = t("@marcom/ac-dom-traversal/querySelector"),
      f = n.prototype = s.create(a.prototype);
    n.defaults = s.extend(a.defaults, {
      modalOptions: {
        playOnOpen: !0,
        closeOnEnded: !0
      }
    }), f.play = function(t) {
      a.prototype.play.call(this, t), this.modalVideo.modal.opened || this.openModal()
    }, f.openModal = function() {
      this.modalVideo.open()
    }, f.createPlayer = function() {
      a.prototype.createPlayer.call(this), this._createModalVideo()
    }, f._handleFullscreen = function() {
      var t = !1,
        e = this.modalVideo.modal;
      e.removeKeyToClose(d.ESCAPE);
      var i = function(e) {
          t = !0
        },
        n = function(i) {
          t === !0 && e.opened === !0 && e.close(), t = !1
        };
      h.onDown(d.ESCAPE, i), h.onUp(d.ESCAPE, n)
    }, f._createModalVideo = function() {
      var t = {
        playOnOpen: !1,
        closeOnEnded: !1
      };
      this.player ? (this.modalVideo = o.create(this.player, t), this._handleFullscreen(), this._bindModalEvents()) : this.modalVideo = new r, m && this.modalVideo.on("open", function() {
        this._closeButton || (this._closeButton = p(".modal-close", this.modalVideo.modalEl)), setTimeout(function() {
          this._closeButton.className = this._closeButton.className
        }.bind(this), 0)
      }.bind(this)), this.trigger("modalready", {
        modal: this.modalVideo
      })
    }, f._onEnded = function() {
      this.options.modalOptions.closeOnEnded === !0 && this.modalVideo.close()
    }, f._guaranteeVolume = function() {
      this.player && this.player.getReadyState() > 0 ? this.player.setVolume(1) : this.player && this.player.once("readystatechange", function() {
        this.player.setVolume(1)
      }, this)
    }, f._bindModalEvents = function() {
      this.modalVideo.on("close", this._onModalClose, this), this.modalVideo.on("open", this._onModalOpen, this)
    }, f.bindPlayerEvents = function() {
      a.prototype.bindPlayerEvents.call(this), this.player && this.player.on("ended", this._onEnded, this)
    }, f._onModalClose = function() {
      var t;
      this.player && (t = this.player.getVisibleTextTracks(), t && t.models && t.models.length > 0 ? (this._storedTextTrack = t.at(0), this._storedTextTrack.hide()) : this._storedTextTrack = null, this.player.setCurrentTime(0), this.pause(), c.isTablet() && l.exitFullscreen(this.player.getMediaElement()))
    }, f._onModalOpen = function() {
      this._guaranteeVolume(), this.options.modalOptions.playOnOpen === !0 && c.isTablet() && this.player.play(), this._storedTextTrack && this._storedTextTrack.show()
    }, f._onEnded = function() {
      this.options.modalOptions.closeOnEnded === !0 && this.modalVideo.close()
    }, f._onNoVideoSupport = function() {
      this.noSupportView && this.modalVideo && this.modalVideo.modal.modalEl.appendChild(this.noSupportView.el)
    }, e.exports = n
  }, {
    "./FilmsController": 593,
    "@marcom/ac-browser": 206,
    "@marcom/ac-classlist": 217,
    "@marcom/ac-dom-traversal/querySelector": 61,
    "@marcom/ac-feature": 184,
    "@marcom/ac-fullscreen": 605,
    "@marcom/ac-keyboard": 225,
    "@marcom/ac-keyboard/keyMap": 227,
    "@marcom/ac-modal-video": 233,
    "@marcom/ac-object": 804,
    "ac-modal": 589
  }],
  595: [function(t, e, i) {
    "use strict";

    function n() {
      this.sources = []
    }
    var r = t("./VideoSourceObject").create,
      o = n.prototype;
    o.addSource = function(t, e) {
      var i = r(t, e);
      return i && (this.sources.push(i), i.index = this.sources.length - 1), i
    }, o.getSource = function(t) {
      var e = null;
      return "number" == typeof t ? e = this.getSourceByIndex(t) : "string" == typeof t && (e = /^cid/.test(t) ? this.getSourceByCid(t) : this.getSourceById(t)), e
    }, o.getSourceByIndex = function(t) {
      return this.sources[t]
    }, o.getSourceById = function(t) {
      return this.getSourceByPropertyValue("id", t)
    }, o.getSourceByCid = function(t) {
      return this.getSourceByPropertyValue("cid", t)
    }, o.getSourceByPropertyValue = function(t, e) {
      var i = null;
      return this.sources.some(function(n) {
        var r = !1;
        return n[t] === e && (i = n, r = !0), r
      }), i
    }, e.exports = n
  }, {
    "./VideoSourceObject": 596
  }],
  596: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      if ("string" != typeof t) throw new TypeError(t + " must be a string");
      var i = e.element || null,
        n = null,
        r = null,
        a = e.posterAttribute || s;
      return i && (r = i.getAttribute(a), n = i.id), {
        vatResource: o.create(t, {
          maxWidth: e.maxWidth
        }),
        element: i,
        src: t,
        poster: r,
        id: n,
        cid: null
      }
    }
    var r = t("@marcom/ac-vatman"),
      o = r.vatResource,
      s = "data-acv-poster";
    e.exports = {
      create: n
    }
  }, {
    "@marcom/ac-vatman": 273
  }],
  597: [function(t, e, i) {
    "use strcit";

    function n(t, e) {
      e = s.defaults(u, e || {});
      var i;
      return i = e.modal !== !0 || l.shouldPlayNativePlayer() ? new r(e) : new o(e), i.loadLocalization(), i.createPlayer(), i.player ? a(t, i, e) : (i.createNoSupportView(), t.forEach(function(t) {
        c.addEventListener(t, "click", function(t) {
          c.preventDefault(t), i.modalVideo.open()
        })
      })), i
    }
    var r = t("../FilmsController"),
      o = t("../ModalFilmsController"),
      s = t("@marcom/ac-object"),
      a = t("./sources"),
      c = (t("../posters"), t("@marcom/ac-dom-events")),
      l = t("../featureDetect/featureDetect"),
      u = {
        poster: null,
        modal: !1,
        deepLink: !0,
        playOnClick: !0,
        vttDataAttributes: {
          noCaptions: "data-no-captions",
          captionsLanguage: "data-captions-language"
        },
        maxWidth: 1280
      };
    e.exports = n
  }, {
    "../FilmsController": 593,
    "../ModalFilmsController": 594,
    "../featureDetect/featureDetect": 600,
    "../posters": 601,
    "./sources": 599,
    "@marcom/ac-dom-events": 8,
    "@marcom/ac-object": 804
  }],
  598: [function(t, e, i) {
    "use strict";

    function n(t) {
      t.on("ended", function() {
        c.exitFullscreen(t.getMediaElement())
      }), t.on("exitfullscreen", function() {
        t.setCurrentTime(0)
      })
    }

    function r(t) {
      t.on("enterfullscreen", function() {
        var e, i = t.getMediaElement();
        "video" !== i.tagName.toLowerCase() && (e = t.getMediaHeight() / t.getMediaWidth(), i.style.height = i.offsetWidth * e + "px")
      }), t.on("exitfullscreen", function() {
        var e = t.getMediaElement();
        "video" !== e.tagName.toLowerCase() && (e.style.height = null)
      })
    }

    function o(t) {
      t = t || {};
      var e = s.createPlayer(a, t);
      return e && (l.shouldPlayNativePlayer() ? (n(e), e.appendTo(document.body)) : r(e)), e
    }
    var s = t("@marcom/ac-vatman"),
      a = t("@marcom/ac-video").Player,
      c = t("@marcom/ac-fullscreen"),
      l = (t("@marcom/ac-dom-events"), t("../featureDetect/featureDetect"));
    e.exports = o
  }, {
    "../featureDetect/featureDetect": 600,
    "@marcom/ac-dom-events": 8,
    "@marcom/ac-fullscreen": 605,
    "@marcom/ac-vatman": 273,
    "@marcom/ac-video": 491
  }],
  599: [function(t, e, i) {
    "use strict";

    function n(t, e, i) {
      var n;
      i.deepLink === !0 && (n = new r.Router({
        hashChange: !0,
        pushState: !1
      })), t.forEach(function(t) {
        var r, l, h = t.getAttribute("href"),
          p = t.getAttribute("data-film-id") || t.getAttribute("id"),
          f = {
            element: t,
            maxWidth: i.maxWidth
          },
          g = h;
        d || (g = c.vatClient.getSource(h, m, null, {
          maxWidth: i.maxWidth
        })), g !== h && t.setAttribute("href", g), e.player || e.createPlayer(), h && (l = e.createVideoResource(h, f), l.poster || (l.poster = e.defaultPosterFrame), l.poster && a.loadPoster(l.poster), i.deepLink === !0 && l.id && n.createRoute(l.id, function() {
          s(function() {
            if (u.isTablet()) {
              var t = e.player,
                i = t.poster,
                n = t.getPoster(),
                r = t.getMediaElement();
              i && (r.setAttribute("poster", n), i._hide())
            }
            e.player.setPreload("auto"), e.play(l.id)
          })
        }), i.playOnClick === !0 && (r = o.create(t), r.on("click", function() {
          e.player && "none" === e.player.getPreload() && e.player.setPreload("auto"), e.play(p)
        })))
      }), i.deepLink === !0 && (u.isTablet() ? s(function() {
        window.requestAnimationFrame(function() {
          n.start()
        })
      }) : n.start())
    }
    var r = t("@marcom/ac-router"),
      o = t("@marcom/ac-gesture-touchclick").TouchClick,
      s = t("../windowLoad"),
      a = t("../posters"),
      c = t("@marcom/ac-vatman"),
      l = (t("@marcom/ac-dom-traversal/querySelector"), t("@marcom/ac-browser")),
      u = t("@marcom/ac-feature"),
      h = l.name.toLowerCase(),
      d = "safari" === h || "safari mobile" === h,
      m = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    e.exports = n
  }, {
    "../posters": 601,
    "../windowLoad": 602,
    "@marcom/ac-browser": 206,
    "@marcom/ac-dom-traversal/querySelector": 61,
    "@marcom/ac-feature": 184,
    "@marcom/ac-gesture-touchclick": 222,
    "@marcom/ac-router": 248,
    "@marcom/ac-vatman": 273
  }],
  600: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-browser"),
      r = t("@marcom/ac-feature"),
      o = n.name.toLowerCase(),
      s = n.os.toLowerCase();
    e.exports = {
      shouldPlayNativePlayer: function() {
        return r.isHandheld() && "ios" === s
      },
      shouldAllowSingleTextTrack: function() {
        return "safari mobile" === o
      }
    }
  }, {
    "@marcom/ac-browser": 206,
    "@marcom/ac-feature": 184
  }],
  601: [function(t, e, i) {
    "use strict";

    function n(t) {
      (new Image).src = t
    }
    e.exports = {
      loadPoster: n
    }
  }, {}],
  602: [function(t, e, i) {
    "use strict";

    function n(t) {
      r ? t() : o.addEventListener(window, "load", t)
    }
    var r = !1,
      o = t("@marcom/ac-dom-events");
    o.addEventListener(window, "load", function() {
      r = !0
    }), e.exports = n
  }, {
    "@marcom/ac-dom-events": 8
  }],
  603: [function(t, e, i) {
    arguments[4][220][0].apply(i, arguments)
  }, {
    "./ac-event-emitter/EventEmitter": 604,
    dup: 220
  }],
  604: [function(t, e, i) {
    arguments[4][221][0].apply(i, arguments)
  }, {
    dup: 221
  }],
  605: [function(t, e, i) {
    "use strict";
    e.exports = t("./ac-fullscreen/fullscreen")
  }, {
    "./ac-fullscreen/fullscreen": 611
  }],
  606: [function(t, e, i) {
    e.exports = {
      STANDARD: "standard",
      IOS: "ios"
    }
  }, {}],
  607: [function(t, e, i) {
    "use strict";

    function n(t) {
      h.trigger(l.ENTERFULLSCREEN, t)
    }

    function r(t) {
      h.trigger(l.EXITFULLSCREEN, t)
    }

    function o(t) {
      h.fullscreenElement() ? n(t) : r(t)
    }

    function s() {
      a(document, "fullscreenchange", o)
    }
    var a = t("@marcom/ac-dom-events/addEventListener"),
      c = t("@marcom/ac-event-emitter").EventEmitter,
      l = t("./../events/types"),
      u = t("./../consts/modes"),
      h = new c;
    s(), h.fullscreenEnabled = function(t) {
      var e = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || "webkitCancelFullScreen" in document;
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
    "./../consts/modes": 606,
    "./../events/types": 610,
    "@marcom/ac-dom-events/addEventListener": 6,
    "@marcom/ac-event-emitter": 603
  }],
  608: [function(t, e, i) {
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
    "./desktop": 607,
    "./ios": 609
  }],
  609: [function(t, e, i) {
    "use strict";

    function n() {
      a(document, "webkitbeginfullscreen", r, !0), a(document, "webkitendfullscreen", o, !0)
    }

    function r(t) {
      h.trigger(l.ENTERFULLSCREEN, t)
    }

    function o(t) {
      s = void 0, h.trigger(l.EXITFULLSCREEN, t)
    }
    var s, a = t("@marcom/ac-dom-events/addEventListener"),
      c = t("@marcom/ac-event-emitter").EventEmitter,
      l = t("./../events/types"),
      u = t("./../consts/modes");
    n();
    var h = new c;
    h.fullscreenEnabled = function(t) {
      return !!t.webkitSupportsFullscreen
    }, h.fullscreenElement = function() {
      return s
    }, h.exitFullscreen = function(t) {
      t && "function" == typeof t.webkitExitFullscreen && t.webkitExitFullscreen()
    }, h.requestFullscreen = function(t) {
      "function" == typeof t.webkitEnterFullscreen && t.webkitEnterFullscreen()
    }, h.mode = u.IOS, e.exports = h
  }, {
    "./../consts/modes": 606,
    "./../events/types": 610,
    "@marcom/ac-dom-events/addEventListener": 6,
    "@marcom/ac-event-emitter": 603
  }],
  610: [function(t, e, i) {
    e.exports = {
      ENTERFULLSCREEN: "enterfullscreen",
      EXITFULLSCREEN: "exitfullscreen"
    }
  }, {}],
  611: [function(t, e, i) {
    "use strict";

    function n() {
      throw new Error(s)
    }
    var r = t("@marcom/ac-event-emitter").EventEmitter,
      o = t("./delegate/factory"),
      s = "Error: Element missing. ac-fullscreen requires an element to be specified",
      a = new r,
      c = o.create();
    c.propagateTo(a), a.requestFullscreen = function(t) {
      return t || n(), c.requestFullscreen(t)
    }, a.fullscreenEnabled = function(t) {
      return t || n(), c.fullscreenEnabled(t)
    }, a.fullscreenElement = function() {
      return c.fullscreenElement()
    }, a.exitFullscreen = function(t) {
      return t || n(), c.exitFullscreen(t)
    }, a.getMode = function() {
      return c.mode
    }, e.exports = a
  }, {
    "./delegate/factory": 608,
    "@marcom/ac-event-emitter": 603
  }],
  612: [function(t, e, i) {
    arguments[4][316][0].apply(i, arguments)
  }, {
    "./ac-console/log": 613,
    dup: 316
  }],
  613: [function(t, e, i) {
    arguments[4][317][0].apply(i, arguments)
  }, {
    dup: 317
  }],
  614: [function(t, e, i) {
    var n = t("./ac-element-engagement/ElementEngagement");
    e.exports = new n, e.exports.ElementEngagement = n
  }, {
    "./ac-element-engagement/ElementEngagement": 615
  }],
  615: [function(t, e, i) {
    "use strict";
    var n, r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      o = {
        create: t("@marcom/ac-object/create"),
        defaults: t("@marcom/ac-object/defaults"),
        extend: t("@marcom/ac-object/extend")
      },
      s = t("@marcom/ac-element-tracker").ElementTracker,
      a = {
        timeToEngage: 500,
        inViewThreshold: .75,
        stopOnEngaged: !0
      },
      c = {
        thresholdEnterTime: 0,
        thresholdExitTime: 0,
        inThreshold: !1,
        engaged: !1,
        tracking: !0
      },
      l = function() {
        s.call(this), r.call(this), this._thresholdEnter = this._thresholdEnter.bind(this), this._thresholdExit = this._thresholdExit.bind(this), this._enterView = this._enterView.bind(this), this._exitView = this._exitView.bind(this)
      };
    n = l.prototype = o.create(s.prototype), n = o.extend(n, r.prototype), n._decorateTrackedElement = function(t, e) {
      var i;
      i = o.defaults(a, e || {}), o.extend(t, i), o.extend(t, c)
    }, n._attachElementListeners = function(t) {
      t.on("thresholdenter", this._thresholdEnter, this), t.on("thresholdexit", this._thresholdExit, this), t.on("enterview", this._enterView, this), t.on("exitview", this._exitView, this)
    }, n._removeElementListeners = function(t) {
      t.off("thresholdenter", this._thresholdEnter), t.off("thresholdexit", this._thresholdExit), t.off("enterview", this._enterView), t.off("exitview", this._exitView)
    }, n._attachAllElementListeners = function() {
      this.elements.forEach(function(t) {
        t.stopOnEngaged ? t.engaged || this._attachElementListeners(t) : this._attachElementListeners(t)
      }, this)
    }, n._removeAllElementListeners = function() {
      this.elements.forEach(function(t) {
        this._removeElementListeners(t)
      }, this)
    }, n._elementInViewPastThreshold = function(t) {
      var e = window.innerHeight || document.documentElement.clientHeight,
        i = !1;
      return i = t.pixelsInView === e || t.percentInView > t.inViewThreshold
    }, n._ifInView = function(t, e) {
      var i = t.inThreshold;
      s.prototype._ifInView.apply(this, arguments), !i && this._elementInViewPastThreshold(t) && (t.inThreshold = !0, t.trigger("thresholdenter", t), "number" == typeof t.timeToEngage && t.timeToEngage >= 0 && (t.engagedTimeout = window.setTimeout(this._engaged.bind(this, t), t.timeToEngage)))
    }, n._ifAlreadyInView = function(t) {
      var e = t.inThreshold;
      s.prototype._ifAlreadyInView.apply(this, arguments), e && !this._elementInViewPastThreshold(t) && (t.inThreshold = !1, t.trigger("thresholdexit", t), t.engagedTimeout && (window.clearTimeout(t.engagedTimeout), t.engagedTimeout = null))
    }, n._engaged = function(t) {
      t.engagedTimeout = null, this._elementEngaged(t), t.trigger("engaged", t), this.trigger("engaged", t)
    }, n._thresholdEnter = function(t) {
      t.thresholdEnterTime = Date.now(), t.thresholdExitTime = 0, this.trigger("thresholdenter", t)
    }, n._thresholdExit = function(t) {
      t.thresholdExitTime = Date.now(), this.trigger("thresholdexit", t)
    }, n._enterView = function(t) {
      this.trigger("enterview", t)
    }, n._exitView = function(t) {
      this.trigger("exitview", t)
    }, n._elementEngaged = function(t) {
      t.engaged = !0, t.stopOnEngaged && this.stop(t)
    }, n.stop = function(t) {
      this.tracking && !t && (this._removeAllElementListeners(), s.prototype.stop.call(this)), t && t.tracking && (t.tracking = !1, this._removeElementListeners(t))
    }, n.start = function(t) {
      t || this._attachAllElementListeners(), t && !t.tracking && (t.stopOnEngaged ? t.engaged || (t.tracking = !0, this._attachElementListeners(t)) : (t.tracking = !0, this._attachElementListeners(t))), this.tracking ? (this.refreshAllElementMetrics(), this.refreshAllElementStates()) : s.prototype.start.call(this)
    }, n.addElement = function(t, e) {
      var i = s.prototype.addElement.call(this, t);
      return this._decorateTrackedElement(i, e), i
    }, n.addElements = function(t, e) {
      [].forEach.call(t, function(t) {
        this.addElement(t, e)
      }, this)
    }, e.exports = l
  }, {
    "@marcom/ac-element-tracker": 651,
    "@marcom/ac-event-emitter-micro": 168,
    "@marcom/ac-object/create": 806,
    "@marcom/ac-object/defaults": 807,
    "@marcom/ac-object/extend": 808
  }],
  616: [function(t, e, i) {
    arguments[4][364][0].apply(i, arguments)
  }, {
    "@marcom/ac-polyfills/Array/isArray": void 0,
    "@marcom/ac-polyfills/Array/prototype.forEach": void 0,
    dup: 364
  }],
  617: [function(t, e, i) {
    arguments[4][365][0].apply(i, arguments)
  }, {
    "./flatten": 616,
    "./intersection": 618,
    "./shuffle": 619,
    "./toArray": 620,
    "./union": 621,
    "./unique": 622,
    "./without": 623,
    dup: 365
  }],
  618: [function(t, e, i) {
    arguments[4][366][0].apply(i, arguments)
  }, {
    "@marcom/ac-polyfills/Array/prototype.indexOf": void 0,
    dup: 366
  }],
  619: [function(t, e, i) {
    arguments[4][367][0].apply(i, arguments)
  }, {
    dup: 367
  }],
  620: [function(t, e, i) {
    arguments[4][368][0].apply(i, arguments)
  }, {
    "@marcom/ac-polyfills/Array/prototype.slice": void 0,
    dup: 368
  }],
  621: [function(t, e, i) {
    arguments[4][369][0].apply(i, arguments)
  }, {
    "./flatten": 616,
    "./toArray": 620,
    "./unique": 622,
    dup: 369
  }],
  622: [function(t, e, i) {
    arguments[4][370][0].apply(i, arguments)
  }, {
    "@marcom/ac-polyfills/Array/prototype.indexOf": void 0,
    "@marcom/ac-polyfills/Array/prototype.reduce": void 0,
    dup: 370
  }],
  623: [function(t, e, i) {
    arguments[4][371][0].apply(i, arguments)
  }, {
    "@marcom/ac-polyfills/Array/prototype.indexOf": void 0,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0,
    dup: 371
  }],
  624: [function(t, e, i) {
    arguments[4][35][0].apply(i, arguments)
  }, {
    dup: 35
  }],
  625: [function(t, e, i) {
    arguments[4][36][0].apply(i, arguments)
  }, {
    dup: 36
  }],
  626: [function(t, e, i) {
    arguments[4][37][0].apply(i, arguments)
  }, {
    dup: 37
  }],
  627: [function(t, e, i) {
    arguments[4][326][0].apply(i, arguments)
  }, {
    dup: 326
  }],
  628: [function(t, e, i) {
    arguments[4][38][0].apply(i, arguments)
  }, {
    dup: 38
  }],
  629: [function(t, e, i) {
    arguments[4][39][0].apply(i, arguments)
  }, {
    dup: 39
  }],
  630: [function(t, e, i) {
    arguments[4][329][0].apply(i, arguments)
  }, {
    dup: 329
  }],
  631: [function(t, e, i) {
    arguments[4][40][0].apply(i, arguments)
  }, {
    "./ELEMENT_NODE": 628,
    "./internal/isNodeType": 639,
    "@marcom/ac-polyfills/Array/prototype.filter": void 0,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0,
    dup: 40
  }],
  632: [function(t, e, i) {
    arguments[4][331][0].apply(i, arguments)
  }, {
    dup: 331
  }],
  633: [function(t, e, i) {
    arguments[4][332][0].apply(i, arguments)
  }, {
    "./COMMENT_NODE": 624,
    "./DOCUMENT_FRAGMENT_NODE": 625,
    "./DOCUMENT_NODE": 626,
    "./DOCUMENT_TYPE_NODE": 627,
    "./ELEMENT_NODE": 628,
    "./TEXT_NODE": 629,
    "./createDocumentFragment": 630,
    "./filterByNodeType": 631,
    "./hasAttribute": 632,
    "./indexOf": 634,
    "./insertAfter": 635,
    "./insertBefore": 636,
    "./insertFirstChild": 637,
    "./insertLastChild": 638,
    "./isComment": 641,
    "./isDocument": 642,
    "./isDocumentFragment": 643,
    "./isDocumentType": 644,
    "./isElement": 645,
    "./isNode": 646,
    "./isNodeList": 647,
    "./isTextNode": 648,
    "./remove": 649,
    "./replace": 650,
    dup: 332
  }],
  634: [function(t, e, i) {
    arguments[4][333][0].apply(i, arguments)
  }, {
    "./filterByNodeType": 631,
    "./internal/validate": 640,
    "@marcom/ac-polyfills/Array/prototype.indexOf": void 0,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0,
    dup: 333
  }],
  635: [function(t, e, i) {
    arguments[4][334][0].apply(i, arguments)
  }, {
    "./internal/validate": 640,
    dup: 334
  }],
  636: [function(t, e, i) {
    arguments[4][335][0].apply(i, arguments)
  }, {
    "./internal/validate": 640,
    dup: 335
  }],
  637: [function(t, e, i) {
    arguments[4][336][0].apply(i, arguments)
  }, {
    "./internal/validate": 640,
    dup: 336
  }],
  638: [function(t, e, i) {
    arguments[4][297][0].apply(i, arguments)
  }, {
    "./internal/validate": 640,
    dup: 297
  }],
  639: [function(t, e, i) {
    arguments[4][41][0].apply(i, arguments)
  }, {
    "../isNode": 646,
    dup: 41
  }],
  640: [function(t, e, i) {
    arguments[4][42][0].apply(i, arguments)
  }, {
    "../COMMENT_NODE": 624,
    "../DOCUMENT_FRAGMENT_NODE": 625,
    "../ELEMENT_NODE": 628,
    "../TEXT_NODE": 629,
    "./isNodeType": 639,
    dup: 42
  }],
  641: [function(t, e, i) {
    arguments[4][340][0].apply(i, arguments)
  }, {
    "./COMMENT_NODE": 624,
    "./internal/isNodeType": 639,
    dup: 340
  }],
  642: [function(t, e, i) {
    arguments[4][341][0].apply(i, arguments)
  }, {
    "./DOCUMENT_NODE": 626,
    "./internal/isNodeType": 639,
    dup: 341
  }],
  643: [function(t, e, i) {
    arguments[4][43][0].apply(i, arguments)
  }, {
    "./DOCUMENT_FRAGMENT_NODE": 625,
    "./internal/isNodeType": 639,
    dup: 43
  }],
  644: [function(t, e, i) {
    arguments[4][343][0].apply(i, arguments)
  }, {
    "./DOCUMENT_TYPE_NODE": 627,
    "./internal/isNodeType": 639,
    dup: 343
  }],
  645: [function(t, e, i) {
    arguments[4][44][0].apply(i, arguments)
  }, {
    "./ELEMENT_NODE": 628,
    "./internal/isNodeType": 639,
    dup: 44
  }],
  646: [function(t, e, i) {
    arguments[4][45][0].apply(i, arguments)
  }, {
    dup: 45
  }],
  647: [function(t, e, i) {
    arguments[4][346][0].apply(i, arguments)
  }, {
    dup: 346
  }],
  648: [function(t, e, i) {
    arguments[4][347][0].apply(i, arguments)
  }, {
    "./TEXT_NODE": 629,
    "./internal/isNodeType": 639,
    dup: 347
  }],
  649: [function(t, e, i) {
    arguments[4][46][0].apply(i, arguments)
  }, {
    "./internal/validate": 640,
    dup: 46
  }],
  650: [function(t, e, i) {
    arguments[4][349][0].apply(i, arguments)
  }, {
    "./internal/validate": 640,
    dup: 349
  }],
  651: [function(t, e, i) {
    var n = t("./ac-element-tracker/ElementTracker");
    e.exports = new n, e.exports.ElementTracker = n
  }, {
    "./ac-element-tracker/ElementTracker": 652
  }],
  652: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this.options = c.clone(u), this.options = "object" == typeof e ? c.extend(this.options, e) : this.options, this._scrollY = this._getScrollY(), this._windowHeight = this._getWindowHeight(), this.tracking = !1, this.elements = [], t && (Array.isArray(t) || o.isNodeList(t) || o.isElement(t)) && this.addElements(t), this.refreshAllElementStates = this.refreshAllElementStates.bind(this), this.refreshAllElementMetrics = this.refreshAllElementMetrics.bind(this), this.options.autoStart && this.start()
    }
    t("@marcom/ac-polyfills/Function/prototype.bind");
    var r = t("@marcom/ac-array"),
      o = t("@marcom/ac-dom-nodes"),
      s = {
        getDimensions: t("@marcom/ac-dom-metrics/getDimensions"),
        getPagePosition: t("@marcom/ac-dom-metrics/getPagePosition"),
        getScrollY: t("@marcom/ac-dom-metrics/getScrollY")
      },
      a = t("@marcom/ac-dom-events"),
      c = t("@marcom/ac-object"),
      l = t("./TrackedElement"),
      u = {
        autoStart: !1
      },
      h = n.prototype;
    h.destroy = function() {
      var t, e;
      for (this.stop(), t = 0, e = this.elements.length; t < e; t++) this.elements[t].destroy();
      this.elements = null, this.options = null
    }, h._registerElements = function(t) {
      t = [].concat(t), t.forEach(function(t) {
        if (this._elementInDOM(t)) {
          var e = new l(t);
          e.offsetTop = e.element.offsetTop, this.elements.push(e)
        }
      }, this)
    }, h._registerTrackedElements = function(t) {
      var e = [].concat(t);
      e.forEach(function(t) {
        this._elementInDOM(t.element) && (t.offsetTop = t.element.offsetTop, this.elements.push(t))
      }, this)
    }, h._elementInDOM = function(t) {
      var e = !1,
        i = document.getElementsByTagName("body")[0];
      return o.isElement(t) && i.contains(t) && (e = !0), e
    }, h._elementPercentInView = function(t) {
      return t.pixelsInView / t.height
    }, h._elementPixelsInView = function(t) {
      var e = t.top - this._scrollY,
        i = t.bottom - this._scrollY;
      return e > this._windowHeight || i < 0 ? 0 : Math.min(i, this._windowHeight) - Math.max(e, 0)
    }, h._ifInView = function(t, e) {
      e || t.trigger("enterview", t)
    }, h._ifAlreadyInView = function(t) {
      t.inView || t.trigger("exitview", t)
    }, h.addElements = function(t) {
      t = o.isNodeList(t) ? r.toArray(t) : [].concat(t), t.forEach(this.addElement, this)
    }, h.addElement = function(t) {
      var e = null;
      if (!o.isElement(t)) throw new TypeError("ElementTracker: " + t + " is not a valid DOM element");
      return e = new l(t), this._registerTrackedElements(e), this.refreshElementMetrics(e), this.refreshElementState(e), e
    }, h.removeElement = function(t) {
      var e, i = [];
      this.elements.forEach(function(e, n) {
        e !== t && e.element !== t || i.push(n)
      }), e = this.elements.filter(function(t, e) {
        return i.indexOf(e) < 0
      }), this.elements = e
    }, h.start = function() {
      this.tracking === !1 && (this.tracking = !0, a.addEventListener(window, "resize", this.refreshAllElementMetrics), a.addEventListener(window, "orientationchange", this.refreshAllElementMetrics), a.addEventListener(window, "scroll", this.refreshAllElementStates), this.refreshAllElementMetrics())
    }, h.stop = function() {
      this.tracking === !0 && (this.tracking = !1, a.removeEventListener(window, "resize", this.refreshAllElementMetrics), a.removeEventListener(window, "orientationchange", this.refreshAllElementMetrics), a.removeEventListener(window, "scroll", this.refreshAllElementStates))
    }, h.refreshAllElementMetrics = function(t, e) {
      "number" != typeof t && (t = this._getScrollY()), "number" != typeof e && (e = this._getWindowHeight()), this._scrollY = t, this._windowHeight = e, this.elements.forEach(this.refreshElementMetrics, this)
    }, h.refreshElementMetrics = function(t) {
      var e = s.getDimensions(t.element),
        i = s.getPagePosition(t.element);
      return t = c.extend(t, e, i), this.refreshElementState(t)
    }, h.refreshAllElementStates = function(t) {
      "number" != typeof t && (t = this._getScrollY()), this._scrollY = t, this.elements.forEach(this.refreshElementState, this)
    }, h.refreshElementState = function(t) {
      var e = t.inView;
      return t.pixelsInView = this._elementPixelsInView(t), t.percentInView = this._elementPercentInView(t), t.inView = t.pixelsInView > 0, t.inView && this._ifInView(t, e), e && this._ifAlreadyInView(t), t
    }, h._getWindowHeight = function() {
      return document.documentElement.clientHeight || window.innerHeight
    }, h._getScrollY = function() {
      return s.getScrollY()
    }, e.exports = n
  }, {
    "./TrackedElement": 653,
    "@marcom/ac-array": 617,
    "@marcom/ac-dom-events": 8,
    "@marcom/ac-dom-metrics/getDimensions": 24,
    "@marcom/ac-dom-metrics/getPagePosition": 25,
    "@marcom/ac-dom-metrics/getScrollY": 30,
    "@marcom/ac-dom-nodes": 633,
    "@marcom/ac-object": 804,
    "@marcom/ac-polyfills/Function/prototype.bind": void 0
  }],
  653: [function(t, e, i) {
    "use strict";

    function n(t) {
      if (!o.isElement(t)) throw new TypeError("TrackedElement: " + t + " is not a valid DOM element");
      s.call(this), this.element = t, this.inView = !1, this.percentInView = 0, this.pixelsInView = 0, this.offsetTop = 0, this.top = 0, this.right = 0, this.bottom = 0, this.left = 0, this.width = 0, this.height = 0
    }
    var r = t("@marcom/ac-object").create,
      o = t("@marcom/ac-dom-nodes"),
      s = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      a = s.prototype,
      c = n.prototype = r(a);
    c.destroy = function() {
      this.element = null, a.destroy.call(this)
    }, e.exports = n
  }, {
    "@marcom/ac-dom-nodes": 633,
    "@marcom/ac-event-emitter-micro": 168,
    "@marcom/ac-object": 804
  }],
  654: [function(t, e, i) {
    "use strict";

    function n(t) {
      r.call(this), this._initializeElement(t), s() && (this._updateViewport = this._updateViewport.bind(this), o(window, "resize", this._updateViewport), o(window, "orientationchange", this._updateViewport), this._retinaQuery = window.matchMedia(l), this._updateRetina(), this._retinaQuery.addListener && (this._updateRetina = this._updateRetina.bind(this), this._retinaQuery.addListener(this._updateRetina))), this._updateViewport()
    }
    t("@marcom/ac-polyfills/Function/prototype.bind"), t("@marcom/ac-polyfills/Object/keys"), t("@marcom/ac-polyfills/Object/create");
    var r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      o = t("@marcom/ac-dom-events/utils/addEventListener"),
      s = t("@marcom/ac-feature/mediaQueriesAvailable"),
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
    "@marcom/ac-dom-events/utils/addEventListener": 20,
    "@marcom/ac-event-emitter-micro": 168,
    "@marcom/ac-feature/mediaQueriesAvailable": 200,
    "@marcom/ac-polyfills/Function/prototype.bind": void 0,
    "@marcom/ac-polyfills/Object/create": void 0,
    "@marcom/ac-polyfills/Object/keys": void 0
  }],
  655: [function(t, e, i) {
    "use strict";
    var n = t("./ViewportEmitter");
    e.exports = new n
  }, {
    "./ViewportEmitter": 654
  }],
  656: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n, o, s, a) {
      if (7 !== arguments.length) throw new Error("Incorrect number of arguments passed to BaseComponent check the constructor or BaseComponent.call method - argument's should be (section, componentElement, componentName, currentBreakpoint, scrollPosition, windowHeight, index)");
      r.call(this), this.section = t, this.element = e, this.componentName = i, this.index = a, this.isEnabled = !0, this.rafWhenVisible = this.rafWhenVisible || !1
    }
    t("@marcom/ac-polyfills/Object/create"), t("@marcom/ac-polyfills/Element/prototype.classList");
    var r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      o = r.prototype,
      s = n.prototype = Object.create(r.prototype);
    n.prototype.constructor = n, s.destroy = function() {
      this.teardownEvents(), this.section = null, o.destroy.call(this)
    }, s.setupEvents = function() {}, s.teardownEvents = function() {}, s.onSectionWillAppear = function(t, e) {}, s.activate = function() {}, s.animateIn = function() {}, s.onRequestAnimationFrame = function() {}, s.deactivate = function() {}, s.onScroll = function(t, e, i) {}, s.onSectionWillDisappear = function(t, e) {}, s.onResizeDebounced = function(t, e, i) {}, s.onResizeImmediate = function(t, e, i) {}, s.onOrientationChange = function(t, e, i, n) {}, s.onBreakpoint = function(t, e, i, n) {}, s.onRetinaChange = function(t, e, i, n) {}, e.exports = n
  }, {
    "@marcom/ac-event-emitter-micro": 168,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0,
    "@marcom/ac-polyfills/Object/create": void 0
  }],
  657: [function(t, e, i) {
    "use strict";

    function n(t) {
      p.init(), this.name = this.name || "[NOT SET]", this._mainEl = r("main,.main"), this._sections = [], this._visibleSections = [], this._elementTracker = new c(null, {
        autoStart: !0
      }), this._currentSection = null, this._sectionUnderLocalNav = null, this._currentBreakpoint = l.viewport, this.isRetina = l.retina, this._cachedScrollY = this._getScrollY(!0), this._cachedWindowHeight = this._getWindowHeight(!0), this._rafId = -1, this._resizeTimeout = -1, this._resizeTimeoutDelay = this._resizeTimeoutDelay || 250, this.setupSections(), this.setupEvents(), this._updateSectionVisibility(this._getScrollY(), this._getWindowHeight()), this.setupLocalNavStyleChanger(), this._updateLocalNavTheme(this._getScrollY(), this._getWindowHeight()), this._onRequestAnimationFrame()
    }
    t("@marcom/ac-polyfills/Element/prototype.classList"), t("@marcom/ac-polyfills/Object/assign"), t("@marcom/ac-polyfills/Object/assign"), t("@marcom/ac-polyfills/console.log");
    var r = t("@marcom/ac-dom-traversal/querySelector"),
      o = t("@marcom/ac-dom-traversal/querySelectorAll"),
      s = t("@marcom/ac-dom-events/addEventListener"),
      a = t("@marcom/ac-dom-events/removeEventListener"),
      c = t("@marcom/ac-element-tracker").ElementTracker,
      l = t("@marcom/ac-viewport-emitter");
    l.viewport || (console.log("Jetpack Error: Required module `ac-viewport-emitter` not initialized properly (missing required css styles). Please see `ac-viewport-emitter` documentation."), console.log("Jetpack Error: Breakpoint will always be 'large' and no `onBreakPoint` events will be fired"), l = t("../utils/ViewportEmitterStub")());
    var u = t("./LocalNavStyleChanger"),
      h = t("../utils/Page"),
      d = t("../model/SectionMap"),
      m = t("../model/DataAttributes"),
      p = t("../model/EnabledFeatures"),
      f = n.prototype;
    f.destroy = function() {
      for (var t = 0, e = this._sections.length; t < e; t++) this._sections[t].destroy();
      this.teardownEvents(), this._elementTracker.destroy(), this._elementTracker = null, this._sections = null, this._currentSection = null, this._sectionUnderLocalNav = null, this._visibleSections = null, this._mainEl = null
    }, f.setupEvents = function() {
      this._onScroll = this._onScroll.bind(this), this._onBreakpoint = this._onBreakpoint.bind(this), this._onRetinaChange = this._onRetinaChange.bind(this), this._onPageDidAppear = this._onPageDidAppear.bind(this), this._onResizeImmediate = this._onResizeImmediate.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), this._onPageWillDisappear = this._onPageWillDisappear.bind(this), this._onRequestAnimationFrame = this._onRequestAnimationFrame.bind(this), this.performDeepMetricsRefresh = this.performDeepMetricsRefresh.bind(this), s(window, "scroll", this._onScroll), s(window, "resize", this._onResizeImmediate), s(window, "orientationchange", this._onOrientationChange), l.on("change", this._onBreakpoint), l.on("retinachange", this._onRetinaChange), h.on(h.DEEP_REFRESH_ALL_METRICS, this.performDeepMetricsRefresh)
    }, f.teardownEvents = function() {
      a(window, "scroll", this._onScroll), a(window, "resize", this._onResizeImmediate), a(window, "orientationchange", this._onOrientationChange), l.off("change", this._onBreakpoint), l.off("retinachange", this._onRetinaChange), h.off(h.DEEP_REFRESH_ALL_METRICS, this.performDeepMetricsRefresh), this._elementTracker.stop(), clearTimeout(this._resizeTimeout), cancelAnimationFrame(this._rafId)
    }, f.setupSections = function() {
      for (var t = o("section,.section,[data-section-type]", this._mainEl), e = this._getScrollY(), i = this._getCurrentBreakpoint(), n = this._getWindowHeight(), r = [], s = 0, a = t.length; s < a; s++) {
        var c = t[s];
        if (c.parentNode === this._mainEl) {
          var l = this._elementTracker.addElement(c);
          this._elementTracker.refreshElementState(l);
          var u = c.hasAttribute(m.SECTION_TYPE) ? c.getAttribute(m.SECTION_TYPE) : "BaseSection";
          if ("" === u && (u = "BaseSection"), !d.hasOwnProperty(u)) throw "BasePage::setupSections parsing '#" + c.id + " ." + c.className + "' no section type '" + u + "'found!";
          var h = d[u],
            p = new h(c, l, i, e, n, s);
          p.setupEvents(), this._sections.push(p)
        } else c.hasAttribute(m.SECTION_TYPE) && console.error("BasePage::setupSections FOUND NESTED data-section-type", c), r.push(c)
      }
    }, f.setupLocalNavStyleChanger = function() {
      if (u.setCurrentSection(this._currentSection), p.PAGE_JUMP) {
        var t = this._mainEl.getAttribute("data-page-type");
        u.setCurrentPage(t)
      }
    }, f._activateSection = function(t) {
      this._currentSection !== t && (this._currentSection && this._currentSection.deactivate(), this._currentSection = t, this._currentSection.activate())
    }, f._updateSectionVisibility = function(t, e) {
      for (var i = this._sections[0], n = [], r = 0, o = 0, s = this._sections.length; o < s; o++) {
        var a = this._sections[o],
          c = a.trackedElement.pixelsInView;
        a.isFixedHero && (c = e - t), c > r && (i = a, r = c), c > 1e-6 && n.push(a)
      }
      for (o = 0, s = Math.max(this._visibleSections.length, n.length); o < s; o++) this._visibleSections[o] && n.indexOf(this._visibleSections[o]) === -1 && this._visibleSections[o].onSectionWillDisappear(t, e), n[o] && this._visibleSections.indexOf(n[o]) === -1 && n[o].onSectionWillAppear(t, e);
      this._visibleSections = n, this._activateSection(i)
    }, f._updateLocalNavTheme = function(t, e) {
      this._sectionUnderLocalNav = this._visibleSections[0];
      for (var i = 0, n = this._visibleSections.length; i < n; i++) t + u.height > this._visibleSections[i].scrollToPosition && (this._sectionUnderLocalNav = this._visibleSections[i]);
      this._sectionUnderLocalNav && u.setCurrentSection(this._sectionUnderLocalNav)
    }, f._onPageDidAppear = function(t) {}, f._onPageWillDisappear = function(t) {
      this.destroy()
    }, f._onBreakpoint = function(t) {
      var e = t.to,
        i = t.from;
      this._currentBreakpoint = e;
      var n = this._getScrollY(),
        r = this._getWindowHeight();
      this._elementTracker.refreshAllElementMetrics(n, r);
      for (var o = 0, s = this._sections.length; o < s; o++) this._sections[o].onBreakpoint(e, i, n, r)
    }, f._onRetinaChange = function(t) {
      var e = this._getScrollY(!0),
        i = this._getWindowHeight(!0);
      this.isRetina = l.retina;
      var n = this._currentBreakpoint;
      this._elementTracker.refreshAllElementMetrics(e, i);
      for (var r = 0, o = this._sections.length; r < o; r++) this._sections[r].onRetinaChange(this.isRetina, n, e, i)
    }, f._onScroll = function(t) {
      var e = this._getScrollY(!0),
        i = this._getWindowHeight();
      this._updateSectionVisibility(e, i), this._updateLocalNavTheme(e, i);
      for (var n = 0, r = this._visibleSections.length; n < r; n++) this._visibleSections[n].onScroll(t, e, i)
    }, f._onResizeDebounced = function(t) {
      for (var e = this._getScrollY(), i = this._getWindowHeight(), n = !1, r = 0, o = this._sections.length; r < o; r++) !n && this._sections[r].onResize && (console.warn("Jetpack: onResize has been removed please use `onResizeImmediate` or `onResizeDebounced` instead."), n = !0), this._sections[r].onResizeDebounced(t, e, i);
      this._updateSectionVisibility(e, i), this._updateLocalNavTheme(e, i)
    }, f.performDeepMetricsRefresh = function() {
      var t = this._getScrollY(),
        e = this._getWindowHeight();
      this._elementTracker.refreshAllElementMetrics(t, e);
      for (var i = 0, n = this._sections.length; i < n; i++) this._sections[i].elementEngagement.refreshAllElementMetrics(t, e), this._sections[i].updateScrollToPosition();
      var t = this._getScrollY(),
        e = this._getWindowHeight();
      this._updateSectionVisibility(t, e), this._updateLocalNavTheme(t, e)
    }, f._onOrientationChange = function(t) {
      for (var e = this._getScrollY(!0), i = this._getWindowHeight(!0), n = t.orientation, r = 0, o = this._sections.length; r < o; r++) this._sections[r].onOrientationChange(t, n, e, i)
    }, f._onResizeImmediate = function(t) {
      for (var e = this._getScrollY(), i = this._getWindowHeight(!0), n = !1, r = 0, o = this._sections.length; r < o; r++) !n && this._sections[r].onResizeWillBeCalledAfterDelay && (console.warn("Jetpack: onResizeWillBeCalledAfterDelay has been removed please use `onResizeImmediate` or `onResizeDebounced` instead."), n = !0), this._sections[r].onResizeImmediate(t, e, i);
      window.clearTimeout(this._resizeTimeout), this._resizeTimeout = window.setTimeout(this._onResizeDebounced.bind(this, t), this._resizeTimeoutDelay)
    }, f._onRequestAnimationFrame = function() {
      this._rafId = requestAnimationFrame(this._onRequestAnimationFrame);
      for (var t = 0, e = this._visibleSections.length; t < e; t++) {
        var i = this._visibleSections[t];
        (i.rafWhenVisible || i.isActive) && i.onRequestAnimationFrame()
      }
    }, f._getScrollY = function(t) {
      return t && (this._cachedScrollY = window.pageYOffset || (document.documentElement || document.body).scrollTop), this._cachedScrollY
    }, f._getWindowHeight = function(t) {
      return t && (this._cachedWindowHeight = document.documentElement.clientHeight || window.innerHeight), this._cachedWindowHeight
    }, f._getVisibleBottomOfPage = function() {
      return this._getScrollY() + this._getWindowHeight()
    }, f._getCurrentBreakpoint = function() {
      return this._currentBreakpoint
    }, e.exports = n
  }, {
    "../model/DataAttributes": 661,
    "../model/EnabledFeatures": 662,
    "../model/SectionMap": 663,
    "../utils/Page": 664,
    "../utils/ViewportEmitterStub": 665,
    "./LocalNavStyleChanger": 659,
    "@marcom/ac-dom-events/addEventListener": 6,
    "@marcom/ac-dom-events/removeEventListener": 15,
    "@marcom/ac-dom-traversal/querySelector": 61,
    "@marcom/ac-dom-traversal/querySelectorAll": 62,
    "@marcom/ac-element-tracker": 651,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0,
    "@marcom/ac-polyfills/Object/assign": void 0,
    "@marcom/ac-polyfills/console.log": void 0,
    "@marcom/ac-viewport-emitter": 655
  }],
  658: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n, r, o) {
      if (6 !== arguments.length) throw new Error("Incorrect number of arguments passed to BaseSection");
      u.call(this), this.element = t, this.trackedElement = e, this.elementEngagement = new s(null, {
        autoStart: !1
      }), this.rafWhenVisible = this.rafWhenVisible || !1, this.index = o, this.isVisible = this.trackedElement.pixelsInView > 0, this.hasAnimatedIn = !1, this.isActive = !1, this.isFixedHero = !1, this.cachedBreakpoint = i, this.cachedScrollPosition = n, this.cachedWindowHeight = r, this.name = this.name || this.element.className, this.scrollToPosition = 0, this.updateScrollToPosition(), this._components = [], this.setupComponents(i, n, r), this.setIsFixedHero(), this.performDeprecatedMethodCheck()
    }
    t("@marcom/ac-polyfills/Object/create"), t("@marcom/ac-polyfills/Element/prototype.classList");
    var r = t("@marcom/ac-console"),
      o = t("@marcom/ac-dom-metrics"),
      s = t("@marcom/ac-element-engagement").ElementEngagement,
      a = t("@marcom/ac-dom-traversal/querySelectorAll"),
      c = t("./../model/DataAttributes"),
      l = t("./../model/ComponentMap"),
      u = (t("./BaseComponent"), t("@marcom/ac-event-emitter-micro").EventEmitterMicro),
      h = u.prototype,
      d = n.prototype = Object.create(u.prototype);
    n.prototype.constructor = n, d.performDeprecatedMethodCheck = function() {
      if (this.onViewWillAppear) throw new Error("Section.onViewWillAppear is now `onSectionWillAppear`, please update your BaseSection subclass");
      if (this.onViewWillDisappear) throw new Error("Section.onViewWillDisappear is now `onSectionWillDisappear`, please update your BaseSection subclass");
      return !0
    }, d.destroy = function() {
      this.teardownEvents(), this.elementEngagement.stop(), this.elementEngagement = null;
      for (var t = 0, e = this._components.length; t < e; t++) this._components[t].destroy();
      this._components = null, this.trackedElement = null, this.element = null, h.destroy.call(this)
    }, d.setupEvents = function() {
      for (var t = 0, e = this._components.length; t < e; t++) this._components[t].setupEvents()
    }, d.teardownEvents = function() {
      for (var t = 0, e = this._components.length; t < e; t++) this._components[t].teardownEvents()
    }, d.setupComponents = function() {
      var t = a("[" + c.COMPONENT_LIST + "]", this.element);
      this.element.hasAttribute(c.COMPONENT_LIST) && t.push(this.element);
      for (var e = 0; e < t.length; e++) {
        var i = t[e],
          n = i.getAttribute(c.COMPONENT_LIST);
        if (n.indexOf("|") !== -1) throw "BaseSection::setupComponents component list should be space delimited, pipe character is no longer supported. Error at: '" + n + "'";
        for (var r = n.split(" "), o = 0, s = r.length; o < s; o++) {
          var l = r[o];
          "" !== l && " " !== l && this.addComponentOfType(l, i)
        }
        setTimeout(this.elementEngagement.refreshAllElementStates.bind(this.elementEngagement), 100)
      }
    }, d.addComponentOfType = function(t, e) {
      if (!l.hasOwnProperty(t)) throw "BaseSection::setupComponents parsing '#" + e.id + " ." + e.className + "' no component type '" + t + "'found!";
      var i = l[t];
      if (!this.componentIsSupported(i, t)) return void r.log("BaseSection::setupComponents unsupported component '" + t + "'. Reason: '" + t + ".IS_SUPPORTED' returned false");
      var n = new i(this, e, t, this.cachedBreakpoint, this.cachedScrollPosition, this.cachedWindowHeight, this._components.length);
      this.rafWhenVisible = n.rafWhenVisible || this.rafWhenVisible, this._components.push(n)
    }, d.removeComponentOfType = function(t) {
      var e = this.getComponentOfType(t);
      null !== e && this.removeComponent(e)
    }, d.removeComponent = function(t) {
      var e = this._components.indexOf(t);
      e !== -1 && (this._components.splice(e, 1), t.destroy())
    }, d.activate = function() {
      this.element.classList.add("active");
      for (var t = 0, e = this._components.length; t < e; t++) this._components[t].isEnabled && this._components[t].activate();
      this.isActive = !0, this.hasAnimatedIn || (this.element.classList.add("animated"), this.animateIn(), this.hasAnimatedIn = !0)
    }, d.deactivate = function() {
      this.element.classList.remove("active"), this.isActive = !1;
      for (var t = 0, e = this._components.length; t < e; t++) this._components[t].isEnabled && this._components[t].deactivate()
    }, d.animateIn = function() {
      for (var t = 0, e = this._components.length; t < e; t++) this._components[t].isEnabled && this._components[t].animateIn()
    }, d.onRequestAnimationFrame = function() {
      for (var t = 0, e = this._components.length; t < e; t++) {
        var i = this._components[t];
        i.isEnabled && (i.rafWhenVisible || this.isActive) && i.onRequestAnimationFrame()
      }
    }, d.onResizeImmediate = function(t, e, i) {
      this.cachedScrollPosition = e, this.cachedWindowHeight = i;
      for (var n = !1, r = 0, o = this._components.length; r < o; r++) this._components[r].isEnabled && (!n && this._components[r].onResizeWillBeCalledAfterDelay && (console.warn("Jetpack: onResizeWillBeCalledAfterDelay has been removed please use `onResizeImmediate` or `onResizeDebounced` instead."), n = !0), this._components[r].onResizeImmediate(t, e, i))
    }, d.onResizeDebounced = function(t, e, i) {
      this.updateScrollToPosition();
      for (var n = !1, r = 0, o = this._components.length; r < o; r++) this._components[r].isEnabled && (!n && this._components[r].onResize && (console.warn("Jetpack: onResize has been removed please use `onResizeImmediate` or `onResizeDebounced` instead."), n = !0), this._components[r].onResizeDebounced(t, e, i));
      this.elementEngagement.refreshAllElementMetrics(e, i)
    }, d.onBreakpoint = function(t, e, i, n) {
      this.cachedBreakpoint = t;
      for (var r = 0, o = this._components.length; r < o; r++) this._components[r].isEnabled && this._components[r].onBreakpoint(t, e, i, n);
      this.elementEngagement.refreshAllElementMetrics(i, n)
    }, d.onRetinaChange = function(t, e, i, n) {
      for (var r = 0, o = this._components.length; r < o; r++) this._components[r].isEnabled && this._components[r].onRetinaChange(t, e, i, n);
      this.elementEngagement.refreshAllElementMetrics(i, n)
    }, d.onOrientationChange = function(t, e, i, n) {
      this.cachedScrollPosition = i, this.cachedWindowHeight = n;
      for (var r = 0, o = this._components.length; r < o; r++) this._components[r].isEnabled && this._components[r].onOrientationChange(t, e, i, n)
    }, d.onScroll = function(t, e, i) {
      this.cachedScrollPosition = e, this.elementEngagement.refreshAllElementStates(e);
      for (var n = 0, r = this._components.length; n < r; n++) this._components[n].isEnabled && this._components[n].onScroll(t, e, i)
    }, d.onSectionWillAppear = function(t, e) {
      this.cachedScrollPosition = t, this.isVisible = !0, this.elementEngagement.refreshAllElementStates(t);
      for (var i = 0, n = this._components.length; i < n; i++) this._components[i].onSectionWillAppear(t, e)
    }, d.onSectionWillDisappear = function(t, e) {
      this.cachedScrollPosition = t, this.isVisible = !1;
      for (var i = 0, n = this._components.length; i < n; i++) this._components[i].onSectionWillDisappear(t, e)
    }, d.getComponentOfType = function(t) {
      if (!l.hasOwnProperty(t)) throw "BaseSection::getComponentOfType no component type '" + t + "' exist in ComponentMap!";
      for (var e = 0, i = this._components.length; e < i; e++)
        if (this._components[e].componentName === t) return this._components[e];
      return null
    }, d.getAllComponentsOfType = function(t) {
      if (!l.hasOwnProperty(t)) throw "BaseSection::getAllComponentsOfType no component type '" + t + "' exist in ComponentMap!";
      for (var e = [], i = 0, n = this._components.length; i < n; i++) this._components[i].componentName === t && e.push(this._components[i]);
      return e
    }, d.updateScrollToPosition = function() {
      return this.scrollToPosition = o.getPagePosition(this.element).top
    }, d.setIsFixedHero = function() {
      if (0 !== this.index) this.isFixedHero = !1;
      else {
        var t = window.getComputedStyle(this.element);
        this.isFixedHero = "fixed" === t.position
      }
    }, n.prototype.componentIsSupported = function(t, e) {
      var i = t.IS_SUPPORTED;
      if (void 0 === i) return !0;
      if ("function" != typeof i) return console.error('BaseSection::setupComponents error in "' + e + '".IS_SUPPORTED - it should be a function which returns true/false'), !0;
      var n = t.IS_SUPPORTED();
      return void 0 === n ? (console.error('BaseSection::setupComponents error in "' + e + '".IS_SUPPORTED - it should be a function which returns true/false'), !0) : n
    }, e.exports = n
  }, {
    "./../model/ComponentMap": 660,
    "./../model/DataAttributes": 661,
    "./BaseComponent": 656,
    "@marcom/ac-console": 612,
    "@marcom/ac-dom-metrics": 32,
    "@marcom/ac-dom-traversal/querySelectorAll": 62,
    "@marcom/ac-element-engagement": 614,
    "@marcom/ac-event-emitter-micro": 168,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0,
    "@marcom/ac-polyfills/Object/create": void 0
  }],
  659: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Element/prototype.classList");
    var n = t("./../model/DataAttributes"),
      r = !1,
      o = function() {
        if (r) throw new Error("Do not call the constructor, use LocalNavStyleChanger.initialize(settings)");
        r = !0, this._currentTheme = "", this.defaultTheme = "theme-light", this._currentPageNavLink = null, this._section = null, this.elementToApplyClassesAgainst = null, this.height = 0
      },
      s = o.prototype;
    s.initialize = function(t) {
      this.elementToApplyClassesAgainst = t.elementToApplyClassesAgainst, this.sectionThemeMap = t.sectionThemeMap, this.defaultTheme = t.defaultTheme, this.height = t.localNavHeight
    }, s.setCurrentPage = function(t) {
      var e = document.querySelector(".localnav-link[" + n.JUMP_SECTION_NAME + "=" + t + "]");
      e !== this._currentPageNavLink && (this._currentPageNavLink && this._currentPageNavLink.classList.remove("current"), e && (e.classList.add("current"), this._currentPageNavLink = e))
    }, s.setCurrentSection = function(t) {
      if (null !== this.elementToApplyClassesAgainst && (!this._section || this._section !== t)) {
        this._section = t;
        for (var e = 0, i = this._section.element.classList.length; e < i; e++) {
          var n = this._section.element.classList[e];
          if (this.sectionThemeMap.hasOwnProperty(n)) return void this.setTheme(this.sectionThemeMap[n])
        }
        this.setTheme(this.defaultTheme)
      }
    }, s.setTheme = function(t) {
      if (this._currentTheme !== t) {
        for (var e in this.sectionThemeMap) {
          var i = this.sectionThemeMap[e];
          i !== t && this.elementToApplyClassesAgainst.classList.remove(i)
        }
        this.elementToApplyClassesAgainst.classList.add(t), this._currentTheme = t
      }
    }, s.removeThemes = function() {
      this._currentTheme = null;
      for (var t in this.sectionThemeMap) this.elementToApplyClassesAgainst.classList.remove(this.sectionThemeMap[t])
    }, e.exports = new o
  }, {
    "./../model/DataAttributes": 661,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0
  }],
  660: [function(t, e, i) {
    "use strict";
    e.exports = {
      BaseComponent: t("../core/BaseComponent")
    }
  }, {
    "../core/BaseComponent": 656
  }],
  661: [function(t, e, i) {
    "use strict";
    e.exports = {
      PAGE_TYPE: "data-page-type",
      SECTION_TYPE: "data-section-type",
      JUMP_SECTION_NAME: "data-page-jump-name",
      COMPONENT_LIST: "data-component-list"
    }
  }, {}],
  662: [function(t, e, i) {
    "use strict";
    var n = {
      isDesktop: t("@marcom/ac-feature/isDesktop"),
      isRetina: t("@marcom/ac-feature/isRetina")
    };
    e.exports = {
      TOUCH: void 0,
      SVG: void 0,
      PAGE_JUMP: void 0,
      IS_IE8: void 0,
      IS_DESKTOP: void 0,
      IS_RETINA: void 0,
      init: function() {
        var t = document.getElementsByTagName("html")[0];
        this.TOUCH = t.classList.contains("touch"), this.SVG = t.classList.contains("svg"), this.PAGE_JUMP = t.classList.contains("pageJump"), this.IS_IE8 = t.classList.contains("ie8"), this.IS_DESKTOP = n.isDesktop(), this.IS_RETINA = n.isRetina()
      },
      extend: function(t) {
        if (!t.hasOwnProperty("init") || "function" != typeof t.init) throw new TypeError("The object extended Jetpack.model.EnabledFeatures must contain an init function");
        var e = this.init,
          i = t.init,
          n = Object.assign(this, t);
        return n.init = function() {
          this.HAS_INITIALIZED || (this.HAS_INITIALIZED = !0, e.call(n), i.call(n))
        }, n
      },
      HAS_INITIALIZED: !1
    }
  }, {
    "@marcom/ac-feature/isDesktop": 194,
    "@marcom/ac-feature/isRetina": 196
  }],
  663: [function(t, e, i) {
    "use strict";
    e.exports = {
      BaseSection: t("../core/BaseSection")
    }
  }, {
    "../core/BaseSection": 658
  }],
  664: [function(t, e, i) {
    "use strict";

    function n() {
      r.call(this)
    }
    var r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      o = n.prototype = Object.create(r.prototype);
    n.prototype.constructor = n, o.deepRefreshAllElementMetrics = function() {
      this.trigger(n.prototype.DEEP_REFRESH_ALL_METRICS)
    }, o.DEEP_REFRESH_ALL_METRICS = "page.deep_refresh_all_metrics", e.exports = new n
  }, {
    "@marcom/ac-event-emitter-micro": 168
  }],
  665: [function(t, e, i) {
    "use strict";
    e.exports = function() {
      var t;
      return window.ViewportEmitterTestProxy ? t = window.ViewportEmitterTestProxy : (t = {}, t.viewport = "large", t.on = t.off = function() {}), t
    }
  }, {}],
  666: [function(t, e, i) {
    "use strict";
    e.exports = {
      WordJoiner: t("./ac-kr-word-joiner/WordJoiner")
    }
  }, {
    "./ac-kr-word-joiner/WordJoiner": 667
  }],
  667: [function(t, e, i) {
    "use strict";

    function n(t) {
      this.options = s(l, t), this._treeWalkers = [], this.rootElements = []
    }
    var r = t("./isOnlyWhitespace"),
      o = t("./createTreeWalker"),
      s = t("@marcom/ac-object/defaults"),
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
        o = t.length;
      for (e = e || a; n < o;) i += t[n], n < o - 1 && !r(t[n + 1]) && !r(t[n]) && (i += e), n += 1;
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
        for (var e = t.nextNode(); e;) e.data = n.joinify(e.data, this.options.joinerCharacter), e = t.nextNode()
      }, this)
    }, u._createTreeWalkers = function() {
      var t = [];
      return this.rootElements && this.rootElements.length > 0 && this.rootElements.forEach(function(e) {
        t.push(o(e))
      }, this), t
    }, e.exports = n
  }, {
    "./createTreeWalker": 668,
    "./isOnlyWhitespace": 669,
    "@marcom/ac-object/defaults": 807
  }],
  668: [function(t, e, i) {
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
    "./isOnlyWhitespace": 669
  }],
  669: [function(t, e, i) {
    "use strict";

    function n(t) {
      return /^\s*$/.test(t)
    }
    e.exports = n
  }, {}],
  670: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i) {
      return Math.max(e, Math.min(i, t))
    }
  }, {}],
  671: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i) {
      return t + (e - t) * i
    }
  }, {}],
  672: [function(t, e, i) {
    "use strict";
    var n = t("./lerp"),
      r = t("./normalize");
    e.exports = function(t, e, i, o, s) {
      return n(o, s, r(t, e, i))
    }
  }, {
    "./lerp": 671,
    "./normalize": 673
  }],
  673: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e, i) {
      return (t - e) / (i - e)
    }
  }, {}],
  674: [function(t, e, i) {
    "use strict";
    var n = t("./clamp"),
      r = t("./normalize");
    e.exports = function(t, e, i) {
      var o = n(r(i, t, e), 0, 1);
      return o * o * (3 - 2 * o)
    }
  }, {
    "./clamp": 670,
    "./normalize": 673
  }],
  675: [function(t, e, i) {
    arguments[4][251][0].apply(i, arguments)
  }, {
    "./ac-ajax/Ajax": 676,
    "./ac-ajax/Request": 677,
    dup: 251
  }],
  676: [function(t, e, i) {
    arguments[4][252][0].apply(i, arguments)
  }, {
    "./Request": 677,
    "./URLParser": 678,
    "./XDomain-request": 679,
    dup: 252
  }],
  677: [function(t, e, i) {
    arguments[4][253][0].apply(i, arguments)
  }, {
    dup: 253
  }],
  678: [function(t, e, i) {
    arguments[4][254][0].apply(i, arguments)
  }, {
    dup: 254
  }],
  679: [function(t, e, i) {
    arguments[4][255][0].apply(i, arguments)
  }, {
    "./Request": 677,
    dup: 255
  }],
  680: [function(t, e, i) {
    arguments[4][220][0].apply(i, arguments)
  }, {
    "./ac-event-emitter/EventEmitter": 681,
    dup: 220
  }],
  681: [function(t, e, i) {
    arguments[4][221][0].apply(i, arguments)
  }, {
    dup: 221
  }],
  682: [function(t, e, i) {
    ! function(t, n) {
      "object" == typeof i && i ? e.exports = n : "function" == typeof define && define.amd ? define(n) : t.Deferred = n
    }(this, function() {
      "use strict";
      var t, e, i, n, r, o, s, a, c = {};
      t = {
        0: "pending",
        1: "resolved",
        2: "rejected"
      }, e = function(t, e) {
        var i, n, r, o, s;
        if (0 !== this._status) return console && console.warn && console.warn("Trying to fulfill more than once."), !1;
        for (this.data = e, n = this.pending, r = n.length, i = 0; i < r; i++) o = n[i], o[t] && (s = o[t](e)), "object" == typeof s && s.hasOwnProperty("then") && s.hasOwnProperty("status") ? s.then(function(t) {
          o.deferred.resolve(t)
        }, function(t) {
          o.deferred.reject(t)
        }, function(t) {
          o.deferred.progress(t)
        }) : o.deferred[t](s || void 0);
        return "progress" !== t && (n = []), !0
      }, o = function(t, e) {
        this.then = t, this.status = e
      }, s = o.prototype, a = function(t) {
        return t
      }, s.success = function(t, e) {
        return this.then(t.bind(e), a, a)
      }, s.fail = function(t, e) {
        return this.then(a, t.bind(e), a)
      }, s.progress = function(t, e) {
        return this.then(a, a, t.bind(e))
      }, n = function(t) {
        return "function" != typeof t ? function() {} : t
      }, i = function(t, e, i) {
        this.resolve = n(t), this.reject = n(e), this.progress = n(i), this.deferred = new r
      }, r = function() {
        this.pending = [], this._status = 0, this._promise = new o(this.then.bind(this), this.status.bind(this))
      }, r.prototype = {
        status: function() {
          return t[this._status]
        },
        promise: function() {
          return this._promise
        },
        progress: function(t) {
          return e.call(this, "progress", t), this._promise
        },
        resolve: function(t) {
          return e.call(this, "resolve", t), 0 === this._status && (this._status = 1), this._promise
        },
        reject: function(t) {
          return e.call(this, "reject", t), 0 === this._status && (this._status = 2), this._promise
        },
        then: function(t, e, n) {
          var r, o;
          return o = new i(t, e, n), 0 === this._status ? this.pending.push(o) : 1 === this._status && "function" == typeof t ? (r = t(this.data), "object" == typeof r && r.hasOwnProperty("then") && r.hasOwnProperty("status") ? r.then(function(t) {
            o.deferred.resolve(t)
          }, function(t) {
            o.deferred.reject(t)
          }, function(t) {
            o.deferred.progress(t)
          }) : o.deferred.resolve(r)) : 2 === this._status && "function" == typeof e && (r = e(this.data), o.deferred.reject(r)), o.deferred.promise()
        }
      };
      var l = function() {
        var t, e, i, n, o;
        return t = [].slice.call(arguments), e = new r, i = 0, n = function(n) {
          i--;
          var r = t.indexOf(this);
          t[r] = n, 0 === i && e.resolve(t)
        }, o = function(t) {
          e.reject(t)
        }, t.forEach(function(t) {
          t.then && i++
        }), t.forEach(function(t) {
          t.then && t.then(n.bind(t), o)
        }), e.promise()
      };
      return r.when = l, c.Deferred = r, c
    }())
  }, {}],
  683: [function(t, e, i) {
    "use strict";

    function n() {}
    n.prototype = {
      resolve: function() {
        return this._defer.resolve.apply(this._defer, Array.prototype.slice.call(arguments)), this.promise()
      },
      reject: function() {
        return this._defer.reject.apply(this._defer, Array.prototype.slice.call(arguments)), this.promise()
      },
      progress: function() {
        var t = "ac-defer.progress is deprecated since it is not part of the A+ spec. Recommend using ac-event-emitter for progress signaling";
        return console.warn(t), this._defer.progress.apply(this._defer, Array.prototype.slice.call(arguments)), this.promise()
      },
      then: function() {
        return this._defer.then.apply(this._defer, Array.prototype.slice.call(arguments)), this.promise()
      },
      promise: function() {
        return this._defer.promise.apply(this._defer, Array.prototype.slice.call(arguments))
      }
    }, e.exports = n
  }, {}],
  684: [function(t, e, i) {
    "use strict";

    function n() {
      this._defer = new o
    }
    var r = new(t("./ac-deferred/Deferred")),
      o = t("smartsign-deferred").Deferred;
    n.prototype = r, e.exports.join = function() {
      return o.when.apply(null, [].slice.call(arguments))
    }, e.exports.all = function(t) {
      return o.when.apply(null, t)
    }, e.exports.Deferred = n
  }, {
    "./ac-deferred/Deferred": 683,
    "smartsign-deferred": 682
  }],
  685: [function(t, e, i) {
    t("@marcom/ac-polyfills"), e.exports.Asset = t("./ac-asset-loader/AssetLoader/Asset"), e.exports.Asset.Ajax = t("./ac-asset-loader/AssetLoader/Asset/Ajax"), e.exports.Asset.Ajax.JSON = t("./ac-asset-loader/AssetLoader/Asset/Ajax/JSON"), e.exports.Asset.Img = t("./ac-asset-loader/AssetLoader/Asset/Img"), e.exports.Asset.Video = t("./ac-asset-loader/AssetLoader/Asset/Video"), e.exports.Asset.Binary = t("./ac-asset-loader/AssetLoader/Asset/Binary"), e.exports.Asset.Binary.Chunk = t("./ac-asset-loader/AssetLoader/Asset/Binary/Chunk"), e.exports.AssetLoader = t("./ac-asset-loader/AssetLoader"), e.exports.AssetLoader.Queue = t("./ac-asset-loader/AssetLoader/Queue")
  }, {
    "./ac-asset-loader/AssetLoader": 686,
    "./ac-asset-loader/AssetLoader/Asset": 687,
    "./ac-asset-loader/AssetLoader/Asset/Ajax": 688,
    "./ac-asset-loader/AssetLoader/Asset/Ajax/JSON": 689,
    "./ac-asset-loader/AssetLoader/Asset/Binary": 690,
    "./ac-asset-loader/AssetLoader/Asset/Binary/Chunk": 691,
    "./ac-asset-loader/AssetLoader/Asset/Img": 692,
    "./ac-asset-loader/AssetLoader/Asset/Video": 695,
    "./ac-asset-loader/AssetLoader/Queue": 696,
    "@marcom/ac-polyfills": void 0
  }],
  686: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this.options = o.defaults(d, e || {});
      var i = this._generateAssets(t);
      this._timeoutDuration = this.options.timeout, this._timeout = null, this._proxyListeners(), this.add(i, this.options)
    }
    var r, o = t("@marcom/ac-object"),
      s = t("@marcom/ac-event-emitter").EventEmitter,
      a = t("./AssetLoader/Asset/Ajax"),
      c = t("./AssetLoader/Asset/Ajax/JSON"),
      l = t("./AssetLoader/Asset/Img"),
      u = (t("./AssetLoader/Asset/Video"), t("../utils/destroy")),
      h = t("./AssetLoader/Queue"),
      d = {};
    r = n.prototype = new s, r.load = function() {
      return this._timeoutDuration && (this._timeout = window.setTimeout(this._onTimeout.bind(this), this._timeoutDuration)), this._queue.start()
    }, r._clearTimeout = function() {
      window.clearTimeout(this._timeout), this._timeout = null
    }, r.pause = function() {
      return this._clearTimeout(), this._queue.pause()
    }, r.destroy = function() {
      u(this, !0)
    }, r.add = function(t) {
      return Array.isArray(t) || (t = [t]), t = this._generateAssets(t), !this._queue || this._queue.loaded ? (this._queue && this._queue.destroy(), this._queue = new h(t, this.options), void this._bindQueueListeners()) : void this._queue.add(t)
    }, r._onTimeout = function() {
      this._queue.abort(), this._queue.destroy(), this.trigger("timeout")
    }, r._generateAssets = function(t) {
      void 0 === this._boundGenerateAsset && (this._boundGenerateAsset = this._generateAsset.bind(this)), t = [].concat(t);
      var e = t.map(this._boundGenerateAsset);
      return e
    }, r._generateAsset = function(t, e) {
      return n.isValidAsset(t) ? (t.index = e, t) : "string" != typeof t || "" === t ? null : t.match(/\.json$/) ? new c(t, e) : t.match(/\.(xml|txt)$/) ? new a(t, e) : new l(t, e)
    }, r._proxyListeners = function() {
      this._boundOnResolved = this._onResolved.bind(this), this._boundOnRejected = this._onRejected.bind(this), this._boundOnProgress = this._onProgress.bind(this)
    }, r._bindQueueListeners = function() {
      this._queue.on("resolved", this._boundOnResolved), this._queue.on("rejected", this._boundOnRejected), this._queue.on("progress", this._boundOnProgress)
    }, r._onResolved = function(t) {
      this._clearTimeout(), this.trigger("loaded", t)
    }, r._onRejected = function(t) {
      this.trigger("error", t)
    }, r._onProgress = function(t) {
      this.trigger("progress", t)
    }, n.isValidAsset = function(t) {
      return !(!t || "function" != typeof t.load || "function" != typeof t.destroy)
    }, n.isValidAssetLoader = function(t) {
      return !(!t || "function" != typeof t.load || "function" != typeof t.pause || "function" != typeof t.destroy)
    }, e.exports = n
  }, {
    "../utils/destroy": 697,
    "./AssetLoader/Asset/Ajax": 688,
    "./AssetLoader/Asset/Ajax/JSON": 689,
    "./AssetLoader/Asset/Img": 692,
    "./AssetLoader/Asset/Video": 695,
    "./AssetLoader/Queue": 696,
    "@marcom/ac-event-emitter": 680,
    "@marcom/ac-object": 804
  }],
  687: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this.src = t, this.index = e, this.data = null, this._boundOnLoad = this._onLoad.bind(this), this._boundOnError = this._onError.bind(this)
    }
    var r, o = (t("ac-deferred").Deferred, t("@marcom/ac-event-emitter").EventEmitter),
      s = t("../../utils/destroy");
    r = n.prototype = new o, r.load = function() {
      this._load()
    }, r.destroy = function() {
      s(this)
    }, r._load = function() {
      this.data = {
        src: this.src
      }, window.setTimeout(this._onLoad.bind(this), 20)
    }, r._onLoad = function() {
      this.trigger("loaded", this)
    }, r._onError = function() {
      this.trigger("error", this.data)
    }, e.exports = n
  }, {
    "../../utils/destroy": 697,
    "@marcom/ac-event-emitter": 680,
    "ac-deferred": 684
  }],
  688: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      a.apply(this, arguments)
    }
    var r, o = t("@marcom/ac-ajax"),
      s = t("@marcom/ac-object"),
      a = t("../Asset");
    r = n.prototype = s.create(a.prototype), r._load = function() {
      o.get({
        url: this.src
      }).then(this._boundOnLoad, this._boundOnError)
    }, r._onLoad = function(t) {
      this.data = t.response, a.prototype._onLoad.call(this)
    }, e.exports = n
  }, {
    "../Asset": 687,
    "@marcom/ac-ajax": 675,
    "@marcom/ac-object": 804
  }],
  689: [function(t, e, i) {
    "use strict";

    function n(t) {
      s.apply(this, arguments)
    }
    var r, o = t("@marcom/ac-object"),
      s = t("../Ajax");
    r = n.prototype = o.create(s.prototype), r._onLoad = function(t) {
      try {
        s.prototype._onLoad.call(this, {
          response: JSON.parse(t.response || t.responseText)
        })
      } catch (e) {
        this._onError(e)
      }
    }, e.exports = n
  }, {
    "../Ajax": 688,
    "@marcom/ac-object": 804
  }],
  690: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      a.apply(this, arguments), this.options = o.defaults(c, e || {}), this._totalSize = null, this._rangeObjects = {}, this._contentType = null, this._request = null, this._numLoaded = 0, this._numRanges = 0
    }
    var r = t("@marcom/ac-ajax"),
      o = t("@marcom/ac-object"),
      s = t("./Binary/Chunk"),
      a = t("./../Asset"),
      c = {
        chunkSize: 1048576
      },
      l = n.prototype = o.create(a.prototype);
    l.pause = function() {
      var t;
      null !== this._request && this._request.xhr.abort();
      for (t in this._rangeObjects) this._rangeObjects[t].isLoaded() === !1 && this._rangeObjects[t].pause()
    }, l._load = function() {
      void 0 === this._boundQueueRangeRequests && (this._boundQueueRangeRequests = this._queueRangeRequests.bind(this)), null === this._totalSize ? this._getMetaData().then(this._boundQueueRangeRequests) : this._queueRangeRequests()
    }, l._getOrCreateRangeObject = function(t) {
      var e, i, n = this._rangeObjects[t.toString()];
      return void 0 === n && (e = this.options.chunkSize - 1, i = t + e, i > this._totalSize && (e = null), n = this._rangeObjects[t.toString()] = new s(this.src, {
        start: t,
        length: e
      }), this._numRanges += 1), n
    }, l._onRangeLoad = function() {
      this._numLoaded += 1, this._numLoaded === this._numRanges && this._afterAllChunksLoaded()
    }, l._queueRangeRequests = function() {
      for (var t, e = 0; e < this._totalSize; e += this.options.chunkSize) t = this._getOrCreateRangeObject(e), t.on("loaded", this._onRangeLoad, this), t.load()
    }, l._afterAllChunksLoaded = function() {
      var t, e = [];
      for (var i in this._rangeObjects) e.push(this._rangeObjects[i].data);
      t = new Blob(e, {
        type: this._contentType
      }), this.trigger("loaded", t)
    }, l._afterHeadRequest = function(t) {
      this._totalSize = parseInt(t.getResponseHeader(["Content-Length"])), this._contentType = t.getResponseHeader(["Content-Type"]), this._request = null
    }, l._getMetaData = function() {
      return this._boundAfterHeadRequest || (this._boundAfterHeadRequest = this._afterHeadRequest.bind(this)), this._request = r.create({
        method: "HEAD",
        url: this.src,
        timeout: 2e3
      }), this._request.send().then(this._boundAfterHeadRequest, this._boundOnError)
    }, e.exports = n
  }, {
    "./../Asset": 687,
    "./Binary/Chunk": 691,
    "@marcom/ac-ajax": 675,
    "@marcom/ac-object": 804
  }],
  691: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      a.apply(this, arguments), this.options = s.defaults(c, e || {}), this._request = null, this.data = null
    }
    var r, o = t("@marcom/ac-ajax"),
      s = t("@marcom/ac-object"),
      a = t("../../Asset"),
      c = {
        start: 0,
        length: null
      };
    r = n.prototype = s.create(a.prototype), r.pause = function() {
      null !== this._request && (this._request.xhr.abort(), this._request = null)
    }, r.isLoaded = function() {
      return null !== this.data
    }, r._load = function() {
      this._request = o.create({
        url: this.src + "?" + this._buildQueryString(),
        method: "get",
        timeout: 3e4,
        headers: [{
          name: "Range",
          value: this._buildRangeString()
        }]
      }), this._request.xhr.responseType = "arraybuffer", this._request.send().then(this._boundOnLoad)
    }, r._onLoad = function(t) {
      this.data = t.response, this._request = null, a.prototype._onLoad.call(this, this.data)
    }, r._buildRangeString = function() {
      var t = "bytes=" + this.options.start + "-";
      return null !== this.options.length && (t += this.options.start + this.options.length), t
    }, r._buildQueryString = function() {
      var t = this.options.start.toString();
      return void 0 !== this.options.length && (t += this.options.start + this.options.length), t
    }, e.exports = n
  }, {
    "../../Asset": 687,
    "@marcom/ac-ajax": 675,
    "@marcom/ac-object": 804
  }],
  692: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      s.apply(this, arguments)
    }
    var r, o = t("@marcom/ac-object"),
      s = t("../Asset");
    r = n.prototype = o.create(s.prototype), r._load = function() {
      var t = new Image;
      this.data = t, this._boundOnLoad = this._onLoad.bind(this), t.onload = this._boundOnLoad, t.onerror = this._boundOnError, t.src = this.src
    }, e.exports = n
  }, {
    "../Asset": 687,
    "@marcom/ac-object": 804
  }],
  693: [function(t, e, i) {
    "use strict";
    var n, r = t("@marcom/ac-ajax").Ajax,
      o = t("@marcom/ac-object"),
      s = t("./SplitFile/Chunk"),
      a = t("../Asset"),
      c = {
        splitManifestTimeout: 5e3,
        splitChunkTimeout: null
      },
      l = function(t, e) {
        a.apply(this, arguments), t.lastIndexOf("/") !== t.length - 1 && (t += "/"), this.options = o.extend(c, e || {}), this._manifestPath = t + "manifest.json", this._ajax = new r, this._request = null, this._chunksLoaded = 0, this._chunksLen = null, this._chunks = [], this._boundOnManifestLoaded = this._onManifestLoaded.bind(this)
      };
    n = l.prototype = o.create(a.prototype), n._load = function() {
      var t = {
        method: "get",
        url: this._manifestPath,
        timeout: this.options.manifestTimeout
      };
      this._request = this._ajax.create(t), this._request.send().then(this._boundOnManifestLoaded)
    }, n._onManifestLoaded = function(t) {
      this._manifest = JSON.parse(t.responseText), this._chunksLen = this._manifest.files.length;
      var e, i, n = this._manifest.files,
        r = this._chunksLen;
      for (e = 0; e < r; e++) i = this._getOrCreateChunkObject(n[e], e), i.once("loaded", this._onChunkLoaded, this), i.load();
      this._request = null, this._ajax = null
    }, n._getOrCreateChunkObject = function(t, e) {
      var i = this.options.splitChunkTimeout ? {
        timeout: this.options.splitChunkTimeout
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
    }, n._onChunkLoaded = function() {
      if (this._chunksLoaded++, this._chunksLoaded === this._chunksLen) {
        var t, e = this._chunks.length,
          i = [];
        for (t = 0; t < e; t++) i.push(this._chunks[t].data), this._chunks[t].off();
        this.data = new Blob(i, {
          type: this._manifest.mimeType
        }), i = this._chunks = null, this.trigger("loaded", this.data)
      }
    }, n.pause = function() {
      null !== this._request && (null !== this._request.xhr && this._request.xhr.abort(), this._request = null), this.data = null, this._chunks = null
    }, e.exports = l
  }, {
    "../Asset": 687,
    "./SplitFile/Chunk": 694,
    "@marcom/ac-ajax": 675,
    "@marcom/ac-object": 804
  }],
  694: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      a.apply(this, arguments), this.options = s.extend(c, e || {}), this._request = null, this.data = null
    }
    var r, o = t("@marcom/ac-ajax"),
      s = t("@marcom/ac-object"),
      a = t("../../Asset"),
      c = {
        timeout: 3e4
      };
    r = n.prototype = s.create(a.prototype), r.pause = function() {
      null !== this._request && (this._request.xhr.abort(), this._request = null)
    }, r.isLoaded = function() {
      return null !== this.data
    }, r._load = function() {
      this._request = o.create({
        url: this.src,
        method: "get",
        timeout: this.options.timeout
      }), this._request.xhr.responseType = "arraybuffer", this._request.send().then(this._boundOnLoad)
    }, r._onLoad = function(t) {
      this.data = t.response, this._request = null, a.prototype._onLoad.call(this, this.data)
    }, e.exports = n
  }, {
    "../../Asset": 687,
    "@marcom/ac-ajax": 675,
    "@marcom/ac-object": 804
  }],
  695: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      c.apply(this, arguments), this.options = s.defaults(u, e || {}), this._binary = this.options.binary || this._createAssetType()
    }
    var r, o = t("@marcom/ac-feature"),
      s = t("@marcom/ac-object"),
      a = t("./Binary"),
      c = t("../Asset"),
      l = t("./SplitFile"),
      u = {
        chunkSize: 1048576,
        split: !1
      };
    r = n.prototype = s.create(c.prototype), r._canUseBlob = function() {
      return void 0 !== window.Blob && void 0 !== window.URL && "function" == typeof window.URL.createObjectURL && o.isDesktop() === !0
    }, r._createAssetType = function() {
      if (this._canUseBlob()) return this.options.split ? new l(this.src, this.options) : new a(this.src, this.options)
    }, r._load = function() {
      this._binary.on("loaded", this._boundOnLoad), this._binary.on("error", this._boundOnError), this._binary.load()
    }, r._onLoad = function(t) {
      var e = t;
      t instanceof window.Blob && (e = this.options.element, e || (e = document.createElement("video")), e.getAttribute("type") !== t.type && e.setAttribute("type", t.type), e.src = window.URL.createObjectURL(t)), c.prototype._onLoad.call(this, e)
    }, r.pause = function() {
      this._binary.pause()
    }, r.destroy = function() {
      this._binary.destroy(), c.prototype.destroy.call(this)
    }, e.exports = n
  }, {
    "../Asset": 687,
    "./Binary": 690,
    "./SplitFile": 693,
    "@marcom/ac-feature": 184,
    "@marcom/ac-object": 804
  }],
  696: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this.options = o.defaults(l, e || {}), this._queue = t, this._active = [], this._allowedThreads = this.options.threads, this._availableThreads = this._allowedThreads, this._deferred = new s, this._data = [], this.paused = !0, this.loaded = !1, this.promise = this._deferred.promise()
    }
    var r, o = t("@marcom/ac-object"),
      s = t("ac-deferred").Deferred,
      a = t("@marcom/ac-event-emitter").EventEmitter,
      c = t("../../utils/destroy"),
      l = {
        threads: 4
      };
    r = n.prototype = new a, r.start = function() {
      var t, e = this._availableThreads;
      for (this.paused = !1, e > this._queue.length && (e = this._queue.length), t = 1; t <= e; t++) this._startNewThread();
      return this.promise
    }, r.pause = function() {
      this.paused = !0;
      var t = [];
      this._active.forEach(function(e, i) {
        "function" == typeof e.pause && (this._queue.unshift(e), this._releaseThread(), e.off("loaded"), e.off("error"), e.pause(), t.push(i))
      }, this), t.forEach(function(t) {
        this._active.splice(t, 1)
      }, this)
    }, r.add = function(t) {
      this._queue = this._queue.concat(t)
    }, r.destroy = function() {
      this.pause(), c(this)
    }, r._startNewThread = function() {
      var t = this._queue.shift();
      if (this._occupyThread(), t && "function" == typeof t.load) {
        var e = function(e) {
            this._onProgress(e), this._active.splice(this._active.indexOf(t), 1), t.off("error", i)
          },
          i = function(i) {
            this._onError(), t.off("loaded", e)
          };
        t.once("loaded", e, this), t.once("error", i, this), t.load()
      } else this._onError();
      this._active.push(t)
    }, r._onResolved = function() {
      return !this._errored && (this._deferred.resolve(this._data), void this.trigger("resolved", this._data))
    }, r._onError = function(t) {
      return !this._errored && (this._errored = !0, this._deferred.reject(t), void this.trigger("rejected", t))
    }, r.abort = function() {
      this._deferred.reject()
    }, r._onProgress = function(t) {
      return !this._errored && (this._releaseThread(), this._data[t.index] = t.data, this.trigger("progress", t.data), void(this._queue.length <= 0 ? this._availableThreads >= this._allowedThreads && this._onResolved() : this.paused || this._errored || this._startNewThread()))
    }, r._occupyThread = function() {
      if (this._availableThreads--, this._availableThreads < 0) throw "AssetLoader.Queue: Available thread count cannot be negative."
    }, r._releaseThread = function() {
      if (this._availableThreads++, this._availableThreads > this._allowedThreads) throw "AssetLoader.Queue: Available thread count cannot be more than allowed thread amount."
    }, e.exports = n
  }, {
    "../../utils/destroy": 697,
    "@marcom/ac-event-emitter": 680,
    "@marcom/ac-object": 804,
    "ac-deferred": 684
  }],
  697: [function(t, e, i) {
    "use strict";
    e.exports = function(t, e) {
      function i(t) {
        var e = !0;
        for (var i in t)
          if (t.hasOwnProperty(i) && null !== t[i]) {
            e = !1;
            break
          } return e
      }
      "function" == typeof t.off && t.off(), window.setTimeout(function() {
        var n;
        for (n in t) t.hasOwnProperty(n) && (e && t[n] && "function" == typeof t[n].destroy && !i(t[n]) && t[n].destroy(), t[n] = null)
      })
    }
  }, {}],
  698: [function(t, e, i) {
    arguments[4][206][0].apply(i, arguments)
  }, {
    "./ac-browser/BrowserData": 699,
    "./ac-browser/IE": 700,
    dup: 206
  }],
  699: [function(t, e, i) {
    arguments[4][207][0].apply(i, arguments)
  }, {
    "./data": 701,
    "@marcom/ac-polyfills/Array/prototype.filter": void 0,
    "@marcom/ac-polyfills/Array/prototype.some": void 0,
    dup: 207
  }],
  700: [function(t, e, i) {
    arguments[4][208][0].apply(i, arguments)
  }, {
    dup: 208
  }],
  701: [function(t, e, i) {
    arguments[4][209][0].apply(i, arguments)
  }, {
    dup: 209
  }],
  702: [function(t, e, i) {
    arguments[4][210][0].apply(i, arguments)
  }, {
    "./className/add": 704,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0,
    dup: 210
  }],
  703: [function(t, e, i) {
    arguments[4][211][0].apply(i, arguments)
  }, {
    "./className/add": 704,
    "./className/contains": 705,
    "./className/remove": 707,
    dup: 211
  }],
  704: [function(t, e, i) {
    arguments[4][212][0].apply(i, arguments)
  }, {
    "./contains": 705,
    dup: 212
  }],
  705: [function(t, e, i) {
    arguments[4][213][0].apply(i, arguments)
  }, {
    "./getTokenRegExp": 706,
    dup: 213
  }],
  706: [function(t, e, i) {
    arguments[4][214][0].apply(i, arguments)
  }, {
    dup: 214
  }],
  707: [function(t, e, i) {
    arguments[4][215][0].apply(i, arguments)
  }, {
    "./contains": 705,
    "./getTokenRegExp": 706,
    dup: 215
  }],
  708: [function(t, e, i) {
    arguments[4][216][0].apply(i, arguments)
  }, {
    "./className/contains": 705,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0,
    dup: 216
  }],
  709: [function(t, e, i) {
    arguments[4][217][0].apply(i, arguments)
  }, {
    "./add": 702,
    "./contains": 708,
    "./remove": 710,
    "./toggle": 711,
    dup: 217
  }],
  710: [function(t, e, i) {
    arguments[4][218][0].apply(i, arguments)
  }, {
    "./className/remove": 707,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0,
    dup: 218
  }],
  711: [function(t, e, i) {
    arguments[4][219][0].apply(i, arguments)
  }, {
    "./className": 703,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0,
    dup: 219
  }],
  712: [function(t, e, i) {
    arguments[4][220][0].apply(i, arguments)
  }, {
    "./ac-event-emitter/EventEmitter": 713,
    dup: 220
  }],
  713: [function(t, e, i) {
    arguments[4][221][0].apply(i, arguments)
  }, {
    dup: 221
  }],
  714: [function(t, e, i) {
    arguments[4][230][0].apply(i, arguments)
  }, {
    "./ac-dom-emitter/DOMEmitter": 715,
    dup: 230
  }],
  715: [function(t, e, i) {
    arguments[4][231][0].apply(i, arguments)
  }, {
    "./DOMEmitterEvent": 716,
    "@marcom/ac-dom-events/addEventListener": 6,
    "@marcom/ac-dom-events/dispatchEvent": 7,
    "@marcom/ac-dom-events/removeEventListener": 15,
    "@marcom/ac-dom-traversal/matchesSelector": 56,
    "@marcom/ac-dom-traversal/querySelectorAll": 62,
    "ac-event-emitter": 712,
    dup: 231
  }],
  716: [function(t, e, i) {
    arguments[4][232][0].apply(i, arguments)
  }, {
    "@marcom/ac-dom-events/preventDefault": 14,
    "@marcom/ac-dom-events/stopPropagation": 18,
    "@marcom/ac-dom-events/target": 19,
    dup: 232
  }],
  717: [function(t, e, i) {
    arguments[4][35][0].apply(i, arguments)
  }, {
    dup: 35
  }],
  718: [function(t, e, i) {
    arguments[4][36][0].apply(i, arguments)
  }, {
    dup: 36
  }],
  719: [function(t, e, i) {
    arguments[4][37][0].apply(i, arguments)
  }, {
    dup: 37
  }],
  720: [function(t, e, i) {
    arguments[4][326][0].apply(i, arguments)
  }, {
    dup: 326
  }],
  721: [function(t, e, i) {
    arguments[4][38][0].apply(i, arguments)
  }, {
    dup: 38
  }],
  722: [function(t, e, i) {
    arguments[4][39][0].apply(i, arguments)
  }, {
    dup: 39
  }],
  723: [function(t, e, i) {
    arguments[4][329][0].apply(i, arguments)
  }, {
    dup: 329
  }],
  724: [function(t, e, i) {
    arguments[4][40][0].apply(i, arguments)
  }, {
    "./ELEMENT_NODE": 721,
    "./internal/isNodeType": 732,
    "@marcom/ac-polyfills/Array/prototype.filter": void 0,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0,
    dup: 40
  }],
  725: [function(t, e, i) {
    arguments[4][331][0].apply(i, arguments)
  }, {
    dup: 331
  }],
  726: [function(t, e, i) {
    arguments[4][332][0].apply(i, arguments)
  }, {
    "./COMMENT_NODE": 717,
    "./DOCUMENT_FRAGMENT_NODE": 718,
    "./DOCUMENT_NODE": 719,
    "./DOCUMENT_TYPE_NODE": 720,
    "./ELEMENT_NODE": 721,
    "./TEXT_NODE": 722,
    "./createDocumentFragment": 723,
    "./filterByNodeType": 724,
    "./hasAttribute": 725,
    "./indexOf": 727,
    "./insertAfter": 728,
    "./insertBefore": 729,
    "./insertFirstChild": 730,
    "./insertLastChild": 731,
    "./isComment": 734,
    "./isDocument": 735,
    "./isDocumentFragment": 736,
    "./isDocumentType": 737,
    "./isElement": 738,
    "./isNode": 739,
    "./isNodeList": 740,
    "./isTextNode": 741,
    "./remove": 742,
    "./replace": 743,
    dup: 332
  }],
  727: [function(t, e, i) {
    arguments[4][333][0].apply(i, arguments)
  }, {
    "./filterByNodeType": 724,
    "./internal/validate": 733,
    "@marcom/ac-polyfills/Array/prototype.indexOf": void 0,
    "@marcom/ac-polyfills/Array/prototype.slice": void 0,
    dup: 333
  }],
  728: [function(t, e, i) {
    arguments[4][334][0].apply(i, arguments)
  }, {
    "./internal/validate": 733,
    dup: 334
  }],
  729: [function(t, e, i) {
    arguments[4][335][0].apply(i, arguments)
  }, {
    "./internal/validate": 733,
    dup: 335
  }],
  730: [function(t, e, i) {
    arguments[4][336][0].apply(i, arguments)
  }, {
    "./internal/validate": 733,
    dup: 336
  }],
  731: [function(t, e, i) {
    arguments[4][297][0].apply(i, arguments)
  }, {
    "./internal/validate": 733,
    dup: 297
  }],
  732: [function(t, e, i) {
    arguments[4][41][0].apply(i, arguments)
  }, {
    "../isNode": 739,
    dup: 41
  }],
  733: [function(t, e, i) {
    arguments[4][42][0].apply(i, arguments)
  }, {
    "../COMMENT_NODE": 717,
    "../DOCUMENT_FRAGMENT_NODE": 718,
    "../ELEMENT_NODE": 721,
    "../TEXT_NODE": 722,
    "./isNodeType": 732,
    dup: 42
  }],
  734: [function(t, e, i) {
    arguments[4][340][0].apply(i, arguments)
  }, {
    "./COMMENT_NODE": 717,
    "./internal/isNodeType": 732,
    dup: 340
  }],
  735: [function(t, e, i) {
    arguments[4][341][0].apply(i, arguments)
  }, {
    "./DOCUMENT_NODE": 719,
    "./internal/isNodeType": 732,
    dup: 341
  }],
  736: [function(t, e, i) {
    arguments[4][43][0].apply(i, arguments)
  }, {
    "./DOCUMENT_FRAGMENT_NODE": 718,
    "./internal/isNodeType": 732,
    dup: 43
  }],
  737: [function(t, e, i) {
    arguments[4][343][0].apply(i, arguments)
  }, {
    "./DOCUMENT_TYPE_NODE": 720,
    "./internal/isNodeType": 732,
    dup: 343
  }],
  738: [function(t, e, i) {
    arguments[4][44][0].apply(i, arguments)
  }, {
    "./ELEMENT_NODE": 721,
    "./internal/isNodeType": 732,
    dup: 44
  }],
  739: [function(t, e, i) {
    arguments[4][45][0].apply(i, arguments)
  }, {
    dup: 45
  }],
  740: [function(t, e, i) {
    arguments[4][346][0].apply(i, arguments)
  }, {
    dup: 346
  }],
  741: [function(t, e, i) {
    arguments[4][347][0].apply(i, arguments)
  }, {
    "./TEXT_NODE": 722,
    "./internal/isNodeType": 732,
    dup: 347
  }],
  742: [function(t, e, i) {
    arguments[4][46][0].apply(i, arguments)
  }, {
    "./internal/validate": 733,
    dup: 46
  }],
  743: [function(t, e, i) {
    arguments[4][349][0].apply(i, arguments)
  }, {
    "./internal/validate": 733,
    dup: 349
  }],
  744: [function(t, e, i) {
    arguments[4][93][0].apply(i, arguments)
  }, {
    "@marcom/ac-prefixer/getStyleProperty": 748,
    "@marcom/ac-prefixer/stripPrefixes": 754,
    dup: 93
  }],
  745: [function(t, e, i) {
    arguments[4][351][0].apply(i, arguments)
  }, {
    "./getStyle": 744,
    "./setStyle": 757,
    dup: 351
  }],
  746: [function(t, e, i) {
    arguments[4][94][0].apply(i, arguments)
  }, {
    dup: 94
  }],
  747: [function(t, e, i) {
    arguments[4][95][0].apply(i, arguments)
  }, {
    "./getStyleProperty": 748,
    "./getStyleValue": 749,
    "./shared/stylePropertyCache": 752,
    dup: 95
  }],
  748: [function(t, e, i) {
    arguments[4][96][0].apply(i, arguments)
  }, {
    "./shared/getStyleTestElement": 750,
    "./shared/prefixHelper": 751,
    "./shared/stylePropertyCache": 752,
    "./utils/toCSS": 755,
    "./utils/toDOM": 756,
    dup: 96
  }],
  749: [function(t, e, i) {
    arguments[4][97][0].apply(i, arguments)
  }, {
    "./getStyleProperty": 748,
    "./shared/prefixHelper": 751,
    "./shared/stylePropertyCache": 752,
    "./shared/styleValueAvailable": 753,
    dup: 97
  }],
  750: [function(t, e, i) {
    arguments[4][98][0].apply(i, arguments)
  }, {
    dup: 98
  }],
  751: [function(t, e, i) {
    arguments[4][11][0].apply(i, arguments)
  }, {
    dup: 11
  }],
  752: [function(t, e, i) {
    arguments[4][100][0].apply(i, arguments)
  }, {
    dup: 100
  }],
  753: [function(t, e, i) {
    arguments[4][101][0].apply(i, arguments)
  }, {
    "./getStyleTestElement": 750,
    "./stylePropertyCache": 752,
    dup: 101
  }],
  754: [function(t, e, i) {
    arguments[4][102][0].apply(i, arguments)
  }, {
    dup: 102
  }],
  755: [function(t, e, i) {
    arguments[4][103][0].apply(i, arguments)
  }, {
    dup: 103
  }],
  756: [function(t, e, i) {
    arguments[4][104][0].apply(i, arguments)
  }, {
    dup: 104
  }],
  757: [function(t, e, i) {
    arguments[4][105][0].apply(i, arguments)
  }, {
    "./internal/normalizeValue": 746,
    "@marcom/ac-prefixer/getStyleCSS": 747,
    "@marcom/ac-prefixer/getStyleProperty": 748,
    dup: 105
  }],
  758: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Promise"), t("@marcom/ac-polyfills/JSON"), e.exports = {
      createFlow: t("./ac-flow/flow/factory"),
      Player: t("./ac-flow/flow/Player")
    }
  }, {
    "./ac-flow/flow/Player": 761,
    "./ac-flow/flow/factory": 772,
    "@marcom/ac-polyfills/JSON": void 0,
    "@marcom/ac-polyfills/Promise": void 0
  }],
  759: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n) {
      r.call(this), this._compositor = new l(e, i, n), this.options = t || {}
    }
    var r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      o = t("./compositor/decorator/Keyframe"),
      s = t("./compositor/decorator/Superframe"),
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
      return i ? (t = this._compositor._diffRender.flowData, e = this._compositor.canvas, t.superframeFrequency && (i = new s(i, t.superframeFrequency)), t.version >= 4 && (i = new o(i)), t.version >= 4 && t.superframeFrequency && (i = new a(i)), this.options.keyframeCache && (i = new c(i, this.options.keyframeCache)), i === this._compositor ? Promise.resolve() : (this._compositor = i, this._compositor.init(e))) : Promise.reject()
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
    "./compositor/Sequence": 762,
    "./compositor/decorator/Cache": 763,
    "./compositor/decorator/Keyframe": 764,
    "./compositor/decorator/SuperKeyframe": 765,
    "./compositor/decorator/Superframe": 766,
    "@marcom/ac-event-emitter-micro": 168
  }],
  760: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-asset-loader").AssetLoader,
      r = t("./data/provider/Async"),
      o = function(t, e, i) {
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
      s = o.prototype;
    s.setManifestUrl = function(t) {
      return this._manifestUrl = t, this
    }, s.setKeyframeUrls = function(t) {
      return this._keyframeUrls = t, this
    }, s.setImageUrlPattern = function(t) {
      return this._imageUrlPattern = t, this
    }, s.pause = function() {
      this._shouldPause = !0;
      var t, e = this._activeLoaders.length;
      for (t = 0; t < e; t++) this._activeLoaders[t].pause();
      this._paused = !0
    }, s.destroy = function() {
      var t, e, i;
      this.pause();
      for (t in this._loaders) this._loaders.hasOwnProperty(t) && this._loaders[t].destroy();
      for (e in this._promises) this._promises.hasOwnProperty(e) && "pending" === this._promises[e].status() && this._promises[e].reject();
      for (i in this) this.hasOwnProperty(i) && (this[i] = null)
    }, s.load = function() {
      if (this._paused && (this._activeLoaders.length > 0 || this._resumeQueue.length > 0)) return this._resume(), !0
    }, s._resume = function() {
      this._shouldPause = !1;
      var t, e = this._activeLoaders.length;
      for (t = 0; t < e; t++) this._activeLoaders[t].load();
      var i, n = this._resumeQueue.length;
      for (i = 0; i < n; i++) this._resumeQueue[i].call(this);
      this._resumeQueue = [], this._paused = !1
    }, s.loadManifest = function() {
      return this._shouldPause ? void this._resumeQueue.push(this.loadManifest) : this.assets.manifest ? this.assets.manifest : (this._paused = !1, this._loaders.manifest = new r(this._getManifestAssetsData()), this._activeLoaders.push(this._loaders.manifest), this._loaders.manifest.load().then(this._boundOnManifestLoaded))
    }, s.loadKeyframes = function() {
      var t;
      return this._shouldPause && this._resumeQueue.push(this.loadKeyframes), this.assets.keyframes ? t = Promise.resolve(this.assets.keyframes) : (this._paused = !1, this._loaders.keyframes = new n(this._getKeyframesAssetsData()), this._activeLoaders.push(this._loaders.keyframes), t = this._loaders.keyframes.load().then(this._boundOnKeyframesLoaded)), this._promises.keyframes = t, this._promises.keyframes
    }, s.loadDiffs = function() {
      var t;
      return this._shouldPause && this._resumeQueue.push(this.loadDiffs), this.assets.diffs ? t = this._promises.diffs.resolve(this.assets.diffs) : (this._paused = !1, this._loaders.diffs = new n(this._getDiffsAssetsData()), this._activeLoaders.push(this._loaders.diffs), t = this._loaders.diffs.load().then(this._boundOnDiffsLoaded)), this._promises.diffs = t, this._promises.diffs
    }, s._getManifestAssetsData = function() {
      return this._manifestUrl
    }, s._getKeyframesAssetsData = function() {
      return this._keyframeUrls
    }, s._getDiffsAssetsData = function() {
      var t, e, i = this.assets.manifest.imagesRequired,
        n = [],
        r = this._imageUrlPattern.match(/#/g).length;
      for (t = 1; t <= i; t++) e = "0000" + t, e = e.substring(e.length - r), n.push(this._imageUrlPattern.replace(/#{2,}/g, e));
      return n
    }, s._onManifestLoaded = function(t) {
      if (this.assets) return this.assets.manifest = t, this.state.manifestLoaded = !0, this._paused = !0, this._removeFromActiveLoaders(this._loaders.manifest), this.assets.manifest
    }, s._onKeyframesLoaded = function(t) {
      if (this.assets) return this.assets.keyframes = t, this.state.keyframeLoaded = !0, this._paused = !0, this._removeFromActiveLoaders(this._loaders.keyframes), Promise.resolve(this.assets.keyframes)
    }, s._onDiffsLoaded = function(t) {
      if (this.assets) return this.assets.diffs = t, this.state.diffsLoaded = !0, this._paused = !0, this._removeFromActiveLoaders(this._loaders.diffs), Promise.resolve(this.assets.diffs)
    }, s._removeFromActiveLoaders = function(t) {
      var e, i = this._activeLoaders.length;
      for (e = 0; e < i; e++)
        if (this._activeLoaders[e] === t) return void this._activeLoaders.splice(e, 1)
    }, e.exports = o
  }, {
    "./data/provider/Async": 770,
    "@marcom/ac-asset-loader": 685
  }],
  761: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this.element = e, this._domEmitter = new r(e), this._frameRate = 30, this.paused = !0, this.loop = !1, this._destroyed = !1, this._flow = t, this._boundAdvanceTimeToGlobal = this._advanceToTimeGlobal.bind(this), this._onBoundGlobalTimeUpdate = this._onGlobalTimeUpdate.bind(this), this._onBoundLocalTimeUpdate = this._onLocalTimeUpdate.bind(this)
    }
    var r = t("@marcom/ac-dom-emitter").DOMEmitter,
      o = n.prototype;
    o._timeToFrame = function(t) {
      var e;
      return e = Math.round(t / this.duration * this._flow.frameCount), e %= this._flow.frameCount + 1, e < 0 ? this._flow.frameCount + e : e
    }, o._advanceToTimeGlobal = function(t) {
      this._prevTime = this._prevTime || t, this._currentTime += (t - this._prevTime) / 1e3 * this.playbackRate, this._prevTime = t, this._pauseAfterRender = !1;
      var e = this._timeToFrame(this._currentTime);
      if (this.loop ? this._currentTime = (this.duration + this._currentTime) % this.duration : this.playbackRate > 0 && this._currentTime > this.duration ? (e = this._flow.frameCount, this._currentTime = this.duration, this._pauseAfterRender = !0) : this.playbackRate < 0 && this._currentTime < 0 && (e = 0, this._currentTime = 0, this._pauseAfterRender = !0), !this.paused && !this.seeking) return this._flow.gotoFrame(e).then(this._onBoundGlobalTimeUpdate)
    }, o._onGlobalTimeUpdate = function() {
      this.trigger("timeupdate"), this._pauseAfterRender ? (this.paused = !0, this.trigger("ended")) : this._requestAnimationFrame = window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
    }, o._onLocalTimeUpdate = function() {
      this.seeking = !1, this.trigger("timeupdate"), this.trigger("seeked"), this._requestAnimationFrame = window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
    }, o._advanceToTimeLocal = function(t) {
      this.seeking || (this.seeking = !0, this.trigger("seeking"), this._currentTime = 1 * t, this._prevTime = null, window.cancelAnimationFrame(this._requestAnimationFrame), this._flow.gotoFrame(this._timeToFrame(t)).then(this._onBoundLocalTimeUpdate))
    }, o._onLoaded = function() {
      this.trigger("loaded"), this.trigger("canplaythrough")
    }, o._nullProperties = function(t) {
      var e;
      for (e in t) t.hasOwnProperty(e) && (t[e] = null);
      return t
    }, o.destroy = function() {
      this.trigger("destroy"), this.pause(), this.off(), this._flow.destroy(), this._flow = this._nullProperties(this._flow), this._nullProperties(this)
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
      return this.paused && (this.paused = !1, this.trigger("play"), this._prevTime = null, this._requestAnimationFrame = window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)), this
    }, o.pause = function() {
      return this.paused || (this.paused = !0, window.cancelAnimationFrame(this._requestAnimationFrame), this.trigger("pause")), this
    }, o.on = function() {
      this._domEmitter.on.apply(this._domEmitter, arguments)
    }, o.once = function() {
      this._domEmitter.once.apply(this._domEmitter, arguments)
    }, o.trigger = function() {
      this._domEmitter.trigger.apply(this._domEmitter, arguments)
    }, o.off = function() {
      this._domEmitter.off.apply(this._domEmitter, arguments)
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
    "@marcom/ac-dom-emitter": 714
  }],
  762: [function(t, e, i) {
    "use strict";

    function n(t, e, i) {
      this._keyframes = e, this._imageUrlPattern = i, this._loadController = new o(t, e, i)
    }
    var r = t("../diff/Render"),
      o = t("../LoadController"),
      s = n.prototype;
    s._initDiffRender = function(t) {
      t.then(function(t) {
        this._images = t, this.canvas.height = t[0].height, this.canvas.width = t[0].width, this.applyFrame(t[0])
      }.bind(this))
    }, s.init = function(t) {
      return this.canvas = t || document.createElement("canvas"), this.context = t.getContext("2d"), this._loadController.loadKeyframes().then(this._initDiffRender.bind(this)).then(this._loadController.loadManifest.bind(this._loadController)).then(this.createDiffRender.bind(this))
    }, s.resumeLoading = function() {
      return this._loadController.load()
    }, s.pauseLoading = function() {
      this._loadController.pause()
    }, s.createDiffRender = function(t) {
      return this._diffRender = new r(t, this._imageUrlPattern, this._loadController), this._diffRender.init()
    }, s.applyFrame = function(t) {
      var e = this.context;
      e.drawImage(t, 0, 0)
    }, s.calculateRenderCount = function(t, e) {
      var i = 0;
      return Math.abs(e - t) >= e ? (t = 1, i = 1) : Math.abs(e - t) >= this.frameCount - e && this._images[1] && (t = this.frameCount - 2, i = 1), e > 0 && e < this.frameCount - 1 ? Math.abs(t - e) + i : i
    }, s.compositeFrames = function(t, e) {
      e = this.frameCount < e ? this.frameCount - 1 : e < 0 ? 0 : e, t = this.frameCount - 2 < t ? this.frameCount - 2 : t < 0 ? 0 : t;
      var i;
      if (Math.abs(e - t) >= e ? (t = 1, this.applyFrame(this._images[0])) : Math.abs(e - t) >= this.frameCount - e && this._images[1] && (t = this.frameCount - 2, this.applyFrame(this._images[1])), i = t > e ? -1 : t < e ? 1 : 0, e > 0 && e < this.frameCount - 1)
        for (; t !== e;) this._diffRender.renderDiff(this.canvas, t), t += i;
      return Promise.resolve(t)
    }, s.destroy = function() {
      this._loadController.destroy()
    }, "function" != typeof Object.defineProperties && (Object.defineProperties = function() {}), Object.defineProperties(s, {
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
    "../LoadController": 760,
    "../diff/Render": 771
  }],
  763: [function(t, e, i) {
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
  764: [function(t, e, i) {
    "use strict";

    function n(t) {
      this._compositor = t, this._flowDataProvider = this.mainCompositor._loadController._loaders.manifest
    }
    var r = t("../../keyframe/Render"),
      o = n.prototype;
    o.init = function(t) {
      return this._keyframeDiffRender = new r(this._flowDataProvider._data, this.mainCompositor._imageUrlPattern), this._keyframeDiffRender.init()
    }, o.resumeLoading = function() {
      return this._compositor.resumeLoading()
    }, o.pauseLoading = function() {
      return this._compositor.pauseLoading()
    }, o.applyFrame = function(t) {
      return this._compositor.applyFrame.apply(this._compositor, arguments)
    }, o.applyKeyframe = function(t, e) {
      this._keyframeDiffRender.renderKeyframe(this.canvas, t, e)
    }, o.compositeFrames = function(t, e) {
      return this._isKeyframeDiff(e - 1) ? (this.applyKeyframe(e - 1), Promise.resolve(t - 1)) : this._compositor.compositeFrames.apply(this._compositor, arguments)
    }, o._isKeyframeDiff = function(t) {
      return t in this._keyframeDiffRender._loader._keyframes
    }, o.calculateRenderCount = function(t, e) {
      return this._compositor.calculateRenderCount.apply(this._compositor, arguments)
    }, o.destroy = function() {
      return this._compositor.destroy()
    }, "function" != typeof Object.defineProperties && (Object.defineProperties = function() {}), Object.defineProperties(o, {
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
    "../../keyframe/Render": 774
  }],
  765: [function(t, e, i) {
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
        o = i.apply(this._compositor, [t, e]);
      return r <= o ? n : t
    }, r._compositeFromSuperKeyframe = function(t, e) {
      var i = this.canvas.getContext("2d"),
        n = t <= 0 ? this.mainCompositor._images[0] : t >= this.frameCount - 2 ? this.mainCompositor._images[1] : this._frames[t - 1].image;
      return i.drawImage(n, 0, 0), this._compositor.compositeFrames.call(this._compositor, t, e)
    }, r._getClosestSuperFrame = function(t) {
      return Math.round(t / this._superframeInterval) * this._superframeInterval
    }, r._getClosestSuperKeyframe = function(t) {
      var e, i, n, r, o = this._frames.length;
      if (t < o + 1 && t > 0) {
        for (r = t - 1; r >= 0;) {
          if ("keyframe" === this._frames[r].type) {
            e = r + 1;
            break
          }
          r -= 1
        }
        for (r = t + 1; r <= o - 1;) {
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
  766: [function(t, e, i) {
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
  767: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this.location = t, this.length = e
    }
    e.exports = n
  }, {}],
  768: [function(t, e, i) {
    "use strict";

    function n() {}
    e.exports = n
  }, {}],
  769: [function(t, e, i) {
    "use strict";
    var n, r = t("./Manifest"),
      o = t("./Block"),
      s = {
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
            s = t.value,
            a = t.startImageIndex,
            c = t.startBlockIndex;
          if ("keyframe" === t.type) return r.type = "keyframe", r.width = t.width, r.height = t.height, r.x = t.x, r.y = t.y, r;
          for (e = 0; e < s.length; e += 5) n = this._createNumberFromBase64Range(s, e, 3), i = this._createNumberFromBase64Range(s, e + 3, 2), r.push(Object.create(o.prototype, {
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
    e.exports = s
  }, {
    "./Block": 767,
    "./Manifest": 768
  }],
  770: [function(t, e, i) {
    "use strict";

    function n(t) {
      this._assetLoader = new r([t])
    }
    var r = t("@marcom/ac-asset-loader").AssetLoader,
      o = t("../processor"),
      s = n.prototype;
    s.load = function() {
      return this._assetLoader.load().then(function(t) {
        var e;
        return t && t.length && (e = o.parseData(t[0]), this._data = e), e
      }.bind(this))
    }, e.exports = n
  }, {
    "../processor": 769,
    "@marcom/ac-asset-loader": 685
  }],
  771: [function(t, e, i) {
    "use strict";

    function n(t, e, i) {
      this.flowData = t, this.flowData.imageUrlPattern = e, this._loadController = i
    }
    var r = n.prototype;
    r._storeImages = function(t) {
      t.then(function(t) {
        var e = t.length;
        this.images = t, this._blocksPerFullDiff = [], this._blockCountUpToIndex = [];
        for (var i = 0, n = 0; n < e; n++) this._blocksPerFullDiff[n] = t[n].width / this.flowData.blockSize * (t[n].height / this.flowData.blockSize), i += this._blocksPerFullDiff[n], this._blockCountUpToIndex[n] = i
      }.bind(this))
    }, r._applyDiffRange = function(t, e) {
      for (var i, n, r = e.block, o = e.length, s = t.canvas.width / this.flowData.blockSize, a = e.startImageIndex, c = this.images[a].width, l = r % this._blockCountUpToIndex[a], u = c / this.flowData.blockSize, h = l % u * this.flowData.blockSize, d = Math.floor(l / (u || 1)) * this.flowData.blockSize, m = e.location % s * this.flowData.blockSize, p = Math.floor(e.location / s) * this.flowData.blockSize; o;) i = Math.min(o * this.flowData.blockSize, t.canvas.width - m, c - h), n = i / this.flowData.blockSize, t.drawImage(this.images[a], h, d, i, this.flowData.blockSize, m, p, i, this.flowData.blockSize), o -= n, o && ((h += i) >= c && (h = 0, d += this.flowData.blockSize), (m += i) >= t.canvas.width && (m = 0, p += this.flowData.blockSize), r += n)
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
  772: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-object/defaults"),
      r = t("./Flow"),
      o = t("./Player"),
      s = {
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
          o = t.baseName + "_",
          s = {};
        return s.startframe = (i || e) + o + "startframe." + (t.startframeFileFormat || t.fileFormat), s.endframe = (i || e) + o + "endframe." + (t.endframeFileFormat || t.fileFormat), s.imageUrlPattern = (n || e) + o + t.imageUrlPattern + "." + t.fileFormat, s.manifest = (r || e) + o + "manifest." + t.manifestFileFormat, s
      },
      u = function(t, e) {
        var i = l(e),
          n = [i.startframe, i.endframe];
        return new r(t, i.manifest, n, i.imageUrlPattern)
      },
      h = function(t, e) {
        var i = t || {},
          r = e || {};
        i = n(s, t), r = n(a, e), i.element || (t.element = document.createElement("canvas"));
        var c = u(i, r),
          l = new o(c, i.element);
        return i.preload && l.load(), l
      };
    e.exports = h
  }, {
    "./Flow": 759,
    "./Player": 761,
    "@marcom/ac-object/defaults": 807
  }],
  773: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      var i, n = t.match(/#/g).length;
      this._keyframes = {}, t = t.replace(/([^#]+)(#+)(\..*)/, "$1key_$2$3"), this._imageUrls = [], e.frames && e.frames.forEach(function(e, r) {
        "keyframe" === e.type && (i = "0000" + r, i = i.substring(i.length - n), this._imageUrls.push(t.replace(/#+/g, i)), this._keyframes[r] = e)
      }.bind(this))
    }
    var r = t("@marcom/ac-asset-loader").AssetLoader,
      o = n.prototype;
    o.load = function() {
      return this._imageUrls.length > 0 ? new r(this._imageUrls).load() : Promise.resolve()
    }, "function" != typeof Object.defineProperties && (Object.defineProperties = function() {}), Object.defineProperties(o, {
      keyframes: {
        get: function() {
          return this._keyframes
        },
        enumerable: !0
      }
    }), e.exports = n
  }, {
    "@marcom/ac-asset-loader": 685
  }],
  774: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this.flowData = t, this.flowData.imageUrlPattern = e
    }
    var r = t("./Loader"),
      o = n.prototype;
    o._storeImages = function(t) {
      var e, i = 0;
      if (t && t.length > 0)
        for (var n in this._loader._keyframes) this._loader._keyframes.hasOwnProperty(n) && (e = t[i], this._loader._keyframes[n].image = e, i += 1)
    }, o.init = function() {
      return this._loader = new r(this.flowData.imageUrlPattern, this.flowData), this._loader.load().then(this._storeImages.bind(this))
    }, o.renderKeyframe = function(t, e, i) {
      var n = t.getContext("2d"),
        r = this._loader.keyframes[e],
        o = r.image,
        s = r.x,
        a = r.y,
        c = r.width,
        l = r.height;
      i === !0 ? n.drawImage(o, s, a, c, l, s, a, c, l) : this.flowData.reversible ? n.drawImage(o, 0, 0) : n.drawImage(o, s, a, c, l)
    }, e.exports = n
  }, {
    "./Loader": 773
  }],
  775: [function(t, e, i) {
    arguments[4][279][0].apply(i, arguments)
  }, {
    "./ac-shared-instance/SharedInstance": 776,
    dup: 279
  }],
  776: [function(t, e, i) {
    arguments[4][280][0].apply(i, arguments)
  }, {
    dup: 280
  }],
  777: [function(t, e, i) {
    arguments[4][281][0].apply(i, arguments)
  }, {
    "./ac-mvc-cid/CID": 778,
    dup: 281
  }],
  778: [function(t, e, i) {
    arguments[4][282][0].apply(i, arguments)
  }, {
    "@marcom/ac-shared-instance": 775,
    dup: 282
  }],
  779: [function(t, e, i) {
    arguments[4][283][0].apply(i, arguments)
  }, {
    "./ac-mvc-model/Model": 780,
    dup: 283
  }],
  780: [function(t, e, i) {
    arguments[4][284][0].apply(i, arguments)
  }, {
    "@marcom/ac-event-emitter-micro": 168,
    "@marcom/ac-mvc-cid": 777,
    "@marcom/ac-object/create": 806,
    "@marcom/ac-object/defaults": 807,
    dup: 284
  }],
  781: [function(t, e, i) {
    arguments[4][279][0].apply(i, arguments)
  }, {
    "./ac-shared-instance/SharedInstance": 782,
    dup: 279
  }],
  782: [function(t, e, i) {
    arguments[4][280][0].apply(i, arguments)
  }, {
    dup: 280
  }],
  783: [function(t, e, i) {
    arguments[4][281][0].apply(i, arguments)
  }, {
    "./ac-mvc-cid/CID": 784,
    dup: 281
  }],
  784: [function(t, e, i) {
    arguments[4][282][0].apply(i, arguments)
  }, {
    "@marcom/ac-shared-instance": 781,
    dup: 282
  }],
  785: [function(t, e, i) {
    arguments[4][306][0].apply(i, arguments)
  }, {
    "./ac-mvc-view/View": 786,
    dup: 306
  }],
  786: [function(t, e, i) {
    arguments[4][307][0].apply(i, arguments)
  }, {
    "@marcom/ac-classlist/add": 702,
    "@marcom/ac-classlist/remove": 710,
    "@marcom/ac-dom-emitter": 714,
    "@marcom/ac-dom-nodes/insertLastChild": 731,
    "@marcom/ac-dom-nodes/remove": 742,
    "@marcom/ac-mvc-cid": 783,
    "@marcom/ac-object/create": 806,
    "@marcom/ac-object/defaults": 807,
    dup: 307
  }],
  787: [function(t, e, i) {
    "use strict";
    var n = t("./ac-media-object/factories/createVideo"),
      r = t("./ac-media-object/factories/createFlow");
    e.exports = {
      createFlow: r,
      createVideo: n
    }
  }, {
    "./ac-media-object/factories/createFlow": 788,
    "./ac-media-object/factories/createVideo": 789
  }],
  788: [function(t, e, i) {
    var n = t("./../views/FlowView");
    e.exports = function(t, e, i) {
      function r(t) {
        throw new Error(t)
      }
      if (e) {
        if (e.basePath) return i = i || {}, i.type = "flow", i.mediaObjectView || (i.mediaObjectView = new n(t, e, i)), i.mediaObjectView;
        r("Please provide a valid mediaSrc object with a basePath property.")
      } else r("Please provide both a valid container element and a valid mediaSrc object as arguments.")
    }
  }, {
    "./../views/FlowView": 792
  }],
  789: [function(t, e, i) {
    var n = t("./../views/VideoView");
    e.exports = function(t, e, i) {
      function r(t) {
        throw new Error(t)
      }
      if (e) {
        if (e.basePath) return i = i || {}, i.type = "video", i.mediaObjectView || (i.mediaObjectView = new n(t, e, i)), i.mediaObjectView;
        r("Please provide a valid mediaSrc object with a basePath property.")
      } else r("Please provide both a valid container element and a valid mediaSrc object as arguments.")
    }
  }, {
    "./../views/VideoView": 793
  }],
  790: [function(t, e, i) {
    "use strict";

    function n(t) {
      r.apply(this, arguments)
    }
    var r = t("@marcom/ac-mvc-model").Model,
      o = t("@marcom/ac-object"),
      s = n.prototype = o.create(r.prototype);
    s.defaultAttributes = {
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
    }, s.getPaused = function() {
      return this.get("paused")
    }, s.getEnded = function() {
      return this.get("ended")
    }, s.getReady = function() {
      return this.get("ready")
    }, s.getDestroyed = function() {
      return this.get("destroyed")
    }, s.getLoadStart = function() {
      return this.get("loadedStart")
    }, s.getLoaded = function() {
      return this.get("loaded")
    }, s.getError = function() {
      return this.get("error")
    }, s.getCurrentTime = function() {
      return this.get("currentTime")
    }, s.getPlaybackRate = function() {
      return this.get("playbackRate")
    }, s.getDuration = function() {
      return this.get("duration")
    }, s.getPreload = function() {
      return this.get("preload")
    }, s.getAutoplay = function() {
      return this.get("autoplay")
    }, s.getFrameRate = function() {
      return this.get("frameRate")
    }, s.getEnhanced = function() {
      return this.get("enhanced")
    }, s.getLooping = function() {
      return this.get("looping")
    }, s.setPaused = function(t) {
      this.set({
        paused: t
      })
    }, s.setEnded = function(t) {
      this.set({
        ended: t
      })
    }, s.setReady = function(t) {
      this.set({
        ready: t
      })
    }, s.setDestroyed = function(t) {
      this.set({
        destroyed: t
      })
    }, s.setDuration = function(t) {
      this.set({
        duration: t
      })
    }, s.setLoadStart = function(t) {
      this.set({
        loadStart: t
      })
    }, s.setLoaded = function(t) {
      this.set({
        loaded: t
      })
    }, s.setError = function(t) {
      this.set({
        error: t
      })
    }, s.setCurrentTime = function(t) {
      this.set({
        currentTime: t
      })
    }, s.setPlaybackRate = function(t) {
      this.set({
        playbackRate: t
      })
    }, s.setPreload = function(t) {
      this.set({
        preload: t
      })
    }, s.setAutoplay = function(t) {
      this.set({
        autoplay: t
      })
    }, s.setFrameRate = function(t) {
      this.set({
        frameRate: t
      })
    }, s.setEnhanced = function(t) {
      this.set({
        enhanced: t
      })
    }, s.setLooping = function(t) {
      this.set({
        looping: t
      })
    }, e.exports = n
  }, {
    "@marcom/ac-mvc-model": 779,
    "@marcom/ac-object": 804
  }],
  791: [function(t, e, i) {
    "use strict";
    var n = t("./../models/MediaModel"),
      r = t("@marcom/ac-mvc-view").View,
      o = t("@marcom/ac-object"),
      s = t("@marcom/ac-classlist"),
      a = function(t, e, i) {
        r.call(this, {
          element: t
        }), this.options = i || {}, this.mediaSrc = e || "", this.model = this.options.model || new n(this.options), this._onLoadStartChange = this._onLoadStartChange.bind(this), this._onLoadedChange = this._onLoadedChange.bind(this), this._onPausedChange = this._onPausedChange.bind(this), this._onReadyChange = this._onReadyChange.bind(this), this._onErrorChange = this._onErrorChange.bind(this), this._onEnhancedChange = this._onEnhancedChange.bind(this), this._onCurrentTimeChange = this._onCurrentTimeChange.bind(this), this._onPlaybackRateChange = this._onPlaybackRateChange.bind(this), this._onDestroyedChange = this._onDestroyedChange.bind(this), this._onEndedChange = this._onEndedChange.bind(this), this._respondToPlay = this._respondToPlay.bind(this), this._respondToPause = this._respondToPause.bind(this), this._respondToTimeUpdate = this._respondToTimeUpdate.bind(this), this._respondToEnded = this._respondToEnded.bind(this), this._respondToDurationChange = this._respondToDurationChange.bind(this), this._respondToRateChange = this._respondToRateChange.bind(this), this._init()
      },
      c = a.prototype = o.create(r.prototype);
    c._init = function() {
      this._createMediaElement(), this._createMediaEmitter(), this._createMediaLoader(), this._bindEvents(), this._config()
    }, c._createMediaElement = function() {}, c._createMediaEmitter = function() {}, c._createMediaLoader = function() {}, c._config = function() {
      this.options.preload === !0 && (this._setPreload(!0),
        this.load()), this.options.autoplay === !0 && this._setAutoplay(!0), this.options.looping === !0 && this._setLooping(!0), this.options.frameRate && this._setFrameRate(this.options.frameRate)
    }, c._bindEvents = function() {
      this._bindViewEvents(), this._bindModelEvents()
    }, c._bindModelEvents = function() {
      this.model.on("change:loadStart", this._onLoadStartChange), this.model.on("change:loaded", this._onLoadedChange), this.model.on("change:paused", this._onPausedChange), this.model.on("change:ready", this._onReadyChange), this.model.on("change:error", this._onErrorChange), this.model.on("change:enhanced", this._onEnhancedChange), this.model.on("change:currentTime", this._onCurrentTimeChange), this.model.on("change:playbackRate", this._onPlaybackRateChange), this.model.on("change:destroyed", this._onDestroyedChange), this.model.on("change:ended", this._onEndedChange)
    }, c._onLoadStartChange = function() {
      this.trigger("loadstart")
    }, c._onLoadedChange = function() {
      this.trigger("loaded")
    }, c._onPausedChange = function(t) {
      t.value === !0 ? (this.trigger("pause"), s.remove(this.el, "mediaObject-playing")) : (this.trigger("play"), s.remove(this.el, "mediaObject-ended"), s.add(this.el, "mediaObject-playing"))
    }, c._onReadyChange = function() {
      this.trigger("ready")
    }, c._onErrorChange = function() {
      this.trigger("error")
    }, c._onEnhancedChange = function() {
      s.add(this.el, "mediaObject-enhanced"), s.add(this.mediaElement, "mediaObject-element"), this.trigger("enhanced")
    }, c._onCurrentTimeChange = function() {
      this.trigger("timeupdate")
    }, c._onPlaybackRateChange = function() {
      this.trigger("ratechange")
    }, c._onDestroyedChange = function() {
      s.remove(this.el, "mediaObject-playing"), s.remove(this.el, "mediaObject-ended"), s.remove(this.el, "mediaObject-enhanced"), s.add(this.el, "mediaObject-destroyed"), this.trigger("destroyed")
    }, c._onEndedChange = function(t) {
      t.value === !0 && this.trigger("ended")
    }, c._bindViewEvents = function() {
      this.mediaEmitter && (this.mediaEmitter.on("play", this._respondToPlay), this.mediaEmitter.on("pause", this._respondToPause), this.mediaEmitter.on("timeupdate", this._respondToTimeUpdate), this.mediaEmitter.on("ended", this._respondToEnded), this.mediaEmitter.on("durationchange", this._respondToDurationChange), this.mediaEmitter.on("ratechange", this._respondToRateChange))
    }, c._respondToPlay = function() {
      this.model.set({
        ended: !1,
        paused: !1
      })
    }, c._respondToPause = function() {
      this.model.setPaused(!0)
    }, c._respondToTimeUpdate = function() {
      var t = 0;
      if (this.mediaElement.currentTime) t = this.mediaElement.currentTime;
      else {
        if (!this.mediaEmitter.currentTime) return;
        t = this.mediaEmitter.currentTime
      }
      this.getCurrentTime() !== t && this.model.set({
        currentTime: t
      })
    }, c._respondToEnded = function() {
      this.model.set({
        ended: !0,
        paused: !0
      }), s.remove(this.el, "mediaObject-playing"), s.add(this.el, "mediaObject-ended")
    }, c._respondToDurationChange = function() {
      var t = 0;
      if (this.mediaElement.duration) t = this.mediaElement.duration;
      else {
        if (!this.mediaEmitter.duration) return;
        t = this.mediaEmitter.duration
      }
      this.model.set({
        duration: t
      })
    }, c._respondToRateChange = function() {
      var t = 0;
      if (this.mediaElement.playbackRate) t = this.mediaElement.playbackRate;
      else {
        if (!this.mediaEmitter.playbackRate) return;
        t = this.mediaEmitter.playbackRate
      }
      this.model.set({
        playbackRate: t
      })
    }, c.enhance = function() {}, c.play = function() {}, c.pause = function() {}, c.reset = function() {}, c.destroy = function() {}, c.setCurrentTime = function(t) {}, c.setPlaybackRate = function(t) {}, c.goToFrame = function(t) {
      var e = t / this.model.frameRate;
      return this.setCurrentTime(e)
    }, c.goToPercent = function(t) {
      var e = t * this.getDuration();
      return this.setCurrentTime(e)
    }, c._setReady = function(t) {
      this.model.setReady(t)
    }, c._setLoadStart = function(t) {
      this.model.setLoadStart(t)
    }, c._setLoaded = function(t) {
      this.model.setLoaded(t)
    }, c._setError = function(t) {
      this.model.setError(t)
    }, c._setDuration = function(t) {
      this.model.setDuration(t)
    }, c._setPreload = function(t) {
      this.model.setPreload(t)
    }, c._setAutoplay = function(t) {
      this.model.setAutoplay(t)
    }, c._setFrameRate = function(t) {
      this.model.setFrameRate(t)
    }, c._setEnhanced = function(t) {
      this.model.setEnhanced(t)
    }, c._setDestroyed = function(t) {
      this.model.setDestroyed(t)
    }, c._setLooping = function(t) {}, c.getType = function() {
      return this.model.getType()
    }, c.getPaused = function() {
      return this.model.getPaused()
    }, c.getEnded = function() {
      return this.model.getEnded()
    }, c.getReady = function() {
      return this.model.getReady()
    }, c.getLoadStart = function() {
      return this.model.getLoadStart()
    }, c.getLoaded = function() {
      return this.model.getLoaded()
    }, c.getError = function() {
      return this.model.getError()
    }, c.getDuration = function() {
      return this.model.getDuration()
    }, c.getEnhanced = function() {
      return this.model.getEnhanced()
    }, c.getCurrentTime = function() {
      return this.model.getCurrentTime()
    }, c.getCurrentFrame = function() {
      return Math.floor(this.getCurrentTime() * this.options.frameRate)
    }, c.getCurrentPercent = function() {
      return this.model.getCurrentTime() / this.getDuration()
    }, c.getPlaybackRate = function() {
      return this.model.getPlaybackRate()
    }, c.getFrameRate = function() {
      return this.model.getFrameRate()
    }, c.getPreload = function() {
      return this.model.getPreload()
    }, c.getAutoplay = function() {
      return this.model.getAutoplay()
    }, c.getLooping = function() {
      return this.model.getLooping()
    }, c.getDestroyed = function() {
      return !this.model || this.model.getDestroyed()
    }, e.exports = a
  }, {
    "./../models/MediaModel": 790,
    "@marcom/ac-classlist": 709,
    "@marcom/ac-mvc-view": 785,
    "@marcom/ac-object": 804
  }],
  792: [function(t, e, i) {
    "use strict";
    var n = t("./BaseView"),
      r = t("@marcom/ac-dom-nodes"),
      o = t("@marcom/ac-flow").createFlow,
      s = t("@marcom/ac-object/create"),
      a = function(t, e, i) {
        n.call(this, t, e, i), this._onLoad = this._onLoad.bind(this), this._onError = this._onError.bind(this), this._onReady = this._onReady.bind(this)
      },
      c = a.prototype = s(n.prototype);
    c._createMediaElement = function() {
      this.mediaElement = document.createElement("canvas")
    }, c._createMediaEmitter = function() {
      this.flowOptions = {
        element: this.mediaElement,
        preload: !1,
        keyframeCache: this.options.keyframeCache || !1
      }, this.mediaEmitter = o(this.flowOptions, this.mediaSrc)
    }, c._createMediaLoader = function() {
      this.mediaLoader = this.mediaEmitter
    }, c.load = function() {
      if (this._setLoadStart(!0), this.mediaLoader.once("loaded", this._onLoad), this.mediaLoader.once("error", this._onError), this.mediaEmitter.once("canplaythrough", this._onReady), !this.loaded) return this._load()
    }, c._load = function() {
      return this.mediaLoader.load()
    }, c._onLoad = function() {
      this._setLoaded(!0)
    }, c._onError = function() {
      this._setError(!0)
    }, c._onReady = function() {
      this._setReady(!0), this._setDuration(this.mediaEmitter.duration), this.setPlaybackRate(this.getPlaybackRate()), this._totalFrames = this._getTotalFrames(), this.getAutoplay() && (this.getEnhanced === !1 && this.enhance(), this.play())
    }, c._getTotalFrames = function() {
      return this.getDuration() * this.getFrameRate()
    }, c.enhance = function() {
      this._setEnhanced(!0), window.requestAnimationFrame(function() {
        this.mediaElement && this._inject()
      }.bind(this))
    }, c._inject = function() {
      r.insertFirstChild(this.mediaElement, this.el)
    }, c.destroy = function() {
      this.getDestroyed() || (this._remove(), this._setDestroyed(!0), this.mediaEmitter.off(), this._destroy(this, !0))
    }, c._remove = function() {
      r.remove(this.mediaElement)
    }, c._destroy = function(t, e) {
      if ("function" == typeof t.off && t.off(), e) {
        var i;
        for (i in t) t.hasOwnProperty(i) && (t[i] = null)
      }
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
    "./BaseView": 791,
    "@marcom/ac-dom-nodes": 726,
    "@marcom/ac-flow": 758,
    "@marcom/ac-object/create": 806
  }],
  793: [function(t, e, i) {
    "use strict";
    var n = t("./BaseView"),
      r = n.prototype,
      o = t("@marcom/ac-dom-nodes"),
      s = t("@marcom/ac-dom-emitter").DOMEmitter,
      a = t("@marcom/ac-dom-styles"),
      c = t("@marcom/ac-asset-loader").AssetLoader,
      l = t("@marcom/ac-asset-loader").Asset.Video,
      u = t("@marcom/ac-browser"),
      h = t("@marcom/ac-feature").isHandheld,
      d = t("@marcom/ac-feature").isTablet,
      m = t("@marcom/ac-object/create"),
      p = function(t, e, i) {
        this.srcForVideoEl = null, this._cannotPlayInlineVideo = null, n.call(this, t, e, i), this._onLoaded = this._onLoaded.bind(this), this._onReady = this._onReady.bind(this)
      },
      f = p.prototype = m(n.prototype);
    f._createMediaElement = function() {
      this.mediaElement = document.createElement("video")
    }, f._createMediaEmitter = function() {
      this.mediaEmitter = new s(this.mediaElement)
    }, f._createMediaLoader = function() {
      var t, e;
      this.mediaSrc.basePath = this._forceTrailingSlash(this.mediaSrc.basePath), this.mediaSrc.splitFileLoading ? (t = this.mediaSrc.basePath, e = new l(t, {
        element: this.mediaElement,
        forceElementLoading: !1,
        split: !0
      }), this.mediaLoader = new c(e)) : (this.mediaSrc.fileFormat = this._checkFileFormat(this.mediaSrc.fileFormat), t = this.mediaSrc.basePath + this.mediaSrc.filename + this.mediaSrc.fileFormat, this.mediaLoader = this.mediaEmitter.loader, this.srcForVideoEl = t)
    }, f._forceTrailingSlash = function(t) {
      return t && t.lastIndexOf("/") !== t.length - 1 && (t += "/"), t
    }, f._checkFileFormat = function(t) {
      return t && 0 !== t.lastIndexOf(".") && (t = "." + t), t
    }, f.load = function() {
      if (this._setLoadStart(!0), this.mediaSrc.splitFileLoading) {
        var t = function() {
            this.mediaEmitter.once("loadeddata", this._onLoaded), this.mediaEmitter.once("canplaythrough", this._onReady)
          }.bind(this),
          e = function() {
            throw this._setError(!0), new Error("Video failed to load.")
          }.bind(this);
        this.mediaLoader.load().then(t, e)
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
      this._setEnhanced(!0), window.requestAnimationFrame(function() {
        "VIDEO" === this.mediaElement.tagName && (o.insertLastChild(this.mediaElement, this.el), a.setStyle(this.mediaElement, {
          visibility: "hidden"
        }), window.requestAnimationFrame(function() {
          this.mediaElement && (this.setPlaybackRate(this.getPlaybackRate()), a.setStyle(this.mediaElement, {
            visibility: "visible"
          }))
        }.bind(this)))
      }.bind(this))
    }, f.destroy = function() {
      this.getDestroyed() || (this._remove(), this._setDestroyed(!0), this.mediaEmitter.off(), this._destroy(this, !0))
    }, f._remove = function() {
      o.remove(this.mediaElement)
    }, f._destroy = function(t, e) {
      if ("function" == typeof t.off && t.off(), e) {
        var i;
        for (i in t) t.hasOwnProperty(i) && (t[i] = null)
      }
    }, f._onEndedChange = function(t) {
      r._onEndedChange.call(this, t), "iOS" === u.os && h() && t.value === !0 && this.mediaElement.webkitExitFullScreen()
    }, f.play = function() {
      this.model.getPaused() !== !1 && this.mediaElement.play()
    }, f.pause = function() {
      this.model.getPaused() !== !0 && this.mediaElement.pause()
    }, f.reset = function() {
      0 !== this.model.getCurrentTime() && (this.setCurrentTime(0), this.pause())
    }, f.setCurrentTime = function(t) {
      this.mediaElement.duration && (this.mediaElement.currentTime = t)
    }, f.setPlaybackRate = function(t) {
      this.mediaElement.playbackRate = t
    }, f._setLooping = function(t) {
      this.mediaElement.loop = t, this.model.setLooping(t)
    }, e.exports = p
  }, {
    "./BaseView": 791,
    "@marcom/ac-asset-loader": 685,
    "@marcom/ac-browser": 698,
    "@marcom/ac-dom-emitter": 714,
    "@marcom/ac-dom-nodes": 726,
    "@marcom/ac-dom-styles": 745,
    "@marcom/ac-feature": 184,
    "@marcom/ac-object/create": 806
  }],
  794: [function(t, e, i) {
    arguments[4][67][0].apply(i, arguments)
  }, {
    "./ac-clock/Clock": 795,
    "./ac-clock/ThrottledClock": 796,
    "./ac-clock/sharedClockInstance": 797,
    dup: 67
  }],
  795: [function(t, e, i) {
    arguments[4][68][0].apply(i, arguments)
  }, {
    "@marcom/ac-event-emitter-micro": 168,
    "@marcom/ac-polyfills/Function/prototype.bind": void 0,
    "@marcom/ac-polyfills/requestAnimationFrame": void 0,
    dup: 68
  }],
  796: [function(t, e, i) {
    arguments[4][69][0].apply(i, arguments)
  }, {
    "./sharedClockInstance": 797,
    "@marcom/ac-event-emitter-micro": 168,
    "@marcom/ac-polyfills/requestAnimationFrame": void 0,
    dup: 69
  }],
  797: [function(t, e, i) {
    arguments[4][70][0].apply(i, arguments)
  }, {
    "./Clock": 795,
    dup: 70
  }],
  798: [function(t, e, i) {
    "use strict";

    function n(t) {
      r.call(this), this.options = t || {}, this.min = this.options.min || 0, this.max = this.options.max || 1, this._boundHandleClockUpdate = this._handleClockUpdate.bind(this), this._boundHandleClockDraw = this._handleClockDraw.bind(this), this.options.easingFunction && (this.easingFunction = this.options.easingFunction), this.clock = this.options.clock || o, this.usesSharedClock = this.clock === o, this._isRunning = !1, this.specificity = this.options.specificity || 4, this.friction = this.options.friction || 10, this._targetValue = null, this._currentValue = null, this._shouldUpdate = !1, this._shouldEmitChange = !1
    }
    t("@marcom/ac-polyfills/Object/create");
    var r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      o = t("@marcom/ac-clock"),
      s = n.prototype = Object.create(r.prototype);
    s.destroy = function() {
      this.trigger("destroy"), this.stop(), this.off(), this.usesSharedClock || this.clock.destroy();
      var t;
      for (t in this) this.hasOwnProperty(t) && (this[t] = null);
      this._isRunning = !1
    }, s.start = function() {
      this.clock && !this._isRunning && (this._bindEvents(), this._isRunning = !0, this.clock.start())
    }, s.stop = function() {
      this.clock && this._isRunning && (this._unbindEvents(), this._isRunning = !1, this.usesSharedClock || this.clock.stop())
    }, s.isRunning = function() {
      return this._isRunning
    }, s.setProgress = function(t) {
      this._targetValue !== t && (this._targetValue = t, this._shouldUpdate = !0)
    }, s.updateValue = function(t) {
      null === this._currentValue && (this._currentValue = this._targetValue);
      var e = 1;
      if (this.easingFunction) {
        var i = this.max - this.min,
          n = this.max - (this.max - this._targetValue) / i,
          r = this.max - (this.max - this._currentValue) / i,
          o = 1 - Math.abs(n - r),
          s = this.easingFunction(o, 0, 1, 1);
        e = 1 + (s - o)
      }
      var a = 1;
      t && t.naturalFps !== t.fps && (a = t.naturalFps / t.fps);
      var c = this._targetValue - this._currentValue,
        l = c * e * a * (1 / this.friction),
        u = parseFloat((this._currentValue + l).toFixed(this.specificity));
      u === this._currentValue ? this._currentValue = this._targetValue : this._currentValue = u, this._shouldEmitChange = !0
    }, s._bindEvents = function() {
      this.clock.on("update", this._boundHandleClockUpdate), this.clock.on("draw", this._boundHandleClockDraw)
    }, s._unbindEvents = function() {
      this.clock.off("update", this._boundHandleClockUpdate), this.clock.off("draw", this._boundHandleClockDraw)
    }, s._handleClockUpdate = function(t) {
      this._shouldUpdate && this.updateValue(t), this._shouldEmitChange && (t.progress = this._currentValue, this.trigger("update", t))
    }, s._handleClockDraw = function(t) {
      if (this._shouldEmitChange) return t.progress = this._currentValue, this.trigger("draw", t), this._targetValue === this._currentValue ? (this._shouldUpdate = !1, void(this._shouldEmitChange = !1)) : void(this._shouldUpdate = !0)
    }, e.exports = n
  }, {
    "@marcom/ac-clock": 794,
    "@marcom/ac-event-emitter-micro": 168,
    "@marcom/ac-polyfills/Object/create": void 0
  }],
  799: [function(t, e, i) {
    "use strict";
    var n = t("qs");
    e.exports = function(t, e) {
      var i = n.stringify(t, {
        strictNullHandling: !0
      });
      return i && e !== !1 && (i = "?" + i), i
    }
  }, {
    qs: 800
  }],
  800: [function(t, e, i) {
    var n = t("./stringify"),
      r = t("./parse");
    e.exports = {
      stringify: n,
      parse: r
    }
  }, {
    "./parse": 801,
    "./stringify": 802
  }],
  801: [function(t, e, i) {
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
      for (var i = {}, r = t.split(e.delimiter, e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit), o = 0, s = r.length; o < s; ++o) {
        var a = r[o],
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
      var n, o = t.shift();
      if ("[]" === o) n = [], n = n.concat(r.parseObject(t, e, i));
      else {
        n = i.plainObjects ? Object.create(null) : {};
        var s = "[" === o[0] && "]" === o[o.length - 1] ? o.slice(1, o.length - 1) : o,
          a = parseInt(s, 10),
          c = "" + a;
        !isNaN(a) && o !== s && c === s && a >= 0 && i.parseArrays && a <= i.arrayLimit ? (n = [], n[a] = r.parseObject(t, e, i)) : n[s] = r.parseObject(t, e, i)
      }
      return n
    }, r.parseKeys = function(t, e, i) {
      if (t) {
        i.allowDots && (t = t.replace(/\.([^\.\[]+)/g, "[$1]"));
        var n = /^([^\[\]]*)/,
          o = /(\[[^\[\]]*\])/g,
          s = n.exec(t),
          a = [];
        if (s[1]) {
          if (!i.plainObjects && Object.prototype.hasOwnProperty(s[1]) && !i.allowPrototypes) return;
          a.push(s[1])
        }
        for (var c = 0; null !== (s = o.exec(t)) && c < i.depth;) ++c, (i.plainObjects || !Object.prototype.hasOwnProperty(s[1].replace(/\[|\]/g, "")) || i.allowPrototypes) && a.push(s[1]);
        return s && a.push("[" + t.slice(s.index) + "]"), r.parseObject(a, e, i)
      }
    }, e.exports = function(t, e) {
      if (e = e || {}, e.delimiter = "string" == typeof e.delimiter || n.isRegExp(e.delimiter) ? e.delimiter : r.delimiter, e.depth = "number" == typeof e.depth ? e.depth : r.depth, e.arrayLimit = "number" == typeof e.arrayLimit ? e.arrayLimit : r.arrayLimit, e.parseArrays = e.parseArrays !== !1, e.allowDots = e.allowDots !== !1, e.plainObjects = "boolean" == typeof e.plainObjects ? e.plainObjects : r.plainObjects, e.allowPrototypes = "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : r.allowPrototypes, e.parameterLimit = "number" == typeof e.parameterLimit ? e.parameterLimit : r.parameterLimit, e.strictNullHandling = "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : r.strictNullHandling, "" === t || null === t || "undefined" == typeof t) return e.plainObjects ? Object.create(null) : {};
      for (var i = "string" == typeof t ? r.parseValues(t, e) : t, o = e.plainObjects ? Object.create(null) : {}, s = Object.keys(i), a = 0, c = s.length; a < c; ++a) {
        var l = s[a],
          u = r.parseKeys(l, i[l], e);
        o = n.merge(o, u, e)
      }
      return n.compact(o)
    }
  }, {
    "./utils": 803
  }],
  802: [function(t, e, i) {
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
    r.stringify = function(t, e, i, o, s) {
      if ("function" == typeof s) t = s(e, t);
      else if (n.isBuffer(t)) t = t.toString();
      else if (t instanceof Date) t = t.toISOString();
      else if (null === t) {
        if (o) return n.encode(e);
        t = ""
      }
      if ("string" == typeof t || "number" == typeof t || "boolean" == typeof t) return [n.encode(e) + "=" + n.encode(t)];
      var a = [];
      if ("undefined" == typeof t) return a;
      for (var c = Array.isArray(s) ? s : Object.keys(t), l = 0, u = c.length; l < u; ++l) {
        var h = c[l];
        a = Array.isArray(t) ? a.concat(r.stringify(t[h], i(e, h), i, o, s)) : a.concat(r.stringify(t[h], e + "[" + h + "]", i, o, s))
      }
      return a
    }, e.exports = function(t, e) {
      e = e || {};
      var i, n, o = "undefined" == typeof e.delimiter ? r.delimiter : e.delimiter,
        s = "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : r.strictNullHandling;
      "function" == typeof e.filter ? (n = e.filter, t = n("", t)) : Array.isArray(e.filter) && (i = n = e.filter);
      var a = [];
      if ("object" != typeof t || null === t) return "";
      var c;
      c = e.arrayFormat in r.arrayPrefixGenerators ? e.arrayFormat : "indices" in e ? e.indices ? "indices" : "repeat" : "indices";
      var l = r.arrayPrefixGenerators[c];
      i || (i = Object.keys(t));
      for (var u = 0, h = i.length; u < h; ++u) {
        var d = i[u];
        a = a.concat(r.stringify(t[d], d, l, s, n))
      }
      return a.join(o)
    }
  }, {
    "./utils": 803
  }],
  803: [function(t, e, i) {
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
      for (var r = Object.keys(e), o = 0, s = r.length; o < s; ++o) {
        var a = r[o],
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
        var o = t.charCodeAt(i);
        45 === o || 46 === o || 95 === o || 126 === o || o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 ? e += t[i] : o < 128 ? e += n.hexTable[o] : o < 2048 ? e += n.hexTable[192 | o >> 6] + n.hexTable[128 | 63 & o] : o < 55296 || o >= 57344 ? e += n.hexTable[224 | o >> 12] + n.hexTable[128 | o >> 6 & 63] + n.hexTable[128 | 63 & o] : (++i, o = 65536 + ((1023 & o) << 10 | 1023 & t.charCodeAt(i)), e += n.hexTable[240 | o >> 18] + n.hexTable[128 | o >> 12 & 63] + n.hexTable[128 | o >> 6 & 63] + n.hexTable[128 | 63 & o])
      }
      return e
    }, i.compact = function(t, e) {
      if ("object" != typeof t || null === t) return t;
      e = e || [];
      var n = e.indexOf(t);
      if (n !== -1) return e[n];
      if (e.push(t), Array.isArray(t)) {
        for (var r = [], o = 0, s = t.length; o < s; ++o) "undefined" != typeof t[o] && r.push(t[o]);
        return r
      }
      var a = Object.keys(t);
      for (o = 0, s = a.length; o < s; ++o) {
        var c = a[o];
        t[c] = i.compact(t[c], e)
      }
      return t
    }, i.isRegExp = function(t) {
      return "[object RegExp]" === Object.prototype.toString.call(t)
    }, i.isBuffer = function(t) {
      return null !== t && "undefined" != typeof t && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
    }
  }, {}],
  804: [function(t, e, i) {
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
    "./clone": 805,
    "./create": 806,
    "./defaults": 807,
    "./extend": 808,
    "./getPrototypeOf": 809,
    "./isDate": 810,
    "./isEmpty": 811,
    "./isRegExp": 812,
    "./toQueryParameters": 813
  }],
  805: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Array/isArray");
    var n = t("./extend"),
      r = Object.prototype.hasOwnProperty,
      o = function(t, e) {
        var i;
        for (i in e) r.call(e, i) && (null === e[i] ? t[i] = null : "object" == typeof e[i] ? (t[i] = Array.isArray(e[i]) ? [] : {}, o(t[i], e[i])) : t[i] = e[i]);
        return t
      };
    e.exports = function(t, e) {
      return e ? o({}, t) : n({}, t)
    }
  }, {
    "./extend": 808,
    "@marcom/ac-polyfills/Array/isArray": void 0
  }],
  806: [function(t, e, i) {
    "use strict";
    var n = function() {};
    e.exports = function(t) {
      if (arguments.length > 1) throw new Error("Second argument not supported");
      if (null === t || "object" != typeof t) throw new TypeError("Object prototype may only be an Object.");
      return "function" == typeof Object.create ? Object.create(t) : (n.prototype = t, new n)
    }
  }, {}],
  807: [function(t, e, i) {
    "use strict";
    var n = t("./extend");
    e.exports = function(t, e) {
      if ("object" != typeof t) throw new TypeError("defaults: must provide a defaults object");
      if (e = e || {}, "object" != typeof e) throw new TypeError("defaults: options must be a typeof object");
      return n({}, t, e)
    }
  }, {
    "./extend": 808
  }],
  808: [function(t, e, i) {
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
  809: [function(t, e, i) {
    "use strict";
    var n = Object.prototype.hasOwnProperty;
    e.exports = function(t) {
      if (Object.getPrototypeOf) return Object.getPrototypeOf(t);
      if ("object" != typeof t) throw new Error("Requested prototype of a value that is not an object.");
      if ("object" == typeof this.__proto__) return t.__proto__;
      var e, i = t.constructor;
      if (n.call(t, "constructor")) {
        if (e = i, !delete t.constructor) return null;
        i = t.constructor, t.constructor = e
      }
      return i ? i.prototype : null
    }
  }, {}],
  810: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return "[object Date]" === Object.prototype.toString.call(t)
    }
  }, {}],
  811: [function(t, e, i) {
    "use strict";
    var n = Object.prototype.hasOwnProperty;
    e.exports = function(t) {
      var e;
      if ("object" != typeof t) throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object");
      for (e in t)
        if (n.call(t, e)) return !1;
      return !0
    }
  }, {}],
  812: [function(t, e, i) {
    "use strict";
    e.exports = function(t) {
      return !!window.RegExp && t instanceof RegExp
    }
  }, {}],
  813: [function(t, e, i) {
    "use strict";
    var n = t("@marcom/ac-url/joinSearchParams");
    e.exports = function(t) {
      if ("object" != typeof t) throw new TypeError("toQueryParameters error: argument is not an object");
      return n(t, !1)
    }
  }, {
    "@marcom/ac-url/joinSearchParams": 799
  }],
  814: [function(t, e, i) {
    "use strict";
    e.exports = {
      Queue: t("./ac-queue/Queue"),
      QueueItem: t("./ac-queue/QueueItem"),
      LiveQueue: t("./ac-queue/LiveQueue")
    }
  }, {
    "./ac-queue/LiveQueue": 815,
    "./ac-queue/Queue": 816,
    "./ac-queue/QueueItem": 817
  }],
  815: [function(t, e, i) {
    "use strict";

    function n(t) {
      this._queue = new r, this._maxProcesses = t || 1, this._availableSlots = this._maxProcesses, this._rafId = 0, this._isRunning = !1, this._boundFunctions = {
        _run: this._run.bind(this),
        _releaseSlot: this._releaseSlot.bind(this)
      }
    }
    t("@marcom/ac-polyfills/Promise"), t("@marcom/ac-polyfills/requestAnimationFrame"), t("@marcom/ac-polyfills/Function/prototype.bind");
    var r = t("./Queue"),
      o = (t("./QueueItem"), n.prototype);
    o.start = function() {
      this._isRunning && cancelAnimationFrame(this._rafId), this._rafId = requestAnimationFrame(this._boundFunctions._run), this._isRunning = !0
    }, o.pause = function() {
      this._isRunning && (cancelAnimationFrame(this._rafId), this._rafId = 0), this._isRunning = !1
    }, o.stop = function() {
      this.pause(), this.clear()
    }, o.enqueue = function(t, e) {
      if ("function" != typeof t) throw new Error("LiveQueue can only enqueue functions");
      return this._queue.enqueue(t, e)
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
      if (this._isRunning && (this._rafId = requestAnimationFrame(this._boundFunctions._run), !this._queue.isEmpty() && 0 != this._availableSlots)) {
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
    "./Queue": 816,
    "./QueueItem": 817,
    "@marcom/ac-polyfills/Function/prototype.bind": void 0,
    "@marcom/ac-polyfills/Promise": void 0,
    "@marcom/ac-polyfills/requestAnimationFrame": void 0
  }],
  816: [function(t, e, i) {
    "use strict";

    function n() {
      this._items = []
    }
    var r = t("./QueueItem"),
      o = n.prototype;
    o.enqueue = function(t, e) {
      return void 0 === e && (e = n.PRIORITY_DEFAULT), this.enqueueQueueItem(new r(t, e))
    }, o.enqueueQueueItem = function(t) {
      return this._items.push(t), t
    }, o.dequeue = function() {
      this._heapSort();
      var t = this._items.length - 1,
        e = this._items[0];
      return this._items[0] = this._items[t], this._items.pop(), e
    }, o.peek = function() {
      return 0 == this.count() ? null : (this._heapSort(), this._items[0])
    }, o.isEmpty = function() {
      return 0 === this._items.length
    }, o.count = function() {
      return this._items.length
    }, o.toString = function() {
      for (var t = ["Queue total items: " + this.count() + "\n"], e = 0; e < this.count(); ++e) t.push(this._items[e].toString() + "\n");
      return t.join("")
    }, o._heapSort = function() {
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
    "./QueueItem": 817
  }],
  817: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      this.priority = e, this.data = t, this.insertionOrder = r++
    }
    var r = 0,
      o = n.prototype;
    o.compareTo = function(t) {
      return this.priority < t.priority ? -1 : this.priority > t.priority ? 1 : this.insertionOrder < t.insertionOrder ? -1 : 1
    }, o.toString = function() {
      return "QueueItem {priority:" + this.priority + ",\tdata:" + this.data + "\tinsertionOrder:" + this.insertionOrder + "}"
    }, e.exports = n
  }, {}],
  818: [function(t, e, i) {
    "use strict";

    function n(t) {
      s.call(this), this.options = r(u, t), this.loadingOptions = null, this.els = [], this.loadingQueue = null, this._queueItems = [], this._queueItemsObj = {}, this._loadOrder = [], this._timeout = null, this._didCallLoad = !1
    }
    t("@marcom/ac-polyfills/Object/create"), t("@marcom/ac-polyfills/Element/prototype.classList");
    var r = t("@marcom/ac-object/defaults"),
      o = t("@marcom/ac-queue").LiveQueue,
      s = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      a = t("@marcom/ac-dom-events/addEventListener"),
      c = t("@marcom/ac-dom-events/removeEventListener"),
      l = t("@marcom/ac-dom-traversal/querySelectorAll"),
      u = {
        container: document.body,
        includeContainer: !1
      },
      h = {
        loadingPoolSize: 8,
        timeout: null,
        imageClassName: "progressive-image"
      },
      d = n.prototype = Object.create(s.prototype);
    d.load = function(t) {
      if (!this._didCallLoad) {
        this._didCallLoad = !0, this.loadingOptions = r(h, t), this.loadingQueue = new o(this.loadingOptions.loadingPoolSize);
        var e = this._getProgressiveClassName(),
          i = "." + e;
        this.els = l(i, this.options.container), this.options.includeContainer && this.options.container.classList.contains(e) && this.els.unshift(this.options.container);
        var n, s, a = this.els.length;
        for (n = 0; n < a; n++) s = {
          queueItem: this.loadingQueue.enqueue(this._loadNextItem.bind(this, n), n),
          el: this.els[n],
          id: n
        }, this._queueItems.push(s), this._queueItemsObj[n] = s;
        this.loadingQueue.start(), "number" == typeof this.loadingOptions.timeout && (this._timeout = setTimeout(this.cancel.bind(this), this.loadingOptions.timeout))
      }
    }, d.setVisible = function(t) {
      t.classList.remove(this.loadingOptions.imageClassName)
    }, d.cancel = function() {
      if (this.els) {
        var t, e = this.els.length;
        for (t = 0; t < e; t++) this.setVisible(this.els[t])
      }
      this._handleLoadingComplete()
    }, d.destroy = function() {
      this.cancel(), this.off(), s.prototype.destroy.call(this)
    }, d._loadNextItem = function(t) {
      return new Promise(function(t, e, i) {
        var n = this._queueItemsObj[t];
        this._loadAndSetVisible(n.el).then(function() {
          var t = this._queueItems.indexOf(n);
          this._queueItems.splice(t, 1), this._queueItemsObj[n.id] = null, e(), this._handleImageLoad(n.el), n = e = null, 1 === this.loadingQueue.count() && this._handleLoadingComplete()
        }.bind(this))
      }.bind(this, t))
    }, d._loadAndSetVisible = function(t) {
      this.setVisible(t);
      var e = this._getBackgroundImageSrc(t);
      return this._loadImage(e)
    }, d._getBackgroundImageSrc = function(t) {
      var e = t.currentStyle;
      return e || (e = window.getComputedStyle(t, !1)), 0 === e.backgroundImage.indexOf("url(") ? e.backgroundImage.slice(4, -1).replace(/"/g, "") : null
    }, d._getProgressiveClassName = function() {
      return this.loadingOptions.imageClassName
    }, d._loadImage = function(t) {
      return new Promise(this._loadImagePromiseFunc.bind(this, t))
    }, d._loadImagePromiseFunc = function(t, e, i) {
      function n() {
        c(this, "load", n), e(this), e = null
      }
      if (!t) return void e(null);
      var r = new Image;
      a(r, "load", n), r.src = t
    }, d._clearTimeout = function() {
      this._timeout && (window.clearTimeout(this._timeout), this._timeout = null)
    }, d._handleImageLoad = function(t) {
      this.trigger("image-load", t)
    }, d._handleLoadingComplete = function() {
      this.loadingQueue.stop(), this._clearTimeout(), this.trigger("complete")
    }, e.exports = n
  }, {
    "@marcom/ac-dom-events/addEventListener": 6,
    "@marcom/ac-dom-events/removeEventListener": 15,
    "@marcom/ac-dom-traversal/querySelectorAll": 62,
    "@marcom/ac-event-emitter-micro": 168,
    "@marcom/ac-object/defaults": 807,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0,
    "@marcom/ac-polyfills/Object/create": void 0,
    "@marcom/ac-queue": 814
  }],
  819: [function(t, e, i) {
    "use strict";
    var n = {
      ua: window.navigator.userAgent,
      platform: window.navigator.platform,
      vendor: window.navigator.vendor
    };
    e.exports = t("./parseUserAgent")(n)
  }, {
    "./parseUserAgent": 822
  }],
  820: [function(t, e, i) {
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
  821: [function(t, e, i) {
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
  822: [function(t, e, i) {
    "use strict";

    function n(t) {
      return new RegExp(t + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")
    }

    function r(t, e) {
      if ("function" == typeof t.parseVersion) return t.parseVersion(e);
      var i = t.version || t.userAgent;
      "string" == typeof i && (i = [i]);
      for (var r, o = i.length, s = 0; s < o; s++)
        if (r = e.match(n(i[s])), r && r.length > 1) return r[1].replace(/_/g, ".")
    }

    function o(t, e, i) {
      for (var n, o, s = t.length, a = 0; a < s; a++)
        if ("function" == typeof t[a].test ? t[a].test(i) === !0 && (n = t[a].name) : i.ua.indexOf(t[a].userAgent) > -1 && (n = t[a].name), n) {
          if (e[n] = !0, o = r(t[a], i.ua), "string" == typeof o) {
            var c = o.split(".");
            e.version.name = o, c && c.length > 0 && (e.version.major = parseInt(c[0] || 0), e.version.minor = parseInt(c[1] || 0), e.version.patch = parseInt(c[2] || 0))
          } else "edge" === n && (e.version.name = "12.0.0", e.version.major = "12", e.version.minor = "0", e.version.patch = "0");
          return "function" == typeof t[a].parseDocumentMode && (e.version.documentMode = t[a].parseDocumentMode()), e
        } return e
    }

    function s(t) {
      var e = {};
      return e.browser = o(c.browser, a.browser, t), e.os = o(c.os, a.os, t), e
    }
    var a = t("./defaults"),
      c = t("./dictionary");
    e.exports = s
  }, {
    "./defaults": 820,
    "./dictionary": 821
  }],
  823: [function(t, e, i) {
    "use strict";
    t("@marcom/ac-polyfills/Element/prototype.classList");
    var n = t("@marcom/ac-progressive-image-loader/ProgressiveImageLoader"),
      r = 5e3,
      o = "progressive",
      s = function(t) {
        this._pageController = t, this._progressiveImgsEnabled() && (this.imageLoaders = {}, this._bindEventHandlers(), this._attachEventHandlers(), this._initialize())
      },
      a = s.prototype;
    a._progressiveImgsEnabled = function() {
      var t = document.documentElement,
        e = t.classList.contains(o);
      return !(!this._pageController && !e) || (e && t.classList.remove(o), !1)
    }, a._bindEventHandlers = function() {
      this._onSectionInView = this._onSectionInView.bind(this), this._onSectionImgLoadComplete = this._onSectionImgLoadComplete.bind(this)
    }, a._attachEventHandlers = function() {
      this._pageController.on("sections-in-view", this._onSectionInView)
    }, a._onSectionInView = function(t) {
      for (var e, i, o, s, a = 0, c = t.length; a < c; a++) e = t[a], i = e.name, this.imageLoaders[i] || e.element.hasAttribute("data-progressive-exclude") || (o = new n({
        container: e.element,
        timeout: r,
        includeContainer: !0
      }), this.imageLoaders[i] = o, s = e.getComponentOfType("VideoScreen"), s && o.once("complete", this._onSectionImgLoadComplete.bind(this, s)), o.load())
    }, a._onSectionImgLoadComplete = function(t) {
      t.loadMedia()
    }, a._initialize = function() {
      var t = this._pageController.getViewsWithinRange();
      this._onSectionInView(t)
    }, e.exports = s
  }, {
    "@marcom/ac-polyfills/Element/prototype.classList": void 0,
    "@marcom/ac-progressive-image-loader/ProgressiveImageLoader": 818
  }],
  824: [function(t, e, i) {
    "use strict";

    function n() {
      this.name = "OverviewPage", this._sectionEmitter = new a, this.additionalLoadPadding = 1, this._staggerComponents = [], this._waitingForScroll = !0, r.call(this), this._initStaggerElements(), this._initFilms(), this._initWordJoiner(), window.requestAnimationFrame(this._onScroll.bind(this), {
        type: "scroll"
      })
    }
    t("@marcom/ac-polyfills/Object/create"), t("@marcom/ac-polyfills/Element/prototype.classList");
    var r = t("@marcom/ac-jetpack-lib/core/BasePage"),
      o = t("@marcom/ac-jetpack-lib/model/SectionMap"),
      s = t("@marcom/ac-jetpack-lib/model/DataAttributes"),
      a = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      c = t("@marcom/ac-dom-traversal/querySelectorAll"),
      l = t("@marcom/ac-dom-events/addEventListener"),
      u = t("@marcom/ac-films").create,
      h = t("./components/StaggerComponent"),
      d = r.prototype,
      m = t("@marcom/ac-kr-word-joiner").WordJoiner,
      p = n.prototype = Object.create(r.prototype);
    n.prototype.constructor = n, p.on = function(t, e) {
      return this._sectionEmitter.on(t, e)
    }, p.once = function(t, e) {
      return this._sectionEmitter.once(t, e)
    }, p.off = function(t, e) {
      return this._sectionEmitter.off(t, e)
    }, p.trigger = function(t, e) {
      return this._sectionEmitter.trigger(t, e)
    }, p.getViewsWithinRange = function() {
      var t = this._cachedScrollY,
        e = this._cachedWindowHeight,
        i = this.additionalLoadPadding * e,
        n = t - i,
        r = t + e + i;
      if (!this._visibleSections || !this._visibleSections[0]) return [];
      for (var o, s, a = Array.prototype.slice.call(this._visibleSections, 0), c = this._visibleSections[0].index - 1, l = this._visibleSections[this._visibleSections.length - 1].index + 1, u = c;
        (o = this._sections[u]) && (s = o.trackedElement, n < s.bottom);) a.push(o), u--;
      for (u = l;
        (o = this._sections[u]) && (s = o.trackedElement, r > s.top);) a.push(o), u++;
      return a
    }, p.initGridItemFloatDirection = function() {
      for (var t = c(".grid-item"), e = 0, i = 0, n = window.getComputedStyle(t[0]).marginBottom, r = parseInt(n) + 1, o = 0, s = 0; s < t.length; s++) t[s].classList.contains("right") && t[s].classList.remove("right"), o = t[s].offsetHeight + r, e > i ? (i += o, t[s].classList.add("right")) : e += o
    }, p.destroy = function() {
      this._sectionEmitter.destroy(), d.destroy.call(this)
    }, p.setupEvents = function() {
      d.setupEvents.call(this), this._setupHelper(), l(window, "load", this._setupHelper.bind(this))
    }, p._setupHelper = function() {
      window.pageYOffset || (document.documentElement || document.body).scrollTop, document.documentElement.clientHeight || window.innerHeight;
      this.initGridItemFloatDirection(), this._resetStaggerOffsets(), this.performDeepMetricsRefresh()
    }, p._resetStaggerOffsets = function() {
      for (var t = this._staggerComponents.length, e = 0; e < t; e++) {
        var i = this._staggerComponents[e];
        i.resetOffset()
      }
    }, p.teardownEvents = function() {
      d.teardownEvents.call(this)
    }, p.setupSections = function() {
      for (var t = c("section,.section,[data-section-type]", this._mainEl), e = this._getScrollY(), i = this._getCurrentBreakpoint(), n = this._getWindowHeight(), r = 0, a = t.length; r < a; r++) {
        var l = t[r],
          u = this._elementTracker.addElement(l);
        this._elementTracker.refreshElementState(u);
        var h = l.hasAttribute(s.SECTION_TYPE) ? l.getAttribute(s.SECTION_TYPE) : "BaseSection";
        if ("" === h && (h = "BaseSection"), !o.hasOwnProperty(h)) throw "BasePage::setupSections parsing '#" + l.id + " ." + l.className + "' no section type '" + h + "'found!";
        var d = o[h],
          m = new d(l, u, i, e, n, r);
        m.setupEvents(), this._sections.push(m)
      }
    }, p._initStaggerElements = function() {
      for (var t = this._sections, e = t.length, i = 0; i < e; i++)
        for (var n = t[i], r = n._components, o = r.length, s = 0; s < o; s++) {
          var a = r[s];
          a instanceof h && this._staggerComponents.push(a)
        }
    }, p._initFilms = function() {
      var t = document.getElementById("watch-the-film"),
        e = {
          modal: !0,
          maxWidth: 1920
        };
      t && u([t], e)
    }, p._initWordJoiner = function() {
      var t, e = document.documentElement.lang;
      "ko-KR" === e && m.shouldJoin() === !0 && (t = new m, t.join(), t.destroy())
    }, p._onPageDidAppear = function(t) {
      d._onPageDidAppear.call(this, t)
    }, p._onPageWillDisappear = function(t) {
      d._onPageWillDisappear.call(this, t)
    }, p._activateSection = function() {
      this.activateVisibleSections()
    }, p._onScroll = function(t) {
      d._onScroll.call(this, t);
      var e = this._getScrollY(),
        i = this._getWindowHeight(),
        n = this.getViewsWithinRange();
      if (this.trigger("sections-in-view", n), this.activateVisibleSections(), this._waitingForScroll && e > 0) {
        for (var r = 0; r < this._staggerComponents.length; r++) {
          var o = this._staggerComponents[r];
          o.onScroll(t, e, i)
        }
        this._waitingForScroll = !1
      }
    }, p.activateVisibleSections = function() {
      for (var t, e = this._visibleSections.length, i = 0; i < e; i++) t = this._visibleSections[i], t.trackedElement.percentInView <= .2 ? t.deactivate() : t.isActive || t.activate()
    }, p._onResizeDebounced = function(t) {
      d._onResizeDebounced.call(this, t), this._waitingForScroll = !0, this._onScroll(t)
    }, p._onResizeImmediate = function(t) {
      d._onResizeImmediate.call(this, t)
    }, p._onBreakpoint = function(t) {
      d._onBreakpoint.call(this, t), this.initGridItemFloatDirection()
    }, p._onRequestAnimationFrame = function() {
      d._onRequestAnimationFrame.call(this)
    }, e.exports = n
  }, {
    "./components/StaggerComponent": 827,
    "@marcom/ac-dom-events/addEventListener": 6,
    "@marcom/ac-dom-traversal/querySelectorAll": 62,
    "@marcom/ac-event-emitter-micro": 168,
    "@marcom/ac-films": 591,
    "@marcom/ac-jetpack-lib/core/BasePage": 657,
    "@marcom/ac-jetpack-lib/model/DataAttributes": 661,
    "@marcom/ac-jetpack-lib/model/SectionMap": 663,
    "@marcom/ac-kr-word-joiner": 666,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0,
    "@marcom/ac-polyfills/Object/create": void 0
  }],
  825: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n, s, a, l) {
      this.index = l, this.name = "ParallaxComponent_" + this.index, this.rafWhenVisible = !0, o.apply(this, arguments), this.pViewports = ["large", "medium", "small"], this.data = c[l], this.t = this.progress = s / a, this.itStart = -.02, this.it = this.itStart, this.opacity = 0, this.loaded = !1, this.ready = !1, this.delay = 0, this.minWidth = 600, this.fluid = !1, this.fluidFactor = 1, this.cHeights = {
        large: 4e3,
        medium: 3e3,
        small: 2800
      }, r.CSS_3DTRANSFORMS ? this.onScrollMotionDraw = this.onScrollMotionDraw3dTransform : r.CSS_2DTRANSFORMS ? this.onScrollMotionDraw = this.onScrollMotionDraw2dTransform : this.onScrollMotionDraw = this.onScrollMotionDrawAbsolute, this.onBreakpoint(n), this.onResizeImmediate()
    }
    t("@marcom/ac-polyfills/Object/create");
    var r = t("@marcom/ac-jetpack-lib/model/EnabledFeatures"),
      o = t("@marcom/ac-jetpack-lib/core/BaseComponent"),
      s = t("@marcom/ac-dom-traversal/querySelector"),
      a = t("@marcom/ac-browser-prefixed"),
      c = t("../hero.json"),
      l = t("@marcom/ac-math/map"),
      u = t("@marcom/ac-math/clamp"),
      h = t("@marcom/ac-math/lerp"),
      d = t("@marcom/ac-math/smoothstep"),
      m = o.prototype,
      p = n.prototype = Object.create(m);
    n.prototype.constructor = n, p.activate = function() {
      if (r.REDUCED_MOTION) {
        var t = s(".ao-child", this.element);
        return this.element.classList.remove("ao-progressive"), this.element.style.opacity = 1, void(t && t.classList.remove("ao-progressive"))
      }
      this.ready || setTimeout(function() {
        this.ready = !0, this.opacity = 0, this.it = this.itStart
      }.bind(this), this.delay), this.loaded || this._progressiveLoad(function() {
        this.opacity = 0, this.it = this.itStart, this.loaded = !0
      }.bind(this))
    }, p._load = function(t, e) {
      var i, n, r = t.currentStyle;
      return r ? e() : (r = window.getComputedStyle(t, !1), 0 !== r.backgroundImage.indexOf("url(") ? e() : (i = r.backgroundImage.slice(4, -1).replace(/"/g, "")) ? (n = new Image, n.onload = e, n.src = i, void 0) : e())
    }, p._progressiveLoad = function(t) {
      function e() {
        i++, i === r && t()
      }
      var i = 0,
        n = s(".ao-child", this.element),
        r = n ? 2 : 1;
      this.element.classList.remove("ao-progressive"), n && n.classList.remove("ao-progressive"), this._load(this.element, e), n && this._load(n, e)
    }, p._setData = function() {
      for (var t = {}, e = 0; e < this.pViewports.length && (Object.assign(t, this.data.viewports[this.pViewports[e]]), this.pViewports[e] !== this.viewport); e++);
      this.fromTime = t.fromTime, this.toTime = t.toTime, this.fromX = t.fromX, this.toX = t.toX, this.fromY = t.fromY, this.toY = t.toY
    }, p._recalc = function() {
      this._setData(), this.cHeight = 1 - this.section.trackedElement.height / this.cHeights[this.viewport], this._update()
    }, p._setViewport = function(t) {
      this.viewport = "xlarge" === t ? "large" : t
    }, p.onBreakpoint = function(t) {
      r.REDUCED_MOTION || (this._setViewport(t), this._recalc(), this.onScrollMotionDraw())
    }, p.onResizeImmediate = function() {
      this.fluid = "small" === this.viewport && 4 !== this.index && this.section.trackedElement.width > this.minWidth, this.fluidFactor = this.fluid ? this.section.trackedElement.width / this.minWidth : 1, this._update(), this.onScrollMotionDraw()
    }, p._update = function() {
      this.t = d(this.fromTime, this.toTime, this.progress), this.t *= this.cHeight, this.t = u(this.t, 0, 1), this.t += this.it, this.y = h(this.fromY, this.toY, this.t), this.x = h(this.fromX, this.toX, this.t), this.x *= this.fluidFactor, this.x = 0 | this.x, this.opacity = l(this.it, this.itStart, 0, 0, 1), this.it < -1e-6 && this.ready && this.loaded ? this.it *= .955 : this.it = 0
    }, p.onScrollMotionUpdate = p._update, p.onRequestAnimationFrame = function() {
      0 !== this.it && (this._update(), this.onScrollMotionDraw())
    }, p.onScrollMotionDraw3dTransform = function() {
      this.element.style[a.transform] = "translate3d(" + this.x + "px," + this.y + "px,0)", this.onScrollMotionDrawOpacity()
    }, p.onScrollMotionDraw2dTransform = function() {
      this.element.style[a.transform] = "translate(" + this.x + "px," + this.y + "px)", this.onScrollMotionDrawOpacity()
    }, p.onScrollMotionDrawAbsolute = function() {
      this.element.style.top = this.y + "px", this.element.style.left = this.x + "px", this.onScrollMotionDrawOpacity()
    }, p.onScrollMotionDrawOpacity = function() {
      this.ready && this.loaded && (this.element.style.opacity = this.opacity)
    }, e.exports = n
  }, {
    "../hero.json": 831,
    "@marcom/ac-browser-prefixed": 1,
    "@marcom/ac-dom-traversal/querySelector": 61,
    "@marcom/ac-jetpack-lib/core/BaseComponent": 656,
    "@marcom/ac-jetpack-lib/model/EnabledFeatures": 662,
    "@marcom/ac-math/clamp": 670,
    "@marcom/ac-math/lerp": 671,
    "@marcom/ac-math/map": 672,
    "@marcom/ac-math/smoothstep": 674,
    "@marcom/ac-polyfills/Object/create": void 0
  }],
  826: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n, o, a, u) {
      r.call(this, t, e, i, n, o, a, u), this._elements = {
        transition: this._getTransitionElement(),
        engagement: this.element
      }, this._screenEngagement = this.section.elementEngagement.addElement(this._elements.engagement, {
        timeToEngage: c,
        inViewThreshold: l
      }), this._screenTransition = new s(this._elements.transition)
    }
    t("@marcom/ac-polyfills/Object/create");
    var r = t("@marcom/ac-jetpack-lib/core/BaseComponent"),
      o = r.prototype,
      s = t("./shared/ElementTransition"),
      a = t("@marcom/ac-dom-traversal/querySelector"),
      c = 1e3,
      l = .8,
      u = ".mediaObject-startframe",
      h = n.prototype = Object.create(r.prototype);
    n.prototype.constructor = n, h._getTransitionElement = function() {
      var t = a(u, this.element);
      return t ? t : this.element
    }, h._onScreenEngagement = function() {
      this._screenTransition.hide()
    }, h.setupEvents = function() {
      o.setupEvents.call(this), this._onScreenEngagement = this._onScreenEngagement.bind(this), this._screenEngagement.on("engaged", this._onScreenEngagement)
    }, e.exports = n
  }, {
    "./shared/ElementTransition": 830,
    "@marcom/ac-dom-traversal/querySelector": 61,
    "@marcom/ac-jetpack-lib/core/BaseComponent": 656,
    "@marcom/ac-polyfills/Object/create": void 0
  }],
  827: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n, o, s, a) {
      this.name = "StaggerComponent_" + a, r.call(this, t, e, i, n, o, s, a), this._elementOffset = this.element.offsetTop, this._hero = document.getElementById("section-hero"), this._heroHeight = this._hero.clientHeight, this._staggerAmount = 100, this._percent = .35, this._percentThreshold = s * this._percent, this._hasStaggered = !1, this._isSmall = "small" === n, this._setBreakpoint(n, s), this._onTransitionComplete = this._onTransitionComplete.bind(this), this._isAboveFold(o, s) && this._stagger()
    }
    t("@marcom/ac-polyfills/Object/create"), t("@marcom/ac-polyfills/Element/prototype.classList");
    var r = t("@marcom/ac-jetpack-lib/core/BaseComponent"),
      o = r.prototype,
      s = t("@marcom/ac-dom-events/addEventListener"),
      a = t("@marcom/ac-dom-events/removeEventListener"),
      c = n.prototype = Object.create(r.prototype);
    n.prototype.constructor = n, c.destroy = function() {
      o.destroy.call(this)
    }, c.setupEvents = function() {
      o.setupEvents.call(this)
    }, c.teardownEvents = function() {
      o.teardownEvents.call(this)
    }, c.onSectionWillAppear = function(t, e) {
      o.onSectionWillAppear.call(this, t / 2, e), this._isSmall || this.element.classList.contains("will-stagger") || (this._hasStaggered = !0, this.trigger("stagger:complete"))
    }, c.activate = function() {
      o.activate.call(this)
    }, c.animateIn = function() {
      o.animateIn.call(this)
    }, c.onRequestAnimationFrame = function() {
      o.onRequestAnimationFrame.call(this)
    }, c.deactivate = function() {
      o.deactivate.call(this)
    }, c.onScroll = function(t, e, i) {
      o.onScroll.call(this, t, e, i), this._hasStaggered || this._isAboveFold(e, i) && this._stagger()
    }, c._onTransitionComplete = function() {
      this.trigger("stagger:complete"), a(this.element, "transitionend", this._onTransitionComplete)
    }, c._stagger = function() {
      this._hasStaggered = !0, s(this.element, "transitionend", this._onTransitionComplete), this.element.classList.add("staggered")
    }, c._isAboveFold = function(t, e) {
      var i = !1,
        n = t + e + this._staggerAmount - (this._elementOffset + this._heroHeight),
        r = this._percentThreshold;
      return n > r && (i = !0), i
    }, c.onSectionWillDisappear = function(t, e) {
      o.onSectionWillDisappear.call(this, t, e)
    }, c.onResizeImmediate = function(t, e, i) {
      o.onResizeImmediate.call(this, t, e, i)
    }, c.onResizeDebounced = function(t, e, i) {
      o.onResizeDebounced.call(this, t, e, i), this._elementOffset = this.element.offsetTop, this._heroHeight = this._hero.clientHeight, this._percentThreshold = i * this._percent
    }, c.onBreakpoint = function(t, e, i, n) {
      this._setBreakpoint(t, n), "small" === t ? this._isSmall = !0 : this._isSmall = !1, this._isAboveFold(i, n) && this._stagger()
    }, c._setBreakpoint = function(t, e) {
      this._elementOffset = this.element.offsetTop, this._heroHeight = this._hero.clientHeight, this._percentThreshold = e * this._percent
    }, c.resetOffset = function() {
      this._elementOffset = this.element.offsetTop
    }, e.exports = n
  }, {
    "@marcom/ac-dom-events/addEventListener": 6,
    "@marcom/ac-dom-events/removeEventListener": 15,
    "@marcom/ac-jetpack-lib/core/BaseComponent": 656,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0,
    "@marcom/ac-polyfills/Object/create": void 0
  }],
  828: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n, o, a, c) {
      r.call(this, t, e, i, n, o, a, c), this._isSplitFileVideo = s.BLOBS && s.INLINE_VIDEO && s.MP4 && s.IS_DESKTOP, this._isMp4Video = s.MP4 && s.BLOBS && (!s.INLINE_VIDEO || !s.IS_DESKTOP), this._isStatic = !this._isSplitFileVideo && !this._isMp4Video, this._viewports = {
        current: n,
        previous: n,
        resizeStart: null
      }, this.state = {
        enabled: !1,
        engaged: !1,
        page: {
          mediaPlayed: !1
        },
        mediaObject: {
          loading: !1,
          loaded: !1,
          playing: !1,
          paused: !1
        },
        fullscreen: {
          enter: !1,
          exit: !1
        }
      }, this._timeout = null, this._timeout = {
        load: null,
        viewportChange: null
      }, this._elements = {
        engagement: this._getEngagementEl(),
        clickToPlay: {
          array: this._getClickToPlayElements()
        }
      }, this._engagement = {
        screen: this.section.elementEngagement.addElement(this._elements.engagement, {
          timeToEngage: S,
          inViewThreshold: this._getEngagementThreshold()
        })
      }, this._eventHandlerObjects = {
        clickToPlay: {
          array: []
        }
      }, this.mediaObj = {
        video: null
      }, this._isStatic || (this._bindEventHandlers(), this._initialize())
    }
    t("@marcom/ac-polyfills/Object/create"), t("@marcom/ac-polyfills/Element/prototype.classList");
    var r = t("@marcom/ac-jetpack-lib/core/BaseComponent"),
      o = r.prototype,
      s = t("@marcom/ac-jetpack-lib/model/EnabledFeatures"),
      a = t("@marcom/ac-fullscreen"),
      c = t("@marcom/ac-cname").cname,
      l = t("@marcom/ac-dom-metrics/getPagePosition"),
      u = t("@marcom/ac-media-object"),
      h = t("@marcom/ac-dom-traversal/querySelectorAll"),
      d = t("./VideoScreen/ClickToPlay"),
      m = "data-videoScreen-name",
      p = "data-videoScreen-locale",
      f = "data-engagement",
      g = "/105/media{{locale}}/ios/2016/d7d49c4e_a4d4_4696_aad4_623aca3cab35/overview/animations/",
      v = /\{\{locale}}/g,
      y = "mp4",
      _ = ".replay-trigger",
      b = ".mobile-play-trigger",
      T = "mediaObject-paused",
      E = "mediaObject-destroyed",
      x = !0,
      w = "2x",
      S = 1e3,
      C = .8,
      k = "enhanced",
      A = "static",
      O = 12e3,
      P = 1e3,
      M = n.prototype = Object.create(r.prototype);
    n.prototype.constructor = n, M.loadMedia = function() {
      !this.state.enabled || this.state.mediaObject.loading || this.state.mediaObject.loaded || (this.mediaObj.video.load(), this.state.mediaObject.loading = !0, !this._isSplitFileVideo || s.TOUCH || this._timeout.load || (this._timeout.load = setTimeout(this._onLoadTimeOut, O)))
    }, M.playMedia = function() {
      this.state.enabled && this.mediaObj.video.play()
    }, M.pauseMedia = function() {
      this.state.enabled && this.mediaObj.video.pause()
    }, M.destroyMedia = function() {
      this.state.enabled && (this._timeout.load && this._clearLoadTimeout(), this._enableClickToPlay(), this._eventHandlerObjects.clickToPlay.array = [], this.mediaObj.video.destroy())
    }, M._onMediaLoaded = function() {
      this._timeout.load && this._clearLoadTimeout(), this.state.mediaObject.loading = !1, this.state.mediaObject.loaded = !0, this.mediaObj.video.enhance()
    }, M._onMediaEnhanced = function() {
      this.state.enabled && !this.state.mediaObject.playing && this._enableClickToPlay(), this._elements.clickToPlay.array.forEach(function(t) {
        t.classList.add(k)
      }, this)
    }, M._onMediaPlay = function() {
      var t = this.mediaObj.video.el;
      this.state.page.mediaPlayed || (this.state.page.mediaPlayed = !0), this.state.mediaObject.paused = !1, this.state.mediaObject.playing = !0, t.classList.contains(T) && t.classList.remove(T), this._disableClickToPlay()
    }, M._onMediaPause = function() {
      var t = this.mediaObj.video.el;
      this.state.mediaObject.playing = !1, this.state.mediaObject.paused = !0, t.classList.contains(T) || t.classList.add(T), s.TOUCH && !this._isFullScreen() && (this._enableClickToPlay(), this.mediaObj.video.reset())
    }, M._onMediaEnded = function() {
      var t = this.mediaObj.video.el;
      this.state.mediaObject.paused = !1, this.state.mediaObject.playing = !1, this._enableClickToPlay(), t.classList.contains(T) && t.classList.remove(T), window.setTimeout(this._focusClickToPlayOnTimeout, 1e3)
    }, M._onMediaDestroyed = function() {
      this.state.mediaObject.loading = !1, this.state.mediaObject.loaded = !1, this.state.mediaObject.paused = !1, this.state.mediaObject.playing = !1, this.mediaObj.video = null, this.state.enabled && (this._initialize(), this.loadMedia())
    }, M._clearLoadTimeout = function() {
      clearTimeout(this._timeout.load), this._timeout.load = null
    }, M._onLoadTimeOut = function() {
      var t = this.mediaObj.video.el;
      this.state.enabled = !1, this._engagement.screen = null, t.classList.add(A), t.classList.contains(E) && t.classList.remove(E), this._disableClickToPlay(), this.mediaObj.video.destroy()
    }, M._onClickToPlay = function(t) {
      this._enableClickToPlay(), this.playMedia()
    }, M._onEngagementScreen = function() {
      this.state.engaged = !0, this.state.enabled && !this.state.page.mediaPlayed && this.mediaObj.video && (this.mediaObj.video.getEnhanced() ? this.playMedia() : this.mediaObj.video.once("enhanced", this.playMedia))
    }, M._onEnterFullScreen = function() {
      this.state.fullscreen.enter = !0, this.state.fullscreen.exit = !1
    }, M._onExitFullScreen = function() {
      this.state.fullscreen.enter = !1, this.state.fullscreen.exit = !0, this._enableClickToPlay()
    }, M._focusClickToPlayOnTimeout = function() {
      s.TOUCH && this._elements.clickToPlay.array[0].focus()
    }, M._isFullScreen = function() {
      var t = !1;
      return (this.state.fullscreen.enter || this.state.fullscreen.exit) && (t = !0), this.state.fullscreen.exit && (this.state.fullscreen.enter = !1, this.state.fullscreen.exit = !1), t
    }, M._getEngagementEl = function() {
      var t = l(this.element).top,
        e = l(this.section.element).top;
      return t < e ? this.section.element : this.element
    }, M._getEngagementThreshold = function() {
      var t, e = C;
      return this.element.hasAttribute(f) && (t = this.element.getAttribute(f), t && (e = t), "string" == typeof e && (e = parseFloat(e))), e
    }, M._getClickToPlayElements = function() {
      var t;
      return t = s.TOUCH ? h(b, this.section.element) : h(_, this.section.element), Array.prototype.slice.call(t)
    }, M._bindEventHandlers = function() {
      this.loadMedia = this.loadMedia.bind(this), this.playMedia = this.playMedia.bind(this), this.pauseMedia = this.pauseMedia.bind(this), this.destroyMedia = this.destroyMedia.bind(this), this._onMediaLoaded = this._onMediaLoaded.bind(this), this._onMediaEnhanced = this._onMediaEnhanced.bind(this), this._onMediaPlay = this._onMediaPlay.bind(this), this._onMediaPause = this._onMediaPause.bind(this), this._onMediaEnded = this._onMediaEnded.bind(this), this._onMediaDestroyed = this._onMediaDestroyed.bind(this), this._onLoadTimeOut = this._onLoadTimeOut.bind(this), this._onViewportOrRetinaChange = this._onViewportOrRetinaChange.bind(this), this._onClickToPlay = this._onClickToPlay.bind(this), this._focusClickToPlayOnTimeout = this._focusClickToPlayOnTimeout.bind(this), this._onEnterFullScreen = this._onEnterFullScreen.bind(this), this._onExitFullScreen = this._onExitFullScreen.bind(this)
    }, M._attachEventHandlers = function() {
      this.mediaObj.video.on("loaded", this._onMediaLoaded), this.mediaObj.video.on("enhanced", this._onMediaEnhanced), this.mediaObj.video.on("play", this._onMediaPlay), this.mediaObj.video.on("pause", this._onMediaPause), this.mediaObj.video.on("ended", this._onMediaEnded), this.mediaObj.video.on("error", this._onLoadTimeOut), this.mediaObj.video.on("destroyed", this._onMediaDestroyed), this._elements.clickToPlay.array.forEach(function(t) {
        this._eventHandlerObjects.clickToPlay.array.push(new d(t, this._onClickToPlay))
      }, this), a.on("enterfullscreen", this._onEnterFullScreen), a.on("exitfullscreen", this._onExitFullScreen)
    }, M._enableClickToPlay = function() {
      var t = this._elements.clickToPlay.array;
      t.length > 0 && t.forEach(function(t) {
        t && t.hasAttribute("disabled") && t.removeAttribute("disabled")
      }, this)
    }, M._disableClickToPlay = function() {
      var t = this._elements.clickToPlay.array;
      t.length > 0 && t.forEach(function(t) {
        t && !t.hasAttribute("disabled") && t.setAttribute("disabled", "")
      }, this)
    }, M._setMediaSrcName = function() {
      var t = "xlarge" === this._viewports.current && x ? "large" : this._viewports.current,
        e = [t],
        i = "_";
      return s.IS_RETINA && e.push(w), e.join(i)
    }, M._setMediaSrcBasePath = function() {
      var t = this.element.getAttribute(m),
        e = this.element.getAttribute(p),
        i = g.replace(v, e),
        n = "/split_files/",
        r = this._setMediaSrcName(),
        o = "/" + t + n + r;
      return this._isMp4Video ? i.concat(t) : i.concat(o)
    }, M._setMediaSrc = function() {
      var t = this._setMediaSrcBasePath(),
        e = {
          basePath: c.addPrefix(t)
        };
      return this._isMp4Video ? (e.filename = this._setMediaSrcName(), e.fileFormat = y) : e.splitFileLoading = !0, e
    }, M._initialize = function() {
      var t;
      return this.mediaObj.video = u.createVideo(this.element, this._setMediaSrc()), this.mediaObj.video ? (this.state.enabled = !0, t = this.mediaObj.video.el, t.classList.contains(E) && t.classList.remove(E), void this._attachEventHandlers()) : void(this.state.enabled = !1)
    }, M.setupEvents = function() {
      o.setupEvents.call(this), this.state.enabled && (this._onEngagementScreen = this._onEngagementScreen.bind(this), this._engagement.screen.on("engaged", this._onEngagementScreen))
    }, M._ignoreViewPortChange = function() {
      var t = "xlarge" === this._viewports.current && "large" === this._viewports.previous,
        e = "large" === this._viewports.current && "xlarge" === this._viewports.previous;
      return x && (t || e)
    }, M._onViewportOrRetinaChange = function() {
      !this._ignoreViewPortChange() && this.state.enabled && (this._timeout.viewportChange = null, this.state.loading ? this.mediaObj.video.on("loaded", this.destroyMedia) : this.destroyMedia())
    }, M.onBreakpoint = function(t, e, i, n) {
      this.state.enabled && (this._timeout.viewportChange && (clearTimeout(this._timeout.viewportChange), this._timeout.viewportChange = null), this._viewports.previous = e, this._viewports.current = t, this._timeout.viewportChange = setTimeout(this._onViewportOrRetinaChange, P))
    }, M.onResizeImmediate = function(t, e, i) {
      o.onResizeImmediate.call(this, t, e, i), this.state.enabled && !this._isFullScreen() && this.state.mediaObject.playing && !s.TOUCH && (this._viewports.resizeStart = this._viewports.current, this.pauseMedia())
    }, M.onResizeDebounced = function(t, e, i) {
      o.onResizeDebounced.call(this, t, e, i);
      var n;
      this.state.enabled && !this._isFullScreen() && (n = this._viewports.resizeStart === this._viewports.current || this._ignoreViewPortChange(), n && this.state.mediaObject.paused && !s.TOUCH && this.playMedia())
    }, e.exports = n
  }, {
    "./VideoScreen/ClickToPlay": 829,
    "@marcom/ac-cname": 4,
    "@marcom/ac-dom-metrics/getPagePosition": 25,
    "@marcom/ac-dom-traversal/querySelectorAll": 62,
    "@marcom/ac-fullscreen": 605,
    "@marcom/ac-jetpack-lib/core/BaseComponent": 656,
    "@marcom/ac-jetpack-lib/model/EnabledFeatures": 662,
    "@marcom/ac-media-object": 787,
    "@marcom/ac-polyfills/Element/prototype.classList": void 0,
    "@marcom/ac-polyfills/Object/create": void 0
  }],
  829: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      r.call(this), this._el = t, this.state = {
        enabled: !1
      }, this._providedOnClickCb = e || null, this._onClick = this._onClick.bind(this), this._initialize()
    }
    t("@marcom/ac-polyfills/Object/create");
    var r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      o = r.prototype,
      s = t("@marcom/ac-dom-events/addEventListener"),
      a = t("@marcom/ac-dom-events/removeEventListener"),
      c = t("@marcom/ac-dom-events/preventDefault"),
      l = n.prototype = Object.create(o);
    n.prototype.constructor = n, l.destroy = function() {
      this.state.enabled && a(this._el, "click", this._onClick), this._el = null, this.state.enabled = null, this._providedOnClickCb = null, o.destroy.call(this)
    }, l._onClick = function(t) {
      c(t), this.trigger("clicktoplay:click"), this._providedOnClickCb.call(this, this)
    }, l._initialize = function() {
      this._el && this._providedOnClickCb && (s(this._el, "click", this._onClick), this.state.enabled = !0)
    }, e.exports = n
  }, {
    "@marcom/ac-dom-events/addEventListener": 6,
    "@marcom/ac-dom-events/preventDefault": 14,
    "@marcom/ac-dom-events/removeEventListener": 15,
    "@marcom/ac-event-emitter-micro": 168,
    "@marcom/ac-polyfills/Object/create": void 0
  }],
  830: [function(t, e, i) {
    "use strict";

    function n(t, e) {
      o.call(this), this._el = t, this._options = e || null, this._showTransitionClip = null, this._hideTransitionClip = null, this._onShowComplete = this._onShowComplete.bind(this), this._onHideComplete = this._onHideComplete.bind(this), this._initialize()
    }
    t("@marcom/ac-polyfills/Object/create");
    var r = t("@marcom/ac-eclipse").Clip,
      o = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      s = o.prototype,
      a = .25,
      c = n.prototype = Object.create(s);
    n.prototype.constructor = n, c.show = function() {
      this._showTransitionClip.play()
    }, c.hide = function() {
      this._hideTransitionClip.play()
    }, c.destroy = function() {
      this._showTransitionClip = null, this._hideTransitionClip = null, this._el = null, s.destroy.call(this)
    }, c._onShowComplete = function() {
      this.trigger("et-show:complete")
    }, c._onHideComplete = function() {
      this.trigger("et-hide:complete")
    }, c._initialize = function() {
      this._el && (this._options && this._options.duration && (a = this._options.duration), this._showTransitionClip = new r(this._el, a, {
        opacity: 1
      }, {
        ease: "easeInQuad",
        onComplete: this._onShowComplete
      }), this._hideTransitionClip = new r(this._el, a, {
        opacity: 0
      }, {
        ease: "easeInQuad",
        onComplete: this._onHideComplete
      }))
    }, e.exports = n
  }, {
    "@marcom/ac-eclipse": 147,
    "@marcom/ac-event-emitter-micro": 168,
    "@marcom/ac-polyfills/Object/create": void 0
  }],
  831: [function(t, e, i) {
    e.exports = [{
      selector: ".animation-container .ao-0",
      screen: !1,
      hardware: !1,
      viewports: {
        large: {
          fromTime: .033086334654489055,
          toTime: 1,
          fromX: 0,
          toX: 0,
          fromY: 386,
          toY: -200
        },
        medium: {
          fromY: 376
        },
        small: {
          fromY: 380,
          toY: -380,
          fromTime: 0
        }
      }
    }, {
      selector: ".animation-container .ao-1",
      screen: "ios-10_overview_hero_heroimages_screen1",
      hardware: "ios-10_overview_sharedhardware_hardware_full_silver",
      viewports: {
        large: {
          fromTime: .07720144752714113,
          toTime: 1,
          fromX: -645,
          toX: -645,
          fromY: -70,
          toY: -1300
        },
        medium: {
          fromX: -500,
          toX: -500,
          fromY: 50
        },
        small: {
          fromX: -148,
          toX: -148,
          fromY: -18,
          toY: -1e3,
          fromTime: 0
        }
      }
    }, {
      selector: ".animation-container .ao-2",
      screen: "ios-10_overview_hero_heroimages_screen2",
      hardware: "ios-10_overview_sharedhardware_hardware_full_silver",
      viewports: {
        large: {
          fromTime: 0,
          toTime: 1,
          fromX: -323,
          toX: -323,
          fromY: -245,
          toY: -1700
        },
        medium: {
          fromX: -252,
          toX: -252,
          fromY: -95
        },
        small: {
          fromX: -148,
          toX: -148,
          fromY: 276,
          toY: -600,
          fromTime: 0
        }
      }
    }, {
      selector: ".animation-container .ao-3",
      screen: "ios-10_overview_hero_heroimages_screen3",
      hardware: "ios-10_overview_sharedhardware_hardware_full_silver",
      viewports: {
        large: {
          fromTime: .033,
          toTime: 1,
          fromX: 0,
          toX: 0,
          fromY: -327,
          toY: -1e3
        },
        medium: {
          fromY: -187
        },
        small: {
          fromY: 28,
          fromX: 0,
          toX: 0,
          toY: -480,
          fromTime: 0
        }
      }
    }, {
      selector: ".animation-container .ao-4",
      screen: "ios-10_overview_hero_heroimages_screen4",
      hardware: "ios-10_overview_sharedhardware_hero_hardware_ipad",
      viewports: {
        large: {
          fromTime: 0,
          toTime: 1,
          fromX: 582,
          toX: 582,
          fromY: 466,
          toY: -400
        },
        medium: {
          fromX: 450,
          toX: 450,
          fromY: 462,
          fromTime: .033,
          toY: -400
        },
        small: {
          fromX: 118,
          toX: 118,
          fromY: 834,
          fromTime: 0,
          toY: -200,
          toTime: 1
        }
      }
    }, {
      selector: ".animation-container .ao-5",
      screen: "ios-10_overview_hero_heroimages_screen5",
      hardware: "ios-10_overview_sharedhardware_hardware_full_silver",
      viewports: {
        large: {
          fromTime: .077,
          toTime: 1,
          fromX: -645,
          toX: -645,
          fromY: 567,
          toY: -300
        },
        medium: {
          fromX: -500,
          toX: -500,
          fromY: 540
        },
        small: {
          toX: 148,
          fromX: 148,
          fromY: -68,
          toY: -1650,
          fromTime: 0
        }
      }
    }, {
      selector: ".animation-container .ao-6",
      screen: "ios-10_overview_hero_heroimages_screen6",
      hardware: "ios-10_overview_sharedhardware_hardware_full_silver",
      viewports: {
        large: {
          fromTime: 0,
          toTime: 1,
          fromX: -323,
          toX: -323,
          fromY: 392,
          toY: -800
        },
        medium: {
          toX: -252,
          fromX: -252,
          fromY: 396
        },
        small: {
          fromX: -148,
          toX: -148,
          fromY: 606,
          toY: -400,
          fromTime: 0
        }
      }
    }, {
      selector: ".animation-container .ao-7",
      screen: "ios-10_overview_hero_heroimages_screen7",
      hardware: "ios-10_overview_sharedhardware_hardware_full_silver",
      viewports: {
        large: {
          fromTime: .033,
          toTime: 1,
          fromX: 0,
          toX: 0,
          fromY: 585,
          toY: 150
        },
        medium: {
          fromY: 535
        },
        small: {
          toY: -460,
          fromY: 484,
          fromTime: 0
        }
      }
    }, {
      selector: ".animation-container .ao-8",
      screen: "ios-10_overview_hero_heroimages_screen8",
      hardware: "ios-10_overview_sharedhardware_hardware_full_silver",
      viewports: {
        large: {
          fromTime: 0,
          toTime: 1,
          fromX: 323,
          toX: 323,
          fromY: -175,
          toY: -1200
        },
        medium: {
          fromX: 252,
          toX: 252,
          fromY: -38,
          toY: -1200,
          fromTime: .033
        },
        small: {
          toX: 148,
          fromX: 148,
          fromY: 226,
          fromTime: 0,
          toY: -1200
        }
      }
    }, {
      selector: ".animation-container .ao-9",
      screen: "ios-10_overview_hero_heroimages_screen9",
      hardware: "ios-10_overview_sharedhardware_hardware_full_silver",
      viewports: {
        large: {
          fromTime: 0,
          toTime: 1,
          fromX: 645,
          toX: 645,
          fromY: -268,
          toY: -900
        },
        medium: {
          fromX: 500,
          toX: 500,
          fromY: -126,
          fromTime: .033,
          toY: -600
        },
        small: {
          fromX: -148,
          toX: -148,
          fromY: 896,
          toY: 0,
          fromTime: 0,
          toTime: 1
        }
      }
    }, {
      selector: ".animation-container .ao-10",
      screen: "ios-10_overview_hero_heroimages_screen10",
      hardware: "ios-10_overview_sharedhardware_hardware_full_silver",
      viewports: {
        large: {
          fromTime: 0,
          toTime: 1,
          fromX: -323,
          toX: -323,
          fromY: 1126,
          toY: -200
        },
        medium: {
          toX: -252,
          fromX: -252,
          fromY: 974,
          toY: -400
        },
        small: {
          fromX: 148,
          toX: 148,
          fromY: 520,
          fromTime: 0,
          toY: -800
        }
      }
    }]
  }, {}],
  832: [function(t, e, i) {
    "use strict";
    var n = t("./MediaLoader/MediaLoader"),
      r = t("./OverviewPage"),
      o = t("@marcom/ac-jetpack-lib/model/SectionMap"),
      s = t("@marcom/ac-jetpack-lib/model/ComponentMap"),
      a = t("@marcom/ac-jetpack-lib/model/EnabledFeatures"),
      c = t("./shared/model/EnabledFeatures"),
      l = function() {
        return {
          initialize: function() {
            Object.assign(o, {
              HeroSection: t("./sections/HeroSection")
            }), Object.assign(s, {
              ParallaxComponent: t("./components/ParallaxComponent"),
              ScreenTransition: t("./components/ScreenTransition"),
              Stagger: t("./components/StaggerComponent"),
              VideoScreen: t("./components/VideoScreen")
            }), a = a.extend(c), a.init();
            var e = new r;
            this._initMediaLoader(e)
          },
          _initMediaLoader: function(t) {
            new n(t)
          }
        }
      }();
    e.exports = l.initialize()
  }, {
    "./MediaLoader/MediaLoader": 823,
    "./OverviewPage": 824,
    "./components/ParallaxComponent": 825,
    "./components/ScreenTransition": 826,
    "./components/StaggerComponent": 827,
    "./components/VideoScreen": 828,
    "./sections/HeroSection": 833,
    "./shared/model/EnabledFeatures": 834,
    "@marcom/ac-jetpack-lib/model/ComponentMap": 660,
    "@marcom/ac-jetpack-lib/model/EnabledFeatures": 662,
    "@marcom/ac-jetpack-lib/model/SectionMap": 663
  }],
  833: [function(t, e, i) {
    "use strict";

    function n(t, e, i, n, s, a) {
      this.name = "HeroSection_" + a, this.rafWhenVisible = !0, this.shift = !1, this.friction = 6, this.scrollMotionEmitter = new o({
        friction: this.friction
      }), this.scrollMotionEmitter.setProgress(n / s), this.animationContainer = t.querySelector(".animation-container"), this.scrim = t.querySelector(".scrim"), r.call(this, t, e, i, n, s, a)
    }
    t("@marcom/ac-polyfills/Object/create");
    var r = t("@marcom/ac-jetpack-lib/core/BaseSection"),
      o = t("@marcom/ac-motion-emitter/MotionEmitter"),
      s = t("@marcom/ac-dom-events/addEventListener"),
      a = t("@marcom/ac-dom-events/removeEventListener"),
      c = t("@marcom/ac-jetpack-lib/model/EnabledFeatures"),
      l = r.prototype,
      u = n.prototype = Object.create(r.prototype);
    n.prototype.constructor = n, u.onScrollMotionUpdate = function(t) {
      this._components.forEach(function(e) {
        e.progress = t.progress, e.onScrollMotionUpdate()
      })
    }, u.onScrollMotionDraw = function(t) {
      this.scrim.style.opacity = t.progress, this._components.forEach(function(e) {
        e.onScrollMotionDraw(t)
      })
    }, u.destroy = function() {
      l.destroy.call(this)
    }, u._onKey = function(t) {
      return this.shift ? (this.scrollMotionEmitter.friction = this.friction, this.shift = !1, !0) : void(t.shiftKey && (this.scrollMotionEmitter.friction = 10 * this.friction, this.shift = !0))
    }, u.setupEvents = function() {
      this.scrollMotionEmitter.on("update", this.onScrollMotionUpdate.bind(this)), this.scrollMotionEmitter.on("draw", this.onScrollMotionDraw.bind(this)), s(window, "keydown", this._onKey.bind(this)), s(window, "keyup", this._onKey.bind(this))
    }, u.teardownEvents = function() {
      this.scrollMotionEmitter.off("update", this.onScrollMotionUpdate.bind(this)), this.scrollMotionEmitter.off("draw", this.onScrollMotionDraw.bind(this)), a(window, "keydown", this._onKey.bind(this)), a(window, "keyup", this._onKey.bind(this)), l.teardownEvents.call(this)
    }, u.shuffle = function(t) {
      for (var e, i, n = t.length; n;) i = Math.floor(Math.random() * n--), e = t[n], t[n] = t[i], t[i] = e;
      return t
    }, u.setupComponents = function(t, e, i) {
      l.setupComponents.call(this, t, e, i);
      var n = this._components;
      if (0 !== n.length) {
        var r = n[0];
        n.shift(), n = this.shuffle(n), n.unshift(r), n.forEach(function(t, e) {
          t.delay = 100 * e
        }.bind(this))
      }
    }, u.onSectionWillAppear = function(t, e) {
      l.onSectionWillAppear.call(this, t, e)
    }, u.activate = function() {
      l.activate.call(this), this.scrollMotionEmitter.start()
    }, u.animateIn = function() {
      l.animateIn.call(this)
    }, u.onRequestAnimationFrame = function() {
      l.onRequestAnimationFrame.call(this)
    }, u.deactivate = function() {
      l.deactivate.call(this), this.scrollMotionEmitter.stop()
    }, u.onSectionWillDisappear = function(t, e) {
      l.onSectionWillDisappear.call(this, t, e)
    }, u.onScroll = function(t, e, i) {
      l.onScroll.call(this, t, e, i), c.REDUCED_MOTION || this.scrollMotionEmitter.setProgress(e / i)
    }, u.onResizeImmediate = function(t, e, i) {
      l.onResizeImmediate.call(this, t, e, i), this.scrollMotionEmitter.setProgress(e / i)
    }, u.onResizeDebounced = function(t, e, i) {
      l.onResizeDebounced.call(this, t, e, i)
    }, u.onBreakpoint = function(t, e, i, n) {
      l.onBreakpoint.call(this, t, e, i, n)
    }, e.exports = n
  }, {
    "@marcom/ac-dom-events/addEventListener": 6,
    "@marcom/ac-dom-events/removeEventListener": 15,
    "@marcom/ac-jetpack-lib/core/BaseSection": 658,
    "@marcom/ac-jetpack-lib/model/EnabledFeatures": 662,
    "@marcom/ac-motion-emitter/MotionEmitter": 798,
    "@marcom/ac-polyfills/Object/create": void 0
  }],
  834: [function(t, e, i) {
    "use strict";
    e.exports = {
      init: function() {
        var t = document.getElementsByTagName("html")[0];
        this.BLOBS = t.classList.contains("blobs"), this.CSS_TRANSITIONS = t.classList.contains("css-transitions"), this.CSS_2DTRANSFORMS = t.classList.contains("twoDTransforms"), this.CSS_3DTRANSFORMS = t.classList.contains("threeDTransforms"), this.INLINE_VIDEO = t.classList.contains("inlineVideo"), this.MP4 = t.classList.contains("video"), this.REDUCED_MOTION = t.classList.contains("reduced-motion")
      }
    }
  }, {}]
}, {}, [832]);