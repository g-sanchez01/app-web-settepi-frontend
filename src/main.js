import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import { plugin } from '@formkit/vue'
import formkitConfig from './config/formkit.config'


const app = createApp(App)

app.use(createPinia())
app.use(router)

// 👇 SOLO UNO
app.use(plugin, formkitConfig)

app.mount('#app')