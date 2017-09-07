<template>
  <div class="user-sidebar">
    user sidebar
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      ticket: sessionStorage.getItem('ticket'),
      userinfo: JSON.stringify(JSON.parse(sessionStorage.getItem('userinfo')), null, 2)
    }
  },
}
</script>

<style>
.user-sidebar {
  flex-basis: 300px;
  background-color: #eee;
  margin-bottom: -9999px;
  padding-bottom: 9999px;
}
</style>
