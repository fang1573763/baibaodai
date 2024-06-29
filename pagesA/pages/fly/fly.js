Page({
    data: {
        flydata:    [ {
            class: "翅膀昵称生成",
            datalist: [ "꧁꫞꯭昵称꯭꫞꧂", "꧁༺昵称༻꧂", "꧁༺༽༾ཊ昵称ཏ༿༼༻꧂", "꧁༺ཌ༈昵称༈ད༻꧂", "༺ཌ༈昵称༈ད༻", "༺ཌༀൢ昵称ༀད༻", "༺ཌༀཉི昵称༃ༀད༻", "༺࿈昵称࿈༻", "༺❀ൢ昵称❀ൢ༻", "༺༽༾ཊ昵称ཏ༿༼༻", "༺ཌ༈昵称༈ད༻", "༺昵称༻", "࿐ཉི༗࿆昵称 ༗࿆ཉི࿐", "༺།༼࿄࿆昵称࿅࿆༽།༻", "௸྄ིོུ昵称คิดถ", "ε昵称з", "༺昵称༻", "ʚ昵称ɞ" ]
        }, {
            class: "情侣个性昵称",
            datalist: [ "じòve゛昵称℘", "じove゛昵称う", "じòぴé 昵称๓", "じòぴé 昵称kiss", "Alone°昵称ご", "℘ℳ₨、昵称๓", "ノunique丶昵称ャ", "、ฅr昵称๓`" ]
        }, {
            class: "战队公会昵称",
            datalist: [ "丿艹巅峰丨丶昵称", "丶巛全F最嗨o灬昵称", "彡kiss丿灬昵称", "广东Win丨灬昵称", "丿A名牌货灬昵称", "昵称灬家族", "丿TK丶灬丨昵称。", "丿super丶昵称灬", "Spurt丶昵称ご", "丨Sky灬丨昵称", "丿Star丨昵称", "昵称Culb°", "昵称__Home", "v1p丶昵称", "丿TK丶灬丨昵称" ]
        }, {
            class: "个性符号昵称",
            datalist: [ "ㄨ℉昵称℅`", "?昵称ヽ。", "ヽ昵称／.ら", "〆昵称ゾ", "㊣昵称㊣", "ㄗs:昵称ヽㄣ", "ヽ。ァ昵称℅", "圝ㄨ昵称ㄨ圝", "oo-ヽ。昵称℡~", "ゞ-o昵称:", "ご昵称ミㄨ", "ぺ昵称ぺ", "ヤ^昵称íΟо." ]
        } ]


    },
    onLoad: function(a) {
        
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
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    bindKeyInput: function(t) {
        this.data.current = t.detail.value;
    },
    clearInput: function() {
        this.data.current = null, this.setData({
            scrollTop: 0,
            textareaValue: ""
        });
    },
    checkmsg: function (t) {
        var data=this.data.current;
        var e=t;
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
                        if (data) {
                            if (e.target.id) {
                                var a = e.target.id.replace(/\u6635\u79f0/, data);
                                that.setData({
                                    textareaValue: a
                                }), that.CopyLink();
                            }
                        } else 
                            wx.showToast({
                            title: "请输入内容，昵称不能为空",
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
            title: "翅膀昵称生成工具"
        };
    },
    onShareAppMessage: function() {
        return {
            path: "/pagesA/pages/fly/fly",
            title: "翅膀昵称生成工具"
        };
    }
});