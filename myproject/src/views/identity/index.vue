<template>
  <div class="">
    <hNav options="党员亮身份"></hNav>
    <showItem :options="datas" title="党员亮身份"></showItem>
  </div>
</template>

<script>
   import showItem from "@/components/showItem"
   import  hNav from "@/components/Hnav"
    export default {
        name: "index",
       data()
       {
        return{
          datas:[],
        }
       },
      components:{
        "showItem":showItem,
        "hNav":hNav
      },
      methods:
        {
          getData()
          {
            this.axios.get("/hhdj/news/newsList.do",{page:1,rows:10,type:5}).then(res=>{
              if(res.code==1)
              {
                this.datas=res.rows;
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

</style>
