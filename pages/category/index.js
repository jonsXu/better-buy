// pages/category/index.js
import http from  "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categorys:[],//分类目录
    categorysGoods:[],//分类商品
    categorysGoodsObj:{},//分类商品obj缓存
    activeNavIndex:0,//当前正在激活的左侧导航
    scrollTop:0,//右侧滚动条距离顶部的距离
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //使用本地缓存
    let categorys =  wx.getStorageSync('categorysObj')
    if(!categorys) {
      this.getCategorysList()
    } else {
      this.setData({
        categorys:categorys,
        categorysGoods:categorys[0].children
      })
    }
    
  },
  //获取商品分类目录信息
  getCategorysList(){
    http({ url: '/categories'}).then(res=>{
      if(res.data.meta&&res.data.meta.status==200){
        let obj = []
        let list = []
        let arr = []
        res.data.message.forEach((item,index)=>{
          item.indexItem = index
          list.push(item)
        })
        arr =   res.data.message[0].children
        this.setData({
          categorys:list,
          categorysGoods:arr
        })
        //做本地缓存
        wx.setStorageSync('categorysObj',  res.data.message)
      }
    })
  },
  //导航点击事件
  navClick(e){
    let index = e.currentTarget.dataset.navindex
    let contentData = this.data.categorys[index].children
    this.setData({
      activeNavIndex:index,
      categorysGoods:contentData,
      scrollTop:0
    })
  }
})