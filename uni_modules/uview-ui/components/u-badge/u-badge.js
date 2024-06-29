(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uni_modules/uview-ui/components/u-badge/u-badge" ], {
    1268: function(e, t, u) {
        "use strict";
        (function(e) {
            var n = u("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(u("1eff")), i = {
                name: "u-badge",
                mixins: [ e.$u.mpMixin, o.default, e.$u.mixin ],
                computed: {
                    boxStyle: function() {
                        return {};
                    },
                    badgeStyle: function() {
                        var t = {};
                        if (this.color && (t.color = this.color), this.bgColor && !this.inverted && (t.backgroundColor = this.bgColor), 
                        this.absolute && (t.position = "absolute", this.offset.length)) {
                            var u = this.offset[0], n = this.offset[1] || u;
                            t.top = e.$u.addUnit(u), t.right = e.$u.addUnit(n);
                        }
                        return t;
                    },
                    showValue: function() {
                        switch (this.numberType) {
                          case "overflow":
                            return Number(this.value) > Number(this.max) ? this.max + "+" : this.value;

                          case "ellipsis":
                            return Number(this.value) > Number(this.max) ? "..." : this.value;

                          case "limit":
                            return Number(this.value) > 999 ? Number(this.value) >= 9999 ? Math.floor(this.value / 1e4 * 100) / 100 + "w" : Math.floor(this.value / 1e3 * 100) / 100 + "k" : this.value;

                          default:
                            return Number(this.value);
                        }
                    }
                }
            };
            t.default = i;
        }).call(this, u("543d").default);
    },
    4707: function(e, t, u) {
        "use strict";
        u.r(t);
        var n = u("1268"), o = u.n(n);
        for (var i in n) [ "default" ].indexOf(i) < 0 && function(e) {
            u.d(t, e, function() {
                return n[e];
            });
        }(i);
        t.default = o.a;
    },
    "5dec": function(e, t, u) {
        "use strict";
        u.r(t);
        var n = u("91de"), o = u("4707");
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(e) {
            u.d(t, e, function() {
                return o[e];
            });
        }(i);
        u("68d1");
        var a = u("f0c5"), s = Object(a.a)(o.default, n.b, n.c, !1, null, "361197e0", null, !1, n.a, void 0);
        t.default = s.exports;
    },
    "68d1": function(e, t, u) {
        "use strict";
        var n = u("837d");
        u.n(n).a;
    },
    "837d": function(e, t, u) {},
    "91de": function(e, t, u) {
        "use strict";
        u.d(t, "b", function() {
            return n;
        }), u.d(t, "c", function() {
            return o;
        }), u.d(t, "a", function() {});
        var n = function() {
            var e = this, t = (e.$createElement, e._self._c, e.show && (0 !== Number(e.value) || e.showZero || e.isDot)), u = t ? e.__get_style([ e.$u.addStyle(e.customStyle), e.badgeStyle ]) : null;
            e.$mp.data = Object.assign({}, {
                $root: {
                    m0: t,
                    s0: u
                }
            });
        }, o = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uni_modules/uview-ui/components/u-badge/u-badge-create-component", {
    "uni_modules/uview-ui/components/u-badge/u-badge-create-component": function(e, t, u) {
        u("543d").createComponent(u("5dec"));
    }
}, [ [ "uni_modules/uview-ui/components/u-badge/u-badge-create-component" ] ] ]);