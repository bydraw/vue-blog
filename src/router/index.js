import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import HomePage from '@/components/Homepage'
import Blog from '@/components/Blog'
import BlogDetail from '@/components/BlogDetail'
import store from '@/store.js'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path:'/blogdetail',
      name: 'BlogDetail',
      component: BlogDetail
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (store.state.logged || Vue.prototype.getCookie('logged')) {
    if (to.path == '/login') {
      return
    } else {
      next()
    }
  }
  else {
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})

export default router
