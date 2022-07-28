(function e(b, g, d) {
  function c(m, j) {
    if (!g[m]) {
      if (!b[m]) {
        var i = typeof require == "function" && require;
        if (!j && i) {
          return i(m, !0)
        }
        if (a) {
          return a(m, !0)
        }
        var k = new Error("Cannot find module '" + m + "'");
        throw k.code = "MODULE_NOT_FOUND", k
      }
      var h = g[m] = {
        exports: {}
      };
      b[m][0].call(h.exports, function(l) {
        var o = b[m][1][l];
        return c(o ? o : l)
      }, h, h.exports, e, b, g, d)
    }
    return g[m].exports
  }
  var a = typeof require == "function" && require;
  for (var f = 0; f < d.length; f++) {
    c(d[f])
  }
  return c
})({
  1: [function(d, b, f) {
    var g = d("./utils/eventTypeAvailable");
    var j = d("./shared/camelCasedEventTypes");
    var c = d("./shared/windowFallbackEventTypes");
    var h = d("./shared/prefixHelper");
    var a = {};
    b.exports = function i(m, l) {
      var n;
      var o;
      var k;
      l = l || "div";
      m = m.toLowerCase();
      if (!(l in a)) {
        a[l] = {}
      }
      o = a[l];
      if (m in o) {
        return o[m]
      }
      if (g(m, l)) {
        return o[m] = m
      }
      if (m in j) {
        for (k = 0; k < j[m].length; k++) {
          n = j[m][k];
          if (g(n.toLowerCase(), l)) {
            return o[m] = n
          }
        }
      }
      for (k = 0; k < h.evt.length; k++) {
        n = h.evt[k] + m;
        if (g(n, l)) {
          h.reduce(k);
          return o[m] = n
        }
      }
      if (l !== "window" && c.indexOf(m)) {
        return o[m] = i(m, "window")
      }
      return o[m] = false
    }
  }, {
    "./shared/camelCasedEventTypes": 2,
    "./shared/prefixHelper": 3,
    "./shared/windowFallbackEventTypes": 4,
    "./utils/eventTypeAvailable": 5
  }],
  2: [function(b, c, a) {
    c.exports = {
      transitionend: ["webkitTransitionEnd", "MSTransitionEnd"],
      animationstart: ["webkitAnimationStart", "MSAnimationStart"],
      animationend: ["webkitAnimationEnd", "MSAnimationEnd"],
      animationiteration: ["webkitAnimationIteration", "MSAnimationIteration"],
      fullscreenchange: ["MSFullscreenChange"],
      fullscreenerror: ["MSFullscreenError"]
    }
  }, {}],
  3: [function(b, d, a) {
    var i = ["-webkit-", "-moz-", "-ms-"];
    var f = ["Webkit", "Moz", "ms"];
    var h = ["webkit", "moz", "ms"];
    var c = function() {
      this.initialize()
    };
    var g = c.prototype;
    g.initialize = function() {
      this.reduced = false;
      this.css = i;
      this.dom = f;
      this.evt = h
    };
    g.reduce = function(j) {
      if (!this.reduced) {
        this.reduced = true;
        this.css = [this.css[j]];
        this.dom = [this.dom[j]];
        this.evt = [this.evt[j]]
      }
    };
    d.exports = new c()
  }, {}],
  4: [function(b, c, a) {
    c.exports = ["transitionend", "animationstart", "animationend", "animationiteration"]
  }, {}],
  5: [function(c, f, b) {
    var a = {
      window: window,
      document: document
    };
    f.exports = function d(i, g) {
      var h;
      i = "on" + i;
      if (!(g in a)) {
        a[g] = document.createElement(g)
      }
      h = a[g];
      if (i in h) {
        return true
      }
      if ("setAttribute" in h) {
        h.setAttribute(i, "return;");
        return (typeof h[i] === "function")
      }
      return false
    }
  }, {}],
  6: [function(c, d, b) {
    var a = c("./shared/getEventType");
    d.exports = function f(j, h, i, g) {
      h = a(j, h);
      g = g || false;
      j.addEventListener(h, i, g)
    }
  }, {
    "./shared/getEventType": 7
  }],
  7: [function(c, f, b) {
    var d = c("@marcom/ac-prefixer/getEventType");
    f.exports = function a(j, i) {
      var h;
      var g;
      if ("tagName" in j) {
        h = j.tagName
      } else {
        if (j === window) {
          h = "window"
        } else {
          h = "document"
        }
      }
      g = d(i, h);
      return g || i
    }
  }, {
    "@marcom/ac-prefixer/getEventType": 1
  }],
  8: [function(c, d, b) {
    var a = function() {
      var h = "";
      var g;
      for (g = 0; g < arguments.length; g++) {
        if (g > 0) {
          h += ","
        }
        h += arguments[g]
      }
      return h
    };
    d.exports = function f(i, h) {
      h = h || a;
      var g = function() {
        var j = arguments;
        var k = h.apply(this, j);
        if (!(k in g.cache)) {
          g.cache[k] = i.apply(this, j)
        }
        return g.cache[k]
      };
      g.cache = {};
      return g
    }
  }, {}],
  9: [function(b, c, a) {
    c.exports = function d(g) {
      var f;
      return function() {
        if (typeof f === "undefined") {
          f = g.apply(this, arguments)
        }
        return f
      }
    }
  }, {}],
  10: [function(b, c, a) {
    arguments[4][1][0].apply(a, arguments)
  }, {
    "./shared/camelCasedEventTypes": 13,
    "./shared/prefixHelper": 15,
    "./shared/windowFallbackEventTypes": 18,
    "./utils/eventTypeAvailable": 19,
    dup: 1
  }],
  11: [function(f, d, h) {
    var a = f("./shared/stylePropertyCache");
    var i = f("./shared/getStyleTestElement");
    var b = f("./utils/toCSS");
    var k = f("./utils/toDOM");
    var j = f("./shared/prefixHelper");
    var c = function(o, l) {
      var m = b(o);
      var n = (l === false) ? false : b(l);
      a[o] = a[l] = a[m] = a[n] = {
        dom: l,
        css: n
      };
      return l
    };
    d.exports = function g(p) {
      var n;
      var l;
      var o;
      var m;
      p += "";
      if (p in a) {
        return a[p].dom
      }
      o = i();
      p = k(p);
      l = p.charAt(0).toUpperCase() + p.substring(1);
      if (p === "filter") {
        n = ["WebkitFilter", "filter"]
      } else {
        n = (p + " " + j.dom.join(l + " ") + l).split(" ")
      }
      for (m = 0; m < n.length; m++) {
        if (typeof o.style[n[m]] !== "undefined") {
          if (m !== 0) {
            j.reduce(m - 1)
          }
          return c(p, n[m])
        }
      }
      return c(p, false)
    }
  }, {
    "./shared/getStyleTestElement": 14,
    "./shared/prefixHelper": 15,
    "./shared/stylePropertyCache": 16,
    "./utils/toCSS": 20,
    "./utils/toDOM": 21
  }],
  12: [function(d, b, h) {
    var f = d("./getStyleProperty");
    var k = d("./shared/styleValueAvailable");
    var j = d("./shared/prefixHelper");
    var a = d("./shared/stylePropertyCache");
    var i = {};
    var l = /(\([^\)]+\))/gi;
    var g = /([^ ,;\(]+(\([^\)]+\))?)/gi;
    b.exports = function c(o, n) {
      var m;
      n += "";
      o = f(o);
      if (!o) {
        return false
      }
      if (k(o, n)) {
        return n
      }
      m = a[o].css;
      n = n.replace(g, function(q) {
        var p;
        var t;
        var s;
        var r;
        if (q[0] === "#" || !isNaN(q[0])) {
          return q
        }
        t = q.replace(l, "");
        s = m + ":" + t;
        if (s in i) {
          if (i[s] === false) {
            return ""
          }
          return q.replace(t, i[s])
        }
        p = j.css.map(function(u) {
          return u + q
        });
        p = [q].concat(p);
        for (r = 0; r < p.length; r++) {
          if (k(o, p[r])) {
            if (r !== 0) {
              j.reduce(r - 1)
            }
            i[s] = p[r].replace(l, "");
            return p[r]
          }
        }
        i[s] = false;
        return ""
      });
      n = n.trim();
      return (n === "") ? false : n
    }
  }, {
    "./getStyleProperty": 11,
    "./shared/prefixHelper": 15,
    "./shared/stylePropertyCache": 16,
    "./shared/styleValueAvailable": 17
  }],
  13: [function(b, c, a) {
    arguments[4][2][0].apply(a, arguments)
  }, {
    dup: 2
  }],
  14: [function(c, d, b) {
    var f;
    d.exports = function a() {
      if (!f) {
        f = document.createElement("_")
      } else {
        f.style.cssText = "";
        f.removeAttribute("style")
      }
      return f
    };
    d.exports.resetElement = function() {
      f = null
    }
  }, {}],
  15: [function(b, c, a) {
    arguments[4][3][0].apply(a, arguments)
  }, {
    dup: 3
  }],
  16: [function(b, c, a) {
    c.exports = {}
  }, {}],
  17: [function(c, b, d) {
    var a = c("./stylePropertyCache");
    var f = c("./getStyleTestElement");
    var i = false;
    var k;
    var j;
    var g = function() {
      var l;
      if (!i) {
        i = true;
        k = ("CSS" in window && "supports" in window.CSS);
        j = false;
        l = f();
        try {
          l.style.width = "invalid"
        } catch (m) {
          j = true
        }
      }
    };
    b.exports = function h(o, n) {
      var m;
      var l;
      g();
      if (k) {
        o = a[o].css;
        return CSS.supports(o, n)
      }
      l = f();
      m = l.style[o];
      if (j) {
        try {
          l.style[o] = n
        } catch (p) {
          return false
        }
      } else {
        l.style[o] = n
      }
      return (l.style[o] && l.style[o] !== m)
    };
    b.exports.resetFlags = function() {
      i = false
    }
  }, {
    "./getStyleTestElement": 14,
    "./stylePropertyCache": 16
  }],
  18: [function(b, c, a) {
    arguments[4][4][0].apply(a, arguments)
  }, {
    dup: 4
  }],
  19: [function(b, c, a) {
    arguments[4][5][0].apply(a, arguments)
  }, {
    dup: 5
  }],
  20: [function(c, d, b) {
    var f = /^(webkit|moz|ms)/gi;
    d.exports = function a(h) {
      var g;
      if (h.toLowerCase() === "cssfloat") {
        return "float"
      }
      if (f.test(h)) {
        h = "-" + h
      }
      return h.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase()
    }
  }, {}],
  21: [function(b, c, a) {
    var f = /-([a-z])/g;
    c.exports = function d(h) {
      var g;
      if (h.toLowerCase() === "float") {
        return "cssFloat"
      }
      h = h.replace(f, function(j, i) {
        return i.toUpperCase()
      });
      if (h.substr(0, 2) === "Ms") {
        h = "ms" + h.substring(2)
      }
      return h
    }
  }, {}],
  22: [function(b, c, a) {
    c.exports = {
      canvasAvailable: b("./canvasAvailable"),
      continuousScrollEventsAvailable: b("./continuousScrollEventsAvailable"),
      cookiesAvailable: b("./cookiesAvailable"),
      cssLinearGradientAvailable: b("./cssLinearGradientAvailable"),
      cssPropertyAvailable: b("./cssPropertyAvailable"),
      cssViewportUnitsAvailable: b("./cssViewportUnitsAvailable"),
      elementAttributeAvailable: b("./elementAttributeAvailable"),
      eventTypeAvailable: b("./eventTypeAvailable"),
      isDesktop: b("./isDesktop"),
      isHandheld: b("./isHandheld"),
      isRetina: b("./isRetina"),
      isTablet: b("./isTablet"),
      localStorageAvailable: b("./localStorageAvailable"),
      mediaElementsAvailable: b("./mediaElementsAvailable"),
      mediaQueriesAvailable: b("./mediaQueriesAvailable"),
      sessionStorageAvailable: b("./sessionStorageAvailable"),
      svgAvailable: b("./svgAvailable"),
      threeDTransformsAvailable: b("./threeDTransformsAvailable"),
      touchAvailable: b("./touchAvailable"),
      webGLAvailable: b("./webGLAvailable")
    }
  }, {
    "./canvasAvailable": 23,
    "./continuousScrollEventsAvailable": 24,
    "./cookiesAvailable": 25,
    "./cssLinearGradientAvailable": 26,
    "./cssPropertyAvailable": 27,
    "./cssViewportUnitsAvailable": 28,
    "./elementAttributeAvailable": 29,
    "./eventTypeAvailable": 30,
    "./isDesktop": 32,
    "./isHandheld": 33,
    "./isRetina": 34,
    "./isTablet": 35,
    "./localStorageAvailable": 36,
    "./mediaElementsAvailable": 37,
    "./mediaQueriesAvailable": 38,
    "./sessionStorageAvailable": 39,
    "./svgAvailable": 40,
    "./threeDTransformsAvailable": 41,
    "./touchAvailable": 42,
    "./webGLAvailable": 43
  }],
  23: [function(b, c, a) {
    var g = b("./helpers/globals");
    var f = b("@marcom/ac-function/once");
    var d = function() {
      var h = g.getDocument();
      var i = h.createElement("canvas");
      return !!(typeof i.getContext === "function" && i.getContext("2d"))
    };
    c.exports = f(d);
    c.exports.original = d
  }, {
    "./helpers/globals": 31,
    "@marcom/ac-function/once": 9
  }],
  24: [function(c, f, b) {
    var d = c("@marcom/ac-useragent");
    var a = c("./touchAvailable").original;
    var g = c("@marcom/ac-function/once");

    function h() {
      return (!a() || (d.os.ios && d.os.version.major >= 8) || d.browser.chrome)
    }
    f.exports = g(h);
    f.exports.original = h
  }, {
    "./touchAvailable": 42,
    "@marcom/ac-function/once": 9,
    "@marcom/ac-useragent": 400
  }],
  25: [function(c, d, b) {
    var g = c("./helpers/globals");
    var f = c("@marcom/ac-function/once");

    function a() {
      var k = false;
      var h = g.getDocument();
      var j = g.getNavigator();
      try {
        if ("cookie" in h && !!j.cookieEnabled) {
          h.cookie = "ac_feature_cookie=1";
          k = (h.cookie.indexOf("ac_feature_cookie") !== -1);
          h.cookie = "ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        }
      } catch (i) {}
      return k
    }
    d.exports = f(a);
    d.exports.original = a
  }, {
    "./helpers/globals": 31,
    "@marcom/ac-function/once": 9
  }],
  26: [function(c, d, b) {
    var g = c("@marcom/ac-prefixer/getStyleValue");
    var f = c("@marcom/ac-function/once");

    function a() {
      var h = ["linear-gradient(to bottom right, #9f9, white)", "linear-gradient(top left, #9f9, white)", "gradient(linear, left top, right bottom, from(#9f9), to(white))"];
      return h.some(function(i) {
        return !!g("background-image", i)
      })
    }
    d.exports = f(a);
    d.exports.original = a
  }, {
    "@marcom/ac-function/once": 9,
    "@marcom/ac-prefixer/getStyleValue": 12
  }],
  27: [function(c, d, b) {
    var g = c("@marcom/ac-prefixer/getStyleValue");
    var f = c("@marcom/ac-prefixer/getStyleProperty");
    var h = c("@marcom/ac-function/memoize");

    function a(j, i) {
      if (typeof i !== "undefined") {
        return !!g(j, i)
      } else {
        return !!f(j)
      }
    }
    d.exports = h(a);
    d.exports.original = a
  }, {
    "@marcom/ac-function/memoize": 8,
    "@marcom/ac-prefixer/getStyleProperty": 11,
    "@marcom/ac-prefixer/getStyleValue": 12
  }],
  28: [function(b, c, a) {
    var f = b("@marcom/ac-prefixer/getStyleValue");
    var d = b("@marcom/ac-function/once");

    function g() {
      return !!f("margin", "1vw 1vh")
    }
    c.exports = d(g);
    c.exports.original = g
  }, {
    "@marcom/ac-function/once": 9,
    "@marcom/ac-prefixer/getStyleValue": 12
  }],
  29: [function(b, d, a) {
    var f = b("./helpers/globals");
    var g = b("@marcom/ac-function/memoize");

    function c(h, j) {
      var i = f.getDocument();
      var k;
      j = j || "div";
      k = i.createElement(j);
      return (h in k)
    }
    d.exports = g(c);
    d.exports.original = c
  }, {
    "./helpers/globals": 31,
    "@marcom/ac-function/memoize": 8
  }],
  30: [function(c, f, b) {
    var a = c("@marcom/ac-prefixer/getEventType");
    var g = c("@marcom/ac-function/memoize");

    function d(i, h) {
      return !!a(i, h)
    }
    f.exports = g(d);
    f.exports.original = d
  }, {
    "@marcom/ac-function/memoize": 8,
    "@marcom/ac-prefixer/getEventType": 10
  }],
  31: [function(b, c, a) {
    c.exports = {
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
  32: [function(d, f, b) {
    var a = d("./touchAvailable").original;
    var h = d("./helpers/globals");
    var g = d("@marcom/ac-function/once");

    function c() {
      var i = h.getWindow();
      return (!a() && !i.orientation)
    }
    f.exports = g(c);
    f.exports.original = c
  }, {
    "./helpers/globals": 31,
    "./touchAvailable": 42,
    "@marcom/ac-function/once": 9
  }],
  33: [function(f, g, c) {
    var d = f("./isDesktop").original;
    var a = f("./isTablet").original;
    var h = f("@marcom/ac-function/once");

    function b() {
      return (!d() && !a())
    }
    g.exports = h(b);
    g.exports.original = b
  }, {
    "./isDesktop": 32,
    "./isTablet": 35,
    "@marcom/ac-function/once": 9
  }],
  34: [function(b, c, a) {
    var d = b("./helpers/globals");
    c.exports = function f() {
      var g = d.getWindow();
      return ("devicePixelRatio" in g && g.devicePixelRatio >= 1.5)
    }
  }, {
    "./helpers/globals": 31
  }],
  35: [function(f, g, c) {
    var d = f("./isDesktop").original;
    var i = f("./helpers/globals");
    var h = f("@marcom/ac-function/once");
    var b = 600;

    function a() {
      var k = i.getWindow();
      var j = k.screen.width;
      if (k.orientation && k.screen.height < j) {
        j = k.screen.height
      }
      return (!d() && j >= b)
    }
    g.exports = h(a);
    g.exports.original = a
  }, {
    "./helpers/globals": 31,
    "./isDesktop": 32,
    "@marcom/ac-function/once": 9
  }],
  36: [function(c, d, a) {
    var g = c("./helpers/globals");
    var f = c("@marcom/ac-function/once");

    function b() {
      var j = g.getWindow();
      var i = false;
      try {
        i = !!(j.localStorage && j.localStorage.non_existent !== null)
      } catch (h) {}
      return i
    }
    d.exports = f(b);
    d.exports.original = b
  }, {
    "./helpers/globals": 31,
    "@marcom/ac-function/once": 9
  }],
  37: [function(b, c, a) {
    var g = b("./helpers/globals");
    var d = b("@marcom/ac-function/once");

    function f() {
      var h = g.getWindow();
      return ("HTMLMediaElement" in h)
    }
    c.exports = d(f);
    c.exports.original = f
  }, {
    "./helpers/globals": 31,
    "@marcom/ac-function/once": 9
  }],
  38: [function(c, d, b) {
    c("@marcom/ac-polyfills/matchMedia");
    var g = c("./helpers/globals");
    var f = c("@marcom/ac-function/once");

    function a() {
      var i = g.getWindow();
      var h = i.matchMedia("only all");
      return !!(h && h.matches)
    }
    d.exports = f(a);
    d.exports.original = a
  }, {
    "./helpers/globals": 31,
    "@marcom/ac-function/once": 9,
    "@marcom/ac-polyfills/matchMedia": 364
  }],
  39: [function(c, d, b) {
    var g = c("./helpers/globals");
    var f = c("@marcom/ac-function/once");

    function a() {
      var j = g.getWindow();
      var h = false;
      try {
        if ("sessionStorage" in j && typeof j.sessionStorage.setItem === "function") {
          j.sessionStorage.setItem("ac_feature", "test");
          h = true;
          j.sessionStorage.removeItem("ac_feature", "test")
        }
      } catch (i) {}
      return h
    }
    d.exports = f(a);
    d.exports.original = a
  }, {
    "./helpers/globals": 31,
    "@marcom/ac-function/once": 9
  }],
  40: [function(c, d, b) {
    var g = c("./helpers/globals");
    var f = c("@marcom/ac-function/once");

    function a() {
      var h = g.getDocument();
      return !!h.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
    }
    d.exports = f(a);
    d.exports.original = a
  }, {
    "./helpers/globals": 31,
    "@marcom/ac-function/once": 9
  }],
  41: [function(b, c, a) {
    var g = b("@marcom/ac-prefixer/getStyleValue");
    var d = b("@marcom/ac-function/once");

    function f() {
      return !!(g("perspective", "1px") && g("transform", "translateZ(0)"))
    }
    c.exports = d(f);
    c.exports.original = f
  }, {
    "@marcom/ac-function/once": 9,
    "@marcom/ac-prefixer/getStyleValue": 12
  }],
  42: [function(c, d, b) {
    var g = c("./helpers/globals");
    var f = c("@marcom/ac-function/once");

    function a() {
      var j = g.getWindow();
      var h = g.getDocument();
      var i = g.getNavigator();
      return !!(("ontouchstart" in j) || (j.DocumentTouch && h instanceof j.DocumentTouch) || (i.maxTouchPoints > 0) || (i.msMaxTouchPoints > 0))
    }
    d.exports = f(a);
    d.exports.original = a
  }, {
    "./helpers/globals": 31,
    "@marcom/ac-function/once": 9
  }],
  43: [function(c, d, b) {
    var g = c("./helpers/globals");
    var f = c("@marcom/ac-function/once");

    function a() {
      var h = g.getDocument();
      var i = h.createElement("canvas");
      if (typeof i.getContext === "function") {
        return !!(i.getContext("webgl") || i.getContext("experimental-webgl"))
      }
      return false
    }
    d.exports = f(a);
    d.exports.original = a
  }, {
    "./helpers/globals": 31,
    "@marcom/ac-function/once": 9
  }],
  44: [function(g, a, s) {
    var j = a.exports = {};
    var k;
    var m;

    function h() {
      throw new Error("setTimeout has not been defined")
    }

    function q() {
      throw new Error("clearTimeout has not been defined")
    }(function() {
      try {
        if (typeof setTimeout === "function") {
          k = setTimeout
        } else {
          k = h
        }
      } catch (t) {
        k = h
      }
      try {
        if (typeof clearTimeout === "function") {
          m = clearTimeout
        } else {
          m = q
        }
      } catch (t) {
        m = q
      }
    }());

    function f(t) {
      if (k === setTimeout) {
        return setTimeout(t, 0)
      }
      if ((k === h || !k) && setTimeout) {
        k = setTimeout;
        return setTimeout(t, 0)
      }
      try {
        return k(t, 0)
      } catch (u) {
        try {
          return k.call(null, t, 0)
        } catch (u) {
          return k.call(this, t, 0)
        }
      }
    }

    function d(t) {
      if (m === clearTimeout) {
        return clearTimeout(t)
      }
      if ((m === q || !m) && clearTimeout) {
        m = clearTimeout;
        return clearTimeout(t)
      }
      try {
        return m(t)
      } catch (u) {
        try {
          return m.call(null, t)
        } catch (u) {
          return m.call(this, t)
        }
      }
    }
    var n = [];
    var r = false;
    var i;
    var o = -1;

    function l() {
      if (!r || !i) {
        return
      }
      r = false;
      if (i.length) {
        n = i.concat(n)
      } else {
        o = -1
      }
      if (n.length) {
        p()
      }
    }

    function p() {
      if (r) {
        return
      }
      var u = f(l);
      r = true;
      var t = n.length;
      while (t) {
        i = n;
        n = [];
        while (++o < t) {
          if (i) {
            i[o].run()
          }
        }
        o = -1;
        t = n.length
      }
      i = null;
      r = false;
      d(u)
    }
    j.nextTick = function(t) {
      var u = new Array(arguments.length - 1);
      if (arguments.length > 1) {
        for (var v = 1; v < arguments.length; v++) {
          u[v - 1] = arguments[v]
        }
      }
      n.push(new b(t, u));
      if (n.length === 1 && !r) {
        f(p)
      }
    };

    function b(t, u) {
      this.fun = t;
      this.array = u
    }
    b.prototype.run = function() {
      this.fun.apply(null, this.array)
    };
    j.title = "browser";
    j.browser = true;
    j.env = {};
    j.argv = [];
    j.version = "";
    j.versions = {};

    function c() {}
    j.on = c;
    j.addListener = c;
    j.once = c;
    j.off = c;
    j.removeListener = c;
    j.removeAllListeners = c;
    j.emit = c;
    j.prependListener = c;
    j.prependOnceListener = c;
    j.listeners = function(t) {
      return []
    };
    j.binding = function(t) {
      throw new Error("process.binding is not supported")
    };
    j.cwd = function() {
      return "/"
    };
    j.chdir = function(t) {
      throw new Error("process.chdir is not supported")
    };
    j.umask = function() {
      return 0
    }
  }, {}],
  45: [function(c, d, b) {
    var a = c("@marcom/ac-jetpack-lib/core/BaseComponent");
    var i = a.prototype;
    var h = {
      ELEMENT_ENGAGEMENT: "data-engaged"
    };

    function g(o, q, j, m, k, p, l) {
      this.name = "EngagedElementComponent_" + l;
      a.call(this, o, q, j, m, k, p, l);
      this.timeToEngage = 300;
      this.inViewThreshold = 0.75;
      if (this.element.hasAttribute(h.ELEMENT_ENGAGEMENT)) {
        try {
          this._overwriteElementEngagementProps()
        } catch (n) {
          console.error("EngagedElementAnimationComponent::_overwriteElementEngagementProps bad JSON in data-attribute!", n)
        }
      }
      this.trackedElement = this.section.elementEngagement.addElement(this.element, {
        timeToEngage: this.timeToEngage,
        inViewThreshold: this.inViewThreshold
      })
    }
    var f = g.prototype = Object.create(a.prototype);
    g.prototype.constructor = g;
    f.setupEvents = function() {
      i.setupEvents.call(this);
      this._onElementEngaged = this._onElementEngaged.bind(this);
      this.trackedElement.once("engaged", this._onElementEngaged)
    };
    f._onElementEngaged = function(j) {
      this.element.classList.add("engaged")
    };
    f._overwriteElementEngagementProps = function() {
      var k = this.element.getAttribute(h.ELEMENT_ENGAGEMENT);
      var j = JSON.parse(k);
      this.timeToEngage = j.timeToEngage === undefined ? this.timeToEngage : parseFloat(j.timeToEngage);
      this.inViewThreshold = j.inViewThreshold === undefined ? this.inViewThreshold : parseFloat(j.inViewThreshold)
    };
    d.exports = g
  }, {
    "@marcom/ac-jetpack-lib/core/BaseComponent": 138
  }],
  46: [function(c, d, b) {
    d.exports = function a(f, h) {
      var g;
      if (h) {
        g = f.getBoundingClientRect();
        return {
          width: g.width,
          height: g.height
        }
      }
      return {
        width: f.offsetWidth,
        height: f.offsetHeight
      }
    }
  }, {}],
  47: [function(f, g, d) {
    var c = f("./getDimensions");
    var b = f("./getScrollX");
    var a = f("./getScrollY");
    g.exports = function h(i, n) {
      var k;
      var m;
      var l;
      var j;
      if (n) {
        k = i.getBoundingClientRect();
        m = b();
        l = a();
        return {
          top: k.top + l,
          right: k.right + m,
          bottom: k.bottom + l,
          left: k.left + m
        }
      }
      j = c(i, n);
      k = {
        top: i.offsetTop,
        left: i.offsetLeft,
        width: j.width,
        height: j.height
      };
      while ((i = i.offsetParent)) {
        k.top += i.offsetTop;
        k.left += i.offsetLeft
      }
      return {
        top: k.top,
        right: k.left + k.width,
        bottom: k.top + k.height,
        left: k.left
      }
    }
  }, {
    "./getDimensions": 46,
    "./getScrollX": 48,
    "./getScrollY": 49
  }],
  48: [function(c, d, b) {
    d.exports = function a(f) {
      f = f || window;
      if (f === window) {
        return window.scrollX || window.pageXOffset
      }
      return f.scrollLeft
    }
  }, {}],
  49: [function(c, d, b) {
    d.exports = function a(f) {
      f = f || window;
      if (f === window) {
        return window.scrollY || window.pageYOffset
      }
      return f.scrollTop
    }
  }, {}],
  50: [function(b, d, a) {
    var f = function() {};
    d.exports = function c(g) {
      if (arguments.length > 1) {
        throw new Error("Second argument not supported")
      }
      if (g === null || typeof g !== "object") {
        throw new TypeError("Object prototype may only be an Object.")
      }
      if (typeof Object.create === "function") {
        return Object.create(g)
      } else {
        f.prototype = g;
        return new f()
      }
    }
  }, {}],
  51: [function(b, c, a) {
    var f = b("./extend");
    c.exports = function d(h, g) {
      if (typeof h !== "object") {
        throw new TypeError("defaults: must provide a defaults object")
      }
      g = g || {};
      if (typeof g !== "object") {
        throw new TypeError("defaults: options must be a typeof object")
      }
      return f({}, h, g)
    }
  }, {
    "./extend": 52
  }],
  52: [function(c, d, b) {
    c("@marcom/ac-polyfills/Array/prototype.forEach");
    var a = Object.prototype.hasOwnProperty;
    d.exports = function f() {
      var h;
      var g;
      if (arguments.length < 2) {
        h = [{}, arguments[0]]
      } else {
        h = [].slice.call(arguments)
      }
      g = h.shift();
      h.forEach(function(j) {
        if (j != null) {
          for (var i in j) {
            if (a.call(j, i)) {
              g[i] = j[i]
            }
          }
        }
      });
      return g
    }
  }, {
    "@marcom/ac-polyfills/Array/prototype.forEach": 352
  }],
  53: [function(b, d, a) {
    var c = b("./ac-element-engagement/ElementEngagement");
    d.exports = new c();
    d.exports.ElementEngagement = c
  }, {
    "./ac-element-engagement/ElementEngagement": 54
  }],
  54: [function(c, b, f) {
    var g;
    var k = c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var d = {
      create: c("@marcom/ac-object/create"),
      defaults: c("@marcom/ac-object/defaults"),
      extend: c("@marcom/ac-object/extend")
    };
    var h = c("@marcom/ac-element-tracker").ElementTracker;
    var j = {
      timeToEngage: 500,
      inViewThreshold: 0.75,
      stopOnEngaged: true
    };
    var i = {
      thresholdEnterTime: 0,
      thresholdExitTime: 0,
      inThreshold: false,
      engaged: false,
      tracking: true
    };
    var a = function(l) {
      h.call(this, null, l);
      k.call(this);
      this._thresholdEnter = this._thresholdEnter.bind(this);
      this._thresholdExit = this._thresholdExit.bind(this);
      this._enterView = this._enterView.bind(this);
      this._exitView = this._exitView.bind(this)
    };
    g = a.prototype = d.create(h.prototype);
    g = d.extend(g, k.prototype);
    g._decorateTrackedElement = function(m, l) {
      var n;
      n = d.defaults(j, l || {});
      d.extend(m, n);
      d.extend(m, i)
    };
    g._attachElementListeners = function(l) {
      l.on("thresholdenter", this._thresholdEnter, this);
      l.on("thresholdexit", this._thresholdExit, this);
      l.on("enterview", this._enterView, this);
      l.on("exitview", this._exitView, this)
    };
    g._removeElementListeners = function(l) {
      l.off("thresholdenter", this._thresholdEnter);
      l.off("thresholdexit", this._thresholdExit);
      l.off("enterview", this._enterView);
      l.off("exitview", this._exitView)
    };
    g._attachAllElementListeners = function() {
      this.elements.forEach(function(l) {
        if (!l.stopOnEngaged) {
          this._attachElementListeners(l)
        } else {
          if (!l.engaged) {
            this._attachElementListeners(l)
          }
        }
      }, this)
    };
    g._removeAllElementListeners = function() {
      this.elements.forEach(function(l) {
        this._removeElementListeners(l)
      }, this)
    };
    g._elementInViewPastThreshold = function(n) {
      var l = document.documentElement.clientHeight || window.innerHeight;
      var m = false;
      if (n.pixelsInView === l) {
        m = true
      } else {
        m = (n.percentInView > n.inViewThreshold)
      }
      return m
    };
    g._ifInView = function(l, n) {
      var m = l.inThreshold;
      h.prototype._ifInView.apply(this, arguments);
      if (!m && this._elementInViewPastThreshold(l)) {
        l.inThreshold = true;
        l.trigger("thresholdenter", l);
        if (typeof l.timeToEngage === "number" && l.timeToEngage >= 0) {
          l.engagedTimeout = window.setTimeout(this._engaged.bind(this, l), l.timeToEngage)
        }
      }
    };
    g._ifAlreadyInView = function(l) {
      var m = l.inThreshold;
      h.prototype._ifAlreadyInView.apply(this, arguments);
      if (m && !this._elementInViewPastThreshold(l)) {
        l.inThreshold = false;
        l.trigger("thresholdexit", l);
        if (l.engagedTimeout) {
          window.clearTimeout(l.engagedTimeout);
          l.engagedTimeout = null
        }
      }
    };
    g._engaged = function(l) {
      l.engagedTimeout = null;
      this._elementEngaged(l);
      l.trigger("engaged", l);
      this.trigger("engaged", l)
    };
    g._thresholdEnter = function(l) {
      l.thresholdEnterTime = Date.now();
      l.thresholdExitTime = 0;
      this.trigger("thresholdenter", l)
    };
    g._thresholdExit = function(l) {
      l.thresholdExitTime = Date.now();
      this.trigger("thresholdexit", l)
    };
    g._enterView = function(l) {
      this.trigger("enterview", l)
    };
    g._exitView = function(l) {
      this.trigger("exitview", l)
    };
    g._elementEngaged = function(l) {
      l.engaged = true;
      if (l.stopOnEngaged) {
        this.stop(l)
      }
    };
    g.stop = function(l) {
      if (this.tracking && !l) {
        this._removeAllElementListeners();
        h.prototype.stop.call(this)
      }
      if (l && l.tracking) {
        l.tracking = false;
        this._removeElementListeners(l)
      }
    };
    g.start = function(l) {
      if (!l) {
        this._attachAllElementListeners()
      }
      if (l && !l.tracking) {
        if (!l.stopOnEngaged) {
          l.tracking = true;
          this._attachElementListeners(l)
        } else {
          if (!l.engaged) {
            l.tracking = true;
            this._attachElementListeners(l)
          }
        }
      }
      if (!this.tracking) {
        h.prototype.start.call(this)
      } else {
        this.refreshAllElementMetrics();
        this.refreshAllElementStates()
      }
    };
    g.addElement = function(n, l) {
      l = l || {};
      var m = h.prototype.addElement.call(this, n, l.useRenderedPosition);
      this._decorateTrackedElement(m, l);
      return m
    };
    g.addElements = function(m, l) {
      [].forEach.call(m, function(n) {
        this.addElement(n, l)
      }, this)
    };
    b.exports = a
  }, {
    "@marcom/ac-element-tracker": 123,
    "@marcom/ac-event-emitter-micro": 126,
    "@marcom/ac-object/create": 50,
    "@marcom/ac-object/defaults": 51,
    "@marcom/ac-object/extend": 52
  }],
  55: [function(b, c, a) {
    c.exports = {
      flatten: b("./flatten"),
      intersection: b("./intersection"),
      shuffle: b("./shuffle"),
      toArray: b("./toArray"),
      union: b("./union"),
      unique: b("./unique"),
      without: b("./without")
    }
  }, {
    "./flatten": 56,
    "./intersection": 57,
    "./shuffle": 58,
    "./toArray": 59,
    "./union": 60,
    "./unique": 61,
    "./without": 62
  }],
  56: [function(b, c, a) {
    b("@marcom/ac-polyfills/Array/isArray");
    b("@marcom/ac-polyfills/Array/prototype.forEach");
    c.exports = function d(h) {
      var f = [];
      var g = function(i) {
        if (Array.isArray(i)) {
          i.forEach(g)
        } else {
          f.push(i)
        }
      };
      h.forEach(g);
      return f
    }
  }, {
    "@marcom/ac-polyfills/Array/isArray": 350,
    "@marcom/ac-polyfills/Array/prototype.forEach": 352
  }],
  57: [function(b, c, a) {
    b("@marcom/ac-polyfills/Array/prototype.indexOf");
    c.exports = function d(n) {
      if (!n) {
        return []
      }
      var m = arguments.length;
      var k = 0;
      var g = n.length;
      var f = [];
      var l;
      for (k; k < g; k++) {
        l = n[k];
        if (f.indexOf(l) > -1) {
          continue
        }
        for (var h = 1; h < m; h++) {
          if (arguments[h].indexOf(l) < 0) {
            break
          }
        }
        if (h === m) {
          f.push(l)
        }
      }
      return f
    }
  }, {
    "@marcom/ac-polyfills/Array/prototype.indexOf": 353
  }],
  58: [function(b, c, a) {
    c.exports = function d(i) {
      var f = i.length;
      var h;
      var g;
      while (f) {
        h = Math.floor(Math.random() * f--);
        g = i[f];
        i[f] = i[h];
        i[h] = g
      }
      return i
    }
  }, {}],
  59: [function(b, d, a) {
    b("@marcom/ac-polyfills/Array/prototype.slice");
    d.exports = function c(f) {
      return Array.prototype.slice.call(f)
    }
  }, {
    "@marcom/ac-polyfills/Array/prototype.slice": 355
  }],
  60: [function(b, d, a) {
    var h = b("./flatten");
    var c = b("./toArray");
    var g = b("./unique");
    d.exports = function f(i) {
      return g(h(c(arguments)))
    }
  }, {
    "./flatten": 56,
    "./toArray": 59,
    "./unique": 61
  }],
  61: [function(b, c, a) {
    b("@marcom/ac-polyfills/Array/prototype.indexOf");
    b("@marcom/ac-polyfills/Array/prototype.reduce");
    c.exports = function d(g) {
      var f = function(h, i) {
        if (h.indexOf(i) < 0) {
          h.push(i)
        }
        return h
      };
      return g.reduce(f, [])
    }
  }, {
    "@marcom/ac-polyfills/Array/prototype.indexOf": 353,
    "@marcom/ac-polyfills/Array/prototype.reduce": 354
  }],
  62: [function(b, d, a) {
    b("@marcom/ac-polyfills/Array/prototype.indexOf");
    b("@marcom/ac-polyfills/Array/prototype.slice");
    d.exports = function c(f, n, m) {
      var k;
      var h = f.indexOf(n);
      var l = f.length;
      if (h >= 0) {
        if (m) {
          k = f.slice(0, l);
          var g = 0;
          for (var j = h; j < l; j++) {
            if (f[j] === n) {
              k.splice(j - g, 1);
              g++
            }
          }
        } else {
          if (h === (l - 1)) {
            k = f.slice(0, (l - 1))
          } else {
            if (h === 0) {
              k = f.slice(1)
            } else {
              k = f.slice(0, h);
              k = k.concat(f.slice(h + 1))
            }
          }
        }
      } else {
        return f
      }
      return k
    }
  }, {
    "@marcom/ac-polyfills/Array/prototype.indexOf": 353,
    "@marcom/ac-polyfills/Array/prototype.slice": 355
  }],
  63: [function(c, d, b) {
    var g = c("./utils/addEventListener");
    var a = c("./shared/getEventType");
    d.exports = function f(k, i, j, h) {
      i = a(k, i);
      return g(k, i, j, h)
    }
  }, {
    "./shared/getEventType": 73,
    "./utils/addEventListener": 77
  }],
  64: [function(d, f, c) {
    var a = d("./utils/dispatchEvent");
    var b = d("./shared/getEventType");
    f.exports = function g(j, i, h) {
      i = b(j, i);
      return a(j, i, h)
    }
  }, {
    "./shared/getEventType": 73,
    "./utils/dispatchEvent": 78
  }],
  65: [function(b, c, a) {
    c.exports = {
      addEventListener: b("./addEventListener"),
      dispatchEvent: b("./dispatchEvent"),
      preventDefault: b("./preventDefault"),
      removeEventListener: b("./removeEventListener"),
      stop: b("./stop"),
      stopPropagation: b("./stopPropagation"),
      target: b("./target")
    }
  }, {
    "./addEventListener": 63,
    "./dispatchEvent": 64,
    "./preventDefault": 71,
    "./removeEventListener": 72,
    "./stop": 74,
    "./stopPropagation": 75,
    "./target": 76
  }],
  66: [function(b, c, a) {
    arguments[4][1][0].apply(a, arguments)
  }, {
    "./shared/camelCasedEventTypes": 67,
    "./shared/prefixHelper": 68,
    "./shared/windowFallbackEventTypes": 69,
    "./utils/eventTypeAvailable": 70,
    dup: 1
  }],
  67: [function(b, c, a) {
    arguments[4][2][0].apply(a, arguments)
  }, {
    dup: 2
  }],
  68: [function(b, c, a) {
    arguments[4][3][0].apply(a, arguments)
  }, {
    dup: 3
  }],
  69: [function(b, c, a) {
    arguments[4][4][0].apply(a, arguments)
  }, {
    dup: 4
  }],
  70: [function(b, c, a) {
    arguments[4][5][0].apply(a, arguments)
  }, {
    dup: 5
  }],
  71: [function(c, d, a) {
    d.exports = function b(f) {
      f = f || window.event;
      if (f.preventDefault) {
        f.preventDefault()
      } else {
        f.returnValue = false
      }
    }
  }, {}],
  72: [function(d, f, c) {
    var b = d("./utils/removeEventListener");
    var a = d("./shared/getEventType");
    f.exports = function g(k, i, j, h) {
      i = a(k, i);
      return b(k, i, j, h)
    }
  }, {
    "./shared/getEventType": 73,
    "./utils/removeEventListener": 79
  }],
  73: [function(c, f, b) {
    var d = c("@marcom/ac-prefixer/getEventType");
    f.exports = function a(j, i) {
      var h;
      var g;
      if ("tagName" in j) {
        h = j.tagName
      } else {
        if (j === window) {
          h = "window"
        } else {
          h = "document"
        }
      }
      g = d(i, h);
      if (g) {
        return g
      }
      return i
    }
  }, {
    "@marcom/ac-prefixer/getEventType": 66
  }],
  74: [function(d, g, b) {
    var a = d("./stopPropagation");
    var c = d("./preventDefault");
    g.exports = function f(h) {
      h = h || window.event;
      a(h);
      c(h);
      h.stopped = true;
      h.returnValue = false
    }
  }, {
    "./preventDefault": 71,
    "./stopPropagation": 75
  }],
  75: [function(c, d, b) {
    d.exports = function a(f) {
      f = f || window.event;
      if (f.stopPropagation) {
        f.stopPropagation()
      } else {
        f.cancelBubble = true
      }
    }
  }, {}],
  76: [function(b, c, a) {
    c.exports = function d(f) {
      f = f || window.event;
      return (typeof f.target !== "undefined") ? f.target : f.srcElement
    }
  }, {}],
  77: [function(b, c, a) {
    c.exports = function d(i, g, h, f) {
      if (i.addEventListener) {
        i.addEventListener(g, h, !!f)
      } else {
        i.attachEvent("on" + g, h)
      }
      return i
    }
  }, {}],
  78: [function(b, c, a) {
    b("@marcom/ac-polyfills/CustomEvent");
    c.exports = function d(i, h, g) {
      var f;
      if (i.dispatchEvent) {
        if (g) {
          f = new CustomEvent(h, g)
        } else {
          f = new CustomEvent(h)
        }
        i.dispatchEvent(f)
      } else {
        f = document.createEventObject();
        if (g && "detail" in g) {
          f.detail = g.detail
        }
        i.fireEvent("on" + h, f)
      }
      return i
    }
  }, {
    "@marcom/ac-polyfills/CustomEvent": 356
  }],
  79: [function(b, c, a) {
    c.exports = function d(i, g, h, f) {
      if (i.removeEventListener) {
        i.removeEventListener(g, h, !!f)
      } else {
        i.detachEvent("on" + g, h)
      }
      return i
    }
  }, {}],
  80: [function(d, f, c) {
    var b = d("./utils/getBoundingClientRect");
    f.exports = function a(g, i) {
      var h;
      if (i) {
        h = b(g);
        return {
          width: h.width,
          height: h.height
        }
      }
      return {
        width: g.offsetWidth,
        height: g.offsetHeight
      }
    }
  }, {
    "./utils/getBoundingClientRect": 84
  }],
  81: [function(g, h, f) {
    var c = g("./getDimensions");
    var d = g("./utils/getBoundingClientRect");
    var b = g("./getScrollX");
    var a = g("./getScrollY");
    h.exports = function i(j, o) {
      var l;
      var n;
      var m;
      var k;
      if (o) {
        l = d(j);
        n = b();
        m = a();
        return {
          top: l.top + m,
          right: l.right + n,
          bottom: l.bottom + m,
          left: l.left + n
        }
      }
      k = c(j, o);
      l = {
        top: j.offsetTop,
        left: j.offsetLeft,
        width: k.width,
        height: k.height
      };
      while ((j = j.offsetParent)) {
        l.top += j.offsetTop;
        l.left += j.offsetLeft
      }
      return {
        top: l.top,
        right: l.left + l.width,
        bottom: l.top + l.height,
        left: l.left
      }
    }
  }, {
    "./getDimensions": 80,
    "./getScrollX": 82,
    "./getScrollY": 83,
    "./utils/getBoundingClientRect": 84
  }],
  82: [function(c, d, b) {
    d.exports = function a(f) {
      var g;
      f = f || window;
      if (f === window) {
        g = window.pageXOffset;
        if (!g) {
          f = document.documentElement || document.body.parentNode || document.body
        } else {
          return g
        }
      }
      return f.scrollLeft
    }
  }, {}],
  83: [function(c, d, b) {
    d.exports = function a(f) {
      var g;
      f = f || window;
      if (f === window) {
        g = window.pageYOffset;
        if (!g) {
          f = document.documentElement || document.body.parentNode || document.body
        } else {
          return g
        }
      }
      return f.scrollTop
    }
  }, {}],
  84: [function(c, d, b) {
    d.exports = function a(f) {
      var g = f.getBoundingClientRect();
      return {
        top: g.top,
        right: g.right,
        bottom: g.bottom,
        left: g.left,
        width: g.width || g.right - g.left,
        height: g.height || g.bottom - g.top
      }
    }
  }, {}],
  85: [function(b, c, a) {
    c.exports = 8
  }, {}],
  86: [function(b, c, a) {
    c.exports = 11
  }, {}],
  87: [function(b, c, a) {
    c.exports = 9
  }, {}],
  88: [function(b, c, a) {
    c.exports = 10
  }, {}],
  89: [function(b, c, a) {
    c.exports = 1
  }, {}],
  90: [function(b, c, a) {
    c.exports = 3
  }, {}],
  91: [function(b, c, a) {
    c.exports = {
      createDocumentFragment: b("./createDocumentFragment"),
      filterByNodeType: b("./filterByNodeType"),
      hasAttribute: b("./hasAttribute"),
      indexOf: b("./indexOf"),
      insertAfter: b("./insertAfter"),
      insertBefore: b("./insertBefore"),
      insertFirstChild: b("./insertFirstChild"),
      insertLastChild: b("./insertLastChild"),
      isComment: b("./isComment"),
      isDocument: b("./isDocument"),
      isDocumentFragment: b("./isDocumentFragment"),
      isDocumentType: b("./isDocumentType"),
      isElement: b("./isElement"),
      isNode: b("./isNode"),
      isNodeList: b("./isNodeList"),
      isTextNode: b("./isTextNode"),
      remove: b("./remove"),
      replace: b("./replace"),
      COMMENT_NODE: b("./COMMENT_NODE"),
      DOCUMENT_FRAGMENT_NODE: b("./DOCUMENT_FRAGMENT_NODE"),
      DOCUMENT_NODE: b("./DOCUMENT_NODE"),
      DOCUMENT_TYPE_NODE: b("./DOCUMENT_TYPE_NODE"),
      ELEMENT_NODE: b("./ELEMENT_NODE"),
      TEXT_NODE: b("./TEXT_NODE")
    }
  }, {
    "./COMMENT_NODE": 85,
    "./DOCUMENT_FRAGMENT_NODE": 86,
    "./DOCUMENT_NODE": 87,
    "./DOCUMENT_TYPE_NODE": 88,
    "./ELEMENT_NODE": 89,
    "./TEXT_NODE": 90,
    "./createDocumentFragment": 92,
    "./filterByNodeType": 93,
    "./hasAttribute": 94,
    "./indexOf": 95,
    "./insertAfter": 96,
    "./insertBefore": 97,
    "./insertFirstChild": 98,
    "./insertLastChild": 99,
    "./isComment": 102,
    "./isDocument": 103,
    "./isDocumentFragment": 104,
    "./isDocumentType": 105,
    "./isElement": 106,
    "./isNode": 107,
    "./isNodeList": 108,
    "./isTextNode": 109,
    "./remove": 110,
    "./replace": 111
  }],
  92: [function(c, d, b) {
    d.exports = function a(g) {
      var f = document.createDocumentFragment();
      var h;
      if (g) {
        h = document.createElement("div");
        h.innerHTML = g;
        while (h.firstChild) {
          f.appendChild(h.firstChild)
        }
      }
      return f
    }
  }, {}],
  93: [function(d, f, c) {
    d("@marcom/ac-polyfills/Array/prototype.slice");
    d("@marcom/ac-polyfills/Array/prototype.filter");
    var g = d("./internal/isNodeType");
    var a = d("./ELEMENT_NODE");
    f.exports = function b(i, h) {
      h = h || a;
      i = Array.prototype.slice.call(i);
      return i.filter(function(j) {
        return g(j, h)
      })
    }
  }, {
    "./ELEMENT_NODE": 89,
    "./internal/isNodeType": 100,
    "@marcom/ac-polyfills/Array/prototype.filter": 351,
    "@marcom/ac-polyfills/Array/prototype.slice": 355
  }],
  94: [function(c, d, a) {
    d.exports = function b(g, f) {
      if ("hasAttribute" in g) {
        return g.hasAttribute(f)
      }
      return (g.attributes.getNamedItem(f) !== null)
    }
  }, {}],
  95: [function(c, d, b) {
    c("@marcom/ac-polyfills/Array/prototype.indexOf");
    c("@marcom/ac-polyfills/Array/prototype.slice");
    var g = c("./internal/validate");
    var a = c("./filterByNodeType");
    d.exports = function f(k, i) {
      var h = k.parentNode;
      var j;
      if (!h) {
        return 0
      }
      j = h.childNodes;
      if (i !== false) {
        j = a(j, i)
      } else {
        j = Array.prototype.slice.call(j)
      }
      return j.indexOf(k)
    }
  }, {
    "./filterByNodeType": 93,
    "./internal/validate": 101,
    "@marcom/ac-polyfills/Array/prototype.indexOf": 353,
    "@marcom/ac-polyfills/Array/prototype.slice": 355
  }],
  96: [function(b, c, a) {
    var f = b("./internal/validate");
    c.exports = function d(g, h) {
      f.insertNode(g, true, "insertAfter");
      f.childNode(h, true, "insertAfter");
      f.hasParentNode(h, "insertAfter");
      if (!h.nextSibling) {
        return h.parentNode.appendChild(g)
      }
      return h.parentNode.insertBefore(g, h.nextSibling)
    }
  }, {
    "./internal/validate": 101
  }],
  97: [function(c, d, a) {
    var f = c("./internal/validate");
    d.exports = function b(g, h) {
      f.insertNode(g, true, "insertBefore");
      f.childNode(h, true, "insertBefore");
      f.hasParentNode(h, "insertBefore");
      return h.parentNode.insertBefore(g, h)
    }
  }, {
    "./internal/validate": 101
  }],
  98: [function(c, d, b) {
    var f = c("./internal/validate");
    d.exports = function a(g, h) {
      f.insertNode(g, true, "insertFirstChild");
      f.parentNode(h, true, "insertFirstChild");
      if (!h.firstChild) {
        return h.appendChild(g)
      }
      return h.insertBefore(g, h.firstChild)
    }
  }, {
    "./internal/validate": 101
  }],
  99: [function(b, c, a) {
    var d = b("./internal/validate");
    c.exports = function f(g, h) {
      d.insertNode(g, true, "insertLastChild");
      d.parentNode(h, true, "insertLastChild");
      return h.appendChild(g)
    }
  }, {
    "./internal/validate": 101
  }],
  100: [function(b, c, a) {
    var d = b("../isNode");
    c.exports = function f(h, g) {
      if (!d(h)) {
        return false
      }
      if (typeof g === "number") {
        return (h.nodeType === g)
      }
      return (g.indexOf(h.nodeType) !== -1)
    }
  }, {
    "../isNode": 107
  }],
  101: [function(g, d, j) {
    var b = g("./isNodeType");
    var c = g("../COMMENT_NODE");
    var k = g("../DOCUMENT_FRAGMENT_NODE");
    var i = g("../ELEMENT_NODE");
    var h = g("../TEXT_NODE");
    var m = [i, h, c, k];
    var f = " must be an Element, TextNode, Comment, or Document Fragment";
    var p = [i, h, c];
    var l = " must be an Element, TextNode, or Comment";
    var n = [i, k];
    var o = " must be an Element, or Document Fragment";
    var a = " must have a parentNode";
    d.exports = {
      parentNode: function(q, t, s, r) {
        r = r || "target";
        if ((q || t) && !b(q, n)) {
          throw new TypeError(s + ": " + r + o)
        }
      },
      childNode: function(q, t, s, r) {
        r = r || "target";
        if (!q && !t) {
          return
        }
        if (!b(q, p)) {
          throw new TypeError(s + ": " + r + l)
        }
      },
      insertNode: function(q, t, s, r) {
        r = r || "node";
        if (!q && !t) {
          return
        }
        if (!b(q, m)) {
          throw new TypeError(s + ": " + r + f)
        }
      },
      hasParentNode: function(q, s, r) {
        r = r || "target";
        if (!q.parentNode) {
          throw new TypeError(s + ": " + r + a)
        }
      }
    }
  }, {
    "../COMMENT_NODE": 85,
    "../DOCUMENT_FRAGMENT_NODE": 86,
    "../ELEMENT_NODE": 89,
    "../TEXT_NODE": 90,
    "./isNodeType": 100
  }],
  102: [function(c, d, a) {
    var g = c("./internal/isNodeType");
    var f = c("./COMMENT_NODE");
    d.exports = function b(h) {
      return g(h, f)
    }
  }, {
    "./COMMENT_NODE": 85,
    "./internal/isNodeType": 100
  }],
  103: [function(c, d, b) {
    var g = c("./internal/isNodeType");
    var a = c("./DOCUMENT_NODE");
    d.exports = function f(h) {
      return g(h, a)
    }
  }, {
    "./DOCUMENT_NODE": 87,
    "./internal/isNodeType": 100
  }],
  104: [function(c, d, b) {
    var g = c("./internal/isNodeType");
    var a = c("./DOCUMENT_FRAGMENT_NODE");
    d.exports = function f(h) {
      return g(h, a)
    }
  }, {
    "./DOCUMENT_FRAGMENT_NODE": 86,
    "./internal/isNodeType": 100
  }],
  105: [function(b, c, a) {
    var g = b("./internal/isNodeType");
    var f = b("./DOCUMENT_TYPE_NODE");
    c.exports = function d(h) {
      return g(h, f)
    }
  }, {
    "./DOCUMENT_TYPE_NODE": 88,
    "./internal/isNodeType": 100
  }],
  106: [function(c, d, b) {
    var g = c("./internal/isNodeType");
    var a = c("./ELEMENT_NODE");
    d.exports = function f(h) {
      return g(h, a)
    }
  }, {
    "./ELEMENT_NODE": 89,
    "./internal/isNodeType": 100
  }],
  107: [function(b, c, a) {
    c.exports = function d(f) {
      return !!(f && f.nodeType)
    }
  }, {}],
  108: [function(c, d, b) {
    var f = /^\[object (HTMLCollection|NodeList|Object)\]$/;
    d.exports = function a(g) {
      if (!g) {
        return false
      }
      if (typeof g.length !== "number") {
        return false
      }
      if (typeof g[0] === "object" && (!g[0] || !g[0].nodeType)) {
        return false
      }
      return f.test(Object.prototype.toString.call(g))
    }
  }, {}],
  109: [function(c, d, a) {
    var g = c("./internal/isNodeType");
    var b = c("./TEXT_NODE");
    d.exports = function f(h) {
      return g(h, b)
    }
  }, {
    "./TEXT_NODE": 90,
    "./internal/isNodeType": 100
  }],
  110: [function(c, d, b) {
    var f = c("./internal/validate");
    d.exports = function a(g) {
      f.childNode(g, true, "remove");
      if (!g.parentNode) {
        return g
      }
      return g.parentNode.removeChild(g)
    }
  }, {
    "./internal/validate": 101
  }],
  111: [function(b, d, a) {
    var f = b("./internal/validate");
    d.exports = function c(g, h) {
      f.insertNode(g, true, "insertFirstChild", "newNode");
      f.childNode(h, true, "insertFirstChild", "oldNode");
      f.hasParentNode(h, "insertFirstChild", "oldNode");
      return h.parentNode.replaceChild(g, h)
    }
  }, {
    "./internal/validate": 101
  }],
  112: [function(c, d, b) {
    d.exports = function a(i, h) {
      var f = "&";
      var j = "";
      if (i) {
        var g = Object.keys(i);
        var k = g.length - 1;
        g.forEach(function(m, l) {
          var n = i[m];
          m = m.trim();
          n = n && typeof n === "string" ? n.trim() : n;
          n = n === null ? "" : "=" + n;
          var o = m + n + (l === k ? "" : f);
          j = j ? j.concat(o) : o
        })
      }
      return (j && h !== false) ? "?" + j : j
    }
  }, {}],
  113: [function(b, c, a) {
    c.exports = {
      clone: b("./clone"),
      create: b("./create"),
      defaults: b("./defaults"),
      extend: b("./extend"),
      getPrototypeOf: b("./getPrototypeOf"),
      isDate: b("./isDate"),
      isEmpty: b("./isEmpty"),
      isRegExp: b("./isRegExp"),
      toQueryParameters: b("./toQueryParameters")
    }
  }, {
    "./clone": 114,
    "./create": 115,
    "./defaults": 116,
    "./extend": 117,
    "./getPrototypeOf": 118,
    "./isDate": 119,
    "./isEmpty": 120,
    "./isRegExp": 121,
    "./toQueryParameters": 122
  }],
  114: [function(c, d, b) {
    c("@marcom/ac-polyfills/Array/isArray");
    var h = c("./extend");
    var a = Object.prototype.hasOwnProperty;
    var f = function(i, j) {
      var k;
      for (k in j) {
        if (a.call(j, k)) {
          if (j[k] === null) {
            i[k] = null
          } else {
            if (typeof j[k] === "object") {
              i[k] = Array.isArray(j[k]) ? [] : {};
              f(i[k], j[k])
            } else {
              i[k] = j[k]
            }
          }
        }
      }
      return i
    };
    d.exports = function g(j, i) {
      if (i) {
        return f({}, j)
      }
      return h({}, j)
    }
  }, {
    "./extend": 117,
    "@marcom/ac-polyfills/Array/isArray": 350
  }],
  115: [function(b, c, a) {
    arguments[4][50][0].apply(a, arguments)
  }, {
    dup: 50
  }],
  116: [function(b, c, a) {
    arguments[4][51][0].apply(a, arguments)
  }, {
    "./extend": 117,
    dup: 51
  }],
  117: [function(b, c, a) {
    arguments[4][52][0].apply(a, arguments)
  }, {
    "@marcom/ac-polyfills/Array/prototype.forEach": 352,
    dup: 52
  }],
  118: [function(c, d, b) {
    var a = Object.prototype.hasOwnProperty;
    d.exports = function f(i) {
      if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(i)
      } else {
        if (typeof i !== "object") {
          throw new Error("Requested prototype of a value that is not an object.")
        } else {
          if (typeof this.__proto__ === "object") {
            return i.__proto__
          } else {
            var g = i.constructor;
            var h;
            if (a.call(i, "constructor")) {
              h = g;
              if (!(delete i.constructor)) {
                return null
              }
              g = i.constructor;
              i.constructor = h
            }
            return g ? g.prototype : null
          }
        }
      }
    }
  }, {}],
  119: [function(b, d, a) {
    d.exports = function c(f) {
      return Object.prototype.toString.call(f) === "[object Date]"
    }
  }, {}],
  120: [function(c, d, b) {
    var a = Object.prototype.hasOwnProperty;
    d.exports = function f(g) {
      var h;
      if (typeof g !== "object") {
        throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
      }
      for (h in g) {
        if (a.call(g, h)) {
          return false
        }
      }
      return true
    }
  }, {}],
  121: [function(c, d, b) {
    d.exports = function a(f) {
      return window.RegExp ? f instanceof RegExp : false
    }
  }, {}],
  122: [function(c, f, b) {
    var a = c("@marcom/ac-url/joinSearchParams");
    f.exports = function d(g) {
      if (typeof g !== "object") {
        throw new TypeError("toQueryParameters error: argument is not an object")
      }
      return a(g, false)
    }
  }, {
    "@marcom/ac-url/joinSearchParams": 112
  }],
  123: [function(b, c, a) {
    var d = b("./ac-element-tracker/ElementTracker");
    c.exports = new d();
    c.exports.ElementTracker = d
  }, {
    "./ac-element-tracker/ElementTracker": 124
  }],
  124: [function(d, c, h) {
    d("@marcom/ac-polyfills/Function/prototype.bind");
    var m = d("@marcom/ac-array");
    var l = d("@marcom/ac-dom-nodes");
    var a = {
      getDimensions: d("@marcom/ac-dom-metrics/getDimensions"),
      getPagePosition: d("@marcom/ac-dom-metrics/getPagePosition"),
      getScrollY: d("@marcom/ac-dom-metrics/getScrollY")
    };
    var k = d("@marcom/ac-dom-events");
    var g = d("@marcom/ac-object");
    var j = d("./TrackedElement");
    var f = {
      autoStart: false,
      useRenderedPosition: false
    };

    function b(o, n) {
      this.options = g.clone(f);
      this.options = typeof n === "object" ? g.extend(this.options, n) : this.options;
      this._scrollY = this._getScrollY();
      this._windowHeight = this._getWindowHeight();
      this.tracking = false;
      this.elements = [];
      if (o && (Array.isArray(o) || l.isNodeList(o) || l.isElement(o))) {
        this.addElements(o)
      }
      this.refreshAllElementStates = this.refreshAllElementStates.bind(this);
      this.refreshAllElementMetrics = this.refreshAllElementMetrics.bind(this);
      if (this.options.autoStart) {
        this.start()
      }
    }
    var i = b.prototype;
    i.destroy = function() {
      var o, n;
      this.stop();
      for (o = 0, n = this.elements.length; o < n; o++) {
        this.elements[o].destroy()
      }
      this.elements = null;
      this.options = null
    };
    i._registerElements = function(n) {
      n = [].concat(n);
      n.forEach(function(p) {
        if (this._elementInDOM(p)) {
          var o = new j(p, this.options.useRenderedPosition);
          o.offsetTop = o.element.offsetTop;
          this.elements.push(o)
        }
      }, this)
    };
    i._registerTrackedElements = function(n) {
      var o = [].concat(n);
      o.forEach(function(p) {
        if (this._elementInDOM(p.element)) {
          p.offsetTop = p.element.offsetTop;
          this.elements.push(p)
        }
      }, this)
    };
    i._elementInDOM = function(p) {
      var o = false;
      var n = document.getElementsByTagName("body")[0];
      if (l.isElement(p) && n.contains(p)) {
        o = true
      }
      return o
    };
    i._elementPercentInView = function(n) {
      return n.pixelsInView / n.height
    };
    i._elementPixelsInView = function(o) {
      var n = o.top - this._scrollY;
      var p = o.bottom - this._scrollY;
      if (n > this._windowHeight || p < 0) {
        return 0
      }
      return Math.min(p, this._windowHeight) - Math.max(n, 0)
    };
    i._ifInView = function(n, o) {
      if (!o) {
        n.trigger("enterview", n)
      }
    };
    i._ifAlreadyInView = function(n) {
      if (!n.inView) {
        n.trigger("exitview", n)
      }
    };
    i.addElements = function(q, p) {
      if (typeof p === "undefined") {
        p = this.options.useRenderedPosition
      }
      q = l.isNodeList(q) ? m.toArray(q) : [].concat(q);
      for (var o = 0, n = q.length; o < n; o++) {
        this.addElement(q[o], p)
      }
    };
    i.addElement = function(o, p) {
      var n = null;
      if (typeof p === "undefined") {
        p = this.options.useRenderedPosition
      }
      if (l.isElement(o)) {
        n = new j(o, p);
        this._registerTrackedElements(n);
        this.refreshElementMetrics(n);
        this.refreshElementState(n)
      } else {
        throw new TypeError("ElementTracker: " + o + " is not a valid DOM element")
      }
      return n
    };
    i.removeElement = function(p) {
      var o = [];
      var n;
      this.elements.forEach(function(r, q) {
        if (r === p || r.element === p) {
          o.push(q)
        }
      });
      n = this.elements.filter(function(r, q) {
        return o.indexOf(q) < 0
      });
      this.elements = n
    };
    i.start = function() {
      if (this.tracking === false) {
        this.tracking = true;
        k.addEventListener(window, "resize", this.refreshAllElementMetrics);
        k.addEventListener(window, "orientationchange", this.refreshAllElementMetrics);
        k.addEventListener(window, "scroll", this.refreshAllElementStates);
        this.refreshAllElementMetrics()
      }
    };
    i.stop = function() {
      if (this.tracking === true) {
        this.tracking = false;
        k.removeEventListener(window, "resize", this.refreshAllElementMetrics);
        k.removeEventListener(window, "orientationchange", this.refreshAllElementMetrics);
        k.removeEventListener(window, "scroll", this.refreshAllElementStates)
      }
    };
    i.refreshAllElementMetrics = function(n, o) {
      if (typeof n !== "number") {
        n = this._getScrollY()
      }
      if (typeof o !== "number") {
        o = this._getWindowHeight()
      }
      this._scrollY = n;
      this._windowHeight = o;
      this.elements.forEach(this.refreshElementMetrics, this)
    };
    i.refreshElementMetrics = function(o) {
      var p = a.getDimensions(o.element, o.useRenderedPosition);
      var n = a.getPagePosition(o.element, o.useRenderedPosition);
      o = g.extend(o, p, n);
      return this.refreshElementState(o)
    };
    i.refreshAllElementStates = function(n) {
      if (typeof n !== "number") {
        n = this._getScrollY()
      }
      this._scrollY = n;
      this.elements.forEach(this.refreshElementState, this)
    };
    i.refreshElementState = function(n) {
      var o = n.inView;
      n.pixelsInView = this._elementPixelsInView(n);
      n.percentInView = this._elementPercentInView(n);
      n.inView = n.pixelsInView > 0;
      if (n.inView) {
        this._ifInView(n, o)
      }
      if (o) {
        this._ifAlreadyInView(n)
      }
      return n
    };
    i._getWindowHeight = function() {
      return document.documentElement.clientHeight || window.innerHeight
    };
    i._getScrollY = function() {
      return a.getScrollY()
    };
    c.exports = b
  }, {
    "./TrackedElement": 125,
    "@marcom/ac-array": 55,
    "@marcom/ac-dom-events": 65,
    "@marcom/ac-dom-metrics/getDimensions": 80,
    "@marcom/ac-dom-metrics/getPagePosition": 81,
    "@marcom/ac-dom-metrics/getScrollY": 83,
    "@marcom/ac-dom-nodes": 91,
    "@marcom/ac-object": 113,
    "@marcom/ac-polyfills/Function/prototype.bind": 358
  }],
  125: [function(b, a, c) {
    var d = b("@marcom/ac-object").create;
    var h = b("@marcom/ac-dom-nodes");
    var i = b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var j = i.prototype;

    function g(k, l) {
      if (!h.isElement(k)) {
        throw new TypeError("TrackedElement: " + k + " is not a valid DOM element")
      }
      i.call(this);
      this.element = k;
      this.inView = false;
      this.percentInView = 0;
      this.pixelsInView = 0;
      this.offsetTop = 0;
      this.top = 0;
      this.right = 0;
      this.bottom = 0;
      this.left = 0;
      this.width = 0;
      this.height = 0;
      this.useRenderedPosition = l || false
    }
    var f = g.prototype = d(j);
    f.destroy = function() {
      this.element = null;
      j.destroy.call(this)
    };
    a.exports = g
  }, {
    "@marcom/ac-dom-nodes": 91,
    "@marcom/ac-event-emitter-micro": 126,
    "@marcom/ac-object": 113
  }],
  126: [function(b, c, a) {
    c.exports = {
      EventEmitterMicro: b("./ac-event-emitter-micro/EventEmitterMicro")
    }
  }, {
    "./ac-event-emitter-micro/EventEmitterMicro": 127
  }],
  127: [function(b, c, a) {
    function f() {
      this._events = {}
    }
    var d = f.prototype;
    d.on = function(g, h) {
      this._events[g] = this._events[g] || [];
      this._events[g].unshift(h)
    };
    d.once = function(g, j) {
      var i = this;

      function h(k) {
        i.off(g, h);
        if (k !== undefined) {
          j(k)
        } else {
          j()
        }
      }
      this.on(g, h)
    };
    d.off = function(g, i) {
      if (!this.has(g)) {
        return
      }
      if (arguments.length === 1) {
        this._events[g] = null;
        delete this._events[g];
        return
      }
      var h = this._events[g].indexOf(i);
      if (h === -1) {
        return
      }
      this._events[g].splice(h, 1)
    };
    d.trigger = function(g, j) {
      if (!this.has(g)) {
        return
      }
      for (var h = this._events[g].length - 1; h >= 0; h--) {
        if (j !== undefined) {
          this._events[g][h](j)
        } else {
          this._events[g][h]()
        }
      }
    };
    d.has = function(g) {
      if (g in this._events === false || this._events[g].length === 0) {
        return false
      }
      return true
    };
    d.destroy = function() {
      for (var g in this._events) {
        this._events[g] = null
      }
      this._events = null
    };
    c.exports = f
  }, {}],
  128: [function(b, c, a) {
    c.exports = {
      SharedInstance: b("./ac-shared-instance/SharedInstance")
    }
  }, {
    "./ac-shared-instance/SharedInstance": 129
  }],
  129: [function(d, h, c) {
    var i = window,
      g = "AC",
      a = "SharedInstance",
      f = i[g];
    var b = (function() {
      var j = {};
      return {
        get: function(l, k) {
          var m = null;
          if (j[l] && j[l][k]) {
            m = j[l][k]
          }
          return m
        },
        set: function(m, k, l) {
          if (!j[m]) {
            j[m] = {}
          }
          if (typeof l === "function") {
            j[m][k] = new l()
          } else {
            j[m][k] = l
          }
          return j[m][k]
        },
        share: function(m, k, l) {
          var n = this.get(m, k);
          if (!n) {
            n = this.set(m, k, l)
          }
          return n
        },
        remove: function(l, k) {
          var m = typeof k;
          if (m === "string" || m === "number") {
            if (!j[l] || !j[l][k]) {
              return
            }
            j[l][k] = null;
            return
          }
          if (j[l]) {
            j[l] = null
          }
        }
      }
    }());
    if (!f) {
      f = i[g] = {}
    }
    if (!f[a]) {
      f[a] = b
    }
    h.exports = f[a]
  }, {}],
  130: [function(c, f, b) {
    var a = c("@marcom/ac-shared-instance").SharedInstance;
    var g = "ac-raf-emitter-id-generator:sharedRAFEmitterIDGeneratorInstance",
      d = "1.0.3";
    var h = function() {
      this._currentID = 0
    };
    h.prototype.getNewID = function() {
      this._currentID++;
      return "raf:" + this._currentID
    };
    f.exports = a.share(g, d, h)
  }, {
    "@marcom/ac-shared-instance": 128
  }],
  131: [function(c, d, a) {
    if (!Date.now) {
      Date.now = function b() {
        return new Date().getTime()
      }
    }
  }, {}],
  132: [function(b, c, a) {
    /*! MIT License
     *
     * performance.now polyfill
     * copyright Paul Irish 2015
     *
     */
    ;
    b("../Date/now");
    (function() {
      if ("performance" in window == false) {
        window.performance = {}
      }
      if ("now" in window.performance == false) {
        var f = Date.now();
        if (performance.timing && performance.timing.navigationStart) {
          f = performance.timing.navigationStart
        }
        window.performance.now = function d() {
          return Date.now() - f
        }
      }
    })()
  }, {
    "../Date/now": 131
  }],
  133: [function(b, c, a) {
    arguments[4][128][0].apply(a, arguments)
  }, {
    "./ac-shared-instance/SharedInstance": 134,
    dup: 128
  }],
  134: [function(b, c, a) {
    arguments[4][129][0].apply(a, arguments)
  }, {
    dup: 129
  }],
  135: [function(b, d, a) {
    b("@marcom/ac-polyfills/performance/now");
    var f;

    function c(g) {
      g = g || {};
      this._reset();
      this._willRun = false;
      this._boundOnAnimationFrame = this._onAnimationFrame.bind(this);
      this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
    }
    f = c.prototype;
    f.subscribe = function(g) {
      if (this._nextFrameSubscribers[g.id]) {
        return false
      }
      this._nextFrameSubscribers[g.id] = g;
      this._nextFrameSubscriberCount++;
      this._run();
      return true
    };
    f.unsubscribe = function(g) {
      if (!this._nextFrameSubscribers[g.id]) {
        return false
      }
      this._nextFrameSubscribers[g.id] = null;
      this._nextFrameSubscriberCount--;
      if (this._nextFrameSubscriberCount === 0) {
        this._cancel()
      }
      return true
    };
    f.trigger = function(j, h) {
      var g;
      for (g in this._subscribers) {
        if (this._subscribers.hasOwnProperty(g) && this._subscribers[g] !== null && this._subscribers[g]._didDestroy === false) {
          this._subscribers[g].trigger(j, h)
        }
      }
    };
    f.destroy = function() {
      var g = this._cancel();
      this._subscribers = null;
      this._nextFrameSubscribers = null;
      this._rafData = null;
      this._boundOnAnimationFrame = null;
      this._onExternalAnimationFrame = null;
      return g
    };
    f.useExternalAnimationFrame = function(g) {
      if (typeof g !== "boolean") {
        return
      }
      var h = this._isUsingExternalAnimationFrame;
      if (g && this._animationFrame) {
        cancelAnimationFrame(this._animationFrame);
        this._animationFrame = null
      }
      if (this._willRun && !g && !this._animationFrame) {
        this._animationFrame = window.requestAnimationFrame(this._boundOnAnimationFrame)
      }
      this._isUsingExternalAnimationFrame = g;
      if (g) {
        return this._boundOnExternalAnimationFrame
      }
      return h || false
    };
    f._run = function() {
      if (!this._willRun) {
        this._willRun = true;
        if (this.lastFrameTime === 0) {
          this.lastFrameTime = performance.now()
        }
        this._animationFrameActive = true;
        if (!this._isUsingExternalAnimationFrame) {
          this._animationFrame = requestAnimationFrame(this._boundOnAnimationFrame)
        }
        return true
      }
    };
    f._cancel = function() {
      var g = false;
      if (this._animationFrameActive) {
        if (this._animationFrame) {
          cancelAnimationFrame(this._animationFrame);
          this._animationFrame = null
        }
        this._animationFrameActive = false;
        this._willRun = false;
        g = true
      }
      if (!this._isRunning) {
        this._reset()
      }
      return g
    };
    f._onSubscribersAnimationFrameStart = function(h) {
      var g;
      for (g in this._subscribers) {
        if (this._subscribers.hasOwnProperty(g) && this._subscribers[g] !== null && this._subscribers[g]._didDestroy === false) {
          this._subscribers[g]._onAnimationFrameStart(h)
        }
      }
    };
    f._onSubscribersAnimationFrameEnd = function(h) {
      var g;
      for (g in this._subscribers) {
        if (this._subscribers.hasOwnProperty(g) && this._subscribers[g] !== null && this._subscribers[g]._didDestroy === false) {
          this._subscribers[g]._onAnimationFrameEnd(h)
        }
      }
    };
    f._onAnimationFrame = function(g) {
      this._subscribers = this._nextFrameSubscribers;
      this._nextFrameSubscribers = {};
      this._nextFrameSubscriberCount = 0;
      this._isRunning = true;
      this._willRun = false;
      this._didRequestNextRAF = false;
      this._rafData.delta = g - this.lastFrameTime;
      this.lastFrameTime = g;
      this._rafData.fps = 0;
      if (this._rafData.delta >= 1000) {
        this._rafData.delta = 0
      }
      if (this._rafData.delta !== 0) {
        this._rafData.fps = 1000 / this._rafData.delta
      }
      this._rafData.time = g;
      this._rafData.naturalFps = this._rafData.fps;
      this._rafData.timeNow = Date.now();
      this._onSubscribersAnimationFrameStart(this._rafData);
      this.trigger("update", this._rafData);
      this.trigger("draw", this._rafData);
      this._onSubscribersAnimationFrameEnd(this._rafData);
      if (!this._willRun) {
        this._reset()
      }
    };
    f._onExternalAnimationFrame = function(g) {
      if (!this._isUsingExternalAnimationFrame) {
        return
      }
      this._onAnimationFrame(g)
    };
    f._reset = function() {
      this._rafData = {
        time: 0,
        delta: 0,
        fps: 0,
        naturalFps: 0,
        timeNow: 0
      };
      this._subscribers = {};
      this._nextFrameSubscribers = {};
      this._nextFrameSubscriberCount = 0;
      this._didEmitFrameData = false;
      this._animationFrame = null;
      this._animationFrameActive = false;
      this._isRunning = false;
      this._shouldReset = false;
      this.lastFrameTime = 0
    };
    d.exports = c
  }, {
    "@marcom/ac-polyfills/performance/now": 132
  }],
  136: [function(c, g, b) {
    var a = c("@marcom/ac-shared-instance").SharedInstance;
    var h = "ac-raf-executor:sharedRAFExecutorInstance",
      f = "1.0.3";
    var d = c("./RAFExecutor");
    g.exports = a.share(h, f, d)
  }, {
    "./RAFExecutor": 135,
    "@marcom/ac-shared-instance": 133
  }],
  137: [function(f, g, d) {
    var i;
    var h = f("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var c = f("@marcom/ac-raf-executor/sharedRAFExecutorInstance");
    var b = f("@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance");

    function a(j) {
      j = j || {};
      h.call(this);
      this.id = b.getNewID();
      this.executor = j.executor || c;
      this._reset();
      this._willRun = false;
      this._didDestroy = false
    }
    i = a.prototype = Object.create(h.prototype);
    i.run = function() {
      if (!this._willRun) {
        this._willRun = true;
        this.executor.subscribe(this);
        return true
      }
      return false
    };
    i.cancel = function() {
      var j = false;
      if (this._willRun) {
        this.executor.unsubscribe(this);
        this._willRun = false;
        j = true
      }
      this._reset();
      return j
    };
    i.destroy = function() {
      var j = this.cancel();
      this.executor.unsubscribe(this);
      this.executor = null;
      h.prototype.destroy.call(this);
      this._didDestroy = true;
      return j
    };
    i.willRun = function() {
      return this._willRun
    };
    i.isRunning = function() {
      return this._isRunning
    };
    i._onAnimationFrameStart = function(j) {
      this._isRunning = true;
      this._willRun = false;
      if (!this._didEmitFrameData) {
        this._didEmitFrameData = true;
        this.trigger("start", j)
      }
    };
    i._onAnimationFrameEnd = function(j) {
      if (!this._willRun) {
        this.trigger("stop", j);
        this._reset()
      }
    };
    i._reset = function() {
      this._didEmitFrameData = false;
      this._isRunning = false
    };
    g.exports = a
  }, {
    "@marcom/ac-event-emitter-micro": 126,
    "@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance": 130,
    "@marcom/ac-raf-executor/sharedRAFExecutorInstance": 136
  }],
  138: [function(d, f, c) {
    d("@marcom/ac-polyfills/Object/create");
    var a = d("@marcom/ac-raf-emitter/RAFEmitter");
    var h = d("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var i = h.prototype;

    function b(n, p, j, m, k, o, l) {
      if (arguments.length !== 7) {
        throw new Error("Incorrect number of arguments passed to BaseComponent check the constructor or BaseComponent.call method - argument's should be (section, componentElement, componentName, currentBreakpoint, scrollPosition, windowHeight, index)")
      }
      h.call(this);
      this.section = n;
      this.element = p;
      this.componentName = j;
      this.index = l;
      this.isEnabled = true
    }
    var g = b.prototype = Object.create(h.prototype);
    b.prototype.constructor = b;
    g.destroy = function() {
      this.teardownEvents();
      this.teardownRAFEmitter();
      this.section = null;
      i.destroy.call(this)
    };
    g.setupEvents = function() {};
    g.teardownEvents = function() {};
    g.setupRAFEmitter = function() {
      if (this._rafEmitter) {
        return
      }
      this._rafEmitter = new a();
      this.onDOMRead = this.onDOMRead.bind(this);
      this.onDOMWrite = this.onDOMWrite.bind(this);
      this._rafEmitter.on("update", this.onDOMRead);
      this._rafEmitter.on("draw", this.onDOMWrite)
    };
    g.teardownRAFEmitter = function() {
      if (!this._rafEmitter) {
        return
      }
      this._rafEmitter.destroy();
      this._rafEmitter = null
    };
    g.onSectionWillAppearWithPadding = function(j, k) {};
    g.onSectionWillAppear = function(j, k) {};
    g.activate = function() {};
    g.animateIn = function() {};
    g.requestDOMChange = function() {
      if (!this.isEnabled || !this.section.isVisible) {
        return false
      }
      if (!this._rafEmitter) {
        this.setupRAFEmitter()
      }
      return this._rafEmitter.run()
    };
    g.onDOMRead = function(j) {};
    g.onDOMWrite = function(j) {};
    g.deactivate = function() {};
    g.onScroll = function(k, j, l) {};
    g.onSectionWillDisappearWithPadding = function(j, k) {};
    g.onSectionWillDisappear = function(j, k) {};
    g.onResizeDebounced = function(k, j, l) {};
    g.onResizeImmediate = function(k, j, l) {};
    g.onOrientationChange = function(l, k, j, m) {};
    g.onBreakpoint = function(k, m, j, l) {};
    g.onRetinaChange = function(m, k, j, l) {};
    f.exports = b
  }, {
    "@marcom/ac-event-emitter-micro": 126,
    "@marcom/ac-polyfills/Object/create": 360,
    "@marcom/ac-raf-emitter/RAFEmitter": 137
  }],
  139: [function(f, c, i) {
    f("@marcom/ac-polyfills/console.log");
    var b = f("@marcom/ac-element-tracker").ElementTracker;
    var l = f("@marcom/ac-viewport-emitter");
    if (!l.viewport) {
      console.log("Jetpack Error: Required module `ac-viewport-emitter` not initialized properly (missing required css styles). Please see `ac-viewport-emitter` documentation.\n\tBreakpoint will always be 'large' and no `onBreakPoint` events will be fired");
      l = f("../utils/ViewportEmitterStub")()
    }
    var k = f("../utils/Page");
    var a = f("../model/SectionMap");
    var h = f("../model/DataAttributes");
    var d = f("../model/EnabledFeatures");

    function g(m) {
      d.init();
      k.setPage(this);
      this.name = this.name || "[NOT SET]";
      this._mainEl = document.querySelector("main,.main");
      this._sections = [];
      this._visibleSections = [];
      this._visibleSectionsWithPadding = [];
      this._elementTracker = new b(null, {
        autoStart: true
      });
      this._currentSection = null;
      this._sectionUnderLocalNav = null;
      this._currentBreakpoint = l.viewport;
      this.isRetina = l.retina;
      this._cachedScrollY = this._getScrollY(true);
      this._cachedWindowHeight = this.getWindowHeight(true);
      this._resizeTimeout = -1;
      this._resizeTimeoutDelay = this._resizeTimeoutDelay || 250;
      this.setupSections();
      this.setupEvents();
      this._updateSectionVisibility()
    }
    var j = g.prototype;
    j.destroy = function() {
      for (var n = 0, m = this._sections.length; n < m; n++) {
        this._sections[n].destroy()
      }
      this.teardownEvents();
      this._elementTracker.destroy();
      this._elementTracker = null;
      this._sections = null;
      this._currentSection = null;
      this._sectionUnderLocalNav = null;
      this._visibleSections = null;
      this._mainEl = null;
      k.removePage(this)
    };
    j.setupEvents = function() {
      this._onScroll = this._onScroll.bind(this);
      this._onBreakpoint = this._onBreakpoint.bind(this);
      this._onRetinaChange = this._onRetinaChange.bind(this);
      this._onPageDidAppear = this._onPageDidAppear.bind(this);
      this._onResizeImmediate = this._onResizeImmediate.bind(this);
      this._onOrientationChange = this._onOrientationChange.bind(this);
      this._onPageWillDisappear = this._onPageWillDisappear.bind(this);
      this.performDeepMetricsRefresh = this.performDeepMetricsRefresh.bind(this);
      window.addEventListener("scroll", this._onScroll);
      window.addEventListener("resize", this._onResizeImmediate);
      window.addEventListener("orientationchange", this._onOrientationChange);
      l.on("change", this._onBreakpoint);
      l.on("retinachange", this._onRetinaChange);
      k.on(k.DEEP_REFRESH_ALL_METRICS, this.performDeepMetricsRefresh)
    };
    j.teardownEvents = function() {
      window.removeEventListener("scroll", this._onScroll);
      window.removeEventListener("resize", this._onResizeImmediate);
      window.removeEventListener("orientationchange", this._onOrientationChange);
      l.off("change", this._onBreakpoint);
      l.off("retinachange", this._onRetinaChange);
      k.off(k.DEEP_REFRESH_ALL_METRICS, this.performDeepMetricsRefresh);
      this._elementTracker.stop();
      clearTimeout(this._resizeTimeout)
    };
    j.setupSections = function() {
      var n = this._mainEl.querySelectorAll("section,.section,[data-section-type]");
      for (var p = 0, m = n.length; p < m; p++) {
        if (n[p].parentElement !== this._mainEl) {
          console.warn("BasePage::addSection - Jetpack does not support nested BaseSections, consider using a component instead.", n[p]);
          continue
        }
        var o = n[p];
        this._addSectionImp(o)
      }
    };
    j.addSection = function(m) {
      var n = this.getBaseSectionForElement(m);
      if (n) {
        return n
      }
      n = this._addSectionImp(m);
      this._updateSectionVisibility();
      return n
    };
    j.removeSection = function(m) {
      var o = (m instanceof a.BaseSection);
      var n = o ? m : this.getBaseSectionForElement(m);
      if (n) {
        this._sections.splice(this._sections.indexOf(n), 1)
      }
      this._updateSectionVisibility();
      return n
    };
    j._addSectionImp = function(o) {
      if (o.parentNode !== this._mainEl && this._isNestedSection(o)) {
        console.warn("BasePage::addSection - Jetpack does not support nested BaseSections, consider using a component instead.", o);
        return null
      }
      var n = this._elementTracker.addElement(o);
      this._elementTracker.refreshElementState(n);
      var p = (o.hasAttribute(h.SECTION_TYPE)) ? o.getAttribute(h.SECTION_TYPE) : "BaseSection";
      if (p === "") {
        p = "BaseSection"
      }
      if (!a.hasOwnProperty(p)) {
        throw "BasePage::setupSections parsing '#" + o.id + " ." + o.className + "' no section type '" + p + "'found!"
      }
      var m = a[p];
      var q = new m(o, n, this._getCurrentBreakpoint(), this._getScrollY(), this.getWindowHeight(), this._sections.length);
      q.setupEvents();
      this._sections.push(q);
      return q
    };
    j.getWindowHeight = function(m) {
      if (m) {
        this._cachedWindowHeight = document.documentElement.clientHeight || window.innerHeight
      }
      return this._cachedWindowHeight
    };
    j._activateSection = function(m) {
      if (this._currentSection === m) {
        return
      }
      if (this._currentSection) {
        this._currentSection.deactivate()
      }
      this._currentSection = m;
      this._currentSection.activate()
    };
    j._updateSectionVisibility = function() {
      var A = this._getScrollY();
      var m = this.getWindowHeight();
      var q = k.getViewportPadding();
      var r = [];
      var t = this._sections[0];
      var p = [];
      var y = 0;
      var w = [];
      var C = A - q;
      var o = A + m + q;
      for (var s = 0, v = this._sections.length; s < v; s++) {
        var B = this._sections[s];
        var z = B.trackedElement;
        var x = z.pixelsInView;
        if (B.isFixedHero) {
          x = m - A
        }
        if (x > y) {
          t = B;
          y = x
        }
        if (x > 0.000001) {
          r.push(B);
          p.push(B);
          w.push(B)
        } else {
          if (o > z.top && C < z.bottom) {
            r.push(B);
            w.push(B)
          }
        }
      }
      var n = {};
      var u = {};
      for (s = 0, v = Math.max(this._visibleSections.length, r.length); s < v; s++) {
        if (this._visibleSectionsWithPadding[s]) {
          if (typeof n[s] === "undefined") {
            n[s] = w.indexOf(this._visibleSectionsWithPadding[s]) === -1
          }
          if (n[s]) {
            this._visibleSectionsWithPadding[s].onSectionWillDisappearWithPadding(A, m)
          }
        }
        if (this._visibleSections[s] && p.indexOf(this._visibleSections[s]) === -1) {
          this._visibleSections[s].onSectionWillDisappear(A, m)
        }
        if (w[s]) {
          if (typeof u[s] === "undefined") {
            u[s] = this._visibleSectionsWithPadding.indexOf(w[s]) === -1
          }
          if (u[s]) {
            w[s].onSectionWillAppearWithPadding(A, m)
          }
        }
        if (p[s] && this._visibleSections.indexOf(p[s]) === -1) {
          p[s].onSectionWillAppear(A, m)
        }
      }
      this._visibleSections = p;
      this._visibleSectionsWithPadding = w;
      this._activateSection(t)
    };
    j._onPageDidAppear = function(m) {};
    j._onPageWillDisappear = function(m) {
      this.destroy()
    };
    j._onBreakpoint = function(r) {
      var n = r.to;
      var p = r.from;
      this._currentBreakpoint = n;
      var o = this._getScrollY();
      var s = this.getWindowHeight();
      this._elementTracker.refreshAllElementMetrics(o, s);
      for (var q = 0, m = this._sections.length; q < m; q++) {
        this._sections[q].onBreakpoint(n, p, o, s)
      }
      this.performDeepMetricsRefresh()
    };
    j._onRetinaChange = function(q) {
      var n = this._getScrollY(true);
      var r = this.getWindowHeight(true);
      this.isRetina = l.retina;
      var p = this._currentBreakpoint;
      this._elementTracker.refreshAllElementMetrics(n, r);
      for (var o = 0, m = this._sections.length; o < m; o++) {
        this._sections[o].onRetinaChange(this.isRetina, p, n, r)
      }
    };
    j._onScroll = function(p) {
      var n = this._getScrollY(true);
      var q = this.getWindowHeight();
      this._updateSectionVisibility();
      for (var o = 0, m = this._visibleSections.length; o < m; o++) {
        this._visibleSections[o].onScroll(p, n, q)
      }
    };
    j._onResizeDebounced = function(q) {
      var n = this._getScrollY();
      var r = this.getWindowHeight();
      var p = false;
      for (var o = 0, m = this._sections.length; o < m; o++) {
        if (!p && this._sections[o]["onResize"]) {
          console.warn("Jetpack: onResize has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
          p = true
        }
        this._sections[o].onResizeDebounced(q, n, r)
      }
      this._updateSectionVisibility()
    };
    j.performDeepMetricsRefresh = function() {
      var n = this._getScrollY();
      var p = this.getWindowHeight();
      this._elementTracker.refreshAllElementMetrics(n, p);
      for (var o = 0, m = this._sections.length; o < m; o++) {
        this._sections[o].elementEngagement.refreshAllElementMetrics(n, p);
        this._sections[o].updateScrollToPosition()
      }
      this._updateSectionVisibility()
    };
    j._onOrientationChange = function(q) {
      var o = this._getScrollY(true);
      var r = this.getWindowHeight(true);
      var n = q.orientation;
      for (var p = 0, m = this._sections.length; p < m; p++) {
        this._sections[p].onOrientationChange(q, n, o, r)
      }
    };
    j._onResizeImmediate = function(q) {
      var n = this._getScrollY();
      var r = this.getWindowHeight(true);
      var p = false;
      for (var o = 0, m = this._sections.length; o < m; o++) {
        if (!p && this._sections[o]["onResizeWillBeCalledAfterDelay"]) {
          console.warn("Jetpack: onResizeWillBeCalledAfterDelay has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
          p = true
        }
        this._sections[o].onResizeImmediate(q, n, r)
      }
      window.clearTimeout(this._resizeTimeout);
      this._resizeTimeout = window.setTimeout(this._onResizeDebounced.bind(this, q), this._resizeTimeoutDelay)
    };
    j._getScrollY = function(m) {
      if (m) {
        this._cachedScrollY = window.pageYOffset || (document.documentElement || document.body).scrollTop
      }
      return this._cachedScrollY
    };
    j._getVisibleBottomOfPage = function() {
      return this._getScrollY() + this.getWindowHeight()
    };
    j._getCurrentBreakpoint = function() {
      return this._currentBreakpoint
    };
    j._isNestedSection = function(o) {
      var p = o;
      var m = this._sections.length;
      while (p = p.parentElement) {
        for (var n = 0; n < m; n++) {
          if (this._sections[n].element === p) {
            return true
          }
        }
      }
      return false
    };
    j.getBaseSectionForElement = function(o) {
      for (var n = 0, m = this._sections.length; n < m; n++) {
        if (this._sections[n].element === o) {
          return this._sections[n]
        }
      }
      return null
    };
    c.exports = g
  }, {
    "../model/DataAttributes": 142,
    "../model/EnabledFeatures": 143,
    "../model/SectionMap": 144,
    "../utils/Page": 145,
    "../utils/ViewportEmitterStub": 146,
    "@marcom/ac-element-tracker": 123,
    "@marcom/ac-polyfills/console.log": 363,
    "@marcom/ac-viewport-emitter": 408
  }],
  140: [function(c, b, g) {
    c("@marcom/ac-polyfills/Object/create");
    c("@marcom/ac-polyfills/console.log");
    var k = {
      getPagePosition: c("@marcom/ac-dom-metrics/getPagePosition")
    };
    var a = c("@marcom/ac-element-engagement").ElementEngagement;
    var f = c("./../model/DataAttributes");
    var h = c("./../model/ComponentMap");
    var d = c("./BaseComponent");
    var l = c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var m = l.prototype;

    function j(r, q, p, n, s, o) {
      if (arguments.length !== 6) {
        throw new Error("Incorrect number of arguments passed to BaseSection")
      }
      l.call(this);
      this.element = r;
      this.trackedElement = q;
      this.elementEngagement = new a(null, {
        autoStart: false
      });
      this.index = o;
      this.isVisible = this.trackedElement.pixelsInView > 0;
      this.isVisibleWithPadding = false;
      this.hasAnimatedIn = false;
      this.isActive = false;
      this.isFixedHero = false;
      this.cachedBreakpoint = p;
      this.cachedScrollPosition = n;
      this.cachedWindowHeight = s;
      this.name = this.name || this.element.className;
      this.scrollToPosition = 0;
      this.updateScrollToPosition();
      this._components = [];
      this.setupComponents(p, n, s);
      this.setIsFixedHero();
      this.performDeprecatedMethodCheck()
    }
    var i = j.prototype = Object.create(l.prototype);
    j.prototype.constructor = j;
    i.performDeprecatedMethodCheck = function() {
      if (this["onViewWillAppear"]) {
        throw new Error("Section.onViewWillAppear is now `onSectionWillAppear`, please update your BaseSection subclass")
      }
      if (this["onViewWillDisappear"]) {
        throw new Error("Section.onViewWillDisappear is now `onSectionWillDisappear`, please update your BaseSection subclass")
      }
      return true
    };
    i.destroy = function() {
      this.teardownEvents();
      this.elementEngagement.stop();
      this.elementEngagement = null;
      for (var o = 0, n = this._components.length; o < n; o++) {
        this._components[o].destroy()
      }
      this._components = null;
      this.trackedElement = null;
      this.element = null;
      m.destroy.call(this)
    };
    i.setupEvents = function() {
      for (var o = 0, n = this._components.length; o < n; o++) {
        this._components[o].setupEvents()
      }
    };
    i.teardownEvents = function() {
      for (var o = 0, n = this._components.length; o < n; o++) {
        this._components[o].teardownEvents()
      }
    };
    i.setupComponents = function() {
      var s = Array.prototype.slice.call(this.element.querySelectorAll("[" + f.COMPONENT_LIST + "]"));
      if (this.element.hasAttribute(f.COMPONENT_LIST)) {
        s.push(this.element)
      }
      for (var q = 0; q < s.length; q++) {
        var u = s[q];
        var t = u.getAttribute(f.COMPONENT_LIST);
        if (t.indexOf("|") !== -1) {
          throw "BaseSection::setupComponents component list should be space delimited, pipe character is no longer supported. Error at: '" + t + "'"
        }
        var r = t.split(" ");
        for (var p = 0, n = r.length; p < n; p++) {
          var o = r[p];
          if (o === "" || o === " ") {
            continue
          }
          this.addComponentOfType(o, u)
        }
        setTimeout(this.elementEngagement.refreshAllElementStates.bind(this.elementEngagement), 100)
      }
    };
    i.addComponentOfType = function(o, q) {
      if (!h.hasOwnProperty(o)) {
        throw "BaseSection::setupComponents parsing '#" + q.id + " ." + q.className + "' no component type '" + o + "'found!"
      }
      var p = h[o];
      if (!this.componentIsSupported(p, o)) {
        console.log("BaseSection::setupComponents unsupported component '" + o + "'. Reason: '" + o + ".IS_SUPPORTED' returned false");
        return
      }
      var n = new p(this, q, o, this.cachedBreakpoint, this.cachedScrollPosition, this.cachedWindowHeight, this._components.length);
      this._components.push(n);
      return n
    };
    i.removeComponentOfType = function(n) {
      var o = this.getComponentOfType(n);
      if (o === null) {
        return
      }
      this.removeComponent(o)
    };
    i.removeComponent = function(o) {
      var n = this._components.indexOf(o);
      if (n === -1) {
        return
      }
      this._components.splice(n, 1);
      o.destroy()
    };
    i.activate = function() {
      this.element.classList.add("active");
      for (var o = 0, n = this._components.length; o < n; o++) {
        if (!this._components[o].isEnabled) {
          continue
        }
        this._components[o].activate()
      }
      this.isActive = true;
      if (!this.hasAnimatedIn) {
        this.element.classList.add("animated");
        this.animateIn();
        this.hasAnimatedIn = true
      }
    };
    i.deactivate = function() {
      this.element.classList.remove("active");
      this.isActive = false;
      for (var o = 0, n = this._components.length; o < n; o++) {
        if (!this._components[o].isEnabled) {
          continue
        }
        this._components[o].deactivate()
      }
    };
    i.animateIn = function() {
      for (var o = 0, n = this._components.length; o < n; o++) {
        if (!this._components[o].isEnabled) {
          continue
        }
        this._components[o].animateIn()
      }
    };
    i.onResizeImmediate = function(r, o, s) {
      this.cachedScrollPosition = o;
      this.cachedWindowHeight = s;
      var q = false;
      for (var p = 0, n = this._components.length; p < n; p++) {
        if (!this._components[p].isEnabled) {
          continue
        }
        if (!q && this._components[p]["onResizeWillBeCalledAfterDelay"]) {
          console.warn("Jetpack: onResizeWillBeCalledAfterDelay has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
          q = true
        }
        this._components[p].onResizeImmediate(r, o, s)
      }
    };
    i.onResizeDebounced = function(r, o, s) {
      this.updateScrollToPosition();
      var q = false;
      for (var p = 0, n = this._components.length; p < n; p++) {
        if (!this._components[p].isEnabled) {
          continue
        }
        if (!q && this._components[p]["onResize"]) {
          console.warn("Jetpack: onResize has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
          q = true
        }
        this._components[p].onResizeDebounced(r, o, s)
      }
      this.elementEngagement.refreshAllElementMetrics(o, s)
    };
    i.onBreakpoint = function(p, s, o, r) {
      this.cachedBreakpoint = p;
      for (var q = 0, n = this._components.length; q < n; q++) {
        if (!this._components[q].isEnabled) {
          continue
        }
        this._components[q].onBreakpoint(p, s, o, r)
      }
    };
    i.onRetinaChange = function(s, q, o, r) {
      for (var p = 0, n = this._components.length; p < n; p++) {
        if (!this._components[p].isEnabled) {
          continue
        }
        this._components[p].onRetinaChange(s, q, o, r)
      }
      this.elementEngagement.refreshAllElementMetrics(o, r)
    };
    i.onOrientationChange = function(r, p, o, s) {
      this.cachedScrollPosition = o;
      this.cachedWindowHeight = s;
      for (var q = 0, n = this._components.length; q < n; q++) {
        if (!this._components[q].isEnabled) {
          continue
        }
        this._components[q].onOrientationChange(r, p, o, s)
      }
    };
    i.onScroll = function(q, o, r) {
      this.cachedScrollPosition = o;
      this.elementEngagement.refreshAllElementStates(o);
      for (var p = 0, n = this._components.length; p < n; p++) {
        if (!this._components[p].isEnabled) {
          continue
        }
        this._components[p].onScroll(q, o, r)
      }
    };
    i.onSectionWillAppearWithPadding = function(o, q) {
      this.cachedScrollPosition = o;
      this.isVisibleWithPadding = true;
      this.elementEngagement.refreshAllElementStates(o);
      for (var p = 0, n = this._components.length; p < n; p++) {
        this._components[p].onSectionWillAppearWithPadding(o, q)
      }
    };
    i.onSectionWillAppear = function(o, q) {
      this.cachedScrollPosition = o;
      this.isVisible = true;
      this.elementEngagement.refreshAllElementStates(o);
      for (var p = 0, n = this._components.length; p < n; p++) {
        this._components[p].onSectionWillAppear(o, q)
      }
    };
    i.onSectionWillDisappearWithPadding = function(o, q) {
      this.cachedScrollPosition = o;
      this.isVisibleWithPadding = false;
      for (var p = 0, n = this._components.length; p < n; p++) {
        this._components[p].onSectionWillDisappearWithPadding(o, q)
      }
    };
    i.onSectionWillDisappear = function(o, q) {
      this.cachedScrollPosition = o;
      this.isVisible = false;
      for (var p = 0, n = this._components.length; p < n; p++) {
        this._components[p].onSectionWillDisappear(o, q)
      }
    };
    i.getComponentOfType = function(o) {
      if (!h.hasOwnProperty(o)) {
        throw "BaseSection::getComponentOfType no component type '" + o + "' exist in ComponentMap!"
      }
      for (var p = 0, n = this._components.length; p < n; p++) {
        if (this._components[p].componentName === o) {
          return this._components[p]
        }
      }
      return null
    };
    i.getAllComponentsOfType = function(o) {
      if (!h.hasOwnProperty(o)) {
        throw "BaseSection::getAllComponentsOfType no component type '" + o + "' exist in ComponentMap!"
      }
      var q = [];
      for (var p = 0, n = this._components.length; p < n; p++) {
        if (this._components[p].componentName === o) {
          q.push(this._components[p])
        }
      }
      return q
    };
    i.updateScrollToPosition = function() {
      return this.scrollToPosition = k.getPagePosition(this.element).top
    };
    i.setIsFixedHero = function() {
      if (this.index !== 0) {
        this.isFixedHero = false
      } else {
        var n = window.getComputedStyle(this.element);
        this.isFixedHero = n.position === "fixed"
      }
    };
    j.prototype.componentIsSupported = function(q, o) {
      var n = q.IS_SUPPORTED;
      if (n === undefined) {
        return true
      }
      if (typeof n !== "function") {
        console.error('BaseSection::setupComponents error in "' + o + '".IS_SUPPORTED - it should be a function which returns true/false');
        return true
      }
      var p = q.IS_SUPPORTED();
      if (p === undefined) {
        console.error('BaseSection::setupComponents error in "' + o + '".IS_SUPPORTED - it should be a function which returns true/false');
        return true
      }
      return p
    };
    b.exports = j
  }, {
    "./../model/ComponentMap": 141,
    "./../model/DataAttributes": 142,
    "./BaseComponent": 138,
    "@marcom/ac-dom-metrics/getPagePosition": 47,
    "@marcom/ac-element-engagement": 53,
    "@marcom/ac-event-emitter-micro": 126,
    "@marcom/ac-polyfills/Object/create": 360,
    "@marcom/ac-polyfills/console.log": 363
  }],
  141: [function(b, c, a) {
    c.exports = {
      BaseComponent: b("../core/BaseComponent")
    }
  }, {
    "../core/BaseComponent": 138
  }],
  142: [function(b, c, a) {
    c.exports = {
      PAGE_TYPE: "data-page-type",
      SECTION_TYPE: "data-section-type",
      JUMP_SECTION_NAME: "data-page-jump-name",
      COMPONENT_LIST: "data-component-list"
    }
  }, {}],
  143: [function(c, d, b) {
    var a = {
      isDesktop: c("@marcom/ac-feature/isDesktop"),
      isRetina: c("@marcom/ac-feature/isRetina")
    };
    d.exports = {
      TOUCH: undefined,
      SVG: undefined,
      PAGE_JUMP: undefined,
      IS_IE8: undefined,
      IS_DESKTOP: undefined,
      IS_RETINA: undefined,
      init: function() {
        var f = document.getElementsByTagName("html")[0];
        this.TOUCH = f.classList.contains("touch");
        this.SVG = f.classList.contains("svg");
        this.PAGE_JUMP = f.classList.contains("pageJump");
        this.IS_IE8 = f.classList.contains("ie8");
        this.IS_DESKTOP = a.isDesktop();
        this.IS_RETINA = a.isRetina()
      },
      extend: function(h) {
        if (!h.hasOwnProperty("init") || (typeof h.init !== "function")) {
          throw new TypeError("The object extended Jetpack.model.EnabledFeatures must contain an init function")
        }
        var i = this.init;
        var g = h.init;
        var f = Object.assign(this, h);
        f.init = function() {
          if (this.HAS_INITIALIZED) {
            return
          }
          this.HAS_INITIALIZED = true;
          i.call(f);
          g.call(f)
        };
        return f
      },
      HAS_INITIALIZED: false
    }
  }, {
    "@marcom/ac-feature/isDesktop": 32,
    "@marcom/ac-feature/isRetina": 34
  }],
  144: [function(b, c, a) {
    c.exports = {
      BaseSection: b("../core/BaseSection")
    }
  }, {
    "../core/BaseSection": 140
  }],
  145: [function(b, d, a) {
    var g = b("@marcom/ac-event-emitter-micro").EventEmitterMicro;

    function c() {
      g.call(this);
      this._page = null;
      this.viewportPaddingRatio = 1
    }
    var f = c.prototype = Object.create(g.prototype);
    c.prototype.constructor = c;
    f.getPage = function() {
      return this._page
    };
    f.setPage = function(h) {
      this._page = h
    };
    f.removePage = function(h) {
      if (h === this._page) {
        this._page = null
      }
    };
    f.getViewportPadding = function() {
      return this.getPage().getWindowHeight() * this.viewportPaddingRatio
    };
    f.deepRefreshAllElementMetrics = function() {
      this.trigger(c.prototype.DEEP_REFRESH_ALL_METRICS)
    };
    f.DEEP_REFRESH_ALL_METRICS = "page.deep_refresh_all_metrics";
    d.exports = new c()
  }, {
    "@marcom/ac-event-emitter-micro": 126
  }],
  146: [function(b, c, a) {
    c.exports = function() {
      var d;
      if (window.ViewportEmitterTestProxy) {
        d = window.ViewportEmitterTestProxy
      } else {
        d = {};
        d.viewport = "large";
        d.on = d.off = function() {}
      }
      return d
    }
  }, {}],
  147: [function(b, f, a) {
    var d = b("./ac-ajax/Ajax");
    var c = b("./ac-ajax/Request");
    f.exports = new d();
    f.exports.Ajax = d;
    f.exports.Request = c
  }, {
    "./ac-ajax/Ajax": 148,
    "./ac-ajax/Request": 149
  }],
  148: [function(c, g, b) {
    var f = c("./Request");
    var h = c("./XDomain-request");
    var a = c("./URLParser");
    var d = function() {};
    d._Request = f;
    d.prototype = {
      _defaults: {
        method: "get",
        timeout: 5000
      },
      _extend: function() {
        for (var k = 1; k < arguments.length; k++) {
          for (var j in arguments[k]) {
            if (arguments[k].hasOwnProperty(j)) {
              arguments[0][j] = arguments[k][j]
            }
          }
        }
        return arguments[0]
      },
      _getOptions: function(i, j) {
        return this._extend({}, this._defaults, j, i)
      },
      _isCrossDomainRequest: function(l) {
        var k = new a();
        var j = k.parse(window.location.href).origin;
        var i = k.parse(l).origin;
        k.destroy();
        return (i !== j)
      },
      create: function(i) {
        return new f(i)
      },
      cors: function(j) {
        var i = (window.XDomainRequest && document.documentMode < 10) ? h : f;
        return new i(j)
      },
      get: function(j) {
        var i;
        j = this._getOptions({
          method: "get"
        }, j);
        if (this._isCrossDomainRequest(j.url)) {
          i = this.cors(j)
        } else {
          i = this.create(j)
        }
        return i.send()
      },
      getJSON: function(i) {
        return this.get(i).then(function(j) {
          return JSON.parse(j.responseText)
        })
      },
      head: function(i) {
        i = this._getOptions({
          method: "head"
        }, i);
        return this.create(i).send()
      },
      isCrossDomainRequest: function(i) {
        return this._isCrossDomainRequest(i)
      },
      post: function(i) {
        i = this._getOptions({
          method: "post"
        }, i);
        return this.create(i).send()
      }
    };
    g.exports = d
  }, {
    "./Request": 149,
    "./URLParser": 150,
    "./XDomain-request": 151
  }],
  149: [function(b, d, a) {
    var c = function(f) {
      this._initialize(f)
    };
    c.create = function() {
      var f = function() {};
      f.prototype = c.prototype;
      return new f()
    };
    c.prototype = {
      _addReadyStateChangeHandler: function() {
        this.xhr.onreadystatechange = function(f) {
          if (this.xhr.readyState === 4) {
            clearTimeout(this._timeout);
            if (this.xhr.status >= 200 && this.xhr.status < 300) {
              this.resolve(this.xhr)
            } else {
              this.reject(this.xhr)
            }
          }
        }.bind(this)
      },
      _getPromise: function() {
        this.promise = new Promise(function(g, f) {
          this.resolve = g;
          this.reject = f
        }.bind(this))
      },
      _getTransport: function() {
        return new XMLHttpRequest()
      },
      _initialize: function(h) {
        var g = this._validateConfiguration(h);
        if (g) {
          throw g
        }
        this._configuration = h;
        var f = this._configuration.method.toUpperCase();
        this.xhr = this._getTransport();
        this._getPromise();
        this.xhr.open(f, this._configuration.url);
        this._setRequestHeaders(h.headers);
        this._addReadyStateChangeHandler()
      },
      _sendXHR: function() {
        if (this.xhr) {
          if (this._configuration && this._configuration.data) {
            this.xhr.send(this._configuration.data)
          } else {
            this.xhr.send()
          }
        }
      },
      _setRequestHeaders: function(f) {
        if (f) {
          f.forEach(function(g) {
            this.xhr.setRequestHeader(g.name, g.value)
          }, this)
        }
      },
      _setTimeout: function(f) {
        if (!f) {
          if (this._configuration && this._configuration.timeout) {
            f = this._configuration.timeout
          } else {
            clearTimeout(this._timeout);
            this._timeout = null
          }
        }
        if (this._timeout !== null) {
          clearTimeout(this._timeout)
        }
        if (f > 0) {
          this._timeout = setTimeout(function() {
            this.xhr.abort();
            this.reject()
          }.bind(this), f)
        }
      },
      _timeout: null,
      _validateConfiguration: function(h) {
        if (!h) {
          return "Must provide a configuration object"
        }
        var g = [];
        var f = h.headers;
        if (!h.url) {
          g.push("Must provide a url")
        }
        if (!h.method) {
          g.push("Must provide a method")
        }
        if (f) {
          if (!Array.isArray(f)) {
            return "Must provide an array of headers"
          }
          this._validateHeaders(f, g)
        }
        return g.join(", ")
      },
      _validateHeaders: function(h, j) {
        for (var g = 0, f = h.length; g < f; g++) {
          if (!h[g].hasOwnProperty("name") || !h[g].hasOwnProperty("value")) {
            j.push("Must provide a name and value key for all headers");
            break
          }
        }
      },
      promise: null,
      reject: null,
      resolve: null,
      send: function() {
        this._setTimeout();
        this._sendXHR();
        return this.promise
      },
      xhr: null
    };
    d.exports = c
  }, {}],
  150: [function(c, d, b) {
    var a = function() {
      this.parser = null
    };
    var f = a.prototype;
    f.parse = function(k) {
      var i;
      var l;
      var h;
      var g;
      var j;
      if (typeof k !== "string") {
        throw new TypeError(k + " must be a string")
      }
      if (!this.parser) {
        this.parser = document.createElement("a")
      }
      this._qualifyPath(k);
      h = this.parser.hostname;
      l = this.parser.protocol;
      g = this._normalizePort(this.parser);
      i = this.parser.origin || this._constructOriginString(this.parser, g);
      j = this.parser.search;
      return {
        originalPath: k,
        qualifiedPath: this.parser.href,
        protocol: l,
        hostname: h,
        origin: i,
        port: g,
        search: j
      }
    };
    f.destroy = function() {
      this.parser = null
    };
    f._constructOriginString = function(i, g) {
      var h = g ? ":" + g : "";
      return i.protocol + "//" + i.hostname + h
    };
    f._normalizePort = function(g) {
      return (g.port === "80" || g.port === "443" || g.port === "0") ? "" : g.port
    };
    f._qualifyPath = function(g) {
      this.parser.href = g;
      this.parser.href = this.parser.href
    };
    d.exports = a
  }, {}],
  151: [function(b, d, a) {
    var c = b("./Request");
    var f = function(g) {
      c.apply(this, arguments)
    };
    f.prototype = c.create();
    f.prototype._getTransport = function() {
      return new XDomainRequest()
    };
    f.prototype._addReadyStateChangeHandler = function() {
      this.xhr.ontimeout = function() {
        this.reject(this.xhr)
      }.bind(this);
      this.xhr.onerror = function() {
        this.reject(this.xhr)
      }.bind(this);
      this.xhr.onload = function() {
        this.resolve(this.xhr)
      }.bind(this)
    };
    f.prototype._setTimeout = function(g) {
      if (!g) {
        if (this._configuration && this._configuration.timeout) {
          g = this._configuration.timeout
        }
      }
      if (g > 0) {
        this.xhr.timeout = g
      }
    };
    f.prototype._sendXHR = function() {
      setTimeout(function() {
        c.prototype._sendXHR.call(this)
      }.bind(this), 0)
    };
    d.exports = f
  }, {
    "./Request": 149
  }],
  152: [function(b, c, a) {
    arguments[4][126][0].apply(a, arguments)
  }, {
    "./ac-event-emitter-micro/EventEmitterMicro": 153,
    dup: 126
  }],
  153: [function(b, c, a) {
    arguments[4][127][0].apply(a, arguments)
  }, {
    dup: 127
  }],
  154: [function(b, c, a) {
    var d = b("./promise/promise").Promise;
    var f = b("./promise/polyfill").polyfill;
    a.Promise = d;
    a.polyfill = f
  }, {
    "./promise/polyfill": 158,
    "./promise/promise": 159
  }],
  155: [function(c, d, b) {
    var a = c("./utils").isArray;
    var g = c("./utils").isFunction;

    function f(h) {
      var i = this;
      if (!a(h)) {
        throw new TypeError("You must pass an array to all.")
      }
      return new i(function(o, n) {
        var l = [],
          m = h.length,
          q;
        if (m === 0) {
          o([])
        }

        function p(r) {
          return function(s) {
            j(r, s)
          }
        }

        function j(r, s) {
          l[r] = s;
          if (--m === 0) {
            o(l)
          }
        }
        for (var k = 0; k < h.length; k++) {
          q = h[k];
          if (q && g(q.then)) {
            q.then(p(k), n)
          } else {
            j(k, q)
          }
        }
      })
    }
    b.all = f
  }, {
    "./utils": 163
  }],
  156: [function(b, c, a) {
    (function(f, g) {
      var o = (typeof window !== "undefined") ? window : {};
      var l = o.MutationObserver || o.WebKitMutationObserver;
      var n = (typeof g !== "undefined") ? g : (this === undefined ? window : this);

      function m() {
        return function() {
          f.nextTick(p)
        }
      }

      function i() {
        var s = 0;
        var q = new l(p);
        var r = document.createTextNode("");
        q.observe(r, {
          characterData: true
        });
        return function() {
          r.data = (s = ++s % 2)
        }
      }

      function k() {
        return function() {
          n.setTimeout(p, 1)
        }
      }
      var j = [];

      function p() {
        for (var s = 0; s < j.length; s++) {
          var r = j[s];
          var t = r[0],
            q = r[1];
          t(q)
        }
        j = []
      }
      var h;
      if (typeof f !== "undefined" && {}.toString.call(f) === "[object process]") {
        h = m()
      } else {
        if (l) {
          h = i()
        } else {
          h = k()
        }
      }

      function d(s, q) {
        var r = j.push([s, q]);
        if (r === 1) {
          h()
        }
      }
      a.asap = d
    }).call(this, b("_process"), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  }, {
    _process: 44
  }],
  157: [function(d, f, a) {
    var c = {
      instrument: false
    };

    function b(g, h) {
      if (arguments.length === 2) {
        c[g] = h
      } else {
        return c[g]
      }
    }
    a.config = c;
    a.configure = b
  }, {}],
  158: [function(b, c, a) {
    (function(f) {
      var d = b("./promise").Promise;
      var h = b("./utils").isFunction;

      function g() {
        var j;
        if (typeof f !== "undefined") {
          j = f
        } else {
          if (typeof window !== "undefined" && window.document) {
            j = window
          } else {
            j = self
          }
        }
        var i = "Promise" in j && "resolve" in j.Promise && "reject" in j.Promise && "all" in j.Promise && "race" in j.Promise && (function() {
          var k;
          new j.Promise(function(l) {
            k = l
          });
          return h(k)
        }());
        if (!i) {
          j.Promise = d
        }
      }
      a.polyfill = g
    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  }, {
    "./promise": 159,
    "./utils": 163
  }],
  159: [function(q, d, D) {
    var B = q("./config").config;
    var A = q("./config").configure;
    var s = q("./utils").objectOrFunction;
    var a = q("./utils").isFunction;
    var f = q("./utils").now;
    var g = q("./all").all;
    var j = q("./race").race;
    var l = q("./resolve").resolve;
    var c = q("./reject").reject;
    var u = q("./asap").asap;
    var r = 0;
    B.async = u;

    function h(E) {
      if (!a(E)) {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
      }
      if (!(this instanceof h)) {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
      }
      this._subscribers = [];
      z(E, this)
    }

    function z(I, H) {
      function E(J) {
        v(H, J)
      }

      function G(J) {
        k(H, J)
      }
      try {
        I(E, G)
      } catch (F) {
        G(F)
      }
    }

    function x(L, N, K, G) {
      var E = a(K),
        J, I, M, F;
      if (E) {
        try {
          J = K(G);
          M = true
        } catch (H) {
          F = true;
          I = H
        }
      } else {
        J = G;
        M = true
      }
      if (t(N, J)) {
        return
      } else {
        if (E && M) {
          v(N, J)
        } else {
          if (F) {
            k(N, I)
          } else {
            if (L === b) {
              v(N, J)
            } else {
              if (L === C) {
                k(N, J)
              }
            }
          }
        }
      }
    }
    var m = void 0;
    var p = 0;
    var b = 1;
    var C = 2;

    function o(E, J, I, H) {
      var G = E._subscribers;
      var F = G.length;
      G[F] = J;
      G[F + b] = I;
      G[F + C] = H
    }

    function w(I, E) {
      var K, J, H = I._subscribers,
        G = I._detail;
      for (var F = 0; F < H.length; F += 3) {
        K = H[F];
        J = H[F + E];
        x(E, K, J, G)
      }
      I._subscribers = null
    }
    h.prototype = {
      constructor: h,
      _state: undefined,
      _detail: undefined,
      _subscribers: undefined,
      then: function(J, H) {
        var I = this;
        var F = new this.constructor(function() {});
        if (this._state) {
          var G = arguments;
          B.async(function E() {
            x(I._state, F, G[I._state - 1], I._detail)
          })
        } else {
          o(this, F, J, H)
        }
        return F
      },
      "catch": function(E) {
        return this.then(null, E)
      }
    };
    h.all = g;
    h.race = j;
    h.resolve = l;
    h.reject = c;

    function t(I, G) {
      var H = null,
        E;
      try {
        if (I === G) {
          throw new TypeError("A promises callback cannot return that same promise.")
        }
        if (s(G)) {
          H = G.then;
          if (a(H)) {
            H.call(G, function(J) {
              if (E) {
                return true
              }
              E = true;
              if (G !== J) {
                v(I, J)
              } else {
                i(I, J)
              }
            }, function(J) {
              if (E) {
                return true
              }
              E = true;
              k(I, J)
            });
            return true
          }
        }
      } catch (F) {
        if (E) {
          return true
        }
        k(I, F);
        return true
      }
      return false
    }

    function v(F, E) {
      if (F === E) {
        i(F, E)
      } else {
        if (!t(F, E)) {
          i(F, E)
        }
      }
    }

    function i(F, E) {
      if (F._state !== m) {
        return
      }
      F._state = p;
      F._detail = E;
      B.async(y, F)
    }

    function k(F, E) {
      if (F._state !== m) {
        return
      }
      F._state = p;
      F._detail = E;
      B.async(n, F)
    }

    function y(E) {
      w(E, E._state = b)
    }

    function n(E) {
      w(E, E._state = C)
    }
    D.Promise = h
  }, {
    "./all": 155,
    "./asap": 156,
    "./config": 157,
    "./race": 160,
    "./reject": 161,
    "./resolve": 162,
    "./utils": 163
  }],
  160: [function(c, f, b) {
    var a = c("./utils").isArray;

    function d(g) {
      var h = this;
      if (!a(g)) {
        throw new TypeError("You must pass an array to race.")
      }
      return new h(function(m, l) {
        var k = [],
          n;
        for (var j = 0; j < g.length; j++) {
          n = g[j];
          if (n && typeof n.then === "function") {
            n.then(m, l)
          } else {
            m(n)
          }
        }
      })
    }
    b.race = d
  }, {
    "./utils": 163
  }],
  161: [function(b, c, a) {
    function d(g) {
      var f = this;
      return new f(function(i, h) {
        h(g)
      })
    }
    a.reject = d
  }, {}],
  162: [function(b, c, a) {
    function d(g) {
      if (g && typeof g === "object" && g.constructor === this) {
        return g
      }
      var f = this;
      return new f(function(h) {
        h(g)
      })
    }
    a.resolve = d
  }, {}],
  163: [function(d, f, b) {
    function g(i) {
      return h(i) || (typeof i === "object" && i !== null)
    }

    function h(i) {
      return typeof i === "function"
    }

    function a(i) {
      return Object.prototype.toString.call(i) === "[object Array]"
    }
    var c = Date.now || function() {
      return new Date().getTime()
    };
    b.objectOrFunction = g;
    b.isFunction = h;
    b.isArray = a;
    b.now = c
  }, {}],
  164: [function(b, c, a) {
    if (!Function.prototype.bind) {
      Function.prototype.bind = function(d) {
        if (typeof this !== "function") {
          throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
        }
        var i = Array.prototype.slice.call(arguments, 1);
        var h = this;
        var f = function() {};
        var g = function() {
          return h.apply((this instanceof f && d) ? this : d, i.concat(Array.prototype.slice.call(arguments)))
        };
        f.prototype = this.prototype;
        g.prototype = new f();
        return g
      }
    }
  }, {}],
  165: [function(b, c, a) {
    c.exports = b("es6-promise").polyfill()
  }, {
    "es6-promise": 154
  }],
  166: [function(b, c, a) {
    (function() {
      var f = 0;
      var g = ["ms", "moz", "webkit", "o"];
      for (var d = 0; d < g.length && !window.requestAnimationFrame; ++d) {
        window.requestAnimationFrame = window[g[d] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[g[d] + "CancelAnimationFrame"] || window[g[d] + "CancelRequestAnimationFrame"]
      }
      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(l, i) {
          var h = Date.now();
          var j = Math.max(0, 16 - (h - f));
          var k = window.setTimeout(function() {
            l(h + j)
          }, j);
          f = h + j;
          return k
        }
      }
      if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(h) {
          clearTimeout(h)
        }
      }
    }())
  }, {}],
  167: [function(b, c, a) {
    c.exports = {
      Queue: b("./ac-queue/Queue"),
      QueueItem: b("./ac-queue/QueueItem"),
      LiveQueue: b("./ac-queue/LiveQueue")
    }
  }, {
    "./ac-queue/LiveQueue": 168,
    "./ac-queue/Queue": 169,
    "./ac-queue/QueueItem": 170
  }],
  168: [function(b, c, a) {
    b("@marcom/ac-polyfills/Promise");
    b("@marcom/ac-polyfills/requestAnimationFrame");
    b("@marcom/ac-polyfills/Function/prototype.bind");
    var g = b("./Queue");
    var h = b("./QueueItem");

    function f(i) {
      this._queue = new g();
      this._maxProcesses = i || 1;
      this._availableSlots = this._maxProcesses;
      this._rafId = 0;
      this._isRunning = false;
      this._boundFunctions = {
        _run: this._run.bind(this),
        _releaseSlot: this._releaseSlot.bind(this)
      }
    }
    var d = f.prototype;
    d.start = function() {
      if (this._isRunning) {
        cancelAnimationFrame(this._rafId)
      }
      this._rafId = requestAnimationFrame(this._boundFunctions._run);
      this._isRunning = true
    };
    d.pause = function() {
      if (this._isRunning) {
        cancelAnimationFrame(this._rafId);
        this._rafId = 0
      }
      this._isRunning = false
    };
    d.stop = function() {
      this.pause();
      this.clear()
    };
    d.enqueue = function(i, j) {
      if (typeof i !== "function") {
        throw new Error("LiveQueue can only enqueue functions")
      }
      if (j === undefined) {
        j = g.PRIORITY_DEFAULT
      }
      var k = new h(i, j);
      return this.enqueueQueueItem(k)
    };
    d.enqueueQueueItem = function(i) {
      this._queue.enqueueQueueItem(i);
      if (this._isRunning && this._rafId === 0) {
        this.start()
      }
      return i
    };
    d.dequeueQueueItem = function(i) {
      return this._queue.dequeueQueueItem(i)
    };
    d.clear = function() {
      this._queue = new g()
    };
    d.destroy = function() {
      this.pause();
      this._isRunning = false;
      this._queue = null;
      this._boundFunctions = null
    };
    d.count = function() {
      return this._queue.count() + this.pending()
    };
    d.pending = function() {
      return this._maxProcesses - this._availableSlots
    };
    d.isEmpty = function() {
      return this.count() === 0
    };
    d._run = function() {
      if (!this._isRunning) {
        return
      }
      this._rafId = requestAnimationFrame(this._boundFunctions._run);
      if (this._queue.isEmpty() || this._availableSlots === 0) {
        return
      }
      var j = this._queue.dequeue();
      var i = j.data();
      if (this._isPromise(i)) {
        this._retainSlot();
        i.then(this._boundFunctions._releaseSlot, this._boundFunctions._releaseSlot)
      }
      this._stopRunningIfDone()
    };
    d._retainSlot = function() {
      this._availableSlots--
    };
    d._releaseSlot = function() {
      this._availableSlots++;
      this._stopRunningIfDone()
    };
    d._stopRunningIfDone = function() {
      if (this._rafId != 0 && this._queue.count() === 0 && this._availableSlots == this._maxProcesses) {
        cancelAnimationFrame(this._rafId);
        this._rafId = 0
      }
    };
    d._isPromise = function(i) {
      return !!(i && typeof i.then === "function")
    };
    c.exports = f
  }, {
    "./Queue": 169,
    "./QueueItem": 170,
    "@marcom/ac-polyfills/Function/prototype.bind": 164,
    "@marcom/ac-polyfills/Promise": 165,
    "@marcom/ac-polyfills/requestAnimationFrame": 166
  }],
  169: [function(b, c, a) {
    var g = b("./QueueItem");

    function f() {
      this._items = []
    }
    var d = f.prototype;
    d.enqueue = function(j, h) {
      if (h === undefined) {
        h = f.PRIORITY_DEFAULT
      }
      var i = new g(j, h);
      return this.enqueueQueueItem(i)
    };
    d.enqueueQueueItem = function(h) {
      if (this._items.indexOf(h) === -1) {
        this._items.push(h)
      }
      return h
    };
    d.dequeue = function() {
      this._heapSort();
      var i = this._items.length - 1;
      var h = this._items[0];
      this._items[0] = this._items[i];
      this._items.pop();
      return h
    };
    d.dequeueQueueItem = function(i) {
      var h = this._items.indexOf(i);
      if (h > -1) {
        this._items.splice(h, 1)
      }
      return i
    };
    d.peek = function() {
      if (this.count() == 0) {
        return null
      }
      this._heapSort();
      return this._items[0]
    };
    d.isEmpty = function() {
      return this._items.length === 0
    };
    d.count = function() {
      return this._items.length
    };
    d.toString = function() {
      var j = ["Queue total items: " + this.count() + "\n"];
      for (var h = 0; h < this.count(); ++h) {
        j.push(this._items[h].toString() + "\n")
      }
      return j.join("")
    };
    d._heapSort = function() {
      var h = 0;
      for (var m = this._items.length - 1; m >= 0; m--) {
        var n = m;
        while (n > 0) {
          h++;
          var j = Math.floor((n - 1) / 2);
          if (this._items[n].compareTo(this._items[j]) >= 0) {
            break
          }
          var l = this._items[n];
          this._items[n] = this._items[j];
          this._items[j] = l;
          n = j
        }
      }
    };
    f.PRIORITY_LOW = 10;
    f.PRIORITY_DEFAULT = 5;
    f.PRIORITY_HIGH = 1;
    c.exports = f
  }, {
    "./QueueItem": 170
  }],
  170: [function(b, c, a) {
    var g = 0;

    function f(i, h) {
      this.priority = h;
      this.data = i;
      this.insertionOrder = g++
    }
    var d = f.prototype;
    d.compareTo = function(h) {
      if (this.priority < h.priority) {
        return -1
      } else {
        if (this.priority > h.priority) {
          return 1
        } else {
          return (this.insertionOrder < h.insertionOrder) ? -1 : 1
        }
      }
    };
    d.toString = function() {
      return "QueueItem {priority:" + this.priority + ",\tdata:" + this.data + "\tinsertionOrder:" + this.insertionOrder + "}"
    };
    c.exports = f
  }, {}],
  171: [function(d, f, c) {
    var h;
    var g = d("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var b = d("@marcom/ac-object/defaults");
    var i = {
      priority: 5
    };

    function a(k, j) {
      g.call(this);
      this.options = b(i, j || {});
      this.src = k;
      this.data = null;
      this.error = null;
      this.priority = this.options.priority;
      this.status = "idle";
      this._onLoad = this._onLoad.bind(this);
      this._onError = this._onError.bind(this)
    }
    h = a.prototype = Object.create(g.prototype);
    h.load = function() {
      if (this.status === "idle") {
        this.status = "pending";
        this._load()
      }
    };
    h.destroy = function() {
      g.prototype.destroy.call(this);
      this.status = "destroyed";
      this.data = null
    };
    h._load = function() {
      this.data = {
        src: this.src
      };
      window.setTimeout(this._onLoad.bind(this), 20)
    };
    h._onLoad = function() {
      if (this.status !== "destroyed") {
        this.status = "loaded";
        this.trigger("loaded", this)
      }
    };
    h._onError = function(j) {
      if (this.status !== "destroyed") {
        this.error = j;
        this.status = "error";
        this.trigger("error", this)
      }
    };
    f.exports = a
  }, {
    "@marcom/ac-event-emitter-micro": 152,
    "@marcom/ac-object/defaults": 306
  }],
  172: [function(b, c, a) {
    var f;
    var d = b("../Asset");

    function g(i, h) {
      d.apply(this, arguments)
    }
    f = g.prototype = Object.create(d.prototype);
    f._load = function() {
      this.data = new Image();
      this.data.addEventListener("load", this._onLoad);
      this.data.addEventListener("error", this._onError);
      this.data.src = this.src
    };
    f.destroy = function() {
      if (this.data) {
        this.data.removeEventListener("load", this._onLoad);
        this.data.removeEventListener("error", this._onError)
      }
      this.status = "destroyed";
      this.data = null
    };
    c.exports = g
  }, {
    "../Asset": 171
  }],
  173: [function(d, b, g) {
    d("@marcom/ac-polyfills/Promise");
    var h = d("@marcom/ac-object/defaults");
    var a = d("./XHR/ArrayBuffer");
    var l = d("./XHR/JSON");
    var j = d("../Asset");
    var k = d("../AssetGroup");
    var i;
    var f = {
      manifestTimeout: 5000,
      chunkTimeout: 10000
    };
    var c = function(p, n) {
      var o = h(f, n || {});
      j.call(this, p, o);
      if (p.lastIndexOf("/") !== p.length - 1) {
        p = p + "/"
      }
      var m = "j";
      this._manifestPath = p + "manifest." + m + "son";
      this._chunks = [];
      this._loadChunks = this._loadChunks.bind(this);
      this._onChunksLoaded = this._onChunksLoaded.bind(this);
      this._manifestLoader = null;
      this._chunkLoader = null
    };
    i = c.prototype = Object.create(j.prototype);
    i._load = function() {
      this._loadManifest().then(this._loadChunks).then(this._onChunksLoaded)["catch"](this._onError)
    };
    i._loadManifest = function() {
      var m = new l(this._manifestPath, {
        timeout: this.options.manifestTimeout
      });
      var n = new k(m, {
        privateQueue: this.options.queue
      });
      n.load();
      this._manifestLoader = n;
      return new Promise(function(p, o) {
        n.once("load", function(q) {
          p(q.latest)
        });
        n.once("error", function(q) {
          o(q.latest.error)
        })
      })
    };
    i._loadChunks = function(n) {
      this._manifest = n.data;
      this._manifestLoader.destroy();
      this._manifestLoader = null;
      var m = [];
      this._manifest.files.forEach(function(r, q) {
        m.push(this._getOrCreateChunkObject(r, q))
      }, this);
      var p = new k(m, {
        privateQueue: this.options.queue,
        failFast: true
      });
      var o = new Promise(function(r, q) {
        p.once("load", r);
        p.once("error", function(s) {
          q(s.latest.error)
        })
      });
      p.load();
      this._chunkLoader = p;
      return o
    };
    i._getOrCreateChunkObject = function(o, m) {
      var p = this.options.chunkTimeout ? {
        timeout: this.options.chunkTimeout
      } : null;
      if (!this._chunks[m]) {
        var r = o.path;
        if (!r.match(/(^http(s?))/)) {
          r = this.src + "/" + r
        } else {
          if (!!this.src.match(/(^http(s?))/)) {
            var q = r.indexOf("/", 10);
            var n = this.src.indexOf("/", 10);
            r = this.src.substring(0, n) + r.substring(q)
          }
        }
        this._chunks[m] = new a(r, p)
      }
      return this._chunks[m]
    };
    i._onChunksLoaded = function() {
      var m = this._chunks.length;
      var n = [];
      for (var o = 0; o < m; o++) {
        n.push(this._chunks[o].data);
        this._chunks[o].off()
      }
      this.data = new Blob(n, {
        type: this._manifest.mimeType
      });
      n = this._chunks = null;
      this._chunkLoader.destroy();
      this._chunkLoader = null;
      this._onLoad()
    };
    i.pause = function() {
      if (this._manifestLoader) {
        this._manifestLoader.pause()
      }
      if (this._chunkLoader) {
        this._chunkLoader.pause()
      }
    };
    i.resume = function() {
      if (this._manifestLoader) {
        this._manifestLoader.resume()
      }
      if (this._chunkLoader) {
        this._chunkLoader.resume()
      }
    };
    i.destroy = function() {
      this.pause();
      if (this._manifestLoader) {
        this._manifestLoader.destroy()
      }
      if (this._chunkLoader) {
        this._chunkLoader.destroy()
      }
      this._chunks = null;
      j.prototype.destroy.call(this)
    };
    b.exports = c
  }, {
    "../Asset": 171,
    "../AssetGroup": 178,
    "./XHR/ArrayBuffer": 176,
    "./XHR/JSON": 177,
    "@marcom/ac-object/defaults": 306,
    "@marcom/ac-polyfills/Promise": 165
  }],
  174: [function(c, d, b) {
    var g;
    var f = c("../Asset");
    var h = c("./SplitFile");

    function a(j, i) {
      f.apply(this, arguments);
      this.options = i || {};
      this._binary = this.options.binary || this._createAssetType()
    }
    g = a.prototype = Object.create(f.prototype);
    g._canUseBlob = function() {
      return (window.Blob !== undefined && window.URL !== undefined && typeof window.URL.createObjectURL === "function")
    };
    g._createAssetType = function() {
      if (this._canUseBlob()) {
        return new h(this.src, this.options)
      }
    };
    g._load = function() {
      this._binary.on("loaded", this._onLoad);
      this._binary.on("error", this._onError);
      this._binary.load()
    };
    g._onLoad = function(i) {
      this.data = i;
      if (this.data instanceof window.Blob) {
        this.data = this.options.element;
        if (!this.data) {
          this.data = document.createElement("video")
        }
        if (this.data.getAttribute("type") !== i.type) {
          this.data.setAttribute("type", i.type)
        }
        this.data.src = window.URL.createObjectURL(i)
      }
      f.prototype._onLoad.call(this, this.data)
    };
    g.pause = function() {
      this._binary.pause()
    };
    g.destroy = function() {
      this._binary.destroy();
      f.prototype.destroy.call(this)
    };
    d.exports = a
  }, {
    "../Asset": 171,
    "./SplitFile": 173
  }],
  175: [function(b, a, d) {
    var g;
    var j = b("@marcom/ac-ajax");
    var i = b("../Asset");
    var f = b("@marcom/ac-object/defaults");
    var c = {
      timeout: 30 * 1000,
      responseType: ""
    };

    function h(m, k) {
      var l = f(c, k || {});
      i.call(this, m, l);
      this._request = this._createRequest();
      this._request.xhr.responseType = this.options.responseType
    }
    g = h.prototype = Object.create(i.prototype);
    g.destroy = function() {
      if (this.status === "idle" || this.status === "loaded") {
        this._request = null
      }
      if (this.status === "pending") {
        this._request.xhr.abort();
        i.prototype.destroy.call(this);
        return
      }
      i.prototype.destroy.call(this)
    };
    g._createRequest = function() {
      return j.create({
        url: this.src,
        method: "GET",
        timeout: this.options.timeout,
        responseType: this.options.responseType
      })
    };
    g._load = function() {
      this._request.send().then(this._onLoad)["catch"](this._onError)
    };
    g._onLoad = function(k) {
      this.data = this.data || k.response;
      this._request = null;
      i.prototype._onLoad.call(this)
    };
    a.exports = h
  }, {
    "../Asset": 171,
    "@marcom/ac-ajax": 147,
    "@marcom/ac-object/defaults": 306
  }],
  176: [function(d, f, b) {
    var g;
    var a = d("../XHR");
    var c = d("@marcom/ac-object/extend");
    var h = {
      responseType: "arraybuffer"
    };

    function i(l, j) {
      var k = c(j || {}, h);
      a.call(this, l, k)
    }
    g = i.prototype = Object.create(a.prototype);
    f.exports = i
  }, {
    "../XHR": 175,
    "@marcom/ac-object/extend": 307
  }],
  177: [function(b, c, a) {
    var f;
    var d = b("../XHR");

    function g(i, h) {
      d.apply(this, arguments)
    }
    f = g.prototype = Object.create(d.prototype);
    f._onLoad = function(i) {
      try {
        this.data = JSON.parse(i.response || i.responseText)
      } catch (h) {
        this._onError(h)
      }
      d.prototype._onLoad.call(this, i)
    };
    c.exports = g
  }, {
    "../XHR": 175
  }],
  178: [function(c, b, f) {
    c("@marcom/ac-polyfills/Promise");
    var i = c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var g = c("@marcom/ac-object/defaults");
    var a = c("./utils/enqueueAsset");
    var k = c("./utils/selectQueue");
    var j = c("./queue");
    var d = {
      failFast: true,
      privateQueue: false,
      privateQueueThreads: j.DEFAULT_THREADS
    };
    var l = function(n, m) {
      i.call(this);
      this.options = g(d, m || {});
      this._onGroupError = this._onGroupError.bind(this);
      this._onAssetError = this._onAssetError.bind(this);
      this._onScheduled = this._onScheduled.bind(this);
      this._onProgress = this._onProgress.bind(this);
      this._onComplete = this._onComplete.bind(this);
      this.errors = [];
      this._queue = k(this.options.privateQueue, this.options.privateQueueThreads);
      this._assets = [].concat(n);
      this._loaded = [];
      this._errored = [];
      this._enqueued = [];
      this._dequeued = [];
      this._pending = [];
      this._isRunning = false;
      this._isComplete = false;
      this._isErrored = false;
      this._destroyPending = false
    };
    var h = l.prototype = Object.create(i.prototype);
    h.load = function() {
      var m = this._assets.map(function(o) {
        var q = {
          asset: o,
          success: this._onProgress,
          failure: this._onAssetError,
          scheduled: this._onScheduled
        };
        var p = a(this._queue, q, this.options.failFast);
        this._enqueued.push(p);
        return p.promise
      }, this);
      Promise.all(m).then(this._onComplete)["catch"](this._onGroupError);
      this._isRunning = true;
      this._queue.start();
      var n = new Promise(function(p, o) {
        this.once("load", p);
        if (this.options.failFast) {
          this.once("error", p)
        }
      }.bind(this));
      return n
    };
    h.isRunning = function() {
      return this._isRunning
    };
    h.count = function() {
      return this._enqueued.length
    };
    h.pending = function() {
      return this._pending.length
    };
    h.loadedCount = function() {
      return this._loaded.length
    };
    h.isComplete = function() {
      return this._isComplete
    };
    h.isErrored = function() {
      return this._isErrored
    };
    h.pause = function() {
      if (!this.isComplete() && !this.isErrored() && this.isRunning()) {
        this._dequeueItems();
        this._pauseAssets();
        this._isRunning = false
      }
    };
    h.resume = function() {
      if (!this.isComplete() && !this.isErrored() && !this.isRunning() && !this._destroyPending) {
        this._reenqueueItems();
        this._resumeAssets();
        this._isRunning = true
      }
    };
    h.destroy = function() {
      if (!this._destroyPending) {
        i.prototype.destroy.call(this);
        this.pause();
        this._destroyPending = true;
        this._assets.forEach(function(m) {
          m.destroy()
        });
        if (this.pending() === 0) {
          this._destroy()
        }
      }
    };
    h.trigger = function() {
      if (!this._destroyPending) {
        i.prototype.trigger.apply(this, arguments)
      }
    };
    h._destroy = function() {
      if (this.privateQueue) {
        this._queue.destroy();
        this._queue = null;
        this.options.privateQueue = null
      }
      this.errors = null;
      this._assets = null;
      this._loaded = null;
      this._errored = null;
      this._enqueued = null;
      this._dequeued = null;
      this._pending = null
    };
    h._pauseAssets = function() {
      this._assets.forEach(function(m) {
        if (typeof m.pause === "function") {
          m.pause()
        }
      })
    };
    h._resumeAssets = function() {
      this._assets.forEach(function(m) {
        if (typeof m.resume === "function") {
          m.resume()
        }
      })
    };
    h._onProgress = function(o) {
      if (!this.isErrored()) {
        var m = this._pending.indexOf(o);
        var p = this._pending.splice(m, 1)[0];
        if (p && p.asset.status === "loaded") {
          this._loaded.push(p.asset)
        }
        if (this._destroyPending) {
          if (this.pending() === 0) {
            this._destroy()
          }
          return
        }
        var n = this._makeDataObject(o.asset);
        this.trigger("progress", n)
      }
    };
    h._onScheduled = function(n) {
      var m = this._enqueued.indexOf(n);
      if (m > -1) {
        this._enqueued.splice(m, 1);
        this._pending.push(n)
      }
    };
    h._onComplete = function(m) {
      this._isRunning = false;
      this._isComplete = true;
      var n = this._makeDataObject(this._loaded[(this._loaded.length - 1)]);
      this.trigger("load", n)
    };
    h._onAssetError = function(n) {
      this.errors.push(n.error);
      this._errored.push(n);
      var m = this._pending.indexOf(n);
      this._pending.splice(m, 1);
      var o = this._makeDataObject(n.asset);
      this.trigger("error", o)
    };
    h._onGroupError = function(m) {
      if (this.options.failFast) {
        this.pause();
        this._isErrored = true;
        this._isRunning = false;
        this._isComplete = false
      }
    };
    h._makeDataObject = function(o) {
      var n = this.errors.length;
      var m = this.errors.map(function(p) {
        return this._assets.indexOf(p)
      }, this);
      return {
        latest: o,
        assets: this._assets,
        error: !!(n > 0),
        errored: this.errors
      }
    };
    h._dequeueItems = function() {
      this._enqueued.forEach(function(m) {
        this._queue.dequeueQueueItem(m.queueItem);
        this._dequeued.push(m)
      }, this);
      this._enqueued = []
    };
    h._reenqueueItems = function() {
      this._dequeued.forEach(function(m) {
        this._queue.enqueueQueueItem(m.queueItem);
        this._enqueued.push(m)
      }, this);
      this._dequeued = []
    };
    b.exports = l
  }, {
    "./queue": 183,
    "./utils/enqueueAsset": 184,
    "./utils/selectQueue": 185,
    "@marcom/ac-event-emitter-micro": 152,
    "@marcom/ac-object/defaults": 306,
    "@marcom/ac-polyfills/Promise": 165
  }],
  179: [function(b, c, a) {
    c.exports.assetLoader = b("./assetLoader");
    c.exports.types = b("./assetTypes");
    c.exports.AssetGroup = b("./AssetGroup");
    c.exports.createAsset = b("./createAsset")
  }, {
    "./AssetGroup": 178,
    "./assetLoader": 180,
    "./assetTypes": 181,
    "./createAsset": 182
  }],
  180: [function(j, b, w) {
    var q = j("./queue");
    var r = j("./AssetGroup");
    var k = j("./assetTypes");
    var v = j("./createAsset");
    var a = j("./utils/selectQueue");
    var s = j("@marcom/ac-object/clone");

    function u(x, y) {
      x = [].concat(x);
      return x.map(function(z) {
        return v(z, y)
      })
    }

    function t(z, x) {
      var y = s(x || {});
      y.privateQueue = a(y.privateQueue, y.privateQueueThreads);
      z = u(z, y.privateQueue);
      return new r(z, y)
    }
    b.exports = {
      count: function g() {
        return q.getInstance().count()
      },
      pending: function d() {
        return q.getInstance().pending()
      },
      pause: function f() {
        return q.getInstance().pause()
      },
      stop: function p() {
        return q.getInstance().stop()
      },
      clear: function o() {
        return q.getInstance().clear()
      },
      isEmpty: function n() {
        return q.getInstance().isEmpty()
      },
      load: function i(y, x) {
        var z = t(y, x);
        return z.load()
      },
      resume: function c() {
        return q.getInstance().start()
      },
      setThreads: function l(x) {
        q.setThreads(x)
      },
      createAssets: function m(y, x) {
        return u(y, x)
      },
      createAssetGroup: function h(y, x) {
        return t(y, x)
      },
      types: k
    }
  }, {
    "./AssetGroup": 178,
    "./assetTypes": 181,
    "./createAsset": 182,
    "./queue": 183,
    "./utils/selectQueue": 185,
    "@marcom/ac-object/clone": 304
  }],
  181: [function(c, b, f) {
    var g = c("./Asset/XHR");
    var d = c("./Asset/SplitFile");
    var h = c("./Asset/Img");
    var i = c("./Asset/Video");
    var a = c("./Asset/XHR/ArrayBuffer");
    var j = c("./Asset/XHR/JSON");
    b.exports = {
      XHR_ASSET: g,
      JSON_ASSET: j,
      SPLITFILE_ASSET: d,
      IMG_ASSET: h,
      VIDEO_ASSET: i,
      ARRAY_BUFFER_ASSET: a
    }
  }, {
    "./Asset/Img": 172,
    "./Asset/SplitFile": 173,
    "./Asset/Video": 174,
    "./Asset/XHR": 175,
    "./Asset/XHR/ArrayBuffer": 176,
    "./Asset/XHR/JSON": 177
  }],
  182: [function(c, f, b) {
    var d = c("./assetTypes");
    var a = c("./Asset");
    var i = {
      txt: d.XHR_ASSET,
      xml: d.XHR_ASSET,
      csv: d.XHR_ASSET,
      json: d.JSON_ASSET,
      png: d.IMG_ASSET,
      jpg: d.IMG_ASSET,
      gif: d.IMG_ASSET,
      svg: d.IMG_ASSET,
      splitfile: d.SPLITFILE_ASSET
    };

    function h(j) {
      j = j.replace(/([?#].*)$/, "");
      return i[j.split(".").pop()]
    }
    f.exports = function g(k, j) {
      var l = {};
      if (a.prototype.isPrototypeOf(k)) {
        return src
      }
      if (typeof k === "string") {
        l.src = k;
        l.type = h(k)
      }
      if (typeof k === "object") {
        l = k;
        if (typeof l.type === "string") {
          l.type = h(l.type)
        }
        if (!l.type) {
          l.type = h(l.src)
        }
      }
      if (!l.options) {
        l.options = {}
      }
      if (j) {
        l.options.queue = j
      }
      return new l.type(l.src, l.options)
    }
  }, {
    "./Asset": 171,
    "./assetTypes": 181
  }],
  183: [function(c, b, g) {
    var f = c("@marcom/ac-queue").LiveQueue;
    var a = 4;
    var l = a;
    var k;

    function i() {
      return l
    }

    function j(m) {
      m = m || a;
      return new f(m)
    }

    function d(m) {
      m = m || l;
      if (!k) {
        k = j(m)
      }
      return k
    }

    function h(m) {
      l = m
    }
    b.exports = {
      getInstance: function(m) {
        return d(m)
      },
      setThreads: function(m) {
        h(m)
      },
      newInstance: function(m) {
        return j(m)
      },
      isLiveQueue: function(m) {
        return m instanceof f
      },
      DEFAULT_THREADS: a
    }
  }, {
    "@marcom/ac-queue": 167
  }],
  184: [function(c, d, a) {
    c("@marcom/ac-polyfills/Promise");

    function b(h, g) {
      if (typeof h[g] === "function") {
        h[g](h)
      }
    }
    d.exports = function f(h, k, l) {
      var j = function(n, m) {
        k.scheduled(k);
        k.asset.once("loaded", function(o) {
          n(k)
        });
        k.asset.once("error", function(o) {
          if (l) {
            return m(o)
          }
          n(k)
        });
        k.asset.load()
      };
      var i = function() {
        return new Promise(j)
      };
      var g = new Promise(function(n, m) {
        k.asset.once("loaded", function(o) {
          b(k, "success");
          n(o)
        });
        k.asset.once("error", function(o) {
          k.error = o;
          b(k, "failure");
          if (l) {
            return m(o)
          }
          n(k)
        })
      });
      k.queueItem = h.enqueue(i, k.asset.priority);
      k.promise = g;
      return k
    }
  }, {
    "@marcom/ac-polyfills/Promise": 165
  }],
  185: [function(c, d, b) {
    var a = c("../queue");
    d.exports = function f(h, g) {
      g = g || a.DEFAULT_THREADS;
      if (a.isLiveQueue(h)) {
        return h
      }
      if (h === true) {
        return a.newInstance(g)
      }
      return a.getInstance()
    }
  }, {
    "../queue": 183
  }],
  186: [function(b, c, a) {
    arguments[4][63][0].apply(a, arguments)
  }, {
    "./shared/getEventType": 195,
    "./utils/addEventListener": 198,
    dup: 63
  }],
  187: [function(b, c, a) {
    arguments[4][64][0].apply(a, arguments)
  }, {
    "./shared/getEventType": 195,
    "./utils/dispatchEvent": 199,
    dup: 64
  }],
  188: [function(b, c, a) {
    arguments[4][1][0].apply(a, arguments)
  }, {
    "./shared/camelCasedEventTypes": 189,
    "./shared/prefixHelper": 190,
    "./shared/windowFallbackEventTypes": 191,
    "./utils/eventTypeAvailable": 192,
    dup: 1
  }],
  189: [function(b, c, a) {
    arguments[4][2][0].apply(a, arguments)
  }, {
    dup: 2
  }],
  190: [function(b, c, a) {
    arguments[4][3][0].apply(a, arguments)
  }, {
    dup: 3
  }],
  191: [function(b, c, a) {
    arguments[4][4][0].apply(a, arguments)
  }, {
    dup: 4
  }],
  192: [function(b, c, a) {
    arguments[4][5][0].apply(a, arguments)
  }, {
    dup: 5
  }],
  193: [function(b, c, a) {
    arguments[4][71][0].apply(a, arguments)
  }, {
    dup: 71
  }],
  194: [function(b, c, a) {
    arguments[4][72][0].apply(a, arguments)
  }, {
    "./shared/getEventType": 195,
    "./utils/removeEventListener": 200,
    dup: 72
  }],
  195: [function(b, c, a) {
    arguments[4][73][0].apply(a, arguments)
  }, {
    "@marcom/ac-prefixer/getEventType": 188,
    dup: 73
  }],
  196: [function(b, c, a) {
    arguments[4][75][0].apply(a, arguments)
  }, {
    dup: 75
  }],
  197: [function(b, c, a) {
    arguments[4][76][0].apply(a, arguments)
  }, {
    dup: 76
  }],
  198: [function(b, c, a) {
    arguments[4][77][0].apply(a, arguments)
  }, {
    dup: 77
  }],
  199: [function(b, c, a) {
    arguments[4][78][0].apply(a, arguments)
  }, {
    "@marcom/ac-polyfills/CustomEvent": 356,
    dup: 78
  }],
  200: [function(b, c, a) {
    arguments[4][79][0].apply(a, arguments)
  }, {
    dup: 79
  }],
  201: [function(b, c, a) {
    c.exports = window.Element ? (function(d) {
      return d.matches || d.matchesSelector || d.webkitMatchesSelector || d.mozMatchesSelector || d.msMatchesSelector || d.oMatchesSelector
    }(Element.prototype)) : null
  }, {}],
  202: [function(g, c, i) {
    g("@marcom/ac-polyfills/Array/prototype.indexOf");
    var o = g("@marcom/ac-dom-nodes/isNode");
    var b = g("@marcom/ac-dom-nodes/COMMENT_NODE");
    var k = g("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE");
    var j = g("@marcom/ac-dom-nodes/DOCUMENT_NODE");
    var h = g("@marcom/ac-dom-nodes/ELEMENT_NODE");
    var f = g("@marcom/ac-dom-nodes/TEXT_NODE");
    var a = function(r, q) {
      if (!o(r)) {
        return false
      }
      if (typeof q === "number") {
        return (r.nodeType === q)
      }
      return (q.indexOf(r.nodeType) !== -1)
    };
    var m = [h, j, k];
    var n = " must be an Element, Document, or Document Fragment";
    var p = [h, f, b];
    var l = " must be an Element, TextNode, or Comment";
    var d = " must be a string";
    c.exports = {
      parentNode: function(q, t, s, r) {
        r = r || "node";
        if ((q || t) && !a(q, m)) {
          throw new TypeError(s + ": " + r + n)
        }
      },
      childNode: function(q, t, s, r) {
        r = r || "node";
        if (!q && !t) {
          return
        }
        if (!a(q, p)) {
          throw new TypeError(s + ": " + r + l)
        }
      },
      selector: function(q, t, s, r) {
        r = r || "selector";
        if ((q || t) && typeof q !== "string") {
          throw new TypeError(s + ": " + r + d)
        }
      }
    }
  }, {
    "@marcom/ac-dom-nodes/COMMENT_NODE": 212,
    "@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE": 213,
    "@marcom/ac-dom-nodes/DOCUMENT_NODE": 214,
    "@marcom/ac-dom-nodes/ELEMENT_NODE": 216,
    "@marcom/ac-dom-nodes/TEXT_NODE": 217,
    "@marcom/ac-dom-nodes/isNode": 234,
    "@marcom/ac-polyfills/Array/prototype.indexOf": 353
  }],
  203: [function(d, f, c) {
    var g = d("@marcom/ac-dom-nodes/isElement");
    var i = d("./internal/validate");
    var a = d("./internal/nativeMatches");
    var h = d("./shims/matchesSelector");
    f.exports = function b(k, j) {
      i.selector(j, true, "matchesSelector");
      if (!g(k)) {
        return false
      }
      if (!a) {
        return h(k, j)
      }
      return a.call(k, j)
    }
  }, {
    "./internal/nativeMatches": 201,
    "./internal/validate": 202,
    "./shims/matchesSelector": 205,
    "@marcom/ac-dom-nodes/isElement": 233
  }],
  204: [function(b, c, a) {
    b("@marcom/ac-polyfills/Array/prototype.slice");
    var h = b("./internal/validate");
    var g = b("./shims/querySelectorAll");
    var f = ("querySelectorAll" in document);
    c.exports = function d(i, j) {
      j = j || document;
      h.parentNode(j, true, "querySelectorAll", "context");
      h.selector(i, true, "querySelectorAll");
      if (!f) {
        return g(i, j)
      }
      return Array.prototype.slice.call(j.querySelectorAll(i))
    }
  }, {
    "./internal/validate": 202,
    "./shims/querySelectorAll": 206,
    "@marcom/ac-polyfills/Array/prototype.slice": 355
  }],
  205: [function(c, d, b) {
    var f = c("../querySelectorAll");
    d.exports = function a(l, g) {
      var k = l.parentNode || document;
      var h = f(g, k);
      var j;
      for (j = 0; j < h.length; j++) {
        if (h[j] === l) {
          return true
        }
      }
      return false
    }
  }, {
    "../querySelectorAll": 204
  }],
  206: [function(c, b, f) {
    c("@marcom/ac-polyfills/Array/prototype.indexOf");
    var j = c("@marcom/ac-dom-nodes/isElement");
    var h = c("@marcom/ac-dom-nodes/isDocumentFragment");
    var k = c("@marcom/ac-dom-nodes/remove");
    var d = "_ac_qsa_";
    var i = function(n, l) {
      var m;
      if (l === document) {
        return true
      }
      m = n;
      while ((m = m.parentNode) && j(m)) {
        if (m === l) {
          return true
        }
      }
      return false
    };
    var g = function(l) {
      if ("recalc" in l) {
        l.recalc(false)
      } else {
        document.recalc(false)
      }
      window.scrollBy(0, 0)
    };
    b.exports = function a(l, n) {
      var p = document.createElement("style");
      var q = d + (Math.random() + "").slice(-6);
      var m = [];
      var o;
      n = n || document;
      document[q] = [];
      if (h(n)) {
        n.appendChild(p)
      } else {
        document.documentElement.firstChild.appendChild(p)
      }
      p.styleSheet.cssText = "*{display:recalc;}" + l + '{ac-qsa:expression(document["' + q + '"] && document["' + q + '"].push(this));}';
      g(n);
      while (document[q].length) {
        o = document[q].shift();
        o.style.removeAttribute("ac-qsa");
        if (m.indexOf(o) === -1 && i(o, n)) {
          m.push(o)
        }
      }
      document[q] = null;
      k(p);
      g(n);
      return m
    }
  }, {
    "@marcom/ac-dom-nodes/isDocumentFragment": 231,
    "@marcom/ac-dom-nodes/isElement": 233,
    "@marcom/ac-dom-nodes/remove": 237,
    "@marcom/ac-polyfills/Array/prototype.indexOf": 353
  }],
  207: [function(b, c, a) {
    c.exports.EventEmitter = b("./ac-event-emitter/EventEmitter")
  }, {
    "./ac-event-emitter/EventEmitter": 208
  }],
  208: [function(d, c, f) {
    var h = "EventEmitter:propagation";
    var k = function(l) {
      if (l) {
        this.context = l
      }
    };
    var g = k.prototype;
    var i = function() {
      if (!this.hasOwnProperty("_events") && typeof this._events !== "object") {
        this._events = {}
      }
      return this._events
    };
    var a = function(m, o) {
      var p = m[0];
      var q = m[1];
      var n = m[2];
      if ((typeof p !== "string" && typeof p !== "object") || p === null || Array.isArray(p)) {
        throw new TypeError("Expecting event name to be a string or object.")
      }
      if ((typeof p === "string") && !q) {
        throw new Error("Expecting a callback function to be provided.")
      }
      if (q && (typeof q !== "function")) {
        if (typeof p === "object" && typeof q === "object") {
          n = q
        } else {
          throw new TypeError("Expecting callback to be a function.")
        }
      }
      if (typeof p === "object") {
        for (var l in p) {
          o.call(this, l, p[l], n)
        }
      }
      if (typeof p === "string") {
        p = p.split(" ");
        p.forEach(function(r) {
          o.call(this, r, q, n)
        }, this)
      }
    };
    var j = function(o, p) {
      var l;
      var m;
      var n;
      l = i.call(this)[o];
      if (!l || l.length === 0) {
        return
      }
      l = l.slice();
      this._stoppedImmediatePropagation = false;
      for (m = 0, n = l.length; m < n; m++) {
        if (this._stoppedImmediatePropagation || p(l[m], m)) {
          break
        }
      }
    };
    var b = function(m, n, o) {
      var l = -1;
      j.call(this, n, function(q, p) {
        if (q.callback === o) {
          l = p;
          return true
        }
      });
      if (l === -1) {
        return
      }
      m[n].splice(l, 1)
    };
    g.on = function() {
      var l = i.call(this);
      a.call(this, arguments, function(n, o, m) {
        l[n] = l[n] || (l[n] = []);
        l[n].push({
          callback: o,
          context: m
        })
      });
      return this
    };
    g.once = function() {
      a.call(this, arguments, function(m, o, l) {
        var n = function(p) {
          o.call(l || this, p);
          this.off(m, n)
        };
        this.on(m, n, this)
      });
      return this
    };
    g.off = function(n, p) {
      var m = i.call(this);
      if (arguments.length === 0) {
        this._events = {}
      } else {
        if (!n || (typeof n !== "string" && typeof n !== "object") || Array.isArray(n)) {
          throw new TypeError("Expecting event name to be a string or object.")
        }
      }
      if (typeof n === "object") {
        for (var o in n) {
          b.call(this, m, o, n[o])
        }
      }
      if (typeof n === "string") {
        var l = n.split(" ");
        if (l.length === 1) {
          if (p) {
            b.call(this, m, n, p)
          } else {
            m[n] = []
          }
        } else {
          l.forEach(function(q) {
            m[q] = []
          })
        }
      }
      return this
    };
    g.trigger = function(m, n, l) {
      if (!m) {
        throw new Error("trigger method requires an event name")
      }
      if (typeof m !== "string") {
        throw new TypeError("Expecting event names to be a string.")
      }
      if (l && typeof l !== "boolean") {
        throw new TypeError("Expecting doNotPropagate to be a boolean.")
      }
      m = m.split(" ");
      m.forEach(function(o) {
        j.call(this, o, function(p) {
          p.callback.call(p.context || this.context || this, n)
        }.bind(this));
        if (!l) {
          j.call(this, h, function(q) {
            var p = o;
            if (q.prefix) {
              p = q.prefix + p
            }
            q.emitter.trigger(p, n)
          })
        }
      }, this);
      return this
    };
    g.propagateTo = function(m, n) {
      var l = i.call(this);
      if (!l[h]) {
        this._events[h] = []
      }
      l[h].push({
        emitter: m,
        prefix: n
      })
    };
    g.stopPropagatingTo = function(o) {
      var m = i.call(this);
      if (!o) {
        m[h] = [];
        return
      }
      var p = m[h];
      var n = p.length;
      var l;
      for (l = 0; l < n; l++) {
        if (p[l].emitter === o) {
          p.splice(l, 1);
          break
        }
      }
    };
    g.stopImmediatePropagation = function() {
      this._stoppedImmediatePropagation = true
    };
    g.has = function(l, s, p) {
      var o = i.call(this);
      var m = o[l];
      if (arguments.length === 0) {
        return Object.keys(o)
      }
      if (!m) {
        return false
      }
      if (!s) {
        return (m.length > 0) ? true : false
      }
      for (var n = 0, q = m.length; n < q; n++) {
        var r = m[n];
        if (p && s && r.context === p && r.callback === s) {
          return true
        } else {
          if (s && !p && r.callback === s) {
            return true
          }
        }
      }
      return false
    };
    c.exports = k
  }, {}],
  209: [function(b, c, a) {
    c.exports = {
      DOMEmitter: b("./ac-dom-emitter/DOMEmitter")
    }
  }, {
    "./ac-dom-emitter/DOMEmitter": 210
  }],
  210: [function(c, b, d) {
    var f;
    var k = c("ac-event-emitter").EventEmitter,
      j = c("./DOMEmitterEvent"),
      g = {
        addEventListener: c("@marcom/ac-dom-events/addEventListener"),
        removeEventListener: c("@marcom/ac-dom-events/removeEventListener"),
        dispatchEvent: c("@marcom/ac-dom-events/dispatchEvent")
      },
      a = {
        querySelectorAll: c("@marcom/ac-dom-traversal/querySelectorAll"),
        matchesSelector: c("@marcom/ac-dom-traversal/matchesSelector")
      };
    var i = "dom-emitter";

    function h(l) {
      if (l === null) {
        return
      }
      this.el = l;
      this._bindings = {};
      this._delegateFuncs = {};
      this._eventEmitter = new k()
    }
    f = h.prototype;
    f.on = function() {
      this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments, 0), this._on);
      return this
    };
    f.once = function() {
      this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments, 0), this._once);
      return this
    };
    f.off = function() {
      this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments, 0), this._off);
      return this
    };
    f.has = function(l, q, p, n) {
      var o, r;
      if (typeof q === "string") {
        o = q;
        r = p
      } else {
        r = q;
        n = p
      }
      if (o) {
        var m = this._getDelegateFuncBindingIdx(l, o, r, n, true);
        if (m > -1) {
          return true
        }
        return false
      }
      if (this._eventEmitter && this._eventEmitter.has.apply(this._eventEmitter, arguments)) {
        return true
      }
      return false
    };
    f.trigger = function(n, m, o, s) {
      n = this._parseEventNames(n);
      n = this._cleanStringData(n);
      var q, r, p, l = n.length;
      if (typeof m === "string") {
        q = this._cleanStringData(m);
        r = o
      } else {
        r = m;
        s = o
      }
      for (p = 0; p < l; p++) {
        this._triggerDOMEvents(n[p], r, q)
      }
      return this
    };
    f.emitterTrigger = function(m, o, p) {
      if (!this._eventEmitter) {
        return this
      }
      m = this._parseEventNames(m);
      m = this._cleanStringData(m);
      o = new j(o, this);
      var n, l = m.length;
      for (n = 0; n < l; n++) {
        this._eventEmitter.trigger(m[n], o, p)
      }
      return this
    };
    f.propagateTo = function(l, m) {
      this._eventEmitter.propagateTo(l, m);
      return this
    };
    f.stopPropagatingTo = function(l) {
      this._eventEmitter.stopPropagatingTo(l);
      return this
    };
    f.stopImmediatePropagation = function() {
      this._eventEmitter.stopImmediatePropagation();
      return this
    };
    f.destroy = function() {
      this._triggerInternalEvent("willdestroy");
      this.off();
      var l;
      for (l in this) {
        if (this.hasOwnProperty(l)) {
          this[l] = null
        }
      }
    };
    f._parseEventNames = function(l) {
      if (!l) {
        return [l]
      }
      return l.split(" ")
    };
    f._onListenerEvent = function(n, m) {
      var l = new j(m, this);
      this._eventEmitter.trigger(n, l, false)
    };
    f._setListener = function(l) {
      this._bindings[l] = this._onListenerEvent.bind(this, l);
      g.addEventListener(this.el, l, this._bindings[l])
    };
    f._removeListener = function(l) {
      g.removeEventListener(this.el, l, this._bindings[l]);
      this._bindings[l] = null
    };
    f._triggerInternalEvent = function(l, m) {
      this.emitterTrigger(i + ":" + l, m)
    };
    f._normalizeArgumentsAndCall = function(l, n) {
      var r = {};
      if (l.length === 0) {
        n.call(this, r);
        return
      }
      if (typeof l[0] === "string" || l[0] === null) {
        l = this._cleanStringData(l);
        r.events = l[0];
        if (typeof l[1] === "string") {
          r.delegateQuery = l[1];
          r.callback = l[2];
          r.context = l[3]
        } else {
          r.callback = l[1];
          r.context = l[2]
        }
        n.call(this, r);
        return
      }
      var m, p, q = ":",
        o = l[0];
      for (m in o) {
        if (o.hasOwnProperty(m)) {
          r = {};
          p = this._cleanStringData(m.split(q));
          r.events = p[0];
          r.delegateQuery = p[1];
          r.callback = o[m];
          r.context = l[1];
          n.call(this, r)
        }
      }
    };
    f._registerDelegateFunc = function(n, p, q, l, o) {
      var m = this._delegateFunc.bind(this, n, p, q, o);
      this._delegateFuncs[p] = this._delegateFuncs[p] || {};
      this._delegateFuncs[p][n] = this._delegateFuncs[p][n] || [];
      this._delegateFuncs[p][n].push({
        func: l,
        context: o,
        delegateFunc: m
      });
      return m
    };
    f._cleanStringData = function(o) {
      var n = false;
      if (typeof o === "string") {
        o = [o];
        n = true
      }
      var m = [],
        q, s, r, p, l = o.length;
      for (q = 0; q < l; q++) {
        s = o[q];
        if (typeof s === "string") {
          if (s === "" || s === " ") {
            continue
          }
          r = s.length;
          while (s[0] === " ") {
            s = s.slice(1, r);
            r--
          }
          while (s[r - 1] === " ") {
            s = s.slice(0, r - 1);
            r--
          }
        }
        m.push(s)
      }
      if (n) {
        return m[0]
      }
      return m
    };
    f._unregisterDelegateFunc = function(n, q, l, p) {
      if (!this._delegateFuncs[q] || !this._delegateFuncs[q][n]) {
        return
      }
      var o = this._getDelegateFuncBindingIdx(n, q, l, p),
        m;
      if (o > -1) {
        m = this._delegateFuncs[q][n][o].delegateFunc;
        this._delegateFuncs[q][n].splice(o, 1);
        if (this._delegateFuncs[q][n].length === 0) {
          this._delegateFuncs[q][n] = null
        }
      }
      return m
    };
    f._unregisterDelegateFuncs = function(l, n) {
      if (!this._delegateFuncs[n]) {
        return
      }
      if (l !== null && !this._delegateFuncs[n][l]) {
        return
      }
      if (l === null) {
        var m;
        for (m in this._delegateFuncs[n]) {
          if (this._delegateFuncs[n].hasOwnProperty(m)) {
            this._unbindDelegateFunc(m, n)
          }
        }
        return
      }
      this._unbindDelegateFunc(l, n)
    };
    f._unbindDelegateFunc = function(l, n) {
      var o, p, m = 0;
      while (this._delegateFuncs[n][l] && this._delegateFuncs[n][l][m]) {
        o = this._delegateFuncs[n][l][m];
        p = this._delegateFuncs[n][l][m].length;
        this._off({
          events: l,
          delegateQuery: n,
          callback: o.func,
          context: o.context
        });
        if (this._delegateFuncs[n][l] && p === this._delegateFuncs[n][l].length) {
          m++
        }
      }
      o = p = null
    };
    f._unregisterDelegateFuncsByEvent = function(l) {
      var m;
      for (m in this._delegateFuncs) {
        if (this._delegateFuncs.hasOwnProperty(m)) {
          this._unregisterDelegateFuncs(l, m)
        }
      }
    };
    f._delegateFunc = function(l, p, r, n, q) {
      if (this._targetHasDelegateAncestor(q.target, p)) {
        var m = Array.prototype.slice.call(arguments, 0),
          o = m.slice(4, m.length);
        n = n || window;
        if (typeof q.detail === "object") {
          o[0] = q.detail
        }
        r.apply(n, o)
      }
    };
    f._targetHasDelegateAncestor = function(n, m) {
      var l = n;
      while (l && l !== this.el && l !== document.documentElement) {
        if (a.matchesSelector(l, m)) {
          return true
        }
        l = l.parentNode
      }
      return false
    };
    f._on = function(p) {
      var m = p.events,
        q = p.callback,
        o = p.delegateQuery,
        n = p.context,
        l = p.unboundCallback || q;
      m = this._parseEventNames(m);
      m.forEach(function(v, r, t, u, s) {
        if (!this.has(s)) {
          this._setListener(s)
        }
        if (typeof u === "string") {
          v = this._registerDelegateFunc(s, u, v, r, t)
        }
        this._triggerInternalEvent("willon", {
          evt: s,
          callback: v,
          context: t,
          delegateQuery: u
        });
        this._eventEmitter.on(s, v, t);
        this._triggerInternalEvent("didon", {
          evt: s,
          callback: v,
          context: t,
          delegateQuery: u
        })
      }.bind(this, q, l, n, o));
      m = q = l = o = n = null
    };
    f._off = function(q) {
      var m = q.events,
        r = q.callback,
        p = q.delegateQuery,
        o = q.context,
        l = q.unboundCallback || r;
      if (typeof m === "undefined") {
        this._eventEmitter.off();
        var n;
        for (n in this._bindings) {
          if (this._bindings.hasOwnProperty(n)) {
            this._removeListener(n)
          }
        }
        for (n in this._delegateFuncs) {
          if (this._delegateFuncs.hasOwnProperty(n)) {
            this._delegateFuncs[n] = null
          }
        }
        return
      }
      m = this._parseEventNames(m);
      m.forEach(function(w, s, u, v, t) {
        if (typeof v === "string" && typeof s === "function") {
          w = this._unregisterDelegateFunc(t, v, s, u);
          if (!w) {
            return
          }
        }
        if (typeof v === "string" && typeof w === "undefined") {
          this._unregisterDelegateFuncs(t, v);
          return
        }
        if (typeof t === "string" && typeof w === "undefined") {
          this._unregisterDelegateFuncsByEvent(t);
          if (typeof v === "string") {
            return
          }
        }
        this._triggerInternalEvent("willoff", {
          evt: t,
          callback: w,
          context: u,
          delegateQuery: v
        });
        this._eventEmitter.off(t, w, u);
        this._triggerInternalEvent("didoff", {
          evt: t,
          callback: w,
          context: u,
          delegateQuery: v
        });
        if (!this.has(t)) {
          this._removeListener(t)
        }
      }.bind(this, r, l, o, p));
      m = r = l = p = o = null
    };
    f._once = function(o) {
      var l = o.events,
        p = o.callback,
        n = o.delegateQuery,
        m = o.context;
      l = this._parseEventNames(l);
      l.forEach(function(t, r, s, q) {
        if (typeof s === "string") {
          return this._handleDelegateOnce(q, t, r, s)
        }
        if (!this.has(q)) {
          this._setListener(q)
        }
        this._triggerInternalEvent("willonce", {
          evt: q,
          callback: t,
          context: r,
          delegateQuery: s
        });
        this._eventEmitter.once.call(this, q, t, r);
        this._triggerInternalEvent("didonce", {
          evt: q,
          callback: t,
          context: r,
          delegateQuery: s
        })
      }.bind(this, p, m, n));
      l = p = n = m = null
    };
    f._handleDelegateOnce = function(l, o, m, n) {
      this._triggerInternalEvent("willonce", {
        evt: l,
        callback: o,
        context: m,
        delegateQuery: n
      });
      this._on({
        events: l,
        context: m,
        delegateQuery: n,
        callback: this._getDelegateOnceCallback.bind(this, l, o, m, n),
        unboundCallback: o
      });
      this._triggerInternalEvent("didonce", {
        evt: l,
        callback: o,
        context: m,
        delegateQuery: n
      });
      return this
    };
    f._getDelegateOnceCallback = function(l, q, n, p) {
      var m = Array.prototype.slice.call(arguments, 0),
        o = m.slice(4, m.length);
      q.apply(n, o);
      this._off({
        events: l,
        delegateQuery: p,
        callback: q,
        context: n
      })
    };
    f._getDelegateFuncBindingIdx = function(s, p, n, l, t) {
      var r = -1;
      if (this._delegateFuncs[p] && this._delegateFuncs[p][s]) {
        var o, m, q = this._delegateFuncs[p][s].length;
        for (o = 0; o < q; o++) {
          m = this._delegateFuncs[p][s][o];
          if (t && typeof n === "undefined") {
            n = m.func
          }
          if (m.func === n && m.context === l) {
            r = o;
            break
          }
        }
      }
      return r
    };
    f._triggerDOMEvents = function(n, q, p) {
      var m = [this.el];
      if (p) {
        m = a.querySelectorAll(p, this.el)
      }
      var o, r, l = m.length;
      for (o = 0; o < l; o++) {
        g.dispatchEvent(m[o], n, {
          bubbles: true,
          cancelable: true,
          detail: q
        })
      }
    };
    b.exports = h
  }, {
    "./DOMEmitterEvent": 211,
    "@marcom/ac-dom-events/addEventListener": 186,
    "@marcom/ac-dom-events/dispatchEvent": 187,
    "@marcom/ac-dom-events/removeEventListener": 194,
    "@marcom/ac-dom-traversal/matchesSelector": 203,
    "@marcom/ac-dom-traversal/querySelectorAll": 204,
    "ac-event-emitter": 207
  }],
  211: [function(b, c, a) {
    var f = {
      preventDefault: b("@marcom/ac-dom-events/preventDefault"),
      stopPropagation: b("@marcom/ac-dom-events/stopPropagation"),
      target: b("@marcom/ac-dom-events/target")
    };
    var d;
    var g = function(i, h) {
      this._domEmitter = h;
      this.originalEvent = i || {};
      this._originalTarget = f.target(this.originalEvent);
      this.target = this._originalTarget || this._domEmitter.el;
      this.currentTarget = this._domEmitter.el;
      this.timeStamp = this.originalEvent.timeStamp || Date.now();
      if (this._isDOMEvent(this.originalEvent)) {
        if (typeof this.originalEvent.detail === "object") {
          this.data = this.originalEvent.detail
        }
      } else {
        if (i) {
          this.data = this.originalEvent;
          this.originalEvent = {}
        }
      }
    };
    d = g.prototype;
    d.preventDefault = function() {
      f.preventDefault(this.originalEvent)
    };
    d.stopPropagation = function() {
      f.stopPropagation(this.originalEvent)
    };
    d.stopImmediatePropagation = function() {
      if (this.originalEvent.stopImmediatePropagation) {
        this.originalEvent.stopImmediatePropagation()
      }
      this._domEmitter.stopImmediatePropagation()
    };
    d._isDOMEvent = function(h) {
      if (this._originalTarget || (document.createEvent !== "undefined" && typeof CustomEvent !== "undefined" && h instanceof CustomEvent)) {
        return true
      }
      return false
    };
    c.exports = g
  }, {
    "@marcom/ac-dom-events/preventDefault": 193,
    "@marcom/ac-dom-events/stopPropagation": 196,
    "@marcom/ac-dom-events/target": 197
  }],
  212: [function(b, c, a) {
    arguments[4][85][0].apply(a, arguments)
  }, {
    dup: 85
  }],
  213: [function(b, c, a) {
    arguments[4][86][0].apply(a, arguments)
  }, {
    dup: 86
  }],
  214: [function(b, c, a) {
    arguments[4][87][0].apply(a, arguments)
  }, {
    dup: 87
  }],
  215: [function(b, c, a) {
    arguments[4][88][0].apply(a, arguments)
  }, {
    dup: 88
  }],
  216: [function(b, c, a) {
    arguments[4][89][0].apply(a, arguments)
  }, {
    dup: 89
  }],
  217: [function(b, c, a) {
    arguments[4][90][0].apply(a, arguments)
  }, {
    dup: 90
  }],
  218: [function(b, c, a) {
    arguments[4][91][0].apply(a, arguments)
  }, {
    "./COMMENT_NODE": 212,
    "./DOCUMENT_FRAGMENT_NODE": 213,
    "./DOCUMENT_NODE": 214,
    "./DOCUMENT_TYPE_NODE": 215,
    "./ELEMENT_NODE": 216,
    "./TEXT_NODE": 217,
    "./createDocumentFragment": 219,
    "./filterByNodeType": 220,
    "./hasAttribute": 221,
    "./indexOf": 222,
    "./insertAfter": 223,
    "./insertBefore": 224,
    "./insertFirstChild": 225,
    "./insertLastChild": 226,
    "./isComment": 229,
    "./isDocument": 230,
    "./isDocumentFragment": 231,
    "./isDocumentType": 232,
    "./isElement": 233,
    "./isNode": 234,
    "./isNodeList": 235,
    "./isTextNode": 236,
    "./remove": 237,
    "./replace": 238,
    dup: 91
  }],
  219: [function(b, c, a) {
    arguments[4][92][0].apply(a, arguments)
  }, {
    dup: 92
  }],
  220: [function(b, c, a) {
    arguments[4][93][0].apply(a, arguments)
  }, {
    "./ELEMENT_NODE": 216,
    "./internal/isNodeType": 227,
    "@marcom/ac-polyfills/Array/prototype.filter": 351,
    "@marcom/ac-polyfills/Array/prototype.slice": 355,
    dup: 93
  }],
  221: [function(b, c, a) {
    arguments[4][94][0].apply(a, arguments)
  }, {
    dup: 94
  }],
  222: [function(b, c, a) {
    arguments[4][95][0].apply(a, arguments)
  }, {
    "./filterByNodeType": 220,
    "./internal/validate": 228,
    "@marcom/ac-polyfills/Array/prototype.indexOf": 353,
    "@marcom/ac-polyfills/Array/prototype.slice": 355,
    dup: 95
  }],
  223: [function(b, c, a) {
    arguments[4][96][0].apply(a, arguments)
  }, {
    "./internal/validate": 228,
    dup: 96
  }],
  224: [function(b, c, a) {
    arguments[4][97][0].apply(a, arguments)
  }, {
    "./internal/validate": 228,
    dup: 97
  }],
  225: [function(b, c, a) {
    arguments[4][98][0].apply(a, arguments)
  }, {
    "./internal/validate": 228,
    dup: 98
  }],
  226: [function(b, c, a) {
    arguments[4][99][0].apply(a, arguments)
  }, {
    "./internal/validate": 228,
    dup: 99
  }],
  227: [function(b, c, a) {
    arguments[4][100][0].apply(a, arguments)
  }, {
    "../isNode": 234,
    dup: 100
  }],
  228: [function(b, c, a) {
    arguments[4][101][0].apply(a, arguments)
  }, {
    "../COMMENT_NODE": 212,
    "../DOCUMENT_FRAGMENT_NODE": 213,
    "../ELEMENT_NODE": 216,
    "../TEXT_NODE": 217,
    "./isNodeType": 227,
    dup: 101
  }],
  229: [function(b, c, a) {
    arguments[4][102][0].apply(a, arguments)
  }, {
    "./COMMENT_NODE": 212,
    "./internal/isNodeType": 227,
    dup: 102
  }],
  230: [function(b, c, a) {
    arguments[4][103][0].apply(a, arguments)
  }, {
    "./DOCUMENT_NODE": 214,
    "./internal/isNodeType": 227,
    dup: 103
  }],
  231: [function(b, c, a) {
    arguments[4][104][0].apply(a, arguments)
  }, {
    "./DOCUMENT_FRAGMENT_NODE": 213,
    "./internal/isNodeType": 227,
    dup: 104
  }],
  232: [function(b, c, a) {
    arguments[4][105][0].apply(a, arguments)
  }, {
    "./DOCUMENT_TYPE_NODE": 215,
    "./internal/isNodeType": 227,
    dup: 105
  }],
  233: [function(b, c, a) {
    arguments[4][106][0].apply(a, arguments)
  }, {
    "./ELEMENT_NODE": 216,
    "./internal/isNodeType": 227,
    dup: 106
  }],
  234: [function(b, c, a) {
    arguments[4][107][0].apply(a, arguments)
  }, {
    dup: 107
  }],
  235: [function(b, c, a) {
    arguments[4][108][0].apply(a, arguments)
  }, {
    dup: 108
  }],
  236: [function(b, c, a) {
    arguments[4][109][0].apply(a, arguments)
  }, {
    "./TEXT_NODE": 217,
    "./internal/isNodeType": 227,
    dup: 109
  }],
  237: [function(b, c, a) {
    arguments[4][110][0].apply(a, arguments)
  }, {
    "./internal/validate": 228,
    dup: 110
  }],
  238: [function(b, c, a) {
    arguments[4][111][0].apply(a, arguments)
  }, {
    "./internal/validate": 228,
    dup: 111
  }],
  239: [function(d, f, c) {
    var b = d("./shared/stylePropertyCache");
    var h = d("./getStyleProperty");
    var g = d("./getStyleValue");
    f.exports = function a(k, j) {
      var i;
      k = h(k);
      if (!k) {
        return false
      }
      i = b[k].css;
      if (typeof j !== "undefined") {
        j = g(k, j);
        if (j === false) {
          return false
        }
        i += ":" + j + ";"
      }
      return i
    }
  }, {
    "./getStyleProperty": 240,
    "./getStyleValue": 241,
    "./shared/stylePropertyCache": 244
  }],
  240: [function(b, c, a) {
    arguments[4][11][0].apply(a, arguments)
  }, {
    "./shared/getStyleTestElement": 242,
    "./shared/prefixHelper": 243,
    "./shared/stylePropertyCache": 244,
    "./utils/toCSS": 247,
    "./utils/toDOM": 248,
    dup: 11
  }],
  241: [function(b, c, a) {
    arguments[4][12][0].apply(a, arguments)
  }, {
    "./getStyleProperty": 240,
    "./shared/prefixHelper": 243,
    "./shared/stylePropertyCache": 244,
    "./shared/styleValueAvailable": 245,
    dup: 12
  }],
  242: [function(b, c, a) {
    arguments[4][14][0].apply(a, arguments)
  }, {
    dup: 14
  }],
  243: [function(b, c, a) {
    arguments[4][3][0].apply(a, arguments)
  }, {
    dup: 3
  }],
  244: [function(b, c, a) {
    arguments[4][16][0].apply(a, arguments)
  }, {
    dup: 16
  }],
  245: [function(b, c, a) {
    arguments[4][17][0].apply(a, arguments)
  }, {
    "./getStyleTestElement": 242,
    "./stylePropertyCache": 244,
    dup: 17
  }],
  246: [function(c, d, a) {
    var b = /(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
    d.exports = function f(g) {
      g = String.prototype.replace.call(g, b, "");
      return g.charAt(0).toLowerCase() + g.substring(1)
    }
  }, {}],
  247: [function(b, c, a) {
    arguments[4][20][0].apply(a, arguments)
  }, {
    dup: 20
  }],
  248: [function(b, c, a) {
    arguments[4][21][0].apply(a, arguments)
  }, {
    dup: 21
  }],
  249: [function(b, c, a) {
    c.exports = {
      getStyle: b("./getStyle"),
      setStyle: b("./setStyle")
    }
  }, {
    "./getStyle": 250,
    "./setStyle": 252
  }],
  250: [function(c, d, b) {
    var f = c("@marcom/ac-prefixer/getStyleProperty");
    var g = c("@marcom/ac-prefixer/stripPrefixes");
    d.exports = function a() {
      var k = Array.prototype.slice.call(arguments);
      var p = k.shift(k);
      var m = window.getComputedStyle(p);
      var l = {};
      var o;
      var h;
      var n;
      var j;
      if (typeof k[0] !== "string") {
        k = k[0]
      }
      for (j = 0; j < k.length; j++) {
        o = k[j];
        h = f(o);
        if (h) {
          o = g(h);
          n = m[h];
          if (!n || n === "auto") {
            n = null
          }
          if (n) {
            n = g(n)
          }
        } else {
          n = null
        }
        l[o] = n
      }
      return l
    }
  }, {
    "@marcom/ac-prefixer/getStyleProperty": 240,
    "@marcom/ac-prefixer/stripPrefixes": 246
  }],
  251: [function(c, d, b) {
    d.exports = function a(j) {
      var h;
      var g;
      var f;
      if (!j && j !== 0) {
        return ""
      }
      if (Array.isArray(j)) {
        return j + ""
      }
      if (typeof j === "object") {
        h = "";
        g = Object.keys(j);
        for (f = 0; f < g.length; f++) {
          h += g[f] + "(" + j[g[f]] + ") "
        }
        return h.trim()
      }
      return j
    }
  }, {}],
  252: [function(d, f, c) {
    var a = d("@marcom/ac-prefixer/getStyleCSS");
    var g = d("@marcom/ac-prefixer/getStyleProperty");
    var b = d("./internal/normalizeValue");
    f.exports = function h(o, l) {
      var k = "";
      var j;
      var n;
      var i;
      var m;
      var p;
      if (typeof l !== "object") {
        throw new TypeError("setStyle: styles must be an Object")
      }
      for (n in l) {
        m = b(l[n]);
        if (!m && m !== 0) {
          i = g(n);
          if ("removeAttribute" in o.style) {
            o.style.removeAttribute(i)
          } else {
            o.style[i] = ""
          }
        } else {
          j = a(n, m);
          if (j !== false) {
            k += " " + j
          }
        }
      }
      if (k.length) {
        p = o.style.cssText;
        if (p.charAt(p.length - 1) !== ";") {
          p += ";"
        }
        p += k;
        o.style.cssText = p
      }
      return o
    }
  }, {
    "./internal/normalizeValue": 251,
    "@marcom/ac-prefixer/getStyleCSS": 239,
    "@marcom/ac-prefixer/getStyleProperty": 240
  }],
  253: [function(b, c, a) {
    arguments[4][126][0].apply(a, arguments)
  }, {
    "./ac-event-emitter-micro/EventEmitterMicro": 254,
    dup: 126
  }],
  254: [function(b, c, a) {
    arguments[4][127][0].apply(a, arguments)
  }, {
    dup: 127
  }],
  255: [function(b, c, a) {
    arguments[4][128][0].apply(a, arguments)
  }, {
    "./ac-shared-instance/SharedInstance": 256,
    dup: 128
  }],
  256: [function(b, c, a) {
    arguments[4][129][0].apply(a, arguments)
  }, {
    dup: 129
  }],
  257: [function(b, c, a) {
    arguments[4][130][0].apply(a, arguments)
  }, {
    "@marcom/ac-shared-instance": 255,
    dup: 130
  }],
  258: [function(b, c, a) {
    arguments[4][131][0].apply(a, arguments)
  }, {
    dup: 131
  }],
  259: [function(b, c, a) {
    arguments[4][132][0].apply(a, arguments)
  }, {
    "../Date/now": 258,
    dup: 132
  }],
  260: [function(b, c, a) {
    arguments[4][128][0].apply(a, arguments)
  }, {
    "./ac-shared-instance/SharedInstance": 261,
    dup: 128
  }],
  261: [function(b, c, a) {
    arguments[4][129][0].apply(a, arguments)
  }, {
    dup: 129
  }],
  262: [function(b, c, a) {
    arguments[4][135][0].apply(a, arguments)
  }, {
    "@marcom/ac-polyfills/performance/now": 259,
    dup: 135
  }],
  263: [function(b, c, a) {
    arguments[4][136][0].apply(a, arguments)
  }, {
    "./RAFExecutor": 262,
    "@marcom/ac-shared-instance": 260,
    dup: 136
  }],
  264: [function(b, c, a) {
    arguments[4][137][0].apply(a, arguments)
  }, {
    "@marcom/ac-event-emitter-micro": 253,
    "@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance": 257,
    "@marcom/ac-raf-executor/sharedRAFExecutorInstance": 263,
    dup: 137
  }],
  265: [function(b, c, a) {
    b("@marcom/ac-polyfills/Promise");
    b("@marcom/ac-polyfills/JSON");
    c.exports = {
      createFlow: b("./ac-flow/flow/factory"),
      Player: b("./ac-flow/flow/Player")
    }
  }, {
    "./ac-flow/flow/Player": 268,
    "./ac-flow/flow/factory": 279,
    "@marcom/ac-polyfills/JSON": 359,
    "@marcom/ac-polyfills/Promise": 362
  }],
  266: [function(b, a, c) {
    var j = b("@marcom/ac-event-emitter-micro").EventEmitterMicro,
      i = b("./compositor/decorator/Keyframe"),
      h = b("./compositor/decorator/Superframe"),
      g = b("./compositor/decorator/SuperKeyframe"),
      l = b("./compositor/decorator/Cache");
    var k = b("./compositor/Sequence");

    function d(m, o, p, n) {
      j.call(this);
      this._compositor = new k(o, p, n);
      this.options = m || {}
    }
    var f = d.prototype = new j(null);
    f._gotoImageFrame = function(m) {
      if (this._rendering) {
        return Promise.resolve()
      } else {
        if (this._currentFrame === m) {
          return Promise.resolve()
        }
      }
      this._rendering = true;
      return this._compositor.compositeFrames(this._currentFrame, m).then(function() {
        this._rendering = false;
        this._currentFrame = m
      }.bind(this))
    };
    f.init = function() {
      var m;
      if (this.options.element.nodeName === "CANVAS") {
        m = this.options.element
      } else {
        m = document.createElement("canvas");
        this.options.element.appendChild(m)
      }
      this.gotoFrame = this._gotoImageFrame;
      return this._compositor.init(m).then(this._decorateCompositor.bind(this))
    };
    f.resumeLoading = function() {
      return this._compositor.resumeLoading()
    };
    f.pauseLoading = function() {
      this._compositor.pauseLoading()
    };
    f._decorateCompositor = function() {
      var m = this._compositor;
      var o;
      var n;
      if (m) {
        o = this._compositor._diffRender.flowData;
        n = this._compositor.canvas;
        if (o.superframeFrequency) {
          m = new h(m, o.superframeFrequency)
        }
        if (o.version >= 4) {
          m = new i(m)
        }
        if (o.version >= 4 && o.superframeFrequency) {
          m = new g(m)
        }
        if (this.options.keyframeCache) {
          m = new l(m, this.options.keyframeCache)
        }
        if (m === this._compositor) {
          return Promise.resolve()
        } else {
          this._compositor = m;
          return this._compositor.init(n)
        }
      } else {
        return Promise.reject()
      }
    };
    f._destroy = function() {
      this.off();
      this._compositor.destroy()
    };
    if (typeof Object.defineProperties !== "function") {
      Object.defineProperties = function() {}
    }
    Object.defineProperties(f, {
      _currentFrame: {
        value: 0,
        enumerable: false,
        writable: true
      },
      frameCount: {
        get: function() {
          return this._compositor.frameCount
        },
        enumerable: true
      }
    });
    a.exports = d
  }, {
    "./compositor/Sequence": 269,
    "./compositor/decorator/Cache": 270,
    "./compositor/decorator/Keyframe": 271,
    "./compositor/decorator/SuperKeyframe": 272,
    "./compositor/decorator/Superframe": 273,
    "@marcom/ac-event-emitter-micro": 253
  }],
  267: [function(b, c, a) {
    var h = b("@marcom/ac-asset-loader/assetLoader");
    var f = b("./data/provider/Async");
    var g = function(i, j, k) {
      this._manifestUrl = i;
      this._keyframeUrls = j;
      this._imageUrlPattern = k;
      this.state = {
        manifestLoaded: false,
        keyframesLoaded: false,
        diffsLoaded: false,
        diffCountLoaded: 0,
        totalDiffs: null
      };
      this.assets = {
        keyframes: null,
        manifest: null,
        diffs: null
      };
      this._promises = {};
      this._loaders = {};
      this._activeLoaders = [];
      this._resumeQueue = [];
      this._paused = true;
      this._shouldPause = false;
      this._boundOnManifestLoaded = this._onManifestLoaded.bind(this);
      this._boundOnKeyframesLoaded = this._onKeyframesLoaded.bind(this);
      this._boundOnDiffsLoaded = this._onDiffsLoaded.bind(this)
    };
    var d = g.prototype;
    d.setManifestUrl = function(i) {
      this._manifestUrl = i;
      return this
    };
    d.setKeyframeUrls = function(i) {
      this._keyframeUrls = i;
      return this
    };
    d.setImageUrlPattern = function(i) {
      this._imageUrlPattern = i;
      return this
    };
    d.pause = function() {
      this._shouldPause = true;
      var k, j = this._activeLoaders.length;
      for (k = 0; k < j; k++) {
        this._activeLoaders[k].pause()
      }
      this._paused = true
    };
    d.destroy = function() {
      var j, i, k;
      this.pause();
      for (j in this._loaders) {
        if (this._loaders.hasOwnProperty(j)) {
          this._loaders[j].destroy()
        }
      }
      for (i in this._promises) {
        if (this._promises.hasOwnProperty(i)) {
          if (this._promises[i].status() === "pending") {
            this._promises[i].reject()
          }
        }
      }
      for (k in this) {
        if (this.hasOwnProperty(k)) {
          this[k] = null
        }
      }
    };
    d.load = function() {
      if (this._paused && (this._activeLoaders.length > 0 || this._resumeQueue.length > 0)) {
        this._resume();
        return true
      }
    };
    d._resume = function() {
      this._shouldPause = false;
      var n, k = this._activeLoaders.length;
      for (n = 0; n < k; n++) {
        this._activeLoaders[n].load()
      }
      var m, l = this._resumeQueue.length;
      for (m = 0; m < l; m++) {
        this._resumeQueue[m].call(this)
      }
      this._resumeQueue = [];
      this._paused = false
    };
    d.loadManifest = function() {
      if (this._shouldPause) {
        this._resumeQueue.push(this.loadManifest);
        return
      }
      if (this.assets.manifest) {
        return this.assets.manifest
      } else {
        this._paused = false;
        this._loaders.manifest = new f(this._getManifestAssetsData());
        this._activeLoaders.push(this._loaders.manifest);
        return this._loaders.manifest.load().then(this._boundOnManifestLoaded)
      }
    };
    d.loadKeyframes = function() {
      var i;
      if (this._shouldPause) {
        this._resumeQueue.push(this.loadKeyframes)
      }
      if (this.assets.keyframes) {
        i = Promise.resolve(this.assets.keyframes)
      } else {
        this._paused = false;
        this._loaders.keyframes = h.createAssetGroup(this._getKeyframesAssetsData());
        this._activeLoaders.push(this._loaders.keyframes);
        i = this._loaders.keyframes.load().then(this._boundOnKeyframesLoaded)
      }
      this._promises.keyframes = i;
      return this._promises.keyframes
    };
    d.loadDiffs = function() {
      var i;
      if (this._shouldPause) {
        this._resumeQueue.push(this.loadDiffs)
      }
      if (this.assets.diffs) {
        i = this._promises.diffs.resolve(this.assets.diffs)
      } else {
        this._paused = false;
        this._loaders.diffs = h.createAssetGroup(this._getDiffsAssetsData());
        this._activeLoaders.push(this._loaders.diffs);
        i = this._loaders.diffs.load().then(this._boundOnDiffsLoaded)
      }
      this._promises.diffs = i;
      return this._promises.diffs
    };
    d._getManifestAssetsData = function() {
      return this._manifestUrl
    };
    d._getKeyframesAssetsData = function() {
      return this._keyframeUrls
    };
    d._getDiffsAssetsData = function() {
      var l = this.assets.manifest.imagesRequired,
        j = [],
        m, k, n = this._imageUrlPattern.match(/#/g).length;
      for (m = 1; m <= l; m++) {
        k = "0000" + m;
        k = k.substring(k.length - n);
        j.push(this._imageUrlPattern.replace(/#{2,}/g, k))
      }
      return j
    };
    d._onManifestLoaded = function(i) {
      if (this.assets) {
        this.assets.manifest = i;
        this.state.manifestLoaded = true;
        this._paused = true;
        this._removeFromActiveLoaders(this._loaders.manifest);
        return this.assets.manifest
      }
    };
    d._onKeyframesLoaded = function(i) {
      if (this.assets) {
        this.assets.keyframes = i;
        this.state.keyframeLoaded = true;
        this._paused = true;
        this._removeFromActiveLoaders(this._loaders.keyframes);
        return Promise.resolve(this.assets.keyframes)
      }
    };
    d._onDiffsLoaded = function(i) {
      if (this.assets) {
        this.assets.diffs = i;
        this.state.diffsLoaded = true;
        this._paused = true;
        this._removeFromActiveLoaders(this._loaders.diffs);
        return Promise.resolve(this.assets.diffs)
      }
    };
    d._removeFromActiveLoaders = function(l) {
      var k, j = this._activeLoaders.length;
      for (k = 0; k < j; k++) {
        if (this._activeLoaders[k] === l) {
          this._activeLoaders.splice(k, 1);
          return
        }
      }
    };
    c.exports = g
  }, {
    "./data/provider/Async": 277,
    "@marcom/ac-asset-loader/assetLoader": 180
  }],
  268: [function(c, d, b) {
    var h = c("@marcom/ac-dom-emitter").DOMEmitter;
    var a = c("@marcom/ac-raf-emitter/RAFEmitter");

    function g(i, j) {
      this.element = j;
      this._domEmitter = new h(j);
      this._frameRate = 30;
      this.paused = true;
      this.loop = false;
      this._destroyed = false;
      this._flow = i;
      this._rafEmitter = new a();
      this._rafDrawSet = false;
      this._shouldAdvanceToTimeGlobal = false;
      this._shouldGlobalTimeUpdate = false;
      this._shouldLocalTimeUpdate = false;
      this._boundAdvanceTimeToGlobal = this._advanceToTimeGlobal.bind(this);
      this._onBoundGlobalTimeUpdate = this._onGlobalTimeUpdate.bind(this);
      this._onBoundLocalTimeUpdate = this._onLocalTimeUpdate.bind(this);
      this._rafEmitter.on("draw", this._onDraw.bind(this))
    }
    var f = g.prototype;
    f._timeToFrame = function(i) {
      var j;
      j = Math.round(i / this.duration * this._flow.frameCount);
      j = j % (this._flow.frameCount + 1);
      return (j < 0) ? this._flow.frameCount + j : j
    };
    f._advanceToTimeGlobal = function(j) {
      if (this._rafDrawSet) {
        this._prevTime = this._prevTime || j.time;
        this._currentTime += ((j.time - this._prevTime) / 1000) * this.playbackRate;
        this._prevTime = j.time;
        this._pauseAfterRender = false;
        var i = this._timeToFrame(this._currentTime);
        if (!this.loop) {
          if (this.playbackRate > 0 && this._currentTime > this.duration) {
            i = this._flow.frameCount;
            this._currentTime = this.duration;
            this._pauseAfterRender = true
          } else {
            if (this.playbackRate < 0 && this._currentTime < 0) {
              i = 0;
              this._currentTime = 0;
              this._pauseAfterRender = true
            }
          }
        } else {
          this._currentTime = (this.duration + this._currentTime) % this.duration
        }
        if (!this.paused && !this.seeking) {
          return this._flow.gotoFrame(i).then(this._onBoundGlobalTimeUpdate)
        }
      }
    };
    f._onGlobalTimeUpdate = function() {
      this.trigger("timeupdate");
      if (this._pauseAfterRender) {
        this.paused = true;
        this.trigger("ended")
      } else {
        this._bindAdvanceToTimeGlobal()
      }
    };
    f._onLocalTimeUpdate = function() {
      this.seeking = false;
      this.trigger("timeupdate");
      this.trigger("seeked");
      this._bindAdvanceToTimeGlobal()
    };
    f._advanceToTimeLocal = function(i) {
      if (!this.seeking) {
        this.seeking = true;
        this.trigger("seeking");
        this._currentTime = 1 * i;
        this._prevTime = null;
        this._cancelFrame();
        this._flow.gotoFrame(this._timeToFrame(i)).then(this._onBoundLocalTimeUpdate)
      }
    };
    f._onLoaded = function() {
      this.trigger("loaded");
      this.trigger("canplaythrough")
    };
    f._nullProperties = function(k) {
      var j;
      for (j in k) {
        if (k.hasOwnProperty(j)) {
          k[j] = null
        }
      }
      return k
    };
    f.destroy = function() {
      this._rafEmitter.destroy();
      this.trigger("destroy");
      this.pause();
      this.off();
      this._flow.destroy();
      this._flow = this._nullProperties(this._flow);
      this._nullProperties(this)
    };
    f.load = function() {
      if (this._flow.resumeLoading()) {
        return
      }
      this.trigger("loadstart");
      return this._flow.init().then(function(k) {
        var j = function() {
          this._onLoaded()
        }.bind(this);
        var i = function() {
          if (this._destroyed === false) {
            this.trigger("error")
          }
        }.bind(this);
        if (k) {
          return k.then(j, i)
        } else {
          j()
        }
      }.bind(this))
    };
    f.pauseLoading = function() {
      this._flow.pauseLoading()
    };
    f.play = function() {
      if (this.paused) {
        this.paused = false;
        this.trigger("play");
        this._prevTime = null;
        this._bindAdvanceToTimeGlobal()
      }
      return this
    };
    f.pause = function() {
      if (!this.paused) {
        this.paused = true;
        this._cancelFrame();
        this.trigger("pause")
      }
      return this
    };
    f.on = function() {
      this._domEmitter.on.apply(this._domEmitter, arguments)
    };
    f.once = function() {
      this._domEmitter.once.apply(this._domEmitter, arguments)
    };
    f.trigger = function() {
      this._domEmitter.trigger.apply(this._domEmitter, arguments)
    };
    f.off = function() {
      this._domEmitter.off.apply(this._domEmitter, arguments)
    };
    f._cancelFrame = function() {
      this._rafEmitter.cancel();
      this._rafDrawSet = false
    };
    f._onDraw = function(i) {
      if (this._shouldAdvanceToTimeGlobal) {
        this._advanceToTimeGlobal(i)
      } else {
        if (this._shouldGlobalTimeUpdate) {
          this._onGlobalTimeUpdate(i)
        } else {
          if (this._shouldLocalTimeUpdate) {
            this._onLocalTimeUpdate(i)
          }
        }
      }
      this._shouldLocalTimeUpdate = false;
      this._shouldGlobalTimeUpdate = false;
      this._shouldLocalTimeUpdate = false
    };
    f._bindAdvanceToTimeGlobal = function() {
      this._rafDrawSet = true;
      this._shouldAdvanceToTimeGlobal = true;
      this._rafEmitter.run()
    };
    f._bindGlobalTimeUpdate = function() {
      this._rafDrawSet = true;
      this._shouldGlobalTimeUpdate = true;
      this._rafEmitter.run()
    };
    f._bindLocalTimeUpdate = function() {
      this._rafDrawSet = true;
      this._shouldLocalTimeUpdate = true;
      this._rafEmitter.run()
    };
    if (typeof Object.defineProperties !== "function") {
      Object.defineProperties = function() {}
    }
    Object.defineProperties(f, {
      _currentTime: {
        value: 0,
        enumerable: false,
        writable: true
      },
      _playbackRate: {
        value: 1,
        enumerable: false,
        writable: true
      },
      currentTime: {
        get: function() {
          return this._currentTime * 1
        },
        set: f._advanceToTimeLocal,
        enumerable: true
      },
      frameRate: {
        get: function() {
          return this._frameRate
        },
        set: function(i) {
          if (isFinite(i)) {
            this._frameRate = i;
            this.trigger("durationchange")
          }
        },
        enumerable: true
      },
      playbackRate: {
        get: function() {
          return this._playbackRate * 1
        },
        set: function(i) {
          if (isFinite(i)) {
            this._playbackRate = 1 * i;
            this.trigger("ratechange")
          }
        },
        enumerable: true
      },
      duration: {
        get: function() {
          return this._flow.frameCount / this.frameRate
        },
        enumerable: true
      }
    });
    d.exports = g
  }, {
    "@marcom/ac-dom-emitter": 209,
    "@marcom/ac-raf-emitter/RAFEmitter": 264
  }],
  269: [function(b, d, a) {
    var h = b("../diff/Render");
    var g = b("../LoadController");

    function c(j, k, i) {
      this._keyframes = k;
      this._imageUrlPattern = i;
      this._loadController = new g(j, k, i)
    }
    var f = c.prototype;
    f._initDiffRender = function(i) {
      this._images = i.assets.map(function(j) {
        return j.data
      });
      this.canvas.height = this._images[0].height;
      this.canvas.width = this._images[0].width;
      this.applyFrame(this._images[0])
    };
    f.init = function(i) {
      this.canvas = i || document.createElement("canvas");
      this.context = i.getContext("2d");
      return this._loadController.loadKeyframes().then(this._initDiffRender.bind(this)).then(this._loadController.loadManifest.bind(this._loadController)).then(this.createDiffRender.bind(this))
    };
    f.resumeLoading = function() {
      return this._loadController.load()
    };
    f.pauseLoading = function() {
      this._loadController.pause()
    };
    f.createDiffRender = function(i) {
      this._diffRender = new h(i, this._imageUrlPattern, this._loadController);
      return this._diffRender.init()
    };
    f.applyFrame = function(j) {
      var i = this.context;
      i.drawImage(j, 0, 0)
    };
    f.calculateRenderCount = function(i, j) {
      var k = 0;
      if (Math.abs(j - i) >= j) {
        i = 1;
        k = 1
      } else {
        if (Math.abs(j - i) >= (this.frameCount - j) && this._images[1]) {
          i = this.frameCount - 2;
          k = 1
        }
      }
      if (j > 0 && j < this.frameCount - 1) {
        return Math.abs(i - j) + k
      } else {
        return k
      }
    };
    f.compositeFrames = function(i, j) {
      j = (this.frameCount < j) ? this.frameCount - 1 : (j < 0) ? 0 : j;
      i = (this.frameCount - 2 < i) ? this.frameCount - 2 : (i < 0) ? 0 : i;
      var k;
      if (Math.abs(j - i) >= j) {
        i = 1;
        this.applyFrame(this._images[0])
      } else {
        if (Math.abs(j - i) >= (this.frameCount - j) && this._images[1]) {
          i = this.frameCount - 2;
          this.applyFrame(this._images[1])
        }
      }
      k = (i > j) ? -1 : (i < j) ? 1 : 0;
      if (j > 0 && j < this.frameCount - 1) {
        while (i !== j) {
          this._diffRender.renderDiff(this.canvas, i);
          i += k
        }
      }
      return Promise.resolve(i)
    };
    f.destroy = function() {
      this._loadController.destroy()
    };
    if (typeof Object.defineProperties !== "function") {
      Object.defineProperties = function() {}
    }
    Object.defineProperties(f, {
      frameCount: {
        get: function() {
          return this._diffRender.frames.length + 2
        },
        enumerable: true
      },
      canvas: {
        get: function() {
          return this._canvas
        },
        set: function(i) {
          return this._canvas = i
        },
        enumerable: true
      },
      mainCompositor: {
        get: function() {
          var i = this;
          while (i._compositor) {
            i = i._compositor
          }
          return i
        },
        enumerable: true
      }
    });
    d.exports = c
  }, {
    "../LoadController": 267,
    "../diff/Render": 278
  }],
  270: [function(c, d, b) {
    function a(h, g) {
      this._compositor = h;
      this._keyframeInterval = g || 8;
      this._keyframes = []
    }
    var f = a.prototype;
    f._getClosestKeyframe = function(g) {
      var h = g % this._keyframeInterval,
        i = Math.floor(g / this._keyframeInterval) + ((h > (this._keyframeInterval / 2)) ? 1 : 0);
      return i
    };
    f._getFrameFromKeyframe = function(g) {
      return g * this._keyframeInterval
    };
    f._saveKeyframe = function(i) {
      var g, h = Math.floor(i / this._keyframeInterval);
      if (i % this._keyframeInterval === 0 && !this._keyframes[h]) {
        g = document.createElement("canvas");
        g.width = this._compositor.canvas.width;
        g.height = this._compositor.canvas.height;
        g.getContext("2d").drawImage(this._compositor.canvas, 0, 0);
        this._keyframes[h] = g
      }
    };
    f.init = function(g) {
      return this._compositor.init.apply(this._compositor, arguments)
    };
    f.resumeLoading = function() {
      return this._compositor.resumeLoading()
    };
    f.pauseLoading = function() {
      return this._compositor.pauseLoading()
    };
    f.applyFrame = function() {
      this._compositor.applyFrame.apply(this._compositor, arguments)
    };
    f.calculateRenderCount = function(g, h) {
      g = this._getFrameFromKeyframe(this._getClosestKeyframe(h));
      return this._compositor.calculateRenderCount(g, h) + 1
    };
    f.compositeFrames = function(g, i) {
      var j = this._getClosestKeyframe(i);
      if (this._keyframes[j] && (this._compositor.calculateRenderCount(g, i) > this.calculateRenderCount(g, i))) {
        g = this._getFrameFromKeyframe(j);
        this.applyFrame(this._keyframes[j]);
        return this._compositor.compositeFrames(g, i).then(function h() {})
      } else {
        return this._compositor.compositeFrames(g, i).then(function h() {}, null, this._saveKeyframe.bind(this))
      }
    };
    f.destroy = function() {
      return this._compositor.destroy()
    };
    if (typeof Object.defineProperties !== "function") {
      Object.defineProperties = function() {}
    }
    Object.defineProperties(f, {
      frameCount: {
        get: function() {
          return this._compositor.frameCount
        },
        enumerable: true
      },
      canvas: {
        get: function() {
          return this._compositor.canvas
        },
        set: function(g) {
          return this._compositor.canvas = g
        },
        enumerable: true
      }
    });
    d.exports = a
  }, {}],
  271: [function(c, d, a) {
    var b = c("../../keyframe/Render");

    function g(h) {
      this._compositor = h;
      this._flowDataProvider = this.mainCompositor._loadController._loaders.manifest
    }
    var f = g.prototype;
    f.init = function(h) {
      this._keyframeDiffRender = new b(this._flowDataProvider._data, this.mainCompositor._imageUrlPattern);
      return this._keyframeDiffRender.init()
    };
    f.resumeLoading = function() {
      return this._compositor.resumeLoading()
    };
    f.pauseLoading = function() {
      return this._compositor.pauseLoading()
    };
    f.applyFrame = function(h) {
      return this._compositor.applyFrame.apply(this._compositor, arguments)
    };
    f.applyKeyframe = function(h, i) {
      this._keyframeDiffRender.renderKeyframe(this.canvas, h, i)
    };
    f.compositeFrames = function(h, i) {
      if (!this._isKeyframeDiff(i - 1)) {
        return this._compositor.compositeFrames.apply(this._compositor, arguments)
      }
      this.applyKeyframe(i - 1);
      return Promise.resolve(h - 1)
    };
    f._isKeyframeDiff = function(h) {
      return h in this._keyframeDiffRender._loader._keyframes
    };
    f.calculateRenderCount = function(h, i) {
      return this._compositor.calculateRenderCount.apply(this._compositor, arguments)
    };
    f.destroy = function() {
      return this._compositor.destroy()
    };
    if (typeof Object.defineProperties !== "function") {
      Object.defineProperties = function() {}
    }
    Object.defineProperties(f, {
      frameCount: {
        get: function() {
          return this._compositor.frameCount
        },
        enumerable: true
      },
      canvas: {
        get: function() {
          return this._compositor.canvas
        },
        set: function(h) {
          return this._compositor.canvas = h
        },
        enumerable: true
      },
      mainCompositor: {
        get: function() {
          return this._compositor.mainCompositor
        },
        enumerable: true
      }
    });
    d.exports = g
  }, {
    "../../keyframe/Render": 281
  }],
  272: [function(b, c, a) {
    function f(g) {
      this._compositor = g;
      this._frames = this.mainCompositor._loadController._loaders.manifest._data.frames;
      this._superframeInterval = this.mainCompositor._diffRender.flowData.superframeFrequency
    }
    var d = f.prototype;
    d.init = function(g) {
      return this._compositor.init.apply(this._compositor, arguments)
    };
    d.resumeLoading = function() {
      return this._compositor.resumeLoading()
    };
    d.pauseLoading = function() {
      return this._compositor.pauseLoading()
    };
    d.applyFrame = function(g) {
      return this._compositor.applyFrame.apply(this._compositor, arguments)
    };
    d.applyKeyframe = function(g, h) {
      this._compositor.applyKeyframe.apply(this._compositor, arguments)
    };
    d.compositeFrames = function(g, i) {
      var j, h;
      if (i < 1 || i > this.frameCount - 2) {
        return this._compositor.compositeFrames.apply(this._compositor, arguments)
      }
      if (this._isKeyframeDiff(i - 1)) {
        j = Math.abs(g - i) === 1 ? true : false;
        this.applyKeyframe(i - 1, j);
        return Promise.resolve(g - 1)
      }
      if (Math.abs(i - g) > this._superframeInterval) {
        h = this._getShortestRender(g, i);
        if (this._isKeyframeDiff(h - 1) || h <= 0 || h >= this.frameCount - 2) {
          return this._compositeFromSuperKeyframe(h, i)
        }
      }
      return this._compositor.compositeFrames.apply(this._compositor, [g, i])
    };
    d._getShortestRender = function(g, i) {
      var k = this._compositor.calculateRenderCount,
        j = this._getClosestSuperKeyframe(i - 1),
        h = k.apply(this._compositor, [j, i]) + 1,
        l = k.apply(this._compositor, [g, i]);
      if (h <= l) {
        return j
      } else {
        return g
      }
    };
    d._compositeFromSuperKeyframe = function(k, i) {
      var g = this.canvas.getContext("2d"),
        h = (k <= 0) ? this.mainCompositor._images[0] : (k >= this.frameCount - 2 ? this.mainCompositor._images[1] : this._frames[k - 1].image),
        j;
      g.drawImage(h, 0, 0);
      return this._compositor.compositeFrames.call(this._compositor, k, i)
    };
    d._getClosestSuperFrame = function(g) {
      return Math.round(g / this._superframeInterval) * this._superframeInterval
    };
    d._getClosestSuperKeyframe = function(h) {
      var l, m, k, j, g = this._frames.length;
      if (h < g + 1 && h > 0) {
        j = h - 1;
        while (j >= 0) {
          if (this._frames[j].type === "keyframe") {
            l = j + 1;
            break
          }
          j -= 1
        }
        j = h + 1;
        while (j <= g - 1) {
          if (this._frames[j].type === "keyframe") {
            m = j + 1;
            break
          }
          j += 1
        }
      }
      l = l ? l : 0;
      m = m ? m : this.frameCount;
      k = (h - l) < (m - h) ? l : m;
      return k
    };
    d._isKeyframeDiff = function(g) {
      return this._compositor._isKeyframeDiff.apply(this._compositor, arguments)
    };
    d.destroy = function() {
      return this._compositor.destroy()
    };
    if (typeof Object.defineProperties !== "function") {
      Object.defineProperties = function() {}
    }
    Object.defineProperties(d, {
      frameCount: {
        get: function() {
          return this._compositor.frameCount
        },
        enumerable: true
      },
      canvas: {
        get: function() {
          return this._compositor.canvas
        },
        set: function(g) {
          return this._compositor.canvas = g
        },
        enumerable: true
      },
      mainCompositor: {
        get: function() {
          return this._compositor.mainCompositor
        },
        enumerable: true
      }
    });
    c.exports = f
  }, {}],
  273: [function(b, c, a) {
    function f(h, g) {
      this._compositor = h;
      this._superframeInterval = g || 4
    }
    var d = f.prototype;
    d._getClosestSuperframe = function(g) {
      return Math.round(g / this._superframeInterval) * this._superframeInterval
    };
    d.init = function(g) {
      this._screenCanvas = g
    };
    d.resumeLoading = function() {
      return this._compositor.resumeLoading()
    };
    d.pauseLoading = function() {
      return this._compositor.pauseLoading()
    };
    d.applyFrame = function() {
      this._compositor.applyFrame.apply(this._compositor, arguments)
    };
    d.calculateRenderCount = function(g, i) {
      var h = this._getClosestSuperframe(g);
      if (Math.abs(h - i) > this._superframeInterval / 2) {
        g = h + ((g > i) ? -1 : 1) * this._superframeInterval;
        return this.calculateRenderCount(g, i) + 1
      } else {
        return Math.abs(h - i) + 1
      }
    };
    d.compositeFrames = function(g, j) {
      var k, h;
      if (j <= 0 || j >= this.frameCount - 2) {
        this._compositor.compositeFrames(g, j)
      }
      if (g > this.frameCount - 2) {
        g = this.frameCount - 2
      } else {
        if (g <= 0) {
          g = 1
        }
      }
      h = this._getClosestSuperframe(g);
      if (this._compositor.calculateRenderCount(g, j) > this.calculateRenderCount(g, j)) {
        k = this._compositor.compositeFrames(h, h).then(function i() {
          var l = h + ((g > j) ? -1 : 1) * this._superframeInterval;
          this._compositor.compositeFrames(h, l).then(function() {
            return this.compositeFrames(l, j)
          }.bind(this))
        }.bind(this))
      } else {
        k = this._compositor.compositeFrames(g, j).then(function i() {}.bind(this))
      }
      k.then(function i() {}.bind(this));
      return k
    };
    d.destroy = function() {
      return this._compositor.destroy()
    };
    if (typeof Object.defineProperties !== "function") {
      Object.defineProperties = function() {}
    }
    Object.defineProperties(d, {
      frameCount: {
        get: function() {
          return this._compositor.frameCount
        },
        enumerable: true
      },
      canvas: {
        get: function() {
          return this._compositor.canvas
        },
        set: function(g) {
          return this._compositor.canvas = g
        },
        enumerable: true
      },
      mainCompositor: {
        get: function() {
          return this._compositor.mainCompositor
        },
        enumerable: true
      }
    });
    c.exports = f
  }, {}],
  274: [function(b, c, a) {
    function d(f, g) {
      this.location = f;
      this.length = g
    }
    c.exports = d
  }, {}],
  275: [function(c, d, b) {
    function a() {}
    d.exports = a
  }, {}],
  276: [function(c, d, b) {
    var h = c("./Manifest"),
      a = c("./Block"),
      g;
    var f = {
      parseData: function(i) {
        g = 0;
        var j = i.frames.map(this._parseFrame, this);
        return Object.create(h.prototype, {
          version: {
            value: i.version
          },
          framecount: {
            value: i.frameCount
          },
          blockSize: {
            value: i.blockSize
          },
          imagesRequired: {
            value: i.imagesRequired
          },
          reversible: {
            value: i.reversible
          },
          superframeFrequency: {
            value: i.superframeFrequency
          },
          frames: {
            value: j
          }
        })
      },
      _valueForCharAt: function(k, i) {
        var j = k.charCodeAt(i);
        if (j > 64 && j < 91) {
          return j - 65
        }
        if (j > 96 && j < 123) {
          return j - 71
        }
        if (j > 47 && j < 58) {
          return j + 4
        }
        if (j === 43) {
          return 62
        }
        if (j === 47) {
          return 63
        }
      },
      _createNumberFromBase64Range: function(m, i, l) {
        var k = 0,
          j;
        while (l--) {
          j = this._valueForCharAt(m, i++);
          k += (j << l * 6)
        }
        return k
      },
      _parseFrame: function(n) {
        var m, q = [],
          l = n.value,
          k = n.startImageIndex,
          p = n.startBlockIndex,
          o, j;
        if (n.type === "keyframe") {
          q.type = "keyframe";
          q.width = n.width;
          q.height = n.height;
          q.x = n.x;
          q.y = n.y;
          return q
        }
        for (m = 0; m < l.length; m += 5) {
          j = this._createNumberFromBase64Range(l, m, 3);
          o = this._createNumberFromBase64Range(l, m + 3, 2);
          q.push(Object.create(a.prototype, {
            location: {
              value: j,
              enumerable: true
            },
            length: {
              value: o,
              enumerable: true
            },
            block: {
              value: (p += o) - o,
              enumerable: true
            },
            startImageIndex: {
              value: k,
              enumerable: true
            }
          }))
        }
        return q
      }
    };
    d.exports = f
  }, {
    "./Block": 274,
    "./Manifest": 275
  }],
  277: [function(b, c, a) {
    var h = b("@marcom/ac-asset-loader/assetLoader");
    var g = b("../processor");

    function f(i) {
      this.url = i
    }
    var d = f.prototype;
    d.load = function() {
      return h.load(this.url).then(function(j) {
        var i;
        if (j && j.latest && j.latest.data) {
          i = g.parseData(j.latest.data);
          this._data = i
        }
        return i
      }.bind(this))
    };
    c.exports = f
  }, {
    "../processor": 276,
    "@marcom/ac-asset-loader/assetLoader": 180
  }],
  278: [function(c, d, b) {
    function a(i, g, h) {
      this.flowData = i;
      this.flowData.imageUrlPattern = g;
      this._loadController = h
    }
    var f = a.prototype;
    f._storeImages = function(j) {
      var g = j.assets.length;
      this.images = j.assets.map(function(i) {
        return i.data
      });
      this._blocksPerFullDiff = [];
      this._blockCountUpToIndex = [];
      var k = 0;
      for (var h = 0; h < g; h++) {
        this._blocksPerFullDiff[h] = (this.images[h].width / this.flowData.blockSize) * (this.images[h].height / this.flowData.blockSize);
        k += this._blocksPerFullDiff[h];
        this._blockCountUpToIndex[h] = k
      }
    };
    f._applyDiffRange = function(i, o) {
      var s = o.block,
        j = o.length,
        h = i.canvas.width / this.flowData.blockSize,
        l = o.startImageIndex,
        u = this.images[l].width,
        g = s % this._blockCountUpToIndex[l],
        t = u / this.flowData.blockSize,
        r = (g % t) * this.flowData.blockSize,
        q = Math.floor(g / (t || 1)) * this.flowData.blockSize,
        n = (o.location % h) * this.flowData.blockSize,
        m = Math.floor(o.location / h) * this.flowData.blockSize,
        k, p;
      while (j) {
        k = Math.min((j * this.flowData.blockSize), i.canvas.width - n, u - r);
        p = k / this.flowData.blockSize;
        i.drawImage(this.images[l], r, q, k, this.flowData.blockSize, n, m, k, this.flowData.blockSize);
        j -= p;
        if (j) {
          if ((r += k) >= u) {
            r = 0;
            q += this.flowData.blockSize
          }
          if ((n += k) >= i.canvas.width) {
            n = 0;
            m += this.flowData.blockSize
          }
          s += p
        }
      }
    };
    f.init = function() {
      return this._loadController.loadDiffs().then(this._storeImages.bind(this))
    };
    f.renderDiff = function(h, l) {
      var k = h.getContext("2d");
      l -= 1;
      for (var j = 0, g = this.frames[l].length; j < g; j++) {
        this._applyDiffRange(k, this.frames[l][j])
      }
    };
    if (typeof Object.defineProperties !== "function") {
      Object.defineProperties = function() {}
    }
    Object.defineProperties(f, {
      frames: {
        get: function() {
          return this.flowData.frames
        },
        set: function(g) {
          this.flowData.frames = g
        },
        enumerable: true
      }
    });
    d.exports = a
  }, {}],
  279: [function(f, c, h) {
    var k = f("@marcom/ac-object/defaults");
    var j = f("./Flow");
    var d = f("./Player");
    var b = {
      keyframeCache: 8,
      preload: true
    };
    var g = {
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
    };
    var a = function(n) {
      if (n.lastIndexOf("/") !== n.length - 1) {
        n = n + "/"
      }
      return n
    };
    var l = function(q) {
      var t = q.basePath ? a(q.basePath) : null;
      var p = q.framePath ? a(q.framePath) : null;
      var o = q.diffPath ? a(q.diffPath) : null;
      var s = q.manifestPath ? a(q.manifestPath) : null;
      var n = q.baseName + "_";
      var r = {};
      r.startframe = (p || t) + n + "startframe." + (q.startframeFileFormat || q.fileFormat);
      r.endframe = (p || t) + n + "endframe." + (q.endframeFileFormat || q.fileFormat);
      r.imageUrlPattern = (o || t) + n + q.imageUrlPattern + "." + q.fileFormat;
      r.manifest = (s || t) + n + "manifest." + q.manifestFileFormat;
      return r
    };
    var m = function(o, p) {
      var n = l(p);
      var q = [n.startframe, n.endframe];
      return new j(o, n.manifest, q, n.imageUrlPattern)
    };
    var i = function(q, r) {
      var n = q || {};
      var p = r || {};
      n = k(b, q);
      p = k(g, r);
      if (!n.element) {
        q.element = document.createElement("canvas")
      }
      var o = m(n, p);
      var s = new d(o, n.element);
      if (n.preload) {
        s.load()
      }
      return s
    };
    c.exports = i
  }, {
    "./Flow": 266,
    "./Player": 268,
    "@marcom/ac-object/defaults": 306
  }],
  280: [function(c, d, b) {
    var g = c("@marcom/ac-asset-loader/assetLoader");

    function a(h, k) {
      var j, i = h.match(/#/g).length;
      this._keyframes = {};
      h = h.replace(/([^#]+)(#+)(\..*)/, "$1key_$2$3");
      this._imageUrls = [];
      if (k.frames) {
        k.frames.forEach(function(m, l) {
          if (m.type === "keyframe") {
            j = "0000" + l;
            j = j.substring(j.length - i);
            this._imageUrls.push(h.replace(/#+/g, j));
            this._keyframes[l] = m
          }
        }.bind(this))
      }
    }
    var f = a.prototype;
    f.load = function() {
      if (this._imageUrls.length > 0) {
        return g.load(this._imageUrls)
      }
      return Promise.resolve()
    };
    if (typeof Object.defineProperties !== "function") {
      Object.defineProperties = function() {}
    }
    Object.defineProperties(f, {
      keyframes: {
        get: function() {
          return this._keyframes
        },
        enumerable: true
      }
    });
    d.exports = a
  }, {
    "@marcom/ac-asset-loader/assetLoader": 180
  }],
  281: [function(b, c, a) {
    var g = b("./Loader");

    function f(i, h) {
      this.flowData = i;
      this.flowData.imageUrlPattern = h
    }
    var d = f.prototype;
    d._storeImages = function(k) {
      var j = 0,
        l;
      if (k && k.assets.length > 0) {
        for (var h in this._loader._keyframes) {
          if (this._loader._keyframes.hasOwnProperty(h)) {
            l = k.assets[j];
            this._loader._keyframes[h].image = l.data;
            j += 1
          }
        }
      }
    };
    d.init = function() {
      this._loader = new g(this.flowData.imageUrlPattern, this.flowData);
      return this._loader.load().then(this._storeImages.bind(this))
    };
    d.renderKeyframe = function(k, j, r) {
      var i = k.getContext("2d"),
        l = this._loader.keyframes[j],
        m = l.image,
        p = l.x,
        o = l.y,
        q = l.width,
        n = l.height;
      if (r === true) {
        i.drawImage(m, p, o, q, n, p, o, q, n)
      } else {
        if (this.flowData.reversible) {
          i.drawImage(m, 0, 0)
        } else {
          i.drawImage(m, p, o, q, n)
        }
      }
    };
    c.exports = f
  }, {
    "./Loader": 280
  }],
  282: [function(b, c, a) {
    arguments[4][126][0].apply(a, arguments)
  }, {
    "./ac-event-emitter-micro/EventEmitterMicro": 283,
    dup: 126
  }],
  283: [function(b, c, a) {
    arguments[4][127][0].apply(a, arguments)
  }, {
    dup: 127
  }],
  284: [function(b, c, a) {
    arguments[4][128][0].apply(a, arguments)
  }, {
    "./ac-shared-instance/SharedInstance": 285,
    dup: 128
  }],
  285: [function(b, c, a) {
    arguments[4][129][0].apply(a, arguments)
  }, {
    dup: 129
  }],
  286: [function(b, c, a) {
    c.exports = {
      CID: b("./ac-mvc-cid/CID")
    }
  }, {
    "./ac-mvc-cid/CID": 287
  }],
  287: [function(c, f, b) {
    var a = c("@marcom/ac-shared-instance").SharedInstance;
    var g = "ac-mvc-cid:CID",
      d = "1.0.0";

    function i() {
      this._idCount = 0
    }
    var h = i.prototype;
    h._cidPrefix = "cid";
    h.getNewCID = function() {
      var j = this._cidPrefix + "-" + this._idCount;
      this._idCount++;
      return j
    };
    f.exports = a.share(g, d, i)
  }, {
    "@marcom/ac-shared-instance": 284
  }],
  288: [function(b, c, a) {
    c.exports = {
      Model: b("./ac-mvc-model/Model")
    }
  }, {
    "./ac-mvc-model/Model": 289
  }],
  289: [function(f, a, g) {
    var k = f("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var b = f("@marcom/ac-object/defaults");
    var i = f("@marcom/ac-object/create");
    var c = f("@marcom/ac-mvc-cid").CID;

    function d(l) {
      k.call(this);
      this.attributes = b(this.defaultAttributes, l || {});
      this.cid = c.getNewCID();
      if (this.attributes[this.idAttribute]) {
        this.id = this.attributes[this.idAttribute]
      }
    }
    var j = k.prototype;
    var h = d.prototype = i(j);
    h.defaultAttributes = {};
    h.idAttribute = "id";
    h.get = function(l) {
      if (!this.attributes) {
        return
      }
      return this.attributes[l]
    };
    h.set = function(m, l) {
      if (!this.attributes) {
        return
      }
      var q;
      var p;
      var o;
      var n = {};
      var r = false;
      for (q in m) {
        if (m.hasOwnProperty(q)) {
          o = this.get(q);
          if ((o === m[q]) || (typeof o === "object" && typeof m[q] === "object" && JSON.stringify(o) === JSON.stringify(m[q]))) {
            continue
          }
          r = true;
          this.attributes[q] = m[q];
          p = {
            value: m[q],
            previous: o
          };
          n[q] = p;
          this._triggerChange(q, p, l)
        }
      }
      if (r) {
        this._trigger("change", n, l)
      }
    };
    h.hasAttribute = function(l) {
      if (!this.attributes) {
        return false
      }
      return (this.attributes[l] !== undefined)
    };
    h.eachAttribute = function(m, l) {
      if (!this.attributes) {
        return
      }
      var n;
      for (n in this.attributes) {
        if (this.attributes.hasOwnProperty(n)) {
          m.call(l, {
            attribute: n,
            value: this.attributes[n]
          })
        }
      }
    };
    h.destroy = function() {
      this.trigger("destroy");
      j.destroy.call(this);
      var l;
      for (l in this) {
        if (this.hasOwnProperty(l)) {
          this[l] = null
        }
      }
    };
    h._trigger = function(n, m, l) {
      l = l || {};
      if (l.silent !== true) {
        this.trigger(n, m)
      }
    };
    h._triggerChange = function(n, m, l) {
      return this._trigger("change:" + n, m, l)
    };
    a.exports = d
  }, {
    "@marcom/ac-event-emitter-micro": 282,
    "@marcom/ac-mvc-cid": 286,
    "@marcom/ac-object/create": 305,
    "@marcom/ac-object/defaults": 306
  }],
  290: [function(b, c, a) {
    b("@marcom/ac-polyfills/Array/prototype.slice");
    b("@marcom/ac-polyfills/Element/prototype.classList");
    var d = b("./className/add");
    c.exports = function f() {
      var j = Array.prototype.slice.call(arguments);
      var h = j.shift(j);
      var g;
      if (h.classList && h.classList.add) {
        h.classList.add.apply(h.classList, j);
        return
      }
      for (g = 0; g < j.length; g++) {
        d(h, j[g])
      }
    }
  }, {
    "./className/add": 291,
    "@marcom/ac-polyfills/Array/prototype.slice": 355,
    "@marcom/ac-polyfills/Element/prototype.classList": 357
  }],
  291: [function(b, c, a) {
    var d = b("./contains");
    c.exports = function f(h, g) {
      if (!d(h, g)) {
        h.className += " " + g
      }
    }
  }, {
    "./contains": 292
  }],
  292: [function(b, c, a) {
    var f = b("./getTokenRegExp");
    c.exports = function d(h, g) {
      return f(g).test(h.className)
    }
  }, {
    "./getTokenRegExp": 293
  }],
  293: [function(b, c, a) {
    c.exports = function d(f) {
      return new RegExp("(\\s|^)" + f + "(\\s|$)")
    }
  }, {}],
  294: [function(c, d, b) {
    var f = c("./contains");
    var g = c("./getTokenRegExp");
    d.exports = function a(i, h) {
      if (f(i, h)) {
        i.className = i.className.replace(g(h), "$1").trim()
      }
    }
  }, {
    "./contains": 292,
    "./getTokenRegExp": 293
  }],
  295: [function(d, f, c) {
    d("@marcom/ac-polyfills/Array/prototype.slice");
    d("@marcom/ac-polyfills/Element/prototype.classList");
    var b = d("./className/remove");
    f.exports = function a() {
      var j = Array.prototype.slice.call(arguments);
      var h = j.shift(j);
      var g;
      if (h.classList && h.classList.remove) {
        h.classList.remove.apply(h.classList, j);
        return
      }
      for (g = 0; g < j.length; g++) {
        b(h, j[g])
      }
    }
  }, {
    "./className/remove": 294,
    "@marcom/ac-polyfills/Array/prototype.slice": 355,
    "@marcom/ac-polyfills/Element/prototype.classList": 357
  }],
  296: [function(b, c, a) {
    arguments[4][128][0].apply(a, arguments)
  }, {
    "./ac-shared-instance/SharedInstance": 297,
    dup: 128
  }],
  297: [function(b, c, a) {
    arguments[4][129][0].apply(a, arguments)
  }, {
    dup: 129
  }],
  298: [function(b, c, a) {
    arguments[4][286][0].apply(a, arguments)
  }, {
    "./ac-mvc-cid/CID": 299,
    dup: 286
  }],
  299: [function(b, c, a) {
    arguments[4][287][0].apply(a, arguments)
  }, {
    "@marcom/ac-shared-instance": 296,
    dup: 287
  }],
  300: [function(b, c, a) {
    c.exports = {
      View: b("./ac-mvc-view/View")
    }
  }, {
    "./ac-mvc-view/View": 301
  }],
  301: [function(d, b, g) {
    var k = d("@marcom/ac-dom-emitter").DOMEmitter;
    var c = d("@marcom/ac-mvc-cid").CID;
    var f = {
      create: d("@marcom/ac-object/create"),
      defaults: d("@marcom/ac-object/defaults")
    };
    var j = {
      insertLastChild: d("@marcom/ac-dom-nodes/insertLastChild"),
      remove: d("@marcom/ac-dom-nodes/remove")
    };
    var i = d("@marcom/ac-classlist/add");
    var l = d("@marcom/ac-classlist/remove");

    function a(m) {
      var o;
      var n;
      var p;
      this.options = f.defaults(this.defaultOptions, m || {});
      this.cid = c.getNewCID();
      this.model = this.options.model;
      if (this.options.template) {
        this.template = this.options.template
      }
      o = this.options.tagName || this.tagName;
      n = this.options.element;
      p = this.options.className || this.className;
      if (!n) {
        n = document.createElement(o)
      }
      k.call(this, n);
      if (p) {
        this.addClassName(p)
      }
      if (this.options.events) {
        this.delegateEvents(this.options.events)
      }
    }
    var h = a.prototype = f.create(k.prototype);
    h.tagName = "div";
    h.defaultOptions = {};
    h.getTagName = function() {
      return this.el.tagName.toLowerCase()
    };
    h.appendTo = function(m) {
      j.insertLastChild(this.el, m);
      return this
    };
    h.render = function() {};
    h.addClassName = function(m) {
      return this._manipulateClassName(m, i)
    };
    h.removeClassName = function(m) {
      return this._manipulateClassName(m, l)
    };
    h.destroy = function() {
      this.emitterTrigger("destroy");
      this.off();
      j.remove(this.el);
      var m;
      for (m in this) {
        if (this.hasOwnProperty(m)) {
          this[m] = null
        }
      }
    };
    h.delegateEvents = function(n, o) {
      o = o || this;
      var m, p;
      for (m in n) {
        if (n.hasOwnProperty(m)) {
          p = n[m];
          if (typeof p === "string") {
            n[m] = this[n[m]]
          }
        }
      }
      this.on(n, o);
      return this
    };
    h._manipulateClassName = function(n, o) {
      var m;
      if (typeof n === "string") {
        m = n.split(" ")
      } else {
        if (typeof n === "object" && Array.isArray(n)) {
          m = n.slice()
        } else {
          return this
        }
      }
      m.unshift(this.el);
      o.apply(this.el, m);
      return this
    };
    b.exports = a
  }, {
    "@marcom/ac-classlist/add": 290,
    "@marcom/ac-classlist/remove": 295,
    "@marcom/ac-dom-emitter": 209,
    "@marcom/ac-dom-nodes/insertLastChild": 226,
    "@marcom/ac-dom-nodes/remove": 237,
    "@marcom/ac-mvc-cid": 298,
    "@marcom/ac-object/create": 305,
    "@marcom/ac-object/defaults": 306
  }],
  302: [function(b, c, a) {
    arguments[4][112][0].apply(a, arguments)
  }, {
    dup: 112
  }],
  303: [function(b, c, a) {
    arguments[4][113][0].apply(a, arguments)
  }, {
    "./clone": 304,
    "./create": 305,
    "./defaults": 306,
    "./extend": 307,
    "./getPrototypeOf": 308,
    "./isDate": 309,
    "./isEmpty": 310,
    "./isRegExp": 311,
    "./toQueryParameters": 312,
    dup: 113
  }],
  304: [function(b, c, a) {
    arguments[4][114][0].apply(a, arguments)
  }, {
    "./extend": 307,
    "@marcom/ac-polyfills/Array/isArray": 350,
    dup: 114
  }],
  305: [function(b, c, a) {
    arguments[4][50][0].apply(a, arguments)
  }, {
    dup: 50
  }],
  306: [function(b, c, a) {
    arguments[4][51][0].apply(a, arguments)
  }, {
    "./extend": 307,
    dup: 51
  }],
  307: [function(b, c, a) {
    arguments[4][52][0].apply(a, arguments)
  }, {
    "@marcom/ac-polyfills/Array/prototype.forEach": 352,
    dup: 52
  }],
  308: [function(b, c, a) {
    arguments[4][118][0].apply(a, arguments)
  }, {
    dup: 118
  }],
  309: [function(b, c, a) {
    arguments[4][119][0].apply(a, arguments)
  }, {
    dup: 119
  }],
  310: [function(b, c, a) {
    arguments[4][120][0].apply(a, arguments)
  }, {
    dup: 120
  }],
  311: [function(b, c, a) {
    arguments[4][121][0].apply(a, arguments)
  }, {
    dup: 121
  }],
  312: [function(b, c, a) {
    arguments[4][122][0].apply(a, arguments)
  }, {
    "@marcom/ac-url/joinSearchParams": 302,
    dup: 122
  }],
  313: [function(b, c, a) {
    arguments[4][126][0].apply(a, arguments)
  }, {
    "./ac-event-emitter-micro/EventEmitterMicro": 314,
    dup: 126
  }],
  314: [function(b, c, a) {
    arguments[4][127][0].apply(a, arguments)
  }, {
    dup: 127
  }],
  315: [function(b, c, a) {
    arguments[4][128][0].apply(a, arguments)
  }, {
    "./ac-shared-instance/SharedInstance": 316,
    dup: 128
  }],
  316: [function(b, c, a) {
    arguments[4][129][0].apply(a, arguments)
  }, {
    dup: 129
  }],
  317: [function(b, c, a) {
    arguments[4][130][0].apply(a, arguments)
  }, {
    "@marcom/ac-shared-instance": 315,
    dup: 130
  }],
  318: [function(b, c, a) {
    arguments[4][131][0].apply(a, arguments)
  }, {
    dup: 131
  }],
  319: [function(b, c, a) {
    arguments[4][132][0].apply(a, arguments)
  }, {
    "../Date/now": 318,
    dup: 132
  }],
  320: [function(b, c, a) {
    arguments[4][128][0].apply(a, arguments)
  }, {
    "./ac-shared-instance/SharedInstance": 321,
    dup: 128
  }],
  321: [function(b, c, a) {
    arguments[4][129][0].apply(a, arguments)
  }, {
    dup: 129
  }],
  322: [function(b, d, a) {
    b("@marcom/ac-polyfills/performance/now");
    var f;

    function c(g) {
      g = g || {};
      this._reset();
      this._willRun = false;
      this._totalSubscribeCount = -1;
      this._requestAnimationFrame = window.requestAnimationFrame;
      this._cancelAnimationFrame = window.cancelAnimationFrame;
      this._boundOnAnimationFrame = this._onAnimationFrame.bind(this);
      this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
    }
    f = c.prototype;
    f.subscribe = function(g, h) {
      this._totalSubscribeCount++;
      if (!this._nextFrameSubscribers[g.id]) {
        if (h) {
          this._nextFrameSubscribersOrder.unshift(g.id)
        } else {
          this._nextFrameSubscribersOrder.push(g.id)
        }
        this._nextFrameSubscribers[g.id] = g;
        this._nextFrameSubscriberArrayLength++;
        this._nextFrameSubscriberCount++;
        this._run()
      }
      return this._totalSubscribeCount
    };
    f.unsubscribe = function(g) {
      if (!this._nextFrameSubscribers[g.id]) {
        return false
      }
      this._nextFrameSubscribers[g.id] = null;
      this._nextFrameSubscriberCount--;
      if (this._nextFrameSubscriberCount === 0) {
        this._cancel()
      }
      return true
    };
    f.trigger = function(j, h) {
      var g;
      for (g = 0; g < this._subscriberArrayLength; g++) {
        if (this._subscribers[this._subscribersOrder[g]] !== null && this._subscribers[this._subscribersOrder[g]]._didDestroy === false) {
          this._subscribers[this._subscribersOrder[g]].trigger(j, h)
        }
      }
    };
    f.destroy = function() {
      var g = this._cancel();
      this._subscribers = null;
      this._subscribersOrder = null;
      this._nextFrameSubscribers = null;
      this._nextFrameSubscribersOrder = null;
      this._rafData = null;
      this._boundOnAnimationFrame = null;
      this._onExternalAnimationFrame = null;
      return g
    };
    f.useExternalAnimationFrame = function(g) {
      if (typeof g !== "boolean") {
        return
      }
      var h = this._isUsingExternalAnimationFrame;
      if (g && this._animationFrame) {
        this._cancelAnimationFrame.call(window, this._animationFrame);
        this._animationFrame = null
      }
      if (this._willRun && !g && !this._animationFrame) {
        this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)
      }
      this._isUsingExternalAnimationFrame = g;
      if (g) {
        return this._boundOnExternalAnimationFrame
      }
      return h || false
    };
    f._run = function() {
      if (!this._willRun) {
        this._willRun = true;
        if (this.lastFrameTime === 0) {
          this.lastFrameTime = performance.now()
        }
        this._animationFrameActive = true;
        if (!this._isUsingExternalAnimationFrame) {
          this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)
        }
        return true
      }
    };
    f._cancel = function() {
      var g = false;
      if (this._animationFrameActive) {
        if (this._animationFrame) {
          this._cancelAnimationFrame.call(window, this._animationFrame);
          this._animationFrame = null
        }
        this._animationFrameActive = false;
        this._willRun = false;
        g = true
      }
      if (!this._isRunning) {
        this._reset()
      }
      return g
    };
    f._onSubscribersAnimationFrameStart = function(h) {
      var g;
      for (g = 0; g < this._subscriberArrayLength; g++) {
        if (this._subscribers[this._subscribersOrder[g]] !== null && this._subscribers[this._subscribersOrder[g]]._didDestroy === false) {
          this._subscribers[this._subscribersOrder[g]]._onAnimationFrameStart(h)
        }
      }
    };
    f._onSubscribersAnimationFrameEnd = function(h) {
      var g;
      for (g = 0; g < this._subscriberArrayLength; g++) {
        if (this._subscribers[this._subscribersOrder[g]] !== null && this._subscribers[this._subscribersOrder[g]]._didDestroy === false) {
          this._subscribers[this._subscribersOrder[g]]._onAnimationFrameEnd(h)
        }
      }
    };
    f._onAnimationFrame = function(g) {
      this._subscribers = this._nextFrameSubscribers;
      this._subscribersOrder = this._nextFrameSubscribersOrder;
      this._subscriberArrayLength = this._nextFrameSubscriberArrayLength;
      this._subscriberCount = this._nextFrameSubscriberCount;
      this._nextFrameSubscribers = {};
      this._nextFrameSubscribersOrder = [];
      this._nextFrameSubscriberArrayLength = 0;
      this._nextFrameSubscriberCount = 0;
      this._isRunning = true;
      this._willRun = false;
      this._didRequestNextRAF = false;
      this._rafData.delta = g - this.lastFrameTime;
      this.lastFrameTime = g;
      this._rafData.fps = 0;
      if (this._rafData.delta >= 1000) {
        this._rafData.delta = 0
      }
      if (this._rafData.delta !== 0) {
        this._rafData.fps = 1000 / this._rafData.delta
      }
      this._rafData.time = g;
      this._rafData.naturalFps = this._rafData.fps;
      this._rafData.timeNow = Date.now();
      this._onSubscribersAnimationFrameStart(this._rafData);
      this.trigger("update", this._rafData);
      this.trigger("external", this._rafData);
      this.trigger("draw", this._rafData);
      this._onSubscribersAnimationFrameEnd(this._rafData);
      if (!this._willRun) {
        this._reset()
      }
    };
    f._onExternalAnimationFrame = function(g) {
      if (!this._isUsingExternalAnimationFrame) {
        return
      }
      this._onAnimationFrame(g)
    };
    f._reset = function() {
      this._rafData = {
        time: 0,
        delta: 0,
        fps: 0,
        naturalFps: 0,
        timeNow: 0
      };
      this._subscribers = {};
      this._subscribersOrder = [];
      this._subscriberArrayLength = 0;
      this._subscriberCount = 0;
      this._nextFrameSubscribers = {};
      this._nextFrameSubscribersOrder = [];
      this._nextFrameSubscriberArrayLength = 0;
      this._nextFrameSubscriberCount = 0;
      this._didEmitFrameData = false;
      this._animationFrame = null;
      this._animationFrameActive = false;
      this._isRunning = false;
      this._shouldReset = false;
      this.lastFrameTime = 0
    };
    d.exports = c
  }, {
    "@marcom/ac-polyfills/performance/now": 319
  }],
  323: [function(c, g, b) {
    var a = c("@marcom/ac-shared-instance").SharedInstance;
    var h = "ac-raf-executor:sharedRAFExecutorInstance",
      f = "2.0.1";
    var d = c("./RAFExecutor");
    g.exports = a.share(h, f, d)
  }, {
    "./RAFExecutor": 322,
    "@marcom/ac-shared-instance": 320
  }],
  324: [function(f, g, d) {
    var i;
    var h = f("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var c = f("@marcom/ac-raf-executor/sharedRAFExecutorInstance");
    var b = f("@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance");

    function a(j) {
      j = j || {};
      h.call(this);
      this.id = b.getNewID();
      this.executor = j.executor || c;
      this._reset();
      this._willRun = false;
      this._didDestroy = false
    }
    i = a.prototype = Object.create(h.prototype);
    i.run = function() {
      if (!this._willRun) {
        this._willRun = true
      }
      return this._subscribe()
    };
    i.cancel = function() {
      this._unsubscribe();
      if (this._willRun) {
        this._willRun = false
      }
      this._reset()
    };
    i.destroy = function() {
      var j = this.willRun();
      this.cancel();
      this.executor = null;
      h.prototype.destroy.call(this);
      this._didDestroy = true;
      return j
    };
    i.willRun = function() {
      return this._willRun
    };
    i.isRunning = function() {
      return this._isRunning
    };
    i._subscribe = function() {
      return this.executor.subscribe(this)
    };
    i._unsubscribe = function() {
      return this.executor.unsubscribe(this)
    };
    i._onAnimationFrameStart = function(j) {
      this._isRunning = true;
      this._willRun = false;
      if (!this._didEmitFrameData) {
        this._didEmitFrameData = true;
        this.trigger("start", j)
      }
    };
    i._onAnimationFrameEnd = function(j) {
      if (!this._willRun) {
        this.trigger("stop", j);
        this._reset()
      }
    };
    i._reset = function() {
      this._didEmitFrameData = false;
      this._isRunning = false
    };
    g.exports = a
  }, {
    "@marcom/ac-event-emitter-micro": 313,
    "@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance": 317,
    "@marcom/ac-raf-executor/sharedRAFExecutorInstance": 323
  }],
  325: [function(b, c, a) {
    var d = b("./SingleCallRAFEmitter");
    var g = function(h) {
      this.rafEmitter = new d();
      this.rafEmitter.on(h, this._onRAFExecuted.bind(this));
      this.requestAnimationFrame = this.requestAnimationFrame.bind(this);
      this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this);
      this._frameCallbacks = [];
      this._nextFrameCallbacks = [];
      this._currentFrameID = -1;
      this._cancelFrameIdx = -1;
      this._frameCallbackLength = 0;
      this._nextFrameCallbacksLength = 0;
      this._frameCallbackIteration = 0
    };
    var f = g.prototype;
    f.requestAnimationFrame = function(h) {
      this._currentFrameID = this.rafEmitter.run();
      this._nextFrameCallbacks.push(this._currentFrameID, h);
      this._nextFrameCallbacksLength += 2;
      return this._currentFrameID
    };
    f.cancelAnimationFrame = function(h) {
      this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(h);
      if (this._cancelFrameIdx === -1) {
        return
      }
      this._nextFrameCallbacks.splice(this._cancelFrameIdx, 2);
      this._nextFrameCallbacksLength -= 2;
      if (this._nextFrameCallbacksLength === 0) {
        this.rafEmitter.cancel()
      }
    };
    f._onRAFExecuted = function(h) {
      this._frameCallbacks = this._nextFrameCallbacks;
      this._frameCallbackLength = this._nextFrameCallbacksLength;
      this._nextFrameCallbacks = [];
      this._nextFrameCallbacksLength = 0;
      for (this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) {
        this._frameCallbacks[this._frameCallbackIteration + 1](h.time, h)
      }
    };
    c.exports = g
  }, {
    "./SingleCallRAFEmitter": 327
  }],
  326: [function(b, c, a) {
    var g = b("./RAFInterface");
    var f = function() {
      this.events = {}
    };
    var d = f.prototype;
    d.requestAnimationFrame = function(h) {
      if (!this.events[h]) {
        this.events[h] = new g(h)
      }
      return this.events[h].requestAnimationFrame
    };
    d.cancelAnimationFrame = function(h) {
      if (!this.events[h]) {
        this.events[h] = new g(h)
      }
      return this.events[h].cancelAnimationFrame
    };
    c.exports = new f()
  }, {
    "./RAFInterface": 325
  }],
  327: [function(c, d, b) {
    var a = c("./RAFEmitter");
    var f = function(h) {
      a.call(this, h)
    };
    var g = f.prototype = Object.create(a.prototype);
    g._subscribe = function() {
      return this.executor.subscribe(this, true)
    };
    d.exports = f
  }, {
    "./RAFEmitter": 324
  }],
  328: [function(b, c, a) {
    var d = b("./RAFInterfaceController");
    c.exports = d.requestAnimationFrame("draw")
  }, {
    "./RAFInterfaceController": 326
  }],
  329: [function(b, d, a) {
    var f = b("./ac-media-object/factories/createVideo");
    var c = b("./ac-media-object/factories/createFlow");
    d.exports = {
      createFlow: c,
      createVideo: f
    }
  }, {
    "./ac-media-object/factories/createFlow": 330,
    "./ac-media-object/factories/createVideo": 331
  }],
  330: [function(c, d, b) {
    var a = c("./../views/FlowView");
    var f = c("@marcom/ac-object/clone");
    d.exports = function(j, l, i) {
      var k = f(i || {}, true);
      var g;
      k.type = "flow";

      function h(m) {
        throw new Error(m)
      }
      if (!l) {
        h("Please provide both a valid container element and a valid mediaSrc object as arguments.")
      } else {
        if (!l.basePath) {
          h("Please provide a valid mediaSrc object with a basePath property.")
        }
      }
      if (!k.mediaObjectView) {
        g = new a(j, l, k);
        g.options.mediaObjectView = g
      } else {
        g = k.mediaObjectView
      }
      return g
    }
  }, {
    "./../views/FlowView": 334,
    "@marcom/ac-object/clone": 304
  }],
  331: [function(f, g, d) {
    var b = f("./../views/VideoView");
    var h = f("./../views/InlinePolyfillVideoView");
    var c = f("@marcom/ac-feature").isHandheld;
    var a = f("@marcom/ac-feature").isTablet;
    var i = f("@marcom/ac-object/clone");
    g.exports = function(m, o, l) {
      var n = i(l || {}, true);
      var j;
      n.type = "video";

      function k(p) {
        throw new Error(p)
      }
      if (!o) {
        k("Please provide both a valid container element and a valid mediaSrc object as arguments.")
      } else {
        if (!o.basePath) {
          k("Please provide a valid mediaSrc object with a basePath property.")
        }
      }
      if (!n.mediaObjectView) {
        if (n.iosInline && !window.matchMedia("(-webkit-video-playable-inline)").matches && (c() || a())) {
          j = new h(m, o, n)
        } else {
          j = new b(m, o, n)
        }
        j.options.mediaObjectView = j
      } else {
        j = n.mediaObjectView
      }
      return j
    }
  }, {
    "./../views/InlinePolyfillVideoView": 335,
    "./../views/VideoView": 336,
    "@marcom/ac-feature": 22,
    "@marcom/ac-object/clone": 304
  }],
  332: [function(d, f, c) {
    var h = d("@marcom/ac-mvc-model").Model;
    var b = d("@marcom/ac-object");

    function a(i) {
      h.apply(this, arguments)
    }
    var g = a.prototype = b.create(h.prototype);
    g.defaultAttributes = {
      type: "video",
      paused: true,
      ended: false,
      ready: false,
      loadStart: false,
      loaded: false,
      error: false,
      destroyed: false,
      currentTime: 0,
      playbackRate: 1,
      duration: 0,
      preload: false,
      autoplay: false,
      frameRate: 24,
      enhanced: false,
      looping: false
    };
    g.getType = function() {
      return this.get("type")
    };
    g.getPaused = function() {
      return this.get("paused")
    };
    g.getEnded = function() {
      return this.get("ended")
    };
    g.getReady = function() {
      return this.get("ready")
    };
    g.getDestroyed = function() {
      return this.get("destroyed")
    };
    g.getLoadStart = function() {
      return this.get("loadedStart")
    };
    g.getLoaded = function() {
      return this.get("loaded")
    };
    g.getError = function() {
      return this.get("error")
    };
    g.getCurrentTime = function() {
      return this.get("currentTime")
    };
    g.getPlaybackRate = function() {
      return this.get("playbackRate")
    };
    g.getDuration = function() {
      return this.get("duration")
    };
    g.getPreload = function() {
      return this.get("preload")
    };
    g.getAutoplay = function() {
      return this.get("autoplay")
    };
    g.getFrameRate = function() {
      return this.get("frameRate")
    };
    g.getEnhanced = function() {
      return this.get("enhanced")
    };
    g.getLooping = function() {
      return this.get("looping")
    };
    g.setPaused = function(i) {
      this.set({
        paused: i
      })
    };
    g.setEnded = function(i) {
      this.set({
        ended: i
      })
    };
    g.setReady = function(i) {
      this.set({
        ready: i
      })
    };
    g.setDestroyed = function(i) {
      this.set({
        destroyed: i
      })
    };
    g.setDuration = function(i) {
      this.set({
        duration: i
      })
    };
    g.setLoadStart = function(i) {
      this.set({
        loadStart: i
      })
    };
    g.setLoaded = function(i) {
      this.set({
        loaded: i
      })
    };
    g.setError = function(i) {
      this.set({
        error: i
      })
    };
    g.setCurrentTime = function(i) {
      this.set({
        currentTime: i
      })
    };
    g.setPlaybackRate = function(i) {
      this.set({
        playbackRate: i
      })
    };
    g.setPreload = function(i) {
      this.set({
        preload: i
      })
    };
    g.setAutoplay = function(i) {
      this.set({
        autoplay: i
      })
    };
    g.setFrameRate = function(i) {
      this.set({
        frameRate: i
      })
    };
    g.setEnhanced = function(i) {
      this.set({
        enhanced: i
      })
    };
    g.setLooping = function(i) {
      this.set({
        looping: i
      })
    };
    f.exports = a
  }, {
    "@marcom/ac-mvc-model": 288,
    "@marcom/ac-object": 303
  }],
  333: [function(d, g, c) {
    var a = d("./../models/MediaModel");
    var i = d("@marcom/ac-mvc-view").View;
    var b = d("@marcom/ac-object");
    var f = function(k, l, j) {
      i.call(this, {
        element: k
      });
      this.options = b.clone(j || {}, true);
      this.mediaSrc = l || "";
      this.model = this.options.model || new a(this.options);
      this._onLoadStartChange = this._onLoadStartChange.bind(this);
      this._onLoadedChange = this._onLoadedChange.bind(this);
      this._onPausedChange = this._onPausedChange.bind(this);
      this._onReadyChange = this._onReadyChange.bind(this);
      this._onErrorChange = this._onErrorChange.bind(this);
      this._onEnhancedChange = this._onEnhancedChange.bind(this);
      this._onCurrentTimeChange = this._onCurrentTimeChange.bind(this);
      this._onPlaybackRateChange = this._onPlaybackRateChange.bind(this);
      this._onDestroyedChange = this._onDestroyedChange.bind(this);
      this._onEndedChange = this._onEndedChange.bind(this);
      this._respondToPlay = this._respondToPlay.bind(this);
      this._respondToPause = this._respondToPause.bind(this);
      this._respondToTimeUpdate = this._respondToTimeUpdate.bind(this);
      this._respondToEnded = this._respondToEnded.bind(this);
      this._respondToDurationChange = this._respondToDurationChange.bind(this);
      this._respondToRateChange = this._respondToRateChange.bind(this);
      this._init()
    };
    var h = f.prototype = b.create(i.prototype);
    h._init = function() {
      this._createMediaElement();
      this._createMediaEmitter();
      this._createMediaLoader();
      this._bindEvents();
      this._config()
    };
    h._createMediaElement = function() {};
    h._createMediaEmitter = function() {};
    h._createMediaLoader = function() {};
    h._config = function() {
      if (this.options.preload === true) {
        this._setPreload(true);
        this.load()
      }
      if (this.options.autoplay === true) {
        this._setAutoplay(true)
      }
      if (this.options.looping === true) {
        this._setLooping(true)
      }
      if (this.options.frameRate) {
        this._setFrameRate(this.options.frameRate)
      }
    };
    h._bindEvents = function() {
      this._bindViewEvents();
      this._bindModelEvents()
    };
    h.destroy = function() {
      if (!this.getDestroyed()) {
        this._destroy();
        this._setDestroyed(true);
        this.model.off();
        this.off();
        for (var j in this) {
          if (this.hasOwnProperty(j) && typeof this[j] !== "function") {
            this[j] = null
          }
        }
      }
    };
    h._bindModelEvents = function() {
      this.model.on("change:loadStart", this._onLoadStartChange);
      this.model.on("change:loaded", this._onLoadedChange);
      this.model.on("change:paused", this._onPausedChange);
      this.model.on("change:ready", this._onReadyChange);
      this.model.on("change:error", this._onErrorChange);
      this.model.on("change:enhanced", this._onEnhancedChange);
      this.model.on("change:currentTime", this._onCurrentTimeChange);
      this.model.on("change:playbackRate", this._onPlaybackRateChange);
      this.model.on("change:destroyed", this._onDestroyedChange);
      this.model.on("change:ended", this._onEndedChange)
    };
    h._onLoadStartChange = function() {
      this.trigger("loadstart")
    };
    h._onLoadedChange = function() {
      this.trigger("loaded")
    };
    h._onPausedChange = function(j) {
      if (j.value === true) {
        this.trigger("pause");
        this.el.classList.remove("mediaobject-playing")
      } else {
        this.trigger("play");
        this.el.classList.remove("mediaobject-ended");
        this.el.classList.add("mediaobject-playing")
      }
    };
    h._onReadyChange = function() {
      this.trigger("ready")
    };
    h._onErrorChange = function() {
      this.trigger("error")
    };
    h._onEnhancedChange = function() {
      this.el.classList.add("mediaobject-enhanced");
      this.mediaElement.classList.add("mediaobject-element");
      this.trigger("enhanced")
    };
    h._onCurrentTimeChange = function() {
      this.trigger("timeupdate")
    };
    h._onPlaybackRateChange = function() {
      this.trigger("ratechange")
    };
    h._onDestroyedChange = function() {
      this.el.classList.remove("mediaobject-playing");
      this.el.classList.remove("mediaobject-ended");
      this.el.classList.remove("mediaobject-enhanced");
      this.el.classList.add("mediaobject-destroyed");
      this.trigger("destroyed")
    };
    h._onEndedChange = function(j) {
      if (j.value === true) {
        this.trigger("ended")
      }
    };
    h._bindViewEvents = function() {
      if (!this.mediaEmitter) {
        return
      }
      this.mediaEmitter.on("play", this._respondToPlay);
      this.mediaEmitter.on("pause", this._respondToPause);
      this.mediaEmitter.on("timeupdate", this._respondToTimeUpdate);
      this.mediaEmitter.on("ended", this._respondToEnded);
      this.mediaEmitter.on("durationchange", this._respondToDurationChange);
      this.mediaEmitter.on("ratechange", this._respondToRateChange)
    };
    h._respondToPlay = function() {
      this.model.set({
        ended: false,
        paused: false
      })
    };
    h._respondToPause = function() {
      this.model.setPaused(true)
    };
    h._respondToTimeUpdate = function() {
      var j = 0;
      if (this.mediaElement.currentTime) {
        j = this.mediaElement.currentTime
      } else {
        if (this.mediaEmitter.currentTime) {
          j = this.mediaEmitter.currentTime
        } else {
          return
        }
      }
      if (this.getCurrentTime() !== j) {
        this.model.set({
          currentTime: j
        })
      }
    };
    h._respondToEnded = function() {
      this.model.set({
        ended: true,
        paused: true
      });
      this.el.classList.remove("mediaobject-playing");
      this.el.classList.add("mediaobject-ended")
    };
    h._respondToDurationChange = function() {
      var j = 0;
      if (this.mediaElement.duration) {
        j = this.mediaElement.duration
      } else {
        if (this.mediaEmitter.duration) {
          j = this.mediaEmitter.duration
        } else {
          return
        }
      }
      this.model.set({
        duration: j
      })
    };
    h._respondToRateChange = function() {
      var j = 0;
      if (this.mediaElement.playbackRate) {
        j = this.mediaElement.playbackRate
      } else {
        if (this.mediaEmitter.playbackRate) {
          j = this.mediaEmitter.playbackRate
        } else {
          return
        }
      }
      this.model.set({
        playbackRate: j
      })
    };
    h.enhance = function() {};
    h.play = function() {};
    h.pause = function() {};
    h.reset = function() {};
    h.setCurrentTime = function(j) {};
    h.setPlaybackRate = function(j) {};
    h.goToFrame = function(k) {
      var j = k / this.model.frameRate;
      return this.setCurrentTime(j)
    };
    h.goToPercent = function(j) {
      var k = j * this.getDuration();
      return this.setCurrentTime(k)
    };
    h._setReady = function(j) {
      this.model.setReady(j)
    };
    h._setLoadStart = function(j) {
      this.model.setLoadStart(j)
    };
    h._setLoaded = function(j) {
      this.model.setLoaded(j)
    };
    h._setError = function(j) {
      this.model.setError(j)
    };
    h._setDuration = function(j) {
      this.model.setDuration(j)
    };
    h._setPreload = function(j) {
      this.model.setPreload(j)
    };
    h._setAutoplay = function(j) {
      this.model.setAutoplay(j)
    };
    h._setFrameRate = function(j) {
      this.model.setFrameRate(j)
    };
    h._setEnhanced = function(j) {
      this.model.setEnhanced(j)
    };
    h._setDestroyed = function(j) {
      this.model.setDestroyed(j)
    };
    h._setLooping = function(j) {};
    h._destroy = function() {};
    h.getType = function() {
      return this.model.getType()
    };
    h.getPaused = function() {
      return this.model.getPaused()
    };
    h.getEnded = function() {
      return this.model.getEnded()
    };
    h.getReady = function() {
      return this.model.getReady()
    };
    h.getLoadStart = function() {
      return this.model.getLoadStart()
    };
    h.getLoaded = function() {
      return this.model.getLoaded()
    };
    h.getError = function() {
      return this.model.getError()
    };
    h.getDuration = function() {
      return this.model.getDuration()
    };
    h.getEnhanced = function() {
      return this.model.getEnhanced()
    };
    h.getCurrentTime = function() {
      return this.model.getCurrentTime()
    };
    h.getCurrentFrame = function() {
      return Math.floor(this.getCurrentTime() * this.options.frameRate)
    };
    h.getCurrentPercent = function() {
      return (this.model.getCurrentTime() / this.getDuration()) || 0
    };
    h.getPlaybackRate = function() {
      return this.model.getPlaybackRate()
    };
    h.getFrameRate = function() {
      return this.model.getFrameRate()
    };
    h.getPreload = function() {
      return this.model.getPreload()
    };
    h.getAutoplay = function() {
      return this.model.getAutoplay()
    };
    h.getLooping = function() {
      return this.model.getLooping()
    };
    h.getDestroyed = function() {
      if (this.model) {
        return this.model.getDestroyed()
      } else {
        return true
      }
    };
    g.exports = f
  }, {
    "./../models/MediaModel": 332,
    "@marcom/ac-mvc-view": 300,
    "@marcom/ac-object": 303
  }],
  334: [function(b, a, c) {
    var d = b("./BaseView");
    var i = b("@marcom/ac-dom-nodes");
    var g = b("@marcom/ac-flow").createFlow;
    var j = b("@marcom/ac-raf-emitter/draw");
    var h = function(l, m, k) {
      d.call(this, l, m, k);
      this._onLoad = this._onLoad.bind(this);
      this._onError = this._onError.bind(this);
      this._onReady = this._onReady.bind(this)
    };
    var f = h.prototype = Object.create(d.prototype);
    f._createMediaElement = function() {
      this.mediaElement = document.createElement("canvas")
    };
    f._createMediaEmitter = function() {
      this.flowOptions = {
        element: this.mediaElement,
        preload: false,
        keyframeCache: this.options.keyframeCache || false
      };
      this.mediaEmitter = g(this.flowOptions, this.mediaSrc)
    };
    f._createMediaLoader = function() {
      this.mediaLoader = this.mediaEmitter
    };
    f.load = function() {
      this._setLoadStart(true);
      this.mediaLoader.once("loaded", this._onLoad);
      this.mediaLoader.once("error", this._onError);
      this.mediaEmitter.once("canplaythrough", this._onReady);
      if (!this.loaded) {
        this.mediaLoader.load()["catch"](this._onError)
      }
    };
    f._onLoad = function() {
      this._setLoaded(true)
    };
    f._onError = function() {
      if (this.model) {
        this._setError(true)
      }
    };
    f._onReady = function() {
      this._setReady(true);
      this._setDuration(this.mediaEmitter.duration);
      this.setPlaybackRate(this.getPlaybackRate());
      this._totalFrames = this._getTotalFrames();
      if (this.getAutoplay()) {
        if (this.getEnhanced === false) {
          this.enhance()
        }
        this.play()
      }
    };
    f._getTotalFrames = function() {
      return this.getDuration() * this.getFrameRate()
    };
    f.enhance = function() {
      this._setEnhanced(true);
      j(function() {
        if (this.mediaElement) {
          this._inject()
        }
      }.bind(this))
    };
    f._inject = function() {
      i.insertFirstChild(this.mediaElement, this.el)
    };
    f._destroy = function() {
      this._remove();
      if (this.mediaEmitter) {
        this.mediaEmitter.destroy()
      }
    };
    f._remove = function() {
      i.remove(this.mediaElement)
    };
    f.play = function() {
      if (this.model.getPaused() === false) {
        return
      }
      if (this.mediaEmitter.currentTime >= this.getDuration()) {
        this.setCurrentTime(0)
      }
      if (this.getReady() && this.mediaEmitter !== null) {
        this.mediaEmitter.play()
      }
    };
    f.pause = function() {
      if (this.model.getPaused() === true) {
        return
      }
      this.mediaEmitter.pause()
    };
    f.reset = function() {
      if (this.model.getCurrentTime() === 0) {
        return
      }
      this.setCurrentTime(0);
      this.pause()
    };
    f.setCurrentTime = function(k) {
      if (k < 0) {
        k = 0
      }
      if (k > this.getDuration()) {
        k = this.getDuration()
      }
      this.mediaEmitter.currentTime = k
    };
    f.setPlaybackRate = function(k) {
      this.mediaEmitter.playbackRate = k
    };
    f._setLooping = function(k) {
      this.mediaEmitter.loop = k;
      this.model.setLooping(k)
    };
    a.exports = h
  }, {
    "./BaseView": 333,
    "@marcom/ac-dom-nodes": 218,
    "@marcom/ac-flow": 265,
    "@marcom/ac-raf-emitter/draw": 328
  }],
  335: [function(d, f, c) {
    var b = d("./VideoView");
    var i = b.prototype;
    var a = d("@marcom/ac-raf-emitter/RAFEmitter");
    var g = function(k, l, j) {
      b.call(this, k, l, j);
      this._polyfillRAFEmitter = j.polyfillRAFEmitter || new a();
      this._boundHandlePolyfillRAFEmitterDraw = this._handlePolyfillRAFEmitterDraw.bind(this);
      this._polyfillRAFEmitter.on("draw", this._boundHandlePolyfillRAFEmitterDraw)
    };
    var h = g.prototype = Object.create(b.prototype);
    h._initInlineVideo = function() {
      i._initInlineVideo.apply(this, arguments);
      this._shouldLoop = false
    };
    h._destroy = function() {
      i._destroy.apply(this, arguments);
      if (this._polyfillRAFEmitter) {
        this._polyfillRAFEmitter.destroy();
        this._polyfillRAFEmitter = null
      }
    };
    h.play = function() {
      if (this.model.getPaused() === false) {
        return
      }
      this.model.setPaused(false);
      this._polyfillRAFEmitter.run()
    };
    h.pause = function() {
      if (this.model.getPaused() === true) {
        return
      }
      this.model.setPaused(true);
      this._polyfillRAFEmitter.cancel()
    };
    h.setCurrentTime = function(j) {
      i.setCurrentTime.apply(this, arguments);
      this._polyfillRAFEmitter.run()
    };
    h._handlePolyfillRAFEmitterDraw = function(p) {
      var m = this.model.getCurrentTime();
      var l = this.model.getPlaybackRate();
      var o = this.mediaElement.duration;
      var q = (p.delta / 1000) * l;
      if (this.model.getPaused()) {
        return
      }
      m += q;
      var j = (m <= 0);
      var r = (m >= o);
      var n = (l >= 0);
      var k = (l < 0);
      if (j) {
        m = 0
      }
      if (r) {
        m = o
      }
      if (this._shouldLoop) {
        this._shouldLoop = false;
        if (n) {
          this.setCurrentTime(q)
        } else {
          this.setCurrentTime(o - q)
        }
        return
      }
      this.setCurrentTime(m);
      if ((j && k) || (r && n)) {
        if (this.model.getLooping()) {
          this._shouldLoop = true
        } else {
          this.pause();
          this.model.setEnded(true)
        }
      }
    };
    f.exports = g
  }, {
    "./VideoView": 336,
    "@marcom/ac-raf-emitter/RAFEmitter": 324
  }],
  336: [function(c, b, f) {
    var g = c("./BaseView");
    var o = g.prototype;
    var m = c("@marcom/ac-raf-emitter/draw");
    var k = c("@marcom/ac-dom-nodes");
    var n = c("@marcom/ac-dom-emitter").DOMEmitter;
    var l = c("@marcom/ac-dom-styles");
    var d = c("@marcom/ac-asset-loader").assetLoader;
    var a = c("@marcom/ac-useragent");
    var j = c("@marcom/ac-feature").isHandheld;
    var i = c("@marcom/ac-feature").isTablet;
    var p = function(r, s, q) {
      this.srcForVideoEl = null;
      this._cannotPlayInlineVideo = null;
      this._onLoaded = this._onLoaded.bind(this);
      this._onReady = this._onReady.bind(this);
      g.call(this, r, s, q);
      if (q.iosInline) {
        this._initInlineVideo()
      }
    };
    var h = p.prototype = Object.create(g.prototype);
    h.inlineClassName = "mediaobject-ios-inline-video";
    h.inlineAttribute = "playsinline";
    h._cannotPlayInlineVideo = null;
    h._initInlineVideo = function() {
      if (this.mediaElement.hasAttribute("controls")) {
        this.mediaElement.removeAttribute("controls")
      }
      this.mediaElement.setAttribute(this.inlineAttribute, "");
      this.mediaElement.classList.add(this.inlineClassName)
    };
    h._createMediaElement = function() {
      this.mediaElement = document.createElement("video");
      this._muteMediaElement(this.mediaElement)
    };
    h._muteMediaElement = function(q) {
      q.setAttribute("muted", "");
      q.muted = true
    };
    h._createMediaEmitter = function() {
      this.mediaEmitter = new n(this.mediaElement)
    };
    h._createMediaLoader = function() {
      var r, s;
      this.mediaSrc.basePath = this._forceTrailingSlash(this.mediaSrc.basePath);
      if (this.mediaSrc.splitFileLoading) {
        r = this.mediaSrc.basePath;
        var q = {
          src: r,
          type: "splitfile"
        };
        this.mediaLoader = d.createAssetGroup(q)
      } else {
        this.mediaSrc.fileFormat = this._checkFileFormat(this.mediaSrc.fileFormat);
        r = this.mediaSrc.basePath + this.mediaSrc.filename + this.mediaSrc.fileFormat;
        this.srcForVideoEl = r
      }
    };
    h._forceTrailingSlash = function(q) {
      if (q && q.lastIndexOf("/") !== q.length - 1) {
        q = q + "/"
      }
      return q
    };
    h._checkFileFormat = function(q) {
      if (q && q.lastIndexOf(".") !== 0) {
        q = "." + q
      }
      return q
    };
    h.load = function() {
      this._setLoadStart(true);
      if (this.mediaSrc.splitFileLoading) {
        var q = function(s) {
          var r = window.URL.createObjectURL(s.latest.data);
          if (this.mediaEmitter) {
            this.mediaEmitter.once("loadeddata", this._onLoaded);
            this.mediaEmitter.once("canplaythrough", this._onReady)
          }
          this.mediaElement.src = r;
          this.mediaElement.load();
          this.mediaLoader.destroy()
        }.bind(this);
        this.mediaLoader.load().then(q)["catch"](this._setError.bind(this, true))
      } else {
        if (!this.cannotPlayInlineVideo()) {
          this.mediaEmitter.once("loadeddata", this._onLoaded);
          this.mediaEmitter.once("canplaythrough", this._onReady)
        }
        this.mediaElement.src = this.srcForVideoEl;
        if (this.cannotPlayInlineVideo()) {
          this._onLoaded()
        } else {
          this.mediaElement.load()
        }
      }
    };
    h._onLoaded = function() {
      this._setLoaded(true)
    };
    h.cannotPlayInlineVideo = function() {
      if (this._cannotPlayInlineVideo !== null) {
        return this._cannotPlayInlineVideo
      }
      var q = a.os === "iOS" && j();
      var r = a.os === "iOS" && i() && a.version < 8;
      this._cannotPlayInlineVideo = q || r;
      return this._cannotPlayInlineVideo
    };
    h._onReady = function() {
      this._setReady(true);
      if (this.getAutoplay()) {
        if (!this.getEnhanced()) {
          this.enhance()
        }
        this.play()
      }
    };
    h.enhance = function() {
      this._setEnhanced(true);
      m(function() {
        if (this.mediaElement.tagName === "VIDEO") {
          k.insertLastChild(this.mediaElement, this.el);
          l.setStyle(this.mediaElement, {
            visibility: "hidden"
          });
          m(function() {
            if (this.mediaElement) {
              this.setPlaybackRate(this.getPlaybackRate());
              l.setStyle(this.mediaElement, {
                visibility: "visible"
              })
            }
          }.bind(this))
        }
      }.bind(this))
    };
    h._destroy = function() {
      this._remove();
      if (this.mediaEmitter) {
        this.mediaEmitter.off()
      }
      if (this.mediaLoader) {
        this.mediaLoader.destroy()
      }
    };
    h._remove = function() {
      k.remove(this.mediaElement)
    };
    h._onEndedChange = function(q) {
      o._onEndedChange.call(this, q);
      if (!this.model.getPaused()) {
        this.mediaElement.pause()
      }
      if (a.os === "iOS" && j() && q.value === true) {
        this.mediaElement.webkitExitFullScreen()
      }
    };
    h.play = function() {
      if (this.model.getPaused() === false) {
        return
      }
      var q = this.mediaElement.play();
      if (q && typeof Promise !== "undefined" && q instanceof Promise) {
        q.then(function() {})["catch"](function() {})
      }
    };
    h.pause = function() {
      if (this.model.getPaused() === true) {
        return
      }
      this.mediaElement.pause()
    };
    h.reset = function() {
      if (this.model.getCurrentTime() === 0) {
        return
      }
      this.setCurrentTime(0);
      this.pause()
    };
    h.setCurrentTime = function(q) {
      if (!this.mediaElement.duration) {
        return
      }
      this.model.setCurrentTime(q);
      this.mediaElement.currentTime = q
    };
    h.setPlaybackRate = function(q) {
      this.mediaElement.playbackRate = q
    };
    h._setLooping = function(q) {
      this.mediaElement.loop = q;
      this.model.setLooping(q)
    };
    b.exports = p
  }, {
    "./BaseView": 333,
    "@marcom/ac-asset-loader": 179,
    "@marcom/ac-dom-emitter": 209,
    "@marcom/ac-dom-nodes": 218,
    "@marcom/ac-dom-styles": 249,
    "@marcom/ac-feature": 22,
    "@marcom/ac-raf-emitter/draw": 328,
    "@marcom/ac-useragent": 400
  }],
  337: [function(b, c, a) {
    (function(h) {
      if (!h.console) {
        h.console = {}
      }
      var d = h.console;
      var k, j;
      var i = function() {};
      var g = ["memory"];
      var f = ("assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn").split(",");
      while (k = g.pop()) {
        if (!d[k]) {
          d[k] = {}
        }
      }
      while (j = f.pop()) {
        if (typeof d[j] !== "function") {
          d[j] = i
        }
      }
    })(typeof window === "undefined" ? this : window)
  }, {}],
  338: [function(b, c, a) {
    arguments[4][154][0].apply(a, arguments)
  }, {
    "./promise/polyfill": 342,
    "./promise/promise": 343,
    dup: 154
  }],
  339: [function(b, c, a) {
    arguments[4][155][0].apply(a, arguments)
  }, {
    "./utils": 347,
    dup: 155
  }],
  340: [function(b, c, a) {
    arguments[4][156][0].apply(a, arguments)
  }, {
    _process: 44,
    dup: 156
  }],
  341: [function(b, c, a) {
    arguments[4][157][0].apply(a, arguments)
  }, {
    dup: 157
  }],
  342: [function(b, c, a) {
    arguments[4][158][0].apply(a, arguments)
  }, {
    "./promise": 343,
    "./utils": 347,
    dup: 158
  }],
  343: [function(b, c, a) {
    arguments[4][159][0].apply(a, arguments)
  }, {
    "./all": 339,
    "./asap": 340,
    "./config": 341,
    "./race": 344,
    "./reject": 345,
    "./resolve": 346,
    "./utils": 347,
    dup: 159
  }],
  344: [function(b, c, a) {
    arguments[4][160][0].apply(a, arguments)
  }, {
    "./utils": 347,
    dup: 160
  }],
  345: [function(b, c, a) {
    arguments[4][161][0].apply(a, arguments)
  }, {
    dup: 161
  }],
  346: [function(b, c, a) {
    arguments[4][162][0].apply(a, arguments)
  }, {
    dup: 162
  }],
  347: [function(b, c, a) {
    arguments[4][163][0].apply(a, arguments)
  }, {
    dup: 163
  }],
  348: [function(b, c, a) {
    /*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
    (function() {
      if (window.matchMedia && window.matchMedia("all").addListener) {
        return false
      }
      var i = window.matchMedia,
        d = i("only all").matches,
        h = false,
        j = 0,
        g = [],
        f = function(k) {
          clearTimeout(j);
          j = setTimeout(function() {
            for (var p = 0, m = g.length; p < m; p++) {
              var l = g[p].mql,
                q = g[p].listeners || [],
                r = i(l.media).matches;
              if (r !== l.matches) {
                l.matches = r;
                for (var n = 0, o = q.length; n < o; n++) {
                  q[n].call(window, l)
                }
              }
            }
          }, 30)
        };
      window.matchMedia = function(n) {
        var k = i(n),
          m = [],
          l = 0;
        k.addListener = function(o) {
          if (!d) {
            return
          }
          if (!h) {
            h = true;
            window.addEventListener("resize", f, true)
          }
          if (l === 0) {
            l = g.push({
              mql: k,
              listeners: m
            })
          }
          m.push(o)
        };
        k.removeListener = function(q) {
          for (var p = 0, o = m.length; p < o; p++) {
            if (m[p] === q) {
              m.splice(p, 1)
            }
          }
        };
        return k
      }
    }())
  }, {}],
  349: [function(b, c, a) {
    /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
    ;
    window.matchMedia || (window.matchMedia = function() {
      var f = (window.styleMedia || window.media);
      if (!f) {
        var g = document.createElement("style"),
          d = document.getElementsByTagName("script")[0],
          h = null;
        g.type = "text/css";
        g.id = "matchmediajs-test";
        d.parentNode.insertBefore(g, d);
        h = ("getComputedStyle" in window) && window.getComputedStyle(g, null) || g.currentStyle;
        f = {
          matchMedium: function(i) {
            var j = "@media " + i + "{ #matchmediajs-test { width: 1px; } }";
            if (g.styleSheet) {
              g.styleSheet.cssText = j
            } else {
              g.textContent = j
            }
            return h.width === "1px"
          }
        }
      }
      return function(i) {
        return {
          matches: f.matchMedium(i || "all"),
          media: i || "all"
        }
      }
    }())
  }, {}],
  350: [function(b, c, a) {
    if (!Array.isArray) {
      Array.isArray = function(d) {
        return Object.prototype.toString.call(d) === "[object Array]"
      }
    }
  }, {}],
  351: [function(b, c, a) {
    if (!Array.prototype.filter) {
      Array.prototype.filter = function d(l, k) {
        var j = Object(this);
        var f = j.length >>> 0;
        var h;
        var g = [];
        if (typeof l !== "function") {
          throw new TypeError(l + " is not a function")
        }
        for (h = 0; h < f; h += 1) {
          if (h in j && l.call(k, j[h], h, j)) {
            g.push(j[h])
          }
        }
        return g
      }
    }
  }, {}],
  352: [function(b, c, a) {
    if (!Array.prototype.forEach) {
      Array.prototype.forEach = function d(l, k) {
        var j = Object(this);
        var f;
        var g;
        if (typeof l !== "function") {
          throw new TypeError("No function object passed to forEach.")
        }
        var h = this.length;
        for (f = 0; f < h; f += 1) {
          g = j[f];
          l.call(k, g, f, j)
        }
      }
    }
  }, {}],
  353: [function(b, c, a) {
    if (!Array.prototype.indexOf) {
      Array.prototype.indexOf = function d(g, h) {
        var i = h || 0;
        var f = 0;
        if (i < 0) {
          i = this.length + h - 1;
          if (i < 0) {
            throw "Wrapped past beginning of array while looking up a negative start index."
          }
        }
        for (f = 0; f < this.length; f++) {
          if (this[f] === g) {
            return f
          }
        }
        return (-1)
      }
    }
  }, {}],
  354: [function(b, c, a) {
    if (!Array.prototype.reduce) {
      Array.prototype.reduce = function d(l, h) {
        var j = Object(this);
        var g = j.length >>> 0;
        var k = 0;
        var f;
        if (typeof l !== "function") {
          throw new TypeError(l + " is not a function")
        }
        if (typeof h === "undefined") {
          if (!g) {
            throw new TypeError("Reduce of empty array with no initial value")
          }
          f = j[0];
          k = 1
        } else {
          f = h
        }
        while (k < g) {
          if (k in j) {
            f = l.call(undefined, f, j[k], k, j);
            k += 1
          }
        }
        return f
      }
    }
  }, {}],
  355: [function(b, c, a) {
    (function() {
      var d = Array.prototype.slice;
      try {
        d.call(document.documentElement)
      } catch (f) {
        Array.prototype.slice = function(n, j) {
          j = (typeof j !== "undefined") ? j : this.length;
          if (Object.prototype.toString.call(this) === "[object Array]") {
            return d.call(this, n, j)
          }
          var l, h = [],
            k, g = this.length;
          var o = n || 0;
          o = (o >= 0) ? o : g + o;
          var m = (j) ? j : g;
          if (j < 0) {
            m = g + j
          }
          k = m - o;
          if (k > 0) {
            h = new Array(k);
            if (this.charAt) {
              for (l = 0; l < k; l++) {
                h[l] = this.charAt(o + l)
              }
            } else {
              for (l = 0; l < k; l++) {
                h[l] = this[o + l]
              }
            }
          }
          return h
        }
      }
    }())
  }, {}],
  356: [function(b, c, a) {
    if (document.createEvent) {
      try {
        new window.CustomEvent("click")
      } catch (d) {
        window.CustomEvent = (function() {
          function f(h, i) {
            i = i || {
              bubbles: false,
              cancelable: false,
              detail: undefined
            };
            var g = document.createEvent("CustomEvent");
            g.initCustomEvent(h, i.bubbles, i.cancelable, i.detail);
            return g
          }
          f.prototype = window.Event.prototype;
          return f
        }())
      }
    }
  }, {}],
  357: [function(b, c, a) {
    /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
    ;
    if ("document" in self) {
      if (!("classList" in document.createElement("_"))) {
        (function(n) {
          if (!("Element" in n)) {
            return
          }
          var d = "classList",
            j = "prototype",
            q = n.Element[j],
            f = Object,
            o = String[j].trim || function() {
              return this.replace(/^\s+|\s+$/g, "")
            },
            g = Array[j].indexOf || function(u) {
              var t = 0,
                s = this.length;
              for (; t < s; t++) {
                if (t in this && this[t] === u) {
                  return t
                }
              }
              return -1
            },
            r = function(s, t) {
              this.name = s;
              this.code = DOMException[s];
              this.message = t
            },
            k = function(t, s) {
              if (s === "") {
                throw new r("SYNTAX_ERR", "An invalid or illegal string was specified")
              }
              if (/\s/.test(s)) {
                throw new r("INVALID_CHARACTER_ERR", "String contains an invalid character")
              }
              return g.call(t, s)
            },
            h = function(w) {
              var v = o.call(w.getAttribute("class") || ""),
                u = v ? v.split(/\s+/) : [],
                t = 0,
                s = u.length;
              for (; t < s; t++) {
                this.push(u[t])
              }
              this._updateClassName = function() {
                w.setAttribute("class", this.toString())
              }
            },
            i = h[j] = [],
            m = function() {
              return new h(this)
            };
          r[j] = Error[j];
          i.item = function(s) {
            return this[s] || null
          };
          i.contains = function(s) {
            s += "";
            return k(this, s) !== -1
          };
          i.add = function() {
            var w = arguments,
              v = 0,
              t = w.length,
              u, s = false;
            do {
              u = w[v] + "";
              if (k(this, u) === -1) {
                this.push(u);
                s = true
              }
            } while (++v < t);
            if (s) {
              this._updateClassName()
            }
          };
          i.remove = function() {
            var x = arguments,
              w = 0,
              t = x.length,
              v, s = false,
              u;
            do {
              v = x[w] + "";
              u = k(this, v);
              while (u !== -1) {
                this.splice(u, 1);
                s = true;
                u = k(this, v)
              }
            } while (++w < t);
            if (s) {
              this._updateClassName()
            }
          };
          i.toggle = function(t, u) {
            t += "";
            var s = this.contains(t),
              v = s ? u !== true && "remove" : u !== false && "add";
            if (v) {
              this[v](t)
            }
            if (u === true || u === false) {
              return u
            } else {
              return !s
            }
          };
          i.toString = function() {
            return this.join(" ")
          };
          if (f.defineProperty) {
            var p = {
              get: m,
              enumerable: true,
              configurable: true
            };
            try {
              f.defineProperty(q, d, p)
            } catch (l) {
              if (l.number === -2146823252) {
                p.enumerable = false;
                f.defineProperty(q, d, p)
              }
            }
          } else {
            if (f[j].__defineGetter__) {
              q.__defineGetter__(d, m)
            }
          }
        }(self))
      } else {
        (function() {
          var f = document.createElement("_");
          f.classList.add("c1", "c2");
          if (!f.classList.contains("c2")) {
            var g = function(i) {
              var h = DOMTokenList.prototype[i];
              DOMTokenList.prototype[i] = function(l) {
                var k, j = arguments.length;
                for (k = 0; k < j; k++) {
                  l = arguments[k];
                  h.call(this, l)
                }
              }
            };
            g("add");
            g("remove")
          }
          f.classList.toggle("c3", false);
          if (f.classList.contains("c3")) {
            var d = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(h, i) {
              if (1 in arguments && !this.contains(h) === !i) {
                return i
              } else {
                return d.call(this, h)
              }
            }
          }
          f = null
        }())
      }
    }
  }, {}],
  358: [function(b, c, a) {
    if (!Function.prototype.bind) {
      Function.prototype.bind = function(d) {
        if (typeof this !== "function") {
          throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
        }
        var i = Array.prototype.slice.call(arguments, 1);
        var h = this;
        var f = function() {};
        var g = function() {
          return h.apply((this instanceof f && d) ? this : d, i.concat(Array.prototype.slice.call(arguments)))
        };
        f.prototype = this.prototype;
        g.prototype = new f();
        return g
      }
    }
  }, {}],
  359: [function(require, module, exports) {
    if (typeof JSON !== "object") {
      JSON = {}
    }(function() {
      function f(n) {
        return n < 10 ? "0" + n : n
      }
      if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function() {
          return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
          return this.valueOf()
        }
      }
      var cx, escapable, gap, indent, meta, rep;

      function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
          var c = meta[a];
          return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + string + '"'
      }

      function str(key, holder) {
        var i, k, v, length, mind = gap,
          partial, value = holder[key];
        if (value && typeof value === "object" && typeof value.toJSON === "function") {
          value = value.toJSON(key)
        }
        if (typeof rep === "function") {
          value = rep.call(holder, key, value)
        }
        switch (typeof value) {
          case "string":
            return quote(value);
          case "number":
            return isFinite(value) ? String(value) : "null";
          case "boolean":
          case "null":
            return String(value);
          case "object":
            if (!value) {
              return "null"
            }
            gap += indent;
            partial = [];
            if (Object.prototype.toString.apply(value) === "[object Array]") {
              length = value.length;
              for (i = 0; i < length; i += 1) {
                partial[i] = str(i, value) || "null"
              }
              v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
              gap = mind;
              return v
            }
            if (rep && typeof rep === "object") {
              length = rep.length;
              for (i = 0; i < length; i += 1) {
                if (typeof rep[i] === "string") {
                  k = rep[i];
                  v = str(k, value);
                  if (v) {
                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                  }
                }
              }
            } else {
              for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                  v = str(k, value);
                  if (v) {
                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                  }
                }
              }
            }
            v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
            gap = mind;
            return v
        }
      }
      if (typeof JSON.stringify !== "function") {
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        meta = {
          "\b": "\\b",
          "\t": "\\t",
          "\n": "\\n",
          "\f": "\\f",
          "\r": "\\r",
          '"': '\\"',
          "\\": "\\\\"
        };
        JSON.stringify = function(value, replacer, space) {
          var i;
          gap = "";
          indent = "";
          if (typeof space === "number") {
            for (i = 0; i < space; i += 1) {
              indent += " "
            }
          } else {
            if (typeof space === "string") {
              indent = space
            }
          }
          rep = replacer;
          if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
            throw new Error("JSON.stringify")
          }
          return str("", {
            "": value
          })
        }
      }
      if (typeof JSON.parse !== "function") {
        cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        JSON.parse = function(text, reviver) {
          var j;

          function walk(holder, key) {
            var k, v, value = holder[key];
            if (value && typeof value === "object") {
              for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                  v = walk(value, k);
                  if (v !== undefined) {
                    value[k] = v
                  } else {
                    delete value[k]
                  }
                }
              }
            }
            return reviver.call(holder, key, value)
          }
          text = String(text);
          cx.lastIndex = 0;
          if (cx.test(text)) {
            text = text.replace(cx, function(a) {
              return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            })
          }
          if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
            j = eval("(" + text + ")");
            return typeof reviver === "function" ? walk({
              "": j
            }, "") : j
          }
          throw new SyntaxError("JSON.parse")
        }
      }
    }())
  }, {}],
  360: [function(b, c, a) {
    if (!Object.create) {
      var d = function() {};
      Object.create = function(f) {
        if (arguments.length > 1) {
          throw new Error("Second argument not supported")
        }
        if (f === null || typeof f !== "object") {
          throw new TypeError("Object prototype may only be an Object.")
        }
        d.prototype = f;
        return new d()
      }
    }
  }, {}],
  361: [function(b, c, a) {
    if (!Object.keys) {
      Object.keys = function d(g) {
        var f = [];
        var h;
        if ((!g) || (typeof g.hasOwnProperty !== "function")) {
          throw "Object.keys called on non-object."
        }
        for (h in g) {
          if (g.hasOwnProperty(h)) {
            f.push(h)
          }
        }
        return f
      }
    }
  }, {}],
  362: [function(b, c, a) {
    c.exports = b("es6-promise").polyfill()
  }, {
    "es6-promise": 338
  }],
  363: [function(b, c, a) {
    b("console-polyfill")
  }, {
    "console-polyfill": 337
  }],
  364: [function(b, c, a) {
    b("matchmedia-polyfill");
    b("matchmedia-polyfill/matchMedia.addListener")
  }, {
    "matchmedia-polyfill": 349,
    "matchmedia-polyfill/matchMedia.addListener": 348
  }],
  365: [function(b, c, a) {
    (function() {
      var f = 0;
      var g = ["ms", "moz", "webkit", "o"];
      for (var d = 0; d < g.length && !window.requestAnimationFrame; ++d) {
        window.requestAnimationFrame = window[g[d] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[g[d] + "CancelAnimationFrame"] || window[g[d] + "CancelRequestAnimationFrame"]
      }
      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(l, i) {
          var h = Date.now();
          var j = Math.max(0, 16 - (h - f));
          var k = window.setTimeout(function() {
            l(h + j)
          }, j);
          f = h + j;
          return k
        }
      }
      if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(h) {
          clearTimeout(h)
        }
      }
    }())
  }, {}],
  366: [function(b, c, a) {
    arguments[4][63][0].apply(a, arguments)
  }, {
    "./shared/getEventType": 373,
    "./utils/addEventListener": 374,
    dup: 63
  }],
  367: [function(b, c, a) {
    arguments[4][1][0].apply(a, arguments)
  }, {
    "./shared/camelCasedEventTypes": 368,
    "./shared/prefixHelper": 369,
    "./shared/windowFallbackEventTypes": 370,
    "./utils/eventTypeAvailable": 371,
    dup: 1
  }],
  368: [function(b, c, a) {
    arguments[4][2][0].apply(a, arguments)
  }, {
    dup: 2
  }],
  369: [function(b, c, a) {
    arguments[4][3][0].apply(a, arguments)
  }, {
    dup: 3
  }],
  370: [function(b, c, a) {
    arguments[4][4][0].apply(a, arguments)
  }, {
    dup: 4
  }],
  371: [function(b, c, a) {
    arguments[4][5][0].apply(a, arguments)
  }, {
    dup: 5
  }],
  372: [function(b, c, a) {
    arguments[4][72][0].apply(a, arguments)
  }, {
    "./shared/getEventType": 373,
    "./utils/removeEventListener": 375,
    dup: 72
  }],
  373: [function(b, c, a) {
    arguments[4][73][0].apply(a, arguments)
  }, {
    "@marcom/ac-prefixer/getEventType": 367,
    dup: 73
  }],
  374: [function(b, c, a) {
    arguments[4][77][0].apply(a, arguments)
  }, {
    dup: 77
  }],
  375: [function(b, c, a) {
    arguments[4][79][0].apply(a, arguments)
  }, {
    dup: 79
  }],
  376: [function(b, c, a) {
    arguments[4][85][0].apply(a, arguments)
  }, {
    dup: 85
  }],
  377: [function(b, c, a) {
    arguments[4][86][0].apply(a, arguments)
  }, {
    dup: 86
  }],
  378: [function(b, c, a) {
    arguments[4][87][0].apply(a, arguments)
  }, {
    dup: 87
  }],
  379: [function(b, c, a) {
    arguments[4][89][0].apply(a, arguments)
  }, {
    dup: 89
  }],
  380: [function(b, c, a) {
    arguments[4][90][0].apply(a, arguments)
  }, {
    dup: 90
  }],
  381: [function(b, c, a) {
    arguments[4][100][0].apply(a, arguments)
  }, {
    "../isNode": 385,
    dup: 100
  }],
  382: [function(b, c, a) {
    arguments[4][101][0].apply(a, arguments)
  }, {
    "../COMMENT_NODE": 376,
    "../DOCUMENT_FRAGMENT_NODE": 377,
    "../ELEMENT_NODE": 379,
    "../TEXT_NODE": 380,
    "./isNodeType": 381,
    dup: 101
  }],
  383: [function(b, c, a) {
    arguments[4][104][0].apply(a, arguments)
  }, {
    "./DOCUMENT_FRAGMENT_NODE": 377,
    "./internal/isNodeType": 381,
    dup: 104
  }],
  384: [function(b, c, a) {
    arguments[4][106][0].apply(a, arguments)
  }, {
    "./ELEMENT_NODE": 379,
    "./internal/isNodeType": 381,
    dup: 106
  }],
  385: [function(b, c, a) {
    arguments[4][107][0].apply(a, arguments)
  }, {
    dup: 107
  }],
  386: [function(b, c, a) {
    arguments[4][110][0].apply(a, arguments)
  }, {
    "./internal/validate": 382,
    dup: 110
  }],
  387: [function(b, c, a) {
    arguments[4][202][0].apply(a, arguments)
  }, {
    "@marcom/ac-dom-nodes/COMMENT_NODE": 376,
    "@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE": 377,
    "@marcom/ac-dom-nodes/DOCUMENT_NODE": 378,
    "@marcom/ac-dom-nodes/ELEMENT_NODE": 379,
    "@marcom/ac-dom-nodes/TEXT_NODE": 380,
    "@marcom/ac-dom-nodes/isNode": 385,
    "@marcom/ac-polyfills/Array/prototype.indexOf": 353,
    dup: 202
  }],
  388: [function(b, c, a) {
    arguments[4][204][0].apply(a, arguments)
  }, {
    "./internal/validate": 387,
    "./shims/querySelectorAll": 389,
    "@marcom/ac-polyfills/Array/prototype.slice": 355,
    dup: 204
  }],
  389: [function(b, c, a) {
    arguments[4][206][0].apply(a, arguments)
  }, {
    "@marcom/ac-dom-nodes/isDocumentFragment": 383,
    "@marcom/ac-dom-nodes/isElement": 384,
    "@marcom/ac-dom-nodes/remove": 386,
    "@marcom/ac-polyfills/Array/prototype.indexOf": 353,
    dup: 206
  }],
  390: [function(b, c, a) {
    arguments[4][126][0].apply(a, arguments)
  }, {
    "./ac-event-emitter-micro/EventEmitterMicro": 391,
    dup: 126
  }],
  391: [function(b, c, a) {
    arguments[4][127][0].apply(a, arguments)
  }, {
    dup: 127
  }],
  392: [function(b, c, a) {
    arguments[4][51][0].apply(a, arguments)
  }, {
    "./extend": 393,
    dup: 51
  }],
  393: [function(b, c, a) {
    arguments[4][52][0].apply(a, arguments)
  }, {
    "@marcom/ac-polyfills/Array/prototype.forEach": 352,
    dup: 52
  }],
  394: [function(b, c, a) {
    arguments[4][167][0].apply(a, arguments)
  }, {
    "./ac-queue/LiveQueue": 395,
    "./ac-queue/Queue": 396,
    "./ac-queue/QueueItem": 397,
    dup: 167
  }],
  395: [function(b, c, a) {
    arguments[4][168][0].apply(a, arguments)
  }, {
    "./Queue": 396,
    "./QueueItem": 397,
    "@marcom/ac-polyfills/Function/prototype.bind": 358,
    "@marcom/ac-polyfills/Promise": 362,
    "@marcom/ac-polyfills/requestAnimationFrame": 365,
    dup: 168
  }],
  396: [function(b, c, a) {
    arguments[4][169][0].apply(a, arguments)
  }, {
    "./QueueItem": 397,
    dup: 169
  }],
  397: [function(b, c, a) {
    arguments[4][170][0].apply(a, arguments)
  }, {
    dup: 170
  }],
  398: [function(d, b, j) {
    d("@marcom/ac-polyfills/Object/create");
    d("@marcom/ac-polyfills/Element/prototype.classList");
    var g = d("@marcom/ac-object/defaults");
    var i = d("@marcom/ac-queue").LiveQueue;
    var m = d("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var h = d("@marcom/ac-dom-events/addEventListener");
    var c = d("@marcom/ac-dom-events/removeEventListener");
    var a = d("@marcom/ac-dom-traversal/querySelectorAll");
    var f = {
      container: document.body,
      includeContainer: false
    };
    var l = {
      loadingPoolSize: 8,
      timeout: null,
      imageClassName: "progressive-image"
    };

    function n(o) {
      m.call(this);
      this.options = g(f, o);
      this.loadingOptions = null;
      this.els = [];
      this.loadingQueue = null;
      this._queueItems = [];
      this._queueItemsObj = {};
      this._loadOrder = [];
      this._timeout = null;
      this._didCallLoad = false
    }
    var k = n.prototype = Object.create(m.prototype);
    k.load = function(r) {
      if (this._didCallLoad) {
        return
      }
      this._didCallLoad = true;
      this.loadingOptions = g(l, r);
      this.loadingQueue = new i(this.loadingOptions.loadingPoolSize);
      var q = this._getProgressiveClassName(),
        p = "." + q;
      this.els = a(p, this.options.container);
      if (this.options.includeContainer && this.options.container.classList.contains(q)) {
        this.els.unshift(this.options.container)
      }
      var s, o = this.els.length,
        t;
      for (s = 0; s < o; s++) {
        t = {
          queueItem: this.loadingQueue.enqueue(this._loadNextItem.bind(this, s), s),
          el: this.els[s],
          id: s
        };
        this._queueItems.push(t);
        this._queueItemsObj[s] = t
      }
      this.loadingQueue.start();
      if (typeof this.loadingOptions.timeout === "number") {
        this._timeout = setTimeout(this.cancel.bind(this), this.loadingOptions.timeout)
      }
    };
    k.setVisible = function(o) {
      o.classList.remove(this.loadingOptions.imageClassName)
    };
    k.cancel = function() {
      if (this.els) {
        var p, o = this.els.length;
        for (p = 0; p < o; p++) {
          this.setVisible(this.els[p])
        }
      }
      this._handleLoadingComplete()
    };
    k.destroy = function() {
      this.cancel();
      this.off();
      m.prototype.destroy.call(this)
    };
    k._loadNextItem = function(o) {
      return new Promise(function(p, r, q) {
        var s = this._queueItemsObj[p];
        this._loadAndSetVisible(s.el).then(function() {
          var t = this._queueItems.indexOf(s);
          this._queueItems.splice(t, 1);
          this._queueItemsObj[s.id] = null;
          r();
          this._handleImageLoad(s.el);
          s = r = null;
          if (this.loadingQueue.count() === 1) {
            this._handleLoadingComplete()
          }
        }.bind(this))
      }.bind(this, o))
    };
    k._loadAndSetVisible = function(o) {
      this.setVisible(o);
      var p = this._getBackgroundImageSrc(o);
      return this._loadImage(p)
    };
    k._getBackgroundImageSrc = function(p) {
      var o = p.currentStyle;
      if (!o) {
        o = window.getComputedStyle(p, false)
      }
      if (o.backgroundImage.indexOf("url(") === 0) {
        return o.backgroundImage.slice(4, -1).replace(/"/g, "")
      }
      return null
    };
    k._getProgressiveClassName = function() {
      return this.loadingOptions.imageClassName
    };
    k._loadImage = function(o) {
      return new Promise(this._loadImagePromiseFunc.bind(this, o))
    };
    k._loadImagePromiseFunc = function(s, r, q) {
      function p() {
        c(this, "load", p);
        r(this);
        r = null
      }
      if (!s) {
        r(null);
        return
      }
      var o = new Image();
      h(o, "load", p);
      o.src = s
    };
    k._clearTimeout = function() {
      if (this._timeout) {
        window.clearTimeout(this._timeout);
        this._timeout = null
      }
    };
    k._handleImageLoad = function(o) {
      this.trigger("image-load", o)
    };
    k._handleLoadingComplete = function() {
      this.loadingQueue.stop();
      this._clearTimeout();
      this.trigger("complete")
    };
    b.exports = n
  }, {
    "@marcom/ac-dom-events/addEventListener": 366,
    "@marcom/ac-dom-events/removeEventListener": 372,
    "@marcom/ac-dom-traversal/querySelectorAll": 388,
    "@marcom/ac-event-emitter-micro": 390,
    "@marcom/ac-object/defaults": 392,
    "@marcom/ac-polyfills/Element/prototype.classList": 357,
    "@marcom/ac-polyfills/Object/create": 360,
    "@marcom/ac-queue": 394
  }],
  399: [function(b, c, a) {
    var d = b("./ProgressiveImageLoader");
    c.exports = new d()
  }, {
    "./ProgressiveImageLoader": 398
  }],
  400: [function(b, c, a) {
    var d = {
      ua: window.navigator.userAgent,
      platform: window.navigator.platform,
      vendor: window.navigator.vendor
    };
    c.exports = b("./parseUserAgent")(d)
  }, {
    "./parseUserAgent": 403
  }],
  401: [function(b, c, a) {
    c.exports = {
      browser: {
        safari: false,
        chrome: false,
        firefox: false,
        ie: false,
        opera: false,
        android: false,
        edge: false,
        version: {
          name: "",
          major: 0,
          minor: 0,
          patch: 0,
          documentMode: false
        }
      },
      os: {
        osx: false,
        ios: false,
        android: false,
        windows: false,
        linux: false,
        fireos: false,
        chromeos: false,
        version: {
          name: "",
          major: 0,
          minor: 0,
          patch: 0
        }
      }
    }
  }, {}],
  402: [function(b, c, a) {
    c.exports = {
      browser: [{
        name: "edge",
        userAgent: "Edge",
        version: ["rv", "Edge"],
        test: function(d) {
          return (d.ua.indexOf("Edge") > -1 || d.ua === "Mozilla/5.0 (Windows NT 10.0; Win64; x64)")
        }
      }, {
        name: "chrome",
        userAgent: "Chrome"
      }, {
        name: "firefox",
        test: function(d) {
          return (d.ua.indexOf("Firefox") > -1 && d.ua.indexOf("Opera") === -1)
        },
        version: "Firefox"
      }, {
        name: "android",
        userAgent: "Android"
      }, {
        name: "safari",
        test: function(d) {
          return (d.ua.indexOf("Safari") > -1 && d.vendor.indexOf("Apple") > -1)
        },
        version: "Version"
      }, {
        name: "ie",
        test: function(d) {
          return (d.ua.indexOf("IE") > -1 || d.ua.indexOf("Trident") > -1)
        },
        version: ["MSIE", "rv"],
        parseDocumentMode: function() {
          var d = false;
          if (document.documentMode) {
            d = parseInt(document.documentMode, 10)
          }
          return d
        }
      }, {
        name: "opera",
        userAgent: "Opera",
        version: ["Version", "Opera"]
      }],
      os: [{
        name: "windows",
        test: function(d) {
          return (d.platform.indexOf("Win") > -1)
        },
        version: "Windows NT"
      }, {
        name: "osx",
        userAgent: "Mac",
        test: function(d) {
          return (d.platform.indexOf("Mac") > -1)
        }
      }, {
        name: "ios",
        test: function(d) {
          return (d.ua.indexOf("iPhone") > -1 || d.ua.indexOf("iPad") > -1)
        },
        version: ["iPhone OS", "CPU OS"]
      }, {
        name: "linux",
        userAgent: "Linux",
        test: function(d) {
          return (d.platform.indexOf("Linux") > -1 && d.ua.indexOf("Android") === -1)
        }
      }, {
        name: "fireos",
        test: function(d) {
          return (d.ua.indexOf("Firefox") > -1 && d.ua.indexOf("Mobile") > -1)
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
  403: [function(b, a, d) {
    var c = b("./defaults");
    var h = b("./dictionary");

    function g(k) {
      return new RegExp(k + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")
    }

    function f(n, m) {
      if (typeof n.parseVersion === "function") {
        return n.parseVersion(m)
      } else {
        var p = n.version || n.userAgent;
        if (typeof p === "string") {
          p = [p]
        }
        var o = p.length;
        var k;
        for (var l = 0; l < o; l++) {
          k = m.match(g(p[l]));
          if (k && k.length > 1) {
            return k[1].replace(/_/g, ".")
          }
        }
      }
    }

    function j(m, r, p) {
      var o = m.length;
      var q;
      var k;
      for (var n = 0; n < o; n++) {
        if (typeof m[n].test === "function") {
          if (m[n].test(p) === true) {
            q = m[n].name
          }
        } else {
          if (p.ua.indexOf(m[n].userAgent) > -1) {
            q = m[n].name
          }
        }
        if (q) {
          r[q] = true;
          k = f(m[n], p.ua);
          if (typeof k === "string") {
            var l = k.split(".");
            r.version.name = k;
            if (l && l.length > 0) {
              r.version.major = parseInt(l[0] || 0);
              r.version.minor = parseInt(l[1] || 0);
              r.version.patch = parseInt(l[2] || 0)
            }
          } else {
            if (q === "edge") {
              r.version.name = "12.0.0";
              r.version.major = "12";
              r.version.minor = "0";
              r.version.patch = "0"
            }
          }
          if (typeof m[n].parseDocumentMode === "function") {
            r.version.documentMode = m[n].parseDocumentMode()
          }
          return r
        }
      }
      return r
    }

    function i(l) {
      var k = {};
      k.browser = j(h.browser, c.browser, l);
      k.os = j(h.os, c.os, l);
      return k
    }
    a.exports = i
  }, {
    "./defaults": 401,
    "./dictionary": 402
  }],
  404: [function(b, c, a) {
    arguments[4][77][0].apply(a, arguments)
  }, {
    dup: 77
  }],
  405: [function(b, c, a) {
    arguments[4][126][0].apply(a, arguments)
  }, {
    "./ac-event-emitter-micro/EventEmitterMicro": 406,
    dup: 126
  }],
  406: [function(b, c, a) {
    arguments[4][127][0].apply(a, arguments)
  }, {
    dup: 127
  }],
  407: [function(b, a, f) {
    b("@marcom/ac-polyfills/Function/prototype.bind");
    b("@marcom/ac-polyfills/Object/keys");
    b("@marcom/ac-polyfills/Object/create");
    var l = b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
    var i = b("@marcom/ac-dom-events/utils/addEventListener");
    var h = b("@marcom/ac-feature/mediaQueriesAvailable");
    var c = "viewport-emitter";
    var j = "::before";
    var d = "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)";

    function k(m) {
      l.call(this);
      this._initializeElement(m);
      if (h()) {
        this._updateViewport = this._updateViewport.bind(this);
        i(window, "resize", this._updateViewport);
        i(window, "orientationchange", this._updateViewport);
        this._retinaQuery = window.matchMedia(d);
        this._updateRetina();
        if (this._retinaQuery.addListener) {
          this._updateRetina = this._updateRetina.bind(this);
          this._retinaQuery.addListener(this._updateRetina)
        }
      }
      this._updateViewport()
    }
    var g = k.prototype = Object.create(l.prototype);
    g.viewport = false;
    g.retina = false;
    g._initializeElement = function(n) {
      var m;
      n = n || c;
      m = document.getElementById(n);
      if (!m) {
        m = document.createElement("div");
        m.id = n;
        m = document.body.appendChild(m)
      }
      this._el = m
    };
    g._getElementContent = function() {
      var m;
      if ("currentStyle" in this._el) {
        m = this._el.currentStyle["x-content"]
      } else {
        this._invalidateStyles();
        m = window.getComputedStyle(this._el, j).content
      }
      if (m) {
        m = m.replace(/["']/g, "")
      }
      if (m) {
        return m
      }
      return false
    };
    g._updateViewport = function() {
      var m = this.viewport;
      var n;
      var o;
      this.viewport = this._getElementContent();
      if (this.viewport) {
        this.viewport = this.viewport.split(":").pop()
      }
      if (m && this.viewport !== m) {
        o = {
          from: m,
          to: this.viewport
        };
        this.trigger("change", o);
        this.trigger("from:" + m, o);
        this.trigger("to:" + this.viewport, o)
      }
    };
    g._updateRetina = function(m) {
      var n = this.retina;
      this.retina = this._retinaQuery.matches;
      if (n !== this.retina) {
        this.trigger("retinachange", {
          from: n,
          to: this.retina
        })
      }
    };
    g._invalidateStyles = function() {
      document.documentElement.clientWidth;
      this._el.innerHTML = (this._el.innerHTML === " ") ? " " : " ";
      document.documentElement.clientWidth
    };
    a.exports = k
  }, {
    "@marcom/ac-dom-events/utils/addEventListener": 404,
    "@marcom/ac-event-emitter-micro": 405,
    "@marcom/ac-feature/mediaQueriesAvailable": 38,
    "@marcom/ac-polyfills/Function/prototype.bind": 358,
    "@marcom/ac-polyfills/Object/create": 360,
    "@marcom/ac-polyfills/Object/keys": 361
  }],
  408: [function(c, d, b) {
    var a = c("./ViewportEmitter");
    d.exports = new a()
  }, {
    "./ViewportEmitter": 407
  }],
  409: [function(c, a, f) {
    var d = c("@marcom/ac-jetpack-lib/core/BaseComponent");
    var g = c("@marcom/ac-media-object");
    var b = c("@marcom/ac-viewport-emitter");
    var m = "/105/media/{{locale}}/clips/2017/41bf5b7e_808f_4189_8a56_95fce0abfa55/animations/hero";
    var h = "ambient-hero-";
    var j = "mp4";
    var n = document.documentElement.classList.contains("oldIos10");
    var k = document.documentElement.classList.contains("ie11");
    var o = 3000;
    var l = function l() {
      d.apply(this, arguments);
      if (!document.documentElement.classList.contains("inlineVideo")) {
        return
      }
      this._videoContainer = document.getElementById("hero-background");
      this._options = {
        iosInline: true
      };
      this._locale = this.element.getAttribute("data-locale") || "us";
      this._createMedia()
    };
    var i = l.prototype = Object.create(d.prototype);
    l.prototype.constructor = l;
    i.onLoadStart = function() {
      var p = this;
      this._loadTimeout = setTimeout(function() {
        if (!p._mediaObject.getLoaded()) {
          p._destroyMedia()
        }
      }, o)
    };
    i.onLoad = function() {
      clearTimeout(this._loadTimeout);
      this._mediaObject.enhance()
    };
    i.onEnhanced = function() {
      this._mediaObject.play()
    };
    i.onPlay = function() {};
    i.onTimeUpdate = function() {
      if (k) {
        if (this._mediaObject.getCurrentTime() < 0.02) {
          this._mediaObject.trigger("play")
        }
        if (this._mediaObject.getCurrentTime() === this._mediaObject.getDuration()) {
          this._mediaObject.trigger("ended")
        }
      }
    };
    i.onSectionWillAppear = function(p, q) {
      if (this._mediaObject && this._mediaObject.getEnhanced() && (this._mediaObject.getPaused() || this._mediaObject.getEnded()) && !n) {
        this._mediaObject.play()
      }
    };
    i.onSectionWillDisappear = function(p, q) {
      if (this._mediaObject) {
        this._mediaObject.pause()
      }
    };
    i.onBreakpoint = function(q, s, p, r) {
      d.prototype.onSectionWillDisappear.call(this, q, s, p, r);
      if (!this._mediaObject || (s === "large" && q === "xlarge") || (s === "xlarge" && q === "large")) {
        return
      }
      this._destroyMedia();
      this._createMedia()
    };
    i.onRetinaChange = function(s, q, p, r) {
      d.prototype.onSectionWillDisappear.call(this, s, q, p, r);
      if (this._mediaObject) {
        this._destroyMedia();
        this._createMedia()
      }
    };
    i._createMedia = function() {
      this._setMediaSrc(m, h, j);
      this._mediaObject = g.createVideo(this._videoContainer, this._getMediaSrc(), this._options);
      this._mediaObject.on("loadstart", this.onLoadStart.bind(this));
      this._mediaObject.on("loaded", this.onLoad.bind(this));
      this._mediaObject.on("enhanced", this.onEnhanced.bind(this));
      this._mediaObject.on("play", this.onPlay.bind(this));
      if (k) {
        this._mediaObject.on("timeupdate", this.onTimeUpdate.bind(this))
      }
      this._mediaObject.load()
    };
    i._destroyMedia = function() {
      this._mediaObject.pause();
      this._mediaObject.destroy();
      this._mediaSrc = null;
      this._mediaObject = null
    };
    i._getMediaSrc = function() {
      if (!this._mediaSrc) {
        this._createMedia()
      }
      return this._mediaSrc
    };
    i._setMediaSrc = function(r, p, q) {
      this._mediaSrc = {
        basePath: r.replace("{{locale}}", this._locale),
        filename: p + b.viewport.replace("x", "") + (b.retina ? "_2x" : ""),
        fileFormat: q
      }
    };
    a.exports = l
  }, {
    "@marcom/ac-jetpack-lib/core/BaseComponent": 138,
    "@marcom/ac-media-object": 329,
    "@marcom/ac-viewport-emitter": 408
  }],
  410: [function(f, b, i) {
    var g = f("@marcom/ac-jetpack-lib/core/BaseComponent");
    var j = f("@marcom/ac-media-object");
    var c = f("@marcom/ac-viewport-emitter");
    var h = f("@marcom/ac-dom-events/addEventListener");
    var d = f("ac-analytics").observer.Event;
    var o = "/105/media/{{locale}}/clips/2017/41bf5b7e_808f_4189_8a56_95fce0abfa55/animations";
    var l = "mp4";
    var a = 500;
    var p = 0.4;
    var q = document.documentElement.classList.contains("oldIos10");
    var m = document.documentElement.classList.contains("ie11");
    var r = 3000;
    var n = function n() {
      g.apply(this, arguments);
      if (!document.documentElement.classList.contains("inlineVideo")) {
        return
      }
      this._videoContainer = this.element.querySelector(".video-container");
      this._replayButton = this.element.querySelector(".icon-replay");
      this._filename = this._videoContainer.dataset.videoFilename;
      this._analyticsAlias = this._videoContainer.dataset.analyticsAlias || this._filename;
      this._options = {
        iosInline: true
      };
      this._locale = this.element.getAttribute("data-locale") || "us";
      this._analyticsTriggered = false;
      this._hasAutoplayed = false;
      this._createMedia();
      h(this._replayButton, "click", this.replayClicked.bind(this));
      this.trackedElement = this.section.elementEngagement.addElement(this.element, {
        timeToEngage: a,
        inViewThreshold: p
      });
      this.trackedElement.on("engaged", this.onEngaged.bind(this));
      this._eventObserver = new d(this._mediaObject.mediaEmitter._eventEmitter, {
        interactionEvents: ["show"]
      })
    };
    var k = n.prototype = Object.create(g.prototype);
    n.prototype.constructor = n;
    k.onLoadStart = function() {
      var s = this;
      this._loadTimeout = setTimeout(function() {
        if (!s._mediaObject.getLoaded()) {
          s._destroyMedia()
        }
      }, r)
    };
    k.onLoad = function() {
      clearTimeout(this._loadTimeout);
      this._mediaObject.enhance();
      this._replayButton.classList.add("enhanced")
    };
    k.onEngaged = function() {
      if (this._mediaObject && this._mediaObject.getEnhanced() && !this._hasAutoplayed) {
        this._mediaObject.play();
        this._hasAutoplayed = true
      }
    };
    k.onPlay = function() {
      var s = this;
      if (this._analyticsTriggered === false) {
        this._mediaObject.mediaEmitter._eventEmitter.trigger("show", {
          title: "title: " + s._analyticsAlias,
          eVar70: s._analyticsAlias
        });
        this._analyticsTriggered = true
      }
      this._disableReplay()
    };
    k.onPause = function() {
      this._enableReplay()
    };
    k.onEnd = function() {
      this._enableReplay()
    };
    k.onTimeUpdate = function() {
      if (m) {
        if (this._mediaObject.getCurrentTime() < 0.26) {
          this._mediaObject.trigger("play")
        }
        if (this._mediaObject.getCurrentTime() === this._mediaObject.getDuration()) {
          this._mediaObject.trigger("ended")
        }
      }
    };
    k.replayClicked = function() {
      this._mediaObject.setCurrentTime(0);
      this._mediaObject.play()
    };
    k.onSectionWillAppear = function(s, t) {};
    k.onSectionWillDisappear = function(s, t) {
      if (this._mediaObject) {
        this._resetMedia();
        this._disableReplay()
      }
      this._hasAutoplayed = false
    };
    k.onRetinaChange = function(v, t, s, u) {
      g.prototype.onSectionWillDisappear.call(this, v, t, s, u);
      if (this._mediaObject) {
        this._destroyMedia();
        this._createMedia()
      }
    };
    k._disableReplay = function() {
      this._replayButton.disabled = true
    };
    k._enableReplay = function() {
      this._replayButton.disabled = false
    };
    k._createMedia = function() {
      this._setMediaSrc(o, this._filename, l);
      this._mediaObject = j.createVideo(this._videoContainer, this._getMediaSrc(), this._options);
      this._mediaObject.on("loadstart", this.onLoadStart.bind(this));
      this._mediaObject.on("loaded", this.onLoad.bind(this));
      this._mediaObject.on("play", this.onPlay.bind(this));
      this._mediaObject.on("ended", this.onEnd.bind(this));
      if (q || m) {
        this._mediaObject.on("pause", this.onPause.bind(this))
      }
      if (m) {
        this._mediaObject.on("timeupdate", this.onTimeUpdate.bind(this))
      }
      this._mediaObject.load()
    };
    k._destroyMedia = function() {
      this._mediaObject.pause();
      this._mediaObject.destroy();
      this._mediaSrc = null;
      this._mediaObject = null
    };
    k._resetMedia = function() {
      this._mediaObject.reset();
      this._mediaObject.el.classList.remove("mediaobject-ended")
    };
    k._getMediaSrc = function() {
      if (!this._mediaSrc) {
        this._createMedia()
      }
      return this._mediaSrc
    };
    k._setMediaSrc = function(u, s, t) {
      this._mediaSrc = {
        basePath: u.replace("{{locale}}", this._locale),
        filename: s + (c.retina ? "_2x" : ""),
        fileFormat: t
      }
    };
    b.exports = n
  }, {
    "@marcom/ac-dom-events/addEventListener": 6,
    "@marcom/ac-jetpack-lib/core/BaseComponent": 138,
    "@marcom/ac-media-object": 329,
    "@marcom/ac-viewport-emitter": 408,
    "ac-analytics": "ac-analytics"
  }],
  411: [function(d, b, g) {
    var c = d("@marcom/ac-progressive-image-loader");
    var f = d("@marcom/ac-jetpack-lib/core/BasePage");
    var h = d("@marcom/ac-jetpack-lib/model/ComponentMap");
    var j = d("./components/HeroVideo");
    var k = d("./components/InlineVideo");
    var a = d("@marcom/ac-jetpack-fuel/components/engaged-element/EngagedElementComponent");
    var i = {
      initialize: function() {
        this.initProgressiveImageLoader();
        this.initJetPack();
        this.pollForPageHeightChanges()
      },
      initProgressiveImageLoader: function() {
        setTimeout(function() {
          c.load()
        }, 250)
      },
      initJetPack: function() {
        h.HeroVideo = j;
        h.InlineVideo = k;
        h.EngagedElement = a
      },
      pollForPageHeightChanges: function() {
        var l = document.documentElement.scrollHeight;
        var m = 0;
        window.requestAnimationFrame(function n() {
          var o = document.documentElement.scrollHeight;
          if (l !== o) {
            m = 0
          } else {
            m++;
            if (m >= 30) {
              new f();
              return
            }
          }
          l = o;
          window.requestAnimationFrame(n)
        })
      }
    };
    b.exports = i.initialize()
  }, {
    "./components/HeroVideo": 409,
    "./components/InlineVideo": 410,
    "@marcom/ac-jetpack-fuel/components/engaged-element/EngagedElementComponent": 45,
    "@marcom/ac-jetpack-lib/core/BasePage": 139,
    "@marcom/ac-jetpack-lib/model/ComponentMap": 141,
    "@marcom/ac-progressive-image-loader": 399
  }]
}, {}, [411]);