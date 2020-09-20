<!-- 首页组件 -->
<template>
  <div class="home">
    <!-- 搜索框 -->
    <HomeSearchBar :inputValue="typeList[0] && typeList[0].name" @searchClick="searchClick"></HomeSearchBar>

    <!-- 分类导航-隐藏 -->
    <HomeFoodTypesBar class="hide-type-bar" ref="hideTypesBar" :list="typeList" @itemClick="itemClick" v-show="isShowHideBar"></HomeFoodTypesBar>

    <!-- 滚动优化 -->
    <VerticalScroll class="vertical-scroll" ref="verticalScroll" :bounce="false" :probe-type="3" @scroll="scrollEvent">
      <!-- 轮播图 -->
      <HomeSwiper :imgList="swiperList"></HomeSwiper>
      <!-- 分类导航栏 -->
      <HomeFoodTypesBar ref="typesBar" :list="typeList" @itemClick="itemClick"></HomeFoodTypesBar>
      <!-- 食物列表 -->
      <FoodList :foodList="getFoodList(classid)"></FoodList>
    </VerticalScroll>

    <!-- 回到顶部 -->
    <Backtop @click.native="backTopClick" v-show="isShowBackTop"></Backtop>
  </div>
</template>

<script>
  import HomeSearchBar from './components/HomeSearchBar.vue'
  import HomeSwiper from './components/HomeSwiper.vue'
  import HomeFoodTypesBar from './components/HomeFoodTypesBar.vue'

  import VerticalScroll from '../../components/common/verticalcroll/VerticalScroll.vue'
  import FoodList from '../../components/content/foodList/FoodList.vue'
  import Backtop from '../../components/content/backTop/BackTop.vue'

  import {
    getFoodData,
    getScrollData,
    getFoodByClassId
  } from '../../network/home.js'

  import {
    homeFoodTypeList,
    homeFoodList
  } from '../../assets/json/homeData.js'

  export default {
    name: 'Home',
    components: {
      HomeSearchBar,
      HomeSwiper,
      HomeFoodTypesBar,
      VerticalScroll,
      FoodList,
      Backtop
    },
    data() {
      return {
        swiperList: ["http://api.jisuapi.com/recipe/upload/20160719/115138_46688.jpg",
          "http://api.jisuapi.com/recipe/upload/20160719/115155_93501.jpg",
          "http://api.jisuapi.com/recipe/upload/20160719/115218_38602.jpg"
        ],
        typeList: [],
        foodList: [],
        classid: 0,
        isShowHideBar: false,
        isShowBackTop: false,
        testList: []
      }
    },
    created() {
      // 获取轮播图数据
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
      // })
      // 获取菜品列表数据
      // this.typeList && this.typeList.forEach((value) => {
      //   getFoodByClassId(value.classid, 0, 20).then(res => {
      //     this.testList.push({
      //       classid: res.result.list[0].classid,
      //       list: res.result.list.map((item) => {
      //         return (({cookingtime, classid, id, name, peoplenum, pic}) => {
      //           return {cookingtime, classid, id, name, peoplenum, pic}
      //         })(item)
      //       }),
      //       num: res.result.num
      //     })
      //   })
      // })

      this.typeList = homeFoodTypeList
      this.foodList = homeFoodList.sort((a, b) => a.classid - b.classid)
      this.classid = this.foodList[0].classid
    },
    methods: {
      // 监听搜索框点击事件
      searchClick(inputValue) {
        console.log(inputValue)
      },
      // 监听食物种类点击
      itemClick(foodType, index) {
        this.classid = foodType
        this.$refs.hideTypesBar.currentIndex = index
        this.$refs.typesBar.currentIndex = index
      },
      getFoodList(classid) {
        return this.foodList.find(v => v.classid == classid).list
      },
      // 滚动监听
      scrollEvent(position) {
        this.isShowHideBar = position.y < -150
        this.isShowBackTop = position.y < -700
      },
      // 回到顶部
      backTopClick() {
        this.$refs.verticalScroll.scrollTo(0, 0, 500)
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

  .hide-type-bar {
    position: fixed;
    left: 0;
    right: 0;
    background-color: #0196C7;
    z-index: 10;
  }
</style>
