<template>
  <div class="container my-5 py-5 z-depth-1">
    <!--Section: Content-->
    <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
      <!--Grid row-->
      <div class="row d-flex justify-content-center">
        <!--Grid column-->
        <div class="col-md-6">
          <!-- Default form register -->
          <form class="text-center" v-on:submit.prevent="registerUser(r_user)">
            <p class="h4 mb-4">Sign up</p>

            <div class="form-row mb-4">
              <div class="col">
                <!-- First name -->
                <input
                  v-model="r_user.firstName"
                  type="text"
                  id="defaultRegisterFormFirstName"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col">
                <!-- Last name -->
                <input
                  v-model="r_user.lastName"
                  type="text"
                  id="defaultRegisterFormLastName"
                  class="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>

            <!-- E-mail -->
            <input
              v-model="r_user.email"
              type="email"
              id="defaultRegisterFormEmail"
              class="form-control mb-4"
              placeholder="E-mail"
            />

            <!-- Password -->
            <input
              v-model="r_user.password"
              type="password"
              id="defaultRegisterFormPassword"
              class="form-control"
              placeholder="Password"
              aria-describedby="defaultRegisterFormPasswordHelpBlock"
            />
            <small
              id="defaultRegisterFormPasswordHelpBlock"
              class="form-text text-muted mb-4"
            >At least 8 characters and 1 digit</small>

            <!-- Newsletter -->
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="defaultRegisterFormNewsletter"
              />
              <label class="custom-control-label" for="defaultRegisterFormNewsletter">
                Subscribe to our
                newsletter
              </label>
            </div>

            <!-- Sign up button -->
            <button class="btn btn-info my-4 btn-block">Sign up</button>

            <p>
              Allready a member?
              <router-link to="/profile/login">Login</router-link>
            </p>
            <!-- Social register -->
            <p>or sign up with:</p>

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

            <hr />

            <!-- Terms of service -->
            <p>
              By clicking
              <em>Sign up</em> you agree to our
              <a href target="_blank">terms of service</a>
            </p>
          </form>
          <!-- Default form register -->
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
      r_user: {}
    };
  },
  methods: {
    ...mapActions(["registerUser"])
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

<style>
</style>