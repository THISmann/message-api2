import { createWebHistory, createRouter } from "vue-router"
import HomePage from "@/views/HomePage.vue"
import CommentPage from "@/views/CommentPage.vue"
import DetailsPage from "@/views/DetailsPage.vue"
import RamdomPage from "@/views/RamdomPage.vue"

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
    path: "/ramdom",
    name: "ramdomPage",
    component: RamdomPage,
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