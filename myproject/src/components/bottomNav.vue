<template>
  <div class="bottomNav-wrap">
     <div class="left">
     </div>
     <div class="right">
       <router-link to="/anytimeAnywhere"></router-link>
       <router-link to="/photo"></router-link>
       <router-link to="/regime"></router-link>
       <router-link to="/specail"></router-link>
     </div>
  </div>
</template>

<script>
    export default {
        name: "bottomNav"
    }
</script>

<style scoped>
.bottomNav-wrap
{
  width: 7.5rem;
  display: flex;
  justify-content:space-between;
  background: url("../image/images/channelType@2x.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom:48px;
}
.left
{
  width:2.5rem;
  height:3.28rem;
}
a{
  display: block;
  width:2.5rem;
  height:1.64rem ;
}
.right
{
  width:5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
