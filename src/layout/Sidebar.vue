<template>
  <div class="layout-sidebar" v-bind:style="setWidth">
    <router-view name="header"></router-view>
    <div class="container">
      <router-view name="sidebar"></router-view>
      <router-view></router-view>
    </div>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
// 侧导航布局，上-左右-下
export default {
  name: 'layout-sidebar',
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

.layout-sidebar
  .header
    height: 100px;
    border: 1px solid red;
  .container
    display: flex;
    border: 1px solid black;
    overflow: hidden;
  .footer
    height: 100px;
    border: 1px solid red;
    clear: both;
</style>