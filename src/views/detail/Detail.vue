<!-- 详情界面组件 -->
<template>
  <div class="detail">
    <!-- 顶部导航栏 -->
    <DetailNavBar title="详情页"></DetailNavBar>

    <!-- 垂直滚动优化组件 -->
    <VerticalScroll class="vertical-scroll" ref="dVerticalScroll">
      <!-- 食物图片 -->
      <DetailTopImage :title="foodList.name" :peoplenum="foodList.peoplenum" :preparetime="foodList.preparetime"
        :cookingtime="foodList.cookingtime" :pic="foodList.pic"></DetailTopImage>

      <!-- 食物简介 -->
      <DetailFoodInfo :content="foodList.content" :tag="foodList.tag" :material="foodList.material" :process="foodList.process"></DetailFoodInfo>
    </VerticalScroll>
  </div>
</template>

<script>
  import DetailNavBar from './components/DetailNavBar.vue'
  import DetailTopImage from './components/DetailTopImage.vue'
  import DetailFoodInfo from './components/DetailFoodInfo.vue'

  import VerticalScroll from '../../components/common/verticalcroll/VerticalScroll.vue'

  import {
    getFoodDetailByClassid
  } from '../../network/detail.js'

  import {
    detail
  } from '../../assets/json/detailData.js'

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailTopImage,
      DetailFoodInfo,
      VerticalScroll
    },
    data() {
      return {
        classid: 0,
        foodList: {}
      }
    },
    created() {
      this.classid = this.$route.query.classid

      // getFoodDetailByClassid(this.classid).then(res => {
      //   this.foodList = res.result
      // })

      this.foodList = detail
    }
  }
</script>

<style scoped>
  .detail {
    height: 100vh;
    overflow: hidden;
  }

  .vertical-scroll {
    height: calc(100% - 93px);
  }
</style>
