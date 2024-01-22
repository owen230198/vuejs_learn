import { createApp } from 'vue'
import { 
    Button,
    Drawer,
    List,
    Menu,
    message 
} from 'ant-design-vue';
import { createPinia } from 'pinia';
import router from './router/index.js'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App);
app.use(router);
app.use(Button);
app.use(Drawer);
app.use(List);
app.use(Menu);
app.use(createPinia());
app.mount('#app');
app.config.globalProperties.$message = message;
