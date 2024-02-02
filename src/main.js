import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

//router link
import router from './router/index.js'
app.use(router)

//axios
import axios from 'axios'
window.axios = axios

//ant design vuejs
import { 
    Button,
    Drawer,
    List,
    Menu,
    Card,
    Table,
    message 
} from 'ant-design-vue'
app.use(Button)
app.use(Drawer)
app.use(List)
app.use(Menu)
app.use(Card)
app.use(Table)
app.config.globalProperties.$message = message

//pinia
import { createPinia } from 'pinia'
app.use(createPinia())

//bootstarp
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'
import 'ant-design-vue/dist/reset.css'

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons' 
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
app.component('font-awesome-icon', FontAwesomeIcon)

//stylesheet
import '@/assets/theme/frontends/css/base/style.css'
import '@/assets/theme/frontends/css/admin/style.css'

//mount app
app.mount('#app')
