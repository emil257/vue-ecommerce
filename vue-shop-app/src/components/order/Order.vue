<template>
  <div class="container my-5 py-3 z-depth-1 rounded my-order">
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
            <OrderItem v-for="(item, index) in order.order" :key="index" :item="item" />
            <tr>
              <td colspan="3">
                <h6 class="mt-2">
                  <strong>Order ID: {{order._id}}</strong>
                </h6>
              </td>
              <td>
                <h4 class="mt-2">
                  <strong>Total:</strong>
                </h4>
              </td>
              <td class="text-right my-td">
                <h4 class="mt-2">
                  <strong>{{order.orderTotal.toLocaleString('en-EN')}} SEK</strong>
                </h4>
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
import OrderItem from "./OrderItem";
export default {
  components: {
    OrderItem
  },
  props: {
    order: { type: Object }
  }
};
</script>

<style scoped>
.my-td {
  white-space: nowrap;
}
.my-order {
  margin-top: 0 !important;
}
</style>