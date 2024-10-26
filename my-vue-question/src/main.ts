import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
  components: {
    ClassicEditor: ClassicEditor
  }
}



const pinia = createPinia();
// createApp(App).use(pinia).use(router).use(ElementPlus).mount("#app");

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.mount('#app');