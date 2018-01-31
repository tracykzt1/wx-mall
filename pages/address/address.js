// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:"",
    userPhone:"",
    addressDetail:""
  },

  formSubmit: function(event) {
    var userName = this.data.userName;
    var userPhone = this.data.userPhone;
    var addressDetail = this.data.addressDetail;
    if (userName && userPhone && addressDetail) {
      var address = wx.getStorageSync('address');
      var addressStorage = {
        userName: userName,
        userPhone: userPhone,
        addressDetail: addressDetail
      }
      address = addressStorage;
      wx.setStorageSync('address', address);
      wx.navigateBack({
        delta: 1
      });
    }
  },

  bindName: function(event) {
    this.setData({
      userName:event.detail.value
    })
  },
  bindPhone: function(event) {
    this.setData({
      userPhone: event.detail.value
    })
  },
  bindDetail: function(event) {
    this.setData({
      addressDetail: event.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var address = wx.getStorageSync('address');
    this.setData({
      userName: address.userName,
      userPhone: address.userPhone,
      addressDetail: address.addressDetail
    });
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