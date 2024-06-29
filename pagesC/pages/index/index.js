wx.showShareMenu();

const url = 'https://www.fejiyu.com/miniapi/cover/w'
const apiKey = 'zl3fpZ0lKbTDGXWn6jlqsaUXL4t97DaJWrPa0ReY2Ntz3I63eCBLCfrweTXzmuwH'
let oldLink, img_235;

Page({
  data: {
    link: '',
  },

  onShareAppMessage() {
    return {
      title: '一键获取推送封面图',
      path: '/pagesC/pages/index/index'
    }
  },

  getLink(e) {
    let link = e.detail.value.link;
    if (link) {
      if (link.indexOf('https://mp.weixin.qq.com/') !== -1) {
        wx.showLoading({
          title: '获取中...',
        })
        wx.request({
          url: url,
          method: 'POST',
          data: {
            link: link,
            apiKey: apiKey
          },
          success: res => {
            wx.hideLoading()
            let d = res.data;
            let img_235 = d.img_235;
            if (!img_235) {
              wx.showToast({
                icon: 'none',
                title: '获取失败，请重试或联系客服!',
              })
            } else {
              oldLink = link;
              this.navToPreview(img_235);
            }
          },
        })
      }
      else {
        wx.showToast({
          icon: 'none',
          title: '请检查输入的链接是否有误'
        })
      }
    }
    else {
      wx.showToast({
        icon: 'none',
        title: '请先输入链接地址'
      })
    }
  },

  navToPreview(img_235) {
    let img_235_encode = encodeURIComponent(img_235);
    // console.log(`img_235=${img_235_encode}&img_1=${img_1_encode}`);
    wx.navigateTo({
      url: `../preview/preview?img_235=${img_235_encode}`,
    })
  },
})