// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'
import store from './store.js'
import commonjs from '@/assets/common.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(commonjs)
Vue.prototype.$ajax = axios
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.interceptors.request.use(
  function (config) {
    if (config.method == 'post' && store.state.logged == false) {
      router.push('/login')
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
