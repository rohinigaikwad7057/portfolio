import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgClass,
  NgModule,
  Optional,
  Output,
  Renderer2,
  RuntimeError,
  Self,
  SkipSelf,
  Subject,
  Version,
  __async,
  __commonJS,
  __spreadProps,
  __spreadValues,
  __toESM,
  booleanAttribute,
  computed,
  forkJoin,
  forwardRef,
  from,
  getDOM,
  inject,
  isPromise,
  isSubscribable,
  map,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-T2CITH5Q.js";

// node_modules/aos/dist/aos.js
var require_aos = __commonJS({
  "node_modules/aos/dist/aos.js"(exports, module) {
    "use strict";
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t();
    }(exports, function() {
      return function(e) {
        function t(o) {
          if (n[o]) return n[o].exports;
          var i = n[o] = {
            exports: {},
            id: o,
            loaded: false
          };
          return e[o].call(i.exports, i, i.exports, t), i.loaded = true, i.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "dist/", t(0);
      }([function(e, t, n) {
        "use strict";
        function o(e2) {
          return e2 && e2.__esModule ? e2 : {
            default: e2
          };
        }
        var i = Object.assign || function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var o2 in n2) Object.prototype.hasOwnProperty.call(n2, o2) && (e2[o2] = n2[o2]);
          }
          return e2;
        }, r = n(1), a = (o(r), n(6)), u = o(a), c = n(7), s = o(c), f = n(8), d = o(f), l = n(9), p = o(l), m = n(10), b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = false, x = {
          offset: 120,
          delay: 0,
          easing: "ease",
          duration: 400,
          disable: false,
          once: false,
          startEvent: "DOMContentLoaded",
          throttleDelay: 99,
          debounceDelay: 50,
          disableMutationObserver: false
        }, j = function() {
          var e2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (e2 && (k = true), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
        }, O = function() {
          w = (0, h.default)(), j();
        }, M = function() {
          w.forEach(function(e2, t2) {
            e2.node.removeAttribute("data-aos"), e2.node.removeAttribute("data-aos-easing"), e2.node.removeAttribute("data-aos-duration"), e2.node.removeAttribute("data-aos-delay");
          });
        }, S = function(e2) {
          return e2 === true || "mobile" === e2 && p.default.mobile() || "phone" === e2 && p.default.phone() || "tablet" === e2 && p.default.tablet() || "function" == typeof e2 && e2() === true;
        }, _ = function(e2) {
          x = i(x, e2), w = (0, h.default)();
          var t2 = document.all && !window.atob;
          return S(x.disable) || t2 ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = true), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(true) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
            j(true);
          }) : document.addEventListener(x.startEvent, function() {
            j(true);
          }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, true)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, true)), window.addEventListener("scroll", (0, u.default)(function() {
            (0, b.default)(w, x.once);
          }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
        };
        e.exports = {
          init: _,
          refresh: j,
          refreshHard: O
        };
      }, function(e, t) {
      }, , , , , function(e, t) {
        (function(t2) {
          "use strict";
          function n(e2, t3, n2) {
            function o2(t4) {
              var n3 = b2, o3 = v2;
              return b2 = v2 = void 0, k2 = t4, g2 = e2.apply(o3, n3);
            }
            function r2(e3) {
              return k2 = e3, h2 = setTimeout(f2, t3), M ? o2(e3) : g2;
            }
            function a2(e3) {
              var n3 = e3 - w2, o3 = e3 - k2, i2 = t3 - n3;
              return S ? j(i2, y2 - o3) : i2;
            }
            function c2(e3) {
              var n3 = e3 - w2, o3 = e3 - k2;
              return void 0 === w2 || n3 >= t3 || n3 < 0 || S && o3 >= y2;
            }
            function f2() {
              var e3 = O();
              return c2(e3) ? d2(e3) : void (h2 = setTimeout(f2, a2(e3)));
            }
            function d2(e3) {
              return h2 = void 0, _ && b2 ? o2(e3) : (b2 = v2 = void 0, g2);
            }
            function l2() {
              void 0 !== h2 && clearTimeout(h2), k2 = 0, b2 = w2 = v2 = h2 = void 0;
            }
            function p2() {
              return void 0 === h2 ? g2 : d2(O());
            }
            function m2() {
              var e3 = O(), n3 = c2(e3);
              if (b2 = arguments, v2 = this, w2 = e3, n3) {
                if (void 0 === h2) return r2(w2);
                if (S) return h2 = setTimeout(f2, t3), o2(w2);
              }
              return void 0 === h2 && (h2 = setTimeout(f2, t3)), g2;
            }
            var b2, v2, y2, g2, h2, w2, k2 = 0, M = false, S = false, _ = true;
            if ("function" != typeof e2) throw new TypeError(s);
            return t3 = u(t3) || 0, i(n2) && (M = !!n2.leading, S = "maxWait" in n2, y2 = S ? x(u(n2.maxWait) || 0, t3) : y2, _ = "trailing" in n2 ? !!n2.trailing : _), m2.cancel = l2, m2.flush = p2, m2;
          }
          function o(e2, t3, o2) {
            var r2 = true, a2 = true;
            if ("function" != typeof e2) throw new TypeError(s);
            return i(o2) && (r2 = "leading" in o2 ? !!o2.leading : r2, a2 = "trailing" in o2 ? !!o2.trailing : a2), n(e2, t3, {
              leading: r2,
              maxWait: t3,
              trailing: a2
            });
          }
          function i(e2) {
            var t3 = "undefined" == typeof e2 ? "undefined" : c(e2);
            return !!e2 && ("object" == t3 || "function" == t3);
          }
          function r(e2) {
            return !!e2 && "object" == ("undefined" == typeof e2 ? "undefined" : c(e2));
          }
          function a(e2) {
            return "symbol" == ("undefined" == typeof e2 ? "undefined" : c(e2)) || r(e2) && k.call(e2) == d;
          }
          function u(e2) {
            if ("number" == typeof e2) return e2;
            if (a(e2)) return f;
            if (i(e2)) {
              var t3 = "function" == typeof e2.valueOf ? e2.valueOf() : e2;
              e2 = i(t3) ? t3 + "" : t3;
            }
            if ("string" != typeof e2) return 0 === e2 ? e2 : +e2;
            e2 = e2.replace(l, "");
            var n2 = m.test(e2);
            return n2 || b.test(e2) ? v(e2.slice(2), n2 ? 2 : 8) : p.test(e2) ? f : +e2;
          }
          var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
            return typeof e2;
          } : function(e2) {
            return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
          }, s = "Expected a function", f = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = "object" == ("undefined" == typeof t2 ? "undefined" : c(t2)) && t2 && t2.Object === Object && t2, g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function() {
            return h.Date.now();
          };
          e.exports = o;
        }).call(t, /* @__PURE__ */ function() {
          return this;
        }());
      }, function(e, t) {
        (function(t2) {
          "use strict";
          function n(e2, t3, n2) {
            function i2(t4) {
              var n3 = b2, o2 = v2;
              return b2 = v2 = void 0, O = t4, g2 = e2.apply(o2, n3);
            }
            function r2(e3) {
              return O = e3, h2 = setTimeout(f2, t3), M ? i2(e3) : g2;
            }
            function u2(e3) {
              var n3 = e3 - w2, o2 = e3 - O, i3 = t3 - n3;
              return S ? x(i3, y2 - o2) : i3;
            }
            function s2(e3) {
              var n3 = e3 - w2, o2 = e3 - O;
              return void 0 === w2 || n3 >= t3 || n3 < 0 || S && o2 >= y2;
            }
            function f2() {
              var e3 = j();
              return s2(e3) ? d2(e3) : void (h2 = setTimeout(f2, u2(e3)));
            }
            function d2(e3) {
              return h2 = void 0, _ && b2 ? i2(e3) : (b2 = v2 = void 0, g2);
            }
            function l2() {
              void 0 !== h2 && clearTimeout(h2), O = 0, b2 = w2 = v2 = h2 = void 0;
            }
            function p2() {
              return void 0 === h2 ? g2 : d2(j());
            }
            function m2() {
              var e3 = j(), n3 = s2(e3);
              if (b2 = arguments, v2 = this, w2 = e3, n3) {
                if (void 0 === h2) return r2(w2);
                if (S) return h2 = setTimeout(f2, t3), i2(w2);
              }
              return void 0 === h2 && (h2 = setTimeout(f2, t3)), g2;
            }
            var b2, v2, y2, g2, h2, w2, O = 0, M = false, S = false, _ = true;
            if ("function" != typeof e2) throw new TypeError(c);
            return t3 = a(t3) || 0, o(n2) && (M = !!n2.leading, S = "maxWait" in n2, y2 = S ? k(a(n2.maxWait) || 0, t3) : y2, _ = "trailing" in n2 ? !!n2.trailing : _), m2.cancel = l2, m2.flush = p2, m2;
          }
          function o(e2) {
            var t3 = "undefined" == typeof e2 ? "undefined" : u(e2);
            return !!e2 && ("object" == t3 || "function" == t3);
          }
          function i(e2) {
            return !!e2 && "object" == ("undefined" == typeof e2 ? "undefined" : u(e2));
          }
          function r(e2) {
            return "symbol" == ("undefined" == typeof e2 ? "undefined" : u(e2)) || i(e2) && w.call(e2) == f;
          }
          function a(e2) {
            if ("number" == typeof e2) return e2;
            if (r(e2)) return s;
            if (o(e2)) {
              var t3 = "function" == typeof e2.valueOf ? e2.valueOf() : e2;
              e2 = o(t3) ? t3 + "" : t3;
            }
            if ("string" != typeof e2) return 0 === e2 ? e2 : +e2;
            e2 = e2.replace(d, "");
            var n2 = p.test(e2);
            return n2 || m.test(e2) ? b(e2.slice(2), n2 ? 2 : 8) : l.test(e2) ? s : +e2;
          }
          var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
            return typeof e2;
          } : function(e2) {
            return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
          }, c = "Expected a function", s = NaN, f = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = "object" == ("undefined" == typeof t2 ? "undefined" : u(t2)) && t2 && t2.Object === Object && t2, y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function() {
            return g.Date.now();
          };
          e.exports = n;
        }).call(t, /* @__PURE__ */ function() {
          return this;
        }());
      }, function(e, t) {
        "use strict";
        function n(e2) {
          var t2 = void 0, o2 = void 0, i2 = void 0;
          for (t2 = 0; t2 < e2.length; t2 += 1) {
            if (o2 = e2[t2], o2.dataset && o2.dataset.aos) return true;
            if (i2 = o2.children && n(o2.children)) return true;
          }
          return false;
        }
        function o() {
          return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        }
        function i() {
          return !!o();
        }
        function r(e2, t2) {
          var n2 = window.document, i2 = o(), r2 = new i2(a);
          u = t2, r2.observe(n2.documentElement, {
            childList: true,
            subtree: true,
            removedNodes: true
          });
        }
        function a(e2) {
          e2 && e2.forEach(function(e3) {
            var t2 = Array.prototype.slice.call(e3.addedNodes), o2 = Array.prototype.slice.call(e3.removedNodes), i2 = t2.concat(o2);
            if (n(i2)) return u();
          });
        }
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        var u = function() {
        };
        t.default = {
          isSupported: i,
          ready: r
        };
      }, function(e, t) {
        "use strict";
        function n(e2, t2) {
          if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
        }
        function o() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        var i = /* @__PURE__ */ function() {
          function e2(e3, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var o2 = t2[n2];
              o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
            }
          }
          return function(t2, n2, o2) {
            return n2 && e2(t2.prototype, n2), o2 && e2(t2, o2), t2;
          };
        }(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = function() {
          function e2() {
            n(this, e2);
          }
          return i(e2, [{
            key: "phone",
            value: function() {
              var e3 = o();
              return !(!r.test(e3) && !a.test(e3.substr(0, 4)));
            }
          }, {
            key: "mobile",
            value: function() {
              var e3 = o();
              return !(!u.test(e3) && !c.test(e3.substr(0, 4)));
            }
          }, {
            key: "tablet",
            value: function() {
              return this.mobile() && !this.phone();
            }
          }]), e2;
        }();
        t.default = new s();
      }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        var n = function(e2, t2, n2) {
          var o2 = e2.node.getAttribute("data-aos-once");
          t2 > e2.position ? e2.node.classList.add("aos-animate") : "undefined" != typeof o2 && ("false" === o2 || !n2 && "true" !== o2) && e2.node.classList.remove("aos-animate");
        }, o = function(e2, t2) {
          var o2 = window.pageYOffset, i = window.innerHeight;
          e2.forEach(function(e3, r) {
            n(e3, i + o2, t2);
          });
        };
        t.default = o;
      }, function(e, t, n) {
        "use strict";
        function o(e2) {
          return e2 && e2.__esModule ? e2 : {
            default: e2
          };
        }
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        var i = n(12), r = o(i), a = function(e2, t2) {
          return e2.forEach(function(e3, n2) {
            e3.node.classList.add("aos-init"), e3.position = (0, r.default)(e3.node, t2.offset);
          }), e2;
        };
        t.default = a;
      }, function(e, t, n) {
        "use strict";
        function o(e2) {
          return e2 && e2.__esModule ? e2 : {
            default: e2
          };
        }
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        var i = n(13), r = o(i), a = function(e2, t2) {
          var n2 = 0, o2 = 0, i2 = window.innerHeight, a2 = {
            offset: e2.getAttribute("data-aos-offset"),
            anchor: e2.getAttribute("data-aos-anchor"),
            anchorPlacement: e2.getAttribute("data-aos-anchor-placement")
          };
          switch (a2.offset && !isNaN(a2.offset) && (o2 = parseInt(a2.offset)), a2.anchor && document.querySelectorAll(a2.anchor) && (e2 = document.querySelectorAll(a2.anchor)[0]), n2 = (0, r.default)(e2).top, a2.anchorPlacement) {
            case "top-bottom":
              break;
            case "center-bottom":
              n2 += e2.offsetHeight / 2;
              break;
            case "bottom-bottom":
              n2 += e2.offsetHeight;
              break;
            case "top-center":
              n2 += i2 / 2;
              break;
            case "bottom-center":
              n2 += i2 / 2 + e2.offsetHeight;
              break;
            case "center-center":
              n2 += i2 / 2 + e2.offsetHeight / 2;
              break;
            case "top-top":
              n2 += i2;
              break;
            case "bottom-top":
              n2 += e2.offsetHeight + i2;
              break;
            case "center-top":
              n2 += e2.offsetHeight / 2 + i2;
          }
          return a2.anchorPlacement || a2.offset || isNaN(t2) || (o2 = t2), n2 + o2;
        };
        t.default = a;
      }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        var n = function(e2) {
          for (var t2 = 0, n2 = 0; e2 && !isNaN(e2.offsetLeft) && !isNaN(e2.offsetTop); ) t2 += e2.offsetLeft - ("BODY" != e2.tagName ? e2.scrollLeft : 0), n2 += e2.offsetTop - ("BODY" != e2.tagName ? e2.scrollTop : 0), e2 = e2.offsetParent;
          return {
            top: n2,
            left: t2
          };
        };
        t.default = n;
      }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        var n = function(e2) {
          return e2 = e2 || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e2, function(e3) {
            return {
              node: e3
            };
          });
        };
        t.default = n;
      }]);
    });
  }
});

// src/app/home/home.component.ts
var import_aos = __toESM(require_aos());

// src/app/about/about.component.ts
var _forTrack0 = ($index, $item) => $item.label;
function AboutComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275elementStart(2, "div")(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(stat_r1.icon + " about__stat-icon");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
  }
}
function AboutComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275elementStart(2, "span", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const detail_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(detail_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", detail_r2.label, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(detail_r2.value);
  }
}
var AboutComponent = class _AboutComponent {
  constructor() {
    this.stats = [
      { value: "3.6+", label: "Years of experience", icon: "fas fa-briefcase" }
    ];
    this.details = [
      { label: "Location", value: "Abu Dhabi, UAE", icon: "fas fa-map-marker-alt" },
      { label: "Experience", value: "3.6 years", icon: "fas fa-clock" },
      { label: "Speciality", value: "Angular & React", icon: "fas fa-layer-group" },
      { label: "Education", value: "B.E. Computer Engineering", icon: "fas fa-graduation-cap" },
      { label: "Languages", value: "English, Marathi, Hindi", icon: "fas fa-language" },
      { label: "Availability", value: "Open to opportunities", icon: "fas fa-check-circle" }
    ];
  }
  static {
    this.\u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 47, vars: 0, consts: [[1, "section", "container", "about"], [1, "about__layout"], ["data-aos", "fade-right", 1, "about__left"], [1, "about__image-wrap"], ["aria-hidden", "true", 1, "about__image-border"], ["src", "assets/images/profile-pic.png", "alt", "Rohini Gaikwad", "width", "360", "height", "360", "loading", "lazy", 1, "about__image"], ["aria-label", "Location: Abu Dhabi, UAE", 1, "about__location-badge"], ["aria-hidden", "true", 1, "fas", "fa-map-marker-alt"], [1, "about__stats"], [1, "about__stat"], ["data-aos", "fade-left", "data-aos-delay", "100", 1, "about__right"], [1, "section-header"], [1, "section-tag"], [1, "section-title"], [1, "about__bio"], [1, "about__details"], [1, "about__detail"], [1, "about__actions"], ["href", "assets/Rohini_Gaikwad_Angular_React_Developer.pdf.pdf", "target", "_blank", "rel", "noopener noreferrer", "download", "", "aria-label", "Download Rohini's resume PDF", 1, "btn", "btn-primary"], ["aria-hidden", "true", 1, "fas", "fa-download"], ["href", "#contact-section", 1, "btn", "btn-outline"], ["aria-hidden", "true", 1, "fas", "fa-envelope"], ["aria-hidden", "true"], [1, "about__stat-value"], [1, "about__stat-label"], [1, "about__detail-label"], [1, "about__detail-value"]], template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "div", 4)(5, "img", 5);
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275element(7, "i", 7);
        \u0275\u0275text(8, " Abu Dhabi, UAE ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275repeaterCreate(10, AboutComponent_For_11_Template, 7, 4, "div", 9, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "span", 12);
        \u0275\u0275text(15, "About me");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "h2", 13);
        \u0275\u0275text(17, "Building impactful web experiences");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 14)(19, "p");
        \u0275\u0275text(20, " I'm a Frontend Engineer with ");
        \u0275\u0275elementStart(21, "strong");
        \u0275\u0275text(22, "3.6 years");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " of professional experience specialising in ");
        \u0275\u0275elementStart(24, "strong");
        \u0275\u0275text(25, "Angular");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, " and ");
        \u0275\u0275elementStart(27, "strong");
        \u0275\u0275text(28, "React");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, ". At Infosys, I built enterprise-grade applications including real-time analytics dashboards, chat modules with WebSocket integration, and AI-assisted UI features. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p");
        \u0275\u0275text(31, " I bring a product mindset to every project \u2014 focusing on performance, accessibility, and clean component architecture. I have hands-on experience with RxJS state management, REST API integration, and production monitoring with Sentry. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "p");
        \u0275\u0275text(33, " Currently based in ");
        \u0275\u0275elementStart(34, "strong");
        \u0275\u0275text(35, "Abu Dhabi");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, " and actively seeking Frontend Engineer roles in UAE and international remote companies. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 15);
        \u0275\u0275repeaterCreate(38, AboutComponent_For_39_Template, 6, 4, "div", 16, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 17)(41, "a", 18);
        \u0275\u0275element(42, "i", 19);
        \u0275\u0275text(43, " Download Resume ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "a", 20);
        \u0275\u0275element(45, "i", 21);
        \u0275\u0275text(46, " Get in touch ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.stats);
        \u0275\u0275advance(28);
        \u0275\u0275repeater(ctx.details);
      }
    }, styles: ['\n\n.about__layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 400px 1fr;\n  gap: 5rem;\n  align-items: start;\n}\n.about__image-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(100%, 320px);\n  margin: 0 auto;\n}\n.about__image-border[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -8px;\n  border-radius: var(--radius-xl);\n  border: 1px solid var(--color-border-hover);\n}\n.about__image-border[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: -12px;\n  border-radius: calc(var(--radius-xl) + 4px);\n  border: 1px dashed rgba(245, 158, 11, 0.2);\n}\n.about__image[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 1;\n  border-radius: var(--radius-xl);\n  object-fit: cover;\n  object-position: top center;\n  border: 2px solid var(--color-border);\n}\n.about__location-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -16px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  background: var(--color-surface-2);\n  border: 1px solid var(--color-border-hover);\n  border-radius: 100px;\n  padding: 0.5rem 1rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--color-text-primary);\n  white-space: nowrap;\n}\n.about__location-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.about__stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n  margin-top: 3.5rem;\n  padding: 1.25rem;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n}\n.about__stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n}\n.about__stat-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: var(--color-accent-glow);\n  color: var(--color-accent);\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  flex-shrink: 0;\n}\n.about__stat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.about__stat-value[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--color-accent);\n  line-height: 1.2;\n}\n.about__stat-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.about__bio[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.about__bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--color-text-secondary);\n  line-height: 1.8;\n}\n.about__bio[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-text-primary);\n  font-weight: 600;\n}\n.about__details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n}\n.about__detail[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n}\n.about__detail[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  width: 16px;\n  text-align: center;\n  flex-shrink: 0;\n}\n.about__detail-label[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  white-space: nowrap;\n}\n.about__detail-value[_ngcontent-%COMP%] {\n  color: var(--color-text-primary);\n  font-weight: 500;\n}\n.about__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.875rem;\n}\n@media (max-width: 1024px) {\n  .about__layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n  .about__image-wrap[_ngcontent-%COMP%] {\n    max-width: 280px;\n  }\n  .about__left[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n@media (max-width: 600px) {\n  .about__details[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=about.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src\\app\\about\\about.component.ts", lineNumber: 22 });
})();

// node_modules/@angular/forms/fesm2022/forms.mjs
var BaseControlValueAccessor = class _BaseControlValueAccessor {
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
  }
  /**
   * Helper method that sets a property on a target element using the current Renderer
   * implementation.
   * @nodoc
   */
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  /**
   * Registers a function called when the control is touched.
   * @nodoc
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Sets the "disabled" property on the range input element.
   * @nodoc
   */
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
  static {
    this.\u0275fac = function BaseControlValueAccessor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BaseControlValueAccessor
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BuiltInControlValueAccessor_BaseFactory;
      return function BuiltInControlValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(__ngFactoryType__ || _BuiltInControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BuiltInControlValueAccessor,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "checked" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("checked", value);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CheckboxControlValueAccessor_BaseFactory;
      return function CheckboxControlValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(__ngFactoryType__ || _CheckboxControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CheckboxControlValueAccessor,
      selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
      hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.checked);
          })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($event.target.checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(ngDevMode ? "CompositionEventMode" : "");
var DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    this._composing = false;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /** @internal */
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  /** @internal */
  _compositionStart() {
    this._composing = true;
  }
  /** @internal */
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
  static {
    this.\u0275fac = function DefaultValueAccessor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _DefaultValueAccessor,
      selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
      hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
            return ctx._handleInput($event.target.value);
          })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
            return ctx._compositionStart();
          })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
            return ctx._compositionEnd($event.target.value);
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        "(input)": "$any(this)._handleInput($event.target.value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "$any(this)._compositionStart()",
        "(compositionend)": "$any(this)._compositionEnd($event.target.value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || (typeof value === "string" || Array.isArray(value)) && value.length === 0;
}
function hasValidLength(value) {
  return value != null && typeof value.length === "number";
}
var NG_VALIDATORS = new InjectionToken(ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function minValidator(min) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
      return null;
    }
    return control.value.length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    return hasValidLength(control.value) && control.value.length > maxLength ? {
      "maxlength": {
        "requiredLength": maxLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function patternValidator(pattern) {
  if (!pattern) return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^") regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$") regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null) return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators) return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  constructor() {
    this._rawValidators = [];
    this._rawAsyncValidators = [];
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Reports the value of the control if it is present, otherwise null.
   */
  get value() {
    return this.control ? this.control.value : null;
  }
  /**
   * @description
   * Reports whether the control is valid. A control is considered valid if no
   * validation errors exist with the current value.
   * If the control is not present, null is returned.
   */
  get valid() {
    return this.control ? this.control.valid : null;
  }
  /**
   * @description
   * Reports whether the control is invalid, meaning that an error exists in the input value.
   * If the control is not present, null is returned.
   */
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  /**
   * @description
   * Reports whether a control is pending, meaning that async validation is occurring and
   * errors are not yet available for the input value. If the control is not present, null is
   * returned.
   */
  get pending() {
    return this.control ? this.control.pending : null;
  }
  /**
   * @description
   * Reports whether the control is disabled, meaning that the control is disabled
   * in the UI and is exempt from validation checks and excluded from aggregate
   * values of ancestor controls. If the control is not present, null is returned.
   */
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  /**
   * @description
   * Reports whether the control is enabled, meaning that the control is included in ancestor
   * calculations of validity or value. If the control is not present, null is returned.
   */
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  /**
   * @description
   * Reports the control's validation errors. If the control is not present, null is returned.
   */
  get errors() {
    return this.control ? this.control.errors : null;
  }
  /**
   * @description
   * Reports whether the control is pristine, meaning that the user has not yet changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  /**
   * @description
   * Reports whether the control is dirty, meaning that the user has changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  /**
   * @description
   * Reports whether the control is touched, meaning that the user has triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get touched() {
    return this.control ? this.control.touched : null;
  }
  /**
   * @description
   * Reports the validation status of the control. Possible values include:
   * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
   * If the control is not present, null is returned.
   */
  get status() {
    return this.control ? this.control.status : null;
  }
  /**
   * @description
   * Reports whether the control is untouched, meaning that the user has not yet triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  /**
   * @description
   * Returns a multicasting observable that emits a validation status whenever it is
   * calculated for the control. If the control is not present, null is returned.
   */
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  /**
   * @description
   * Returns a multicasting observable of value changes for the control that emits every time the
   * value of the control changes in the UI or programmatically.
   * If the control is not present, null is returned.
   */
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return null;
  }
  /**
   * Sets synchronous validators for this directive.
   * @internal
   */
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  /**
   * Sets asynchronous validators for this directive.
   * @internal
   */
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  /**
   * @description
   * Synchronous validator function composed of all the synchronous validators registered with this
   * directive.
   */
  get validator() {
    return this._composedValidatorFn || null;
  }
  /**
   * @description
   * Asynchronous validator function composed of all the asynchronous validators registered with
   * this directive.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  /**
   * Internal function to register callbacks that should be invoked
   * when directive instance is being destroyed.
   * @internal
   */
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  /**
   * Internal function to invoke all registered "on destroy" callbacks.
   * Note: calling this function also clears the list of callbacks.
   * @internal
   */
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Resets the control with the provided value if the control is present.
   */
  reset(value = void 0) {
    if (this.control) this.control.reset(value);
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  /**
   * @description
   * The top-level form directive for the control.
   */
  get formDirective() {
    return null;
  }
  /**
   * @description
   * The path to this group.
   */
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  constructor() {
    super(...arguments);
    this._parent = null;
    this.name = null;
    this.valueAccessor = null;
  }
};
var AbstractControlStatus = class {
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    this._cd?.control?._touched?.();
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    this._cd?.control?._pristine?.();
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    this._cd?.control?._status?.();
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    this._cd?._submitted?.();
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
  "[class.ng-submitted]": "isSubmitted"
});
var NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static {
    this.\u0275fac = function NgControlStatus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgControlStatus,
      selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
      hostVars: 14,
      hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
        }
      },
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static {
    this.\u0275fac = function NgControlStatusGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgControlStatusGroup,
      selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
      hostVars: 16,
      hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
        }
      },
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
      host: ngGroupStatusHost
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive. You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
var ControlEvent = class {
};
var ValueChangeEvent = class extends ControlEvent {
  constructor(value, source) {
    super();
    this.value = value;
    this.source = source;
  }
};
var PristineChangeEvent = class extends ControlEvent {
  constructor(pristine, source) {
    super();
    this.pristine = pristine;
    this.source = source;
  }
};
var TouchedChangeEvent = class extends ControlEvent {
  constructor(touched, source) {
    super();
    this.touched = touched;
    this.source = source;
  }
};
var StatusChangeEvent = class extends ControlEvent {
  constructor(status, source) {
    super();
    this.status = status;
    this.source = source;
  }
};
var FormSubmittedEvent = class extends ControlEvent {
  constructor(source) {
    super();
    this.source = source;
  }
};
var FormResetEvent = class extends ControlEvent {
  constructor(source) {
    super();
    this.source = source;
  }
};
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  constructor(validators, asyncValidators) {
    this._pendingDirty = false;
    this._hasOwnPendingAsyncValidator = null;
    this._pendingTouched = false;
    this._onCollectionChange = () => {
    };
    this._parent = null;
    this._status = computed(() => this.statusReactive());
    this.statusReactive = signal(void 0);
    this._pristine = computed(() => this.pristineReactive());
    this.pristineReactive = signal(true);
    this._touched = computed(() => this.touchedReactive());
    this.touchedReactive = signal(false);
    this._events = new Subject();
    this.events = this._events.asObservable();
    this._onDisabledChange = [];
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  /**
   * Returns the function that is used to determine the validity of this control synchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  /**
   * Returns the function that is used to determine the validity of this control asynchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  /**
   * The parent control.
   */
  get parent() {
    return this._parent;
  }
  /**
   * The validation status of the control.
   *
   * @see {@link FormControlStatus}
   *
   * These status values are mutually exclusive, so a control cannot be
   * both valid AND invalid or invalid AND disabled.
   */
  get status() {
    return untracked(this.statusReactive);
  }
  set status(v) {
    untracked(() => this.statusReactive.set(v));
  }
  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid() {
    return this.status === VALID;
  }
  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid() {
    return this.status === INVALID;
  }
  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending() {
    return this.status == PENDING;
  }
  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled() {
    return this.status === DISABLED;
  }
  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   * @see {@link AbstractControl.status}
   *
   */
  get enabled() {
    return this.status !== DISABLED;
  }
  /**
   * A control is `pristine` if the user has not yet changed
   * the value in the UI.
   *
   * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get pristine() {
    return untracked(this.pristineReactive);
  }
  set pristine(v) {
    untracked(() => this.pristineReactive.set(v));
  }
  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty() {
    return !this.pristine;
  }
  /**
   * True if the control is marked as `touched`.
   *
   * A control is marked `touched` once the user has triggered
   * a `blur` event on it.
   */
  get touched() {
    return untracked(this.touchedReactive);
  }
  set touched(v) {
    untracked(() => this.touchedReactive.set(v));
  }
  /**
   * True if the control has not been marked as touched
   *
   * A control is `untouched` if the user has not yet triggered
   * a `blur` event on it.
   */
  get untouched() {
    return !this.touched;
  }
  /**
   * Reports the update strategy of the `AbstractControl` (meaning
   * the event on which the control updates itself).
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing synchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addValidators()` method instead.
   */
  setValidators(validators) {
    this._assignValidators(validators);
  }
  /**
   * Sets the asynchronous validators that are active on this control. Calling this
   * overwrites any existing asynchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addAsyncValidators()` method instead.
   */
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  /**
   * Add a synchronous validator or validators to this control, without affecting other validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect. If duplicate validator functions
   * are present in the `validators` array, only the first instance would be added to a form
   * control.
   *
   * @param validators The new validator function or functions to add to this control.
   */
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  /**
   * Add an asynchronous validator or validators to this control, without affecting other
   * validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect.
   *
   * @param validators The new asynchronous validator function or functions to add to this control.
   */
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Remove a synchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found,
   * it is ignored.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<string | null>('', Validators.required);
   * ctrl.removeValidators(Validators.required);
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<string | null>('', minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   *
   * ctrl.removeValidators(minValidator);
   * ```
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The validator or validators to remove.
   */
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  /**
   * Remove an asynchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found, it
   * is ignored.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The asynchronous validator or validators to remove.
   */
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Check whether a synchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<number | null>(0, Validators.required);
   * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<number | null>(0, minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   * ```
   *
   * @param validator The validator to check for presence. Compared by function reference.
   * @returns Whether the provided validator was found on this control.
   */
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  /**
   * Check whether an asynchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @param validator The asynchronous validator to check for presence. Compared by function
   *     reference.
   * @returns Whether the provided asynchronous validator was found on this control.
   */
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  /**
   * Empties out the synchronous validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearValidators() {
    this.validator = null;
  }
  /**
   * Empties out the async validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(opts = {}) {
    const changed = this.touched === false;
    this.touched = true;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(true, sourceControl));
    }
  }
  /**
   * Marks the control and all its descendant controls as `touched`.
   * @see {@link markAsTouched()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `emitEvent`: When true or not supplied (the default), the `events`
   * observable emits a `TouchedChangeEvent` with the `touched` property being `true`.
   * When false, no events are emitted.
   */
  markAllAsTouched(opts = {}) {
    this.markAsTouched({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsTouched(opts));
  }
  markAsUntouched(opts = {}) {
    const changed = this.touched === true;
    this.touched = false;
    this._pendingTouched = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true,
        emitEvent: opts.emitEvent,
        sourceControl
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(false, sourceControl));
    }
  }
  markAsDirty(opts = {}) {
    const changed = this.pristine === true;
    this.pristine = false;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(false, sourceControl));
    }
  }
  markAsPristine(opts = {}) {
    const changed = this.pristine === false;
    this.pristine = true;
    this._pendingDirty = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(true, sourceControl));
    }
  }
  markAsPending(opts = {}) {
    this.status = PENDING;
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  /**
   * Enables the control. This means the control is included in validation checks and
   * the aggregate value of its parent. Its status recalculates based on its value and
   * its validators.
   *
   * By default, if the control has children, all children are enabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configure options that control how the control propagates changes and
   * emits events when marked as untouched
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`,
   * `valueChanges` and `events`
   * observables emit events with the latest status and value when the control is enabled.
   * When false, no events are emitted.
   */
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts, sourceControl) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine({}, sourceControl);
      }
      this._parent._updateTouched({}, sourceControl);
    }
  }
  /**
   * Sets the parent of the control
   *
   * @param parent The new parent.
   */
  setParent(parent) {
    this._parent = parent;
  }
  /**
   * The raw value of this control. For most control implementations, the raw value will include
   * disabled children.
   */
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      const shouldHaveEmitted = this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
      }
    }
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  /** @internal */
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(shouldHaveEmitted, emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = {
        emitEvent: emitEvent !== false
      };
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = null;
        this.setErrors(errors, {
          emitEvent,
          shouldHaveEmitted
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      const shouldHaveEmitted = this._hasOwnPendingAsyncValidator?.emitEvent ?? false;
      this._hasOwnPendingAsyncValidator = null;
      return shouldHaveEmitted;
    }
    return false;
  }
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control. If a string is provided, passing it as a string literal will result in improved type
   * information. Likewise, if an array is provided, passing it `as const` will cause improved type
   * information to be available.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
   *
   * ### Retrieve a control in a FormArray
   *
   * When accessing an element inside a FormArray, you can use an element index.
   * For example, to get a `price` control from the first element in an `items` array you can use:
   *
   * * `this.form.get('items.0.price');`
   *
   * -OR-
   *
   * * `this.form.get(['items', 0, 'price']);`
   */
  get(path) {
    let currPath = path;
    if (currPath == null) return null;
    if (!Array.isArray(currPath)) currPath = currPath.split(".");
    if (currPath.length === 0) return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  /** @internal */
  _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (emitEvent || shouldHaveEmitted) {
      this._events.next(new StatusChangeEvent(this.status, changedControl));
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
    }
  }
  /** @internal */
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled()) return DISABLED;
    if (this.errors) return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
    if (this._anyControlsHaveStatus(INVALID)) return INVALID;
    return VALID;
  }
  /** @internal */
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  /** @internal */
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  /** @internal */
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  /** @internal */
  _updatePristine(opts, changedControl) {
    const newPristine = !this._anyControlsDirty();
    const changed = this.pristine !== newPristine;
    this.pristine = newPristine;
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, changedControl);
    }
    if (changed) {
      this._events.next(new PristineChangeEvent(this.pristine, changedControl));
    }
  }
  /** @internal */
  _updateTouched(opts = {}, changedControl) {
    this.touched = this._anyControlsTouched();
    this._events.next(new TouchedChangeEvent(this.touched, changedControl));
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, changedControl);
    }
  }
  /** @internal */
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  /** @internal */
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  /**
   * Check to see if parent has been marked artificially dirty.
   *
   * @internal
   */
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  /** @internal */
  _find(name) {
    return null;
  }
  /**
   * Internal implementation of the `setValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  /**
   * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
      // so we set `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  registerControl(name, control) {
    if (this.controls[name]) return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Remove a control from this group. In a strongly-typed group, required controls cannot be
   * removed.
   *
   * This method also updates the value and validity of the control.
   *
   * @param name The control name to remove from the collection
   * @param options Specifies whether this FormGroup instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeControl(name, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    if (control) this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   * the structure of the group, with control names as keys.
   *
   * @usageNotes
   * ### Set the complete value for the form group
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl(),
   *   last: new FormControl()
   * });
   *
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.setValue({first: 'Nancy', last: 'Drew'});
   * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
   * ```
   *
   * @throws When strict checks fail, such as setting the value of a control
   * that doesn't exist or if you exclude a value of a control that does exist.
   *
   * @param value The new value for the control that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events after the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormGroup`. It accepts an object with control
   * names as keys, and does its best to match the values to the correct controls
   * in the group.
   *
   * It accepts both super-sets and sub-sets of the group without throwing an error.
   *
   * @usageNotes
   * ### Patch the value for a form group
   *
   * ```
   * const form = new FormGroup({
   *    first: new FormControl(),
   *    last: new FormControl()
   * });
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.patchValue({first: 'Nancy'});
   * console.log(form.value);   // {first: 'Nancy', last: null}
   * ```
   *
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control value
   * is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null) return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(
          /* Guaranteed to be present, due to the outer forEach. */
          value[name],
          {
            onlySelf: true,
            emitEvent: options.emitEvent
          }
        );
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
   * the value of all descendants to their default values, or null if no defaults were provided.
   *
   * You reset to a specific form state by passing in a map of states
   * that matches the structure of your form, with control names as keys. The state
   * is a standalone value or a form state object with both a value and a disabled
   * status.
   *
   * @param value Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the group is reset.
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * @usageNotes
   *
   * ### Reset the form group values
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * console.log(form.value);  // {first: 'first name', last: 'last name'}
   *
   * form.reset({ first: 'name', last: 'last name' });
   *
   * console.log(form.value);  // {first: 'name', last: 'last name'}
   * ```
   *
   * ### Reset the form group values and disabled status
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * form.reset({
   *   first: {value: 'name', disabled: true},
   *   last: 'last'
   * });
   *
   * console.log(form.value);  // {last: 'last'}
   * console.log(form.get('first').status);  // 'DISABLED'
   * ```
   */
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the `FormGroup`, including any disabled controls.
   *
   * Retrieves all values regardless of disabled status.
   */
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this._reduceValue();
  }
  /** @internal */
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  /** @internal */
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  /** @internal */
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  /** @internal */
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  /** @internal */
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken("CallSetDisabledState", {
  providedIn: "root",
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control) _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor) _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop);
    dir.valueAccessor.registerOnTouched(noop);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change") updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== "submit") control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1) return `path: '${path.join(" -> ")}'`;
  if (path?.[0]) return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model")) return false;
  const change = changes["model"];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode)) _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never") return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var NgForm = class _NgForm extends ControlContainer {
  /**
   * @description
   * Returns whether the form submission has been triggered.
   */
  get submitted() {
    return untracked(this.submittedReactive);
  }
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._submitted = computed(() => this.submittedReactive());
    this.submittedReactive = signal(false);
    this._directives = /* @__PURE__ */ new Set();
    this.ngSubmit = new EventEmitter();
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  /** @nodoc */
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  /**
   * @description
   * The directive instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * The internal `FormGroup` instance.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it is always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Returns a map of the controls in this group.
   */
  get controls() {
    return this.form.controls;
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `NgModel` directive instance.
   */
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `NgModel` directive.
   *
   * @param dir The `NgModel` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `NgModel` instance from the internal list of directives
   *
   * @param dir The `NgModel` directive instance.
   */
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
      this._directives.delete(dir);
    });
  }
  /**
   * @description
   * Adds a new `NgModelGroup` directive instance to the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  /**
   * @description
   * Removes the `NgModelGroup` directive instance from the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
    });
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `NgControl` directive.
   *
   * @param dir The `NgControl` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  /**
   * @description
   * Sets the value for this `FormGroup`.
   *
   * @param value The new value
   */
  setValue(value) {
    this.control.setValue(value);
  }
  /**
   * @description
   * Method called when the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submittedReactive.set(true);
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submittedReactive.set(false);
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
  static {
    this.\u0275fac = function NgForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgForm,
      selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
      hostBindings: function NgForm_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
            return ctx.onSubmit($event);
          })("reset", function NgForm_reset_HostBindingHandler() {
            return ctx.onReset();
          });
        }
      },
      inputs: {
        options: [0, "ngFormOptions", "options"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.defaultValue = null;
    this._onChange = [];
    this._pendingChange = false;
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set
      // `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    this._pendingChange = false;
  }
  /**  @internal */
  _updateValue() {
  }
  /**  @internal */
  _anyControls(condition) {
    return false;
  }
  /**  @internal */
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  /** @internal */
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  /** @internal */
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  /** @internal */
  _forEachChild(cb) {
  }
  /** @internal */
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty) this.markAsDirty();
      if (this._pendingTouched) this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  /** @nodoc */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormGroup(this);
    }
  }
  /**
   * @description
   * The `FormGroup` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  /**
   * @description
   * The path to this group from the top-level directive.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /** @internal */
  _checkParentType() {
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AbstractFormGroupDirective_BaseFactory;
      return function AbstractFormGroupDirective_Factory(__ngFactoryType__) {
        return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(__ngFactoryType__ || _AbstractFormGroupDirective);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _AbstractFormGroupDirective,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = "";
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
  static {
    this.\u0275fac = function NgModelGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgModelGroup,
      selectors: [["", "ngModelGroup", ""]],
      inputs: {
        name: [0, "ngModelGroup", "name"]
      },
      exportAs: ["ngModelGroup"],
      features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var NgModel = class _NgModel extends NgControl {
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this.control = new FormControl();
    this._registered = false;
    this.name = "";
    this.update = new EventEmitter();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    this.formDirective && this.formDirective.removeControl(this);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return this._getPath(this.name);
  }
  /**
   * @description
   * The top-level directive for this control if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value emitted by `ngModelChange`.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if (!this._isStandalone()) {
      this._checkParentType();
    }
    this._checkName();
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
        throw formGroupNameException();
      } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
        throw modelParentException();
      }
    }
  }
  _checkName() {
    if (this.options && this.options.name) this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
  static {
    this.\u0275fac = function NgModel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgModel,
      selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
      inputs: {
        name: "name",
        isDisabled: [0, "disabled", "isDisabled"],
        model: [0, "ngModel", "model"],
        options: [0, "ngModelOptions", "options"]
      },
      outputs: {
        update: "ngModelChange"
      },
      exportAs: ["ngModel"],
      features: [\u0275\u0275ProvidersFeature([formControlBinding$1]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var \u0275NgNoValidate = class _\u0275NgNoValidate {
  static {
    this.\u0275fac = function \u0275NgNoValidate_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _\u0275NgNoValidate)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _\u0275NgNoValidate,
      selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
      hostAttrs: ["novalidate", ""]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      }
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NumberValueAccessor_BaseFactory;
      return function NumberValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(__ngFactoryType__ || _NumberValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NumberValueAccessor,
      selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
      hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var RadioControlRegistry = class _RadioControlRegistry {
  constructor() {
    this._accessors = [];
  }
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  /**
   * @description
   * Removes a control from the internal registry. For internal use only.
   */
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  /**
   * @description
   * Selects a radio button. For internal use only.
   */
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
  static {
    this.\u0275fac = function RadioControlRegistry_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RadioControlRegistry)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _RadioControlRegistry,
      factory: _RadioControlRegistry.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
    this.setDisabledStateFired = false;
    this.onChange = () => {
    };
    this.callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
      optional: true
    }) ?? setDisabledStateDefault;
  }
  /** @nodoc */
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  /** @nodoc */
  ngOnDestroy() {
    this._registry.remove(this);
  }
  /**
   * Sets the "checked" property value on the radio input element.
   * @nodoc
   */
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  /** @nodoc */
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  /**
   * Sets the "value" on the radio input element and unchecks it.
   *
   * @param value
   */
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName) this.name = this.formControlName;
  }
  static {
    this.\u0275fac = function RadioControlValueAccessor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RadioControlValueAccessor,
      selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
      hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
            return ctx.onChange();
          })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        name: "name",
        formControlName: "formControlName",
        value: "value"
      },
      features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RangeValueAccessor_BaseFactory;
      return function RangeValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(__ngFactoryType__ || _RangeValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RangeValueAccessor,
      selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
      hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var FormControlDirective = class _FormControlDirective extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  static {
    this._ngModelWarningSentOnce = false;
  }
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(
          previousForm,
          this,
          /* validateControlPresenceOnChange */
          false
        );
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(
        this.form,
        this,
        /* validateControlPresenceOnChange */
        false
      );
    }
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * The `FormControl` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
  static {
    this.\u0275fac = function FormControlDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormControlDirective,
      selectors: [["", "formControl", ""]],
      inputs: {
        form: [0, "formControl", "form"],
        isDisabled: [0, "disabled", "isDisabled"],
        model: [0, "ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      exportAs: ["ngForm"],
      features: [\u0275\u0275ProvidersFeature([formControlBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = class _FormGroupDirective extends ControlContainer {
  /**
   * @description
   * Reports whether the form submission has been triggered.
   */
  get submitted() {
    return untracked(this._submittedReactive);
  }
  // TODO(atscott): Remove once invalid API usage is cleaned up internally
  set submitted(value) {
    this._submittedReactive.set(value);
  }
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._submitted = computed(() => this._submittedReactive());
    this._submittedReactive = signal(false);
    this._onCollectionChange = () => this._updateDomValue();
    this.directives = [];
    this.form = null;
    this.ngSubmit = new EventEmitter();
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  /**
   * @description
   * Returns this directive's instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * Returns the `FormGroup` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `FormControlName` directive instance.
   */
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `FormControlName` directive
   *
   * @param dir The `FormControlName` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `FormControlName` instance from the internal list of directives
   *
   * @param dir The `FormControlName` directive instance.
   */
  removeControl(dir) {
    cleanUpControl(
      dir.control || null,
      dir,
      /* validateControlPresenceOnChange */
      false
    );
    removeListItem$1(this.directives, dir);
  }
  /**
   * Adds a new `FormGroupName` directive instance to the form.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
   *
   * @param dir The `FormGroupName` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `FormControlName` directive.
   *
   * @param dir The `FormControlName` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  /**
   * @description
   * Method called with the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this._submittedReactive.set(true);
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this._submittedReactive.set(false);
    this.form._events.next(new FormResetEvent(this.form));
  }
  /** @internal */
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    if (this.form) {
      const ctrl = this.form.get(dir.path);
      if (ctrl) {
        const isControlUpdated = cleanUpFormContainer(ctrl, dir);
        if (isControlUpdated) {
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    if (this._oldForm) {
      this._oldForm._registerOnCollectionChange(() => {
      });
    }
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
  static {
    this.\u0275fac = function FormGroupDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormGroupDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormGroupDirective,
      selectors: [["", "formGroup", ""]],
      hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
            return ctx.onSubmit($event);
          })("reset", function FormGroupDirective_reset_HostBindingHandler() {
            return ctx.onReset();
          });
        }
      },
      inputs: {
        form: [0, "formGroup", "form"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
  static {
    this.\u0275fac = function FormGroupName_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormGroupName,
      selectors: [["", "formGroupName", ""]],
      inputs: {
        name: [0, "formGroupName", "name"]
      },
      features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var FormArrayName = class _FormArrayName extends ControlContainer {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /**
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   * @throws If the directive does not have a valid parent.
   * @nodoc
   */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormArray(this);
  }
  /**
   * A lifecycle method called before the directive's instance is destroyed. For internal use only.
   * @nodoc
   */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormArray(this);
    }
  }
  /**
   * @description
   * The `FormArray` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormArray(this);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
  }
  static {
    this.\u0275fac = function FormArrayName_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormArrayName,
      selectors: [["", "formArrayName", ""]],
      inputs: {
        name: [0, "formArrayName", "name"]
      },
      features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var FormControlName = class _FormControlName extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  static {
    this._ngModelWarningSentOnce = false;
  }
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._added = false;
    this.name = null;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (!this._added) this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeControl(this);
    }
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
        throw ngModelGroupException();
      } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
        throw controlParentException(this.name);
      }
    }
  }
  _setUpControl() {
    this._checkParentType();
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
  static {
    this.\u0275fac = function FormControlName_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormControlName,
      selectors: [["", "formControlName", ""]],
      inputs: {
        name: [0, "formControlName", "name"],
        isDisabled: [0, "disabled", "isDisabled"],
        model: [0, "ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null) return `${value}`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on the select element.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  /** @internal */
  _registerOption() {
    return (this._idCounter++).toString();
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value)) return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SelectControlValueAccessor_BaseFactory;
      return function SelectControlValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(__ngFactoryType__ || _SelectControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _SelectControlValueAccessor,
      selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
      hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var NgSelectOption = class _NgSelectOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null) return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    this._setElementValue(value);
    if (this._select) this._select.writeValue(this._select.value);
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static {
    this.\u0275fac = function NgSelectOption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgSelectOption,
      selectors: [["option"]],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null) return `${value}`;
  if (typeof value === "string") value = `'${value}'`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on one or of more of the select's options.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  /**
   * Registers a function called when the control value changes
   * and writes an array of the selected options.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  /** @internal */
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SelectMultipleControlValueAccessor_BaseFactory;
      return function SelectMultipleControlValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(__ngFactoryType__ || _SelectMultipleControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _SelectMultipleControlValueAccessor,
      selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
      hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target);
          })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null) return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @internal */
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static {
    this.\u0275fac = function \u0275NgSelectMultipleOption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _\u0275NgSelectMultipleOption,
      selectors: [["option"]],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var AbstractValidatorDirective = class _AbstractValidatorDirective {
  constructor() {
    this._validator = nullValidator;
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input);
      this._validator = this._enabled ? this.createValidator(input) : nullValidator;
      if (this._onChange) {
        this._onChange();
      }
    }
  }
  /** @nodoc */
  validate(control) {
    return this._validator(control);
  }
  /** @nodoc */
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  /**
   * @description
   * Determines whether this validator should be active or not based on an input.
   * Base class implementation checks whether an input is defined (if the value is different from
   * `null` and `undefined`). Validator classes that extend this base class can override this
   * function with the logic specific to a particular validator directive.
   */
  enabled(input) {
    return input != null;
  }
  static {
    this.\u0275fac = function AbstractValidatorDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractValidatorDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _AbstractValidatorDirective,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "max";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (max) => maxValidator(max);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MaxValidator_BaseFactory;
      return function MaxValidator_Factory(__ngFactoryType__) {
        return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(__ngFactoryType__ || _MaxValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MaxValidator,
      selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MaxValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
        }
      },
      inputs: {
        max: "max"
      },
      features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var MinValidator = class _MinValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "min";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (min) => minValidator(min);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MinValidator_BaseFactory;
      return function MinValidator_Factory(__ngFactoryType__) {
        return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(__ngFactoryType__ || _MinValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MinValidator,
      selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MinValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
        }
      },
      inputs: {
        min: "min"
      },
      features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "required";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => requiredValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RequiredValidator_BaseFactory;
      return function RequiredValidator_Factory(__ngFactoryType__) {
        return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(__ngFactoryType__ || _RequiredValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RequiredValidator,
      selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
      hostVars: 1,
      hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("required", ctx._enabled ? "" : null);
        }
      },
      inputs: {
        required: "required"
      },
      features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  constructor() {
    super(...arguments);
    this.createValidator = (input) => requiredTrueValidator;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CheckboxRequiredValidator_BaseFactory;
      return function CheckboxRequiredValidator_Factory(__ngFactoryType__) {
        return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(__ngFactoryType__ || _CheckboxRequiredValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CheckboxRequiredValidator,
      selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("required", ctx._enabled ? "" : null);
        }
      },
      features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "email";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => emailValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275EmailValidator_BaseFactory;
      return function EmailValidator_Factory(__ngFactoryType__) {
        return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(__ngFactoryType__ || _EmailValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _EmailValidator,
      selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
      inputs: {
        email: "email"
      },
      features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR]
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "minlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (minlength) => minLengthValidator(minlength);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MinLengthValidator_BaseFactory;
      return function MinLengthValidator_Factory(__ngFactoryType__) {
        return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(__ngFactoryType__ || _MinLengthValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MinLengthValidator,
      selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
        }
      },
      inputs: {
        minlength: "minlength"
      },
      features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      }
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "maxlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (maxlength) => maxLengthValidator(maxlength);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MaxLengthValidator_BaseFactory;
      return function MaxLengthValidator_Factory(__ngFactoryType__) {
        return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(__ngFactoryType__ || _MaxLengthValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MaxLengthValidator,
      selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
        }
      },
      inputs: {
        maxlength: "maxlength"
      },
      features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      }
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "pattern";
    this.normalizeInput = (input) => input;
    this.createValidator = (input) => patternValidator(input);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275PatternValidator_BaseFactory;
      return function PatternValidator_Factory(__ngFactoryType__) {
        return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(__ngFactoryType__ || _PatternValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _PatternValidator,
      selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function PatternValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
        }
      },
      inputs: {
        pattern: "pattern"
      },
      features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      }
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
var \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
  static {
    this.\u0275fac = function \u0275InternalFormsSharedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _\u0275InternalFormsSharedModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _\u0275InternalFormsSharedModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
      // to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
   *     around from the back, and if index is greatly negative (less than `-length`), the result is
   * undefined. This behavior is the same as `Array.at(index)`.
   */
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  /**
   * Insert a new `AbstractControl` at the end of the array.
   *
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is added.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  push(control, options = {}) {
    this.controls.push(control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Insert a new `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to insert the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
   * This behavior is the same as `Array.splice(index, 0, control)`.
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is inserted.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Remove the control at the given `index` in the array.
   *
   * @param index Index in the array to remove the control.  If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), removes the first
   *     element. This behavior is the same as `Array.splice(index, 1)`.
   * @param options Specifies whether this FormArray instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Replace an existing control.
   *
   * @param index Index in the array to replace the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
   *     element. This behavior is the same as `Array.splice(index, 1, control)`.
   * @param control The `AbstractControl` control to replace the existing control
   * @param options Specifies whether this FormArray instance should emit events after an
   *     existing control is replaced with a new one.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * replaced with a new one. When false, no events are emitted.
   */
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Length of the control array.
   */
  get length() {
    return this.controls.length;
  }
  /**
   * Sets the value of the `FormArray`. It accepts an array that matches
   * the structure of the control.
   *
   * This method performs strict checks, and throws an error if you try
   * to set the value of a control that doesn't exist or if you exclude the
   * value of a control.
   *
   * @usageNotes
   * ### Set the values for the controls in the form array
   *
   * ```
   * const arr = new FormArray([
   *   new FormControl(),
   *   new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.setValue(['Nancy', 'Drew']);
   * console.log(arr.value);   // ['Nancy', 'Drew']
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormArray`. It accepts an array that matches the
   * structure of the control, and does its best to match the values to the correct
   * controls in the group.
   *
   * It accepts both super-sets and sub-sets of the array without throwing an error.
   *
   * @usageNotes
   * ### Patch the values for controls in a form array
   *
   * ```
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.patchValue(['Nancy']);
   * console.log(arr.value);   // ['Nancy', null]
   * ```
   *
   * @param value Array of latest values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control
   * value is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null) return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
   * value of all descendants to null or null maps.
   *
   * You reset to a specific form state by passing in an array of states
   * that matches the structure of the control. The state is a standalone value
   * or a form state object with both a value and a disabled status.
   *
   * @usageNotes
   * ### Reset the values in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * arr.reset(['name', 'last name']);
   *
   * console.log(arr.value);  // ['name', 'last name']
   * ```
   *
   * ### Reset the values in a form array and the disabled status for the first control
   *
   * ```
   * arr.reset([
   *   {value: 'name', disabled: true},
   *   'last'
   * ]);
   *
   * console.log(arr.value);  // ['last']
   * console.log(arr.at(0).status);  // 'DISABLED'
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the array, including any disabled controls.
   *
   * Reports all values regardless of disabled status.
   */
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  /**
   * Remove all controls in the `FormArray`.
   *
   * @param options Specifies whether this FormArray instance should emit events after all
   *     controls are removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when all controls
   * in this FormArray instance are removed. When false, no events are emitted.
   *
   * @usageNotes
   * ### Remove all elements from a FormArray
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.length);  // 2
   *
   * arr.clear();
   * console.log(arr.length);  // 0
   * ```
   *
   * It's a simpler and more efficient alternative to removing all elements one by one:
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   *
   * while (arr.length) {
   *    arr.removeAt(0);
   * }
   * ```
   */
  clear(options = {}) {
    if (this.controls.length < 1) return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Adjusts a negative index by summing it with the length of the array. For very negative
   * indices, the result may remain negative.
   * @internal
   */
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  /** @internal */
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  /** @internal */
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled) return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  /** @internal */
  _find(name) {
    return this.at(name) ?? null;
  }
};
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = class _FormBuilder {
  constructor() {
    this.useNonNullable = false;
  }
  /**
   * @description
   * Returns a FormBuilder in which automatically constructed `FormControl` elements
   * have `{nonNullable: true}` and are non-nullable.
   *
   * **Constructing non-nullable controls**
   *
   * When constructing a control, it will be non-nullable, and will reset to its initial value.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.control('Alex'); // FormControl<string>
   * name.reset();
   * console.log(name); // 'Alex'
   * ```
   *
   * **Constructing non-nullable groups or arrays**
   *
   * When constructing a group or array, all automatically created inner controls will be
   * non-nullable, and will reset to their initial values.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
   * name.reset();
   * console.log(name); // {who: 'Alex'}
   * ```
   * **Constructing *nullable* fields on groups or arrays**
   *
   * It is still possible to have a nullable field. In particular, any `FormControl` which is
   * *already* constructed will not be altered. For example:
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * // FormGroup<{who: FormControl<string|null>}>
   * let name = nnfb.group({who: new FormControl('Alex')});
   * name.reset(); console.log(name); // {who: null}
   * ```
   *
   * Because the inner control is constructed explicitly by the caller, the builder has
   * no control over how it is created, and cannot exclude the `null`.
   */
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  /**
   * @description
   * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
   * containing all the keys and corresponding inner control types.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param options Configuration options object for the `FormRecord`. The object should have the
   * `AbstractControlOptions` type and might contain the following fields:
   * * `validators`: A synchronous validator function, or an array of validator functions.
   * * `asyncValidators`: A single async validator or array of async validator functions.
   * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
   * | submit').
   */
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  /**
   * @description
   * Constructs a new `FormControl` with the given state, validators and options. Sets
   * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
   * control will be nullable. Accepts a single generic argument, which is the type  of the
   * control's value.
   *
   * @param formState Initializes the control with an initial state value, or
   * with an object that contains both a value and a disabled status.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or a `FormControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator
   * functions.
   *
   * @usageNotes
   *
   * ### Initialize a control as disabled
   *
   * The following example returns a control with an initial value in a disabled state.
   *
   * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
   * </code-example>
   */
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  /**
   * Constructs a new `FormArray` from the given array of configurations,
   * validators and options. Accepts a single generic argument, which is the type of each control
   * inside the array.
   *
   * @param controls An array of child controls or control configs. Each child control is given an
   *     index when it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
   *     `AbstractControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions.
   */
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  /** @internal */
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  /** @internal */
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
  static {
    this.\u0275fac = function FormBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormBuilder)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _FormBuilder,
      factory: _FormBuilder.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NonNullableFormBuilder = class _NonNullableFormBuilder {
  static {
    this.\u0275fac = function NonNullableFormBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NonNullableFormBuilder)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NonNullableFormBuilder,
      factory: () => (() => inject(FormBuilder).nonNullable)(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  /**
   * Like `FormBuilder#control`, except the resulting control is untyped.
   */
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  /**
   * Like `FormBuilder#array`, except the resulting array is untyped.
   */
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275UntypedFormBuilder_BaseFactory;
      return function UntypedFormBuilder_Factory(__ngFactoryType__) {
        return (\u0275UntypedFormBuilder_BaseFactory || (\u0275UntypedFormBuilder_BaseFactory = \u0275\u0275getInheritedFactory(_UntypedFormBuilder)))(__ngFactoryType__ || _UntypedFormBuilder);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _UntypedFormBuilder,
      factory: _UntypedFormBuilder.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var VERSION = new Version("18.2.14");
var FormsModule = class _FormsModule {
  /**
   * @description
   * Provides options for configuring the forms module.
   *
   * @param opts An object of configuration options
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static {
    this.\u0275fac = function FormsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _FormsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [\u0275InternalFormsSharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var ReactiveFormsModule = class _ReactiveFormsModule {
  /**
   * @description
   * Provides options for configuring the reactive forms module.
   *
   * @param opts An object of configuration options
   * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
   * binding is used with reactive form directives.
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static {
    this.\u0275fac = function ReactiveFormsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactiveFormsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ReactiveFormsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [\u0275InternalFormsSharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// src/app/ai-chat/ai-chat.component.ts
var _c0 = ["chatWindow"];
var _forTrack02 = ($index, $item) => $item.timestamp;
function AiChatComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 2);
  }
}
function AiChatComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 3);
  }
}
function AiChatComponent_Conditional_3_For_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275elementEnd();
  }
}
function AiChatComponent_Conditional_3_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, AiChatComponent_Conditional_3_For_15_Conditional_1_Template, 2, 0, "div", 23);
    \u0275\u0275elementStart(2, "div", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    \u0275\u0275classProp("chat-msg--user", msg_r3.role === "user")("chat-msg--bot", msg_r3.role === "bot");
    \u0275\u0275advance();
    \u0275\u0275conditional(msg_r3.role === "bot" ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r3.text);
  }
}
function AiChatComponent_Conditional_3_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 23);
    \u0275\u0275element(2, "i", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25);
    \u0275\u0275element(4, "span")(5, "span")(6, "span");
    \u0275\u0275elementEnd()();
  }
}
function AiChatComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    \u0275\u0275element(3, "i", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8)(5, "span", 9);
    \u0275\u0275text(6, "Resume Assistant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 10);
    \u0275\u0275element(8, "span", 11);
    \u0275\u0275text(9, " Ask me anything ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 12);
    \u0275\u0275listener("click", function AiChatComponent_Conditional_3_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleChat());
    });
    \u0275\u0275element(11, "i", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 13, 0);
    \u0275\u0275repeaterCreate(14, AiChatComponent_Conditional_3_For_15_Template, 4, 6, "div", 14, _forTrack02);
    \u0275\u0275template(16, AiChatComponent_Conditional_3_Conditional_16_Template, 7, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 16)(18, "button", 17);
    \u0275\u0275listener("click", function AiChatComponent_Conditional_3_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.inputText.set("What are your skills?");
      return \u0275\u0275resetView(ctx_r1.send());
    });
    \u0275\u0275text(19, "Skills");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 17);
    \u0275\u0275listener("click", function AiChatComponent_Conditional_3_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.inputText.set("Tell me about your projects");
      return \u0275\u0275resetView(ctx_r1.send());
    });
    \u0275\u0275text(21, "Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 17);
    \u0275\u0275listener("click", function AiChatComponent_Conditional_3_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.inputText.set("How can I contact you?");
      return \u0275\u0275resetView(ctx_r1.send());
    });
    \u0275\u0275text(23, "Contact");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 18)(25, "input", 19);
    \u0275\u0275listener("ngModelChange", function AiChatComponent_Conditional_3_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.inputText.set($event));
    })("keydown", function AiChatComponent_Conditional_3_Template_input_keydown_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 20);
    \u0275\u0275listener("click", function AiChatComponent_Conditional_3_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.send());
    });
    \u0275\u0275element(27, "i", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.messages());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isTyping() ? 16 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngModel", ctx_r1.inputText());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.inputText().trim());
  }
}
var FAQ = [
  {
    patterns: ["skill", "technology", "tech", "stack", "know", "angular", "react", "typescript"],
    answer: "My core stack is Angular 18+, TypeScript, and RxJS for frontend. I also work with React.js, Node.js, Express and MongoDB. For styling I use Tailwind CSS and plain SCSS."
  },
  {
    patterns: ["experience", "year", "background", "work", "job", "worked"],
    answer: "I have 3.6 years of professional experience \u2014 primarily at Infosys in Pune building enterprise Angular applications, real-time dashboards and AI-assisted UI features."
  },
  {
    patterns: ["project", "portfolio", "built", "made"],
    answer: "My featured projects include a Smart Appointment Scheduler (Angular + Node.js + MongoDB), a Full-Stack Task Manager (React + JWT), and this portfolio site with an AI assistant. Scroll up to the Projects section to explore them!"
  },
  {
    patterns: ["contact", "hire", "email", "reach", "available", "job", "opportunity", "role"],
    answer: "I'm actively looking for Frontend Engineer roles in UAE and remote internationally. You can reach me at rohinigaikwad7057@gmail.com or connect on LinkedIn. Use the contact form above!"
  },
  {
    patterns: ["resume", "cv", "download"],
    answer: 'You can download my resume PDF from the Resume section or by clicking the "Resume" button in the navigation bar.'
  },
  {
    patterns: ["location", "abu dhabi", "dubai", "uae", "where", "based"],
    answer: "I'm based in Abu Dhabi, UAE. I'm open to on-site roles in Dubai, Abu Dhabi, and remote opportunities globally."
  },
  {
    patterns: ["education", "degree", "study", "college", "university"],
    answer: "I hold a Bachelor of Engineering in Computer Science (First Class with Distinction) from Sir Visvesvaraya Institute of Technology."
  }
];
var AiChatComponent = class _AiChatComponent {
  constructor() {
    this.isOpen = signal(false);
    this.inputText = signal("");
    this.messages = signal([
      {
        role: "bot",
        text: "Hi! I'm Rohini's AI assistant. Ask me about her skills, projects, experience or how to get in touch.",
        timestamp: /* @__PURE__ */ new Date()
      }
    ]);
    this.isTyping = signal(false);
  }
  toggleChat() {
    this.isOpen.update((v) => !v);
  }
  send() {
    const text = this.inputText().trim();
    if (!text)
      return;
    this.messages.update((msgs) => [...msgs, {
      role: "user",
      text,
      timestamp: /* @__PURE__ */ new Date()
    }]);
    this.inputText.set("");
    this.isTyping.set(true);
    setTimeout(() => {
      this.isTyping.set(false);
      this.messages.update((msgs) => [...msgs, {
        role: "bot",
        text: this.getReply(text),
        timestamp: /* @__PURE__ */ new Date()
      }]);
    }, 800);
  }
  onKeydown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom() {
    if (this.chatWindow?.nativeElement) {
      const el = this.chatWindow.nativeElement;
      el.scrollTop = el.scrollHeight;
    }
  }
  getReply(input) {
    const lower = input.toLowerCase();
    for (const faq of FAQ) {
      if (faq.patterns.some((p) => lower.includes(p))) {
        return faq.answer;
      }
    }
    return "I'm not sure about that! Try asking about Rohini's skills, experience, projects, or how to contact her.";
  }
  static {
    this.\u0275fac = function AiChatComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AiChatComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AiChatComponent, selectors: [["app-ai-chat"]], viewQuery: function AiChatComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chatWindow = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 5, consts: [["chatWindow", ""], ["aria-label", "Open AI assistant chat", "aria-controls", "ai-chat-panel", 1, "chat-fab", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-times"], ["aria-hidden", "true", 1, "fas", "fa-robot"], ["id", "ai-chat-panel", "role", "dialog", "aria-label", "AI Resume Assistant", "aria-modal", "false", 1, "chat-panel"], [1, "chat-header"], ["aria-hidden", "true", 1, "chat-header__avatar"], [1, "fas", "fa-robot"], [1, "chat-header__info"], [1, "chat-header__name"], [1, "chat-header__status"], ["aria-hidden", "true", 1, "chat-header__dot"], ["aria-label", "Close chat", 1, "chat-close", 3, "click"], ["role", "log", "aria-live", "polite", "aria-label", "Chat messages", 1, "chat-messages"], [1, "chat-msg", 3, "chat-msg--user", "chat-msg--bot"], ["role", "status", "aria-label", "Assistant is typing", 1, "chat-msg", "chat-msg--bot"], ["aria-label", "Quick questions", 1, "chat-suggestions"], [1, "chat-suggestion", 3, "click"], [1, "chat-input"], ["type", "text", "placeholder", "Ask about skills, projects...", "aria-label", "Type your message", "autocomplete", "off", 1, "chat-input__field", 3, "ngModelChange", "keydown", "ngModel"], ["aria-label", "Send message", 1, "chat-input__send", 3, "click", "disabled"], ["aria-hidden", "true", 1, "fas", "fa-paper-plane"], [1, "chat-msg"], ["aria-hidden", "true", 1, "chat-msg__avatar"], [1, "chat-msg__bubble"], [1, "chat-msg__bubble", "chat-msg__typing"]], template: function AiChatComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 1);
        \u0275\u0275listener("click", function AiChatComponent_Template_button_click_0_listener() {
          return ctx.toggleChat();
        });
        \u0275\u0275template(1, AiChatComponent_Conditional_1_Template, 1, 0, "i", 2)(2, AiChatComponent_Conditional_2_Template, 1, 0, "i", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, AiChatComponent_Conditional_3_Template, 28, 3, "div", 4);
      }
      if (rf & 2) {
        \u0275\u0275classProp("chat-fab--open", ctx.isOpen());
        \u0275\u0275attribute("aria-expanded", ctx.isOpen());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isOpen() ? 1 : 2);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isOpen() ? 3 : -1);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.chat-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1.75rem;\n  right: 1.75rem;\n  z-index: 1000;\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: var(--color-accent);\n  color: #000;\n  border: none;\n  cursor: pointer;\n  font-size: 1.125rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 20px rgba(6, 182, 212, 0.4);\n  transition: all var(--transition);\n}\n.chat-fab[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08);\n  box-shadow: 0 6px 28px rgba(6, 182, 212, 0.5);\n}\n.chat-fab--open[_ngcontent-%COMP%] {\n  background: var(--color-surface-3);\n  color: var(--color-text-primary);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n}\n.chat-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 5.5rem;\n  right: 1.75rem;\n  z-index: 999;\n  width: 340px;\n  height: 480px;\n  display: flex;\n  flex-direction: column;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border-hover);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);\n  animation: _ngcontent-%COMP%_chatSlideIn 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_chatSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(12px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (max-width: 480px) {\n  .chat-panel[_ngcontent-%COMP%] {\n    right: 0.75rem;\n    left: 0.75rem;\n    width: auto;\n    bottom: 5rem;\n    height: 420px;\n    border-radius: var(--radius-lg);\n  }\n  .chat-fab[_ngcontent-%COMP%] {\n    bottom: 1.25rem;\n    right: 1.25rem;\n    width: 46px;\n    height: 46px;\n    font-size: 1rem;\n  }\n}\n.chat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem 1rem;\n  background: var(--color-surface-2);\n  border-bottom: 1px solid var(--color-border);\n  flex-shrink: 0;\n}\n.chat-header__avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background: var(--color-accent-glow);\n  color: var(--color-accent);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9375rem;\n  flex-shrink: 0;\n}\n.chat-header__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n.chat-header__name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--color-text-primary);\n  line-height: 1.2;\n}\n.chat-header__status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.75rem;\n  color: var(--color-text-secondary);\n}\n.chat-header__dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--color-green);\n  flex-shrink: 0;\n}\n.chat-close[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: var(--color-surface-3);\n  border: 1px solid var(--color-border);\n  color: var(--color-text-secondary);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  transition: all var(--transition);\n  flex-shrink: 0;\n}\n.chat-close[_ngcontent-%COMP%]:hover {\n  background: var(--color-accent-glow);\n  color: var(--color-accent);\n  border-color: var(--color-accent);\n}\n.chat-messages[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0.875rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  scroll-behavior: smooth;\n}\n.chat-messages[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.chat-messages[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.chat-messages[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--color-surface-3);\n  border-radius: 2px;\n}\n.chat-msg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 0.5rem;\n}\n.chat-msg--user[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.chat-msg__avatar[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--color-accent-glow);\n  color: var(--color-accent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.6875rem;\n  flex-shrink: 0;\n}\n.chat-msg__bubble[_ngcontent-%COMP%] {\n  max-width: 78%;\n  padding: 0.5rem 0.875rem;\n  border-radius: 12px;\n  font-size: 0.8125rem;\n  line-height: 1.6;\n  word-break: break-word;\n}\n.chat-msg--bot[_ngcontent-%COMP%]   .chat-msg__bubble[_ngcontent-%COMP%] {\n  background: var(--color-surface-2);\n  border: 1px solid var(--color-border);\n  color: var(--color-text-primary);\n  border-bottom-left-radius: 4px;\n}\n.chat-msg--user[_ngcontent-%COMP%]   .chat-msg__bubble[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n  color: #000;\n  font-weight: 500;\n  border-bottom-right-radius: 4px;\n}\n.chat-msg__typing[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  padding: 0.625rem 0.875rem;\n  min-width: 52px;\n}\n.chat-msg__typing[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--color-text-muted);\n  animation: _ngcontent-%COMP%_typingDot 1.2s ease-in-out infinite;\n  display: block;\n}\n.chat-msg__typing[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.chat-msg__typing[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes _ngcontent-%COMP%_typingDot {\n  0%, 60%, 100% {\n    transform: translateY(0);\n    opacity: 0.4;\n  }\n  30% {\n    transform: translateY(-5px);\n    opacity: 1;\n  }\n}\n.chat-suggestions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n  padding: 0.5rem 1rem;\n  overflow-x: auto;\n  flex-shrink: 0;\n  border-top: 1px solid var(--color-border);\n}\n.chat-suggestions[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.chat-suggestion[_ngcontent-%COMP%] {\n  background: var(--color-surface-2);\n  border: 1px solid var(--color-border);\n  color: var(--color-text-secondary);\n  font-size: 0.75rem;\n  font-weight: 500;\n  padding: 0.3125rem 0.75rem;\n  border-radius: 100px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all var(--transition);\n  font-family: var(--font-sans);\n}\n.chat-suggestion[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n  background: var(--color-accent-glow);\n}\n.chat-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border-top: 1px solid var(--color-border);\n  background: var(--color-surface-2);\n  flex-shrink: 0;\n}\n.chat-input__field[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--color-surface-3);\n  border: 1px solid var(--color-border);\n  border-radius: 100px;\n  padding: 0.5rem 0.875rem;\n  font-size: 0.8125rem;\n  color: var(--color-text-primary);\n  font-family: var(--font-sans);\n  outline: none;\n  transition: border-color var(--transition);\n  min-width: 0;\n}\n.chat-input__field[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-accent);\n}\n.chat-input__field[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n.chat-input__send[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: var(--color-accent);\n  color: #000;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8125rem;\n  transition: all var(--transition);\n  flex-shrink: 0;\n}\n.chat-input__send[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-accent-light);\n  transform: scale(1.08);\n}\n.chat-input__send[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=ai-chat.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AiChatComponent, { className: "AiChatComponent", filePath: "src\\app\\ai-chat\\ai-chat.component.ts", lineNumber: 47 });
})();

// src/app/contact/contact.component.ts
var _forTrack03 = ($index, $item) => $item.label;
var _c02 = (a0) => ({ "form-input--error": a0 });
function ContactComponent_For_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16)(1, "div", 18);
    \u0275\u0275element(2, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tile_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", tile_r1.href, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", tile_r1.ariaLabel);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(tile_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tile_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tile_r1.value);
  }
}
function ContactComponent_For_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275element(2, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tile_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(tile_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tile_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tile_r1.value);
  }
}
function ContactComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ContactComponent_For_19_Conditional_0_Template, 8, 6, "a", 16)(1, ContactComponent_For_19_Conditional_1_Template, 8, 4, "div", 17);
  }
  if (rf & 2) {
    const tile_r1 = ctx.$implicit;
    \u0275\u0275conditional(tile_r1.href ? 0 : 1);
  }
}
function ContactComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 22);
    \u0275\u0275element(2, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Message sent!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 24);
    \u0275\u0275listener("click", function ContactComponent_Conditional_25_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetForm());
    });
    \u0275\u0275text(8, " Send another message ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.statusMessage());
  }
}
function ContactComponent_Conditional_26_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "Please enter your name (at least 2 characters)");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_26_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "Please enter a valid email address");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_26_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "Please enter a message (at least 10 characters)");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_26_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.statusMessage(), " ");
  }
}
function ContactComponent_Conditional_26_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 40);
    \u0275\u0275text(1, " Sending... ");
  }
}
function ContactComponent_Conditional_26_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 41);
    \u0275\u0275text(1, " Send Message ");
  }
}
function ContactComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 25, 0);
    \u0275\u0275listener("ngSubmit", function ContactComponent_Conditional_26_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r4);
      const contactForm_r5 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSubmit(contactForm_r5));
    });
    \u0275\u0275elementStart(2, "div", 26)(3, "div", 27)(4, "label", 28);
    \u0275\u0275text(5, "Full name ");
    \u0275\u0275elementStart(6, "span", 19);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Conditional_26_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formData.name, $event) || (ctx_r2.formData.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ContactComponent_Conditional_26_Conditional_9_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 27)(11, "label", 31);
    \u0275\u0275text(12, "Email address ");
    \u0275\u0275elementStart(13, "span", 19);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Conditional_26_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formData.email, $event) || (ctx_r2.formData.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ContactComponent_Conditional_26_Conditional_16_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 27)(18, "label", 33);
    \u0275\u0275text(19, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Conditional_26_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formData.subject, $event) || (ctx_r2.formData.subject = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 27)(22, "label", 35);
    \u0275\u0275text(23, "Message ");
    \u0275\u0275elementStart(24, "span", 19);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "textarea", 36);
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Conditional_26_Template_textarea_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formData.message, $event) || (ctx_r2.formData.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, ContactComponent_Conditional_26_Conditional_27_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, ContactComponent_Conditional_26_Conditional_28_Template, 3, 1, "div", 37);
    \u0275\u0275elementStart(29, "button", 38);
    \u0275\u0275template(30, ContactComponent_Conditional_26_Conditional_30_Template, 2, 0)(31, ContactComponent_Conditional_26_Conditional_31_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const contactForm_r5 = \u0275\u0275reference(1);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formData.name);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c02, contactForm_r5.submitted && contactForm_r5.controls["name"].invalid));
    \u0275\u0275advance();
    \u0275\u0275conditional(contactForm_r5.submitted && contactForm_r5.controls["name"].invalid ? 9 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formData.email);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c02, contactForm_r5.submitted && contactForm_r5.controls["email"].invalid));
    \u0275\u0275advance();
    \u0275\u0275conditional(contactForm_r5.submitted && contactForm_r5.controls["email"].invalid ? 16 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formData.subject);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formData.message);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(18, _c02, contactForm_r5.submitted && contactForm_r5.controls["message"].invalid));
    \u0275\u0275advance();
    \u0275\u0275conditional(contactForm_r5.submitted && contactForm_r5.controls["message"].invalid ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.formStatus() === "error" ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.formStatus() === "sending");
    \u0275\u0275attribute("aria-busy", ctx_r2.formStatus() === "sending");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.formStatus() === "sending" ? 30 : 31);
  }
}
var ContactComponent = class _ContactComponent {
  constructor() {
    this.formStatus = signal("idle");
    this.statusMessage = signal("");
    this.formData = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
    this.contactTiles = [
      {
        icon: "fas fa-map-marker-alt",
        label: "Location",
        value: "Abu Dhabi, UAE",
        href: null,
        ariaLabel: "Location: Abu Dhabi, UAE"
      },
      {
        icon: "fas fa-envelope",
        label: "Email",
        value: "rohinigaikwad7057@gmail.com",
        href: "mailto:rohinigaikwad7057@gmail.com",
        ariaLabel: "Send email to rohinigaikwad7057@gmail.com"
      },
      {
        icon: "fab fa-linkedin",
        label: "LinkedIn",
        value: "linkedin.com/in/rohini-gaikwad7057",
        href: "https://www.linkedin.com/in/rohini-gaikwad7057/",
        ariaLabel: "View LinkedIn profile (opens in new tab)"
      },
      {
        icon: "fab fa-github",
        label: "GitHub",
        value: "github.com/rohinigaikwad7057",
        href: "https://github.com/rohinigaikwad7057",
        ariaLabel: "View GitHub profile (opens in new tab)"
      }
    ];
  }
  onSubmit(form) {
    return __async(this, null, function* () {
      if (!form.valid)
        return;
      this.formStatus.set("sending");
      try {
        yield this.simulateSend();
        this.formStatus.set("success");
        this.statusMessage.set("Thanks for reaching out! I'll get back to you within 24 hours.");
        form.resetForm();
        this.formData = { name: "", email: "", subject: "", message: "" };
      } catch {
        this.formStatus.set("error");
        this.statusMessage.set("Something went wrong. Please email me directly at rohinigaikwad7057@gmail.com");
      }
    });
  }
  resetForm() {
    this.formStatus.set("idle");
    this.statusMessage.set("");
  }
  simulateSend() {
    return new Promise((resolve) => setTimeout(resolve, 1200));
  }
  static {
    this.\u0275fac = function ContactComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 1, consts: [["contactForm", "ngForm"], [1, "section", "container", "contact"], ["data-aos", "fade-up", 1, "section-header", "centered"], [1, "section-tag"], [1, "section-title"], [1, "section-subtitle"], [1, "contact__layout"], ["data-aos", "fade-right", 1, "contact__info"], [1, "contact__info-header"], ["href", "mailto:rohinigaikwad7057@gmail.com"], [1, "contact__tiles"], [1, "contact__availability"], ["aria-hidden", "true", 1, "contact__avail-dot"], ["data-aos", "fade-left", "data-aos-delay", "100", 1, "contact__form-wrap"], ["role", "alert", 1, "contact__success"], ["novalidate", "", "aria-label", "Contact form", 1, "contact__form"], ["target", "_blank", "rel", "noopener noreferrer", 1, "contact__tile", 3, "href"], [1, "contact__tile"], [1, "contact__tile-icon"], ["aria-hidden", "true"], [1, "contact__tile-label"], [1, "contact__tile-value"], [1, "contact__success-icon"], ["aria-hidden", "true", 1, "fas", "fa-check-circle"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["novalidate", "", "aria-label", "Contact form", 1, "contact__form", 3, "ngSubmit"], [1, "form-row"], [1, "form-group"], ["for", "contactName", 1, "form-label"], ["id", "contactName", "type", "text", "name", "name", "required", "", "minlength", "2", "placeholder", "Rohini Gaikwad", "autocomplete", "name", "aria-required", "true", 1, "form-input", 3, "ngModelChange", "ngModel", "ngClass"], ["role", "alert", 1, "form-error"], ["for", "contactEmail", 1, "form-label"], ["id", "contactEmail", "type", "email", "name", "email", "required", "", "email", "", "placeholder", "you@example.com", "autocomplete", "email", "aria-required", "true", 1, "form-input", 3, "ngModelChange", "ngModel", "ngClass"], ["for", "contactSubject", 1, "form-label"], ["id", "contactSubject", "type", "text", "name", "subject", "placeholder", "Frontend Engineer opportunity", "autocomplete", "off", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "contactMessage", 1, "form-label"], ["id", "contactMessage", "name", "message", "required", "", "minlength", "10", "rows", "5", "placeholder", "Hi Rohini, I'd like to discuss a Frontend Engineer role...", "aria-required", "true", 1, "form-input", "form-textarea", 3, "ngModelChange", "ngModel", "ngClass"], ["role", "alert", 1, "form-error-banner"], ["type", "submit", 1, "btn", "btn-primary", "form-submit", 3, "disabled"], ["aria-hidden", "true", 1, "fas", "fa-exclamation-triangle"], ["aria-hidden", "true", 1, "form-spinner"], ["aria-hidden", "true", 1, "fas", "fa-paper-plane"]], template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "span", 3);
        \u0275\u0275text(3, "Get in touch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2", 4);
        \u0275\u0275text(5, "Let's work together");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, " I'm actively looking for Frontend Engineer roles in UAE and remote internationally. Drop me a message and I'll respond within 24 hours. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "h3");
        \u0275\u0275text(12, "Contact information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p");
        \u0275\u0275text(14, "Prefer email? Reach me directly at ");
        \u0275\u0275elementStart(15, "a", 9);
        \u0275\u0275text(16, "rohinigaikwad7057@gmail.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 10);
        \u0275\u0275repeaterCreate(18, ContactComponent_For_19_Template, 2, 1, null, null, _forTrack03);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 11);
        \u0275\u0275element(21, "span", 12);
        \u0275\u0275elementStart(22, "span");
        \u0275\u0275text(23, "Available for new opportunities");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 13);
        \u0275\u0275template(25, ContactComponent_Conditional_25_Template, 9, 1, "div", 14)(26, ContactComponent_Conditional_26_Template, 32, 20, "form", 15);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275repeater(ctx.contactTiles);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.formStatus() === "success" ? 25 : 26);
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, EmailValidator, NgModel, NgForm, NgClass], styles: ["\n\n.contact__layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 380px 1fr;\n  gap: 4rem;\n  align-items: start;\n}\n.contact__info-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.contact__info-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n.contact__info-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text-secondary);\n}\n.contact__info-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.contact__tiles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin-bottom: 1.5rem;\n}\n.contact__tile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  text-decoration: none;\n  transition: all var(--transition);\n}\na.contact__tile[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-border-hover);\n  transform: translateX(4px);\n}\n.contact__tile-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  background: var(--color-accent-glow);\n  color: var(--color-accent);\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.contact__tile[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1875rem;\n  min-width: 0;\n}\n.contact__tile-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n}\n.contact__tile-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--color-text-primary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.contact__availability[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.25rem;\n  background: rgba(34, 197, 94, 0.08);\n  border: 1px solid rgba(34, 197, 94, 0.2);\n  border-radius: var(--radius-md);\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--color-green);\n}\n.contact__avail-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--color-green);\n  animation: _ngcontent-%COMP%_livePulse 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_livePulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);\n  }\n  50% {\n    box-shadow: 0 0 0 5px rgba(34, 197, 94, 0);\n  }\n}\n.contact__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: 2rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--color-text-secondary);\n}\n.form-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  margin-left: 2px;\n}\n.form-input[_ngcontent-%COMP%] {\n  background: var(--color-surface-2);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  padding: 0.75rem 1rem;\n  font-family: var(--font-sans);\n  font-size: 0.9375rem;\n  color: var(--color-text-primary);\n  width: 100%;\n  transition: border-color var(--transition);\n  outline: none;\n  appearance: none;\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-accent);\n  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.12);\n}\n.form-input--error[_ngcontent-%COMP%] {\n  border-color: #ef4444 !important;\n}\n.form-input--error[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12) !important;\n}\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 120px;\n}\n.form-error[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #ef4444;\n  margin-top: 0.25rem;\n}\n.form-error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.875rem 1rem;\n  background: rgba(239, 68, 68, 0.08);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  border-radius: var(--radius-sm);\n  font-size: 0.875rem;\n  color: #ef4444;\n}\n.form-submit[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  min-width: 160px;\n  justify-content: center;\n}\n.form-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.form-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  border-top-color: #000;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.contact__success[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 1rem;\n  padding: 3rem;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n}\n.contact__success-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background: rgba(34, 197, 94, 0.12);\n  color: var(--color-green);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.75rem;\n}\n.contact__success[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.contact__success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text-secondary);\n}\n@media (max-width: 900px) {\n  .contact__layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n@media (max-width: 600px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .contact__form[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .form-submit[_ngcontent-%COMP%] {\n    min-width: auto;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=contact.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src\\app\\contact\\contact.component.ts", lineNumber: 21 });
})();

// src/app/experience/experience.component.ts
var _forTrack04 = ($index, $item) => $item.id;
function ExperienceComponent_For_19_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 35);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const point_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", point_r1, " ");
  }
}
function ExperienceComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 12);
    \u0275\u0275element(1, "div", 22);
    \u0275\u0275elementStart(2, "div", 23)(3, "div", 24)(4, "div")(5, "h4", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 26);
    \u0275\u0275element(8, "i", 27);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 28)(11, "span", 29);
    \u0275\u0275element(12, "i", 30);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 31);
    \u0275\u0275element(15, "i", 32);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 33);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "ul", 34);
    \u0275\u0275repeaterCreate(20, ExperienceComponent_For_19_For_21_Template, 3, 1, "li", 35, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const exp_r2 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(exp_r2.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", exp_r2.company, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", exp_r2.period, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", exp_r2.location, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exp_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(exp_r2.highlights);
  }
}
function ExperienceComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 40);
    \u0275\u0275element(8, "i", 41);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const edu_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(edu_r3.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(edu_r3.degree);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(edu_r3.institute);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", edu_r3.grade, " ");
  }
}
var ExperienceComponent = class _ExperienceComponent {
  constructor() {
    this.experience = [
      {
        id: "infosys-2021",
        period: "Apr 2021 \u2013 Oct 2025",
        location: "Pune, India",
        title: "Frontend Developer",
        company: "Infosys Ltd",
        type: "full-time",
        highlights: [
          "Built real-time analytics dashboards and chat modules using Angular 13+, RxJS, and WebSockets \u2014 serving thousands of concurrent enterprise users.",
          "Collaborated with ML and backend teams to deliver AI-assisted UI features: predictive smart filters and autocomplete powered by LLM APIs.",
          "Architected lazy-loaded standalone components and modular Angular structure, cutting initial bundle size by ~40%.",
          "Led WCAG 2.1 accessibility improvements across 12+ major product modules, raising Lighthouse accessibility scores to 95+.",
          "Integrated Sentry error monitoring and real-time performance dashboards, significantly reducing MTTD (mean time to detect) for production issues.",
          "Mentored 2 junior developers on Angular best practices, component patterns, and code review standards."
        ]
      }
    ];
    this.education = [
      {
        id: "be-2021",
        year: "2017 \u2013 2021",
        degree: "B.E. Computer Engineering",
        institute: "Sir Visvesvaraya Institute of Technology",
        grade: "First Class with Distinction"
      },
      {
        id: "hsc-2017",
        year: "2015 \u2013 2017",
        degree: "Higher Secondary Certificate (HSC)",
        institute: "Janta Vidyalaya",
        grade: "First Class with Distinction"
      }
    ];
  }
  downloadCV() {
    window.open("assets/Rohini_Gaikwad_Angular_React_Developer.pdf.pdf", "_blank", "noopener,noreferrer");
  }
  static {
    this.\u0275fac = function ExperienceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExperienceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExperienceComponent, selectors: [["app-experience"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 0, consts: [[1, "section", "container", "resume"], ["data-aos", "fade-up", 1, "section-header"], [1, "section-tag"], [1, "section-title"], [1, "section-subtitle"], ["data-aos", "fade-up", "data-aos-delay", "50", 1, "resume__summary"], ["aria-hidden", "true", 1, "resume__summary-icon"], [1, "fas", "fa-user-tie"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "resume__section"], [1, "resume__section-title"], ["aria-hidden", "true", 1, "fas", "fa-briefcase"], [1, "timeline"], [1, "timeline__item"], ["data-aos", "fade-up", "data-aos-delay", "150", 1, "resume__section"], ["aria-hidden", "true", 1, "fas", "fa-graduation-cap"], [1, "edu-grid"], [1, "edu-card"], ["data-aos", "fade-up", 1, "resume__cta"], ["type", "button", "aria-label", "Download resume as PDF", 1, "btn", "btn-primary", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-download"], ["href", "#contact-section", 1, "btn", "btn-outline"], ["aria-hidden", "true", 1, "fas", "fa-paper-plane"], ["aria-hidden", "true", 1, "timeline__dot"], [1, "timeline__card"], [1, "timeline__header"], [1, "timeline__role"], [1, "timeline__company"], ["aria-hidden", "true", 1, "fas", "fa-building"], [1, "timeline__meta"], [1, "timeline__period"], ["aria-hidden", "true", 1, "fas", "fa-calendar-alt"], [1, "timeline__location"], ["aria-hidden", "true", 1, "fas", "fa-map-marker-alt"], [1, "badge", "badge-accent"], ["aria-label", "Key achievements", 1, "timeline__highlights"], [1, "timeline__highlight"], ["aria-hidden", "true", 1, "fas", "fa-chevron-right"], [1, "edu-card__year"], [1, "edu-card__degree"], [1, "edu-card__institute"], [1, "edu-card__grade"], ["aria-hidden", "true", 1, "fas", "fa-award"]], template: function ExperienceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "My background");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2", 3);
        \u0275\u0275text(5, "Experience & Education");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " My professional journey building scalable web applications and delivering product-quality UI. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "div", 6);
        \u0275\u0275element(10, "i", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p");
        \u0275\u0275text(12, " Frontend Engineer with 3.6 years at Infosys, specialising in Angular, TypeScript and RxJS. I build modern, high-performance web applications with a strong focus on clean architecture, accessibility, and real-world production quality. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 8)(14, "h3", 9);
        \u0275\u0275element(15, "i", 10);
        \u0275\u0275text(16, " Work experience ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 11);
        \u0275\u0275repeaterCreate(18, ExperienceComponent_For_19_Template, 22, 5, "article", 12, _forTrack04);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "h3", 9);
        \u0275\u0275element(22, "i", 14);
        \u0275\u0275text(23, " Education ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 15);
        \u0275\u0275repeaterCreate(25, ExperienceComponent_For_26_Template, 10, 4, "div", 16, _forTrack04);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 17)(28, "button", 18);
        \u0275\u0275listener("click", function ExperienceComponent_Template_button_click_28_listener() {
          return ctx.downloadCV();
        });
        \u0275\u0275element(29, "i", 19);
        \u0275\u0275text(30, " Download Full Resume (PDF) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "a", 20);
        \u0275\u0275element(32, "i", 21);
        \u0275\u0275text(33, " Let's talk ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275repeater(ctx.experience);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.education);
      }
    }, styles: ['\n\n.resume__summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n  padding: 1.5rem;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-left: 3px solid var(--color-accent);\n  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;\n  margin-bottom: 3rem;\n}\n.resume__summary-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--color-accent-glow);\n  color: var(--color-accent);\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.resume__summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--color-text-secondary);\n  line-height: 1.75;\n}\n.resume__section[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.resume__section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--color-text-primary);\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid var(--color-border);\n}\n.resume__section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 2rem;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 8px;\n  top: 8px;\n  bottom: 0;\n  width: 2px;\n  background: var(--color-border);\n}\n.timeline__item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 2rem;\n}\n.timeline__dot[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -2rem;\n  top: 1.25rem;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: var(--color-accent);\n  border: 3px solid var(--color-bg);\n  box-shadow: 0 0 0 2px var(--color-accent);\n}\n.timeline__card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: 1.5rem 1.75rem;\n  transition: border-color var(--transition);\n}\n.timeline__card[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-border-hover);\n}\n.timeline__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n  flex-wrap: wrap;\n}\n.timeline__role[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: var(--color-text-primary);\n  margin-bottom: 0.375rem;\n}\n.timeline__company[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.9375rem;\n  font-weight: 500;\n  color: var(--color-accent);\n}\n.timeline__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.375rem;\n  flex-shrink: 0;\n}\n.timeline__period[_ngcontent-%COMP%], \n.timeline__location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n  white-space: nowrap;\n}\n.timeline__period[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.timeline__location[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.timeline__highlights[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n  list-style: none;\n}\n.timeline__highlight[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.625rem;\n  font-size: 0.9375rem;\n  color: var(--color-text-secondary);\n  line-height: 1.65;\n}\n.timeline__highlight[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  font-size: 0.625rem;\n  margin-top: 0.45rem;\n  flex-shrink: 0;\n}\n.edu-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.25rem;\n}\n.edu-card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: 1.5rem;\n  transition: all var(--transition);\n}\n.edu-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-border-hover);\n  transform: translateY(-2px);\n}\n.edu-card__year[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--color-accent);\n  background: var(--color-accent-glow);\n  border: 1px solid rgba(245, 158, 11, 0.2);\n  border-radius: 100px;\n  padding: 3px 12px;\n  margin-bottom: 0.75rem;\n}\n.edu-card__degree[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--color-text-primary);\n  margin-bottom: 0.375rem;\n  line-height: 1.4;\n}\n.edu-card__institute[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 0.875rem;\n}\n.edu-card__grade[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.875rem;\n  color: var(--color-green);\n  font-weight: 500;\n}\n.resume__cta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: center;\n  padding-top: 1rem;\n}\n@media (max-width: 640px) {\n  .timeline[_ngcontent-%COMP%] {\n    padding-left: 1.25rem;\n  }\n  .timeline__header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .timeline__meta[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .resume__cta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .timeline__period[_ngcontent-%COMP%], \n   .timeline__location[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .resume__summary[_ngcontent-%COMP%] {\n    flex-direction: column;\n    border-left: none;\n    border-top: 3px solid var(--color-accent);\n    border-radius: var(--radius-lg);\n  }\n}\n/*# sourceMappingURL=experience.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExperienceComponent, { className: "ExperienceComponent", filePath: "src\\app\\experience\\experience.component.ts", lineNumber: 11 });
})();

// src/app/header/header.component.ts
var HeaderComponent = class _HeaderComponent {
  constructor() {
    this.displayText = signal("");
    this.showCursor = signal(true);
    this.roles = [
      "Frontend Engineer",
      "Angular Developer",
      "React Developer",
      "Web Developer"
    ];
    this.roleIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
  }
  ngOnInit() {
    this.typeLoop();
    this.cursorTimer = setInterval(() => this.showCursor.update((v) => !v), 530);
  }
  ngOnDestroy() {
    clearTimeout(this.typingTimer);
    clearInterval(this.cursorTimer);
  }
  typeLoop() {
    const current = this.roles[this.roleIndex];
    if (!this.isDeleting) {
      this.charIndex++;
      this.displayText.set(current.slice(0, this.charIndex));
      if (this.charIndex === current.length) {
        this.isDeleting = true;
        this.typingTimer = setTimeout(() => this.typeLoop(), 1800);
        return;
      }
    } else {
      this.charIndex--;
      this.displayText.set(current.slice(0, this.charIndex));
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        this.typingTimer = setTimeout(() => this.typeLoop(), 300);
        return;
      }
    }
    this.typingTimer = setTimeout(() => this.typeLoop(), this.isDeleting ? 50 : 90);
  }
  static {
    this.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 84, vars: 3, consts: [["aria-label", "Hero section", 1, "hero"], ["aria-hidden", "true", 1, "hero__bg"], [1, "hero__orb", "hero__orb--1"], [1, "hero__orb", "hero__orb--2"], [1, "hero__noise"], [1, "container", "hero__container"], [1, "hero__content"], ["data-aos", "fade-down", "data-aos-delay", "0", 1, "hero__eyebrow"], ["aria-hidden", "true", 1, "hero__avail-dot"], ["data-aos", "fade-up", "data-aos-delay", "80", 1, "hero__title"], [1, "hero__name"], ["aria-live", "polite", "aria-label", "Current role", "data-aos", "fade-up", "data-aos-delay", "140", 1, "hero__role"], [1, "hero__role-prefix"], [1, "hero__role-text"], ["aria-hidden", "true", 1, "hero__cursor"], ["data-aos", "fade-up", "data-aos-delay", "180", 1, "hero__bio"], ["data-aos", "fade-up", "data-aos-delay", "220", 1, "hero__stats"], [1, "hero__stat"], [1, "hero__stat-num"], [1, "hero__stat-unit"], [1, "hero__stat-label"], ["data-aos", "fade-up", "data-aos-delay", "260", 1, "hero__actions"], ["href", "#project-section", 1, "btn", "btn-primary"], ["aria-hidden", "true", 1, "fas", "fa-arrow-right"], ["href", "https://www.linkedin.com/in/rohini-gaikwad7057/", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "LinkedIn profile (opens in new tab)", 1, "btn", "btn-outline"], ["aria-hidden", "true", 1, "fab", "fa-linkedin"], ["href", "https://github.com/rohinigaikwad7057", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "GitHub profile (opens in new tab)", 1, "btn", "btn-outline"], ["aria-hidden", "true", 1, "fab", "fa-github"], ["data-aos", "fade-left", "data-aos-delay", "200", 1, "hero__visual"], [1, "hero__image-frame"], ["aria-hidden", "true", 1, "hero__ring", "hero__ring--outer"], ["aria-hidden", "true", 1, "hero__ring", "hero__ring--inner"], [1, "hero__image-clip"], ["src", "assets/images/profile-pic.png", "alt", "Rohini Gaikwad \u2014 Frontend Engineer", "width", "360", "height", "360", "loading", "eager", "fetchpriority", "high", 1, "hero__photo"], ["aria-hidden", "true", 1, "hero__badge", "hero__badge--angular"], [1, "devicon-angularjs-plain"], ["aria-hidden", "true", 1, "hero__badge", "hero__badge--ts"], [1, "devicon-typescript-plain"], ["aria-hidden", "true", 1, "hero__badge", "hero__badge--js"], [1, "devicon-javascript-plain"], ["aria-hidden", "true", 1, "hero__badge", "hero__badge--node"], [1, "devicon-nodejs-plain"], ["aria-hidden", "true", 1, "hero__badge", "hero__badge--react"], [1, "devicon-react-original"], ["aria-hidden", "true", 1, "hero__badge", "hero__badge--next"], [1, "devicon-nextjs-original"], ["aria-hidden", "true", 1, "hero__badge", "hero__badge--mongo"], [1, "devicon-mongodb-plain"], ["aria-hidden", "true", 1, "hero__badge", "hero__badge--rxjs"], [1, "fas", "fa-bolt"], ["href", "#about-section", "aria-label", "Scroll to About section", 1, "hero__scroll"], ["aria-hidden", "true", 1, "hero__scroll-icon"], [1, "fas", "fa-chevron-down"]], template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275element(8, "span", 8);
        \u0275\u0275text(9, " Available for opportunities \xB7 Abu Dhabi , UAE & Remote ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "h1", 9);
        \u0275\u0275text(11, " Hi, I'm");
        \u0275\u0275element(12, "br");
        \u0275\u0275elementStart(13, "span", 10);
        \u0275\u0275text(14, "Rohini Gaikwad");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 11)(16, "span", 12);
        \u0275\u0275text(17, "\u2014\xA0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 13);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 14);
        \u0275\u0275text(21, "|");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "p", 15);
        \u0275\u0275text(23, " Frontend Engineer with ");
        \u0275\u0275elementStart(24, "strong");
        \u0275\u0275text(25, "3.5+ years of experience");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, " building scalable, high-performance web applications using ");
        \u0275\u0275elementStart(27, "strong");
        \u0275\u0275text(28, "Angular, React, TypeScript, and JavaScript");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, ". Currently based in ");
        \u0275\u0275elementStart(30, "strong");
        \u0275\u0275text(31, "Abu Dhabi, UAE");
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, ".\n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 16)(34, "div", 17)(35, "span", 18);
        \u0275\u0275text(36, "3.5+ ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "span", 19);
        \u0275\u0275text(38, "yrs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span", 20);
        \u0275\u0275text(40, "experience");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 21)(42, "a", 22);
        \u0275\u0275text(43, " View My Work ");
        \u0275\u0275element(44, "i", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "a", 24);
        \u0275\u0275element(46, "i", 25);
        \u0275\u0275text(47, " LinkedIn ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "a", 26);
        \u0275\u0275element(49, "i", 27);
        \u0275\u0275text(50, " GitHub ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "div", 28)(52, "div", 29);
        \u0275\u0275element(53, "div", 30)(54, "div", 31);
        \u0275\u0275elementStart(55, "div", 32);
        \u0275\u0275element(56, "img", 33);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 34);
        \u0275\u0275element(58, "i", 35);
        \u0275\u0275text(59, " Angular ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 36);
        \u0275\u0275element(61, "i", 37);
        \u0275\u0275text(62, " TypeScript ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 38);
        \u0275\u0275element(64, "i", 39);
        \u0275\u0275text(65, " JavaScript ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div", 40);
        \u0275\u0275element(67, "i", 41);
        \u0275\u0275text(68, " Node.js ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "div", 42);
        \u0275\u0275element(70, "i", 43);
        \u0275\u0275text(71, " React ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 44);
        \u0275\u0275element(73, "i", 45);
        \u0275\u0275text(74, " Next.js ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "div", 46);
        \u0275\u0275element(76, "i", 47);
        \u0275\u0275text(77, " MongoDB ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div", 48);
        \u0275\u0275element(79, "i", 49);
        \u0275\u0275text(80, " RxJS ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(81, "a", 50)(82, "span", 51);
        \u0275\u0275element(83, "i", 52);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.displayText());
        \u0275\u0275advance();
        \u0275\u0275classProp("hero__cursor--visible", ctx.showCursor());
      }
    }, styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  padding-top: var(--nav-height);\n}\n.hero__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 0;\n}\n.hero__orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(100px);\n}\n.hero__orb--1[_ngcontent-%COMP%] {\n  width: clamp(260px, 40vw, 640px);\n  height: clamp(260px, 40vw, 640px);\n  background:\n    radial-gradient(\n      circle,\n      rgba(245, 158, 11, 0.13) 0%,\n      transparent 70%);\n  top: clamp(-250px, -18vw, -120px);\n  right: clamp(-180px, -12vw, -60px);\n  animation: _ngcontent-%COMP%_orbDrift 12s ease-in-out infinite;\n}\n.hero__orb--2[_ngcontent-%COMP%] {\n  width: clamp(200px, 32vw, 480px);\n  height: clamp(200px, 32vw, 480px);\n  background:\n    radial-gradient(\n      circle,\n      rgba(59, 130, 246, 0.09) 0%,\n      transparent 70%);\n  bottom: clamp(-220px, -14vw, -80px);\n  left: clamp(-140px, -10vw, -50px);\n  animation: _ngcontent-%COMP%_orbDrift 16s ease-in-out infinite reverse;\n}\n.hero__noise[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.018) 1px,\n      transparent 1px);\n  background-size: 72px 72px;\n  mask-image:\n    radial-gradient(\n      ellipse 80% 80% at 50% 50%,\n      black 0%,\n      transparent 100%);\n}\n@keyframes _ngcontent-%COMP%_orbDrift {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  33% {\n    transform: translate(24px, -28px) scale(1.06);\n  }\n  66% {\n    transform: translate(-18px, 18px) scale(0.96);\n  }\n}\n.hero__container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 5rem;\n  align-items: center;\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  min-height: calc(100vh - var(--nav-height));\n}\n.hero__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.hero__eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--color-text-secondary);\n  letter-spacing: 0.01em;\n}\n.hero__avail-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--color-green);\n  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.25);\n  animation: _ngcontent-%COMP%_pulse 2.5s ease-in-out infinite;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.25);\n  }\n  50% {\n    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0.08);\n  }\n}\n.hero__title[_ngcontent-%COMP%] {\n  font-size: clamp(2.75rem, 5.5vw, 4.25rem);\n  font-weight: 800;\n  line-height: 1.05;\n  letter-spacing: -0.03em;\n  color: var(--color-text-primary);\n}\n.hero__name[_ngcontent-%COMP%] {\n  display: block;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #fbbf24 50%,\n      #f97316 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero__role[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  font-family: var(--font-display);\n  font-size: clamp(1.125rem, 2.25vw, 1.5rem);\n  font-weight: 500;\n  color: var(--color-text-secondary);\n  height: 2rem;\n}\n.hero__role-prefix[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  margin-right: 0.5rem;\n  font-weight: 300;\n}\n.hero__role-text[_ngcontent-%COMP%] {\n  color: var(--color-text-primary);\n  font-weight: 600;\n}\n.hero__cursor[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: var(--color-accent);\n  font-weight: 300;\n  margin-left: 1px;\n  opacity: 0;\n  transition: opacity 0.1s;\n}\n.hero__cursor--visible[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.hero__bio[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  color: var(--color-text-secondary);\n  line-height: 1.8;\n  max-width: 500px;\n}\n.hero__bio[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-text-primary);\n  font-weight: 600;\n}\n.hero__stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.75rem;\n  padding: 1.25rem 0;\n}\n.hero__stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n  gap: 0;\n}\n.hero__stat-num[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 2rem;\n  font-weight: 800;\n  color: var(--color-accent);\n  line-height: 1;\n  letter-spacing: -0.02em;\n}\n.hero__stat-unit[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--color-accent);\n  line-height: 1;\n  margin-left: 1px;\n}\n.hero__stat-label[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-top: 2px;\n}\n.hero__stat-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: var(--color-border-hover);\n  flex-shrink: 0;\n}\n.hero__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.875rem;\n  align-items: center;\n}\n.hero__scroll[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2.5rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.25rem;\n  color: var(--color-text-muted);\n  text-decoration: none;\n  transition: color var(--transition);\n  z-index: 2;\n}\n.hero__scroll[_ngcontent-%COMP%]:hover {\n  color: var(--color-accent);\n}\n.hero__scroll-icon[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  animation: _ngcontent-%COMP%_scrollBounce 2.2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_scrollBounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(6px);\n  }\n}\n.hero__visual[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.hero__image-frame[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.hero__ring[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.hero__ring--outer[_ngcontent-%COMP%] {\n  width: clamp(200px, 40vw, 400px);\n  height: clamp(200px, 40vw, 400px);\n  border: 1px solid var(--color-border-hover);\n  animation: _ngcontent-%COMP%_ringPulse 5s ease-in-out infinite;\n}\n.hero__ring--inner[_ngcontent-%COMP%] {\n  width: clamp(180px, 36vw, 360px);\n  height: clamp(180px, 36vw, 360px);\n  border: 1px dashed rgba(245, 158, 11, 0.15);\n  animation: _ngcontent-%COMP%_ringPulse 5s ease-in-out infinite 1.5s reverse;\n}\n@keyframes _ngcontent-%COMP%_ringPulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 0.5;\n  }\n  50% {\n    transform: scale(1.02);\n    opacity: 1;\n  }\n}\n.hero__image-clip[_ngcontent-%COMP%] {\n  position: relative;\n  width: clamp(160px, 30vw, 300px);\n  height: clamp(160px, 30vw, 300px);\n  border-radius: 50%;\n  overflow: hidden;\n  border: 3px solid var(--color-accent);\n  box-shadow: 0 0 0 1px rgba(245, 158, 11, 0.15), 0 32px 80px rgba(0, 0, 0, 0.5);\n}\n.hero__photo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top center;\n}\n.hero__badge[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: var(--color-surface-2);\n  border: 1px solid var(--color-border-hover);\n  border-radius: var(--radius-md);\n  padding: 0.5rem 1rem;\n  font-family: var(--font-display);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--color-text-primary);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);\n  white-space: nowrap;\n  backdrop-filter: blur(8px);\n}\n.hero__badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.hero__badge--angular[_ngcontent-%COMP%] {\n  top: 6%;\n  right: 1%;\n  animation: _ngcontent-%COMP%_badgeFloat 7s ease-in-out infinite;\n}\n.hero__badge--angular[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #dd0031;\n}\n.hero__badge--react[_ngcontent-%COMP%] {\n  top: 14%;\n  left: 10%;\n  animation: _ngcontent-%COMP%_badgeFloat 8s ease-in-out infinite 0.6s;\n}\n.hero__badge--react[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #61dafb;\n}\n.hero__badge--next[_ngcontent-%COMP%] {\n  top: 26%;\n  right: 14%;\n  animation: _ngcontent-%COMP%_badgeFloat 7.2s ease-in-out infinite 1.2s;\n}\n.hero__badge--next[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #000;\n}\n.hero__badge--ts[_ngcontent-%COMP%] {\n  top: 34%;\n  left: -8%;\n  animation: _ngcontent-%COMP%_badgeFloat 7.5s ease-in-out infinite 1.1s;\n}\n.hero__badge--ts[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3178c6;\n}\n.hero__badge--js[_ngcontent-%COMP%] {\n  top: 46%;\n  right: -4%;\n  animation: _ngcontent-%COMP%_badgeFloat 8.5s ease-in-out infinite 1.3s;\n}\n.hero__badge--js[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f7df1e;\n}\n.hero__badge--node[_ngcontent-%COMP%] {\n  bottom: 22%;\n  left: -10%;\n  animation: _ngcontent-%COMP%_badgeFloat 7.8s ease-in-out infinite 0.9s;\n}\n.hero__badge--node[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3c873a;\n}\n.hero__badge--mongo[_ngcontent-%COMP%] {\n  bottom: 10%;\n  right: 12%;\n  animation: _ngcontent-%COMP%_badgeFloat 7s ease-in-out infinite 1.5s;\n}\n.hero__badge--mongo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #47a248;\n}\n.hero__badge--rxjs[_ngcontent-%COMP%] {\n  bottom: 12%;\n  left: 6%;\n  animation: _ngcontent-%COMP%_badgeFloat 6s ease-in-out infinite 2s;\n}\n.hero__badge--rxjs[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n@keyframes _ngcontent-%COMP%_badgeFloat {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@media (max-width: 960px) {\n  .hero__container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    text-align: center;\n    gap: 3.5rem;\n    padding-top: 2rem;\n  }\n  .hero__visual[_ngcontent-%COMP%] {\n    order: -1;\n  }\n  .hero__image-clip[_ngcontent-%COMP%] {\n    width: 220px;\n    height: 220px;\n  }\n  .hero__ring--outer[_ngcontent-%COMP%] {\n    width: 270px;\n    height: 270px;\n  }\n  .hero__ring--inner[_ngcontent-%COMP%] {\n    width: 244px;\n    height: 244px;\n  }\n  .hero__badge--ts[_ngcontent-%COMP%] {\n    left: 0;\n  }\n  .hero__badge--angular[_ngcontent-%COMP%] {\n    right: 0;\n  }\n  .hero__bio[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .hero__stats[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .hero__actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .hero__eyebrow[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .hero__title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .hero__role[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .hero__image-clip[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 180px;\n  }\n  .hero__ring--outer[_ngcontent-%COMP%] {\n    width: 224px;\n    height: 224px;\n  }\n  .hero__ring--inner[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n  }\n  .hero__badge[_ngcontent-%COMP%] {\n    font-size: 0.6875rem;\n    padding: 0.375rem 0.75rem;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src\\app\\header\\header.component.ts", lineNumber: 10 });
})();

// src/app/projects/projects.component.ts
var _forTrack05 = ($index, $item) => $item.id;
function ProjectsComponent_For_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275text(2, " Featured ");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_For_10_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const point_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", point_r1, " ");
  }
}
function ProjectsComponent_For_10_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2);
  }
}
function ProjectsComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 15)(1, "div", 16)(2, "div", 17);
    \u0275\u0275element(3, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275template(5, ProjectsComponent_For_10_Conditional_5_Template, 3, 0, "span", 20);
    \u0275\u0275elementStart(6, "span", 21);
    \u0275\u0275element(7, "span", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 23)(10, "h3", 24);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 25);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ul", 26);
    \u0275\u0275repeaterCreate(15, ProjectsComponent_For_10_For_16_Template, 3, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 27);
    \u0275\u0275repeaterCreate(18, ProjectsComponent_For_10_For_19_Template, 2, 1, "span", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 29)(21, "a", 30);
    \u0275\u0275element(22, "i", 14);
    \u0275\u0275text(23, " Source Code ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a", 31);
    \u0275\u0275element(25, "i", 32);
    \u0275\u0275text(26, " Live Demo ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const project_r3 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    \u0275\u0275classProp("project-card--featured", project_r3.featured);
    \u0275\u0275attribute("data-aos-delay", 80 * $index_r4);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(project_r3.featured ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("project-status--live", project_r3.status === "live");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", project_r3.status, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(project_r3.highlights);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(project_r3.tech);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", project_r3.githubUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", "View " + project_r3.title + " source code on GitHub");
    \u0275\u0275advance(3);
    \u0275\u0275property("href", project_r3.liveUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", "Open live demo of " + project_r3.title + " (opens in new tab)");
  }
}
function ProjectsComponent_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 36);
    \u0275\u0275text(1, " Show Less ");
  }
}
function ProjectsComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 37);
    \u0275\u0275text(1);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Show All ", ctx_r5.projects.length, " Projects ");
  }
}
function ProjectsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 35);
    \u0275\u0275listener("click", function ProjectsComponent_Conditional_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.toggleShowAll());
    });
    \u0275\u0275template(2, ProjectsComponent_Conditional_11_Conditional_2_Template, 2, 0)(3, ProjectsComponent_Conditional_11_Conditional_3_Template, 2, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r5.showAll ? 2 : 3);
  }
}
var ProjectsComponent = class _ProjectsComponent {
  constructor() {
    this.showAll = false;
    this.visibleCount = 3;
    this.projects = [
      {
        id: "sakan",
        title: "Sakan \u2014 \u0633\u064E\u0643\u064E\u0646 \xB7 Bilingual UAE Property Marketplace",
        description: "A bilingual EN/AR property marketplace for the UAE with full RTL layout switching, role-based dashboards for Agents and Admins, and Next.js 15 App Router architecture. Inspired by Property Finder and Bayut.",
        highlights: [
          "Full Arabic/English toggle with automatic RTL layout flip and IBM Plex Sans Arabic typography",
          "Role-based dashboards \u2014 Visitor, Agent and Admin with protected routes",
          "Search & filter synced with URL params \u2014 shareable, bookmarkable results",
          "Next.js 15 App Router \u2014 server components for SEO, client components for interactivity"
        ],
        tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "React Context", "App Router", "Prisma"],
        githubUrl: "https://github.com/rohinigaikwad7057/sakan-portal",
        liveUrl: "https://sakan-portal.vercel.app",
        featured: true,
        status: "live"
      },
      {
        id: "appointment-scheduler",
        title: "Smart Appointment Scheduler",
        description: "Full-stack clinic management platform with real-time scheduling, role-based portals, and secure data workflows for healthcare teams.",
        highlights: [
          "Role-based access control \u2014 Admin, Doctor, and Patient portals",
          "Real-time appointment booking, rescheduling & cancellation",
          "RESTful API built with Node.js, Express, and MongoDB",
          "Angular 18 + TypeScript frontend, deployed on Render"
        ],
        tech: ["Angular", "TypeScript", "Node.js", "Express", "MongoDB"],
        githubUrl: "https://github.com/rohinigaikwad7057/smart-appointment-scheduler-frontend",
        liveUrl: "https://smart-appointment-scheduler-frontend.onrender.com",
        featured: true,
        status: "live"
      },
      {
        id: "task-manager",
        title: "Full Stack Task Manager",
        description: "Production-ready task management app with JWT authentication, protected route guards, and real-time CRUD operations.",
        highlights: [
          "JWT authentication with Angular route guards",
          "Full CRUD \u2014 create, edit, prioritise, and delete tasks",
          "Search & filter tasks by priority and status",
          "React.js + Tailwind CSS frontend, Node.js + MongoDB backend"
        ],
        tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
        githubUrl: "https://github.com/rohinigaikwad7057",
        liveUrl: "https://task-manager-frontend-ry3t.onrender.com/dashboard?mode=login",
        featured: false,
        status: "live"
      },
      {
        id: "portfolio",
        title: "Developer Portfolio Website",
        description: "This portfolio \u2014 an Angular 18 SPA with standalone components, Angular Signals, scroll animations, and an AI Resume Assistant chatbot.",
        highlights: [
          "Angular 18 standalone components with Signals for reactive state",
          "IntersectionObserver active-nav highlighting & AOS scroll animations",
          "AI Resume Assistant chatbot \u2014 FAQ engine with pattern matching",
          "Deployed on GitHub Pages with production build optimisation"
        ],
        tech: ["Angular 18", "TypeScript", "Signals", "AOS", "GitHub Pages"],
        githubUrl: "https://github.com/rohinigaikwad7057/portfolio",
        liveUrl: "https://rohinigaikwad7057.github.io/portfolio/",
        featured: false,
        status: "live"
      }
    ];
  }
  get visibleProjects() {
    return this.showAll ? this.projects : this.projects.slice(0, this.visibleCount);
  }
  toggleShowAll() {
    this.showAll = !this.showAll;
  }
  static {
    this.\u0275fac = function ProjectsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsComponent, selectors: [["app-projects"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 1, consts: [[1, "section", "container", "projects"], ["data-aos", "fade-up", 1, "section-header", "centered"], [1, "section-tag"], [1, "section-title"], [1, "section-subtitle"], [1, "projects__grid"], ["data-aos", "fade-up", 1, "project-card", 3, "project-card--featured"], ["data-aos", "fade-up", 1, "projects__toggle"], ["data-aos", "fade-up", 1, "projects__cta"], [1, "projects__cta-content"], ["aria-hidden", "true", 1, "fab", "fa-github", "projects__cta-icon"], [1, "projects__cta-title"], [1, "projects__cta-sub"], ["href", "https://github.com/rohinigaikwad7057", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "View GitHub profile (opens in new tab)", 1, "btn", "btn-outline"], ["aria-hidden", "true", 1, "fab", "fa-github"], ["data-aos", "fade-up", 1, "project-card"], [1, "project-card__topbar"], ["aria-hidden", "true", 1, "project-card__icon"], [1, "fas", "fa-code-branch"], [1, "project-card__badges"], [1, "badge", "badge-accent"], [1, "badge", "project-status"], ["aria-hidden", "true", 1, "project-status__dot"], [1, "project-card__body"], [1, "project-card__title"], [1, "project-card__description"], ["aria-label", "Key features", 1, "project-card__highlights"], ["aria-label", "Technologies used", 1, "project-card__tech"], [1, "badge"], [1, "project-card__actions"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-outline", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-primary", 3, "href"], ["aria-hidden", "true", 1, "fas", "fa-external-link-alt"], ["aria-hidden", "true", 1, "fas", "fa-star"], ["aria-hidden", "true", 1, "fas", "fa-check-circle"], [1, "btn", "btn-outline", 3, "click"], [1, "fas", "fa-chevron-up"], [1, "fas", "fa-chevron-down"]], template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Portfolio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2", 3);
        \u0275\u0275text(5, "Projects I've built");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Personal and professional projects demonstrating full-stack thinking, Angular architecture depth, and production-quality engineering. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275repeaterCreate(9, ProjectsComponent_For_10_Template, 27, 13, "article", 6, _forTrack05);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, ProjectsComponent_Conditional_11_Template, 4, 1, "div", 7);
        \u0275\u0275elementStart(12, "div", 8)(13, "div", 9);
        \u0275\u0275element(14, "i", 10);
        \u0275\u0275elementStart(15, "div")(16, "p", 11);
        \u0275\u0275text(17, "See more on GitHub");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p", 12);
        \u0275\u0275text(19, "All projects are open source \u2014 explore the code.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "a", 13);
        \u0275\u0275element(21, "i", 14);
        \u0275\u0275text(22, " github.com/rohinigaikwad7057 ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275repeater(ctx.visibleProjects);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.projects.length > ctx.visibleCount ? 11 : -1);
      }
    }, styles: ["\n\n.projects__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2.5rem;\n}\n.project-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.125rem;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: 1.5rem 1.75rem;\n  transition:\n    border-color var(--transition),\n    box-shadow var(--transition),\n    transform var(--transition);\n}\n.projects__toggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-border-hover);\n  transform: translateY(-4px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n}\n.project-card--featured[_ngcontent-%COMP%] {\n  border-color: rgba(245, 158, 11, 0.2);\n  background:\n    linear-gradient(\n      160deg,\n      var(--color-surface) 0%,\n      rgba(245, 158, 11, 0.03) 100%);\n}\n.project-card--featured[_ngcontent-%COMP%]:hover {\n  border-color: rgba(245, 158, 11, 0.4);\n}\n.project-card__topbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.project-card__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--color-surface-2);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-accent);\n  font-size: 1rem;\n  transition: background var(--transition);\n}\n.project-card[_ngcontent-%COMP%]:hover   .project-card__icon[_ngcontent-%COMP%] {\n  background: var(--color-accent-glow);\n}\n.project-card__badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.project-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.project-status__dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--color-text-muted);\n  flex-shrink: 0;\n}\n.project-status--live[_ngcontent-%COMP%]   .project-status__dot[_ngcontent-%COMP%] {\n  background: var(--color-green);\n  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2);\n  animation: _ngcontent-%COMP%_livePulse 2.2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_livePulse {\n  0%, 100% {\n    box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2);\n  }\n  50% {\n    box-shadow: 0 0 0 5px rgba(34, 197, 94, 0.05);\n  }\n}\n.project-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.project-card__title[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  font-weight: 700;\n  color: var(--color-text-primary);\n  line-height: 1.3;\n  font-family: var(--font-display);\n}\n.project-card__description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--color-text-secondary);\n  line-height: 1.65;\n}\n.project-card__highlights[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4375rem;\n  list-style: none;\n  flex: 1;\n}\n.project-card__highlights[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: var(--color-text-secondary);\n  line-height: 1.6;\n}\n.project-card__highlights[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--color-green);\n  font-size: 0.6875rem;\n  margin-top: 0.3rem;\n  flex-shrink: 0;\n}\n.project-card__tech[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.375rem;\n  padding-top: 0.625rem;\n  border-top: 1px solid var(--color-border);\n}\n.project-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.project-card__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n  justify-content: center;\n  font-size: 0.875rem;\n  padding: 0.625rem 1rem;\n}\n.projects__cta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 1.5rem 2rem;\n  background: var(--color-surface);\n  border: 1px dashed var(--color-border-hover);\n  border-radius: var(--radius-lg);\n  flex-wrap: wrap;\n}\n.projects__cta-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.projects__cta-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--color-text-muted);\n}\n.projects__cta-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text-primary);\n  margin-bottom: 0.25rem;\n}\n.projects__cta-sub[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  margin: 0;\n}\n@media (max-width: 700px) {\n  .projects__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .project-card__actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .project-card__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: unset;\n    width: 100%;\n  }\n  .projects__cta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .projects__cta-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=projects.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsComponent, { className: "ProjectsComponent", filePath: "src\\app\\projects\\projects.component.ts", lineNumber: 11 });
})();

// src/app/skills/skills.component.ts
var _forTrack06 = ($index, $item) => $item.category;
var _forTrack1 = ($index, $item) => $item.name;
function SkillsComponent_For_10_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275elementStart(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(skill_r1.icon + " skill-chip__icon");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(skill_r1.name);
  }
}
function SkillsComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 10);
    \u0275\u0275repeaterCreate(7, SkillsComponent_For_10_For_8_Template, 4, 3, "div", 11, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const $index_r3 = ctx.$index;
    \u0275\u0275attribute("data-aos-delay", 60 * $index_r3);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(group_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r2.label);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", group_r2.label + " skills");
    \u0275\u0275advance();
    \u0275\u0275repeater(group_r2.skills);
  }
}
var SkillsComponent = class _SkillsComponent {
  constructor() {
    this.skillGroups = [
      {
        category: "frontend",
        label: "Frontend",
        icon: "fas fa-layer-group",
        skills: [
          { name: "Angular 13+", icon: "devicon-angularjs-plain", category: "frontend" },
          { name: "React.js", icon: "devicon-react-original", category: "frontend" },
          { name: "Next.js 15", icon: "devicon-nextjs-original", category: "frontend" },
          { name: "TypeScript", icon: "devicon-typescript-plain", category: "frontend" },
          { name: "JavaScript (ES6+)", icon: "devicon-javascript-plain", category: "frontend" },
          { name: "Redux Toolkit", icon: "devicon-redux-original", category: "frontend" },
          { name: "React Context API", icon: "devicon-react-original", category: "frontend" },
          { name: "RxJS", icon: "devicon-rxjs-plain", category: "frontend" },
          { name: "HTML5", icon: "devicon-html5-plain", category: "frontend" },
          { name: "CSS3", icon: "devicon-css3-plain", category: "frontend" },
          { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", category: "frontend" }
        ]
      },
      {
        category: "backend",
        label: "Backend & Database",
        icon: "fas fa-server",
        skills: [
          { name: "Node.js", icon: "devicon-nodejs-plain", category: "backend" },
          { name: "Express.js", icon: "devicon-express-original", category: "backend" },
          { name: "MongoDB", icon: "devicon-mongodb-plain", category: "backend" },
          { name: "Prisma ORM", icon: "devicon-prisma-original", category: "backend" },
          { name: "REST APIs", icon: "fas fa-plug", category: "backend" },
          { name: "JWT Authentication", icon: "fas fa-key", category: "backend" }
        ]
      },
      {
        category: "tools",
        label: "Tools & DevOps",
        icon: "fas fa-tools",
        skills: [
          { name: "Git", icon: "devicon-git-plain", category: "tools" },
          { name: "GitHub", icon: "devicon-github-original", category: "tools" },
          { name: "VS Code", icon: "devicon-vscode-plain", category: "tools" },
          { name: "Postman", icon: "devicon-postman-plain", category: "tools" },
          { name: "Vercel", icon: "fas fa-cloud", category: "tools" },
          { name: "NPM", icon: "devicon-npm-original-wordmark", category: "tools" },
          { name: "Sentry", icon: "fas fa-bug", category: "tools" }
        ]
      },
      {
        category: "concepts",
        label: "Core Concepts",
        icon: "fas fa-brain",
        skills: [
          { name: "Responsive Design", icon: "fas fa-mobile-alt", category: "concepts" },
          { name: "State Management", icon: "fas fa-project-diagram", category: "concepts" },
          { name: "REST API Integration", icon: "fas fa-plug", category: "concepts" },
          { name: "SSR / SSG", icon: "fas fa-server", category: "concepts" },
          { name: "Performance Optimization", icon: "fas fa-tachometer-alt", category: "concepts" },
          { name: "Accessibility (WCAG)", icon: "fas fa-universal-access", category: "concepts" },
          { name: "Authentication & Authorization", icon: "fas fa-lock", category: "concepts" },
          { name: "WebSockets", icon: "fas fa-wifi", category: "concepts" },
          { name: "Agile / Scrum", icon: "fas fa-sync-alt", category: "concepts" }
        ]
      }
    ];
  }
  static {
    this.\u0275fac = function SkillsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SkillsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkillsComponent, selectors: [["app-skills"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 0, consts: [[1, "section", "container", "skills"], ["data-aos", "fade-up", 1, "section-header", "centered"], [1, "section-tag"], [1, "section-title"], [1, "section-subtitle"], [1, "skills__groups"], ["data-aos", "fade-up", 1, "skills__group"], [1, "skills__group-header"], ["aria-hidden", "true", 1, "skills__group-icon"], [1, "skills__group-title"], ["role", "list", 1, "skills__grid"], ["role", "listitem", 1, "skill-chip"], ["aria-hidden", "true"], [1, "skill-chip__name"]], template: function SkillsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Technical skills");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2", 3);
        \u0275\u0275text(5, "My tech stack");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Technologies and tools I use to build modern, scalable web applications. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275repeaterCreate(9, SkillsComponent_For_10_Template, 9, 5, "div", 6, _forTrack06);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275repeater(ctx.skillGroups);
      }
    }, styles: ["\n\n.skills__groups[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 1.25rem;\n}\n.skills__group[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: 1.5rem;\n  transition: border-color var(--transition), box-shadow var(--transition);\n}\n.skills__group[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-border-hover);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n}\n.skills__group-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  margin-bottom: 1.25rem;\n  padding-bottom: 0.875rem;\n  border-bottom: 1px solid var(--color-border);\n}\n.skills__group-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: var(--color-accent-glow);\n  color: var(--color-accent);\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  flex-shrink: 0;\n}\n.skills__group-title[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: var(--color-text-primary);\n  font-family: var(--font-display);\n  letter-spacing: 0.01em;\n}\n.skills__grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.skill-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  background: var(--color-surface-2);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  padding: 0.375rem 0.75rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--color-text-secondary);\n  transition: all var(--transition);\n  cursor: default;\n  white-space: nowrap;\n}\n.skill-chip[_ngcontent-%COMP%]:hover {\n  border-color: rgba(245, 158, 11, 0.3);\n  color: var(--color-text-primary);\n  background: rgba(245, 158, 11, 0.06);\n  transform: translateY(-1px);\n}\n.skill-chip__icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.skill-chip[_ngcontent-%COMP%]:hover   .devicon-angularjs-plain[_ngcontent-%COMP%] {\n  color: #dd0031;\n}\n.skill-chip[_ngcontent-%COMP%]:hover   .devicon-typescript-plain[_ngcontent-%COMP%] {\n  color: #3178c6;\n}\n.skill-chip[_ngcontent-%COMP%]:hover   .devicon-javascript-plain[_ngcontent-%COMP%] {\n  color: #f7df1e;\n}\n.skill-chip[_ngcontent-%COMP%]:hover   .devicon-react-original[_ngcontent-%COMP%] {\n  color: #61dafb;\n}\n.skill-chip[_ngcontent-%COMP%]:hover   .devicon-html5-plain[_ngcontent-%COMP%] {\n  color: #e34f26;\n}\n.skill-chip[_ngcontent-%COMP%]:hover   .devicon-css3-plain[_ngcontent-%COMP%] {\n  color: #1572b6;\n}\n.skill-chip[_ngcontent-%COMP%]:hover   .devicon-mongodb-plain[_ngcontent-%COMP%] {\n  color: #47a248;\n}\n.skill-chip[_ngcontent-%COMP%]:hover   .devicon-nodejs-plain[_ngcontent-%COMP%] {\n  color: #339933;\n}\n.skill-chip[_ngcontent-%COMP%]:hover   .devicon-git-plain[_ngcontent-%COMP%] {\n  color: #f05032;\n}\n.skill-chip[_ngcontent-%COMP%]:hover   .devicon-github-original[_ngcontent-%COMP%] {\n  color: #f8f8f8;\n}\n.skill-chip[_ngcontent-%COMP%]:hover   .devicon-tailwindcss-plain[_ngcontent-%COMP%] {\n  color: #38bdf8;\n}\n@media (max-width: 600px) {\n  .skills__groups[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=skills.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkillsComponent, { className: "SkillsComponent", filePath: "src\\app\\skills\\skills.component.ts", lineNumber: 18 });
})();

// src/app/home/home.component.ts
var HomeComponent = class _HomeComponent {
  ngOnInit() {
    import_aos.default.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
      offset: 60
    });
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 0, consts: [["id", "home-section"], ["id", "about-section"], ["id", "skills-section"], ["id", "resume-section"], ["id", "project-section"], ["id", "contact-section"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "app-header");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "section", 1);
        \u0275\u0275element(3, "app-about");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "section", 2);
        \u0275\u0275element(5, "app-skills");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "section", 3);
        \u0275\u0275element(7, "app-experience");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "section", 4);
        \u0275\u0275element(9, "app-projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "section", 5);
        \u0275\u0275element(11, "app-contact");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "app-ai-chat");
      }
    }, dependencies: [
      HeaderComponent,
      AboutComponent,
      SkillsComponent,
      ExperienceComponent,
      ProjectsComponent,
      ContactComponent,
      AiChatComponent
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\home\\home.component.ts", lineNumber: 26 });
})();
export {
  HomeComponent
};
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v18.2.14
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-5FNQUBNE.js.map
