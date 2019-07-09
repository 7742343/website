import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      //首页
      path: '/',
      name: 'index',
      component: index
    },
    {
      //首页
      path: '/sy',
      name: 'index',
      component: index
    },
    {
      //智能交易
      path: '/znjy',
      name: 'zhineng',
      component: index
    },
    {
      //云端跟单
      path: '/ydgd',
      name: 'yunduan',
      component: index
    },
    {
      //软件下载
      path: '/rjxz',
      name: 'updata',
      component: index
    },
    {
      //量化专区
      path: '/lhzq',
      name: 'lianghua',
      component: index
    },
    {
      //产品服务
      path: '/cpfw',
      name: 'chanping',
      component: index
    },
    {
      //投资学苑
      path: '/tzxy',
      name: 'touzi',
      component: index
    },
    {
      //关于我们
      path: '/gywm',
      name: 'guanyu',
      component: index
    },
    {
      //联系我们
      path: '/lxwm',
      name: 'lianxi',
      component: index
    }

  ]
})
