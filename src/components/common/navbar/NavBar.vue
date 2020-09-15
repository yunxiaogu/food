<!-- 导航栏组件 -->
<template>
  <div class="navbar">
    <div class="left-wrap" ref="leftWrap">
      <slot name="left"></slot>
    </div>
    <div class="center-wrap" ref="centerWrap">
      <slot name="center"></slot>
    </div>
    <div class="right-wrap" ref="rightWrap">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    props: {
      lFlex: {
        type: String,
        default: '1'
      },
      cFlex: {
        type: String,
        default: '1'
      },
      rFlex: {
        type: String,
        default: '1'
      }
    },
    computed: {
      leftFlex: function() {
        return this.lFlex && parseInt(this.lFlex.trim())
      },
      centerFlex: function() {
        return this.cFlex && parseInt(this.cFlex.trim())
      },
      rightFlex: function() {
        return this.rFlex && parseInt(this.rFlex.trim())
      }
    },
    mounted() {
      this.$refs.leftWrap.style.flex = this.leftFlex
      this.$refs.centerWrap.style.flex = this.centerFlex
      this.$refs.rightWrap.style.flex = this.rightFlex
    }
  }
</script>

<style scoped>
  .navbar {
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--theme-color);
  }

  .left-wrap,
  .center-wrap,
  .right-wrap {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
