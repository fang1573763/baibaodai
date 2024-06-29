(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPages/directory/directory" ], {
    "051a": function(n, e, t) {
        "use strict";
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return r;
        }), t.d(e, "a", function() {
            return o;
        });
        var o = {
            uButton: function() {
                return Promise.all([ t.e("common/vendor"), t.e("uni_modules/uview-ui/components/u-button/u-button") ]).then(t.bind(null, "7dbb"));
            },
            uIcon: function() {
                return Promise.all([ t.e("common/vendor"), t.e("uni_modules/uview-ui/components/u-icon/u-icon") ]).then(t.bind(null, "faff"));
            }
        }, a = function() {
            var n = this, e = (n.$createElement, n._self._c, n.__map(n.books, function(e, t) {
                return {
                    $orig: n.__get_orig(e),
                    g0: t > 1 ? e.real_page.join(" ~ ") : null
                };
            }));
            n.$mp.data = Object.assign({}, {
                $root: {
                    l0: e
                }
            });
        }, r = [];
    },
    "0ef0": function(n, e, t) {
        "use strict";
        (function(n) {
            var o = t("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(t("278c")), r = o(t("ee6f")), i = t("fe1d"), u = {
                data: function() {
                    return {
                        option: {},
                        books: []
                    };
                },
                onLoad: function(e) {
                    var t = e.grade, o = e.version, u = e.unit_name;
                    this.option = e, n.setNavigationBarTitle({
                        title: "".concat(i.versionMap[o], " ").concat(u)
                    });
                    var c = 0;
                    this.books = r.default.filter(function(n) {
                        return n.grade === t;
                    }).map(function(n, e) {
                        if ("目录" === n.unit_name && (c = n.page_range[0]), "s1-1" == n.grade && (c = 4), 
                        e > 1) {
                            var t = (0, a.default)(n.page_range, 2), o = t[0], r = t[1];
                            n.real_page = [ o - c, r - c ];
                        }
                        return n;
                    }), console.log("this.books", this.books);
                },
                methods: {
                    onShareAppMessage: function(n) {
                        var e = this.option, t = e.grade, o = e.version, a = e.unit_name;
                        return n.from, {
                            title: "".concat(i.versionMap[o], " ").concat(a, " 目录，点击查看"),
                            path: "/subPages/directory/directory?grade=".concat(t, "&version=").concat(o, "&unit_name=").concat(a)
                        };
                    },
                    itemClick: function(e) {
                        console.log("item", e);
                        var t = e.version, o = e.unit_name, a = e.grade, r = e.page_range, i = "?version=".concat(t, "&unit_name=").concat(o, "&grade=").concat(a, "&page_range=").concat(r);
                        n.navigateTo({
                            url: "/subPages/bookDetail/bookDetail" + i
                        });
                    }
                }
            };
            e.default = u;
        }).call(this, t("543d").default);
    },
    2678: function(n, e, t) {
        "use strict";
        t.r(e);
        var o = t("051a"), a = t("99ae");
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(r);
        t("c605");
        var i = t("f0c5"), u = Object(i.a)(a.default, o.b, o.c, !1, null, "24adfac5", null, !1, o.a, void 0);
        e.default = u.exports;
    },
    "99ae": function(n, e, t) {
        "use strict";
        t.r(e);
        var o = t("0ef0"), a = t.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(r);
        e.default = a.a;
    },
    b95a: function(n, e, t) {
        "use strict";
        (function(n) {
            var e = t("4ea4");
            t("18e6"), t("33db"), e(t("66fd"));
            var o = e(t("2678"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(o.default);
        }).call(this, t("543d").createPage);
    },
    c605: function(n, e, t) {
        "use strict";
        var o = t("e098");
        t.n(o).a;
    },
    e098: function(n, e, t) {}
}, [ [ "b95a", "common/runtime", "common/vendor" ] ] ]);