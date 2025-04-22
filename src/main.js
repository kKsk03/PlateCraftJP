import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md3 } from 'vuetify/blueprints'

const vuetify = createVuetify({
    components,
    directives,
    blueprint: md3
})

// i18n
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: localStorage.getItem('lang') && localStorage.getItem('lang') !== 'undefined' || 'zh-CN',
    messages: {
        'zh-CN': (await import('./locales/zh-CN.js')).default, // 简体中文
        'zh-TW': (await import('./locales/zh-TW.js')).default, // 繁體中文
        'en-US': (await import('./locales/en-US.js')).default, // English (United States)
        'ja-JP': (await import('./locales/ja-JP.js')).default, // 日本語
    }
})

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(i18n)
app.mount('#app')
