<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'There were 2 errors with your submission'
  },
  errors: {
    type: Array,
    default: () => [
      'Your password must be at least 8 characters',
      'Your password must include at least one pro wrestling finishing move'
    ]
  },
  // Customizable colors
  bgColor: {
    type: String,
    default: 'bg-red-950'
  },
  iconBgColor: {
    type: String,
    default: 'bg-red-500'
  },
  titleColor: {
    type: String,
    default: 'text-red-100'
  },
  textColor: {
    type: String,
    default: 'text-red-200'
  }
});
</script>

<template>
  <div :class="[
    'rounded-lg p-6 flex gap-4',
    bgColor
  ]">
    <!-- Icon -->
    <div :class="['flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center', iconBgColor]">
      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>

    <!-- Content -->
    <div class="flex-1">
      <h3 :class="['font-medium mb-3', titleColor]">
        {{ title }}
      </h3>

      <!-- Error List -->
      <ul class="space-y-1.5">
        <li 
          v-for="(error, index) in errors" 
          :key="index"
          :class="['text-sm flex items-start gap-2', textColor]"
        >
          <span class="mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
          <span>{{ error }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

