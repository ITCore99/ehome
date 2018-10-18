<template>
    <div class="message" v-text="title"></div>
</template>

<script>
    export default {
        name: "message",
        props:{
          title:{
            type:String,
          }
        },
    }
</script>

<style scoped>
 @keyframes track
 {
    0% { bottom:-100px;}
    50% { bottom:250px;}
    100% {bottom: 250px;}
 }
.message
{
  box-sizing: border-box;
  padding:5px;
  text-align: center;
  font-size: 14px;
  color:#fff;
  border: 1px solid #888;
  background: rgba(0,0,0,0.6);
  border-radius:10px;
  display:inline-block;
  position:fixed;
  bottom:-100px;
  left:50%;
  transform: translateX(-50%);
  animation:track 2s ;
  z-index: 998;

}
</style>
