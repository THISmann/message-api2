import { createWebHistory, createRouter } from "vue-router"
import HomePage from "@/views/HomePage.vue"
import CommentPage from "@/views/CommentPage.vue"
import DetailsPage from "@/views/DetailsPage.vue"

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/comment",
    name: "CommentPage",
    component: CommentPage,
  },
  {
    path: "/detail/:itemId", 
    component: DetailsPage
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  

export default router