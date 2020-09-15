<!-- 首页组件 -->
<template>
  <div class="home">
    <!-- 搜索框 -->
    <HomeSearchBar :inputValue="typeList[0] && typeList[0].name" @searchClick="searchClick"></HomeSearchBar>

    <!-- 滚动优化 -->
    <VerticalScroll class="vertical-scroll">
      <!-- 轮播图 -->
      <HomeSwiper :imgList="swiperList"></HomeSwiper>
      <!-- 分类导航栏 -->
      <HomeFoodTypesBar :list="typeList" @itemClick="itemClick"></HomeFoodTypesBar>
      <!-- 食物列表 -->
      <FoodList :foodList='foodList'></FoodList>
    </VerticalScroll>
  </div>
</template>

<script>
  import HomeSearchBar from './components/HomeSearchBar.vue'
  import HomeSwiper from './components/HomeSwiper.vue'
  import HomeFoodTypesBar from './components/HomeFoodTypesBar.vue'

  import VerticalScroll from '../../components/common/verticalcroll/VerticalScroll.vue'
  import FoodList from '../../components/content/foodList/FoodList.vue'

  import {
    getFoodData,
    getScrollData,
    getFoodByClassId
  } from '../../network/home.js'

  export default {
    name: 'Home',
    components: {
      HomeSearchBar,
      HomeSwiper,
      HomeFoodTypesBar,
      VerticalScroll,
      FoodList
    },
    data() {
      return {
        swiperList: ["http://api.jisuapi.com/recipe/upload/20160719/115138_46688.jpg",
          "http://api.jisuapi.com/recipe/upload/20160719/115155_93501.jpg",
          "http://api.jisuapi.com/recipe/upload/20160719/115218_38602.jpg"
        ],
        typeList: [],
        foodList: []
      }
    },
    created() {
      // getFoodData('白菜', 3).then(res => {
      //   this.swiperList = res.list.map(v => {
      //     return v.pic
      //   })
      // })
      // 获取菜品种类导航栏数据
      // getScrollData().then(res => {
      //   res.result.forEach((value, index) => {
      //     this.typeList.push(value.list[0])
      //   })
      //   // 获取菜品列表数据
      //   this.typeList && this.typeList.forEach((value) => {
      //     getFoodByClassId(value.classid, 0, 1).then(res => {
      //       console.log(res)
      //     })
      //   })
      // })
    },
    methods: {
      // 监听搜索框点击事件
      searchClick(inputValue) {
        console.log(inputValue)
      },
      // 监听食物种类点击
      itemClick(foodType) {
        console.log(foodType)
      }
    }
  }
</script>

<style scoped>
  .home {
    height: 100vh;
    overflow: hidden;
  }

  .vertical-scroll {
    height: calc(100% - 93px);
  }
</style>
