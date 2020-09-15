<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <!-- 底部导航栏 -->
    <TabBar></TabBar>
  </div>
</template>

<script>
  import TabBar from './components/common/tabbar/TabBar.vue'

  export default {
    name: 'app',
    components: {
      TabBar
    }
  }
</script>

<style>
  @import url("./assets/css/common.css");
  
  #app {
    overflow: hidden;
  }
</style>
