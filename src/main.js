// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Cookies from 'js-cookie'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss' // global css
//import './common/fonts/iconfont.css'

import '@/theme/purple/index.css'
import i18n from './lang' // Internationalization
import './icons' // icon
//import './errorLog' // error log
import api from '@/http'
import {setPerson} from '@/utils/auth.js'
import './permission' // permission control
import 'babel-polyfill'
Vue.config.productionTip = false
/*
Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})
*/
Vue.use(Element)
Vue.use(api)

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  mounted(){window.vue = this},
  render: h => h(App)
})

