import StartView from "../component/StartView.vue";
import Currency from "../component/Currency.vue";
import data from "../data";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: StartView,
  },
  {
    path: "/currency/:id",
    component: Currency,
    props: true,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
