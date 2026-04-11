import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import CartView from '@/views/CartView.vue'
import { createRouter, createMemoryHistory } from 'vue-router'

// Definisi Routes: Mapping URL ke Component
const routes = [
  {
    path: '/',              // URL: <http://localhost:5173/>
    component: HomeView,    // Komponen yang akan ditampilkan
  },
  {
    path: '/about',              // URL: <http://localhost:5173/>
    component: AboutView,    // Komponen yang akan ditampilkan
  },
  {
    path: '/product/:id',   // URL dinamis, contoh: /product/1
    component: ProductDetailView,
    props: true,            // Kirim route params sebagai props
  },
  {
    path: '/cart', // Route baru
    component: CartView,
  },
]
export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export default router
