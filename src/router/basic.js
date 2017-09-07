const Header = () => import(/* webpackChunkName: "HeaderFooter" */ '@/components/header/Header')
const Footer = () => import(/* webpackChunkName: "HeaderFooter" */ '@/components/Footer')

const Basic = () => import(/* webpackChunkName: "basic" */ '@/components/basic/Basic')
const BasicSidebar = () => import(/* webpackChunkName: "basic" */ '@/components/basic/BasicSidebar')
const BasicHome = () => import(/* webpackChunkName: "basic" */ '@/components/basic/BasicHome')
const BasicList = () => import(/* webpackChunkName: "basic" */ '@/components/basic/BasicList')
const BasicForm1 = () => import(/* webpackChunkName: "basic" */ '@/components/basic/BasicForm1')
const BasicForm2 = () => import(/* webpackChunkName: "basic" */ '@/components/basic/BasicForm2')

export default {
  path: '/basic',
  // name: 'Basic',
  components: {
    header: Header,
    footer: Footer,
    default: Basic,
    sidebar: BasicSidebar,
  },
  meta: { layout: 'sidebar', width: '1200px' },
  children: [{
    path: '',
    name: 'BasicHome',
    component: BasicHome,
  }, {
    path: 'list1',
    name: 'BasicList1',
    component: BasicList,
    meta: { width: '100%' },
  }, {
    path: 'list2',
    name: 'BasicList2',
    component: BasicList,
  }, {
    path: 'form1',
    name: 'BasicForm1',
    component: BasicForm1,
    meta: { width: '100%' },
  }, {
    path: 'form2',
    name: 'BasicForm2',
    component: BasicForm2,
  }],
}
