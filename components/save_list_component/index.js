// components/save_list_component/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    },
    btns: {
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showList:[],
    activeQuery: '1',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    filterList() {
      let showList = this.properties.list.map(item => {
        if (this.data.activeQuery === '1') {
          return item.goods
        } else{
          return {}
        }
      })
      this.setData({'showList': showList})
    },
    btnClick(e) {
      let active = e.currentTarget.dataset.active
      this.setData({
        activeQuery:active
      })
      this.filterList()
    }
  },
  ready() {
    this.filterList()
  }
})
