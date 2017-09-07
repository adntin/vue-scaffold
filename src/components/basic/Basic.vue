<template>
  <div class="basic-main">
    <!-- 基础设置 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      ticket: sessionStorage.getItem('ticket'),
      userinfo: JSON.stringify(JSON.parse(sessionStorage.getItem('userinfo')), null, 2)
    }
  },
}
</script>

<style>
.basic-main {
  flex: 1;
  margin-bottom: -9999px;
  padding-bottom: 9999px;
}
</style>