// lo-th.github.io/uil/license
! function(t, i) {
  "object" == typeof exports && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define(["exports"], i) : i((t = "undefined" != typeof globalThis ? globalThis : t || self).UIL = {})
}(this, (function(t) {
  "use strict";
  var i = function(t) {
    var i, s = Object.prototype,
      e = s.hasOwnProperty,
      o = "function" == typeof Symbol ? Symbol : {},
      n = o.iterator || "@@iterator",
      h = o.asyncIterator || "@@asyncIterator",
      r = o.toStringTag || "@@toStringTag";

    function a(t, i, s) {
      return Object.defineProperty(t, i, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[i]
    }
    try {
      a({}, "")
    } catch (t) {
      a = function(t, i, s) {
        return t[i] = s
      }
    }

    function l(t, i, s, e) {
      var o = i && i.prototype instanceof m ? i : m,
        n = Object.create(o.prototype),
        h = new z(e || []);
      return n._invoke = function(t, i, s) {
        var e = u;
        return function(o, n) {
          if (e === p) throw new Error("Generator is already running");
          if (e === f) {
            if ("throw" === o) throw n;
            return H()
          }
          for (s.method = o, s.arg = n;;) {
            var h = s.delegate;
            if (h) {
              var r = I(h, s);
              if (r) {
                if (r === v) continue;
                return r
              }
            }
            if ("next" === s.method) s.sent = s._sent = s.arg;
            else if ("throw" === s.method) {
              if (e === u) throw e = f, s.arg;
              s.dispatchException(s.arg)
            } else "return" === s.method && s.abrupt("return", s.arg);
            e = p;
            var a = c(t, i, s);
            if ("normal" === a.type) {
              if (e = s.done ? f : d, a.arg === v) continue;
              return {
                value: a.arg,
                done: s.done
              }
            }
            "throw" === a.type && (e = f, s.method = "throw", s.arg = a.arg)
          }
        }
      }(t, s, h), n
    }

    function c(t, i, s) {
      try {
        return {
          type: "normal",
          arg: t.call(i, s)
        }
      } catch (t) {
        return {
          type: "throw",
          arg: t
        }
      }
    }
    t.wrap = l;
    var u = "suspendedStart",
      d = "suspendedYield",
      p = "executing",
      f = "completed",
      v = {};

    function m() {}

    function g() {}

    function x() {}
    var b = {};
    b[n] = function() {
      return this
    };
    var w = Object.getPrototypeOf,
      y = w && w(w(D([])));
    y && y !== s && e.call(y, n) && (b = y);
    var k = x.prototype = m.prototype = Object.create(b);

    function C(t) {
      ["next", "throw", "return"].forEach((function(i) {
        a(t, i, (function(t) {
          return this._invoke(i, t)
        }))
      }))
    }

    function S(t, i) {
      function s(o, n, h, r) {
        var a = c(t[o], t, n);
        if ("throw" !== a.type) {
          var l = a.arg,
            u = l.value;
          return u && "object" == typeof u && e.call(u, "__await") ? i.resolve(u.__await).then((function(t) {
            s("next", t, h, r)
          }), (function(t) {
            s("throw", t, h, r)
          })) : i.resolve(u).then((function(t) {
            l.value = t, h(l)
          }), (function(t) {
            return s("throw", t, h, r)
          }))
        }
        r(a.arg)
      }
      var o;
      this._invoke = function(t, e) {
        function n() {
          return new i((function(i, o) {
            s(t, e, i, o)
          }))
        }
        return o = o ? o.then(n, n) : n()
      }
    }

    function I(t, s) {
      var e = t.iterator[s.method];
      if (e === i) {
        if (s.delegate = null, "throw" === s.method) {
          if (t.iterator.return && (s.method = "return", s.arg = i, I(t, s), "throw" === s.method)) return v;
          s.method = "throw", s.arg = new TypeError("The iterator does not provide a 'throw' method")
        }
        return v
      }
      var o = c(e, t.iterator, s.arg);
      if ("throw" === o.type) return s.method = "throw", s.arg = o.arg, s.delegate = null, v;
      var n = o.arg;
      return n ? n.done ? (s[t.resultName] = n.value, s.next = t.nextLoc, "return" !== s.method && (s.method = "next", s.arg = i), s.delegate = null, v) : n : (s.method = "throw", s.arg = new TypeError("iterator result is not an object"), s.delegate = null, v)
    }

    function M(t) {
      var i = {
        tryLoc: t[0]
      };
      1 in t && (i.catchLoc = t[1]), 2 in t && (i.finallyLoc = t[2], i.afterLoc = t[3]), this.tryEntries.push(i)
    }

    function L(t) {
      var i = t.completion || {};
      i.type = "normal", delete i.arg, t.completion = i
    }

    function z(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(M, this), this.reset(!0)
    }

    function D(t) {
      if (t) {
        var s = t[n];
        if (s) return s.call(t);
        if ("function" == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            h = function s() {
              for (; ++o < t.length;)
                if (e.call(t, o)) return s.value = t[o], s.done = !1, s;
              return s.value = i, s.done = !0, s
            };
          return h.next = h
        }
      }
      return {
        next: H
      }
    }

    function H() {
      return {
        value: i,
        done: !0
      }
    }
    return g.prototype = k.constructor = x, x.constructor = g, g.displayName = a(x, r, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
      var i = "function" == typeof t && t.constructor;
      return !!i && (i === g || "GeneratorFunction" === (i.displayName || i.name))
    }, t.mark = function(t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : (t.__proto__ = x, a(t, r, "GeneratorFunction")), t.prototype = Object.create(k), t
    }, t.awrap = function(t) {
      return {
        __await: t
      }
    }, C(S.prototype), S.prototype[h] = function() {
      return this
    }, t.AsyncIterator = S, t.async = function(i, s, e, o, n) {
      void 0 === n && (n = Promise);
      var h = new S(l(i, s, e, o), n);
      return t.isGeneratorFunction(s) ? h : h.next().then((function(t) {
        return t.done ? t.value : h.next()
      }))
    }, C(k), a(k, r, "Generator"), k[n] = function() {
      return this
    }, k.toString = function() {
      return "[object Generator]"
    }, t.keys = function(t) {
      var i = [];
      for (var s in t) i.push(s);
      return i.reverse(),
        function s() {
          for (; i.length;) {
            var e = i.pop();
            if (e in t) return s.value = e, s.done = !1, s
          }
          return s.done = !0, s
        }
    }, t.values = D, z.prototype = {
      constructor: z,
      reset: function(t) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = i, this.done = !1, this.delegate = null, this.method = "next", this.arg = i, this.tryEntries.forEach(L), !t)
          for (var s in this) "t" === s.charAt(0) && e.call(this, s) && !isNaN(+s.slice(1)) && (this[s] = i)
      },
      stop: function() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval
      },
      dispatchException: function(t) {
        if (this.done) throw t;
        var s = this;

        function o(e, o) {
          return r.type = "throw", r.arg = t, s.next = e, o && (s.method = "next", s.arg = i), !!o
        }
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var h = this.tryEntries[n],
            r = h.completion;
          if ("root" === h.tryLoc) return o("end");
          if (h.tryLoc <= this.prev) {
            var a = e.call(h, "catchLoc"),
              l = e.call(h, "finallyLoc");
            if (a && l) {
              if (this.prev < h.catchLoc) return o(h.catchLoc, !0);
              if (this.prev < h.finallyLoc) return o(h.finallyLoc)
            } else if (a) {
              if (this.prev < h.catchLoc) return o(h.catchLoc, !0)
            } else {
              if (!l) throw new Error("try statement without catch or finally");
              if (this.prev < h.finallyLoc) return o(h.finallyLoc)
            }
          }
        }
      },
      abrupt: function(t, i) {
        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
          var o = this.tryEntries[s];
          if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var n = o;
            break
          }
        }
        n && ("break" === t || "continue" === t) && n.tryLoc <= i && i <= n.finallyLoc && (n = null);
        var h = n ? n.completion : {};
        return h.type = t, h.arg = i, n ? (this.method = "next", this.next = n.finallyLoc, v) : this.complete(h)
      },
      complete: function(t, i) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && i && (this.next = i), v
      },
      finish: function(t) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var s = this.tryEntries[i];
          if (s.finallyLoc === t) return this.complete(s.completion, s.afterLoc), L(s), v
        }
      },
      catch: function(t) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var s = this.tryEntries[i];
          if (s.tryLoc === t) {
            var e = s.completion;
            if ("throw" === e.type) {
              var o = e.arg;
              L(s)
            }
            return o
          }
        }
        throw new Error("illegal catch attempt")
      },
      delegateYield: function(t, s, e) {
        return this.delegate = {
          iterator: D(t),
          resultName: s,
          nextLoc: e
        }, "next" === this.method && (this.arg = i), v
      }
    }, t
  }("object" == typeof module ? module.exports : {});
  try {
    regeneratorRuntime = i
  } catch (t) {
    Function("r", "regeneratorRuntime = r")(i)
  }
  var s = {
    frag: document.createDocumentFragment(),
    colorRing: null,
    joystick_0: null,
    joystick_1: null,
    circular: null,
    knob: null,
    svgns: "http://www.w3.org/2000/svg",
    links: "http://www.w3.org/1999/xlink",
    htmls: "http://www.w3.org/1999/xhtml",
    DOM_SIZE: ["height", "width", "top", "left", "bottom", "right", "margin-left", "margin-right", "margin-top", "margin-bottom"],
    SVG_TYPE_D: ["pattern", "defs", "transform", "stop", "animate", "radialGradient", "linearGradient", "animateMotion", "use", "filter", "feColorMatrix"],
    SVG_TYPE_G: ["svg", "rect", "circle", "path", "polygon", "text", "g", "line", "foreignObject"],
    PI: Math.PI,
    TwoPI: 2 * Math.PI,
    pi90: .5 * Math.PI,
    pi60: Math.PI / 3,
    torad: Math.PI / 180,
    todeg: 180 / Math.PI,
    clamp: function(t, i, s) {
      return t = (t = t < i ? i : t) > s ? s : t
    },
    size: {
      w: 240,
      h: 20,
      p: 30,
      s: 8
    },
    colors: {
      text: "#dcdcdc",
      textOver: "#FFFFFF",
      txtselectbg: "none",
      background: "rgba(50,50,50,0.5)",
      backgroundOver: "rgba(50,50,50,0.5)",
      inputBorder: "#454545",
      inputHolder: "#808080",
      inputBorderSelect: "#005AAA",
      inputBg: "rgba(0,0,0,0.1)",
      inputOver: "rgba(0,0,0,0.2)",
      border: "#454545",
      borderOver: "#5050AA",
      borderSelect: "#308AFF",
      button: "#3c3c3c",
      boolbg: "#181818",
      boolon: "#C0C0C0",
      select: "#308AFF",
      moving: "#03afff",
      down: "#024699",
      over: "#024699",
      action: "#FF3300",
      stroke: "rgba(11,11,11,0.5)",
      scroll: "#333333",
      scrollback: "rgba(44,44,44,0.2)",
      scrollbackover: "rgba(44,44,44,0.2)",
      hide: "rgba(0,0,0,0)",
      groupBorder: "#3e3e3e",
      buttonBorder: "#4a4a4a",
      fontFamily: "Tahoma",
      fontShadow: "none",
      fontSize: 11,
      radius: 4
    },
    css: {
      basic: "position:absolute; pointer-events:none; box-sizing:border-box; margin:0; padding:0; overflow:hidden; -o-user-select:none; -ms-user-select:none; -khtml-user-select:none; -webkit-user-select:none; -moz-user-select:none;",
      button: "display:flex; justify-content:center; align-items:center; text-align:center;"
    },
    svgs: {
      group: "M 7 7 L 7 8 8 8 8 7 7 7 M 5 7 L 5 8 6 8 6 7 5 7 M 3 7 L 3 8 4 8 4 7 3 7 M 7 5 L 7 6 8 6 8 5 7 5 M 6 6 L 6 5 5 5 5 6 6 6 M 7 3 L 7 4 8 4 8 3 7 3 M 6 4 L 6 3 5 3 5 4 6 4 M 3 5 L 3 6 4 6 4 5 3 5 M 3 3 L 3 4 4 4 4 3 3 3 Z",
      arrow: "M 3 8 L 8 5 3 2 3 8 Z",
      arrowDown: "M 5 8 L 8 3 2 3 5 8 Z",
      arrowUp: "M 5 2 L 2 7 8 7 5 2 Z",
      solid: "M 13 10 L 13 1 4 1 1 4 1 13 10 13 13 10 M 11 3 L 11 9 9 11 3 11 3 5 5 3 11 3 Z",
      body: "M 13 10 L 13 1 4 1 1 4 1 13 10 13 13 10 M 11 3 L 11 9 9 11 3 11 3 5 5 3 11 3 M 5 4 L 4 5 4 10 9 10 10 9 10 4 5 4 Z",
      vehicle: "M 13 6 L 11 1 3 1 1 6 1 13 3 13 3 11 11 11 11 13 13 13 13 6 M 2.4 6 L 4 2 10 2 11.6 6 2.4 6 M 12 8 L 12 10 10 10 10 8 12 8 M 4 8 L 4 10 2 10 2 8 4 8 Z",
      articulation: "M 13 9 L 12 9 9 2 9 1 5 1 5 2 2 9 1 9 1 13 5 13 5 9 4 9 6 5 8 5 10 9 9 9 9 13 13 13 13 9 Z",
      character: "M 13 4 L 12 3 9 4 5 4 2 3 1 4 5 6 5 8 4 13 6 13 7 9 8 13 10 13 9 8 9 6 13 4 M 6 1 L 6 3 8 3 8 1 6 1 Z",
      terrain: "M 13 8 L 12 7 Q 9.06 -3.67 5.95 4.85 4.04 3.27 2 7 L 1 8 7 13 13 8 M 3 8 Q 3.78 5.420 5.4 6.6 5.20 7.25 5 8 L 7 8 Q 8.39 -0.16 11 8 L 7 11 3 8 Z",
      joint: "M 7.7 7.7 Q 8 7.45 8 7 8 6.6 7.7 6.3 7.45 6 7 6 6.6 6 6.3 6.3 6 6.6 6 7 6 7.45 6.3 7.7 6.6 8 7 8 7.45 8 7.7 7.7 M 3.35 8.65 L 1 11 3 13 5.35 10.65 Q 6.1 11 7 11 8.28 11 9.25 10.25 L 7.8 8.8 Q 7.45 9 7 9 6.15 9 5.55 8.4 5 7.85 5 7 5 6.54 5.15 6.15 L 3.7 4.7 Q 3 5.712 3 7 3 7.9 3.35 8.65 M 10.25 9.25 Q 11 8.28 11 7 11 6.1 10.65 5.35 L 13 3 11 1 8.65 3.35 Q 7.9 3 7 3 5.7 3 4.7 3.7 L 6.15 5.15 Q 6.54 5 7 5 7.85 5 8.4 5.55 9 6.15 9 7 9 7.45 8.8 7.8 L 10.25 9.25 Z",
      ray: "M 9 11 L 5 11 5 12 9 12 9 11 M 12 5 L 11 5 11 9 12 9 12 5 M 11.5 10 Q 10.9 10 10.45 10.45 10 10.9 10 11.5 10 12.2 10.45 12.55 10.9 13 11.5 13 12.2 13 12.55 12.55 13 12.2 13 11.5 13 10.9 12.55 10.45 12.2 10 11.5 10 M 9 10 L 10 9 2 1 1 2 9 10 Z",
      collision: "M 11 12 L 13 10 10 7 13 4 11 2 7.5 5.5 9 7 7.5 8.5 11 12 M 3 2 L 1 4 4 7 1 10 3 12 8 7 3 2 Z",
      map: "M 13 1 L 1 1 1 13 13 13 13 1 M 12 2 L 12 7 7 7 7 12 2 12 2 7 7 7 7 2 12 2 Z",
      material: "M 13 1 L 1 1 1 13 13 13 13 1 M 12 2 L 12 7 7 7 7 12 2 12 2 7 7 7 7 2 12 2 Z",
      texture: "M 13 4 L 13 1 1 1 1 4 5 4 5 13 9 13 9 4 13 4 Z",
      object: "M 10 1 L 7 4 4 1 1 1 1 13 4 13 4 5 7 8 10 5 10 13 13 13 13 1 10 1 Z",
      none: "M 9 5 L 5 5 5 9 9 9 9 5 Z",
      cursor: "M 4 7 L 1 10 1 12 2 13 4 13 7 10 9 14 14 0 0 5 4 7 Z"
    },
    setStyle: function(t) {
      for (var i in t) s.colors[i] && (s.colors[i] = t[i]);
      s.setText()
    },
    setText: function(t, i, e, o) {
      var n = s.colors;
      void 0 !== e && (n.fontFamily = e), void 0 !== i && (n.text = i), void 0 !== t && (n.fontSize = t), s.css.txt = s.css.basic + "font-family:" + n.fontFamily + "; font-size:" + n.fontSize + "px; color:" + n.text + "; padding:2px 10px; left:0; top:2px; height:16px; width:100px; overflow:hidden; white-space: nowrap;", void 0 !== o && (s.css.txt += " text-shadow:" + o + "; "), "none" !== n.fontShadow && (s.css.txt += " text-shadow: 1px 1px 1px " + n.fontShadow + ";"), s.css.txtselect = s.css.txt + "display:flex; justify-content:left; align-items:center; text-align:left;padding:2px 5px; border:1px dashed " + n.border + "; background:" + n.txtselectbg + ";", s.css.item = s.css.txt + "position:relative; background:rgba(0,0,0,0.2); margin-bottom:1px;"
    },
    cloneColor: function() {
      return Object.assign({}, s.colors)
    },
    cloneCss: function() {
      return Object.assign({}, s.css)
    },
    clone: function(t) {
      return t.cloneNode(!0)
    },
    setSvg: function(t, i, s, e, o) {
      -1 === e ? t.setAttributeNS(null, i, s) : void 0 !== o ? t.childNodes[e || 0].childNodes[o || 0].setAttributeNS(null, i, s) : t.childNodes[e || 0].setAttributeNS(null, i, s)
    },
    setCss: function(t, i) {
      for (var e in i) - 1 !== s.DOM_SIZE.indexOf(e) ? t.style[e] = i[e] + "px" : t.style[e] = i[e]
    },
    set: function(t, i) {
      for (var e in i) "txt" === e && (t.textContent = i[e]), "link" === e ? t.setAttributeNS(s.links, "xlink:href", i[e]) : t.setAttributeNS(null, e, i[e])
    },
    get: function(t, i) {
      if (void 0 === i) return t;
      if (!isNaN(i)) return t.childNodes[i];
      if (i instanceof Array) {
        if (2 === i.length) return t.childNodes[i[0]].childNodes[i[1]];
        if (3 === i.length) return t.childNodes[i[0]].childNodes[i[1]].childNodes[i[2]]
      }
    },
    dom: function(t, i, e, o, n) {
      return t = t || "div", -1 !== s.SVG_TYPE_D.indexOf(t) || -1 !== s.SVG_TYPE_G.indexOf(t) ? "svg" === t ? (o = document.createElementNS(s.svgns, "svg"), s.set(o, e)) : (void 0 === o && (o = document.createElementNS(s.svgns, "svg")), s.addAttributes(o, t, e, n)) : o = void 0 === o ? document.createElementNS(s.htmls, t) : o.appendChild(document.createElementNS(s.htmls, t)), i && (o.style.cssText = i), void 0 === n ? o : o.childNodes[n || 0]
    },
    addAttributes: function(t, i, e, o) {
      var n = document.createElementNS(s.svgns, i);
      return s.set(n, e), s.get(t, o).appendChild(n), -1 !== s.SVG_TYPE_G.indexOf(i) && (n.style.pointerEvents = "none"), n
    },
    clear: function(t) {
      for (s.purge(t); t.firstChild;) t.firstChild.firstChild && s.clear(t.firstChild), t.removeChild(t.firstChild)
    },
    purge: function(t) {
      var i, e, o = t.attributes;
      if (o)
        for (i = o.length; i--;) "function" == typeof t[e = o[i].name] && (t[e] = null);
      if (o = t.childNodes)
        for (i = o.length; i--;) s.purge(t.childNodes[i])
    },
    ColorLuma: function(t, i) {
      "n" === t && (t = "#000"), (t = String(t).replace(/[^0-9a-f]/gi, "")).length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), i = i || 0;
      var s, e, o = "#";
      for (e = 0; e < 3; e++) s = parseInt(t.substr(2 * e, 2), 16), o += ("00" + (s = Math.round(Math.min(Math.max(0, s + s * i), 255)).toString(16))).substr(s.length);
      return o
    },
    findDeepInver: function(t) {
      return .3 * t[0] + .59 * t[1] + .11 * t[2] <= .6
    },
    lerpColor: function(t, i, s) {
      for (var e = {}, o = 0; o < 3; o++) e[o] = t[o] + (i[o] - t[o]) * s;
      return e
    },
    hexToHtml: function(t) {
      return "#" + ("000000" + (t = void 0 === t ? 0 : t).toString(16)).substr(-6)
    },
    htmlToHex: function(t) {
      return t.toUpperCase().replace("#", "0x")
    },
    u255: function(t, i) {
      return parseInt(t.substring(i, i + 2), 16) / 255
    },
    u16: function(t, i) {
      return parseInt(t.substring(i, i + 1), 16) / 15
    },
    unpack: function(t) {
      return 7 == t.length ? [s.u255(t, 1), s.u255(t, 3), s.u255(t, 5)] : 4 == t.length ? [s.u16(t, 1), s.u16(t, 2), s.u16(t, 3)] : void 0
    },
    p255: function(t) {
      var i = Math.round(255 * t).toString(16);
      return i.length < 2 && (i = "0" + i), i
    },
    pack: function(t) {
      return "#" + s.p255(t[0]) + s.p255(t[1]) + s.p255(t[2])
    },
    htmlRgb: function(t) {
      return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
    },
    pad: function(t) {
      return 1 == t.length && (t = "0" + t), t
    },
    rgbToHex: function(t) {
      var i = Math.round(255 * t[0]).toString(16),
        e = Math.round(255 * t[1]).toString(16),
        o = Math.round(255 * t[2]).toString(16);
      return "#" + s.pad(i) + s.pad(e) + s.pad(o)
    },
    hueToRgb: function(t, i, s) {
      return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? t + 6 * (i - t) * s : s < .5 ? i : s < 2 / 3 ? t + 6 * (i - t) * (2 / 3 - s) : t
    },
    rgbToHsl: function(t) {
      var i = t[0],
        s = t[1],
        e = t[2],
        o = Math.min(i, s, e),
        n = Math.max(i, s, e),
        h = n - o,
        r = 0,
        a = 0,
        l = (o + n) / 2;
      return l > 0 && l < 1 && (a = h / (l < .5 ? 2 * l : 2 - 2 * l)), h > 0 && (n == i && n != s && (r += (s - e) / h), n == s && n != e && (r += 2 + (e - i) / h), n == e && n != i && (r += 4 + (i - s) / h), r /= 6), [r, a, l]
    },
    hslToRgb: function(t) {
      var i, e, o = t[0],
        n = t[1],
        h = t[2];
      return 0 === n ? [h, h, h] : (i = 2 * h - (e = h <= .5 ? h * (n + 1) : h + n - h * n), [s.hueToRgb(i, e, o + .33333), s.hueToRgb(i, e, o), s.hueToRgb(i, e, o - .33333)])
    },
    makeGradiant: function(t, i, e, o) {
      s.dom(t, null, i, e, 0);
      for (var n, h = e.childNodes[0].childNodes.length - 1, r = 0; r < o.length; r++) n = o[r], s.dom("stop", null, {
        offset: n[0] + "%",
        "stop-color": n[1],
        "stop-opacity": n[2]
      }, e, [0, h])
    },
    makeKnob: function(t) {
      var i = 128,
        e = s.dom("svg", s.css.basic, {
          viewBox: "0 0 128 " + i,
          width: i,
          height: i,
          preserveAspectRatio: "none"
        });
      s.dom("circle", "", {
        cx: 64,
        cy: 64,
        r: 34,
        fill: s.colors.button,
        stroke: "rgba(0,0,0,0.3)",
        "stroke-width": 8
      }, e), s.dom("path", "", {
        d: "",
        stroke: s.colors.text,
        "stroke-width": 4,
        fill: "none",
        "stroke-linecap": "round"
      }, e), s.dom("circle", "", {
        cx: 64,
        cy: 64,
        r: 41,
        stroke: "rgba(0,0,0,0.1)",
        "stroke-width": 7,
        fill: "none"
      }, e), s.dom("path", "", {
        d: "",
        stroke: "rgba(255,255,255,0.3)",
        "stroke-width": 2,
        fill: "none",
        "stroke-linecap": "round",
        "stroke-opacity": .5
      }, e), s.knob = e
    },
    makeCircular: function(t) {
      var i = 128,
        e = s.dom("svg", s.css.basic, {
          viewBox: "0 0 128 " + i,
          width: i,
          height: i,
          preserveAspectRatio: "none"
        });
      s.dom("circle", "", {
        cx: 64,
        cy: 64,
        r: 40,
        stroke: "rgba(0,0,0,0.1)",
        "stroke-width": 10,
        fill: "none"
      }, e), s.dom("path", "", {
        d: "",
        stroke: s.colors.text,
        "stroke-width": 7,
        fill: "none",
        "stroke-linecap": "butt"
      }, e), s.circular = e
    },
    makeJoystick: function(t) {
      var i, e = 128,
        o = Math.floor(49),
        n = Math.floor(.6 * o),
        h = s.dom("svg", s.css.basic, {
          viewBox: "0 0 128 " + e,
          width: e,
          height: e,
          preserveAspectRatio: "none"
        });
      if (s.dom("defs", null, {}, h), s.dom("g", null, {}, h), 0 === t) {
        i = [
          [40, "rgb(0,0,0)", .3],
          [80, "rgb(0,0,0)", 0],
          [90, "rgb(50,50,50)", .4],
          [100, "rgb(50,50,50)", 0]
        ], s.makeGradiant("radialGradient", {
          id: "grad",
          cx: "50%",
          cy: "50%",
          r: "50%",
          fx: "50%",
          fy: "50%"
        }, h, i), i = [
          [60, "rgb(0,0,0)", .5],
          [100, "rgb(0,0,0)", 0]
        ], s.makeGradiant("radialGradient", {
          id: "gradS",
          cx: "50%",
          cy: "50%",
          r: "50%",
          fx: "50%",
          fy: "50%"
        }, h, i);
        var r = ["rgb(40,40,40)", "rgb(48,48,48)", "rgb(30,30,30)"],
          a = ["rgb(1,90,197)", "rgb(3,95,207)", "rgb(0,65,167)"];
        i = [
          [30, r[0], 1],
          [60, r[1], 1],
          [80, r[1], 1],
          [100, r[2], 1]
        ], s.makeGradiant("radialGradient", {
          id: "gradIn",
          cx: "50%",
          cy: "50%",
          r: "50%",
          fx: "50%",
          fy: "50%"
        }, h, i), i = [
          [30, a[0], 1],
          [60, a[1], 1],
          [80, a[1], 1],
          [100, a[2], 1]
        ], s.makeGradiant("radialGradient", {
          id: "gradIn2",
          cx: "50%",
          cy: "50%",
          r: "50%",
          fx: "50%",
          fy: "50%"
        }, h, i), s.dom("circle", "", {
          cx: 64,
          cy: 64,
          r: o,
          fill: "url(#grad)"
        }, h), s.dom("circle", "", {
          cx: 69,
          cy: 74,
          r: n + 10,
          fill: "url(#gradS)"
        }, h), s.dom("circle", "", {
          cx: 64,
          cy: 64,
          r: n,
          fill: "url(#gradIn)"
        }, h), s.joystick_0 = h
      } else i = [
        [69, "rgb(0,0,0)", 0],
        [70, "rgb(0,0,0)", .3],
        [100, "rgb(0,0,0)", 0]
      ], s.makeGradiant("radialGradient", {
        id: "gradX",
        cx: "50%",
        cy: "50%",
        r: "50%",
        fx: "50%",
        fy: "50%"
      }, h, i), s.dom("circle", "", {
        cx: 64,
        cy: 64,
        r: o,
        fill: "none",
        stroke: "rgba(100,100,100,0.25)",
        "stroke-width": "4"
      }, h), s.dom("circle", "", {
        cx: 64,
        cy: 64,
        r: n + 14,
        fill: "url(#gradX)"
      }, h), s.dom("circle", "", {
        cx: 64,
        cy: 64,
        r: n,
        fill: "none",
        stroke: "rgb(100,100,100)",
        "stroke-width": "4"
      }, h), s.joystick_1 = h
    },
    makeColorRing: function() {
      var t = 256,
        i = s.dom("svg", s.css.basic, {
          viewBox: "0 0 256 " + t,
          width: t,
          height: t,
          preserveAspectRatio: "none"
        });
      s.dom("defs", null, {}, i), s.dom("g", null, {}, i);
      var e, o, n, h, r, a, l, c, u, d = 128,
        p = 8 / 113 / 24 * Math.PI,
        f = 0,
        v = [];
      for (a = 0; a <= 24; ++a) {
        if (e = .5 * (f + (h = (n = a / 24) * s.TwoPI)), o = 1 / Math.cos(.5 * (h - f)), r = [Math.sin(f), -Math.cos(f), Math.sin(e) * o, -Math.cos(e) * o, Math.sin(h), -Math.cos(h)], v[1] = s.rgbToHex(s.hslToRgb([n, 1, .5])), a > 0) {
          for (l = 6; l--;) r[l] = (113 * r[l] + d).toFixed(2);
          c = " M" + r[0] + " " + r[1] + " Q" + r[2] + " " + r[3] + " " + r[4] + " " + r[5], u = [
            [0, v[0], 1],
            [100, v[1], 1]
          ], s.makeGradiant("linearGradient", {
            id: "G" + a,
            x1: r[0],
            y1: r[1],
            x2: r[4],
            y2: r[5],
            gradientUnits: "userSpaceOnUse"
          }, i, u), s.dom("path", "", {
            d: c,
            "stroke-width": 30,
            stroke: "url(#G" + a + ")",
            "stroke-linecap": "butt"
          }, i, 1)
        }
        f = h - p, v[0] = v[1]
      }
      u = [
        [0, "#FFFFFF", 1],
        [50, "#FFFFFF", 0],
        [50, "#000000", 0],
        [100, "#000000", 1]
      ], s.makeGradiant("linearGradient", {
        id: "GL0",
        x1: 0,
        y1: d - 84.9,
        x2: 0,
        y2: 212.9,
        gradientUnits: "userSpaceOnUse"
      }, i, u), u = [
        [0, "#7f7f7f", 1],
        [50, "#7f7f7f", .5],
        [100, "#7f7f7f", 0]
      ], s.makeGradiant("linearGradient", {
        id: "GL1",
        x1: 78.95,
        y1: 0,
        x2: 226,
        y2: 0,
        gradientUnits: "userSpaceOnUse"
      }, i, u), s.dom("g", null, {
        "transform-origin": "128px 128px",
        transform: "rotate(0)"
      }, i), s.dom("polygon", "", {
        points: "78.95 43.1 78.95 212.85 226 128",
        fill: "red"
      }, i, 2), s.dom("polygon", "", {
        points: "78.95 43.1 78.95 212.85 226 128",
        fill: "url(#GL1)",
        "stroke-width": 1,
        stroke: "url(#GL1)"
      }, i, 2), s.dom("polygon", "", {
        points: "78.95 43.1 78.95 212.85 226 128",
        fill: "url(#GL0)",
        "stroke-width": 1,
        stroke: "url(#GL0)"
      }, i, 2), s.dom("path", "", {
        d: "M 255.75 136.5 Q 256 132.3 256 128 256 123.7 255.75 119.5 L 241 128 255.75 136.5 Z",
        fill: "none",
        "stroke-width": 2,
        stroke: "#000"
      }, i, 2), s.dom("circle", "", {
        cx: 128,
        cy: 128,
        r: 6,
        "stroke-width": 2,
        stroke: "#000",
        fill: "none"
      }, i), s.colorRing = i
    },
    icon: function(t, i, e) {
      e = e || 40, i = i || "#DEDEDE";
      var o = ["<svg xmlns='" + s.svgns + "' version='1.1' xmlns:xlink='" + s.htmls + "' style='pointer-events:none;' preserveAspectRatio='xMinYMax meet' x='0px' y='0px' width='" + e + "px' height='" + e + "px' viewBox='0 0 256 256'><g>"];
      switch (t) {
        case "logo":
          o[1] = "<path id='logoin' fill='" + i + "' stroke='none' d='" + s.logoFill_d + "'/>";
          break;
        case "save":
          o[1] = "<path stroke='" + i + "' stroke-width='4' stroke-linejoin='round' stroke-linecap='round' fill='none' d='M 26.125 17 L 20 22.95 14.05 17 M 20 9.95 L 20 22.95'/><path stroke='" + i, o[1] += "' stroke-width='2.5' stroke-linejoin='round' stroke-linecap='round' fill='none' d='M 32.6 23 L 32.6 25.5 Q 32.6 28.5 29.6 28.5 L 10.6 28.5 Q 7.6 28.5 7.6 25.5 L 7.6 23'/>"
      }
      return o[2] = "</g></svg>", o.join("\n")
    },
    logoFill_d: ["M 171 150.75 L 171 33.25 155.5 33.25 155.5 150.75 Q 155.5 162.2 147.45 170.2 139.45 178.25 128 178.25 116.6 178.25 108.55 170.2 100.5 162.2 100.5 150.75 ", "L 100.5 33.25 85 33.25 85 150.75 Q 85 168.65 97.55 181.15 110.15 193.75 128 193.75 145.9 193.75 158.4 181.15 171 168.65 171 150.75 ", "M 200 33.25 L 184 33.25 184 150.8 Q 184 174.1 167.6 190.4 151.3 206.8 128 206.8 104.75 206.8 88.3 190.4 72 174.1 72 150.8 L 72 33.25 56 33.25 56 150.75 ", "Q 56 180.55 77.05 201.6 98.2 222.75 128 222.75 157.8 222.75 178.9 201.6 200 180.55 200 150.75 L 200 33.25 Z"].join("\n")
  };
  s.setText();
  var e = s,
    o = {
      ui: [],
      ID: null,
      lock: !1,
      wlock: !1,
      current: -1,
      needReZone: !0,
      isEventsInit: !1,
      prevDefault: ["contextmenu", "mousedown", "mousemove", "mouseup"],
      pointerEvent: ["pointerdown", "pointermove", "pointerup"],
      xmlserializer: new XMLSerializer,
      tmpTime: null,
      tmpImage: null,
      oldCursor: "auto",
      input: null,
      parent: null,
      firstImput: !0,
      hiddenImput: null,
      hiddenSizer: null,
      hasFocus: !1,
      startInput: !1,
      inputRange: [0, 0],
      cursorId: 0,
      str: "",
      pos: 0,
      startX: -1,
      moveX: -1,
      debugInput: !1,
      isLoop: !1,
      listens: [],
      e: {
        type: null,
        clientX: 0,
        clientY: 0,
        keyCode: NaN,
        key: null,
        delta: 0
      },
      isMobile: !1,
      add: function(t) {
        o.ui.push(t), o.getZone(t), o.isEventsInit || o.initEvents()
      },
      testMobile: function() {
        var t = navigator.userAgent;
        return !!(t.match(/Android/i) || t.match(/webOS/i) || t.match(/iPhone/i) || t.match(/iPad/i) || t.match(/iPod/i) || t.match(/BlackBerry/i) || t.match(/Windows Phone/i))
      },
      remove: function(t) {
        var i = o.ui.indexOf(t); - 1 !== i && (o.removeListen(t), o.ui.splice(i, 1)), 0 === o.ui.length && o.removeEvents()
      },
      initEvents: function() {
        if (!o.isEventsInit) {
          var t = document.body;
          o.isMobile = o.testMobile(), o.isMobile ? (t.addEventListener("touchstart", o, !1), t.addEventListener("touchend", o, !1), t.addEventListener("touchmove", o, !1)) : (t.addEventListener("contextmenu", o, !1), t.addEventListener("wheel", o, !1), document.addEventListener("click", o, !1), t.addEventListener("pointerdown", o, !1), document.addEventListener("pointermove", o, !1), document.addEventListener("pointerup", o, !1)), window.addEventListener("keydown", o, !1), window.addEventListener("keyup", o, !1), window.addEventListener("resize", o.resize, !1), o.isEventsInit = !0
        }
      },
      removeEvents: function() {
        if (o.isEventsInit) {
          var t = document.body;
          o.isMobile ? (t.removeEventListener("touchstart", o, !1), t.removeEventListener("touchend", o, !1), t.removeEventListener("touchmove", o, !1)) : (t.removeEventListener("contextmenu", o, !1), t.removeEventListener("wheel", o, !1), document.removeEventListener("click", o, !1), t.removeEventListener("pointerdown", o, !1), document.removeEventListener("pointermove", o, !1), document.removeEventListener("pointerup", o, !1)), window.removeEventListener("keydown", o), window.removeEventListener("keyup", o), window.removeEventListener("resize", o.resize), o.isEventsInit = !1
        }
      },
      resize: function() {
        o.needReZone = !0;
        for (var t, i = o.ui.length; i--;)(t = o.ui[i]).isGui && !t.isCanvasOnly && t.autoResize && t.setHeight()
      },
      out: function() {
        console.log("im am out"), o.clearOldID()
      },
      in: function() {
        console.log("im am in")
      },
      handleEvent: function(t) {
        if (-1 !== t.type.indexOf(o.prevDefault) && t.preventDefault(), (-1 === t.type.indexOf(o.pointerEvent) || "mouse" === t.pointerType && "pen" === t.pointerType) && "contextmenu" !== t.type) {
          o.findZone();
          var i = o.e;
          "keydown" === t.type && o.keydown(t), "keyup" === t.type && o.keyup(t), "wheel" === t.type ? i.delta = t.deltaY > 0 ? 1 : -1 : i.delta = 0, i.clientX = t.clientX || 0, i.clientY = t.clientY || 0, i.type = t.type, o.isMobile && (t.touches && t.touches.length > 0 && (i.clientX = t.touches[0].clientX || 0, i.clientY = t.touches[0].clientY || 0), "touchstart" === t.type && (i.type = "mousedown"), "touchend" === t.type && (i.type = "mouseup"), "touchmove" === t.type && (i.type = "mousemove")), "pointerdown" === t.type && (i.type = "mousedown"), "pointerup" === t.type && (i.type = "mouseup"), "pointermove" === t.type && (i.type = "mousemove"), "mousedown" === i.type && (o.lock = !0), "mouseup" === i.type && (o.lock = !1), o.isMobile && "mousedown" === i.type && o.findID(i), "mousemove" !== i.type || o.lock || o.findID(i), null !== o.ID && (o.ID.isCanvasOnly && (i.clientX = o.ID.mouse.x, i.clientY = o.ID.mouse.y), o.ID.handleEvent(i)), o.isMobile && "mouseup" === i.type && o.clearOldID()
        }
      },
      findID: function(t) {
        for (var i, s, e, n = o.ui.length, h = -1; n--;)
          if ((i = o.ui[n]).isCanvasOnly ? (s = i.mouse.x, e = i.mouse.y) : (s = t.clientX, e = t.clientY), o.onZone(i, s, e)) {
            (h = n) !== o.current && (o.clearOldID(), o.current = h, o.ID = i);
            break
          } - 1 === h && o.clearOldID()
      },
      clearOldID: function() {
        o.ID && (o.current = -1, o.ID.reset(), o.ID = null, o.cursor())
      },
      calcUis: function(t, i, s) {
        var e, o, n = t.length,
          h = 0,
          r = 0;
        for (o = 0; o < n; o++)(e = t[o]).zone.w = e.w, e.zone.h = e.h, e.autoWidth ? (e.zone.x = i.x, e.zone.y = s, s += e.h + 1) : (0 === h && (s += e.h + 1), e.zone.x = i.x + h, e.zone.y = 0 === h ? s - e.h : r, r = e.zone.y, (h += e.w) + e.w > i.w && (h = 0)), e.isGroup && e.calcUis()
      },
      findTarget: function(t, i) {
        for (var s = t.length; s--;)
          if (o.onZone(t[s], i.clientX, i.clientY)) return s;
        return -1
      },
      findZone: function(t) {
        if (o.needReZone || t) {
          for (var i, s = o.ui.length; s--;) i = o.ui[s], o.getZone(i), i.isGui && i.calcUis();
          o.needReZone = !1
        }
      },
      onZone: function(t, i, s) {
        if (void 0 === i || void 0 === s) return !1;
        var e = t.zone,
          o = i - e.x,
          n = s - e.y,
          h = o >= 0 && n >= 0 && o <= e.w && n <= e.h;
        return h ? t.local.set(o, n) : t.local.neg(), h
      },
      getZone: function(t) {
        if (!t.isCanvasOnly) {
          var i = t.getDom().getBoundingClientRect();
          t.zone = {
            x: i.left,
            y: i.top,
            w: i.width,
            h: i.height
          }
        }
      },
      cursor: function(t) {
        (t = t || "auto") !== o.oldCursor && (document.body.style.cursor = t, o.oldCursor = t)
      },
      toCanvas: function(t, i, s, e) {
        if (e && null !== o.tmpTime && (clearTimeout(o.tmpTime), o.tmpTime = null), null === o.tmpTime) {
          o.lock && (o.tmpTime = setTimeout((function() {
            o.tmpTime = null
          }), 10));
          var n = !1;
          i === t.canvas.width && s === t.canvas.height || (n = !0), null === o.tmpImage && (o.tmpImage = new Image);
          var h = o.tmpImage,
            r = o.xmlserializer.serializeToString(t.content),
            a = '<svg xmlns="http://www.w3.org/2000/svg" width="' + i + '" height="' + s + '"><foreignObject style="pointer-events: none; left:0;" width="100%" height="100%">' + r + "</foreignObject></svg>";
          h.onload = function() {
            var e = t.canvas.getContext("2d");
            n ? (t.canvas.width = i, t.canvas.height = s) : e.clearRect(0, 0, i, s), e.drawImage(this, 0, 0), t.onDraw()
          }, h.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(a), h.crossOrigin = ""
        }
      },
      setHidden: function() {
        if (null === o.hiddenImput) {
          var t = o.debugInput ? "" : "opacity:0; zIndex:0;",
            i = o.parent.css.txt + "padding:0; width:auto; height:auto; text-shadow:none;";
          i += "left:10px; top:auto; border:none; color:#FFF; background:#000;" + t, o.hiddenImput = document.createElement("input"), o.hiddenImput.type = "text", o.hiddenImput.style.cssText = i + "bottom:30px;" + (o.debugInput ? "" : "transform:scale(0);"), o.hiddenSizer = document.createElement("div"), o.hiddenSizer.style.cssText = i + "bottom:60px;", document.body.appendChild(o.hiddenImput), document.body.appendChild(o.hiddenSizer)
        }
        o.hiddenImput.style.width = o.input.clientWidth + "px", o.hiddenImput.value = o.str, o.hiddenSizer.innerHTML = o.str, o.hasFocus = !0
      },
      clearHidden: function(t) {
        null !== o.hiddenImput && (o.hasFocus = !1)
      },
      clickPos: function(t) {
        for (var i = o.str.length, s = 0, e = 0; i-- && !((s += o.textWidth(o.str[e])) >= t);) e++;
        return e
      },
      upInput: function(t, i) {
        if (null === o.parent) return !1;
        var s = !1;
        if (i) {
          var e = o.clickPos(t);
          if (o.moveX = e, -1 === o.startX) o.startX = e, o.cursorId = e, o.inputRange = [o.startX, o.startX];
          else o.moveX !== o.startX && (o.startX > o.moveX ? o.inputRange = [o.moveX, o.startX] : o.inputRange = [o.startX, o.moveX]);
          s = !0
        } else -1 !== o.startX && (o.hasFocus = !0, o.hiddenImput.focus(), o.hiddenImput.selectionStart = o.inputRange[0], o.hiddenImput.selectionEnd = o.inputRange[1], o.startX = -1, s = !0);
        return s && o.selectParent(), s
      },
      selectParent: function() {
        var t = o.textWidth(o.str.substring(0, o.cursorId)),
          i = o.textWidth(o.str.substring(0, o.inputRange[0])),
          s = o.textWidth(o.str.substring(o.inputRange[0], o.inputRange[1]));
        o.parent.select(t, i, s)
      },
      textWidth: function(t) {
        return null === o.hiddenSizer ? 0 : (t = t.replace(/ /g, "&nbsp;"), o.hiddenSizer.innerHTML = t, o.hiddenSizer.clientWidth)
      },
      clearInput: function() {
        null !== o.parent && (o.firstImput || o.parent.validate(!0), o.clearHidden(), o.parent.unselect(), o.input.style.background = o.parent.colors.inputBg, o.input.style.borderColor = o.parent.colors.inputBorder, o.parent.isEdit = !1, o.input = null, o.parent = null, o.str = "", o.firstImput = !0)
      },
      setInput: function(t, i) {
        o.clearInput(), o.input = t, o.parent = i, o.input.style.background = o.parent.colors.inputOver, o.input.style.borderColor = o.parent.colors.inputBorderSelect, o.str = o.input.textContent, o.setHidden()
      },
      keydown: function(t) {
        if (null !== o.parent) {
          var i = t.which;
          t.shiftKey, o.firstImput = !1, o.hasFocus && (window.focus(), o.hiddenImput.focus()), o.parent.isEdit = !0, 13 === i ? o.clearInput() : o.input.isNum ? t.keyCode > 47 && t.keyCode < 58 || t.keyCode > 95 && t.keyCode < 106 || 190 === t.keyCode || 110 === t.keyCode || 8 === t.keyCode || 109 === t.keyCode ? o.hiddenImput.readOnly = !1 : o.hiddenImput.readOnly = !0 : o.hiddenImput.readOnly = !1
        }
      },
      keyup: function(t) {
        null !== o.parent && (o.str = o.hiddenImput.value, o.parent.allEqual ? o.parent.sameStr(o.str) : o.input.textContent = o.str, o.cursorId = o.hiddenImput.selectionStart, o.inputRange = [o.hiddenImput.selectionStart, o.hiddenImput.selectionEnd], o.selectParent(), o.parent.validate())
      },
      loop: function() {
        o.isLoop && requestAnimationFrame(o.loop), o.update()
      },
      update: function() {
        for (var t = o.listens.length; t--;) o.listens[t].listening()
      },
      removeListen: function(t) {
        var i = o.listens.indexOf(t); - 1 !== i && o.listens.splice(i, 1), 0 === o.listens.length && (o.isLoop = !1)
      },
      addListen: function(t) {
        return -1 === o.listens.indexOf(t) && (o.listens.push(t), o.isLoop || (o.isLoop = !0, o.loop()), !0)
      }
    },
    n = o;

  function h(t, i) {
    t.prototype = Object.create(i.prototype), t.prototype.constructor = t, r(t, i)
  }

  function r(t, i) {
    return (r = Object.setPrototypeOf || function(t, i) {
      return t.__proto__ = i, t
    })(t, i)
  }
  var a = function() {
      function t(t, i) {
        void 0 === t && (t = 0), void 0 === i && (i = 0), this.x = t, this.y = i
      }
      var i = t.prototype;
      return i.set = function(t, i) {
        return this.x = t, this.y = i, this
      }, i.divide = function(t) {
        return this.x /= t.x, this.y /= t.y, this
      }, i.multiply = function(t) {
        return this.x *= t.x, this.y *= t.y, this
      }, i.multiplyScalar = function(t) {
        return this.x *= t, this.y *= t, this
      }, i.divideScalar = function(t) {
        return this.multiplyScalar(1 / t)
      }, i.length = function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
      }, i.angle = function() {
        var t = Math.atan2(this.y, this.x);
        return t < 0 && (t += 2 * Math.PI), t
      }, i.addScalar = function(t) {
        return this.x += t, this.y += t, this
      }, i.negate = function() {
        return this.x *= -1, this.y *= -1, this
      }, i.neg = function() {
        return this.x = -1, this.y = -1, this
      }, i.isZero = function() {
        return 0 === this.x && 0 === this.y
      }, i.copy = function(t) {
        return this.x = t.x, this.y = t.y, this
      }, i.equals = function(t) {
        return t.x === this.x && t.y === this.y
      }, i.nearEquals = function(t, i) {
        return t.x.toFixed(i) === this.x.toFixed(i) && t.y.toFixed(i) === this.y.toFixed(i)
      }, i.lerp = function(t, i) {
        return null === t ? (this.x -= this.x * i, this.y -= this.y * i) : (this.x += (t.x - this.x) * i, this.y += (t.y - this.y) * i), this
      }, t
    }(),
    l = function() {
      function t(t) {
        if (void 0 === t && (t = {}), this.main = t.main || null, this.isUI = t.isUI || !1, this.group = null, this.isListen = !1, this.ontop = !!t.ontop && t.ontop, this.css = this.main ? this.main.css : e.css, this.colors = this.main ? this.main.colors : e.colors, this.defaultBorderColor = this.colors.border, this.svgs = e.svgs, this.isSpace = t.isSpace || !1, this.zone = {
            x: 0,
            y: 0,
            w: 0,
            h: 0
          }, this.local = (new a).neg(), this.isCanvasOnly = !1, this.isSelect = !1, this.p = void 0 !== t.p ? t.p : e.size.p, this.w = this.isUI ? this.main.size.w : e.size.w, void 0 !== t.w && (this.w = t.w), this.h = this.isUI ? this.main.size.h : e.size.h, void 0 !== t.h && (this.h = t.h), this.isSpace || (this.h = this.h < 11 ? 11 : this.h), this.autoWidth = t.auto || !0, this.isOpen = !1, this.radius = t.radius || this.colors.radius, this.isNumber = !1, this.noNeg = t.noNeg || !1, this.allEqual = t.allEqual || !1, this.mono = !1, this.isEdit = !1, this.simple = t.simple || !1, this.simple && (this.sa = 0), this.setSize(this.w), void 0 !== t.sa && (this.sa = t.sa), void 0 !== t.sb && (this.sb = t.sb), this.simple && (this.sb = this.w - this.sa), this.sc = void 0 === t.sc ? 47 : t.sc, this.objectLink = null, this.isSend = !1, this.val = null, this.bg = this.colors.background, this.bgOver = this.colors.backgroundOver, void 0 !== t.bg && (this.bg = t.bg, this.bgOver = t.bg), void 0 !== t.bgOver && (this.bgOver = t.bgOver), this.titleColor = t.titleColor || this.colors.text, this.fontColor = t.fontColor || this.colors.text, this.fontSelect = t.fontSelect || this.colors.textOver, void 0 !== t.color && (this.fontColor = t.color), this.colorPlus = e.ColorLuma(this.fontColor, .3), this.txt = t.name || "", this.rename = t.rename || "", this.target = t.target || null, this.callback = void 0 === t.callback ? null : t.callback, this.endCallback = null, null === this.callback && this.isUI && null !== this.main.callback && (this.callback = this.main.callback), this.c = [], this.s = [], this.c[0] = e.dom("div", this.css.basic + "position:relative; height:20px; float:left; overflow:hidden;"), this.s[0] = this.c[0].style, this.isUI && (this.s[0].marginBottom = "1px"), this.simple || (this.c[1] = e.dom("div", this.css.txt), this.s[1] = this.c[1].style, this.c[1].textContent = "" === this.rename ? this.txt : this.rename, this.s[1].color = this.titleColor), t.pos) {
          for (var i in this.s[0].position = "absolute", t.pos) this.s[0][i] = t.pos[i];
          this.mono = !0
        }
        t.css && (this.s[0].cssText = t.css)
      }
      var i = t.prototype;
      return i.init = function() {
        this.zone.h = this.h;
        var t = this.s,
          i = this.c;
        t[0].height = this.h + "px", this.isUI && (t[0].background = this.bg), void 0 !== i[1] && this.autoWidth && (t[1] = i[1].style, t[1].height = this.h - 4 + "px", t[1].lineHeight = this.h - 8 + "px");
        for (var s = e.frag, o = 1, h = i.length; o !== h; o++) void 0 !== i[o] && (s.appendChild(i[o]), t[o] = i[o].style);
        var r = null !== this.target ? this.target : this.isUI ? this.main.inner : document.body;
        this.ontop ? r.insertAdjacentElement("afterbegin", i[0]) : r.appendChild(i[0]), i[0].appendChild(s), this.rSize(), this.isUI || (this.c[0].style.pointerEvents = "auto", n.add(this))
      }, i.dom = function(t, i, s, o, n) {
        return e.dom(t, i, s, o, n)
      }, i.setSvg = function(t, i, s, o, n) {
        e.setSvg(t, i, s, o, n)
      }, i.setCss = function(t, i) {
        e.setCss(t, i)
      }, i.clamp = function(t, i, s) {
        return e.clamp(t, i, s)
      }, i.getColorRing = function() {
        return e.colorRing || e.makeColorRing(), e.clone(e.colorRing)
      }, i.getJoystick = function(t) {
        return e["joystick_" + t] || e.makeJoystick(t), e.clone(e["joystick_" + t])
      }, i.getCircular = function(t) {
        return e.circular || e.makeCircular(t), e.clone(e.circular)
      }, i.getKnob = function(t) {
        return e.knob || e.makeKnob(t), e.clone(e.knob)
      }, i.cursor = function(t) {
        n.cursor(t)
      }, i.update = function() {}, i.reset = function() {}, i.getDom = function() {
        return this.c[0]
      }, i.uiout = function() {
        this.isSpace || this.s && (this.s[0].background = this.bg)
      }, i.uiover = function() {
        this.isSpace || this.s && (this.s[0].background = this.bgOver)
      }, i.rename = function(t) {
        void 0 !== this.c[1] && (this.c[1].textContent = t)
      }, i.listen = function() {
        return this.isListen = n.addListen(this), this
      }, i.listening = function() {
        null !== this.objectLink && (this.isSend || this.isEdit || this.setValue(this.objectLink[this.val]))
      }, i.setValue = function(t) {
        this.isNumber ? this.value = this.numValue(t) : this.value = t, this.update()
      }, i.onChange = function(t) {
        if (!this.isSpace) return this.callback = t || null, this
      }, i.onFinishChange = function(t) {
        if (!this.isSpace) return this.callback = null, this.endCallback = t, this
      }, i.send = function(t) {
        (t = t || this.value) instanceof Array && 1 === t.length && (t = t[0]), this.isSend = !0, null !== this.objectLink && (this.objectLink[this.val] = t), this.callback && this.callback(t, this.val), this.isSend = !1
      }, i.sendEnd = function(t) {
        (t = t || this.value) instanceof Array && 1 === t.length && (t = t[0]), this.endCallback && this.endCallback(t), null !== this.objectLink && (this.objectLink[this.val] = t)
      }, i.clear = function(t) {
        this.isListen && n.removeListen(this), e.clear(this.c[0]), t || (null !== this.target ? null !== this.group ? this.group.clearOne(this) : this.target.removeChild(this.c[0]) : this.isUI ? this.main.clearOne(this) : document.body.removeChild(this.c[0]), this.isUI || n.remove(this)), this.c = null, this.s = null, this.callback = null, this.target = null, this.isListen = !1
      }, i.setSize = function(t) {
        if (this.autoWidth)
          if (this.w = t, this.simple) this.sb = this.w - this.sa;
          else {
            var i = this.w * (this.p / 100);
            this.sa = Math.floor(i + 10), this.sb = Math.floor(this.w - i - 20)
          }
      }, i.rSize = function() {
        this.autoWidth && (this.s[0].width = this.w + "px", this.simple || (this.s[1].width = this.sa + "px"))
      }, i.setTypeNumber = function(t) {
        var i;
        switch (this.isNumber = !0, this.value = 0, void 0 !== t.value && ("string" == typeof t.value ? this.value = 1 * t.value : this.value = t.value), this.min = void 0 === t.min ? -1 / 0 : t.min, this.max = void 0 === t.max ? 1 / 0 : t.max, this.precision = void 0 === t.precision ? 2 : t.precision, this.precision) {
          case 0:
            i = 1;
            break;
          case 1:
            i = .1;
            break;
          case 2:
            i = .01;
            break;
          case 3:
            i = .001;
            break;
          case 4:
            i = 1e-4;
            break;
          case 5:
            i = 1e-5
        }
        this.step = void 0 === t.step ? i : t.step, this.range = this.max - this.min, this.value = this.numValue(this.value)
      }, i.numValue = function(t) {
        return this.noNeg && (t = Math.abs(t)), 1 * Math.min(this.max, Math.max(this.min, t)).toFixed(this.precision)
      }, i.handleEvent = function(t) {
        if (!this.isSpace) return this[t.type](t)
      }, i.wheel = function(t) {
        return !1
      }, i.mousedown = function(t) {
        return !1
      }, i.mousemove = function(t) {
        return !1
      }, i.mouseup = function(t) {
        return !1
      }, i.keydown = function(t) {
        return !1
      }, i.click = function(t) {
        return !1
      }, i.keyup = function(t) {
        return !1
      }, i.setReferency = function(t, i) {
        this.objectLink = t, this.val = i
      }, i.display = function(t) {
        t = t || !1, this.s[0].display = t ? "block" : "none"
      }, i.open = function() {
        this.isOpen || (this.isOpen = !0)
      }, i.close = function() {
        this.isOpen && (this.isOpen = !1)
      }, i.needZone = function() {
        n.needReZone = !0
      }, i.rezone = function() {
        n.needReZone = !0
      }, i.select = function() {}, i.unselect = function() {}, i.setInput = function(t) {
        n.setInput(t, this)
      }, i.upInput = function(t, i) {
        return n.upInput(t, i)
      }, i.selected = function(t) {
        this.isSelect = t || !1
      }, t
    }(),
    c = function(t) {
      function i(i) {
        var s;
        void 0 === i && (i = {}), (s = t.call(this, i) || this).value = i.value || !1, s.buttonColor = i.bColor || s.colors.button, s.inh = i.inh || Math.floor(.8 * s.h), s.inw = i.inw || 36;
        var e = Math.floor(.5 * s.h) - .5 * (s.inh - 2);
        return s.c[2] = s.dom("div", s.css.basic + "background:" + s.colors.boolbg + "; height:" + (s.inh - 2) + "px; width:" + s.inw + "px; top:" + e + "px; border-radius:10px; border:2px solid " + s.boolbg), s.c[3] = s.dom("div", s.css.basic + "height:" + (s.inh - 6) + "px; width:16px; top:" + (e + 2) + "px; border-radius:10px; background:" + s.buttonColor + ";"), s.init(), s.update(), s
      }
      h(i, t);
      var s = i.prototype;
      return s.mousemove = function(t) {
        this.cursor("pointer")
      }, s.mousedown = function(t) {
        return this.value = !this.value, this.update(), this.send(), !0
      }, s.update = function() {
        var t = this.s;
        this.value ? (t[2].background = this.colors.boolon, t[2].borderColor = this.colors.boolon, t[3].marginLeft = "17px") : (t[2].background = this.colors.boolbg, t[2].borderColor = this.colors.boolbg, t[3].marginLeft = "2px")
      }, s.rSize = function() {
        t.prototype.rSize.call(this);
        var i = this.s,
          s = this.w - 10 - this.inw;
        i[2].left = s + "px", i[3].left = s + "px"
      }, i
    }(l),
    u = function(t) {
      function i(i) {
        var s;
        void 0 === i && (i = {}), (s = t.call(this, i) || this).value = !1, s.values = i.value || s.txt, s.onName = i.onName || "", s.on = !1, "string" == typeof s.values && (s.values = [s.values]), s.isDown = !1, s.isLink = i.link || !1, s.cc = [s.colors.button, s.colors.select, s.colors.down], void 0 !== i.cBg && (s.cc[0] = i.cBg), void 0 !== i.bColor && (s.cc[0] = i.bColor), void 0 !== i.cSelect && (s.cc[1] = i.cSelect), void 0 !== i.cDown && (s.cc[2] = i.cDown), s.isLoadButton = i.loader || !1, s.isDragButton = i.drag || !1, s.isDragButton && (s.isLoadButton = !0), s.lng = s.values.length, s.tmp = [], s.stat = [];
        for (var e = 0; e < s.lng; e++) s.c[e + 2] = s.dom("div", s.css.txt + s.css.button + "top:1px; background:" + s.cc[0] + "; height:" + (s.h - 2) + "px; border:" + s.colors.buttonBorder + "; border-radius:" + s.radius + "px;"), s.c[e + 2].style.color = s.fontColor, s.c[e + 2].innerHTML = s.values[e], s.stat[e] = 1;
        return void 0 !== s.c[1] && (s.c[1].textContent = ""), s.isLoadButton && s.initLoader(), s.isDragButton && (s.lng++, s.initDrager()), s.init(), s
      }
      h(i, t);
      var s = i.prototype;
      return s.onOff = function() {
        this.on = !this.on, this.c[2].innerHTML = this.on ? this.onName : this.values[0]
      }, s.testZone = function(t) {
        var i = this.local;
        if (-1 === i.x && -1 === i.y) return "";
        for (var s = this.lng, e = this.tmp; s--;)
          if (i.x > e[s][0] && i.x < e[s][2]) return s + 2;
        return ""
      }, s.click = function(t) {
        if ("" !== this.onName && this.onOff(), this.isLink) {
          var i = this.testZone(t);
          return !!i && (this.value = this.values[i - 2], this.send(), this.reset())
        }
      }, s.mouseup = function(t) {
        return !!this.isDown && (this.value = !1, this.isDown = !1, this.mousemove(t))
      }, s.mousedown = function(t) {
        if (this.isLink) return !1;
        var i = this.testZone(t);
        return !!i && (this.isDown = !0, this.value = this.values[i - 2], this.isLoadButton || this.send(), this.mousemove(t))
      }, s.mousemove = function(t) {
        var i = !1,
          s = this.testZone(t);
        return "" !== s ? (this.cursor("pointer"), i = this.modes(this.isDown ? 3 : 2, s)) : i = this.reset(), i
      }, s.modes = function(t, i) {
        for (var s = !1, e = 0; e < this.lng; e++)(e === i - 2 ? this.mode(t, e + 2) : this.mode(1, e + 2)) && (s = !0);
        return s
      }, s.mode = function(t, i) {
        var s = !1,
          e = i - 2;
        if (this.stat[e] !== t) {
          switch (t) {
            case 1:
              this.stat[e] = 1, this.s[e + 2].color = this.fontColor, this.s[e + 2].background = this.cc[0];
              break;
            case 2:
              this.stat[e] = 2, this.s[e + 2].color = this.fontSelect, this.s[e + 2].background = this.cc[1];
              break;
            case 3:
              this.stat[e] = 3, this.s[e + 2].color = this.fontSelect, this.s[e + 2].background = this.cc[2]
          }
          s = !0
        }
        return s
      }, s.reset = function() {
        return this.cursor(), this.modes(1, 2)
      }, s.dragover = function(t) {
        t.preventDefault(), this.s[4].borderColor = this.colors.select, this.s[4].color = this.colors.select
      }, s.dragend = function(t) {
        t.preventDefault(), this.s[4].borderColor = this.fontColor, this.s[4].color = this.fontColor
      }, s.drop = function(t) {
        t.preventDefault(), this.dragend(t), this.fileSelect(t.dataTransfer.files[0])
      }, s.initDrager = function() {
        this.c[4] = this.dom("div", this.css.txt + " text-align:center; line-height:" + (this.h - 8) + "px; border:1px dashed " + this.fontColor + "; top:2px;\theight:" + (this.h - 4) + "px; border-radius:" + this.radius + "px; pointer-events:auto;"), this.c[4].textContent = "DRAG", this.c[4].addEventListener("dragover", function(t) {
          this.dragover(t)
        }.bind(this), !1), this.c[4].addEventListener("dragend", function(t) {
          this.dragend(t)
        }.bind(this), !1), this.c[4].addEventListener("dragleave", function(t) {
          this.dragend(t)
        }.bind(this), !1), this.c[4].addEventListener("drop", function(t) {
          this.drop(t)
        }.bind(this), !1)
      }, s.initLoader = function() {
        this.c[3] = this.dom("input", this.css.basic + "top:0px; opacity:0; height:" + this.h + "px; pointer-events:auto; cursor:pointer;"), this.c[3].name = "loader", this.c[3].type = "file", this.c[3].addEventListener("change", function(t) {
          this.fileSelect(t.target.files[0])
        }.bind(this), !1)
      }, s.fileSelect = function(t) {
        if (void 0 !== t) {
          var i = new FileReader,
            s = t.name,
            e = s.substring(s.lastIndexOf(".") + 1, s.length); - 1 !== ["png", "jpg", "mp4", "webm", "ogg"].indexOf(e) ? i.readAsDataURL(t) : -1 !== ["sea", "z", "hex", "bvh", "BVH", "glb"].indexOf(e) ? i.readAsArrayBuffer(t) : i.readAsText(t), i.onload = function(t) {
            this.callback && this.callback(t.target.result, s, e)
          }.bind(this)
        }
      }, s.label = function(t, i) {
        i = i || 2, this.c[i].textContent = t
      }, s.icon = function(t, i, s) {
        s = s || 2, this.s[s].padding = (i || 0) + "px 0px", this.c[s].innerHTML = t
      }, s.rSize = function() {
        t.prototype.rSize.call(this);
        for (var i = this.s, s = this.sb, e = this.sa, o = this.lng, n = Math.floor((s - 3 * (o - 1)) / o); o--;) this.tmp[o] = [Math.floor(e + n * o + 3 * o), n], this.tmp[o][2] = this.tmp[o][0] + this.tmp[o][1], i[o + 2].left = this.tmp[o][0] + "px", i[o + 2].width = this.tmp[o][1] + "px";
        this.isDragButton && (i[4].left = e + n + 3 + "px", i[4].width = n + "px"), this.isLoadButton && (i[3].left = e + "px", i[3].width = n + "px")
      }, i
    }(l),
    d = function(t) {
      function i(i) {
        var s;
        return void 0 === i && (i = {}), (s = t.call(this, i) || this).isCyclic = i.cyclic || !1, s.model = i.stype || 0, void 0 !== i.mode && (s.model = i.mode), s.autoWidth = !1, s.buttonColor = s.colors.button, s.setTypeNumber(i), s.radius = .5 * s.w, s.twoPi = 2 * Math.PI, s.pi90 = .5 * Math.PI, s.offset = new a, s.h = i.h || s.w + 10, s.top = 0, s.c[0].style.width = s.w + "px", void 0 !== s.c[1] && (s.c[1].style.width = s.w + "px", s.c[1].style.textAlign = "center", s.top = 10, s.h += 10), s.percent = 0, s.cmode = 0, s.c[2] = s.dom("div", s.css.txt + "text-align:center; top:" + (s.h - 20) + "px; width:" + s.w + "px; color:" + s.fontColor), s.c[3] = s.getCircular(), s.setSvg(s.c[3], "d", s.makePath(), 1), s.setSvg(s.c[3], "stroke", s.fontColor, 1), s.setSvg(s.c[3], "viewBox", "0 0 " + s.w + " " + s.w), s.setCss(s.c[3], {
          width: s.w,
          height: s.w,
          left: 0,
          top: s.top
        }), s.init(), s.update(), s
      }
      h(i, t);
      var s = i.prototype;
      return s.mode = function(t) {
        if (this.cmode === t) return !1;
        switch (t) {
          case 0:
            if (this.s[2].color = this.fontColor, this.setSvg(this.c[3], "stroke", "rgba(0,0,0,0.1)", 0), this.model > 0) {
              var i = e.pack(e.lerpColor(e.unpack(e.ColorLuma(this.fontColor, -.75)), e.unpack(this.fontColor), this.percent));
              this.setSvg(this.c[3], "stroke", i, 1)
            } else this.setSvg(this.c[3], "stroke", this.fontColor, 1);
            break;
          case 1:
            if (this.s[2].color = this.colorPlus, this.setSvg(this.c[3], "stroke", "rgba(0,0,0,0.3)", 0), this.model > 0) {
              var s = e.pack(e.lerpColor(e.unpack(e.ColorLuma(this.fontColor, -.75)), e.unpack(this.fontColor), this.percent));
              this.setSvg(this.c[3], "stroke", s, 1)
            } else this.setSvg(this.c[3], "stroke", this.colorPlus, 1)
        }
        return this.cmode = t, !0
      }, s.reset = function() {
        this.isDown = !1
      }, s.testZone = function(t) {
        var i = this.local;
        return -1 === i.x && -1 === i.y ? "" : i.y <= this.c[1].offsetHeight ? "title" : i.y > this.h - this.c[2].offsetHeight ? "text" : "circular"
      }, s.mouseup = function(t) {
        return this.isDown = !1, this.sendEnd(), this.mode(0)
      }, s.mousedown = function(t) {
        return this.isDown = !0, this.old = this.value, this.oldr = null, this.mousemove(t), this.mode(1)
      }, s.mousemove = function(t) {
        if (this.isDown) {
          var i = this.offset;
          if (i.x = this.radius - (t.clientX - this.zone.x), i.y = this.radius - (t.clientY - this.zone.y - this.top), this.r = i.angle() - this.pi90, this.r = (this.r % this.twoPi + this.twoPi) % this.twoPi, null !== this.oldr) {
            var s = this.r - this.oldr;
            this.r = Math.abs(s) > Math.PI ? this.oldr : this.r, s > 6 && (this.r = 0), s < -6 && (this.r = this.twoPi)
          }
          var e = 1 / this.twoPi,
            o = this.r * e,
            n = this.range * o + this.min - this.old;
          (n >= this.step || n <= this.step) && (n = ~~(n / this.step), this.value = this.numValue(this.old + n * this.step), this.update(!0), this.old = this.value, this.oldr = this.r)
        }
      }, s.wheel = function(t) {
        if ("circular" === this.testZone(t)) {
          var i = this.value - this.step * t.delta;
          return i > this.max ? i = this.isCyclic ? this.min : this.max : i < this.min && (i = this.isCyclic ? this.max : this.min), this.setValue(i), this.old = i, this.update(!0), !0
        }
        return !1
      }, s.makePath = function() {
        var t = 40,
          i = this.percent * this.twoPi - .001,
          s = t + t * Math.sin(i) + 24,
          e = t - t * Math.cos(i) + 24;
        return "M 64,24 A 40,40 0 " + (i > Math.PI ? 1 : 0) + " 1 " + s + "," + e
      }, s.update = function(t) {
        if (this.c[2].textContent = this.value, this.percent = (this.value - this.min) / this.range, this.setSvg(this.c[3], "d", this.makePath(), 1), this.model > 0) {
          var i = e.pack(e.lerpColor(e.unpack(e.ColorLuma(this.fontColor, -.75)), e.unpack(this.fontColor), this.percent));
          this.setSvg(this.c[3], "stroke", i, 1)
        }
        t && this.send()
      }, i
    }(l),
    p = function(t) {
      function i(i) {
        var s;
        return void 0 === i && (i = {}), (s = t.call(this, i) || this).ctype = i.ctype || "hex", s.wfixe = 256, s.cw = s.sb > 256 ? 256 : s.sb, null != i.cw && (s.cw = i.cw), s.side = i.side || "down", s.up = "down" === s.side ? 0 : 1, s.baseH = s.h, s.offset = new a, s.decal = new a, s.pp = new a, s.c[2] = s.dom("div", s.css.txt + "height:" + (s.h - 4) + "px;border-radius:" + s.radius + "px; line-height:" + (s.h - 8) + "px;"), s.s[2] = s.c[2].style, s.up && (s.s[2].top = "auto", s.s[2].bottom = "2px"), s.c[3] = s.getColorRing(), s.c[3].style.visibility = "hidden", s.hsl = null, s.value = "#ffffff", void 0 !== i.value && (i.value instanceof Array ? s.value = e.rgbToHex(i.value) : isNaN(i.value) ? s.value = i.value : s.value = e.hexToHtml(i.value)), s.bcolor = null, s.isDown = !1, s.fistDown = !1, s.tr = 98, s.tsl = Math.sqrt(3) * s.tr, s.hue = 0, s.d = 256, s.setColor(s.value), s.init(), void 0 !== i.open && s.open(), s
      }
      h(i, t);
      var s = i.prototype;
      return s.testZone = function(t, i) {
        var s = this.local;
        return -1 === s.x && -1 === s.y ? "" : this.up && this.isOpen ? s.y > this.wfixe ? "title" : "color" : s.y < this.baseH + 2 ? "title" : this.isOpen ? "color" : void 0
      }, s.mouseup = function(t) {
        this.isDown = !1, this.d = 256
      }, s.mousedown = function(t) {
        var i = this.testZone(t.clientX, t.clientY);
        if ("title" === i) return this.isOpen ? this.close() : this.open(), !0;
        "color" === i && (this.isDown = !0, this.fistDown = !0, this.mousemove(t))
      }, s.mousemove = function(t) {
        var i, s, o, n, h, r, a, l, c, u = this.testZone(t.clientX, t.clientY),
          d = e;
        if ("title" === u && this.cursor("pointer"), "color" === u && ((i = this.offset).x = t.clientX - (this.zone.x + this.decal.x + this.mid), i.y = t.clientY - (this.zone.y + this.decal.y + this.mid), s = i.length() * this.ratio, (c = i.angle()) < 0 && (c += 2 * d.PI), s < 128 ? this.cursor("crosshair") : this.isDown || this.cursor(), this.isDown && (this.fistDown && (this.d = s, this.fistDown = !1), this.d < 128)))
          if (this.d > this.tr) o = (c + d.pi90) / d.TwoPI, this.hue = (o + 1) % 1, this.setHSL([(o + 1) % 1, this.hsl[1], this.hsl[2]]);
          else {
            a = i.x * this.ratio, l = i.y * this.ratio;
            var p = this.hue * d.TwoPI + d.PI;
            p < 0 && (p += 2 * d.PI), (r = Math.atan2(-l, a)) < 0 && (r += 2 * d.PI);
            var f = (r + d.pi90 + d.TwoPI + p) % d.TwoPI,
              v = f % (2 / 3 * d.PI) - d.pi60,
              m = .5 * this.tr,
              g = Math.tan(v) * m,
              x = Math.sqrt(a * a + l * l),
              b = Math.sqrt(m * m + g * g);
            if (x > b) {
              var w = Math.tan(v) * x,
                y = Math.atan(w / b);
              y > d.pi60 ? y = d.pi60 : y < -d.pi60 && (y = -d.pi60), v = (f = ((r += y - v) + d.pi90 + d.TwoPI + p) % d.TwoPI) % (2 / 3 * d.PI) - d.pi60, g = Math.tan(v) * m, x = b = Math.sqrt(m * m + g * g)
            }
            h = Math.sin(f) * x / this.tsl + .5;
            var k = 1 - 2 * Math.abs(h - .5);
            n = (Math.cos(f) * x + this.tr / 2) / (1.5 * this.tr) / k, n = d.clamp(n, 0, 1), this.setHSL([this.hsl[0], n, h])
          }
      }, s.setHeight = function() {
        this.h = this.isOpen ? this.wfixe + this.baseH + 5 : this.baseH, this.s[0].height = this.h + "px", this.zone.h = this.h
      }, s.parentHeight = function(t) {
        null !== this.group ? this.group.calc(t) : this.isUI && this.main.calc(t)
      }, s.open = function() {
        t.prototype.open.call(this), this.setHeight(), this.up && (this.zone.y -= this.wfixe + 5);
        var i = this.h - this.baseH;
        this.s[3].visibility = "visible", this.parentHeight(i)
      }, s.close = function() {
        t.prototype.close.call(this), this.up && (this.zone.y += this.wfixe + 5);
        var i = this.h - this.baseH;
        this.setHeight(), this.s[3].visibility = "hidden", this.parentHeight(-i)
      }, s.update = function(t) {
        var i = e.rgbToHex(e.hslToRgb([this.hsl[0], 1, .5]));
        this.moveMarkers(), this.value = this.bcolor, this.setSvg(this.c[3], "fill", i, 2, 0), this.s[2].background = this.bcolor, this.c[2].textContent = e.htmlToHex(this.bcolor), this.invert = e.findDeepInver(this.rgb), this.s[2].color = this.invert ? "#fff" : "#000", t && ("array" === this.ctype && this.send(this.rgb), "rgb" === this.ctype && this.send(e.htmlRgb(this.rgb)), "hex" === this.ctype && this.send(e.htmlToHex(this.value)), "html" === this.ctype && this.send())
      }, s.setColor = function(t) {
        var i = e.unpack(t);
        return this.bcolor != t && i && (this.bcolor = t, this.rgb = i, this.hsl = e.rgbToHsl(this.rgb), this.hue = this.hsl[0], this.update()), this
      }, s.setHSL = function(t) {
        return this.hsl = t, this.rgb = e.hslToRgb(t), this.bcolor = e.rgbToHex(this.rgb), this.update(!0), this
      }, s.moveMarkers = function() {
        var t = this.pp,
          i = e;
        this.invert;
        var s = this.hsl[0] * i.TwoPI,
          o = 2 / 3 * i.PI,
          n = this.tr,
          h = this.hsl[0],
          r = this.hsl[1],
          a = this.hsl[2],
          l = (s - i.pi90) * i.todeg;
        h = -s + i.pi90;
        var c = Math.cos(h) * n,
          u = -Math.sin(h) * n,
          d = Math.cos(h - o) * n,
          p = -Math.sin(h - o) * n,
          f = Math.cos(h + o) * n,
          v = -Math.sin(h + o) * n,
          m = (p + v) / 2,
          g = d + (f - d) * a + (c - (d + f) / 2) * (s = (1 - 2 * Math.abs(a - .5)) * r),
          x = p + (v - p) * a + (u - m) * s;
        t.set(g, x).addScalar(128), this.setSvg(this.c[3], "transform", "rotate(" + l + " )", 2), this.setSvg(this.c[3], "cx", t.x, 3), this.setSvg(this.c[3], "cy", t.y, 3), this.setSvg(this.c[3], "stroke", this.invert ? "#fff" : "#000", 2, 3), this.setSvg(this.c[3], "stroke", this.invert ? "#fff" : "#000", 3), this.setSvg(this.c[3], "fill", this.bcolor, 3)
      }, s.rSize = function() {
        t.prototype.rSize.call(this);
        var i = this.s;
        i[2].width = this.sb + "px", i[2].left = this.sa + "px", this.rSizeColor(this.cw), this.decal.x = Math.floor(.5 * (this.w - this.wfixe)), i[3].left = this.decal.x + "px"
      }, s.rSizeColor = function(t) {
        if (t !== this.wfixe) {
          this.wfixe = t;
          var i = this.s;
          this.decal.y = "up" === this.side ? 2 : this.baseH + 2, this.mid = Math.floor(.5 * this.wfixe), this.setSvg(this.c[3], "viewBox", "0 0 " + this.wfixe + " " + this.wfixe), i[3].width = this.wfixe + "px", i[3].height = this.wfixe + "px", i[3].top = this.decal.y + "px", this.ratio = 256 / this.wfixe, this.square = 1 / (this.wfixe / 256 * 60), this.setHeight()
        }
      }, i
    }(l),
    f = function(t) {
      function i(i) {
        var s;
        void 0 === i && (i = {}), (s = t.call(this, i) || this).round = Math.round, s.baseH = s.h, s.hplus = i.hplus || 50, s.res = i.res || 40, s.l = 1, s.precision = i.precision || 0, s.custom = i.custom || !1, s.names = i.names || ["FPS", "MS"];
        var e = i.cc || ["220,220,220", "255,255,0"];
        s.adding = i.adding || !1, s.range = i.range || [165, 100, 100], s.alpha = i.alpha || .25, s.values = [], s.points = [], s.textDisplay = [], s.custom || (s.now = self.performance && self.performance.now ? self.performance.now.bind(performance) : Date.now, s.startTime = 0, s.prevTime = 0, s.frames = 0, s.ms = 0, s.fps = 0, s.mem = 0, s.mm = 0, s.isMem = !(!self.performance || !self.performance.memory), s.isMem && (s.names.push("MEM"), e.push("0,255,255")), s.txt = i.name || "Fps");
        var o = Math.floor(.5 * s.h) - 6;
        s.c[1].textContent = s.txt, s.c[0].style.cursor = "pointer", s.c[0].style.pointerEvents = "auto";
        var n = "display:none; left:10px; top:" + s.h + "px; height:" + (s.hplus - 8) + "px; box-sizing:border-box; background: rgba(0, 0, 0, 0.2); border:" + ("none" !== s.colors.groupBorder ? s.colors.groupBorder + ";" : "1px solid rgba(255, 255, 255, 0.2);");
        0 !== s.radius && (n += "border-radius:" + s.radius + "px;"), s.c[2] = s.dom("path", s.css.basic + n, {}), s.c[2].setAttribute("viewBox", "0 0 " + s.res + " 50"), s.c[2].setAttribute("height", "100%"), s.c[2].setAttribute("width", "100%"), s.c[2].setAttribute("preserveAspectRatio", "none"), s.c[3] = s.dom("path", s.css.basic + "position:absolute; width:10px; height:10px; left:4px; top:" + o + "px;", {
          d: s.svgs.arrow,
          fill: s.fontColor,
          stroke: "none"
        }), s.c[4] = s.dom("div", s.css.txt + "position:absolute; left:10px; top:" + (s.h + 2) + "px; display:none; width:100%; text-align:center;"), i.bottomLine && (s.c[4] = s.dom("div", s.css.basic + "width:100%; bottom:0px; height:1px; background: rgba(255, 255, 255, 0.2);")), s.isShow = !1;
        var h = s.s;
        h[1].marginLeft = "10px", h[1].lineHeight = s.h - 4, h[1].color = s.fontColor, h[1].fontWeight = "bold", 0 !== s.radius && (h[0].borderRadius = s.radius + "px"), h[0].border = s.colors.groupBorder;
        var r = 0;
        for (r = 0; r < s.names.length; r++) {
          for (var a = [], l = s.res + 1; l--;) a.push(50);
          s.range[r] = 1 / s.range[r] * 49, s.points.push(a), s.values.push(0), s.textDisplay.push("<span style='color:rgb(" + e[r] + ")'> " + s.names[r] + " ")
        }
        for (r = s.names.length; r--;) s.dom("path", null, {
          fill: "rgba(" + e[r] + "," + s.alpha + ")",
          "stroke-width": 1,
          stroke: "rgba(" + e[r] + ",1)",
          "vector-effect": "non-scaling-stroke"
        }, s.c[2]);
        return s.init(), s
      }
      h(i, t);
      var s = i.prototype;
      return s.mousedown = function(t) {
        this.isShow ? this.close() : this.open()
      }, s.tick = function(t) {
        this.values = t, this.isShow && (this.drawGraph(), this.upText())
      }, s.makePath = function(t) {
        var i = "";
        i += "M -1 50";
        for (var s = 0; s < this.res + 1; s++) i += " L " + s + " " + t[s];
        return i += " L " + (this.res + 1) + " 50"
      }, s.upText = function(t) {
        for (var i = t || this.values, s = "", e = 0, o = this.names.length; e < o; e++) s += this.textDisplay[e] + i[e].toFixed(this.precision) + "</span>";
        this.c[4].innerHTML = s
      }, s.drawGraph = function() {
        for (var t, i = this.c[2], s = this.names.length, e = 0, o = 0; s--;) t = this.adding ? (this.values[o] + e) * this.range[o] : this.values[o] * this.range[o], this.points[o].shift(), this.points[o].push(50 - t), this.setSvg(i, "d", this.makePath(this.points[o]), s + 1), e += this.values[o], o++
      }, s.open = function() {
        t.prototype.open.call(this), this.h = this.hplus + this.baseH, this.setSvg(this.c[3], "d", this.svgs.arrowDown), null !== this.group ? this.group.calc(this.hplus) : this.isUI && this.main.calc(this.hplus), this.s[0].height = this.h + "px", this.s[2].display = "block", this.s[4].display = "block", this.isShow = !0, this.custom || n.addListen(this)
      }, s.close = function() {
        t.prototype.close.call(this), this.h = this.baseH, this.setSvg(this.c[3], "d", this.svgs.arrow), null !== this.group ? this.group.calc(-this.hplus) : this.isUI && this.main.calc(-this.hplus), this.s[0].height = this.h + "px", this.s[2].display = "none", this.s[4].display = "none", this.isShow = !1, this.custom || n.removeListen(this), this.c[4].innerHTML = ""
      }, s.begin = function() {
        this.startTime = this.now()
      }, s.end = function() {
        var t = this.now();
        if (this.ms = t - this.startTime, this.frames++, t > this.prevTime + 1e3 && (this.fps = this.round(1e3 * this.frames / (t - this.prevTime)), this.prevTime = t, this.frames = 0, this.isMem)) {
          var i = performance.memory.usedJSHeapSize,
            s = performance.memory.jsHeapSizeLimit;
          this.mem = this.round(954e-9 * i), this.mm = i / s
        }
        return this.values = [this.fps, this.ms, this.mm], this.drawGraph(), this.upText([this.fps, this.ms, this.mem]), t
      }, s.listening = function() {
        this.custom || (this.startTime = this.end())
      }, s.rSize = function() {
        var t = this.s,
          i = this.w;
        t[0].width = i + "px", t[1].width = i + "px", t[2].left = "10px", t[2].width = i - 20 + "px", t[4].width = i - 20 + "px"
      }, i
    }(l),
    v = function(t) {
      function i(i) {
        var s;
        void 0 === i && (i = {}), (s = t.call(this, i) || this).value = void 0 !== i.value ? i.value : [0, 0, 0], s.lng = s.value.length, s.precision = void 0 !== i.precision ? i.precision : 2, s.multiplicator = i.multiplicator || 1, s.neg = i.neg || !1, s.line = void 0 === i.line || i.line, s.autoWidth = void 0 === i.autoWidth || i.autoWidth, s.isNumber = !1, s.isDown = !1, s.h = i.h || 138, s.rh = s.h - 10, s.top = 0, s.c[0].style.width = s.w + "px", void 0 !== s.c[1] && (s.c[1].style.width = s.w + "px", s.top = 10, s.h += 10), s.gh = s.rh - 28, s.gw = s.w - 28, s.c[2] = s.dom("div", s.css.txt + "text-align:center; top:" + (s.h - 20) + "px; width:" + s.w + "px; color:" + s.fontColor), s.c[2].textContent = s.value;
        var e = s.dom("svg", s.css.basic, {
          viewBox: "0 0 " + s.w + " " + s.rh,
          width: s.w,
          height: s.rh,
          preserveAspectRatio: "none"
        });
        s.setCss(e, {
          width: s.w,
          height: s.rh,
          left: 0,
          top: s.top
        }), s.dom("path", "", {
          d: "",
          stroke: s.colors.text,
          "stroke-width": 2,
          fill: "none",
          "stroke-linecap": "butt"
        }, e), s.dom("rect", "", {
          x: 10,
          y: 10,
          width: s.gw + 8,
          height: s.gh + 8,
          stroke: "rgba(0,0,0,0.3)",
          "stroke-width": 1,
          fill: "none"
        }, e), s.iw = (s.gw - 4 * (s.lng - 1)) / s.lng;
        var o = [];
        s.cMode = [], s.v = [];
        for (var n = 0; n < s.lng; n++) o[n] = [14 + n * s.iw + 4 * n, s.iw], o[n][2] = o[n][0] + o[n][1], s.cMode[n] = 0, s.neg ? s.v[n] = .5 * (1 + s.value[n] / s.multiplicator) : s.v[n] = s.value[n] / s.multiplicator, s.dom("rect", "", {
          x: o[n][0],
          y: 14,
          width: o[n][1],
          height: 1,
          fill: s.fontColor,
          "fill-opacity": .3
        }, e);
        return s.tmp = o, s.c[3] = e, s.init(), void 0 !== s.c[1] && (s.c[1].style.top = "0px", s.c[1].style.height = "20px", s.s[1].lineHeight = "15px"), s.update(!1), s
      }
      h(i, t);
      var s = i.prototype;
      return s.updateSVG = function() {
        this.line && this.setSvg(this.c[3], "d", this.makePath(), 0);
        for (var t = 0; t < this.lng; t++) this.setSvg(this.c[3], "height", this.v[t] * this.gh, t + 2), this.setSvg(this.c[3], "y", this.gh - this.v[t] * this.gh + 14, t + 2), this.neg ? this.value[t] = 1 * ((2 * this.v[t] - 1) * this.multiplicator).toFixed(this.precision) : this.value[t] = 1 * (this.v[t] * this.multiplicator).toFixed(this.precision);
        this.c[2].textContent = this.value
      }, s.testZone = function(t) {
        var i = this.local;
        if (-1 === i.x && -1 === i.y) return "";
        var s = this.lng,
          e = this.tmp;
        if (i.y > this.top && i.y < this.h - 20)
          for (; s--;)
            if (i.x > e[s][0] && i.x < e[s][2]) return s;
        return ""
      }, s.mode = function(t, i) {
        if (t === this.cMode[i]) return !1;
        var s;
        switch (t) {
          case 0:
            s = .3;
            break;
          case 1:
            s = .6;
            break;
          case 2:
            s = 1
        }
        return this.reset(), this.setSvg(this.c[3], "fill-opacity", s, i + 2), this.cMode[i] = t, !0
      }, s.reset = function() {
        for (var t = !1, i = this.lng; i--;) 0 !== this.cMode[i] && (this.cMode[i] = 0, this.setSvg(this.c[3], "fill-opacity", .3, i + 2), t = !0);
        return t
      }, s.mouseup = function(t) {
        if (this.isDown = !1, -1 !== this.current) return this.reset()
      }, s.mousedown = function(t) {
        return this.isDown = !0, this.mousemove(t)
      }, s.mousemove = function(t) {
        var i = !1,
          s = this.testZone(t);
        return "" === s ? i = this.reset() : (i = this.mode(this.isDown ? 2 : 1, s), this.isDown && (this.v[s] = this.clamp(1 - (t.clientY - this.zone.y - this.top - 10) / this.gh, 0, 1), this.update(!0))), i
      }, s.update = function(t) {
        this.updateSVG(), t && this.send()
      }, s.makePath = function() {
        for (var t, i, s, e, o, n, h = "", r = 0; r < this.lng; r++) t = this.gh - this.v[r] * this.gh + 14, e = (i = 14 + r * this.iw + 4 * r) + .5 * this.iw, s = i + this.iw, h += 0 === r ? "M " + i + " " + t + " T " + e + " " + t : " C " + o + " " + n + "," + i + " " + t + "," + e + " " + t, r === this.lng - 1 && (h += " T " + s + " " + t), o = s, n = t;
        return h
      }, s.rSize = function() {
        t.prototype.rSize.call(this);
        var i = this.s;
        void 0 !== this.c[1] && (i[1].width = this.w + "px"), i[2].width = this.w + "px", i[3].width = this.w + "px";
        for (var s = (this.w - 28 - 4 * (this.lng - 1)) / this.lng, e = [], o = 0; o < this.lng; o++) e[o] = [14 + o * s + 4 * o, s], e[o][2] = e[o][0] + e[o][1];
        this.tmp = e
      }, i
    }(l),
    m = function(t) {
      function i(i) {
        var s;
        void 0 === i && (i = {}), (s = t.call(this, i) || this).ADD = i.add, s.uis = [], s.isEmpty = !0, s.autoHeight = !0, s.current = -1, s.target = null, s.decal = 0, s.baseH = s.h;
        var e = Math.floor(.5 * s.h) - 6;
        s.isLine = void 0 !== i.line && i.line, s.c[2] = s.dom("div", s.css.basic + "width:100%; left:0; height:auto; overflow:hidden; top:" + s.h + "px"), s.c[3] = s.dom("path", s.css.basic + "position:absolute; width:10px; height:10px; left:0; top:" + e + "px;", {
          d: s.svgs.group,
          fill: s.fontColor,
          stroke: "none"
        }), s.c[4] = s.dom("path", s.css.basic + "position:absolute; width:10px; height:10px; left:4px; top:" + e + "px;", {
          d: s.svgs.arrow,
          fill: s.fontColor,
          stroke: "none"
        }), s.isLine && (s.c[5] = s.dom("div", s.css.basic + "background:rgba(255, 255, 255, 0.2); width:100%; left:0; height:1px; bottom:0px"));
        var o = s.s;
        return o[0].height = s.h + "px", o[1].height = s.h + "px", s.c[1].name = "group", o[1].marginLeft = "10px", o[1].lineHeight = s.h - 4, o[1].color = s.fontColor, o[1].fontWeight = "bold", 0 !== s.radius && (o[0].borderRadius = s.radius + "px"), o[0].border = s.colors.groupBorder, s.init(), s.setBG(s.bg), void 0 !== i.open && s.open(), s
      }
      h(i, t);
      var s = i.prototype;
      return s.testZone = function(t) {
        var i = this.local;
        if (-1 === i.x && -1 === i.y) return "";
        var s = "";
        return i.y < this.baseH ? s = "title" : this.isOpen && (s = "content"), s
      }, s.clearTarget = function() {
        return -1 !== this.current && (this.target.uiout(), this.target.reset(), this.current = -1, this.target = null, this.cursor(), !0)
      }, s.reset = function() {
        this.clearTarget()
      }, s.handleEvent = function(t) {
        var i = t.type,
          s = !1,
          e = !1,
          o = this.testZone(t);
        if (o) {
          switch (o) {
            case "content":
              this.cursor(), n.isMobile && "mousedown" === i && this.getNext(t, s), this.target && (e = this.target.handleEvent(t)), n.lock || this.getNext(t, s);
              break;
            case "title":
              this.cursor("pointer"), "mousedown" === i && (this.isOpen ? this.close() : this.open())
          }
          return this.isDown && (s = !0), e && (s = !0), s
        }
      }, s.getNext = function(t, i) {
        var s = n.findTarget(this.uis, t);
        s !== this.current && (this.clearTarget(), this.current = s), -1 !== s && (this.target = this.uis[this.current], this.target.uiover())
      }, s.calcH = function() {
        var t, i, s = this.uis.length,
          e = 0,
          o = 0,
          n = 0;
        for (t = 0; t < s; t++)(i = this.uis[t]).autoWidth ? e += i.h + 1 : (0 === o ? e += i.h + 1 : n < i.h && (e += i.h - n), n = i.h, (o += i.w) + i.w > this.w && (o = 0));
        return e
      }, s.calcUis = function() {
        this.isOpen && n.calcUis(this.uis, this.zone, this.zone.y + this.baseH)
      }, s.setBG = function(t) {
        this.s[0].background = t;
        for (var i = this.uis.length; i--;) this.uis[i].setBG(t)
      }, s.add = function() {
        var t = arguments;
        "object" == typeof t[1] ? (t[1].isUI = this.isUI, t[1].target = this.c[2], t[1].main = this.main) : "string" == typeof arguments[1] && (void 0 === t[2] ? [].push.call(t, {
          isUI: !0,
          target: this.c[2],
          main: this.main
        }) : (t[2].isUI = !0, t[2].target = this.c[2], t[2].main = this.main));
        var i = this.ADD.apply(this, t);
        return this.uis.push(i), i.group = this, this.isEmpty = !1, i
      }, s.remove = function(t) {
        t.clear && t.clear()
      }, s.empty = function() {
        this.close();
        for (var t, i = this.uis.length; i--;) t = this.uis.pop(), this.c[2].removeChild(t.c[0]), t.clear(!0);
        this.isEmpty = !0, this.h = this.baseH
      }, s.clearOne = function(t) {
        var i = this.uis.indexOf(t); - 1 !== i && (this.calc(-(this.uis[i].h + 1)), this.c[2].removeChild(this.uis[i].c[0]), this.uis.splice(i, 1), 0 === this.uis.length && (this.isEmpty = !0, this.close()))
      }, s.parentHeight = function(t) {
        null !== this.group ? this.group.calc(t) : this.isUI && this.main.calc(t)
      }, s.open = function() {
        t.prototype.open.call(this), this.setSvg(this.c[4], "d", this.svgs.arrowDown), this.rSizeContent();
        var i = this.h - this.baseH;
        this.parentHeight(i)
      }, s.close = function() {
        t.prototype.close.call(this);
        var i = this.h - this.baseH;
        this.setSvg(this.c[4], "d", this.svgs.arrow), this.h = this.baseH, this.s[0].height = this.h + "px", this.parentHeight(-i)
      }, s.clear = function() {
        this.empty(), this.isUI && this.main.calc(-(this.h + 1)), l.prototype.clear.call(this)
      }, s.clearGroup = function() {
        this.empty()
      }, s.calc = function(t) {
        this.isOpen && (void 0 !== t ? (this.h += t, this.isUI && this.main.calc(t)) : this.h = this.calcH() + this.baseH, this.s[0].height = this.h + "px")
      }, s.rSizeContent = function() {
        for (var t = this.uis.length; t--;) this.uis[t].setSize(this.w), this.uis[t].rSize();
        this.calc()
      }, s.rSize = function() {
        t.prototype.rSize.call(this);
        var i = this.s;
        i[3].left = this.sa + this.sb - 17 + "px", i[1].width = this.w + "px", i[2].width = this.w + "px", this.isOpen && this.rSizeContent()
      }, i
    }(l);
  m.prototype.isGroup = !0;
  var g = function(t) {
      function i(i) {
        var s;
        return void 0 === i && (i = {}), (s = t.call(this, i) || this).autoWidth = !1, s.value = [0, 0], s.joyType = "analogique", s.model = void 0 !== i.mode ? i.mode : 0, s.precision = i.precision || 2, s.multiplicator = i.multiplicator || 1, s.pos = new a, s.tmp = new a, s.interval = null, s.radius = .5 * s.w, s.distance = .25 * s.radius, s.h = i.h || s.w + 10, s.top = 0, s.c[0].style.width = s.w + "px", void 0 !== s.c[1] && (s.c[1].style.width = s.w + "px", s.c[1].style.textAlign = "center", s.top = 10, s.h += 10), s.c[2] = s.dom("div", s.css.txt + "text-align:center; top:" + (s.h - 20) + "px; width:" + s.w + "px; color:" + s.fontColor), s.c[2].textContent = s.value, s.c[3] = s.getJoystick(s.model), s.setSvg(s.c[3], "viewBox", "0 0 " + s.w + " " + s.w), s.setCss(s.c[3], {
          width: s.w,
          height: s.w,
          left: 0,
          top: s.top
        }), s.ratio = 128 / s.w, s.init(), s.update(!1), s
      }
      h(i, t);
      var s = i.prototype;
      return s.mode = function(t) {
        switch (t) {
          case 0:
            0 === this.model ? (this.setSvg(this.c[3], "fill", "url(#gradIn)", 4), this.setSvg(this.c[3], "stroke", "#000", 4)) : (this.setSvg(this.c[3], "stroke", "rgba(100,100,100,0.25)", 2), this.setSvg(this.c[3], "stroke", "#666", 4), this.setSvg(this.c[3], "fill", "none", 4));
            break;
          case 1:
            0 === this.model ? (this.setSvg(this.c[3], "fill", "url(#gradIn2)", 4), this.setSvg(this.c[3], "stroke", "rgba(0,0,0,0)", 4)) : (this.setSvg(this.c[3], "stroke", "rgba(48,138,255,0.25)", 2), this.setSvg(this.c[3], "stroke", this.colors.select, 4), this.setSvg(this.c[3], "fill", "rgba(48,138,255,0.25)", 4))
        }
      }, s.addInterval = function() {
        null !== this.interval && this.stopInterval(), this.pos.isZero() || (this.interval = setInterval(function() {
          this.update()
        }.bind(this), 10))
      }, s.stopInterval = function() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }, s.reset = function() {
        this.addInterval(), this.mode(0)
      }, s.mouseup = function(t) {
        this.addInterval(), this.isDown = !1
      }, s.mousedown = function(t) {
        this.isDown = !0, this.mousemove(t), this.mode(2)
      }, s.mousemove = function(t) {
        if (this.mode(1), this.isDown) {
          if (this.tmp.x = this.radius - (t.clientX - this.zone.x), this.tmp.y = this.radius - (t.clientY - this.zone.y - this.top), this.tmp.length() > this.distance) {
            var i = Math.atan2(this.tmp.x, this.tmp.y);
            this.tmp.x = Math.sin(i) * this.distance, this.tmp.y = Math.cos(i) * this.distance
          }
          this.pos.copy(this.tmp).divideScalar(this.distance).negate(), this.update()
        }
      }, s.setValue = function(t) {
        void 0 === t && (t = [0, 0]), this.pos.set(t[0] || 0, t[1] || 0), this.updateSVG()
      }, s.update = function(t) {
        void 0 === t && (t = !0), null !== this.interval && (this.isDown || (this.pos.lerp(null, .3), this.pos.x = Math.abs(this.pos.x) < .01 ? 0 : this.pos.x, this.pos.y = Math.abs(this.pos.y) < .01 ? 0 : this.pos.y, this.isUI && this.main.isCanvas && this.main.draw())), this.updateSVG(), t && this.send(), this.pos.isZero() && this.stopInterval()
      }, s.updateSVG = function() {
        var t = this.radius - -this.pos.x * this.distance,
          i = this.radius - -this.pos.y * this.distance;
        if (0 === this.model) {
          var s = t + 5 * this.pos.x + 5,
            e = i + 5 * this.pos.y + 10;
          this.setSvg(this.c[3], "cx", s * this.ratio, 3), this.setSvg(this.c[3], "cy", e * this.ratio, 3)
        } else this.setSvg(this.c[3], "cx", t * this.ratio, 3), this.setSvg(this.c[3], "cy", i * this.ratio, 3);
        this.setSvg(this.c[3], "cx", t * this.ratio, 4), this.setSvg(this.c[3], "cy", i * this.ratio, 4), this.value[0] = 1 * (this.pos.x * this.multiplicator).toFixed(this.precision), this.value[1] = 1 * (this.pos.y * this.multiplicator).toFixed(this.precision), this.c[2].textContent = this.value
      }, s.clear = function() {
        this.stopInterval(), t.prototype.clear.call(this)
      }, i
    }(l),
    x = function(t) {
      function i(i) {
        var s;
        return void 0 === i && (i = {}), (s = t.call(this, i) || this).isCyclic = i.cyclic || !1, s.model = i.stype || 0, void 0 !== i.mode && (s.model = i.mode), s.autoWidth = !1, s.buttonColor = s.colors.button, s.setTypeNumber(i), s.mPI = .8 * Math.PI, s.toDeg = 180 / Math.PI, s.cirRange = 2 * s.mPI, s.offset = new a, s.radius = .5 * s.w, s.h = i.h || s.w + 10, s.top = 0, s.c[0].style.width = s.w + "px", void 0 !== s.c[1] && (s.c[1].style.width = s.w + "px", s.c[1].style.textAlign = "center", s.top = 10, s.h += 10), s.percent = 0, s.cmode = 0, s.c[2] = s.dom("div", s.css.txt + "text-align:center; top:" + (s.h - 20) + "px; width:" + s.w + "px; color:" + s.fontColor), s.c[3] = s.getKnob(), s.setSvg(s.c[3], "stroke", s.fontColor, 1), s.setSvg(s.c[3], "stroke", s.fontColor, 3), s.setSvg(s.c[3], "d", s.makeGrad(), 3), s.setSvg(s.c[3], "viewBox", "0 0 " + s.ww + " " + s.ww), s.setCss(s.c[3], {
          width: s.w,
          height: s.w,
          left: 0,
          top: s.top
        }), s.model > 0 && e.dom("path", "", {
          d: "",
          stroke: s.fontColor,
          "stroke-width": 2,
          fill: "none",
          "stroke-linecap": "round"
        }, s.c[3]), s.r = 0, s.init(), s.update(), s
      }
      h(i, t);
      var s = i.prototype;
      return s.mode = function(t) {
        if (this.cmode === t) return !1;
        switch (t) {
          case 0:
            this.s[2].color = this.fontColor, this.setSvg(this.c[3], "fill", this.colors.button, 0), this.setSvg(this.c[3], "stroke", this.fontColor, 1);
            break;
          case 1:
            this.s[2].color = this.colorPlus, this.setSvg(this.c[3], "fill", this.colors.select, 0), this.setSvg(this.c[3], "stroke", this.colorPlus, 1)
        }
        return this.cmode = t, !0
      }, s.testZone = function(t) {
        var i = this.local;
        return -1 === i.x && -1 === i.y ? "" : i.y <= this.c[1].offsetHeight ? "title" : i.y > this.h - this.c[2].offsetHeight ? "text" : "knob"
      }, s.mouseup = function(t) {
        return this.isDown = !1, this.sendEnd(), this.mode(0)
      }, s.mousedown = function(t) {
        return this.isDown = !0, this.old = this.value, this.oldr = null, this.mousemove(t), this.mode(1)
      }, s.mousemove = function(t) {
        if (this.isDown) {
          var i = this.offset;
          i.x = this.radius - (t.clientX - this.zone.x), i.y = this.radius - (t.clientY - this.zone.y - this.top), this.r = -Math.atan2(i.x, i.y), null !== this.oldr && (this.r = Math.abs(this.r - this.oldr) > Math.PI ? this.oldr : this.r), this.r = this.r > this.mPI ? this.mPI : this.r, this.r = this.r < -this.mPI ? -this.mPI : this.r;
          var s = 1 / this.cirRange,
            e = (this.r + this.mPI) * s,
            o = this.range * e + this.min - this.old;
          (o >= this.step || o <= this.step) && (o = Math.floor(o / this.step), this.value = this.numValue(this.old + o * this.step), this.update(!0), this.old = this.value, this.oldr = this.r)
        }
      }, s.wheel = function(t) {
        if ("knob" === this.testZone(t)) {
          var i = this.value - this.step * t.delta;
          return i > this.max ? i = this.isCyclic ? this.min : this.max : i < this.min && (i = this.isCyclic ? this.max : this.min), this.setValue(i), this.old = i, this.update(!0), !0
        }
        return !1
      }, s.makeGrad = function() {
        var t, i, s, e = "",
          o = 64,
          n = Math.PI + this.mPI,
          h = Math.PI - this.mPI;
        this.step > 5 ? t = (n - h) / (i = this.range / this.step) : (t = (n - h) / o * 2, i = 32);
        for (var r = 0; r <= i; ++r) s = n - t * r, e += "M" + (o + 44 * Math.sin(s)) + " " + (o + 44 * Math.cos(s)) + " L" + (o + 40 * Math.sin(s)) + " " + (o + 40 * Math.cos(s)) + " ";
        return e
      }, s.update = function(t) {
        this.c[2].textContent = this.value, this.percent = (this.value - this.min) / this.range;
        var i = Math.PI + this.mPI,
          s = this.percent * this.cirRange - this.mPI,
          o = Math.sin(s),
          n = Math.cos(s),
          h = 25 * o + 64,
          r = -25 * n + 64,
          a = 20 * o + 64,
          l = -20 * n + 64;
        if (this.setSvg(this.c[3], "d", "M " + h + " " + r + " L " + a + " " + l, 1), this.model > 0) {
          var c = 36 * Math.sin(i) + 64,
            u = 36 * Math.cos(i) + 64,
            d = 36 * o + 64,
            p = -36 * n + 64,
            f = s <= Math.PI - this.mPI ? 0 : 1;
          this.setSvg(this.c[3], "d", "M " + c + "," + u + " A 36,36 1 " + f + " 1 " + d + "," + p, 4);
          var v = e.pack(e.lerpColor(e.unpack(e.ColorLuma(this.fontColor, -.75)), e.unpack(this.fontColor), this.percent));
          this.setSvg(this.c[3], "stroke", v, 4)
        }
        t && this.send()
      }, i
    }(l),
    b = function(t) {
      function i(i) {
        var s;
        void 0 === i && (i = {}), (s = t.call(this, i) || this).path = i.path || "", s.format = i.format || "", s.imageSize = i.imageSize || [20, 20], s.isWithImage = "" !== s.path, s.preLoadComplete = !1, s.tmpImage = {}, s.tmpUrl = [];
        var e = i.align || "center";
        s.sMode = 0, s.tMode = 0, s.listOnly = i.listOnly || !1, "" === s.txt && (s.p = 0), s.buttonColor = i.bColor || s.colors.button;
        var o = Math.floor(.5 * s.h) - 5;
        return s.c[2] = s.dom("div", s.css.basic + "top:0; display:none;"), s.c[3] = s.dom("div", s.css.txt + "text-align:" + e + "; line-height:" + (s.h - 4) + "px; top:1px; background:" + s.buttonColor + "; height:" + (s.h - 2) + "px; border-radius:" + s.radius + "px;"), s.c[4] = s.dom("path", s.css.basic + "position:absolute; width:10px; height:10px; top:" + o + "px;", {
          d: s.svgs.arrow,
          fill: s.fontColor,
          stroke: "none"
        }), s.scroller = s.dom("div", s.css.basic + "right:5px;\twidth:10px; background:#666; display:none;"), s.c[3].style.color = s.fontColor, s.list = i.list || [], s.items = [], s.prevName = "", s.baseH = s.h, s.itemHeight = i.itemHeight || s.h - 3, s.full = i.full || !1, s.py = 0, s.ww = s.sb, s.scroll = !1, s.isDown = !1, s.current = null, s.side = i.side || "down", s.up = "down" === s.side ? 0 : 1, s.up ? (s.c[2].style.top = "auto", s.c[3].style.top = "auto", s.c[4].style.top = "auto", s.c[2].style.bottom = s.h - 2 + "px", s.c[3].style.bottom = "1px", s.c[4].style.bottom = o + "px") : s.c[2].style.top = s.baseH + "px", s.listIn = s.dom("div", s.css.basic + "left:0; top:0; width:100%; background:rgba(0,0,0,0.2);"), s.listIn.name = "list", s.topList = 0, s.c[2].appendChild(s.listIn), s.c[2].appendChild(s.scroller), void 0 !== i.value ? isNaN(i.value) ? s.value = i.value : s.value = s.list[i.value] : s.value = s.list[0], s.isOpenOnStart = i.open || !1, s.listOnly && (s.baseH = 5, s.c[3].style.display = "none", s.c[4].style.display = "none", s.c[2].style.top = s.baseH + "px", s.isOpenOnStart = !0), s.isWithImage && s.preloadImage(), s.setList(s.list), s.init(), s.isOpenOnStart && s.open(!0), s
      }
      h(i, t);
      var s = i.prototype;
      return s.preloadImage = function() {
        this.preLoadComplete = !1, this.tmpImage = {};
        for (var t = 0; t < this.list.length; t++) this.tmpUrl.push(this.list[t]);
        this.loadOne()
      }, s.nextImg = function() {
        this.tmpUrl.shift(), 0 === this.tmpUrl.length ? (this.preLoadComplete = !0, this.addImages()) : this.loadOne()
      }, s.loadOne = function() {
        var t = this,
          i = this.tmpUrl[0],
          s = document.createElement("img");
        s.style.cssText = "position:absolute; width:" + t.imageSize[0] + "px; height:" + t.imageSize[1] + "px", s.setAttribute("src", this.path + i + this.format), s.addEventListener("load", (function() {
          t.imageSize[2] = s.width, t.imageSize[3] = s.height, t.tmpImage[i] = s, t.nextImg()
        }))
      }, s.testZone = function(t) {
        var i = this.local;
        if (-1 === i.x && -1 === i.y) return "";
        if (this.up && this.isOpen) {
          if (i.y > this.h - this.baseH) return "title";
          if (this.scroll && i.x > this.sa + this.sb - 20) return "scroll";
          if (i.x > this.sa) return this.testItems(i.y - this.baseH)
        } else {
          if (i.y < this.baseH + 2) return "title";
          if (this.isOpen) {
            if (this.scroll && i.x > this.sa + this.sb - 20) return "scroll";
            if (i.x > this.sa) return this.testItems(i.y - this.baseH)
          }
        }
        return ""
      }, s.testItems = function(t) {
        for (var i, s, e, o = "", n = this.items.length; n--;)
          if (s = (i = this.items[n]).posy + this.topList, e = i.posy + this.itemHeight + 1 + this.topList, t >= s && t <= e) return o = "item" + n, this.unSelected(), this.current = i, this.selected(), o;
        return o
      }, s.unSelected = function() {
        this.current && (this.current.style.background = "rgba(0,0,0,0.2)", this.current.style.color = this.fontColor, this.current = null)
      }, s.selected = function() {
        this.current.style.background = this.colors.select, this.current.style.color = "#FFF"
      }, s.mouseup = function(t) {
        this.isDown = !1
      }, s.mousedown = function(t) {
        var i = this.testZone(t);
        return !!i && ("scroll" === i ? (this.isDown = !0, this.mousemove(t)) : "title" === i ? (this.modeTitle(2), this.listOnly || (this.isOpen ? this.close() : this.open())) : this.current && (this.value = this.list[this.current.id], this.send(), this.listOnly || (this.close(), this.setTopItem())), !0)
      }, s.mousemove = function(t) {
        var i = !1,
          s = this.testZone(t);
        if (!s) return i;
        if ("title" === s) this.unSelected(), this.modeTitle(1), this.cursor("pointer");
        else if ("scroll" === s) {
          if (this.cursor("s-resize"), this.modeScroll(1), this.isDown) {
            this.modeScroll(2);
            var e = this.zone.y + this.baseH - 2;
            this.update(t.clientY - e - .5 * this.sh)
          }
        } else this.modeTitle(0), this.modeScroll(0), this.cursor("pointer");
        return s !== this.prevName && (i = !0), this.prevName = s, i
      }, s.wheel = function(t) {
        return "title" !== this.testZone(t) && (this.py += 10 * t.delta, this.update(this.py), !0)
      }, s.reset = function() {
        this.prevName = "", this.unSelected(), this.modeTitle(0), this.modeScroll(0)
      }, s.modeScroll = function(t) {
        if (t !== this.sMode) {
          switch (t) {
            case 0:
              this.scroller.style.background = this.buttonColor;
              break;
            case 1:
              this.scroller.style.background = this.colors.select;
              break;
            case 2:
              this.scroller.style.background = this.colors.down
          }
          this.sMode = t
        }
      }, s.modeTitle = function(t) {
        if (t !== this.tMode) {
          var i = this.s;
          switch (t) {
            case 0:
              i[3].color = this.fontColor, i[3].background = this.buttonColor;
              break;
            case 1:
              i[3].color = "#FFF", i[3].background = this.colors.select;
              break;
            case 2:
              i[3].color = this.fontColor, i[3].background = this.colors.down
          }
          this.tMode = t
        }
      }, s.clearList = function() {
        for (; this.listIn.children.length;) this.listIn.removeChild(this.listIn.lastChild);
        this.items = []
      }, s.setList = function(t) {
        var i, s;
        this.clearList(), this.list = t, this.length = this.list.length, this.maxItem = this.full ? this.length : 5, this.maxItem = this.length < this.maxItem ? this.length : this.maxItem, this.maxHeight = this.maxItem * (this.itemHeight + 1) + 2, this.max = this.length * (this.itemHeight + 1) + 2, this.ratio = this.maxHeight / this.max, this.sh = this.maxHeight * this.ratio, this.range = this.maxHeight - this.sh, this.c[2].style.height = this.maxHeight + "px", this.scroller.style.height = this.sh + "px", this.max > this.maxHeight && (this.ww = this.sb - 20, this.scroll = !0);
        for (var e = 0; e < this.length; e++) s = this.list[e], (i = this.dom("div", this.css.item + "width:" + this.ww + "px; height:" + this.itemHeight + "px; line-height:" + (this.itemHeight - 5) + "px; color:" + this.fontColor + ";")).name = "item" + e, i.id = e, i.posy = (this.itemHeight + 1) * e, this.listIn.appendChild(i), this.items.push(i), this.isWithImage || (i.textContent = s);
        this.setTopItem()
      }, s.addImages = function() {
        for (var t = this.list.length, i = 0; i < t; i++) this.items[i].appendChild(this.tmpImage[this.list[i]]);
        this.setTopItem()
      }, s.setTopItem = function() {
        if (this.isWithImage) {
          if (!this.preLoadComplete) return;
          this.c[3].children.length || (this.canvas = document.createElement("canvas"), this.canvas.width = this.imageSize[0], this.canvas.height = this.imageSize[1], this.canvas.style.cssText = "position:absolute; top:0px; left:0px;", this.ctx = this.canvas.getContext("2d"), this.c[3].appendChild(this.canvas)), this.tmpImage[this.value], this.ctx.drawImage(this.tmpImage[this.value], 0, 0, this.imageSize[2], this.imageSize[3], 0, 0, this.imageSize[0], this.imageSize[1])
        } else this.c[3].textContent = this.value
      }, s.update = function(t) {
        this.scroll && (t = (t = t < 0 ? 0 : t) > this.range ? this.range : t, this.topList = -Math.floor(t / this.ratio), this.listIn.style.top = this.topList + "px", this.scroller.style.top = Math.floor(t) + "px", this.py = t)
      }, s.parentHeight = function(t) {
        null !== this.group ? this.group.calc(t) : this.isUI && this.main.calc(t)
      }, s.open = function(i) {
        t.prototype.open.call(this), this.update(0), this.h = this.maxHeight + this.baseH + 5, this.scroll ? this.scroller.style.display = "block" : (this.topList = 0, this.h = this.baseH + 5 + this.max, this.scroller.style.display = "none"), this.s[0].height = this.h + "px", this.s[2].display = "block", this.up ? (this.zone.y -= this.h - (this.baseH - 10), this.setSvg(this.c[4], "d", this.svgs.arrowUp)) : this.setSvg(this.c[4], "d", this.svgs.arrowDown), this.rSizeContent();
        var s = this.h - this.baseH;
        this.zone.h = this.h, i || this.parentHeight(s)
      }, s.close = function() {
        t.prototype.close.call(this), this.up && (this.zone.y += this.h - (this.baseH - 10));
        var i = this.h - this.baseH;
        this.h = this.baseH, this.s[0].height = this.h + "px", this.s[2].display = "none", this.setSvg(this.c[4], "d", this.svgs.arrow), this.zone.h = this.h, this.parentHeight(-i)
      }, s.text = function(t) {
        this.c[3].textContent = t
      }, s.rSizeContent = function() {
        for (var t = this.length; t--;) this.listIn.children[t].style.width = this.ww + "px"
      }, s.rSize = function() {
        l.prototype.rSize.call(this);
        var t = this.s,
          i = this.sb,
          s = this.sa;
        void 0 !== t[2] && (t[2].width = i + "px", t[2].left = s + "px", t[3].width = i + "px", t[3].left = s + "px", t[4].left = s + i - 17 + "px", this.ww = i, this.max > this.maxHeight && (this.ww = i - 20), this.isOpen && this.rSizeContent())
      }, i
    }(l),
    w = function(t) {
      function i(i) {
        var s;
        void 0 === i && (i = {}), (s = t.call(this, i) || this).setTypeNumber(i), s.allway = i.allway || !1, s.isDown = !1, s.value = [0], s.multy = 1, s.invmulty = 1, s.isSingle = !0, s.isAngle = !1, s.isVector = !1, i.isAngle && (s.isAngle = !0, s.multy = e.torad, s.invmulty = e.todeg), s.isDrag = i.drag || !1, void 0 !== i.value && (isNaN(i.value) ? i.value instanceof Array ? (s.value = i.value, s.isSingle = !1) : i.value instanceof Object && (s.value = [], void 0 !== i.value.x && (s.value[0] = i.value.x), void 0 !== i.value.y && (s.value[1] = i.value.y), void 0 !== i.value.z && (s.value[2] = i.value.z), void 0 !== i.value.w && (s.value[3] = i.value.w), s.isVector = !0, s.isSingle = !1) : s.value = [i.value]), s.lng = s.value.length, s.tmp = [], s.current = -1, s.prev = {
          x: 0,
          y: 0,
          d: 0,
          v: 0
        }, s.c[2] = s.dom("div", s.css.basic + " background:" + s.colors.select + "; top:4px; width:0px; height:" + (s.h - 8) + "px;"), s.cMode = [];
        for (var o = s.lng; o--;) s.isAngle && (s.value[o] = (180 * s.value[o] / Math.PI).toFixed(s.precision)), s.c[3 + o] = s.dom("div", s.css.txtselect + " height:" + (s.h - 4) + "px; background:" + s.colors.inputBg + "; borderColor:" + s.colors.inputBorder + "; border-radius:" + s.radius + "px;"), i.center && (s.c[2 + o].style.textAlign = "center"), s.c[3 + o].textContent = s.value[o], s.c[3 + o].style.color = s.fontColor, s.c[3 + o].isNum = !0, s.cMode[o] = 0;
        return s.cursorId = 3 + s.lng, s.c[s.cursorId] = s.dom("div", s.css.basic + "top:4px; height:" + (s.h - 8) + "px; width:0px; background:" + s.fontColor + ";"), s.init(), s
      }
      h(i, t);
      var s = i.prototype;
      return s.testZone = function(t) {
        var i = this.local;
        if (-1 === i.x && -1 === i.y) return "";
        for (var s = this.lng, e = this.tmp; s--;)
          if (i.x > e[s][0] && i.x < e[s][2]) return s;
        return ""
      }, s.mousedown = function(t) {
        var i = this.testZone(t);
        return !this.isDown && (this.isDown = !0, "" !== i && (this.current = i, this.prev = {
          x: t.clientX,
          y: t.clientY,
          d: 0,
          v: this.isSingle ? parseFloat(this.value) : parseFloat(this.value[this.current])
        }, this.setInput(this.c[3 + this.current])), this.mousemove(t))
      }, s.mouseup = function(t) {
        return !!this.isDown && (this.isDown = !1, this.prev = {
          x: 0,
          y: 0,
          d: 0,
          v: 0
        }, this.mousemove(t))
      }, s.mousemove = function(t) {
        var i = !1,
          s = 0;
        if ("" === this.testZone(t) ? this.cursor() : this.isDrag ? this.cursor(-1 !== this.current ? "move" : "pointer") : this.cursor("text"), !this.isDrag) return this.isDown && (s = t.clientX - this.zone.x - 3), -1 !== this.current && (s -= this.tmp[this.current][0]), this.upInput(s, this.isDown);
        if (-1 !== this.current) {
          this.prev.d += t.clientX - this.prev.x - (t.clientY - this.prev.y);
          var e = this.prev.v + this.prev.d * this.step;
          this.value[this.current] = this.numValue(e), this.c[3 + this.current].textContent = this.value[this.current], this.validate(), this.prev.x = t.clientX, this.prev.y = t.clientY, i = !0
        }
        return i
      }, s.reset = function() {
        return !1
      }, s.setValue = function(t) {
        this.isVector ? (void 0 !== t.x && (this.value[0] = t.x), void 0 !== t.y && (this.value[1] = t.y), void 0 !== t.z && (this.value[2] = t.z), void 0 !== t.w && (this.value[3] = t.w)) : this.value = t, this.update()
      }, s.sameStr = function(t) {
        for (var i = this.value.length; i--;) this.c[3 + i].textContent = t
      }, s.update = function(t) {
        for (var i = this.value.length; i--;) this.value[i] = this.numValue(this.value[i] * this.invmulty), this.c[3 + i].textContent = this.value[i];
        t && this.send()
      }, s.send = function(t) {
        t = t || this.value, this.isSend = !0, null !== this.objectLink && (this.isVector ? this.objectLink[this.val].fromArray(t) : this.objectLink[this.val] = t), this.callback && this.callback(t, this.val), this.isSend = !1
      }, s.select = function(t, i, s) {
        var e = this.s,
          o = -1 !== this.current ? this.tmp[this.current][0] + 5 : 0;
        e[this.cursorId].width = "1px", e[this.cursorId].left = o + t + "px", e[2].left = o + i + "px", e[2].width = s + "px"
      }, s.unselect = function() {
        var t = this.s;
        t && (t[2].width = "0px", t[this.cursorId].width = "0px")
      }, s.validate = function(t) {
        var i = [],
          s = this.lng;
        for (this.allway && (t = !0); s--;) {
          if (isNaN(this.c[3 + s].textContent)) this.c[3 + s].textContent = this.value[s];
          else {
            var e = this.numValue(this.c[3 + s].textContent);
            this.c[3 + s].textContent = e, this.value[s] = e
          }
          i[s] = this.value[s] * this.multy
        }
        t && (this.isSingle ? this.send(i[0]) : this.send(i))
      }, s.rSize = function() {
        t.prototype.rSize.call(this);
        for (var i = Math.floor((this.sb + 5) / this.lng) - 5, s = this.s, e = this.lng; e--;) this.tmp[e] = [Math.floor(this.sa + i * e + 5 * e), i], this.tmp[e][2] = this.tmp[e][0] + this.tmp[e][1], s[3 + e].left = this.tmp[e][0] + "px", s[3 + e].width = this.tmp[e][1] + "px"
      }, i
    }(l),
    y = function(t) {
      function i(i) {
        var s;
        if (void 0 === i && (i = {}), (s = t.call(this, i) || this).setTypeNumber(i), s.model = i.stype || 0, void 0 !== i.mode && (s.model = i.mode), s.buttonColor = i.bColor || s.colors.button, s.defaultBorderColor = s.colors.hide, s.isDown = !1, s.isOver = !1, s.allway = i.allway || !1, s.isDeg = i.isDeg || !1, s.isCyclic = i.cyclic || !1, s.firstImput = !1, s.c[2] = s.dom("div", s.css.txtselect + "border:none; width:47px; color:" + s.fontColor), s.c[3] = s.dom("div", s.css.basic + " top:0; height:" + s.h + "px;"), s.c[4] = s.dom("div", s.css.basic + "background:" + s.colors.scrollback + "; top:2px; height:" + (s.h - 4) + "px;"), s.c[5] = s.dom("div", s.css.basic + "left:4px; top:5px; height:" + (s.h - 10) + "px; background:" + s.fontColor + ";"), s.c[2].isNum = !0, s.c[2].style.height = s.h - 2 + "px", s.c[2].style.lineHeight = s.h - 10 + "px", 0 !== s.model) {
          var e = 4,
            o = 8,
            n = s.h - 4,
            h = 20;
          2 === s.model && (e = 4, o = 8, h = 2, n = .5 * (s.h - 4)), 3 === s.model && (s.c[5].style.visible = "none"), s.c[4].style.borderRadius = e + "px", s.c[4].style.height = o + "px", s.c[4].style.top = .5 * s.h - e + "px", s.c[5].style.borderRadius = .5 * e + "px", s.c[5].style.height = e + "px", s.c[5].style.top = .5 * s.h - .5 * e + "px", s.c[6] = s.dom("div", s.css.basic + "border-radius:" + h + "px; margin-left:" + .5 * -n + "px; border:1px solid " + s.colors.border + "; background:" + s.buttonColor + "; left:4px; top:2px; height:" + (s.h - 4) + "px; width:" + n + "px;")
        }
        return s.init(), s
      }
      h(i, t);
      var s = i.prototype;
      return s.testZone = function(t) {
        var i = this.local;
        return -1 === i.x && -1 === i.y ? "" : i.x >= this.txl ? "text" : i.x >= this.sa ? "scroll" : ""
      }, s.mouseup = function(t) {
        this.isDown && (this.isDown = !1)
      }, s.mousedown = function(t) {
        var i = this.testZone(t);
        return !!i && ("scroll" === i && (this.isDown = !0, this.old = this.value, this.mousemove(t)), !0)
      }, s.mousemove = function(t) {
        var i = !1;
        if ("scroll" === this.testZone(t) ? (this.mode(1), this.cursor("w-resize")) : this.cursor(), this.isDown) {
          var s = (t.clientX - (this.zone.x + this.sa) - 3) / this.ww * this.range + this.min - this.old;
          (s >= this.step || s <= this.step) && (s = Math.floor(s / this.step), this.value = this.numValue(this.old + s * this.step), this.update(!0), this.old = this.value), i = !0
        }
        return i
      }, s.wheel = function(t) {
        if ("scroll" === this.testZone(t)) {
          var i = this.value - this.step * t.delta;
          return i > this.max ? i = this.isCyclic ? this.min : this.max : i < this.min && (i = this.isCyclic ? this.max : this.min), this.setValue(i), this.old = i, this.update(!0), !0
        }
        return !1
      }, s.validate = function() {
        var t = this.c[2].textContent;
        isNaN(t) ? this.c[2].textContent = this.value + (this.isDeg ? "°" : "") : (this.value = this.numValue(t), this.update(!0))
      }, s.reset = function() {
        this.isDown = !1, this.mode(0)
      }, s.mode = function(t) {
        var i = this.s;
        switch (t) {
          case 0:
            i[2].color = this.fontColor, i[4].background = this.colors.scrollback, i[5].background = this.fontColor;
            break;
          case 1:
            i[2].color = this.colorPlus, i[4].background = this.colors.scrollbackover, i[5].background = this.colorPlus
        }
      }, s.update = function(t) {
        var i = Math.floor(this.ww * ((this.value - this.min) / this.range));
        3 !== this.model && (this.s[5].width = i + "px"), this.s[6] && (this.s[6].left = this.sa + i + 3 + "px"), this.c[2].textContent = this.value + (this.isDeg ? "°" : ""), t && this.send()
      }, s.rSize = function() {
        t.prototype.rSize.call(this);
        var i = this.sb - this.sc;
        this.ww = i - 6;
        var s = this.sc;
        !this.isUI && this.simple || (s = this.sc + 10), this.txl = this.w - s + 2;
        var e = this.s;
        e[2].width = this.sc - 6 + "px", e[2].left = this.txl + 4 + "px", e[3].left = this.sa + "px", e[3].width = i + "px", e[4].left = this.sa + "px", e[4].width = i + "px", e[5].left = this.sa + 3 + "px", this.update()
      }, i
    }(l),
    k = function(t) {
      function i(i) {
        var s;
        return void 0 === i && (i = {}), (s = t.call(this, i) || this).cmode = 0, s.value = i.value || "", s.placeHolder = i.placeHolder || "", s.allway = i.allway || !1, s.editable = void 0 === i.edit || i.edit, s.isDown = !1, s.c[2] = s.dom("div", s.css.basic + " background:" + s.colors.select + "; top:4px; width:0px; height:" + (s.h - 8) + "px;"), s.c[3] = s.dom("div", s.css.txtselect + "height:" + (s.h - 4) + "px; background:" + s.colors.inputBg + "; borderColor:" + s.colors.inputBorder + "; border-radius:" + s.radius + "px;"), s.c[3].textContent = s.value, s.c[4] = s.dom("div", s.css.basic + "top:4px; height:" + (s.h - 8) + "px; width:0px; background:" + s.fontColor + ";"), s.c[5] = s.dom("div", s.css.txtselect + "height:" + (s.h - 4) + "px; justify-content: center; font-style: italic; color:" + s.colors.inputHolder + ";"), "" === s.value && (s.c[5].textContent = s.placeHolder), s.init(), s
      }
      h(i, t);
      var s = i.prototype;
      return s.testZone = function(t) {
        var i = this.local;
        return -1 === i.x && -1 === i.y ? "" : i.x >= this.sa ? "text" : ""
      }, s.mouseup = function(t) {
        if (this.editable) return !!this.isDown && (this.isDown = !1, this.mousemove(t))
      }, s.mousedown = function(t) {
        if (this.editable) {
          var i = this.testZone(t);
          return !this.isDown && (this.isDown = !0, "text" === i && this.setInput(this.c[3]), this.mousemove(t))
        }
      }, s.mousemove = function(t) {
        if (this.editable) {
          var i = 0;
          return "text" === this.testZone(t) ? this.cursor("text") : this.cursor(), this.isDown && (i = t.clientX - this.zone.x), this.upInput(i - this.sa - 3, this.isDown)
        }
      }, s.update = function() {
        this.c[3].textContent = this.value
      }, s.render = function(t, i, s) {
        this.s[4].width = "1px", this.s[4].left = this.sa + t + 5 + "px", this.s[2].left = this.sa + i + 5 + "px", this.s[2].width = s + "px"
      }, s.reset = function() {
        this.cursor()
      }, s.select = function(t, i, s) {
        var e = this.s,
          o = this.sa + 5;
        e[4].width = "1px", e[4].left = o + t + "px", e[2].left = o + i + "px", e[2].width = s + "px"
      }, s.unselect = function() {
        var t = this.s;
        t && (t[2].width = "0px", t[4].width = "0px")
      }, s.validate = function(t) {
        this.allway && (t = !0), this.value = this.c[3].textContent, "" !== this.value ? this.c[5].textContent = "" : this.c[5].textContent = this.placeHolder, t && this.send()
      }, s.rSize = function() {
        t.prototype.rSize.call(this);
        var i = this.s;
        i[3].left = this.sa + "px", i[3].width = this.sb + "px", i[5].left = this.sa + "px", i[5].width = this.sb + "px"
      }, i
    }(l),
    C = function(t) {
      function i(i) {
        var s;
        void 0 === i && (i = {}), s = t.call(this, i) || this;
        var e = i.prefix || "";
        s.c[2] = s.dom("div", s.css.txt + "text-align:right; width:60px; line-height:" + (s.h - 8) + "px; color:" + s.fontColor), 31 === s.h && (s.s[0].height = s.h + "px", s.s[1].top = "8px", s.c[2].style.top = "8px");
        var o = s.s;
        return o[1].textAlign = i.align || "left", o[1].fontWeight = i.fontWeight || "bold", s.c[1].textContent = s.txt.substring(0, 1).toUpperCase() + s.txt.substring(1).replace("-", " "), s.c[2].textContent = e, s.init(), s
      }
      h(i, t);
      var s = i.prototype;
      return s.text = function(t) {
        this.c[1].textContent = t
      }, s.text2 = function(t) {
        this.c[2].textContent = t
      }, s.rSize = function() {
        t.prototype.rSize.call(this), this.s[1].width = this.w + "px", this.s[2].left = this.w + "px"
      }, i
    }(l),
    S = function(t) {
      function i(i) {
        var s;
        void 0 === i && (i = {}), (s = t.call(this, i) || this).value = i.value || "", s.isDown = !1, s.onActif = i.onActif || function() {}, s.buttonColor = i.bColor || s.colors.button, s.buttonOver = i.bOver || s.colors.over, s.buttonDown = i.bDown || s.colors.select, s.buttonAction = i.bAction || s.colors.action, i.prefix, s.c[2] = s.dom("div", s.css.txt + s.css.button + " top:1px; background:" + s.buttonColor + "; height:" + (s.h - 2) + "px; border:" + s.colors.buttonBorder + "; border-radius:15px; width:30px; left:10px;"), s.c[2].style.color = s.fontColor, s.c[3] = s.dom("div", s.css.txtselect + "height:" + (s.h - 4) + "px; background:" + s.colors.inputBg + "; borderColor:" + s.colors.inputBorder + "; border-radius:" + s.radius + "px;"), s.c[3].textContent = s.value;
        var e = Math.floor(.5 * s.h) - 7;
        return s.c[4] = s.dom("path", s.css.basic + "position:absolute; width:14px; height:14px; left:5px; top:" + e + "px;", {
          d: s.svgs.cursor,
          fill: s.fontColor,
          stroke: "none"
        }), s.stat = 1, s.isActif = !1, s.init(), s
      }
      h(i, t);
      var s = i.prototype;
      return s.testZone = function(t) {
        var i = this.local;
        return -1 === i.x && -1 === i.y ? "" : i.x > this.sa && i.x < this.sa + 30 ? "over" : "0"
      }, s.mouseup = function(t) {
        return !!this.isDown && (this.isDown = !1, this.mousemove(t))
      }, s.mousedown = function(t) {
        return !!this.testZone(t) && (this.isDown = !0, this.mousemove(t))
      }, s.mousemove = function(t) {
        var i = !1;
        return "over" === this.testZone(t) ? (this.cursor("pointer"), i = this.mode(this.isDown ? 3 : 2)) : i = this.reset(), i
      }, s.apply = function(t) {
        (t = t || "") !== this.value && (this.value = t, this.c[3].textContent = this.value, this.send()), this.mode(1)
      }, s.update = function() {
        this.mode(3)
      }, s.mode = function(t) {
        var i = !1;
        if (this.stat !== t) {
          switch (1 === t && (this.isActif = !1), 3 === t && (this.isActif ? this.isActif = !1 : (this.isActif = !0, t = 4, this.onActif(this))), 2 === t && this.isActif && (t = 4), t) {
            case 1:
              this.stat = 1, this.s[2].color = this.fontColor, this.s[2].background = this.buttonColor;
              break;
            case 2:
              this.stat = 2, this.s[2].color = this.fontSelect, this.s[2].background = this.buttonOver;
              break;
            case 3:
              this.stat = 3, this.s[2].color = this.fontSelect, this.s[2].background = this.buttonDown;
              break;
            case 4:
              this.stat = 4, this.s[2].color = this.fontSelect, this.s[2].background = this.buttonAction
          }
          i = !0
        }
        return i
      }, s.reset = function() {
        return this.cursor(), this.mode(this.isActif ? 4 : 1)
      }, s.text = function(t) {
        this.c[3].textContent = t
      }, s.rSize = function() {
        t.prototype.rSize.call(this);
        var i = this.s;
        i[2].left = this.sa + "px", i[3].left = this.sa + 40 + "px", i[3].width = this.sb - 40 + "px", i[4].left = this.sa + 8 + "px"
      }, i
    }(l),
    I = function(t) {
      function i(i) {
        var s, e;
        void 0 === i && (i = {}), (s = t.call(this, i) || this).values = i.values, "string" == typeof s.values && (s.values = [s.values]), s.value = i.value || null, s.isSelectable = !0, void 0 !== i.selectable && (s.isSelectable = i.selectable), s.isDown = !1, s.buttonColor = i.bColor || s.colors.button, s.buttonOver = i.bOver || s.colors.over, s.buttonDown = i.bDown || s.colors.select, s.lng = s.values.length, s.tmp = [], s.stat = [];
        for (var o = 0; o < s.lng; o++) e = !1, s.values[o] === s.value && s.isSelectable && (e = !0), s.c[o + 2] = s.dom("div", s.css.txt + s.css.button + " top:1px; height:" + (s.h - 2) + "px; border:" + s.colors.buttonBorder + "; border-radius:" + s.radius + "px;"), s.c[o + 2].style.background = e ? s.buttonDown : s.buttonColor, s.c[o + 2].style.color = e ? s.fontSelect : s.fontColor, s.c[o + 2].innerHTML = s.values[o], s.stat[o] = e ? 3 : 1;
        return s.init(), s
      }
      h(i, t);
      var s = i.prototype;
      return s.testZone = function(t) {
        var i = this.local;
        if (-1 === i.x && -1 === i.y) return "";
        for (var s = this.lng, e = this.tmp; s--;)
          if (i.x > e[s][0] && i.x < e[s][2]) return s;
        return -1
      }, s.mouseup = function(t) {
        return !!this.isDown && (this.isDown = !1, this.mousemove(t))
      }, s.mousedown = function(t) {
        var i = this.testZone(t);
        return !(i < 0) && (this.isDown = !0, this.value = this.values[i], this.send(), this.mousemove(t))
      }, s.mousemove = function(t) {
        var i = !1,
          s = this.testZone(t);
        return -1 !== s ? (this.cursor("pointer"), i = this.modes(this.isDown ? 3 : 2, s)) : i = this.reset(), i
      }, s.modes = function(t, i) {
        for (var s = !1, e = this.lng; e--;)(e === i ? this.mode(t, e) : this.isSelectable && this.values[e] === this.value ? this.mode(3, e) : this.mode(1, e)) && (s = !0);
        return s
      }, s.mode = function(t, i) {
        var s = !1,
          e = i + 2;
        if (this.stat[i] !== t) {
          switch (t) {
            case 1:
              this.stat[i] = 1, this.s[e].color = this.fontColor, this.s[e].background = this.buttonColor;
              break;
            case 2:
              this.stat[i] = 2, this.s[e].color = this.fontSelect, this.s[e].background = this.buttonOver;
              break;
            case 3:
              this.stat[i] = 3, this.s[e].color = this.fontSelect, this.s[e].background = this.buttonDown
          }
          s = !0
        }
        return s
      }, s.reset = function() {
        return this.cursor(), this.modes(1, -1)
      }, s.label = function(t, i) {
        i = i || 2, this.c[i].textContent = t
      }, s.icon = function(t, i, s) {
        s = s || 2, this.s[s].padding = (i || 0) + "px 0px", this.c[s].innerHTML = t
      }, s.rSize = function() {
        t.prototype.rSize.call(this);
        for (var i = this.s, s = this.sb, e = this.sa, o = this.lng, n = Math.floor((s - 3 * (o - 1)) / o); o--;) this.tmp[o] = [Math.floor(e + n * o + 3 * o), n], this.tmp[o][2] = this.tmp[o][0] + this.tmp[o][1], i[o + 2].left = this.tmp[o][0] + "px", i[o + 2].width = this.tmp[o][1] + "px"
      }, i
    }(l),
    M = function(t) {
      function i(i) {
        var s;
        return void 0 === i && (i = {}), i.simple = !0, i.isSpace = !0, (s = t.call(this, i) || this).init(), s
      }
      return h(i, t), i
    }(l),
    L = function(t) {
      function i(i) {
        var s;
        void 0 === i && (i = {}), (s = t.call(this, i) || this).p = 100, s.value = s.txt, s.status = 1, s.itype = i.itype || "none", s.val = s.itype, s.graph = s.svgs[s.itype];
        var e = Math.floor(.5 * s.h) - 7;
        return s.c[2] = s.dom("path", s.css.basic + "position:absolute; width:14px; height:14px; left:5px; top:" + e + "px;", {
          d: s.graph,
          fill: s.fontColor,
          stroke: "none"
        }), s.s[1].marginLeft = "20px", s.init(), s
      }
      h(i, t);
      var s = i.prototype;
      return s.mousemove = function(t) {
        this.cursor("pointer")
      }, s.mousedown = function(t) {
        return this.isUI && this.main.resetItem(), this.selected(!0), this.send(), !0
      }, s.uiout = function() {
        this.isSelect ? this.mode(3) : this.mode(1)
      }, s.uiover = function() {
        this.isSelect ? this.mode(4) : this.mode(2)
      }, s.update = function() {}, s.mode = function(t) {
        var i = !1;
        if (this.status !== t) {
          switch (this.status = t, t) {
            case 1:
              this.status = 1, this.s[1].color = this.fontColor, this.s[0].background = "none";
              break;
            case 2:
              this.status = 2, this.s[1].color = this.fontColor, this.s[0].background = this.bgOver;
              break;
            case 3:
              this.status = 3, this.s[1].color = "#FFF", this.s[0].background = this.colors.select;
              break;
            case 4:
              this.status = 4, this.s[1].color = "#FFF", this.s[0].background = this.colors.down
          }
          i = !0
        }
        return i
      }, s.reset = function() {
        this.cursor()
      }, s.selected = function(t) {
        this.isSelect && this.mode(1), this.isSelect = t || !1, this.isSelect && this.mode(3)
      }, i
    }(l),
    z = function(t) {
      function i(i) {
        var s;
        void 0 === i && (i = {}), (s = t.call(this, i) || this).values = i.values || [], "string" == typeof s.values && (s.values = [s.values]), s.value = i.value || null, s.isSelectable = i.selectable || !1, s.isDown = !1, s.buttonColor = i.bColor || s.colors.button, s.buttonOver = i.bOver || s.colors.over, s.buttonDown = i.bDown || s.colors.select, s.spaces = i.spaces || [5, 3], s.bsize = i.bsize || [90, 20], s.bsizeMax = s.bsize[0], s.lng = s.values.length, s.tmp = [], s.stat = [], s.grid = [2, Math.round(.5 * s.lng)], s.h = s.grid[1] * (s.bsize[1] + s.spaces[1]) + s.spaces[1], s.c[1].textContent = "", s.c[2] = s.dom("table", s.css.basic + "width:100%; top:" + (s.spaces[1] - 2) + "px; height:auto; border-collapse:separate; border:none; border-spacing: " + (s.spaces[0] - 2) + "px " + (s.spaces[1] - 2) + "px;");
        var e, o, n, h, r = 0;
        s.buttons = [], s.stat = [], s.tmpX = [], s.tmpY = [];
        for (var a = 0; a < s.grid[1]; a++) {
          (n = s.c[2].insertRow()).style.cssText = "pointer-events:none;";
          for (var l = 0; l < s.grid[0]; l++)(o = n.insertCell()).style.cssText = "pointer-events:none;", s.values[r] ? (h = !1, s.values[r] === s.value && s.isSelectable && (h = !0), (e = document.createElement("div")).style.cssText = s.css.txt + s.css.button + "position:static; width:" + s.bsize[0] + "px; height:" + s.bsize[1] + "px; border:" + s.colors.buttonBorder + "; left:auto; right:auto; border-radius:" + s.radius + "px;", e.style.background = h ? s.buttonDown : s.buttonColor, e.style.color = h ? s.fontSelect : s.fontColor, e.innerHTML = s.values[r], o.appendChild(e), s.buttons.push(e), s.stat.push(1)) : ((e = document.createElement("div")).style.cssText = s.css.txt + "position:static; width:" + s.bsize[0] + "px; height:" + s.bsize[1] + "px; text-align:center;\tleft:auto; right:auto; background:none;", o.appendChild(e)), e.style.cssText += 0 === l ? "float:right;" : "float:left;", r++
        }
        return s.init(), s
      }
      h(i, t);
      var s = i.prototype;
      return s.testZone = function(t) {
        var i = this.local;
        if (-1 === i.x && -1 === i.y) return -1;
        for (var s = this.tmpX, e = this.tmpY, o = -1, n = -1, h = -1, r = this.grid[0]; r--;) i.x > s[r][0] && i.x < s[r][1] && (n = r);
        for (r = this.grid[1]; r--;) i.y > e[r][0] && i.y < e[r][1] && (h = r);
        return -1 !== n && -1 !== h && (o = n + 2 * h) > this.lng - 1 && (o = -1), o
      }, s.mouseup = function(t) {
        return !!this.isDown && (this.isDown = !1, this.mousemove(t))
      }, s.mousedown = function(t) {
        var i = this.testZone(t);
        return !(i < 0) && (this.isDown = !0, this.value = this.values[i], this.send(), this.mousemove(t))
      }, s.mousemove = function(t) {
        var i = !1,
          s = this.testZone(t);
        return -1 !== s ? (this.cursor("pointer"), i = this.modes(this.isDown ? 3 : 2, s)) : i = this.reset(), i
      }, s.modes = function(t, i) {
        for (var s = !1, e = this.lng; e--;)(e === i ? this.mode(t, e) : this.isSelectable && this.values[e] === this.value ? this.mode(3, e) : this.mode(1, e)) && (s = !0);
        return s
      }, s.mode = function(t, i) {
        var s = !1;
        if (this.stat[i] !== t) {
          switch (t) {
            case 1:
              this.stat[i] = 1, this.buttons[i].style.color = this.fontColor, this.buttons[i].style.background = this.buttonColor;
              break;
            case 2:
              this.stat[i] = 2, this.buttons[i].style.color = this.fontSelect, this.buttons[i].style.background = this.buttonOver;
              break;
            case 3:
              this.stat[i] = 3, this.buttons[i].style.color = this.fontSelect, this.buttons[i].style.background = this.buttonDown
          }
          s = !0
        }
        return s
      }, s.reset = function() {
        return this.cursor(), this.modes(1, -1)
      }, s.label = function(t, i) {
        this.buttons[i].textContent = t
      }, s.icon = function(t, i, s) {
        this.buttons[s].style.padding = (i || 0) + "px 0px", this.buttons[s].innerHTML = t
      }, s.testW = function() {
        var t = !1;
        if (3 * this.spaces[0] + 2 * this.bsizeMax > this.w ? (this.bsize[0] = .5 * (this.w - 3 * this.spaces[0]), t = !0) : this.bsize[0] !== this.bsizeMax && (this.bsize[0] = this.bsizeMax, t = !0), t)
          for (var i = this.buttons.length; i--;) this.buttons[i].style.width = this.bsize[0] + "px"
      }, s.rSize = function() {
        var i;
        t.prototype.rSize.call(this), this.testW(), this.tmpX = [], this.tmpY = [];
        for (var s = 0; s < this.grid[0]; s++) 0 === s ? (i = .5 * this.w - .5 * this.spaces[0], this.tmpX.push([i - this.bsize[0], i])) : (i = .5 * this.w + .5 * this.spaces[0], this.tmpX.push([i, i + this.bsize[0]]));
        i = this.spaces[1];
        for (var e = 0; e < this.grid[1]; e++) this.tmpY.push([i, i + this.bsize[1]]), i += this.bsize[1] + this.spaces[1]
      }, i
    }(l),
    D = function t() {
      var i, s, e = arguments,
        o = !1,
        n = null;
      "string" == typeof e[0] ? (i = e[0], s = e[1] || {}) : "object" == typeof e[0] && (o = !0, void 0 === e[2] && [].push.call(e, {}), i = e[2].type ? e[2].type : "slide", (s = e[2]).name = e[1], s.value = e[0][e[1]]);
      var h = i.toLowerCase();
      switch ("group" === h && (s.add = t), h) {
        case "bool":
          n = new c(s);
          break;
        case "button":
          n = new u(s);
          break;
        case "circular":
          n = new d(s);
          break;
        case "color":
          n = new p(s);
          break;
        case "fps":
          n = new f(s);
          break;
        case "graph":
          n = new v(s);
          break;
        case "group":
          n = new m(s);
          break;
        case "joystick":
          n = new g(s);
          break;
        case "knob":
          n = new x(s);
          break;
        case "list":
          n = new b(s);
          break;
        case "numeric":
        case "number":
          n = new w(s);
          break;
        case "slide":
          n = new y(s);
          break;
        case "textInput":
        case "string":
          n = new k(s);
          break;
        case "title":
          n = new C(s);
          break;
        case "select":
          n = new S(s);
          break;
        case "selector":
          n = new I(s);
          break;
        case "empty":
        case "space":
          n = new M(s);
          break;
        case "item":
          n = new L(s);
          break;
        case "grid":
          n = new z(s)
      }
      if (null !== n) return o && n.setReferency(e[0], e[1]), n
    },
    H = function() {
      function t(t) {
        void 0 === t && (t = {}), this.canvas = null, this.isEmpty = !0, this.colors = e.cloneColor(), this.css = e.cloneCss(), t.config && this.setConfig(t.config), this.bg = t.bg || this.colors.background, void 0 !== t.transparent && (this.colors.background = "none", this.colors.backgroundOver = "none"), this.isReset = !0, this.tmpAdd = null, this.tmpH = 0, this.isCanvas = t.isCanvas || !1, this.isCanvasOnly = !1, this.cssGui = void 0 !== t.css ? t.css : "", this.callback = void 0 === t.callback ? null : t.callback, this.forceHeight = t.maxHeight || 0, this.lockHeight = t.lockHeight || !1, this.isItemMode = void 0 !== t.itemMode && t.itemMode, this.cn = "", this.size = e.size, void 0 !== t.p && (this.size.p = t.p), void 0 !== t.w && (this.size.w = t.w), void 0 !== t.h && (this.size.h = t.h), void 0 !== t.s && (this.size.s = t.s), this.size.h = this.size.h < 11 ? 11 : this.size.h, this.local = (new a).neg(), this.zone = {
          x: 0,
          y: 0,
          w: this.size.w,
          h: 0
        }, this.mouse = (new a).neg(), this.h = 0, this.prevY = -1, this.sw = 0, this.isWithClose = void 0 === t.close || t.close, this.bh = this.isWithClose ? this.size.h : 0, this.autoResize = void 0 === t.autoResize || t.autoResize, this.isCenter = t.center || !1, this.isOpen = void 0 === t.open || t.open, this.isDown = !1, this.isScroll = !1, this.uis = [], this.current = -1, this.target = null, this.decal = 0, this.ratio = 1, this.oy = 0, this.isNewTarget = !1, this.content = e.dom("div", this.css.basic + " width:0px; height:auto; top:0px; " + this.cssGui), this.innerContent = e.dom("div", this.css.basic + "width:100%; top:0; left:0; height:auto; overflow:hidden;"), this.content.appendChild(this.innerContent), this.inner = e.dom("div", this.css.basic + "width:100%; left:0; "), this.innerContent.appendChild(this.inner), this.scrollBG = e.dom("div", this.css.basic + "right:0; top:0; width:" + (this.size.s - 1) + "px; height:10px; display:none; background:" + this.bg + ";"), this.content.appendChild(this.scrollBG), this.scroll = e.dom("div", this.css.basic + "background:" + this.colors.scroll + "; right:2px; top:0; width:" + (this.size.s - 4) + "px; height:10px;"), this.scrollBG.appendChild(this.scroll), this.bottomText = t.bottomText || ["open", "close"];
        var i = t.radius || this.colors.radius;
        this.bottom = e.dom("div", this.css.txt + "width:100%; top:auto; bottom:0; left:0; border-bottom-right-radius:" + i + "px;\tborder-bottom-left-radius:" + i + "px; text-align:center; height:" + this.bh + "px; line-height:" + (this.bh - 5) + "px;"), this.content.appendChild(this.bottom), this.bottom.textContent = this.isOpen ? this.bottomText[1] : this.bottomText[0], this.bottom.style.background = this.bg, this.parent = void 0 !== t.parent ? t.parent : null, this.parent = void 0 !== t.target ? t.target : this.parent, null !== this.parent || this.isCanvas || (this.parent = document.body, this.isCenter || (this.content.style.right = "10px")), null !== this.parent && this.parent.appendChild(this.content), this.isCanvas && null === this.parent && (this.isCanvasOnly = !0), this.isCanvasOnly || (this.content.style.pointerEvents = "auto"), this.setWidth(), this.isCanvas && this.makeCanvas(), n.add(this)
      }
      var i = t.prototype;
      return i.setTop = function(t, i) {
        this.content.style.top = t + "px", void 0 !== i && (this.forceHeight = i), this.setHeight(), n.needReZone = !0
      }, i.dispose = function() {
        this.clear(), null !== this.parent && this.parent.removeChild(this.content), n.remove(this)
      }, i.onDraw = function() {}, i.makeCanvas = function() {
        this.canvas = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), this.canvas.width = this.zone.w, this.canvas.height = this.forceHeight ? this.forceHeight : this.zone.h
      }, i.draw = function(t) {
        if (null !== this.canvas) {
          var i = this.zone.w,
            s = this.forceHeight ? this.forceHeight : this.zone.h;
          n.toCanvas(this, i, s, t)
        }
      }, i.getDom = function() {
        return this.content
      }, i.setMouse = function(t) {
        this.mouse.set(t.x, t.y)
      }, i.setConfig = function(t) {
        this.setColors(t), this.setText(t.fontSize, t.text, t.font, t.shadow)
      }, i.setColors = function(t) {
        for (var i in t) this.colors[i] && (this.colors[i] = t[i])
      }, i.setText = function(t, i, s, o) {
        e.setText(t, i, s, o, this.colors, this.css)
      }, i.hide = function(t) {
        this.content.style.display = t ? "none" : "block"
      }, i.onChange = function(t) {
        return this.callback = t || null, this
      }, i.mode = function(t) {
        var i = !1;
        if (t !== this.cn) {
          switch (this.cn = t, t) {
            case "def":
              this.scroll.style.background = this.colors.scroll, this.bottom.style.background = this.colors.background, this.bottom.style.color = this.colors.text;
              break;
            case "scrollOver":
              this.scroll.style.background = this.colors.select;
              break;
            case "scrollDown":
              this.scroll.style.background = this.colors.down;
              break;
            case "bottomOver":
              this.bottom.style.background = this.colors.backgroundOver, this.bottom.style.color = "#FFF"
          }
          i = !0
        }
        return i
      }, i.clearTarget = function() {
        return -1 !== this.current && (this.target.uiout(), this.target.reset(), this.target = null, this.current = -1, n.cursor(), !0)
      }, i.testZone = function(t) {
        var i = this.local;
        if (-1 === i.x && -1 === i.y) return "";
        this.isReset = !1;
        var s = this.isScroll ? this.zone.w - this.size.s : this.zone.w;
        return i.y > this.zone.h - this.bh && i.y < this.zone.h ? "bottom" : i.x > s ? "scroll" : "content"
      }, i.handleEvent = function(t) {
        var i = t.type,
          s = !1,
          e = !1,
          o = this.testZone(t);
        if ("mouseup" === i && this.isDown && (this.isDown = !1), "mousedown" !== i || this.isDown || (this.isDown = !0), this.isDown && this.isNewTarget && (n.clearInput(), this.isNewTarget = !1), o) {
          switch (o) {
            case "content":
              t.clientY = this.isScroll ? t.clientY + this.decal : t.clientY, n.isMobile && "mousedown" === i && this.getNext(t, s), this.target && (e = this.target.handleEvent(t)), "mousemove" === i && (s = this.mode("def")), "wheel" === i && !e && this.isScroll && (s = this.onWheel(t)), n.lock || this.getNext(t, s);
              break;
            case "bottom":
              this.clearTarget(), "mousemove" === i && (s = this.mode("bottomOver")), "mousedown" === i && (this.isOpen = !this.isOpen, this.bottom.textContent = this.isOpen ? this.bottomText[1] : this.bottomText[0], this.setHeight(), this.mode("def"), s = !0);
              break;
            case "scroll":
              this.clearTarget(), "mousemove" === i && (s = this.mode("scrollOver")), "mousedown" === i && (s = this.mode("scrollDown")), "wheel" === i && (s = this.onWheel(t)), this.isDown && this.update(t.clientY - this.zone.y - .5 * this.sh)
          }
          this.isDown && (s = !0), e && (s = !0), "keyup" === i && (s = !0), "keydown" === i && (s = !0), s && this.draw()
        }
      }, i.getNext = function(t, i) {
        var s = n.findTarget(this.uis, t);
        s !== this.current && (this.clearTarget(), this.current = s, this.isNewTarget = !0), -1 !== s && (this.target = this.uis[this.current], this.target.uiover())
      }, i.onWheel = function(t) {
        return this.oy += 20 * t.delta, this.update(this.oy), !0
      }, i.reset = function(t) {
        if (!this.isReset) {
          this.mouse.neg(), this.isDown = !1;
          var i = this.mode("def"),
            s = this.clearTarget();
          (i || s) && this.draw(!0), this.isReset = !0
        }
      }, i.add = function() {
        var t = arguments,
          i = !1;
        "object" == typeof t[1] ? (t[1].isUI = !0, t[1].main = this, i = !!t[1].ontop && t[1].ontop) : "string" == typeof t[1] && (void 0 === t[2] ? [].push.call(t, {
          isUI: !0,
          main: this
        }) : (t[2].isUI = !0, t[2].main = this, i = !!t[1].ontop && t[1].ontop));
        var s = D.apply(this, t);
        if (null !== s) {
          if (i ? this.uis.unshift(s) : this.uis.push(s), s.autoWidth) this.prevY = 0, this.calc(s.h + 1);
          else {
            var e = s.c[0].getBoundingClientRect().top;
            this.prevY !== e && (this.calc(s.h + 1), this.prevY = e)
          }
          return this.isEmpty = !1, s
        }
      }, i.applyCalc = function() {
        this.calc(this.tmpH), this.tmpAdd = null
      }, i.calcUis = function() {
        n.calcUis(this.uis, this.zone, this.zone.y)
      }, i.remove = function(t) {
        t.clear && t.clear()
      }, i.clearOne = function(t) {
        var i = this.uis.indexOf(t); - 1 !== i && (this.calc(-(this.uis[i].h + 1)), this.inner.removeChild(this.uis[i].c[0]), this.uis.splice(i, 1))
      }, i.empty = function() {
        for (var t, i = this.uis.length; i--;) t = this.uis.pop(), this.inner.removeChild(t.c[0]), t.clear(!0);
        this.isEmpty = !0, this.calc(-this.h)
      }, i.clear = function() {
        this.empty()
      }, i.resetItem = function() {
        if (this.isItemMode)
          for (var t = this.uis.length; t--;) this.uis[t].selected()
      }, i.setItem = function(t) {
        if (this.isItemMode)
          if (t = t || "", this.resetItem(), t)
            for (var i = this.uis.length; i--;) this.uis[i].value === t && (this.uis[i].selected(!0), this.isScroll && this.update(i * (this.uis[i].h + 1) * this.ratio));
          else this.update(0)
      }, i.upScroll = function(t) {
        this.sw = t ? this.size.s : 0, this.oy = t ? this.oy : 0, this.scrollBG.style.display = t ? "block" : "none", t && (this.total = this.h, this.maxView = this.maxHeight, this.ratio = this.maxView / this.total, this.sh = this.maxView * this.ratio, this.range = this.maxView - this.sh, this.oy = e.clamp(this.oy, 0, this.range), this.scrollBG.style.height = this.maxView + "px", this.scroll.style.height = this.sh + "px"), this.setItemWidth(this.zone.w - this.sw), this.update(this.oy)
      }, i.update = function(t) {
        t = e.clamp(t, 0, this.range), this.decal = Math.floor(t / this.ratio), this.inner.style.top = -this.decal + "px", this.scroll.style.top = Math.floor(t) + "px", this.oy = t
      }, i.calc = function(t) {
        this.h += t, clearTimeout(this.tmp), this.tmp = setTimeout(this.setHeight.bind(this), 10)
      }, i.setHeight = function() {
        if (this.tmp && clearTimeout(this.tmp), this.zone.h = this.bh, this.isScroll = !1, this.isOpen) {
          var t = this.forceHeight ? this.forceHeight + this.zone.y : window.innerHeight;
          this.maxHeight = t - this.zone.y - this.bh, this.h - this.maxHeight > 1 ? (this.isScroll = !0, this.zone.h = this.maxHeight + this.bh) : this.zone.h = this.h + this.bh
        }
        this.upScroll(this.isScroll), this.innerContent.style.height = this.zone.h - this.bh + "px", this.content.style.height = this.zone.h + "px", this.bottom.style.top = this.zone.h - this.bh + "px", this.forceHeight && this.lockHeight && (this.content.style.height = this.forceHeight + "px"), this.isOpen && this.calcUis(), this.isCanvas && this.draw(!0)
      }, i.rezone = function() {
        n.needReZone = !0
      }, i.setWidth = function(t) {
        t && (this.zone.w = t), this.content.style.width = this.zone.w + "px", this.isCenter && (this.content.style.marginLeft = -Math.floor(.5 * this.zone.w) + "px"), this.setItemWidth(this.zone.w - this.sw), this.setHeight(), this.isCanvasOnly || (n.needReZone = !0)
      }, i.setItemWidth = function(t) {
        for (var i = this.uis.length; i--;) this.uis[i].setSize(t), this.uis[i].rSize()
      }, t
    }();
  H.prototype.isGui = !0;
  t.Bool = c, t.Button = u, t.Circular = d, t.Color = p, t.Fps = f, t.Group = m, t.Gui = H, t.Joystick = g, t.Knob = x, t.List = b, t.Numeric = w, t.Proto = l, t.REVISION = "3.0", t.Slide = y, t.TextInput = k, t.Title = C, t.Tools = e, t.add = D, Object.defineProperty(t, "__esModule", {
    value: !0
  })
}));