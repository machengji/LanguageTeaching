// src/stores/tabBarStore.js
import { defineStore } from 'pinia';

export const useTabBarStore = defineStore('tabBar', {
  state: () => ({
    currentTabIndex: 0, // 默认选中第一个 Tab
  }),
  actions: {
    setTabIndex(index) {
      this.currentTabIndex = index;
      this.saveTabIndexToStorage(index); // 保存到本地存储
    },
    loadTabIndexFromStorage() {
      const storedIndex = uni.getStorageSync('lastTabIndex');
      if (storedIndex !== undefined) {
        this.currentTabIndex = storedIndex;
      }
    },
    saveTabIndexToStorage(index) {
      uni.setStorageSync('lastTabIndex', index);
    },
  },
});
