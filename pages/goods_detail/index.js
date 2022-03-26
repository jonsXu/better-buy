// pages/goods_detail/index.js
import http from  "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsId:'',
    goodsObj:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let goodsId = options.goodsId
    this.setData({
      goodsId:goodsId
    })
    this.getGoodsDetail()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(new Date())
  },
  getGoodsDetail(){
    http({url:`/goods/detail?goods_id=${this.data.goodsId}`},{show:true}).then(res=>{
      if(res&&res.data&&res.data.message){
        this.setData({
          goodsObj:res.data.message,
        })
      }
    })
  }
})