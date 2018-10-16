<template>
    <div class="today-wraper">
        <div v-html="datas"></div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data()
        {
          return{
            datas:""
          }
        },
        methods:{
          getData()
          {

            this.axios.get("http://211.67.177.56:8080/hhdj/proxy/proxy.do",{url:"http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70502%2Findex.html"}).then(res=>{
              console.log(res);
                this.datas=res
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

</style>
