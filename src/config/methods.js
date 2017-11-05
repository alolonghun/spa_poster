export default {
  WXConfigInit: function(weixinObj) {
    console.log(JSON.stringify(weixinObj));
    wx.config({
      debug: false, // 开启调试模式
      appId: weixinObj.data.appId, // 必填，公众号的唯一标识
      timestamp: weixinObj.data.timestamp, // 必填，生成签名的时间戳
      nonceStr: weixinObj.data.noncestr, // 必填，生成签名的随机串
      signature: weixinObj.data.signature, // 必填，签名，见附录1
      jsApiList: ['chooseImage', 'previewImage', 'uploadImage', 'downloadImage', 'getLocalImgData', 'hideOptionMenu', 'showOptionMenu', 'hideMenuItems', 'showMenuItems', 'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem']
    });
    wx.ready(function() {
      console.log("微信回调成功");
    });
  }
}
