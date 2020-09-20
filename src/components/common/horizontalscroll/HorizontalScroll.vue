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
      probeType: 0
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
          bounce: this.bounce,
          probeType: this.probeType
        })
        // 监听滚动的位置
        this.scroll.on('scroll', (position) => {
          // 将位派送出去
          this.$emit('scroll', position)
        })
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
