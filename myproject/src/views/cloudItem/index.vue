<template>
    <div class="cloud-wrp">
        <hnav options="党员云互动"></hnav>
        <cloud :options="datas"></cloud>
    </div>
</template>

<script>
    import cloudInt from "@/components/cloudInteraction"
    import Hnav from "@/components/Hnav"
    export default {
        name: "index",
        data()
        {
          return{
            datas:[]
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
          }
        },
        components:{
          "cloud":cloudInt,
           "hnav":Hnav
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
}
</style>
