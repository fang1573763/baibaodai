(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPages/fractionMultiplication/fractionMultiplication" ], {
    "29fa": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("5273"), i = o.n(n);
        for (var a in n) [ "default" ].indexOf(a) < 0 && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(a);
        e.default = i.a;
    },
    "2fd6": function(t, e, o) {
        "use strict";
        (function(t) {
            var e = o("4ea4");
            o("18e6"), o("33db"), e(o("66fd"));
            var n = e(o("57b6"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = o, t(n.default);
        }).call(this, o("543d").createPage);
    },
    5273: function(t, e, o) {
        "use strict";
        (function(t) {
            var n = o("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(o("278c")), a = n(o("9dcd")), r = o("fe1d"), c = null, s = "", l = {
                data: function() {
                    return {
                        paperW: 794,
                        paperH: 1123,
                        type: "",
                        number: "",
                        curIdx: 0,
                        activeIdx: "0,0",
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
                    var i = r.typeMap[o], a = i.min, c = i.max, s = i.symbol, l = i.boundaryVal, u = i.name, d = i.firstMin, h = i.firstMax, f = i.secondMin, m = i.secondMax, v = i.thirdMin, x = i.thirdMax, b = i.fifthMin, g = i.fifthMax, p = i.sixthMin, M = i.sixthMax, w = i.boundaryMin, T = i.boundaryMax, y = i.step;
                    this.name = u, t.setNavigationBarTitle({
                        title: u
                    }), t.showLoading({
                        title: "正在出题..."
                    });
                    var S = this.generate({
                        min: a,
                        max: c,
                        symbol: s,
                        boundaryVal: l,
                        name: u,
                        number: n,
                        firstMin: d,
                        firstMax: h,
                        secondMin: f,
                        secondMax: m,
                        thirdMin: v,
                        thirdMax: x,
                        fifthMin: b,
                        fifthMax: g,
                        sixthMin: p,
                        sixthMax: M,
                        boundaryMin: w,
                        boundaryMax: T,
                        step: y
                    });
                    t.hideLoading(), console.log("generate888", S), this.randomList = S, this.curIdx = 0, 
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
                        n.fillText("微信搜一搜：数学计算练习出题", 100, 157), n.fillText("微信搜一搜：数学计算练习出题", 300, 257), 
                        n.fillStyle = "#303133", n.font = "28px Microsoft Yahei";
                        var i = "".concat(this.name, " 共").concat(this.number, "题");
                        e && (i += " 【答案】");
                        var a = n.measureText(i).width, r = 397 - a / 2;
                        n.font = "24px Microsoft Yahei", n.fillText(i, r, 50);
                        var c = 60, s = this.randomList.length > 50 ? 100 : 110, l = c, u = s, d = 0, h = "", f = 30, m = this.randomList.length > 50 ? 30 : 40;
                        n.font = "24px Microsoft Yahei", this.randomList.forEach(function(t, o) {
                            var i = t.first, a = t.second, r = t.symbol1, s = t.symbol2, v = t.answer, x = t.third, b = t.column, g = void 0 === b ? 3 : b;
                            h = "".concat(i, " ").concat(r, " ").concat(a, " ").concat(s, " ").concat(x, " ="), 
                            h += e ? " ".concat(v) : "    ";
                            var p = (794 - 2 * f - c - 80) / g;
                            d = n.measureText(h).width > p ? n.measureText(h).width : p, n.measureText(h).width > p && (g -= 1, 
                            c = 100), l = o > 0 ? l + d + f : c, o > 0 & o % g == 0 && (u += m, l = c), n.fillText(h, l, u);
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
                        s = t;
                        var e = this.getVideoStorage();
                        this.needWatchVideo = !e, 1 == s ? this.showAnswerModal = !0 : 2 == s && this.savePoster();
                    },
                    closeAnswerModal: function() {
                        this.showAnswerModal = !1;
                    },
                    openAnswerModal: function() {
                        this.showKeyBoard = !1;
                    },
                    onShareAppMessage: function(t) {
                        var e = "/subPages/fractionMultiplication/fractionMultiplication", o = "?type=".concat(this.type, "&number=").concat(this.number);
                        return "button" === t.from ? (console.log(t.target), {
                            title: r.typeMap[this.type].name + "，欢迎来挑战！",
                            path: e + o
                        }) : {
                            title: r.typeMap[this.type].name + "，欢迎来挑战！",
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
                        c = setInterval(function() {
                            t.timer += 1, t.formartTimer = t.formatTime(t.timer);
                        }, 1e3);
                    },
                    clearTimer: function() {
                        c && (clearInterval(c), c = null);
                    },
                    onKeyboardChange: function(t) {
                        console.log("onKeyboardChange", t);
                        var e = this.activeIdx.split(","), o = (0, i.default)(e, 2), n = o[0], a = o[1], r = this.randomList[this.curIdx];
                        return console.log("idx", n), console.log("flag", a), console.log("target", r), 
                        "0" === r["result".concat(a)] && 0 == t ? (r["result".concat(a)] = "0", void this.$set(this.randomList, this.curIdx, r)) : "0" === r["result".concat(a)] && 0 != t && "." != t ? (r["result".concat(a)] = String(t), 
                        void this.$set(this.randomList, this.curIdx, r)) : void (r["result".concat(a)].length < 4 && (r["result".concat(a)] = "" + r["result".concat(a)] + t, 
                        this.$set(this.randomList, this.curIdx, r)));
                    },
                    backspace: function() {
                        var t = this.activeIdx.split(","), e = (0, i.default)(t, 2), o = (e[0], e[1]), n = this.randomList[this.curIdx];
                        n["result".concat(o)].length && (n["result".concat(o)] = n["result".concat(o)].substr(0, n["result".concat(o)].length - 1)), 
                        this.$set(this.randomList, this.curIdx, n), console.log("this.randomList", this.randomList);
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
                    tapBox: function(t, e) {
                        this.isCalc || (this.curIdx = t, this.activeIdx = "".concat(t, ",").concat(e), this.showKeyBoard = !0);
                    },
                    submit: function() {
                        this.curRes = this.calculate(), this.randomList[this.curIdx].correct = this.curRes, 
                        this.showModal = !0;
                    },
                    next: function() {
                        this.curIdx < this.randomList.length && (this.curIdx++, this.showModal = !1, this.activeIdx = "".concat(this.curIdx, ",0"), 
                        t.pageScrollTo({
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
                        var e = (0, a.default)(100).div(this.randomList.length);
                        this.grade = (0, a.default)(100).minus((0, a.default)(t).times(e)).toFixed(0), this.errNo = t, 
                        console.log("错误题目数：", t), console.log("结果：", this.randomList);
                    },
                    generateArr: function(t, e) {
                        for (var o = [ t ], n = t; n < e; n++) o.push(++t);
                        return o;
                    },
                    generate: function(t) {
                        var e = t.min, o = void 0 === e ? 1 : e, n = t.max, i = void 0 === n ? 9 : n, a = t.number, c = void 0 === a ? 10 : a, s = t.symbol, l = void 0 === s ? "x" : s, u = (t.boundaryVal, 
                        t.firstMin, t.firstMax, t.secondMin, t.secondMax, t.thirdMin, t.thirdMax, t.fourthMin, 
                        t.fourthMax, t.fifthMin, t.fifthMax, t.sixthMin), d = (t.sixthMax, t.boundaryMin), h = t.boundaryMax, f = (t.step, 
                        []), m = this.generateArr(o, i);
                        console.log("continuousArr", m);
                        var v = [];
                        v = u ? (0, r.choose)((0, r.shuffle)(m), 6) : (0, r.queue)(m, 4), "x" == l ? f = v.filter(function(t) {
                            return t[0] * t[2] / (t[1] * t[3]) >= d && t[0] * t[2] / (t[1] * t[3]) <= h;
                        }) : "÷" == l ? f = v.filter(function(t) {
                            return t[0] * t[3] / (t[1] * t[2]) >= d && t[0] * t[3] / (t[1] * t[2]) <= h;
                        }) : "+" == l || "-" == l ? f = v.filter(function(t) {
                            return t[0] / t[1] - t[2] / t[3] >= d && t[0] / t[1] - t[2] / t[3] <= h;
                        }) : "+-" == l ? f = v.filter(function(t) {
                            return t[0] / t[1] - t[2] / t[3] - t[4] / t[5] >= d && t[0] / t[1] + t[2] / t[3] + t[4] / t[5] <= h;
                        }) : "x÷" == l && (f = v.filter(function(t) {
                            return t[0] / t[1] / (t[2] / t[3]) / (t[4] / t[5]) >= d && t[0] / t[1] * (t[2] / t[3]) * (t[4] / t[5]) <= h;
                        })), console.log("queueRes", v);
                        var x = this.getRandomArr(f, c, l);
                        return (0, r.shuffle)(x).slice(0, c);
                    },
                    randomRange: function(t, e) {
                        return Math.round(Math.random() * (e - t)) + t;
                    },
                    getRandomArr: function() {
                        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, o = arguments.length > 2 ? arguments[2] : void 0, n = (0, 
                        r.shuffle)(t), a = [], c = this.randomRange, s = 0; s < n.length; s++) {
                            var l = (0, i.default)(n[s], 6), u = l[0], d = l[1], h = l[2], f = l[3], m = l[4], v = l[5], x = (0, 
                            r.simplify)("".concat(u, "/").concat(d)).split("/"), b = (0, i.default)(x, 2), g = b[0], p = b[1], M = void 0 === p ? 1 : p, w = (0, 
                            r.simplify)("".concat(h, "/").concat(f)).split("/"), T = (0, i.default)(w, 2), y = T[0], S = T[1], N = void 0 === S ? 1 : S, I = (0, 
                            r.simplify)("".concat(m, "/").concat(v)).split("/"), L = (0, i.default)(I, 2), _ = L[0], P = L[1], C = void 0 === P ? 1 : P, A = void 0, V = void 0, k = void 0, B = void 0, R = void 0, K = void 0, q = void 0;
                            if ("x" == o) A = (0, r.calcStrToNumber)(g + o + y), V = (0, r.calcStrToNumber)(M + o + N), 
                            R = (0, r.simplify)("".concat(A, "/").concat(V)); else if ("÷" == o) A = (0, r.calcStrToNumber)(g + "x" + N), 
                            V = (0, r.calcStrToNumber)(M + "x" + y), R = (0, r.simplify)("".concat(A, "/").concat(V)); else if ("+" == o) {
                                A = (0, r.calcStrToNumber)(g + "x" + N), V = (0, r.calcStrToNumber)(M + "x" + y);
                                var O = (0, r.calcStrToNumber)(A + "+" + V), W = (0, r.calcStrToNumber)(M + "x" + N);
                                R = (0, r.simplify)("".concat(O, "/").concat(W));
                            } else if ("-" == o) {
                                A = (0, r.calcStrToNumber)(g + "x" + N), V = (0, r.calcStrToNumber)(M + "x" + y);
                                var $ = (0, r.calcStrToNumber)(A + "-" + V), E = (0, r.calcStrToNumber)(M + "x" + N);
                                R = (0, r.simplify)("".concat($, "/").concat(E));
                            } else if ("+-" == o) {
                                q = "-" == (K = o[c(0, 1)]) ? "+" : "-", A = (0, r.calcStrToNumber)(g + "x" + N), 
                                V = (0, r.calcStrToNumber)(M + "x" + y);
                                var F = (0, r.calcStrToNumber)(A + K + V), Y = (0, r.calcStrToNumber)(M + "x" + N);
                                k = (0, r.calcStrToNumber)(F + "x" + C), B = (0, r.calcStrToNumber)(Y + "x" + _);
                                var D = (0, r.calcStrToNumber)(k + q + B), G = (0, r.calcStrToNumber)(Y + "x" + C);
                                R = (0, r.simplify)("".concat(D, "/").concat(G));
                            } else "x÷" == o && (q = "x" == (K = o[c(0, 1)]) ? "÷" : "x", "x" == K ? (A = (0, 
                            r.calcStrToNumber)(g + "x" + y), V = (0, r.calcStrToNumber)(M + "x" + N), k = (0, 
                            r.calcStrToNumber)(A + "x" + C), B = (0, r.calcStrToNumber)(V + "x" + _)) : (A = (0, 
                            r.calcStrToNumber)(g + "x" + N), V = (0, r.calcStrToNumber)(M + "x" + y), k = (0, 
                            r.calcStrToNumber)(A + "x" + _), B = (0, r.calcStrToNumber)(V + "x" + C)), R = (0, 
                            r.simplify)("".concat(k, "/").concat(B)));
                            var j = R.split("/")[0] || 1, H = R.split("/")[1] || 1;
                            if (!(s < e)) break;
                            a.push({
                                first: g,
                                second: M,
                                third: y,
                                fourth: N,
                                fifth: _,
                                sixth: C,
                                symbol: o,
                                symbol1: K,
                                symbol2: q,
                                answer: R,
                                answer0: j,
                                answer1: H,
                                result: "",
                                result0: "",
                                result1: "",
                                total: n.length
                            });
                        }
                        return a;
                    },
                    randomNum: function(t, e) {
                        return parseInt(Math.random() * (e - t)) + t;
                    },
                    startCalculate: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 ? arguments[1] : void 0;
                        t.forEach(function(t) {
                            var o, n = t.first, i = t.second, a = t.third, c = t.symbol1, s = t.symbol2, l = t.result, u = t.xPos, d = [ "+", "-" ], h = [ "x", "÷" ];
                            d.includes(c) && d.includes(s) || h.includes(c) && h.includes(s) || h.includes(c) && d.includes(s) ? (o = (0, 
                            r.calcStrToNumber)(n + c + i), (0, r.calcStrToNumber)(o + s + a)) : d.includes(c) && h.includes(s) ? (o = (0, 
                            r.calcStrToNumber)(i + s + a), (0, r.calcStrToNumber)(n + c + o)) : (0, r.calcStrToNumber)(n + c + i), 
                            e ? 0 == u ? t.xAnswer = n : 1 == u && (t.xAnswer = i) : 0 == u ? t.correct = l == n : 1 == u && (t.correct = l == i);
                        });
                    },
                    calculate: function() {
                        var t = this.randomList[this.curIdx], e = t.result0, o = t.result1, n = t.answer0, i = t.answer1;
                        return e == n && o == i;
                    }
                }
            };
            e.default = l;
        }).call(this, o("543d").default);
    },
    "57b6": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("a039"), i = o("29fa");
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(t) {
            o.d(e, t, function() {
                return i[t];
            });
        }(a);
        o("eac1");
        var r = o("f0c5"), c = Object(r.a)(i.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = c.exports;
    },
    "64dc": function(t, e, o) {},
    a039: function(t, e, o) {
        "use strict";
        o.d(e, "b", function() {
            return i;
        }), o.d(e, "c", function() {
            return a;
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
        }, a = [];
    },
    eac1: function(t, e, o) {
        "use strict";
        var n = o("64dc");
        o.n(n).a;
    }
}, [ [ "2fd6", "common/runtime", "common/vendor" ] ] ]);