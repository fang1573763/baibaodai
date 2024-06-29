var app = getApp();
let host = app.globalData.host;

function request(url, postData, doSuccess, doFail) {
  wx.request({
    url: host + url,
    header: {
    'content-type': 'application/x-www-form-urlencoded' // 默认值
    },
    data: postData,
    method: 'POST',
    success: function (res) {
      if(res.data.code == 500){
        wx.showToast({
          title: res.data.msg,
          icon:"none"
        })
      }else{
        doSuccess(res.data);
      }
      // wx.hideLoading();
    },
    fail: function (res) {
      // wx.hideLoading();
      wx.showToast({
        title: res.msg,
        icon:"none"
      })
      doFail();
    },
    complete: () => {}
  })
}
/**
 * 本源码由一明开发者中心提供
 * 找源码，微信搜索：发现源码
 * 永久免费提供源码服务
 */

module.exports.request = request;


