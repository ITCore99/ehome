<template>
      <div class="replay-wrap">
          <hnav options="党员云互动"></hnav>
          <div class="wrap">
            <cloud :options="$store.state.cloudItemData" :rightFlag="false" :bottomFlag="false" :isPublic="false" :isPly="false"></cloud>
            <cloud :options="datas" :rightFlag="false" :bottomFlag="false" :isPublic="false" :isPly="true"></cloud>
          </div>
          <div class="send">
            <input class="textInput" type="text" v-model="content" placeholder="评论内容"/>
            <input class="Btn" type="button" value="发送" @click="handlerSend"/>
          </div>
          <p class="line">已经是全部数据了</p>
          <message :title="hint" v-if="hint"></message>
      </div>
</template>

<script>
    import Hnav from "@/components/Hnav"
    import  Message from "@/components/message";
    import cloudInt from "@/components/cloudInteraction"
    export default {
        name: "index",
        data(){
          return{
              datas:[],
              content:'',
              hint :'',
          }
        },
        components:{
          "hnav":Hnav,
          "message":Message,
          "cloud":cloudInt,
        },
        methods:{
          getData()
          {
            this.axios.get("http://211.67.177.56:8080/hhdj/forum/forumCommentList.do",{page:1,rows:10,forum_id:this.$store.state.cloudItemData[0].forumId}).then(res=>{
              if(res.code==1)
              {
                    this.datas=res.rows;
              }
            })
          },
          handlerSend()
          {
            let formData=new FormData();
            formData.append("forum_id",this.$store.state.cloudItemData[0].forumId);
            formData.append("comment",this.content.trim());
            let _this=this;
            this.axios.post("http://211.67.177.56:8080/hhdj/forum/addComment.do",formData).then(res=>{
              if(res.code==1)
              {
                _this.hint="发布成功"
                _this.content="";
                _this.getData();
                setTimeout(()=>{
                  _this.hint="";
                },2000);
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
.replay-wrap
{
  width:100%;
}
.wrap
{
  width: 100%;
  box-sizing: border-box;
}
.line
{
  font-size: 14px;
  color:#888;
  text-align: center;
  margin: 20px 0;
  margin-bottom: 70px;
}
.send
{
  width: 100%;
  height: 50px;
  position:fixed;
  bottom:0px;
  left:0px;
  right: 0px;
  box-sizing: border-box;
  background: #f1f1f1;
  display: flex;
  justify-content: space-between;
  padding:5px 10px;
  align-items: center;
}
.Btn{
  width: 20%;
  color:#fff;
  width:60px;
  height: 35px;
  border-radius: 5px;
  border-style: none;
  outline: none;
  background: #ef473a;
}
.textInput
{
  width:80%;
  height:35px;
  border: 0.5px solid #ef473a;
  border-radius: 5px;
  padding-left: 10px;
  margin-right: 10px;
}
</style>
