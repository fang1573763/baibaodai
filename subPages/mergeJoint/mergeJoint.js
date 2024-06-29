(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPages/mergeJoint/mergeJoint" ], {
    "08fb": function(t, e, n) {},
    "0989": function(t, e, n) {
        "use strict";
        (function(t) {
            var e = n("4ea4");
            n("18e6"), n("33db"), e(n("66fd"));
            var o = e(n("5fbd"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default);
        }).call(this, n("543d").createPage);
    },
    "4b92": function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return o;
        });
        var o = {
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
        }, r = function() {
            var t = this;
            t.$createElement, t._self._c, t._isMounted || (t.e0 = function(e) {
                t.showModal = !0;
            }, t.e1 = function(e) {
                t.showModal = !1;
            }, t.e2 = function(e) {
                t.showModal = !1;
            }, t.e3 = function(e) {
                t.showModal = !1;
            });
        }, i = [];
    },
    "5abd": function(t, e, n) {
        "use strict";
        (function(t) {
            var o = n("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = o(n("278c")), i = o(n("9523")), a = o(n("9dcd")), s = n("fe1d"), u = null, l = {
                data: function() {
                    var t;
                    return t = {
                        randomList: [],
                        formartTimer: {},
                        type: "",
                        number: "",
                        curIdx: 0,
                        curRes: !1
                    }, (0, i.default)(t, "randomList", []), (0, i.default)(t, "isCalc", !1), (0, i.default)(t, "showKeyBoard", !0), 
                    (0, i.default)(t, "showModal", !1), (0, i.default)(t, "errNo", 0), (0, i.default)(t, "timer", 0), 
                    (0, i.default)(t, "formartTimer", {}), (0, i.default)(t, "grade", 0), (0, i.default)(t, "shareBtnCustomStyle", {
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
                    }), (0, i.default)(t, "showAnswerModal", !1), (0, i.default)(t, "needWatchVideo", !0), 
                    t;
                },
                computed: {
                    item: function() {
                        return this.randomList[this.curIdx];
                    },
                    modalTitle: function() {
                        return this.showModal ? this.curIdx + 1 + " / " + this.randomList.length : "  ";
                    }
                },
                onLoad: function(e) {
                    var n = e.type, o = e.number;
                    console.log("option", e), this.type = n, this.number = o;
                    var r = s.typeMap[n], i = r.min, a = r.max, u = r.symbol, l = r.boundaryVal, c = r.name;
                    t.setNavigationBarTitle({
                        title: c
                    }), t.showLoading({
                        title: "正在出题..."
                    });
                    var d = this.generate({
                        min: i,
                        max: a,
                        symbol: u,
                        boundaryVal: l,
                        name: c,
                        number: o
                    });
                    t.hideLoading(), console.log("generate888", d), this.randomList = d, this.curIdx = 0, 
                    this.startTimer();
                },
                onShow: function() {
                    var t = this.getVideoStorage();
                    console.log("onShow--getVideoStorage", t), this.needWatchVideo = !t;
                },
                beforeDestroy: function() {
                    this.clearTimer(), this.clearVideoStorage();
                },
                methods: {
                    getVideoStorage: function() {
                        return t.getStorageSync("last_video_time");
                    },
                    setVideoStorage: function() {
                        t.setStorage({
                            key: "last_video_time",
                            data: Date.now() + "",
                            success: function() {
                                console.log("success", Date.now() + "");
                            }
                        });
                    },
                    clearVideoStorage: function() {
                        t.setStorage({
                            key: "last_video_time",
                            data: "",
                            success: function() {
                                console.log("success", "");
                            }
                        });
                    },
                    watchVideo: function() {
                        var t = this.getVideoStorage();
                        this.needWatchVideo = !t, this.showAnswerModal = !0;
                    },
                    closeAnswerModal: function() {
                        this.showAnswerModal = !1;
                    },
                    onShareAppMessage: function(t) {
                        var e = "/subPages/mergeJoint/mergeJoint", n = "?type=".concat(this.type, "&number=").concat(this.number);
                        return "button" === t.from ? (console.log(t.target), {
                            title: s.typeMap[this.type].name + "，欢迎来挑战！",
                            path: e + n
                        }) : {
                            title: s.typeMap[this.type].name + "，欢迎来挑战！",
                            path: e + n
                        };
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
                    startTimer: function() {
                        var t = this;
                        this.clearTimer(), this.timer = 0, this.formartTimer = this.formatTime(this.timer), 
                        u = setInterval(function() {
                            t.timer += 1, t.formartTimer = t.formatTime(t.timer);
                        }, 1e3);
                    },
                    clearTimer: function() {
                        u && (clearInterval(u), u = null);
                    },
                    formatTime: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = parseInt(t / 60), n = parseInt(t % 60);
                        return {
                            hour: (e = e < 10 ? "0" + e : e) > 999 ? 999 : e,
                            minute: n = n < 10 ? "0" + n : n
                        };
                    },
                    tapBox: function(t) {
                        this.isCalc || (this.curIdx = t);
                    },
                    onKeyboardChange: function(t) {
                        console.log("onKeyboardChange", t);
                        var e = this.randomList[this.curIdx];
                        return "0" === e.result && 0 == t ? (e.result = "0", void this.$set(this.randomList, this.curIdx, e)) : e.result.length > 0 ? (e.result = String(t), 
                        void this.$set(this.randomList, this.curIdx, e)) : void (e.result.length < 2 && (e.result = "" + e.result + t, 
                        this.$set(this.randomList, this.curIdx, e)));
                    },
                    backspace: function() {
                        var t = this.randomList[this.curIdx];
                        t.result.length && (t.result = t.result.substr(0, t.result.length - 1)), this.$set(this.randomList, this.curIdx, t), 
                        console.log("this.randomList", this.randomList);
                    },
                    confirm: function() {
                        console.log("confirm");
                    },
                    submit: function() {
                        this.curRes = this.startCalculate(this.randomList, this.curIdx), this.showModal = !0;
                    },
                    next: function() {
                        this.curIdx < this.randomList.length && (this.curIdx++, this.showModal = !1, t.pageScrollTo({
                            scrollTop: 0,
                            duration: 200
                        }));
                    },
                    finish: function() {
                        this.clearTimer(), this.isCalc = !0;
                        var t = this.randomList.filter(function(t) {
                            return !t.correct;
                        }).length, e = (0, a.default)(100).div(this.randomList.length);
                        this.grade = (0, a.default)(100).minus((0, a.default)(t).times(e)).toFixed(0), this.errNo = t, 
                        console.log("错误题目数：", t), console.log("结果：", this.randomList);
                    },
                    startCalculate: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 ? arguments[1] : void 0, n = t[e];
                        return 3 == n.type ? (n.correct = n.answer == n.result, n.finalRes = n.answer) : 2 == n.type ? (n.correct = n.second == n.result, 
                        n.finalRes = n.second) : 1 == n.type && (n.correct = n.first == n.result, n.finalRes = n.first), 
                        n.correct;
                    },
                    generateArr: function(t, e) {
                        for (var n = [ t ], o = t; o < e; o++) n.push(++t);
                        return n;
                    },
                    generate: function(t) {
                        var e, n = t.min, o = void 0 === n ? 0 : n, r = t.max, i = void 0 === r ? 9 : r, a = t.number, u = void 0 === a ? 10 : a, l = t.symbol, c = void 0 === l ? "+" : l, d = t.boundaryVal, h = void 0 === d ? 10 : d, f = [], m = (0, 
                        s.queue)(this.generateArr(o, i), 2);
                        return m.length, "+" == c && (f = m.filter(function(t) {
                            return t[0] + t[1] < h;
                        })), e = this.getRandomArr(f, u, c.substr(0, 1)), console.log("queueRes", m), console.log("this.generateArr(min, max)", this.generateArr(o, i)), 
                        console.log("filterRes", f), e;
                    },
                    getRandomArr: function() {
                        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, n = arguments.length > 2 ? arguments[2] : void 0, o = (0, 
                        s.shuffle)(t), i = [], a = 0; a < o.length; a++) {
                            var u = (0, r.default)(o[a], 2), l = u[0], c = u[1];
                            if (!(a < e)) break;
                            i.push({
                                first: l,
                                second: c,
                                symbol: n,
                                answer: (0, s.calcStrToNumber)(l + n + c),
                                result: "",
                                type: Math.ceil(3 * Math.random()),
                                total: o.length
                            });
                        }
                        return console.log("result", i), i;
                    }
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    },
    "5fbd": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("4b92"), r = n("d714");
        for (var i in r) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("e97d");
        var a = n("f0c5"), s = Object(a.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = s.exports;
    },
    d714: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("5abd"), r = n.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = r.a;
    },
    e97d: function(t, e, n) {
        "use strict";
        var o = n("08fb");
        n.n(o).a;
    }
}, [ [ "0989", "common/runtime", "common/vendor" ] ] ]);