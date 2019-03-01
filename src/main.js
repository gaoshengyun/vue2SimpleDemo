// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//引入mint-ui
import Mint from 'mint-ui'
//安装插件,引入css
import 'mint-ui/lib/style.css'
Vue.use(Mint)

//引入mui的css
import './static/vendor/mui/dist/css/mui.css'


//引入axios
import Axios from 'axios'
//挂载原型
Vue.prototype.$ajax = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
