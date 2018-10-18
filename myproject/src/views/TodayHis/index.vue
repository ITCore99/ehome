<template>
    <div class="today-wraper">
        <hNav options="党史上的今天"></hNav>
        <div v-html="datas" class="content"></div>
    </div>
</template>
<script>
    import  hNav from "@/components/Hnav"
    import  getUrl from "@/untils/geturl"
    import   cheerio from "cheerio"
    export default {
        name: "index",
        data()
        {
          return{
            datas:""
          }
        },
        methods:{
          getData(param)
          {
            this.axios.get(`http://211.67.177.56:8080/hhdj/proxy/proxy.do?url=${param}`).then(res=>{
              console.log(res);
              let $=cheerio.load(res);
              let content=$(".p1_02 ").html();
              console.log(content)
              let str = res.split('<!--content-->')[1];
              this.datas = content;
            })
          }
        },
        components:{
          "hNav":hNav
        },
       created()
       {
         let month=new Date().getMonth()+1;
         let day=new Date().getDate();
         month=month <10 ? "0"+month : month+"";
         day=day < 10  ? "0"+day : day+"";
         let url=getUrl(month,day);
         this.getData(url);
       }
    }
</script>
<style >
  .today-wraper
  {
    width: 7.5rem;
    box-sizing: border-box;
  }
  .content
  {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
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
