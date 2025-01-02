<template>
  <view class="custom-nav-bar" :style="{ backgroundColor: backgroundColor }">
    <view class="left-content" @click="navigateBack">
     <up-icon name="arrow-left"></up-icon>
    </view>
    <view class="title">{{ title }}</view>
    <view class="right-content">
      <!-- 自定义右侧内容 -->
      <slot name="right"></slot>
    </view>
  </view>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  backgroundColor: {
    type: String,
    default: '#007AFF'
  }
});

const navigateBack = () => {
  // uni.navigateBack();
};
</script>

<style lang="scss">
.custom-nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 88rpx; /* 固定导航栏高度，*/
  padding-top: 0; /* 不需要再为状态栏留白 */
  // padding-bottom: 20rpx;
  color: #fff;
  z-index: 999;

  .left-content,
  .right-content {
    padding: 0 30rpx;
    display: flex;
    align-items: center;
    height: 88rpx; /* 确保左右内容垂直居中 */
  }

  .title {
    flex: 1;
    text-align: center;
    font-size: 36rpx;
    font-weight: bold;
    line-height: 88rpx; /* 确保标题垂直居中 */
  }
}
</style>
