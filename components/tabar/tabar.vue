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
import { useTabBarStore } from '@/stores/tabBarStore';
import { ref, onMounted } from 'vue';

const tabBarStore = useTabBarStore();

const defaultTabs = ref([
  { text: '首页', icon: 'home', pagePath: '/pages/index/index' },
  { text: '我的', icon: 'photo', pagePath: '/pages/my/my' },
  { text: 'demo', icon: 'play-right', pagePath: '/pages/demo/demo' },
  { text: '我的', icon: 'account', pagePath: '/pages/my/my' },
]);

// 在组件挂载时，从本地存储读取上次选中的 Tab 索引
onMounted(() => {
  tabBarStore.loadTabIndexFromStorage();
});

const handleTabClick = (index) => {
  tabBarStore.setTabIndex(index);
  const route = defaultTabs.value[index].pagePath;
  if (route) {
    uni.redirectTo({
      url: route,
    });
  }
};
</script>

<style scoped>
/* 你可以根据需要添加一些样式 */
</style>
