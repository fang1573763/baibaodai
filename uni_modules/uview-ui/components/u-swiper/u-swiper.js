(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uni_modules/uview-ui/components/u-swiper/u-swiper" ], {
    "085a": function(e, t, n) {},
    "24d4": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("e601"), u = n("8425");
        for (var o in u) [ "default" ].indexOf(o) < 0 && function(e) {
            n.d(t, e, function() {
                return u[e];
            });
        }(o);
        n("72d8");
        var r = n("f0c5"), a = Object(r.a)(u.default, i.b, i.c, !1, null, "c8fecb32", null, !1, i.a, void 0);
        t.default = a.exports;
    },
    "48e3": function(e, t, n) {
        "use strict";
        (function(e) {
            var i = n("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var u = i(n("7037")), o = i(n("c95c")), r = {
                name: "u-swiper",
                mixins: [ e.$u.mpMixin, e.$u.mixin, o.default ],
                data: function() {
                    return {
                        currentIndex: 0
                    };
                },
                watch: {
                    current: function(e, t) {
                        e !== t && (this.currentIndex = e);
                    }
                },
                computed: {
                    itemStyle: function() {
                        var t = this;
                        return function(n) {
                            var i = {};
                            return t.nextMargin && t.previousMargin && (i.borderRadius = e.$u.addUnit(t.radius), 
                            n !== t.currentIndex && (i.transform = "scale(0.92)")), i;
                        };
                    }
                },
                methods: {
                    getSource: function(t) {
                        return "string" == typeof t ? t : "object" === (0, u.default)(t) && this.keyName ? t[this.keyName] : (e.$u.error("请按格式传递列表参数"), 
                        "");
                    },
                    change: function(e) {
                        var t = e.detail.current;
                        this.pauseVideo(this.currentIndex), this.currentIndex = t, this.$emit("change", e.detail);
                    },
                    pauseVideo: function(t) {
                        var n = this.getSource(this.list[t]);
                        e.$u.test.video(n) && e.createVideoContext("video-".concat(t), this).pause();
                    },
                    getPoster: function(e) {
                        return "object" === (0, u.default)(e) && e.poster ? e.poster : "";
                    },
                    clickHandler: function(e) {
                        this.$emit("click", e);
                    }
                }
            };
            t.default = r;
        }).call(this, n("543d").default);
    },
    "72d8": function(e, t, n) {
        "use strict";
        var i = n("085a");
        n.n(i).a;
    },
    8425: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("48e3"), u = n.n(i);
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        t.default = u.a;
    },
    e601: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return u;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {
            return i;
        });
        var i = {
            uLoadingIcon: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-loading-icon/u-loading-icon") ]).then(n.bind(null, "bb99"));
            },
            uSwiperIndicator: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-swiper-indicator/u-swiper-indicator") ]).then(n.bind(null, "d783"));
            }
        }, u = function() {
            var e = this, t = (e.$createElement, e._self._c, e.$u.addUnit(e.height)), n = e.$u.addUnit(e.radius), i = e.loading ? null : e.$u.addUnit(e.height), u = e.loading ? null : e.$u.addUnit(e.previousMargin), o = e.loading ? null : e.$u.addUnit(e.nextMargin), r = e.loading ? null : e.__map(e.list, function(t, n) {
                var i = e.__get_orig(t), u = e.__get_style([ e.itemStyle(n) ]), o = e.$u.test.image(e.getSource(t)), r = o ? e.$u.addUnit(e.height) : null, a = o ? e.$u.addUnit(e.radius) : null, c = o ? e.getSource(t) : null, d = e.$u.test.video(e.getSource(t));
                return {
                    $orig: i,
                    s0: u,
                    g5: o,
                    g6: r,
                    g7: a,
                    m0: c,
                    g8: d,
                    g9: d ? e.$u.addUnit(e.height) : null,
                    m1: d ? e.getSource(t) : null,
                    m2: d ? e.getPoster(t) : null,
                    g10: d ? e.showTitle && e.$u.test.object(t) && t.title : null,
                    g11: e.showTitle && e.$u.test.object(t) && t.title && e.$u.test.image(e.getSource(t))
                };
            }), a = e.__get_style([ e.$u.addStyle(e.indicatorStyle) ]);
            e.$mp.data = Object.assign({}, {
                $root: {
                    g0: t,
                    g1: n,
                    g2: i,
                    g3: u,
                    g4: o,
                    l0: r,
                    s1: a
                }
            });
        }, o = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uni_modules/uview-ui/components/u-swiper/u-swiper-create-component", {
    "uni_modules/uview-ui/components/u-swiper/u-swiper-create-component": function(e, t, n) {
        n("543d").createComponent(n("24d4"));
    }
}, [ [ "uni_modules/uview-ui/components/u-swiper/u-swiper-create-component" ] ] ]);