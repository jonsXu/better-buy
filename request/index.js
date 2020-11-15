
 const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1'
 const http =(params) =>{
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
      }
    })
  })
}
export default http