<template>
  <div id="layout-default" v-bind:style="setWidth">
    <router-view name="header"></router-view>   
    <router-view class="container"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
// 默认布局，上-中-下
export default {
  name: 'layout-default',
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
.header {
  height: 100px;
  border: 1px solid red;
}
.container {
  // width: 1200px;
  // margin: 0 auto;
  border: 1px solid black;
}
.footer {
  height: 100px;
  border: 1px solid red;
}
</style>