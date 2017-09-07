<template>
  <div class="header">
    <img class="logo" src="./logo.png">
    <router-link to="/" exact>首页</router-link>
    <router-link to="/password">修改密码</router-link>
    <router-link to="/basic">基础设置</router-link>
    <router-link to="/user/1">个人中心</router-link>
    <router-link to="/contact">联系我们</router-link>
    <router-link to="/help">帮助中心</router-link>
    <router-link to="/logout">退出</router-link>
  </div>
</template>

<script>
//  target="_blank"
export default {
  name: 'header',
  data () {
    return {
      ticket: sessionStorage.getItem('ticket'),
      userinfo: JSON.stringify(JSON.parse(sessionStorage.getItem('userinfo')), null, 2)
    }
  },
}
</script>

<style lang="stylus">
.header{
  .logo {
    height: 100px;
  }
  a {
    text-decoration: none;
  }
  a.router-link-active, li.router-link-active a {
    color: #f66;
  }
  a.router-link-exact-active, li.router-link-exact-active a {
    // border-bottom: 1px solid #f66;
    color: #f66;
  }
}
</style>



