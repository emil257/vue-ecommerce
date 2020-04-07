<template>
  <tr>
    <th scope="row">
      <img :src="item.product.image" alt class="img-fluid z-depth-0" />
    </th>
    <td class="my-td pr-5">
      <h5 class="mt-3">
        <strong>{{item.product.name}}</strong>
      </h5>
      <p class="text-muted">Apple</p>
    </td>
    <td class="my-td text-center px-5">{{item.product.price.toLocaleString('en-EN')}} SEK</td>
    <td class="my-td text-center">
      <div class="d-flex align-items-center justify-content-center pl-3">
        <div class="btn-group btn-group-sm" role="group" aria-label="quantity">
          <button type="button" class="btn btn-blue px-3" v-on:click.stop="decreaseItem(item)">-</button>
          <button type="button" class="btn btn-blue px-3" v-on:click.stop="increaseItem(item)">+</button>
        </div>
        <strong>{{item.quantity}}</strong>
      </div>
    </td>
    <td class="font-weight-bold my-td text-center">
      <strong>{{(item.product.price * item.quantity).toLocaleString('en-EN')}} SEK</strong>
    </td>
    <td class="my-td-del">
      <div class="btn-group btn-group-sm" role="group" aria-label="quantity">
        <button class="btn btn-danger px-3" v-on:click.stop="removeItem(item)">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["increaseItem", "decreaseItem", "removeItem"])
  },
  props: {
    item: {
      type: Object
    }
  }
};
$(document).on("click", "#CLOSEME", function(e) {
  $("#navbarSupportedContent-333").removeClass("show");
});
</script>

<style scoped>
.my-td {
  vertical-align: middle;
  white-space: nowrap;
}
.my-td-del {
  text-align: center;
  vertical-align: middle;
}
</style>