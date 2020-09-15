<!-- 食物种类导航栏组件 -->
<template>
  <div class="type-bar">
    <HorizontalScroll>
      <div class="item-wrap" :class="{active: index==currentIndex}" v-for="(item, index) in list" :key="item.name" @click="itemClick(item, index)">
        {{item.name}}
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
        this.$emit('itemClick', item.classid)
      }
    }
  }
</script>

<style scoped>
  .type-bar {
    height: 40px;
    width: 100vw;
    background-color: rgba(17, 196, 255, .1);
  }

  .item-wrap {
    height: 40px;
    width: 50px;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    font-size: 13px;
    color: #8C8C8C;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .active {
    height: 35px;
    color: #000000;
    font-weight: 600;
    background-color: rgba(17, 196, 255, .3);
    border-bottom: 5px solid #11C4FF;
  }
</style>
