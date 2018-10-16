<template>
  <div>
    <hNav options="随时随地学"></hNav>
    <showItem :options="datas" title="随时随地学"></showItem>
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
          this.axios.get("/hhdj/news/newsList.do",{page:1,rows:10,type:6}).then(res=>{
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
