import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/base.css'
import App from './App.vue'
import router from './router'
import Unicon from 'vue-unicons'
import { uniUser, uniLock } from 'vue-unicons/dist/icons'

const app = createApp(App)
Unicon.add([uniUser, uniLock])
app.use(Unicon)
app.use(createPinia())
app.use(router)

app.mount('#app')
