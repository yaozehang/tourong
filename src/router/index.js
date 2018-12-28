import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {
  layout: () => import('@/views/layout/layout'), //主视口
  home: () => import('@/views/home'),    //首页
  login: () => import('@/views/login'),   //登录
  member: () => import('@/views/member'), //会员
  activity: () => import('@/views/activity'), //活动
  activityDetail: () => import('@/views/activity/detail'), //活动详情
  message: () => import('@/views/message'), //投融资讯
  messageDetail: () => import('@/views/message/detail'), //资讯详情
  person: () => import('@/views/person'), //个人中心
  money: () => import('@/views/money'),     //找资金
  moneyDetail: () => import('@/views/moneyDetail'),     //资金详情
  project: () => import('@/views/project'),     //找项目
  investors: () => import('@/views/investors'),  // 投资人信息
  projectDetail: () => import('@/views/projectDetail'),     //项目详情
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
        },
        {
          path:'/activity/activityDetail',
          name:'activityDetail',
          component:components.activityDetail,
          meta:{
            title:'活动详情'
          }
        },
        {
          path:'/message',
          name:'message',
          component:components.message,
          meta: {
            title:'投融资讯'
          }
        },
        {
          path:'/message/messageDetail',
          name:'messageDetail',
          component:components.messageDetail,
          meta:{
            title:'资讯详情'
          }
        },
        {
          path:'/money',
          name:'money',
          component:components.money,
          meta:{
            title:'找资金'
          },
        },  
        {
          path:'/money/moneyDetail',
          name:'moneyDetail',
          component:components.moneyDetail,
          meta:{
            title:'资金详情'
          }
        },
        {
          path:'/project',
          name:'project',
          component:components.project,
          meta:{
            title:'找项目'
          }
        },
        {
          path:'/money/investors',
          name:'investors',
          component:components.investors,
          meta:{
            title:'资金详情'
          }
        },
        {
          path:'/project/projectDetail',
          name:'projectDetail',
          component:components.projectDetail,
          meta:{
            title:'项目详情'
          }
        },
        {
          path:'/person',
          name:'person',
          component:components.person,
          meta:{
            title:'个人中心'
          },
          children:[]
        }
      ]
    }
  ]
})
