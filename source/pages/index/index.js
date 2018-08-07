//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '请选择你所在货架\nChoose Your Shelf',
    s1: '货架1',
    s2: '货架2',
    s3: '货架3',
    s4: '货架4',
    s5: '货架5',
    s6: '货架6',
    s7: '货架7',
    s8: '货架8',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
 },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  goToList1:function(param){
    wx.navigateTo({
      url: '../list_1/list_1',
    })
  },
  goToList2: function (param) {
    wx.navigateTo({
      url: '../list_2/list_2',
    })
  },
  goToList3: function (param) {
    wx.navigateTo({
      url: '../list_3/list_3',
    })
  },
  goToList4: function (param) {
    wx.navigateTo({
      url: '../list_4/list_4',
    })
  },
  goToList5: function (param) {
    wx.navigateTo({
      url: '../list_5/list_5',
    })
  },
  goToList6: function (param) {
    wx.navigateTo({
      url: '../list_6/list_6',
    })
  },
  goToList7: function (param) {
    wx.navigateTo({
      url: '../list_7/list_7',
    })
  },
  goToList8: function (param) {
    wx.navigateTo({
      url: '../list_8/list_8',
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
