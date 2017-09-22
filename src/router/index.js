import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

const Header = () => import(/* webpackChunkName: "HeaderFooter" */ '@/components/header/Header')
const Footer = () => import(/* webpackChunkName: "HeaderFooter" */ '@/components/Footer')

const Home = () => import('@/components/Home')
const Password = () => import('@/components/Password')
const Contact = () => import('@/components/Contact')
const Login = () => import('@/components/Login')

import putaway from './putaway'
import basic from './basic'
import user from './user'
import help from './help'
import notFound from './404'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'Home',
  components: {
    header: Header,
    default: Home,
    footer: Footer,
  },
}, {
  path: '/password',
  name: 'Password',
  components: {
    header: Header,
    footer: Footer,
    default: Password,
  },
  meta: { width: '1200px' },
}, {
  path: '/contact',
  name: 'Contact',
  component: Contact,
  meta: { layout: 'empty', auth: false },
}, {
  path: '/login',
  name: 'Login',
  component: Login,
  meta: { layout: 'empty', auth: false },
}, {
  path: '/logout',
  beforeEnter (to, from, next) {
    sessionStorage.clear()
    // todo call logout api
    next('/login')
  },
}]

routes.push(putaway)
routes.push(basic)
routes.push(user)
routes.push(help)
routes.push(notFound)

// meta 说明
// auth授权: true(默认), false;
// layout布局: default-默认(上中下), sidebar-侧导航(上左右下), empty-只有内容
const router = new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
})

// 判断登录
router.beforeEach((to, from, next) => {
  if (to.query.ticket) {
    // 免登
    sessionStorage.setItem('ticket', to.query.ticket)
    getUserInfo(to, next)
  } else if (to.matched.length > 0 && to.matched[0].meta.auth === false) {
    // 不需要登录
    next()
  } else if (sessionStorage.getItem('ticket')) {
    // ticket 存在
    if (sessionStorage.getItem('userinfo')) {
      // userinfo 存在
      next()
    } else {
      // userinfo 不存在
      getUserInfo(to, next)
    }
  } else {
    // ticket 不存在
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
})

// todo 判断权限
router.beforeEach((to, from, next) => {
  // console.log(3)
  next()
  // console.log(33)
})

const getUserInfo = (to, next) => {
  // axios.get('/elearning-account/account/getLoginInfo')
  axios.get('/boss/userinfo')
  .then(function (response) {
    sessionStorage.setItem('userinfo', JSON.stringify(response))
    next()
  })
  .catch(function (error) {
    alert(`获取用户信息失败：${error}`)
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  })
}

// 拦截请求
axios.interceptors.request.use(function (config) {
  config.headers.common.ticket = sessionStorage.getItem('ticket')
  config.headers.common.source = 'web-pc'
  return config
}, function (error) {
  return Promise.reject(error)
})

// 拦截返回
axios.interceptors.response.use(function (response) {
  switch (response.status) {
    case 200:
      return response.data
    default:
      return response
  }
}, function (error) {
  switch (error.response.status) {
    case 401:
      alert(error.response.data.message) // 登录凭证已失效
      router.replace({
        path: '/login',
        query: { redirect: router.currentRoute.fullPath }
      })
      return Promise.reject()
    default:
      return Promise.reject(error.response.data)
  }
})

export default router
