Page({
    data: {
        width: 300,
        height: 300,
        outWidth: 200,
        outHeight: 200
    },
    onLoad: function(a) {
        this.ctx = wx.createCanvasContext("canvasIn"), this.outCtx = wx.createCanvasContext("canvasOut");
        var a = wx.getSystemInfoSync(), o = Math.min(a.windowWidth, a.windowHeight);
        this.setData({
            width: o - 30,
            height: o
        }), this.outInWidthRatio = 1, this.outInHeightRatio = 1, this.defaultOptions = {}, 
        this.options = Object.assign({}, this.defaultOptions), this.x = 0, this.y = 0;
        var that = this;
       getApp().showADlist().then(function() {
          var e = wx.getStorageSync("adlist");
          
          that.setData({
            appConfig: e
        })
          that.showinte();
          that.ad_set();
        })
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
      ad_set: function () {
        var e = this;
        wx.createRewardedVideoAd && ((a = wx.createRewardedVideoAd({
          adUnitId: e.data.appConfig.ad.wxreward
        })).onLoad(function () {
          console.log("激励广告拉取成功");
        }), a.onError(function (e) {}), a.onClose(function (a) {
          a && a.isEnded || void 0 === a ? (console.log("发放奖励"), e.saveTap()) : wx.showModal({
            title: "提示",
            content: "Sorry...您需要看完视频才能保存～",
            showCancel: !1,
            confirmText: "好的"
          });
        }));
      },
    btnSave: function () {
        var t = this;
        console.log("打开激励视频"), wx.showModal({
          title: "提示",
          //content: "观看视频广告即可保存",
          content: t.data.appConfig.ad.wxadysz,
          success: function (e) {
            e.confirm ? (console.log("用户点击确定"),
              a && a.show().catch(function () {
                a.load().then(function () { //, a
                  return a.show();
                }).catch(function (e) {
                  t.saveTap()
                  console.log("激励视频 广告显示失败");
                });
              })
            ) : e.cancel && wx.showToast({
                title: "您放弃了保存图片",
                icon: "none"
            });
          }
        });
      },
    upLoadImage: function() {
        var t = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album" ],
            success: function(a) {
                var o = a.tempFilePaths[0];
                wx.showLoading({
                    title: '安全检测中...',
                  });
                wx.uploadFile({
                    url: getApp().globalData.appurl+'SensitiveProcessingInfo/pictureInvolvingYellowCheck',
                    formData: {
                        appid: wx.getAccountInfoSync().miniProgram.appId
                    },
                    filePath: o,
                    name: "file",
                     header: {
                        "content-type": "multipart/form-data"
                    },
                  
                    success: function (res) {
                        wx.hideLoading()
                        const data = JSON.parse(res.data)
                        console.log(o)
                        if (data.code == 200 && data.resultStatus == false) {
            
                        wx.showToast({
                          title: "图片检测完成",
                          icon: "none",
                          duration: 1500
                        });
                        
                        wx.getImageInfo({
                            src: o,
                            success: function(a) {
                                var o = a.path, n = a.width, i = a.height;
                                t.setData({
                                    outWidth: n,
                                    outHeight: i
                                }, function() {
                                    console.log("===> ", o, n, i);
                                    var a = t.data.height, e = t.data.height * n / i;
                                    n > i && (e = t.data.width, a = t.data.width * i / n), t.outInWidthRatio = n / e, 
                                    t.outInHeightRatio = i / a, t.x = (t.data.width - e) / 2, t.y = (t.data.height - a) / 2, 
                                    t.ctx.drawImage(o, 0, 0, n, i, t.x, t.y, e, a), t.ctx.draw(), t.outCtx.drawImage(o, 0, 0, n, i, 0, 0, t.data.outWidth, t.data.outHeight), 
                                    t.outCtx.draw();
                                });
                            }
                        });
                    }else{
                        wx.showModal({
                            title:'提示',
                            content:data.data,
                            success:()=>{
            
                            }
                          })
                    }
                    },
                    fail: function (err) {
                      wx.showToast({
                        title: "上传失败",
                        icon: "none",
                        duration: 2000
                      })
                    },
                    complete: function (result) {
                      console.log(result.errMsg)
                    }
                  })
               
            }
        }, this);
    },
    canvasTouch: function(t) {
        var a = this;
        console.log(t), t.type, t.target;
        for (var o = t.touches, n = 0; n < o.length; ++n) !function(t) {
            var n = o[t];
            wx.canvasGetImageData({
                canvasId: "canvasIn",
                x: n.x,
                y: n.y,
                width: 1,
                height: 1,
                success: function(t) {
                    for (var o = t.data, i = [], e = 0; e < 256; ++e) for (var s = 0; s < o.length; ++s) i.push(o[s]);
                    var h = new Uint8ClampedArray(i);
                    wx.canvasPutImageData({
                        canvasId: "canvasIn",
                        x: Math.max(n.x - 8, 0),
                        y: Math.max(n.y - 8, 0),
                        width: 16,
                        height: 16,
                        data: h,
                        success: function(t) {}
                    }), i = [];
                    for (var c = Math.floor(16 * a.outInWidthRatio), u = Math.floor(16 * a.outInHeightRatio), d = 0; d < c * u; ++d) for (var g = 0; g < o.length; ++g) i.push(o[g]);
                    h = new Uint8ClampedArray(i), wx.canvasPutImageData({
                        canvasId: "canvasOut",
                        x: Math.floor(Math.max(n.x - a.x - 8, 0) * a.outInWidthRatio),
                        y: Math.floor(Math.max(n.y - a.y - 8, 0) * a.outInHeightRatio),
                        width: c,
                        height: u,
                        data: h,
                        success: function(t) {}
                    });
                }
            }, a);
        }(n);
    },
    saveTap: function() {
        wx.showLoading({
            title: "图片保存中",
            mask: !0
        }), wx.canvasToTempFilePath({
            canvasId: "canvasOut",
            quality: 1,
            success: function(t) {
              console.log(t.tempFilePath)  
                wx.saveImageToPhotosAlbum({
                    filePath: t.tempFilePath,
                    success: function(t) {
                        wx.hideLoading({}), wx.showToast({
                            title: "已保存到相册",
                            icon: "success",
                            duration: 2e3
                        });
                    },
                    fail: function(t) {
                        console.log("fail ", t);
                    }
                });
            },
            fail: function(t) {
                console.log("fail: ", t);
            }
        }, this);
    },
    moneyJump: function(t) {
        console.log(t), wx.navigateTo({
            url: "../money/index"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "图片加马赛克",
            path: "/pagesC/pages/indexmsk/index"
        };
    }
});