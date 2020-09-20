<!-- 回到顶部 -->
<template>
  <div class="backtop iconfont icon-backtop">
   <!-- <div class=""></div> -->
  </div>
</template>

<script>
  export default {
    name: 'BackTop'
  }
</script>

<style scoped>
 .backtop {
    width: 35px;
    height: 35px;
    position: fixed;
    right: 10px;
    bottom: 60px;
    border-radius: 50px;
    background-color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 36px;
    color: var(--theme-color);
    box-shadow: 0px 0px 10px -1px #000000;
    overflow: hidden;
  }

</style>
