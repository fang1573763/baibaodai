var t = wx.createCanvasContext("myCanvas");

Page({
    data: {
        ldata: !0,
        fontSize: [ {
            name: "equal",
            value: "同等"
        }, {
            name: "gradually",
            value: "渐大",
            checked: "true"
        } ],
        canvasImg: "",
        isShowMask: !1,
        isBack: !1,
        isShowSave: !1,
        bColors: [ {
            color: "black",
            title: "黑色"
        }, {
            color: "red",
            title: "红色"
        }, {
            color: "yellow",
            title: "黄色"
        }, {
            color: "blue",
            title: "蓝色"
        }, {
            color: "green",
            title: "绿色"
        }, {
            color: "white",
            title: "白色",
            checked: !0
        } ],
        fontColors: [ {
            color: "black",
            title: "黑色",
            checked: !0
        }, {
            color: "red",
            title: "红色"
        }, {
            color: "yellow",
            title: "黄色"
        }, {
            color: "blue",
            title: "蓝色"
        }, {
            color: "green",
            title: "绿色"
        }, {
            color: "white",
            title: "白色"
        } ],
        fontInfo: {
            fontSize: "gradually",
            background: {
                color: "white",
                title: "白色"
            },
            fontColor: {
                color: "black",
                title: "黑色"
            }
        },
        content: ""
    },
    onLoad: function(a) {
        var e = 1;
        this.rnd(2, 10, function(t) {
            e = t;
        });
        var that = this;
      if(wx.getStorageSync("adlist")){
          that.setData({
            appConfig: wx.getStorageSync("adlist")
          })
          that.showinte();
        }else{
     
       };
      },
      showinte:function(){
        var that = this;
        let InterstitialAd;
        if (that.data.appConfig.ad.wxinter) {
          if (wx.createInterstitialAd) {
            InterstitialAd = wx.createInterstitialAd({
              adUnitId: that.data.appConfig.ad.wxinter
            })
            InterstitialAd.onLoad(() => {})
            InterstitialAd.offClose();
            InterstitialAd.offError();
            InterstitialAd.onError((err) => {})
            InterstitialAd.onClose(() => {})
          }
          // 在适合的场景显示插屏广告
          if (InterstitialAd) {
            if (that.data.appConfig.ad.insetgp == 1) {
              that.inadset = setInterval(() => {
                InterstitialAd.show().catch((err) => {
                  console.error(err)
                })
              }, that.data.appConfig.ad.wxinsettime*1000)
            } else {
              setTimeout(() => {
                InterstitialAd.show().catch((err) => {
                  console.error(err)
                })
              },  that.data.appConfig.ad.wxinsettime*1000)
            }
          }
        } 
      },
    radioChange: function(t) {
        for (var e = t.detail.value, o = this.data.fontSize, a = 0, n = o.length; a < n; a++) if (o[a].name == e) {
            o[a].checked = !0;
            var i = o[a].name;
        } else o[a].checked = !1;
        this.setData({
            fontSize: o,
            "fontInfo.fontSize": i
        });
    },
    showMask: function(t) {
        var e = "true" == t.currentTarget.dataset.isback, o = this.data.isShowMask;
        this.setData({
            isShowMask: !o,
            isBack: e
        });
    },
    changeColor: function(t) {
        for (var e = t.currentTarget.dataset.colortype, o = t.currentTarget.dataset.index, a = this.data.isShowMask, n = "bColors" == e ? this.data.bColors : this.data.fontColors, i = 0, s = n.length; i < s; i++) n[i].checked = i == o;
        "bColors" == e ? (this.setData({
            bColors: n,
            isShowMask: !a,
            "fontInfo.background": n[o]
        }), this.transformImg()) : (this.setData({
            fontColors: n,
            isShowMask: !a,
            "fontInfo.fontColor": n[o]
        }), this.transformImg());
    },
    clearInput: function() {
        this.data.current = null,
         this.setData({
            content: ""
        });
    },
    textInput: function(t) {
        var e = t.detail.value;

        this.setData({
            content: e
        });
    },
    transformImg: function(t) {
        var e = this.data.content;
        var that=this;
        wx.request({
            url: getApp().globalData.appurl + 'SensitiveProcessingInfo/isSensitive',
            method: "POST",
            data: {
                info:e,
                appid: wx.getAccountInfoSync().miniProgram.appId
            },
            header: {
                "content-type": "application/json"
            },
            success: function (f) {
                if (f.data.code == 200 && f.data.resultStatus == false ) {
                    if ("" != e) {
                        console.log(e);
                        for (var o = [], a = 0, n = e.length; a < n; a++) o.push(e.charAt(a));
                        that.drawImg(o);
                    } else wx.showToast({
                        title: "请输入内容"
                    });
                }else{
                    that. clearInput()
                    wx.showModal({
                        title: f.data.data,
                        icon: "none",
                        duration: 800
                    }); 
                }
            }
        })
        
    },
    drawImg: function(e) {
        var o = this.data.fontInfo, a = o.fontSize;
        var t = wx.createCanvasContext("myCanvas",this);
        if (t.clearRect(0, 0, 525, 290), t.setFillStyle(o.background.color), t.fillRect(0, 0, 525, 290), 
        t.draw(), t.setTextAlign("left"), t.setTextBaseline("top"), t.setFillStyle(o.fontColor.color), 
        "gradually" == a) for (var n = 0, i = e.length; n < i; n++) s = n * (2 * n + 18), 
        t.setFontSize(4 * n + 18), t.fillText(e[n], s, 29.5), t.fillText(e[n], s - .5, 30); else if ("equal" == a) for (var n = 0, i = e.length; n < i; n++) {
            var s = 37 * n;
            t.setFontSize(37), t.fillText(e[n], s, 45);
        }
        t.draw(!0);
        console.log(333)
        var l = this;
        setTimeout(function() {
            l.saveImg();
        }, 200);
    },
    saveImg: function() {
        var t = this;
        wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            canvasId: "myCanvas",
            success: function(e) {
              console.log(e.tempFilePath)
                t.setData({
                    canvasImg: e.tempFilePath
                });
            }
        });
    },
    downimg: function() {
        if ("" != this.data.content) {
            var t = this;
            wx.getSetting({
                success: function(e) {
                    console.log(e), e.authSetting["scope.writePhotosAlbum"] ? t.saveToPhone() : wx.authorize({
                        scope: "scope.writePhotosAlbum",
                        success: function() {
                            t.saveToPhone();
                        },
                        fail: function(e) {
                            t.setData({
                                ldata: !1
                            });
                        }
                    });
                }
            });
        } else wx.showToast({
            title: "请输入内容"
        });
    },
    saveToPhone: function(t) {
        wx.showLoading({
            title: "正在保存..."
        });
        var e = this.data.canvasImg;
        wx.saveImageToPhotosAlbum({
            filePath: e,
            success: function(t) {
                wx.hideLoading(), wx.showToast({
                    title: "保存成功"
                });
            }
        });
    },
    clearContent: function() {
        this.setData({
            content: ""
        });
    },
    shoucang: function() {},
    hotJumpPageID: function(t) {
        console.log(t);
        var e = t.detail.formId;
        "" != t.detail.formId && a.formAdd(e, function(t) {});
    },
    rnd: function(t, e, o) {
        var a = Math.floor(Math.random() * (e - t + 1) + t);
        return o(a), a;
    },
    back: function() {
        getCurrentPages().length > 1 ? wx.navigateBack({}) : wx.reLaunch({
            url: "/pages/index/index"
        });
    },
    handler: function(t) {
        var e = this;
        t.detail.authSetting["scope.writePhotosAlbum"] ? e.setData({
            ldata: !0
        }) : e.setData({
            ldata: !1
        });
    },
    onShareTimeline: function() {
        return {
            title: "尖叫文字生成工具",
        };
    },
    onShareAppMessage: function() {
        return {
            title: "尖叫文字生成工具",
            path: "/pagesA/pages/screaming/screaming",
            imageUrl:""
       
        };
    }
});