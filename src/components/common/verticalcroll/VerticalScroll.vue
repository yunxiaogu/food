<!-- 垂直滚动组件 -->
<template>
  <div class="wrapper" ref="verticalScroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'VerticalScroll',
    props: {
      bounce: {
        type: Boolean,
        default: true
      },
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    // 如果写在created生命周期函数中，此时模板还没挂载，获取不到.wrapper元素
    mounted() {
      this.scroll = new BScroll(this.$refs.verticalScroll, {
        click: true,
        scrollbar: false,
        bounce: this.bounce,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        stopPropagation: true
      })

      this.scroll.on('scroll', (position) => {
        // 将位置传出去
        this.$emit('scroll', position)
      })

      // 监听上拉加载
      // if (this.probeType == 2 || this.probeType == 3) {
      //   this.scroll.on('pullingUp', () => {
      //     this.$emit('pullingUp')
      //   })
      // }

      // 监听上拉加载
      if (this.pullUpLoad) {
        this.scroll.on('pullUpLoad', () => {
          // 滚动到底部了，但是需要外部组件知道跑，传递出去
          this.$emit('pullUpLoad')
        })
      }
    },
    methods: {
      // 将scroolTo方法暴露出去
      scrollTo(x, y, time) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      // 结束上拉操作
      finishPullUp() {
        this.scroll && this.scroll && this.scroll.finishPullUp()
      },
      // 刷新
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    width: 100%;
    height: 100%;
  }
</style>
