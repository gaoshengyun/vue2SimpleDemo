import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{
        name:'home'
      }
    },
    {
      path:'/home',
      name:'home',
      component:Home
    }
  ],
  linkActiveClass:'mui-active'  //默认的类叫router-link-active
})
