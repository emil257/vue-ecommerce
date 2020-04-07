<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["loggedIn"])
  },
  methods: {
    ...mapActions(["loadUser"])
  },
  mounted() {
    if (this.loggedIn) {
      this.loadUser();
    }
  }
};
</script>

<style>
</style>