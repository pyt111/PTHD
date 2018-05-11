import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//二月活动
const activeRule = resolve => require(['@/components/page/Febactivity/activeRule.vue'], resolve)
const helpMe = resolve => require(['@/components/page/Febactivity/helpMe.vue'], resolve)
const helpSuccess = resolve => require(['@/components/page/Febactivity/helpSuccess.vue'], resolve)

//生日祝福
const wishesEnd = resolve => require(['@/components/page/BirthdayWishes/wishesEnd.vue'], resolve)//结束页
const wishesRule = resolve => require(['@/components/page/BirthdayWishes/wishesRule.vue'], resolve)//礼券详情页
const wishesContent = resolve => require(['@/components/page/BirthdayWishes/wishesContent.vue'], resolve)//内容页
const buyFishes = resolve => require(['@/components/page/BirthdayWishes/buyFishes.vue'], resolve)//购买成功页
const Particulars = resolve => require(['@/components/page/BirthdayWishes/Particulars.vue'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/fixevent/2',
    query: { parent: '' },
    name: 'ActiveRule',
    component: activeRule
  },
  {
    path: '/fixevent/2/helpMe',
    query: { parent: '', phone: '' },
    name: 'helpMe',
    component: helpMe
  },
  {
    path: '/fixevent/2/helpSuccess',
    query: { parent: '' },
    name: 'helpSuccess',
    component: helpSuccess
  },
  {
    path: '/birthdayWishes/Particulars',
    query: { parent: '' },
    name: Particulars,
    component: Particulars
  },
  {
    path: '/birthdayWishes/end',
    name: wishesEnd,
    component: wishesEnd
  },
  {
    path: '/birthdayWishes/content',
    query: { parent: '' },
    name: wishesContent,
    component: wishesContent
  },
  {
    path: '/birthdayWishes/buy',
    query: { parent: '' },
    name: buyFishes,
    component: buyFishes
  }
  ]
})
