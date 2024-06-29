(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPages/equationComplex/equationComplex" ], {
    "1ed4": function(t, e, o) {
        "use strict";
        var n = o("cab0");
        o.n(n).a;
    },
    "31b5": function(t, e, o) {
        "use strict";
        (function(t) {
            var n = o("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(o("278c")), r = n(o("9dcd")), i = o("fe1d"), s = null, c = "", u = {
                data: function() {
                    return {
                        paperW: 794,
                        paperH: 1123,
                        type: "",
                        number: "",
                        curIdx: 0,
                        curRes: !1,
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
                        popupCustomStyle: {},
                        showAnswerModal: !1,
                        needWatchVideo: !0,
                        name: "",
                        hasModal: !1
                    };
                },
                onLoad: function(e) {
                    var o = e.type, n = e.number;
                    this.type = o, this.number = n;
                    var a = i.typeMap[o], r = a.min, s = a.max, c = a.symbol, u = a.boundaryVal, l = a.name, d = a.firstMin, h = a.firstMax, f = a.secondMin, m = a.secondMax, g = a.thirdMin, v = a.thirdMax, b = a.fourthMin, p = a.fourthMax, x = a.boundaryMin, y = a.boundaryMax;
                    this.name = l, t.setNavigationBarTitle({
                        title: l
                    }), t.showLoading({
                        title: "正在出题..."
                    });
                    var M = this.generate({
                        min: r,
                        max: s,
                        symbol: c,
                        boundaryVal: u,
                        name: l,
                        number: n,
                        firstMin: d,
                        firstMax: h,
                        secondMin: f,
                        secondMax: m,
                        thirdMin: g,
                        thirdMax: v,
                        fourthMin: b,
                        fourthMax: p,
                        boundaryMin: x,
                        boundaryMax: y
                    });
                    t.hideLoading(), console.log("generate888", M), this.randomList = M, this.curIdx = 0, 
                    this.showKeyBoard = !0, this.startTimer();
                },
                onShow: function() {
                    var t = this.getVideoStorage();
                    console.log("onShow--getVideoStorage", t), this.needWatchVideo = !t, this.drawPoster();
                },
                beforeDestroy: function() {
                    this.clearTimer(), this.clearVideoStorage();
                },
                methods: {
                    doSave: function(e) {
                        console.log("doSave");
                        var o = this;
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
                                        }), o.showModal = !1;
                                    },
                                    fail: function(e) {
                                        e.errMsg.indexOf("auth deny") > -1 && !o.hasModal && (o.hasModal = !0, t.showModal({
                                            title: "请允许添加到相册",
                                            content: "点击“去设置”前往设置中心",
                                            confirmText: "去设置",
                                            success: function(e) {
                                                e.confirm ? t.openSetting({
                                                    success: function(e) {
                                                        o.hasModal = !1, e.authSetting["scope.writePhotosAlbum"] ? o.savePoster() : t.showToast({
                                                            icon: "none",
                                                            title: "请允许添加到相册，否则无法保存图片",
                                                            duration: 3e3
                                                        });
                                                    }
                                                }) : (o.hasModal = !1, t.showToast({
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
                        this.drawCanvas(), this.startCalculate(this.randomList, !0), this.drawCanvas(!0);
                    },
                    savePoster: function() {
                        var t = this;
                        this.doSave(1), setTimeout(function() {
                            t.doSave(2);
                        }, 200);
                    },
                    drawCanvas: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], o = e ? "answerCanvas" : "questionCanvas", n = t.createCanvasContext(o);
                        n.fillStyle = "#fff", n.fillRect(0, 0, 794, 1123), n.fillStyle = "#e0e0e0", n.font = "16px Microsoft Yahei", 
                        n.fillText("微信搜一搜：数学口算计算竖式练习", 100, 157), n.fillText("微信搜一搜：数学口算计算竖式练习", 300, 257), 
                        n.fillStyle = "#303133", n.font = "28px Microsoft Yahei";
                        var a = "".concat(this.name, " 共").concat(this.number, "题");
                        e && (a += " 【答案】");
                        var r = n.measureText(a).width, i = 397 - r / 2;
                        n.font = "24px Microsoft Yahei", n.fillText(a, i, 50);
                        var s = 60, c = this.randomList.length > 50 ? 100 : 110, u = s, l = c, d = 0, h = "", f = 30, m = this.randomList.length > 50 ? 30 : 40, g = 3;
                        n.font = "24px Microsoft Yahei", this.randomList.forEach(function(t, o) {
                            var a = t.first, r = t.second, i = t.symbol1, c = t.symbol2, v = t.answer, b = t.third;
                            h = "".concat(a).concat(i, "(").concat(r).concat(c).concat(b, ")="), h += e ? " ".concat(v) : "    ";
                            var p = (794 - 2 * f - s - 80) / g;
                            d = n.measureText(h).width > p ? n.measureText(h).width : p, n.measureText(h).width > p && (g -= 1, 
                            s = 100), u = o > 0 ? u + d + f : s, o > 0 & o % g == 0 && (l += m, u = s), n.fillText(h, u, l);
                        }), n.draw();
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
                    closeAnswerModal: function() {
                        this.showAnswerModal = !1;
                    },
                    openAnswerModal: function() {
                        this.showKeyBoard = !1;
                    },
                    onShareAppMessage: function(t) {
                        var e = "/subPages/equationComplex/equationComplex", o = "?type=".concat(this.type, "&number=").concat(this.number);
                        return "button" === t.from ? (console.log(t.target), {
                            title: i.typeMap[this.type].name + "，欢迎来挑战！",
                            path: e + o
                        }) : {
                            title: i.typeMap[this.type].name + "，欢迎来挑战！",
                            path: e + o
                        };
                    },
                    formatTime: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = parseInt(t / 60), o = parseInt(t % 60);
                        return {
                            hour: (e = e < 10 ? "0" + e : e) > 999 ? 999 : e,
                            minute: o = o < 10 ? "0" + o : o
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
                            e.result.length < 9 && (e.result = "" + e.result + t, this.$set(this.randomList, this.curIdx, e));
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
                        this.isCalc || this.showAnswerModal || (this.curIdx = t, this.showKeyBoard = !0);
                    },
                    submit: function() {
                        this.curRes = this.calculate(), this.randomList[this.curIdx].correct = this.curRes, 
                        this.showModal = !0;
                    },
                    next: function() {
                        this.curIdx < this.randomList.length && (this.curIdx++, this.showModal = !1, t.pageScrollTo({
                            scrollTop: 0,
                            duration: 200
                        }));
                    },
                    finish: function() {
                        this.clearTimer(), this.isCalc = !0, this.showModal = !0;
                        var t = 0;
                        this.randomList.forEach(function(e) {
                            e.correct || t++;
                        });
                        var e = (0, r.default)(100).div(this.randomList.length);
                        this.grade = (0, r.default)(100).minus((0, r.default)(t).times(e)).toFixed(0), this.errNo = t, 
                        console.log("错误题目数：", t), console.log("结果：", this.randomList);
                    },
                    generateArr: function(t, e) {
                        for (var o = [ t ], n = t; n < e; n++) o.push(++t);
                        return o;
                    },
                    generate: function(t) {
                        var e, o = t.min, n = void 0 === o ? 1 : o, a = t.max, r = void 0 === a ? 9 : a, s = t.number, c = void 0 === s ? 10 : s, u = t.symbol, l = void 0 === u ? "+,-" : u, d = (t.boundaryVal, 
                        t.firstMin), h = t.firstMax, f = t.secondMin, m = t.secondMax, g = t.thirdMin, v = t.thirdMax, b = t.fourthMin, p = t.fourthMax, x = (t.boundaryMin, 
                        t.boundaryMax, this.generateArr(n, r));
                        console.log("continuousArr", x), x.length >= 30 && l.includes("+") && l.includes("-") && (x = (0, 
                        i.shuffle)(x).splice(0, 30));
                        var y = (0, i.queue)(x, 4);
                        return console.log("queueRes", y), console.log("symbol", l), e = y.filter(function(t) {
                            return t[0] >= d && t[0] <= h && t[1] >= f && t[1] <= m && t[2] >= g && t[2] <= v && t[3] >= b && t[3] <= p;
                        }), this.randomRange, console.log("queueRes", y), console.log("filterRes", e), this.getRandomArr(e, c, l);
                    },
                    randomRange: function(t, e) {
                        return Math.round(Math.random() * (e - t)) + t;
                    },
                    getRandomArr: function() {
                        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, n = arguments.length > 2 ? arguments[2] : void 0, r = (0, 
                        i.shuffle)(e), s = [], c = (this.randomRange, 0); c < r.length; c++) {
                            var u = (0, a.default)(r[c], 4), l = u[0], d = u[1], h = u[2], f = u[3], m = void n.split(","), g = void 0, v = void 0, b = void 0, p = void 0;
                            if ("+,-,x,÷,()" == n) {
                                switch (v = t.$u.randomArray([ 1, 2 ])[0]) {
                                  case 1:
                                    m = "x", g = t.$u.randomArray([ "÷", "+", "-" ])[0];
                                    break;

                                  case 2:
                                    m = t.$u.randomArray([ "+", "-" ])[0], g = "x";
                                }
                                t.$u.randomArray([ 0, 1, 2 ])[0];
                            }
                            try {
                                switch (v) {
                                  case 1:
                                    b = (0, i.calcStrToNumber)(l + m + d), p = (0, i.calcStrToNumber)(b + g + h);
                                    break;

                                  case 2:
                                    b = (0, i.calcStrToNumber)(d + g + h), p = (0, i.calcStrToNumber)(l + m + b);
                                }
                            } catch (t) {}
                            if (console.log("res2", p), !p || +p < 0 || Math.floor(+p) != +p) console.log("continue~~~~"); else {
                                if (console.log("continue after"), !(s.length < o)) break;
                                s.push({
                                    first: l,
                                    second: d,
                                    third: h,
                                    fourth: f,
                                    symbol1: m,
                                    symbol2: g,
                                    xSymbolPos: v,
                                    symbol4: "(",
                                    symbol5: ")",
                                    answer: "",
                                    result: "",
                                    total: r.length
                                });
                            }
                        }
                        return console.log("result", s), s;
                    },
                    randomNum: function(t, e) {
                        return parseInt(Math.random() * (e - t)) + t;
                    },
                    startCalculate: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 ? arguments[1] : void 0;
                        console.log("startCalculate"), t.forEach(function(t) {
                            var o, n, a = t.first, r = t.second, s = t.third, c = (t.fourth, t.symbol1), u = t.symbol2, l = (t.symbol3, 
                            t.xSymbolPos), d = (t.symbol4, t.symbol5, t.result);
                            switch (l) {
                              case 1:
                                o = (0, i.calcStrToNumber)(a + c + r), n = (0, i.calcStrToNumber)(o + u + s);
                                break;

                              case 2:
                                o = (0, i.calcStrToNumber)(r + u + s), n = (0, i.calcStrToNumber)(a + c + o);
                            }
                            e ? (t.answer = n, t.xAnswer = 1 == l ? r : s) : 1 == l ? t.correct = d == r : 2 == l && (t.correct = d == s);
                        });
                    },
                    calculate: function() {
                        var t = this.randomList[this.curIdx], e = t.second, o = t.third, n = t.result;
                        return 1 == t.xSymbolPos ? n == e : n == o;
                    }
                }
            };
            e.default = u;
        }).call(this, o("543d").default);
    },
    "61c1": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("7caa"), a = o("a5ff");
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(r);
        o("1ed4");
        var i = o("f0c5"), s = Object(i.a)(a.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = s.exports;
    },
    "7caa": function(t, e, o) {
        "use strict";
        o.d(e, "b", function() {
            return a;
        }), o.d(e, "c", function() {
            return r;
        }), o.d(e, "a", function() {
            return n;
        });
        var n = {
            uButton: function() {
                return Promise.all([ o.e("common/vendor"), o.e("uni_modules/uview-ui/components/u-button/u-button") ]).then(o.bind(null, "7dbb"));
            },
            uIcon: function() {
                return Promise.all([ o.e("common/vendor"), o.e("uni_modules/uview-ui/components/u-icon/u-icon") ]).then(o.bind(null, "faff"));
            },
            myKeyboard: function() {
                return o.e("components/my-keyboard/my-keyboard").then(o.bind(null, "ee4b"));
            },
            uModal: function() {
                return Promise.all([ o.e("common/vendor"), o.e("uni_modules/uview-ui/components/u-modal/u-modal") ]).then(o.bind(null, "672f"));
            }
        }, a = function() {
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
        }, r = [];
    },
    a24a: function(t, e, o) {
        "use strict";
        (function(t) {
            var e = o("4ea4");
            o("18e6"), o("33db"), e(o("66fd"));
            var n = e(o("61c1"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = o, t(n.default);
        }).call(this, o("543d").createPage);
    },
    a5ff: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("31b5"), a = o.n(n);
        for (var r in n) [ "default" ].indexOf(r) < 0 && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(r);
        e.default = a.a;
    },
    cab0: function(t, e, o) {}
}, [ [ "a24a", "common/runtime", "common/vendor" ] ] ]);