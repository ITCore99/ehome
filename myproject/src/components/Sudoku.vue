<template>
  <div>
    <div class="sukudo">
      <router-link to="/newsEye">
         <div class="common">
            <img src="../image/sodoku/icon_01.png">
            <p class="content">信工新闻眼</p>
         </div>
      </router-link>
      <router-link to="/miniOrg">
        <div class="common">
          <img src="../image/sodoku/icon_03.png">
          <p class="content">掌上组织生活</p>
        </div>
      </router-link>
      <router-link to="/">
        <div class="common">
          <img src="../image/sodoku/icon_05.png">
          <p class="content">党员云互动</p>
        </div>
      </router-link>
      <router-link to="/fristWhiff">
        <div class="common" >
          <img src="../image/sodoku/icon_04.png">
          <p class="content">党建一点通</p>
        </div>
      </router-link>
      <router-link to="/identer">
        <div class="common">
          <img src="../image/sodoku/icon_06.png">
          <p class="content">党员亮身份</p>
        </div>
      </router-link>
      <router-link to="/today">
        <div class="common">
          <img src="../image/sodoku/icon_02.png">
          <p class="content">党史上的今天</p>
        </div>
      </router-link>
    </div>
    <div class="middleBackground">

    </div>
  </div>
</template>

<script>
    export default {
        name: "Sudoku"
    }
</script>

<style scoped>
  .sukudo{
    font-size: 12px;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 7.5rem;
  }
  .sukudo a{
    text-decoration: none;
  }
  .common
  {
    width: 2.5rem;
    height: 98px;
    text-align: center;
  }
  img
  {
    width: 50px;
    height: 50px;
  }
  .content
  {
    margin-top:8px;
    color: #888;
  }
  .middleBackground
  {
    width:7.5rem;
    background: url("../image/images/banner01@2x.png");
    background-size:cover;
    height:1.8rem;
    background-repeat: no-repeat;
  }
</style>
