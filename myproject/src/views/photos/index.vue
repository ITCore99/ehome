<template>
         <div class="wrap">
              <hNav options="随时随地拍"></hNav>
              <div class="opa" v-for="(item,index) in data" :key="index" @click="$router.push({path:'/showDetail',query:{id:item.newsId,title:'随时随地拍'}})">
                <div class="imgWrap">
                  <img :src="item.pic"/>
                </div>
                <p class="title">{{item.title}}</p>
              </div>
         </div>
</template>

<script>
    import  hNav from "@/components/Hnav"
    export default {
        name: "index",
        data(){
          return{
            data:[]
          }
        },
        components:{
          "hNav":hNav
         },
        methods:
        {
          getData()
          {
            this.axios.get("/hhdj/news/newsList.do",{page:1,rows:10,type:7}).then(res=>{
               if(res.code==1)
               {
                 this.data=res.rows;
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
.wrap
{
  display: flex;
  flex-wrap: wrap;
  width: 7.5rem;
}
img
{
  width:3.1rem;
  height:2.3rem;
}.opa{
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  margin-bottom:10px;
  margin-top: 20px;
}

.title
{
  width: 100%;
  font-size: 16px;
  margin-left: 10px;
  color:#333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
}
</style>
