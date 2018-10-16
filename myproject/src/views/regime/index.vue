<template>
  <div class="firstWhiff-wrap">
    <hNav options="制度建设"></hNav>
    <showItem :options="datas" title="制度建设"></showItem>
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
          this.axios.get("/hhdj/news/newsList.do",{page:1,rows:10,type:4}).then(res=>{
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
