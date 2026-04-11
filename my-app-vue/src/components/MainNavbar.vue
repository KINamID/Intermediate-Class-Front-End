<script setup>
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
  Bars3Icon,
} from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
import { cart } from '@/stores/cart' // Tambahkan ini
</script>

<template>
  <!-- navbar white -->
  <header class="border-b border-gray-200 bg-white fixed top-0 left-0 w-full z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- AREA LOGO -->
        <div class="flex items-center flex-1">
         <RouterLink to="/"><img src="/src/assets/img/logo.png" alt="Logo" class="h-10 w-auto rounded-full" /></RouterLink>
        </div>

        <!-- AREA MENU NAVBAR -->
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
          <button class="p-2 hover:bg-gray-100 rounded-full">
            <HeartIcon class="w-5 h-5" />
          </button>

          <RouterLink to="/cart" class="p-2 hover:bg-gray-100 rounded-full relative">
            <ShoppingBagIcon class="w-5 h-5" />
            <span
              v-if="cart.totalItems"
              class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
            >
              {{ cart.totalItems }}
            </span>
          </RouterLink>

          <!-- ACTION BUTTON MOBILE -->
          <button class="md:hidden p-2 hover:bg-gray-100 rounded-full">
            <Bars3Icon class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- MENU MOBILE -->
    <div class="md:hidden border-t">
      <nav class="flex flex-col px-4 py-3 gap-3 font-medium">
        <a href="#">New & Featured</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Sale</a>
        <a href="#">SNKRS</a>
      </nav>
    </div>
  </header>
</template>
