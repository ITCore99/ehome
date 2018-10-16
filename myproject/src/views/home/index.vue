<template>
    <div>
      <myswiper></myswiper>
      <mysudoku></mysudoku>
      <mybottomnav></mybottomnav>
    </div>
</template>
<script>
    import Myswiper from "@/components/swiper"
    import Mysudoku from "@/components/Sudoku"
    import Mybottomnav from "@/components/bottomNav"
    export default {
        name: "index",
        components:{
          "myswiper":Myswiper,
          "mysudoku":Mysudoku,
          "mybottomnav":Mybottomnav,
        }
    }
</script>

<style scoped>

</style>
