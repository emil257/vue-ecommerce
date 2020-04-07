<template>
  <div>
    <form v-on:submit.prevent="updateShipping(u_shipping); $emit('editstate', false)">
      <div class="row">
        <div class="col-md-6 my-label">
          <label class="m-0">Country</label>
        </div>
        <div class="col-md-6">
          <input
            class="form-control my-input"
            type="text"
            v-model="u_shipping.country"
            :placeholder="shipping.country"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 my-label">
          <label class="m-0">City</label>
        </div>
        <div class="col-md-6">
          <input
            class="form-control my-input"
            type="text"
            v-model="u_shipping.city"
            :placeholder="shipping.city"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 my-label">
          <label class="m-0">Postal</label>
        </div>
        <div class="col-md-6">
          <input
            class="form-control my-input"
            type="text"
            v-model="u_shipping.postal"
            :placeholder="shipping.postal"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 my-label">
          <label class="m-0">Adress line</label>
        </div>
        <div class="col-md-6">
          <input
            class="form-control my-input"
            type="text"
            v-model="u_shipping.adressline"
            :placeholder="shipping.adressline"
          />
        </div>
      </div>
      <button class="btn btn-info btn-md mt-3 ml-0">Save Adress</button>
    </form>
    <button v-on:click="$emit('editstate', false)" class="btn btn-warning btn-md ml-0">Cancel</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["shipping"],
  methods: {
    ...mapActions(["updateShipping"]),
    logit(e) {
      console.log(e);
    }
  },
  data() {
    return {
      u_shipping: {
        country: this.shipping.country,
        city: this.shipping.city,
        postal: this.shipping.postal,
        adressline: this.shipping.adressline
      }
    };
  }
};
</script>

<style scoped>
body {
  background: -webkit-linear-gradient(left, #3931af, #00c6ff);
}
.emp-profile {
  padding: 3%;
  margin-top: 3%;
  margin-bottom: 3%;
  border-radius: 0.5rem;
  background: #fff;
}
.profile-img {
  text-align: center;
}
.profile-img img {
  width: 70%;
  height: 100%;
}
.profile-img .file {
  position: relative;
  overflow: hidden;
  margin-top: -20%;
  width: 70%;
  border: none;
  border-radius: 0;
  font-size: 15px;
  background: #212529b8;
}
.profile-img .file input {
  position: absolute;
  opacity: 0;
  right: 0;
  top: 0;
}
.profile-head h5 {
  color: #333;
}
.profile-head h6 {
  color: #0062cc;
}
.profile-edit-btn {
  border: none;
  border-radius: 1.5rem;
  width: 70%;
  padding: 2%;
  font-weight: 600;
  color: #6c757d;
  cursor: pointer;
}
.proile-rating {
  font-size: 12px;
  color: #818182;
  margin-top: 5%;
}
.proile-rating span {
  color: #495057;
  font-size: 15px;
  font-weight: 600;
}
.profile-head .nav-tabs {
  margin-bottom: 5%;
}
.profile-head .nav-tabs .nav-link {
  font-weight: 600;
  border: none;
  color: #33b5e5;
}
.profile-head .nav-tabs .nav-link.active {
  border: none;
  border-bottom: 2px solid #33b5e5;
  color: #495057;
}
.profile-work {
  padding: 14%;
  margin-top: -15%;
}
.profile-work p {
  font-size: 12px;
  color: #818182;
  font-weight: 600;
  margin-top: 10%;
}
.profile-work a {
  text-decoration: none;
  color: #495057;
  font-weight: 600;
  font-size: 14px;
}
.profile-work ul {
  list-style: none;
}
.profile-tab label {
  font-weight: 600;
}
.profile-tab p {
  font-weight: 600;
  color: #33b5e5;
}
.my-input {
  margin-bottom: 2px;
}
.my-label {
  display: flex;
  align-items: center;
}
</style>