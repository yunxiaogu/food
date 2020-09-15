<!-- 食物列表-子项组件 -->
<template>
  <div class="item">
    <div class="img-wrap">
      <img src="~assets/img/test_1.jpeg" alt="">
    </div>
    <div class="title-wrap">这是标题</div>
  </div>
</template>

<script>
  export default {
    name: 'FoodListItem',
    props: {
      food: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .item {
    width: 120px;
    height: 150px;
    margin: 12px;
    border-radius: 5px;
    overflow: hidden;
  }

  .img-wrap {
    height: 120px;
  }
  .img-wrap img {
    width: 100%;
  }

  .title-wrap {
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: aqua;
    overflow: hidden;
  }

</style>
