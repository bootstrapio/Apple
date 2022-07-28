! function() {
  function t(e, i, n) {
    function s(o, a) {
      if (!i[o]) {
        if (!e[o]) {
          var h = "function" == typeof require && require;
          if (!a && h) return h(o, !0);
          if (r) return r(o, !0);
          var c = new Error("Cannot find module '" + o + "'");
          throw c.code = "MODULE_NOT_FOUND", c
        }
        var u = i[o] = {
          exports: {}
        };
        e[o][0].call(u.exports, function(t) {
          var i = e[o][1][t];
          return s(i ? i : t)
        }, u, u.exports, t, e, i, n)
      }
      return i[o].exports
    }
    for (var r = "function" == typeof require && require, o = 0; o < n.length; o++) s(n[o]);
    return s
  }
  return t
}()({
  1: [function(t, e, i) {
    "use strict";

    function n() {
      this._createElemnts(), this._bindEvents()
    }
    var s = n.prototype;
    s._bindEvents = function() {
      this._onResize = this._resize.bind(this)
    }, s._createElemnts = function() {
      this.span = document.createElement("span");
      var t = this.span.style;
      t.visibility = "hidden", t.position = "absolute", t.top = "0", t.bottom = "0", t.zIndex = "-1", this.span.innerHTML = "&nbsp;", this.iframe = document.createElement("iframe");
      var e = this.iframe.style;
      e.position = "absolute", e.top = "0", e.left = "0", e.width = "100%", e.height = "100%", this.span.appendChild(this.iframe), document.body.appendChild(this.span)
    }, s.detect = function(t) {
      this.originalSize = t || 17, this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.currentSize > this.originalSize && this._onResize(), this.isDetecting || (this.iframe.contentWindow.addEventListener("resize", this._onResize), this.isDetecting = !0)
    }, s._resize = function(t) {
      this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.originalSize < this.currentSize ? document.documentElement.classList.add("text-zoom") : document.documentElement.classList.remove("text-zoom"), window.dispatchEvent(new Event("resize")), window.dispatchEvent(new CustomEvent("resize:text-zoom", {
        detail: this
      }))
    }, s.getScale = function() {
      return this.currentSize / this.originalSize
    }, s.remove = function() {
      this.isDetecting && (this.iframe.contentWindow.removeEventListener("resize", this._onResize), this.isDetecting = !1)
    }, s.destroy = function() {
      this.remove(), this.span && this.span.parentElement && this.span.parentElement.removeChild(this.span), this.span = null, this.iframe = null
    }, e.exports = new n
  }, {}],
  2: [function(t, e, i) {
    "use strict";
    var n = t(1),
      s = {
        initialize: function() {
          n.detect()
        }
      };
    s.initialize()
  }, {
    1: 1
  }]
}, {}, [2]);