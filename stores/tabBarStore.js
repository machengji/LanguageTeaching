// stores/tabBarStore.js
import { defineStore } from 'pinia';

export const useTabBarStore = defineStore('tabBarStore', {
  state: () => ({
    currentTabIndex: 0,
  }),
  actions: {
    setTabIndex(index) {
      this.currentTabIndex = index;
    },
  },
});
