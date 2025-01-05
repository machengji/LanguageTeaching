
import i18n from '@/locales/index.js'


// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import '@/styles/global.scss';
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import { createI18n } from 'vue-i18n'
import '@/styles/global.scss';
import App from './App.vue'
import { createPinia } from 'pinia'


export function createApp() {
  const app = createSSRApp(App) // 先创建 Vue 应用实例
  const pinia = createPinia()
  app.use(pinia) // 然后挂载 Pinia
  app.use(i18n) // 挂载 i18n 实例
  return {
    app
  }
}
// #endif
