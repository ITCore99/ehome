<template>
    <div class="summary-wrap">
        <hNav options="个人总结"></hNav>
        <div class="upload-wrap">
          <upLoad @upLoadSuccess="getURL"></upLoad>
        </div>
        <div class="btn-wrap">
          <button class="btn" @click="hanlderUpLoad">提交总结</button>
        </div>
        <message v-if="hint" :title="hint"></message>
    </div>
</template>

<script>
  import  hNav from "@/components/Hnav"
  import  ImgUpLoad from "@/components/ImgUpLoadStyle2.vue"
  import  Message from "@/components/message";
  export default {
    name: "index",
    data()
    {
      return {
        urlArray:[],
        hint:"",
      }
    },
    components:{
      "hNav":hNav,
      "upLoad":ImgUpLoad,
       "message":Message
    },
    methods:
      {
        getURL(param)
        {
          this.urlArray.push(param);
        },
        hanlderUpLoad()
        {
          let formData=new FormData();
          let _this=this;
          formData.append("pic_list",this.urlArray);
          formData.append("user_id",this.$store.state.token);
          formData.append("comment_id","1")
          this.axios.post("/hhdj/nationComment/submitSummary.do",formData).then(res=>{
            console.log(res);
            if(res.code==1)
            {
              _this.hint="上传成功"
              setTimeout(()=>{
                _this.hint="";
              },2000);

            }else if(res.code==0)
            {
              _this.hint="个人总结不能重复提交"
              setTimeout(()=>{
                _this.hint="";
              },2000);
            }
          })
        }
      }
  }
</script>

<style scoped>
.summary-wrap
{
  width: 100%;
}
.btn-wrap
{
  width: 100%;
  display: flex;
  justify-content: center;

}
.btn
{
  width:100% ;
  height: 40px;
  outline: none;
  border-style: none;
  border-radius:8px;
  background: #ef473a;
  font-size: 16px;
  color:#fff;
  position: fixed;
  bottom:20px;
}
.upload-wrap
{
  margin-bottom: 60px;
}
</style>
