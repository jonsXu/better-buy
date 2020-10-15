
 const http =(params) =>{
  //临时封装wxwx.request
  return new Promise((res,rej) =>{
    wx.request({
      ...params,
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