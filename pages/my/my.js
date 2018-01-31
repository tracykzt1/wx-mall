var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resArr: [],
    listContent: true,
    address: {},
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var myOrder = wx.getStorageSync('myOrder');
    if (!myOrder) {
      wx.setStorageSync("myOrder", []);
    }
    this.setData({
      userInfo: app.globalData.userInfo
    })
    console.log(app.globalData.userInfo);

  },

  onUpdateAddress: function(event) {
    wx.navigateTo({
      url: '../address/address'
    })
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
    var address = wx.getStorageSync('address');
    this.setData({
      address: address
    })
    var myOrder = wx.getStorageSync("myOrder");
    var resArr = app.globalData.selectedOrder;
    var totalPrice = app.globalData.totalPrice;
    var randomNum = app.globalData.randomNum;
    if (myOrder.length == 0 || resArr.length != 0 ) {
      if (resArr.length == 0) {
        this.setData({
          listContent: false
        });
      }else{
        var orderItemStorage = {
          resArr: resArr,
          totalPrice: totalPrice,
          randomNum: randomNum
        };
        myOrder.push(orderItemStorage);
        wx.setStorageSync("myOrder", myOrder);
        this.setData({
          resArr: myOrder,
          listContent: true
        });
        app.globalData.selectedOrder = [];
        app.globalData.totalPrice = 0;
        app.globalData.randomNum = '';
      };
    }else{
      this.setData({
        resArr: myOrder
      });
    };
  
    var cartGoods = wx.getStorageSync("cartGoods");
    for (var key in cartGoods) {
      if (cartGoods[key].selected) {
        delete cartGoods[key];
      }
    };
    wx.setStorageSync("cartGoods", cartGoods);
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