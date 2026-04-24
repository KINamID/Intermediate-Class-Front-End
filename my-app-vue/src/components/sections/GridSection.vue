<script setup>
import { ref } from 'vue'

const sections = ref([
  {
    id: 'ethereal',
    category: 'ETHEREAL ELEGANCE',
    title: 'Where Dreams Meet Couture',
    bgColor: 'bg-stone-100',
    textColor: 'text-white',
    imageUrl: '/src/assets/img/ManModel.jpeg', // Replace with your image
  },
  {
    id: 'radiant',
    category: 'RADIANT REVERIE',
    title: 'Enchanting Styles for Every Woman',
    bgColor: 'bg-stone-50',
    textColor: 'text-white',
    imageUrl: '/src/assets/img/WomenModel2.jpeg', // Replace with your image
  },
  {
    id: 'urban',
    category: 'URBAN STRIDES',
    title: 'Chic Footwear for City Living',
    bgColor: 'bg-neutral-100',
    textColor: 'text-white',
    imageUrl: '/src/assets/img/WhiteShoe.jpeg', // Replace with your image
  },
  {
    id: 'bags',
    category: 'TRENDSETTING',
    title: 'Bags for Her',
    discount: '50%',
    bgColor: 'bg-slate-500',
    textColor: 'text-white',
    imageUrl: null, // Solid background, no image needed
  },
])
</script>

<template>
  <div class="min-h-screen bg-stone-50 p-2 md:p-4">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 auto-rows-fr">
      <div
        v-for="(section, index) in sections"
        :key="section.id"
        :class="[
          'relative overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.01]',
          index === 0
            ? 'md:row-span-2 min-h-[500px] md:min-h-[600px]'
            : 'min-h-[250px] md:min-h-[295px]',
          index === 3 ? 'md:col-span-2' : '',
        ]"
      >
        <!-- Background Image or Color -->
        <div
          v-if="section.imageUrl"
          class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          :style="{ backgroundImage: `url(${section.imageUrl})` }"
        >
          <div
            class="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40"
          >
          </div>
        </div>
        <div v-else :class="['absolute inset-0', section.bgColor]"></div>

        <!-- Content Overlay -->
        <div
          :class="['relative h-full flex flex-col justify-between p-6 md:p-8', section.textColor]"
        >
          <!-- Top Content -->
          <div class="space-y-3">
            <p class="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold font-family: 'Inter', sans-serif; opacity-80">
              {{ section.category }}
            </p>
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-medium font-family: 'Playfair Display', serif; leading-tight max-w-sm">
              {{ section.title }}
            </h2>
          </div>

          <!-- Bottom Content -->
          <div class="space-y-4">
            <div v-if="section.discount" class="mb-6">
              <div class="text-7xl md:text-8xl font-light tracking-tight leading-none">
                {{ section.discount }}
              </div>
              <p class="text-xs tracking-wider uppercase mt-2 opacity-90">Off Selected Items</p>
            </div>

            <button
              :class="[
                'group/btn px-6 py-2.5 border transition-all duration-300',
                section.id === 'bags'
                  ? 'border-white hover:bg-white hover:text-slate-800'
                  : 'border-stone-800 hover:bg-stone-800 hover:text-white backdrop-blur-sm',
              ]"
            >
              <span class="text-xs tracking-wider uppercase font-light"> Shop Now </span>
            </button>
          </div>
        </div>

        <!-- Decorative Corner Element -->
        <div
          :class="[
            'absolute top-0 right-0 w-16 h-16 opacity-10 transform rotate-45 translate-x-8 -translate-y-8 transition-transform duration-500 group-hover:scale-150',
            section.id === 'bags' ? 'bg-white' : 'bg-stone-900',
          ]"
        ></div>
      </div>
    </div>
  </div>
</template>
