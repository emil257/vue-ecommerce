<template>
  <div class="col mb-4">
    <!-- Card -->
    <div class="card">
      <!--Card image-->

      <div class="view overlay">
        <img class="card-img-top" :src="product.image" alt="Card image cap" />
        <router-link :to="{name: 'Product', params: {id: product._id}}">
          <div class="mask rgba-white-slight"></div>
        </router-link>
      </div>

      <!--Card content-->
      <div class="card-body">
        <!--Title-->
        <h4 class="card-title">{{product.name}}</h4>
        <!--Text-->
        <span class="red-text font-weight-bold">
          <strong>{{product.price.toLocaleString('en-EN')}} SEK</strong>
        </span>
        <p class="card-text">{{product.short}}</p>
        <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
        <!-- <button
          type="button"
          class="btn btn-light-blue btn-md"
          v-on:click="addItem(item)"
        >add to cart</button>-->
      </div>
      <router-link
        :to="{name: 'Product', params: {id: product._id}}"
        class="btn btn-light-blue btn-md"
      >Visa product</router-link>
    </div>
    <!-- Card -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    product: {
      type: Object
    }
  },
  methods: {
    ...mapActions(["addItem"])
  }
};
</script>

<style>
</style>