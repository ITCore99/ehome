<template>
    <div class="expreience-wrap">
       <hnav options="心得总结"></hnav>
       <div class="content-wrap">
           <div class="img-wrap">
             <img :src="Src"/>
           </div>
           <p class="tips" v-text="title"></p>
       </div>
       <div class="btn-wrap">
         <button class="btn" @click="()=>{this.$router.go(-1)}">关闭</button>
       </div>
    </div>
</template>

<script>
    import Hnav from "@/components/Hnav"
    export default {
        name: "index",
        data(){
          return{
            data:0,
          }
        },
        components:{
          "hnav":Hnav,
        },
        methods:{
          getData()
          {
            this.axios.get("/hhdj/impress/checkByUserId.do",{user_id:this.$store.state.token}).then(res=>{
              if(res.code==1)
              {
                this.data=res.type;
              }
            })
          },
        },
        computed:
          {
            title()
            {
              switch (this.data)
              {
                case 0:
                  return "正在审核中";
                  break;
                case 1:
                  return "审核通过";
                  break;
                case 2:
                  return"审核未通过";
                  break;
                default:
                  return "正在审核中";
              }
            },
            Src()
            {
              let baseUrl="/static/image";
              switch (this.data)
              {
                case 0:
                  return baseUrl+"/审核中.png";
                  break;
                case 1:
                  return baseUrl+"/通过.png";
                  break;
                case 2:
                  return baseUrl+"/false.png";
                  break;
                default:
                  return baseUrl+"/审核中.png";
              }
            }

          },
        created()
        {
          this.getData();
        }
    }
</script>

<style scoped>
.expreience-wrap
{
  width: 100%;
}
.content-wrap
{
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content-wrap .tips
{
   font-size: 14px;
   color:#666;
   margin-top:15px;
}
.btn-wrap
{
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
img
{
  width:1.84rem;
}
.img-wrap
{
  width:1.84rem;
  height: 1.84rem;
}

.btn
{
  width:60% ;
  height: 40px;
  outline: none;
  border-style: none;
  border-radius:8px;
  background: #c50206;
  font-size: 16px;
  color:#fff;
}
</style>
