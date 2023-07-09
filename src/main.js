import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import "./style/bootstrap-rtl.min.css";
import "./style/style.css";
import "./style/project.css";
//=========== pages
import layout from "@/components/layout";
import HomePage from "@/pages/index.vue";
import Categorys from "@/pages/categorys.vue";
import Product from "@/pages/product.vue";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Cart/checkout.vue";
import About from "@/pages/about.vue";
import Contact from "@/pages/contact.vue";
import Login from "@/pages/login.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: {
      layout,
    },
  },
  {
    path: "/categorys",
    name: "categorys",
    component: Categorys,
    meta: {
      layout,
    },
  },
  {
    path: "/product",
    name: "product",
    component: Product,
    meta: {
      layout,
    },
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
    meta: {
      layout,
    },
  },
  {
    path: "/cart/checkout",
    name: "checkout",
    component: Checkout,
    meta: {
      layout,
    },
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta: {
      layout,
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
    meta: {
      layout,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
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
