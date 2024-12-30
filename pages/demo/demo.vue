<template>
  <view>
    <text>Count: {{ count }}</text>
    <text>Double Count: {{ doubleCount }}</text>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="incrementBy(5)">Increment by 5</button>
  </view>
</template>

<script setup>
import { useCounterStore } from '@/store/counter';
import { storeToRefs } from 'pinia';

const counterStore = useCounterStore();

// 解构 state 的响应式引用，这样在模板中可以直接使用
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
