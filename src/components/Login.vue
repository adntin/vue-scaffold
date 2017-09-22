<template>
  <div class="login">   
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item>
        <h1>多学运营后台</h1>
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" autofocus></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit" size="large" :loading="loading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'login',
    data () {
      return {
        form: {
          username: 'admin',
          password: '1',
        },
        rules: {
          username: [{required: true, message: '用户名必填', trigger: 'blur'}],
          password: [{required: true, message: '密码必填', trigger: 'blur'}]
        },
        loading: false
      }
    },
    methods: {
      submit () {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.loading = true
            this.login()
          } else {
            alert('验证不通过!')
            return false
          }
        })
      },
      login () {
        const _this = this
        // 获取ticket
        axios.post('/boss/login', {
          ..._this.form
        })
        .then(function (response) {
          sessionStorage.clear() // sessionStorage.removeItem('userinfo')
          sessionStorage.setItem('ticket', response.ticket)
          _this.$router.replace(_this.$route.query.redirect || '/')
        })
        .catch(function (error) {
          _this.loading = false
          alert(`登录失败：${error.message}`)
        })
      }
    }
  }
</script>

<style lang="stylus">
  .login
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
    text-align: center;
</style>
