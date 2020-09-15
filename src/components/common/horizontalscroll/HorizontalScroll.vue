<!-- 水平滚动组件 -->
<template>
  <div class="scroll-wrapper" ref="horizontalScroll">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'

  export default {
    name: 'HorizontalScroll',
    props: {
      // 是否开启回弹动画
      bounce: true,
      // 派发scroll事件的级别：0,1,2,3
      probeType: 0,
      // 是否开启上拉加载
      pullUpLoad: false
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.init()
    },
    beforeDestroy() {
      this.scroll.destroy()
    },
    methods: {
      init() {
        this.scroll = new BScroll(this.$refs.horizontalScroll, {
          scrollX: true,
          click: true,
          scrollbar: false,
          probeType: this.probeType
        })
        // 监听滚动的位置
        this.scroll.on('scroll', (position) => {
          // 将位派送出去
          this.$emit('scroll', position)
        })
        // 监听上拉加载
        // if(this.probeType == 2 || this.probeType ==3) {
        //   this.scroll.on('pullingUp', () => {
        //     this.$emit('pullingUp')
        //   })
        // }
        // 监听滚动到底部
        // if(this.pullUpLoad) {
        //   this.scroll.on('pullingUp', () => {
        //     // 滚动到底部了，但是需要外部组件知道跑，传递出去
        //     this.$emit('pulingUp')
        //   })
        // }
      }
    }
  }
</script>

<style scoped>
  .scroll-wrapper {
    white-space: nowrap;
  }

  .scroll-content {
    display: inline-block;
  }
</style>
