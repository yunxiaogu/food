<!-- 首页-搜索框组件 -->
<template>
  <div class="search">
    <NavBar c-flex="3">
      <template #left>
        <div
        class="logo-wrap">
          <img src="~assets/img/food_logo.png" alt="">
        </div>
      </template>
      <template #center>
        <div class="input-wrap">
          <input class="input" type="text" readonly="readonly" :value="inputValue" @click="searchClick">
        </div>
      </template>
      <template #right>
        <div class="icon-wrap">
          <div class="iconfont icon-search"></div>
        </div>
      </template>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from '../../../components/common/navbar/NavBar.vue'

  export default {
    name: 'HomeSearchBar',
    components: {
      NavBar
    },
    props: {
      inputValue: ''
    },
    methods: {
      searchClick(event) {
        this.$emit('searchClick', this.inputValue)
      }
    }
  }
</script>

<style scoped>
  .search {
    height: 44px;
    position: relative;
    z-index: 10;
  }

  .logo-wrap {
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .logo-wrap img {
    /* width: 100%; */
    height: 100%;
  }

  .input-wrap {
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .input-wrap .input {
    width: 100%;
    min-width: 70px;
    height: 25px;
    border: none;
    color: #CCCCCC;
    font-size: 14px;
    text-indent: 10px;
    border-radius: 30px;
    background-color: #FFFFFF;
  }

  .icon-wrap {
    width: 58px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon-wrap .icon-search {
    font-size: 20px;
  }

</style>
