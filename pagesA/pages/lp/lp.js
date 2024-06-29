
Page({

    /**
     * 页面的初始数据
     */
  data: {
        direction: "--",
        angle: "--",
        rotate: "",
        backgroundColor: "#fff",
        color: "#000",
        bulb: "../../images/tip.png",
        compass: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-07f1dadb-1b39-46b0-bb59-e357f1fc9cbb/fbcbe781-3037-41f4-8be5-036f7da2b37d.svg"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(a) {
        console.log(a)
        wx.setNavigationBarTitle({
            title:a.title
          })
         if ("指南针"=="指南针") {
            this.setData({
                backgroundColor: "#fff",
                color: "#000",
                bulb: "../../images/tip.png",
                compass: "../../images/znz-l.png"
            });
        } else {
            this.setData({
                backgroundColor: "#fff",
                color: "#000",
                bulb: "../../images/light.png",
                compass: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-07f1dadb-1b39-46b0-bb59-e357f1fc9cbb/fbcbe781-3037-41f4-8be5-036f7da2b37d.svg"
            });
        }
        var that = this;
        wx.onCompassChange(function(res) {
            var directions = res.direction.toFixed(2);
            var radios = res.direction.toFixed(0);
            that.setData({
                angle: directions,
                rotate: 360 - radios,
                direction: check(radios)
            });
        });
                setTimeout(function() {
            if (that.data.direction == "--" && that.data.angle == "--") {
                wx.showToast({
                    title: "罗盘无法使用",
                    icon: "loading",
                    duration: 3000,
                    mask: true
                });
            }
        }, 3000);
                function check(i) {
            if (15 <= i && i <= 75) {
                return "东北";
            } else if (75 < i && i < 105) {
                return "正东";
            } else if (105 <= i && i <= 165) {
                return "东南";
            } else if (165 < i && i < 195) {
                return "正南";
            } else if (195 <= i && i <= 255) {
                return "西南";
            } else if (255 < i && i < 285) {
                return "正西";
            } else if (285 <= i && i <= 345) {
                return "西北";
            } else {
                return "正北";
            }
        }
     
    },
    theme: function()  {
        var that = this;
        wx.showActionSheet({
            itemList: [ "罗盘专业版", "指南针/指北针" ],
            success: function success(res) {
                wx.setStorageSync("theme", res.tapIndex);
                if (res.tapIndex === 0) {
                      wx.setNavigationBarTitle({
                        title:"风水罗盘"
                      })
                    that.setData({
                        backgroundColor: "#fff",
                        color: "#000",
                        bulb: "../../images/light.png",
                        compass: "../../images/compass.svg"
                    });
                 
                } else {
                    wx.setNavigationBarTitle({
                        title:"指南针"
                      })
                    that.setData({
                        backgroundColor: "#000",
                        color: "#fff",
                        bulb: "../../images/tip.png",
                        compass: "../../images/znz.png"
                    });
                }
            }
        });
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },
    onShareAppMessage: function(e) {
        return {
            title: "在线风水罗盘/指南针/指北针！",
            path: "/pagesA/pages/lp/lp"
        };
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */

})