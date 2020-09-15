<!-- 首页-轮播图组件 -->
<template>
  <div class="swiper">
    <el-carousel height="150px" trigger="click" arrow="always" :autoplay="autoplay">
      <el-carousel-item v-for="item in imgList" :key="item">
        <el-image class="img" :src="item" fit="cover"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props: {
      imgList: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        autoplay: false
      }
    }
  }
</script>

<style scoped>
  .swiper {
    height: 150px;
    overflow: hidden;
  }

  .img {
    width: 100%;
    height: 100%;
  }


</style>
