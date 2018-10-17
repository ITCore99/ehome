<template>
    <div class="payfee-wrap">
        <hNav options="党费缴纳"></hNav>
        <div class="wrap">
            <p class="title">请选择支付方式</p>
            <div class="common" @click="handerWx">
              <img src="../../image/images/weixin.png" />
              <span class="name">微信</span>
            </div>
            <div class="common" @click="handerZfB">
              <img src="../../image/images/支付宝.png" />
              <span class="name">微信</span>
            </div>
        </div>
        <div class="mark" v-if="wxFlag"  @click="handerWx">
            <div class="QCodeCommon">
              <img class="RQcode" src="../../image/images/微信二维码.png">
              <span class="tips">微信支付</span>
            </div>
        </div>
        <div class="mark" v-if="zubFlag"  @click="handerZfB">
          <div class="QCodeCommon">
            <img class="RQcode" src="../../image/images/支付宝二维码.png">
            <span class="tips">支付宝支付</span>
          </div>
        </div>
    </div>
</template>

<script>
    import  hNav from "@/components/Hnav"
    export default {
        name: "index",
        data()
        {
          return{
            wxFlag:false,
            zubFlag:false,
          }
        },
        components:{
          "hNav":hNav
        },
        methods:{
          handerWx()
          {
            this.wxFlag=!this.wxFlag
          },
          handerZfB()
          {
            this.zubFlag=!this.zubFlag
          }
        }
    }
</script>

<style scoped>
.payfee-wrap
{
  width: 7.5rem;
}
.wrap
{
  width:100% ;
  box-sizing: border-box;
}
.title
{
  font-size:18px;
  color:#333;
  margin: 15px;
}
.common
{
  width: 100%;
  height: 68px;
  box-sizing: border-box;
  padding: 10px 0;
  font-size:16px;
  border-top : 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 15px;
  display: flex;
  align-items: center;
}
.name
{
  margin-left:15px;
  color:#666;
  font-size: 16px;
}
.mark
{
  position: absolute;
  top:0px;
  left:0px;
  right:0px;
  bottom:0px;
  background: rgba(0,0,0,0.5);
  z-index: 998;
  display: flex;
  justify-content: center;
  align-items: center;
}
.RQcode
{
  width: 300px;
  height: 300px;
}
.QCodeCommon
{
  position: relative;
}
.tips
{
  font-size: 16px;
  color:#333;
  background: #fff;
  position: absolute;
  top:0px;
  left:115px;

}
</style>
