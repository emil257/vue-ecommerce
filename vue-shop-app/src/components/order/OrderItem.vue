<template>
  <tr>
    <th scope="row">
      <img :src="item.product.image" alt class="img-fluid z-depth-0 my-img" />
    </th>
    <td class="my-td pr-3">
      <h5 class="mt-3">
        <strong>{{item.product.name}}</strong>
      </h5>
      <p class="text-muted">Apple</p>
    </td>
    <td class="my-td text-center px-3">{{item.product.price.toLocaleString('en-EN')}} SEK</td>
    <td class="my-td text-center">
      <div class="d-flex align-items-center justify-content-center">
        <strong>{{item.quantity}}</strong>
      </div>
    </td>
    <td class="font-weight-bold my-td text-center">
      <strong>{{(item.product.price * item.quantity).toLocaleString('en-EN')}} SEK</strong>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    item: { type: Object }
  }
};
</script>

<style scoped>
.my-td {
  vertical-align: middle;
  white-space: nowrap;
}
.my-img {
  max-height: 100px;
}
</style>