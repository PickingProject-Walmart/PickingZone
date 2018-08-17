// pages/list_1/list_1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderArray: [
      { id: "金典有机纯牛奶250mL * 12\n特仑苏纯牛奶250mL * 12", unique:'1', checked : false},
      { id: "清风 原木纯品系列2层 150抽 抽取式面纸 3+1包 * 1\nMr.Muscle/威猛先生 清洁套装 (洁厕液600g*2+厨房重油污净500g) * 2", unique: '2', checked: false},
      { id: "农夫山泉 天然水 380ml/瓶*12瓶 * 1\n夏黑葡萄 约500g * 1", unique: '3', checked: false},
      { id: "暂无任务 Empty", unique: '4', checked: false},
      { id: "暂无任务 Empty", unique: '5', checked: false},
      { id: "暂无任务 Empty", unique: '6', checked: false},
      { id: "暂无任务 Empty", unique: '7', checked: false},
      { id: "暂无任务 Empty", unique: '8', checked: false},
      { id: "暂无任务 Empty", unique: '9', checked: false},
      { id: "暂无任务 Empty", unique: '10', checked: false},
    ],
  },

  /**
   * 订单完成状态改变
   */
  checkcedReverse:function() {
    orderArray[orderArray.indexOf(this)].checked = !orderArray[orderArray.indexOf(this)].checked
  },

  /**
   * 刷新订单列表
   */

  refreshPage: function(e) {
    const length = this.data.orderArray.length
    for (let i = 0; i < length; ++i) {
      if (this.data.orderArray[i].checked==true){
        
      }
      
      
      this.data.orderArray[i] = this.data.orderArray[i+1]
      if (this.data.orderArray[i]==null) {
        this.data.orderArray[i] = { id: "暂无任务 Empty", checked: 'false' }
      }
    }
    this.setData({
      orderArray: this.data.orderArray
    })
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