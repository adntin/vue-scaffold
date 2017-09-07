// const Header = () => import(/* webpackChunkName: "HeaderFooter" */ '@/components/header/Header')
const Footer = () => import(/* webpackChunkName: "HeaderFooter" */ '@/components/Footer')

const Help = () => import(/* webpackChunkName: "help" */ '@/components/help/Help')
const HelpSidebar = () => import(/* webpackChunkName: "help" */ '@/components/help/HelpSidebar')
const HelpHome = () => import(/* webpackChunkName: "help" */ '@/components/help/HelpHome')
const Help1 = () => import(/* webpackChunkName: "help" */ '@/components/help/Help1')
const Help2 = () => import(/* webpackChunkName: "help" */ '@/components/help/Help2')

export default {
  path: '/help',
  // name: 'Help',
  components: {
    default: Help,
    footer: Footer,
    sidebar: HelpSidebar,
  },
  meta: { layout: 'sidebar', auth: false },
  children: [{
    path: '',
    name: 'HelpHome',
    component: HelpHome,
  }, {
    path: '1',
    name: 'Help1',
    component: Help1,
  }, {
    path: '2',
    name: 'Help2',
    component: Help2,
  }],
}
