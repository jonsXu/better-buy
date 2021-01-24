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
    page:{
      total:0,
      pagenum:1,//当前页
      pagesize:10
    },
    tabs:[{
      id:1,
      name:'综合'
    },{
      id:2,
      name:'销量'
    },{
      id:3,
      name:'价格'
    }],//tab
    activeTab:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let cid = options.cid
    this.setData({
      cid:cid
    })
    this.getGoodsList()
  },
  getGoodsList:function (){
    http({ url: '/goods/search',data:{query:this.data.queryKey,pagenum:this.data.page.pagenum,pagesize:10}},{show:true}).then(res=>{
      if(res&&res.data&&res.data.message){
        this.setData({
          goods:[...this.data.goods,...res.data.message.goods],
        })
        this.setData({
          page:{
            total:res.data.message.total,
            pagenum:res.data.message.pagenum,
            pagesize:10
          },
        })
        //关闭下拉刷新窗口,如果没有调用下拉刷新，这个函数执行不会报错
        wx.stopPullDownRefresh()
      }
    })
  },
  //tab点击事件
  tabChange(tab){
    let tabs = tab.detail
    console.log(tabs)
  },
  onReachBottom(){
    console.log("页面触底事件")
    let totalPage = Math.ceil((this.data.page.total-57410)/10)
    if(this.data.page.pagenum>=totalPage){
      console.log("已经到头了")
      wx.showToast({
        title: '没有下一页数据了',
      })
      return
    }
    this.data.page.pagenum++
    this.getGoodsList()
  },
  onPullDownRefresh(){
    this.data.page.pagenum = 1
    this.setData({
      goods:[]
    })
    this.getGoodsList()
  }
})