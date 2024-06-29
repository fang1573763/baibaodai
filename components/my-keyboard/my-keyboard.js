(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/my-keyboard/my-keyboard" ], {
    "5af6": function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {
            return o;
        });
        var o = {
            uIcon: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-icon/u-icon") ]).then(n.bind(null, "faff"));
            }
        }, r = function() {
            var t = this, e = (t.$createElement, t._self._c, t.value ? t.__map(t.numList, function(e, n) {
                return {
                    $orig: t.__get_orig(e),
                    s0: t.__get_style([ t.itemStyle(n) ]),
                    m0: t.hoverClass(n)
                };
            }) : null);
            t._isMounted || (t.e0 = function(t) {
                t.stopPropagation(), t.preventDefault();
            }, t.e1 = function(t) {
                t.stopPropagation(), t.preventDefault();
            }), t.$mp.data = Object.assign({}, {
                $root: {
                    l0: e
                }
            });
        }, a = [];
    },
    "7cc0": function(t, e, n) {},
    a4bf: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("debe"), r = n.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = r.a;
    },
    b224: function(t, e, n) {
        "use strict";
        var o = n("7cc0");
        n.n(o).a;
    },
    debe: function(t, e, n) {
        "use strict";
        var o = n("4ea4");
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = o(n("9dcd")), a = {
            props: {
                mode: {
                    type: String,
                    default: "number"
                },
                dotEnabled: {
                    type: Boolean,
                    default: !0
                },
                random: {
                    type: Boolean,
                    default: !1
                },
                safeAreaInsetBottom: {
                    type: Boolean,
                    default: !1
                },
                value: {
                    type: Boolean,
                    default: !1
                },
                zIndex: {
                    type: [ Number, String ],
                    default: 10075
                },
                defaultVal: {
                    type: [ String ],
                    default: ""
                },
                size: {
                    type: String,
                    default: "mini"
                }
            },
            watch: {
                value: function(t, e) {
                    t && (console.log("defaultVal", this.defaultVal), this.inputStr = this.defaultVal + "");
                }
            },
            data: function() {
                return {
                    backspace: "backspace",
                    dot: ".",
                    timer: null,
                    cardX: "X",
                    maskStyle: {
                        pointerEvents: "none",
                        background: "rgba(0, 0, 0, 0.9)"
                    },
                    inputStr: "",
                    showEqual: !1
                };
            },
            computed: {
                numList: function() {
                    return this.dotEnabled || "number" != this.mode ? this.dotEnabled && "number" == this.mode ? this.random ? this.$u.randomArray([ 1, 2, 3, 4, 5, 6, 7, 8, 9, this.dot, 0 ]) : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, this.dot, 0 ] : "card" == this.mode ? this.random ? this.$u.randomArray([ 1, 2, 3, 4, 5, 6, 7, 8, 9, this.cardX, 0 ]) : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, this.cardX, 0 ] : void 0 : this.random ? this.$u.randomArray([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]) : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];
                },
                itemStyle: function() {
                    var t = this;
                    return function(e) {
                        var n = {};
                        return "number" != t.mode || t.dotEnabled || 9 != e || (n.flex = "0 0 100%"), n;
                    };
                },
                btnBgGray: function() {
                    var t = this;
                    return function(e) {
                        return !(t.random || 9 != e || !("number" != t.mode || "number" == t.mode && t.dotEnabled));
                    };
                },
                hoverClass: function() {
                    var t = this;
                    return function(e) {
                        return !t.random && 9 == e && ("number" == t.mode && t.dotEnabled || "card" == t.mode) ? "u-hover-class" : "my-keyboard-hover";
                    };
                }
            },
            methods: {
                popupClose: function() {
                    this.$emit("input", !1);
                },
                backspaceClick: function() {
                    /\+|\-/g.test(this.inputStr) ? this.showEqual = !0 : this.showEqual = !1, this.inputStr.length && (this.inputStr = this.inputStr.substr(0, this.inputStr.length - 1)), 
                    console.log("this.inputStr888", this.inputStr), this.$emit("backspace");
                },
                confirmClick: function() {
                    var t = /(\+|\-)/i, e = this.inputStr;
                    t.test(this.inputStr) && !t.test(this.inputStr[0]) ? (e = this.calcStrToNumber(this.inputStr), 
                    this.$emit("calculate", e + ""), this.inputStr = e + "") : (this.$emit("confirm", e + ""), 
                    this.inputStr = ""), this.showEqual = !1;
                },
                calcStrToNumber: function(t) {
                    if (!t) return 0;
                    var e = /(\+|\-)$/i, n = /(\+|\-)/i;
                    e.test(t) && (t = t.replace(e, "")), console.log("strfinal0000", t);
                    var o = "", a = "";
                    if (n.test(t[0])) {
                        var i = t.substr(1).match(n);
                        i && (o = i[0]);
                    } else {
                        var u = t.match(n);
                        u && (o = u[0]);
                    }
                    console.log("operator", o);
                    var s = t.split(o)[0], c = t.split(o)[1];
                    if (console.log("num1", s), console.log("num2", c), "+" == o) a = (0, r.default)(s).plus(c).toFixed(2); else {
                        if ("-" != o) return t;
                        a = (0, r.default)(s).minus(c).toFixed(2);
                    }
                    return console.log("result", a), a;
                },
                keyboardClick: function(t) {
                    this.$emit("change", t);
                }
            }
        };
        e.default = a;
    },
    ee4b: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("5af6"), r = n("a4bf");
        for (var a in r) [ "default" ].indexOf(a) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n("b224");
        var i = n("f0c5"), u = Object(i.a)(r.default, o.b, o.c, !1, null, "51ff63fc", null, !1, o.a, void 0);
        e.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/my-keyboard/my-keyboard-create-component", {
    "components/my-keyboard/my-keyboard-create-component": function(t, e, n) {
        n("543d").createComponent(n("ee4b"));
    }
}, [ [ "components/my-keyboard/my-keyboard-create-component" ] ] ]);