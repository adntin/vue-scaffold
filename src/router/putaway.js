const Header = () => import(/* webpackChunkName: "HeaderFooter" */ '@/components/header/Header')
const Footer = () => import(/* webpackChunkName: "HeaderFooter" */ '@/components/Footer')

const Main = () => import(/* webpackChunkName: "putaway" */ '@/components/putaway/Main')
const Sidebar = () => import(/* webpackChunkName: "putaway" */ '@/components/putaway/Sidebar')
const Home = () => import(/* webpackChunkName: "putaway" */ '@/components/putaway/Home')
const Live = () => import(/* webpackChunkName: "putaway" */ '@/components/putaway/Live')
const CourseList = () => import(/* webpackChunkName: "putaway" */ '@/components/putaway/CourseList')
const CourseForm = () => import(/* webpackChunkName: "putaway" */ '@/components/putaway/CourseForm')

export default {
  path: '/putaway',
  // name: 'User',
  components: {
    header: Header,
    footer: Footer,
    default: Main,
    sidebar: Sidebar,
  },
  children: [{
    path: '',
    name: 'PutawayHome',
    component: Home,
  }, {
    path: 'live',
    name: 'PutawayLive',
    component: Live,
  }, {
    path: 'course',
    name: 'CourseList',
    component: CourseList,
  }, {
    path: 'course/:id',
    name: 'CourseForm',
    component: CourseForm,
  }],
}
