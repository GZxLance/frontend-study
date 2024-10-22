import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"

//引入pinnia
import { createPinia } from "pinia";
//实例化 pinia
const pinia = createPinia();

//持久化插件
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
pinia.use(piniaPluginPersistedstate);

import router from "./router";
createApp(App).use(pinia).use(router).mount("#app");
