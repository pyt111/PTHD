// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'babel-polyfill' //ie兼容必备
import 'fetch-polyfill' //手机浏览器兼容
import AwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'muse-ui/dist/muse-ui.css'
import MuseUI from 'muse-ui'

import axiosMetonds from 'static/js/axiosMetonds'

// import '@/config/theme.less'
import '@/config/icon/iconfont.js'
import '@/tools/flexible.js'



Vue.use(MuseUI)
Vue.use(AwesomeSwiper)
Vue.config.productionTip = false

Vue.use(axiosMetonds,{someOption:true});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
