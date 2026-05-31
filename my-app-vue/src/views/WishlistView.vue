<script setup>
import { wishlist } from '@/stores/wishlist'
</script>

<template>
  <section class="max-w-6xl mx-auto px-6 py-16">
    <h1 class="text-2xl font-bold mb-8">My Wishlist</h1>

    <p v-if="wishlist.state.items.length === 0" class="text-gray-500">
      Wishlist masih kosong.
    </p>

    <div v-else class="grid md:grid-cols-4 gap-6">
      <div
        v-for="item in wishlist.state.items"
        :key="item.id"
        class="bg-white rounded-2xl shadow p-4 relative"
      >
        <button
          @click="wishlist.remove(item.id)"
          class="absolute top-3 right-3 text-red-500"
        >
          ✕
        </button>

        <img
          :src="item.image"
          :alt="item.title"
          class="w-full h-48 object-contain"
        />

        <h3 class="mt-4 text-sm font-semibold line-clamp-2">
          {{ item.title }}
        </h3>

        <p class="mt-2 font-bold">
          Rp{{ item.price.toLocaleString('id-ID') }}
        </p>
      </div>
    </div>
  </section>
</template>