<template>
    <div class="integral-wrap">
        <hNav options="个人量化积分"></hNav>
        <div class="top-wrap">
            <div class="number">{{scores}}</div>
        </div>
        <div>
          <router-link to="/integralDetail">
            <div class="item-wrap">
              <div class="item-wrap-left" >
                <i class="avatar one"></i><span class="desc">积分明细</span>
              </div>
              <div class="item-wrap-right">
                <i class="backIcon"></i>
              </div>
            </div>
          </router-link>
        </div>
        <div class="middle">
          <span>积分规则</span>
          <i class="icon"></i>
        </div>
        <div class="middle content" v-for="(item,index) in datas" :key="index" >
          <span class="tar">{{item.title}}</span>
          <span class="special">{{item.score}}</span>
        </div>
    </div>
</template>

<script>
    import Hnav from "@/components/Hnav"
    export default {
        name: "index",
        data()
        {
          return{
            datas:[{title:"登录APP",score:5},{title:"完善个人信息",score:2},{title:"查看积分",score:1}
                   ,{title:"按时交纳党费",score:10},{title:"查看通知",score:2},{title:"了解学院动态",score:5}
                   ,{title:"上交思想报告通过审核",score:5},{title:"提交个人总结，并参与评议",score:2},{title:"积极参与互动",score:5}
                   ,{title:"学习党建知识",score:5},{title:"学习党史",score:10},{title:"创先争优事迹",score:10}
                   ,{title:"学党章,学习习近平系列讲话",score:10},{title:"用镜头记录两学一做过程中令人感动的人和事",score:3}
                   ,{title:"关注并积极参与社会活动",score:5},{title:"制度化，常态化建设",score:5}
            ],
            scores:""
          }
        },
        components:{
          "hNav":Hnav
        },
        methods:{
          getData()
          {
            this.axios.get("/hhdj/integral/integralList.do",{page:1,rows:10}).then(res=>{
              if(res.code==1)
              {
                this.scores=res.rows[0].totalScore;
              }
            })
          }
        },
       created()
       {
         this.getData()
       }
    }
</script>

<style scoped>
.integral-wrap
{
  width: 7.5rem;
  box-sizing: border-box;
}
.top-wrap
{
  width: 100%;
  box-sizing: border-box;
  height:2.9rem;
  background: url("../../image/images/积分bg@2x.png") no-repeat;
 background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
 .number
 {
   color:#fff;
   font-size:0.4rem;
 }
 a{
   text-decoration: none;
 }
.item-wrap
{
  width: 7.5rem;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  font-size: 0.28rem;
  color:#333;
  padding-bottom: 10px;
  border-bottom: 1px solid #f1f1f1;
  align-items: center;
  margin-top: 15px;
  height:1.08rem;

}
.avatar
{
  display: inline-block;
  width: 1rem;
  height: 1rem;
}
.one
{
  background: url("../../image/images/lxjf.png") no-repeat;
  background-size: cover;
}
.desc
{
  margin-left: 15px;
}
.item-wrap-left
{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
}
.backIcon {
  display: inline-block;
  width: 0.4rem;
  height:0.5rem;
  background: url("../../image/images/right.png") no-repeat;
  margin-right: 15px;
}
.middle
{
  width:100% ;
  height:34px;
  box-sizing: border-box;
  font-size: 16px;
  background: #ddd;
  display: flex;
  justify-content: space-between;
  padding:5px 15px ;
  color:#333;
  align-items: center;
}
.icon
{
  display: block;
  width:18px;
  height: 18px;
  background: url("../../image/images/问号icon@2x.png") no-repeat;
  background-size: cover;
}
 .content
 {
   background: #fff;
   border-bottom: 1px solid #ccc;
 }
 .special
 {
   color:#f00;
 }
 .tar
 {
   color:#888;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
 }
</style>
