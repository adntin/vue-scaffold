<template>
  <div class="footer">
    footer 
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

<style lang="stylus">
.footer{
  // text-align: center;
  height: 100px;
}
</style>
