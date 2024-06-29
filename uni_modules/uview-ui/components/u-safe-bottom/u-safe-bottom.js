(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uni_modules/uview-ui/components/u-safe-bottom/u-safe-bottom" ], {
    "0d8d": function(t, e, n) {
        "use strict";
        (function(t) {
            var o = n("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var u = o(n("3f3e")), a = {
                name: "u-safe-bottom",
                mixins: [ t.$u.mpMixin, t.$u.mixin, u.default ],
                data: function() {
                    return {
                        safeAreaBottomHeight: 0,
                        isNvue: !1
                    };
                },
                computed: {
                    style: function() {
                        return t.$u.deepMerge({}, t.$u.addStyle(this.customStyle));
                    }
                },
                mounted: function() {}
            };
            e.default = a;
        }).call(this, n("543d").default);
    },
    "3e40": function(t, e, n) {},
    "450d": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("f658"), u = n("643e");
        for (var a in u) [ "default" ].indexOf(a) < 0 && function(t) {
            n.d(e, t, function() {
                return u[t];
            });
        }(a);
        n("a65c");
        var i = n("f0c5"), s = Object(i.a)(u.default, o.b, o.c, !1, null, "01127184", null, !1, o.a, void 0);
        e.default = s.exports;
    },
    "643e": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("0d8d"), u = n.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = u.a;
    },
    a65c: function(t, e, n) {
        "use strict";
        var o = n("3e40");
        n.n(o).a;
    },
    f658: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return u;
        }), n.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            var t = (this._self._c, this.__get_style([ this.style ]));
            this.$mp.data = Object.assign({}, {
                $root: {
                    s0: t
                }
            });
        }, u = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uni_modules/uview-ui/components/u-safe-bottom/u-safe-bottom-create-component", {
    "uni_modules/uview-ui/components/u-safe-bottom/u-safe-bottom-create-component": function(t, e, n) {
        n("543d").createComponent(n("450d"));
    }
}, [ [ "uni_modules/uview-ui/components/u-safe-bottom/u-safe-bottom-create-component" ] ] ]);