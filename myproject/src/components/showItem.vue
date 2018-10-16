<template>
   <div class="showItem-wraper">
      <div class="wrap" v-for="(item,index) in options" :key="index" @click="$router.push({path:'/showDetail',query:{id:item.newsId,title}})">
        <img :src="item.pic"/>
        <div class="rightWrap">
          <div class="top">{{item.title}}</div>
          <div class="bottom">
            <div>{{item.currentTime}}</div>
            <div class="number"><i class="look"></i><span>{{item.count}}</span></div>
          </div>
        </div>
      </div>
   </div>
</template>

<script>
    export default {
        name: "showItem",
        props:{
          options:{
            type:Array
          },
          title:{
            type:""
          }
        }
    }
</script>

<style scoped>
.showItem-wraper
{
  width: 7.5rem;
}
.wrap
{
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
}
.wrap img
{
  width: 80px;
  height:80px;
  vertical-align: bottom;
  margin-right: 15px;
}
.rightWrap
{
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
}
.top
{
  font-size: 16px;
  color:#333;
}
.bottom
{
  width:100%;
  display: flex;
  justify-content: space-between;
  font-size:14px ;
  color:#888;
  align-items: center;
}
.look
{
  width: 25px;
  height: 25px;
  display: inline-block;
  background: url("../image/images/look.png") no-repeat;
}
.number
{
  display: flex;
  align-items: center;
  margin-right: 15px;
}
</style>
