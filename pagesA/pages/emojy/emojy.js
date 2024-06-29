var t = require("../wxapp/zf.js"), a = require("../wxapp/bq.js");

Page({
    data: {
        textareaValue: "点击下方对应内容，完成后点我复制"

    },

    onLoad: function(y) {
        this.setData({
            zfdata: t,
            bqdata: a
        }); 
          var that = this;
          if(wx.getStorageSync("adlist")){
              that.setData({
                appConfig: wx.getStorageSync("adlist")
              })
              that.showinte();
            }else{
          getApp().showADlist().then(function() {
            var e = wx.getStorageSync("adlist");
            
            that.setData({
              appConfig: e
          })
            that.showinte();
          })
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
    CopyLink: function() {
        var t = this.data.textareaValue;
        wx.setClipboardData({
            data: t,
            success: function(t) {
                wx.showToast({
                    title: "已复制",
                    duration: 1e3
                });
            }
        });
    },
    onHide: function() {},
    clearInput: function() {
        this.data.current = null, this.setData({
            scrollTop: 0,
            textareaValue: ""
        });
    },
    onUnload: function() {},
    changeTab: function(t) {
        var a = t.target.dataset.index;
        this.setData({
            activeIndex: a
        });
    },
    swiperTab: function(t) {
        var a = t.detail.current;
        this.setData({
            activeIndex: a
        });
    },
    addText: function(t) {
        if ("点击下方对应内容，完成后点我复制" != this.data.textareaValue) {
            if (t.target.id) {
                var a = this.data.textareaValue + t.target.id;
                this.setData({
                    textareaValue: a
                });
            }
        } else if (t.target.id) {
            var e = t.target.id;
            this.setData({
                textareaValue: e
            });
        }
    },
    onShareTimeline: function() {
        return {
            title: "表情字母生成工具",
        };
    },
    onShareAppMessage: function() {
        return {
            title: "表情字母生成工具",
            path: "/pagesA/pages/emojy/emojy",
            imageUrl:""
        };
    }
});