// src/stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'UniApp User',
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
    doubleCountPlusOne() {
      return this.doubleCount + 1
    },
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    incrementBy(amount) {
      this.count += amount
    },
  },
})
