<template>
  <div class="layout-default" v-bind:style="setWidth">
    <router-view name="header"></router-view>   
    <!-- <router-view class="container"></router-view> -->
    <div class="container">
      <router-view class="sidebar" name="sidebar"></router-view>
      <router-view class="main"></router-view>
    </div>
    <!-- <router-view name="footer"></router-view> -->
  </div>
</template>

<script>
// 默认布局，上-中-下
export default {
  name: 'layout-default',
  data () {
    return {
      activeIndex2: '1'
    }
  },
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

  .layout-default
    height: 100%;
    min-width: 1200px;
    .container
      display flex
      min-height: 100%;
      overflow: hidden;
      padding-top: 80px;
      box-sizing: border-box;
      .sidebar
        margin-bottom: -9999px;
        padding-bottom: 9999px;
        background: #eef1f6;
      .main
        flex: 1;
        overflow: hidden;
        padding: 25px;
        // background-color #eee
</style>