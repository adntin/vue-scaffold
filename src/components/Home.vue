<template>
  <div class="home">
    home 
    <div>ticket: {{ticket}}</div>
    <pre>userinfo: {{userinfo}}</pre>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      ticket: sessionStorage.getItem('ticket'),
      userinfo: JSON.stringify(JSON.parse(sessionStorage.getItem('userinfo')), null, 2)
    }
  },
}
</script>

<style>
.home {
  background-color: #eee;
  padding: 15px;
}
</style>
