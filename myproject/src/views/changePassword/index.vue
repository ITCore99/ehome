<template>
    <div class="changePassword-wrap">
        <hNav options="修改密码"></hNav>
        <div class="content-wrap">
          <el-form :model="From"  ref="ruleForm" class="demo-ruleForm" >
            <span class="title">旧密码：</span>
            <el-form-item  prop="name">
              <el-input v-model="From.oldPwd" type="password"></el-input>
            </el-form-item>
            <span class="title">新密码：</span>
            <el-form-item  prop="name">
              <el-input v-model="From.newPwd" type="password"></el-input>
            </el-form-item>
             确认密码：
            <el-form-item  prop="name">
              <el-input v-model="From.confirmPassword" type="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="btn" @click="handerClick">点击修改</el-button>
            </el-form-item>
          </el-form>
        </div>
    </div>
</template>

<script>
    import  hNav from "@/components/Hnav"
    export default {
        name: "index",
        data()
        {
          return{
            From:{
              newPwd:'',
              oldPwd:'',
              confirmPassword:'',
            }
          }
        },
        components:{
          "hNav":hNav
        },
        methods:{
          handerClick()
          {
             if(this.From.newPwd==this.From.confirmPassword)
             {
               this.axios.get("/hhdj/user/updatePwd.do",{newPwd:this.From.newPwd,oldPwd:this.From.oldPwd}).then(res=>{
                 if(res.code==1)
                 {
                   this.From={
                     newPwd:'',
                     oldPwd:'',
                     confirmPassword:'',}
                     this.$router.go(-1);
                 }
               })
             }
          }
        }
    }
</script>

<style scoped>
.changePassword-wrap
{
  width: 7.5rem;
}
.content-wrap
{
  font-size: 16px;
  margin-top: 50px;
}
.title
{
  font-size: 16px;
  color:#333;
}
.demo-ruleForm
{
  padding: 30px;
}
.btn
{
  background: #ef473a;
  color:#fff;
  width: 100%;
}
</style>
