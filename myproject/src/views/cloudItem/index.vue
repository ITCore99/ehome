<template>
    <div class="cloud-wrp">
        <hnav options="党员云互动"></hnav>
        <cloud :options="datas" :rightFlag="true" :bottomFlag="true" :isPublic="true" :isPly="false"></cloud>
        <div class="plusIcon" @click="handler">
           <img src="../../image/images/发布btn.png">
        </div>
        <div class="mark" v-if="flag" @click="()=>{this.flag=false}"></div>
        <div class="write-wraper" v-if="flag">
          <div class="top">
            <textarea class="area" v-model="content"></textarea>
          </div>
          <div class="bottom">
            <button class="btn publishBtn" @click="handlerPublish">发布</button>
            <button class="btn cancelBTn" @click="()=>{this.flag=false;this.content=''}">取消</button>
          </div>
        </div>
        <message :title="hint" v-if="hint"></message>
    </div>
</template>

<script>
    import cloudInt from "@/components/cloudInteraction"
    import Hnav from "@/components/Hnav"
    import  Message from "@/components/message";
    export default {
        name: "index",
        data()
        {
          return{
            datas:[],
            flag:false,
            content:'',
            hint:'',
          }
        },
        methods:{
          getData()
          {
            this.axios.get("/hhdj/forum/forumList.do",{page:1,rows:10,type:0,cates:0}).then(res=>{
              console.log(res);
              if(res.code==1)
              {
                this.datas=res.rows;
              }
            })
          },
          handler()
          {
            this.flag=true;
          },
          handlerPublish()
          {
            console.log(this.content);
            if(this.content&&this.content.length!=0)
            {
              let formData=new FormData()
              formData.append("content",this.content.trim());
              formData.append("type",1);
              let _this=this
              this.axios.post("/hhdj/forum/saveForum.do",formData).then(res=>{
                if(res.code==1)
                {
                  _this.hint="发布成功";
                  _this.content="";
                  _this.getData();
                  setTimeout(()=>{
                    _this.hint="";
                  },2000);
                }
              })
            }
          }
        },
        components:{
          "cloud":cloudInt,
           "hnav":Hnav,
           "message":Message,
        },
        created()
        {
          this.getData();
        }
    }
</script>

<style scoped>
.cloud-wrp
{
  background: #fff;
  position: relative;
}
.plusIcon
{
  width:60px;
  height: 60px;
  position: fixed;
  right:25px;
  bottom:105px;
  z-index: 100;
}
img
{
  width:60px;
  height: 60px;
}
.mark {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: rgba(0,0,0,0.3);
  z-index: 150;
}
.write-wraper
{
  padding:15px;
  box-sizing: border-box;
  height:180px;
  background: #f1f1f1;
  z-index: 200;
  position: fixed;
  left:0px;
  right:0px;
  bottom: 0px;
}
.area
{
  width:100%;
  height:100px ;
  padding: 10px;
  box-sizing: border-box;
  color:#555;
  font-size: 16px;
  line-height: 1.5;

}
.bottom
{
  display: flex;
  justify-content: space-between;
}
.btn
{
  color:#fff;
  width:50px;
  height: 30px;
  border-radius: 5px;
  border-style: none;
  outline: none;
}
.publishBtn
{
 background: #ef473a;
}
.cancelBTn
{
  background: #888;
}
</style>
