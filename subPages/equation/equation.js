(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPages/equation/equation" ], {
    "0dd7": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("f690"), i = n.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    },
    4817: function(t, e, n) {
        "use strict";
        var o = n("d501");
        n.n(o).a;
    },
    "5db2": function(t, e, n) {
        "use strict";
        (function(t) {
            var e = n("4ea4");
            n("18e6"), n("33db"), e(n("66fd"));
            var o = e(n("a405"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default);
        }).call(this, n("543d").createPage);
    },
    a405: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("d18d"), i = n("0dd7");
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n("4817");
        var a = n("f0c5"), s = Object(a.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = s.exports;
    },
    d18d: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return r;
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
        }, r = [];
    },
    d501: function(t, e, n) {},
    f690: function(t, e, n) {
        "use strict";
        (function(t) {
            var o = n("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = o(n("278c")), r = o(n("448a")), a = o(n("9dcd")), s = n("fe1d"), u = null, c = "", l = {
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
                    var n = e.type, o = e.number;
                    this.type = n, this.number = o;
                    var i = s.typeMap[n], r = i.min, a = i.max, u = i.symbol, c = i.boundaryVal, l = i.name, d = i.firstMin, h = i.firstMax, f = i.secondMin, m = i.secondMax, v = i.thirdMin, g = i.thirdMax, x = i.boundaryMin, b = i.boundaryMax, p = i.step;
                    this.name = l, t.setNavigationBarTitle({
                        title: l
                    }), t.showLoading({
                        title: "正在出题..."
                    });
                    var w = this.generate({
                        min: r,
                        max: a,
                        symbol: u,
                        boundaryVal: c,
                        name: l,
                        number: o,
                        firstMin: d,
                        firstMax: h,
                        secondMin: f,
                        secondMax: m,
                        thirdMin: v,
                        thirdMax: g,
                        boundaryMin: x,
                        boundaryMax: b,
                        step: p
                    });
                    t.hideLoading(), console.log("generate888", w), this.randomList = w, this.curIdx = 0, 
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
                        this.drawCanvas(), this.startCalculate(this.randomList, !0), this.drawCanvas(!0);
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
                        var i = "".concat(this.name, " 共").concat(this.number, "题");
                        e && (i += " 【答案】");
                        var r = o.measureText(i).width, a = 397 - r / 2;
                        o.font = "24px Microsoft Yahei", o.fillText(i, a, 50);
                        var s = 60, u = this.randomList.length > 50 ? 100 : 110, c = s, l = u, d = 0, h = "", f = 30, m = this.randomList.length > 50 ? 30 : 40, v = 3;
                        o.font = "24px Microsoft Yahei", this.randomList.forEach(function(t, n) {
                            var i = t.first, r = t.second, a = t.symbol1, u = t.symbol2, g = t.answer, x = t.third;
                            h = "".concat(i, " ").concat(a, " ").concat(r, " ").concat(u, " ").concat(x, " ="), 
                            h += e ? " ".concat(g) : "    ";
                            var b = (794 - 2 * f - s - 80) / v;
                            d = o.measureText(h).width > b ? o.measureText(h).width : b, o.measureText(h).width > b && (v -= 1, 
                            s = 100), c = n > 0 ? c + d + f : s, n > 0 & n % v == 0 && (l += m, c = s), o.fillText(h, c, l);
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
                    closeAnswerModal: function() {
                        this.showAnswerModal = !1;
                    },
                    openAnswerModal: function() {
                        this.showKeyBoard = !1;
                    },
                    onShareAppMessage: function(t) {
                        var e = "/subPages/equation/equation", n = "?type=".concat(this.type, "&number=").concat(this.number);
                        return "button" === t.from ? (console.log(t.target), {
                            title: s.typeMap[this.type].name + "，欢迎来挑战！",
                            path: e + n
                        }) : {
                            title: s.typeMap[this.type].name + "，欢迎来挑战！",
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
                        u = setInterval(function() {
                            t.timer += 1, t.formartTimer = t.formatTime(t.timer);
                        }, 1e3);
                    },
                    clearTimer: function() {
                        u && (clearInterval(u), u = null);
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
                        this.isCalc || (this.curIdx = t, this.showKeyBoard = !0);
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
                        var e = (0, a.default)(100).div(this.randomList.length);
                        this.grade = (0, a.default)(100).minus((0, a.default)(t).times(e)).toFixed(0), this.errNo = t, 
                        console.log("错误题目数：", t), console.log("结果：", this.randomList);
                    },
                    generateArr: function(t, e) {
                        for (var n = [ t ], o = t; o < e; o++) n.push(t++);
                        return n;
                    },
                    generate: function(t) {
                        var e = t.min, n = void 0 === e ? 1 : e, o = t.max, i = void 0 === o ? 9 : o, u = t.number, c = void 0 === u ? 10 : u, l = t.symbol, d = void 0 === l ? "+,-" : l, h = t.boundaryVal, f = void 0 === h ? 10 : h, m = t.firstMin, v = t.firstMax, g = t.secondMin, x = t.secondMax, b = t.thirdMin, p = t.thirdMax, w = t.boundaryMin, M = t.boundaryMax, y = (t.step, 
                        []), T = [], S = [], L = [], I = [], P = this.generateArr(n, i);
                        console.log("continuousArr", P);
                        var _ = (0, s.queue)(P, b ? 3 : 2);
                        _.length, "+,-" == d ? y = _.filter(function(t) {
                            return t[0] + t[1] + t[2] < f && t[0] - t[1] - t[2] > 0;
                        }) : "x,÷" == d ? y = _.filter(function(t) {
                            return t[0] * t[1] < f && t[2] < 20 && (t[0] * t[1] % t[2] == 0 || t[0] % t[1] == 0 && t[0] / t[1] % t[2] == 0) && t[0] / t[1] / t[2] > 0;
                        }) : "+,-,x,÷" == d ? (y = (_ = _.map(function(t) {
                            return [ (0, a.default)(t[0]).div(10).toFixed(), (0, a.default)(t[1]).div(10).toFixed() ];
                        })).filter(function(t) {
                            return t[0] + t[1] > w && t[0] + t[1] <= M;
                        }), T = _.filter(function(t) {
                            return t[0] - t[1] > w && t[0] - t[1] <= M;
                        }), S = _.filter(function(t) {
                            return t[0] * t[1] > w && t[0] * t[1] <= M;
                        }), L = _.filter(function(t) {
                            return t[0] > t[1] && t[0] / t[1] > w && t[0] / t[1] <= M && t[0] % t[1] == 0;
                        })) : "+,-,x,÷,1" == d ? y = _.filter(function(t) {
                            return t[0] < i && t[1] < i && t[0] > 10 && String(t[0])[1] > t[1] && t[0] - t[1] > 0;
                        }) : "++" == d ? y = _.filter(function(t) {
                            return t[0] >= m && t[0] <= v && t[1] >= g && t[1] <= x && t[2] >= b && t[2] <= p && t[0] + t[1] + t[2] >= w && t[0] + t[1] + t[2] <= M;
                        }) : "--" == d ? y = _.filter(function(t) {
                            return t[0] >= m && t[0] <= v && t[1] >= g && t[1] <= x && t[2] >= b && t[2] <= p && t[0] - t[1] - t[2] >= w && t[0] - t[1] - t[2] <= M;
                        }) : "+-" == d ? y = _.filter(function(t) {
                            return t[0] >= m && t[0] <= v && t[1] >= g && t[1] <= x && t[2] >= b && t[2] <= p && t[0] - t[1] - t[2] >= w && t[0] + t[1] + t[2] <= M;
                        }) : "x+" == d ? y = _.filter(function(t) {
                            return t[0] >= m && t[0] <= v && t[1] >= g && t[1] <= x && t[2] >= b && t[2] <= p && t[0] * t[1] + t[2] >= w && t[0] * t[1] + t[2] <= M;
                        }) : "x-" == d && (y = _.filter(function(t) {
                            return t[0] >= m && t[0] <= v && t[1] >= g && t[1] <= x && t[2] >= b && t[2] <= p && t[0] * t[1] - t[2] >= w && t[0] * t[1] - t[2] <= M;
                        })), console.log("queueRes", _), console.log("this.generateArr(min, max)", this.generateArr(n, i)), 
                        console.log("filterRes", y), console.log("filterRes2", T);
                        var A = Math.ceil(c / 4), C = this.getRandomArr(y, A, "+"), R = I.concat(this.getRandomArr(T, A, "-")), V = I.concat(this.getRandomArr(S, A, "x")), k = I.concat(this.getRandomArr(L, A, "÷"));
                        return I = [].concat((0, r.default)(C), (0, r.default)(R), (0, r.default)(V), (0, 
                        r.default)(k)), (0, s.shuffle)(I).slice(0, c);
                    },
                    randomRange: function(t, e) {
                        return Math.round(Math.random() * (e - t)) + t;
                    },
                    getRandomArr: function() {
                        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, n = arguments.length > 2 ? arguments[2] : void 0, o = (0, 
                        s.shuffle)(t), r = [], a = 0, u = this.randomRange, c = 0; c < o.length; c++) {
                            var l = (0, i.default)(o[c], 3), d = l[0], h = l[1], f = l[2], m = n.split(","), v = void 0, g = void 0;
                            "++" == n || "--" == n ? (v = n[0], g = n[1]) : "+-" == n ? (v = n[u(0, 1)], g = n[u(0, 1)]) : "x+" == n || "x-" == n ? (v = n[0], 
                            g = n[1]) : "+,-" == n || "x,÷" == n ? g = "x" == (v = (m.includes("x") || m.includes("÷")) && d % h == 0 ? m[u(0, 1)] : m[0]) || "+" == v ? m[1] : m[0] : 4 == m.length ? (v = d % h == 0 ? m[u(0, 3)] : m[u(0, 2)], 
                            g = [ "+", "-" ].includes(v) ? h % f == 0 ? m[u(2, 3)] : m[2] : m[u(0, 1)]) : (v = n, 
                            a = "x" == n ? 1 : u(0, 1));
                            var x = (0, s.calcStrToNumber)(d + n + h);
                            if (!(c < e)) break;
                            r.push({
                                first: d,
                                second: h,
                                third: f,
                                symbol1: v,
                                symbol2: g,
                                xPos: a,
                                answer: x,
                                result: "",
                                total: o.length
                            });
                        }
                        return r;
                    },
                    randomNum: function(t, e) {
                        return parseInt(Math.random() * (e - t)) + t;
                    },
                    startCalculate: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 ? arguments[1] : void 0;
                        t.forEach(function(t) {
                            var n, o = t.first, i = t.second, r = t.third, a = t.symbol1, u = t.symbol2, c = t.result, l = t.xPos, d = [ "+", "-" ], h = [ "x", "÷" ];
                            d.includes(a) && d.includes(u) || h.includes(a) && h.includes(u) || h.includes(a) && d.includes(u) ? (n = (0, 
                            s.calcStrToNumber)(o + a + i), (0, s.calcStrToNumber)(n + u + r)) : d.includes(a) && h.includes(u) ? (n = (0, 
                            s.calcStrToNumber)(i + u + r), (0, s.calcStrToNumber)(o + a + n)) : (0, s.calcStrToNumber)(o + a + i), 
                            e ? 0 == l ? t.xAnswer = o : 1 == l && (t.xAnswer = i) : 0 == l ? t.correct = c == o : 1 == l && (t.correct = c == i);
                        });
                    },
                    calculate: function() {
                        var t = this.randomList[this.curIdx], e = t.first, n = t.second, o = t.result, i = t.xPos;
                        return 0 == i ? o == e : 1 == i && o == n;
                    }
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    }
}, [ [ "5db2", "common/runtime", "common/vendor" ] ] ]);