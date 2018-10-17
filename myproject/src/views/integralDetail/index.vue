<template>
      <div class="integralDetail-wrap" >
          <hNav options="积分明细"></hNav>
          <div class="content-wrap" v-for="(item,index) in datas" :key="index">
              <div class="item">
                 <div class="left">
                    <p class="title">{{item.typeName}}</p>
                    <p class="time">{{item.timeFormat}}</p>
                 </div>
              </div>
              <span class="right">+{{item.singleDesc}}</span>
          </div>
      </div>
</template>

<script>
    import Hnav from "@/components/Hnav"
    export default {
        name: "index",
        data(){
          return{
            datas:[]
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
.integralDetail-wrap
{
  width: 7.5rem;
}
.content-wrap
{
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.item .title{
  font-size: 20px;
  color:#333;
  font-weight: 500;
}
 .time
 {
   font-size: 14px;
   color:#888;
   line-height: 1.5;
 }
 .right
 {
   font-size: 16px;
   color:#f00;
 }
</style>
