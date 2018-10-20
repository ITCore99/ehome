<template>
  <scroller
    :on-refresh="refresh"
    ref="myScroller"
    :noDataText="tips"
    :on-infinite="infinite">
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
  </scroller>
</template>

<script>
    export default {
        name: "newsItem",
        data()
        {
          return{
            datas:[],
            pn:1,
            row:10,
            tips:"没数据了"
          }
        },
        methods:{
            getData()
            {
               this.axios.get("/hhdj/news/newsList.do",{page:this.pn,rows:this.row,type:2}).then(res=>{
                   if(res.code==1)
                   {
                     this.datas=[...this.datas,...res.rows];
                   }
                 })
            },
            refresh(done)
              {
                console.log("下拉了");
                let _this=this;
                this.pn=1;
                this.row=10;
                this.datas=[];
                f();
                async function f()
                {
                  await _this.getData(_this.pn,_this.row);
                  await done();
                };

              },
               infinite(done)
              {
                console.log("上拉了");
                let oldDatas=this.datas;
                this.pn = this.pn +1;
                this.getData(this.pn,this.row);
                setTimeout(()=>{
                  if(oldDatas.length==this.datas.length)
                  {
                    done();
                  }
                },1500)
              }
        },
        created()
        {
          this.getData(this.pn,this.row);
        }
    }
</script>

<style scoped>
.newsItem-wrap
{
   margin-top: 44px;
   overflow-y : auto
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
