(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uni_modules/uview-ui/components/u-status-bar/u-status-bar" ], {
    "011f": function(t, u, e) {
        "use strict";
        e.d(u, "b", function() {
            return n;
        }), e.d(u, "c", function() {
            return a;
        }), e.d(u, "a", function() {});
        var n = function() {
            this.$createElement;
            var t = (this._self._c, this.__get_style([ this.style ]));
            this.$mp.data = Object.assign({}, {
                $root: {
                    s0: t
                }
            });
        }, a = [];
    },
    "0be9": function(t, u, e) {
        "use strict";
        e.r(u);
        var n = e("011f"), a = e("5415");
        for (var s in a) [ "default" ].indexOf(s) < 0 && function(t) {
            e.d(u, t, function() {
                return a[t];
            });
        }(s);
        e("8094");
        var o = e("f0c5"), i = Object(o.a)(a.default, n.b, n.c, !1, null, "2292e5f5", null, !1, n.a, void 0);
        u.default = i.exports;
    },
    "516a": function(t, u, e) {
        "use strict";
        (function(t) {
            var n = e("4ea4");
            Object.defineProperty(u, "__esModule", {
                value: !0
            }), u.default = void 0;
            var a = n(e("342f")), s = {
                name: "u-status-bar",
                mixins: [ t.$u.mpMixin, t.$u.mixin, a.default ],
                data: function() {
                    return {};
                },
                computed: {
                    style: function() {
                        var u = {};
                        return u.height = t.$u.addUnit(t.$u.sys().statusBarHeight, "px"), u.backgroundColor = this.bgColor, 
                        t.$u.deepMerge(u, t.$u.addStyle(this.customStyle));
                    }
                }
            };
            u.default = s;
        }).call(this, e("543d").default);
    },
    5415: function(t, u, e) {
        "use strict";
        e.r(u);
        var n = e("516a"), a = e.n(n);
        for (var s in n) [ "default" ].indexOf(s) < 0 && function(t) {
            e.d(u, t, function() {
                return n[t];
            });
        }(s);
        u.default = a.a;
    },
    8094: function(t, u, e) {
        "use strict";
        var n = e("b2f3");
        e.n(n).a;
    },
    b2f3: function(t, u, e) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uni_modules/uview-ui/components/u-status-bar/u-status-bar-create-component", {
    "uni_modules/uview-ui/components/u-status-bar/u-status-bar-create-component": function(t, u, e) {
        e("543d").createComponent(e("0be9"));
    }
}, [ [ "uni_modules/uview-ui/components/u-status-bar/u-status-bar-create-component" ] ] ]);