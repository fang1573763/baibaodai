var t
Page({
    data: {},
    onLoad: function(a) {
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
    bindKeyInput: function(t) {
        this.data.current = t.detail.value;
    },
    clearInput: function() {
        this.data.current = null, this.setData({
            scrollTop: 0,
            textareaValue: ""
        });
    },
    changeText: function (a) {
        var data=this.data.current;
        var t=a;
        var that=this;
        wx.request({
            url: getApp().globalData.appurl + 'SensitiveProcessingInfo/isSensitive',
            method: "POST",
            data: {
                info:data,
                appid: wx.getAccountInfoSync().miniProgram.appId
            },
            header: {
                "content-type": "application/json"
            },
            success: function (f) {
                console.log(f.data.code)
                if (f.data.code == 200 && f.data.resultStatus == false ) {
                    {
                        if (data) 
                        switch (t.target.id) {
                           
                            case "lhz":
                              for (var a = String.fromCharCode(1160), e = "", r = 0, h = (s = data).length; r < h; r++) e += s.charAt(r) + a;
                             that.setData({
                                  textareaValue: e
                              }), that.CopyLink();
                              break;
                        
                            case "jhw":
                              for (a = String.fromCharCode(1161), e = "", r = 0, h = (s = data).length; r < h; r++) e += s.charAt(r) + a;
                             that.setData({
                                  textareaValue: e
                              }), that.CopyLink();
                              break;
                        
                            case "tmw1":
                              for (a = "ζั͡ ", e = "", r = 0, h = (s = data).length; r < h; r++) e += a + s.charAt(r);
                             that.setData({
                                  textareaValue: e + "ζั͡✾"
                              }), that.CopyLink();
                              break;
                        
                            case "tmw2":
                              for (a = "ζั͡ ", e = "", r = 0, h = (s = data).length; r < h; r++) e += a + s.charAt(r);
                             that.setData({
                                  textareaValue: e + "ζั͡✿"
                              }), that.CopyLink();
                              break;
                        
                            case "tmw3":
                              for (a = "ζั͡ ", e = "", r = 0, h = (s = data).length; r < h; r++) e += a + s.charAt(r);
                             that.setData({
                                  textareaValue: e + "ζั͡❀"
                              }), that.CopyLink();
                              break;
                        
                            case "hbw":
                              for (a = String.fromCharCode(2954), e = "", r = 0, h = (s = data).length; r < h; r++) e += s.charAt(r) + a;
                             that.setData({
                                  textareaValue: e
                              }), that.CopyLink();
                              break;
                        
                            case "ctw":
                              for (a = String.fromCharCode(3572), e = "", r = 0, h = (s = data).length; r < h; r++) e += s.charAt(r) + a;
                             that.setData({
                                  textareaValue: e
                              }), that.CopyLink();
                              break;
                        
                            case "scx":
                              a = "̶", e = "", r = 0;
                              var s = data;
                              for (h = (s = data).length; r < h; r++) e += s.charAt(r) + a;
                             that.setData({
                                  textareaValue: e
                              }), that.CopyLink();
                              break;
                        
                            case "xhx":
                              for (a = "꯭", e = "", r = 0, h = (s = data).length; r < h; r++) e += s.charAt(r) + a;
                             that.setData({
                                  textareaValue: "꯭" + e
                              }), that.CopyLink();
                              break;
                        
                            case "kaw":
                              for (a = String.fromCharCode(4326), e = "", r = 0, h = (s = data).length; r < h; r++) e += a + s.charAt(r);
                             that.setData({
                                  textareaValue: e + a
                              }), that.CopyLink();
                              break;
                        
                            case "pgyw":
                              for (a = "ོ", e = "", r = 0, h = (s = data).length; r < h; r++) e += s.charAt(r) + a;
                             that.setData({
                                  textareaValue: "៚" + e + "ོ ͜✿ ҉҉҉҉҉"
                              }), that.CopyLink();
                              break;
                        
                            case "blw":
                              for (a = String.fromCharCode(794), e = "", r = 0, h = (s = data).length; r < h; r++) e += s.charAt(r) + a;
                             that.setData({
                                  textareaValue: e
                              }), that.CopyLink();
                              break;
                        
                            case "myw":
                              for (a = "็้", e = "", r = 0, h = (s = data).length; r < h; r++) e += s.charAt(r) + a;
                             that.setData({
                                  textareaValue: e
                              }), that.CopyLink();
                              break;
                        
                            case "sbw":
                              for (a = String.fromCharCode(860), e = "", r = 0, h = (s = data).length; r < h; r++) e += s.charAt(r) + a;
                             that.setData({
                                  textareaValue: e
                              }), that.CopyLink();
                              break;
                        
                            case "htw":
                              var i = String.fromCharCode(862), n = String.fromCharCode(863), o = "";
                              for (r = 0, h = (c = data).length; r < h; r++) o += i + c.charAt(r) + n;
                             that.setData({
                                  textareaValue: o
                              }), that.CopyLink();
                              break;
                        
                            case "shtw":
                              i = String.fromCharCode(831), n = String.fromCharCode(839), o = "";
                              var c = data;
                              for (r = 0, h = c.length; r < h; r++) o += i + c.charAt(r) + n;
                             that.setData({
                                  textareaValue: o
                              }), that.CopyLink();
                              break;
                        
                            case "fnw":
                              for (a = "ོ", e = "", r = 0, h = (s = data).length; r < h; r++) e += s.charAt(r) + a;
                             that.setData({
                                  textareaValue: e
                              }), that.CopyLink();
                              break;
                        
                            case "yfw":
                              for (a = "♫", e = "", r = 0, h = (s = data).length; r < h; r++) e += s.charAt(r) + a;
                             that.setData({
                                  textareaValue: "∮" + e
                              }), that.CopyLink();
                              break;
                        
                            case "mlw":
                              for (a = "ℳℓ", e = "", r = 0, h = (s = data).length; r < h; r++) e += a + s.charAt(r);
                             that.setData({
                                  textareaValue: e
                              }), that.CopyLink();
                              break;
                        
                            case "mtz":
                              for (a = "ืุ", e = "", r = 0, h = (s = data).length; r < h; r++) e += s.charAt(r) + a;
                             that.setData({
                                  textareaValue: e
                              }), that.CopyLink();
                              break;
                        
                            default:
                             that.setData({});
                          }   else 
                            wx.showToast({
                            title: "转换内容不能为空",
                            icon: "none",
                            duration: 800
                        });
                        
                    }
                } else{
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
    changeText1: function(t) {
        if (this.data.current) switch (t.target.id) {
          case "lhz":
            for (var a = String.fromCharCode(1160), e = "", r = 0, h = (s = this.data.current).length; r < h; r++) e += s.charAt(r) + a;
            this.setData({
                textareaValue: e
            }), this.CopyLink();
            break;

          case "jhw":
            for (a = String.fromCharCode(1161), e = "", r = 0, h = (s = this.data.current).length; r < h; r++) e += s.charAt(r) + a;
            this.setData({
                textareaValue: e
            }), this.CopyLink();
            break;

          case "tmw1":
            for (a = "ζั͡ ", e = "", r = 0, h = (s = this.data.current).length; r < h; r++) e += a + s.charAt(r);
            this.setData({
                textareaValue: e + "ζั͡✾"
            }), this.CopyLink();
            break;

          case "tmw2":
            for (a = "ζั͡ ", e = "", r = 0, h = (s = this.data.current).length; r < h; r++) e += a + s.charAt(r);
            this.setData({
                textareaValue: e + "ζั͡✿"
            }), this.CopyLink();
            break;

          case "tmw3":
            for (a = "ζั͡ ", e = "", r = 0, h = (s = this.data.current).length; r < h; r++) e += a + s.charAt(r);
            this.setData({
                textareaValue: e + "ζั͡❀"
            }), this.CopyLink();
            break;

          case "hbw":
            for (a = String.fromCharCode(2954), e = "", r = 0, h = (s = this.data.current).length; r < h; r++) e += s.charAt(r) + a;
            this.setData({
                textareaValue: e
            }), this.CopyLink();
            break;

          case "ctw":
            for (a = String.fromCharCode(3572), e = "", r = 0, h = (s = this.data.current).length; r < h; r++) e += s.charAt(r) + a;
            this.setData({
                textareaValue: e
            }), this.CopyLink();
            break;

          case "scx":
            a = "̶", e = "", r = 0;
            var s = this.data.current;
            for (h = (s = this.data.current).length; r < h; r++) e += s.charAt(r) + a;
            this.setData({
                textareaValue: e
            }), this.CopyLink();
            break;

          case "xhx":
            for (a = "꯭", e = "", r = 0, h = (s = this.data.current).length; r < h; r++) e += s.charAt(r) + a;
            this.setData({
                textareaValue: "꯭" + e
            }), this.CopyLink();
            break;

          case "kaw":
            for (a = String.fromCharCode(4326), e = "", r = 0, h = (s = this.data.current).length; r < h; r++) e += a + s.charAt(r);
            this.setData({
                textareaValue: e + a
            }), this.CopyLink();
            break;

          case "pgyw":
            for (a = "ོ", e = "", r = 0, h = (s = this.data.current).length; r < h; r++) e += s.charAt(r) + a;
            this.setData({
                textareaValue: "៚" + e + "ོ ͜✿ ҉҉҉҉҉"
            }), this.CopyLink();
            break;

          case "blw":
            for (a = String.fromCharCode(794), e = "", r = 0, h = (s = this.data.current).length; r < h; r++) e += s.charAt(r) + a;
            this.setData({
                textareaValue: e
            }), this.CopyLink();
            break;

          case "myw":
            for (a = "็้", e = "", r = 0, h = (s = this.data.current).length; r < h; r++) e += s.charAt(r) + a;
            this.setData({
                textareaValue: e
            }), this.CopyLink();
            break;

          case "sbw":
            for (a = String.fromCharCode(860), e = "", r = 0, h = (s = this.data.current).length; r < h; r++) e += s.charAt(r) + a;
            this.setData({
                textareaValue: e
            }), this.CopyLink();
            break;

          case "htw":
            var i = String.fromCharCode(862), n = String.fromCharCode(863), o = "";
            for (r = 0, h = (c = this.data.current).length; r < h; r++) o += i + c.charAt(r) + n;
            this.setData({
                textareaValue: o
            }), this.CopyLink();
            break;

          case "shtw":
            i = String.fromCharCode(831), n = String.fromCharCode(839), o = "";
            var c = this.data.current;
            for (r = 0, h = c.length; r < h; r++) o += i + c.charAt(r) + n;
            this.setData({
                textareaValue: o
            }), this.CopyLink();
            break;

          case "fnw":
            for (a = "ོ", e = "", r = 0, h = (s = this.data.current).length; r < h; r++) e += s.charAt(r) + a;
            this.setData({
                textareaValue: e
            }), this.CopyLink();
            break;

          case "yfw":
            for (a = "♫", e = "", r = 0, h = (s = this.data.current).length; r < h; r++) e += s.charAt(r) + a;
            this.setData({
                textareaValue: "∮" + e
            }), this.CopyLink();
            break;

          case "mlw":
            for (a = "ℳℓ", e = "", r = 0, h = (s = this.data.current).length; r < h; r++) e += a + s.charAt(r);
            this.setData({
                textareaValue: e
            }), this.CopyLink();
            break;

          case "mtz":
            for (a = "ืุ", e = "", r = 0, h = (s = this.data.current).length; r < h; r++) e += s.charAt(r) + a;
            this.setData({
                textareaValue: e
            }), this.CopyLink();
            break;

          default:
            this.setData({});
        } else wx.showToast({
            title: "转换内容不能为空",
            icon: "none",
            duration: 800
        });
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
    onShareTimeline: function() {
        return {
            title: "花式字体生成工具",
        };
    },
    onShareAppMessage: function() {

        return {
            title: "花式字体生成工具",
            path: "/pagesA/pages/typeface/typeface",
             imageUrl:""
       
        };
    }
});