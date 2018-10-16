<template>
    <div class="nav-wrap">
        <div class="title">
           <span>{{options}}</span>
        </div>
        <i class="back" @click="handlerBack"></i>
    </div>
</template>

<script>
    export default {
        name: "Hnav",
        props:{
          options:{
            type:String,
          }
        },
        data()
        {
          return{
            title:"登陆"
          }
        },
        methods:{
          handlerBack()
          {
            this.$router.go(-1);
          }
        }

    }
</script>

<style scoped>
.nav-wrap
{
  width: 7.5rem;
  height: 45px;
  background:#c50206;
  position: relative;
}
.title
{
  font-size: 18px;
  color:#fff;
  text-align: center;
  line-height: 45px;
}
.back
{
  display: inline-block;
  width: 25px;
  height: 25px;
  position: absolute;
  top:10px;
  left:5px;
  background: url("../image/images/back.png");
}
</style>
