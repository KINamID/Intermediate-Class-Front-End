<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Order completed'
  },
  message: {
    type: String,
    default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
  },
  primaryActionText: {
    type: String,
    default: 'View status'
  },
  secondaryActionText: {
    type: String,
    default: 'Dismiss'
  },
  // Customizable colors
  bgColor: {
    type: String,
    default: 'bg-emerald-950'
  },
  iconBgColor: {
    type: String,
    default: 'bg-emerald-500'
  },
  titleColor: {
    type: String,
    default: 'text-emerald-100'
  },
  textColor: {
    type: String,
    default: 'text-emerald-200'
  },
  actionColor: {
    type: String,
    default: 'text-emerald-100'
  }
});

const emit = defineEmits(['view-status', 'dismiss']);

const onViewStatus = () => {
  emit('view-status');
};

const onDismiss = () => {
  emit('dismiss');
};
</script>

<template>
  <div :class="[
    'rounded-lg p-6 flex gap-4',
    bgColor
  ]">
    <!-- Icon -->
    <div :class="['flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center', iconBgColor]">
      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
    </div>

    <!-- Content -->
    <div class="flex-1">
      <h3 :class="['font-medium mb-2', titleColor]">
        {{ title }}
      </h3>
      <p :class="['text-sm mb-4', textColor]">
        {{ message }}
      </p>

      <!-- Actions -->
      <div class="flex gap-3">
        <button 
          @click="onViewStatus"
          :class="['text-sm font-medium hover:underline', actionColor]"
        >
          {{ primaryActionText }}
        </button>
        <button 
          @click="onDismiss"
          :class="['text-sm font-medium hover:underline', actionColor]"
        >
          {{ secondaryActionText }}
        </button>
      </div>
    </div>
  </div>
</template>

