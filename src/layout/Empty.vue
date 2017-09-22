<template>
  <div class="layout-empty" v-bind:style="setWidth">
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

<style lang="stylus">
@import "../common/css/index.styl";

.layout-empty
  min-height: 100%;
</style>