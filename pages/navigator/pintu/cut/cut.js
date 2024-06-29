var t = getApp();

Page({
    data: {
        canvasInfo: {
            id: "mycanvas",
            width: 320,
            height: 568
        },
        showInfo: {
            width: 320,
            height: 568
        },
        systemInfo: {
            width: 320,
            height: 568,
            screenHeight: 0
        },
        fixedHeight: 0,
        img: "",
        isChoose: !1,
        ad: {}
    },
    onLoad: function(a) {
        var i = this;
        wx.getSystemInfo({
            success: function(t) {
                console.log(t.screenHeight), 
                i.setData({
                    "systemInfo.width": t.windowWidth,
                    "systemInfo.height": t.windowHeight,
                    "systemInfo.screenHeight": t.screenHeight
                });
            }
        })
       
        getApp().showADlist().then(function() {
          var e = wx.getStorageSync("adlist");
          console.log(e.ad.anzhuoad)
          i.setData({
            appConfig: e
        })
            i.showinte();
        
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
    imageToCanvas: function(t) {
        var e = this.data.canvasInfo, i = wx.createCanvasContext(e.id, this);
        i.drawImage(t, 0, 0, e.width, e.height), i.draw();
    },
    cutImage: function(t) {
        var e = this;
        wx.getImageInfo({
            src: t,
            success: function(i) {
                var s = i.width, a = i.height;
                wx.getSystemInfo({
                    success: function(i) {
                        e.setData({
                            "systemInfo.width": i.windowWidth,
                            "systemInfo.height": i.windowHeight,
                            "canvasInfo.width": s,
                            "canvasInfo.height": a,
                            "systemInfo.screenHeight": i.screenHeight,
                            "showInfo.width": i.windowWidth,
                            "showInfo.height": i.windowWidth / s * a
                        });
                        var n = e.data.systemInfo.height / 2, o = e.data.showInfo.height + 10;
                        console.log("fh:" + n), console.log("ch:" + o), o > n && e.setData({
                            fixedHeight: o - n
                        }), e.imageToCanvas(t);
                    }
                });
            }
        });
    },
    previewImage: function(t) {
        var e = this.data.canvasInfo, i = t.currentTarget.dataset.index;
        wx.canvasToTempFilePath({
            canvasId: e.id,
            x: i % 3 * e.width / 3,
            y: parseInt(i / 3) * e.height / 3,
            width: e.width / 3,
            height: e.height / 3,
            success: function(t) {
                console.log("成功路径： " + t.tempFilePath);
                var e = [];
                e.push(t.tempFilePath), wx.previewImage({
                    urls: e
                });
            }
        }, this);
    },
    chooseImage: function(t) {
        var e = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths[0]
                wx.showLoading({
                    title: '安全检测中...',
                  });
                  wx.uploadFile({
                    url: getApp().globalData.appurl+'SensitiveProcessingInfo/pictureInvolvingYellowCheck',
                    formData: {
                        appid: wx.getAccountInfoSync().miniProgram.appId
                    },
                    filePath: tempFilePaths,
                    name: "file",
                     header: {
                        "content-type": "multipart/form-data"
                    },
                    success: function (t) {
                        wx.hideLoading()
                        const data = JSON.parse(t.data)
                        console.log(tempFilePaths )
                        if (data.code == 200 && data.resultStatus == false) {
                        wx.showToast({
                          title: "图片检测成功",
                          icon: "none",
                          duration: 1500
                        });
                        e.setData({
                            img: tempFilePaths,
                            isChoose: !0
                        }), e.cutImage(tempFilePaths);
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
          
        });
    },
    onShareAppMessage: function(t) {
        return {
            title: "九宫格切图",
            path: "/pages/navigator/pintu/cut/cut"
        };
    },
    onShareTimeline: function(t) {
        return {
            title: "九宫格切图"
        };
    },
    saveAll: function() {
        var t = this.data.canvasInfo;
        wx.showLoading({
            title: "正在保存"
        });
        for (var e = 0; e < 9; e++) wx.canvasToTempFilePath({
            canvasId: t.id,
            x: e % 3 * t.width / 3,
            y: parseInt(e / 3) * t.height / 3,
            width: t.width / 3,
            height: t.height / 3,
            success: function(t) {
                wx.saveImageToPhotosAlbum({
                    filePath: t.tempFilePath,
                    success: function(t) {
                        wx.hideLoading({
                            complete: function(t) {
                                wx.showToast({
                                    title: "保存成功"
                                });
                            }
                        });
                    },
                    fail: function(t) {
                        console.log("err:" + t), wx.hideLoading({
                            complete: function(t) {}
                        }), wx.showToast({
                            title: "保存失败",
                            icon: "none"
                        });
                    }
                });
            }
        }, this);
    }
});