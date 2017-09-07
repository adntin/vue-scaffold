<template>
  <div class="login">
    <form @submit.prevent="submit">
      企业ID：<input type="text" v-model="tenant_code">
      帐号：<input type="text" v-model="user_name">
      密码：<input type="text" v-model="password">
      <button>登录</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      tenant_code: 'ksfx',
      user_name: 'lb',
      password: '1',
      skip_duplicate_entries: true,
    }
  },
  methods: {
    submit: function (event) {
      const _this = this
      // 获取ticket
      axios.post('/elearning-account/certification/center/login', {
        ..._this.$data
      })
      .then(function (response) {
        sessionStorage.setItem('ticket', response.ticket)
        sessionStorage.removeItem('userinfo')
        _this.$router.replace(_this.$route.query.redirect || '/')
      })
      .catch(function (error) {
        alert(`登录失败：${error}`)
      })
    }
  }
}
</script>

<style scoped>

</style>
