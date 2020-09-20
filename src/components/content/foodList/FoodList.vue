<!-- 食物列表组件 -->
<template>
  <div class="food-list">
    <div class="food-wrap">
      <FoodListItem v-for="item in foodList" :key="item.id + ''" :food="item"></FoodListItem>
    </div>
  </div>
</template>

<script>
  import FoodListItem from './FoodListItem.vue'

  export default {
    name: 'FoodList',
    components: {
      FoodListItem
    },
    props: {
      foodList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .food-list {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .food-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
</style>
