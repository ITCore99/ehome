<template>
 <div>
     <myHeader></myHeader>
     <router-view/>
     <myFooster></myFooster>
 </div>
</template>

<script>
    import Myfooter from "@/components/fooster"
    import Myheader from "@/components/header"
    export default {
        name: "index",
        components:{
          "myFooster":Myfooter,
          "myHeader":Myheader,
        }
    }
</script>

<style scoped>

</style>
