<template>
  <div class="container emp-profile" v-if="user !== null">
    <div class="row">
      <div class="col-lg-12">
        <div class="profile-head">
          <h5 class="mt-3">{{ capitalize(user.firstName) + ' ' + capitalize(user.lastName)}}</h5>
          <p class="proile-rating"></p>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="orders-tab"
                data-toggle="tab"
                href="#orders"
                role="tab"
                aria-controls="orders"
                aria-selected="true"
              >Orders</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="false"
              >About</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >Shipping details</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-10">
        <div class="tab-content profile-tab" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="orders"
            role="tabpanel"
            aria-labelledby="orders-tab"
          >
            <Orders />
          </div>
          <div class="tab-pane fade show" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="row">
              <div class="col-md-6 my-label">
                <label class="m-0">User Id</label>
              </div>
              <div class="col-md-6">
                <p class="my-margin-16">{{ user._id}}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 my-label">
                <label class="m-0">First Name</label>
              </div>
              <div class="col-md-6">
                <p class="my-margin-16">{{ user.firstName }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 my-label">
                <label class="m-0">Last Name</label>
              </div>
              <div class="col-md-6">
                <p class="my-margin-16">{{ user.lastName }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 my-label">
                <label class="m-0">Email</label>
              </div>
              <div class="col-md-6">
                <p class="my-margin-16">{{user.email}}</p>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <Shipping v-on:editstate="editState($event)" v-if="!editing" :shipping="user.shipping" />
            <EditShipping
              v-on:editstate="editState($event)"
              v-if="editing"
              :shipping="user.shipping"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import router from "../../router";
import Orders from "../order/Orders";
import Shipping from "./Shipping";
import EditShipping from "./EditShipping";

export default {
  components: {
    Orders,
    Shipping,
    EditShipping
  },
  data() {
    return {
      editing: false
    };
  },
  computed: {
    ...mapGetters(["user", "loggedIn"])
  },
  methods: {
    capitalize(s) {
      if (typeof s !== "string") return "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    },
    editState(e, s) {
      this.editing = e;
    }
  },
  mounted() {
    if (!this.loggedIn) {
      router.push({ path: "/profile/login" });
    }
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
.my-label {
  display: flex;
  align-items: center;
}
.my-margin-16 {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>