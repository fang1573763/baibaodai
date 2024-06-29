(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPages/rmbExchange/rmbExchange" ], {
    "174a": function(t, e, n) {
        "use strict";
        (function(t) {
            var e = n("4ea4");
            n("18e6"), n("33db"), e(n("66fd"));
            var o = e(n("c782"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default);
        }).call(this, n("543d").createPage);
    },
    "4ee9": function(t, e, n) {},
    "5e28": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("93c6"), a = n.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = a.a;
    },
    "8bcb": function(t, e, n) {
        "use strict";
        var o = n("4ee9");
        n.n(o).a;
    },
    "93c6": function(t, e, n) {
        "use strict";
        (function(t) {
            var o = n("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(n("278c")), i = o(n("9dcd")), r = n("fe1d"), s = null, c = "", u = {
                data: function() {
                    return {
                        type: "",
                        number: "",
                        curIdx: 0,
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
                        },
                        paperW: 794,
                        paperH: 1123,
                        showAnswerModal: !1,
                        needWatchVideo: !0,
                        name: "",
                        hasModal: !1
                    };
                },
                computed: {
                    item: function() {
                        return console.log("this.curIdx", this.curIdx), console.log("item", this.randomList[Number(this.curIdx[0])]), 
                        this.randomList[Number(this.curIdx[0])];
                    },
                    modalTitle: function() {
                        return this.showModal ? Number(this.curIdx[0]) + 1 + " / " + this.randomList.length : "  ";
                    }
                },
                onLoad: function(e) {
                    var n = e.type, o = e.number;
                    this.type = n, this.number = o;
                    var a = r.typeMap[n], i = a.min, s = a.max, c = a.symbol, u = a.boundaryMin, l = a.boundaryMax, d = (a.boundaryVal, 
                    a.firstMin), h = a.secondMin, f = a.firstMax, m = a.secondMax, g = a.name, v = a.step, p = a.thirdMin, b = a.thirdMax;
                    console.log("typeMap", r.typeMap), this.name = g, t.setNavigationBarTitle({
                        title: g
                    }), t.showLoading({
                        title: "正在出题..."
                    });
                    var x = this.generate({
                        min: i,
                        max: s,
                        number: o,
                        symbol: c,
                        boundaryMin: u,
                        boundaryMax: l,
                        firstMin: d,
                        secondMin: h,
                        firstMax: f,
                        secondMax: m,
                        step: v,
                        thirdMin: p,
                        thirdMax: b
                    });
                    t.hideLoading(), console.log("generate888", x), this.randomList = x, x && x[0] && (1 == x[0].type ? this.curIdx = "0,result" : x[0].yuan && 0 != x[0].yuan ? this.curIdx = "0,yuan_res" : x[0].jiao && 0 != x[0].jiao ? this.curIdx = "0,jiao_res" : x[0].fen && 0 != x[0].fen && (this.curIdx = "0,fen_res")), 
                    this.startTimer();
                },
                onShow: function() {
                    var t = this.getVideoStorage();
                    console.log("onShow--getVideoStorage", t), this.needWatchVideo = !t, this.drawPoster();
                },
                beforeDestroy: function() {
                    this.clearTimer();
                },
                methods: {
                    onShareAppMessage: function(t) {
                        var e = "/subPages/rmbExchange/rmbExchange", n = "?type=".concat(this.type, "&number=").concat(this.number);
                        return "button" === t.from ? (console.log(t.target), {
                            title: r.typeMap[this.type].name + "，欢迎来挑战！",
                            path: e + n
                        }) : {
                            title: r.typeMap[this.type].name + "，欢迎来挑战！",
                            path: e + n
                        };
                    },
                    doSave: function(e) {
                        console.log("doSave");
                        var n = this;
                        t.canvasToTempFilePath({
                            canvasId: 1 == e ? "questionCanvas" : "answerCanvas",
                            x: 0,
                            y: 0,
                            width: 794,
                            height: 1123,
                            success: function(e) {
                                console.log(e.tempFilePath), t.saveImageToPhotosAlbum({
                                    filePath: e.tempFilePath,
                                    success: function(e) {
                                        t.showToast({
                                            icon: "none",
                                            title: "已保存到相册",
                                            duration: 3e3
                                        }), n.showModal = !1;
                                    },
                                    fail: function(e) {
                                        e.errMsg.indexOf("auth deny") > -1 && !n.hasModal && (n.hasModal = !0, t.showModal({
                                            title: "请允许添加到相册",
                                            content: "点击“去设置”前往设置中心",
                                            confirmText: "去设置",
                                            success: function(e) {
                                                e.confirm ? t.openSetting({
                                                    success: function(e) {
                                                        n.hasModal = !1, e.authSetting["scope.writePhotosAlbum"] ? n.savePoster() : t.showToast({
                                                            icon: "none",
                                                            title: "请允许添加到相册，否则无法保存图片",
                                                            duration: 3e3
                                                        });
                                                    }
                                                }) : (n.hasModal = !1, t.showToast({
                                                    icon: "none",
                                                    title: "请允许添加到相册，否则无法保存图片",
                                                    duration: 3e3
                                                }));
                                            },
                                            fail: function(t) {
                                                console.log("complete---err", t);
                                            },
                                            complete: function(t) {
                                                console.log("complete--err", t);
                                            }
                                        }));
                                    }
                                });
                            },
                            fail: function(t) {
                                console.log("err", t);
                            }
                        });
                    },
                    drawPoster: function() {
                        this.drawCanvas(), this.drawCanvas(!0);
                    },
                    savePoster: function() {
                        var t = this;
                        this.doSave(1), setTimeout(function() {
                            t.doSave(2);
                        }, 200);
                    },
                    drawCanvas: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n = e ? "answerCanvas" : "questionCanvas", o = t.createCanvasContext(n);
                        o.fillStyle = "#fff", o.fillRect(0, 0, 794, 1123), o.fillStyle = "#e0e0e0", o.font = "16px Microsoft Yahei", 
                        o.fillText("微信搜一搜：数学计算练习出题", 100, 157), o.fillText("微信搜一搜：数学计算练习出题", 300, 257), 
                        o.fillStyle = "#303133", o.font = "28px Microsoft Yahei";
                        var a = "".concat(this.name, " 共").concat(this.number, "题");
                        e && (a += " 【答案】");
                        var i = o.measureText(a).width, r = 397 - i / 2;
                        o.font = "24px Microsoft Yahei", o.fillText(a, r, 50);
                        var s = 60, c = this.randomList.length > 50 ? 100 : 110, u = s, l = c, d = 0, h = "", f = 30, m = this.randomList.length > 50 ? 30 : 40, g = 3;
                        o.font = "22px Microsoft Yahei", this.randomList.forEach(function(t, n) {
                            var a = t.answerFormat, i = t.unit, r = t.fen, c = t.yuan, v = t.jiao, p = t.type, b = t.res;
                            1 == p ? h = e ? "".concat(a, "= ").concat(b, " ").concat(i) : "".concat(a, "=___").concat(i) : (h = "".concat(b).concat(i, "="), 
                            c > 0 && (h += e ? " ".concat(c, " 元") : "__元"), v > 0 && (h += e ? " ".concat(v, " 角") : "__角"), 
                            r > 0 && (h += e ? " ".concat(r, " 分") : "__分"));
                            var x = (794 - 2 * f - s - 80) / g;
                            d = o.measureText(h).width > x ? o.measureText(h).width : x, o.measureText(h).width > x && (g -= 1, 
                            s = 100), u = n > 0 ? u + d + f : s, n > 0 & n % g == 0 && (l += m, u = s), o.fillText(h, u, l);
                        }), o.draw();
                    },
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
                    watchVideo: function(t) {
                        c = t;
                        var e = this.getVideoStorage();
                        this.needWatchVideo = !e, 1 == c ? this.showAnswerModal = !0 : 2 == c && this.savePoster();
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
                        var e = this.curIdx.split(","), n = (0, a.default)(e, 2), o = n[0], i = n[1];
                        console.log("type", i);
                        var r = this.randomList[o];
                        return "0" === r["".concat(i)] && 0 == t ? (r["".concat(i)] = "0", void this.$set(this.randomList, o, r)) : "0" === r["".concat(i)] && 0 != t && "." != t ? (r["".concat(i)] = String(t), 
                        void this.$set(this.randomList, o, r)) : (r["".concat(i)].length < 3 && (r["".concat(i)] = "" + r["".concat(i)] + t, 
                        this.$set(this.randomList, o, r)), void console.log("target[`${type}`]", r["".concat(i)]));
                    },
                    backspace: function() {
                        var t = this.curIdx.split(","), e = (0, a.default)(t, 2), n = e[0], o = e[1], i = this.randomList[n];
                        i["".concat(o)].length && (i["".concat(o)] = i["".concat(o)].substr(0, i["".concat(o)].length - 1)), 
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
                            var e = t.split(","), n = (0, a.default)(e, 2);
                            n[0], n[1], this.curIdx = t;
                        }
                    },
                    submit: function() {
                        this.curRes = this.startCalculate(this.randomList, +this.curIdx[0]), this.showModal = !0;
                    },
                    next: function() {
                        var e = this.curIdx.split(","), n = (0, a.default)(e, 2), o = n[0], i = (n[1], this.randomList[+o + 1]);
                        console.log("item", i), +o < this.randomList.length && (i && (1 == i.type ? this.curIdx = "".concat(+o + 1, ",result") : i.yuan && 0 != i.yuan ? this.curIdx = "".concat(+o + 1, ",yuan_res") : i.jiao && 0 != i.jiao ? this.curIdx = "".concat(+o + 1, ",jiao_res") : i.fen && 0 != i.fen && (this.curIdx = "".concat(+o + 1, ",fen_res"))), 
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
                        for (var n = [ t ], o = t; o < e; o++) n.push(++t);
                        return n;
                    },
                    formatRmb: function(t) {
                        if (0 === t) return "0元";
                        var e = t.split("."), n = e[0], o = 0, a = 0;
                        if (e[1]) {
                            var i = String(e[1]);
                            i[0] && (o = i[0]), i[1] && (a = i[1]);
                        }
                        var r = "";
                        return n > 0 && (r += n + "元"), o > 0 && (r += o + "角"), a > 0 && (r += a + "分"), 
                        {
                            str: r,
                            yuan: n,
                            jiao: o,
                            fen: a
                        };
                    },
                    generate: function(t) {
                        var e, n = t.min, o = t.max, a = t.number, s = t.symbol, c = (t.boundaryMin, t.boundaryMax), u = (t.firstMin, 
                        t.secondMin, t.firstMax, t.secondMax, t.step, []), l = this.generateArr(n, o);
                        l.length >= 200 && (l = (0, r.shuffle)(l).splice(0, 200)), console.log("continuousArr", l);
                        var d = (0, r.queue)(l, 2);
                        return d.length, "+." == s && (u = (d = d.map(function(t, e) {
                            return [ (0, i.default)(t[0]).div(100).toFixed(2), (0, i.default)(t[1]).div(100).toFixed(2) ];
                        })).filter(function(t) {
                            return +t[0] + +t[1] <= c;
                        })), e = this.getRandomArr(u, a, s.substr(0, 1)), console.log("queueRes", d), console.log("filterRes", u), 
                        e;
                    },
                    getRandomArr: function() {
                        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, n = arguments.length > 2 ? arguments[2] : void 0, o = (0, 
                        r.shuffle)(t), s = [], c = 0; c < o.length; c++) {
                            var u = (0, a.default)(o[c], 3), l = u[0], d = u[1], h = u[2], f = (0, r.calcStrToNumber)(l + n + d);
                            f = +f > 1 ? (0, i.default)(f).toFixed(1) : (0, i.default)(f).toFixed(2), h && (f = (0, 
                            r.calcStrToNumber)(f + n + h));
                            var m = this.formatRmb(f), g = m.yuan, v = m.jiao, p = m.fen, b = m.str, x = "", y = "";
                            if (+f > 1 && f.indexOf(".") > -1 ? (x = "角", y = (0, i.default)(f).times(10).toFixed(0)) : (x = "分", 
                            y = (0, i.default)(f).times(100).toFixed(0)), !(c < e)) break;
                            s.push({
                                first: l,
                                second: d,
                                third: h,
                                symbol: n,
                                symbol2: n,
                                answer: f,
                                answerFormat: b,
                                unit: x,
                                res: y,
                                yuan: g,
                                jiao: v,
                                fen: p,
                                result: "",
                                yuan_res: "",
                                jiao_res: "",
                                fen_res: "",
                                type: Math.random() > .5 ? 1 : 2,
                                total: o.length
                            });
                        }
                        return s;
                    },
                    randomNum: function(t, e) {
                        return parseInt(Math.random() * (e - t)) + t;
                    },
                    startCalculate: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 ? arguments[1] : void 0, n = t[e];
                        return 1 == n.type ? +n.result == +n.res ? n.correct = !0 : n.correct = !1 : (n.correct = !0, 
                        ("" == n.yuan_res && 0 != n.yuan || +n.yuan != +n.yuan_res) && (n.correct = !1), 
                        ("" == n.jiao_res && 0 != n.jiao || +n.jiao != +n.jiao_res) && (n.correct = !1), 
                        ("" == n.fen_res && 0 != n.fen || +n.fen != +n.fen_res) && (n.correct = !1)), n.correct;
                    }
                }
            };
            e.default = u;
        }).call(this, n("543d").default);
    },
    c158: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return a;
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
        }, a = function() {
            var t = this, e = (t.$createElement, t._self._c, Number(t.curIdx[0])), n = Number(t.curIdx[0]) == t.randomList.length - 1 && t.isCalc, o = Number(t.curIdx[0]), a = Number(t.curIdx[0]) === t.randomList.length - 1 && !t.isCalc;
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
                    m2: o,
                    m3: a
                }
            });
        }, i = [];
    },
    c782: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("c158"), a = n("5e28");
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("8bcb");
        var r = n("f0c5"), s = Object(r.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = s.exports;
    }
}, [ [ "174a", "common/runtime", "common/vendor" ] ] ]);