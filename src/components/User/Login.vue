<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="div login__content background">
            <AlertApp
              :showDismissibleAlert="showDismissibleAlert"
              :responseStatus="responseStatus"
              :alertMessage="alertMessage"
            />
            <form class="form" @submit.prevent="signIn">
              <div>
                <!-- <p v-if="!currentUser">please login to continue</p> -->
                <!-- <p v-else> you are login as: {{ currentUser }} </p> -->
              </div>
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
                <b-icon
                  icon="arrow-clockwise"
                  animation="spin"
                  font-scale="1"
                  v-if="respo == undefined"
                ></b-icon>
                <template v-else> sign in</template>
              </button>
              <!-- <button type="button" class="btn btn-danger" @click.prevent="signOut()">
      sign out
    </button> -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AlertApp from "@/components/shared/Alert";

export default {
  data() {
    return {
      email: "",
      password: "",
      respo: "value",
      showDismissibleAlert: false,
      responseStatus: "",
      alertMessage: "",
    };
  },
  computed: {
    ...mapGetters(["user", "error", "loading"]),
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/admin");
      }
    },
  },
  methods: {
    signIn() {
      this.respo = undefined;
      this.$store
        .dispatch("signUserIn", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          this.respo = res.operationType;
          console.log(res.message);
          if (res.message !== undefined) {
            this.alertMessage = res.message;
            this.showDismissibleAlert = true;
            this.responseStatus = "danger";
          }
          if (res.operationType !== undefined) {
            this.$router.push("/admin");
          }
        });
    },
  },
  components: {
    AlertApp,
  },
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
