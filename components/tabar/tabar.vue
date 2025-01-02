<template>
  <up-tabbar
    :value="tabBarStore.currentTabIndex"
    @change="handleTabClick"
    :fixed="true"
    :placeholder="true"
    :safeAreaInsetBottom="true"
  >
    <up-tabbar-item
      v-for="(tab, index) in defaultTabs"
      :key="index"
      :text="tab.text"
      :icon="tab.icon"
    ></up-tabbar-item>
  </up-tabbar>
</template>

<script setup>
import { useTabBarStore } from '@/stores/tabBarStore'; // 引入 Pinia store
import { ref } from 'vue';

const tabBarStore = useTabBarStore(); // 获取 store 实例

// 定义默认的 TabBar 项
const defaultTabs = ref([
  { text: '首页', icon: 'home', pagePath: '/pages/index/index' },
  { text: '我的', icon: 'photo', pagePath: '/pages/my/my' },
  { text: 'demo', icon: 'play-right', pagePath: '/pages/demo/demo' },
  { text: '我的', icon: 'account', pagePath: '/pages/my/my' },
]);

const handleTabClick = (index) => {
  tabBarStore.setTabIndex(index); // 更新 Pinia store 中的 currentTabIndex
  const route = defaultTabs.value[index].pagePath;
  if (route) {
    // 判断是否是 TabBar 页面，选择不同的跳转方式
    const tabBarPages = defaultTabs.value.map(item => item.pagePath);
    if (tabBarPages.includes(route)) {
      uni.switchTab({
        url: route,
      });
    } else {
      uni.navigateTo({
        url: route,
      });
    }
  }
};
</script>

<style scoped>
/* 你可以根据需要添加一些样式 */
</style>
