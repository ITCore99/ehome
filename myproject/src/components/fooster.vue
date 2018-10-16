<template>
    <div class="fooster-wraper">
      <div :class="$store.state.index==1 ? 'home activeDiv':'home'" @click="handlerClick(1)"><i :class="$store.state.index==1 ? 'common activeHomeImg':'common home-i'" ></i><span :class="$store.state.index==1 ? 'activeHomeTitle':''">首页</span></div>
      <div :class="$store.state.index==2 ? 'middle activeDiv':'middle'"  @click="handlerClick(2)"><i :class="$store.state.index==2 ? 'common activeNoticeImg':'common middle-i'"></i><span :class="$store.state.index==2 ? 'activeHomeTitle':''">通知</span></div>
      <div :class="$store.state.index==3 ? 'mine activeDiv':'mine'" @click="handlerClick(3)"><i :class="$store.state.index==3 ? 'common activeMine':'common mine-i'" ></i><span :class="$store.state.index==3 ? 'activeHomeTitle':''">我的</span></div>
    </div>
</template>

<script>
    export default {
        name: "fooster",
        data()
        {
          return{
            index:"1",
          }
        },
         methods:{
           handlerClick(index)
           {
              this.$store.commit("CHANGEFOOSTER",index);
              console.log(this.$store.state.index);
              if( this.$store.state.index==1)
              {
                this.$router.push("/home");
                this.$store.commit("CHANGETITLE","")
              }else if(this.$store.state.index==2)
              {
                this.$router.push("/notice");
                this.$store.commit("CHANGETITLE","通知早知道")
              }else if(this.$store.state.index==3)
              {
                this.$router.push("/mine");
                this.$store.commit("CHANGETITLE","我的党建")
              }

           },
         }
    }
</script>

<style scoped >
.fooster-wraper
{
  background: url("../image/images/foosterbg.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  position: fixed;
  bottom:0px;
  left:0px;
  right: 0px;
  align-items: center;
  padding-top: 2px;
}
.home
{
  display: flex;
  flex-direction: column;
  padding: 5px;
  height: 46px;
  align-items: center;

}
.middle
{
  display: flex;
  flex-direction: column;
  padding: 5px;
  height: 46px;
  align-items: center;
}
.mine
{
  display: flex;
  flex-direction: column;
  height: 46px;
  padding: 5px;
  align-items: center;
}
.common
{
  width: 18px;
  height: 18px;
}
.home-i
{
  background: url("../image/images/home_grey.png");
  background-repeat: no-repeat;
}
.middle-i
{
  background: url("../image/images/notice_grey.png");
  background-repeat: no-repeat;
}
.mine-i
{
  background: url("../image/images/mine_grey.png");
  background-repeat: no-repeat;
}
 .activeHomeImg
 {
   background: url("../image/images/home_red.png");
   background-repeat: no-repeat;
 }
.activeNoticeImg
{
  background: url("../image/images/notice_red.png");
  background-repeat: no-repeat;
}
.activeMine
{
  background: url("../image/images/mine_red.png");
  background-repeat: no-repeat;
}
 .activeHomeTitle
 {
   color:#f00;
 }
 .activeDiv
 {
   border-top:2px solid #f00;
 }

</style>
