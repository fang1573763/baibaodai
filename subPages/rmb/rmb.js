(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPages/rmb/rmb" ], {
    1266: function(t, e, n) {
        "use strict";
        (function(t) {
            var e = n("4ea4");
            n("18e6"), n("33db"), e(n("66fd"));
            var r = e(n("c504"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(r.default);
        }).call(this, n("543d").createPage);
    },
    a710: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("f96c"), i = n.n(r);
        for (var o in r) [ "default" ].indexOf(o) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = i.a;
    },
    c504: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("d0be"), i = n("a710");
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        n("df11");
        var a = n("f0c5"), u = Object(a.a)(i.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = u.exports;
    },
    cd42: function(t, e, n) {},
    d0be: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return o;
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
            uModal: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-modal/u-modal") ]).then(n.bind(null, "672f"));
            }
        }, i = function() {
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
        }, o = [];
    },
    df11: function(t, e, n) {
        "use strict";
        var r = n("cd42");
        n.n(r).a;
    },
    f96c: function(t, e, n) {
        "use strict";
        (function(t) {
            var r = n("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = r(n("278c")), o = r(n("9523")), a = r(n("9dcd")), u = n("fe1d"), s = null, l = {
                data: function() {
                    var t;
                    return t = {
                        type: "",
                        number: "",
                        curIdx: 0,
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
                        rmbList: [ {
                            title: "1分硬币",
                            value: 1,
                            url: "1.0.png",
                            type: 1
                        }, {
                            title: "2分硬币",
                            type: 1,
                            value: 2,
                            url: "2.0.png"
                        }, {
                            title: "5分硬币",
                            type: 1,
                            value: 5,
                            url: "5.0.png"
                        }, {
                            title: "1角硬币",
                            type: 1,
                            value: 10,
                            url: "10.0.png"
                        }, {
                            title: "5角硬币",
                            type: 1,
                            value: 50,
                            url: "50.0.png"
                        }, {
                            title: "1元硬币",
                            type: 1,
                            value: 100,
                            url: "100.0.png"
                        }, {
                            title: "1角纸币",
                            type: 2,
                            value: 10,
                            url: "10.png"
                        }, {
                            title: "5角纸币",
                            type: 2,
                            value: 50,
                            url: "50.png"
                        }, {
                            title: "1元纸币",
                            type: 2,
                            value: 100,
                            url: "100.png"
                        }, {
                            title: "5元纸币",
                            type: 2,
                            value: 500,
                            url: "500.png"
                        }, {
                            title: "10元纸币",
                            type: 2,
                            value: 1e3,
                            url: "1000.png"
                        } ],
                        addList: []
                    }, (0, o.default)(t, "curIdx", 8), (0, o.default)(t, "curRes", !1), t;
                },
                computed: {
                    modalTitle: function() {
                        return this.curIdx + 1 + " / " + this.randomList.length;
                    }
                },
                onLoad: function(e) {
                    var n = this, r = e.type, i = e.number;
                    this.type = r, this.number = i;
                    var o = u.typeMap[r], a = o.min, s = o.max, l = o.symbol, d = o.boundaryVal, c = o.name, h = o.boundaryMin, f = o.boundaryMax;
                    t.setNavigationBarTitle({
                        title: c
                    }), t.showLoading({
                        title: "正在出题..."
                    });
                    var m = this.generate({
                        min: a,
                        max: s,
                        symbol: l,
                        boundaryVal: d,
                        name: c,
                        number: i,
                        boundaryMin: h,
                        boundaryMax: f
                    });
                    t.hideLoading(), console.log("generate888", m), this.randomList = m.map(function(t) {
                        return t.answer2 = n.formatRmb(t.answer), t;
                    }), this.curIdx = 0, this.showKeyBoard = !0, this.startTimer();
                },
                beforeDestroy: function() {
                    this.clearTimer();
                },
                methods: {
                    removeRmb: function(t, e) {
                        this.addList.splice(e, 1);
                    },
                    addRmb: function(t, e) {
                        this.addList.push(t), this.addList.sort(function(t, e) {
                            return t.value - e.value;
                        });
                    },
                    formatRmb: function(t) {
                        if (0 === t) return "0元";
                        var e = t.split("."), n = e[0], r = 0, i = 0;
                        if (e[1]) {
                            var o = String(e[1]);
                            o[0] && (r = o[0]), o[1] && (i = o[1]);
                        }
                        var a = "";
                        return n > 0 && (a += n + "元"), a += r + "角", i > 0 && (a += i + "分"), a;
                    },
                    onShareAppMessage: function(t) {
                        var e = "/subPages/rmb/rmb", n = "?type=".concat(this.type, "&number=").concat(this.number);
                        return "button" === t.from ? (console.log(t.target), {
                            title: u.typeMap[this.type].name + "，欢迎来挑战！",
                            path: e + n
                        }) : {
                            title: u.typeMap[this.type].name + "，欢迎来挑战！",
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
                            var e = this.randomList[this.curIdx];
                            if ("0" === e.result && 0 == t) return e.result = "0", void this.$set(this.randomList, this.curIdx, e);
                            if ("0" === e.result && 0 != t && "." != t) return e.result = String(t), void this.$set(this.randomList, this.curIdx, e);
                            e.result.length < 2 && (e.result = "" + e.result + t, this.$set(this.randomList, this.curIdx, e));
                        }
                    },
                    backspace: function() {
                        var t = this.randomList[this.curIdx];
                        t.result.length && (t.result = t.result.substr(0, t.result.length - 1)), this.$set(this.randomList, this.curIdx, t), 
                        console.log("this.randomList", this.randomList);
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
                    tapBox: function(t) {
                        this.isCalc || (this.curIdx = t, this.showKeyBoard = !0);
                    },
                    submit: function() {
                        this.curRes = this.calculate(), this.randomList[this.curIdx].checkResult = this.curRes, 
                        this.showModal = !0;
                    },
                    next: function() {
                        this.curIdx < this.randomList.length && (this.curIdx++, this.showModal = !1, t.pageScrollTo({
                            scrollTop: 0,
                            duration: 200
                        })), this.addList = [];
                    },
                    finish: function() {
                        this.clearTimer(), this.isCalc = !0, this.showModal = !0;
                        var t = 0;
                        this.randomList.forEach(function(e) {
                            e.checkResult || t++;
                        });
                        var e = (0, a.default)(100).div(this.randomList.length);
                        this.grade = (0, a.default)(100).minus((0, a.default)(t).times(e)).toFixed(0), this.errNo = t, 
                        console.log("错误题目数：", t), console.log("结果：", this.randomList);
                    },
                    generateArr: function(t, e) {
                        for (var n = [ t ], r = t; r < e; r++) n.push(++t);
                        return n;
                    },
                    generate: function(t) {
                        var e = t.min, n = void 0 === e ? 0 : e, r = t.max, i = void 0 === r ? 9 : r, o = t.number, s = void 0 === o ? 10 : o, l = t.symbol, d = void 0 === l ? "+" : l, c = (t.boundaryVal, 
                        t.boundaryMin), h = t.boundaryMax, f = [], m = [], g = [], v = this.generateArr(n, i);
                        v.length > 200 && (v = (0, u.shuffle)(v).splice(0, 200));
                        var p = (0, u.queue)(v, 2);
                        return p.length, "+." == d && (f = (p = p.map(function(t) {
                            return [ (0, a.default)(t[0]).div(100).toFixed(2), (0, a.default)(t[1]).div(100).toFixed(2) ];
                        })).filter(function(t) {
                            return +t[0] + +t[1] >= c && +t[0] + +t[1] <= h;
                        })), console.log("queueRes", p), console.log("this.generateArr(min, max)", this.generateArr(n, i)), 
                        console.log("filterRes", f), console.log("filterRes2", m), m.length > 0 ? (g = this.getRandomArr(f, Math.ceil(s / 2), "+").concat(this.getRandomArr(m, Math.ceil(s / 2), "-")), 
                        g = (0, u.shuffle)(g)) : g = this.getRandomArr(f, s, d.substr(0, 1)), g;
                    },
                    getRandomArr: function() {
                        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, n = arguments.length > 2 ? arguments[2] : void 0, r = (0, 
                        u.shuffle)(t), o = [], a = 0; a < r.length; a++) {
                            var s = (0, i.default)(r[a], 2), l = s[0], d = s[1];
                            if (!(a < e)) break;
                            o.push({
                                first: l,
                                second: d,
                                symbol: n,
                                answer: (0, u.calcStrToNumber)(l + n + d),
                                result: "",
                                total: r.length
                            });
                        }
                        return console.log("result", o), o;
                    },
                    randomNum: function(t, e) {
                        return parseInt(Math.random() * (e - t)) + t;
                    },
                    calculate: function() {
                        var t = this.addList.reduce(function(t, e) {
                            return (0, a.default)(t).plus(e.value);
                        }, 0), e = this.randomList[this.curIdx];
                        return console.log("total", t.toFixed()), console.log("target", e), t.toFixed() == (0, 
                        a.default)(e.answer).times(100).toFixed();
                    }
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    }
}, [ [ "1266", "common/runtime", "common/vendor" ] ] ]);