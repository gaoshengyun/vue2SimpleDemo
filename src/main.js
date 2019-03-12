// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state:{
    shopcar:[], //将购物车中商品的数据用一个数组存储起来
  },
  mutations:{
    addToShopcar(state,goodsinfo){
      var flag = false

      state.shopcar.some(item => {
        
          item.count += parseInt(goodsinfo.count)
          console.log(goodsinfo)
          flag = true
          return true
        
      })

      if (!flag) {
        state.shopcar.push(goodsinfo)
      }

      //保存在本地
      localStorage.setItem('shopcar',stringify(state.shopcar))


    }
  },
  getters:{
    getAllCount(state){
      var c = 0
      state.shopcar.forEach(item => {
        c += item.count
      })
      return c
    }
  }
})

//引入mint-ui
import Mint from 'mint-ui'
//安装插件,引入css
import 'mint-ui/lib/style.css'
Vue.use(Mint)

//引入mui的css
import './static/vendor/mui/dist/css/mui.css'

//引入moment
import moment from 'moment'


//引入axios
import Axios from 'axios'
//挂载原型
Vue.prototype.axios = Axios
Vue.prototype.axios.defaults.baseURL = ' https://www.easy-mock.com/mock/5c78cca3d8ddc93ba50ca103/mockdata'

//引入vue-preview
import VuePreview from 'vue-preview'
import { stringify } from 'querystring';
Vue.use(VuePreview)

//全局过滤器
Vue.filter('dataFormat',function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss'){
  return moment(dataStr).format(pattern)
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
