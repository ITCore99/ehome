<template>
  <div class="Mine-wrap">
    <div class="top">
        <div class="img-wrap">
            <img :src="$store.state.userInfo.header ? $store.state.userInfo.header : 'http://img5.duitang.com/uploads/item/201602/05/20160205203413_ZE4fQ.jpeg'"/>
        </div>
        <p class="tip" v-text="$store.state.userInfo.username ? $store.state.userInfo.username :'你还没登陆,请登陆'"></p>
    </div>
    <div class="bottom">
        <router-link to="/updateInfo">
          <div class="item-wrap">
              <div class="item-wrap-left" >
                <i class="avatar one"></i><span class="desc">个人信息</span>
              </div>
              <div class="item-wrap-right">
                <i class="backIcon"></i>
              </div>
          </div>
        </router-link>
        <router-link to="/integral">
          <div class="item-wrap">
            <div class="item-wrap-left" >
              <i class="avatar two"></i><span class="desc">个人量化积分</span>
            </div>
            <div class="item-wrap-right">
              <i class="backIcon"></i>
            </div>
          </div>
        </router-link>
        <router-link to="/changePassword">
          <div class="item-wrap">
            <div class="item-wrap-left" >
              <i class="avatar three"></i><span class="desc">修改密码</span>
            </div>
            <div class="item-wrap-right">
              <i class="backIcon"></i>
            </div>
          </div>
        </router-link>
        <router-link to="/payfee">
          <div class="item-wrap">
            <div class="item-wrap-left" >
              <i class="avatar four"></i><span class="desc">党费缴纳</span>
            </div>
            <div class="item-wrap-right">
              <i class="backIcon"></i>
            </div>
          </div>
        </router-link>
    </div>
    <div class="btn-wrap" v-if="$store.state.userInfo.username">
      <button class="btn" @click="handlerOut">点击退出</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mine",
        methods:{
          handlerOut()
          {
            this.$store.state.userInfo={};
            this.$router.push("/login");
          }
        }
    }
</script>

<style scoped>
.Mine-wrap
{
  width:7.5rem ;
  margin-top: 43px;
}
.top
{
  width: 100%;
  padding:30px 0;
  background: #c50206;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img-wrap
{
  width:90px;
  border-radius: 50%;
  overflow: hidden;
  opacity:0.5;
}
.top img
{
  width:100%;
  display:block;
}
.tip
{
  font-size: 16px;
  margin-top: 15px;
  color:#fff;
}
.bottom
{
  width: 100%;
  margin-top: 15px;
}
a{
  text-decoration: none;
}
.item-wrap
{
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color:#333;
  padding-bottom: 10px;
  border-bottom: 1px solid #f1f1f1;
  align-items: center;
  margin-top: 15px;
  height:38px;

}
.avatar
{
  display: inline-block;
  width: 50px;
  height: 50px;
}
.one
{
  background: url("../../image/images/person.png");
  background-size: cover;
}
.two
{
  background: url("../../image/images/lxjf.png");
  background-size: cover;
}
.three
{
  background: url("../../image/images/xgmm.png");
  background-size: cover;
}
.four
{
  background: url("../../image/images/icon3.png");
  background-size: cover;
}
.desc
{
  margin-left: 15px;
}
.item-wrap-left
{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
}
.backIcon
{
  display: inline-block;
  width: 20px;
  height:25px;
  background: url("../../image/images/right.png") no-repeat;
  margin-right: 15px;
}
.btn-wrap
{
  width:7.5rem;
  box-sizing: border-box;
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
.btn
{
  width: 80%;
  height: 40px;
  border-radius: 5px;
  background:#e3574f;
  color:#fff;
  border-style: none;
}
</style>
