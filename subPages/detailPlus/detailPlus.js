(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesD/subPages/detailPlus/detailPlus" ], {
    "4a6f": function(t, e, n) {
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
    "60bb": function(t, e, n) {
        "use strict";
        var o = n("845a9");
        n.n(o).a;
    },
    6833: function(t, e, n) {
        "use strict";
        (function(t) {
            var e = n("4ea4");
            n("18e6"), n("33db"), e(n("66fd"));
            var o = e(n("95a4"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default);
        }).call(this, n("543d").createPage);
    },
    "845a9": function(t, e, n) {},
    "95a4": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("4a6f"), i = n("aa40");
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n("60bb");
        var a = n("f0c5"), s = Object(a.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = s.exports;
    },
    aa40: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("fd93"), i = n.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    },
    fd93: function(t, e, n) {
        "use strict";
        (function(t) {
            var o = n("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = o(n("278c")), r = o(n("9dcd")), a = n("fe1d"), s = null, u = "", l = {
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
                        showAnswerModal: !1,
                        needWatchVideo: !0,
                        paperW: 794,
                        paperH: 1123,
                        name: "",
                        hasModal: !1
                    };
                },
                computed: {
                    modalTitle: function() {
                        return this.showModal ? this.curIdx + 1 + " / " + this.randomList.length : "  ";
                    }
                },
                onLoad: function(e) {
                    var n = e.type, o = e.number;
                    this.type = n, this.number = o;
                    var i = a.typeMap[n], r = i.min, s = i.max, u = i.symbol, l = i.boundaryVal, c = i.name, d = i.step;
                    this.name = c, t.setNavigationBarTitle({
                        title: c
                    }), t.showLoading({
                        title: "正在出题..."
                    });
                    var h = this.generate({
                        min: r,
                        max: s,
                        symbol: u,
                        boundaryVal: l,
                        name: c,
                        number: o,
                        step: d
                    });
                    t.hideLoading(), console.log("generate888", h), this.randomList = h, this.curIdx = 0, 
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
                        var i = "".concat(this.name, " 共").concat(this.number, "题");
                        e && (i += " 【答案】");
                        var r = o.measureText(i).width, a = 397 - r / 2;
                        o.font = "24px Microsoft Yahei", o.fillText(i, a, 50);
                        var s = 60, u = 110, l = s, c = u, d = 0, h = "", f = 30, m = 40, g = 4;
                        o.font = "24px Microsoft Yahei", this.randomList.forEach(function(t, n) {
                            var i = t.first, r = t.second, a = t.symbol, u = t.answer;
                            h = "".concat(i, " ").concat(a, " ").concat(r, " ="), h += e ? " ".concat(u) : "    ";
                            var v = (794 - 2 * f - s - 80) / g;
                            d = o.measureText(h).width > v ? o.measureText(h).width : v, o.measureText(h).width > v && (g -= 1, 
                            s = 100), l = n > 0 ? l + d + f : s, n > 0 & n % g == 0 && (c += m, l = s), o.fillText(h, l, c);
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
                        var e = "/subPages/detailPlus/detailPlus", n = "?type=".concat(this.type, "&number=").concat(this.number);
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
                        void this.$set(this.randomList, this.curIdx, e)) : void (e.result.length < 2 && (e.result = "" + e.result + t, 
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
                        this.isCalc || (this.curIdx = t);
                    },
                    submit: function() {
                        this.curRes = this.calculate(), this.randomList[this.curIdx].checkResult = this.curRes, 
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
                            e.result != e.answer && t++;
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
                        var e = t.min, n = void 0 === e ? 0 : e, o = t.max, i = void 0 === o ? 9 : o, r = t.number, s = void 0 === r ? 10 : r, u = t.symbol, l = void 0 === u ? "+" : u, c = t.boundaryVal, d = void 0 === c ? 10 : c, h = t.step, f = void 0 === h ? 1 : h, m = [], g = [], v = [], p = (0, 
                        a.queue)(this.generateArr(n, i), 2);
                        return p.length, "+" == l ? m = p.filter(function(t) {
                            return t[0] + t[1] < d && t[0] % f == 0 && t[1] % f == 0;
                        }) : "-" == l ? m = p.filter(function(t) {
                            return t[0] < i && t[1] < i && t[0] - t[1] > 0 && t[0] % f == 0 && t[1] % f == 0;
                        }) : "x" == l ? m = p.filter(function(t) {
                            return t[0] * t[1] < d && t[0] % f == 0 && t[1] % f == 0;
                        }) : "÷" == l ? m = p.filter(function(t) {
                            return t[1] < 10 && t[0] / t[1] >= n && t[0] / t[1] < d && t[0] % t[1] == 0 && t[0] % f == 0 && t[1] % f == 0;
                        }) : "+,-" == l ? (m = p.filter(function(t) {
                            return t[0] + t[1] < d && t[0] % f == 0 && t[1] % f == 0;
                        }), g = p.filter(function(t) {
                            return t[0] < i && t[1] < i && t[0] - t[1] > 0 && t[0] % f == 0 && t[1] % f == 0;
                        })) : "+,0" == l ? m = p.filter(function(t) {
                            return t[0] + t[1] < d && (t[0] > 10 || t[1] > 10) && t[0] % f == 0 && t[1] % f == 0;
                        }) : "+,1" == l ? m = p.filter(function(t) {
                            return t[0] < 10 && t[1] < 10 && t[0] + t[1] > 10 && t[0] + t[1] < d && t[0] % f == 0 && t[1] % f == 0;
                        }) : "-,0" == l ? m = p.filter(function(t) {
                            return t[0] < i && t[1] < i && t[0] > 10 && String(t[0])[1] > t[1] && t[0] - t[1] > 0 && t[0] % f == 0 && t[1] % f == 0;
                        }) : "-,1" == l && (m = p.filter(function(t) {
                            return t[0] < i && t[1] < i && t[0] > 10 && t[1] < 10 && String(t[0])[1] < t[1] && t[0] - t[1] > 0 && t[0] % f == 0 && t[1] % f == 0;
                        })), console.log("queueRes", p), console.log("this.generateArr(min, max)", this.generateArr(n, i)), 
                        console.log("filterRes", m), console.log("filterRes2", g), g.length > 0 ? (v = this.getRandomArr(m, Math.ceil(s / 2), "+").concat(this.getRandomArr(g, Math.ceil(s / 2), "-")), 
                        v = (0, a.shuffle)(v)) : v = this.getRandomArr(m, s, l.substr(0, 1)), v;
                    },
                    getRandomArr: function() {
                        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, n = arguments.length > 2 ? arguments[2] : void 0, o = (0, 
                        a.shuffle)(t), r = [], s = 0; s < o.length; s++) {
                            var u = (0, i.default)(o[s], 2), l = u[0], c = u[1];
                            if (!(s < e)) break;
                            r.push({
                                first: l,
                                second: c,
                                symbol: n,
                                answer: (0, a.calcStrToNumber)(l + n + c),
                                result: "",
                                total: o.length
                            });
                        }
                        return console.log("result", r), r;
                    },
                    randomNum: function(t, e) {
                        return parseInt(Math.random() * (e - t)) + t;
                    },
                    calculate: function() {
                        return this.randomList[this.curIdx].answer == this.randomList[this.curIdx].result;
                    }
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    }
}, [ [ "6833", "common/runtime", "common/vendor" ] ] ]);