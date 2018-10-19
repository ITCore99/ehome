import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/index'
Vue.use(Router);
const components= {
  Home: () => import('@/views/home'),
  NOtice: () => import('@/views/notice'),
  Details: () => import('@/views/detail'),
  Mine: () => import('@/views/mine'),
  Login: () => import('@/views/login'),
  NewsEye: () => import('@/views/showList'),
  showListDetail: () => import('@/views/showListDetail'),
  miniOrg: () => import('@/views/miniOrganization'),
  fristWhiff: () => import('@/views/firstWhiff'),
  identifers: () => import('@/views/identity'),
  hisToday: () => import('@/views/TodayHis'),
  study: () => import('@/views/PoStudy'),
  anyTimeWhere: () => import('@/views/anytimeAnywhere'),
  regime: () => import('@/views/regime'),
  specail: () => import('@/views/specialActivity'),
  map: () => import('@/views/map'),
  photo: ()=>import('@/views/photos'),
  cloud:()=>import('@/views/cloudItem'),
  integral:()=>import('@/views/integral'),
  integralDetail:()=>import('@/views/integralDetail'),
  payFee:()=>import('@/views/payfee'),
  changePassword:()=>import('@/views/changePassword'),
  updateUserinfo:()=>import('@/views/updateInfo'),
  reply:()=>import('@/views/reply'),
  experience:()=>import('@/views/experience'),
  thinking:()=>import('@/views/thinking'),
  democratic:()=>import('@/views/democratic'),
  summary:()=>import('@/views/summary'),
  democraticDetail:()=>import('@/views/democraticDetail/democrationDetail'),
  democraticNext:()=>import('@/views/democraticDetail/democraticNext')
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: "/home",
      children:[
        {
          path:"home",
          name:"首页",
          component:components.Home
        },
        {
          path:"notice",
          name:"通知",
          component:components.NOtice,
        },
        {
          path:"details",
          name:"通知内容",
          component:components.Details,
        },
        {
          path:"mine",
          name:"我的党建",
          component:components.Mine,
        }
       ]
    },
    {
      path:"/login",
      name:"登陆",
      component:components.Login,
    },
    {
      path:"/newsEye",
      name:"信工新闻眼",
      component:components.NewsEye,
    },
    {
      path:"/showDetail",
      name:"新闻眼详情页",
      component:components.showListDetail
    },
    {
      path:"/miniOrg",
      name:"掌上组织生活",
      component:components.miniOrg,

    },
    {
      path:'/fristWhiff',
      name:'党建一点通',
      component:components.fristWhiff,
    },
    {
      path:"/identer",
      name:"党员亮身份",
      component:components.identifers,
    },
    {
      path:"/today",
      name:"党史上的今天",
      component:components.hisToday
    },
    {
      path:"/study",
      name:"政治学习",
      component:components.study,
    },
    {
      path:"/anytimeAnywhere",
      name:"随时随地学",
      component:components.anyTimeWhere
    },
    {
      path:'/regime',
      name:"制度建设",
      component:components.regime
    },
    {
      path:"/specail",
      name:"特色活动",
      component:components.specail
    },
    {
       path:"/map",
       name:"流动党员找组织",
       component:components.map
    },
    {
      path:"/photo",
      name:"随时随地拍",
      component:components.photo
    },
    {
      path:"/cloud",
      name:"党员云互动",
      component:components.cloud,
    },
    {
      path:"/integral",
      name:"个人量化积分",
      component:components.integral
    },
    {
      path:'/integralDetail',
      name:"积分明细",
      component:components.integralDetail
    },
    {
      path:'/payfee',
      name:'党费缴纳',
      component:components.payFee
    },
    {
      path:'/changePassword',
      name:'修改密码',
      component:components.changePassword
    },
    {
      path:'/updateInfo',
      name:"修改个人信息",
      component:components.updateUserinfo
    },
    {
      path:"/reply",
      name:"回复消息",
      component:components.reply
    },
    {
      path:"/experience",
      name:"心得体会",
      component:components.experience
    },
    {
      path:"/thinking",
      name:"思想汇报",
      component:components.thinking
    },
    {
      path:"/democratic",
      name:"/民主评议",
      component:components.democratic,
    },
    {
      path:"/summary",
      name:"/个人总结",
      component:components.summary,
    },
    {
      path:"/democraticDetail",
      name:"/民主评议详情页",
      component:components.democraticDetail,
    },
    {
      path:"/democraticNext",
      name:"/民主评议下一页",
      component:components.democraticNext,
    }

  ]
})
