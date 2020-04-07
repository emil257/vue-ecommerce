<template>
  <div>
    <ShoppingCartProduct v-for="product in cart" :key="product.id" :item="product" />

    <div v-if="cart.length <= 0" class="cart-item">
      <div class="p-2 d-flex justify-content-center align-items-center">
        <div class="d-flex align-items-center">Din kundvagn är tom.</div>
      </div>
      <div class="dropdown-divider"></div>
    </div>

    <div class="ml-1 p-2 d-flex justify-content-between align-items-center">
      <div>
        <div class="total-price">
          Totalt:
          <span class="ml-1">{{shoppingCartTotal.toLocaleString('en-EN')}} SEK</span>
        </div>
        <small class="text-muted">inkl. moms</small>
      </div>
      <router-link
        class="btn btn-info closeNav"
        tag="button"
        :to="{name: 'Checkout'}"
      >Gå till Kassan</router-link>
    </div>
  </div>
</template>

<script>
import ShoppingCartProduct from "./ShoppingCartProduct";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ShoppingCart",
  components: {
    ShoppingCartProduct
  },
  methods: {
    ...mapActions(["loadCart"])
  },
  computed: {
    ...mapGetters(["cart", "shoppingCartTotal"])
  },
  mounted() {
    this.loadCart();
  }
};
</script>

<style scoped>
.total-price {
  font-size: 1.1em;
}
</style>