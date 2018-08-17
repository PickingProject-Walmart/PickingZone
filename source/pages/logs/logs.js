//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    orderArray: [
      { id: "金典有机纯牛奶250mL * 12\n特仑苏纯牛奶250mL * 12", unique: '1', checked: false },
      { id: "清风 原木纯品系列2层 150抽 抽取式面纸 3+1包 * 1\nMr.Muscle/威猛先生 清洁套装 (洁厕液600g*2+厨房重油污净500g) * 2", unique: '2', checked: false },
      { id: "农夫山泉 天然水 380ml/瓶*12瓶 * 1\n夏黑葡萄 约500g * 1", unique: '3', checked: false },
    ]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
