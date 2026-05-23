import { reactive, computed } from 'vue'

export const wishlist = {
  state: reactive({
    items: JSON.parse(localStorage.getItem('wishlist')) || []
  }),

  toggle(product) {
    const index = this.state.items.findIndex(item => item.id === product.id)

    if (index !== -1) {
      this.state.items.splice(index, 1)
    } else {
      this.state.items.push({
        id: product.id,
        title: product.title,
        price: Number(product.price),
        image: product.image
      })
    }

    this.save()
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