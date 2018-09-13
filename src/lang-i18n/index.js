import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  messages: {
    'zh': require('./long_zh_CN'),
    'en': require('./long_en_US')
  }
})

export default i18n;
