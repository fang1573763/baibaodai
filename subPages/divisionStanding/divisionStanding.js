(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPages/divisionStanding/divisionStanding" ], {
    "32be": function(t, e, n) {
        "use strict";
        var o = n("701c");
        n.n(o).a;
    },
    4449: function(t, e, n) {
        "use strict";
        (function(t) {
            var e = n("4ea4");
            n("18e6"), n("33db"), e(n("66fd"));
            var o = e(n("95b6"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default);
        }).call(this, n("543d").createPage);
    },
    "488b": function(t, e, n) {
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
    "701c": function(t, e, n) {},
    "95b6": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("488b"), r = n("f0b3");
        for (var i in r) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("32be");
        var a = n("f0c5"), l = Object(a.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = l.exports;
    },
    "97d6": function(t, e, n) {
        "use strict";
        (function(t) {
            var o = n("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = o(n("278c")), i = o(n("9523")), a = o(n("9dcd")), l = n("fe1d");
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
            function s(t) {
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
                        curIdx: "0,1,Q1",
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
                    (0, i.default)(t, "name", ""), t;
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
                    var n = this, o = e.type, r = e.number;
                    console.log("option", e), this.type = o, this.number = r;
                    var i = l.typeMap[o], a = i.min, c = i.max, s = i.symbol, u = i.boundaryMin, d = i.boundaryMax, f = (i.boundaryVal, 
                    i.firstMin), h = i.secondMin, g = i.firstMax, v = i.secondMax, m = i.name;
                    this.name = m, console.log("typeMap", l.typeMap), t.setNavigationBarTitle({
                        title: m
                    }), t.showLoading({
                        title: "正在出题..."
                    });
                    var p = this.generate({
                        min: a,
                        max: c,
                        number: r,
                        symbol: s,
                        boundaryMin: u,
                        boundaryMax: d,
                        firstMin: f,
                        secondMin: h,
                        firstMax: g,
                        secondMax: v
                    });
                    t.hideLoading(), console.log("generate888", p), this.randomList = p, p && p[0] && p[0].quotient && p[0].quotient.split("").some(function(t, e) {
                        if (0 != t) return n.curIdx = "0,".concat(e, ",Q1"), !0;
                    }), this.startTimer();
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
                        var r = 50, i = 110, a = r, l = i, c = "", s = 0, u = 120, d = 4, f = 794 - 2 * r, h = 0, g = 0, v = 8, m = 24;
                        o.font = "24px Microsoft Yahei", this.randomList.some(function(t, n) {
                            var i = t.first, p = t.second, b = t.third, S = t.symbol, w = t.answer, M = void 0 === w ? "" : w;
                            if (c = "".concat(i).concat(S).concat(p, "="), b && (c = "".concat(i).concat(S).concat(p).concat(S).concat(b, "=")), 
                            0 === n && (f = 794 - 2 * r, h = o.measureText(c + M + "；").width, d = Math.floor(f / h) > 5 ? 5 : Math.floor(f / h), 
                            g = f / d, m = v * d), n + 1 > m) return !0;
                            e && (c += "".concat(M, "；")), n > 0 && (a = a + g + s), n > 0 & n % d == 0 && (l += u, 
                            a = r), o.fillText(c, a, l);
                        });
                        var p = "".concat(this.name, " 共").concat(m, "题");
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
                        var e = "/subPages/divisionStanding/divisionStanding", n = "?type=".concat(this.type, "&number=").concat(this.number);
                        return "button" === t.from ? (console.log(t.target), {
                            title: l.typeMap[this.type].name + "，欢迎来挑战！",
                            path: e + n
                        }) : {
                            title: l.typeMap[this.type].name + "，欢迎来挑战！",
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
                        var e = t.min, n = void 0 === e ? 0 : e, o = t.max, r = void 0 === o ? 9 : o, i = t.number, a = void 0 === i ? 10 : i, c = t.symbol, u = void 0 === c ? "+" : c, d = t.boundaryMin, f = void 0 === d ? 10 : d, h = t.boundaryMax, g = void 0 === h ? 100 : h, v = t.firstMin, m = t.secondMin, p = t.firstMax, b = t.secondMax, S = [], w = [], M = this.generateArr(n, r);
                        M.length > 400 && (M = (0, l.shuffle)(M).splice(0, 400)), console.log("continuousArr", M);
                        var x = (0, l.queue)(M, 2);
                        return x.length, "÷" == u && (S = x.filter(function(t) {
                            return t[0] >= v && t[0] <= p && t[1] >= m && t[1] <= b && +t[0] / +t[1] >= f && +t[0] / +t[1] <= g;
                        })), console.log("queueRes", x), console.log("filterRes", S), w = this.getRandomArr(S, a, u.substr(0, 1)), 
                        console.log("result666", w), w.map(function(t) {
                            var e = Math.floor(t.first / t.second) + "", n = t.first % t.second, o = String(t.first), r = String(t.second), i = "", a = 0, l = o[2] ? 100 : 10, c = o[2] ? 2 == e.length ? "0" : "00" : "0";
                            e = e < l ? c + e : e;
                            for (var u = 0, d = o.length; u < d; u++) (+(i += o[u]) >= +r || 0 == o[u]) && (t["level".concat(a)] = e["".concat(u)] * r + "", 
                            t["level".concat(a)] = +t["level".concat(a)] < 10 && u > 0 ? "0" + +t["level".concat(a)] : t["level".concat(a)], 
                            i = t["level".concat(a, "_rest")] = +(t["level".concat(a - 1, "_rest")] || i) - +t["level".concat(a)] + (o[u + 1] || "") + "", 
                            t["level".concat(a, "_rest")] = +t["level".concat(a, "_rest")] < 10 && u > 0 ? "0" + +t["level".concat(a, "_rest")] : t["level".concat(a, "_rest")], 
                            a++);
                            return s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s({}, t), String(o).length > 0 && {
                                first0: String(o)[0] || ""
                            }), String(o).length > 1 && {
                                first1: String(o)[1] || ""
                            }), String(o).length > 2 && {
                                first2: String(o)[2] || ""
                            }), String(o).length > 3 && {
                                first3: String(o)[3] || ""
                            }), String(o).length > 4 && {
                                first4: String(o)[4] || ""
                            }), String(o).length > 5 && {
                                first5: String(o)[5] || ""
                            }), String(r).length > 0 && {
                                second0: String(r)[0] || ""
                            }), String(r).length > 1 && {
                                second1: String(r)[1] || ""
                            }), String(r).length > 2 && {
                                second2: String(r)[2] || ""
                            }), String(r).length > 3 && {
                                second3: String(r)[3] || ""
                            }), String(r).length > 4 && {
                                second4: String(r)[4] || ""
                            }), String(r).length > 5 && {
                                second5: String(r)[5] || ""
                            }), ""), String("").length > 0 && {
                                level00: String("")[0] || ""
                            }), String("").length > 1 && {
                                level01: String("")[1] || ""
                            }), String("").length > 2 && {
                                level02: String("")[2] || ""
                            }), ""), String("").length > 0 && {
                                level10: String("")[0] || ""
                            }), String("").length > 1 && {
                                level11: String("")[1] || ""
                            }), String("").length > 2 && {
                                level12: String("")[2] || ""
                            }), {}, {
                                quotient: e
                            }, String(e).length > 0 && {
                                quotient0: String(e)[0] || ""
                            }), String(e).length > 1 && {
                                quotient1: String(e)[1] || ""
                            }), String(e).length > 2 && {
                                quotient2: String(e)[2] || ""
                            }), {}, {
                                rest: n
                            }, String(n).length > 0 && {
                                rest0: String(n)[0] || ""
                            }), String(n).length > 1 && {
                                rest1: String(n)[1] || ""
                            });
                        });
                    },
                    getRandomArr: function() {
                        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, n = arguments.length > 2 ? arguments[2] : void 0, o = (0, 
                        l.shuffle)(t), i = [], a = 0; a < o.length; a++) {
                            var c = (0, r.default)(o[a], 2), s = c[0], u = c[1], d = (0, l.calcStrToNumber)(s + n + u);
                            if (d = Math.floor(d), !(a < e)) break;
                            i.push({
                                first: s,
                                second: u,
                                symbol: n,
                                answer: d,
                                result: "",
                                type: Math.ceil(3 * Math.random()),
                                total: o.length
                            });
                        }
                        return i;
                    },
                    onKeyboardChange: function(t) {
                        console.log("this.curIdx", this.curIdx);
                        var e = this.curIdx.split(","), n = (0, r.default)(e, 3), o = n[0], i = n[1], a = n[2], l = this.randomList[o];
                        l["".concat(a).concat(i)] = String(t), this.$set(this.randomList, o, l);
                    },
                    backspace: function() {
                        var t = this.curIdx.split(","), e = (0, r.default)(t, 3), n = e[0], o = e[1], i = e[2], a = this.randomList[n];
                        a["".concat(i).concat(o)].length && (a["".concat(i).concat(o)] = a["".concat(i).concat(o)].substr(0, a["".concat(i).concat(o)].length - 1)), 
                        this.$set(this.randomList, n, a);
                    },
                    confirm: function() {},
                    submit: function() {
                        var t = this.curIdx.split(","), e = (0, r.default)(t, 3), n = e[0];
                        e[1], e[2], this.curRes = this.startCalculate(this.randomList, n), this.showModal = !0;
                    },
                    next: function() {
                        var e = this, n = this.curIdx.split(","), o = (0, r.default)(n, 3), i = o[0], a = (o[1], 
                        o[2], this.randomList[+i + 1]);
                        +i < this.randomList.length && (a && a.quotient && a.quotient.split("").some(function(t, n) {
                            if (0 != t) return e.curIdx = "".concat(+i + 1, ",").concat(n, ",Q1"), !0;
                        }), this.showModal = !1, t.pageScrollTo({
                            scrollTop: 0,
                            duration: 200
                        }), console.log("this.curIdx", this.curIdx));
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
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = t[e], o = "";
                        if (String(n.quotient).split("").forEach(function(t, e) {
                            o += n["Q1".concat(e)] || "";
                        }), +n.quotient == +o) {
                            if (n.correct = !0, n.level0 && "0" != n.level0) {
                                var r = "";
                                n.level0.split("").forEach(function(t, e) {
                                    r += n["L1".concat(e)] || "";
                                }), +n.level0 != +r && (n.correct = !1, console.log("l0Str", r, n.level0));
                            }
                            if (n.level0_rest && n.level1 && "0" != n.level0_rest) {
                                var i = "";
                                n.level0_rest.split("").forEach(function(t, e) {
                                    i += n["R1".concat(e)] || "";
                                }), +n.level0_rest != +i && (n.correct = !1);
                            }
                            if (n.level1 && "0" != n.level1) {
                                var a = "";
                                n.level1.split("").forEach(function(t, e) {
                                    a += n["L2".concat(e)] || "";
                                }), +n.level1 != +a && (n.correct = !1);
                            }
                            if (n.level1_rest && n.level2 && "0" != n.level1_rest) {
                                var l = "";
                                n.level0_rest.split("").forEach(function(t, e) {
                                    l += n["R2".concat(e)] || "";
                                }), +n.level1_rest != +l && (n.correct = !1);
                            }
                            if (n.level2 && "0" != n.level2) {
                                var c = "";
                                n.level2.split("").forEach(function(t, e) {
                                    c += n["L3".concat(e)] || "";
                                }), +n.level2 != +c && (n.correct = !1);
                            }
                            if (n.level2_rest && "0" != n.level2_rest) {
                                var s = "";
                                n.level0_rest.split("").forEach(function(t, e) {
                                    s += n["R3".concat(e)] || "";
                                }), +n.level2_rest != +s && (n.correct = !1);
                            }
                        } else n.correct = !1;
                        return n.correct;
                    }
                }
            };
            e.default = f;
        }).call(this, n("543d").default);
    },
    f0b3: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("97d6"), r = n.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = r.a;
    }
}, [ [ "4449", "common/runtime", "common/vendor" ] ] ]);