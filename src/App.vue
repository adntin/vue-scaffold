<template>
  <component v-bind:is="layout" v-bind:width="width"></component>
</template>

<script>
const Default = () => import(/* webpackChunkName: "layout" */ '@/layout/Default.vue')
const Sidebar = () => import(/* webpackChunkName: "layout" */ '@/layout/Sidebar.vue')
const Empty = () => import(/* webpackChunkName: "layout" */ '@/layout/Empty.vue')

export default {
  name: 'app',
  data () {
    return {
      layout: 'default',
      width: '100%',
    }
  },
  components: {
    'default': Default,
    'sidebar': Sidebar,
    'empty': Empty,
  },
  watch: {
    $route () {
      // 最后一个matched的meta为准
      let layout = 'default'
      let width = '100%'
      this.$route.matched.forEach(record => {
        const { layout: _layout, width: _width } = record.meta
        if (_layout) {
          layout = _layout
        }
        if (_width) {
          width = _width
        }
      })
      // const layout = this.$route.meta.layout || 'default'
      // console.log(`layout: ${layout}`)
      this.$data.layout = layout
      this.$data.width = width
    }
  },
}
</script>
