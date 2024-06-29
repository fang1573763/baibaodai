var app = getApp();
Page({
  data: {
    text: "",
    jxList:[],
  },

  onLoad: function(options) {
    wx.request({
    //这是我接口的地址
     url: 'https://demos.jinjinyl.cn/jx.json', //
     success: (result) => {
     //成功后打印获取到的result
       console.log(result);
      //将获取到的数据保存到data的foodList数组中
       this.setData({
         jxList:result.data
       })
     }
   });   
  },
  onShow: function() {
    
  },
  onShareAppMessage: function() {
    return {
        title: "这里可以VIP视频在线解析",
        path: ""
    };
},
onShareTimeline: function() {
    return {
        title: "这里可以VIP视频在线解析"
    };
},
  setTextData: function(t) {
    this.setData({
      text: t.detail.value
    });
  },
  clearIndex: function() {
    this.setData({
      selectIndex: null
    });
  },
  selectSource: function(t) {
    var e = this;
    this.clearIndex();
    var a = this.data,
      s = a.text,
      jx1 = a.jxList.jx1
      // n = a.sourceList;
    if (0 !== s.trim().length && -1 != s.indexOf("http")) {
      var o = t.currentTarget.dataset.index,
        i = jx1 + s;  // 解析接口1  微信小程序：一明开发者中心提供技术服务
        /**
        * 此处由一明开发者中心二次开发，免服务器
        * 找源码，微信搜索：发现源码
        * 永久免费提供源码服务
        */
      console.log("URL：" + i), wx.setClipboardData({
        data: i,
        success: function() {
          setTimeout(function() {
            return e.setData({
              selectIndex: o
            });
          }, 800), wx.showToast({
            icon: "none",
            duration: 2500,
            title: "已复制，请在浏览器中打开地址"
          });
        }
      });
    }
  },
  selectSource2: function(t) {
    var e = this;
    this.clearIndex();
    var a = this.data,
      s = a.text,
      jx2 = a.jxList.jx2
      // n = a.sourceList;
    if (0 !== s.trim().length && -1 != s.indexOf("http")) {
      var o = t.currentTarget.dataset.index,
        i = jx2 + s;    
      console.log("URL：" + i), wx.setClipboardData({
        data: i,
        success: function() {
          setTimeout(function() {
            return e.setData({
              selectIndex: o
            });
          }, 800), wx.showToast({
            icon: "none",
            duration: 2500,
            title: "已复制，请在浏览器中打开地址"
          });
        }
      });
    }
  }

});
