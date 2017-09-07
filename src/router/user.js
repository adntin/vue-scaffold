const Header = () => import(/* webpackChunkName: "HeaderFooter" */ '@/components/header/Header')
const Footer = () => import(/* webpackChunkName: "HeaderFooter" */ '@/components/Footer')

const User = () => import(/* webpackChunkName: "user" */ '@/components/user/User')
const UserSidebar = () => import(/* webpackChunkName: "user" */ '@/components/user/UserSidebar')
const UserHome = () => import(/* webpackChunkName: "user" */ '@/components/user/UserHome')
const UserProfile = () => import(/* webpackChunkName: "user" */ '@/components/user/UserProfile')
const UserPosts = () => import(/* webpackChunkName: "user" */ '@/components/user/UserPosts')

export default {
  path: '/user/:id',
  // name: 'User',
  components: {
    header: Header,
    footer: Footer,
    default: User,
    sidebar: UserSidebar,
  },
  meta: { layout: 'sidebar' },
  children: [{
    path: '',
    name: 'UserHome',
    component: UserHome,
  }, {
    path: 'profile',
    name: 'UserProfile',
    component: UserProfile,
  }, {
    path: 'posts',
    name: 'UserPosts',
    component: UserPosts,
    meta: { layout: 'default' },
  }],
}
