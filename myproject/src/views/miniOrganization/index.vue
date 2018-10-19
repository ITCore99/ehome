<template>
   <div class="miniOrg-wrap">
        <hNav options="掌上组织生活"></hNav>
        <div class="IMgWrap">
           <img src="../../image/images/timg.jpg"/>
        </div>
        <div class="hrfwraper">
           <router-link to="/study">
              <div class="common">
                <img class="img" src="../../image/images/icon1.png"/>
                <p class="content">政治学习</p>
              </div>
           </router-link>
           <router-link :to="$store.state.userInfo.idCard ? '/thinking' : '/login'">
            <div class="common">
              <img class="img" src="../../image/images/icon2.png"/>
              <p class="content">思想汇报</p>
            </div>
           </router-link>
           <router-link :to="$store.state.userInfo.idCard ? '/experience' : '/login'">
            <div class="common">
              <img class="img" src="../../image/images/icon3.png"/>
              <p class="content">心得总结</p>
            </div>
           </router-link>
           <router-link to="/democratic">
            <div class="common">
              <img class="img" src="../../image/images/icon4.png"/>
              <p class="content">民主评议</p>
            </div>
           </router-link>
           <router-link to="/map">
              <div class="common">
                <img class="img" src="../../image/images/icon5.png"/>
                <p class="content">流动党员找组织</p>
              </div>
           </router-link>
          <router-link to="/index" class="special">
              <div class="common">
                <img class="img" src="../../image/images/icon1.png"/>
                <p class="content"></p>
              </div>
          </router-link>
        </div>
   </div>
</template>

<script>
   import  hNav from "@/components/Hnav"
    export default {
        name: "index",
        components:{
            "hNav":hNav
        },

    }
</script>

<style scoped>
.miniOrg-wrap
{
  width: 7.5rem;

}
.hrfwraper
{
  width: 100%;
  font-size: 12px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.IMgWrap img
{
  width: 7.5rem;
}
.common
{
  width: 2.5rem;
  height: 98px;
  text-align: center;
}
a{
  text-decoration: none;
}
.img
{
  width: 50px;
  height: 50px;
}
.content
{
  margin-top:8px;
  color: #888;
}
.special
{
  opacity: 0;
}
</style>
