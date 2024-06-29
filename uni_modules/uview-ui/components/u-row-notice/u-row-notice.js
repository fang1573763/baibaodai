(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uni_modules/uview-ui/components/u-row-notice/u-row-notice" ], {
    "2ba3": function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("f64c"), o = e("df05");
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(u);
        e("fc93");
        var c = e("f0c5"), a = Object(c.a)(o.default, i.b, i.c, !1, null, "7c219a02", null, !1, i.a, void 0);
        n.default = a.exports;
    },
    "4d4e": function(n, e, i) {
        "use strict";
        (function(n) {
            var o = i("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var u = o(i("2eee")), c = o(i("c973")), a = o(i("fd4b")), r = {
                name: "u-row-notice",
                mixins: [ n.$u.mpMixin, n.$u.mixin, a.default ],
                data: function() {
                    return {
                        animationDuration: "0",
                        animationPlayState: "paused",
                        nvueInit: !0,
                        show: !0
                    };
                },
                watch: {
                    text: {
                        immediate: !0,
                        handler: function(t, e) {
                            this.vue(), n.$u.test.string(t) || n.$u.error("noticebar组件direction为row时，要求text参数为字符串形式");
                        }
                    },
                    fontSize: function() {
                        t, this.vue();
                    },
                    speed: function() {
                        this.vue();
                    }
                },
                computed: {
                    textStyle: function() {
                        var t = {};
                        return t.color = this.color, t.animationDuration = this.animationDuration, t.animationPlayState = this.animationPlayState, 
                        t.fontSize = n.$u.addUnit(this.fontSize), t;
                    }
                },
                mounted: function() {
                    this.init();
                },
                methods: {
                    init: function() {
                        this.vue(), n.$u.test.string(this.text) || n.$u.error("noticebar组件direction为row时，要求text参数为字符串形式");
                    },
                    vue: function() {
                        var t = this;
                        return (0, c.default)(u.default.mark(function e() {
                            var i;
                            return u.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return i = 0, e.next = 3, n.$u.sleep();

                                  case 3:
                                    return e.next = 5, t.$uGetRect(".u-notice__content__text");

                                  case 5:
                                    return i = e.sent.width, e.next = 8, t.$uGetRect(".u-notice__content");

                                  case 8:
                                    e.sent.width, t.animationDuration = "".concat(i / n.$u.getPx(t.speed), "s"), t.animationPlayState = "paused", 
                                    setTimeout(function() {
                                        t.animationPlayState = "running";
                                    }, 10);

                                  case 12:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    nvue: function() {
                        return (0, c.default)(u.default.mark(function t() {
                            return u.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    loopAnimation: function(t, n) {},
                    getNvueRect: function(t) {},
                    clickHandler: function(t) {
                        this.$emit("click");
                    },
                    close: function() {
                        this.$emit("close");
                    }
                }
            };
            e.default = r;
        }).call(this, i("543d").default);
    },
    c950: function(t, n, e) {},
    df05: function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("4d4e"), o = e.n(i);
        for (var u in i) [ "default" ].indexOf(u) < 0 && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(u);
        n.default = o.a;
    },
    f64c: function(t, n, e) {
        "use strict";
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return u;
        }), e.d(n, "a", function() {
            return i;
        });
        var i = {
            uIcon: function() {
                return Promise.all([ e.e("common/vendor"), e.e("uni_modules/uview-ui/components/u-icon/u-icon") ]).then(e.bind(null, "faff"));
            }
        }, o = function() {
            this.$createElement;
            var t = (this._self._c, this.__get_style([ this.textStyle ])), n = [ "link", "closable" ].includes(this.mode);
            this.$mp.data = Object.assign({}, {
                $root: {
                    s0: t,
                    g0: n
                }
            });
        }, u = [];
    },
    fc93: function(t, n, e) {
        "use strict";
        var i = e("c950");
        e.n(i).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uni_modules/uview-ui/components/u-row-notice/u-row-notice-create-component", {
    "uni_modules/uview-ui/components/u-row-notice/u-row-notice-create-component": function(t, n, e) {
        e("543d").createComponent(e("2ba3"));
    }
}, [ [ "uni_modules/uview-ui/components/u-row-notice/u-row-notice-create-component" ] ] ]);