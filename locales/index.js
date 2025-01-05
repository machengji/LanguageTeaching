
import { createI18n } from 'vue-i18n'

// 导入语言文件
import ha from './zh-Hans.json'
import en from './en-US.json'


const i18n = createI18n({
  // locale: 'en-US', // 直接设置为英文
  locale: uni.getLocale() || 'zh-Hans', // 设置默认语言，优先使用 UniApp 的语言设置
  fallbackLocale: 'zh-Hans', // 设置回退语言
  messages: {
    'zh-Hans': ha,
    'en-US': en
  }
})

export default i18n;
