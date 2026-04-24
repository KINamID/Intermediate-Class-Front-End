<script setup>
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { StarIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline'
import { cart } from '@/stores/cart' // Tambahkan ini

const route = useRoute()
const productImage = ref(null)

function handleAddToCart() {
  cart.add(product.value)

  const img = productImage.value
  if (!img) return

  const rect = img.getBoundingClientRect()

  // clone gambar
  const clone = img.cloneNode(true)
  clone.style.position = 'fixed'
  clone.style.top = rect.top + 'px'
  clone.style.left = rect.left + 'px'
  clone.style.width = rect.width + 'px'
  clone.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
  clone.style.zIndex = 999

  document.body.appendChild(clone)

  const cartIcon = document.getElementById('cart-icon')
  if (!cartIcon) return

  const cartRect = cartIcon.getBoundingClientRect()

  requestAnimationFrame(() => {
    clone.style.top = cartRect.top + 'px'
    clone.style.left = cartRect.left + 'px'
    clone.style.transform = 'scale(0.2)'
    clone.style.opacity = '0.5'
  })

  setTimeout(() => {
    clone.remove()
  }, 800)
}

// Dummy data produk (seharusnya dari API/database)
const products = [
  {
    id: 1,
    name: 'Kaos Basic Ordinary Tee',
    category: 'T-Shirt',
    price: 129,
    image: '/src/assets/img/products/cloth-1.png',
    description: 'Kaos basic serbaguna dengan bahan lembut dan nyaman dipakai sepanjang hari.',
  },
  {
    id: 2,
    name: 'Kaos Daily Comfort Wear',
    category: 'T-Shirt',
    price: 139,
    image: '/src/assets/img/products/cloth-2.png',
    description: 'Dirancang untuk kenyamanan maksimal saat aktivitas harian.',
  },
  {
    id: 3,
    name: 'Kaos Urban Street Style',
    category: 'T-Shirt',
    price: 149,
    image: '/src/assets/img/products/cloth-3.png',
    description: 'Dirancang untuk kenyamanan maksimal saat aktivitas harian.',
  },
  {
    id: 4,
    name: 'Kaos Essential Casual Fit',
    category: 'T-Shirt',
    price: 135,
    image: '/src/assets/img/products/cloth-4.png',
    description: 'Kaos dengan potongan casual fit yang cocok untuk berbagai kesempatan.',
  },
  {
    id: 5,
    name: 'Kaos Modern Relax Tee',
    category: 'T-Shirt',
    price: 155,
    image: '/src/assets/img/products/cloth-5.png',
    description: 'Kaos dengan desain modern dan bahan yang memberikan kenyamanan ekstra.',
  },
  {
    id: 6,
    name: 'Kaos Minimal Classic Wear',
    category: 'T-Shirt',
    price: 145,
    image: '/src/assets/img/products/cloth-6.png',
    description: 'Kaos dengan desain minimalis yang cocok untuk gaya klasik.',
  },
  {
    id: 7,
    name: 'Kaos Everyday Soft Touch',
    category: 'T-Shirt',
    price: 159,
    image: '/src/assets/img/products/cloth-7.png',
    description: 'Kaos dengan sentuhan lembut yang cocok untuk dipakai sehari-hari.',
  },
  {
    id: 8,
    name: 'Kaos Premium Comfort Tee',
    category: 'T-Shirt',
    price: 169,
    image: '/src/assets/img/products/cloth-8.png',
    description: 'Kaos premium dengan bahan berkualitas tinggi untuk kenyamanan maksimal.',
  },
  // (Tambahkan sisa data dummy produk lainnya di sini)
]

// Cari produk berdasarkan ID dari route params
const product = computed(() => {
  return products.find((p) => p.id === Number(route.params.id))
})
</script>

<template>
  <section class="max-w-6xl mx-auto px-6 py-12 mt-10">
    <div class="text-sm text-gray-500 mb-6">
      <RouterLink to="/" class="hover:text-gray-800">Home</RouterLink>
      <span class="mx-2">›</span>
      <span class="text-gray-800 font-medium">{{ product?.name }}</span>
    </div>

    <div v-if="product" class="grid md:grid-cols-2 gap-10 items-start">
      <div class="bg-gray-100 rounded-xl overflow-hidden">
        <img ref="productImage" :src="product.image" class="w-full h-full object-cover" />
      </div>

      <div class="space-y-4">
        <h1 class="text-3xl font-bold">{{ product.name }}</h1>
        <p class="text-2xl font-semibold text-blue-600">IDR {{ product.price }}K</p>
        <p class="text-gray-600 leading-relaxed">{{ product.description }}</p>

        <div class="space-y-2 text-sm text-gray-600 pt-2 border-t">
          <div>Material: Cotton Combed 24s</div>
          <div>Fit: Regular Fit</div>
          <div>Stok: Tersedia</div>
        </div>

        <div class="flex gap-4 pt-4">
          <button
            @click="handleAddToCart"
            class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>

          <button class="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
            Wishlist
          </button>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-20">
      <p class="text-gray-500 text-lg">Produk tidak ditemukan</p>
      <RouterLink to="/" class="text-blue-600 hover:underline mt-4 inline-block">
        ← Kembali ke Home
      </RouterLink>
    </div>
  </section>
</template>
