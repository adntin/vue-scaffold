const NotFound = () => import('@/components/404')

export default {
  path: '*',
  name: 'NotFound',
  component: NotFound,
  meta: { layout: 'empty', auth: false },
}
