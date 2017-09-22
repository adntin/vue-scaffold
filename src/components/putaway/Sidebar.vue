<template>
  <div class="putaway-sidebar">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <!-- <el-checkbox v-model="isCollapse"></el-checkbox> -->
    
    
    <el-menu default-active="" :router="true" :collapse="isCollapse">
      <el-menu-item index="/putaway/course">
        <i class="el-icon-setting"></i>
        <span slot="title">课程审核</span>
      </el-menu-item>
      <el-menu-item index="/putaway/live">
        <i class="el-icon-setting"></i>
        <span slot="title">直播审核</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">导航四</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="4-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="4-4">
          <template slot="title">选项4</template>
          <el-menu-item index="4-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
    <div class="collapse" @click="isCollapse=!isCollapse">
      <i :class="{'el-icon-d-arrow-left': !isCollapse, 'el-icon-d-arrow-right': isCollapse}"></i>
      <span v-show="!isCollapse">收起</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isCollapse: false,
        // defaultActive: $route.path,
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    computed: {
      isExpand () {
        return !this.isCollapse
      }
    }
  }
</script>

<style lang="stylus">
  .el-menu:not(.el-menu--collapse) {
    width: 300px;
  }
  .collapse
    text-align: center;
    padding: 15px;
    cursor: pointer;
    color: #48576a;
    font-size: 14px;
</style>
