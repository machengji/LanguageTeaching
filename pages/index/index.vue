<template>
	<view class="container">
		<view class="intro">
			本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。
		</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>

		<!-- 添加按钮 -->
		<button type="primary" @click="navigateToDemo">跳转到 Demo 页面</button>

		 <MyTabBar />
	</view>
</template>

<script setup>
import { ref } from 'vue';


import MyTabBar from '@/components/tabar/tabar.vue'; // 引入 MyTabBar 组件


const navigateToDemo = () => {
	uni.switchTab({
		url: '/pages/demo/demo'
	});
};

</script>

<style>
/* .container {
	padding: 20px;
	font-size: 14px;
	line-height: 24px;
} */
</style>
