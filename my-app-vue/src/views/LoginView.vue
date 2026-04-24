<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import ErrorAlert from '@/components/sections/ErrorAlert.vue'
import SuccessAlert from '@/components/sections/SuccesAlert.vue'

const router = useRouter()

const form = reactive({
  email: '',
  password: '',
})

const isSubmitting = ref(false)
const showPassword = ref(false)

// Alert states
const showError = ref(false)
const showSuccess = ref(false)
const errorMessages = ref<string[]>([])

function handleSubmit() {
  // Reset alerts
  showError.value = false
  showSuccess.value = false
  
  // Validasi
  const errors: string[] = []
  if (!form.email) errors.push('Email harus diisi')
  if (!form.password) errors.push('Password harus diisi')
  if (form.password && form.password.length < 6) {
    errors.push('Password minimal 6 karakter')
  }
  
  if (errors.length > 0) {
    errorMessages.value = errors
    showError.value = true
    return
  }

  isSubmitting.value = true
  
  // Simulasi API call
  setTimeout(() => {
    isSubmitting.value = false
    
    // Simulasi error dari server (50% chance)
    if (Math.random() > 0.5) {
      errorMessages.value = ['Email atau password salah', 'Silakan coba lagi']
      showError.value = true
    } else {
      showSuccess.value = true
      setTimeout(() => {
        router.push('/')
      }, 1500)
    }
  }, 1200)
}
</script>

<template>
  <section class="min-h-[80vh] flex items-center justify-center px-4 mt-16">
    <div class="max-w-md mx-auto w-full">

      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Masuk</h1>
        <p class="text-gray-500 mt-2">Masuk ke akun kamu untuk melanjutkan belanja.</p>
      </div>

      <!-- Form Card -->
      <form @submit.prevent="handleSubmit"
        class="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-8 space-y-6">

        <!-- 🎯 ALERT DISINI - Paling atas dalam form -->
        <ErrorAlert 
          v-if="showError"
          title="Terjadi Kesalahan"
          :errors="errorMessages"
          bg-color="bg-red-950"
          icon-bg-color="bg-red-500"
          title-color="text-red-50"
          text-color="text-red-100"
        />

        <SuccessAlert
          v-if="showSuccess"
          title="Login Berhasil!"
          message="Selamat datang kembali. Anda akan dialihkan ke halaman utama."
          primary-action-text=""
          secondary-action-text=""
          bg-color="bg-emerald-950"
          icon-bg-color="bg-emerald-500"
          title-color="text-emerald-50"
          text-color="text-emerald-100"
        />

        <!-- Email Field -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input id="email" v-model="form.email" type="email"
            placeholder="contoh@email.com"
            class="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition border-gray-300" />
        </div>

        <!-- Password Field -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div class="relative">
            <input id="password" v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Minimal 6 karakter"
              class="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition pr-12 border-gray-300" />
            <button type="button" @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm">
              {{ showPassword ? 'Tutup' : 'Lihat' }}
            </button>
          </div>
        </div>

        <!-- Submit Button -->
        <button type="submit" :disabled="isSubmitting"
          class="w-full bg-slate-900 text-white py-3 rounded-xl font-medium
                 hover:bg-slate-800 transition disabled:opacity-50 disabled:cursor-not-allowed">
          <span v-if="isSubmitting">Memproses...</span>
          <span v-else>Masuk</span>
        </button>

      </form>
    </div>
  </section>
</template>