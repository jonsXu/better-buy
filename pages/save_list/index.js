// pages/save_list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeTab: '1',
    tabs:[{
      id:'1',
      name:'商品收藏'
    },{
      id:'2',
      name:'品牌收藏'
    },{
      id:'3',
      name:'店铺收藏'
    },{
      id:'4',
      name:'浏览足迹'
    }],//tab
    good_saveBtns: [
      {name: '全部', active:'1'},
      {name: '好货', active:'2'},
      {name: '正在上线', active:'3'},
    ],
    saveList:[],
  },

  tabChange(tab){
    console.log(tab.detail)
    this.setData({
      activeTab: tab.detail.tab.id
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
    let list = wx.getStorageSync('saveList')?JSON.parse(wx.getStorageSync('saveList')):[]
    this.setData({'saveList':list})
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

 
})