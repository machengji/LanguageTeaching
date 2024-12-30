<template>
	<view class="container">

		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>

		<!-- 添加按钮 -->
		<button type="primary" @click="navigateToDemo">跳转到 Demo 页面</button>

	</view>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // 如果你使用了 vue-router

export default {
  setup() {
    const href = ref('https://uniapp.dcloud.io/component/README?id=uniui');

    // UniApp 中没有 vue-router，使用 uni.navigateTo
    const navigateToDemo = () => {
      uni.navigateTo({
        url: '/pages/demo/demo'
      });
    };

    return {
      href,
      navigateToDemo
    };
  }
}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
