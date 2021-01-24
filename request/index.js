
 const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1'
 const http =(params,load) =>{
  if(load&&load.show) {
    wx.showLoading({
      title: load.msg?load.msg:'加载中...',
      mask:true,
    })
  }
   
  //临时封装wxwx.request
  return new Promise((res,rej) =>{
    wx.request({
      ...params,
      url:baseUrl+params.url,
      success: (re)=> {
        res(re)
      },
      fail:(err)=>{
        rej(err)
      },
      complete:()=>{
        wx.hideLoading()
      }
    })
  })
}
export default http