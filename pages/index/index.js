const app = getApp();

Page({
  data: {
    "fruits": [
      { "id": 0, "img": "/image/s4.png", "name": "锈色瓜子",  "price": 0.01, "stock": '有货'},
      { "id": 1, "img": "/image/s5.png", "name": "芹菜",  "price": 0.01, "stock": '有货'},
      { "id": 2, "img": "/image/s6.png", "name": "素米",  "price": 0.01, "stock": '有货'},
      { "id": 0, "img": "/image/s4.png", "name": "锈色瓜子",  "price": 0.01, "stock": '有货'},
      { "id": 1, "img": "/image/s5.png", "name": "芹菜",  "price": 0.01, "stock": '有货'},
      { "id": 2, "img": "/image/s6.png", "name": "素米",  "price": 0.01, "stock": '有货'},
    ]
  },

  onLoad: function () {

  },

  onSwiperTap: function (event) {
    var goodId = event.target.dataset.goodid;
    console.log(goodId);
  },

  onFruitTap: function (event) {
    wx.navigateTo({
      url: '../fruit/fruit'
    })
  },

  onNewTap: function (event) {
    wx.navigateTo({
      url: '../NewProduct/NewProduct'
    })
  },

  onGrainsTap: function (event) {
    wx.navigateTo({
      url: '../grains/grains'
    })
  },

  onProductTap: function (event) {
    app.onProductTap(event);
  }


})
