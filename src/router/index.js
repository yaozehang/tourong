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
  money: () => import('@/views/money'),     //找资金
  moneyDetail: () => import('@/views/moneyDetail'),     //资金详情
  project: () => import('@/views/project'),     //找项目
  investors: () => import('@/views/investors'),  // 投资人信息
  projectDetail: () => import('@/views/projectDetail'),     //项目详情
  person: () => import('@/views/person'), //个人中心视口
  personCenter: () => import('@/views/person/person'), //个人中心
  weeklyReport: () => import('@/views/person/weeklyReport'), //周报
  weeklyReportDetail: () => import('@/views/person/weeklyReport/detail'), //周报详情
  fastReport: () => import('@/views/person/fastReport'), //快报
  memberAttest: () => import('@/views/person/memberAttest'), //会员认证
  myActivity: () => import('@/views/person/myActivity'), //我报名的活动
  myAttention: () => import('@/views/person/myAttention'), //我的关注
  attentionProject: () => import('@/views/person/myAttention/project'), //关注的项目
  attentionMoney: () => import('@/views/person/myAttention/money'), //关注的资金
  attentionlabel: () => import('@/views/person/myAttention/label'), //标签设置
  myData: () => import('@/views/person/myData'), //我的资料
  myDemand: () => import('@/views/person/myDemand'), //我的需求
  myMoney: () => import('@/views/person/myMoney'), //我的资金
  applyMoney: () => import('@/views/person/myMoney/apply'), //发布资金
  uploadApplyMoney: () => import('@/views/person/myMoney/uploadApply'),//上传资金
  myProject: () => import('@/views/person/myProject'), //我的项目
  applyProject: () => import('@/views/person/myProject/apply'), //发布项目
  manageProject: () => import('@/views/person/myProject/manage'), //动态管理
  uploadApplyProject: () => import('@/views/person/myProject/uploadApply'),//上传资金
  addDynamic: () => import('@/views/person/myProject/addDynamic'), //添加动态
  inform: () => import('@/views/person/inform'),//消息中心
  informDetail: () => import('@/views/person/inform/detail'),//消息内容
  search: () => import('@/views/search'), //搜索列表
  searchMoney: () => import('@/views/search/money'), //搜索资金
  searchProject: () => import('@/views/search/project'), //搜索项目
  searchMessage: () => import('@/views/search/message'),//搜索资讯
  aboutUs: () => import('@/views/aboutUs'), //关于我们
  callUs: () => import('@/views/aboutUs/call'), //联系我们
  seriver:() => import('@/views/serverBottom/seriver'),
  yinsi:() => import('@/views/serverBottom/yinsi'),
  mianze: () => import('@/views/serverBottom/mianze'),
}

const router = new Router({
  routes: [
    {
      path:'/login',
      component: components.login,
      meta:{
        title:'投融连线-登录'
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
            title:"投融连线-首页"
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
            title:'活动',
            keepAlive:true
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
            title:'投融资讯',
            keepAlive:true
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
            title:'找资金',
            keepAlive:true
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
            title:'找项目',
            keepAlive:true
          }
        },
        {
          path:'/money/moneyDetail/investors',
          name:'investors',
          component:components.investors,
          meta:{
            title:'详情'
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
          path:'/seriver',
          name:'seriver',
          component:components.seriver,
          meta:{
            title:'服务条款'
          }
        },
        {
          path:'/yinsi',
          name:'yinsi',
          component:components.yinsi,
          meta:{
            title:'隐私条款'
          }
        },
        {
          path:'/mianze',
          name:'mianze',
          component:components.mianze,
          meta:{
            title:'免责声明'
          }
        },
        {
          path:'/search',
          name:'search',
          redirect:'/search/money',
          component:components.search,
          meta:{
            title:'搜索列表',
            keepAlive:true
          },
          children:[
            {
              path:'searchMoney',
              name:'searchMoney',
              component:components.searchMoney,
              meta:{
                title:'搜索列表-资金',
                keepAlive:true
              },
            },
            {
              path:'searchProject',
              name:'searchProject',
              component:components.searchProject,
              meta:{
                title:'搜索列表-项目',
                keepAlive:true
              },
            },
            {
              path:'searchMessage',
              name:'searchMessage',
              component:components.searchMessage,
              meta:{
                title:'搜索列表-资讯',
                keepAlive:true
              },
            },
          ]
        },
        {
          path:'/aboutUs',
          name:'aboutUs',
          component:components.aboutUs,
          meta:{
            title:'关于我们',
          },
        },
        {
          path:'/callUs',
          name:'callUs',
          component:components.callUs,
          meta:{
            title:'联系我们',
          },
        },
        {
          path:'/person',
          name:'person',
          redirect:'/person/personCenter',
          component:components.person,
          meta:{
            title:'个人中心'
          },
          children:[
            {
              path:'personCenter',
              name:'personCenter',
              component:components.personCenter,
              meta:{
                title:'个人中心'
              }
            },
            {
              path:'weeklyReport',
              name:'weeklyReport',
              component:components.weeklyReport,
              meta:{
                title:'周报'
              }
            },
            {
              path:'/person/weeklyReport/weeklyReportDetail',
              name:'weeklyReportDetail',
              component:components.weeklyReportDetail,
              meta:{
                title:'周报详情'
              }
            },
            {
              path:'fastReport',
              name:'fastReport',
              component:components.fastReport,
              meta:{
                title:'及时快报'
              }
            },
            {
              path:'memberAttest',
              name:'memberAttest',
              component:components.memberAttest,
              meta:{
                title:'会员认证'
              }
            },
            {
              path:'myActivity',
              name:'myActivity',
              component:components.myActivity,
              meta:{
                title:'我报名的活动'
              }
            },
            {
              path:'myAttention',
              name:'myAttention',
              component:components.myAttention,
              redirect:'/person/myAttention/attentionProject',
              meta:{
                title:'我的关注'
              },
              children:[
                {
                  path:'attentionProject',
                  name:'attentionProject',
                  component:components.attentionProject,
                  meta:{
                    title:'关注的项目'
                  }
                },
                {
                  path:'attentionMoney',
                  name:'attentionMoney',
                  component:components.attentionMoney,
                  meta:{
                    title:'关注的资金'
                  }
                },
                {
                  path:'label',
                  name:'label',
                  component:components.attentionlabel,
                  meta:{
                    title:'标签设置'
                  }
                },
              ]
            },
            {
              path:'myData',
              name:'myData',
              component:components.myData,
              meta:{
                title:'我的资料'
              }
            },
            {
              path:'myDemand',
              name:'myDemand',
              component:components.myDemand,
              meta:{
                title:'需求填报'
              }
            },
            {
              path:'myMoney',
              name:'myMoney',
              component:components.myMoney,
              meta:{
                title:'我的资金'
              }
            },
            {
              path:'applyMoney',
              name:'applyMoney',
              component:components.applyMoney,
              meta:{
                title:'我的资金 > 发布资金'
              }
            },
            {
              path:'uploadApplyMoney',
              name:'uploadApplyMoney',
              component:components.uploadApplyMoney,
              meta:{
                title:'我的资金 > 上传资金'
              }
            },
            {
              path:'uploadApplyProject',
              name:'uploadApplyProject',
              component:components.uploadApplyProject,
              meta:{
                title:'我的项目 > 上传项目'
              }
            },
            {
              path:'myProject',
              name:'myProject',
              component:components.myProject,
              meta:{
                title:'我的项目'
              }
            },
            {
              path:'applyProject',
              name:'applyProject',
              component:components.applyProject,
              meta:{
                title:'我的项目 > 发布项目'
              }
            },
            {
              path:'manageProject',
              name:'manageProject',
              component:components.manageProject,
              meta:{
                title:'我的项目 > 动态管理'
              }
            },
            {
              path:'inform',
              name:'inform',
              component:components.inform,
              meta:{
                title:'消息通知'
              }
            },
            {
              path:'informDetail',
              name:'informDetail',
              component:components.informDetail,
              meta:{
                title:'消息内容'
              }
            }
          ]
        }
      ]
    }
  ],
})

// router.afterEach((to,from,next) => {

//   window.scrollTo(0,0);

// })

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next()
})

export default router