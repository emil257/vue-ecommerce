<template>
  <div>
    <div
      v-if="user === null"
      class="py-1 px-2 d-flex justify-content-between align-items-center flex-column"
    >
      <router-link class="btn btn-info btn-block closeNav" tag="button" to="/profile/login">Login</router-link>
    </div>
    <div v-else class="d-flex justify-content-between align-items-center flex-column">
      <i class="fas fa-user-circle fa-4x text-muted my-2"></i>
      <span class="mt-1">{{ user.firstName }}</span>
      <button class="btn btn-link closeNav" v-on:click="logoutUser()">Logout</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UserSettings",
  computed: {
    ...mapGetters(["user", "loggedIn"])
  },
  methods: {
    ...mapActions(["logoutUser", "loadUser"])
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