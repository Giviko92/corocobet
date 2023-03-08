import { createWebHistory, createRouter } from "vue-router";
import users from "@/views/Users.vue";
import posts from '@/views/Posts.vue'
const routes = [
 
  {
    path: "/users",
    name: "users",
    component: users,
  },
  {
    path: "/posts",
    name: "posts",
    component: posts,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;