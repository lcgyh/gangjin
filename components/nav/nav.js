// components/nav.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navbarData: { //navbarData   由父页面传递的数据，变量名字自命名
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {}
    },
    back: {
      type: Boolean,
      value: false
    },
    isself: {
      type: Boolean,
      value: false //false表示不自定义
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    height: '',
    //默认值  默认显示左上角
    navbarData: {
      showCapsule: false,
      showSelf:false
    },
    back: false,
    isself: false,
  },
  attached: function () {
    // 定义导航栏的高度   方便对齐
    this.setData({
      height: app.globalData.statusBarHeight + 2
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 返回上一页面
    _navback(e) {
      console.log('e', e)
      if (e.currentTarget.dataset.isself) {
        this.triggerEvent('bacKMeth');
      } else {
        wx.navigateBack()
      }
    },
    //返回到首页
    _backhome() {
      wx.switchTab({
        url: '/pages/index/index',
      })
    }
  }
})