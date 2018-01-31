const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "fruits": [
      { "img": "/image/s6.png", "name": "香蕉", "id": 9 },
      { "img": "/image/s6.png", "name": "香蕉", "id": 10 },
      { "img": "/image/s6.png", "name": "香蕉", "id": 11 },
      { "img": "/image/s6.png", "name": "香蕉", "id": 12 },
      { "img": "/image/s6.png", "name": "香蕉", "id": 13 },
      { "img": "/image/s6.png", "name": "香蕉", "id": 14 },
      { "img": "/image/s6.png", "name": "香蕉", "id": 15 },
      { "img": "/image/s6.png", "name": "香蕉", "id": 16 }
    ], "id": 5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onProductTap: function (event) {
    app.onProductTap(event);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})