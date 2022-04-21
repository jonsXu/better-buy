// pages/goods_detail/index.js
import http from  "../../request/index.js"
import {addBuyCars} from  "../../utils/busiUtil.js"
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
  },
  joinBuyCars() {
    addBuyCars(this.data.goodsObj)
  },
  // 点击预览
  handlPreviewImage(e){
    let index = e.currentTarget.dataset.index
    console.log(e.currentTarget.dataset)
    let urls = this.data.goodsObj.pics.map(item => {
      return item.pics_big_url
    })
    wx.previewImage({
      current: urls[index], // 当前显示图片的http链接
      urls: urls // 需要预览的图片http链接列表
    })
  }
})