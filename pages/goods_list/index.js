// pages/goods_list/index.js
import http from  "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cid:'',//当前商品列表的类别id
    goods:[],//当前商品的数组
    queryKey:'',//模糊搜索关键字，
    curpage:1,//当前页
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    debugger
    let cid = options.cid
    this.setData({
      cid:cid
    })
    this.getGoodsList()
  },
  getGoodsList:function (){
    http({ url: '/goods/search',data:{query:this.data.queryKey,pagenum:this.data.curpage}}).then(res=>{
      if(res&&res.data&&res.data.message){
        this.setData({
          goods:res.data.message.goods
        })
      }
    })
  }

})