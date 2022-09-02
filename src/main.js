import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import { useAuthStore } from "@/stores/auth";

import { createRouter, createWebHistory } from "vue-router";
import "@/assets/styles/fonts.css";
import "@/assets/styles/main.css";
import "@/assets/styles/tailwind.css";
import App from "@/app.vue";
import { routes } from "@/routes.js";
import Notifications from "@kyvg/vue3-notification";

import axios from "axios";
import VueAxios from "vue-axios";
import VueDOMPurifyHTML from "vue-dompurify-html";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_PATH),
  routes,
});

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

app.use(router);
app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(Notifications);
app.use(VueDOMPurifyHTML);

const IN_PRODUCTION = process.env.NODE_ENV === "production";

const PRODUCTION_ENDPOINT = ""; // set production url here
const DEV_ENDPOINT = "http://localhost/SquareBlog/backend/public/";

axios.defaults.baseURL = IN_PRODUCTION ? PRODUCTION_ENDPOINT : DEV_ENDPOINT;

axios.defaults.withCredentials = true;

router.beforeEach((to) => {
  const auth = useAuthStore();

  const authRequired = to.meta.requiresAuth;
  // run below logic if the route needs authorization
  if (authRequired) {
    if (!auth.user) {
      // redirect to login page : state is undefined
      return "/login";
    }
  }
});

// Intercept all calls to the api endpoint
axios.interceptors.response.use(null, (error) => {
  if (error.response?.status == 419 || error.response?.status == 401) {
    // clear user sessionStorage
    const auth = useAuthStore();
    auth.logout();
  }
  // else router.push("/409"); // redirect here for any other errors : this should suffice for now
});

app.mount("#app");
