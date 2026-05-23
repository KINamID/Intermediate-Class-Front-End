<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="border-b border-stone-200">
      <div class="max-w-7xl mx-auto px-4 py-6 md:py-8">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl md:text-3xl font-light tracking-tight text-stone-900">Checkout</h1>
          <RouterLink 
            to="/cart"
            class="text-sm text-stone-500 hover:text-stone-900 transition-colors"
          >
            <span class="tracking-wider uppercase">Back to Cart</span>
          </RouterLink>
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

    <!-- Empty Cart Message -->
    <div v-if="cartItems.length === 0" class="max-w-7xl mx-auto px-4 py-16 text-center">
      <div class="max-w-md mx-auto">
        <svg class="w-24 h-24 mx-auto text-stone-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <h2 class="text-2xl font-light text-stone-900 mb-2">Cart is Empty</h2>
        <p class="text-stone-500 mb-6">Please add some products to your cart first.</p>
        <RouterLink 
          to="/"
          class="inline-block bg-stone-900 text-white px-8 py-3 rounded-xl hover:bg-stone-800 transition-colors"
        >
          <span class="text-sm tracking-wider uppercase">Start Shopping</span>
        </RouterLink>
      </div>
    </div>

    <!-- Main Content -->
    <div v-else class="max-w-7xl mx-auto px-4 py-8 md:py-12">
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
                  placeholder="+1 (555) 000-0000"
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
                  placeholder="123 Main Street"
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
                    placeholder="New York"
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
                    placeholder="NY"
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
                    placeholder="MM/YY"
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

        <!-- Right Column - Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-stone-50 border border-stone-200 p-6 md:p-8 sticky top-8">
            <h2 class="text-xl font-light mb-6 tracking-tight text-stone-900">Order Summary</h2>

            <!-- Cart Items -->
            <div class="space-y-4 mb-6 pb-6 border-b border-stone-200">
              <div v-for="item in cartItems" :key="item.id" class="flex gap-4">
                <div class="w-20 h-20 bg-stone-200 flex-shrink-0 rounded">
                  <!-- ✅ FIX: Gambar ada! -->
                  <img
                    v-if="item.image"
                    :src="item.image"
                    :alt="item.title"
                    class="w-full h-full object-contain p-2"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <!-- ✅ FIX: Pakai item.title dari API -->
                  <h3 class="text-sm font-light text-stone-900 line-clamp-2">{{ item.title }}</h3>
                  <!-- ✅ FIX: Pakai item.qty (bukan quantity) -->
                  <p class="text-xs text-stone-500 mt-1">Qty: {{ item.qty }}</p>
                </div>
                <div class="text-sm font-medium text-stone-900">
                  <!-- ✅ FIX: Pakai qty dan formatPrice dari cart -->
                  {{ cart.formatPrice(item.price * item.qty) }}
                </div>
              </div>
            </div>

            <!-- Pricing Breakdown -->
            <div class="space-y-3 mb-6 pb-6 border-b border-stone-200">
              <div class="flex justify-between text-sm">
                <span class="text-stone-600">Subtotal</span>
                <!-- ✅ FIX: Pakai subtotal yang benar -->
                <span class="text-stone-900">{{ cart.formatPrice(subtotal) }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-stone-600">Shipping</span>
                <span class="text-green-600 font-medium">Free</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-stone-600">Tax (10%)</span>
                <span class="text-stone-900">{{ cart.formatPrice(tax) }}</span>
              </div>
            </div>

            <!-- Total -->
            <div class="flex justify-between items-center mb-6">
              <span class="text-lg font-light text-stone-900">Total</span>
              <span class="text-2xl font-medium text-stone-900">{{ cart.formatPrice(total) }}</span>
            </div>

            <!-- Place Order Button -->
            <button
              class="w-full bg-stone-900 text-white py-4 rounded hover:bg-stone-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="isSubmitting"
              @click="placeOrder"
            >
              <span class="text-sm tracking-wider uppercase font-light">
                {{ isSubmitting ? 'Processing...' : 'Place Order' }}
              </span>
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

    <!-- Success Modal -->
    <Transition name="fade">
      <div v-if="showSuccessModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div class="bg-white rounded-2xl p-8 max-w-md w-full">
          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Order Successful!</h3>
            <p class="text-gray-600 mb-6">Thank you for your purchase. Your order has been placed successfully.</p>
            <button 
              @click="closeModalAndRedirect"
              class="w-full bg-stone-900 text-white py-3 rounded-xl hover:bg-stone-800 transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { cart } from '@/stores/cart'

const router = useRouter()

const showSuccessModal = ref(false)
const isSubmitting = ref(false)

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

const cartItems = computed(() => cart.state.items)

const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => {
    return sum + (item.price * item.qty)
  }, 0)
})

// Shipping gratis
const shipping = 0

// Tax 10%
const tax = computed(() => subtotal.value * 0.1)

// Total
const total = computed(() => subtotal.value + shipping + tax.value)

const placeOrder = () => {
  // Validasi sederhana
  if (!shippingInfo.value.firstName || !shippingInfo.value.email) {
    alert('Please fill in shipping information')
    return
  }

  if (!paymentInfo.value.cardNumber || !paymentInfo.value.cardName) {
    alert('Please fill in payment information')
    return
  }

  isSubmitting.value = true

  // Simulate order processing
  setTimeout(() => {
    isSubmitting.value = false
    cart.state.items = [] // Clear cart
    showSuccessModal.value = true
  }, 1500)
}

// Close modal and redirect
function closeModalAndRedirect() {
  showSuccessModal.value = false
  router.push('/')
}
</script>

<style scoped>
input::placeholder {
  color: #a8a29e;
}

input:focus {
  background-color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>