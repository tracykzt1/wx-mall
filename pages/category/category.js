Page({

  /**
   * 页面的初始数据
   */
  data: {
    order: ['guowei', 'sucai', 'chaohuo', 'dianxin', 'chucha', 'danfan'],
    cateId: '0',
    toView: 'guowei'
  },

  onCateTap: function (event) {
    var cateId = event.target.dataset.cateid;
    var orderArr = this.data.order;
    switch (cateId) {
      case '0':
        this.setData({
          cateId: '0',
          toView: orderArr[0]
        })
        break;
      case "1":
        this.setData({
          cateId: "1",
          toView: orderArr[1]
        })
        break;
      case "2":
        this.setData({
          cateId: "2",
          toView: orderArr[2]
        })
        break;
      case "3":
        this.setData({
          cateId: "3",
          toView: orderArr[3]
        })
        break;
      case "4":
        this.setData({
          cateId: "4",
          toView: orderArr[4]
        })
        break;
      case "5":
        this.setData({
          cateId: "5",
          toView: orderArr[5]
        })
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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