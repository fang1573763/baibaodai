(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPages/parenthesis/parenthesis" ], {
    "3f71": function(t, e, n) {
        "use strict";
        (function(t) {
            var o = n("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = o(n("278c")), r = o(n("9dcd")), a = n("fe1d"), s = null, u = "", c = {
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
                        popupCustomStyle: {},
                        showAnswerModal: !1,
                        needWatchVideo: !0,
                        name: "",
                        hasModal: !1
                    };
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
                    this.type = n, this.number = o;
                    var i = a.typeMap[n], r = i.min, s = i.max, u = i.symbol, c = i.boundaryVal, l = i.name, d = i.firstMin, h = i.firstMax, f = i.secondMin, m = i.secondMax, v = i.thirdMin, g = i.thirdMax, p = i.boundaryMin, b = i.boundaryMax;
                    this.name = l, t.setNavigationBarTitle({
                        title: l
                    }), t.showLoading({
                        title: "正在出题..."
                    });
                    var M = this.generate({
                        min: r,
                        max: s,
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
                        boundaryMin: p,
                        boundaryMax: b
                    });
                    t.hideLoading(), console.log("generate888", M), this.randomList = M, this.curIdx = 0, 
                    this.startTimer();
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
                        o.fillText("微信搜一搜：   一明工具箱2.5", 100, 157), o.fillText("微信搜一搜：   一明工具箱2.5", 300, 257), 
                        o.fillStyle = "#303133", o.font = "28px Microsoft Yahei";
                        var i = "".concat(this.name, " 共").concat(this.number, "题");
                        e && (i += " 【答案】");
                        var r = o.measureText(i).width, a = 397 - r / 2;
                        o.font = "24px Microsoft Yahei", o.fillText(i, a, 50);
                        var s = 60, u = this.randomList.length > 50 ? 100 : 110, c = s, l = u, d = 0, h = "", f = 30, m = this.randomList.length > 50 ? 30 : 40, v = 3;
                        o.font = "24px Microsoft Yahei", this.randomList.forEach(function(t, n) {
                            var i = t.first, r = t.second, a = t.symbol1, u = t.symbol2, g = t.answer, p = t.third;
                            h = "".concat(i).concat(a, "(").concat(r).concat(u).concat(p, ")="), h += e ? " ".concat(g) : "    ";
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
                        u = t;
                        var e = this.getVideoStorage();
                        this.needWatchVideo = !e, 1 == u ? this.showAnswerModal = !0 : 2 == u && this.savePoster();
                    },
                    closeAnswerModal: function() {
                        this.showAnswerModal = !1;
                    },
                    openAnswerModal: function() {},
                    onShareAppMessage: function(t) {
                        var e = "/subPages/parenthesis/parenthesis", n = "?type=".concat(this.type, "&number=").concat(this.number);
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
                        var e = this.randomList[this.curIdx];
                        return "0" === e.result && 0 == t ? (e.result = "0", void this.$set(this.randomList, this.curIdx, e)) : "0" === e.result && 0 != t && "." != t ? (e.result = String(t), 
                        void this.$set(this.randomList, this.curIdx, e)) : void (e.result.length < 5 && (e.result = "" + e.result + t, 
                        this.$set(this.randomList, this.curIdx, e)));
                    },
                    backspace: function() {
                        var t = this.randomList[this.curIdx];
                        t.result.length && (t.result = t.result.substr(0, t.result.length - 1)), this.$set(this.randomList, this.curIdx, t), 
                        console.log("this.randomList", this.randomList);
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
                        this.isCalc || this.showAnswerModal || (this.curIdx = t);
                    },
                    submit: function() {
                        0 == this.curIdx && this.startCalculate(this.randomList, !0), this.curRes = this.randomList[this.curIdx].answer == this.randomList[this.curIdx].result, 
                        this.showModal = !0;
                    },
                    next: function() {
                        this.curIdx < this.randomList.length && (this.curIdx++, this.showModal = !1, t.pageScrollTo({
                            scrollTop: 0,
                            duration: 200
                        }));
                    },
                    finish: function() {
                        this.clearTimer(), this.isCalc = !0;
                        var t = 0;
                        this.randomList.forEach(function(e) {
                            e.correct || t++;
                        });
                        var e = (0, r.default)(100).div(this.randomList.length);
                        this.grade = (0, r.default)(100).minus((0, r.default)(t).times(e)).toFixed(0), this.errNo = t, 
                        console.log("错误题目数：", t), console.log("结果：", this.randomList);
                    },
                    generateArr: function(t, e) {
                        for (var n = [ t ], o = t; o < e; o++) n.push(++t);
                        return n;
                    },
                    generate: function(t) {
                        var e = t.min, n = void 0 === e ? 1 : e, o = t.max, i = void 0 === o ? 9 : o, r = t.number, s = void 0 === r ? 10 : r, u = t.symbol, c = void 0 === u ? "+,-" : u, l = (t.boundaryVal, 
                        t.firstMin), d = t.firstMax, h = t.secondMin, f = t.secondMax, m = t.thirdMin, v = t.thirdMax, g = t.boundaryMin, p = t.boundaryMax, b = [], M = [], w = this.generateArr(n, i);
                        console.log("continuousArr", w), w.length >= 50 && c.includes("+") && c.includes("-") && (w = (0, 
                        a.shuffle)(w).splice(0, 50));
                        var x = (0, a.queue)(w, 3);
                        return "+-()" == c && (b = x.filter(function(t) {
                            return t[0] >= l && t[0] <= d && t[1] >= h && t[1] <= f && t[2] >= m && t[2] <= v && t[0] - t[1] - t[2] >= g && t[0] + t[1] + t[2] <= p;
                        })), console.log("queueRes", x), console.log("filterRes", b), [].length > 0 || (M = this.getRandomArr(b, s, c)), 
                        M;
                    },
                    randomRange: function(t, e) {
                        return Math.round(Math.random() * (e - t)) + t;
                    },
                    getRandomArr: function() {
                        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, n = arguments.length > 2 ? arguments[2] : void 0, o = (0, 
                        a.shuffle)(t), r = [], s = this.randomRange, u = 0; u < o.length; u++) {
                            var c = (0, i.default)(o[u], 3), l = c[0], d = c[1], h = c[2], f = void n.split(","), m = void 0;
                            if ("+-()" == n && (f = n[s(0, 1)], m = +d - +h > 0 ? n[s(0, 1)] : n[0]), !(u < e)) break;
                            r.push({
                                first: l,
                                second: d,
                                third: h,
                                symbol1: f,
                                symbol2: m,
                                result: "",
                                symbol3: "(",
                                symbol4: ")",
                                total: o.length
                            });
                        }
                        return console.log("result", r), r;
                    },
                    randomNum: function(t, e) {
                        return parseInt(Math.random() * (e - t)) + t;
                    },
                    startCalculate: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 ? arguments[1] : void 0;
                        t.forEach(function(t) {
                            var n, o, i = t.first, r = t.second, s = t.third, u = t.symbol1, c = t.symbol2, l = t.symbol3, d = t.symbol4, h = t.result, f = [ "(", ")" ];
                            f.includes(l) && f.includes(d) && (n = (0, a.calcStrToNumber)(r + c + s), o = (0, 
                            a.calcStrToNumber)(i + u + n)), e ? t.answer = o : t.correct = o == h;
                        });
                    }
                }
            };
            e.default = c;
        }).call(this, n("543d").default);
    },
    "639b": function(t, e, n) {},
    "65a8": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("3f71"), i = n.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    },
    a12c: function(t, e, n) {
        "use strict";
        (function(t) {
            var e = n("4ea4");
            n("18e6"), n("33db"), e(n("66fd"));
            var o = e(n("df5d"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default);
        }).call(this, n("543d").createPage);
    },
    df5d: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("e6fb"), i = n("65a8");
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n("e34d");
        var a = n("f0c5"), s = Object(a.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = s.exports;
    },
    e34d: function(t, e, n) {
        "use strict";
        var o = n("639b");
        n.n(o).a;
    },
    e6fb: function(t, e, n) {
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
            uPopup: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-popup/u-popup") ]).then(n.bind(null, "0831"));
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
    }
}, [ [ "a12c", "common/runtime", "common/vendor" ] ] ]);