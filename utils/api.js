module.exports = {
    analysis: function(t, a, e) {
        wx.request({
          // 去水印接口
          // 前往qsy.jinjinyl.cn注册，联系客服领取一个月接口会员
            url: "https://qsy.jinjinyl.cn/api/dsp/32BB747F90DFEF2D86E9F4B0924FE7FE7326F4771CFF48BFE2/202037040/?url=",
            method: "GET",
            data: {
                url: t
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                t.data && "200" == t.data.code ? a(t.data.data) : e(t.data.message);
            },
            fail: function(t) {
                e("网络有问题");
            }
        });
    }
};