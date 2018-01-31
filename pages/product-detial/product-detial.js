var localData = require("../../data/localdata.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    numarr: [],
    curTapIdx: "1",
    isShowNum: false,
    ontap: false,
    onscale: false,
    selectNum: 1,
    totalNum: 0,
    goodItem: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.pickArr();
    var proId = options.id;
    var goodItem = localData.goodsList[proId];
    this.setData({
      goodItem: goodItem,
      proId: proId
    });


  },

  bindPickerChange: function (event) {
    this.setData({
      index: event.detail.value,
      selectNum: this.data.numarr[event.detail.value]
    });
  },

  pickArr: function () {
    var numarr = this.data.numarr;
    for (var i = 0; i < 100; i++) {
      numarr.push(i + 1);
    };
    this.setData({
      numarr: numarr
    });
  },

  ontabTap: function (event) {
    var tabId = event.target.dataset.id;
    switch (tabId) {
      case '1':
        this.setData({
          "curTapIdx": "1"
        });
        break;
      case '2':
        this.setData({
          "curTapIdx": "2"
        });
        break;
      case '3':
        this.setData({
          "curTapIdx": "3"
        });
        break;
    }
  },

  onAddTap: function (event) {
    if (this.data.ontap) {
      return;
    }
    var that = this;
    var select = this.data.selectNum;
    var total = this.data.totalNum;
    this.setData({
      ontap: true
    });
    setTimeout(function () {
      that.setData({
        ontap: false,
        onscale: true
      });
      setTimeout(function () {
        that.setData({
          onscale: false,
          isShowNum: true,
          totalNum: select + total
        });

        var cartGoodsItem = {
          id: that.data.goodItem.id,
          img: that.data.goodItem.img,
          name: that.data.goodItem.name,
          price: that.data.goodItem.price,
          addNum: that.data.totalNum,
          selected: that.data.goodItem.selected
        };
        var cartGoods = wx.getStorageSync("cartGoods");
        cartGoods[that.data.goodItem.id] = cartGoodsItem;
        wx.setStorageSync("cartGoods", cartGoods);
      }, 400)
    }, 400);
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
    var cartGoods = wx.getStorageSync("cartGoods");
    var emptyObj = true;
    if (!cartGoods) {
      wx.setStorageSync("cartGoods", {});
    } else {
      // 在判断的情况下(即if..else),{}和{...}都会转化为true。
      // 判断一个对象是{}还是{...}，用for...in循环。{}不会进去循环，而{...}会进去循环，执行里面的代码
      for (var key in cartGoods) {
        emptyObj = false;
        break;
      };
      if (!emptyObj) {
        var proId = this.data.proId;
        if (!cartGoods[proId]) {
          return;
        } else {
          var saveNum = cartGoods[proId].addNum;
          this.setData({
            isShowNum: true,
            totalNum: saveNum
          });
        };
      };
    };
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