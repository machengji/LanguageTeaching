<template>
	<view>
		<MyCustomNavBar title="自定义导航demo" background-color="#FF6B6B">
			<template v-slot:right>
				<up-icon name="photo"></up-icon>
			</template>
		</MyCustomNavBar>
		<view  class="content">
			<text>Count: {{ count }}</text>
			<text>Double Count: {{ doubleCount }}</text>
			<button @click="increment">Increment</button>
			<button @click="decrement">Decrement</button>
			<button @click="incrementBy(5)">Increment by 5</button>
		<!-- 	<MyTabBar /> -->
		</view>
	</view>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
import MyTabBar from '@/components/tabar/tabar.vue';
import MyCustomNavBar from '@/components/customnav/customnav.vue'; // 引入 MyTabBar 组件

const counterStore = useCounterStore();

const { count, doubleCount } = storeToRefs(counterStore);

const increment = () => {
	counterStore.increment();
};

const decrement = () => {
	counterStore.decrement();
};

const incrementBy = (amount) => {
	counterStore.incrementBy(amount);
};
</script>

<style lang="scss">
.content {
	margin-top:88rpx /* 留出导航栏的高度 */
	// padding: 20px;
}
</style>
