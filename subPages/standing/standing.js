(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPages/standing/standing" ], {
    "0636": function(t, e, n) {
        "use strict";
        (function(t) {
            var e = n("4ea4");
            n("18e6"), n("33db"), e(n("66fd"));
            var o = e(n("fdb0"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default);
        }).call(this, n("543d").createPage);
    },
    2413: function(t, e, n) {
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
            uPopup: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-popup/u-popup") ]).then(n.bind(null, "0831"));
            },
            uModal: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-modal/u-modal") ]).then(n.bind(null, "672f"));
            }
        }, r = function() {
            var t = this, e = (t.$createElement, t._self._c, Number(t.curIdx[0])), n = Number(t.curIdx[0]), o = Number(t.curIdx[0]) === t.randomList.length - 1 && !t.isCalc;
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
                    m2: o
                }
            });
        }, i = [];
    },
    3065: function(t, e, n) {},
    "445f": function(t, e, n) {
        "use strict";
        (function(t) {
            var o = n("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = o(n("278c")), i = o(n("9523")), s = o(n("9dcd")), a = n("fe1d");
            function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(n), !0).forEach(function(e) {
                        (0, i.default)(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            var u = null, d = "", f = {
                data: function() {
                    var t;
                    return t = {
                        paperW: 794,
                        paperH: 1123,
                        randomList: [],
                        formartTimer: {},
                        type: "",
                        number: "",
                        curIdx: "0,0,result",
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
                    }), (0, i.default)(t, "popupCustomStyle", {}), (0, i.default)(t, "showAnswerModal", !1), 
                    (0, i.default)(t, "needWatchVideo", !0), (0, i.default)(t, "name", ""), t;
                },
                computed: {
                    item: function() {
                        return this.randomList[this.curIdx[0]];
                    },
                    modalTitle: function() {
                        return this.showModal ? Number(this.curIdx[0]) + 1 + " / " + this.randomList.length : "  ";
                    }
                },
                onLoad: function(e) {
                    var n = e.type, o = e.number;
                    console.log("option", e), this.type = n, this.number = o;
                    var r = a.typeMap[n], i = r.min, s = r.max, c = r.symbol, l = r.boundaryMin, u = r.boundaryMax, d = (r.boundaryVal, 
                    r.firstMin), f = r.secondMin, h = r.firstMax, g = r.secondMax, m = r.name;
                    this.name = m, console.log("typeMap", a.typeMap), t.setNavigationBarTitle({
                        title: m
                    }), t.showLoading({
                        title: "正在出题..."
                    });
                    var v = this.generate({
                        min: i,
                        max: s,
                        number: o,
                        symbol: c,
                        boundaryMin: l,
                        boundaryMax: u,
                        firstMin: d,
                        secondMin: f,
                        firstMax: h,
                        secondMax: g
                    });
                    t.hideLoading(), console.log("generate888", v), this.randomList = v, v[0] && v[0].answer.length - 1 && (this.curIdx = "0,".concat(v[0].answer.length - 1, ",result")), 
                    console.log("this.curIdx", this.curIdx), this.startTimer();
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
                        o.fillText("微信搜一搜：   一明工具箱2.5", 100, 157), o.fillText("微信搜一搜：   一明工具箱2.5", 300, 257), 
                        o.fillStyle = "#303133", o.font = "28px Microsoft Yahei";
                        var r = 50, i = 110, s = r, a = i, c = "", l = 0, u = 120, d = 4, f = 794 - 2 * r, h = 0, g = 0, m = 8, v = 24;
                        o.font = "24px Microsoft Yahei", this.randomList.some(function(t, n) {
                            var i = t.first, p = t.second, b = t.third, S = t.symbol, w = t.answer, x = void 0 === w ? "" : w;
                            if (c = "".concat(i).concat(S).concat(p, "="), b && (c = "".concat(i).concat(S).concat(p).concat(S).concat(b, "=")), 
                            0 === n && (f = 794 - 2 * r, h = o.measureText(c + x + "；").width, d = Math.floor(f / h) > 5 ? 5 : Math.floor(f / h), 
                            g = f / d, v = m * d), n + 1 > v) return !0;
                            e && (c += "".concat(x, "；")), n > 0 && (s = s + g + l), n > 0 & n % d == 0 && (a += u, 
                            s = r), o.fillText(c, s, a);
                        });
                        var p = "".concat(this.name, " 共").concat(v, "题");
                        e && (p += " 【答案】");
                        var b = o.measureText(p).width, S = 397 - b / 2;
                        o.font = "24px Microsoft Yahei", o.fillText(p, S, 50), o.draw();
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
                        1 == (d = t) ? this.showAnswerModal = !0 : 2 == d && this.savePoster();
                    },
                    closeAnswerModal: function() {
                        this.showAnswerModal = !1;
                    },
                    openAnswerModal: function() {},
                    onShareAppMessage: function(t) {
                        var e = "/subPages/standing/standing", n = "?type=".concat(this.type, "&number=").concat(this.number);
                        return "button" === t.from ? (console.log(t.target), {
                            title: a.typeMap[this.type].name + "，欢迎来挑战！",
                            path: e + n
                        }) : {
                            title: a.typeMap[this.type].name + "，欢迎来挑战！",
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
                    tapBox: function(t) {
                        console.log("idx", t), this.isCalc || (this.curIdx = t);
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
                    generateArr: function(t, e) {
                        for (var n = [ t ], o = t; o < e; o++) n.push(++t);
                        return n;
                    },
                    generate: function(t) {
                        var e = t.min, n = void 0 === e ? 0 : e, o = t.max, i = void 0 === o ? 9 : o, c = t.number, u = void 0 === c ? 10 : c, d = t.symbol, f = void 0 === d ? "+" : d, h = t.boundaryMin, g = void 0 === h ? 10 : h, m = t.boundaryMax, v = void 0 === m ? 100 : m, p = t.firstMin, b = t.secondMin, S = t.firstMax, w = t.secondMax, x = [], y = [], M = this.generateArr(n, i);
                        M.length > 400 && (M = (0, a.shuffle)(M).splice(0, 400)), console.log("continuousArr", M);
                        var T = (0, a.queue)(M, 2);
                        return T.length, "+" == f ? x = T.filter(function(t) {
                            return t[0] >= p && t[0] <= S && t[1] >= b && t[1] <= w && t[0] + t[1] >= g && t[0] + t[1] <= v;
                        }) : "+." == f ? (T = T.map(function(t) {
                            return [ (0, s.default)(t[0]).div(100).toFixed(2), (0, s.default)(t[1]).div(100).toFixed(2) ];
                        }), console.log("queueRes33", T), x = T.filter(function(t) {
                            return +t[0] + +t[1] <= v;
                        })) : "-" == f ? x = T.filter(function(t) {
                            return t[0] >= p && t[0] <= S && t[1] >= b && t[1] <= w && t[0] - t[1] >= g && t[0] - t[1] <= v;
                        }) : "-." == f ? (T = T.map(function(t) {
                            return [ (0, s.default)(t[0]).div(100).toFixed(2), (0, s.default)(t[1]).div(100).toFixed(2) ];
                        }), console.log("queueRes33", T), x = T.filter(function(t) {
                            return t[0] >= p && t[0] <= S && t[1] >= b && t[1] <= w && +t[0] - +t[1] >= g && +t[0] - +t[1] <= v;
                        })) : "x" == f ? x = T.filter(function(t) {
                            return t[0] >= p && t[0] <= S && t[1] >= b && t[1] <= w && t[0] * t[1] >= g && t[0] * t[1] <= v;
                        }) : "x." == f && (T = T.map(function(t) {
                            return [ (0, s.default)(t[0]).div(10).toFixed(1), (0, s.default)(t[1]).div(10).toFixed(1) ];
                        }), console.log("queueRes33", T), x = T.filter(function(t) {
                            return t[0] >= p && t[0] <= S && t[1] >= b && t[1] <= w && +t[0] * +t[1] >= g && +t[0] * +t[1] <= v;
                        })), console.log("queueRes", T), console.log("filterRes", x), y = this.getRandomArr(x, u, f.substr(0, 1)), 
                        console.log("result666", y), y.map(function(t) {
                            var e, n, o, i = "x" == t.symbol && String(t.first).length > 1 && String(t.second).length > 1;
                            if (console.log("hasLevel", i), i) if (-1 == String(t.first).indexOf(".") && -1 == String(t.second).indexOf(".")) {
                                var c = String(t.second).length;
                                e = c > 0 ? (0, a.calcStrToNumber)(t.first + t.symbol + String(t.second)[c - 1]) : "", 
                                n = c > 1 ? (0, a.calcStrToNumber)(t.first + t.symbol + String(t.second)[c - 2]) : "", 
                                o = c > 2 ? (0, a.calcStrToNumber)(t.first + t.symbol + String(t.second)[c - 3]) : "";
                            } else {
                                var u = String(t.second).split("."), d = (0, r.default)(u, 2), f = d[0], h = d[1];
                                e = (0, a.calcStrToNumber)(t.first + t.symbol + h), e = (0, s.default)(e).times(10).toFixed(), 
                                n = (0, a.calcStrToNumber)(t.first + t.symbol + f), n = (0, s.default)(n).times(10).toFixed();
                            }
                            return l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l({}, t), String(t.first).length > 0 && {
                                first0: String(t.first)[0] || ""
                            }), String(t.first).length > 1 && {
                                first1: String(t.first)[1] || ""
                            }), String(t.first).length > 2 && {
                                first2: String(t.first)[2] || ""
                            }), String(t.first).length > 3 && {
                                first3: String(t.first)[3] || ""
                            }), String(t.first).length > 4 && {
                                first4: String(t.first)[4] || ""
                            }), String(t.first).length > 5 && {
                                first5: String(t.first)[5] || ""
                            }), String(t.second).length > 0 && {
                                second0: String(t.second)[0] || ""
                            }), String(t.second).length > 1 && {
                                second1: String(t.second)[1] || ""
                            }), String(t.second).length > 2 && {
                                second2: String(t.second)[2] || ""
                            }), String(t.second).length > 3 && {
                                second3: String(t.second)[3] || ""
                            }), String(t.second).length > 4 && {
                                second4: String(t.second)[4] || ""
                            }), String(t.second).length > 5 && {
                                second5: String(t.second)[5] || ""
                            }), String(t.answer).length > 0 && {
                                result0: String(t.result)[0] || ""
                            }), String(t.answer).length > 1 && {
                                result1: String(t.result)[1] || ""
                            }), String(t.answer).length > 2 && {
                                result2: String(t.result)[2] || ""
                            }), String(t.answer).length > 3 && {
                                result3: String(t.result)[3] || ""
                            }), String(t.answer).length > 4 && {
                                result4: String(t.result)[4] || ""
                            }), String(t.answer).length > 5 && {
                                result5: String(t.result)[5] || ""
                            }), e && {
                                level0: e
                            }), n && {
                                level1: n
                            }), o && {
                                level2: o
                            });
                        });
                    },
                    getRandomArr: function() {
                        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, n = arguments.length > 2 ? arguments[2] : void 0, o = (0, 
                        a.shuffle)(t), i = [], c = 0; c < o.length; c++) {
                            var l = (0, r.default)(o[c], 2), u = l[0], d = l[1], f = (0, a.calcStrToNumber)(u + n + d);
                            if (!(c < e)) break;
                            i.push({
                                first: u,
                                second: d,
                                symbol: n,
                                answer: f.indexOf(".") > -1 ? (0, s.default)(f).toFixed(2) : f,
                                result: "",
                                type: Math.ceil(3 * Math.random()),
                                total: o.length
                            });
                        }
                        return i;
                    },
                    onKeyboardChange: function(t) {
                        console.log("onKeyboardChange", t);
                        var e = this.curIdx.split(","), n = (0, r.default)(e, 3), o = n[0], i = n[1], s = n[2], a = this.randomList[o];
                        a["".concat(s).concat(i)] = String(t), this.$set(this.randomList, o, a);
                    },
                    backspace: function() {
                        var t = this.curIdx.split(","), e = (0, r.default)(t, 3), n = e[0], o = e[1], i = e[2], s = this.randomList[n];
                        s["".concat(i).concat(o)].length && (s["".concat(i).concat(o)] = s["".concat(i).concat(o)].substr(0, s["".concat(i).concat(o)].length - 1)), 
                        this.$set(this.randomList, n, s), console.log("this.randomList", this.randomList);
                    },
                    confirm: function() {},
                    submit: function() {
                        var t = this.curIdx.split(","), e = (0, r.default)(t, 3), n = e[0];
                        e[1], e[2], this.curRes = this.startCalculate(this.randomList, n), this.showModal = !0;
                    },
                    next: function() {
                        var e = this.curIdx.split(","), n = (0, r.default)(e, 3), o = n[0], i = (n[1], n[2], 
                        this.randomList[+o + 1]);
                        +o < this.randomList.length && (this.curIdx = "".concat(+o + 1, ",").concat(i.answer.length - 1, ",result"), 
                        this.showModal = !1, t.pageScrollTo({
                            scrollTop: 0,
                            duration: 200
                        }), console.log("this.curIdx", this.curIdx));
                    },
                    finish: function() {
                        this.clearTimer(), this.isCalc = !0;
                        var t = this.randomList.filter(function(t) {
                            return !t.correct;
                        }).length, e = (0, s.default)(100).div(this.randomList.length);
                        this.grade = (0, s.default)(100).minus((0, s.default)(t).times(e)).toFixed(0), this.errNo = t, 
                        console.log("错误题目数：", t), console.log("结果：", this.randomList);
                    },
                    startCalculate: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 ? arguments[1] : void 0, n = t[e], o = "";
                        if (n.answer.split("").forEach(function(t, e) {
                            o += n["result".concat(e)];
                        }), +n.answer == +o) {
                            if (n.correct = !0, n.level0 && "0" != n.level0) {
                                var r = "";
                                n.level0.split("").forEach(function(t, e) {
                                    r += n["L0".concat(e)];
                                }), n.level0 !== r && (n.correct = !1);
                            }
                            if (n.level1 && "0" != n.level1) {
                                var i = "";
                                n.level1.split("").forEach(function(t, e) {
                                    i += n["L1".concat(e)];
                                }), n.level1 !== i && (n.correct = !1);
                            }
                            if (n.level2 && "0" != n.level2) {
                                var s = "";
                                n.level2.split("").forEach(function(t, e) {
                                    s += n["L2".concat(e)];
                                }), n.level2 !== s && (n.correct = !1);
                            }
                        } else n.correct = !1;
                        return n.correct;
                    }
                }
            };
            e.default = f;
        }).call(this, n("543d").default);
    },
    "79dd": function(t, e, n) {
        "use strict";
        var o = n("3065");
        n.n(o).a;
    },
    c303: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("445f"), r = n.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = r.a;
    },
    fdb0: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("2413"), r = n("c303");
        for (var i in r) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("79dd");
        var s = n("f0c5"), a = Object(s.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = a.exports;
    }
}, [ [ "0636", "common/runtime", "common/vendor" ] ] ]);