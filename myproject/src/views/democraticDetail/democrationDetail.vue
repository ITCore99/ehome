<template>
    <div class="democrationDetail-wrap">
        <hNav options="民主评议"></hNav>
        <div class="content">
           <p class="title">评论须知</p>
           <p class="common">在党支部专题组织生活会上，每一位党员要对照评议内容进行个人总结，查摆存在的问题，进行批评与自我批评，明确下一步的努力方向。在此基础上，党支部组织全体党员对每一位党员进行民主评议。评议主要内容如下：</p>
           <p class="common special ">1、坚定理想信念、贯彻执行党的路线方针政策情况；</p>
           <p class="common special">2、参加“两学一做”学习教育情况；</p>
           <p class="common special">3、参加党的组织生活、按要求交纳党费；</p>
           <p class="common special">4、学习情况、业务能力提高情况；</p>
           <p class="common special">5、关心集体、团结同志，发挥先锋模范作用情况；</p>
           <p class="common special">6、联系群众、关心群众、服务群众情况；</p>
           <p class="common special">7、遵守党章党规、法律法规和学校规章制度情况。</p>
        </div>
        <div class="bottom">
           <select class="select" v-model="type">
             <option value="">请选择</option>
             <option v-for="(item,index) in data" :key="index" :value="item.id" v-text="item.branch"></option>
           </select>
           <button class="btn" @click="()=>{this.$router.push({path:'/democraticNext',query:{id:type}})}">下一步</button>
        </div>
    </div>
</template>

<script>
    import  hNav from "@/components/Hnav";
    export default {
        name: "democrationDetail",
        data(){
          return{
            type:"",
            data:[]
          }
        },
         methods:{
            getData()
            {
              this.axios.get("/hhdj/branch/findAll.do").then(res=>{
                if(res.code=1)
                {
                     this.data=res.rows;
                }
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

<style scoped>
.democrationDetail-wrap
{
  width: 100%;
}
.content
{
  width: 100%;
  box-sizing: border-box;
  padding:15px 10px;
}
.title
{
  font-size: 16px;
  font-weight:600;
  color:#111;
  text-align: center;
  padding:10px 0px;
}
.common
{
  font-size: 14px;
  color:#666;
  line-height: 1.5;
}
.special{
  line-height: 2;
}
.bottom
{
  width: 100%;
  margin-top: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

}
.select
{
  width: 50%;
  margin-right:15px;
  border-style: none;
  color:#fff;
  background:#c50206;;
  border-radius: 5px;
}
.btn
{
  width:30% ;
  height: 40px;
  outline: none;
  border-style: none;
  border-radius:8px;
  background: #c50206;;
  font-size: 16px;
  color:#fff;
}
</style>
