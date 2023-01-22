import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/app.scss'
import FirebaseVue from './firebase'

const app = createApp(App)
app.config.globalProperties.$firebase = FirebaseVue
app.use(router).mount('#app')
