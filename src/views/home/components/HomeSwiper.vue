<!-- 首页-轮播图组件 -->
<template>
  <div class="swiper">
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper'
  }
</script>

<style scoped>

</style>
