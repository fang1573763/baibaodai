Page({
    data: {
        items: []
    },
    onLoad: function(e) {},
    onReady: function() {},
    onShow: function() {
        this.getItems();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "给你推荐一个很好用的小工具，快试试看",
            path: "/pagesB/pages/quse/index",
            imageUrl: "/assets/share.jpg"
        };
    },
    getItems: function(e) {
        var n = this;
        wx.getStorage({
            key: "colors",
            success: function(e) {
                n.setData({
                    items: e.data.reverse()
                });
            }
        });
    },
    onTakeImage: function(e, n) {
        wx.chooseImage({
          
            count: 1,
            sourceType: [ e ],
            success: function(e) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = e.tempFilePaths[0]
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
                    success: function (res) {
                        wx.hideLoading()
                        const data = JSON.parse(res.data)
                        console.log(tempFilePaths )
                        if (data.code == 200 && data.resultStatus == false) {
                        wx.showToast({
                          title: "图片检测成功",
                          icon: "none",
                          duration: 1500
                        });
                

                  wx.navigateTo({
                          url: "color?path=" + tempFilePaths
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
        });
    },
    onPhotoTap: function() {
        this.onTakeImage("camera");
    },
    onAlbumTap: function() {
        this.onTakeImage("album");
    },
    onItemTap: function(e) {
        wx.navigateTo({
            url: "detail?color=" + JSON.stringify(e.currentTarget.dataset.color)
        });
    }
});