import { createRouter, createWebHistory } from "vue-router";

import Facebook from "../components/loginWithFacebook.vue";

const route = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      component: () => Facebook,
    },
  ],
});

export default route;
