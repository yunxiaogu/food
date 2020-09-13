<!-- 底部导航栏组件 -->
<template>
  <div class="tab-bar">
    <TabBarItem path="/home">
      <div class="iconfont icon-home" slot="icon"></div>
      <div class="iconfont icon-homefill" slot="icon-active"></div>
      <div slot="title">首页</div>
    </TabBarItem>
    <TabBarItem path="/category">
      <div class="iconfont icon-category" slot="icon"></div>
      <div class="iconfont icon-categoryfill" slot="icon-active"></div>
      <div slot="title">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart">
      <div class="iconfont icon-cart" slot="icon"></div>
      <div class="iconfont icon-cartfill" slot="icon-active"></div>
      <div slot="title">购物车</div>
    </TabBarItem>
    <TabBarItem path="/mine">
      <div class="iconfont icon-people" slot="icon"></div>
      <div class="iconfont icon-peoplefill" slot="icon-active"></div>
      <div slot="title">我的</div>
    </TabBarItem>
  </div>
</template>

<script>
  import TabBarItem from './TabBarItem.vue'

  export default {
    name: 'TabBar',
    components: {
      TabBarItem
    }
  }
</script>

<style scoped>
  .tab-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 10px 15px 1px #000000;
    overflow: hidden;
  }
</style>
