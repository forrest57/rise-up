import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Posts from "../views/Posts.vue"
import Terms from "../views/TermsAndConditions.vue"

Vue.use(VueRouter)

import VueAxios from "vue-axios"
import axios from "axios"

Vue.use(VueAxios, axios)

const routes= [
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
    path: "/myposts",
    name: "your posts",
    component: Posts, 
  },
  {
    path: "/login",
    name: "LogIn",
    component: () => import(/* webpackChunkName: "about" */ '../views/LogIn.vue')
  },
  {
    path: "/register",
    name: "welcome",
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  },
  {
    path: "/termsandconditions",
    name: "agreement",
    component:Terms
  },
  {
    path: "/logout",
    name: "bye",
    component: () => import(/* webpackChunkName: "about" */ '../views/logOut.vue')

  },
  {
    path: "/you",
    name: "you",
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')

  }
]

const router = new VueRouter({
  mode: "history",
  routes: routes,
})

export default router
