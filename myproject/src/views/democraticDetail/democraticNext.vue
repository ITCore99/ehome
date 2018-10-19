<template>
    <div class="next-wrap">
        <hNav options="参议党员"></hNav>
        <div class="content" v-for="(item,index) in datas" :key="index">
          <div class="imgWrap">
            <img :src="item.header"/>
          </div>
          <div class="wrap">
            <span class="name">{{item.username}}</span>
            <span class="desc">{{item.branchName}}</span>
          </div>
        </div>
    </div>
</template>

<script>
  import  hNav from "@/components/Hnav"
  export default {
    data(){
      return{
        datas:[]
      }
    },
    components:{
      "hNav":hNav
    },
    methods:
      {
        getData()
        {
          this.axios.get("/hhdj/nationComment/userList.do",{select_branch:this.$route.query.id,user_id:this.$store.state.token,page:"1",rows:10}).then(res=>{
            if(res.code==1)
            {
              this.datas=res.rows
            }
          })
        }
      },
      created()
      {
        this.getData();
      }
  }
</script>

<style scoped>
.next-wrap
{
  width: 100%;
}
.content
{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  color:#333;
  align-items: center;
  padding:10px;
}
.imgWrap
{
  width: 50px;
  height: 50px;
  margin-right: 15px;
}
img
{
  width: 50px;
  height: 50px;
}
.wrap
{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.desc
{
  margin-right: 10px;
}
</style>
