<!-- 食物种类导航栏组件 -->
<template>
  <div class="type-bar">
    <HorizontalScroll :bounce="false">
      <div class="item-wrap" v-for="(item, index) in list" :key="item.name" @click="itemClick(item, index)">
        <div class="item-title" :class="{active: index==currentIndex}">{{item.name}}</div>
      </div>
    </HorizontalScroll>
  </div>
</template>

<script>
  import HorizontalScroll from 'components/common/horizontalscroll/HorizontalScroll.vue'

  export default {
    name: 'HomeFoodTypesBar',
    props: {
      list: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    components: {
      HorizontalScroll
    },
    computed: {
      isActive() {
        return this.currentIndex == this.lastIndex
      }
    },
    methods: {
      itemClick(item, index) {
        this.currentIndex = index
        this.$emit('itemClick', item.classid, index)
      },
      changeIndex(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .type-bar {
    height: 40px;
    background-color: var(--theme-color);
  }

  .item-wrap {
    height: 40px;
    width: 50px;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    font-size: 13px;
    color: #FFFFFF;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .item-wrap .item-title {
    padding: 0 2px;
    border-radius: 5px;
    white-space: nowrap;
    overflow: hidden;
  }

  .active {
    width: 38px;
    height: 36px;
    margin: 2px auto;
    color: #000000;
    line-height: 36px;
    background-color: rgba(255, 255, 255, .5);
  }
</style>
