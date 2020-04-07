<template>
  <div class="container my-5 py-5 z-depth-1">
    <!--Section: Content-->
    <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
      <!--Grid row-->
      <div class="row d-flex justify-content-center">
        <!--Grid column-->
        <div class="col-md-6">
          <!-- Default form login -->
          <form class="text-center" v-on:submit.prevent="loginUser(l_user)">
            <p class="h4 mb-4">Sign in</p>
            <!-- Email -->
            <input
              v-model="l_user.email"
              type="email"
              id="defaultLoginFormEmail"
              class="form-control mb-4"
              placeholder="E-mail"
            />
            <!-- Password -->
            <input
              v-model="l_user.password"
              type="password"
              id="defaultLoginFormPassword"
              class="form-control mb-4"
              placeholder="Password"
            />

            <div class="d-flex justify-content-around">
              <div>
                <!-- Remember me -->
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember" />
                  <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                </div>
              </div>
              <div>
                <!-- Forgot password -->
                <a href>Forgot password?</a>
              </div>
            </div>

            <!-- Sign in button -->
            <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>

            <!-- Register -->
            <p>
              Not a member?
              <router-link to="/profile/register">Register</router-link>
            </p>

            <!-- Social login -->
            <p>or sign in with:</p>

            <a href="#" class="mx-1" role="button">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="mx-1" role="button">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="mx-1" role="button">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" class="mx-1" role="button">
              <i class="fab fa-github"></i>
            </a>
          </form>
          <!-- Default form login -->
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </section>
    <!--Section: Content-->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import router from "../../router";

export default {
  data() {
    return {
      l_user: {}
    };
  },
  methods: {
    ...mapActions(["loginUser"])
  },
  computed: {
    ...mapGetters(["loggedIn"])
  },
  mounted() {
    if (this.loggedIn) {
      router.push({ path: "/profile" });
    }
  }
};
</script>

<style scoped>
.my-email-input {
  border-radius: 0 5px 5px 0 !important;
}
</style>