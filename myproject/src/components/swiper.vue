<template>
  <div class="wraper">
    <div class="swiper-container"  id="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in datas" :key="index">
              <img :src="item.imgUrl" alt=""/>
              <div class="title">{{item.title}}</div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
    export default {
        name: "swiper",
        data(){
          return{
            datas:[],
          }
        },
        methods:{
          getData()
          {
            this.axios.get("/hhdj/carousel/carouselList.do",{type:0}).then(res=>{
               if(res.code==1)
               {
                 this.datas=res.rows
               }
            });
          }
        },
        created()
        {
          this.getData()
        },
        mounted()
        {
          var myswiper=new Swiper("#swiper",{
            autoplay:true,
            loop:true,
            observer:true,
            observeParents:true,
            autoplayDisableOnInteraction : false,

          })
        }
    }

</script>

<style scoped>
.swiper-container
{
  width: 7.5rem;
  height: 3.8rem;
  margin-top: 44px;
  position: relative;
}
.title
{
  position: absolute;
  bottom:0px;
  left: 0px;
  right: 0px;
  font-size: 16px;
  line-height: 2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
  background:rgba(0,0,0,0.3);
  padding-left: 10px;
  color:#fff;
  z-index: 100;
}
img
{
  width: 7.5rem;
  height: 3.8rem;
 display: block;
}
</style>
