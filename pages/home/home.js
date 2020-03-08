  // pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:["衣服", "鞋子", "裤子","项链"],
    swiper:[],
    recommend:[],
    taber:[]
  },
  // headleShowToast(){
  //       wx.showToast({
          
  //           title:"你好啊",
  //           image:"/assets/home_active.png"
  //       })

  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求轮播图信息
    wx.request({
      url: "http://123.207.32.32:8000/home/multidata",
      success: (res) => {
        console.log(res)
        const swiper = res.data.data.banner.list;
        const recommend = res.data.data.recommend.list;
        const taber = res.data.data.keywords.list;
        this.setData({
          swiper: swiper,
          recommend: recommend,
          taber: taber
        })

      }

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})