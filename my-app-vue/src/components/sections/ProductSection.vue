<script setup>
import { onMounted, ref } from 'vue'
import ProductCard from '../products/CardProduct.vue'
import axios from 'axios'

// Dummy data produk yang disimpan di dalam state reactive
const products = ref([])
const isLoading = ref(false)

const fetchProducts = async () => {
  try {
    isLoading.value = true
    const response = await axios.get('https://fakestoreapi.com/products')
    products.value = response.data
  } catch (error) {
    console.error('Gagal mengambil data produk:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchProducts()
})

</script>

<template>
  <section class="py-16 px-6 max-w-7xl mx-auto">
    <div class="mb-8">
      <h2 class="text-2xl md:text-3xl font-bold">Produk Terbaru</h2>
      <p class="text-gray-500 mt-1">Lihat semua jenis produk terbaru kami</p>
    </div>

    <!-- Spinner muncul selama data belum ready -->
    <div v-if="isLoading" class="flex justify-center items-center py-20">
      <div
        class="w-10 h-10 border-4 border-gray-200 border-t-slate-900 rounded-full animate-spin"
      ></div>
    </div>

    <!-- Grid produk muncul setelah data selesai di-fetch -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </section>
</template>
