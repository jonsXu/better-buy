import http from  "../../request/index.js"
Page({
  data: {
    swiperList:[],//轮播图list
    navs:[],//导航list
    goodsObjectList:[],//商品列表
  },

  /**
   * 生命周期函数--监/听页面加载,页面加载的时候就会触发事件
   */
  onLoad: function (options) {
    //获取swiper
    this.getSwiperList()
    this.getNavsList()
    this.getGoodsObject()
  },
  //获取轮播图的数据
  getSwiperList(){
    http({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'}).then(res=>{
      if(res.data.meta&&res.data.meta.status==200){
        this.setData({
          swiperList:res.data.message
        })
      }
    })
  },
  //获取导航栏
  getNavsList(){
    http({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'}).then(res=>{
      if(res.data.meta&&res.data.meta.status==200){
        console.log(res.data.message)
        this.setData({
          navs:res.data.message
        })
      }
    })
  },
  //获取商品导航
  getGoodsObject(){
    http({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata'}).then(res=>{
      if(res.data.meta&&res.data.meta.status==200){
        console.log(res.data.message)
        this.setData({
          goodsObjectList:res.data.message
        })
      }
    })
  }
})