(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uni_modules/uview-ui/components/u-notice-bar/u-notice-bar" ], {
    2847: function(n, e, t) {
        "use strict";
        t.d(e, "b", function() {
            return u;
        }), t.d(e, "c", function() {
            return i;
        }), t.d(e, "a", function() {
            return o;
        });
        var o = {
            uColumnNotice: function() {
                return Promise.all([ t.e("common/vendor"), t.e("uni_modules/uview-ui/components/u-column-notice/u-column-notice") ]).then(t.bind(null, "e4bf"));
            },
            uRowNotice: function() {
                return Promise.all([ t.e("common/vendor"), t.e("uni_modules/uview-ui/components/u-row-notice/u-row-notice") ]).then(t.bind(null, "2ba3"));
            }
        }, u = function() {
            this.$createElement;
            var n = (this._self._c, this.show ? this.__get_style([ {
                backgroundColor: this.bgColor
            }, this.$u.addStyle(this.customStyle) ]) : null);
            this.$mp.data = Object.assign({}, {
                $root: {
                    s0: n
                }
            });
        }, i = [];
    },
    "3a8b": function(n, e, t) {
        "use strict";
        t.r(e);
        var o = t("8042"), u = t.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(i);
        e.default = u.a;
    },
    "6dd3": function(n, e, t) {},
    8042: function(n, e, t) {
        "use strict";
        (function(n) {
            var o = t("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var u = o(t("aedb")), i = {
                name: "u-notice-bar",
                mixins: [ n.$u.mpMixin, n.$u.mixin, u.default ],
                data: function() {
                    return {
                        show: !0
                    };
                },
                methods: {
                    click: function(n) {
                        this.$emit("click", n), this.url && this.linkType && this.openPage();
                    },
                    close: function() {
                        this.show = !1, this.$emit("close");
                    }
                }
            };
            e.default = i;
        }).call(this, t("543d").default);
    },
    b911: function(n, e, t) {
        "use strict";
        t.r(e);
        var o = t("2847"), u = t("3a8b");
        for (var i in u) [ "default" ].indexOf(i) < 0 && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(i);
        t("cfb8");
        var c = t("f0c5"), a = Object(c.a)(u.default, o.b, o.c, !1, null, "6862e5d8", null, !1, o.a, void 0);
        e.default = a.exports;
    },
    cfb8: function(n, e, t) {
        "use strict";
        var o = t("6dd3");
        t.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uni_modules/uview-ui/components/u-notice-bar/u-notice-bar-create-component", {
    "uni_modules/uview-ui/components/u-notice-bar/u-notice-bar-create-component": function(n, e, t) {
        t("543d").createComponent(t("b911"));
    }
}, [ [ "uni_modules/uview-ui/components/u-notice-bar/u-notice-bar-create-component" ] ] ]);