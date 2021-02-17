import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import Home from "../views/Home.vue"
import Posts from "../views/Posts.vue"

Vue.use(VueRouter)

import VueAxios from "vue-axios"
import axios from "axios"

Vue.use(VueAxios, axios)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/posts",
    name: "",
    component: Posts, 
  }
]

const router = new VueRouter({
  mode: "history",
  routes: routes,
})

export default router
