<template>
    <div class="nav-wrap">
        <div class="title">
           <span>{{options}}</span>
        </div>
        <i class="back" @click="handlerBack"></i>
        <span class="right" v-if="target=='编辑'" @click="clickEdit">{{target}}</span>
        <span class="right" v-if="target=='保存'" @click="clickSave">{{target}}</span>
    </div>
</template>

<script>
    export default {
        name: "Hnav",
        props:{
          options:{
            type:String,
          },
          target:{
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
          },
          clickEdit()
          {
            this.$emit("Edit");
          },
          clickSave()
          {
            this.$emit("Save");
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
.right
{
  position:absolute;
  top:10px;
  right:15px;
  color:#fff;
  font-size:18px;
}
</style>
