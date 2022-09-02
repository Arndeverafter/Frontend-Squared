import Index from "@/pages/index.vue";
import Post from "@/pages/blog-post.vue";
import NotFound from "@/pages/not-found.vue";
import Auth from "@/pages/Auth.vue";
import Dashboard from "@/pages/dashboard.vue";
import serverError from "@/pages/409.vue";

export const routes = [
  {
    name: "home",
    path: "/",
    component: Index,
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: "author",
    path: "/author/:id/:slug?",
    component: Index,
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: "post",
    path: "/post/:id/:slug?",
    component: Post,
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: "login",
    path: "/login",
    component: Auth,
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: "register",
    path: "/register",
    component: Auth,
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "409",
    path: "/409",
    component: serverError,
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: "notFound",
    path: "/:path(.*)",
    component: NotFound,
    meta: {
      requiresAuth: false,
    },
  },
];

export default routes;
