<template>
    <div class="details-wrap">
       <p class="title">{{data.title}}</p>
       <div v-html="data.content" class="content"></div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data()
        {
          return{
            data:"",
          }
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
.details-wrap
{
  margin-top:48px;
  width:7.4rem;
  overflow: hidden;
}
.title
{
  font-size: 16px;
  color:#333;
  font-weight: 600;
}
img
{
  width:100%;
  display: block;
  margin: 10px auto;
}
.content
{
  font-size: 14px;
  color:#333;
  margin-bottom:60px;
}
</style>
