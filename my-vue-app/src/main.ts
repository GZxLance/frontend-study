import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';


const app = createApp(App);

//使用插件
app.use(ElementPlus);

//挂载vue应用
app.mount('#app');
