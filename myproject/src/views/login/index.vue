<template>
    <div class="login-wrap">
        <myHnav options="登录/注册"></myHnav>
        <div class="ImgIcon">
          <img src="../../image/images/logo.png">
        </div>
        <div class="form-wrap">
          <el-form ref="form" :model="form" label-width="20px">
             <el-form-item>
              <el-input v-model="form.id_card" placeholder="身份证号" autofocus="true" class="input"></el-input>
             </el-form-item>
             <el-form-item>
                <el-input v-model="form.password" placeholder="密码" type="password"></el-input>
             </el-form-item>
             <el-form-item>
              <el-button class="btn"  @click="handerSubmit">登陆</el-button>
             </el-form-item>
            <el-form-item>
              <el-button class="btn" @click="handerss">注册</el-button>
            </el-form-item>
          </el-form>
        </div>
    </div>
</template>

<script>
    import  Hnav from "@/components/Hnav"
    export default {
        name: "index",
        data()
        {
          return{
            form:{
              password:"",
              id_card:""
            }
          }
        },
        components:{
          "myHnav":Hnav,
        },
        methods:{
          handerSubmit()
          {
            let formData=new FormData();
            formData.append('id_card',this.form.id_card);
            formData.append('password',this.form.password)
            this.axios.post("/hhdj/user/userLogin.do",formData).then(res=>{
              console.log(res);
              if(res.code==1)
              {
                  this.$store.commit("INITUSERINFO",res.data);
                  this.$store.commit("INITTOKEN",res.token);
                  sessionStorage.setItem("token",res.token);
                  this.$router.push("/home");
              }
            })
          },
          handerss()
          {
            this.axios.post("/hhdj/user/userInfo.do").then(res=>{
              console.log(res);
            })
          }
        }
    }
</script>

<style scoped>
.login-wrap
{
  background:#c50206;
  width: 7.5rem;
  height: 100%;
  position: absolute;
  top:0px;
  left:0px;
  right:0px;
  bpttom:0px;
}
.ImgIcon
{
  display: flex;
  justify-content: center;
}
.ImgIcon img
{
  display: block;
  width:203px;
  height:49px;
  margin-top:40px;

}
.form-wrap
{
  width: 6rem;
  margin: 40px auto;

}
.btn
{
  width: 100%;
  background:#e3574f;
  color:#fff;
  border-style: none;
}
.input
{
  background: #c50206;
}
</style>
