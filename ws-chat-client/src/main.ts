import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from "@/app/router"
import { createPinia } from 'pinia'

const pinia = createPinia()
createApp(App).use(router).use(pinia as any).mount('#app')
