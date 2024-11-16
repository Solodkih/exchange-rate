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
    props: (route) => {
      return {
        default: true,
        currency: data.find(function (item) {
          return item.id === route.params.id;
        }),
      };
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
