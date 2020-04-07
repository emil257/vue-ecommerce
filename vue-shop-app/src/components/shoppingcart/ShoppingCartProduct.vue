<template>
  <div class="cart-item">
    <div class="p-2 d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <img :src="item.product.image" class="img-fluid img-width" />
        <div>
          <div>
            <strong>{{item.product.name}}</strong>
          </div>
          <div>
            <small>{{item.quantity}} X {{item.product.price.toLocaleString('en-EN')}} SEK</small>
          </div>
        </div>
      </div>
      <div>
        <div class="btn-group btn-group-sm" role="group" aria-label="quantity">
          <button type="button" class="btn btn-blue px-3" v-on:click.stop="decreaseItem(item)">-</button>
          <button type="button" class="btn btn-blue px-3" v-on:click.stop="increaseItem(item)">+</button>
        </div>
        <div class="btn-group btn-group-sm" role="group" aria-label="quantity">
          <button class="btn btn-danger px-3" v-on:click.stop="removeItem(item)">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="dropdown-divider"></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    item: { type: Object }
  },
  computed: {},
  methods: {
    ...mapActions(["increaseItem", "decreaseItem", "removeItem"])
  }
};
</script>

<style scoped>
.img-width {
  width: 90px;
}
</style>