

var t = require("../../utils/api"), a = null;

Page({
    data: {
        
        analysisUrl: "",
        videoUrl: "",
        hideResult: !0,
        jxList:[],
        desc: "",
        indicatorDots:false,
        autoplay:true,
        interval:3000,
        duration: 800,
        circular:true,
        imgUrls: [
    
          {
            appid:'',
            link:'',
            url:'https://qsyxcx.jinjinyl.cn/public/uploads/question/20230226/s_63fb7435e520a.png',
     
       
     
          },
     
          {
            appid:'',
            link: '',
            url: 'https://qsyxcx.jinjinyl.cn/public/uploads/question/20230226/s_63fb7435e520a.png',
     
       
     
          },
     
       
     
        ],
    },
 
   
    onLoad: function() {
        var t = this;
        wx.request({
   
          url: getApp().globalData.ylurl + 'jx.json', 
          success: (result) => {
        
            console.log(result);
       
            this.setData({
              jxList:result.data
            })
          }
        });   
        wx.getClipboardData({
            success: function(a) {
                if (a.data && t.getURLFromString(a.data)) {
                    var i = t.getURLFromString(a.data);
                    wx.showModal({
                        title: "检测到短视频链接，是否粘贴？",
                        content: i,
                        confirmText: "确定",
                        confirmColor: "#d4237a",
                        success: function(a) {
                            a.confirm ? t.setData({
                                analysisUrl: i
                            }) : a.cancel;
                        }
                    });
                }
            }
        }), wx.createInterstitialAd && ((a = wx.createInterstitialAd({
            adUnitId: "adunit-007a18bd23c0c21f"
        })).onLoad(function() {
            a && a.show().catch(function(t) {
                console.error(t);
            });
        }), a.onError(function(t) {}), a.onClose(function() {}));
      
    },



  // 激励广告开始
  goad:function(){
    var t = this;
    wx.showModal({
      title: '提示',
      confirmText: "好的",
          confirmColor: "#d4237a",
      content: '需观看激励视频完成后可自动保存无水印视频',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          t.getAd()
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
  })
  },
  getAd:function(){
  
  var videoAd = null;
  if (wx.createRewardedVideoAd) {
    videoAd = wx.createRewardedVideoAd({
      // 替换为您的激励广告id
      adUnitId: '广告4' 
    })
    videoAd.onError(err => {})
    videoAd.onClose((status) => {
      if (status && status.isEnded || status === undefined) {
        videoAd.offClose()
        
        this.saveTap()

      } else {
        var t = this;
        wx.showModal({
          title: '观看未完成提示',
          confirmText: "继续观看",
          confirmColor: "#d4237a",
          content: '需观看完成后自动保存无水印视频',
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
              t.getAd()
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
      })


      }

    })
  }
  if (videoAd) {
    videoAd.show().catch(err => {
      // 失败重试
      videoAd.load()
        .then(() => videoAd.show())
    })
  }

    },

  // 激励广告结束

 
    analysisTap: function(a) {
        var i = this;
        let that = this;
        if (this.data.analysisUrl){
            wx.request({
              url: getApp().globalData.appurl + 'SensitiveProcessingInfo/isSensitive',
              method: "POST",
              data: {
                  info: this.data.analysisUrl,
                  appid: wx.getAccountInfoSync().miniProgram.appId
              },
              header: {
                  "content-type": "application/json"
              },
            success: function (f) {
              console.log(f.data)
              if (f.data.code == 200 && f.data.resultStatus == false)  {
                  console.log("1234567890")
                  console.log(that.data)
                  that.data.analysisUrl ? that.getURLFromString(that.data.analysisUrl) ? (wx.showLoading({
                      title: "正在去水印"
                  }), t.analysis(that.getURLFromString(that.data.analysisUrl), function(t) {
                      wx.hideLoading(), console.log(t.url), i.setData({
                          videoUrl: t.url,
                          desc: t.title,
                          hideResult: !1
                      });
                  }, function(t) {
                      wx.hideLoading(), wx.showModal({
                          title: "温馨提示",
                          content: "请联系开发者，可能接口失效~",
                          confirmText: "确定",
                          showCancel: !1,
                          confirmColor: "#d4237a"
                      });
                  })) : wx.showToast({
                      icon: "error",
                      title: "链接格式错误"
                  }) : wx.showToast({
                      icon: "error",
                      title: "链接不能为空"
                  });


              }else{
            wx.showModal({
              title: f.data.data,
              icon: "none",
              duration: 800
          }); 
          }
        }
      })
          }
        if (this.data.analysisUrl == '') {
          wx: wx.showToast({
            title: '不能为空哦',
            duration: 2000
          })
        }
       
    },
    
    inputChange: function(t) {
        this.setData({
            analysisUrl: t.detail.value
        });
    },
   
    ym: function(e) {
        wx.showToast({
            icon: "none",
            duration:5000,
            title: "请打开QQ浏览器粘贴下载原画质视频"
        });
    },
    gomore: function(t) {
        wx.navigateTo({
            url: "/pages/my/my"
        });
    },
    pasteTap: function(t) {
        var a = this;
        wx.getClipboardData({
            success: function(t) {
                a.setData({
                    analysisUrl: t.data
                });
            }
        });
    },
    clearTap: function(t) {
        this.setData({
            analysisUrl: ""
        });
    },
    save: function() {
        var t = this;
        var videoUrl = t.data.videoUrl.replace("httpss", "https")
        console.log(videoUrl);        
        // var videoUrl = videoUrl.replace("http", "https")
        var url = encodeURIComponent(videoUrl);
        console.log("urlurlurlurlurl");
        console.log(url);
        wx.showLoading({
            title: "正在加载"
        });
        const downloadTask = wx.downloadFile({
            url: t.data.jxList.down1 + url,
            success: function(t) {
                200 === t.statusCode && wx.saveVideoToPhotosAlbum({
                    filePath: t.tempFilePath,
                    success: function(t) {
                        wx.hideLoading(), wx.showToast({
                            icon: "success",
                            title: "保存成功"
                        });
                    },
                    fail: function(t) {
                        wx.hideLoading();
                    }
                });
            },
            fail: function(t) {
                wx.hideLoading(), wx.showToast({
                    icon: "error",
                    title: "请重试"
                });
            },
        });
        downloadTask.onProgressUpdate((res) => {
            wx.showLoading({
                title: "已下载" + res.progress + '%'
            });
            //console.log(res.progress)
            this.setData({
                progress: res.progress + '%'
            })
        })
    },
    saveTap: function(t) {
        var a = this;
        wx.getSetting({
            success: function(t) {
                t.authSetting["scope.writePhotosAlbum"] ? a.save() : wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function() {
                        a.save();
                    }
                });
            }
        });
    },
    copyLinkTap: function(t) {
        var a = this;
        wx.setClipboardData({
            data: a.data.videoUrl,
            success: function(t) {
                wx.showToast({
                    icon: "success",
                    title: "复制成功"
                });
            }
        });
    },
    
    copyLinkTap1: function(t) {
        var a = this;
        wx.setClipboardData({
            data: a.data.videoUrl,
            success: function(t) {
                wx.showToast({
                    icon: "none",
                    duration:5000,
                    title: "请打开QQ浏览器粘贴下载原画质视频"
                });
            }
        });
    },
    copyDescTap: function(t) {
        var a = this;
        wx.setClipboardData({
            data: a.data.desc,
            success: function(t) {
                wx.showToast({
                    icon: "success",
                    title: "复制成功"
                });
            }
        });
    },
    getURLFromString: function(t) {
        var a = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
        return a.test(t) ? t.match(a)[0] : "";
    },
    guideTap: function(t) {
        wx.navigateTo({
            url: "../../pages/guide/guide"
        });
    },
    questiopnTap: function(t) {
        wx.navigateTo({
            url: "../../pages/question/question"
        });
    },
    onShareAppMessage: function() {
        return {
            title: "这里可以免费短视频去水印下载",
            path: "pages/video/index",
            imageUrl: "https://qsyxcx.jinjinyl.cn/public/uploads/question/20230226/s_63fb63f12bbda.jpg"
        };
    },
    onShareTimeline: function() {
        return {
            title: "这里可以免费短视频去水印下载"
        };
    }
});