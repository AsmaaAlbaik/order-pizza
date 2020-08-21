<template>
  <div class="login">
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="background">
          <form class="form" @submit.prevent="signOut">
            <!-- <b-alert show variant="danger" v-if="error">{{ error.message }}</b-alert> -->

            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter Email"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter Password"
                v-model="password"
              />
            </div>

            <button type="submit" class="btn btn-block btn-primary">
              sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(["user", "error"]),
  },
  watch: {
    user(value) {
      console.log("watch: " + value);
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    },
  },
  methods: {
    signOut() {
      this.$store.dispatch("signUserOut", {
        email: this.email,
        pass: this.password,
      });
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped>

.login {
  background: url("../../../src/assets/img/pizza.jpg");
  height: 600px;
  padding: 10%;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -100px;
  &__content {

  }
}
</style>

