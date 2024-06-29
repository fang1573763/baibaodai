wx.showShareMenu();
let img_235_encode

Page({
  date:{
    imgUrl: '',
  },

  onLoad(o) {
    img_235_encode = o.img_235
    let img_235 = decodeURIComponent(img_235_encode)
    this.setData({
      imgUrl: img_235
    })
  },

  onShareAppMessage() {
    return {
      title: '分享一个推送封面给你',
      path: `/pagesC/pages/preview/preview?img_235=${img_235_encode}`,
      imageUrl: this.data.imageUrl
    }
  },

  preview() {
    let arr = []
    arr.push(this.data.imgUrl);
    wx.previewImage({
      urls: arr,
    })
  },

  saveImage() {
    wx.showLoading({
      title: '保存中',
    })
    wx.downloadFile({
      url: this.data.imgUrl,
      success(res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success() {
            wx.hideLoading();
            wx.showToast({
              title: '保存成功',
            })
          },
          fail() {
            wx.showToast({
              icon: 'none',
              title: '保存失败！',
            })
          }
        })
      }
    })
  }
})