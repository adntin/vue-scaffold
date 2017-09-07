<template>
  <div id="layout-empty" v-bind:style="setWidth">
    <router-view class="container"></router-view>
  </div>
</template>

<script>
// 空布局，只有内容
export default {
  name: 'layout-empty',
  props: {
    width: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    setWidth: function () {
      return {
        width: this.width,
        margin: '0 auto',
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
* {
  margin: 0;
  padding: 0;
}
</style>