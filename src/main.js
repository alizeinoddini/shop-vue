import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import "./style/bootstrap-rtl.min.css";
import "./style/style.css";
import "./style/project.css";
//=========== pages
import HomePage from "@/pages/index.vue";
import layout from "@/components/layout";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: {
      layout,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
