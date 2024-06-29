Page({
  data: {
    foodList: [],
    hideNotice: false,
    notice: '',
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    // 轮播图
    imgUrls: [{
        appid: 'wxece3a9a4c82f58c9',
        link: 'ele-recommend-price/pages/guest/index?inviterId=e4b6dd1&chInfo=ch_wechat_chsub_CopyLink&_ltracker_f=grzx0913',
        url: 'https://oss.babytime.vip/tool/images/2104081045251997674846.jpeg',
      },
      {
        appid: 'wx2c348cf579062e56',
        link: '',
        url: 'https://oss.babytime.vip/tool/images/2104081045251997625432.jpeg',
      }
    ],
  },
  // 点击关闭公告
  switchNotice: function () {
    this.setData({
      hideNotice: true
    })
  },
  onLoad: function () {
    // this.interstitialAd();
  },
  // 插屏广告开始
  interstitialAd: function () {
    let interstitialAd = null
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: '广告3'
      })
    }
    if (interstitialAd) {
      interstitialAd.show().catch((err) => {
        console.error(err)
      })
    }
  },
  // 插屏广告结束
  go13: function () {
    wx.navigateToMiniProgram({
      appId: 'wx4acb857b763d7a64', //要打开的小程序 appId
      path: ' ', //打开的页面路径，如果为空则打开首页
      envVersion: 'release',
      shortLink: '',
      success(res) {
        // 打开成功
      },
      fail: function (err) {
        console.log(err);
      }
    })
  },

  go5: function () {
    wx.navigateTo({
      url: '../../pages/numToCase/numToCase'
    })
  },
  // 激励广告开始
  goad: function () {
    var t = this;
    wx.showModal({
      title: '提示',
      confirmText: "好的",
      confirmColor: "#d4237a",
      content: '需观看激励视频完成后可自动保存无水印视频',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          t.getAd()
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  getAd: function () {
    var videoAd = null;
    if (wx.createRewardedVideoAd) {
      videoAd = wx.createRewardedVideoAd({
        // 替换为您的激励广告id
        adUnitId: 'adunit-6fe4b94771653d2e'
      })
      videoAd.onError(err => {})
      videoAd.onClose((status) => {
        if (status && status.isEnded || status === undefined) {
          videoAd.offClose()
          this.go5()
        } else {
          var t = this;
          wx.showModal({
            title: '观看未完成提示',
            confirmText: "继续观看",
            confirmColor: "#d4237a",
            content: '需观看完成后自动保存无水印视频',
            success(res) {
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
  goab: function () {
    wx.navigateTo({
      url: '../../pagesB/pages/blood/blood'
    })
  },
  gocs: function () {
    wx.navigateTo({
      url: '../../pagesB/pages/networkSpeed/networkSpeed'
    })
  },
  gosm: function () {
    wx.navigateTo({
      url: '../../pagesB/pages/blind/blind'
    })
  },
  gogzh: function () {
    wx.navigateTo({
      url: '../../pagesC/pages/index/index'
    })
  },
  go12: function () {
    wx.navigateToMiniProgram({
      appId: 'wxcd1bb2299ed463c3', //要打开的小程序 appId
      path: ' ', //打开的页面路径，如果为空则打开首页
      envVersion: 'release',
      shortLink: '',
      success(res) {
        // 打开成功
      },
      fail: function (err) {
        console.log(err);
      }
    })
  },
  gojisuanqi: function () {
    wx.navigateTo({
      url: '../../pagesC/pages/jisuanqi/index'
    })
  },
  go113: function () {
    wx.navigateToMiniProgram({
      appId: 'wxcd1bb2299ed463c3', //要打开的小程序 appId
      path: 'pages/shuiyin/index', //打开的页面路径，如果为空则打开首页
      envVersion: 'release',
      shortLink: '',
      success(res) {
        // 打开成功
      },
      fail: function (err) {
        console.log(err);
      }
    })
  },
  alicopy: function (e) {
    wx.setClipboardData ? wx.setClipboardData({
      data: e.currentTarget.dataset.ali,
      success: function (e) {
        wx.showToast({
          title: "复制成功，请前往微信粘贴搜一搜",
          icon: "none",
          duration: 4e3
        });
      }
    }) : wx.showModal({
      title: "提示",
      content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
    });
  },
  go520: function () {
    wx.navigateTo({
      url: '../../pagesA/pages/lovesc/lovesc'
    })
  },
  wxtz: function () {
    wx.navigateTo({
      url: '../../pages/wxtz/index'
    })
  },
  wenzi3: function () {
    wx.navigateTo({
      url: '../../pagesA/pages/fly/fly'
    })
  },
  goip: function () {
    wx.navigateTo({
      url: '../../pagesB/pages/clock/clock'
    })
  },
  fanyi: function () {
    wx.navigateTo({
      url: '../../pagesC/pages/index/index'
    })
  },
  b4: function () {
    wx.navigateTo({
      url: '../../taskOuter/pages/util/share/share'
    })
  },
  b2: function () {
    wx.navigateTo({
      url: '../../taskOuter/pages/util/material/poster'
    })
  },
  b3: function () {
    wx.navigateTo({
      url: '../../taskOuter/pages/util/material/avatar'
    })
  },
  go2: function () {
    wx.navigateTo({
      url: '../../pages/vipvideo/vipvideo'
    })
  },
  go1: function () {
    wx.navigateTo({
      url: '../../pages/video/index'
    })
  },
  gosjs: function () {
    wx.navigateTo({
      url: '../../pagesB/pages/randomNum/randomNum'
    })
  },
  go22: function () {
    wx.navigateTo({
      url: '../../pages/dm/newDanMu'
    })
  },
  go9: function () {
    wx.navigateTo({
      url: '../../pages/choujiang/choujiang'
    })
  },
  go21: function () {
    wx.navigateTo({
      url: '../../pages/tax/tax'
    })
  },
  go24: function () {
    wx.navigateTo({
      url: '../../pages/ruler/ruler'
    })
  },
  go25: function () {
    wx.navigateTo({
      url: '../../pages/navigator/jiashuiyin/waterMarkSet/waterMarkSet'
    })
  },
  go26: function () {
    wx.navigateTo({
      url: '../../pages/welcome/welcome'
    })
  },
  goqs: function () {
    wx.navigateTo({
      url: '../../pagesB/pages/quse/index'
    })
  },
  go27: function () {
    wx.navigateTo({
      url: '../../pagesA/pages/mm/mm'
    })
  },
  go28: function () {
    wx.navigateTo({
      url: '../../pagesA/pages/protractor/protractor'
    })
  },
  go29: function () {
    wx.navigateTo({
      url: '../../pagesA/pages/time/time'
    })
  },
  go23: function () {
    wx.navigateTo({
      url: '../../pages/time/time'
    })
  },
  go4: function () {
    wx.navigateTo({
      url: '../../pages/createQrcode/createQrcode'
    })
  },
  godk: function () {
    wx.navigateTo({
      url: '../../pagesA/pages/album/index'
    })
  },
  bizhi: function () {
    wx.navigateTo({
      url: '../../pagesB/pages/index/index'
    })
  },
  gotouxiang: function () {
    wx.navigateTo({
      url: '../../pagesB/pages/hottouxiang/index'
    })
  },

  go6: function () {
    wx.navigateTo({
      url: '../../pages/figure/figure'
    })
  },
  go8: function () {
    wx.navigateTo({
      url: '../../pages/color/color'
    })
  },
  go7: function () {
    wx.navigateTo({
      url: '../../pages/counter/counter'
    })
  },
  go3: function () {
    wx.navigateTo({
      url: '../../pagesA/pages/imagepress/imagepress'
    })
  },
  go10: function () {
    wx.navigateTo({
      url: '../../pages/myphone/myphone'
    })
  },
  tothree: function () {
    wx.navigateTo({
      url: '../../components/text/text'
    })
  },
  tofour: function () {
    wx.navigateTo({
      url: '../../components/picture/picture'
    })
  },
  tofive: function () {
    wx.navigateTo({
      url: '../../pages/video/index'
    })
  },
  tosix: function () {
    wx.navigateTo({
      url: '../../pages/vipvideo/vipvideo'
    })
  },
  totool: function () {
    wx.navigateTo({
      url: '../../components/search_tool/search_tool'
    })
  },
  tu1: function () {
    wx.navigateTo({
      url: '../../pages/jietus/album/index'
    })
  },
  tu2: function () {
    wx.navigateTo({
      url: '../../pages/navigator/heart/heart'
    })
  },
  tu3: function () {
    wx.navigateTo({
      url: '../../pages/navigator/pintu/pintu/pintu'
    })
  },
  tu4: function () {
    wx.navigateTo({
      url: '../../pages/navigator/pintu/cut/cut'
    })
  },
  tu5: function () {
    wx.navigateTo({
      url: '../../pages/navigator/pintu/wenzi/wenzi'
    })
  },
  tu6: function () {
    wx.navigateTo({
      url: '../../pages/navigator/combine/combine'
    })
  },
  tu8: function () {
    wx.navigateTo({
      url: '../../pagesA/pages/wzt/wzt'
    })
  },
  tu88: function () {
    wx.navigateTo({
      url: '../../pagesA/pages/geshi/index'
    })
  },
  gomasaike: function () {
    wx.navigateTo({
      url: '../../pagesC/pages/indexmsk/index'
    })
  },
  gojianjiao: function () {
    wx.navigateTo({
      url: '../../pagesA/pages/screaming/screaming'
    })
  },
  gohuashi: function () {
    wx.navigateTo({
      url: '../../pagesA/pages/typeface/typeface'
    })
  },
  gozifu: function () {
    wx.navigateTo({
      url: '../../pagesA/pages/emojy/emojy'
    })
  },

  onShareAppMessage: function () {
    return {
      title: "给你推荐一个微信便捷工具箱，干嘛嘛方便~",
      path: ""
    };
  },
  onShareTimeline: function () {
    return {
      title: "给你推荐一个微信便捷工具箱，干嘛嘛方便~"
    };
  }
})