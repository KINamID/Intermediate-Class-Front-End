<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="border-b border-stone-200">
      <div class="max-w-7xl mx-auto px-4 py-6 md:py-8">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl md:text-3xl font-light tracking-tight text-stone-900">Checkout</h1>
          <button class="text-sm text-stone-500 hover:text-stone-900 transition-colors">
            <span class="tracking-wider uppercase">Exit</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Progress Steps -->
    <div class="border-b border-stone-200">
      <div class="max-w-7xl mx-auto px-4 py-6">
        <div class="flex items-center justify-center space-x-4 md:space-x-8">
          <div v-for="(step, index) in steps" :key="step.id" class="flex items-center">
            <div class="flex flex-col items-center">
              <div
                :class="[
                  'w-8 h-8 rounded-full flex items-center justify-center text-xs font-light transition-all duration-300',
                  currentStep >= index + 1
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-400',
                ]"
              >
                {{ index + 1 }}
              </div>
              <span
                :class="[
                  'text-xs mt-2 tracking-wide hidden md:block',
                  currentStep >= index + 1 ? 'text-stone-900' : 'text-stone-400',
                ]"
              >
                {{ step.label }}
              </span>
            </div>
            <div
              v-if="index < steps.length - 1"
              :class="[
                'w-12 md:w-24 h-px mx-2 transition-colors duration-300',
                currentStep > index + 1 ? 'bg-stone-900' : 'bg-stone-200',
              ]"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <!-- Left Column - Forms -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Shipping Information -->
          <section class="bg-white border border-stone-200 p-6 md:p-8">
            <h2 class="text-xl font-light mb-6 tracking-tight text-stone-900">
              Shipping Information
            </h2>
            <div class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs uppercase tracking-wider text-stone-600 mb-2">
                    First Name
                  </label>
                  <input
                    v-model="shippingInfo.firstName"
                    type="text"
                    class="w-full px-4 py-3 border border-stone-200 focus:border-stone-900 focus:outline-none transition-colors text-stone-900 bg-white"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label class="block text-xs uppercase tracking-wider text-stone-600 mb-2">
                    Last Name
                  </label>
                  <input
                    v-model="shippingInfo.lastName"
                    type="text"
                    class="w-full px-4 py-3 border border-stone-200 focus:border-stone-900 focus:outline-none transition-colors text-stone-900 bg-white"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs uppercase tracking-wider text-stone-600 mb-2">
                  Email Address
                </label>
                <input
                  v-model="shippingInfo.email"
                  type="email"
                  class="w-full px-4 py-3 border border-stone-200 focus:border-stone-900 focus:outline-none transition-colors text-stone-900 bg-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label class="block text-xs uppercase tracking-wider text-stone-600 mb-2">
                  Phone Number
                </label>
                <input
                  v-model="shippingInfo.phone"
                  type="tel"
                  class="w-full px-4 py-3 border border-stone-200 focus:border-stone-900 focus:outline-none transition-colors text-stone-900 bg-white"
                  placeholder="+62 812-3456-7890"
                />
              </div>

              <div>
                <label class="block text-xs uppercase tracking-wider text-stone-600 mb-2">
                  Street Address
                </label>
                <input
                  v-model="shippingInfo.address"
                  type="text"
                  class="w-full px-4 py-3 border border-stone-200 focus:border-stone-900 focus:outline-none transition-colors text-stone-900 bg-white"
                  placeholder="Jln Mawar No. 123, Jakarta Selatan"
                />
              </div>

              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label class="block text-xs uppercase tracking-wider text-stone-600 mb-2">
                    City
                  </label>
                  <input
                    v-model="shippingInfo.city"
                    type="text"
                    class="w-full px-4 py-3 border border-stone-200 focus:border-stone-900 focus:outline-none transition-colors text-stone-900 bg-white"
                    placeholder="Jakarta Selatan"
                  />
                </div>
                <div>
                  <label class="block text-xs uppercase tracking-wider text-stone-600 mb-2">
                    State
                  </label>
                  <input
                    v-model="shippingInfo.state"
                    type="text"
                    class="w-full px-4 py-3 border border-stone-200 focus:border-stone-900 focus:outline-none transition-colors text-stone-900 bg-white"
                    placeholder="Indonesia"
                  />
                </div>
                <div>
                  <label class="block text-xs uppercase tracking-wider text-stone-600 mb-2">
                    ZIP Code
                  </label>
                  <input
                    v-model="shippingInfo.zip"
                    type="text"
                    class="w-full px-4 py-3 border border-stone-200 focus:border-stone-900 focus:outline-none transition-colors text-stone-900 bg-white"
                    placeholder="10001"
                  />
                </div>
              </div>
            </div>
          </section>

          <!-- Payment Information -->
          <section class="bg-white border border-stone-200 p-6 md:p-8">
            <h2 class="text-xl font-light mb-6 tracking-tight text-stone-900">
              Payment Information
            </h2>
            <div class="space-y-4">
              <div>
                <label class="block text-xs uppercase tracking-wider text-stone-600 mb-2">
                  Card Number
                </label>
                <input
                  v-model="paymentInfo.cardNumber"
                  type="text"
                  class="w-full px-4 py-3 border border-stone-200 focus:border-stone-900 focus:outline-none transition-colors text-stone-900 bg-white"
                  placeholder="1234 5678 9012 3456"
                />
              </div>

              <div>
                <label class="block text-xs uppercase tracking-wider text-stone-600 mb-2">
                  Cardholder Name
                </label>
                <input
                  v-model="paymentInfo.cardName"
                  type="text"
                  class="w-full px-4 py-3 border border-stone-200 focus:border-stone-900 focus:outline-none transition-colors text-stone-900 bg-white"
                  placeholder="John Doe"
                />
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs uppercase tracking-wider text-stone-600 mb-2">
                    Expiration Date
                  </label>
                  <input
                    v-model="paymentInfo.expiry"
                    type="text"
                    class="w-full px-4 py-3 border border-stone-200 focus:border-stone-900 focus:outline-none transition-colors text-stone-900 bg-white"
                    placeholder="DD/MM/YY"
                  />
                </div>
                <div>
                  <label class="block text-xs uppercase tracking-wider text-stone-600 mb-2">
                    CVV
                  </label>
                  <input
                    v-model="paymentInfo.cvv"
                    type="text"
                    class="w-full px-4 py-3 border border-stone-200 focus:border-stone-900 focus:outline-none transition-colors text-stone-900 bg-white"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Tampil otomatis jika cart kosong -->
        <div v-if="cartItems.length === 0">
          <p>Keranjang Kosong</p>
          <RouterLink to="/">Mulai Belanja</RouterLink>
        </div>

        <!-- Right Column - Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-stone-50 border border-stone-200 p-6 md:p-8 sticky top-8">
            <h2 class="text-xl font-light mb-6 tracking-tight text-stone-900">Order Summary</h2>

            <!-- Cart Items -->
            <div class="space-y-4 mb-6 pb-6 border-b border-stone-200">
              <div v-for="item in cartItems" :key="item.id" class="flex gap-4">
                <div class="w-20 h-20 bg-stone-200 flex-shrink-0">
                  <!-- Placeholder for product image -->
                  <img
                    v-if="item.image"
                    :src="item.image"
                    :alt="item.name"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-sm font-light text-stone-900 truncate">{{ item.name }}</h3>
                  <p class="text-xs text-stone-500 mt-1">{{ item.size }} / {{ item.color }}</p>
                  <p class="text-xs text-stone-500">Qty: {{ item.quantity }}</p>
                </div>
                <div class="text-sm font-light text-stone-900">
                  Rp{{ formatPrice(item.price * item.quantity) }}
                </div>
              </div>
            </div>

            <!-- Pricing Breakdown -->
            <div class="space-y-3 mb-6 pb-6 border-b border-stone-200">
              <div class="flex justify-between text-sm">
                <span class="text-stone-600">Subtotal</span>
                <span class="text-stone-900">Rp{{ formatPrice(subtotal) }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-stone-600">Shipping</span>
                <span class="text-stone-900">Rp{{ formatPrice(shipping) }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-stone-600">Tax</span>
                <span class="text-stone-900">Rp{{ formatPrice(tax) }}</span>
              </div>
            </div>

            <!-- Total -->
            <div class="flex justify-between items-center mb-6">
              <span class="text-lg font-light text-stone-900">Total</span>
              <span class="text-2xl font-light text-stone-900">Rp{{ formatPrice(total) }}</span>
            </div>

            <!-- Place Order Button -->
            <button
              class="w-full bg-stone-900 text-white py-4 hover:bg-stone-800 transition-colors duration-300 group"
              @click="placeOrder"
            >
              <span class="text-sm tracking-wider uppercase font-light"> Place Order </span>
            </button>

            <!-- Security Badge -->
            <div class="mt-6 flex items-center justify-center gap-2 text-xs text-stone-500">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span class="tracking-wide">Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { cart } from '@/stores/cart'
const showSuccessModal = ref(false)
const isSubmitting = ref(false)

// Ganti isi setTimeout di handleSubmit
setTimeout(() => {
  isSubmitting.value = false
  cart.state.items = [] // kosongkan keranjang
  showSuccessModal.value = true // tampilkan modal (bukan alert)
}, 1500)

// Fungsi untuk tutup modal dan redirect ke home
function closeModalAndRedirect() {
  showSuccessModal.value = false
  router.push('/')
}

// Langsung ambil data dari cart store
const cartItems = computed(() => cart.state.items)
const totalItems = computed(() => cart.totalItems)

const formatPrice = (price) => {
  if (typeof price === 'number') {
    return `${price}`
  }
  return price
}

const currentStep = ref(2)

const steps = ref([
  { id: 'cart', label: 'Cart' },
  { id: 'info', label: 'Information' },
  { id: 'payment', label: 'Payment' },
  { id: 'confirm', label: 'Confirm' },
])

const shippingInfo = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zip: '',
})

const paymentInfo = ref({
  cardNumber: '',
  cardName: '',
  expiry: '',
  cvv: '',
})

// Subtotal dihitung dari cart items
const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => {
    return sum + item.price * item.qty * 1000 // price 129 = 129K = 129000
  }, 0)
})

// Tax 10% otomatis
const tax = computed(() => subtotal.value * 0.1)

// Shipping gratis (sesuai CartView)
const shipping = 0

// Total otomatis
const total = computed(() => subtotal.value + shipping + tax.value)

const placeOrder = () => {
  console.log('Order placed!', {
    shipping: shippingInfo.value,
    payment: paymentInfo.value,
    items: cartItems.value,
    total: total.value,
  })
  // ... validasi & processing ...

  // Clear semua items dari cart setelah order berhasil
  cartItems.value.forEach((item) => {
    cart.remove(item.id)
  })

  router.push('/') // Redirect ke home
}
</script>

<style scoped>
input::placeholder {
  color: #a8a29e;
}

input:focus {
  background-color: white;
}
</style>
