<template>
   <div class="democratic-wraper">
       <hNav options="掌上组织生活"></hNav>
       <div class="btn-warp">
             <button class="btn" @click="()=>{this.$router.push('/summary')}">个人总结</button>
            <button class="btn" @click="()=>{this.$router.push('/democraticDetail')}">民主评议</button>
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
.democratic-wraper
{
  width:100%;
}
.btn-warp
{
  width: 60%;

  box-sizing: border-box;
  padding: 15px 20px;
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}
.btn
{
  width:100% ;
  height: 40px;
  outline: none;
  border-style: none;
  border-radius:8px;
  background: #ef473a;
  font-size: 16px;
  color:#fff;
}

</style>
