// 添加商品进购物车
/**
 * 规则：如果有商品在购物车中有，实现数量增加，如果没有，就是添加
 * @param {*} goods 
 * @param {*} number 
 */
const addBuyCars= (goods,number=1) => {
  let buysList = wx.getStorageSync('buyCars')?  JSON.parse(wx.getStorageSync('buyCars')) : []
  let flag = 0 // flag 小于-1的时候，就代表已经找到了当前商品
  for(let i = 0;i<buysList.length ;i++) {
    let item = buysList[i]
    if(item.goods.goodsId === goods.goodsId) {
      item.number = item.number+number
      break;
    } else {
      if(i===buysList.length-1) {
        buysList.push({goods:goods,number: number})    
      }
    }
  }
  wx.setStorageSync('buyCars', JSON.stringify(buysList))
}
const addSaveList= (goods,number=1) => {
  let list = wx.getStorageSync('saveList')?JSON.parse(wx.getStorageSync('saveList')):[]
  let flag = 0 // flag 小于-1的时候，就代表已经找到了当前商品
  if(list.length > 0) {
    for(let i = 0;i<list.length ;i++) {
      let item = list[i]
      if(item.goods.goodsId === goods.goodsId) {
        item.number = item.number+number
        break;
      } else {
        if(i===list.length-1) {
          list.push({goods:goods,number: number})    
        }
      }
    }
  } else {
    list.push({goods:goods,number: number})
  }
  wx.setStorageSync('saveList', JSON.stringify(list))
}
module.exports = {
  addBuyCars: addBuyCars,
  addSaveList: addSaveList
}
