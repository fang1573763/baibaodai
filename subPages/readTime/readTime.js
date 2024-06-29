(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPages/readTime/readTime" ], {
    1495: function(t, e, n) {
        "use strict";
        (function(t) {
            var e = n("4ea4");
            n("18e6"), n("33db"), e(n("66fd"));
            var r = e(n("38d8"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(r.default);
        }).call(this, n("543d").createPage);
    },
    "38d8": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("9378"), o = n("f3a1");
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n("9b22");
        var a = n("f0c5"), s = Object(a.a)(o.default, r.b, r.c, !1, null, "bda4b53e", null, !1, r.a, void 0);
        e.default = s.exports;
    },
    9378: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return r;
        });
        var r = {
            uButton: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-button/u-button") ]).then(n.bind(null, "7dbb"));
            },
            uIcon: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-icon/u-icon") ]).then(n.bind(null, "faff"));
            },
            myKeyboard: function() {
                return n.e("components/my-keyboard/my-keyboard").then(n.bind(null, "ee4b"));
            },
            uModal: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-modal/u-modal") ]).then(n.bind(null, "672f"));
            }
        }, o = function() {
            var t = this;
            t.$createElement, t._self._c, t._isMounted || (t.e0 = function(e) {
                t.showModal = !1;
            }, t.e1 = function(e) {
                t.showModal = !1;
            }, t.e2 = function(e) {
                t.showModal = !1;
            });
        }, i = [];
    },
    "9a20": function(t, e, n) {
        "use strict";
        (function(t) {
            var r = n("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = r(n("278c")), i = r(n("9dcd")), a = n("fe1d"), s = null, u = {
                data: function() {
                    return {
                        type: "",
                        number: "",
                        curIdx: 0,
                        inputIdx: 0,
                        randomList: [],
                        isCalc: !1,
                        showKeyBoard: !1,
                        showModal: !1,
                        errNo: 0,
                        timer: 0,
                        formartTimer: {},
                        grade: 0,
                        shareBtnCustomStyle: {
                            background: "transparent",
                            padding: "0",
                            color: "#19be6b",
                            fontSize: "28rpx",
                            marginLeft: "12rpx",
                            border: "none",
                            outline: "none",
                            width: "220rpx",
                            minWidth: "0",
                            minHeight: "88rpx"
                        },
                        rmbList: [],
                        curRes: !1,
                        minute: 0,
                        rotateMinute: 0,
                        rotateHour: 0
                    };
                },
                computed: {
                    modalTitle: function() {
                        return this.curIdx + 1 + " / " + this.randomList.length;
                    }
                },
                onLoad: function(e) {
                    var n = this, r = e.type, o = e.number;
                    this.type = r, this.number = o;
                    var i = a.typeMap[r], s = i.min, u = i.max, c = i.symbol, l = i.boundaryVal, d = i.name, h = i.boundaryMin, m = i.boundaryMax;
                    t.setNavigationBarTitle({
                        title: d
                    }), t.showLoading({
                        title: "正在出题..."
                    });
                    var f = this.generate({
                        min: s,
                        max: u,
                        symbol: c,
                        boundaryVal: l,
                        name: d,
                        number: o,
                        boundaryMin: h,
                        boundaryMax: m
                    });
                    t.hideLoading(), console.log("generate888", f), this.randomList = f.map(function(t) {
                        var e = n.formatHm(+t.answer), r = e.hour, o = e.minute;
                        return t.hour = r, t.minute = o, t;
                    }), this.setTime(), this.inputIdx = "0,hour", this.showKeyBoard = !0, this.startTimer();
                },
                beforeDestroy: function() {
                    this.clearTimer();
                },
                methods: {
                    setTime: function() {
                        var t = this.randomList[this.curIdx], e = 60 * t.hour + t.minute;
                        this.slideChangeing(e);
                    },
                    slideChangeing: function(t) {
                        var e = 6 * t;
                        this.rotateHour = "rotate(".concat(e / 12, "deg)"), this.rotateMinute = "rotate(".concat(e, "deg)");
                    },
                    tapBox: function(t) {
                        if (console.log(t), !this.isCalc && !this.showAnswerModal) {
                            var e = t.split(","), n = (0, o.default)(e, 2);
                            n[0], n[1], this.inputIdx = t, this.showKeyBoard = !0;
                        }
                    },
                    formatHm: function(t) {
                        return {
                            hour: parseInt(t / 60),
                            minute: parseInt(t % 60)
                        };
                    },
                    onShareAppMessage: function(t) {
                        var e = "/subPages/readTime/readTime", n = "?type=".concat(this.type, "&number=").concat(this.number);
                        return "button" === t.from ? (console.log(t.target), {
                            title: a.typeMap[this.type].name + "，欢迎来挑战！",
                            path: e + n
                        }) : {
                            title: a.typeMap[this.type].name + "，欢迎来挑战！",
                            path: e + n
                        };
                    },
                    formatTime: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = parseInt(t / 60), n = parseInt(t % 60);
                        return {
                            hour: (e = e < 10 ? "0" + e : e) > 999 ? 999 : e,
                            minute: n = n < 10 ? "0" + n : n
                        };
                    },
                    startTimer: function() {
                        var t = this;
                        this.clearTimer(), this.timer = 0, this.formartTimer = this.formatTime(this.timer), 
                        s = setInterval(function() {
                            t.timer += 1, t.formartTimer = t.formatTime(t.timer);
                        }, 1e3);
                    },
                    clearTimer: function() {
                        s && (clearInterval(s), s = null);
                    },
                    onKeyboardChange: function(t) {
                        if (console.log("onKeyboardChange", t), "关闭" === t) this.showKeyBoard = !1; else {
                            var e = this.inputIdx.split(","), n = (0, o.default)(e, 2), r = n[0], i = n[1], a = this.randomList[r];
                            if (console.log("onKeyboardChange", r, i), "0" === a["".concat(i, "_res")] && 0 == t) return a["".concat(i, "_res")] = "0", 
                            void this.$set(this.randomList, r, a);
                            if ("0" === a["".concat(i, "_res")] && 0 != t && "." != t) return a["".concat(i, "_res")] = String(t), 
                            void this.$set(this.randomList, r, a);
                            a["".concat(i, "_res")].length < 2 && (a["".concat(i, "_res")] = "" + a["".concat(i, "_res")] + t, 
                            this.$set(this.randomList, r, a));
                        }
                    },
                    backspace: function() {
                        var t = this.inputIdx.split(","), e = (0, o.default)(t, 2), n = e[0], r = e[1], i = this.randomList[n];
                        i["".concat(r, "_res")].length && (i["".concat(r, "_res")] = i["".concat(r, "_res")].substr(0, i["".concat(r, "_res")].length - 1)), 
                        this.$set(this.randomList, n, i), console.log("this.randomList", this.randomList);
                    },
                    confirm: function() {
                        this.showKeyBoard = !1;
                    },
                    navigateBack: function() {
                        t.navigateBack({
                            delta: -1,
                            fail: function() {
                                t.switchTab({
                                    url: "/pages/wholeGrade/wholeGrade"
                                });
                            }
                        });
                    },
                    submit: function() {
                        this.curRes = this.calculate(), this.randomList[this.curIdx].checkResult = this.curRes, 
                        this.showModal = !0, this.showKeyBoard = !1;
                    },
                    next: function() {
                        this.curIdx < this.randomList.length && (this.curIdx++, this.showModal = !1, this.showKeyBoard = !0, 
                        t.pageScrollTo({
                            scrollTop: 0,
                            duration: 200
                        }), this.setTime(), this.inputIdx = "".concat(this.curIdx, ",hour"));
                    },
                    finish: function() {
                        this.clearTimer(), this.isCalc = !0, this.showModal = !0;
                        var t = 0;
                        this.randomList.forEach(function(e) {
                            e.checkResult || t++;
                        });
                        var e = (0, i.default)(100).div(this.randomList.length);
                        this.grade = (0, i.default)(100).minus((0, i.default)(t).times(e)).toFixed(0), this.errNo = t, 
                        console.log("错误题目数：", t), console.log("结果：", this.randomList);
                    },
                    generateArr: function(t, e) {
                        for (var n = [ t ], r = t; r < e; r++) n.push(++t);
                        return n;
                    },
                    generate: function(t) {
                        var e = t.min, n = void 0 === e ? 0 : e, r = t.max, o = void 0 === r ? 9 : r, i = t.number, s = void 0 === i ? 10 : i, u = t.symbol, c = void 0 === u ? "+" : u, l = (t.boundaryVal, 
                        t.boundaryMin), d = t.boundaryMax, h = [], m = this.generateArr(n, o);
                        m.length > 200 && (m = (0, a.shuffle)(m).splice(0, 200));
                        var f = (0, a.queue)(m, 2);
                        return f.length, "+" == c && (h = f.filter(function(t) {
                            return +t[0] + +t[1] >= l && +t[0] + +t[1] <= d;
                        })), console.log("queueRes", f), console.log("this.generateArr(min, max)", this.generateArr(n, o)), 
                        console.log("filterRes", h), this.getRandomArr(h, s, c.substr(0, 1));
                    },
                    getRandomArr: function() {
                        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, n = arguments.length > 2 ? arguments[2] : void 0, r = (0, 
                        a.shuffle)(t), i = [], s = 0; s < r.length; s++) {
                            var u = (0, o.default)(r[s], 2), c = u[0], l = u[1];
                            if (!(s < e)) break;
                            i.push({
                                first: c,
                                second: l,
                                symbol: n,
                                answer: (0, a.calcStrToNumber)(c + n + l),
                                result: "",
                                hour_res: "",
                                minute_res: "",
                                total: r.length
                            });
                        }
                        return console.log("result", i), i;
                    },
                    randomNum: function(t, e) {
                        return parseInt(Math.random() * (e - t)) + t;
                    },
                    calculate: function() {
                        var t = this.randomList[this.curIdx];
                        return console.log("target", t), !!(t && t.hour_res && t.minute_res && t.hour == t.hour_res && t.minute == t.minute_res);
                    }
                }
            };
            e.default = u;
        }).call(this, n("543d").default);
    },
    "9b22": function(t, e, n) {
        "use strict";
        var r = n("c45a");
        n.n(r).a;
    },
    c45a: function(t, e, n) {},
    f3a1: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("9a20"), o = n.n(r);
        for (var i in r) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    }
}, [ [ "1495", "common/runtime", "common/vendor" ] ] ]);