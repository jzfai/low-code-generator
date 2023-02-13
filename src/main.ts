import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'

//import theme
import './theme/index.scss'

//import unocss
import 'uno.css'

//i18n
import { setupI18n } from '@/lang'
import '@/styles/index.scss' // global css

//svg-icon
import 'virtual:svg-icons-register'
import svgIcon from '@/icons/SvgIcon.vue'
import directive from '@/directives'

//import router intercept
import './permission'

//import element-plus
import 'element-plus/dist/index.css'

//json-views
//添加样式
const app = createApp(App)

//router
app.use(router)

//pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

//i18n
app.use(setupI18n)
app.component('SvgIcon', svgIcon)
directive(app)

//jsonEidt
import "jsoneditor";
import JsonEditorVue from 'json-editor-vue3'
app.use(JsonEditorVue)

//element-plus
app.use(ElementPlus)
app.mount('#app')
