<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <div class="container">
      <b-navbar-brand to="/">PIZZA PLANET</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/" class="nav-link">home</router-link>
          <router-link to="/menu" class="nav-link">menu</router-link>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-if="!userIsAuthonticated">
          <router-link to="/signIn" class="nav-link">signIn</router-link>
          <!-- <router-link to="/signUp" class="nav-link">SignUp</router-link> -->
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-else>
          <router-link to="/new-pizza" class="nav-link">new pizza</router-link>
          <router-link to="/manege-menu" class="nav-link"
            >manege menu</router-link
          >
          <router-link to="/clients-orders" tag="li" class="nav-item">
            <a href="#" class="nav-link"> clients orders </a>
          </router-link>
          <b-nav-item class="nav-item" @click.prevent="logout"
            >signOut</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
<script>
export default {
  computed: {
    userIsAuthonticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.navbar {
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.8) !important;
  position: absolute;
  z-index: 9;
  width: 100%;
  border-bottom: 2px solid #ccc;
  box-shadow: 2px 2px 30px 2px #ccc;

  .navbar-brand {
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.5) !important;
    font-weight: bold;
  }
  .nav-link {
    color: rgba(0, 0, 0, 0.5) !important;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
  }
}
</style>
