import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App).use(store).use(router).use(VueAxios, axios);

app.provide("axios", app.config.globalProperties.axios);

app.mount("#app");
