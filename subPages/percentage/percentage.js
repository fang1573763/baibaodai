(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPages/percentage/percentage" ], {
    "0b69": function(t, e, n) {
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
                        curIdx: "0",
                        curRes: !1,
                        randomList: [],
                        isCalc: !1,
                        showKeyBoard: !0,
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
                        }
                    };
                },
                computed: {
                    item: function() {
                        return this.randomList[Number(this.curIdx[0])];
                    },
                    modalTitle: function() {
                        return this.showModal ? Number(this.curIdx[0]) + 1 + " / " + this.randomList.length : "  ";
                    }
                },
                onLoad: function(e) {
                    var n = e.type, r = e.number;
                    this.type = n, this.number = r;
                    var o = a.typeMap[n], i = o.min, s = o.max, u = o.symbol, c = o.boundaryMin, l = o.boundaryMax, d = (o.boundaryVal, 
                    o.firstMin), f = o.secondMin, h = o.firstMax, m = o.secondMax, p = o.name, b = o.step, g = o.thirdMin, v = o.thirdMax;
                    console.log("typeMap", a.typeMap), t.setNavigationBarTitle({
                        title: p
                    }), t.showLoading({
                        title: "正在出题..."
                    });
                    var y = this.generate({
                        min: i,
                        max: s,
                        number: r,
                        symbol: u,
                        boundaryMin: c,
                        boundaryMax: l,
                        firstMin: d,
                        secondMin: f,
                        firstMax: h,
                        secondMax: m,
                        step: b,
                        thirdMin: g,
                        thirdMax: v
                    });
                    t.hideLoading(), console.log("generate888", y), this.randomList = y, y && y[0] && (0 == y[0].type ? this.curIdx = "0,first_res" : 1 == y[0].type && (this.curIdx = "0,result1")), 
                    this.startTimer();
                },
                beforeDestroy: function() {
                    this.clearTimer();
                },
                methods: {
                    onShareAppMessage: function(t) {
                        var e = "/subPages/percentage/percentage", n = "?type=".concat(this.type, "&number=").concat(this.number);
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
                        console.log("onKeyboardChange", t);
                        var e = this.curIdx.split(","), n = (0, o.default)(e, 2), r = n[0], i = n[1];
                        console.log("type", i);
                        var a = this.randomList[r];
                        return "0" === a["".concat(i)] && 0 == t ? (a["".concat(i)] = "0", void this.$set(this.randomList, r, a)) : "0" === a["".concat(i)] && 0 != t && "." != t ? (a["".concat(i)] = String(t), 
                        void this.$set(this.randomList, r, a)) : (a["".concat(i)].length < 3 && (a["".concat(i)] = "" + a["".concat(i)] + t, 
                        this.$set(this.randomList, r, a)), void console.log("target[`${type}`]", a["".concat(i)]));
                    },
                    backspace: function() {
                        var t = this.curIdx.split(","), e = (0, o.default)(t, 2), n = e[0], r = e[1], i = this.randomList[n];
                        i["".concat(r)].length && (i["".concat(r)] = i["".concat(r)].substr(0, i["".concat(r)].length - 1)), 
                        this.$set(this.randomList, n, i), console.log("this.randomList", this.randomList);
                    },
                    confirm: function() {},
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
                    tapBox: function(t) {
                        if (!this.isCalc) {
                            var e = t.split(","), n = (0, o.default)(e, 2);
                            n[0], n[1], this.curIdx = t;
                        }
                    },
                    submit: function() {
                        this.curRes = this.startCalculate(this.randomList, +this.curIdx[0]), this.showModal = !0;
                    },
                    next: function() {
                        var e = this.curIdx.split(","), n = (0, o.default)(e, 2), r = n[0], i = (n[1], this.randomList[+r + 1]);
                        console.log("item", i), +r < this.randomList.length && (i && (0 == i.type ? this.curIdx = "".concat(+r + 1, ",first_res") : 1 == i.type && (this.curIdx = "".concat(+r + 1, ",result1"))), 
                        this.showModal = !1, console.log("this.showModal", this.showModal), t.pageScrollTo({
                            scrollTop: 0,
                            duration: 200
                        }));
                    },
                    finish: function() {
                        this.clearTimer(), this.isCalc = !0;
                        var t = this.randomList.filter(function(t) {
                            return !t.correct;
                        }).length, e = (0, i.default)(100).div(this.randomList.length);
                        this.grade = (0, i.default)(100).minus((0, i.default)(t).times(e)).toFixed(0), this.errNo = t, 
                        console.log("错误题目数：", t), console.log("结果：", this.randomList);
                    },
                    generateArr: function(t, e) {
                        for (var n = [ t ], r = t; r < e; r++) n.push(++t);
                        return n;
                    },
                    formatRmb: function(t) {
                        if (0 === t) return "0元";
                        var e = t.split("."), n = e[0], r = 0, o = 0;
                        if (e[1]) {
                            var i = String(e[1]);
                            i[0] && (r = i[0]), i[1] && (o = i[1]);
                        }
                        var a = "";
                        return n > 0 && (a += n + "元"), r > 0 && (a += r + "角"), o > 0 && (a += o + "分"), 
                        {
                            str: a,
                            yuan: n,
                            jiao: r,
                            fen: o
                        };
                    },
                    generate: function(t) {
                        var e, n = t.min, r = t.max, o = t.number, i = t.symbol, s = t.boundaryMin, u = t.boundaryMax, c = t.firstMin, l = t.secondMin, d = t.firstMax, f = t.secondMax, h = (t.step, 
                        []), m = this.generateArr(n, r);
                        m.length >= 200 && (m = (0, a.shuffle)(m).splice(0, 200)), console.log("continuousArr", m);
                        var p = (0, a.queue)(m, 2);
                        return p.length, "÷/" == i && (h = p.filter(function(t) {
                            return t[0] >= c && t[0] <= d && t[1] >= l && t[1] <= f && !(t[0] % 2 == 0 && t[1] % 2 == 0) && !(t[1] % t[0] == 0) && +t[0] / +t[1] >= s && +t[0] / +t[1] <= u;
                        })), e = this.getRandomArr(h, o, i.substr(0, 1)), console.log("queueRes", p), console.log("filterRes", h), 
                        e;
                    },
                    getRandomArr: function() {
                        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, r = arguments.length > 2 ? arguments[2] : void 0, i = (0, 
                        a.shuffle)(e), s = [], u = 0; u < i.length; u++) {
                            var c = (0, o.default)(i[u], 2), l = c[0], d = c[1], f = (0, a.calcStrToNumber)(l + r + d);
                            if (!(u < n)) break;
                            s.push({
                                first: l,
                                symbol: r,
                                second: d,
                                answer: f,
                                result: "",
                                first_res: "",
                                second_res: "",
                                result1: "",
                                result2: "",
                                type: t.$u.random(0, 1),
                                total: i.length
                            });
                        }
                        return s;
                    },
                    randomNum: function(t, e) {
                        return parseInt(Math.random() * (e - t)) + t;
                    },
                    startCalculate: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 ? arguments[1] : void 0, n = t[e];
                        return 1 == n.type ? +n.result1 == +n.first && +n.result2 == +n.second ? n.correct = !0 : n.correct = !1 : (n.correct = !0, 
                        +n.first != +n.first_res && (n.correct = !1), +n.second != +n.second_res && (n.correct = !1)), 
                        n.correct;
                    }
                }
            };
            e.default = u;
        }).call(this, n("543d").default);
    },
    "28c3": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("0b69"), o = n.n(r);
        for (var i in r) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    "3b72": function(t, e, n) {
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
            var t = this, e = (t.$createElement, t._self._c, Number(t.curIdx[0])), n = Number(t.curIdx[0]) == t.randomList.length - 1 && t.isCalc, r = Number(t.curIdx[0]), o = Number(t.curIdx[0]) === t.randomList.length - 1 && !t.isCalc;
            t._isMounted || (t.e0 = function(e) {
                t.showModal = !0;
            }, t.e1 = function(e) {
                t.showModal = !1;
            }, t.e2 = function(e) {
                t.showModal = !1;
            }, t.e3 = function(e) {
                t.showModal = !1;
            }), t.$mp.data = Object.assign({}, {
                $root: {
                    m0: e,
                    m1: n,
                    m2: r,
                    m3: o
                }
            });
        }, i = [];
    },
    6366: function(t, e, n) {},
    a4c3: function(t, e, n) {
        "use strict";
        var r = n("6366");
        n.n(r).a;
    },
    b299: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("3b72"), o = n("28c3");
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n("a4c3");
        var a = n("f0c5"), s = Object(a.a)(o.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = s.exports;
    },
    f9dc: function(t, e, n) {
        "use strict";
        (function(t) {
            var e = n("4ea4");
            n("18e6"), n("33db"), e(n("66fd"));
            var r = e(n("b299"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(r.default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "f9dc", "common/runtime", "common/vendor" ] ] ]);