<template>
  <div class="header">
     <div class="brand">多学运营后台</div>
    <div class="nav">
      <!-- <router-link to="/" exact>首页</router-link>
      <router-link to="/password">修改密码</router-link>
      <router-link to="/basic">基础设置</router-link>
      <router-link to="/user/1">个人中心</router-link>
      <router-link to="/contact">联系我们</router-link>
      <router-link to="/help">帮助中心</router-link>
      <router-link to="/logout">退出</router-link>  -->
      <router-link to="/" exact>首页</router-link>
      <router-link to="/putaway">上架管理</router-link>
      <router-link to="/2">订单管理</router-link>
      <router-link to="/3">账务管理</router-link>
      <router-link to="/4">系统管理</router-link>
      <router-link to="/5">讲师管理</router-link>
      <router-link to="/6">运营管理</router-link>
      <router-link to="/7">新租户管理</router-link>
      <router-link to="/8">旧租房管理</router-link>
      <router-link to="/9">多学答人配置</router-link>
      <router-link to="/10">修改密码</router-link>
      <router-link to="/logout">退出</router-link>
      <router-link to="/11">admin</router-link>
    </div>
    <!-- <div class="user">
      <el-dropdown>
        <span class="el-dropdown-link">
          admin<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改密码</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>  -->


    <!-- <div class="brand">多学运营后台</div>
    <div class="nav">
      <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">上架管理</template>
          <el-menu-item index="2-1">课程审核</el-menu-item>
          <el-menu-item index="2-2">直播审核</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">订单管理</template>
          <el-menu-item index="3-1">企业订单</el-menu-item>
          <el-menu-item index="3-2">个人订单</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">账务管理</template>
          <el-menu-item index="4-1">充值管理</el-menu-item>
          <el-menu-item index="4-2">直播服务记录</el-menu-item>
          <el-menu-item index="4-3">短信充值管理</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">系统管理</template>
          <el-menu-item index="5-1">账号管理</el-menu-item>
          <el-menu-item index="5-2">角色管理</el-menu-item>
        </el-submenu>
        <el-menu-item index="6">讲师管理</el-menu-item>
        <el-menu-item index="7">运营管理</el-menu-item>
         <el-submenu index="8">
          <template slot="title">新租房管理</template>
          <el-menu-item index="8-1">开通直播</el-menu-item>
          <el-menu-item index="8-2">开通多学答人</el-menu-item>
          <el-menu-item index="8-3">社区管理</el-menu-item>
        </el-submenu>
        <el-menu-item index="9"><a href="https://cms.91yong.com" target="_blank">旧租户管理</a></el-menu-item>
        <el-menu-item index="10"><a href="http://daren.91yong.com/logview" target="_blank">多学答人配置</a></el-menu-item>
        <el-submenu index="11">
          <template slot="title">admin</template>
          <el-menu-item index="11-1">修改密码</el-menu-item>
          <el-menu-item index="11-2">退出</el-menu-item>
        </el-submenu>
      </el-menu>
    </div> -->
  </div>
</template>

<script>
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
  // .header
  //   display flex
  //   box-sizing: border-box;
  //   background-color: #eef1f6;
  //   color: #48576a;
  //   margin-bottom 20px
  //   .brand
  //     display inline-flex
  //     line-height 60px
  //     padding: 0 20px;
  //   .nav
  //     flex 1
  .header
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgb(32, 160, 255);
    height: 80px;
    min-width: 1200px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    .brand
      display: inline-block;
      vertical-align: top;
      line-height: 80px;
      font-size: 20px;
      font-weight: 700;
      color: #fff;
    .nav
      display: inline-block;
      vertical-align: top;
      float right 
      a
        color: #fff;
        display: inline-block;
        vertical-align: top;
        padding: 0 10px;
        margin: 0 10px;
        line-height: 80px;
        cursor: pointer;
        text-decoration: none;
        opacity: 0.8;      
        position: relative;
        &:hover
          opacity: 1;
        &.active
          opacity: 1;
          font-weight: 700;
          &:before
            content: "";
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: #99d2fc;

    .user
      display: inline-block;
      vertical-align: top;
      line-height: 80px;
      padding: 0 10px;
      margin: 0 10px;
      opacity: 0.8;
      cursor: pointer;
      &:hover
        opacity: 1;
      .el-dropdown
        color: #fff;
        font-size: inherit;
  @media (max-width: 1600px)
    .header 
      .nav
        a
          padding: 0 5px;
          margin: 0 5px;
  @media (max-width: 1300px)
    .header 
      .nav
        a
          font-size: 12px;

</style>



