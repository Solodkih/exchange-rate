import StartView from "../component/StartView.vue";
import Currency from "../component/Currency.vue";
import PageNotFound from "@/component/PageNotFound.vue";

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
  { path: "/:pathMatch(.*)*", component: PageNotFound },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
