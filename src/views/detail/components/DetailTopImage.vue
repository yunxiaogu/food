<!-- 详情页-顶部预览图组件 -->
<template>
  <div class="top-wrap">
    <div class="img-wrap">
      <img :src="pic" alt="">
    </div>
    <div class="title-wrap">
      <h2 class="title-name common">{{title}}</h2>
      <span class="title-pnum common">{{peoplenum}}</span>
      <span class="title-ptime common">{{preparetime}}</span>
      <span class="title-ctime common">{{cookingtime}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailTopImage',
    props: {
      title: '',
      peoplenum: '',
      preparetime: '',
      cookingtime: '',
      pic: ''
    }
  }
</script>

<style scoped>
  .top-wrap {
    height: 320px;
    position: relative;
    /* overflow: hidden; */
  }

  .img-wrap {
    height: 100%;
    text-align: center;
  }

  .img-wrap img {
    width: 100%;
    height: 100%;
    transition: ;
  }

  .title-wrap {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding: 10px 10px;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    background: -ms-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    background: -webkit-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    background: -moz-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  }

  .title-wrap .common {
    color: #FFFFFF;
  }

  .title-name {
    margin: 15px 0;
  }

  .title-pnum {
    display: block;
  }

  .title-pnum,
  .title-ptime,
  .title-ctime {
    font-size: 12px;
  }

  .title-ctime {
    padding: 20px;
  }

</style>
