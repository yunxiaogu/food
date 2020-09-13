<!-- 底部导航栏-子项组件 -->
<template>
  <div class="item" :class="{activeStyle: isActive}" @click="itemClick">
    <div class="container">
      <!-- 图标 -->
      <div class="icon-wrap" v-if="!isActive">
        <slot name="icon"></slot>
      </div>
      <div class="icon-wrap" v-else>
        <slot name="icon-active"></slot>
      </div>
      <!-- 标题 -->
      <div class="title-wrap" :class="{titleStyle: isActive}">
        <slot name="title"></slot>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: {
        type: String,
        default() {
          return '/' + Math.random() * 1000
        }
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path, (success) => {
          return
        }, (err) => {
          return
        })
      }
    }
  }
</script>

<style scoped>
  .item {
    height: var(--tab-bar-height);
    color: var(--theme-color);
    flex: 1;
    font-size: 14px;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
  }

  .container {
    width: 80px;
    height: 40px;
  }

  .icon-wrap {
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title-wrap {
    height: 25px;
    color: #8C8C8C;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
  }

  /* 点击选中后的样式 */
  .activeStyle {
    background-color: #8C8C8C20;
    background-color: rgba(140, 140, 140, 0.1);
  }
  .titleStyle {
    font-weight: bold;
    color: #000000;
  }
</style>
