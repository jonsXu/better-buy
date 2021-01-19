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
    http({ url: '/goods/search',data:{query:this.data.queryKey,pagenum:this.data.page.pagenum,pagesize:10}}).then(res=>{
      if(res&&res.data&&res.data.message){
        this.setData({
          goods:[...this.data.goods,...res.data.message.goods],
        })
        this.setData({
          page:{
            total:res.data.message.total,
            pagenum:this.data.curpage,
            pagesize:10
          },
        })
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
    let totalPage = Math.ceil(this.data.page.total/10)
    if(this.data.page.pagenum>=totalPage){
      console.log("已经到头了")
      return
    }
    this.data.curpage++
    this.getGoodsList()
  }
})