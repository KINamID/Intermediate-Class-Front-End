<script setup>
import { ref } from 'vue' // Tambahkan ref untuk state reaktif
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon, // Ditambahkan untuk tombol "Close" (X) saat menu terbuka
  UserIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
import { cart } from '@/stores/cart'
import { auth } from '@/stores/auth'

// State untuk mengatur buka/tutup menu mobile
const isMenuOpen = ref(false)

// Fungsi untuk toggle menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <!-- navbar white -->
  <header class="border-b border-gray-200 bg-white fixed top-0 left-0 w-full z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- AREA LOGO -->
        <div class="flex items-center flex-1">
          <RouterLink to="/" @click="isMenuOpen = false">
            <img src="/src/assets/img/logo.png" alt="Logo" class="h-10 w-auto rounded-full" />
          </RouterLink>
        </div>

        <!-- AREA MENU NAVBAR (DESKTOP) -->
        <nav class="hidden md:flex items-center gap-8 font-medium flex-2 justify-center">
          <RouterLink to="/men" class="hover:text-gray-700 text-gray-600">Pria</RouterLink>
          <RouterLink to="/women" class="hover:text-gray-700 text-gray-600">Wanita</RouterLink>
          <RouterLink to="/kids" class="hover:text-gray-700 text-gray-600">Anak - Anak</RouterLink>
          <RouterLink to="/sport" class="hover:text-gray-700 text-gray-600">Sport</RouterLink>
          <RouterLink to="/promo" class="hover:text-gray-700 text-gray-600">Promo</RouterLink>
        </nav>

        <!-- AREA ACTION -->
        <div class="flex items-center gap-4 flex-1 justify-end">
          <!-- SEARCH BAR -->
          <div class="hidden sm:flex items-center bg-gray-100 rounded-full px-3 py-1.5">
            <MagnifyingGlassIcon class="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              class="bg-transparent outline-none px-2 text-sm w-28"
            />
          </div>

          <!-- ACTION BUTTON -->
          <RouterLink
            v-if="!auth.isLoggedIn.value"
            to="/login"
            class="p-2 hover:bg-gray-100 rounded-full"
            title="Masuk"
            @click="isMenuOpen = false"
          >
            <UserIcon class="w-5 h-5" />
          </RouterLink>

          <button
            v-else
            @click="auth.logout(); isMenuOpen = false"
            class="p-2 hover:bg-gray-100 rounded-full"
            title="Keluar"
          >
            <ArrowRightStartOnRectangleIcon class="w-5 h-5" />
          </button>

          <button class="p-2 hover:bg-gray-100 rounded-full">
            <HeartIcon class="w-5 h-5" />
          </button>

          <RouterLink to="/cart" id="cart-icon" class="p-2 hover:bg-gray-100 rounded-full relative" @click="isMenuOpen = false">
            <ShoppingBagIcon class="w-5 h-5" />
            <span
              v-if="cart.totalItems"
              class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
            >
              {{ cart.totalItems }}
            </span>
          </RouterLink>

          <!-- ACTION BUTTON MOBILE (BURGER MENU) -->
          <button @click="toggleMenu" class="md:hidden p-2 hover:bg-gray-100 rounded-full" aria-label="Toggle Menu">
            <!-- Icon akan berubah jadi 'X' jika menu terbuka -->
            <XMarkIcon v-if="isMenuOpen" class="w-6 h-6 text-gray-700" />
            <Bars3Icon v-else class="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>

    <!-- MENU MOBILE (Hanya muncul jika isMenuOpen bernilai true) -->
    <div v-show="isMenuOpen" class="md:hidden border-t bg-white shadow-lg transition-all duration-200">
      <nav class="flex flex-col px-4 py-3 gap-3 font-medium">
        <!-- Search bar versi mobile di dalam menu drop-down jika layar sangat kecil -->
        <div class="flex sm:hidden items-center bg-gray-100 rounded-full px-3 py-1.5 my-1">
          <MagnifyingGlassIcon class="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            class="bg-transparent outline-none px-2 text-sm w-full"
          />
        </div>
        
        <!-- Menyelaraskan RouterLink agar sama dengan menu desktop -->
        <RouterLink to="/men" class="py-2 text-gray-600 hover:text-gray-900 border-b border-gray-50" @click="isMenuOpen = false">Pria</RouterLink>
        <RouterLink to="/women" class="py-2 text-gray-600 hover:text-gray-900 border-b border-gray-50" @click="isMenuOpen = false">Wanita</RouterLink>
        <RouterLink to="/kids" class="py-2 text-gray-600 hover:text-gray-900 border-b border-gray-50" @click="isMenuOpen = false">Anak - Anak</RouterLink>
        <RouterLink to="/sport" class="py-2 text-gray-600 hover:text-gray-900 border-b border-gray-50" @click="isMenuOpen = false">Sport</RouterLink>
        <RouterLink to="/promo" class="py-2 text-gray-600 hover:text-gray-900" @click="isMenuOpen = false">Promo</RouterLink>
      </nav>
    </div>
  </header>
</template>