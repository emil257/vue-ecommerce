<template>
  <div class="container my-5 py-3 z-depth-1 rounded">
    <!--Section: Content-->
    <section class="dark-grey-text">
      <!-- Shopping Cart table -->
      <div class="table-responsive">
        <table class="table product-table mb-0">
          <!-- Table head -->
          <thead class="mdb-color lighten-5">
            <tr>
              <th></th>
              <th class="font-weight-bold pr-5">
                <strong>Product</strong>
              </th>
              <th class="font-weight-bold text-center">
                <strong>Price</strong>
              </th>
              <th class="font-weight-bold text-center">
                <strong>QTY</strong>
              </th>
              <th class="font-weight-bold text-center">
                <strong>Amount</strong>
              </th>
              <th></th>
            </tr>
          </thead>
          <!-- /.Table head -->

          <!-- Table body -->
          <tbody>
            <!-- First row -->
            <CheckoutProduct v-for="product in cart" :key="product.id" :item="product"></CheckoutProduct>

            <tr>
              <td colspan="3"></td>
              <td class="my-td">
                <h4 class="mt-2">
                  <strong>Total:</strong>
                </h4>
              </td>
              <td class="text-right my-td">
                <h4 class="mt-2 px-4">
                  <strong>{{shoppingCartTotal.toLocaleString('en-EN')}} SEK</strong>
                </h4>
              </td>
              <td colspan="3" class="text-right">
                <button type="button" class="btn btn-primary btn-rounded" v-on:click="placeOrder">
                  Slutför Köp
                  <i class="fas fa-angle-right right"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <!-- /.Table body -->
        </table>
      </div>
      <!-- /.Shopping Cart table -->
    </section>
    <!--Section: Content-->
  </div>
</template>

<script>
import CheckoutProduct from "@/components/checkout/CheckoutProduct";
import { mapGetters, mapActions } from "vuex";
import router from "../router";
export default {
  components: {
    CheckoutProduct
  },
  computed: {
    ...mapGetters(["cart", "shoppingCartTotal", "loggedIn"])
  },
  methods: {
    ...mapActions(["placeOrder"])
  },
  mounted() {
    if (!this.loggedIn) {
      router.push({ path: "/profile/login" });
    }
  }
};
</script>

<style scoped>
.my-td {
  vertical-align: middle;
  text-align: center;
  white-space: nowrap;
}
</style>