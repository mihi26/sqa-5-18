import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/base.css'
import App from './App.vue'
import router from './router'
import Unicon from 'vue-unicons'
import vClickOutside from 'click-outside-vue3'
import { uniUser, uniLock, uniAngleLeftB, uniSearch, uniAngleDown } from 'vue-unicons/dist/icons'

const app = createApp(App)
Unicon.add([uniUser, uniLock, uniAngleLeftB, uniSearch, uniAngleDown])
app.use(vClickOutside)
app.use(Unicon)
app.use(createPinia())
app.use(router)

app.mount('#app')
