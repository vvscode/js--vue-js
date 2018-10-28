import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/list",
      name: "usersList",
      component: () => import("./views/UsersList.vue")
    },
    {
      path: "/create",
      name: "createUser",
      component: () => import("./views/CreateUser.vue")
    },
    {
      path: "/user/:id",
      name: "editUser",
      component: () => import("./views/EditUser.vue")
    }
  ]
});
