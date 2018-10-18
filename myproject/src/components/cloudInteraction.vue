<template>
    <div>
      <div :class=" isPly ? 'cloIn-wraper' :'cloIn-wraper ply'" v-for="(item,index) in options" :key="index">
          <div class="top">
              <img :src="item.header">
              <div class="top-user">
                 <p class="username">{{item.username}}</p>
                <div class="time">
                  <i class="common timeIcon"></i>
                  <span v-if="!isPly">{{item.currentTime}}</span>
                  <span v-else>{{item.timeFormat}}</span>
                  <i class="labaICon" v-if="isPublic"></i>
                  <span v-if="isPublic">{{item.isPriv==0 ? "公开":"私密"}}</span></div>
              </div>
              <div class="top-title" v-if="rightFlag">
                <span>党员互动</span>
              </div>
          </div>
          <div class="middle" v-if="!isPly">{{item.content}}</div>
           <div class="middle" v-else>{{item.comment}}</div>
          <div class="bottom" v-if="bottomFlag" @click="handlerReply(item)">
               <i class="RIcon"></i><span class="revice">回复</span>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "cloudInteraction",
        props:{
          options:{
            type:Array
          },
          rightFlag:{
            type:Boolean,
          },
          bottomFlag:{
            type:Boolean,
          },
          isPublic:{
            type: Boolean
          },
          isPly:{
            type:Boolean
          }
        },
      data()
      {
        return{
        }
      },
      methods:{
        handlerReply(data)
        {
          this.$store.commit("PASSCLOUDDATA",data);
          this.$router.push("/reply");
        }
      }
    }
</script>

<style scoped>
.cloIn-wraper
{
  width:7.5rem;
  box-sizing: border-box;
  padding:15px;
  border-bottom: 1px solid #888;
}
.ply
{
  border-bottom: 15px solid #f1f1f1;
}
.top
{
  width: 100%;
  display: flex;
}
img{
  width:67px;
  height:67px;
  border-radius: 50%;
  display: block;
}
.top-user
{
  width: 70%;
  box-sizing: border-box;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top-user  .username
{
  font-size: 18px;
  color:#333;
  font-weight: 600;
}
.time
{
  width: 100%;
  font-size:12px;
  color:#888;
  line-height: 20px;
  display: flex;
  align-items: center;
}
.top-title
{
  width: 30%;
  box-sizing: border-box;
  display: flex;
  align-self: flex-start;
  justify-content: flex-end;
}
.top-title span
{
  font-size: 14px;
  border: 1px solid #f00;
  border-radius:8px;
  color:#f00;
  padding: 4px;
  height:18px;
  line-height: 18px;
}
.middle
{
  font-size: 16px;
  padding: 15px 0;
  font-weight: 500;
  color:#888;
}
.bottom
{
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.revice
{
  font-size:14px;
  color:#888;
}
.RIcon
{
  display: block;
  width: 21px;
  height: 21px;
  background: url("../image/images/message.png") no-repeat;
  margin-right: 10px;
}
.common
{
  display:inline-block;
  width:18px;
  height: 18px;
}
 .timeIcon
 {
   background: url("../image/images/meditor-time.png") no-repeat;
 }
 .labaICon
 {
   display:inline-block;
   width:18px;
   height:18px;
   background-size: cover;
   background: url("../image/images/喇叭.png") no-repeat;
 }

</style>
