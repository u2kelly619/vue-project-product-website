import { createRouter, createWebHistory } from 'vue-router'
import BrandStoryView from '../views/BrandStoryView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import LoginView from '../views/LoginView.vue'
import NewsView from '../views/NewsView.vue'
import ProductCartView from '../views/ProductCartView.vue'
import ProductPageView from '../views/ProductPageView.vue'
import RecipeView from '../views/RecipeView.vue'


const routes = [
  {
    path: '/brand-story',
    name: 'BrandStoryView',
    component: BrandStoryView,
  },
  {
    path: '/contact-us',
    name: 'ContactUsView',
    component: ContactUsView,
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView,
  },
  {
    path: '/news',
    name: 'NewsView',
    component: NewsView,
  },
  {
    path: '/product-cart',
    name: 'ProductCartView',
    component: ProductCartView,
  },
  {
    path: '/product-page',
    name: 'ProductPageView',
    component: ProductPageView,
  },
  {
    path: '/recipe',
    name: 'RecipeView',
    component: RecipeView,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router