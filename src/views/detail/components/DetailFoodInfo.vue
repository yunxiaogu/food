<!-- 详情页-食物简介组件 -->
<template>
  <div class="info">
    <!-- 介绍语 -->
    <div class="content-wrap">
      {{content}}
    </div>
    <!-- 标签 -->
    <div class="tag-wrap">
      <div class="tag" v-for="item in tagList" :key="item">{{item}}</div>
    </div>
    <!-- 原材料 -->
    <div class="meterial-wrap">
      <!--      <table>
        <tr v-for="item in material" :key="item.mname">
          <td>{{item.mname}}</td>
          <td>{{item.amount}}</td>
        </tr>
      </table> -->
      <div class="m-wrap" v-for="item in material" :key="item.mname">
        <div class="name">{{item.mname}}</div>
        <div class="amount">{{item.amount}}</div>
      </div>
    </div>
    <!-- 制作过程 -->
    <div class="process-wrap">
      <div v-for="item in process">
        <img :src="item.pic" alt="">
        <span>{{item.pcontent}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailFoodInfo',
    props: {
      content: '',
      tag: '',
      material: {
        type: Array,
        default () {
          return []
        }
      },
      process: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        tagList: []
      }
    },
    created() {
      this.tagList = this.tag.split(',')
    }
  }
</script>

<style scoped>
  .content-wrap {
    padding: 10px;
    font-size: 15px;
    letter-spacing: 1px;
  }

  .tag-wrap {
    text-align: center;
  }

  .tag-wrap .tag {
    /* width: 50px; */
    padding: 2px 6px;
    height: 25px;
    display: inline-block;
    line-height: 25px;
    border: none;
    margin: 5px;
    background-color: var(--theme-color);
    font-size: 12px;
    color: #FFFFFF;
    text-align: center;
    border-radius: 5px;
  }

  .m-wrap {
    display: flex;
    padding: 5px;
    border-bottom: 1px solid #CCCCCC;
  }

  .m-wrap .name {
    flex: 1;
  }

  .m-wrap .amount {
    flex: 1;
  }
</style>
