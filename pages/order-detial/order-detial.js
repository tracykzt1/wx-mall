var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resArr: [],
    totalPrice: 0,
    addAddress:true,
    address:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var address = wx.getStorageSync('address');
    if (!address) {
      wx.setStorageSync('address', {});
    }else{
      this.setData({
        addAddress: false
      });
    }
  },

  onToPayTap: function (event) {
    var that = this;
    wx.showModal({
      title: '项目demo',
      content: '支付系统屏蔽',
      showCancel: false,
      confirmColor: '#1AAD16',
      success: function (res) {
        if (res.confirm) {
          wx.switchTab({
            url: '../my/my'
          });
          var randomNum = '';
          for(var i=0; i<5; i++) {
            var random = Math.floor(Math.random()*10);
            randomNum = randomNum+random;
          };
          app.globalData.selectedOrder = that.data.resArr;
          app.globalData.totalPrice = that.data.totalPrice;
          app.globalData.randomNum = randomNum;
        }
      }
    });
  },

  onAddAddress: function(event) {
    wx.navigateTo({
      url: '../address/address'
    })
  },

  onUpdateAddress:function(event) {
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
  onShow: function (options) {
    var resArr2 = [];
    var totalPrice2 = 0;
    var cartGoods = wx.getStorageSync('cartGoods');
    for (var key in cartGoods){
      var item = cartGoods[key];
      if (item.selected) {
        resArr2.push(item);
        var itemPrice = item.price * item.addNum;
        totalPrice2 = (totalPrice2 + itemPrice);
      }; 
    };
    this.setData({
      resArr: resArr2,
      totalPrice: totalPrice2
    });

    var address = wx.getStorageSync('address');
    this.setData({
      address: address
    })
  },

  onSingelTap: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../product-detial/product-detial?id=' + id
    })
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