<template>
    <div class="today-wraper">
        <hNav options="党史上的今天"></hNav>
        <div v-html="datas" class="content"></div>
    </div>
</template>
<script>
    import  hNav from "@/components/Hnav"
    export default {
        name: "index",
        data()
        {
          return{
            datas:""
          }
        },
        methods:{
          getData()
          {
            this.axios.get("http://211.67.177.56:8080/hhdj/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70502%2Findex.html").then(res=>{
              console.log(res);
              let str = res.split('<!--content-->')[1];
              this.datas = str.split('<!--p1 end-->')[0];
            })
          }
        },
        components:{
          "hNav":hNav
        },
       created()
       {
         this.getData();
       }
    }
</script>
<style >
  .today-wraper
  {
    width: 7.5rem;
    box-sizing: border-box;
    padding: 10px 15px;
  }
  h1{
    font-size: 0.64rem;
    margin:15px 0 ;
  }
  h2{
    font-size: 0.48rem;
    margin:15px 0 ;
  }
  h3{
    font-size: 0.3744rem  ;
  }
  p{
    font-size: .28rem;
    line-height: 1.5;
    margin:10px 0 ;
  }
</style>
