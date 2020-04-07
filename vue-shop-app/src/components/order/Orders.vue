<template>
  <div v-if="orders !== null">
    <Order v-for="order in orders" :key="order._id" :order="order" />
    <p v-if="orders.length === 0">No current orders!</p>
  </div>
</template>

<script>
import Order from "./Order";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Order
  },
  methods: {
    ...mapActions(["loadOrders"])
  },
  computed: {
    ...mapGetters(["orders", "loggedIn"])
  },
  mounted() {
    if (this.loggedIn) {
      this.loadOrders();
    }
  }
};
</script>

<style>
</style>