import { reactive, computed } from 'vue'

export const wishlist = {
  state: reactive({
    items: JSON.parse(localStorage.getItem('wishlist')) || []
  }),

  add(product) {
    if (!product) return

    const exists = this.state.items.find(item => item.id === product.id)

    if (!exists) {
      this.state.items.push({
        id: product.id,
        title: product.title,
        price: Number(product.price),
        image: product.image,
        category: product.category,
        description: product.description
      })
    }

    this.save()
  },

  remove(id) {
    const index = this.state.items.findIndex(item => item.id === id)

    if (index !== -1) {
      this.state.items.splice(index, 1)
      this.save()
    }
  },

  isWishlisted(id) {
    return this.state.items.some(item => item.id === id)
  },

  save() {
    localStorage.setItem('wishlist', JSON.stringify(this.state.items))
  },

  totalItems: computed(() => {
    return wishlist.state.items.length
  })
}