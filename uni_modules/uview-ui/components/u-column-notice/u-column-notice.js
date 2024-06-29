(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uni_modules/uview-ui/components/u-column-notice/u-column-notice" ], {
    "0216": function(n, t, e) {},
    "09c5": function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e("4682"), i = e.n(o);
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(u);
        t.default = i.a;
    },
    "2d49": function(n, t, e) {
        "use strict";
        e.d(t, "b", function() {
            return i;
        }), e.d(t, "c", function() {
            return u;
        }), e.d(t, "a", function() {
            return o;
        });
        var o = {
            uIcon: function() {
                return Promise.all([ e.e("common/vendor"), e.e("uni_modules/uview-ui/components/u-icon/u-icon") ]).then(e.bind(null, "faff"));
            }
        }, i = function() {
            this.$createElement;
            var n = (this._self._c, this.__get_style([ this.textStyle ])), t = [ "link", "closable" ].includes(this.mode);
            this.$mp.data = Object.assign({}, {
                $root: {
                    s0: n,
                    g0: t
                }
            });
        }, u = [];
    },
    4682: function(n, t, e) {
        "use strict";
        (function(n) {
            var o = e("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = o(e("6c2d")), u = {
                mixins: [ n.$u.mpMixin, n.$u.mixin, i.default ],
                watch: {
                    text: {
                        immediate: !0,
                        handler: function(t, e) {
                            n.$u.test.array(t) || n.$u.error("noticebar组件direction为column时，要求text参数为数组形式");
                        }
                    }
                },
                computed: {
                    textStyle: function() {
                        var t = {};
                        return t.color = this.color, t.fontSize = n.$u.addUnit(this.fontSize), t;
                    },
                    vertical: function() {
                        return "horizontal" != this.mode;
                    }
                },
                data: function() {
                    return {
                        index: 0
                    };
                },
                methods: {
                    noticeChange: function(n) {
                        this.index = n.detail.current;
                    },
                    clickHandler: function() {
                        this.$emit("click", this.index);
                    },
                    close: function() {
                        this.$emit("close");
                    }
                }
            };
            t.default = u;
        }).call(this, e("543d").default);
    },
    "6ca2": function(n, t, e) {
        "use strict";
        var o = e("0216");
        e.n(o).a;
    },
    e4bf: function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e("2d49"), i = e("09c5");
        for (var u in i) [ "default" ].indexOf(u) < 0 && function(n) {
            e.d(t, n, function() {
                return i[n];
            });
        }(u);
        e("6ca2");
        var c = e("f0c5"), r = Object(c.a)(i.default, o.b, o.c, !1, null, "30156c80", null, !1, o.a, void 0);
        t.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uni_modules/uview-ui/components/u-column-notice/u-column-notice-create-component", {
    "uni_modules/uview-ui/components/u-column-notice/u-column-notice-create-component": function(n, t, e) {
        e("543d").createComponent(e("e4bf"));
    }
}, [ [ "uni_modules/uview-ui/components/u-column-notice/u-column-notice-create-component" ] ] ]);