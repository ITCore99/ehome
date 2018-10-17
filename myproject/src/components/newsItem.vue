<template>
    <div class="newsItem-wrap">
      <div class="wrap" v-for="(item,index) in datas" :key="index">
        <div class="newsItemImg">
          <img :src="item.pic"/>
        </div>
        <div class="newsItemContent">
          <div class="title"><router-link :to="{path:'/details',query:{id:item.newsId}}">{{item.title}}</router-link></div>
          <div class="time">{{item.currentTime}}</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "newsItem",
        data()
        {
          return{
            datas:[],
          }
        },
        methods:{

            getData()
            {
               this.axios.get("/hhdj/news/newsList.do",{page:1,rows:10,type:2}).then(res=>{
                 console.log(res);
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
.newsItem-wrap
{
   margin-top: 44px;
}
.newsItemContent
{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 18px;
  font-weight:500;
  color:#333;
}
.newsItemImg
{
  width:76px ;
  height:71px;
  display: flex;
  font-size: 16px;
  justify-content: start;
  align-items: center;
  padding-left:15px;
}
img
{
  width:50px ;
  height:50px;
}
.time
{
  font-size: 12px;
  color:#888;
}
.title a{
  color:#333;
  text-decoration: none;
  font-size:14px;
}
.wrap
{
  display: flex;
  width:7.5rem;
  border-bottom:2px solid #f1f1f1;
}
</style>
