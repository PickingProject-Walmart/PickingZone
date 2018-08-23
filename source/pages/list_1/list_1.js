// pages/list_1/list_1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderArray: [
      { id: "金典有机纯牛奶250mL * 12\n---------------------\n特仑苏纯牛奶250mL * 12", time: '480', unique:'1', checked : false},
      { id: "清风 原木纯品系列2层 150抽 抽取式面纸 3+1包 * 1\n---------------------\nMr.Muscle/威猛先生 清洁套装 (洁厕液600g*2+厨房重油污净500g) * 2", time: '480', unique: '2', checked: false},
      { id: "农夫山泉 天然水 380ml/瓶*12瓶 * 1\n---------------------\n夏黑葡萄 约500g * 1", time: '480', unique: '3', checked: false},
      { id: "暂无任务 Empty", time: '480', unique: '4', checked: false},
      { id: "暂无任务 Empty", time: '480', unique: '5', checked: false},
      { id: "暂无任务 Empty", time: '480', unique: '6', checked: false},
      { id: "暂无任务 Empty", time: '480', unique: '7', checked: false},
      { id: "暂无任务 Empty", time: '480', unique: '8', checked: false},
      { id: "暂无任务 Empty", time: '480', unique: '9', checked: false},
      { id: "暂无任务 Empty", time: '480', unique: '10', checked: false},
    ],
  },

  /**
   * 订单完成状态改变
   */
  checkedReverse: function(e) {
    var index = e.currentTarget.dataset.index
    this.data.orderArray[index].checked = !(this.data.orderArray[index].checked)
  },

  /**
   * 订单倒计时函数
   */
  countDown: function(){
    var that = this 
    const length = that.data.orderArray.length
    setInterval(function(){
      for(let i = 0; i < length; ++i) {
        that.data.orderArray[i].time--
      }
    }, 1000)
  },

  /**
   * 开始拣单
   */
  start: function(){
    var that = this
    that.countDown()
    this.setData({
      disabled: true
    })
  },

  /**
   * 刷新订单列表
   */

  refreshPage: function(e) {
    const length = this.data.orderArray.length
    for (let i = 0; i < length; ++i) {
      if (this.data.orderArray[i].checked==true){
        for (let j=i; j<length;++j){
          this.data.orderArray[j] = this.data.orderArray[j + 1]
          if (this.data.orderArray[j] == null) {
            this.data.orderArray[j] = { id: "暂无任务 Empty", time: "480", unique: "10", checked: 'false' }
          }
        }
      break
      }
    }
    this.setData({
      orderArray: this.data.orderArray
    })
  },
  
  /**
   * 显示该订单剩余时间
   */

  displayTime: function(e){
    var index = e.currentTarget.dataset.index
    var time = this.data.orderArray[index].time
    var minute = Math.floor(time / 60)
    var second = time % 60
    wx.showModal({
      title: '剩余时间',
      content: minute + '分' + second + '秒',
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