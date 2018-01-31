// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartFull: null,
    resArr: [],
    isAllSelected: true,
    selectedNum: 0,
    totalPrice: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
 * 生命周期函数--监听页面显示
 */
  onShow: function () {
    var cartGoods = wx.getStorageSync("cartGoods");
    var emptyObj = true;
    var resArr = [];
    var selectedNum = this.data.selectedNum;
    var boxNum = 0;
    for (var key in cartGoods) {
      resArr.push(cartGoods[key]);
      if (cartGoods[key].selected) {
        boxNum++;
      };
      emptyObj = false;
    };
    selectedNum = boxNum;
    if (emptyObj) {
      this.setData({
        cartFull: false
      });
    } else {
      this.setData({
        cartFull: true,
        resArr: resArr,
        selectedNum: selectedNum
      });
    };
    this.sumTotal(resArr);
    this.selectedNum(selectedNum, resArr);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  selectChange: function (event) {
    var totalPrice = this.data.totalPrice;
    var allSelect = event.currentTarget.dataset.allselect;
    if (allSelect) {
      var resArr = this.data.resArr;
      var isAllSelected = this.data.isAllSelected;
      var cartGoods = wx.getStorageSync("cartGoods");
      for (var i = 0, len = resArr.length; i < len; i++) {
        var item = resArr[i];
        item.selected = !isAllSelected;
      };
      for (var key in cartGoods) {
        cartGoods[key].selected = !isAllSelected;
      };
      this.setData({
        resArr: resArr,
        isAllSelected: !isAllSelected
      });
      wx.setStorageSync("cartGoods", cartGoods);
      if (!(!isAllSelected)) {
        this.setData({
          totalPrice: "0.00",
          selectedNum: 0
        });
      } else {
        this.sumTotal(resArr);
        this.setData({
          selectedNum: resArr.length
        });
      };
    } else {
      var resArr = this.data.resArr;
      var curIndex;
      var item = event.currentTarget.dataset.item;
      for (var i = 0; i < resArr.length; i++) {
        if (resArr[i].id == item.id) {
          curIndex = i;
          break;
        };
      };
      var state = resArr[curIndex].selected;
      var cartGoods = wx.getStorageSync("cartGoods");
      resArr[curIndex].selected = !state;
      cartGoods[item.id].selected = !state;
      this.setData({
        resArr: resArr
      });
      wx.setStorageSync("cartGoods", cartGoods);
      var selectedNum = this.data.selectedNum;
      this.sumTotal(resArr);
      if (resArr[curIndex].selected) {
        selectedNum++;
      } else {
        selectedNum--;
      };

      this.setData({
        selectedNum: selectedNum
      });
      this.selectedNum(selectedNum, resArr);
    };
  },

  selectedNum: function (selectedNum, resArr) {
    if (selectedNum == resArr.length) {
      this.setData({
        isAllSelected: true
      });
    } else {
      this.setData({
        isAllSelected: false
      });
    };
  },

  sumTotal: function (arr) {
    var sumPrice = 0;
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      if (item.selected) {
        var itemPrice = item.price * item.addNum;
        sumPrice += itemPrice;
      };
    };
    this.setData({
      totalPrice: sumPrice.toFixed(2)
    });
  },

  onAddTap: function (event) {
    this.onAD(event, "add");
  },

  onDeTap: function (event) {
    this.onAD(event, "decrease");
  },

  onAD: function (event, sign) {
    var itemId = event.currentTarget.dataset.itemid;
    var cartGoods = wx.getStorageSync("cartGoods");
    var buyNum = cartGoods[itemId].addNum;

    if (sign == "add") {
      buyNum += 1;
    } else {
      if (buyNum == 1) {
        return;
      }
      buyNum -= 1;
    };

    cartGoods[itemId].addNum = buyNum;
    var resArr2 = [];
    for (var key in cartGoods) {
      resArr2.push(cartGoods[key]);
    };
    this.setData({
      resArr: resArr2
    });
    wx.setStorageSync("cartGoods", cartGoods);
    this.sumTotal(resArr2);
  },

  onDeleteTap: function (event) {
    var resArr = this.data.resArr;
    var item = event.currentTarget.dataset.item;
    var curIndex;
    var totalPrice = this.data.totalPrice;
    var selectedNum = this.data.selectedNum;
    for (var i = 0, len = resArr.length; i < len; i++) {
      if (resArr[i].id == item.id) {
        curIndex = i;
        break;
      }
    };
    resArr.splice(curIndex, 1);
    if (item.selected) {
      var itemPrice = item.price * item.addNum;
      totalPrice = (totalPrice - itemPrice).toFixed(2);
      selectedNum--;
    };

    if (resArr.length == 0) {
      this.setData({
        cartFull: false
      });
    };
    this.setData({
      resArr: resArr,
      totalPrice: totalPrice,
      selectedNum: selectedNum
    });
    this.selectedNum(selectedNum, resArr);
    var cartGoods = wx.getStorageSync("cartGoods");
    for (var key in cartGoods) {
      if (key == item.id) {
        delete cartGoods[key];
        break;
      }
    };
    wx.setStorageSync("cartGoods", cartGoods);
  },

  onSingelTap: function(event) {
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