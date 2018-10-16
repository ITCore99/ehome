<template>
    <div class="showListDetail-wrap">
        <hNav :options="$route.query.title"></hNav>
        <div class="content-wrap">
          <p class="title">{{data.title}}</p>
          <div v-html="data.content" class="content">
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
            data:""
          }
        },
        components:{
          "hNav":hNav
        },
        methods:{
          getData()
          {
            this.axios.get("/hhdj/news/newsContent.do",{newsId:this.$route.query.id}).then(res=>{
              console.log(res);
              if(res.code==1)
              {
                this.data=res.data;
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

<style >
.showListDetail-wrap
{
  width: 7.5rem;
}
.content-wrap
{
  width: 7.1rem;
  padding:0 0.2rem;
}

.title
{
  font-size: 18px;
  line-height: 1.5;
  font-weight:600;
  color:#333;
}
img
{
  width: 100%;
}
.content
{
  font-size: 14px;
  color:#333;
  line-height: 1.5;
}
</style>
