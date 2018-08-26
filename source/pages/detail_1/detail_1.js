// pages/detail_1/detail_1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: {},
    goodsInfo: [],
    goodsDict: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      id: options.goodsID
    })
    var items = that.data.id.split('\n')
    that.setData({
      goodsInfo: items
    })
    var goodsDict = [{ name: "NULL", num: 0 }]
    if (that.data.goodsInfo[0] != "暂无任务 Empty") {
      var length = that.data.goodsInfo.length
      for (let i = 0; i < length; ++i){
        var pair = that.data.goodsInfo[i].split(' * ')
        if (goodsDict[0].name == "NULL")
        {
          goodsDict.pop() 
        }
        goodsDict.push({name: pair[0], num: pair[1]})
      }
    }
    that.setData({
      goodsDict: goodsDict
    })
    console.log(1, this.data.goodsDict)
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