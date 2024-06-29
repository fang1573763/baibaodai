(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPages/point24/point24" ], {
    "19fc": function(t, e, n) {
        "use strict";
        (function(t) {
            var o = n("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = o(n("278c")), i = o(n("9523")), a = o(n("9dcd")), s = n("fe1d");
            function u(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            var c = null, l = null, h = "", f = "", d = [], m = {
                data: function() {
                    return {
                        type: "",
                        typeMap: {
                            1: "入门级",
                            2: "高手级",
                            3: "骨灰级"
                        },
                        number: "",
                        curIdx: 0,
                        eStack: [],
                        curItem: {},
                        randomList: [],
                        symbolArr: [ "+", "-", "x", "÷" ],
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
                            color: "#0f7592",
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
                        hasModal: !1,
                        list: [],
                        correctList: [],
                        startData: {
                            clientX: "",
                            clientY: ""
                        },
                        moveX: 0,
                        moveY: 0,
                        touch: {},
                        column: 3,
                        boxWidth: 200,
                        boxHeight: 200,
                        steps: 0,
                        showSelectModal: !1,
                        answerList: []
                    };
                },
                computed: {
                    curArr: function() {
                        return this.randomList.length ? this.randomList[this.curIdx] : [];
                    }
                },
                onLoad: function(t) {
                    t.type ? (this.type = t.type, this.beginGame(t.type)) : this.showSelectModal = !0;
                },
                onShow: function() {
                    var t = this.getVideoStorage();
                    console.log("onShow--getVideoStorage", t), this.needWatchVideo = !t;
                },
                beforeDestroy: function() {
                    this.clearTimer(), this.clearVideoStorage(), f = "", l = null, h = null, d = [];
                },
                methods: {
                    onShareAppMessage: function(t) {
                        var e = "/subPages/point24/point24", n = "?type=".concat(this.type);
                        return "button" === t.from ? (console.log(t.target), {
                            title: "".concat(this.typeMap[this.type], "24点小游戏，欢迎来挑战！"),
                            path: e + n
                        }) : {
                            title: "".concat(this.typeMap[this.type], "24点小游戏，欢迎来挑战！"),
                            path: e + n
                        };
                    },
                    reset: function() {
                        var e = d[this.curIdx];
                        this.$set(this.randomList, this.curIdx, JSON.parse(JSON.stringify(e))), this.eStack = [], 
                        f = "", t.showToast({
                            title: "复位成功",
                            icon: "none"
                        });
                    },
                    handleAnswerModalClose: function() {
                        this.clearVideoStorage(), this.showAnswerModal = !1;
                    },
                    generate: function() {
                        var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, n = [], o = [];
                        switch (Number(e)) {
                          case 1:
                            n = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
                            break;

                          case 2:
                            n = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
                            break;

                          case 3:
                            n = [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
                        }
                        var r = (0, s.queue)(n, 4);
                        return (r = (0, s.shuffle)(r)).some(function(n) {
                            if (o.length >= 5) return !0;
                            3 == e ? t.judgePoint24(n) && n.filter(function(t) {
                                return t > 10;
                            }).length > 0 && o.push(n.map(function(t) {
                                return {
                                    num: t,
                                    show: !0
                                };
                            })) : 2 == e ? t.judgePoint24(n) && 1 == n.filter(function(t) {
                                return t > 10;
                            }).length && o.push(n.map(function(t) {
                                return {
                                    num: t,
                                    show: !0
                                };
                            })) : t.judgePoint24(n) && o.push(n.map(function(t) {
                                return {
                                    num: t,
                                    show: !0
                                };
                            }));
                        }), console.log("result", o), o;
                    },
                    tapBox: function(e, n) {
                        var o = this.eStack, r = this.symbolArr;
                        if (o.length < 3) {
                            if (o.length > 0 && f === n) return;
                            if (0 == o.length) {
                                if (r.includes(e)) return void t.showToast({
                                    title: "请先选择数字",
                                    icon: "error"
                                });
                            } else if (1 == o.length) {
                                if (!r.includes(e)) return this.eStack = [ e ], void (f = n);
                            } else if (2 == o.length && r.includes(e)) return void (this.eStack = [ this.eStack[0], e ]);
                            this.eStack.push(e), console.log("this.eStack2222", this.eStack), 3 === this.eStack.length ? this.mergeNum(n) : null == n || r.includes(n) || (f = n);
                        }
                    },
                    mergeNum: function(e) {
                        var n = this.calcSum(this.eStack);
                        console.log("propIdx", e), console.log("preIdx", f);
                        var o = this.randomList[this.curIdx].map(function(t, o) {
                            return e == o ? (t.show = !0, t.num = n) : f == o && (t.show = !1), function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? u(Object(n), !0).forEach(function(e) {
                                        (0, i.default)(t, e, n[e]);
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                    });
                                }
                                return t;
                            }({}, t);
                        });
                        this.$set(this.randomList, this.curIdx, o), this.eStack = [ n ], f = e;
                        var r = o.filter(function(t) {
                            return t.show;
                        });
                        1 == r.length && Math.abs(r[0].num - 24) < 1e-9 && (t.showToast({
                            title: "回答正确",
                            icon: "success"
                        }), this.curIdx < this.randomList.length - 1 ? (this.curIdx++, this.eStack = [], 
                        f = "", this.showAnswerModal = !1) : (this.clearTimer(), this.showModal = !0));
                    },
                    judgePoint24: function(t) {
                        var e = t.length;
                        if (1 == e) return Math.abs(t[0] - 24) < 1e-9;
                        for (var n = !1, o = 0; o < e; o++) for (var r = o + 1; r < e; r++) {
                            for (var i = t[o], a = t[r], s = [], u = 0; u < e; u++) u != o && u != r && s.push(t[u]);
                            if (n = (n = (n = (n = n || this.judgePoint24([].concat(s, [ i + a ]))) || this.judgePoint24([].concat(s, [ i - a ]))) || this.judgePoint24([].concat(s, [ a - i ]))) || this.judgePoint24([].concat(s, [ i * a ])), 
                            0 !== a && (n = n || this.judgePoint24([].concat(s, [ i / a ]))), 0 !== i && (n = n || this.judgePoint24([].concat(s, [ a / i ]))), 
                            n) return !0;
                        }
                        return !1;
                    },
                    handleShowAnswerModal: function() {
                        var t = this.genratePoint24(d[this.curIdx].map(function(t) {
                            return t.num + "";
                        })).split("\n");
                        this.answerList = t.slice(0, t.length - 1), this.watchVideo(1);
                    },
                    genratePoint24: function(t, e) {
                        var n = [ {
                            name: "-",
                            f: function(t, e) {
                                return t - e;
                            }
                        }, {
                            name: "+",
                            f: function(t, e) {
                                return t + e;
                            }
                        }, {
                            name: "/",
                            f: function(t, e) {
                                return t / e;
                            }
                        }, {
                            name: "*",
                            f: function(t, e) {
                                return t * e;
                            }
                        } ], o = t, r = [];
                        for (var i in o) r[1 << i] = parseInt(o[i]);
                        for (var a = 0, s = {}, u = "", c = function(t) {
                            if (t = (t = t.replace("%", n[m].name).replace("%", n[p].name).replace("%", n[g].name)).replace("N", r[l]).replace("N", r[h]).replace("N", r[f]).replace("N", r[d]), 
                            !s[t]) return s[t] = 1, u += t + "\n", ++a >= 5;
                        }, l = 1; l <= 8; l <<= 1) for (var h = 1; h <= 8; h <<= 1) for (var f = 1; f <= 8; f <<= 1) for (var d = 1; d <= 8; d <<= 1) if (15 == (l | h | f | d)) for (var m = 0; m <= 3; m++) for (var p = 0; p <= 3; p++) for (var g = 0; g <= 3; g++) {
                            var v = n[m], w = n[p], b = n[g], S = b.f(w.f(v.f(r[l], r[h]), r[f]), r[d]);
                            if (Math.abs(S - 24) < 1e-5 && c("((N%N)%N)%N")) return u;
                            if (S = v.f(r[l], b.f(w.f(r[h], r[f]), r[d])), Math.abs(S - 24) < 1e-5 && c("N%((N%N)%N)")) return u;
                            if (S = b.f(v.f(r[l], w.f(r[h], r[f])), r[d]), Math.abs(S - 24) < 1e-5 && c("(N%(N%N))%N")) return u;
                            if (S = v.f(r[l], w.f(r[h], b.f(r[f], r[d]))), Math.abs(S - 24) < 1e-5 && c("N%(N%(N%N))")) return u;
                            if (S = w.f(v.f(r[l], r[h]), b.f(r[f], r[d])), Math.abs(S - 24) < 1e-5 && c("(N%N)%(N%N)")) return u;
                        }
                        return u;
                    },
                    calcSum: function(t) {
                        var e = (0, r.default)(t, 3), n = e[0], o = e[1], i = e[2], s = 0;
                        return "+" == o ? s = (0, a.default)(n).plus(i).toFixed() : "-" == o ? s = (0, a.default)(n).minus(i).toFixed() : "x" == o ? s = (0, 
                        a.default)(n).times(i).toFixed() : "÷" == o && (s = (0, a.default)(n).div(i).toFixed()), 
                        s;
                    },
                    closeModal: function() {
                        this.showModal = !1, this.clearSteps();
                    },
                    beginGame: function(t) {
                        this.type = t, this.clearSteps(), this.startTimer(), this.showSelectModal = !1, 
                        this.curIdx = 0, this.eStack = [], f = "";
                        var e = this.generate(t);
                        d = JSON.parse(JSON.stringify(e)), this.randomList = JSON.parse(JSON.stringify(e));
                    },
                    again: function() {
                        this.showModal = !1, this.beginGame(this.type);
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
                        var e = this;
                        h = t;
                        var n = this.getVideoStorage();
                        this.needWatchVideo = !n, l && this.needWatchVideo ? l.show().catch(function() {
                            l.load().then(function() {
                                return l.show();
                            }).catch(function(t) {
                                console.log("激励视频 广告显示失败"), 1 == h ? e.showAnswerModal = !0 : 2 == h && e.savePoster();
                            });
                        }) : 1 == h ? this.showAnswerModal = !0 : 2 == h && this.savePoster();
                    },
                    closeAnswerModal: function() {
                        this.showAnswerModal = !1;
                    },
                    openAnswerModal: function() {
                        this.showKeyBoard = !1;
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
                        c = setInterval(function() {
                            t.timer += 1, t.formartTimer = t.formatTime(t.timer);
                        }, 1e3);
                    },
                    clearTimer: function() {
                        c && (clearInterval(c), c = null);
                    },
                    clearSteps: function() {
                        this.steps = 0;
                    },
                    confirm: function() {
                        this.showKeyBoard = !1;
                    },
                    navigateBack: function() {
                        t.navigateBack({
                            delta: -1,
                            fail: function() {
                                t.switchTab({
                                    url: "/pages/others/others"
                                });
                            }
                        });
                    },
                    submit: function() {
                        this.clearTimer(), this.showKeyBoard = !1, this.isCalc = !0;
                    },
                    randomNum: function(t, e) {
                        return parseInt(Math.random() * (e - t)) + t;
                    }
                }
            };
            e.default = m;
        }).call(this, n("543d").default);
    },
    "1fa4": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("19fc"), r = n.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = r.a;
    },
    "6ec8": function(t, e, n) {
        "use strict";
        (function(t) {
            var e = n("4ea4");
            n("18e6"), n("33db"), e(n("66fd"));
            var o = e(n("d958"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default);
        }).call(this, n("543d").createPage);
    },
    "922a": function(t, e, n) {
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
            uPopup: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-popup/u-popup") ]).then(n.bind(null, "0831"));
            },
            uCell: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-cell/u-cell") ]).then(n.bind(null, "04a3"));
            },
            uModal: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-modal/u-modal") ]).then(n.bind(null, "672f"));
            }
        }, r = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__map(t.curArr, function(e, n) {
                return {
                    $orig: t.__get_orig(e),
                    g0: t.eStack.includes(e.num)
                };
            })), n = t.__map(t.symbolArr, function(e, n) {
                return {
                    $orig: t.__get_orig(e),
                    g1: t.eStack.includes(e)
                };
            });
            t._isMounted || (t.e0 = function(e) {
                t.showSelectModal = !0;
            }, t.e1 = function(e, n, o) {
                var r = arguments[arguments.length - 1].currentTarget.dataset, i = r.eventParams || r["event-params"];
                n = i.item, o = i.idx, n.show && t.tapBox(n.num, o);
            }, t.e2 = function(e) {
                t.showModal = !1;
            }, t.e3 = function(e) {
                t.showModal = !1;
            }, t.e4 = function(e) {
                t.showSelectModal = !1;
            }, t.e5 = function(e) {
                t.showSelectModal = !1;
            }), t.$mp.data = Object.assign({}, {
                $root: {
                    l0: e,
                    l1: n
                }
            });
        }, i = [];
    },
    c7df: function(t, e, n) {},
    d0bd: function(t, e, n) {
        "use strict";
        var o = n("c7df");
        n.n(o).a;
    },
    d958: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("922a"), r = n("1fa4");
        for (var i in r) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("d0bd");
        var a = n("f0c5"), s = Object(a.a)(r.default, o.b, o.c, !1, null, "025e0ebd", null, !1, o.a, void 0);
        e.default = s.exports;
    }
}, [ [ "6ec8", "common/runtime", "common/vendor" ] ] ]);