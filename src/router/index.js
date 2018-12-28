import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {
  layout: () => import('@/views/layout/layout'), //主视口
  home: () => import('@/views/home'),    //首页
  login: () => import('@/views/login'),   //登录
  member: () => import('@/views/member'), //会员
  activity: () => import('@/views/activity'), //活动
}

export default new Router({
  routes: [
    {
      path:'/login',
      component: components.login,
      meta:{
        title:'登录'
      }
    },
    {
      path: '/',
      redirect:'/home',
      component: components.layout,
      children:[
        {
          path:'/home',
          name:'home',
          component:components.home,
          meta:{
            title:"首页"
          }
        },
        {
          path:'/member',
          name:'member',
          component:components.member,
          meta: {
            title:'会员'
          }
        },
        {
          path:'/activity',
          name:'activity',
          component:components.activity,
          meta:{
            title:'活动'
          }
        }
      ]
    }
  ]
})
