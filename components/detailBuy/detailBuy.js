// components/tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeTab:1,
  },

  /**
   * 组件的方法列表
   */
  methods: {
      //tab点击事件
    tabClick(e){
      let tab = e.currentTarget.dataset.navindex
      this.setData({
        activeTab:tab.id
      })
      this.triggerEvent("change",{tab})
    }
  }
})
