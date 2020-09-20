<!-- 详情页-导航栏组件 -->
<template>
  <div class="navbar">
    <NavBar c-flex="3">
      <template #left>
        <div class="iconfont icon-back1"></div>
      </template>
      <template #center>
        <div class="title">{{title}}</div>
      </template>
      <template #right>
        <div class="iconfont icon-share"></div>
      </template>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from '../../../components/common/navbar/NavBar.vue'

  export default {
    name: 'DetailNavBar',
    components: {
      NavBar
    },
    props: {
      title: ''
    }
  }
</script>

<style scoped>
  .navbar {
    height: 44px;
    position: relative;
    z-index: 10;
  }
  
  .title {
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 44px;
    letter-spacing: 5px;
  }
</style>
