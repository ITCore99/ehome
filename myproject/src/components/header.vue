<template>
    <div class="header-wraper">
      <div class="wrap" v-if="!$store.state.title">
        <div class="header-image">
          <img src="../image/images/logo.png" class="IMg">
        </div>
        <div v-if="!$store.state.userInfo.username" class="header-login" @click="$router.push('/login')">登陆</div>
      </div>
      <div v-else  class="menu">{{this.$store.state.title}}</div>
    </div>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>
  .header-wraper
  {
    font-size: 16px;
    background:#c50206;
    position: fixed;
    top:0px;
    left:0px;
    right: 0px;
    z-index: 998;
    width: 7.5rem;
    height: 44px;
  }
  .wrap
  {
    display: flex;
    justify-content: space-between;
  }
  .header-image
  {
    width:146px;
    height:44px;
    display: flex;
    align-items: center;
    padding-left: 15px;
  }
  .IMg
  {
    width:130px;
    display: block;
  }
  .header-login
  {
    display: flex;
    padding-right: 15px;
    align-items: center;
    color:#fff;

  }
  .menu
  {
    text-align: center;
    line-height: 44px;
    color:#fff;
  }
</style>
