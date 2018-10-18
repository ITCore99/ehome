<template>
    <div class="updateInfo-wrap">
      <hNav options="修改个人信息" :target="target" @Edit="handlerEdit" @Save="handlerSave"></hNav>
      <div class="content-wrap">
        <div class="item">
           <span>头像</span>
           <div class="upLoad-wrap" v-if="flag">
            <img class="IMG" :src="data.header"/>
           </div>
           <div v-else class="upLoad-wrap">
             <upLoad @uploadSuccess="getIMGURL" :img="imgURL" @Base64="Base64"></upLoad>
           </div>
        </div>
        <div class="item">
          <span>姓名</span>
          <span v-if="flag" >{{data.username}}</span>
          <input  v-else class="input" type="text" v-model="data.username"/>
        </div>
        <div class="item">
          <span>身份证号</span>
          <span v-if="flag">{{data.idCard}}</span>
          <input  v-else class="input" type="text" v-model="data.idCard"/>
        </div>
        <div class="item">
          <span>家庭住址</span>
          <span v-if="flag">{{data.hometown}}</span>
          <input v-else  class="input" type="text" v-model="data.hometown"/>
        </div>
        <div class="item">
          <span>工作住址</span>
          <span v-if="flag">{{data.address}}</span>
          <input v-else  class="input" type="text" v-model="data.address"/>
        </div>
        <div class="item">
          <span>民族</span>
          <span v-if="flag">{{data.nation}}</span>
          <input v-else class="input" type="text" v-model="data.nation"/>
        </div>
        <div class="item">
          <span>微信号</span>
          <span v-if="flag">{{data.wxNum}}</span>
          <input v-else  class="input" type="text" v-model="data.wxNum"/>
        </div>
        <div class="item">
          <span>QQ号</span>
          <span v-if="flag">{{data.qqNum}}</span>
          <input v-else  class="input" type="text" v-model="data.qqNum"/>
        </div>
        <div class="item">
          <span>性别</span>
          <span v-if="flag">{{data.sex==1 ? "男":"女" }}</span>
          <div v-else>
            <input class="sex" type="radio" name="sex" value="1" :checked="data.sex==1" @click="()=>{this.data.sex=1}"/>男
            <input class="sex" type="radio" name="sex" value="2" :checked="!data.sex==1" @click="()=>{this.data.sex=0}"/>女
          </div>
        </div>
        <div class="item">
          <span>最高学习</span>
          <span v-if="flag">{{data.education}}</span>
          <input v-else class="input" type="text" v-model="data.education"/>
        </div>
        <div class="item">
          <span>职称</span>
          <span v-if="flag">{{data.jobRank}}</span>
          <input v-else class="input" type="text" v-model="data.jobRank"/>
        </div>
        <div class="item">
          <span>薪资水平</span>
          <span v-if="flag" >{{data.salary}}</span>
          <input v-else class="input" type="text" v-model="data.salary"/>
        </div>
        <div class="item">
          <span>入党时间</span>
          <span v-if="flag">{{data.joinPartyTime}}</span>
          <input v-else class="input" type="date" v-model="data.joinPartyTime"/>
        </div>
        <div class="item">
          <span>党费最后缴纳时间</span>
          <span v-if="flag">{{data.lastPayTime}}</span>
          <input v-else class="input" type="date" v-model="data.lastPayTime"/>
        </div>
        <div class="item">
          <span>当前身份</span>
          <span v-if="flag">{{data.partyIdentity}}</span>
          <select v-else class="input" v-model="data.partyStatus" name="select">
            <option value="2">党员</option>
            <option value="0">积极分子</option>
            <option value="1">预备党员</option>
          </select>
        </div>
      </div>
    </div>
</template>

<script>
    import  hNav from "@/components/Hnav"
    import  upload from "@/components/upLoadView"
    export default {
        name: "index",
         data(){
            return{
              imgURL:"",
              data:"",
              target:"编辑",
              flag:true,
            }
         },
        components:{
          "hNav":hNav,
          "upLoad":upload
        },
        avatar:"",
        methods:{
          getIMGURL(params)
          {
            this.avatar=params;
          },
          getData()
          {
            this.axios.get("/hhdj/user/userInfo.do").then(res=>{ //异步的
              if(res.code==1)
              {
                this.data=res.data;
                this.imgURL=res.data.header;
              }
            })
          },
          handlerEdit()
          {
            this.target="保存"
            this.flag=!this.flag;
          },
          handlerSave()
          {
            let formData=new FormData();
            formData.append("username",this.data.username);
            formData.append("hometown",this.data.hometown);
            formData.append("wxNum",this.data.wxNum);
            formData.append("qqNum",this.data.qqNum);
            formData.append("sex",this.data.sex);
            formData.append("education",this.data.education);
            formData.append("jobRank",this.data.jobRank);
            formData.append("salary",this.data.salary);
            formData.append("address",this.data.address);
            formData.append("joinPartyTime",this.data.joinPartyTime);
            formData.append("lastPayTime",this.data.lastPayTime);
            formData.append("partyStatus",this.data.partyStatus);
            if(this.avatar)
            {
              formData.append("header",this.avatar);
            }
            console.log(this.avatar);
            let _this=this;
            this.axios.post("/hhdj/user/modifyInfo.do",formData).then(res=>{
              if(res.code==1)
              {
                this.getData();
                _this.avatar="";
              }
            });
            this.target="编辑";
            this.flag=!this.flag;


          },
          Base64(base64)
          {
            this.imgURL=base64;
          }
        },
        created()
        {
          this.getData();
        },

    }
</script>

<style scoped>
.updateInfo-wrap
{
  width:7.5rem;
  font-size:16px;
  color:#888;
}
.item
{
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  padding: 5px 15px;
  justify-content: space-between;
  border-bottom: 1px solid #888;
  height: 61px;
}
.upLoad-wrap
{
  width: 50px;
  height: 50px;
}
.IMG
{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.input{
  outline: none;
  height:100%;
  border:0;
  font-size:16px ;
  color:#333;
  text-align: right;
}
.sex
{
  border:0;
}
</style>
