(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPages/huarongdao/huarongdao" ], {
    "00ef": function(t, e, n) {
        "use strict";
        var o = n("837b");
        n.n(o).a;
    },
    "07f2": function(t, e, n) {
        "use strict";
        (function(t) {
            var o = n("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = o(n("448a")), r = o(n("278c")), a = o(n("9523"));
            function s(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            o(n("9dcd")), n("fe1d");
            var c = null, u = null, h = "", l = {
                data: function() {
                    return {
                        type: "",
                        number: "",
                        curIdx: 0,
                        curItem: {},
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
                        showSelectModal: !1
                    };
                },
                onLoad: function(e) {
                    var n = this, o = e.column, i = void 0 === o ? 3 : o;
                    e.column ? this.beginGame(i) : this.showSelectModal = !0, wx.createRewardedVideoAd && ((u = wx.createRewardedVideoAd({
                        adUnitId: "adunit-d95115a10139d72f"
                    })).onLoad(function() {}), u.onError(function(t) {}), u.onClose(function(e) {
                        e && e.isEnded ? (1 == h ? n.showAnswerModal = !0 : 2 == h && n.savePoster(), n.needWatchVideo = !1, 
                        n.setVideoStorage()) : (n.showAnswerModal = !1, t.showToast({
                            title: "出题不容易，请等待广告播放完毕",
                            icon: "none",
                            duration: 3e3
                        }));
                    }));
                },
                onShow: function() {
                    var t = this.getVideoStorage();
                    console.log("onShow--getVideoStorage", t), this.needWatchVideo = !t;
                },
                beforeDestroy: function() {
                    this.clearTimer(), this.clearVideoStorage();
                },
                methods: {
                    onShareAppMessage: function(t) {
                        var e = "/subPages/huarongdao/huarongdao", n = "?column=".concat(this.column), o = this.column;
                        return "button" === t.from ? (console.log(t.target), this.showModal = !1, {
                            title: "".concat(o, " x ").concat(o, " 数字华容道，欢迎来挑战！"),
                            path: e + n
                        }) : {
                            title: "".concat(o, " x ").concat(o, " 数字华容道，欢迎来挑战！"),
                            path: e + n
                        };
                    },
                    closeModal: function() {
                        this.showModal = !1, this.clearSteps();
                    },
                    beginGame: function(t) {
                        console.log("beginGame--column", t), this.clearSteps(), this.startTimer(), this.column = t, 
                        this.showSelectModal = !1, this.list = this.generateItem(t * t, t), this.correctList = this.generateItem(t * t, t), 
                        this.list = this.randomSort(this.list), console.log("this.list", this.list);
                    },
                    emptyBack: function(t, e) {
                        var n = this, o = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? s(Object(n), !0).forEach(function(e) {
                                    (0, a.default)(t, e, n[e]);
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                });
                            }
                            return t;
                        }({}, e), i = (this.column - 1) * this.boxWidth, c = (this.column - 1) * this.boxHeight;
                        console.log("initPos", o);
                        for (var u = 2 * (this.column - 1), h = 0; h < u; h++) if (o.x < i) !function() {
                            var e = n.moveRight(o.x, o.y), i = (0, r.default)(e, 2), a = i[0], s = i[1], c = t.findIndex(function(t) {
                                return t.x == a && t.y == s;
                            }), u = t[c].x, h = t[c].y;
                            t[c].x = o.x, t[c].y = o.y, o.x = u, o.y = h, console.log("initPos111", o);
                        }(); else {
                            if (!(o.y < c)) {
                                console.log("已经归位", h);
                                break;
                            }
                            !function() {
                                var e = n.moveBottom(o.x, o.y), i = (0, r.default)(e, 2), a = i[0], s = i[1], c = t.findIndex(function(t) {
                                    return t.x == a && t.y == s;
                                }), u = t[c].x, h = t[c].y;
                                t[c].x = o.x, t[c].y = o.y, o.x = u, o.y = h, console.log("initPos222", o);
                            }();
                        }
                        return t;
                    },
                    randomSort: function(e) {
                        for (var n = e[e.length - 1], o = {
                            x: n.x + this.boxWidth,
                            y: n.y,
                            idx: e.length
                        }, i = 0; i < 1e3; i++) for (var a = t.$u.randomArray([ 0, 1, 2, 3 ]), s = 0, c = a.length; s < c; s++) {
                            var u = a[s];
                            if (0 == u) {
                                var h = this.moveLeft(o.x, o.y);
                                if (h && "break" === function() {
                                    var t = (0, r.default)(h, 2), n = t[0], i = t[1], a = e.findIndex(function(t) {
                                        return t.x == n && t.y == i;
                                    }), s = e[a].x, c = e[a].y;
                                    return e[a].x = o.x, e[a].y = o.y, o.x = s, o.y = c, o.idx = a, "break";
                                }()) break;
                            } else if (1 == u) {
                                var l = this.moveTop(o.x, o.y);
                                if (l && "break" === function() {
                                    var t = (0, r.default)(l, 2), n = t[0], i = t[1], a = e.findIndex(function(t) {
                                        return t.x == n && t.y == i;
                                    }), s = e[a].x, c = e[a].y;
                                    return e[a].x = o.x, e[a].y = o.y, o.x = s, o.y = c, o.idx = a, "break";
                                }()) break;
                            } else if (2 == u) {
                                var d = this.moveRight(o.x, o.y);
                                if (d && "break" === function() {
                                    var t = (0, r.default)(d, 2), n = t[0], i = t[1], a = e.findIndex(function(t) {
                                        return t.x == n && t.y == i;
                                    }), s = e[a].x, c = e[a].y;
                                    return e[a].x = o.x, e[a].y = o.y, o.x = s, o.y = c, o.idx = a, "break";
                                }()) break;
                            } else if (3 == u) {
                                var f = this.moveBottom(o.x, o.y);
                                if (f && "break" === function() {
                                    var t = (0, r.default)(f, 2), n = t[0], i = t[1], a = e.findIndex(function(t) {
                                        return t.x == n && t.y == i;
                                    }), s = e[a].x, c = e[a].y;
                                    return e[a].x = o.x, e[a].y = o.y, o.x = s, o.y = c, o.idx = a, "break";
                                }()) break;
                            }
                        }
                        return this.list = this.emptyBack(this.list, o), e;
                    },
                    moveLeft: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.boxWidth;
                        return t - n >= 0 && [ t - n, e ];
                    },
                    moveRight: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.boxWidth, o = (this.column - 1) * this.boxWidth;
                        return t + n <= o && [ t + n, e ];
                    },
                    moveTop: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.boxHeight;
                        return e - n >= 0 && [ t, e - n ];
                    },
                    moveBottom: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.boxHeight, o = (this.column - 1) * this.boxHeight;
                        return e + n <= o && [ t, e + n ];
                    },
                    again: function() {
                        this.showModal = !1, this.beginGame(this.column);
                    },
                    tap: function(t, e) {},
                    autoMove: function(t, e) {
                        for (var n = this, o = (this.column - 1) * this.boxWidth, i = [ [ t.x + this.boxWidth, t.y ], [ t.x - this.boxWidth, t.y ], [ t.x, t.y + this.boxWidth ], [ t.x, t.y - this.boxWidth ] ], a = function(a) {
                            var s = (0, r.default)(i[a], 2), c = s[0], u = s[1];
                            if (c < 0 ? c = 0 : c > o && (c = o), u < 0 ? u = 0 : u > o && (u = o), -1 == n.list.findIndex(function(t) {
                                return t.x == c && t.y == u;
                            })) return t.x = c, t.y = u, n.list.splice(e, 1, t), n.steps++, n.checkResult2(n.list) && (n.showModal = !0, 
                            n.clearTimer()), "break";
                        }, s = 0; s < i.length && "break" !== a(s); s++) ;
                    },
                    checkResult2: function(t) {
                        var e = !0;
                        return this.correctList.some(function(n, o) {
                            if (n.number != t[o].number || n.x != t[o].x || n.y != t[o].y) return e = !1, !0;
                            e = !0;
                        }), e;
                    },
                    checkResult: function(t) {
                        var e = (0, i.default)(t), n = !0, o = this.boxWidth * (this.column - 1);
                        if (console.log("lastPos", o), e.some(function(t) {
                            if (t.x == o && t.y == o) return n = !1, !0;
                        }), !n) return !1;
                        e.sort(function(t, e) {
                            return t.index - e.index;
                        });
                        for (var r = 1, a = e.length; r < a; r++) {
                            var s = e[r - 1], c = e[r];
                            if (s.y == c.y && c.x - s.x != this.boxWidth) return !1;
                        }
                        return !0;
                    },
                    onChange: function(t) {},
                    htouchmove: function(t) {
                        console.log("htouchmove", t);
                    },
                    start: function(t, e, n) {
                        this.startData.clientX = t.changedTouches[0].clientX, this.startData.clientY = t.changedTouches[0].clientY, 
                        this.curIdx = n, this.curItem = e;
                    },
                    end: function(t, e, n) {
                        this.autoMove(e, n), this.moveX = 0, this.moveY = 0;
                    },
                    cancel: function() {
                        this.moveX = 0, this.moveY = 0;
                    },
                    move: function(t) {
                        var e = t.touches[0];
                        this.touch = e;
                        var n = e.clientX - this.startData.clientX;
                        e.clientX < this.startData.clientX && (n < -50 && (n = -50), this.moveX = n), e.clientX > this.startData.clientX && (0 == this.moveX ? n = 0 : n > 50 && (n = 50), 
                        this.moveX = n), e.clientY < this.startData.clientY && (n < -50 && (n = -50), this.moveY = n), 
                        e.clientY > this.startData.clientY && (0 == this.moveY ? n = 0 : (n > 50 && (n = 50), 
                        this.moveY = n));
                    },
                    vtouchmove: function(t) {
                        console.log("vtouchmove", t);
                    },
                    generateItem: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 9, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
                        switch (this.column = +e, +e) {
                          case 3:
                            this.boxWidth = 180, this.boxHeight = 180;
                            break;

                          case 4:
                            this.boxWidth = 160, this.boxHeight = 160;
                            break;

                          case 5:
                            this.boxWidth = 140, this.boxHeight = 140;
                            break;

                          case 6:
                            this.boxWidth = 110, this.boxHeight = 110;
                            break;

                          case 7:
                            this.boxWidth = 100, this.boxHeight = 100;
                            break;

                          case 8:
                            this.boxWidth = 85, this.boxHeight = 85;
                        }
                        var n = Array(t - 1).fill(1).map(function(t, e) {
                            return e;
                        }), o = 0, i = 0, r = o, a = i, s = this.boxWidth, c = 0, u = s;
                        return n.map(function(t, n) {
                            return r = n > 0 ? r + s + c : o, n > 0 && n % e == 0 && (a += u, r = o), {
                                number: n + 1,
                                x: r,
                                y: a
                            };
                        });
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
                        this.needWatchVideo = !n, u && this.needWatchVideo ? u.show().catch(function() {
                            u.load().then(function() {
                                return u.show();
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
                        t.switchTab({
                            url: "../../pages/base/index"
                        });
                    },
                    tapBox: function(t) {
                        this.isCalc || (this.curIdx = t, this.showKeyBoard = !0);
                    },
                    submit: function() {
                        this.clearTimer(), this.showKeyBoard = !1, this.isCalc = !0;
                    },
                    randomNum: function(t, e) {
                        return parseInt(Math.random() * (e - t)) + t;
                    }
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    },
    "13b0": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("07f2"), i = n.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    },
    "13df": function(t, e, n) {
        "use strict";
        (function(t) {
            var e = n("4ea4");
            n("18e6"), n("33db"), e(n("66fd"));
            var o = e(n("960d"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default);
        }).call(this, n("543d").createPage);
    },
    4127: function(t, e, n) {
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
            uPopup: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-popup/u-popup") ]).then(n.bind(null, "0831"));
            },
            uModal: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-modal/u-modal") ]).then(n.bind(null, "672f"));
            }
        }, i = function() {
            var t = this;
            t.$createElement, t._self._c, t._isMounted || (t.e0 = function(e) {
                t.showSelectModal = !0;
            }, t.e1 = function(e, n, o) {
                for (var i = [], r = arguments.length - 3; r-- > 0; ) i[r] = arguments[r + 3];
                var a = i[i.length - 1].currentTarget.dataset, s = a.eventParams || a["event-params"];
                return n = s.item, o = s.idx, t.start(e, n, o);
            }, t.e2 = function(e, n, o) {
                for (var i = [], r = arguments.length - 3; r-- > 0; ) i[r] = arguments[r + 3];
                var a = i[i.length - 1].currentTarget.dataset, s = a.eventParams || a["event-params"];
                return n = s.item, o = s.idx, t.end(e, n, o);
            }, t.e3 = function(e, n, o) {
                for (var i = [], r = arguments.length - 3; r-- > 0; ) i[r] = arguments[r + 3];
                var a = i[i.length - 1].currentTarget.dataset, s = a.eventParams || a["event-params"];
                return n = s.item, o = s.idx, t.move(e, n, o);
            }, t.e4 = function(e, n, o) {
                for (var i = [], r = arguments.length - 3; r-- > 0; ) i[r] = arguments[r + 3];
                var a = i[i.length - 1].currentTarget.dataset, s = a.eventParams || a["event-params"];
                return n = s.item, o = s.idx, t.cancel(e, n, o);
            }, t.e5 = function(e) {
                t.showAnswerModal = !0;
            }, t.e6 = function(e) {
                t.showAnswerModal = !1;
            }, t.e7 = function(e) {
                t.showModal = !1;
            }, t.e8 = function(e) {
                t.showModal = !1;
            }, t.e9 = function(e) {
                t.showSelectModal = !1;
            }, t.e10 = function(e) {
                t.showSelectModal = !1;
            });
        }, r = [];
    },
    "837b": function(t, e, n) {},
    "960d": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("4127"), i = n("13b0");
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n("00ef");
        var a = n("f0c5"), s = Object(a.a)(i.default, o.b, o.c, !1, null, "3adea813", null, !1, o.a, void 0);
        e.default = s.exports;
    }
}, [ [ "13df", "common/runtime", "common/vendor" ] ] ]);