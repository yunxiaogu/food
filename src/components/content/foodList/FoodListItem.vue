<!-- 食物列表-子项组件 -->
<template>
  <div class="item" @click.atop="itemClick">
    <div class="img-wrap">
      <img :src="food.pic" alt="">
    </div>
    <div class="title-wrap">
      <div class="title-top">{{food.name}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FoodListItem',
    props: {
      food: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      itemClick() {
        this.$router.push({
          path: '/detail',
          query: {
            classid: this.food.classid
          }
        })
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
    box-shadow: 3px 3px 8px -2px #090909;
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
    background-color: var(--theme-color);
    overflow: hidden;
  }

  .title-wrap .title-top {
    height: 30px;
    padding: 0 5px;
    line-height: 30px;
    font-size: 15px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
