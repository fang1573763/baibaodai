(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPages/bookDetail/bookDetail" ], {
    "1a82": function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("5259"), a = t("ef40");
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        t("490e");
        var i = t("f0c5"), u = Object(i.a)(a.default, o.b, o.c, !1, null, "2c28a0d9", null, !1, o.a, void 0);
        n.default = u.exports;
    },
    "490e": function(e, n, t) {
        "use strict";
        var o = t("76ff");
        t.n(o).a;
    },
    5259: function(e, n, t) {
        "use strict";
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return r;
        }), t.d(n, "a", function() {
            return o;
        });
        var o = {
            uAlert: function() {
                return Promise.all([ t.e("common/vendor"), t.e("uni_modules/uview-ui/components/u-alert/u-alert") ]).then(t.bind(null, "1e4d"));
            },
            uSwiper: function() {
                return Promise.all([ t.e("common/vendor"), t.e("uni_modules/uview-ui/components/u-swiper/u-swiper") ]).then(t.bind(null, "24d4"));
            }
        }, a = function() {
            var e = this;
            e.$createElement, e._self._c, e._isMounted || (e.e0 = function(n) {
                return e.currentNum = n.current;
            });
        }, r = [];
    },
    "76ff": function(e, n, t) {},
    "784d": function(e, n, t) {
        "use strict";
        (function(e) {
            var o = t("4ea4");
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = o(t("278c")), r = o(t("ee6f")), i = t("fe1d"), u = {
                data: function() {
                    return {
                        option: {},
                        pages: [],
                        currentNum: 0
                    };
                },
                onLoad: function(n) {
                    var t = n.grade, o = n.version, u = n.unit_name;
                    this.option = n, e.setNavigationBarTitle({
                        title: "".concat(i.versionMap[o], " ").concat(u)
                    });
                    var c = [];
                    r.default.filter(function(e) {
                        return e.grade === t && e.version === o && e.unit_name === u;
                    }).forEach(function(e) {
                        for (var n = e.page_range, t = e.grade, o = (0, a.default)(n, 2), r = o[0], u = o[1]; r <= u; r++) c.push("".concat(i.booksPrefix).concat(t, "-").concat(r, ".jpg"));
                    }), this.pages = c, console.log("this.pages", this.pages);
                },
                methods: {
                    onShareAppMessage: function(e) {
                        var n = this.option, t = n.grade, o = n.version, a = n.unit_name;
                        return e.from, {
                            title: "".concat(i.versionMap[o], " ").concat(a, ",点击查看"),
                            path: "/subPages/bookDetail/bookDetail?grade=".concat(t, "&version=").concat(o, "&unit_name=").concat(a)
                        };
                    },
                    onPreview: function(n) {
                        console.log("onPreview--idx", n), e.previewImage({
                            urls: this.pages,
                            current: n
                        });
                    }
                }
            };
            n.default = u;
        }).call(this, t("543d").default);
    },
    b4da: function(e, n, t) {
        "use strict";
        (function(e) {
            var n = t("4ea4");
            t("18e6"), t("33db"), n(t("66fd"));
            var o = n(t("1a82"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, e(o.default);
        }).call(this, t("543d").createPage);
    },
    ef40: function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("784d"), a = t.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        n.default = a.a;
    }
}, [ [ "b4da", "common/runtime", "common/vendor" ] ] ]);