// 添加商品进购物车
/**
 * 规则：如果有商品在购物车中有，实现数量增加，如果没有，就是添加
 * @param {*} goods 
 * @param {*} number 
 */
const addBuyCars= (goods,number=1) => {
  let buysList = wx.getStorage('buyCars')?  JSON.parse(wx.getStorage('buyCars')) : []
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
  wx.setStorage('buyCars', JSON.stringify(buysList))
}

module.exports = {
  addBuyCars: addBuyCars
}
